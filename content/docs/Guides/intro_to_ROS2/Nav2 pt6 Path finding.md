---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-11T14:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-11T14:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLKC7A5%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIE1MevZwtcRA6QZZnUJPmZXk5HG1TiSXTDMW4UzLD3jWAiBEZeRhiBehv3aXmnkNSE5tr52%2BklIz%2BaWBzsdI9jtjkCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzV07pzNGSA9pIzigKtwDNDJovsfTJZb46LGZGVRNEUZoTiJx7PbUiBVQm%2BqHJCliRQCeHLEcmcFUi2w%2F98x5W3O7SjVYfrrEpzKdF%2FmEzTi5cNpyUax5Is6xzl2ebZFrQjrsd1VZ9Ejxmcjex1%2FZbo%2FP%2FmW4tcrzBzHxYt6xDW9qLEMmGP1184xgmpzfB69jvviJA8aF7canCSbKKQDLL0oq8rlyaUGaHefXWIgzAM01lbFP8AbnwfZLvLfgJ65JdrFRYIdG7X82EbfgaU17X9MX%2F2DPMBt4B3fUjZ%2Brbd9K%2BDqEOaX3rrFGOIhxWhTP8sAMfAsDViDDS%2Bq7GqrXAqWuoGOOLoRAMA1E7zJzfUKTU6fWYeKOQwMnWEUgpWEp%2BkYU4L1j2SeXYEvwJwmCTlmz%2FCdJ5WyEx%2B8rKJi4w%2BrZvC9UyMeStAEaT3OLrOtiYIp53oM17KR2nuyVnTS%2BYWpNq%2B8aAqaKthG3FasCXHoUSvoRa%2FMLhWXiTQ5t8vXkRSiPUCv%2Fff%2BL7ptVJ9QqqSf2MKCIOdhF0XVVd8oksF0%2BmN2RWCKKACIxdZdm8zfjAfj3AWYCBrEh36oYM9YvLhALkjr06yt6DKHr9rqAUW6ljdHLVSWGTcsq8HJuO018xR6%2F%2F8aReqfyL4AwsbboyQY6pgHOxKPZ1XWbeRbVDBij6HJEZuAlHfFaKWD7dkZy3Sk%2BwgXKC0RYPsqvZyu3UEXVFYtZCyw1hFO%2BEvzcQusJd5Id4%2FWGZUAMZoJclGIB1JZkOPhvbzAXRvwkm0%2Be9FJYRM3SjxbDy0S4bB6cRWIGX%2FdvXbFRY6D08GnKF4E9k8Jec%2FHYVRa%2BQpd5FTEH6As3x6PsbyBQSJu5tPKmFRzMob9Bdy0mKAJG&X-Amz-Signature=d721fd9a542dc71585b66699be9a87149eafbd76d9dcdf1430475468df18c5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLKC7A5%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIE1MevZwtcRA6QZZnUJPmZXk5HG1TiSXTDMW4UzLD3jWAiBEZeRhiBehv3aXmnkNSE5tr52%2BklIz%2BaWBzsdI9jtjkCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzV07pzNGSA9pIzigKtwDNDJovsfTJZb46LGZGVRNEUZoTiJx7PbUiBVQm%2BqHJCliRQCeHLEcmcFUi2w%2F98x5W3O7SjVYfrrEpzKdF%2FmEzTi5cNpyUax5Is6xzl2ebZFrQjrsd1VZ9Ejxmcjex1%2FZbo%2FP%2FmW4tcrzBzHxYt6xDW9qLEMmGP1184xgmpzfB69jvviJA8aF7canCSbKKQDLL0oq8rlyaUGaHefXWIgzAM01lbFP8AbnwfZLvLfgJ65JdrFRYIdG7X82EbfgaU17X9MX%2F2DPMBt4B3fUjZ%2Brbd9K%2BDqEOaX3rrFGOIhxWhTP8sAMfAsDViDDS%2Bq7GqrXAqWuoGOOLoRAMA1E7zJzfUKTU6fWYeKOQwMnWEUgpWEp%2BkYU4L1j2SeXYEvwJwmCTlmz%2FCdJ5WyEx%2B8rKJi4w%2BrZvC9UyMeStAEaT3OLrOtiYIp53oM17KR2nuyVnTS%2BYWpNq%2B8aAqaKthG3FasCXHoUSvoRa%2FMLhWXiTQ5t8vXkRSiPUCv%2Fff%2BL7ptVJ9QqqSf2MKCIOdhF0XVVd8oksF0%2BmN2RWCKKACIxdZdm8zfjAfj3AWYCBrEh36oYM9YvLhALkjr06yt6DKHr9rqAUW6ljdHLVSWGTcsq8HJuO018xR6%2F%2F8aReqfyL4AwsbboyQY6pgHOxKPZ1XWbeRbVDBij6HJEZuAlHfFaKWD7dkZy3Sk%2BwgXKC0RYPsqvZyu3UEXVFYtZCyw1hFO%2BEvzcQusJd5Id4%2FWGZUAMZoJclGIB1JZkOPhvbzAXRvwkm0%2Be9FJYRM3SjxbDy0S4bB6cRWIGX%2FdvXbFRY6D08GnKF4E9k8Jec%2FHYVRa%2BQpd5FTEH6As3x6PsbyBQSJu5tPKmFRzMob9Bdy0mKAJG&X-Amz-Signature=a1597836a00b19b91eaf3192ecb7d57dc5c017f894c5b9f1f9a6c21a78776ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLKC7A5%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIE1MevZwtcRA6QZZnUJPmZXk5HG1TiSXTDMW4UzLD3jWAiBEZeRhiBehv3aXmnkNSE5tr52%2BklIz%2BaWBzsdI9jtjkCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzV07pzNGSA9pIzigKtwDNDJovsfTJZb46LGZGVRNEUZoTiJx7PbUiBVQm%2BqHJCliRQCeHLEcmcFUi2w%2F98x5W3O7SjVYfrrEpzKdF%2FmEzTi5cNpyUax5Is6xzl2ebZFrQjrsd1VZ9Ejxmcjex1%2FZbo%2FP%2FmW4tcrzBzHxYt6xDW9qLEMmGP1184xgmpzfB69jvviJA8aF7canCSbKKQDLL0oq8rlyaUGaHefXWIgzAM01lbFP8AbnwfZLvLfgJ65JdrFRYIdG7X82EbfgaU17X9MX%2F2DPMBt4B3fUjZ%2Brbd9K%2BDqEOaX3rrFGOIhxWhTP8sAMfAsDViDDS%2Bq7GqrXAqWuoGOOLoRAMA1E7zJzfUKTU6fWYeKOQwMnWEUgpWEp%2BkYU4L1j2SeXYEvwJwmCTlmz%2FCdJ5WyEx%2B8rKJi4w%2BrZvC9UyMeStAEaT3OLrOtiYIp53oM17KR2nuyVnTS%2BYWpNq%2B8aAqaKthG3FasCXHoUSvoRa%2FMLhWXiTQ5t8vXkRSiPUCv%2Fff%2BL7ptVJ9QqqSf2MKCIOdhF0XVVd8oksF0%2BmN2RWCKKACIxdZdm8zfjAfj3AWYCBrEh36oYM9YvLhALkjr06yt6DKHr9rqAUW6ljdHLVSWGTcsq8HJuO018xR6%2F%2F8aReqfyL4AwsbboyQY6pgHOxKPZ1XWbeRbVDBij6HJEZuAlHfFaKWD7dkZy3Sk%2BwgXKC0RYPsqvZyu3UEXVFYtZCyw1hFO%2BEvzcQusJd5Id4%2FWGZUAMZoJclGIB1JZkOPhvbzAXRvwkm0%2Be9FJYRM3SjxbDy0S4bB6cRWIGX%2FdvXbFRY6D08GnKF4E9k8Jec%2FHYVRa%2BQpd5FTEH6As3x6PsbyBQSJu5tPKmFRzMob9Bdy0mKAJG&X-Amz-Signature=b5184d44591fa8346413831bcdcc3d59e2bcef26f3f6144ea9bfa494e98d4e86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLKC7A5%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIE1MevZwtcRA6QZZnUJPmZXk5HG1TiSXTDMW4UzLD3jWAiBEZeRhiBehv3aXmnkNSE5tr52%2BklIz%2BaWBzsdI9jtjkCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzV07pzNGSA9pIzigKtwDNDJovsfTJZb46LGZGVRNEUZoTiJx7PbUiBVQm%2BqHJCliRQCeHLEcmcFUi2w%2F98x5W3O7SjVYfrrEpzKdF%2FmEzTi5cNpyUax5Is6xzl2ebZFrQjrsd1VZ9Ejxmcjex1%2FZbo%2FP%2FmW4tcrzBzHxYt6xDW9qLEMmGP1184xgmpzfB69jvviJA8aF7canCSbKKQDLL0oq8rlyaUGaHefXWIgzAM01lbFP8AbnwfZLvLfgJ65JdrFRYIdG7X82EbfgaU17X9MX%2F2DPMBt4B3fUjZ%2Brbd9K%2BDqEOaX3rrFGOIhxWhTP8sAMfAsDViDDS%2Bq7GqrXAqWuoGOOLoRAMA1E7zJzfUKTU6fWYeKOQwMnWEUgpWEp%2BkYU4L1j2SeXYEvwJwmCTlmz%2FCdJ5WyEx%2B8rKJi4w%2BrZvC9UyMeStAEaT3OLrOtiYIp53oM17KR2nuyVnTS%2BYWpNq%2B8aAqaKthG3FasCXHoUSvoRa%2FMLhWXiTQ5t8vXkRSiPUCv%2Fff%2BL7ptVJ9QqqSf2MKCIOdhF0XVVd8oksF0%2BmN2RWCKKACIxdZdm8zfjAfj3AWYCBrEh36oYM9YvLhALkjr06yt6DKHr9rqAUW6ljdHLVSWGTcsq8HJuO018xR6%2F%2F8aReqfyL4AwsbboyQY6pgHOxKPZ1XWbeRbVDBij6HJEZuAlHfFaKWD7dkZy3Sk%2BwgXKC0RYPsqvZyu3UEXVFYtZCyw1hFO%2BEvzcQusJd5Id4%2FWGZUAMZoJclGIB1JZkOPhvbzAXRvwkm0%2Be9FJYRM3SjxbDy0S4bB6cRWIGX%2FdvXbFRY6D08GnKF4E9k8Jec%2FHYVRa%2BQpd5FTEH6As3x6PsbyBQSJu5tPKmFRzMob9Bdy0mKAJG&X-Amz-Signature=3f37d8dfdf32c7507b9ecfc070c796a9aa66dcc3625b3d2de0e43d5fd008bf93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLKC7A5%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIE1MevZwtcRA6QZZnUJPmZXk5HG1TiSXTDMW4UzLD3jWAiBEZeRhiBehv3aXmnkNSE5tr52%2BklIz%2BaWBzsdI9jtjkCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzV07pzNGSA9pIzigKtwDNDJovsfTJZb46LGZGVRNEUZoTiJx7PbUiBVQm%2BqHJCliRQCeHLEcmcFUi2w%2F98x5W3O7SjVYfrrEpzKdF%2FmEzTi5cNpyUax5Is6xzl2ebZFrQjrsd1VZ9Ejxmcjex1%2FZbo%2FP%2FmW4tcrzBzHxYt6xDW9qLEMmGP1184xgmpzfB69jvviJA8aF7canCSbKKQDLL0oq8rlyaUGaHefXWIgzAM01lbFP8AbnwfZLvLfgJ65JdrFRYIdG7X82EbfgaU17X9MX%2F2DPMBt4B3fUjZ%2Brbd9K%2BDqEOaX3rrFGOIhxWhTP8sAMfAsDViDDS%2Bq7GqrXAqWuoGOOLoRAMA1E7zJzfUKTU6fWYeKOQwMnWEUgpWEp%2BkYU4L1j2SeXYEvwJwmCTlmz%2FCdJ5WyEx%2B8rKJi4w%2BrZvC9UyMeStAEaT3OLrOtiYIp53oM17KR2nuyVnTS%2BYWpNq%2B8aAqaKthG3FasCXHoUSvoRa%2FMLhWXiTQ5t8vXkRSiPUCv%2Fff%2BL7ptVJ9QqqSf2MKCIOdhF0XVVd8oksF0%2BmN2RWCKKACIxdZdm8zfjAfj3AWYCBrEh36oYM9YvLhALkjr06yt6DKHr9rqAUW6ljdHLVSWGTcsq8HJuO018xR6%2F%2F8aReqfyL4AwsbboyQY6pgHOxKPZ1XWbeRbVDBij6HJEZuAlHfFaKWD7dkZy3Sk%2BwgXKC0RYPsqvZyu3UEXVFYtZCyw1hFO%2BEvzcQusJd5Id4%2FWGZUAMZoJclGIB1JZkOPhvbzAXRvwkm0%2Be9FJYRM3SjxbDy0S4bB6cRWIGX%2FdvXbFRY6D08GnKF4E9k8Jec%2FHYVRa%2BQpd5FTEH6As3x6PsbyBQSJu5tPKmFRzMob9Bdy0mKAJG&X-Amz-Signature=9c70cad30900fe1b254e3481f6ed9aef4f0f5cd5df9f92571c299c45829567ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLKC7A5%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIE1MevZwtcRA6QZZnUJPmZXk5HG1TiSXTDMW4UzLD3jWAiBEZeRhiBehv3aXmnkNSE5tr52%2BklIz%2BaWBzsdI9jtjkCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzV07pzNGSA9pIzigKtwDNDJovsfTJZb46LGZGVRNEUZoTiJx7PbUiBVQm%2BqHJCliRQCeHLEcmcFUi2w%2F98x5W3O7SjVYfrrEpzKdF%2FmEzTi5cNpyUax5Is6xzl2ebZFrQjrsd1VZ9Ejxmcjex1%2FZbo%2FP%2FmW4tcrzBzHxYt6xDW9qLEMmGP1184xgmpzfB69jvviJA8aF7canCSbKKQDLL0oq8rlyaUGaHefXWIgzAM01lbFP8AbnwfZLvLfgJ65JdrFRYIdG7X82EbfgaU17X9MX%2F2DPMBt4B3fUjZ%2Brbd9K%2BDqEOaX3rrFGOIhxWhTP8sAMfAsDViDDS%2Bq7GqrXAqWuoGOOLoRAMA1E7zJzfUKTU6fWYeKOQwMnWEUgpWEp%2BkYU4L1j2SeXYEvwJwmCTlmz%2FCdJ5WyEx%2B8rKJi4w%2BrZvC9UyMeStAEaT3OLrOtiYIp53oM17KR2nuyVnTS%2BYWpNq%2B8aAqaKthG3FasCXHoUSvoRa%2FMLhWXiTQ5t8vXkRSiPUCv%2Fff%2BL7ptVJ9QqqSf2MKCIOdhF0XVVd8oksF0%2BmN2RWCKKACIxdZdm8zfjAfj3AWYCBrEh36oYM9YvLhALkjr06yt6DKHr9rqAUW6ljdHLVSWGTcsq8HJuO018xR6%2F%2F8aReqfyL4AwsbboyQY6pgHOxKPZ1XWbeRbVDBij6HJEZuAlHfFaKWD7dkZy3Sk%2BwgXKC0RYPsqvZyu3UEXVFYtZCyw1hFO%2BEvzcQusJd5Id4%2FWGZUAMZoJclGIB1JZkOPhvbzAXRvwkm0%2Be9FJYRM3SjxbDy0S4bB6cRWIGX%2FdvXbFRY6D08GnKF4E9k8Jec%2FHYVRa%2BQpd5FTEH6As3x6PsbyBQSJu5tPKmFRzMob9Bdy0mKAJG&X-Amz-Signature=5123b4b13ee053e4a6d8eecb116e1dd199eafc7150ee16f4cf1be9ec6e951adc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLKC7A5%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIE1MevZwtcRA6QZZnUJPmZXk5HG1TiSXTDMW4UzLD3jWAiBEZeRhiBehv3aXmnkNSE5tr52%2BklIz%2BaWBzsdI9jtjkCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzV07pzNGSA9pIzigKtwDNDJovsfTJZb46LGZGVRNEUZoTiJx7PbUiBVQm%2BqHJCliRQCeHLEcmcFUi2w%2F98x5W3O7SjVYfrrEpzKdF%2FmEzTi5cNpyUax5Is6xzl2ebZFrQjrsd1VZ9Ejxmcjex1%2FZbo%2FP%2FmW4tcrzBzHxYt6xDW9qLEMmGP1184xgmpzfB69jvviJA8aF7canCSbKKQDLL0oq8rlyaUGaHefXWIgzAM01lbFP8AbnwfZLvLfgJ65JdrFRYIdG7X82EbfgaU17X9MX%2F2DPMBt4B3fUjZ%2Brbd9K%2BDqEOaX3rrFGOIhxWhTP8sAMfAsDViDDS%2Bq7GqrXAqWuoGOOLoRAMA1E7zJzfUKTU6fWYeKOQwMnWEUgpWEp%2BkYU4L1j2SeXYEvwJwmCTlmz%2FCdJ5WyEx%2B8rKJi4w%2BrZvC9UyMeStAEaT3OLrOtiYIp53oM17KR2nuyVnTS%2BYWpNq%2B8aAqaKthG3FasCXHoUSvoRa%2FMLhWXiTQ5t8vXkRSiPUCv%2Fff%2BL7ptVJ9QqqSf2MKCIOdhF0XVVd8oksF0%2BmN2RWCKKACIxdZdm8zfjAfj3AWYCBrEh36oYM9YvLhALkjr06yt6DKHr9rqAUW6ljdHLVSWGTcsq8HJuO018xR6%2F%2F8aReqfyL4AwsbboyQY6pgHOxKPZ1XWbeRbVDBij6HJEZuAlHfFaKWD7dkZy3Sk%2BwgXKC0RYPsqvZyu3UEXVFYtZCyw1hFO%2BEvzcQusJd5Id4%2FWGZUAMZoJclGIB1JZkOPhvbzAXRvwkm0%2Be9FJYRM3SjxbDy0S4bB6cRWIGX%2FdvXbFRY6D08GnKF4E9k8Jec%2FHYVRa%2BQpd5FTEH6As3x6PsbyBQSJu5tPKmFRzMob9Bdy0mKAJG&X-Amz-Signature=f193c7702e12c355a2d5e1eda88b958edb0fc84d968edb460eb5ec0c5c705a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLKC7A5%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIE1MevZwtcRA6QZZnUJPmZXk5HG1TiSXTDMW4UzLD3jWAiBEZeRhiBehv3aXmnkNSE5tr52%2BklIz%2BaWBzsdI9jtjkCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzV07pzNGSA9pIzigKtwDNDJovsfTJZb46LGZGVRNEUZoTiJx7PbUiBVQm%2BqHJCliRQCeHLEcmcFUi2w%2F98x5W3O7SjVYfrrEpzKdF%2FmEzTi5cNpyUax5Is6xzl2ebZFrQjrsd1VZ9Ejxmcjex1%2FZbo%2FP%2FmW4tcrzBzHxYt6xDW9qLEMmGP1184xgmpzfB69jvviJA8aF7canCSbKKQDLL0oq8rlyaUGaHefXWIgzAM01lbFP8AbnwfZLvLfgJ65JdrFRYIdG7X82EbfgaU17X9MX%2F2DPMBt4B3fUjZ%2Brbd9K%2BDqEOaX3rrFGOIhxWhTP8sAMfAsDViDDS%2Bq7GqrXAqWuoGOOLoRAMA1E7zJzfUKTU6fWYeKOQwMnWEUgpWEp%2BkYU4L1j2SeXYEvwJwmCTlmz%2FCdJ5WyEx%2B8rKJi4w%2BrZvC9UyMeStAEaT3OLrOtiYIp53oM17KR2nuyVnTS%2BYWpNq%2B8aAqaKthG3FasCXHoUSvoRa%2FMLhWXiTQ5t8vXkRSiPUCv%2Fff%2BL7ptVJ9QqqSf2MKCIOdhF0XVVd8oksF0%2BmN2RWCKKACIxdZdm8zfjAfj3AWYCBrEh36oYM9YvLhALkjr06yt6DKHr9rqAUW6ljdHLVSWGTcsq8HJuO018xR6%2F%2F8aReqfyL4AwsbboyQY6pgHOxKPZ1XWbeRbVDBij6HJEZuAlHfFaKWD7dkZy3Sk%2BwgXKC0RYPsqvZyu3UEXVFYtZCyw1hFO%2BEvzcQusJd5Id4%2FWGZUAMZoJclGIB1JZkOPhvbzAXRvwkm0%2Be9FJYRM3SjxbDy0S4bB6cRWIGX%2FdvXbFRY6D08GnKF4E9k8Jec%2FHYVRa%2BQpd5FTEH6As3x6PsbyBQSJu5tPKmFRzMob9Bdy0mKAJG&X-Amz-Signature=35dbedb1452609452a6497acd43ef225955e7f8042d5a5cf6557e4e6e9a9499b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLKC7A5%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIE1MevZwtcRA6QZZnUJPmZXk5HG1TiSXTDMW4UzLD3jWAiBEZeRhiBehv3aXmnkNSE5tr52%2BklIz%2BaWBzsdI9jtjkCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzV07pzNGSA9pIzigKtwDNDJovsfTJZb46LGZGVRNEUZoTiJx7PbUiBVQm%2BqHJCliRQCeHLEcmcFUi2w%2F98x5W3O7SjVYfrrEpzKdF%2FmEzTi5cNpyUax5Is6xzl2ebZFrQjrsd1VZ9Ejxmcjex1%2FZbo%2FP%2FmW4tcrzBzHxYt6xDW9qLEMmGP1184xgmpzfB69jvviJA8aF7canCSbKKQDLL0oq8rlyaUGaHefXWIgzAM01lbFP8AbnwfZLvLfgJ65JdrFRYIdG7X82EbfgaU17X9MX%2F2DPMBt4B3fUjZ%2Brbd9K%2BDqEOaX3rrFGOIhxWhTP8sAMfAsDViDDS%2Bq7GqrXAqWuoGOOLoRAMA1E7zJzfUKTU6fWYeKOQwMnWEUgpWEp%2BkYU4L1j2SeXYEvwJwmCTlmz%2FCdJ5WyEx%2B8rKJi4w%2BrZvC9UyMeStAEaT3OLrOtiYIp53oM17KR2nuyVnTS%2BYWpNq%2B8aAqaKthG3FasCXHoUSvoRa%2FMLhWXiTQ5t8vXkRSiPUCv%2Fff%2BL7ptVJ9QqqSf2MKCIOdhF0XVVd8oksF0%2BmN2RWCKKACIxdZdm8zfjAfj3AWYCBrEh36oYM9YvLhALkjr06yt6DKHr9rqAUW6ljdHLVSWGTcsq8HJuO018xR6%2F%2F8aReqfyL4AwsbboyQY6pgHOxKPZ1XWbeRbVDBij6HJEZuAlHfFaKWD7dkZy3Sk%2BwgXKC0RYPsqvZyu3UEXVFYtZCyw1hFO%2BEvzcQusJd5Id4%2FWGZUAMZoJclGIB1JZkOPhvbzAXRvwkm0%2Be9FJYRM3SjxbDy0S4bB6cRWIGX%2FdvXbFRY6D08GnKF4E9k8Jec%2FHYVRa%2BQpd5FTEH6As3x6PsbyBQSJu5tPKmFRzMob9Bdy0mKAJG&X-Amz-Signature=82985c14038c77e3f5f385ac7a2616a0e90ee12c22783d9d4d663ecc40ee5dd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLKC7A5%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIE1MevZwtcRA6QZZnUJPmZXk5HG1TiSXTDMW4UzLD3jWAiBEZeRhiBehv3aXmnkNSE5tr52%2BklIz%2BaWBzsdI9jtjkCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzV07pzNGSA9pIzigKtwDNDJovsfTJZb46LGZGVRNEUZoTiJx7PbUiBVQm%2BqHJCliRQCeHLEcmcFUi2w%2F98x5W3O7SjVYfrrEpzKdF%2FmEzTi5cNpyUax5Is6xzl2ebZFrQjrsd1VZ9Ejxmcjex1%2FZbo%2FP%2FmW4tcrzBzHxYt6xDW9qLEMmGP1184xgmpzfB69jvviJA8aF7canCSbKKQDLL0oq8rlyaUGaHefXWIgzAM01lbFP8AbnwfZLvLfgJ65JdrFRYIdG7X82EbfgaU17X9MX%2F2DPMBt4B3fUjZ%2Brbd9K%2BDqEOaX3rrFGOIhxWhTP8sAMfAsDViDDS%2Bq7GqrXAqWuoGOOLoRAMA1E7zJzfUKTU6fWYeKOQwMnWEUgpWEp%2BkYU4L1j2SeXYEvwJwmCTlmz%2FCdJ5WyEx%2B8rKJi4w%2BrZvC9UyMeStAEaT3OLrOtiYIp53oM17KR2nuyVnTS%2BYWpNq%2B8aAqaKthG3FasCXHoUSvoRa%2FMLhWXiTQ5t8vXkRSiPUCv%2Fff%2BL7ptVJ9QqqSf2MKCIOdhF0XVVd8oksF0%2BmN2RWCKKACIxdZdm8zfjAfj3AWYCBrEh36oYM9YvLhALkjr06yt6DKHr9rqAUW6ljdHLVSWGTcsq8HJuO018xR6%2F%2F8aReqfyL4AwsbboyQY6pgHOxKPZ1XWbeRbVDBij6HJEZuAlHfFaKWD7dkZy3Sk%2BwgXKC0RYPsqvZyu3UEXVFYtZCyw1hFO%2BEvzcQusJd5Id4%2FWGZUAMZoJclGIB1JZkOPhvbzAXRvwkm0%2Be9FJYRM3SjxbDy0S4bB6cRWIGX%2FdvXbFRY6D08GnKF4E9k8Jec%2FHYVRa%2BQpd5FTEH6As3x6PsbyBQSJu5tPKmFRzMob9Bdy0mKAJG&X-Amz-Signature=deb52cda7dc9a94598ecabe1d7e9082823801a62292a7b6a806cd891f36c2d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLKC7A5%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIE1MevZwtcRA6QZZnUJPmZXk5HG1TiSXTDMW4UzLD3jWAiBEZeRhiBehv3aXmnkNSE5tr52%2BklIz%2BaWBzsdI9jtjkCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzV07pzNGSA9pIzigKtwDNDJovsfTJZb46LGZGVRNEUZoTiJx7PbUiBVQm%2BqHJCliRQCeHLEcmcFUi2w%2F98x5W3O7SjVYfrrEpzKdF%2FmEzTi5cNpyUax5Is6xzl2ebZFrQjrsd1VZ9Ejxmcjex1%2FZbo%2FP%2FmW4tcrzBzHxYt6xDW9qLEMmGP1184xgmpzfB69jvviJA8aF7canCSbKKQDLL0oq8rlyaUGaHefXWIgzAM01lbFP8AbnwfZLvLfgJ65JdrFRYIdG7X82EbfgaU17X9MX%2F2DPMBt4B3fUjZ%2Brbd9K%2BDqEOaX3rrFGOIhxWhTP8sAMfAsDViDDS%2Bq7GqrXAqWuoGOOLoRAMA1E7zJzfUKTU6fWYeKOQwMnWEUgpWEp%2BkYU4L1j2SeXYEvwJwmCTlmz%2FCdJ5WyEx%2B8rKJi4w%2BrZvC9UyMeStAEaT3OLrOtiYIp53oM17KR2nuyVnTS%2BYWpNq%2B8aAqaKthG3FasCXHoUSvoRa%2FMLhWXiTQ5t8vXkRSiPUCv%2Fff%2BL7ptVJ9QqqSf2MKCIOdhF0XVVd8oksF0%2BmN2RWCKKACIxdZdm8zfjAfj3AWYCBrEh36oYM9YvLhALkjr06yt6DKHr9rqAUW6ljdHLVSWGTcsq8HJuO018xR6%2F%2F8aReqfyL4AwsbboyQY6pgHOxKPZ1XWbeRbVDBij6HJEZuAlHfFaKWD7dkZy3Sk%2BwgXKC0RYPsqvZyu3UEXVFYtZCyw1hFO%2BEvzcQusJd5Id4%2FWGZUAMZoJclGIB1JZkOPhvbzAXRvwkm0%2Be9FJYRM3SjxbDy0S4bB6cRWIGX%2FdvXbFRY6D08GnKF4E9k8Jec%2FHYVRa%2BQpd5FTEH6As3x6PsbyBQSJu5tPKmFRzMob9Bdy0mKAJG&X-Amz-Signature=99227a8936a249ae5720b5d6dfbb671b4158fd9c87435bb90006638a15938a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLKC7A5%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIE1MevZwtcRA6QZZnUJPmZXk5HG1TiSXTDMW4UzLD3jWAiBEZeRhiBehv3aXmnkNSE5tr52%2BklIz%2BaWBzsdI9jtjkCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzV07pzNGSA9pIzigKtwDNDJovsfTJZb46LGZGVRNEUZoTiJx7PbUiBVQm%2BqHJCliRQCeHLEcmcFUi2w%2F98x5W3O7SjVYfrrEpzKdF%2FmEzTi5cNpyUax5Is6xzl2ebZFrQjrsd1VZ9Ejxmcjex1%2FZbo%2FP%2FmW4tcrzBzHxYt6xDW9qLEMmGP1184xgmpzfB69jvviJA8aF7canCSbKKQDLL0oq8rlyaUGaHefXWIgzAM01lbFP8AbnwfZLvLfgJ65JdrFRYIdG7X82EbfgaU17X9MX%2F2DPMBt4B3fUjZ%2Brbd9K%2BDqEOaX3rrFGOIhxWhTP8sAMfAsDViDDS%2Bq7GqrXAqWuoGOOLoRAMA1E7zJzfUKTU6fWYeKOQwMnWEUgpWEp%2BkYU4L1j2SeXYEvwJwmCTlmz%2FCdJ5WyEx%2B8rKJi4w%2BrZvC9UyMeStAEaT3OLrOtiYIp53oM17KR2nuyVnTS%2BYWpNq%2B8aAqaKthG3FasCXHoUSvoRa%2FMLhWXiTQ5t8vXkRSiPUCv%2Fff%2BL7ptVJ9QqqSf2MKCIOdhF0XVVd8oksF0%2BmN2RWCKKACIxdZdm8zfjAfj3AWYCBrEh36oYM9YvLhALkjr06yt6DKHr9rqAUW6ljdHLVSWGTcsq8HJuO018xR6%2F%2F8aReqfyL4AwsbboyQY6pgHOxKPZ1XWbeRbVDBij6HJEZuAlHfFaKWD7dkZy3Sk%2BwgXKC0RYPsqvZyu3UEXVFYtZCyw1hFO%2BEvzcQusJd5Id4%2FWGZUAMZoJclGIB1JZkOPhvbzAXRvwkm0%2Be9FJYRM3SjxbDy0S4bB6cRWIGX%2FdvXbFRY6D08GnKF4E9k8Jec%2FHYVRa%2BQpd5FTEH6As3x6PsbyBQSJu5tPKmFRzMob9Bdy0mKAJG&X-Amz-Signature=2ee7100e82b34b03c9a067625b50464a577d5f6513a648828c4398d02fdb5f6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLKC7A5%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIE1MevZwtcRA6QZZnUJPmZXk5HG1TiSXTDMW4UzLD3jWAiBEZeRhiBehv3aXmnkNSE5tr52%2BklIz%2BaWBzsdI9jtjkCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzV07pzNGSA9pIzigKtwDNDJovsfTJZb46LGZGVRNEUZoTiJx7PbUiBVQm%2BqHJCliRQCeHLEcmcFUi2w%2F98x5W3O7SjVYfrrEpzKdF%2FmEzTi5cNpyUax5Is6xzl2ebZFrQjrsd1VZ9Ejxmcjex1%2FZbo%2FP%2FmW4tcrzBzHxYt6xDW9qLEMmGP1184xgmpzfB69jvviJA8aF7canCSbKKQDLL0oq8rlyaUGaHefXWIgzAM01lbFP8AbnwfZLvLfgJ65JdrFRYIdG7X82EbfgaU17X9MX%2F2DPMBt4B3fUjZ%2Brbd9K%2BDqEOaX3rrFGOIhxWhTP8sAMfAsDViDDS%2Bq7GqrXAqWuoGOOLoRAMA1E7zJzfUKTU6fWYeKOQwMnWEUgpWEp%2BkYU4L1j2SeXYEvwJwmCTlmz%2FCdJ5WyEx%2B8rKJi4w%2BrZvC9UyMeStAEaT3OLrOtiYIp53oM17KR2nuyVnTS%2BYWpNq%2B8aAqaKthG3FasCXHoUSvoRa%2FMLhWXiTQ5t8vXkRSiPUCv%2Fff%2BL7ptVJ9QqqSf2MKCIOdhF0XVVd8oksF0%2BmN2RWCKKACIxdZdm8zfjAfj3AWYCBrEh36oYM9YvLhALkjr06yt6DKHr9rqAUW6ljdHLVSWGTcsq8HJuO018xR6%2F%2F8aReqfyL4AwsbboyQY6pgHOxKPZ1XWbeRbVDBij6HJEZuAlHfFaKWD7dkZy3Sk%2BwgXKC0RYPsqvZyu3UEXVFYtZCyw1hFO%2BEvzcQusJd5Id4%2FWGZUAMZoJclGIB1JZkOPhvbzAXRvwkm0%2Be9FJYRM3SjxbDy0S4bB6cRWIGX%2FdvXbFRY6D08GnKF4E9k8Jec%2FHYVRa%2BQpd5FTEH6As3x6PsbyBQSJu5tPKmFRzMob9Bdy0mKAJG&X-Amz-Signature=0a8d58f81d4ac0f035029af3d1377c56ffc77cc5adae35e01251281fe5bd1ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
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
