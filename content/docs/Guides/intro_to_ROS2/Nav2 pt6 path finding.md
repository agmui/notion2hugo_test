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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGNJRU4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEy6ScanhYabtRgnYmj5XkHXkrHEfWWt5fvQKNC6lyxIAiBy1dA4Fvr8OWM0Py6k1WikAcb0egit1ZaTew%2FkOqE22Sr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMmotl7DX4GtpfqPT6KtwDCNk57peQMs9q4V0d4ddj5F6neomWrOBuOfiT42U2miztRRnnfJwqs0LvuCgUGEq%2BUz4vS8FSK5j6cldNCG5aOVrrUMWTPdI2BIeGcuZo%2BbJxB%2Bujg%2FEjqiXjV9OcrnCrUbGLYKxnqWBsLUoshs6PcFUIXW2wghKveCImBm84D57InhkZvaj0y4vtAsVe9pOkrnCyrygbyr%2F7qcIMdk5wVhnWlij5bJ0%2BVnE1i9Iohx52ugFOkOlIk0%2FHcP9mGsIOyD6JEC%2FdKwFS9AH1JaXxFQKR9MdWXn9pXRQMnNMB5TQFHqUVgUug%2BhSU2Db%2FFN5ReCDK7OGwOSw8jA8%2FwT4ImOt4x2JjSXtEMdqi5Mbt8bXkWRPCmTSmXU3SjUmzLYJRW6h%2F5%2B192CGPHrxfBCWf09CsN2w2HqyA4sIYyCeKU1x82KLhE%2BVk3psXkiHmdZ5oMPeb%2FFQOPSigbmjWSze4heuC9TWUM2Owgj8ffjLYrgMjJRDV1Slx9WfEw2umEScDj4JiidxXnCc2RoKaET6gLWe8L9KTSz%2BpYlywJbzzRHgkObag35mbO9c%2F%2FtYJyHI56e8232cJ6eIIrIqBfAxZMNXs5fKIJASy0lrWSUAbbb56G9L3tyrxe4aHUCIwuZWIxAY6pgF037nusIGlok0kYm2BsIehq4557o6z2M%2Ba8SCp5gUZNdWw1uRQ29QE5N6GHTwiY0FrQcNfFQEwTTD2BOpvs80ZaM6G51M%2FtatXkRHKlQkoO140bOBbyjLhAiZ5Kx4VN1aeddyLPhScx0Jocvj588LrWCua2D3wrrZDLF5TS5sg0Q2NKQqZWaavLHJNoMOciuSWTC0DOvLtRWP49V%2B%2B4PAVX7X%2FpNGH&X-Amz-Signature=34672238730733c7cbf2dc2c0c5d4cca630226ed0095c5862a3c7346401c044e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGNJRU4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEy6ScanhYabtRgnYmj5XkHXkrHEfWWt5fvQKNC6lyxIAiBy1dA4Fvr8OWM0Py6k1WikAcb0egit1ZaTew%2FkOqE22Sr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMmotl7DX4GtpfqPT6KtwDCNk57peQMs9q4V0d4ddj5F6neomWrOBuOfiT42U2miztRRnnfJwqs0LvuCgUGEq%2BUz4vS8FSK5j6cldNCG5aOVrrUMWTPdI2BIeGcuZo%2BbJxB%2Bujg%2FEjqiXjV9OcrnCrUbGLYKxnqWBsLUoshs6PcFUIXW2wghKveCImBm84D57InhkZvaj0y4vtAsVe9pOkrnCyrygbyr%2F7qcIMdk5wVhnWlij5bJ0%2BVnE1i9Iohx52ugFOkOlIk0%2FHcP9mGsIOyD6JEC%2FdKwFS9AH1JaXxFQKR9MdWXn9pXRQMnNMB5TQFHqUVgUug%2BhSU2Db%2FFN5ReCDK7OGwOSw8jA8%2FwT4ImOt4x2JjSXtEMdqi5Mbt8bXkWRPCmTSmXU3SjUmzLYJRW6h%2F5%2B192CGPHrxfBCWf09CsN2w2HqyA4sIYyCeKU1x82KLhE%2BVk3psXkiHmdZ5oMPeb%2FFQOPSigbmjWSze4heuC9TWUM2Owgj8ffjLYrgMjJRDV1Slx9WfEw2umEScDj4JiidxXnCc2RoKaET6gLWe8L9KTSz%2BpYlywJbzzRHgkObag35mbO9c%2F%2FtYJyHI56e8232cJ6eIIrIqBfAxZMNXs5fKIJASy0lrWSUAbbb56G9L3tyrxe4aHUCIwuZWIxAY6pgF037nusIGlok0kYm2BsIehq4557o6z2M%2Ba8SCp5gUZNdWw1uRQ29QE5N6GHTwiY0FrQcNfFQEwTTD2BOpvs80ZaM6G51M%2FtatXkRHKlQkoO140bOBbyjLhAiZ5Kx4VN1aeddyLPhScx0Jocvj588LrWCua2D3wrrZDLF5TS5sg0Q2NKQqZWaavLHJNoMOciuSWTC0DOvLtRWP49V%2B%2B4PAVX7X%2FpNGH&X-Amz-Signature=ac814dfca9c4733c4f49cd885eee55e5469c569f87d37dc1a7668781405e0692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGNJRU4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEy6ScanhYabtRgnYmj5XkHXkrHEfWWt5fvQKNC6lyxIAiBy1dA4Fvr8OWM0Py6k1WikAcb0egit1ZaTew%2FkOqE22Sr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMmotl7DX4GtpfqPT6KtwDCNk57peQMs9q4V0d4ddj5F6neomWrOBuOfiT42U2miztRRnnfJwqs0LvuCgUGEq%2BUz4vS8FSK5j6cldNCG5aOVrrUMWTPdI2BIeGcuZo%2BbJxB%2Bujg%2FEjqiXjV9OcrnCrUbGLYKxnqWBsLUoshs6PcFUIXW2wghKveCImBm84D57InhkZvaj0y4vtAsVe9pOkrnCyrygbyr%2F7qcIMdk5wVhnWlij5bJ0%2BVnE1i9Iohx52ugFOkOlIk0%2FHcP9mGsIOyD6JEC%2FdKwFS9AH1JaXxFQKR9MdWXn9pXRQMnNMB5TQFHqUVgUug%2BhSU2Db%2FFN5ReCDK7OGwOSw8jA8%2FwT4ImOt4x2JjSXtEMdqi5Mbt8bXkWRPCmTSmXU3SjUmzLYJRW6h%2F5%2B192CGPHrxfBCWf09CsN2w2HqyA4sIYyCeKU1x82KLhE%2BVk3psXkiHmdZ5oMPeb%2FFQOPSigbmjWSze4heuC9TWUM2Owgj8ffjLYrgMjJRDV1Slx9WfEw2umEScDj4JiidxXnCc2RoKaET6gLWe8L9KTSz%2BpYlywJbzzRHgkObag35mbO9c%2F%2FtYJyHI56e8232cJ6eIIrIqBfAxZMNXs5fKIJASy0lrWSUAbbb56G9L3tyrxe4aHUCIwuZWIxAY6pgF037nusIGlok0kYm2BsIehq4557o6z2M%2Ba8SCp5gUZNdWw1uRQ29QE5N6GHTwiY0FrQcNfFQEwTTD2BOpvs80ZaM6G51M%2FtatXkRHKlQkoO140bOBbyjLhAiZ5Kx4VN1aeddyLPhScx0Jocvj588LrWCua2D3wrrZDLF5TS5sg0Q2NKQqZWaavLHJNoMOciuSWTC0DOvLtRWP49V%2B%2B4PAVX7X%2FpNGH&X-Amz-Signature=79a79c41639cf70c23863e4194893ca394f3de6a3c467e2e0ee4bf6384555822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGNJRU4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEy6ScanhYabtRgnYmj5XkHXkrHEfWWt5fvQKNC6lyxIAiBy1dA4Fvr8OWM0Py6k1WikAcb0egit1ZaTew%2FkOqE22Sr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMmotl7DX4GtpfqPT6KtwDCNk57peQMs9q4V0d4ddj5F6neomWrOBuOfiT42U2miztRRnnfJwqs0LvuCgUGEq%2BUz4vS8FSK5j6cldNCG5aOVrrUMWTPdI2BIeGcuZo%2BbJxB%2Bujg%2FEjqiXjV9OcrnCrUbGLYKxnqWBsLUoshs6PcFUIXW2wghKveCImBm84D57InhkZvaj0y4vtAsVe9pOkrnCyrygbyr%2F7qcIMdk5wVhnWlij5bJ0%2BVnE1i9Iohx52ugFOkOlIk0%2FHcP9mGsIOyD6JEC%2FdKwFS9AH1JaXxFQKR9MdWXn9pXRQMnNMB5TQFHqUVgUug%2BhSU2Db%2FFN5ReCDK7OGwOSw8jA8%2FwT4ImOt4x2JjSXtEMdqi5Mbt8bXkWRPCmTSmXU3SjUmzLYJRW6h%2F5%2B192CGPHrxfBCWf09CsN2w2HqyA4sIYyCeKU1x82KLhE%2BVk3psXkiHmdZ5oMPeb%2FFQOPSigbmjWSze4heuC9TWUM2Owgj8ffjLYrgMjJRDV1Slx9WfEw2umEScDj4JiidxXnCc2RoKaET6gLWe8L9KTSz%2BpYlywJbzzRHgkObag35mbO9c%2F%2FtYJyHI56e8232cJ6eIIrIqBfAxZMNXs5fKIJASy0lrWSUAbbb56G9L3tyrxe4aHUCIwuZWIxAY6pgF037nusIGlok0kYm2BsIehq4557o6z2M%2Ba8SCp5gUZNdWw1uRQ29QE5N6GHTwiY0FrQcNfFQEwTTD2BOpvs80ZaM6G51M%2FtatXkRHKlQkoO140bOBbyjLhAiZ5Kx4VN1aeddyLPhScx0Jocvj588LrWCua2D3wrrZDLF5TS5sg0Q2NKQqZWaavLHJNoMOciuSWTC0DOvLtRWP49V%2B%2B4PAVX7X%2FpNGH&X-Amz-Signature=933c46938f46536ccc6911d1a9965b54a9ca900349114018f86a32329ed8f889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGNJRU4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEy6ScanhYabtRgnYmj5XkHXkrHEfWWt5fvQKNC6lyxIAiBy1dA4Fvr8OWM0Py6k1WikAcb0egit1ZaTew%2FkOqE22Sr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMmotl7DX4GtpfqPT6KtwDCNk57peQMs9q4V0d4ddj5F6neomWrOBuOfiT42U2miztRRnnfJwqs0LvuCgUGEq%2BUz4vS8FSK5j6cldNCG5aOVrrUMWTPdI2BIeGcuZo%2BbJxB%2Bujg%2FEjqiXjV9OcrnCrUbGLYKxnqWBsLUoshs6PcFUIXW2wghKveCImBm84D57InhkZvaj0y4vtAsVe9pOkrnCyrygbyr%2F7qcIMdk5wVhnWlij5bJ0%2BVnE1i9Iohx52ugFOkOlIk0%2FHcP9mGsIOyD6JEC%2FdKwFS9AH1JaXxFQKR9MdWXn9pXRQMnNMB5TQFHqUVgUug%2BhSU2Db%2FFN5ReCDK7OGwOSw8jA8%2FwT4ImOt4x2JjSXtEMdqi5Mbt8bXkWRPCmTSmXU3SjUmzLYJRW6h%2F5%2B192CGPHrxfBCWf09CsN2w2HqyA4sIYyCeKU1x82KLhE%2BVk3psXkiHmdZ5oMPeb%2FFQOPSigbmjWSze4heuC9TWUM2Owgj8ffjLYrgMjJRDV1Slx9WfEw2umEScDj4JiidxXnCc2RoKaET6gLWe8L9KTSz%2BpYlywJbzzRHgkObag35mbO9c%2F%2FtYJyHI56e8232cJ6eIIrIqBfAxZMNXs5fKIJASy0lrWSUAbbb56G9L3tyrxe4aHUCIwuZWIxAY6pgF037nusIGlok0kYm2BsIehq4557o6z2M%2Ba8SCp5gUZNdWw1uRQ29QE5N6GHTwiY0FrQcNfFQEwTTD2BOpvs80ZaM6G51M%2FtatXkRHKlQkoO140bOBbyjLhAiZ5Kx4VN1aeddyLPhScx0Jocvj588LrWCua2D3wrrZDLF5TS5sg0Q2NKQqZWaavLHJNoMOciuSWTC0DOvLtRWP49V%2B%2B4PAVX7X%2FpNGH&X-Amz-Signature=0f45bdc6c9e885e92e2e73a339b385f87344a909f8f0c51e3929697bb9a4997c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGNJRU4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEy6ScanhYabtRgnYmj5XkHXkrHEfWWt5fvQKNC6lyxIAiBy1dA4Fvr8OWM0Py6k1WikAcb0egit1ZaTew%2FkOqE22Sr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMmotl7DX4GtpfqPT6KtwDCNk57peQMs9q4V0d4ddj5F6neomWrOBuOfiT42U2miztRRnnfJwqs0LvuCgUGEq%2BUz4vS8FSK5j6cldNCG5aOVrrUMWTPdI2BIeGcuZo%2BbJxB%2Bujg%2FEjqiXjV9OcrnCrUbGLYKxnqWBsLUoshs6PcFUIXW2wghKveCImBm84D57InhkZvaj0y4vtAsVe9pOkrnCyrygbyr%2F7qcIMdk5wVhnWlij5bJ0%2BVnE1i9Iohx52ugFOkOlIk0%2FHcP9mGsIOyD6JEC%2FdKwFS9AH1JaXxFQKR9MdWXn9pXRQMnNMB5TQFHqUVgUug%2BhSU2Db%2FFN5ReCDK7OGwOSw8jA8%2FwT4ImOt4x2JjSXtEMdqi5Mbt8bXkWRPCmTSmXU3SjUmzLYJRW6h%2F5%2B192CGPHrxfBCWf09CsN2w2HqyA4sIYyCeKU1x82KLhE%2BVk3psXkiHmdZ5oMPeb%2FFQOPSigbmjWSze4heuC9TWUM2Owgj8ffjLYrgMjJRDV1Slx9WfEw2umEScDj4JiidxXnCc2RoKaET6gLWe8L9KTSz%2BpYlywJbzzRHgkObag35mbO9c%2F%2FtYJyHI56e8232cJ6eIIrIqBfAxZMNXs5fKIJASy0lrWSUAbbb56G9L3tyrxe4aHUCIwuZWIxAY6pgF037nusIGlok0kYm2BsIehq4557o6z2M%2Ba8SCp5gUZNdWw1uRQ29QE5N6GHTwiY0FrQcNfFQEwTTD2BOpvs80ZaM6G51M%2FtatXkRHKlQkoO140bOBbyjLhAiZ5Kx4VN1aeddyLPhScx0Jocvj588LrWCua2D3wrrZDLF5TS5sg0Q2NKQqZWaavLHJNoMOciuSWTC0DOvLtRWP49V%2B%2B4PAVX7X%2FpNGH&X-Amz-Signature=242bcf9f453bdcf7ff9b78695f4c8b73af2cdb0cee42cc37a01cccc3c253cea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
