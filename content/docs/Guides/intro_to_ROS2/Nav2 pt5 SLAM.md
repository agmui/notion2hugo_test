---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T01:30:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T01:30:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP56XVZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAgrIzeeKn%2FpnMR6znitRAH94XjqMOzEHom3u7SCnKuLAiASxc3zT5bz%2Fy9GgiWRWL0C9X9UrdFcHtbgoJHygUKVYiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIFGAcfFR3YVP9ylKtwD4j41M25NthVtFAAcOyJUMkEDix4OJj3lfaKugvZPdGBzcmKZ7JE4dyszdMN1Tr0%2Bg2DAC64OeHDsGhr%2Bh7fxEV2ZeEh0gWWTGlE%2BjNXKQQcJFA1PH2ynpTgDMZye9eif5LXUK0vb1twdhMEL8BOkE3YgOmkhf9NV7zG4ccl5%2BNxn84jEJF99AdZSC4BCDCnRsGVwtNnzovGswv6UF942IyS9U9Gyw2YoozPiIxtJ0iqpNWN1b8xU85SBR%2B6zuhIiqXAzcH51%2B9wzohU%2BClednQgQoVasOlg%2FOhqESr%2FunbVws3lK1TNqUAGKIdGCJmyzTfouz6rPvIiXsT3GdX3CEkRdUr6XJpu5mBPZMajDpSP055%2FwuFklt51gfpiiq3Gnexa7y1k2WqbEh7IrgvULI9WniYTvluRMWMnaHoA7AL7LuzJmq0J8gsUJtNFDHAJMhCLCfFIeVILqBFdPG7VEfKNOcQm8cD0pZ6b1oXGnjzY%2FEeWjPNgn53L1nxVadvMSUTxAS1S%2Fs%2FfS0nzEAqEs%2Bqe0bI%2BUic6%2BcAfP2TuTv1yeyIqujhPafmBSLDbfU4yXi8GHuuUzmMjzB2qAnXeaXmH1snbNP1PKphULWrpVkAsVBX2FAqMhw0p8SdMwtc2gxAY6pgEtFrr7mwpsBXaBesCPsmnlM70nlTyT11Z21Ou4O08fhOKCfIMSMXp9N%2BRs%2Fcq5GJB22m%2BzthxOUBEPb6RVaQUUIVNx78Tjvr1feCzQIh78Et0YECRKnideGvJRuSAcLiKKEzrV6fpP8Vj%2FzUITbx0xg22oBHQbjkiIt8E%2BGH3PkavPaR%2F8840iUEYUxiYxKmZO6BkDeP9S%2B7qIHxio7vQYvL%2FLdBYO&X-Amz-Signature=8fea3862447938812ccccfcca4171cf4c71599da747ecd6b8d351fe1f81fc6c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: add rviz guide of viewing scanned map

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP56XVZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAgrIzeeKn%2FpnMR6znitRAH94XjqMOzEHom3u7SCnKuLAiASxc3zT5bz%2Fy9GgiWRWL0C9X9UrdFcHtbgoJHygUKVYiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIFGAcfFR3YVP9ylKtwD4j41M25NthVtFAAcOyJUMkEDix4OJj3lfaKugvZPdGBzcmKZ7JE4dyszdMN1Tr0%2Bg2DAC64OeHDsGhr%2Bh7fxEV2ZeEh0gWWTGlE%2BjNXKQQcJFA1PH2ynpTgDMZye9eif5LXUK0vb1twdhMEL8BOkE3YgOmkhf9NV7zG4ccl5%2BNxn84jEJF99AdZSC4BCDCnRsGVwtNnzovGswv6UF942IyS9U9Gyw2YoozPiIxtJ0iqpNWN1b8xU85SBR%2B6zuhIiqXAzcH51%2B9wzohU%2BClednQgQoVasOlg%2FOhqESr%2FunbVws3lK1TNqUAGKIdGCJmyzTfouz6rPvIiXsT3GdX3CEkRdUr6XJpu5mBPZMajDpSP055%2FwuFklt51gfpiiq3Gnexa7y1k2WqbEh7IrgvULI9WniYTvluRMWMnaHoA7AL7LuzJmq0J8gsUJtNFDHAJMhCLCfFIeVILqBFdPG7VEfKNOcQm8cD0pZ6b1oXGnjzY%2FEeWjPNgn53L1nxVadvMSUTxAS1S%2Fs%2FfS0nzEAqEs%2Bqe0bI%2BUic6%2BcAfP2TuTv1yeyIqujhPafmBSLDbfU4yXi8GHuuUzmMjzB2qAnXeaXmH1snbNP1PKphULWrpVkAsVBX2FAqMhw0p8SdMwtc2gxAY6pgEtFrr7mwpsBXaBesCPsmnlM70nlTyT11Z21Ou4O08fhOKCfIMSMXp9N%2BRs%2Fcq5GJB22m%2BzthxOUBEPb6RVaQUUIVNx78Tjvr1feCzQIh78Et0YECRKnideGvJRuSAcLiKKEzrV6fpP8Vj%2FzUITbx0xg22oBHQbjkiIt8E%2BGH3PkavPaR%2F8840iUEYUxiYxKmZO6BkDeP9S%2B7qIHxio7vQYvL%2FLdBYO&X-Amz-Signature=b960283c437888e2b61342709eed07503d438711df9e64ff4cd6211be0beb9cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP56XVZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAgrIzeeKn%2FpnMR6znitRAH94XjqMOzEHom3u7SCnKuLAiASxc3zT5bz%2Fy9GgiWRWL0C9X9UrdFcHtbgoJHygUKVYiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIFGAcfFR3YVP9ylKtwD4j41M25NthVtFAAcOyJUMkEDix4OJj3lfaKugvZPdGBzcmKZ7JE4dyszdMN1Tr0%2Bg2DAC64OeHDsGhr%2Bh7fxEV2ZeEh0gWWTGlE%2BjNXKQQcJFA1PH2ynpTgDMZye9eif5LXUK0vb1twdhMEL8BOkE3YgOmkhf9NV7zG4ccl5%2BNxn84jEJF99AdZSC4BCDCnRsGVwtNnzovGswv6UF942IyS9U9Gyw2YoozPiIxtJ0iqpNWN1b8xU85SBR%2B6zuhIiqXAzcH51%2B9wzohU%2BClednQgQoVasOlg%2FOhqESr%2FunbVws3lK1TNqUAGKIdGCJmyzTfouz6rPvIiXsT3GdX3CEkRdUr6XJpu5mBPZMajDpSP055%2FwuFklt51gfpiiq3Gnexa7y1k2WqbEh7IrgvULI9WniYTvluRMWMnaHoA7AL7LuzJmq0J8gsUJtNFDHAJMhCLCfFIeVILqBFdPG7VEfKNOcQm8cD0pZ6b1oXGnjzY%2FEeWjPNgn53L1nxVadvMSUTxAS1S%2Fs%2FfS0nzEAqEs%2Bqe0bI%2BUic6%2BcAfP2TuTv1yeyIqujhPafmBSLDbfU4yXi8GHuuUzmMjzB2qAnXeaXmH1snbNP1PKphULWrpVkAsVBX2FAqMhw0p8SdMwtc2gxAY6pgEtFrr7mwpsBXaBesCPsmnlM70nlTyT11Z21Ou4O08fhOKCfIMSMXp9N%2BRs%2Fcq5GJB22m%2BzthxOUBEPb6RVaQUUIVNx78Tjvr1feCzQIh78Et0YECRKnideGvJRuSAcLiKKEzrV6fpP8Vj%2FzUITbx0xg22oBHQbjkiIt8E%2BGH3PkavPaR%2F8840iUEYUxiYxKmZO6BkDeP9S%2B7qIHxio7vQYvL%2FLdBYO&X-Amz-Signature=f6dcf54e5fc18c8de71360858fb39b94eda5f58889747c47dfee66023b090b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

