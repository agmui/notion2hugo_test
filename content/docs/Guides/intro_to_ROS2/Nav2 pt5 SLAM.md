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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATEVJL2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKSazVPzcPIunPBzmrOMZwuCKJnTGIYG4kkOO5N6x3jAiBZPI2yCbxgL8BWOrCzjelo4Xwpcye7faE6Ab6URtRK4SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALprYUuwk3jqJnvMKtwD%2F0%2B%2FuE67H%2BrZGP8KsLNLXNmGfBvuDWf8R7ji1q33ZIwP9DN23OMbYdDCnHl4tT6RF9RbGcDvXz205IbK5JM97zqvCKXnUOW7LIbpnXIpxrTBrOVQ8qtEbnp%2FbTKjpUmZ5Cmnv9hR3nimWPFYo%2BI4i27%2Fo%2BRTAVWhLSqXn%2BZm52jkWlQMA7cpLOQWwP79f%2BZ6SfzUklof3iIhHm0MGiGkY%2BdIdQsKnRfVlVNYvKgzt%2FhymkTPLQKWWNB7jno88YxtTVc5%2BKcEqRwkI7Mpsd2W0y8TUTJ6XxG928LAipct8XR0SV789AJjCEWjbz73C6g2KOCSUFdCTBD%2BO9nBQ3TG%2BHCgjHBX0OyDmkUsy6xKy5vB74mv4Yzehn%2BXRp7JnSv8A0pUhHsRAlw6XUZqwpKQZNH7DEf8wap9pDiZ8rI9B4LvUznUESfu8HDN4JF70ExGOaKo67%2BGq3ixkDoqLhgAdc56PNF9Er9IjKiq%2FnXgFJo4vfynHtvYgToymO54fSCAW6m2nHVwObAWe2EXmD64UpAziBRy4eqqhBkiXqdAsRR9D1Ulpzf9lOPS3qZfHL2izOMctbunmtTXDx1wkYNR1ngSrj79jKDtekimiEou%2FfOn3qphozCkKiRkp%2F0wp5GuxAY6pgGa81Y5NnUuMr47ofSyZFAgA1DvHTEcgh1TjOVT3KXMzO84mSs5y0SpaaPi4ghXAzvnATXl6dcj%2BOWe5bXVMImclGFa210sgqVjIDv8YB16XC%2BmLXbUN85ndy%2FQVKHqgRL75dNhaoLUsoIAQQdNzlaoTOqxmFmUt1f9LF83M5iiKhT1P%2FwtCtkRreFXytykak2fTiwgZ%2BUp8YJ3ruKR8yoLRyI0Rrbp&X-Amz-Signature=6aa7ac17c5d6d745df7185295a2f5a95ff38818d7a753fd35182a6b92d00e893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATEVJL2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKSazVPzcPIunPBzmrOMZwuCKJnTGIYG4kkOO5N6x3jAiBZPI2yCbxgL8BWOrCzjelo4Xwpcye7faE6Ab6URtRK4SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALprYUuwk3jqJnvMKtwD%2F0%2B%2FuE67H%2BrZGP8KsLNLXNmGfBvuDWf8R7ji1q33ZIwP9DN23OMbYdDCnHl4tT6RF9RbGcDvXz205IbK5JM97zqvCKXnUOW7LIbpnXIpxrTBrOVQ8qtEbnp%2FbTKjpUmZ5Cmnv9hR3nimWPFYo%2BI4i27%2Fo%2BRTAVWhLSqXn%2BZm52jkWlQMA7cpLOQWwP79f%2BZ6SfzUklof3iIhHm0MGiGkY%2BdIdQsKnRfVlVNYvKgzt%2FhymkTPLQKWWNB7jno88YxtTVc5%2BKcEqRwkI7Mpsd2W0y8TUTJ6XxG928LAipct8XR0SV789AJjCEWjbz73C6g2KOCSUFdCTBD%2BO9nBQ3TG%2BHCgjHBX0OyDmkUsy6xKy5vB74mv4Yzehn%2BXRp7JnSv8A0pUhHsRAlw6XUZqwpKQZNH7DEf8wap9pDiZ8rI9B4LvUznUESfu8HDN4JF70ExGOaKo67%2BGq3ixkDoqLhgAdc56PNF9Er9IjKiq%2FnXgFJo4vfynHtvYgToymO54fSCAW6m2nHVwObAWe2EXmD64UpAziBRy4eqqhBkiXqdAsRR9D1Ulpzf9lOPS3qZfHL2izOMctbunmtTXDx1wkYNR1ngSrj79jKDtekimiEou%2FfOn3qphozCkKiRkp%2F0wp5GuxAY6pgGa81Y5NnUuMr47ofSyZFAgA1DvHTEcgh1TjOVT3KXMzO84mSs5y0SpaaPi4ghXAzvnATXl6dcj%2BOWe5bXVMImclGFa210sgqVjIDv8YB16XC%2BmLXbUN85ndy%2FQVKHqgRL75dNhaoLUsoIAQQdNzlaoTOqxmFmUt1f9LF83M5iiKhT1P%2FwtCtkRreFXytykak2fTiwgZ%2BUp8YJ3ruKR8yoLRyI0Rrbp&X-Amz-Signature=baa0cd7b3c122d2241d638b2ab02608110263353b5f4cf464c9dc82cd65af6b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATEVJL2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKSazVPzcPIunPBzmrOMZwuCKJnTGIYG4kkOO5N6x3jAiBZPI2yCbxgL8BWOrCzjelo4Xwpcye7faE6Ab6URtRK4SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALprYUuwk3jqJnvMKtwD%2F0%2B%2FuE67H%2BrZGP8KsLNLXNmGfBvuDWf8R7ji1q33ZIwP9DN23OMbYdDCnHl4tT6RF9RbGcDvXz205IbK5JM97zqvCKXnUOW7LIbpnXIpxrTBrOVQ8qtEbnp%2FbTKjpUmZ5Cmnv9hR3nimWPFYo%2BI4i27%2Fo%2BRTAVWhLSqXn%2BZm52jkWlQMA7cpLOQWwP79f%2BZ6SfzUklof3iIhHm0MGiGkY%2BdIdQsKnRfVlVNYvKgzt%2FhymkTPLQKWWNB7jno88YxtTVc5%2BKcEqRwkI7Mpsd2W0y8TUTJ6XxG928LAipct8XR0SV789AJjCEWjbz73C6g2KOCSUFdCTBD%2BO9nBQ3TG%2BHCgjHBX0OyDmkUsy6xKy5vB74mv4Yzehn%2BXRp7JnSv8A0pUhHsRAlw6XUZqwpKQZNH7DEf8wap9pDiZ8rI9B4LvUznUESfu8HDN4JF70ExGOaKo67%2BGq3ixkDoqLhgAdc56PNF9Er9IjKiq%2FnXgFJo4vfynHtvYgToymO54fSCAW6m2nHVwObAWe2EXmD64UpAziBRy4eqqhBkiXqdAsRR9D1Ulpzf9lOPS3qZfHL2izOMctbunmtTXDx1wkYNR1ngSrj79jKDtekimiEou%2FfOn3qphozCkKiRkp%2F0wp5GuxAY6pgGa81Y5NnUuMr47ofSyZFAgA1DvHTEcgh1TjOVT3KXMzO84mSs5y0SpaaPi4ghXAzvnATXl6dcj%2BOWe5bXVMImclGFa210sgqVjIDv8YB16XC%2BmLXbUN85ndy%2FQVKHqgRL75dNhaoLUsoIAQQdNzlaoTOqxmFmUt1f9LF83M5iiKhT1P%2FwtCtkRreFXytykak2fTiwgZ%2BUp8YJ3ruKR8yoLRyI0Rrbp&X-Amz-Signature=ae28192a9e961961563fa10d6b9b014c87cdd9d525e166274fc65e3f282e6f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATEVJL2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKSazVPzcPIunPBzmrOMZwuCKJnTGIYG4kkOO5N6x3jAiBZPI2yCbxgL8BWOrCzjelo4Xwpcye7faE6Ab6URtRK4SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALprYUuwk3jqJnvMKtwD%2F0%2B%2FuE67H%2BrZGP8KsLNLXNmGfBvuDWf8R7ji1q33ZIwP9DN23OMbYdDCnHl4tT6RF9RbGcDvXz205IbK5JM97zqvCKXnUOW7LIbpnXIpxrTBrOVQ8qtEbnp%2FbTKjpUmZ5Cmnv9hR3nimWPFYo%2BI4i27%2Fo%2BRTAVWhLSqXn%2BZm52jkWlQMA7cpLOQWwP79f%2BZ6SfzUklof3iIhHm0MGiGkY%2BdIdQsKnRfVlVNYvKgzt%2FhymkTPLQKWWNB7jno88YxtTVc5%2BKcEqRwkI7Mpsd2W0y8TUTJ6XxG928LAipct8XR0SV789AJjCEWjbz73C6g2KOCSUFdCTBD%2BO9nBQ3TG%2BHCgjHBX0OyDmkUsy6xKy5vB74mv4Yzehn%2BXRp7JnSv8A0pUhHsRAlw6XUZqwpKQZNH7DEf8wap9pDiZ8rI9B4LvUznUESfu8HDN4JF70ExGOaKo67%2BGq3ixkDoqLhgAdc56PNF9Er9IjKiq%2FnXgFJo4vfynHtvYgToymO54fSCAW6m2nHVwObAWe2EXmD64UpAziBRy4eqqhBkiXqdAsRR9D1Ulpzf9lOPS3qZfHL2izOMctbunmtTXDx1wkYNR1ngSrj79jKDtekimiEou%2FfOn3qphozCkKiRkp%2F0wp5GuxAY6pgGa81Y5NnUuMr47ofSyZFAgA1DvHTEcgh1TjOVT3KXMzO84mSs5y0SpaaPi4ghXAzvnATXl6dcj%2BOWe5bXVMImclGFa210sgqVjIDv8YB16XC%2BmLXbUN85ndy%2FQVKHqgRL75dNhaoLUsoIAQQdNzlaoTOqxmFmUt1f9LF83M5iiKhT1P%2FwtCtkRreFXytykak2fTiwgZ%2BUp8YJ3ruKR8yoLRyI0Rrbp&X-Amz-Signature=8e7b04f28df74672fce112d99fd9edb258f8ec574d1cb042d2e9a7e98fdc1aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATEVJL2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKSazVPzcPIunPBzmrOMZwuCKJnTGIYG4kkOO5N6x3jAiBZPI2yCbxgL8BWOrCzjelo4Xwpcye7faE6Ab6URtRK4SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALprYUuwk3jqJnvMKtwD%2F0%2B%2FuE67H%2BrZGP8KsLNLXNmGfBvuDWf8R7ji1q33ZIwP9DN23OMbYdDCnHl4tT6RF9RbGcDvXz205IbK5JM97zqvCKXnUOW7LIbpnXIpxrTBrOVQ8qtEbnp%2FbTKjpUmZ5Cmnv9hR3nimWPFYo%2BI4i27%2Fo%2BRTAVWhLSqXn%2BZm52jkWlQMA7cpLOQWwP79f%2BZ6SfzUklof3iIhHm0MGiGkY%2BdIdQsKnRfVlVNYvKgzt%2FhymkTPLQKWWNB7jno88YxtTVc5%2BKcEqRwkI7Mpsd2W0y8TUTJ6XxG928LAipct8XR0SV789AJjCEWjbz73C6g2KOCSUFdCTBD%2BO9nBQ3TG%2BHCgjHBX0OyDmkUsy6xKy5vB74mv4Yzehn%2BXRp7JnSv8A0pUhHsRAlw6XUZqwpKQZNH7DEf8wap9pDiZ8rI9B4LvUznUESfu8HDN4JF70ExGOaKo67%2BGq3ixkDoqLhgAdc56PNF9Er9IjKiq%2FnXgFJo4vfynHtvYgToymO54fSCAW6m2nHVwObAWe2EXmD64UpAziBRy4eqqhBkiXqdAsRR9D1Ulpzf9lOPS3qZfHL2izOMctbunmtTXDx1wkYNR1ngSrj79jKDtekimiEou%2FfOn3qphozCkKiRkp%2F0wp5GuxAY6pgGa81Y5NnUuMr47ofSyZFAgA1DvHTEcgh1TjOVT3KXMzO84mSs5y0SpaaPi4ghXAzvnATXl6dcj%2BOWe5bXVMImclGFa210sgqVjIDv8YB16XC%2BmLXbUN85ndy%2FQVKHqgRL75dNhaoLUsoIAQQdNzlaoTOqxmFmUt1f9LF83M5iiKhT1P%2FwtCtkRreFXytykak2fTiwgZ%2BUp8YJ3ruKR8yoLRyI0Rrbp&X-Amz-Signature=5dfe99620a8630658fede3671b294b6300539de068b62edf0789246691588aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATEVJL2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKSazVPzcPIunPBzmrOMZwuCKJnTGIYG4kkOO5N6x3jAiBZPI2yCbxgL8BWOrCzjelo4Xwpcye7faE6Ab6URtRK4SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALprYUuwk3jqJnvMKtwD%2F0%2B%2FuE67H%2BrZGP8KsLNLXNmGfBvuDWf8R7ji1q33ZIwP9DN23OMbYdDCnHl4tT6RF9RbGcDvXz205IbK5JM97zqvCKXnUOW7LIbpnXIpxrTBrOVQ8qtEbnp%2FbTKjpUmZ5Cmnv9hR3nimWPFYo%2BI4i27%2Fo%2BRTAVWhLSqXn%2BZm52jkWlQMA7cpLOQWwP79f%2BZ6SfzUklof3iIhHm0MGiGkY%2BdIdQsKnRfVlVNYvKgzt%2FhymkTPLQKWWNB7jno88YxtTVc5%2BKcEqRwkI7Mpsd2W0y8TUTJ6XxG928LAipct8XR0SV789AJjCEWjbz73C6g2KOCSUFdCTBD%2BO9nBQ3TG%2BHCgjHBX0OyDmkUsy6xKy5vB74mv4Yzehn%2BXRp7JnSv8A0pUhHsRAlw6XUZqwpKQZNH7DEf8wap9pDiZ8rI9B4LvUznUESfu8HDN4JF70ExGOaKo67%2BGq3ixkDoqLhgAdc56PNF9Er9IjKiq%2FnXgFJo4vfynHtvYgToymO54fSCAW6m2nHVwObAWe2EXmD64UpAziBRy4eqqhBkiXqdAsRR9D1Ulpzf9lOPS3qZfHL2izOMctbunmtTXDx1wkYNR1ngSrj79jKDtekimiEou%2FfOn3qphozCkKiRkp%2F0wp5GuxAY6pgGa81Y5NnUuMr47ofSyZFAgA1DvHTEcgh1TjOVT3KXMzO84mSs5y0SpaaPi4ghXAzvnATXl6dcj%2BOWe5bXVMImclGFa210sgqVjIDv8YB16XC%2BmLXbUN85ndy%2FQVKHqgRL75dNhaoLUsoIAQQdNzlaoTOqxmFmUt1f9LF83M5iiKhT1P%2FwtCtkRreFXytykak2fTiwgZ%2BUp8YJ3ruKR8yoLRyI0Rrbp&X-Amz-Signature=eec302b81e51ff3043f5eec0f17bb8f2f920597d721c84e087eb451af50a4696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATEVJL2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKSazVPzcPIunPBzmrOMZwuCKJnTGIYG4kkOO5N6x3jAiBZPI2yCbxgL8BWOrCzjelo4Xwpcye7faE6Ab6URtRK4SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALprYUuwk3jqJnvMKtwD%2F0%2B%2FuE67H%2BrZGP8KsLNLXNmGfBvuDWf8R7ji1q33ZIwP9DN23OMbYdDCnHl4tT6RF9RbGcDvXz205IbK5JM97zqvCKXnUOW7LIbpnXIpxrTBrOVQ8qtEbnp%2FbTKjpUmZ5Cmnv9hR3nimWPFYo%2BI4i27%2Fo%2BRTAVWhLSqXn%2BZm52jkWlQMA7cpLOQWwP79f%2BZ6SfzUklof3iIhHm0MGiGkY%2BdIdQsKnRfVlVNYvKgzt%2FhymkTPLQKWWNB7jno88YxtTVc5%2BKcEqRwkI7Mpsd2W0y8TUTJ6XxG928LAipct8XR0SV789AJjCEWjbz73C6g2KOCSUFdCTBD%2BO9nBQ3TG%2BHCgjHBX0OyDmkUsy6xKy5vB74mv4Yzehn%2BXRp7JnSv8A0pUhHsRAlw6XUZqwpKQZNH7DEf8wap9pDiZ8rI9B4LvUznUESfu8HDN4JF70ExGOaKo67%2BGq3ixkDoqLhgAdc56PNF9Er9IjKiq%2FnXgFJo4vfynHtvYgToymO54fSCAW6m2nHVwObAWe2EXmD64UpAziBRy4eqqhBkiXqdAsRR9D1Ulpzf9lOPS3qZfHL2izOMctbunmtTXDx1wkYNR1ngSrj79jKDtekimiEou%2FfOn3qphozCkKiRkp%2F0wp5GuxAY6pgGa81Y5NnUuMr47ofSyZFAgA1DvHTEcgh1TjOVT3KXMzO84mSs5y0SpaaPi4ghXAzvnATXl6dcj%2BOWe5bXVMImclGFa210sgqVjIDv8YB16XC%2BmLXbUN85ndy%2FQVKHqgRL75dNhaoLUsoIAQQdNzlaoTOqxmFmUt1f9LF83M5iiKhT1P%2FwtCtkRreFXytykak2fTiwgZ%2BUp8YJ3ruKR8yoLRyI0Rrbp&X-Amz-Signature=5996c038e56bbe1274b2adccfecd1bee6f7a62c341d0bdc30804ab6bdd03f39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATEVJL2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKSazVPzcPIunPBzmrOMZwuCKJnTGIYG4kkOO5N6x3jAiBZPI2yCbxgL8BWOrCzjelo4Xwpcye7faE6Ab6URtRK4SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALprYUuwk3jqJnvMKtwD%2F0%2B%2FuE67H%2BrZGP8KsLNLXNmGfBvuDWf8R7ji1q33ZIwP9DN23OMbYdDCnHl4tT6RF9RbGcDvXz205IbK5JM97zqvCKXnUOW7LIbpnXIpxrTBrOVQ8qtEbnp%2FbTKjpUmZ5Cmnv9hR3nimWPFYo%2BI4i27%2Fo%2BRTAVWhLSqXn%2BZm52jkWlQMA7cpLOQWwP79f%2BZ6SfzUklof3iIhHm0MGiGkY%2BdIdQsKnRfVlVNYvKgzt%2FhymkTPLQKWWNB7jno88YxtTVc5%2BKcEqRwkI7Mpsd2W0y8TUTJ6XxG928LAipct8XR0SV789AJjCEWjbz73C6g2KOCSUFdCTBD%2BO9nBQ3TG%2BHCgjHBX0OyDmkUsy6xKy5vB74mv4Yzehn%2BXRp7JnSv8A0pUhHsRAlw6XUZqwpKQZNH7DEf8wap9pDiZ8rI9B4LvUznUESfu8HDN4JF70ExGOaKo67%2BGq3ixkDoqLhgAdc56PNF9Er9IjKiq%2FnXgFJo4vfynHtvYgToymO54fSCAW6m2nHVwObAWe2EXmD64UpAziBRy4eqqhBkiXqdAsRR9D1Ulpzf9lOPS3qZfHL2izOMctbunmtTXDx1wkYNR1ngSrj79jKDtekimiEou%2FfOn3qphozCkKiRkp%2F0wp5GuxAY6pgGa81Y5NnUuMr47ofSyZFAgA1DvHTEcgh1TjOVT3KXMzO84mSs5y0SpaaPi4ghXAzvnATXl6dcj%2BOWe5bXVMImclGFa210sgqVjIDv8YB16XC%2BmLXbUN85ndy%2FQVKHqgRL75dNhaoLUsoIAQQdNzlaoTOqxmFmUt1f9LF83M5iiKhT1P%2FwtCtkRreFXytykak2fTiwgZ%2BUp8YJ3ruKR8yoLRyI0Rrbp&X-Amz-Signature=6faad8eae8f2533f83a506530a126d0ecbbd6de72c6f37af81438222594cafc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATEVJL2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKSazVPzcPIunPBzmrOMZwuCKJnTGIYG4kkOO5N6x3jAiBZPI2yCbxgL8BWOrCzjelo4Xwpcye7faE6Ab6URtRK4SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALprYUuwk3jqJnvMKtwD%2F0%2B%2FuE67H%2BrZGP8KsLNLXNmGfBvuDWf8R7ji1q33ZIwP9DN23OMbYdDCnHl4tT6RF9RbGcDvXz205IbK5JM97zqvCKXnUOW7LIbpnXIpxrTBrOVQ8qtEbnp%2FbTKjpUmZ5Cmnv9hR3nimWPFYo%2BI4i27%2Fo%2BRTAVWhLSqXn%2BZm52jkWlQMA7cpLOQWwP79f%2BZ6SfzUklof3iIhHm0MGiGkY%2BdIdQsKnRfVlVNYvKgzt%2FhymkTPLQKWWNB7jno88YxtTVc5%2BKcEqRwkI7Mpsd2W0y8TUTJ6XxG928LAipct8XR0SV789AJjCEWjbz73C6g2KOCSUFdCTBD%2BO9nBQ3TG%2BHCgjHBX0OyDmkUsy6xKy5vB74mv4Yzehn%2BXRp7JnSv8A0pUhHsRAlw6XUZqwpKQZNH7DEf8wap9pDiZ8rI9B4LvUznUESfu8HDN4JF70ExGOaKo67%2BGq3ixkDoqLhgAdc56PNF9Er9IjKiq%2FnXgFJo4vfynHtvYgToymO54fSCAW6m2nHVwObAWe2EXmD64UpAziBRy4eqqhBkiXqdAsRR9D1Ulpzf9lOPS3qZfHL2izOMctbunmtTXDx1wkYNR1ngSrj79jKDtekimiEou%2FfOn3qphozCkKiRkp%2F0wp5GuxAY6pgGa81Y5NnUuMr47ofSyZFAgA1DvHTEcgh1TjOVT3KXMzO84mSs5y0SpaaPi4ghXAzvnATXl6dcj%2BOWe5bXVMImclGFa210sgqVjIDv8YB16XC%2BmLXbUN85ndy%2FQVKHqgRL75dNhaoLUsoIAQQdNzlaoTOqxmFmUt1f9LF83M5iiKhT1P%2FwtCtkRreFXytykak2fTiwgZ%2BUp8YJ3ruKR8yoLRyI0Rrbp&X-Amz-Signature=2cecd210a3399d8c2f9a168e6f6dbfb5e8f55082cd447b0525815180b168a36d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATEVJL2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKSazVPzcPIunPBzmrOMZwuCKJnTGIYG4kkOO5N6x3jAiBZPI2yCbxgL8BWOrCzjelo4Xwpcye7faE6Ab6URtRK4SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALprYUuwk3jqJnvMKtwD%2F0%2B%2FuE67H%2BrZGP8KsLNLXNmGfBvuDWf8R7ji1q33ZIwP9DN23OMbYdDCnHl4tT6RF9RbGcDvXz205IbK5JM97zqvCKXnUOW7LIbpnXIpxrTBrOVQ8qtEbnp%2FbTKjpUmZ5Cmnv9hR3nimWPFYo%2BI4i27%2Fo%2BRTAVWhLSqXn%2BZm52jkWlQMA7cpLOQWwP79f%2BZ6SfzUklof3iIhHm0MGiGkY%2BdIdQsKnRfVlVNYvKgzt%2FhymkTPLQKWWNB7jno88YxtTVc5%2BKcEqRwkI7Mpsd2W0y8TUTJ6XxG928LAipct8XR0SV789AJjCEWjbz73C6g2KOCSUFdCTBD%2BO9nBQ3TG%2BHCgjHBX0OyDmkUsy6xKy5vB74mv4Yzehn%2BXRp7JnSv8A0pUhHsRAlw6XUZqwpKQZNH7DEf8wap9pDiZ8rI9B4LvUznUESfu8HDN4JF70ExGOaKo67%2BGq3ixkDoqLhgAdc56PNF9Er9IjKiq%2FnXgFJo4vfynHtvYgToymO54fSCAW6m2nHVwObAWe2EXmD64UpAziBRy4eqqhBkiXqdAsRR9D1Ulpzf9lOPS3qZfHL2izOMctbunmtTXDx1wkYNR1ngSrj79jKDtekimiEou%2FfOn3qphozCkKiRkp%2F0wp5GuxAY6pgGa81Y5NnUuMr47ofSyZFAgA1DvHTEcgh1TjOVT3KXMzO84mSs5y0SpaaPi4ghXAzvnATXl6dcj%2BOWe5bXVMImclGFa210sgqVjIDv8YB16XC%2BmLXbUN85ndy%2FQVKHqgRL75dNhaoLUsoIAQQdNzlaoTOqxmFmUt1f9LF83M5iiKhT1P%2FwtCtkRreFXytykak2fTiwgZ%2BUp8YJ3ruKR8yoLRyI0Rrbp&X-Amz-Signature=cdafa9a8625162dae780d690f0eecd37866cf32181038050e3fd497efa810572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATEVJL2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKSazVPzcPIunPBzmrOMZwuCKJnTGIYG4kkOO5N6x3jAiBZPI2yCbxgL8BWOrCzjelo4Xwpcye7faE6Ab6URtRK4SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALprYUuwk3jqJnvMKtwD%2F0%2B%2FuE67H%2BrZGP8KsLNLXNmGfBvuDWf8R7ji1q33ZIwP9DN23OMbYdDCnHl4tT6RF9RbGcDvXz205IbK5JM97zqvCKXnUOW7LIbpnXIpxrTBrOVQ8qtEbnp%2FbTKjpUmZ5Cmnv9hR3nimWPFYo%2BI4i27%2Fo%2BRTAVWhLSqXn%2BZm52jkWlQMA7cpLOQWwP79f%2BZ6SfzUklof3iIhHm0MGiGkY%2BdIdQsKnRfVlVNYvKgzt%2FhymkTPLQKWWNB7jno88YxtTVc5%2BKcEqRwkI7Mpsd2W0y8TUTJ6XxG928LAipct8XR0SV789AJjCEWjbz73C6g2KOCSUFdCTBD%2BO9nBQ3TG%2BHCgjHBX0OyDmkUsy6xKy5vB74mv4Yzehn%2BXRp7JnSv8A0pUhHsRAlw6XUZqwpKQZNH7DEf8wap9pDiZ8rI9B4LvUznUESfu8HDN4JF70ExGOaKo67%2BGq3ixkDoqLhgAdc56PNF9Er9IjKiq%2FnXgFJo4vfynHtvYgToymO54fSCAW6m2nHVwObAWe2EXmD64UpAziBRy4eqqhBkiXqdAsRR9D1Ulpzf9lOPS3qZfHL2izOMctbunmtTXDx1wkYNR1ngSrj79jKDtekimiEou%2FfOn3qphozCkKiRkp%2F0wp5GuxAY6pgGa81Y5NnUuMr47ofSyZFAgA1DvHTEcgh1TjOVT3KXMzO84mSs5y0SpaaPi4ghXAzvnATXl6dcj%2BOWe5bXVMImclGFa210sgqVjIDv8YB16XC%2BmLXbUN85ndy%2FQVKHqgRL75dNhaoLUsoIAQQdNzlaoTOqxmFmUt1f9LF83M5iiKhT1P%2FwtCtkRreFXytykak2fTiwgZ%2BUp8YJ3ruKR8yoLRyI0Rrbp&X-Amz-Signature=d03a17a25e2184bf2deb84ee9c4a2ab2198ca523070fea81a8fc6fa29199c0e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATEVJL2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKSazVPzcPIunPBzmrOMZwuCKJnTGIYG4kkOO5N6x3jAiBZPI2yCbxgL8BWOrCzjelo4Xwpcye7faE6Ab6URtRK4SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALprYUuwk3jqJnvMKtwD%2F0%2B%2FuE67H%2BrZGP8KsLNLXNmGfBvuDWf8R7ji1q33ZIwP9DN23OMbYdDCnHl4tT6RF9RbGcDvXz205IbK5JM97zqvCKXnUOW7LIbpnXIpxrTBrOVQ8qtEbnp%2FbTKjpUmZ5Cmnv9hR3nimWPFYo%2BI4i27%2Fo%2BRTAVWhLSqXn%2BZm52jkWlQMA7cpLOQWwP79f%2BZ6SfzUklof3iIhHm0MGiGkY%2BdIdQsKnRfVlVNYvKgzt%2FhymkTPLQKWWNB7jno88YxtTVc5%2BKcEqRwkI7Mpsd2W0y8TUTJ6XxG928LAipct8XR0SV789AJjCEWjbz73C6g2KOCSUFdCTBD%2BO9nBQ3TG%2BHCgjHBX0OyDmkUsy6xKy5vB74mv4Yzehn%2BXRp7JnSv8A0pUhHsRAlw6XUZqwpKQZNH7DEf8wap9pDiZ8rI9B4LvUznUESfu8HDN4JF70ExGOaKo67%2BGq3ixkDoqLhgAdc56PNF9Er9IjKiq%2FnXgFJo4vfynHtvYgToymO54fSCAW6m2nHVwObAWe2EXmD64UpAziBRy4eqqhBkiXqdAsRR9D1Ulpzf9lOPS3qZfHL2izOMctbunmtTXDx1wkYNR1ngSrj79jKDtekimiEou%2FfOn3qphozCkKiRkp%2F0wp5GuxAY6pgGa81Y5NnUuMr47ofSyZFAgA1DvHTEcgh1TjOVT3KXMzO84mSs5y0SpaaPi4ghXAzvnATXl6dcj%2BOWe5bXVMImclGFa210sgqVjIDv8YB16XC%2BmLXbUN85ndy%2FQVKHqgRL75dNhaoLUsoIAQQdNzlaoTOqxmFmUt1f9LF83M5iiKhT1P%2FwtCtkRreFXytykak2fTiwgZ%2BUp8YJ3ruKR8yoLRyI0Rrbp&X-Amz-Signature=8c6eb4f74a0ac79994a091013db99109c3d39273d0ddd7b5e97c5c78c628f941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATEVJL2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKSazVPzcPIunPBzmrOMZwuCKJnTGIYG4kkOO5N6x3jAiBZPI2yCbxgL8BWOrCzjelo4Xwpcye7faE6Ab6URtRK4SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALprYUuwk3jqJnvMKtwD%2F0%2B%2FuE67H%2BrZGP8KsLNLXNmGfBvuDWf8R7ji1q33ZIwP9DN23OMbYdDCnHl4tT6RF9RbGcDvXz205IbK5JM97zqvCKXnUOW7LIbpnXIpxrTBrOVQ8qtEbnp%2FbTKjpUmZ5Cmnv9hR3nimWPFYo%2BI4i27%2Fo%2BRTAVWhLSqXn%2BZm52jkWlQMA7cpLOQWwP79f%2BZ6SfzUklof3iIhHm0MGiGkY%2BdIdQsKnRfVlVNYvKgzt%2FhymkTPLQKWWNB7jno88YxtTVc5%2BKcEqRwkI7Mpsd2W0y8TUTJ6XxG928LAipct8XR0SV789AJjCEWjbz73C6g2KOCSUFdCTBD%2BO9nBQ3TG%2BHCgjHBX0OyDmkUsy6xKy5vB74mv4Yzehn%2BXRp7JnSv8A0pUhHsRAlw6XUZqwpKQZNH7DEf8wap9pDiZ8rI9B4LvUznUESfu8HDN4JF70ExGOaKo67%2BGq3ixkDoqLhgAdc56PNF9Er9IjKiq%2FnXgFJo4vfynHtvYgToymO54fSCAW6m2nHVwObAWe2EXmD64UpAziBRy4eqqhBkiXqdAsRR9D1Ulpzf9lOPS3qZfHL2izOMctbunmtTXDx1wkYNR1ngSrj79jKDtekimiEou%2FfOn3qphozCkKiRkp%2F0wp5GuxAY6pgGa81Y5NnUuMr47ofSyZFAgA1DvHTEcgh1TjOVT3KXMzO84mSs5y0SpaaPi4ghXAzvnATXl6dcj%2BOWe5bXVMImclGFa210sgqVjIDv8YB16XC%2BmLXbUN85ndy%2FQVKHqgRL75dNhaoLUsoIAQQdNzlaoTOqxmFmUt1f9LF83M5iiKhT1P%2FwtCtkRreFXytykak2fTiwgZ%2BUp8YJ3ruKR8yoLRyI0Rrbp&X-Amz-Signature=0853ca9db199ee46562cd78d7e100b0aefba31649ebcb68ed07f01271dff8410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATEVJL2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKSazVPzcPIunPBzmrOMZwuCKJnTGIYG4kkOO5N6x3jAiBZPI2yCbxgL8BWOrCzjelo4Xwpcye7faE6Ab6URtRK4SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALprYUuwk3jqJnvMKtwD%2F0%2B%2FuE67H%2BrZGP8KsLNLXNmGfBvuDWf8R7ji1q33ZIwP9DN23OMbYdDCnHl4tT6RF9RbGcDvXz205IbK5JM97zqvCKXnUOW7LIbpnXIpxrTBrOVQ8qtEbnp%2FbTKjpUmZ5Cmnv9hR3nimWPFYo%2BI4i27%2Fo%2BRTAVWhLSqXn%2BZm52jkWlQMA7cpLOQWwP79f%2BZ6SfzUklof3iIhHm0MGiGkY%2BdIdQsKnRfVlVNYvKgzt%2FhymkTPLQKWWNB7jno88YxtTVc5%2BKcEqRwkI7Mpsd2W0y8TUTJ6XxG928LAipct8XR0SV789AJjCEWjbz73C6g2KOCSUFdCTBD%2BO9nBQ3TG%2BHCgjHBX0OyDmkUsy6xKy5vB74mv4Yzehn%2BXRp7JnSv8A0pUhHsRAlw6XUZqwpKQZNH7DEf8wap9pDiZ8rI9B4LvUznUESfu8HDN4JF70ExGOaKo67%2BGq3ixkDoqLhgAdc56PNF9Er9IjKiq%2FnXgFJo4vfynHtvYgToymO54fSCAW6m2nHVwObAWe2EXmD64UpAziBRy4eqqhBkiXqdAsRR9D1Ulpzf9lOPS3qZfHL2izOMctbunmtTXDx1wkYNR1ngSrj79jKDtekimiEou%2FfOn3qphozCkKiRkp%2F0wp5GuxAY6pgGa81Y5NnUuMr47ofSyZFAgA1DvHTEcgh1TjOVT3KXMzO84mSs5y0SpaaPi4ghXAzvnATXl6dcj%2BOWe5bXVMImclGFa210sgqVjIDv8YB16XC%2BmLXbUN85ndy%2FQVKHqgRL75dNhaoLUsoIAQQdNzlaoTOqxmFmUt1f9LF83M5iiKhT1P%2FwtCtkRreFXytykak2fTiwgZ%2BUp8YJ3ruKR8yoLRyI0Rrbp&X-Amz-Signature=82cc4616ab264b36210c58872af3f08c474a1bc857c9cf16b10aa055d656dc35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
