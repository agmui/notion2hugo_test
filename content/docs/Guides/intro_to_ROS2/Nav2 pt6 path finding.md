---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765FEURH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCyvtC2Yw%2F5Vnd5mDIZvYLU2LC0E4BdQiJmUQMMzDFypgIgEwEfgu6w9e0YOKOWQZDkWoLAIYh81KG3gIKOIYu6RFwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDJN4jlMuc4MLA8rISrcA9NtI4oNwhZFJTXPwm0pVHJISb4ASkGiu8kwu25KJwQT8PCPV3o25kbCobWATO7RarVDnZL90QnrUcYTsvyvFpbmb48lyuVpR%2B4n4LZDTS5KMwk9UVLzUQ9z0BPWAHjZrNqWAuWfamDKzpxoxki1fRYV4Q0FtwsnL%2Bsq8tFne4HEQvshDvuzxgPvleA4aR%2BfmYcgEySXf9Wc3PO9ODtALZt%2BFa7Lb%2BGunVDcfR1RKkAKdWPy0i3BESK260tGNxDM3sVQ8DPu6bAMsqwdQMP9ENLGju8dWBJ5oFk6NDhh%2Bdt%2F3HeSieAH6PZfmgLVXQAOLEYFM1UqN%2F2FzJwj4Pa1oh11cnkqoS0KEs%2BT5nmsLo2mYxqKXOXS3F08z4xEqHCaOFfRGd860FtMi32%2FFKN%2Bj6svg2UqnjhRi1VjApz6EQW%2FLKsdlJE3fIACBYxwrcfavIo%2F5lap85GAQIuslRumpFnxx%2FUWjwSBWA32XRBWqkpX8pCsI68MW%2BJjvm6zcLmMuGF9ZhRZDJnu8qB%2FNNSeuCnksWEUHoReyI1wOarH6L8c%2B5pp4gzfI42KJbBpk5yXLjYiVuLjHF4FHfAoY7fvBZKNg%2BiBpXcCYEmRpyQ6cAJZtTBXf%2FeJmWkgQNg8MMiGjsQGOqUB43UmrJMEer1y4ppmGi%2BA7Rm8EYT2j2jd%2FA%2FNbCV3wEbQOoBR%2FY%2BH4F1MiKHh3N26ihNhrovcDVE1rEHtkBctn7wmVXPL8XMkNywcmwFefxKYR2lsYNRj3kwKdyqiOHPy%2F1%2B7Ph0wss67mmjuBQeEGqzuMtYjN25QWVWuxOU%2B62lZ%2FRf86v0AFGlCmtwJAIJJtHNnNvHchoFu%2Fq4dtl7A2Szt2HVB&X-Amz-Signature=bd703eeaadce09ede70c1c239db96d7deed4d363cb530804acef227b92abd8df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765FEURH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCyvtC2Yw%2F5Vnd5mDIZvYLU2LC0E4BdQiJmUQMMzDFypgIgEwEfgu6w9e0YOKOWQZDkWoLAIYh81KG3gIKOIYu6RFwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDJN4jlMuc4MLA8rISrcA9NtI4oNwhZFJTXPwm0pVHJISb4ASkGiu8kwu25KJwQT8PCPV3o25kbCobWATO7RarVDnZL90QnrUcYTsvyvFpbmb48lyuVpR%2B4n4LZDTS5KMwk9UVLzUQ9z0BPWAHjZrNqWAuWfamDKzpxoxki1fRYV4Q0FtwsnL%2Bsq8tFne4HEQvshDvuzxgPvleA4aR%2BfmYcgEySXf9Wc3PO9ODtALZt%2BFa7Lb%2BGunVDcfR1RKkAKdWPy0i3BESK260tGNxDM3sVQ8DPu6bAMsqwdQMP9ENLGju8dWBJ5oFk6NDhh%2Bdt%2F3HeSieAH6PZfmgLVXQAOLEYFM1UqN%2F2FzJwj4Pa1oh11cnkqoS0KEs%2BT5nmsLo2mYxqKXOXS3F08z4xEqHCaOFfRGd860FtMi32%2FFKN%2Bj6svg2UqnjhRi1VjApz6EQW%2FLKsdlJE3fIACBYxwrcfavIo%2F5lap85GAQIuslRumpFnxx%2FUWjwSBWA32XRBWqkpX8pCsI68MW%2BJjvm6zcLmMuGF9ZhRZDJnu8qB%2FNNSeuCnksWEUHoReyI1wOarH6L8c%2B5pp4gzfI42KJbBpk5yXLjYiVuLjHF4FHfAoY7fvBZKNg%2BiBpXcCYEmRpyQ6cAJZtTBXf%2FeJmWkgQNg8MMiGjsQGOqUB43UmrJMEer1y4ppmGi%2BA7Rm8EYT2j2jd%2FA%2FNbCV3wEbQOoBR%2FY%2BH4F1MiKHh3N26ihNhrovcDVE1rEHtkBctn7wmVXPL8XMkNywcmwFefxKYR2lsYNRj3kwKdyqiOHPy%2F1%2B7Ph0wss67mmjuBQeEGqzuMtYjN25QWVWuxOU%2B62lZ%2FRf86v0AFGlCmtwJAIJJtHNnNvHchoFu%2Fq4dtl7A2Szt2HVB&X-Amz-Signature=52fb111ef981838b66df3b31838fa41776e673aa7213edf9b7e401019ee99152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765FEURH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCyvtC2Yw%2F5Vnd5mDIZvYLU2LC0E4BdQiJmUQMMzDFypgIgEwEfgu6w9e0YOKOWQZDkWoLAIYh81KG3gIKOIYu6RFwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDJN4jlMuc4MLA8rISrcA9NtI4oNwhZFJTXPwm0pVHJISb4ASkGiu8kwu25KJwQT8PCPV3o25kbCobWATO7RarVDnZL90QnrUcYTsvyvFpbmb48lyuVpR%2B4n4LZDTS5KMwk9UVLzUQ9z0BPWAHjZrNqWAuWfamDKzpxoxki1fRYV4Q0FtwsnL%2Bsq8tFne4HEQvshDvuzxgPvleA4aR%2BfmYcgEySXf9Wc3PO9ODtALZt%2BFa7Lb%2BGunVDcfR1RKkAKdWPy0i3BESK260tGNxDM3sVQ8DPu6bAMsqwdQMP9ENLGju8dWBJ5oFk6NDhh%2Bdt%2F3HeSieAH6PZfmgLVXQAOLEYFM1UqN%2F2FzJwj4Pa1oh11cnkqoS0KEs%2BT5nmsLo2mYxqKXOXS3F08z4xEqHCaOFfRGd860FtMi32%2FFKN%2Bj6svg2UqnjhRi1VjApz6EQW%2FLKsdlJE3fIACBYxwrcfavIo%2F5lap85GAQIuslRumpFnxx%2FUWjwSBWA32XRBWqkpX8pCsI68MW%2BJjvm6zcLmMuGF9ZhRZDJnu8qB%2FNNSeuCnksWEUHoReyI1wOarH6L8c%2B5pp4gzfI42KJbBpk5yXLjYiVuLjHF4FHfAoY7fvBZKNg%2BiBpXcCYEmRpyQ6cAJZtTBXf%2FeJmWkgQNg8MMiGjsQGOqUB43UmrJMEer1y4ppmGi%2BA7Rm8EYT2j2jd%2FA%2FNbCV3wEbQOoBR%2FY%2BH4F1MiKHh3N26ihNhrovcDVE1rEHtkBctn7wmVXPL8XMkNywcmwFefxKYR2lsYNRj3kwKdyqiOHPy%2F1%2B7Ph0wss67mmjuBQeEGqzuMtYjN25QWVWuxOU%2B62lZ%2FRf86v0AFGlCmtwJAIJJtHNnNvHchoFu%2Fq4dtl7A2Szt2HVB&X-Amz-Signature=3f9adfeeab44f3029966e3dfa38ad4c55a7a0667a2bdb6b68dec3dfafedf4135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765FEURH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCyvtC2Yw%2F5Vnd5mDIZvYLU2LC0E4BdQiJmUQMMzDFypgIgEwEfgu6w9e0YOKOWQZDkWoLAIYh81KG3gIKOIYu6RFwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDJN4jlMuc4MLA8rISrcA9NtI4oNwhZFJTXPwm0pVHJISb4ASkGiu8kwu25KJwQT8PCPV3o25kbCobWATO7RarVDnZL90QnrUcYTsvyvFpbmb48lyuVpR%2B4n4LZDTS5KMwk9UVLzUQ9z0BPWAHjZrNqWAuWfamDKzpxoxki1fRYV4Q0FtwsnL%2Bsq8tFne4HEQvshDvuzxgPvleA4aR%2BfmYcgEySXf9Wc3PO9ODtALZt%2BFa7Lb%2BGunVDcfR1RKkAKdWPy0i3BESK260tGNxDM3sVQ8DPu6bAMsqwdQMP9ENLGju8dWBJ5oFk6NDhh%2Bdt%2F3HeSieAH6PZfmgLVXQAOLEYFM1UqN%2F2FzJwj4Pa1oh11cnkqoS0KEs%2BT5nmsLo2mYxqKXOXS3F08z4xEqHCaOFfRGd860FtMi32%2FFKN%2Bj6svg2UqnjhRi1VjApz6EQW%2FLKsdlJE3fIACBYxwrcfavIo%2F5lap85GAQIuslRumpFnxx%2FUWjwSBWA32XRBWqkpX8pCsI68MW%2BJjvm6zcLmMuGF9ZhRZDJnu8qB%2FNNSeuCnksWEUHoReyI1wOarH6L8c%2B5pp4gzfI42KJbBpk5yXLjYiVuLjHF4FHfAoY7fvBZKNg%2BiBpXcCYEmRpyQ6cAJZtTBXf%2FeJmWkgQNg8MMiGjsQGOqUB43UmrJMEer1y4ppmGi%2BA7Rm8EYT2j2jd%2FA%2FNbCV3wEbQOoBR%2FY%2BH4F1MiKHh3N26ihNhrovcDVE1rEHtkBctn7wmVXPL8XMkNywcmwFefxKYR2lsYNRj3kwKdyqiOHPy%2F1%2B7Ph0wss67mmjuBQeEGqzuMtYjN25QWVWuxOU%2B62lZ%2FRf86v0AFGlCmtwJAIJJtHNnNvHchoFu%2Fq4dtl7A2Szt2HVB&X-Amz-Signature=678c7a52c82028e8512234a746eefa0ea9c0b2d3bdfa67b011c2f9ed9c8ace80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765FEURH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCyvtC2Yw%2F5Vnd5mDIZvYLU2LC0E4BdQiJmUQMMzDFypgIgEwEfgu6w9e0YOKOWQZDkWoLAIYh81KG3gIKOIYu6RFwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDJN4jlMuc4MLA8rISrcA9NtI4oNwhZFJTXPwm0pVHJISb4ASkGiu8kwu25KJwQT8PCPV3o25kbCobWATO7RarVDnZL90QnrUcYTsvyvFpbmb48lyuVpR%2B4n4LZDTS5KMwk9UVLzUQ9z0BPWAHjZrNqWAuWfamDKzpxoxki1fRYV4Q0FtwsnL%2Bsq8tFne4HEQvshDvuzxgPvleA4aR%2BfmYcgEySXf9Wc3PO9ODtALZt%2BFa7Lb%2BGunVDcfR1RKkAKdWPy0i3BESK260tGNxDM3sVQ8DPu6bAMsqwdQMP9ENLGju8dWBJ5oFk6NDhh%2Bdt%2F3HeSieAH6PZfmgLVXQAOLEYFM1UqN%2F2FzJwj4Pa1oh11cnkqoS0KEs%2BT5nmsLo2mYxqKXOXS3F08z4xEqHCaOFfRGd860FtMi32%2FFKN%2Bj6svg2UqnjhRi1VjApz6EQW%2FLKsdlJE3fIACBYxwrcfavIo%2F5lap85GAQIuslRumpFnxx%2FUWjwSBWA32XRBWqkpX8pCsI68MW%2BJjvm6zcLmMuGF9ZhRZDJnu8qB%2FNNSeuCnksWEUHoReyI1wOarH6L8c%2B5pp4gzfI42KJbBpk5yXLjYiVuLjHF4FHfAoY7fvBZKNg%2BiBpXcCYEmRpyQ6cAJZtTBXf%2FeJmWkgQNg8MMiGjsQGOqUB43UmrJMEer1y4ppmGi%2BA7Rm8EYT2j2jd%2FA%2FNbCV3wEbQOoBR%2FY%2BH4F1MiKHh3N26ihNhrovcDVE1rEHtkBctn7wmVXPL8XMkNywcmwFefxKYR2lsYNRj3kwKdyqiOHPy%2F1%2B7Ph0wss67mmjuBQeEGqzuMtYjN25QWVWuxOU%2B62lZ%2FRf86v0AFGlCmtwJAIJJtHNnNvHchoFu%2Fq4dtl7A2Szt2HVB&X-Amz-Signature=3eaa746dda8a164d3e888013f576472c10dd8a8408c5ff73108361fca8b8af35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765FEURH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCyvtC2Yw%2F5Vnd5mDIZvYLU2LC0E4BdQiJmUQMMzDFypgIgEwEfgu6w9e0YOKOWQZDkWoLAIYh81KG3gIKOIYu6RFwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDJN4jlMuc4MLA8rISrcA9NtI4oNwhZFJTXPwm0pVHJISb4ASkGiu8kwu25KJwQT8PCPV3o25kbCobWATO7RarVDnZL90QnrUcYTsvyvFpbmb48lyuVpR%2B4n4LZDTS5KMwk9UVLzUQ9z0BPWAHjZrNqWAuWfamDKzpxoxki1fRYV4Q0FtwsnL%2Bsq8tFne4HEQvshDvuzxgPvleA4aR%2BfmYcgEySXf9Wc3PO9ODtALZt%2BFa7Lb%2BGunVDcfR1RKkAKdWPy0i3BESK260tGNxDM3sVQ8DPu6bAMsqwdQMP9ENLGju8dWBJ5oFk6NDhh%2Bdt%2F3HeSieAH6PZfmgLVXQAOLEYFM1UqN%2F2FzJwj4Pa1oh11cnkqoS0KEs%2BT5nmsLo2mYxqKXOXS3F08z4xEqHCaOFfRGd860FtMi32%2FFKN%2Bj6svg2UqnjhRi1VjApz6EQW%2FLKsdlJE3fIACBYxwrcfavIo%2F5lap85GAQIuslRumpFnxx%2FUWjwSBWA32XRBWqkpX8pCsI68MW%2BJjvm6zcLmMuGF9ZhRZDJnu8qB%2FNNSeuCnksWEUHoReyI1wOarH6L8c%2B5pp4gzfI42KJbBpk5yXLjYiVuLjHF4FHfAoY7fvBZKNg%2BiBpXcCYEmRpyQ6cAJZtTBXf%2FeJmWkgQNg8MMiGjsQGOqUB43UmrJMEer1y4ppmGi%2BA7Rm8EYT2j2jd%2FA%2FNbCV3wEbQOoBR%2FY%2BH4F1MiKHh3N26ihNhrovcDVE1rEHtkBctn7wmVXPL8XMkNywcmwFefxKYR2lsYNRj3kwKdyqiOHPy%2F1%2B7Ph0wss67mmjuBQeEGqzuMtYjN25QWVWuxOU%2B62lZ%2FRf86v0AFGlCmtwJAIJJtHNnNvHchoFu%2Fq4dtl7A2Szt2HVB&X-Amz-Signature=cec94d718ed0619238ac6f90cb3d4c6700934cebee67b9b3f3d80498e2da301f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

```python
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
        }.items()
    )
    
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

# Nav2 settings

TODO: change footprint?
