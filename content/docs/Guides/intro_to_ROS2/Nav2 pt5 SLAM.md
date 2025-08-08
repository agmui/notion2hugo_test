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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2CYODC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDtqdyjwNSvLuuXU3hK692lToG0Fry8cW2K%2By2n7GdC3AiAZGsawCa3JpkchUSaqRNEa5759yIwAwCHER7fmxikLWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8FlhnElJ2m9eUsMKtwD0575LNHzBI07DPKNEkjCQZKOO2Adr1GGawoCkgG0X4duaWYb3HYtKpw0wPgomQz3Wb6NPI9MFgqpa1P0b2479SGQ5TpadfrlMys660BVedYlZN5KOejW7Nv3ulmraXmABjF2fyUlRtfQgRjAtiSIKH4Mq1VuIXvhlwKRmFffKQFlfug9n2oeCy46q1jEvtpve3Ormd2jIBARQFUMzdcTuN6jx6P3c6iDuwd7wawWWrVc8%2B4wqeqHe6%2FEYS4Y0C61%2FuGoD5DICmy2nIuJ%2BCD8Ps%2BNuGo2obbxIvHNRks%2BS5Zc0uYMpJ6K5NA1ne9NR2XFAScEen8vjF10ddXnoOm5HwEtHkTDh5op%2F6e3TFO96gJGl0GNmiz8FshR8pjpIolJxNhLODgsM4VrCJ63%2B%2BdwS9NarYXWn2Yxt68QWydO9fj3MNO3qYmSESES5wVK%2FC7H3nmp5aKT0iKf7pEnUylblGEyR2kryEFTFZ2xvznvxuEcSEr41Peug2cPziebJNm5QSCgnVf8VIb13vI%2BlkL09M3GOwkwTxwNFA0s5BLnyOYt8E7rkxQ%2FnaGk2zlSsx9XE9TZaYnbNEGHpnNn9SOxFeNI3UI%2FUS%2F9IB%2F7npHUjSPkXuAqgKtJboC4wU4wzIHYxAY6pgHMUOzKJdIZCZlirRlKM8lev5ft8zA3rrb1uT8KqxC597nGYnwFr6hDDzssPLIc4DQ6lp1nLcb6vU0p%2BT0vHy3FtNOd0K3VYGqUP0SrrxqQHBSeLoqXdIUmo2hnuf7YWNBiOCix%2F4KWQ%2BEatmuRl%2Fs7%2ByymhvxuxIAfiSXCvsMiIxhgzhYn6nstLpQvUPAXkAW2CKuSlg%2BnYdENASJ6ZH4pHQ0TeG5Z&X-Amz-Signature=4578637c504c2fea954888778a8072a25633044d02e023c976e52d7324ba602e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2CYODC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDtqdyjwNSvLuuXU3hK692lToG0Fry8cW2K%2By2n7GdC3AiAZGsawCa3JpkchUSaqRNEa5759yIwAwCHER7fmxikLWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8FlhnElJ2m9eUsMKtwD0575LNHzBI07DPKNEkjCQZKOO2Adr1GGawoCkgG0X4duaWYb3HYtKpw0wPgomQz3Wb6NPI9MFgqpa1P0b2479SGQ5TpadfrlMys660BVedYlZN5KOejW7Nv3ulmraXmABjF2fyUlRtfQgRjAtiSIKH4Mq1VuIXvhlwKRmFffKQFlfug9n2oeCy46q1jEvtpve3Ormd2jIBARQFUMzdcTuN6jx6P3c6iDuwd7wawWWrVc8%2B4wqeqHe6%2FEYS4Y0C61%2FuGoD5DICmy2nIuJ%2BCD8Ps%2BNuGo2obbxIvHNRks%2BS5Zc0uYMpJ6K5NA1ne9NR2XFAScEen8vjF10ddXnoOm5HwEtHkTDh5op%2F6e3TFO96gJGl0GNmiz8FshR8pjpIolJxNhLODgsM4VrCJ63%2B%2BdwS9NarYXWn2Yxt68QWydO9fj3MNO3qYmSESES5wVK%2FC7H3nmp5aKT0iKf7pEnUylblGEyR2kryEFTFZ2xvznvxuEcSEr41Peug2cPziebJNm5QSCgnVf8VIb13vI%2BlkL09M3GOwkwTxwNFA0s5BLnyOYt8E7rkxQ%2FnaGk2zlSsx9XE9TZaYnbNEGHpnNn9SOxFeNI3UI%2FUS%2F9IB%2F7npHUjSPkXuAqgKtJboC4wU4wzIHYxAY6pgHMUOzKJdIZCZlirRlKM8lev5ft8zA3rrb1uT8KqxC597nGYnwFr6hDDzssPLIc4DQ6lp1nLcb6vU0p%2BT0vHy3FtNOd0K3VYGqUP0SrrxqQHBSeLoqXdIUmo2hnuf7YWNBiOCix%2F4KWQ%2BEatmuRl%2Fs7%2ByymhvxuxIAfiSXCvsMiIxhgzhYn6nstLpQvUPAXkAW2CKuSlg%2BnYdENASJ6ZH4pHQ0TeG5Z&X-Amz-Signature=465d7419eda716c07c8495dbff2ea37baaa016e62686f24924d45c2b81f62967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2CYODC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDtqdyjwNSvLuuXU3hK692lToG0Fry8cW2K%2By2n7GdC3AiAZGsawCa3JpkchUSaqRNEa5759yIwAwCHER7fmxikLWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8FlhnElJ2m9eUsMKtwD0575LNHzBI07DPKNEkjCQZKOO2Adr1GGawoCkgG0X4duaWYb3HYtKpw0wPgomQz3Wb6NPI9MFgqpa1P0b2479SGQ5TpadfrlMys660BVedYlZN5KOejW7Nv3ulmraXmABjF2fyUlRtfQgRjAtiSIKH4Mq1VuIXvhlwKRmFffKQFlfug9n2oeCy46q1jEvtpve3Ormd2jIBARQFUMzdcTuN6jx6P3c6iDuwd7wawWWrVc8%2B4wqeqHe6%2FEYS4Y0C61%2FuGoD5DICmy2nIuJ%2BCD8Ps%2BNuGo2obbxIvHNRks%2BS5Zc0uYMpJ6K5NA1ne9NR2XFAScEen8vjF10ddXnoOm5HwEtHkTDh5op%2F6e3TFO96gJGl0GNmiz8FshR8pjpIolJxNhLODgsM4VrCJ63%2B%2BdwS9NarYXWn2Yxt68QWydO9fj3MNO3qYmSESES5wVK%2FC7H3nmp5aKT0iKf7pEnUylblGEyR2kryEFTFZ2xvznvxuEcSEr41Peug2cPziebJNm5QSCgnVf8VIb13vI%2BlkL09M3GOwkwTxwNFA0s5BLnyOYt8E7rkxQ%2FnaGk2zlSsx9XE9TZaYnbNEGHpnNn9SOxFeNI3UI%2FUS%2F9IB%2F7npHUjSPkXuAqgKtJboC4wU4wzIHYxAY6pgHMUOzKJdIZCZlirRlKM8lev5ft8zA3rrb1uT8KqxC597nGYnwFr6hDDzssPLIc4DQ6lp1nLcb6vU0p%2BT0vHy3FtNOd0K3VYGqUP0SrrxqQHBSeLoqXdIUmo2hnuf7YWNBiOCix%2F4KWQ%2BEatmuRl%2Fs7%2ByymhvxuxIAfiSXCvsMiIxhgzhYn6nstLpQvUPAXkAW2CKuSlg%2BnYdENASJ6ZH4pHQ0TeG5Z&X-Amz-Signature=0e9aa866a5349b745d2448158affc9f1d9d15a7cd48204aee22802f25c7dd223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2CYODC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDtqdyjwNSvLuuXU3hK692lToG0Fry8cW2K%2By2n7GdC3AiAZGsawCa3JpkchUSaqRNEa5759yIwAwCHER7fmxikLWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8FlhnElJ2m9eUsMKtwD0575LNHzBI07DPKNEkjCQZKOO2Adr1GGawoCkgG0X4duaWYb3HYtKpw0wPgomQz3Wb6NPI9MFgqpa1P0b2479SGQ5TpadfrlMys660BVedYlZN5KOejW7Nv3ulmraXmABjF2fyUlRtfQgRjAtiSIKH4Mq1VuIXvhlwKRmFffKQFlfug9n2oeCy46q1jEvtpve3Ormd2jIBARQFUMzdcTuN6jx6P3c6iDuwd7wawWWrVc8%2B4wqeqHe6%2FEYS4Y0C61%2FuGoD5DICmy2nIuJ%2BCD8Ps%2BNuGo2obbxIvHNRks%2BS5Zc0uYMpJ6K5NA1ne9NR2XFAScEen8vjF10ddXnoOm5HwEtHkTDh5op%2F6e3TFO96gJGl0GNmiz8FshR8pjpIolJxNhLODgsM4VrCJ63%2B%2BdwS9NarYXWn2Yxt68QWydO9fj3MNO3qYmSESES5wVK%2FC7H3nmp5aKT0iKf7pEnUylblGEyR2kryEFTFZ2xvznvxuEcSEr41Peug2cPziebJNm5QSCgnVf8VIb13vI%2BlkL09M3GOwkwTxwNFA0s5BLnyOYt8E7rkxQ%2FnaGk2zlSsx9XE9TZaYnbNEGHpnNn9SOxFeNI3UI%2FUS%2F9IB%2F7npHUjSPkXuAqgKtJboC4wU4wzIHYxAY6pgHMUOzKJdIZCZlirRlKM8lev5ft8zA3rrb1uT8KqxC597nGYnwFr6hDDzssPLIc4DQ6lp1nLcb6vU0p%2BT0vHy3FtNOd0K3VYGqUP0SrrxqQHBSeLoqXdIUmo2hnuf7YWNBiOCix%2F4KWQ%2BEatmuRl%2Fs7%2ByymhvxuxIAfiSXCvsMiIxhgzhYn6nstLpQvUPAXkAW2CKuSlg%2BnYdENASJ6ZH4pHQ0TeG5Z&X-Amz-Signature=009f05e348b829b0866971462c952323601173fcc9cd5f4fa8cadf1cba6ed886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2CYODC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDtqdyjwNSvLuuXU3hK692lToG0Fry8cW2K%2By2n7GdC3AiAZGsawCa3JpkchUSaqRNEa5759yIwAwCHER7fmxikLWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8FlhnElJ2m9eUsMKtwD0575LNHzBI07DPKNEkjCQZKOO2Adr1GGawoCkgG0X4duaWYb3HYtKpw0wPgomQz3Wb6NPI9MFgqpa1P0b2479SGQ5TpadfrlMys660BVedYlZN5KOejW7Nv3ulmraXmABjF2fyUlRtfQgRjAtiSIKH4Mq1VuIXvhlwKRmFffKQFlfug9n2oeCy46q1jEvtpve3Ormd2jIBARQFUMzdcTuN6jx6P3c6iDuwd7wawWWrVc8%2B4wqeqHe6%2FEYS4Y0C61%2FuGoD5DICmy2nIuJ%2BCD8Ps%2BNuGo2obbxIvHNRks%2BS5Zc0uYMpJ6K5NA1ne9NR2XFAScEen8vjF10ddXnoOm5HwEtHkTDh5op%2F6e3TFO96gJGl0GNmiz8FshR8pjpIolJxNhLODgsM4VrCJ63%2B%2BdwS9NarYXWn2Yxt68QWydO9fj3MNO3qYmSESES5wVK%2FC7H3nmp5aKT0iKf7pEnUylblGEyR2kryEFTFZ2xvznvxuEcSEr41Peug2cPziebJNm5QSCgnVf8VIb13vI%2BlkL09M3GOwkwTxwNFA0s5BLnyOYt8E7rkxQ%2FnaGk2zlSsx9XE9TZaYnbNEGHpnNn9SOxFeNI3UI%2FUS%2F9IB%2F7npHUjSPkXuAqgKtJboC4wU4wzIHYxAY6pgHMUOzKJdIZCZlirRlKM8lev5ft8zA3rrb1uT8KqxC597nGYnwFr6hDDzssPLIc4DQ6lp1nLcb6vU0p%2BT0vHy3FtNOd0K3VYGqUP0SrrxqQHBSeLoqXdIUmo2hnuf7YWNBiOCix%2F4KWQ%2BEatmuRl%2Fs7%2ByymhvxuxIAfiSXCvsMiIxhgzhYn6nstLpQvUPAXkAW2CKuSlg%2BnYdENASJ6ZH4pHQ0TeG5Z&X-Amz-Signature=6a66ab22d260f7f3702b15ea25c320dce13a75de144e8cba86a249c5f5930560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2CYODC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDtqdyjwNSvLuuXU3hK692lToG0Fry8cW2K%2By2n7GdC3AiAZGsawCa3JpkchUSaqRNEa5759yIwAwCHER7fmxikLWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8FlhnElJ2m9eUsMKtwD0575LNHzBI07DPKNEkjCQZKOO2Adr1GGawoCkgG0X4duaWYb3HYtKpw0wPgomQz3Wb6NPI9MFgqpa1P0b2479SGQ5TpadfrlMys660BVedYlZN5KOejW7Nv3ulmraXmABjF2fyUlRtfQgRjAtiSIKH4Mq1VuIXvhlwKRmFffKQFlfug9n2oeCy46q1jEvtpve3Ormd2jIBARQFUMzdcTuN6jx6P3c6iDuwd7wawWWrVc8%2B4wqeqHe6%2FEYS4Y0C61%2FuGoD5DICmy2nIuJ%2BCD8Ps%2BNuGo2obbxIvHNRks%2BS5Zc0uYMpJ6K5NA1ne9NR2XFAScEen8vjF10ddXnoOm5HwEtHkTDh5op%2F6e3TFO96gJGl0GNmiz8FshR8pjpIolJxNhLODgsM4VrCJ63%2B%2BdwS9NarYXWn2Yxt68QWydO9fj3MNO3qYmSESES5wVK%2FC7H3nmp5aKT0iKf7pEnUylblGEyR2kryEFTFZ2xvznvxuEcSEr41Peug2cPziebJNm5QSCgnVf8VIb13vI%2BlkL09M3GOwkwTxwNFA0s5BLnyOYt8E7rkxQ%2FnaGk2zlSsx9XE9TZaYnbNEGHpnNn9SOxFeNI3UI%2FUS%2F9IB%2F7npHUjSPkXuAqgKtJboC4wU4wzIHYxAY6pgHMUOzKJdIZCZlirRlKM8lev5ft8zA3rrb1uT8KqxC597nGYnwFr6hDDzssPLIc4DQ6lp1nLcb6vU0p%2BT0vHy3FtNOd0K3VYGqUP0SrrxqQHBSeLoqXdIUmo2hnuf7YWNBiOCix%2F4KWQ%2BEatmuRl%2Fs7%2ByymhvxuxIAfiSXCvsMiIxhgzhYn6nstLpQvUPAXkAW2CKuSlg%2BnYdENASJ6ZH4pHQ0TeG5Z&X-Amz-Signature=c3e13720d88d893cbcf4e01d6f53f92524743c8aef8a91d86da0fd23dee35f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2CYODC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDtqdyjwNSvLuuXU3hK692lToG0Fry8cW2K%2By2n7GdC3AiAZGsawCa3JpkchUSaqRNEa5759yIwAwCHER7fmxikLWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8FlhnElJ2m9eUsMKtwD0575LNHzBI07DPKNEkjCQZKOO2Adr1GGawoCkgG0X4duaWYb3HYtKpw0wPgomQz3Wb6NPI9MFgqpa1P0b2479SGQ5TpadfrlMys660BVedYlZN5KOejW7Nv3ulmraXmABjF2fyUlRtfQgRjAtiSIKH4Mq1VuIXvhlwKRmFffKQFlfug9n2oeCy46q1jEvtpve3Ormd2jIBARQFUMzdcTuN6jx6P3c6iDuwd7wawWWrVc8%2B4wqeqHe6%2FEYS4Y0C61%2FuGoD5DICmy2nIuJ%2BCD8Ps%2BNuGo2obbxIvHNRks%2BS5Zc0uYMpJ6K5NA1ne9NR2XFAScEen8vjF10ddXnoOm5HwEtHkTDh5op%2F6e3TFO96gJGl0GNmiz8FshR8pjpIolJxNhLODgsM4VrCJ63%2B%2BdwS9NarYXWn2Yxt68QWydO9fj3MNO3qYmSESES5wVK%2FC7H3nmp5aKT0iKf7pEnUylblGEyR2kryEFTFZ2xvznvxuEcSEr41Peug2cPziebJNm5QSCgnVf8VIb13vI%2BlkL09M3GOwkwTxwNFA0s5BLnyOYt8E7rkxQ%2FnaGk2zlSsx9XE9TZaYnbNEGHpnNn9SOxFeNI3UI%2FUS%2F9IB%2F7npHUjSPkXuAqgKtJboC4wU4wzIHYxAY6pgHMUOzKJdIZCZlirRlKM8lev5ft8zA3rrb1uT8KqxC597nGYnwFr6hDDzssPLIc4DQ6lp1nLcb6vU0p%2BT0vHy3FtNOd0K3VYGqUP0SrrxqQHBSeLoqXdIUmo2hnuf7YWNBiOCix%2F4KWQ%2BEatmuRl%2Fs7%2ByymhvxuxIAfiSXCvsMiIxhgzhYn6nstLpQvUPAXkAW2CKuSlg%2BnYdENASJ6ZH4pHQ0TeG5Z&X-Amz-Signature=064ae3ec442cbdac6fab04880f77b81e592ce80ef5d0d7fb4b5cab73fb295a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2CYODC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDtqdyjwNSvLuuXU3hK692lToG0Fry8cW2K%2By2n7GdC3AiAZGsawCa3JpkchUSaqRNEa5759yIwAwCHER7fmxikLWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8FlhnElJ2m9eUsMKtwD0575LNHzBI07DPKNEkjCQZKOO2Adr1GGawoCkgG0X4duaWYb3HYtKpw0wPgomQz3Wb6NPI9MFgqpa1P0b2479SGQ5TpadfrlMys660BVedYlZN5KOejW7Nv3ulmraXmABjF2fyUlRtfQgRjAtiSIKH4Mq1VuIXvhlwKRmFffKQFlfug9n2oeCy46q1jEvtpve3Ormd2jIBARQFUMzdcTuN6jx6P3c6iDuwd7wawWWrVc8%2B4wqeqHe6%2FEYS4Y0C61%2FuGoD5DICmy2nIuJ%2BCD8Ps%2BNuGo2obbxIvHNRks%2BS5Zc0uYMpJ6K5NA1ne9NR2XFAScEen8vjF10ddXnoOm5HwEtHkTDh5op%2F6e3TFO96gJGl0GNmiz8FshR8pjpIolJxNhLODgsM4VrCJ63%2B%2BdwS9NarYXWn2Yxt68QWydO9fj3MNO3qYmSESES5wVK%2FC7H3nmp5aKT0iKf7pEnUylblGEyR2kryEFTFZ2xvznvxuEcSEr41Peug2cPziebJNm5QSCgnVf8VIb13vI%2BlkL09M3GOwkwTxwNFA0s5BLnyOYt8E7rkxQ%2FnaGk2zlSsx9XE9TZaYnbNEGHpnNn9SOxFeNI3UI%2FUS%2F9IB%2F7npHUjSPkXuAqgKtJboC4wU4wzIHYxAY6pgHMUOzKJdIZCZlirRlKM8lev5ft8zA3rrb1uT8KqxC597nGYnwFr6hDDzssPLIc4DQ6lp1nLcb6vU0p%2BT0vHy3FtNOd0K3VYGqUP0SrrxqQHBSeLoqXdIUmo2hnuf7YWNBiOCix%2F4KWQ%2BEatmuRl%2Fs7%2ByymhvxuxIAfiSXCvsMiIxhgzhYn6nstLpQvUPAXkAW2CKuSlg%2BnYdENASJ6ZH4pHQ0TeG5Z&X-Amz-Signature=f64b58f6e94e3c6fb1e15e25d83d5aaea11f88424896e94de8a85684c40c4f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2CYODC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDtqdyjwNSvLuuXU3hK692lToG0Fry8cW2K%2By2n7GdC3AiAZGsawCa3JpkchUSaqRNEa5759yIwAwCHER7fmxikLWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8FlhnElJ2m9eUsMKtwD0575LNHzBI07DPKNEkjCQZKOO2Adr1GGawoCkgG0X4duaWYb3HYtKpw0wPgomQz3Wb6NPI9MFgqpa1P0b2479SGQ5TpadfrlMys660BVedYlZN5KOejW7Nv3ulmraXmABjF2fyUlRtfQgRjAtiSIKH4Mq1VuIXvhlwKRmFffKQFlfug9n2oeCy46q1jEvtpve3Ormd2jIBARQFUMzdcTuN6jx6P3c6iDuwd7wawWWrVc8%2B4wqeqHe6%2FEYS4Y0C61%2FuGoD5DICmy2nIuJ%2BCD8Ps%2BNuGo2obbxIvHNRks%2BS5Zc0uYMpJ6K5NA1ne9NR2XFAScEen8vjF10ddXnoOm5HwEtHkTDh5op%2F6e3TFO96gJGl0GNmiz8FshR8pjpIolJxNhLODgsM4VrCJ63%2B%2BdwS9NarYXWn2Yxt68QWydO9fj3MNO3qYmSESES5wVK%2FC7H3nmp5aKT0iKf7pEnUylblGEyR2kryEFTFZ2xvznvxuEcSEr41Peug2cPziebJNm5QSCgnVf8VIb13vI%2BlkL09M3GOwkwTxwNFA0s5BLnyOYt8E7rkxQ%2FnaGk2zlSsx9XE9TZaYnbNEGHpnNn9SOxFeNI3UI%2FUS%2F9IB%2F7npHUjSPkXuAqgKtJboC4wU4wzIHYxAY6pgHMUOzKJdIZCZlirRlKM8lev5ft8zA3rrb1uT8KqxC597nGYnwFr6hDDzssPLIc4DQ6lp1nLcb6vU0p%2BT0vHy3FtNOd0K3VYGqUP0SrrxqQHBSeLoqXdIUmo2hnuf7YWNBiOCix%2F4KWQ%2BEatmuRl%2Fs7%2ByymhvxuxIAfiSXCvsMiIxhgzhYn6nstLpQvUPAXkAW2CKuSlg%2BnYdENASJ6ZH4pHQ0TeG5Z&X-Amz-Signature=721a631f4296638b43b273930ffd2b0c12e865cba5a25e874140cf8b006c7aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2CYODC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDtqdyjwNSvLuuXU3hK692lToG0Fry8cW2K%2By2n7GdC3AiAZGsawCa3JpkchUSaqRNEa5759yIwAwCHER7fmxikLWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8FlhnElJ2m9eUsMKtwD0575LNHzBI07DPKNEkjCQZKOO2Adr1GGawoCkgG0X4duaWYb3HYtKpw0wPgomQz3Wb6NPI9MFgqpa1P0b2479SGQ5TpadfrlMys660BVedYlZN5KOejW7Nv3ulmraXmABjF2fyUlRtfQgRjAtiSIKH4Mq1VuIXvhlwKRmFffKQFlfug9n2oeCy46q1jEvtpve3Ormd2jIBARQFUMzdcTuN6jx6P3c6iDuwd7wawWWrVc8%2B4wqeqHe6%2FEYS4Y0C61%2FuGoD5DICmy2nIuJ%2BCD8Ps%2BNuGo2obbxIvHNRks%2BS5Zc0uYMpJ6K5NA1ne9NR2XFAScEen8vjF10ddXnoOm5HwEtHkTDh5op%2F6e3TFO96gJGl0GNmiz8FshR8pjpIolJxNhLODgsM4VrCJ63%2B%2BdwS9NarYXWn2Yxt68QWydO9fj3MNO3qYmSESES5wVK%2FC7H3nmp5aKT0iKf7pEnUylblGEyR2kryEFTFZ2xvznvxuEcSEr41Peug2cPziebJNm5QSCgnVf8VIb13vI%2BlkL09M3GOwkwTxwNFA0s5BLnyOYt8E7rkxQ%2FnaGk2zlSsx9XE9TZaYnbNEGHpnNn9SOxFeNI3UI%2FUS%2F9IB%2F7npHUjSPkXuAqgKtJboC4wU4wzIHYxAY6pgHMUOzKJdIZCZlirRlKM8lev5ft8zA3rrb1uT8KqxC597nGYnwFr6hDDzssPLIc4DQ6lp1nLcb6vU0p%2BT0vHy3FtNOd0K3VYGqUP0SrrxqQHBSeLoqXdIUmo2hnuf7YWNBiOCix%2F4KWQ%2BEatmuRl%2Fs7%2ByymhvxuxIAfiSXCvsMiIxhgzhYn6nstLpQvUPAXkAW2CKuSlg%2BnYdENASJ6ZH4pHQ0TeG5Z&X-Amz-Signature=8d16601c6d65c5c53b48e44a1b246d01f599a13ee607d8d36cdd5dd96e102b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2CYODC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDtqdyjwNSvLuuXU3hK692lToG0Fry8cW2K%2By2n7GdC3AiAZGsawCa3JpkchUSaqRNEa5759yIwAwCHER7fmxikLWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8FlhnElJ2m9eUsMKtwD0575LNHzBI07DPKNEkjCQZKOO2Adr1GGawoCkgG0X4duaWYb3HYtKpw0wPgomQz3Wb6NPI9MFgqpa1P0b2479SGQ5TpadfrlMys660BVedYlZN5KOejW7Nv3ulmraXmABjF2fyUlRtfQgRjAtiSIKH4Mq1VuIXvhlwKRmFffKQFlfug9n2oeCy46q1jEvtpve3Ormd2jIBARQFUMzdcTuN6jx6P3c6iDuwd7wawWWrVc8%2B4wqeqHe6%2FEYS4Y0C61%2FuGoD5DICmy2nIuJ%2BCD8Ps%2BNuGo2obbxIvHNRks%2BS5Zc0uYMpJ6K5NA1ne9NR2XFAScEen8vjF10ddXnoOm5HwEtHkTDh5op%2F6e3TFO96gJGl0GNmiz8FshR8pjpIolJxNhLODgsM4VrCJ63%2B%2BdwS9NarYXWn2Yxt68QWydO9fj3MNO3qYmSESES5wVK%2FC7H3nmp5aKT0iKf7pEnUylblGEyR2kryEFTFZ2xvznvxuEcSEr41Peug2cPziebJNm5QSCgnVf8VIb13vI%2BlkL09M3GOwkwTxwNFA0s5BLnyOYt8E7rkxQ%2FnaGk2zlSsx9XE9TZaYnbNEGHpnNn9SOxFeNI3UI%2FUS%2F9IB%2F7npHUjSPkXuAqgKtJboC4wU4wzIHYxAY6pgHMUOzKJdIZCZlirRlKM8lev5ft8zA3rrb1uT8KqxC597nGYnwFr6hDDzssPLIc4DQ6lp1nLcb6vU0p%2BT0vHy3FtNOd0K3VYGqUP0SrrxqQHBSeLoqXdIUmo2hnuf7YWNBiOCix%2F4KWQ%2BEatmuRl%2Fs7%2ByymhvxuxIAfiSXCvsMiIxhgzhYn6nstLpQvUPAXkAW2CKuSlg%2BnYdENASJ6ZH4pHQ0TeG5Z&X-Amz-Signature=551d442c66a7535e4b33466460d49119e0756332eb19f74e34dd6cd094a2e589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2CYODC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDtqdyjwNSvLuuXU3hK692lToG0Fry8cW2K%2By2n7GdC3AiAZGsawCa3JpkchUSaqRNEa5759yIwAwCHER7fmxikLWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8FlhnElJ2m9eUsMKtwD0575LNHzBI07DPKNEkjCQZKOO2Adr1GGawoCkgG0X4duaWYb3HYtKpw0wPgomQz3Wb6NPI9MFgqpa1P0b2479SGQ5TpadfrlMys660BVedYlZN5KOejW7Nv3ulmraXmABjF2fyUlRtfQgRjAtiSIKH4Mq1VuIXvhlwKRmFffKQFlfug9n2oeCy46q1jEvtpve3Ormd2jIBARQFUMzdcTuN6jx6P3c6iDuwd7wawWWrVc8%2B4wqeqHe6%2FEYS4Y0C61%2FuGoD5DICmy2nIuJ%2BCD8Ps%2BNuGo2obbxIvHNRks%2BS5Zc0uYMpJ6K5NA1ne9NR2XFAScEen8vjF10ddXnoOm5HwEtHkTDh5op%2F6e3TFO96gJGl0GNmiz8FshR8pjpIolJxNhLODgsM4VrCJ63%2B%2BdwS9NarYXWn2Yxt68QWydO9fj3MNO3qYmSESES5wVK%2FC7H3nmp5aKT0iKf7pEnUylblGEyR2kryEFTFZ2xvznvxuEcSEr41Peug2cPziebJNm5QSCgnVf8VIb13vI%2BlkL09M3GOwkwTxwNFA0s5BLnyOYt8E7rkxQ%2FnaGk2zlSsx9XE9TZaYnbNEGHpnNn9SOxFeNI3UI%2FUS%2F9IB%2F7npHUjSPkXuAqgKtJboC4wU4wzIHYxAY6pgHMUOzKJdIZCZlirRlKM8lev5ft8zA3rrb1uT8KqxC597nGYnwFr6hDDzssPLIc4DQ6lp1nLcb6vU0p%2BT0vHy3FtNOd0K3VYGqUP0SrrxqQHBSeLoqXdIUmo2hnuf7YWNBiOCix%2F4KWQ%2BEatmuRl%2Fs7%2ByymhvxuxIAfiSXCvsMiIxhgzhYn6nstLpQvUPAXkAW2CKuSlg%2BnYdENASJ6ZH4pHQ0TeG5Z&X-Amz-Signature=8939a873649075dca83a0cb20316f000b06b0c9c56a04be8397551e55e3aea83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2CYODC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDtqdyjwNSvLuuXU3hK692lToG0Fry8cW2K%2By2n7GdC3AiAZGsawCa3JpkchUSaqRNEa5759yIwAwCHER7fmxikLWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8FlhnElJ2m9eUsMKtwD0575LNHzBI07DPKNEkjCQZKOO2Adr1GGawoCkgG0X4duaWYb3HYtKpw0wPgomQz3Wb6NPI9MFgqpa1P0b2479SGQ5TpadfrlMys660BVedYlZN5KOejW7Nv3ulmraXmABjF2fyUlRtfQgRjAtiSIKH4Mq1VuIXvhlwKRmFffKQFlfug9n2oeCy46q1jEvtpve3Ormd2jIBARQFUMzdcTuN6jx6P3c6iDuwd7wawWWrVc8%2B4wqeqHe6%2FEYS4Y0C61%2FuGoD5DICmy2nIuJ%2BCD8Ps%2BNuGo2obbxIvHNRks%2BS5Zc0uYMpJ6K5NA1ne9NR2XFAScEen8vjF10ddXnoOm5HwEtHkTDh5op%2F6e3TFO96gJGl0GNmiz8FshR8pjpIolJxNhLODgsM4VrCJ63%2B%2BdwS9NarYXWn2Yxt68QWydO9fj3MNO3qYmSESES5wVK%2FC7H3nmp5aKT0iKf7pEnUylblGEyR2kryEFTFZ2xvznvxuEcSEr41Peug2cPziebJNm5QSCgnVf8VIb13vI%2BlkL09M3GOwkwTxwNFA0s5BLnyOYt8E7rkxQ%2FnaGk2zlSsx9XE9TZaYnbNEGHpnNn9SOxFeNI3UI%2FUS%2F9IB%2F7npHUjSPkXuAqgKtJboC4wU4wzIHYxAY6pgHMUOzKJdIZCZlirRlKM8lev5ft8zA3rrb1uT8KqxC597nGYnwFr6hDDzssPLIc4DQ6lp1nLcb6vU0p%2BT0vHy3FtNOd0K3VYGqUP0SrrxqQHBSeLoqXdIUmo2hnuf7YWNBiOCix%2F4KWQ%2BEatmuRl%2Fs7%2ByymhvxuxIAfiSXCvsMiIxhgzhYn6nstLpQvUPAXkAW2CKuSlg%2BnYdENASJ6ZH4pHQ0TeG5Z&X-Amz-Signature=208d62e24d0c93de0aef9ace72dcf218bbe54ba5efb8b9a8643bc62d27232386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2CYODC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDtqdyjwNSvLuuXU3hK692lToG0Fry8cW2K%2By2n7GdC3AiAZGsawCa3JpkchUSaqRNEa5759yIwAwCHER7fmxikLWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8FlhnElJ2m9eUsMKtwD0575LNHzBI07DPKNEkjCQZKOO2Adr1GGawoCkgG0X4duaWYb3HYtKpw0wPgomQz3Wb6NPI9MFgqpa1P0b2479SGQ5TpadfrlMys660BVedYlZN5KOejW7Nv3ulmraXmABjF2fyUlRtfQgRjAtiSIKH4Mq1VuIXvhlwKRmFffKQFlfug9n2oeCy46q1jEvtpve3Ormd2jIBARQFUMzdcTuN6jx6P3c6iDuwd7wawWWrVc8%2B4wqeqHe6%2FEYS4Y0C61%2FuGoD5DICmy2nIuJ%2BCD8Ps%2BNuGo2obbxIvHNRks%2BS5Zc0uYMpJ6K5NA1ne9NR2XFAScEen8vjF10ddXnoOm5HwEtHkTDh5op%2F6e3TFO96gJGl0GNmiz8FshR8pjpIolJxNhLODgsM4VrCJ63%2B%2BdwS9NarYXWn2Yxt68QWydO9fj3MNO3qYmSESES5wVK%2FC7H3nmp5aKT0iKf7pEnUylblGEyR2kryEFTFZ2xvznvxuEcSEr41Peug2cPziebJNm5QSCgnVf8VIb13vI%2BlkL09M3GOwkwTxwNFA0s5BLnyOYt8E7rkxQ%2FnaGk2zlSsx9XE9TZaYnbNEGHpnNn9SOxFeNI3UI%2FUS%2F9IB%2F7npHUjSPkXuAqgKtJboC4wU4wzIHYxAY6pgHMUOzKJdIZCZlirRlKM8lev5ft8zA3rrb1uT8KqxC597nGYnwFr6hDDzssPLIc4DQ6lp1nLcb6vU0p%2BT0vHy3FtNOd0K3VYGqUP0SrrxqQHBSeLoqXdIUmo2hnuf7YWNBiOCix%2F4KWQ%2BEatmuRl%2Fs7%2ByymhvxuxIAfiSXCvsMiIxhgzhYn6nstLpQvUPAXkAW2CKuSlg%2BnYdENASJ6ZH4pHQ0TeG5Z&X-Amz-Signature=fee9083212166407df6ef0a47e62850372758052e905c6dad3c6e861cec8ff06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
