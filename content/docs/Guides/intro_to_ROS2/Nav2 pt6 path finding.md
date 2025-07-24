---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T10:36:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T10:36:00.000Z"
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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCX3QAQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICko6w%2BOP5JiyrZNVj%2Fr5fASlonux3L2nn0VxdKUFkh7AiEA9sH27caY9uxW3NQAbioNdqGuHFS4vAtoKhsouEbO7sAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDArMmA1w9v%2FgVIYSMyrcA3Ihju46%2BMC0sWMt68WNRFJC%2FqmCJiwnD%2Fs6gQjreZrT0mrHKdxt1L1Ay%2FKFJMLo2sEyuLSiyvYkaUuYofcjGSVGdyrjf8uqHlR%2F07lCq5pc%2FOIuPH%2F4QdGdOTx%2BgHs0jwRguTviyPDrrQ%2Ft4r%2FbiPcfo75LfEDl1L0FWHF99rrjeNWWqFE0LJyoTsJdG2WKmfZMXiccKrp63dwmiotGhkVBJXZP9tXLrYx6qES7Q501Agb52g3xL7bT2paSR37Jzbq%2FFvBwTq1r5CLGEp3j5AMavEYslYAraymaM2AwA9szvgrmzxAkAF3w1MAeUS8XzJ3PPvcM0RxoAksiq6Qh7PN1AXVkYrGKmGINwjTFWAwT4Y4EsgBPea38FtjwbYqhs12K%2F8pyRHCX5jH8dHgzIxytDvMZt95H4v%2B%2BrvVxNWHSqsLRw9R76ti%2FDkkKsVZ9qb1UcJcZR2B7TCH0qSajhFxCBZl247WNNV0rCmEzevmGZsqiwDqAbfAf2YWXSec5gKGHeQZj%2Batbd4DT8ijq2WY102QIqcU8oJVNa3vjyvbpVi0QSUzhII3o%2BUi0IwvQ8tC1w25yJfuTH8w93DbZiuaFYJscEYfso%2BxL9ijE29d8QJjBiXVhpELTAgfTMP2xicQGOqUBo6Bf0nagBBk1N7XD8GNkfvDr8VF1IJFI6JGCoGFw83B5C45jx%2FXACsjf2idnvXN%2FVrUk9Wb6pHapayOfAibMPc8x9WTLLDsJsGaPioT1SKIbYaWen6hDpYBNoaTxbmNDO2FX6k%2FIHpVhQXvbvJVkXs7Mat3ErVkq1GbAV6KXW10%2FpxMlpPpOzQIsK06sAkeC0%2FNWxzt5nsLLy%2FxBQ99xeVW4eqLf&X-Amz-Signature=ce1a5f00a787d85b0b11920a55b35de62d5ac83ea6186f6730b08551a1d6c1a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCX3QAQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICko6w%2BOP5JiyrZNVj%2Fr5fASlonux3L2nn0VxdKUFkh7AiEA9sH27caY9uxW3NQAbioNdqGuHFS4vAtoKhsouEbO7sAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDArMmA1w9v%2FgVIYSMyrcA3Ihju46%2BMC0sWMt68WNRFJC%2FqmCJiwnD%2Fs6gQjreZrT0mrHKdxt1L1Ay%2FKFJMLo2sEyuLSiyvYkaUuYofcjGSVGdyrjf8uqHlR%2F07lCq5pc%2FOIuPH%2F4QdGdOTx%2BgHs0jwRguTviyPDrrQ%2Ft4r%2FbiPcfo75LfEDl1L0FWHF99rrjeNWWqFE0LJyoTsJdG2WKmfZMXiccKrp63dwmiotGhkVBJXZP9tXLrYx6qES7Q501Agb52g3xL7bT2paSR37Jzbq%2FFvBwTq1r5CLGEp3j5AMavEYslYAraymaM2AwA9szvgrmzxAkAF3w1MAeUS8XzJ3PPvcM0RxoAksiq6Qh7PN1AXVkYrGKmGINwjTFWAwT4Y4EsgBPea38FtjwbYqhs12K%2F8pyRHCX5jH8dHgzIxytDvMZt95H4v%2B%2BrvVxNWHSqsLRw9R76ti%2FDkkKsVZ9qb1UcJcZR2B7TCH0qSajhFxCBZl247WNNV0rCmEzevmGZsqiwDqAbfAf2YWXSec5gKGHeQZj%2Batbd4DT8ijq2WY102QIqcU8oJVNa3vjyvbpVi0QSUzhII3o%2BUi0IwvQ8tC1w25yJfuTH8w93DbZiuaFYJscEYfso%2BxL9ijE29d8QJjBiXVhpELTAgfTMP2xicQGOqUBo6Bf0nagBBk1N7XD8GNkfvDr8VF1IJFI6JGCoGFw83B5C45jx%2FXACsjf2idnvXN%2FVrUk9Wb6pHapayOfAibMPc8x9WTLLDsJsGaPioT1SKIbYaWen6hDpYBNoaTxbmNDO2FX6k%2FIHpVhQXvbvJVkXs7Mat3ErVkq1GbAV6KXW10%2FpxMlpPpOzQIsK06sAkeC0%2FNWxzt5nsLLy%2FxBQ99xeVW4eqLf&X-Amz-Signature=84d50c2ec12949f279434cdb028781513d9da708317001de59423be122d12f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCX3QAQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICko6w%2BOP5JiyrZNVj%2Fr5fASlonux3L2nn0VxdKUFkh7AiEA9sH27caY9uxW3NQAbioNdqGuHFS4vAtoKhsouEbO7sAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDArMmA1w9v%2FgVIYSMyrcA3Ihju46%2BMC0sWMt68WNRFJC%2FqmCJiwnD%2Fs6gQjreZrT0mrHKdxt1L1Ay%2FKFJMLo2sEyuLSiyvYkaUuYofcjGSVGdyrjf8uqHlR%2F07lCq5pc%2FOIuPH%2F4QdGdOTx%2BgHs0jwRguTviyPDrrQ%2Ft4r%2FbiPcfo75LfEDl1L0FWHF99rrjeNWWqFE0LJyoTsJdG2WKmfZMXiccKrp63dwmiotGhkVBJXZP9tXLrYx6qES7Q501Agb52g3xL7bT2paSR37Jzbq%2FFvBwTq1r5CLGEp3j5AMavEYslYAraymaM2AwA9szvgrmzxAkAF3w1MAeUS8XzJ3PPvcM0RxoAksiq6Qh7PN1AXVkYrGKmGINwjTFWAwT4Y4EsgBPea38FtjwbYqhs12K%2F8pyRHCX5jH8dHgzIxytDvMZt95H4v%2B%2BrvVxNWHSqsLRw9R76ti%2FDkkKsVZ9qb1UcJcZR2B7TCH0qSajhFxCBZl247WNNV0rCmEzevmGZsqiwDqAbfAf2YWXSec5gKGHeQZj%2Batbd4DT8ijq2WY102QIqcU8oJVNa3vjyvbpVi0QSUzhII3o%2BUi0IwvQ8tC1w25yJfuTH8w93DbZiuaFYJscEYfso%2BxL9ijE29d8QJjBiXVhpELTAgfTMP2xicQGOqUBo6Bf0nagBBk1N7XD8GNkfvDr8VF1IJFI6JGCoGFw83B5C45jx%2FXACsjf2idnvXN%2FVrUk9Wb6pHapayOfAibMPc8x9WTLLDsJsGaPioT1SKIbYaWen6hDpYBNoaTxbmNDO2FX6k%2FIHpVhQXvbvJVkXs7Mat3ErVkq1GbAV6KXW10%2FpxMlpPpOzQIsK06sAkeC0%2FNWxzt5nsLLy%2FxBQ99xeVW4eqLf&X-Amz-Signature=ac690a25645b3263437e1c7ed00b9d376124088f488db59f8a685a0bfd0dbd68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCX3QAQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICko6w%2BOP5JiyrZNVj%2Fr5fASlonux3L2nn0VxdKUFkh7AiEA9sH27caY9uxW3NQAbioNdqGuHFS4vAtoKhsouEbO7sAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDArMmA1w9v%2FgVIYSMyrcA3Ihju46%2BMC0sWMt68WNRFJC%2FqmCJiwnD%2Fs6gQjreZrT0mrHKdxt1L1Ay%2FKFJMLo2sEyuLSiyvYkaUuYofcjGSVGdyrjf8uqHlR%2F07lCq5pc%2FOIuPH%2F4QdGdOTx%2BgHs0jwRguTviyPDrrQ%2Ft4r%2FbiPcfo75LfEDl1L0FWHF99rrjeNWWqFE0LJyoTsJdG2WKmfZMXiccKrp63dwmiotGhkVBJXZP9tXLrYx6qES7Q501Agb52g3xL7bT2paSR37Jzbq%2FFvBwTq1r5CLGEp3j5AMavEYslYAraymaM2AwA9szvgrmzxAkAF3w1MAeUS8XzJ3PPvcM0RxoAksiq6Qh7PN1AXVkYrGKmGINwjTFWAwT4Y4EsgBPea38FtjwbYqhs12K%2F8pyRHCX5jH8dHgzIxytDvMZt95H4v%2B%2BrvVxNWHSqsLRw9R76ti%2FDkkKsVZ9qb1UcJcZR2B7TCH0qSajhFxCBZl247WNNV0rCmEzevmGZsqiwDqAbfAf2YWXSec5gKGHeQZj%2Batbd4DT8ijq2WY102QIqcU8oJVNa3vjyvbpVi0QSUzhII3o%2BUi0IwvQ8tC1w25yJfuTH8w93DbZiuaFYJscEYfso%2BxL9ijE29d8QJjBiXVhpELTAgfTMP2xicQGOqUBo6Bf0nagBBk1N7XD8GNkfvDr8VF1IJFI6JGCoGFw83B5C45jx%2FXACsjf2idnvXN%2FVrUk9Wb6pHapayOfAibMPc8x9WTLLDsJsGaPioT1SKIbYaWen6hDpYBNoaTxbmNDO2FX6k%2FIHpVhQXvbvJVkXs7Mat3ErVkq1GbAV6KXW10%2FpxMlpPpOzQIsK06sAkeC0%2FNWxzt5nsLLy%2FxBQ99xeVW4eqLf&X-Amz-Signature=308a736dc6ff5401c70c85168c76baacff27c5f9155995508266f82ff3e02bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCX3QAQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICko6w%2BOP5JiyrZNVj%2Fr5fASlonux3L2nn0VxdKUFkh7AiEA9sH27caY9uxW3NQAbioNdqGuHFS4vAtoKhsouEbO7sAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDArMmA1w9v%2FgVIYSMyrcA3Ihju46%2BMC0sWMt68WNRFJC%2FqmCJiwnD%2Fs6gQjreZrT0mrHKdxt1L1Ay%2FKFJMLo2sEyuLSiyvYkaUuYofcjGSVGdyrjf8uqHlR%2F07lCq5pc%2FOIuPH%2F4QdGdOTx%2BgHs0jwRguTviyPDrrQ%2Ft4r%2FbiPcfo75LfEDl1L0FWHF99rrjeNWWqFE0LJyoTsJdG2WKmfZMXiccKrp63dwmiotGhkVBJXZP9tXLrYx6qES7Q501Agb52g3xL7bT2paSR37Jzbq%2FFvBwTq1r5CLGEp3j5AMavEYslYAraymaM2AwA9szvgrmzxAkAF3w1MAeUS8XzJ3PPvcM0RxoAksiq6Qh7PN1AXVkYrGKmGINwjTFWAwT4Y4EsgBPea38FtjwbYqhs12K%2F8pyRHCX5jH8dHgzIxytDvMZt95H4v%2B%2BrvVxNWHSqsLRw9R76ti%2FDkkKsVZ9qb1UcJcZR2B7TCH0qSajhFxCBZl247WNNV0rCmEzevmGZsqiwDqAbfAf2YWXSec5gKGHeQZj%2Batbd4DT8ijq2WY102QIqcU8oJVNa3vjyvbpVi0QSUzhII3o%2BUi0IwvQ8tC1w25yJfuTH8w93DbZiuaFYJscEYfso%2BxL9ijE29d8QJjBiXVhpELTAgfTMP2xicQGOqUBo6Bf0nagBBk1N7XD8GNkfvDr8VF1IJFI6JGCoGFw83B5C45jx%2FXACsjf2idnvXN%2FVrUk9Wb6pHapayOfAibMPc8x9WTLLDsJsGaPioT1SKIbYaWen6hDpYBNoaTxbmNDO2FX6k%2FIHpVhQXvbvJVkXs7Mat3ErVkq1GbAV6KXW10%2FpxMlpPpOzQIsK06sAkeC0%2FNWxzt5nsLLy%2FxBQ99xeVW4eqLf&X-Amz-Signature=49193f24c7c6ff0ba7ca26911652b4f480f4f565e1d863da2516cfe19634a9c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCX3QAQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICko6w%2BOP5JiyrZNVj%2Fr5fASlonux3L2nn0VxdKUFkh7AiEA9sH27caY9uxW3NQAbioNdqGuHFS4vAtoKhsouEbO7sAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDArMmA1w9v%2FgVIYSMyrcA3Ihju46%2BMC0sWMt68WNRFJC%2FqmCJiwnD%2Fs6gQjreZrT0mrHKdxt1L1Ay%2FKFJMLo2sEyuLSiyvYkaUuYofcjGSVGdyrjf8uqHlR%2F07lCq5pc%2FOIuPH%2F4QdGdOTx%2BgHs0jwRguTviyPDrrQ%2Ft4r%2FbiPcfo75LfEDl1L0FWHF99rrjeNWWqFE0LJyoTsJdG2WKmfZMXiccKrp63dwmiotGhkVBJXZP9tXLrYx6qES7Q501Agb52g3xL7bT2paSR37Jzbq%2FFvBwTq1r5CLGEp3j5AMavEYslYAraymaM2AwA9szvgrmzxAkAF3w1MAeUS8XzJ3PPvcM0RxoAksiq6Qh7PN1AXVkYrGKmGINwjTFWAwT4Y4EsgBPea38FtjwbYqhs12K%2F8pyRHCX5jH8dHgzIxytDvMZt95H4v%2B%2BrvVxNWHSqsLRw9R76ti%2FDkkKsVZ9qb1UcJcZR2B7TCH0qSajhFxCBZl247WNNV0rCmEzevmGZsqiwDqAbfAf2YWXSec5gKGHeQZj%2Batbd4DT8ijq2WY102QIqcU8oJVNa3vjyvbpVi0QSUzhII3o%2BUi0IwvQ8tC1w25yJfuTH8w93DbZiuaFYJscEYfso%2BxL9ijE29d8QJjBiXVhpELTAgfTMP2xicQGOqUBo6Bf0nagBBk1N7XD8GNkfvDr8VF1IJFI6JGCoGFw83B5C45jx%2FXACsjf2idnvXN%2FVrUk9Wb6pHapayOfAibMPc8x9WTLLDsJsGaPioT1SKIbYaWen6hDpYBNoaTxbmNDO2FX6k%2FIHpVhQXvbvJVkXs7Mat3ErVkq1GbAV6KXW10%2FpxMlpPpOzQIsK06sAkeC0%2FNWxzt5nsLLy%2FxBQ99xeVW4eqLf&X-Amz-Signature=d46a79ff3aa94b8c9949ff149f63d52effbeadee91d4ad73bfe97c1ff4fe959e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
