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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGK3ZUA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC2CLuI8OytZ7whC%2B7%2FnSeHh2vukmJfefDT3jcZ30OmWgIgCkDopVif2XljiQ6I%2FrOMn2961JEBWTd8U2GN5EUl6Twq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJ6Xcn21UTv7N6ebNyrcA9pTmPQE066sVkAZ7XaD4V0aT3zj7tj2%2FYWN1F%2F11STkD5c%2Fli20ZuWHDvtaGXAFCZ077LSbAw7SnrzQsz36ezPnAxXORlqs0A4Bi74Bjl%2Bs%2FACL0DjmmmLAg0MyK7q3cNoPvP0OT0NSm%2BuODXQVRXvqTSpmi3eLlvBdWRmlDQGPRtrZqNSlTnEquyYF%2Bxz7zOfGfIfIB9BOAklmkwGXYPkXsZW6ylv4Je0cfE44EE35pqPywklcGc7n2%2BCZo9x8yOV%2BY4wETU%2BZdRWFo8HHgd7JYeTYU0n99jfYk856Y3oNpSCzZewKWOBlIkOfiE%2BvcNufWAhp9FjWJbQdg2ePspaQ6%2BfHHFrQ%2FhEQFJlrkUnaKMI8eizbuusTYq%2Fw8Wfhkw9xfLehntASyeYDEnYOOEBMDBqueWW0pqCqUfQQPpfq%2BEyrIpTTzoqYJaa4d3BcE72NxEHRCc6nCAsweOvfESS%2Ft3W468SFpQtSFPTKx9rr7jwrL4VQNHyFskKONNcK1F4sw2Im%2FUt351snCTOlBCp8tLFL41z31NPJuhgVFQj01g6AQNTZupIYZ0Ahk%2BVzh%2FGzsKS9fmTzk7mrpBGVvXa%2B7Ey65sFgeLhXS0QDPIZaQTFpnhK0imq7AU0BMI%2FikcQGOqUBFZX1MK%2Fdlnz%2B1azINoMSPORplCPobyNAV4DhrsmhvXBfBvNlLI56Zv1j7aprJUTa0Q5gbErTmF7RgLImgA8YT51Qrs5uTl4lc7XFDo6j0Z4W%2F3dZK%2F%2BaciqBe10HV%2BPBrppuVd3r0pB4OumAd1qdksUTMEHtUInRFNDXV%2Fpzr8%2BVi%2BjR5mUPJUHkTMHApHolaW%2FTbCfs2K3oSZliJDPz2wYCtI0v&X-Amz-Signature=c5cfeef4f3b3fdef2012ed1f6c9a055c0cb6d368804a32af788c16610b44a371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGK3ZUA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC2CLuI8OytZ7whC%2B7%2FnSeHh2vukmJfefDT3jcZ30OmWgIgCkDopVif2XljiQ6I%2FrOMn2961JEBWTd8U2GN5EUl6Twq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJ6Xcn21UTv7N6ebNyrcA9pTmPQE066sVkAZ7XaD4V0aT3zj7tj2%2FYWN1F%2F11STkD5c%2Fli20ZuWHDvtaGXAFCZ077LSbAw7SnrzQsz36ezPnAxXORlqs0A4Bi74Bjl%2Bs%2FACL0DjmmmLAg0MyK7q3cNoPvP0OT0NSm%2BuODXQVRXvqTSpmi3eLlvBdWRmlDQGPRtrZqNSlTnEquyYF%2Bxz7zOfGfIfIB9BOAklmkwGXYPkXsZW6ylv4Je0cfE44EE35pqPywklcGc7n2%2BCZo9x8yOV%2BY4wETU%2BZdRWFo8HHgd7JYeTYU0n99jfYk856Y3oNpSCzZewKWOBlIkOfiE%2BvcNufWAhp9FjWJbQdg2ePspaQ6%2BfHHFrQ%2FhEQFJlrkUnaKMI8eizbuusTYq%2Fw8Wfhkw9xfLehntASyeYDEnYOOEBMDBqueWW0pqCqUfQQPpfq%2BEyrIpTTzoqYJaa4d3BcE72NxEHRCc6nCAsweOvfESS%2Ft3W468SFpQtSFPTKx9rr7jwrL4VQNHyFskKONNcK1F4sw2Im%2FUt351snCTOlBCp8tLFL41z31NPJuhgVFQj01g6AQNTZupIYZ0Ahk%2BVzh%2FGzsKS9fmTzk7mrpBGVvXa%2B7Ey65sFgeLhXS0QDPIZaQTFpnhK0imq7AU0BMI%2FikcQGOqUBFZX1MK%2Fdlnz%2B1azINoMSPORplCPobyNAV4DhrsmhvXBfBvNlLI56Zv1j7aprJUTa0Q5gbErTmF7RgLImgA8YT51Qrs5uTl4lc7XFDo6j0Z4W%2F3dZK%2F%2BaciqBe10HV%2BPBrppuVd3r0pB4OumAd1qdksUTMEHtUInRFNDXV%2Fpzr8%2BVi%2BjR5mUPJUHkTMHApHolaW%2FTbCfs2K3oSZliJDPz2wYCtI0v&X-Amz-Signature=f466e5f80e3084cd1ae391a8e65fdbe9f20d03c696faae32359c1c25af607e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGK3ZUA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC2CLuI8OytZ7whC%2B7%2FnSeHh2vukmJfefDT3jcZ30OmWgIgCkDopVif2XljiQ6I%2FrOMn2961JEBWTd8U2GN5EUl6Twq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJ6Xcn21UTv7N6ebNyrcA9pTmPQE066sVkAZ7XaD4V0aT3zj7tj2%2FYWN1F%2F11STkD5c%2Fli20ZuWHDvtaGXAFCZ077LSbAw7SnrzQsz36ezPnAxXORlqs0A4Bi74Bjl%2Bs%2FACL0DjmmmLAg0MyK7q3cNoPvP0OT0NSm%2BuODXQVRXvqTSpmi3eLlvBdWRmlDQGPRtrZqNSlTnEquyYF%2Bxz7zOfGfIfIB9BOAklmkwGXYPkXsZW6ylv4Je0cfE44EE35pqPywklcGc7n2%2BCZo9x8yOV%2BY4wETU%2BZdRWFo8HHgd7JYeTYU0n99jfYk856Y3oNpSCzZewKWOBlIkOfiE%2BvcNufWAhp9FjWJbQdg2ePspaQ6%2BfHHFrQ%2FhEQFJlrkUnaKMI8eizbuusTYq%2Fw8Wfhkw9xfLehntASyeYDEnYOOEBMDBqueWW0pqCqUfQQPpfq%2BEyrIpTTzoqYJaa4d3BcE72NxEHRCc6nCAsweOvfESS%2Ft3W468SFpQtSFPTKx9rr7jwrL4VQNHyFskKONNcK1F4sw2Im%2FUt351snCTOlBCp8tLFL41z31NPJuhgVFQj01g6AQNTZupIYZ0Ahk%2BVzh%2FGzsKS9fmTzk7mrpBGVvXa%2B7Ey65sFgeLhXS0QDPIZaQTFpnhK0imq7AU0BMI%2FikcQGOqUBFZX1MK%2Fdlnz%2B1azINoMSPORplCPobyNAV4DhrsmhvXBfBvNlLI56Zv1j7aprJUTa0Q5gbErTmF7RgLImgA8YT51Qrs5uTl4lc7XFDo6j0Z4W%2F3dZK%2F%2BaciqBe10HV%2BPBrppuVd3r0pB4OumAd1qdksUTMEHtUInRFNDXV%2Fpzr8%2BVi%2BjR5mUPJUHkTMHApHolaW%2FTbCfs2K3oSZliJDPz2wYCtI0v&X-Amz-Signature=0f9e6388ac728b728493de9b62cfaf3ab83277907a4605005b478c5ab38ee7d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGK3ZUA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC2CLuI8OytZ7whC%2B7%2FnSeHh2vukmJfefDT3jcZ30OmWgIgCkDopVif2XljiQ6I%2FrOMn2961JEBWTd8U2GN5EUl6Twq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJ6Xcn21UTv7N6ebNyrcA9pTmPQE066sVkAZ7XaD4V0aT3zj7tj2%2FYWN1F%2F11STkD5c%2Fli20ZuWHDvtaGXAFCZ077LSbAw7SnrzQsz36ezPnAxXORlqs0A4Bi74Bjl%2Bs%2FACL0DjmmmLAg0MyK7q3cNoPvP0OT0NSm%2BuODXQVRXvqTSpmi3eLlvBdWRmlDQGPRtrZqNSlTnEquyYF%2Bxz7zOfGfIfIB9BOAklmkwGXYPkXsZW6ylv4Je0cfE44EE35pqPywklcGc7n2%2BCZo9x8yOV%2BY4wETU%2BZdRWFo8HHgd7JYeTYU0n99jfYk856Y3oNpSCzZewKWOBlIkOfiE%2BvcNufWAhp9FjWJbQdg2ePspaQ6%2BfHHFrQ%2FhEQFJlrkUnaKMI8eizbuusTYq%2Fw8Wfhkw9xfLehntASyeYDEnYOOEBMDBqueWW0pqCqUfQQPpfq%2BEyrIpTTzoqYJaa4d3BcE72NxEHRCc6nCAsweOvfESS%2Ft3W468SFpQtSFPTKx9rr7jwrL4VQNHyFskKONNcK1F4sw2Im%2FUt351snCTOlBCp8tLFL41z31NPJuhgVFQj01g6AQNTZupIYZ0Ahk%2BVzh%2FGzsKS9fmTzk7mrpBGVvXa%2B7Ey65sFgeLhXS0QDPIZaQTFpnhK0imq7AU0BMI%2FikcQGOqUBFZX1MK%2Fdlnz%2B1azINoMSPORplCPobyNAV4DhrsmhvXBfBvNlLI56Zv1j7aprJUTa0Q5gbErTmF7RgLImgA8YT51Qrs5uTl4lc7XFDo6j0Z4W%2F3dZK%2F%2BaciqBe10HV%2BPBrppuVd3r0pB4OumAd1qdksUTMEHtUInRFNDXV%2Fpzr8%2BVi%2BjR5mUPJUHkTMHApHolaW%2FTbCfs2K3oSZliJDPz2wYCtI0v&X-Amz-Signature=bb868b5e16497dad9e7d225c0b3abf88e46023a1b2e2bb0e8c354c287d326130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGK3ZUA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC2CLuI8OytZ7whC%2B7%2FnSeHh2vukmJfefDT3jcZ30OmWgIgCkDopVif2XljiQ6I%2FrOMn2961JEBWTd8U2GN5EUl6Twq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJ6Xcn21UTv7N6ebNyrcA9pTmPQE066sVkAZ7XaD4V0aT3zj7tj2%2FYWN1F%2F11STkD5c%2Fli20ZuWHDvtaGXAFCZ077LSbAw7SnrzQsz36ezPnAxXORlqs0A4Bi74Bjl%2Bs%2FACL0DjmmmLAg0MyK7q3cNoPvP0OT0NSm%2BuODXQVRXvqTSpmi3eLlvBdWRmlDQGPRtrZqNSlTnEquyYF%2Bxz7zOfGfIfIB9BOAklmkwGXYPkXsZW6ylv4Je0cfE44EE35pqPywklcGc7n2%2BCZo9x8yOV%2BY4wETU%2BZdRWFo8HHgd7JYeTYU0n99jfYk856Y3oNpSCzZewKWOBlIkOfiE%2BvcNufWAhp9FjWJbQdg2ePspaQ6%2BfHHFrQ%2FhEQFJlrkUnaKMI8eizbuusTYq%2Fw8Wfhkw9xfLehntASyeYDEnYOOEBMDBqueWW0pqCqUfQQPpfq%2BEyrIpTTzoqYJaa4d3BcE72NxEHRCc6nCAsweOvfESS%2Ft3W468SFpQtSFPTKx9rr7jwrL4VQNHyFskKONNcK1F4sw2Im%2FUt351snCTOlBCp8tLFL41z31NPJuhgVFQj01g6AQNTZupIYZ0Ahk%2BVzh%2FGzsKS9fmTzk7mrpBGVvXa%2B7Ey65sFgeLhXS0QDPIZaQTFpnhK0imq7AU0BMI%2FikcQGOqUBFZX1MK%2Fdlnz%2B1azINoMSPORplCPobyNAV4DhrsmhvXBfBvNlLI56Zv1j7aprJUTa0Q5gbErTmF7RgLImgA8YT51Qrs5uTl4lc7XFDo6j0Z4W%2F3dZK%2F%2BaciqBe10HV%2BPBrppuVd3r0pB4OumAd1qdksUTMEHtUInRFNDXV%2Fpzr8%2BVi%2BjR5mUPJUHkTMHApHolaW%2FTbCfs2K3oSZliJDPz2wYCtI0v&X-Amz-Signature=64a0b7e2af3fbd558936a0fe92ec70aa49668dd35a76e47cd1f879f17ad4dee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGK3ZUA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC2CLuI8OytZ7whC%2B7%2FnSeHh2vukmJfefDT3jcZ30OmWgIgCkDopVif2XljiQ6I%2FrOMn2961JEBWTd8U2GN5EUl6Twq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJ6Xcn21UTv7N6ebNyrcA9pTmPQE066sVkAZ7XaD4V0aT3zj7tj2%2FYWN1F%2F11STkD5c%2Fli20ZuWHDvtaGXAFCZ077LSbAw7SnrzQsz36ezPnAxXORlqs0A4Bi74Bjl%2Bs%2FACL0DjmmmLAg0MyK7q3cNoPvP0OT0NSm%2BuODXQVRXvqTSpmi3eLlvBdWRmlDQGPRtrZqNSlTnEquyYF%2Bxz7zOfGfIfIB9BOAklmkwGXYPkXsZW6ylv4Je0cfE44EE35pqPywklcGc7n2%2BCZo9x8yOV%2BY4wETU%2BZdRWFo8HHgd7JYeTYU0n99jfYk856Y3oNpSCzZewKWOBlIkOfiE%2BvcNufWAhp9FjWJbQdg2ePspaQ6%2BfHHFrQ%2FhEQFJlrkUnaKMI8eizbuusTYq%2Fw8Wfhkw9xfLehntASyeYDEnYOOEBMDBqueWW0pqCqUfQQPpfq%2BEyrIpTTzoqYJaa4d3BcE72NxEHRCc6nCAsweOvfESS%2Ft3W468SFpQtSFPTKx9rr7jwrL4VQNHyFskKONNcK1F4sw2Im%2FUt351snCTOlBCp8tLFL41z31NPJuhgVFQj01g6AQNTZupIYZ0Ahk%2BVzh%2FGzsKS9fmTzk7mrpBGVvXa%2B7Ey65sFgeLhXS0QDPIZaQTFpnhK0imq7AU0BMI%2FikcQGOqUBFZX1MK%2Fdlnz%2B1azINoMSPORplCPobyNAV4DhrsmhvXBfBvNlLI56Zv1j7aprJUTa0Q5gbErTmF7RgLImgA8YT51Qrs5uTl4lc7XFDo6j0Z4W%2F3dZK%2F%2BaciqBe10HV%2BPBrppuVd3r0pB4OumAd1qdksUTMEHtUInRFNDXV%2Fpzr8%2BVi%2BjR5mUPJUHkTMHApHolaW%2FTbCfs2K3oSZliJDPz2wYCtI0v&X-Amz-Signature=258a58dbb64261ffb7f0cdc131f38b9f31c9eb95a92a16a184bbb29974900d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
