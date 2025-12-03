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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZ3CP65%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGZR8B%2BRrdRFz5qvpITRlOIQrt02B%2BLZYvjrIOOxDTyrAiAJqorSKFGuZ1IMsAvMO6KIUJjbeI%2FqkUPTzytn6M%2B3eyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMluGVuc1m5bQ9yhKlKtwDnqDEmAz2Xb9tBnLVwkJshKx5KilqferygdQrSMlKhYmLK8THEuobOrSygb%2FM5C6Z7uVcwsguMC%2Fac8d9oVs0uCQc7Pe%2F0w6GRp4NxVb3JWVQfjUCTURI2lvOjFdbw%2FH3zrkiw5Iw63SboHAzPwZkBvtGqvi0iMBnaYePllx%2B3mAT6Dzdiv6ZKuAsr35LuNodJhYrHzn4LpoI9s5spgVEzMjNtWiSuzDpQg3UDerO%2BMlKDYP783BjQZvT8h9SfmnPnbZ%2FZCo92cmKOxls4kL6X%2BCAHvWxedv2YXZTF3AzywC0cgXMkPVgbQlcnwO26hAR5R2ZldDgr%2Bnooo9efPmTfxKiZVVEjH7KrBX7BVT6%2F5kyYpmqr%2F7nibdu3RAOzoDwqJ5kBdzyzVKMW1hgu5V%2BRlImzXkCAMeczrFghxusrmbqW8Rbl7xlE5UER7NGDmRFYJt7LIhGVroavWFGtzRTPwrGRCPU7d7YN8CD1jMaVixdQalH3uMNbVv5q%2B481IBd3wOd9HT90WsHJQxWJZ%2Bl73nDCOkx89fl82iM%2Fwlt9rQwihxZ8FubILTt7hN2eCglVA0StY%2F2P3z9NM%2FVa9vWSj4zU7TOlGAET%2BmuU6Ej2powOqxoo8IW%2BY8%2FFTAwwZa%2ByQY6pgEZENARFjw%2FItapEo3bEzqI7GbXVO80t58FGDySsajJ6DGUo2jYSmq7bSw23uxup%2FAZUVcKdo9OFwjDUi3JY8nwoqBro6HWPpQNAzX4x%2Bg6FL2QT1Vc1YLkZbC5WLTUFOfBbdl%2BdJH376kTZTAlq2J5OJU9IYBuHYrNOprUaG9JK1sPu6OkWDRAzB4dAz76W1OtshX86%2FSv6aCpV0XMITNCfgrAIZ6K&X-Amz-Signature=30febaf76b6ed3329f751c77ce63935821dbc27ff83f4c31e3f84e225003d0fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZ3CP65%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGZR8B%2BRrdRFz5qvpITRlOIQrt02B%2BLZYvjrIOOxDTyrAiAJqorSKFGuZ1IMsAvMO6KIUJjbeI%2FqkUPTzytn6M%2B3eyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMluGVuc1m5bQ9yhKlKtwDnqDEmAz2Xb9tBnLVwkJshKx5KilqferygdQrSMlKhYmLK8THEuobOrSygb%2FM5C6Z7uVcwsguMC%2Fac8d9oVs0uCQc7Pe%2F0w6GRp4NxVb3JWVQfjUCTURI2lvOjFdbw%2FH3zrkiw5Iw63SboHAzPwZkBvtGqvi0iMBnaYePllx%2B3mAT6Dzdiv6ZKuAsr35LuNodJhYrHzn4LpoI9s5spgVEzMjNtWiSuzDpQg3UDerO%2BMlKDYP783BjQZvT8h9SfmnPnbZ%2FZCo92cmKOxls4kL6X%2BCAHvWxedv2YXZTF3AzywC0cgXMkPVgbQlcnwO26hAR5R2ZldDgr%2Bnooo9efPmTfxKiZVVEjH7KrBX7BVT6%2F5kyYpmqr%2F7nibdu3RAOzoDwqJ5kBdzyzVKMW1hgu5V%2BRlImzXkCAMeczrFghxusrmbqW8Rbl7xlE5UER7NGDmRFYJt7LIhGVroavWFGtzRTPwrGRCPU7d7YN8CD1jMaVixdQalH3uMNbVv5q%2B481IBd3wOd9HT90WsHJQxWJZ%2Bl73nDCOkx89fl82iM%2Fwlt9rQwihxZ8FubILTt7hN2eCglVA0StY%2F2P3z9NM%2FVa9vWSj4zU7TOlGAET%2BmuU6Ej2powOqxoo8IW%2BY8%2FFTAwwZa%2ByQY6pgEZENARFjw%2FItapEo3bEzqI7GbXVO80t58FGDySsajJ6DGUo2jYSmq7bSw23uxup%2FAZUVcKdo9OFwjDUi3JY8nwoqBro6HWPpQNAzX4x%2Bg6FL2QT1Vc1YLkZbC5WLTUFOfBbdl%2BdJH376kTZTAlq2J5OJU9IYBuHYrNOprUaG9JK1sPu6OkWDRAzB4dAz76W1OtshX86%2FSv6aCpV0XMITNCfgrAIZ6K&X-Amz-Signature=563ae14e8cf5878ff3e18a87883293be807d4f28d5891d05e0134093c347624e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZ3CP65%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGZR8B%2BRrdRFz5qvpITRlOIQrt02B%2BLZYvjrIOOxDTyrAiAJqorSKFGuZ1IMsAvMO6KIUJjbeI%2FqkUPTzytn6M%2B3eyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMluGVuc1m5bQ9yhKlKtwDnqDEmAz2Xb9tBnLVwkJshKx5KilqferygdQrSMlKhYmLK8THEuobOrSygb%2FM5C6Z7uVcwsguMC%2Fac8d9oVs0uCQc7Pe%2F0w6GRp4NxVb3JWVQfjUCTURI2lvOjFdbw%2FH3zrkiw5Iw63SboHAzPwZkBvtGqvi0iMBnaYePllx%2B3mAT6Dzdiv6ZKuAsr35LuNodJhYrHzn4LpoI9s5spgVEzMjNtWiSuzDpQg3UDerO%2BMlKDYP783BjQZvT8h9SfmnPnbZ%2FZCo92cmKOxls4kL6X%2BCAHvWxedv2YXZTF3AzywC0cgXMkPVgbQlcnwO26hAR5R2ZldDgr%2Bnooo9efPmTfxKiZVVEjH7KrBX7BVT6%2F5kyYpmqr%2F7nibdu3RAOzoDwqJ5kBdzyzVKMW1hgu5V%2BRlImzXkCAMeczrFghxusrmbqW8Rbl7xlE5UER7NGDmRFYJt7LIhGVroavWFGtzRTPwrGRCPU7d7YN8CD1jMaVixdQalH3uMNbVv5q%2B481IBd3wOd9HT90WsHJQxWJZ%2Bl73nDCOkx89fl82iM%2Fwlt9rQwihxZ8FubILTt7hN2eCglVA0StY%2F2P3z9NM%2FVa9vWSj4zU7TOlGAET%2BmuU6Ej2powOqxoo8IW%2BY8%2FFTAwwZa%2ByQY6pgEZENARFjw%2FItapEo3bEzqI7GbXVO80t58FGDySsajJ6DGUo2jYSmq7bSw23uxup%2FAZUVcKdo9OFwjDUi3JY8nwoqBro6HWPpQNAzX4x%2Bg6FL2QT1Vc1YLkZbC5WLTUFOfBbdl%2BdJH376kTZTAlq2J5OJU9IYBuHYrNOprUaG9JK1sPu6OkWDRAzB4dAz76W1OtshX86%2FSv6aCpV0XMITNCfgrAIZ6K&X-Amz-Signature=ffef30edfbc58d3a1adbe464574b1a6368e5046d0bf8c51808d5a786ead0f700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZ3CP65%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGZR8B%2BRrdRFz5qvpITRlOIQrt02B%2BLZYvjrIOOxDTyrAiAJqorSKFGuZ1IMsAvMO6KIUJjbeI%2FqkUPTzytn6M%2B3eyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMluGVuc1m5bQ9yhKlKtwDnqDEmAz2Xb9tBnLVwkJshKx5KilqferygdQrSMlKhYmLK8THEuobOrSygb%2FM5C6Z7uVcwsguMC%2Fac8d9oVs0uCQc7Pe%2F0w6GRp4NxVb3JWVQfjUCTURI2lvOjFdbw%2FH3zrkiw5Iw63SboHAzPwZkBvtGqvi0iMBnaYePllx%2B3mAT6Dzdiv6ZKuAsr35LuNodJhYrHzn4LpoI9s5spgVEzMjNtWiSuzDpQg3UDerO%2BMlKDYP783BjQZvT8h9SfmnPnbZ%2FZCo92cmKOxls4kL6X%2BCAHvWxedv2YXZTF3AzywC0cgXMkPVgbQlcnwO26hAR5R2ZldDgr%2Bnooo9efPmTfxKiZVVEjH7KrBX7BVT6%2F5kyYpmqr%2F7nibdu3RAOzoDwqJ5kBdzyzVKMW1hgu5V%2BRlImzXkCAMeczrFghxusrmbqW8Rbl7xlE5UER7NGDmRFYJt7LIhGVroavWFGtzRTPwrGRCPU7d7YN8CD1jMaVixdQalH3uMNbVv5q%2B481IBd3wOd9HT90WsHJQxWJZ%2Bl73nDCOkx89fl82iM%2Fwlt9rQwihxZ8FubILTt7hN2eCglVA0StY%2F2P3z9NM%2FVa9vWSj4zU7TOlGAET%2BmuU6Ej2powOqxoo8IW%2BY8%2FFTAwwZa%2ByQY6pgEZENARFjw%2FItapEo3bEzqI7GbXVO80t58FGDySsajJ6DGUo2jYSmq7bSw23uxup%2FAZUVcKdo9OFwjDUi3JY8nwoqBro6HWPpQNAzX4x%2Bg6FL2QT1Vc1YLkZbC5WLTUFOfBbdl%2BdJH376kTZTAlq2J5OJU9IYBuHYrNOprUaG9JK1sPu6OkWDRAzB4dAz76W1OtshX86%2FSv6aCpV0XMITNCfgrAIZ6K&X-Amz-Signature=c04152bdfb97997d98a1a48740d8150b7c0ae7d18cad069ff46910238cf16b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZ3CP65%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGZR8B%2BRrdRFz5qvpITRlOIQrt02B%2BLZYvjrIOOxDTyrAiAJqorSKFGuZ1IMsAvMO6KIUJjbeI%2FqkUPTzytn6M%2B3eyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMluGVuc1m5bQ9yhKlKtwDnqDEmAz2Xb9tBnLVwkJshKx5KilqferygdQrSMlKhYmLK8THEuobOrSygb%2FM5C6Z7uVcwsguMC%2Fac8d9oVs0uCQc7Pe%2F0w6GRp4NxVb3JWVQfjUCTURI2lvOjFdbw%2FH3zrkiw5Iw63SboHAzPwZkBvtGqvi0iMBnaYePllx%2B3mAT6Dzdiv6ZKuAsr35LuNodJhYrHzn4LpoI9s5spgVEzMjNtWiSuzDpQg3UDerO%2BMlKDYP783BjQZvT8h9SfmnPnbZ%2FZCo92cmKOxls4kL6X%2BCAHvWxedv2YXZTF3AzywC0cgXMkPVgbQlcnwO26hAR5R2ZldDgr%2Bnooo9efPmTfxKiZVVEjH7KrBX7BVT6%2F5kyYpmqr%2F7nibdu3RAOzoDwqJ5kBdzyzVKMW1hgu5V%2BRlImzXkCAMeczrFghxusrmbqW8Rbl7xlE5UER7NGDmRFYJt7LIhGVroavWFGtzRTPwrGRCPU7d7YN8CD1jMaVixdQalH3uMNbVv5q%2B481IBd3wOd9HT90WsHJQxWJZ%2Bl73nDCOkx89fl82iM%2Fwlt9rQwihxZ8FubILTt7hN2eCglVA0StY%2F2P3z9NM%2FVa9vWSj4zU7TOlGAET%2BmuU6Ej2powOqxoo8IW%2BY8%2FFTAwwZa%2ByQY6pgEZENARFjw%2FItapEo3bEzqI7GbXVO80t58FGDySsajJ6DGUo2jYSmq7bSw23uxup%2FAZUVcKdo9OFwjDUi3JY8nwoqBro6HWPpQNAzX4x%2Bg6FL2QT1Vc1YLkZbC5WLTUFOfBbdl%2BdJH376kTZTAlq2J5OJU9IYBuHYrNOprUaG9JK1sPu6OkWDRAzB4dAz76W1OtshX86%2FSv6aCpV0XMITNCfgrAIZ6K&X-Amz-Signature=fa85c5f56674f50f62007455c139caeb38cd97af126220cf56d0950e459c0588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZ3CP65%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGZR8B%2BRrdRFz5qvpITRlOIQrt02B%2BLZYvjrIOOxDTyrAiAJqorSKFGuZ1IMsAvMO6KIUJjbeI%2FqkUPTzytn6M%2B3eyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMluGVuc1m5bQ9yhKlKtwDnqDEmAz2Xb9tBnLVwkJshKx5KilqferygdQrSMlKhYmLK8THEuobOrSygb%2FM5C6Z7uVcwsguMC%2Fac8d9oVs0uCQc7Pe%2F0w6GRp4NxVb3JWVQfjUCTURI2lvOjFdbw%2FH3zrkiw5Iw63SboHAzPwZkBvtGqvi0iMBnaYePllx%2B3mAT6Dzdiv6ZKuAsr35LuNodJhYrHzn4LpoI9s5spgVEzMjNtWiSuzDpQg3UDerO%2BMlKDYP783BjQZvT8h9SfmnPnbZ%2FZCo92cmKOxls4kL6X%2BCAHvWxedv2YXZTF3AzywC0cgXMkPVgbQlcnwO26hAR5R2ZldDgr%2Bnooo9efPmTfxKiZVVEjH7KrBX7BVT6%2F5kyYpmqr%2F7nibdu3RAOzoDwqJ5kBdzyzVKMW1hgu5V%2BRlImzXkCAMeczrFghxusrmbqW8Rbl7xlE5UER7NGDmRFYJt7LIhGVroavWFGtzRTPwrGRCPU7d7YN8CD1jMaVixdQalH3uMNbVv5q%2B481IBd3wOd9HT90WsHJQxWJZ%2Bl73nDCOkx89fl82iM%2Fwlt9rQwihxZ8FubILTt7hN2eCglVA0StY%2F2P3z9NM%2FVa9vWSj4zU7TOlGAET%2BmuU6Ej2powOqxoo8IW%2BY8%2FFTAwwZa%2ByQY6pgEZENARFjw%2FItapEo3bEzqI7GbXVO80t58FGDySsajJ6DGUo2jYSmq7bSw23uxup%2FAZUVcKdo9OFwjDUi3JY8nwoqBro6HWPpQNAzX4x%2Bg6FL2QT1Vc1YLkZbC5WLTUFOfBbdl%2BdJH376kTZTAlq2J5OJU9IYBuHYrNOprUaG9JK1sPu6OkWDRAzB4dAz76W1OtshX86%2FSv6aCpV0XMITNCfgrAIZ6K&X-Amz-Signature=74891c38ec330e136cc97bac4f662892cf4eec14c06188690bc221338b6ba85e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZ3CP65%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGZR8B%2BRrdRFz5qvpITRlOIQrt02B%2BLZYvjrIOOxDTyrAiAJqorSKFGuZ1IMsAvMO6KIUJjbeI%2FqkUPTzytn6M%2B3eyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMluGVuc1m5bQ9yhKlKtwDnqDEmAz2Xb9tBnLVwkJshKx5KilqferygdQrSMlKhYmLK8THEuobOrSygb%2FM5C6Z7uVcwsguMC%2Fac8d9oVs0uCQc7Pe%2F0w6GRp4NxVb3JWVQfjUCTURI2lvOjFdbw%2FH3zrkiw5Iw63SboHAzPwZkBvtGqvi0iMBnaYePllx%2B3mAT6Dzdiv6ZKuAsr35LuNodJhYrHzn4LpoI9s5spgVEzMjNtWiSuzDpQg3UDerO%2BMlKDYP783BjQZvT8h9SfmnPnbZ%2FZCo92cmKOxls4kL6X%2BCAHvWxedv2YXZTF3AzywC0cgXMkPVgbQlcnwO26hAR5R2ZldDgr%2Bnooo9efPmTfxKiZVVEjH7KrBX7BVT6%2F5kyYpmqr%2F7nibdu3RAOzoDwqJ5kBdzyzVKMW1hgu5V%2BRlImzXkCAMeczrFghxusrmbqW8Rbl7xlE5UER7NGDmRFYJt7LIhGVroavWFGtzRTPwrGRCPU7d7YN8CD1jMaVixdQalH3uMNbVv5q%2B481IBd3wOd9HT90WsHJQxWJZ%2Bl73nDCOkx89fl82iM%2Fwlt9rQwihxZ8FubILTt7hN2eCglVA0StY%2F2P3z9NM%2FVa9vWSj4zU7TOlGAET%2BmuU6Ej2powOqxoo8IW%2BY8%2FFTAwwZa%2ByQY6pgEZENARFjw%2FItapEo3bEzqI7GbXVO80t58FGDySsajJ6DGUo2jYSmq7bSw23uxup%2FAZUVcKdo9OFwjDUi3JY8nwoqBro6HWPpQNAzX4x%2Bg6FL2QT1Vc1YLkZbC5WLTUFOfBbdl%2BdJH376kTZTAlq2J5OJU9IYBuHYrNOprUaG9JK1sPu6OkWDRAzB4dAz76W1OtshX86%2FSv6aCpV0XMITNCfgrAIZ6K&X-Amz-Signature=071ed6302898f1b0566dde4d27f42ee668130607c2f259d3b7b752132270b2fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZ3CP65%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGZR8B%2BRrdRFz5qvpITRlOIQrt02B%2BLZYvjrIOOxDTyrAiAJqorSKFGuZ1IMsAvMO6KIUJjbeI%2FqkUPTzytn6M%2B3eyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMluGVuc1m5bQ9yhKlKtwDnqDEmAz2Xb9tBnLVwkJshKx5KilqferygdQrSMlKhYmLK8THEuobOrSygb%2FM5C6Z7uVcwsguMC%2Fac8d9oVs0uCQc7Pe%2F0w6GRp4NxVb3JWVQfjUCTURI2lvOjFdbw%2FH3zrkiw5Iw63SboHAzPwZkBvtGqvi0iMBnaYePllx%2B3mAT6Dzdiv6ZKuAsr35LuNodJhYrHzn4LpoI9s5spgVEzMjNtWiSuzDpQg3UDerO%2BMlKDYP783BjQZvT8h9SfmnPnbZ%2FZCo92cmKOxls4kL6X%2BCAHvWxedv2YXZTF3AzywC0cgXMkPVgbQlcnwO26hAR5R2ZldDgr%2Bnooo9efPmTfxKiZVVEjH7KrBX7BVT6%2F5kyYpmqr%2F7nibdu3RAOzoDwqJ5kBdzyzVKMW1hgu5V%2BRlImzXkCAMeczrFghxusrmbqW8Rbl7xlE5UER7NGDmRFYJt7LIhGVroavWFGtzRTPwrGRCPU7d7YN8CD1jMaVixdQalH3uMNbVv5q%2B481IBd3wOd9HT90WsHJQxWJZ%2Bl73nDCOkx89fl82iM%2Fwlt9rQwihxZ8FubILTt7hN2eCglVA0StY%2F2P3z9NM%2FVa9vWSj4zU7TOlGAET%2BmuU6Ej2powOqxoo8IW%2BY8%2FFTAwwZa%2ByQY6pgEZENARFjw%2FItapEo3bEzqI7GbXVO80t58FGDySsajJ6DGUo2jYSmq7bSw23uxup%2FAZUVcKdo9OFwjDUi3JY8nwoqBro6HWPpQNAzX4x%2Bg6FL2QT1Vc1YLkZbC5WLTUFOfBbdl%2BdJH376kTZTAlq2J5OJU9IYBuHYrNOprUaG9JK1sPu6OkWDRAzB4dAz76W1OtshX86%2FSv6aCpV0XMITNCfgrAIZ6K&X-Amz-Signature=b3105236b2eb9bdc9c88fb9ca0f31b9ddf05770b1c079b081e5017e57ef85caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZ3CP65%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGZR8B%2BRrdRFz5qvpITRlOIQrt02B%2BLZYvjrIOOxDTyrAiAJqorSKFGuZ1IMsAvMO6KIUJjbeI%2FqkUPTzytn6M%2B3eyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMluGVuc1m5bQ9yhKlKtwDnqDEmAz2Xb9tBnLVwkJshKx5KilqferygdQrSMlKhYmLK8THEuobOrSygb%2FM5C6Z7uVcwsguMC%2Fac8d9oVs0uCQc7Pe%2F0w6GRp4NxVb3JWVQfjUCTURI2lvOjFdbw%2FH3zrkiw5Iw63SboHAzPwZkBvtGqvi0iMBnaYePllx%2B3mAT6Dzdiv6ZKuAsr35LuNodJhYrHzn4LpoI9s5spgVEzMjNtWiSuzDpQg3UDerO%2BMlKDYP783BjQZvT8h9SfmnPnbZ%2FZCo92cmKOxls4kL6X%2BCAHvWxedv2YXZTF3AzywC0cgXMkPVgbQlcnwO26hAR5R2ZldDgr%2Bnooo9efPmTfxKiZVVEjH7KrBX7BVT6%2F5kyYpmqr%2F7nibdu3RAOzoDwqJ5kBdzyzVKMW1hgu5V%2BRlImzXkCAMeczrFghxusrmbqW8Rbl7xlE5UER7NGDmRFYJt7LIhGVroavWFGtzRTPwrGRCPU7d7YN8CD1jMaVixdQalH3uMNbVv5q%2B481IBd3wOd9HT90WsHJQxWJZ%2Bl73nDCOkx89fl82iM%2Fwlt9rQwihxZ8FubILTt7hN2eCglVA0StY%2F2P3z9NM%2FVa9vWSj4zU7TOlGAET%2BmuU6Ej2powOqxoo8IW%2BY8%2FFTAwwZa%2ByQY6pgEZENARFjw%2FItapEo3bEzqI7GbXVO80t58FGDySsajJ6DGUo2jYSmq7bSw23uxup%2FAZUVcKdo9OFwjDUi3JY8nwoqBro6HWPpQNAzX4x%2Bg6FL2QT1Vc1YLkZbC5WLTUFOfBbdl%2BdJH376kTZTAlq2J5OJU9IYBuHYrNOprUaG9JK1sPu6OkWDRAzB4dAz76W1OtshX86%2FSv6aCpV0XMITNCfgrAIZ6K&X-Amz-Signature=6fe3364fffc8416c3e1ab7577b70057f728c76c8c021258ea2ca817a0db2833c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZ3CP65%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGZR8B%2BRrdRFz5qvpITRlOIQrt02B%2BLZYvjrIOOxDTyrAiAJqorSKFGuZ1IMsAvMO6KIUJjbeI%2FqkUPTzytn6M%2B3eyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMluGVuc1m5bQ9yhKlKtwDnqDEmAz2Xb9tBnLVwkJshKx5KilqferygdQrSMlKhYmLK8THEuobOrSygb%2FM5C6Z7uVcwsguMC%2Fac8d9oVs0uCQc7Pe%2F0w6GRp4NxVb3JWVQfjUCTURI2lvOjFdbw%2FH3zrkiw5Iw63SboHAzPwZkBvtGqvi0iMBnaYePllx%2B3mAT6Dzdiv6ZKuAsr35LuNodJhYrHzn4LpoI9s5spgVEzMjNtWiSuzDpQg3UDerO%2BMlKDYP783BjQZvT8h9SfmnPnbZ%2FZCo92cmKOxls4kL6X%2BCAHvWxedv2YXZTF3AzywC0cgXMkPVgbQlcnwO26hAR5R2ZldDgr%2Bnooo9efPmTfxKiZVVEjH7KrBX7BVT6%2F5kyYpmqr%2F7nibdu3RAOzoDwqJ5kBdzyzVKMW1hgu5V%2BRlImzXkCAMeczrFghxusrmbqW8Rbl7xlE5UER7NGDmRFYJt7LIhGVroavWFGtzRTPwrGRCPU7d7YN8CD1jMaVixdQalH3uMNbVv5q%2B481IBd3wOd9HT90WsHJQxWJZ%2Bl73nDCOkx89fl82iM%2Fwlt9rQwihxZ8FubILTt7hN2eCglVA0StY%2F2P3z9NM%2FVa9vWSj4zU7TOlGAET%2BmuU6Ej2powOqxoo8IW%2BY8%2FFTAwwZa%2ByQY6pgEZENARFjw%2FItapEo3bEzqI7GbXVO80t58FGDySsajJ6DGUo2jYSmq7bSw23uxup%2FAZUVcKdo9OFwjDUi3JY8nwoqBro6HWPpQNAzX4x%2Bg6FL2QT1Vc1YLkZbC5WLTUFOfBbdl%2BdJH376kTZTAlq2J5OJU9IYBuHYrNOprUaG9JK1sPu6OkWDRAzB4dAz76W1OtshX86%2FSv6aCpV0XMITNCfgrAIZ6K&X-Amz-Signature=c5aa3769352a8a401b94244d72f85b87db7ccfef54488b5a09737e26e83f277a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZ3CP65%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGZR8B%2BRrdRFz5qvpITRlOIQrt02B%2BLZYvjrIOOxDTyrAiAJqorSKFGuZ1IMsAvMO6KIUJjbeI%2FqkUPTzytn6M%2B3eyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMluGVuc1m5bQ9yhKlKtwDnqDEmAz2Xb9tBnLVwkJshKx5KilqferygdQrSMlKhYmLK8THEuobOrSygb%2FM5C6Z7uVcwsguMC%2Fac8d9oVs0uCQc7Pe%2F0w6GRp4NxVb3JWVQfjUCTURI2lvOjFdbw%2FH3zrkiw5Iw63SboHAzPwZkBvtGqvi0iMBnaYePllx%2B3mAT6Dzdiv6ZKuAsr35LuNodJhYrHzn4LpoI9s5spgVEzMjNtWiSuzDpQg3UDerO%2BMlKDYP783BjQZvT8h9SfmnPnbZ%2FZCo92cmKOxls4kL6X%2BCAHvWxedv2YXZTF3AzywC0cgXMkPVgbQlcnwO26hAR5R2ZldDgr%2Bnooo9efPmTfxKiZVVEjH7KrBX7BVT6%2F5kyYpmqr%2F7nibdu3RAOzoDwqJ5kBdzyzVKMW1hgu5V%2BRlImzXkCAMeczrFghxusrmbqW8Rbl7xlE5UER7NGDmRFYJt7LIhGVroavWFGtzRTPwrGRCPU7d7YN8CD1jMaVixdQalH3uMNbVv5q%2B481IBd3wOd9HT90WsHJQxWJZ%2Bl73nDCOkx89fl82iM%2Fwlt9rQwihxZ8FubILTt7hN2eCglVA0StY%2F2P3z9NM%2FVa9vWSj4zU7TOlGAET%2BmuU6Ej2powOqxoo8IW%2BY8%2FFTAwwZa%2ByQY6pgEZENARFjw%2FItapEo3bEzqI7GbXVO80t58FGDySsajJ6DGUo2jYSmq7bSw23uxup%2FAZUVcKdo9OFwjDUi3JY8nwoqBro6HWPpQNAzX4x%2Bg6FL2QT1Vc1YLkZbC5WLTUFOfBbdl%2BdJH376kTZTAlq2J5OJU9IYBuHYrNOprUaG9JK1sPu6OkWDRAzB4dAz76W1OtshX86%2FSv6aCpV0XMITNCfgrAIZ6K&X-Amz-Signature=bca041735aae12ea9676b58743b2dbc7c7cf9d516a7969bc4ed7622ea22d3472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZ3CP65%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGZR8B%2BRrdRFz5qvpITRlOIQrt02B%2BLZYvjrIOOxDTyrAiAJqorSKFGuZ1IMsAvMO6KIUJjbeI%2FqkUPTzytn6M%2B3eyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMluGVuc1m5bQ9yhKlKtwDnqDEmAz2Xb9tBnLVwkJshKx5KilqferygdQrSMlKhYmLK8THEuobOrSygb%2FM5C6Z7uVcwsguMC%2Fac8d9oVs0uCQc7Pe%2F0w6GRp4NxVb3JWVQfjUCTURI2lvOjFdbw%2FH3zrkiw5Iw63SboHAzPwZkBvtGqvi0iMBnaYePllx%2B3mAT6Dzdiv6ZKuAsr35LuNodJhYrHzn4LpoI9s5spgVEzMjNtWiSuzDpQg3UDerO%2BMlKDYP783BjQZvT8h9SfmnPnbZ%2FZCo92cmKOxls4kL6X%2BCAHvWxedv2YXZTF3AzywC0cgXMkPVgbQlcnwO26hAR5R2ZldDgr%2Bnooo9efPmTfxKiZVVEjH7KrBX7BVT6%2F5kyYpmqr%2F7nibdu3RAOzoDwqJ5kBdzyzVKMW1hgu5V%2BRlImzXkCAMeczrFghxusrmbqW8Rbl7xlE5UER7NGDmRFYJt7LIhGVroavWFGtzRTPwrGRCPU7d7YN8CD1jMaVixdQalH3uMNbVv5q%2B481IBd3wOd9HT90WsHJQxWJZ%2Bl73nDCOkx89fl82iM%2Fwlt9rQwihxZ8FubILTt7hN2eCglVA0StY%2F2P3z9NM%2FVa9vWSj4zU7TOlGAET%2BmuU6Ej2powOqxoo8IW%2BY8%2FFTAwwZa%2ByQY6pgEZENARFjw%2FItapEo3bEzqI7GbXVO80t58FGDySsajJ6DGUo2jYSmq7bSw23uxup%2FAZUVcKdo9OFwjDUi3JY8nwoqBro6HWPpQNAzX4x%2Bg6FL2QT1Vc1YLkZbC5WLTUFOfBbdl%2BdJH376kTZTAlq2J5OJU9IYBuHYrNOprUaG9JK1sPu6OkWDRAzB4dAz76W1OtshX86%2FSv6aCpV0XMITNCfgrAIZ6K&X-Amz-Signature=604ccf07f384247c51b03cd5cd441dd4b366d7d9ef50a5f0e3ffaee53b159fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZ3CP65%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGZR8B%2BRrdRFz5qvpITRlOIQrt02B%2BLZYvjrIOOxDTyrAiAJqorSKFGuZ1IMsAvMO6KIUJjbeI%2FqkUPTzytn6M%2B3eyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMluGVuc1m5bQ9yhKlKtwDnqDEmAz2Xb9tBnLVwkJshKx5KilqferygdQrSMlKhYmLK8THEuobOrSygb%2FM5C6Z7uVcwsguMC%2Fac8d9oVs0uCQc7Pe%2F0w6GRp4NxVb3JWVQfjUCTURI2lvOjFdbw%2FH3zrkiw5Iw63SboHAzPwZkBvtGqvi0iMBnaYePllx%2B3mAT6Dzdiv6ZKuAsr35LuNodJhYrHzn4LpoI9s5spgVEzMjNtWiSuzDpQg3UDerO%2BMlKDYP783BjQZvT8h9SfmnPnbZ%2FZCo92cmKOxls4kL6X%2BCAHvWxedv2YXZTF3AzywC0cgXMkPVgbQlcnwO26hAR5R2ZldDgr%2Bnooo9efPmTfxKiZVVEjH7KrBX7BVT6%2F5kyYpmqr%2F7nibdu3RAOzoDwqJ5kBdzyzVKMW1hgu5V%2BRlImzXkCAMeczrFghxusrmbqW8Rbl7xlE5UER7NGDmRFYJt7LIhGVroavWFGtzRTPwrGRCPU7d7YN8CD1jMaVixdQalH3uMNbVv5q%2B481IBd3wOd9HT90WsHJQxWJZ%2Bl73nDCOkx89fl82iM%2Fwlt9rQwihxZ8FubILTt7hN2eCglVA0StY%2F2P3z9NM%2FVa9vWSj4zU7TOlGAET%2BmuU6Ej2powOqxoo8IW%2BY8%2FFTAwwZa%2ByQY6pgEZENARFjw%2FItapEo3bEzqI7GbXVO80t58FGDySsajJ6DGUo2jYSmq7bSw23uxup%2FAZUVcKdo9OFwjDUi3JY8nwoqBro6HWPpQNAzX4x%2Bg6FL2QT1Vc1YLkZbC5WLTUFOfBbdl%2BdJH376kTZTAlq2J5OJU9IYBuHYrNOprUaG9JK1sPu6OkWDRAzB4dAz76W1OtshX86%2FSv6aCpV0XMITNCfgrAIZ6K&X-Amz-Signature=a3957d4d0cea99fdc3d94e8f7025417c38ecfcbe8ee5324109a35f4dfffc48cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZ3CP65%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGZR8B%2BRrdRFz5qvpITRlOIQrt02B%2BLZYvjrIOOxDTyrAiAJqorSKFGuZ1IMsAvMO6KIUJjbeI%2FqkUPTzytn6M%2B3eyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMluGVuc1m5bQ9yhKlKtwDnqDEmAz2Xb9tBnLVwkJshKx5KilqferygdQrSMlKhYmLK8THEuobOrSygb%2FM5C6Z7uVcwsguMC%2Fac8d9oVs0uCQc7Pe%2F0w6GRp4NxVb3JWVQfjUCTURI2lvOjFdbw%2FH3zrkiw5Iw63SboHAzPwZkBvtGqvi0iMBnaYePllx%2B3mAT6Dzdiv6ZKuAsr35LuNodJhYrHzn4LpoI9s5spgVEzMjNtWiSuzDpQg3UDerO%2BMlKDYP783BjQZvT8h9SfmnPnbZ%2FZCo92cmKOxls4kL6X%2BCAHvWxedv2YXZTF3AzywC0cgXMkPVgbQlcnwO26hAR5R2ZldDgr%2Bnooo9efPmTfxKiZVVEjH7KrBX7BVT6%2F5kyYpmqr%2F7nibdu3RAOzoDwqJ5kBdzyzVKMW1hgu5V%2BRlImzXkCAMeczrFghxusrmbqW8Rbl7xlE5UER7NGDmRFYJt7LIhGVroavWFGtzRTPwrGRCPU7d7YN8CD1jMaVixdQalH3uMNbVv5q%2B481IBd3wOd9HT90WsHJQxWJZ%2Bl73nDCOkx89fl82iM%2Fwlt9rQwihxZ8FubILTt7hN2eCglVA0StY%2F2P3z9NM%2FVa9vWSj4zU7TOlGAET%2BmuU6Ej2powOqxoo8IW%2BY8%2FFTAwwZa%2ByQY6pgEZENARFjw%2FItapEo3bEzqI7GbXVO80t58FGDySsajJ6DGUo2jYSmq7bSw23uxup%2FAZUVcKdo9OFwjDUi3JY8nwoqBro6HWPpQNAzX4x%2Bg6FL2QT1Vc1YLkZbC5WLTUFOfBbdl%2BdJH376kTZTAlq2J5OJU9IYBuHYrNOprUaG9JK1sPu6OkWDRAzB4dAz76W1OtshX86%2FSv6aCpV0XMITNCfgrAIZ6K&X-Amz-Signature=28e37a210fc084e198a0a9f3752f0803f863869e5f129cbac9f9b9fba24a29dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
