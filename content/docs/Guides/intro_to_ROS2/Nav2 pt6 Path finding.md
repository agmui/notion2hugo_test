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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIO3GHMS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCw4MffF5UeoVFBwN%2BsA2%2BhzWavaTK94TNsRYCH2HO2XQIhANMLdxf255%2BdqCMdi5HSGwxL4T8FxcQnRotYk3UMPAA7KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDRRi2pXDkn6MYopMq3APYc1o1ClCKm2z4%2BfbVwlfCHvMPZIA7zT%2B4zEgHDXHES35TUfuxYvToWwSRqWXiB5Hn2MHUghKYDh1kSbcI6a0AcmuNC2Krj2bBAg6IFabgvQsKsEklnLb6GEwAsMzC9V9eAHhhK2FiwBmh%2Bg7QONVT%2FCMVVU68xaesbBAGRZNOZDjHhIsAf9zQQ6CbBQssDPhRlWbsBhRdtt2kjFRltHhXHns1obBpWLRcycxA%2F%2BNOtLpyfrZN4HGTBTvh7E%2B%2BniblDyrnEp8UIN5wsbPnvjh0aqDWxwUjHPBGsS4Ih7%2BoCJLNjVmVpRvrceYzDVOmy3MH40KtC7ZXfTu%2Bzk37SRGBRFlBATaO0PMYESSoRDYA%2BVhpkqD7EfqOVJXrzhAvM9GPliQ5lTEXmKLWNr1h8qxK%2F6fY2kASH1PIJroUhhJ6YNLaPo3XEda%2BHNWhf7b1kwXj3vEjOQuoc2yn0Gr7ZmSfs8qvO6a%2F%2FBud7tZhspmpZpf5p8I3XMxc1Ac0aa3CccVo79oZ7a6QuJas3ctXjH2UK%2Bzf1hEvuRoXgiZwfZsjViBCyFXG7uRax13DBxUWZkgGHEdTowV0eyJ0zoKhQ%2BvOlXrTDb6onafqMeGRgahB%2BnlUXPtMkAyvqYU8yzCB29fEBjqkAYqaJVvEI9upBAwp4VxBEddGkq5UqI4M8kUVFoiHcQY5azlxEn3A%2BqQP1NyKvVe9Axy1RpGpf%2FLySqDPG9hA%2BqcygmFbN2AagdtVtJfTB%2B8GvFIcLbWgLBmRaAN8vGRvZfbdLm3a%2BSuLi3E9AX1Xs11%2F1i3D4SBMozyHLFWav%2BKzYX9AsLZ%2F1dxIGHMSm%2BNNjnpThZgvhTf72U83%2BDI2%2B5%2FS35qK&X-Amz-Signature=8c57c49e93eb4f3770aa71deb82967f749b47dcacc7f374e02b527679d84be19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIO3GHMS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCw4MffF5UeoVFBwN%2BsA2%2BhzWavaTK94TNsRYCH2HO2XQIhANMLdxf255%2BdqCMdi5HSGwxL4T8FxcQnRotYk3UMPAA7KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDRRi2pXDkn6MYopMq3APYc1o1ClCKm2z4%2BfbVwlfCHvMPZIA7zT%2B4zEgHDXHES35TUfuxYvToWwSRqWXiB5Hn2MHUghKYDh1kSbcI6a0AcmuNC2Krj2bBAg6IFabgvQsKsEklnLb6GEwAsMzC9V9eAHhhK2FiwBmh%2Bg7QONVT%2FCMVVU68xaesbBAGRZNOZDjHhIsAf9zQQ6CbBQssDPhRlWbsBhRdtt2kjFRltHhXHns1obBpWLRcycxA%2F%2BNOtLpyfrZN4HGTBTvh7E%2B%2BniblDyrnEp8UIN5wsbPnvjh0aqDWxwUjHPBGsS4Ih7%2BoCJLNjVmVpRvrceYzDVOmy3MH40KtC7ZXfTu%2Bzk37SRGBRFlBATaO0PMYESSoRDYA%2BVhpkqD7EfqOVJXrzhAvM9GPliQ5lTEXmKLWNr1h8qxK%2F6fY2kASH1PIJroUhhJ6YNLaPo3XEda%2BHNWhf7b1kwXj3vEjOQuoc2yn0Gr7ZmSfs8qvO6a%2F%2FBud7tZhspmpZpf5p8I3XMxc1Ac0aa3CccVo79oZ7a6QuJas3ctXjH2UK%2Bzf1hEvuRoXgiZwfZsjViBCyFXG7uRax13DBxUWZkgGHEdTowV0eyJ0zoKhQ%2BvOlXrTDb6onafqMeGRgahB%2BnlUXPtMkAyvqYU8yzCB29fEBjqkAYqaJVvEI9upBAwp4VxBEddGkq5UqI4M8kUVFoiHcQY5azlxEn3A%2BqQP1NyKvVe9Axy1RpGpf%2FLySqDPG9hA%2BqcygmFbN2AagdtVtJfTB%2B8GvFIcLbWgLBmRaAN8vGRvZfbdLm3a%2BSuLi3E9AX1Xs11%2F1i3D4SBMozyHLFWav%2BKzYX9AsLZ%2F1dxIGHMSm%2BNNjnpThZgvhTf72U83%2BDI2%2B5%2FS35qK&X-Amz-Signature=c3ed1c59d833c62ded4f3a69b375cc8ab700935be92c8b26ecf6ba81e47c6582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIO3GHMS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCw4MffF5UeoVFBwN%2BsA2%2BhzWavaTK94TNsRYCH2HO2XQIhANMLdxf255%2BdqCMdi5HSGwxL4T8FxcQnRotYk3UMPAA7KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDRRi2pXDkn6MYopMq3APYc1o1ClCKm2z4%2BfbVwlfCHvMPZIA7zT%2B4zEgHDXHES35TUfuxYvToWwSRqWXiB5Hn2MHUghKYDh1kSbcI6a0AcmuNC2Krj2bBAg6IFabgvQsKsEklnLb6GEwAsMzC9V9eAHhhK2FiwBmh%2Bg7QONVT%2FCMVVU68xaesbBAGRZNOZDjHhIsAf9zQQ6CbBQssDPhRlWbsBhRdtt2kjFRltHhXHns1obBpWLRcycxA%2F%2BNOtLpyfrZN4HGTBTvh7E%2B%2BniblDyrnEp8UIN5wsbPnvjh0aqDWxwUjHPBGsS4Ih7%2BoCJLNjVmVpRvrceYzDVOmy3MH40KtC7ZXfTu%2Bzk37SRGBRFlBATaO0PMYESSoRDYA%2BVhpkqD7EfqOVJXrzhAvM9GPliQ5lTEXmKLWNr1h8qxK%2F6fY2kASH1PIJroUhhJ6YNLaPo3XEda%2BHNWhf7b1kwXj3vEjOQuoc2yn0Gr7ZmSfs8qvO6a%2F%2FBud7tZhspmpZpf5p8I3XMxc1Ac0aa3CccVo79oZ7a6QuJas3ctXjH2UK%2Bzf1hEvuRoXgiZwfZsjViBCyFXG7uRax13DBxUWZkgGHEdTowV0eyJ0zoKhQ%2BvOlXrTDb6onafqMeGRgahB%2BnlUXPtMkAyvqYU8yzCB29fEBjqkAYqaJVvEI9upBAwp4VxBEddGkq5UqI4M8kUVFoiHcQY5azlxEn3A%2BqQP1NyKvVe9Axy1RpGpf%2FLySqDPG9hA%2BqcygmFbN2AagdtVtJfTB%2B8GvFIcLbWgLBmRaAN8vGRvZfbdLm3a%2BSuLi3E9AX1Xs11%2F1i3D4SBMozyHLFWav%2BKzYX9AsLZ%2F1dxIGHMSm%2BNNjnpThZgvhTf72U83%2BDI2%2B5%2FS35qK&X-Amz-Signature=8bb91ac80d5761cf30e361739dd43652974fd5e90dd0d2668136b8841b39dfbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIO3GHMS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCw4MffF5UeoVFBwN%2BsA2%2BhzWavaTK94TNsRYCH2HO2XQIhANMLdxf255%2BdqCMdi5HSGwxL4T8FxcQnRotYk3UMPAA7KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDRRi2pXDkn6MYopMq3APYc1o1ClCKm2z4%2BfbVwlfCHvMPZIA7zT%2B4zEgHDXHES35TUfuxYvToWwSRqWXiB5Hn2MHUghKYDh1kSbcI6a0AcmuNC2Krj2bBAg6IFabgvQsKsEklnLb6GEwAsMzC9V9eAHhhK2FiwBmh%2Bg7QONVT%2FCMVVU68xaesbBAGRZNOZDjHhIsAf9zQQ6CbBQssDPhRlWbsBhRdtt2kjFRltHhXHns1obBpWLRcycxA%2F%2BNOtLpyfrZN4HGTBTvh7E%2B%2BniblDyrnEp8UIN5wsbPnvjh0aqDWxwUjHPBGsS4Ih7%2BoCJLNjVmVpRvrceYzDVOmy3MH40KtC7ZXfTu%2Bzk37SRGBRFlBATaO0PMYESSoRDYA%2BVhpkqD7EfqOVJXrzhAvM9GPliQ5lTEXmKLWNr1h8qxK%2F6fY2kASH1PIJroUhhJ6YNLaPo3XEda%2BHNWhf7b1kwXj3vEjOQuoc2yn0Gr7ZmSfs8qvO6a%2F%2FBud7tZhspmpZpf5p8I3XMxc1Ac0aa3CccVo79oZ7a6QuJas3ctXjH2UK%2Bzf1hEvuRoXgiZwfZsjViBCyFXG7uRax13DBxUWZkgGHEdTowV0eyJ0zoKhQ%2BvOlXrTDb6onafqMeGRgahB%2BnlUXPtMkAyvqYU8yzCB29fEBjqkAYqaJVvEI9upBAwp4VxBEddGkq5UqI4M8kUVFoiHcQY5azlxEn3A%2BqQP1NyKvVe9Axy1RpGpf%2FLySqDPG9hA%2BqcygmFbN2AagdtVtJfTB%2B8GvFIcLbWgLBmRaAN8vGRvZfbdLm3a%2BSuLi3E9AX1Xs11%2F1i3D4SBMozyHLFWav%2BKzYX9AsLZ%2F1dxIGHMSm%2BNNjnpThZgvhTf72U83%2BDI2%2B5%2FS35qK&X-Amz-Signature=ab45d4fe22b77f4432579b67f54b033302d4fb43172a78280d3b9f8a0f5d35ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIO3GHMS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCw4MffF5UeoVFBwN%2BsA2%2BhzWavaTK94TNsRYCH2HO2XQIhANMLdxf255%2BdqCMdi5HSGwxL4T8FxcQnRotYk3UMPAA7KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDRRi2pXDkn6MYopMq3APYc1o1ClCKm2z4%2BfbVwlfCHvMPZIA7zT%2B4zEgHDXHES35TUfuxYvToWwSRqWXiB5Hn2MHUghKYDh1kSbcI6a0AcmuNC2Krj2bBAg6IFabgvQsKsEklnLb6GEwAsMzC9V9eAHhhK2FiwBmh%2Bg7QONVT%2FCMVVU68xaesbBAGRZNOZDjHhIsAf9zQQ6CbBQssDPhRlWbsBhRdtt2kjFRltHhXHns1obBpWLRcycxA%2F%2BNOtLpyfrZN4HGTBTvh7E%2B%2BniblDyrnEp8UIN5wsbPnvjh0aqDWxwUjHPBGsS4Ih7%2BoCJLNjVmVpRvrceYzDVOmy3MH40KtC7ZXfTu%2Bzk37SRGBRFlBATaO0PMYESSoRDYA%2BVhpkqD7EfqOVJXrzhAvM9GPliQ5lTEXmKLWNr1h8qxK%2F6fY2kASH1PIJroUhhJ6YNLaPo3XEda%2BHNWhf7b1kwXj3vEjOQuoc2yn0Gr7ZmSfs8qvO6a%2F%2FBud7tZhspmpZpf5p8I3XMxc1Ac0aa3CccVo79oZ7a6QuJas3ctXjH2UK%2Bzf1hEvuRoXgiZwfZsjViBCyFXG7uRax13DBxUWZkgGHEdTowV0eyJ0zoKhQ%2BvOlXrTDb6onafqMeGRgahB%2BnlUXPtMkAyvqYU8yzCB29fEBjqkAYqaJVvEI9upBAwp4VxBEddGkq5UqI4M8kUVFoiHcQY5azlxEn3A%2BqQP1NyKvVe9Axy1RpGpf%2FLySqDPG9hA%2BqcygmFbN2AagdtVtJfTB%2B8GvFIcLbWgLBmRaAN8vGRvZfbdLm3a%2BSuLi3E9AX1Xs11%2F1i3D4SBMozyHLFWav%2BKzYX9AsLZ%2F1dxIGHMSm%2BNNjnpThZgvhTf72U83%2BDI2%2B5%2FS35qK&X-Amz-Signature=a2e5732dab384c59165fe290dc083ad104fafe464119efc1883429474083efe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIO3GHMS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCw4MffF5UeoVFBwN%2BsA2%2BhzWavaTK94TNsRYCH2HO2XQIhANMLdxf255%2BdqCMdi5HSGwxL4T8FxcQnRotYk3UMPAA7KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDRRi2pXDkn6MYopMq3APYc1o1ClCKm2z4%2BfbVwlfCHvMPZIA7zT%2B4zEgHDXHES35TUfuxYvToWwSRqWXiB5Hn2MHUghKYDh1kSbcI6a0AcmuNC2Krj2bBAg6IFabgvQsKsEklnLb6GEwAsMzC9V9eAHhhK2FiwBmh%2Bg7QONVT%2FCMVVU68xaesbBAGRZNOZDjHhIsAf9zQQ6CbBQssDPhRlWbsBhRdtt2kjFRltHhXHns1obBpWLRcycxA%2F%2BNOtLpyfrZN4HGTBTvh7E%2B%2BniblDyrnEp8UIN5wsbPnvjh0aqDWxwUjHPBGsS4Ih7%2BoCJLNjVmVpRvrceYzDVOmy3MH40KtC7ZXfTu%2Bzk37SRGBRFlBATaO0PMYESSoRDYA%2BVhpkqD7EfqOVJXrzhAvM9GPliQ5lTEXmKLWNr1h8qxK%2F6fY2kASH1PIJroUhhJ6YNLaPo3XEda%2BHNWhf7b1kwXj3vEjOQuoc2yn0Gr7ZmSfs8qvO6a%2F%2FBud7tZhspmpZpf5p8I3XMxc1Ac0aa3CccVo79oZ7a6QuJas3ctXjH2UK%2Bzf1hEvuRoXgiZwfZsjViBCyFXG7uRax13DBxUWZkgGHEdTowV0eyJ0zoKhQ%2BvOlXrTDb6onafqMeGRgahB%2BnlUXPtMkAyvqYU8yzCB29fEBjqkAYqaJVvEI9upBAwp4VxBEddGkq5UqI4M8kUVFoiHcQY5azlxEn3A%2BqQP1NyKvVe9Axy1RpGpf%2FLySqDPG9hA%2BqcygmFbN2AagdtVtJfTB%2B8GvFIcLbWgLBmRaAN8vGRvZfbdLm3a%2BSuLi3E9AX1Xs11%2F1i3D4SBMozyHLFWav%2BKzYX9AsLZ%2F1dxIGHMSm%2BNNjnpThZgvhTf72U83%2BDI2%2B5%2FS35qK&X-Amz-Signature=55419ccaa0b1a6e06bd99a0539d6edda047f7afbf358792d8817012f4dd4658b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIO3GHMS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCw4MffF5UeoVFBwN%2BsA2%2BhzWavaTK94TNsRYCH2HO2XQIhANMLdxf255%2BdqCMdi5HSGwxL4T8FxcQnRotYk3UMPAA7KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDRRi2pXDkn6MYopMq3APYc1o1ClCKm2z4%2BfbVwlfCHvMPZIA7zT%2B4zEgHDXHES35TUfuxYvToWwSRqWXiB5Hn2MHUghKYDh1kSbcI6a0AcmuNC2Krj2bBAg6IFabgvQsKsEklnLb6GEwAsMzC9V9eAHhhK2FiwBmh%2Bg7QONVT%2FCMVVU68xaesbBAGRZNOZDjHhIsAf9zQQ6CbBQssDPhRlWbsBhRdtt2kjFRltHhXHns1obBpWLRcycxA%2F%2BNOtLpyfrZN4HGTBTvh7E%2B%2BniblDyrnEp8UIN5wsbPnvjh0aqDWxwUjHPBGsS4Ih7%2BoCJLNjVmVpRvrceYzDVOmy3MH40KtC7ZXfTu%2Bzk37SRGBRFlBATaO0PMYESSoRDYA%2BVhpkqD7EfqOVJXrzhAvM9GPliQ5lTEXmKLWNr1h8qxK%2F6fY2kASH1PIJroUhhJ6YNLaPo3XEda%2BHNWhf7b1kwXj3vEjOQuoc2yn0Gr7ZmSfs8qvO6a%2F%2FBud7tZhspmpZpf5p8I3XMxc1Ac0aa3CccVo79oZ7a6QuJas3ctXjH2UK%2Bzf1hEvuRoXgiZwfZsjViBCyFXG7uRax13DBxUWZkgGHEdTowV0eyJ0zoKhQ%2BvOlXrTDb6onafqMeGRgahB%2BnlUXPtMkAyvqYU8yzCB29fEBjqkAYqaJVvEI9upBAwp4VxBEddGkq5UqI4M8kUVFoiHcQY5azlxEn3A%2BqQP1NyKvVe9Axy1RpGpf%2FLySqDPG9hA%2BqcygmFbN2AagdtVtJfTB%2B8GvFIcLbWgLBmRaAN8vGRvZfbdLm3a%2BSuLi3E9AX1Xs11%2F1i3D4SBMozyHLFWav%2BKzYX9AsLZ%2F1dxIGHMSm%2BNNjnpThZgvhTf72U83%2BDI2%2B5%2FS35qK&X-Amz-Signature=35623dc547f67eb0bf90eeb0d173b2c01111c00d293f7317e38fd86788d878ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIO3GHMS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCw4MffF5UeoVFBwN%2BsA2%2BhzWavaTK94TNsRYCH2HO2XQIhANMLdxf255%2BdqCMdi5HSGwxL4T8FxcQnRotYk3UMPAA7KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDRRi2pXDkn6MYopMq3APYc1o1ClCKm2z4%2BfbVwlfCHvMPZIA7zT%2B4zEgHDXHES35TUfuxYvToWwSRqWXiB5Hn2MHUghKYDh1kSbcI6a0AcmuNC2Krj2bBAg6IFabgvQsKsEklnLb6GEwAsMzC9V9eAHhhK2FiwBmh%2Bg7QONVT%2FCMVVU68xaesbBAGRZNOZDjHhIsAf9zQQ6CbBQssDPhRlWbsBhRdtt2kjFRltHhXHns1obBpWLRcycxA%2F%2BNOtLpyfrZN4HGTBTvh7E%2B%2BniblDyrnEp8UIN5wsbPnvjh0aqDWxwUjHPBGsS4Ih7%2BoCJLNjVmVpRvrceYzDVOmy3MH40KtC7ZXfTu%2Bzk37SRGBRFlBATaO0PMYESSoRDYA%2BVhpkqD7EfqOVJXrzhAvM9GPliQ5lTEXmKLWNr1h8qxK%2F6fY2kASH1PIJroUhhJ6YNLaPo3XEda%2BHNWhf7b1kwXj3vEjOQuoc2yn0Gr7ZmSfs8qvO6a%2F%2FBud7tZhspmpZpf5p8I3XMxc1Ac0aa3CccVo79oZ7a6QuJas3ctXjH2UK%2Bzf1hEvuRoXgiZwfZsjViBCyFXG7uRax13DBxUWZkgGHEdTowV0eyJ0zoKhQ%2BvOlXrTDb6onafqMeGRgahB%2BnlUXPtMkAyvqYU8yzCB29fEBjqkAYqaJVvEI9upBAwp4VxBEddGkq5UqI4M8kUVFoiHcQY5azlxEn3A%2BqQP1NyKvVe9Axy1RpGpf%2FLySqDPG9hA%2BqcygmFbN2AagdtVtJfTB%2B8GvFIcLbWgLBmRaAN8vGRvZfbdLm3a%2BSuLi3E9AX1Xs11%2F1i3D4SBMozyHLFWav%2BKzYX9AsLZ%2F1dxIGHMSm%2BNNjnpThZgvhTf72U83%2BDI2%2B5%2FS35qK&X-Amz-Signature=eaa1d208eed72195b8baa7ed8ad2a40b92a82720b94d0bbc2b80963c919d1056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIO3GHMS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCw4MffF5UeoVFBwN%2BsA2%2BhzWavaTK94TNsRYCH2HO2XQIhANMLdxf255%2BdqCMdi5HSGwxL4T8FxcQnRotYk3UMPAA7KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDRRi2pXDkn6MYopMq3APYc1o1ClCKm2z4%2BfbVwlfCHvMPZIA7zT%2B4zEgHDXHES35TUfuxYvToWwSRqWXiB5Hn2MHUghKYDh1kSbcI6a0AcmuNC2Krj2bBAg6IFabgvQsKsEklnLb6GEwAsMzC9V9eAHhhK2FiwBmh%2Bg7QONVT%2FCMVVU68xaesbBAGRZNOZDjHhIsAf9zQQ6CbBQssDPhRlWbsBhRdtt2kjFRltHhXHns1obBpWLRcycxA%2F%2BNOtLpyfrZN4HGTBTvh7E%2B%2BniblDyrnEp8UIN5wsbPnvjh0aqDWxwUjHPBGsS4Ih7%2BoCJLNjVmVpRvrceYzDVOmy3MH40KtC7ZXfTu%2Bzk37SRGBRFlBATaO0PMYESSoRDYA%2BVhpkqD7EfqOVJXrzhAvM9GPliQ5lTEXmKLWNr1h8qxK%2F6fY2kASH1PIJroUhhJ6YNLaPo3XEda%2BHNWhf7b1kwXj3vEjOQuoc2yn0Gr7ZmSfs8qvO6a%2F%2FBud7tZhspmpZpf5p8I3XMxc1Ac0aa3CccVo79oZ7a6QuJas3ctXjH2UK%2Bzf1hEvuRoXgiZwfZsjViBCyFXG7uRax13DBxUWZkgGHEdTowV0eyJ0zoKhQ%2BvOlXrTDb6onafqMeGRgahB%2BnlUXPtMkAyvqYU8yzCB29fEBjqkAYqaJVvEI9upBAwp4VxBEddGkq5UqI4M8kUVFoiHcQY5azlxEn3A%2BqQP1NyKvVe9Axy1RpGpf%2FLySqDPG9hA%2BqcygmFbN2AagdtVtJfTB%2B8GvFIcLbWgLBmRaAN8vGRvZfbdLm3a%2BSuLi3E9AX1Xs11%2F1i3D4SBMozyHLFWav%2BKzYX9AsLZ%2F1dxIGHMSm%2BNNjnpThZgvhTf72U83%2BDI2%2B5%2FS35qK&X-Amz-Signature=cc905db3d8c0b44c862247101d7c5bbd2867891f69cc294327eb92a8af9128a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIO3GHMS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCw4MffF5UeoVFBwN%2BsA2%2BhzWavaTK94TNsRYCH2HO2XQIhANMLdxf255%2BdqCMdi5HSGwxL4T8FxcQnRotYk3UMPAA7KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDRRi2pXDkn6MYopMq3APYc1o1ClCKm2z4%2BfbVwlfCHvMPZIA7zT%2B4zEgHDXHES35TUfuxYvToWwSRqWXiB5Hn2MHUghKYDh1kSbcI6a0AcmuNC2Krj2bBAg6IFabgvQsKsEklnLb6GEwAsMzC9V9eAHhhK2FiwBmh%2Bg7QONVT%2FCMVVU68xaesbBAGRZNOZDjHhIsAf9zQQ6CbBQssDPhRlWbsBhRdtt2kjFRltHhXHns1obBpWLRcycxA%2F%2BNOtLpyfrZN4HGTBTvh7E%2B%2BniblDyrnEp8UIN5wsbPnvjh0aqDWxwUjHPBGsS4Ih7%2BoCJLNjVmVpRvrceYzDVOmy3MH40KtC7ZXfTu%2Bzk37SRGBRFlBATaO0PMYESSoRDYA%2BVhpkqD7EfqOVJXrzhAvM9GPliQ5lTEXmKLWNr1h8qxK%2F6fY2kASH1PIJroUhhJ6YNLaPo3XEda%2BHNWhf7b1kwXj3vEjOQuoc2yn0Gr7ZmSfs8qvO6a%2F%2FBud7tZhspmpZpf5p8I3XMxc1Ac0aa3CccVo79oZ7a6QuJas3ctXjH2UK%2Bzf1hEvuRoXgiZwfZsjViBCyFXG7uRax13DBxUWZkgGHEdTowV0eyJ0zoKhQ%2BvOlXrTDb6onafqMeGRgahB%2BnlUXPtMkAyvqYU8yzCB29fEBjqkAYqaJVvEI9upBAwp4VxBEddGkq5UqI4M8kUVFoiHcQY5azlxEn3A%2BqQP1NyKvVe9Axy1RpGpf%2FLySqDPG9hA%2BqcygmFbN2AagdtVtJfTB%2B8GvFIcLbWgLBmRaAN8vGRvZfbdLm3a%2BSuLi3E9AX1Xs11%2F1i3D4SBMozyHLFWav%2BKzYX9AsLZ%2F1dxIGHMSm%2BNNjnpThZgvhTf72U83%2BDI2%2B5%2FS35qK&X-Amz-Signature=8f47903879ac14bda822d4bb71813f4e46a2be23795fda10b56609eb9d12b0e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIO3GHMS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCw4MffF5UeoVFBwN%2BsA2%2BhzWavaTK94TNsRYCH2HO2XQIhANMLdxf255%2BdqCMdi5HSGwxL4T8FxcQnRotYk3UMPAA7KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDRRi2pXDkn6MYopMq3APYc1o1ClCKm2z4%2BfbVwlfCHvMPZIA7zT%2B4zEgHDXHES35TUfuxYvToWwSRqWXiB5Hn2MHUghKYDh1kSbcI6a0AcmuNC2Krj2bBAg6IFabgvQsKsEklnLb6GEwAsMzC9V9eAHhhK2FiwBmh%2Bg7QONVT%2FCMVVU68xaesbBAGRZNOZDjHhIsAf9zQQ6CbBQssDPhRlWbsBhRdtt2kjFRltHhXHns1obBpWLRcycxA%2F%2BNOtLpyfrZN4HGTBTvh7E%2B%2BniblDyrnEp8UIN5wsbPnvjh0aqDWxwUjHPBGsS4Ih7%2BoCJLNjVmVpRvrceYzDVOmy3MH40KtC7ZXfTu%2Bzk37SRGBRFlBATaO0PMYESSoRDYA%2BVhpkqD7EfqOVJXrzhAvM9GPliQ5lTEXmKLWNr1h8qxK%2F6fY2kASH1PIJroUhhJ6YNLaPo3XEda%2BHNWhf7b1kwXj3vEjOQuoc2yn0Gr7ZmSfs8qvO6a%2F%2FBud7tZhspmpZpf5p8I3XMxc1Ac0aa3CccVo79oZ7a6QuJas3ctXjH2UK%2Bzf1hEvuRoXgiZwfZsjViBCyFXG7uRax13DBxUWZkgGHEdTowV0eyJ0zoKhQ%2BvOlXrTDb6onafqMeGRgahB%2BnlUXPtMkAyvqYU8yzCB29fEBjqkAYqaJVvEI9upBAwp4VxBEddGkq5UqI4M8kUVFoiHcQY5azlxEn3A%2BqQP1NyKvVe9Axy1RpGpf%2FLySqDPG9hA%2BqcygmFbN2AagdtVtJfTB%2B8GvFIcLbWgLBmRaAN8vGRvZfbdLm3a%2BSuLi3E9AX1Xs11%2F1i3D4SBMozyHLFWav%2BKzYX9AsLZ%2F1dxIGHMSm%2BNNjnpThZgvhTf72U83%2BDI2%2B5%2FS35qK&X-Amz-Signature=7a848b0a541af3aed08f9a42d2136618e66c118ac821165dfd4c13a9208a0753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIO3GHMS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCw4MffF5UeoVFBwN%2BsA2%2BhzWavaTK94TNsRYCH2HO2XQIhANMLdxf255%2BdqCMdi5HSGwxL4T8FxcQnRotYk3UMPAA7KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDRRi2pXDkn6MYopMq3APYc1o1ClCKm2z4%2BfbVwlfCHvMPZIA7zT%2B4zEgHDXHES35TUfuxYvToWwSRqWXiB5Hn2MHUghKYDh1kSbcI6a0AcmuNC2Krj2bBAg6IFabgvQsKsEklnLb6GEwAsMzC9V9eAHhhK2FiwBmh%2Bg7QONVT%2FCMVVU68xaesbBAGRZNOZDjHhIsAf9zQQ6CbBQssDPhRlWbsBhRdtt2kjFRltHhXHns1obBpWLRcycxA%2F%2BNOtLpyfrZN4HGTBTvh7E%2B%2BniblDyrnEp8UIN5wsbPnvjh0aqDWxwUjHPBGsS4Ih7%2BoCJLNjVmVpRvrceYzDVOmy3MH40KtC7ZXfTu%2Bzk37SRGBRFlBATaO0PMYESSoRDYA%2BVhpkqD7EfqOVJXrzhAvM9GPliQ5lTEXmKLWNr1h8qxK%2F6fY2kASH1PIJroUhhJ6YNLaPo3XEda%2BHNWhf7b1kwXj3vEjOQuoc2yn0Gr7ZmSfs8qvO6a%2F%2FBud7tZhspmpZpf5p8I3XMxc1Ac0aa3CccVo79oZ7a6QuJas3ctXjH2UK%2Bzf1hEvuRoXgiZwfZsjViBCyFXG7uRax13DBxUWZkgGHEdTowV0eyJ0zoKhQ%2BvOlXrTDb6onafqMeGRgahB%2BnlUXPtMkAyvqYU8yzCB29fEBjqkAYqaJVvEI9upBAwp4VxBEddGkq5UqI4M8kUVFoiHcQY5azlxEn3A%2BqQP1NyKvVe9Axy1RpGpf%2FLySqDPG9hA%2BqcygmFbN2AagdtVtJfTB%2B8GvFIcLbWgLBmRaAN8vGRvZfbdLm3a%2BSuLi3E9AX1Xs11%2F1i3D4SBMozyHLFWav%2BKzYX9AsLZ%2F1dxIGHMSm%2BNNjnpThZgvhTf72U83%2BDI2%2B5%2FS35qK&X-Amz-Signature=7ff831a7e0fdccb75dfa6a1b61118e8456f26b6ce8d7f311aa8601435612dc2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIO3GHMS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCw4MffF5UeoVFBwN%2BsA2%2BhzWavaTK94TNsRYCH2HO2XQIhANMLdxf255%2BdqCMdi5HSGwxL4T8FxcQnRotYk3UMPAA7KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDRRi2pXDkn6MYopMq3APYc1o1ClCKm2z4%2BfbVwlfCHvMPZIA7zT%2B4zEgHDXHES35TUfuxYvToWwSRqWXiB5Hn2MHUghKYDh1kSbcI6a0AcmuNC2Krj2bBAg6IFabgvQsKsEklnLb6GEwAsMzC9V9eAHhhK2FiwBmh%2Bg7QONVT%2FCMVVU68xaesbBAGRZNOZDjHhIsAf9zQQ6CbBQssDPhRlWbsBhRdtt2kjFRltHhXHns1obBpWLRcycxA%2F%2BNOtLpyfrZN4HGTBTvh7E%2B%2BniblDyrnEp8UIN5wsbPnvjh0aqDWxwUjHPBGsS4Ih7%2BoCJLNjVmVpRvrceYzDVOmy3MH40KtC7ZXfTu%2Bzk37SRGBRFlBATaO0PMYESSoRDYA%2BVhpkqD7EfqOVJXrzhAvM9GPliQ5lTEXmKLWNr1h8qxK%2F6fY2kASH1PIJroUhhJ6YNLaPo3XEda%2BHNWhf7b1kwXj3vEjOQuoc2yn0Gr7ZmSfs8qvO6a%2F%2FBud7tZhspmpZpf5p8I3XMxc1Ac0aa3CccVo79oZ7a6QuJas3ctXjH2UK%2Bzf1hEvuRoXgiZwfZsjViBCyFXG7uRax13DBxUWZkgGHEdTowV0eyJ0zoKhQ%2BvOlXrTDb6onafqMeGRgahB%2BnlUXPtMkAyvqYU8yzCB29fEBjqkAYqaJVvEI9upBAwp4VxBEddGkq5UqI4M8kUVFoiHcQY5azlxEn3A%2BqQP1NyKvVe9Axy1RpGpf%2FLySqDPG9hA%2BqcygmFbN2AagdtVtJfTB%2B8GvFIcLbWgLBmRaAN8vGRvZfbdLm3a%2BSuLi3E9AX1Xs11%2F1i3D4SBMozyHLFWav%2BKzYX9AsLZ%2F1dxIGHMSm%2BNNjnpThZgvhTf72U83%2BDI2%2B5%2FS35qK&X-Amz-Signature=d9362fd7e41056a9be64c8319d84184ee03a9f0e77d894b817e686b331ad71c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
