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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634J5UKV4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDNy%2Bm2lbT5BaTB8NQpKemYwPJZaqX4TG5mWC4tWS9MCAiBKkFkn7Ebw77QkKfzJsMFbJ8bWVMFbuoEBCBLDMueYiCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMRj9rhRfftAvh2osrKtwDchSWgPR7WnUUcaFJ5Mp1YPn62lLF0j4vqjnkKBMO20OB2VlVfvhiwT4ssqhp4Zw9pHtGKJjmYPDYtZ%2BIscF4QGCCnvnrnUBt%2Fr%2BdQTpoxajjQn%2BypDVDVzMNsy20xRvJm1sqvamlFlednGfP3vaL92ypHj%2Byo5zjKzZNLLgAJF6AujV1VhZfBo%2FXXmrPhtHOaP%2BSd7U9Tx7H8r%2FhZqvM%2BzklXG7ytztDnYd17X8vqS0RxcEzmXaJrV8JxGjFQsHf%2F31xcZYcXGgnKav8lv7XAm6gPwOJa1cCAdvTpmdWbqYWychCEU3RtG5%2BjMIYL3%2FEpkwV3Cg6pymNCqcBC2GGoSqjDuq5qBmAM0Av2fRL0fB4DZk6YDZyENyZAaV7ixKGzdQ5eFBrwk90iHokewU7GlDtg4iMs66fOh%2BMLpKJ2xHQRlEpxYmKNdPHP5xECdFPpoDu3bIkqGb8fnXig0PSkGPCsh9EL3jsH0aWRXVAhVLxQnEo4TIizcVN%2BWmzn1bM37SuFP2ZelnwO4BvZRocZyBKeT46%2BzuIAq96z3ciZpEqqXS%2Bwc5HKXnnYlkRjtwqp%2ByvdK5e%2BcTC3Gh69B%2B0BayXp5MrPjMo%2BHsfQS5YkjE7KIlRu4mV82%2BzEKwwmLPGxAY6pgF3c%2BEP4QvLjc5etM3iupTsHQ8n384iidvdIIdtMKCJpUfwff8Fm522Fgo6UhikHmBJyutIvR1zTt2uBoB3%2B%2FOXigGAXUuzEBR8rWKsuwEXcLCRVgGdJ7gJwbef6DJLHtJ%2B4mnIUrITI0Zl%2FbLTdcJiHmK6aRXX86oTht1DmVAZIrMVd2Qdm4DqAqk%2FKxHhIfimSejDxppI%2F490b%2Bb6WO1JJcJ09Pmk&X-Amz-Signature=632f072539168e72f05367c736e58fc137e5caec86b954c82506a23bb5c8ca53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634J5UKV4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDNy%2Bm2lbT5BaTB8NQpKemYwPJZaqX4TG5mWC4tWS9MCAiBKkFkn7Ebw77QkKfzJsMFbJ8bWVMFbuoEBCBLDMueYiCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMRj9rhRfftAvh2osrKtwDchSWgPR7WnUUcaFJ5Mp1YPn62lLF0j4vqjnkKBMO20OB2VlVfvhiwT4ssqhp4Zw9pHtGKJjmYPDYtZ%2BIscF4QGCCnvnrnUBt%2Fr%2BdQTpoxajjQn%2BypDVDVzMNsy20xRvJm1sqvamlFlednGfP3vaL92ypHj%2Byo5zjKzZNLLgAJF6AujV1VhZfBo%2FXXmrPhtHOaP%2BSd7U9Tx7H8r%2FhZqvM%2BzklXG7ytztDnYd17X8vqS0RxcEzmXaJrV8JxGjFQsHf%2F31xcZYcXGgnKav8lv7XAm6gPwOJa1cCAdvTpmdWbqYWychCEU3RtG5%2BjMIYL3%2FEpkwV3Cg6pymNCqcBC2GGoSqjDuq5qBmAM0Av2fRL0fB4DZk6YDZyENyZAaV7ixKGzdQ5eFBrwk90iHokewU7GlDtg4iMs66fOh%2BMLpKJ2xHQRlEpxYmKNdPHP5xECdFPpoDu3bIkqGb8fnXig0PSkGPCsh9EL3jsH0aWRXVAhVLxQnEo4TIizcVN%2BWmzn1bM37SuFP2ZelnwO4BvZRocZyBKeT46%2BzuIAq96z3ciZpEqqXS%2Bwc5HKXnnYlkRjtwqp%2ByvdK5e%2BcTC3Gh69B%2B0BayXp5MrPjMo%2BHsfQS5YkjE7KIlRu4mV82%2BzEKwwmLPGxAY6pgF3c%2BEP4QvLjc5etM3iupTsHQ8n384iidvdIIdtMKCJpUfwff8Fm522Fgo6UhikHmBJyutIvR1zTt2uBoB3%2B%2FOXigGAXUuzEBR8rWKsuwEXcLCRVgGdJ7gJwbef6DJLHtJ%2B4mnIUrITI0Zl%2FbLTdcJiHmK6aRXX86oTht1DmVAZIrMVd2Qdm4DqAqk%2FKxHhIfimSejDxppI%2F490b%2Bb6WO1JJcJ09Pmk&X-Amz-Signature=7ce28ec93dbe26104f817b0c05161e4cad49256db0067ddef40c22e274345f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634J5UKV4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDNy%2Bm2lbT5BaTB8NQpKemYwPJZaqX4TG5mWC4tWS9MCAiBKkFkn7Ebw77QkKfzJsMFbJ8bWVMFbuoEBCBLDMueYiCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMRj9rhRfftAvh2osrKtwDchSWgPR7WnUUcaFJ5Mp1YPn62lLF0j4vqjnkKBMO20OB2VlVfvhiwT4ssqhp4Zw9pHtGKJjmYPDYtZ%2BIscF4QGCCnvnrnUBt%2Fr%2BdQTpoxajjQn%2BypDVDVzMNsy20xRvJm1sqvamlFlednGfP3vaL92ypHj%2Byo5zjKzZNLLgAJF6AujV1VhZfBo%2FXXmrPhtHOaP%2BSd7U9Tx7H8r%2FhZqvM%2BzklXG7ytztDnYd17X8vqS0RxcEzmXaJrV8JxGjFQsHf%2F31xcZYcXGgnKav8lv7XAm6gPwOJa1cCAdvTpmdWbqYWychCEU3RtG5%2BjMIYL3%2FEpkwV3Cg6pymNCqcBC2GGoSqjDuq5qBmAM0Av2fRL0fB4DZk6YDZyENyZAaV7ixKGzdQ5eFBrwk90iHokewU7GlDtg4iMs66fOh%2BMLpKJ2xHQRlEpxYmKNdPHP5xECdFPpoDu3bIkqGb8fnXig0PSkGPCsh9EL3jsH0aWRXVAhVLxQnEo4TIizcVN%2BWmzn1bM37SuFP2ZelnwO4BvZRocZyBKeT46%2BzuIAq96z3ciZpEqqXS%2Bwc5HKXnnYlkRjtwqp%2ByvdK5e%2BcTC3Gh69B%2B0BayXp5MrPjMo%2BHsfQS5YkjE7KIlRu4mV82%2BzEKwwmLPGxAY6pgF3c%2BEP4QvLjc5etM3iupTsHQ8n384iidvdIIdtMKCJpUfwff8Fm522Fgo6UhikHmBJyutIvR1zTt2uBoB3%2B%2FOXigGAXUuzEBR8rWKsuwEXcLCRVgGdJ7gJwbef6DJLHtJ%2B4mnIUrITI0Zl%2FbLTdcJiHmK6aRXX86oTht1DmVAZIrMVd2Qdm4DqAqk%2FKxHhIfimSejDxppI%2F490b%2Bb6WO1JJcJ09Pmk&X-Amz-Signature=4a25c5b8edec5a841f3fc7e4485091ba521469cea547d4a1283887b362300739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634J5UKV4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDNy%2Bm2lbT5BaTB8NQpKemYwPJZaqX4TG5mWC4tWS9MCAiBKkFkn7Ebw77QkKfzJsMFbJ8bWVMFbuoEBCBLDMueYiCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMRj9rhRfftAvh2osrKtwDchSWgPR7WnUUcaFJ5Mp1YPn62lLF0j4vqjnkKBMO20OB2VlVfvhiwT4ssqhp4Zw9pHtGKJjmYPDYtZ%2BIscF4QGCCnvnrnUBt%2Fr%2BdQTpoxajjQn%2BypDVDVzMNsy20xRvJm1sqvamlFlednGfP3vaL92ypHj%2Byo5zjKzZNLLgAJF6AujV1VhZfBo%2FXXmrPhtHOaP%2BSd7U9Tx7H8r%2FhZqvM%2BzklXG7ytztDnYd17X8vqS0RxcEzmXaJrV8JxGjFQsHf%2F31xcZYcXGgnKav8lv7XAm6gPwOJa1cCAdvTpmdWbqYWychCEU3RtG5%2BjMIYL3%2FEpkwV3Cg6pymNCqcBC2GGoSqjDuq5qBmAM0Av2fRL0fB4DZk6YDZyENyZAaV7ixKGzdQ5eFBrwk90iHokewU7GlDtg4iMs66fOh%2BMLpKJ2xHQRlEpxYmKNdPHP5xECdFPpoDu3bIkqGb8fnXig0PSkGPCsh9EL3jsH0aWRXVAhVLxQnEo4TIizcVN%2BWmzn1bM37SuFP2ZelnwO4BvZRocZyBKeT46%2BzuIAq96z3ciZpEqqXS%2Bwc5HKXnnYlkRjtwqp%2ByvdK5e%2BcTC3Gh69B%2B0BayXp5MrPjMo%2BHsfQS5YkjE7KIlRu4mV82%2BzEKwwmLPGxAY6pgF3c%2BEP4QvLjc5etM3iupTsHQ8n384iidvdIIdtMKCJpUfwff8Fm522Fgo6UhikHmBJyutIvR1zTt2uBoB3%2B%2FOXigGAXUuzEBR8rWKsuwEXcLCRVgGdJ7gJwbef6DJLHtJ%2B4mnIUrITI0Zl%2FbLTdcJiHmK6aRXX86oTht1DmVAZIrMVd2Qdm4DqAqk%2FKxHhIfimSejDxppI%2F490b%2Bb6WO1JJcJ09Pmk&X-Amz-Signature=b09d0f9b3cea8deba9d5bbb935437820e152e745914b1e3b1d9fdb0a52aa4e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634J5UKV4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDNy%2Bm2lbT5BaTB8NQpKemYwPJZaqX4TG5mWC4tWS9MCAiBKkFkn7Ebw77QkKfzJsMFbJ8bWVMFbuoEBCBLDMueYiCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMRj9rhRfftAvh2osrKtwDchSWgPR7WnUUcaFJ5Mp1YPn62lLF0j4vqjnkKBMO20OB2VlVfvhiwT4ssqhp4Zw9pHtGKJjmYPDYtZ%2BIscF4QGCCnvnrnUBt%2Fr%2BdQTpoxajjQn%2BypDVDVzMNsy20xRvJm1sqvamlFlednGfP3vaL92ypHj%2Byo5zjKzZNLLgAJF6AujV1VhZfBo%2FXXmrPhtHOaP%2BSd7U9Tx7H8r%2FhZqvM%2BzklXG7ytztDnYd17X8vqS0RxcEzmXaJrV8JxGjFQsHf%2F31xcZYcXGgnKav8lv7XAm6gPwOJa1cCAdvTpmdWbqYWychCEU3RtG5%2BjMIYL3%2FEpkwV3Cg6pymNCqcBC2GGoSqjDuq5qBmAM0Av2fRL0fB4DZk6YDZyENyZAaV7ixKGzdQ5eFBrwk90iHokewU7GlDtg4iMs66fOh%2BMLpKJ2xHQRlEpxYmKNdPHP5xECdFPpoDu3bIkqGb8fnXig0PSkGPCsh9EL3jsH0aWRXVAhVLxQnEo4TIizcVN%2BWmzn1bM37SuFP2ZelnwO4BvZRocZyBKeT46%2BzuIAq96z3ciZpEqqXS%2Bwc5HKXnnYlkRjtwqp%2ByvdK5e%2BcTC3Gh69B%2B0BayXp5MrPjMo%2BHsfQS5YkjE7KIlRu4mV82%2BzEKwwmLPGxAY6pgF3c%2BEP4QvLjc5etM3iupTsHQ8n384iidvdIIdtMKCJpUfwff8Fm522Fgo6UhikHmBJyutIvR1zTt2uBoB3%2B%2FOXigGAXUuzEBR8rWKsuwEXcLCRVgGdJ7gJwbef6DJLHtJ%2B4mnIUrITI0Zl%2FbLTdcJiHmK6aRXX86oTht1DmVAZIrMVd2Qdm4DqAqk%2FKxHhIfimSejDxppI%2F490b%2Bb6WO1JJcJ09Pmk&X-Amz-Signature=173d1a742a6100b7453522e556f4069605651318b880c126e6e5a02818062eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634J5UKV4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDNy%2Bm2lbT5BaTB8NQpKemYwPJZaqX4TG5mWC4tWS9MCAiBKkFkn7Ebw77QkKfzJsMFbJ8bWVMFbuoEBCBLDMueYiCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMRj9rhRfftAvh2osrKtwDchSWgPR7WnUUcaFJ5Mp1YPn62lLF0j4vqjnkKBMO20OB2VlVfvhiwT4ssqhp4Zw9pHtGKJjmYPDYtZ%2BIscF4QGCCnvnrnUBt%2Fr%2BdQTpoxajjQn%2BypDVDVzMNsy20xRvJm1sqvamlFlednGfP3vaL92ypHj%2Byo5zjKzZNLLgAJF6AujV1VhZfBo%2FXXmrPhtHOaP%2BSd7U9Tx7H8r%2FhZqvM%2BzklXG7ytztDnYd17X8vqS0RxcEzmXaJrV8JxGjFQsHf%2F31xcZYcXGgnKav8lv7XAm6gPwOJa1cCAdvTpmdWbqYWychCEU3RtG5%2BjMIYL3%2FEpkwV3Cg6pymNCqcBC2GGoSqjDuq5qBmAM0Av2fRL0fB4DZk6YDZyENyZAaV7ixKGzdQ5eFBrwk90iHokewU7GlDtg4iMs66fOh%2BMLpKJ2xHQRlEpxYmKNdPHP5xECdFPpoDu3bIkqGb8fnXig0PSkGPCsh9EL3jsH0aWRXVAhVLxQnEo4TIizcVN%2BWmzn1bM37SuFP2ZelnwO4BvZRocZyBKeT46%2BzuIAq96z3ciZpEqqXS%2Bwc5HKXnnYlkRjtwqp%2ByvdK5e%2BcTC3Gh69B%2B0BayXp5MrPjMo%2BHsfQS5YkjE7KIlRu4mV82%2BzEKwwmLPGxAY6pgF3c%2BEP4QvLjc5etM3iupTsHQ8n384iidvdIIdtMKCJpUfwff8Fm522Fgo6UhikHmBJyutIvR1zTt2uBoB3%2B%2FOXigGAXUuzEBR8rWKsuwEXcLCRVgGdJ7gJwbef6DJLHtJ%2B4mnIUrITI0Zl%2FbLTdcJiHmK6aRXX86oTht1DmVAZIrMVd2Qdm4DqAqk%2FKxHhIfimSejDxppI%2F490b%2Bb6WO1JJcJ09Pmk&X-Amz-Signature=b7f02ccff3aa42a70aa9eb5ce3af37ab3ec0c06036c2c10dcd48138096bf268c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634J5UKV4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDNy%2Bm2lbT5BaTB8NQpKemYwPJZaqX4TG5mWC4tWS9MCAiBKkFkn7Ebw77QkKfzJsMFbJ8bWVMFbuoEBCBLDMueYiCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMRj9rhRfftAvh2osrKtwDchSWgPR7WnUUcaFJ5Mp1YPn62lLF0j4vqjnkKBMO20OB2VlVfvhiwT4ssqhp4Zw9pHtGKJjmYPDYtZ%2BIscF4QGCCnvnrnUBt%2Fr%2BdQTpoxajjQn%2BypDVDVzMNsy20xRvJm1sqvamlFlednGfP3vaL92ypHj%2Byo5zjKzZNLLgAJF6AujV1VhZfBo%2FXXmrPhtHOaP%2BSd7U9Tx7H8r%2FhZqvM%2BzklXG7ytztDnYd17X8vqS0RxcEzmXaJrV8JxGjFQsHf%2F31xcZYcXGgnKav8lv7XAm6gPwOJa1cCAdvTpmdWbqYWychCEU3RtG5%2BjMIYL3%2FEpkwV3Cg6pymNCqcBC2GGoSqjDuq5qBmAM0Av2fRL0fB4DZk6YDZyENyZAaV7ixKGzdQ5eFBrwk90iHokewU7GlDtg4iMs66fOh%2BMLpKJ2xHQRlEpxYmKNdPHP5xECdFPpoDu3bIkqGb8fnXig0PSkGPCsh9EL3jsH0aWRXVAhVLxQnEo4TIizcVN%2BWmzn1bM37SuFP2ZelnwO4BvZRocZyBKeT46%2BzuIAq96z3ciZpEqqXS%2Bwc5HKXnnYlkRjtwqp%2ByvdK5e%2BcTC3Gh69B%2B0BayXp5MrPjMo%2BHsfQS5YkjE7KIlRu4mV82%2BzEKwwmLPGxAY6pgF3c%2BEP4QvLjc5etM3iupTsHQ8n384iidvdIIdtMKCJpUfwff8Fm522Fgo6UhikHmBJyutIvR1zTt2uBoB3%2B%2FOXigGAXUuzEBR8rWKsuwEXcLCRVgGdJ7gJwbef6DJLHtJ%2B4mnIUrITI0Zl%2FbLTdcJiHmK6aRXX86oTht1DmVAZIrMVd2Qdm4DqAqk%2FKxHhIfimSejDxppI%2F490b%2Bb6WO1JJcJ09Pmk&X-Amz-Signature=cddff400f49b6f131b5b0614a10d273de3e56ca1d71af4aa7083c78c7180122d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634J5UKV4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDNy%2Bm2lbT5BaTB8NQpKemYwPJZaqX4TG5mWC4tWS9MCAiBKkFkn7Ebw77QkKfzJsMFbJ8bWVMFbuoEBCBLDMueYiCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMRj9rhRfftAvh2osrKtwDchSWgPR7WnUUcaFJ5Mp1YPn62lLF0j4vqjnkKBMO20OB2VlVfvhiwT4ssqhp4Zw9pHtGKJjmYPDYtZ%2BIscF4QGCCnvnrnUBt%2Fr%2BdQTpoxajjQn%2BypDVDVzMNsy20xRvJm1sqvamlFlednGfP3vaL92ypHj%2Byo5zjKzZNLLgAJF6AujV1VhZfBo%2FXXmrPhtHOaP%2BSd7U9Tx7H8r%2FhZqvM%2BzklXG7ytztDnYd17X8vqS0RxcEzmXaJrV8JxGjFQsHf%2F31xcZYcXGgnKav8lv7XAm6gPwOJa1cCAdvTpmdWbqYWychCEU3RtG5%2BjMIYL3%2FEpkwV3Cg6pymNCqcBC2GGoSqjDuq5qBmAM0Av2fRL0fB4DZk6YDZyENyZAaV7ixKGzdQ5eFBrwk90iHokewU7GlDtg4iMs66fOh%2BMLpKJ2xHQRlEpxYmKNdPHP5xECdFPpoDu3bIkqGb8fnXig0PSkGPCsh9EL3jsH0aWRXVAhVLxQnEo4TIizcVN%2BWmzn1bM37SuFP2ZelnwO4BvZRocZyBKeT46%2BzuIAq96z3ciZpEqqXS%2Bwc5HKXnnYlkRjtwqp%2ByvdK5e%2BcTC3Gh69B%2B0BayXp5MrPjMo%2BHsfQS5YkjE7KIlRu4mV82%2BzEKwwmLPGxAY6pgF3c%2BEP4QvLjc5etM3iupTsHQ8n384iidvdIIdtMKCJpUfwff8Fm522Fgo6UhikHmBJyutIvR1zTt2uBoB3%2B%2FOXigGAXUuzEBR8rWKsuwEXcLCRVgGdJ7gJwbef6DJLHtJ%2B4mnIUrITI0Zl%2FbLTdcJiHmK6aRXX86oTht1DmVAZIrMVd2Qdm4DqAqk%2FKxHhIfimSejDxppI%2F490b%2Bb6WO1JJcJ09Pmk&X-Amz-Signature=38d44d357b52f6fa355d177b0e85d0634ea179841d26b6e5ba6089fc6d0200f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634J5UKV4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDNy%2Bm2lbT5BaTB8NQpKemYwPJZaqX4TG5mWC4tWS9MCAiBKkFkn7Ebw77QkKfzJsMFbJ8bWVMFbuoEBCBLDMueYiCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMRj9rhRfftAvh2osrKtwDchSWgPR7WnUUcaFJ5Mp1YPn62lLF0j4vqjnkKBMO20OB2VlVfvhiwT4ssqhp4Zw9pHtGKJjmYPDYtZ%2BIscF4QGCCnvnrnUBt%2Fr%2BdQTpoxajjQn%2BypDVDVzMNsy20xRvJm1sqvamlFlednGfP3vaL92ypHj%2Byo5zjKzZNLLgAJF6AujV1VhZfBo%2FXXmrPhtHOaP%2BSd7U9Tx7H8r%2FhZqvM%2BzklXG7ytztDnYd17X8vqS0RxcEzmXaJrV8JxGjFQsHf%2F31xcZYcXGgnKav8lv7XAm6gPwOJa1cCAdvTpmdWbqYWychCEU3RtG5%2BjMIYL3%2FEpkwV3Cg6pymNCqcBC2GGoSqjDuq5qBmAM0Av2fRL0fB4DZk6YDZyENyZAaV7ixKGzdQ5eFBrwk90iHokewU7GlDtg4iMs66fOh%2BMLpKJ2xHQRlEpxYmKNdPHP5xECdFPpoDu3bIkqGb8fnXig0PSkGPCsh9EL3jsH0aWRXVAhVLxQnEo4TIizcVN%2BWmzn1bM37SuFP2ZelnwO4BvZRocZyBKeT46%2BzuIAq96z3ciZpEqqXS%2Bwc5HKXnnYlkRjtwqp%2ByvdK5e%2BcTC3Gh69B%2B0BayXp5MrPjMo%2BHsfQS5YkjE7KIlRu4mV82%2BzEKwwmLPGxAY6pgF3c%2BEP4QvLjc5etM3iupTsHQ8n384iidvdIIdtMKCJpUfwff8Fm522Fgo6UhikHmBJyutIvR1zTt2uBoB3%2B%2FOXigGAXUuzEBR8rWKsuwEXcLCRVgGdJ7gJwbef6DJLHtJ%2B4mnIUrITI0Zl%2FbLTdcJiHmK6aRXX86oTht1DmVAZIrMVd2Qdm4DqAqk%2FKxHhIfimSejDxppI%2F490b%2Bb6WO1JJcJ09Pmk&X-Amz-Signature=b02057d89a40fdc31a3947d882a0859c4b69d9b493adc61233c58c5f73d41ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634J5UKV4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDNy%2Bm2lbT5BaTB8NQpKemYwPJZaqX4TG5mWC4tWS9MCAiBKkFkn7Ebw77QkKfzJsMFbJ8bWVMFbuoEBCBLDMueYiCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMRj9rhRfftAvh2osrKtwDchSWgPR7WnUUcaFJ5Mp1YPn62lLF0j4vqjnkKBMO20OB2VlVfvhiwT4ssqhp4Zw9pHtGKJjmYPDYtZ%2BIscF4QGCCnvnrnUBt%2Fr%2BdQTpoxajjQn%2BypDVDVzMNsy20xRvJm1sqvamlFlednGfP3vaL92ypHj%2Byo5zjKzZNLLgAJF6AujV1VhZfBo%2FXXmrPhtHOaP%2BSd7U9Tx7H8r%2FhZqvM%2BzklXG7ytztDnYd17X8vqS0RxcEzmXaJrV8JxGjFQsHf%2F31xcZYcXGgnKav8lv7XAm6gPwOJa1cCAdvTpmdWbqYWychCEU3RtG5%2BjMIYL3%2FEpkwV3Cg6pymNCqcBC2GGoSqjDuq5qBmAM0Av2fRL0fB4DZk6YDZyENyZAaV7ixKGzdQ5eFBrwk90iHokewU7GlDtg4iMs66fOh%2BMLpKJ2xHQRlEpxYmKNdPHP5xECdFPpoDu3bIkqGb8fnXig0PSkGPCsh9EL3jsH0aWRXVAhVLxQnEo4TIizcVN%2BWmzn1bM37SuFP2ZelnwO4BvZRocZyBKeT46%2BzuIAq96z3ciZpEqqXS%2Bwc5HKXnnYlkRjtwqp%2ByvdK5e%2BcTC3Gh69B%2B0BayXp5MrPjMo%2BHsfQS5YkjE7KIlRu4mV82%2BzEKwwmLPGxAY6pgF3c%2BEP4QvLjc5etM3iupTsHQ8n384iidvdIIdtMKCJpUfwff8Fm522Fgo6UhikHmBJyutIvR1zTt2uBoB3%2B%2FOXigGAXUuzEBR8rWKsuwEXcLCRVgGdJ7gJwbef6DJLHtJ%2B4mnIUrITI0Zl%2FbLTdcJiHmK6aRXX86oTht1DmVAZIrMVd2Qdm4DqAqk%2FKxHhIfimSejDxppI%2F490b%2Bb6WO1JJcJ09Pmk&X-Amz-Signature=c19c47719b854e6627a735c213276044390f04b69cb0fbf56f5b7e27f250d658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634J5UKV4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDNy%2Bm2lbT5BaTB8NQpKemYwPJZaqX4TG5mWC4tWS9MCAiBKkFkn7Ebw77QkKfzJsMFbJ8bWVMFbuoEBCBLDMueYiCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMRj9rhRfftAvh2osrKtwDchSWgPR7WnUUcaFJ5Mp1YPn62lLF0j4vqjnkKBMO20OB2VlVfvhiwT4ssqhp4Zw9pHtGKJjmYPDYtZ%2BIscF4QGCCnvnrnUBt%2Fr%2BdQTpoxajjQn%2BypDVDVzMNsy20xRvJm1sqvamlFlednGfP3vaL92ypHj%2Byo5zjKzZNLLgAJF6AujV1VhZfBo%2FXXmrPhtHOaP%2BSd7U9Tx7H8r%2FhZqvM%2BzklXG7ytztDnYd17X8vqS0RxcEzmXaJrV8JxGjFQsHf%2F31xcZYcXGgnKav8lv7XAm6gPwOJa1cCAdvTpmdWbqYWychCEU3RtG5%2BjMIYL3%2FEpkwV3Cg6pymNCqcBC2GGoSqjDuq5qBmAM0Av2fRL0fB4DZk6YDZyENyZAaV7ixKGzdQ5eFBrwk90iHokewU7GlDtg4iMs66fOh%2BMLpKJ2xHQRlEpxYmKNdPHP5xECdFPpoDu3bIkqGb8fnXig0PSkGPCsh9EL3jsH0aWRXVAhVLxQnEo4TIizcVN%2BWmzn1bM37SuFP2ZelnwO4BvZRocZyBKeT46%2BzuIAq96z3ciZpEqqXS%2Bwc5HKXnnYlkRjtwqp%2ByvdK5e%2BcTC3Gh69B%2B0BayXp5MrPjMo%2BHsfQS5YkjE7KIlRu4mV82%2BzEKwwmLPGxAY6pgF3c%2BEP4QvLjc5etM3iupTsHQ8n384iidvdIIdtMKCJpUfwff8Fm522Fgo6UhikHmBJyutIvR1zTt2uBoB3%2B%2FOXigGAXUuzEBR8rWKsuwEXcLCRVgGdJ7gJwbef6DJLHtJ%2B4mnIUrITI0Zl%2FbLTdcJiHmK6aRXX86oTht1DmVAZIrMVd2Qdm4DqAqk%2FKxHhIfimSejDxppI%2F490b%2Bb6WO1JJcJ09Pmk&X-Amz-Signature=4dbf80cc287837eb744dd6398195f26af3937600b1a3e9740a6da5bbd0144ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634J5UKV4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDNy%2Bm2lbT5BaTB8NQpKemYwPJZaqX4TG5mWC4tWS9MCAiBKkFkn7Ebw77QkKfzJsMFbJ8bWVMFbuoEBCBLDMueYiCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMRj9rhRfftAvh2osrKtwDchSWgPR7WnUUcaFJ5Mp1YPn62lLF0j4vqjnkKBMO20OB2VlVfvhiwT4ssqhp4Zw9pHtGKJjmYPDYtZ%2BIscF4QGCCnvnrnUBt%2Fr%2BdQTpoxajjQn%2BypDVDVzMNsy20xRvJm1sqvamlFlednGfP3vaL92ypHj%2Byo5zjKzZNLLgAJF6AujV1VhZfBo%2FXXmrPhtHOaP%2BSd7U9Tx7H8r%2FhZqvM%2BzklXG7ytztDnYd17X8vqS0RxcEzmXaJrV8JxGjFQsHf%2F31xcZYcXGgnKav8lv7XAm6gPwOJa1cCAdvTpmdWbqYWychCEU3RtG5%2BjMIYL3%2FEpkwV3Cg6pymNCqcBC2GGoSqjDuq5qBmAM0Av2fRL0fB4DZk6YDZyENyZAaV7ixKGzdQ5eFBrwk90iHokewU7GlDtg4iMs66fOh%2BMLpKJ2xHQRlEpxYmKNdPHP5xECdFPpoDu3bIkqGb8fnXig0PSkGPCsh9EL3jsH0aWRXVAhVLxQnEo4TIizcVN%2BWmzn1bM37SuFP2ZelnwO4BvZRocZyBKeT46%2BzuIAq96z3ciZpEqqXS%2Bwc5HKXnnYlkRjtwqp%2ByvdK5e%2BcTC3Gh69B%2B0BayXp5MrPjMo%2BHsfQS5YkjE7KIlRu4mV82%2BzEKwwmLPGxAY6pgF3c%2BEP4QvLjc5etM3iupTsHQ8n384iidvdIIdtMKCJpUfwff8Fm522Fgo6UhikHmBJyutIvR1zTt2uBoB3%2B%2FOXigGAXUuzEBR8rWKsuwEXcLCRVgGdJ7gJwbef6DJLHtJ%2B4mnIUrITI0Zl%2FbLTdcJiHmK6aRXX86oTht1DmVAZIrMVd2Qdm4DqAqk%2FKxHhIfimSejDxppI%2F490b%2Bb6WO1JJcJ09Pmk&X-Amz-Signature=a91228fab1e2186386ce7c5aec8c22d39b3aec5639bb8a5fc6e43b9ea68c7069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634J5UKV4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDNy%2Bm2lbT5BaTB8NQpKemYwPJZaqX4TG5mWC4tWS9MCAiBKkFkn7Ebw77QkKfzJsMFbJ8bWVMFbuoEBCBLDMueYiCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMRj9rhRfftAvh2osrKtwDchSWgPR7WnUUcaFJ5Mp1YPn62lLF0j4vqjnkKBMO20OB2VlVfvhiwT4ssqhp4Zw9pHtGKJjmYPDYtZ%2BIscF4QGCCnvnrnUBt%2Fr%2BdQTpoxajjQn%2BypDVDVzMNsy20xRvJm1sqvamlFlednGfP3vaL92ypHj%2Byo5zjKzZNLLgAJF6AujV1VhZfBo%2FXXmrPhtHOaP%2BSd7U9Tx7H8r%2FhZqvM%2BzklXG7ytztDnYd17X8vqS0RxcEzmXaJrV8JxGjFQsHf%2F31xcZYcXGgnKav8lv7XAm6gPwOJa1cCAdvTpmdWbqYWychCEU3RtG5%2BjMIYL3%2FEpkwV3Cg6pymNCqcBC2GGoSqjDuq5qBmAM0Av2fRL0fB4DZk6YDZyENyZAaV7ixKGzdQ5eFBrwk90iHokewU7GlDtg4iMs66fOh%2BMLpKJ2xHQRlEpxYmKNdPHP5xECdFPpoDu3bIkqGb8fnXig0PSkGPCsh9EL3jsH0aWRXVAhVLxQnEo4TIizcVN%2BWmzn1bM37SuFP2ZelnwO4BvZRocZyBKeT46%2BzuIAq96z3ciZpEqqXS%2Bwc5HKXnnYlkRjtwqp%2ByvdK5e%2BcTC3Gh69B%2B0BayXp5MrPjMo%2BHsfQS5YkjE7KIlRu4mV82%2BzEKwwmLPGxAY6pgF3c%2BEP4QvLjc5etM3iupTsHQ8n384iidvdIIdtMKCJpUfwff8Fm522Fgo6UhikHmBJyutIvR1zTt2uBoB3%2B%2FOXigGAXUuzEBR8rWKsuwEXcLCRVgGdJ7gJwbef6DJLHtJ%2B4mnIUrITI0Zl%2FbLTdcJiHmK6aRXX86oTht1DmVAZIrMVd2Qdm4DqAqk%2FKxHhIfimSejDxppI%2F490b%2Bb6WO1JJcJ09Pmk&X-Amz-Signature=777d33bce3e1c9805381d7e01584cb654d2b82cc63b666656746bbad4aa28544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
