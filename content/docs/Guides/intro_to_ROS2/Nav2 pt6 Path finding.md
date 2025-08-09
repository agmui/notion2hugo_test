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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUJYAQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE67vdgbSXpwVeddW7dtZC9%2BCXcs0jmLH1xP4mffIx0LAiBg9T%2BXBJkEZbapZKhUVYwhYvCQED15EwGu0sZkfufBcSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWSkaXFBLg%2B25%2FbyTKtwDcpShSww7G8vlLjMbOMPCOohoAuZOsG2%2FC7DsKOjVsxkaQ9qhPvrTy6CVMWjGXR%2BcrhBJ0hBu0tbqsB8wVDKVb6jHo4tusTPNi52CvOx6REwPuc%2BkPgSXKdau65QWWbPxRjzeQu3xypiZueENYz5fZBOZ7LIM5UrYkAvM7fA3s3B5iTeNsr9bAFFAclLB5A2A%2Bga%2B5tHDZc9PVl1AoM1WmyyM%2BOcDBOEgVbyyr1v35c91QRInYekCEh4R2p%2FTd18xmV31nsTa7vF7DpHr0V%2BTzPVIsZkU2shdGgHoed1pIEfSW2nkHZ2QuJZ%2FoVLLLnjTM2m%2F%2FoeAjnoLnzu9wpJ7NXR3YGFXslTi5Q52t9OrdpDvn1tQJ6roLMPN9wvnurqQvx9gh1ibprS3ILQV8uabZFqKaxyCkOkrR%2FeklmTz56Ahv7UZ1HkpgYp3w3x8dRIIVA6hdE%2FgrSVAt93DRAlv8O8NVz%2FPR6kxIx1IMSOHvrFP54CkoyWj2UIrsfuaapNQGnTXyU1JscQjPhDcBxZN9ILO1Ye8s41iEoo4NXvhNbzh6O4S9YxhDkHfFBJZ%2FL1MrggyEpbvdVYRrOSOK9P4E63s3O%2FF1FNOtuleg8i031W1o3wHruKRkfBHaaMwmYvfxAY6pgGsTUpWmPn79gVl%2FqVJWtn48rYEyxdKCrisgPIG3iq8sSCjyh20XFir0%2BbsKl1NLF0e8fryB72JmP%2BifT2lMH9Nu2PPS%2BefIHh1ro0vBd3uYwsyyp5kQVTmn3tYhmWNuClK2ZdruWdss0%2FT2wThKufk9J98QF1ImJCz9qxn8GLTbbQpX3XQbcItjWrSthixVQI%2BDyIrQyp88KNjw7rLk%2FP0gZcgECuG&X-Amz-Signature=acc5385e740a08d4cf9d020d43dd88de0540d8b452cd36913f2effa351f4770f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUJYAQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE67vdgbSXpwVeddW7dtZC9%2BCXcs0jmLH1xP4mffIx0LAiBg9T%2BXBJkEZbapZKhUVYwhYvCQED15EwGu0sZkfufBcSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWSkaXFBLg%2B25%2FbyTKtwDcpShSww7G8vlLjMbOMPCOohoAuZOsG2%2FC7DsKOjVsxkaQ9qhPvrTy6CVMWjGXR%2BcrhBJ0hBu0tbqsB8wVDKVb6jHo4tusTPNi52CvOx6REwPuc%2BkPgSXKdau65QWWbPxRjzeQu3xypiZueENYz5fZBOZ7LIM5UrYkAvM7fA3s3B5iTeNsr9bAFFAclLB5A2A%2Bga%2B5tHDZc9PVl1AoM1WmyyM%2BOcDBOEgVbyyr1v35c91QRInYekCEh4R2p%2FTd18xmV31nsTa7vF7DpHr0V%2BTzPVIsZkU2shdGgHoed1pIEfSW2nkHZ2QuJZ%2FoVLLLnjTM2m%2F%2FoeAjnoLnzu9wpJ7NXR3YGFXslTi5Q52t9OrdpDvn1tQJ6roLMPN9wvnurqQvx9gh1ibprS3ILQV8uabZFqKaxyCkOkrR%2FeklmTz56Ahv7UZ1HkpgYp3w3x8dRIIVA6hdE%2FgrSVAt93DRAlv8O8NVz%2FPR6kxIx1IMSOHvrFP54CkoyWj2UIrsfuaapNQGnTXyU1JscQjPhDcBxZN9ILO1Ye8s41iEoo4NXvhNbzh6O4S9YxhDkHfFBJZ%2FL1MrggyEpbvdVYRrOSOK9P4E63s3O%2FF1FNOtuleg8i031W1o3wHruKRkfBHaaMwmYvfxAY6pgGsTUpWmPn79gVl%2FqVJWtn48rYEyxdKCrisgPIG3iq8sSCjyh20XFir0%2BbsKl1NLF0e8fryB72JmP%2BifT2lMH9Nu2PPS%2BefIHh1ro0vBd3uYwsyyp5kQVTmn3tYhmWNuClK2ZdruWdss0%2FT2wThKufk9J98QF1ImJCz9qxn8GLTbbQpX3XQbcItjWrSthixVQI%2BDyIrQyp88KNjw7rLk%2FP0gZcgECuG&X-Amz-Signature=f00c644f914980ed462da88f5abb4344e3b7a454dac419a118181788da68ed70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUJYAQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE67vdgbSXpwVeddW7dtZC9%2BCXcs0jmLH1xP4mffIx0LAiBg9T%2BXBJkEZbapZKhUVYwhYvCQED15EwGu0sZkfufBcSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWSkaXFBLg%2B25%2FbyTKtwDcpShSww7G8vlLjMbOMPCOohoAuZOsG2%2FC7DsKOjVsxkaQ9qhPvrTy6CVMWjGXR%2BcrhBJ0hBu0tbqsB8wVDKVb6jHo4tusTPNi52CvOx6REwPuc%2BkPgSXKdau65QWWbPxRjzeQu3xypiZueENYz5fZBOZ7LIM5UrYkAvM7fA3s3B5iTeNsr9bAFFAclLB5A2A%2Bga%2B5tHDZc9PVl1AoM1WmyyM%2BOcDBOEgVbyyr1v35c91QRInYekCEh4R2p%2FTd18xmV31nsTa7vF7DpHr0V%2BTzPVIsZkU2shdGgHoed1pIEfSW2nkHZ2QuJZ%2FoVLLLnjTM2m%2F%2FoeAjnoLnzu9wpJ7NXR3YGFXslTi5Q52t9OrdpDvn1tQJ6roLMPN9wvnurqQvx9gh1ibprS3ILQV8uabZFqKaxyCkOkrR%2FeklmTz56Ahv7UZ1HkpgYp3w3x8dRIIVA6hdE%2FgrSVAt93DRAlv8O8NVz%2FPR6kxIx1IMSOHvrFP54CkoyWj2UIrsfuaapNQGnTXyU1JscQjPhDcBxZN9ILO1Ye8s41iEoo4NXvhNbzh6O4S9YxhDkHfFBJZ%2FL1MrggyEpbvdVYRrOSOK9P4E63s3O%2FF1FNOtuleg8i031W1o3wHruKRkfBHaaMwmYvfxAY6pgGsTUpWmPn79gVl%2FqVJWtn48rYEyxdKCrisgPIG3iq8sSCjyh20XFir0%2BbsKl1NLF0e8fryB72JmP%2BifT2lMH9Nu2PPS%2BefIHh1ro0vBd3uYwsyyp5kQVTmn3tYhmWNuClK2ZdruWdss0%2FT2wThKufk9J98QF1ImJCz9qxn8GLTbbQpX3XQbcItjWrSthixVQI%2BDyIrQyp88KNjw7rLk%2FP0gZcgECuG&X-Amz-Signature=cfb86ed8c85cc072b47eea8cca7e73401304d1077e257ea2d35d2696d579a171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUJYAQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE67vdgbSXpwVeddW7dtZC9%2BCXcs0jmLH1xP4mffIx0LAiBg9T%2BXBJkEZbapZKhUVYwhYvCQED15EwGu0sZkfufBcSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWSkaXFBLg%2B25%2FbyTKtwDcpShSww7G8vlLjMbOMPCOohoAuZOsG2%2FC7DsKOjVsxkaQ9qhPvrTy6CVMWjGXR%2BcrhBJ0hBu0tbqsB8wVDKVb6jHo4tusTPNi52CvOx6REwPuc%2BkPgSXKdau65QWWbPxRjzeQu3xypiZueENYz5fZBOZ7LIM5UrYkAvM7fA3s3B5iTeNsr9bAFFAclLB5A2A%2Bga%2B5tHDZc9PVl1AoM1WmyyM%2BOcDBOEgVbyyr1v35c91QRInYekCEh4R2p%2FTd18xmV31nsTa7vF7DpHr0V%2BTzPVIsZkU2shdGgHoed1pIEfSW2nkHZ2QuJZ%2FoVLLLnjTM2m%2F%2FoeAjnoLnzu9wpJ7NXR3YGFXslTi5Q52t9OrdpDvn1tQJ6roLMPN9wvnurqQvx9gh1ibprS3ILQV8uabZFqKaxyCkOkrR%2FeklmTz56Ahv7UZ1HkpgYp3w3x8dRIIVA6hdE%2FgrSVAt93DRAlv8O8NVz%2FPR6kxIx1IMSOHvrFP54CkoyWj2UIrsfuaapNQGnTXyU1JscQjPhDcBxZN9ILO1Ye8s41iEoo4NXvhNbzh6O4S9YxhDkHfFBJZ%2FL1MrggyEpbvdVYRrOSOK9P4E63s3O%2FF1FNOtuleg8i031W1o3wHruKRkfBHaaMwmYvfxAY6pgGsTUpWmPn79gVl%2FqVJWtn48rYEyxdKCrisgPIG3iq8sSCjyh20XFir0%2BbsKl1NLF0e8fryB72JmP%2BifT2lMH9Nu2PPS%2BefIHh1ro0vBd3uYwsyyp5kQVTmn3tYhmWNuClK2ZdruWdss0%2FT2wThKufk9J98QF1ImJCz9qxn8GLTbbQpX3XQbcItjWrSthixVQI%2BDyIrQyp88KNjw7rLk%2FP0gZcgECuG&X-Amz-Signature=2483630dbab7ec9ab48d74505d8b9d1b3b998385a8645343cb09e1a137e5b120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUJYAQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE67vdgbSXpwVeddW7dtZC9%2BCXcs0jmLH1xP4mffIx0LAiBg9T%2BXBJkEZbapZKhUVYwhYvCQED15EwGu0sZkfufBcSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWSkaXFBLg%2B25%2FbyTKtwDcpShSww7G8vlLjMbOMPCOohoAuZOsG2%2FC7DsKOjVsxkaQ9qhPvrTy6CVMWjGXR%2BcrhBJ0hBu0tbqsB8wVDKVb6jHo4tusTPNi52CvOx6REwPuc%2BkPgSXKdau65QWWbPxRjzeQu3xypiZueENYz5fZBOZ7LIM5UrYkAvM7fA3s3B5iTeNsr9bAFFAclLB5A2A%2Bga%2B5tHDZc9PVl1AoM1WmyyM%2BOcDBOEgVbyyr1v35c91QRInYekCEh4R2p%2FTd18xmV31nsTa7vF7DpHr0V%2BTzPVIsZkU2shdGgHoed1pIEfSW2nkHZ2QuJZ%2FoVLLLnjTM2m%2F%2FoeAjnoLnzu9wpJ7NXR3YGFXslTi5Q52t9OrdpDvn1tQJ6roLMPN9wvnurqQvx9gh1ibprS3ILQV8uabZFqKaxyCkOkrR%2FeklmTz56Ahv7UZ1HkpgYp3w3x8dRIIVA6hdE%2FgrSVAt93DRAlv8O8NVz%2FPR6kxIx1IMSOHvrFP54CkoyWj2UIrsfuaapNQGnTXyU1JscQjPhDcBxZN9ILO1Ye8s41iEoo4NXvhNbzh6O4S9YxhDkHfFBJZ%2FL1MrggyEpbvdVYRrOSOK9P4E63s3O%2FF1FNOtuleg8i031W1o3wHruKRkfBHaaMwmYvfxAY6pgGsTUpWmPn79gVl%2FqVJWtn48rYEyxdKCrisgPIG3iq8sSCjyh20XFir0%2BbsKl1NLF0e8fryB72JmP%2BifT2lMH9Nu2PPS%2BefIHh1ro0vBd3uYwsyyp5kQVTmn3tYhmWNuClK2ZdruWdss0%2FT2wThKufk9J98QF1ImJCz9qxn8GLTbbQpX3XQbcItjWrSthixVQI%2BDyIrQyp88KNjw7rLk%2FP0gZcgECuG&X-Amz-Signature=b219e45114193a5def98034ead6d4a529526c8c17b6bfabac0d9c7ef3377e962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUJYAQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE67vdgbSXpwVeddW7dtZC9%2BCXcs0jmLH1xP4mffIx0LAiBg9T%2BXBJkEZbapZKhUVYwhYvCQED15EwGu0sZkfufBcSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWSkaXFBLg%2B25%2FbyTKtwDcpShSww7G8vlLjMbOMPCOohoAuZOsG2%2FC7DsKOjVsxkaQ9qhPvrTy6CVMWjGXR%2BcrhBJ0hBu0tbqsB8wVDKVb6jHo4tusTPNi52CvOx6REwPuc%2BkPgSXKdau65QWWbPxRjzeQu3xypiZueENYz5fZBOZ7LIM5UrYkAvM7fA3s3B5iTeNsr9bAFFAclLB5A2A%2Bga%2B5tHDZc9PVl1AoM1WmyyM%2BOcDBOEgVbyyr1v35c91QRInYekCEh4R2p%2FTd18xmV31nsTa7vF7DpHr0V%2BTzPVIsZkU2shdGgHoed1pIEfSW2nkHZ2QuJZ%2FoVLLLnjTM2m%2F%2FoeAjnoLnzu9wpJ7NXR3YGFXslTi5Q52t9OrdpDvn1tQJ6roLMPN9wvnurqQvx9gh1ibprS3ILQV8uabZFqKaxyCkOkrR%2FeklmTz56Ahv7UZ1HkpgYp3w3x8dRIIVA6hdE%2FgrSVAt93DRAlv8O8NVz%2FPR6kxIx1IMSOHvrFP54CkoyWj2UIrsfuaapNQGnTXyU1JscQjPhDcBxZN9ILO1Ye8s41iEoo4NXvhNbzh6O4S9YxhDkHfFBJZ%2FL1MrggyEpbvdVYRrOSOK9P4E63s3O%2FF1FNOtuleg8i031W1o3wHruKRkfBHaaMwmYvfxAY6pgGsTUpWmPn79gVl%2FqVJWtn48rYEyxdKCrisgPIG3iq8sSCjyh20XFir0%2BbsKl1NLF0e8fryB72JmP%2BifT2lMH9Nu2PPS%2BefIHh1ro0vBd3uYwsyyp5kQVTmn3tYhmWNuClK2ZdruWdss0%2FT2wThKufk9J98QF1ImJCz9qxn8GLTbbQpX3XQbcItjWrSthixVQI%2BDyIrQyp88KNjw7rLk%2FP0gZcgECuG&X-Amz-Signature=6e4112c4d51dacb6db8f173ba0081a94a49a5b3ab2639188e0d8bb96bc003b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUJYAQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE67vdgbSXpwVeddW7dtZC9%2BCXcs0jmLH1xP4mffIx0LAiBg9T%2BXBJkEZbapZKhUVYwhYvCQED15EwGu0sZkfufBcSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWSkaXFBLg%2B25%2FbyTKtwDcpShSww7G8vlLjMbOMPCOohoAuZOsG2%2FC7DsKOjVsxkaQ9qhPvrTy6CVMWjGXR%2BcrhBJ0hBu0tbqsB8wVDKVb6jHo4tusTPNi52CvOx6REwPuc%2BkPgSXKdau65QWWbPxRjzeQu3xypiZueENYz5fZBOZ7LIM5UrYkAvM7fA3s3B5iTeNsr9bAFFAclLB5A2A%2Bga%2B5tHDZc9PVl1AoM1WmyyM%2BOcDBOEgVbyyr1v35c91QRInYekCEh4R2p%2FTd18xmV31nsTa7vF7DpHr0V%2BTzPVIsZkU2shdGgHoed1pIEfSW2nkHZ2QuJZ%2FoVLLLnjTM2m%2F%2FoeAjnoLnzu9wpJ7NXR3YGFXslTi5Q52t9OrdpDvn1tQJ6roLMPN9wvnurqQvx9gh1ibprS3ILQV8uabZFqKaxyCkOkrR%2FeklmTz56Ahv7UZ1HkpgYp3w3x8dRIIVA6hdE%2FgrSVAt93DRAlv8O8NVz%2FPR6kxIx1IMSOHvrFP54CkoyWj2UIrsfuaapNQGnTXyU1JscQjPhDcBxZN9ILO1Ye8s41iEoo4NXvhNbzh6O4S9YxhDkHfFBJZ%2FL1MrggyEpbvdVYRrOSOK9P4E63s3O%2FF1FNOtuleg8i031W1o3wHruKRkfBHaaMwmYvfxAY6pgGsTUpWmPn79gVl%2FqVJWtn48rYEyxdKCrisgPIG3iq8sSCjyh20XFir0%2BbsKl1NLF0e8fryB72JmP%2BifT2lMH9Nu2PPS%2BefIHh1ro0vBd3uYwsyyp5kQVTmn3tYhmWNuClK2ZdruWdss0%2FT2wThKufk9J98QF1ImJCz9qxn8GLTbbQpX3XQbcItjWrSthixVQI%2BDyIrQyp88KNjw7rLk%2FP0gZcgECuG&X-Amz-Signature=ceaada026adae7e8c81ee20857d114662e8b0c2961aec40d16f5500b5498cd6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUJYAQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE67vdgbSXpwVeddW7dtZC9%2BCXcs0jmLH1xP4mffIx0LAiBg9T%2BXBJkEZbapZKhUVYwhYvCQED15EwGu0sZkfufBcSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWSkaXFBLg%2B25%2FbyTKtwDcpShSww7G8vlLjMbOMPCOohoAuZOsG2%2FC7DsKOjVsxkaQ9qhPvrTy6CVMWjGXR%2BcrhBJ0hBu0tbqsB8wVDKVb6jHo4tusTPNi52CvOx6REwPuc%2BkPgSXKdau65QWWbPxRjzeQu3xypiZueENYz5fZBOZ7LIM5UrYkAvM7fA3s3B5iTeNsr9bAFFAclLB5A2A%2Bga%2B5tHDZc9PVl1AoM1WmyyM%2BOcDBOEgVbyyr1v35c91QRInYekCEh4R2p%2FTd18xmV31nsTa7vF7DpHr0V%2BTzPVIsZkU2shdGgHoed1pIEfSW2nkHZ2QuJZ%2FoVLLLnjTM2m%2F%2FoeAjnoLnzu9wpJ7NXR3YGFXslTi5Q52t9OrdpDvn1tQJ6roLMPN9wvnurqQvx9gh1ibprS3ILQV8uabZFqKaxyCkOkrR%2FeklmTz56Ahv7UZ1HkpgYp3w3x8dRIIVA6hdE%2FgrSVAt93DRAlv8O8NVz%2FPR6kxIx1IMSOHvrFP54CkoyWj2UIrsfuaapNQGnTXyU1JscQjPhDcBxZN9ILO1Ye8s41iEoo4NXvhNbzh6O4S9YxhDkHfFBJZ%2FL1MrggyEpbvdVYRrOSOK9P4E63s3O%2FF1FNOtuleg8i031W1o3wHruKRkfBHaaMwmYvfxAY6pgGsTUpWmPn79gVl%2FqVJWtn48rYEyxdKCrisgPIG3iq8sSCjyh20XFir0%2BbsKl1NLF0e8fryB72JmP%2BifT2lMH9Nu2PPS%2BefIHh1ro0vBd3uYwsyyp5kQVTmn3tYhmWNuClK2ZdruWdss0%2FT2wThKufk9J98QF1ImJCz9qxn8GLTbbQpX3XQbcItjWrSthixVQI%2BDyIrQyp88KNjw7rLk%2FP0gZcgECuG&X-Amz-Signature=22019c4c09020ef96f6d98abccc8294e74561f83268535dd203169d689c5ded5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUJYAQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE67vdgbSXpwVeddW7dtZC9%2BCXcs0jmLH1xP4mffIx0LAiBg9T%2BXBJkEZbapZKhUVYwhYvCQED15EwGu0sZkfufBcSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWSkaXFBLg%2B25%2FbyTKtwDcpShSww7G8vlLjMbOMPCOohoAuZOsG2%2FC7DsKOjVsxkaQ9qhPvrTy6CVMWjGXR%2BcrhBJ0hBu0tbqsB8wVDKVb6jHo4tusTPNi52CvOx6REwPuc%2BkPgSXKdau65QWWbPxRjzeQu3xypiZueENYz5fZBOZ7LIM5UrYkAvM7fA3s3B5iTeNsr9bAFFAclLB5A2A%2Bga%2B5tHDZc9PVl1AoM1WmyyM%2BOcDBOEgVbyyr1v35c91QRInYekCEh4R2p%2FTd18xmV31nsTa7vF7DpHr0V%2BTzPVIsZkU2shdGgHoed1pIEfSW2nkHZ2QuJZ%2FoVLLLnjTM2m%2F%2FoeAjnoLnzu9wpJ7NXR3YGFXslTi5Q52t9OrdpDvn1tQJ6roLMPN9wvnurqQvx9gh1ibprS3ILQV8uabZFqKaxyCkOkrR%2FeklmTz56Ahv7UZ1HkpgYp3w3x8dRIIVA6hdE%2FgrSVAt93DRAlv8O8NVz%2FPR6kxIx1IMSOHvrFP54CkoyWj2UIrsfuaapNQGnTXyU1JscQjPhDcBxZN9ILO1Ye8s41iEoo4NXvhNbzh6O4S9YxhDkHfFBJZ%2FL1MrggyEpbvdVYRrOSOK9P4E63s3O%2FF1FNOtuleg8i031W1o3wHruKRkfBHaaMwmYvfxAY6pgGsTUpWmPn79gVl%2FqVJWtn48rYEyxdKCrisgPIG3iq8sSCjyh20XFir0%2BbsKl1NLF0e8fryB72JmP%2BifT2lMH9Nu2PPS%2BefIHh1ro0vBd3uYwsyyp5kQVTmn3tYhmWNuClK2ZdruWdss0%2FT2wThKufk9J98QF1ImJCz9qxn8GLTbbQpX3XQbcItjWrSthixVQI%2BDyIrQyp88KNjw7rLk%2FP0gZcgECuG&X-Amz-Signature=d3fdebb3a90f4148d484b3d1ef8d8d35319b6f60e269b51b00c4ff5d55a4989d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUJYAQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE67vdgbSXpwVeddW7dtZC9%2BCXcs0jmLH1xP4mffIx0LAiBg9T%2BXBJkEZbapZKhUVYwhYvCQED15EwGu0sZkfufBcSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWSkaXFBLg%2B25%2FbyTKtwDcpShSww7G8vlLjMbOMPCOohoAuZOsG2%2FC7DsKOjVsxkaQ9qhPvrTy6CVMWjGXR%2BcrhBJ0hBu0tbqsB8wVDKVb6jHo4tusTPNi52CvOx6REwPuc%2BkPgSXKdau65QWWbPxRjzeQu3xypiZueENYz5fZBOZ7LIM5UrYkAvM7fA3s3B5iTeNsr9bAFFAclLB5A2A%2Bga%2B5tHDZc9PVl1AoM1WmyyM%2BOcDBOEgVbyyr1v35c91QRInYekCEh4R2p%2FTd18xmV31nsTa7vF7DpHr0V%2BTzPVIsZkU2shdGgHoed1pIEfSW2nkHZ2QuJZ%2FoVLLLnjTM2m%2F%2FoeAjnoLnzu9wpJ7NXR3YGFXslTi5Q52t9OrdpDvn1tQJ6roLMPN9wvnurqQvx9gh1ibprS3ILQV8uabZFqKaxyCkOkrR%2FeklmTz56Ahv7UZ1HkpgYp3w3x8dRIIVA6hdE%2FgrSVAt93DRAlv8O8NVz%2FPR6kxIx1IMSOHvrFP54CkoyWj2UIrsfuaapNQGnTXyU1JscQjPhDcBxZN9ILO1Ye8s41iEoo4NXvhNbzh6O4S9YxhDkHfFBJZ%2FL1MrggyEpbvdVYRrOSOK9P4E63s3O%2FF1FNOtuleg8i031W1o3wHruKRkfBHaaMwmYvfxAY6pgGsTUpWmPn79gVl%2FqVJWtn48rYEyxdKCrisgPIG3iq8sSCjyh20XFir0%2BbsKl1NLF0e8fryB72JmP%2BifT2lMH9Nu2PPS%2BefIHh1ro0vBd3uYwsyyp5kQVTmn3tYhmWNuClK2ZdruWdss0%2FT2wThKufk9J98QF1ImJCz9qxn8GLTbbQpX3XQbcItjWrSthixVQI%2BDyIrQyp88KNjw7rLk%2FP0gZcgECuG&X-Amz-Signature=41f1311cad965fea6fb3567ca0022e3e5535bf8bf8b7dd636c801eb98e164ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUJYAQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE67vdgbSXpwVeddW7dtZC9%2BCXcs0jmLH1xP4mffIx0LAiBg9T%2BXBJkEZbapZKhUVYwhYvCQED15EwGu0sZkfufBcSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWSkaXFBLg%2B25%2FbyTKtwDcpShSww7G8vlLjMbOMPCOohoAuZOsG2%2FC7DsKOjVsxkaQ9qhPvrTy6CVMWjGXR%2BcrhBJ0hBu0tbqsB8wVDKVb6jHo4tusTPNi52CvOx6REwPuc%2BkPgSXKdau65QWWbPxRjzeQu3xypiZueENYz5fZBOZ7LIM5UrYkAvM7fA3s3B5iTeNsr9bAFFAclLB5A2A%2Bga%2B5tHDZc9PVl1AoM1WmyyM%2BOcDBOEgVbyyr1v35c91QRInYekCEh4R2p%2FTd18xmV31nsTa7vF7DpHr0V%2BTzPVIsZkU2shdGgHoed1pIEfSW2nkHZ2QuJZ%2FoVLLLnjTM2m%2F%2FoeAjnoLnzu9wpJ7NXR3YGFXslTi5Q52t9OrdpDvn1tQJ6roLMPN9wvnurqQvx9gh1ibprS3ILQV8uabZFqKaxyCkOkrR%2FeklmTz56Ahv7UZ1HkpgYp3w3x8dRIIVA6hdE%2FgrSVAt93DRAlv8O8NVz%2FPR6kxIx1IMSOHvrFP54CkoyWj2UIrsfuaapNQGnTXyU1JscQjPhDcBxZN9ILO1Ye8s41iEoo4NXvhNbzh6O4S9YxhDkHfFBJZ%2FL1MrggyEpbvdVYRrOSOK9P4E63s3O%2FF1FNOtuleg8i031W1o3wHruKRkfBHaaMwmYvfxAY6pgGsTUpWmPn79gVl%2FqVJWtn48rYEyxdKCrisgPIG3iq8sSCjyh20XFir0%2BbsKl1NLF0e8fryB72JmP%2BifT2lMH9Nu2PPS%2BefIHh1ro0vBd3uYwsyyp5kQVTmn3tYhmWNuClK2ZdruWdss0%2FT2wThKufk9J98QF1ImJCz9qxn8GLTbbQpX3XQbcItjWrSthixVQI%2BDyIrQyp88KNjw7rLk%2FP0gZcgECuG&X-Amz-Signature=02ff0c55a2050529a23bd550c00caaa46f685e285cef384ef50e692d1faad9ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUJYAQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE67vdgbSXpwVeddW7dtZC9%2BCXcs0jmLH1xP4mffIx0LAiBg9T%2BXBJkEZbapZKhUVYwhYvCQED15EwGu0sZkfufBcSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWSkaXFBLg%2B25%2FbyTKtwDcpShSww7G8vlLjMbOMPCOohoAuZOsG2%2FC7DsKOjVsxkaQ9qhPvrTy6CVMWjGXR%2BcrhBJ0hBu0tbqsB8wVDKVb6jHo4tusTPNi52CvOx6REwPuc%2BkPgSXKdau65QWWbPxRjzeQu3xypiZueENYz5fZBOZ7LIM5UrYkAvM7fA3s3B5iTeNsr9bAFFAclLB5A2A%2Bga%2B5tHDZc9PVl1AoM1WmyyM%2BOcDBOEgVbyyr1v35c91QRInYekCEh4R2p%2FTd18xmV31nsTa7vF7DpHr0V%2BTzPVIsZkU2shdGgHoed1pIEfSW2nkHZ2QuJZ%2FoVLLLnjTM2m%2F%2FoeAjnoLnzu9wpJ7NXR3YGFXslTi5Q52t9OrdpDvn1tQJ6roLMPN9wvnurqQvx9gh1ibprS3ILQV8uabZFqKaxyCkOkrR%2FeklmTz56Ahv7UZ1HkpgYp3w3x8dRIIVA6hdE%2FgrSVAt93DRAlv8O8NVz%2FPR6kxIx1IMSOHvrFP54CkoyWj2UIrsfuaapNQGnTXyU1JscQjPhDcBxZN9ILO1Ye8s41iEoo4NXvhNbzh6O4S9YxhDkHfFBJZ%2FL1MrggyEpbvdVYRrOSOK9P4E63s3O%2FF1FNOtuleg8i031W1o3wHruKRkfBHaaMwmYvfxAY6pgGsTUpWmPn79gVl%2FqVJWtn48rYEyxdKCrisgPIG3iq8sSCjyh20XFir0%2BbsKl1NLF0e8fryB72JmP%2BifT2lMH9Nu2PPS%2BefIHh1ro0vBd3uYwsyyp5kQVTmn3tYhmWNuClK2ZdruWdss0%2FT2wThKufk9J98QF1ImJCz9qxn8GLTbbQpX3XQbcItjWrSthixVQI%2BDyIrQyp88KNjw7rLk%2FP0gZcgECuG&X-Amz-Signature=cca758819cda15fcce4c9c809c91ffcf3fca2a2b9e1d31f81382af4d2ab84489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUJYAQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE67vdgbSXpwVeddW7dtZC9%2BCXcs0jmLH1xP4mffIx0LAiBg9T%2BXBJkEZbapZKhUVYwhYvCQED15EwGu0sZkfufBcSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWSkaXFBLg%2B25%2FbyTKtwDcpShSww7G8vlLjMbOMPCOohoAuZOsG2%2FC7DsKOjVsxkaQ9qhPvrTy6CVMWjGXR%2BcrhBJ0hBu0tbqsB8wVDKVb6jHo4tusTPNi52CvOx6REwPuc%2BkPgSXKdau65QWWbPxRjzeQu3xypiZueENYz5fZBOZ7LIM5UrYkAvM7fA3s3B5iTeNsr9bAFFAclLB5A2A%2Bga%2B5tHDZc9PVl1AoM1WmyyM%2BOcDBOEgVbyyr1v35c91QRInYekCEh4R2p%2FTd18xmV31nsTa7vF7DpHr0V%2BTzPVIsZkU2shdGgHoed1pIEfSW2nkHZ2QuJZ%2FoVLLLnjTM2m%2F%2FoeAjnoLnzu9wpJ7NXR3YGFXslTi5Q52t9OrdpDvn1tQJ6roLMPN9wvnurqQvx9gh1ibprS3ILQV8uabZFqKaxyCkOkrR%2FeklmTz56Ahv7UZ1HkpgYp3w3x8dRIIVA6hdE%2FgrSVAt93DRAlv8O8NVz%2FPR6kxIx1IMSOHvrFP54CkoyWj2UIrsfuaapNQGnTXyU1JscQjPhDcBxZN9ILO1Ye8s41iEoo4NXvhNbzh6O4S9YxhDkHfFBJZ%2FL1MrggyEpbvdVYRrOSOK9P4E63s3O%2FF1FNOtuleg8i031W1o3wHruKRkfBHaaMwmYvfxAY6pgGsTUpWmPn79gVl%2FqVJWtn48rYEyxdKCrisgPIG3iq8sSCjyh20XFir0%2BbsKl1NLF0e8fryB72JmP%2BifT2lMH9Nu2PPS%2BefIHh1ro0vBd3uYwsyyp5kQVTmn3tYhmWNuClK2ZdruWdss0%2FT2wThKufk9J98QF1ImJCz9qxn8GLTbbQpX3XQbcItjWrSthixVQI%2BDyIrQyp88KNjw7rLk%2FP0gZcgECuG&X-Amz-Signature=8c7f9153821d6da1780af9d4fad58086ecaba045c5c7d84a1f339aeb797831ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
