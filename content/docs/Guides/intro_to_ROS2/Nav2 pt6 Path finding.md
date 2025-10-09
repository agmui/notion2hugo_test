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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XS7MXXI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDQhkQz2SGZoYu1%2F5ZDh%2B9qADAZp5m1GnQ7VdNJgZI5lgIhAOnk85UKBdhNE9iNEiCtp8mxJBrxLeKKK3sX8JH2crZPKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtD7tmccDBjw1vZhAq3AMdsUGmeOyUtl75pQVDS6p00PT93DmuJ0QxewuL7hdW%2FCQmwIqKlmzBPHoR%2FjnR5FMDLND0MqIlQnOwYYEt5gV3ZxkA7DEYih8n47MjDGpgb5dFJz6JSjZ%2FxULFgQV7l%2BvtWgaQvJm0nnSSy4BSAvurL4owlN5mkBi1QA7j4HywaO7MH5%2BVYNKD8zmy8a9nHl5LchYKnbQg6pbRTJLMiLJf%2BjzeF5YgZsN3lRwzBrV8eY7zdrr8slFB%2FNIixRHZZE0IHOVvqwpM3fZixruH7UzoXSsSQ1KH9hqNe46QpykKI5G5z3HcbL2ybtxu4yraF8MUqpRNOeowNQNdWDsIQZ4GsILnFtoqnpjXdbuaXRCyT4qOyYxMXuPSrak4Q6gjYhT406YpqsQNy%2FSR7pkMPWfqCKGs505TaPPUYwfQGWOeh95V8uvggsw9hFeR0sL0xvg%2BEW4mBX9evlbtHIUaF67nz%2BdnKTvQ2eC0dElmVyezbxmOefOfR2anLSVpGCuwZcGH0Mkj5roS5haqwbH0PmATvj9tTBZ1b636PAqu4grl6Aidbfa5pmGxEKYHjhleXA%2F5bXB2cUYt4Vt6l7QV7UxxiqwkctKqh3hh%2BvrkXBr6BizZIm%2FfaJQzMCSFLzD9%2BpvHBjqkAc3aoBbiTsiji%2FJtTYfNg3DS%2Fre%2BmgbKjQZZLsEYqXUJjlVkssk7GZxy6%2FF0qeBsVYmJM3dDUC5oolKdp993B8gs4bI%2BQrSa3%2F3HoZJ2yg04RVNq0hG5F%2BO%2F1hKJRxmjYo4lYTsNsrWX7Az7UafoQ74qC9mc0p1RsEOJwX1uvSrt1S8LCQcyxcckNsiaWv8KtLVwkqpX1DSp6NXyY%2Fsg6XKfYJYi&X-Amz-Signature=2a5978f79c14054f054924ae5c3c2893acd7290c659cc10b215a45246ad512e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XS7MXXI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDQhkQz2SGZoYu1%2F5ZDh%2B9qADAZp5m1GnQ7VdNJgZI5lgIhAOnk85UKBdhNE9iNEiCtp8mxJBrxLeKKK3sX8JH2crZPKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtD7tmccDBjw1vZhAq3AMdsUGmeOyUtl75pQVDS6p00PT93DmuJ0QxewuL7hdW%2FCQmwIqKlmzBPHoR%2FjnR5FMDLND0MqIlQnOwYYEt5gV3ZxkA7DEYih8n47MjDGpgb5dFJz6JSjZ%2FxULFgQV7l%2BvtWgaQvJm0nnSSy4BSAvurL4owlN5mkBi1QA7j4HywaO7MH5%2BVYNKD8zmy8a9nHl5LchYKnbQg6pbRTJLMiLJf%2BjzeF5YgZsN3lRwzBrV8eY7zdrr8slFB%2FNIixRHZZE0IHOVvqwpM3fZixruH7UzoXSsSQ1KH9hqNe46QpykKI5G5z3HcbL2ybtxu4yraF8MUqpRNOeowNQNdWDsIQZ4GsILnFtoqnpjXdbuaXRCyT4qOyYxMXuPSrak4Q6gjYhT406YpqsQNy%2FSR7pkMPWfqCKGs505TaPPUYwfQGWOeh95V8uvggsw9hFeR0sL0xvg%2BEW4mBX9evlbtHIUaF67nz%2BdnKTvQ2eC0dElmVyezbxmOefOfR2anLSVpGCuwZcGH0Mkj5roS5haqwbH0PmATvj9tTBZ1b636PAqu4grl6Aidbfa5pmGxEKYHjhleXA%2F5bXB2cUYt4Vt6l7QV7UxxiqwkctKqh3hh%2BvrkXBr6BizZIm%2FfaJQzMCSFLzD9%2BpvHBjqkAc3aoBbiTsiji%2FJtTYfNg3DS%2Fre%2BmgbKjQZZLsEYqXUJjlVkssk7GZxy6%2FF0qeBsVYmJM3dDUC5oolKdp993B8gs4bI%2BQrSa3%2F3HoZJ2yg04RVNq0hG5F%2BO%2F1hKJRxmjYo4lYTsNsrWX7Az7UafoQ74qC9mc0p1RsEOJwX1uvSrt1S8LCQcyxcckNsiaWv8KtLVwkqpX1DSp6NXyY%2Fsg6XKfYJYi&X-Amz-Signature=aedf7369d1f1c98e69af192181612a69db2cf393d694e9a2255949f917f82e24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XS7MXXI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDQhkQz2SGZoYu1%2F5ZDh%2B9qADAZp5m1GnQ7VdNJgZI5lgIhAOnk85UKBdhNE9iNEiCtp8mxJBrxLeKKK3sX8JH2crZPKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtD7tmccDBjw1vZhAq3AMdsUGmeOyUtl75pQVDS6p00PT93DmuJ0QxewuL7hdW%2FCQmwIqKlmzBPHoR%2FjnR5FMDLND0MqIlQnOwYYEt5gV3ZxkA7DEYih8n47MjDGpgb5dFJz6JSjZ%2FxULFgQV7l%2BvtWgaQvJm0nnSSy4BSAvurL4owlN5mkBi1QA7j4HywaO7MH5%2BVYNKD8zmy8a9nHl5LchYKnbQg6pbRTJLMiLJf%2BjzeF5YgZsN3lRwzBrV8eY7zdrr8slFB%2FNIixRHZZE0IHOVvqwpM3fZixruH7UzoXSsSQ1KH9hqNe46QpykKI5G5z3HcbL2ybtxu4yraF8MUqpRNOeowNQNdWDsIQZ4GsILnFtoqnpjXdbuaXRCyT4qOyYxMXuPSrak4Q6gjYhT406YpqsQNy%2FSR7pkMPWfqCKGs505TaPPUYwfQGWOeh95V8uvggsw9hFeR0sL0xvg%2BEW4mBX9evlbtHIUaF67nz%2BdnKTvQ2eC0dElmVyezbxmOefOfR2anLSVpGCuwZcGH0Mkj5roS5haqwbH0PmATvj9tTBZ1b636PAqu4grl6Aidbfa5pmGxEKYHjhleXA%2F5bXB2cUYt4Vt6l7QV7UxxiqwkctKqh3hh%2BvrkXBr6BizZIm%2FfaJQzMCSFLzD9%2BpvHBjqkAc3aoBbiTsiji%2FJtTYfNg3DS%2Fre%2BmgbKjQZZLsEYqXUJjlVkssk7GZxy6%2FF0qeBsVYmJM3dDUC5oolKdp993B8gs4bI%2BQrSa3%2F3HoZJ2yg04RVNq0hG5F%2BO%2F1hKJRxmjYo4lYTsNsrWX7Az7UafoQ74qC9mc0p1RsEOJwX1uvSrt1S8LCQcyxcckNsiaWv8KtLVwkqpX1DSp6NXyY%2Fsg6XKfYJYi&X-Amz-Signature=712e9e49e3d5d421d40f1cb89a6ae81b9a682615f6917124bc6631ee2348bb65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XS7MXXI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDQhkQz2SGZoYu1%2F5ZDh%2B9qADAZp5m1GnQ7VdNJgZI5lgIhAOnk85UKBdhNE9iNEiCtp8mxJBrxLeKKK3sX8JH2crZPKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtD7tmccDBjw1vZhAq3AMdsUGmeOyUtl75pQVDS6p00PT93DmuJ0QxewuL7hdW%2FCQmwIqKlmzBPHoR%2FjnR5FMDLND0MqIlQnOwYYEt5gV3ZxkA7DEYih8n47MjDGpgb5dFJz6JSjZ%2FxULFgQV7l%2BvtWgaQvJm0nnSSy4BSAvurL4owlN5mkBi1QA7j4HywaO7MH5%2BVYNKD8zmy8a9nHl5LchYKnbQg6pbRTJLMiLJf%2BjzeF5YgZsN3lRwzBrV8eY7zdrr8slFB%2FNIixRHZZE0IHOVvqwpM3fZixruH7UzoXSsSQ1KH9hqNe46QpykKI5G5z3HcbL2ybtxu4yraF8MUqpRNOeowNQNdWDsIQZ4GsILnFtoqnpjXdbuaXRCyT4qOyYxMXuPSrak4Q6gjYhT406YpqsQNy%2FSR7pkMPWfqCKGs505TaPPUYwfQGWOeh95V8uvggsw9hFeR0sL0xvg%2BEW4mBX9evlbtHIUaF67nz%2BdnKTvQ2eC0dElmVyezbxmOefOfR2anLSVpGCuwZcGH0Mkj5roS5haqwbH0PmATvj9tTBZ1b636PAqu4grl6Aidbfa5pmGxEKYHjhleXA%2F5bXB2cUYt4Vt6l7QV7UxxiqwkctKqh3hh%2BvrkXBr6BizZIm%2FfaJQzMCSFLzD9%2BpvHBjqkAc3aoBbiTsiji%2FJtTYfNg3DS%2Fre%2BmgbKjQZZLsEYqXUJjlVkssk7GZxy6%2FF0qeBsVYmJM3dDUC5oolKdp993B8gs4bI%2BQrSa3%2F3HoZJ2yg04RVNq0hG5F%2BO%2F1hKJRxmjYo4lYTsNsrWX7Az7UafoQ74qC9mc0p1RsEOJwX1uvSrt1S8LCQcyxcckNsiaWv8KtLVwkqpX1DSp6NXyY%2Fsg6XKfYJYi&X-Amz-Signature=649a58de3cbf8d4b630a9e462670386e9b8689465a852a50f7f126616ed3efa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XS7MXXI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDQhkQz2SGZoYu1%2F5ZDh%2B9qADAZp5m1GnQ7VdNJgZI5lgIhAOnk85UKBdhNE9iNEiCtp8mxJBrxLeKKK3sX8JH2crZPKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtD7tmccDBjw1vZhAq3AMdsUGmeOyUtl75pQVDS6p00PT93DmuJ0QxewuL7hdW%2FCQmwIqKlmzBPHoR%2FjnR5FMDLND0MqIlQnOwYYEt5gV3ZxkA7DEYih8n47MjDGpgb5dFJz6JSjZ%2FxULFgQV7l%2BvtWgaQvJm0nnSSy4BSAvurL4owlN5mkBi1QA7j4HywaO7MH5%2BVYNKD8zmy8a9nHl5LchYKnbQg6pbRTJLMiLJf%2BjzeF5YgZsN3lRwzBrV8eY7zdrr8slFB%2FNIixRHZZE0IHOVvqwpM3fZixruH7UzoXSsSQ1KH9hqNe46QpykKI5G5z3HcbL2ybtxu4yraF8MUqpRNOeowNQNdWDsIQZ4GsILnFtoqnpjXdbuaXRCyT4qOyYxMXuPSrak4Q6gjYhT406YpqsQNy%2FSR7pkMPWfqCKGs505TaPPUYwfQGWOeh95V8uvggsw9hFeR0sL0xvg%2BEW4mBX9evlbtHIUaF67nz%2BdnKTvQ2eC0dElmVyezbxmOefOfR2anLSVpGCuwZcGH0Mkj5roS5haqwbH0PmATvj9tTBZ1b636PAqu4grl6Aidbfa5pmGxEKYHjhleXA%2F5bXB2cUYt4Vt6l7QV7UxxiqwkctKqh3hh%2BvrkXBr6BizZIm%2FfaJQzMCSFLzD9%2BpvHBjqkAc3aoBbiTsiji%2FJtTYfNg3DS%2Fre%2BmgbKjQZZLsEYqXUJjlVkssk7GZxy6%2FF0qeBsVYmJM3dDUC5oolKdp993B8gs4bI%2BQrSa3%2F3HoZJ2yg04RVNq0hG5F%2BO%2F1hKJRxmjYo4lYTsNsrWX7Az7UafoQ74qC9mc0p1RsEOJwX1uvSrt1S8LCQcyxcckNsiaWv8KtLVwkqpX1DSp6NXyY%2Fsg6XKfYJYi&X-Amz-Signature=2537a40f0887ceeb2ba3264bb045fd11182822ca0c23ee99962943b61694c102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XS7MXXI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDQhkQz2SGZoYu1%2F5ZDh%2B9qADAZp5m1GnQ7VdNJgZI5lgIhAOnk85UKBdhNE9iNEiCtp8mxJBrxLeKKK3sX8JH2crZPKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtD7tmccDBjw1vZhAq3AMdsUGmeOyUtl75pQVDS6p00PT93DmuJ0QxewuL7hdW%2FCQmwIqKlmzBPHoR%2FjnR5FMDLND0MqIlQnOwYYEt5gV3ZxkA7DEYih8n47MjDGpgb5dFJz6JSjZ%2FxULFgQV7l%2BvtWgaQvJm0nnSSy4BSAvurL4owlN5mkBi1QA7j4HywaO7MH5%2BVYNKD8zmy8a9nHl5LchYKnbQg6pbRTJLMiLJf%2BjzeF5YgZsN3lRwzBrV8eY7zdrr8slFB%2FNIixRHZZE0IHOVvqwpM3fZixruH7UzoXSsSQ1KH9hqNe46QpykKI5G5z3HcbL2ybtxu4yraF8MUqpRNOeowNQNdWDsIQZ4GsILnFtoqnpjXdbuaXRCyT4qOyYxMXuPSrak4Q6gjYhT406YpqsQNy%2FSR7pkMPWfqCKGs505TaPPUYwfQGWOeh95V8uvggsw9hFeR0sL0xvg%2BEW4mBX9evlbtHIUaF67nz%2BdnKTvQ2eC0dElmVyezbxmOefOfR2anLSVpGCuwZcGH0Mkj5roS5haqwbH0PmATvj9tTBZ1b636PAqu4grl6Aidbfa5pmGxEKYHjhleXA%2F5bXB2cUYt4Vt6l7QV7UxxiqwkctKqh3hh%2BvrkXBr6BizZIm%2FfaJQzMCSFLzD9%2BpvHBjqkAc3aoBbiTsiji%2FJtTYfNg3DS%2Fre%2BmgbKjQZZLsEYqXUJjlVkssk7GZxy6%2FF0qeBsVYmJM3dDUC5oolKdp993B8gs4bI%2BQrSa3%2F3HoZJ2yg04RVNq0hG5F%2BO%2F1hKJRxmjYo4lYTsNsrWX7Az7UafoQ74qC9mc0p1RsEOJwX1uvSrt1S8LCQcyxcckNsiaWv8KtLVwkqpX1DSp6NXyY%2Fsg6XKfYJYi&X-Amz-Signature=904e42068f0bc4f11d51fe39a8a5791892e8f64827cbe1bad10072f0c58492c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XS7MXXI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDQhkQz2SGZoYu1%2F5ZDh%2B9qADAZp5m1GnQ7VdNJgZI5lgIhAOnk85UKBdhNE9iNEiCtp8mxJBrxLeKKK3sX8JH2crZPKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtD7tmccDBjw1vZhAq3AMdsUGmeOyUtl75pQVDS6p00PT93DmuJ0QxewuL7hdW%2FCQmwIqKlmzBPHoR%2FjnR5FMDLND0MqIlQnOwYYEt5gV3ZxkA7DEYih8n47MjDGpgb5dFJz6JSjZ%2FxULFgQV7l%2BvtWgaQvJm0nnSSy4BSAvurL4owlN5mkBi1QA7j4HywaO7MH5%2BVYNKD8zmy8a9nHl5LchYKnbQg6pbRTJLMiLJf%2BjzeF5YgZsN3lRwzBrV8eY7zdrr8slFB%2FNIixRHZZE0IHOVvqwpM3fZixruH7UzoXSsSQ1KH9hqNe46QpykKI5G5z3HcbL2ybtxu4yraF8MUqpRNOeowNQNdWDsIQZ4GsILnFtoqnpjXdbuaXRCyT4qOyYxMXuPSrak4Q6gjYhT406YpqsQNy%2FSR7pkMPWfqCKGs505TaPPUYwfQGWOeh95V8uvggsw9hFeR0sL0xvg%2BEW4mBX9evlbtHIUaF67nz%2BdnKTvQ2eC0dElmVyezbxmOefOfR2anLSVpGCuwZcGH0Mkj5roS5haqwbH0PmATvj9tTBZ1b636PAqu4grl6Aidbfa5pmGxEKYHjhleXA%2F5bXB2cUYt4Vt6l7QV7UxxiqwkctKqh3hh%2BvrkXBr6BizZIm%2FfaJQzMCSFLzD9%2BpvHBjqkAc3aoBbiTsiji%2FJtTYfNg3DS%2Fre%2BmgbKjQZZLsEYqXUJjlVkssk7GZxy6%2FF0qeBsVYmJM3dDUC5oolKdp993B8gs4bI%2BQrSa3%2F3HoZJ2yg04RVNq0hG5F%2BO%2F1hKJRxmjYo4lYTsNsrWX7Az7UafoQ74qC9mc0p1RsEOJwX1uvSrt1S8LCQcyxcckNsiaWv8KtLVwkqpX1DSp6NXyY%2Fsg6XKfYJYi&X-Amz-Signature=f9878a49bac7f95bcc468eb3e14e11ab292469e55090a2e898f172c202b4517d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XS7MXXI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDQhkQz2SGZoYu1%2F5ZDh%2B9qADAZp5m1GnQ7VdNJgZI5lgIhAOnk85UKBdhNE9iNEiCtp8mxJBrxLeKKK3sX8JH2crZPKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtD7tmccDBjw1vZhAq3AMdsUGmeOyUtl75pQVDS6p00PT93DmuJ0QxewuL7hdW%2FCQmwIqKlmzBPHoR%2FjnR5FMDLND0MqIlQnOwYYEt5gV3ZxkA7DEYih8n47MjDGpgb5dFJz6JSjZ%2FxULFgQV7l%2BvtWgaQvJm0nnSSy4BSAvurL4owlN5mkBi1QA7j4HywaO7MH5%2BVYNKD8zmy8a9nHl5LchYKnbQg6pbRTJLMiLJf%2BjzeF5YgZsN3lRwzBrV8eY7zdrr8slFB%2FNIixRHZZE0IHOVvqwpM3fZixruH7UzoXSsSQ1KH9hqNe46QpykKI5G5z3HcbL2ybtxu4yraF8MUqpRNOeowNQNdWDsIQZ4GsILnFtoqnpjXdbuaXRCyT4qOyYxMXuPSrak4Q6gjYhT406YpqsQNy%2FSR7pkMPWfqCKGs505TaPPUYwfQGWOeh95V8uvggsw9hFeR0sL0xvg%2BEW4mBX9evlbtHIUaF67nz%2BdnKTvQ2eC0dElmVyezbxmOefOfR2anLSVpGCuwZcGH0Mkj5roS5haqwbH0PmATvj9tTBZ1b636PAqu4grl6Aidbfa5pmGxEKYHjhleXA%2F5bXB2cUYt4Vt6l7QV7UxxiqwkctKqh3hh%2BvrkXBr6BizZIm%2FfaJQzMCSFLzD9%2BpvHBjqkAc3aoBbiTsiji%2FJtTYfNg3DS%2Fre%2BmgbKjQZZLsEYqXUJjlVkssk7GZxy6%2FF0qeBsVYmJM3dDUC5oolKdp993B8gs4bI%2BQrSa3%2F3HoZJ2yg04RVNq0hG5F%2BO%2F1hKJRxmjYo4lYTsNsrWX7Az7UafoQ74qC9mc0p1RsEOJwX1uvSrt1S8LCQcyxcckNsiaWv8KtLVwkqpX1DSp6NXyY%2Fsg6XKfYJYi&X-Amz-Signature=bdcc4e8b4846c58154f2c7f8addfd1507c3b33fb806d5a52a12ffdec61d74420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XS7MXXI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDQhkQz2SGZoYu1%2F5ZDh%2B9qADAZp5m1GnQ7VdNJgZI5lgIhAOnk85UKBdhNE9iNEiCtp8mxJBrxLeKKK3sX8JH2crZPKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtD7tmccDBjw1vZhAq3AMdsUGmeOyUtl75pQVDS6p00PT93DmuJ0QxewuL7hdW%2FCQmwIqKlmzBPHoR%2FjnR5FMDLND0MqIlQnOwYYEt5gV3ZxkA7DEYih8n47MjDGpgb5dFJz6JSjZ%2FxULFgQV7l%2BvtWgaQvJm0nnSSy4BSAvurL4owlN5mkBi1QA7j4HywaO7MH5%2BVYNKD8zmy8a9nHl5LchYKnbQg6pbRTJLMiLJf%2BjzeF5YgZsN3lRwzBrV8eY7zdrr8slFB%2FNIixRHZZE0IHOVvqwpM3fZixruH7UzoXSsSQ1KH9hqNe46QpykKI5G5z3HcbL2ybtxu4yraF8MUqpRNOeowNQNdWDsIQZ4GsILnFtoqnpjXdbuaXRCyT4qOyYxMXuPSrak4Q6gjYhT406YpqsQNy%2FSR7pkMPWfqCKGs505TaPPUYwfQGWOeh95V8uvggsw9hFeR0sL0xvg%2BEW4mBX9evlbtHIUaF67nz%2BdnKTvQ2eC0dElmVyezbxmOefOfR2anLSVpGCuwZcGH0Mkj5roS5haqwbH0PmATvj9tTBZ1b636PAqu4grl6Aidbfa5pmGxEKYHjhleXA%2F5bXB2cUYt4Vt6l7QV7UxxiqwkctKqh3hh%2BvrkXBr6BizZIm%2FfaJQzMCSFLzD9%2BpvHBjqkAc3aoBbiTsiji%2FJtTYfNg3DS%2Fre%2BmgbKjQZZLsEYqXUJjlVkssk7GZxy6%2FF0qeBsVYmJM3dDUC5oolKdp993B8gs4bI%2BQrSa3%2F3HoZJ2yg04RVNq0hG5F%2BO%2F1hKJRxmjYo4lYTsNsrWX7Az7UafoQ74qC9mc0p1RsEOJwX1uvSrt1S8LCQcyxcckNsiaWv8KtLVwkqpX1DSp6NXyY%2Fsg6XKfYJYi&X-Amz-Signature=45d0cf1170d4f75a0c3cc6a358500ddff19639a27a071bda378705673aa515e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XS7MXXI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDQhkQz2SGZoYu1%2F5ZDh%2B9qADAZp5m1GnQ7VdNJgZI5lgIhAOnk85UKBdhNE9iNEiCtp8mxJBrxLeKKK3sX8JH2crZPKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtD7tmccDBjw1vZhAq3AMdsUGmeOyUtl75pQVDS6p00PT93DmuJ0QxewuL7hdW%2FCQmwIqKlmzBPHoR%2FjnR5FMDLND0MqIlQnOwYYEt5gV3ZxkA7DEYih8n47MjDGpgb5dFJz6JSjZ%2FxULFgQV7l%2BvtWgaQvJm0nnSSy4BSAvurL4owlN5mkBi1QA7j4HywaO7MH5%2BVYNKD8zmy8a9nHl5LchYKnbQg6pbRTJLMiLJf%2BjzeF5YgZsN3lRwzBrV8eY7zdrr8slFB%2FNIixRHZZE0IHOVvqwpM3fZixruH7UzoXSsSQ1KH9hqNe46QpykKI5G5z3HcbL2ybtxu4yraF8MUqpRNOeowNQNdWDsIQZ4GsILnFtoqnpjXdbuaXRCyT4qOyYxMXuPSrak4Q6gjYhT406YpqsQNy%2FSR7pkMPWfqCKGs505TaPPUYwfQGWOeh95V8uvggsw9hFeR0sL0xvg%2BEW4mBX9evlbtHIUaF67nz%2BdnKTvQ2eC0dElmVyezbxmOefOfR2anLSVpGCuwZcGH0Mkj5roS5haqwbH0PmATvj9tTBZ1b636PAqu4grl6Aidbfa5pmGxEKYHjhleXA%2F5bXB2cUYt4Vt6l7QV7UxxiqwkctKqh3hh%2BvrkXBr6BizZIm%2FfaJQzMCSFLzD9%2BpvHBjqkAc3aoBbiTsiji%2FJtTYfNg3DS%2Fre%2BmgbKjQZZLsEYqXUJjlVkssk7GZxy6%2FF0qeBsVYmJM3dDUC5oolKdp993B8gs4bI%2BQrSa3%2F3HoZJ2yg04RVNq0hG5F%2BO%2F1hKJRxmjYo4lYTsNsrWX7Az7UafoQ74qC9mc0p1RsEOJwX1uvSrt1S8LCQcyxcckNsiaWv8KtLVwkqpX1DSp6NXyY%2Fsg6XKfYJYi&X-Amz-Signature=60388be64646c0ce8813bc8f483c64d19e5cbfacb320ecb11e972b2dca772541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XS7MXXI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDQhkQz2SGZoYu1%2F5ZDh%2B9qADAZp5m1GnQ7VdNJgZI5lgIhAOnk85UKBdhNE9iNEiCtp8mxJBrxLeKKK3sX8JH2crZPKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtD7tmccDBjw1vZhAq3AMdsUGmeOyUtl75pQVDS6p00PT93DmuJ0QxewuL7hdW%2FCQmwIqKlmzBPHoR%2FjnR5FMDLND0MqIlQnOwYYEt5gV3ZxkA7DEYih8n47MjDGpgb5dFJz6JSjZ%2FxULFgQV7l%2BvtWgaQvJm0nnSSy4BSAvurL4owlN5mkBi1QA7j4HywaO7MH5%2BVYNKD8zmy8a9nHl5LchYKnbQg6pbRTJLMiLJf%2BjzeF5YgZsN3lRwzBrV8eY7zdrr8slFB%2FNIixRHZZE0IHOVvqwpM3fZixruH7UzoXSsSQ1KH9hqNe46QpykKI5G5z3HcbL2ybtxu4yraF8MUqpRNOeowNQNdWDsIQZ4GsILnFtoqnpjXdbuaXRCyT4qOyYxMXuPSrak4Q6gjYhT406YpqsQNy%2FSR7pkMPWfqCKGs505TaPPUYwfQGWOeh95V8uvggsw9hFeR0sL0xvg%2BEW4mBX9evlbtHIUaF67nz%2BdnKTvQ2eC0dElmVyezbxmOefOfR2anLSVpGCuwZcGH0Mkj5roS5haqwbH0PmATvj9tTBZ1b636PAqu4grl6Aidbfa5pmGxEKYHjhleXA%2F5bXB2cUYt4Vt6l7QV7UxxiqwkctKqh3hh%2BvrkXBr6BizZIm%2FfaJQzMCSFLzD9%2BpvHBjqkAc3aoBbiTsiji%2FJtTYfNg3DS%2Fre%2BmgbKjQZZLsEYqXUJjlVkssk7GZxy6%2FF0qeBsVYmJM3dDUC5oolKdp993B8gs4bI%2BQrSa3%2F3HoZJ2yg04RVNq0hG5F%2BO%2F1hKJRxmjYo4lYTsNsrWX7Az7UafoQ74qC9mc0p1RsEOJwX1uvSrt1S8LCQcyxcckNsiaWv8KtLVwkqpX1DSp6NXyY%2Fsg6XKfYJYi&X-Amz-Signature=0dd5e79a17e2f2befc5d6ab1b570b95ac07c11207d9de806d69e2240c2b319c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XS7MXXI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDQhkQz2SGZoYu1%2F5ZDh%2B9qADAZp5m1GnQ7VdNJgZI5lgIhAOnk85UKBdhNE9iNEiCtp8mxJBrxLeKKK3sX8JH2crZPKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtD7tmccDBjw1vZhAq3AMdsUGmeOyUtl75pQVDS6p00PT93DmuJ0QxewuL7hdW%2FCQmwIqKlmzBPHoR%2FjnR5FMDLND0MqIlQnOwYYEt5gV3ZxkA7DEYih8n47MjDGpgb5dFJz6JSjZ%2FxULFgQV7l%2BvtWgaQvJm0nnSSy4BSAvurL4owlN5mkBi1QA7j4HywaO7MH5%2BVYNKD8zmy8a9nHl5LchYKnbQg6pbRTJLMiLJf%2BjzeF5YgZsN3lRwzBrV8eY7zdrr8slFB%2FNIixRHZZE0IHOVvqwpM3fZixruH7UzoXSsSQ1KH9hqNe46QpykKI5G5z3HcbL2ybtxu4yraF8MUqpRNOeowNQNdWDsIQZ4GsILnFtoqnpjXdbuaXRCyT4qOyYxMXuPSrak4Q6gjYhT406YpqsQNy%2FSR7pkMPWfqCKGs505TaPPUYwfQGWOeh95V8uvggsw9hFeR0sL0xvg%2BEW4mBX9evlbtHIUaF67nz%2BdnKTvQ2eC0dElmVyezbxmOefOfR2anLSVpGCuwZcGH0Mkj5roS5haqwbH0PmATvj9tTBZ1b636PAqu4grl6Aidbfa5pmGxEKYHjhleXA%2F5bXB2cUYt4Vt6l7QV7UxxiqwkctKqh3hh%2BvrkXBr6BizZIm%2FfaJQzMCSFLzD9%2BpvHBjqkAc3aoBbiTsiji%2FJtTYfNg3DS%2Fre%2BmgbKjQZZLsEYqXUJjlVkssk7GZxy6%2FF0qeBsVYmJM3dDUC5oolKdp993B8gs4bI%2BQrSa3%2F3HoZJ2yg04RVNq0hG5F%2BO%2F1hKJRxmjYo4lYTsNsrWX7Az7UafoQ74qC9mc0p1RsEOJwX1uvSrt1S8LCQcyxcckNsiaWv8KtLVwkqpX1DSp6NXyY%2Fsg6XKfYJYi&X-Amz-Signature=91ad63d03145a96203d02a4e25a0d296b1d791e471b08ceb35f9b90eaddc6761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XS7MXXI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDQhkQz2SGZoYu1%2F5ZDh%2B9qADAZp5m1GnQ7VdNJgZI5lgIhAOnk85UKBdhNE9iNEiCtp8mxJBrxLeKKK3sX8JH2crZPKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtD7tmccDBjw1vZhAq3AMdsUGmeOyUtl75pQVDS6p00PT93DmuJ0QxewuL7hdW%2FCQmwIqKlmzBPHoR%2FjnR5FMDLND0MqIlQnOwYYEt5gV3ZxkA7DEYih8n47MjDGpgb5dFJz6JSjZ%2FxULFgQV7l%2BvtWgaQvJm0nnSSy4BSAvurL4owlN5mkBi1QA7j4HywaO7MH5%2BVYNKD8zmy8a9nHl5LchYKnbQg6pbRTJLMiLJf%2BjzeF5YgZsN3lRwzBrV8eY7zdrr8slFB%2FNIixRHZZE0IHOVvqwpM3fZixruH7UzoXSsSQ1KH9hqNe46QpykKI5G5z3HcbL2ybtxu4yraF8MUqpRNOeowNQNdWDsIQZ4GsILnFtoqnpjXdbuaXRCyT4qOyYxMXuPSrak4Q6gjYhT406YpqsQNy%2FSR7pkMPWfqCKGs505TaPPUYwfQGWOeh95V8uvggsw9hFeR0sL0xvg%2BEW4mBX9evlbtHIUaF67nz%2BdnKTvQ2eC0dElmVyezbxmOefOfR2anLSVpGCuwZcGH0Mkj5roS5haqwbH0PmATvj9tTBZ1b636PAqu4grl6Aidbfa5pmGxEKYHjhleXA%2F5bXB2cUYt4Vt6l7QV7UxxiqwkctKqh3hh%2BvrkXBr6BizZIm%2FfaJQzMCSFLzD9%2BpvHBjqkAc3aoBbiTsiji%2FJtTYfNg3DS%2Fre%2BmgbKjQZZLsEYqXUJjlVkssk7GZxy6%2FF0qeBsVYmJM3dDUC5oolKdp993B8gs4bI%2BQrSa3%2F3HoZJ2yg04RVNq0hG5F%2BO%2F1hKJRxmjYo4lYTsNsrWX7Az7UafoQ74qC9mc0p1RsEOJwX1uvSrt1S8LCQcyxcckNsiaWv8KtLVwkqpX1DSp6NXyY%2Fsg6XKfYJYi&X-Amz-Signature=e93da003d738d4be8ec3aac8c4fad521134152f408c753b5f506bbadc171bcef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
