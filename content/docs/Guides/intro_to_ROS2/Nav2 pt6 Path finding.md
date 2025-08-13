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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27RPG74%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU%2BvVSCeZ%2F0zFjuC3GhBRDXIlC6ileRbCOgQG2lCCt%2BAiAmJ%2F4VmY5pQbT5JNLg4tK%2FcLKR5i6XedagMtgBmHz6zir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMleC%2FkGIcYcwCkavTKtwDu2Ow33vfDB8iYVBfuSaEVNjlCGPhxVcgdzLBBGr1ZGfM%2B2j%2F%2Fe%2Fll5byf%2BdWjSbKN2RVW%2Bw%2BOWwswrRuWnDg7vTKXs1i35TiJY42pYPi6adKMEPFOn85f0MBQWHsXfsDA0F4jUjkWUxvdVXC06TbFKKMOPOrGonZwlC2BPHbUUtxZlSAQNBnoC%2BB5lg3LTK0OMrPjWKTJBocyYeGBEIOwEKTBhCPxhuwwmsuuXKAhZWXSSR3CY8GTrb1%2BKzOJMvpfQmOhm2BZG5QIPkSEe9JBRhjYiAc%2BXOv25vRC79iVrlduZ4iWHptzi2ELA1PyE7yjHgqVFbr%2FMdhjXLty%2FudUWxIlsvKZy1CMO3mjpXYJPPunF9Rqzd8Gi3AwuNT0i1ZG46eTose6522HHfUjIRItaKlOqlndpsOhEuDPLmqWx%2BeBDPdrEmnYv%2Fsiz1O%2F3%2Fsdf0PAZNycHV8S9aFJ%2B%2BgieKd0dahDIScbwXLTOjLL4ZjizhBu6mpbdmxVHnhvTNNidOTHDi%2FuuWuWXaW6FcPkW3tuDeLVKHHiJD67twJD3shRJFfXU7zEyUP7g9zgKeKm0gwYhMZm4z9o6mp61uCaF0kFekChj9ZaOCet1%2FiIiuq39rt4NOvYC0LHdcwqKDzxAY6pgHAGqP95Ze1haENEBQMc6yKVGrAw0mJWtatTU38a8pOYN0QSEqFrs2gsLHT6QU0tklqit6YIIAzF%2FI9W0iK3O2CTLiFVqY%2BOUp7v3jDZFhm0k9SklopW66nNrikBPFVCpMxamEdBIw6eLAeyXKwC2ReQSrbxqr3owF%2FmxGv7lSs6xL42QXhKll4SlUs86QM9UrU8gPxZqzfyAEuAq1LiA7xzI2gpc7f&X-Amz-Signature=f9203471270106061e74f48a28a082bad81d8089e9bff8cec5900f3f78818e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27RPG74%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU%2BvVSCeZ%2F0zFjuC3GhBRDXIlC6ileRbCOgQG2lCCt%2BAiAmJ%2F4VmY5pQbT5JNLg4tK%2FcLKR5i6XedagMtgBmHz6zir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMleC%2FkGIcYcwCkavTKtwDu2Ow33vfDB8iYVBfuSaEVNjlCGPhxVcgdzLBBGr1ZGfM%2B2j%2F%2Fe%2Fll5byf%2BdWjSbKN2RVW%2Bw%2BOWwswrRuWnDg7vTKXs1i35TiJY42pYPi6adKMEPFOn85f0MBQWHsXfsDA0F4jUjkWUxvdVXC06TbFKKMOPOrGonZwlC2BPHbUUtxZlSAQNBnoC%2BB5lg3LTK0OMrPjWKTJBocyYeGBEIOwEKTBhCPxhuwwmsuuXKAhZWXSSR3CY8GTrb1%2BKzOJMvpfQmOhm2BZG5QIPkSEe9JBRhjYiAc%2BXOv25vRC79iVrlduZ4iWHptzi2ELA1PyE7yjHgqVFbr%2FMdhjXLty%2FudUWxIlsvKZy1CMO3mjpXYJPPunF9Rqzd8Gi3AwuNT0i1ZG46eTose6522HHfUjIRItaKlOqlndpsOhEuDPLmqWx%2BeBDPdrEmnYv%2Fsiz1O%2F3%2Fsdf0PAZNycHV8S9aFJ%2B%2BgieKd0dahDIScbwXLTOjLL4ZjizhBu6mpbdmxVHnhvTNNidOTHDi%2FuuWuWXaW6FcPkW3tuDeLVKHHiJD67twJD3shRJFfXU7zEyUP7g9zgKeKm0gwYhMZm4z9o6mp61uCaF0kFekChj9ZaOCet1%2FiIiuq39rt4NOvYC0LHdcwqKDzxAY6pgHAGqP95Ze1haENEBQMc6yKVGrAw0mJWtatTU38a8pOYN0QSEqFrs2gsLHT6QU0tklqit6YIIAzF%2FI9W0iK3O2CTLiFVqY%2BOUp7v3jDZFhm0k9SklopW66nNrikBPFVCpMxamEdBIw6eLAeyXKwC2ReQSrbxqr3owF%2FmxGv7lSs6xL42QXhKll4SlUs86QM9UrU8gPxZqzfyAEuAq1LiA7xzI2gpc7f&X-Amz-Signature=b2a902f20f49342d659b4f8b2a4b4495f45abe7f8962c964bea9e37e893f5a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27RPG74%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU%2BvVSCeZ%2F0zFjuC3GhBRDXIlC6ileRbCOgQG2lCCt%2BAiAmJ%2F4VmY5pQbT5JNLg4tK%2FcLKR5i6XedagMtgBmHz6zir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMleC%2FkGIcYcwCkavTKtwDu2Ow33vfDB8iYVBfuSaEVNjlCGPhxVcgdzLBBGr1ZGfM%2B2j%2F%2Fe%2Fll5byf%2BdWjSbKN2RVW%2Bw%2BOWwswrRuWnDg7vTKXs1i35TiJY42pYPi6adKMEPFOn85f0MBQWHsXfsDA0F4jUjkWUxvdVXC06TbFKKMOPOrGonZwlC2BPHbUUtxZlSAQNBnoC%2BB5lg3LTK0OMrPjWKTJBocyYeGBEIOwEKTBhCPxhuwwmsuuXKAhZWXSSR3CY8GTrb1%2BKzOJMvpfQmOhm2BZG5QIPkSEe9JBRhjYiAc%2BXOv25vRC79iVrlduZ4iWHptzi2ELA1PyE7yjHgqVFbr%2FMdhjXLty%2FudUWxIlsvKZy1CMO3mjpXYJPPunF9Rqzd8Gi3AwuNT0i1ZG46eTose6522HHfUjIRItaKlOqlndpsOhEuDPLmqWx%2BeBDPdrEmnYv%2Fsiz1O%2F3%2Fsdf0PAZNycHV8S9aFJ%2B%2BgieKd0dahDIScbwXLTOjLL4ZjizhBu6mpbdmxVHnhvTNNidOTHDi%2FuuWuWXaW6FcPkW3tuDeLVKHHiJD67twJD3shRJFfXU7zEyUP7g9zgKeKm0gwYhMZm4z9o6mp61uCaF0kFekChj9ZaOCet1%2FiIiuq39rt4NOvYC0LHdcwqKDzxAY6pgHAGqP95Ze1haENEBQMc6yKVGrAw0mJWtatTU38a8pOYN0QSEqFrs2gsLHT6QU0tklqit6YIIAzF%2FI9W0iK3O2CTLiFVqY%2BOUp7v3jDZFhm0k9SklopW66nNrikBPFVCpMxamEdBIw6eLAeyXKwC2ReQSrbxqr3owF%2FmxGv7lSs6xL42QXhKll4SlUs86QM9UrU8gPxZqzfyAEuAq1LiA7xzI2gpc7f&X-Amz-Signature=35d35b33a868c5a8e8867a72230bb66e86d5471dab04a1885a145c85987330c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27RPG74%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU%2BvVSCeZ%2F0zFjuC3GhBRDXIlC6ileRbCOgQG2lCCt%2BAiAmJ%2F4VmY5pQbT5JNLg4tK%2FcLKR5i6XedagMtgBmHz6zir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMleC%2FkGIcYcwCkavTKtwDu2Ow33vfDB8iYVBfuSaEVNjlCGPhxVcgdzLBBGr1ZGfM%2B2j%2F%2Fe%2Fll5byf%2BdWjSbKN2RVW%2Bw%2BOWwswrRuWnDg7vTKXs1i35TiJY42pYPi6adKMEPFOn85f0MBQWHsXfsDA0F4jUjkWUxvdVXC06TbFKKMOPOrGonZwlC2BPHbUUtxZlSAQNBnoC%2BB5lg3LTK0OMrPjWKTJBocyYeGBEIOwEKTBhCPxhuwwmsuuXKAhZWXSSR3CY8GTrb1%2BKzOJMvpfQmOhm2BZG5QIPkSEe9JBRhjYiAc%2BXOv25vRC79iVrlduZ4iWHptzi2ELA1PyE7yjHgqVFbr%2FMdhjXLty%2FudUWxIlsvKZy1CMO3mjpXYJPPunF9Rqzd8Gi3AwuNT0i1ZG46eTose6522HHfUjIRItaKlOqlndpsOhEuDPLmqWx%2BeBDPdrEmnYv%2Fsiz1O%2F3%2Fsdf0PAZNycHV8S9aFJ%2B%2BgieKd0dahDIScbwXLTOjLL4ZjizhBu6mpbdmxVHnhvTNNidOTHDi%2FuuWuWXaW6FcPkW3tuDeLVKHHiJD67twJD3shRJFfXU7zEyUP7g9zgKeKm0gwYhMZm4z9o6mp61uCaF0kFekChj9ZaOCet1%2FiIiuq39rt4NOvYC0LHdcwqKDzxAY6pgHAGqP95Ze1haENEBQMc6yKVGrAw0mJWtatTU38a8pOYN0QSEqFrs2gsLHT6QU0tklqit6YIIAzF%2FI9W0iK3O2CTLiFVqY%2BOUp7v3jDZFhm0k9SklopW66nNrikBPFVCpMxamEdBIw6eLAeyXKwC2ReQSrbxqr3owF%2FmxGv7lSs6xL42QXhKll4SlUs86QM9UrU8gPxZqzfyAEuAq1LiA7xzI2gpc7f&X-Amz-Signature=0e0bd4f056c2b4c5642fd40718251a07c663f9147acbeb70f519f44442de8eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27RPG74%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU%2BvVSCeZ%2F0zFjuC3GhBRDXIlC6ileRbCOgQG2lCCt%2BAiAmJ%2F4VmY5pQbT5JNLg4tK%2FcLKR5i6XedagMtgBmHz6zir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMleC%2FkGIcYcwCkavTKtwDu2Ow33vfDB8iYVBfuSaEVNjlCGPhxVcgdzLBBGr1ZGfM%2B2j%2F%2Fe%2Fll5byf%2BdWjSbKN2RVW%2Bw%2BOWwswrRuWnDg7vTKXs1i35TiJY42pYPi6adKMEPFOn85f0MBQWHsXfsDA0F4jUjkWUxvdVXC06TbFKKMOPOrGonZwlC2BPHbUUtxZlSAQNBnoC%2BB5lg3LTK0OMrPjWKTJBocyYeGBEIOwEKTBhCPxhuwwmsuuXKAhZWXSSR3CY8GTrb1%2BKzOJMvpfQmOhm2BZG5QIPkSEe9JBRhjYiAc%2BXOv25vRC79iVrlduZ4iWHptzi2ELA1PyE7yjHgqVFbr%2FMdhjXLty%2FudUWxIlsvKZy1CMO3mjpXYJPPunF9Rqzd8Gi3AwuNT0i1ZG46eTose6522HHfUjIRItaKlOqlndpsOhEuDPLmqWx%2BeBDPdrEmnYv%2Fsiz1O%2F3%2Fsdf0PAZNycHV8S9aFJ%2B%2BgieKd0dahDIScbwXLTOjLL4ZjizhBu6mpbdmxVHnhvTNNidOTHDi%2FuuWuWXaW6FcPkW3tuDeLVKHHiJD67twJD3shRJFfXU7zEyUP7g9zgKeKm0gwYhMZm4z9o6mp61uCaF0kFekChj9ZaOCet1%2FiIiuq39rt4NOvYC0LHdcwqKDzxAY6pgHAGqP95Ze1haENEBQMc6yKVGrAw0mJWtatTU38a8pOYN0QSEqFrs2gsLHT6QU0tklqit6YIIAzF%2FI9W0iK3O2CTLiFVqY%2BOUp7v3jDZFhm0k9SklopW66nNrikBPFVCpMxamEdBIw6eLAeyXKwC2ReQSrbxqr3owF%2FmxGv7lSs6xL42QXhKll4SlUs86QM9UrU8gPxZqzfyAEuAq1LiA7xzI2gpc7f&X-Amz-Signature=1e8064909f08712fe4146228ea29a86502d90bbe71204ae705811390b0de0a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27RPG74%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU%2BvVSCeZ%2F0zFjuC3GhBRDXIlC6ileRbCOgQG2lCCt%2BAiAmJ%2F4VmY5pQbT5JNLg4tK%2FcLKR5i6XedagMtgBmHz6zir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMleC%2FkGIcYcwCkavTKtwDu2Ow33vfDB8iYVBfuSaEVNjlCGPhxVcgdzLBBGr1ZGfM%2B2j%2F%2Fe%2Fll5byf%2BdWjSbKN2RVW%2Bw%2BOWwswrRuWnDg7vTKXs1i35TiJY42pYPi6adKMEPFOn85f0MBQWHsXfsDA0F4jUjkWUxvdVXC06TbFKKMOPOrGonZwlC2BPHbUUtxZlSAQNBnoC%2BB5lg3LTK0OMrPjWKTJBocyYeGBEIOwEKTBhCPxhuwwmsuuXKAhZWXSSR3CY8GTrb1%2BKzOJMvpfQmOhm2BZG5QIPkSEe9JBRhjYiAc%2BXOv25vRC79iVrlduZ4iWHptzi2ELA1PyE7yjHgqVFbr%2FMdhjXLty%2FudUWxIlsvKZy1CMO3mjpXYJPPunF9Rqzd8Gi3AwuNT0i1ZG46eTose6522HHfUjIRItaKlOqlndpsOhEuDPLmqWx%2BeBDPdrEmnYv%2Fsiz1O%2F3%2Fsdf0PAZNycHV8S9aFJ%2B%2BgieKd0dahDIScbwXLTOjLL4ZjizhBu6mpbdmxVHnhvTNNidOTHDi%2FuuWuWXaW6FcPkW3tuDeLVKHHiJD67twJD3shRJFfXU7zEyUP7g9zgKeKm0gwYhMZm4z9o6mp61uCaF0kFekChj9ZaOCet1%2FiIiuq39rt4NOvYC0LHdcwqKDzxAY6pgHAGqP95Ze1haENEBQMc6yKVGrAw0mJWtatTU38a8pOYN0QSEqFrs2gsLHT6QU0tklqit6YIIAzF%2FI9W0iK3O2CTLiFVqY%2BOUp7v3jDZFhm0k9SklopW66nNrikBPFVCpMxamEdBIw6eLAeyXKwC2ReQSrbxqr3owF%2FmxGv7lSs6xL42QXhKll4SlUs86QM9UrU8gPxZqzfyAEuAq1LiA7xzI2gpc7f&X-Amz-Signature=c8b874ccf4ed50cad418d14d6273c7ca137cff0679bc92a60e2d1d7a89f9ab8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27RPG74%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU%2BvVSCeZ%2F0zFjuC3GhBRDXIlC6ileRbCOgQG2lCCt%2BAiAmJ%2F4VmY5pQbT5JNLg4tK%2FcLKR5i6XedagMtgBmHz6zir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMleC%2FkGIcYcwCkavTKtwDu2Ow33vfDB8iYVBfuSaEVNjlCGPhxVcgdzLBBGr1ZGfM%2B2j%2F%2Fe%2Fll5byf%2BdWjSbKN2RVW%2Bw%2BOWwswrRuWnDg7vTKXs1i35TiJY42pYPi6adKMEPFOn85f0MBQWHsXfsDA0F4jUjkWUxvdVXC06TbFKKMOPOrGonZwlC2BPHbUUtxZlSAQNBnoC%2BB5lg3LTK0OMrPjWKTJBocyYeGBEIOwEKTBhCPxhuwwmsuuXKAhZWXSSR3CY8GTrb1%2BKzOJMvpfQmOhm2BZG5QIPkSEe9JBRhjYiAc%2BXOv25vRC79iVrlduZ4iWHptzi2ELA1PyE7yjHgqVFbr%2FMdhjXLty%2FudUWxIlsvKZy1CMO3mjpXYJPPunF9Rqzd8Gi3AwuNT0i1ZG46eTose6522HHfUjIRItaKlOqlndpsOhEuDPLmqWx%2BeBDPdrEmnYv%2Fsiz1O%2F3%2Fsdf0PAZNycHV8S9aFJ%2B%2BgieKd0dahDIScbwXLTOjLL4ZjizhBu6mpbdmxVHnhvTNNidOTHDi%2FuuWuWXaW6FcPkW3tuDeLVKHHiJD67twJD3shRJFfXU7zEyUP7g9zgKeKm0gwYhMZm4z9o6mp61uCaF0kFekChj9ZaOCet1%2FiIiuq39rt4NOvYC0LHdcwqKDzxAY6pgHAGqP95Ze1haENEBQMc6yKVGrAw0mJWtatTU38a8pOYN0QSEqFrs2gsLHT6QU0tklqit6YIIAzF%2FI9W0iK3O2CTLiFVqY%2BOUp7v3jDZFhm0k9SklopW66nNrikBPFVCpMxamEdBIw6eLAeyXKwC2ReQSrbxqr3owF%2FmxGv7lSs6xL42QXhKll4SlUs86QM9UrU8gPxZqzfyAEuAq1LiA7xzI2gpc7f&X-Amz-Signature=c2b7d67e9342860ae6f7eb6709b84149777431e78bd8b7c2458475ee478eb3b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27RPG74%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU%2BvVSCeZ%2F0zFjuC3GhBRDXIlC6ileRbCOgQG2lCCt%2BAiAmJ%2F4VmY5pQbT5JNLg4tK%2FcLKR5i6XedagMtgBmHz6zir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMleC%2FkGIcYcwCkavTKtwDu2Ow33vfDB8iYVBfuSaEVNjlCGPhxVcgdzLBBGr1ZGfM%2B2j%2F%2Fe%2Fll5byf%2BdWjSbKN2RVW%2Bw%2BOWwswrRuWnDg7vTKXs1i35TiJY42pYPi6adKMEPFOn85f0MBQWHsXfsDA0F4jUjkWUxvdVXC06TbFKKMOPOrGonZwlC2BPHbUUtxZlSAQNBnoC%2BB5lg3LTK0OMrPjWKTJBocyYeGBEIOwEKTBhCPxhuwwmsuuXKAhZWXSSR3CY8GTrb1%2BKzOJMvpfQmOhm2BZG5QIPkSEe9JBRhjYiAc%2BXOv25vRC79iVrlduZ4iWHptzi2ELA1PyE7yjHgqVFbr%2FMdhjXLty%2FudUWxIlsvKZy1CMO3mjpXYJPPunF9Rqzd8Gi3AwuNT0i1ZG46eTose6522HHfUjIRItaKlOqlndpsOhEuDPLmqWx%2BeBDPdrEmnYv%2Fsiz1O%2F3%2Fsdf0PAZNycHV8S9aFJ%2B%2BgieKd0dahDIScbwXLTOjLL4ZjizhBu6mpbdmxVHnhvTNNidOTHDi%2FuuWuWXaW6FcPkW3tuDeLVKHHiJD67twJD3shRJFfXU7zEyUP7g9zgKeKm0gwYhMZm4z9o6mp61uCaF0kFekChj9ZaOCet1%2FiIiuq39rt4NOvYC0LHdcwqKDzxAY6pgHAGqP95Ze1haENEBQMc6yKVGrAw0mJWtatTU38a8pOYN0QSEqFrs2gsLHT6QU0tklqit6YIIAzF%2FI9W0iK3O2CTLiFVqY%2BOUp7v3jDZFhm0k9SklopW66nNrikBPFVCpMxamEdBIw6eLAeyXKwC2ReQSrbxqr3owF%2FmxGv7lSs6xL42QXhKll4SlUs86QM9UrU8gPxZqzfyAEuAq1LiA7xzI2gpc7f&X-Amz-Signature=a73d8494540d933d0ca511dffd9a7baf3fd474ced298f6207ed7a94cbdefbb8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27RPG74%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU%2BvVSCeZ%2F0zFjuC3GhBRDXIlC6ileRbCOgQG2lCCt%2BAiAmJ%2F4VmY5pQbT5JNLg4tK%2FcLKR5i6XedagMtgBmHz6zir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMleC%2FkGIcYcwCkavTKtwDu2Ow33vfDB8iYVBfuSaEVNjlCGPhxVcgdzLBBGr1ZGfM%2B2j%2F%2Fe%2Fll5byf%2BdWjSbKN2RVW%2Bw%2BOWwswrRuWnDg7vTKXs1i35TiJY42pYPi6adKMEPFOn85f0MBQWHsXfsDA0F4jUjkWUxvdVXC06TbFKKMOPOrGonZwlC2BPHbUUtxZlSAQNBnoC%2BB5lg3LTK0OMrPjWKTJBocyYeGBEIOwEKTBhCPxhuwwmsuuXKAhZWXSSR3CY8GTrb1%2BKzOJMvpfQmOhm2BZG5QIPkSEe9JBRhjYiAc%2BXOv25vRC79iVrlduZ4iWHptzi2ELA1PyE7yjHgqVFbr%2FMdhjXLty%2FudUWxIlsvKZy1CMO3mjpXYJPPunF9Rqzd8Gi3AwuNT0i1ZG46eTose6522HHfUjIRItaKlOqlndpsOhEuDPLmqWx%2BeBDPdrEmnYv%2Fsiz1O%2F3%2Fsdf0PAZNycHV8S9aFJ%2B%2BgieKd0dahDIScbwXLTOjLL4ZjizhBu6mpbdmxVHnhvTNNidOTHDi%2FuuWuWXaW6FcPkW3tuDeLVKHHiJD67twJD3shRJFfXU7zEyUP7g9zgKeKm0gwYhMZm4z9o6mp61uCaF0kFekChj9ZaOCet1%2FiIiuq39rt4NOvYC0LHdcwqKDzxAY6pgHAGqP95Ze1haENEBQMc6yKVGrAw0mJWtatTU38a8pOYN0QSEqFrs2gsLHT6QU0tklqit6YIIAzF%2FI9W0iK3O2CTLiFVqY%2BOUp7v3jDZFhm0k9SklopW66nNrikBPFVCpMxamEdBIw6eLAeyXKwC2ReQSrbxqr3owF%2FmxGv7lSs6xL42QXhKll4SlUs86QM9UrU8gPxZqzfyAEuAq1LiA7xzI2gpc7f&X-Amz-Signature=ce687587dbac4aea498a2e75b2d5c3e4748c5ed80c6e00a6b2d1090971e5afd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27RPG74%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU%2BvVSCeZ%2F0zFjuC3GhBRDXIlC6ileRbCOgQG2lCCt%2BAiAmJ%2F4VmY5pQbT5JNLg4tK%2FcLKR5i6XedagMtgBmHz6zir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMleC%2FkGIcYcwCkavTKtwDu2Ow33vfDB8iYVBfuSaEVNjlCGPhxVcgdzLBBGr1ZGfM%2B2j%2F%2Fe%2Fll5byf%2BdWjSbKN2RVW%2Bw%2BOWwswrRuWnDg7vTKXs1i35TiJY42pYPi6adKMEPFOn85f0MBQWHsXfsDA0F4jUjkWUxvdVXC06TbFKKMOPOrGonZwlC2BPHbUUtxZlSAQNBnoC%2BB5lg3LTK0OMrPjWKTJBocyYeGBEIOwEKTBhCPxhuwwmsuuXKAhZWXSSR3CY8GTrb1%2BKzOJMvpfQmOhm2BZG5QIPkSEe9JBRhjYiAc%2BXOv25vRC79iVrlduZ4iWHptzi2ELA1PyE7yjHgqVFbr%2FMdhjXLty%2FudUWxIlsvKZy1CMO3mjpXYJPPunF9Rqzd8Gi3AwuNT0i1ZG46eTose6522HHfUjIRItaKlOqlndpsOhEuDPLmqWx%2BeBDPdrEmnYv%2Fsiz1O%2F3%2Fsdf0PAZNycHV8S9aFJ%2B%2BgieKd0dahDIScbwXLTOjLL4ZjizhBu6mpbdmxVHnhvTNNidOTHDi%2FuuWuWXaW6FcPkW3tuDeLVKHHiJD67twJD3shRJFfXU7zEyUP7g9zgKeKm0gwYhMZm4z9o6mp61uCaF0kFekChj9ZaOCet1%2FiIiuq39rt4NOvYC0LHdcwqKDzxAY6pgHAGqP95Ze1haENEBQMc6yKVGrAw0mJWtatTU38a8pOYN0QSEqFrs2gsLHT6QU0tklqit6YIIAzF%2FI9W0iK3O2CTLiFVqY%2BOUp7v3jDZFhm0k9SklopW66nNrikBPFVCpMxamEdBIw6eLAeyXKwC2ReQSrbxqr3owF%2FmxGv7lSs6xL42QXhKll4SlUs86QM9UrU8gPxZqzfyAEuAq1LiA7xzI2gpc7f&X-Amz-Signature=bd83d22066b5cab323043cf3163d9d5efd3183fc0d5995969eea077a902d8695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27RPG74%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU%2BvVSCeZ%2F0zFjuC3GhBRDXIlC6ileRbCOgQG2lCCt%2BAiAmJ%2F4VmY5pQbT5JNLg4tK%2FcLKR5i6XedagMtgBmHz6zir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMleC%2FkGIcYcwCkavTKtwDu2Ow33vfDB8iYVBfuSaEVNjlCGPhxVcgdzLBBGr1ZGfM%2B2j%2F%2Fe%2Fll5byf%2BdWjSbKN2RVW%2Bw%2BOWwswrRuWnDg7vTKXs1i35TiJY42pYPi6adKMEPFOn85f0MBQWHsXfsDA0F4jUjkWUxvdVXC06TbFKKMOPOrGonZwlC2BPHbUUtxZlSAQNBnoC%2BB5lg3LTK0OMrPjWKTJBocyYeGBEIOwEKTBhCPxhuwwmsuuXKAhZWXSSR3CY8GTrb1%2BKzOJMvpfQmOhm2BZG5QIPkSEe9JBRhjYiAc%2BXOv25vRC79iVrlduZ4iWHptzi2ELA1PyE7yjHgqVFbr%2FMdhjXLty%2FudUWxIlsvKZy1CMO3mjpXYJPPunF9Rqzd8Gi3AwuNT0i1ZG46eTose6522HHfUjIRItaKlOqlndpsOhEuDPLmqWx%2BeBDPdrEmnYv%2Fsiz1O%2F3%2Fsdf0PAZNycHV8S9aFJ%2B%2BgieKd0dahDIScbwXLTOjLL4ZjizhBu6mpbdmxVHnhvTNNidOTHDi%2FuuWuWXaW6FcPkW3tuDeLVKHHiJD67twJD3shRJFfXU7zEyUP7g9zgKeKm0gwYhMZm4z9o6mp61uCaF0kFekChj9ZaOCet1%2FiIiuq39rt4NOvYC0LHdcwqKDzxAY6pgHAGqP95Ze1haENEBQMc6yKVGrAw0mJWtatTU38a8pOYN0QSEqFrs2gsLHT6QU0tklqit6YIIAzF%2FI9W0iK3O2CTLiFVqY%2BOUp7v3jDZFhm0k9SklopW66nNrikBPFVCpMxamEdBIw6eLAeyXKwC2ReQSrbxqr3owF%2FmxGv7lSs6xL42QXhKll4SlUs86QM9UrU8gPxZqzfyAEuAq1LiA7xzI2gpc7f&X-Amz-Signature=76da3f5705c9c772e4bcbd9459a836482833c6ccc842b6eb5ad015a62fb1dc7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27RPG74%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU%2BvVSCeZ%2F0zFjuC3GhBRDXIlC6ileRbCOgQG2lCCt%2BAiAmJ%2F4VmY5pQbT5JNLg4tK%2FcLKR5i6XedagMtgBmHz6zir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMleC%2FkGIcYcwCkavTKtwDu2Ow33vfDB8iYVBfuSaEVNjlCGPhxVcgdzLBBGr1ZGfM%2B2j%2F%2Fe%2Fll5byf%2BdWjSbKN2RVW%2Bw%2BOWwswrRuWnDg7vTKXs1i35TiJY42pYPi6adKMEPFOn85f0MBQWHsXfsDA0F4jUjkWUxvdVXC06TbFKKMOPOrGonZwlC2BPHbUUtxZlSAQNBnoC%2BB5lg3LTK0OMrPjWKTJBocyYeGBEIOwEKTBhCPxhuwwmsuuXKAhZWXSSR3CY8GTrb1%2BKzOJMvpfQmOhm2BZG5QIPkSEe9JBRhjYiAc%2BXOv25vRC79iVrlduZ4iWHptzi2ELA1PyE7yjHgqVFbr%2FMdhjXLty%2FudUWxIlsvKZy1CMO3mjpXYJPPunF9Rqzd8Gi3AwuNT0i1ZG46eTose6522HHfUjIRItaKlOqlndpsOhEuDPLmqWx%2BeBDPdrEmnYv%2Fsiz1O%2F3%2Fsdf0PAZNycHV8S9aFJ%2B%2BgieKd0dahDIScbwXLTOjLL4ZjizhBu6mpbdmxVHnhvTNNidOTHDi%2FuuWuWXaW6FcPkW3tuDeLVKHHiJD67twJD3shRJFfXU7zEyUP7g9zgKeKm0gwYhMZm4z9o6mp61uCaF0kFekChj9ZaOCet1%2FiIiuq39rt4NOvYC0LHdcwqKDzxAY6pgHAGqP95Ze1haENEBQMc6yKVGrAw0mJWtatTU38a8pOYN0QSEqFrs2gsLHT6QU0tklqit6YIIAzF%2FI9W0iK3O2CTLiFVqY%2BOUp7v3jDZFhm0k9SklopW66nNrikBPFVCpMxamEdBIw6eLAeyXKwC2ReQSrbxqr3owF%2FmxGv7lSs6xL42QXhKll4SlUs86QM9UrU8gPxZqzfyAEuAq1LiA7xzI2gpc7f&X-Amz-Signature=3c6407dbb9162a0ecad5081a3cfe67b1e4acc231e83eafbbe985262b253002a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27RPG74%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU%2BvVSCeZ%2F0zFjuC3GhBRDXIlC6ileRbCOgQG2lCCt%2BAiAmJ%2F4VmY5pQbT5JNLg4tK%2FcLKR5i6XedagMtgBmHz6zir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMleC%2FkGIcYcwCkavTKtwDu2Ow33vfDB8iYVBfuSaEVNjlCGPhxVcgdzLBBGr1ZGfM%2B2j%2F%2Fe%2Fll5byf%2BdWjSbKN2RVW%2Bw%2BOWwswrRuWnDg7vTKXs1i35TiJY42pYPi6adKMEPFOn85f0MBQWHsXfsDA0F4jUjkWUxvdVXC06TbFKKMOPOrGonZwlC2BPHbUUtxZlSAQNBnoC%2BB5lg3LTK0OMrPjWKTJBocyYeGBEIOwEKTBhCPxhuwwmsuuXKAhZWXSSR3CY8GTrb1%2BKzOJMvpfQmOhm2BZG5QIPkSEe9JBRhjYiAc%2BXOv25vRC79iVrlduZ4iWHptzi2ELA1PyE7yjHgqVFbr%2FMdhjXLty%2FudUWxIlsvKZy1CMO3mjpXYJPPunF9Rqzd8Gi3AwuNT0i1ZG46eTose6522HHfUjIRItaKlOqlndpsOhEuDPLmqWx%2BeBDPdrEmnYv%2Fsiz1O%2F3%2Fsdf0PAZNycHV8S9aFJ%2B%2BgieKd0dahDIScbwXLTOjLL4ZjizhBu6mpbdmxVHnhvTNNidOTHDi%2FuuWuWXaW6FcPkW3tuDeLVKHHiJD67twJD3shRJFfXU7zEyUP7g9zgKeKm0gwYhMZm4z9o6mp61uCaF0kFekChj9ZaOCet1%2FiIiuq39rt4NOvYC0LHdcwqKDzxAY6pgHAGqP95Ze1haENEBQMc6yKVGrAw0mJWtatTU38a8pOYN0QSEqFrs2gsLHT6QU0tklqit6YIIAzF%2FI9W0iK3O2CTLiFVqY%2BOUp7v3jDZFhm0k9SklopW66nNrikBPFVCpMxamEdBIw6eLAeyXKwC2ReQSrbxqr3owF%2FmxGv7lSs6xL42QXhKll4SlUs86QM9UrU8gPxZqzfyAEuAq1LiA7xzI2gpc7f&X-Amz-Signature=153425422bf2da9d073abe55ac7a2b6278e670ab2d229c813727f40ec1eaa0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
