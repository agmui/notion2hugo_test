---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-29T17:14:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-29T17:14:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3NDRO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMaspsfQFs5g9Qs0gbilobCWNAxl6xZzfVFMkTltebegIgYJmN4K2WprB7%2FZEEwegwi8CBiHn7SlAz2eE6LxLVwCcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCScVBjoi%2B4regxppyrcA6sEGKFMutjGh1yVTLOkBh5GOAnQ1TUSN%2BLA%2Fe%2BAPSE6UCWexWDwgRkG9OeMV3ayMGXsbKcBQfjmRen5Sv6w6PWB7mcUZB5zGUhLJhagnJb538PTrvpPalLgri8JFcYxgt9%2B36qRYx14Qjz2FtxAavd%2FJe44MfizAbPr6eXRW3yuO2i6N%2BI3nQx2Nr7ZfSLMJbgNaQOHOB8NynSsA%2FFgQisUGUppTGCJYxlksG34a3xsJlwAZhz69sYwd6ipir4iSuuIinCRXkeW%2B%2FJh0G%2FNNm5jAoVAekcyPNKQ%2B8tGavrVYZuRoCFKOSu5GlLKlcab%2F2e5pI5xRPB6r1qVi%2FSOFtua2Oq0rrPTCplx%2BnhR9gNU0Mf8hUao3VFX3Yg654YIA8dFuijD7pxTURHtJpZvAuipXJ%2FALw4%2B2R0cHkFIO4EmZWLi8CGNM59ThFjEXzrlvFUdZrI%2FFBQ%2BQrsPABggVGGFnS%2FIvSjHeL6Mny1n0%2FNgwhIo804GyWQ7fbpmSYlBX9aGUMLXbqJ0Jm9bQl9Iv8MbftS5TFTaFymdSJT64XrcYvbrcSJBjXw22lOKiR9V4zAtG0mECZoWjikDeEdlZoy9HrIUO1U00Hsp1BBPEHeaS%2B3DQVpBB2tP8X%2BuMP2tpMQGOqUBGu%2BPnLX3HF3py8nGGBDDhQQaAf1NFM51eVht4u4fQbIoiOCEMxhQEYOnOi5284f4Ep06soXmQIoe5bEsW7%2BlwLljIwhnVVzL%2FLVdKLjqlAIp2i%2BrF2aOHWQ8y%2F5yC%2BVzqa8sJwLzPcSP5gRy9rC9DeF3wCGXM%2B5cfe85g0k4HfCSkCbvFNtE6Xq7WT6U5rR8m56iiOWzpNM%2BHO4DDmKEr6eV%2Fn%2Bq&X-Amz-Signature=0770780492887bb1b9d65bb82b49fdbf1fee80011b4c3e7fc161d263e0baaca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3NDRO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMaspsfQFs5g9Qs0gbilobCWNAxl6xZzfVFMkTltebegIgYJmN4K2WprB7%2FZEEwegwi8CBiHn7SlAz2eE6LxLVwCcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCScVBjoi%2B4regxppyrcA6sEGKFMutjGh1yVTLOkBh5GOAnQ1TUSN%2BLA%2Fe%2BAPSE6UCWexWDwgRkG9OeMV3ayMGXsbKcBQfjmRen5Sv6w6PWB7mcUZB5zGUhLJhagnJb538PTrvpPalLgri8JFcYxgt9%2B36qRYx14Qjz2FtxAavd%2FJe44MfizAbPr6eXRW3yuO2i6N%2BI3nQx2Nr7ZfSLMJbgNaQOHOB8NynSsA%2FFgQisUGUppTGCJYxlksG34a3xsJlwAZhz69sYwd6ipir4iSuuIinCRXkeW%2B%2FJh0G%2FNNm5jAoVAekcyPNKQ%2B8tGavrVYZuRoCFKOSu5GlLKlcab%2F2e5pI5xRPB6r1qVi%2FSOFtua2Oq0rrPTCplx%2BnhR9gNU0Mf8hUao3VFX3Yg654YIA8dFuijD7pxTURHtJpZvAuipXJ%2FALw4%2B2R0cHkFIO4EmZWLi8CGNM59ThFjEXzrlvFUdZrI%2FFBQ%2BQrsPABggVGGFnS%2FIvSjHeL6Mny1n0%2FNgwhIo804GyWQ7fbpmSYlBX9aGUMLXbqJ0Jm9bQl9Iv8MbftS5TFTaFymdSJT64XrcYvbrcSJBjXw22lOKiR9V4zAtG0mECZoWjikDeEdlZoy9HrIUO1U00Hsp1BBPEHeaS%2B3DQVpBB2tP8X%2BuMP2tpMQGOqUBGu%2BPnLX3HF3py8nGGBDDhQQaAf1NFM51eVht4u4fQbIoiOCEMxhQEYOnOi5284f4Ep06soXmQIoe5bEsW7%2BlwLljIwhnVVzL%2FLVdKLjqlAIp2i%2BrF2aOHWQ8y%2F5yC%2BVzqa8sJwLzPcSP5gRy9rC9DeF3wCGXM%2B5cfe85g0k4HfCSkCbvFNtE6Xq7WT6U5rR8m56iiOWzpNM%2BHO4DDmKEr6eV%2Fn%2Bq&X-Amz-Signature=227c4c9814638c7984261d7693391ac2eb87c09dc5a79d9d63348230ecb45ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3NDRO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMaspsfQFs5g9Qs0gbilobCWNAxl6xZzfVFMkTltebegIgYJmN4K2WprB7%2FZEEwegwi8CBiHn7SlAz2eE6LxLVwCcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCScVBjoi%2B4regxppyrcA6sEGKFMutjGh1yVTLOkBh5GOAnQ1TUSN%2BLA%2Fe%2BAPSE6UCWexWDwgRkG9OeMV3ayMGXsbKcBQfjmRen5Sv6w6PWB7mcUZB5zGUhLJhagnJb538PTrvpPalLgri8JFcYxgt9%2B36qRYx14Qjz2FtxAavd%2FJe44MfizAbPr6eXRW3yuO2i6N%2BI3nQx2Nr7ZfSLMJbgNaQOHOB8NynSsA%2FFgQisUGUppTGCJYxlksG34a3xsJlwAZhz69sYwd6ipir4iSuuIinCRXkeW%2B%2FJh0G%2FNNm5jAoVAekcyPNKQ%2B8tGavrVYZuRoCFKOSu5GlLKlcab%2F2e5pI5xRPB6r1qVi%2FSOFtua2Oq0rrPTCplx%2BnhR9gNU0Mf8hUao3VFX3Yg654YIA8dFuijD7pxTURHtJpZvAuipXJ%2FALw4%2B2R0cHkFIO4EmZWLi8CGNM59ThFjEXzrlvFUdZrI%2FFBQ%2BQrsPABggVGGFnS%2FIvSjHeL6Mny1n0%2FNgwhIo804GyWQ7fbpmSYlBX9aGUMLXbqJ0Jm9bQl9Iv8MbftS5TFTaFymdSJT64XrcYvbrcSJBjXw22lOKiR9V4zAtG0mECZoWjikDeEdlZoy9HrIUO1U00Hsp1BBPEHeaS%2B3DQVpBB2tP8X%2BuMP2tpMQGOqUBGu%2BPnLX3HF3py8nGGBDDhQQaAf1NFM51eVht4u4fQbIoiOCEMxhQEYOnOi5284f4Ep06soXmQIoe5bEsW7%2BlwLljIwhnVVzL%2FLVdKLjqlAIp2i%2BrF2aOHWQ8y%2F5yC%2BVzqa8sJwLzPcSP5gRy9rC9DeF3wCGXM%2B5cfe85g0k4HfCSkCbvFNtE6Xq7WT6U5rR8m56iiOWzpNM%2BHO4DDmKEr6eV%2Fn%2Bq&X-Amz-Signature=5faf48ac8d250da837df40cfcfdc1d7fc0eba75dca4e62fdf3e3d5532dc485f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3NDRO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMaspsfQFs5g9Qs0gbilobCWNAxl6xZzfVFMkTltebegIgYJmN4K2WprB7%2FZEEwegwi8CBiHn7SlAz2eE6LxLVwCcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCScVBjoi%2B4regxppyrcA6sEGKFMutjGh1yVTLOkBh5GOAnQ1TUSN%2BLA%2Fe%2BAPSE6UCWexWDwgRkG9OeMV3ayMGXsbKcBQfjmRen5Sv6w6PWB7mcUZB5zGUhLJhagnJb538PTrvpPalLgri8JFcYxgt9%2B36qRYx14Qjz2FtxAavd%2FJe44MfizAbPr6eXRW3yuO2i6N%2BI3nQx2Nr7ZfSLMJbgNaQOHOB8NynSsA%2FFgQisUGUppTGCJYxlksG34a3xsJlwAZhz69sYwd6ipir4iSuuIinCRXkeW%2B%2FJh0G%2FNNm5jAoVAekcyPNKQ%2B8tGavrVYZuRoCFKOSu5GlLKlcab%2F2e5pI5xRPB6r1qVi%2FSOFtua2Oq0rrPTCplx%2BnhR9gNU0Mf8hUao3VFX3Yg654YIA8dFuijD7pxTURHtJpZvAuipXJ%2FALw4%2B2R0cHkFIO4EmZWLi8CGNM59ThFjEXzrlvFUdZrI%2FFBQ%2BQrsPABggVGGFnS%2FIvSjHeL6Mny1n0%2FNgwhIo804GyWQ7fbpmSYlBX9aGUMLXbqJ0Jm9bQl9Iv8MbftS5TFTaFymdSJT64XrcYvbrcSJBjXw22lOKiR9V4zAtG0mECZoWjikDeEdlZoy9HrIUO1U00Hsp1BBPEHeaS%2B3DQVpBB2tP8X%2BuMP2tpMQGOqUBGu%2BPnLX3HF3py8nGGBDDhQQaAf1NFM51eVht4u4fQbIoiOCEMxhQEYOnOi5284f4Ep06soXmQIoe5bEsW7%2BlwLljIwhnVVzL%2FLVdKLjqlAIp2i%2BrF2aOHWQ8y%2F5yC%2BVzqa8sJwLzPcSP5gRy9rC9DeF3wCGXM%2B5cfe85g0k4HfCSkCbvFNtE6Xq7WT6U5rR8m56iiOWzpNM%2BHO4DDmKEr6eV%2Fn%2Bq&X-Amz-Signature=c309a6acba1794be3d18156eb133859c6c948af91c7cf01bcd2a1e244df4c7ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3NDRO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMaspsfQFs5g9Qs0gbilobCWNAxl6xZzfVFMkTltebegIgYJmN4K2WprB7%2FZEEwegwi8CBiHn7SlAz2eE6LxLVwCcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCScVBjoi%2B4regxppyrcA6sEGKFMutjGh1yVTLOkBh5GOAnQ1TUSN%2BLA%2Fe%2BAPSE6UCWexWDwgRkG9OeMV3ayMGXsbKcBQfjmRen5Sv6w6PWB7mcUZB5zGUhLJhagnJb538PTrvpPalLgri8JFcYxgt9%2B36qRYx14Qjz2FtxAavd%2FJe44MfizAbPr6eXRW3yuO2i6N%2BI3nQx2Nr7ZfSLMJbgNaQOHOB8NynSsA%2FFgQisUGUppTGCJYxlksG34a3xsJlwAZhz69sYwd6ipir4iSuuIinCRXkeW%2B%2FJh0G%2FNNm5jAoVAekcyPNKQ%2B8tGavrVYZuRoCFKOSu5GlLKlcab%2F2e5pI5xRPB6r1qVi%2FSOFtua2Oq0rrPTCplx%2BnhR9gNU0Mf8hUao3VFX3Yg654YIA8dFuijD7pxTURHtJpZvAuipXJ%2FALw4%2B2R0cHkFIO4EmZWLi8CGNM59ThFjEXzrlvFUdZrI%2FFBQ%2BQrsPABggVGGFnS%2FIvSjHeL6Mny1n0%2FNgwhIo804GyWQ7fbpmSYlBX9aGUMLXbqJ0Jm9bQl9Iv8MbftS5TFTaFymdSJT64XrcYvbrcSJBjXw22lOKiR9V4zAtG0mECZoWjikDeEdlZoy9HrIUO1U00Hsp1BBPEHeaS%2B3DQVpBB2tP8X%2BuMP2tpMQGOqUBGu%2BPnLX3HF3py8nGGBDDhQQaAf1NFM51eVht4u4fQbIoiOCEMxhQEYOnOi5284f4Ep06soXmQIoe5bEsW7%2BlwLljIwhnVVzL%2FLVdKLjqlAIp2i%2BrF2aOHWQ8y%2F5yC%2BVzqa8sJwLzPcSP5gRy9rC9DeF3wCGXM%2B5cfe85g0k4HfCSkCbvFNtE6Xq7WT6U5rR8m56iiOWzpNM%2BHO4DDmKEr6eV%2Fn%2Bq&X-Amz-Signature=e7cc913bb64db6fadd979da23d5dee0720fe93372dbd6a34cd6b9de4c2c2ac68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3NDRO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMaspsfQFs5g9Qs0gbilobCWNAxl6xZzfVFMkTltebegIgYJmN4K2WprB7%2FZEEwegwi8CBiHn7SlAz2eE6LxLVwCcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCScVBjoi%2B4regxppyrcA6sEGKFMutjGh1yVTLOkBh5GOAnQ1TUSN%2BLA%2Fe%2BAPSE6UCWexWDwgRkG9OeMV3ayMGXsbKcBQfjmRen5Sv6w6PWB7mcUZB5zGUhLJhagnJb538PTrvpPalLgri8JFcYxgt9%2B36qRYx14Qjz2FtxAavd%2FJe44MfizAbPr6eXRW3yuO2i6N%2BI3nQx2Nr7ZfSLMJbgNaQOHOB8NynSsA%2FFgQisUGUppTGCJYxlksG34a3xsJlwAZhz69sYwd6ipir4iSuuIinCRXkeW%2B%2FJh0G%2FNNm5jAoVAekcyPNKQ%2B8tGavrVYZuRoCFKOSu5GlLKlcab%2F2e5pI5xRPB6r1qVi%2FSOFtua2Oq0rrPTCplx%2BnhR9gNU0Mf8hUao3VFX3Yg654YIA8dFuijD7pxTURHtJpZvAuipXJ%2FALw4%2B2R0cHkFIO4EmZWLi8CGNM59ThFjEXzrlvFUdZrI%2FFBQ%2BQrsPABggVGGFnS%2FIvSjHeL6Mny1n0%2FNgwhIo804GyWQ7fbpmSYlBX9aGUMLXbqJ0Jm9bQl9Iv8MbftS5TFTaFymdSJT64XrcYvbrcSJBjXw22lOKiR9V4zAtG0mECZoWjikDeEdlZoy9HrIUO1U00Hsp1BBPEHeaS%2B3DQVpBB2tP8X%2BuMP2tpMQGOqUBGu%2BPnLX3HF3py8nGGBDDhQQaAf1NFM51eVht4u4fQbIoiOCEMxhQEYOnOi5284f4Ep06soXmQIoe5bEsW7%2BlwLljIwhnVVzL%2FLVdKLjqlAIp2i%2BrF2aOHWQ8y%2F5yC%2BVzqa8sJwLzPcSP5gRy9rC9DeF3wCGXM%2B5cfe85g0k4HfCSkCbvFNtE6Xq7WT6U5rR8m56iiOWzpNM%2BHO4DDmKEr6eV%2Fn%2Bq&X-Amz-Signature=be4cab1a901c5629b56a6eb2e71d4d8de0ccef35ca81abbf84268d883cc46242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3NDRO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMaspsfQFs5g9Qs0gbilobCWNAxl6xZzfVFMkTltebegIgYJmN4K2WprB7%2FZEEwegwi8CBiHn7SlAz2eE6LxLVwCcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCScVBjoi%2B4regxppyrcA6sEGKFMutjGh1yVTLOkBh5GOAnQ1TUSN%2BLA%2Fe%2BAPSE6UCWexWDwgRkG9OeMV3ayMGXsbKcBQfjmRen5Sv6w6PWB7mcUZB5zGUhLJhagnJb538PTrvpPalLgri8JFcYxgt9%2B36qRYx14Qjz2FtxAavd%2FJe44MfizAbPr6eXRW3yuO2i6N%2BI3nQx2Nr7ZfSLMJbgNaQOHOB8NynSsA%2FFgQisUGUppTGCJYxlksG34a3xsJlwAZhz69sYwd6ipir4iSuuIinCRXkeW%2B%2FJh0G%2FNNm5jAoVAekcyPNKQ%2B8tGavrVYZuRoCFKOSu5GlLKlcab%2F2e5pI5xRPB6r1qVi%2FSOFtua2Oq0rrPTCplx%2BnhR9gNU0Mf8hUao3VFX3Yg654YIA8dFuijD7pxTURHtJpZvAuipXJ%2FALw4%2B2R0cHkFIO4EmZWLi8CGNM59ThFjEXzrlvFUdZrI%2FFBQ%2BQrsPABggVGGFnS%2FIvSjHeL6Mny1n0%2FNgwhIo804GyWQ7fbpmSYlBX9aGUMLXbqJ0Jm9bQl9Iv8MbftS5TFTaFymdSJT64XrcYvbrcSJBjXw22lOKiR9V4zAtG0mECZoWjikDeEdlZoy9HrIUO1U00Hsp1BBPEHeaS%2B3DQVpBB2tP8X%2BuMP2tpMQGOqUBGu%2BPnLX3HF3py8nGGBDDhQQaAf1NFM51eVht4u4fQbIoiOCEMxhQEYOnOi5284f4Ep06soXmQIoe5bEsW7%2BlwLljIwhnVVzL%2FLVdKLjqlAIp2i%2BrF2aOHWQ8y%2F5yC%2BVzqa8sJwLzPcSP5gRy9rC9DeF3wCGXM%2B5cfe85g0k4HfCSkCbvFNtE6Xq7WT6U5rR8m56iiOWzpNM%2BHO4DDmKEr6eV%2Fn%2Bq&X-Amz-Signature=7663599c8beacf06f5bfd33cbf5f6f5315821ab53ab97a9c3b9017ac0d22681d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3NDRO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMaspsfQFs5g9Qs0gbilobCWNAxl6xZzfVFMkTltebegIgYJmN4K2WprB7%2FZEEwegwi8CBiHn7SlAz2eE6LxLVwCcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCScVBjoi%2B4regxppyrcA6sEGKFMutjGh1yVTLOkBh5GOAnQ1TUSN%2BLA%2Fe%2BAPSE6UCWexWDwgRkG9OeMV3ayMGXsbKcBQfjmRen5Sv6w6PWB7mcUZB5zGUhLJhagnJb538PTrvpPalLgri8JFcYxgt9%2B36qRYx14Qjz2FtxAavd%2FJe44MfizAbPr6eXRW3yuO2i6N%2BI3nQx2Nr7ZfSLMJbgNaQOHOB8NynSsA%2FFgQisUGUppTGCJYxlksG34a3xsJlwAZhz69sYwd6ipir4iSuuIinCRXkeW%2B%2FJh0G%2FNNm5jAoVAekcyPNKQ%2B8tGavrVYZuRoCFKOSu5GlLKlcab%2F2e5pI5xRPB6r1qVi%2FSOFtua2Oq0rrPTCplx%2BnhR9gNU0Mf8hUao3VFX3Yg654YIA8dFuijD7pxTURHtJpZvAuipXJ%2FALw4%2B2R0cHkFIO4EmZWLi8CGNM59ThFjEXzrlvFUdZrI%2FFBQ%2BQrsPABggVGGFnS%2FIvSjHeL6Mny1n0%2FNgwhIo804GyWQ7fbpmSYlBX9aGUMLXbqJ0Jm9bQl9Iv8MbftS5TFTaFymdSJT64XrcYvbrcSJBjXw22lOKiR9V4zAtG0mECZoWjikDeEdlZoy9HrIUO1U00Hsp1BBPEHeaS%2B3DQVpBB2tP8X%2BuMP2tpMQGOqUBGu%2BPnLX3HF3py8nGGBDDhQQaAf1NFM51eVht4u4fQbIoiOCEMxhQEYOnOi5284f4Ep06soXmQIoe5bEsW7%2BlwLljIwhnVVzL%2FLVdKLjqlAIp2i%2BrF2aOHWQ8y%2F5yC%2BVzqa8sJwLzPcSP5gRy9rC9DeF3wCGXM%2B5cfe85g0k4HfCSkCbvFNtE6Xq7WT6U5rR8m56iiOWzpNM%2BHO4DDmKEr6eV%2Fn%2Bq&X-Amz-Signature=abb0ab152353bc7fef91c8472700c806168b9a45646d592bf6a8fe1c95d73c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3NDRO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMaspsfQFs5g9Qs0gbilobCWNAxl6xZzfVFMkTltebegIgYJmN4K2WprB7%2FZEEwegwi8CBiHn7SlAz2eE6LxLVwCcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCScVBjoi%2B4regxppyrcA6sEGKFMutjGh1yVTLOkBh5GOAnQ1TUSN%2BLA%2Fe%2BAPSE6UCWexWDwgRkG9OeMV3ayMGXsbKcBQfjmRen5Sv6w6PWB7mcUZB5zGUhLJhagnJb538PTrvpPalLgri8JFcYxgt9%2B36qRYx14Qjz2FtxAavd%2FJe44MfizAbPr6eXRW3yuO2i6N%2BI3nQx2Nr7ZfSLMJbgNaQOHOB8NynSsA%2FFgQisUGUppTGCJYxlksG34a3xsJlwAZhz69sYwd6ipir4iSuuIinCRXkeW%2B%2FJh0G%2FNNm5jAoVAekcyPNKQ%2B8tGavrVYZuRoCFKOSu5GlLKlcab%2F2e5pI5xRPB6r1qVi%2FSOFtua2Oq0rrPTCplx%2BnhR9gNU0Mf8hUao3VFX3Yg654YIA8dFuijD7pxTURHtJpZvAuipXJ%2FALw4%2B2R0cHkFIO4EmZWLi8CGNM59ThFjEXzrlvFUdZrI%2FFBQ%2BQrsPABggVGGFnS%2FIvSjHeL6Mny1n0%2FNgwhIo804GyWQ7fbpmSYlBX9aGUMLXbqJ0Jm9bQl9Iv8MbftS5TFTaFymdSJT64XrcYvbrcSJBjXw22lOKiR9V4zAtG0mECZoWjikDeEdlZoy9HrIUO1U00Hsp1BBPEHeaS%2B3DQVpBB2tP8X%2BuMP2tpMQGOqUBGu%2BPnLX3HF3py8nGGBDDhQQaAf1NFM51eVht4u4fQbIoiOCEMxhQEYOnOi5284f4Ep06soXmQIoe5bEsW7%2BlwLljIwhnVVzL%2FLVdKLjqlAIp2i%2BrF2aOHWQ8y%2F5yC%2BVzqa8sJwLzPcSP5gRy9rC9DeF3wCGXM%2B5cfe85g0k4HfCSkCbvFNtE6Xq7WT6U5rR8m56iiOWzpNM%2BHO4DDmKEr6eV%2Fn%2Bq&X-Amz-Signature=0d3e3cb93d23afc0cce41df07401d51e3139b78e214283c76cbfcf33ec17724a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3NDRO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMaspsfQFs5g9Qs0gbilobCWNAxl6xZzfVFMkTltebegIgYJmN4K2WprB7%2FZEEwegwi8CBiHn7SlAz2eE6LxLVwCcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCScVBjoi%2B4regxppyrcA6sEGKFMutjGh1yVTLOkBh5GOAnQ1TUSN%2BLA%2Fe%2BAPSE6UCWexWDwgRkG9OeMV3ayMGXsbKcBQfjmRen5Sv6w6PWB7mcUZB5zGUhLJhagnJb538PTrvpPalLgri8JFcYxgt9%2B36qRYx14Qjz2FtxAavd%2FJe44MfizAbPr6eXRW3yuO2i6N%2BI3nQx2Nr7ZfSLMJbgNaQOHOB8NynSsA%2FFgQisUGUppTGCJYxlksG34a3xsJlwAZhz69sYwd6ipir4iSuuIinCRXkeW%2B%2FJh0G%2FNNm5jAoVAekcyPNKQ%2B8tGavrVYZuRoCFKOSu5GlLKlcab%2F2e5pI5xRPB6r1qVi%2FSOFtua2Oq0rrPTCplx%2BnhR9gNU0Mf8hUao3VFX3Yg654YIA8dFuijD7pxTURHtJpZvAuipXJ%2FALw4%2B2R0cHkFIO4EmZWLi8CGNM59ThFjEXzrlvFUdZrI%2FFBQ%2BQrsPABggVGGFnS%2FIvSjHeL6Mny1n0%2FNgwhIo804GyWQ7fbpmSYlBX9aGUMLXbqJ0Jm9bQl9Iv8MbftS5TFTaFymdSJT64XrcYvbrcSJBjXw22lOKiR9V4zAtG0mECZoWjikDeEdlZoy9HrIUO1U00Hsp1BBPEHeaS%2B3DQVpBB2tP8X%2BuMP2tpMQGOqUBGu%2BPnLX3HF3py8nGGBDDhQQaAf1NFM51eVht4u4fQbIoiOCEMxhQEYOnOi5284f4Ep06soXmQIoe5bEsW7%2BlwLljIwhnVVzL%2FLVdKLjqlAIp2i%2BrF2aOHWQ8y%2F5yC%2BVzqa8sJwLzPcSP5gRy9rC9DeF3wCGXM%2B5cfe85g0k4HfCSkCbvFNtE6Xq7WT6U5rR8m56iiOWzpNM%2BHO4DDmKEr6eV%2Fn%2Bq&X-Amz-Signature=77e0ef779c1d37a9eba310e1e6d656932c412f6b676c8ed2709759ccf25f392b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3NDRO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMaspsfQFs5g9Qs0gbilobCWNAxl6xZzfVFMkTltebegIgYJmN4K2WprB7%2FZEEwegwi8CBiHn7SlAz2eE6LxLVwCcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCScVBjoi%2B4regxppyrcA6sEGKFMutjGh1yVTLOkBh5GOAnQ1TUSN%2BLA%2Fe%2BAPSE6UCWexWDwgRkG9OeMV3ayMGXsbKcBQfjmRen5Sv6w6PWB7mcUZB5zGUhLJhagnJb538PTrvpPalLgri8JFcYxgt9%2B36qRYx14Qjz2FtxAavd%2FJe44MfizAbPr6eXRW3yuO2i6N%2BI3nQx2Nr7ZfSLMJbgNaQOHOB8NynSsA%2FFgQisUGUppTGCJYxlksG34a3xsJlwAZhz69sYwd6ipir4iSuuIinCRXkeW%2B%2FJh0G%2FNNm5jAoVAekcyPNKQ%2B8tGavrVYZuRoCFKOSu5GlLKlcab%2F2e5pI5xRPB6r1qVi%2FSOFtua2Oq0rrPTCplx%2BnhR9gNU0Mf8hUao3VFX3Yg654YIA8dFuijD7pxTURHtJpZvAuipXJ%2FALw4%2B2R0cHkFIO4EmZWLi8CGNM59ThFjEXzrlvFUdZrI%2FFBQ%2BQrsPABggVGGFnS%2FIvSjHeL6Mny1n0%2FNgwhIo804GyWQ7fbpmSYlBX9aGUMLXbqJ0Jm9bQl9Iv8MbftS5TFTaFymdSJT64XrcYvbrcSJBjXw22lOKiR9V4zAtG0mECZoWjikDeEdlZoy9HrIUO1U00Hsp1BBPEHeaS%2B3DQVpBB2tP8X%2BuMP2tpMQGOqUBGu%2BPnLX3HF3py8nGGBDDhQQaAf1NFM51eVht4u4fQbIoiOCEMxhQEYOnOi5284f4Ep06soXmQIoe5bEsW7%2BlwLljIwhnVVzL%2FLVdKLjqlAIp2i%2BrF2aOHWQ8y%2F5yC%2BVzqa8sJwLzPcSP5gRy9rC9DeF3wCGXM%2B5cfe85g0k4HfCSkCbvFNtE6Xq7WT6U5rR8m56iiOWzpNM%2BHO4DDmKEr6eV%2Fn%2Bq&X-Amz-Signature=aea13575c401b38a7eb55b5d90e1c97fd89a5c8d107bd274ffae9cd434863d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3NDRO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMaspsfQFs5g9Qs0gbilobCWNAxl6xZzfVFMkTltebegIgYJmN4K2WprB7%2FZEEwegwi8CBiHn7SlAz2eE6LxLVwCcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCScVBjoi%2B4regxppyrcA6sEGKFMutjGh1yVTLOkBh5GOAnQ1TUSN%2BLA%2Fe%2BAPSE6UCWexWDwgRkG9OeMV3ayMGXsbKcBQfjmRen5Sv6w6PWB7mcUZB5zGUhLJhagnJb538PTrvpPalLgri8JFcYxgt9%2B36qRYx14Qjz2FtxAavd%2FJe44MfizAbPr6eXRW3yuO2i6N%2BI3nQx2Nr7ZfSLMJbgNaQOHOB8NynSsA%2FFgQisUGUppTGCJYxlksG34a3xsJlwAZhz69sYwd6ipir4iSuuIinCRXkeW%2B%2FJh0G%2FNNm5jAoVAekcyPNKQ%2B8tGavrVYZuRoCFKOSu5GlLKlcab%2F2e5pI5xRPB6r1qVi%2FSOFtua2Oq0rrPTCplx%2BnhR9gNU0Mf8hUao3VFX3Yg654YIA8dFuijD7pxTURHtJpZvAuipXJ%2FALw4%2B2R0cHkFIO4EmZWLi8CGNM59ThFjEXzrlvFUdZrI%2FFBQ%2BQrsPABggVGGFnS%2FIvSjHeL6Mny1n0%2FNgwhIo804GyWQ7fbpmSYlBX9aGUMLXbqJ0Jm9bQl9Iv8MbftS5TFTaFymdSJT64XrcYvbrcSJBjXw22lOKiR9V4zAtG0mECZoWjikDeEdlZoy9HrIUO1U00Hsp1BBPEHeaS%2B3DQVpBB2tP8X%2BuMP2tpMQGOqUBGu%2BPnLX3HF3py8nGGBDDhQQaAf1NFM51eVht4u4fQbIoiOCEMxhQEYOnOi5284f4Ep06soXmQIoe5bEsW7%2BlwLljIwhnVVzL%2FLVdKLjqlAIp2i%2BrF2aOHWQ8y%2F5yC%2BVzqa8sJwLzPcSP5gRy9rC9DeF3wCGXM%2B5cfe85g0k4HfCSkCbvFNtE6Xq7WT6U5rR8m56iiOWzpNM%2BHO4DDmKEr6eV%2Fn%2Bq&X-Amz-Signature=6318e9f2758ec37955733a28650390bc210a224188c4039c7003b8bbff9b452b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3NDRO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMaspsfQFs5g9Qs0gbilobCWNAxl6xZzfVFMkTltebegIgYJmN4K2WprB7%2FZEEwegwi8CBiHn7SlAz2eE6LxLVwCcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCScVBjoi%2B4regxppyrcA6sEGKFMutjGh1yVTLOkBh5GOAnQ1TUSN%2BLA%2Fe%2BAPSE6UCWexWDwgRkG9OeMV3ayMGXsbKcBQfjmRen5Sv6w6PWB7mcUZB5zGUhLJhagnJb538PTrvpPalLgri8JFcYxgt9%2B36qRYx14Qjz2FtxAavd%2FJe44MfizAbPr6eXRW3yuO2i6N%2BI3nQx2Nr7ZfSLMJbgNaQOHOB8NynSsA%2FFgQisUGUppTGCJYxlksG34a3xsJlwAZhz69sYwd6ipir4iSuuIinCRXkeW%2B%2FJh0G%2FNNm5jAoVAekcyPNKQ%2B8tGavrVYZuRoCFKOSu5GlLKlcab%2F2e5pI5xRPB6r1qVi%2FSOFtua2Oq0rrPTCplx%2BnhR9gNU0Mf8hUao3VFX3Yg654YIA8dFuijD7pxTURHtJpZvAuipXJ%2FALw4%2B2R0cHkFIO4EmZWLi8CGNM59ThFjEXzrlvFUdZrI%2FFBQ%2BQrsPABggVGGFnS%2FIvSjHeL6Mny1n0%2FNgwhIo804GyWQ7fbpmSYlBX9aGUMLXbqJ0Jm9bQl9Iv8MbftS5TFTaFymdSJT64XrcYvbrcSJBjXw22lOKiR9V4zAtG0mECZoWjikDeEdlZoy9HrIUO1U00Hsp1BBPEHeaS%2B3DQVpBB2tP8X%2BuMP2tpMQGOqUBGu%2BPnLX3HF3py8nGGBDDhQQaAf1NFM51eVht4u4fQbIoiOCEMxhQEYOnOi5284f4Ep06soXmQIoe5bEsW7%2BlwLljIwhnVVzL%2FLVdKLjqlAIp2i%2BrF2aOHWQ8y%2F5yC%2BVzqa8sJwLzPcSP5gRy9rC9DeF3wCGXM%2B5cfe85g0k4HfCSkCbvFNtE6Xq7WT6U5rR8m56iiOWzpNM%2BHO4DDmKEr6eV%2Fn%2Bq&X-Amz-Signature=8268048a7cd352861e01ed3c6afb2045499554c882efca32aaa7f20c88487fba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Nav2 settings

TODO: change footprint?
