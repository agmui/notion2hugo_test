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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZMAZYM2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCOVW4TFpE6SvF2%2F%2BvOykOfNE2uc9XIyNHyx9yeTT999AIhAPX4riC98C7%2FRfENopEuuAxcE8Ol7YWAGrMkOzV%2BeFtsKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy9QcYea0iprugjCQq3AOhOBK4AwmB%2FDe8wdgb%2Bmi42CHCFTIaQY11ixa66wWWD7G27xH4wXjBIxRq5VynD7z17j04BA0JXX4dXMN5mpNnkLZ8O5RlItMyptvB8eFirIgBw9di8uRVZZuX%2FCd%2FDZC55r55Z32N4lU%2BgVd9phIhScNYRjlk31fhF2sNdbSoLd79si9x%2BaVLBPd1w351cKlPlRkz%2Fk3c%2BcDUyBadB5OAk7l9f4iDLqkm0eotAgbN8BywsLS9SCkJ0LCpiSGZtgPx3GGAp%2B9VBpEuuNUj50dmPBr878IGaqUAtMzMVUbzA3HmhTXgFy1QF8Xtqkxt7ZRdR73ur%2FzYhkmoQcLvjA6NC1iAF2bV3hJgnp1Er5in27EmWzwx0hYCaqiiy72HQOhcZquCvig%2Bi1N2gozHAmTsXSGm6fWRQHGvLQapRaFy7%2BsTmrJgsgpyWBm35tUgGHPOVyRzWe4%2BqWNGKQrOkJ3NdkA3dBUAxms4zwtOE2sLm7BsLA%2F9gPZ0dmMnAnll%2B8KT%2FhZYIDaTysSABV2cmuBgx1bv5SU2UmIkD62ukmaR97G%2BK77%2BPySA3P2cp6B5U4WPgE%2FB2%2BMANFaO5%2FnfFeT1lg7OCRHX2XStM7utRdLRmkvTDvgsJNOLgOH6jzDEyNDEBjqkAV72qJIBwGpyZl0z2OSHqnjkpCYPiXpkRu98tSWI42NRSFPCLaGPc5TxpeVrKVsUCjOD%2F8LOG0PyFAk4wXgpC9XmF1KyRT%2FYVB%2FJSGRx8mwjqEdBP5KgdXndnULhAQoD%2B1iC31WZwRDuf1nrOXJ6MRcVJtPzm0r%2F5UUZ%2BbxRgyzwqYDMrijMas3sl%2BeWish0xsYGrdjUNK%2FF3AF4WcnSdcZwsNEf&X-Amz-Signature=90028551a0099ff5e1dbe09ed2e16c96961a7c82f82e206410e28a16e79e8ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZMAZYM2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCOVW4TFpE6SvF2%2F%2BvOykOfNE2uc9XIyNHyx9yeTT999AIhAPX4riC98C7%2FRfENopEuuAxcE8Ol7YWAGrMkOzV%2BeFtsKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy9QcYea0iprugjCQq3AOhOBK4AwmB%2FDe8wdgb%2Bmi42CHCFTIaQY11ixa66wWWD7G27xH4wXjBIxRq5VynD7z17j04BA0JXX4dXMN5mpNnkLZ8O5RlItMyptvB8eFirIgBw9di8uRVZZuX%2FCd%2FDZC55r55Z32N4lU%2BgVd9phIhScNYRjlk31fhF2sNdbSoLd79si9x%2BaVLBPd1w351cKlPlRkz%2Fk3c%2BcDUyBadB5OAk7l9f4iDLqkm0eotAgbN8BywsLS9SCkJ0LCpiSGZtgPx3GGAp%2B9VBpEuuNUj50dmPBr878IGaqUAtMzMVUbzA3HmhTXgFy1QF8Xtqkxt7ZRdR73ur%2FzYhkmoQcLvjA6NC1iAF2bV3hJgnp1Er5in27EmWzwx0hYCaqiiy72HQOhcZquCvig%2Bi1N2gozHAmTsXSGm6fWRQHGvLQapRaFy7%2BsTmrJgsgpyWBm35tUgGHPOVyRzWe4%2BqWNGKQrOkJ3NdkA3dBUAxms4zwtOE2sLm7BsLA%2F9gPZ0dmMnAnll%2B8KT%2FhZYIDaTysSABV2cmuBgx1bv5SU2UmIkD62ukmaR97G%2BK77%2BPySA3P2cp6B5U4WPgE%2FB2%2BMANFaO5%2FnfFeT1lg7OCRHX2XStM7utRdLRmkvTDvgsJNOLgOH6jzDEyNDEBjqkAV72qJIBwGpyZl0z2OSHqnjkpCYPiXpkRu98tSWI42NRSFPCLaGPc5TxpeVrKVsUCjOD%2F8LOG0PyFAk4wXgpC9XmF1KyRT%2FYVB%2FJSGRx8mwjqEdBP5KgdXndnULhAQoD%2B1iC31WZwRDuf1nrOXJ6MRcVJtPzm0r%2F5UUZ%2BbxRgyzwqYDMrijMas3sl%2BeWish0xsYGrdjUNK%2FF3AF4WcnSdcZwsNEf&X-Amz-Signature=145b9ca9ac370304af96a8cf8290541869267c24a3ae52ab5131dc4142faf3e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZMAZYM2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCOVW4TFpE6SvF2%2F%2BvOykOfNE2uc9XIyNHyx9yeTT999AIhAPX4riC98C7%2FRfENopEuuAxcE8Ol7YWAGrMkOzV%2BeFtsKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy9QcYea0iprugjCQq3AOhOBK4AwmB%2FDe8wdgb%2Bmi42CHCFTIaQY11ixa66wWWD7G27xH4wXjBIxRq5VynD7z17j04BA0JXX4dXMN5mpNnkLZ8O5RlItMyptvB8eFirIgBw9di8uRVZZuX%2FCd%2FDZC55r55Z32N4lU%2BgVd9phIhScNYRjlk31fhF2sNdbSoLd79si9x%2BaVLBPd1w351cKlPlRkz%2Fk3c%2BcDUyBadB5OAk7l9f4iDLqkm0eotAgbN8BywsLS9SCkJ0LCpiSGZtgPx3GGAp%2B9VBpEuuNUj50dmPBr878IGaqUAtMzMVUbzA3HmhTXgFy1QF8Xtqkxt7ZRdR73ur%2FzYhkmoQcLvjA6NC1iAF2bV3hJgnp1Er5in27EmWzwx0hYCaqiiy72HQOhcZquCvig%2Bi1N2gozHAmTsXSGm6fWRQHGvLQapRaFy7%2BsTmrJgsgpyWBm35tUgGHPOVyRzWe4%2BqWNGKQrOkJ3NdkA3dBUAxms4zwtOE2sLm7BsLA%2F9gPZ0dmMnAnll%2B8KT%2FhZYIDaTysSABV2cmuBgx1bv5SU2UmIkD62ukmaR97G%2BK77%2BPySA3P2cp6B5U4WPgE%2FB2%2BMANFaO5%2FnfFeT1lg7OCRHX2XStM7utRdLRmkvTDvgsJNOLgOH6jzDEyNDEBjqkAV72qJIBwGpyZl0z2OSHqnjkpCYPiXpkRu98tSWI42NRSFPCLaGPc5TxpeVrKVsUCjOD%2F8LOG0PyFAk4wXgpC9XmF1KyRT%2FYVB%2FJSGRx8mwjqEdBP5KgdXndnULhAQoD%2B1iC31WZwRDuf1nrOXJ6MRcVJtPzm0r%2F5UUZ%2BbxRgyzwqYDMrijMas3sl%2BeWish0xsYGrdjUNK%2FF3AF4WcnSdcZwsNEf&X-Amz-Signature=71f3736bde63238428d27259f4a8d4908ce927c77d10ab4979f9378ebecc962f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZMAZYM2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCOVW4TFpE6SvF2%2F%2BvOykOfNE2uc9XIyNHyx9yeTT999AIhAPX4riC98C7%2FRfENopEuuAxcE8Ol7YWAGrMkOzV%2BeFtsKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy9QcYea0iprugjCQq3AOhOBK4AwmB%2FDe8wdgb%2Bmi42CHCFTIaQY11ixa66wWWD7G27xH4wXjBIxRq5VynD7z17j04BA0JXX4dXMN5mpNnkLZ8O5RlItMyptvB8eFirIgBw9di8uRVZZuX%2FCd%2FDZC55r55Z32N4lU%2BgVd9phIhScNYRjlk31fhF2sNdbSoLd79si9x%2BaVLBPd1w351cKlPlRkz%2Fk3c%2BcDUyBadB5OAk7l9f4iDLqkm0eotAgbN8BywsLS9SCkJ0LCpiSGZtgPx3GGAp%2B9VBpEuuNUj50dmPBr878IGaqUAtMzMVUbzA3HmhTXgFy1QF8Xtqkxt7ZRdR73ur%2FzYhkmoQcLvjA6NC1iAF2bV3hJgnp1Er5in27EmWzwx0hYCaqiiy72HQOhcZquCvig%2Bi1N2gozHAmTsXSGm6fWRQHGvLQapRaFy7%2BsTmrJgsgpyWBm35tUgGHPOVyRzWe4%2BqWNGKQrOkJ3NdkA3dBUAxms4zwtOE2sLm7BsLA%2F9gPZ0dmMnAnll%2B8KT%2FhZYIDaTysSABV2cmuBgx1bv5SU2UmIkD62ukmaR97G%2BK77%2BPySA3P2cp6B5U4WPgE%2FB2%2BMANFaO5%2FnfFeT1lg7OCRHX2XStM7utRdLRmkvTDvgsJNOLgOH6jzDEyNDEBjqkAV72qJIBwGpyZl0z2OSHqnjkpCYPiXpkRu98tSWI42NRSFPCLaGPc5TxpeVrKVsUCjOD%2F8LOG0PyFAk4wXgpC9XmF1KyRT%2FYVB%2FJSGRx8mwjqEdBP5KgdXndnULhAQoD%2B1iC31WZwRDuf1nrOXJ6MRcVJtPzm0r%2F5UUZ%2BbxRgyzwqYDMrijMas3sl%2BeWish0xsYGrdjUNK%2FF3AF4WcnSdcZwsNEf&X-Amz-Signature=3c91c45fd506c0a8e89d8b3041dbf504a13bacfcefb7e2d8a53a5628606f44d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZMAZYM2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCOVW4TFpE6SvF2%2F%2BvOykOfNE2uc9XIyNHyx9yeTT999AIhAPX4riC98C7%2FRfENopEuuAxcE8Ol7YWAGrMkOzV%2BeFtsKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy9QcYea0iprugjCQq3AOhOBK4AwmB%2FDe8wdgb%2Bmi42CHCFTIaQY11ixa66wWWD7G27xH4wXjBIxRq5VynD7z17j04BA0JXX4dXMN5mpNnkLZ8O5RlItMyptvB8eFirIgBw9di8uRVZZuX%2FCd%2FDZC55r55Z32N4lU%2BgVd9phIhScNYRjlk31fhF2sNdbSoLd79si9x%2BaVLBPd1w351cKlPlRkz%2Fk3c%2BcDUyBadB5OAk7l9f4iDLqkm0eotAgbN8BywsLS9SCkJ0LCpiSGZtgPx3GGAp%2B9VBpEuuNUj50dmPBr878IGaqUAtMzMVUbzA3HmhTXgFy1QF8Xtqkxt7ZRdR73ur%2FzYhkmoQcLvjA6NC1iAF2bV3hJgnp1Er5in27EmWzwx0hYCaqiiy72HQOhcZquCvig%2Bi1N2gozHAmTsXSGm6fWRQHGvLQapRaFy7%2BsTmrJgsgpyWBm35tUgGHPOVyRzWe4%2BqWNGKQrOkJ3NdkA3dBUAxms4zwtOE2sLm7BsLA%2F9gPZ0dmMnAnll%2B8KT%2FhZYIDaTysSABV2cmuBgx1bv5SU2UmIkD62ukmaR97G%2BK77%2BPySA3P2cp6B5U4WPgE%2FB2%2BMANFaO5%2FnfFeT1lg7OCRHX2XStM7utRdLRmkvTDvgsJNOLgOH6jzDEyNDEBjqkAV72qJIBwGpyZl0z2OSHqnjkpCYPiXpkRu98tSWI42NRSFPCLaGPc5TxpeVrKVsUCjOD%2F8LOG0PyFAk4wXgpC9XmF1KyRT%2FYVB%2FJSGRx8mwjqEdBP5KgdXndnULhAQoD%2B1iC31WZwRDuf1nrOXJ6MRcVJtPzm0r%2F5UUZ%2BbxRgyzwqYDMrijMas3sl%2BeWish0xsYGrdjUNK%2FF3AF4WcnSdcZwsNEf&X-Amz-Signature=cdcb9950c3b993e5026874250c36189ec31e2b2aa2eab350ff96a32893e64153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZMAZYM2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCOVW4TFpE6SvF2%2F%2BvOykOfNE2uc9XIyNHyx9yeTT999AIhAPX4riC98C7%2FRfENopEuuAxcE8Ol7YWAGrMkOzV%2BeFtsKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy9QcYea0iprugjCQq3AOhOBK4AwmB%2FDe8wdgb%2Bmi42CHCFTIaQY11ixa66wWWD7G27xH4wXjBIxRq5VynD7z17j04BA0JXX4dXMN5mpNnkLZ8O5RlItMyptvB8eFirIgBw9di8uRVZZuX%2FCd%2FDZC55r55Z32N4lU%2BgVd9phIhScNYRjlk31fhF2sNdbSoLd79si9x%2BaVLBPd1w351cKlPlRkz%2Fk3c%2BcDUyBadB5OAk7l9f4iDLqkm0eotAgbN8BywsLS9SCkJ0LCpiSGZtgPx3GGAp%2B9VBpEuuNUj50dmPBr878IGaqUAtMzMVUbzA3HmhTXgFy1QF8Xtqkxt7ZRdR73ur%2FzYhkmoQcLvjA6NC1iAF2bV3hJgnp1Er5in27EmWzwx0hYCaqiiy72HQOhcZquCvig%2Bi1N2gozHAmTsXSGm6fWRQHGvLQapRaFy7%2BsTmrJgsgpyWBm35tUgGHPOVyRzWe4%2BqWNGKQrOkJ3NdkA3dBUAxms4zwtOE2sLm7BsLA%2F9gPZ0dmMnAnll%2B8KT%2FhZYIDaTysSABV2cmuBgx1bv5SU2UmIkD62ukmaR97G%2BK77%2BPySA3P2cp6B5U4WPgE%2FB2%2BMANFaO5%2FnfFeT1lg7OCRHX2XStM7utRdLRmkvTDvgsJNOLgOH6jzDEyNDEBjqkAV72qJIBwGpyZl0z2OSHqnjkpCYPiXpkRu98tSWI42NRSFPCLaGPc5TxpeVrKVsUCjOD%2F8LOG0PyFAk4wXgpC9XmF1KyRT%2FYVB%2FJSGRx8mwjqEdBP5KgdXndnULhAQoD%2B1iC31WZwRDuf1nrOXJ6MRcVJtPzm0r%2F5UUZ%2BbxRgyzwqYDMrijMas3sl%2BeWish0xsYGrdjUNK%2FF3AF4WcnSdcZwsNEf&X-Amz-Signature=a3dd68ed6225c3958d3fa9fb30ada76007111255ba31ed9ec0ef8022eb3e5958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZMAZYM2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCOVW4TFpE6SvF2%2F%2BvOykOfNE2uc9XIyNHyx9yeTT999AIhAPX4riC98C7%2FRfENopEuuAxcE8Ol7YWAGrMkOzV%2BeFtsKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy9QcYea0iprugjCQq3AOhOBK4AwmB%2FDe8wdgb%2Bmi42CHCFTIaQY11ixa66wWWD7G27xH4wXjBIxRq5VynD7z17j04BA0JXX4dXMN5mpNnkLZ8O5RlItMyptvB8eFirIgBw9di8uRVZZuX%2FCd%2FDZC55r55Z32N4lU%2BgVd9phIhScNYRjlk31fhF2sNdbSoLd79si9x%2BaVLBPd1w351cKlPlRkz%2Fk3c%2BcDUyBadB5OAk7l9f4iDLqkm0eotAgbN8BywsLS9SCkJ0LCpiSGZtgPx3GGAp%2B9VBpEuuNUj50dmPBr878IGaqUAtMzMVUbzA3HmhTXgFy1QF8Xtqkxt7ZRdR73ur%2FzYhkmoQcLvjA6NC1iAF2bV3hJgnp1Er5in27EmWzwx0hYCaqiiy72HQOhcZquCvig%2Bi1N2gozHAmTsXSGm6fWRQHGvLQapRaFy7%2BsTmrJgsgpyWBm35tUgGHPOVyRzWe4%2BqWNGKQrOkJ3NdkA3dBUAxms4zwtOE2sLm7BsLA%2F9gPZ0dmMnAnll%2B8KT%2FhZYIDaTysSABV2cmuBgx1bv5SU2UmIkD62ukmaR97G%2BK77%2BPySA3P2cp6B5U4WPgE%2FB2%2BMANFaO5%2FnfFeT1lg7OCRHX2XStM7utRdLRmkvTDvgsJNOLgOH6jzDEyNDEBjqkAV72qJIBwGpyZl0z2OSHqnjkpCYPiXpkRu98tSWI42NRSFPCLaGPc5TxpeVrKVsUCjOD%2F8LOG0PyFAk4wXgpC9XmF1KyRT%2FYVB%2FJSGRx8mwjqEdBP5KgdXndnULhAQoD%2B1iC31WZwRDuf1nrOXJ6MRcVJtPzm0r%2F5UUZ%2BbxRgyzwqYDMrijMas3sl%2BeWish0xsYGrdjUNK%2FF3AF4WcnSdcZwsNEf&X-Amz-Signature=e49df6a21384b4c4f4dddffa6036f4fe3c7910646a95545c4601b4d3852bb1c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZMAZYM2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCOVW4TFpE6SvF2%2F%2BvOykOfNE2uc9XIyNHyx9yeTT999AIhAPX4riC98C7%2FRfENopEuuAxcE8Ol7YWAGrMkOzV%2BeFtsKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy9QcYea0iprugjCQq3AOhOBK4AwmB%2FDe8wdgb%2Bmi42CHCFTIaQY11ixa66wWWD7G27xH4wXjBIxRq5VynD7z17j04BA0JXX4dXMN5mpNnkLZ8O5RlItMyptvB8eFirIgBw9di8uRVZZuX%2FCd%2FDZC55r55Z32N4lU%2BgVd9phIhScNYRjlk31fhF2sNdbSoLd79si9x%2BaVLBPd1w351cKlPlRkz%2Fk3c%2BcDUyBadB5OAk7l9f4iDLqkm0eotAgbN8BywsLS9SCkJ0LCpiSGZtgPx3GGAp%2B9VBpEuuNUj50dmPBr878IGaqUAtMzMVUbzA3HmhTXgFy1QF8Xtqkxt7ZRdR73ur%2FzYhkmoQcLvjA6NC1iAF2bV3hJgnp1Er5in27EmWzwx0hYCaqiiy72HQOhcZquCvig%2Bi1N2gozHAmTsXSGm6fWRQHGvLQapRaFy7%2BsTmrJgsgpyWBm35tUgGHPOVyRzWe4%2BqWNGKQrOkJ3NdkA3dBUAxms4zwtOE2sLm7BsLA%2F9gPZ0dmMnAnll%2B8KT%2FhZYIDaTysSABV2cmuBgx1bv5SU2UmIkD62ukmaR97G%2BK77%2BPySA3P2cp6B5U4WPgE%2FB2%2BMANFaO5%2FnfFeT1lg7OCRHX2XStM7utRdLRmkvTDvgsJNOLgOH6jzDEyNDEBjqkAV72qJIBwGpyZl0z2OSHqnjkpCYPiXpkRu98tSWI42NRSFPCLaGPc5TxpeVrKVsUCjOD%2F8LOG0PyFAk4wXgpC9XmF1KyRT%2FYVB%2FJSGRx8mwjqEdBP5KgdXndnULhAQoD%2B1iC31WZwRDuf1nrOXJ6MRcVJtPzm0r%2F5UUZ%2BbxRgyzwqYDMrijMas3sl%2BeWish0xsYGrdjUNK%2FF3AF4WcnSdcZwsNEf&X-Amz-Signature=e3627ca21007104900f80a9bc36e3c8bb1bfbeb605d0803400ff7f522577e544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZMAZYM2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCOVW4TFpE6SvF2%2F%2BvOykOfNE2uc9XIyNHyx9yeTT999AIhAPX4riC98C7%2FRfENopEuuAxcE8Ol7YWAGrMkOzV%2BeFtsKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy9QcYea0iprugjCQq3AOhOBK4AwmB%2FDe8wdgb%2Bmi42CHCFTIaQY11ixa66wWWD7G27xH4wXjBIxRq5VynD7z17j04BA0JXX4dXMN5mpNnkLZ8O5RlItMyptvB8eFirIgBw9di8uRVZZuX%2FCd%2FDZC55r55Z32N4lU%2BgVd9phIhScNYRjlk31fhF2sNdbSoLd79si9x%2BaVLBPd1w351cKlPlRkz%2Fk3c%2BcDUyBadB5OAk7l9f4iDLqkm0eotAgbN8BywsLS9SCkJ0LCpiSGZtgPx3GGAp%2B9VBpEuuNUj50dmPBr878IGaqUAtMzMVUbzA3HmhTXgFy1QF8Xtqkxt7ZRdR73ur%2FzYhkmoQcLvjA6NC1iAF2bV3hJgnp1Er5in27EmWzwx0hYCaqiiy72HQOhcZquCvig%2Bi1N2gozHAmTsXSGm6fWRQHGvLQapRaFy7%2BsTmrJgsgpyWBm35tUgGHPOVyRzWe4%2BqWNGKQrOkJ3NdkA3dBUAxms4zwtOE2sLm7BsLA%2F9gPZ0dmMnAnll%2B8KT%2FhZYIDaTysSABV2cmuBgx1bv5SU2UmIkD62ukmaR97G%2BK77%2BPySA3P2cp6B5U4WPgE%2FB2%2BMANFaO5%2FnfFeT1lg7OCRHX2XStM7utRdLRmkvTDvgsJNOLgOH6jzDEyNDEBjqkAV72qJIBwGpyZl0z2OSHqnjkpCYPiXpkRu98tSWI42NRSFPCLaGPc5TxpeVrKVsUCjOD%2F8LOG0PyFAk4wXgpC9XmF1KyRT%2FYVB%2FJSGRx8mwjqEdBP5KgdXndnULhAQoD%2B1iC31WZwRDuf1nrOXJ6MRcVJtPzm0r%2F5UUZ%2BbxRgyzwqYDMrijMas3sl%2BeWish0xsYGrdjUNK%2FF3AF4WcnSdcZwsNEf&X-Amz-Signature=3ec47d2613b40910df9abf2e70f760d911dd3d33291752664500cf8ddb6aba0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZMAZYM2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCOVW4TFpE6SvF2%2F%2BvOykOfNE2uc9XIyNHyx9yeTT999AIhAPX4riC98C7%2FRfENopEuuAxcE8Ol7YWAGrMkOzV%2BeFtsKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy9QcYea0iprugjCQq3AOhOBK4AwmB%2FDe8wdgb%2Bmi42CHCFTIaQY11ixa66wWWD7G27xH4wXjBIxRq5VynD7z17j04BA0JXX4dXMN5mpNnkLZ8O5RlItMyptvB8eFirIgBw9di8uRVZZuX%2FCd%2FDZC55r55Z32N4lU%2BgVd9phIhScNYRjlk31fhF2sNdbSoLd79si9x%2BaVLBPd1w351cKlPlRkz%2Fk3c%2BcDUyBadB5OAk7l9f4iDLqkm0eotAgbN8BywsLS9SCkJ0LCpiSGZtgPx3GGAp%2B9VBpEuuNUj50dmPBr878IGaqUAtMzMVUbzA3HmhTXgFy1QF8Xtqkxt7ZRdR73ur%2FzYhkmoQcLvjA6NC1iAF2bV3hJgnp1Er5in27EmWzwx0hYCaqiiy72HQOhcZquCvig%2Bi1N2gozHAmTsXSGm6fWRQHGvLQapRaFy7%2BsTmrJgsgpyWBm35tUgGHPOVyRzWe4%2BqWNGKQrOkJ3NdkA3dBUAxms4zwtOE2sLm7BsLA%2F9gPZ0dmMnAnll%2B8KT%2FhZYIDaTysSABV2cmuBgx1bv5SU2UmIkD62ukmaR97G%2BK77%2BPySA3P2cp6B5U4WPgE%2FB2%2BMANFaO5%2FnfFeT1lg7OCRHX2XStM7utRdLRmkvTDvgsJNOLgOH6jzDEyNDEBjqkAV72qJIBwGpyZl0z2OSHqnjkpCYPiXpkRu98tSWI42NRSFPCLaGPc5TxpeVrKVsUCjOD%2F8LOG0PyFAk4wXgpC9XmF1KyRT%2FYVB%2FJSGRx8mwjqEdBP5KgdXndnULhAQoD%2B1iC31WZwRDuf1nrOXJ6MRcVJtPzm0r%2F5UUZ%2BbxRgyzwqYDMrijMas3sl%2BeWish0xsYGrdjUNK%2FF3AF4WcnSdcZwsNEf&X-Amz-Signature=287e0a8748631caf16f5f70e2104275ad410d7739041b2902bc555be30230fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZMAZYM2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCOVW4TFpE6SvF2%2F%2BvOykOfNE2uc9XIyNHyx9yeTT999AIhAPX4riC98C7%2FRfENopEuuAxcE8Ol7YWAGrMkOzV%2BeFtsKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy9QcYea0iprugjCQq3AOhOBK4AwmB%2FDe8wdgb%2Bmi42CHCFTIaQY11ixa66wWWD7G27xH4wXjBIxRq5VynD7z17j04BA0JXX4dXMN5mpNnkLZ8O5RlItMyptvB8eFirIgBw9di8uRVZZuX%2FCd%2FDZC55r55Z32N4lU%2BgVd9phIhScNYRjlk31fhF2sNdbSoLd79si9x%2BaVLBPd1w351cKlPlRkz%2Fk3c%2BcDUyBadB5OAk7l9f4iDLqkm0eotAgbN8BywsLS9SCkJ0LCpiSGZtgPx3GGAp%2B9VBpEuuNUj50dmPBr878IGaqUAtMzMVUbzA3HmhTXgFy1QF8Xtqkxt7ZRdR73ur%2FzYhkmoQcLvjA6NC1iAF2bV3hJgnp1Er5in27EmWzwx0hYCaqiiy72HQOhcZquCvig%2Bi1N2gozHAmTsXSGm6fWRQHGvLQapRaFy7%2BsTmrJgsgpyWBm35tUgGHPOVyRzWe4%2BqWNGKQrOkJ3NdkA3dBUAxms4zwtOE2sLm7BsLA%2F9gPZ0dmMnAnll%2B8KT%2FhZYIDaTysSABV2cmuBgx1bv5SU2UmIkD62ukmaR97G%2BK77%2BPySA3P2cp6B5U4WPgE%2FB2%2BMANFaO5%2FnfFeT1lg7OCRHX2XStM7utRdLRmkvTDvgsJNOLgOH6jzDEyNDEBjqkAV72qJIBwGpyZl0z2OSHqnjkpCYPiXpkRu98tSWI42NRSFPCLaGPc5TxpeVrKVsUCjOD%2F8LOG0PyFAk4wXgpC9XmF1KyRT%2FYVB%2FJSGRx8mwjqEdBP5KgdXndnULhAQoD%2B1iC31WZwRDuf1nrOXJ6MRcVJtPzm0r%2F5UUZ%2BbxRgyzwqYDMrijMas3sl%2BeWish0xsYGrdjUNK%2FF3AF4WcnSdcZwsNEf&X-Amz-Signature=d5136f0122e645f1db62414b8d093be61e18b6e1adb251b98e4bcc5ab08dd5fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZMAZYM2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCOVW4TFpE6SvF2%2F%2BvOykOfNE2uc9XIyNHyx9yeTT999AIhAPX4riC98C7%2FRfENopEuuAxcE8Ol7YWAGrMkOzV%2BeFtsKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy9QcYea0iprugjCQq3AOhOBK4AwmB%2FDe8wdgb%2Bmi42CHCFTIaQY11ixa66wWWD7G27xH4wXjBIxRq5VynD7z17j04BA0JXX4dXMN5mpNnkLZ8O5RlItMyptvB8eFirIgBw9di8uRVZZuX%2FCd%2FDZC55r55Z32N4lU%2BgVd9phIhScNYRjlk31fhF2sNdbSoLd79si9x%2BaVLBPd1w351cKlPlRkz%2Fk3c%2BcDUyBadB5OAk7l9f4iDLqkm0eotAgbN8BywsLS9SCkJ0LCpiSGZtgPx3GGAp%2B9VBpEuuNUj50dmPBr878IGaqUAtMzMVUbzA3HmhTXgFy1QF8Xtqkxt7ZRdR73ur%2FzYhkmoQcLvjA6NC1iAF2bV3hJgnp1Er5in27EmWzwx0hYCaqiiy72HQOhcZquCvig%2Bi1N2gozHAmTsXSGm6fWRQHGvLQapRaFy7%2BsTmrJgsgpyWBm35tUgGHPOVyRzWe4%2BqWNGKQrOkJ3NdkA3dBUAxms4zwtOE2sLm7BsLA%2F9gPZ0dmMnAnll%2B8KT%2FhZYIDaTysSABV2cmuBgx1bv5SU2UmIkD62ukmaR97G%2BK77%2BPySA3P2cp6B5U4WPgE%2FB2%2BMANFaO5%2FnfFeT1lg7OCRHX2XStM7utRdLRmkvTDvgsJNOLgOH6jzDEyNDEBjqkAV72qJIBwGpyZl0z2OSHqnjkpCYPiXpkRu98tSWI42NRSFPCLaGPc5TxpeVrKVsUCjOD%2F8LOG0PyFAk4wXgpC9XmF1KyRT%2FYVB%2FJSGRx8mwjqEdBP5KgdXndnULhAQoD%2B1iC31WZwRDuf1nrOXJ6MRcVJtPzm0r%2F5UUZ%2BbxRgyzwqYDMrijMas3sl%2BeWish0xsYGrdjUNK%2FF3AF4WcnSdcZwsNEf&X-Amz-Signature=5d624db4d39a136ca80ebb6dc4b273d814e8b778343638a9704128ad9cccebd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZMAZYM2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCOVW4TFpE6SvF2%2F%2BvOykOfNE2uc9XIyNHyx9yeTT999AIhAPX4riC98C7%2FRfENopEuuAxcE8Ol7YWAGrMkOzV%2BeFtsKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy9QcYea0iprugjCQq3AOhOBK4AwmB%2FDe8wdgb%2Bmi42CHCFTIaQY11ixa66wWWD7G27xH4wXjBIxRq5VynD7z17j04BA0JXX4dXMN5mpNnkLZ8O5RlItMyptvB8eFirIgBw9di8uRVZZuX%2FCd%2FDZC55r55Z32N4lU%2BgVd9phIhScNYRjlk31fhF2sNdbSoLd79si9x%2BaVLBPd1w351cKlPlRkz%2Fk3c%2BcDUyBadB5OAk7l9f4iDLqkm0eotAgbN8BywsLS9SCkJ0LCpiSGZtgPx3GGAp%2B9VBpEuuNUj50dmPBr878IGaqUAtMzMVUbzA3HmhTXgFy1QF8Xtqkxt7ZRdR73ur%2FzYhkmoQcLvjA6NC1iAF2bV3hJgnp1Er5in27EmWzwx0hYCaqiiy72HQOhcZquCvig%2Bi1N2gozHAmTsXSGm6fWRQHGvLQapRaFy7%2BsTmrJgsgpyWBm35tUgGHPOVyRzWe4%2BqWNGKQrOkJ3NdkA3dBUAxms4zwtOE2sLm7BsLA%2F9gPZ0dmMnAnll%2B8KT%2FhZYIDaTysSABV2cmuBgx1bv5SU2UmIkD62ukmaR97G%2BK77%2BPySA3P2cp6B5U4WPgE%2FB2%2BMANFaO5%2FnfFeT1lg7OCRHX2XStM7utRdLRmkvTDvgsJNOLgOH6jzDEyNDEBjqkAV72qJIBwGpyZl0z2OSHqnjkpCYPiXpkRu98tSWI42NRSFPCLaGPc5TxpeVrKVsUCjOD%2F8LOG0PyFAk4wXgpC9XmF1KyRT%2FYVB%2FJSGRx8mwjqEdBP5KgdXndnULhAQoD%2B1iC31WZwRDuf1nrOXJ6MRcVJtPzm0r%2F5UUZ%2BbxRgyzwqYDMrijMas3sl%2BeWish0xsYGrdjUNK%2FF3AF4WcnSdcZwsNEf&X-Amz-Signature=cb509c39abccd31f36cb9888e5223dc27a2d781f05112bb337480f1b92951dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
