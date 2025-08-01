---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUBJMO3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRfoGtOQFnvT9FjT%2FxQhLSXDhY21aAFANW5%2Bf%2BtfCHQIhAKh9o9Nv9hm1rbAOEEvnWoMUJCigsNiyz9S8RPY61O1eKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMPIfRCGF86UVkOiAq3AM%2BCY34D4C09%2BDReySPBZbT3rXbWFpE4dectaOD6sJV5taj2n4nf3LR%2FUy0xYOJYXMpfj5EWFTsv2URMWAGI9g0dRiyum3qGR59EPwuGm2Vu1piE3tW7bAhHlblplBilgegDzIQu%2BgtLKGK6qLhMePoIhNo2HDnSHSlY5hwef6Bp742bnqWXPYBEbcrcKlp8CRHJVSQYe6%2FeF%2BQ0pwM2H23cDDr6zEq9NylzVHbWfk%2F4MzbzugPAmd6VaCuiuTG0llmjPAhQm9GgBoA4bZZvQslwwwmoerXVm4TH%2FLB7f%2BglKS3o4xmXCwvgD%2FyJtr%2F%2BgVulmTN0BKIboD3GE5aH0NGAQxPEuyMvBu4cnmeswjLz%2B1fc%2BqmmbWnvUawhGoTklqVWdIu34bDEjmGO441H%2F8FC95pOcgQnlDZoUiH1b6jIN27GdiVotOFqXvfbM%2Fbjdn25vU622DmRVERB3wNBUUARmmV2UntJGHwxw6B6QHYkwQoe3f2vtrPgugKfCVd6475WhRybUNb%2BRRTYLarBifCPwSyNDl%2Bbexoo%2BeyvkD1hkir8R%2ByXokaUoWO397FQz7JE6JErIkhkhcBTNzQkYhAqnJHXXKM6q9mohP5a%2BEn5vUsXn33HI2cbAd8XDCvsbPEBjqkAbTbfDzu1rer4j7CPCFGDbaPain8yIXBcKaZCYnHAz4tJGiUlJ30zuux5pRtD8%2F81yCcHqTfrgo%2Bc9%2FG6mvR%2B3jNfZcUezgGN7Xz3MmjCnIznRx0kQ1t53i27CQZib9dl5b1g%2FBWi8H3O7m5gG9%2B9rx7VuRe7C6Ux6Qpe9pMTbWThc2VaQLlaU9lpbCUcec9uNWb8dHS7zmpSHXDFKK1WrAFmoyt&X-Amz-Signature=bd70646e68546db2622181c4d0233b0fe365bea642eaa17c83b242e37cf144e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUBJMO3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRfoGtOQFnvT9FjT%2FxQhLSXDhY21aAFANW5%2Bf%2BtfCHQIhAKh9o9Nv9hm1rbAOEEvnWoMUJCigsNiyz9S8RPY61O1eKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMPIfRCGF86UVkOiAq3AM%2BCY34D4C09%2BDReySPBZbT3rXbWFpE4dectaOD6sJV5taj2n4nf3LR%2FUy0xYOJYXMpfj5EWFTsv2URMWAGI9g0dRiyum3qGR59EPwuGm2Vu1piE3tW7bAhHlblplBilgegDzIQu%2BgtLKGK6qLhMePoIhNo2HDnSHSlY5hwef6Bp742bnqWXPYBEbcrcKlp8CRHJVSQYe6%2FeF%2BQ0pwM2H23cDDr6zEq9NylzVHbWfk%2F4MzbzugPAmd6VaCuiuTG0llmjPAhQm9GgBoA4bZZvQslwwwmoerXVm4TH%2FLB7f%2BglKS3o4xmXCwvgD%2FyJtr%2F%2BgVulmTN0BKIboD3GE5aH0NGAQxPEuyMvBu4cnmeswjLz%2B1fc%2BqmmbWnvUawhGoTklqVWdIu34bDEjmGO441H%2F8FC95pOcgQnlDZoUiH1b6jIN27GdiVotOFqXvfbM%2Fbjdn25vU622DmRVERB3wNBUUARmmV2UntJGHwxw6B6QHYkwQoe3f2vtrPgugKfCVd6475WhRybUNb%2BRRTYLarBifCPwSyNDl%2Bbexoo%2BeyvkD1hkir8R%2ByXokaUoWO397FQz7JE6JErIkhkhcBTNzQkYhAqnJHXXKM6q9mohP5a%2BEn5vUsXn33HI2cbAd8XDCvsbPEBjqkAbTbfDzu1rer4j7CPCFGDbaPain8yIXBcKaZCYnHAz4tJGiUlJ30zuux5pRtD8%2F81yCcHqTfrgo%2Bc9%2FG6mvR%2B3jNfZcUezgGN7Xz3MmjCnIznRx0kQ1t53i27CQZib9dl5b1g%2FBWi8H3O7m5gG9%2B9rx7VuRe7C6Ux6Qpe9pMTbWThc2VaQLlaU9lpbCUcec9uNWb8dHS7zmpSHXDFKK1WrAFmoyt&X-Amz-Signature=04ba7f810748847d57fe60bf91426f0150a81d93f8649c71a6a1aefe5f33b91a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUBJMO3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRfoGtOQFnvT9FjT%2FxQhLSXDhY21aAFANW5%2Bf%2BtfCHQIhAKh9o9Nv9hm1rbAOEEvnWoMUJCigsNiyz9S8RPY61O1eKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMPIfRCGF86UVkOiAq3AM%2BCY34D4C09%2BDReySPBZbT3rXbWFpE4dectaOD6sJV5taj2n4nf3LR%2FUy0xYOJYXMpfj5EWFTsv2URMWAGI9g0dRiyum3qGR59EPwuGm2Vu1piE3tW7bAhHlblplBilgegDzIQu%2BgtLKGK6qLhMePoIhNo2HDnSHSlY5hwef6Bp742bnqWXPYBEbcrcKlp8CRHJVSQYe6%2FeF%2BQ0pwM2H23cDDr6zEq9NylzVHbWfk%2F4MzbzugPAmd6VaCuiuTG0llmjPAhQm9GgBoA4bZZvQslwwwmoerXVm4TH%2FLB7f%2BglKS3o4xmXCwvgD%2FyJtr%2F%2BgVulmTN0BKIboD3GE5aH0NGAQxPEuyMvBu4cnmeswjLz%2B1fc%2BqmmbWnvUawhGoTklqVWdIu34bDEjmGO441H%2F8FC95pOcgQnlDZoUiH1b6jIN27GdiVotOFqXvfbM%2Fbjdn25vU622DmRVERB3wNBUUARmmV2UntJGHwxw6B6QHYkwQoe3f2vtrPgugKfCVd6475WhRybUNb%2BRRTYLarBifCPwSyNDl%2Bbexoo%2BeyvkD1hkir8R%2ByXokaUoWO397FQz7JE6JErIkhkhcBTNzQkYhAqnJHXXKM6q9mohP5a%2BEn5vUsXn33HI2cbAd8XDCvsbPEBjqkAbTbfDzu1rer4j7CPCFGDbaPain8yIXBcKaZCYnHAz4tJGiUlJ30zuux5pRtD8%2F81yCcHqTfrgo%2Bc9%2FG6mvR%2B3jNfZcUezgGN7Xz3MmjCnIznRx0kQ1t53i27CQZib9dl5b1g%2FBWi8H3O7m5gG9%2B9rx7VuRe7C6Ux6Qpe9pMTbWThc2VaQLlaU9lpbCUcec9uNWb8dHS7zmpSHXDFKK1WrAFmoyt&X-Amz-Signature=1a326b51ec0f369eb73c7cd05b5b6bc34762e276eddbaa1c1bb56622c7183669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUBJMO3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRfoGtOQFnvT9FjT%2FxQhLSXDhY21aAFANW5%2Bf%2BtfCHQIhAKh9o9Nv9hm1rbAOEEvnWoMUJCigsNiyz9S8RPY61O1eKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMPIfRCGF86UVkOiAq3AM%2BCY34D4C09%2BDReySPBZbT3rXbWFpE4dectaOD6sJV5taj2n4nf3LR%2FUy0xYOJYXMpfj5EWFTsv2URMWAGI9g0dRiyum3qGR59EPwuGm2Vu1piE3tW7bAhHlblplBilgegDzIQu%2BgtLKGK6qLhMePoIhNo2HDnSHSlY5hwef6Bp742bnqWXPYBEbcrcKlp8CRHJVSQYe6%2FeF%2BQ0pwM2H23cDDr6zEq9NylzVHbWfk%2F4MzbzugPAmd6VaCuiuTG0llmjPAhQm9GgBoA4bZZvQslwwwmoerXVm4TH%2FLB7f%2BglKS3o4xmXCwvgD%2FyJtr%2F%2BgVulmTN0BKIboD3GE5aH0NGAQxPEuyMvBu4cnmeswjLz%2B1fc%2BqmmbWnvUawhGoTklqVWdIu34bDEjmGO441H%2F8FC95pOcgQnlDZoUiH1b6jIN27GdiVotOFqXvfbM%2Fbjdn25vU622DmRVERB3wNBUUARmmV2UntJGHwxw6B6QHYkwQoe3f2vtrPgugKfCVd6475WhRybUNb%2BRRTYLarBifCPwSyNDl%2Bbexoo%2BeyvkD1hkir8R%2ByXokaUoWO397FQz7JE6JErIkhkhcBTNzQkYhAqnJHXXKM6q9mohP5a%2BEn5vUsXn33HI2cbAd8XDCvsbPEBjqkAbTbfDzu1rer4j7CPCFGDbaPain8yIXBcKaZCYnHAz4tJGiUlJ30zuux5pRtD8%2F81yCcHqTfrgo%2Bc9%2FG6mvR%2B3jNfZcUezgGN7Xz3MmjCnIznRx0kQ1t53i27CQZib9dl5b1g%2FBWi8H3O7m5gG9%2B9rx7VuRe7C6Ux6Qpe9pMTbWThc2VaQLlaU9lpbCUcec9uNWb8dHS7zmpSHXDFKK1WrAFmoyt&X-Amz-Signature=ac709ccb4249eee19b4cd16d464bc804d3923d054da1301cc9137f825f9ba5ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUBJMO3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRfoGtOQFnvT9FjT%2FxQhLSXDhY21aAFANW5%2Bf%2BtfCHQIhAKh9o9Nv9hm1rbAOEEvnWoMUJCigsNiyz9S8RPY61O1eKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMPIfRCGF86UVkOiAq3AM%2BCY34D4C09%2BDReySPBZbT3rXbWFpE4dectaOD6sJV5taj2n4nf3LR%2FUy0xYOJYXMpfj5EWFTsv2URMWAGI9g0dRiyum3qGR59EPwuGm2Vu1piE3tW7bAhHlblplBilgegDzIQu%2BgtLKGK6qLhMePoIhNo2HDnSHSlY5hwef6Bp742bnqWXPYBEbcrcKlp8CRHJVSQYe6%2FeF%2BQ0pwM2H23cDDr6zEq9NylzVHbWfk%2F4MzbzugPAmd6VaCuiuTG0llmjPAhQm9GgBoA4bZZvQslwwwmoerXVm4TH%2FLB7f%2BglKS3o4xmXCwvgD%2FyJtr%2F%2BgVulmTN0BKIboD3GE5aH0NGAQxPEuyMvBu4cnmeswjLz%2B1fc%2BqmmbWnvUawhGoTklqVWdIu34bDEjmGO441H%2F8FC95pOcgQnlDZoUiH1b6jIN27GdiVotOFqXvfbM%2Fbjdn25vU622DmRVERB3wNBUUARmmV2UntJGHwxw6B6QHYkwQoe3f2vtrPgugKfCVd6475WhRybUNb%2BRRTYLarBifCPwSyNDl%2Bbexoo%2BeyvkD1hkir8R%2ByXokaUoWO397FQz7JE6JErIkhkhcBTNzQkYhAqnJHXXKM6q9mohP5a%2BEn5vUsXn33HI2cbAd8XDCvsbPEBjqkAbTbfDzu1rer4j7CPCFGDbaPain8yIXBcKaZCYnHAz4tJGiUlJ30zuux5pRtD8%2F81yCcHqTfrgo%2Bc9%2FG6mvR%2B3jNfZcUezgGN7Xz3MmjCnIznRx0kQ1t53i27CQZib9dl5b1g%2FBWi8H3O7m5gG9%2B9rx7VuRe7C6Ux6Qpe9pMTbWThc2VaQLlaU9lpbCUcec9uNWb8dHS7zmpSHXDFKK1WrAFmoyt&X-Amz-Signature=99a67745d3a4f72e601fcb87f407f0775a755be50a1a51596c544b2edcc18cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUBJMO3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRfoGtOQFnvT9FjT%2FxQhLSXDhY21aAFANW5%2Bf%2BtfCHQIhAKh9o9Nv9hm1rbAOEEvnWoMUJCigsNiyz9S8RPY61O1eKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMPIfRCGF86UVkOiAq3AM%2BCY34D4C09%2BDReySPBZbT3rXbWFpE4dectaOD6sJV5taj2n4nf3LR%2FUy0xYOJYXMpfj5EWFTsv2URMWAGI9g0dRiyum3qGR59EPwuGm2Vu1piE3tW7bAhHlblplBilgegDzIQu%2BgtLKGK6qLhMePoIhNo2HDnSHSlY5hwef6Bp742bnqWXPYBEbcrcKlp8CRHJVSQYe6%2FeF%2BQ0pwM2H23cDDr6zEq9NylzVHbWfk%2F4MzbzugPAmd6VaCuiuTG0llmjPAhQm9GgBoA4bZZvQslwwwmoerXVm4TH%2FLB7f%2BglKS3o4xmXCwvgD%2FyJtr%2F%2BgVulmTN0BKIboD3GE5aH0NGAQxPEuyMvBu4cnmeswjLz%2B1fc%2BqmmbWnvUawhGoTklqVWdIu34bDEjmGO441H%2F8FC95pOcgQnlDZoUiH1b6jIN27GdiVotOFqXvfbM%2Fbjdn25vU622DmRVERB3wNBUUARmmV2UntJGHwxw6B6QHYkwQoe3f2vtrPgugKfCVd6475WhRybUNb%2BRRTYLarBifCPwSyNDl%2Bbexoo%2BeyvkD1hkir8R%2ByXokaUoWO397FQz7JE6JErIkhkhcBTNzQkYhAqnJHXXKM6q9mohP5a%2BEn5vUsXn33HI2cbAd8XDCvsbPEBjqkAbTbfDzu1rer4j7CPCFGDbaPain8yIXBcKaZCYnHAz4tJGiUlJ30zuux5pRtD8%2F81yCcHqTfrgo%2Bc9%2FG6mvR%2B3jNfZcUezgGN7Xz3MmjCnIznRx0kQ1t53i27CQZib9dl5b1g%2FBWi8H3O7m5gG9%2B9rx7VuRe7C6Ux6Qpe9pMTbWThc2VaQLlaU9lpbCUcec9uNWb8dHS7zmpSHXDFKK1WrAFmoyt&X-Amz-Signature=7f9170866f223bb7878df742883bbd179b3c38c5f416bb857a885035b7587ad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUBJMO3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRfoGtOQFnvT9FjT%2FxQhLSXDhY21aAFANW5%2Bf%2BtfCHQIhAKh9o9Nv9hm1rbAOEEvnWoMUJCigsNiyz9S8RPY61O1eKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMPIfRCGF86UVkOiAq3AM%2BCY34D4C09%2BDReySPBZbT3rXbWFpE4dectaOD6sJV5taj2n4nf3LR%2FUy0xYOJYXMpfj5EWFTsv2URMWAGI9g0dRiyum3qGR59EPwuGm2Vu1piE3tW7bAhHlblplBilgegDzIQu%2BgtLKGK6qLhMePoIhNo2HDnSHSlY5hwef6Bp742bnqWXPYBEbcrcKlp8CRHJVSQYe6%2FeF%2BQ0pwM2H23cDDr6zEq9NylzVHbWfk%2F4MzbzugPAmd6VaCuiuTG0llmjPAhQm9GgBoA4bZZvQslwwwmoerXVm4TH%2FLB7f%2BglKS3o4xmXCwvgD%2FyJtr%2F%2BgVulmTN0BKIboD3GE5aH0NGAQxPEuyMvBu4cnmeswjLz%2B1fc%2BqmmbWnvUawhGoTklqVWdIu34bDEjmGO441H%2F8FC95pOcgQnlDZoUiH1b6jIN27GdiVotOFqXvfbM%2Fbjdn25vU622DmRVERB3wNBUUARmmV2UntJGHwxw6B6QHYkwQoe3f2vtrPgugKfCVd6475WhRybUNb%2BRRTYLarBifCPwSyNDl%2Bbexoo%2BeyvkD1hkir8R%2ByXokaUoWO397FQz7JE6JErIkhkhcBTNzQkYhAqnJHXXKM6q9mohP5a%2BEn5vUsXn33HI2cbAd8XDCvsbPEBjqkAbTbfDzu1rer4j7CPCFGDbaPain8yIXBcKaZCYnHAz4tJGiUlJ30zuux5pRtD8%2F81yCcHqTfrgo%2Bc9%2FG6mvR%2B3jNfZcUezgGN7Xz3MmjCnIznRx0kQ1t53i27CQZib9dl5b1g%2FBWi8H3O7m5gG9%2B9rx7VuRe7C6Ux6Qpe9pMTbWThc2VaQLlaU9lpbCUcec9uNWb8dHS7zmpSHXDFKK1WrAFmoyt&X-Amz-Signature=603926868e33de5a31d266fb1946c9a9b0abd708272178317b22760bdbe9de64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUBJMO3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRfoGtOQFnvT9FjT%2FxQhLSXDhY21aAFANW5%2Bf%2BtfCHQIhAKh9o9Nv9hm1rbAOEEvnWoMUJCigsNiyz9S8RPY61O1eKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMPIfRCGF86UVkOiAq3AM%2BCY34D4C09%2BDReySPBZbT3rXbWFpE4dectaOD6sJV5taj2n4nf3LR%2FUy0xYOJYXMpfj5EWFTsv2URMWAGI9g0dRiyum3qGR59EPwuGm2Vu1piE3tW7bAhHlblplBilgegDzIQu%2BgtLKGK6qLhMePoIhNo2HDnSHSlY5hwef6Bp742bnqWXPYBEbcrcKlp8CRHJVSQYe6%2FeF%2BQ0pwM2H23cDDr6zEq9NylzVHbWfk%2F4MzbzugPAmd6VaCuiuTG0llmjPAhQm9GgBoA4bZZvQslwwwmoerXVm4TH%2FLB7f%2BglKS3o4xmXCwvgD%2FyJtr%2F%2BgVulmTN0BKIboD3GE5aH0NGAQxPEuyMvBu4cnmeswjLz%2B1fc%2BqmmbWnvUawhGoTklqVWdIu34bDEjmGO441H%2F8FC95pOcgQnlDZoUiH1b6jIN27GdiVotOFqXvfbM%2Fbjdn25vU622DmRVERB3wNBUUARmmV2UntJGHwxw6B6QHYkwQoe3f2vtrPgugKfCVd6475WhRybUNb%2BRRTYLarBifCPwSyNDl%2Bbexoo%2BeyvkD1hkir8R%2ByXokaUoWO397FQz7JE6JErIkhkhcBTNzQkYhAqnJHXXKM6q9mohP5a%2BEn5vUsXn33HI2cbAd8XDCvsbPEBjqkAbTbfDzu1rer4j7CPCFGDbaPain8yIXBcKaZCYnHAz4tJGiUlJ30zuux5pRtD8%2F81yCcHqTfrgo%2Bc9%2FG6mvR%2B3jNfZcUezgGN7Xz3MmjCnIznRx0kQ1t53i27CQZib9dl5b1g%2FBWi8H3O7m5gG9%2B9rx7VuRe7C6Ux6Qpe9pMTbWThc2VaQLlaU9lpbCUcec9uNWb8dHS7zmpSHXDFKK1WrAFmoyt&X-Amz-Signature=21337dd6852189f6dec7f32e7a0d3dee98eb9aff4135063c5d340e8ce42766bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUBJMO3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRfoGtOQFnvT9FjT%2FxQhLSXDhY21aAFANW5%2Bf%2BtfCHQIhAKh9o9Nv9hm1rbAOEEvnWoMUJCigsNiyz9S8RPY61O1eKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMPIfRCGF86UVkOiAq3AM%2BCY34D4C09%2BDReySPBZbT3rXbWFpE4dectaOD6sJV5taj2n4nf3LR%2FUy0xYOJYXMpfj5EWFTsv2URMWAGI9g0dRiyum3qGR59EPwuGm2Vu1piE3tW7bAhHlblplBilgegDzIQu%2BgtLKGK6qLhMePoIhNo2HDnSHSlY5hwef6Bp742bnqWXPYBEbcrcKlp8CRHJVSQYe6%2FeF%2BQ0pwM2H23cDDr6zEq9NylzVHbWfk%2F4MzbzugPAmd6VaCuiuTG0llmjPAhQm9GgBoA4bZZvQslwwwmoerXVm4TH%2FLB7f%2BglKS3o4xmXCwvgD%2FyJtr%2F%2BgVulmTN0BKIboD3GE5aH0NGAQxPEuyMvBu4cnmeswjLz%2B1fc%2BqmmbWnvUawhGoTklqVWdIu34bDEjmGO441H%2F8FC95pOcgQnlDZoUiH1b6jIN27GdiVotOFqXvfbM%2Fbjdn25vU622DmRVERB3wNBUUARmmV2UntJGHwxw6B6QHYkwQoe3f2vtrPgugKfCVd6475WhRybUNb%2BRRTYLarBifCPwSyNDl%2Bbexoo%2BeyvkD1hkir8R%2ByXokaUoWO397FQz7JE6JErIkhkhcBTNzQkYhAqnJHXXKM6q9mohP5a%2BEn5vUsXn33HI2cbAd8XDCvsbPEBjqkAbTbfDzu1rer4j7CPCFGDbaPain8yIXBcKaZCYnHAz4tJGiUlJ30zuux5pRtD8%2F81yCcHqTfrgo%2Bc9%2FG6mvR%2B3jNfZcUezgGN7Xz3MmjCnIznRx0kQ1t53i27CQZib9dl5b1g%2FBWi8H3O7m5gG9%2B9rx7VuRe7C6Ux6Qpe9pMTbWThc2VaQLlaU9lpbCUcec9uNWb8dHS7zmpSHXDFKK1WrAFmoyt&X-Amz-Signature=5792b36187c06c4e1b17782f861b76eac43aa28706e1adedb70840d183086a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUBJMO3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRfoGtOQFnvT9FjT%2FxQhLSXDhY21aAFANW5%2Bf%2BtfCHQIhAKh9o9Nv9hm1rbAOEEvnWoMUJCigsNiyz9S8RPY61O1eKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMPIfRCGF86UVkOiAq3AM%2BCY34D4C09%2BDReySPBZbT3rXbWFpE4dectaOD6sJV5taj2n4nf3LR%2FUy0xYOJYXMpfj5EWFTsv2URMWAGI9g0dRiyum3qGR59EPwuGm2Vu1piE3tW7bAhHlblplBilgegDzIQu%2BgtLKGK6qLhMePoIhNo2HDnSHSlY5hwef6Bp742bnqWXPYBEbcrcKlp8CRHJVSQYe6%2FeF%2BQ0pwM2H23cDDr6zEq9NylzVHbWfk%2F4MzbzugPAmd6VaCuiuTG0llmjPAhQm9GgBoA4bZZvQslwwwmoerXVm4TH%2FLB7f%2BglKS3o4xmXCwvgD%2FyJtr%2F%2BgVulmTN0BKIboD3GE5aH0NGAQxPEuyMvBu4cnmeswjLz%2B1fc%2BqmmbWnvUawhGoTklqVWdIu34bDEjmGO441H%2F8FC95pOcgQnlDZoUiH1b6jIN27GdiVotOFqXvfbM%2Fbjdn25vU622DmRVERB3wNBUUARmmV2UntJGHwxw6B6QHYkwQoe3f2vtrPgugKfCVd6475WhRybUNb%2BRRTYLarBifCPwSyNDl%2Bbexoo%2BeyvkD1hkir8R%2ByXokaUoWO397FQz7JE6JErIkhkhcBTNzQkYhAqnJHXXKM6q9mohP5a%2BEn5vUsXn33HI2cbAd8XDCvsbPEBjqkAbTbfDzu1rer4j7CPCFGDbaPain8yIXBcKaZCYnHAz4tJGiUlJ30zuux5pRtD8%2F81yCcHqTfrgo%2Bc9%2FG6mvR%2B3jNfZcUezgGN7Xz3MmjCnIznRx0kQ1t53i27CQZib9dl5b1g%2FBWi8H3O7m5gG9%2B9rx7VuRe7C6Ux6Qpe9pMTbWThc2VaQLlaU9lpbCUcec9uNWb8dHS7zmpSHXDFKK1WrAFmoyt&X-Amz-Signature=f6b5cd7a08e37ef3306acb9657eb53563fd169c17ff25c16492d1e6c651d9efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUBJMO3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRfoGtOQFnvT9FjT%2FxQhLSXDhY21aAFANW5%2Bf%2BtfCHQIhAKh9o9Nv9hm1rbAOEEvnWoMUJCigsNiyz9S8RPY61O1eKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMPIfRCGF86UVkOiAq3AM%2BCY34D4C09%2BDReySPBZbT3rXbWFpE4dectaOD6sJV5taj2n4nf3LR%2FUy0xYOJYXMpfj5EWFTsv2URMWAGI9g0dRiyum3qGR59EPwuGm2Vu1piE3tW7bAhHlblplBilgegDzIQu%2BgtLKGK6qLhMePoIhNo2HDnSHSlY5hwef6Bp742bnqWXPYBEbcrcKlp8CRHJVSQYe6%2FeF%2BQ0pwM2H23cDDr6zEq9NylzVHbWfk%2F4MzbzugPAmd6VaCuiuTG0llmjPAhQm9GgBoA4bZZvQslwwwmoerXVm4TH%2FLB7f%2BglKS3o4xmXCwvgD%2FyJtr%2F%2BgVulmTN0BKIboD3GE5aH0NGAQxPEuyMvBu4cnmeswjLz%2B1fc%2BqmmbWnvUawhGoTklqVWdIu34bDEjmGO441H%2F8FC95pOcgQnlDZoUiH1b6jIN27GdiVotOFqXvfbM%2Fbjdn25vU622DmRVERB3wNBUUARmmV2UntJGHwxw6B6QHYkwQoe3f2vtrPgugKfCVd6475WhRybUNb%2BRRTYLarBifCPwSyNDl%2Bbexoo%2BeyvkD1hkir8R%2ByXokaUoWO397FQz7JE6JErIkhkhcBTNzQkYhAqnJHXXKM6q9mohP5a%2BEn5vUsXn33HI2cbAd8XDCvsbPEBjqkAbTbfDzu1rer4j7CPCFGDbaPain8yIXBcKaZCYnHAz4tJGiUlJ30zuux5pRtD8%2F81yCcHqTfrgo%2Bc9%2FG6mvR%2B3jNfZcUezgGN7Xz3MmjCnIznRx0kQ1t53i27CQZib9dl5b1g%2FBWi8H3O7m5gG9%2B9rx7VuRe7C6Ux6Qpe9pMTbWThc2VaQLlaU9lpbCUcec9uNWb8dHS7zmpSHXDFKK1WrAFmoyt&X-Amz-Signature=94f69f1491f4b2b149e2853de968cb61f8104ca251d07a491da67b73bfb352bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUBJMO3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRfoGtOQFnvT9FjT%2FxQhLSXDhY21aAFANW5%2Bf%2BtfCHQIhAKh9o9Nv9hm1rbAOEEvnWoMUJCigsNiyz9S8RPY61O1eKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMPIfRCGF86UVkOiAq3AM%2BCY34D4C09%2BDReySPBZbT3rXbWFpE4dectaOD6sJV5taj2n4nf3LR%2FUy0xYOJYXMpfj5EWFTsv2URMWAGI9g0dRiyum3qGR59EPwuGm2Vu1piE3tW7bAhHlblplBilgegDzIQu%2BgtLKGK6qLhMePoIhNo2HDnSHSlY5hwef6Bp742bnqWXPYBEbcrcKlp8CRHJVSQYe6%2FeF%2BQ0pwM2H23cDDr6zEq9NylzVHbWfk%2F4MzbzugPAmd6VaCuiuTG0llmjPAhQm9GgBoA4bZZvQslwwwmoerXVm4TH%2FLB7f%2BglKS3o4xmXCwvgD%2FyJtr%2F%2BgVulmTN0BKIboD3GE5aH0NGAQxPEuyMvBu4cnmeswjLz%2B1fc%2BqmmbWnvUawhGoTklqVWdIu34bDEjmGO441H%2F8FC95pOcgQnlDZoUiH1b6jIN27GdiVotOFqXvfbM%2Fbjdn25vU622DmRVERB3wNBUUARmmV2UntJGHwxw6B6QHYkwQoe3f2vtrPgugKfCVd6475WhRybUNb%2BRRTYLarBifCPwSyNDl%2Bbexoo%2BeyvkD1hkir8R%2ByXokaUoWO397FQz7JE6JErIkhkhcBTNzQkYhAqnJHXXKM6q9mohP5a%2BEn5vUsXn33HI2cbAd8XDCvsbPEBjqkAbTbfDzu1rer4j7CPCFGDbaPain8yIXBcKaZCYnHAz4tJGiUlJ30zuux5pRtD8%2F81yCcHqTfrgo%2Bc9%2FG6mvR%2B3jNfZcUezgGN7Xz3MmjCnIznRx0kQ1t53i27CQZib9dl5b1g%2FBWi8H3O7m5gG9%2B9rx7VuRe7C6Ux6Qpe9pMTbWThc2VaQLlaU9lpbCUcec9uNWb8dHS7zmpSHXDFKK1WrAFmoyt&X-Amz-Signature=d7e1b1f18a619a4e693397f71e29180d19b2ac675c58069e4e5adebc028dc353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUBJMO3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRfoGtOQFnvT9FjT%2FxQhLSXDhY21aAFANW5%2Bf%2BtfCHQIhAKh9o9Nv9hm1rbAOEEvnWoMUJCigsNiyz9S8RPY61O1eKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMPIfRCGF86UVkOiAq3AM%2BCY34D4C09%2BDReySPBZbT3rXbWFpE4dectaOD6sJV5taj2n4nf3LR%2FUy0xYOJYXMpfj5EWFTsv2URMWAGI9g0dRiyum3qGR59EPwuGm2Vu1piE3tW7bAhHlblplBilgegDzIQu%2BgtLKGK6qLhMePoIhNo2HDnSHSlY5hwef6Bp742bnqWXPYBEbcrcKlp8CRHJVSQYe6%2FeF%2BQ0pwM2H23cDDr6zEq9NylzVHbWfk%2F4MzbzugPAmd6VaCuiuTG0llmjPAhQm9GgBoA4bZZvQslwwwmoerXVm4TH%2FLB7f%2BglKS3o4xmXCwvgD%2FyJtr%2F%2BgVulmTN0BKIboD3GE5aH0NGAQxPEuyMvBu4cnmeswjLz%2B1fc%2BqmmbWnvUawhGoTklqVWdIu34bDEjmGO441H%2F8FC95pOcgQnlDZoUiH1b6jIN27GdiVotOFqXvfbM%2Fbjdn25vU622DmRVERB3wNBUUARmmV2UntJGHwxw6B6QHYkwQoe3f2vtrPgugKfCVd6475WhRybUNb%2BRRTYLarBifCPwSyNDl%2Bbexoo%2BeyvkD1hkir8R%2ByXokaUoWO397FQz7JE6JErIkhkhcBTNzQkYhAqnJHXXKM6q9mohP5a%2BEn5vUsXn33HI2cbAd8XDCvsbPEBjqkAbTbfDzu1rer4j7CPCFGDbaPain8yIXBcKaZCYnHAz4tJGiUlJ30zuux5pRtD8%2F81yCcHqTfrgo%2Bc9%2FG6mvR%2B3jNfZcUezgGN7Xz3MmjCnIznRx0kQ1t53i27CQZib9dl5b1g%2FBWi8H3O7m5gG9%2B9rx7VuRe7C6Ux6Qpe9pMTbWThc2VaQLlaU9lpbCUcec9uNWb8dHS7zmpSHXDFKK1WrAFmoyt&X-Amz-Signature=6eff03888cdf2150579ddd3a8f7fe84ef5075992123056ef4d649c7caf5923db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUBJMO3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRfoGtOQFnvT9FjT%2FxQhLSXDhY21aAFANW5%2Bf%2BtfCHQIhAKh9o9Nv9hm1rbAOEEvnWoMUJCigsNiyz9S8RPY61O1eKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMPIfRCGF86UVkOiAq3AM%2BCY34D4C09%2BDReySPBZbT3rXbWFpE4dectaOD6sJV5taj2n4nf3LR%2FUy0xYOJYXMpfj5EWFTsv2URMWAGI9g0dRiyum3qGR59EPwuGm2Vu1piE3tW7bAhHlblplBilgegDzIQu%2BgtLKGK6qLhMePoIhNo2HDnSHSlY5hwef6Bp742bnqWXPYBEbcrcKlp8CRHJVSQYe6%2FeF%2BQ0pwM2H23cDDr6zEq9NylzVHbWfk%2F4MzbzugPAmd6VaCuiuTG0llmjPAhQm9GgBoA4bZZvQslwwwmoerXVm4TH%2FLB7f%2BglKS3o4xmXCwvgD%2FyJtr%2F%2BgVulmTN0BKIboD3GE5aH0NGAQxPEuyMvBu4cnmeswjLz%2B1fc%2BqmmbWnvUawhGoTklqVWdIu34bDEjmGO441H%2F8FC95pOcgQnlDZoUiH1b6jIN27GdiVotOFqXvfbM%2Fbjdn25vU622DmRVERB3wNBUUARmmV2UntJGHwxw6B6QHYkwQoe3f2vtrPgugKfCVd6475WhRybUNb%2BRRTYLarBifCPwSyNDl%2Bbexoo%2BeyvkD1hkir8R%2ByXokaUoWO397FQz7JE6JErIkhkhcBTNzQkYhAqnJHXXKM6q9mohP5a%2BEn5vUsXn33HI2cbAd8XDCvsbPEBjqkAbTbfDzu1rer4j7CPCFGDbaPain8yIXBcKaZCYnHAz4tJGiUlJ30zuux5pRtD8%2F81yCcHqTfrgo%2Bc9%2FG6mvR%2B3jNfZcUezgGN7Xz3MmjCnIznRx0kQ1t53i27CQZib9dl5b1g%2FBWi8H3O7m5gG9%2B9rx7VuRe7C6Ux6Qpe9pMTbWThc2VaQLlaU9lpbCUcec9uNWb8dHS7zmpSHXDFKK1WrAFmoyt&X-Amz-Signature=d5e638dacc5b9f2c78f3f013e79f51db93335aed75e879cba9ac3cc7aea9469c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
