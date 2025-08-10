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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGFXQIE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrnreS6MbTVqt%2FW5oy0Dv9WK23fWEb79LwOQjG0AI2wAiAbV%2FzK3r5Nw12soaK3a%2FKjzsgwsnYT5eV%2BDJdC%2F9jRSiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt0rdoCP8SOg57aZAKtwDQ%2B2tjStesxfeAlw0jPjgm7wHjThQdNKffVLbuEM2PZDnPmSdGIvRth30ZgXCti2ujP4nvn4KzUNQqkgeoix1ozWRJnErcu%2F2yK%2BDyqcJnMbPzLqUXrMwmWMNsLcIm1PzVnMLCyyi4GNeB%2FIjhnuPM7er%2BzIlvwLEtmxdInDxETMI8uJCsazKPPWlevXISlV%2FVaf0DxKzz07A0PbGZhiE%2FVusU79m1JXdxHFlbOM1OzQGQXebBjSBUTzZVlGf48VKJx2L3NRB6K80NpwpemGJAv29731lrbw2aBowdGQdem7xHa1hW56BYDNFGUAtfMaFEbT9n746dOvFKZw7PyAqc0XM4PHBvHcYX%2BKyRor3zTrLrVPOubBJnTYiH60ppymoay0Ry6m8KHQrrryXe8NsKXHg1V2gSVU%2BaY04I1qyyZMyINOVeQXrVhxTTyCuM7l6I1tgbJWPnc3EMM7h0Z%2BmrYDUNpuoOimrs84kOTmyceKyKI%2FQ29cyILyEtFcR2hKm2zzQPQCbf2mc7sHuRyL5umOINNRKxYYDUr1Qlvl25ptNYFs3lbkUrqJevK0Tww62cdxmf%2F7Vifb5y0aJXbHQUGsHGkp95EcvNlO8Jrx6Z6%2Ff1mjUD50HBAuEyQAw277ixAY6pgHCcGXozaL6yhmaQ7DQm%2By5BVuHbQflJLjVPuAW3G9EKtwXUUDCIsIjto5wS86QsPhlOgmsawpXH5IxRHCuYbqZJz65pbaZOjCvbtIZa1sFGCu4WZRj6QLjFZB4ZNFFtQbLayYyK19Tc1ac%2BsmODWWPKPz1CzXcjXZR2KGQPPKni%2BmujI%2FbmKd%2B79afnCeBMVGcOfHXig3qlwN4maT2KZxHNaSsDfEL&X-Amz-Signature=96a10fb069860fb2e96383adfdbf53b34e2e550aee6a4694a5a5880420f74a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGFXQIE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrnreS6MbTVqt%2FW5oy0Dv9WK23fWEb79LwOQjG0AI2wAiAbV%2FzK3r5Nw12soaK3a%2FKjzsgwsnYT5eV%2BDJdC%2F9jRSiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt0rdoCP8SOg57aZAKtwDQ%2B2tjStesxfeAlw0jPjgm7wHjThQdNKffVLbuEM2PZDnPmSdGIvRth30ZgXCti2ujP4nvn4KzUNQqkgeoix1ozWRJnErcu%2F2yK%2BDyqcJnMbPzLqUXrMwmWMNsLcIm1PzVnMLCyyi4GNeB%2FIjhnuPM7er%2BzIlvwLEtmxdInDxETMI8uJCsazKPPWlevXISlV%2FVaf0DxKzz07A0PbGZhiE%2FVusU79m1JXdxHFlbOM1OzQGQXebBjSBUTzZVlGf48VKJx2L3NRB6K80NpwpemGJAv29731lrbw2aBowdGQdem7xHa1hW56BYDNFGUAtfMaFEbT9n746dOvFKZw7PyAqc0XM4PHBvHcYX%2BKyRor3zTrLrVPOubBJnTYiH60ppymoay0Ry6m8KHQrrryXe8NsKXHg1V2gSVU%2BaY04I1qyyZMyINOVeQXrVhxTTyCuM7l6I1tgbJWPnc3EMM7h0Z%2BmrYDUNpuoOimrs84kOTmyceKyKI%2FQ29cyILyEtFcR2hKm2zzQPQCbf2mc7sHuRyL5umOINNRKxYYDUr1Qlvl25ptNYFs3lbkUrqJevK0Tww62cdxmf%2F7Vifb5y0aJXbHQUGsHGkp95EcvNlO8Jrx6Z6%2Ff1mjUD50HBAuEyQAw277ixAY6pgHCcGXozaL6yhmaQ7DQm%2By5BVuHbQflJLjVPuAW3G9EKtwXUUDCIsIjto5wS86QsPhlOgmsawpXH5IxRHCuYbqZJz65pbaZOjCvbtIZa1sFGCu4WZRj6QLjFZB4ZNFFtQbLayYyK19Tc1ac%2BsmODWWPKPz1CzXcjXZR2KGQPPKni%2BmujI%2FbmKd%2B79afnCeBMVGcOfHXig3qlwN4maT2KZxHNaSsDfEL&X-Amz-Signature=ef4cb8ae14da94cb7cff41efb74cd08a2813bf091d21c5bb73926ba67e1d98b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGFXQIE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrnreS6MbTVqt%2FW5oy0Dv9WK23fWEb79LwOQjG0AI2wAiAbV%2FzK3r5Nw12soaK3a%2FKjzsgwsnYT5eV%2BDJdC%2F9jRSiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt0rdoCP8SOg57aZAKtwDQ%2B2tjStesxfeAlw0jPjgm7wHjThQdNKffVLbuEM2PZDnPmSdGIvRth30ZgXCti2ujP4nvn4KzUNQqkgeoix1ozWRJnErcu%2F2yK%2BDyqcJnMbPzLqUXrMwmWMNsLcIm1PzVnMLCyyi4GNeB%2FIjhnuPM7er%2BzIlvwLEtmxdInDxETMI8uJCsazKPPWlevXISlV%2FVaf0DxKzz07A0PbGZhiE%2FVusU79m1JXdxHFlbOM1OzQGQXebBjSBUTzZVlGf48VKJx2L3NRB6K80NpwpemGJAv29731lrbw2aBowdGQdem7xHa1hW56BYDNFGUAtfMaFEbT9n746dOvFKZw7PyAqc0XM4PHBvHcYX%2BKyRor3zTrLrVPOubBJnTYiH60ppymoay0Ry6m8KHQrrryXe8NsKXHg1V2gSVU%2BaY04I1qyyZMyINOVeQXrVhxTTyCuM7l6I1tgbJWPnc3EMM7h0Z%2BmrYDUNpuoOimrs84kOTmyceKyKI%2FQ29cyILyEtFcR2hKm2zzQPQCbf2mc7sHuRyL5umOINNRKxYYDUr1Qlvl25ptNYFs3lbkUrqJevK0Tww62cdxmf%2F7Vifb5y0aJXbHQUGsHGkp95EcvNlO8Jrx6Z6%2Ff1mjUD50HBAuEyQAw277ixAY6pgHCcGXozaL6yhmaQ7DQm%2By5BVuHbQflJLjVPuAW3G9EKtwXUUDCIsIjto5wS86QsPhlOgmsawpXH5IxRHCuYbqZJz65pbaZOjCvbtIZa1sFGCu4WZRj6QLjFZB4ZNFFtQbLayYyK19Tc1ac%2BsmODWWPKPz1CzXcjXZR2KGQPPKni%2BmujI%2FbmKd%2B79afnCeBMVGcOfHXig3qlwN4maT2KZxHNaSsDfEL&X-Amz-Signature=13a4db95799c7f9691324c5d76908d7c68469be6e10bb1bdd7be8a9186c3ab67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGFXQIE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrnreS6MbTVqt%2FW5oy0Dv9WK23fWEb79LwOQjG0AI2wAiAbV%2FzK3r5Nw12soaK3a%2FKjzsgwsnYT5eV%2BDJdC%2F9jRSiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt0rdoCP8SOg57aZAKtwDQ%2B2tjStesxfeAlw0jPjgm7wHjThQdNKffVLbuEM2PZDnPmSdGIvRth30ZgXCti2ujP4nvn4KzUNQqkgeoix1ozWRJnErcu%2F2yK%2BDyqcJnMbPzLqUXrMwmWMNsLcIm1PzVnMLCyyi4GNeB%2FIjhnuPM7er%2BzIlvwLEtmxdInDxETMI8uJCsazKPPWlevXISlV%2FVaf0DxKzz07A0PbGZhiE%2FVusU79m1JXdxHFlbOM1OzQGQXebBjSBUTzZVlGf48VKJx2L3NRB6K80NpwpemGJAv29731lrbw2aBowdGQdem7xHa1hW56BYDNFGUAtfMaFEbT9n746dOvFKZw7PyAqc0XM4PHBvHcYX%2BKyRor3zTrLrVPOubBJnTYiH60ppymoay0Ry6m8KHQrrryXe8NsKXHg1V2gSVU%2BaY04I1qyyZMyINOVeQXrVhxTTyCuM7l6I1tgbJWPnc3EMM7h0Z%2BmrYDUNpuoOimrs84kOTmyceKyKI%2FQ29cyILyEtFcR2hKm2zzQPQCbf2mc7sHuRyL5umOINNRKxYYDUr1Qlvl25ptNYFs3lbkUrqJevK0Tww62cdxmf%2F7Vifb5y0aJXbHQUGsHGkp95EcvNlO8Jrx6Z6%2Ff1mjUD50HBAuEyQAw277ixAY6pgHCcGXozaL6yhmaQ7DQm%2By5BVuHbQflJLjVPuAW3G9EKtwXUUDCIsIjto5wS86QsPhlOgmsawpXH5IxRHCuYbqZJz65pbaZOjCvbtIZa1sFGCu4WZRj6QLjFZB4ZNFFtQbLayYyK19Tc1ac%2BsmODWWPKPz1CzXcjXZR2KGQPPKni%2BmujI%2FbmKd%2B79afnCeBMVGcOfHXig3qlwN4maT2KZxHNaSsDfEL&X-Amz-Signature=aa82b196218b1bc968311c7382cece8eb12d81140216cc7a284af8242aef41f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGFXQIE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrnreS6MbTVqt%2FW5oy0Dv9WK23fWEb79LwOQjG0AI2wAiAbV%2FzK3r5Nw12soaK3a%2FKjzsgwsnYT5eV%2BDJdC%2F9jRSiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt0rdoCP8SOg57aZAKtwDQ%2B2tjStesxfeAlw0jPjgm7wHjThQdNKffVLbuEM2PZDnPmSdGIvRth30ZgXCti2ujP4nvn4KzUNQqkgeoix1ozWRJnErcu%2F2yK%2BDyqcJnMbPzLqUXrMwmWMNsLcIm1PzVnMLCyyi4GNeB%2FIjhnuPM7er%2BzIlvwLEtmxdInDxETMI8uJCsazKPPWlevXISlV%2FVaf0DxKzz07A0PbGZhiE%2FVusU79m1JXdxHFlbOM1OzQGQXebBjSBUTzZVlGf48VKJx2L3NRB6K80NpwpemGJAv29731lrbw2aBowdGQdem7xHa1hW56BYDNFGUAtfMaFEbT9n746dOvFKZw7PyAqc0XM4PHBvHcYX%2BKyRor3zTrLrVPOubBJnTYiH60ppymoay0Ry6m8KHQrrryXe8NsKXHg1V2gSVU%2BaY04I1qyyZMyINOVeQXrVhxTTyCuM7l6I1tgbJWPnc3EMM7h0Z%2BmrYDUNpuoOimrs84kOTmyceKyKI%2FQ29cyILyEtFcR2hKm2zzQPQCbf2mc7sHuRyL5umOINNRKxYYDUr1Qlvl25ptNYFs3lbkUrqJevK0Tww62cdxmf%2F7Vifb5y0aJXbHQUGsHGkp95EcvNlO8Jrx6Z6%2Ff1mjUD50HBAuEyQAw277ixAY6pgHCcGXozaL6yhmaQ7DQm%2By5BVuHbQflJLjVPuAW3G9EKtwXUUDCIsIjto5wS86QsPhlOgmsawpXH5IxRHCuYbqZJz65pbaZOjCvbtIZa1sFGCu4WZRj6QLjFZB4ZNFFtQbLayYyK19Tc1ac%2BsmODWWPKPz1CzXcjXZR2KGQPPKni%2BmujI%2FbmKd%2B79afnCeBMVGcOfHXig3qlwN4maT2KZxHNaSsDfEL&X-Amz-Signature=6f2936fb23a67f84a10bec1d3fd9447c151665517f5ce605385198cc6db30019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGFXQIE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrnreS6MbTVqt%2FW5oy0Dv9WK23fWEb79LwOQjG0AI2wAiAbV%2FzK3r5Nw12soaK3a%2FKjzsgwsnYT5eV%2BDJdC%2F9jRSiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt0rdoCP8SOg57aZAKtwDQ%2B2tjStesxfeAlw0jPjgm7wHjThQdNKffVLbuEM2PZDnPmSdGIvRth30ZgXCti2ujP4nvn4KzUNQqkgeoix1ozWRJnErcu%2F2yK%2BDyqcJnMbPzLqUXrMwmWMNsLcIm1PzVnMLCyyi4GNeB%2FIjhnuPM7er%2BzIlvwLEtmxdInDxETMI8uJCsazKPPWlevXISlV%2FVaf0DxKzz07A0PbGZhiE%2FVusU79m1JXdxHFlbOM1OzQGQXebBjSBUTzZVlGf48VKJx2L3NRB6K80NpwpemGJAv29731lrbw2aBowdGQdem7xHa1hW56BYDNFGUAtfMaFEbT9n746dOvFKZw7PyAqc0XM4PHBvHcYX%2BKyRor3zTrLrVPOubBJnTYiH60ppymoay0Ry6m8KHQrrryXe8NsKXHg1V2gSVU%2BaY04I1qyyZMyINOVeQXrVhxTTyCuM7l6I1tgbJWPnc3EMM7h0Z%2BmrYDUNpuoOimrs84kOTmyceKyKI%2FQ29cyILyEtFcR2hKm2zzQPQCbf2mc7sHuRyL5umOINNRKxYYDUr1Qlvl25ptNYFs3lbkUrqJevK0Tww62cdxmf%2F7Vifb5y0aJXbHQUGsHGkp95EcvNlO8Jrx6Z6%2Ff1mjUD50HBAuEyQAw277ixAY6pgHCcGXozaL6yhmaQ7DQm%2By5BVuHbQflJLjVPuAW3G9EKtwXUUDCIsIjto5wS86QsPhlOgmsawpXH5IxRHCuYbqZJz65pbaZOjCvbtIZa1sFGCu4WZRj6QLjFZB4ZNFFtQbLayYyK19Tc1ac%2BsmODWWPKPz1CzXcjXZR2KGQPPKni%2BmujI%2FbmKd%2B79afnCeBMVGcOfHXig3qlwN4maT2KZxHNaSsDfEL&X-Amz-Signature=be84127fd21dca6ea8fcb45e812fdc60d54500e33e379dac47c14b4064a4b87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGFXQIE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrnreS6MbTVqt%2FW5oy0Dv9WK23fWEb79LwOQjG0AI2wAiAbV%2FzK3r5Nw12soaK3a%2FKjzsgwsnYT5eV%2BDJdC%2F9jRSiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt0rdoCP8SOg57aZAKtwDQ%2B2tjStesxfeAlw0jPjgm7wHjThQdNKffVLbuEM2PZDnPmSdGIvRth30ZgXCti2ujP4nvn4KzUNQqkgeoix1ozWRJnErcu%2F2yK%2BDyqcJnMbPzLqUXrMwmWMNsLcIm1PzVnMLCyyi4GNeB%2FIjhnuPM7er%2BzIlvwLEtmxdInDxETMI8uJCsazKPPWlevXISlV%2FVaf0DxKzz07A0PbGZhiE%2FVusU79m1JXdxHFlbOM1OzQGQXebBjSBUTzZVlGf48VKJx2L3NRB6K80NpwpemGJAv29731lrbw2aBowdGQdem7xHa1hW56BYDNFGUAtfMaFEbT9n746dOvFKZw7PyAqc0XM4PHBvHcYX%2BKyRor3zTrLrVPOubBJnTYiH60ppymoay0Ry6m8KHQrrryXe8NsKXHg1V2gSVU%2BaY04I1qyyZMyINOVeQXrVhxTTyCuM7l6I1tgbJWPnc3EMM7h0Z%2BmrYDUNpuoOimrs84kOTmyceKyKI%2FQ29cyILyEtFcR2hKm2zzQPQCbf2mc7sHuRyL5umOINNRKxYYDUr1Qlvl25ptNYFs3lbkUrqJevK0Tww62cdxmf%2F7Vifb5y0aJXbHQUGsHGkp95EcvNlO8Jrx6Z6%2Ff1mjUD50HBAuEyQAw277ixAY6pgHCcGXozaL6yhmaQ7DQm%2By5BVuHbQflJLjVPuAW3G9EKtwXUUDCIsIjto5wS86QsPhlOgmsawpXH5IxRHCuYbqZJz65pbaZOjCvbtIZa1sFGCu4WZRj6QLjFZB4ZNFFtQbLayYyK19Tc1ac%2BsmODWWPKPz1CzXcjXZR2KGQPPKni%2BmujI%2FbmKd%2B79afnCeBMVGcOfHXig3qlwN4maT2KZxHNaSsDfEL&X-Amz-Signature=a18f8f79123b984fcb6007967901807b04c215c7b223f6f87cc0988fb60df0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGFXQIE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrnreS6MbTVqt%2FW5oy0Dv9WK23fWEb79LwOQjG0AI2wAiAbV%2FzK3r5Nw12soaK3a%2FKjzsgwsnYT5eV%2BDJdC%2F9jRSiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt0rdoCP8SOg57aZAKtwDQ%2B2tjStesxfeAlw0jPjgm7wHjThQdNKffVLbuEM2PZDnPmSdGIvRth30ZgXCti2ujP4nvn4KzUNQqkgeoix1ozWRJnErcu%2F2yK%2BDyqcJnMbPzLqUXrMwmWMNsLcIm1PzVnMLCyyi4GNeB%2FIjhnuPM7er%2BzIlvwLEtmxdInDxETMI8uJCsazKPPWlevXISlV%2FVaf0DxKzz07A0PbGZhiE%2FVusU79m1JXdxHFlbOM1OzQGQXebBjSBUTzZVlGf48VKJx2L3NRB6K80NpwpemGJAv29731lrbw2aBowdGQdem7xHa1hW56BYDNFGUAtfMaFEbT9n746dOvFKZw7PyAqc0XM4PHBvHcYX%2BKyRor3zTrLrVPOubBJnTYiH60ppymoay0Ry6m8KHQrrryXe8NsKXHg1V2gSVU%2BaY04I1qyyZMyINOVeQXrVhxTTyCuM7l6I1tgbJWPnc3EMM7h0Z%2BmrYDUNpuoOimrs84kOTmyceKyKI%2FQ29cyILyEtFcR2hKm2zzQPQCbf2mc7sHuRyL5umOINNRKxYYDUr1Qlvl25ptNYFs3lbkUrqJevK0Tww62cdxmf%2F7Vifb5y0aJXbHQUGsHGkp95EcvNlO8Jrx6Z6%2Ff1mjUD50HBAuEyQAw277ixAY6pgHCcGXozaL6yhmaQ7DQm%2By5BVuHbQflJLjVPuAW3G9EKtwXUUDCIsIjto5wS86QsPhlOgmsawpXH5IxRHCuYbqZJz65pbaZOjCvbtIZa1sFGCu4WZRj6QLjFZB4ZNFFtQbLayYyK19Tc1ac%2BsmODWWPKPz1CzXcjXZR2KGQPPKni%2BmujI%2FbmKd%2B79afnCeBMVGcOfHXig3qlwN4maT2KZxHNaSsDfEL&X-Amz-Signature=da288304aee90209a910e2cefa3d61151f3c0e80838eb1b81a56c49382a36f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGFXQIE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrnreS6MbTVqt%2FW5oy0Dv9WK23fWEb79LwOQjG0AI2wAiAbV%2FzK3r5Nw12soaK3a%2FKjzsgwsnYT5eV%2BDJdC%2F9jRSiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt0rdoCP8SOg57aZAKtwDQ%2B2tjStesxfeAlw0jPjgm7wHjThQdNKffVLbuEM2PZDnPmSdGIvRth30ZgXCti2ujP4nvn4KzUNQqkgeoix1ozWRJnErcu%2F2yK%2BDyqcJnMbPzLqUXrMwmWMNsLcIm1PzVnMLCyyi4GNeB%2FIjhnuPM7er%2BzIlvwLEtmxdInDxETMI8uJCsazKPPWlevXISlV%2FVaf0DxKzz07A0PbGZhiE%2FVusU79m1JXdxHFlbOM1OzQGQXebBjSBUTzZVlGf48VKJx2L3NRB6K80NpwpemGJAv29731lrbw2aBowdGQdem7xHa1hW56BYDNFGUAtfMaFEbT9n746dOvFKZw7PyAqc0XM4PHBvHcYX%2BKyRor3zTrLrVPOubBJnTYiH60ppymoay0Ry6m8KHQrrryXe8NsKXHg1V2gSVU%2BaY04I1qyyZMyINOVeQXrVhxTTyCuM7l6I1tgbJWPnc3EMM7h0Z%2BmrYDUNpuoOimrs84kOTmyceKyKI%2FQ29cyILyEtFcR2hKm2zzQPQCbf2mc7sHuRyL5umOINNRKxYYDUr1Qlvl25ptNYFs3lbkUrqJevK0Tww62cdxmf%2F7Vifb5y0aJXbHQUGsHGkp95EcvNlO8Jrx6Z6%2Ff1mjUD50HBAuEyQAw277ixAY6pgHCcGXozaL6yhmaQ7DQm%2By5BVuHbQflJLjVPuAW3G9EKtwXUUDCIsIjto5wS86QsPhlOgmsawpXH5IxRHCuYbqZJz65pbaZOjCvbtIZa1sFGCu4WZRj6QLjFZB4ZNFFtQbLayYyK19Tc1ac%2BsmODWWPKPz1CzXcjXZR2KGQPPKni%2BmujI%2FbmKd%2B79afnCeBMVGcOfHXig3qlwN4maT2KZxHNaSsDfEL&X-Amz-Signature=6f574aa49619e459f66f269f78362921d63e4b2206816713b4ebc06491bdf480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGFXQIE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrnreS6MbTVqt%2FW5oy0Dv9WK23fWEb79LwOQjG0AI2wAiAbV%2FzK3r5Nw12soaK3a%2FKjzsgwsnYT5eV%2BDJdC%2F9jRSiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt0rdoCP8SOg57aZAKtwDQ%2B2tjStesxfeAlw0jPjgm7wHjThQdNKffVLbuEM2PZDnPmSdGIvRth30ZgXCti2ujP4nvn4KzUNQqkgeoix1ozWRJnErcu%2F2yK%2BDyqcJnMbPzLqUXrMwmWMNsLcIm1PzVnMLCyyi4GNeB%2FIjhnuPM7er%2BzIlvwLEtmxdInDxETMI8uJCsazKPPWlevXISlV%2FVaf0DxKzz07A0PbGZhiE%2FVusU79m1JXdxHFlbOM1OzQGQXebBjSBUTzZVlGf48VKJx2L3NRB6K80NpwpemGJAv29731lrbw2aBowdGQdem7xHa1hW56BYDNFGUAtfMaFEbT9n746dOvFKZw7PyAqc0XM4PHBvHcYX%2BKyRor3zTrLrVPOubBJnTYiH60ppymoay0Ry6m8KHQrrryXe8NsKXHg1V2gSVU%2BaY04I1qyyZMyINOVeQXrVhxTTyCuM7l6I1tgbJWPnc3EMM7h0Z%2BmrYDUNpuoOimrs84kOTmyceKyKI%2FQ29cyILyEtFcR2hKm2zzQPQCbf2mc7sHuRyL5umOINNRKxYYDUr1Qlvl25ptNYFs3lbkUrqJevK0Tww62cdxmf%2F7Vifb5y0aJXbHQUGsHGkp95EcvNlO8Jrx6Z6%2Ff1mjUD50HBAuEyQAw277ixAY6pgHCcGXozaL6yhmaQ7DQm%2By5BVuHbQflJLjVPuAW3G9EKtwXUUDCIsIjto5wS86QsPhlOgmsawpXH5IxRHCuYbqZJz65pbaZOjCvbtIZa1sFGCu4WZRj6QLjFZB4ZNFFtQbLayYyK19Tc1ac%2BsmODWWPKPz1CzXcjXZR2KGQPPKni%2BmujI%2FbmKd%2B79afnCeBMVGcOfHXig3qlwN4maT2KZxHNaSsDfEL&X-Amz-Signature=11680f7788483e9d453a5dd1251b31a92035ecf7db5a65258f0719db66ec38cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGFXQIE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrnreS6MbTVqt%2FW5oy0Dv9WK23fWEb79LwOQjG0AI2wAiAbV%2FzK3r5Nw12soaK3a%2FKjzsgwsnYT5eV%2BDJdC%2F9jRSiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt0rdoCP8SOg57aZAKtwDQ%2B2tjStesxfeAlw0jPjgm7wHjThQdNKffVLbuEM2PZDnPmSdGIvRth30ZgXCti2ujP4nvn4KzUNQqkgeoix1ozWRJnErcu%2F2yK%2BDyqcJnMbPzLqUXrMwmWMNsLcIm1PzVnMLCyyi4GNeB%2FIjhnuPM7er%2BzIlvwLEtmxdInDxETMI8uJCsazKPPWlevXISlV%2FVaf0DxKzz07A0PbGZhiE%2FVusU79m1JXdxHFlbOM1OzQGQXebBjSBUTzZVlGf48VKJx2L3NRB6K80NpwpemGJAv29731lrbw2aBowdGQdem7xHa1hW56BYDNFGUAtfMaFEbT9n746dOvFKZw7PyAqc0XM4PHBvHcYX%2BKyRor3zTrLrVPOubBJnTYiH60ppymoay0Ry6m8KHQrrryXe8NsKXHg1V2gSVU%2BaY04I1qyyZMyINOVeQXrVhxTTyCuM7l6I1tgbJWPnc3EMM7h0Z%2BmrYDUNpuoOimrs84kOTmyceKyKI%2FQ29cyILyEtFcR2hKm2zzQPQCbf2mc7sHuRyL5umOINNRKxYYDUr1Qlvl25ptNYFs3lbkUrqJevK0Tww62cdxmf%2F7Vifb5y0aJXbHQUGsHGkp95EcvNlO8Jrx6Z6%2Ff1mjUD50HBAuEyQAw277ixAY6pgHCcGXozaL6yhmaQ7DQm%2By5BVuHbQflJLjVPuAW3G9EKtwXUUDCIsIjto5wS86QsPhlOgmsawpXH5IxRHCuYbqZJz65pbaZOjCvbtIZa1sFGCu4WZRj6QLjFZB4ZNFFtQbLayYyK19Tc1ac%2BsmODWWPKPz1CzXcjXZR2KGQPPKni%2BmujI%2FbmKd%2B79afnCeBMVGcOfHXig3qlwN4maT2KZxHNaSsDfEL&X-Amz-Signature=d604e5df9c0bdafb4bc7b277b29ab0ab8a1c55096b2678beb0297959682c9c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGFXQIE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrnreS6MbTVqt%2FW5oy0Dv9WK23fWEb79LwOQjG0AI2wAiAbV%2FzK3r5Nw12soaK3a%2FKjzsgwsnYT5eV%2BDJdC%2F9jRSiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt0rdoCP8SOg57aZAKtwDQ%2B2tjStesxfeAlw0jPjgm7wHjThQdNKffVLbuEM2PZDnPmSdGIvRth30ZgXCti2ujP4nvn4KzUNQqkgeoix1ozWRJnErcu%2F2yK%2BDyqcJnMbPzLqUXrMwmWMNsLcIm1PzVnMLCyyi4GNeB%2FIjhnuPM7er%2BzIlvwLEtmxdInDxETMI8uJCsazKPPWlevXISlV%2FVaf0DxKzz07A0PbGZhiE%2FVusU79m1JXdxHFlbOM1OzQGQXebBjSBUTzZVlGf48VKJx2L3NRB6K80NpwpemGJAv29731lrbw2aBowdGQdem7xHa1hW56BYDNFGUAtfMaFEbT9n746dOvFKZw7PyAqc0XM4PHBvHcYX%2BKyRor3zTrLrVPOubBJnTYiH60ppymoay0Ry6m8KHQrrryXe8NsKXHg1V2gSVU%2BaY04I1qyyZMyINOVeQXrVhxTTyCuM7l6I1tgbJWPnc3EMM7h0Z%2BmrYDUNpuoOimrs84kOTmyceKyKI%2FQ29cyILyEtFcR2hKm2zzQPQCbf2mc7sHuRyL5umOINNRKxYYDUr1Qlvl25ptNYFs3lbkUrqJevK0Tww62cdxmf%2F7Vifb5y0aJXbHQUGsHGkp95EcvNlO8Jrx6Z6%2Ff1mjUD50HBAuEyQAw277ixAY6pgHCcGXozaL6yhmaQ7DQm%2By5BVuHbQflJLjVPuAW3G9EKtwXUUDCIsIjto5wS86QsPhlOgmsawpXH5IxRHCuYbqZJz65pbaZOjCvbtIZa1sFGCu4WZRj6QLjFZB4ZNFFtQbLayYyK19Tc1ac%2BsmODWWPKPz1CzXcjXZR2KGQPPKni%2BmujI%2FbmKd%2B79afnCeBMVGcOfHXig3qlwN4maT2KZxHNaSsDfEL&X-Amz-Signature=3448ea46d7ebc297b9da461142d6e4ba9e72221df646b7daf77a490bac7d059e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGFXQIE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrnreS6MbTVqt%2FW5oy0Dv9WK23fWEb79LwOQjG0AI2wAiAbV%2FzK3r5Nw12soaK3a%2FKjzsgwsnYT5eV%2BDJdC%2F9jRSiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt0rdoCP8SOg57aZAKtwDQ%2B2tjStesxfeAlw0jPjgm7wHjThQdNKffVLbuEM2PZDnPmSdGIvRth30ZgXCti2ujP4nvn4KzUNQqkgeoix1ozWRJnErcu%2F2yK%2BDyqcJnMbPzLqUXrMwmWMNsLcIm1PzVnMLCyyi4GNeB%2FIjhnuPM7er%2BzIlvwLEtmxdInDxETMI8uJCsazKPPWlevXISlV%2FVaf0DxKzz07A0PbGZhiE%2FVusU79m1JXdxHFlbOM1OzQGQXebBjSBUTzZVlGf48VKJx2L3NRB6K80NpwpemGJAv29731lrbw2aBowdGQdem7xHa1hW56BYDNFGUAtfMaFEbT9n746dOvFKZw7PyAqc0XM4PHBvHcYX%2BKyRor3zTrLrVPOubBJnTYiH60ppymoay0Ry6m8KHQrrryXe8NsKXHg1V2gSVU%2BaY04I1qyyZMyINOVeQXrVhxTTyCuM7l6I1tgbJWPnc3EMM7h0Z%2BmrYDUNpuoOimrs84kOTmyceKyKI%2FQ29cyILyEtFcR2hKm2zzQPQCbf2mc7sHuRyL5umOINNRKxYYDUr1Qlvl25ptNYFs3lbkUrqJevK0Tww62cdxmf%2F7Vifb5y0aJXbHQUGsHGkp95EcvNlO8Jrx6Z6%2Ff1mjUD50HBAuEyQAw277ixAY6pgHCcGXozaL6yhmaQ7DQm%2By5BVuHbQflJLjVPuAW3G9EKtwXUUDCIsIjto5wS86QsPhlOgmsawpXH5IxRHCuYbqZJz65pbaZOjCvbtIZa1sFGCu4WZRj6QLjFZB4ZNFFtQbLayYyK19Tc1ac%2BsmODWWPKPz1CzXcjXZR2KGQPPKni%2BmujI%2FbmKd%2B79afnCeBMVGcOfHXig3qlwN4maT2KZxHNaSsDfEL&X-Amz-Signature=d3afd639e662b0e5cc1b21e46c938b9459f4edcf71ab4f977e616caed9e4ee8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
