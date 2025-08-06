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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ2S5T2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCKOErJ70nUPNkHhyveEE2VoJDTsxcyTGrqU5VKG6ynjwIhAPQZcQgC3WqmPGwspW0BxYlk6jJp9tFZQ62SDe6hraFXKv8DCG4QABoMNjM3NDIzMTgzODA1IgwmtoX0dnJXtt06NYoq3ANF9UsFz1PaJCdtaJwwuB7Fqrz08Sx5YUKvVN5ae2GjXmFnMHbCqY5FkdY9MloseFX1mdHd3VyoR%2B%2Ffmte4R2WKFIbWRhVU%2FMrlU0wDKfih9qBYILVkJ1ahJCmfa7Ry89lbxSM9XdlCFR9n3j1ELAQToDzoMLs2REPbsz5gaOFYbQkDLILrxpVl%2Bt5tGh2vXQ4%2FIeipAt4Sya0vjEkfZyUeX12oE3gyHhj05ap2zsRJKrCY276VF%2FAYy1YVRTKIQUyNAjYsXbzAnNJc0DiEBmqSzW3YbbihXjzoyAVO9%2BrKdmpa7NLJqA9f2ZlC9Ft2zbBIc58rSeMTcfRN6EdsTYg4RoVxBo9VEMoUNqlNLgWgax5bbxROSsyG8DwtGbxvpPhDdyjMrBe65gCorH8BKyLkNTjzpdtEvi92hRzjX4elaJci3a16q64DF1S5oF59niXUuPG4jo8xrAi8RbRvKb6VOdI4zhgZx8T9PJr%2FAidiQWxRwxyYz6sJPVSapxJ28kY2uXBR8l6JRREddmAcxqFYYuCpnVAqGWFHfOqNPDjysQ2mQPQsuxLZQFR4QXBFRY%2FiexuBSnIA1o2b5sv%2FeUMWKMKlj8bhIQ1Jfcw9U4KlFomKdgRtB2FM0TtDTDC0y8vEBjqkAZWfis05oNgbtcvT2o21AGrW0G67i80K7gNe4rXI28NeKltvyO4zjgsbc5tH%2FCksjFoZpLz%2BCanGknuTlXk4PAf5%2B4OhxzYaG%2BSgjZb2B4Rh%2BFpU8We0uHrKX7Lb3pX9MdfzwDkUxtjxov1wJ1VLGVJA%2FDatV6BbWrUFMT%2BlqRFKMAcrpUTn%2FsYe7n52nJZlzwys1DElrEEFwwzAjRmjEeD7fuu1&X-Amz-Signature=df08919e3efcd628989c82f00feb28b00387f3aab543635597afc21a0cb422ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ2S5T2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCKOErJ70nUPNkHhyveEE2VoJDTsxcyTGrqU5VKG6ynjwIhAPQZcQgC3WqmPGwspW0BxYlk6jJp9tFZQ62SDe6hraFXKv8DCG4QABoMNjM3NDIzMTgzODA1IgwmtoX0dnJXtt06NYoq3ANF9UsFz1PaJCdtaJwwuB7Fqrz08Sx5YUKvVN5ae2GjXmFnMHbCqY5FkdY9MloseFX1mdHd3VyoR%2B%2Ffmte4R2WKFIbWRhVU%2FMrlU0wDKfih9qBYILVkJ1ahJCmfa7Ry89lbxSM9XdlCFR9n3j1ELAQToDzoMLs2REPbsz5gaOFYbQkDLILrxpVl%2Bt5tGh2vXQ4%2FIeipAt4Sya0vjEkfZyUeX12oE3gyHhj05ap2zsRJKrCY276VF%2FAYy1YVRTKIQUyNAjYsXbzAnNJc0DiEBmqSzW3YbbihXjzoyAVO9%2BrKdmpa7NLJqA9f2ZlC9Ft2zbBIc58rSeMTcfRN6EdsTYg4RoVxBo9VEMoUNqlNLgWgax5bbxROSsyG8DwtGbxvpPhDdyjMrBe65gCorH8BKyLkNTjzpdtEvi92hRzjX4elaJci3a16q64DF1S5oF59niXUuPG4jo8xrAi8RbRvKb6VOdI4zhgZx8T9PJr%2FAidiQWxRwxyYz6sJPVSapxJ28kY2uXBR8l6JRREddmAcxqFYYuCpnVAqGWFHfOqNPDjysQ2mQPQsuxLZQFR4QXBFRY%2FiexuBSnIA1o2b5sv%2FeUMWKMKlj8bhIQ1Jfcw9U4KlFomKdgRtB2FM0TtDTDC0y8vEBjqkAZWfis05oNgbtcvT2o21AGrW0G67i80K7gNe4rXI28NeKltvyO4zjgsbc5tH%2FCksjFoZpLz%2BCanGknuTlXk4PAf5%2B4OhxzYaG%2BSgjZb2B4Rh%2BFpU8We0uHrKX7Lb3pX9MdfzwDkUxtjxov1wJ1VLGVJA%2FDatV6BbWrUFMT%2BlqRFKMAcrpUTn%2FsYe7n52nJZlzwys1DElrEEFwwzAjRmjEeD7fuu1&X-Amz-Signature=ab7398839cf3b9aef0f1e689a1ea961c32ffd771de39af255cc0ee3f7caba4be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ2S5T2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCKOErJ70nUPNkHhyveEE2VoJDTsxcyTGrqU5VKG6ynjwIhAPQZcQgC3WqmPGwspW0BxYlk6jJp9tFZQ62SDe6hraFXKv8DCG4QABoMNjM3NDIzMTgzODA1IgwmtoX0dnJXtt06NYoq3ANF9UsFz1PaJCdtaJwwuB7Fqrz08Sx5YUKvVN5ae2GjXmFnMHbCqY5FkdY9MloseFX1mdHd3VyoR%2B%2Ffmte4R2WKFIbWRhVU%2FMrlU0wDKfih9qBYILVkJ1ahJCmfa7Ry89lbxSM9XdlCFR9n3j1ELAQToDzoMLs2REPbsz5gaOFYbQkDLILrxpVl%2Bt5tGh2vXQ4%2FIeipAt4Sya0vjEkfZyUeX12oE3gyHhj05ap2zsRJKrCY276VF%2FAYy1YVRTKIQUyNAjYsXbzAnNJc0DiEBmqSzW3YbbihXjzoyAVO9%2BrKdmpa7NLJqA9f2ZlC9Ft2zbBIc58rSeMTcfRN6EdsTYg4RoVxBo9VEMoUNqlNLgWgax5bbxROSsyG8DwtGbxvpPhDdyjMrBe65gCorH8BKyLkNTjzpdtEvi92hRzjX4elaJci3a16q64DF1S5oF59niXUuPG4jo8xrAi8RbRvKb6VOdI4zhgZx8T9PJr%2FAidiQWxRwxyYz6sJPVSapxJ28kY2uXBR8l6JRREddmAcxqFYYuCpnVAqGWFHfOqNPDjysQ2mQPQsuxLZQFR4QXBFRY%2FiexuBSnIA1o2b5sv%2FeUMWKMKlj8bhIQ1Jfcw9U4KlFomKdgRtB2FM0TtDTDC0y8vEBjqkAZWfis05oNgbtcvT2o21AGrW0G67i80K7gNe4rXI28NeKltvyO4zjgsbc5tH%2FCksjFoZpLz%2BCanGknuTlXk4PAf5%2B4OhxzYaG%2BSgjZb2B4Rh%2BFpU8We0uHrKX7Lb3pX9MdfzwDkUxtjxov1wJ1VLGVJA%2FDatV6BbWrUFMT%2BlqRFKMAcrpUTn%2FsYe7n52nJZlzwys1DElrEEFwwzAjRmjEeD7fuu1&X-Amz-Signature=a00f2b342df2ae56b46b9fc577ccc0ce40c22b4af0eb4b601a9ecf8039c81b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ2S5T2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCKOErJ70nUPNkHhyveEE2VoJDTsxcyTGrqU5VKG6ynjwIhAPQZcQgC3WqmPGwspW0BxYlk6jJp9tFZQ62SDe6hraFXKv8DCG4QABoMNjM3NDIzMTgzODA1IgwmtoX0dnJXtt06NYoq3ANF9UsFz1PaJCdtaJwwuB7Fqrz08Sx5YUKvVN5ae2GjXmFnMHbCqY5FkdY9MloseFX1mdHd3VyoR%2B%2Ffmte4R2WKFIbWRhVU%2FMrlU0wDKfih9qBYILVkJ1ahJCmfa7Ry89lbxSM9XdlCFR9n3j1ELAQToDzoMLs2REPbsz5gaOFYbQkDLILrxpVl%2Bt5tGh2vXQ4%2FIeipAt4Sya0vjEkfZyUeX12oE3gyHhj05ap2zsRJKrCY276VF%2FAYy1YVRTKIQUyNAjYsXbzAnNJc0DiEBmqSzW3YbbihXjzoyAVO9%2BrKdmpa7NLJqA9f2ZlC9Ft2zbBIc58rSeMTcfRN6EdsTYg4RoVxBo9VEMoUNqlNLgWgax5bbxROSsyG8DwtGbxvpPhDdyjMrBe65gCorH8BKyLkNTjzpdtEvi92hRzjX4elaJci3a16q64DF1S5oF59niXUuPG4jo8xrAi8RbRvKb6VOdI4zhgZx8T9PJr%2FAidiQWxRwxyYz6sJPVSapxJ28kY2uXBR8l6JRREddmAcxqFYYuCpnVAqGWFHfOqNPDjysQ2mQPQsuxLZQFR4QXBFRY%2FiexuBSnIA1o2b5sv%2FeUMWKMKlj8bhIQ1Jfcw9U4KlFomKdgRtB2FM0TtDTDC0y8vEBjqkAZWfis05oNgbtcvT2o21AGrW0G67i80K7gNe4rXI28NeKltvyO4zjgsbc5tH%2FCksjFoZpLz%2BCanGknuTlXk4PAf5%2B4OhxzYaG%2BSgjZb2B4Rh%2BFpU8We0uHrKX7Lb3pX9MdfzwDkUxtjxov1wJ1VLGVJA%2FDatV6BbWrUFMT%2BlqRFKMAcrpUTn%2FsYe7n52nJZlzwys1DElrEEFwwzAjRmjEeD7fuu1&X-Amz-Signature=9a17bcc113f317dbb19f09014b1c7278e597e845b327b940e7b0c02a2c727754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ2S5T2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCKOErJ70nUPNkHhyveEE2VoJDTsxcyTGrqU5VKG6ynjwIhAPQZcQgC3WqmPGwspW0BxYlk6jJp9tFZQ62SDe6hraFXKv8DCG4QABoMNjM3NDIzMTgzODA1IgwmtoX0dnJXtt06NYoq3ANF9UsFz1PaJCdtaJwwuB7Fqrz08Sx5YUKvVN5ae2GjXmFnMHbCqY5FkdY9MloseFX1mdHd3VyoR%2B%2Ffmte4R2WKFIbWRhVU%2FMrlU0wDKfih9qBYILVkJ1ahJCmfa7Ry89lbxSM9XdlCFR9n3j1ELAQToDzoMLs2REPbsz5gaOFYbQkDLILrxpVl%2Bt5tGh2vXQ4%2FIeipAt4Sya0vjEkfZyUeX12oE3gyHhj05ap2zsRJKrCY276VF%2FAYy1YVRTKIQUyNAjYsXbzAnNJc0DiEBmqSzW3YbbihXjzoyAVO9%2BrKdmpa7NLJqA9f2ZlC9Ft2zbBIc58rSeMTcfRN6EdsTYg4RoVxBo9VEMoUNqlNLgWgax5bbxROSsyG8DwtGbxvpPhDdyjMrBe65gCorH8BKyLkNTjzpdtEvi92hRzjX4elaJci3a16q64DF1S5oF59niXUuPG4jo8xrAi8RbRvKb6VOdI4zhgZx8T9PJr%2FAidiQWxRwxyYz6sJPVSapxJ28kY2uXBR8l6JRREddmAcxqFYYuCpnVAqGWFHfOqNPDjysQ2mQPQsuxLZQFR4QXBFRY%2FiexuBSnIA1o2b5sv%2FeUMWKMKlj8bhIQ1Jfcw9U4KlFomKdgRtB2FM0TtDTDC0y8vEBjqkAZWfis05oNgbtcvT2o21AGrW0G67i80K7gNe4rXI28NeKltvyO4zjgsbc5tH%2FCksjFoZpLz%2BCanGknuTlXk4PAf5%2B4OhxzYaG%2BSgjZb2B4Rh%2BFpU8We0uHrKX7Lb3pX9MdfzwDkUxtjxov1wJ1VLGVJA%2FDatV6BbWrUFMT%2BlqRFKMAcrpUTn%2FsYe7n52nJZlzwys1DElrEEFwwzAjRmjEeD7fuu1&X-Amz-Signature=93266baa98d940de9fe070134218be00693f2de196f9bb282b508e8d18ef644a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ2S5T2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCKOErJ70nUPNkHhyveEE2VoJDTsxcyTGrqU5VKG6ynjwIhAPQZcQgC3WqmPGwspW0BxYlk6jJp9tFZQ62SDe6hraFXKv8DCG4QABoMNjM3NDIzMTgzODA1IgwmtoX0dnJXtt06NYoq3ANF9UsFz1PaJCdtaJwwuB7Fqrz08Sx5YUKvVN5ae2GjXmFnMHbCqY5FkdY9MloseFX1mdHd3VyoR%2B%2Ffmte4R2WKFIbWRhVU%2FMrlU0wDKfih9qBYILVkJ1ahJCmfa7Ry89lbxSM9XdlCFR9n3j1ELAQToDzoMLs2REPbsz5gaOFYbQkDLILrxpVl%2Bt5tGh2vXQ4%2FIeipAt4Sya0vjEkfZyUeX12oE3gyHhj05ap2zsRJKrCY276VF%2FAYy1YVRTKIQUyNAjYsXbzAnNJc0DiEBmqSzW3YbbihXjzoyAVO9%2BrKdmpa7NLJqA9f2ZlC9Ft2zbBIc58rSeMTcfRN6EdsTYg4RoVxBo9VEMoUNqlNLgWgax5bbxROSsyG8DwtGbxvpPhDdyjMrBe65gCorH8BKyLkNTjzpdtEvi92hRzjX4elaJci3a16q64DF1S5oF59niXUuPG4jo8xrAi8RbRvKb6VOdI4zhgZx8T9PJr%2FAidiQWxRwxyYz6sJPVSapxJ28kY2uXBR8l6JRREddmAcxqFYYuCpnVAqGWFHfOqNPDjysQ2mQPQsuxLZQFR4QXBFRY%2FiexuBSnIA1o2b5sv%2FeUMWKMKlj8bhIQ1Jfcw9U4KlFomKdgRtB2FM0TtDTDC0y8vEBjqkAZWfis05oNgbtcvT2o21AGrW0G67i80K7gNe4rXI28NeKltvyO4zjgsbc5tH%2FCksjFoZpLz%2BCanGknuTlXk4PAf5%2B4OhxzYaG%2BSgjZb2B4Rh%2BFpU8We0uHrKX7Lb3pX9MdfzwDkUxtjxov1wJ1VLGVJA%2FDatV6BbWrUFMT%2BlqRFKMAcrpUTn%2FsYe7n52nJZlzwys1DElrEEFwwzAjRmjEeD7fuu1&X-Amz-Signature=2051f856b997f9546181794091eafc62bbee5cc674408ced1d66e1d990ac2532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ2S5T2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCKOErJ70nUPNkHhyveEE2VoJDTsxcyTGrqU5VKG6ynjwIhAPQZcQgC3WqmPGwspW0BxYlk6jJp9tFZQ62SDe6hraFXKv8DCG4QABoMNjM3NDIzMTgzODA1IgwmtoX0dnJXtt06NYoq3ANF9UsFz1PaJCdtaJwwuB7Fqrz08Sx5YUKvVN5ae2GjXmFnMHbCqY5FkdY9MloseFX1mdHd3VyoR%2B%2Ffmte4R2WKFIbWRhVU%2FMrlU0wDKfih9qBYILVkJ1ahJCmfa7Ry89lbxSM9XdlCFR9n3j1ELAQToDzoMLs2REPbsz5gaOFYbQkDLILrxpVl%2Bt5tGh2vXQ4%2FIeipAt4Sya0vjEkfZyUeX12oE3gyHhj05ap2zsRJKrCY276VF%2FAYy1YVRTKIQUyNAjYsXbzAnNJc0DiEBmqSzW3YbbihXjzoyAVO9%2BrKdmpa7NLJqA9f2ZlC9Ft2zbBIc58rSeMTcfRN6EdsTYg4RoVxBo9VEMoUNqlNLgWgax5bbxROSsyG8DwtGbxvpPhDdyjMrBe65gCorH8BKyLkNTjzpdtEvi92hRzjX4elaJci3a16q64DF1S5oF59niXUuPG4jo8xrAi8RbRvKb6VOdI4zhgZx8T9PJr%2FAidiQWxRwxyYz6sJPVSapxJ28kY2uXBR8l6JRREddmAcxqFYYuCpnVAqGWFHfOqNPDjysQ2mQPQsuxLZQFR4QXBFRY%2FiexuBSnIA1o2b5sv%2FeUMWKMKlj8bhIQ1Jfcw9U4KlFomKdgRtB2FM0TtDTDC0y8vEBjqkAZWfis05oNgbtcvT2o21AGrW0G67i80K7gNe4rXI28NeKltvyO4zjgsbc5tH%2FCksjFoZpLz%2BCanGknuTlXk4PAf5%2B4OhxzYaG%2BSgjZb2B4Rh%2BFpU8We0uHrKX7Lb3pX9MdfzwDkUxtjxov1wJ1VLGVJA%2FDatV6BbWrUFMT%2BlqRFKMAcrpUTn%2FsYe7n52nJZlzwys1DElrEEFwwzAjRmjEeD7fuu1&X-Amz-Signature=e4dd6da81d854fc46f67b2cc8e9696f6da0682e23c75a09e8b4c0940fc8a07b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ2S5T2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCKOErJ70nUPNkHhyveEE2VoJDTsxcyTGrqU5VKG6ynjwIhAPQZcQgC3WqmPGwspW0BxYlk6jJp9tFZQ62SDe6hraFXKv8DCG4QABoMNjM3NDIzMTgzODA1IgwmtoX0dnJXtt06NYoq3ANF9UsFz1PaJCdtaJwwuB7Fqrz08Sx5YUKvVN5ae2GjXmFnMHbCqY5FkdY9MloseFX1mdHd3VyoR%2B%2Ffmte4R2WKFIbWRhVU%2FMrlU0wDKfih9qBYILVkJ1ahJCmfa7Ry89lbxSM9XdlCFR9n3j1ELAQToDzoMLs2REPbsz5gaOFYbQkDLILrxpVl%2Bt5tGh2vXQ4%2FIeipAt4Sya0vjEkfZyUeX12oE3gyHhj05ap2zsRJKrCY276VF%2FAYy1YVRTKIQUyNAjYsXbzAnNJc0DiEBmqSzW3YbbihXjzoyAVO9%2BrKdmpa7NLJqA9f2ZlC9Ft2zbBIc58rSeMTcfRN6EdsTYg4RoVxBo9VEMoUNqlNLgWgax5bbxROSsyG8DwtGbxvpPhDdyjMrBe65gCorH8BKyLkNTjzpdtEvi92hRzjX4elaJci3a16q64DF1S5oF59niXUuPG4jo8xrAi8RbRvKb6VOdI4zhgZx8T9PJr%2FAidiQWxRwxyYz6sJPVSapxJ28kY2uXBR8l6JRREddmAcxqFYYuCpnVAqGWFHfOqNPDjysQ2mQPQsuxLZQFR4QXBFRY%2FiexuBSnIA1o2b5sv%2FeUMWKMKlj8bhIQ1Jfcw9U4KlFomKdgRtB2FM0TtDTDC0y8vEBjqkAZWfis05oNgbtcvT2o21AGrW0G67i80K7gNe4rXI28NeKltvyO4zjgsbc5tH%2FCksjFoZpLz%2BCanGknuTlXk4PAf5%2B4OhxzYaG%2BSgjZb2B4Rh%2BFpU8We0uHrKX7Lb3pX9MdfzwDkUxtjxov1wJ1VLGVJA%2FDatV6BbWrUFMT%2BlqRFKMAcrpUTn%2FsYe7n52nJZlzwys1DElrEEFwwzAjRmjEeD7fuu1&X-Amz-Signature=3ff555353a14299b51dbfe47445ed32f341b7c2dcec163c0902d67ab38f154ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ2S5T2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCKOErJ70nUPNkHhyveEE2VoJDTsxcyTGrqU5VKG6ynjwIhAPQZcQgC3WqmPGwspW0BxYlk6jJp9tFZQ62SDe6hraFXKv8DCG4QABoMNjM3NDIzMTgzODA1IgwmtoX0dnJXtt06NYoq3ANF9UsFz1PaJCdtaJwwuB7Fqrz08Sx5YUKvVN5ae2GjXmFnMHbCqY5FkdY9MloseFX1mdHd3VyoR%2B%2Ffmte4R2WKFIbWRhVU%2FMrlU0wDKfih9qBYILVkJ1ahJCmfa7Ry89lbxSM9XdlCFR9n3j1ELAQToDzoMLs2REPbsz5gaOFYbQkDLILrxpVl%2Bt5tGh2vXQ4%2FIeipAt4Sya0vjEkfZyUeX12oE3gyHhj05ap2zsRJKrCY276VF%2FAYy1YVRTKIQUyNAjYsXbzAnNJc0DiEBmqSzW3YbbihXjzoyAVO9%2BrKdmpa7NLJqA9f2ZlC9Ft2zbBIc58rSeMTcfRN6EdsTYg4RoVxBo9VEMoUNqlNLgWgax5bbxROSsyG8DwtGbxvpPhDdyjMrBe65gCorH8BKyLkNTjzpdtEvi92hRzjX4elaJci3a16q64DF1S5oF59niXUuPG4jo8xrAi8RbRvKb6VOdI4zhgZx8T9PJr%2FAidiQWxRwxyYz6sJPVSapxJ28kY2uXBR8l6JRREddmAcxqFYYuCpnVAqGWFHfOqNPDjysQ2mQPQsuxLZQFR4QXBFRY%2FiexuBSnIA1o2b5sv%2FeUMWKMKlj8bhIQ1Jfcw9U4KlFomKdgRtB2FM0TtDTDC0y8vEBjqkAZWfis05oNgbtcvT2o21AGrW0G67i80K7gNe4rXI28NeKltvyO4zjgsbc5tH%2FCksjFoZpLz%2BCanGknuTlXk4PAf5%2B4OhxzYaG%2BSgjZb2B4Rh%2BFpU8We0uHrKX7Lb3pX9MdfzwDkUxtjxov1wJ1VLGVJA%2FDatV6BbWrUFMT%2BlqRFKMAcrpUTn%2FsYe7n52nJZlzwys1DElrEEFwwzAjRmjEeD7fuu1&X-Amz-Signature=a6337b7a8d361bac60d6dfa0ef6b6e4e20ccbbc6d52bc08c61b44caa9969d5d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ2S5T2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCKOErJ70nUPNkHhyveEE2VoJDTsxcyTGrqU5VKG6ynjwIhAPQZcQgC3WqmPGwspW0BxYlk6jJp9tFZQ62SDe6hraFXKv8DCG4QABoMNjM3NDIzMTgzODA1IgwmtoX0dnJXtt06NYoq3ANF9UsFz1PaJCdtaJwwuB7Fqrz08Sx5YUKvVN5ae2GjXmFnMHbCqY5FkdY9MloseFX1mdHd3VyoR%2B%2Ffmte4R2WKFIbWRhVU%2FMrlU0wDKfih9qBYILVkJ1ahJCmfa7Ry89lbxSM9XdlCFR9n3j1ELAQToDzoMLs2REPbsz5gaOFYbQkDLILrxpVl%2Bt5tGh2vXQ4%2FIeipAt4Sya0vjEkfZyUeX12oE3gyHhj05ap2zsRJKrCY276VF%2FAYy1YVRTKIQUyNAjYsXbzAnNJc0DiEBmqSzW3YbbihXjzoyAVO9%2BrKdmpa7NLJqA9f2ZlC9Ft2zbBIc58rSeMTcfRN6EdsTYg4RoVxBo9VEMoUNqlNLgWgax5bbxROSsyG8DwtGbxvpPhDdyjMrBe65gCorH8BKyLkNTjzpdtEvi92hRzjX4elaJci3a16q64DF1S5oF59niXUuPG4jo8xrAi8RbRvKb6VOdI4zhgZx8T9PJr%2FAidiQWxRwxyYz6sJPVSapxJ28kY2uXBR8l6JRREddmAcxqFYYuCpnVAqGWFHfOqNPDjysQ2mQPQsuxLZQFR4QXBFRY%2FiexuBSnIA1o2b5sv%2FeUMWKMKlj8bhIQ1Jfcw9U4KlFomKdgRtB2FM0TtDTDC0y8vEBjqkAZWfis05oNgbtcvT2o21AGrW0G67i80K7gNe4rXI28NeKltvyO4zjgsbc5tH%2FCksjFoZpLz%2BCanGknuTlXk4PAf5%2B4OhxzYaG%2BSgjZb2B4Rh%2BFpU8We0uHrKX7Lb3pX9MdfzwDkUxtjxov1wJ1VLGVJA%2FDatV6BbWrUFMT%2BlqRFKMAcrpUTn%2FsYe7n52nJZlzwys1DElrEEFwwzAjRmjEeD7fuu1&X-Amz-Signature=d17d0580db2e9b0c843c61540501f32c3bc452e274117c9953fcc3830c35557b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ2S5T2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCKOErJ70nUPNkHhyveEE2VoJDTsxcyTGrqU5VKG6ynjwIhAPQZcQgC3WqmPGwspW0BxYlk6jJp9tFZQ62SDe6hraFXKv8DCG4QABoMNjM3NDIzMTgzODA1IgwmtoX0dnJXtt06NYoq3ANF9UsFz1PaJCdtaJwwuB7Fqrz08Sx5YUKvVN5ae2GjXmFnMHbCqY5FkdY9MloseFX1mdHd3VyoR%2B%2Ffmte4R2WKFIbWRhVU%2FMrlU0wDKfih9qBYILVkJ1ahJCmfa7Ry89lbxSM9XdlCFR9n3j1ELAQToDzoMLs2REPbsz5gaOFYbQkDLILrxpVl%2Bt5tGh2vXQ4%2FIeipAt4Sya0vjEkfZyUeX12oE3gyHhj05ap2zsRJKrCY276VF%2FAYy1YVRTKIQUyNAjYsXbzAnNJc0DiEBmqSzW3YbbihXjzoyAVO9%2BrKdmpa7NLJqA9f2ZlC9Ft2zbBIc58rSeMTcfRN6EdsTYg4RoVxBo9VEMoUNqlNLgWgax5bbxROSsyG8DwtGbxvpPhDdyjMrBe65gCorH8BKyLkNTjzpdtEvi92hRzjX4elaJci3a16q64DF1S5oF59niXUuPG4jo8xrAi8RbRvKb6VOdI4zhgZx8T9PJr%2FAidiQWxRwxyYz6sJPVSapxJ28kY2uXBR8l6JRREddmAcxqFYYuCpnVAqGWFHfOqNPDjysQ2mQPQsuxLZQFR4QXBFRY%2FiexuBSnIA1o2b5sv%2FeUMWKMKlj8bhIQ1Jfcw9U4KlFomKdgRtB2FM0TtDTDC0y8vEBjqkAZWfis05oNgbtcvT2o21AGrW0G67i80K7gNe4rXI28NeKltvyO4zjgsbc5tH%2FCksjFoZpLz%2BCanGknuTlXk4PAf5%2B4OhxzYaG%2BSgjZb2B4Rh%2BFpU8We0uHrKX7Lb3pX9MdfzwDkUxtjxov1wJ1VLGVJA%2FDatV6BbWrUFMT%2BlqRFKMAcrpUTn%2FsYe7n52nJZlzwys1DElrEEFwwzAjRmjEeD7fuu1&X-Amz-Signature=029a269a7ea81b5d5137b1829775477e3f6d4f8d16f7218349472036a70052a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ2S5T2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCKOErJ70nUPNkHhyveEE2VoJDTsxcyTGrqU5VKG6ynjwIhAPQZcQgC3WqmPGwspW0BxYlk6jJp9tFZQ62SDe6hraFXKv8DCG4QABoMNjM3NDIzMTgzODA1IgwmtoX0dnJXtt06NYoq3ANF9UsFz1PaJCdtaJwwuB7Fqrz08Sx5YUKvVN5ae2GjXmFnMHbCqY5FkdY9MloseFX1mdHd3VyoR%2B%2Ffmte4R2WKFIbWRhVU%2FMrlU0wDKfih9qBYILVkJ1ahJCmfa7Ry89lbxSM9XdlCFR9n3j1ELAQToDzoMLs2REPbsz5gaOFYbQkDLILrxpVl%2Bt5tGh2vXQ4%2FIeipAt4Sya0vjEkfZyUeX12oE3gyHhj05ap2zsRJKrCY276VF%2FAYy1YVRTKIQUyNAjYsXbzAnNJc0DiEBmqSzW3YbbihXjzoyAVO9%2BrKdmpa7NLJqA9f2ZlC9Ft2zbBIc58rSeMTcfRN6EdsTYg4RoVxBo9VEMoUNqlNLgWgax5bbxROSsyG8DwtGbxvpPhDdyjMrBe65gCorH8BKyLkNTjzpdtEvi92hRzjX4elaJci3a16q64DF1S5oF59niXUuPG4jo8xrAi8RbRvKb6VOdI4zhgZx8T9PJr%2FAidiQWxRwxyYz6sJPVSapxJ28kY2uXBR8l6JRREddmAcxqFYYuCpnVAqGWFHfOqNPDjysQ2mQPQsuxLZQFR4QXBFRY%2FiexuBSnIA1o2b5sv%2FeUMWKMKlj8bhIQ1Jfcw9U4KlFomKdgRtB2FM0TtDTDC0y8vEBjqkAZWfis05oNgbtcvT2o21AGrW0G67i80K7gNe4rXI28NeKltvyO4zjgsbc5tH%2FCksjFoZpLz%2BCanGknuTlXk4PAf5%2B4OhxzYaG%2BSgjZb2B4Rh%2BFpU8We0uHrKX7Lb3pX9MdfzwDkUxtjxov1wJ1VLGVJA%2FDatV6BbWrUFMT%2BlqRFKMAcrpUTn%2FsYe7n52nJZlzwys1DElrEEFwwzAjRmjEeD7fuu1&X-Amz-Signature=43739ab51db18fafee076be375a63f8d398ebd06fabdad750dcb448e890c39d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ2S5T2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCKOErJ70nUPNkHhyveEE2VoJDTsxcyTGrqU5VKG6ynjwIhAPQZcQgC3WqmPGwspW0BxYlk6jJp9tFZQ62SDe6hraFXKv8DCG4QABoMNjM3NDIzMTgzODA1IgwmtoX0dnJXtt06NYoq3ANF9UsFz1PaJCdtaJwwuB7Fqrz08Sx5YUKvVN5ae2GjXmFnMHbCqY5FkdY9MloseFX1mdHd3VyoR%2B%2Ffmte4R2WKFIbWRhVU%2FMrlU0wDKfih9qBYILVkJ1ahJCmfa7Ry89lbxSM9XdlCFR9n3j1ELAQToDzoMLs2REPbsz5gaOFYbQkDLILrxpVl%2Bt5tGh2vXQ4%2FIeipAt4Sya0vjEkfZyUeX12oE3gyHhj05ap2zsRJKrCY276VF%2FAYy1YVRTKIQUyNAjYsXbzAnNJc0DiEBmqSzW3YbbihXjzoyAVO9%2BrKdmpa7NLJqA9f2ZlC9Ft2zbBIc58rSeMTcfRN6EdsTYg4RoVxBo9VEMoUNqlNLgWgax5bbxROSsyG8DwtGbxvpPhDdyjMrBe65gCorH8BKyLkNTjzpdtEvi92hRzjX4elaJci3a16q64DF1S5oF59niXUuPG4jo8xrAi8RbRvKb6VOdI4zhgZx8T9PJr%2FAidiQWxRwxyYz6sJPVSapxJ28kY2uXBR8l6JRREddmAcxqFYYuCpnVAqGWFHfOqNPDjysQ2mQPQsuxLZQFR4QXBFRY%2FiexuBSnIA1o2b5sv%2FeUMWKMKlj8bhIQ1Jfcw9U4KlFomKdgRtB2FM0TtDTDC0y8vEBjqkAZWfis05oNgbtcvT2o21AGrW0G67i80K7gNe4rXI28NeKltvyO4zjgsbc5tH%2FCksjFoZpLz%2BCanGknuTlXk4PAf5%2B4OhxzYaG%2BSgjZb2B4Rh%2BFpU8We0uHrKX7Lb3pX9MdfzwDkUxtjxov1wJ1VLGVJA%2FDatV6BbWrUFMT%2BlqRFKMAcrpUTn%2FsYe7n52nJZlzwys1DElrEEFwwzAjRmjEeD7fuu1&X-Amz-Signature=32210fc1b02b9c497fd1a064e0202907688b7ef8e055b158ec2903d797daf633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
