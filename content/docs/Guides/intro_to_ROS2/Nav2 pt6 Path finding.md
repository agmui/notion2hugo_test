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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U63FGVK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Knw4ApkMigc%2BEpXt0ny2mwfaDP5vzpG9PNhTiVkM5wIhAJYDxZpguz6vWQb5mwwFcPuerXj9Aw%2FM98KsQy3t%2F11eKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj%2F2vy3G%2BNr7nYVb4q3ANWR%2FnQpwDofswM%2F2TMTnH9TDf7YpnLVfJiznqPtC7LRk2DeqcWOmlWYA2P1O560IIcnIff%2FpalA8%2BF4spawRrfllR%2BRf0PzDZOhcEzcY%2FindDtJrIjY6qV1CrsHHPffKXiN6tpZU9nIiRu5SKQLE4MasCT2aCarYVRN6l0mPPJv6Zb57Tq0wthjvhtBV9wdB0TXadd7%2BYtXhqVy9AH2LOT%2BR1iGxzYRokFj50gttZ7alnkK2PjdeS3QxKNE6D4kda%2FvQIV9%2F7LkOLLpf%2FCeF7ZFhChukwUQH%2B92243%2BaOcHd37It3SahujpaoC%2FgpVvYySfJuY2V%2FZCCMXEqETT4frUAe7svc225dcen68R2R8gG06zcI1h4A%2FvqQ6g7WvqxLW6iewbIc9RDJmZij1EiZO9JI8qz9Dq4nH31fTB7xITA7h8MBHW%2FTpsvAmLWzTKHYsXQOke%2BPFzt27TcxsdmyQua95uIOpEERebmz%2FFUcql8cp9SpLABYntktycFt1bwU3JdhmOgc0sXBFHVkqOeEFxw7Y8QVYARmx%2B4hLS6IyAQp1uJhFk6XynEQAbuLDZ6EL7O6jC8TPLp91Aj1aosS84HbxzZr%2B13mXfd8YBKn71MAhYsW5wMLBUJKC4TCVuuPEBjqkAZUnghcoZj0FT9iF02p0ty2Zdbr92A%2BXMO3qsdx9T2bCq470sGyjpmeGVu%2FsyPkcRq2var1zGMz5Jynajh2RlEvjKalG0q0HUuzR2ZAFT0TzBPbMqIEgalYQL6QjbIIWO3%2BYCGUXFnKfOCcnxUVd2%2Ff40uGmF3garByjVAxdagt5nUjVPcxetETCnftmLl%2BZE7CdDwdfJI57mZN0fIYrS%2Bw75ucd&X-Amz-Signature=fce522d45905d2751dcfa4ae5784e3627834245e28432860f67c9053f1df1539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U63FGVK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Knw4ApkMigc%2BEpXt0ny2mwfaDP5vzpG9PNhTiVkM5wIhAJYDxZpguz6vWQb5mwwFcPuerXj9Aw%2FM98KsQy3t%2F11eKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj%2F2vy3G%2BNr7nYVb4q3ANWR%2FnQpwDofswM%2F2TMTnH9TDf7YpnLVfJiznqPtC7LRk2DeqcWOmlWYA2P1O560IIcnIff%2FpalA8%2BF4spawRrfllR%2BRf0PzDZOhcEzcY%2FindDtJrIjY6qV1CrsHHPffKXiN6tpZU9nIiRu5SKQLE4MasCT2aCarYVRN6l0mPPJv6Zb57Tq0wthjvhtBV9wdB0TXadd7%2BYtXhqVy9AH2LOT%2BR1iGxzYRokFj50gttZ7alnkK2PjdeS3QxKNE6D4kda%2FvQIV9%2F7LkOLLpf%2FCeF7ZFhChukwUQH%2B92243%2BaOcHd37It3SahujpaoC%2FgpVvYySfJuY2V%2FZCCMXEqETT4frUAe7svc225dcen68R2R8gG06zcI1h4A%2FvqQ6g7WvqxLW6iewbIc9RDJmZij1EiZO9JI8qz9Dq4nH31fTB7xITA7h8MBHW%2FTpsvAmLWzTKHYsXQOke%2BPFzt27TcxsdmyQua95uIOpEERebmz%2FFUcql8cp9SpLABYntktycFt1bwU3JdhmOgc0sXBFHVkqOeEFxw7Y8QVYARmx%2B4hLS6IyAQp1uJhFk6XynEQAbuLDZ6EL7O6jC8TPLp91Aj1aosS84HbxzZr%2B13mXfd8YBKn71MAhYsW5wMLBUJKC4TCVuuPEBjqkAZUnghcoZj0FT9iF02p0ty2Zdbr92A%2BXMO3qsdx9T2bCq470sGyjpmeGVu%2FsyPkcRq2var1zGMz5Jynajh2RlEvjKalG0q0HUuzR2ZAFT0TzBPbMqIEgalYQL6QjbIIWO3%2BYCGUXFnKfOCcnxUVd2%2Ff40uGmF3garByjVAxdagt5nUjVPcxetETCnftmLl%2BZE7CdDwdfJI57mZN0fIYrS%2Bw75ucd&X-Amz-Signature=21283b57f3caa736692e0d976798dee3d1545be2bd5b1c0749088bc73607ef80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U63FGVK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Knw4ApkMigc%2BEpXt0ny2mwfaDP5vzpG9PNhTiVkM5wIhAJYDxZpguz6vWQb5mwwFcPuerXj9Aw%2FM98KsQy3t%2F11eKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj%2F2vy3G%2BNr7nYVb4q3ANWR%2FnQpwDofswM%2F2TMTnH9TDf7YpnLVfJiznqPtC7LRk2DeqcWOmlWYA2P1O560IIcnIff%2FpalA8%2BF4spawRrfllR%2BRf0PzDZOhcEzcY%2FindDtJrIjY6qV1CrsHHPffKXiN6tpZU9nIiRu5SKQLE4MasCT2aCarYVRN6l0mPPJv6Zb57Tq0wthjvhtBV9wdB0TXadd7%2BYtXhqVy9AH2LOT%2BR1iGxzYRokFj50gttZ7alnkK2PjdeS3QxKNE6D4kda%2FvQIV9%2F7LkOLLpf%2FCeF7ZFhChukwUQH%2B92243%2BaOcHd37It3SahujpaoC%2FgpVvYySfJuY2V%2FZCCMXEqETT4frUAe7svc225dcen68R2R8gG06zcI1h4A%2FvqQ6g7WvqxLW6iewbIc9RDJmZij1EiZO9JI8qz9Dq4nH31fTB7xITA7h8MBHW%2FTpsvAmLWzTKHYsXQOke%2BPFzt27TcxsdmyQua95uIOpEERebmz%2FFUcql8cp9SpLABYntktycFt1bwU3JdhmOgc0sXBFHVkqOeEFxw7Y8QVYARmx%2B4hLS6IyAQp1uJhFk6XynEQAbuLDZ6EL7O6jC8TPLp91Aj1aosS84HbxzZr%2B13mXfd8YBKn71MAhYsW5wMLBUJKC4TCVuuPEBjqkAZUnghcoZj0FT9iF02p0ty2Zdbr92A%2BXMO3qsdx9T2bCq470sGyjpmeGVu%2FsyPkcRq2var1zGMz5Jynajh2RlEvjKalG0q0HUuzR2ZAFT0TzBPbMqIEgalYQL6QjbIIWO3%2BYCGUXFnKfOCcnxUVd2%2Ff40uGmF3garByjVAxdagt5nUjVPcxetETCnftmLl%2BZE7CdDwdfJI57mZN0fIYrS%2Bw75ucd&X-Amz-Signature=e92fe74c5198b0b3b7c7ebe442f9c0e6d14fa884bcd2ff965897869d07f1adef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U63FGVK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Knw4ApkMigc%2BEpXt0ny2mwfaDP5vzpG9PNhTiVkM5wIhAJYDxZpguz6vWQb5mwwFcPuerXj9Aw%2FM98KsQy3t%2F11eKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj%2F2vy3G%2BNr7nYVb4q3ANWR%2FnQpwDofswM%2F2TMTnH9TDf7YpnLVfJiznqPtC7LRk2DeqcWOmlWYA2P1O560IIcnIff%2FpalA8%2BF4spawRrfllR%2BRf0PzDZOhcEzcY%2FindDtJrIjY6qV1CrsHHPffKXiN6tpZU9nIiRu5SKQLE4MasCT2aCarYVRN6l0mPPJv6Zb57Tq0wthjvhtBV9wdB0TXadd7%2BYtXhqVy9AH2LOT%2BR1iGxzYRokFj50gttZ7alnkK2PjdeS3QxKNE6D4kda%2FvQIV9%2F7LkOLLpf%2FCeF7ZFhChukwUQH%2B92243%2BaOcHd37It3SahujpaoC%2FgpVvYySfJuY2V%2FZCCMXEqETT4frUAe7svc225dcen68R2R8gG06zcI1h4A%2FvqQ6g7WvqxLW6iewbIc9RDJmZij1EiZO9JI8qz9Dq4nH31fTB7xITA7h8MBHW%2FTpsvAmLWzTKHYsXQOke%2BPFzt27TcxsdmyQua95uIOpEERebmz%2FFUcql8cp9SpLABYntktycFt1bwU3JdhmOgc0sXBFHVkqOeEFxw7Y8QVYARmx%2B4hLS6IyAQp1uJhFk6XynEQAbuLDZ6EL7O6jC8TPLp91Aj1aosS84HbxzZr%2B13mXfd8YBKn71MAhYsW5wMLBUJKC4TCVuuPEBjqkAZUnghcoZj0FT9iF02p0ty2Zdbr92A%2BXMO3qsdx9T2bCq470sGyjpmeGVu%2FsyPkcRq2var1zGMz5Jynajh2RlEvjKalG0q0HUuzR2ZAFT0TzBPbMqIEgalYQL6QjbIIWO3%2BYCGUXFnKfOCcnxUVd2%2Ff40uGmF3garByjVAxdagt5nUjVPcxetETCnftmLl%2BZE7CdDwdfJI57mZN0fIYrS%2Bw75ucd&X-Amz-Signature=275aff3883a082b6398fbcb54aa20008f40d1ced31ed94bad1b178f89b5f2478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U63FGVK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Knw4ApkMigc%2BEpXt0ny2mwfaDP5vzpG9PNhTiVkM5wIhAJYDxZpguz6vWQb5mwwFcPuerXj9Aw%2FM98KsQy3t%2F11eKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj%2F2vy3G%2BNr7nYVb4q3ANWR%2FnQpwDofswM%2F2TMTnH9TDf7YpnLVfJiznqPtC7LRk2DeqcWOmlWYA2P1O560IIcnIff%2FpalA8%2BF4spawRrfllR%2BRf0PzDZOhcEzcY%2FindDtJrIjY6qV1CrsHHPffKXiN6tpZU9nIiRu5SKQLE4MasCT2aCarYVRN6l0mPPJv6Zb57Tq0wthjvhtBV9wdB0TXadd7%2BYtXhqVy9AH2LOT%2BR1iGxzYRokFj50gttZ7alnkK2PjdeS3QxKNE6D4kda%2FvQIV9%2F7LkOLLpf%2FCeF7ZFhChukwUQH%2B92243%2BaOcHd37It3SahujpaoC%2FgpVvYySfJuY2V%2FZCCMXEqETT4frUAe7svc225dcen68R2R8gG06zcI1h4A%2FvqQ6g7WvqxLW6iewbIc9RDJmZij1EiZO9JI8qz9Dq4nH31fTB7xITA7h8MBHW%2FTpsvAmLWzTKHYsXQOke%2BPFzt27TcxsdmyQua95uIOpEERebmz%2FFUcql8cp9SpLABYntktycFt1bwU3JdhmOgc0sXBFHVkqOeEFxw7Y8QVYARmx%2B4hLS6IyAQp1uJhFk6XynEQAbuLDZ6EL7O6jC8TPLp91Aj1aosS84HbxzZr%2B13mXfd8YBKn71MAhYsW5wMLBUJKC4TCVuuPEBjqkAZUnghcoZj0FT9iF02p0ty2Zdbr92A%2BXMO3qsdx9T2bCq470sGyjpmeGVu%2FsyPkcRq2var1zGMz5Jynajh2RlEvjKalG0q0HUuzR2ZAFT0TzBPbMqIEgalYQL6QjbIIWO3%2BYCGUXFnKfOCcnxUVd2%2Ff40uGmF3garByjVAxdagt5nUjVPcxetETCnftmLl%2BZE7CdDwdfJI57mZN0fIYrS%2Bw75ucd&X-Amz-Signature=9f3b8e52d484dc75aca88aa1ead6c964e4a8676dedaabe4eb414f23dd4fe71de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U63FGVK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Knw4ApkMigc%2BEpXt0ny2mwfaDP5vzpG9PNhTiVkM5wIhAJYDxZpguz6vWQb5mwwFcPuerXj9Aw%2FM98KsQy3t%2F11eKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj%2F2vy3G%2BNr7nYVb4q3ANWR%2FnQpwDofswM%2F2TMTnH9TDf7YpnLVfJiznqPtC7LRk2DeqcWOmlWYA2P1O560IIcnIff%2FpalA8%2BF4spawRrfllR%2BRf0PzDZOhcEzcY%2FindDtJrIjY6qV1CrsHHPffKXiN6tpZU9nIiRu5SKQLE4MasCT2aCarYVRN6l0mPPJv6Zb57Tq0wthjvhtBV9wdB0TXadd7%2BYtXhqVy9AH2LOT%2BR1iGxzYRokFj50gttZ7alnkK2PjdeS3QxKNE6D4kda%2FvQIV9%2F7LkOLLpf%2FCeF7ZFhChukwUQH%2B92243%2BaOcHd37It3SahujpaoC%2FgpVvYySfJuY2V%2FZCCMXEqETT4frUAe7svc225dcen68R2R8gG06zcI1h4A%2FvqQ6g7WvqxLW6iewbIc9RDJmZij1EiZO9JI8qz9Dq4nH31fTB7xITA7h8MBHW%2FTpsvAmLWzTKHYsXQOke%2BPFzt27TcxsdmyQua95uIOpEERebmz%2FFUcql8cp9SpLABYntktycFt1bwU3JdhmOgc0sXBFHVkqOeEFxw7Y8QVYARmx%2B4hLS6IyAQp1uJhFk6XynEQAbuLDZ6EL7O6jC8TPLp91Aj1aosS84HbxzZr%2B13mXfd8YBKn71MAhYsW5wMLBUJKC4TCVuuPEBjqkAZUnghcoZj0FT9iF02p0ty2Zdbr92A%2BXMO3qsdx9T2bCq470sGyjpmeGVu%2FsyPkcRq2var1zGMz5Jynajh2RlEvjKalG0q0HUuzR2ZAFT0TzBPbMqIEgalYQL6QjbIIWO3%2BYCGUXFnKfOCcnxUVd2%2Ff40uGmF3garByjVAxdagt5nUjVPcxetETCnftmLl%2BZE7CdDwdfJI57mZN0fIYrS%2Bw75ucd&X-Amz-Signature=fd5166557de1ee28335d0c13783b81f6e939d720fa5d7c5c67a98ade159a7e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U63FGVK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Knw4ApkMigc%2BEpXt0ny2mwfaDP5vzpG9PNhTiVkM5wIhAJYDxZpguz6vWQb5mwwFcPuerXj9Aw%2FM98KsQy3t%2F11eKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj%2F2vy3G%2BNr7nYVb4q3ANWR%2FnQpwDofswM%2F2TMTnH9TDf7YpnLVfJiznqPtC7LRk2DeqcWOmlWYA2P1O560IIcnIff%2FpalA8%2BF4spawRrfllR%2BRf0PzDZOhcEzcY%2FindDtJrIjY6qV1CrsHHPffKXiN6tpZU9nIiRu5SKQLE4MasCT2aCarYVRN6l0mPPJv6Zb57Tq0wthjvhtBV9wdB0TXadd7%2BYtXhqVy9AH2LOT%2BR1iGxzYRokFj50gttZ7alnkK2PjdeS3QxKNE6D4kda%2FvQIV9%2F7LkOLLpf%2FCeF7ZFhChukwUQH%2B92243%2BaOcHd37It3SahujpaoC%2FgpVvYySfJuY2V%2FZCCMXEqETT4frUAe7svc225dcen68R2R8gG06zcI1h4A%2FvqQ6g7WvqxLW6iewbIc9RDJmZij1EiZO9JI8qz9Dq4nH31fTB7xITA7h8MBHW%2FTpsvAmLWzTKHYsXQOke%2BPFzt27TcxsdmyQua95uIOpEERebmz%2FFUcql8cp9SpLABYntktycFt1bwU3JdhmOgc0sXBFHVkqOeEFxw7Y8QVYARmx%2B4hLS6IyAQp1uJhFk6XynEQAbuLDZ6EL7O6jC8TPLp91Aj1aosS84HbxzZr%2B13mXfd8YBKn71MAhYsW5wMLBUJKC4TCVuuPEBjqkAZUnghcoZj0FT9iF02p0ty2Zdbr92A%2BXMO3qsdx9T2bCq470sGyjpmeGVu%2FsyPkcRq2var1zGMz5Jynajh2RlEvjKalG0q0HUuzR2ZAFT0TzBPbMqIEgalYQL6QjbIIWO3%2BYCGUXFnKfOCcnxUVd2%2Ff40uGmF3garByjVAxdagt5nUjVPcxetETCnftmLl%2BZE7CdDwdfJI57mZN0fIYrS%2Bw75ucd&X-Amz-Signature=3d2c674c1f9968d2216fa4a6874348ff764b80f281accc749eae510da6f01cf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U63FGVK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Knw4ApkMigc%2BEpXt0ny2mwfaDP5vzpG9PNhTiVkM5wIhAJYDxZpguz6vWQb5mwwFcPuerXj9Aw%2FM98KsQy3t%2F11eKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj%2F2vy3G%2BNr7nYVb4q3ANWR%2FnQpwDofswM%2F2TMTnH9TDf7YpnLVfJiznqPtC7LRk2DeqcWOmlWYA2P1O560IIcnIff%2FpalA8%2BF4spawRrfllR%2BRf0PzDZOhcEzcY%2FindDtJrIjY6qV1CrsHHPffKXiN6tpZU9nIiRu5SKQLE4MasCT2aCarYVRN6l0mPPJv6Zb57Tq0wthjvhtBV9wdB0TXadd7%2BYtXhqVy9AH2LOT%2BR1iGxzYRokFj50gttZ7alnkK2PjdeS3QxKNE6D4kda%2FvQIV9%2F7LkOLLpf%2FCeF7ZFhChukwUQH%2B92243%2BaOcHd37It3SahujpaoC%2FgpVvYySfJuY2V%2FZCCMXEqETT4frUAe7svc225dcen68R2R8gG06zcI1h4A%2FvqQ6g7WvqxLW6iewbIc9RDJmZij1EiZO9JI8qz9Dq4nH31fTB7xITA7h8MBHW%2FTpsvAmLWzTKHYsXQOke%2BPFzt27TcxsdmyQua95uIOpEERebmz%2FFUcql8cp9SpLABYntktycFt1bwU3JdhmOgc0sXBFHVkqOeEFxw7Y8QVYARmx%2B4hLS6IyAQp1uJhFk6XynEQAbuLDZ6EL7O6jC8TPLp91Aj1aosS84HbxzZr%2B13mXfd8YBKn71MAhYsW5wMLBUJKC4TCVuuPEBjqkAZUnghcoZj0FT9iF02p0ty2Zdbr92A%2BXMO3qsdx9T2bCq470sGyjpmeGVu%2FsyPkcRq2var1zGMz5Jynajh2RlEvjKalG0q0HUuzR2ZAFT0TzBPbMqIEgalYQL6QjbIIWO3%2BYCGUXFnKfOCcnxUVd2%2Ff40uGmF3garByjVAxdagt5nUjVPcxetETCnftmLl%2BZE7CdDwdfJI57mZN0fIYrS%2Bw75ucd&X-Amz-Signature=fe18de4409a74487ffd36a0e19102d885681ce44497d407bbb572ad918bec5e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U63FGVK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Knw4ApkMigc%2BEpXt0ny2mwfaDP5vzpG9PNhTiVkM5wIhAJYDxZpguz6vWQb5mwwFcPuerXj9Aw%2FM98KsQy3t%2F11eKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj%2F2vy3G%2BNr7nYVb4q3ANWR%2FnQpwDofswM%2F2TMTnH9TDf7YpnLVfJiznqPtC7LRk2DeqcWOmlWYA2P1O560IIcnIff%2FpalA8%2BF4spawRrfllR%2BRf0PzDZOhcEzcY%2FindDtJrIjY6qV1CrsHHPffKXiN6tpZU9nIiRu5SKQLE4MasCT2aCarYVRN6l0mPPJv6Zb57Tq0wthjvhtBV9wdB0TXadd7%2BYtXhqVy9AH2LOT%2BR1iGxzYRokFj50gttZ7alnkK2PjdeS3QxKNE6D4kda%2FvQIV9%2F7LkOLLpf%2FCeF7ZFhChukwUQH%2B92243%2BaOcHd37It3SahujpaoC%2FgpVvYySfJuY2V%2FZCCMXEqETT4frUAe7svc225dcen68R2R8gG06zcI1h4A%2FvqQ6g7WvqxLW6iewbIc9RDJmZij1EiZO9JI8qz9Dq4nH31fTB7xITA7h8MBHW%2FTpsvAmLWzTKHYsXQOke%2BPFzt27TcxsdmyQua95uIOpEERebmz%2FFUcql8cp9SpLABYntktycFt1bwU3JdhmOgc0sXBFHVkqOeEFxw7Y8QVYARmx%2B4hLS6IyAQp1uJhFk6XynEQAbuLDZ6EL7O6jC8TPLp91Aj1aosS84HbxzZr%2B13mXfd8YBKn71MAhYsW5wMLBUJKC4TCVuuPEBjqkAZUnghcoZj0FT9iF02p0ty2Zdbr92A%2BXMO3qsdx9T2bCq470sGyjpmeGVu%2FsyPkcRq2var1zGMz5Jynajh2RlEvjKalG0q0HUuzR2ZAFT0TzBPbMqIEgalYQL6QjbIIWO3%2BYCGUXFnKfOCcnxUVd2%2Ff40uGmF3garByjVAxdagt5nUjVPcxetETCnftmLl%2BZE7CdDwdfJI57mZN0fIYrS%2Bw75ucd&X-Amz-Signature=3241565701987215efeac9da9223f2f048eef10ac0ce6859bf58db15a83d37a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U63FGVK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Knw4ApkMigc%2BEpXt0ny2mwfaDP5vzpG9PNhTiVkM5wIhAJYDxZpguz6vWQb5mwwFcPuerXj9Aw%2FM98KsQy3t%2F11eKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj%2F2vy3G%2BNr7nYVb4q3ANWR%2FnQpwDofswM%2F2TMTnH9TDf7YpnLVfJiznqPtC7LRk2DeqcWOmlWYA2P1O560IIcnIff%2FpalA8%2BF4spawRrfllR%2BRf0PzDZOhcEzcY%2FindDtJrIjY6qV1CrsHHPffKXiN6tpZU9nIiRu5SKQLE4MasCT2aCarYVRN6l0mPPJv6Zb57Tq0wthjvhtBV9wdB0TXadd7%2BYtXhqVy9AH2LOT%2BR1iGxzYRokFj50gttZ7alnkK2PjdeS3QxKNE6D4kda%2FvQIV9%2F7LkOLLpf%2FCeF7ZFhChukwUQH%2B92243%2BaOcHd37It3SahujpaoC%2FgpVvYySfJuY2V%2FZCCMXEqETT4frUAe7svc225dcen68R2R8gG06zcI1h4A%2FvqQ6g7WvqxLW6iewbIc9RDJmZij1EiZO9JI8qz9Dq4nH31fTB7xITA7h8MBHW%2FTpsvAmLWzTKHYsXQOke%2BPFzt27TcxsdmyQua95uIOpEERebmz%2FFUcql8cp9SpLABYntktycFt1bwU3JdhmOgc0sXBFHVkqOeEFxw7Y8QVYARmx%2B4hLS6IyAQp1uJhFk6XynEQAbuLDZ6EL7O6jC8TPLp91Aj1aosS84HbxzZr%2B13mXfd8YBKn71MAhYsW5wMLBUJKC4TCVuuPEBjqkAZUnghcoZj0FT9iF02p0ty2Zdbr92A%2BXMO3qsdx9T2bCq470sGyjpmeGVu%2FsyPkcRq2var1zGMz5Jynajh2RlEvjKalG0q0HUuzR2ZAFT0TzBPbMqIEgalYQL6QjbIIWO3%2BYCGUXFnKfOCcnxUVd2%2Ff40uGmF3garByjVAxdagt5nUjVPcxetETCnftmLl%2BZE7CdDwdfJI57mZN0fIYrS%2Bw75ucd&X-Amz-Signature=2a868a216c2e040f9647a9413d64dbae968e8d76ae0161764035596efd82c7fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U63FGVK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Knw4ApkMigc%2BEpXt0ny2mwfaDP5vzpG9PNhTiVkM5wIhAJYDxZpguz6vWQb5mwwFcPuerXj9Aw%2FM98KsQy3t%2F11eKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj%2F2vy3G%2BNr7nYVb4q3ANWR%2FnQpwDofswM%2F2TMTnH9TDf7YpnLVfJiznqPtC7LRk2DeqcWOmlWYA2P1O560IIcnIff%2FpalA8%2BF4spawRrfllR%2BRf0PzDZOhcEzcY%2FindDtJrIjY6qV1CrsHHPffKXiN6tpZU9nIiRu5SKQLE4MasCT2aCarYVRN6l0mPPJv6Zb57Tq0wthjvhtBV9wdB0TXadd7%2BYtXhqVy9AH2LOT%2BR1iGxzYRokFj50gttZ7alnkK2PjdeS3QxKNE6D4kda%2FvQIV9%2F7LkOLLpf%2FCeF7ZFhChukwUQH%2B92243%2BaOcHd37It3SahujpaoC%2FgpVvYySfJuY2V%2FZCCMXEqETT4frUAe7svc225dcen68R2R8gG06zcI1h4A%2FvqQ6g7WvqxLW6iewbIc9RDJmZij1EiZO9JI8qz9Dq4nH31fTB7xITA7h8MBHW%2FTpsvAmLWzTKHYsXQOke%2BPFzt27TcxsdmyQua95uIOpEERebmz%2FFUcql8cp9SpLABYntktycFt1bwU3JdhmOgc0sXBFHVkqOeEFxw7Y8QVYARmx%2B4hLS6IyAQp1uJhFk6XynEQAbuLDZ6EL7O6jC8TPLp91Aj1aosS84HbxzZr%2B13mXfd8YBKn71MAhYsW5wMLBUJKC4TCVuuPEBjqkAZUnghcoZj0FT9iF02p0ty2Zdbr92A%2BXMO3qsdx9T2bCq470sGyjpmeGVu%2FsyPkcRq2var1zGMz5Jynajh2RlEvjKalG0q0HUuzR2ZAFT0TzBPbMqIEgalYQL6QjbIIWO3%2BYCGUXFnKfOCcnxUVd2%2Ff40uGmF3garByjVAxdagt5nUjVPcxetETCnftmLl%2BZE7CdDwdfJI57mZN0fIYrS%2Bw75ucd&X-Amz-Signature=49c2a310a340ccf5c14714202b1d84e4a3677892e47b905487a239d85616ec09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U63FGVK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Knw4ApkMigc%2BEpXt0ny2mwfaDP5vzpG9PNhTiVkM5wIhAJYDxZpguz6vWQb5mwwFcPuerXj9Aw%2FM98KsQy3t%2F11eKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj%2F2vy3G%2BNr7nYVb4q3ANWR%2FnQpwDofswM%2F2TMTnH9TDf7YpnLVfJiznqPtC7LRk2DeqcWOmlWYA2P1O560IIcnIff%2FpalA8%2BF4spawRrfllR%2BRf0PzDZOhcEzcY%2FindDtJrIjY6qV1CrsHHPffKXiN6tpZU9nIiRu5SKQLE4MasCT2aCarYVRN6l0mPPJv6Zb57Tq0wthjvhtBV9wdB0TXadd7%2BYtXhqVy9AH2LOT%2BR1iGxzYRokFj50gttZ7alnkK2PjdeS3QxKNE6D4kda%2FvQIV9%2F7LkOLLpf%2FCeF7ZFhChukwUQH%2B92243%2BaOcHd37It3SahujpaoC%2FgpVvYySfJuY2V%2FZCCMXEqETT4frUAe7svc225dcen68R2R8gG06zcI1h4A%2FvqQ6g7WvqxLW6iewbIc9RDJmZij1EiZO9JI8qz9Dq4nH31fTB7xITA7h8MBHW%2FTpsvAmLWzTKHYsXQOke%2BPFzt27TcxsdmyQua95uIOpEERebmz%2FFUcql8cp9SpLABYntktycFt1bwU3JdhmOgc0sXBFHVkqOeEFxw7Y8QVYARmx%2B4hLS6IyAQp1uJhFk6XynEQAbuLDZ6EL7O6jC8TPLp91Aj1aosS84HbxzZr%2B13mXfd8YBKn71MAhYsW5wMLBUJKC4TCVuuPEBjqkAZUnghcoZj0FT9iF02p0ty2Zdbr92A%2BXMO3qsdx9T2bCq470sGyjpmeGVu%2FsyPkcRq2var1zGMz5Jynajh2RlEvjKalG0q0HUuzR2ZAFT0TzBPbMqIEgalYQL6QjbIIWO3%2BYCGUXFnKfOCcnxUVd2%2Ff40uGmF3garByjVAxdagt5nUjVPcxetETCnftmLl%2BZE7CdDwdfJI57mZN0fIYrS%2Bw75ucd&X-Amz-Signature=97401f8e3e34e0aaa47ab55485b69376844bdbb5644235d1b7ccf699eedb627e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U63FGVK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Knw4ApkMigc%2BEpXt0ny2mwfaDP5vzpG9PNhTiVkM5wIhAJYDxZpguz6vWQb5mwwFcPuerXj9Aw%2FM98KsQy3t%2F11eKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj%2F2vy3G%2BNr7nYVb4q3ANWR%2FnQpwDofswM%2F2TMTnH9TDf7YpnLVfJiznqPtC7LRk2DeqcWOmlWYA2P1O560IIcnIff%2FpalA8%2BF4spawRrfllR%2BRf0PzDZOhcEzcY%2FindDtJrIjY6qV1CrsHHPffKXiN6tpZU9nIiRu5SKQLE4MasCT2aCarYVRN6l0mPPJv6Zb57Tq0wthjvhtBV9wdB0TXadd7%2BYtXhqVy9AH2LOT%2BR1iGxzYRokFj50gttZ7alnkK2PjdeS3QxKNE6D4kda%2FvQIV9%2F7LkOLLpf%2FCeF7ZFhChukwUQH%2B92243%2BaOcHd37It3SahujpaoC%2FgpVvYySfJuY2V%2FZCCMXEqETT4frUAe7svc225dcen68R2R8gG06zcI1h4A%2FvqQ6g7WvqxLW6iewbIc9RDJmZij1EiZO9JI8qz9Dq4nH31fTB7xITA7h8MBHW%2FTpsvAmLWzTKHYsXQOke%2BPFzt27TcxsdmyQua95uIOpEERebmz%2FFUcql8cp9SpLABYntktycFt1bwU3JdhmOgc0sXBFHVkqOeEFxw7Y8QVYARmx%2B4hLS6IyAQp1uJhFk6XynEQAbuLDZ6EL7O6jC8TPLp91Aj1aosS84HbxzZr%2B13mXfd8YBKn71MAhYsW5wMLBUJKC4TCVuuPEBjqkAZUnghcoZj0FT9iF02p0ty2Zdbr92A%2BXMO3qsdx9T2bCq470sGyjpmeGVu%2FsyPkcRq2var1zGMz5Jynajh2RlEvjKalG0q0HUuzR2ZAFT0TzBPbMqIEgalYQL6QjbIIWO3%2BYCGUXFnKfOCcnxUVd2%2Ff40uGmF3garByjVAxdagt5nUjVPcxetETCnftmLl%2BZE7CdDwdfJI57mZN0fIYrS%2Bw75ucd&X-Amz-Signature=d33cddd0cfa8da0f33f2d2961d0160f02796eda9b9119ed93765be5fb619a1e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
