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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6QICSQU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCkTVijGt5HsqshHSenfJWVcTIdMI1OoBtF9rKANJMh2gIhAJvcnbGjGxIIuE1KLg1ZTedwtP3Y9TxjTCfZUrwJ1ji%2FKv8DCE4QABoMNjM3NDIzMTgzODA1Igx6fSsypQADl8VXvG0q3APub4yW5J6UXBIb5oq9F73QpUj2%2BiLHPaRRJiDSOQy1Vx69u4P8b3r%2BwtPb7crS8qnhFfIt90RfbwcFn9YboPd%2FHiJ7TT6JCNVhA7gOyRwlrfxf1jsjUCxUAOGKuPYOSUfWmgLAXGOw047GE057yTJ1DtskD3UvkustAohVsi90wBCcrtX5Pq%2BkL%2FLiQ%2BZ9Ug%2ByRYbSDNaJEq7MXHXYiZ3oBi0lJhXadDu8Db47HMnJpTjJUTT4OeKQwBCEybUnjCJocq0Yy3ZWIS2Yu6BMZ7OucHV6bndBPAkb7RNjU9kwNFkycrYnbBNFSWHGICxxxP5PP9xyzhsOwapZHlDllO3QvKg%2FlnuTo5fQ7qQIMUNi%2Bv67syVh5MhayahUP4CNk8PGjLejgTpCOzqHISM3%2FfZ5IcUHXbgl1QaqzV3W8EbuOUsdRPocfGflf2qGa8FBX6qRjD6QhPPQtavQYD3b3vMz%2FawUycpMdKAOxAaFFsHZrfjWLmV3SH3G1Pu7FEJBpsXXB%2FeDyuNi4zGpqwgaG4YH1%2FjpIHyxbcDO%2Fm8NNIZq%2Bpnyc1RpSaucFThGGlv7rvIZGn%2BnW8MpoXe%2Bbbo8kJq9dbdQuwqsD8DbK%2BiPwXtvRqU5OQLpoUH21Ft3HjCU0Y%2FEBjqkAaojm7%2BrdaGq22NdqzJjXmBeT3XvAlOF9%2BSknnbxkipYBrw6UorWTzgfdD4uvotG%2Br8v%2FOjM1EUvHZfB3p0iqxS6AFmwIvzIyHKHK9TadENfp3XDbSpPNQjHM5ZFeu%2FLCvuNqa1lPqryaW2QDkeJbNws0o%2BxEkcArRQIF%2FQPMDeeQS1AEHFV5uui6x810GnT0EMk%2FU5CGdDp1nc8YXuuy%2FSqrun9&X-Amz-Signature=f6265346ab91f66d062b0f2ba0a92543f524c615fea32e67a932f9f461bf02b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6QICSQU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCkTVijGt5HsqshHSenfJWVcTIdMI1OoBtF9rKANJMh2gIhAJvcnbGjGxIIuE1KLg1ZTedwtP3Y9TxjTCfZUrwJ1ji%2FKv8DCE4QABoMNjM3NDIzMTgzODA1Igx6fSsypQADl8VXvG0q3APub4yW5J6UXBIb5oq9F73QpUj2%2BiLHPaRRJiDSOQy1Vx69u4P8b3r%2BwtPb7crS8qnhFfIt90RfbwcFn9YboPd%2FHiJ7TT6JCNVhA7gOyRwlrfxf1jsjUCxUAOGKuPYOSUfWmgLAXGOw047GE057yTJ1DtskD3UvkustAohVsi90wBCcrtX5Pq%2BkL%2FLiQ%2BZ9Ug%2ByRYbSDNaJEq7MXHXYiZ3oBi0lJhXadDu8Db47HMnJpTjJUTT4OeKQwBCEybUnjCJocq0Yy3ZWIS2Yu6BMZ7OucHV6bndBPAkb7RNjU9kwNFkycrYnbBNFSWHGICxxxP5PP9xyzhsOwapZHlDllO3QvKg%2FlnuTo5fQ7qQIMUNi%2Bv67syVh5MhayahUP4CNk8PGjLejgTpCOzqHISM3%2FfZ5IcUHXbgl1QaqzV3W8EbuOUsdRPocfGflf2qGa8FBX6qRjD6QhPPQtavQYD3b3vMz%2FawUycpMdKAOxAaFFsHZrfjWLmV3SH3G1Pu7FEJBpsXXB%2FeDyuNi4zGpqwgaG4YH1%2FjpIHyxbcDO%2Fm8NNIZq%2Bpnyc1RpSaucFThGGlv7rvIZGn%2BnW8MpoXe%2Bbbo8kJq9dbdQuwqsD8DbK%2BiPwXtvRqU5OQLpoUH21Ft3HjCU0Y%2FEBjqkAaojm7%2BrdaGq22NdqzJjXmBeT3XvAlOF9%2BSknnbxkipYBrw6UorWTzgfdD4uvotG%2Br8v%2FOjM1EUvHZfB3p0iqxS6AFmwIvzIyHKHK9TadENfp3XDbSpPNQjHM5ZFeu%2FLCvuNqa1lPqryaW2QDkeJbNws0o%2BxEkcArRQIF%2FQPMDeeQS1AEHFV5uui6x810GnT0EMk%2FU5CGdDp1nc8YXuuy%2FSqrun9&X-Amz-Signature=56c3cf621591beca458e85bb27574b7c9d888a1eed4b1d913eb4086d15232567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6QICSQU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCkTVijGt5HsqshHSenfJWVcTIdMI1OoBtF9rKANJMh2gIhAJvcnbGjGxIIuE1KLg1ZTedwtP3Y9TxjTCfZUrwJ1ji%2FKv8DCE4QABoMNjM3NDIzMTgzODA1Igx6fSsypQADl8VXvG0q3APub4yW5J6UXBIb5oq9F73QpUj2%2BiLHPaRRJiDSOQy1Vx69u4P8b3r%2BwtPb7crS8qnhFfIt90RfbwcFn9YboPd%2FHiJ7TT6JCNVhA7gOyRwlrfxf1jsjUCxUAOGKuPYOSUfWmgLAXGOw047GE057yTJ1DtskD3UvkustAohVsi90wBCcrtX5Pq%2BkL%2FLiQ%2BZ9Ug%2ByRYbSDNaJEq7MXHXYiZ3oBi0lJhXadDu8Db47HMnJpTjJUTT4OeKQwBCEybUnjCJocq0Yy3ZWIS2Yu6BMZ7OucHV6bndBPAkb7RNjU9kwNFkycrYnbBNFSWHGICxxxP5PP9xyzhsOwapZHlDllO3QvKg%2FlnuTo5fQ7qQIMUNi%2Bv67syVh5MhayahUP4CNk8PGjLejgTpCOzqHISM3%2FfZ5IcUHXbgl1QaqzV3W8EbuOUsdRPocfGflf2qGa8FBX6qRjD6QhPPQtavQYD3b3vMz%2FawUycpMdKAOxAaFFsHZrfjWLmV3SH3G1Pu7FEJBpsXXB%2FeDyuNi4zGpqwgaG4YH1%2FjpIHyxbcDO%2Fm8NNIZq%2Bpnyc1RpSaucFThGGlv7rvIZGn%2BnW8MpoXe%2Bbbo8kJq9dbdQuwqsD8DbK%2BiPwXtvRqU5OQLpoUH21Ft3HjCU0Y%2FEBjqkAaojm7%2BrdaGq22NdqzJjXmBeT3XvAlOF9%2BSknnbxkipYBrw6UorWTzgfdD4uvotG%2Br8v%2FOjM1EUvHZfB3p0iqxS6AFmwIvzIyHKHK9TadENfp3XDbSpPNQjHM5ZFeu%2FLCvuNqa1lPqryaW2QDkeJbNws0o%2BxEkcArRQIF%2FQPMDeeQS1AEHFV5uui6x810GnT0EMk%2FU5CGdDp1nc8YXuuy%2FSqrun9&X-Amz-Signature=e6f332e7ca125794224c2e635f63a70efea3cec77290a2799b3e642466d3fce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6QICSQU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCkTVijGt5HsqshHSenfJWVcTIdMI1OoBtF9rKANJMh2gIhAJvcnbGjGxIIuE1KLg1ZTedwtP3Y9TxjTCfZUrwJ1ji%2FKv8DCE4QABoMNjM3NDIzMTgzODA1Igx6fSsypQADl8VXvG0q3APub4yW5J6UXBIb5oq9F73QpUj2%2BiLHPaRRJiDSOQy1Vx69u4P8b3r%2BwtPb7crS8qnhFfIt90RfbwcFn9YboPd%2FHiJ7TT6JCNVhA7gOyRwlrfxf1jsjUCxUAOGKuPYOSUfWmgLAXGOw047GE057yTJ1DtskD3UvkustAohVsi90wBCcrtX5Pq%2BkL%2FLiQ%2BZ9Ug%2ByRYbSDNaJEq7MXHXYiZ3oBi0lJhXadDu8Db47HMnJpTjJUTT4OeKQwBCEybUnjCJocq0Yy3ZWIS2Yu6BMZ7OucHV6bndBPAkb7RNjU9kwNFkycrYnbBNFSWHGICxxxP5PP9xyzhsOwapZHlDllO3QvKg%2FlnuTo5fQ7qQIMUNi%2Bv67syVh5MhayahUP4CNk8PGjLejgTpCOzqHISM3%2FfZ5IcUHXbgl1QaqzV3W8EbuOUsdRPocfGflf2qGa8FBX6qRjD6QhPPQtavQYD3b3vMz%2FawUycpMdKAOxAaFFsHZrfjWLmV3SH3G1Pu7FEJBpsXXB%2FeDyuNi4zGpqwgaG4YH1%2FjpIHyxbcDO%2Fm8NNIZq%2Bpnyc1RpSaucFThGGlv7rvIZGn%2BnW8MpoXe%2Bbbo8kJq9dbdQuwqsD8DbK%2BiPwXtvRqU5OQLpoUH21Ft3HjCU0Y%2FEBjqkAaojm7%2BrdaGq22NdqzJjXmBeT3XvAlOF9%2BSknnbxkipYBrw6UorWTzgfdD4uvotG%2Br8v%2FOjM1EUvHZfB3p0iqxS6AFmwIvzIyHKHK9TadENfp3XDbSpPNQjHM5ZFeu%2FLCvuNqa1lPqryaW2QDkeJbNws0o%2BxEkcArRQIF%2FQPMDeeQS1AEHFV5uui6x810GnT0EMk%2FU5CGdDp1nc8YXuuy%2FSqrun9&X-Amz-Signature=7786967f2a7d71b87754c9e5b80f94d11144e4f1b7b75c3ef91508a7688757bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6QICSQU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCkTVijGt5HsqshHSenfJWVcTIdMI1OoBtF9rKANJMh2gIhAJvcnbGjGxIIuE1KLg1ZTedwtP3Y9TxjTCfZUrwJ1ji%2FKv8DCE4QABoMNjM3NDIzMTgzODA1Igx6fSsypQADl8VXvG0q3APub4yW5J6UXBIb5oq9F73QpUj2%2BiLHPaRRJiDSOQy1Vx69u4P8b3r%2BwtPb7crS8qnhFfIt90RfbwcFn9YboPd%2FHiJ7TT6JCNVhA7gOyRwlrfxf1jsjUCxUAOGKuPYOSUfWmgLAXGOw047GE057yTJ1DtskD3UvkustAohVsi90wBCcrtX5Pq%2BkL%2FLiQ%2BZ9Ug%2ByRYbSDNaJEq7MXHXYiZ3oBi0lJhXadDu8Db47HMnJpTjJUTT4OeKQwBCEybUnjCJocq0Yy3ZWIS2Yu6BMZ7OucHV6bndBPAkb7RNjU9kwNFkycrYnbBNFSWHGICxxxP5PP9xyzhsOwapZHlDllO3QvKg%2FlnuTo5fQ7qQIMUNi%2Bv67syVh5MhayahUP4CNk8PGjLejgTpCOzqHISM3%2FfZ5IcUHXbgl1QaqzV3W8EbuOUsdRPocfGflf2qGa8FBX6qRjD6QhPPQtavQYD3b3vMz%2FawUycpMdKAOxAaFFsHZrfjWLmV3SH3G1Pu7FEJBpsXXB%2FeDyuNi4zGpqwgaG4YH1%2FjpIHyxbcDO%2Fm8NNIZq%2Bpnyc1RpSaucFThGGlv7rvIZGn%2BnW8MpoXe%2Bbbo8kJq9dbdQuwqsD8DbK%2BiPwXtvRqU5OQLpoUH21Ft3HjCU0Y%2FEBjqkAaojm7%2BrdaGq22NdqzJjXmBeT3XvAlOF9%2BSknnbxkipYBrw6UorWTzgfdD4uvotG%2Br8v%2FOjM1EUvHZfB3p0iqxS6AFmwIvzIyHKHK9TadENfp3XDbSpPNQjHM5ZFeu%2FLCvuNqa1lPqryaW2QDkeJbNws0o%2BxEkcArRQIF%2FQPMDeeQS1AEHFV5uui6x810GnT0EMk%2FU5CGdDp1nc8YXuuy%2FSqrun9&X-Amz-Signature=f2d38b26b4441ac005ba189e8beda0b2972664956b198fb28b18bf60e14a4d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6QICSQU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCkTVijGt5HsqshHSenfJWVcTIdMI1OoBtF9rKANJMh2gIhAJvcnbGjGxIIuE1KLg1ZTedwtP3Y9TxjTCfZUrwJ1ji%2FKv8DCE4QABoMNjM3NDIzMTgzODA1Igx6fSsypQADl8VXvG0q3APub4yW5J6UXBIb5oq9F73QpUj2%2BiLHPaRRJiDSOQy1Vx69u4P8b3r%2BwtPb7crS8qnhFfIt90RfbwcFn9YboPd%2FHiJ7TT6JCNVhA7gOyRwlrfxf1jsjUCxUAOGKuPYOSUfWmgLAXGOw047GE057yTJ1DtskD3UvkustAohVsi90wBCcrtX5Pq%2BkL%2FLiQ%2BZ9Ug%2ByRYbSDNaJEq7MXHXYiZ3oBi0lJhXadDu8Db47HMnJpTjJUTT4OeKQwBCEybUnjCJocq0Yy3ZWIS2Yu6BMZ7OucHV6bndBPAkb7RNjU9kwNFkycrYnbBNFSWHGICxxxP5PP9xyzhsOwapZHlDllO3QvKg%2FlnuTo5fQ7qQIMUNi%2Bv67syVh5MhayahUP4CNk8PGjLejgTpCOzqHISM3%2FfZ5IcUHXbgl1QaqzV3W8EbuOUsdRPocfGflf2qGa8FBX6qRjD6QhPPQtavQYD3b3vMz%2FawUycpMdKAOxAaFFsHZrfjWLmV3SH3G1Pu7FEJBpsXXB%2FeDyuNi4zGpqwgaG4YH1%2FjpIHyxbcDO%2Fm8NNIZq%2Bpnyc1RpSaucFThGGlv7rvIZGn%2BnW8MpoXe%2Bbbo8kJq9dbdQuwqsD8DbK%2BiPwXtvRqU5OQLpoUH21Ft3HjCU0Y%2FEBjqkAaojm7%2BrdaGq22NdqzJjXmBeT3XvAlOF9%2BSknnbxkipYBrw6UorWTzgfdD4uvotG%2Br8v%2FOjM1EUvHZfB3p0iqxS6AFmwIvzIyHKHK9TadENfp3XDbSpPNQjHM5ZFeu%2FLCvuNqa1lPqryaW2QDkeJbNws0o%2BxEkcArRQIF%2FQPMDeeQS1AEHFV5uui6x810GnT0EMk%2FU5CGdDp1nc8YXuuy%2FSqrun9&X-Amz-Signature=54813300aff27acee900ee5780b7e905410a8c9271a229ba3d52809825cdce9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
