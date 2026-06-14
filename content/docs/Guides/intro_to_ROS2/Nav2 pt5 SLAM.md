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
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6OIRXO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFHKFfVSAHI4O1tLo8Rs%2FSeXgZVIaPmC6ZebyKkFtZDAiEAhCy8EftZW1PKK4oz%2BR0hrB40B8ur7bUxggKZ%2FJPlFkQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPgFMnuRs%2B4cPyybbSrcA5iW6oiQ6VansaKpr20300PuEoBW10BXqP%2BW%2FNhP9rEf%2FF%2FR6837UQ6RLJdEMp8D6gG1%2FjBcZzm1VLtX8PqcymrlRzxKtLjQzFpFBEmxiKatCqRpmY%2FjBO3S3MiJmWILuqwZsvVthrD5IpEzi9BFbMfdrH4I7WmMe6sQOjYsQyTMpkQrtQEyBjf3vFmya%2BUEfaswhTy4YWT08lWuZdMqaSme6VXZIiLT%2BcJJp5O99yknQGUscH8AQFIlX0ZykSdeJJFALdnf6Lr6mY8a3%2FZ%2B0iZ54xz6kMHlKaHFkbVQ606rvGfTzKhh%2BmAcCZp%2B9imLNK7X3TZfeUzyNOJhxXqhQQBza1ibwZrc9qjbKN4l4pCvLvXY8QRxmpSbJ9qCEzEuyvtNEaWiVS3toKQoHg6V6OP12ye9YDPcFhwcIgH68yoyzFs2p67bNAVAQeXOLrH5dfxO6kA0azxsCm2a4GlOM5Dap%2B93Z%2Bdsp%2FzAe0KrsGJfYuhTZkWGwzId0mXE9ZmnPufv3a3KeVa6IL%2FZhVkstb33pc8GovwKjoNOi4HcyIWw3ztF0213bxtzU7SbIthsPhwgtcs0Lhtz6RnW%2BPuH%2BKzkeJNomPTNqiEocPXbg%2BUROXI6PRtdxjo%2B%2BVNfMNGbuNEGOqUBzZwlyVvUw8y7wNV21By1ePE0GcrivHD5X7gn8%2B3lJffLYX%2BJjsjiaRFtsC0s%2FUJOqjxcFxhQAwPO1xBevh%2FIsnitdWK6a7d9gXpeJIt2A0VUEcc9WgghY8Biod4DU8MvGnntbaktPKLfQyodi2Rpi7vBDOFaRWLgpofj3%2BNX3GIvPScsUX8oBTYh1J7w%2FpQGk3OjCc3txUw4wXUrWpUGaVmWCToA&X-Amz-Signature=42c8e0596b98772d62f6b4e312a61c7248ab2a308af8339776e2d1028f2e7f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6OIRXO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFHKFfVSAHI4O1tLo8Rs%2FSeXgZVIaPmC6ZebyKkFtZDAiEAhCy8EftZW1PKK4oz%2BR0hrB40B8ur7bUxggKZ%2FJPlFkQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPgFMnuRs%2B4cPyybbSrcA5iW6oiQ6VansaKpr20300PuEoBW10BXqP%2BW%2FNhP9rEf%2FF%2FR6837UQ6RLJdEMp8D6gG1%2FjBcZzm1VLtX8PqcymrlRzxKtLjQzFpFBEmxiKatCqRpmY%2FjBO3S3MiJmWILuqwZsvVthrD5IpEzi9BFbMfdrH4I7WmMe6sQOjYsQyTMpkQrtQEyBjf3vFmya%2BUEfaswhTy4YWT08lWuZdMqaSme6VXZIiLT%2BcJJp5O99yknQGUscH8AQFIlX0ZykSdeJJFALdnf6Lr6mY8a3%2FZ%2B0iZ54xz6kMHlKaHFkbVQ606rvGfTzKhh%2BmAcCZp%2B9imLNK7X3TZfeUzyNOJhxXqhQQBza1ibwZrc9qjbKN4l4pCvLvXY8QRxmpSbJ9qCEzEuyvtNEaWiVS3toKQoHg6V6OP12ye9YDPcFhwcIgH68yoyzFs2p67bNAVAQeXOLrH5dfxO6kA0azxsCm2a4GlOM5Dap%2B93Z%2Bdsp%2FzAe0KrsGJfYuhTZkWGwzId0mXE9ZmnPufv3a3KeVa6IL%2FZhVkstb33pc8GovwKjoNOi4HcyIWw3ztF0213bxtzU7SbIthsPhwgtcs0Lhtz6RnW%2BPuH%2BKzkeJNomPTNqiEocPXbg%2BUROXI6PRtdxjo%2B%2BVNfMNGbuNEGOqUBzZwlyVvUw8y7wNV21By1ePE0GcrivHD5X7gn8%2B3lJffLYX%2BJjsjiaRFtsC0s%2FUJOqjxcFxhQAwPO1xBevh%2FIsnitdWK6a7d9gXpeJIt2A0VUEcc9WgghY8Biod4DU8MvGnntbaktPKLfQyodi2Rpi7vBDOFaRWLgpofj3%2BNX3GIvPScsUX8oBTYh1J7w%2FpQGk3OjCc3txUw4wXUrWpUGaVmWCToA&X-Amz-Signature=5422e9108e11f5603b69e8d5859fbbe0f73282ab935310ff7d8919d9b5eb67e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6OIRXO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFHKFfVSAHI4O1tLo8Rs%2FSeXgZVIaPmC6ZebyKkFtZDAiEAhCy8EftZW1PKK4oz%2BR0hrB40B8ur7bUxggKZ%2FJPlFkQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPgFMnuRs%2B4cPyybbSrcA5iW6oiQ6VansaKpr20300PuEoBW10BXqP%2BW%2FNhP9rEf%2FF%2FR6837UQ6RLJdEMp8D6gG1%2FjBcZzm1VLtX8PqcymrlRzxKtLjQzFpFBEmxiKatCqRpmY%2FjBO3S3MiJmWILuqwZsvVthrD5IpEzi9BFbMfdrH4I7WmMe6sQOjYsQyTMpkQrtQEyBjf3vFmya%2BUEfaswhTy4YWT08lWuZdMqaSme6VXZIiLT%2BcJJp5O99yknQGUscH8AQFIlX0ZykSdeJJFALdnf6Lr6mY8a3%2FZ%2B0iZ54xz6kMHlKaHFkbVQ606rvGfTzKhh%2BmAcCZp%2B9imLNK7X3TZfeUzyNOJhxXqhQQBza1ibwZrc9qjbKN4l4pCvLvXY8QRxmpSbJ9qCEzEuyvtNEaWiVS3toKQoHg6V6OP12ye9YDPcFhwcIgH68yoyzFs2p67bNAVAQeXOLrH5dfxO6kA0azxsCm2a4GlOM5Dap%2B93Z%2Bdsp%2FzAe0KrsGJfYuhTZkWGwzId0mXE9ZmnPufv3a3KeVa6IL%2FZhVkstb33pc8GovwKjoNOi4HcyIWw3ztF0213bxtzU7SbIthsPhwgtcs0Lhtz6RnW%2BPuH%2BKzkeJNomPTNqiEocPXbg%2BUROXI6PRtdxjo%2B%2BVNfMNGbuNEGOqUBzZwlyVvUw8y7wNV21By1ePE0GcrivHD5X7gn8%2B3lJffLYX%2BJjsjiaRFtsC0s%2FUJOqjxcFxhQAwPO1xBevh%2FIsnitdWK6a7d9gXpeJIt2A0VUEcc9WgghY8Biod4DU8MvGnntbaktPKLfQyodi2Rpi7vBDOFaRWLgpofj3%2BNX3GIvPScsUX8oBTYh1J7w%2FpQGk3OjCc3txUw4wXUrWpUGaVmWCToA&X-Amz-Signature=4faf89c0aedd27058d19d9be381fc3dfc74083c9e980090d6ac02ad65aa8cbbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6OIRXO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFHKFfVSAHI4O1tLo8Rs%2FSeXgZVIaPmC6ZebyKkFtZDAiEAhCy8EftZW1PKK4oz%2BR0hrB40B8ur7bUxggKZ%2FJPlFkQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPgFMnuRs%2B4cPyybbSrcA5iW6oiQ6VansaKpr20300PuEoBW10BXqP%2BW%2FNhP9rEf%2FF%2FR6837UQ6RLJdEMp8D6gG1%2FjBcZzm1VLtX8PqcymrlRzxKtLjQzFpFBEmxiKatCqRpmY%2FjBO3S3MiJmWILuqwZsvVthrD5IpEzi9BFbMfdrH4I7WmMe6sQOjYsQyTMpkQrtQEyBjf3vFmya%2BUEfaswhTy4YWT08lWuZdMqaSme6VXZIiLT%2BcJJp5O99yknQGUscH8AQFIlX0ZykSdeJJFALdnf6Lr6mY8a3%2FZ%2B0iZ54xz6kMHlKaHFkbVQ606rvGfTzKhh%2BmAcCZp%2B9imLNK7X3TZfeUzyNOJhxXqhQQBza1ibwZrc9qjbKN4l4pCvLvXY8QRxmpSbJ9qCEzEuyvtNEaWiVS3toKQoHg6V6OP12ye9YDPcFhwcIgH68yoyzFs2p67bNAVAQeXOLrH5dfxO6kA0azxsCm2a4GlOM5Dap%2B93Z%2Bdsp%2FzAe0KrsGJfYuhTZkWGwzId0mXE9ZmnPufv3a3KeVa6IL%2FZhVkstb33pc8GovwKjoNOi4HcyIWw3ztF0213bxtzU7SbIthsPhwgtcs0Lhtz6RnW%2BPuH%2BKzkeJNomPTNqiEocPXbg%2BUROXI6PRtdxjo%2B%2BVNfMNGbuNEGOqUBzZwlyVvUw8y7wNV21By1ePE0GcrivHD5X7gn8%2B3lJffLYX%2BJjsjiaRFtsC0s%2FUJOqjxcFxhQAwPO1xBevh%2FIsnitdWK6a7d9gXpeJIt2A0VUEcc9WgghY8Biod4DU8MvGnntbaktPKLfQyodi2Rpi7vBDOFaRWLgpofj3%2BNX3GIvPScsUX8oBTYh1J7w%2FpQGk3OjCc3txUw4wXUrWpUGaVmWCToA&X-Amz-Signature=018d909456dff355d3a109de89da45ae30c97de1edbc4bcc6c8bccbc92a154e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6OIRXO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFHKFfVSAHI4O1tLo8Rs%2FSeXgZVIaPmC6ZebyKkFtZDAiEAhCy8EftZW1PKK4oz%2BR0hrB40B8ur7bUxggKZ%2FJPlFkQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPgFMnuRs%2B4cPyybbSrcA5iW6oiQ6VansaKpr20300PuEoBW10BXqP%2BW%2FNhP9rEf%2FF%2FR6837UQ6RLJdEMp8D6gG1%2FjBcZzm1VLtX8PqcymrlRzxKtLjQzFpFBEmxiKatCqRpmY%2FjBO3S3MiJmWILuqwZsvVthrD5IpEzi9BFbMfdrH4I7WmMe6sQOjYsQyTMpkQrtQEyBjf3vFmya%2BUEfaswhTy4YWT08lWuZdMqaSme6VXZIiLT%2BcJJp5O99yknQGUscH8AQFIlX0ZykSdeJJFALdnf6Lr6mY8a3%2FZ%2B0iZ54xz6kMHlKaHFkbVQ606rvGfTzKhh%2BmAcCZp%2B9imLNK7X3TZfeUzyNOJhxXqhQQBza1ibwZrc9qjbKN4l4pCvLvXY8QRxmpSbJ9qCEzEuyvtNEaWiVS3toKQoHg6V6OP12ye9YDPcFhwcIgH68yoyzFs2p67bNAVAQeXOLrH5dfxO6kA0azxsCm2a4GlOM5Dap%2B93Z%2Bdsp%2FzAe0KrsGJfYuhTZkWGwzId0mXE9ZmnPufv3a3KeVa6IL%2FZhVkstb33pc8GovwKjoNOi4HcyIWw3ztF0213bxtzU7SbIthsPhwgtcs0Lhtz6RnW%2BPuH%2BKzkeJNomPTNqiEocPXbg%2BUROXI6PRtdxjo%2B%2BVNfMNGbuNEGOqUBzZwlyVvUw8y7wNV21By1ePE0GcrivHD5X7gn8%2B3lJffLYX%2BJjsjiaRFtsC0s%2FUJOqjxcFxhQAwPO1xBevh%2FIsnitdWK6a7d9gXpeJIt2A0VUEcc9WgghY8Biod4DU8MvGnntbaktPKLfQyodi2Rpi7vBDOFaRWLgpofj3%2BNX3GIvPScsUX8oBTYh1J7w%2FpQGk3OjCc3txUw4wXUrWpUGaVmWCToA&X-Amz-Signature=350dcc5635989abf9ad1f8327f5478aaa1bc6df7e99ad9ac09e267665ace07e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6OIRXO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFHKFfVSAHI4O1tLo8Rs%2FSeXgZVIaPmC6ZebyKkFtZDAiEAhCy8EftZW1PKK4oz%2BR0hrB40B8ur7bUxggKZ%2FJPlFkQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPgFMnuRs%2B4cPyybbSrcA5iW6oiQ6VansaKpr20300PuEoBW10BXqP%2BW%2FNhP9rEf%2FF%2FR6837UQ6RLJdEMp8D6gG1%2FjBcZzm1VLtX8PqcymrlRzxKtLjQzFpFBEmxiKatCqRpmY%2FjBO3S3MiJmWILuqwZsvVthrD5IpEzi9BFbMfdrH4I7WmMe6sQOjYsQyTMpkQrtQEyBjf3vFmya%2BUEfaswhTy4YWT08lWuZdMqaSme6VXZIiLT%2BcJJp5O99yknQGUscH8AQFIlX0ZykSdeJJFALdnf6Lr6mY8a3%2FZ%2B0iZ54xz6kMHlKaHFkbVQ606rvGfTzKhh%2BmAcCZp%2B9imLNK7X3TZfeUzyNOJhxXqhQQBza1ibwZrc9qjbKN4l4pCvLvXY8QRxmpSbJ9qCEzEuyvtNEaWiVS3toKQoHg6V6OP12ye9YDPcFhwcIgH68yoyzFs2p67bNAVAQeXOLrH5dfxO6kA0azxsCm2a4GlOM5Dap%2B93Z%2Bdsp%2FzAe0KrsGJfYuhTZkWGwzId0mXE9ZmnPufv3a3KeVa6IL%2FZhVkstb33pc8GovwKjoNOi4HcyIWw3ztF0213bxtzU7SbIthsPhwgtcs0Lhtz6RnW%2BPuH%2BKzkeJNomPTNqiEocPXbg%2BUROXI6PRtdxjo%2B%2BVNfMNGbuNEGOqUBzZwlyVvUw8y7wNV21By1ePE0GcrivHD5X7gn8%2B3lJffLYX%2BJjsjiaRFtsC0s%2FUJOqjxcFxhQAwPO1xBevh%2FIsnitdWK6a7d9gXpeJIt2A0VUEcc9WgghY8Biod4DU8MvGnntbaktPKLfQyodi2Rpi7vBDOFaRWLgpofj3%2BNX3GIvPScsUX8oBTYh1J7w%2FpQGk3OjCc3txUw4wXUrWpUGaVmWCToA&X-Amz-Signature=c911cf1f9bf5fc41ff3020f9f5cc96f0745fc02057706ced120afdec3597c9fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6OIRXO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFHKFfVSAHI4O1tLo8Rs%2FSeXgZVIaPmC6ZebyKkFtZDAiEAhCy8EftZW1PKK4oz%2BR0hrB40B8ur7bUxggKZ%2FJPlFkQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPgFMnuRs%2B4cPyybbSrcA5iW6oiQ6VansaKpr20300PuEoBW10BXqP%2BW%2FNhP9rEf%2FF%2FR6837UQ6RLJdEMp8D6gG1%2FjBcZzm1VLtX8PqcymrlRzxKtLjQzFpFBEmxiKatCqRpmY%2FjBO3S3MiJmWILuqwZsvVthrD5IpEzi9BFbMfdrH4I7WmMe6sQOjYsQyTMpkQrtQEyBjf3vFmya%2BUEfaswhTy4YWT08lWuZdMqaSme6VXZIiLT%2BcJJp5O99yknQGUscH8AQFIlX0ZykSdeJJFALdnf6Lr6mY8a3%2FZ%2B0iZ54xz6kMHlKaHFkbVQ606rvGfTzKhh%2BmAcCZp%2B9imLNK7X3TZfeUzyNOJhxXqhQQBza1ibwZrc9qjbKN4l4pCvLvXY8QRxmpSbJ9qCEzEuyvtNEaWiVS3toKQoHg6V6OP12ye9YDPcFhwcIgH68yoyzFs2p67bNAVAQeXOLrH5dfxO6kA0azxsCm2a4GlOM5Dap%2B93Z%2Bdsp%2FzAe0KrsGJfYuhTZkWGwzId0mXE9ZmnPufv3a3KeVa6IL%2FZhVkstb33pc8GovwKjoNOi4HcyIWw3ztF0213bxtzU7SbIthsPhwgtcs0Lhtz6RnW%2BPuH%2BKzkeJNomPTNqiEocPXbg%2BUROXI6PRtdxjo%2B%2BVNfMNGbuNEGOqUBzZwlyVvUw8y7wNV21By1ePE0GcrivHD5X7gn8%2B3lJffLYX%2BJjsjiaRFtsC0s%2FUJOqjxcFxhQAwPO1xBevh%2FIsnitdWK6a7d9gXpeJIt2A0VUEcc9WgghY8Biod4DU8MvGnntbaktPKLfQyodi2Rpi7vBDOFaRWLgpofj3%2BNX3GIvPScsUX8oBTYh1J7w%2FpQGk3OjCc3txUw4wXUrWpUGaVmWCToA&X-Amz-Signature=7578cd342a5aeaa1dc8413247a490972c68db42372900e950e294ed8fe0bc72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6OIRXO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFHKFfVSAHI4O1tLo8Rs%2FSeXgZVIaPmC6ZebyKkFtZDAiEAhCy8EftZW1PKK4oz%2BR0hrB40B8ur7bUxggKZ%2FJPlFkQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPgFMnuRs%2B4cPyybbSrcA5iW6oiQ6VansaKpr20300PuEoBW10BXqP%2BW%2FNhP9rEf%2FF%2FR6837UQ6RLJdEMp8D6gG1%2FjBcZzm1VLtX8PqcymrlRzxKtLjQzFpFBEmxiKatCqRpmY%2FjBO3S3MiJmWILuqwZsvVthrD5IpEzi9BFbMfdrH4I7WmMe6sQOjYsQyTMpkQrtQEyBjf3vFmya%2BUEfaswhTy4YWT08lWuZdMqaSme6VXZIiLT%2BcJJp5O99yknQGUscH8AQFIlX0ZykSdeJJFALdnf6Lr6mY8a3%2FZ%2B0iZ54xz6kMHlKaHFkbVQ606rvGfTzKhh%2BmAcCZp%2B9imLNK7X3TZfeUzyNOJhxXqhQQBza1ibwZrc9qjbKN4l4pCvLvXY8QRxmpSbJ9qCEzEuyvtNEaWiVS3toKQoHg6V6OP12ye9YDPcFhwcIgH68yoyzFs2p67bNAVAQeXOLrH5dfxO6kA0azxsCm2a4GlOM5Dap%2B93Z%2Bdsp%2FzAe0KrsGJfYuhTZkWGwzId0mXE9ZmnPufv3a3KeVa6IL%2FZhVkstb33pc8GovwKjoNOi4HcyIWw3ztF0213bxtzU7SbIthsPhwgtcs0Lhtz6RnW%2BPuH%2BKzkeJNomPTNqiEocPXbg%2BUROXI6PRtdxjo%2B%2BVNfMNGbuNEGOqUBzZwlyVvUw8y7wNV21By1ePE0GcrivHD5X7gn8%2B3lJffLYX%2BJjsjiaRFtsC0s%2FUJOqjxcFxhQAwPO1xBevh%2FIsnitdWK6a7d9gXpeJIt2A0VUEcc9WgghY8Biod4DU8MvGnntbaktPKLfQyodi2Rpi7vBDOFaRWLgpofj3%2BNX3GIvPScsUX8oBTYh1J7w%2FpQGk3OjCc3txUw4wXUrWpUGaVmWCToA&X-Amz-Signature=a4079831f7a9363f7467f389215e3374fafed56274203300a57c64e329d61ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6OIRXO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFHKFfVSAHI4O1tLo8Rs%2FSeXgZVIaPmC6ZebyKkFtZDAiEAhCy8EftZW1PKK4oz%2BR0hrB40B8ur7bUxggKZ%2FJPlFkQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPgFMnuRs%2B4cPyybbSrcA5iW6oiQ6VansaKpr20300PuEoBW10BXqP%2BW%2FNhP9rEf%2FF%2FR6837UQ6RLJdEMp8D6gG1%2FjBcZzm1VLtX8PqcymrlRzxKtLjQzFpFBEmxiKatCqRpmY%2FjBO3S3MiJmWILuqwZsvVthrD5IpEzi9BFbMfdrH4I7WmMe6sQOjYsQyTMpkQrtQEyBjf3vFmya%2BUEfaswhTy4YWT08lWuZdMqaSme6VXZIiLT%2BcJJp5O99yknQGUscH8AQFIlX0ZykSdeJJFALdnf6Lr6mY8a3%2FZ%2B0iZ54xz6kMHlKaHFkbVQ606rvGfTzKhh%2BmAcCZp%2B9imLNK7X3TZfeUzyNOJhxXqhQQBza1ibwZrc9qjbKN4l4pCvLvXY8QRxmpSbJ9qCEzEuyvtNEaWiVS3toKQoHg6V6OP12ye9YDPcFhwcIgH68yoyzFs2p67bNAVAQeXOLrH5dfxO6kA0azxsCm2a4GlOM5Dap%2B93Z%2Bdsp%2FzAe0KrsGJfYuhTZkWGwzId0mXE9ZmnPufv3a3KeVa6IL%2FZhVkstb33pc8GovwKjoNOi4HcyIWw3ztF0213bxtzU7SbIthsPhwgtcs0Lhtz6RnW%2BPuH%2BKzkeJNomPTNqiEocPXbg%2BUROXI6PRtdxjo%2B%2BVNfMNGbuNEGOqUBzZwlyVvUw8y7wNV21By1ePE0GcrivHD5X7gn8%2B3lJffLYX%2BJjsjiaRFtsC0s%2FUJOqjxcFxhQAwPO1xBevh%2FIsnitdWK6a7d9gXpeJIt2A0VUEcc9WgghY8Biod4DU8MvGnntbaktPKLfQyodi2Rpi7vBDOFaRWLgpofj3%2BNX3GIvPScsUX8oBTYh1J7w%2FpQGk3OjCc3txUw4wXUrWpUGaVmWCToA&X-Amz-Signature=65995230da3fe9fa3dcb8e47c4daae2b2941c03735c8ff5d83a9ce00e2ee7c1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6OIRXO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFHKFfVSAHI4O1tLo8Rs%2FSeXgZVIaPmC6ZebyKkFtZDAiEAhCy8EftZW1PKK4oz%2BR0hrB40B8ur7bUxggKZ%2FJPlFkQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPgFMnuRs%2B4cPyybbSrcA5iW6oiQ6VansaKpr20300PuEoBW10BXqP%2BW%2FNhP9rEf%2FF%2FR6837UQ6RLJdEMp8D6gG1%2FjBcZzm1VLtX8PqcymrlRzxKtLjQzFpFBEmxiKatCqRpmY%2FjBO3S3MiJmWILuqwZsvVthrD5IpEzi9BFbMfdrH4I7WmMe6sQOjYsQyTMpkQrtQEyBjf3vFmya%2BUEfaswhTy4YWT08lWuZdMqaSme6VXZIiLT%2BcJJp5O99yknQGUscH8AQFIlX0ZykSdeJJFALdnf6Lr6mY8a3%2FZ%2B0iZ54xz6kMHlKaHFkbVQ606rvGfTzKhh%2BmAcCZp%2B9imLNK7X3TZfeUzyNOJhxXqhQQBza1ibwZrc9qjbKN4l4pCvLvXY8QRxmpSbJ9qCEzEuyvtNEaWiVS3toKQoHg6V6OP12ye9YDPcFhwcIgH68yoyzFs2p67bNAVAQeXOLrH5dfxO6kA0azxsCm2a4GlOM5Dap%2B93Z%2Bdsp%2FzAe0KrsGJfYuhTZkWGwzId0mXE9ZmnPufv3a3KeVa6IL%2FZhVkstb33pc8GovwKjoNOi4HcyIWw3ztF0213bxtzU7SbIthsPhwgtcs0Lhtz6RnW%2BPuH%2BKzkeJNomPTNqiEocPXbg%2BUROXI6PRtdxjo%2B%2BVNfMNGbuNEGOqUBzZwlyVvUw8y7wNV21By1ePE0GcrivHD5X7gn8%2B3lJffLYX%2BJjsjiaRFtsC0s%2FUJOqjxcFxhQAwPO1xBevh%2FIsnitdWK6a7d9gXpeJIt2A0VUEcc9WgghY8Biod4DU8MvGnntbaktPKLfQyodi2Rpi7vBDOFaRWLgpofj3%2BNX3GIvPScsUX8oBTYh1J7w%2FpQGk3OjCc3txUw4wXUrWpUGaVmWCToA&X-Amz-Signature=cc19becc9af7738e69ad02db2d191c93aad5bf60907218253c6f2e69ab74a47e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6OIRXO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFHKFfVSAHI4O1tLo8Rs%2FSeXgZVIaPmC6ZebyKkFtZDAiEAhCy8EftZW1PKK4oz%2BR0hrB40B8ur7bUxggKZ%2FJPlFkQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPgFMnuRs%2B4cPyybbSrcA5iW6oiQ6VansaKpr20300PuEoBW10BXqP%2BW%2FNhP9rEf%2FF%2FR6837UQ6RLJdEMp8D6gG1%2FjBcZzm1VLtX8PqcymrlRzxKtLjQzFpFBEmxiKatCqRpmY%2FjBO3S3MiJmWILuqwZsvVthrD5IpEzi9BFbMfdrH4I7WmMe6sQOjYsQyTMpkQrtQEyBjf3vFmya%2BUEfaswhTy4YWT08lWuZdMqaSme6VXZIiLT%2BcJJp5O99yknQGUscH8AQFIlX0ZykSdeJJFALdnf6Lr6mY8a3%2FZ%2B0iZ54xz6kMHlKaHFkbVQ606rvGfTzKhh%2BmAcCZp%2B9imLNK7X3TZfeUzyNOJhxXqhQQBza1ibwZrc9qjbKN4l4pCvLvXY8QRxmpSbJ9qCEzEuyvtNEaWiVS3toKQoHg6V6OP12ye9YDPcFhwcIgH68yoyzFs2p67bNAVAQeXOLrH5dfxO6kA0azxsCm2a4GlOM5Dap%2B93Z%2Bdsp%2FzAe0KrsGJfYuhTZkWGwzId0mXE9ZmnPufv3a3KeVa6IL%2FZhVkstb33pc8GovwKjoNOi4HcyIWw3ztF0213bxtzU7SbIthsPhwgtcs0Lhtz6RnW%2BPuH%2BKzkeJNomPTNqiEocPXbg%2BUROXI6PRtdxjo%2B%2BVNfMNGbuNEGOqUBzZwlyVvUw8y7wNV21By1ePE0GcrivHD5X7gn8%2B3lJffLYX%2BJjsjiaRFtsC0s%2FUJOqjxcFxhQAwPO1xBevh%2FIsnitdWK6a7d9gXpeJIt2A0VUEcc9WgghY8Biod4DU8MvGnntbaktPKLfQyodi2Rpi7vBDOFaRWLgpofj3%2BNX3GIvPScsUX8oBTYh1J7w%2FpQGk3OjCc3txUw4wXUrWpUGaVmWCToA&X-Amz-Signature=cbf0ed09c9e5b9f1e9088e1bec92234e949151b3264c976ee399f348f4732460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6OIRXO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFHKFfVSAHI4O1tLo8Rs%2FSeXgZVIaPmC6ZebyKkFtZDAiEAhCy8EftZW1PKK4oz%2BR0hrB40B8ur7bUxggKZ%2FJPlFkQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPgFMnuRs%2B4cPyybbSrcA5iW6oiQ6VansaKpr20300PuEoBW10BXqP%2BW%2FNhP9rEf%2FF%2FR6837UQ6RLJdEMp8D6gG1%2FjBcZzm1VLtX8PqcymrlRzxKtLjQzFpFBEmxiKatCqRpmY%2FjBO3S3MiJmWILuqwZsvVthrD5IpEzi9BFbMfdrH4I7WmMe6sQOjYsQyTMpkQrtQEyBjf3vFmya%2BUEfaswhTy4YWT08lWuZdMqaSme6VXZIiLT%2BcJJp5O99yknQGUscH8AQFIlX0ZykSdeJJFALdnf6Lr6mY8a3%2FZ%2B0iZ54xz6kMHlKaHFkbVQ606rvGfTzKhh%2BmAcCZp%2B9imLNK7X3TZfeUzyNOJhxXqhQQBza1ibwZrc9qjbKN4l4pCvLvXY8QRxmpSbJ9qCEzEuyvtNEaWiVS3toKQoHg6V6OP12ye9YDPcFhwcIgH68yoyzFs2p67bNAVAQeXOLrH5dfxO6kA0azxsCm2a4GlOM5Dap%2B93Z%2Bdsp%2FzAe0KrsGJfYuhTZkWGwzId0mXE9ZmnPufv3a3KeVa6IL%2FZhVkstb33pc8GovwKjoNOi4HcyIWw3ztF0213bxtzU7SbIthsPhwgtcs0Lhtz6RnW%2BPuH%2BKzkeJNomPTNqiEocPXbg%2BUROXI6PRtdxjo%2B%2BVNfMNGbuNEGOqUBzZwlyVvUw8y7wNV21By1ePE0GcrivHD5X7gn8%2B3lJffLYX%2BJjsjiaRFtsC0s%2FUJOqjxcFxhQAwPO1xBevh%2FIsnitdWK6a7d9gXpeJIt2A0VUEcc9WgghY8Biod4DU8MvGnntbaktPKLfQyodi2Rpi7vBDOFaRWLgpofj3%2BNX3GIvPScsUX8oBTYh1J7w%2FpQGk3OjCc3txUw4wXUrWpUGaVmWCToA&X-Amz-Signature=1dc76a49978430148cf3e510966b5f2730d1c78a4e8a799e8cfe6c4ffadf4d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6OIRXO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFHKFfVSAHI4O1tLo8Rs%2FSeXgZVIaPmC6ZebyKkFtZDAiEAhCy8EftZW1PKK4oz%2BR0hrB40B8ur7bUxggKZ%2FJPlFkQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPgFMnuRs%2B4cPyybbSrcA5iW6oiQ6VansaKpr20300PuEoBW10BXqP%2BW%2FNhP9rEf%2FF%2FR6837UQ6RLJdEMp8D6gG1%2FjBcZzm1VLtX8PqcymrlRzxKtLjQzFpFBEmxiKatCqRpmY%2FjBO3S3MiJmWILuqwZsvVthrD5IpEzi9BFbMfdrH4I7WmMe6sQOjYsQyTMpkQrtQEyBjf3vFmya%2BUEfaswhTy4YWT08lWuZdMqaSme6VXZIiLT%2BcJJp5O99yknQGUscH8AQFIlX0ZykSdeJJFALdnf6Lr6mY8a3%2FZ%2B0iZ54xz6kMHlKaHFkbVQ606rvGfTzKhh%2BmAcCZp%2B9imLNK7X3TZfeUzyNOJhxXqhQQBza1ibwZrc9qjbKN4l4pCvLvXY8QRxmpSbJ9qCEzEuyvtNEaWiVS3toKQoHg6V6OP12ye9YDPcFhwcIgH68yoyzFs2p67bNAVAQeXOLrH5dfxO6kA0azxsCm2a4GlOM5Dap%2B93Z%2Bdsp%2FzAe0KrsGJfYuhTZkWGwzId0mXE9ZmnPufv3a3KeVa6IL%2FZhVkstb33pc8GovwKjoNOi4HcyIWw3ztF0213bxtzU7SbIthsPhwgtcs0Lhtz6RnW%2BPuH%2BKzkeJNomPTNqiEocPXbg%2BUROXI6PRtdxjo%2B%2BVNfMNGbuNEGOqUBzZwlyVvUw8y7wNV21By1ePE0GcrivHD5X7gn8%2B3lJffLYX%2BJjsjiaRFtsC0s%2FUJOqjxcFxhQAwPO1xBevh%2FIsnitdWK6a7d9gXpeJIt2A0VUEcc9WgghY8Biod4DU8MvGnntbaktPKLfQyodi2Rpi7vBDOFaRWLgpofj3%2BNX3GIvPScsUX8oBTYh1J7w%2FpQGk3OjCc3txUw4wXUrWpUGaVmWCToA&X-Amz-Signature=06f5431242c6a05a973c916c52e16befd5781635d56a6e9faa8d57b276e019f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6OIRXO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFHKFfVSAHI4O1tLo8Rs%2FSeXgZVIaPmC6ZebyKkFtZDAiEAhCy8EftZW1PKK4oz%2BR0hrB40B8ur7bUxggKZ%2FJPlFkQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPgFMnuRs%2B4cPyybbSrcA5iW6oiQ6VansaKpr20300PuEoBW10BXqP%2BW%2FNhP9rEf%2FF%2FR6837UQ6RLJdEMp8D6gG1%2FjBcZzm1VLtX8PqcymrlRzxKtLjQzFpFBEmxiKatCqRpmY%2FjBO3S3MiJmWILuqwZsvVthrD5IpEzi9BFbMfdrH4I7WmMe6sQOjYsQyTMpkQrtQEyBjf3vFmya%2BUEfaswhTy4YWT08lWuZdMqaSme6VXZIiLT%2BcJJp5O99yknQGUscH8AQFIlX0ZykSdeJJFALdnf6Lr6mY8a3%2FZ%2B0iZ54xz6kMHlKaHFkbVQ606rvGfTzKhh%2BmAcCZp%2B9imLNK7X3TZfeUzyNOJhxXqhQQBza1ibwZrc9qjbKN4l4pCvLvXY8QRxmpSbJ9qCEzEuyvtNEaWiVS3toKQoHg6V6OP12ye9YDPcFhwcIgH68yoyzFs2p67bNAVAQeXOLrH5dfxO6kA0azxsCm2a4GlOM5Dap%2B93Z%2Bdsp%2FzAe0KrsGJfYuhTZkWGwzId0mXE9ZmnPufv3a3KeVa6IL%2FZhVkstb33pc8GovwKjoNOi4HcyIWw3ztF0213bxtzU7SbIthsPhwgtcs0Lhtz6RnW%2BPuH%2BKzkeJNomPTNqiEocPXbg%2BUROXI6PRtdxjo%2B%2BVNfMNGbuNEGOqUBzZwlyVvUw8y7wNV21By1ePE0GcrivHD5X7gn8%2B3lJffLYX%2BJjsjiaRFtsC0s%2FUJOqjxcFxhQAwPO1xBevh%2FIsnitdWK6a7d9gXpeJIt2A0VUEcc9WgghY8Biod4DU8MvGnntbaktPKLfQyodi2Rpi7vBDOFaRWLgpofj3%2BNX3GIvPScsUX8oBTYh1J7w%2FpQGk3OjCc3txUw4wXUrWpUGaVmWCToA&X-Amz-Signature=6190ac31652cc6badaf3f1d754603e2b18f4d52fe648627de728bc07263a9bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
