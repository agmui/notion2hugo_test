---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFBHQNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAz%2B8eehky%2BF3dIAoC0MOwJz4oZFd7QqBV0eT%2FL0JXeAiAvWlkOD84DQ9CsD6oNQPo%2F6U7azhjCdMaAu%2FiZWJZGySqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyB0KsnNybyW4E0yyKtwDQ51IqXSm9Rw6ogPqOtaXDhD%2BT9dUnx0fLTluSV%2BNvd%2Bm8FEXaoF3OQdVALdLUfcdVeKrJTtuo%2BZIlI7AiX0Ju0qjeFARln0BhQChM3GNtXI9ditYxtQO79uzkXwPNSEp%2FbqDin4ugTl%2FHVfTABQ7ckeAH%2FDqF8SxVB3AUgEjxCMLsS1bsi8gynLGElbqQyO5mLiIEO28txG5i0AGPLmEP%2F66%2BMJNKvOHUTjIszXiH5Siw58RYaEIxIwSUFvxydfIWHhMBGqBKWNi3jf1YcsWnnjsX%2FL4TsFHDurVERvZ7loUDq6%2BoDJ7bqynmVSmITfcc5NV5Qnh%2FtHQBWkvNNg6fW9pJ%2BOK%2B%2FOgix%2FmqLYhPkXVWKARPaaW0hpbXrbqY4sZWO%2FHdxdTOmoWi6VJqTPgdxdXTjMJKJOyO2CiXR3gxMLNaNaKun3dZwwQkmMmi4EVXut1VKmA6fXmLgMJeURfJh6RExyA74UZy7HQyF2u3vRy1NSr3xhaV5daFAyE1DFy%2FLfpwRAdA6ps%2B%2FYOv5qi2xoRVVNqzpmyezOfIc8auwJFW%2BvCDI9mGj9s%2BH3KTrZm6kk3lyflScSCIOWIdiEy7aVU4S4K%2FHQBQ8UUlGo%2FZE%2Btnq2BcNKmW1avMV0wke60xAY6pgEJXZk5MHG5mHzZwhxuu6F%2Fr%2FP0Fjf4wy6jYFUgSecn0FfEUtvSF41f9onLwaa8dDrvGcs0nhZVpfWRdnxLgFX5L7fCRuSkxEPSNuG8T4ozU%2FNA%2FyoQRbzbpIwxECJuENwrA2S29UhHxO%2FQVUA%2FecM1sRcY0VSeYypm4E1zgN0oR2TaN7o4QkVmfT04Xk4NtlB5xHxlspywuIDP3an7sDY%2Bl4KmEG3V&X-Amz-Signature=91fe40144ed844dcb1c420aa709f7b2a0fb6a836cb2767b05e81331a42bb861f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFBHQNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAz%2B8eehky%2BF3dIAoC0MOwJz4oZFd7QqBV0eT%2FL0JXeAiAvWlkOD84DQ9CsD6oNQPo%2F6U7azhjCdMaAu%2FiZWJZGySqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyB0KsnNybyW4E0yyKtwDQ51IqXSm9Rw6ogPqOtaXDhD%2BT9dUnx0fLTluSV%2BNvd%2Bm8FEXaoF3OQdVALdLUfcdVeKrJTtuo%2BZIlI7AiX0Ju0qjeFARln0BhQChM3GNtXI9ditYxtQO79uzkXwPNSEp%2FbqDin4ugTl%2FHVfTABQ7ckeAH%2FDqF8SxVB3AUgEjxCMLsS1bsi8gynLGElbqQyO5mLiIEO28txG5i0AGPLmEP%2F66%2BMJNKvOHUTjIszXiH5Siw58RYaEIxIwSUFvxydfIWHhMBGqBKWNi3jf1YcsWnnjsX%2FL4TsFHDurVERvZ7loUDq6%2BoDJ7bqynmVSmITfcc5NV5Qnh%2FtHQBWkvNNg6fW9pJ%2BOK%2B%2FOgix%2FmqLYhPkXVWKARPaaW0hpbXrbqY4sZWO%2FHdxdTOmoWi6VJqTPgdxdXTjMJKJOyO2CiXR3gxMLNaNaKun3dZwwQkmMmi4EVXut1VKmA6fXmLgMJeURfJh6RExyA74UZy7HQyF2u3vRy1NSr3xhaV5daFAyE1DFy%2FLfpwRAdA6ps%2B%2FYOv5qi2xoRVVNqzpmyezOfIc8auwJFW%2BvCDI9mGj9s%2BH3KTrZm6kk3lyflScSCIOWIdiEy7aVU4S4K%2FHQBQ8UUlGo%2FZE%2Btnq2BcNKmW1avMV0wke60xAY6pgEJXZk5MHG5mHzZwhxuu6F%2Fr%2FP0Fjf4wy6jYFUgSecn0FfEUtvSF41f9onLwaa8dDrvGcs0nhZVpfWRdnxLgFX5L7fCRuSkxEPSNuG8T4ozU%2FNA%2FyoQRbzbpIwxECJuENwrA2S29UhHxO%2FQVUA%2FecM1sRcY0VSeYypm4E1zgN0oR2TaN7o4QkVmfT04Xk4NtlB5xHxlspywuIDP3an7sDY%2Bl4KmEG3V&X-Amz-Signature=c7f1cc5880ee61027b2fe6a4efc4aaf1f270f96046c0f04d1bcd8577767b94c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFBHQNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAz%2B8eehky%2BF3dIAoC0MOwJz4oZFd7QqBV0eT%2FL0JXeAiAvWlkOD84DQ9CsD6oNQPo%2F6U7azhjCdMaAu%2FiZWJZGySqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyB0KsnNybyW4E0yyKtwDQ51IqXSm9Rw6ogPqOtaXDhD%2BT9dUnx0fLTluSV%2BNvd%2Bm8FEXaoF3OQdVALdLUfcdVeKrJTtuo%2BZIlI7AiX0Ju0qjeFARln0BhQChM3GNtXI9ditYxtQO79uzkXwPNSEp%2FbqDin4ugTl%2FHVfTABQ7ckeAH%2FDqF8SxVB3AUgEjxCMLsS1bsi8gynLGElbqQyO5mLiIEO28txG5i0AGPLmEP%2F66%2BMJNKvOHUTjIszXiH5Siw58RYaEIxIwSUFvxydfIWHhMBGqBKWNi3jf1YcsWnnjsX%2FL4TsFHDurVERvZ7loUDq6%2BoDJ7bqynmVSmITfcc5NV5Qnh%2FtHQBWkvNNg6fW9pJ%2BOK%2B%2FOgix%2FmqLYhPkXVWKARPaaW0hpbXrbqY4sZWO%2FHdxdTOmoWi6VJqTPgdxdXTjMJKJOyO2CiXR3gxMLNaNaKun3dZwwQkmMmi4EVXut1VKmA6fXmLgMJeURfJh6RExyA74UZy7HQyF2u3vRy1NSr3xhaV5daFAyE1DFy%2FLfpwRAdA6ps%2B%2FYOv5qi2xoRVVNqzpmyezOfIc8auwJFW%2BvCDI9mGj9s%2BH3KTrZm6kk3lyflScSCIOWIdiEy7aVU4S4K%2FHQBQ8UUlGo%2FZE%2Btnq2BcNKmW1avMV0wke60xAY6pgEJXZk5MHG5mHzZwhxuu6F%2Fr%2FP0Fjf4wy6jYFUgSecn0FfEUtvSF41f9onLwaa8dDrvGcs0nhZVpfWRdnxLgFX5L7fCRuSkxEPSNuG8T4ozU%2FNA%2FyoQRbzbpIwxECJuENwrA2S29UhHxO%2FQVUA%2FecM1sRcY0VSeYypm4E1zgN0oR2TaN7o4QkVmfT04Xk4NtlB5xHxlspywuIDP3an7sDY%2Bl4KmEG3V&X-Amz-Signature=13a82322a2aba4dd81f10b02444ff69b05bd237cc059dbd847102bb98b4b5386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFBHQNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAz%2B8eehky%2BF3dIAoC0MOwJz4oZFd7QqBV0eT%2FL0JXeAiAvWlkOD84DQ9CsD6oNQPo%2F6U7azhjCdMaAu%2FiZWJZGySqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyB0KsnNybyW4E0yyKtwDQ51IqXSm9Rw6ogPqOtaXDhD%2BT9dUnx0fLTluSV%2BNvd%2Bm8FEXaoF3OQdVALdLUfcdVeKrJTtuo%2BZIlI7AiX0Ju0qjeFARln0BhQChM3GNtXI9ditYxtQO79uzkXwPNSEp%2FbqDin4ugTl%2FHVfTABQ7ckeAH%2FDqF8SxVB3AUgEjxCMLsS1bsi8gynLGElbqQyO5mLiIEO28txG5i0AGPLmEP%2F66%2BMJNKvOHUTjIszXiH5Siw58RYaEIxIwSUFvxydfIWHhMBGqBKWNi3jf1YcsWnnjsX%2FL4TsFHDurVERvZ7loUDq6%2BoDJ7bqynmVSmITfcc5NV5Qnh%2FtHQBWkvNNg6fW9pJ%2BOK%2B%2FOgix%2FmqLYhPkXVWKARPaaW0hpbXrbqY4sZWO%2FHdxdTOmoWi6VJqTPgdxdXTjMJKJOyO2CiXR3gxMLNaNaKun3dZwwQkmMmi4EVXut1VKmA6fXmLgMJeURfJh6RExyA74UZy7HQyF2u3vRy1NSr3xhaV5daFAyE1DFy%2FLfpwRAdA6ps%2B%2FYOv5qi2xoRVVNqzpmyezOfIc8auwJFW%2BvCDI9mGj9s%2BH3KTrZm6kk3lyflScSCIOWIdiEy7aVU4S4K%2FHQBQ8UUlGo%2FZE%2Btnq2BcNKmW1avMV0wke60xAY6pgEJXZk5MHG5mHzZwhxuu6F%2Fr%2FP0Fjf4wy6jYFUgSecn0FfEUtvSF41f9onLwaa8dDrvGcs0nhZVpfWRdnxLgFX5L7fCRuSkxEPSNuG8T4ozU%2FNA%2FyoQRbzbpIwxECJuENwrA2S29UhHxO%2FQVUA%2FecM1sRcY0VSeYypm4E1zgN0oR2TaN7o4QkVmfT04Xk4NtlB5xHxlspywuIDP3an7sDY%2Bl4KmEG3V&X-Amz-Signature=a2e58b2e5b314cca4232327f3259333a9d3e9c5ea267595f1c19ecd694f0a633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFBHQNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAz%2B8eehky%2BF3dIAoC0MOwJz4oZFd7QqBV0eT%2FL0JXeAiAvWlkOD84DQ9CsD6oNQPo%2F6U7azhjCdMaAu%2FiZWJZGySqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyB0KsnNybyW4E0yyKtwDQ51IqXSm9Rw6ogPqOtaXDhD%2BT9dUnx0fLTluSV%2BNvd%2Bm8FEXaoF3OQdVALdLUfcdVeKrJTtuo%2BZIlI7AiX0Ju0qjeFARln0BhQChM3GNtXI9ditYxtQO79uzkXwPNSEp%2FbqDin4ugTl%2FHVfTABQ7ckeAH%2FDqF8SxVB3AUgEjxCMLsS1bsi8gynLGElbqQyO5mLiIEO28txG5i0AGPLmEP%2F66%2BMJNKvOHUTjIszXiH5Siw58RYaEIxIwSUFvxydfIWHhMBGqBKWNi3jf1YcsWnnjsX%2FL4TsFHDurVERvZ7loUDq6%2BoDJ7bqynmVSmITfcc5NV5Qnh%2FtHQBWkvNNg6fW9pJ%2BOK%2B%2FOgix%2FmqLYhPkXVWKARPaaW0hpbXrbqY4sZWO%2FHdxdTOmoWi6VJqTPgdxdXTjMJKJOyO2CiXR3gxMLNaNaKun3dZwwQkmMmi4EVXut1VKmA6fXmLgMJeURfJh6RExyA74UZy7HQyF2u3vRy1NSr3xhaV5daFAyE1DFy%2FLfpwRAdA6ps%2B%2FYOv5qi2xoRVVNqzpmyezOfIc8auwJFW%2BvCDI9mGj9s%2BH3KTrZm6kk3lyflScSCIOWIdiEy7aVU4S4K%2FHQBQ8UUlGo%2FZE%2Btnq2BcNKmW1avMV0wke60xAY6pgEJXZk5MHG5mHzZwhxuu6F%2Fr%2FP0Fjf4wy6jYFUgSecn0FfEUtvSF41f9onLwaa8dDrvGcs0nhZVpfWRdnxLgFX5L7fCRuSkxEPSNuG8T4ozU%2FNA%2FyoQRbzbpIwxECJuENwrA2S29UhHxO%2FQVUA%2FecM1sRcY0VSeYypm4E1zgN0oR2TaN7o4QkVmfT04Xk4NtlB5xHxlspywuIDP3an7sDY%2Bl4KmEG3V&X-Amz-Signature=e47b91792b05ace5b5b42ad9be5adc0451d6437a3d6e5bf2c305d64ad6884adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFBHQNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAz%2B8eehky%2BF3dIAoC0MOwJz4oZFd7QqBV0eT%2FL0JXeAiAvWlkOD84DQ9CsD6oNQPo%2F6U7azhjCdMaAu%2FiZWJZGySqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyB0KsnNybyW4E0yyKtwDQ51IqXSm9Rw6ogPqOtaXDhD%2BT9dUnx0fLTluSV%2BNvd%2Bm8FEXaoF3OQdVALdLUfcdVeKrJTtuo%2BZIlI7AiX0Ju0qjeFARln0BhQChM3GNtXI9ditYxtQO79uzkXwPNSEp%2FbqDin4ugTl%2FHVfTABQ7ckeAH%2FDqF8SxVB3AUgEjxCMLsS1bsi8gynLGElbqQyO5mLiIEO28txG5i0AGPLmEP%2F66%2BMJNKvOHUTjIszXiH5Siw58RYaEIxIwSUFvxydfIWHhMBGqBKWNi3jf1YcsWnnjsX%2FL4TsFHDurVERvZ7loUDq6%2BoDJ7bqynmVSmITfcc5NV5Qnh%2FtHQBWkvNNg6fW9pJ%2BOK%2B%2FOgix%2FmqLYhPkXVWKARPaaW0hpbXrbqY4sZWO%2FHdxdTOmoWi6VJqTPgdxdXTjMJKJOyO2CiXR3gxMLNaNaKun3dZwwQkmMmi4EVXut1VKmA6fXmLgMJeURfJh6RExyA74UZy7HQyF2u3vRy1NSr3xhaV5daFAyE1DFy%2FLfpwRAdA6ps%2B%2FYOv5qi2xoRVVNqzpmyezOfIc8auwJFW%2BvCDI9mGj9s%2BH3KTrZm6kk3lyflScSCIOWIdiEy7aVU4S4K%2FHQBQ8UUlGo%2FZE%2Btnq2BcNKmW1avMV0wke60xAY6pgEJXZk5MHG5mHzZwhxuu6F%2Fr%2FP0Fjf4wy6jYFUgSecn0FfEUtvSF41f9onLwaa8dDrvGcs0nhZVpfWRdnxLgFX5L7fCRuSkxEPSNuG8T4ozU%2FNA%2FyoQRbzbpIwxECJuENwrA2S29UhHxO%2FQVUA%2FecM1sRcY0VSeYypm4E1zgN0oR2TaN7o4QkVmfT04Xk4NtlB5xHxlspywuIDP3an7sDY%2Bl4KmEG3V&X-Amz-Signature=57adf621f00eb897cb5a55402cde8adb739d8041c2ef8f06fa8444a6778804f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFBHQNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAz%2B8eehky%2BF3dIAoC0MOwJz4oZFd7QqBV0eT%2FL0JXeAiAvWlkOD84DQ9CsD6oNQPo%2F6U7azhjCdMaAu%2FiZWJZGySqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyB0KsnNybyW4E0yyKtwDQ51IqXSm9Rw6ogPqOtaXDhD%2BT9dUnx0fLTluSV%2BNvd%2Bm8FEXaoF3OQdVALdLUfcdVeKrJTtuo%2BZIlI7AiX0Ju0qjeFARln0BhQChM3GNtXI9ditYxtQO79uzkXwPNSEp%2FbqDin4ugTl%2FHVfTABQ7ckeAH%2FDqF8SxVB3AUgEjxCMLsS1bsi8gynLGElbqQyO5mLiIEO28txG5i0AGPLmEP%2F66%2BMJNKvOHUTjIszXiH5Siw58RYaEIxIwSUFvxydfIWHhMBGqBKWNi3jf1YcsWnnjsX%2FL4TsFHDurVERvZ7loUDq6%2BoDJ7bqynmVSmITfcc5NV5Qnh%2FtHQBWkvNNg6fW9pJ%2BOK%2B%2FOgix%2FmqLYhPkXVWKARPaaW0hpbXrbqY4sZWO%2FHdxdTOmoWi6VJqTPgdxdXTjMJKJOyO2CiXR3gxMLNaNaKun3dZwwQkmMmi4EVXut1VKmA6fXmLgMJeURfJh6RExyA74UZy7HQyF2u3vRy1NSr3xhaV5daFAyE1DFy%2FLfpwRAdA6ps%2B%2FYOv5qi2xoRVVNqzpmyezOfIc8auwJFW%2BvCDI9mGj9s%2BH3KTrZm6kk3lyflScSCIOWIdiEy7aVU4S4K%2FHQBQ8UUlGo%2FZE%2Btnq2BcNKmW1avMV0wke60xAY6pgEJXZk5MHG5mHzZwhxuu6F%2Fr%2FP0Fjf4wy6jYFUgSecn0FfEUtvSF41f9onLwaa8dDrvGcs0nhZVpfWRdnxLgFX5L7fCRuSkxEPSNuG8T4ozU%2FNA%2FyoQRbzbpIwxECJuENwrA2S29UhHxO%2FQVUA%2FecM1sRcY0VSeYypm4E1zgN0oR2TaN7o4QkVmfT04Xk4NtlB5xHxlspywuIDP3an7sDY%2Bl4KmEG3V&X-Amz-Signature=b9028a8947f13fdabd1889c4b72413501572ed10f4c6f517bccfdefcb70c2593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFBHQNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAz%2B8eehky%2BF3dIAoC0MOwJz4oZFd7QqBV0eT%2FL0JXeAiAvWlkOD84DQ9CsD6oNQPo%2F6U7azhjCdMaAu%2FiZWJZGySqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyB0KsnNybyW4E0yyKtwDQ51IqXSm9Rw6ogPqOtaXDhD%2BT9dUnx0fLTluSV%2BNvd%2Bm8FEXaoF3OQdVALdLUfcdVeKrJTtuo%2BZIlI7AiX0Ju0qjeFARln0BhQChM3GNtXI9ditYxtQO79uzkXwPNSEp%2FbqDin4ugTl%2FHVfTABQ7ckeAH%2FDqF8SxVB3AUgEjxCMLsS1bsi8gynLGElbqQyO5mLiIEO28txG5i0AGPLmEP%2F66%2BMJNKvOHUTjIszXiH5Siw58RYaEIxIwSUFvxydfIWHhMBGqBKWNi3jf1YcsWnnjsX%2FL4TsFHDurVERvZ7loUDq6%2BoDJ7bqynmVSmITfcc5NV5Qnh%2FtHQBWkvNNg6fW9pJ%2BOK%2B%2FOgix%2FmqLYhPkXVWKARPaaW0hpbXrbqY4sZWO%2FHdxdTOmoWi6VJqTPgdxdXTjMJKJOyO2CiXR3gxMLNaNaKun3dZwwQkmMmi4EVXut1VKmA6fXmLgMJeURfJh6RExyA74UZy7HQyF2u3vRy1NSr3xhaV5daFAyE1DFy%2FLfpwRAdA6ps%2B%2FYOv5qi2xoRVVNqzpmyezOfIc8auwJFW%2BvCDI9mGj9s%2BH3KTrZm6kk3lyflScSCIOWIdiEy7aVU4S4K%2FHQBQ8UUlGo%2FZE%2Btnq2BcNKmW1avMV0wke60xAY6pgEJXZk5MHG5mHzZwhxuu6F%2Fr%2FP0Fjf4wy6jYFUgSecn0FfEUtvSF41f9onLwaa8dDrvGcs0nhZVpfWRdnxLgFX5L7fCRuSkxEPSNuG8T4ozU%2FNA%2FyoQRbzbpIwxECJuENwrA2S29UhHxO%2FQVUA%2FecM1sRcY0VSeYypm4E1zgN0oR2TaN7o4QkVmfT04Xk4NtlB5xHxlspywuIDP3an7sDY%2Bl4KmEG3V&X-Amz-Signature=b0283292700ab4604958a8a308a73264dc633743f51e22318c3871327c864fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFBHQNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAz%2B8eehky%2BF3dIAoC0MOwJz4oZFd7QqBV0eT%2FL0JXeAiAvWlkOD84DQ9CsD6oNQPo%2F6U7azhjCdMaAu%2FiZWJZGySqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyB0KsnNybyW4E0yyKtwDQ51IqXSm9Rw6ogPqOtaXDhD%2BT9dUnx0fLTluSV%2BNvd%2Bm8FEXaoF3OQdVALdLUfcdVeKrJTtuo%2BZIlI7AiX0Ju0qjeFARln0BhQChM3GNtXI9ditYxtQO79uzkXwPNSEp%2FbqDin4ugTl%2FHVfTABQ7ckeAH%2FDqF8SxVB3AUgEjxCMLsS1bsi8gynLGElbqQyO5mLiIEO28txG5i0AGPLmEP%2F66%2BMJNKvOHUTjIszXiH5Siw58RYaEIxIwSUFvxydfIWHhMBGqBKWNi3jf1YcsWnnjsX%2FL4TsFHDurVERvZ7loUDq6%2BoDJ7bqynmVSmITfcc5NV5Qnh%2FtHQBWkvNNg6fW9pJ%2BOK%2B%2FOgix%2FmqLYhPkXVWKARPaaW0hpbXrbqY4sZWO%2FHdxdTOmoWi6VJqTPgdxdXTjMJKJOyO2CiXR3gxMLNaNaKun3dZwwQkmMmi4EVXut1VKmA6fXmLgMJeURfJh6RExyA74UZy7HQyF2u3vRy1NSr3xhaV5daFAyE1DFy%2FLfpwRAdA6ps%2B%2FYOv5qi2xoRVVNqzpmyezOfIc8auwJFW%2BvCDI9mGj9s%2BH3KTrZm6kk3lyflScSCIOWIdiEy7aVU4S4K%2FHQBQ8UUlGo%2FZE%2Btnq2BcNKmW1avMV0wke60xAY6pgEJXZk5MHG5mHzZwhxuu6F%2Fr%2FP0Fjf4wy6jYFUgSecn0FfEUtvSF41f9onLwaa8dDrvGcs0nhZVpfWRdnxLgFX5L7fCRuSkxEPSNuG8T4ozU%2FNA%2FyoQRbzbpIwxECJuENwrA2S29UhHxO%2FQVUA%2FecM1sRcY0VSeYypm4E1zgN0oR2TaN7o4QkVmfT04Xk4NtlB5xHxlspywuIDP3an7sDY%2Bl4KmEG3V&X-Amz-Signature=67799fb239f259e97ede63ff8a0c8b5fa4cd86167ec72441735a034880b7b91a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFBHQNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAz%2B8eehky%2BF3dIAoC0MOwJz4oZFd7QqBV0eT%2FL0JXeAiAvWlkOD84DQ9CsD6oNQPo%2F6U7azhjCdMaAu%2FiZWJZGySqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyB0KsnNybyW4E0yyKtwDQ51IqXSm9Rw6ogPqOtaXDhD%2BT9dUnx0fLTluSV%2BNvd%2Bm8FEXaoF3OQdVALdLUfcdVeKrJTtuo%2BZIlI7AiX0Ju0qjeFARln0BhQChM3GNtXI9ditYxtQO79uzkXwPNSEp%2FbqDin4ugTl%2FHVfTABQ7ckeAH%2FDqF8SxVB3AUgEjxCMLsS1bsi8gynLGElbqQyO5mLiIEO28txG5i0AGPLmEP%2F66%2BMJNKvOHUTjIszXiH5Siw58RYaEIxIwSUFvxydfIWHhMBGqBKWNi3jf1YcsWnnjsX%2FL4TsFHDurVERvZ7loUDq6%2BoDJ7bqynmVSmITfcc5NV5Qnh%2FtHQBWkvNNg6fW9pJ%2BOK%2B%2FOgix%2FmqLYhPkXVWKARPaaW0hpbXrbqY4sZWO%2FHdxdTOmoWi6VJqTPgdxdXTjMJKJOyO2CiXR3gxMLNaNaKun3dZwwQkmMmi4EVXut1VKmA6fXmLgMJeURfJh6RExyA74UZy7HQyF2u3vRy1NSr3xhaV5daFAyE1DFy%2FLfpwRAdA6ps%2B%2FYOv5qi2xoRVVNqzpmyezOfIc8auwJFW%2BvCDI9mGj9s%2BH3KTrZm6kk3lyflScSCIOWIdiEy7aVU4S4K%2FHQBQ8UUlGo%2FZE%2Btnq2BcNKmW1avMV0wke60xAY6pgEJXZk5MHG5mHzZwhxuu6F%2Fr%2FP0Fjf4wy6jYFUgSecn0FfEUtvSF41f9onLwaa8dDrvGcs0nhZVpfWRdnxLgFX5L7fCRuSkxEPSNuG8T4ozU%2FNA%2FyoQRbzbpIwxECJuENwrA2S29UhHxO%2FQVUA%2FecM1sRcY0VSeYypm4E1zgN0oR2TaN7o4QkVmfT04Xk4NtlB5xHxlspywuIDP3an7sDY%2Bl4KmEG3V&X-Amz-Signature=3790f0ed2846f0c87cfa1486558b42dcf4052d942d66332243c62709db578c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFBHQNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAz%2B8eehky%2BF3dIAoC0MOwJz4oZFd7QqBV0eT%2FL0JXeAiAvWlkOD84DQ9CsD6oNQPo%2F6U7azhjCdMaAu%2FiZWJZGySqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyB0KsnNybyW4E0yyKtwDQ51IqXSm9Rw6ogPqOtaXDhD%2BT9dUnx0fLTluSV%2BNvd%2Bm8FEXaoF3OQdVALdLUfcdVeKrJTtuo%2BZIlI7AiX0Ju0qjeFARln0BhQChM3GNtXI9ditYxtQO79uzkXwPNSEp%2FbqDin4ugTl%2FHVfTABQ7ckeAH%2FDqF8SxVB3AUgEjxCMLsS1bsi8gynLGElbqQyO5mLiIEO28txG5i0AGPLmEP%2F66%2BMJNKvOHUTjIszXiH5Siw58RYaEIxIwSUFvxydfIWHhMBGqBKWNi3jf1YcsWnnjsX%2FL4TsFHDurVERvZ7loUDq6%2BoDJ7bqynmVSmITfcc5NV5Qnh%2FtHQBWkvNNg6fW9pJ%2BOK%2B%2FOgix%2FmqLYhPkXVWKARPaaW0hpbXrbqY4sZWO%2FHdxdTOmoWi6VJqTPgdxdXTjMJKJOyO2CiXR3gxMLNaNaKun3dZwwQkmMmi4EVXut1VKmA6fXmLgMJeURfJh6RExyA74UZy7HQyF2u3vRy1NSr3xhaV5daFAyE1DFy%2FLfpwRAdA6ps%2B%2FYOv5qi2xoRVVNqzpmyezOfIc8auwJFW%2BvCDI9mGj9s%2BH3KTrZm6kk3lyflScSCIOWIdiEy7aVU4S4K%2FHQBQ8UUlGo%2FZE%2Btnq2BcNKmW1avMV0wke60xAY6pgEJXZk5MHG5mHzZwhxuu6F%2Fr%2FP0Fjf4wy6jYFUgSecn0FfEUtvSF41f9onLwaa8dDrvGcs0nhZVpfWRdnxLgFX5L7fCRuSkxEPSNuG8T4ozU%2FNA%2FyoQRbzbpIwxECJuENwrA2S29UhHxO%2FQVUA%2FecM1sRcY0VSeYypm4E1zgN0oR2TaN7o4QkVmfT04Xk4NtlB5xHxlspywuIDP3an7sDY%2Bl4KmEG3V&X-Amz-Signature=2c2b4918db26309f1baef4671427425de3870e03a580ee7dec29d4f2f2d366db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFBHQNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAz%2B8eehky%2BF3dIAoC0MOwJz4oZFd7QqBV0eT%2FL0JXeAiAvWlkOD84DQ9CsD6oNQPo%2F6U7azhjCdMaAu%2FiZWJZGySqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyB0KsnNybyW4E0yyKtwDQ51IqXSm9Rw6ogPqOtaXDhD%2BT9dUnx0fLTluSV%2BNvd%2Bm8FEXaoF3OQdVALdLUfcdVeKrJTtuo%2BZIlI7AiX0Ju0qjeFARln0BhQChM3GNtXI9ditYxtQO79uzkXwPNSEp%2FbqDin4ugTl%2FHVfTABQ7ckeAH%2FDqF8SxVB3AUgEjxCMLsS1bsi8gynLGElbqQyO5mLiIEO28txG5i0AGPLmEP%2F66%2BMJNKvOHUTjIszXiH5Siw58RYaEIxIwSUFvxydfIWHhMBGqBKWNi3jf1YcsWnnjsX%2FL4TsFHDurVERvZ7loUDq6%2BoDJ7bqynmVSmITfcc5NV5Qnh%2FtHQBWkvNNg6fW9pJ%2BOK%2B%2FOgix%2FmqLYhPkXVWKARPaaW0hpbXrbqY4sZWO%2FHdxdTOmoWi6VJqTPgdxdXTjMJKJOyO2CiXR3gxMLNaNaKun3dZwwQkmMmi4EVXut1VKmA6fXmLgMJeURfJh6RExyA74UZy7HQyF2u3vRy1NSr3xhaV5daFAyE1DFy%2FLfpwRAdA6ps%2B%2FYOv5qi2xoRVVNqzpmyezOfIc8auwJFW%2BvCDI9mGj9s%2BH3KTrZm6kk3lyflScSCIOWIdiEy7aVU4S4K%2FHQBQ8UUlGo%2FZE%2Btnq2BcNKmW1avMV0wke60xAY6pgEJXZk5MHG5mHzZwhxuu6F%2Fr%2FP0Fjf4wy6jYFUgSecn0FfEUtvSF41f9onLwaa8dDrvGcs0nhZVpfWRdnxLgFX5L7fCRuSkxEPSNuG8T4ozU%2FNA%2FyoQRbzbpIwxECJuENwrA2S29UhHxO%2FQVUA%2FecM1sRcY0VSeYypm4E1zgN0oR2TaN7o4QkVmfT04Xk4NtlB5xHxlspywuIDP3an7sDY%2Bl4KmEG3V&X-Amz-Signature=72160dfe7729342ddcdee69d934f035abf8ea37feb40c9a7ab1132a72bd728bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFBHQNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAz%2B8eehky%2BF3dIAoC0MOwJz4oZFd7QqBV0eT%2FL0JXeAiAvWlkOD84DQ9CsD6oNQPo%2F6U7azhjCdMaAu%2FiZWJZGySqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyB0KsnNybyW4E0yyKtwDQ51IqXSm9Rw6ogPqOtaXDhD%2BT9dUnx0fLTluSV%2BNvd%2Bm8FEXaoF3OQdVALdLUfcdVeKrJTtuo%2BZIlI7AiX0Ju0qjeFARln0BhQChM3GNtXI9ditYxtQO79uzkXwPNSEp%2FbqDin4ugTl%2FHVfTABQ7ckeAH%2FDqF8SxVB3AUgEjxCMLsS1bsi8gynLGElbqQyO5mLiIEO28txG5i0AGPLmEP%2F66%2BMJNKvOHUTjIszXiH5Siw58RYaEIxIwSUFvxydfIWHhMBGqBKWNi3jf1YcsWnnjsX%2FL4TsFHDurVERvZ7loUDq6%2BoDJ7bqynmVSmITfcc5NV5Qnh%2FtHQBWkvNNg6fW9pJ%2BOK%2B%2FOgix%2FmqLYhPkXVWKARPaaW0hpbXrbqY4sZWO%2FHdxdTOmoWi6VJqTPgdxdXTjMJKJOyO2CiXR3gxMLNaNaKun3dZwwQkmMmi4EVXut1VKmA6fXmLgMJeURfJh6RExyA74UZy7HQyF2u3vRy1NSr3xhaV5daFAyE1DFy%2FLfpwRAdA6ps%2B%2FYOv5qi2xoRVVNqzpmyezOfIc8auwJFW%2BvCDI9mGj9s%2BH3KTrZm6kk3lyflScSCIOWIdiEy7aVU4S4K%2FHQBQ8UUlGo%2FZE%2Btnq2BcNKmW1avMV0wke60xAY6pgEJXZk5MHG5mHzZwhxuu6F%2Fr%2FP0Fjf4wy6jYFUgSecn0FfEUtvSF41f9onLwaa8dDrvGcs0nhZVpfWRdnxLgFX5L7fCRuSkxEPSNuG8T4ozU%2FNA%2FyoQRbzbpIwxECJuENwrA2S29UhHxO%2FQVUA%2FecM1sRcY0VSeYypm4E1zgN0oR2TaN7o4QkVmfT04Xk4NtlB5xHxlspywuIDP3an7sDY%2Bl4KmEG3V&X-Amz-Signature=3e10b4b5a5c71f624d0ba24bcfded2979d04d83d961069f16a939db3a9ffb2bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Nav2 settings

TODO: change footprint?
