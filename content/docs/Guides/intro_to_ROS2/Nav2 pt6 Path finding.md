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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOLEOBM%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDrxg1gd%2F%2F7o0fV4Vrso61mJyhEl1f1inxMWPu8SkyUpgIgXbAQ2ZM%2BwI2eBDPirJLQhrHAUFuGo7w5%2Fo8aIOH4PocqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzESTz0%2FLH1d%2Fy5WSrcA7yh%2BUJwc3mxcbN8Tj1gELkbGfB4tOYggEWiUHxXa%2BgsnQgNGbY%2FxDqah88GeyrFETwAbL%2B8s9WO7KjsdzZhLne8DPriUuB0e9QBoE5baR3mFtZMJBv5Mrjgbie0NmBzSHfj38XqoH42HxZkzXCQ%2Bw14uZ20rs3fPmvrSc2t%2Fr20BJgZQI1pLE4fUMTcXRj%2BaA49VTpKPmKZRRcJjRovXO5mlpgNluM8Zp28jdVuPowszrFdp3vWu8tdR6vS290mKnU84rvPlgd0baPjbNA4ySSrzR%2F%2BeDjAdDJDAljsk9Fjyg4pCu%2FaZoNf6f3x8Jx0RAvAiQ03kzIXBT61CiFv3gWhY5lvLsWSaNTuVjR5Vb1GxQ74SrqStiZCcywGDAfKTj65xad0GqHIGiiCKR91b7e4CrqwWPNAMFW7q85vfE%2FpHS1mPfLg4d6VoKU4aSSrJjs1OFzy4RsXHU%2BGOfomyj9pRdfVcmYnS5ThZ4ojYVWEtfzfglXj13UHn86JdsR6yvwvAIuZzKY1a4e1sJgUauKNenCUybCSqOEmuZixDdIvfLiD1tGz1GpUmFr%2FBUXX83hshlM8eK4ksmja%2B70cqgfwGDqn4wJM4CmrFPhOS5am7yBhb5%2F01bCZZSm7MPuB0ccGOqUBX6eGMdED%2BTmy%2F%2BvC71k32K3zC%2BaCvsoPcNjzDUu%2BUm1dlXOomw2UrZV7gfwjO0UQJ8AxkmRExsfQsAwiU%2FU%2BmgJYEALZt7twJFAASZe2QRthk9EwYTxv%2B35gHA3lFf2v%2B6NodPJvQi2yu6fNYpvIzeb%2FbJ2fZvQd5AzxkczyfiVFUrVWJfFAQCRw9FBeQXBmpx%2Fq4nsysX5cSMmKRQF1GUN5UeBE&X-Amz-Signature=7060fcf4676d72b2e7a1f3ad2eecd40b6318cd72f004d82f85a03018fd3e5146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOLEOBM%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDrxg1gd%2F%2F7o0fV4Vrso61mJyhEl1f1inxMWPu8SkyUpgIgXbAQ2ZM%2BwI2eBDPirJLQhrHAUFuGo7w5%2Fo8aIOH4PocqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzESTz0%2FLH1d%2Fy5WSrcA7yh%2BUJwc3mxcbN8Tj1gELkbGfB4tOYggEWiUHxXa%2BgsnQgNGbY%2FxDqah88GeyrFETwAbL%2B8s9WO7KjsdzZhLne8DPriUuB0e9QBoE5baR3mFtZMJBv5Mrjgbie0NmBzSHfj38XqoH42HxZkzXCQ%2Bw14uZ20rs3fPmvrSc2t%2Fr20BJgZQI1pLE4fUMTcXRj%2BaA49VTpKPmKZRRcJjRovXO5mlpgNluM8Zp28jdVuPowszrFdp3vWu8tdR6vS290mKnU84rvPlgd0baPjbNA4ySSrzR%2F%2BeDjAdDJDAljsk9Fjyg4pCu%2FaZoNf6f3x8Jx0RAvAiQ03kzIXBT61CiFv3gWhY5lvLsWSaNTuVjR5Vb1GxQ74SrqStiZCcywGDAfKTj65xad0GqHIGiiCKR91b7e4CrqwWPNAMFW7q85vfE%2FpHS1mPfLg4d6VoKU4aSSrJjs1OFzy4RsXHU%2BGOfomyj9pRdfVcmYnS5ThZ4ojYVWEtfzfglXj13UHn86JdsR6yvwvAIuZzKY1a4e1sJgUauKNenCUybCSqOEmuZixDdIvfLiD1tGz1GpUmFr%2FBUXX83hshlM8eK4ksmja%2B70cqgfwGDqn4wJM4CmrFPhOS5am7yBhb5%2F01bCZZSm7MPuB0ccGOqUBX6eGMdED%2BTmy%2F%2BvC71k32K3zC%2BaCvsoPcNjzDUu%2BUm1dlXOomw2UrZV7gfwjO0UQJ8AxkmRExsfQsAwiU%2FU%2BmgJYEALZt7twJFAASZe2QRthk9EwYTxv%2B35gHA3lFf2v%2B6NodPJvQi2yu6fNYpvIzeb%2FbJ2fZvQd5AzxkczyfiVFUrVWJfFAQCRw9FBeQXBmpx%2Fq4nsysX5cSMmKRQF1GUN5UeBE&X-Amz-Signature=ccf39338125739f0ca48f1e45183dc5c4d0600efc46b1c9fa5f23d9529341cf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOLEOBM%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDrxg1gd%2F%2F7o0fV4Vrso61mJyhEl1f1inxMWPu8SkyUpgIgXbAQ2ZM%2BwI2eBDPirJLQhrHAUFuGo7w5%2Fo8aIOH4PocqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzESTz0%2FLH1d%2Fy5WSrcA7yh%2BUJwc3mxcbN8Tj1gELkbGfB4tOYggEWiUHxXa%2BgsnQgNGbY%2FxDqah88GeyrFETwAbL%2B8s9WO7KjsdzZhLne8DPriUuB0e9QBoE5baR3mFtZMJBv5Mrjgbie0NmBzSHfj38XqoH42HxZkzXCQ%2Bw14uZ20rs3fPmvrSc2t%2Fr20BJgZQI1pLE4fUMTcXRj%2BaA49VTpKPmKZRRcJjRovXO5mlpgNluM8Zp28jdVuPowszrFdp3vWu8tdR6vS290mKnU84rvPlgd0baPjbNA4ySSrzR%2F%2BeDjAdDJDAljsk9Fjyg4pCu%2FaZoNf6f3x8Jx0RAvAiQ03kzIXBT61CiFv3gWhY5lvLsWSaNTuVjR5Vb1GxQ74SrqStiZCcywGDAfKTj65xad0GqHIGiiCKR91b7e4CrqwWPNAMFW7q85vfE%2FpHS1mPfLg4d6VoKU4aSSrJjs1OFzy4RsXHU%2BGOfomyj9pRdfVcmYnS5ThZ4ojYVWEtfzfglXj13UHn86JdsR6yvwvAIuZzKY1a4e1sJgUauKNenCUybCSqOEmuZixDdIvfLiD1tGz1GpUmFr%2FBUXX83hshlM8eK4ksmja%2B70cqgfwGDqn4wJM4CmrFPhOS5am7yBhb5%2F01bCZZSm7MPuB0ccGOqUBX6eGMdED%2BTmy%2F%2BvC71k32K3zC%2BaCvsoPcNjzDUu%2BUm1dlXOomw2UrZV7gfwjO0UQJ8AxkmRExsfQsAwiU%2FU%2BmgJYEALZt7twJFAASZe2QRthk9EwYTxv%2B35gHA3lFf2v%2B6NodPJvQi2yu6fNYpvIzeb%2FbJ2fZvQd5AzxkczyfiVFUrVWJfFAQCRw9FBeQXBmpx%2Fq4nsysX5cSMmKRQF1GUN5UeBE&X-Amz-Signature=ade7115f2f132e9dc0b4f13e2af1c297b2415aa8488b0b0bb5c26c2a6832b75d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOLEOBM%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDrxg1gd%2F%2F7o0fV4Vrso61mJyhEl1f1inxMWPu8SkyUpgIgXbAQ2ZM%2BwI2eBDPirJLQhrHAUFuGo7w5%2Fo8aIOH4PocqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzESTz0%2FLH1d%2Fy5WSrcA7yh%2BUJwc3mxcbN8Tj1gELkbGfB4tOYggEWiUHxXa%2BgsnQgNGbY%2FxDqah88GeyrFETwAbL%2B8s9WO7KjsdzZhLne8DPriUuB0e9QBoE5baR3mFtZMJBv5Mrjgbie0NmBzSHfj38XqoH42HxZkzXCQ%2Bw14uZ20rs3fPmvrSc2t%2Fr20BJgZQI1pLE4fUMTcXRj%2BaA49VTpKPmKZRRcJjRovXO5mlpgNluM8Zp28jdVuPowszrFdp3vWu8tdR6vS290mKnU84rvPlgd0baPjbNA4ySSrzR%2F%2BeDjAdDJDAljsk9Fjyg4pCu%2FaZoNf6f3x8Jx0RAvAiQ03kzIXBT61CiFv3gWhY5lvLsWSaNTuVjR5Vb1GxQ74SrqStiZCcywGDAfKTj65xad0GqHIGiiCKR91b7e4CrqwWPNAMFW7q85vfE%2FpHS1mPfLg4d6VoKU4aSSrJjs1OFzy4RsXHU%2BGOfomyj9pRdfVcmYnS5ThZ4ojYVWEtfzfglXj13UHn86JdsR6yvwvAIuZzKY1a4e1sJgUauKNenCUybCSqOEmuZixDdIvfLiD1tGz1GpUmFr%2FBUXX83hshlM8eK4ksmja%2B70cqgfwGDqn4wJM4CmrFPhOS5am7yBhb5%2F01bCZZSm7MPuB0ccGOqUBX6eGMdED%2BTmy%2F%2BvC71k32K3zC%2BaCvsoPcNjzDUu%2BUm1dlXOomw2UrZV7gfwjO0UQJ8AxkmRExsfQsAwiU%2FU%2BmgJYEALZt7twJFAASZe2QRthk9EwYTxv%2B35gHA3lFf2v%2B6NodPJvQi2yu6fNYpvIzeb%2FbJ2fZvQd5AzxkczyfiVFUrVWJfFAQCRw9FBeQXBmpx%2Fq4nsysX5cSMmKRQF1GUN5UeBE&X-Amz-Signature=9606ed13b4f904cb59ba528991c103c40b553717be77635c9acc144e9688b294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOLEOBM%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDrxg1gd%2F%2F7o0fV4Vrso61mJyhEl1f1inxMWPu8SkyUpgIgXbAQ2ZM%2BwI2eBDPirJLQhrHAUFuGo7w5%2Fo8aIOH4PocqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzESTz0%2FLH1d%2Fy5WSrcA7yh%2BUJwc3mxcbN8Tj1gELkbGfB4tOYggEWiUHxXa%2BgsnQgNGbY%2FxDqah88GeyrFETwAbL%2B8s9WO7KjsdzZhLne8DPriUuB0e9QBoE5baR3mFtZMJBv5Mrjgbie0NmBzSHfj38XqoH42HxZkzXCQ%2Bw14uZ20rs3fPmvrSc2t%2Fr20BJgZQI1pLE4fUMTcXRj%2BaA49VTpKPmKZRRcJjRovXO5mlpgNluM8Zp28jdVuPowszrFdp3vWu8tdR6vS290mKnU84rvPlgd0baPjbNA4ySSrzR%2F%2BeDjAdDJDAljsk9Fjyg4pCu%2FaZoNf6f3x8Jx0RAvAiQ03kzIXBT61CiFv3gWhY5lvLsWSaNTuVjR5Vb1GxQ74SrqStiZCcywGDAfKTj65xad0GqHIGiiCKR91b7e4CrqwWPNAMFW7q85vfE%2FpHS1mPfLg4d6VoKU4aSSrJjs1OFzy4RsXHU%2BGOfomyj9pRdfVcmYnS5ThZ4ojYVWEtfzfglXj13UHn86JdsR6yvwvAIuZzKY1a4e1sJgUauKNenCUybCSqOEmuZixDdIvfLiD1tGz1GpUmFr%2FBUXX83hshlM8eK4ksmja%2B70cqgfwGDqn4wJM4CmrFPhOS5am7yBhb5%2F01bCZZSm7MPuB0ccGOqUBX6eGMdED%2BTmy%2F%2BvC71k32K3zC%2BaCvsoPcNjzDUu%2BUm1dlXOomw2UrZV7gfwjO0UQJ8AxkmRExsfQsAwiU%2FU%2BmgJYEALZt7twJFAASZe2QRthk9EwYTxv%2B35gHA3lFf2v%2B6NodPJvQi2yu6fNYpvIzeb%2FbJ2fZvQd5AzxkczyfiVFUrVWJfFAQCRw9FBeQXBmpx%2Fq4nsysX5cSMmKRQF1GUN5UeBE&X-Amz-Signature=d801767dfb70cdd881070401a7c495b37a2ca839c6513e8d1f26a57facdeb975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOLEOBM%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDrxg1gd%2F%2F7o0fV4Vrso61mJyhEl1f1inxMWPu8SkyUpgIgXbAQ2ZM%2BwI2eBDPirJLQhrHAUFuGo7w5%2Fo8aIOH4PocqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzESTz0%2FLH1d%2Fy5WSrcA7yh%2BUJwc3mxcbN8Tj1gELkbGfB4tOYggEWiUHxXa%2BgsnQgNGbY%2FxDqah88GeyrFETwAbL%2B8s9WO7KjsdzZhLne8DPriUuB0e9QBoE5baR3mFtZMJBv5Mrjgbie0NmBzSHfj38XqoH42HxZkzXCQ%2Bw14uZ20rs3fPmvrSc2t%2Fr20BJgZQI1pLE4fUMTcXRj%2BaA49VTpKPmKZRRcJjRovXO5mlpgNluM8Zp28jdVuPowszrFdp3vWu8tdR6vS290mKnU84rvPlgd0baPjbNA4ySSrzR%2F%2BeDjAdDJDAljsk9Fjyg4pCu%2FaZoNf6f3x8Jx0RAvAiQ03kzIXBT61CiFv3gWhY5lvLsWSaNTuVjR5Vb1GxQ74SrqStiZCcywGDAfKTj65xad0GqHIGiiCKR91b7e4CrqwWPNAMFW7q85vfE%2FpHS1mPfLg4d6VoKU4aSSrJjs1OFzy4RsXHU%2BGOfomyj9pRdfVcmYnS5ThZ4ojYVWEtfzfglXj13UHn86JdsR6yvwvAIuZzKY1a4e1sJgUauKNenCUybCSqOEmuZixDdIvfLiD1tGz1GpUmFr%2FBUXX83hshlM8eK4ksmja%2B70cqgfwGDqn4wJM4CmrFPhOS5am7yBhb5%2F01bCZZSm7MPuB0ccGOqUBX6eGMdED%2BTmy%2F%2BvC71k32K3zC%2BaCvsoPcNjzDUu%2BUm1dlXOomw2UrZV7gfwjO0UQJ8AxkmRExsfQsAwiU%2FU%2BmgJYEALZt7twJFAASZe2QRthk9EwYTxv%2B35gHA3lFf2v%2B6NodPJvQi2yu6fNYpvIzeb%2FbJ2fZvQd5AzxkczyfiVFUrVWJfFAQCRw9FBeQXBmpx%2Fq4nsysX5cSMmKRQF1GUN5UeBE&X-Amz-Signature=c7a5c7fe20519312f549c1671b2e6f3098e248c045189ebd744f6d6b36b79fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOLEOBM%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDrxg1gd%2F%2F7o0fV4Vrso61mJyhEl1f1inxMWPu8SkyUpgIgXbAQ2ZM%2BwI2eBDPirJLQhrHAUFuGo7w5%2Fo8aIOH4PocqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzESTz0%2FLH1d%2Fy5WSrcA7yh%2BUJwc3mxcbN8Tj1gELkbGfB4tOYggEWiUHxXa%2BgsnQgNGbY%2FxDqah88GeyrFETwAbL%2B8s9WO7KjsdzZhLne8DPriUuB0e9QBoE5baR3mFtZMJBv5Mrjgbie0NmBzSHfj38XqoH42HxZkzXCQ%2Bw14uZ20rs3fPmvrSc2t%2Fr20BJgZQI1pLE4fUMTcXRj%2BaA49VTpKPmKZRRcJjRovXO5mlpgNluM8Zp28jdVuPowszrFdp3vWu8tdR6vS290mKnU84rvPlgd0baPjbNA4ySSrzR%2F%2BeDjAdDJDAljsk9Fjyg4pCu%2FaZoNf6f3x8Jx0RAvAiQ03kzIXBT61CiFv3gWhY5lvLsWSaNTuVjR5Vb1GxQ74SrqStiZCcywGDAfKTj65xad0GqHIGiiCKR91b7e4CrqwWPNAMFW7q85vfE%2FpHS1mPfLg4d6VoKU4aSSrJjs1OFzy4RsXHU%2BGOfomyj9pRdfVcmYnS5ThZ4ojYVWEtfzfglXj13UHn86JdsR6yvwvAIuZzKY1a4e1sJgUauKNenCUybCSqOEmuZixDdIvfLiD1tGz1GpUmFr%2FBUXX83hshlM8eK4ksmja%2B70cqgfwGDqn4wJM4CmrFPhOS5am7yBhb5%2F01bCZZSm7MPuB0ccGOqUBX6eGMdED%2BTmy%2F%2BvC71k32K3zC%2BaCvsoPcNjzDUu%2BUm1dlXOomw2UrZV7gfwjO0UQJ8AxkmRExsfQsAwiU%2FU%2BmgJYEALZt7twJFAASZe2QRthk9EwYTxv%2B35gHA3lFf2v%2B6NodPJvQi2yu6fNYpvIzeb%2FbJ2fZvQd5AzxkczyfiVFUrVWJfFAQCRw9FBeQXBmpx%2Fq4nsysX5cSMmKRQF1GUN5UeBE&X-Amz-Signature=30c3f53e4f22229a2198cc8e56da144ff3c04130834c68182e8fb5b9e3e18186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOLEOBM%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDrxg1gd%2F%2F7o0fV4Vrso61mJyhEl1f1inxMWPu8SkyUpgIgXbAQ2ZM%2BwI2eBDPirJLQhrHAUFuGo7w5%2Fo8aIOH4PocqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzESTz0%2FLH1d%2Fy5WSrcA7yh%2BUJwc3mxcbN8Tj1gELkbGfB4tOYggEWiUHxXa%2BgsnQgNGbY%2FxDqah88GeyrFETwAbL%2B8s9WO7KjsdzZhLne8DPriUuB0e9QBoE5baR3mFtZMJBv5Mrjgbie0NmBzSHfj38XqoH42HxZkzXCQ%2Bw14uZ20rs3fPmvrSc2t%2Fr20BJgZQI1pLE4fUMTcXRj%2BaA49VTpKPmKZRRcJjRovXO5mlpgNluM8Zp28jdVuPowszrFdp3vWu8tdR6vS290mKnU84rvPlgd0baPjbNA4ySSrzR%2F%2BeDjAdDJDAljsk9Fjyg4pCu%2FaZoNf6f3x8Jx0RAvAiQ03kzIXBT61CiFv3gWhY5lvLsWSaNTuVjR5Vb1GxQ74SrqStiZCcywGDAfKTj65xad0GqHIGiiCKR91b7e4CrqwWPNAMFW7q85vfE%2FpHS1mPfLg4d6VoKU4aSSrJjs1OFzy4RsXHU%2BGOfomyj9pRdfVcmYnS5ThZ4ojYVWEtfzfglXj13UHn86JdsR6yvwvAIuZzKY1a4e1sJgUauKNenCUybCSqOEmuZixDdIvfLiD1tGz1GpUmFr%2FBUXX83hshlM8eK4ksmja%2B70cqgfwGDqn4wJM4CmrFPhOS5am7yBhb5%2F01bCZZSm7MPuB0ccGOqUBX6eGMdED%2BTmy%2F%2BvC71k32K3zC%2BaCvsoPcNjzDUu%2BUm1dlXOomw2UrZV7gfwjO0UQJ8AxkmRExsfQsAwiU%2FU%2BmgJYEALZt7twJFAASZe2QRthk9EwYTxv%2B35gHA3lFf2v%2B6NodPJvQi2yu6fNYpvIzeb%2FbJ2fZvQd5AzxkczyfiVFUrVWJfFAQCRw9FBeQXBmpx%2Fq4nsysX5cSMmKRQF1GUN5UeBE&X-Amz-Signature=c1abf0827c6cfd788910c8d8e94f594f8856fca75dc002c770a71cf503f7db31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOLEOBM%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDrxg1gd%2F%2F7o0fV4Vrso61mJyhEl1f1inxMWPu8SkyUpgIgXbAQ2ZM%2BwI2eBDPirJLQhrHAUFuGo7w5%2Fo8aIOH4PocqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzESTz0%2FLH1d%2Fy5WSrcA7yh%2BUJwc3mxcbN8Tj1gELkbGfB4tOYggEWiUHxXa%2BgsnQgNGbY%2FxDqah88GeyrFETwAbL%2B8s9WO7KjsdzZhLne8DPriUuB0e9QBoE5baR3mFtZMJBv5Mrjgbie0NmBzSHfj38XqoH42HxZkzXCQ%2Bw14uZ20rs3fPmvrSc2t%2Fr20BJgZQI1pLE4fUMTcXRj%2BaA49VTpKPmKZRRcJjRovXO5mlpgNluM8Zp28jdVuPowszrFdp3vWu8tdR6vS290mKnU84rvPlgd0baPjbNA4ySSrzR%2F%2BeDjAdDJDAljsk9Fjyg4pCu%2FaZoNf6f3x8Jx0RAvAiQ03kzIXBT61CiFv3gWhY5lvLsWSaNTuVjR5Vb1GxQ74SrqStiZCcywGDAfKTj65xad0GqHIGiiCKR91b7e4CrqwWPNAMFW7q85vfE%2FpHS1mPfLg4d6VoKU4aSSrJjs1OFzy4RsXHU%2BGOfomyj9pRdfVcmYnS5ThZ4ojYVWEtfzfglXj13UHn86JdsR6yvwvAIuZzKY1a4e1sJgUauKNenCUybCSqOEmuZixDdIvfLiD1tGz1GpUmFr%2FBUXX83hshlM8eK4ksmja%2B70cqgfwGDqn4wJM4CmrFPhOS5am7yBhb5%2F01bCZZSm7MPuB0ccGOqUBX6eGMdED%2BTmy%2F%2BvC71k32K3zC%2BaCvsoPcNjzDUu%2BUm1dlXOomw2UrZV7gfwjO0UQJ8AxkmRExsfQsAwiU%2FU%2BmgJYEALZt7twJFAASZe2QRthk9EwYTxv%2B35gHA3lFf2v%2B6NodPJvQi2yu6fNYpvIzeb%2FbJ2fZvQd5AzxkczyfiVFUrVWJfFAQCRw9FBeQXBmpx%2Fq4nsysX5cSMmKRQF1GUN5UeBE&X-Amz-Signature=cc85f9fcaa9bec5097f207b9160120dc123d4a22acd239673ae4ce25e2369180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOLEOBM%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDrxg1gd%2F%2F7o0fV4Vrso61mJyhEl1f1inxMWPu8SkyUpgIgXbAQ2ZM%2BwI2eBDPirJLQhrHAUFuGo7w5%2Fo8aIOH4PocqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzESTz0%2FLH1d%2Fy5WSrcA7yh%2BUJwc3mxcbN8Tj1gELkbGfB4tOYggEWiUHxXa%2BgsnQgNGbY%2FxDqah88GeyrFETwAbL%2B8s9WO7KjsdzZhLne8DPriUuB0e9QBoE5baR3mFtZMJBv5Mrjgbie0NmBzSHfj38XqoH42HxZkzXCQ%2Bw14uZ20rs3fPmvrSc2t%2Fr20BJgZQI1pLE4fUMTcXRj%2BaA49VTpKPmKZRRcJjRovXO5mlpgNluM8Zp28jdVuPowszrFdp3vWu8tdR6vS290mKnU84rvPlgd0baPjbNA4ySSrzR%2F%2BeDjAdDJDAljsk9Fjyg4pCu%2FaZoNf6f3x8Jx0RAvAiQ03kzIXBT61CiFv3gWhY5lvLsWSaNTuVjR5Vb1GxQ74SrqStiZCcywGDAfKTj65xad0GqHIGiiCKR91b7e4CrqwWPNAMFW7q85vfE%2FpHS1mPfLg4d6VoKU4aSSrJjs1OFzy4RsXHU%2BGOfomyj9pRdfVcmYnS5ThZ4ojYVWEtfzfglXj13UHn86JdsR6yvwvAIuZzKY1a4e1sJgUauKNenCUybCSqOEmuZixDdIvfLiD1tGz1GpUmFr%2FBUXX83hshlM8eK4ksmja%2B70cqgfwGDqn4wJM4CmrFPhOS5am7yBhb5%2F01bCZZSm7MPuB0ccGOqUBX6eGMdED%2BTmy%2F%2BvC71k32K3zC%2BaCvsoPcNjzDUu%2BUm1dlXOomw2UrZV7gfwjO0UQJ8AxkmRExsfQsAwiU%2FU%2BmgJYEALZt7twJFAASZe2QRthk9EwYTxv%2B35gHA3lFf2v%2B6NodPJvQi2yu6fNYpvIzeb%2FbJ2fZvQd5AzxkczyfiVFUrVWJfFAQCRw9FBeQXBmpx%2Fq4nsysX5cSMmKRQF1GUN5UeBE&X-Amz-Signature=6b36ef85369b376daf876185b7b61d21bb8072b7466759b0680b32fc939b59d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOLEOBM%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDrxg1gd%2F%2F7o0fV4Vrso61mJyhEl1f1inxMWPu8SkyUpgIgXbAQ2ZM%2BwI2eBDPirJLQhrHAUFuGo7w5%2Fo8aIOH4PocqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzESTz0%2FLH1d%2Fy5WSrcA7yh%2BUJwc3mxcbN8Tj1gELkbGfB4tOYggEWiUHxXa%2BgsnQgNGbY%2FxDqah88GeyrFETwAbL%2B8s9WO7KjsdzZhLne8DPriUuB0e9QBoE5baR3mFtZMJBv5Mrjgbie0NmBzSHfj38XqoH42HxZkzXCQ%2Bw14uZ20rs3fPmvrSc2t%2Fr20BJgZQI1pLE4fUMTcXRj%2BaA49VTpKPmKZRRcJjRovXO5mlpgNluM8Zp28jdVuPowszrFdp3vWu8tdR6vS290mKnU84rvPlgd0baPjbNA4ySSrzR%2F%2BeDjAdDJDAljsk9Fjyg4pCu%2FaZoNf6f3x8Jx0RAvAiQ03kzIXBT61CiFv3gWhY5lvLsWSaNTuVjR5Vb1GxQ74SrqStiZCcywGDAfKTj65xad0GqHIGiiCKR91b7e4CrqwWPNAMFW7q85vfE%2FpHS1mPfLg4d6VoKU4aSSrJjs1OFzy4RsXHU%2BGOfomyj9pRdfVcmYnS5ThZ4ojYVWEtfzfglXj13UHn86JdsR6yvwvAIuZzKY1a4e1sJgUauKNenCUybCSqOEmuZixDdIvfLiD1tGz1GpUmFr%2FBUXX83hshlM8eK4ksmja%2B70cqgfwGDqn4wJM4CmrFPhOS5am7yBhb5%2F01bCZZSm7MPuB0ccGOqUBX6eGMdED%2BTmy%2F%2BvC71k32K3zC%2BaCvsoPcNjzDUu%2BUm1dlXOomw2UrZV7gfwjO0UQJ8AxkmRExsfQsAwiU%2FU%2BmgJYEALZt7twJFAASZe2QRthk9EwYTxv%2B35gHA3lFf2v%2B6NodPJvQi2yu6fNYpvIzeb%2FbJ2fZvQd5AzxkczyfiVFUrVWJfFAQCRw9FBeQXBmpx%2Fq4nsysX5cSMmKRQF1GUN5UeBE&X-Amz-Signature=41bdf66e89514917915989fdc78d85233f628135828f34a5ffffe309beaa873e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOLEOBM%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDrxg1gd%2F%2F7o0fV4Vrso61mJyhEl1f1inxMWPu8SkyUpgIgXbAQ2ZM%2BwI2eBDPirJLQhrHAUFuGo7w5%2Fo8aIOH4PocqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzESTz0%2FLH1d%2Fy5WSrcA7yh%2BUJwc3mxcbN8Tj1gELkbGfB4tOYggEWiUHxXa%2BgsnQgNGbY%2FxDqah88GeyrFETwAbL%2B8s9WO7KjsdzZhLne8DPriUuB0e9QBoE5baR3mFtZMJBv5Mrjgbie0NmBzSHfj38XqoH42HxZkzXCQ%2Bw14uZ20rs3fPmvrSc2t%2Fr20BJgZQI1pLE4fUMTcXRj%2BaA49VTpKPmKZRRcJjRovXO5mlpgNluM8Zp28jdVuPowszrFdp3vWu8tdR6vS290mKnU84rvPlgd0baPjbNA4ySSrzR%2F%2BeDjAdDJDAljsk9Fjyg4pCu%2FaZoNf6f3x8Jx0RAvAiQ03kzIXBT61CiFv3gWhY5lvLsWSaNTuVjR5Vb1GxQ74SrqStiZCcywGDAfKTj65xad0GqHIGiiCKR91b7e4CrqwWPNAMFW7q85vfE%2FpHS1mPfLg4d6VoKU4aSSrJjs1OFzy4RsXHU%2BGOfomyj9pRdfVcmYnS5ThZ4ojYVWEtfzfglXj13UHn86JdsR6yvwvAIuZzKY1a4e1sJgUauKNenCUybCSqOEmuZixDdIvfLiD1tGz1GpUmFr%2FBUXX83hshlM8eK4ksmja%2B70cqgfwGDqn4wJM4CmrFPhOS5am7yBhb5%2F01bCZZSm7MPuB0ccGOqUBX6eGMdED%2BTmy%2F%2BvC71k32K3zC%2BaCvsoPcNjzDUu%2BUm1dlXOomw2UrZV7gfwjO0UQJ8AxkmRExsfQsAwiU%2FU%2BmgJYEALZt7twJFAASZe2QRthk9EwYTxv%2B35gHA3lFf2v%2B6NodPJvQi2yu6fNYpvIzeb%2FbJ2fZvQd5AzxkczyfiVFUrVWJfFAQCRw9FBeQXBmpx%2Fq4nsysX5cSMmKRQF1GUN5UeBE&X-Amz-Signature=cb4e261196df5550b6e81c2c0009aa42f2d867c3c7da9bd41bb084b89710c895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOLEOBM%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDrxg1gd%2F%2F7o0fV4Vrso61mJyhEl1f1inxMWPu8SkyUpgIgXbAQ2ZM%2BwI2eBDPirJLQhrHAUFuGo7w5%2Fo8aIOH4PocqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzESTz0%2FLH1d%2Fy5WSrcA7yh%2BUJwc3mxcbN8Tj1gELkbGfB4tOYggEWiUHxXa%2BgsnQgNGbY%2FxDqah88GeyrFETwAbL%2B8s9WO7KjsdzZhLne8DPriUuB0e9QBoE5baR3mFtZMJBv5Mrjgbie0NmBzSHfj38XqoH42HxZkzXCQ%2Bw14uZ20rs3fPmvrSc2t%2Fr20BJgZQI1pLE4fUMTcXRj%2BaA49VTpKPmKZRRcJjRovXO5mlpgNluM8Zp28jdVuPowszrFdp3vWu8tdR6vS290mKnU84rvPlgd0baPjbNA4ySSrzR%2F%2BeDjAdDJDAljsk9Fjyg4pCu%2FaZoNf6f3x8Jx0RAvAiQ03kzIXBT61CiFv3gWhY5lvLsWSaNTuVjR5Vb1GxQ74SrqStiZCcywGDAfKTj65xad0GqHIGiiCKR91b7e4CrqwWPNAMFW7q85vfE%2FpHS1mPfLg4d6VoKU4aSSrJjs1OFzy4RsXHU%2BGOfomyj9pRdfVcmYnS5ThZ4ojYVWEtfzfglXj13UHn86JdsR6yvwvAIuZzKY1a4e1sJgUauKNenCUybCSqOEmuZixDdIvfLiD1tGz1GpUmFr%2FBUXX83hshlM8eK4ksmja%2B70cqgfwGDqn4wJM4CmrFPhOS5am7yBhb5%2F01bCZZSm7MPuB0ccGOqUBX6eGMdED%2BTmy%2F%2BvC71k32K3zC%2BaCvsoPcNjzDUu%2BUm1dlXOomw2UrZV7gfwjO0UQJ8AxkmRExsfQsAwiU%2FU%2BmgJYEALZt7twJFAASZe2QRthk9EwYTxv%2B35gHA3lFf2v%2B6NodPJvQi2yu6fNYpvIzeb%2FbJ2fZvQd5AzxkczyfiVFUrVWJfFAQCRw9FBeQXBmpx%2Fq4nsysX5cSMmKRQF1GUN5UeBE&X-Amz-Signature=1dc2cb809df01ba3a2d2b5be8638bb5af65379c3cdc056e1d1a53d403c1e8ada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
