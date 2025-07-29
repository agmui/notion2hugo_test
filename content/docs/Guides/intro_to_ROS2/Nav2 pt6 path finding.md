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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67NVXWJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD4bf7Y%2FNxsh%2F%2FJV7TZeyRhnVO4JGpjA3GVWVqnCG%2BdBAIhAOgFn%2BX7hCKaVHcUbY2Lv97lttZpu8ccOYjnLXOXGbTCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX2iNvqY2uMW6Ypbsq3AN3mQHKOOHF52GRGWLyaDAu%2FoUlsHEOrhJNLJ3Lx8HgNieq4ZadBxxPa5OEJmleXAk5MEEGVLn62zeWBzj6i513jELsgKX4n2pJnabH%2BJs%2FHfQZUUjs8tay3dF4kJTmqPl22SHJKTBxz6zBMkKRLGZOQOU7wHY23OuB7aBhJnb3LWPIaAUAjHrixC28J%2BShVK%2BcB74du9OuoLD562HnJq4h7tgSW1LBB6N7fUk3nLOJyAot8B%2BBScx%2FPkYStefY61xqFVAE%2B2KvPHIM674ywpmJxSk9dUEYouzVzl0TwV%2BoExx6rSDaQyRgPjqaFR4oDF1d24Ipv%2FwKVWGVKZTJQdvJha2y%2BFc4JN0jYjRtzSxDSAM1%2FhcG3vzUAjoudtlcWKRWksep7L28hiTjGpPXvY8Zrr99GlN2UJhlYHwQWCdQ7mq7SYOhJbVxXjbus3fUcWeg1gJF4C43wATCaRR1DPSvl%2FXxblKsoq2k4JcRp6NLIbGvkv8dgrP800ZaCiXQkoIHmqP0QItHOCFKzO0cTklnSL%2F1QJHlAAO1ay1miK67LVUgiJTrtGAnpg2msDnJMA%2FmRZWLGJAs0Id0%2BfHElFgT2CyPqc4XWlroGk60fgCYE%2F1b6wZt76%2BAq8o3bjDGn6DEBjqkAbVkOPIh2UqbtkWo6Cyowd%2BhCBSux2eNXXTrFLt4l%2BiwPKqbcpQm%2BBL30yCSHAeAJtEp2Y4L3cebc88TqXqRnbgjF0RFJsDZSVnmD2B7sA4y8EewIOJltRW3lImSP%2BNG2t%2FxySXucZv6j5Ex%2FG2eGQ9OtGxA5QlKlEf5zbBWeYRT69nkKVoQSdJBMg3gQVs%2B3RsMJmBbf0rmCxAJ0RZYBxtQlRrT&X-Amz-Signature=2bb8681402e8c8014d30904420bddcd5594fc61d9c5618700e7f9d2e277913ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67NVXWJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD4bf7Y%2FNxsh%2F%2FJV7TZeyRhnVO4JGpjA3GVWVqnCG%2BdBAIhAOgFn%2BX7hCKaVHcUbY2Lv97lttZpu8ccOYjnLXOXGbTCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX2iNvqY2uMW6Ypbsq3AN3mQHKOOHF52GRGWLyaDAu%2FoUlsHEOrhJNLJ3Lx8HgNieq4ZadBxxPa5OEJmleXAk5MEEGVLn62zeWBzj6i513jELsgKX4n2pJnabH%2BJs%2FHfQZUUjs8tay3dF4kJTmqPl22SHJKTBxz6zBMkKRLGZOQOU7wHY23OuB7aBhJnb3LWPIaAUAjHrixC28J%2BShVK%2BcB74du9OuoLD562HnJq4h7tgSW1LBB6N7fUk3nLOJyAot8B%2BBScx%2FPkYStefY61xqFVAE%2B2KvPHIM674ywpmJxSk9dUEYouzVzl0TwV%2BoExx6rSDaQyRgPjqaFR4oDF1d24Ipv%2FwKVWGVKZTJQdvJha2y%2BFc4JN0jYjRtzSxDSAM1%2FhcG3vzUAjoudtlcWKRWksep7L28hiTjGpPXvY8Zrr99GlN2UJhlYHwQWCdQ7mq7SYOhJbVxXjbus3fUcWeg1gJF4C43wATCaRR1DPSvl%2FXxblKsoq2k4JcRp6NLIbGvkv8dgrP800ZaCiXQkoIHmqP0QItHOCFKzO0cTklnSL%2F1QJHlAAO1ay1miK67LVUgiJTrtGAnpg2msDnJMA%2FmRZWLGJAs0Id0%2BfHElFgT2CyPqc4XWlroGk60fgCYE%2F1b6wZt76%2BAq8o3bjDGn6DEBjqkAbVkOPIh2UqbtkWo6Cyowd%2BhCBSux2eNXXTrFLt4l%2BiwPKqbcpQm%2BBL30yCSHAeAJtEp2Y4L3cebc88TqXqRnbgjF0RFJsDZSVnmD2B7sA4y8EewIOJltRW3lImSP%2BNG2t%2FxySXucZv6j5Ex%2FG2eGQ9OtGxA5QlKlEf5zbBWeYRT69nkKVoQSdJBMg3gQVs%2B3RsMJmBbf0rmCxAJ0RZYBxtQlRrT&X-Amz-Signature=3a95d226f5e8a905769629a4495e9d0162bb9caf946be913c29624fa7778a61c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67NVXWJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD4bf7Y%2FNxsh%2F%2FJV7TZeyRhnVO4JGpjA3GVWVqnCG%2BdBAIhAOgFn%2BX7hCKaVHcUbY2Lv97lttZpu8ccOYjnLXOXGbTCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX2iNvqY2uMW6Ypbsq3AN3mQHKOOHF52GRGWLyaDAu%2FoUlsHEOrhJNLJ3Lx8HgNieq4ZadBxxPa5OEJmleXAk5MEEGVLn62zeWBzj6i513jELsgKX4n2pJnabH%2BJs%2FHfQZUUjs8tay3dF4kJTmqPl22SHJKTBxz6zBMkKRLGZOQOU7wHY23OuB7aBhJnb3LWPIaAUAjHrixC28J%2BShVK%2BcB74du9OuoLD562HnJq4h7tgSW1LBB6N7fUk3nLOJyAot8B%2BBScx%2FPkYStefY61xqFVAE%2B2KvPHIM674ywpmJxSk9dUEYouzVzl0TwV%2BoExx6rSDaQyRgPjqaFR4oDF1d24Ipv%2FwKVWGVKZTJQdvJha2y%2BFc4JN0jYjRtzSxDSAM1%2FhcG3vzUAjoudtlcWKRWksep7L28hiTjGpPXvY8Zrr99GlN2UJhlYHwQWCdQ7mq7SYOhJbVxXjbus3fUcWeg1gJF4C43wATCaRR1DPSvl%2FXxblKsoq2k4JcRp6NLIbGvkv8dgrP800ZaCiXQkoIHmqP0QItHOCFKzO0cTklnSL%2F1QJHlAAO1ay1miK67LVUgiJTrtGAnpg2msDnJMA%2FmRZWLGJAs0Id0%2BfHElFgT2CyPqc4XWlroGk60fgCYE%2F1b6wZt76%2BAq8o3bjDGn6DEBjqkAbVkOPIh2UqbtkWo6Cyowd%2BhCBSux2eNXXTrFLt4l%2BiwPKqbcpQm%2BBL30yCSHAeAJtEp2Y4L3cebc88TqXqRnbgjF0RFJsDZSVnmD2B7sA4y8EewIOJltRW3lImSP%2BNG2t%2FxySXucZv6j5Ex%2FG2eGQ9OtGxA5QlKlEf5zbBWeYRT69nkKVoQSdJBMg3gQVs%2B3RsMJmBbf0rmCxAJ0RZYBxtQlRrT&X-Amz-Signature=14be2efb2453f25d097563728e3a777577dfadbf6887b0a1d64b3fa5cf72bce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67NVXWJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD4bf7Y%2FNxsh%2F%2FJV7TZeyRhnVO4JGpjA3GVWVqnCG%2BdBAIhAOgFn%2BX7hCKaVHcUbY2Lv97lttZpu8ccOYjnLXOXGbTCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX2iNvqY2uMW6Ypbsq3AN3mQHKOOHF52GRGWLyaDAu%2FoUlsHEOrhJNLJ3Lx8HgNieq4ZadBxxPa5OEJmleXAk5MEEGVLn62zeWBzj6i513jELsgKX4n2pJnabH%2BJs%2FHfQZUUjs8tay3dF4kJTmqPl22SHJKTBxz6zBMkKRLGZOQOU7wHY23OuB7aBhJnb3LWPIaAUAjHrixC28J%2BShVK%2BcB74du9OuoLD562HnJq4h7tgSW1LBB6N7fUk3nLOJyAot8B%2BBScx%2FPkYStefY61xqFVAE%2B2KvPHIM674ywpmJxSk9dUEYouzVzl0TwV%2BoExx6rSDaQyRgPjqaFR4oDF1d24Ipv%2FwKVWGVKZTJQdvJha2y%2BFc4JN0jYjRtzSxDSAM1%2FhcG3vzUAjoudtlcWKRWksep7L28hiTjGpPXvY8Zrr99GlN2UJhlYHwQWCdQ7mq7SYOhJbVxXjbus3fUcWeg1gJF4C43wATCaRR1DPSvl%2FXxblKsoq2k4JcRp6NLIbGvkv8dgrP800ZaCiXQkoIHmqP0QItHOCFKzO0cTklnSL%2F1QJHlAAO1ay1miK67LVUgiJTrtGAnpg2msDnJMA%2FmRZWLGJAs0Id0%2BfHElFgT2CyPqc4XWlroGk60fgCYE%2F1b6wZt76%2BAq8o3bjDGn6DEBjqkAbVkOPIh2UqbtkWo6Cyowd%2BhCBSux2eNXXTrFLt4l%2BiwPKqbcpQm%2BBL30yCSHAeAJtEp2Y4L3cebc88TqXqRnbgjF0RFJsDZSVnmD2B7sA4y8EewIOJltRW3lImSP%2BNG2t%2FxySXucZv6j5Ex%2FG2eGQ9OtGxA5QlKlEf5zbBWeYRT69nkKVoQSdJBMg3gQVs%2B3RsMJmBbf0rmCxAJ0RZYBxtQlRrT&X-Amz-Signature=4e81ddf84c2796e69b1d2fabbceecfd4b95dccedaaa4c4d22d6c3f9e555233f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67NVXWJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD4bf7Y%2FNxsh%2F%2FJV7TZeyRhnVO4JGpjA3GVWVqnCG%2BdBAIhAOgFn%2BX7hCKaVHcUbY2Lv97lttZpu8ccOYjnLXOXGbTCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX2iNvqY2uMW6Ypbsq3AN3mQHKOOHF52GRGWLyaDAu%2FoUlsHEOrhJNLJ3Lx8HgNieq4ZadBxxPa5OEJmleXAk5MEEGVLn62zeWBzj6i513jELsgKX4n2pJnabH%2BJs%2FHfQZUUjs8tay3dF4kJTmqPl22SHJKTBxz6zBMkKRLGZOQOU7wHY23OuB7aBhJnb3LWPIaAUAjHrixC28J%2BShVK%2BcB74du9OuoLD562HnJq4h7tgSW1LBB6N7fUk3nLOJyAot8B%2BBScx%2FPkYStefY61xqFVAE%2B2KvPHIM674ywpmJxSk9dUEYouzVzl0TwV%2BoExx6rSDaQyRgPjqaFR4oDF1d24Ipv%2FwKVWGVKZTJQdvJha2y%2BFc4JN0jYjRtzSxDSAM1%2FhcG3vzUAjoudtlcWKRWksep7L28hiTjGpPXvY8Zrr99GlN2UJhlYHwQWCdQ7mq7SYOhJbVxXjbus3fUcWeg1gJF4C43wATCaRR1DPSvl%2FXxblKsoq2k4JcRp6NLIbGvkv8dgrP800ZaCiXQkoIHmqP0QItHOCFKzO0cTklnSL%2F1QJHlAAO1ay1miK67LVUgiJTrtGAnpg2msDnJMA%2FmRZWLGJAs0Id0%2BfHElFgT2CyPqc4XWlroGk60fgCYE%2F1b6wZt76%2BAq8o3bjDGn6DEBjqkAbVkOPIh2UqbtkWo6Cyowd%2BhCBSux2eNXXTrFLt4l%2BiwPKqbcpQm%2BBL30yCSHAeAJtEp2Y4L3cebc88TqXqRnbgjF0RFJsDZSVnmD2B7sA4y8EewIOJltRW3lImSP%2BNG2t%2FxySXucZv6j5Ex%2FG2eGQ9OtGxA5QlKlEf5zbBWeYRT69nkKVoQSdJBMg3gQVs%2B3RsMJmBbf0rmCxAJ0RZYBxtQlRrT&X-Amz-Signature=e074f1fb62ade51885f5ecae354126e606fa6201cba8a5f8e6470830422dfda3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67NVXWJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD4bf7Y%2FNxsh%2F%2FJV7TZeyRhnVO4JGpjA3GVWVqnCG%2BdBAIhAOgFn%2BX7hCKaVHcUbY2Lv97lttZpu8ccOYjnLXOXGbTCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX2iNvqY2uMW6Ypbsq3AN3mQHKOOHF52GRGWLyaDAu%2FoUlsHEOrhJNLJ3Lx8HgNieq4ZadBxxPa5OEJmleXAk5MEEGVLn62zeWBzj6i513jELsgKX4n2pJnabH%2BJs%2FHfQZUUjs8tay3dF4kJTmqPl22SHJKTBxz6zBMkKRLGZOQOU7wHY23OuB7aBhJnb3LWPIaAUAjHrixC28J%2BShVK%2BcB74du9OuoLD562HnJq4h7tgSW1LBB6N7fUk3nLOJyAot8B%2BBScx%2FPkYStefY61xqFVAE%2B2KvPHIM674ywpmJxSk9dUEYouzVzl0TwV%2BoExx6rSDaQyRgPjqaFR4oDF1d24Ipv%2FwKVWGVKZTJQdvJha2y%2BFc4JN0jYjRtzSxDSAM1%2FhcG3vzUAjoudtlcWKRWksep7L28hiTjGpPXvY8Zrr99GlN2UJhlYHwQWCdQ7mq7SYOhJbVxXjbus3fUcWeg1gJF4C43wATCaRR1DPSvl%2FXxblKsoq2k4JcRp6NLIbGvkv8dgrP800ZaCiXQkoIHmqP0QItHOCFKzO0cTklnSL%2F1QJHlAAO1ay1miK67LVUgiJTrtGAnpg2msDnJMA%2FmRZWLGJAs0Id0%2BfHElFgT2CyPqc4XWlroGk60fgCYE%2F1b6wZt76%2BAq8o3bjDGn6DEBjqkAbVkOPIh2UqbtkWo6Cyowd%2BhCBSux2eNXXTrFLt4l%2BiwPKqbcpQm%2BBL30yCSHAeAJtEp2Y4L3cebc88TqXqRnbgjF0RFJsDZSVnmD2B7sA4y8EewIOJltRW3lImSP%2BNG2t%2FxySXucZv6j5Ex%2FG2eGQ9OtGxA5QlKlEf5zbBWeYRT69nkKVoQSdJBMg3gQVs%2B3RsMJmBbf0rmCxAJ0RZYBxtQlRrT&X-Amz-Signature=81401af6883e8a86109ce15b379945d56aba66324a914771f8cc28ef735901c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
