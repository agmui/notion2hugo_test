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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42GWU4E%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmN5%2BcAzXPv64Ecxf0xr2zSQA2ccHR%2BZcUS7vFzozZHAiEAyLMYxrvRD5NYtZubAqKLppRbAmAyyNkzddp8QWKMUNsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoDjYupDxGt44nxYircA3kpVkC1lCWiklNRR8szg94AZZcN%2FyuTGfeZgnMKd22p%2Fwu5ZFTZWJs0XDDC%2Fv9bMwqZZ93JMYbdOJGG60gqHse0fIgFqPOzOy4o9Lx%2By%2FIxfeSo2vYVPzZe9S5hPjC8d7U0XT4LIfq%2BnV4S51RcXoE%2FOAAgcRsT%2FgbtJAlTqHOoF13U1TxGBV7UF4sxlPrskhw6SiQKL24qBvZDOvbeFt50a6C1NkBZQcrMIZiEwHR0WC7Xv9tH92s0%2Bj%2FYHpmcUT8ZgSqHLLue2FY%2BjoTpTEFEYGANo8qFhb0I3uN9bcI%2BwoKnYho%2BQcTJT%2FZOMvhndCTfj5E5971Ob8a3%2FnWgfj%2BHB0Y45DziYIq6pRavbuh2PHoKvqOVsM%2BbdPNp1SQB8016Z9u5TEOhYDdic9zLmWdh1U8VGbfVpTUjo7XuhxyDZ0VgyKMEphpDVUyhMXPYWbhiSffD1QI2EkjuDT%2FO4lhEW1v7WhQgpWBbDIOYQk1wlZoukgqZgALesYKyN9ez8G%2BgG6AihS8LbRb8ZiPr3n96wz6wf2WFR0lbO%2BR4i28YIyL9dhAOCGGgOGl8QACjPN%2BV3lDytNzmDQZAlsrTSDB%2BvBYAouaROdM%2F%2BlfH8jhxHtI93rFzrzVwh8plMM2Y78gGOqUBHDEfCaFGfZey9rjQF1hY7m9zNWLxiSpAwMPES8pD%2FUBT1kqAMmZI6vZuXtfnmkvskFQlD6%2BmtpkiqeUGe%2BbBNygXzqZhLSwMr6NreTshQn9ATjjEXCaucspwcwBADB4PHzARjTETK%2BubjqyIB5%2BXZZHShn%2BsFtjN1rztrLuqgP%2FCO%2BnTtELXjSL3rPEOG3SAdevybJPisaGouv8wftckmzcZb6%2FP&X-Amz-Signature=001d3ea9745ce992659070faf40c7ac1c2fe57f026e4ed23a0dc5e4169340c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42GWU4E%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmN5%2BcAzXPv64Ecxf0xr2zSQA2ccHR%2BZcUS7vFzozZHAiEAyLMYxrvRD5NYtZubAqKLppRbAmAyyNkzddp8QWKMUNsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoDjYupDxGt44nxYircA3kpVkC1lCWiklNRR8szg94AZZcN%2FyuTGfeZgnMKd22p%2Fwu5ZFTZWJs0XDDC%2Fv9bMwqZZ93JMYbdOJGG60gqHse0fIgFqPOzOy4o9Lx%2By%2FIxfeSo2vYVPzZe9S5hPjC8d7U0XT4LIfq%2BnV4S51RcXoE%2FOAAgcRsT%2FgbtJAlTqHOoF13U1TxGBV7UF4sxlPrskhw6SiQKL24qBvZDOvbeFt50a6C1NkBZQcrMIZiEwHR0WC7Xv9tH92s0%2Bj%2FYHpmcUT8ZgSqHLLue2FY%2BjoTpTEFEYGANo8qFhb0I3uN9bcI%2BwoKnYho%2BQcTJT%2FZOMvhndCTfj5E5971Ob8a3%2FnWgfj%2BHB0Y45DziYIq6pRavbuh2PHoKvqOVsM%2BbdPNp1SQB8016Z9u5TEOhYDdic9zLmWdh1U8VGbfVpTUjo7XuhxyDZ0VgyKMEphpDVUyhMXPYWbhiSffD1QI2EkjuDT%2FO4lhEW1v7WhQgpWBbDIOYQk1wlZoukgqZgALesYKyN9ez8G%2BgG6AihS8LbRb8ZiPr3n96wz6wf2WFR0lbO%2BR4i28YIyL9dhAOCGGgOGl8QACjPN%2BV3lDytNzmDQZAlsrTSDB%2BvBYAouaROdM%2F%2BlfH8jhxHtI93rFzrzVwh8plMM2Y78gGOqUBHDEfCaFGfZey9rjQF1hY7m9zNWLxiSpAwMPES8pD%2FUBT1kqAMmZI6vZuXtfnmkvskFQlD6%2BmtpkiqeUGe%2BbBNygXzqZhLSwMr6NreTshQn9ATjjEXCaucspwcwBADB4PHzARjTETK%2BubjqyIB5%2BXZZHShn%2BsFtjN1rztrLuqgP%2FCO%2BnTtELXjSL3rPEOG3SAdevybJPisaGouv8wftckmzcZb6%2FP&X-Amz-Signature=031b19880f05cfb404ff2a0ec4111d756a603c0555cc51f98b4442decbd3d758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42GWU4E%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmN5%2BcAzXPv64Ecxf0xr2zSQA2ccHR%2BZcUS7vFzozZHAiEAyLMYxrvRD5NYtZubAqKLppRbAmAyyNkzddp8QWKMUNsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoDjYupDxGt44nxYircA3kpVkC1lCWiklNRR8szg94AZZcN%2FyuTGfeZgnMKd22p%2Fwu5ZFTZWJs0XDDC%2Fv9bMwqZZ93JMYbdOJGG60gqHse0fIgFqPOzOy4o9Lx%2By%2FIxfeSo2vYVPzZe9S5hPjC8d7U0XT4LIfq%2BnV4S51RcXoE%2FOAAgcRsT%2FgbtJAlTqHOoF13U1TxGBV7UF4sxlPrskhw6SiQKL24qBvZDOvbeFt50a6C1NkBZQcrMIZiEwHR0WC7Xv9tH92s0%2Bj%2FYHpmcUT8ZgSqHLLue2FY%2BjoTpTEFEYGANo8qFhb0I3uN9bcI%2BwoKnYho%2BQcTJT%2FZOMvhndCTfj5E5971Ob8a3%2FnWgfj%2BHB0Y45DziYIq6pRavbuh2PHoKvqOVsM%2BbdPNp1SQB8016Z9u5TEOhYDdic9zLmWdh1U8VGbfVpTUjo7XuhxyDZ0VgyKMEphpDVUyhMXPYWbhiSffD1QI2EkjuDT%2FO4lhEW1v7WhQgpWBbDIOYQk1wlZoukgqZgALesYKyN9ez8G%2BgG6AihS8LbRb8ZiPr3n96wz6wf2WFR0lbO%2BR4i28YIyL9dhAOCGGgOGl8QACjPN%2BV3lDytNzmDQZAlsrTSDB%2BvBYAouaROdM%2F%2BlfH8jhxHtI93rFzrzVwh8plMM2Y78gGOqUBHDEfCaFGfZey9rjQF1hY7m9zNWLxiSpAwMPES8pD%2FUBT1kqAMmZI6vZuXtfnmkvskFQlD6%2BmtpkiqeUGe%2BbBNygXzqZhLSwMr6NreTshQn9ATjjEXCaucspwcwBADB4PHzARjTETK%2BubjqyIB5%2BXZZHShn%2BsFtjN1rztrLuqgP%2FCO%2BnTtELXjSL3rPEOG3SAdevybJPisaGouv8wftckmzcZb6%2FP&X-Amz-Signature=9e4ffa4124d61b8fa772830c1cb0b557b8b9e05fe400ec404609877595ac9799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42GWU4E%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmN5%2BcAzXPv64Ecxf0xr2zSQA2ccHR%2BZcUS7vFzozZHAiEAyLMYxrvRD5NYtZubAqKLppRbAmAyyNkzddp8QWKMUNsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoDjYupDxGt44nxYircA3kpVkC1lCWiklNRR8szg94AZZcN%2FyuTGfeZgnMKd22p%2Fwu5ZFTZWJs0XDDC%2Fv9bMwqZZ93JMYbdOJGG60gqHse0fIgFqPOzOy4o9Lx%2By%2FIxfeSo2vYVPzZe9S5hPjC8d7U0XT4LIfq%2BnV4S51RcXoE%2FOAAgcRsT%2FgbtJAlTqHOoF13U1TxGBV7UF4sxlPrskhw6SiQKL24qBvZDOvbeFt50a6C1NkBZQcrMIZiEwHR0WC7Xv9tH92s0%2Bj%2FYHpmcUT8ZgSqHLLue2FY%2BjoTpTEFEYGANo8qFhb0I3uN9bcI%2BwoKnYho%2BQcTJT%2FZOMvhndCTfj5E5971Ob8a3%2FnWgfj%2BHB0Y45DziYIq6pRavbuh2PHoKvqOVsM%2BbdPNp1SQB8016Z9u5TEOhYDdic9zLmWdh1U8VGbfVpTUjo7XuhxyDZ0VgyKMEphpDVUyhMXPYWbhiSffD1QI2EkjuDT%2FO4lhEW1v7WhQgpWBbDIOYQk1wlZoukgqZgALesYKyN9ez8G%2BgG6AihS8LbRb8ZiPr3n96wz6wf2WFR0lbO%2BR4i28YIyL9dhAOCGGgOGl8QACjPN%2BV3lDytNzmDQZAlsrTSDB%2BvBYAouaROdM%2F%2BlfH8jhxHtI93rFzrzVwh8plMM2Y78gGOqUBHDEfCaFGfZey9rjQF1hY7m9zNWLxiSpAwMPES8pD%2FUBT1kqAMmZI6vZuXtfnmkvskFQlD6%2BmtpkiqeUGe%2BbBNygXzqZhLSwMr6NreTshQn9ATjjEXCaucspwcwBADB4PHzARjTETK%2BubjqyIB5%2BXZZHShn%2BsFtjN1rztrLuqgP%2FCO%2BnTtELXjSL3rPEOG3SAdevybJPisaGouv8wftckmzcZb6%2FP&X-Amz-Signature=f2cdc4fa49b215f46949f54b1231179b7dcbc7e0e5d91543b154dad5901ad898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42GWU4E%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmN5%2BcAzXPv64Ecxf0xr2zSQA2ccHR%2BZcUS7vFzozZHAiEAyLMYxrvRD5NYtZubAqKLppRbAmAyyNkzddp8QWKMUNsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoDjYupDxGt44nxYircA3kpVkC1lCWiklNRR8szg94AZZcN%2FyuTGfeZgnMKd22p%2Fwu5ZFTZWJs0XDDC%2Fv9bMwqZZ93JMYbdOJGG60gqHse0fIgFqPOzOy4o9Lx%2By%2FIxfeSo2vYVPzZe9S5hPjC8d7U0XT4LIfq%2BnV4S51RcXoE%2FOAAgcRsT%2FgbtJAlTqHOoF13U1TxGBV7UF4sxlPrskhw6SiQKL24qBvZDOvbeFt50a6C1NkBZQcrMIZiEwHR0WC7Xv9tH92s0%2Bj%2FYHpmcUT8ZgSqHLLue2FY%2BjoTpTEFEYGANo8qFhb0I3uN9bcI%2BwoKnYho%2BQcTJT%2FZOMvhndCTfj5E5971Ob8a3%2FnWgfj%2BHB0Y45DziYIq6pRavbuh2PHoKvqOVsM%2BbdPNp1SQB8016Z9u5TEOhYDdic9zLmWdh1U8VGbfVpTUjo7XuhxyDZ0VgyKMEphpDVUyhMXPYWbhiSffD1QI2EkjuDT%2FO4lhEW1v7WhQgpWBbDIOYQk1wlZoukgqZgALesYKyN9ez8G%2BgG6AihS8LbRb8ZiPr3n96wz6wf2WFR0lbO%2BR4i28YIyL9dhAOCGGgOGl8QACjPN%2BV3lDytNzmDQZAlsrTSDB%2BvBYAouaROdM%2F%2BlfH8jhxHtI93rFzrzVwh8plMM2Y78gGOqUBHDEfCaFGfZey9rjQF1hY7m9zNWLxiSpAwMPES8pD%2FUBT1kqAMmZI6vZuXtfnmkvskFQlD6%2BmtpkiqeUGe%2BbBNygXzqZhLSwMr6NreTshQn9ATjjEXCaucspwcwBADB4PHzARjTETK%2BubjqyIB5%2BXZZHShn%2BsFtjN1rztrLuqgP%2FCO%2BnTtELXjSL3rPEOG3SAdevybJPisaGouv8wftckmzcZb6%2FP&X-Amz-Signature=a90090f5058565b60bbae08304553f7f1689bda2e2b1fedd6e685432b8bc3c4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42GWU4E%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmN5%2BcAzXPv64Ecxf0xr2zSQA2ccHR%2BZcUS7vFzozZHAiEAyLMYxrvRD5NYtZubAqKLppRbAmAyyNkzddp8QWKMUNsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoDjYupDxGt44nxYircA3kpVkC1lCWiklNRR8szg94AZZcN%2FyuTGfeZgnMKd22p%2Fwu5ZFTZWJs0XDDC%2Fv9bMwqZZ93JMYbdOJGG60gqHse0fIgFqPOzOy4o9Lx%2By%2FIxfeSo2vYVPzZe9S5hPjC8d7U0XT4LIfq%2BnV4S51RcXoE%2FOAAgcRsT%2FgbtJAlTqHOoF13U1TxGBV7UF4sxlPrskhw6SiQKL24qBvZDOvbeFt50a6C1NkBZQcrMIZiEwHR0WC7Xv9tH92s0%2Bj%2FYHpmcUT8ZgSqHLLue2FY%2BjoTpTEFEYGANo8qFhb0I3uN9bcI%2BwoKnYho%2BQcTJT%2FZOMvhndCTfj5E5971Ob8a3%2FnWgfj%2BHB0Y45DziYIq6pRavbuh2PHoKvqOVsM%2BbdPNp1SQB8016Z9u5TEOhYDdic9zLmWdh1U8VGbfVpTUjo7XuhxyDZ0VgyKMEphpDVUyhMXPYWbhiSffD1QI2EkjuDT%2FO4lhEW1v7WhQgpWBbDIOYQk1wlZoukgqZgALesYKyN9ez8G%2BgG6AihS8LbRb8ZiPr3n96wz6wf2WFR0lbO%2BR4i28YIyL9dhAOCGGgOGl8QACjPN%2BV3lDytNzmDQZAlsrTSDB%2BvBYAouaROdM%2F%2BlfH8jhxHtI93rFzrzVwh8plMM2Y78gGOqUBHDEfCaFGfZey9rjQF1hY7m9zNWLxiSpAwMPES8pD%2FUBT1kqAMmZI6vZuXtfnmkvskFQlD6%2BmtpkiqeUGe%2BbBNygXzqZhLSwMr6NreTshQn9ATjjEXCaucspwcwBADB4PHzARjTETK%2BubjqyIB5%2BXZZHShn%2BsFtjN1rztrLuqgP%2FCO%2BnTtELXjSL3rPEOG3SAdevybJPisaGouv8wftckmzcZb6%2FP&X-Amz-Signature=98ffb00f60523d7c384d661fbd0ad38a192522528a02e7853476e8823be87db8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42GWU4E%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmN5%2BcAzXPv64Ecxf0xr2zSQA2ccHR%2BZcUS7vFzozZHAiEAyLMYxrvRD5NYtZubAqKLppRbAmAyyNkzddp8QWKMUNsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoDjYupDxGt44nxYircA3kpVkC1lCWiklNRR8szg94AZZcN%2FyuTGfeZgnMKd22p%2Fwu5ZFTZWJs0XDDC%2Fv9bMwqZZ93JMYbdOJGG60gqHse0fIgFqPOzOy4o9Lx%2By%2FIxfeSo2vYVPzZe9S5hPjC8d7U0XT4LIfq%2BnV4S51RcXoE%2FOAAgcRsT%2FgbtJAlTqHOoF13U1TxGBV7UF4sxlPrskhw6SiQKL24qBvZDOvbeFt50a6C1NkBZQcrMIZiEwHR0WC7Xv9tH92s0%2Bj%2FYHpmcUT8ZgSqHLLue2FY%2BjoTpTEFEYGANo8qFhb0I3uN9bcI%2BwoKnYho%2BQcTJT%2FZOMvhndCTfj5E5971Ob8a3%2FnWgfj%2BHB0Y45DziYIq6pRavbuh2PHoKvqOVsM%2BbdPNp1SQB8016Z9u5TEOhYDdic9zLmWdh1U8VGbfVpTUjo7XuhxyDZ0VgyKMEphpDVUyhMXPYWbhiSffD1QI2EkjuDT%2FO4lhEW1v7WhQgpWBbDIOYQk1wlZoukgqZgALesYKyN9ez8G%2BgG6AihS8LbRb8ZiPr3n96wz6wf2WFR0lbO%2BR4i28YIyL9dhAOCGGgOGl8QACjPN%2BV3lDytNzmDQZAlsrTSDB%2BvBYAouaROdM%2F%2BlfH8jhxHtI93rFzrzVwh8plMM2Y78gGOqUBHDEfCaFGfZey9rjQF1hY7m9zNWLxiSpAwMPES8pD%2FUBT1kqAMmZI6vZuXtfnmkvskFQlD6%2BmtpkiqeUGe%2BbBNygXzqZhLSwMr6NreTshQn9ATjjEXCaucspwcwBADB4PHzARjTETK%2BubjqyIB5%2BXZZHShn%2BsFtjN1rztrLuqgP%2FCO%2BnTtELXjSL3rPEOG3SAdevybJPisaGouv8wftckmzcZb6%2FP&X-Amz-Signature=8c50772c4fa92e9a53b1162202b62d75f02368ac6f607dba23dfe9b23c7e08f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42GWU4E%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmN5%2BcAzXPv64Ecxf0xr2zSQA2ccHR%2BZcUS7vFzozZHAiEAyLMYxrvRD5NYtZubAqKLppRbAmAyyNkzddp8QWKMUNsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoDjYupDxGt44nxYircA3kpVkC1lCWiklNRR8szg94AZZcN%2FyuTGfeZgnMKd22p%2Fwu5ZFTZWJs0XDDC%2Fv9bMwqZZ93JMYbdOJGG60gqHse0fIgFqPOzOy4o9Lx%2By%2FIxfeSo2vYVPzZe9S5hPjC8d7U0XT4LIfq%2BnV4S51RcXoE%2FOAAgcRsT%2FgbtJAlTqHOoF13U1TxGBV7UF4sxlPrskhw6SiQKL24qBvZDOvbeFt50a6C1NkBZQcrMIZiEwHR0WC7Xv9tH92s0%2Bj%2FYHpmcUT8ZgSqHLLue2FY%2BjoTpTEFEYGANo8qFhb0I3uN9bcI%2BwoKnYho%2BQcTJT%2FZOMvhndCTfj5E5971Ob8a3%2FnWgfj%2BHB0Y45DziYIq6pRavbuh2PHoKvqOVsM%2BbdPNp1SQB8016Z9u5TEOhYDdic9zLmWdh1U8VGbfVpTUjo7XuhxyDZ0VgyKMEphpDVUyhMXPYWbhiSffD1QI2EkjuDT%2FO4lhEW1v7WhQgpWBbDIOYQk1wlZoukgqZgALesYKyN9ez8G%2BgG6AihS8LbRb8ZiPr3n96wz6wf2WFR0lbO%2BR4i28YIyL9dhAOCGGgOGl8QACjPN%2BV3lDytNzmDQZAlsrTSDB%2BvBYAouaROdM%2F%2BlfH8jhxHtI93rFzrzVwh8plMM2Y78gGOqUBHDEfCaFGfZey9rjQF1hY7m9zNWLxiSpAwMPES8pD%2FUBT1kqAMmZI6vZuXtfnmkvskFQlD6%2BmtpkiqeUGe%2BbBNygXzqZhLSwMr6NreTshQn9ATjjEXCaucspwcwBADB4PHzARjTETK%2BubjqyIB5%2BXZZHShn%2BsFtjN1rztrLuqgP%2FCO%2BnTtELXjSL3rPEOG3SAdevybJPisaGouv8wftckmzcZb6%2FP&X-Amz-Signature=5595263bfc30f9144c24e513ea8f0b1f21b3c34bcccf6c0e1a3aba3de493e438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42GWU4E%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmN5%2BcAzXPv64Ecxf0xr2zSQA2ccHR%2BZcUS7vFzozZHAiEAyLMYxrvRD5NYtZubAqKLppRbAmAyyNkzddp8QWKMUNsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoDjYupDxGt44nxYircA3kpVkC1lCWiklNRR8szg94AZZcN%2FyuTGfeZgnMKd22p%2Fwu5ZFTZWJs0XDDC%2Fv9bMwqZZ93JMYbdOJGG60gqHse0fIgFqPOzOy4o9Lx%2By%2FIxfeSo2vYVPzZe9S5hPjC8d7U0XT4LIfq%2BnV4S51RcXoE%2FOAAgcRsT%2FgbtJAlTqHOoF13U1TxGBV7UF4sxlPrskhw6SiQKL24qBvZDOvbeFt50a6C1NkBZQcrMIZiEwHR0WC7Xv9tH92s0%2Bj%2FYHpmcUT8ZgSqHLLue2FY%2BjoTpTEFEYGANo8qFhb0I3uN9bcI%2BwoKnYho%2BQcTJT%2FZOMvhndCTfj5E5971Ob8a3%2FnWgfj%2BHB0Y45DziYIq6pRavbuh2PHoKvqOVsM%2BbdPNp1SQB8016Z9u5TEOhYDdic9zLmWdh1U8VGbfVpTUjo7XuhxyDZ0VgyKMEphpDVUyhMXPYWbhiSffD1QI2EkjuDT%2FO4lhEW1v7WhQgpWBbDIOYQk1wlZoukgqZgALesYKyN9ez8G%2BgG6AihS8LbRb8ZiPr3n96wz6wf2WFR0lbO%2BR4i28YIyL9dhAOCGGgOGl8QACjPN%2BV3lDytNzmDQZAlsrTSDB%2BvBYAouaROdM%2F%2BlfH8jhxHtI93rFzrzVwh8plMM2Y78gGOqUBHDEfCaFGfZey9rjQF1hY7m9zNWLxiSpAwMPES8pD%2FUBT1kqAMmZI6vZuXtfnmkvskFQlD6%2BmtpkiqeUGe%2BbBNygXzqZhLSwMr6NreTshQn9ATjjEXCaucspwcwBADB4PHzARjTETK%2BubjqyIB5%2BXZZHShn%2BsFtjN1rztrLuqgP%2FCO%2BnTtELXjSL3rPEOG3SAdevybJPisaGouv8wftckmzcZb6%2FP&X-Amz-Signature=445b3442e574832f62257bddef97a2fc03922cd75bc48fbc19759b41ffcefe80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42GWU4E%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmN5%2BcAzXPv64Ecxf0xr2zSQA2ccHR%2BZcUS7vFzozZHAiEAyLMYxrvRD5NYtZubAqKLppRbAmAyyNkzddp8QWKMUNsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoDjYupDxGt44nxYircA3kpVkC1lCWiklNRR8szg94AZZcN%2FyuTGfeZgnMKd22p%2Fwu5ZFTZWJs0XDDC%2Fv9bMwqZZ93JMYbdOJGG60gqHse0fIgFqPOzOy4o9Lx%2By%2FIxfeSo2vYVPzZe9S5hPjC8d7U0XT4LIfq%2BnV4S51RcXoE%2FOAAgcRsT%2FgbtJAlTqHOoF13U1TxGBV7UF4sxlPrskhw6SiQKL24qBvZDOvbeFt50a6C1NkBZQcrMIZiEwHR0WC7Xv9tH92s0%2Bj%2FYHpmcUT8ZgSqHLLue2FY%2BjoTpTEFEYGANo8qFhb0I3uN9bcI%2BwoKnYho%2BQcTJT%2FZOMvhndCTfj5E5971Ob8a3%2FnWgfj%2BHB0Y45DziYIq6pRavbuh2PHoKvqOVsM%2BbdPNp1SQB8016Z9u5TEOhYDdic9zLmWdh1U8VGbfVpTUjo7XuhxyDZ0VgyKMEphpDVUyhMXPYWbhiSffD1QI2EkjuDT%2FO4lhEW1v7WhQgpWBbDIOYQk1wlZoukgqZgALesYKyN9ez8G%2BgG6AihS8LbRb8ZiPr3n96wz6wf2WFR0lbO%2BR4i28YIyL9dhAOCGGgOGl8QACjPN%2BV3lDytNzmDQZAlsrTSDB%2BvBYAouaROdM%2F%2BlfH8jhxHtI93rFzrzVwh8plMM2Y78gGOqUBHDEfCaFGfZey9rjQF1hY7m9zNWLxiSpAwMPES8pD%2FUBT1kqAMmZI6vZuXtfnmkvskFQlD6%2BmtpkiqeUGe%2BbBNygXzqZhLSwMr6NreTshQn9ATjjEXCaucspwcwBADB4PHzARjTETK%2BubjqyIB5%2BXZZHShn%2BsFtjN1rztrLuqgP%2FCO%2BnTtELXjSL3rPEOG3SAdevybJPisaGouv8wftckmzcZb6%2FP&X-Amz-Signature=4836a558c8ad0caf25b1fcca8708c95e847d8ff4aa33c69cb628db25197e92e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42GWU4E%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmN5%2BcAzXPv64Ecxf0xr2zSQA2ccHR%2BZcUS7vFzozZHAiEAyLMYxrvRD5NYtZubAqKLppRbAmAyyNkzddp8QWKMUNsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoDjYupDxGt44nxYircA3kpVkC1lCWiklNRR8szg94AZZcN%2FyuTGfeZgnMKd22p%2Fwu5ZFTZWJs0XDDC%2Fv9bMwqZZ93JMYbdOJGG60gqHse0fIgFqPOzOy4o9Lx%2By%2FIxfeSo2vYVPzZe9S5hPjC8d7U0XT4LIfq%2BnV4S51RcXoE%2FOAAgcRsT%2FgbtJAlTqHOoF13U1TxGBV7UF4sxlPrskhw6SiQKL24qBvZDOvbeFt50a6C1NkBZQcrMIZiEwHR0WC7Xv9tH92s0%2Bj%2FYHpmcUT8ZgSqHLLue2FY%2BjoTpTEFEYGANo8qFhb0I3uN9bcI%2BwoKnYho%2BQcTJT%2FZOMvhndCTfj5E5971Ob8a3%2FnWgfj%2BHB0Y45DziYIq6pRavbuh2PHoKvqOVsM%2BbdPNp1SQB8016Z9u5TEOhYDdic9zLmWdh1U8VGbfVpTUjo7XuhxyDZ0VgyKMEphpDVUyhMXPYWbhiSffD1QI2EkjuDT%2FO4lhEW1v7WhQgpWBbDIOYQk1wlZoukgqZgALesYKyN9ez8G%2BgG6AihS8LbRb8ZiPr3n96wz6wf2WFR0lbO%2BR4i28YIyL9dhAOCGGgOGl8QACjPN%2BV3lDytNzmDQZAlsrTSDB%2BvBYAouaROdM%2F%2BlfH8jhxHtI93rFzrzVwh8plMM2Y78gGOqUBHDEfCaFGfZey9rjQF1hY7m9zNWLxiSpAwMPES8pD%2FUBT1kqAMmZI6vZuXtfnmkvskFQlD6%2BmtpkiqeUGe%2BbBNygXzqZhLSwMr6NreTshQn9ATjjEXCaucspwcwBADB4PHzARjTETK%2BubjqyIB5%2BXZZHShn%2BsFtjN1rztrLuqgP%2FCO%2BnTtELXjSL3rPEOG3SAdevybJPisaGouv8wftckmzcZb6%2FP&X-Amz-Signature=da7d1078d819f5128524d82a917f2291b8f87666100d214a108090d05b5ef54f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42GWU4E%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmN5%2BcAzXPv64Ecxf0xr2zSQA2ccHR%2BZcUS7vFzozZHAiEAyLMYxrvRD5NYtZubAqKLppRbAmAyyNkzddp8QWKMUNsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoDjYupDxGt44nxYircA3kpVkC1lCWiklNRR8szg94AZZcN%2FyuTGfeZgnMKd22p%2Fwu5ZFTZWJs0XDDC%2Fv9bMwqZZ93JMYbdOJGG60gqHse0fIgFqPOzOy4o9Lx%2By%2FIxfeSo2vYVPzZe9S5hPjC8d7U0XT4LIfq%2BnV4S51RcXoE%2FOAAgcRsT%2FgbtJAlTqHOoF13U1TxGBV7UF4sxlPrskhw6SiQKL24qBvZDOvbeFt50a6C1NkBZQcrMIZiEwHR0WC7Xv9tH92s0%2Bj%2FYHpmcUT8ZgSqHLLue2FY%2BjoTpTEFEYGANo8qFhb0I3uN9bcI%2BwoKnYho%2BQcTJT%2FZOMvhndCTfj5E5971Ob8a3%2FnWgfj%2BHB0Y45DziYIq6pRavbuh2PHoKvqOVsM%2BbdPNp1SQB8016Z9u5TEOhYDdic9zLmWdh1U8VGbfVpTUjo7XuhxyDZ0VgyKMEphpDVUyhMXPYWbhiSffD1QI2EkjuDT%2FO4lhEW1v7WhQgpWBbDIOYQk1wlZoukgqZgALesYKyN9ez8G%2BgG6AihS8LbRb8ZiPr3n96wz6wf2WFR0lbO%2BR4i28YIyL9dhAOCGGgOGl8QACjPN%2BV3lDytNzmDQZAlsrTSDB%2BvBYAouaROdM%2F%2BlfH8jhxHtI93rFzrzVwh8plMM2Y78gGOqUBHDEfCaFGfZey9rjQF1hY7m9zNWLxiSpAwMPES8pD%2FUBT1kqAMmZI6vZuXtfnmkvskFQlD6%2BmtpkiqeUGe%2BbBNygXzqZhLSwMr6NreTshQn9ATjjEXCaucspwcwBADB4PHzARjTETK%2BubjqyIB5%2BXZZHShn%2BsFtjN1rztrLuqgP%2FCO%2BnTtELXjSL3rPEOG3SAdevybJPisaGouv8wftckmzcZb6%2FP&X-Amz-Signature=44b0f836cba3505523726ad3319d9bda7c6911b49d579c0a4769090072bd5bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42GWU4E%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmN5%2BcAzXPv64Ecxf0xr2zSQA2ccHR%2BZcUS7vFzozZHAiEAyLMYxrvRD5NYtZubAqKLppRbAmAyyNkzddp8QWKMUNsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoDjYupDxGt44nxYircA3kpVkC1lCWiklNRR8szg94AZZcN%2FyuTGfeZgnMKd22p%2Fwu5ZFTZWJs0XDDC%2Fv9bMwqZZ93JMYbdOJGG60gqHse0fIgFqPOzOy4o9Lx%2By%2FIxfeSo2vYVPzZe9S5hPjC8d7U0XT4LIfq%2BnV4S51RcXoE%2FOAAgcRsT%2FgbtJAlTqHOoF13U1TxGBV7UF4sxlPrskhw6SiQKL24qBvZDOvbeFt50a6C1NkBZQcrMIZiEwHR0WC7Xv9tH92s0%2Bj%2FYHpmcUT8ZgSqHLLue2FY%2BjoTpTEFEYGANo8qFhb0I3uN9bcI%2BwoKnYho%2BQcTJT%2FZOMvhndCTfj5E5971Ob8a3%2FnWgfj%2BHB0Y45DziYIq6pRavbuh2PHoKvqOVsM%2BbdPNp1SQB8016Z9u5TEOhYDdic9zLmWdh1U8VGbfVpTUjo7XuhxyDZ0VgyKMEphpDVUyhMXPYWbhiSffD1QI2EkjuDT%2FO4lhEW1v7WhQgpWBbDIOYQk1wlZoukgqZgALesYKyN9ez8G%2BgG6AihS8LbRb8ZiPr3n96wz6wf2WFR0lbO%2BR4i28YIyL9dhAOCGGgOGl8QACjPN%2BV3lDytNzmDQZAlsrTSDB%2BvBYAouaROdM%2F%2BlfH8jhxHtI93rFzrzVwh8plMM2Y78gGOqUBHDEfCaFGfZey9rjQF1hY7m9zNWLxiSpAwMPES8pD%2FUBT1kqAMmZI6vZuXtfnmkvskFQlD6%2BmtpkiqeUGe%2BbBNygXzqZhLSwMr6NreTshQn9ATjjEXCaucspwcwBADB4PHzARjTETK%2BubjqyIB5%2BXZZHShn%2BsFtjN1rztrLuqgP%2FCO%2BnTtELXjSL3rPEOG3SAdevybJPisaGouv8wftckmzcZb6%2FP&X-Amz-Signature=f54bc072b1c93394b33b6dae045f72cf0f39566c055f6f5cf65dea530c018efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