### SLAM Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP56XVZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAgrIzeeKn%2FpnMR6znitRAH94XjqMOzEHom3u7SCnKuLAiASxc3zT5bz%2Fy9GgiWRWL0C9X9UrdFcHtbgoJHygUKVYiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIFGAcfFR3YVP9ylKtwD4j41M25NthVtFAAcOyJUMkEDix4OJj3lfaKugvZPdGBzcmKZ7JE4dyszdMN1Tr0%2Bg2DAC64OeHDsGhr%2Bh7fxEV2ZeEh0gWWTGlE%2BjNXKQQcJFA1PH2ynpTgDMZye9eif5LXUK0vb1twdhMEL8BOkE3YgOmkhf9NV7zG4ccl5%2BNxn84jEJF99AdZSC4BCDCnRsGVwtNnzovGswv6UF942IyS9U9Gyw2YoozPiIxtJ0iqpNWN1b8xU85SBR%2B6zuhIiqXAzcH51%2B9wzohU%2BClednQgQoVasOlg%2FOhqESr%2FunbVws3lK1TNqUAGKIdGCJmyzTfouz6rPvIiXsT3GdX3CEkRdUr6XJpu5mBPZMajDpSP055%2FwuFklt51gfpiiq3Gnexa7y1k2WqbEh7IrgvULI9WniYTvluRMWMnaHoA7AL7LuzJmq0J8gsUJtNFDHAJMhCLCfFIeVILqBFdPG7VEfKNOcQm8cD0pZ6b1oXGnjzY%2FEeWjPNgn53L1nxVadvMSUTxAS1S%2Fs%2FfS0nzEAqEs%2Bqe0bI%2BUic6%2BcAfP2TuTv1yeyIqujhPafmBSLDbfU4yXi8GHuuUzmMjzB2qAnXeaXmH1snbNP1PKphULWrpVkAsVBX2FAqMhw0p8SdMwtc2gxAY6pgEtFrr7mwpsBXaBesCPsmnlM70nlTyT11Z21Ou4O08fhOKCfIMSMXp9N%2BRs%2Fcq5GJB22m%2BzthxOUBEPb6RVaQUUIVNx78Tjvr1feCzQIh78Et0YECRKnideGvJRuSAcLiKKEzrV6fpP8Vj%2FzUITbx0xg22oBHQbjkiIt8E%2BGH3PkavPaR%2F8840iUEYUxiYxKmZO6BkDeP9S%2B7qIHxio7vQYvL%2FLdBYO&X-Amz-Signature=9affd775f0b54098b7fd212c62d5cfe22d329708e687e007787921c8220b19ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP56XVZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAgrIzeeKn%2FpnMR6znitRAH94XjqMOzEHom3u7SCnKuLAiASxc3zT5bz%2Fy9GgiWRWL0C9X9UrdFcHtbgoJHygUKVYiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIFGAcfFR3YVP9ylKtwD4j41M25NthVtFAAcOyJUMkEDix4OJj3lfaKugvZPdGBzcmKZ7JE4dyszdMN1Tr0%2Bg2DAC64OeHDsGhr%2Bh7fxEV2ZeEh0gWWTGlE%2BjNXKQQcJFA1PH2ynpTgDMZye9eif5LXUK0vb1twdhMEL8BOkE3YgOmkhf9NV7zG4ccl5%2BNxn84jEJF99AdZSC4BCDCnRsGVwtNnzovGswv6UF942IyS9U9Gyw2YoozPiIxtJ0iqpNWN1b8xU85SBR%2B6zuhIiqXAzcH51%2B9wzohU%2BClednQgQoVasOlg%2FOhqESr%2FunbVws3lK1TNqUAGKIdGCJmyzTfouz6rPvIiXsT3GdX3CEkRdUr6XJpu5mBPZMajDpSP055%2FwuFklt51gfpiiq3Gnexa7y1k2WqbEh7IrgvULI9WniYTvluRMWMnaHoA7AL7LuzJmq0J8gsUJtNFDHAJMhCLCfFIeVILqBFdPG7VEfKNOcQm8cD0pZ6b1oXGnjzY%2FEeWjPNgn53L1nxVadvMSUTxAS1S%2Fs%2FfS0nzEAqEs%2Bqe0bI%2BUic6%2BcAfP2TuTv1yeyIqujhPafmBSLDbfU4yXi8GHuuUzmMjzB2qAnXeaXmH1snbNP1PKphULWrpVkAsVBX2FAqMhw0p8SdMwtc2gxAY6pgEtFrr7mwpsBXaBesCPsmnlM70nlTyT11Z21Ou4O08fhOKCfIMSMXp9N%2BRs%2Fcq5GJB22m%2BzthxOUBEPb6RVaQUUIVNx78Tjvr1feCzQIh78Et0YECRKnideGvJRuSAcLiKKEzrV6fpP8Vj%2FzUITbx0xg22oBHQbjkiIt8E%2BGH3PkavPaR%2F8840iUEYUxiYxKmZO6BkDeP9S%2B7qIHxio7vQYvL%2FLdBYO&X-Amz-Signature=c6c78e4f726774c8f6352122db3e5ab9a933c5fd04c08bdfa79a59e7bf538252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP56XVZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAgrIzeeKn%2FpnMR6znitRAH94XjqMOzEHom3u7SCnKuLAiASxc3zT5bz%2Fy9GgiWRWL0C9X9UrdFcHtbgoJHygUKVYiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIFGAcfFR3YVP9ylKtwD4j41M25NthVtFAAcOyJUMkEDix4OJj3lfaKugvZPdGBzcmKZ7JE4dyszdMN1Tr0%2Bg2DAC64OeHDsGhr%2Bh7fxEV2ZeEh0gWWTGlE%2BjNXKQQcJFA1PH2ynpTgDMZye9eif5LXUK0vb1twdhMEL8BOkE3YgOmkhf9NV7zG4ccl5%2BNxn84jEJF99AdZSC4BCDCnRsGVwtNnzovGswv6UF942IyS9U9Gyw2YoozPiIxtJ0iqpNWN1b8xU85SBR%2B6zuhIiqXAzcH51%2B9wzohU%2BClednQgQoVasOlg%2FOhqESr%2FunbVws3lK1TNqUAGKIdGCJmyzTfouz6rPvIiXsT3GdX3CEkRdUr6XJpu5mBPZMajDpSP055%2FwuFklt51gfpiiq3Gnexa7y1k2WqbEh7IrgvULI9WniYTvluRMWMnaHoA7AL7LuzJmq0J8gsUJtNFDHAJMhCLCfFIeVILqBFdPG7VEfKNOcQm8cD0pZ6b1oXGnjzY%2FEeWjPNgn53L1nxVadvMSUTxAS1S%2Fs%2FfS0nzEAqEs%2Bqe0bI%2BUic6%2BcAfP2TuTv1yeyIqujhPafmBSLDbfU4yXi8GHuuUzmMjzB2qAnXeaXmH1snbNP1PKphULWrpVkAsVBX2FAqMhw0p8SdMwtc2gxAY6pgEtFrr7mwpsBXaBesCPsmnlM70nlTyT11Z21Ou4O08fhOKCfIMSMXp9N%2BRs%2Fcq5GJB22m%2BzthxOUBEPb6RVaQUUIVNx78Tjvr1feCzQIh78Et0YECRKnideGvJRuSAcLiKKEzrV6fpP8Vj%2FzUITbx0xg22oBHQbjkiIt8E%2BGH3PkavPaR%2F8840iUEYUxiYxKmZO6BkDeP9S%2B7qIHxio7vQYvL%2FLdBYO&X-Amz-Signature=6fdaec35813fe9239f1c5b861c0345778a1794605c674eb8608534d93004ce22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP56XVZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAgrIzeeKn%2FpnMR6znitRAH94XjqMOzEHom3u7SCnKuLAiASxc3zT5bz%2Fy9GgiWRWL0C9X9UrdFcHtbgoJHygUKVYiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIFGAcfFR3YVP9ylKtwD4j41M25NthVtFAAcOyJUMkEDix4OJj3lfaKugvZPdGBzcmKZ7JE4dyszdMN1Tr0%2Bg2DAC64OeHDsGhr%2Bh7fxEV2ZeEh0gWWTGlE%2BjNXKQQcJFA1PH2ynpTgDMZye9eif5LXUK0vb1twdhMEL8BOkE3YgOmkhf9NV7zG4ccl5%2BNxn84jEJF99AdZSC4BCDCnRsGVwtNnzovGswv6UF942IyS9U9Gyw2YoozPiIxtJ0iqpNWN1b8xU85SBR%2B6zuhIiqXAzcH51%2B9wzohU%2BClednQgQoVasOlg%2FOhqESr%2FunbVws3lK1TNqUAGKIdGCJmyzTfouz6rPvIiXsT3GdX3CEkRdUr6XJpu5mBPZMajDpSP055%2FwuFklt51gfpiiq3Gnexa7y1k2WqbEh7IrgvULI9WniYTvluRMWMnaHoA7AL7LuzJmq0J8gsUJtNFDHAJMhCLCfFIeVILqBFdPG7VEfKNOcQm8cD0pZ6b1oXGnjzY%2FEeWjPNgn53L1nxVadvMSUTxAS1S%2Fs%2FfS0nzEAqEs%2Bqe0bI%2BUic6%2BcAfP2TuTv1yeyIqujhPafmBSLDbfU4yXi8GHuuUzmMjzB2qAnXeaXmH1snbNP1PKphULWrpVkAsVBX2FAqMhw0p8SdMwtc2gxAY6pgEtFrr7mwpsBXaBesCPsmnlM70nlTyT11Z21Ou4O08fhOKCfIMSMXp9N%2BRs%2Fcq5GJB22m%2BzthxOUBEPb6RVaQUUIVNx78Tjvr1feCzQIh78Et0YECRKnideGvJRuSAcLiKKEzrV6fpP8Vj%2FzUITbx0xg22oBHQbjkiIt8E%2BGH3PkavPaR%2F8840iUEYUxiYxKmZO6BkDeP9S%2B7qIHxio7vQYvL%2FLdBYO&X-Amz-Signature=9a88635ce52cc58c29a0918df3e14315ca28dbc5effcfe12755cb28e47fae97a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP56XVZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAgrIzeeKn%2FpnMR6znitRAH94XjqMOzEHom3u7SCnKuLAiASxc3zT5bz%2Fy9GgiWRWL0C9X9UrdFcHtbgoJHygUKVYiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIFGAcfFR3YVP9ylKtwD4j41M25NthVtFAAcOyJUMkEDix4OJj3lfaKugvZPdGBzcmKZ7JE4dyszdMN1Tr0%2Bg2DAC64OeHDsGhr%2Bh7fxEV2ZeEh0gWWTGlE%2BjNXKQQcJFA1PH2ynpTgDMZye9eif5LXUK0vb1twdhMEL8BOkE3YgOmkhf9NV7zG4ccl5%2BNxn84jEJF99AdZSC4BCDCnRsGVwtNnzovGswv6UF942IyS9U9Gyw2YoozPiIxtJ0iqpNWN1b8xU85SBR%2B6zuhIiqXAzcH51%2B9wzohU%2BClednQgQoVasOlg%2FOhqESr%2FunbVws3lK1TNqUAGKIdGCJmyzTfouz6rPvIiXsT3GdX3CEkRdUr6XJpu5mBPZMajDpSP055%2FwuFklt51gfpiiq3Gnexa7y1k2WqbEh7IrgvULI9WniYTvluRMWMnaHoA7AL7LuzJmq0J8gsUJtNFDHAJMhCLCfFIeVILqBFdPG7VEfKNOcQm8cD0pZ6b1oXGnjzY%2FEeWjPNgn53L1nxVadvMSUTxAS1S%2Fs%2FfS0nzEAqEs%2Bqe0bI%2BUic6%2BcAfP2TuTv1yeyIqujhPafmBSLDbfU4yXi8GHuuUzmMjzB2qAnXeaXmH1snbNP1PKphULWrpVkAsVBX2FAqMhw0p8SdMwtc2gxAY6pgEtFrr7mwpsBXaBesCPsmnlM70nlTyT11Z21Ou4O08fhOKCfIMSMXp9N%2BRs%2Fcq5GJB22m%2BzthxOUBEPb6RVaQUUIVNx78Tjvr1feCzQIh78Et0YECRKnideGvJRuSAcLiKKEzrV6fpP8Vj%2FzUITbx0xg22oBHQbjkiIt8E%2BGH3PkavPaR%2F8840iUEYUxiYxKmZO6BkDeP9S%2B7qIHxio7vQYvL%2FLdBYO&X-Amz-Signature=01a2b82dad4998db4973012574beb42439bf97dd613b67c878b8d1eb8967cca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP56XVZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAgrIzeeKn%2FpnMR6znitRAH94XjqMOzEHom3u7SCnKuLAiASxc3zT5bz%2Fy9GgiWRWL0C9X9UrdFcHtbgoJHygUKVYiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIFGAcfFR3YVP9ylKtwD4j41M25NthVtFAAcOyJUMkEDix4OJj3lfaKugvZPdGBzcmKZ7JE4dyszdMN1Tr0%2Bg2DAC64OeHDsGhr%2Bh7fxEV2ZeEh0gWWTGlE%2BjNXKQQcJFA1PH2ynpTgDMZye9eif5LXUK0vb1twdhMEL8BOkE3YgOmkhf9NV7zG4ccl5%2BNxn84jEJF99AdZSC4BCDCnRsGVwtNnzovGswv6UF942IyS9U9Gyw2YoozPiIxtJ0iqpNWN1b8xU85SBR%2B6zuhIiqXAzcH51%2B9wzohU%2BClednQgQoVasOlg%2FOhqESr%2FunbVws3lK1TNqUAGKIdGCJmyzTfouz6rPvIiXsT3GdX3CEkRdUr6XJpu5mBPZMajDpSP055%2FwuFklt51gfpiiq3Gnexa7y1k2WqbEh7IrgvULI9WniYTvluRMWMnaHoA7AL7LuzJmq0J8gsUJtNFDHAJMhCLCfFIeVILqBFdPG7VEfKNOcQm8cD0pZ6b1oXGnjzY%2FEeWjPNgn53L1nxVadvMSUTxAS1S%2Fs%2FfS0nzEAqEs%2Bqe0bI%2BUic6%2BcAfP2TuTv1yeyIqujhPafmBSLDbfU4yXi8GHuuUzmMjzB2qAnXeaXmH1snbNP1PKphULWrpVkAsVBX2FAqMhw0p8SdMwtc2gxAY6pgEtFrr7mwpsBXaBesCPsmnlM70nlTyT11Z21Ou4O08fhOKCfIMSMXp9N%2BRs%2Fcq5GJB22m%2BzthxOUBEPb6RVaQUUIVNx78Tjvr1feCzQIh78Et0YECRKnideGvJRuSAcLiKKEzrV6fpP8Vj%2FzUITbx0xg22oBHQbjkiIt8E%2BGH3PkavPaR%2F8840iUEYUxiYxKmZO6BkDeP9S%2B7qIHxio7vQYvL%2FLdBYO&X-Amz-Signature=d7983a944c946246c3eb1015c3a33605453d95cd09257298e76ff75bf580763b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP56XVZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAgrIzeeKn%2FpnMR6znitRAH94XjqMOzEHom3u7SCnKuLAiASxc3zT5bz%2Fy9GgiWRWL0C9X9UrdFcHtbgoJHygUKVYiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIFGAcfFR3YVP9ylKtwD4j41M25NthVtFAAcOyJUMkEDix4OJj3lfaKugvZPdGBzcmKZ7JE4dyszdMN1Tr0%2Bg2DAC64OeHDsGhr%2Bh7fxEV2ZeEh0gWWTGlE%2BjNXKQQcJFA1PH2ynpTgDMZye9eif5LXUK0vb1twdhMEL8BOkE3YgOmkhf9NV7zG4ccl5%2BNxn84jEJF99AdZSC4BCDCnRsGVwtNnzovGswv6UF942IyS9U9Gyw2YoozPiIxtJ0iqpNWN1b8xU85SBR%2B6zuhIiqXAzcH51%2B9wzohU%2BClednQgQoVasOlg%2FOhqESr%2FunbVws3lK1TNqUAGKIdGCJmyzTfouz6rPvIiXsT3GdX3CEkRdUr6XJpu5mBPZMajDpSP055%2FwuFklt51gfpiiq3Gnexa7y1k2WqbEh7IrgvULI9WniYTvluRMWMnaHoA7AL7LuzJmq0J8gsUJtNFDHAJMhCLCfFIeVILqBFdPG7VEfKNOcQm8cD0pZ6b1oXGnjzY%2FEeWjPNgn53L1nxVadvMSUTxAS1S%2Fs%2FfS0nzEAqEs%2Bqe0bI%2BUic6%2BcAfP2TuTv1yeyIqujhPafmBSLDbfU4yXi8GHuuUzmMjzB2qAnXeaXmH1snbNP1PKphULWrpVkAsVBX2FAqMhw0p8SdMwtc2gxAY6pgEtFrr7mwpsBXaBesCPsmnlM70nlTyT11Z21Ou4O08fhOKCfIMSMXp9N%2BRs%2Fcq5GJB22m%2BzthxOUBEPb6RVaQUUIVNx78Tjvr1feCzQIh78Et0YECRKnideGvJRuSAcLiKKEzrV6fpP8Vj%2FzUITbx0xg22oBHQbjkiIt8E%2BGH3PkavPaR%2F8840iUEYUxiYxKmZO6BkDeP9S%2B7qIHxio7vQYvL%2FLdBYO&X-Amz-Signature=227e247e5c729dfd05d89be661d66bf2387ab6a8db264190792d8126244c1da2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP56XVZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAgrIzeeKn%2FpnMR6znitRAH94XjqMOzEHom3u7SCnKuLAiASxc3zT5bz%2Fy9GgiWRWL0C9X9UrdFcHtbgoJHygUKVYiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIFGAcfFR3YVP9ylKtwD4j41M25NthVtFAAcOyJUMkEDix4OJj3lfaKugvZPdGBzcmKZ7JE4dyszdMN1Tr0%2Bg2DAC64OeHDsGhr%2Bh7fxEV2ZeEh0gWWTGlE%2BjNXKQQcJFA1PH2ynpTgDMZye9eif5LXUK0vb1twdhMEL8BOkE3YgOmkhf9NV7zG4ccl5%2BNxn84jEJF99AdZSC4BCDCnRsGVwtNnzovGswv6UF942IyS9U9Gyw2YoozPiIxtJ0iqpNWN1b8xU85SBR%2B6zuhIiqXAzcH51%2B9wzohU%2BClednQgQoVasOlg%2FOhqESr%2FunbVws3lK1TNqUAGKIdGCJmyzTfouz6rPvIiXsT3GdX3CEkRdUr6XJpu5mBPZMajDpSP055%2FwuFklt51gfpiiq3Gnexa7y1k2WqbEh7IrgvULI9WniYTvluRMWMnaHoA7AL7LuzJmq0J8gsUJtNFDHAJMhCLCfFIeVILqBFdPG7VEfKNOcQm8cD0pZ6b1oXGnjzY%2FEeWjPNgn53L1nxVadvMSUTxAS1S%2Fs%2FfS0nzEAqEs%2Bqe0bI%2BUic6%2BcAfP2TuTv1yeyIqujhPafmBSLDbfU4yXi8GHuuUzmMjzB2qAnXeaXmH1snbNP1PKphULWrpVkAsVBX2FAqMhw0p8SdMwtc2gxAY6pgEtFrr7mwpsBXaBesCPsmnlM70nlTyT11Z21Ou4O08fhOKCfIMSMXp9N%2BRs%2Fcq5GJB22m%2BzthxOUBEPb6RVaQUUIVNx78Tjvr1feCzQIh78Et0YECRKnideGvJRuSAcLiKKEzrV6fpP8Vj%2FzUITbx0xg22oBHQbjkiIt8E%2BGH3PkavPaR%2F8840iUEYUxiYxKmZO6BkDeP9S%2B7qIHxio7vQYvL%2FLdBYO&X-Amz-Signature=c3d7f066cfe2e714f4d90840716fbbf76c06b56bc41668329d9911eee845c10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP56XVZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAgrIzeeKn%2FpnMR6znitRAH94XjqMOzEHom3u7SCnKuLAiASxc3zT5bz%2Fy9GgiWRWL0C9X9UrdFcHtbgoJHygUKVYiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIFGAcfFR3YVP9ylKtwD4j41M25NthVtFAAcOyJUMkEDix4OJj3lfaKugvZPdGBzcmKZ7JE4dyszdMN1Tr0%2Bg2DAC64OeHDsGhr%2Bh7fxEV2ZeEh0gWWTGlE%2BjNXKQQcJFA1PH2ynpTgDMZye9eif5LXUK0vb1twdhMEL8BOkE3YgOmkhf9NV7zG4ccl5%2BNxn84jEJF99AdZSC4BCDCnRsGVwtNnzovGswv6UF942IyS9U9Gyw2YoozPiIxtJ0iqpNWN1b8xU85SBR%2B6zuhIiqXAzcH51%2B9wzohU%2BClednQgQoVasOlg%2FOhqESr%2FunbVws3lK1TNqUAGKIdGCJmyzTfouz6rPvIiXsT3GdX3CEkRdUr6XJpu5mBPZMajDpSP055%2FwuFklt51gfpiiq3Gnexa7y1k2WqbEh7IrgvULI9WniYTvluRMWMnaHoA7AL7LuzJmq0J8gsUJtNFDHAJMhCLCfFIeVILqBFdPG7VEfKNOcQm8cD0pZ6b1oXGnjzY%2FEeWjPNgn53L1nxVadvMSUTxAS1S%2Fs%2FfS0nzEAqEs%2Bqe0bI%2BUic6%2BcAfP2TuTv1yeyIqujhPafmBSLDbfU4yXi8GHuuUzmMjzB2qAnXeaXmH1snbNP1PKphULWrpVkAsVBX2FAqMhw0p8SdMwtc2gxAY6pgEtFrr7mwpsBXaBesCPsmnlM70nlTyT11Z21Ou4O08fhOKCfIMSMXp9N%2BRs%2Fcq5GJB22m%2BzthxOUBEPb6RVaQUUIVNx78Tjvr1feCzQIh78Et0YECRKnideGvJRuSAcLiKKEzrV6fpP8Vj%2FzUITbx0xg22oBHQbjkiIt8E%2BGH3PkavPaR%2F8840iUEYUxiYxKmZO6BkDeP9S%2B7qIHxio7vQYvL%2FLdBYO&X-Amz-Signature=b986324e14bfaa1566445f1651ea0b0b1d0ee7de36558e3cd741cc0bd3a7101a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP56XVZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAgrIzeeKn%2FpnMR6znitRAH94XjqMOzEHom3u7SCnKuLAiASxc3zT5bz%2Fy9GgiWRWL0C9X9UrdFcHtbgoJHygUKVYiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIFGAcfFR3YVP9ylKtwD4j41M25NthVtFAAcOyJUMkEDix4OJj3lfaKugvZPdGBzcmKZ7JE4dyszdMN1Tr0%2Bg2DAC64OeHDsGhr%2Bh7fxEV2ZeEh0gWWTGlE%2BjNXKQQcJFA1PH2ynpTgDMZye9eif5LXUK0vb1twdhMEL8BOkE3YgOmkhf9NV7zG4ccl5%2BNxn84jEJF99AdZSC4BCDCnRsGVwtNnzovGswv6UF942IyS9U9Gyw2YoozPiIxtJ0iqpNWN1b8xU85SBR%2B6zuhIiqXAzcH51%2B9wzohU%2BClednQgQoVasOlg%2FOhqESr%2FunbVws3lK1TNqUAGKIdGCJmyzTfouz6rPvIiXsT3GdX3CEkRdUr6XJpu5mBPZMajDpSP055%2FwuFklt51gfpiiq3Gnexa7y1k2WqbEh7IrgvULI9WniYTvluRMWMnaHoA7AL7LuzJmq0J8gsUJtNFDHAJMhCLCfFIeVILqBFdPG7VEfKNOcQm8cD0pZ6b1oXGnjzY%2FEeWjPNgn53L1nxVadvMSUTxAS1S%2Fs%2FfS0nzEAqEs%2Bqe0bI%2BUic6%2BcAfP2TuTv1yeyIqujhPafmBSLDbfU4yXi8GHuuUzmMjzB2qAnXeaXmH1snbNP1PKphULWrpVkAsVBX2FAqMhw0p8SdMwtc2gxAY6pgEtFrr7mwpsBXaBesCPsmnlM70nlTyT11Z21Ou4O08fhOKCfIMSMXp9N%2BRs%2Fcq5GJB22m%2BzthxOUBEPb6RVaQUUIVNx78Tjvr1feCzQIh78Et0YECRKnideGvJRuSAcLiKKEzrV6fpP8Vj%2FzUITbx0xg22oBHQbjkiIt8E%2BGH3PkavPaR%2F8840iUEYUxiYxKmZO6BkDeP9S%2B7qIHxio7vQYvL%2FLdBYO&X-Amz-Signature=4f22b637c50ce52c8158c830d9354dcd61b2c040bab143c0fcca22fa335d5d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored map

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

TODO: add pic

For further configuration go to: TODO: link to slam docs config guide 
