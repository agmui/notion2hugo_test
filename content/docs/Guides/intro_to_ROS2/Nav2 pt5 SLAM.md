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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZLJFMI%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGO%2F%2BuQ0WK0%2BWzCKpTpM6BdDFni7cVh24K7xdACdmOEgAiARL56jY4CDdxipzJeu4Qxh8rCDWtL19n1WT6ggL1ra2yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCtxPFUXmre4Z5PCKtwDVvBnYMiU9rtXsilavmb56t3V5p7PAA4Vq7g69B0g2CVXOxgdL1r7HJgb5gHoaT1gES0x4tsKrwxhX2WMPAjxcB9fW9%2FPZSZckJyLvZ4IKCZCyAFxBlQjBFj64XVuZntZAQxEcL1PUJ9VMGV8SWQ2TTgQDuSzlJ1F6NKtgttrsIPobNqULN%2BdW4okc9dODRPwphMo0TtTen7nXx84vZ1bIdLXDgnqaXzoKLAVYWHZJZBPGwi5n7%2B8LsTIHeGuLoKqqs7rAkJud2u2CZ7U3X7bELeq%2BaG3x6mkuwI%2FxTssmCPVGiNsHmPkPif%2FtHTZ0L3H9nki5TDHvNafFUJ6HSNEdAOE9ubotr5QMo9J%2FH12%2FMWavCgq3dsC28YfsMjskyzxmbjXSeoimnpmbBWLjTaGdfBXtmXLKEIPxWoj5lcyMb80KmoLva7u%2BtQb47q81rXQABd%2B8eL2BeKplLkbb5J6inJuFESt5EyIiJYZG49vG7MEROcS%2FvNVB01CRWTDNykmCpdJ8vy%2F76HBBjF0Vx3CTKmLIK%2FShw0qqw%2B%2Fjj6LD9VeSJ9GPeuzyNn2cOoNzJeAucSlxPA94ClvuN%2BG4ASolVOnHroqQGAva4b14fgVHwN4zXsI1Hrj88vd1VMwgdbtyQY6pgEpLbiXdmq1uRYSNEb8lc6IeIeoXm6Lnbl4SgK7ulxszQbXW11I3m4nhAbBTGitqCMG8beynctdxYPc54DchSR3UEq05BIdUyBYB%2FMEq0SvDFL%2BD1mHctciWWk2JuomsSr5PYdw8PaQnaAbqnT6DDRAfGjPBD9quD4u%2BcpL5tE45tmVNOCIbt69RpZ7tRPZtS0oC%2FKcImlx8gIh1GsWkC9FT0hak1ND&X-Amz-Signature=a1dca63dbb31c10c446f9c9e42defcae0cb497b62cf86987c38df84ff458efd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZLJFMI%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGO%2F%2BuQ0WK0%2BWzCKpTpM6BdDFni7cVh24K7xdACdmOEgAiARL56jY4CDdxipzJeu4Qxh8rCDWtL19n1WT6ggL1ra2yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCtxPFUXmre4Z5PCKtwDVvBnYMiU9rtXsilavmb56t3V5p7PAA4Vq7g69B0g2CVXOxgdL1r7HJgb5gHoaT1gES0x4tsKrwxhX2WMPAjxcB9fW9%2FPZSZckJyLvZ4IKCZCyAFxBlQjBFj64XVuZntZAQxEcL1PUJ9VMGV8SWQ2TTgQDuSzlJ1F6NKtgttrsIPobNqULN%2BdW4okc9dODRPwphMo0TtTen7nXx84vZ1bIdLXDgnqaXzoKLAVYWHZJZBPGwi5n7%2B8LsTIHeGuLoKqqs7rAkJud2u2CZ7U3X7bELeq%2BaG3x6mkuwI%2FxTssmCPVGiNsHmPkPif%2FtHTZ0L3H9nki5TDHvNafFUJ6HSNEdAOE9ubotr5QMo9J%2FH12%2FMWavCgq3dsC28YfsMjskyzxmbjXSeoimnpmbBWLjTaGdfBXtmXLKEIPxWoj5lcyMb80KmoLva7u%2BtQb47q81rXQABd%2B8eL2BeKplLkbb5J6inJuFESt5EyIiJYZG49vG7MEROcS%2FvNVB01CRWTDNykmCpdJ8vy%2F76HBBjF0Vx3CTKmLIK%2FShw0qqw%2B%2Fjj6LD9VeSJ9GPeuzyNn2cOoNzJeAucSlxPA94ClvuN%2BG4ASolVOnHroqQGAva4b14fgVHwN4zXsI1Hrj88vd1VMwgdbtyQY6pgEpLbiXdmq1uRYSNEb8lc6IeIeoXm6Lnbl4SgK7ulxszQbXW11I3m4nhAbBTGitqCMG8beynctdxYPc54DchSR3UEq05BIdUyBYB%2FMEq0SvDFL%2BD1mHctciWWk2JuomsSr5PYdw8PaQnaAbqnT6DDRAfGjPBD9quD4u%2BcpL5tE45tmVNOCIbt69RpZ7tRPZtS0oC%2FKcImlx8gIh1GsWkC9FT0hak1ND&X-Amz-Signature=a6435e4db4770fd569cbce024257348ed3f0c44f374616f08729dcc74eec6a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZLJFMI%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGO%2F%2BuQ0WK0%2BWzCKpTpM6BdDFni7cVh24K7xdACdmOEgAiARL56jY4CDdxipzJeu4Qxh8rCDWtL19n1WT6ggL1ra2yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCtxPFUXmre4Z5PCKtwDVvBnYMiU9rtXsilavmb56t3V5p7PAA4Vq7g69B0g2CVXOxgdL1r7HJgb5gHoaT1gES0x4tsKrwxhX2WMPAjxcB9fW9%2FPZSZckJyLvZ4IKCZCyAFxBlQjBFj64XVuZntZAQxEcL1PUJ9VMGV8SWQ2TTgQDuSzlJ1F6NKtgttrsIPobNqULN%2BdW4okc9dODRPwphMo0TtTen7nXx84vZ1bIdLXDgnqaXzoKLAVYWHZJZBPGwi5n7%2B8LsTIHeGuLoKqqs7rAkJud2u2CZ7U3X7bELeq%2BaG3x6mkuwI%2FxTssmCPVGiNsHmPkPif%2FtHTZ0L3H9nki5TDHvNafFUJ6HSNEdAOE9ubotr5QMo9J%2FH12%2FMWavCgq3dsC28YfsMjskyzxmbjXSeoimnpmbBWLjTaGdfBXtmXLKEIPxWoj5lcyMb80KmoLva7u%2BtQb47q81rXQABd%2B8eL2BeKplLkbb5J6inJuFESt5EyIiJYZG49vG7MEROcS%2FvNVB01CRWTDNykmCpdJ8vy%2F76HBBjF0Vx3CTKmLIK%2FShw0qqw%2B%2Fjj6LD9VeSJ9GPeuzyNn2cOoNzJeAucSlxPA94ClvuN%2BG4ASolVOnHroqQGAva4b14fgVHwN4zXsI1Hrj88vd1VMwgdbtyQY6pgEpLbiXdmq1uRYSNEb8lc6IeIeoXm6Lnbl4SgK7ulxszQbXW11I3m4nhAbBTGitqCMG8beynctdxYPc54DchSR3UEq05BIdUyBYB%2FMEq0SvDFL%2BD1mHctciWWk2JuomsSr5PYdw8PaQnaAbqnT6DDRAfGjPBD9quD4u%2BcpL5tE45tmVNOCIbt69RpZ7tRPZtS0oC%2FKcImlx8gIh1GsWkC9FT0hak1ND&X-Amz-Signature=4ea1188033eb42d3be9135bac878046fabaa2a01bc9c8c77502edcf751183b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZLJFMI%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGO%2F%2BuQ0WK0%2BWzCKpTpM6BdDFni7cVh24K7xdACdmOEgAiARL56jY4CDdxipzJeu4Qxh8rCDWtL19n1WT6ggL1ra2yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCtxPFUXmre4Z5PCKtwDVvBnYMiU9rtXsilavmb56t3V5p7PAA4Vq7g69B0g2CVXOxgdL1r7HJgb5gHoaT1gES0x4tsKrwxhX2WMPAjxcB9fW9%2FPZSZckJyLvZ4IKCZCyAFxBlQjBFj64XVuZntZAQxEcL1PUJ9VMGV8SWQ2TTgQDuSzlJ1F6NKtgttrsIPobNqULN%2BdW4okc9dODRPwphMo0TtTen7nXx84vZ1bIdLXDgnqaXzoKLAVYWHZJZBPGwi5n7%2B8LsTIHeGuLoKqqs7rAkJud2u2CZ7U3X7bELeq%2BaG3x6mkuwI%2FxTssmCPVGiNsHmPkPif%2FtHTZ0L3H9nki5TDHvNafFUJ6HSNEdAOE9ubotr5QMo9J%2FH12%2FMWavCgq3dsC28YfsMjskyzxmbjXSeoimnpmbBWLjTaGdfBXtmXLKEIPxWoj5lcyMb80KmoLva7u%2BtQb47q81rXQABd%2B8eL2BeKplLkbb5J6inJuFESt5EyIiJYZG49vG7MEROcS%2FvNVB01CRWTDNykmCpdJ8vy%2F76HBBjF0Vx3CTKmLIK%2FShw0qqw%2B%2Fjj6LD9VeSJ9GPeuzyNn2cOoNzJeAucSlxPA94ClvuN%2BG4ASolVOnHroqQGAva4b14fgVHwN4zXsI1Hrj88vd1VMwgdbtyQY6pgEpLbiXdmq1uRYSNEb8lc6IeIeoXm6Lnbl4SgK7ulxszQbXW11I3m4nhAbBTGitqCMG8beynctdxYPc54DchSR3UEq05BIdUyBYB%2FMEq0SvDFL%2BD1mHctciWWk2JuomsSr5PYdw8PaQnaAbqnT6DDRAfGjPBD9quD4u%2BcpL5tE45tmVNOCIbt69RpZ7tRPZtS0oC%2FKcImlx8gIh1GsWkC9FT0hak1ND&X-Amz-Signature=8fe965a1faeed0ca20b2a168fa1e4af47eaa3fa93d635a7a3acdd08ceb0a3a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZLJFMI%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGO%2F%2BuQ0WK0%2BWzCKpTpM6BdDFni7cVh24K7xdACdmOEgAiARL56jY4CDdxipzJeu4Qxh8rCDWtL19n1WT6ggL1ra2yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCtxPFUXmre4Z5PCKtwDVvBnYMiU9rtXsilavmb56t3V5p7PAA4Vq7g69B0g2CVXOxgdL1r7HJgb5gHoaT1gES0x4tsKrwxhX2WMPAjxcB9fW9%2FPZSZckJyLvZ4IKCZCyAFxBlQjBFj64XVuZntZAQxEcL1PUJ9VMGV8SWQ2TTgQDuSzlJ1F6NKtgttrsIPobNqULN%2BdW4okc9dODRPwphMo0TtTen7nXx84vZ1bIdLXDgnqaXzoKLAVYWHZJZBPGwi5n7%2B8LsTIHeGuLoKqqs7rAkJud2u2CZ7U3X7bELeq%2BaG3x6mkuwI%2FxTssmCPVGiNsHmPkPif%2FtHTZ0L3H9nki5TDHvNafFUJ6HSNEdAOE9ubotr5QMo9J%2FH12%2FMWavCgq3dsC28YfsMjskyzxmbjXSeoimnpmbBWLjTaGdfBXtmXLKEIPxWoj5lcyMb80KmoLva7u%2BtQb47q81rXQABd%2B8eL2BeKplLkbb5J6inJuFESt5EyIiJYZG49vG7MEROcS%2FvNVB01CRWTDNykmCpdJ8vy%2F76HBBjF0Vx3CTKmLIK%2FShw0qqw%2B%2Fjj6LD9VeSJ9GPeuzyNn2cOoNzJeAucSlxPA94ClvuN%2BG4ASolVOnHroqQGAva4b14fgVHwN4zXsI1Hrj88vd1VMwgdbtyQY6pgEpLbiXdmq1uRYSNEb8lc6IeIeoXm6Lnbl4SgK7ulxszQbXW11I3m4nhAbBTGitqCMG8beynctdxYPc54DchSR3UEq05BIdUyBYB%2FMEq0SvDFL%2BD1mHctciWWk2JuomsSr5PYdw8PaQnaAbqnT6DDRAfGjPBD9quD4u%2BcpL5tE45tmVNOCIbt69RpZ7tRPZtS0oC%2FKcImlx8gIh1GsWkC9FT0hak1ND&X-Amz-Signature=a3649b1cf426ecadc0752d6d282138a9c376b6c7cfa267c512fded10e4a2f017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZLJFMI%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGO%2F%2BuQ0WK0%2BWzCKpTpM6BdDFni7cVh24K7xdACdmOEgAiARL56jY4CDdxipzJeu4Qxh8rCDWtL19n1WT6ggL1ra2yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCtxPFUXmre4Z5PCKtwDVvBnYMiU9rtXsilavmb56t3V5p7PAA4Vq7g69B0g2CVXOxgdL1r7HJgb5gHoaT1gES0x4tsKrwxhX2WMPAjxcB9fW9%2FPZSZckJyLvZ4IKCZCyAFxBlQjBFj64XVuZntZAQxEcL1PUJ9VMGV8SWQ2TTgQDuSzlJ1F6NKtgttrsIPobNqULN%2BdW4okc9dODRPwphMo0TtTen7nXx84vZ1bIdLXDgnqaXzoKLAVYWHZJZBPGwi5n7%2B8LsTIHeGuLoKqqs7rAkJud2u2CZ7U3X7bELeq%2BaG3x6mkuwI%2FxTssmCPVGiNsHmPkPif%2FtHTZ0L3H9nki5TDHvNafFUJ6HSNEdAOE9ubotr5QMo9J%2FH12%2FMWavCgq3dsC28YfsMjskyzxmbjXSeoimnpmbBWLjTaGdfBXtmXLKEIPxWoj5lcyMb80KmoLva7u%2BtQb47q81rXQABd%2B8eL2BeKplLkbb5J6inJuFESt5EyIiJYZG49vG7MEROcS%2FvNVB01CRWTDNykmCpdJ8vy%2F76HBBjF0Vx3CTKmLIK%2FShw0qqw%2B%2Fjj6LD9VeSJ9GPeuzyNn2cOoNzJeAucSlxPA94ClvuN%2BG4ASolVOnHroqQGAva4b14fgVHwN4zXsI1Hrj88vd1VMwgdbtyQY6pgEpLbiXdmq1uRYSNEb8lc6IeIeoXm6Lnbl4SgK7ulxszQbXW11I3m4nhAbBTGitqCMG8beynctdxYPc54DchSR3UEq05BIdUyBYB%2FMEq0SvDFL%2BD1mHctciWWk2JuomsSr5PYdw8PaQnaAbqnT6DDRAfGjPBD9quD4u%2BcpL5tE45tmVNOCIbt69RpZ7tRPZtS0oC%2FKcImlx8gIh1GsWkC9FT0hak1ND&X-Amz-Signature=e3cfd9180dd264fc15b35f3b6cb6b68835dd3437218c5f8a3a8776f9b2b28478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZLJFMI%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGO%2F%2BuQ0WK0%2BWzCKpTpM6BdDFni7cVh24K7xdACdmOEgAiARL56jY4CDdxipzJeu4Qxh8rCDWtL19n1WT6ggL1ra2yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCtxPFUXmre4Z5PCKtwDVvBnYMiU9rtXsilavmb56t3V5p7PAA4Vq7g69B0g2CVXOxgdL1r7HJgb5gHoaT1gES0x4tsKrwxhX2WMPAjxcB9fW9%2FPZSZckJyLvZ4IKCZCyAFxBlQjBFj64XVuZntZAQxEcL1PUJ9VMGV8SWQ2TTgQDuSzlJ1F6NKtgttrsIPobNqULN%2BdW4okc9dODRPwphMo0TtTen7nXx84vZ1bIdLXDgnqaXzoKLAVYWHZJZBPGwi5n7%2B8LsTIHeGuLoKqqs7rAkJud2u2CZ7U3X7bELeq%2BaG3x6mkuwI%2FxTssmCPVGiNsHmPkPif%2FtHTZ0L3H9nki5TDHvNafFUJ6HSNEdAOE9ubotr5QMo9J%2FH12%2FMWavCgq3dsC28YfsMjskyzxmbjXSeoimnpmbBWLjTaGdfBXtmXLKEIPxWoj5lcyMb80KmoLva7u%2BtQb47q81rXQABd%2B8eL2BeKplLkbb5J6inJuFESt5EyIiJYZG49vG7MEROcS%2FvNVB01CRWTDNykmCpdJ8vy%2F76HBBjF0Vx3CTKmLIK%2FShw0qqw%2B%2Fjj6LD9VeSJ9GPeuzyNn2cOoNzJeAucSlxPA94ClvuN%2BG4ASolVOnHroqQGAva4b14fgVHwN4zXsI1Hrj88vd1VMwgdbtyQY6pgEpLbiXdmq1uRYSNEb8lc6IeIeoXm6Lnbl4SgK7ulxszQbXW11I3m4nhAbBTGitqCMG8beynctdxYPc54DchSR3UEq05BIdUyBYB%2FMEq0SvDFL%2BD1mHctciWWk2JuomsSr5PYdw8PaQnaAbqnT6DDRAfGjPBD9quD4u%2BcpL5tE45tmVNOCIbt69RpZ7tRPZtS0oC%2FKcImlx8gIh1GsWkC9FT0hak1ND&X-Amz-Signature=28ff33a26b8d381f9e39e966b6d29c36a3b86311db7e438a31cc1521e3afda56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZLJFMI%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGO%2F%2BuQ0WK0%2BWzCKpTpM6BdDFni7cVh24K7xdACdmOEgAiARL56jY4CDdxipzJeu4Qxh8rCDWtL19n1WT6ggL1ra2yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCtxPFUXmre4Z5PCKtwDVvBnYMiU9rtXsilavmb56t3V5p7PAA4Vq7g69B0g2CVXOxgdL1r7HJgb5gHoaT1gES0x4tsKrwxhX2WMPAjxcB9fW9%2FPZSZckJyLvZ4IKCZCyAFxBlQjBFj64XVuZntZAQxEcL1PUJ9VMGV8SWQ2TTgQDuSzlJ1F6NKtgttrsIPobNqULN%2BdW4okc9dODRPwphMo0TtTen7nXx84vZ1bIdLXDgnqaXzoKLAVYWHZJZBPGwi5n7%2B8LsTIHeGuLoKqqs7rAkJud2u2CZ7U3X7bELeq%2BaG3x6mkuwI%2FxTssmCPVGiNsHmPkPif%2FtHTZ0L3H9nki5TDHvNafFUJ6HSNEdAOE9ubotr5QMo9J%2FH12%2FMWavCgq3dsC28YfsMjskyzxmbjXSeoimnpmbBWLjTaGdfBXtmXLKEIPxWoj5lcyMb80KmoLva7u%2BtQb47q81rXQABd%2B8eL2BeKplLkbb5J6inJuFESt5EyIiJYZG49vG7MEROcS%2FvNVB01CRWTDNykmCpdJ8vy%2F76HBBjF0Vx3CTKmLIK%2FShw0qqw%2B%2Fjj6LD9VeSJ9GPeuzyNn2cOoNzJeAucSlxPA94ClvuN%2BG4ASolVOnHroqQGAva4b14fgVHwN4zXsI1Hrj88vd1VMwgdbtyQY6pgEpLbiXdmq1uRYSNEb8lc6IeIeoXm6Lnbl4SgK7ulxszQbXW11I3m4nhAbBTGitqCMG8beynctdxYPc54DchSR3UEq05BIdUyBYB%2FMEq0SvDFL%2BD1mHctciWWk2JuomsSr5PYdw8PaQnaAbqnT6DDRAfGjPBD9quD4u%2BcpL5tE45tmVNOCIbt69RpZ7tRPZtS0oC%2FKcImlx8gIh1GsWkC9FT0hak1ND&X-Amz-Signature=8b0e44c135712bf5a175ed92f65721f113947c9c24e20d0efdf1534b9732b0a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZLJFMI%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGO%2F%2BuQ0WK0%2BWzCKpTpM6BdDFni7cVh24K7xdACdmOEgAiARL56jY4CDdxipzJeu4Qxh8rCDWtL19n1WT6ggL1ra2yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCtxPFUXmre4Z5PCKtwDVvBnYMiU9rtXsilavmb56t3V5p7PAA4Vq7g69B0g2CVXOxgdL1r7HJgb5gHoaT1gES0x4tsKrwxhX2WMPAjxcB9fW9%2FPZSZckJyLvZ4IKCZCyAFxBlQjBFj64XVuZntZAQxEcL1PUJ9VMGV8SWQ2TTgQDuSzlJ1F6NKtgttrsIPobNqULN%2BdW4okc9dODRPwphMo0TtTen7nXx84vZ1bIdLXDgnqaXzoKLAVYWHZJZBPGwi5n7%2B8LsTIHeGuLoKqqs7rAkJud2u2CZ7U3X7bELeq%2BaG3x6mkuwI%2FxTssmCPVGiNsHmPkPif%2FtHTZ0L3H9nki5TDHvNafFUJ6HSNEdAOE9ubotr5QMo9J%2FH12%2FMWavCgq3dsC28YfsMjskyzxmbjXSeoimnpmbBWLjTaGdfBXtmXLKEIPxWoj5lcyMb80KmoLva7u%2BtQb47q81rXQABd%2B8eL2BeKplLkbb5J6inJuFESt5EyIiJYZG49vG7MEROcS%2FvNVB01CRWTDNykmCpdJ8vy%2F76HBBjF0Vx3CTKmLIK%2FShw0qqw%2B%2Fjj6LD9VeSJ9GPeuzyNn2cOoNzJeAucSlxPA94ClvuN%2BG4ASolVOnHroqQGAva4b14fgVHwN4zXsI1Hrj88vd1VMwgdbtyQY6pgEpLbiXdmq1uRYSNEb8lc6IeIeoXm6Lnbl4SgK7ulxszQbXW11I3m4nhAbBTGitqCMG8beynctdxYPc54DchSR3UEq05BIdUyBYB%2FMEq0SvDFL%2BD1mHctciWWk2JuomsSr5PYdw8PaQnaAbqnT6DDRAfGjPBD9quD4u%2BcpL5tE45tmVNOCIbt69RpZ7tRPZtS0oC%2FKcImlx8gIh1GsWkC9FT0hak1ND&X-Amz-Signature=3729eebb4fa0043e7ea5618ca628bfaab1ce32b0495f5b83411b0b9d141662dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZLJFMI%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGO%2F%2BuQ0WK0%2BWzCKpTpM6BdDFni7cVh24K7xdACdmOEgAiARL56jY4CDdxipzJeu4Qxh8rCDWtL19n1WT6ggL1ra2yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCtxPFUXmre4Z5PCKtwDVvBnYMiU9rtXsilavmb56t3V5p7PAA4Vq7g69B0g2CVXOxgdL1r7HJgb5gHoaT1gES0x4tsKrwxhX2WMPAjxcB9fW9%2FPZSZckJyLvZ4IKCZCyAFxBlQjBFj64XVuZntZAQxEcL1PUJ9VMGV8SWQ2TTgQDuSzlJ1F6NKtgttrsIPobNqULN%2BdW4okc9dODRPwphMo0TtTen7nXx84vZ1bIdLXDgnqaXzoKLAVYWHZJZBPGwi5n7%2B8LsTIHeGuLoKqqs7rAkJud2u2CZ7U3X7bELeq%2BaG3x6mkuwI%2FxTssmCPVGiNsHmPkPif%2FtHTZ0L3H9nki5TDHvNafFUJ6HSNEdAOE9ubotr5QMo9J%2FH12%2FMWavCgq3dsC28YfsMjskyzxmbjXSeoimnpmbBWLjTaGdfBXtmXLKEIPxWoj5lcyMb80KmoLva7u%2BtQb47q81rXQABd%2B8eL2BeKplLkbb5J6inJuFESt5EyIiJYZG49vG7MEROcS%2FvNVB01CRWTDNykmCpdJ8vy%2F76HBBjF0Vx3CTKmLIK%2FShw0qqw%2B%2Fjj6LD9VeSJ9GPeuzyNn2cOoNzJeAucSlxPA94ClvuN%2BG4ASolVOnHroqQGAva4b14fgVHwN4zXsI1Hrj88vd1VMwgdbtyQY6pgEpLbiXdmq1uRYSNEb8lc6IeIeoXm6Lnbl4SgK7ulxszQbXW11I3m4nhAbBTGitqCMG8beynctdxYPc54DchSR3UEq05BIdUyBYB%2FMEq0SvDFL%2BD1mHctciWWk2JuomsSr5PYdw8PaQnaAbqnT6DDRAfGjPBD9quD4u%2BcpL5tE45tmVNOCIbt69RpZ7tRPZtS0oC%2FKcImlx8gIh1GsWkC9FT0hak1ND&X-Amz-Signature=509dc785f47ff23669f258a3f26e024f632dfd54f44f1b3180f1067dd865b95e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZLJFMI%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGO%2F%2BuQ0WK0%2BWzCKpTpM6BdDFni7cVh24K7xdACdmOEgAiARL56jY4CDdxipzJeu4Qxh8rCDWtL19n1WT6ggL1ra2yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCtxPFUXmre4Z5PCKtwDVvBnYMiU9rtXsilavmb56t3V5p7PAA4Vq7g69B0g2CVXOxgdL1r7HJgb5gHoaT1gES0x4tsKrwxhX2WMPAjxcB9fW9%2FPZSZckJyLvZ4IKCZCyAFxBlQjBFj64XVuZntZAQxEcL1PUJ9VMGV8SWQ2TTgQDuSzlJ1F6NKtgttrsIPobNqULN%2BdW4okc9dODRPwphMo0TtTen7nXx84vZ1bIdLXDgnqaXzoKLAVYWHZJZBPGwi5n7%2B8LsTIHeGuLoKqqs7rAkJud2u2CZ7U3X7bELeq%2BaG3x6mkuwI%2FxTssmCPVGiNsHmPkPif%2FtHTZ0L3H9nki5TDHvNafFUJ6HSNEdAOE9ubotr5QMo9J%2FH12%2FMWavCgq3dsC28YfsMjskyzxmbjXSeoimnpmbBWLjTaGdfBXtmXLKEIPxWoj5lcyMb80KmoLva7u%2BtQb47q81rXQABd%2B8eL2BeKplLkbb5J6inJuFESt5EyIiJYZG49vG7MEROcS%2FvNVB01CRWTDNykmCpdJ8vy%2F76HBBjF0Vx3CTKmLIK%2FShw0qqw%2B%2Fjj6LD9VeSJ9GPeuzyNn2cOoNzJeAucSlxPA94ClvuN%2BG4ASolVOnHroqQGAva4b14fgVHwN4zXsI1Hrj88vd1VMwgdbtyQY6pgEpLbiXdmq1uRYSNEb8lc6IeIeoXm6Lnbl4SgK7ulxszQbXW11I3m4nhAbBTGitqCMG8beynctdxYPc54DchSR3UEq05BIdUyBYB%2FMEq0SvDFL%2BD1mHctciWWk2JuomsSr5PYdw8PaQnaAbqnT6DDRAfGjPBD9quD4u%2BcpL5tE45tmVNOCIbt69RpZ7tRPZtS0oC%2FKcImlx8gIh1GsWkC9FT0hak1ND&X-Amz-Signature=51b831418311eb8029c70af7b43425b49a8bbc5c918bca9d769980c1ede668e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZLJFMI%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGO%2F%2BuQ0WK0%2BWzCKpTpM6BdDFni7cVh24K7xdACdmOEgAiARL56jY4CDdxipzJeu4Qxh8rCDWtL19n1WT6ggL1ra2yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCtxPFUXmre4Z5PCKtwDVvBnYMiU9rtXsilavmb56t3V5p7PAA4Vq7g69B0g2CVXOxgdL1r7HJgb5gHoaT1gES0x4tsKrwxhX2WMPAjxcB9fW9%2FPZSZckJyLvZ4IKCZCyAFxBlQjBFj64XVuZntZAQxEcL1PUJ9VMGV8SWQ2TTgQDuSzlJ1F6NKtgttrsIPobNqULN%2BdW4okc9dODRPwphMo0TtTen7nXx84vZ1bIdLXDgnqaXzoKLAVYWHZJZBPGwi5n7%2B8LsTIHeGuLoKqqs7rAkJud2u2CZ7U3X7bELeq%2BaG3x6mkuwI%2FxTssmCPVGiNsHmPkPif%2FtHTZ0L3H9nki5TDHvNafFUJ6HSNEdAOE9ubotr5QMo9J%2FH12%2FMWavCgq3dsC28YfsMjskyzxmbjXSeoimnpmbBWLjTaGdfBXtmXLKEIPxWoj5lcyMb80KmoLva7u%2BtQb47q81rXQABd%2B8eL2BeKplLkbb5J6inJuFESt5EyIiJYZG49vG7MEROcS%2FvNVB01CRWTDNykmCpdJ8vy%2F76HBBjF0Vx3CTKmLIK%2FShw0qqw%2B%2Fjj6LD9VeSJ9GPeuzyNn2cOoNzJeAucSlxPA94ClvuN%2BG4ASolVOnHroqQGAva4b14fgVHwN4zXsI1Hrj88vd1VMwgdbtyQY6pgEpLbiXdmq1uRYSNEb8lc6IeIeoXm6Lnbl4SgK7ulxszQbXW11I3m4nhAbBTGitqCMG8beynctdxYPc54DchSR3UEq05BIdUyBYB%2FMEq0SvDFL%2BD1mHctciWWk2JuomsSr5PYdw8PaQnaAbqnT6DDRAfGjPBD9quD4u%2BcpL5tE45tmVNOCIbt69RpZ7tRPZtS0oC%2FKcImlx8gIh1GsWkC9FT0hak1ND&X-Amz-Signature=8c671f0e1c16108820254d27f89bee007c9a6a4431c3e9a2b36b1e42724429f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZLJFMI%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGO%2F%2BuQ0WK0%2BWzCKpTpM6BdDFni7cVh24K7xdACdmOEgAiARL56jY4CDdxipzJeu4Qxh8rCDWtL19n1WT6ggL1ra2yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCtxPFUXmre4Z5PCKtwDVvBnYMiU9rtXsilavmb56t3V5p7PAA4Vq7g69B0g2CVXOxgdL1r7HJgb5gHoaT1gES0x4tsKrwxhX2WMPAjxcB9fW9%2FPZSZckJyLvZ4IKCZCyAFxBlQjBFj64XVuZntZAQxEcL1PUJ9VMGV8SWQ2TTgQDuSzlJ1F6NKtgttrsIPobNqULN%2BdW4okc9dODRPwphMo0TtTen7nXx84vZ1bIdLXDgnqaXzoKLAVYWHZJZBPGwi5n7%2B8LsTIHeGuLoKqqs7rAkJud2u2CZ7U3X7bELeq%2BaG3x6mkuwI%2FxTssmCPVGiNsHmPkPif%2FtHTZ0L3H9nki5TDHvNafFUJ6HSNEdAOE9ubotr5QMo9J%2FH12%2FMWavCgq3dsC28YfsMjskyzxmbjXSeoimnpmbBWLjTaGdfBXtmXLKEIPxWoj5lcyMb80KmoLva7u%2BtQb47q81rXQABd%2B8eL2BeKplLkbb5J6inJuFESt5EyIiJYZG49vG7MEROcS%2FvNVB01CRWTDNykmCpdJ8vy%2F76HBBjF0Vx3CTKmLIK%2FShw0qqw%2B%2Fjj6LD9VeSJ9GPeuzyNn2cOoNzJeAucSlxPA94ClvuN%2BG4ASolVOnHroqQGAva4b14fgVHwN4zXsI1Hrj88vd1VMwgdbtyQY6pgEpLbiXdmq1uRYSNEb8lc6IeIeoXm6Lnbl4SgK7ulxszQbXW11I3m4nhAbBTGitqCMG8beynctdxYPc54DchSR3UEq05BIdUyBYB%2FMEq0SvDFL%2BD1mHctciWWk2JuomsSr5PYdw8PaQnaAbqnT6DDRAfGjPBD9quD4u%2BcpL5tE45tmVNOCIbt69RpZ7tRPZtS0oC%2FKcImlx8gIh1GsWkC9FT0hak1ND&X-Amz-Signature=dd6bf5d6a923866cc13dd90c310bfcf7293621cbeefbec3ead28a92771ba9273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZLJFMI%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGO%2F%2BuQ0WK0%2BWzCKpTpM6BdDFni7cVh24K7xdACdmOEgAiARL56jY4CDdxipzJeu4Qxh8rCDWtL19n1WT6ggL1ra2yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCtxPFUXmre4Z5PCKtwDVvBnYMiU9rtXsilavmb56t3V5p7PAA4Vq7g69B0g2CVXOxgdL1r7HJgb5gHoaT1gES0x4tsKrwxhX2WMPAjxcB9fW9%2FPZSZckJyLvZ4IKCZCyAFxBlQjBFj64XVuZntZAQxEcL1PUJ9VMGV8SWQ2TTgQDuSzlJ1F6NKtgttrsIPobNqULN%2BdW4okc9dODRPwphMo0TtTen7nXx84vZ1bIdLXDgnqaXzoKLAVYWHZJZBPGwi5n7%2B8LsTIHeGuLoKqqs7rAkJud2u2CZ7U3X7bELeq%2BaG3x6mkuwI%2FxTssmCPVGiNsHmPkPif%2FtHTZ0L3H9nki5TDHvNafFUJ6HSNEdAOE9ubotr5QMo9J%2FH12%2FMWavCgq3dsC28YfsMjskyzxmbjXSeoimnpmbBWLjTaGdfBXtmXLKEIPxWoj5lcyMb80KmoLva7u%2BtQb47q81rXQABd%2B8eL2BeKplLkbb5J6inJuFESt5EyIiJYZG49vG7MEROcS%2FvNVB01CRWTDNykmCpdJ8vy%2F76HBBjF0Vx3CTKmLIK%2FShw0qqw%2B%2Fjj6LD9VeSJ9GPeuzyNn2cOoNzJeAucSlxPA94ClvuN%2BG4ASolVOnHroqQGAva4b14fgVHwN4zXsI1Hrj88vd1VMwgdbtyQY6pgEpLbiXdmq1uRYSNEb8lc6IeIeoXm6Lnbl4SgK7ulxszQbXW11I3m4nhAbBTGitqCMG8beynctdxYPc54DchSR3UEq05BIdUyBYB%2FMEq0SvDFL%2BD1mHctciWWk2JuomsSr5PYdw8PaQnaAbqnT6DDRAfGjPBD9quD4u%2BcpL5tE45tmVNOCIbt69RpZ7tRPZtS0oC%2FKcImlx8gIh1GsWkC9FT0hak1ND&X-Amz-Signature=a963e76689ccda2c0cecebab3d4b3ee04d56313f2f2114e21faf5c9532add1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
