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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7L56KBQ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsKuTRXf3MRybLlerq1rNXpmhEn4TFMSH6I3iE5H26EAiAjWWgtwdsZRvgJoCzUOQuOW2KJX%2BNOGHpmCinKmwM8LiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlV0N1ZyZWYjqW1rPKtwDj625bVl%2FE%2F1Nf9Fwzi0NoGS5ibaDLCcXK4BokHrTj9DSWlzx4yeLlhAAe%2BkM3tqv3VNiYRdcL9sOr7jdfY16HYQgFLJxRLHFFD%2Bamc5exeAgUs%2FrQ6lT3JfyZ8Uu%2BxVKhSRGU0d2QnrY5kaxH3UYv94ojl8DZngnYUVtUsQcLLTRFaB74PUeKldVEU1CTgo40Dlr9axJFldJ0qLNnXIJBYiOJJg0kswoPXdrj0GqpASl0pvx6yJXih%2FeZr5JOKLE3edqebh2GVjiNWelu5bIeQ8uh2tYNqYhQMqjJtg9f4HwBjSPc%2BCtMnSIrRhst16ffGMAyf%2FB1gGLAM7kjBklDwlpiNx%2FNOE9h2h2hbp6yK9B%2FZrn1w2lc1J1kpYvF6tk4DaUdm18nMrxvZAIi2QByEdZcyjbBoqS4%2F2zUvId534JGyLsxA2%2FtNiA0wLmabzVFfI7Gvt0TXCy9hfMFx6AZPRUeMJmKU%2BYE7XGLxxt4lw5NpX74ye3ceE1fHCo%2B49lFZ9SYcMUtRCu9e3V72IHRJAWW%2FNfveKzGYH%2B%2FRm76Bks3MHFghGbSNMtRCWRu3TRJnd5aOUQUoYe2Fp5GTQUgferWPbPS6KrcIyrKDVFTD5beJSL7iE6UkUyLjUwr%2BOq0wY6pgG1zI6MirVcfmjlzGnGF6Wp3R6IZxevh4ostrNxmPq5V29DnZb61fnx%2B4x%2FbEh57mSexR8sTw4JqCg179Pk0AVxd5k717KE30Tv405sf%2Bl4czYW%2BqkggPZel0UC9g47pVkcP5L%2FeVn%2BJQRyjpnsM9oUFEOfW7O86LKhAXWVRcakBxE26zRRZ1ELjRi4Uf4uLwywd3RecoIPbszGskzBn4Opf9ZQNP7c&X-Amz-Signature=41b8d84ffefb01f27e17766296280546035ac0428f58654bc42a2132d32a1266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7L56KBQ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsKuTRXf3MRybLlerq1rNXpmhEn4TFMSH6I3iE5H26EAiAjWWgtwdsZRvgJoCzUOQuOW2KJX%2BNOGHpmCinKmwM8LiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlV0N1ZyZWYjqW1rPKtwDj625bVl%2FE%2F1Nf9Fwzi0NoGS5ibaDLCcXK4BokHrTj9DSWlzx4yeLlhAAe%2BkM3tqv3VNiYRdcL9sOr7jdfY16HYQgFLJxRLHFFD%2Bamc5exeAgUs%2FrQ6lT3JfyZ8Uu%2BxVKhSRGU0d2QnrY5kaxH3UYv94ojl8DZngnYUVtUsQcLLTRFaB74PUeKldVEU1CTgo40Dlr9axJFldJ0qLNnXIJBYiOJJg0kswoPXdrj0GqpASl0pvx6yJXih%2FeZr5JOKLE3edqebh2GVjiNWelu5bIeQ8uh2tYNqYhQMqjJtg9f4HwBjSPc%2BCtMnSIrRhst16ffGMAyf%2FB1gGLAM7kjBklDwlpiNx%2FNOE9h2h2hbp6yK9B%2FZrn1w2lc1J1kpYvF6tk4DaUdm18nMrxvZAIi2QByEdZcyjbBoqS4%2F2zUvId534JGyLsxA2%2FtNiA0wLmabzVFfI7Gvt0TXCy9hfMFx6AZPRUeMJmKU%2BYE7XGLxxt4lw5NpX74ye3ceE1fHCo%2B49lFZ9SYcMUtRCu9e3V72IHRJAWW%2FNfveKzGYH%2B%2FRm76Bks3MHFghGbSNMtRCWRu3TRJnd5aOUQUoYe2Fp5GTQUgferWPbPS6KrcIyrKDVFTD5beJSL7iE6UkUyLjUwr%2BOq0wY6pgG1zI6MirVcfmjlzGnGF6Wp3R6IZxevh4ostrNxmPq5V29DnZb61fnx%2B4x%2FbEh57mSexR8sTw4JqCg179Pk0AVxd5k717KE30Tv405sf%2Bl4czYW%2BqkggPZel0UC9g47pVkcP5L%2FeVn%2BJQRyjpnsM9oUFEOfW7O86LKhAXWVRcakBxE26zRRZ1ELjRi4Uf4uLwywd3RecoIPbszGskzBn4Opf9ZQNP7c&X-Amz-Signature=405eeae8c79a1ecf661e6adc30e96c55810267c1646a54b6d28d19ba64ab5126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7L56KBQ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsKuTRXf3MRybLlerq1rNXpmhEn4TFMSH6I3iE5H26EAiAjWWgtwdsZRvgJoCzUOQuOW2KJX%2BNOGHpmCinKmwM8LiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlV0N1ZyZWYjqW1rPKtwDj625bVl%2FE%2F1Nf9Fwzi0NoGS5ibaDLCcXK4BokHrTj9DSWlzx4yeLlhAAe%2BkM3tqv3VNiYRdcL9sOr7jdfY16HYQgFLJxRLHFFD%2Bamc5exeAgUs%2FrQ6lT3JfyZ8Uu%2BxVKhSRGU0d2QnrY5kaxH3UYv94ojl8DZngnYUVtUsQcLLTRFaB74PUeKldVEU1CTgo40Dlr9axJFldJ0qLNnXIJBYiOJJg0kswoPXdrj0GqpASl0pvx6yJXih%2FeZr5JOKLE3edqebh2GVjiNWelu5bIeQ8uh2tYNqYhQMqjJtg9f4HwBjSPc%2BCtMnSIrRhst16ffGMAyf%2FB1gGLAM7kjBklDwlpiNx%2FNOE9h2h2hbp6yK9B%2FZrn1w2lc1J1kpYvF6tk4DaUdm18nMrxvZAIi2QByEdZcyjbBoqS4%2F2zUvId534JGyLsxA2%2FtNiA0wLmabzVFfI7Gvt0TXCy9hfMFx6AZPRUeMJmKU%2BYE7XGLxxt4lw5NpX74ye3ceE1fHCo%2B49lFZ9SYcMUtRCu9e3V72IHRJAWW%2FNfveKzGYH%2B%2FRm76Bks3MHFghGbSNMtRCWRu3TRJnd5aOUQUoYe2Fp5GTQUgferWPbPS6KrcIyrKDVFTD5beJSL7iE6UkUyLjUwr%2BOq0wY6pgG1zI6MirVcfmjlzGnGF6Wp3R6IZxevh4ostrNxmPq5V29DnZb61fnx%2B4x%2FbEh57mSexR8sTw4JqCg179Pk0AVxd5k717KE30Tv405sf%2Bl4czYW%2BqkggPZel0UC9g47pVkcP5L%2FeVn%2BJQRyjpnsM9oUFEOfW7O86LKhAXWVRcakBxE26zRRZ1ELjRi4Uf4uLwywd3RecoIPbszGskzBn4Opf9ZQNP7c&X-Amz-Signature=0b2b94bfb23aa1f992bc0676df14f1c0a95a53b1e9844c3c17ed3bc133d91206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7L56KBQ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsKuTRXf3MRybLlerq1rNXpmhEn4TFMSH6I3iE5H26EAiAjWWgtwdsZRvgJoCzUOQuOW2KJX%2BNOGHpmCinKmwM8LiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlV0N1ZyZWYjqW1rPKtwDj625bVl%2FE%2F1Nf9Fwzi0NoGS5ibaDLCcXK4BokHrTj9DSWlzx4yeLlhAAe%2BkM3tqv3VNiYRdcL9sOr7jdfY16HYQgFLJxRLHFFD%2Bamc5exeAgUs%2FrQ6lT3JfyZ8Uu%2BxVKhSRGU0d2QnrY5kaxH3UYv94ojl8DZngnYUVtUsQcLLTRFaB74PUeKldVEU1CTgo40Dlr9axJFldJ0qLNnXIJBYiOJJg0kswoPXdrj0GqpASl0pvx6yJXih%2FeZr5JOKLE3edqebh2GVjiNWelu5bIeQ8uh2tYNqYhQMqjJtg9f4HwBjSPc%2BCtMnSIrRhst16ffGMAyf%2FB1gGLAM7kjBklDwlpiNx%2FNOE9h2h2hbp6yK9B%2FZrn1w2lc1J1kpYvF6tk4DaUdm18nMrxvZAIi2QByEdZcyjbBoqS4%2F2zUvId534JGyLsxA2%2FtNiA0wLmabzVFfI7Gvt0TXCy9hfMFx6AZPRUeMJmKU%2BYE7XGLxxt4lw5NpX74ye3ceE1fHCo%2B49lFZ9SYcMUtRCu9e3V72IHRJAWW%2FNfveKzGYH%2B%2FRm76Bks3MHFghGbSNMtRCWRu3TRJnd5aOUQUoYe2Fp5GTQUgferWPbPS6KrcIyrKDVFTD5beJSL7iE6UkUyLjUwr%2BOq0wY6pgG1zI6MirVcfmjlzGnGF6Wp3R6IZxevh4ostrNxmPq5V29DnZb61fnx%2B4x%2FbEh57mSexR8sTw4JqCg179Pk0AVxd5k717KE30Tv405sf%2Bl4czYW%2BqkggPZel0UC9g47pVkcP5L%2FeVn%2BJQRyjpnsM9oUFEOfW7O86LKhAXWVRcakBxE26zRRZ1ELjRi4Uf4uLwywd3RecoIPbszGskzBn4Opf9ZQNP7c&X-Amz-Signature=e2c7487e72920410146139068b421277404f38331523fb447c485453dd7f8c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7L56KBQ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsKuTRXf3MRybLlerq1rNXpmhEn4TFMSH6I3iE5H26EAiAjWWgtwdsZRvgJoCzUOQuOW2KJX%2BNOGHpmCinKmwM8LiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlV0N1ZyZWYjqW1rPKtwDj625bVl%2FE%2F1Nf9Fwzi0NoGS5ibaDLCcXK4BokHrTj9DSWlzx4yeLlhAAe%2BkM3tqv3VNiYRdcL9sOr7jdfY16HYQgFLJxRLHFFD%2Bamc5exeAgUs%2FrQ6lT3JfyZ8Uu%2BxVKhSRGU0d2QnrY5kaxH3UYv94ojl8DZngnYUVtUsQcLLTRFaB74PUeKldVEU1CTgo40Dlr9axJFldJ0qLNnXIJBYiOJJg0kswoPXdrj0GqpASl0pvx6yJXih%2FeZr5JOKLE3edqebh2GVjiNWelu5bIeQ8uh2tYNqYhQMqjJtg9f4HwBjSPc%2BCtMnSIrRhst16ffGMAyf%2FB1gGLAM7kjBklDwlpiNx%2FNOE9h2h2hbp6yK9B%2FZrn1w2lc1J1kpYvF6tk4DaUdm18nMrxvZAIi2QByEdZcyjbBoqS4%2F2zUvId534JGyLsxA2%2FtNiA0wLmabzVFfI7Gvt0TXCy9hfMFx6AZPRUeMJmKU%2BYE7XGLxxt4lw5NpX74ye3ceE1fHCo%2B49lFZ9SYcMUtRCu9e3V72IHRJAWW%2FNfveKzGYH%2B%2FRm76Bks3MHFghGbSNMtRCWRu3TRJnd5aOUQUoYe2Fp5GTQUgferWPbPS6KrcIyrKDVFTD5beJSL7iE6UkUyLjUwr%2BOq0wY6pgG1zI6MirVcfmjlzGnGF6Wp3R6IZxevh4ostrNxmPq5V29DnZb61fnx%2B4x%2FbEh57mSexR8sTw4JqCg179Pk0AVxd5k717KE30Tv405sf%2Bl4czYW%2BqkggPZel0UC9g47pVkcP5L%2FeVn%2BJQRyjpnsM9oUFEOfW7O86LKhAXWVRcakBxE26zRRZ1ELjRi4Uf4uLwywd3RecoIPbszGskzBn4Opf9ZQNP7c&X-Amz-Signature=f7d69193e14434571f1eee7edb22d8f19ac593fd0298b670d07cb1279c0b2638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7L56KBQ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsKuTRXf3MRybLlerq1rNXpmhEn4TFMSH6I3iE5H26EAiAjWWgtwdsZRvgJoCzUOQuOW2KJX%2BNOGHpmCinKmwM8LiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlV0N1ZyZWYjqW1rPKtwDj625bVl%2FE%2F1Nf9Fwzi0NoGS5ibaDLCcXK4BokHrTj9DSWlzx4yeLlhAAe%2BkM3tqv3VNiYRdcL9sOr7jdfY16HYQgFLJxRLHFFD%2Bamc5exeAgUs%2FrQ6lT3JfyZ8Uu%2BxVKhSRGU0d2QnrY5kaxH3UYv94ojl8DZngnYUVtUsQcLLTRFaB74PUeKldVEU1CTgo40Dlr9axJFldJ0qLNnXIJBYiOJJg0kswoPXdrj0GqpASl0pvx6yJXih%2FeZr5JOKLE3edqebh2GVjiNWelu5bIeQ8uh2tYNqYhQMqjJtg9f4HwBjSPc%2BCtMnSIrRhst16ffGMAyf%2FB1gGLAM7kjBklDwlpiNx%2FNOE9h2h2hbp6yK9B%2FZrn1w2lc1J1kpYvF6tk4DaUdm18nMrxvZAIi2QByEdZcyjbBoqS4%2F2zUvId534JGyLsxA2%2FtNiA0wLmabzVFfI7Gvt0TXCy9hfMFx6AZPRUeMJmKU%2BYE7XGLxxt4lw5NpX74ye3ceE1fHCo%2B49lFZ9SYcMUtRCu9e3V72IHRJAWW%2FNfveKzGYH%2B%2FRm76Bks3MHFghGbSNMtRCWRu3TRJnd5aOUQUoYe2Fp5GTQUgferWPbPS6KrcIyrKDVFTD5beJSL7iE6UkUyLjUwr%2BOq0wY6pgG1zI6MirVcfmjlzGnGF6Wp3R6IZxevh4ostrNxmPq5V29DnZb61fnx%2B4x%2FbEh57mSexR8sTw4JqCg179Pk0AVxd5k717KE30Tv405sf%2Bl4czYW%2BqkggPZel0UC9g47pVkcP5L%2FeVn%2BJQRyjpnsM9oUFEOfW7O86LKhAXWVRcakBxE26zRRZ1ELjRi4Uf4uLwywd3RecoIPbszGskzBn4Opf9ZQNP7c&X-Amz-Signature=411808751fa4378a5bfad48478e37c5aeeb8769493f58fed3cbd5643c1984c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7L56KBQ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsKuTRXf3MRybLlerq1rNXpmhEn4TFMSH6I3iE5H26EAiAjWWgtwdsZRvgJoCzUOQuOW2KJX%2BNOGHpmCinKmwM8LiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlV0N1ZyZWYjqW1rPKtwDj625bVl%2FE%2F1Nf9Fwzi0NoGS5ibaDLCcXK4BokHrTj9DSWlzx4yeLlhAAe%2BkM3tqv3VNiYRdcL9sOr7jdfY16HYQgFLJxRLHFFD%2Bamc5exeAgUs%2FrQ6lT3JfyZ8Uu%2BxVKhSRGU0d2QnrY5kaxH3UYv94ojl8DZngnYUVtUsQcLLTRFaB74PUeKldVEU1CTgo40Dlr9axJFldJ0qLNnXIJBYiOJJg0kswoPXdrj0GqpASl0pvx6yJXih%2FeZr5JOKLE3edqebh2GVjiNWelu5bIeQ8uh2tYNqYhQMqjJtg9f4HwBjSPc%2BCtMnSIrRhst16ffGMAyf%2FB1gGLAM7kjBklDwlpiNx%2FNOE9h2h2hbp6yK9B%2FZrn1w2lc1J1kpYvF6tk4DaUdm18nMrxvZAIi2QByEdZcyjbBoqS4%2F2zUvId534JGyLsxA2%2FtNiA0wLmabzVFfI7Gvt0TXCy9hfMFx6AZPRUeMJmKU%2BYE7XGLxxt4lw5NpX74ye3ceE1fHCo%2B49lFZ9SYcMUtRCu9e3V72IHRJAWW%2FNfveKzGYH%2B%2FRm76Bks3MHFghGbSNMtRCWRu3TRJnd5aOUQUoYe2Fp5GTQUgferWPbPS6KrcIyrKDVFTD5beJSL7iE6UkUyLjUwr%2BOq0wY6pgG1zI6MirVcfmjlzGnGF6Wp3R6IZxevh4ostrNxmPq5V29DnZb61fnx%2B4x%2FbEh57mSexR8sTw4JqCg179Pk0AVxd5k717KE30Tv405sf%2Bl4czYW%2BqkggPZel0UC9g47pVkcP5L%2FeVn%2BJQRyjpnsM9oUFEOfW7O86LKhAXWVRcakBxE26zRRZ1ELjRi4Uf4uLwywd3RecoIPbszGskzBn4Opf9ZQNP7c&X-Amz-Signature=ab03b9e370240a67e6ce05982ab1497eb01aa4d55add3beedb186ec3993da159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7L56KBQ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsKuTRXf3MRybLlerq1rNXpmhEn4TFMSH6I3iE5H26EAiAjWWgtwdsZRvgJoCzUOQuOW2KJX%2BNOGHpmCinKmwM8LiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlV0N1ZyZWYjqW1rPKtwDj625bVl%2FE%2F1Nf9Fwzi0NoGS5ibaDLCcXK4BokHrTj9DSWlzx4yeLlhAAe%2BkM3tqv3VNiYRdcL9sOr7jdfY16HYQgFLJxRLHFFD%2Bamc5exeAgUs%2FrQ6lT3JfyZ8Uu%2BxVKhSRGU0d2QnrY5kaxH3UYv94ojl8DZngnYUVtUsQcLLTRFaB74PUeKldVEU1CTgo40Dlr9axJFldJ0qLNnXIJBYiOJJg0kswoPXdrj0GqpASl0pvx6yJXih%2FeZr5JOKLE3edqebh2GVjiNWelu5bIeQ8uh2tYNqYhQMqjJtg9f4HwBjSPc%2BCtMnSIrRhst16ffGMAyf%2FB1gGLAM7kjBklDwlpiNx%2FNOE9h2h2hbp6yK9B%2FZrn1w2lc1J1kpYvF6tk4DaUdm18nMrxvZAIi2QByEdZcyjbBoqS4%2F2zUvId534JGyLsxA2%2FtNiA0wLmabzVFfI7Gvt0TXCy9hfMFx6AZPRUeMJmKU%2BYE7XGLxxt4lw5NpX74ye3ceE1fHCo%2B49lFZ9SYcMUtRCu9e3V72IHRJAWW%2FNfveKzGYH%2B%2FRm76Bks3MHFghGbSNMtRCWRu3TRJnd5aOUQUoYe2Fp5GTQUgferWPbPS6KrcIyrKDVFTD5beJSL7iE6UkUyLjUwr%2BOq0wY6pgG1zI6MirVcfmjlzGnGF6Wp3R6IZxevh4ostrNxmPq5V29DnZb61fnx%2B4x%2FbEh57mSexR8sTw4JqCg179Pk0AVxd5k717KE30Tv405sf%2Bl4czYW%2BqkggPZel0UC9g47pVkcP5L%2FeVn%2BJQRyjpnsM9oUFEOfW7O86LKhAXWVRcakBxE26zRRZ1ELjRi4Uf4uLwywd3RecoIPbszGskzBn4Opf9ZQNP7c&X-Amz-Signature=ae4790af5fafd8bdf32b2368b4bab6135808088505a952bb446488da9b199504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7L56KBQ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsKuTRXf3MRybLlerq1rNXpmhEn4TFMSH6I3iE5H26EAiAjWWgtwdsZRvgJoCzUOQuOW2KJX%2BNOGHpmCinKmwM8LiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlV0N1ZyZWYjqW1rPKtwDj625bVl%2FE%2F1Nf9Fwzi0NoGS5ibaDLCcXK4BokHrTj9DSWlzx4yeLlhAAe%2BkM3tqv3VNiYRdcL9sOr7jdfY16HYQgFLJxRLHFFD%2Bamc5exeAgUs%2FrQ6lT3JfyZ8Uu%2BxVKhSRGU0d2QnrY5kaxH3UYv94ojl8DZngnYUVtUsQcLLTRFaB74PUeKldVEU1CTgo40Dlr9axJFldJ0qLNnXIJBYiOJJg0kswoPXdrj0GqpASl0pvx6yJXih%2FeZr5JOKLE3edqebh2GVjiNWelu5bIeQ8uh2tYNqYhQMqjJtg9f4HwBjSPc%2BCtMnSIrRhst16ffGMAyf%2FB1gGLAM7kjBklDwlpiNx%2FNOE9h2h2hbp6yK9B%2FZrn1w2lc1J1kpYvF6tk4DaUdm18nMrxvZAIi2QByEdZcyjbBoqS4%2F2zUvId534JGyLsxA2%2FtNiA0wLmabzVFfI7Gvt0TXCy9hfMFx6AZPRUeMJmKU%2BYE7XGLxxt4lw5NpX74ye3ceE1fHCo%2B49lFZ9SYcMUtRCu9e3V72IHRJAWW%2FNfveKzGYH%2B%2FRm76Bks3MHFghGbSNMtRCWRu3TRJnd5aOUQUoYe2Fp5GTQUgferWPbPS6KrcIyrKDVFTD5beJSL7iE6UkUyLjUwr%2BOq0wY6pgG1zI6MirVcfmjlzGnGF6Wp3R6IZxevh4ostrNxmPq5V29DnZb61fnx%2B4x%2FbEh57mSexR8sTw4JqCg179Pk0AVxd5k717KE30Tv405sf%2Bl4czYW%2BqkggPZel0UC9g47pVkcP5L%2FeVn%2BJQRyjpnsM9oUFEOfW7O86LKhAXWVRcakBxE26zRRZ1ELjRi4Uf4uLwywd3RecoIPbszGskzBn4Opf9ZQNP7c&X-Amz-Signature=8b3b33f1dd3fd9ce9a02f56e19bb13c9e5cef7c7ff0b0d47ba411a19a32d96dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7L56KBQ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsKuTRXf3MRybLlerq1rNXpmhEn4TFMSH6I3iE5H26EAiAjWWgtwdsZRvgJoCzUOQuOW2KJX%2BNOGHpmCinKmwM8LiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlV0N1ZyZWYjqW1rPKtwDj625bVl%2FE%2F1Nf9Fwzi0NoGS5ibaDLCcXK4BokHrTj9DSWlzx4yeLlhAAe%2BkM3tqv3VNiYRdcL9sOr7jdfY16HYQgFLJxRLHFFD%2Bamc5exeAgUs%2FrQ6lT3JfyZ8Uu%2BxVKhSRGU0d2QnrY5kaxH3UYv94ojl8DZngnYUVtUsQcLLTRFaB74PUeKldVEU1CTgo40Dlr9axJFldJ0qLNnXIJBYiOJJg0kswoPXdrj0GqpASl0pvx6yJXih%2FeZr5JOKLE3edqebh2GVjiNWelu5bIeQ8uh2tYNqYhQMqjJtg9f4HwBjSPc%2BCtMnSIrRhst16ffGMAyf%2FB1gGLAM7kjBklDwlpiNx%2FNOE9h2h2hbp6yK9B%2FZrn1w2lc1J1kpYvF6tk4DaUdm18nMrxvZAIi2QByEdZcyjbBoqS4%2F2zUvId534JGyLsxA2%2FtNiA0wLmabzVFfI7Gvt0TXCy9hfMFx6AZPRUeMJmKU%2BYE7XGLxxt4lw5NpX74ye3ceE1fHCo%2B49lFZ9SYcMUtRCu9e3V72IHRJAWW%2FNfveKzGYH%2B%2FRm76Bks3MHFghGbSNMtRCWRu3TRJnd5aOUQUoYe2Fp5GTQUgferWPbPS6KrcIyrKDVFTD5beJSL7iE6UkUyLjUwr%2BOq0wY6pgG1zI6MirVcfmjlzGnGF6Wp3R6IZxevh4ostrNxmPq5V29DnZb61fnx%2B4x%2FbEh57mSexR8sTw4JqCg179Pk0AVxd5k717KE30Tv405sf%2Bl4czYW%2BqkggPZel0UC9g47pVkcP5L%2FeVn%2BJQRyjpnsM9oUFEOfW7O86LKhAXWVRcakBxE26zRRZ1ELjRi4Uf4uLwywd3RecoIPbszGskzBn4Opf9ZQNP7c&X-Amz-Signature=177cd51e429656f657853b58e5384fc821dc411c327c3150ddcdcbdbc24233cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7L56KBQ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsKuTRXf3MRybLlerq1rNXpmhEn4TFMSH6I3iE5H26EAiAjWWgtwdsZRvgJoCzUOQuOW2KJX%2BNOGHpmCinKmwM8LiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlV0N1ZyZWYjqW1rPKtwDj625bVl%2FE%2F1Nf9Fwzi0NoGS5ibaDLCcXK4BokHrTj9DSWlzx4yeLlhAAe%2BkM3tqv3VNiYRdcL9sOr7jdfY16HYQgFLJxRLHFFD%2Bamc5exeAgUs%2FrQ6lT3JfyZ8Uu%2BxVKhSRGU0d2QnrY5kaxH3UYv94ojl8DZngnYUVtUsQcLLTRFaB74PUeKldVEU1CTgo40Dlr9axJFldJ0qLNnXIJBYiOJJg0kswoPXdrj0GqpASl0pvx6yJXih%2FeZr5JOKLE3edqebh2GVjiNWelu5bIeQ8uh2tYNqYhQMqjJtg9f4HwBjSPc%2BCtMnSIrRhst16ffGMAyf%2FB1gGLAM7kjBklDwlpiNx%2FNOE9h2h2hbp6yK9B%2FZrn1w2lc1J1kpYvF6tk4DaUdm18nMrxvZAIi2QByEdZcyjbBoqS4%2F2zUvId534JGyLsxA2%2FtNiA0wLmabzVFfI7Gvt0TXCy9hfMFx6AZPRUeMJmKU%2BYE7XGLxxt4lw5NpX74ye3ceE1fHCo%2B49lFZ9SYcMUtRCu9e3V72IHRJAWW%2FNfveKzGYH%2B%2FRm76Bks3MHFghGbSNMtRCWRu3TRJnd5aOUQUoYe2Fp5GTQUgferWPbPS6KrcIyrKDVFTD5beJSL7iE6UkUyLjUwr%2BOq0wY6pgG1zI6MirVcfmjlzGnGF6Wp3R6IZxevh4ostrNxmPq5V29DnZb61fnx%2B4x%2FbEh57mSexR8sTw4JqCg179Pk0AVxd5k717KE30Tv405sf%2Bl4czYW%2BqkggPZel0UC9g47pVkcP5L%2FeVn%2BJQRyjpnsM9oUFEOfW7O86LKhAXWVRcakBxE26zRRZ1ELjRi4Uf4uLwywd3RecoIPbszGskzBn4Opf9ZQNP7c&X-Amz-Signature=f6db1db49e4aa0b1f236179fc56b5aa1aaf15d7c0b212199a1dd26bf76fad143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7L56KBQ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsKuTRXf3MRybLlerq1rNXpmhEn4TFMSH6I3iE5H26EAiAjWWgtwdsZRvgJoCzUOQuOW2KJX%2BNOGHpmCinKmwM8LiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlV0N1ZyZWYjqW1rPKtwDj625bVl%2FE%2F1Nf9Fwzi0NoGS5ibaDLCcXK4BokHrTj9DSWlzx4yeLlhAAe%2BkM3tqv3VNiYRdcL9sOr7jdfY16HYQgFLJxRLHFFD%2Bamc5exeAgUs%2FrQ6lT3JfyZ8Uu%2BxVKhSRGU0d2QnrY5kaxH3UYv94ojl8DZngnYUVtUsQcLLTRFaB74PUeKldVEU1CTgo40Dlr9axJFldJ0qLNnXIJBYiOJJg0kswoPXdrj0GqpASl0pvx6yJXih%2FeZr5JOKLE3edqebh2GVjiNWelu5bIeQ8uh2tYNqYhQMqjJtg9f4HwBjSPc%2BCtMnSIrRhst16ffGMAyf%2FB1gGLAM7kjBklDwlpiNx%2FNOE9h2h2hbp6yK9B%2FZrn1w2lc1J1kpYvF6tk4DaUdm18nMrxvZAIi2QByEdZcyjbBoqS4%2F2zUvId534JGyLsxA2%2FtNiA0wLmabzVFfI7Gvt0TXCy9hfMFx6AZPRUeMJmKU%2BYE7XGLxxt4lw5NpX74ye3ceE1fHCo%2B49lFZ9SYcMUtRCu9e3V72IHRJAWW%2FNfveKzGYH%2B%2FRm76Bks3MHFghGbSNMtRCWRu3TRJnd5aOUQUoYe2Fp5GTQUgferWPbPS6KrcIyrKDVFTD5beJSL7iE6UkUyLjUwr%2BOq0wY6pgG1zI6MirVcfmjlzGnGF6Wp3R6IZxevh4ostrNxmPq5V29DnZb61fnx%2B4x%2FbEh57mSexR8sTw4JqCg179Pk0AVxd5k717KE30Tv405sf%2Bl4czYW%2BqkggPZel0UC9g47pVkcP5L%2FeVn%2BJQRyjpnsM9oUFEOfW7O86LKhAXWVRcakBxE26zRRZ1ELjRi4Uf4uLwywd3RecoIPbszGskzBn4Opf9ZQNP7c&X-Amz-Signature=cb0b7af8b7ea1f6e8b5180b3cbf5da379711dbec052377eaceb2395b69769b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7L56KBQ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsKuTRXf3MRybLlerq1rNXpmhEn4TFMSH6I3iE5H26EAiAjWWgtwdsZRvgJoCzUOQuOW2KJX%2BNOGHpmCinKmwM8LiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlV0N1ZyZWYjqW1rPKtwDj625bVl%2FE%2F1Nf9Fwzi0NoGS5ibaDLCcXK4BokHrTj9DSWlzx4yeLlhAAe%2BkM3tqv3VNiYRdcL9sOr7jdfY16HYQgFLJxRLHFFD%2Bamc5exeAgUs%2FrQ6lT3JfyZ8Uu%2BxVKhSRGU0d2QnrY5kaxH3UYv94ojl8DZngnYUVtUsQcLLTRFaB74PUeKldVEU1CTgo40Dlr9axJFldJ0qLNnXIJBYiOJJg0kswoPXdrj0GqpASl0pvx6yJXih%2FeZr5JOKLE3edqebh2GVjiNWelu5bIeQ8uh2tYNqYhQMqjJtg9f4HwBjSPc%2BCtMnSIrRhst16ffGMAyf%2FB1gGLAM7kjBklDwlpiNx%2FNOE9h2h2hbp6yK9B%2FZrn1w2lc1J1kpYvF6tk4DaUdm18nMrxvZAIi2QByEdZcyjbBoqS4%2F2zUvId534JGyLsxA2%2FtNiA0wLmabzVFfI7Gvt0TXCy9hfMFx6AZPRUeMJmKU%2BYE7XGLxxt4lw5NpX74ye3ceE1fHCo%2B49lFZ9SYcMUtRCu9e3V72IHRJAWW%2FNfveKzGYH%2B%2FRm76Bks3MHFghGbSNMtRCWRu3TRJnd5aOUQUoYe2Fp5GTQUgferWPbPS6KrcIyrKDVFTD5beJSL7iE6UkUyLjUwr%2BOq0wY6pgG1zI6MirVcfmjlzGnGF6Wp3R6IZxevh4ostrNxmPq5V29DnZb61fnx%2B4x%2FbEh57mSexR8sTw4JqCg179Pk0AVxd5k717KE30Tv405sf%2Bl4czYW%2BqkggPZel0UC9g47pVkcP5L%2FeVn%2BJQRyjpnsM9oUFEOfW7O86LKhAXWVRcakBxE26zRRZ1ELjRi4Uf4uLwywd3RecoIPbszGskzBn4Opf9ZQNP7c&X-Amz-Signature=9fa6b1fa2f7a430043fa9b2e3a3bf0f9965ed8e892fe820c7eea4178d22a2422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
