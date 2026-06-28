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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3CNBRV%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkB6yJ3f9h2IEXZDn8EyjEtYhO%2FDVayXiqMfEcqlGPNAIgS3ZuUaPSHhflHLBk%2B1VZDaWjh80BEsYz6Xfs5IRjXkcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5mOqB6X36Mf63Y%2BircA0GY1YQP1tDg44hJRvFikVQ%2BlhPt0BPgdybZpQ%2Ba77oHXY5A1A8xP%2Ffyv8vzfehi3phqvxnsGc2qQfQSqZ8SaSLuWJbTDjPJHpyJUDZlFTr8bD%2FZbJqU9HMGlGDQdMTwxZ3AWb6gppxosY%2FIkYMY1DBCcO6dGspEozHOPOZBlVEfOXbXWIazbM5cql7PD9cwX5TkuLgwKim4ZDgocmyFEFkWnbg7KxvA%2FYEOZ8rRNOw3edNRSnRpMcBT%2B9Qz0DiYlPUjLDLWaXjpsmQh5cyd6pfxyhyaokJgCM%2Bv3IQRlHzYraFS4c3Xm1fibonpniXinFgXwWD9uwRoWVVdZXbIMKKRRN109dPffRT1hIjCpofkLCPJQ%2BmIn3gdS4HbtkKfbB7UupP5UcMDjLyJaRmehcz60uXoHg64oJ563wBwYcoArPcuADyVYjGlqOeFy%2FS92AnyjN%2BvxzJSEUa2QYjgpG5ZivXviK3OHct8it1JtZn3TadmPrpxJm1%2FUWcbZ97q%2BiE5JGdrCicbIK%2FnjH42enUjXF0CsUaRn7opj0iXRaMcviwCXbzTFs5y%2FjDZL2%2BM7%2BH4LJGELFj%2B8%2BI7hQKTtuIQzN7Frk33M%2F4V8lB04u8TSEy9bs%2BsWD34zyiuMN%2BggtIGOqUBR8dwkqxnzlun%2B9BCEGpLtBjGb0z8fSt%2B1PHY%2FyMNpngq%2Bie79X22znzTUWhPc8kxJed249%2BivdyWPkRCLmc5ziTHyAMavid7fGKQergfSbefS%2BoiZ5DdI129JUm%2BPuUAljKlBg2h9YbiYOvLG2HwSNQkDJ91cBsRs5Fe92kiqeNrKX9Sow1N2IrPPrxYfNOK%2BnU9V0dvFTa4AHEGzEPnaKOXsiFN&X-Amz-Signature=31eaf40d0e82b1b5aa08333cb435a073767482eef77202de8736a2db8fa6f21e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3CNBRV%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkB6yJ3f9h2IEXZDn8EyjEtYhO%2FDVayXiqMfEcqlGPNAIgS3ZuUaPSHhflHLBk%2B1VZDaWjh80BEsYz6Xfs5IRjXkcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5mOqB6X36Mf63Y%2BircA0GY1YQP1tDg44hJRvFikVQ%2BlhPt0BPgdybZpQ%2Ba77oHXY5A1A8xP%2Ffyv8vzfehi3phqvxnsGc2qQfQSqZ8SaSLuWJbTDjPJHpyJUDZlFTr8bD%2FZbJqU9HMGlGDQdMTwxZ3AWb6gppxosY%2FIkYMY1DBCcO6dGspEozHOPOZBlVEfOXbXWIazbM5cql7PD9cwX5TkuLgwKim4ZDgocmyFEFkWnbg7KxvA%2FYEOZ8rRNOw3edNRSnRpMcBT%2B9Qz0DiYlPUjLDLWaXjpsmQh5cyd6pfxyhyaokJgCM%2Bv3IQRlHzYraFS4c3Xm1fibonpniXinFgXwWD9uwRoWVVdZXbIMKKRRN109dPffRT1hIjCpofkLCPJQ%2BmIn3gdS4HbtkKfbB7UupP5UcMDjLyJaRmehcz60uXoHg64oJ563wBwYcoArPcuADyVYjGlqOeFy%2FS92AnyjN%2BvxzJSEUa2QYjgpG5ZivXviK3OHct8it1JtZn3TadmPrpxJm1%2FUWcbZ97q%2BiE5JGdrCicbIK%2FnjH42enUjXF0CsUaRn7opj0iXRaMcviwCXbzTFs5y%2FjDZL2%2BM7%2BH4LJGELFj%2B8%2BI7hQKTtuIQzN7Frk33M%2F4V8lB04u8TSEy9bs%2BsWD34zyiuMN%2BggtIGOqUBR8dwkqxnzlun%2B9BCEGpLtBjGb0z8fSt%2B1PHY%2FyMNpngq%2Bie79X22znzTUWhPc8kxJed249%2BivdyWPkRCLmc5ziTHyAMavid7fGKQergfSbefS%2BoiZ5DdI129JUm%2BPuUAljKlBg2h9YbiYOvLG2HwSNQkDJ91cBsRs5Fe92kiqeNrKX9Sow1N2IrPPrxYfNOK%2BnU9V0dvFTa4AHEGzEPnaKOXsiFN&X-Amz-Signature=d5f99bc37ef8fa2bd4aa44523854108d8d77ee9eafe959b73f04babd2c199c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3CNBRV%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkB6yJ3f9h2IEXZDn8EyjEtYhO%2FDVayXiqMfEcqlGPNAIgS3ZuUaPSHhflHLBk%2B1VZDaWjh80BEsYz6Xfs5IRjXkcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5mOqB6X36Mf63Y%2BircA0GY1YQP1tDg44hJRvFikVQ%2BlhPt0BPgdybZpQ%2Ba77oHXY5A1A8xP%2Ffyv8vzfehi3phqvxnsGc2qQfQSqZ8SaSLuWJbTDjPJHpyJUDZlFTr8bD%2FZbJqU9HMGlGDQdMTwxZ3AWb6gppxosY%2FIkYMY1DBCcO6dGspEozHOPOZBlVEfOXbXWIazbM5cql7PD9cwX5TkuLgwKim4ZDgocmyFEFkWnbg7KxvA%2FYEOZ8rRNOw3edNRSnRpMcBT%2B9Qz0DiYlPUjLDLWaXjpsmQh5cyd6pfxyhyaokJgCM%2Bv3IQRlHzYraFS4c3Xm1fibonpniXinFgXwWD9uwRoWVVdZXbIMKKRRN109dPffRT1hIjCpofkLCPJQ%2BmIn3gdS4HbtkKfbB7UupP5UcMDjLyJaRmehcz60uXoHg64oJ563wBwYcoArPcuADyVYjGlqOeFy%2FS92AnyjN%2BvxzJSEUa2QYjgpG5ZivXviK3OHct8it1JtZn3TadmPrpxJm1%2FUWcbZ97q%2BiE5JGdrCicbIK%2FnjH42enUjXF0CsUaRn7opj0iXRaMcviwCXbzTFs5y%2FjDZL2%2BM7%2BH4LJGELFj%2B8%2BI7hQKTtuIQzN7Frk33M%2F4V8lB04u8TSEy9bs%2BsWD34zyiuMN%2BggtIGOqUBR8dwkqxnzlun%2B9BCEGpLtBjGb0z8fSt%2B1PHY%2FyMNpngq%2Bie79X22znzTUWhPc8kxJed249%2BivdyWPkRCLmc5ziTHyAMavid7fGKQergfSbefS%2BoiZ5DdI129JUm%2BPuUAljKlBg2h9YbiYOvLG2HwSNQkDJ91cBsRs5Fe92kiqeNrKX9Sow1N2IrPPrxYfNOK%2BnU9V0dvFTa4AHEGzEPnaKOXsiFN&X-Amz-Signature=2fc73b7d6cf08b86e5924e9ed03e4cb08b9aea38fa0b2492120d8fe745bdedd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3CNBRV%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkB6yJ3f9h2IEXZDn8EyjEtYhO%2FDVayXiqMfEcqlGPNAIgS3ZuUaPSHhflHLBk%2B1VZDaWjh80BEsYz6Xfs5IRjXkcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5mOqB6X36Mf63Y%2BircA0GY1YQP1tDg44hJRvFikVQ%2BlhPt0BPgdybZpQ%2Ba77oHXY5A1A8xP%2Ffyv8vzfehi3phqvxnsGc2qQfQSqZ8SaSLuWJbTDjPJHpyJUDZlFTr8bD%2FZbJqU9HMGlGDQdMTwxZ3AWb6gppxosY%2FIkYMY1DBCcO6dGspEozHOPOZBlVEfOXbXWIazbM5cql7PD9cwX5TkuLgwKim4ZDgocmyFEFkWnbg7KxvA%2FYEOZ8rRNOw3edNRSnRpMcBT%2B9Qz0DiYlPUjLDLWaXjpsmQh5cyd6pfxyhyaokJgCM%2Bv3IQRlHzYraFS4c3Xm1fibonpniXinFgXwWD9uwRoWVVdZXbIMKKRRN109dPffRT1hIjCpofkLCPJQ%2BmIn3gdS4HbtkKfbB7UupP5UcMDjLyJaRmehcz60uXoHg64oJ563wBwYcoArPcuADyVYjGlqOeFy%2FS92AnyjN%2BvxzJSEUa2QYjgpG5ZivXviK3OHct8it1JtZn3TadmPrpxJm1%2FUWcbZ97q%2BiE5JGdrCicbIK%2FnjH42enUjXF0CsUaRn7opj0iXRaMcviwCXbzTFs5y%2FjDZL2%2BM7%2BH4LJGELFj%2B8%2BI7hQKTtuIQzN7Frk33M%2F4V8lB04u8TSEy9bs%2BsWD34zyiuMN%2BggtIGOqUBR8dwkqxnzlun%2B9BCEGpLtBjGb0z8fSt%2B1PHY%2FyMNpngq%2Bie79X22znzTUWhPc8kxJed249%2BivdyWPkRCLmc5ziTHyAMavid7fGKQergfSbefS%2BoiZ5DdI129JUm%2BPuUAljKlBg2h9YbiYOvLG2HwSNQkDJ91cBsRs5Fe92kiqeNrKX9Sow1N2IrPPrxYfNOK%2BnU9V0dvFTa4AHEGzEPnaKOXsiFN&X-Amz-Signature=809cd9dabb6648bae225306f5c813985063531f4e4f6e6f07321b2fd34e1e3b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3CNBRV%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkB6yJ3f9h2IEXZDn8EyjEtYhO%2FDVayXiqMfEcqlGPNAIgS3ZuUaPSHhflHLBk%2B1VZDaWjh80BEsYz6Xfs5IRjXkcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5mOqB6X36Mf63Y%2BircA0GY1YQP1tDg44hJRvFikVQ%2BlhPt0BPgdybZpQ%2Ba77oHXY5A1A8xP%2Ffyv8vzfehi3phqvxnsGc2qQfQSqZ8SaSLuWJbTDjPJHpyJUDZlFTr8bD%2FZbJqU9HMGlGDQdMTwxZ3AWb6gppxosY%2FIkYMY1DBCcO6dGspEozHOPOZBlVEfOXbXWIazbM5cql7PD9cwX5TkuLgwKim4ZDgocmyFEFkWnbg7KxvA%2FYEOZ8rRNOw3edNRSnRpMcBT%2B9Qz0DiYlPUjLDLWaXjpsmQh5cyd6pfxyhyaokJgCM%2Bv3IQRlHzYraFS4c3Xm1fibonpniXinFgXwWD9uwRoWVVdZXbIMKKRRN109dPffRT1hIjCpofkLCPJQ%2BmIn3gdS4HbtkKfbB7UupP5UcMDjLyJaRmehcz60uXoHg64oJ563wBwYcoArPcuADyVYjGlqOeFy%2FS92AnyjN%2BvxzJSEUa2QYjgpG5ZivXviK3OHct8it1JtZn3TadmPrpxJm1%2FUWcbZ97q%2BiE5JGdrCicbIK%2FnjH42enUjXF0CsUaRn7opj0iXRaMcviwCXbzTFs5y%2FjDZL2%2BM7%2BH4LJGELFj%2B8%2BI7hQKTtuIQzN7Frk33M%2F4V8lB04u8TSEy9bs%2BsWD34zyiuMN%2BggtIGOqUBR8dwkqxnzlun%2B9BCEGpLtBjGb0z8fSt%2B1PHY%2FyMNpngq%2Bie79X22znzTUWhPc8kxJed249%2BivdyWPkRCLmc5ziTHyAMavid7fGKQergfSbefS%2BoiZ5DdI129JUm%2BPuUAljKlBg2h9YbiYOvLG2HwSNQkDJ91cBsRs5Fe92kiqeNrKX9Sow1N2IrPPrxYfNOK%2BnU9V0dvFTa4AHEGzEPnaKOXsiFN&X-Amz-Signature=1b4cf625acfe2b941ea12ef704f2f0af8f091eee374cec274eed6233d1efd9d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3CNBRV%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkB6yJ3f9h2IEXZDn8EyjEtYhO%2FDVayXiqMfEcqlGPNAIgS3ZuUaPSHhflHLBk%2B1VZDaWjh80BEsYz6Xfs5IRjXkcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5mOqB6X36Mf63Y%2BircA0GY1YQP1tDg44hJRvFikVQ%2BlhPt0BPgdybZpQ%2Ba77oHXY5A1A8xP%2Ffyv8vzfehi3phqvxnsGc2qQfQSqZ8SaSLuWJbTDjPJHpyJUDZlFTr8bD%2FZbJqU9HMGlGDQdMTwxZ3AWb6gppxosY%2FIkYMY1DBCcO6dGspEozHOPOZBlVEfOXbXWIazbM5cql7PD9cwX5TkuLgwKim4ZDgocmyFEFkWnbg7KxvA%2FYEOZ8rRNOw3edNRSnRpMcBT%2B9Qz0DiYlPUjLDLWaXjpsmQh5cyd6pfxyhyaokJgCM%2Bv3IQRlHzYraFS4c3Xm1fibonpniXinFgXwWD9uwRoWVVdZXbIMKKRRN109dPffRT1hIjCpofkLCPJQ%2BmIn3gdS4HbtkKfbB7UupP5UcMDjLyJaRmehcz60uXoHg64oJ563wBwYcoArPcuADyVYjGlqOeFy%2FS92AnyjN%2BvxzJSEUa2QYjgpG5ZivXviK3OHct8it1JtZn3TadmPrpxJm1%2FUWcbZ97q%2BiE5JGdrCicbIK%2FnjH42enUjXF0CsUaRn7opj0iXRaMcviwCXbzTFs5y%2FjDZL2%2BM7%2BH4LJGELFj%2B8%2BI7hQKTtuIQzN7Frk33M%2F4V8lB04u8TSEy9bs%2BsWD34zyiuMN%2BggtIGOqUBR8dwkqxnzlun%2B9BCEGpLtBjGb0z8fSt%2B1PHY%2FyMNpngq%2Bie79X22znzTUWhPc8kxJed249%2BivdyWPkRCLmc5ziTHyAMavid7fGKQergfSbefS%2BoiZ5DdI129JUm%2BPuUAljKlBg2h9YbiYOvLG2HwSNQkDJ91cBsRs5Fe92kiqeNrKX9Sow1N2IrPPrxYfNOK%2BnU9V0dvFTa4AHEGzEPnaKOXsiFN&X-Amz-Signature=4f1e701fd56b5e05e1ff6695645dc5d021d34e5a55ee81ce2dd459bd91e01902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3CNBRV%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkB6yJ3f9h2IEXZDn8EyjEtYhO%2FDVayXiqMfEcqlGPNAIgS3ZuUaPSHhflHLBk%2B1VZDaWjh80BEsYz6Xfs5IRjXkcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5mOqB6X36Mf63Y%2BircA0GY1YQP1tDg44hJRvFikVQ%2BlhPt0BPgdybZpQ%2Ba77oHXY5A1A8xP%2Ffyv8vzfehi3phqvxnsGc2qQfQSqZ8SaSLuWJbTDjPJHpyJUDZlFTr8bD%2FZbJqU9HMGlGDQdMTwxZ3AWb6gppxosY%2FIkYMY1DBCcO6dGspEozHOPOZBlVEfOXbXWIazbM5cql7PD9cwX5TkuLgwKim4ZDgocmyFEFkWnbg7KxvA%2FYEOZ8rRNOw3edNRSnRpMcBT%2B9Qz0DiYlPUjLDLWaXjpsmQh5cyd6pfxyhyaokJgCM%2Bv3IQRlHzYraFS4c3Xm1fibonpniXinFgXwWD9uwRoWVVdZXbIMKKRRN109dPffRT1hIjCpofkLCPJQ%2BmIn3gdS4HbtkKfbB7UupP5UcMDjLyJaRmehcz60uXoHg64oJ563wBwYcoArPcuADyVYjGlqOeFy%2FS92AnyjN%2BvxzJSEUa2QYjgpG5ZivXviK3OHct8it1JtZn3TadmPrpxJm1%2FUWcbZ97q%2BiE5JGdrCicbIK%2FnjH42enUjXF0CsUaRn7opj0iXRaMcviwCXbzTFs5y%2FjDZL2%2BM7%2BH4LJGELFj%2B8%2BI7hQKTtuIQzN7Frk33M%2F4V8lB04u8TSEy9bs%2BsWD34zyiuMN%2BggtIGOqUBR8dwkqxnzlun%2B9BCEGpLtBjGb0z8fSt%2B1PHY%2FyMNpngq%2Bie79X22znzTUWhPc8kxJed249%2BivdyWPkRCLmc5ziTHyAMavid7fGKQergfSbefS%2BoiZ5DdI129JUm%2BPuUAljKlBg2h9YbiYOvLG2HwSNQkDJ91cBsRs5Fe92kiqeNrKX9Sow1N2IrPPrxYfNOK%2BnU9V0dvFTa4AHEGzEPnaKOXsiFN&X-Amz-Signature=74d40c85ebfa489fd879df805f4b4c6adecbf2c82489480e2e1be9823cf7d215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3CNBRV%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkB6yJ3f9h2IEXZDn8EyjEtYhO%2FDVayXiqMfEcqlGPNAIgS3ZuUaPSHhflHLBk%2B1VZDaWjh80BEsYz6Xfs5IRjXkcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5mOqB6X36Mf63Y%2BircA0GY1YQP1tDg44hJRvFikVQ%2BlhPt0BPgdybZpQ%2Ba77oHXY5A1A8xP%2Ffyv8vzfehi3phqvxnsGc2qQfQSqZ8SaSLuWJbTDjPJHpyJUDZlFTr8bD%2FZbJqU9HMGlGDQdMTwxZ3AWb6gppxosY%2FIkYMY1DBCcO6dGspEozHOPOZBlVEfOXbXWIazbM5cql7PD9cwX5TkuLgwKim4ZDgocmyFEFkWnbg7KxvA%2FYEOZ8rRNOw3edNRSnRpMcBT%2B9Qz0DiYlPUjLDLWaXjpsmQh5cyd6pfxyhyaokJgCM%2Bv3IQRlHzYraFS4c3Xm1fibonpniXinFgXwWD9uwRoWVVdZXbIMKKRRN109dPffRT1hIjCpofkLCPJQ%2BmIn3gdS4HbtkKfbB7UupP5UcMDjLyJaRmehcz60uXoHg64oJ563wBwYcoArPcuADyVYjGlqOeFy%2FS92AnyjN%2BvxzJSEUa2QYjgpG5ZivXviK3OHct8it1JtZn3TadmPrpxJm1%2FUWcbZ97q%2BiE5JGdrCicbIK%2FnjH42enUjXF0CsUaRn7opj0iXRaMcviwCXbzTFs5y%2FjDZL2%2BM7%2BH4LJGELFj%2B8%2BI7hQKTtuIQzN7Frk33M%2F4V8lB04u8TSEy9bs%2BsWD34zyiuMN%2BggtIGOqUBR8dwkqxnzlun%2B9BCEGpLtBjGb0z8fSt%2B1PHY%2FyMNpngq%2Bie79X22znzTUWhPc8kxJed249%2BivdyWPkRCLmc5ziTHyAMavid7fGKQergfSbefS%2BoiZ5DdI129JUm%2BPuUAljKlBg2h9YbiYOvLG2HwSNQkDJ91cBsRs5Fe92kiqeNrKX9Sow1N2IrPPrxYfNOK%2BnU9V0dvFTa4AHEGzEPnaKOXsiFN&X-Amz-Signature=c2c25a6fba4891e7d7a528d44555e26c099c32827df9d12737f6bdb45d3c346a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3CNBRV%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkB6yJ3f9h2IEXZDn8EyjEtYhO%2FDVayXiqMfEcqlGPNAIgS3ZuUaPSHhflHLBk%2B1VZDaWjh80BEsYz6Xfs5IRjXkcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5mOqB6X36Mf63Y%2BircA0GY1YQP1tDg44hJRvFikVQ%2BlhPt0BPgdybZpQ%2Ba77oHXY5A1A8xP%2Ffyv8vzfehi3phqvxnsGc2qQfQSqZ8SaSLuWJbTDjPJHpyJUDZlFTr8bD%2FZbJqU9HMGlGDQdMTwxZ3AWb6gppxosY%2FIkYMY1DBCcO6dGspEozHOPOZBlVEfOXbXWIazbM5cql7PD9cwX5TkuLgwKim4ZDgocmyFEFkWnbg7KxvA%2FYEOZ8rRNOw3edNRSnRpMcBT%2B9Qz0DiYlPUjLDLWaXjpsmQh5cyd6pfxyhyaokJgCM%2Bv3IQRlHzYraFS4c3Xm1fibonpniXinFgXwWD9uwRoWVVdZXbIMKKRRN109dPffRT1hIjCpofkLCPJQ%2BmIn3gdS4HbtkKfbB7UupP5UcMDjLyJaRmehcz60uXoHg64oJ563wBwYcoArPcuADyVYjGlqOeFy%2FS92AnyjN%2BvxzJSEUa2QYjgpG5ZivXviK3OHct8it1JtZn3TadmPrpxJm1%2FUWcbZ97q%2BiE5JGdrCicbIK%2FnjH42enUjXF0CsUaRn7opj0iXRaMcviwCXbzTFs5y%2FjDZL2%2BM7%2BH4LJGELFj%2B8%2BI7hQKTtuIQzN7Frk33M%2F4V8lB04u8TSEy9bs%2BsWD34zyiuMN%2BggtIGOqUBR8dwkqxnzlun%2B9BCEGpLtBjGb0z8fSt%2B1PHY%2FyMNpngq%2Bie79X22znzTUWhPc8kxJed249%2BivdyWPkRCLmc5ziTHyAMavid7fGKQergfSbefS%2BoiZ5DdI129JUm%2BPuUAljKlBg2h9YbiYOvLG2HwSNQkDJ91cBsRs5Fe92kiqeNrKX9Sow1N2IrPPrxYfNOK%2BnU9V0dvFTa4AHEGzEPnaKOXsiFN&X-Amz-Signature=d084598b4a40527194f446543953604142973f1c18e9119f22668cd70550b592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3CNBRV%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkB6yJ3f9h2IEXZDn8EyjEtYhO%2FDVayXiqMfEcqlGPNAIgS3ZuUaPSHhflHLBk%2B1VZDaWjh80BEsYz6Xfs5IRjXkcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5mOqB6X36Mf63Y%2BircA0GY1YQP1tDg44hJRvFikVQ%2BlhPt0BPgdybZpQ%2Ba77oHXY5A1A8xP%2Ffyv8vzfehi3phqvxnsGc2qQfQSqZ8SaSLuWJbTDjPJHpyJUDZlFTr8bD%2FZbJqU9HMGlGDQdMTwxZ3AWb6gppxosY%2FIkYMY1DBCcO6dGspEozHOPOZBlVEfOXbXWIazbM5cql7PD9cwX5TkuLgwKim4ZDgocmyFEFkWnbg7KxvA%2FYEOZ8rRNOw3edNRSnRpMcBT%2B9Qz0DiYlPUjLDLWaXjpsmQh5cyd6pfxyhyaokJgCM%2Bv3IQRlHzYraFS4c3Xm1fibonpniXinFgXwWD9uwRoWVVdZXbIMKKRRN109dPffRT1hIjCpofkLCPJQ%2BmIn3gdS4HbtkKfbB7UupP5UcMDjLyJaRmehcz60uXoHg64oJ563wBwYcoArPcuADyVYjGlqOeFy%2FS92AnyjN%2BvxzJSEUa2QYjgpG5ZivXviK3OHct8it1JtZn3TadmPrpxJm1%2FUWcbZ97q%2BiE5JGdrCicbIK%2FnjH42enUjXF0CsUaRn7opj0iXRaMcviwCXbzTFs5y%2FjDZL2%2BM7%2BH4LJGELFj%2B8%2BI7hQKTtuIQzN7Frk33M%2F4V8lB04u8TSEy9bs%2BsWD34zyiuMN%2BggtIGOqUBR8dwkqxnzlun%2B9BCEGpLtBjGb0z8fSt%2B1PHY%2FyMNpngq%2Bie79X22znzTUWhPc8kxJed249%2BivdyWPkRCLmc5ziTHyAMavid7fGKQergfSbefS%2BoiZ5DdI129JUm%2BPuUAljKlBg2h9YbiYOvLG2HwSNQkDJ91cBsRs5Fe92kiqeNrKX9Sow1N2IrPPrxYfNOK%2BnU9V0dvFTa4AHEGzEPnaKOXsiFN&X-Amz-Signature=396fee16e40f4c52d75ba574d03ffbfe7e3bfb757b5e03f63891ad2b5d8ad8e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3CNBRV%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkB6yJ3f9h2IEXZDn8EyjEtYhO%2FDVayXiqMfEcqlGPNAIgS3ZuUaPSHhflHLBk%2B1VZDaWjh80BEsYz6Xfs5IRjXkcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5mOqB6X36Mf63Y%2BircA0GY1YQP1tDg44hJRvFikVQ%2BlhPt0BPgdybZpQ%2Ba77oHXY5A1A8xP%2Ffyv8vzfehi3phqvxnsGc2qQfQSqZ8SaSLuWJbTDjPJHpyJUDZlFTr8bD%2FZbJqU9HMGlGDQdMTwxZ3AWb6gppxosY%2FIkYMY1DBCcO6dGspEozHOPOZBlVEfOXbXWIazbM5cql7PD9cwX5TkuLgwKim4ZDgocmyFEFkWnbg7KxvA%2FYEOZ8rRNOw3edNRSnRpMcBT%2B9Qz0DiYlPUjLDLWaXjpsmQh5cyd6pfxyhyaokJgCM%2Bv3IQRlHzYraFS4c3Xm1fibonpniXinFgXwWD9uwRoWVVdZXbIMKKRRN109dPffRT1hIjCpofkLCPJQ%2BmIn3gdS4HbtkKfbB7UupP5UcMDjLyJaRmehcz60uXoHg64oJ563wBwYcoArPcuADyVYjGlqOeFy%2FS92AnyjN%2BvxzJSEUa2QYjgpG5ZivXviK3OHct8it1JtZn3TadmPrpxJm1%2FUWcbZ97q%2BiE5JGdrCicbIK%2FnjH42enUjXF0CsUaRn7opj0iXRaMcviwCXbzTFs5y%2FjDZL2%2BM7%2BH4LJGELFj%2B8%2BI7hQKTtuIQzN7Frk33M%2F4V8lB04u8TSEy9bs%2BsWD34zyiuMN%2BggtIGOqUBR8dwkqxnzlun%2B9BCEGpLtBjGb0z8fSt%2B1PHY%2FyMNpngq%2Bie79X22znzTUWhPc8kxJed249%2BivdyWPkRCLmc5ziTHyAMavid7fGKQergfSbefS%2BoiZ5DdI129JUm%2BPuUAljKlBg2h9YbiYOvLG2HwSNQkDJ91cBsRs5Fe92kiqeNrKX9Sow1N2IrPPrxYfNOK%2BnU9V0dvFTa4AHEGzEPnaKOXsiFN&X-Amz-Signature=1aa1a317c3b20d7128507974efe19a366560396a9cff491c136b9d6b9c7d2187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3CNBRV%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkB6yJ3f9h2IEXZDn8EyjEtYhO%2FDVayXiqMfEcqlGPNAIgS3ZuUaPSHhflHLBk%2B1VZDaWjh80BEsYz6Xfs5IRjXkcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5mOqB6X36Mf63Y%2BircA0GY1YQP1tDg44hJRvFikVQ%2BlhPt0BPgdybZpQ%2Ba77oHXY5A1A8xP%2Ffyv8vzfehi3phqvxnsGc2qQfQSqZ8SaSLuWJbTDjPJHpyJUDZlFTr8bD%2FZbJqU9HMGlGDQdMTwxZ3AWb6gppxosY%2FIkYMY1DBCcO6dGspEozHOPOZBlVEfOXbXWIazbM5cql7PD9cwX5TkuLgwKim4ZDgocmyFEFkWnbg7KxvA%2FYEOZ8rRNOw3edNRSnRpMcBT%2B9Qz0DiYlPUjLDLWaXjpsmQh5cyd6pfxyhyaokJgCM%2Bv3IQRlHzYraFS4c3Xm1fibonpniXinFgXwWD9uwRoWVVdZXbIMKKRRN109dPffRT1hIjCpofkLCPJQ%2BmIn3gdS4HbtkKfbB7UupP5UcMDjLyJaRmehcz60uXoHg64oJ563wBwYcoArPcuADyVYjGlqOeFy%2FS92AnyjN%2BvxzJSEUa2QYjgpG5ZivXviK3OHct8it1JtZn3TadmPrpxJm1%2FUWcbZ97q%2BiE5JGdrCicbIK%2FnjH42enUjXF0CsUaRn7opj0iXRaMcviwCXbzTFs5y%2FjDZL2%2BM7%2BH4LJGELFj%2B8%2BI7hQKTtuIQzN7Frk33M%2F4V8lB04u8TSEy9bs%2BsWD34zyiuMN%2BggtIGOqUBR8dwkqxnzlun%2B9BCEGpLtBjGb0z8fSt%2B1PHY%2FyMNpngq%2Bie79X22znzTUWhPc8kxJed249%2BivdyWPkRCLmc5ziTHyAMavid7fGKQergfSbefS%2BoiZ5DdI129JUm%2BPuUAljKlBg2h9YbiYOvLG2HwSNQkDJ91cBsRs5Fe92kiqeNrKX9Sow1N2IrPPrxYfNOK%2BnU9V0dvFTa4AHEGzEPnaKOXsiFN&X-Amz-Signature=d5e795319441c13c1f29642c7d8d7f560c6561a77ce04ed50cf4d63459d9d8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3CNBRV%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkB6yJ3f9h2IEXZDn8EyjEtYhO%2FDVayXiqMfEcqlGPNAIgS3ZuUaPSHhflHLBk%2B1VZDaWjh80BEsYz6Xfs5IRjXkcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5mOqB6X36Mf63Y%2BircA0GY1YQP1tDg44hJRvFikVQ%2BlhPt0BPgdybZpQ%2Ba77oHXY5A1A8xP%2Ffyv8vzfehi3phqvxnsGc2qQfQSqZ8SaSLuWJbTDjPJHpyJUDZlFTr8bD%2FZbJqU9HMGlGDQdMTwxZ3AWb6gppxosY%2FIkYMY1DBCcO6dGspEozHOPOZBlVEfOXbXWIazbM5cql7PD9cwX5TkuLgwKim4ZDgocmyFEFkWnbg7KxvA%2FYEOZ8rRNOw3edNRSnRpMcBT%2B9Qz0DiYlPUjLDLWaXjpsmQh5cyd6pfxyhyaokJgCM%2Bv3IQRlHzYraFS4c3Xm1fibonpniXinFgXwWD9uwRoWVVdZXbIMKKRRN109dPffRT1hIjCpofkLCPJQ%2BmIn3gdS4HbtkKfbB7UupP5UcMDjLyJaRmehcz60uXoHg64oJ563wBwYcoArPcuADyVYjGlqOeFy%2FS92AnyjN%2BvxzJSEUa2QYjgpG5ZivXviK3OHct8it1JtZn3TadmPrpxJm1%2FUWcbZ97q%2BiE5JGdrCicbIK%2FnjH42enUjXF0CsUaRn7opj0iXRaMcviwCXbzTFs5y%2FjDZL2%2BM7%2BH4LJGELFj%2B8%2BI7hQKTtuIQzN7Frk33M%2F4V8lB04u8TSEy9bs%2BsWD34zyiuMN%2BggtIGOqUBR8dwkqxnzlun%2B9BCEGpLtBjGb0z8fSt%2B1PHY%2FyMNpngq%2Bie79X22znzTUWhPc8kxJed249%2BivdyWPkRCLmc5ziTHyAMavid7fGKQergfSbefS%2BoiZ5DdI129JUm%2BPuUAljKlBg2h9YbiYOvLG2HwSNQkDJ91cBsRs5Fe92kiqeNrKX9Sow1N2IrPPrxYfNOK%2BnU9V0dvFTa4AHEGzEPnaKOXsiFN&X-Amz-Signature=4fc8b3a11ae1e21b7853a2bbbd3be74920d2e5227198b4b529fe75904b40a0aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
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
