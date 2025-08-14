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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SV3PXCV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDtV2JpGUsQ9HPAst6si20DyaK4TtIQxaZYYAA3%2BZLxxwIhAIBfLPeqWidLavzf1rv6eU68qIokb75qbMsQYyqU4RSnKv8DCEsQABoMNjM3NDIzMTgzODA1Igy5%2BBmq9nSlCnv8ITkq3AMvHzXbP6A7acSFEAMqD%2BQrve%2FqFLobkswZKqP5cwxkQuQzwTNsEENrVOBEiROk4RSuZcH2DfUpD4wwv8IxsuqN8i5lXNkIE0mcK6eTGUFO%2F9NbKVb4gTqyPX1F7%2BYmBqm9x4IgfLPHttfP7DyRpktcPbP%2B7r1kOHlD8mL%2F%2B1iIkKkq48MOLfxrV0QCgFl6djoJUylvDt2%2BQ8lZ7eYMvIM%2BhL6t74SCRGeaQhFlgiS4PCuj%2FLiDyiqvx1rax3tS66tqu33K7eJ0S%2FZbYiCaIUfcmBfB7bGlJApnQV%2FVmXGtSAW0d0Zft2GJCJkh5VVacd0TqNJ9v5UtLZY4v1MtevE9zVYVm84XTgA5oENTogdTkxKevllVKUNGSxD07cb9PLGYGweHihZz%2FsmSHRCuTIc2eaKkPbm%2FfPjJkIeNis9HIme1fenZNFS%2B466Nt%2FjePj%2F1SSdvKscEIFDNuGc8b4W5txpv%2BjrGv%2BYcUDTiKdg29QzTgBCgo1bNneFbO7t0LT%2B2dH%2BW6qHITxiSaWNwXAKEN5L%2B6l6zBkXxkNTA1T191SKJdlkzjI60a5TgNQ%2FvUNR036BDtHcF%2F2YdY8VilrYc6EbARBbYhEachJAFxcq5IBuBBiCQ9G0noX%2FLgDDswvjEBjqkAZnR8UQj6rVI2E6eHQPXmD58%2FBGOSSIO8wuDCNst%2BAJahtqYCf8iPnGyS3jozpeZ1LuhcYUG3b6FK81rImulT88oqEaoefgW6a%2Bj8FqDoTKM%2FMFh6b0grjUxoToG0v7NdRJnMpd2PdGcI55Gn9aUkL8Wfh4wBnWvfDrH89pTc%2B7Ka9HqUUtqWNnbo4eDka%2B2oMlcFKNIllQbVapUAAcgwvTKunlA&X-Amz-Signature=99d3297646d8c306af2075873b6dd5bf71cc2709551d6cc0f50a875daa812ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SV3PXCV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDtV2JpGUsQ9HPAst6si20DyaK4TtIQxaZYYAA3%2BZLxxwIhAIBfLPeqWidLavzf1rv6eU68qIokb75qbMsQYyqU4RSnKv8DCEsQABoMNjM3NDIzMTgzODA1Igy5%2BBmq9nSlCnv8ITkq3AMvHzXbP6A7acSFEAMqD%2BQrve%2FqFLobkswZKqP5cwxkQuQzwTNsEENrVOBEiROk4RSuZcH2DfUpD4wwv8IxsuqN8i5lXNkIE0mcK6eTGUFO%2F9NbKVb4gTqyPX1F7%2BYmBqm9x4IgfLPHttfP7DyRpktcPbP%2B7r1kOHlD8mL%2F%2B1iIkKkq48MOLfxrV0QCgFl6djoJUylvDt2%2BQ8lZ7eYMvIM%2BhL6t74SCRGeaQhFlgiS4PCuj%2FLiDyiqvx1rax3tS66tqu33K7eJ0S%2FZbYiCaIUfcmBfB7bGlJApnQV%2FVmXGtSAW0d0Zft2GJCJkh5VVacd0TqNJ9v5UtLZY4v1MtevE9zVYVm84XTgA5oENTogdTkxKevllVKUNGSxD07cb9PLGYGweHihZz%2FsmSHRCuTIc2eaKkPbm%2FfPjJkIeNis9HIme1fenZNFS%2B466Nt%2FjePj%2F1SSdvKscEIFDNuGc8b4W5txpv%2BjrGv%2BYcUDTiKdg29QzTgBCgo1bNneFbO7t0LT%2B2dH%2BW6qHITxiSaWNwXAKEN5L%2B6l6zBkXxkNTA1T191SKJdlkzjI60a5TgNQ%2FvUNR036BDtHcF%2F2YdY8VilrYc6EbARBbYhEachJAFxcq5IBuBBiCQ9G0noX%2FLgDDswvjEBjqkAZnR8UQj6rVI2E6eHQPXmD58%2FBGOSSIO8wuDCNst%2BAJahtqYCf8iPnGyS3jozpeZ1LuhcYUG3b6FK81rImulT88oqEaoefgW6a%2Bj8FqDoTKM%2FMFh6b0grjUxoToG0v7NdRJnMpd2PdGcI55Gn9aUkL8Wfh4wBnWvfDrH89pTc%2B7Ka9HqUUtqWNnbo4eDka%2B2oMlcFKNIllQbVapUAAcgwvTKunlA&X-Amz-Signature=a96edaf96eba1b29fd820c51074c392a0759d08a9a7592d75e1e0756e806d6ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SV3PXCV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDtV2JpGUsQ9HPAst6si20DyaK4TtIQxaZYYAA3%2BZLxxwIhAIBfLPeqWidLavzf1rv6eU68qIokb75qbMsQYyqU4RSnKv8DCEsQABoMNjM3NDIzMTgzODA1Igy5%2BBmq9nSlCnv8ITkq3AMvHzXbP6A7acSFEAMqD%2BQrve%2FqFLobkswZKqP5cwxkQuQzwTNsEENrVOBEiROk4RSuZcH2DfUpD4wwv8IxsuqN8i5lXNkIE0mcK6eTGUFO%2F9NbKVb4gTqyPX1F7%2BYmBqm9x4IgfLPHttfP7DyRpktcPbP%2B7r1kOHlD8mL%2F%2B1iIkKkq48MOLfxrV0QCgFl6djoJUylvDt2%2BQ8lZ7eYMvIM%2BhL6t74SCRGeaQhFlgiS4PCuj%2FLiDyiqvx1rax3tS66tqu33K7eJ0S%2FZbYiCaIUfcmBfB7bGlJApnQV%2FVmXGtSAW0d0Zft2GJCJkh5VVacd0TqNJ9v5UtLZY4v1MtevE9zVYVm84XTgA5oENTogdTkxKevllVKUNGSxD07cb9PLGYGweHihZz%2FsmSHRCuTIc2eaKkPbm%2FfPjJkIeNis9HIme1fenZNFS%2B466Nt%2FjePj%2F1SSdvKscEIFDNuGc8b4W5txpv%2BjrGv%2BYcUDTiKdg29QzTgBCgo1bNneFbO7t0LT%2B2dH%2BW6qHITxiSaWNwXAKEN5L%2B6l6zBkXxkNTA1T191SKJdlkzjI60a5TgNQ%2FvUNR036BDtHcF%2F2YdY8VilrYc6EbARBbYhEachJAFxcq5IBuBBiCQ9G0noX%2FLgDDswvjEBjqkAZnR8UQj6rVI2E6eHQPXmD58%2FBGOSSIO8wuDCNst%2BAJahtqYCf8iPnGyS3jozpeZ1LuhcYUG3b6FK81rImulT88oqEaoefgW6a%2Bj8FqDoTKM%2FMFh6b0grjUxoToG0v7NdRJnMpd2PdGcI55Gn9aUkL8Wfh4wBnWvfDrH89pTc%2B7Ka9HqUUtqWNnbo4eDka%2B2oMlcFKNIllQbVapUAAcgwvTKunlA&X-Amz-Signature=54c0caab2a09469aebc875e9030897dace8ad021fc74f1198f58c6c820df1078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SV3PXCV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDtV2JpGUsQ9HPAst6si20DyaK4TtIQxaZYYAA3%2BZLxxwIhAIBfLPeqWidLavzf1rv6eU68qIokb75qbMsQYyqU4RSnKv8DCEsQABoMNjM3NDIzMTgzODA1Igy5%2BBmq9nSlCnv8ITkq3AMvHzXbP6A7acSFEAMqD%2BQrve%2FqFLobkswZKqP5cwxkQuQzwTNsEENrVOBEiROk4RSuZcH2DfUpD4wwv8IxsuqN8i5lXNkIE0mcK6eTGUFO%2F9NbKVb4gTqyPX1F7%2BYmBqm9x4IgfLPHttfP7DyRpktcPbP%2B7r1kOHlD8mL%2F%2B1iIkKkq48MOLfxrV0QCgFl6djoJUylvDt2%2BQ8lZ7eYMvIM%2BhL6t74SCRGeaQhFlgiS4PCuj%2FLiDyiqvx1rax3tS66tqu33K7eJ0S%2FZbYiCaIUfcmBfB7bGlJApnQV%2FVmXGtSAW0d0Zft2GJCJkh5VVacd0TqNJ9v5UtLZY4v1MtevE9zVYVm84XTgA5oENTogdTkxKevllVKUNGSxD07cb9PLGYGweHihZz%2FsmSHRCuTIc2eaKkPbm%2FfPjJkIeNis9HIme1fenZNFS%2B466Nt%2FjePj%2F1SSdvKscEIFDNuGc8b4W5txpv%2BjrGv%2BYcUDTiKdg29QzTgBCgo1bNneFbO7t0LT%2B2dH%2BW6qHITxiSaWNwXAKEN5L%2B6l6zBkXxkNTA1T191SKJdlkzjI60a5TgNQ%2FvUNR036BDtHcF%2F2YdY8VilrYc6EbARBbYhEachJAFxcq5IBuBBiCQ9G0noX%2FLgDDswvjEBjqkAZnR8UQj6rVI2E6eHQPXmD58%2FBGOSSIO8wuDCNst%2BAJahtqYCf8iPnGyS3jozpeZ1LuhcYUG3b6FK81rImulT88oqEaoefgW6a%2Bj8FqDoTKM%2FMFh6b0grjUxoToG0v7NdRJnMpd2PdGcI55Gn9aUkL8Wfh4wBnWvfDrH89pTc%2B7Ka9HqUUtqWNnbo4eDka%2B2oMlcFKNIllQbVapUAAcgwvTKunlA&X-Amz-Signature=99bc9019b41eeb38eaac56f8bfa31dad01d9526abcc7f81bbf793fa3285862df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SV3PXCV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDtV2JpGUsQ9HPAst6si20DyaK4TtIQxaZYYAA3%2BZLxxwIhAIBfLPeqWidLavzf1rv6eU68qIokb75qbMsQYyqU4RSnKv8DCEsQABoMNjM3NDIzMTgzODA1Igy5%2BBmq9nSlCnv8ITkq3AMvHzXbP6A7acSFEAMqD%2BQrve%2FqFLobkswZKqP5cwxkQuQzwTNsEENrVOBEiROk4RSuZcH2DfUpD4wwv8IxsuqN8i5lXNkIE0mcK6eTGUFO%2F9NbKVb4gTqyPX1F7%2BYmBqm9x4IgfLPHttfP7DyRpktcPbP%2B7r1kOHlD8mL%2F%2B1iIkKkq48MOLfxrV0QCgFl6djoJUylvDt2%2BQ8lZ7eYMvIM%2BhL6t74SCRGeaQhFlgiS4PCuj%2FLiDyiqvx1rax3tS66tqu33K7eJ0S%2FZbYiCaIUfcmBfB7bGlJApnQV%2FVmXGtSAW0d0Zft2GJCJkh5VVacd0TqNJ9v5UtLZY4v1MtevE9zVYVm84XTgA5oENTogdTkxKevllVKUNGSxD07cb9PLGYGweHihZz%2FsmSHRCuTIc2eaKkPbm%2FfPjJkIeNis9HIme1fenZNFS%2B466Nt%2FjePj%2F1SSdvKscEIFDNuGc8b4W5txpv%2BjrGv%2BYcUDTiKdg29QzTgBCgo1bNneFbO7t0LT%2B2dH%2BW6qHITxiSaWNwXAKEN5L%2B6l6zBkXxkNTA1T191SKJdlkzjI60a5TgNQ%2FvUNR036BDtHcF%2F2YdY8VilrYc6EbARBbYhEachJAFxcq5IBuBBiCQ9G0noX%2FLgDDswvjEBjqkAZnR8UQj6rVI2E6eHQPXmD58%2FBGOSSIO8wuDCNst%2BAJahtqYCf8iPnGyS3jozpeZ1LuhcYUG3b6FK81rImulT88oqEaoefgW6a%2Bj8FqDoTKM%2FMFh6b0grjUxoToG0v7NdRJnMpd2PdGcI55Gn9aUkL8Wfh4wBnWvfDrH89pTc%2B7Ka9HqUUtqWNnbo4eDka%2B2oMlcFKNIllQbVapUAAcgwvTKunlA&X-Amz-Signature=2a9f4b469847cc9544c7dc5aeb31d40adab68cc2b253cf978dc8efb2f380669d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SV3PXCV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDtV2JpGUsQ9HPAst6si20DyaK4TtIQxaZYYAA3%2BZLxxwIhAIBfLPeqWidLavzf1rv6eU68qIokb75qbMsQYyqU4RSnKv8DCEsQABoMNjM3NDIzMTgzODA1Igy5%2BBmq9nSlCnv8ITkq3AMvHzXbP6A7acSFEAMqD%2BQrve%2FqFLobkswZKqP5cwxkQuQzwTNsEENrVOBEiROk4RSuZcH2DfUpD4wwv8IxsuqN8i5lXNkIE0mcK6eTGUFO%2F9NbKVb4gTqyPX1F7%2BYmBqm9x4IgfLPHttfP7DyRpktcPbP%2B7r1kOHlD8mL%2F%2B1iIkKkq48MOLfxrV0QCgFl6djoJUylvDt2%2BQ8lZ7eYMvIM%2BhL6t74SCRGeaQhFlgiS4PCuj%2FLiDyiqvx1rax3tS66tqu33K7eJ0S%2FZbYiCaIUfcmBfB7bGlJApnQV%2FVmXGtSAW0d0Zft2GJCJkh5VVacd0TqNJ9v5UtLZY4v1MtevE9zVYVm84XTgA5oENTogdTkxKevllVKUNGSxD07cb9PLGYGweHihZz%2FsmSHRCuTIc2eaKkPbm%2FfPjJkIeNis9HIme1fenZNFS%2B466Nt%2FjePj%2F1SSdvKscEIFDNuGc8b4W5txpv%2BjrGv%2BYcUDTiKdg29QzTgBCgo1bNneFbO7t0LT%2B2dH%2BW6qHITxiSaWNwXAKEN5L%2B6l6zBkXxkNTA1T191SKJdlkzjI60a5TgNQ%2FvUNR036BDtHcF%2F2YdY8VilrYc6EbARBbYhEachJAFxcq5IBuBBiCQ9G0noX%2FLgDDswvjEBjqkAZnR8UQj6rVI2E6eHQPXmD58%2FBGOSSIO8wuDCNst%2BAJahtqYCf8iPnGyS3jozpeZ1LuhcYUG3b6FK81rImulT88oqEaoefgW6a%2Bj8FqDoTKM%2FMFh6b0grjUxoToG0v7NdRJnMpd2PdGcI55Gn9aUkL8Wfh4wBnWvfDrH89pTc%2B7Ka9HqUUtqWNnbo4eDka%2B2oMlcFKNIllQbVapUAAcgwvTKunlA&X-Amz-Signature=a680f3dd73a0dae57474a3e421acdb0c941cf1a1d0a242918263bb2e5e66d107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SV3PXCV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDtV2JpGUsQ9HPAst6si20DyaK4TtIQxaZYYAA3%2BZLxxwIhAIBfLPeqWidLavzf1rv6eU68qIokb75qbMsQYyqU4RSnKv8DCEsQABoMNjM3NDIzMTgzODA1Igy5%2BBmq9nSlCnv8ITkq3AMvHzXbP6A7acSFEAMqD%2BQrve%2FqFLobkswZKqP5cwxkQuQzwTNsEENrVOBEiROk4RSuZcH2DfUpD4wwv8IxsuqN8i5lXNkIE0mcK6eTGUFO%2F9NbKVb4gTqyPX1F7%2BYmBqm9x4IgfLPHttfP7DyRpktcPbP%2B7r1kOHlD8mL%2F%2B1iIkKkq48MOLfxrV0QCgFl6djoJUylvDt2%2BQ8lZ7eYMvIM%2BhL6t74SCRGeaQhFlgiS4PCuj%2FLiDyiqvx1rax3tS66tqu33K7eJ0S%2FZbYiCaIUfcmBfB7bGlJApnQV%2FVmXGtSAW0d0Zft2GJCJkh5VVacd0TqNJ9v5UtLZY4v1MtevE9zVYVm84XTgA5oENTogdTkxKevllVKUNGSxD07cb9PLGYGweHihZz%2FsmSHRCuTIc2eaKkPbm%2FfPjJkIeNis9HIme1fenZNFS%2B466Nt%2FjePj%2F1SSdvKscEIFDNuGc8b4W5txpv%2BjrGv%2BYcUDTiKdg29QzTgBCgo1bNneFbO7t0LT%2B2dH%2BW6qHITxiSaWNwXAKEN5L%2B6l6zBkXxkNTA1T191SKJdlkzjI60a5TgNQ%2FvUNR036BDtHcF%2F2YdY8VilrYc6EbARBbYhEachJAFxcq5IBuBBiCQ9G0noX%2FLgDDswvjEBjqkAZnR8UQj6rVI2E6eHQPXmD58%2FBGOSSIO8wuDCNst%2BAJahtqYCf8iPnGyS3jozpeZ1LuhcYUG3b6FK81rImulT88oqEaoefgW6a%2Bj8FqDoTKM%2FMFh6b0grjUxoToG0v7NdRJnMpd2PdGcI55Gn9aUkL8Wfh4wBnWvfDrH89pTc%2B7Ka9HqUUtqWNnbo4eDka%2B2oMlcFKNIllQbVapUAAcgwvTKunlA&X-Amz-Signature=d3e24ac9e8ca2ef887c153de4dffedf6491c60d2578fb25499471f358226200c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SV3PXCV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDtV2JpGUsQ9HPAst6si20DyaK4TtIQxaZYYAA3%2BZLxxwIhAIBfLPeqWidLavzf1rv6eU68qIokb75qbMsQYyqU4RSnKv8DCEsQABoMNjM3NDIzMTgzODA1Igy5%2BBmq9nSlCnv8ITkq3AMvHzXbP6A7acSFEAMqD%2BQrve%2FqFLobkswZKqP5cwxkQuQzwTNsEENrVOBEiROk4RSuZcH2DfUpD4wwv8IxsuqN8i5lXNkIE0mcK6eTGUFO%2F9NbKVb4gTqyPX1F7%2BYmBqm9x4IgfLPHttfP7DyRpktcPbP%2B7r1kOHlD8mL%2F%2B1iIkKkq48MOLfxrV0QCgFl6djoJUylvDt2%2BQ8lZ7eYMvIM%2BhL6t74SCRGeaQhFlgiS4PCuj%2FLiDyiqvx1rax3tS66tqu33K7eJ0S%2FZbYiCaIUfcmBfB7bGlJApnQV%2FVmXGtSAW0d0Zft2GJCJkh5VVacd0TqNJ9v5UtLZY4v1MtevE9zVYVm84XTgA5oENTogdTkxKevllVKUNGSxD07cb9PLGYGweHihZz%2FsmSHRCuTIc2eaKkPbm%2FfPjJkIeNis9HIme1fenZNFS%2B466Nt%2FjePj%2F1SSdvKscEIFDNuGc8b4W5txpv%2BjrGv%2BYcUDTiKdg29QzTgBCgo1bNneFbO7t0LT%2B2dH%2BW6qHITxiSaWNwXAKEN5L%2B6l6zBkXxkNTA1T191SKJdlkzjI60a5TgNQ%2FvUNR036BDtHcF%2F2YdY8VilrYc6EbARBbYhEachJAFxcq5IBuBBiCQ9G0noX%2FLgDDswvjEBjqkAZnR8UQj6rVI2E6eHQPXmD58%2FBGOSSIO8wuDCNst%2BAJahtqYCf8iPnGyS3jozpeZ1LuhcYUG3b6FK81rImulT88oqEaoefgW6a%2Bj8FqDoTKM%2FMFh6b0grjUxoToG0v7NdRJnMpd2PdGcI55Gn9aUkL8Wfh4wBnWvfDrH89pTc%2B7Ka9HqUUtqWNnbo4eDka%2B2oMlcFKNIllQbVapUAAcgwvTKunlA&X-Amz-Signature=082c1020f4a05c06c9349bcb8a30cf622817c283bc2cbde303bf9fb548ff3c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SV3PXCV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDtV2JpGUsQ9HPAst6si20DyaK4TtIQxaZYYAA3%2BZLxxwIhAIBfLPeqWidLavzf1rv6eU68qIokb75qbMsQYyqU4RSnKv8DCEsQABoMNjM3NDIzMTgzODA1Igy5%2BBmq9nSlCnv8ITkq3AMvHzXbP6A7acSFEAMqD%2BQrve%2FqFLobkswZKqP5cwxkQuQzwTNsEENrVOBEiROk4RSuZcH2DfUpD4wwv8IxsuqN8i5lXNkIE0mcK6eTGUFO%2F9NbKVb4gTqyPX1F7%2BYmBqm9x4IgfLPHttfP7DyRpktcPbP%2B7r1kOHlD8mL%2F%2B1iIkKkq48MOLfxrV0QCgFl6djoJUylvDt2%2BQ8lZ7eYMvIM%2BhL6t74SCRGeaQhFlgiS4PCuj%2FLiDyiqvx1rax3tS66tqu33K7eJ0S%2FZbYiCaIUfcmBfB7bGlJApnQV%2FVmXGtSAW0d0Zft2GJCJkh5VVacd0TqNJ9v5UtLZY4v1MtevE9zVYVm84XTgA5oENTogdTkxKevllVKUNGSxD07cb9PLGYGweHihZz%2FsmSHRCuTIc2eaKkPbm%2FfPjJkIeNis9HIme1fenZNFS%2B466Nt%2FjePj%2F1SSdvKscEIFDNuGc8b4W5txpv%2BjrGv%2BYcUDTiKdg29QzTgBCgo1bNneFbO7t0LT%2B2dH%2BW6qHITxiSaWNwXAKEN5L%2B6l6zBkXxkNTA1T191SKJdlkzjI60a5TgNQ%2FvUNR036BDtHcF%2F2YdY8VilrYc6EbARBbYhEachJAFxcq5IBuBBiCQ9G0noX%2FLgDDswvjEBjqkAZnR8UQj6rVI2E6eHQPXmD58%2FBGOSSIO8wuDCNst%2BAJahtqYCf8iPnGyS3jozpeZ1LuhcYUG3b6FK81rImulT88oqEaoefgW6a%2Bj8FqDoTKM%2FMFh6b0grjUxoToG0v7NdRJnMpd2PdGcI55Gn9aUkL8Wfh4wBnWvfDrH89pTc%2B7Ka9HqUUtqWNnbo4eDka%2B2oMlcFKNIllQbVapUAAcgwvTKunlA&X-Amz-Signature=f87517d6056f81ff380318c8abddc0ee8d69cc6a979b1cc6419aadbf6e94c194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SV3PXCV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDtV2JpGUsQ9HPAst6si20DyaK4TtIQxaZYYAA3%2BZLxxwIhAIBfLPeqWidLavzf1rv6eU68qIokb75qbMsQYyqU4RSnKv8DCEsQABoMNjM3NDIzMTgzODA1Igy5%2BBmq9nSlCnv8ITkq3AMvHzXbP6A7acSFEAMqD%2BQrve%2FqFLobkswZKqP5cwxkQuQzwTNsEENrVOBEiROk4RSuZcH2DfUpD4wwv8IxsuqN8i5lXNkIE0mcK6eTGUFO%2F9NbKVb4gTqyPX1F7%2BYmBqm9x4IgfLPHttfP7DyRpktcPbP%2B7r1kOHlD8mL%2F%2B1iIkKkq48MOLfxrV0QCgFl6djoJUylvDt2%2BQ8lZ7eYMvIM%2BhL6t74SCRGeaQhFlgiS4PCuj%2FLiDyiqvx1rax3tS66tqu33K7eJ0S%2FZbYiCaIUfcmBfB7bGlJApnQV%2FVmXGtSAW0d0Zft2GJCJkh5VVacd0TqNJ9v5UtLZY4v1MtevE9zVYVm84XTgA5oENTogdTkxKevllVKUNGSxD07cb9PLGYGweHihZz%2FsmSHRCuTIc2eaKkPbm%2FfPjJkIeNis9HIme1fenZNFS%2B466Nt%2FjePj%2F1SSdvKscEIFDNuGc8b4W5txpv%2BjrGv%2BYcUDTiKdg29QzTgBCgo1bNneFbO7t0LT%2B2dH%2BW6qHITxiSaWNwXAKEN5L%2B6l6zBkXxkNTA1T191SKJdlkzjI60a5TgNQ%2FvUNR036BDtHcF%2F2YdY8VilrYc6EbARBbYhEachJAFxcq5IBuBBiCQ9G0noX%2FLgDDswvjEBjqkAZnR8UQj6rVI2E6eHQPXmD58%2FBGOSSIO8wuDCNst%2BAJahtqYCf8iPnGyS3jozpeZ1LuhcYUG3b6FK81rImulT88oqEaoefgW6a%2Bj8FqDoTKM%2FMFh6b0grjUxoToG0v7NdRJnMpd2PdGcI55Gn9aUkL8Wfh4wBnWvfDrH89pTc%2B7Ka9HqUUtqWNnbo4eDka%2B2oMlcFKNIllQbVapUAAcgwvTKunlA&X-Amz-Signature=1a81677758ed1018f57e71398bed7765528377cdbe312625ccfff494ac416d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SV3PXCV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDtV2JpGUsQ9HPAst6si20DyaK4TtIQxaZYYAA3%2BZLxxwIhAIBfLPeqWidLavzf1rv6eU68qIokb75qbMsQYyqU4RSnKv8DCEsQABoMNjM3NDIzMTgzODA1Igy5%2BBmq9nSlCnv8ITkq3AMvHzXbP6A7acSFEAMqD%2BQrve%2FqFLobkswZKqP5cwxkQuQzwTNsEENrVOBEiROk4RSuZcH2DfUpD4wwv8IxsuqN8i5lXNkIE0mcK6eTGUFO%2F9NbKVb4gTqyPX1F7%2BYmBqm9x4IgfLPHttfP7DyRpktcPbP%2B7r1kOHlD8mL%2F%2B1iIkKkq48MOLfxrV0QCgFl6djoJUylvDt2%2BQ8lZ7eYMvIM%2BhL6t74SCRGeaQhFlgiS4PCuj%2FLiDyiqvx1rax3tS66tqu33K7eJ0S%2FZbYiCaIUfcmBfB7bGlJApnQV%2FVmXGtSAW0d0Zft2GJCJkh5VVacd0TqNJ9v5UtLZY4v1MtevE9zVYVm84XTgA5oENTogdTkxKevllVKUNGSxD07cb9PLGYGweHihZz%2FsmSHRCuTIc2eaKkPbm%2FfPjJkIeNis9HIme1fenZNFS%2B466Nt%2FjePj%2F1SSdvKscEIFDNuGc8b4W5txpv%2BjrGv%2BYcUDTiKdg29QzTgBCgo1bNneFbO7t0LT%2B2dH%2BW6qHITxiSaWNwXAKEN5L%2B6l6zBkXxkNTA1T191SKJdlkzjI60a5TgNQ%2FvUNR036BDtHcF%2F2YdY8VilrYc6EbARBbYhEachJAFxcq5IBuBBiCQ9G0noX%2FLgDDswvjEBjqkAZnR8UQj6rVI2E6eHQPXmD58%2FBGOSSIO8wuDCNst%2BAJahtqYCf8iPnGyS3jozpeZ1LuhcYUG3b6FK81rImulT88oqEaoefgW6a%2Bj8FqDoTKM%2FMFh6b0grjUxoToG0v7NdRJnMpd2PdGcI55Gn9aUkL8Wfh4wBnWvfDrH89pTc%2B7Ka9HqUUtqWNnbo4eDka%2B2oMlcFKNIllQbVapUAAcgwvTKunlA&X-Amz-Signature=eb3c863807359afa591ae22d8e785a2e614076245b71400c3d864cfe337621d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SV3PXCV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDtV2JpGUsQ9HPAst6si20DyaK4TtIQxaZYYAA3%2BZLxxwIhAIBfLPeqWidLavzf1rv6eU68qIokb75qbMsQYyqU4RSnKv8DCEsQABoMNjM3NDIzMTgzODA1Igy5%2BBmq9nSlCnv8ITkq3AMvHzXbP6A7acSFEAMqD%2BQrve%2FqFLobkswZKqP5cwxkQuQzwTNsEENrVOBEiROk4RSuZcH2DfUpD4wwv8IxsuqN8i5lXNkIE0mcK6eTGUFO%2F9NbKVb4gTqyPX1F7%2BYmBqm9x4IgfLPHttfP7DyRpktcPbP%2B7r1kOHlD8mL%2F%2B1iIkKkq48MOLfxrV0QCgFl6djoJUylvDt2%2BQ8lZ7eYMvIM%2BhL6t74SCRGeaQhFlgiS4PCuj%2FLiDyiqvx1rax3tS66tqu33K7eJ0S%2FZbYiCaIUfcmBfB7bGlJApnQV%2FVmXGtSAW0d0Zft2GJCJkh5VVacd0TqNJ9v5UtLZY4v1MtevE9zVYVm84XTgA5oENTogdTkxKevllVKUNGSxD07cb9PLGYGweHihZz%2FsmSHRCuTIc2eaKkPbm%2FfPjJkIeNis9HIme1fenZNFS%2B466Nt%2FjePj%2F1SSdvKscEIFDNuGc8b4W5txpv%2BjrGv%2BYcUDTiKdg29QzTgBCgo1bNneFbO7t0LT%2B2dH%2BW6qHITxiSaWNwXAKEN5L%2B6l6zBkXxkNTA1T191SKJdlkzjI60a5TgNQ%2FvUNR036BDtHcF%2F2YdY8VilrYc6EbARBbYhEachJAFxcq5IBuBBiCQ9G0noX%2FLgDDswvjEBjqkAZnR8UQj6rVI2E6eHQPXmD58%2FBGOSSIO8wuDCNst%2BAJahtqYCf8iPnGyS3jozpeZ1LuhcYUG3b6FK81rImulT88oqEaoefgW6a%2Bj8FqDoTKM%2FMFh6b0grjUxoToG0v7NdRJnMpd2PdGcI55Gn9aUkL8Wfh4wBnWvfDrH89pTc%2B7Ka9HqUUtqWNnbo4eDka%2B2oMlcFKNIllQbVapUAAcgwvTKunlA&X-Amz-Signature=2f2761f217fd4db5e13f26a29966cf93a6a66b4feb4274ab7a33b8283dd63001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SV3PXCV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDtV2JpGUsQ9HPAst6si20DyaK4TtIQxaZYYAA3%2BZLxxwIhAIBfLPeqWidLavzf1rv6eU68qIokb75qbMsQYyqU4RSnKv8DCEsQABoMNjM3NDIzMTgzODA1Igy5%2BBmq9nSlCnv8ITkq3AMvHzXbP6A7acSFEAMqD%2BQrve%2FqFLobkswZKqP5cwxkQuQzwTNsEENrVOBEiROk4RSuZcH2DfUpD4wwv8IxsuqN8i5lXNkIE0mcK6eTGUFO%2F9NbKVb4gTqyPX1F7%2BYmBqm9x4IgfLPHttfP7DyRpktcPbP%2B7r1kOHlD8mL%2F%2B1iIkKkq48MOLfxrV0QCgFl6djoJUylvDt2%2BQ8lZ7eYMvIM%2BhL6t74SCRGeaQhFlgiS4PCuj%2FLiDyiqvx1rax3tS66tqu33K7eJ0S%2FZbYiCaIUfcmBfB7bGlJApnQV%2FVmXGtSAW0d0Zft2GJCJkh5VVacd0TqNJ9v5UtLZY4v1MtevE9zVYVm84XTgA5oENTogdTkxKevllVKUNGSxD07cb9PLGYGweHihZz%2FsmSHRCuTIc2eaKkPbm%2FfPjJkIeNis9HIme1fenZNFS%2B466Nt%2FjePj%2F1SSdvKscEIFDNuGc8b4W5txpv%2BjrGv%2BYcUDTiKdg29QzTgBCgo1bNneFbO7t0LT%2B2dH%2BW6qHITxiSaWNwXAKEN5L%2B6l6zBkXxkNTA1T191SKJdlkzjI60a5TgNQ%2FvUNR036BDtHcF%2F2YdY8VilrYc6EbARBbYhEachJAFxcq5IBuBBiCQ9G0noX%2FLgDDswvjEBjqkAZnR8UQj6rVI2E6eHQPXmD58%2FBGOSSIO8wuDCNst%2BAJahtqYCf8iPnGyS3jozpeZ1LuhcYUG3b6FK81rImulT88oqEaoefgW6a%2Bj8FqDoTKM%2FMFh6b0grjUxoToG0v7NdRJnMpd2PdGcI55Gn9aUkL8Wfh4wBnWvfDrH89pTc%2B7Ka9HqUUtqWNnbo4eDka%2B2oMlcFKNIllQbVapUAAcgwvTKunlA&X-Amz-Signature=292a3dac228340820b0d04396d1db491d77a1d3f4203a5eecda3c1ba00842b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SV3PXCV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDtV2JpGUsQ9HPAst6si20DyaK4TtIQxaZYYAA3%2BZLxxwIhAIBfLPeqWidLavzf1rv6eU68qIokb75qbMsQYyqU4RSnKv8DCEsQABoMNjM3NDIzMTgzODA1Igy5%2BBmq9nSlCnv8ITkq3AMvHzXbP6A7acSFEAMqD%2BQrve%2FqFLobkswZKqP5cwxkQuQzwTNsEENrVOBEiROk4RSuZcH2DfUpD4wwv8IxsuqN8i5lXNkIE0mcK6eTGUFO%2F9NbKVb4gTqyPX1F7%2BYmBqm9x4IgfLPHttfP7DyRpktcPbP%2B7r1kOHlD8mL%2F%2B1iIkKkq48MOLfxrV0QCgFl6djoJUylvDt2%2BQ8lZ7eYMvIM%2BhL6t74SCRGeaQhFlgiS4PCuj%2FLiDyiqvx1rax3tS66tqu33K7eJ0S%2FZbYiCaIUfcmBfB7bGlJApnQV%2FVmXGtSAW0d0Zft2GJCJkh5VVacd0TqNJ9v5UtLZY4v1MtevE9zVYVm84XTgA5oENTogdTkxKevllVKUNGSxD07cb9PLGYGweHihZz%2FsmSHRCuTIc2eaKkPbm%2FfPjJkIeNis9HIme1fenZNFS%2B466Nt%2FjePj%2F1SSdvKscEIFDNuGc8b4W5txpv%2BjrGv%2BYcUDTiKdg29QzTgBCgo1bNneFbO7t0LT%2B2dH%2BW6qHITxiSaWNwXAKEN5L%2B6l6zBkXxkNTA1T191SKJdlkzjI60a5TgNQ%2FvUNR036BDtHcF%2F2YdY8VilrYc6EbARBbYhEachJAFxcq5IBuBBiCQ9G0noX%2FLgDDswvjEBjqkAZnR8UQj6rVI2E6eHQPXmD58%2FBGOSSIO8wuDCNst%2BAJahtqYCf8iPnGyS3jozpeZ1LuhcYUG3b6FK81rImulT88oqEaoefgW6a%2Bj8FqDoTKM%2FMFh6b0grjUxoToG0v7NdRJnMpd2PdGcI55Gn9aUkL8Wfh4wBnWvfDrH89pTc%2B7Ka9HqUUtqWNnbo4eDka%2B2oMlcFKNIllQbVapUAAcgwvTKunlA&X-Amz-Signature=cee226bd4f39634bad4e6995083c444a876f6e40eba4c43fb435c9b656e82ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
