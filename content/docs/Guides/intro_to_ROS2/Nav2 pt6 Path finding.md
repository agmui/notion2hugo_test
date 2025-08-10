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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNUNPIQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkJ2vYYWf%2B4%2FrF1G%2FAwr%2FBl5oLwPozq6PaOPo1J0yoRAIhAI9C0DTNgJhn6CRI%2BAYC2KPso4rFT8eotymI2mA1%2B%2FJQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0%2FsXgLW32jsmmdsQq3AMnz6oBbHCLf8qwmmaJDYfiBRziKc0OMImBMaqNTWYg7egIeAmuWNHUjQPVv1nFGyYRxO4caktfsL902KkVV%2BSq1Qznsc9hT%2B%2FNNYp7ZIxEAupBiLs7iYXgiIDtakGXYSxmEq1sCCEg5TP7aegumkSwqYoKar0RVzXsWoVDu7QWhRg0%2BKLqghdGPf7YPxApKgWFmGa65Ll7%2Fu9AS4TGG5dBadaGZjlRG9njp40TytwRSvjVbD4Of4eDNQzxoPEIXF9Jx1hePWuFSu7%2BMjUUKeUyYtkdbgq%2FK19R6hq2IMsUFk64eJO96aLIs8DRVTcHObD9O0ooWxUFY6JjCxUf92EzP7nhbIGudTZLTRgR5YlkMsrUe4LKLMSClumaTebyH5YuC89FP5XpiomX9au3QqBgdwjmyPn7aUEkYBAn%2F9NRCLmdLit2QsT08bjSnpc0gOydQdIGPbma7ejG4efioyVQHig6jpKOn7guyycyezFBkyME89hhWraIFRmagsTbi%2BeekWMLrPVmy6ZRU4T%2FMb%2FlYpRbcldqGUaFmYYAUa6xtZ57qRrIinlWiwtDYLuLoUgvroyXKwS6VY2SkxLOpC7GcAtTA5azCrm285l56hVqmj4ZR5a5vMR915iCHDD%2BuuPEBjqkAfysxsfl4WyuMDJ6uej8CvksyY24%2F1R9G%2B1k3Eeg1h%2BmHeR0KQpCaTuuXP9eP8jyRwjv8JxdrtsZcnxUMaW1Rc%2FhQ52AJnacq42XeI4fly4NNcqWDVzlZsHL%2F60FARyvdBYbqrg63Wy5aKPjYee2vCMZJAD%2FL69fIYbgXa%2BB89d%2BYyS2MAdt6TfH6u6%2Bkp0OLCIgXeHt6mws%2FpPhiT6qgKvN7GMf&X-Amz-Signature=d4185f641cc8a0e2ba3564cfe7c1f555f2f6c0245e9f864c6d62c6c65b0207e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNUNPIQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkJ2vYYWf%2B4%2FrF1G%2FAwr%2FBl5oLwPozq6PaOPo1J0yoRAIhAI9C0DTNgJhn6CRI%2BAYC2KPso4rFT8eotymI2mA1%2B%2FJQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0%2FsXgLW32jsmmdsQq3AMnz6oBbHCLf8qwmmaJDYfiBRziKc0OMImBMaqNTWYg7egIeAmuWNHUjQPVv1nFGyYRxO4caktfsL902KkVV%2BSq1Qznsc9hT%2B%2FNNYp7ZIxEAupBiLs7iYXgiIDtakGXYSxmEq1sCCEg5TP7aegumkSwqYoKar0RVzXsWoVDu7QWhRg0%2BKLqghdGPf7YPxApKgWFmGa65Ll7%2Fu9AS4TGG5dBadaGZjlRG9njp40TytwRSvjVbD4Of4eDNQzxoPEIXF9Jx1hePWuFSu7%2BMjUUKeUyYtkdbgq%2FK19R6hq2IMsUFk64eJO96aLIs8DRVTcHObD9O0ooWxUFY6JjCxUf92EzP7nhbIGudTZLTRgR5YlkMsrUe4LKLMSClumaTebyH5YuC89FP5XpiomX9au3QqBgdwjmyPn7aUEkYBAn%2F9NRCLmdLit2QsT08bjSnpc0gOydQdIGPbma7ejG4efioyVQHig6jpKOn7guyycyezFBkyME89hhWraIFRmagsTbi%2BeekWMLrPVmy6ZRU4T%2FMb%2FlYpRbcldqGUaFmYYAUa6xtZ57qRrIinlWiwtDYLuLoUgvroyXKwS6VY2SkxLOpC7GcAtTA5azCrm285l56hVqmj4ZR5a5vMR915iCHDD%2BuuPEBjqkAfysxsfl4WyuMDJ6uej8CvksyY24%2F1R9G%2B1k3Eeg1h%2BmHeR0KQpCaTuuXP9eP8jyRwjv8JxdrtsZcnxUMaW1Rc%2FhQ52AJnacq42XeI4fly4NNcqWDVzlZsHL%2F60FARyvdBYbqrg63Wy5aKPjYee2vCMZJAD%2FL69fIYbgXa%2BB89d%2BYyS2MAdt6TfH6u6%2Bkp0OLCIgXeHt6mws%2FpPhiT6qgKvN7GMf&X-Amz-Signature=f336a0c3e401417b2e4422f7b6361911b496a72a62e66c4bf02ed706bc57e45e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNUNPIQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkJ2vYYWf%2B4%2FrF1G%2FAwr%2FBl5oLwPozq6PaOPo1J0yoRAIhAI9C0DTNgJhn6CRI%2BAYC2KPso4rFT8eotymI2mA1%2B%2FJQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0%2FsXgLW32jsmmdsQq3AMnz6oBbHCLf8qwmmaJDYfiBRziKc0OMImBMaqNTWYg7egIeAmuWNHUjQPVv1nFGyYRxO4caktfsL902KkVV%2BSq1Qznsc9hT%2B%2FNNYp7ZIxEAupBiLs7iYXgiIDtakGXYSxmEq1sCCEg5TP7aegumkSwqYoKar0RVzXsWoVDu7QWhRg0%2BKLqghdGPf7YPxApKgWFmGa65Ll7%2Fu9AS4TGG5dBadaGZjlRG9njp40TytwRSvjVbD4Of4eDNQzxoPEIXF9Jx1hePWuFSu7%2BMjUUKeUyYtkdbgq%2FK19R6hq2IMsUFk64eJO96aLIs8DRVTcHObD9O0ooWxUFY6JjCxUf92EzP7nhbIGudTZLTRgR5YlkMsrUe4LKLMSClumaTebyH5YuC89FP5XpiomX9au3QqBgdwjmyPn7aUEkYBAn%2F9NRCLmdLit2QsT08bjSnpc0gOydQdIGPbma7ejG4efioyVQHig6jpKOn7guyycyezFBkyME89hhWraIFRmagsTbi%2BeekWMLrPVmy6ZRU4T%2FMb%2FlYpRbcldqGUaFmYYAUa6xtZ57qRrIinlWiwtDYLuLoUgvroyXKwS6VY2SkxLOpC7GcAtTA5azCrm285l56hVqmj4ZR5a5vMR915iCHDD%2BuuPEBjqkAfysxsfl4WyuMDJ6uej8CvksyY24%2F1R9G%2B1k3Eeg1h%2BmHeR0KQpCaTuuXP9eP8jyRwjv8JxdrtsZcnxUMaW1Rc%2FhQ52AJnacq42XeI4fly4NNcqWDVzlZsHL%2F60FARyvdBYbqrg63Wy5aKPjYee2vCMZJAD%2FL69fIYbgXa%2BB89d%2BYyS2MAdt6TfH6u6%2Bkp0OLCIgXeHt6mws%2FpPhiT6qgKvN7GMf&X-Amz-Signature=e5feb04ff68713f07c5e6f52fad6dae13afb55f4f0ed226e53a282f6eaa74ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNUNPIQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkJ2vYYWf%2B4%2FrF1G%2FAwr%2FBl5oLwPozq6PaOPo1J0yoRAIhAI9C0DTNgJhn6CRI%2BAYC2KPso4rFT8eotymI2mA1%2B%2FJQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0%2FsXgLW32jsmmdsQq3AMnz6oBbHCLf8qwmmaJDYfiBRziKc0OMImBMaqNTWYg7egIeAmuWNHUjQPVv1nFGyYRxO4caktfsL902KkVV%2BSq1Qznsc9hT%2B%2FNNYp7ZIxEAupBiLs7iYXgiIDtakGXYSxmEq1sCCEg5TP7aegumkSwqYoKar0RVzXsWoVDu7QWhRg0%2BKLqghdGPf7YPxApKgWFmGa65Ll7%2Fu9AS4TGG5dBadaGZjlRG9njp40TytwRSvjVbD4Of4eDNQzxoPEIXF9Jx1hePWuFSu7%2BMjUUKeUyYtkdbgq%2FK19R6hq2IMsUFk64eJO96aLIs8DRVTcHObD9O0ooWxUFY6JjCxUf92EzP7nhbIGudTZLTRgR5YlkMsrUe4LKLMSClumaTebyH5YuC89FP5XpiomX9au3QqBgdwjmyPn7aUEkYBAn%2F9NRCLmdLit2QsT08bjSnpc0gOydQdIGPbma7ejG4efioyVQHig6jpKOn7guyycyezFBkyME89hhWraIFRmagsTbi%2BeekWMLrPVmy6ZRU4T%2FMb%2FlYpRbcldqGUaFmYYAUa6xtZ57qRrIinlWiwtDYLuLoUgvroyXKwS6VY2SkxLOpC7GcAtTA5azCrm285l56hVqmj4ZR5a5vMR915iCHDD%2BuuPEBjqkAfysxsfl4WyuMDJ6uej8CvksyY24%2F1R9G%2B1k3Eeg1h%2BmHeR0KQpCaTuuXP9eP8jyRwjv8JxdrtsZcnxUMaW1Rc%2FhQ52AJnacq42XeI4fly4NNcqWDVzlZsHL%2F60FARyvdBYbqrg63Wy5aKPjYee2vCMZJAD%2FL69fIYbgXa%2BB89d%2BYyS2MAdt6TfH6u6%2Bkp0OLCIgXeHt6mws%2FpPhiT6qgKvN7GMf&X-Amz-Signature=9b53db4156c91e4a48ee0b92365f515d56a8480662d1e3c5f939a3fe227febe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNUNPIQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkJ2vYYWf%2B4%2FrF1G%2FAwr%2FBl5oLwPozq6PaOPo1J0yoRAIhAI9C0DTNgJhn6CRI%2BAYC2KPso4rFT8eotymI2mA1%2B%2FJQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0%2FsXgLW32jsmmdsQq3AMnz6oBbHCLf8qwmmaJDYfiBRziKc0OMImBMaqNTWYg7egIeAmuWNHUjQPVv1nFGyYRxO4caktfsL902KkVV%2BSq1Qznsc9hT%2B%2FNNYp7ZIxEAupBiLs7iYXgiIDtakGXYSxmEq1sCCEg5TP7aegumkSwqYoKar0RVzXsWoVDu7QWhRg0%2BKLqghdGPf7YPxApKgWFmGa65Ll7%2Fu9AS4TGG5dBadaGZjlRG9njp40TytwRSvjVbD4Of4eDNQzxoPEIXF9Jx1hePWuFSu7%2BMjUUKeUyYtkdbgq%2FK19R6hq2IMsUFk64eJO96aLIs8DRVTcHObD9O0ooWxUFY6JjCxUf92EzP7nhbIGudTZLTRgR5YlkMsrUe4LKLMSClumaTebyH5YuC89FP5XpiomX9au3QqBgdwjmyPn7aUEkYBAn%2F9NRCLmdLit2QsT08bjSnpc0gOydQdIGPbma7ejG4efioyVQHig6jpKOn7guyycyezFBkyME89hhWraIFRmagsTbi%2BeekWMLrPVmy6ZRU4T%2FMb%2FlYpRbcldqGUaFmYYAUa6xtZ57qRrIinlWiwtDYLuLoUgvroyXKwS6VY2SkxLOpC7GcAtTA5azCrm285l56hVqmj4ZR5a5vMR915iCHDD%2BuuPEBjqkAfysxsfl4WyuMDJ6uej8CvksyY24%2F1R9G%2B1k3Eeg1h%2BmHeR0KQpCaTuuXP9eP8jyRwjv8JxdrtsZcnxUMaW1Rc%2FhQ52AJnacq42XeI4fly4NNcqWDVzlZsHL%2F60FARyvdBYbqrg63Wy5aKPjYee2vCMZJAD%2FL69fIYbgXa%2BB89d%2BYyS2MAdt6TfH6u6%2Bkp0OLCIgXeHt6mws%2FpPhiT6qgKvN7GMf&X-Amz-Signature=d1b1455e76d8e57539c5cf391390936d9b49503f2d2b704dc7a5cbcfde0080b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNUNPIQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkJ2vYYWf%2B4%2FrF1G%2FAwr%2FBl5oLwPozq6PaOPo1J0yoRAIhAI9C0DTNgJhn6CRI%2BAYC2KPso4rFT8eotymI2mA1%2B%2FJQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0%2FsXgLW32jsmmdsQq3AMnz6oBbHCLf8qwmmaJDYfiBRziKc0OMImBMaqNTWYg7egIeAmuWNHUjQPVv1nFGyYRxO4caktfsL902KkVV%2BSq1Qznsc9hT%2B%2FNNYp7ZIxEAupBiLs7iYXgiIDtakGXYSxmEq1sCCEg5TP7aegumkSwqYoKar0RVzXsWoVDu7QWhRg0%2BKLqghdGPf7YPxApKgWFmGa65Ll7%2Fu9AS4TGG5dBadaGZjlRG9njp40TytwRSvjVbD4Of4eDNQzxoPEIXF9Jx1hePWuFSu7%2BMjUUKeUyYtkdbgq%2FK19R6hq2IMsUFk64eJO96aLIs8DRVTcHObD9O0ooWxUFY6JjCxUf92EzP7nhbIGudTZLTRgR5YlkMsrUe4LKLMSClumaTebyH5YuC89FP5XpiomX9au3QqBgdwjmyPn7aUEkYBAn%2F9NRCLmdLit2QsT08bjSnpc0gOydQdIGPbma7ejG4efioyVQHig6jpKOn7guyycyezFBkyME89hhWraIFRmagsTbi%2BeekWMLrPVmy6ZRU4T%2FMb%2FlYpRbcldqGUaFmYYAUa6xtZ57qRrIinlWiwtDYLuLoUgvroyXKwS6VY2SkxLOpC7GcAtTA5azCrm285l56hVqmj4ZR5a5vMR915iCHDD%2BuuPEBjqkAfysxsfl4WyuMDJ6uej8CvksyY24%2F1R9G%2B1k3Eeg1h%2BmHeR0KQpCaTuuXP9eP8jyRwjv8JxdrtsZcnxUMaW1Rc%2FhQ52AJnacq42XeI4fly4NNcqWDVzlZsHL%2F60FARyvdBYbqrg63Wy5aKPjYee2vCMZJAD%2FL69fIYbgXa%2BB89d%2BYyS2MAdt6TfH6u6%2Bkp0OLCIgXeHt6mws%2FpPhiT6qgKvN7GMf&X-Amz-Signature=0d67b981050bc95f89054eb34f266b7a209352ba03eaef0bd3e734f6e1a52045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNUNPIQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkJ2vYYWf%2B4%2FrF1G%2FAwr%2FBl5oLwPozq6PaOPo1J0yoRAIhAI9C0DTNgJhn6CRI%2BAYC2KPso4rFT8eotymI2mA1%2B%2FJQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0%2FsXgLW32jsmmdsQq3AMnz6oBbHCLf8qwmmaJDYfiBRziKc0OMImBMaqNTWYg7egIeAmuWNHUjQPVv1nFGyYRxO4caktfsL902KkVV%2BSq1Qznsc9hT%2B%2FNNYp7ZIxEAupBiLs7iYXgiIDtakGXYSxmEq1sCCEg5TP7aegumkSwqYoKar0RVzXsWoVDu7QWhRg0%2BKLqghdGPf7YPxApKgWFmGa65Ll7%2Fu9AS4TGG5dBadaGZjlRG9njp40TytwRSvjVbD4Of4eDNQzxoPEIXF9Jx1hePWuFSu7%2BMjUUKeUyYtkdbgq%2FK19R6hq2IMsUFk64eJO96aLIs8DRVTcHObD9O0ooWxUFY6JjCxUf92EzP7nhbIGudTZLTRgR5YlkMsrUe4LKLMSClumaTebyH5YuC89FP5XpiomX9au3QqBgdwjmyPn7aUEkYBAn%2F9NRCLmdLit2QsT08bjSnpc0gOydQdIGPbma7ejG4efioyVQHig6jpKOn7guyycyezFBkyME89hhWraIFRmagsTbi%2BeekWMLrPVmy6ZRU4T%2FMb%2FlYpRbcldqGUaFmYYAUa6xtZ57qRrIinlWiwtDYLuLoUgvroyXKwS6VY2SkxLOpC7GcAtTA5azCrm285l56hVqmj4ZR5a5vMR915iCHDD%2BuuPEBjqkAfysxsfl4WyuMDJ6uej8CvksyY24%2F1R9G%2B1k3Eeg1h%2BmHeR0KQpCaTuuXP9eP8jyRwjv8JxdrtsZcnxUMaW1Rc%2FhQ52AJnacq42XeI4fly4NNcqWDVzlZsHL%2F60FARyvdBYbqrg63Wy5aKPjYee2vCMZJAD%2FL69fIYbgXa%2BB89d%2BYyS2MAdt6TfH6u6%2Bkp0OLCIgXeHt6mws%2FpPhiT6qgKvN7GMf&X-Amz-Signature=9e25688cbae0dea4501fc46a75560b56717b4b982dc2411ecf770a9043fe29e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNUNPIQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkJ2vYYWf%2B4%2FrF1G%2FAwr%2FBl5oLwPozq6PaOPo1J0yoRAIhAI9C0DTNgJhn6CRI%2BAYC2KPso4rFT8eotymI2mA1%2B%2FJQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0%2FsXgLW32jsmmdsQq3AMnz6oBbHCLf8qwmmaJDYfiBRziKc0OMImBMaqNTWYg7egIeAmuWNHUjQPVv1nFGyYRxO4caktfsL902KkVV%2BSq1Qznsc9hT%2B%2FNNYp7ZIxEAupBiLs7iYXgiIDtakGXYSxmEq1sCCEg5TP7aegumkSwqYoKar0RVzXsWoVDu7QWhRg0%2BKLqghdGPf7YPxApKgWFmGa65Ll7%2Fu9AS4TGG5dBadaGZjlRG9njp40TytwRSvjVbD4Of4eDNQzxoPEIXF9Jx1hePWuFSu7%2BMjUUKeUyYtkdbgq%2FK19R6hq2IMsUFk64eJO96aLIs8DRVTcHObD9O0ooWxUFY6JjCxUf92EzP7nhbIGudTZLTRgR5YlkMsrUe4LKLMSClumaTebyH5YuC89FP5XpiomX9au3QqBgdwjmyPn7aUEkYBAn%2F9NRCLmdLit2QsT08bjSnpc0gOydQdIGPbma7ejG4efioyVQHig6jpKOn7guyycyezFBkyME89hhWraIFRmagsTbi%2BeekWMLrPVmy6ZRU4T%2FMb%2FlYpRbcldqGUaFmYYAUa6xtZ57qRrIinlWiwtDYLuLoUgvroyXKwS6VY2SkxLOpC7GcAtTA5azCrm285l56hVqmj4ZR5a5vMR915iCHDD%2BuuPEBjqkAfysxsfl4WyuMDJ6uej8CvksyY24%2F1R9G%2B1k3Eeg1h%2BmHeR0KQpCaTuuXP9eP8jyRwjv8JxdrtsZcnxUMaW1Rc%2FhQ52AJnacq42XeI4fly4NNcqWDVzlZsHL%2F60FARyvdBYbqrg63Wy5aKPjYee2vCMZJAD%2FL69fIYbgXa%2BB89d%2BYyS2MAdt6TfH6u6%2Bkp0OLCIgXeHt6mws%2FpPhiT6qgKvN7GMf&X-Amz-Signature=f8450266ca54dea0ecd8fb01450496b7fffe9c57b1449e531968528e1003d73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNUNPIQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkJ2vYYWf%2B4%2FrF1G%2FAwr%2FBl5oLwPozq6PaOPo1J0yoRAIhAI9C0DTNgJhn6CRI%2BAYC2KPso4rFT8eotymI2mA1%2B%2FJQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0%2FsXgLW32jsmmdsQq3AMnz6oBbHCLf8qwmmaJDYfiBRziKc0OMImBMaqNTWYg7egIeAmuWNHUjQPVv1nFGyYRxO4caktfsL902KkVV%2BSq1Qznsc9hT%2B%2FNNYp7ZIxEAupBiLs7iYXgiIDtakGXYSxmEq1sCCEg5TP7aegumkSwqYoKar0RVzXsWoVDu7QWhRg0%2BKLqghdGPf7YPxApKgWFmGa65Ll7%2Fu9AS4TGG5dBadaGZjlRG9njp40TytwRSvjVbD4Of4eDNQzxoPEIXF9Jx1hePWuFSu7%2BMjUUKeUyYtkdbgq%2FK19R6hq2IMsUFk64eJO96aLIs8DRVTcHObD9O0ooWxUFY6JjCxUf92EzP7nhbIGudTZLTRgR5YlkMsrUe4LKLMSClumaTebyH5YuC89FP5XpiomX9au3QqBgdwjmyPn7aUEkYBAn%2F9NRCLmdLit2QsT08bjSnpc0gOydQdIGPbma7ejG4efioyVQHig6jpKOn7guyycyezFBkyME89hhWraIFRmagsTbi%2BeekWMLrPVmy6ZRU4T%2FMb%2FlYpRbcldqGUaFmYYAUa6xtZ57qRrIinlWiwtDYLuLoUgvroyXKwS6VY2SkxLOpC7GcAtTA5azCrm285l56hVqmj4ZR5a5vMR915iCHDD%2BuuPEBjqkAfysxsfl4WyuMDJ6uej8CvksyY24%2F1R9G%2B1k3Eeg1h%2BmHeR0KQpCaTuuXP9eP8jyRwjv8JxdrtsZcnxUMaW1Rc%2FhQ52AJnacq42XeI4fly4NNcqWDVzlZsHL%2F60FARyvdBYbqrg63Wy5aKPjYee2vCMZJAD%2FL69fIYbgXa%2BB89d%2BYyS2MAdt6TfH6u6%2Bkp0OLCIgXeHt6mws%2FpPhiT6qgKvN7GMf&X-Amz-Signature=281d779c33b63eb10e8130ab2f4f5e3f42b6e4e3be1ca5b0ca47f338a744a0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNUNPIQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkJ2vYYWf%2B4%2FrF1G%2FAwr%2FBl5oLwPozq6PaOPo1J0yoRAIhAI9C0DTNgJhn6CRI%2BAYC2KPso4rFT8eotymI2mA1%2B%2FJQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0%2FsXgLW32jsmmdsQq3AMnz6oBbHCLf8qwmmaJDYfiBRziKc0OMImBMaqNTWYg7egIeAmuWNHUjQPVv1nFGyYRxO4caktfsL902KkVV%2BSq1Qznsc9hT%2B%2FNNYp7ZIxEAupBiLs7iYXgiIDtakGXYSxmEq1sCCEg5TP7aegumkSwqYoKar0RVzXsWoVDu7QWhRg0%2BKLqghdGPf7YPxApKgWFmGa65Ll7%2Fu9AS4TGG5dBadaGZjlRG9njp40TytwRSvjVbD4Of4eDNQzxoPEIXF9Jx1hePWuFSu7%2BMjUUKeUyYtkdbgq%2FK19R6hq2IMsUFk64eJO96aLIs8DRVTcHObD9O0ooWxUFY6JjCxUf92EzP7nhbIGudTZLTRgR5YlkMsrUe4LKLMSClumaTebyH5YuC89FP5XpiomX9au3QqBgdwjmyPn7aUEkYBAn%2F9NRCLmdLit2QsT08bjSnpc0gOydQdIGPbma7ejG4efioyVQHig6jpKOn7guyycyezFBkyME89hhWraIFRmagsTbi%2BeekWMLrPVmy6ZRU4T%2FMb%2FlYpRbcldqGUaFmYYAUa6xtZ57qRrIinlWiwtDYLuLoUgvroyXKwS6VY2SkxLOpC7GcAtTA5azCrm285l56hVqmj4ZR5a5vMR915iCHDD%2BuuPEBjqkAfysxsfl4WyuMDJ6uej8CvksyY24%2F1R9G%2B1k3Eeg1h%2BmHeR0KQpCaTuuXP9eP8jyRwjv8JxdrtsZcnxUMaW1Rc%2FhQ52AJnacq42XeI4fly4NNcqWDVzlZsHL%2F60FARyvdBYbqrg63Wy5aKPjYee2vCMZJAD%2FL69fIYbgXa%2BB89d%2BYyS2MAdt6TfH6u6%2Bkp0OLCIgXeHt6mws%2FpPhiT6qgKvN7GMf&X-Amz-Signature=6bf8b086b324f9f516880a20e202a73ebb08c5b9a1885e828b26324b8dc6ead3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNUNPIQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkJ2vYYWf%2B4%2FrF1G%2FAwr%2FBl5oLwPozq6PaOPo1J0yoRAIhAI9C0DTNgJhn6CRI%2BAYC2KPso4rFT8eotymI2mA1%2B%2FJQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0%2FsXgLW32jsmmdsQq3AMnz6oBbHCLf8qwmmaJDYfiBRziKc0OMImBMaqNTWYg7egIeAmuWNHUjQPVv1nFGyYRxO4caktfsL902KkVV%2BSq1Qznsc9hT%2B%2FNNYp7ZIxEAupBiLs7iYXgiIDtakGXYSxmEq1sCCEg5TP7aegumkSwqYoKar0RVzXsWoVDu7QWhRg0%2BKLqghdGPf7YPxApKgWFmGa65Ll7%2Fu9AS4TGG5dBadaGZjlRG9njp40TytwRSvjVbD4Of4eDNQzxoPEIXF9Jx1hePWuFSu7%2BMjUUKeUyYtkdbgq%2FK19R6hq2IMsUFk64eJO96aLIs8DRVTcHObD9O0ooWxUFY6JjCxUf92EzP7nhbIGudTZLTRgR5YlkMsrUe4LKLMSClumaTebyH5YuC89FP5XpiomX9au3QqBgdwjmyPn7aUEkYBAn%2F9NRCLmdLit2QsT08bjSnpc0gOydQdIGPbma7ejG4efioyVQHig6jpKOn7guyycyezFBkyME89hhWraIFRmagsTbi%2BeekWMLrPVmy6ZRU4T%2FMb%2FlYpRbcldqGUaFmYYAUa6xtZ57qRrIinlWiwtDYLuLoUgvroyXKwS6VY2SkxLOpC7GcAtTA5azCrm285l56hVqmj4ZR5a5vMR915iCHDD%2BuuPEBjqkAfysxsfl4WyuMDJ6uej8CvksyY24%2F1R9G%2B1k3Eeg1h%2BmHeR0KQpCaTuuXP9eP8jyRwjv8JxdrtsZcnxUMaW1Rc%2FhQ52AJnacq42XeI4fly4NNcqWDVzlZsHL%2F60FARyvdBYbqrg63Wy5aKPjYee2vCMZJAD%2FL69fIYbgXa%2BB89d%2BYyS2MAdt6TfH6u6%2Bkp0OLCIgXeHt6mws%2FpPhiT6qgKvN7GMf&X-Amz-Signature=c63f49e6e174050dbad9f56ad6f559690dc1560c9084fab30de1d0f64e89f466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNUNPIQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkJ2vYYWf%2B4%2FrF1G%2FAwr%2FBl5oLwPozq6PaOPo1J0yoRAIhAI9C0DTNgJhn6CRI%2BAYC2KPso4rFT8eotymI2mA1%2B%2FJQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0%2FsXgLW32jsmmdsQq3AMnz6oBbHCLf8qwmmaJDYfiBRziKc0OMImBMaqNTWYg7egIeAmuWNHUjQPVv1nFGyYRxO4caktfsL902KkVV%2BSq1Qznsc9hT%2B%2FNNYp7ZIxEAupBiLs7iYXgiIDtakGXYSxmEq1sCCEg5TP7aegumkSwqYoKar0RVzXsWoVDu7QWhRg0%2BKLqghdGPf7YPxApKgWFmGa65Ll7%2Fu9AS4TGG5dBadaGZjlRG9njp40TytwRSvjVbD4Of4eDNQzxoPEIXF9Jx1hePWuFSu7%2BMjUUKeUyYtkdbgq%2FK19R6hq2IMsUFk64eJO96aLIs8DRVTcHObD9O0ooWxUFY6JjCxUf92EzP7nhbIGudTZLTRgR5YlkMsrUe4LKLMSClumaTebyH5YuC89FP5XpiomX9au3QqBgdwjmyPn7aUEkYBAn%2F9NRCLmdLit2QsT08bjSnpc0gOydQdIGPbma7ejG4efioyVQHig6jpKOn7guyycyezFBkyME89hhWraIFRmagsTbi%2BeekWMLrPVmy6ZRU4T%2FMb%2FlYpRbcldqGUaFmYYAUa6xtZ57qRrIinlWiwtDYLuLoUgvroyXKwS6VY2SkxLOpC7GcAtTA5azCrm285l56hVqmj4ZR5a5vMR915iCHDD%2BuuPEBjqkAfysxsfl4WyuMDJ6uej8CvksyY24%2F1R9G%2B1k3Eeg1h%2BmHeR0KQpCaTuuXP9eP8jyRwjv8JxdrtsZcnxUMaW1Rc%2FhQ52AJnacq42XeI4fly4NNcqWDVzlZsHL%2F60FARyvdBYbqrg63Wy5aKPjYee2vCMZJAD%2FL69fIYbgXa%2BB89d%2BYyS2MAdt6TfH6u6%2Bkp0OLCIgXeHt6mws%2FpPhiT6qgKvN7GMf&X-Amz-Signature=20991deb1d344d363a7c53c9a5df413717f8e5fb7f56d12fa7e981d776e2a5f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNUNPIQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkJ2vYYWf%2B4%2FrF1G%2FAwr%2FBl5oLwPozq6PaOPo1J0yoRAIhAI9C0DTNgJhn6CRI%2BAYC2KPso4rFT8eotymI2mA1%2B%2FJQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0%2FsXgLW32jsmmdsQq3AMnz6oBbHCLf8qwmmaJDYfiBRziKc0OMImBMaqNTWYg7egIeAmuWNHUjQPVv1nFGyYRxO4caktfsL902KkVV%2BSq1Qznsc9hT%2B%2FNNYp7ZIxEAupBiLs7iYXgiIDtakGXYSxmEq1sCCEg5TP7aegumkSwqYoKar0RVzXsWoVDu7QWhRg0%2BKLqghdGPf7YPxApKgWFmGa65Ll7%2Fu9AS4TGG5dBadaGZjlRG9njp40TytwRSvjVbD4Of4eDNQzxoPEIXF9Jx1hePWuFSu7%2BMjUUKeUyYtkdbgq%2FK19R6hq2IMsUFk64eJO96aLIs8DRVTcHObD9O0ooWxUFY6JjCxUf92EzP7nhbIGudTZLTRgR5YlkMsrUe4LKLMSClumaTebyH5YuC89FP5XpiomX9au3QqBgdwjmyPn7aUEkYBAn%2F9NRCLmdLit2QsT08bjSnpc0gOydQdIGPbma7ejG4efioyVQHig6jpKOn7guyycyezFBkyME89hhWraIFRmagsTbi%2BeekWMLrPVmy6ZRU4T%2FMb%2FlYpRbcldqGUaFmYYAUa6xtZ57qRrIinlWiwtDYLuLoUgvroyXKwS6VY2SkxLOpC7GcAtTA5azCrm285l56hVqmj4ZR5a5vMR915iCHDD%2BuuPEBjqkAfysxsfl4WyuMDJ6uej8CvksyY24%2F1R9G%2B1k3Eeg1h%2BmHeR0KQpCaTuuXP9eP8jyRwjv8JxdrtsZcnxUMaW1Rc%2FhQ52AJnacq42XeI4fly4NNcqWDVzlZsHL%2F60FARyvdBYbqrg63Wy5aKPjYee2vCMZJAD%2FL69fIYbgXa%2BB89d%2BYyS2MAdt6TfH6u6%2Bkp0OLCIgXeHt6mws%2FpPhiT6qgKvN7GMf&X-Amz-Signature=199c8336f93e577833543377a7a01d2546e74fb8dc9e9b11fb938f2fd77918f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
