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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHBFSUL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC5b35sQntLB%2Bl0udm35bpbOCFOXXIDXj%2FSScbGBORU0AiEA0HodPn123gKljrXI6gjjVgU2LqPwhvherFkRfxV7AScq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDA2G6rA9PV2R3RKLHircA3N3V6JIbpmPC%2BtnHbyIOCKafo4ZOZAErY4o%2BspRBg158w5re5RXvTHccJmcuaOoe9QQVaaBSiqUHBZyeH7ntuDxzob%2BwfugLuMQ%2FbDdtzWpV7KMIyoxpejhM95%2Br9KbUCk4dkOuKxd3s7HqQBQJ37WjnNqMFfT6FY%2FviIW3WzlRYj6tXUMmZqwmSZyns9hIiOe%2FPU8cF%2FKvjGaanZr85jdOXqrZDZ08WRVNocEKygKR%2FKOLLfF8xC04DazcrbLRAyAzR449eh09KrabVhYEJnA%2BmowiUSrZ%2FZSxRnZV0K5Vc6Fj4XfnKESbcMQOE3Tbpzu0KqDbEiXBtjkZ4Nky%2FFsCdZZQvoL2ARptBiXkrtlLklAZzumgexqrsbbZjKlhTcqIsBhmCqClJRVj4TYplj%2Btog4cuRkofw0olbuQDWp9G%2F1mCCy49KFZx2rBhGQPPVX%2Fi5BjdWvxYF4coSTGGoXOz%2FJIBy2QyRW7kMghIPe5QSz4DekyvihpUTIc6PCd0i6T4bMpTFq11W4OzQTUIsrpbsUkrNsqDQQfnK%2FLwG5tqiHMp1mXCDjWf2Q1AZOgjUz3WBi9asvdeG7UXgVY8tfWRKeogiSYip6jSpTi1NCu47Nk3DphpybdDxYoMLzMyMQGOqUBAAJ3rWivW7ukcQXNXH6ozkFveI%2BQAFnAXRcOFj48sxnU11r5c8rkVbUTaQfqj47papJlaJWvSioxK5X976aEJ5%2BqUaRbq%2BOb1X8vd0lk%2BpM%2F3DFFY2O4vJvUSvZ3b8eUYFPZ%2F3wt%2BvB0LGqVhvpHZwid4g%2FLrA2rk9ksBphtq10Q8%2Ftx6d8qQ2w5%2FEPTZI2uS7h1te93olZPqDMORg%2FKiBk8gLaH&X-Amz-Signature=1009c8e3be817e501b990215e33f76869251c658ab1ec11687ec05c1f1ef99de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHBFSUL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC5b35sQntLB%2Bl0udm35bpbOCFOXXIDXj%2FSScbGBORU0AiEA0HodPn123gKljrXI6gjjVgU2LqPwhvherFkRfxV7AScq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDA2G6rA9PV2R3RKLHircA3N3V6JIbpmPC%2BtnHbyIOCKafo4ZOZAErY4o%2BspRBg158w5re5RXvTHccJmcuaOoe9QQVaaBSiqUHBZyeH7ntuDxzob%2BwfugLuMQ%2FbDdtzWpV7KMIyoxpejhM95%2Br9KbUCk4dkOuKxd3s7HqQBQJ37WjnNqMFfT6FY%2FviIW3WzlRYj6tXUMmZqwmSZyns9hIiOe%2FPU8cF%2FKvjGaanZr85jdOXqrZDZ08WRVNocEKygKR%2FKOLLfF8xC04DazcrbLRAyAzR449eh09KrabVhYEJnA%2BmowiUSrZ%2FZSxRnZV0K5Vc6Fj4XfnKESbcMQOE3Tbpzu0KqDbEiXBtjkZ4Nky%2FFsCdZZQvoL2ARptBiXkrtlLklAZzumgexqrsbbZjKlhTcqIsBhmCqClJRVj4TYplj%2Btog4cuRkofw0olbuQDWp9G%2F1mCCy49KFZx2rBhGQPPVX%2Fi5BjdWvxYF4coSTGGoXOz%2FJIBy2QyRW7kMghIPe5QSz4DekyvihpUTIc6PCd0i6T4bMpTFq11W4OzQTUIsrpbsUkrNsqDQQfnK%2FLwG5tqiHMp1mXCDjWf2Q1AZOgjUz3WBi9asvdeG7UXgVY8tfWRKeogiSYip6jSpTi1NCu47Nk3DphpybdDxYoMLzMyMQGOqUBAAJ3rWivW7ukcQXNXH6ozkFveI%2BQAFnAXRcOFj48sxnU11r5c8rkVbUTaQfqj47papJlaJWvSioxK5X976aEJ5%2BqUaRbq%2BOb1X8vd0lk%2BpM%2F3DFFY2O4vJvUSvZ3b8eUYFPZ%2F3wt%2BvB0LGqVhvpHZwid4g%2FLrA2rk9ksBphtq10Q8%2Ftx6d8qQ2w5%2FEPTZI2uS7h1te93olZPqDMORg%2FKiBk8gLaH&X-Amz-Signature=e997ad35556ace34f30694dfea6ef7cb5eb5202193e30a8f98df91a971bb6cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHBFSUL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC5b35sQntLB%2Bl0udm35bpbOCFOXXIDXj%2FSScbGBORU0AiEA0HodPn123gKljrXI6gjjVgU2LqPwhvherFkRfxV7AScq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDA2G6rA9PV2R3RKLHircA3N3V6JIbpmPC%2BtnHbyIOCKafo4ZOZAErY4o%2BspRBg158w5re5RXvTHccJmcuaOoe9QQVaaBSiqUHBZyeH7ntuDxzob%2BwfugLuMQ%2FbDdtzWpV7KMIyoxpejhM95%2Br9KbUCk4dkOuKxd3s7HqQBQJ37WjnNqMFfT6FY%2FviIW3WzlRYj6tXUMmZqwmSZyns9hIiOe%2FPU8cF%2FKvjGaanZr85jdOXqrZDZ08WRVNocEKygKR%2FKOLLfF8xC04DazcrbLRAyAzR449eh09KrabVhYEJnA%2BmowiUSrZ%2FZSxRnZV0K5Vc6Fj4XfnKESbcMQOE3Tbpzu0KqDbEiXBtjkZ4Nky%2FFsCdZZQvoL2ARptBiXkrtlLklAZzumgexqrsbbZjKlhTcqIsBhmCqClJRVj4TYplj%2Btog4cuRkofw0olbuQDWp9G%2F1mCCy49KFZx2rBhGQPPVX%2Fi5BjdWvxYF4coSTGGoXOz%2FJIBy2QyRW7kMghIPe5QSz4DekyvihpUTIc6PCd0i6T4bMpTFq11W4OzQTUIsrpbsUkrNsqDQQfnK%2FLwG5tqiHMp1mXCDjWf2Q1AZOgjUz3WBi9asvdeG7UXgVY8tfWRKeogiSYip6jSpTi1NCu47Nk3DphpybdDxYoMLzMyMQGOqUBAAJ3rWivW7ukcQXNXH6ozkFveI%2BQAFnAXRcOFj48sxnU11r5c8rkVbUTaQfqj47papJlaJWvSioxK5X976aEJ5%2BqUaRbq%2BOb1X8vd0lk%2BpM%2F3DFFY2O4vJvUSvZ3b8eUYFPZ%2F3wt%2BvB0LGqVhvpHZwid4g%2FLrA2rk9ksBphtq10Q8%2Ftx6d8qQ2w5%2FEPTZI2uS7h1te93olZPqDMORg%2FKiBk8gLaH&X-Amz-Signature=794edae572bd0d59fb2e5d319146c99ab6520aa086bff9538165a6cd272a5ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHBFSUL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC5b35sQntLB%2Bl0udm35bpbOCFOXXIDXj%2FSScbGBORU0AiEA0HodPn123gKljrXI6gjjVgU2LqPwhvherFkRfxV7AScq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDA2G6rA9PV2R3RKLHircA3N3V6JIbpmPC%2BtnHbyIOCKafo4ZOZAErY4o%2BspRBg158w5re5RXvTHccJmcuaOoe9QQVaaBSiqUHBZyeH7ntuDxzob%2BwfugLuMQ%2FbDdtzWpV7KMIyoxpejhM95%2Br9KbUCk4dkOuKxd3s7HqQBQJ37WjnNqMFfT6FY%2FviIW3WzlRYj6tXUMmZqwmSZyns9hIiOe%2FPU8cF%2FKvjGaanZr85jdOXqrZDZ08WRVNocEKygKR%2FKOLLfF8xC04DazcrbLRAyAzR449eh09KrabVhYEJnA%2BmowiUSrZ%2FZSxRnZV0K5Vc6Fj4XfnKESbcMQOE3Tbpzu0KqDbEiXBtjkZ4Nky%2FFsCdZZQvoL2ARptBiXkrtlLklAZzumgexqrsbbZjKlhTcqIsBhmCqClJRVj4TYplj%2Btog4cuRkofw0olbuQDWp9G%2F1mCCy49KFZx2rBhGQPPVX%2Fi5BjdWvxYF4coSTGGoXOz%2FJIBy2QyRW7kMghIPe5QSz4DekyvihpUTIc6PCd0i6T4bMpTFq11W4OzQTUIsrpbsUkrNsqDQQfnK%2FLwG5tqiHMp1mXCDjWf2Q1AZOgjUz3WBi9asvdeG7UXgVY8tfWRKeogiSYip6jSpTi1NCu47Nk3DphpybdDxYoMLzMyMQGOqUBAAJ3rWivW7ukcQXNXH6ozkFveI%2BQAFnAXRcOFj48sxnU11r5c8rkVbUTaQfqj47papJlaJWvSioxK5X976aEJ5%2BqUaRbq%2BOb1X8vd0lk%2BpM%2F3DFFY2O4vJvUSvZ3b8eUYFPZ%2F3wt%2BvB0LGqVhvpHZwid4g%2FLrA2rk9ksBphtq10Q8%2Ftx6d8qQ2w5%2FEPTZI2uS7h1te93olZPqDMORg%2FKiBk8gLaH&X-Amz-Signature=332c440ed507770305bb8054c8499b13be61d89f449629d8330039ff37ce16b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHBFSUL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC5b35sQntLB%2Bl0udm35bpbOCFOXXIDXj%2FSScbGBORU0AiEA0HodPn123gKljrXI6gjjVgU2LqPwhvherFkRfxV7AScq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDA2G6rA9PV2R3RKLHircA3N3V6JIbpmPC%2BtnHbyIOCKafo4ZOZAErY4o%2BspRBg158w5re5RXvTHccJmcuaOoe9QQVaaBSiqUHBZyeH7ntuDxzob%2BwfugLuMQ%2FbDdtzWpV7KMIyoxpejhM95%2Br9KbUCk4dkOuKxd3s7HqQBQJ37WjnNqMFfT6FY%2FviIW3WzlRYj6tXUMmZqwmSZyns9hIiOe%2FPU8cF%2FKvjGaanZr85jdOXqrZDZ08WRVNocEKygKR%2FKOLLfF8xC04DazcrbLRAyAzR449eh09KrabVhYEJnA%2BmowiUSrZ%2FZSxRnZV0K5Vc6Fj4XfnKESbcMQOE3Tbpzu0KqDbEiXBtjkZ4Nky%2FFsCdZZQvoL2ARptBiXkrtlLklAZzumgexqrsbbZjKlhTcqIsBhmCqClJRVj4TYplj%2Btog4cuRkofw0olbuQDWp9G%2F1mCCy49KFZx2rBhGQPPVX%2Fi5BjdWvxYF4coSTGGoXOz%2FJIBy2QyRW7kMghIPe5QSz4DekyvihpUTIc6PCd0i6T4bMpTFq11W4OzQTUIsrpbsUkrNsqDQQfnK%2FLwG5tqiHMp1mXCDjWf2Q1AZOgjUz3WBi9asvdeG7UXgVY8tfWRKeogiSYip6jSpTi1NCu47Nk3DphpybdDxYoMLzMyMQGOqUBAAJ3rWivW7ukcQXNXH6ozkFveI%2BQAFnAXRcOFj48sxnU11r5c8rkVbUTaQfqj47papJlaJWvSioxK5X976aEJ5%2BqUaRbq%2BOb1X8vd0lk%2BpM%2F3DFFY2O4vJvUSvZ3b8eUYFPZ%2F3wt%2BvB0LGqVhvpHZwid4g%2FLrA2rk9ksBphtq10Q8%2Ftx6d8qQ2w5%2FEPTZI2uS7h1te93olZPqDMORg%2FKiBk8gLaH&X-Amz-Signature=466dc3f44735fcc27d873ab7f44279822f250ee447462403b866123a221bd00f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHBFSUL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC5b35sQntLB%2Bl0udm35bpbOCFOXXIDXj%2FSScbGBORU0AiEA0HodPn123gKljrXI6gjjVgU2LqPwhvherFkRfxV7AScq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDA2G6rA9PV2R3RKLHircA3N3V6JIbpmPC%2BtnHbyIOCKafo4ZOZAErY4o%2BspRBg158w5re5RXvTHccJmcuaOoe9QQVaaBSiqUHBZyeH7ntuDxzob%2BwfugLuMQ%2FbDdtzWpV7KMIyoxpejhM95%2Br9KbUCk4dkOuKxd3s7HqQBQJ37WjnNqMFfT6FY%2FviIW3WzlRYj6tXUMmZqwmSZyns9hIiOe%2FPU8cF%2FKvjGaanZr85jdOXqrZDZ08WRVNocEKygKR%2FKOLLfF8xC04DazcrbLRAyAzR449eh09KrabVhYEJnA%2BmowiUSrZ%2FZSxRnZV0K5Vc6Fj4XfnKESbcMQOE3Tbpzu0KqDbEiXBtjkZ4Nky%2FFsCdZZQvoL2ARptBiXkrtlLklAZzumgexqrsbbZjKlhTcqIsBhmCqClJRVj4TYplj%2Btog4cuRkofw0olbuQDWp9G%2F1mCCy49KFZx2rBhGQPPVX%2Fi5BjdWvxYF4coSTGGoXOz%2FJIBy2QyRW7kMghIPe5QSz4DekyvihpUTIc6PCd0i6T4bMpTFq11W4OzQTUIsrpbsUkrNsqDQQfnK%2FLwG5tqiHMp1mXCDjWf2Q1AZOgjUz3WBi9asvdeG7UXgVY8tfWRKeogiSYip6jSpTi1NCu47Nk3DphpybdDxYoMLzMyMQGOqUBAAJ3rWivW7ukcQXNXH6ozkFveI%2BQAFnAXRcOFj48sxnU11r5c8rkVbUTaQfqj47papJlaJWvSioxK5X976aEJ5%2BqUaRbq%2BOb1X8vd0lk%2BpM%2F3DFFY2O4vJvUSvZ3b8eUYFPZ%2F3wt%2BvB0LGqVhvpHZwid4g%2FLrA2rk9ksBphtq10Q8%2Ftx6d8qQ2w5%2FEPTZI2uS7h1te93olZPqDMORg%2FKiBk8gLaH&X-Amz-Signature=c9d8d04fe496b1cd53d3ed90fb2d38088b0b9ea8d141c944e65659e7d681814e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHBFSUL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC5b35sQntLB%2Bl0udm35bpbOCFOXXIDXj%2FSScbGBORU0AiEA0HodPn123gKljrXI6gjjVgU2LqPwhvherFkRfxV7AScq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDA2G6rA9PV2R3RKLHircA3N3V6JIbpmPC%2BtnHbyIOCKafo4ZOZAErY4o%2BspRBg158w5re5RXvTHccJmcuaOoe9QQVaaBSiqUHBZyeH7ntuDxzob%2BwfugLuMQ%2FbDdtzWpV7KMIyoxpejhM95%2Br9KbUCk4dkOuKxd3s7HqQBQJ37WjnNqMFfT6FY%2FviIW3WzlRYj6tXUMmZqwmSZyns9hIiOe%2FPU8cF%2FKvjGaanZr85jdOXqrZDZ08WRVNocEKygKR%2FKOLLfF8xC04DazcrbLRAyAzR449eh09KrabVhYEJnA%2BmowiUSrZ%2FZSxRnZV0K5Vc6Fj4XfnKESbcMQOE3Tbpzu0KqDbEiXBtjkZ4Nky%2FFsCdZZQvoL2ARptBiXkrtlLklAZzumgexqrsbbZjKlhTcqIsBhmCqClJRVj4TYplj%2Btog4cuRkofw0olbuQDWp9G%2F1mCCy49KFZx2rBhGQPPVX%2Fi5BjdWvxYF4coSTGGoXOz%2FJIBy2QyRW7kMghIPe5QSz4DekyvihpUTIc6PCd0i6T4bMpTFq11W4OzQTUIsrpbsUkrNsqDQQfnK%2FLwG5tqiHMp1mXCDjWf2Q1AZOgjUz3WBi9asvdeG7UXgVY8tfWRKeogiSYip6jSpTi1NCu47Nk3DphpybdDxYoMLzMyMQGOqUBAAJ3rWivW7ukcQXNXH6ozkFveI%2BQAFnAXRcOFj48sxnU11r5c8rkVbUTaQfqj47papJlaJWvSioxK5X976aEJ5%2BqUaRbq%2BOb1X8vd0lk%2BpM%2F3DFFY2O4vJvUSvZ3b8eUYFPZ%2F3wt%2BvB0LGqVhvpHZwid4g%2FLrA2rk9ksBphtq10Q8%2Ftx6d8qQ2w5%2FEPTZI2uS7h1te93olZPqDMORg%2FKiBk8gLaH&X-Amz-Signature=caf05b84b0ac04026e788489805eedfc6181697ed9019a51f7abf57dcdaeb0a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHBFSUL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC5b35sQntLB%2Bl0udm35bpbOCFOXXIDXj%2FSScbGBORU0AiEA0HodPn123gKljrXI6gjjVgU2LqPwhvherFkRfxV7AScq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDA2G6rA9PV2R3RKLHircA3N3V6JIbpmPC%2BtnHbyIOCKafo4ZOZAErY4o%2BspRBg158w5re5RXvTHccJmcuaOoe9QQVaaBSiqUHBZyeH7ntuDxzob%2BwfugLuMQ%2FbDdtzWpV7KMIyoxpejhM95%2Br9KbUCk4dkOuKxd3s7HqQBQJ37WjnNqMFfT6FY%2FviIW3WzlRYj6tXUMmZqwmSZyns9hIiOe%2FPU8cF%2FKvjGaanZr85jdOXqrZDZ08WRVNocEKygKR%2FKOLLfF8xC04DazcrbLRAyAzR449eh09KrabVhYEJnA%2BmowiUSrZ%2FZSxRnZV0K5Vc6Fj4XfnKESbcMQOE3Tbpzu0KqDbEiXBtjkZ4Nky%2FFsCdZZQvoL2ARptBiXkrtlLklAZzumgexqrsbbZjKlhTcqIsBhmCqClJRVj4TYplj%2Btog4cuRkofw0olbuQDWp9G%2F1mCCy49KFZx2rBhGQPPVX%2Fi5BjdWvxYF4coSTGGoXOz%2FJIBy2QyRW7kMghIPe5QSz4DekyvihpUTIc6PCd0i6T4bMpTFq11W4OzQTUIsrpbsUkrNsqDQQfnK%2FLwG5tqiHMp1mXCDjWf2Q1AZOgjUz3WBi9asvdeG7UXgVY8tfWRKeogiSYip6jSpTi1NCu47Nk3DphpybdDxYoMLzMyMQGOqUBAAJ3rWivW7ukcQXNXH6ozkFveI%2BQAFnAXRcOFj48sxnU11r5c8rkVbUTaQfqj47papJlaJWvSioxK5X976aEJ5%2BqUaRbq%2BOb1X8vd0lk%2BpM%2F3DFFY2O4vJvUSvZ3b8eUYFPZ%2F3wt%2BvB0LGqVhvpHZwid4g%2FLrA2rk9ksBphtq10Q8%2Ftx6d8qQ2w5%2FEPTZI2uS7h1te93olZPqDMORg%2FKiBk8gLaH&X-Amz-Signature=555719ffcb9d7e55f5d61d88ee3c37862790ccdcc43d67aa5d6a9b5271ec5326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHBFSUL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC5b35sQntLB%2Bl0udm35bpbOCFOXXIDXj%2FSScbGBORU0AiEA0HodPn123gKljrXI6gjjVgU2LqPwhvherFkRfxV7AScq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDA2G6rA9PV2R3RKLHircA3N3V6JIbpmPC%2BtnHbyIOCKafo4ZOZAErY4o%2BspRBg158w5re5RXvTHccJmcuaOoe9QQVaaBSiqUHBZyeH7ntuDxzob%2BwfugLuMQ%2FbDdtzWpV7KMIyoxpejhM95%2Br9KbUCk4dkOuKxd3s7HqQBQJ37WjnNqMFfT6FY%2FviIW3WzlRYj6tXUMmZqwmSZyns9hIiOe%2FPU8cF%2FKvjGaanZr85jdOXqrZDZ08WRVNocEKygKR%2FKOLLfF8xC04DazcrbLRAyAzR449eh09KrabVhYEJnA%2BmowiUSrZ%2FZSxRnZV0K5Vc6Fj4XfnKESbcMQOE3Tbpzu0KqDbEiXBtjkZ4Nky%2FFsCdZZQvoL2ARptBiXkrtlLklAZzumgexqrsbbZjKlhTcqIsBhmCqClJRVj4TYplj%2Btog4cuRkofw0olbuQDWp9G%2F1mCCy49KFZx2rBhGQPPVX%2Fi5BjdWvxYF4coSTGGoXOz%2FJIBy2QyRW7kMghIPe5QSz4DekyvihpUTIc6PCd0i6T4bMpTFq11W4OzQTUIsrpbsUkrNsqDQQfnK%2FLwG5tqiHMp1mXCDjWf2Q1AZOgjUz3WBi9asvdeG7UXgVY8tfWRKeogiSYip6jSpTi1NCu47Nk3DphpybdDxYoMLzMyMQGOqUBAAJ3rWivW7ukcQXNXH6ozkFveI%2BQAFnAXRcOFj48sxnU11r5c8rkVbUTaQfqj47papJlaJWvSioxK5X976aEJ5%2BqUaRbq%2BOb1X8vd0lk%2BpM%2F3DFFY2O4vJvUSvZ3b8eUYFPZ%2F3wt%2BvB0LGqVhvpHZwid4g%2FLrA2rk9ksBphtq10Q8%2Ftx6d8qQ2w5%2FEPTZI2uS7h1te93olZPqDMORg%2FKiBk8gLaH&X-Amz-Signature=cff841dde26c891a31cffae2e8e6aec7ea088dd7ec57c05d8fdf36b719f3abe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHBFSUL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC5b35sQntLB%2Bl0udm35bpbOCFOXXIDXj%2FSScbGBORU0AiEA0HodPn123gKljrXI6gjjVgU2LqPwhvherFkRfxV7AScq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDA2G6rA9PV2R3RKLHircA3N3V6JIbpmPC%2BtnHbyIOCKafo4ZOZAErY4o%2BspRBg158w5re5RXvTHccJmcuaOoe9QQVaaBSiqUHBZyeH7ntuDxzob%2BwfugLuMQ%2FbDdtzWpV7KMIyoxpejhM95%2Br9KbUCk4dkOuKxd3s7HqQBQJ37WjnNqMFfT6FY%2FviIW3WzlRYj6tXUMmZqwmSZyns9hIiOe%2FPU8cF%2FKvjGaanZr85jdOXqrZDZ08WRVNocEKygKR%2FKOLLfF8xC04DazcrbLRAyAzR449eh09KrabVhYEJnA%2BmowiUSrZ%2FZSxRnZV0K5Vc6Fj4XfnKESbcMQOE3Tbpzu0KqDbEiXBtjkZ4Nky%2FFsCdZZQvoL2ARptBiXkrtlLklAZzumgexqrsbbZjKlhTcqIsBhmCqClJRVj4TYplj%2Btog4cuRkofw0olbuQDWp9G%2F1mCCy49KFZx2rBhGQPPVX%2Fi5BjdWvxYF4coSTGGoXOz%2FJIBy2QyRW7kMghIPe5QSz4DekyvihpUTIc6PCd0i6T4bMpTFq11W4OzQTUIsrpbsUkrNsqDQQfnK%2FLwG5tqiHMp1mXCDjWf2Q1AZOgjUz3WBi9asvdeG7UXgVY8tfWRKeogiSYip6jSpTi1NCu47Nk3DphpybdDxYoMLzMyMQGOqUBAAJ3rWivW7ukcQXNXH6ozkFveI%2BQAFnAXRcOFj48sxnU11r5c8rkVbUTaQfqj47papJlaJWvSioxK5X976aEJ5%2BqUaRbq%2BOb1X8vd0lk%2BpM%2F3DFFY2O4vJvUSvZ3b8eUYFPZ%2F3wt%2BvB0LGqVhvpHZwid4g%2FLrA2rk9ksBphtq10Q8%2Ftx6d8qQ2w5%2FEPTZI2uS7h1te93olZPqDMORg%2FKiBk8gLaH&X-Amz-Signature=98b556385cf9e6034f8375a4adb319347af4abaff2b845f62a0d16d7813c3a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHBFSUL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC5b35sQntLB%2Bl0udm35bpbOCFOXXIDXj%2FSScbGBORU0AiEA0HodPn123gKljrXI6gjjVgU2LqPwhvherFkRfxV7AScq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDA2G6rA9PV2R3RKLHircA3N3V6JIbpmPC%2BtnHbyIOCKafo4ZOZAErY4o%2BspRBg158w5re5RXvTHccJmcuaOoe9QQVaaBSiqUHBZyeH7ntuDxzob%2BwfugLuMQ%2FbDdtzWpV7KMIyoxpejhM95%2Br9KbUCk4dkOuKxd3s7HqQBQJ37WjnNqMFfT6FY%2FviIW3WzlRYj6tXUMmZqwmSZyns9hIiOe%2FPU8cF%2FKvjGaanZr85jdOXqrZDZ08WRVNocEKygKR%2FKOLLfF8xC04DazcrbLRAyAzR449eh09KrabVhYEJnA%2BmowiUSrZ%2FZSxRnZV0K5Vc6Fj4XfnKESbcMQOE3Tbpzu0KqDbEiXBtjkZ4Nky%2FFsCdZZQvoL2ARptBiXkrtlLklAZzumgexqrsbbZjKlhTcqIsBhmCqClJRVj4TYplj%2Btog4cuRkofw0olbuQDWp9G%2F1mCCy49KFZx2rBhGQPPVX%2Fi5BjdWvxYF4coSTGGoXOz%2FJIBy2QyRW7kMghIPe5QSz4DekyvihpUTIc6PCd0i6T4bMpTFq11W4OzQTUIsrpbsUkrNsqDQQfnK%2FLwG5tqiHMp1mXCDjWf2Q1AZOgjUz3WBi9asvdeG7UXgVY8tfWRKeogiSYip6jSpTi1NCu47Nk3DphpybdDxYoMLzMyMQGOqUBAAJ3rWivW7ukcQXNXH6ozkFveI%2BQAFnAXRcOFj48sxnU11r5c8rkVbUTaQfqj47papJlaJWvSioxK5X976aEJ5%2BqUaRbq%2BOb1X8vd0lk%2BpM%2F3DFFY2O4vJvUSvZ3b8eUYFPZ%2F3wt%2BvB0LGqVhvpHZwid4g%2FLrA2rk9ksBphtq10Q8%2Ftx6d8qQ2w5%2FEPTZI2uS7h1te93olZPqDMORg%2FKiBk8gLaH&X-Amz-Signature=dd5010117bd89fa81bdd9aefaf927578234a0a43810ee754b1247f267803295e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHBFSUL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC5b35sQntLB%2Bl0udm35bpbOCFOXXIDXj%2FSScbGBORU0AiEA0HodPn123gKljrXI6gjjVgU2LqPwhvherFkRfxV7AScq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDA2G6rA9PV2R3RKLHircA3N3V6JIbpmPC%2BtnHbyIOCKafo4ZOZAErY4o%2BspRBg158w5re5RXvTHccJmcuaOoe9QQVaaBSiqUHBZyeH7ntuDxzob%2BwfugLuMQ%2FbDdtzWpV7KMIyoxpejhM95%2Br9KbUCk4dkOuKxd3s7HqQBQJ37WjnNqMFfT6FY%2FviIW3WzlRYj6tXUMmZqwmSZyns9hIiOe%2FPU8cF%2FKvjGaanZr85jdOXqrZDZ08WRVNocEKygKR%2FKOLLfF8xC04DazcrbLRAyAzR449eh09KrabVhYEJnA%2BmowiUSrZ%2FZSxRnZV0K5Vc6Fj4XfnKESbcMQOE3Tbpzu0KqDbEiXBtjkZ4Nky%2FFsCdZZQvoL2ARptBiXkrtlLklAZzumgexqrsbbZjKlhTcqIsBhmCqClJRVj4TYplj%2Btog4cuRkofw0olbuQDWp9G%2F1mCCy49KFZx2rBhGQPPVX%2Fi5BjdWvxYF4coSTGGoXOz%2FJIBy2QyRW7kMghIPe5QSz4DekyvihpUTIc6PCd0i6T4bMpTFq11W4OzQTUIsrpbsUkrNsqDQQfnK%2FLwG5tqiHMp1mXCDjWf2Q1AZOgjUz3WBi9asvdeG7UXgVY8tfWRKeogiSYip6jSpTi1NCu47Nk3DphpybdDxYoMLzMyMQGOqUBAAJ3rWivW7ukcQXNXH6ozkFveI%2BQAFnAXRcOFj48sxnU11r5c8rkVbUTaQfqj47papJlaJWvSioxK5X976aEJ5%2BqUaRbq%2BOb1X8vd0lk%2BpM%2F3DFFY2O4vJvUSvZ3b8eUYFPZ%2F3wt%2BvB0LGqVhvpHZwid4g%2FLrA2rk9ksBphtq10Q8%2Ftx6d8qQ2w5%2FEPTZI2uS7h1te93olZPqDMORg%2FKiBk8gLaH&X-Amz-Signature=9300740cfcbed2072ffd920c64e5d200e658e466be4b4b88b9fcca15000c3094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHBFSUL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC5b35sQntLB%2Bl0udm35bpbOCFOXXIDXj%2FSScbGBORU0AiEA0HodPn123gKljrXI6gjjVgU2LqPwhvherFkRfxV7AScq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDA2G6rA9PV2R3RKLHircA3N3V6JIbpmPC%2BtnHbyIOCKafo4ZOZAErY4o%2BspRBg158w5re5RXvTHccJmcuaOoe9QQVaaBSiqUHBZyeH7ntuDxzob%2BwfugLuMQ%2FbDdtzWpV7KMIyoxpejhM95%2Br9KbUCk4dkOuKxd3s7HqQBQJ37WjnNqMFfT6FY%2FviIW3WzlRYj6tXUMmZqwmSZyns9hIiOe%2FPU8cF%2FKvjGaanZr85jdOXqrZDZ08WRVNocEKygKR%2FKOLLfF8xC04DazcrbLRAyAzR449eh09KrabVhYEJnA%2BmowiUSrZ%2FZSxRnZV0K5Vc6Fj4XfnKESbcMQOE3Tbpzu0KqDbEiXBtjkZ4Nky%2FFsCdZZQvoL2ARptBiXkrtlLklAZzumgexqrsbbZjKlhTcqIsBhmCqClJRVj4TYplj%2Btog4cuRkofw0olbuQDWp9G%2F1mCCy49KFZx2rBhGQPPVX%2Fi5BjdWvxYF4coSTGGoXOz%2FJIBy2QyRW7kMghIPe5QSz4DekyvihpUTIc6PCd0i6T4bMpTFq11W4OzQTUIsrpbsUkrNsqDQQfnK%2FLwG5tqiHMp1mXCDjWf2Q1AZOgjUz3WBi9asvdeG7UXgVY8tfWRKeogiSYip6jSpTi1NCu47Nk3DphpybdDxYoMLzMyMQGOqUBAAJ3rWivW7ukcQXNXH6ozkFveI%2BQAFnAXRcOFj48sxnU11r5c8rkVbUTaQfqj47papJlaJWvSioxK5X976aEJ5%2BqUaRbq%2BOb1X8vd0lk%2BpM%2F3DFFY2O4vJvUSvZ3b8eUYFPZ%2F3wt%2BvB0LGqVhvpHZwid4g%2FLrA2rk9ksBphtq10Q8%2Ftx6d8qQ2w5%2FEPTZI2uS7h1te93olZPqDMORg%2FKiBk8gLaH&X-Amz-Signature=670bd1d2b5b5c2955669bc4b10419d594c00c924cbab41668bea725da7a45ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
