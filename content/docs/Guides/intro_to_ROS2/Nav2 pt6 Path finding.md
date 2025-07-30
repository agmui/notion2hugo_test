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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRX5BX6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa7jjpkk9YPGhjfdXpQSdqi2OmMjog8hb%2FqX%2Fm9VSc0AiAYf4e80i0k8cD0UKWrwrsaC9VpxXFMvoPcUNcwjNWfkiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2oBIBOFh7v5CBXXMKtwDOIP7JGZAh20UazDgQb8ZjxfdhL2C15aoOkdoHazHyOitna2794R7uM7cYhFHzdeIRfAa3iWcOLH0Yp9Tl1mFiw6t2GpOlRRj%2FCEsqG8McBEreXF9QukmlEcdv8hHHj%2FDvAli1JerSGD1mbHIW%2FvB%2BNSsDrY55CLOV6jPqew4gl%2FI252K0xPWZCy7nS7E2ariT6efYn14fUaArMAEp3cLADaWTUhp3okGkmcHveUVog5PDmtSgwACRwsaDHRrJc7aHoZkxBddF3SYjSWmKMpdG5pG6jt5%2F1XNB8iNDrgNQUl1vzc6t7zXZHIDLq%2BEIZW3Hr9m6zAKJk1nsdsTvvNAp0j2tLRIoK3L7HcqoVxJQxA8pFNGnvVlZicjX%2FIxB%2FdYT2M02PYfEIgjc1ceqfbYyTCok2Ipp1BvCqPIELuBdI8oWsOG2%2B7z7vHA%2BjcsmWKI0HBbrJt8FSv%2F91kepQl53Io45M2X2IsOm%2BEcfrCiRlVqG6OTUmgtDHfpaZQSom%2F%2FiTQ4jhTvfJ4KseVVLl4v6zqluysnN%2FIHPmUAnUuToC4YWVL1HvJXchaO%2BpoG09LX5o%2B%2BC6sWhWyG80kF9CNBYo2APfRJYIon6pnwqlca5iR7pAp%2FaeZTrAOaq7owvYmpxAY6pgG5Y9Ij5OYg5SZ9s8qDgJt%2FQsf%2BaDxkKIyTnCTf%2BsGIcPQP4sxWIAg3I%2BPT9DheZml7T%2BrMY6Yax5OyrngtL61rCHK9rg2KoDa24a2faEgfWFUlYwc39kOCrtmXq%2BSaqLjwf9Cm3X5EbaWx5Vy6p6YCRL8fdcLsVq975110CoACo4H3AIdWHYgL7ve%2B8uMJ79VSJLV%2BG9KvA0zHmIPF5xsI7qs1zE2J&X-Amz-Signature=71c8ac95baba5b3ecb3cbd1245e9eb41e9319c4e01b30dac87cc90aa7c0a74a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRX5BX6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa7jjpkk9YPGhjfdXpQSdqi2OmMjog8hb%2FqX%2Fm9VSc0AiAYf4e80i0k8cD0UKWrwrsaC9VpxXFMvoPcUNcwjNWfkiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2oBIBOFh7v5CBXXMKtwDOIP7JGZAh20UazDgQb8ZjxfdhL2C15aoOkdoHazHyOitna2794R7uM7cYhFHzdeIRfAa3iWcOLH0Yp9Tl1mFiw6t2GpOlRRj%2FCEsqG8McBEreXF9QukmlEcdv8hHHj%2FDvAli1JerSGD1mbHIW%2FvB%2BNSsDrY55CLOV6jPqew4gl%2FI252K0xPWZCy7nS7E2ariT6efYn14fUaArMAEp3cLADaWTUhp3okGkmcHveUVog5PDmtSgwACRwsaDHRrJc7aHoZkxBddF3SYjSWmKMpdG5pG6jt5%2F1XNB8iNDrgNQUl1vzc6t7zXZHIDLq%2BEIZW3Hr9m6zAKJk1nsdsTvvNAp0j2tLRIoK3L7HcqoVxJQxA8pFNGnvVlZicjX%2FIxB%2FdYT2M02PYfEIgjc1ceqfbYyTCok2Ipp1BvCqPIELuBdI8oWsOG2%2B7z7vHA%2BjcsmWKI0HBbrJt8FSv%2F91kepQl53Io45M2X2IsOm%2BEcfrCiRlVqG6OTUmgtDHfpaZQSom%2F%2FiTQ4jhTvfJ4KseVVLl4v6zqluysnN%2FIHPmUAnUuToC4YWVL1HvJXchaO%2BpoG09LX5o%2B%2BC6sWhWyG80kF9CNBYo2APfRJYIon6pnwqlca5iR7pAp%2FaeZTrAOaq7owvYmpxAY6pgG5Y9Ij5OYg5SZ9s8qDgJt%2FQsf%2BaDxkKIyTnCTf%2BsGIcPQP4sxWIAg3I%2BPT9DheZml7T%2BrMY6Yax5OyrngtL61rCHK9rg2KoDa24a2faEgfWFUlYwc39kOCrtmXq%2BSaqLjwf9Cm3X5EbaWx5Vy6p6YCRL8fdcLsVq975110CoACo4H3AIdWHYgL7ve%2B8uMJ79VSJLV%2BG9KvA0zHmIPF5xsI7qs1zE2J&X-Amz-Signature=d2c18990fcce916d6918a7c2fd54eb4a2e60bc4288582778ea64abc8ffc40aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRX5BX6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa7jjpkk9YPGhjfdXpQSdqi2OmMjog8hb%2FqX%2Fm9VSc0AiAYf4e80i0k8cD0UKWrwrsaC9VpxXFMvoPcUNcwjNWfkiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2oBIBOFh7v5CBXXMKtwDOIP7JGZAh20UazDgQb8ZjxfdhL2C15aoOkdoHazHyOitna2794R7uM7cYhFHzdeIRfAa3iWcOLH0Yp9Tl1mFiw6t2GpOlRRj%2FCEsqG8McBEreXF9QukmlEcdv8hHHj%2FDvAli1JerSGD1mbHIW%2FvB%2BNSsDrY55CLOV6jPqew4gl%2FI252K0xPWZCy7nS7E2ariT6efYn14fUaArMAEp3cLADaWTUhp3okGkmcHveUVog5PDmtSgwACRwsaDHRrJc7aHoZkxBddF3SYjSWmKMpdG5pG6jt5%2F1XNB8iNDrgNQUl1vzc6t7zXZHIDLq%2BEIZW3Hr9m6zAKJk1nsdsTvvNAp0j2tLRIoK3L7HcqoVxJQxA8pFNGnvVlZicjX%2FIxB%2FdYT2M02PYfEIgjc1ceqfbYyTCok2Ipp1BvCqPIELuBdI8oWsOG2%2B7z7vHA%2BjcsmWKI0HBbrJt8FSv%2F91kepQl53Io45M2X2IsOm%2BEcfrCiRlVqG6OTUmgtDHfpaZQSom%2F%2FiTQ4jhTvfJ4KseVVLl4v6zqluysnN%2FIHPmUAnUuToC4YWVL1HvJXchaO%2BpoG09LX5o%2B%2BC6sWhWyG80kF9CNBYo2APfRJYIon6pnwqlca5iR7pAp%2FaeZTrAOaq7owvYmpxAY6pgG5Y9Ij5OYg5SZ9s8qDgJt%2FQsf%2BaDxkKIyTnCTf%2BsGIcPQP4sxWIAg3I%2BPT9DheZml7T%2BrMY6Yax5OyrngtL61rCHK9rg2KoDa24a2faEgfWFUlYwc39kOCrtmXq%2BSaqLjwf9Cm3X5EbaWx5Vy6p6YCRL8fdcLsVq975110CoACo4H3AIdWHYgL7ve%2B8uMJ79VSJLV%2BG9KvA0zHmIPF5xsI7qs1zE2J&X-Amz-Signature=a6783779d7e7e045f42007ce09760a57502b4e94878da42da4a3f02b43aab411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRX5BX6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa7jjpkk9YPGhjfdXpQSdqi2OmMjog8hb%2FqX%2Fm9VSc0AiAYf4e80i0k8cD0UKWrwrsaC9VpxXFMvoPcUNcwjNWfkiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2oBIBOFh7v5CBXXMKtwDOIP7JGZAh20UazDgQb8ZjxfdhL2C15aoOkdoHazHyOitna2794R7uM7cYhFHzdeIRfAa3iWcOLH0Yp9Tl1mFiw6t2GpOlRRj%2FCEsqG8McBEreXF9QukmlEcdv8hHHj%2FDvAli1JerSGD1mbHIW%2FvB%2BNSsDrY55CLOV6jPqew4gl%2FI252K0xPWZCy7nS7E2ariT6efYn14fUaArMAEp3cLADaWTUhp3okGkmcHveUVog5PDmtSgwACRwsaDHRrJc7aHoZkxBddF3SYjSWmKMpdG5pG6jt5%2F1XNB8iNDrgNQUl1vzc6t7zXZHIDLq%2BEIZW3Hr9m6zAKJk1nsdsTvvNAp0j2tLRIoK3L7HcqoVxJQxA8pFNGnvVlZicjX%2FIxB%2FdYT2M02PYfEIgjc1ceqfbYyTCok2Ipp1BvCqPIELuBdI8oWsOG2%2B7z7vHA%2BjcsmWKI0HBbrJt8FSv%2F91kepQl53Io45M2X2IsOm%2BEcfrCiRlVqG6OTUmgtDHfpaZQSom%2F%2FiTQ4jhTvfJ4KseVVLl4v6zqluysnN%2FIHPmUAnUuToC4YWVL1HvJXchaO%2BpoG09LX5o%2B%2BC6sWhWyG80kF9CNBYo2APfRJYIon6pnwqlca5iR7pAp%2FaeZTrAOaq7owvYmpxAY6pgG5Y9Ij5OYg5SZ9s8qDgJt%2FQsf%2BaDxkKIyTnCTf%2BsGIcPQP4sxWIAg3I%2BPT9DheZml7T%2BrMY6Yax5OyrngtL61rCHK9rg2KoDa24a2faEgfWFUlYwc39kOCrtmXq%2BSaqLjwf9Cm3X5EbaWx5Vy6p6YCRL8fdcLsVq975110CoACo4H3AIdWHYgL7ve%2B8uMJ79VSJLV%2BG9KvA0zHmIPF5xsI7qs1zE2J&X-Amz-Signature=fc9711c0688d6e1881b960b0594c75b972702251ea9480e64cb70b81a9eb79fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRX5BX6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa7jjpkk9YPGhjfdXpQSdqi2OmMjog8hb%2FqX%2Fm9VSc0AiAYf4e80i0k8cD0UKWrwrsaC9VpxXFMvoPcUNcwjNWfkiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2oBIBOFh7v5CBXXMKtwDOIP7JGZAh20UazDgQb8ZjxfdhL2C15aoOkdoHazHyOitna2794R7uM7cYhFHzdeIRfAa3iWcOLH0Yp9Tl1mFiw6t2GpOlRRj%2FCEsqG8McBEreXF9QukmlEcdv8hHHj%2FDvAli1JerSGD1mbHIW%2FvB%2BNSsDrY55CLOV6jPqew4gl%2FI252K0xPWZCy7nS7E2ariT6efYn14fUaArMAEp3cLADaWTUhp3okGkmcHveUVog5PDmtSgwACRwsaDHRrJc7aHoZkxBddF3SYjSWmKMpdG5pG6jt5%2F1XNB8iNDrgNQUl1vzc6t7zXZHIDLq%2BEIZW3Hr9m6zAKJk1nsdsTvvNAp0j2tLRIoK3L7HcqoVxJQxA8pFNGnvVlZicjX%2FIxB%2FdYT2M02PYfEIgjc1ceqfbYyTCok2Ipp1BvCqPIELuBdI8oWsOG2%2B7z7vHA%2BjcsmWKI0HBbrJt8FSv%2F91kepQl53Io45M2X2IsOm%2BEcfrCiRlVqG6OTUmgtDHfpaZQSom%2F%2FiTQ4jhTvfJ4KseVVLl4v6zqluysnN%2FIHPmUAnUuToC4YWVL1HvJXchaO%2BpoG09LX5o%2B%2BC6sWhWyG80kF9CNBYo2APfRJYIon6pnwqlca5iR7pAp%2FaeZTrAOaq7owvYmpxAY6pgG5Y9Ij5OYg5SZ9s8qDgJt%2FQsf%2BaDxkKIyTnCTf%2BsGIcPQP4sxWIAg3I%2BPT9DheZml7T%2BrMY6Yax5OyrngtL61rCHK9rg2KoDa24a2faEgfWFUlYwc39kOCrtmXq%2BSaqLjwf9Cm3X5EbaWx5Vy6p6YCRL8fdcLsVq975110CoACo4H3AIdWHYgL7ve%2B8uMJ79VSJLV%2BG9KvA0zHmIPF5xsI7qs1zE2J&X-Amz-Signature=1a6f8dc3490ffa86d953852deac469ddd3f2436d54cb1424efbb7d6f4f36a6c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRX5BX6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa7jjpkk9YPGhjfdXpQSdqi2OmMjog8hb%2FqX%2Fm9VSc0AiAYf4e80i0k8cD0UKWrwrsaC9VpxXFMvoPcUNcwjNWfkiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2oBIBOFh7v5CBXXMKtwDOIP7JGZAh20UazDgQb8ZjxfdhL2C15aoOkdoHazHyOitna2794R7uM7cYhFHzdeIRfAa3iWcOLH0Yp9Tl1mFiw6t2GpOlRRj%2FCEsqG8McBEreXF9QukmlEcdv8hHHj%2FDvAli1JerSGD1mbHIW%2FvB%2BNSsDrY55CLOV6jPqew4gl%2FI252K0xPWZCy7nS7E2ariT6efYn14fUaArMAEp3cLADaWTUhp3okGkmcHveUVog5PDmtSgwACRwsaDHRrJc7aHoZkxBddF3SYjSWmKMpdG5pG6jt5%2F1XNB8iNDrgNQUl1vzc6t7zXZHIDLq%2BEIZW3Hr9m6zAKJk1nsdsTvvNAp0j2tLRIoK3L7HcqoVxJQxA8pFNGnvVlZicjX%2FIxB%2FdYT2M02PYfEIgjc1ceqfbYyTCok2Ipp1BvCqPIELuBdI8oWsOG2%2B7z7vHA%2BjcsmWKI0HBbrJt8FSv%2F91kepQl53Io45M2X2IsOm%2BEcfrCiRlVqG6OTUmgtDHfpaZQSom%2F%2FiTQ4jhTvfJ4KseVVLl4v6zqluysnN%2FIHPmUAnUuToC4YWVL1HvJXchaO%2BpoG09LX5o%2B%2BC6sWhWyG80kF9CNBYo2APfRJYIon6pnwqlca5iR7pAp%2FaeZTrAOaq7owvYmpxAY6pgG5Y9Ij5OYg5SZ9s8qDgJt%2FQsf%2BaDxkKIyTnCTf%2BsGIcPQP4sxWIAg3I%2BPT9DheZml7T%2BrMY6Yax5OyrngtL61rCHK9rg2KoDa24a2faEgfWFUlYwc39kOCrtmXq%2BSaqLjwf9Cm3X5EbaWx5Vy6p6YCRL8fdcLsVq975110CoACo4H3AIdWHYgL7ve%2B8uMJ79VSJLV%2BG9KvA0zHmIPF5xsI7qs1zE2J&X-Amz-Signature=ec21dc5b8ca1669a9ef146e654d3bfc0e0ebe1a49dc8e7f0c3c4adc00f1c0e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRX5BX6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa7jjpkk9YPGhjfdXpQSdqi2OmMjog8hb%2FqX%2Fm9VSc0AiAYf4e80i0k8cD0UKWrwrsaC9VpxXFMvoPcUNcwjNWfkiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2oBIBOFh7v5CBXXMKtwDOIP7JGZAh20UazDgQb8ZjxfdhL2C15aoOkdoHazHyOitna2794R7uM7cYhFHzdeIRfAa3iWcOLH0Yp9Tl1mFiw6t2GpOlRRj%2FCEsqG8McBEreXF9QukmlEcdv8hHHj%2FDvAli1JerSGD1mbHIW%2FvB%2BNSsDrY55CLOV6jPqew4gl%2FI252K0xPWZCy7nS7E2ariT6efYn14fUaArMAEp3cLADaWTUhp3okGkmcHveUVog5PDmtSgwACRwsaDHRrJc7aHoZkxBddF3SYjSWmKMpdG5pG6jt5%2F1XNB8iNDrgNQUl1vzc6t7zXZHIDLq%2BEIZW3Hr9m6zAKJk1nsdsTvvNAp0j2tLRIoK3L7HcqoVxJQxA8pFNGnvVlZicjX%2FIxB%2FdYT2M02PYfEIgjc1ceqfbYyTCok2Ipp1BvCqPIELuBdI8oWsOG2%2B7z7vHA%2BjcsmWKI0HBbrJt8FSv%2F91kepQl53Io45M2X2IsOm%2BEcfrCiRlVqG6OTUmgtDHfpaZQSom%2F%2FiTQ4jhTvfJ4KseVVLl4v6zqluysnN%2FIHPmUAnUuToC4YWVL1HvJXchaO%2BpoG09LX5o%2B%2BC6sWhWyG80kF9CNBYo2APfRJYIon6pnwqlca5iR7pAp%2FaeZTrAOaq7owvYmpxAY6pgG5Y9Ij5OYg5SZ9s8qDgJt%2FQsf%2BaDxkKIyTnCTf%2BsGIcPQP4sxWIAg3I%2BPT9DheZml7T%2BrMY6Yax5OyrngtL61rCHK9rg2KoDa24a2faEgfWFUlYwc39kOCrtmXq%2BSaqLjwf9Cm3X5EbaWx5Vy6p6YCRL8fdcLsVq975110CoACo4H3AIdWHYgL7ve%2B8uMJ79VSJLV%2BG9KvA0zHmIPF5xsI7qs1zE2J&X-Amz-Signature=701dc109cff01d728904e8f8a243d99bb96a4f3d8d55b1d53f327cd257687e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRX5BX6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa7jjpkk9YPGhjfdXpQSdqi2OmMjog8hb%2FqX%2Fm9VSc0AiAYf4e80i0k8cD0UKWrwrsaC9VpxXFMvoPcUNcwjNWfkiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2oBIBOFh7v5CBXXMKtwDOIP7JGZAh20UazDgQb8ZjxfdhL2C15aoOkdoHazHyOitna2794R7uM7cYhFHzdeIRfAa3iWcOLH0Yp9Tl1mFiw6t2GpOlRRj%2FCEsqG8McBEreXF9QukmlEcdv8hHHj%2FDvAli1JerSGD1mbHIW%2FvB%2BNSsDrY55CLOV6jPqew4gl%2FI252K0xPWZCy7nS7E2ariT6efYn14fUaArMAEp3cLADaWTUhp3okGkmcHveUVog5PDmtSgwACRwsaDHRrJc7aHoZkxBddF3SYjSWmKMpdG5pG6jt5%2F1XNB8iNDrgNQUl1vzc6t7zXZHIDLq%2BEIZW3Hr9m6zAKJk1nsdsTvvNAp0j2tLRIoK3L7HcqoVxJQxA8pFNGnvVlZicjX%2FIxB%2FdYT2M02PYfEIgjc1ceqfbYyTCok2Ipp1BvCqPIELuBdI8oWsOG2%2B7z7vHA%2BjcsmWKI0HBbrJt8FSv%2F91kepQl53Io45M2X2IsOm%2BEcfrCiRlVqG6OTUmgtDHfpaZQSom%2F%2FiTQ4jhTvfJ4KseVVLl4v6zqluysnN%2FIHPmUAnUuToC4YWVL1HvJXchaO%2BpoG09LX5o%2B%2BC6sWhWyG80kF9CNBYo2APfRJYIon6pnwqlca5iR7pAp%2FaeZTrAOaq7owvYmpxAY6pgG5Y9Ij5OYg5SZ9s8qDgJt%2FQsf%2BaDxkKIyTnCTf%2BsGIcPQP4sxWIAg3I%2BPT9DheZml7T%2BrMY6Yax5OyrngtL61rCHK9rg2KoDa24a2faEgfWFUlYwc39kOCrtmXq%2BSaqLjwf9Cm3X5EbaWx5Vy6p6YCRL8fdcLsVq975110CoACo4H3AIdWHYgL7ve%2B8uMJ79VSJLV%2BG9KvA0zHmIPF5xsI7qs1zE2J&X-Amz-Signature=7477a4bbec8670fc5de72a4b9323ce80f3be0bd9735ee5d0c35a8d91039818e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRX5BX6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa7jjpkk9YPGhjfdXpQSdqi2OmMjog8hb%2FqX%2Fm9VSc0AiAYf4e80i0k8cD0UKWrwrsaC9VpxXFMvoPcUNcwjNWfkiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2oBIBOFh7v5CBXXMKtwDOIP7JGZAh20UazDgQb8ZjxfdhL2C15aoOkdoHazHyOitna2794R7uM7cYhFHzdeIRfAa3iWcOLH0Yp9Tl1mFiw6t2GpOlRRj%2FCEsqG8McBEreXF9QukmlEcdv8hHHj%2FDvAli1JerSGD1mbHIW%2FvB%2BNSsDrY55CLOV6jPqew4gl%2FI252K0xPWZCy7nS7E2ariT6efYn14fUaArMAEp3cLADaWTUhp3okGkmcHveUVog5PDmtSgwACRwsaDHRrJc7aHoZkxBddF3SYjSWmKMpdG5pG6jt5%2F1XNB8iNDrgNQUl1vzc6t7zXZHIDLq%2BEIZW3Hr9m6zAKJk1nsdsTvvNAp0j2tLRIoK3L7HcqoVxJQxA8pFNGnvVlZicjX%2FIxB%2FdYT2M02PYfEIgjc1ceqfbYyTCok2Ipp1BvCqPIELuBdI8oWsOG2%2B7z7vHA%2BjcsmWKI0HBbrJt8FSv%2F91kepQl53Io45M2X2IsOm%2BEcfrCiRlVqG6OTUmgtDHfpaZQSom%2F%2FiTQ4jhTvfJ4KseVVLl4v6zqluysnN%2FIHPmUAnUuToC4YWVL1HvJXchaO%2BpoG09LX5o%2B%2BC6sWhWyG80kF9CNBYo2APfRJYIon6pnwqlca5iR7pAp%2FaeZTrAOaq7owvYmpxAY6pgG5Y9Ij5OYg5SZ9s8qDgJt%2FQsf%2BaDxkKIyTnCTf%2BsGIcPQP4sxWIAg3I%2BPT9DheZml7T%2BrMY6Yax5OyrngtL61rCHK9rg2KoDa24a2faEgfWFUlYwc39kOCrtmXq%2BSaqLjwf9Cm3X5EbaWx5Vy6p6YCRL8fdcLsVq975110CoACo4H3AIdWHYgL7ve%2B8uMJ79VSJLV%2BG9KvA0zHmIPF5xsI7qs1zE2J&X-Amz-Signature=98f932c1a8ab17c446860995aa192afc63913821abccc4268ad2c1bfd2cf8710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRX5BX6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa7jjpkk9YPGhjfdXpQSdqi2OmMjog8hb%2FqX%2Fm9VSc0AiAYf4e80i0k8cD0UKWrwrsaC9VpxXFMvoPcUNcwjNWfkiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2oBIBOFh7v5CBXXMKtwDOIP7JGZAh20UazDgQb8ZjxfdhL2C15aoOkdoHazHyOitna2794R7uM7cYhFHzdeIRfAa3iWcOLH0Yp9Tl1mFiw6t2GpOlRRj%2FCEsqG8McBEreXF9QukmlEcdv8hHHj%2FDvAli1JerSGD1mbHIW%2FvB%2BNSsDrY55CLOV6jPqew4gl%2FI252K0xPWZCy7nS7E2ariT6efYn14fUaArMAEp3cLADaWTUhp3okGkmcHveUVog5PDmtSgwACRwsaDHRrJc7aHoZkxBddF3SYjSWmKMpdG5pG6jt5%2F1XNB8iNDrgNQUl1vzc6t7zXZHIDLq%2BEIZW3Hr9m6zAKJk1nsdsTvvNAp0j2tLRIoK3L7HcqoVxJQxA8pFNGnvVlZicjX%2FIxB%2FdYT2M02PYfEIgjc1ceqfbYyTCok2Ipp1BvCqPIELuBdI8oWsOG2%2B7z7vHA%2BjcsmWKI0HBbrJt8FSv%2F91kepQl53Io45M2X2IsOm%2BEcfrCiRlVqG6OTUmgtDHfpaZQSom%2F%2FiTQ4jhTvfJ4KseVVLl4v6zqluysnN%2FIHPmUAnUuToC4YWVL1HvJXchaO%2BpoG09LX5o%2B%2BC6sWhWyG80kF9CNBYo2APfRJYIon6pnwqlca5iR7pAp%2FaeZTrAOaq7owvYmpxAY6pgG5Y9Ij5OYg5SZ9s8qDgJt%2FQsf%2BaDxkKIyTnCTf%2BsGIcPQP4sxWIAg3I%2BPT9DheZml7T%2BrMY6Yax5OyrngtL61rCHK9rg2KoDa24a2faEgfWFUlYwc39kOCrtmXq%2BSaqLjwf9Cm3X5EbaWx5Vy6p6YCRL8fdcLsVq975110CoACo4H3AIdWHYgL7ve%2B8uMJ79VSJLV%2BG9KvA0zHmIPF5xsI7qs1zE2J&X-Amz-Signature=b1aafcc24c71fd42e0a79896cba6be6af03af5844a7931e9ae303c9b29bc88f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRX5BX6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa7jjpkk9YPGhjfdXpQSdqi2OmMjog8hb%2FqX%2Fm9VSc0AiAYf4e80i0k8cD0UKWrwrsaC9VpxXFMvoPcUNcwjNWfkiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2oBIBOFh7v5CBXXMKtwDOIP7JGZAh20UazDgQb8ZjxfdhL2C15aoOkdoHazHyOitna2794R7uM7cYhFHzdeIRfAa3iWcOLH0Yp9Tl1mFiw6t2GpOlRRj%2FCEsqG8McBEreXF9QukmlEcdv8hHHj%2FDvAli1JerSGD1mbHIW%2FvB%2BNSsDrY55CLOV6jPqew4gl%2FI252K0xPWZCy7nS7E2ariT6efYn14fUaArMAEp3cLADaWTUhp3okGkmcHveUVog5PDmtSgwACRwsaDHRrJc7aHoZkxBddF3SYjSWmKMpdG5pG6jt5%2F1XNB8iNDrgNQUl1vzc6t7zXZHIDLq%2BEIZW3Hr9m6zAKJk1nsdsTvvNAp0j2tLRIoK3L7HcqoVxJQxA8pFNGnvVlZicjX%2FIxB%2FdYT2M02PYfEIgjc1ceqfbYyTCok2Ipp1BvCqPIELuBdI8oWsOG2%2B7z7vHA%2BjcsmWKI0HBbrJt8FSv%2F91kepQl53Io45M2X2IsOm%2BEcfrCiRlVqG6OTUmgtDHfpaZQSom%2F%2FiTQ4jhTvfJ4KseVVLl4v6zqluysnN%2FIHPmUAnUuToC4YWVL1HvJXchaO%2BpoG09LX5o%2B%2BC6sWhWyG80kF9CNBYo2APfRJYIon6pnwqlca5iR7pAp%2FaeZTrAOaq7owvYmpxAY6pgG5Y9Ij5OYg5SZ9s8qDgJt%2FQsf%2BaDxkKIyTnCTf%2BsGIcPQP4sxWIAg3I%2BPT9DheZml7T%2BrMY6Yax5OyrngtL61rCHK9rg2KoDa24a2faEgfWFUlYwc39kOCrtmXq%2BSaqLjwf9Cm3X5EbaWx5Vy6p6YCRL8fdcLsVq975110CoACo4H3AIdWHYgL7ve%2B8uMJ79VSJLV%2BG9KvA0zHmIPF5xsI7qs1zE2J&X-Amz-Signature=0c2e31944cc6711906b4bb1d3abb8f158e1c7638f00ddf46a6763bc0e31a20c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRX5BX6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa7jjpkk9YPGhjfdXpQSdqi2OmMjog8hb%2FqX%2Fm9VSc0AiAYf4e80i0k8cD0UKWrwrsaC9VpxXFMvoPcUNcwjNWfkiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2oBIBOFh7v5CBXXMKtwDOIP7JGZAh20UazDgQb8ZjxfdhL2C15aoOkdoHazHyOitna2794R7uM7cYhFHzdeIRfAa3iWcOLH0Yp9Tl1mFiw6t2GpOlRRj%2FCEsqG8McBEreXF9QukmlEcdv8hHHj%2FDvAli1JerSGD1mbHIW%2FvB%2BNSsDrY55CLOV6jPqew4gl%2FI252K0xPWZCy7nS7E2ariT6efYn14fUaArMAEp3cLADaWTUhp3okGkmcHveUVog5PDmtSgwACRwsaDHRrJc7aHoZkxBddF3SYjSWmKMpdG5pG6jt5%2F1XNB8iNDrgNQUl1vzc6t7zXZHIDLq%2BEIZW3Hr9m6zAKJk1nsdsTvvNAp0j2tLRIoK3L7HcqoVxJQxA8pFNGnvVlZicjX%2FIxB%2FdYT2M02PYfEIgjc1ceqfbYyTCok2Ipp1BvCqPIELuBdI8oWsOG2%2B7z7vHA%2BjcsmWKI0HBbrJt8FSv%2F91kepQl53Io45M2X2IsOm%2BEcfrCiRlVqG6OTUmgtDHfpaZQSom%2F%2FiTQ4jhTvfJ4KseVVLl4v6zqluysnN%2FIHPmUAnUuToC4YWVL1HvJXchaO%2BpoG09LX5o%2B%2BC6sWhWyG80kF9CNBYo2APfRJYIon6pnwqlca5iR7pAp%2FaeZTrAOaq7owvYmpxAY6pgG5Y9Ij5OYg5SZ9s8qDgJt%2FQsf%2BaDxkKIyTnCTf%2BsGIcPQP4sxWIAg3I%2BPT9DheZml7T%2BrMY6Yax5OyrngtL61rCHK9rg2KoDa24a2faEgfWFUlYwc39kOCrtmXq%2BSaqLjwf9Cm3X5EbaWx5Vy6p6YCRL8fdcLsVq975110CoACo4H3AIdWHYgL7ve%2B8uMJ79VSJLV%2BG9KvA0zHmIPF5xsI7qs1zE2J&X-Amz-Signature=cc8827277838af7e136ad9d0e757c2e63b4e3ea97b51d9ad268a1063c021ee89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRX5BX6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa7jjpkk9YPGhjfdXpQSdqi2OmMjog8hb%2FqX%2Fm9VSc0AiAYf4e80i0k8cD0UKWrwrsaC9VpxXFMvoPcUNcwjNWfkiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2oBIBOFh7v5CBXXMKtwDOIP7JGZAh20UazDgQb8ZjxfdhL2C15aoOkdoHazHyOitna2794R7uM7cYhFHzdeIRfAa3iWcOLH0Yp9Tl1mFiw6t2GpOlRRj%2FCEsqG8McBEreXF9QukmlEcdv8hHHj%2FDvAli1JerSGD1mbHIW%2FvB%2BNSsDrY55CLOV6jPqew4gl%2FI252K0xPWZCy7nS7E2ariT6efYn14fUaArMAEp3cLADaWTUhp3okGkmcHveUVog5PDmtSgwACRwsaDHRrJc7aHoZkxBddF3SYjSWmKMpdG5pG6jt5%2F1XNB8iNDrgNQUl1vzc6t7zXZHIDLq%2BEIZW3Hr9m6zAKJk1nsdsTvvNAp0j2tLRIoK3L7HcqoVxJQxA8pFNGnvVlZicjX%2FIxB%2FdYT2M02PYfEIgjc1ceqfbYyTCok2Ipp1BvCqPIELuBdI8oWsOG2%2B7z7vHA%2BjcsmWKI0HBbrJt8FSv%2F91kepQl53Io45M2X2IsOm%2BEcfrCiRlVqG6OTUmgtDHfpaZQSom%2F%2FiTQ4jhTvfJ4KseVVLl4v6zqluysnN%2FIHPmUAnUuToC4YWVL1HvJXchaO%2BpoG09LX5o%2B%2BC6sWhWyG80kF9CNBYo2APfRJYIon6pnwqlca5iR7pAp%2FaeZTrAOaq7owvYmpxAY6pgG5Y9Ij5OYg5SZ9s8qDgJt%2FQsf%2BaDxkKIyTnCTf%2BsGIcPQP4sxWIAg3I%2BPT9DheZml7T%2BrMY6Yax5OyrngtL61rCHK9rg2KoDa24a2faEgfWFUlYwc39kOCrtmXq%2BSaqLjwf9Cm3X5EbaWx5Vy6p6YCRL8fdcLsVq975110CoACo4H3AIdWHYgL7ve%2B8uMJ79VSJLV%2BG9KvA0zHmIPF5xsI7qs1zE2J&X-Amz-Signature=9f018ab27515fca2032ae185663de0724b6fa957186908f39566c59b8f1b984a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
