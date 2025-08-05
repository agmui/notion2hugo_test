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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NR3TQU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdaYDxbqqvFIf%2FZJoy2xgPHOOXoBO5vy6Ft%2Bi5pDy2cwIgRLCQ1DnOSFPAneWysS8AKr1CBoiP1W74uPXuGjEuhbwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDC1L%2FAi%2BwPiqQRqcJircA4TdTI8yK180K69HAtSnV4J8ND9JQeU9%2FuxPNfBGEAbQz%2BwWMKgdtF3peW4UBRVMcxat3NyBt5%2Bj5rLKNtKdwB0Wdz4SsAkVWALKXAzKRFVPM8W45IP5xThmXY%2BWduahBWpUgcPwQhlnSpVHsWZpSGfcu01yiKSESNZ3q%2FgcV0GjGy%2Bs3vyYAQh3pHc6%2FW%2FN4vKC8%2BdDca6y1kzTqkBaBC8mu6VIMnxA%2BzqCKk%2BND4jT%2FRYtSa%2BV6UDeQ8dZbgXX6qoKBeQJeRXCeNmowGY%2FXv6wFKUmoM%2B%2Ff2qfseiS%2Frv7Z6SK5zVtNliOFSs5dhxOAQ77zLhraFdTn3Qjok70h43FnLbu%2BzYVRcgp8mBHRe9s98Zl1l%2ByWp3XiXe%2FhiwIM%2FrKSO%2FJBOeS%2FAB4ndgVb8OBvQ3owUevcRCjI8iMjOaoipTW7FPRQ%2BHBlP9NnfcKxBE8j9nRAsk3OHYV6Npr9z1uVTx9DWJ2iQBR%2BILXiN%2BT39LFXFQ%2F%2B69idosm%2BSvR0UJ8jkWmkEwks2OoIV6CmIcAeIIZYurUK4ezfokZ3UYmYs6%2FlgQAtboxynkuzauWImIDux1DGRbZjylQOAU4UYdYtn1pQbjPDvxXP4GnChrbwbKo5FKafCaBCLyHML7MyMQGOqUBSauTJPmUv%2FDVIdgrCs3s1gjUtviQpwj2nKpvM8kV9Ude1DT5MgxRDZNZQ7VM9sn4ds3cxP2VxwfFGuSgUE1nfMhJasqIS9FhwpSwRzLtvy3%2BH35gw7l02sX4vjY3ZzbNdCvZ5knH8gNVkGcFeqfZOmKGcETSIOdM9T26Bd%2Fu9968Avx4YwKWUNCSz9U9%2FGMP34xpy2iOKuzQK88lgmXdCDS5e7Qr&X-Amz-Signature=7168394fb10167ea303c855c3cf25fbdf8dc08a34f3408ee22ce647c2b7fada8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NR3TQU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdaYDxbqqvFIf%2FZJoy2xgPHOOXoBO5vy6Ft%2Bi5pDy2cwIgRLCQ1DnOSFPAneWysS8AKr1CBoiP1W74uPXuGjEuhbwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDC1L%2FAi%2BwPiqQRqcJircA4TdTI8yK180K69HAtSnV4J8ND9JQeU9%2FuxPNfBGEAbQz%2BwWMKgdtF3peW4UBRVMcxat3NyBt5%2Bj5rLKNtKdwB0Wdz4SsAkVWALKXAzKRFVPM8W45IP5xThmXY%2BWduahBWpUgcPwQhlnSpVHsWZpSGfcu01yiKSESNZ3q%2FgcV0GjGy%2Bs3vyYAQh3pHc6%2FW%2FN4vKC8%2BdDca6y1kzTqkBaBC8mu6VIMnxA%2BzqCKk%2BND4jT%2FRYtSa%2BV6UDeQ8dZbgXX6qoKBeQJeRXCeNmowGY%2FXv6wFKUmoM%2B%2Ff2qfseiS%2Frv7Z6SK5zVtNliOFSs5dhxOAQ77zLhraFdTn3Qjok70h43FnLbu%2BzYVRcgp8mBHRe9s98Zl1l%2ByWp3XiXe%2FhiwIM%2FrKSO%2FJBOeS%2FAB4ndgVb8OBvQ3owUevcRCjI8iMjOaoipTW7FPRQ%2BHBlP9NnfcKxBE8j9nRAsk3OHYV6Npr9z1uVTx9DWJ2iQBR%2BILXiN%2BT39LFXFQ%2F%2B69idosm%2BSvR0UJ8jkWmkEwks2OoIV6CmIcAeIIZYurUK4ezfokZ3UYmYs6%2FlgQAtboxynkuzauWImIDux1DGRbZjylQOAU4UYdYtn1pQbjPDvxXP4GnChrbwbKo5FKafCaBCLyHML7MyMQGOqUBSauTJPmUv%2FDVIdgrCs3s1gjUtviQpwj2nKpvM8kV9Ude1DT5MgxRDZNZQ7VM9sn4ds3cxP2VxwfFGuSgUE1nfMhJasqIS9FhwpSwRzLtvy3%2BH35gw7l02sX4vjY3ZzbNdCvZ5knH8gNVkGcFeqfZOmKGcETSIOdM9T26Bd%2Fu9968Avx4YwKWUNCSz9U9%2FGMP34xpy2iOKuzQK88lgmXdCDS5e7Qr&X-Amz-Signature=9bb8cd0cb7ba3a3cc343ac5d605a63c85646ae2d97de52f642a653efe7de1613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NR3TQU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdaYDxbqqvFIf%2FZJoy2xgPHOOXoBO5vy6Ft%2Bi5pDy2cwIgRLCQ1DnOSFPAneWysS8AKr1CBoiP1W74uPXuGjEuhbwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDC1L%2FAi%2BwPiqQRqcJircA4TdTI8yK180K69HAtSnV4J8ND9JQeU9%2FuxPNfBGEAbQz%2BwWMKgdtF3peW4UBRVMcxat3NyBt5%2Bj5rLKNtKdwB0Wdz4SsAkVWALKXAzKRFVPM8W45IP5xThmXY%2BWduahBWpUgcPwQhlnSpVHsWZpSGfcu01yiKSESNZ3q%2FgcV0GjGy%2Bs3vyYAQh3pHc6%2FW%2FN4vKC8%2BdDca6y1kzTqkBaBC8mu6VIMnxA%2BzqCKk%2BND4jT%2FRYtSa%2BV6UDeQ8dZbgXX6qoKBeQJeRXCeNmowGY%2FXv6wFKUmoM%2B%2Ff2qfseiS%2Frv7Z6SK5zVtNliOFSs5dhxOAQ77zLhraFdTn3Qjok70h43FnLbu%2BzYVRcgp8mBHRe9s98Zl1l%2ByWp3XiXe%2FhiwIM%2FrKSO%2FJBOeS%2FAB4ndgVb8OBvQ3owUevcRCjI8iMjOaoipTW7FPRQ%2BHBlP9NnfcKxBE8j9nRAsk3OHYV6Npr9z1uVTx9DWJ2iQBR%2BILXiN%2BT39LFXFQ%2F%2B69idosm%2BSvR0UJ8jkWmkEwks2OoIV6CmIcAeIIZYurUK4ezfokZ3UYmYs6%2FlgQAtboxynkuzauWImIDux1DGRbZjylQOAU4UYdYtn1pQbjPDvxXP4GnChrbwbKo5FKafCaBCLyHML7MyMQGOqUBSauTJPmUv%2FDVIdgrCs3s1gjUtviQpwj2nKpvM8kV9Ude1DT5MgxRDZNZQ7VM9sn4ds3cxP2VxwfFGuSgUE1nfMhJasqIS9FhwpSwRzLtvy3%2BH35gw7l02sX4vjY3ZzbNdCvZ5knH8gNVkGcFeqfZOmKGcETSIOdM9T26Bd%2Fu9968Avx4YwKWUNCSz9U9%2FGMP34xpy2iOKuzQK88lgmXdCDS5e7Qr&X-Amz-Signature=e511d570f83def90d4311eadbbe316adc8bb6ae39c35d7aa510a067b8d15adcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NR3TQU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdaYDxbqqvFIf%2FZJoy2xgPHOOXoBO5vy6Ft%2Bi5pDy2cwIgRLCQ1DnOSFPAneWysS8AKr1CBoiP1W74uPXuGjEuhbwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDC1L%2FAi%2BwPiqQRqcJircA4TdTI8yK180K69HAtSnV4J8ND9JQeU9%2FuxPNfBGEAbQz%2BwWMKgdtF3peW4UBRVMcxat3NyBt5%2Bj5rLKNtKdwB0Wdz4SsAkVWALKXAzKRFVPM8W45IP5xThmXY%2BWduahBWpUgcPwQhlnSpVHsWZpSGfcu01yiKSESNZ3q%2FgcV0GjGy%2Bs3vyYAQh3pHc6%2FW%2FN4vKC8%2BdDca6y1kzTqkBaBC8mu6VIMnxA%2BzqCKk%2BND4jT%2FRYtSa%2BV6UDeQ8dZbgXX6qoKBeQJeRXCeNmowGY%2FXv6wFKUmoM%2B%2Ff2qfseiS%2Frv7Z6SK5zVtNliOFSs5dhxOAQ77zLhraFdTn3Qjok70h43FnLbu%2BzYVRcgp8mBHRe9s98Zl1l%2ByWp3XiXe%2FhiwIM%2FrKSO%2FJBOeS%2FAB4ndgVb8OBvQ3owUevcRCjI8iMjOaoipTW7FPRQ%2BHBlP9NnfcKxBE8j9nRAsk3OHYV6Npr9z1uVTx9DWJ2iQBR%2BILXiN%2BT39LFXFQ%2F%2B69idosm%2BSvR0UJ8jkWmkEwks2OoIV6CmIcAeIIZYurUK4ezfokZ3UYmYs6%2FlgQAtboxynkuzauWImIDux1DGRbZjylQOAU4UYdYtn1pQbjPDvxXP4GnChrbwbKo5FKafCaBCLyHML7MyMQGOqUBSauTJPmUv%2FDVIdgrCs3s1gjUtviQpwj2nKpvM8kV9Ude1DT5MgxRDZNZQ7VM9sn4ds3cxP2VxwfFGuSgUE1nfMhJasqIS9FhwpSwRzLtvy3%2BH35gw7l02sX4vjY3ZzbNdCvZ5knH8gNVkGcFeqfZOmKGcETSIOdM9T26Bd%2Fu9968Avx4YwKWUNCSz9U9%2FGMP34xpy2iOKuzQK88lgmXdCDS5e7Qr&X-Amz-Signature=c745c4db70466458dd2c79459af93fb43163ac99b6da685e4e49810c1524830d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NR3TQU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdaYDxbqqvFIf%2FZJoy2xgPHOOXoBO5vy6Ft%2Bi5pDy2cwIgRLCQ1DnOSFPAneWysS8AKr1CBoiP1W74uPXuGjEuhbwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDC1L%2FAi%2BwPiqQRqcJircA4TdTI8yK180K69HAtSnV4J8ND9JQeU9%2FuxPNfBGEAbQz%2BwWMKgdtF3peW4UBRVMcxat3NyBt5%2Bj5rLKNtKdwB0Wdz4SsAkVWALKXAzKRFVPM8W45IP5xThmXY%2BWduahBWpUgcPwQhlnSpVHsWZpSGfcu01yiKSESNZ3q%2FgcV0GjGy%2Bs3vyYAQh3pHc6%2FW%2FN4vKC8%2BdDca6y1kzTqkBaBC8mu6VIMnxA%2BzqCKk%2BND4jT%2FRYtSa%2BV6UDeQ8dZbgXX6qoKBeQJeRXCeNmowGY%2FXv6wFKUmoM%2B%2Ff2qfseiS%2Frv7Z6SK5zVtNliOFSs5dhxOAQ77zLhraFdTn3Qjok70h43FnLbu%2BzYVRcgp8mBHRe9s98Zl1l%2ByWp3XiXe%2FhiwIM%2FrKSO%2FJBOeS%2FAB4ndgVb8OBvQ3owUevcRCjI8iMjOaoipTW7FPRQ%2BHBlP9NnfcKxBE8j9nRAsk3OHYV6Npr9z1uVTx9DWJ2iQBR%2BILXiN%2BT39LFXFQ%2F%2B69idosm%2BSvR0UJ8jkWmkEwks2OoIV6CmIcAeIIZYurUK4ezfokZ3UYmYs6%2FlgQAtboxynkuzauWImIDux1DGRbZjylQOAU4UYdYtn1pQbjPDvxXP4GnChrbwbKo5FKafCaBCLyHML7MyMQGOqUBSauTJPmUv%2FDVIdgrCs3s1gjUtviQpwj2nKpvM8kV9Ude1DT5MgxRDZNZQ7VM9sn4ds3cxP2VxwfFGuSgUE1nfMhJasqIS9FhwpSwRzLtvy3%2BH35gw7l02sX4vjY3ZzbNdCvZ5knH8gNVkGcFeqfZOmKGcETSIOdM9T26Bd%2Fu9968Avx4YwKWUNCSz9U9%2FGMP34xpy2iOKuzQK88lgmXdCDS5e7Qr&X-Amz-Signature=bb66752a34ebb0d3fe7c450d2915bfdd833b5a08c2654f5676ee80e35e4eca5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NR3TQU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdaYDxbqqvFIf%2FZJoy2xgPHOOXoBO5vy6Ft%2Bi5pDy2cwIgRLCQ1DnOSFPAneWysS8AKr1CBoiP1W74uPXuGjEuhbwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDC1L%2FAi%2BwPiqQRqcJircA4TdTI8yK180K69HAtSnV4J8ND9JQeU9%2FuxPNfBGEAbQz%2BwWMKgdtF3peW4UBRVMcxat3NyBt5%2Bj5rLKNtKdwB0Wdz4SsAkVWALKXAzKRFVPM8W45IP5xThmXY%2BWduahBWpUgcPwQhlnSpVHsWZpSGfcu01yiKSESNZ3q%2FgcV0GjGy%2Bs3vyYAQh3pHc6%2FW%2FN4vKC8%2BdDca6y1kzTqkBaBC8mu6VIMnxA%2BzqCKk%2BND4jT%2FRYtSa%2BV6UDeQ8dZbgXX6qoKBeQJeRXCeNmowGY%2FXv6wFKUmoM%2B%2Ff2qfseiS%2Frv7Z6SK5zVtNliOFSs5dhxOAQ77zLhraFdTn3Qjok70h43FnLbu%2BzYVRcgp8mBHRe9s98Zl1l%2ByWp3XiXe%2FhiwIM%2FrKSO%2FJBOeS%2FAB4ndgVb8OBvQ3owUevcRCjI8iMjOaoipTW7FPRQ%2BHBlP9NnfcKxBE8j9nRAsk3OHYV6Npr9z1uVTx9DWJ2iQBR%2BILXiN%2BT39LFXFQ%2F%2B69idosm%2BSvR0UJ8jkWmkEwks2OoIV6CmIcAeIIZYurUK4ezfokZ3UYmYs6%2FlgQAtboxynkuzauWImIDux1DGRbZjylQOAU4UYdYtn1pQbjPDvxXP4GnChrbwbKo5FKafCaBCLyHML7MyMQGOqUBSauTJPmUv%2FDVIdgrCs3s1gjUtviQpwj2nKpvM8kV9Ude1DT5MgxRDZNZQ7VM9sn4ds3cxP2VxwfFGuSgUE1nfMhJasqIS9FhwpSwRzLtvy3%2BH35gw7l02sX4vjY3ZzbNdCvZ5knH8gNVkGcFeqfZOmKGcETSIOdM9T26Bd%2Fu9968Avx4YwKWUNCSz9U9%2FGMP34xpy2iOKuzQK88lgmXdCDS5e7Qr&X-Amz-Signature=14dc95cb595eab26a06bc6416f4a14f53b11c3e8a2f87dcf705807cd3466e622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NR3TQU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdaYDxbqqvFIf%2FZJoy2xgPHOOXoBO5vy6Ft%2Bi5pDy2cwIgRLCQ1DnOSFPAneWysS8AKr1CBoiP1W74uPXuGjEuhbwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDC1L%2FAi%2BwPiqQRqcJircA4TdTI8yK180K69HAtSnV4J8ND9JQeU9%2FuxPNfBGEAbQz%2BwWMKgdtF3peW4UBRVMcxat3NyBt5%2Bj5rLKNtKdwB0Wdz4SsAkVWALKXAzKRFVPM8W45IP5xThmXY%2BWduahBWpUgcPwQhlnSpVHsWZpSGfcu01yiKSESNZ3q%2FgcV0GjGy%2Bs3vyYAQh3pHc6%2FW%2FN4vKC8%2BdDca6y1kzTqkBaBC8mu6VIMnxA%2BzqCKk%2BND4jT%2FRYtSa%2BV6UDeQ8dZbgXX6qoKBeQJeRXCeNmowGY%2FXv6wFKUmoM%2B%2Ff2qfseiS%2Frv7Z6SK5zVtNliOFSs5dhxOAQ77zLhraFdTn3Qjok70h43FnLbu%2BzYVRcgp8mBHRe9s98Zl1l%2ByWp3XiXe%2FhiwIM%2FrKSO%2FJBOeS%2FAB4ndgVb8OBvQ3owUevcRCjI8iMjOaoipTW7FPRQ%2BHBlP9NnfcKxBE8j9nRAsk3OHYV6Npr9z1uVTx9DWJ2iQBR%2BILXiN%2BT39LFXFQ%2F%2B69idosm%2BSvR0UJ8jkWmkEwks2OoIV6CmIcAeIIZYurUK4ezfokZ3UYmYs6%2FlgQAtboxynkuzauWImIDux1DGRbZjylQOAU4UYdYtn1pQbjPDvxXP4GnChrbwbKo5FKafCaBCLyHML7MyMQGOqUBSauTJPmUv%2FDVIdgrCs3s1gjUtviQpwj2nKpvM8kV9Ude1DT5MgxRDZNZQ7VM9sn4ds3cxP2VxwfFGuSgUE1nfMhJasqIS9FhwpSwRzLtvy3%2BH35gw7l02sX4vjY3ZzbNdCvZ5knH8gNVkGcFeqfZOmKGcETSIOdM9T26Bd%2Fu9968Avx4YwKWUNCSz9U9%2FGMP34xpy2iOKuzQK88lgmXdCDS5e7Qr&X-Amz-Signature=50b825313287db6a9058cc2b403c7a03b1488fb75c0d7f39268af491710f4243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NR3TQU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdaYDxbqqvFIf%2FZJoy2xgPHOOXoBO5vy6Ft%2Bi5pDy2cwIgRLCQ1DnOSFPAneWysS8AKr1CBoiP1W74uPXuGjEuhbwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDC1L%2FAi%2BwPiqQRqcJircA4TdTI8yK180K69HAtSnV4J8ND9JQeU9%2FuxPNfBGEAbQz%2BwWMKgdtF3peW4UBRVMcxat3NyBt5%2Bj5rLKNtKdwB0Wdz4SsAkVWALKXAzKRFVPM8W45IP5xThmXY%2BWduahBWpUgcPwQhlnSpVHsWZpSGfcu01yiKSESNZ3q%2FgcV0GjGy%2Bs3vyYAQh3pHc6%2FW%2FN4vKC8%2BdDca6y1kzTqkBaBC8mu6VIMnxA%2BzqCKk%2BND4jT%2FRYtSa%2BV6UDeQ8dZbgXX6qoKBeQJeRXCeNmowGY%2FXv6wFKUmoM%2B%2Ff2qfseiS%2Frv7Z6SK5zVtNliOFSs5dhxOAQ77zLhraFdTn3Qjok70h43FnLbu%2BzYVRcgp8mBHRe9s98Zl1l%2ByWp3XiXe%2FhiwIM%2FrKSO%2FJBOeS%2FAB4ndgVb8OBvQ3owUevcRCjI8iMjOaoipTW7FPRQ%2BHBlP9NnfcKxBE8j9nRAsk3OHYV6Npr9z1uVTx9DWJ2iQBR%2BILXiN%2BT39LFXFQ%2F%2B69idosm%2BSvR0UJ8jkWmkEwks2OoIV6CmIcAeIIZYurUK4ezfokZ3UYmYs6%2FlgQAtboxynkuzauWImIDux1DGRbZjylQOAU4UYdYtn1pQbjPDvxXP4GnChrbwbKo5FKafCaBCLyHML7MyMQGOqUBSauTJPmUv%2FDVIdgrCs3s1gjUtviQpwj2nKpvM8kV9Ude1DT5MgxRDZNZQ7VM9sn4ds3cxP2VxwfFGuSgUE1nfMhJasqIS9FhwpSwRzLtvy3%2BH35gw7l02sX4vjY3ZzbNdCvZ5knH8gNVkGcFeqfZOmKGcETSIOdM9T26Bd%2Fu9968Avx4YwKWUNCSz9U9%2FGMP34xpy2iOKuzQK88lgmXdCDS5e7Qr&X-Amz-Signature=a8b0ed51fc2e379e8d728fe11855f2e926920d505199e92cf521846464b3a4e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NR3TQU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdaYDxbqqvFIf%2FZJoy2xgPHOOXoBO5vy6Ft%2Bi5pDy2cwIgRLCQ1DnOSFPAneWysS8AKr1CBoiP1W74uPXuGjEuhbwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDC1L%2FAi%2BwPiqQRqcJircA4TdTI8yK180K69HAtSnV4J8ND9JQeU9%2FuxPNfBGEAbQz%2BwWMKgdtF3peW4UBRVMcxat3NyBt5%2Bj5rLKNtKdwB0Wdz4SsAkVWALKXAzKRFVPM8W45IP5xThmXY%2BWduahBWpUgcPwQhlnSpVHsWZpSGfcu01yiKSESNZ3q%2FgcV0GjGy%2Bs3vyYAQh3pHc6%2FW%2FN4vKC8%2BdDca6y1kzTqkBaBC8mu6VIMnxA%2BzqCKk%2BND4jT%2FRYtSa%2BV6UDeQ8dZbgXX6qoKBeQJeRXCeNmowGY%2FXv6wFKUmoM%2B%2Ff2qfseiS%2Frv7Z6SK5zVtNliOFSs5dhxOAQ77zLhraFdTn3Qjok70h43FnLbu%2BzYVRcgp8mBHRe9s98Zl1l%2ByWp3XiXe%2FhiwIM%2FrKSO%2FJBOeS%2FAB4ndgVb8OBvQ3owUevcRCjI8iMjOaoipTW7FPRQ%2BHBlP9NnfcKxBE8j9nRAsk3OHYV6Npr9z1uVTx9DWJ2iQBR%2BILXiN%2BT39LFXFQ%2F%2B69idosm%2BSvR0UJ8jkWmkEwks2OoIV6CmIcAeIIZYurUK4ezfokZ3UYmYs6%2FlgQAtboxynkuzauWImIDux1DGRbZjylQOAU4UYdYtn1pQbjPDvxXP4GnChrbwbKo5FKafCaBCLyHML7MyMQGOqUBSauTJPmUv%2FDVIdgrCs3s1gjUtviQpwj2nKpvM8kV9Ude1DT5MgxRDZNZQ7VM9sn4ds3cxP2VxwfFGuSgUE1nfMhJasqIS9FhwpSwRzLtvy3%2BH35gw7l02sX4vjY3ZzbNdCvZ5knH8gNVkGcFeqfZOmKGcETSIOdM9T26Bd%2Fu9968Avx4YwKWUNCSz9U9%2FGMP34xpy2iOKuzQK88lgmXdCDS5e7Qr&X-Amz-Signature=8de62314b27e25f66f9b6a725c5f781139db29df64d34b6a24b650e34b80fbc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NR3TQU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdaYDxbqqvFIf%2FZJoy2xgPHOOXoBO5vy6Ft%2Bi5pDy2cwIgRLCQ1DnOSFPAneWysS8AKr1CBoiP1W74uPXuGjEuhbwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDC1L%2FAi%2BwPiqQRqcJircA4TdTI8yK180K69HAtSnV4J8ND9JQeU9%2FuxPNfBGEAbQz%2BwWMKgdtF3peW4UBRVMcxat3NyBt5%2Bj5rLKNtKdwB0Wdz4SsAkVWALKXAzKRFVPM8W45IP5xThmXY%2BWduahBWpUgcPwQhlnSpVHsWZpSGfcu01yiKSESNZ3q%2FgcV0GjGy%2Bs3vyYAQh3pHc6%2FW%2FN4vKC8%2BdDca6y1kzTqkBaBC8mu6VIMnxA%2BzqCKk%2BND4jT%2FRYtSa%2BV6UDeQ8dZbgXX6qoKBeQJeRXCeNmowGY%2FXv6wFKUmoM%2B%2Ff2qfseiS%2Frv7Z6SK5zVtNliOFSs5dhxOAQ77zLhraFdTn3Qjok70h43FnLbu%2BzYVRcgp8mBHRe9s98Zl1l%2ByWp3XiXe%2FhiwIM%2FrKSO%2FJBOeS%2FAB4ndgVb8OBvQ3owUevcRCjI8iMjOaoipTW7FPRQ%2BHBlP9NnfcKxBE8j9nRAsk3OHYV6Npr9z1uVTx9DWJ2iQBR%2BILXiN%2BT39LFXFQ%2F%2B69idosm%2BSvR0UJ8jkWmkEwks2OoIV6CmIcAeIIZYurUK4ezfokZ3UYmYs6%2FlgQAtboxynkuzauWImIDux1DGRbZjylQOAU4UYdYtn1pQbjPDvxXP4GnChrbwbKo5FKafCaBCLyHML7MyMQGOqUBSauTJPmUv%2FDVIdgrCs3s1gjUtviQpwj2nKpvM8kV9Ude1DT5MgxRDZNZQ7VM9sn4ds3cxP2VxwfFGuSgUE1nfMhJasqIS9FhwpSwRzLtvy3%2BH35gw7l02sX4vjY3ZzbNdCvZ5knH8gNVkGcFeqfZOmKGcETSIOdM9T26Bd%2Fu9968Avx4YwKWUNCSz9U9%2FGMP34xpy2iOKuzQK88lgmXdCDS5e7Qr&X-Amz-Signature=43e9a140634a86376505a5dfe9f7d4fb699a0f09a81aff83e7056628c37e19ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NR3TQU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdaYDxbqqvFIf%2FZJoy2xgPHOOXoBO5vy6Ft%2Bi5pDy2cwIgRLCQ1DnOSFPAneWysS8AKr1CBoiP1W74uPXuGjEuhbwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDC1L%2FAi%2BwPiqQRqcJircA4TdTI8yK180K69HAtSnV4J8ND9JQeU9%2FuxPNfBGEAbQz%2BwWMKgdtF3peW4UBRVMcxat3NyBt5%2Bj5rLKNtKdwB0Wdz4SsAkVWALKXAzKRFVPM8W45IP5xThmXY%2BWduahBWpUgcPwQhlnSpVHsWZpSGfcu01yiKSESNZ3q%2FgcV0GjGy%2Bs3vyYAQh3pHc6%2FW%2FN4vKC8%2BdDca6y1kzTqkBaBC8mu6VIMnxA%2BzqCKk%2BND4jT%2FRYtSa%2BV6UDeQ8dZbgXX6qoKBeQJeRXCeNmowGY%2FXv6wFKUmoM%2B%2Ff2qfseiS%2Frv7Z6SK5zVtNliOFSs5dhxOAQ77zLhraFdTn3Qjok70h43FnLbu%2BzYVRcgp8mBHRe9s98Zl1l%2ByWp3XiXe%2FhiwIM%2FrKSO%2FJBOeS%2FAB4ndgVb8OBvQ3owUevcRCjI8iMjOaoipTW7FPRQ%2BHBlP9NnfcKxBE8j9nRAsk3OHYV6Npr9z1uVTx9DWJ2iQBR%2BILXiN%2BT39LFXFQ%2F%2B69idosm%2BSvR0UJ8jkWmkEwks2OoIV6CmIcAeIIZYurUK4ezfokZ3UYmYs6%2FlgQAtboxynkuzauWImIDux1DGRbZjylQOAU4UYdYtn1pQbjPDvxXP4GnChrbwbKo5FKafCaBCLyHML7MyMQGOqUBSauTJPmUv%2FDVIdgrCs3s1gjUtviQpwj2nKpvM8kV9Ude1DT5MgxRDZNZQ7VM9sn4ds3cxP2VxwfFGuSgUE1nfMhJasqIS9FhwpSwRzLtvy3%2BH35gw7l02sX4vjY3ZzbNdCvZ5knH8gNVkGcFeqfZOmKGcETSIOdM9T26Bd%2Fu9968Avx4YwKWUNCSz9U9%2FGMP34xpy2iOKuzQK88lgmXdCDS5e7Qr&X-Amz-Signature=f7d41379351c6173aed3c14efd69dda027e6f06570f6b9a5df12499aa48bc367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NR3TQU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdaYDxbqqvFIf%2FZJoy2xgPHOOXoBO5vy6Ft%2Bi5pDy2cwIgRLCQ1DnOSFPAneWysS8AKr1CBoiP1W74uPXuGjEuhbwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDC1L%2FAi%2BwPiqQRqcJircA4TdTI8yK180K69HAtSnV4J8ND9JQeU9%2FuxPNfBGEAbQz%2BwWMKgdtF3peW4UBRVMcxat3NyBt5%2Bj5rLKNtKdwB0Wdz4SsAkVWALKXAzKRFVPM8W45IP5xThmXY%2BWduahBWpUgcPwQhlnSpVHsWZpSGfcu01yiKSESNZ3q%2FgcV0GjGy%2Bs3vyYAQh3pHc6%2FW%2FN4vKC8%2BdDca6y1kzTqkBaBC8mu6VIMnxA%2BzqCKk%2BND4jT%2FRYtSa%2BV6UDeQ8dZbgXX6qoKBeQJeRXCeNmowGY%2FXv6wFKUmoM%2B%2Ff2qfseiS%2Frv7Z6SK5zVtNliOFSs5dhxOAQ77zLhraFdTn3Qjok70h43FnLbu%2BzYVRcgp8mBHRe9s98Zl1l%2ByWp3XiXe%2FhiwIM%2FrKSO%2FJBOeS%2FAB4ndgVb8OBvQ3owUevcRCjI8iMjOaoipTW7FPRQ%2BHBlP9NnfcKxBE8j9nRAsk3OHYV6Npr9z1uVTx9DWJ2iQBR%2BILXiN%2BT39LFXFQ%2F%2B69idosm%2BSvR0UJ8jkWmkEwks2OoIV6CmIcAeIIZYurUK4ezfokZ3UYmYs6%2FlgQAtboxynkuzauWImIDux1DGRbZjylQOAU4UYdYtn1pQbjPDvxXP4GnChrbwbKo5FKafCaBCLyHML7MyMQGOqUBSauTJPmUv%2FDVIdgrCs3s1gjUtviQpwj2nKpvM8kV9Ude1DT5MgxRDZNZQ7VM9sn4ds3cxP2VxwfFGuSgUE1nfMhJasqIS9FhwpSwRzLtvy3%2BH35gw7l02sX4vjY3ZzbNdCvZ5knH8gNVkGcFeqfZOmKGcETSIOdM9T26Bd%2Fu9968Avx4YwKWUNCSz9U9%2FGMP34xpy2iOKuzQK88lgmXdCDS5e7Qr&X-Amz-Signature=4b0b2c09627b0229f196343630a1bf7cfe9903ab172bec82735789519aa4ee3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NR3TQU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdaYDxbqqvFIf%2FZJoy2xgPHOOXoBO5vy6Ft%2Bi5pDy2cwIgRLCQ1DnOSFPAneWysS8AKr1CBoiP1W74uPXuGjEuhbwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDC1L%2FAi%2BwPiqQRqcJircA4TdTI8yK180K69HAtSnV4J8ND9JQeU9%2FuxPNfBGEAbQz%2BwWMKgdtF3peW4UBRVMcxat3NyBt5%2Bj5rLKNtKdwB0Wdz4SsAkVWALKXAzKRFVPM8W45IP5xThmXY%2BWduahBWpUgcPwQhlnSpVHsWZpSGfcu01yiKSESNZ3q%2FgcV0GjGy%2Bs3vyYAQh3pHc6%2FW%2FN4vKC8%2BdDca6y1kzTqkBaBC8mu6VIMnxA%2BzqCKk%2BND4jT%2FRYtSa%2BV6UDeQ8dZbgXX6qoKBeQJeRXCeNmowGY%2FXv6wFKUmoM%2B%2Ff2qfseiS%2Frv7Z6SK5zVtNliOFSs5dhxOAQ77zLhraFdTn3Qjok70h43FnLbu%2BzYVRcgp8mBHRe9s98Zl1l%2ByWp3XiXe%2FhiwIM%2FrKSO%2FJBOeS%2FAB4ndgVb8OBvQ3owUevcRCjI8iMjOaoipTW7FPRQ%2BHBlP9NnfcKxBE8j9nRAsk3OHYV6Npr9z1uVTx9DWJ2iQBR%2BILXiN%2BT39LFXFQ%2F%2B69idosm%2BSvR0UJ8jkWmkEwks2OoIV6CmIcAeIIZYurUK4ezfokZ3UYmYs6%2FlgQAtboxynkuzauWImIDux1DGRbZjylQOAU4UYdYtn1pQbjPDvxXP4GnChrbwbKo5FKafCaBCLyHML7MyMQGOqUBSauTJPmUv%2FDVIdgrCs3s1gjUtviQpwj2nKpvM8kV9Ude1DT5MgxRDZNZQ7VM9sn4ds3cxP2VxwfFGuSgUE1nfMhJasqIS9FhwpSwRzLtvy3%2BH35gw7l02sX4vjY3ZzbNdCvZ5knH8gNVkGcFeqfZOmKGcETSIOdM9T26Bd%2Fu9968Avx4YwKWUNCSz9U9%2FGMP34xpy2iOKuzQK88lgmXdCDS5e7Qr&X-Amz-Signature=0b2c76da98591a59d8dfbe099715826e9c68903e3dc5981e3b19c825c27e5996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NR3TQU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdaYDxbqqvFIf%2FZJoy2xgPHOOXoBO5vy6Ft%2Bi5pDy2cwIgRLCQ1DnOSFPAneWysS8AKr1CBoiP1W74uPXuGjEuhbwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDC1L%2FAi%2BwPiqQRqcJircA4TdTI8yK180K69HAtSnV4J8ND9JQeU9%2FuxPNfBGEAbQz%2BwWMKgdtF3peW4UBRVMcxat3NyBt5%2Bj5rLKNtKdwB0Wdz4SsAkVWALKXAzKRFVPM8W45IP5xThmXY%2BWduahBWpUgcPwQhlnSpVHsWZpSGfcu01yiKSESNZ3q%2FgcV0GjGy%2Bs3vyYAQh3pHc6%2FW%2FN4vKC8%2BdDca6y1kzTqkBaBC8mu6VIMnxA%2BzqCKk%2BND4jT%2FRYtSa%2BV6UDeQ8dZbgXX6qoKBeQJeRXCeNmowGY%2FXv6wFKUmoM%2B%2Ff2qfseiS%2Frv7Z6SK5zVtNliOFSs5dhxOAQ77zLhraFdTn3Qjok70h43FnLbu%2BzYVRcgp8mBHRe9s98Zl1l%2ByWp3XiXe%2FhiwIM%2FrKSO%2FJBOeS%2FAB4ndgVb8OBvQ3owUevcRCjI8iMjOaoipTW7FPRQ%2BHBlP9NnfcKxBE8j9nRAsk3OHYV6Npr9z1uVTx9DWJ2iQBR%2BILXiN%2BT39LFXFQ%2F%2B69idosm%2BSvR0UJ8jkWmkEwks2OoIV6CmIcAeIIZYurUK4ezfokZ3UYmYs6%2FlgQAtboxynkuzauWImIDux1DGRbZjylQOAU4UYdYtn1pQbjPDvxXP4GnChrbwbKo5FKafCaBCLyHML7MyMQGOqUBSauTJPmUv%2FDVIdgrCs3s1gjUtviQpwj2nKpvM8kV9Ude1DT5MgxRDZNZQ7VM9sn4ds3cxP2VxwfFGuSgUE1nfMhJasqIS9FhwpSwRzLtvy3%2BH35gw7l02sX4vjY3ZzbNdCvZ5knH8gNVkGcFeqfZOmKGcETSIOdM9T26Bd%2Fu9968Avx4YwKWUNCSz9U9%2FGMP34xpy2iOKuzQK88lgmXdCDS5e7Qr&X-Amz-Signature=c049a2645ce374f6e2f78beb8a90378fc40a5ec774a1746509065b00dff83767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
