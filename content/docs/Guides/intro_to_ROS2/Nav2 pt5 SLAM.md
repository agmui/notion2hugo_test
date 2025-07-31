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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQVL3M7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLn2yFC3Xim9YsPhajnulPzZbSb5bGE%2FBQUPuCGMvvnAiAePsJBdSsJXlLmSiSrBLAfZbgeCskIKo7rjliex%2Brz0SqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu6GanQl%2B1dd3yBKKtwD2sVV4OqbB1dldsOU2U71c0Pe7f85y%2Fs%2BuBEYkLPf6f%2FMNyT6H9lIWK3M8dYx0tsls9P4wu1BDXjU2huEpPhFhCj1zTLwSxiJvMdPxFRdQa6QPb582JvGEdIJ3YMga7DfD6pXTKYmcOtmqs%2BslAb7uT%2FQ8NX3fY8Y0JH0PHKXqqv60SfpGKDtIznxybh5hluXEJaNvNxN%2F8rxT2WKhIANyKVwEWqnkb4Oyeav4Udyhu4YNKiVvsCPgmO5%2FBJxTJ5MtlA948PNZ6AKHS%2BOgrtppDHkk%2FZpNROlHJ%2FgzmeVaBnUeQa00N0C2dAEjmR4TuvKB8NeLNCaTp1bjzJbqNr7RvZPKM%2BtCmC%2FYmspWF4wtQxaRN%2Fa6q%2FnJJb7u63vebk2%2B5sffEOs4Z3ISPyUhyN72NP4iwOPfz4H6eG4dOyJuYKj6WrKMC9UDEn%2BfEcc2v%2FVNJWnLlDvZ2DI9exBMnCWP3GyleP6IF%2FRZWXUlyK%2FiP%2FhXnyY9OZ%2BJrgpGwlqttKY0Cdqri8ve8%2FqsOyqcMAd1bHX5LYpVqOBNu%2BoHHZONARYFdDX7%2BaBjjqvQp5YlPeWZokGWM1xVfJWZFverSLvO9ZDe20XHvnT3APN8IKJRu3XyhSXUe%2FE5FUqyR4wqc2vxAY6pgFEI0RFkf%2FKAW%2BfPiVtISpyYCjFF1YRoxV1YPkXN3IQqDMelVgl2Jbn4BfTBvZFRYlWZEHHHnfq%2B8HNktvnmeaPMqc7dJ7zDluZFocZcinm9xzN82gPmrdtX5LtPdNA55lHjjHyUG%2FaM%2B5aMStt1tTwUAQtqoNOdMkFIwOSNpG2yEDXBQLLspCjZpuK%2BNYoFgo380z5ut52Lj25xmyCJfXEJlISHqUv&X-Amz-Signature=bc22a7233da5fd2bc8fe751acbfedb49cf22f7d138e253da4989b735c8ef49c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQVL3M7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLn2yFC3Xim9YsPhajnulPzZbSb5bGE%2FBQUPuCGMvvnAiAePsJBdSsJXlLmSiSrBLAfZbgeCskIKo7rjliex%2Brz0SqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu6GanQl%2B1dd3yBKKtwD2sVV4OqbB1dldsOU2U71c0Pe7f85y%2Fs%2BuBEYkLPf6f%2FMNyT6H9lIWK3M8dYx0tsls9P4wu1BDXjU2huEpPhFhCj1zTLwSxiJvMdPxFRdQa6QPb582JvGEdIJ3YMga7DfD6pXTKYmcOtmqs%2BslAb7uT%2FQ8NX3fY8Y0JH0PHKXqqv60SfpGKDtIznxybh5hluXEJaNvNxN%2F8rxT2WKhIANyKVwEWqnkb4Oyeav4Udyhu4YNKiVvsCPgmO5%2FBJxTJ5MtlA948PNZ6AKHS%2BOgrtppDHkk%2FZpNROlHJ%2FgzmeVaBnUeQa00N0C2dAEjmR4TuvKB8NeLNCaTp1bjzJbqNr7RvZPKM%2BtCmC%2FYmspWF4wtQxaRN%2Fa6q%2FnJJb7u63vebk2%2B5sffEOs4Z3ISPyUhyN72NP4iwOPfz4H6eG4dOyJuYKj6WrKMC9UDEn%2BfEcc2v%2FVNJWnLlDvZ2DI9exBMnCWP3GyleP6IF%2FRZWXUlyK%2FiP%2FhXnyY9OZ%2BJrgpGwlqttKY0Cdqri8ve8%2FqsOyqcMAd1bHX5LYpVqOBNu%2BoHHZONARYFdDX7%2BaBjjqvQp5YlPeWZokGWM1xVfJWZFverSLvO9ZDe20XHvnT3APN8IKJRu3XyhSXUe%2FE5FUqyR4wqc2vxAY6pgFEI0RFkf%2FKAW%2BfPiVtISpyYCjFF1YRoxV1YPkXN3IQqDMelVgl2Jbn4BfTBvZFRYlWZEHHHnfq%2B8HNktvnmeaPMqc7dJ7zDluZFocZcinm9xzN82gPmrdtX5LtPdNA55lHjjHyUG%2FaM%2B5aMStt1tTwUAQtqoNOdMkFIwOSNpG2yEDXBQLLspCjZpuK%2BNYoFgo380z5ut52Lj25xmyCJfXEJlISHqUv&X-Amz-Signature=295fb8af975ef97aea67e1a75d01e48cad8af1ed86b5490d132e251c3f7f391e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQVL3M7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLn2yFC3Xim9YsPhajnulPzZbSb5bGE%2FBQUPuCGMvvnAiAePsJBdSsJXlLmSiSrBLAfZbgeCskIKo7rjliex%2Brz0SqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu6GanQl%2B1dd3yBKKtwD2sVV4OqbB1dldsOU2U71c0Pe7f85y%2Fs%2BuBEYkLPf6f%2FMNyT6H9lIWK3M8dYx0tsls9P4wu1BDXjU2huEpPhFhCj1zTLwSxiJvMdPxFRdQa6QPb582JvGEdIJ3YMga7DfD6pXTKYmcOtmqs%2BslAb7uT%2FQ8NX3fY8Y0JH0PHKXqqv60SfpGKDtIznxybh5hluXEJaNvNxN%2F8rxT2WKhIANyKVwEWqnkb4Oyeav4Udyhu4YNKiVvsCPgmO5%2FBJxTJ5MtlA948PNZ6AKHS%2BOgrtppDHkk%2FZpNROlHJ%2FgzmeVaBnUeQa00N0C2dAEjmR4TuvKB8NeLNCaTp1bjzJbqNr7RvZPKM%2BtCmC%2FYmspWF4wtQxaRN%2Fa6q%2FnJJb7u63vebk2%2B5sffEOs4Z3ISPyUhyN72NP4iwOPfz4H6eG4dOyJuYKj6WrKMC9UDEn%2BfEcc2v%2FVNJWnLlDvZ2DI9exBMnCWP3GyleP6IF%2FRZWXUlyK%2FiP%2FhXnyY9OZ%2BJrgpGwlqttKY0Cdqri8ve8%2FqsOyqcMAd1bHX5LYpVqOBNu%2BoHHZONARYFdDX7%2BaBjjqvQp5YlPeWZokGWM1xVfJWZFverSLvO9ZDe20XHvnT3APN8IKJRu3XyhSXUe%2FE5FUqyR4wqc2vxAY6pgFEI0RFkf%2FKAW%2BfPiVtISpyYCjFF1YRoxV1YPkXN3IQqDMelVgl2Jbn4BfTBvZFRYlWZEHHHnfq%2B8HNktvnmeaPMqc7dJ7zDluZFocZcinm9xzN82gPmrdtX5LtPdNA55lHjjHyUG%2FaM%2B5aMStt1tTwUAQtqoNOdMkFIwOSNpG2yEDXBQLLspCjZpuK%2BNYoFgo380z5ut52Lj25xmyCJfXEJlISHqUv&X-Amz-Signature=640008a860ee02ab3afacba53c6ef4429adb51ccc019081cc297abe411e98aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQVL3M7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLn2yFC3Xim9YsPhajnulPzZbSb5bGE%2FBQUPuCGMvvnAiAePsJBdSsJXlLmSiSrBLAfZbgeCskIKo7rjliex%2Brz0SqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu6GanQl%2B1dd3yBKKtwD2sVV4OqbB1dldsOU2U71c0Pe7f85y%2Fs%2BuBEYkLPf6f%2FMNyT6H9lIWK3M8dYx0tsls9P4wu1BDXjU2huEpPhFhCj1zTLwSxiJvMdPxFRdQa6QPb582JvGEdIJ3YMga7DfD6pXTKYmcOtmqs%2BslAb7uT%2FQ8NX3fY8Y0JH0PHKXqqv60SfpGKDtIznxybh5hluXEJaNvNxN%2F8rxT2WKhIANyKVwEWqnkb4Oyeav4Udyhu4YNKiVvsCPgmO5%2FBJxTJ5MtlA948PNZ6AKHS%2BOgrtppDHkk%2FZpNROlHJ%2FgzmeVaBnUeQa00N0C2dAEjmR4TuvKB8NeLNCaTp1bjzJbqNr7RvZPKM%2BtCmC%2FYmspWF4wtQxaRN%2Fa6q%2FnJJb7u63vebk2%2B5sffEOs4Z3ISPyUhyN72NP4iwOPfz4H6eG4dOyJuYKj6WrKMC9UDEn%2BfEcc2v%2FVNJWnLlDvZ2DI9exBMnCWP3GyleP6IF%2FRZWXUlyK%2FiP%2FhXnyY9OZ%2BJrgpGwlqttKY0Cdqri8ve8%2FqsOyqcMAd1bHX5LYpVqOBNu%2BoHHZONARYFdDX7%2BaBjjqvQp5YlPeWZokGWM1xVfJWZFverSLvO9ZDe20XHvnT3APN8IKJRu3XyhSXUe%2FE5FUqyR4wqc2vxAY6pgFEI0RFkf%2FKAW%2BfPiVtISpyYCjFF1YRoxV1YPkXN3IQqDMelVgl2Jbn4BfTBvZFRYlWZEHHHnfq%2B8HNktvnmeaPMqc7dJ7zDluZFocZcinm9xzN82gPmrdtX5LtPdNA55lHjjHyUG%2FaM%2B5aMStt1tTwUAQtqoNOdMkFIwOSNpG2yEDXBQLLspCjZpuK%2BNYoFgo380z5ut52Lj25xmyCJfXEJlISHqUv&X-Amz-Signature=407c8bb573707272e16692412c38f37fb58d4d09062014403d8e1983d438bed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQVL3M7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLn2yFC3Xim9YsPhajnulPzZbSb5bGE%2FBQUPuCGMvvnAiAePsJBdSsJXlLmSiSrBLAfZbgeCskIKo7rjliex%2Brz0SqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu6GanQl%2B1dd3yBKKtwD2sVV4OqbB1dldsOU2U71c0Pe7f85y%2Fs%2BuBEYkLPf6f%2FMNyT6H9lIWK3M8dYx0tsls9P4wu1BDXjU2huEpPhFhCj1zTLwSxiJvMdPxFRdQa6QPb582JvGEdIJ3YMga7DfD6pXTKYmcOtmqs%2BslAb7uT%2FQ8NX3fY8Y0JH0PHKXqqv60SfpGKDtIznxybh5hluXEJaNvNxN%2F8rxT2WKhIANyKVwEWqnkb4Oyeav4Udyhu4YNKiVvsCPgmO5%2FBJxTJ5MtlA948PNZ6AKHS%2BOgrtppDHkk%2FZpNROlHJ%2FgzmeVaBnUeQa00N0C2dAEjmR4TuvKB8NeLNCaTp1bjzJbqNr7RvZPKM%2BtCmC%2FYmspWF4wtQxaRN%2Fa6q%2FnJJb7u63vebk2%2B5sffEOs4Z3ISPyUhyN72NP4iwOPfz4H6eG4dOyJuYKj6WrKMC9UDEn%2BfEcc2v%2FVNJWnLlDvZ2DI9exBMnCWP3GyleP6IF%2FRZWXUlyK%2FiP%2FhXnyY9OZ%2BJrgpGwlqttKY0Cdqri8ve8%2FqsOyqcMAd1bHX5LYpVqOBNu%2BoHHZONARYFdDX7%2BaBjjqvQp5YlPeWZokGWM1xVfJWZFverSLvO9ZDe20XHvnT3APN8IKJRu3XyhSXUe%2FE5FUqyR4wqc2vxAY6pgFEI0RFkf%2FKAW%2BfPiVtISpyYCjFF1YRoxV1YPkXN3IQqDMelVgl2Jbn4BfTBvZFRYlWZEHHHnfq%2B8HNktvnmeaPMqc7dJ7zDluZFocZcinm9xzN82gPmrdtX5LtPdNA55lHjjHyUG%2FaM%2B5aMStt1tTwUAQtqoNOdMkFIwOSNpG2yEDXBQLLspCjZpuK%2BNYoFgo380z5ut52Lj25xmyCJfXEJlISHqUv&X-Amz-Signature=e4f929de1bac13e358d86d7002691d3ef37f739e23fb8b00aedca53857cdb72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQVL3M7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLn2yFC3Xim9YsPhajnulPzZbSb5bGE%2FBQUPuCGMvvnAiAePsJBdSsJXlLmSiSrBLAfZbgeCskIKo7rjliex%2Brz0SqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu6GanQl%2B1dd3yBKKtwD2sVV4OqbB1dldsOU2U71c0Pe7f85y%2Fs%2BuBEYkLPf6f%2FMNyT6H9lIWK3M8dYx0tsls9P4wu1BDXjU2huEpPhFhCj1zTLwSxiJvMdPxFRdQa6QPb582JvGEdIJ3YMga7DfD6pXTKYmcOtmqs%2BslAb7uT%2FQ8NX3fY8Y0JH0PHKXqqv60SfpGKDtIznxybh5hluXEJaNvNxN%2F8rxT2WKhIANyKVwEWqnkb4Oyeav4Udyhu4YNKiVvsCPgmO5%2FBJxTJ5MtlA948PNZ6AKHS%2BOgrtppDHkk%2FZpNROlHJ%2FgzmeVaBnUeQa00N0C2dAEjmR4TuvKB8NeLNCaTp1bjzJbqNr7RvZPKM%2BtCmC%2FYmspWF4wtQxaRN%2Fa6q%2FnJJb7u63vebk2%2B5sffEOs4Z3ISPyUhyN72NP4iwOPfz4H6eG4dOyJuYKj6WrKMC9UDEn%2BfEcc2v%2FVNJWnLlDvZ2DI9exBMnCWP3GyleP6IF%2FRZWXUlyK%2FiP%2FhXnyY9OZ%2BJrgpGwlqttKY0Cdqri8ve8%2FqsOyqcMAd1bHX5LYpVqOBNu%2BoHHZONARYFdDX7%2BaBjjqvQp5YlPeWZokGWM1xVfJWZFverSLvO9ZDe20XHvnT3APN8IKJRu3XyhSXUe%2FE5FUqyR4wqc2vxAY6pgFEI0RFkf%2FKAW%2BfPiVtISpyYCjFF1YRoxV1YPkXN3IQqDMelVgl2Jbn4BfTBvZFRYlWZEHHHnfq%2B8HNktvnmeaPMqc7dJ7zDluZFocZcinm9xzN82gPmrdtX5LtPdNA55lHjjHyUG%2FaM%2B5aMStt1tTwUAQtqoNOdMkFIwOSNpG2yEDXBQLLspCjZpuK%2BNYoFgo380z5ut52Lj25xmyCJfXEJlISHqUv&X-Amz-Signature=3781d4d0ee1b3f430fdbe3bb376a30dcde06b8a72e29d76d5ffb659e97e33f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQVL3M7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLn2yFC3Xim9YsPhajnulPzZbSb5bGE%2FBQUPuCGMvvnAiAePsJBdSsJXlLmSiSrBLAfZbgeCskIKo7rjliex%2Brz0SqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu6GanQl%2B1dd3yBKKtwD2sVV4OqbB1dldsOU2U71c0Pe7f85y%2Fs%2BuBEYkLPf6f%2FMNyT6H9lIWK3M8dYx0tsls9P4wu1BDXjU2huEpPhFhCj1zTLwSxiJvMdPxFRdQa6QPb582JvGEdIJ3YMga7DfD6pXTKYmcOtmqs%2BslAb7uT%2FQ8NX3fY8Y0JH0PHKXqqv60SfpGKDtIznxybh5hluXEJaNvNxN%2F8rxT2WKhIANyKVwEWqnkb4Oyeav4Udyhu4YNKiVvsCPgmO5%2FBJxTJ5MtlA948PNZ6AKHS%2BOgrtppDHkk%2FZpNROlHJ%2FgzmeVaBnUeQa00N0C2dAEjmR4TuvKB8NeLNCaTp1bjzJbqNr7RvZPKM%2BtCmC%2FYmspWF4wtQxaRN%2Fa6q%2FnJJb7u63vebk2%2B5sffEOs4Z3ISPyUhyN72NP4iwOPfz4H6eG4dOyJuYKj6WrKMC9UDEn%2BfEcc2v%2FVNJWnLlDvZ2DI9exBMnCWP3GyleP6IF%2FRZWXUlyK%2FiP%2FhXnyY9OZ%2BJrgpGwlqttKY0Cdqri8ve8%2FqsOyqcMAd1bHX5LYpVqOBNu%2BoHHZONARYFdDX7%2BaBjjqvQp5YlPeWZokGWM1xVfJWZFverSLvO9ZDe20XHvnT3APN8IKJRu3XyhSXUe%2FE5FUqyR4wqc2vxAY6pgFEI0RFkf%2FKAW%2BfPiVtISpyYCjFF1YRoxV1YPkXN3IQqDMelVgl2Jbn4BfTBvZFRYlWZEHHHnfq%2B8HNktvnmeaPMqc7dJ7zDluZFocZcinm9xzN82gPmrdtX5LtPdNA55lHjjHyUG%2FaM%2B5aMStt1tTwUAQtqoNOdMkFIwOSNpG2yEDXBQLLspCjZpuK%2BNYoFgo380z5ut52Lj25xmyCJfXEJlISHqUv&X-Amz-Signature=f6c43ce82784838af52dde9301119e6bb90ad02734d9832b262b0cbee5ff3148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQVL3M7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLn2yFC3Xim9YsPhajnulPzZbSb5bGE%2FBQUPuCGMvvnAiAePsJBdSsJXlLmSiSrBLAfZbgeCskIKo7rjliex%2Brz0SqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu6GanQl%2B1dd3yBKKtwD2sVV4OqbB1dldsOU2U71c0Pe7f85y%2Fs%2BuBEYkLPf6f%2FMNyT6H9lIWK3M8dYx0tsls9P4wu1BDXjU2huEpPhFhCj1zTLwSxiJvMdPxFRdQa6QPb582JvGEdIJ3YMga7DfD6pXTKYmcOtmqs%2BslAb7uT%2FQ8NX3fY8Y0JH0PHKXqqv60SfpGKDtIznxybh5hluXEJaNvNxN%2F8rxT2WKhIANyKVwEWqnkb4Oyeav4Udyhu4YNKiVvsCPgmO5%2FBJxTJ5MtlA948PNZ6AKHS%2BOgrtppDHkk%2FZpNROlHJ%2FgzmeVaBnUeQa00N0C2dAEjmR4TuvKB8NeLNCaTp1bjzJbqNr7RvZPKM%2BtCmC%2FYmspWF4wtQxaRN%2Fa6q%2FnJJb7u63vebk2%2B5sffEOs4Z3ISPyUhyN72NP4iwOPfz4H6eG4dOyJuYKj6WrKMC9UDEn%2BfEcc2v%2FVNJWnLlDvZ2DI9exBMnCWP3GyleP6IF%2FRZWXUlyK%2FiP%2FhXnyY9OZ%2BJrgpGwlqttKY0Cdqri8ve8%2FqsOyqcMAd1bHX5LYpVqOBNu%2BoHHZONARYFdDX7%2BaBjjqvQp5YlPeWZokGWM1xVfJWZFverSLvO9ZDe20XHvnT3APN8IKJRu3XyhSXUe%2FE5FUqyR4wqc2vxAY6pgFEI0RFkf%2FKAW%2BfPiVtISpyYCjFF1YRoxV1YPkXN3IQqDMelVgl2Jbn4BfTBvZFRYlWZEHHHnfq%2B8HNktvnmeaPMqc7dJ7zDluZFocZcinm9xzN82gPmrdtX5LtPdNA55lHjjHyUG%2FaM%2B5aMStt1tTwUAQtqoNOdMkFIwOSNpG2yEDXBQLLspCjZpuK%2BNYoFgo380z5ut52Lj25xmyCJfXEJlISHqUv&X-Amz-Signature=ea6eb9f5580fa6c7cbcdce5e011dcb09c98aef6a3074a99e6025b36654cdedc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQVL3M7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLn2yFC3Xim9YsPhajnulPzZbSb5bGE%2FBQUPuCGMvvnAiAePsJBdSsJXlLmSiSrBLAfZbgeCskIKo7rjliex%2Brz0SqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu6GanQl%2B1dd3yBKKtwD2sVV4OqbB1dldsOU2U71c0Pe7f85y%2Fs%2BuBEYkLPf6f%2FMNyT6H9lIWK3M8dYx0tsls9P4wu1BDXjU2huEpPhFhCj1zTLwSxiJvMdPxFRdQa6QPb582JvGEdIJ3YMga7DfD6pXTKYmcOtmqs%2BslAb7uT%2FQ8NX3fY8Y0JH0PHKXqqv60SfpGKDtIznxybh5hluXEJaNvNxN%2F8rxT2WKhIANyKVwEWqnkb4Oyeav4Udyhu4YNKiVvsCPgmO5%2FBJxTJ5MtlA948PNZ6AKHS%2BOgrtppDHkk%2FZpNROlHJ%2FgzmeVaBnUeQa00N0C2dAEjmR4TuvKB8NeLNCaTp1bjzJbqNr7RvZPKM%2BtCmC%2FYmspWF4wtQxaRN%2Fa6q%2FnJJb7u63vebk2%2B5sffEOs4Z3ISPyUhyN72NP4iwOPfz4H6eG4dOyJuYKj6WrKMC9UDEn%2BfEcc2v%2FVNJWnLlDvZ2DI9exBMnCWP3GyleP6IF%2FRZWXUlyK%2FiP%2FhXnyY9OZ%2BJrgpGwlqttKY0Cdqri8ve8%2FqsOyqcMAd1bHX5LYpVqOBNu%2BoHHZONARYFdDX7%2BaBjjqvQp5YlPeWZokGWM1xVfJWZFverSLvO9ZDe20XHvnT3APN8IKJRu3XyhSXUe%2FE5FUqyR4wqc2vxAY6pgFEI0RFkf%2FKAW%2BfPiVtISpyYCjFF1YRoxV1YPkXN3IQqDMelVgl2Jbn4BfTBvZFRYlWZEHHHnfq%2B8HNktvnmeaPMqc7dJ7zDluZFocZcinm9xzN82gPmrdtX5LtPdNA55lHjjHyUG%2FaM%2B5aMStt1tTwUAQtqoNOdMkFIwOSNpG2yEDXBQLLspCjZpuK%2BNYoFgo380z5ut52Lj25xmyCJfXEJlISHqUv&X-Amz-Signature=21adb1584c42142dc5ac0440035622107839ff1f85156792ab60cafa9bb2265b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQVL3M7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLn2yFC3Xim9YsPhajnulPzZbSb5bGE%2FBQUPuCGMvvnAiAePsJBdSsJXlLmSiSrBLAfZbgeCskIKo7rjliex%2Brz0SqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu6GanQl%2B1dd3yBKKtwD2sVV4OqbB1dldsOU2U71c0Pe7f85y%2Fs%2BuBEYkLPf6f%2FMNyT6H9lIWK3M8dYx0tsls9P4wu1BDXjU2huEpPhFhCj1zTLwSxiJvMdPxFRdQa6QPb582JvGEdIJ3YMga7DfD6pXTKYmcOtmqs%2BslAb7uT%2FQ8NX3fY8Y0JH0PHKXqqv60SfpGKDtIznxybh5hluXEJaNvNxN%2F8rxT2WKhIANyKVwEWqnkb4Oyeav4Udyhu4YNKiVvsCPgmO5%2FBJxTJ5MtlA948PNZ6AKHS%2BOgrtppDHkk%2FZpNROlHJ%2FgzmeVaBnUeQa00N0C2dAEjmR4TuvKB8NeLNCaTp1bjzJbqNr7RvZPKM%2BtCmC%2FYmspWF4wtQxaRN%2Fa6q%2FnJJb7u63vebk2%2B5sffEOs4Z3ISPyUhyN72NP4iwOPfz4H6eG4dOyJuYKj6WrKMC9UDEn%2BfEcc2v%2FVNJWnLlDvZ2DI9exBMnCWP3GyleP6IF%2FRZWXUlyK%2FiP%2FhXnyY9OZ%2BJrgpGwlqttKY0Cdqri8ve8%2FqsOyqcMAd1bHX5LYpVqOBNu%2BoHHZONARYFdDX7%2BaBjjqvQp5YlPeWZokGWM1xVfJWZFverSLvO9ZDe20XHvnT3APN8IKJRu3XyhSXUe%2FE5FUqyR4wqc2vxAY6pgFEI0RFkf%2FKAW%2BfPiVtISpyYCjFF1YRoxV1YPkXN3IQqDMelVgl2Jbn4BfTBvZFRYlWZEHHHnfq%2B8HNktvnmeaPMqc7dJ7zDluZFocZcinm9xzN82gPmrdtX5LtPdNA55lHjjHyUG%2FaM%2B5aMStt1tTwUAQtqoNOdMkFIwOSNpG2yEDXBQLLspCjZpuK%2BNYoFgo380z5ut52Lj25xmyCJfXEJlISHqUv&X-Amz-Signature=8e945e689d8dc3610a3295649e5f08ed7d5cf84b9816ad2caeef60d5009a0d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQVL3M7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLn2yFC3Xim9YsPhajnulPzZbSb5bGE%2FBQUPuCGMvvnAiAePsJBdSsJXlLmSiSrBLAfZbgeCskIKo7rjliex%2Brz0SqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu6GanQl%2B1dd3yBKKtwD2sVV4OqbB1dldsOU2U71c0Pe7f85y%2Fs%2BuBEYkLPf6f%2FMNyT6H9lIWK3M8dYx0tsls9P4wu1BDXjU2huEpPhFhCj1zTLwSxiJvMdPxFRdQa6QPb582JvGEdIJ3YMga7DfD6pXTKYmcOtmqs%2BslAb7uT%2FQ8NX3fY8Y0JH0PHKXqqv60SfpGKDtIznxybh5hluXEJaNvNxN%2F8rxT2WKhIANyKVwEWqnkb4Oyeav4Udyhu4YNKiVvsCPgmO5%2FBJxTJ5MtlA948PNZ6AKHS%2BOgrtppDHkk%2FZpNROlHJ%2FgzmeVaBnUeQa00N0C2dAEjmR4TuvKB8NeLNCaTp1bjzJbqNr7RvZPKM%2BtCmC%2FYmspWF4wtQxaRN%2Fa6q%2FnJJb7u63vebk2%2B5sffEOs4Z3ISPyUhyN72NP4iwOPfz4H6eG4dOyJuYKj6WrKMC9UDEn%2BfEcc2v%2FVNJWnLlDvZ2DI9exBMnCWP3GyleP6IF%2FRZWXUlyK%2FiP%2FhXnyY9OZ%2BJrgpGwlqttKY0Cdqri8ve8%2FqsOyqcMAd1bHX5LYpVqOBNu%2BoHHZONARYFdDX7%2BaBjjqvQp5YlPeWZokGWM1xVfJWZFverSLvO9ZDe20XHvnT3APN8IKJRu3XyhSXUe%2FE5FUqyR4wqc2vxAY6pgFEI0RFkf%2FKAW%2BfPiVtISpyYCjFF1YRoxV1YPkXN3IQqDMelVgl2Jbn4BfTBvZFRYlWZEHHHnfq%2B8HNktvnmeaPMqc7dJ7zDluZFocZcinm9xzN82gPmrdtX5LtPdNA55lHjjHyUG%2FaM%2B5aMStt1tTwUAQtqoNOdMkFIwOSNpG2yEDXBQLLspCjZpuK%2BNYoFgo380z5ut52Lj25xmyCJfXEJlISHqUv&X-Amz-Signature=d0ffbb7d1c4126eba50b9b93d7249ec6a95cba0962134b7f67fb70dcc1f87caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQVL3M7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLn2yFC3Xim9YsPhajnulPzZbSb5bGE%2FBQUPuCGMvvnAiAePsJBdSsJXlLmSiSrBLAfZbgeCskIKo7rjliex%2Brz0SqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu6GanQl%2B1dd3yBKKtwD2sVV4OqbB1dldsOU2U71c0Pe7f85y%2Fs%2BuBEYkLPf6f%2FMNyT6H9lIWK3M8dYx0tsls9P4wu1BDXjU2huEpPhFhCj1zTLwSxiJvMdPxFRdQa6QPb582JvGEdIJ3YMga7DfD6pXTKYmcOtmqs%2BslAb7uT%2FQ8NX3fY8Y0JH0PHKXqqv60SfpGKDtIznxybh5hluXEJaNvNxN%2F8rxT2WKhIANyKVwEWqnkb4Oyeav4Udyhu4YNKiVvsCPgmO5%2FBJxTJ5MtlA948PNZ6AKHS%2BOgrtppDHkk%2FZpNROlHJ%2FgzmeVaBnUeQa00N0C2dAEjmR4TuvKB8NeLNCaTp1bjzJbqNr7RvZPKM%2BtCmC%2FYmspWF4wtQxaRN%2Fa6q%2FnJJb7u63vebk2%2B5sffEOs4Z3ISPyUhyN72NP4iwOPfz4H6eG4dOyJuYKj6WrKMC9UDEn%2BfEcc2v%2FVNJWnLlDvZ2DI9exBMnCWP3GyleP6IF%2FRZWXUlyK%2FiP%2FhXnyY9OZ%2BJrgpGwlqttKY0Cdqri8ve8%2FqsOyqcMAd1bHX5LYpVqOBNu%2BoHHZONARYFdDX7%2BaBjjqvQp5YlPeWZokGWM1xVfJWZFverSLvO9ZDe20XHvnT3APN8IKJRu3XyhSXUe%2FE5FUqyR4wqc2vxAY6pgFEI0RFkf%2FKAW%2BfPiVtISpyYCjFF1YRoxV1YPkXN3IQqDMelVgl2Jbn4BfTBvZFRYlWZEHHHnfq%2B8HNktvnmeaPMqc7dJ7zDluZFocZcinm9xzN82gPmrdtX5LtPdNA55lHjjHyUG%2FaM%2B5aMStt1tTwUAQtqoNOdMkFIwOSNpG2yEDXBQLLspCjZpuK%2BNYoFgo380z5ut52Lj25xmyCJfXEJlISHqUv&X-Amz-Signature=564f10b575fc2c292908cb03f8d57d95baa15b16193efdf93d32f8e130ca6c81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQVL3M7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLn2yFC3Xim9YsPhajnulPzZbSb5bGE%2FBQUPuCGMvvnAiAePsJBdSsJXlLmSiSrBLAfZbgeCskIKo7rjliex%2Brz0SqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu6GanQl%2B1dd3yBKKtwD2sVV4OqbB1dldsOU2U71c0Pe7f85y%2Fs%2BuBEYkLPf6f%2FMNyT6H9lIWK3M8dYx0tsls9P4wu1BDXjU2huEpPhFhCj1zTLwSxiJvMdPxFRdQa6QPb582JvGEdIJ3YMga7DfD6pXTKYmcOtmqs%2BslAb7uT%2FQ8NX3fY8Y0JH0PHKXqqv60SfpGKDtIznxybh5hluXEJaNvNxN%2F8rxT2WKhIANyKVwEWqnkb4Oyeav4Udyhu4YNKiVvsCPgmO5%2FBJxTJ5MtlA948PNZ6AKHS%2BOgrtppDHkk%2FZpNROlHJ%2FgzmeVaBnUeQa00N0C2dAEjmR4TuvKB8NeLNCaTp1bjzJbqNr7RvZPKM%2BtCmC%2FYmspWF4wtQxaRN%2Fa6q%2FnJJb7u63vebk2%2B5sffEOs4Z3ISPyUhyN72NP4iwOPfz4H6eG4dOyJuYKj6WrKMC9UDEn%2BfEcc2v%2FVNJWnLlDvZ2DI9exBMnCWP3GyleP6IF%2FRZWXUlyK%2FiP%2FhXnyY9OZ%2BJrgpGwlqttKY0Cdqri8ve8%2FqsOyqcMAd1bHX5LYpVqOBNu%2BoHHZONARYFdDX7%2BaBjjqvQp5YlPeWZokGWM1xVfJWZFverSLvO9ZDe20XHvnT3APN8IKJRu3XyhSXUe%2FE5FUqyR4wqc2vxAY6pgFEI0RFkf%2FKAW%2BfPiVtISpyYCjFF1YRoxV1YPkXN3IQqDMelVgl2Jbn4BfTBvZFRYlWZEHHHnfq%2B8HNktvnmeaPMqc7dJ7zDluZFocZcinm9xzN82gPmrdtX5LtPdNA55lHjjHyUG%2FaM%2B5aMStt1tTwUAQtqoNOdMkFIwOSNpG2yEDXBQLLspCjZpuK%2BNYoFgo380z5ut52Lj25xmyCJfXEJlISHqUv&X-Amz-Signature=67751fd0d36e83f736d296b6e9ba00a9c7e4c8c958dc2fcc9723f9f32d4c0226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQVL3M7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLn2yFC3Xim9YsPhajnulPzZbSb5bGE%2FBQUPuCGMvvnAiAePsJBdSsJXlLmSiSrBLAfZbgeCskIKo7rjliex%2Brz0SqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu6GanQl%2B1dd3yBKKtwD2sVV4OqbB1dldsOU2U71c0Pe7f85y%2Fs%2BuBEYkLPf6f%2FMNyT6H9lIWK3M8dYx0tsls9P4wu1BDXjU2huEpPhFhCj1zTLwSxiJvMdPxFRdQa6QPb582JvGEdIJ3YMga7DfD6pXTKYmcOtmqs%2BslAb7uT%2FQ8NX3fY8Y0JH0PHKXqqv60SfpGKDtIznxybh5hluXEJaNvNxN%2F8rxT2WKhIANyKVwEWqnkb4Oyeav4Udyhu4YNKiVvsCPgmO5%2FBJxTJ5MtlA948PNZ6AKHS%2BOgrtppDHkk%2FZpNROlHJ%2FgzmeVaBnUeQa00N0C2dAEjmR4TuvKB8NeLNCaTp1bjzJbqNr7RvZPKM%2BtCmC%2FYmspWF4wtQxaRN%2Fa6q%2FnJJb7u63vebk2%2B5sffEOs4Z3ISPyUhyN72NP4iwOPfz4H6eG4dOyJuYKj6WrKMC9UDEn%2BfEcc2v%2FVNJWnLlDvZ2DI9exBMnCWP3GyleP6IF%2FRZWXUlyK%2FiP%2FhXnyY9OZ%2BJrgpGwlqttKY0Cdqri8ve8%2FqsOyqcMAd1bHX5LYpVqOBNu%2BoHHZONARYFdDX7%2BaBjjqvQp5YlPeWZokGWM1xVfJWZFverSLvO9ZDe20XHvnT3APN8IKJRu3XyhSXUe%2FE5FUqyR4wqc2vxAY6pgFEI0RFkf%2FKAW%2BfPiVtISpyYCjFF1YRoxV1YPkXN3IQqDMelVgl2Jbn4BfTBvZFRYlWZEHHHnfq%2B8HNktvnmeaPMqc7dJ7zDluZFocZcinm9xzN82gPmrdtX5LtPdNA55lHjjHyUG%2FaM%2B5aMStt1tTwUAQtqoNOdMkFIwOSNpG2yEDXBQLLspCjZpuK%2BNYoFgo380z5ut52Lj25xmyCJfXEJlISHqUv&X-Amz-Signature=4f49d7ded824e669ae6fc73139ac0e18dbcfc79b867101be946af978110ee173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
