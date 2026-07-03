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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5UCDQF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICvN0Zkgu1VhJfPE7GwvwBwqaSsp6tUY8jE3cWUGzE1WAiEA11itzxYaJITwpiiKJOTApGpjfkCVcpVYggMfupAOLGkq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDCy%2FhtGmYve%2FHKqZBSrcA1w2fOP8fbvGsupNKRKrzMLugXcOBN7p4CUSMh2608rADKrb56p30lXKlw%2Fo6nr%2BJYOrw6kCFdUm3E1CvTY0xXQ9YNnA9iBHjA3rhhBw6Ia8TZ3vJRxljSQOfguxprBrcX0GqUfBf8Md55v8smLJVpwWyzUKE4QcLK5E1LXvil%2B8lgrRgsDVclr%2F6GNjqJxSjDoU%2BY8Z4B5LUzylYQ8v4iCWgkaRpszf53i4baslLDnrWp805vvrLYhpA8qpMzZc27zlsiYqN4mfq8zR26A1P42GRsl71LnBFYdtLgYR%2B%2FaH0r%2BOhksGkO5TIWg%2F29xPYQKJtxS%2BqndjdWgJta61aFzWcnTQLJmPx%2BKYIeOv%2BsPRqEwEy637RVbadwN6QsN%2BYDOQJTC3bzkLHIRzuu%2FR0I8TaNpQSMaLLHEKdcf7CWgAwSfeIRjZXzm2whEtrbNvhWQ9LCb1M0M9nAuKbVfn4DDAV0DWGYnY8ffNSveePMz943vkIzhAPfMRlwryN386jV0WQitrtrklhBktJb56Rx2zLWbyNLV5%2F1tGUCZqvwc1c89KIVN8DTuqzHThh4ihbAVPldKE290wGjRns6EKPsYsCm5QgZYu0BJAxAxhUnHIjKLRRUogu9xbrrGOMM%2B5nNIGOqUB8DX%2FNj%2BCT0VMKRX6hhRoDOZUrUVB5Qq8D0%2FqYJccEoesOh9k%2F54ym%2FUxOsY%2BSDhx8XB19oPatOzpGwOsulPx%2BjbjjRe7s264qOOrnYp%2F4lxCpWehyOBLZ%2BIpsNVLb1muytknig5kLpOb%2BCq5JgGJf8V7FiCSSC%2F4kmN2dhZMwAf14GoilPmsg6ClvoFbGI1tXBPXNpDuqJlcG1zzckkPuqg7SFRq&X-Amz-Signature=a7e59933b5fc71e1cd972e664695ca56f4f006a6348c0a86d829c75b9a5b1239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5UCDQF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICvN0Zkgu1VhJfPE7GwvwBwqaSsp6tUY8jE3cWUGzE1WAiEA11itzxYaJITwpiiKJOTApGpjfkCVcpVYggMfupAOLGkq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDCy%2FhtGmYve%2FHKqZBSrcA1w2fOP8fbvGsupNKRKrzMLugXcOBN7p4CUSMh2608rADKrb56p30lXKlw%2Fo6nr%2BJYOrw6kCFdUm3E1CvTY0xXQ9YNnA9iBHjA3rhhBw6Ia8TZ3vJRxljSQOfguxprBrcX0GqUfBf8Md55v8smLJVpwWyzUKE4QcLK5E1LXvil%2B8lgrRgsDVclr%2F6GNjqJxSjDoU%2BY8Z4B5LUzylYQ8v4iCWgkaRpszf53i4baslLDnrWp805vvrLYhpA8qpMzZc27zlsiYqN4mfq8zR26A1P42GRsl71LnBFYdtLgYR%2B%2FaH0r%2BOhksGkO5TIWg%2F29xPYQKJtxS%2BqndjdWgJta61aFzWcnTQLJmPx%2BKYIeOv%2BsPRqEwEy637RVbadwN6QsN%2BYDOQJTC3bzkLHIRzuu%2FR0I8TaNpQSMaLLHEKdcf7CWgAwSfeIRjZXzm2whEtrbNvhWQ9LCb1M0M9nAuKbVfn4DDAV0DWGYnY8ffNSveePMz943vkIzhAPfMRlwryN386jV0WQitrtrklhBktJb56Rx2zLWbyNLV5%2F1tGUCZqvwc1c89KIVN8DTuqzHThh4ihbAVPldKE290wGjRns6EKPsYsCm5QgZYu0BJAxAxhUnHIjKLRRUogu9xbrrGOMM%2B5nNIGOqUB8DX%2FNj%2BCT0VMKRX6hhRoDOZUrUVB5Qq8D0%2FqYJccEoesOh9k%2F54ym%2FUxOsY%2BSDhx8XB19oPatOzpGwOsulPx%2BjbjjRe7s264qOOrnYp%2F4lxCpWehyOBLZ%2BIpsNVLb1muytknig5kLpOb%2BCq5JgGJf8V7FiCSSC%2F4kmN2dhZMwAf14GoilPmsg6ClvoFbGI1tXBPXNpDuqJlcG1zzckkPuqg7SFRq&X-Amz-Signature=c7366fede661efae33f53953ea7a5c079be6c3702ee0e8e03efc8d7376bd4d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5UCDQF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICvN0Zkgu1VhJfPE7GwvwBwqaSsp6tUY8jE3cWUGzE1WAiEA11itzxYaJITwpiiKJOTApGpjfkCVcpVYggMfupAOLGkq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDCy%2FhtGmYve%2FHKqZBSrcA1w2fOP8fbvGsupNKRKrzMLugXcOBN7p4CUSMh2608rADKrb56p30lXKlw%2Fo6nr%2BJYOrw6kCFdUm3E1CvTY0xXQ9YNnA9iBHjA3rhhBw6Ia8TZ3vJRxljSQOfguxprBrcX0GqUfBf8Md55v8smLJVpwWyzUKE4QcLK5E1LXvil%2B8lgrRgsDVclr%2F6GNjqJxSjDoU%2BY8Z4B5LUzylYQ8v4iCWgkaRpszf53i4baslLDnrWp805vvrLYhpA8qpMzZc27zlsiYqN4mfq8zR26A1P42GRsl71LnBFYdtLgYR%2B%2FaH0r%2BOhksGkO5TIWg%2F29xPYQKJtxS%2BqndjdWgJta61aFzWcnTQLJmPx%2BKYIeOv%2BsPRqEwEy637RVbadwN6QsN%2BYDOQJTC3bzkLHIRzuu%2FR0I8TaNpQSMaLLHEKdcf7CWgAwSfeIRjZXzm2whEtrbNvhWQ9LCb1M0M9nAuKbVfn4DDAV0DWGYnY8ffNSveePMz943vkIzhAPfMRlwryN386jV0WQitrtrklhBktJb56Rx2zLWbyNLV5%2F1tGUCZqvwc1c89KIVN8DTuqzHThh4ihbAVPldKE290wGjRns6EKPsYsCm5QgZYu0BJAxAxhUnHIjKLRRUogu9xbrrGOMM%2B5nNIGOqUB8DX%2FNj%2BCT0VMKRX6hhRoDOZUrUVB5Qq8D0%2FqYJccEoesOh9k%2F54ym%2FUxOsY%2BSDhx8XB19oPatOzpGwOsulPx%2BjbjjRe7s264qOOrnYp%2F4lxCpWehyOBLZ%2BIpsNVLb1muytknig5kLpOb%2BCq5JgGJf8V7FiCSSC%2F4kmN2dhZMwAf14GoilPmsg6ClvoFbGI1tXBPXNpDuqJlcG1zzckkPuqg7SFRq&X-Amz-Signature=7f49fdcc22614b74c738e86efae8d6cad467e5c8b9febab1212e64657430c2d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5UCDQF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICvN0Zkgu1VhJfPE7GwvwBwqaSsp6tUY8jE3cWUGzE1WAiEA11itzxYaJITwpiiKJOTApGpjfkCVcpVYggMfupAOLGkq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDCy%2FhtGmYve%2FHKqZBSrcA1w2fOP8fbvGsupNKRKrzMLugXcOBN7p4CUSMh2608rADKrb56p30lXKlw%2Fo6nr%2BJYOrw6kCFdUm3E1CvTY0xXQ9YNnA9iBHjA3rhhBw6Ia8TZ3vJRxljSQOfguxprBrcX0GqUfBf8Md55v8smLJVpwWyzUKE4QcLK5E1LXvil%2B8lgrRgsDVclr%2F6GNjqJxSjDoU%2BY8Z4B5LUzylYQ8v4iCWgkaRpszf53i4baslLDnrWp805vvrLYhpA8qpMzZc27zlsiYqN4mfq8zR26A1P42GRsl71LnBFYdtLgYR%2B%2FaH0r%2BOhksGkO5TIWg%2F29xPYQKJtxS%2BqndjdWgJta61aFzWcnTQLJmPx%2BKYIeOv%2BsPRqEwEy637RVbadwN6QsN%2BYDOQJTC3bzkLHIRzuu%2FR0I8TaNpQSMaLLHEKdcf7CWgAwSfeIRjZXzm2whEtrbNvhWQ9LCb1M0M9nAuKbVfn4DDAV0DWGYnY8ffNSveePMz943vkIzhAPfMRlwryN386jV0WQitrtrklhBktJb56Rx2zLWbyNLV5%2F1tGUCZqvwc1c89KIVN8DTuqzHThh4ihbAVPldKE290wGjRns6EKPsYsCm5QgZYu0BJAxAxhUnHIjKLRRUogu9xbrrGOMM%2B5nNIGOqUB8DX%2FNj%2BCT0VMKRX6hhRoDOZUrUVB5Qq8D0%2FqYJccEoesOh9k%2F54ym%2FUxOsY%2BSDhx8XB19oPatOzpGwOsulPx%2BjbjjRe7s264qOOrnYp%2F4lxCpWehyOBLZ%2BIpsNVLb1muytknig5kLpOb%2BCq5JgGJf8V7FiCSSC%2F4kmN2dhZMwAf14GoilPmsg6ClvoFbGI1tXBPXNpDuqJlcG1zzckkPuqg7SFRq&X-Amz-Signature=4cccb1805751be83de3a9a15bd6c678b18c4260e96c153f9a36256c00db920c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5UCDQF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICvN0Zkgu1VhJfPE7GwvwBwqaSsp6tUY8jE3cWUGzE1WAiEA11itzxYaJITwpiiKJOTApGpjfkCVcpVYggMfupAOLGkq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDCy%2FhtGmYve%2FHKqZBSrcA1w2fOP8fbvGsupNKRKrzMLugXcOBN7p4CUSMh2608rADKrb56p30lXKlw%2Fo6nr%2BJYOrw6kCFdUm3E1CvTY0xXQ9YNnA9iBHjA3rhhBw6Ia8TZ3vJRxljSQOfguxprBrcX0GqUfBf8Md55v8smLJVpwWyzUKE4QcLK5E1LXvil%2B8lgrRgsDVclr%2F6GNjqJxSjDoU%2BY8Z4B5LUzylYQ8v4iCWgkaRpszf53i4baslLDnrWp805vvrLYhpA8qpMzZc27zlsiYqN4mfq8zR26A1P42GRsl71LnBFYdtLgYR%2B%2FaH0r%2BOhksGkO5TIWg%2F29xPYQKJtxS%2BqndjdWgJta61aFzWcnTQLJmPx%2BKYIeOv%2BsPRqEwEy637RVbadwN6QsN%2BYDOQJTC3bzkLHIRzuu%2FR0I8TaNpQSMaLLHEKdcf7CWgAwSfeIRjZXzm2whEtrbNvhWQ9LCb1M0M9nAuKbVfn4DDAV0DWGYnY8ffNSveePMz943vkIzhAPfMRlwryN386jV0WQitrtrklhBktJb56Rx2zLWbyNLV5%2F1tGUCZqvwc1c89KIVN8DTuqzHThh4ihbAVPldKE290wGjRns6EKPsYsCm5QgZYu0BJAxAxhUnHIjKLRRUogu9xbrrGOMM%2B5nNIGOqUB8DX%2FNj%2BCT0VMKRX6hhRoDOZUrUVB5Qq8D0%2FqYJccEoesOh9k%2F54ym%2FUxOsY%2BSDhx8XB19oPatOzpGwOsulPx%2BjbjjRe7s264qOOrnYp%2F4lxCpWehyOBLZ%2BIpsNVLb1muytknig5kLpOb%2BCq5JgGJf8V7FiCSSC%2F4kmN2dhZMwAf14GoilPmsg6ClvoFbGI1tXBPXNpDuqJlcG1zzckkPuqg7SFRq&X-Amz-Signature=bdbeada10ea38d08ba53953eba102b3d2752dcd2922b8e12542d9f649d0388a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5UCDQF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICvN0Zkgu1VhJfPE7GwvwBwqaSsp6tUY8jE3cWUGzE1WAiEA11itzxYaJITwpiiKJOTApGpjfkCVcpVYggMfupAOLGkq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDCy%2FhtGmYve%2FHKqZBSrcA1w2fOP8fbvGsupNKRKrzMLugXcOBN7p4CUSMh2608rADKrb56p30lXKlw%2Fo6nr%2BJYOrw6kCFdUm3E1CvTY0xXQ9YNnA9iBHjA3rhhBw6Ia8TZ3vJRxljSQOfguxprBrcX0GqUfBf8Md55v8smLJVpwWyzUKE4QcLK5E1LXvil%2B8lgrRgsDVclr%2F6GNjqJxSjDoU%2BY8Z4B5LUzylYQ8v4iCWgkaRpszf53i4baslLDnrWp805vvrLYhpA8qpMzZc27zlsiYqN4mfq8zR26A1P42GRsl71LnBFYdtLgYR%2B%2FaH0r%2BOhksGkO5TIWg%2F29xPYQKJtxS%2BqndjdWgJta61aFzWcnTQLJmPx%2BKYIeOv%2BsPRqEwEy637RVbadwN6QsN%2BYDOQJTC3bzkLHIRzuu%2FR0I8TaNpQSMaLLHEKdcf7CWgAwSfeIRjZXzm2whEtrbNvhWQ9LCb1M0M9nAuKbVfn4DDAV0DWGYnY8ffNSveePMz943vkIzhAPfMRlwryN386jV0WQitrtrklhBktJb56Rx2zLWbyNLV5%2F1tGUCZqvwc1c89KIVN8DTuqzHThh4ihbAVPldKE290wGjRns6EKPsYsCm5QgZYu0BJAxAxhUnHIjKLRRUogu9xbrrGOMM%2B5nNIGOqUB8DX%2FNj%2BCT0VMKRX6hhRoDOZUrUVB5Qq8D0%2FqYJccEoesOh9k%2F54ym%2FUxOsY%2BSDhx8XB19oPatOzpGwOsulPx%2BjbjjRe7s264qOOrnYp%2F4lxCpWehyOBLZ%2BIpsNVLb1muytknig5kLpOb%2BCq5JgGJf8V7FiCSSC%2F4kmN2dhZMwAf14GoilPmsg6ClvoFbGI1tXBPXNpDuqJlcG1zzckkPuqg7SFRq&X-Amz-Signature=fc82a59241aea391d633f3e605940ab2a1783ede3faf840be8b42526c3bf510d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5UCDQF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICvN0Zkgu1VhJfPE7GwvwBwqaSsp6tUY8jE3cWUGzE1WAiEA11itzxYaJITwpiiKJOTApGpjfkCVcpVYggMfupAOLGkq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDCy%2FhtGmYve%2FHKqZBSrcA1w2fOP8fbvGsupNKRKrzMLugXcOBN7p4CUSMh2608rADKrb56p30lXKlw%2Fo6nr%2BJYOrw6kCFdUm3E1CvTY0xXQ9YNnA9iBHjA3rhhBw6Ia8TZ3vJRxljSQOfguxprBrcX0GqUfBf8Md55v8smLJVpwWyzUKE4QcLK5E1LXvil%2B8lgrRgsDVclr%2F6GNjqJxSjDoU%2BY8Z4B5LUzylYQ8v4iCWgkaRpszf53i4baslLDnrWp805vvrLYhpA8qpMzZc27zlsiYqN4mfq8zR26A1P42GRsl71LnBFYdtLgYR%2B%2FaH0r%2BOhksGkO5TIWg%2F29xPYQKJtxS%2BqndjdWgJta61aFzWcnTQLJmPx%2BKYIeOv%2BsPRqEwEy637RVbadwN6QsN%2BYDOQJTC3bzkLHIRzuu%2FR0I8TaNpQSMaLLHEKdcf7CWgAwSfeIRjZXzm2whEtrbNvhWQ9LCb1M0M9nAuKbVfn4DDAV0DWGYnY8ffNSveePMz943vkIzhAPfMRlwryN386jV0WQitrtrklhBktJb56Rx2zLWbyNLV5%2F1tGUCZqvwc1c89KIVN8DTuqzHThh4ihbAVPldKE290wGjRns6EKPsYsCm5QgZYu0BJAxAxhUnHIjKLRRUogu9xbrrGOMM%2B5nNIGOqUB8DX%2FNj%2BCT0VMKRX6hhRoDOZUrUVB5Qq8D0%2FqYJccEoesOh9k%2F54ym%2FUxOsY%2BSDhx8XB19oPatOzpGwOsulPx%2BjbjjRe7s264qOOrnYp%2F4lxCpWehyOBLZ%2BIpsNVLb1muytknig5kLpOb%2BCq5JgGJf8V7FiCSSC%2F4kmN2dhZMwAf14GoilPmsg6ClvoFbGI1tXBPXNpDuqJlcG1zzckkPuqg7SFRq&X-Amz-Signature=6f35b40ab3bf58951e6ff6cbc60bb3af6f01a091e7761f459240f27fe7c477ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5UCDQF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICvN0Zkgu1VhJfPE7GwvwBwqaSsp6tUY8jE3cWUGzE1WAiEA11itzxYaJITwpiiKJOTApGpjfkCVcpVYggMfupAOLGkq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDCy%2FhtGmYve%2FHKqZBSrcA1w2fOP8fbvGsupNKRKrzMLugXcOBN7p4CUSMh2608rADKrb56p30lXKlw%2Fo6nr%2BJYOrw6kCFdUm3E1CvTY0xXQ9YNnA9iBHjA3rhhBw6Ia8TZ3vJRxljSQOfguxprBrcX0GqUfBf8Md55v8smLJVpwWyzUKE4QcLK5E1LXvil%2B8lgrRgsDVclr%2F6GNjqJxSjDoU%2BY8Z4B5LUzylYQ8v4iCWgkaRpszf53i4baslLDnrWp805vvrLYhpA8qpMzZc27zlsiYqN4mfq8zR26A1P42GRsl71LnBFYdtLgYR%2B%2FaH0r%2BOhksGkO5TIWg%2F29xPYQKJtxS%2BqndjdWgJta61aFzWcnTQLJmPx%2BKYIeOv%2BsPRqEwEy637RVbadwN6QsN%2BYDOQJTC3bzkLHIRzuu%2FR0I8TaNpQSMaLLHEKdcf7CWgAwSfeIRjZXzm2whEtrbNvhWQ9LCb1M0M9nAuKbVfn4DDAV0DWGYnY8ffNSveePMz943vkIzhAPfMRlwryN386jV0WQitrtrklhBktJb56Rx2zLWbyNLV5%2F1tGUCZqvwc1c89KIVN8DTuqzHThh4ihbAVPldKE290wGjRns6EKPsYsCm5QgZYu0BJAxAxhUnHIjKLRRUogu9xbrrGOMM%2B5nNIGOqUB8DX%2FNj%2BCT0VMKRX6hhRoDOZUrUVB5Qq8D0%2FqYJccEoesOh9k%2F54ym%2FUxOsY%2BSDhx8XB19oPatOzpGwOsulPx%2BjbjjRe7s264qOOrnYp%2F4lxCpWehyOBLZ%2BIpsNVLb1muytknig5kLpOb%2BCq5JgGJf8V7FiCSSC%2F4kmN2dhZMwAf14GoilPmsg6ClvoFbGI1tXBPXNpDuqJlcG1zzckkPuqg7SFRq&X-Amz-Signature=616224bb32982b3256bf967c0633d4006be420296bb47ca5079932f579691374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5UCDQF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICvN0Zkgu1VhJfPE7GwvwBwqaSsp6tUY8jE3cWUGzE1WAiEA11itzxYaJITwpiiKJOTApGpjfkCVcpVYggMfupAOLGkq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDCy%2FhtGmYve%2FHKqZBSrcA1w2fOP8fbvGsupNKRKrzMLugXcOBN7p4CUSMh2608rADKrb56p30lXKlw%2Fo6nr%2BJYOrw6kCFdUm3E1CvTY0xXQ9YNnA9iBHjA3rhhBw6Ia8TZ3vJRxljSQOfguxprBrcX0GqUfBf8Md55v8smLJVpwWyzUKE4QcLK5E1LXvil%2B8lgrRgsDVclr%2F6GNjqJxSjDoU%2BY8Z4B5LUzylYQ8v4iCWgkaRpszf53i4baslLDnrWp805vvrLYhpA8qpMzZc27zlsiYqN4mfq8zR26A1P42GRsl71LnBFYdtLgYR%2B%2FaH0r%2BOhksGkO5TIWg%2F29xPYQKJtxS%2BqndjdWgJta61aFzWcnTQLJmPx%2BKYIeOv%2BsPRqEwEy637RVbadwN6QsN%2BYDOQJTC3bzkLHIRzuu%2FR0I8TaNpQSMaLLHEKdcf7CWgAwSfeIRjZXzm2whEtrbNvhWQ9LCb1M0M9nAuKbVfn4DDAV0DWGYnY8ffNSveePMz943vkIzhAPfMRlwryN386jV0WQitrtrklhBktJb56Rx2zLWbyNLV5%2F1tGUCZqvwc1c89KIVN8DTuqzHThh4ihbAVPldKE290wGjRns6EKPsYsCm5QgZYu0BJAxAxhUnHIjKLRRUogu9xbrrGOMM%2B5nNIGOqUB8DX%2FNj%2BCT0VMKRX6hhRoDOZUrUVB5Qq8D0%2FqYJccEoesOh9k%2F54ym%2FUxOsY%2BSDhx8XB19oPatOzpGwOsulPx%2BjbjjRe7s264qOOrnYp%2F4lxCpWehyOBLZ%2BIpsNVLb1muytknig5kLpOb%2BCq5JgGJf8V7FiCSSC%2F4kmN2dhZMwAf14GoilPmsg6ClvoFbGI1tXBPXNpDuqJlcG1zzckkPuqg7SFRq&X-Amz-Signature=f532db0975400d32035be6b57492a838303cebdf68914bdf113d3b04050d764d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5UCDQF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICvN0Zkgu1VhJfPE7GwvwBwqaSsp6tUY8jE3cWUGzE1WAiEA11itzxYaJITwpiiKJOTApGpjfkCVcpVYggMfupAOLGkq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDCy%2FhtGmYve%2FHKqZBSrcA1w2fOP8fbvGsupNKRKrzMLugXcOBN7p4CUSMh2608rADKrb56p30lXKlw%2Fo6nr%2BJYOrw6kCFdUm3E1CvTY0xXQ9YNnA9iBHjA3rhhBw6Ia8TZ3vJRxljSQOfguxprBrcX0GqUfBf8Md55v8smLJVpwWyzUKE4QcLK5E1LXvil%2B8lgrRgsDVclr%2F6GNjqJxSjDoU%2BY8Z4B5LUzylYQ8v4iCWgkaRpszf53i4baslLDnrWp805vvrLYhpA8qpMzZc27zlsiYqN4mfq8zR26A1P42GRsl71LnBFYdtLgYR%2B%2FaH0r%2BOhksGkO5TIWg%2F29xPYQKJtxS%2BqndjdWgJta61aFzWcnTQLJmPx%2BKYIeOv%2BsPRqEwEy637RVbadwN6QsN%2BYDOQJTC3bzkLHIRzuu%2FR0I8TaNpQSMaLLHEKdcf7CWgAwSfeIRjZXzm2whEtrbNvhWQ9LCb1M0M9nAuKbVfn4DDAV0DWGYnY8ffNSveePMz943vkIzhAPfMRlwryN386jV0WQitrtrklhBktJb56Rx2zLWbyNLV5%2F1tGUCZqvwc1c89KIVN8DTuqzHThh4ihbAVPldKE290wGjRns6EKPsYsCm5QgZYu0BJAxAxhUnHIjKLRRUogu9xbrrGOMM%2B5nNIGOqUB8DX%2FNj%2BCT0VMKRX6hhRoDOZUrUVB5Qq8D0%2FqYJccEoesOh9k%2F54ym%2FUxOsY%2BSDhx8XB19oPatOzpGwOsulPx%2BjbjjRe7s264qOOrnYp%2F4lxCpWehyOBLZ%2BIpsNVLb1muytknig5kLpOb%2BCq5JgGJf8V7FiCSSC%2F4kmN2dhZMwAf14GoilPmsg6ClvoFbGI1tXBPXNpDuqJlcG1zzckkPuqg7SFRq&X-Amz-Signature=cdece0e4e21e05d8e713e985fb84f6e8dfda753b9d3642d63d5b216c957a30bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5UCDQF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICvN0Zkgu1VhJfPE7GwvwBwqaSsp6tUY8jE3cWUGzE1WAiEA11itzxYaJITwpiiKJOTApGpjfkCVcpVYggMfupAOLGkq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDCy%2FhtGmYve%2FHKqZBSrcA1w2fOP8fbvGsupNKRKrzMLugXcOBN7p4CUSMh2608rADKrb56p30lXKlw%2Fo6nr%2BJYOrw6kCFdUm3E1CvTY0xXQ9YNnA9iBHjA3rhhBw6Ia8TZ3vJRxljSQOfguxprBrcX0GqUfBf8Md55v8smLJVpwWyzUKE4QcLK5E1LXvil%2B8lgrRgsDVclr%2F6GNjqJxSjDoU%2BY8Z4B5LUzylYQ8v4iCWgkaRpszf53i4baslLDnrWp805vvrLYhpA8qpMzZc27zlsiYqN4mfq8zR26A1P42GRsl71LnBFYdtLgYR%2B%2FaH0r%2BOhksGkO5TIWg%2F29xPYQKJtxS%2BqndjdWgJta61aFzWcnTQLJmPx%2BKYIeOv%2BsPRqEwEy637RVbadwN6QsN%2BYDOQJTC3bzkLHIRzuu%2FR0I8TaNpQSMaLLHEKdcf7CWgAwSfeIRjZXzm2whEtrbNvhWQ9LCb1M0M9nAuKbVfn4DDAV0DWGYnY8ffNSveePMz943vkIzhAPfMRlwryN386jV0WQitrtrklhBktJb56Rx2zLWbyNLV5%2F1tGUCZqvwc1c89KIVN8DTuqzHThh4ihbAVPldKE290wGjRns6EKPsYsCm5QgZYu0BJAxAxhUnHIjKLRRUogu9xbrrGOMM%2B5nNIGOqUB8DX%2FNj%2BCT0VMKRX6hhRoDOZUrUVB5Qq8D0%2FqYJccEoesOh9k%2F54ym%2FUxOsY%2BSDhx8XB19oPatOzpGwOsulPx%2BjbjjRe7s264qOOrnYp%2F4lxCpWehyOBLZ%2BIpsNVLb1muytknig5kLpOb%2BCq5JgGJf8V7FiCSSC%2F4kmN2dhZMwAf14GoilPmsg6ClvoFbGI1tXBPXNpDuqJlcG1zzckkPuqg7SFRq&X-Amz-Signature=099e259242d9553fcf9dbf074a9938630d1072ccd363f4bde29c84be29549c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5UCDQF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICvN0Zkgu1VhJfPE7GwvwBwqaSsp6tUY8jE3cWUGzE1WAiEA11itzxYaJITwpiiKJOTApGpjfkCVcpVYggMfupAOLGkq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDCy%2FhtGmYve%2FHKqZBSrcA1w2fOP8fbvGsupNKRKrzMLugXcOBN7p4CUSMh2608rADKrb56p30lXKlw%2Fo6nr%2BJYOrw6kCFdUm3E1CvTY0xXQ9YNnA9iBHjA3rhhBw6Ia8TZ3vJRxljSQOfguxprBrcX0GqUfBf8Md55v8smLJVpwWyzUKE4QcLK5E1LXvil%2B8lgrRgsDVclr%2F6GNjqJxSjDoU%2BY8Z4B5LUzylYQ8v4iCWgkaRpszf53i4baslLDnrWp805vvrLYhpA8qpMzZc27zlsiYqN4mfq8zR26A1P42GRsl71LnBFYdtLgYR%2B%2FaH0r%2BOhksGkO5TIWg%2F29xPYQKJtxS%2BqndjdWgJta61aFzWcnTQLJmPx%2BKYIeOv%2BsPRqEwEy637RVbadwN6QsN%2BYDOQJTC3bzkLHIRzuu%2FR0I8TaNpQSMaLLHEKdcf7CWgAwSfeIRjZXzm2whEtrbNvhWQ9LCb1M0M9nAuKbVfn4DDAV0DWGYnY8ffNSveePMz943vkIzhAPfMRlwryN386jV0WQitrtrklhBktJb56Rx2zLWbyNLV5%2F1tGUCZqvwc1c89KIVN8DTuqzHThh4ihbAVPldKE290wGjRns6EKPsYsCm5QgZYu0BJAxAxhUnHIjKLRRUogu9xbrrGOMM%2B5nNIGOqUB8DX%2FNj%2BCT0VMKRX6hhRoDOZUrUVB5Qq8D0%2FqYJccEoesOh9k%2F54ym%2FUxOsY%2BSDhx8XB19oPatOzpGwOsulPx%2BjbjjRe7s264qOOrnYp%2F4lxCpWehyOBLZ%2BIpsNVLb1muytknig5kLpOb%2BCq5JgGJf8V7FiCSSC%2F4kmN2dhZMwAf14GoilPmsg6ClvoFbGI1tXBPXNpDuqJlcG1zzckkPuqg7SFRq&X-Amz-Signature=397b0fe96c48c31d002337538b1799fa336dd59b0bf6a7946ecd543f893289c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5UCDQF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICvN0Zkgu1VhJfPE7GwvwBwqaSsp6tUY8jE3cWUGzE1WAiEA11itzxYaJITwpiiKJOTApGpjfkCVcpVYggMfupAOLGkq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDCy%2FhtGmYve%2FHKqZBSrcA1w2fOP8fbvGsupNKRKrzMLugXcOBN7p4CUSMh2608rADKrb56p30lXKlw%2Fo6nr%2BJYOrw6kCFdUm3E1CvTY0xXQ9YNnA9iBHjA3rhhBw6Ia8TZ3vJRxljSQOfguxprBrcX0GqUfBf8Md55v8smLJVpwWyzUKE4QcLK5E1LXvil%2B8lgrRgsDVclr%2F6GNjqJxSjDoU%2BY8Z4B5LUzylYQ8v4iCWgkaRpszf53i4baslLDnrWp805vvrLYhpA8qpMzZc27zlsiYqN4mfq8zR26A1P42GRsl71LnBFYdtLgYR%2B%2FaH0r%2BOhksGkO5TIWg%2F29xPYQKJtxS%2BqndjdWgJta61aFzWcnTQLJmPx%2BKYIeOv%2BsPRqEwEy637RVbadwN6QsN%2BYDOQJTC3bzkLHIRzuu%2FR0I8TaNpQSMaLLHEKdcf7CWgAwSfeIRjZXzm2whEtrbNvhWQ9LCb1M0M9nAuKbVfn4DDAV0DWGYnY8ffNSveePMz943vkIzhAPfMRlwryN386jV0WQitrtrklhBktJb56Rx2zLWbyNLV5%2F1tGUCZqvwc1c89KIVN8DTuqzHThh4ihbAVPldKE290wGjRns6EKPsYsCm5QgZYu0BJAxAxhUnHIjKLRRUogu9xbrrGOMM%2B5nNIGOqUB8DX%2FNj%2BCT0VMKRX6hhRoDOZUrUVB5Qq8D0%2FqYJccEoesOh9k%2F54ym%2FUxOsY%2BSDhx8XB19oPatOzpGwOsulPx%2BjbjjRe7s264qOOrnYp%2F4lxCpWehyOBLZ%2BIpsNVLb1muytknig5kLpOb%2BCq5JgGJf8V7FiCSSC%2F4kmN2dhZMwAf14GoilPmsg6ClvoFbGI1tXBPXNpDuqJlcG1zzckkPuqg7SFRq&X-Amz-Signature=418f929db1e04ff27d7aaef15c820c03228b15fd8e08369a39206bdb98bd644a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
