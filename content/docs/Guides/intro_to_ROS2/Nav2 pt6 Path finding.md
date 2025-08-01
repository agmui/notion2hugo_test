---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO2WJFGD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEeux47SeVXETy4dt611w4%2FDIN6Es4dgj6%2Blk%2F41HfAAiBQC8lIdp5pQ4F42uHz9qu8t%2FJ%2BMrNS8bM5o0TGjIy0iiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtp%2F7vH9LqFuho1rLKtwDiT9VMh7iMeX2lcGmF7KUT%2BAo0h85XNkoWG93fVgO%2F7t8t51GSr3%2Fh2qNMBRAgAaqaUgxLcBY9dXOvJISXngyctmWwhlXz0a489%2FgG0jhyVFje%2BAuZ1dzQ45bV%2BFqLK0j%2B9P7RFQl%2BffwP04VSTnLH5wIDvPIBCnlcHPG9jcxZTI7f2%2Bz1fWTTUeeV6O8mPmlIcQbeDMvPnoRJGPIYwzKVQgbnkthdIZ5S%2Fk8O1K2XqDrZteStiRzSPGNJ2D8K1EinKNmk5LRc67qiLAjF8z5jpIAt9Is%2ByqmFzXSmoNJEuxrwb1oCRC7erfdJXjIOxiRNYZ9EGvDyQ%2FLHrxgkRynuEp6h8ohAPe27ui24GKbZi3Z4YqtZjJHs9PofCIicrkcuO%2B9Q189J%2ForqCHyaUvVPMrszUva5mXX7f16uPAYlDZDnWCgsxAZvw6NhCXAnwas3%2FLEdPIfo%2FifJaxQ4jPBLdJGmSmgeBdRPND3TLG2bawflauRibz%2F0W8SP2vonsfF1HLvpLVmCtjh5P5r9QnosyN1dhXijFifneaQQeUxtQcqk48i6ZWoRS%2Bcd%2Ffp1uoRrEDx%2F%2FP6H6AXpBK7ZaqeoJPPKosWfmhF%2B6X174aJJ9s3KAJH53zB26JMleUwzZGyxAY6pgH%2BSqpLVXTd9LrH3D2WgFkyNZSCG8FolmP3gGDNAMPSMa5Mbv4cCFkzNUOyt7sjhwW4fhYugRhS%2BPSaLcTA8uzr%2BwKmZGtK%2Bo9IEY7MN6OaHZrAO71RmFBA4msmbrqDdoHHPsHxEnojzauwl2ZYVytNXKMFaHcBW9M7y0j72OJDUo3FpLMew4HF%2FYSyJ9W0%2BQr0ECYhd49pKDmT3VPcdckopZ1Mxz3z&X-Amz-Signature=dce8cc24e5212b0e78357d6ea8d43492c86103bd105f9f9f35e24a2d38dda030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO2WJFGD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEeux47SeVXETy4dt611w4%2FDIN6Es4dgj6%2Blk%2F41HfAAiBQC8lIdp5pQ4F42uHz9qu8t%2FJ%2BMrNS8bM5o0TGjIy0iiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtp%2F7vH9LqFuho1rLKtwDiT9VMh7iMeX2lcGmF7KUT%2BAo0h85XNkoWG93fVgO%2F7t8t51GSr3%2Fh2qNMBRAgAaqaUgxLcBY9dXOvJISXngyctmWwhlXz0a489%2FgG0jhyVFje%2BAuZ1dzQ45bV%2BFqLK0j%2B9P7RFQl%2BffwP04VSTnLH5wIDvPIBCnlcHPG9jcxZTI7f2%2Bz1fWTTUeeV6O8mPmlIcQbeDMvPnoRJGPIYwzKVQgbnkthdIZ5S%2Fk8O1K2XqDrZteStiRzSPGNJ2D8K1EinKNmk5LRc67qiLAjF8z5jpIAt9Is%2ByqmFzXSmoNJEuxrwb1oCRC7erfdJXjIOxiRNYZ9EGvDyQ%2FLHrxgkRynuEp6h8ohAPe27ui24GKbZi3Z4YqtZjJHs9PofCIicrkcuO%2B9Q189J%2ForqCHyaUvVPMrszUva5mXX7f16uPAYlDZDnWCgsxAZvw6NhCXAnwas3%2FLEdPIfo%2FifJaxQ4jPBLdJGmSmgeBdRPND3TLG2bawflauRibz%2F0W8SP2vonsfF1HLvpLVmCtjh5P5r9QnosyN1dhXijFifneaQQeUxtQcqk48i6ZWoRS%2Bcd%2Ffp1uoRrEDx%2F%2FP6H6AXpBK7ZaqeoJPPKosWfmhF%2B6X174aJJ9s3KAJH53zB26JMleUwzZGyxAY6pgH%2BSqpLVXTd9LrH3D2WgFkyNZSCG8FolmP3gGDNAMPSMa5Mbv4cCFkzNUOyt7sjhwW4fhYugRhS%2BPSaLcTA8uzr%2BwKmZGtK%2Bo9IEY7MN6OaHZrAO71RmFBA4msmbrqDdoHHPsHxEnojzauwl2ZYVytNXKMFaHcBW9M7y0j72OJDUo3FpLMew4HF%2FYSyJ9W0%2BQr0ECYhd49pKDmT3VPcdckopZ1Mxz3z&X-Amz-Signature=a3bb201854e84d9e7931eae72cc0be2d705abe3c739fcba326190d6d2e3db2e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO2WJFGD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEeux47SeVXETy4dt611w4%2FDIN6Es4dgj6%2Blk%2F41HfAAiBQC8lIdp5pQ4F42uHz9qu8t%2FJ%2BMrNS8bM5o0TGjIy0iiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtp%2F7vH9LqFuho1rLKtwDiT9VMh7iMeX2lcGmF7KUT%2BAo0h85XNkoWG93fVgO%2F7t8t51GSr3%2Fh2qNMBRAgAaqaUgxLcBY9dXOvJISXngyctmWwhlXz0a489%2FgG0jhyVFje%2BAuZ1dzQ45bV%2BFqLK0j%2B9P7RFQl%2BffwP04VSTnLH5wIDvPIBCnlcHPG9jcxZTI7f2%2Bz1fWTTUeeV6O8mPmlIcQbeDMvPnoRJGPIYwzKVQgbnkthdIZ5S%2Fk8O1K2XqDrZteStiRzSPGNJ2D8K1EinKNmk5LRc67qiLAjF8z5jpIAt9Is%2ByqmFzXSmoNJEuxrwb1oCRC7erfdJXjIOxiRNYZ9EGvDyQ%2FLHrxgkRynuEp6h8ohAPe27ui24GKbZi3Z4YqtZjJHs9PofCIicrkcuO%2B9Q189J%2ForqCHyaUvVPMrszUva5mXX7f16uPAYlDZDnWCgsxAZvw6NhCXAnwas3%2FLEdPIfo%2FifJaxQ4jPBLdJGmSmgeBdRPND3TLG2bawflauRibz%2F0W8SP2vonsfF1HLvpLVmCtjh5P5r9QnosyN1dhXijFifneaQQeUxtQcqk48i6ZWoRS%2Bcd%2Ffp1uoRrEDx%2F%2FP6H6AXpBK7ZaqeoJPPKosWfmhF%2B6X174aJJ9s3KAJH53zB26JMleUwzZGyxAY6pgH%2BSqpLVXTd9LrH3D2WgFkyNZSCG8FolmP3gGDNAMPSMa5Mbv4cCFkzNUOyt7sjhwW4fhYugRhS%2BPSaLcTA8uzr%2BwKmZGtK%2Bo9IEY7MN6OaHZrAO71RmFBA4msmbrqDdoHHPsHxEnojzauwl2ZYVytNXKMFaHcBW9M7y0j72OJDUo3FpLMew4HF%2FYSyJ9W0%2BQr0ECYhd49pKDmT3VPcdckopZ1Mxz3z&X-Amz-Signature=2dc8f328e99eb864f6e54a54fb29e3146c485224423f6cc0add1e1614597ccf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO2WJFGD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEeux47SeVXETy4dt611w4%2FDIN6Es4dgj6%2Blk%2F41HfAAiBQC8lIdp5pQ4F42uHz9qu8t%2FJ%2BMrNS8bM5o0TGjIy0iiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtp%2F7vH9LqFuho1rLKtwDiT9VMh7iMeX2lcGmF7KUT%2BAo0h85XNkoWG93fVgO%2F7t8t51GSr3%2Fh2qNMBRAgAaqaUgxLcBY9dXOvJISXngyctmWwhlXz0a489%2FgG0jhyVFje%2BAuZ1dzQ45bV%2BFqLK0j%2B9P7RFQl%2BffwP04VSTnLH5wIDvPIBCnlcHPG9jcxZTI7f2%2Bz1fWTTUeeV6O8mPmlIcQbeDMvPnoRJGPIYwzKVQgbnkthdIZ5S%2Fk8O1K2XqDrZteStiRzSPGNJ2D8K1EinKNmk5LRc67qiLAjF8z5jpIAt9Is%2ByqmFzXSmoNJEuxrwb1oCRC7erfdJXjIOxiRNYZ9EGvDyQ%2FLHrxgkRynuEp6h8ohAPe27ui24GKbZi3Z4YqtZjJHs9PofCIicrkcuO%2B9Q189J%2ForqCHyaUvVPMrszUva5mXX7f16uPAYlDZDnWCgsxAZvw6NhCXAnwas3%2FLEdPIfo%2FifJaxQ4jPBLdJGmSmgeBdRPND3TLG2bawflauRibz%2F0W8SP2vonsfF1HLvpLVmCtjh5P5r9QnosyN1dhXijFifneaQQeUxtQcqk48i6ZWoRS%2Bcd%2Ffp1uoRrEDx%2F%2FP6H6AXpBK7ZaqeoJPPKosWfmhF%2B6X174aJJ9s3KAJH53zB26JMleUwzZGyxAY6pgH%2BSqpLVXTd9LrH3D2WgFkyNZSCG8FolmP3gGDNAMPSMa5Mbv4cCFkzNUOyt7sjhwW4fhYugRhS%2BPSaLcTA8uzr%2BwKmZGtK%2Bo9IEY7MN6OaHZrAO71RmFBA4msmbrqDdoHHPsHxEnojzauwl2ZYVytNXKMFaHcBW9M7y0j72OJDUo3FpLMew4HF%2FYSyJ9W0%2BQr0ECYhd49pKDmT3VPcdckopZ1Mxz3z&X-Amz-Signature=b88810d29a9b037a948e2f86de4c85acd446a86dcea6c55a1211eae58e164724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO2WJFGD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEeux47SeVXETy4dt611w4%2FDIN6Es4dgj6%2Blk%2F41HfAAiBQC8lIdp5pQ4F42uHz9qu8t%2FJ%2BMrNS8bM5o0TGjIy0iiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtp%2F7vH9LqFuho1rLKtwDiT9VMh7iMeX2lcGmF7KUT%2BAo0h85XNkoWG93fVgO%2F7t8t51GSr3%2Fh2qNMBRAgAaqaUgxLcBY9dXOvJISXngyctmWwhlXz0a489%2FgG0jhyVFje%2BAuZ1dzQ45bV%2BFqLK0j%2B9P7RFQl%2BffwP04VSTnLH5wIDvPIBCnlcHPG9jcxZTI7f2%2Bz1fWTTUeeV6O8mPmlIcQbeDMvPnoRJGPIYwzKVQgbnkthdIZ5S%2Fk8O1K2XqDrZteStiRzSPGNJ2D8K1EinKNmk5LRc67qiLAjF8z5jpIAt9Is%2ByqmFzXSmoNJEuxrwb1oCRC7erfdJXjIOxiRNYZ9EGvDyQ%2FLHrxgkRynuEp6h8ohAPe27ui24GKbZi3Z4YqtZjJHs9PofCIicrkcuO%2B9Q189J%2ForqCHyaUvVPMrszUva5mXX7f16uPAYlDZDnWCgsxAZvw6NhCXAnwas3%2FLEdPIfo%2FifJaxQ4jPBLdJGmSmgeBdRPND3TLG2bawflauRibz%2F0W8SP2vonsfF1HLvpLVmCtjh5P5r9QnosyN1dhXijFifneaQQeUxtQcqk48i6ZWoRS%2Bcd%2Ffp1uoRrEDx%2F%2FP6H6AXpBK7ZaqeoJPPKosWfmhF%2B6X174aJJ9s3KAJH53zB26JMleUwzZGyxAY6pgH%2BSqpLVXTd9LrH3D2WgFkyNZSCG8FolmP3gGDNAMPSMa5Mbv4cCFkzNUOyt7sjhwW4fhYugRhS%2BPSaLcTA8uzr%2BwKmZGtK%2Bo9IEY7MN6OaHZrAO71RmFBA4msmbrqDdoHHPsHxEnojzauwl2ZYVytNXKMFaHcBW9M7y0j72OJDUo3FpLMew4HF%2FYSyJ9W0%2BQr0ECYhd49pKDmT3VPcdckopZ1Mxz3z&X-Amz-Signature=1653bdba022400bb1ea660922bf015ef44a950356f8ed83d315ea10a90b8ea78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO2WJFGD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEeux47SeVXETy4dt611w4%2FDIN6Es4dgj6%2Blk%2F41HfAAiBQC8lIdp5pQ4F42uHz9qu8t%2FJ%2BMrNS8bM5o0TGjIy0iiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtp%2F7vH9LqFuho1rLKtwDiT9VMh7iMeX2lcGmF7KUT%2BAo0h85XNkoWG93fVgO%2F7t8t51GSr3%2Fh2qNMBRAgAaqaUgxLcBY9dXOvJISXngyctmWwhlXz0a489%2FgG0jhyVFje%2BAuZ1dzQ45bV%2BFqLK0j%2B9P7RFQl%2BffwP04VSTnLH5wIDvPIBCnlcHPG9jcxZTI7f2%2Bz1fWTTUeeV6O8mPmlIcQbeDMvPnoRJGPIYwzKVQgbnkthdIZ5S%2Fk8O1K2XqDrZteStiRzSPGNJ2D8K1EinKNmk5LRc67qiLAjF8z5jpIAt9Is%2ByqmFzXSmoNJEuxrwb1oCRC7erfdJXjIOxiRNYZ9EGvDyQ%2FLHrxgkRynuEp6h8ohAPe27ui24GKbZi3Z4YqtZjJHs9PofCIicrkcuO%2B9Q189J%2ForqCHyaUvVPMrszUva5mXX7f16uPAYlDZDnWCgsxAZvw6NhCXAnwas3%2FLEdPIfo%2FifJaxQ4jPBLdJGmSmgeBdRPND3TLG2bawflauRibz%2F0W8SP2vonsfF1HLvpLVmCtjh5P5r9QnosyN1dhXijFifneaQQeUxtQcqk48i6ZWoRS%2Bcd%2Ffp1uoRrEDx%2F%2FP6H6AXpBK7ZaqeoJPPKosWfmhF%2B6X174aJJ9s3KAJH53zB26JMleUwzZGyxAY6pgH%2BSqpLVXTd9LrH3D2WgFkyNZSCG8FolmP3gGDNAMPSMa5Mbv4cCFkzNUOyt7sjhwW4fhYugRhS%2BPSaLcTA8uzr%2BwKmZGtK%2Bo9IEY7MN6OaHZrAO71RmFBA4msmbrqDdoHHPsHxEnojzauwl2ZYVytNXKMFaHcBW9M7y0j72OJDUo3FpLMew4HF%2FYSyJ9W0%2BQr0ECYhd49pKDmT3VPcdckopZ1Mxz3z&X-Amz-Signature=cbb9d089322a13a41b5cd3fcc578c2255306ba54a6e9ff71476b588f0264c138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO2WJFGD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEeux47SeVXETy4dt611w4%2FDIN6Es4dgj6%2Blk%2F41HfAAiBQC8lIdp5pQ4F42uHz9qu8t%2FJ%2BMrNS8bM5o0TGjIy0iiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtp%2F7vH9LqFuho1rLKtwDiT9VMh7iMeX2lcGmF7KUT%2BAo0h85XNkoWG93fVgO%2F7t8t51GSr3%2Fh2qNMBRAgAaqaUgxLcBY9dXOvJISXngyctmWwhlXz0a489%2FgG0jhyVFje%2BAuZ1dzQ45bV%2BFqLK0j%2B9P7RFQl%2BffwP04VSTnLH5wIDvPIBCnlcHPG9jcxZTI7f2%2Bz1fWTTUeeV6O8mPmlIcQbeDMvPnoRJGPIYwzKVQgbnkthdIZ5S%2Fk8O1K2XqDrZteStiRzSPGNJ2D8K1EinKNmk5LRc67qiLAjF8z5jpIAt9Is%2ByqmFzXSmoNJEuxrwb1oCRC7erfdJXjIOxiRNYZ9EGvDyQ%2FLHrxgkRynuEp6h8ohAPe27ui24GKbZi3Z4YqtZjJHs9PofCIicrkcuO%2B9Q189J%2ForqCHyaUvVPMrszUva5mXX7f16uPAYlDZDnWCgsxAZvw6NhCXAnwas3%2FLEdPIfo%2FifJaxQ4jPBLdJGmSmgeBdRPND3TLG2bawflauRibz%2F0W8SP2vonsfF1HLvpLVmCtjh5P5r9QnosyN1dhXijFifneaQQeUxtQcqk48i6ZWoRS%2Bcd%2Ffp1uoRrEDx%2F%2FP6H6AXpBK7ZaqeoJPPKosWfmhF%2B6X174aJJ9s3KAJH53zB26JMleUwzZGyxAY6pgH%2BSqpLVXTd9LrH3D2WgFkyNZSCG8FolmP3gGDNAMPSMa5Mbv4cCFkzNUOyt7sjhwW4fhYugRhS%2BPSaLcTA8uzr%2BwKmZGtK%2Bo9IEY7MN6OaHZrAO71RmFBA4msmbrqDdoHHPsHxEnojzauwl2ZYVytNXKMFaHcBW9M7y0j72OJDUo3FpLMew4HF%2FYSyJ9W0%2BQr0ECYhd49pKDmT3VPcdckopZ1Mxz3z&X-Amz-Signature=6170042248c17f51750bf26f1a29a3962dc64744000a32e11138560207ae6039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO2WJFGD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEeux47SeVXETy4dt611w4%2FDIN6Es4dgj6%2Blk%2F41HfAAiBQC8lIdp5pQ4F42uHz9qu8t%2FJ%2BMrNS8bM5o0TGjIy0iiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtp%2F7vH9LqFuho1rLKtwDiT9VMh7iMeX2lcGmF7KUT%2BAo0h85XNkoWG93fVgO%2F7t8t51GSr3%2Fh2qNMBRAgAaqaUgxLcBY9dXOvJISXngyctmWwhlXz0a489%2FgG0jhyVFje%2BAuZ1dzQ45bV%2BFqLK0j%2B9P7RFQl%2BffwP04VSTnLH5wIDvPIBCnlcHPG9jcxZTI7f2%2Bz1fWTTUeeV6O8mPmlIcQbeDMvPnoRJGPIYwzKVQgbnkthdIZ5S%2Fk8O1K2XqDrZteStiRzSPGNJ2D8K1EinKNmk5LRc67qiLAjF8z5jpIAt9Is%2ByqmFzXSmoNJEuxrwb1oCRC7erfdJXjIOxiRNYZ9EGvDyQ%2FLHrxgkRynuEp6h8ohAPe27ui24GKbZi3Z4YqtZjJHs9PofCIicrkcuO%2B9Q189J%2ForqCHyaUvVPMrszUva5mXX7f16uPAYlDZDnWCgsxAZvw6NhCXAnwas3%2FLEdPIfo%2FifJaxQ4jPBLdJGmSmgeBdRPND3TLG2bawflauRibz%2F0W8SP2vonsfF1HLvpLVmCtjh5P5r9QnosyN1dhXijFifneaQQeUxtQcqk48i6ZWoRS%2Bcd%2Ffp1uoRrEDx%2F%2FP6H6AXpBK7ZaqeoJPPKosWfmhF%2B6X174aJJ9s3KAJH53zB26JMleUwzZGyxAY6pgH%2BSqpLVXTd9LrH3D2WgFkyNZSCG8FolmP3gGDNAMPSMa5Mbv4cCFkzNUOyt7sjhwW4fhYugRhS%2BPSaLcTA8uzr%2BwKmZGtK%2Bo9IEY7MN6OaHZrAO71RmFBA4msmbrqDdoHHPsHxEnojzauwl2ZYVytNXKMFaHcBW9M7y0j72OJDUo3FpLMew4HF%2FYSyJ9W0%2BQr0ECYhd49pKDmT3VPcdckopZ1Mxz3z&X-Amz-Signature=dcb98ac92247b3c2df58c4ced5c6c88d4d9308972da933ba920612148e74af02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO2WJFGD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEeux47SeVXETy4dt611w4%2FDIN6Es4dgj6%2Blk%2F41HfAAiBQC8lIdp5pQ4F42uHz9qu8t%2FJ%2BMrNS8bM5o0TGjIy0iiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtp%2F7vH9LqFuho1rLKtwDiT9VMh7iMeX2lcGmF7KUT%2BAo0h85XNkoWG93fVgO%2F7t8t51GSr3%2Fh2qNMBRAgAaqaUgxLcBY9dXOvJISXngyctmWwhlXz0a489%2FgG0jhyVFje%2BAuZ1dzQ45bV%2BFqLK0j%2B9P7RFQl%2BffwP04VSTnLH5wIDvPIBCnlcHPG9jcxZTI7f2%2Bz1fWTTUeeV6O8mPmlIcQbeDMvPnoRJGPIYwzKVQgbnkthdIZ5S%2Fk8O1K2XqDrZteStiRzSPGNJ2D8K1EinKNmk5LRc67qiLAjF8z5jpIAt9Is%2ByqmFzXSmoNJEuxrwb1oCRC7erfdJXjIOxiRNYZ9EGvDyQ%2FLHrxgkRynuEp6h8ohAPe27ui24GKbZi3Z4YqtZjJHs9PofCIicrkcuO%2B9Q189J%2ForqCHyaUvVPMrszUva5mXX7f16uPAYlDZDnWCgsxAZvw6NhCXAnwas3%2FLEdPIfo%2FifJaxQ4jPBLdJGmSmgeBdRPND3TLG2bawflauRibz%2F0W8SP2vonsfF1HLvpLVmCtjh5P5r9QnosyN1dhXijFifneaQQeUxtQcqk48i6ZWoRS%2Bcd%2Ffp1uoRrEDx%2F%2FP6H6AXpBK7ZaqeoJPPKosWfmhF%2B6X174aJJ9s3KAJH53zB26JMleUwzZGyxAY6pgH%2BSqpLVXTd9LrH3D2WgFkyNZSCG8FolmP3gGDNAMPSMa5Mbv4cCFkzNUOyt7sjhwW4fhYugRhS%2BPSaLcTA8uzr%2BwKmZGtK%2Bo9IEY7MN6OaHZrAO71RmFBA4msmbrqDdoHHPsHxEnojzauwl2ZYVytNXKMFaHcBW9M7y0j72OJDUo3FpLMew4HF%2FYSyJ9W0%2BQr0ECYhd49pKDmT3VPcdckopZ1Mxz3z&X-Amz-Signature=d2a2577224d7d5f9bb4a327eab36977c2079595f453c560aba6f1c5fc54fb050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO2WJFGD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEeux47SeVXETy4dt611w4%2FDIN6Es4dgj6%2Blk%2F41HfAAiBQC8lIdp5pQ4F42uHz9qu8t%2FJ%2BMrNS8bM5o0TGjIy0iiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtp%2F7vH9LqFuho1rLKtwDiT9VMh7iMeX2lcGmF7KUT%2BAo0h85XNkoWG93fVgO%2F7t8t51GSr3%2Fh2qNMBRAgAaqaUgxLcBY9dXOvJISXngyctmWwhlXz0a489%2FgG0jhyVFje%2BAuZ1dzQ45bV%2BFqLK0j%2B9P7RFQl%2BffwP04VSTnLH5wIDvPIBCnlcHPG9jcxZTI7f2%2Bz1fWTTUeeV6O8mPmlIcQbeDMvPnoRJGPIYwzKVQgbnkthdIZ5S%2Fk8O1K2XqDrZteStiRzSPGNJ2D8K1EinKNmk5LRc67qiLAjF8z5jpIAt9Is%2ByqmFzXSmoNJEuxrwb1oCRC7erfdJXjIOxiRNYZ9EGvDyQ%2FLHrxgkRynuEp6h8ohAPe27ui24GKbZi3Z4YqtZjJHs9PofCIicrkcuO%2B9Q189J%2ForqCHyaUvVPMrszUva5mXX7f16uPAYlDZDnWCgsxAZvw6NhCXAnwas3%2FLEdPIfo%2FifJaxQ4jPBLdJGmSmgeBdRPND3TLG2bawflauRibz%2F0W8SP2vonsfF1HLvpLVmCtjh5P5r9QnosyN1dhXijFifneaQQeUxtQcqk48i6ZWoRS%2Bcd%2Ffp1uoRrEDx%2F%2FP6H6AXpBK7ZaqeoJPPKosWfmhF%2B6X174aJJ9s3KAJH53zB26JMleUwzZGyxAY6pgH%2BSqpLVXTd9LrH3D2WgFkyNZSCG8FolmP3gGDNAMPSMa5Mbv4cCFkzNUOyt7sjhwW4fhYugRhS%2BPSaLcTA8uzr%2BwKmZGtK%2Bo9IEY7MN6OaHZrAO71RmFBA4msmbrqDdoHHPsHxEnojzauwl2ZYVytNXKMFaHcBW9M7y0j72OJDUo3FpLMew4HF%2FYSyJ9W0%2BQr0ECYhd49pKDmT3VPcdckopZ1Mxz3z&X-Amz-Signature=dcff4ab72237c3a492511ba19b0b066567d5eee843783dc0df15bc212201cf4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO2WJFGD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEeux47SeVXETy4dt611w4%2FDIN6Es4dgj6%2Blk%2F41HfAAiBQC8lIdp5pQ4F42uHz9qu8t%2FJ%2BMrNS8bM5o0TGjIy0iiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtp%2F7vH9LqFuho1rLKtwDiT9VMh7iMeX2lcGmF7KUT%2BAo0h85XNkoWG93fVgO%2F7t8t51GSr3%2Fh2qNMBRAgAaqaUgxLcBY9dXOvJISXngyctmWwhlXz0a489%2FgG0jhyVFje%2BAuZ1dzQ45bV%2BFqLK0j%2B9P7RFQl%2BffwP04VSTnLH5wIDvPIBCnlcHPG9jcxZTI7f2%2Bz1fWTTUeeV6O8mPmlIcQbeDMvPnoRJGPIYwzKVQgbnkthdIZ5S%2Fk8O1K2XqDrZteStiRzSPGNJ2D8K1EinKNmk5LRc67qiLAjF8z5jpIAt9Is%2ByqmFzXSmoNJEuxrwb1oCRC7erfdJXjIOxiRNYZ9EGvDyQ%2FLHrxgkRynuEp6h8ohAPe27ui24GKbZi3Z4YqtZjJHs9PofCIicrkcuO%2B9Q189J%2ForqCHyaUvVPMrszUva5mXX7f16uPAYlDZDnWCgsxAZvw6NhCXAnwas3%2FLEdPIfo%2FifJaxQ4jPBLdJGmSmgeBdRPND3TLG2bawflauRibz%2F0W8SP2vonsfF1HLvpLVmCtjh5P5r9QnosyN1dhXijFifneaQQeUxtQcqk48i6ZWoRS%2Bcd%2Ffp1uoRrEDx%2F%2FP6H6AXpBK7ZaqeoJPPKosWfmhF%2B6X174aJJ9s3KAJH53zB26JMleUwzZGyxAY6pgH%2BSqpLVXTd9LrH3D2WgFkyNZSCG8FolmP3gGDNAMPSMa5Mbv4cCFkzNUOyt7sjhwW4fhYugRhS%2BPSaLcTA8uzr%2BwKmZGtK%2Bo9IEY7MN6OaHZrAO71RmFBA4msmbrqDdoHHPsHxEnojzauwl2ZYVytNXKMFaHcBW9M7y0j72OJDUo3FpLMew4HF%2FYSyJ9W0%2BQr0ECYhd49pKDmT3VPcdckopZ1Mxz3z&X-Amz-Signature=9828ea00afddb1afc724faacc950076780de15926e8dcae136f926558253b03f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO2WJFGD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEeux47SeVXETy4dt611w4%2FDIN6Es4dgj6%2Blk%2F41HfAAiBQC8lIdp5pQ4F42uHz9qu8t%2FJ%2BMrNS8bM5o0TGjIy0iiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtp%2F7vH9LqFuho1rLKtwDiT9VMh7iMeX2lcGmF7KUT%2BAo0h85XNkoWG93fVgO%2F7t8t51GSr3%2Fh2qNMBRAgAaqaUgxLcBY9dXOvJISXngyctmWwhlXz0a489%2FgG0jhyVFje%2BAuZ1dzQ45bV%2BFqLK0j%2B9P7RFQl%2BffwP04VSTnLH5wIDvPIBCnlcHPG9jcxZTI7f2%2Bz1fWTTUeeV6O8mPmlIcQbeDMvPnoRJGPIYwzKVQgbnkthdIZ5S%2Fk8O1K2XqDrZteStiRzSPGNJ2D8K1EinKNmk5LRc67qiLAjF8z5jpIAt9Is%2ByqmFzXSmoNJEuxrwb1oCRC7erfdJXjIOxiRNYZ9EGvDyQ%2FLHrxgkRynuEp6h8ohAPe27ui24GKbZi3Z4YqtZjJHs9PofCIicrkcuO%2B9Q189J%2ForqCHyaUvVPMrszUva5mXX7f16uPAYlDZDnWCgsxAZvw6NhCXAnwas3%2FLEdPIfo%2FifJaxQ4jPBLdJGmSmgeBdRPND3TLG2bawflauRibz%2F0W8SP2vonsfF1HLvpLVmCtjh5P5r9QnosyN1dhXijFifneaQQeUxtQcqk48i6ZWoRS%2Bcd%2Ffp1uoRrEDx%2F%2FP6H6AXpBK7ZaqeoJPPKosWfmhF%2B6X174aJJ9s3KAJH53zB26JMleUwzZGyxAY6pgH%2BSqpLVXTd9LrH3D2WgFkyNZSCG8FolmP3gGDNAMPSMa5Mbv4cCFkzNUOyt7sjhwW4fhYugRhS%2BPSaLcTA8uzr%2BwKmZGtK%2Bo9IEY7MN6OaHZrAO71RmFBA4msmbrqDdoHHPsHxEnojzauwl2ZYVytNXKMFaHcBW9M7y0j72OJDUo3FpLMew4HF%2FYSyJ9W0%2BQr0ECYhd49pKDmT3VPcdckopZ1Mxz3z&X-Amz-Signature=7cc24be24ef195ddb47244bfb6873c5b530d33d724c596da21d177ce2635a466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO2WJFGD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEeux47SeVXETy4dt611w4%2FDIN6Es4dgj6%2Blk%2F41HfAAiBQC8lIdp5pQ4F42uHz9qu8t%2FJ%2BMrNS8bM5o0TGjIy0iiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtp%2F7vH9LqFuho1rLKtwDiT9VMh7iMeX2lcGmF7KUT%2BAo0h85XNkoWG93fVgO%2F7t8t51GSr3%2Fh2qNMBRAgAaqaUgxLcBY9dXOvJISXngyctmWwhlXz0a489%2FgG0jhyVFje%2BAuZ1dzQ45bV%2BFqLK0j%2B9P7RFQl%2BffwP04VSTnLH5wIDvPIBCnlcHPG9jcxZTI7f2%2Bz1fWTTUeeV6O8mPmlIcQbeDMvPnoRJGPIYwzKVQgbnkthdIZ5S%2Fk8O1K2XqDrZteStiRzSPGNJ2D8K1EinKNmk5LRc67qiLAjF8z5jpIAt9Is%2ByqmFzXSmoNJEuxrwb1oCRC7erfdJXjIOxiRNYZ9EGvDyQ%2FLHrxgkRynuEp6h8ohAPe27ui24GKbZi3Z4YqtZjJHs9PofCIicrkcuO%2B9Q189J%2ForqCHyaUvVPMrszUva5mXX7f16uPAYlDZDnWCgsxAZvw6NhCXAnwas3%2FLEdPIfo%2FifJaxQ4jPBLdJGmSmgeBdRPND3TLG2bawflauRibz%2F0W8SP2vonsfF1HLvpLVmCtjh5P5r9QnosyN1dhXijFifneaQQeUxtQcqk48i6ZWoRS%2Bcd%2Ffp1uoRrEDx%2F%2FP6H6AXpBK7ZaqeoJPPKosWfmhF%2B6X174aJJ9s3KAJH53zB26JMleUwzZGyxAY6pgH%2BSqpLVXTd9LrH3D2WgFkyNZSCG8FolmP3gGDNAMPSMa5Mbv4cCFkzNUOyt7sjhwW4fhYugRhS%2BPSaLcTA8uzr%2BwKmZGtK%2Bo9IEY7MN6OaHZrAO71RmFBA4msmbrqDdoHHPsHxEnojzauwl2ZYVytNXKMFaHcBW9M7y0j72OJDUo3FpLMew4HF%2FYSyJ9W0%2BQr0ECYhd49pKDmT3VPcdckopZ1Mxz3z&X-Amz-Signature=878d7c671964b0a577777ff997f4ab6d8b48546182d2834eba8fe9d8c2d28ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Nav2 settings

TODO: change footprint?
