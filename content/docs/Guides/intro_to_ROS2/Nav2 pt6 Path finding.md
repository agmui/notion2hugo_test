---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN66GGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVM9yGkw6Jmy%2BZwBRWlV0w71T3A%2FjBdB3u46o08Ih8XAiAht3T4GkhSfMY9IyoICMoiMX7AbPuoKZUJP%2FhpxFePaCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMmpumnVF4PuRRsFrzKtwDux%2BxDCADCCFxoqPu1kW%2BMuGKRnGm5%2F8jPp99VY2V2bAzC6AJRcE5W1uqoz1xsPDS0Ay%2FMNB3m%2F%2FappkjKuDPHKQV3pVtVUlCcOongSFOGmVHKveILrA1vf%2Bs0gl4pB9EJ6M6riYenOPWvTbMXJBOzff53ZXfI%2BVz5UZSZT3xZOIZLH3tUlrmn%2Bp5Kz9FGYghlSZ5xKz4Ir7Oa76MD50ZIndR%2FXi0LzBOYC4%2BcCbEvRnARn2byENLF9V%2BF32PAz1QvaLvuEjV63%2BueUbwtqlBXOzBaRfwR6PJ0a%2B%2FCIdDfHBMLmPNuagkA2RPKAoRasUqXwlUmIn%2FMNihU5by%2F7HQTbED7%2BT9Un15Lv67BvEKbSvCFk0nGsEVKlPftNYGE0XkRdvKghxOa2RSQ6hI7exkE7gFg3EkZA%2BkCos5Lp3QiPCTQujH5gJFinKjqMWD5Z8SosAUp250m65q31llpmWVLxOBm7jbykOF94u8gutlGF%2FiDCT0AFGnJzz5j%2FlEZLBib1kOR7tXamIL55O3euDhRFQqTRzjciUepNtAI5bpFM2yURls9gDwAzQwbgpHXYq5LGVbkYrJNIKAI3h10a687spvVUGufrXCRqoJnHoAqBP8y8vlkft6oDTaAMIwxJ67xAY6pgH16VXOXEm%2FbYMRjhcAAxQKMObNj%2FMTH6HZWdAYaRDWW8ggMdzQ50M3t%2BMOW594v1A%2BVuf5JUMCjZuO56s910RbGAwaSdTlFS9Fx%2FLSIvYziVNWpChNMpzcjuv2gorXlAIxwjHBNFJdUQcp%2FCm0K8uOlph0TtsiDJz5CU%2F9Wyplc2pkUAmZ6RiCMlaqjRqbRuWqKgXQEzQ7CPncS2QmHdaXCSOgWbZb&X-Amz-Signature=03c9f987591668436ea3c374323252c9ff84d7ec20a9654e755f3e1ea8819e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

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

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN66GGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVM9yGkw6Jmy%2BZwBRWlV0w71T3A%2FjBdB3u46o08Ih8XAiAht3T4GkhSfMY9IyoICMoiMX7AbPuoKZUJP%2FhpxFePaCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMmpumnVF4PuRRsFrzKtwDux%2BxDCADCCFxoqPu1kW%2BMuGKRnGm5%2F8jPp99VY2V2bAzC6AJRcE5W1uqoz1xsPDS0Ay%2FMNB3m%2F%2FappkjKuDPHKQV3pVtVUlCcOongSFOGmVHKveILrA1vf%2Bs0gl4pB9EJ6M6riYenOPWvTbMXJBOzff53ZXfI%2BVz5UZSZT3xZOIZLH3tUlrmn%2Bp5Kz9FGYghlSZ5xKz4Ir7Oa76MD50ZIndR%2FXi0LzBOYC4%2BcCbEvRnARn2byENLF9V%2BF32PAz1QvaLvuEjV63%2BueUbwtqlBXOzBaRfwR6PJ0a%2B%2FCIdDfHBMLmPNuagkA2RPKAoRasUqXwlUmIn%2FMNihU5by%2F7HQTbED7%2BT9Un15Lv67BvEKbSvCFk0nGsEVKlPftNYGE0XkRdvKghxOa2RSQ6hI7exkE7gFg3EkZA%2BkCos5Lp3QiPCTQujH5gJFinKjqMWD5Z8SosAUp250m65q31llpmWVLxOBm7jbykOF94u8gutlGF%2FiDCT0AFGnJzz5j%2FlEZLBib1kOR7tXamIL55O3euDhRFQqTRzjciUepNtAI5bpFM2yURls9gDwAzQwbgpHXYq5LGVbkYrJNIKAI3h10a687spvVUGufrXCRqoJnHoAqBP8y8vlkft6oDTaAMIwxJ67xAY6pgH16VXOXEm%2FbYMRjhcAAxQKMObNj%2FMTH6HZWdAYaRDWW8ggMdzQ50M3t%2BMOW594v1A%2BVuf5JUMCjZuO56s910RbGAwaSdTlFS9Fx%2FLSIvYziVNWpChNMpzcjuv2gorXlAIxwjHBNFJdUQcp%2FCm0K8uOlph0TtsiDJz5CU%2F9Wyplc2pkUAmZ6RiCMlaqjRqbRuWqKgXQEzQ7CPncS2QmHdaXCSOgWbZb&X-Amz-Signature=15528263b37c06612ceda1adfdea4b6a9aeb883f998e4078b783c50c0a19db40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN66GGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVM9yGkw6Jmy%2BZwBRWlV0w71T3A%2FjBdB3u46o08Ih8XAiAht3T4GkhSfMY9IyoICMoiMX7AbPuoKZUJP%2FhpxFePaCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMmpumnVF4PuRRsFrzKtwDux%2BxDCADCCFxoqPu1kW%2BMuGKRnGm5%2F8jPp99VY2V2bAzC6AJRcE5W1uqoz1xsPDS0Ay%2FMNB3m%2F%2FappkjKuDPHKQV3pVtVUlCcOongSFOGmVHKveILrA1vf%2Bs0gl4pB9EJ6M6riYenOPWvTbMXJBOzff53ZXfI%2BVz5UZSZT3xZOIZLH3tUlrmn%2Bp5Kz9FGYghlSZ5xKz4Ir7Oa76MD50ZIndR%2FXi0LzBOYC4%2BcCbEvRnARn2byENLF9V%2BF32PAz1QvaLvuEjV63%2BueUbwtqlBXOzBaRfwR6PJ0a%2B%2FCIdDfHBMLmPNuagkA2RPKAoRasUqXwlUmIn%2FMNihU5by%2F7HQTbED7%2BT9Un15Lv67BvEKbSvCFk0nGsEVKlPftNYGE0XkRdvKghxOa2RSQ6hI7exkE7gFg3EkZA%2BkCos5Lp3QiPCTQujH5gJFinKjqMWD5Z8SosAUp250m65q31llpmWVLxOBm7jbykOF94u8gutlGF%2FiDCT0AFGnJzz5j%2FlEZLBib1kOR7tXamIL55O3euDhRFQqTRzjciUepNtAI5bpFM2yURls9gDwAzQwbgpHXYq5LGVbkYrJNIKAI3h10a687spvVUGufrXCRqoJnHoAqBP8y8vlkft6oDTaAMIwxJ67xAY6pgH16VXOXEm%2FbYMRjhcAAxQKMObNj%2FMTH6HZWdAYaRDWW8ggMdzQ50M3t%2BMOW594v1A%2BVuf5JUMCjZuO56s910RbGAwaSdTlFS9Fx%2FLSIvYziVNWpChNMpzcjuv2gorXlAIxwjHBNFJdUQcp%2FCm0K8uOlph0TtsiDJz5CU%2F9Wyplc2pkUAmZ6RiCMlaqjRqbRuWqKgXQEzQ7CPncS2QmHdaXCSOgWbZb&X-Amz-Signature=89ba8e287318a6942aba2fc5ac175e9d7a4fc155aa58063528f08adb0b261ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN66GGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVM9yGkw6Jmy%2BZwBRWlV0w71T3A%2FjBdB3u46o08Ih8XAiAht3T4GkhSfMY9IyoICMoiMX7AbPuoKZUJP%2FhpxFePaCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMmpumnVF4PuRRsFrzKtwDux%2BxDCADCCFxoqPu1kW%2BMuGKRnGm5%2F8jPp99VY2V2bAzC6AJRcE5W1uqoz1xsPDS0Ay%2FMNB3m%2F%2FappkjKuDPHKQV3pVtVUlCcOongSFOGmVHKveILrA1vf%2Bs0gl4pB9EJ6M6riYenOPWvTbMXJBOzff53ZXfI%2BVz5UZSZT3xZOIZLH3tUlrmn%2Bp5Kz9FGYghlSZ5xKz4Ir7Oa76MD50ZIndR%2FXi0LzBOYC4%2BcCbEvRnARn2byENLF9V%2BF32PAz1QvaLvuEjV63%2BueUbwtqlBXOzBaRfwR6PJ0a%2B%2FCIdDfHBMLmPNuagkA2RPKAoRasUqXwlUmIn%2FMNihU5by%2F7HQTbED7%2BT9Un15Lv67BvEKbSvCFk0nGsEVKlPftNYGE0XkRdvKghxOa2RSQ6hI7exkE7gFg3EkZA%2BkCos5Lp3QiPCTQujH5gJFinKjqMWD5Z8SosAUp250m65q31llpmWVLxOBm7jbykOF94u8gutlGF%2FiDCT0AFGnJzz5j%2FlEZLBib1kOR7tXamIL55O3euDhRFQqTRzjciUepNtAI5bpFM2yURls9gDwAzQwbgpHXYq5LGVbkYrJNIKAI3h10a687spvVUGufrXCRqoJnHoAqBP8y8vlkft6oDTaAMIwxJ67xAY6pgH16VXOXEm%2FbYMRjhcAAxQKMObNj%2FMTH6HZWdAYaRDWW8ggMdzQ50M3t%2BMOW594v1A%2BVuf5JUMCjZuO56s910RbGAwaSdTlFS9Fx%2FLSIvYziVNWpChNMpzcjuv2gorXlAIxwjHBNFJdUQcp%2FCm0K8uOlph0TtsiDJz5CU%2F9Wyplc2pkUAmZ6RiCMlaqjRqbRuWqKgXQEzQ7CPncS2QmHdaXCSOgWbZb&X-Amz-Signature=79accd1b38f4d8924dbf4b1ad87db3f1fd2aa43f70f3336313529be4abb8fec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN66GGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVM9yGkw6Jmy%2BZwBRWlV0w71T3A%2FjBdB3u46o08Ih8XAiAht3T4GkhSfMY9IyoICMoiMX7AbPuoKZUJP%2FhpxFePaCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMmpumnVF4PuRRsFrzKtwDux%2BxDCADCCFxoqPu1kW%2BMuGKRnGm5%2F8jPp99VY2V2bAzC6AJRcE5W1uqoz1xsPDS0Ay%2FMNB3m%2F%2FappkjKuDPHKQV3pVtVUlCcOongSFOGmVHKveILrA1vf%2Bs0gl4pB9EJ6M6riYenOPWvTbMXJBOzff53ZXfI%2BVz5UZSZT3xZOIZLH3tUlrmn%2Bp5Kz9FGYghlSZ5xKz4Ir7Oa76MD50ZIndR%2FXi0LzBOYC4%2BcCbEvRnARn2byENLF9V%2BF32PAz1QvaLvuEjV63%2BueUbwtqlBXOzBaRfwR6PJ0a%2B%2FCIdDfHBMLmPNuagkA2RPKAoRasUqXwlUmIn%2FMNihU5by%2F7HQTbED7%2BT9Un15Lv67BvEKbSvCFk0nGsEVKlPftNYGE0XkRdvKghxOa2RSQ6hI7exkE7gFg3EkZA%2BkCos5Lp3QiPCTQujH5gJFinKjqMWD5Z8SosAUp250m65q31llpmWVLxOBm7jbykOF94u8gutlGF%2FiDCT0AFGnJzz5j%2FlEZLBib1kOR7tXamIL55O3euDhRFQqTRzjciUepNtAI5bpFM2yURls9gDwAzQwbgpHXYq5LGVbkYrJNIKAI3h10a687spvVUGufrXCRqoJnHoAqBP8y8vlkft6oDTaAMIwxJ67xAY6pgH16VXOXEm%2FbYMRjhcAAxQKMObNj%2FMTH6HZWdAYaRDWW8ggMdzQ50M3t%2BMOW594v1A%2BVuf5JUMCjZuO56s910RbGAwaSdTlFS9Fx%2FLSIvYziVNWpChNMpzcjuv2gorXlAIxwjHBNFJdUQcp%2FCm0K8uOlph0TtsiDJz5CU%2F9Wyplc2pkUAmZ6RiCMlaqjRqbRuWqKgXQEzQ7CPncS2QmHdaXCSOgWbZb&X-Amz-Signature=d6f34f84f0f85574c50c3d10cf266b0dfb330beaf6c972e17163fc3133bc801c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN66GGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVM9yGkw6Jmy%2BZwBRWlV0w71T3A%2FjBdB3u46o08Ih8XAiAht3T4GkhSfMY9IyoICMoiMX7AbPuoKZUJP%2FhpxFePaCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMmpumnVF4PuRRsFrzKtwDux%2BxDCADCCFxoqPu1kW%2BMuGKRnGm5%2F8jPp99VY2V2bAzC6AJRcE5W1uqoz1xsPDS0Ay%2FMNB3m%2F%2FappkjKuDPHKQV3pVtVUlCcOongSFOGmVHKveILrA1vf%2Bs0gl4pB9EJ6M6riYenOPWvTbMXJBOzff53ZXfI%2BVz5UZSZT3xZOIZLH3tUlrmn%2Bp5Kz9FGYghlSZ5xKz4Ir7Oa76MD50ZIndR%2FXi0LzBOYC4%2BcCbEvRnARn2byENLF9V%2BF32PAz1QvaLvuEjV63%2BueUbwtqlBXOzBaRfwR6PJ0a%2B%2FCIdDfHBMLmPNuagkA2RPKAoRasUqXwlUmIn%2FMNihU5by%2F7HQTbED7%2BT9Un15Lv67BvEKbSvCFk0nGsEVKlPftNYGE0XkRdvKghxOa2RSQ6hI7exkE7gFg3EkZA%2BkCos5Lp3QiPCTQujH5gJFinKjqMWD5Z8SosAUp250m65q31llpmWVLxOBm7jbykOF94u8gutlGF%2FiDCT0AFGnJzz5j%2FlEZLBib1kOR7tXamIL55O3euDhRFQqTRzjciUepNtAI5bpFM2yURls9gDwAzQwbgpHXYq5LGVbkYrJNIKAI3h10a687spvVUGufrXCRqoJnHoAqBP8y8vlkft6oDTaAMIwxJ67xAY6pgH16VXOXEm%2FbYMRjhcAAxQKMObNj%2FMTH6HZWdAYaRDWW8ggMdzQ50M3t%2BMOW594v1A%2BVuf5JUMCjZuO56s910RbGAwaSdTlFS9Fx%2FLSIvYziVNWpChNMpzcjuv2gorXlAIxwjHBNFJdUQcp%2FCm0K8uOlph0TtsiDJz5CU%2F9Wyplc2pkUAmZ6RiCMlaqjRqbRuWqKgXQEzQ7CPncS2QmHdaXCSOgWbZb&X-Amz-Signature=3d295a61ff31b499734f68a7e667b72fdc3a108ad95988d7dda4c7876ee9075d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN66GGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVM9yGkw6Jmy%2BZwBRWlV0w71T3A%2FjBdB3u46o08Ih8XAiAht3T4GkhSfMY9IyoICMoiMX7AbPuoKZUJP%2FhpxFePaCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMmpumnVF4PuRRsFrzKtwDux%2BxDCADCCFxoqPu1kW%2BMuGKRnGm5%2F8jPp99VY2V2bAzC6AJRcE5W1uqoz1xsPDS0Ay%2FMNB3m%2F%2FappkjKuDPHKQV3pVtVUlCcOongSFOGmVHKveILrA1vf%2Bs0gl4pB9EJ6M6riYenOPWvTbMXJBOzff53ZXfI%2BVz5UZSZT3xZOIZLH3tUlrmn%2Bp5Kz9FGYghlSZ5xKz4Ir7Oa76MD50ZIndR%2FXi0LzBOYC4%2BcCbEvRnARn2byENLF9V%2BF32PAz1QvaLvuEjV63%2BueUbwtqlBXOzBaRfwR6PJ0a%2B%2FCIdDfHBMLmPNuagkA2RPKAoRasUqXwlUmIn%2FMNihU5by%2F7HQTbED7%2BT9Un15Lv67BvEKbSvCFk0nGsEVKlPftNYGE0XkRdvKghxOa2RSQ6hI7exkE7gFg3EkZA%2BkCos5Lp3QiPCTQujH5gJFinKjqMWD5Z8SosAUp250m65q31llpmWVLxOBm7jbykOF94u8gutlGF%2FiDCT0AFGnJzz5j%2FlEZLBib1kOR7tXamIL55O3euDhRFQqTRzjciUepNtAI5bpFM2yURls9gDwAzQwbgpHXYq5LGVbkYrJNIKAI3h10a687spvVUGufrXCRqoJnHoAqBP8y8vlkft6oDTaAMIwxJ67xAY6pgH16VXOXEm%2FbYMRjhcAAxQKMObNj%2FMTH6HZWdAYaRDWW8ggMdzQ50M3t%2BMOW594v1A%2BVuf5JUMCjZuO56s910RbGAwaSdTlFS9Fx%2FLSIvYziVNWpChNMpzcjuv2gorXlAIxwjHBNFJdUQcp%2FCm0K8uOlph0TtsiDJz5CU%2F9Wyplc2pkUAmZ6RiCMlaqjRqbRuWqKgXQEzQ7CPncS2QmHdaXCSOgWbZb&X-Amz-Signature=2577bb97e9959c54a13a389af7b6f978122134e10bc44d5dc085ee5bfe1c3e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN66GGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVM9yGkw6Jmy%2BZwBRWlV0w71T3A%2FjBdB3u46o08Ih8XAiAht3T4GkhSfMY9IyoICMoiMX7AbPuoKZUJP%2FhpxFePaCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMmpumnVF4PuRRsFrzKtwDux%2BxDCADCCFxoqPu1kW%2BMuGKRnGm5%2F8jPp99VY2V2bAzC6AJRcE5W1uqoz1xsPDS0Ay%2FMNB3m%2F%2FappkjKuDPHKQV3pVtVUlCcOongSFOGmVHKveILrA1vf%2Bs0gl4pB9EJ6M6riYenOPWvTbMXJBOzff53ZXfI%2BVz5UZSZT3xZOIZLH3tUlrmn%2Bp5Kz9FGYghlSZ5xKz4Ir7Oa76MD50ZIndR%2FXi0LzBOYC4%2BcCbEvRnARn2byENLF9V%2BF32PAz1QvaLvuEjV63%2BueUbwtqlBXOzBaRfwR6PJ0a%2B%2FCIdDfHBMLmPNuagkA2RPKAoRasUqXwlUmIn%2FMNihU5by%2F7HQTbED7%2BT9Un15Lv67BvEKbSvCFk0nGsEVKlPftNYGE0XkRdvKghxOa2RSQ6hI7exkE7gFg3EkZA%2BkCos5Lp3QiPCTQujH5gJFinKjqMWD5Z8SosAUp250m65q31llpmWVLxOBm7jbykOF94u8gutlGF%2FiDCT0AFGnJzz5j%2FlEZLBib1kOR7tXamIL55O3euDhRFQqTRzjciUepNtAI5bpFM2yURls9gDwAzQwbgpHXYq5LGVbkYrJNIKAI3h10a687spvVUGufrXCRqoJnHoAqBP8y8vlkft6oDTaAMIwxJ67xAY6pgH16VXOXEm%2FbYMRjhcAAxQKMObNj%2FMTH6HZWdAYaRDWW8ggMdzQ50M3t%2BMOW594v1A%2BVuf5JUMCjZuO56s910RbGAwaSdTlFS9Fx%2FLSIvYziVNWpChNMpzcjuv2gorXlAIxwjHBNFJdUQcp%2FCm0K8uOlph0TtsiDJz5CU%2F9Wyplc2pkUAmZ6RiCMlaqjRqbRuWqKgXQEzQ7CPncS2QmHdaXCSOgWbZb&X-Amz-Signature=dc10c64265e729f3547bc6004787e37ec80e47886c7fbbde5ae67b22e1a52ccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN66GGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVM9yGkw6Jmy%2BZwBRWlV0w71T3A%2FjBdB3u46o08Ih8XAiAht3T4GkhSfMY9IyoICMoiMX7AbPuoKZUJP%2FhpxFePaCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMmpumnVF4PuRRsFrzKtwDux%2BxDCADCCFxoqPu1kW%2BMuGKRnGm5%2F8jPp99VY2V2bAzC6AJRcE5W1uqoz1xsPDS0Ay%2FMNB3m%2F%2FappkjKuDPHKQV3pVtVUlCcOongSFOGmVHKveILrA1vf%2Bs0gl4pB9EJ6M6riYenOPWvTbMXJBOzff53ZXfI%2BVz5UZSZT3xZOIZLH3tUlrmn%2Bp5Kz9FGYghlSZ5xKz4Ir7Oa76MD50ZIndR%2FXi0LzBOYC4%2BcCbEvRnARn2byENLF9V%2BF32PAz1QvaLvuEjV63%2BueUbwtqlBXOzBaRfwR6PJ0a%2B%2FCIdDfHBMLmPNuagkA2RPKAoRasUqXwlUmIn%2FMNihU5by%2F7HQTbED7%2BT9Un15Lv67BvEKbSvCFk0nGsEVKlPftNYGE0XkRdvKghxOa2RSQ6hI7exkE7gFg3EkZA%2BkCos5Lp3QiPCTQujH5gJFinKjqMWD5Z8SosAUp250m65q31llpmWVLxOBm7jbykOF94u8gutlGF%2FiDCT0AFGnJzz5j%2FlEZLBib1kOR7tXamIL55O3euDhRFQqTRzjciUepNtAI5bpFM2yURls9gDwAzQwbgpHXYq5LGVbkYrJNIKAI3h10a687spvVUGufrXCRqoJnHoAqBP8y8vlkft6oDTaAMIwxJ67xAY6pgH16VXOXEm%2FbYMRjhcAAxQKMObNj%2FMTH6HZWdAYaRDWW8ggMdzQ50M3t%2BMOW594v1A%2BVuf5JUMCjZuO56s910RbGAwaSdTlFS9Fx%2FLSIvYziVNWpChNMpzcjuv2gorXlAIxwjHBNFJdUQcp%2FCm0K8uOlph0TtsiDJz5CU%2F9Wyplc2pkUAmZ6RiCMlaqjRqbRuWqKgXQEzQ7CPncS2QmHdaXCSOgWbZb&X-Amz-Signature=e1affe45097ad27d385de4e857a3ced0a4661288a0e68b66cf8895d7574c21c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN66GGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVM9yGkw6Jmy%2BZwBRWlV0w71T3A%2FjBdB3u46o08Ih8XAiAht3T4GkhSfMY9IyoICMoiMX7AbPuoKZUJP%2FhpxFePaCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMmpumnVF4PuRRsFrzKtwDux%2BxDCADCCFxoqPu1kW%2BMuGKRnGm5%2F8jPp99VY2V2bAzC6AJRcE5W1uqoz1xsPDS0Ay%2FMNB3m%2F%2FappkjKuDPHKQV3pVtVUlCcOongSFOGmVHKveILrA1vf%2Bs0gl4pB9EJ6M6riYenOPWvTbMXJBOzff53ZXfI%2BVz5UZSZT3xZOIZLH3tUlrmn%2Bp5Kz9FGYghlSZ5xKz4Ir7Oa76MD50ZIndR%2FXi0LzBOYC4%2BcCbEvRnARn2byENLF9V%2BF32PAz1QvaLvuEjV63%2BueUbwtqlBXOzBaRfwR6PJ0a%2B%2FCIdDfHBMLmPNuagkA2RPKAoRasUqXwlUmIn%2FMNihU5by%2F7HQTbED7%2BT9Un15Lv67BvEKbSvCFk0nGsEVKlPftNYGE0XkRdvKghxOa2RSQ6hI7exkE7gFg3EkZA%2BkCos5Lp3QiPCTQujH5gJFinKjqMWD5Z8SosAUp250m65q31llpmWVLxOBm7jbykOF94u8gutlGF%2FiDCT0AFGnJzz5j%2FlEZLBib1kOR7tXamIL55O3euDhRFQqTRzjciUepNtAI5bpFM2yURls9gDwAzQwbgpHXYq5LGVbkYrJNIKAI3h10a687spvVUGufrXCRqoJnHoAqBP8y8vlkft6oDTaAMIwxJ67xAY6pgH16VXOXEm%2FbYMRjhcAAxQKMObNj%2FMTH6HZWdAYaRDWW8ggMdzQ50M3t%2BMOW594v1A%2BVuf5JUMCjZuO56s910RbGAwaSdTlFS9Fx%2FLSIvYziVNWpChNMpzcjuv2gorXlAIxwjHBNFJdUQcp%2FCm0K8uOlph0TtsiDJz5CU%2F9Wyplc2pkUAmZ6RiCMlaqjRqbRuWqKgXQEzQ7CPncS2QmHdaXCSOgWbZb&X-Amz-Signature=afb9e2e7503271d0d919b9369ff966b4f725a8ca88f4910c304bd1a320604e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN66GGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVM9yGkw6Jmy%2BZwBRWlV0w71T3A%2FjBdB3u46o08Ih8XAiAht3T4GkhSfMY9IyoICMoiMX7AbPuoKZUJP%2FhpxFePaCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMmpumnVF4PuRRsFrzKtwDux%2BxDCADCCFxoqPu1kW%2BMuGKRnGm5%2F8jPp99VY2V2bAzC6AJRcE5W1uqoz1xsPDS0Ay%2FMNB3m%2F%2FappkjKuDPHKQV3pVtVUlCcOongSFOGmVHKveILrA1vf%2Bs0gl4pB9EJ6M6riYenOPWvTbMXJBOzff53ZXfI%2BVz5UZSZT3xZOIZLH3tUlrmn%2Bp5Kz9FGYghlSZ5xKz4Ir7Oa76MD50ZIndR%2FXi0LzBOYC4%2BcCbEvRnARn2byENLF9V%2BF32PAz1QvaLvuEjV63%2BueUbwtqlBXOzBaRfwR6PJ0a%2B%2FCIdDfHBMLmPNuagkA2RPKAoRasUqXwlUmIn%2FMNihU5by%2F7HQTbED7%2BT9Un15Lv67BvEKbSvCFk0nGsEVKlPftNYGE0XkRdvKghxOa2RSQ6hI7exkE7gFg3EkZA%2BkCos5Lp3QiPCTQujH5gJFinKjqMWD5Z8SosAUp250m65q31llpmWVLxOBm7jbykOF94u8gutlGF%2FiDCT0AFGnJzz5j%2FlEZLBib1kOR7tXamIL55O3euDhRFQqTRzjciUepNtAI5bpFM2yURls9gDwAzQwbgpHXYq5LGVbkYrJNIKAI3h10a687spvVUGufrXCRqoJnHoAqBP8y8vlkft6oDTaAMIwxJ67xAY6pgH16VXOXEm%2FbYMRjhcAAxQKMObNj%2FMTH6HZWdAYaRDWW8ggMdzQ50M3t%2BMOW594v1A%2BVuf5JUMCjZuO56s910RbGAwaSdTlFS9Fx%2FLSIvYziVNWpChNMpzcjuv2gorXlAIxwjHBNFJdUQcp%2FCm0K8uOlph0TtsiDJz5CU%2F9Wyplc2pkUAmZ6RiCMlaqjRqbRuWqKgXQEzQ7CPncS2QmHdaXCSOgWbZb&X-Amz-Signature=877d4417e32fb31538df06d55e377e439cab56a73fe26514b5bab5ae8849588c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN66GGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVM9yGkw6Jmy%2BZwBRWlV0w71T3A%2FjBdB3u46o08Ih8XAiAht3T4GkhSfMY9IyoICMoiMX7AbPuoKZUJP%2FhpxFePaCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMmpumnVF4PuRRsFrzKtwDux%2BxDCADCCFxoqPu1kW%2BMuGKRnGm5%2F8jPp99VY2V2bAzC6AJRcE5W1uqoz1xsPDS0Ay%2FMNB3m%2F%2FappkjKuDPHKQV3pVtVUlCcOongSFOGmVHKveILrA1vf%2Bs0gl4pB9EJ6M6riYenOPWvTbMXJBOzff53ZXfI%2BVz5UZSZT3xZOIZLH3tUlrmn%2Bp5Kz9FGYghlSZ5xKz4Ir7Oa76MD50ZIndR%2FXi0LzBOYC4%2BcCbEvRnARn2byENLF9V%2BF32PAz1QvaLvuEjV63%2BueUbwtqlBXOzBaRfwR6PJ0a%2B%2FCIdDfHBMLmPNuagkA2RPKAoRasUqXwlUmIn%2FMNihU5by%2F7HQTbED7%2BT9Un15Lv67BvEKbSvCFk0nGsEVKlPftNYGE0XkRdvKghxOa2RSQ6hI7exkE7gFg3EkZA%2BkCos5Lp3QiPCTQujH5gJFinKjqMWD5Z8SosAUp250m65q31llpmWVLxOBm7jbykOF94u8gutlGF%2FiDCT0AFGnJzz5j%2FlEZLBib1kOR7tXamIL55O3euDhRFQqTRzjciUepNtAI5bpFM2yURls9gDwAzQwbgpHXYq5LGVbkYrJNIKAI3h10a687spvVUGufrXCRqoJnHoAqBP8y8vlkft6oDTaAMIwxJ67xAY6pgH16VXOXEm%2FbYMRjhcAAxQKMObNj%2FMTH6HZWdAYaRDWW8ggMdzQ50M3t%2BMOW594v1A%2BVuf5JUMCjZuO56s910RbGAwaSdTlFS9Fx%2FLSIvYziVNWpChNMpzcjuv2gorXlAIxwjHBNFJdUQcp%2FCm0K8uOlph0TtsiDJz5CU%2F9Wyplc2pkUAmZ6RiCMlaqjRqbRuWqKgXQEzQ7CPncS2QmHdaXCSOgWbZb&X-Amz-Signature=692cf07a46ca9dd8035286237a679be856fb683de2b972ea554d85c7aa03f5a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN66GGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVM9yGkw6Jmy%2BZwBRWlV0w71T3A%2FjBdB3u46o08Ih8XAiAht3T4GkhSfMY9IyoICMoiMX7AbPuoKZUJP%2FhpxFePaCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMmpumnVF4PuRRsFrzKtwDux%2BxDCADCCFxoqPu1kW%2BMuGKRnGm5%2F8jPp99VY2V2bAzC6AJRcE5W1uqoz1xsPDS0Ay%2FMNB3m%2F%2FappkjKuDPHKQV3pVtVUlCcOongSFOGmVHKveILrA1vf%2Bs0gl4pB9EJ6M6riYenOPWvTbMXJBOzff53ZXfI%2BVz5UZSZT3xZOIZLH3tUlrmn%2Bp5Kz9FGYghlSZ5xKz4Ir7Oa76MD50ZIndR%2FXi0LzBOYC4%2BcCbEvRnARn2byENLF9V%2BF32PAz1QvaLvuEjV63%2BueUbwtqlBXOzBaRfwR6PJ0a%2B%2FCIdDfHBMLmPNuagkA2RPKAoRasUqXwlUmIn%2FMNihU5by%2F7HQTbED7%2BT9Un15Lv67BvEKbSvCFk0nGsEVKlPftNYGE0XkRdvKghxOa2RSQ6hI7exkE7gFg3EkZA%2BkCos5Lp3QiPCTQujH5gJFinKjqMWD5Z8SosAUp250m65q31llpmWVLxOBm7jbykOF94u8gutlGF%2FiDCT0AFGnJzz5j%2FlEZLBib1kOR7tXamIL55O3euDhRFQqTRzjciUepNtAI5bpFM2yURls9gDwAzQwbgpHXYq5LGVbkYrJNIKAI3h10a687spvVUGufrXCRqoJnHoAqBP8y8vlkft6oDTaAMIwxJ67xAY6pgH16VXOXEm%2FbYMRjhcAAxQKMObNj%2FMTH6HZWdAYaRDWW8ggMdzQ50M3t%2BMOW594v1A%2BVuf5JUMCjZuO56s910RbGAwaSdTlFS9Fx%2FLSIvYziVNWpChNMpzcjuv2gorXlAIxwjHBNFJdUQcp%2FCm0K8uOlph0TtsiDJz5CU%2F9Wyplc2pkUAmZ6RiCMlaqjRqbRuWqKgXQEzQ7CPncS2QmHdaXCSOgWbZb&X-Amz-Signature=9bc16dfe44cde6c29c24894bd8fdca2649601a27ece7d0f3ad5b71bb8ba8598a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

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
                    'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

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

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
