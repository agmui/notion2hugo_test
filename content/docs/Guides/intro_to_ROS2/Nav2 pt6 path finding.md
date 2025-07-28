---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LYI3Q4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDJ9AqXq7QU3Ng3PEJMlyLpXt2v%2FjSEfd8Wbq6ivDZ2GgIgLvbb9dYy8RVw3oEAJ99YAmGfmzeVfme2xt7LbqjDXHYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B4pr6h0yJ3CuLgsyrcA4NzqIh%2Fm41elIML7D80Tu6WsSIinME%2BuXBF%2FcdVslOQA%2FJB1sf%2BNdtrMjYau0HDFOo9VBygO1DMeoh0M7Yk1TGDToGff3iW%2BasxA5mRyRNX6bxlVYCBk7jHsITQclHoaNcLZuHvFXyKLX937oXbe56UpqWSehE4mwvV%2FyWDA4qGyfQIl%2FEZdzbcbDJcANSbi0xMeFHwfeGfyMa%2FRrcSb2LqksBHVAofTnshe6yI%2BwV8n3B0SvIcGu5yixP%2BaLsw9BOYPRWg47hOahCLfFKAniScYcx4lpfPOFhtuaTsZtbkzoahNp3oUovXst6lwjQH2yZUl8%2F7GPr3aJsCF51aSAlgdGH0o7eH%2BWB%2FlhFXBoEiyuWci1SSCEkFTismd59YzObZ3XkCvkPa73SxlK8beEgG%2BeozxhQERwvn6awmj7G64NCiI8GJmub0FACcwy5jN8B%2FMuD%2F0BsKNucrmxHYRHOcRO%2FSRMhyoX4sE%2BHdCcHqtwT8GZPKteqnlWq5jIC92ZnFPSKF0slVP1xxUFiKSJUPEbLuLnSww1ya9%2Fz8YG%2FqFNFtF6mLQ7XXTAT2zTKDnRIFH9A1iQ09SOXH5LgWm4%2Bnoz6arKsFa827%2ByOPNSe5uk9ZNvQnNRJmuzjOMNqPnMQGOqUBL6IFDzU8nSJtH%2FKXNPZm0Ya8fwAAG7w33aaVqZzuVSotsPEQPMuCex9fMhYszC%2FlXZ9W6wtKEhY8ghIst4tg3uE05qXeLBawCtrXtmFrh8g4YluQiK3c2nkbGJKWYtQMCk1%2FYcwgEnOwr8bM2Fxt3bdLYtpj5NwyKe1OqWF4CJVK1Oa%2B8i9O3YCCjHnokcZS1s7fsLVNtswKo2Bxz7H42mY%2FQjJa&X-Amz-Signature=955f458105135e388c5f2309f8f219527348310c77ba9507cd40f0eb3f7b43f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

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

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LYI3Q4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDJ9AqXq7QU3Ng3PEJMlyLpXt2v%2FjSEfd8Wbq6ivDZ2GgIgLvbb9dYy8RVw3oEAJ99YAmGfmzeVfme2xt7LbqjDXHYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B4pr6h0yJ3CuLgsyrcA4NzqIh%2Fm41elIML7D80Tu6WsSIinME%2BuXBF%2FcdVslOQA%2FJB1sf%2BNdtrMjYau0HDFOo9VBygO1DMeoh0M7Yk1TGDToGff3iW%2BasxA5mRyRNX6bxlVYCBk7jHsITQclHoaNcLZuHvFXyKLX937oXbe56UpqWSehE4mwvV%2FyWDA4qGyfQIl%2FEZdzbcbDJcANSbi0xMeFHwfeGfyMa%2FRrcSb2LqksBHVAofTnshe6yI%2BwV8n3B0SvIcGu5yixP%2BaLsw9BOYPRWg47hOahCLfFKAniScYcx4lpfPOFhtuaTsZtbkzoahNp3oUovXst6lwjQH2yZUl8%2F7GPr3aJsCF51aSAlgdGH0o7eH%2BWB%2FlhFXBoEiyuWci1SSCEkFTismd59YzObZ3XkCvkPa73SxlK8beEgG%2BeozxhQERwvn6awmj7G64NCiI8GJmub0FACcwy5jN8B%2FMuD%2F0BsKNucrmxHYRHOcRO%2FSRMhyoX4sE%2BHdCcHqtwT8GZPKteqnlWq5jIC92ZnFPSKF0slVP1xxUFiKSJUPEbLuLnSww1ya9%2Fz8YG%2FqFNFtF6mLQ7XXTAT2zTKDnRIFH9A1iQ09SOXH5LgWm4%2Bnoz6arKsFa827%2ByOPNSe5uk9ZNvQnNRJmuzjOMNqPnMQGOqUBL6IFDzU8nSJtH%2FKXNPZm0Ya8fwAAG7w33aaVqZzuVSotsPEQPMuCex9fMhYszC%2FlXZ9W6wtKEhY8ghIst4tg3uE05qXeLBawCtrXtmFrh8g4YluQiK3c2nkbGJKWYtQMCk1%2FYcwgEnOwr8bM2Fxt3bdLYtpj5NwyKe1OqWF4CJVK1Oa%2B8i9O3YCCjHnokcZS1s7fsLVNtswKo2Bxz7H42mY%2FQjJa&X-Amz-Signature=6f693369e4c1558360faff02b8fbc5365d928917e588c8baec297aa46468af3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LYI3Q4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDJ9AqXq7QU3Ng3PEJMlyLpXt2v%2FjSEfd8Wbq6ivDZ2GgIgLvbb9dYy8RVw3oEAJ99YAmGfmzeVfme2xt7LbqjDXHYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B4pr6h0yJ3CuLgsyrcA4NzqIh%2Fm41elIML7D80Tu6WsSIinME%2BuXBF%2FcdVslOQA%2FJB1sf%2BNdtrMjYau0HDFOo9VBygO1DMeoh0M7Yk1TGDToGff3iW%2BasxA5mRyRNX6bxlVYCBk7jHsITQclHoaNcLZuHvFXyKLX937oXbe56UpqWSehE4mwvV%2FyWDA4qGyfQIl%2FEZdzbcbDJcANSbi0xMeFHwfeGfyMa%2FRrcSb2LqksBHVAofTnshe6yI%2BwV8n3B0SvIcGu5yixP%2BaLsw9BOYPRWg47hOahCLfFKAniScYcx4lpfPOFhtuaTsZtbkzoahNp3oUovXst6lwjQH2yZUl8%2F7GPr3aJsCF51aSAlgdGH0o7eH%2BWB%2FlhFXBoEiyuWci1SSCEkFTismd59YzObZ3XkCvkPa73SxlK8beEgG%2BeozxhQERwvn6awmj7G64NCiI8GJmub0FACcwy5jN8B%2FMuD%2F0BsKNucrmxHYRHOcRO%2FSRMhyoX4sE%2BHdCcHqtwT8GZPKteqnlWq5jIC92ZnFPSKF0slVP1xxUFiKSJUPEbLuLnSww1ya9%2Fz8YG%2FqFNFtF6mLQ7XXTAT2zTKDnRIFH9A1iQ09SOXH5LgWm4%2Bnoz6arKsFa827%2ByOPNSe5uk9ZNvQnNRJmuzjOMNqPnMQGOqUBL6IFDzU8nSJtH%2FKXNPZm0Ya8fwAAG7w33aaVqZzuVSotsPEQPMuCex9fMhYszC%2FlXZ9W6wtKEhY8ghIst4tg3uE05qXeLBawCtrXtmFrh8g4YluQiK3c2nkbGJKWYtQMCk1%2FYcwgEnOwr8bM2Fxt3bdLYtpj5NwyKe1OqWF4CJVK1Oa%2B8i9O3YCCjHnokcZS1s7fsLVNtswKo2Bxz7H42mY%2FQjJa&X-Amz-Signature=668d06defb97b2139b410baf081e6bb33e0182bc87e0ec0c80ff2ced2bd2160b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LYI3Q4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDJ9AqXq7QU3Ng3PEJMlyLpXt2v%2FjSEfd8Wbq6ivDZ2GgIgLvbb9dYy8RVw3oEAJ99YAmGfmzeVfme2xt7LbqjDXHYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B4pr6h0yJ3CuLgsyrcA4NzqIh%2Fm41elIML7D80Tu6WsSIinME%2BuXBF%2FcdVslOQA%2FJB1sf%2BNdtrMjYau0HDFOo9VBygO1DMeoh0M7Yk1TGDToGff3iW%2BasxA5mRyRNX6bxlVYCBk7jHsITQclHoaNcLZuHvFXyKLX937oXbe56UpqWSehE4mwvV%2FyWDA4qGyfQIl%2FEZdzbcbDJcANSbi0xMeFHwfeGfyMa%2FRrcSb2LqksBHVAofTnshe6yI%2BwV8n3B0SvIcGu5yixP%2BaLsw9BOYPRWg47hOahCLfFKAniScYcx4lpfPOFhtuaTsZtbkzoahNp3oUovXst6lwjQH2yZUl8%2F7GPr3aJsCF51aSAlgdGH0o7eH%2BWB%2FlhFXBoEiyuWci1SSCEkFTismd59YzObZ3XkCvkPa73SxlK8beEgG%2BeozxhQERwvn6awmj7G64NCiI8GJmub0FACcwy5jN8B%2FMuD%2F0BsKNucrmxHYRHOcRO%2FSRMhyoX4sE%2BHdCcHqtwT8GZPKteqnlWq5jIC92ZnFPSKF0slVP1xxUFiKSJUPEbLuLnSww1ya9%2Fz8YG%2FqFNFtF6mLQ7XXTAT2zTKDnRIFH9A1iQ09SOXH5LgWm4%2Bnoz6arKsFa827%2ByOPNSe5uk9ZNvQnNRJmuzjOMNqPnMQGOqUBL6IFDzU8nSJtH%2FKXNPZm0Ya8fwAAG7w33aaVqZzuVSotsPEQPMuCex9fMhYszC%2FlXZ9W6wtKEhY8ghIst4tg3uE05qXeLBawCtrXtmFrh8g4YluQiK3c2nkbGJKWYtQMCk1%2FYcwgEnOwr8bM2Fxt3bdLYtpj5NwyKe1OqWF4CJVK1Oa%2B8i9O3YCCjHnokcZS1s7fsLVNtswKo2Bxz7H42mY%2FQjJa&X-Amz-Signature=8c35dc51b72fca1ef80ae53b2442b7cbf347eb5903f8aa06c85f549641ca35a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LYI3Q4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDJ9AqXq7QU3Ng3PEJMlyLpXt2v%2FjSEfd8Wbq6ivDZ2GgIgLvbb9dYy8RVw3oEAJ99YAmGfmzeVfme2xt7LbqjDXHYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B4pr6h0yJ3CuLgsyrcA4NzqIh%2Fm41elIML7D80Tu6WsSIinME%2BuXBF%2FcdVslOQA%2FJB1sf%2BNdtrMjYau0HDFOo9VBygO1DMeoh0M7Yk1TGDToGff3iW%2BasxA5mRyRNX6bxlVYCBk7jHsITQclHoaNcLZuHvFXyKLX937oXbe56UpqWSehE4mwvV%2FyWDA4qGyfQIl%2FEZdzbcbDJcANSbi0xMeFHwfeGfyMa%2FRrcSb2LqksBHVAofTnshe6yI%2BwV8n3B0SvIcGu5yixP%2BaLsw9BOYPRWg47hOahCLfFKAniScYcx4lpfPOFhtuaTsZtbkzoahNp3oUovXst6lwjQH2yZUl8%2F7GPr3aJsCF51aSAlgdGH0o7eH%2BWB%2FlhFXBoEiyuWci1SSCEkFTismd59YzObZ3XkCvkPa73SxlK8beEgG%2BeozxhQERwvn6awmj7G64NCiI8GJmub0FACcwy5jN8B%2FMuD%2F0BsKNucrmxHYRHOcRO%2FSRMhyoX4sE%2BHdCcHqtwT8GZPKteqnlWq5jIC92ZnFPSKF0slVP1xxUFiKSJUPEbLuLnSww1ya9%2Fz8YG%2FqFNFtF6mLQ7XXTAT2zTKDnRIFH9A1iQ09SOXH5LgWm4%2Bnoz6arKsFa827%2ByOPNSe5uk9ZNvQnNRJmuzjOMNqPnMQGOqUBL6IFDzU8nSJtH%2FKXNPZm0Ya8fwAAG7w33aaVqZzuVSotsPEQPMuCex9fMhYszC%2FlXZ9W6wtKEhY8ghIst4tg3uE05qXeLBawCtrXtmFrh8g4YluQiK3c2nkbGJKWYtQMCk1%2FYcwgEnOwr8bM2Fxt3bdLYtpj5NwyKe1OqWF4CJVK1Oa%2B8i9O3YCCjHnokcZS1s7fsLVNtswKo2Bxz7H42mY%2FQjJa&X-Amz-Signature=26d66c7c0b2a46b5187c486dce0b4e8c1c8148e517f12ef8a057e13898df6e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LYI3Q4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDJ9AqXq7QU3Ng3PEJMlyLpXt2v%2FjSEfd8Wbq6ivDZ2GgIgLvbb9dYy8RVw3oEAJ99YAmGfmzeVfme2xt7LbqjDXHYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B4pr6h0yJ3CuLgsyrcA4NzqIh%2Fm41elIML7D80Tu6WsSIinME%2BuXBF%2FcdVslOQA%2FJB1sf%2BNdtrMjYau0HDFOo9VBygO1DMeoh0M7Yk1TGDToGff3iW%2BasxA5mRyRNX6bxlVYCBk7jHsITQclHoaNcLZuHvFXyKLX937oXbe56UpqWSehE4mwvV%2FyWDA4qGyfQIl%2FEZdzbcbDJcANSbi0xMeFHwfeGfyMa%2FRrcSb2LqksBHVAofTnshe6yI%2BwV8n3B0SvIcGu5yixP%2BaLsw9BOYPRWg47hOahCLfFKAniScYcx4lpfPOFhtuaTsZtbkzoahNp3oUovXst6lwjQH2yZUl8%2F7GPr3aJsCF51aSAlgdGH0o7eH%2BWB%2FlhFXBoEiyuWci1SSCEkFTismd59YzObZ3XkCvkPa73SxlK8beEgG%2BeozxhQERwvn6awmj7G64NCiI8GJmub0FACcwy5jN8B%2FMuD%2F0BsKNucrmxHYRHOcRO%2FSRMhyoX4sE%2BHdCcHqtwT8GZPKteqnlWq5jIC92ZnFPSKF0slVP1xxUFiKSJUPEbLuLnSww1ya9%2Fz8YG%2FqFNFtF6mLQ7XXTAT2zTKDnRIFH9A1iQ09SOXH5LgWm4%2Bnoz6arKsFa827%2ByOPNSe5uk9ZNvQnNRJmuzjOMNqPnMQGOqUBL6IFDzU8nSJtH%2FKXNPZm0Ya8fwAAG7w33aaVqZzuVSotsPEQPMuCex9fMhYszC%2FlXZ9W6wtKEhY8ghIst4tg3uE05qXeLBawCtrXtmFrh8g4YluQiK3c2nkbGJKWYtQMCk1%2FYcwgEnOwr8bM2Fxt3bdLYtpj5NwyKe1OqWF4CJVK1Oa%2B8i9O3YCCjHnokcZS1s7fsLVNtswKo2Bxz7H42mY%2FQjJa&X-Amz-Signature=f7cec641a763759b715e910996a460b03d1c2de37c3c34ba679ca90df60d59e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

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
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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

# Nav2 settings

TODO: change footprint?
