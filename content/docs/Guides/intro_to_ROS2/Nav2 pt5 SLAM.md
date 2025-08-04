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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNP5RAMH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDb9vFw0oq%2Fn%2F8Lu59bg2AxF21ojw2BeERJzIuIUenpjQIgVRuZKtJyEJlMSjIiAm1Tf7M5d%2FTEfTGrDQ6CCSxZWvgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP6%2FJvi9IwbRpLuV8CrcA5RXZxWDo6dAMj4dWVnQdwgRMJa81CfmDxALbqE76WJhPCzZ%2Bwnhfvam3sywAE8IG%2B31aXOgjOgHIOOeRck%2Fuq6Vno2yOTwcWWSWtE1o94vzR5XO4Hjmy%2BnFFg62kyccSGSLDjPzudXWY6dQ%2BYyQAucMhVI5vwYNV3TTuflb0h17nzsn1FWHuy6858atUJFDiG5BuGkm6r1aBKnyV1ffen6aefS4zW4J50YL7lhqTALhTqzFIFtxFdcogW5WjwPfEABQihgRSJS4p0yjo7oY%2FgeGvmU51YnlxAud9bWDyvvThQolMiWlbbni9t06WPd6mIMHEvymbjN93qAFETUz2C9eCQUJs3SQmfekwxysksHwW5Q%2FjAXIEiU2rp4MrArkQdu9NpV83FLYQBVnGRQgrjBslvLBk8HrLdm%2BIpqOcM4fpD4K3zgUx54WN12jdtTx7s4rksTZ6h48DqaonNVxE4qai3f%2FRBE7rjRSniUOcpoE97zXKVCbv%2FTlssyCbhpn6EzsBwmsBi%2BbfkQLS5A0W7%2FhIydW4tTtPNu6j%2F33JLxRX2xa9gLjzcG7cMw197%2BCRpGyu6vFkbyKcC25D94abXMDPiiK5d0UzIQUastNMILdY9wuDhkoWGVgw%2BckMLDpwMQGOqUBUf0rrJDaZPKuLAE%2BV0jYR76XGR0j%2Fg1jyaMpEy4omy0pBSFIN3AN%2B59DAWV00ZtYNJeCqtIh840aNx7HBoxulEkacWGhlRA%2BhjPhZpQH%2FeV3yeTbRDTma%2BOCmDKmcOtTuNes8pp%2BTGvkzR%2FBHhx5s47EaDFGy1sDwwTwCUS%2BHIDzHiJA%2F68LsilAjtsYO7NsjoVPSZT9yDAZJcTxAbdq1eH0dv7j&X-Amz-Signature=b06e6c12e1817d4b09548424a14d184fd05e888993c6b451279af7edd0e18ae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNP5RAMH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDb9vFw0oq%2Fn%2F8Lu59bg2AxF21ojw2BeERJzIuIUenpjQIgVRuZKtJyEJlMSjIiAm1Tf7M5d%2FTEfTGrDQ6CCSxZWvgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP6%2FJvi9IwbRpLuV8CrcA5RXZxWDo6dAMj4dWVnQdwgRMJa81CfmDxALbqE76WJhPCzZ%2Bwnhfvam3sywAE8IG%2B31aXOgjOgHIOOeRck%2Fuq6Vno2yOTwcWWSWtE1o94vzR5XO4Hjmy%2BnFFg62kyccSGSLDjPzudXWY6dQ%2BYyQAucMhVI5vwYNV3TTuflb0h17nzsn1FWHuy6858atUJFDiG5BuGkm6r1aBKnyV1ffen6aefS4zW4J50YL7lhqTALhTqzFIFtxFdcogW5WjwPfEABQihgRSJS4p0yjo7oY%2FgeGvmU51YnlxAud9bWDyvvThQolMiWlbbni9t06WPd6mIMHEvymbjN93qAFETUz2C9eCQUJs3SQmfekwxysksHwW5Q%2FjAXIEiU2rp4MrArkQdu9NpV83FLYQBVnGRQgrjBslvLBk8HrLdm%2BIpqOcM4fpD4K3zgUx54WN12jdtTx7s4rksTZ6h48DqaonNVxE4qai3f%2FRBE7rjRSniUOcpoE97zXKVCbv%2FTlssyCbhpn6EzsBwmsBi%2BbfkQLS5A0W7%2FhIydW4tTtPNu6j%2F33JLxRX2xa9gLjzcG7cMw197%2BCRpGyu6vFkbyKcC25D94abXMDPiiK5d0UzIQUastNMILdY9wuDhkoWGVgw%2BckMLDpwMQGOqUBUf0rrJDaZPKuLAE%2BV0jYR76XGR0j%2Fg1jyaMpEy4omy0pBSFIN3AN%2B59DAWV00ZtYNJeCqtIh840aNx7HBoxulEkacWGhlRA%2BhjPhZpQH%2FeV3yeTbRDTma%2BOCmDKmcOtTuNes8pp%2BTGvkzR%2FBHhx5s47EaDFGy1sDwwTwCUS%2BHIDzHiJA%2F68LsilAjtsYO7NsjoVPSZT9yDAZJcTxAbdq1eH0dv7j&X-Amz-Signature=ec3d1aabaf2c7bfb0bc9fa643d70ad3fe7e4798cde6b456b97f3f4e50780d222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNP5RAMH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDb9vFw0oq%2Fn%2F8Lu59bg2AxF21ojw2BeERJzIuIUenpjQIgVRuZKtJyEJlMSjIiAm1Tf7M5d%2FTEfTGrDQ6CCSxZWvgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP6%2FJvi9IwbRpLuV8CrcA5RXZxWDo6dAMj4dWVnQdwgRMJa81CfmDxALbqE76WJhPCzZ%2Bwnhfvam3sywAE8IG%2B31aXOgjOgHIOOeRck%2Fuq6Vno2yOTwcWWSWtE1o94vzR5XO4Hjmy%2BnFFg62kyccSGSLDjPzudXWY6dQ%2BYyQAucMhVI5vwYNV3TTuflb0h17nzsn1FWHuy6858atUJFDiG5BuGkm6r1aBKnyV1ffen6aefS4zW4J50YL7lhqTALhTqzFIFtxFdcogW5WjwPfEABQihgRSJS4p0yjo7oY%2FgeGvmU51YnlxAud9bWDyvvThQolMiWlbbni9t06WPd6mIMHEvymbjN93qAFETUz2C9eCQUJs3SQmfekwxysksHwW5Q%2FjAXIEiU2rp4MrArkQdu9NpV83FLYQBVnGRQgrjBslvLBk8HrLdm%2BIpqOcM4fpD4K3zgUx54WN12jdtTx7s4rksTZ6h48DqaonNVxE4qai3f%2FRBE7rjRSniUOcpoE97zXKVCbv%2FTlssyCbhpn6EzsBwmsBi%2BbfkQLS5A0W7%2FhIydW4tTtPNu6j%2F33JLxRX2xa9gLjzcG7cMw197%2BCRpGyu6vFkbyKcC25D94abXMDPiiK5d0UzIQUastNMILdY9wuDhkoWGVgw%2BckMLDpwMQGOqUBUf0rrJDaZPKuLAE%2BV0jYR76XGR0j%2Fg1jyaMpEy4omy0pBSFIN3AN%2B59DAWV00ZtYNJeCqtIh840aNx7HBoxulEkacWGhlRA%2BhjPhZpQH%2FeV3yeTbRDTma%2BOCmDKmcOtTuNes8pp%2BTGvkzR%2FBHhx5s47EaDFGy1sDwwTwCUS%2BHIDzHiJA%2F68LsilAjtsYO7NsjoVPSZT9yDAZJcTxAbdq1eH0dv7j&X-Amz-Signature=1f138c96489c84b273ae8d16e712b4b3b1d076b6f604fd008839d92c417ae951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNP5RAMH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDb9vFw0oq%2Fn%2F8Lu59bg2AxF21ojw2BeERJzIuIUenpjQIgVRuZKtJyEJlMSjIiAm1Tf7M5d%2FTEfTGrDQ6CCSxZWvgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP6%2FJvi9IwbRpLuV8CrcA5RXZxWDo6dAMj4dWVnQdwgRMJa81CfmDxALbqE76WJhPCzZ%2Bwnhfvam3sywAE8IG%2B31aXOgjOgHIOOeRck%2Fuq6Vno2yOTwcWWSWtE1o94vzR5XO4Hjmy%2BnFFg62kyccSGSLDjPzudXWY6dQ%2BYyQAucMhVI5vwYNV3TTuflb0h17nzsn1FWHuy6858atUJFDiG5BuGkm6r1aBKnyV1ffen6aefS4zW4J50YL7lhqTALhTqzFIFtxFdcogW5WjwPfEABQihgRSJS4p0yjo7oY%2FgeGvmU51YnlxAud9bWDyvvThQolMiWlbbni9t06WPd6mIMHEvymbjN93qAFETUz2C9eCQUJs3SQmfekwxysksHwW5Q%2FjAXIEiU2rp4MrArkQdu9NpV83FLYQBVnGRQgrjBslvLBk8HrLdm%2BIpqOcM4fpD4K3zgUx54WN12jdtTx7s4rksTZ6h48DqaonNVxE4qai3f%2FRBE7rjRSniUOcpoE97zXKVCbv%2FTlssyCbhpn6EzsBwmsBi%2BbfkQLS5A0W7%2FhIydW4tTtPNu6j%2F33JLxRX2xa9gLjzcG7cMw197%2BCRpGyu6vFkbyKcC25D94abXMDPiiK5d0UzIQUastNMILdY9wuDhkoWGVgw%2BckMLDpwMQGOqUBUf0rrJDaZPKuLAE%2BV0jYR76XGR0j%2Fg1jyaMpEy4omy0pBSFIN3AN%2B59DAWV00ZtYNJeCqtIh840aNx7HBoxulEkacWGhlRA%2BhjPhZpQH%2FeV3yeTbRDTma%2BOCmDKmcOtTuNes8pp%2BTGvkzR%2FBHhx5s47EaDFGy1sDwwTwCUS%2BHIDzHiJA%2F68LsilAjtsYO7NsjoVPSZT9yDAZJcTxAbdq1eH0dv7j&X-Amz-Signature=737602a6a96211322df4b5b3c818cb4b650af08a04ada8dab94c01426a62be3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNP5RAMH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDb9vFw0oq%2Fn%2F8Lu59bg2AxF21ojw2BeERJzIuIUenpjQIgVRuZKtJyEJlMSjIiAm1Tf7M5d%2FTEfTGrDQ6CCSxZWvgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP6%2FJvi9IwbRpLuV8CrcA5RXZxWDo6dAMj4dWVnQdwgRMJa81CfmDxALbqE76WJhPCzZ%2Bwnhfvam3sywAE8IG%2B31aXOgjOgHIOOeRck%2Fuq6Vno2yOTwcWWSWtE1o94vzR5XO4Hjmy%2BnFFg62kyccSGSLDjPzudXWY6dQ%2BYyQAucMhVI5vwYNV3TTuflb0h17nzsn1FWHuy6858atUJFDiG5BuGkm6r1aBKnyV1ffen6aefS4zW4J50YL7lhqTALhTqzFIFtxFdcogW5WjwPfEABQihgRSJS4p0yjo7oY%2FgeGvmU51YnlxAud9bWDyvvThQolMiWlbbni9t06WPd6mIMHEvymbjN93qAFETUz2C9eCQUJs3SQmfekwxysksHwW5Q%2FjAXIEiU2rp4MrArkQdu9NpV83FLYQBVnGRQgrjBslvLBk8HrLdm%2BIpqOcM4fpD4K3zgUx54WN12jdtTx7s4rksTZ6h48DqaonNVxE4qai3f%2FRBE7rjRSniUOcpoE97zXKVCbv%2FTlssyCbhpn6EzsBwmsBi%2BbfkQLS5A0W7%2FhIydW4tTtPNu6j%2F33JLxRX2xa9gLjzcG7cMw197%2BCRpGyu6vFkbyKcC25D94abXMDPiiK5d0UzIQUastNMILdY9wuDhkoWGVgw%2BckMLDpwMQGOqUBUf0rrJDaZPKuLAE%2BV0jYR76XGR0j%2Fg1jyaMpEy4omy0pBSFIN3AN%2B59DAWV00ZtYNJeCqtIh840aNx7HBoxulEkacWGhlRA%2BhjPhZpQH%2FeV3yeTbRDTma%2BOCmDKmcOtTuNes8pp%2BTGvkzR%2FBHhx5s47EaDFGy1sDwwTwCUS%2BHIDzHiJA%2F68LsilAjtsYO7NsjoVPSZT9yDAZJcTxAbdq1eH0dv7j&X-Amz-Signature=564e552762f72b060996d7d835b039d61e76c2cd3695d63ce46d454c73fdefb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNP5RAMH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDb9vFw0oq%2Fn%2F8Lu59bg2AxF21ojw2BeERJzIuIUenpjQIgVRuZKtJyEJlMSjIiAm1Tf7M5d%2FTEfTGrDQ6CCSxZWvgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP6%2FJvi9IwbRpLuV8CrcA5RXZxWDo6dAMj4dWVnQdwgRMJa81CfmDxALbqE76WJhPCzZ%2Bwnhfvam3sywAE8IG%2B31aXOgjOgHIOOeRck%2Fuq6Vno2yOTwcWWSWtE1o94vzR5XO4Hjmy%2BnFFg62kyccSGSLDjPzudXWY6dQ%2BYyQAucMhVI5vwYNV3TTuflb0h17nzsn1FWHuy6858atUJFDiG5BuGkm6r1aBKnyV1ffen6aefS4zW4J50YL7lhqTALhTqzFIFtxFdcogW5WjwPfEABQihgRSJS4p0yjo7oY%2FgeGvmU51YnlxAud9bWDyvvThQolMiWlbbni9t06WPd6mIMHEvymbjN93qAFETUz2C9eCQUJs3SQmfekwxysksHwW5Q%2FjAXIEiU2rp4MrArkQdu9NpV83FLYQBVnGRQgrjBslvLBk8HrLdm%2BIpqOcM4fpD4K3zgUx54WN12jdtTx7s4rksTZ6h48DqaonNVxE4qai3f%2FRBE7rjRSniUOcpoE97zXKVCbv%2FTlssyCbhpn6EzsBwmsBi%2BbfkQLS5A0W7%2FhIydW4tTtPNu6j%2F33JLxRX2xa9gLjzcG7cMw197%2BCRpGyu6vFkbyKcC25D94abXMDPiiK5d0UzIQUastNMILdY9wuDhkoWGVgw%2BckMLDpwMQGOqUBUf0rrJDaZPKuLAE%2BV0jYR76XGR0j%2Fg1jyaMpEy4omy0pBSFIN3AN%2B59DAWV00ZtYNJeCqtIh840aNx7HBoxulEkacWGhlRA%2BhjPhZpQH%2FeV3yeTbRDTma%2BOCmDKmcOtTuNes8pp%2BTGvkzR%2FBHhx5s47EaDFGy1sDwwTwCUS%2BHIDzHiJA%2F68LsilAjtsYO7NsjoVPSZT9yDAZJcTxAbdq1eH0dv7j&X-Amz-Signature=0b10bcb469a1d83bb04263eb95c083cfe07c3aeba028162f19d978565890b3ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNP5RAMH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDb9vFw0oq%2Fn%2F8Lu59bg2AxF21ojw2BeERJzIuIUenpjQIgVRuZKtJyEJlMSjIiAm1Tf7M5d%2FTEfTGrDQ6CCSxZWvgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP6%2FJvi9IwbRpLuV8CrcA5RXZxWDo6dAMj4dWVnQdwgRMJa81CfmDxALbqE76WJhPCzZ%2Bwnhfvam3sywAE8IG%2B31aXOgjOgHIOOeRck%2Fuq6Vno2yOTwcWWSWtE1o94vzR5XO4Hjmy%2BnFFg62kyccSGSLDjPzudXWY6dQ%2BYyQAucMhVI5vwYNV3TTuflb0h17nzsn1FWHuy6858atUJFDiG5BuGkm6r1aBKnyV1ffen6aefS4zW4J50YL7lhqTALhTqzFIFtxFdcogW5WjwPfEABQihgRSJS4p0yjo7oY%2FgeGvmU51YnlxAud9bWDyvvThQolMiWlbbni9t06WPd6mIMHEvymbjN93qAFETUz2C9eCQUJs3SQmfekwxysksHwW5Q%2FjAXIEiU2rp4MrArkQdu9NpV83FLYQBVnGRQgrjBslvLBk8HrLdm%2BIpqOcM4fpD4K3zgUx54WN12jdtTx7s4rksTZ6h48DqaonNVxE4qai3f%2FRBE7rjRSniUOcpoE97zXKVCbv%2FTlssyCbhpn6EzsBwmsBi%2BbfkQLS5A0W7%2FhIydW4tTtPNu6j%2F33JLxRX2xa9gLjzcG7cMw197%2BCRpGyu6vFkbyKcC25D94abXMDPiiK5d0UzIQUastNMILdY9wuDhkoWGVgw%2BckMLDpwMQGOqUBUf0rrJDaZPKuLAE%2BV0jYR76XGR0j%2Fg1jyaMpEy4omy0pBSFIN3AN%2B59DAWV00ZtYNJeCqtIh840aNx7HBoxulEkacWGhlRA%2BhjPhZpQH%2FeV3yeTbRDTma%2BOCmDKmcOtTuNes8pp%2BTGvkzR%2FBHhx5s47EaDFGy1sDwwTwCUS%2BHIDzHiJA%2F68LsilAjtsYO7NsjoVPSZT9yDAZJcTxAbdq1eH0dv7j&X-Amz-Signature=4235f69ff5fc6474de6902335dff05b180a8a51b530337193af1be5fa00f4822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNP5RAMH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDb9vFw0oq%2Fn%2F8Lu59bg2AxF21ojw2BeERJzIuIUenpjQIgVRuZKtJyEJlMSjIiAm1Tf7M5d%2FTEfTGrDQ6CCSxZWvgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP6%2FJvi9IwbRpLuV8CrcA5RXZxWDo6dAMj4dWVnQdwgRMJa81CfmDxALbqE76WJhPCzZ%2Bwnhfvam3sywAE8IG%2B31aXOgjOgHIOOeRck%2Fuq6Vno2yOTwcWWSWtE1o94vzR5XO4Hjmy%2BnFFg62kyccSGSLDjPzudXWY6dQ%2BYyQAucMhVI5vwYNV3TTuflb0h17nzsn1FWHuy6858atUJFDiG5BuGkm6r1aBKnyV1ffen6aefS4zW4J50YL7lhqTALhTqzFIFtxFdcogW5WjwPfEABQihgRSJS4p0yjo7oY%2FgeGvmU51YnlxAud9bWDyvvThQolMiWlbbni9t06WPd6mIMHEvymbjN93qAFETUz2C9eCQUJs3SQmfekwxysksHwW5Q%2FjAXIEiU2rp4MrArkQdu9NpV83FLYQBVnGRQgrjBslvLBk8HrLdm%2BIpqOcM4fpD4K3zgUx54WN12jdtTx7s4rksTZ6h48DqaonNVxE4qai3f%2FRBE7rjRSniUOcpoE97zXKVCbv%2FTlssyCbhpn6EzsBwmsBi%2BbfkQLS5A0W7%2FhIydW4tTtPNu6j%2F33JLxRX2xa9gLjzcG7cMw197%2BCRpGyu6vFkbyKcC25D94abXMDPiiK5d0UzIQUastNMILdY9wuDhkoWGVgw%2BckMLDpwMQGOqUBUf0rrJDaZPKuLAE%2BV0jYR76XGR0j%2Fg1jyaMpEy4omy0pBSFIN3AN%2B59DAWV00ZtYNJeCqtIh840aNx7HBoxulEkacWGhlRA%2BhjPhZpQH%2FeV3yeTbRDTma%2BOCmDKmcOtTuNes8pp%2BTGvkzR%2FBHhx5s47EaDFGy1sDwwTwCUS%2BHIDzHiJA%2F68LsilAjtsYO7NsjoVPSZT9yDAZJcTxAbdq1eH0dv7j&X-Amz-Signature=18ac63266d6c0570c8aad79d6873ca3d46ee6b57247f049d64a8e7e169ec8baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNP5RAMH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDb9vFw0oq%2Fn%2F8Lu59bg2AxF21ojw2BeERJzIuIUenpjQIgVRuZKtJyEJlMSjIiAm1Tf7M5d%2FTEfTGrDQ6CCSxZWvgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP6%2FJvi9IwbRpLuV8CrcA5RXZxWDo6dAMj4dWVnQdwgRMJa81CfmDxALbqE76WJhPCzZ%2Bwnhfvam3sywAE8IG%2B31aXOgjOgHIOOeRck%2Fuq6Vno2yOTwcWWSWtE1o94vzR5XO4Hjmy%2BnFFg62kyccSGSLDjPzudXWY6dQ%2BYyQAucMhVI5vwYNV3TTuflb0h17nzsn1FWHuy6858atUJFDiG5BuGkm6r1aBKnyV1ffen6aefS4zW4J50YL7lhqTALhTqzFIFtxFdcogW5WjwPfEABQihgRSJS4p0yjo7oY%2FgeGvmU51YnlxAud9bWDyvvThQolMiWlbbni9t06WPd6mIMHEvymbjN93qAFETUz2C9eCQUJs3SQmfekwxysksHwW5Q%2FjAXIEiU2rp4MrArkQdu9NpV83FLYQBVnGRQgrjBslvLBk8HrLdm%2BIpqOcM4fpD4K3zgUx54WN12jdtTx7s4rksTZ6h48DqaonNVxE4qai3f%2FRBE7rjRSniUOcpoE97zXKVCbv%2FTlssyCbhpn6EzsBwmsBi%2BbfkQLS5A0W7%2FhIydW4tTtPNu6j%2F33JLxRX2xa9gLjzcG7cMw197%2BCRpGyu6vFkbyKcC25D94abXMDPiiK5d0UzIQUastNMILdY9wuDhkoWGVgw%2BckMLDpwMQGOqUBUf0rrJDaZPKuLAE%2BV0jYR76XGR0j%2Fg1jyaMpEy4omy0pBSFIN3AN%2B59DAWV00ZtYNJeCqtIh840aNx7HBoxulEkacWGhlRA%2BhjPhZpQH%2FeV3yeTbRDTma%2BOCmDKmcOtTuNes8pp%2BTGvkzR%2FBHhx5s47EaDFGy1sDwwTwCUS%2BHIDzHiJA%2F68LsilAjtsYO7NsjoVPSZT9yDAZJcTxAbdq1eH0dv7j&X-Amz-Signature=7decbf6101984eaff67d62b3840699ce5839b6e4da737d3ea007865858539e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNP5RAMH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDb9vFw0oq%2Fn%2F8Lu59bg2AxF21ojw2BeERJzIuIUenpjQIgVRuZKtJyEJlMSjIiAm1Tf7M5d%2FTEfTGrDQ6CCSxZWvgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP6%2FJvi9IwbRpLuV8CrcA5RXZxWDo6dAMj4dWVnQdwgRMJa81CfmDxALbqE76WJhPCzZ%2Bwnhfvam3sywAE8IG%2B31aXOgjOgHIOOeRck%2Fuq6Vno2yOTwcWWSWtE1o94vzR5XO4Hjmy%2BnFFg62kyccSGSLDjPzudXWY6dQ%2BYyQAucMhVI5vwYNV3TTuflb0h17nzsn1FWHuy6858atUJFDiG5BuGkm6r1aBKnyV1ffen6aefS4zW4J50YL7lhqTALhTqzFIFtxFdcogW5WjwPfEABQihgRSJS4p0yjo7oY%2FgeGvmU51YnlxAud9bWDyvvThQolMiWlbbni9t06WPd6mIMHEvymbjN93qAFETUz2C9eCQUJs3SQmfekwxysksHwW5Q%2FjAXIEiU2rp4MrArkQdu9NpV83FLYQBVnGRQgrjBslvLBk8HrLdm%2BIpqOcM4fpD4K3zgUx54WN12jdtTx7s4rksTZ6h48DqaonNVxE4qai3f%2FRBE7rjRSniUOcpoE97zXKVCbv%2FTlssyCbhpn6EzsBwmsBi%2BbfkQLS5A0W7%2FhIydW4tTtPNu6j%2F33JLxRX2xa9gLjzcG7cMw197%2BCRpGyu6vFkbyKcC25D94abXMDPiiK5d0UzIQUastNMILdY9wuDhkoWGVgw%2BckMLDpwMQGOqUBUf0rrJDaZPKuLAE%2BV0jYR76XGR0j%2Fg1jyaMpEy4omy0pBSFIN3AN%2B59DAWV00ZtYNJeCqtIh840aNx7HBoxulEkacWGhlRA%2BhjPhZpQH%2FeV3yeTbRDTma%2BOCmDKmcOtTuNes8pp%2BTGvkzR%2FBHhx5s47EaDFGy1sDwwTwCUS%2BHIDzHiJA%2F68LsilAjtsYO7NsjoVPSZT9yDAZJcTxAbdq1eH0dv7j&X-Amz-Signature=05049dd84251e8a908936c54e0e3316b52fc7ec1e7aa3fe3a833a27e01dd7a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNP5RAMH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDb9vFw0oq%2Fn%2F8Lu59bg2AxF21ojw2BeERJzIuIUenpjQIgVRuZKtJyEJlMSjIiAm1Tf7M5d%2FTEfTGrDQ6CCSxZWvgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP6%2FJvi9IwbRpLuV8CrcA5RXZxWDo6dAMj4dWVnQdwgRMJa81CfmDxALbqE76WJhPCzZ%2Bwnhfvam3sywAE8IG%2B31aXOgjOgHIOOeRck%2Fuq6Vno2yOTwcWWSWtE1o94vzR5XO4Hjmy%2BnFFg62kyccSGSLDjPzudXWY6dQ%2BYyQAucMhVI5vwYNV3TTuflb0h17nzsn1FWHuy6858atUJFDiG5BuGkm6r1aBKnyV1ffen6aefS4zW4J50YL7lhqTALhTqzFIFtxFdcogW5WjwPfEABQihgRSJS4p0yjo7oY%2FgeGvmU51YnlxAud9bWDyvvThQolMiWlbbni9t06WPd6mIMHEvymbjN93qAFETUz2C9eCQUJs3SQmfekwxysksHwW5Q%2FjAXIEiU2rp4MrArkQdu9NpV83FLYQBVnGRQgrjBslvLBk8HrLdm%2BIpqOcM4fpD4K3zgUx54WN12jdtTx7s4rksTZ6h48DqaonNVxE4qai3f%2FRBE7rjRSniUOcpoE97zXKVCbv%2FTlssyCbhpn6EzsBwmsBi%2BbfkQLS5A0W7%2FhIydW4tTtPNu6j%2F33JLxRX2xa9gLjzcG7cMw197%2BCRpGyu6vFkbyKcC25D94abXMDPiiK5d0UzIQUastNMILdY9wuDhkoWGVgw%2BckMLDpwMQGOqUBUf0rrJDaZPKuLAE%2BV0jYR76XGR0j%2Fg1jyaMpEy4omy0pBSFIN3AN%2B59DAWV00ZtYNJeCqtIh840aNx7HBoxulEkacWGhlRA%2BhjPhZpQH%2FeV3yeTbRDTma%2BOCmDKmcOtTuNes8pp%2BTGvkzR%2FBHhx5s47EaDFGy1sDwwTwCUS%2BHIDzHiJA%2F68LsilAjtsYO7NsjoVPSZT9yDAZJcTxAbdq1eH0dv7j&X-Amz-Signature=a5b8ce0bf81a4a0b7c47888a9b029b706472d78a9bf788f22c0ab225c71671b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNP5RAMH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDb9vFw0oq%2Fn%2F8Lu59bg2AxF21ojw2BeERJzIuIUenpjQIgVRuZKtJyEJlMSjIiAm1Tf7M5d%2FTEfTGrDQ6CCSxZWvgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP6%2FJvi9IwbRpLuV8CrcA5RXZxWDo6dAMj4dWVnQdwgRMJa81CfmDxALbqE76WJhPCzZ%2Bwnhfvam3sywAE8IG%2B31aXOgjOgHIOOeRck%2Fuq6Vno2yOTwcWWSWtE1o94vzR5XO4Hjmy%2BnFFg62kyccSGSLDjPzudXWY6dQ%2BYyQAucMhVI5vwYNV3TTuflb0h17nzsn1FWHuy6858atUJFDiG5BuGkm6r1aBKnyV1ffen6aefS4zW4J50YL7lhqTALhTqzFIFtxFdcogW5WjwPfEABQihgRSJS4p0yjo7oY%2FgeGvmU51YnlxAud9bWDyvvThQolMiWlbbni9t06WPd6mIMHEvymbjN93qAFETUz2C9eCQUJs3SQmfekwxysksHwW5Q%2FjAXIEiU2rp4MrArkQdu9NpV83FLYQBVnGRQgrjBslvLBk8HrLdm%2BIpqOcM4fpD4K3zgUx54WN12jdtTx7s4rksTZ6h48DqaonNVxE4qai3f%2FRBE7rjRSniUOcpoE97zXKVCbv%2FTlssyCbhpn6EzsBwmsBi%2BbfkQLS5A0W7%2FhIydW4tTtPNu6j%2F33JLxRX2xa9gLjzcG7cMw197%2BCRpGyu6vFkbyKcC25D94abXMDPiiK5d0UzIQUastNMILdY9wuDhkoWGVgw%2BckMLDpwMQGOqUBUf0rrJDaZPKuLAE%2BV0jYR76XGR0j%2Fg1jyaMpEy4omy0pBSFIN3AN%2B59DAWV00ZtYNJeCqtIh840aNx7HBoxulEkacWGhlRA%2BhjPhZpQH%2FeV3yeTbRDTma%2BOCmDKmcOtTuNes8pp%2BTGvkzR%2FBHhx5s47EaDFGy1sDwwTwCUS%2BHIDzHiJA%2F68LsilAjtsYO7NsjoVPSZT9yDAZJcTxAbdq1eH0dv7j&X-Amz-Signature=9077cb7e8151ea7570802f38ba8f4f92f1e60ae6ffae16571d2369ee779ce63a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNP5RAMH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDb9vFw0oq%2Fn%2F8Lu59bg2AxF21ojw2BeERJzIuIUenpjQIgVRuZKtJyEJlMSjIiAm1Tf7M5d%2FTEfTGrDQ6CCSxZWvgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP6%2FJvi9IwbRpLuV8CrcA5RXZxWDo6dAMj4dWVnQdwgRMJa81CfmDxALbqE76WJhPCzZ%2Bwnhfvam3sywAE8IG%2B31aXOgjOgHIOOeRck%2Fuq6Vno2yOTwcWWSWtE1o94vzR5XO4Hjmy%2BnFFg62kyccSGSLDjPzudXWY6dQ%2BYyQAucMhVI5vwYNV3TTuflb0h17nzsn1FWHuy6858atUJFDiG5BuGkm6r1aBKnyV1ffen6aefS4zW4J50YL7lhqTALhTqzFIFtxFdcogW5WjwPfEABQihgRSJS4p0yjo7oY%2FgeGvmU51YnlxAud9bWDyvvThQolMiWlbbni9t06WPd6mIMHEvymbjN93qAFETUz2C9eCQUJs3SQmfekwxysksHwW5Q%2FjAXIEiU2rp4MrArkQdu9NpV83FLYQBVnGRQgrjBslvLBk8HrLdm%2BIpqOcM4fpD4K3zgUx54WN12jdtTx7s4rksTZ6h48DqaonNVxE4qai3f%2FRBE7rjRSniUOcpoE97zXKVCbv%2FTlssyCbhpn6EzsBwmsBi%2BbfkQLS5A0W7%2FhIydW4tTtPNu6j%2F33JLxRX2xa9gLjzcG7cMw197%2BCRpGyu6vFkbyKcC25D94abXMDPiiK5d0UzIQUastNMILdY9wuDhkoWGVgw%2BckMLDpwMQGOqUBUf0rrJDaZPKuLAE%2BV0jYR76XGR0j%2Fg1jyaMpEy4omy0pBSFIN3AN%2B59DAWV00ZtYNJeCqtIh840aNx7HBoxulEkacWGhlRA%2BhjPhZpQH%2FeV3yeTbRDTma%2BOCmDKmcOtTuNes8pp%2BTGvkzR%2FBHhx5s47EaDFGy1sDwwTwCUS%2BHIDzHiJA%2F68LsilAjtsYO7NsjoVPSZT9yDAZJcTxAbdq1eH0dv7j&X-Amz-Signature=6cc82e07ad1f3bb72b45b683ac4cff7fe0e17d2271ef9321539d19649b3d55b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNP5RAMH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDb9vFw0oq%2Fn%2F8Lu59bg2AxF21ojw2BeERJzIuIUenpjQIgVRuZKtJyEJlMSjIiAm1Tf7M5d%2FTEfTGrDQ6CCSxZWvgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP6%2FJvi9IwbRpLuV8CrcA5RXZxWDo6dAMj4dWVnQdwgRMJa81CfmDxALbqE76WJhPCzZ%2Bwnhfvam3sywAE8IG%2B31aXOgjOgHIOOeRck%2Fuq6Vno2yOTwcWWSWtE1o94vzR5XO4Hjmy%2BnFFg62kyccSGSLDjPzudXWY6dQ%2BYyQAucMhVI5vwYNV3TTuflb0h17nzsn1FWHuy6858atUJFDiG5BuGkm6r1aBKnyV1ffen6aefS4zW4J50YL7lhqTALhTqzFIFtxFdcogW5WjwPfEABQihgRSJS4p0yjo7oY%2FgeGvmU51YnlxAud9bWDyvvThQolMiWlbbni9t06WPd6mIMHEvymbjN93qAFETUz2C9eCQUJs3SQmfekwxysksHwW5Q%2FjAXIEiU2rp4MrArkQdu9NpV83FLYQBVnGRQgrjBslvLBk8HrLdm%2BIpqOcM4fpD4K3zgUx54WN12jdtTx7s4rksTZ6h48DqaonNVxE4qai3f%2FRBE7rjRSniUOcpoE97zXKVCbv%2FTlssyCbhpn6EzsBwmsBi%2BbfkQLS5A0W7%2FhIydW4tTtPNu6j%2F33JLxRX2xa9gLjzcG7cMw197%2BCRpGyu6vFkbyKcC25D94abXMDPiiK5d0UzIQUastNMILdY9wuDhkoWGVgw%2BckMLDpwMQGOqUBUf0rrJDaZPKuLAE%2BV0jYR76XGR0j%2Fg1jyaMpEy4omy0pBSFIN3AN%2B59DAWV00ZtYNJeCqtIh840aNx7HBoxulEkacWGhlRA%2BhjPhZpQH%2FeV3yeTbRDTma%2BOCmDKmcOtTuNes8pp%2BTGvkzR%2FBHhx5s47EaDFGy1sDwwTwCUS%2BHIDzHiJA%2F68LsilAjtsYO7NsjoVPSZT9yDAZJcTxAbdq1eH0dv7j&X-Amz-Signature=c9e4628083e52f2e46d73ed325d1d7648d5cb1801f33f9e7dec86cee088f52c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
