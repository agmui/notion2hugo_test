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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3FRAZB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwAn8FOK5jF1kNU2mmIpKyps5i3flS5zUvFXJP3HlgKAiBli%2F1KI4Qqm7Y6BcZftsYM8S1B9yGFbONhXRzLT7tbXiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sZl6a2Yeis1qhV%2BKtwD1x0JYh1NQQb04HkjTUbgBJ%2Bq3Re5nwKUfnhBsxJHqd0NNydjpKuRK2iuGuCaKfNWfp7nutr1Z4T9pRC3PPppmxph%2BVM0hdd8AHXXcj7XAfly7vt%2B59hus98HbpXx56TC%2BH32s3KfOUsIzmYN8rzxt7hM8JrBPm%2BNo9soS9CkhFQ%2FZlXfWN5VjcGsx8pl%2B%2F3J5zbeY3vmkS9rl2UBuNT7BsWSMUhlOPEjhzlLeA%2Bm1u9riT3kpUWMoF45QUDNLHIRd3fPHyIuRCO8fIj56%2Fawoun4GaVArQI36zmxOfs7El6W1hw1raGZ3Ts7ys%2FesOQ4rM03XCyU7USaEr0ManVsF98FPYgEISWzS0Rrwm2ncL3XhHCHOP2H8EeyBwzCfVrLgdWl0gYi0Bngph29uXaJRXbF2IKtfg9FNySyF7Kf%2B9zPLzyf%2BVFqF%2FWP8St1YK0PoQHIHe7SFG9wNN%2BLFBEpfV235kKQeEYs%2FSaGXlbrRYVIl%2Baw4rWSoh78iHtJmLBnU0bWqnedUXiyyqP3oTJ%2F2jioH4T5%2Bcl5pJQ%2BszUc0r1FaMRSO9WwmnqXtfKH3TwqPwOsibnc7mszOT5iW4dnj%2BMTgFLJPYQyt573EylQASKjiVaQPUWK1BFzwPkwiPnmxAY6pgH896TgLw0QZFcbpewbhLnAdyad6KXffVFpAY8hjInvWbsDcVYvmj%2BpMCB8oXRkj05Rhr8PqWnv%2FL9JsLAbj%2B7fly4%2B%2BDAka7%2BJrkeqvfTbfn62WpuLLsPxZ0NjVxDKxs0Z0nyh94h97%2B73O6zfT6JVelzMvWH%2FaOy4C2JdK%2Fj03h62SN2nRe4Qw396LwNvGbpqa8dK7PwxhgxyZyWOce%2BPjKttao3l&X-Amz-Signature=fe56e6892cffffe623c3798994ff901772b72b16586b862f33384e3befe4ad60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3FRAZB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwAn8FOK5jF1kNU2mmIpKyps5i3flS5zUvFXJP3HlgKAiBli%2F1KI4Qqm7Y6BcZftsYM8S1B9yGFbONhXRzLT7tbXiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sZl6a2Yeis1qhV%2BKtwD1x0JYh1NQQb04HkjTUbgBJ%2Bq3Re5nwKUfnhBsxJHqd0NNydjpKuRK2iuGuCaKfNWfp7nutr1Z4T9pRC3PPppmxph%2BVM0hdd8AHXXcj7XAfly7vt%2B59hus98HbpXx56TC%2BH32s3KfOUsIzmYN8rzxt7hM8JrBPm%2BNo9soS9CkhFQ%2FZlXfWN5VjcGsx8pl%2B%2F3J5zbeY3vmkS9rl2UBuNT7BsWSMUhlOPEjhzlLeA%2Bm1u9riT3kpUWMoF45QUDNLHIRd3fPHyIuRCO8fIj56%2Fawoun4GaVArQI36zmxOfs7El6W1hw1raGZ3Ts7ys%2FesOQ4rM03XCyU7USaEr0ManVsF98FPYgEISWzS0Rrwm2ncL3XhHCHOP2H8EeyBwzCfVrLgdWl0gYi0Bngph29uXaJRXbF2IKtfg9FNySyF7Kf%2B9zPLzyf%2BVFqF%2FWP8St1YK0PoQHIHe7SFG9wNN%2BLFBEpfV235kKQeEYs%2FSaGXlbrRYVIl%2Baw4rWSoh78iHtJmLBnU0bWqnedUXiyyqP3oTJ%2F2jioH4T5%2Bcl5pJQ%2BszUc0r1FaMRSO9WwmnqXtfKH3TwqPwOsibnc7mszOT5iW4dnj%2BMTgFLJPYQyt573EylQASKjiVaQPUWK1BFzwPkwiPnmxAY6pgH896TgLw0QZFcbpewbhLnAdyad6KXffVFpAY8hjInvWbsDcVYvmj%2BpMCB8oXRkj05Rhr8PqWnv%2FL9JsLAbj%2B7fly4%2B%2BDAka7%2BJrkeqvfTbfn62WpuLLsPxZ0NjVxDKxs0Z0nyh94h97%2B73O6zfT6JVelzMvWH%2FaOy4C2JdK%2Fj03h62SN2nRe4Qw396LwNvGbpqa8dK7PwxhgxyZyWOce%2BPjKttao3l&X-Amz-Signature=6c69d636c107e32120cb544b32854a1ce24d8952a1502dcb3ffaa18c0c06b5f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3FRAZB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwAn8FOK5jF1kNU2mmIpKyps5i3flS5zUvFXJP3HlgKAiBli%2F1KI4Qqm7Y6BcZftsYM8S1B9yGFbONhXRzLT7tbXiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sZl6a2Yeis1qhV%2BKtwD1x0JYh1NQQb04HkjTUbgBJ%2Bq3Re5nwKUfnhBsxJHqd0NNydjpKuRK2iuGuCaKfNWfp7nutr1Z4T9pRC3PPppmxph%2BVM0hdd8AHXXcj7XAfly7vt%2B59hus98HbpXx56TC%2BH32s3KfOUsIzmYN8rzxt7hM8JrBPm%2BNo9soS9CkhFQ%2FZlXfWN5VjcGsx8pl%2B%2F3J5zbeY3vmkS9rl2UBuNT7BsWSMUhlOPEjhzlLeA%2Bm1u9riT3kpUWMoF45QUDNLHIRd3fPHyIuRCO8fIj56%2Fawoun4GaVArQI36zmxOfs7El6W1hw1raGZ3Ts7ys%2FesOQ4rM03XCyU7USaEr0ManVsF98FPYgEISWzS0Rrwm2ncL3XhHCHOP2H8EeyBwzCfVrLgdWl0gYi0Bngph29uXaJRXbF2IKtfg9FNySyF7Kf%2B9zPLzyf%2BVFqF%2FWP8St1YK0PoQHIHe7SFG9wNN%2BLFBEpfV235kKQeEYs%2FSaGXlbrRYVIl%2Baw4rWSoh78iHtJmLBnU0bWqnedUXiyyqP3oTJ%2F2jioH4T5%2Bcl5pJQ%2BszUc0r1FaMRSO9WwmnqXtfKH3TwqPwOsibnc7mszOT5iW4dnj%2BMTgFLJPYQyt573EylQASKjiVaQPUWK1BFzwPkwiPnmxAY6pgH896TgLw0QZFcbpewbhLnAdyad6KXffVFpAY8hjInvWbsDcVYvmj%2BpMCB8oXRkj05Rhr8PqWnv%2FL9JsLAbj%2B7fly4%2B%2BDAka7%2BJrkeqvfTbfn62WpuLLsPxZ0NjVxDKxs0Z0nyh94h97%2B73O6zfT6JVelzMvWH%2FaOy4C2JdK%2Fj03h62SN2nRe4Qw396LwNvGbpqa8dK7PwxhgxyZyWOce%2BPjKttao3l&X-Amz-Signature=762c972391cbbdfe19cfafb31fd86af01aa41dedc8ea4854db41050cee9815b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3FRAZB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwAn8FOK5jF1kNU2mmIpKyps5i3flS5zUvFXJP3HlgKAiBli%2F1KI4Qqm7Y6BcZftsYM8S1B9yGFbONhXRzLT7tbXiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sZl6a2Yeis1qhV%2BKtwD1x0JYh1NQQb04HkjTUbgBJ%2Bq3Re5nwKUfnhBsxJHqd0NNydjpKuRK2iuGuCaKfNWfp7nutr1Z4T9pRC3PPppmxph%2BVM0hdd8AHXXcj7XAfly7vt%2B59hus98HbpXx56TC%2BH32s3KfOUsIzmYN8rzxt7hM8JrBPm%2BNo9soS9CkhFQ%2FZlXfWN5VjcGsx8pl%2B%2F3J5zbeY3vmkS9rl2UBuNT7BsWSMUhlOPEjhzlLeA%2Bm1u9riT3kpUWMoF45QUDNLHIRd3fPHyIuRCO8fIj56%2Fawoun4GaVArQI36zmxOfs7El6W1hw1raGZ3Ts7ys%2FesOQ4rM03XCyU7USaEr0ManVsF98FPYgEISWzS0Rrwm2ncL3XhHCHOP2H8EeyBwzCfVrLgdWl0gYi0Bngph29uXaJRXbF2IKtfg9FNySyF7Kf%2B9zPLzyf%2BVFqF%2FWP8St1YK0PoQHIHe7SFG9wNN%2BLFBEpfV235kKQeEYs%2FSaGXlbrRYVIl%2Baw4rWSoh78iHtJmLBnU0bWqnedUXiyyqP3oTJ%2F2jioH4T5%2Bcl5pJQ%2BszUc0r1FaMRSO9WwmnqXtfKH3TwqPwOsibnc7mszOT5iW4dnj%2BMTgFLJPYQyt573EylQASKjiVaQPUWK1BFzwPkwiPnmxAY6pgH896TgLw0QZFcbpewbhLnAdyad6KXffVFpAY8hjInvWbsDcVYvmj%2BpMCB8oXRkj05Rhr8PqWnv%2FL9JsLAbj%2B7fly4%2B%2BDAka7%2BJrkeqvfTbfn62WpuLLsPxZ0NjVxDKxs0Z0nyh94h97%2B73O6zfT6JVelzMvWH%2FaOy4C2JdK%2Fj03h62SN2nRe4Qw396LwNvGbpqa8dK7PwxhgxyZyWOce%2BPjKttao3l&X-Amz-Signature=41a0519c3ac3a9db62ec14118be476111db85e1dd4e55f57bf3c726f0183e71f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3FRAZB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwAn8FOK5jF1kNU2mmIpKyps5i3flS5zUvFXJP3HlgKAiBli%2F1KI4Qqm7Y6BcZftsYM8S1B9yGFbONhXRzLT7tbXiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sZl6a2Yeis1qhV%2BKtwD1x0JYh1NQQb04HkjTUbgBJ%2Bq3Re5nwKUfnhBsxJHqd0NNydjpKuRK2iuGuCaKfNWfp7nutr1Z4T9pRC3PPppmxph%2BVM0hdd8AHXXcj7XAfly7vt%2B59hus98HbpXx56TC%2BH32s3KfOUsIzmYN8rzxt7hM8JrBPm%2BNo9soS9CkhFQ%2FZlXfWN5VjcGsx8pl%2B%2F3J5zbeY3vmkS9rl2UBuNT7BsWSMUhlOPEjhzlLeA%2Bm1u9riT3kpUWMoF45QUDNLHIRd3fPHyIuRCO8fIj56%2Fawoun4GaVArQI36zmxOfs7El6W1hw1raGZ3Ts7ys%2FesOQ4rM03XCyU7USaEr0ManVsF98FPYgEISWzS0Rrwm2ncL3XhHCHOP2H8EeyBwzCfVrLgdWl0gYi0Bngph29uXaJRXbF2IKtfg9FNySyF7Kf%2B9zPLzyf%2BVFqF%2FWP8St1YK0PoQHIHe7SFG9wNN%2BLFBEpfV235kKQeEYs%2FSaGXlbrRYVIl%2Baw4rWSoh78iHtJmLBnU0bWqnedUXiyyqP3oTJ%2F2jioH4T5%2Bcl5pJQ%2BszUc0r1FaMRSO9WwmnqXtfKH3TwqPwOsibnc7mszOT5iW4dnj%2BMTgFLJPYQyt573EylQASKjiVaQPUWK1BFzwPkwiPnmxAY6pgH896TgLw0QZFcbpewbhLnAdyad6KXffVFpAY8hjInvWbsDcVYvmj%2BpMCB8oXRkj05Rhr8PqWnv%2FL9JsLAbj%2B7fly4%2B%2BDAka7%2BJrkeqvfTbfn62WpuLLsPxZ0NjVxDKxs0Z0nyh94h97%2B73O6zfT6JVelzMvWH%2FaOy4C2JdK%2Fj03h62SN2nRe4Qw396LwNvGbpqa8dK7PwxhgxyZyWOce%2BPjKttao3l&X-Amz-Signature=4aead1b85f6dfb9fa0b7ecac7e74ec6b5d142f55004fd1d9a26275bd2e1ba310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3FRAZB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwAn8FOK5jF1kNU2mmIpKyps5i3flS5zUvFXJP3HlgKAiBli%2F1KI4Qqm7Y6BcZftsYM8S1B9yGFbONhXRzLT7tbXiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sZl6a2Yeis1qhV%2BKtwD1x0JYh1NQQb04HkjTUbgBJ%2Bq3Re5nwKUfnhBsxJHqd0NNydjpKuRK2iuGuCaKfNWfp7nutr1Z4T9pRC3PPppmxph%2BVM0hdd8AHXXcj7XAfly7vt%2B59hus98HbpXx56TC%2BH32s3KfOUsIzmYN8rzxt7hM8JrBPm%2BNo9soS9CkhFQ%2FZlXfWN5VjcGsx8pl%2B%2F3J5zbeY3vmkS9rl2UBuNT7BsWSMUhlOPEjhzlLeA%2Bm1u9riT3kpUWMoF45QUDNLHIRd3fPHyIuRCO8fIj56%2Fawoun4GaVArQI36zmxOfs7El6W1hw1raGZ3Ts7ys%2FesOQ4rM03XCyU7USaEr0ManVsF98FPYgEISWzS0Rrwm2ncL3XhHCHOP2H8EeyBwzCfVrLgdWl0gYi0Bngph29uXaJRXbF2IKtfg9FNySyF7Kf%2B9zPLzyf%2BVFqF%2FWP8St1YK0PoQHIHe7SFG9wNN%2BLFBEpfV235kKQeEYs%2FSaGXlbrRYVIl%2Baw4rWSoh78iHtJmLBnU0bWqnedUXiyyqP3oTJ%2F2jioH4T5%2Bcl5pJQ%2BszUc0r1FaMRSO9WwmnqXtfKH3TwqPwOsibnc7mszOT5iW4dnj%2BMTgFLJPYQyt573EylQASKjiVaQPUWK1BFzwPkwiPnmxAY6pgH896TgLw0QZFcbpewbhLnAdyad6KXffVFpAY8hjInvWbsDcVYvmj%2BpMCB8oXRkj05Rhr8PqWnv%2FL9JsLAbj%2B7fly4%2B%2BDAka7%2BJrkeqvfTbfn62WpuLLsPxZ0NjVxDKxs0Z0nyh94h97%2B73O6zfT6JVelzMvWH%2FaOy4C2JdK%2Fj03h62SN2nRe4Qw396LwNvGbpqa8dK7PwxhgxyZyWOce%2BPjKttao3l&X-Amz-Signature=748ac8daf90caf26276a3f3f1438219e4687a9f868e2fdcfd759ff9ad0df0641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3FRAZB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwAn8FOK5jF1kNU2mmIpKyps5i3flS5zUvFXJP3HlgKAiBli%2F1KI4Qqm7Y6BcZftsYM8S1B9yGFbONhXRzLT7tbXiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sZl6a2Yeis1qhV%2BKtwD1x0JYh1NQQb04HkjTUbgBJ%2Bq3Re5nwKUfnhBsxJHqd0NNydjpKuRK2iuGuCaKfNWfp7nutr1Z4T9pRC3PPppmxph%2BVM0hdd8AHXXcj7XAfly7vt%2B59hus98HbpXx56TC%2BH32s3KfOUsIzmYN8rzxt7hM8JrBPm%2BNo9soS9CkhFQ%2FZlXfWN5VjcGsx8pl%2B%2F3J5zbeY3vmkS9rl2UBuNT7BsWSMUhlOPEjhzlLeA%2Bm1u9riT3kpUWMoF45QUDNLHIRd3fPHyIuRCO8fIj56%2Fawoun4GaVArQI36zmxOfs7El6W1hw1raGZ3Ts7ys%2FesOQ4rM03XCyU7USaEr0ManVsF98FPYgEISWzS0Rrwm2ncL3XhHCHOP2H8EeyBwzCfVrLgdWl0gYi0Bngph29uXaJRXbF2IKtfg9FNySyF7Kf%2B9zPLzyf%2BVFqF%2FWP8St1YK0PoQHIHe7SFG9wNN%2BLFBEpfV235kKQeEYs%2FSaGXlbrRYVIl%2Baw4rWSoh78iHtJmLBnU0bWqnedUXiyyqP3oTJ%2F2jioH4T5%2Bcl5pJQ%2BszUc0r1FaMRSO9WwmnqXtfKH3TwqPwOsibnc7mszOT5iW4dnj%2BMTgFLJPYQyt573EylQASKjiVaQPUWK1BFzwPkwiPnmxAY6pgH896TgLw0QZFcbpewbhLnAdyad6KXffVFpAY8hjInvWbsDcVYvmj%2BpMCB8oXRkj05Rhr8PqWnv%2FL9JsLAbj%2B7fly4%2B%2BDAka7%2BJrkeqvfTbfn62WpuLLsPxZ0NjVxDKxs0Z0nyh94h97%2B73O6zfT6JVelzMvWH%2FaOy4C2JdK%2Fj03h62SN2nRe4Qw396LwNvGbpqa8dK7PwxhgxyZyWOce%2BPjKttao3l&X-Amz-Signature=c4ed63f8057531c8366b0ed5d214d55d6ebdeaf06f06ae9ed7d349b8dd1e8943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3FRAZB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwAn8FOK5jF1kNU2mmIpKyps5i3flS5zUvFXJP3HlgKAiBli%2F1KI4Qqm7Y6BcZftsYM8S1B9yGFbONhXRzLT7tbXiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sZl6a2Yeis1qhV%2BKtwD1x0JYh1NQQb04HkjTUbgBJ%2Bq3Re5nwKUfnhBsxJHqd0NNydjpKuRK2iuGuCaKfNWfp7nutr1Z4T9pRC3PPppmxph%2BVM0hdd8AHXXcj7XAfly7vt%2B59hus98HbpXx56TC%2BH32s3KfOUsIzmYN8rzxt7hM8JrBPm%2BNo9soS9CkhFQ%2FZlXfWN5VjcGsx8pl%2B%2F3J5zbeY3vmkS9rl2UBuNT7BsWSMUhlOPEjhzlLeA%2Bm1u9riT3kpUWMoF45QUDNLHIRd3fPHyIuRCO8fIj56%2Fawoun4GaVArQI36zmxOfs7El6W1hw1raGZ3Ts7ys%2FesOQ4rM03XCyU7USaEr0ManVsF98FPYgEISWzS0Rrwm2ncL3XhHCHOP2H8EeyBwzCfVrLgdWl0gYi0Bngph29uXaJRXbF2IKtfg9FNySyF7Kf%2B9zPLzyf%2BVFqF%2FWP8St1YK0PoQHIHe7SFG9wNN%2BLFBEpfV235kKQeEYs%2FSaGXlbrRYVIl%2Baw4rWSoh78iHtJmLBnU0bWqnedUXiyyqP3oTJ%2F2jioH4T5%2Bcl5pJQ%2BszUc0r1FaMRSO9WwmnqXtfKH3TwqPwOsibnc7mszOT5iW4dnj%2BMTgFLJPYQyt573EylQASKjiVaQPUWK1BFzwPkwiPnmxAY6pgH896TgLw0QZFcbpewbhLnAdyad6KXffVFpAY8hjInvWbsDcVYvmj%2BpMCB8oXRkj05Rhr8PqWnv%2FL9JsLAbj%2B7fly4%2B%2BDAka7%2BJrkeqvfTbfn62WpuLLsPxZ0NjVxDKxs0Z0nyh94h97%2B73O6zfT6JVelzMvWH%2FaOy4C2JdK%2Fj03h62SN2nRe4Qw396LwNvGbpqa8dK7PwxhgxyZyWOce%2BPjKttao3l&X-Amz-Signature=d953240c79f109cd14f160430dafb2acfdd33c2299e64b8414d7a00fcaf545b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3FRAZB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwAn8FOK5jF1kNU2mmIpKyps5i3flS5zUvFXJP3HlgKAiBli%2F1KI4Qqm7Y6BcZftsYM8S1B9yGFbONhXRzLT7tbXiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sZl6a2Yeis1qhV%2BKtwD1x0JYh1NQQb04HkjTUbgBJ%2Bq3Re5nwKUfnhBsxJHqd0NNydjpKuRK2iuGuCaKfNWfp7nutr1Z4T9pRC3PPppmxph%2BVM0hdd8AHXXcj7XAfly7vt%2B59hus98HbpXx56TC%2BH32s3KfOUsIzmYN8rzxt7hM8JrBPm%2BNo9soS9CkhFQ%2FZlXfWN5VjcGsx8pl%2B%2F3J5zbeY3vmkS9rl2UBuNT7BsWSMUhlOPEjhzlLeA%2Bm1u9riT3kpUWMoF45QUDNLHIRd3fPHyIuRCO8fIj56%2Fawoun4GaVArQI36zmxOfs7El6W1hw1raGZ3Ts7ys%2FesOQ4rM03XCyU7USaEr0ManVsF98FPYgEISWzS0Rrwm2ncL3XhHCHOP2H8EeyBwzCfVrLgdWl0gYi0Bngph29uXaJRXbF2IKtfg9FNySyF7Kf%2B9zPLzyf%2BVFqF%2FWP8St1YK0PoQHIHe7SFG9wNN%2BLFBEpfV235kKQeEYs%2FSaGXlbrRYVIl%2Baw4rWSoh78iHtJmLBnU0bWqnedUXiyyqP3oTJ%2F2jioH4T5%2Bcl5pJQ%2BszUc0r1FaMRSO9WwmnqXtfKH3TwqPwOsibnc7mszOT5iW4dnj%2BMTgFLJPYQyt573EylQASKjiVaQPUWK1BFzwPkwiPnmxAY6pgH896TgLw0QZFcbpewbhLnAdyad6KXffVFpAY8hjInvWbsDcVYvmj%2BpMCB8oXRkj05Rhr8PqWnv%2FL9JsLAbj%2B7fly4%2B%2BDAka7%2BJrkeqvfTbfn62WpuLLsPxZ0NjVxDKxs0Z0nyh94h97%2B73O6zfT6JVelzMvWH%2FaOy4C2JdK%2Fj03h62SN2nRe4Qw396LwNvGbpqa8dK7PwxhgxyZyWOce%2BPjKttao3l&X-Amz-Signature=02047091251f78421be8d27e6a4128beaf4641c8adf28929dd19183cb9636ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3FRAZB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwAn8FOK5jF1kNU2mmIpKyps5i3flS5zUvFXJP3HlgKAiBli%2F1KI4Qqm7Y6BcZftsYM8S1B9yGFbONhXRzLT7tbXiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sZl6a2Yeis1qhV%2BKtwD1x0JYh1NQQb04HkjTUbgBJ%2Bq3Re5nwKUfnhBsxJHqd0NNydjpKuRK2iuGuCaKfNWfp7nutr1Z4T9pRC3PPppmxph%2BVM0hdd8AHXXcj7XAfly7vt%2B59hus98HbpXx56TC%2BH32s3KfOUsIzmYN8rzxt7hM8JrBPm%2BNo9soS9CkhFQ%2FZlXfWN5VjcGsx8pl%2B%2F3J5zbeY3vmkS9rl2UBuNT7BsWSMUhlOPEjhzlLeA%2Bm1u9riT3kpUWMoF45QUDNLHIRd3fPHyIuRCO8fIj56%2Fawoun4GaVArQI36zmxOfs7El6W1hw1raGZ3Ts7ys%2FesOQ4rM03XCyU7USaEr0ManVsF98FPYgEISWzS0Rrwm2ncL3XhHCHOP2H8EeyBwzCfVrLgdWl0gYi0Bngph29uXaJRXbF2IKtfg9FNySyF7Kf%2B9zPLzyf%2BVFqF%2FWP8St1YK0PoQHIHe7SFG9wNN%2BLFBEpfV235kKQeEYs%2FSaGXlbrRYVIl%2Baw4rWSoh78iHtJmLBnU0bWqnedUXiyyqP3oTJ%2F2jioH4T5%2Bcl5pJQ%2BszUc0r1FaMRSO9WwmnqXtfKH3TwqPwOsibnc7mszOT5iW4dnj%2BMTgFLJPYQyt573EylQASKjiVaQPUWK1BFzwPkwiPnmxAY6pgH896TgLw0QZFcbpewbhLnAdyad6KXffVFpAY8hjInvWbsDcVYvmj%2BpMCB8oXRkj05Rhr8PqWnv%2FL9JsLAbj%2B7fly4%2B%2BDAka7%2BJrkeqvfTbfn62WpuLLsPxZ0NjVxDKxs0Z0nyh94h97%2B73O6zfT6JVelzMvWH%2FaOy4C2JdK%2Fj03h62SN2nRe4Qw396LwNvGbpqa8dK7PwxhgxyZyWOce%2BPjKttao3l&X-Amz-Signature=c2b3d0a81c39b0fe5363f8b8881e7c3f0529dd1fc95f11c3e66019e400d0f906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3FRAZB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwAn8FOK5jF1kNU2mmIpKyps5i3flS5zUvFXJP3HlgKAiBli%2F1KI4Qqm7Y6BcZftsYM8S1B9yGFbONhXRzLT7tbXiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sZl6a2Yeis1qhV%2BKtwD1x0JYh1NQQb04HkjTUbgBJ%2Bq3Re5nwKUfnhBsxJHqd0NNydjpKuRK2iuGuCaKfNWfp7nutr1Z4T9pRC3PPppmxph%2BVM0hdd8AHXXcj7XAfly7vt%2B59hus98HbpXx56TC%2BH32s3KfOUsIzmYN8rzxt7hM8JrBPm%2BNo9soS9CkhFQ%2FZlXfWN5VjcGsx8pl%2B%2F3J5zbeY3vmkS9rl2UBuNT7BsWSMUhlOPEjhzlLeA%2Bm1u9riT3kpUWMoF45QUDNLHIRd3fPHyIuRCO8fIj56%2Fawoun4GaVArQI36zmxOfs7El6W1hw1raGZ3Ts7ys%2FesOQ4rM03XCyU7USaEr0ManVsF98FPYgEISWzS0Rrwm2ncL3XhHCHOP2H8EeyBwzCfVrLgdWl0gYi0Bngph29uXaJRXbF2IKtfg9FNySyF7Kf%2B9zPLzyf%2BVFqF%2FWP8St1YK0PoQHIHe7SFG9wNN%2BLFBEpfV235kKQeEYs%2FSaGXlbrRYVIl%2Baw4rWSoh78iHtJmLBnU0bWqnedUXiyyqP3oTJ%2F2jioH4T5%2Bcl5pJQ%2BszUc0r1FaMRSO9WwmnqXtfKH3TwqPwOsibnc7mszOT5iW4dnj%2BMTgFLJPYQyt573EylQASKjiVaQPUWK1BFzwPkwiPnmxAY6pgH896TgLw0QZFcbpewbhLnAdyad6KXffVFpAY8hjInvWbsDcVYvmj%2BpMCB8oXRkj05Rhr8PqWnv%2FL9JsLAbj%2B7fly4%2B%2BDAka7%2BJrkeqvfTbfn62WpuLLsPxZ0NjVxDKxs0Z0nyh94h97%2B73O6zfT6JVelzMvWH%2FaOy4C2JdK%2Fj03h62SN2nRe4Qw396LwNvGbpqa8dK7PwxhgxyZyWOce%2BPjKttao3l&X-Amz-Signature=bdd140fbc65d8b1654768fe84b8bc43348d83161d946520bf094eb454c06b921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3FRAZB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwAn8FOK5jF1kNU2mmIpKyps5i3flS5zUvFXJP3HlgKAiBli%2F1KI4Qqm7Y6BcZftsYM8S1B9yGFbONhXRzLT7tbXiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sZl6a2Yeis1qhV%2BKtwD1x0JYh1NQQb04HkjTUbgBJ%2Bq3Re5nwKUfnhBsxJHqd0NNydjpKuRK2iuGuCaKfNWfp7nutr1Z4T9pRC3PPppmxph%2BVM0hdd8AHXXcj7XAfly7vt%2B59hus98HbpXx56TC%2BH32s3KfOUsIzmYN8rzxt7hM8JrBPm%2BNo9soS9CkhFQ%2FZlXfWN5VjcGsx8pl%2B%2F3J5zbeY3vmkS9rl2UBuNT7BsWSMUhlOPEjhzlLeA%2Bm1u9riT3kpUWMoF45QUDNLHIRd3fPHyIuRCO8fIj56%2Fawoun4GaVArQI36zmxOfs7El6W1hw1raGZ3Ts7ys%2FesOQ4rM03XCyU7USaEr0ManVsF98FPYgEISWzS0Rrwm2ncL3XhHCHOP2H8EeyBwzCfVrLgdWl0gYi0Bngph29uXaJRXbF2IKtfg9FNySyF7Kf%2B9zPLzyf%2BVFqF%2FWP8St1YK0PoQHIHe7SFG9wNN%2BLFBEpfV235kKQeEYs%2FSaGXlbrRYVIl%2Baw4rWSoh78iHtJmLBnU0bWqnedUXiyyqP3oTJ%2F2jioH4T5%2Bcl5pJQ%2BszUc0r1FaMRSO9WwmnqXtfKH3TwqPwOsibnc7mszOT5iW4dnj%2BMTgFLJPYQyt573EylQASKjiVaQPUWK1BFzwPkwiPnmxAY6pgH896TgLw0QZFcbpewbhLnAdyad6KXffVFpAY8hjInvWbsDcVYvmj%2BpMCB8oXRkj05Rhr8PqWnv%2FL9JsLAbj%2B7fly4%2B%2BDAka7%2BJrkeqvfTbfn62WpuLLsPxZ0NjVxDKxs0Z0nyh94h97%2B73O6zfT6JVelzMvWH%2FaOy4C2JdK%2Fj03h62SN2nRe4Qw396LwNvGbpqa8dK7PwxhgxyZyWOce%2BPjKttao3l&X-Amz-Signature=58ddbcb29477668e64c374198adda7bc4e1700e5d4a37e4578454ab69f77ab3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3FRAZB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwAn8FOK5jF1kNU2mmIpKyps5i3flS5zUvFXJP3HlgKAiBli%2F1KI4Qqm7Y6BcZftsYM8S1B9yGFbONhXRzLT7tbXiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sZl6a2Yeis1qhV%2BKtwD1x0JYh1NQQb04HkjTUbgBJ%2Bq3Re5nwKUfnhBsxJHqd0NNydjpKuRK2iuGuCaKfNWfp7nutr1Z4T9pRC3PPppmxph%2BVM0hdd8AHXXcj7XAfly7vt%2B59hus98HbpXx56TC%2BH32s3KfOUsIzmYN8rzxt7hM8JrBPm%2BNo9soS9CkhFQ%2FZlXfWN5VjcGsx8pl%2B%2F3J5zbeY3vmkS9rl2UBuNT7BsWSMUhlOPEjhzlLeA%2Bm1u9riT3kpUWMoF45QUDNLHIRd3fPHyIuRCO8fIj56%2Fawoun4GaVArQI36zmxOfs7El6W1hw1raGZ3Ts7ys%2FesOQ4rM03XCyU7USaEr0ManVsF98FPYgEISWzS0Rrwm2ncL3XhHCHOP2H8EeyBwzCfVrLgdWl0gYi0Bngph29uXaJRXbF2IKtfg9FNySyF7Kf%2B9zPLzyf%2BVFqF%2FWP8St1YK0PoQHIHe7SFG9wNN%2BLFBEpfV235kKQeEYs%2FSaGXlbrRYVIl%2Baw4rWSoh78iHtJmLBnU0bWqnedUXiyyqP3oTJ%2F2jioH4T5%2Bcl5pJQ%2BszUc0r1FaMRSO9WwmnqXtfKH3TwqPwOsibnc7mszOT5iW4dnj%2BMTgFLJPYQyt573EylQASKjiVaQPUWK1BFzwPkwiPnmxAY6pgH896TgLw0QZFcbpewbhLnAdyad6KXffVFpAY8hjInvWbsDcVYvmj%2BpMCB8oXRkj05Rhr8PqWnv%2FL9JsLAbj%2B7fly4%2B%2BDAka7%2BJrkeqvfTbfn62WpuLLsPxZ0NjVxDKxs0Z0nyh94h97%2B73O6zfT6JVelzMvWH%2FaOy4C2JdK%2Fj03h62SN2nRe4Qw396LwNvGbpqa8dK7PwxhgxyZyWOce%2BPjKttao3l&X-Amz-Signature=632abd9dcd8b8c1a48fe6b52e106e37d355abab6375b1932bde995bc2cc5f6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
