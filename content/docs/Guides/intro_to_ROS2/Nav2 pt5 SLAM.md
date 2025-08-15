---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
      <summary>What is slam?</summary>
      TODO:
  </details>

ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYJXHGV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFRYfeBv%2F5hrAE%2BZeWCMJodcrSxJ1lalMo5WNVtbBOv0AiAdjZ3a1k3mFAG0DWgwOh%2FHYahClht2hQt4gK81VSmOySr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMBZPEK2zlOKLCDEtSKtwDF%2Ft5dlOlfLKHFpDMiX24EFyf8g8Z%2FRtPRj9F29cRIamvDc0UUgqxp8%2Fu4VOYNkgjJGxC%2BgUsMcf9PZQifry2VCScGSZDX49zGdpbSvid8Uvs741dbg0TByV89x%2B5mFNcpLLRrcnjGozM0xh87kkSBqkJbZ81KvMtWVjGpRXfgqU48o2%2FLnnNmgFs7np%2F1HEQrwLBiUKSNN%2FWcPaDtFoFM2ooGXXaXqfX%2FOvkGsfmpKqzPRWmF5eT6%2Fgv7MxR7MCz1Dwx81ibj4eVVy1yxtlkEl4pj%2FetDu6fylr%2Fk1seUNZYSJQBWKMUiUlBtbhLEBv2hsBCrxY0eW2qm9TdAtboPWpKBYjJdDiAsWCSSayBPppnUWOCHy6VT%2BgajQJlr4tRGjvH0OekU0azL%2FkZJqCagGejMJpYxf%2FY14Ng5h9mTG%2BxADLUtAuPj8XDMrKkszlqkn1sgRhES3Ti2K7lPaRfmdeEg9svKiwoLJPPEWI7nKofjoQboA8yXJaRzxAWppvw%2F%2FOEYkj84SO7FyNiABDr6J9RtNkf77%2BAh9EPN8SmVSNtatB%2B12n3xgrwzycjLWGKi57E8bXV3JnU0N4iEqMachpm38OVvRIUv2ex1bw0mo0wbUQ4qxKDqCrnwIgwhbj8xAY6pgGM3kYKm0Av%2FCqHi4Nv7HIO0jMwWWLPZPRhD7zLx8NtUZyoXLg3%2FOZAWAmG%2FSj2OmsPgKM5HODAViunNc9qJo5Vk%2FZ3HZK4b2FXJGLzKWX3AAGOFGINYqsBJZqSAIB0WpcYeAv%2Bu5PbkJe6DyKuEtLcT96FfWgZpazSuYV2Zhc2m8HQK2NN6zxZQqWzuZmmlr8EmUEJJD7bwKLvGDvmX87uYGlW1l4m&X-Amz-Signature=09040d0d7163ff772837749fca127133795ce06ae17dadf4d227738c99863afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYJXHGV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFRYfeBv%2F5hrAE%2BZeWCMJodcrSxJ1lalMo5WNVtbBOv0AiAdjZ3a1k3mFAG0DWgwOh%2FHYahClht2hQt4gK81VSmOySr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMBZPEK2zlOKLCDEtSKtwDF%2Ft5dlOlfLKHFpDMiX24EFyf8g8Z%2FRtPRj9F29cRIamvDc0UUgqxp8%2Fu4VOYNkgjJGxC%2BgUsMcf9PZQifry2VCScGSZDX49zGdpbSvid8Uvs741dbg0TByV89x%2B5mFNcpLLRrcnjGozM0xh87kkSBqkJbZ81KvMtWVjGpRXfgqU48o2%2FLnnNmgFs7np%2F1HEQrwLBiUKSNN%2FWcPaDtFoFM2ooGXXaXqfX%2FOvkGsfmpKqzPRWmF5eT6%2Fgv7MxR7MCz1Dwx81ibj4eVVy1yxtlkEl4pj%2FetDu6fylr%2Fk1seUNZYSJQBWKMUiUlBtbhLEBv2hsBCrxY0eW2qm9TdAtboPWpKBYjJdDiAsWCSSayBPppnUWOCHy6VT%2BgajQJlr4tRGjvH0OekU0azL%2FkZJqCagGejMJpYxf%2FY14Ng5h9mTG%2BxADLUtAuPj8XDMrKkszlqkn1sgRhES3Ti2K7lPaRfmdeEg9svKiwoLJPPEWI7nKofjoQboA8yXJaRzxAWppvw%2F%2FOEYkj84SO7FyNiABDr6J9RtNkf77%2BAh9EPN8SmVSNtatB%2B12n3xgrwzycjLWGKi57E8bXV3JnU0N4iEqMachpm38OVvRIUv2ex1bw0mo0wbUQ4qxKDqCrnwIgwhbj8xAY6pgGM3kYKm0Av%2FCqHi4Nv7HIO0jMwWWLPZPRhD7zLx8NtUZyoXLg3%2FOZAWAmG%2FSj2OmsPgKM5HODAViunNc9qJo5Vk%2FZ3HZK4b2FXJGLzKWX3AAGOFGINYqsBJZqSAIB0WpcYeAv%2Bu5PbkJe6DyKuEtLcT96FfWgZpazSuYV2Zhc2m8HQK2NN6zxZQqWzuZmmlr8EmUEJJD7bwKLvGDvmX87uYGlW1l4m&X-Amz-Signature=9519a67c484add5d3a7bacd0f5e497dbb285b55bc9616cbd7288ea8db58bf3e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYJXHGV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFRYfeBv%2F5hrAE%2BZeWCMJodcrSxJ1lalMo5WNVtbBOv0AiAdjZ3a1k3mFAG0DWgwOh%2FHYahClht2hQt4gK81VSmOySr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMBZPEK2zlOKLCDEtSKtwDF%2Ft5dlOlfLKHFpDMiX24EFyf8g8Z%2FRtPRj9F29cRIamvDc0UUgqxp8%2Fu4VOYNkgjJGxC%2BgUsMcf9PZQifry2VCScGSZDX49zGdpbSvid8Uvs741dbg0TByV89x%2B5mFNcpLLRrcnjGozM0xh87kkSBqkJbZ81KvMtWVjGpRXfgqU48o2%2FLnnNmgFs7np%2F1HEQrwLBiUKSNN%2FWcPaDtFoFM2ooGXXaXqfX%2FOvkGsfmpKqzPRWmF5eT6%2Fgv7MxR7MCz1Dwx81ibj4eVVy1yxtlkEl4pj%2FetDu6fylr%2Fk1seUNZYSJQBWKMUiUlBtbhLEBv2hsBCrxY0eW2qm9TdAtboPWpKBYjJdDiAsWCSSayBPppnUWOCHy6VT%2BgajQJlr4tRGjvH0OekU0azL%2FkZJqCagGejMJpYxf%2FY14Ng5h9mTG%2BxADLUtAuPj8XDMrKkszlqkn1sgRhES3Ti2K7lPaRfmdeEg9svKiwoLJPPEWI7nKofjoQboA8yXJaRzxAWppvw%2F%2FOEYkj84SO7FyNiABDr6J9RtNkf77%2BAh9EPN8SmVSNtatB%2B12n3xgrwzycjLWGKi57E8bXV3JnU0N4iEqMachpm38OVvRIUv2ex1bw0mo0wbUQ4qxKDqCrnwIgwhbj8xAY6pgGM3kYKm0Av%2FCqHi4Nv7HIO0jMwWWLPZPRhD7zLx8NtUZyoXLg3%2FOZAWAmG%2FSj2OmsPgKM5HODAViunNc9qJo5Vk%2FZ3HZK4b2FXJGLzKWX3AAGOFGINYqsBJZqSAIB0WpcYeAv%2Bu5PbkJe6DyKuEtLcT96FfWgZpazSuYV2Zhc2m8HQK2NN6zxZQqWzuZmmlr8EmUEJJD7bwKLvGDvmX87uYGlW1l4m&X-Amz-Signature=326f889941970fba9c015866d8d369d4ed9b28c06a1d589cb27cd86783add693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYJXHGV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFRYfeBv%2F5hrAE%2BZeWCMJodcrSxJ1lalMo5WNVtbBOv0AiAdjZ3a1k3mFAG0DWgwOh%2FHYahClht2hQt4gK81VSmOySr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMBZPEK2zlOKLCDEtSKtwDF%2Ft5dlOlfLKHFpDMiX24EFyf8g8Z%2FRtPRj9F29cRIamvDc0UUgqxp8%2Fu4VOYNkgjJGxC%2BgUsMcf9PZQifry2VCScGSZDX49zGdpbSvid8Uvs741dbg0TByV89x%2B5mFNcpLLRrcnjGozM0xh87kkSBqkJbZ81KvMtWVjGpRXfgqU48o2%2FLnnNmgFs7np%2F1HEQrwLBiUKSNN%2FWcPaDtFoFM2ooGXXaXqfX%2FOvkGsfmpKqzPRWmF5eT6%2Fgv7MxR7MCz1Dwx81ibj4eVVy1yxtlkEl4pj%2FetDu6fylr%2Fk1seUNZYSJQBWKMUiUlBtbhLEBv2hsBCrxY0eW2qm9TdAtboPWpKBYjJdDiAsWCSSayBPppnUWOCHy6VT%2BgajQJlr4tRGjvH0OekU0azL%2FkZJqCagGejMJpYxf%2FY14Ng5h9mTG%2BxADLUtAuPj8XDMrKkszlqkn1sgRhES3Ti2K7lPaRfmdeEg9svKiwoLJPPEWI7nKofjoQboA8yXJaRzxAWppvw%2F%2FOEYkj84SO7FyNiABDr6J9RtNkf77%2BAh9EPN8SmVSNtatB%2B12n3xgrwzycjLWGKi57E8bXV3JnU0N4iEqMachpm38OVvRIUv2ex1bw0mo0wbUQ4qxKDqCrnwIgwhbj8xAY6pgGM3kYKm0Av%2FCqHi4Nv7HIO0jMwWWLPZPRhD7zLx8NtUZyoXLg3%2FOZAWAmG%2FSj2OmsPgKM5HODAViunNc9qJo5Vk%2FZ3HZK4b2FXJGLzKWX3AAGOFGINYqsBJZqSAIB0WpcYeAv%2Bu5PbkJe6DyKuEtLcT96FfWgZpazSuYV2Zhc2m8HQK2NN6zxZQqWzuZmmlr8EmUEJJD7bwKLvGDvmX87uYGlW1l4m&X-Amz-Signature=69d4456e7b6b3b9504a4e94a15fedb749f437aef1c1e50f9c209e6eb971ffd53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYJXHGV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFRYfeBv%2F5hrAE%2BZeWCMJodcrSxJ1lalMo5WNVtbBOv0AiAdjZ3a1k3mFAG0DWgwOh%2FHYahClht2hQt4gK81VSmOySr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMBZPEK2zlOKLCDEtSKtwDF%2Ft5dlOlfLKHFpDMiX24EFyf8g8Z%2FRtPRj9F29cRIamvDc0UUgqxp8%2Fu4VOYNkgjJGxC%2BgUsMcf9PZQifry2VCScGSZDX49zGdpbSvid8Uvs741dbg0TByV89x%2B5mFNcpLLRrcnjGozM0xh87kkSBqkJbZ81KvMtWVjGpRXfgqU48o2%2FLnnNmgFs7np%2F1HEQrwLBiUKSNN%2FWcPaDtFoFM2ooGXXaXqfX%2FOvkGsfmpKqzPRWmF5eT6%2Fgv7MxR7MCz1Dwx81ibj4eVVy1yxtlkEl4pj%2FetDu6fylr%2Fk1seUNZYSJQBWKMUiUlBtbhLEBv2hsBCrxY0eW2qm9TdAtboPWpKBYjJdDiAsWCSSayBPppnUWOCHy6VT%2BgajQJlr4tRGjvH0OekU0azL%2FkZJqCagGejMJpYxf%2FY14Ng5h9mTG%2BxADLUtAuPj8XDMrKkszlqkn1sgRhES3Ti2K7lPaRfmdeEg9svKiwoLJPPEWI7nKofjoQboA8yXJaRzxAWppvw%2F%2FOEYkj84SO7FyNiABDr6J9RtNkf77%2BAh9EPN8SmVSNtatB%2B12n3xgrwzycjLWGKi57E8bXV3JnU0N4iEqMachpm38OVvRIUv2ex1bw0mo0wbUQ4qxKDqCrnwIgwhbj8xAY6pgGM3kYKm0Av%2FCqHi4Nv7HIO0jMwWWLPZPRhD7zLx8NtUZyoXLg3%2FOZAWAmG%2FSj2OmsPgKM5HODAViunNc9qJo5Vk%2FZ3HZK4b2FXJGLzKWX3AAGOFGINYqsBJZqSAIB0WpcYeAv%2Bu5PbkJe6DyKuEtLcT96FfWgZpazSuYV2Zhc2m8HQK2NN6zxZQqWzuZmmlr8EmUEJJD7bwKLvGDvmX87uYGlW1l4m&X-Amz-Signature=b140c44f3b212544eb5b8daa8b6511ece9a71cd0a61b2ebd6242edc7cc88cb5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYJXHGV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFRYfeBv%2F5hrAE%2BZeWCMJodcrSxJ1lalMo5WNVtbBOv0AiAdjZ3a1k3mFAG0DWgwOh%2FHYahClht2hQt4gK81VSmOySr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMBZPEK2zlOKLCDEtSKtwDF%2Ft5dlOlfLKHFpDMiX24EFyf8g8Z%2FRtPRj9F29cRIamvDc0UUgqxp8%2Fu4VOYNkgjJGxC%2BgUsMcf9PZQifry2VCScGSZDX49zGdpbSvid8Uvs741dbg0TByV89x%2B5mFNcpLLRrcnjGozM0xh87kkSBqkJbZ81KvMtWVjGpRXfgqU48o2%2FLnnNmgFs7np%2F1HEQrwLBiUKSNN%2FWcPaDtFoFM2ooGXXaXqfX%2FOvkGsfmpKqzPRWmF5eT6%2Fgv7MxR7MCz1Dwx81ibj4eVVy1yxtlkEl4pj%2FetDu6fylr%2Fk1seUNZYSJQBWKMUiUlBtbhLEBv2hsBCrxY0eW2qm9TdAtboPWpKBYjJdDiAsWCSSayBPppnUWOCHy6VT%2BgajQJlr4tRGjvH0OekU0azL%2FkZJqCagGejMJpYxf%2FY14Ng5h9mTG%2BxADLUtAuPj8XDMrKkszlqkn1sgRhES3Ti2K7lPaRfmdeEg9svKiwoLJPPEWI7nKofjoQboA8yXJaRzxAWppvw%2F%2FOEYkj84SO7FyNiABDr6J9RtNkf77%2BAh9EPN8SmVSNtatB%2B12n3xgrwzycjLWGKi57E8bXV3JnU0N4iEqMachpm38OVvRIUv2ex1bw0mo0wbUQ4qxKDqCrnwIgwhbj8xAY6pgGM3kYKm0Av%2FCqHi4Nv7HIO0jMwWWLPZPRhD7zLx8NtUZyoXLg3%2FOZAWAmG%2FSj2OmsPgKM5HODAViunNc9qJo5Vk%2FZ3HZK4b2FXJGLzKWX3AAGOFGINYqsBJZqSAIB0WpcYeAv%2Bu5PbkJe6DyKuEtLcT96FfWgZpazSuYV2Zhc2m8HQK2NN6zxZQqWzuZmmlr8EmUEJJD7bwKLvGDvmX87uYGlW1l4m&X-Amz-Signature=f9dc1ada2302bbf0fde2d89bf6ff972316e98efbbfdc2997efc27e2b9d8a558c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYJXHGV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFRYfeBv%2F5hrAE%2BZeWCMJodcrSxJ1lalMo5WNVtbBOv0AiAdjZ3a1k3mFAG0DWgwOh%2FHYahClht2hQt4gK81VSmOySr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMBZPEK2zlOKLCDEtSKtwDF%2Ft5dlOlfLKHFpDMiX24EFyf8g8Z%2FRtPRj9F29cRIamvDc0UUgqxp8%2Fu4VOYNkgjJGxC%2BgUsMcf9PZQifry2VCScGSZDX49zGdpbSvid8Uvs741dbg0TByV89x%2B5mFNcpLLRrcnjGozM0xh87kkSBqkJbZ81KvMtWVjGpRXfgqU48o2%2FLnnNmgFs7np%2F1HEQrwLBiUKSNN%2FWcPaDtFoFM2ooGXXaXqfX%2FOvkGsfmpKqzPRWmF5eT6%2Fgv7MxR7MCz1Dwx81ibj4eVVy1yxtlkEl4pj%2FetDu6fylr%2Fk1seUNZYSJQBWKMUiUlBtbhLEBv2hsBCrxY0eW2qm9TdAtboPWpKBYjJdDiAsWCSSayBPppnUWOCHy6VT%2BgajQJlr4tRGjvH0OekU0azL%2FkZJqCagGejMJpYxf%2FY14Ng5h9mTG%2BxADLUtAuPj8XDMrKkszlqkn1sgRhES3Ti2K7lPaRfmdeEg9svKiwoLJPPEWI7nKofjoQboA8yXJaRzxAWppvw%2F%2FOEYkj84SO7FyNiABDr6J9RtNkf77%2BAh9EPN8SmVSNtatB%2B12n3xgrwzycjLWGKi57E8bXV3JnU0N4iEqMachpm38OVvRIUv2ex1bw0mo0wbUQ4qxKDqCrnwIgwhbj8xAY6pgGM3kYKm0Av%2FCqHi4Nv7HIO0jMwWWLPZPRhD7zLx8NtUZyoXLg3%2FOZAWAmG%2FSj2OmsPgKM5HODAViunNc9qJo5Vk%2FZ3HZK4b2FXJGLzKWX3AAGOFGINYqsBJZqSAIB0WpcYeAv%2Bu5PbkJe6DyKuEtLcT96FfWgZpazSuYV2Zhc2m8HQK2NN6zxZQqWzuZmmlr8EmUEJJD7bwKLvGDvmX87uYGlW1l4m&X-Amz-Signature=a7a079fc9b15681b7a9cd653cc507000e118ee72faecbd0b9ee4610398c9c587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python
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
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYJXHGV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFRYfeBv%2F5hrAE%2BZeWCMJodcrSxJ1lalMo5WNVtbBOv0AiAdjZ3a1k3mFAG0DWgwOh%2FHYahClht2hQt4gK81VSmOySr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMBZPEK2zlOKLCDEtSKtwDF%2Ft5dlOlfLKHFpDMiX24EFyf8g8Z%2FRtPRj9F29cRIamvDc0UUgqxp8%2Fu4VOYNkgjJGxC%2BgUsMcf9PZQifry2VCScGSZDX49zGdpbSvid8Uvs741dbg0TByV89x%2B5mFNcpLLRrcnjGozM0xh87kkSBqkJbZ81KvMtWVjGpRXfgqU48o2%2FLnnNmgFs7np%2F1HEQrwLBiUKSNN%2FWcPaDtFoFM2ooGXXaXqfX%2FOvkGsfmpKqzPRWmF5eT6%2Fgv7MxR7MCz1Dwx81ibj4eVVy1yxtlkEl4pj%2FetDu6fylr%2Fk1seUNZYSJQBWKMUiUlBtbhLEBv2hsBCrxY0eW2qm9TdAtboPWpKBYjJdDiAsWCSSayBPppnUWOCHy6VT%2BgajQJlr4tRGjvH0OekU0azL%2FkZJqCagGejMJpYxf%2FY14Ng5h9mTG%2BxADLUtAuPj8XDMrKkszlqkn1sgRhES3Ti2K7lPaRfmdeEg9svKiwoLJPPEWI7nKofjoQboA8yXJaRzxAWppvw%2F%2FOEYkj84SO7FyNiABDr6J9RtNkf77%2BAh9EPN8SmVSNtatB%2B12n3xgrwzycjLWGKi57E8bXV3JnU0N4iEqMachpm38OVvRIUv2ex1bw0mo0wbUQ4qxKDqCrnwIgwhbj8xAY6pgGM3kYKm0Av%2FCqHi4Nv7HIO0jMwWWLPZPRhD7zLx8NtUZyoXLg3%2FOZAWAmG%2FSj2OmsPgKM5HODAViunNc9qJo5Vk%2FZ3HZK4b2FXJGLzKWX3AAGOFGINYqsBJZqSAIB0WpcYeAv%2Bu5PbkJe6DyKuEtLcT96FfWgZpazSuYV2Zhc2m8HQK2NN6zxZQqWzuZmmlr8EmUEJJD7bwKLvGDvmX87uYGlW1l4m&X-Amz-Signature=28b7feba8ba8e166138511a6fd91ca86e0111055cd122d26191823c76305ce7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYJXHGV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFRYfeBv%2F5hrAE%2BZeWCMJodcrSxJ1lalMo5WNVtbBOv0AiAdjZ3a1k3mFAG0DWgwOh%2FHYahClht2hQt4gK81VSmOySr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMBZPEK2zlOKLCDEtSKtwDF%2Ft5dlOlfLKHFpDMiX24EFyf8g8Z%2FRtPRj9F29cRIamvDc0UUgqxp8%2Fu4VOYNkgjJGxC%2BgUsMcf9PZQifry2VCScGSZDX49zGdpbSvid8Uvs741dbg0TByV89x%2B5mFNcpLLRrcnjGozM0xh87kkSBqkJbZ81KvMtWVjGpRXfgqU48o2%2FLnnNmgFs7np%2F1HEQrwLBiUKSNN%2FWcPaDtFoFM2ooGXXaXqfX%2FOvkGsfmpKqzPRWmF5eT6%2Fgv7MxR7MCz1Dwx81ibj4eVVy1yxtlkEl4pj%2FetDu6fylr%2Fk1seUNZYSJQBWKMUiUlBtbhLEBv2hsBCrxY0eW2qm9TdAtboPWpKBYjJdDiAsWCSSayBPppnUWOCHy6VT%2BgajQJlr4tRGjvH0OekU0azL%2FkZJqCagGejMJpYxf%2FY14Ng5h9mTG%2BxADLUtAuPj8XDMrKkszlqkn1sgRhES3Ti2K7lPaRfmdeEg9svKiwoLJPPEWI7nKofjoQboA8yXJaRzxAWppvw%2F%2FOEYkj84SO7FyNiABDr6J9RtNkf77%2BAh9EPN8SmVSNtatB%2B12n3xgrwzycjLWGKi57E8bXV3JnU0N4iEqMachpm38OVvRIUv2ex1bw0mo0wbUQ4qxKDqCrnwIgwhbj8xAY6pgGM3kYKm0Av%2FCqHi4Nv7HIO0jMwWWLPZPRhD7zLx8NtUZyoXLg3%2FOZAWAmG%2FSj2OmsPgKM5HODAViunNc9qJo5Vk%2FZ3HZK4b2FXJGLzKWX3AAGOFGINYqsBJZqSAIB0WpcYeAv%2Bu5PbkJe6DyKuEtLcT96FfWgZpazSuYV2Zhc2m8HQK2NN6zxZQqWzuZmmlr8EmUEJJD7bwKLvGDvmX87uYGlW1l4m&X-Amz-Signature=c1a4bb890a417e6a6a1fa2d4a2b8717feae199e5cc19e8e519bf02fa8b402c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYJXHGV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFRYfeBv%2F5hrAE%2BZeWCMJodcrSxJ1lalMo5WNVtbBOv0AiAdjZ3a1k3mFAG0DWgwOh%2FHYahClht2hQt4gK81VSmOySr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMBZPEK2zlOKLCDEtSKtwDF%2Ft5dlOlfLKHFpDMiX24EFyf8g8Z%2FRtPRj9F29cRIamvDc0UUgqxp8%2Fu4VOYNkgjJGxC%2BgUsMcf9PZQifry2VCScGSZDX49zGdpbSvid8Uvs741dbg0TByV89x%2B5mFNcpLLRrcnjGozM0xh87kkSBqkJbZ81KvMtWVjGpRXfgqU48o2%2FLnnNmgFs7np%2F1HEQrwLBiUKSNN%2FWcPaDtFoFM2ooGXXaXqfX%2FOvkGsfmpKqzPRWmF5eT6%2Fgv7MxR7MCz1Dwx81ibj4eVVy1yxtlkEl4pj%2FetDu6fylr%2Fk1seUNZYSJQBWKMUiUlBtbhLEBv2hsBCrxY0eW2qm9TdAtboPWpKBYjJdDiAsWCSSayBPppnUWOCHy6VT%2BgajQJlr4tRGjvH0OekU0azL%2FkZJqCagGejMJpYxf%2FY14Ng5h9mTG%2BxADLUtAuPj8XDMrKkszlqkn1sgRhES3Ti2K7lPaRfmdeEg9svKiwoLJPPEWI7nKofjoQboA8yXJaRzxAWppvw%2F%2FOEYkj84SO7FyNiABDr6J9RtNkf77%2BAh9EPN8SmVSNtatB%2B12n3xgrwzycjLWGKi57E8bXV3JnU0N4iEqMachpm38OVvRIUv2ex1bw0mo0wbUQ4qxKDqCrnwIgwhbj8xAY6pgGM3kYKm0Av%2FCqHi4Nv7HIO0jMwWWLPZPRhD7zLx8NtUZyoXLg3%2FOZAWAmG%2FSj2OmsPgKM5HODAViunNc9qJo5Vk%2FZ3HZK4b2FXJGLzKWX3AAGOFGINYqsBJZqSAIB0WpcYeAv%2Bu5PbkJe6DyKuEtLcT96FfWgZpazSuYV2Zhc2m8HQK2NN6zxZQqWzuZmmlr8EmUEJJD7bwKLvGDvmX87uYGlW1l4m&X-Amz-Signature=450de6a57b9602f652c5f440ff4b51b02cff758e1ef40ff5b44e72c9112cf953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYJXHGV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFRYfeBv%2F5hrAE%2BZeWCMJodcrSxJ1lalMo5WNVtbBOv0AiAdjZ3a1k3mFAG0DWgwOh%2FHYahClht2hQt4gK81VSmOySr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMBZPEK2zlOKLCDEtSKtwDF%2Ft5dlOlfLKHFpDMiX24EFyf8g8Z%2FRtPRj9F29cRIamvDc0UUgqxp8%2Fu4VOYNkgjJGxC%2BgUsMcf9PZQifry2VCScGSZDX49zGdpbSvid8Uvs741dbg0TByV89x%2B5mFNcpLLRrcnjGozM0xh87kkSBqkJbZ81KvMtWVjGpRXfgqU48o2%2FLnnNmgFs7np%2F1HEQrwLBiUKSNN%2FWcPaDtFoFM2ooGXXaXqfX%2FOvkGsfmpKqzPRWmF5eT6%2Fgv7MxR7MCz1Dwx81ibj4eVVy1yxtlkEl4pj%2FetDu6fylr%2Fk1seUNZYSJQBWKMUiUlBtbhLEBv2hsBCrxY0eW2qm9TdAtboPWpKBYjJdDiAsWCSSayBPppnUWOCHy6VT%2BgajQJlr4tRGjvH0OekU0azL%2FkZJqCagGejMJpYxf%2FY14Ng5h9mTG%2BxADLUtAuPj8XDMrKkszlqkn1sgRhES3Ti2K7lPaRfmdeEg9svKiwoLJPPEWI7nKofjoQboA8yXJaRzxAWppvw%2F%2FOEYkj84SO7FyNiABDr6J9RtNkf77%2BAh9EPN8SmVSNtatB%2B12n3xgrwzycjLWGKi57E8bXV3JnU0N4iEqMachpm38OVvRIUv2ex1bw0mo0wbUQ4qxKDqCrnwIgwhbj8xAY6pgGM3kYKm0Av%2FCqHi4Nv7HIO0jMwWWLPZPRhD7zLx8NtUZyoXLg3%2FOZAWAmG%2FSj2OmsPgKM5HODAViunNc9qJo5Vk%2FZ3HZK4b2FXJGLzKWX3AAGOFGINYqsBJZqSAIB0WpcYeAv%2Bu5PbkJe6DyKuEtLcT96FfWgZpazSuYV2Zhc2m8HQK2NN6zxZQqWzuZmmlr8EmUEJJD7bwKLvGDvmX87uYGlW1l4m&X-Amz-Signature=bf7f7135e46877ef0712828956bfebce42e3525e5b4cc7c120ff0d133a7be16f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYJXHGV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFRYfeBv%2F5hrAE%2BZeWCMJodcrSxJ1lalMo5WNVtbBOv0AiAdjZ3a1k3mFAG0DWgwOh%2FHYahClht2hQt4gK81VSmOySr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMBZPEK2zlOKLCDEtSKtwDF%2Ft5dlOlfLKHFpDMiX24EFyf8g8Z%2FRtPRj9F29cRIamvDc0UUgqxp8%2Fu4VOYNkgjJGxC%2BgUsMcf9PZQifry2VCScGSZDX49zGdpbSvid8Uvs741dbg0TByV89x%2B5mFNcpLLRrcnjGozM0xh87kkSBqkJbZ81KvMtWVjGpRXfgqU48o2%2FLnnNmgFs7np%2F1HEQrwLBiUKSNN%2FWcPaDtFoFM2ooGXXaXqfX%2FOvkGsfmpKqzPRWmF5eT6%2Fgv7MxR7MCz1Dwx81ibj4eVVy1yxtlkEl4pj%2FetDu6fylr%2Fk1seUNZYSJQBWKMUiUlBtbhLEBv2hsBCrxY0eW2qm9TdAtboPWpKBYjJdDiAsWCSSayBPppnUWOCHy6VT%2BgajQJlr4tRGjvH0OekU0azL%2FkZJqCagGejMJpYxf%2FY14Ng5h9mTG%2BxADLUtAuPj8XDMrKkszlqkn1sgRhES3Ti2K7lPaRfmdeEg9svKiwoLJPPEWI7nKofjoQboA8yXJaRzxAWppvw%2F%2FOEYkj84SO7FyNiABDr6J9RtNkf77%2BAh9EPN8SmVSNtatB%2B12n3xgrwzycjLWGKi57E8bXV3JnU0N4iEqMachpm38OVvRIUv2ex1bw0mo0wbUQ4qxKDqCrnwIgwhbj8xAY6pgGM3kYKm0Av%2FCqHi4Nv7HIO0jMwWWLPZPRhD7zLx8NtUZyoXLg3%2FOZAWAmG%2FSj2OmsPgKM5HODAViunNc9qJo5Vk%2FZ3HZK4b2FXJGLzKWX3AAGOFGINYqsBJZqSAIB0WpcYeAv%2Bu5PbkJe6DyKuEtLcT96FfWgZpazSuYV2Zhc2m8HQK2NN6zxZQqWzuZmmlr8EmUEJJD7bwKLvGDvmX87uYGlW1l4m&X-Amz-Signature=e4a4e6503d9eac2fa89118e6279c4055a9f46257b9730b44554f1ac2ce343451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYJXHGV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFRYfeBv%2F5hrAE%2BZeWCMJodcrSxJ1lalMo5WNVtbBOv0AiAdjZ3a1k3mFAG0DWgwOh%2FHYahClht2hQt4gK81VSmOySr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMBZPEK2zlOKLCDEtSKtwDF%2Ft5dlOlfLKHFpDMiX24EFyf8g8Z%2FRtPRj9F29cRIamvDc0UUgqxp8%2Fu4VOYNkgjJGxC%2BgUsMcf9PZQifry2VCScGSZDX49zGdpbSvid8Uvs741dbg0TByV89x%2B5mFNcpLLRrcnjGozM0xh87kkSBqkJbZ81KvMtWVjGpRXfgqU48o2%2FLnnNmgFs7np%2F1HEQrwLBiUKSNN%2FWcPaDtFoFM2ooGXXaXqfX%2FOvkGsfmpKqzPRWmF5eT6%2Fgv7MxR7MCz1Dwx81ibj4eVVy1yxtlkEl4pj%2FetDu6fylr%2Fk1seUNZYSJQBWKMUiUlBtbhLEBv2hsBCrxY0eW2qm9TdAtboPWpKBYjJdDiAsWCSSayBPppnUWOCHy6VT%2BgajQJlr4tRGjvH0OekU0azL%2FkZJqCagGejMJpYxf%2FY14Ng5h9mTG%2BxADLUtAuPj8XDMrKkszlqkn1sgRhES3Ti2K7lPaRfmdeEg9svKiwoLJPPEWI7nKofjoQboA8yXJaRzxAWppvw%2F%2FOEYkj84SO7FyNiABDr6J9RtNkf77%2BAh9EPN8SmVSNtatB%2B12n3xgrwzycjLWGKi57E8bXV3JnU0N4iEqMachpm38OVvRIUv2ex1bw0mo0wbUQ4qxKDqCrnwIgwhbj8xAY6pgGM3kYKm0Av%2FCqHi4Nv7HIO0jMwWWLPZPRhD7zLx8NtUZyoXLg3%2FOZAWAmG%2FSj2OmsPgKM5HODAViunNc9qJo5Vk%2FZ3HZK4b2FXJGLzKWX3AAGOFGINYqsBJZqSAIB0WpcYeAv%2Bu5PbkJe6DyKuEtLcT96FfWgZpazSuYV2Zhc2m8HQK2NN6zxZQqWzuZmmlr8EmUEJJD7bwKLvGDvmX87uYGlW1l4m&X-Amz-Signature=f6377d37924a692fb1e86f6dadba6b66c656facd93cda8b4639021ca9f9b7935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYJXHGV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFRYfeBv%2F5hrAE%2BZeWCMJodcrSxJ1lalMo5WNVtbBOv0AiAdjZ3a1k3mFAG0DWgwOh%2FHYahClht2hQt4gK81VSmOySr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMBZPEK2zlOKLCDEtSKtwDF%2Ft5dlOlfLKHFpDMiX24EFyf8g8Z%2FRtPRj9F29cRIamvDc0UUgqxp8%2Fu4VOYNkgjJGxC%2BgUsMcf9PZQifry2VCScGSZDX49zGdpbSvid8Uvs741dbg0TByV89x%2B5mFNcpLLRrcnjGozM0xh87kkSBqkJbZ81KvMtWVjGpRXfgqU48o2%2FLnnNmgFs7np%2F1HEQrwLBiUKSNN%2FWcPaDtFoFM2ooGXXaXqfX%2FOvkGsfmpKqzPRWmF5eT6%2Fgv7MxR7MCz1Dwx81ibj4eVVy1yxtlkEl4pj%2FetDu6fylr%2Fk1seUNZYSJQBWKMUiUlBtbhLEBv2hsBCrxY0eW2qm9TdAtboPWpKBYjJdDiAsWCSSayBPppnUWOCHy6VT%2BgajQJlr4tRGjvH0OekU0azL%2FkZJqCagGejMJpYxf%2FY14Ng5h9mTG%2BxADLUtAuPj8XDMrKkszlqkn1sgRhES3Ti2K7lPaRfmdeEg9svKiwoLJPPEWI7nKofjoQboA8yXJaRzxAWppvw%2F%2FOEYkj84SO7FyNiABDr6J9RtNkf77%2BAh9EPN8SmVSNtatB%2B12n3xgrwzycjLWGKi57E8bXV3JnU0N4iEqMachpm38OVvRIUv2ex1bw0mo0wbUQ4qxKDqCrnwIgwhbj8xAY6pgGM3kYKm0Av%2FCqHi4Nv7HIO0jMwWWLPZPRhD7zLx8NtUZyoXLg3%2FOZAWAmG%2FSj2OmsPgKM5HODAViunNc9qJo5Vk%2FZ3HZK4b2FXJGLzKWX3AAGOFGINYqsBJZqSAIB0WpcYeAv%2Bu5PbkJe6DyKuEtLcT96FfWgZpazSuYV2Zhc2m8HQK2NN6zxZQqWzuZmmlr8EmUEJJD7bwKLvGDvmX87uYGlW1l4m&X-Amz-Signature=886101c4ed68d5460f6b73d7569c978dd4b219ccff91f3634c60ccdb8b7cfa0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
