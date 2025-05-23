export async function fetchActivityGroups() {
    try {
        const response = await fetch('/api/activity_groups');
        if (!response.ok) {
            throw new Error(`Failed to fetch activity groups: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching activity groups:', error);
        throw error;
    }
}

export async function addActivityGroup(data) {
    try {
        const response = await fetch('/api/activity_groups', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        return response.json();
    } catch (error) {
        console.error('Error adding activity group:', error);
        throw error;
    }
}

export async function updateActivityGroup(id, data) {
    try {
        const response = await fetch(`/api/activity_groups/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        return response.json();
    } catch (error) {
        console.error('Error updating activity group:', error);
        throw error;
    }
}

export async function deleteActivityGroup(id) {
    try {
        const response = await fetch(`/api/activity_groups/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        return response.json();
    } catch (error) {
        console.error('Error deleting activity group:', error);
        throw error;
    }
}

export async function fetchActivities() {
    const response = await fetch('/api/activities');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export async function addActivity(activityData) {
    const response = await fetch('/api/activities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(activityData)
    });
    if (!response.ok) {
        throw new Error('Failed to create activity');
    }
    return response.json();
}

export async function updateActivity(activityId, updateData) {
    const response = await fetch(`/api/activities/${activityId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData),
    });
    if (!response.ok) {
        throw new Error('Failed to update activity');
    }
    return response.json();
}

export async function deleteActivity(activityId) {
    const response = await fetch(`/api/activities/${activityId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete activity');
    }
    return response.json();
}


export async function fetchRecords() {
    const response = await fetch('/api/records');
    if (!response.ok) {
        throw new Error('Failed to fetch records');
    }
    return response.json();
}

export async function createRecord(recordData) {
    const response = await fetch('/api/records', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recordData),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create record');
    }
    return response.json();
}

export async function updateRecord(recordId, updateData) {
    const response = await fetch(`/api/records/${recordId}`, {
        method: 'PUT',  // または PATCH を使用する場合もあります
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData),
    });
    if (!response.ok) {
        throw new Error('Failed to update record');
    }
    return response.json();
}

export async function deleteRecord(recordId) {
    const response = await fetch(`/api/records/${recordId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        // エラー内容が JSON で返ってくる場合、エラーメッセージを抽出します
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete record');
    }
    return response.json();
}

export async function startDiscordPresence(data) {
    // data はオブジェクトで、以下のキーを含むことを想定：
    // { group, activity_name, details, asset_key }
    const response = await fetch('/api/discord_presence/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to start Discord presence');
    }
    return response.json();
}

export async function stopDiscordPresence(data) {
    // data は、最低限 { group } などを含む想定
    const response = await fetch('/api/discord_presence/stop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to stop Discord presence');
    }
    return response.json();
}

export async function updateDiscordPresence(data) {
    const res = await fetch('/api/discord_presence/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to update presence');
    }
    return res.json();
}

/**
 * タグ一覧を取得
 */
export async function fetchTags() {
    const response = await fetch('/api/tags');
    if (!response.ok) {
        throw new Error(`Failed to fetch tags: ${response.statusText}`);
    }
    return response.json();
}

/**
 * 新規タグを作成
 * @param {Object} tagData - { name: string, color?: string }
 */
export async function createTag(tagData) {
    const response = await fetch('/api/tags', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tagData),
    });
    if (!response.ok) {
        throw new Error(`Failed to create tag: ${response.statusText}`);
    }
    return response.json();
}

/**
 * タグを更新
 * @param {number} tagId
 * @param {Object} updateData - { name?: string, color?: string }
 */
export async function updateTag(tagId, updateData) {
    const response = await fetch(`/api/tags/${tagId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData),
    });
    if (!response.ok) {
        throw new Error(`Failed to update tag (id=${tagId}): ${response.statusText}`);
    }
    return response.json();
}

/**
 * タグを削除
 * @param {number} tagId
 */
export async function deleteTag(tagId) {
    const response = await fetch(`/api/tags/${tagId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error(`Failed to delete tag (id=${tagId}): ${response.statusText}`);
    }
    return response.json();
}

/**
 * アクティビティに対するタグのセット・更新
 * @param {number} activityId
 * @param {number[]} tagIds
 */
export async function setActivityTags(activityId, tagIds) {
    const response = await fetch(`/api/activities/${activityId}/tags`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tag_ids: tagIds }),
    });
    if (!response.ok) {
        throw new Error(`Failed to set tags for activity (id=${activityId}): ${response.statusText}`);
    }
    return response.json();
}