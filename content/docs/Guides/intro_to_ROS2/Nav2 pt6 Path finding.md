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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7HYOAQ4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCEZ9OW%2BNaQDaBufnouSLos8giDKH5RIRUKeOHLEjbbBQIhAOF%2FkwRC%2BRm15%2FhDvqh5Cg6ifaFzG4G5nzfU8M8jHYjhKv8DCD0QABoMNjM3NDIzMTgzODA1IgwHT58J2ACQvdmThlgq3AOucrQ5uKYmATVt9TzhmBS2YD4BFbXYFCockOabIo%2BVtRdavNdoVXQS45ymx%2F2eb%2B5GxSvT6FxS1y7NvDMRmuumXXJRphjYVSoTB5F3cL3QBsAtnRKEZkVUH%2BRdYubRUhS2wNtW%2FkVoKwH2VlV9XblRucWBOFem7ZeimEg8ibOHbLpPqNRbw8%2F02lkaKSgWBwrt%2B7KhbmdiXTQ3hhBJqDWBfxJelvUzMVcB7CL0FWsTreIXDNR8HWWNlKjE3xizGGLZDzLDdLsuphvgm4AmLGB1c%2BoV5DjbEr6Ji4gROKYR%2Fi2vfpSF0oJh8ZgjZ9so3eYR063pGZOEvZWXL%2BtV0IC7pcAd3MhfWJJdJdxBVENPC9SuOQhO%2FC5NAr2QpCR6othOUuneqv4YuzLrqN0ARKOKzRj9ApyET7Joh07H0NxiNgbFPzNAEmNztQvR1UznV%2FNkPl%2Bj2k4Qys2jufcan98eCcIT%2FOTWayUh6RygfYfH4OUH%2FwN8TSVM%2B%2BRZye5G5%2F5Ct14AiuBQE%2FXDhs7CrvqfRULSzdaV0PlilW%2FFssFGswRIJhT3bOMgjdvmjgeoia5w%2BSkot%2BnXrHgisxXs%2Fsjbrn56CTVurVTATO5321kYqVk%2BMmdeY1LkZP9EDjDi6cDEBjqkAWA72tNd1m7Bo2QcTV0ksMXIIKRwTAU0J9fFo3QNg9Cj4LYKk18WzOuTSi3t2TZ4dgAXApfEq%2BFL%2FBmdH0i3Y6yTCXIMjjwNn6RVG4lDcPXFRoc%2BM46P8yYk6q%2FWZF1uhJ9YI9NLhdAXB3Wd5hwRc6IicpoeH2SebiuTHsKOlCL9EmtontGuhscjdhfDnOI03Zrn7Swjj6P%2Fc0Zqlk%2FxKVbzL7z3&X-Amz-Signature=e05a1f78fca0a0543c17a46776fe9939f8fbba73b5334fc84604293183cfaa42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7HYOAQ4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCEZ9OW%2BNaQDaBufnouSLos8giDKH5RIRUKeOHLEjbbBQIhAOF%2FkwRC%2BRm15%2FhDvqh5Cg6ifaFzG4G5nzfU8M8jHYjhKv8DCD0QABoMNjM3NDIzMTgzODA1IgwHT58J2ACQvdmThlgq3AOucrQ5uKYmATVt9TzhmBS2YD4BFbXYFCockOabIo%2BVtRdavNdoVXQS45ymx%2F2eb%2B5GxSvT6FxS1y7NvDMRmuumXXJRphjYVSoTB5F3cL3QBsAtnRKEZkVUH%2BRdYubRUhS2wNtW%2FkVoKwH2VlV9XblRucWBOFem7ZeimEg8ibOHbLpPqNRbw8%2F02lkaKSgWBwrt%2B7KhbmdiXTQ3hhBJqDWBfxJelvUzMVcB7CL0FWsTreIXDNR8HWWNlKjE3xizGGLZDzLDdLsuphvgm4AmLGB1c%2BoV5DjbEr6Ji4gROKYR%2Fi2vfpSF0oJh8ZgjZ9so3eYR063pGZOEvZWXL%2BtV0IC7pcAd3MhfWJJdJdxBVENPC9SuOQhO%2FC5NAr2QpCR6othOUuneqv4YuzLrqN0ARKOKzRj9ApyET7Joh07H0NxiNgbFPzNAEmNztQvR1UznV%2FNkPl%2Bj2k4Qys2jufcan98eCcIT%2FOTWayUh6RygfYfH4OUH%2FwN8TSVM%2B%2BRZye5G5%2F5Ct14AiuBQE%2FXDhs7CrvqfRULSzdaV0PlilW%2FFssFGswRIJhT3bOMgjdvmjgeoia5w%2BSkot%2BnXrHgisxXs%2Fsjbrn56CTVurVTATO5321kYqVk%2BMmdeY1LkZP9EDjDi6cDEBjqkAWA72tNd1m7Bo2QcTV0ksMXIIKRwTAU0J9fFo3QNg9Cj4LYKk18WzOuTSi3t2TZ4dgAXApfEq%2BFL%2FBmdH0i3Y6yTCXIMjjwNn6RVG4lDcPXFRoc%2BM46P8yYk6q%2FWZF1uhJ9YI9NLhdAXB3Wd5hwRc6IicpoeH2SebiuTHsKOlCL9EmtontGuhscjdhfDnOI03Zrn7Swjj6P%2Fc0Zqlk%2FxKVbzL7z3&X-Amz-Signature=93fe2bd726098dc5b938bae99adc574125bf09cd94bc1a5e011e527732a60c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7HYOAQ4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCEZ9OW%2BNaQDaBufnouSLos8giDKH5RIRUKeOHLEjbbBQIhAOF%2FkwRC%2BRm15%2FhDvqh5Cg6ifaFzG4G5nzfU8M8jHYjhKv8DCD0QABoMNjM3NDIzMTgzODA1IgwHT58J2ACQvdmThlgq3AOucrQ5uKYmATVt9TzhmBS2YD4BFbXYFCockOabIo%2BVtRdavNdoVXQS45ymx%2F2eb%2B5GxSvT6FxS1y7NvDMRmuumXXJRphjYVSoTB5F3cL3QBsAtnRKEZkVUH%2BRdYubRUhS2wNtW%2FkVoKwH2VlV9XblRucWBOFem7ZeimEg8ibOHbLpPqNRbw8%2F02lkaKSgWBwrt%2B7KhbmdiXTQ3hhBJqDWBfxJelvUzMVcB7CL0FWsTreIXDNR8HWWNlKjE3xizGGLZDzLDdLsuphvgm4AmLGB1c%2BoV5DjbEr6Ji4gROKYR%2Fi2vfpSF0oJh8ZgjZ9so3eYR063pGZOEvZWXL%2BtV0IC7pcAd3MhfWJJdJdxBVENPC9SuOQhO%2FC5NAr2QpCR6othOUuneqv4YuzLrqN0ARKOKzRj9ApyET7Joh07H0NxiNgbFPzNAEmNztQvR1UznV%2FNkPl%2Bj2k4Qys2jufcan98eCcIT%2FOTWayUh6RygfYfH4OUH%2FwN8TSVM%2B%2BRZye5G5%2F5Ct14AiuBQE%2FXDhs7CrvqfRULSzdaV0PlilW%2FFssFGswRIJhT3bOMgjdvmjgeoia5w%2BSkot%2BnXrHgisxXs%2Fsjbrn56CTVurVTATO5321kYqVk%2BMmdeY1LkZP9EDjDi6cDEBjqkAWA72tNd1m7Bo2QcTV0ksMXIIKRwTAU0J9fFo3QNg9Cj4LYKk18WzOuTSi3t2TZ4dgAXApfEq%2BFL%2FBmdH0i3Y6yTCXIMjjwNn6RVG4lDcPXFRoc%2BM46P8yYk6q%2FWZF1uhJ9YI9NLhdAXB3Wd5hwRc6IicpoeH2SebiuTHsKOlCL9EmtontGuhscjdhfDnOI03Zrn7Swjj6P%2Fc0Zqlk%2FxKVbzL7z3&X-Amz-Signature=e3c5516484e70a8fe5157cc8f3f023ea68576ebaf70c3069cd3a6131bd80d656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7HYOAQ4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCEZ9OW%2BNaQDaBufnouSLos8giDKH5RIRUKeOHLEjbbBQIhAOF%2FkwRC%2BRm15%2FhDvqh5Cg6ifaFzG4G5nzfU8M8jHYjhKv8DCD0QABoMNjM3NDIzMTgzODA1IgwHT58J2ACQvdmThlgq3AOucrQ5uKYmATVt9TzhmBS2YD4BFbXYFCockOabIo%2BVtRdavNdoVXQS45ymx%2F2eb%2B5GxSvT6FxS1y7NvDMRmuumXXJRphjYVSoTB5F3cL3QBsAtnRKEZkVUH%2BRdYubRUhS2wNtW%2FkVoKwH2VlV9XblRucWBOFem7ZeimEg8ibOHbLpPqNRbw8%2F02lkaKSgWBwrt%2B7KhbmdiXTQ3hhBJqDWBfxJelvUzMVcB7CL0FWsTreIXDNR8HWWNlKjE3xizGGLZDzLDdLsuphvgm4AmLGB1c%2BoV5DjbEr6Ji4gROKYR%2Fi2vfpSF0oJh8ZgjZ9so3eYR063pGZOEvZWXL%2BtV0IC7pcAd3MhfWJJdJdxBVENPC9SuOQhO%2FC5NAr2QpCR6othOUuneqv4YuzLrqN0ARKOKzRj9ApyET7Joh07H0NxiNgbFPzNAEmNztQvR1UznV%2FNkPl%2Bj2k4Qys2jufcan98eCcIT%2FOTWayUh6RygfYfH4OUH%2FwN8TSVM%2B%2BRZye5G5%2F5Ct14AiuBQE%2FXDhs7CrvqfRULSzdaV0PlilW%2FFssFGswRIJhT3bOMgjdvmjgeoia5w%2BSkot%2BnXrHgisxXs%2Fsjbrn56CTVurVTATO5321kYqVk%2BMmdeY1LkZP9EDjDi6cDEBjqkAWA72tNd1m7Bo2QcTV0ksMXIIKRwTAU0J9fFo3QNg9Cj4LYKk18WzOuTSi3t2TZ4dgAXApfEq%2BFL%2FBmdH0i3Y6yTCXIMjjwNn6RVG4lDcPXFRoc%2BM46P8yYk6q%2FWZF1uhJ9YI9NLhdAXB3Wd5hwRc6IicpoeH2SebiuTHsKOlCL9EmtontGuhscjdhfDnOI03Zrn7Swjj6P%2Fc0Zqlk%2FxKVbzL7z3&X-Amz-Signature=65549287077a7204bd18ea147c65971adc3aa1cf7a5673e576526b994fc98026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7HYOAQ4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCEZ9OW%2BNaQDaBufnouSLos8giDKH5RIRUKeOHLEjbbBQIhAOF%2FkwRC%2BRm15%2FhDvqh5Cg6ifaFzG4G5nzfU8M8jHYjhKv8DCD0QABoMNjM3NDIzMTgzODA1IgwHT58J2ACQvdmThlgq3AOucrQ5uKYmATVt9TzhmBS2YD4BFbXYFCockOabIo%2BVtRdavNdoVXQS45ymx%2F2eb%2B5GxSvT6FxS1y7NvDMRmuumXXJRphjYVSoTB5F3cL3QBsAtnRKEZkVUH%2BRdYubRUhS2wNtW%2FkVoKwH2VlV9XblRucWBOFem7ZeimEg8ibOHbLpPqNRbw8%2F02lkaKSgWBwrt%2B7KhbmdiXTQ3hhBJqDWBfxJelvUzMVcB7CL0FWsTreIXDNR8HWWNlKjE3xizGGLZDzLDdLsuphvgm4AmLGB1c%2BoV5DjbEr6Ji4gROKYR%2Fi2vfpSF0oJh8ZgjZ9so3eYR063pGZOEvZWXL%2BtV0IC7pcAd3MhfWJJdJdxBVENPC9SuOQhO%2FC5NAr2QpCR6othOUuneqv4YuzLrqN0ARKOKzRj9ApyET7Joh07H0NxiNgbFPzNAEmNztQvR1UznV%2FNkPl%2Bj2k4Qys2jufcan98eCcIT%2FOTWayUh6RygfYfH4OUH%2FwN8TSVM%2B%2BRZye5G5%2F5Ct14AiuBQE%2FXDhs7CrvqfRULSzdaV0PlilW%2FFssFGswRIJhT3bOMgjdvmjgeoia5w%2BSkot%2BnXrHgisxXs%2Fsjbrn56CTVurVTATO5321kYqVk%2BMmdeY1LkZP9EDjDi6cDEBjqkAWA72tNd1m7Bo2QcTV0ksMXIIKRwTAU0J9fFo3QNg9Cj4LYKk18WzOuTSi3t2TZ4dgAXApfEq%2BFL%2FBmdH0i3Y6yTCXIMjjwNn6RVG4lDcPXFRoc%2BM46P8yYk6q%2FWZF1uhJ9YI9NLhdAXB3Wd5hwRc6IicpoeH2SebiuTHsKOlCL9EmtontGuhscjdhfDnOI03Zrn7Swjj6P%2Fc0Zqlk%2FxKVbzL7z3&X-Amz-Signature=c36d8f980a971849709f981c0a463d6babd7d892d27c4b8a62666bb4b030424d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7HYOAQ4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCEZ9OW%2BNaQDaBufnouSLos8giDKH5RIRUKeOHLEjbbBQIhAOF%2FkwRC%2BRm15%2FhDvqh5Cg6ifaFzG4G5nzfU8M8jHYjhKv8DCD0QABoMNjM3NDIzMTgzODA1IgwHT58J2ACQvdmThlgq3AOucrQ5uKYmATVt9TzhmBS2YD4BFbXYFCockOabIo%2BVtRdavNdoVXQS45ymx%2F2eb%2B5GxSvT6FxS1y7NvDMRmuumXXJRphjYVSoTB5F3cL3QBsAtnRKEZkVUH%2BRdYubRUhS2wNtW%2FkVoKwH2VlV9XblRucWBOFem7ZeimEg8ibOHbLpPqNRbw8%2F02lkaKSgWBwrt%2B7KhbmdiXTQ3hhBJqDWBfxJelvUzMVcB7CL0FWsTreIXDNR8HWWNlKjE3xizGGLZDzLDdLsuphvgm4AmLGB1c%2BoV5DjbEr6Ji4gROKYR%2Fi2vfpSF0oJh8ZgjZ9so3eYR063pGZOEvZWXL%2BtV0IC7pcAd3MhfWJJdJdxBVENPC9SuOQhO%2FC5NAr2QpCR6othOUuneqv4YuzLrqN0ARKOKzRj9ApyET7Joh07H0NxiNgbFPzNAEmNztQvR1UznV%2FNkPl%2Bj2k4Qys2jufcan98eCcIT%2FOTWayUh6RygfYfH4OUH%2FwN8TSVM%2B%2BRZye5G5%2F5Ct14AiuBQE%2FXDhs7CrvqfRULSzdaV0PlilW%2FFssFGswRIJhT3bOMgjdvmjgeoia5w%2BSkot%2BnXrHgisxXs%2Fsjbrn56CTVurVTATO5321kYqVk%2BMmdeY1LkZP9EDjDi6cDEBjqkAWA72tNd1m7Bo2QcTV0ksMXIIKRwTAU0J9fFo3QNg9Cj4LYKk18WzOuTSi3t2TZ4dgAXApfEq%2BFL%2FBmdH0i3Y6yTCXIMjjwNn6RVG4lDcPXFRoc%2BM46P8yYk6q%2FWZF1uhJ9YI9NLhdAXB3Wd5hwRc6IicpoeH2SebiuTHsKOlCL9EmtontGuhscjdhfDnOI03Zrn7Swjj6P%2Fc0Zqlk%2FxKVbzL7z3&X-Amz-Signature=dc7975e5a9896347a9f6691f118b05626a82fd18fb032b7ef4263cb3d7c465ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7HYOAQ4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCEZ9OW%2BNaQDaBufnouSLos8giDKH5RIRUKeOHLEjbbBQIhAOF%2FkwRC%2BRm15%2FhDvqh5Cg6ifaFzG4G5nzfU8M8jHYjhKv8DCD0QABoMNjM3NDIzMTgzODA1IgwHT58J2ACQvdmThlgq3AOucrQ5uKYmATVt9TzhmBS2YD4BFbXYFCockOabIo%2BVtRdavNdoVXQS45ymx%2F2eb%2B5GxSvT6FxS1y7NvDMRmuumXXJRphjYVSoTB5F3cL3QBsAtnRKEZkVUH%2BRdYubRUhS2wNtW%2FkVoKwH2VlV9XblRucWBOFem7ZeimEg8ibOHbLpPqNRbw8%2F02lkaKSgWBwrt%2B7KhbmdiXTQ3hhBJqDWBfxJelvUzMVcB7CL0FWsTreIXDNR8HWWNlKjE3xizGGLZDzLDdLsuphvgm4AmLGB1c%2BoV5DjbEr6Ji4gROKYR%2Fi2vfpSF0oJh8ZgjZ9so3eYR063pGZOEvZWXL%2BtV0IC7pcAd3MhfWJJdJdxBVENPC9SuOQhO%2FC5NAr2QpCR6othOUuneqv4YuzLrqN0ARKOKzRj9ApyET7Joh07H0NxiNgbFPzNAEmNztQvR1UznV%2FNkPl%2Bj2k4Qys2jufcan98eCcIT%2FOTWayUh6RygfYfH4OUH%2FwN8TSVM%2B%2BRZye5G5%2F5Ct14AiuBQE%2FXDhs7CrvqfRULSzdaV0PlilW%2FFssFGswRIJhT3bOMgjdvmjgeoia5w%2BSkot%2BnXrHgisxXs%2Fsjbrn56CTVurVTATO5321kYqVk%2BMmdeY1LkZP9EDjDi6cDEBjqkAWA72tNd1m7Bo2QcTV0ksMXIIKRwTAU0J9fFo3QNg9Cj4LYKk18WzOuTSi3t2TZ4dgAXApfEq%2BFL%2FBmdH0i3Y6yTCXIMjjwNn6RVG4lDcPXFRoc%2BM46P8yYk6q%2FWZF1uhJ9YI9NLhdAXB3Wd5hwRc6IicpoeH2SebiuTHsKOlCL9EmtontGuhscjdhfDnOI03Zrn7Swjj6P%2Fc0Zqlk%2FxKVbzL7z3&X-Amz-Signature=b748b8c17d38bb6d976cbc6ec1d3a97461a3104292d885ed9639e470a8d43cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7HYOAQ4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCEZ9OW%2BNaQDaBufnouSLos8giDKH5RIRUKeOHLEjbbBQIhAOF%2FkwRC%2BRm15%2FhDvqh5Cg6ifaFzG4G5nzfU8M8jHYjhKv8DCD0QABoMNjM3NDIzMTgzODA1IgwHT58J2ACQvdmThlgq3AOucrQ5uKYmATVt9TzhmBS2YD4BFbXYFCockOabIo%2BVtRdavNdoVXQS45ymx%2F2eb%2B5GxSvT6FxS1y7NvDMRmuumXXJRphjYVSoTB5F3cL3QBsAtnRKEZkVUH%2BRdYubRUhS2wNtW%2FkVoKwH2VlV9XblRucWBOFem7ZeimEg8ibOHbLpPqNRbw8%2F02lkaKSgWBwrt%2B7KhbmdiXTQ3hhBJqDWBfxJelvUzMVcB7CL0FWsTreIXDNR8HWWNlKjE3xizGGLZDzLDdLsuphvgm4AmLGB1c%2BoV5DjbEr6Ji4gROKYR%2Fi2vfpSF0oJh8ZgjZ9so3eYR063pGZOEvZWXL%2BtV0IC7pcAd3MhfWJJdJdxBVENPC9SuOQhO%2FC5NAr2QpCR6othOUuneqv4YuzLrqN0ARKOKzRj9ApyET7Joh07H0NxiNgbFPzNAEmNztQvR1UznV%2FNkPl%2Bj2k4Qys2jufcan98eCcIT%2FOTWayUh6RygfYfH4OUH%2FwN8TSVM%2B%2BRZye5G5%2F5Ct14AiuBQE%2FXDhs7CrvqfRULSzdaV0PlilW%2FFssFGswRIJhT3bOMgjdvmjgeoia5w%2BSkot%2BnXrHgisxXs%2Fsjbrn56CTVurVTATO5321kYqVk%2BMmdeY1LkZP9EDjDi6cDEBjqkAWA72tNd1m7Bo2QcTV0ksMXIIKRwTAU0J9fFo3QNg9Cj4LYKk18WzOuTSi3t2TZ4dgAXApfEq%2BFL%2FBmdH0i3Y6yTCXIMjjwNn6RVG4lDcPXFRoc%2BM46P8yYk6q%2FWZF1uhJ9YI9NLhdAXB3Wd5hwRc6IicpoeH2SebiuTHsKOlCL9EmtontGuhscjdhfDnOI03Zrn7Swjj6P%2Fc0Zqlk%2FxKVbzL7z3&X-Amz-Signature=ce279e89fa714245b81cacb9fa796d5e264f42096d8bbdf9267c4ff69cf34ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7HYOAQ4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCEZ9OW%2BNaQDaBufnouSLos8giDKH5RIRUKeOHLEjbbBQIhAOF%2FkwRC%2BRm15%2FhDvqh5Cg6ifaFzG4G5nzfU8M8jHYjhKv8DCD0QABoMNjM3NDIzMTgzODA1IgwHT58J2ACQvdmThlgq3AOucrQ5uKYmATVt9TzhmBS2YD4BFbXYFCockOabIo%2BVtRdavNdoVXQS45ymx%2F2eb%2B5GxSvT6FxS1y7NvDMRmuumXXJRphjYVSoTB5F3cL3QBsAtnRKEZkVUH%2BRdYubRUhS2wNtW%2FkVoKwH2VlV9XblRucWBOFem7ZeimEg8ibOHbLpPqNRbw8%2F02lkaKSgWBwrt%2B7KhbmdiXTQ3hhBJqDWBfxJelvUzMVcB7CL0FWsTreIXDNR8HWWNlKjE3xizGGLZDzLDdLsuphvgm4AmLGB1c%2BoV5DjbEr6Ji4gROKYR%2Fi2vfpSF0oJh8ZgjZ9so3eYR063pGZOEvZWXL%2BtV0IC7pcAd3MhfWJJdJdxBVENPC9SuOQhO%2FC5NAr2QpCR6othOUuneqv4YuzLrqN0ARKOKzRj9ApyET7Joh07H0NxiNgbFPzNAEmNztQvR1UznV%2FNkPl%2Bj2k4Qys2jufcan98eCcIT%2FOTWayUh6RygfYfH4OUH%2FwN8TSVM%2B%2BRZye5G5%2F5Ct14AiuBQE%2FXDhs7CrvqfRULSzdaV0PlilW%2FFssFGswRIJhT3bOMgjdvmjgeoia5w%2BSkot%2BnXrHgisxXs%2Fsjbrn56CTVurVTATO5321kYqVk%2BMmdeY1LkZP9EDjDi6cDEBjqkAWA72tNd1m7Bo2QcTV0ksMXIIKRwTAU0J9fFo3QNg9Cj4LYKk18WzOuTSi3t2TZ4dgAXApfEq%2BFL%2FBmdH0i3Y6yTCXIMjjwNn6RVG4lDcPXFRoc%2BM46P8yYk6q%2FWZF1uhJ9YI9NLhdAXB3Wd5hwRc6IicpoeH2SebiuTHsKOlCL9EmtontGuhscjdhfDnOI03Zrn7Swjj6P%2Fc0Zqlk%2FxKVbzL7z3&X-Amz-Signature=cc0c26e1e4215e26a155866ff096f91d934cbafcad25b5a2f97795814a37a10b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7HYOAQ4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCEZ9OW%2BNaQDaBufnouSLos8giDKH5RIRUKeOHLEjbbBQIhAOF%2FkwRC%2BRm15%2FhDvqh5Cg6ifaFzG4G5nzfU8M8jHYjhKv8DCD0QABoMNjM3NDIzMTgzODA1IgwHT58J2ACQvdmThlgq3AOucrQ5uKYmATVt9TzhmBS2YD4BFbXYFCockOabIo%2BVtRdavNdoVXQS45ymx%2F2eb%2B5GxSvT6FxS1y7NvDMRmuumXXJRphjYVSoTB5F3cL3QBsAtnRKEZkVUH%2BRdYubRUhS2wNtW%2FkVoKwH2VlV9XblRucWBOFem7ZeimEg8ibOHbLpPqNRbw8%2F02lkaKSgWBwrt%2B7KhbmdiXTQ3hhBJqDWBfxJelvUzMVcB7CL0FWsTreIXDNR8HWWNlKjE3xizGGLZDzLDdLsuphvgm4AmLGB1c%2BoV5DjbEr6Ji4gROKYR%2Fi2vfpSF0oJh8ZgjZ9so3eYR063pGZOEvZWXL%2BtV0IC7pcAd3MhfWJJdJdxBVENPC9SuOQhO%2FC5NAr2QpCR6othOUuneqv4YuzLrqN0ARKOKzRj9ApyET7Joh07H0NxiNgbFPzNAEmNztQvR1UznV%2FNkPl%2Bj2k4Qys2jufcan98eCcIT%2FOTWayUh6RygfYfH4OUH%2FwN8TSVM%2B%2BRZye5G5%2F5Ct14AiuBQE%2FXDhs7CrvqfRULSzdaV0PlilW%2FFssFGswRIJhT3bOMgjdvmjgeoia5w%2BSkot%2BnXrHgisxXs%2Fsjbrn56CTVurVTATO5321kYqVk%2BMmdeY1LkZP9EDjDi6cDEBjqkAWA72tNd1m7Bo2QcTV0ksMXIIKRwTAU0J9fFo3QNg9Cj4LYKk18WzOuTSi3t2TZ4dgAXApfEq%2BFL%2FBmdH0i3Y6yTCXIMjjwNn6RVG4lDcPXFRoc%2BM46P8yYk6q%2FWZF1uhJ9YI9NLhdAXB3Wd5hwRc6IicpoeH2SebiuTHsKOlCL9EmtontGuhscjdhfDnOI03Zrn7Swjj6P%2Fc0Zqlk%2FxKVbzL7z3&X-Amz-Signature=c66693adea10a169e2b777de063c523e9d3018b0db704440fbcfabadb6741572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7HYOAQ4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCEZ9OW%2BNaQDaBufnouSLos8giDKH5RIRUKeOHLEjbbBQIhAOF%2FkwRC%2BRm15%2FhDvqh5Cg6ifaFzG4G5nzfU8M8jHYjhKv8DCD0QABoMNjM3NDIzMTgzODA1IgwHT58J2ACQvdmThlgq3AOucrQ5uKYmATVt9TzhmBS2YD4BFbXYFCockOabIo%2BVtRdavNdoVXQS45ymx%2F2eb%2B5GxSvT6FxS1y7NvDMRmuumXXJRphjYVSoTB5F3cL3QBsAtnRKEZkVUH%2BRdYubRUhS2wNtW%2FkVoKwH2VlV9XblRucWBOFem7ZeimEg8ibOHbLpPqNRbw8%2F02lkaKSgWBwrt%2B7KhbmdiXTQ3hhBJqDWBfxJelvUzMVcB7CL0FWsTreIXDNR8HWWNlKjE3xizGGLZDzLDdLsuphvgm4AmLGB1c%2BoV5DjbEr6Ji4gROKYR%2Fi2vfpSF0oJh8ZgjZ9so3eYR063pGZOEvZWXL%2BtV0IC7pcAd3MhfWJJdJdxBVENPC9SuOQhO%2FC5NAr2QpCR6othOUuneqv4YuzLrqN0ARKOKzRj9ApyET7Joh07H0NxiNgbFPzNAEmNztQvR1UznV%2FNkPl%2Bj2k4Qys2jufcan98eCcIT%2FOTWayUh6RygfYfH4OUH%2FwN8TSVM%2B%2BRZye5G5%2F5Ct14AiuBQE%2FXDhs7CrvqfRULSzdaV0PlilW%2FFssFGswRIJhT3bOMgjdvmjgeoia5w%2BSkot%2BnXrHgisxXs%2Fsjbrn56CTVurVTATO5321kYqVk%2BMmdeY1LkZP9EDjDi6cDEBjqkAWA72tNd1m7Bo2QcTV0ksMXIIKRwTAU0J9fFo3QNg9Cj4LYKk18WzOuTSi3t2TZ4dgAXApfEq%2BFL%2FBmdH0i3Y6yTCXIMjjwNn6RVG4lDcPXFRoc%2BM46P8yYk6q%2FWZF1uhJ9YI9NLhdAXB3Wd5hwRc6IicpoeH2SebiuTHsKOlCL9EmtontGuhscjdhfDnOI03Zrn7Swjj6P%2Fc0Zqlk%2FxKVbzL7z3&X-Amz-Signature=ecea2ac1362b7acd4451a770bee1494e5792f43dbd5912f68bde4a0957d813de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7HYOAQ4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCEZ9OW%2BNaQDaBufnouSLos8giDKH5RIRUKeOHLEjbbBQIhAOF%2FkwRC%2BRm15%2FhDvqh5Cg6ifaFzG4G5nzfU8M8jHYjhKv8DCD0QABoMNjM3NDIzMTgzODA1IgwHT58J2ACQvdmThlgq3AOucrQ5uKYmATVt9TzhmBS2YD4BFbXYFCockOabIo%2BVtRdavNdoVXQS45ymx%2F2eb%2B5GxSvT6FxS1y7NvDMRmuumXXJRphjYVSoTB5F3cL3QBsAtnRKEZkVUH%2BRdYubRUhS2wNtW%2FkVoKwH2VlV9XblRucWBOFem7ZeimEg8ibOHbLpPqNRbw8%2F02lkaKSgWBwrt%2B7KhbmdiXTQ3hhBJqDWBfxJelvUzMVcB7CL0FWsTreIXDNR8HWWNlKjE3xizGGLZDzLDdLsuphvgm4AmLGB1c%2BoV5DjbEr6Ji4gROKYR%2Fi2vfpSF0oJh8ZgjZ9so3eYR063pGZOEvZWXL%2BtV0IC7pcAd3MhfWJJdJdxBVENPC9SuOQhO%2FC5NAr2QpCR6othOUuneqv4YuzLrqN0ARKOKzRj9ApyET7Joh07H0NxiNgbFPzNAEmNztQvR1UznV%2FNkPl%2Bj2k4Qys2jufcan98eCcIT%2FOTWayUh6RygfYfH4OUH%2FwN8TSVM%2B%2BRZye5G5%2F5Ct14AiuBQE%2FXDhs7CrvqfRULSzdaV0PlilW%2FFssFGswRIJhT3bOMgjdvmjgeoia5w%2BSkot%2BnXrHgisxXs%2Fsjbrn56CTVurVTATO5321kYqVk%2BMmdeY1LkZP9EDjDi6cDEBjqkAWA72tNd1m7Bo2QcTV0ksMXIIKRwTAU0J9fFo3QNg9Cj4LYKk18WzOuTSi3t2TZ4dgAXApfEq%2BFL%2FBmdH0i3Y6yTCXIMjjwNn6RVG4lDcPXFRoc%2BM46P8yYk6q%2FWZF1uhJ9YI9NLhdAXB3Wd5hwRc6IicpoeH2SebiuTHsKOlCL9EmtontGuhscjdhfDnOI03Zrn7Swjj6P%2Fc0Zqlk%2FxKVbzL7z3&X-Amz-Signature=747eb2908529a9a1f8df2b54fb8e0e374f69b6f148aec4373bc726f46d6edcff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7HYOAQ4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCEZ9OW%2BNaQDaBufnouSLos8giDKH5RIRUKeOHLEjbbBQIhAOF%2FkwRC%2BRm15%2FhDvqh5Cg6ifaFzG4G5nzfU8M8jHYjhKv8DCD0QABoMNjM3NDIzMTgzODA1IgwHT58J2ACQvdmThlgq3AOucrQ5uKYmATVt9TzhmBS2YD4BFbXYFCockOabIo%2BVtRdavNdoVXQS45ymx%2F2eb%2B5GxSvT6FxS1y7NvDMRmuumXXJRphjYVSoTB5F3cL3QBsAtnRKEZkVUH%2BRdYubRUhS2wNtW%2FkVoKwH2VlV9XblRucWBOFem7ZeimEg8ibOHbLpPqNRbw8%2F02lkaKSgWBwrt%2B7KhbmdiXTQ3hhBJqDWBfxJelvUzMVcB7CL0FWsTreIXDNR8HWWNlKjE3xizGGLZDzLDdLsuphvgm4AmLGB1c%2BoV5DjbEr6Ji4gROKYR%2Fi2vfpSF0oJh8ZgjZ9so3eYR063pGZOEvZWXL%2BtV0IC7pcAd3MhfWJJdJdxBVENPC9SuOQhO%2FC5NAr2QpCR6othOUuneqv4YuzLrqN0ARKOKzRj9ApyET7Joh07H0NxiNgbFPzNAEmNztQvR1UznV%2FNkPl%2Bj2k4Qys2jufcan98eCcIT%2FOTWayUh6RygfYfH4OUH%2FwN8TSVM%2B%2BRZye5G5%2F5Ct14AiuBQE%2FXDhs7CrvqfRULSzdaV0PlilW%2FFssFGswRIJhT3bOMgjdvmjgeoia5w%2BSkot%2BnXrHgisxXs%2Fsjbrn56CTVurVTATO5321kYqVk%2BMmdeY1LkZP9EDjDi6cDEBjqkAWA72tNd1m7Bo2QcTV0ksMXIIKRwTAU0J9fFo3QNg9Cj4LYKk18WzOuTSi3t2TZ4dgAXApfEq%2BFL%2FBmdH0i3Y6yTCXIMjjwNn6RVG4lDcPXFRoc%2BM46P8yYk6q%2FWZF1uhJ9YI9NLhdAXB3Wd5hwRc6IicpoeH2SebiuTHsKOlCL9EmtontGuhscjdhfDnOI03Zrn7Swjj6P%2Fc0Zqlk%2FxKVbzL7z3&X-Amz-Signature=6237f3c70c4c1b07343daa32bd6cb67b82a5cfad4ca048ae296fe9ad84693779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
