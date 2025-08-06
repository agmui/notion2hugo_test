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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMRA6HU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCcQlkKyoActLnJbSGJpKZh3RpnJ8muh%2BxDaNZ9%2FU2AvwIhAIFhZ7Mt%2BUGnhTankj6G%2BwBzzRBecc4%2BbR%2BnQNEqr%2BD2Kv8DCHkQABoMNjM3NDIzMTgzODA1IgwKap5mbQLLhUlDGIwq3APLJtaWlQ%2FduAyUjWm6Ygqd9mpKf%2Btiy%2BsbOd5ulHIjv7pI8hHCrvMEmoqc5JAE2jLnYEjFJEqPv%2FbRdVStptxsmVZWHmHl3ntC1UQzL%2FX9hXS0rbwz04OeegxJPvnOr9ihAhL47OgWjrC6kxmyDLvu6bIpBdy%2Fthh6wBnSUQqpeYSb%2FQQMuEE2jD67wU2Lyw6%2Bt5kYFV95kBq4AwY%2FIT13lx4mc8RqlvI9ap4Y5LQwfs4Jy183EFFhoRRP4HDNP1nqnMaQeM1SR4JaXXtLF6Aid%2BGQsx8GBWawxc%2FUCVufFkOzIANN%2BEkNmuleEnButWEVr8waCVzjqQPNYVKiHtodDC851LYHwC%2B5YxsraMyun8mUm3qBERpmXCqAVV%2FJXJ3WWXtQdPNfgznp8TZbMmAPK1FSlBn5MKdiIaYjUuyk2QcJwAd%2FHd44ss1rWWsIhBPa2FalZA%2BD9URan5YGhdFCahQEJHsnFoIQkc2DpNfi2iEYYlHHV1vWA3iid7Z4b%2FWlm53dVI5OkKfZ4XZanF02%2FvelzL6GH6Zq4eHGwqhZh5YYe%2FDWVsACuQ4LWNJ742XL6%2BqopDqk1YNl1n5N2BLHxqVYbU6AwHHVVL2WKQvkcOI80MJ1z483fbD0LDDt%2Bs3EBjqkASVRrJ9DtMhVM7YpnPwr9obJY8ys9M3l2PlJbDRsOPCMYj6Ic%2FUi1eN0NtmDzeIp5cshV%2Bzw8Yxq2YZvbi8A93KzR21ThlJ1Cp1o1wSDhRSzbPs5uh4fdfWAAMa27tuHaab9VppJ85Kft%2BrhGuA2HfrLKer63RzjLRy4U8OvxhVY%2Bw9boW6E7D9TCQ8cw67QHP5322WtEZBposzMFEQwsEkLuuqM&X-Amz-Signature=fb54e2a3f532884bb311f48666f3c003d4ef5078e85775c61c67e1ddd0759b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMRA6HU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCcQlkKyoActLnJbSGJpKZh3RpnJ8muh%2BxDaNZ9%2FU2AvwIhAIFhZ7Mt%2BUGnhTankj6G%2BwBzzRBecc4%2BbR%2BnQNEqr%2BD2Kv8DCHkQABoMNjM3NDIzMTgzODA1IgwKap5mbQLLhUlDGIwq3APLJtaWlQ%2FduAyUjWm6Ygqd9mpKf%2Btiy%2BsbOd5ulHIjv7pI8hHCrvMEmoqc5JAE2jLnYEjFJEqPv%2FbRdVStptxsmVZWHmHl3ntC1UQzL%2FX9hXS0rbwz04OeegxJPvnOr9ihAhL47OgWjrC6kxmyDLvu6bIpBdy%2Fthh6wBnSUQqpeYSb%2FQQMuEE2jD67wU2Lyw6%2Bt5kYFV95kBq4AwY%2FIT13lx4mc8RqlvI9ap4Y5LQwfs4Jy183EFFhoRRP4HDNP1nqnMaQeM1SR4JaXXtLF6Aid%2BGQsx8GBWawxc%2FUCVufFkOzIANN%2BEkNmuleEnButWEVr8waCVzjqQPNYVKiHtodDC851LYHwC%2B5YxsraMyun8mUm3qBERpmXCqAVV%2FJXJ3WWXtQdPNfgznp8TZbMmAPK1FSlBn5MKdiIaYjUuyk2QcJwAd%2FHd44ss1rWWsIhBPa2FalZA%2BD9URan5YGhdFCahQEJHsnFoIQkc2DpNfi2iEYYlHHV1vWA3iid7Z4b%2FWlm53dVI5OkKfZ4XZanF02%2FvelzL6GH6Zq4eHGwqhZh5YYe%2FDWVsACuQ4LWNJ742XL6%2BqopDqk1YNl1n5N2BLHxqVYbU6AwHHVVL2WKQvkcOI80MJ1z483fbD0LDDt%2Bs3EBjqkASVRrJ9DtMhVM7YpnPwr9obJY8ys9M3l2PlJbDRsOPCMYj6Ic%2FUi1eN0NtmDzeIp5cshV%2Bzw8Yxq2YZvbi8A93KzR21ThlJ1Cp1o1wSDhRSzbPs5uh4fdfWAAMa27tuHaab9VppJ85Kft%2BrhGuA2HfrLKer63RzjLRy4U8OvxhVY%2Bw9boW6E7D9TCQ8cw67QHP5322WtEZBposzMFEQwsEkLuuqM&X-Amz-Signature=78c212918c35dd522c6b250c4b482dd1c22ba3e3ae0fc0108a4427ab6aa55ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMRA6HU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCcQlkKyoActLnJbSGJpKZh3RpnJ8muh%2BxDaNZ9%2FU2AvwIhAIFhZ7Mt%2BUGnhTankj6G%2BwBzzRBecc4%2BbR%2BnQNEqr%2BD2Kv8DCHkQABoMNjM3NDIzMTgzODA1IgwKap5mbQLLhUlDGIwq3APLJtaWlQ%2FduAyUjWm6Ygqd9mpKf%2Btiy%2BsbOd5ulHIjv7pI8hHCrvMEmoqc5JAE2jLnYEjFJEqPv%2FbRdVStptxsmVZWHmHl3ntC1UQzL%2FX9hXS0rbwz04OeegxJPvnOr9ihAhL47OgWjrC6kxmyDLvu6bIpBdy%2Fthh6wBnSUQqpeYSb%2FQQMuEE2jD67wU2Lyw6%2Bt5kYFV95kBq4AwY%2FIT13lx4mc8RqlvI9ap4Y5LQwfs4Jy183EFFhoRRP4HDNP1nqnMaQeM1SR4JaXXtLF6Aid%2BGQsx8GBWawxc%2FUCVufFkOzIANN%2BEkNmuleEnButWEVr8waCVzjqQPNYVKiHtodDC851LYHwC%2B5YxsraMyun8mUm3qBERpmXCqAVV%2FJXJ3WWXtQdPNfgznp8TZbMmAPK1FSlBn5MKdiIaYjUuyk2QcJwAd%2FHd44ss1rWWsIhBPa2FalZA%2BD9URan5YGhdFCahQEJHsnFoIQkc2DpNfi2iEYYlHHV1vWA3iid7Z4b%2FWlm53dVI5OkKfZ4XZanF02%2FvelzL6GH6Zq4eHGwqhZh5YYe%2FDWVsACuQ4LWNJ742XL6%2BqopDqk1YNl1n5N2BLHxqVYbU6AwHHVVL2WKQvkcOI80MJ1z483fbD0LDDt%2Bs3EBjqkASVRrJ9DtMhVM7YpnPwr9obJY8ys9M3l2PlJbDRsOPCMYj6Ic%2FUi1eN0NtmDzeIp5cshV%2Bzw8Yxq2YZvbi8A93KzR21ThlJ1Cp1o1wSDhRSzbPs5uh4fdfWAAMa27tuHaab9VppJ85Kft%2BrhGuA2HfrLKer63RzjLRy4U8OvxhVY%2Bw9boW6E7D9TCQ8cw67QHP5322WtEZBposzMFEQwsEkLuuqM&X-Amz-Signature=4466116280a0c16e36c769584411b8befbc35b46523a60f4a500e9183adabb69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMRA6HU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCcQlkKyoActLnJbSGJpKZh3RpnJ8muh%2BxDaNZ9%2FU2AvwIhAIFhZ7Mt%2BUGnhTankj6G%2BwBzzRBecc4%2BbR%2BnQNEqr%2BD2Kv8DCHkQABoMNjM3NDIzMTgzODA1IgwKap5mbQLLhUlDGIwq3APLJtaWlQ%2FduAyUjWm6Ygqd9mpKf%2Btiy%2BsbOd5ulHIjv7pI8hHCrvMEmoqc5JAE2jLnYEjFJEqPv%2FbRdVStptxsmVZWHmHl3ntC1UQzL%2FX9hXS0rbwz04OeegxJPvnOr9ihAhL47OgWjrC6kxmyDLvu6bIpBdy%2Fthh6wBnSUQqpeYSb%2FQQMuEE2jD67wU2Lyw6%2Bt5kYFV95kBq4AwY%2FIT13lx4mc8RqlvI9ap4Y5LQwfs4Jy183EFFhoRRP4HDNP1nqnMaQeM1SR4JaXXtLF6Aid%2BGQsx8GBWawxc%2FUCVufFkOzIANN%2BEkNmuleEnButWEVr8waCVzjqQPNYVKiHtodDC851LYHwC%2B5YxsraMyun8mUm3qBERpmXCqAVV%2FJXJ3WWXtQdPNfgznp8TZbMmAPK1FSlBn5MKdiIaYjUuyk2QcJwAd%2FHd44ss1rWWsIhBPa2FalZA%2BD9URan5YGhdFCahQEJHsnFoIQkc2DpNfi2iEYYlHHV1vWA3iid7Z4b%2FWlm53dVI5OkKfZ4XZanF02%2FvelzL6GH6Zq4eHGwqhZh5YYe%2FDWVsACuQ4LWNJ742XL6%2BqopDqk1YNl1n5N2BLHxqVYbU6AwHHVVL2WKQvkcOI80MJ1z483fbD0LDDt%2Bs3EBjqkASVRrJ9DtMhVM7YpnPwr9obJY8ys9M3l2PlJbDRsOPCMYj6Ic%2FUi1eN0NtmDzeIp5cshV%2Bzw8Yxq2YZvbi8A93KzR21ThlJ1Cp1o1wSDhRSzbPs5uh4fdfWAAMa27tuHaab9VppJ85Kft%2BrhGuA2HfrLKer63RzjLRy4U8OvxhVY%2Bw9boW6E7D9TCQ8cw67QHP5322WtEZBposzMFEQwsEkLuuqM&X-Amz-Signature=10bd206e80abd7edd612bbcaff0c31e96857b125b6aa8d21bd33ab8f09d44cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMRA6HU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCcQlkKyoActLnJbSGJpKZh3RpnJ8muh%2BxDaNZ9%2FU2AvwIhAIFhZ7Mt%2BUGnhTankj6G%2BwBzzRBecc4%2BbR%2BnQNEqr%2BD2Kv8DCHkQABoMNjM3NDIzMTgzODA1IgwKap5mbQLLhUlDGIwq3APLJtaWlQ%2FduAyUjWm6Ygqd9mpKf%2Btiy%2BsbOd5ulHIjv7pI8hHCrvMEmoqc5JAE2jLnYEjFJEqPv%2FbRdVStptxsmVZWHmHl3ntC1UQzL%2FX9hXS0rbwz04OeegxJPvnOr9ihAhL47OgWjrC6kxmyDLvu6bIpBdy%2Fthh6wBnSUQqpeYSb%2FQQMuEE2jD67wU2Lyw6%2Bt5kYFV95kBq4AwY%2FIT13lx4mc8RqlvI9ap4Y5LQwfs4Jy183EFFhoRRP4HDNP1nqnMaQeM1SR4JaXXtLF6Aid%2BGQsx8GBWawxc%2FUCVufFkOzIANN%2BEkNmuleEnButWEVr8waCVzjqQPNYVKiHtodDC851LYHwC%2B5YxsraMyun8mUm3qBERpmXCqAVV%2FJXJ3WWXtQdPNfgznp8TZbMmAPK1FSlBn5MKdiIaYjUuyk2QcJwAd%2FHd44ss1rWWsIhBPa2FalZA%2BD9URan5YGhdFCahQEJHsnFoIQkc2DpNfi2iEYYlHHV1vWA3iid7Z4b%2FWlm53dVI5OkKfZ4XZanF02%2FvelzL6GH6Zq4eHGwqhZh5YYe%2FDWVsACuQ4LWNJ742XL6%2BqopDqk1YNl1n5N2BLHxqVYbU6AwHHVVL2WKQvkcOI80MJ1z483fbD0LDDt%2Bs3EBjqkASVRrJ9DtMhVM7YpnPwr9obJY8ys9M3l2PlJbDRsOPCMYj6Ic%2FUi1eN0NtmDzeIp5cshV%2Bzw8Yxq2YZvbi8A93KzR21ThlJ1Cp1o1wSDhRSzbPs5uh4fdfWAAMa27tuHaab9VppJ85Kft%2BrhGuA2HfrLKer63RzjLRy4U8OvxhVY%2Bw9boW6E7D9TCQ8cw67QHP5322WtEZBposzMFEQwsEkLuuqM&X-Amz-Signature=df0865532597959a95008c0652961bb0674c85421de18d321f3f4d56c1a8c354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMRA6HU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCcQlkKyoActLnJbSGJpKZh3RpnJ8muh%2BxDaNZ9%2FU2AvwIhAIFhZ7Mt%2BUGnhTankj6G%2BwBzzRBecc4%2BbR%2BnQNEqr%2BD2Kv8DCHkQABoMNjM3NDIzMTgzODA1IgwKap5mbQLLhUlDGIwq3APLJtaWlQ%2FduAyUjWm6Ygqd9mpKf%2Btiy%2BsbOd5ulHIjv7pI8hHCrvMEmoqc5JAE2jLnYEjFJEqPv%2FbRdVStptxsmVZWHmHl3ntC1UQzL%2FX9hXS0rbwz04OeegxJPvnOr9ihAhL47OgWjrC6kxmyDLvu6bIpBdy%2Fthh6wBnSUQqpeYSb%2FQQMuEE2jD67wU2Lyw6%2Bt5kYFV95kBq4AwY%2FIT13lx4mc8RqlvI9ap4Y5LQwfs4Jy183EFFhoRRP4HDNP1nqnMaQeM1SR4JaXXtLF6Aid%2BGQsx8GBWawxc%2FUCVufFkOzIANN%2BEkNmuleEnButWEVr8waCVzjqQPNYVKiHtodDC851LYHwC%2B5YxsraMyun8mUm3qBERpmXCqAVV%2FJXJ3WWXtQdPNfgznp8TZbMmAPK1FSlBn5MKdiIaYjUuyk2QcJwAd%2FHd44ss1rWWsIhBPa2FalZA%2BD9URan5YGhdFCahQEJHsnFoIQkc2DpNfi2iEYYlHHV1vWA3iid7Z4b%2FWlm53dVI5OkKfZ4XZanF02%2FvelzL6GH6Zq4eHGwqhZh5YYe%2FDWVsACuQ4LWNJ742XL6%2BqopDqk1YNl1n5N2BLHxqVYbU6AwHHVVL2WKQvkcOI80MJ1z483fbD0LDDt%2Bs3EBjqkASVRrJ9DtMhVM7YpnPwr9obJY8ys9M3l2PlJbDRsOPCMYj6Ic%2FUi1eN0NtmDzeIp5cshV%2Bzw8Yxq2YZvbi8A93KzR21ThlJ1Cp1o1wSDhRSzbPs5uh4fdfWAAMa27tuHaab9VppJ85Kft%2BrhGuA2HfrLKer63RzjLRy4U8OvxhVY%2Bw9boW6E7D9TCQ8cw67QHP5322WtEZBposzMFEQwsEkLuuqM&X-Amz-Signature=d347f5222850ee36bb0ba151a1637df56eda87367502018a4f3fe0c6a62008f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMRA6HU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCcQlkKyoActLnJbSGJpKZh3RpnJ8muh%2BxDaNZ9%2FU2AvwIhAIFhZ7Mt%2BUGnhTankj6G%2BwBzzRBecc4%2BbR%2BnQNEqr%2BD2Kv8DCHkQABoMNjM3NDIzMTgzODA1IgwKap5mbQLLhUlDGIwq3APLJtaWlQ%2FduAyUjWm6Ygqd9mpKf%2Btiy%2BsbOd5ulHIjv7pI8hHCrvMEmoqc5JAE2jLnYEjFJEqPv%2FbRdVStptxsmVZWHmHl3ntC1UQzL%2FX9hXS0rbwz04OeegxJPvnOr9ihAhL47OgWjrC6kxmyDLvu6bIpBdy%2Fthh6wBnSUQqpeYSb%2FQQMuEE2jD67wU2Lyw6%2Bt5kYFV95kBq4AwY%2FIT13lx4mc8RqlvI9ap4Y5LQwfs4Jy183EFFhoRRP4HDNP1nqnMaQeM1SR4JaXXtLF6Aid%2BGQsx8GBWawxc%2FUCVufFkOzIANN%2BEkNmuleEnButWEVr8waCVzjqQPNYVKiHtodDC851LYHwC%2B5YxsraMyun8mUm3qBERpmXCqAVV%2FJXJ3WWXtQdPNfgznp8TZbMmAPK1FSlBn5MKdiIaYjUuyk2QcJwAd%2FHd44ss1rWWsIhBPa2FalZA%2BD9URan5YGhdFCahQEJHsnFoIQkc2DpNfi2iEYYlHHV1vWA3iid7Z4b%2FWlm53dVI5OkKfZ4XZanF02%2FvelzL6GH6Zq4eHGwqhZh5YYe%2FDWVsACuQ4LWNJ742XL6%2BqopDqk1YNl1n5N2BLHxqVYbU6AwHHVVL2WKQvkcOI80MJ1z483fbD0LDDt%2Bs3EBjqkASVRrJ9DtMhVM7YpnPwr9obJY8ys9M3l2PlJbDRsOPCMYj6Ic%2FUi1eN0NtmDzeIp5cshV%2Bzw8Yxq2YZvbi8A93KzR21ThlJ1Cp1o1wSDhRSzbPs5uh4fdfWAAMa27tuHaab9VppJ85Kft%2BrhGuA2HfrLKer63RzjLRy4U8OvxhVY%2Bw9boW6E7D9TCQ8cw67QHP5322WtEZBposzMFEQwsEkLuuqM&X-Amz-Signature=2a653ad66cc2058e79d205b785305b0cb74435fed2d7d82aa71605d08de7eda6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMRA6HU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCcQlkKyoActLnJbSGJpKZh3RpnJ8muh%2BxDaNZ9%2FU2AvwIhAIFhZ7Mt%2BUGnhTankj6G%2BwBzzRBecc4%2BbR%2BnQNEqr%2BD2Kv8DCHkQABoMNjM3NDIzMTgzODA1IgwKap5mbQLLhUlDGIwq3APLJtaWlQ%2FduAyUjWm6Ygqd9mpKf%2Btiy%2BsbOd5ulHIjv7pI8hHCrvMEmoqc5JAE2jLnYEjFJEqPv%2FbRdVStptxsmVZWHmHl3ntC1UQzL%2FX9hXS0rbwz04OeegxJPvnOr9ihAhL47OgWjrC6kxmyDLvu6bIpBdy%2Fthh6wBnSUQqpeYSb%2FQQMuEE2jD67wU2Lyw6%2Bt5kYFV95kBq4AwY%2FIT13lx4mc8RqlvI9ap4Y5LQwfs4Jy183EFFhoRRP4HDNP1nqnMaQeM1SR4JaXXtLF6Aid%2BGQsx8GBWawxc%2FUCVufFkOzIANN%2BEkNmuleEnButWEVr8waCVzjqQPNYVKiHtodDC851LYHwC%2B5YxsraMyun8mUm3qBERpmXCqAVV%2FJXJ3WWXtQdPNfgznp8TZbMmAPK1FSlBn5MKdiIaYjUuyk2QcJwAd%2FHd44ss1rWWsIhBPa2FalZA%2BD9URan5YGhdFCahQEJHsnFoIQkc2DpNfi2iEYYlHHV1vWA3iid7Z4b%2FWlm53dVI5OkKfZ4XZanF02%2FvelzL6GH6Zq4eHGwqhZh5YYe%2FDWVsACuQ4LWNJ742XL6%2BqopDqk1YNl1n5N2BLHxqVYbU6AwHHVVL2WKQvkcOI80MJ1z483fbD0LDDt%2Bs3EBjqkASVRrJ9DtMhVM7YpnPwr9obJY8ys9M3l2PlJbDRsOPCMYj6Ic%2FUi1eN0NtmDzeIp5cshV%2Bzw8Yxq2YZvbi8A93KzR21ThlJ1Cp1o1wSDhRSzbPs5uh4fdfWAAMa27tuHaab9VppJ85Kft%2BrhGuA2HfrLKer63RzjLRy4U8OvxhVY%2Bw9boW6E7D9TCQ8cw67QHP5322WtEZBposzMFEQwsEkLuuqM&X-Amz-Signature=d59edd34018784c846b861484b2c95b1301680f9f891fb758d6ff5746b05c021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMRA6HU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCcQlkKyoActLnJbSGJpKZh3RpnJ8muh%2BxDaNZ9%2FU2AvwIhAIFhZ7Mt%2BUGnhTankj6G%2BwBzzRBecc4%2BbR%2BnQNEqr%2BD2Kv8DCHkQABoMNjM3NDIzMTgzODA1IgwKap5mbQLLhUlDGIwq3APLJtaWlQ%2FduAyUjWm6Ygqd9mpKf%2Btiy%2BsbOd5ulHIjv7pI8hHCrvMEmoqc5JAE2jLnYEjFJEqPv%2FbRdVStptxsmVZWHmHl3ntC1UQzL%2FX9hXS0rbwz04OeegxJPvnOr9ihAhL47OgWjrC6kxmyDLvu6bIpBdy%2Fthh6wBnSUQqpeYSb%2FQQMuEE2jD67wU2Lyw6%2Bt5kYFV95kBq4AwY%2FIT13lx4mc8RqlvI9ap4Y5LQwfs4Jy183EFFhoRRP4HDNP1nqnMaQeM1SR4JaXXtLF6Aid%2BGQsx8GBWawxc%2FUCVufFkOzIANN%2BEkNmuleEnButWEVr8waCVzjqQPNYVKiHtodDC851LYHwC%2B5YxsraMyun8mUm3qBERpmXCqAVV%2FJXJ3WWXtQdPNfgznp8TZbMmAPK1FSlBn5MKdiIaYjUuyk2QcJwAd%2FHd44ss1rWWsIhBPa2FalZA%2BD9URan5YGhdFCahQEJHsnFoIQkc2DpNfi2iEYYlHHV1vWA3iid7Z4b%2FWlm53dVI5OkKfZ4XZanF02%2FvelzL6GH6Zq4eHGwqhZh5YYe%2FDWVsACuQ4LWNJ742XL6%2BqopDqk1YNl1n5N2BLHxqVYbU6AwHHVVL2WKQvkcOI80MJ1z483fbD0LDDt%2Bs3EBjqkASVRrJ9DtMhVM7YpnPwr9obJY8ys9M3l2PlJbDRsOPCMYj6Ic%2FUi1eN0NtmDzeIp5cshV%2Bzw8Yxq2YZvbi8A93KzR21ThlJ1Cp1o1wSDhRSzbPs5uh4fdfWAAMa27tuHaab9VppJ85Kft%2BrhGuA2HfrLKer63RzjLRy4U8OvxhVY%2Bw9boW6E7D9TCQ8cw67QHP5322WtEZBposzMFEQwsEkLuuqM&X-Amz-Signature=322cb629a775c51e53a469a92378435ce0b2f7ff9275806c8aed7fa3cc4dd106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMRA6HU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCcQlkKyoActLnJbSGJpKZh3RpnJ8muh%2BxDaNZ9%2FU2AvwIhAIFhZ7Mt%2BUGnhTankj6G%2BwBzzRBecc4%2BbR%2BnQNEqr%2BD2Kv8DCHkQABoMNjM3NDIzMTgzODA1IgwKap5mbQLLhUlDGIwq3APLJtaWlQ%2FduAyUjWm6Ygqd9mpKf%2Btiy%2BsbOd5ulHIjv7pI8hHCrvMEmoqc5JAE2jLnYEjFJEqPv%2FbRdVStptxsmVZWHmHl3ntC1UQzL%2FX9hXS0rbwz04OeegxJPvnOr9ihAhL47OgWjrC6kxmyDLvu6bIpBdy%2Fthh6wBnSUQqpeYSb%2FQQMuEE2jD67wU2Lyw6%2Bt5kYFV95kBq4AwY%2FIT13lx4mc8RqlvI9ap4Y5LQwfs4Jy183EFFhoRRP4HDNP1nqnMaQeM1SR4JaXXtLF6Aid%2BGQsx8GBWawxc%2FUCVufFkOzIANN%2BEkNmuleEnButWEVr8waCVzjqQPNYVKiHtodDC851LYHwC%2B5YxsraMyun8mUm3qBERpmXCqAVV%2FJXJ3WWXtQdPNfgznp8TZbMmAPK1FSlBn5MKdiIaYjUuyk2QcJwAd%2FHd44ss1rWWsIhBPa2FalZA%2BD9URan5YGhdFCahQEJHsnFoIQkc2DpNfi2iEYYlHHV1vWA3iid7Z4b%2FWlm53dVI5OkKfZ4XZanF02%2FvelzL6GH6Zq4eHGwqhZh5YYe%2FDWVsACuQ4LWNJ742XL6%2BqopDqk1YNl1n5N2BLHxqVYbU6AwHHVVL2WKQvkcOI80MJ1z483fbD0LDDt%2Bs3EBjqkASVRrJ9DtMhVM7YpnPwr9obJY8ys9M3l2PlJbDRsOPCMYj6Ic%2FUi1eN0NtmDzeIp5cshV%2Bzw8Yxq2YZvbi8A93KzR21ThlJ1Cp1o1wSDhRSzbPs5uh4fdfWAAMa27tuHaab9VppJ85Kft%2BrhGuA2HfrLKer63RzjLRy4U8OvxhVY%2Bw9boW6E7D9TCQ8cw67QHP5322WtEZBposzMFEQwsEkLuuqM&X-Amz-Signature=cc3552dc08888828f3fc7331a1e30d6ee126af246a047c19899cd9099fe40a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMRA6HU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCcQlkKyoActLnJbSGJpKZh3RpnJ8muh%2BxDaNZ9%2FU2AvwIhAIFhZ7Mt%2BUGnhTankj6G%2BwBzzRBecc4%2BbR%2BnQNEqr%2BD2Kv8DCHkQABoMNjM3NDIzMTgzODA1IgwKap5mbQLLhUlDGIwq3APLJtaWlQ%2FduAyUjWm6Ygqd9mpKf%2Btiy%2BsbOd5ulHIjv7pI8hHCrvMEmoqc5JAE2jLnYEjFJEqPv%2FbRdVStptxsmVZWHmHl3ntC1UQzL%2FX9hXS0rbwz04OeegxJPvnOr9ihAhL47OgWjrC6kxmyDLvu6bIpBdy%2Fthh6wBnSUQqpeYSb%2FQQMuEE2jD67wU2Lyw6%2Bt5kYFV95kBq4AwY%2FIT13lx4mc8RqlvI9ap4Y5LQwfs4Jy183EFFhoRRP4HDNP1nqnMaQeM1SR4JaXXtLF6Aid%2BGQsx8GBWawxc%2FUCVufFkOzIANN%2BEkNmuleEnButWEVr8waCVzjqQPNYVKiHtodDC851LYHwC%2B5YxsraMyun8mUm3qBERpmXCqAVV%2FJXJ3WWXtQdPNfgznp8TZbMmAPK1FSlBn5MKdiIaYjUuyk2QcJwAd%2FHd44ss1rWWsIhBPa2FalZA%2BD9URan5YGhdFCahQEJHsnFoIQkc2DpNfi2iEYYlHHV1vWA3iid7Z4b%2FWlm53dVI5OkKfZ4XZanF02%2FvelzL6GH6Zq4eHGwqhZh5YYe%2FDWVsACuQ4LWNJ742XL6%2BqopDqk1YNl1n5N2BLHxqVYbU6AwHHVVL2WKQvkcOI80MJ1z483fbD0LDDt%2Bs3EBjqkASVRrJ9DtMhVM7YpnPwr9obJY8ys9M3l2PlJbDRsOPCMYj6Ic%2FUi1eN0NtmDzeIp5cshV%2Bzw8Yxq2YZvbi8A93KzR21ThlJ1Cp1o1wSDhRSzbPs5uh4fdfWAAMa27tuHaab9VppJ85Kft%2BrhGuA2HfrLKer63RzjLRy4U8OvxhVY%2Bw9boW6E7D9TCQ8cw67QHP5322WtEZBposzMFEQwsEkLuuqM&X-Amz-Signature=2c2a3c539f7aab298b7c98c31bb008f444414b172cf76ef8e6cdbdbdfd8b2cdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMRA6HU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCcQlkKyoActLnJbSGJpKZh3RpnJ8muh%2BxDaNZ9%2FU2AvwIhAIFhZ7Mt%2BUGnhTankj6G%2BwBzzRBecc4%2BbR%2BnQNEqr%2BD2Kv8DCHkQABoMNjM3NDIzMTgzODA1IgwKap5mbQLLhUlDGIwq3APLJtaWlQ%2FduAyUjWm6Ygqd9mpKf%2Btiy%2BsbOd5ulHIjv7pI8hHCrvMEmoqc5JAE2jLnYEjFJEqPv%2FbRdVStptxsmVZWHmHl3ntC1UQzL%2FX9hXS0rbwz04OeegxJPvnOr9ihAhL47OgWjrC6kxmyDLvu6bIpBdy%2Fthh6wBnSUQqpeYSb%2FQQMuEE2jD67wU2Lyw6%2Bt5kYFV95kBq4AwY%2FIT13lx4mc8RqlvI9ap4Y5LQwfs4Jy183EFFhoRRP4HDNP1nqnMaQeM1SR4JaXXtLF6Aid%2BGQsx8GBWawxc%2FUCVufFkOzIANN%2BEkNmuleEnButWEVr8waCVzjqQPNYVKiHtodDC851LYHwC%2B5YxsraMyun8mUm3qBERpmXCqAVV%2FJXJ3WWXtQdPNfgznp8TZbMmAPK1FSlBn5MKdiIaYjUuyk2QcJwAd%2FHd44ss1rWWsIhBPa2FalZA%2BD9URan5YGhdFCahQEJHsnFoIQkc2DpNfi2iEYYlHHV1vWA3iid7Z4b%2FWlm53dVI5OkKfZ4XZanF02%2FvelzL6GH6Zq4eHGwqhZh5YYe%2FDWVsACuQ4LWNJ742XL6%2BqopDqk1YNl1n5N2BLHxqVYbU6AwHHVVL2WKQvkcOI80MJ1z483fbD0LDDt%2Bs3EBjqkASVRrJ9DtMhVM7YpnPwr9obJY8ys9M3l2PlJbDRsOPCMYj6Ic%2FUi1eN0NtmDzeIp5cshV%2Bzw8Yxq2YZvbi8A93KzR21ThlJ1Cp1o1wSDhRSzbPs5uh4fdfWAAMa27tuHaab9VppJ85Kft%2BrhGuA2HfrLKer63RzjLRy4U8OvxhVY%2Bw9boW6E7D9TCQ8cw67QHP5322WtEZBposzMFEQwsEkLuuqM&X-Amz-Signature=75728adabafa248018d886b4d05a401f85b26d8d98269b92519b6fe3381b3b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMRA6HU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCcQlkKyoActLnJbSGJpKZh3RpnJ8muh%2BxDaNZ9%2FU2AvwIhAIFhZ7Mt%2BUGnhTankj6G%2BwBzzRBecc4%2BbR%2BnQNEqr%2BD2Kv8DCHkQABoMNjM3NDIzMTgzODA1IgwKap5mbQLLhUlDGIwq3APLJtaWlQ%2FduAyUjWm6Ygqd9mpKf%2Btiy%2BsbOd5ulHIjv7pI8hHCrvMEmoqc5JAE2jLnYEjFJEqPv%2FbRdVStptxsmVZWHmHl3ntC1UQzL%2FX9hXS0rbwz04OeegxJPvnOr9ihAhL47OgWjrC6kxmyDLvu6bIpBdy%2Fthh6wBnSUQqpeYSb%2FQQMuEE2jD67wU2Lyw6%2Bt5kYFV95kBq4AwY%2FIT13lx4mc8RqlvI9ap4Y5LQwfs4Jy183EFFhoRRP4HDNP1nqnMaQeM1SR4JaXXtLF6Aid%2BGQsx8GBWawxc%2FUCVufFkOzIANN%2BEkNmuleEnButWEVr8waCVzjqQPNYVKiHtodDC851LYHwC%2B5YxsraMyun8mUm3qBERpmXCqAVV%2FJXJ3WWXtQdPNfgznp8TZbMmAPK1FSlBn5MKdiIaYjUuyk2QcJwAd%2FHd44ss1rWWsIhBPa2FalZA%2BD9URan5YGhdFCahQEJHsnFoIQkc2DpNfi2iEYYlHHV1vWA3iid7Z4b%2FWlm53dVI5OkKfZ4XZanF02%2FvelzL6GH6Zq4eHGwqhZh5YYe%2FDWVsACuQ4LWNJ742XL6%2BqopDqk1YNl1n5N2BLHxqVYbU6AwHHVVL2WKQvkcOI80MJ1z483fbD0LDDt%2Bs3EBjqkASVRrJ9DtMhVM7YpnPwr9obJY8ys9M3l2PlJbDRsOPCMYj6Ic%2FUi1eN0NtmDzeIp5cshV%2Bzw8Yxq2YZvbi8A93KzR21ThlJ1Cp1o1wSDhRSzbPs5uh4fdfWAAMa27tuHaab9VppJ85Kft%2BrhGuA2HfrLKer63RzjLRy4U8OvxhVY%2Bw9boW6E7D9TCQ8cw67QHP5322WtEZBposzMFEQwsEkLuuqM&X-Amz-Signature=a8c97ec862bfa138176fceb95821305a54ac67f143f7b612bc624b00e01445c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
