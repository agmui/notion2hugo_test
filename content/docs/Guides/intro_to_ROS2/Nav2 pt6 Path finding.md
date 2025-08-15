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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P6XX552%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHcCGuBO9TZoOt%2B0UW%2FGTG4iFADTRLkIr375YYAF%2FU3jAiB%2B8yZ1jNiU%2FNDtxEuPnbGC6gzZGLZpGkB%2BGFarnR5wHir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMEBCqVHfhpDfEXV4kKtwDjHawsMU9gCDje75AsVftMBNLQhKSQ70cht34mvgvUZ6dShB0GeyHBa%2B9ZfWM13Yn4XZM1Mv30907LKNBnH3fLCvzfT6UpFJxSFN%2FXBH7xRBOF1qKItzaxO%2F%2BYK48mnMup9l231MR9OvDHfh1l28ANrs7qyvoQ4UNcDl8aL2H9NxqUUx6WKH%2FbBmcH3wnEGV4c1Y2XhESDOIFliaovmOMn0y4r6VIqDGw5gI8J18AnMMRZ%2B%2BO1pPS7DuPkyrpf2UghxQzD1GSKOuZEfAO4OY0ubAYSFqmEaruSKNKSiWvaH3qKkL1o0F4hfeGSy%2Fkb3WfeLELt5aPxZy4GNKACB0hUewWHif7lsK8FeCuqixxbS5iU77J5pAsCWQD2%2FdDVTsIyfo4YqYH4H2HpzWxwbDSyduznJWs%2BcG2JRc7JyRGJAzj0IN%2BT1Nvzpb1FnaQjxCyALkU7xPvb8hdaD4flhOvkcvQcKpDWep4CLQKKyhvVPuthtNr7CAf4gfW34tZxxg0zP6%2Fq3apvzz9Fx7bpmY2zkyt7Eev0o35zaXM7AYw88maZsFBWme0BFCm1%2FFLDU%2FdlaS0UxGtrLO4czbwj0UEk%2Fq5Q51LXyWT9F73uuVmruZBBfi%2Fpc%2FgDYrWZuQw6dr9xAY6pgHi%2BzaiVABeSXXRi%2FwD0oBuYrwU6aedKVubLSHo%2FXCBbLKJg7K5UZt4rvCPHmBHh%2FFC1wLgm0KMpN1ppCvM5269d9oa0MpkADmEJpHAXbbngyAQv7keQ%2F47tz1hYlFjgy9tMjUIf3d2RDjMNdTFNllyn%2BsQfpsZS97UR8qARMTpf3YkZ9pPv6gcTSaul8MCLa5ZHf8%2FzzE0v1ond5wGDPPGSmpgtYMq&X-Amz-Signature=b155a048fad8854a31056226fcf16a578ebfe4b894b5ae7373472c4df76eca65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P6XX552%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHcCGuBO9TZoOt%2B0UW%2FGTG4iFADTRLkIr375YYAF%2FU3jAiB%2B8yZ1jNiU%2FNDtxEuPnbGC6gzZGLZpGkB%2BGFarnR5wHir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMEBCqVHfhpDfEXV4kKtwDjHawsMU9gCDje75AsVftMBNLQhKSQ70cht34mvgvUZ6dShB0GeyHBa%2B9ZfWM13Yn4XZM1Mv30907LKNBnH3fLCvzfT6UpFJxSFN%2FXBH7xRBOF1qKItzaxO%2F%2BYK48mnMup9l231MR9OvDHfh1l28ANrs7qyvoQ4UNcDl8aL2H9NxqUUx6WKH%2FbBmcH3wnEGV4c1Y2XhESDOIFliaovmOMn0y4r6VIqDGw5gI8J18AnMMRZ%2B%2BO1pPS7DuPkyrpf2UghxQzD1GSKOuZEfAO4OY0ubAYSFqmEaruSKNKSiWvaH3qKkL1o0F4hfeGSy%2Fkb3WfeLELt5aPxZy4GNKACB0hUewWHif7lsK8FeCuqixxbS5iU77J5pAsCWQD2%2FdDVTsIyfo4YqYH4H2HpzWxwbDSyduznJWs%2BcG2JRc7JyRGJAzj0IN%2BT1Nvzpb1FnaQjxCyALkU7xPvb8hdaD4flhOvkcvQcKpDWep4CLQKKyhvVPuthtNr7CAf4gfW34tZxxg0zP6%2Fq3apvzz9Fx7bpmY2zkyt7Eev0o35zaXM7AYw88maZsFBWme0BFCm1%2FFLDU%2FdlaS0UxGtrLO4czbwj0UEk%2Fq5Q51LXyWT9F73uuVmruZBBfi%2Fpc%2FgDYrWZuQw6dr9xAY6pgHi%2BzaiVABeSXXRi%2FwD0oBuYrwU6aedKVubLSHo%2FXCBbLKJg7K5UZt4rvCPHmBHh%2FFC1wLgm0KMpN1ppCvM5269d9oa0MpkADmEJpHAXbbngyAQv7keQ%2F47tz1hYlFjgy9tMjUIf3d2RDjMNdTFNllyn%2BsQfpsZS97UR8qARMTpf3YkZ9pPv6gcTSaul8MCLa5ZHf8%2FzzE0v1ond5wGDPPGSmpgtYMq&X-Amz-Signature=0df24f159612e62dc94c3c643aec1053ed45331469638c5d592785b9f2d71858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P6XX552%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHcCGuBO9TZoOt%2B0UW%2FGTG4iFADTRLkIr375YYAF%2FU3jAiB%2B8yZ1jNiU%2FNDtxEuPnbGC6gzZGLZpGkB%2BGFarnR5wHir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMEBCqVHfhpDfEXV4kKtwDjHawsMU9gCDje75AsVftMBNLQhKSQ70cht34mvgvUZ6dShB0GeyHBa%2B9ZfWM13Yn4XZM1Mv30907LKNBnH3fLCvzfT6UpFJxSFN%2FXBH7xRBOF1qKItzaxO%2F%2BYK48mnMup9l231MR9OvDHfh1l28ANrs7qyvoQ4UNcDl8aL2H9NxqUUx6WKH%2FbBmcH3wnEGV4c1Y2XhESDOIFliaovmOMn0y4r6VIqDGw5gI8J18AnMMRZ%2B%2BO1pPS7DuPkyrpf2UghxQzD1GSKOuZEfAO4OY0ubAYSFqmEaruSKNKSiWvaH3qKkL1o0F4hfeGSy%2Fkb3WfeLELt5aPxZy4GNKACB0hUewWHif7lsK8FeCuqixxbS5iU77J5pAsCWQD2%2FdDVTsIyfo4YqYH4H2HpzWxwbDSyduznJWs%2BcG2JRc7JyRGJAzj0IN%2BT1Nvzpb1FnaQjxCyALkU7xPvb8hdaD4flhOvkcvQcKpDWep4CLQKKyhvVPuthtNr7CAf4gfW34tZxxg0zP6%2Fq3apvzz9Fx7bpmY2zkyt7Eev0o35zaXM7AYw88maZsFBWme0BFCm1%2FFLDU%2FdlaS0UxGtrLO4czbwj0UEk%2Fq5Q51LXyWT9F73uuVmruZBBfi%2Fpc%2FgDYrWZuQw6dr9xAY6pgHi%2BzaiVABeSXXRi%2FwD0oBuYrwU6aedKVubLSHo%2FXCBbLKJg7K5UZt4rvCPHmBHh%2FFC1wLgm0KMpN1ppCvM5269d9oa0MpkADmEJpHAXbbngyAQv7keQ%2F47tz1hYlFjgy9tMjUIf3d2RDjMNdTFNllyn%2BsQfpsZS97UR8qARMTpf3YkZ9pPv6gcTSaul8MCLa5ZHf8%2FzzE0v1ond5wGDPPGSmpgtYMq&X-Amz-Signature=cd568b6323d12557c2b71cf3f8f49d8ac07feeea62b5a1ab9521b8479e15d928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P6XX552%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHcCGuBO9TZoOt%2B0UW%2FGTG4iFADTRLkIr375YYAF%2FU3jAiB%2B8yZ1jNiU%2FNDtxEuPnbGC6gzZGLZpGkB%2BGFarnR5wHir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMEBCqVHfhpDfEXV4kKtwDjHawsMU9gCDje75AsVftMBNLQhKSQ70cht34mvgvUZ6dShB0GeyHBa%2B9ZfWM13Yn4XZM1Mv30907LKNBnH3fLCvzfT6UpFJxSFN%2FXBH7xRBOF1qKItzaxO%2F%2BYK48mnMup9l231MR9OvDHfh1l28ANrs7qyvoQ4UNcDl8aL2H9NxqUUx6WKH%2FbBmcH3wnEGV4c1Y2XhESDOIFliaovmOMn0y4r6VIqDGw5gI8J18AnMMRZ%2B%2BO1pPS7DuPkyrpf2UghxQzD1GSKOuZEfAO4OY0ubAYSFqmEaruSKNKSiWvaH3qKkL1o0F4hfeGSy%2Fkb3WfeLELt5aPxZy4GNKACB0hUewWHif7lsK8FeCuqixxbS5iU77J5pAsCWQD2%2FdDVTsIyfo4YqYH4H2HpzWxwbDSyduznJWs%2BcG2JRc7JyRGJAzj0IN%2BT1Nvzpb1FnaQjxCyALkU7xPvb8hdaD4flhOvkcvQcKpDWep4CLQKKyhvVPuthtNr7CAf4gfW34tZxxg0zP6%2Fq3apvzz9Fx7bpmY2zkyt7Eev0o35zaXM7AYw88maZsFBWme0BFCm1%2FFLDU%2FdlaS0UxGtrLO4czbwj0UEk%2Fq5Q51LXyWT9F73uuVmruZBBfi%2Fpc%2FgDYrWZuQw6dr9xAY6pgHi%2BzaiVABeSXXRi%2FwD0oBuYrwU6aedKVubLSHo%2FXCBbLKJg7K5UZt4rvCPHmBHh%2FFC1wLgm0KMpN1ppCvM5269d9oa0MpkADmEJpHAXbbngyAQv7keQ%2F47tz1hYlFjgy9tMjUIf3d2RDjMNdTFNllyn%2BsQfpsZS97UR8qARMTpf3YkZ9pPv6gcTSaul8MCLa5ZHf8%2FzzE0v1ond5wGDPPGSmpgtYMq&X-Amz-Signature=dd400980ed6ec39fa88dd7a3a87d715cb76a7189d5de436a753e48215be003e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P6XX552%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHcCGuBO9TZoOt%2B0UW%2FGTG4iFADTRLkIr375YYAF%2FU3jAiB%2B8yZ1jNiU%2FNDtxEuPnbGC6gzZGLZpGkB%2BGFarnR5wHir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMEBCqVHfhpDfEXV4kKtwDjHawsMU9gCDje75AsVftMBNLQhKSQ70cht34mvgvUZ6dShB0GeyHBa%2B9ZfWM13Yn4XZM1Mv30907LKNBnH3fLCvzfT6UpFJxSFN%2FXBH7xRBOF1qKItzaxO%2F%2BYK48mnMup9l231MR9OvDHfh1l28ANrs7qyvoQ4UNcDl8aL2H9NxqUUx6WKH%2FbBmcH3wnEGV4c1Y2XhESDOIFliaovmOMn0y4r6VIqDGw5gI8J18AnMMRZ%2B%2BO1pPS7DuPkyrpf2UghxQzD1GSKOuZEfAO4OY0ubAYSFqmEaruSKNKSiWvaH3qKkL1o0F4hfeGSy%2Fkb3WfeLELt5aPxZy4GNKACB0hUewWHif7lsK8FeCuqixxbS5iU77J5pAsCWQD2%2FdDVTsIyfo4YqYH4H2HpzWxwbDSyduznJWs%2BcG2JRc7JyRGJAzj0IN%2BT1Nvzpb1FnaQjxCyALkU7xPvb8hdaD4flhOvkcvQcKpDWep4CLQKKyhvVPuthtNr7CAf4gfW34tZxxg0zP6%2Fq3apvzz9Fx7bpmY2zkyt7Eev0o35zaXM7AYw88maZsFBWme0BFCm1%2FFLDU%2FdlaS0UxGtrLO4czbwj0UEk%2Fq5Q51LXyWT9F73uuVmruZBBfi%2Fpc%2FgDYrWZuQw6dr9xAY6pgHi%2BzaiVABeSXXRi%2FwD0oBuYrwU6aedKVubLSHo%2FXCBbLKJg7K5UZt4rvCPHmBHh%2FFC1wLgm0KMpN1ppCvM5269d9oa0MpkADmEJpHAXbbngyAQv7keQ%2F47tz1hYlFjgy9tMjUIf3d2RDjMNdTFNllyn%2BsQfpsZS97UR8qARMTpf3YkZ9pPv6gcTSaul8MCLa5ZHf8%2FzzE0v1ond5wGDPPGSmpgtYMq&X-Amz-Signature=61f53090cc39582930b5e4f40a27a67be78aa75e464ea37958074ff89e828dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P6XX552%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHcCGuBO9TZoOt%2B0UW%2FGTG4iFADTRLkIr375YYAF%2FU3jAiB%2B8yZ1jNiU%2FNDtxEuPnbGC6gzZGLZpGkB%2BGFarnR5wHir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMEBCqVHfhpDfEXV4kKtwDjHawsMU9gCDje75AsVftMBNLQhKSQ70cht34mvgvUZ6dShB0GeyHBa%2B9ZfWM13Yn4XZM1Mv30907LKNBnH3fLCvzfT6UpFJxSFN%2FXBH7xRBOF1qKItzaxO%2F%2BYK48mnMup9l231MR9OvDHfh1l28ANrs7qyvoQ4UNcDl8aL2H9NxqUUx6WKH%2FbBmcH3wnEGV4c1Y2XhESDOIFliaovmOMn0y4r6VIqDGw5gI8J18AnMMRZ%2B%2BO1pPS7DuPkyrpf2UghxQzD1GSKOuZEfAO4OY0ubAYSFqmEaruSKNKSiWvaH3qKkL1o0F4hfeGSy%2Fkb3WfeLELt5aPxZy4GNKACB0hUewWHif7lsK8FeCuqixxbS5iU77J5pAsCWQD2%2FdDVTsIyfo4YqYH4H2HpzWxwbDSyduznJWs%2BcG2JRc7JyRGJAzj0IN%2BT1Nvzpb1FnaQjxCyALkU7xPvb8hdaD4flhOvkcvQcKpDWep4CLQKKyhvVPuthtNr7CAf4gfW34tZxxg0zP6%2Fq3apvzz9Fx7bpmY2zkyt7Eev0o35zaXM7AYw88maZsFBWme0BFCm1%2FFLDU%2FdlaS0UxGtrLO4czbwj0UEk%2Fq5Q51LXyWT9F73uuVmruZBBfi%2Fpc%2FgDYrWZuQw6dr9xAY6pgHi%2BzaiVABeSXXRi%2FwD0oBuYrwU6aedKVubLSHo%2FXCBbLKJg7K5UZt4rvCPHmBHh%2FFC1wLgm0KMpN1ppCvM5269d9oa0MpkADmEJpHAXbbngyAQv7keQ%2F47tz1hYlFjgy9tMjUIf3d2RDjMNdTFNllyn%2BsQfpsZS97UR8qARMTpf3YkZ9pPv6gcTSaul8MCLa5ZHf8%2FzzE0v1ond5wGDPPGSmpgtYMq&X-Amz-Signature=96702ec014d5857b843f9b55034035dc8562c2d8a560a97b30edbc49c5810efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P6XX552%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHcCGuBO9TZoOt%2B0UW%2FGTG4iFADTRLkIr375YYAF%2FU3jAiB%2B8yZ1jNiU%2FNDtxEuPnbGC6gzZGLZpGkB%2BGFarnR5wHir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMEBCqVHfhpDfEXV4kKtwDjHawsMU9gCDje75AsVftMBNLQhKSQ70cht34mvgvUZ6dShB0GeyHBa%2B9ZfWM13Yn4XZM1Mv30907LKNBnH3fLCvzfT6UpFJxSFN%2FXBH7xRBOF1qKItzaxO%2F%2BYK48mnMup9l231MR9OvDHfh1l28ANrs7qyvoQ4UNcDl8aL2H9NxqUUx6WKH%2FbBmcH3wnEGV4c1Y2XhESDOIFliaovmOMn0y4r6VIqDGw5gI8J18AnMMRZ%2B%2BO1pPS7DuPkyrpf2UghxQzD1GSKOuZEfAO4OY0ubAYSFqmEaruSKNKSiWvaH3qKkL1o0F4hfeGSy%2Fkb3WfeLELt5aPxZy4GNKACB0hUewWHif7lsK8FeCuqixxbS5iU77J5pAsCWQD2%2FdDVTsIyfo4YqYH4H2HpzWxwbDSyduznJWs%2BcG2JRc7JyRGJAzj0IN%2BT1Nvzpb1FnaQjxCyALkU7xPvb8hdaD4flhOvkcvQcKpDWep4CLQKKyhvVPuthtNr7CAf4gfW34tZxxg0zP6%2Fq3apvzz9Fx7bpmY2zkyt7Eev0o35zaXM7AYw88maZsFBWme0BFCm1%2FFLDU%2FdlaS0UxGtrLO4czbwj0UEk%2Fq5Q51LXyWT9F73uuVmruZBBfi%2Fpc%2FgDYrWZuQw6dr9xAY6pgHi%2BzaiVABeSXXRi%2FwD0oBuYrwU6aedKVubLSHo%2FXCBbLKJg7K5UZt4rvCPHmBHh%2FFC1wLgm0KMpN1ppCvM5269d9oa0MpkADmEJpHAXbbngyAQv7keQ%2F47tz1hYlFjgy9tMjUIf3d2RDjMNdTFNllyn%2BsQfpsZS97UR8qARMTpf3YkZ9pPv6gcTSaul8MCLa5ZHf8%2FzzE0v1ond5wGDPPGSmpgtYMq&X-Amz-Signature=6f6df1bc39d3e1575e6acf6ebe5883c22c14c4d10f93ac1ecedd97174fea4cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P6XX552%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHcCGuBO9TZoOt%2B0UW%2FGTG4iFADTRLkIr375YYAF%2FU3jAiB%2B8yZ1jNiU%2FNDtxEuPnbGC6gzZGLZpGkB%2BGFarnR5wHir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMEBCqVHfhpDfEXV4kKtwDjHawsMU9gCDje75AsVftMBNLQhKSQ70cht34mvgvUZ6dShB0GeyHBa%2B9ZfWM13Yn4XZM1Mv30907LKNBnH3fLCvzfT6UpFJxSFN%2FXBH7xRBOF1qKItzaxO%2F%2BYK48mnMup9l231MR9OvDHfh1l28ANrs7qyvoQ4UNcDl8aL2H9NxqUUx6WKH%2FbBmcH3wnEGV4c1Y2XhESDOIFliaovmOMn0y4r6VIqDGw5gI8J18AnMMRZ%2B%2BO1pPS7DuPkyrpf2UghxQzD1GSKOuZEfAO4OY0ubAYSFqmEaruSKNKSiWvaH3qKkL1o0F4hfeGSy%2Fkb3WfeLELt5aPxZy4GNKACB0hUewWHif7lsK8FeCuqixxbS5iU77J5pAsCWQD2%2FdDVTsIyfo4YqYH4H2HpzWxwbDSyduznJWs%2BcG2JRc7JyRGJAzj0IN%2BT1Nvzpb1FnaQjxCyALkU7xPvb8hdaD4flhOvkcvQcKpDWep4CLQKKyhvVPuthtNr7CAf4gfW34tZxxg0zP6%2Fq3apvzz9Fx7bpmY2zkyt7Eev0o35zaXM7AYw88maZsFBWme0BFCm1%2FFLDU%2FdlaS0UxGtrLO4czbwj0UEk%2Fq5Q51LXyWT9F73uuVmruZBBfi%2Fpc%2FgDYrWZuQw6dr9xAY6pgHi%2BzaiVABeSXXRi%2FwD0oBuYrwU6aedKVubLSHo%2FXCBbLKJg7K5UZt4rvCPHmBHh%2FFC1wLgm0KMpN1ppCvM5269d9oa0MpkADmEJpHAXbbngyAQv7keQ%2F47tz1hYlFjgy9tMjUIf3d2RDjMNdTFNllyn%2BsQfpsZS97UR8qARMTpf3YkZ9pPv6gcTSaul8MCLa5ZHf8%2FzzE0v1ond5wGDPPGSmpgtYMq&X-Amz-Signature=62f091f24d3d0cf02b7d38f2e6f67935bb36b50fa3767feb64bc9cbddb89424e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P6XX552%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHcCGuBO9TZoOt%2B0UW%2FGTG4iFADTRLkIr375YYAF%2FU3jAiB%2B8yZ1jNiU%2FNDtxEuPnbGC6gzZGLZpGkB%2BGFarnR5wHir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMEBCqVHfhpDfEXV4kKtwDjHawsMU9gCDje75AsVftMBNLQhKSQ70cht34mvgvUZ6dShB0GeyHBa%2B9ZfWM13Yn4XZM1Mv30907LKNBnH3fLCvzfT6UpFJxSFN%2FXBH7xRBOF1qKItzaxO%2F%2BYK48mnMup9l231MR9OvDHfh1l28ANrs7qyvoQ4UNcDl8aL2H9NxqUUx6WKH%2FbBmcH3wnEGV4c1Y2XhESDOIFliaovmOMn0y4r6VIqDGw5gI8J18AnMMRZ%2B%2BO1pPS7DuPkyrpf2UghxQzD1GSKOuZEfAO4OY0ubAYSFqmEaruSKNKSiWvaH3qKkL1o0F4hfeGSy%2Fkb3WfeLELt5aPxZy4GNKACB0hUewWHif7lsK8FeCuqixxbS5iU77J5pAsCWQD2%2FdDVTsIyfo4YqYH4H2HpzWxwbDSyduznJWs%2BcG2JRc7JyRGJAzj0IN%2BT1Nvzpb1FnaQjxCyALkU7xPvb8hdaD4flhOvkcvQcKpDWep4CLQKKyhvVPuthtNr7CAf4gfW34tZxxg0zP6%2Fq3apvzz9Fx7bpmY2zkyt7Eev0o35zaXM7AYw88maZsFBWme0BFCm1%2FFLDU%2FdlaS0UxGtrLO4czbwj0UEk%2Fq5Q51LXyWT9F73uuVmruZBBfi%2Fpc%2FgDYrWZuQw6dr9xAY6pgHi%2BzaiVABeSXXRi%2FwD0oBuYrwU6aedKVubLSHo%2FXCBbLKJg7K5UZt4rvCPHmBHh%2FFC1wLgm0KMpN1ppCvM5269d9oa0MpkADmEJpHAXbbngyAQv7keQ%2F47tz1hYlFjgy9tMjUIf3d2RDjMNdTFNllyn%2BsQfpsZS97UR8qARMTpf3YkZ9pPv6gcTSaul8MCLa5ZHf8%2FzzE0v1ond5wGDPPGSmpgtYMq&X-Amz-Signature=e1013e1acff08559ecd748f3f51080dfa6ee4469515a33b6cf97512d2559ff78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P6XX552%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHcCGuBO9TZoOt%2B0UW%2FGTG4iFADTRLkIr375YYAF%2FU3jAiB%2B8yZ1jNiU%2FNDtxEuPnbGC6gzZGLZpGkB%2BGFarnR5wHir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMEBCqVHfhpDfEXV4kKtwDjHawsMU9gCDje75AsVftMBNLQhKSQ70cht34mvgvUZ6dShB0GeyHBa%2B9ZfWM13Yn4XZM1Mv30907LKNBnH3fLCvzfT6UpFJxSFN%2FXBH7xRBOF1qKItzaxO%2F%2BYK48mnMup9l231MR9OvDHfh1l28ANrs7qyvoQ4UNcDl8aL2H9NxqUUx6WKH%2FbBmcH3wnEGV4c1Y2XhESDOIFliaovmOMn0y4r6VIqDGw5gI8J18AnMMRZ%2B%2BO1pPS7DuPkyrpf2UghxQzD1GSKOuZEfAO4OY0ubAYSFqmEaruSKNKSiWvaH3qKkL1o0F4hfeGSy%2Fkb3WfeLELt5aPxZy4GNKACB0hUewWHif7lsK8FeCuqixxbS5iU77J5pAsCWQD2%2FdDVTsIyfo4YqYH4H2HpzWxwbDSyduznJWs%2BcG2JRc7JyRGJAzj0IN%2BT1Nvzpb1FnaQjxCyALkU7xPvb8hdaD4flhOvkcvQcKpDWep4CLQKKyhvVPuthtNr7CAf4gfW34tZxxg0zP6%2Fq3apvzz9Fx7bpmY2zkyt7Eev0o35zaXM7AYw88maZsFBWme0BFCm1%2FFLDU%2FdlaS0UxGtrLO4czbwj0UEk%2Fq5Q51LXyWT9F73uuVmruZBBfi%2Fpc%2FgDYrWZuQw6dr9xAY6pgHi%2BzaiVABeSXXRi%2FwD0oBuYrwU6aedKVubLSHo%2FXCBbLKJg7K5UZt4rvCPHmBHh%2FFC1wLgm0KMpN1ppCvM5269d9oa0MpkADmEJpHAXbbngyAQv7keQ%2F47tz1hYlFjgy9tMjUIf3d2RDjMNdTFNllyn%2BsQfpsZS97UR8qARMTpf3YkZ9pPv6gcTSaul8MCLa5ZHf8%2FzzE0v1ond5wGDPPGSmpgtYMq&X-Amz-Signature=8950b3041add8338c4699f2f3042fcc9672bd07773ebb8a89697bdbe865bc2de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P6XX552%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHcCGuBO9TZoOt%2B0UW%2FGTG4iFADTRLkIr375YYAF%2FU3jAiB%2B8yZ1jNiU%2FNDtxEuPnbGC6gzZGLZpGkB%2BGFarnR5wHir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMEBCqVHfhpDfEXV4kKtwDjHawsMU9gCDje75AsVftMBNLQhKSQ70cht34mvgvUZ6dShB0GeyHBa%2B9ZfWM13Yn4XZM1Mv30907LKNBnH3fLCvzfT6UpFJxSFN%2FXBH7xRBOF1qKItzaxO%2F%2BYK48mnMup9l231MR9OvDHfh1l28ANrs7qyvoQ4UNcDl8aL2H9NxqUUx6WKH%2FbBmcH3wnEGV4c1Y2XhESDOIFliaovmOMn0y4r6VIqDGw5gI8J18AnMMRZ%2B%2BO1pPS7DuPkyrpf2UghxQzD1GSKOuZEfAO4OY0ubAYSFqmEaruSKNKSiWvaH3qKkL1o0F4hfeGSy%2Fkb3WfeLELt5aPxZy4GNKACB0hUewWHif7lsK8FeCuqixxbS5iU77J5pAsCWQD2%2FdDVTsIyfo4YqYH4H2HpzWxwbDSyduznJWs%2BcG2JRc7JyRGJAzj0IN%2BT1Nvzpb1FnaQjxCyALkU7xPvb8hdaD4flhOvkcvQcKpDWep4CLQKKyhvVPuthtNr7CAf4gfW34tZxxg0zP6%2Fq3apvzz9Fx7bpmY2zkyt7Eev0o35zaXM7AYw88maZsFBWme0BFCm1%2FFLDU%2FdlaS0UxGtrLO4czbwj0UEk%2Fq5Q51LXyWT9F73uuVmruZBBfi%2Fpc%2FgDYrWZuQw6dr9xAY6pgHi%2BzaiVABeSXXRi%2FwD0oBuYrwU6aedKVubLSHo%2FXCBbLKJg7K5UZt4rvCPHmBHh%2FFC1wLgm0KMpN1ppCvM5269d9oa0MpkADmEJpHAXbbngyAQv7keQ%2F47tz1hYlFjgy9tMjUIf3d2RDjMNdTFNllyn%2BsQfpsZS97UR8qARMTpf3YkZ9pPv6gcTSaul8MCLa5ZHf8%2FzzE0v1ond5wGDPPGSmpgtYMq&X-Amz-Signature=b2002ab6b0f8bff24c2074708dc5584bcbae6a3d43531270401b6be46d97b66f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P6XX552%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHcCGuBO9TZoOt%2B0UW%2FGTG4iFADTRLkIr375YYAF%2FU3jAiB%2B8yZ1jNiU%2FNDtxEuPnbGC6gzZGLZpGkB%2BGFarnR5wHir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMEBCqVHfhpDfEXV4kKtwDjHawsMU9gCDje75AsVftMBNLQhKSQ70cht34mvgvUZ6dShB0GeyHBa%2B9ZfWM13Yn4XZM1Mv30907LKNBnH3fLCvzfT6UpFJxSFN%2FXBH7xRBOF1qKItzaxO%2F%2BYK48mnMup9l231MR9OvDHfh1l28ANrs7qyvoQ4UNcDl8aL2H9NxqUUx6WKH%2FbBmcH3wnEGV4c1Y2XhESDOIFliaovmOMn0y4r6VIqDGw5gI8J18AnMMRZ%2B%2BO1pPS7DuPkyrpf2UghxQzD1GSKOuZEfAO4OY0ubAYSFqmEaruSKNKSiWvaH3qKkL1o0F4hfeGSy%2Fkb3WfeLELt5aPxZy4GNKACB0hUewWHif7lsK8FeCuqixxbS5iU77J5pAsCWQD2%2FdDVTsIyfo4YqYH4H2HpzWxwbDSyduznJWs%2BcG2JRc7JyRGJAzj0IN%2BT1Nvzpb1FnaQjxCyALkU7xPvb8hdaD4flhOvkcvQcKpDWep4CLQKKyhvVPuthtNr7CAf4gfW34tZxxg0zP6%2Fq3apvzz9Fx7bpmY2zkyt7Eev0o35zaXM7AYw88maZsFBWme0BFCm1%2FFLDU%2FdlaS0UxGtrLO4czbwj0UEk%2Fq5Q51LXyWT9F73uuVmruZBBfi%2Fpc%2FgDYrWZuQw6dr9xAY6pgHi%2BzaiVABeSXXRi%2FwD0oBuYrwU6aedKVubLSHo%2FXCBbLKJg7K5UZt4rvCPHmBHh%2FFC1wLgm0KMpN1ppCvM5269d9oa0MpkADmEJpHAXbbngyAQv7keQ%2F47tz1hYlFjgy9tMjUIf3d2RDjMNdTFNllyn%2BsQfpsZS97UR8qARMTpf3YkZ9pPv6gcTSaul8MCLa5ZHf8%2FzzE0v1ond5wGDPPGSmpgtYMq&X-Amz-Signature=a574bf9efea5d840878591f5c26c98f391fa67a24848bcc97099843b93398053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P6XX552%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHcCGuBO9TZoOt%2B0UW%2FGTG4iFADTRLkIr375YYAF%2FU3jAiB%2B8yZ1jNiU%2FNDtxEuPnbGC6gzZGLZpGkB%2BGFarnR5wHir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMEBCqVHfhpDfEXV4kKtwDjHawsMU9gCDje75AsVftMBNLQhKSQ70cht34mvgvUZ6dShB0GeyHBa%2B9ZfWM13Yn4XZM1Mv30907LKNBnH3fLCvzfT6UpFJxSFN%2FXBH7xRBOF1qKItzaxO%2F%2BYK48mnMup9l231MR9OvDHfh1l28ANrs7qyvoQ4UNcDl8aL2H9NxqUUx6WKH%2FbBmcH3wnEGV4c1Y2XhESDOIFliaovmOMn0y4r6VIqDGw5gI8J18AnMMRZ%2B%2BO1pPS7DuPkyrpf2UghxQzD1GSKOuZEfAO4OY0ubAYSFqmEaruSKNKSiWvaH3qKkL1o0F4hfeGSy%2Fkb3WfeLELt5aPxZy4GNKACB0hUewWHif7lsK8FeCuqixxbS5iU77J5pAsCWQD2%2FdDVTsIyfo4YqYH4H2HpzWxwbDSyduznJWs%2BcG2JRc7JyRGJAzj0IN%2BT1Nvzpb1FnaQjxCyALkU7xPvb8hdaD4flhOvkcvQcKpDWep4CLQKKyhvVPuthtNr7CAf4gfW34tZxxg0zP6%2Fq3apvzz9Fx7bpmY2zkyt7Eev0o35zaXM7AYw88maZsFBWme0BFCm1%2FFLDU%2FdlaS0UxGtrLO4czbwj0UEk%2Fq5Q51LXyWT9F73uuVmruZBBfi%2Fpc%2FgDYrWZuQw6dr9xAY6pgHi%2BzaiVABeSXXRi%2FwD0oBuYrwU6aedKVubLSHo%2FXCBbLKJg7K5UZt4rvCPHmBHh%2FFC1wLgm0KMpN1ppCvM5269d9oa0MpkADmEJpHAXbbngyAQv7keQ%2F47tz1hYlFjgy9tMjUIf3d2RDjMNdTFNllyn%2BsQfpsZS97UR8qARMTpf3YkZ9pPv6gcTSaul8MCLa5ZHf8%2FzzE0v1ond5wGDPPGSmpgtYMq&X-Amz-Signature=fc076bb371f54ccf98ac568fa27662cea4751823cd5aa91e0c2b1f6cfc1a3ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
