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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DCZIAE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGlf3SaxQvaGyUHiFrpPa%2FbRuxNEoFyvPrT6lbsk9oAIgVedZslgfCAWjS43%2FO1FBDvu0%2BWnAJd96aCNw6gupr6AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGTTrnb8PE14dS4ryrcA25hvXVTi615oEmtbYjWtajTqlA4unAk%2Bbc3R%2Fj%2FJhcYKoadil54qQlLbuC7Np0HOnhdiFFhxRRjZ%2BxZcXLTT1V2vmUWRug6GLScUMiHN%2FmkOMClg9X1Jf8laPI56dZVOELWY1KSVVn8D8U3TByH6ZzsmvX4RD6ZOyctsMhZ1FwGPzrsDfpqqfDdHEJ832U7H8PqHU4i6woX5cNnLgVyAuxOPEikVG%2Fxy%2B9DDzqcwkINnYV7pLh5sWChI9O9MJ2NP316%2FeY%2FlgWCZSbKsnRCEo%2Bun%2BpzGxygmo%2BQUs4acnZ%2B6dIFrnSJss0nYCQYJyWtDYbwEp3sDUer9ril3Un4M1WwKcLnCGCGwdHC7i4w3ZcMO13ky%2Bj6zGHr0RjQaKHuHmrG657URbAMIIpeFaFsT%2FBmqL%2BnxSWK4roseSMJHal7e4NlOg2Tv%2FRfzbfXKPV7pkgsaQoxdwjwYzwIs2KkshLvelmf%2BN1VOqpSS8DF4mcySKf%2FMGeL%2F6d6bPOi8YahqS%2BVcTrOvsyoOqyt84PBn7AKTI5HXV2xfONzM2SlUQ0W53RCCe%2BBb1ZHaWiY6TsjfazPBBePJtD5ejvJOqIAfWrursIz8AbwoFo3gsqrG3eEoWoXsKNRrxqO7AQMMLC648QGOqUBr3aieUQTb6sZikXnvdtSQKyWpGIu%2FEnKGTwG0wFnr3Byrgdl10JcQILicotq77gTwtmQNqzAopIzN9YRdfbyx1vrHLj%2BIy9f9knEgvOLqCXVJRrCQedhIGo4%2By6Oty8D1n%2FQKJ2Q9Q84KhrdJT4QTSjXdduJJorPcFWHyMVrtwWm8VvzhiEl5c1fmbGsNmPt1bM9WV2vk5XSonsDIr%2BuIs1rgMDY&X-Amz-Signature=c23a9e3dd644be5fd08cd41c05dfbe272f610eb14750567bd93038973fa356ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DCZIAE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGlf3SaxQvaGyUHiFrpPa%2FbRuxNEoFyvPrT6lbsk9oAIgVedZslgfCAWjS43%2FO1FBDvu0%2BWnAJd96aCNw6gupr6AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGTTrnb8PE14dS4ryrcA25hvXVTi615oEmtbYjWtajTqlA4unAk%2Bbc3R%2Fj%2FJhcYKoadil54qQlLbuC7Np0HOnhdiFFhxRRjZ%2BxZcXLTT1V2vmUWRug6GLScUMiHN%2FmkOMClg9X1Jf8laPI56dZVOELWY1KSVVn8D8U3TByH6ZzsmvX4RD6ZOyctsMhZ1FwGPzrsDfpqqfDdHEJ832U7H8PqHU4i6woX5cNnLgVyAuxOPEikVG%2Fxy%2B9DDzqcwkINnYV7pLh5sWChI9O9MJ2NP316%2FeY%2FlgWCZSbKsnRCEo%2Bun%2BpzGxygmo%2BQUs4acnZ%2B6dIFrnSJss0nYCQYJyWtDYbwEp3sDUer9ril3Un4M1WwKcLnCGCGwdHC7i4w3ZcMO13ky%2Bj6zGHr0RjQaKHuHmrG657URbAMIIpeFaFsT%2FBmqL%2BnxSWK4roseSMJHal7e4NlOg2Tv%2FRfzbfXKPV7pkgsaQoxdwjwYzwIs2KkshLvelmf%2BN1VOqpSS8DF4mcySKf%2FMGeL%2F6d6bPOi8YahqS%2BVcTrOvsyoOqyt84PBn7AKTI5HXV2xfONzM2SlUQ0W53RCCe%2BBb1ZHaWiY6TsjfazPBBePJtD5ejvJOqIAfWrursIz8AbwoFo3gsqrG3eEoWoXsKNRrxqO7AQMMLC648QGOqUBr3aieUQTb6sZikXnvdtSQKyWpGIu%2FEnKGTwG0wFnr3Byrgdl10JcQILicotq77gTwtmQNqzAopIzN9YRdfbyx1vrHLj%2BIy9f9knEgvOLqCXVJRrCQedhIGo4%2By6Oty8D1n%2FQKJ2Q9Q84KhrdJT4QTSjXdduJJorPcFWHyMVrtwWm8VvzhiEl5c1fmbGsNmPt1bM9WV2vk5XSonsDIr%2BuIs1rgMDY&X-Amz-Signature=95ab933677a419e021287f081953026371e2c280532a86162b8c1b87e56527ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DCZIAE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGlf3SaxQvaGyUHiFrpPa%2FbRuxNEoFyvPrT6lbsk9oAIgVedZslgfCAWjS43%2FO1FBDvu0%2BWnAJd96aCNw6gupr6AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGTTrnb8PE14dS4ryrcA25hvXVTi615oEmtbYjWtajTqlA4unAk%2Bbc3R%2Fj%2FJhcYKoadil54qQlLbuC7Np0HOnhdiFFhxRRjZ%2BxZcXLTT1V2vmUWRug6GLScUMiHN%2FmkOMClg9X1Jf8laPI56dZVOELWY1KSVVn8D8U3TByH6ZzsmvX4RD6ZOyctsMhZ1FwGPzrsDfpqqfDdHEJ832U7H8PqHU4i6woX5cNnLgVyAuxOPEikVG%2Fxy%2B9DDzqcwkINnYV7pLh5sWChI9O9MJ2NP316%2FeY%2FlgWCZSbKsnRCEo%2Bun%2BpzGxygmo%2BQUs4acnZ%2B6dIFrnSJss0nYCQYJyWtDYbwEp3sDUer9ril3Un4M1WwKcLnCGCGwdHC7i4w3ZcMO13ky%2Bj6zGHr0RjQaKHuHmrG657URbAMIIpeFaFsT%2FBmqL%2BnxSWK4roseSMJHal7e4NlOg2Tv%2FRfzbfXKPV7pkgsaQoxdwjwYzwIs2KkshLvelmf%2BN1VOqpSS8DF4mcySKf%2FMGeL%2F6d6bPOi8YahqS%2BVcTrOvsyoOqyt84PBn7AKTI5HXV2xfONzM2SlUQ0W53RCCe%2BBb1ZHaWiY6TsjfazPBBePJtD5ejvJOqIAfWrursIz8AbwoFo3gsqrG3eEoWoXsKNRrxqO7AQMMLC648QGOqUBr3aieUQTb6sZikXnvdtSQKyWpGIu%2FEnKGTwG0wFnr3Byrgdl10JcQILicotq77gTwtmQNqzAopIzN9YRdfbyx1vrHLj%2BIy9f9knEgvOLqCXVJRrCQedhIGo4%2By6Oty8D1n%2FQKJ2Q9Q84KhrdJT4QTSjXdduJJorPcFWHyMVrtwWm8VvzhiEl5c1fmbGsNmPt1bM9WV2vk5XSonsDIr%2BuIs1rgMDY&X-Amz-Signature=5ad7b1ff01464efbd7f932366f2e0080fbb09ed4672022af0c14e7b33ffe4d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DCZIAE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGlf3SaxQvaGyUHiFrpPa%2FbRuxNEoFyvPrT6lbsk9oAIgVedZslgfCAWjS43%2FO1FBDvu0%2BWnAJd96aCNw6gupr6AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGTTrnb8PE14dS4ryrcA25hvXVTi615oEmtbYjWtajTqlA4unAk%2Bbc3R%2Fj%2FJhcYKoadil54qQlLbuC7Np0HOnhdiFFhxRRjZ%2BxZcXLTT1V2vmUWRug6GLScUMiHN%2FmkOMClg9X1Jf8laPI56dZVOELWY1KSVVn8D8U3TByH6ZzsmvX4RD6ZOyctsMhZ1FwGPzrsDfpqqfDdHEJ832U7H8PqHU4i6woX5cNnLgVyAuxOPEikVG%2Fxy%2B9DDzqcwkINnYV7pLh5sWChI9O9MJ2NP316%2FeY%2FlgWCZSbKsnRCEo%2Bun%2BpzGxygmo%2BQUs4acnZ%2B6dIFrnSJss0nYCQYJyWtDYbwEp3sDUer9ril3Un4M1WwKcLnCGCGwdHC7i4w3ZcMO13ky%2Bj6zGHr0RjQaKHuHmrG657URbAMIIpeFaFsT%2FBmqL%2BnxSWK4roseSMJHal7e4NlOg2Tv%2FRfzbfXKPV7pkgsaQoxdwjwYzwIs2KkshLvelmf%2BN1VOqpSS8DF4mcySKf%2FMGeL%2F6d6bPOi8YahqS%2BVcTrOvsyoOqyt84PBn7AKTI5HXV2xfONzM2SlUQ0W53RCCe%2BBb1ZHaWiY6TsjfazPBBePJtD5ejvJOqIAfWrursIz8AbwoFo3gsqrG3eEoWoXsKNRrxqO7AQMMLC648QGOqUBr3aieUQTb6sZikXnvdtSQKyWpGIu%2FEnKGTwG0wFnr3Byrgdl10JcQILicotq77gTwtmQNqzAopIzN9YRdfbyx1vrHLj%2BIy9f9knEgvOLqCXVJRrCQedhIGo4%2By6Oty8D1n%2FQKJ2Q9Q84KhrdJT4QTSjXdduJJorPcFWHyMVrtwWm8VvzhiEl5c1fmbGsNmPt1bM9WV2vk5XSonsDIr%2BuIs1rgMDY&X-Amz-Signature=0284798e714befb704e78e8ef841559e3d8c04c855d45eef542f9e160fe727ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DCZIAE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGlf3SaxQvaGyUHiFrpPa%2FbRuxNEoFyvPrT6lbsk9oAIgVedZslgfCAWjS43%2FO1FBDvu0%2BWnAJd96aCNw6gupr6AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGTTrnb8PE14dS4ryrcA25hvXVTi615oEmtbYjWtajTqlA4unAk%2Bbc3R%2Fj%2FJhcYKoadil54qQlLbuC7Np0HOnhdiFFhxRRjZ%2BxZcXLTT1V2vmUWRug6GLScUMiHN%2FmkOMClg9X1Jf8laPI56dZVOELWY1KSVVn8D8U3TByH6ZzsmvX4RD6ZOyctsMhZ1FwGPzrsDfpqqfDdHEJ832U7H8PqHU4i6woX5cNnLgVyAuxOPEikVG%2Fxy%2B9DDzqcwkINnYV7pLh5sWChI9O9MJ2NP316%2FeY%2FlgWCZSbKsnRCEo%2Bun%2BpzGxygmo%2BQUs4acnZ%2B6dIFrnSJss0nYCQYJyWtDYbwEp3sDUer9ril3Un4M1WwKcLnCGCGwdHC7i4w3ZcMO13ky%2Bj6zGHr0RjQaKHuHmrG657URbAMIIpeFaFsT%2FBmqL%2BnxSWK4roseSMJHal7e4NlOg2Tv%2FRfzbfXKPV7pkgsaQoxdwjwYzwIs2KkshLvelmf%2BN1VOqpSS8DF4mcySKf%2FMGeL%2F6d6bPOi8YahqS%2BVcTrOvsyoOqyt84PBn7AKTI5HXV2xfONzM2SlUQ0W53RCCe%2BBb1ZHaWiY6TsjfazPBBePJtD5ejvJOqIAfWrursIz8AbwoFo3gsqrG3eEoWoXsKNRrxqO7AQMMLC648QGOqUBr3aieUQTb6sZikXnvdtSQKyWpGIu%2FEnKGTwG0wFnr3Byrgdl10JcQILicotq77gTwtmQNqzAopIzN9YRdfbyx1vrHLj%2BIy9f9knEgvOLqCXVJRrCQedhIGo4%2By6Oty8D1n%2FQKJ2Q9Q84KhrdJT4QTSjXdduJJorPcFWHyMVrtwWm8VvzhiEl5c1fmbGsNmPt1bM9WV2vk5XSonsDIr%2BuIs1rgMDY&X-Amz-Signature=edea2b187d4b396df4e8d4ae185c221bc086b94f0927dd35ee30394e3390fc38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DCZIAE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGlf3SaxQvaGyUHiFrpPa%2FbRuxNEoFyvPrT6lbsk9oAIgVedZslgfCAWjS43%2FO1FBDvu0%2BWnAJd96aCNw6gupr6AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGTTrnb8PE14dS4ryrcA25hvXVTi615oEmtbYjWtajTqlA4unAk%2Bbc3R%2Fj%2FJhcYKoadil54qQlLbuC7Np0HOnhdiFFhxRRjZ%2BxZcXLTT1V2vmUWRug6GLScUMiHN%2FmkOMClg9X1Jf8laPI56dZVOELWY1KSVVn8D8U3TByH6ZzsmvX4RD6ZOyctsMhZ1FwGPzrsDfpqqfDdHEJ832U7H8PqHU4i6woX5cNnLgVyAuxOPEikVG%2Fxy%2B9DDzqcwkINnYV7pLh5sWChI9O9MJ2NP316%2FeY%2FlgWCZSbKsnRCEo%2Bun%2BpzGxygmo%2BQUs4acnZ%2B6dIFrnSJss0nYCQYJyWtDYbwEp3sDUer9ril3Un4M1WwKcLnCGCGwdHC7i4w3ZcMO13ky%2Bj6zGHr0RjQaKHuHmrG657URbAMIIpeFaFsT%2FBmqL%2BnxSWK4roseSMJHal7e4NlOg2Tv%2FRfzbfXKPV7pkgsaQoxdwjwYzwIs2KkshLvelmf%2BN1VOqpSS8DF4mcySKf%2FMGeL%2F6d6bPOi8YahqS%2BVcTrOvsyoOqyt84PBn7AKTI5HXV2xfONzM2SlUQ0W53RCCe%2BBb1ZHaWiY6TsjfazPBBePJtD5ejvJOqIAfWrursIz8AbwoFo3gsqrG3eEoWoXsKNRrxqO7AQMMLC648QGOqUBr3aieUQTb6sZikXnvdtSQKyWpGIu%2FEnKGTwG0wFnr3Byrgdl10JcQILicotq77gTwtmQNqzAopIzN9YRdfbyx1vrHLj%2BIy9f9knEgvOLqCXVJRrCQedhIGo4%2By6Oty8D1n%2FQKJ2Q9Q84KhrdJT4QTSjXdduJJorPcFWHyMVrtwWm8VvzhiEl5c1fmbGsNmPt1bM9WV2vk5XSonsDIr%2BuIs1rgMDY&X-Amz-Signature=1aefada0cceeb186985a32ab962a1889f6167eeed376169271bc41fd59d773e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DCZIAE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGlf3SaxQvaGyUHiFrpPa%2FbRuxNEoFyvPrT6lbsk9oAIgVedZslgfCAWjS43%2FO1FBDvu0%2BWnAJd96aCNw6gupr6AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGTTrnb8PE14dS4ryrcA25hvXVTi615oEmtbYjWtajTqlA4unAk%2Bbc3R%2Fj%2FJhcYKoadil54qQlLbuC7Np0HOnhdiFFhxRRjZ%2BxZcXLTT1V2vmUWRug6GLScUMiHN%2FmkOMClg9X1Jf8laPI56dZVOELWY1KSVVn8D8U3TByH6ZzsmvX4RD6ZOyctsMhZ1FwGPzrsDfpqqfDdHEJ832U7H8PqHU4i6woX5cNnLgVyAuxOPEikVG%2Fxy%2B9DDzqcwkINnYV7pLh5sWChI9O9MJ2NP316%2FeY%2FlgWCZSbKsnRCEo%2Bun%2BpzGxygmo%2BQUs4acnZ%2B6dIFrnSJss0nYCQYJyWtDYbwEp3sDUer9ril3Un4M1WwKcLnCGCGwdHC7i4w3ZcMO13ky%2Bj6zGHr0RjQaKHuHmrG657URbAMIIpeFaFsT%2FBmqL%2BnxSWK4roseSMJHal7e4NlOg2Tv%2FRfzbfXKPV7pkgsaQoxdwjwYzwIs2KkshLvelmf%2BN1VOqpSS8DF4mcySKf%2FMGeL%2F6d6bPOi8YahqS%2BVcTrOvsyoOqyt84PBn7AKTI5HXV2xfONzM2SlUQ0W53RCCe%2BBb1ZHaWiY6TsjfazPBBePJtD5ejvJOqIAfWrursIz8AbwoFo3gsqrG3eEoWoXsKNRrxqO7AQMMLC648QGOqUBr3aieUQTb6sZikXnvdtSQKyWpGIu%2FEnKGTwG0wFnr3Byrgdl10JcQILicotq77gTwtmQNqzAopIzN9YRdfbyx1vrHLj%2BIy9f9knEgvOLqCXVJRrCQedhIGo4%2By6Oty8D1n%2FQKJ2Q9Q84KhrdJT4QTSjXdduJJorPcFWHyMVrtwWm8VvzhiEl5c1fmbGsNmPt1bM9WV2vk5XSonsDIr%2BuIs1rgMDY&X-Amz-Signature=e6038b76adec22fca8c84dfa63469066beb614388b1c8a5d4a80a650d3602b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DCZIAE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGlf3SaxQvaGyUHiFrpPa%2FbRuxNEoFyvPrT6lbsk9oAIgVedZslgfCAWjS43%2FO1FBDvu0%2BWnAJd96aCNw6gupr6AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGTTrnb8PE14dS4ryrcA25hvXVTi615oEmtbYjWtajTqlA4unAk%2Bbc3R%2Fj%2FJhcYKoadil54qQlLbuC7Np0HOnhdiFFhxRRjZ%2BxZcXLTT1V2vmUWRug6GLScUMiHN%2FmkOMClg9X1Jf8laPI56dZVOELWY1KSVVn8D8U3TByH6ZzsmvX4RD6ZOyctsMhZ1FwGPzrsDfpqqfDdHEJ832U7H8PqHU4i6woX5cNnLgVyAuxOPEikVG%2Fxy%2B9DDzqcwkINnYV7pLh5sWChI9O9MJ2NP316%2FeY%2FlgWCZSbKsnRCEo%2Bun%2BpzGxygmo%2BQUs4acnZ%2B6dIFrnSJss0nYCQYJyWtDYbwEp3sDUer9ril3Un4M1WwKcLnCGCGwdHC7i4w3ZcMO13ky%2Bj6zGHr0RjQaKHuHmrG657URbAMIIpeFaFsT%2FBmqL%2BnxSWK4roseSMJHal7e4NlOg2Tv%2FRfzbfXKPV7pkgsaQoxdwjwYzwIs2KkshLvelmf%2BN1VOqpSS8DF4mcySKf%2FMGeL%2F6d6bPOi8YahqS%2BVcTrOvsyoOqyt84PBn7AKTI5HXV2xfONzM2SlUQ0W53RCCe%2BBb1ZHaWiY6TsjfazPBBePJtD5ejvJOqIAfWrursIz8AbwoFo3gsqrG3eEoWoXsKNRrxqO7AQMMLC648QGOqUBr3aieUQTb6sZikXnvdtSQKyWpGIu%2FEnKGTwG0wFnr3Byrgdl10JcQILicotq77gTwtmQNqzAopIzN9YRdfbyx1vrHLj%2BIy9f9knEgvOLqCXVJRrCQedhIGo4%2By6Oty8D1n%2FQKJ2Q9Q84KhrdJT4QTSjXdduJJorPcFWHyMVrtwWm8VvzhiEl5c1fmbGsNmPt1bM9WV2vk5XSonsDIr%2BuIs1rgMDY&X-Amz-Signature=afae1932082820845e22595ea873082110e75bee5f60edff05a9bd7e4d391564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DCZIAE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGlf3SaxQvaGyUHiFrpPa%2FbRuxNEoFyvPrT6lbsk9oAIgVedZslgfCAWjS43%2FO1FBDvu0%2BWnAJd96aCNw6gupr6AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGTTrnb8PE14dS4ryrcA25hvXVTi615oEmtbYjWtajTqlA4unAk%2Bbc3R%2Fj%2FJhcYKoadil54qQlLbuC7Np0HOnhdiFFhxRRjZ%2BxZcXLTT1V2vmUWRug6GLScUMiHN%2FmkOMClg9X1Jf8laPI56dZVOELWY1KSVVn8D8U3TByH6ZzsmvX4RD6ZOyctsMhZ1FwGPzrsDfpqqfDdHEJ832U7H8PqHU4i6woX5cNnLgVyAuxOPEikVG%2Fxy%2B9DDzqcwkINnYV7pLh5sWChI9O9MJ2NP316%2FeY%2FlgWCZSbKsnRCEo%2Bun%2BpzGxygmo%2BQUs4acnZ%2B6dIFrnSJss0nYCQYJyWtDYbwEp3sDUer9ril3Un4M1WwKcLnCGCGwdHC7i4w3ZcMO13ky%2Bj6zGHr0RjQaKHuHmrG657URbAMIIpeFaFsT%2FBmqL%2BnxSWK4roseSMJHal7e4NlOg2Tv%2FRfzbfXKPV7pkgsaQoxdwjwYzwIs2KkshLvelmf%2BN1VOqpSS8DF4mcySKf%2FMGeL%2F6d6bPOi8YahqS%2BVcTrOvsyoOqyt84PBn7AKTI5HXV2xfONzM2SlUQ0W53RCCe%2BBb1ZHaWiY6TsjfazPBBePJtD5ejvJOqIAfWrursIz8AbwoFo3gsqrG3eEoWoXsKNRrxqO7AQMMLC648QGOqUBr3aieUQTb6sZikXnvdtSQKyWpGIu%2FEnKGTwG0wFnr3Byrgdl10JcQILicotq77gTwtmQNqzAopIzN9YRdfbyx1vrHLj%2BIy9f9knEgvOLqCXVJRrCQedhIGo4%2By6Oty8D1n%2FQKJ2Q9Q84KhrdJT4QTSjXdduJJorPcFWHyMVrtwWm8VvzhiEl5c1fmbGsNmPt1bM9WV2vk5XSonsDIr%2BuIs1rgMDY&X-Amz-Signature=03ea0a32771832951c940356742cbe5d4d84c80aef0d9003d89151ab3b81e91b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DCZIAE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGlf3SaxQvaGyUHiFrpPa%2FbRuxNEoFyvPrT6lbsk9oAIgVedZslgfCAWjS43%2FO1FBDvu0%2BWnAJd96aCNw6gupr6AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGTTrnb8PE14dS4ryrcA25hvXVTi615oEmtbYjWtajTqlA4unAk%2Bbc3R%2Fj%2FJhcYKoadil54qQlLbuC7Np0HOnhdiFFhxRRjZ%2BxZcXLTT1V2vmUWRug6GLScUMiHN%2FmkOMClg9X1Jf8laPI56dZVOELWY1KSVVn8D8U3TByH6ZzsmvX4RD6ZOyctsMhZ1FwGPzrsDfpqqfDdHEJ832U7H8PqHU4i6woX5cNnLgVyAuxOPEikVG%2Fxy%2B9DDzqcwkINnYV7pLh5sWChI9O9MJ2NP316%2FeY%2FlgWCZSbKsnRCEo%2Bun%2BpzGxygmo%2BQUs4acnZ%2B6dIFrnSJss0nYCQYJyWtDYbwEp3sDUer9ril3Un4M1WwKcLnCGCGwdHC7i4w3ZcMO13ky%2Bj6zGHr0RjQaKHuHmrG657URbAMIIpeFaFsT%2FBmqL%2BnxSWK4roseSMJHal7e4NlOg2Tv%2FRfzbfXKPV7pkgsaQoxdwjwYzwIs2KkshLvelmf%2BN1VOqpSS8DF4mcySKf%2FMGeL%2F6d6bPOi8YahqS%2BVcTrOvsyoOqyt84PBn7AKTI5HXV2xfONzM2SlUQ0W53RCCe%2BBb1ZHaWiY6TsjfazPBBePJtD5ejvJOqIAfWrursIz8AbwoFo3gsqrG3eEoWoXsKNRrxqO7AQMMLC648QGOqUBr3aieUQTb6sZikXnvdtSQKyWpGIu%2FEnKGTwG0wFnr3Byrgdl10JcQILicotq77gTwtmQNqzAopIzN9YRdfbyx1vrHLj%2BIy9f9knEgvOLqCXVJRrCQedhIGo4%2By6Oty8D1n%2FQKJ2Q9Q84KhrdJT4QTSjXdduJJorPcFWHyMVrtwWm8VvzhiEl5c1fmbGsNmPt1bM9WV2vk5XSonsDIr%2BuIs1rgMDY&X-Amz-Signature=6eea77f7f3cdee22c4719aa031e65c5948683300b0ec3e90c30369ab8e736483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DCZIAE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGlf3SaxQvaGyUHiFrpPa%2FbRuxNEoFyvPrT6lbsk9oAIgVedZslgfCAWjS43%2FO1FBDvu0%2BWnAJd96aCNw6gupr6AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGTTrnb8PE14dS4ryrcA25hvXVTi615oEmtbYjWtajTqlA4unAk%2Bbc3R%2Fj%2FJhcYKoadil54qQlLbuC7Np0HOnhdiFFhxRRjZ%2BxZcXLTT1V2vmUWRug6GLScUMiHN%2FmkOMClg9X1Jf8laPI56dZVOELWY1KSVVn8D8U3TByH6ZzsmvX4RD6ZOyctsMhZ1FwGPzrsDfpqqfDdHEJ832U7H8PqHU4i6woX5cNnLgVyAuxOPEikVG%2Fxy%2B9DDzqcwkINnYV7pLh5sWChI9O9MJ2NP316%2FeY%2FlgWCZSbKsnRCEo%2Bun%2BpzGxygmo%2BQUs4acnZ%2B6dIFrnSJss0nYCQYJyWtDYbwEp3sDUer9ril3Un4M1WwKcLnCGCGwdHC7i4w3ZcMO13ky%2Bj6zGHr0RjQaKHuHmrG657URbAMIIpeFaFsT%2FBmqL%2BnxSWK4roseSMJHal7e4NlOg2Tv%2FRfzbfXKPV7pkgsaQoxdwjwYzwIs2KkshLvelmf%2BN1VOqpSS8DF4mcySKf%2FMGeL%2F6d6bPOi8YahqS%2BVcTrOvsyoOqyt84PBn7AKTI5HXV2xfONzM2SlUQ0W53RCCe%2BBb1ZHaWiY6TsjfazPBBePJtD5ejvJOqIAfWrursIz8AbwoFo3gsqrG3eEoWoXsKNRrxqO7AQMMLC648QGOqUBr3aieUQTb6sZikXnvdtSQKyWpGIu%2FEnKGTwG0wFnr3Byrgdl10JcQILicotq77gTwtmQNqzAopIzN9YRdfbyx1vrHLj%2BIy9f9knEgvOLqCXVJRrCQedhIGo4%2By6Oty8D1n%2FQKJ2Q9Q84KhrdJT4QTSjXdduJJorPcFWHyMVrtwWm8VvzhiEl5c1fmbGsNmPt1bM9WV2vk5XSonsDIr%2BuIs1rgMDY&X-Amz-Signature=0aef7b0ec65e5a4d1d03a0e0bb3e2c8a1b6648515a89ee64cd4388cc82b9f394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DCZIAE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGlf3SaxQvaGyUHiFrpPa%2FbRuxNEoFyvPrT6lbsk9oAIgVedZslgfCAWjS43%2FO1FBDvu0%2BWnAJd96aCNw6gupr6AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGTTrnb8PE14dS4ryrcA25hvXVTi615oEmtbYjWtajTqlA4unAk%2Bbc3R%2Fj%2FJhcYKoadil54qQlLbuC7Np0HOnhdiFFhxRRjZ%2BxZcXLTT1V2vmUWRug6GLScUMiHN%2FmkOMClg9X1Jf8laPI56dZVOELWY1KSVVn8D8U3TByH6ZzsmvX4RD6ZOyctsMhZ1FwGPzrsDfpqqfDdHEJ832U7H8PqHU4i6woX5cNnLgVyAuxOPEikVG%2Fxy%2B9DDzqcwkINnYV7pLh5sWChI9O9MJ2NP316%2FeY%2FlgWCZSbKsnRCEo%2Bun%2BpzGxygmo%2BQUs4acnZ%2B6dIFrnSJss0nYCQYJyWtDYbwEp3sDUer9ril3Un4M1WwKcLnCGCGwdHC7i4w3ZcMO13ky%2Bj6zGHr0RjQaKHuHmrG657URbAMIIpeFaFsT%2FBmqL%2BnxSWK4roseSMJHal7e4NlOg2Tv%2FRfzbfXKPV7pkgsaQoxdwjwYzwIs2KkshLvelmf%2BN1VOqpSS8DF4mcySKf%2FMGeL%2F6d6bPOi8YahqS%2BVcTrOvsyoOqyt84PBn7AKTI5HXV2xfONzM2SlUQ0W53RCCe%2BBb1ZHaWiY6TsjfazPBBePJtD5ejvJOqIAfWrursIz8AbwoFo3gsqrG3eEoWoXsKNRrxqO7AQMMLC648QGOqUBr3aieUQTb6sZikXnvdtSQKyWpGIu%2FEnKGTwG0wFnr3Byrgdl10JcQILicotq77gTwtmQNqzAopIzN9YRdfbyx1vrHLj%2BIy9f9knEgvOLqCXVJRrCQedhIGo4%2By6Oty8D1n%2FQKJ2Q9Q84KhrdJT4QTSjXdduJJorPcFWHyMVrtwWm8VvzhiEl5c1fmbGsNmPt1bM9WV2vk5XSonsDIr%2BuIs1rgMDY&X-Amz-Signature=f17d5c2229c8ad14c2b19098d597df2b5f5309e544680cdbd537d5365d53affc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DCZIAE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGlf3SaxQvaGyUHiFrpPa%2FbRuxNEoFyvPrT6lbsk9oAIgVedZslgfCAWjS43%2FO1FBDvu0%2BWnAJd96aCNw6gupr6AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGTTrnb8PE14dS4ryrcA25hvXVTi615oEmtbYjWtajTqlA4unAk%2Bbc3R%2Fj%2FJhcYKoadil54qQlLbuC7Np0HOnhdiFFhxRRjZ%2BxZcXLTT1V2vmUWRug6GLScUMiHN%2FmkOMClg9X1Jf8laPI56dZVOELWY1KSVVn8D8U3TByH6ZzsmvX4RD6ZOyctsMhZ1FwGPzrsDfpqqfDdHEJ832U7H8PqHU4i6woX5cNnLgVyAuxOPEikVG%2Fxy%2B9DDzqcwkINnYV7pLh5sWChI9O9MJ2NP316%2FeY%2FlgWCZSbKsnRCEo%2Bun%2BpzGxygmo%2BQUs4acnZ%2B6dIFrnSJss0nYCQYJyWtDYbwEp3sDUer9ril3Un4M1WwKcLnCGCGwdHC7i4w3ZcMO13ky%2Bj6zGHr0RjQaKHuHmrG657URbAMIIpeFaFsT%2FBmqL%2BnxSWK4roseSMJHal7e4NlOg2Tv%2FRfzbfXKPV7pkgsaQoxdwjwYzwIs2KkshLvelmf%2BN1VOqpSS8DF4mcySKf%2FMGeL%2F6d6bPOi8YahqS%2BVcTrOvsyoOqyt84PBn7AKTI5HXV2xfONzM2SlUQ0W53RCCe%2BBb1ZHaWiY6TsjfazPBBePJtD5ejvJOqIAfWrursIz8AbwoFo3gsqrG3eEoWoXsKNRrxqO7AQMMLC648QGOqUBr3aieUQTb6sZikXnvdtSQKyWpGIu%2FEnKGTwG0wFnr3Byrgdl10JcQILicotq77gTwtmQNqzAopIzN9YRdfbyx1vrHLj%2BIy9f9knEgvOLqCXVJRrCQedhIGo4%2By6Oty8D1n%2FQKJ2Q9Q84KhrdJT4QTSjXdduJJorPcFWHyMVrtwWm8VvzhiEl5c1fmbGsNmPt1bM9WV2vk5XSonsDIr%2BuIs1rgMDY&X-Amz-Signature=9f033a0756bb727276bd04fa6f7684108d1cc1880a8e7c1ac226e80357f899a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DCZIAE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGlf3SaxQvaGyUHiFrpPa%2FbRuxNEoFyvPrT6lbsk9oAIgVedZslgfCAWjS43%2FO1FBDvu0%2BWnAJd96aCNw6gupr6AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGTTrnb8PE14dS4ryrcA25hvXVTi615oEmtbYjWtajTqlA4unAk%2Bbc3R%2Fj%2FJhcYKoadil54qQlLbuC7Np0HOnhdiFFhxRRjZ%2BxZcXLTT1V2vmUWRug6GLScUMiHN%2FmkOMClg9X1Jf8laPI56dZVOELWY1KSVVn8D8U3TByH6ZzsmvX4RD6ZOyctsMhZ1FwGPzrsDfpqqfDdHEJ832U7H8PqHU4i6woX5cNnLgVyAuxOPEikVG%2Fxy%2B9DDzqcwkINnYV7pLh5sWChI9O9MJ2NP316%2FeY%2FlgWCZSbKsnRCEo%2Bun%2BpzGxygmo%2BQUs4acnZ%2B6dIFrnSJss0nYCQYJyWtDYbwEp3sDUer9ril3Un4M1WwKcLnCGCGwdHC7i4w3ZcMO13ky%2Bj6zGHr0RjQaKHuHmrG657URbAMIIpeFaFsT%2FBmqL%2BnxSWK4roseSMJHal7e4NlOg2Tv%2FRfzbfXKPV7pkgsaQoxdwjwYzwIs2KkshLvelmf%2BN1VOqpSS8DF4mcySKf%2FMGeL%2F6d6bPOi8YahqS%2BVcTrOvsyoOqyt84PBn7AKTI5HXV2xfONzM2SlUQ0W53RCCe%2BBb1ZHaWiY6TsjfazPBBePJtD5ejvJOqIAfWrursIz8AbwoFo3gsqrG3eEoWoXsKNRrxqO7AQMMLC648QGOqUBr3aieUQTb6sZikXnvdtSQKyWpGIu%2FEnKGTwG0wFnr3Byrgdl10JcQILicotq77gTwtmQNqzAopIzN9YRdfbyx1vrHLj%2BIy9f9knEgvOLqCXVJRrCQedhIGo4%2By6Oty8D1n%2FQKJ2Q9Q84KhrdJT4QTSjXdduJJorPcFWHyMVrtwWm8VvzhiEl5c1fmbGsNmPt1bM9WV2vk5XSonsDIr%2BuIs1rgMDY&X-Amz-Signature=f5833252e338909c0e590b4260da0deabc62d4b8744a508b88afb3781e984369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
