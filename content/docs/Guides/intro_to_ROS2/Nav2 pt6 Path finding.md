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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR5JXRGA%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGk3Dhirw1Wis6UrNk%2Bea2B6aIcqj%2BWALUFvQgqAvvyRAiEAu5TFw0AO2AIOoai2Y9AiD3q432spsaMEcKXkh5iYtGwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvSv51Pb3dZfdgsvSrcA1%2FYzWpnA0LxCR8SEVKRyIXrsXZIXE0kTzdVv2TnT%2FjnjkewtPbzwIsxD7GJrjv7YrazC4WD8QhAXi0HbZiBfKko4hDAE8FfY8UvShBUQxDxrUkBzF1UkQH2CvyFWdgZJg6xgnRgaNEVWq5oAsl3DXESp0Cs8h3qy9B1E533Crm3O%2BEnp6YGXFH5nq2Ke9Z5YIT%2FBb0kAlSfJkzMWL1HwN0FYGz51M0NTYD20I%2BXfzbw1KgfmjA%2BcOpY8I0OdKvjKoLs039E5WIA6PdA5Drd9tki43Ah566QncRGcaB3vHOXEpuLuuICVX1QdBfnDcZU%2FSGQNgf%2FRjgKe%2FziEN16TBLM0WnxcNFd5%2FItBpkf%2BXBigXu4G%2FEpsW%2BQOeuVePUAPkwVaVndxQ6%2FlUfq7w62iCiuwpSxtt2D0u92pSofrT7ELI9Y5G9LaPRUumly4Mr5zW%2BtxBPfgzm%2FwYqFnKTjqbzexqsVeY14bycuaP7woYFMG47kOhxSrxwMnLOaI3gixKOhIkiUG5lK9PWcF0Pj%2BtGs0YK%2FcJd4gkUz0%2BnBscyuKTzJOVdOBlLs6N3lgYGQTb%2BvFWBn2UEKamdmt37fZflECvD1FGVXoqr%2FpBdBQo8DKLhy8zFDthxob4N%2BMKrYxcsGOqUBLen7StcAIExqsnHjHeOOcVDS2ntXVZjenBrCwmmelsORs%2B4qZ7IHTLIxBPoiA2nS3zxv%2BydOrVtc43mYFGlaYgYeed40IM%2FsuwPAfJzT7LgU%2FYw7CKj57xdMgZHLJcM%2FowVV2adD5Y0oAeJ3dsZJviz6NgwIWFEJmJUhAR3wGifXujhhvcLGb03tYCWxPFjuv22XaVx9HD%2F8WAHc3xP5uXD%2FM7zw&X-Amz-Signature=a9fd1e28813f4b350f28b706bae8bc8024973e248c33e99948357e9fef571924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR5JXRGA%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGk3Dhirw1Wis6UrNk%2Bea2B6aIcqj%2BWALUFvQgqAvvyRAiEAu5TFw0AO2AIOoai2Y9AiD3q432spsaMEcKXkh5iYtGwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvSv51Pb3dZfdgsvSrcA1%2FYzWpnA0LxCR8SEVKRyIXrsXZIXE0kTzdVv2TnT%2FjnjkewtPbzwIsxD7GJrjv7YrazC4WD8QhAXi0HbZiBfKko4hDAE8FfY8UvShBUQxDxrUkBzF1UkQH2CvyFWdgZJg6xgnRgaNEVWq5oAsl3DXESp0Cs8h3qy9B1E533Crm3O%2BEnp6YGXFH5nq2Ke9Z5YIT%2FBb0kAlSfJkzMWL1HwN0FYGz51M0NTYD20I%2BXfzbw1KgfmjA%2BcOpY8I0OdKvjKoLs039E5WIA6PdA5Drd9tki43Ah566QncRGcaB3vHOXEpuLuuICVX1QdBfnDcZU%2FSGQNgf%2FRjgKe%2FziEN16TBLM0WnxcNFd5%2FItBpkf%2BXBigXu4G%2FEpsW%2BQOeuVePUAPkwVaVndxQ6%2FlUfq7w62iCiuwpSxtt2D0u92pSofrT7ELI9Y5G9LaPRUumly4Mr5zW%2BtxBPfgzm%2FwYqFnKTjqbzexqsVeY14bycuaP7woYFMG47kOhxSrxwMnLOaI3gixKOhIkiUG5lK9PWcF0Pj%2BtGs0YK%2FcJd4gkUz0%2BnBscyuKTzJOVdOBlLs6N3lgYGQTb%2BvFWBn2UEKamdmt37fZflECvD1FGVXoqr%2FpBdBQo8DKLhy8zFDthxob4N%2BMKrYxcsGOqUBLen7StcAIExqsnHjHeOOcVDS2ntXVZjenBrCwmmelsORs%2B4qZ7IHTLIxBPoiA2nS3zxv%2BydOrVtc43mYFGlaYgYeed40IM%2FsuwPAfJzT7LgU%2FYw7CKj57xdMgZHLJcM%2FowVV2adD5Y0oAeJ3dsZJviz6NgwIWFEJmJUhAR3wGifXujhhvcLGb03tYCWxPFjuv22XaVx9HD%2F8WAHc3xP5uXD%2FM7zw&X-Amz-Signature=834298849059cffc7d0732037868889e1dd58fbdb38a2e1b7ad99c8f12f7ce88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR5JXRGA%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGk3Dhirw1Wis6UrNk%2Bea2B6aIcqj%2BWALUFvQgqAvvyRAiEAu5TFw0AO2AIOoai2Y9AiD3q432spsaMEcKXkh5iYtGwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvSv51Pb3dZfdgsvSrcA1%2FYzWpnA0LxCR8SEVKRyIXrsXZIXE0kTzdVv2TnT%2FjnjkewtPbzwIsxD7GJrjv7YrazC4WD8QhAXi0HbZiBfKko4hDAE8FfY8UvShBUQxDxrUkBzF1UkQH2CvyFWdgZJg6xgnRgaNEVWq5oAsl3DXESp0Cs8h3qy9B1E533Crm3O%2BEnp6YGXFH5nq2Ke9Z5YIT%2FBb0kAlSfJkzMWL1HwN0FYGz51M0NTYD20I%2BXfzbw1KgfmjA%2BcOpY8I0OdKvjKoLs039E5WIA6PdA5Drd9tki43Ah566QncRGcaB3vHOXEpuLuuICVX1QdBfnDcZU%2FSGQNgf%2FRjgKe%2FziEN16TBLM0WnxcNFd5%2FItBpkf%2BXBigXu4G%2FEpsW%2BQOeuVePUAPkwVaVndxQ6%2FlUfq7w62iCiuwpSxtt2D0u92pSofrT7ELI9Y5G9LaPRUumly4Mr5zW%2BtxBPfgzm%2FwYqFnKTjqbzexqsVeY14bycuaP7woYFMG47kOhxSrxwMnLOaI3gixKOhIkiUG5lK9PWcF0Pj%2BtGs0YK%2FcJd4gkUz0%2BnBscyuKTzJOVdOBlLs6N3lgYGQTb%2BvFWBn2UEKamdmt37fZflECvD1FGVXoqr%2FpBdBQo8DKLhy8zFDthxob4N%2BMKrYxcsGOqUBLen7StcAIExqsnHjHeOOcVDS2ntXVZjenBrCwmmelsORs%2B4qZ7IHTLIxBPoiA2nS3zxv%2BydOrVtc43mYFGlaYgYeed40IM%2FsuwPAfJzT7LgU%2FYw7CKj57xdMgZHLJcM%2FowVV2adD5Y0oAeJ3dsZJviz6NgwIWFEJmJUhAR3wGifXujhhvcLGb03tYCWxPFjuv22XaVx9HD%2F8WAHc3xP5uXD%2FM7zw&X-Amz-Signature=c25f19db7c0ecf3cc98c924519a3b5b38200b5f92081ba8648929635d94a6e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR5JXRGA%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGk3Dhirw1Wis6UrNk%2Bea2B6aIcqj%2BWALUFvQgqAvvyRAiEAu5TFw0AO2AIOoai2Y9AiD3q432spsaMEcKXkh5iYtGwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvSv51Pb3dZfdgsvSrcA1%2FYzWpnA0LxCR8SEVKRyIXrsXZIXE0kTzdVv2TnT%2FjnjkewtPbzwIsxD7GJrjv7YrazC4WD8QhAXi0HbZiBfKko4hDAE8FfY8UvShBUQxDxrUkBzF1UkQH2CvyFWdgZJg6xgnRgaNEVWq5oAsl3DXESp0Cs8h3qy9B1E533Crm3O%2BEnp6YGXFH5nq2Ke9Z5YIT%2FBb0kAlSfJkzMWL1HwN0FYGz51M0NTYD20I%2BXfzbw1KgfmjA%2BcOpY8I0OdKvjKoLs039E5WIA6PdA5Drd9tki43Ah566QncRGcaB3vHOXEpuLuuICVX1QdBfnDcZU%2FSGQNgf%2FRjgKe%2FziEN16TBLM0WnxcNFd5%2FItBpkf%2BXBigXu4G%2FEpsW%2BQOeuVePUAPkwVaVndxQ6%2FlUfq7w62iCiuwpSxtt2D0u92pSofrT7ELI9Y5G9LaPRUumly4Mr5zW%2BtxBPfgzm%2FwYqFnKTjqbzexqsVeY14bycuaP7woYFMG47kOhxSrxwMnLOaI3gixKOhIkiUG5lK9PWcF0Pj%2BtGs0YK%2FcJd4gkUz0%2BnBscyuKTzJOVdOBlLs6N3lgYGQTb%2BvFWBn2UEKamdmt37fZflECvD1FGVXoqr%2FpBdBQo8DKLhy8zFDthxob4N%2BMKrYxcsGOqUBLen7StcAIExqsnHjHeOOcVDS2ntXVZjenBrCwmmelsORs%2B4qZ7IHTLIxBPoiA2nS3zxv%2BydOrVtc43mYFGlaYgYeed40IM%2FsuwPAfJzT7LgU%2FYw7CKj57xdMgZHLJcM%2FowVV2adD5Y0oAeJ3dsZJviz6NgwIWFEJmJUhAR3wGifXujhhvcLGb03tYCWxPFjuv22XaVx9HD%2F8WAHc3xP5uXD%2FM7zw&X-Amz-Signature=28471c7d8aa54d32fb17e23d1034aad2e3a03ce55dd56710934c95fd0e80628e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR5JXRGA%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGk3Dhirw1Wis6UrNk%2Bea2B6aIcqj%2BWALUFvQgqAvvyRAiEAu5TFw0AO2AIOoai2Y9AiD3q432spsaMEcKXkh5iYtGwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvSv51Pb3dZfdgsvSrcA1%2FYzWpnA0LxCR8SEVKRyIXrsXZIXE0kTzdVv2TnT%2FjnjkewtPbzwIsxD7GJrjv7YrazC4WD8QhAXi0HbZiBfKko4hDAE8FfY8UvShBUQxDxrUkBzF1UkQH2CvyFWdgZJg6xgnRgaNEVWq5oAsl3DXESp0Cs8h3qy9B1E533Crm3O%2BEnp6YGXFH5nq2Ke9Z5YIT%2FBb0kAlSfJkzMWL1HwN0FYGz51M0NTYD20I%2BXfzbw1KgfmjA%2BcOpY8I0OdKvjKoLs039E5WIA6PdA5Drd9tki43Ah566QncRGcaB3vHOXEpuLuuICVX1QdBfnDcZU%2FSGQNgf%2FRjgKe%2FziEN16TBLM0WnxcNFd5%2FItBpkf%2BXBigXu4G%2FEpsW%2BQOeuVePUAPkwVaVndxQ6%2FlUfq7w62iCiuwpSxtt2D0u92pSofrT7ELI9Y5G9LaPRUumly4Mr5zW%2BtxBPfgzm%2FwYqFnKTjqbzexqsVeY14bycuaP7woYFMG47kOhxSrxwMnLOaI3gixKOhIkiUG5lK9PWcF0Pj%2BtGs0YK%2FcJd4gkUz0%2BnBscyuKTzJOVdOBlLs6N3lgYGQTb%2BvFWBn2UEKamdmt37fZflECvD1FGVXoqr%2FpBdBQo8DKLhy8zFDthxob4N%2BMKrYxcsGOqUBLen7StcAIExqsnHjHeOOcVDS2ntXVZjenBrCwmmelsORs%2B4qZ7IHTLIxBPoiA2nS3zxv%2BydOrVtc43mYFGlaYgYeed40IM%2FsuwPAfJzT7LgU%2FYw7CKj57xdMgZHLJcM%2FowVV2adD5Y0oAeJ3dsZJviz6NgwIWFEJmJUhAR3wGifXujhhvcLGb03tYCWxPFjuv22XaVx9HD%2F8WAHc3xP5uXD%2FM7zw&X-Amz-Signature=bc6a09f8be05d1b66b7f84914929de4bab2730a710b53847c8fee6e8d2ea3503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR5JXRGA%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGk3Dhirw1Wis6UrNk%2Bea2B6aIcqj%2BWALUFvQgqAvvyRAiEAu5TFw0AO2AIOoai2Y9AiD3q432spsaMEcKXkh5iYtGwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvSv51Pb3dZfdgsvSrcA1%2FYzWpnA0LxCR8SEVKRyIXrsXZIXE0kTzdVv2TnT%2FjnjkewtPbzwIsxD7GJrjv7YrazC4WD8QhAXi0HbZiBfKko4hDAE8FfY8UvShBUQxDxrUkBzF1UkQH2CvyFWdgZJg6xgnRgaNEVWq5oAsl3DXESp0Cs8h3qy9B1E533Crm3O%2BEnp6YGXFH5nq2Ke9Z5YIT%2FBb0kAlSfJkzMWL1HwN0FYGz51M0NTYD20I%2BXfzbw1KgfmjA%2BcOpY8I0OdKvjKoLs039E5WIA6PdA5Drd9tki43Ah566QncRGcaB3vHOXEpuLuuICVX1QdBfnDcZU%2FSGQNgf%2FRjgKe%2FziEN16TBLM0WnxcNFd5%2FItBpkf%2BXBigXu4G%2FEpsW%2BQOeuVePUAPkwVaVndxQ6%2FlUfq7w62iCiuwpSxtt2D0u92pSofrT7ELI9Y5G9LaPRUumly4Mr5zW%2BtxBPfgzm%2FwYqFnKTjqbzexqsVeY14bycuaP7woYFMG47kOhxSrxwMnLOaI3gixKOhIkiUG5lK9PWcF0Pj%2BtGs0YK%2FcJd4gkUz0%2BnBscyuKTzJOVdOBlLs6N3lgYGQTb%2BvFWBn2UEKamdmt37fZflECvD1FGVXoqr%2FpBdBQo8DKLhy8zFDthxob4N%2BMKrYxcsGOqUBLen7StcAIExqsnHjHeOOcVDS2ntXVZjenBrCwmmelsORs%2B4qZ7IHTLIxBPoiA2nS3zxv%2BydOrVtc43mYFGlaYgYeed40IM%2FsuwPAfJzT7LgU%2FYw7CKj57xdMgZHLJcM%2FowVV2adD5Y0oAeJ3dsZJviz6NgwIWFEJmJUhAR3wGifXujhhvcLGb03tYCWxPFjuv22XaVx9HD%2F8WAHc3xP5uXD%2FM7zw&X-Amz-Signature=80c6d9b7892224bebc9e1b61ca5d5b92ebc95bd8d0b5bffcf8b89823fa1e6bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR5JXRGA%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGk3Dhirw1Wis6UrNk%2Bea2B6aIcqj%2BWALUFvQgqAvvyRAiEAu5TFw0AO2AIOoai2Y9AiD3q432spsaMEcKXkh5iYtGwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvSv51Pb3dZfdgsvSrcA1%2FYzWpnA0LxCR8SEVKRyIXrsXZIXE0kTzdVv2TnT%2FjnjkewtPbzwIsxD7GJrjv7YrazC4WD8QhAXi0HbZiBfKko4hDAE8FfY8UvShBUQxDxrUkBzF1UkQH2CvyFWdgZJg6xgnRgaNEVWq5oAsl3DXESp0Cs8h3qy9B1E533Crm3O%2BEnp6YGXFH5nq2Ke9Z5YIT%2FBb0kAlSfJkzMWL1HwN0FYGz51M0NTYD20I%2BXfzbw1KgfmjA%2BcOpY8I0OdKvjKoLs039E5WIA6PdA5Drd9tki43Ah566QncRGcaB3vHOXEpuLuuICVX1QdBfnDcZU%2FSGQNgf%2FRjgKe%2FziEN16TBLM0WnxcNFd5%2FItBpkf%2BXBigXu4G%2FEpsW%2BQOeuVePUAPkwVaVndxQ6%2FlUfq7w62iCiuwpSxtt2D0u92pSofrT7ELI9Y5G9LaPRUumly4Mr5zW%2BtxBPfgzm%2FwYqFnKTjqbzexqsVeY14bycuaP7woYFMG47kOhxSrxwMnLOaI3gixKOhIkiUG5lK9PWcF0Pj%2BtGs0YK%2FcJd4gkUz0%2BnBscyuKTzJOVdOBlLs6N3lgYGQTb%2BvFWBn2UEKamdmt37fZflECvD1FGVXoqr%2FpBdBQo8DKLhy8zFDthxob4N%2BMKrYxcsGOqUBLen7StcAIExqsnHjHeOOcVDS2ntXVZjenBrCwmmelsORs%2B4qZ7IHTLIxBPoiA2nS3zxv%2BydOrVtc43mYFGlaYgYeed40IM%2FsuwPAfJzT7LgU%2FYw7CKj57xdMgZHLJcM%2FowVV2adD5Y0oAeJ3dsZJviz6NgwIWFEJmJUhAR3wGifXujhhvcLGb03tYCWxPFjuv22XaVx9HD%2F8WAHc3xP5uXD%2FM7zw&X-Amz-Signature=109c17ff266c732167a4c128fcba21578e8549f4bc975bf76e42f8a2de98b581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR5JXRGA%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGk3Dhirw1Wis6UrNk%2Bea2B6aIcqj%2BWALUFvQgqAvvyRAiEAu5TFw0AO2AIOoai2Y9AiD3q432spsaMEcKXkh5iYtGwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvSv51Pb3dZfdgsvSrcA1%2FYzWpnA0LxCR8SEVKRyIXrsXZIXE0kTzdVv2TnT%2FjnjkewtPbzwIsxD7GJrjv7YrazC4WD8QhAXi0HbZiBfKko4hDAE8FfY8UvShBUQxDxrUkBzF1UkQH2CvyFWdgZJg6xgnRgaNEVWq5oAsl3DXESp0Cs8h3qy9B1E533Crm3O%2BEnp6YGXFH5nq2Ke9Z5YIT%2FBb0kAlSfJkzMWL1HwN0FYGz51M0NTYD20I%2BXfzbw1KgfmjA%2BcOpY8I0OdKvjKoLs039E5WIA6PdA5Drd9tki43Ah566QncRGcaB3vHOXEpuLuuICVX1QdBfnDcZU%2FSGQNgf%2FRjgKe%2FziEN16TBLM0WnxcNFd5%2FItBpkf%2BXBigXu4G%2FEpsW%2BQOeuVePUAPkwVaVndxQ6%2FlUfq7w62iCiuwpSxtt2D0u92pSofrT7ELI9Y5G9LaPRUumly4Mr5zW%2BtxBPfgzm%2FwYqFnKTjqbzexqsVeY14bycuaP7woYFMG47kOhxSrxwMnLOaI3gixKOhIkiUG5lK9PWcF0Pj%2BtGs0YK%2FcJd4gkUz0%2BnBscyuKTzJOVdOBlLs6N3lgYGQTb%2BvFWBn2UEKamdmt37fZflECvD1FGVXoqr%2FpBdBQo8DKLhy8zFDthxob4N%2BMKrYxcsGOqUBLen7StcAIExqsnHjHeOOcVDS2ntXVZjenBrCwmmelsORs%2B4qZ7IHTLIxBPoiA2nS3zxv%2BydOrVtc43mYFGlaYgYeed40IM%2FsuwPAfJzT7LgU%2FYw7CKj57xdMgZHLJcM%2FowVV2adD5Y0oAeJ3dsZJviz6NgwIWFEJmJUhAR3wGifXujhhvcLGb03tYCWxPFjuv22XaVx9HD%2F8WAHc3xP5uXD%2FM7zw&X-Amz-Signature=528f4e40c1879ce3e6f3e5f0c556a37f7647663da17ef863585070367e01cfa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR5JXRGA%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGk3Dhirw1Wis6UrNk%2Bea2B6aIcqj%2BWALUFvQgqAvvyRAiEAu5TFw0AO2AIOoai2Y9AiD3q432spsaMEcKXkh5iYtGwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvSv51Pb3dZfdgsvSrcA1%2FYzWpnA0LxCR8SEVKRyIXrsXZIXE0kTzdVv2TnT%2FjnjkewtPbzwIsxD7GJrjv7YrazC4WD8QhAXi0HbZiBfKko4hDAE8FfY8UvShBUQxDxrUkBzF1UkQH2CvyFWdgZJg6xgnRgaNEVWq5oAsl3DXESp0Cs8h3qy9B1E533Crm3O%2BEnp6YGXFH5nq2Ke9Z5YIT%2FBb0kAlSfJkzMWL1HwN0FYGz51M0NTYD20I%2BXfzbw1KgfmjA%2BcOpY8I0OdKvjKoLs039E5WIA6PdA5Drd9tki43Ah566QncRGcaB3vHOXEpuLuuICVX1QdBfnDcZU%2FSGQNgf%2FRjgKe%2FziEN16TBLM0WnxcNFd5%2FItBpkf%2BXBigXu4G%2FEpsW%2BQOeuVePUAPkwVaVndxQ6%2FlUfq7w62iCiuwpSxtt2D0u92pSofrT7ELI9Y5G9LaPRUumly4Mr5zW%2BtxBPfgzm%2FwYqFnKTjqbzexqsVeY14bycuaP7woYFMG47kOhxSrxwMnLOaI3gixKOhIkiUG5lK9PWcF0Pj%2BtGs0YK%2FcJd4gkUz0%2BnBscyuKTzJOVdOBlLs6N3lgYGQTb%2BvFWBn2UEKamdmt37fZflECvD1FGVXoqr%2FpBdBQo8DKLhy8zFDthxob4N%2BMKrYxcsGOqUBLen7StcAIExqsnHjHeOOcVDS2ntXVZjenBrCwmmelsORs%2B4qZ7IHTLIxBPoiA2nS3zxv%2BydOrVtc43mYFGlaYgYeed40IM%2FsuwPAfJzT7LgU%2FYw7CKj57xdMgZHLJcM%2FowVV2adD5Y0oAeJ3dsZJviz6NgwIWFEJmJUhAR3wGifXujhhvcLGb03tYCWxPFjuv22XaVx9HD%2F8WAHc3xP5uXD%2FM7zw&X-Amz-Signature=7ec5fea2548e306f5c201190e5700fbd2fa27ed853e020888de1c6242421f47e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR5JXRGA%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGk3Dhirw1Wis6UrNk%2Bea2B6aIcqj%2BWALUFvQgqAvvyRAiEAu5TFw0AO2AIOoai2Y9AiD3q432spsaMEcKXkh5iYtGwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvSv51Pb3dZfdgsvSrcA1%2FYzWpnA0LxCR8SEVKRyIXrsXZIXE0kTzdVv2TnT%2FjnjkewtPbzwIsxD7GJrjv7YrazC4WD8QhAXi0HbZiBfKko4hDAE8FfY8UvShBUQxDxrUkBzF1UkQH2CvyFWdgZJg6xgnRgaNEVWq5oAsl3DXESp0Cs8h3qy9B1E533Crm3O%2BEnp6YGXFH5nq2Ke9Z5YIT%2FBb0kAlSfJkzMWL1HwN0FYGz51M0NTYD20I%2BXfzbw1KgfmjA%2BcOpY8I0OdKvjKoLs039E5WIA6PdA5Drd9tki43Ah566QncRGcaB3vHOXEpuLuuICVX1QdBfnDcZU%2FSGQNgf%2FRjgKe%2FziEN16TBLM0WnxcNFd5%2FItBpkf%2BXBigXu4G%2FEpsW%2BQOeuVePUAPkwVaVndxQ6%2FlUfq7w62iCiuwpSxtt2D0u92pSofrT7ELI9Y5G9LaPRUumly4Mr5zW%2BtxBPfgzm%2FwYqFnKTjqbzexqsVeY14bycuaP7woYFMG47kOhxSrxwMnLOaI3gixKOhIkiUG5lK9PWcF0Pj%2BtGs0YK%2FcJd4gkUz0%2BnBscyuKTzJOVdOBlLs6N3lgYGQTb%2BvFWBn2UEKamdmt37fZflECvD1FGVXoqr%2FpBdBQo8DKLhy8zFDthxob4N%2BMKrYxcsGOqUBLen7StcAIExqsnHjHeOOcVDS2ntXVZjenBrCwmmelsORs%2B4qZ7IHTLIxBPoiA2nS3zxv%2BydOrVtc43mYFGlaYgYeed40IM%2FsuwPAfJzT7LgU%2FYw7CKj57xdMgZHLJcM%2FowVV2adD5Y0oAeJ3dsZJviz6NgwIWFEJmJUhAR3wGifXujhhvcLGb03tYCWxPFjuv22XaVx9HD%2F8WAHc3xP5uXD%2FM7zw&X-Amz-Signature=395e30156ac2a4c4397a2d5f6ae22d8d6f93436aeb46c4455e4178c8337bd4ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR5JXRGA%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGk3Dhirw1Wis6UrNk%2Bea2B6aIcqj%2BWALUFvQgqAvvyRAiEAu5TFw0AO2AIOoai2Y9AiD3q432spsaMEcKXkh5iYtGwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvSv51Pb3dZfdgsvSrcA1%2FYzWpnA0LxCR8SEVKRyIXrsXZIXE0kTzdVv2TnT%2FjnjkewtPbzwIsxD7GJrjv7YrazC4WD8QhAXi0HbZiBfKko4hDAE8FfY8UvShBUQxDxrUkBzF1UkQH2CvyFWdgZJg6xgnRgaNEVWq5oAsl3DXESp0Cs8h3qy9B1E533Crm3O%2BEnp6YGXFH5nq2Ke9Z5YIT%2FBb0kAlSfJkzMWL1HwN0FYGz51M0NTYD20I%2BXfzbw1KgfmjA%2BcOpY8I0OdKvjKoLs039E5WIA6PdA5Drd9tki43Ah566QncRGcaB3vHOXEpuLuuICVX1QdBfnDcZU%2FSGQNgf%2FRjgKe%2FziEN16TBLM0WnxcNFd5%2FItBpkf%2BXBigXu4G%2FEpsW%2BQOeuVePUAPkwVaVndxQ6%2FlUfq7w62iCiuwpSxtt2D0u92pSofrT7ELI9Y5G9LaPRUumly4Mr5zW%2BtxBPfgzm%2FwYqFnKTjqbzexqsVeY14bycuaP7woYFMG47kOhxSrxwMnLOaI3gixKOhIkiUG5lK9PWcF0Pj%2BtGs0YK%2FcJd4gkUz0%2BnBscyuKTzJOVdOBlLs6N3lgYGQTb%2BvFWBn2UEKamdmt37fZflECvD1FGVXoqr%2FpBdBQo8DKLhy8zFDthxob4N%2BMKrYxcsGOqUBLen7StcAIExqsnHjHeOOcVDS2ntXVZjenBrCwmmelsORs%2B4qZ7IHTLIxBPoiA2nS3zxv%2BydOrVtc43mYFGlaYgYeed40IM%2FsuwPAfJzT7LgU%2FYw7CKj57xdMgZHLJcM%2FowVV2adD5Y0oAeJ3dsZJviz6NgwIWFEJmJUhAR3wGifXujhhvcLGb03tYCWxPFjuv22XaVx9HD%2F8WAHc3xP5uXD%2FM7zw&X-Amz-Signature=555ec742b53548538d77ff4210e912f0868fd8b9cd95795c86116dd4e17bcb4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR5JXRGA%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGk3Dhirw1Wis6UrNk%2Bea2B6aIcqj%2BWALUFvQgqAvvyRAiEAu5TFw0AO2AIOoai2Y9AiD3q432spsaMEcKXkh5iYtGwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvSv51Pb3dZfdgsvSrcA1%2FYzWpnA0LxCR8SEVKRyIXrsXZIXE0kTzdVv2TnT%2FjnjkewtPbzwIsxD7GJrjv7YrazC4WD8QhAXi0HbZiBfKko4hDAE8FfY8UvShBUQxDxrUkBzF1UkQH2CvyFWdgZJg6xgnRgaNEVWq5oAsl3DXESp0Cs8h3qy9B1E533Crm3O%2BEnp6YGXFH5nq2Ke9Z5YIT%2FBb0kAlSfJkzMWL1HwN0FYGz51M0NTYD20I%2BXfzbw1KgfmjA%2BcOpY8I0OdKvjKoLs039E5WIA6PdA5Drd9tki43Ah566QncRGcaB3vHOXEpuLuuICVX1QdBfnDcZU%2FSGQNgf%2FRjgKe%2FziEN16TBLM0WnxcNFd5%2FItBpkf%2BXBigXu4G%2FEpsW%2BQOeuVePUAPkwVaVndxQ6%2FlUfq7w62iCiuwpSxtt2D0u92pSofrT7ELI9Y5G9LaPRUumly4Mr5zW%2BtxBPfgzm%2FwYqFnKTjqbzexqsVeY14bycuaP7woYFMG47kOhxSrxwMnLOaI3gixKOhIkiUG5lK9PWcF0Pj%2BtGs0YK%2FcJd4gkUz0%2BnBscyuKTzJOVdOBlLs6N3lgYGQTb%2BvFWBn2UEKamdmt37fZflECvD1FGVXoqr%2FpBdBQo8DKLhy8zFDthxob4N%2BMKrYxcsGOqUBLen7StcAIExqsnHjHeOOcVDS2ntXVZjenBrCwmmelsORs%2B4qZ7IHTLIxBPoiA2nS3zxv%2BydOrVtc43mYFGlaYgYeed40IM%2FsuwPAfJzT7LgU%2FYw7CKj57xdMgZHLJcM%2FowVV2adD5Y0oAeJ3dsZJviz6NgwIWFEJmJUhAR3wGifXujhhvcLGb03tYCWxPFjuv22XaVx9HD%2F8WAHc3xP5uXD%2FM7zw&X-Amz-Signature=a39f78621c68f593603ae5029dfdf98ccb5e1c8f401f04a8b65fe44145bbb209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR5JXRGA%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGk3Dhirw1Wis6UrNk%2Bea2B6aIcqj%2BWALUFvQgqAvvyRAiEAu5TFw0AO2AIOoai2Y9AiD3q432spsaMEcKXkh5iYtGwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvSv51Pb3dZfdgsvSrcA1%2FYzWpnA0LxCR8SEVKRyIXrsXZIXE0kTzdVv2TnT%2FjnjkewtPbzwIsxD7GJrjv7YrazC4WD8QhAXi0HbZiBfKko4hDAE8FfY8UvShBUQxDxrUkBzF1UkQH2CvyFWdgZJg6xgnRgaNEVWq5oAsl3DXESp0Cs8h3qy9B1E533Crm3O%2BEnp6YGXFH5nq2Ke9Z5YIT%2FBb0kAlSfJkzMWL1HwN0FYGz51M0NTYD20I%2BXfzbw1KgfmjA%2BcOpY8I0OdKvjKoLs039E5WIA6PdA5Drd9tki43Ah566QncRGcaB3vHOXEpuLuuICVX1QdBfnDcZU%2FSGQNgf%2FRjgKe%2FziEN16TBLM0WnxcNFd5%2FItBpkf%2BXBigXu4G%2FEpsW%2BQOeuVePUAPkwVaVndxQ6%2FlUfq7w62iCiuwpSxtt2D0u92pSofrT7ELI9Y5G9LaPRUumly4Mr5zW%2BtxBPfgzm%2FwYqFnKTjqbzexqsVeY14bycuaP7woYFMG47kOhxSrxwMnLOaI3gixKOhIkiUG5lK9PWcF0Pj%2BtGs0YK%2FcJd4gkUz0%2BnBscyuKTzJOVdOBlLs6N3lgYGQTb%2BvFWBn2UEKamdmt37fZflECvD1FGVXoqr%2FpBdBQo8DKLhy8zFDthxob4N%2BMKrYxcsGOqUBLen7StcAIExqsnHjHeOOcVDS2ntXVZjenBrCwmmelsORs%2B4qZ7IHTLIxBPoiA2nS3zxv%2BydOrVtc43mYFGlaYgYeed40IM%2FsuwPAfJzT7LgU%2FYw7CKj57xdMgZHLJcM%2FowVV2adD5Y0oAeJ3dsZJviz6NgwIWFEJmJUhAR3wGifXujhhvcLGb03tYCWxPFjuv22XaVx9HD%2F8WAHc3xP5uXD%2FM7zw&X-Amz-Signature=cf9b86cc5078a426a2e7c9a9fc9550aed39a87e4dd460e1305447c0954440818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
