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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMJVFMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA13QQp15gf3rnEUAHeX5g%2BbIm7Qvugy7DVKBEKfbMigIhALPXT9fhy8T8uYmQK1GJ9A3j80IdUw1UGEsAboiXwPzDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmWfl7G7QECO6MUswq3APqGKmXwZXVA7w2S5jV0nczXWdmRcWJMARL3W7H329Tp8yY1Cygi1Avc8bbh9FSF0xmjRkgelRByW8kAp%2FKhhiFgCG2m1N6ZU0gGT4J%2F8NpSEssm7%2Fkf85mix0wbyB7FYKUJpgeiQmm1vAMWSw5nFozOiim6sRsqDKeUSHZAqyATF586PCPS9W5oSTTyChVwRCMQbqNFYLBxuRKvPwBG0U3PjhUiiOzMqz9fCsqYqFbu73PBejKtocC0k5QFqHjxRS%2FOGRCpIxox5CIAjLD90apdKVCCRkpZktW4TTsawyfVdNBWj%2BOzWcCyONKvQqXT9UEJGIU9dhW1aVOAwKi%2BU2kWmEUN%2BxP2S2eptHv9V2hR8vASY1Vb%2B2uykqsR%2BF6qjZfw4ffJNd%2BWSdazZGEwwnoFoj2o5LWEr79t8q6I%2B7iZ94Huu%2FqAgHFbzbgPYMY4K6BYcq0tiIbjmimzknsMlomB2y6IyKrJ7OPWd9eHvVoeIB15FDhmVFkT7qn9uwVhQvZv528B7xa%2FHYJYndZHCUnDuZ8wSvhrdDNLE7Y0ttl9BtsoVrf2nYi2KKuzpPi%2BWLbl6TJEh1PUp%2FBUE5NMPleTa%2Bb5qgeZlTGZx%2BhizqZRIQOl7abHyyK%2BljoCzDWzqzEBjqkAU4p1SeTeanNDEwdQ3827y2yDOte1lyv%2BKFTDlZdLVR7k6afvj%2F0VKbh0k7Ys7p%2BKfISACh%2F381zUc9OssesHKhX2vtNsKLUhD%2BMPCORMu1%2FbUW5RxTiHMvUDUJZNLKIlKNK33ATW%2Fu6wIjb14%2FLXaAzVs6KP%2F%2FSPuoeMFctSRrbqa4nTPXKJoKtzKGOtsk2CWOr8YM5yd4dPvKhQy2lVS1eauvA&X-Amz-Signature=f15df84ce4a2f1c3d7a1ba107db2642f8ab426e1f10fd27988e97e89a41510bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMJVFMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA13QQp15gf3rnEUAHeX5g%2BbIm7Qvugy7DVKBEKfbMigIhALPXT9fhy8T8uYmQK1GJ9A3j80IdUw1UGEsAboiXwPzDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmWfl7G7QECO6MUswq3APqGKmXwZXVA7w2S5jV0nczXWdmRcWJMARL3W7H329Tp8yY1Cygi1Avc8bbh9FSF0xmjRkgelRByW8kAp%2FKhhiFgCG2m1N6ZU0gGT4J%2F8NpSEssm7%2Fkf85mix0wbyB7FYKUJpgeiQmm1vAMWSw5nFozOiim6sRsqDKeUSHZAqyATF586PCPS9W5oSTTyChVwRCMQbqNFYLBxuRKvPwBG0U3PjhUiiOzMqz9fCsqYqFbu73PBejKtocC0k5QFqHjxRS%2FOGRCpIxox5CIAjLD90apdKVCCRkpZktW4TTsawyfVdNBWj%2BOzWcCyONKvQqXT9UEJGIU9dhW1aVOAwKi%2BU2kWmEUN%2BxP2S2eptHv9V2hR8vASY1Vb%2B2uykqsR%2BF6qjZfw4ffJNd%2BWSdazZGEwwnoFoj2o5LWEr79t8q6I%2B7iZ94Huu%2FqAgHFbzbgPYMY4K6BYcq0tiIbjmimzknsMlomB2y6IyKrJ7OPWd9eHvVoeIB15FDhmVFkT7qn9uwVhQvZv528B7xa%2FHYJYndZHCUnDuZ8wSvhrdDNLE7Y0ttl9BtsoVrf2nYi2KKuzpPi%2BWLbl6TJEh1PUp%2FBUE5NMPleTa%2Bb5qgeZlTGZx%2BhizqZRIQOl7abHyyK%2BljoCzDWzqzEBjqkAU4p1SeTeanNDEwdQ3827y2yDOte1lyv%2BKFTDlZdLVR7k6afvj%2F0VKbh0k7Ys7p%2BKfISACh%2F381zUc9OssesHKhX2vtNsKLUhD%2BMPCORMu1%2FbUW5RxTiHMvUDUJZNLKIlKNK33ATW%2Fu6wIjb14%2FLXaAzVs6KP%2F%2FSPuoeMFctSRrbqa4nTPXKJoKtzKGOtsk2CWOr8YM5yd4dPvKhQy2lVS1eauvA&X-Amz-Signature=b4b3e8e3c32a89d2d886fb748fc2ccbfd656c7e2ca139539f4a0f317035e9165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMJVFMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA13QQp15gf3rnEUAHeX5g%2BbIm7Qvugy7DVKBEKfbMigIhALPXT9fhy8T8uYmQK1GJ9A3j80IdUw1UGEsAboiXwPzDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmWfl7G7QECO6MUswq3APqGKmXwZXVA7w2S5jV0nczXWdmRcWJMARL3W7H329Tp8yY1Cygi1Avc8bbh9FSF0xmjRkgelRByW8kAp%2FKhhiFgCG2m1N6ZU0gGT4J%2F8NpSEssm7%2Fkf85mix0wbyB7FYKUJpgeiQmm1vAMWSw5nFozOiim6sRsqDKeUSHZAqyATF586PCPS9W5oSTTyChVwRCMQbqNFYLBxuRKvPwBG0U3PjhUiiOzMqz9fCsqYqFbu73PBejKtocC0k5QFqHjxRS%2FOGRCpIxox5CIAjLD90apdKVCCRkpZktW4TTsawyfVdNBWj%2BOzWcCyONKvQqXT9UEJGIU9dhW1aVOAwKi%2BU2kWmEUN%2BxP2S2eptHv9V2hR8vASY1Vb%2B2uykqsR%2BF6qjZfw4ffJNd%2BWSdazZGEwwnoFoj2o5LWEr79t8q6I%2B7iZ94Huu%2FqAgHFbzbgPYMY4K6BYcq0tiIbjmimzknsMlomB2y6IyKrJ7OPWd9eHvVoeIB15FDhmVFkT7qn9uwVhQvZv528B7xa%2FHYJYndZHCUnDuZ8wSvhrdDNLE7Y0ttl9BtsoVrf2nYi2KKuzpPi%2BWLbl6TJEh1PUp%2FBUE5NMPleTa%2Bb5qgeZlTGZx%2BhizqZRIQOl7abHyyK%2BljoCzDWzqzEBjqkAU4p1SeTeanNDEwdQ3827y2yDOte1lyv%2BKFTDlZdLVR7k6afvj%2F0VKbh0k7Ys7p%2BKfISACh%2F381zUc9OssesHKhX2vtNsKLUhD%2BMPCORMu1%2FbUW5RxTiHMvUDUJZNLKIlKNK33ATW%2Fu6wIjb14%2FLXaAzVs6KP%2F%2FSPuoeMFctSRrbqa4nTPXKJoKtzKGOtsk2CWOr8YM5yd4dPvKhQy2lVS1eauvA&X-Amz-Signature=e3b4f9de5e489c361a11a0582a01a0603e8e86db4973bab15d1c4559dcf65224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMJVFMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA13QQp15gf3rnEUAHeX5g%2BbIm7Qvugy7DVKBEKfbMigIhALPXT9fhy8T8uYmQK1GJ9A3j80IdUw1UGEsAboiXwPzDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmWfl7G7QECO6MUswq3APqGKmXwZXVA7w2S5jV0nczXWdmRcWJMARL3W7H329Tp8yY1Cygi1Avc8bbh9FSF0xmjRkgelRByW8kAp%2FKhhiFgCG2m1N6ZU0gGT4J%2F8NpSEssm7%2Fkf85mix0wbyB7FYKUJpgeiQmm1vAMWSw5nFozOiim6sRsqDKeUSHZAqyATF586PCPS9W5oSTTyChVwRCMQbqNFYLBxuRKvPwBG0U3PjhUiiOzMqz9fCsqYqFbu73PBejKtocC0k5QFqHjxRS%2FOGRCpIxox5CIAjLD90apdKVCCRkpZktW4TTsawyfVdNBWj%2BOzWcCyONKvQqXT9UEJGIU9dhW1aVOAwKi%2BU2kWmEUN%2BxP2S2eptHv9V2hR8vASY1Vb%2B2uykqsR%2BF6qjZfw4ffJNd%2BWSdazZGEwwnoFoj2o5LWEr79t8q6I%2B7iZ94Huu%2FqAgHFbzbgPYMY4K6BYcq0tiIbjmimzknsMlomB2y6IyKrJ7OPWd9eHvVoeIB15FDhmVFkT7qn9uwVhQvZv528B7xa%2FHYJYndZHCUnDuZ8wSvhrdDNLE7Y0ttl9BtsoVrf2nYi2KKuzpPi%2BWLbl6TJEh1PUp%2FBUE5NMPleTa%2Bb5qgeZlTGZx%2BhizqZRIQOl7abHyyK%2BljoCzDWzqzEBjqkAU4p1SeTeanNDEwdQ3827y2yDOte1lyv%2BKFTDlZdLVR7k6afvj%2F0VKbh0k7Ys7p%2BKfISACh%2F381zUc9OssesHKhX2vtNsKLUhD%2BMPCORMu1%2FbUW5RxTiHMvUDUJZNLKIlKNK33ATW%2Fu6wIjb14%2FLXaAzVs6KP%2F%2FSPuoeMFctSRrbqa4nTPXKJoKtzKGOtsk2CWOr8YM5yd4dPvKhQy2lVS1eauvA&X-Amz-Signature=de2e08d872a9e7ca9c2fa25d9d0b4a27b448cb5d67a5d50f2879a70d2dc028dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMJVFMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA13QQp15gf3rnEUAHeX5g%2BbIm7Qvugy7DVKBEKfbMigIhALPXT9fhy8T8uYmQK1GJ9A3j80IdUw1UGEsAboiXwPzDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmWfl7G7QECO6MUswq3APqGKmXwZXVA7w2S5jV0nczXWdmRcWJMARL3W7H329Tp8yY1Cygi1Avc8bbh9FSF0xmjRkgelRByW8kAp%2FKhhiFgCG2m1N6ZU0gGT4J%2F8NpSEssm7%2Fkf85mix0wbyB7FYKUJpgeiQmm1vAMWSw5nFozOiim6sRsqDKeUSHZAqyATF586PCPS9W5oSTTyChVwRCMQbqNFYLBxuRKvPwBG0U3PjhUiiOzMqz9fCsqYqFbu73PBejKtocC0k5QFqHjxRS%2FOGRCpIxox5CIAjLD90apdKVCCRkpZktW4TTsawyfVdNBWj%2BOzWcCyONKvQqXT9UEJGIU9dhW1aVOAwKi%2BU2kWmEUN%2BxP2S2eptHv9V2hR8vASY1Vb%2B2uykqsR%2BF6qjZfw4ffJNd%2BWSdazZGEwwnoFoj2o5LWEr79t8q6I%2B7iZ94Huu%2FqAgHFbzbgPYMY4K6BYcq0tiIbjmimzknsMlomB2y6IyKrJ7OPWd9eHvVoeIB15FDhmVFkT7qn9uwVhQvZv528B7xa%2FHYJYndZHCUnDuZ8wSvhrdDNLE7Y0ttl9BtsoVrf2nYi2KKuzpPi%2BWLbl6TJEh1PUp%2FBUE5NMPleTa%2Bb5qgeZlTGZx%2BhizqZRIQOl7abHyyK%2BljoCzDWzqzEBjqkAU4p1SeTeanNDEwdQ3827y2yDOte1lyv%2BKFTDlZdLVR7k6afvj%2F0VKbh0k7Ys7p%2BKfISACh%2F381zUc9OssesHKhX2vtNsKLUhD%2BMPCORMu1%2FbUW5RxTiHMvUDUJZNLKIlKNK33ATW%2Fu6wIjb14%2FLXaAzVs6KP%2F%2FSPuoeMFctSRrbqa4nTPXKJoKtzKGOtsk2CWOr8YM5yd4dPvKhQy2lVS1eauvA&X-Amz-Signature=1ee3c4d871324d80552e82e03aaae4bcdb64ef5324b10550f8d43fab824e0cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMJVFMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA13QQp15gf3rnEUAHeX5g%2BbIm7Qvugy7DVKBEKfbMigIhALPXT9fhy8T8uYmQK1GJ9A3j80IdUw1UGEsAboiXwPzDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmWfl7G7QECO6MUswq3APqGKmXwZXVA7w2S5jV0nczXWdmRcWJMARL3W7H329Tp8yY1Cygi1Avc8bbh9FSF0xmjRkgelRByW8kAp%2FKhhiFgCG2m1N6ZU0gGT4J%2F8NpSEssm7%2Fkf85mix0wbyB7FYKUJpgeiQmm1vAMWSw5nFozOiim6sRsqDKeUSHZAqyATF586PCPS9W5oSTTyChVwRCMQbqNFYLBxuRKvPwBG0U3PjhUiiOzMqz9fCsqYqFbu73PBejKtocC0k5QFqHjxRS%2FOGRCpIxox5CIAjLD90apdKVCCRkpZktW4TTsawyfVdNBWj%2BOzWcCyONKvQqXT9UEJGIU9dhW1aVOAwKi%2BU2kWmEUN%2BxP2S2eptHv9V2hR8vASY1Vb%2B2uykqsR%2BF6qjZfw4ffJNd%2BWSdazZGEwwnoFoj2o5LWEr79t8q6I%2B7iZ94Huu%2FqAgHFbzbgPYMY4K6BYcq0tiIbjmimzknsMlomB2y6IyKrJ7OPWd9eHvVoeIB15FDhmVFkT7qn9uwVhQvZv528B7xa%2FHYJYndZHCUnDuZ8wSvhrdDNLE7Y0ttl9BtsoVrf2nYi2KKuzpPi%2BWLbl6TJEh1PUp%2FBUE5NMPleTa%2Bb5qgeZlTGZx%2BhizqZRIQOl7abHyyK%2BljoCzDWzqzEBjqkAU4p1SeTeanNDEwdQ3827y2yDOte1lyv%2BKFTDlZdLVR7k6afvj%2F0VKbh0k7Ys7p%2BKfISACh%2F381zUc9OssesHKhX2vtNsKLUhD%2BMPCORMu1%2FbUW5RxTiHMvUDUJZNLKIlKNK33ATW%2Fu6wIjb14%2FLXaAzVs6KP%2F%2FSPuoeMFctSRrbqa4nTPXKJoKtzKGOtsk2CWOr8YM5yd4dPvKhQy2lVS1eauvA&X-Amz-Signature=e64777627d473f793c566b72d5d19070440e3ff1cf2cd5fffc2a92221366d654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMJVFMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA13QQp15gf3rnEUAHeX5g%2BbIm7Qvugy7DVKBEKfbMigIhALPXT9fhy8T8uYmQK1GJ9A3j80IdUw1UGEsAboiXwPzDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmWfl7G7QECO6MUswq3APqGKmXwZXVA7w2S5jV0nczXWdmRcWJMARL3W7H329Tp8yY1Cygi1Avc8bbh9FSF0xmjRkgelRByW8kAp%2FKhhiFgCG2m1N6ZU0gGT4J%2F8NpSEssm7%2Fkf85mix0wbyB7FYKUJpgeiQmm1vAMWSw5nFozOiim6sRsqDKeUSHZAqyATF586PCPS9W5oSTTyChVwRCMQbqNFYLBxuRKvPwBG0U3PjhUiiOzMqz9fCsqYqFbu73PBejKtocC0k5QFqHjxRS%2FOGRCpIxox5CIAjLD90apdKVCCRkpZktW4TTsawyfVdNBWj%2BOzWcCyONKvQqXT9UEJGIU9dhW1aVOAwKi%2BU2kWmEUN%2BxP2S2eptHv9V2hR8vASY1Vb%2B2uykqsR%2BF6qjZfw4ffJNd%2BWSdazZGEwwnoFoj2o5LWEr79t8q6I%2B7iZ94Huu%2FqAgHFbzbgPYMY4K6BYcq0tiIbjmimzknsMlomB2y6IyKrJ7OPWd9eHvVoeIB15FDhmVFkT7qn9uwVhQvZv528B7xa%2FHYJYndZHCUnDuZ8wSvhrdDNLE7Y0ttl9BtsoVrf2nYi2KKuzpPi%2BWLbl6TJEh1PUp%2FBUE5NMPleTa%2Bb5qgeZlTGZx%2BhizqZRIQOl7abHyyK%2BljoCzDWzqzEBjqkAU4p1SeTeanNDEwdQ3827y2yDOte1lyv%2BKFTDlZdLVR7k6afvj%2F0VKbh0k7Ys7p%2BKfISACh%2F381zUc9OssesHKhX2vtNsKLUhD%2BMPCORMu1%2FbUW5RxTiHMvUDUJZNLKIlKNK33ATW%2Fu6wIjb14%2FLXaAzVs6KP%2F%2FSPuoeMFctSRrbqa4nTPXKJoKtzKGOtsk2CWOr8YM5yd4dPvKhQy2lVS1eauvA&X-Amz-Signature=718068409f7bf30fb806070b3b7b0cf2099bc5395ecf5865dca8d931a6ec9b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMJVFMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA13QQp15gf3rnEUAHeX5g%2BbIm7Qvugy7DVKBEKfbMigIhALPXT9fhy8T8uYmQK1GJ9A3j80IdUw1UGEsAboiXwPzDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmWfl7G7QECO6MUswq3APqGKmXwZXVA7w2S5jV0nczXWdmRcWJMARL3W7H329Tp8yY1Cygi1Avc8bbh9FSF0xmjRkgelRByW8kAp%2FKhhiFgCG2m1N6ZU0gGT4J%2F8NpSEssm7%2Fkf85mix0wbyB7FYKUJpgeiQmm1vAMWSw5nFozOiim6sRsqDKeUSHZAqyATF586PCPS9W5oSTTyChVwRCMQbqNFYLBxuRKvPwBG0U3PjhUiiOzMqz9fCsqYqFbu73PBejKtocC0k5QFqHjxRS%2FOGRCpIxox5CIAjLD90apdKVCCRkpZktW4TTsawyfVdNBWj%2BOzWcCyONKvQqXT9UEJGIU9dhW1aVOAwKi%2BU2kWmEUN%2BxP2S2eptHv9V2hR8vASY1Vb%2B2uykqsR%2BF6qjZfw4ffJNd%2BWSdazZGEwwnoFoj2o5LWEr79t8q6I%2B7iZ94Huu%2FqAgHFbzbgPYMY4K6BYcq0tiIbjmimzknsMlomB2y6IyKrJ7OPWd9eHvVoeIB15FDhmVFkT7qn9uwVhQvZv528B7xa%2FHYJYndZHCUnDuZ8wSvhrdDNLE7Y0ttl9BtsoVrf2nYi2KKuzpPi%2BWLbl6TJEh1PUp%2FBUE5NMPleTa%2Bb5qgeZlTGZx%2BhizqZRIQOl7abHyyK%2BljoCzDWzqzEBjqkAU4p1SeTeanNDEwdQ3827y2yDOte1lyv%2BKFTDlZdLVR7k6afvj%2F0VKbh0k7Ys7p%2BKfISACh%2F381zUc9OssesHKhX2vtNsKLUhD%2BMPCORMu1%2FbUW5RxTiHMvUDUJZNLKIlKNK33ATW%2Fu6wIjb14%2FLXaAzVs6KP%2F%2FSPuoeMFctSRrbqa4nTPXKJoKtzKGOtsk2CWOr8YM5yd4dPvKhQy2lVS1eauvA&X-Amz-Signature=35897702473dccf475f1021f87130dc3eeb7b0d31699ab381dd6308100b4bf51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMJVFMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA13QQp15gf3rnEUAHeX5g%2BbIm7Qvugy7DVKBEKfbMigIhALPXT9fhy8T8uYmQK1GJ9A3j80IdUw1UGEsAboiXwPzDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmWfl7G7QECO6MUswq3APqGKmXwZXVA7w2S5jV0nczXWdmRcWJMARL3W7H329Tp8yY1Cygi1Avc8bbh9FSF0xmjRkgelRByW8kAp%2FKhhiFgCG2m1N6ZU0gGT4J%2F8NpSEssm7%2Fkf85mix0wbyB7FYKUJpgeiQmm1vAMWSw5nFozOiim6sRsqDKeUSHZAqyATF586PCPS9W5oSTTyChVwRCMQbqNFYLBxuRKvPwBG0U3PjhUiiOzMqz9fCsqYqFbu73PBejKtocC0k5QFqHjxRS%2FOGRCpIxox5CIAjLD90apdKVCCRkpZktW4TTsawyfVdNBWj%2BOzWcCyONKvQqXT9UEJGIU9dhW1aVOAwKi%2BU2kWmEUN%2BxP2S2eptHv9V2hR8vASY1Vb%2B2uykqsR%2BF6qjZfw4ffJNd%2BWSdazZGEwwnoFoj2o5LWEr79t8q6I%2B7iZ94Huu%2FqAgHFbzbgPYMY4K6BYcq0tiIbjmimzknsMlomB2y6IyKrJ7OPWd9eHvVoeIB15FDhmVFkT7qn9uwVhQvZv528B7xa%2FHYJYndZHCUnDuZ8wSvhrdDNLE7Y0ttl9BtsoVrf2nYi2KKuzpPi%2BWLbl6TJEh1PUp%2FBUE5NMPleTa%2Bb5qgeZlTGZx%2BhizqZRIQOl7abHyyK%2BljoCzDWzqzEBjqkAU4p1SeTeanNDEwdQ3827y2yDOte1lyv%2BKFTDlZdLVR7k6afvj%2F0VKbh0k7Ys7p%2BKfISACh%2F381zUc9OssesHKhX2vtNsKLUhD%2BMPCORMu1%2FbUW5RxTiHMvUDUJZNLKIlKNK33ATW%2Fu6wIjb14%2FLXaAzVs6KP%2F%2FSPuoeMFctSRrbqa4nTPXKJoKtzKGOtsk2CWOr8YM5yd4dPvKhQy2lVS1eauvA&X-Amz-Signature=69b588dfda8deed771aa35a9f52f75946257998f3bfe8b95fdb34815a08be0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMJVFMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA13QQp15gf3rnEUAHeX5g%2BbIm7Qvugy7DVKBEKfbMigIhALPXT9fhy8T8uYmQK1GJ9A3j80IdUw1UGEsAboiXwPzDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmWfl7G7QECO6MUswq3APqGKmXwZXVA7w2S5jV0nczXWdmRcWJMARL3W7H329Tp8yY1Cygi1Avc8bbh9FSF0xmjRkgelRByW8kAp%2FKhhiFgCG2m1N6ZU0gGT4J%2F8NpSEssm7%2Fkf85mix0wbyB7FYKUJpgeiQmm1vAMWSw5nFozOiim6sRsqDKeUSHZAqyATF586PCPS9W5oSTTyChVwRCMQbqNFYLBxuRKvPwBG0U3PjhUiiOzMqz9fCsqYqFbu73PBejKtocC0k5QFqHjxRS%2FOGRCpIxox5CIAjLD90apdKVCCRkpZktW4TTsawyfVdNBWj%2BOzWcCyONKvQqXT9UEJGIU9dhW1aVOAwKi%2BU2kWmEUN%2BxP2S2eptHv9V2hR8vASY1Vb%2B2uykqsR%2BF6qjZfw4ffJNd%2BWSdazZGEwwnoFoj2o5LWEr79t8q6I%2B7iZ94Huu%2FqAgHFbzbgPYMY4K6BYcq0tiIbjmimzknsMlomB2y6IyKrJ7OPWd9eHvVoeIB15FDhmVFkT7qn9uwVhQvZv528B7xa%2FHYJYndZHCUnDuZ8wSvhrdDNLE7Y0ttl9BtsoVrf2nYi2KKuzpPi%2BWLbl6TJEh1PUp%2FBUE5NMPleTa%2Bb5qgeZlTGZx%2BhizqZRIQOl7abHyyK%2BljoCzDWzqzEBjqkAU4p1SeTeanNDEwdQ3827y2yDOte1lyv%2BKFTDlZdLVR7k6afvj%2F0VKbh0k7Ys7p%2BKfISACh%2F381zUc9OssesHKhX2vtNsKLUhD%2BMPCORMu1%2FbUW5RxTiHMvUDUJZNLKIlKNK33ATW%2Fu6wIjb14%2FLXaAzVs6KP%2F%2FSPuoeMFctSRrbqa4nTPXKJoKtzKGOtsk2CWOr8YM5yd4dPvKhQy2lVS1eauvA&X-Amz-Signature=9535a8403b5bfdc205e3ebd47c6d3846f4e9452ad9e7024c99db31836c01d231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMJVFMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA13QQp15gf3rnEUAHeX5g%2BbIm7Qvugy7DVKBEKfbMigIhALPXT9fhy8T8uYmQK1GJ9A3j80IdUw1UGEsAboiXwPzDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmWfl7G7QECO6MUswq3APqGKmXwZXVA7w2S5jV0nczXWdmRcWJMARL3W7H329Tp8yY1Cygi1Avc8bbh9FSF0xmjRkgelRByW8kAp%2FKhhiFgCG2m1N6ZU0gGT4J%2F8NpSEssm7%2Fkf85mix0wbyB7FYKUJpgeiQmm1vAMWSw5nFozOiim6sRsqDKeUSHZAqyATF586PCPS9W5oSTTyChVwRCMQbqNFYLBxuRKvPwBG0U3PjhUiiOzMqz9fCsqYqFbu73PBejKtocC0k5QFqHjxRS%2FOGRCpIxox5CIAjLD90apdKVCCRkpZktW4TTsawyfVdNBWj%2BOzWcCyONKvQqXT9UEJGIU9dhW1aVOAwKi%2BU2kWmEUN%2BxP2S2eptHv9V2hR8vASY1Vb%2B2uykqsR%2BF6qjZfw4ffJNd%2BWSdazZGEwwnoFoj2o5LWEr79t8q6I%2B7iZ94Huu%2FqAgHFbzbgPYMY4K6BYcq0tiIbjmimzknsMlomB2y6IyKrJ7OPWd9eHvVoeIB15FDhmVFkT7qn9uwVhQvZv528B7xa%2FHYJYndZHCUnDuZ8wSvhrdDNLE7Y0ttl9BtsoVrf2nYi2KKuzpPi%2BWLbl6TJEh1PUp%2FBUE5NMPleTa%2Bb5qgeZlTGZx%2BhizqZRIQOl7abHyyK%2BljoCzDWzqzEBjqkAU4p1SeTeanNDEwdQ3827y2yDOte1lyv%2BKFTDlZdLVR7k6afvj%2F0VKbh0k7Ys7p%2BKfISACh%2F381zUc9OssesHKhX2vtNsKLUhD%2BMPCORMu1%2FbUW5RxTiHMvUDUJZNLKIlKNK33ATW%2Fu6wIjb14%2FLXaAzVs6KP%2F%2FSPuoeMFctSRrbqa4nTPXKJoKtzKGOtsk2CWOr8YM5yd4dPvKhQy2lVS1eauvA&X-Amz-Signature=2df86b42d355fb30aaac72a471d8cddcac94d80d28f7f84be6877afa710eae4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMJVFMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA13QQp15gf3rnEUAHeX5g%2BbIm7Qvugy7DVKBEKfbMigIhALPXT9fhy8T8uYmQK1GJ9A3j80IdUw1UGEsAboiXwPzDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmWfl7G7QECO6MUswq3APqGKmXwZXVA7w2S5jV0nczXWdmRcWJMARL3W7H329Tp8yY1Cygi1Avc8bbh9FSF0xmjRkgelRByW8kAp%2FKhhiFgCG2m1N6ZU0gGT4J%2F8NpSEssm7%2Fkf85mix0wbyB7FYKUJpgeiQmm1vAMWSw5nFozOiim6sRsqDKeUSHZAqyATF586PCPS9W5oSTTyChVwRCMQbqNFYLBxuRKvPwBG0U3PjhUiiOzMqz9fCsqYqFbu73PBejKtocC0k5QFqHjxRS%2FOGRCpIxox5CIAjLD90apdKVCCRkpZktW4TTsawyfVdNBWj%2BOzWcCyONKvQqXT9UEJGIU9dhW1aVOAwKi%2BU2kWmEUN%2BxP2S2eptHv9V2hR8vASY1Vb%2B2uykqsR%2BF6qjZfw4ffJNd%2BWSdazZGEwwnoFoj2o5LWEr79t8q6I%2B7iZ94Huu%2FqAgHFbzbgPYMY4K6BYcq0tiIbjmimzknsMlomB2y6IyKrJ7OPWd9eHvVoeIB15FDhmVFkT7qn9uwVhQvZv528B7xa%2FHYJYndZHCUnDuZ8wSvhrdDNLE7Y0ttl9BtsoVrf2nYi2KKuzpPi%2BWLbl6TJEh1PUp%2FBUE5NMPleTa%2Bb5qgeZlTGZx%2BhizqZRIQOl7abHyyK%2BljoCzDWzqzEBjqkAU4p1SeTeanNDEwdQ3827y2yDOte1lyv%2BKFTDlZdLVR7k6afvj%2F0VKbh0k7Ys7p%2BKfISACh%2F381zUc9OssesHKhX2vtNsKLUhD%2BMPCORMu1%2FbUW5RxTiHMvUDUJZNLKIlKNK33ATW%2Fu6wIjb14%2FLXaAzVs6KP%2F%2FSPuoeMFctSRrbqa4nTPXKJoKtzKGOtsk2CWOr8YM5yd4dPvKhQy2lVS1eauvA&X-Amz-Signature=d2be73ff9d112a7bc1339bd62207958c04abe2b54df98763fbe1854aee1062ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMJVFMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA13QQp15gf3rnEUAHeX5g%2BbIm7Qvugy7DVKBEKfbMigIhALPXT9fhy8T8uYmQK1GJ9A3j80IdUw1UGEsAboiXwPzDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmWfl7G7QECO6MUswq3APqGKmXwZXVA7w2S5jV0nczXWdmRcWJMARL3W7H329Tp8yY1Cygi1Avc8bbh9FSF0xmjRkgelRByW8kAp%2FKhhiFgCG2m1N6ZU0gGT4J%2F8NpSEssm7%2Fkf85mix0wbyB7FYKUJpgeiQmm1vAMWSw5nFozOiim6sRsqDKeUSHZAqyATF586PCPS9W5oSTTyChVwRCMQbqNFYLBxuRKvPwBG0U3PjhUiiOzMqz9fCsqYqFbu73PBejKtocC0k5QFqHjxRS%2FOGRCpIxox5CIAjLD90apdKVCCRkpZktW4TTsawyfVdNBWj%2BOzWcCyONKvQqXT9UEJGIU9dhW1aVOAwKi%2BU2kWmEUN%2BxP2S2eptHv9V2hR8vASY1Vb%2B2uykqsR%2BF6qjZfw4ffJNd%2BWSdazZGEwwnoFoj2o5LWEr79t8q6I%2B7iZ94Huu%2FqAgHFbzbgPYMY4K6BYcq0tiIbjmimzknsMlomB2y6IyKrJ7OPWd9eHvVoeIB15FDhmVFkT7qn9uwVhQvZv528B7xa%2FHYJYndZHCUnDuZ8wSvhrdDNLE7Y0ttl9BtsoVrf2nYi2KKuzpPi%2BWLbl6TJEh1PUp%2FBUE5NMPleTa%2Bb5qgeZlTGZx%2BhizqZRIQOl7abHyyK%2BljoCzDWzqzEBjqkAU4p1SeTeanNDEwdQ3827y2yDOte1lyv%2BKFTDlZdLVR7k6afvj%2F0VKbh0k7Ys7p%2BKfISACh%2F381zUc9OssesHKhX2vtNsKLUhD%2BMPCORMu1%2FbUW5RxTiHMvUDUJZNLKIlKNK33ATW%2Fu6wIjb14%2FLXaAzVs6KP%2F%2FSPuoeMFctSRrbqa4nTPXKJoKtzKGOtsk2CWOr8YM5yd4dPvKhQy2lVS1eauvA&X-Amz-Signature=8970244b88a70962639532ac7179d6bbee52d730954847e48f9ee81ab0b0828b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
