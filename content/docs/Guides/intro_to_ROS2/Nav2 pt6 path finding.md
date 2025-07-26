---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFTW3ZZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCXOt395awGCmlR5dQ2Hg%2FBGOYVvnQCe0hGCL%2FGUcrvqQIhALOKAxmr0J6uJSwynhNBfTKRO002x1aACSELBIizKg63Kv8DCF8QABoMNjM3NDIzMTgzODA1IgwbL7s8lwubl001PRMq3APxvBrtyJ8Q4cxtdIRF%2FN0fyRAiAAojKieK5pCy3T0BDhuSXwdx8uufx2vtbrffLElJHxJPt5yJxrQApCKdWM8xJPvaPTbjEQfvTKo7IoTOoWNceOWW5Anzyax7JB01Tg1UAqg9nGt8Wn1GFn8LObP3DP4koQ0P4dO1DU4tiYTDPVmtaGHlIWrzJ%2FP1wQ%2Fsf5FqFRhw8JuBTX9gs49p%2BsQl0sM1R2ufrNReWZvd9iS6RHMhcOHgwlpwYIGw0ZsKhGJr3UUXG3pe0gnkftq5sz4DZ9zMcqB2WnnXUbeh%2FTe3LDQmOgc3N%2Bd2jpkomOh8juriIfhnpLAK7uAtkPpGcgIl7BHZdmXy%2Bue320Gb2vcX4qeQi%2BGsqjPu9iYeBJ6C81sJFtqEnfZrRiR%2FmWCMbKRsJKpzRj5aOTBlBZfH8Fp8otLgVKRx%2FZ8YAeAM%2FCt14oikTWS29vnCegJTijy2WWq7fHQqTT4LGbLlnk2qo2kYm1QxzBRF8Fu%2FOY64jJ7gGryNx4B3rKawp8%2F9WcI88jIFuWJ%2F4exu0eefSsTdkalCZRm51qnnXnvHPJLdqP8qFVm27AM2CQiXqdYNzOQAzWTFw3kO2WHRNFcLi0PCpbrTh5Bl51uwFbMsAsoZ3DCYwZPEBjqkATkyi%2FHoI7%2BBM%2BoyC%2BHl0CG9Omem3o7%2BxRVo9pzTtLoNyqy9Usr47YqdZEPxUe6t%2BwTOniJHnWeQG5FRKYfdC%2FgqFsIinRgmBMC3Tq%2BEVF5acs1FQACS5OvACN%2FcF3wd5wcHG1Q0Y%2Fj7%2B3UFxFZrHXR6uHei3G%2BZ%2FgvM3E3bBHuRsHQPn6XzK7Jc0UffUP5zbGLyyxtPipnR15z%2Fpv6G%2F5vI0qw%2B&X-Amz-Signature=0a61f9895b18f77eb8fecdb27409c59d73845c8345f330d5c510c6167f57afbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFTW3ZZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCXOt395awGCmlR5dQ2Hg%2FBGOYVvnQCe0hGCL%2FGUcrvqQIhALOKAxmr0J6uJSwynhNBfTKRO002x1aACSELBIizKg63Kv8DCF8QABoMNjM3NDIzMTgzODA1IgwbL7s8lwubl001PRMq3APxvBrtyJ8Q4cxtdIRF%2FN0fyRAiAAojKieK5pCy3T0BDhuSXwdx8uufx2vtbrffLElJHxJPt5yJxrQApCKdWM8xJPvaPTbjEQfvTKo7IoTOoWNceOWW5Anzyax7JB01Tg1UAqg9nGt8Wn1GFn8LObP3DP4koQ0P4dO1DU4tiYTDPVmtaGHlIWrzJ%2FP1wQ%2Fsf5FqFRhw8JuBTX9gs49p%2BsQl0sM1R2ufrNReWZvd9iS6RHMhcOHgwlpwYIGw0ZsKhGJr3UUXG3pe0gnkftq5sz4DZ9zMcqB2WnnXUbeh%2FTe3LDQmOgc3N%2Bd2jpkomOh8juriIfhnpLAK7uAtkPpGcgIl7BHZdmXy%2Bue320Gb2vcX4qeQi%2BGsqjPu9iYeBJ6C81sJFtqEnfZrRiR%2FmWCMbKRsJKpzRj5aOTBlBZfH8Fp8otLgVKRx%2FZ8YAeAM%2FCt14oikTWS29vnCegJTijy2WWq7fHQqTT4LGbLlnk2qo2kYm1QxzBRF8Fu%2FOY64jJ7gGryNx4B3rKawp8%2F9WcI88jIFuWJ%2F4exu0eefSsTdkalCZRm51qnnXnvHPJLdqP8qFVm27AM2CQiXqdYNzOQAzWTFw3kO2WHRNFcLi0PCpbrTh5Bl51uwFbMsAsoZ3DCYwZPEBjqkATkyi%2FHoI7%2BBM%2BoyC%2BHl0CG9Omem3o7%2BxRVo9pzTtLoNyqy9Usr47YqdZEPxUe6t%2BwTOniJHnWeQG5FRKYfdC%2FgqFsIinRgmBMC3Tq%2BEVF5acs1FQACS5OvACN%2FcF3wd5wcHG1Q0Y%2Fj7%2B3UFxFZrHXR6uHei3G%2BZ%2FgvM3E3bBHuRsHQPn6XzK7Jc0UffUP5zbGLyyxtPipnR15z%2Fpv6G%2F5vI0qw%2B&X-Amz-Signature=84a018ce851f7506e04d476ef8c84eaecab818135097c8be818e0361b66b1ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFTW3ZZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCXOt395awGCmlR5dQ2Hg%2FBGOYVvnQCe0hGCL%2FGUcrvqQIhALOKAxmr0J6uJSwynhNBfTKRO002x1aACSELBIizKg63Kv8DCF8QABoMNjM3NDIzMTgzODA1IgwbL7s8lwubl001PRMq3APxvBrtyJ8Q4cxtdIRF%2FN0fyRAiAAojKieK5pCy3T0BDhuSXwdx8uufx2vtbrffLElJHxJPt5yJxrQApCKdWM8xJPvaPTbjEQfvTKo7IoTOoWNceOWW5Anzyax7JB01Tg1UAqg9nGt8Wn1GFn8LObP3DP4koQ0P4dO1DU4tiYTDPVmtaGHlIWrzJ%2FP1wQ%2Fsf5FqFRhw8JuBTX9gs49p%2BsQl0sM1R2ufrNReWZvd9iS6RHMhcOHgwlpwYIGw0ZsKhGJr3UUXG3pe0gnkftq5sz4DZ9zMcqB2WnnXUbeh%2FTe3LDQmOgc3N%2Bd2jpkomOh8juriIfhnpLAK7uAtkPpGcgIl7BHZdmXy%2Bue320Gb2vcX4qeQi%2BGsqjPu9iYeBJ6C81sJFtqEnfZrRiR%2FmWCMbKRsJKpzRj5aOTBlBZfH8Fp8otLgVKRx%2FZ8YAeAM%2FCt14oikTWS29vnCegJTijy2WWq7fHQqTT4LGbLlnk2qo2kYm1QxzBRF8Fu%2FOY64jJ7gGryNx4B3rKawp8%2F9WcI88jIFuWJ%2F4exu0eefSsTdkalCZRm51qnnXnvHPJLdqP8qFVm27AM2CQiXqdYNzOQAzWTFw3kO2WHRNFcLi0PCpbrTh5Bl51uwFbMsAsoZ3DCYwZPEBjqkATkyi%2FHoI7%2BBM%2BoyC%2BHl0CG9Omem3o7%2BxRVo9pzTtLoNyqy9Usr47YqdZEPxUe6t%2BwTOniJHnWeQG5FRKYfdC%2FgqFsIinRgmBMC3Tq%2BEVF5acs1FQACS5OvACN%2FcF3wd5wcHG1Q0Y%2Fj7%2B3UFxFZrHXR6uHei3G%2BZ%2FgvM3E3bBHuRsHQPn6XzK7Jc0UffUP5zbGLyyxtPipnR15z%2Fpv6G%2F5vI0qw%2B&X-Amz-Signature=79bf2d0aa38a2d6df4b22383104961a8c6a8196511232539f896114619b39e4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFTW3ZZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCXOt395awGCmlR5dQ2Hg%2FBGOYVvnQCe0hGCL%2FGUcrvqQIhALOKAxmr0J6uJSwynhNBfTKRO002x1aACSELBIizKg63Kv8DCF8QABoMNjM3NDIzMTgzODA1IgwbL7s8lwubl001PRMq3APxvBrtyJ8Q4cxtdIRF%2FN0fyRAiAAojKieK5pCy3T0BDhuSXwdx8uufx2vtbrffLElJHxJPt5yJxrQApCKdWM8xJPvaPTbjEQfvTKo7IoTOoWNceOWW5Anzyax7JB01Tg1UAqg9nGt8Wn1GFn8LObP3DP4koQ0P4dO1DU4tiYTDPVmtaGHlIWrzJ%2FP1wQ%2Fsf5FqFRhw8JuBTX9gs49p%2BsQl0sM1R2ufrNReWZvd9iS6RHMhcOHgwlpwYIGw0ZsKhGJr3UUXG3pe0gnkftq5sz4DZ9zMcqB2WnnXUbeh%2FTe3LDQmOgc3N%2Bd2jpkomOh8juriIfhnpLAK7uAtkPpGcgIl7BHZdmXy%2Bue320Gb2vcX4qeQi%2BGsqjPu9iYeBJ6C81sJFtqEnfZrRiR%2FmWCMbKRsJKpzRj5aOTBlBZfH8Fp8otLgVKRx%2FZ8YAeAM%2FCt14oikTWS29vnCegJTijy2WWq7fHQqTT4LGbLlnk2qo2kYm1QxzBRF8Fu%2FOY64jJ7gGryNx4B3rKawp8%2F9WcI88jIFuWJ%2F4exu0eefSsTdkalCZRm51qnnXnvHPJLdqP8qFVm27AM2CQiXqdYNzOQAzWTFw3kO2WHRNFcLi0PCpbrTh5Bl51uwFbMsAsoZ3DCYwZPEBjqkATkyi%2FHoI7%2BBM%2BoyC%2BHl0CG9Omem3o7%2BxRVo9pzTtLoNyqy9Usr47YqdZEPxUe6t%2BwTOniJHnWeQG5FRKYfdC%2FgqFsIinRgmBMC3Tq%2BEVF5acs1FQACS5OvACN%2FcF3wd5wcHG1Q0Y%2Fj7%2B3UFxFZrHXR6uHei3G%2BZ%2FgvM3E3bBHuRsHQPn6XzK7Jc0UffUP5zbGLyyxtPipnR15z%2Fpv6G%2F5vI0qw%2B&X-Amz-Signature=6fab63032504cf2be4ad463375bba458ed48204fdda587d1814f7c5255d6b2ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFTW3ZZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCXOt395awGCmlR5dQ2Hg%2FBGOYVvnQCe0hGCL%2FGUcrvqQIhALOKAxmr0J6uJSwynhNBfTKRO002x1aACSELBIizKg63Kv8DCF8QABoMNjM3NDIzMTgzODA1IgwbL7s8lwubl001PRMq3APxvBrtyJ8Q4cxtdIRF%2FN0fyRAiAAojKieK5pCy3T0BDhuSXwdx8uufx2vtbrffLElJHxJPt5yJxrQApCKdWM8xJPvaPTbjEQfvTKo7IoTOoWNceOWW5Anzyax7JB01Tg1UAqg9nGt8Wn1GFn8LObP3DP4koQ0P4dO1DU4tiYTDPVmtaGHlIWrzJ%2FP1wQ%2Fsf5FqFRhw8JuBTX9gs49p%2BsQl0sM1R2ufrNReWZvd9iS6RHMhcOHgwlpwYIGw0ZsKhGJr3UUXG3pe0gnkftq5sz4DZ9zMcqB2WnnXUbeh%2FTe3LDQmOgc3N%2Bd2jpkomOh8juriIfhnpLAK7uAtkPpGcgIl7BHZdmXy%2Bue320Gb2vcX4qeQi%2BGsqjPu9iYeBJ6C81sJFtqEnfZrRiR%2FmWCMbKRsJKpzRj5aOTBlBZfH8Fp8otLgVKRx%2FZ8YAeAM%2FCt14oikTWS29vnCegJTijy2WWq7fHQqTT4LGbLlnk2qo2kYm1QxzBRF8Fu%2FOY64jJ7gGryNx4B3rKawp8%2F9WcI88jIFuWJ%2F4exu0eefSsTdkalCZRm51qnnXnvHPJLdqP8qFVm27AM2CQiXqdYNzOQAzWTFw3kO2WHRNFcLi0PCpbrTh5Bl51uwFbMsAsoZ3DCYwZPEBjqkATkyi%2FHoI7%2BBM%2BoyC%2BHl0CG9Omem3o7%2BxRVo9pzTtLoNyqy9Usr47YqdZEPxUe6t%2BwTOniJHnWeQG5FRKYfdC%2FgqFsIinRgmBMC3Tq%2BEVF5acs1FQACS5OvACN%2FcF3wd5wcHG1Q0Y%2Fj7%2B3UFxFZrHXR6uHei3G%2BZ%2FgvM3E3bBHuRsHQPn6XzK7Jc0UffUP5zbGLyyxtPipnR15z%2Fpv6G%2F5vI0qw%2B&X-Amz-Signature=9d92bbd1d7c181c45943f3d4432965e0406906906f671f39c620350e4272ec6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFTW3ZZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCXOt395awGCmlR5dQ2Hg%2FBGOYVvnQCe0hGCL%2FGUcrvqQIhALOKAxmr0J6uJSwynhNBfTKRO002x1aACSELBIizKg63Kv8DCF8QABoMNjM3NDIzMTgzODA1IgwbL7s8lwubl001PRMq3APxvBrtyJ8Q4cxtdIRF%2FN0fyRAiAAojKieK5pCy3T0BDhuSXwdx8uufx2vtbrffLElJHxJPt5yJxrQApCKdWM8xJPvaPTbjEQfvTKo7IoTOoWNceOWW5Anzyax7JB01Tg1UAqg9nGt8Wn1GFn8LObP3DP4koQ0P4dO1DU4tiYTDPVmtaGHlIWrzJ%2FP1wQ%2Fsf5FqFRhw8JuBTX9gs49p%2BsQl0sM1R2ufrNReWZvd9iS6RHMhcOHgwlpwYIGw0ZsKhGJr3UUXG3pe0gnkftq5sz4DZ9zMcqB2WnnXUbeh%2FTe3LDQmOgc3N%2Bd2jpkomOh8juriIfhnpLAK7uAtkPpGcgIl7BHZdmXy%2Bue320Gb2vcX4qeQi%2BGsqjPu9iYeBJ6C81sJFtqEnfZrRiR%2FmWCMbKRsJKpzRj5aOTBlBZfH8Fp8otLgVKRx%2FZ8YAeAM%2FCt14oikTWS29vnCegJTijy2WWq7fHQqTT4LGbLlnk2qo2kYm1QxzBRF8Fu%2FOY64jJ7gGryNx4B3rKawp8%2F9WcI88jIFuWJ%2F4exu0eefSsTdkalCZRm51qnnXnvHPJLdqP8qFVm27AM2CQiXqdYNzOQAzWTFw3kO2WHRNFcLi0PCpbrTh5Bl51uwFbMsAsoZ3DCYwZPEBjqkATkyi%2FHoI7%2BBM%2BoyC%2BHl0CG9Omem3o7%2BxRVo9pzTtLoNyqy9Usr47YqdZEPxUe6t%2BwTOniJHnWeQG5FRKYfdC%2FgqFsIinRgmBMC3Tq%2BEVF5acs1FQACS5OvACN%2FcF3wd5wcHG1Q0Y%2Fj7%2B3UFxFZrHXR6uHei3G%2BZ%2FgvM3E3bBHuRsHQPn6XzK7Jc0UffUP5zbGLyyxtPipnR15z%2Fpv6G%2F5vI0qw%2B&X-Amz-Signature=1f3ba88d298b9660a5298ebed371baccebc2369ae176cffe84fea78152cd71e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

```python
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

# Nav2 settings

TODO: change footprint?
