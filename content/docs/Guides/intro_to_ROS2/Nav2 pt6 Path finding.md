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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRQBQ5F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCfkZGBaoeRnarAbR22KwxjnkI%2FHEyAf9v8l89gZDPe8gIhANarRwdjDgIDnIp7%2BCom95frIb9%2BoYorMFaOCC%2FFCR%2BEKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZbWg0O%2BVfcBI1zvwq3AMB0a%2B2JOJhRJqOK%2B5MPBCqTtwKE5G1G1iMni03nGq5pCdgfhviD6NsQ50uVZFV7OD6HAx8XUN9eqHEgBRCP51r2TbA250PFbuyC55y4LW%2BhehCt2kWwUpKLn%2FJzTO1Bt4tRlIA8q2NSX7%2FusjOmL%2BLulvh25cRJwpU62fX0oop9Wzuut69cOQPUCJUdRkj6Zs2driSi7%2ByLT7x%2B4zU98aZVhUvSwMDeQMCR7qi1vNuwT7%2FgwWkKUEbzGbM7Hjzs6fFv6XS14eTLmucSUxi4eJMVCVX3GXiAfHixBr4uypfir%2FIGbfpYJI2zsxwLezgsrFvXdcO7ztTpEssSSfQWpvYrYcfGcFaFX3%2BNCL0qacQ422buK5ltpZg2mgCyPvI3vMaXoMbvxdB6TvtMV1daSQk3opRHNj1lKg3R3VUBETYJi70AbxLbLIcllmO6LcA3OdG%2B0cLORQV6VWajXNaUgJKmMybhjoNE8ONx%2BCcEpUA3CmNfvvDRha8elC%2Bn1KDP8MMSnlqVK4UPr2%2FYj%2BnP516zOWLoksDQl67xDdwyvKKimtqXuAqWh7ZX1az6YjLHFAtHJMyUBdmBZC%2BvYEjJO%2FG4EM1JmoJpbmxKjJ4KSUAfewoTFKyG7l4993YejDukNHEBjqkAQcqMXF7eGo9jq11R%2F%2BUjYF6ldDr33rsoIkSdTKXnftKwTa5QDuDjhpwugul1bk8iz%2BUZl7Jffo7np0e7YmLAV%2F3VMy36HWLbk0z1IXleLV%2Fv8aytMB6lybbafxzEvzzjDFjxQEArNbalLwR8KmxKxh5Arrytv1j%2F4yQI6hAYatWWm%2BTU%2BMOh9iuz3%2BZ3swt4qnPzL2mfLoX8kGMTMjp033NC6C0&X-Amz-Signature=7a510db4f146401280ecbd3a8ea1c98922b723da28eebd3ad8f9f3032c411348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRQBQ5F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCfkZGBaoeRnarAbR22KwxjnkI%2FHEyAf9v8l89gZDPe8gIhANarRwdjDgIDnIp7%2BCom95frIb9%2BoYorMFaOCC%2FFCR%2BEKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZbWg0O%2BVfcBI1zvwq3AMB0a%2B2JOJhRJqOK%2B5MPBCqTtwKE5G1G1iMni03nGq5pCdgfhviD6NsQ50uVZFV7OD6HAx8XUN9eqHEgBRCP51r2TbA250PFbuyC55y4LW%2BhehCt2kWwUpKLn%2FJzTO1Bt4tRlIA8q2NSX7%2FusjOmL%2BLulvh25cRJwpU62fX0oop9Wzuut69cOQPUCJUdRkj6Zs2driSi7%2ByLT7x%2B4zU98aZVhUvSwMDeQMCR7qi1vNuwT7%2FgwWkKUEbzGbM7Hjzs6fFv6XS14eTLmucSUxi4eJMVCVX3GXiAfHixBr4uypfir%2FIGbfpYJI2zsxwLezgsrFvXdcO7ztTpEssSSfQWpvYrYcfGcFaFX3%2BNCL0qacQ422buK5ltpZg2mgCyPvI3vMaXoMbvxdB6TvtMV1daSQk3opRHNj1lKg3R3VUBETYJi70AbxLbLIcllmO6LcA3OdG%2B0cLORQV6VWajXNaUgJKmMybhjoNE8ONx%2BCcEpUA3CmNfvvDRha8elC%2Bn1KDP8MMSnlqVK4UPr2%2FYj%2BnP516zOWLoksDQl67xDdwyvKKimtqXuAqWh7ZX1az6YjLHFAtHJMyUBdmBZC%2BvYEjJO%2FG4EM1JmoJpbmxKjJ4KSUAfewoTFKyG7l4993YejDukNHEBjqkAQcqMXF7eGo9jq11R%2F%2BUjYF6ldDr33rsoIkSdTKXnftKwTa5QDuDjhpwugul1bk8iz%2BUZl7Jffo7np0e7YmLAV%2F3VMy36HWLbk0z1IXleLV%2Fv8aytMB6lybbafxzEvzzjDFjxQEArNbalLwR8KmxKxh5Arrytv1j%2F4yQI6hAYatWWm%2BTU%2BMOh9iuz3%2BZ3swt4qnPzL2mfLoX8kGMTMjp033NC6C0&X-Amz-Signature=d0a8977ec782ccf272610a643ebcd10cae5e9590fd393ebb35102ff2b6f7fb65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRQBQ5F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCfkZGBaoeRnarAbR22KwxjnkI%2FHEyAf9v8l89gZDPe8gIhANarRwdjDgIDnIp7%2BCom95frIb9%2BoYorMFaOCC%2FFCR%2BEKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZbWg0O%2BVfcBI1zvwq3AMB0a%2B2JOJhRJqOK%2B5MPBCqTtwKE5G1G1iMni03nGq5pCdgfhviD6NsQ50uVZFV7OD6HAx8XUN9eqHEgBRCP51r2TbA250PFbuyC55y4LW%2BhehCt2kWwUpKLn%2FJzTO1Bt4tRlIA8q2NSX7%2FusjOmL%2BLulvh25cRJwpU62fX0oop9Wzuut69cOQPUCJUdRkj6Zs2driSi7%2ByLT7x%2B4zU98aZVhUvSwMDeQMCR7qi1vNuwT7%2FgwWkKUEbzGbM7Hjzs6fFv6XS14eTLmucSUxi4eJMVCVX3GXiAfHixBr4uypfir%2FIGbfpYJI2zsxwLezgsrFvXdcO7ztTpEssSSfQWpvYrYcfGcFaFX3%2BNCL0qacQ422buK5ltpZg2mgCyPvI3vMaXoMbvxdB6TvtMV1daSQk3opRHNj1lKg3R3VUBETYJi70AbxLbLIcllmO6LcA3OdG%2B0cLORQV6VWajXNaUgJKmMybhjoNE8ONx%2BCcEpUA3CmNfvvDRha8elC%2Bn1KDP8MMSnlqVK4UPr2%2FYj%2BnP516zOWLoksDQl67xDdwyvKKimtqXuAqWh7ZX1az6YjLHFAtHJMyUBdmBZC%2BvYEjJO%2FG4EM1JmoJpbmxKjJ4KSUAfewoTFKyG7l4993YejDukNHEBjqkAQcqMXF7eGo9jq11R%2F%2BUjYF6ldDr33rsoIkSdTKXnftKwTa5QDuDjhpwugul1bk8iz%2BUZl7Jffo7np0e7YmLAV%2F3VMy36HWLbk0z1IXleLV%2Fv8aytMB6lybbafxzEvzzjDFjxQEArNbalLwR8KmxKxh5Arrytv1j%2F4yQI6hAYatWWm%2BTU%2BMOh9iuz3%2BZ3swt4qnPzL2mfLoX8kGMTMjp033NC6C0&X-Amz-Signature=7fcce9c1714fba656d57d6672df6eadc061045269bb7fbf1f814353771b482e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRQBQ5F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCfkZGBaoeRnarAbR22KwxjnkI%2FHEyAf9v8l89gZDPe8gIhANarRwdjDgIDnIp7%2BCom95frIb9%2BoYorMFaOCC%2FFCR%2BEKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZbWg0O%2BVfcBI1zvwq3AMB0a%2B2JOJhRJqOK%2B5MPBCqTtwKE5G1G1iMni03nGq5pCdgfhviD6NsQ50uVZFV7OD6HAx8XUN9eqHEgBRCP51r2TbA250PFbuyC55y4LW%2BhehCt2kWwUpKLn%2FJzTO1Bt4tRlIA8q2NSX7%2FusjOmL%2BLulvh25cRJwpU62fX0oop9Wzuut69cOQPUCJUdRkj6Zs2driSi7%2ByLT7x%2B4zU98aZVhUvSwMDeQMCR7qi1vNuwT7%2FgwWkKUEbzGbM7Hjzs6fFv6XS14eTLmucSUxi4eJMVCVX3GXiAfHixBr4uypfir%2FIGbfpYJI2zsxwLezgsrFvXdcO7ztTpEssSSfQWpvYrYcfGcFaFX3%2BNCL0qacQ422buK5ltpZg2mgCyPvI3vMaXoMbvxdB6TvtMV1daSQk3opRHNj1lKg3R3VUBETYJi70AbxLbLIcllmO6LcA3OdG%2B0cLORQV6VWajXNaUgJKmMybhjoNE8ONx%2BCcEpUA3CmNfvvDRha8elC%2Bn1KDP8MMSnlqVK4UPr2%2FYj%2BnP516zOWLoksDQl67xDdwyvKKimtqXuAqWh7ZX1az6YjLHFAtHJMyUBdmBZC%2BvYEjJO%2FG4EM1JmoJpbmxKjJ4KSUAfewoTFKyG7l4993YejDukNHEBjqkAQcqMXF7eGo9jq11R%2F%2BUjYF6ldDr33rsoIkSdTKXnftKwTa5QDuDjhpwugul1bk8iz%2BUZl7Jffo7np0e7YmLAV%2F3VMy36HWLbk0z1IXleLV%2Fv8aytMB6lybbafxzEvzzjDFjxQEArNbalLwR8KmxKxh5Arrytv1j%2F4yQI6hAYatWWm%2BTU%2BMOh9iuz3%2BZ3swt4qnPzL2mfLoX8kGMTMjp033NC6C0&X-Amz-Signature=198dd80031648a0738c041edf63533320aeb96c7121dd7f3985e1b6797bd2b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRQBQ5F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCfkZGBaoeRnarAbR22KwxjnkI%2FHEyAf9v8l89gZDPe8gIhANarRwdjDgIDnIp7%2BCom95frIb9%2BoYorMFaOCC%2FFCR%2BEKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZbWg0O%2BVfcBI1zvwq3AMB0a%2B2JOJhRJqOK%2B5MPBCqTtwKE5G1G1iMni03nGq5pCdgfhviD6NsQ50uVZFV7OD6HAx8XUN9eqHEgBRCP51r2TbA250PFbuyC55y4LW%2BhehCt2kWwUpKLn%2FJzTO1Bt4tRlIA8q2NSX7%2FusjOmL%2BLulvh25cRJwpU62fX0oop9Wzuut69cOQPUCJUdRkj6Zs2driSi7%2ByLT7x%2B4zU98aZVhUvSwMDeQMCR7qi1vNuwT7%2FgwWkKUEbzGbM7Hjzs6fFv6XS14eTLmucSUxi4eJMVCVX3GXiAfHixBr4uypfir%2FIGbfpYJI2zsxwLezgsrFvXdcO7ztTpEssSSfQWpvYrYcfGcFaFX3%2BNCL0qacQ422buK5ltpZg2mgCyPvI3vMaXoMbvxdB6TvtMV1daSQk3opRHNj1lKg3R3VUBETYJi70AbxLbLIcllmO6LcA3OdG%2B0cLORQV6VWajXNaUgJKmMybhjoNE8ONx%2BCcEpUA3CmNfvvDRha8elC%2Bn1KDP8MMSnlqVK4UPr2%2FYj%2BnP516zOWLoksDQl67xDdwyvKKimtqXuAqWh7ZX1az6YjLHFAtHJMyUBdmBZC%2BvYEjJO%2FG4EM1JmoJpbmxKjJ4KSUAfewoTFKyG7l4993YejDukNHEBjqkAQcqMXF7eGo9jq11R%2F%2BUjYF6ldDr33rsoIkSdTKXnftKwTa5QDuDjhpwugul1bk8iz%2BUZl7Jffo7np0e7YmLAV%2F3VMy36HWLbk0z1IXleLV%2Fv8aytMB6lybbafxzEvzzjDFjxQEArNbalLwR8KmxKxh5Arrytv1j%2F4yQI6hAYatWWm%2BTU%2BMOh9iuz3%2BZ3swt4qnPzL2mfLoX8kGMTMjp033NC6C0&X-Amz-Signature=2de30766f946f2a946cddf2e8d9405e83e49f53ac10884d8f4288862bb594caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRQBQ5F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCfkZGBaoeRnarAbR22KwxjnkI%2FHEyAf9v8l89gZDPe8gIhANarRwdjDgIDnIp7%2BCom95frIb9%2BoYorMFaOCC%2FFCR%2BEKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZbWg0O%2BVfcBI1zvwq3AMB0a%2B2JOJhRJqOK%2B5MPBCqTtwKE5G1G1iMni03nGq5pCdgfhviD6NsQ50uVZFV7OD6HAx8XUN9eqHEgBRCP51r2TbA250PFbuyC55y4LW%2BhehCt2kWwUpKLn%2FJzTO1Bt4tRlIA8q2NSX7%2FusjOmL%2BLulvh25cRJwpU62fX0oop9Wzuut69cOQPUCJUdRkj6Zs2driSi7%2ByLT7x%2B4zU98aZVhUvSwMDeQMCR7qi1vNuwT7%2FgwWkKUEbzGbM7Hjzs6fFv6XS14eTLmucSUxi4eJMVCVX3GXiAfHixBr4uypfir%2FIGbfpYJI2zsxwLezgsrFvXdcO7ztTpEssSSfQWpvYrYcfGcFaFX3%2BNCL0qacQ422buK5ltpZg2mgCyPvI3vMaXoMbvxdB6TvtMV1daSQk3opRHNj1lKg3R3VUBETYJi70AbxLbLIcllmO6LcA3OdG%2B0cLORQV6VWajXNaUgJKmMybhjoNE8ONx%2BCcEpUA3CmNfvvDRha8elC%2Bn1KDP8MMSnlqVK4UPr2%2FYj%2BnP516zOWLoksDQl67xDdwyvKKimtqXuAqWh7ZX1az6YjLHFAtHJMyUBdmBZC%2BvYEjJO%2FG4EM1JmoJpbmxKjJ4KSUAfewoTFKyG7l4993YejDukNHEBjqkAQcqMXF7eGo9jq11R%2F%2BUjYF6ldDr33rsoIkSdTKXnftKwTa5QDuDjhpwugul1bk8iz%2BUZl7Jffo7np0e7YmLAV%2F3VMy36HWLbk0z1IXleLV%2Fv8aytMB6lybbafxzEvzzjDFjxQEArNbalLwR8KmxKxh5Arrytv1j%2F4yQI6hAYatWWm%2BTU%2BMOh9iuz3%2BZ3swt4qnPzL2mfLoX8kGMTMjp033NC6C0&X-Amz-Signature=ab6e0759f6e7d0bb8e5febec413ab3ec1b5fcd84db9a56cdde37da987e89cf9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRQBQ5F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCfkZGBaoeRnarAbR22KwxjnkI%2FHEyAf9v8l89gZDPe8gIhANarRwdjDgIDnIp7%2BCom95frIb9%2BoYorMFaOCC%2FFCR%2BEKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZbWg0O%2BVfcBI1zvwq3AMB0a%2B2JOJhRJqOK%2B5MPBCqTtwKE5G1G1iMni03nGq5pCdgfhviD6NsQ50uVZFV7OD6HAx8XUN9eqHEgBRCP51r2TbA250PFbuyC55y4LW%2BhehCt2kWwUpKLn%2FJzTO1Bt4tRlIA8q2NSX7%2FusjOmL%2BLulvh25cRJwpU62fX0oop9Wzuut69cOQPUCJUdRkj6Zs2driSi7%2ByLT7x%2B4zU98aZVhUvSwMDeQMCR7qi1vNuwT7%2FgwWkKUEbzGbM7Hjzs6fFv6XS14eTLmucSUxi4eJMVCVX3GXiAfHixBr4uypfir%2FIGbfpYJI2zsxwLezgsrFvXdcO7ztTpEssSSfQWpvYrYcfGcFaFX3%2BNCL0qacQ422buK5ltpZg2mgCyPvI3vMaXoMbvxdB6TvtMV1daSQk3opRHNj1lKg3R3VUBETYJi70AbxLbLIcllmO6LcA3OdG%2B0cLORQV6VWajXNaUgJKmMybhjoNE8ONx%2BCcEpUA3CmNfvvDRha8elC%2Bn1KDP8MMSnlqVK4UPr2%2FYj%2BnP516zOWLoksDQl67xDdwyvKKimtqXuAqWh7ZX1az6YjLHFAtHJMyUBdmBZC%2BvYEjJO%2FG4EM1JmoJpbmxKjJ4KSUAfewoTFKyG7l4993YejDukNHEBjqkAQcqMXF7eGo9jq11R%2F%2BUjYF6ldDr33rsoIkSdTKXnftKwTa5QDuDjhpwugul1bk8iz%2BUZl7Jffo7np0e7YmLAV%2F3VMy36HWLbk0z1IXleLV%2Fv8aytMB6lybbafxzEvzzjDFjxQEArNbalLwR8KmxKxh5Arrytv1j%2F4yQI6hAYatWWm%2BTU%2BMOh9iuz3%2BZ3swt4qnPzL2mfLoX8kGMTMjp033NC6C0&X-Amz-Signature=683d00ba902fa3fda58d7f058b70503970619fe076868de0699ae929dab741b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRQBQ5F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCfkZGBaoeRnarAbR22KwxjnkI%2FHEyAf9v8l89gZDPe8gIhANarRwdjDgIDnIp7%2BCom95frIb9%2BoYorMFaOCC%2FFCR%2BEKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZbWg0O%2BVfcBI1zvwq3AMB0a%2B2JOJhRJqOK%2B5MPBCqTtwKE5G1G1iMni03nGq5pCdgfhviD6NsQ50uVZFV7OD6HAx8XUN9eqHEgBRCP51r2TbA250PFbuyC55y4LW%2BhehCt2kWwUpKLn%2FJzTO1Bt4tRlIA8q2NSX7%2FusjOmL%2BLulvh25cRJwpU62fX0oop9Wzuut69cOQPUCJUdRkj6Zs2driSi7%2ByLT7x%2B4zU98aZVhUvSwMDeQMCR7qi1vNuwT7%2FgwWkKUEbzGbM7Hjzs6fFv6XS14eTLmucSUxi4eJMVCVX3GXiAfHixBr4uypfir%2FIGbfpYJI2zsxwLezgsrFvXdcO7ztTpEssSSfQWpvYrYcfGcFaFX3%2BNCL0qacQ422buK5ltpZg2mgCyPvI3vMaXoMbvxdB6TvtMV1daSQk3opRHNj1lKg3R3VUBETYJi70AbxLbLIcllmO6LcA3OdG%2B0cLORQV6VWajXNaUgJKmMybhjoNE8ONx%2BCcEpUA3CmNfvvDRha8elC%2Bn1KDP8MMSnlqVK4UPr2%2FYj%2BnP516zOWLoksDQl67xDdwyvKKimtqXuAqWh7ZX1az6YjLHFAtHJMyUBdmBZC%2BvYEjJO%2FG4EM1JmoJpbmxKjJ4KSUAfewoTFKyG7l4993YejDukNHEBjqkAQcqMXF7eGo9jq11R%2F%2BUjYF6ldDr33rsoIkSdTKXnftKwTa5QDuDjhpwugul1bk8iz%2BUZl7Jffo7np0e7YmLAV%2F3VMy36HWLbk0z1IXleLV%2Fv8aytMB6lybbafxzEvzzjDFjxQEArNbalLwR8KmxKxh5Arrytv1j%2F4yQI6hAYatWWm%2BTU%2BMOh9iuz3%2BZ3swt4qnPzL2mfLoX8kGMTMjp033NC6C0&X-Amz-Signature=b9e27cc972f023cc4bb728c8776ecdfbcebfc241ac26c6fb82606cd286a68053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRQBQ5F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCfkZGBaoeRnarAbR22KwxjnkI%2FHEyAf9v8l89gZDPe8gIhANarRwdjDgIDnIp7%2BCom95frIb9%2BoYorMFaOCC%2FFCR%2BEKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZbWg0O%2BVfcBI1zvwq3AMB0a%2B2JOJhRJqOK%2B5MPBCqTtwKE5G1G1iMni03nGq5pCdgfhviD6NsQ50uVZFV7OD6HAx8XUN9eqHEgBRCP51r2TbA250PFbuyC55y4LW%2BhehCt2kWwUpKLn%2FJzTO1Bt4tRlIA8q2NSX7%2FusjOmL%2BLulvh25cRJwpU62fX0oop9Wzuut69cOQPUCJUdRkj6Zs2driSi7%2ByLT7x%2B4zU98aZVhUvSwMDeQMCR7qi1vNuwT7%2FgwWkKUEbzGbM7Hjzs6fFv6XS14eTLmucSUxi4eJMVCVX3GXiAfHixBr4uypfir%2FIGbfpYJI2zsxwLezgsrFvXdcO7ztTpEssSSfQWpvYrYcfGcFaFX3%2BNCL0qacQ422buK5ltpZg2mgCyPvI3vMaXoMbvxdB6TvtMV1daSQk3opRHNj1lKg3R3VUBETYJi70AbxLbLIcllmO6LcA3OdG%2B0cLORQV6VWajXNaUgJKmMybhjoNE8ONx%2BCcEpUA3CmNfvvDRha8elC%2Bn1KDP8MMSnlqVK4UPr2%2FYj%2BnP516zOWLoksDQl67xDdwyvKKimtqXuAqWh7ZX1az6YjLHFAtHJMyUBdmBZC%2BvYEjJO%2FG4EM1JmoJpbmxKjJ4KSUAfewoTFKyG7l4993YejDukNHEBjqkAQcqMXF7eGo9jq11R%2F%2BUjYF6ldDr33rsoIkSdTKXnftKwTa5QDuDjhpwugul1bk8iz%2BUZl7Jffo7np0e7YmLAV%2F3VMy36HWLbk0z1IXleLV%2Fv8aytMB6lybbafxzEvzzjDFjxQEArNbalLwR8KmxKxh5Arrytv1j%2F4yQI6hAYatWWm%2BTU%2BMOh9iuz3%2BZ3swt4qnPzL2mfLoX8kGMTMjp033NC6C0&X-Amz-Signature=9d10685499ec3890c29e59921cd30ddce7d2c12c4e8972113287805c1e7a6273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRQBQ5F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCfkZGBaoeRnarAbR22KwxjnkI%2FHEyAf9v8l89gZDPe8gIhANarRwdjDgIDnIp7%2BCom95frIb9%2BoYorMFaOCC%2FFCR%2BEKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZbWg0O%2BVfcBI1zvwq3AMB0a%2B2JOJhRJqOK%2B5MPBCqTtwKE5G1G1iMni03nGq5pCdgfhviD6NsQ50uVZFV7OD6HAx8XUN9eqHEgBRCP51r2TbA250PFbuyC55y4LW%2BhehCt2kWwUpKLn%2FJzTO1Bt4tRlIA8q2NSX7%2FusjOmL%2BLulvh25cRJwpU62fX0oop9Wzuut69cOQPUCJUdRkj6Zs2driSi7%2ByLT7x%2B4zU98aZVhUvSwMDeQMCR7qi1vNuwT7%2FgwWkKUEbzGbM7Hjzs6fFv6XS14eTLmucSUxi4eJMVCVX3GXiAfHixBr4uypfir%2FIGbfpYJI2zsxwLezgsrFvXdcO7ztTpEssSSfQWpvYrYcfGcFaFX3%2BNCL0qacQ422buK5ltpZg2mgCyPvI3vMaXoMbvxdB6TvtMV1daSQk3opRHNj1lKg3R3VUBETYJi70AbxLbLIcllmO6LcA3OdG%2B0cLORQV6VWajXNaUgJKmMybhjoNE8ONx%2BCcEpUA3CmNfvvDRha8elC%2Bn1KDP8MMSnlqVK4UPr2%2FYj%2BnP516zOWLoksDQl67xDdwyvKKimtqXuAqWh7ZX1az6YjLHFAtHJMyUBdmBZC%2BvYEjJO%2FG4EM1JmoJpbmxKjJ4KSUAfewoTFKyG7l4993YejDukNHEBjqkAQcqMXF7eGo9jq11R%2F%2BUjYF6ldDr33rsoIkSdTKXnftKwTa5QDuDjhpwugul1bk8iz%2BUZl7Jffo7np0e7YmLAV%2F3VMy36HWLbk0z1IXleLV%2Fv8aytMB6lybbafxzEvzzjDFjxQEArNbalLwR8KmxKxh5Arrytv1j%2F4yQI6hAYatWWm%2BTU%2BMOh9iuz3%2BZ3swt4qnPzL2mfLoX8kGMTMjp033NC6C0&X-Amz-Signature=4168e92562e6b34e67cfb0c5b473893e97f512b35e0d74119e8a415e1837ddec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRQBQ5F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCfkZGBaoeRnarAbR22KwxjnkI%2FHEyAf9v8l89gZDPe8gIhANarRwdjDgIDnIp7%2BCom95frIb9%2BoYorMFaOCC%2FFCR%2BEKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZbWg0O%2BVfcBI1zvwq3AMB0a%2B2JOJhRJqOK%2B5MPBCqTtwKE5G1G1iMni03nGq5pCdgfhviD6NsQ50uVZFV7OD6HAx8XUN9eqHEgBRCP51r2TbA250PFbuyC55y4LW%2BhehCt2kWwUpKLn%2FJzTO1Bt4tRlIA8q2NSX7%2FusjOmL%2BLulvh25cRJwpU62fX0oop9Wzuut69cOQPUCJUdRkj6Zs2driSi7%2ByLT7x%2B4zU98aZVhUvSwMDeQMCR7qi1vNuwT7%2FgwWkKUEbzGbM7Hjzs6fFv6XS14eTLmucSUxi4eJMVCVX3GXiAfHixBr4uypfir%2FIGbfpYJI2zsxwLezgsrFvXdcO7ztTpEssSSfQWpvYrYcfGcFaFX3%2BNCL0qacQ422buK5ltpZg2mgCyPvI3vMaXoMbvxdB6TvtMV1daSQk3opRHNj1lKg3R3VUBETYJi70AbxLbLIcllmO6LcA3OdG%2B0cLORQV6VWajXNaUgJKmMybhjoNE8ONx%2BCcEpUA3CmNfvvDRha8elC%2Bn1KDP8MMSnlqVK4UPr2%2FYj%2BnP516zOWLoksDQl67xDdwyvKKimtqXuAqWh7ZX1az6YjLHFAtHJMyUBdmBZC%2BvYEjJO%2FG4EM1JmoJpbmxKjJ4KSUAfewoTFKyG7l4993YejDukNHEBjqkAQcqMXF7eGo9jq11R%2F%2BUjYF6ldDr33rsoIkSdTKXnftKwTa5QDuDjhpwugul1bk8iz%2BUZl7Jffo7np0e7YmLAV%2F3VMy36HWLbk0z1IXleLV%2Fv8aytMB6lybbafxzEvzzjDFjxQEArNbalLwR8KmxKxh5Arrytv1j%2F4yQI6hAYatWWm%2BTU%2BMOh9iuz3%2BZ3swt4qnPzL2mfLoX8kGMTMjp033NC6C0&X-Amz-Signature=c76a42ed3e2d2059c4c1cec4d75e87a459e06fb82174209830b1804d5efddc41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRQBQ5F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCfkZGBaoeRnarAbR22KwxjnkI%2FHEyAf9v8l89gZDPe8gIhANarRwdjDgIDnIp7%2BCom95frIb9%2BoYorMFaOCC%2FFCR%2BEKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZbWg0O%2BVfcBI1zvwq3AMB0a%2B2JOJhRJqOK%2B5MPBCqTtwKE5G1G1iMni03nGq5pCdgfhviD6NsQ50uVZFV7OD6HAx8XUN9eqHEgBRCP51r2TbA250PFbuyC55y4LW%2BhehCt2kWwUpKLn%2FJzTO1Bt4tRlIA8q2NSX7%2FusjOmL%2BLulvh25cRJwpU62fX0oop9Wzuut69cOQPUCJUdRkj6Zs2driSi7%2ByLT7x%2B4zU98aZVhUvSwMDeQMCR7qi1vNuwT7%2FgwWkKUEbzGbM7Hjzs6fFv6XS14eTLmucSUxi4eJMVCVX3GXiAfHixBr4uypfir%2FIGbfpYJI2zsxwLezgsrFvXdcO7ztTpEssSSfQWpvYrYcfGcFaFX3%2BNCL0qacQ422buK5ltpZg2mgCyPvI3vMaXoMbvxdB6TvtMV1daSQk3opRHNj1lKg3R3VUBETYJi70AbxLbLIcllmO6LcA3OdG%2B0cLORQV6VWajXNaUgJKmMybhjoNE8ONx%2BCcEpUA3CmNfvvDRha8elC%2Bn1KDP8MMSnlqVK4UPr2%2FYj%2BnP516zOWLoksDQl67xDdwyvKKimtqXuAqWh7ZX1az6YjLHFAtHJMyUBdmBZC%2BvYEjJO%2FG4EM1JmoJpbmxKjJ4KSUAfewoTFKyG7l4993YejDukNHEBjqkAQcqMXF7eGo9jq11R%2F%2BUjYF6ldDr33rsoIkSdTKXnftKwTa5QDuDjhpwugul1bk8iz%2BUZl7Jffo7np0e7YmLAV%2F3VMy36HWLbk0z1IXleLV%2Fv8aytMB6lybbafxzEvzzjDFjxQEArNbalLwR8KmxKxh5Arrytv1j%2F4yQI6hAYatWWm%2BTU%2BMOh9iuz3%2BZ3swt4qnPzL2mfLoX8kGMTMjp033NC6C0&X-Amz-Signature=3c9a1c6f425e57ec1c2a6fa36fdd291b23058f67c16f8523e101241d72f055cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRQBQ5F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCfkZGBaoeRnarAbR22KwxjnkI%2FHEyAf9v8l89gZDPe8gIhANarRwdjDgIDnIp7%2BCom95frIb9%2BoYorMFaOCC%2FFCR%2BEKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZbWg0O%2BVfcBI1zvwq3AMB0a%2B2JOJhRJqOK%2B5MPBCqTtwKE5G1G1iMni03nGq5pCdgfhviD6NsQ50uVZFV7OD6HAx8XUN9eqHEgBRCP51r2TbA250PFbuyC55y4LW%2BhehCt2kWwUpKLn%2FJzTO1Bt4tRlIA8q2NSX7%2FusjOmL%2BLulvh25cRJwpU62fX0oop9Wzuut69cOQPUCJUdRkj6Zs2driSi7%2ByLT7x%2B4zU98aZVhUvSwMDeQMCR7qi1vNuwT7%2FgwWkKUEbzGbM7Hjzs6fFv6XS14eTLmucSUxi4eJMVCVX3GXiAfHixBr4uypfir%2FIGbfpYJI2zsxwLezgsrFvXdcO7ztTpEssSSfQWpvYrYcfGcFaFX3%2BNCL0qacQ422buK5ltpZg2mgCyPvI3vMaXoMbvxdB6TvtMV1daSQk3opRHNj1lKg3R3VUBETYJi70AbxLbLIcllmO6LcA3OdG%2B0cLORQV6VWajXNaUgJKmMybhjoNE8ONx%2BCcEpUA3CmNfvvDRha8elC%2Bn1KDP8MMSnlqVK4UPr2%2FYj%2BnP516zOWLoksDQl67xDdwyvKKimtqXuAqWh7ZX1az6YjLHFAtHJMyUBdmBZC%2BvYEjJO%2FG4EM1JmoJpbmxKjJ4KSUAfewoTFKyG7l4993YejDukNHEBjqkAQcqMXF7eGo9jq11R%2F%2BUjYF6ldDr33rsoIkSdTKXnftKwTa5QDuDjhpwugul1bk8iz%2BUZl7Jffo7np0e7YmLAV%2F3VMy36HWLbk0z1IXleLV%2Fv8aytMB6lybbafxzEvzzjDFjxQEArNbalLwR8KmxKxh5Arrytv1j%2F4yQI6hAYatWWm%2BTU%2BMOh9iuz3%2BZ3swt4qnPzL2mfLoX8kGMTMjp033NC6C0&X-Amz-Signature=005ffff08f2470bd5ba62f421e21057753d67fe906ee99cf7c1f1f47eb7c6432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
