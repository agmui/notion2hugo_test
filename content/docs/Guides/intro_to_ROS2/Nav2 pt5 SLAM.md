---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
      <summary>What is slam?</summary>
      TODO:
  </details>

ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLAE5XO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKUfFun9eGxSrl14trDfW2kKj1FpsWASofiCZ%2FDnwN9AiEA2%2BYt7tJOjcu9iWtV3k71HN5uOTOWLOHNQCSUGf2pmikqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJNzqB4it8YecQ%2F8ircAwgOezvn6jWZqMl0kH7qt97wV6OfznA9j443ifI%2FaySZPl5Nb%2B4CED59t85IBX%2FzImemxQ%2Ft%2FQ1MWktY7xGDePEMqqCbY%2F8LnZrpZH%2Fl58fTnSSxEFY%2BnIRCG2rO70tOOymqbeERIjPTaF60E4ECL1r29Sfcabb6E3Rwa6k1NSexU2d8Bgcf5lz8w3Wbsb7935BQ7Pe%2B72Fw%2F2n2WlAnbh5YOG%2BUeyFIQjLNgltuKvvbuDZOiEmz4T315yRnD%2FErmNscsr%2FhetM0OkbDxCHraCz36nSGQWsMS8e7BNNv7bA6E9uBUE4EpSgtscayA2NWneK096AFqi6fMa%2FXVUzh8GvCZSm3xWocXRwmNLMyBPjKvCcB12oEv9GtW2Rp7lzgvy2w5WariwZ4qZ8J3Uqw8NrGKhnkFtR99I4QQD4tGZZqf8sd4Imfu1PikIeJ69p1Engu%2FZCHJYuyvubVcu6Od%2Bvy%2FHxr2CXtJiV950q9Lxp2rxda7%2F9%2F5ZcsF9%2FMWD7fPnCIh9fqTqU2ND7kPbvm0XdkFe28evhTRGYZucSPncO2FT84TS9oegvhMy3CjfhRKN%2Bye7k9K0ThNimU%2F6VoaBThhW5SxISu%2FeSK0MpGHF%2B%2F6v0%2FcRv08DSXCrexMIqe5cQGOqUBBUKu9hSPuW7RiztkyfD34P1n788APs3A550yb2v0dTTdRfGmx3Kc5zc84%2BX%2FQCG8QuLXsDkszlhNaoltCRT2AqzHVg1O5sFobeinSiPS2yKDLsK%2FRfRXnRwDv084Qh%2FWDkkYnxWtxE6HbLXDuB2Y7TjiDol1iAHhkbbhGhEdxmtMssw1ADtiPr8PIr6ylvZkZfN0cptg8%2BAhDMn6I1QCQepzy4h%2F&X-Amz-Signature=520eb16092fddaeac637f4f9cdc4f65df916f0fced5972be4b70ae4bd3a39174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLAE5XO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKUfFun9eGxSrl14trDfW2kKj1FpsWASofiCZ%2FDnwN9AiEA2%2BYt7tJOjcu9iWtV3k71HN5uOTOWLOHNQCSUGf2pmikqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJNzqB4it8YecQ%2F8ircAwgOezvn6jWZqMl0kH7qt97wV6OfznA9j443ifI%2FaySZPl5Nb%2B4CED59t85IBX%2FzImemxQ%2Ft%2FQ1MWktY7xGDePEMqqCbY%2F8LnZrpZH%2Fl58fTnSSxEFY%2BnIRCG2rO70tOOymqbeERIjPTaF60E4ECL1r29Sfcabb6E3Rwa6k1NSexU2d8Bgcf5lz8w3Wbsb7935BQ7Pe%2B72Fw%2F2n2WlAnbh5YOG%2BUeyFIQjLNgltuKvvbuDZOiEmz4T315yRnD%2FErmNscsr%2FhetM0OkbDxCHraCz36nSGQWsMS8e7BNNv7bA6E9uBUE4EpSgtscayA2NWneK096AFqi6fMa%2FXVUzh8GvCZSm3xWocXRwmNLMyBPjKvCcB12oEv9GtW2Rp7lzgvy2w5WariwZ4qZ8J3Uqw8NrGKhnkFtR99I4QQD4tGZZqf8sd4Imfu1PikIeJ69p1Engu%2FZCHJYuyvubVcu6Od%2Bvy%2FHxr2CXtJiV950q9Lxp2rxda7%2F9%2F5ZcsF9%2FMWD7fPnCIh9fqTqU2ND7kPbvm0XdkFe28evhTRGYZucSPncO2FT84TS9oegvhMy3CjfhRKN%2Bye7k9K0ThNimU%2F6VoaBThhW5SxISu%2FeSK0MpGHF%2B%2F6v0%2FcRv08DSXCrexMIqe5cQGOqUBBUKu9hSPuW7RiztkyfD34P1n788APs3A550yb2v0dTTdRfGmx3Kc5zc84%2BX%2FQCG8QuLXsDkszlhNaoltCRT2AqzHVg1O5sFobeinSiPS2yKDLsK%2FRfRXnRwDv084Qh%2FWDkkYnxWtxE6HbLXDuB2Y7TjiDol1iAHhkbbhGhEdxmtMssw1ADtiPr8PIr6ylvZkZfN0cptg8%2BAhDMn6I1QCQepzy4h%2F&X-Amz-Signature=ce7088300fb7772c925efb466d2bb49ea419cfda5ed1c33647bbb2b5414d9036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLAE5XO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKUfFun9eGxSrl14trDfW2kKj1FpsWASofiCZ%2FDnwN9AiEA2%2BYt7tJOjcu9iWtV3k71HN5uOTOWLOHNQCSUGf2pmikqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJNzqB4it8YecQ%2F8ircAwgOezvn6jWZqMl0kH7qt97wV6OfznA9j443ifI%2FaySZPl5Nb%2B4CED59t85IBX%2FzImemxQ%2Ft%2FQ1MWktY7xGDePEMqqCbY%2F8LnZrpZH%2Fl58fTnSSxEFY%2BnIRCG2rO70tOOymqbeERIjPTaF60E4ECL1r29Sfcabb6E3Rwa6k1NSexU2d8Bgcf5lz8w3Wbsb7935BQ7Pe%2B72Fw%2F2n2WlAnbh5YOG%2BUeyFIQjLNgltuKvvbuDZOiEmz4T315yRnD%2FErmNscsr%2FhetM0OkbDxCHraCz36nSGQWsMS8e7BNNv7bA6E9uBUE4EpSgtscayA2NWneK096AFqi6fMa%2FXVUzh8GvCZSm3xWocXRwmNLMyBPjKvCcB12oEv9GtW2Rp7lzgvy2w5WariwZ4qZ8J3Uqw8NrGKhnkFtR99I4QQD4tGZZqf8sd4Imfu1PikIeJ69p1Engu%2FZCHJYuyvubVcu6Od%2Bvy%2FHxr2CXtJiV950q9Lxp2rxda7%2F9%2F5ZcsF9%2FMWD7fPnCIh9fqTqU2ND7kPbvm0XdkFe28evhTRGYZucSPncO2FT84TS9oegvhMy3CjfhRKN%2Bye7k9K0ThNimU%2F6VoaBThhW5SxISu%2FeSK0MpGHF%2B%2F6v0%2FcRv08DSXCrexMIqe5cQGOqUBBUKu9hSPuW7RiztkyfD34P1n788APs3A550yb2v0dTTdRfGmx3Kc5zc84%2BX%2FQCG8QuLXsDkszlhNaoltCRT2AqzHVg1O5sFobeinSiPS2yKDLsK%2FRfRXnRwDv084Qh%2FWDkkYnxWtxE6HbLXDuB2Y7TjiDol1iAHhkbbhGhEdxmtMssw1ADtiPr8PIr6ylvZkZfN0cptg8%2BAhDMn6I1QCQepzy4h%2F&X-Amz-Signature=83b6ce9148080e296b4409fc98432de4c63a64e20b50494e6c29b7d7bd3fb3dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLAE5XO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKUfFun9eGxSrl14trDfW2kKj1FpsWASofiCZ%2FDnwN9AiEA2%2BYt7tJOjcu9iWtV3k71HN5uOTOWLOHNQCSUGf2pmikqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJNzqB4it8YecQ%2F8ircAwgOezvn6jWZqMl0kH7qt97wV6OfznA9j443ifI%2FaySZPl5Nb%2B4CED59t85IBX%2FzImemxQ%2Ft%2FQ1MWktY7xGDePEMqqCbY%2F8LnZrpZH%2Fl58fTnSSxEFY%2BnIRCG2rO70tOOymqbeERIjPTaF60E4ECL1r29Sfcabb6E3Rwa6k1NSexU2d8Bgcf5lz8w3Wbsb7935BQ7Pe%2B72Fw%2F2n2WlAnbh5YOG%2BUeyFIQjLNgltuKvvbuDZOiEmz4T315yRnD%2FErmNscsr%2FhetM0OkbDxCHraCz36nSGQWsMS8e7BNNv7bA6E9uBUE4EpSgtscayA2NWneK096AFqi6fMa%2FXVUzh8GvCZSm3xWocXRwmNLMyBPjKvCcB12oEv9GtW2Rp7lzgvy2w5WariwZ4qZ8J3Uqw8NrGKhnkFtR99I4QQD4tGZZqf8sd4Imfu1PikIeJ69p1Engu%2FZCHJYuyvubVcu6Od%2Bvy%2FHxr2CXtJiV950q9Lxp2rxda7%2F9%2F5ZcsF9%2FMWD7fPnCIh9fqTqU2ND7kPbvm0XdkFe28evhTRGYZucSPncO2FT84TS9oegvhMy3CjfhRKN%2Bye7k9K0ThNimU%2F6VoaBThhW5SxISu%2FeSK0MpGHF%2B%2F6v0%2FcRv08DSXCrexMIqe5cQGOqUBBUKu9hSPuW7RiztkyfD34P1n788APs3A550yb2v0dTTdRfGmx3Kc5zc84%2BX%2FQCG8QuLXsDkszlhNaoltCRT2AqzHVg1O5sFobeinSiPS2yKDLsK%2FRfRXnRwDv084Qh%2FWDkkYnxWtxE6HbLXDuB2Y7TjiDol1iAHhkbbhGhEdxmtMssw1ADtiPr8PIr6ylvZkZfN0cptg8%2BAhDMn6I1QCQepzy4h%2F&X-Amz-Signature=cfc455de240f388362fc1f8c42d7be501462c872029152f5e169387b4d412d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLAE5XO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKUfFun9eGxSrl14trDfW2kKj1FpsWASofiCZ%2FDnwN9AiEA2%2BYt7tJOjcu9iWtV3k71HN5uOTOWLOHNQCSUGf2pmikqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJNzqB4it8YecQ%2F8ircAwgOezvn6jWZqMl0kH7qt97wV6OfznA9j443ifI%2FaySZPl5Nb%2B4CED59t85IBX%2FzImemxQ%2Ft%2FQ1MWktY7xGDePEMqqCbY%2F8LnZrpZH%2Fl58fTnSSxEFY%2BnIRCG2rO70tOOymqbeERIjPTaF60E4ECL1r29Sfcabb6E3Rwa6k1NSexU2d8Bgcf5lz8w3Wbsb7935BQ7Pe%2B72Fw%2F2n2WlAnbh5YOG%2BUeyFIQjLNgltuKvvbuDZOiEmz4T315yRnD%2FErmNscsr%2FhetM0OkbDxCHraCz36nSGQWsMS8e7BNNv7bA6E9uBUE4EpSgtscayA2NWneK096AFqi6fMa%2FXVUzh8GvCZSm3xWocXRwmNLMyBPjKvCcB12oEv9GtW2Rp7lzgvy2w5WariwZ4qZ8J3Uqw8NrGKhnkFtR99I4QQD4tGZZqf8sd4Imfu1PikIeJ69p1Engu%2FZCHJYuyvubVcu6Od%2Bvy%2FHxr2CXtJiV950q9Lxp2rxda7%2F9%2F5ZcsF9%2FMWD7fPnCIh9fqTqU2ND7kPbvm0XdkFe28evhTRGYZucSPncO2FT84TS9oegvhMy3CjfhRKN%2Bye7k9K0ThNimU%2F6VoaBThhW5SxISu%2FeSK0MpGHF%2B%2F6v0%2FcRv08DSXCrexMIqe5cQGOqUBBUKu9hSPuW7RiztkyfD34P1n788APs3A550yb2v0dTTdRfGmx3Kc5zc84%2BX%2FQCG8QuLXsDkszlhNaoltCRT2AqzHVg1O5sFobeinSiPS2yKDLsK%2FRfRXnRwDv084Qh%2FWDkkYnxWtxE6HbLXDuB2Y7TjiDol1iAHhkbbhGhEdxmtMssw1ADtiPr8PIr6ylvZkZfN0cptg8%2BAhDMn6I1QCQepzy4h%2F&X-Amz-Signature=41620f84a44a33cd1387ed6ad6c9728bbefafcd38b228ace81e1d62255327a70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLAE5XO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKUfFun9eGxSrl14trDfW2kKj1FpsWASofiCZ%2FDnwN9AiEA2%2BYt7tJOjcu9iWtV3k71HN5uOTOWLOHNQCSUGf2pmikqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJNzqB4it8YecQ%2F8ircAwgOezvn6jWZqMl0kH7qt97wV6OfznA9j443ifI%2FaySZPl5Nb%2B4CED59t85IBX%2FzImemxQ%2Ft%2FQ1MWktY7xGDePEMqqCbY%2F8LnZrpZH%2Fl58fTnSSxEFY%2BnIRCG2rO70tOOymqbeERIjPTaF60E4ECL1r29Sfcabb6E3Rwa6k1NSexU2d8Bgcf5lz8w3Wbsb7935BQ7Pe%2B72Fw%2F2n2WlAnbh5YOG%2BUeyFIQjLNgltuKvvbuDZOiEmz4T315yRnD%2FErmNscsr%2FhetM0OkbDxCHraCz36nSGQWsMS8e7BNNv7bA6E9uBUE4EpSgtscayA2NWneK096AFqi6fMa%2FXVUzh8GvCZSm3xWocXRwmNLMyBPjKvCcB12oEv9GtW2Rp7lzgvy2w5WariwZ4qZ8J3Uqw8NrGKhnkFtR99I4QQD4tGZZqf8sd4Imfu1PikIeJ69p1Engu%2FZCHJYuyvubVcu6Od%2Bvy%2FHxr2CXtJiV950q9Lxp2rxda7%2F9%2F5ZcsF9%2FMWD7fPnCIh9fqTqU2ND7kPbvm0XdkFe28evhTRGYZucSPncO2FT84TS9oegvhMy3CjfhRKN%2Bye7k9K0ThNimU%2F6VoaBThhW5SxISu%2FeSK0MpGHF%2B%2F6v0%2FcRv08DSXCrexMIqe5cQGOqUBBUKu9hSPuW7RiztkyfD34P1n788APs3A550yb2v0dTTdRfGmx3Kc5zc84%2BX%2FQCG8QuLXsDkszlhNaoltCRT2AqzHVg1O5sFobeinSiPS2yKDLsK%2FRfRXnRwDv084Qh%2FWDkkYnxWtxE6HbLXDuB2Y7TjiDol1iAHhkbbhGhEdxmtMssw1ADtiPr8PIr6ylvZkZfN0cptg8%2BAhDMn6I1QCQepzy4h%2F&X-Amz-Signature=c39c64cebf0276ff26299305f295b810e5badf9e3c0f935787d1bb8089265a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLAE5XO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKUfFun9eGxSrl14trDfW2kKj1FpsWASofiCZ%2FDnwN9AiEA2%2BYt7tJOjcu9iWtV3k71HN5uOTOWLOHNQCSUGf2pmikqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJNzqB4it8YecQ%2F8ircAwgOezvn6jWZqMl0kH7qt97wV6OfznA9j443ifI%2FaySZPl5Nb%2B4CED59t85IBX%2FzImemxQ%2Ft%2FQ1MWktY7xGDePEMqqCbY%2F8LnZrpZH%2Fl58fTnSSxEFY%2BnIRCG2rO70tOOymqbeERIjPTaF60E4ECL1r29Sfcabb6E3Rwa6k1NSexU2d8Bgcf5lz8w3Wbsb7935BQ7Pe%2B72Fw%2F2n2WlAnbh5YOG%2BUeyFIQjLNgltuKvvbuDZOiEmz4T315yRnD%2FErmNscsr%2FhetM0OkbDxCHraCz36nSGQWsMS8e7BNNv7bA6E9uBUE4EpSgtscayA2NWneK096AFqi6fMa%2FXVUzh8GvCZSm3xWocXRwmNLMyBPjKvCcB12oEv9GtW2Rp7lzgvy2w5WariwZ4qZ8J3Uqw8NrGKhnkFtR99I4QQD4tGZZqf8sd4Imfu1PikIeJ69p1Engu%2FZCHJYuyvubVcu6Od%2Bvy%2FHxr2CXtJiV950q9Lxp2rxda7%2F9%2F5ZcsF9%2FMWD7fPnCIh9fqTqU2ND7kPbvm0XdkFe28evhTRGYZucSPncO2FT84TS9oegvhMy3CjfhRKN%2Bye7k9K0ThNimU%2F6VoaBThhW5SxISu%2FeSK0MpGHF%2B%2F6v0%2FcRv08DSXCrexMIqe5cQGOqUBBUKu9hSPuW7RiztkyfD34P1n788APs3A550yb2v0dTTdRfGmx3Kc5zc84%2BX%2FQCG8QuLXsDkszlhNaoltCRT2AqzHVg1O5sFobeinSiPS2yKDLsK%2FRfRXnRwDv084Qh%2FWDkkYnxWtxE6HbLXDuB2Y7TjiDol1iAHhkbbhGhEdxmtMssw1ADtiPr8PIr6ylvZkZfN0cptg8%2BAhDMn6I1QCQepzy4h%2F&X-Amz-Signature=314324355522cb02884e118a644aa8c3ed77b30e7dbd31b258b447660cbf558f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python
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
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLAE5XO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKUfFun9eGxSrl14trDfW2kKj1FpsWASofiCZ%2FDnwN9AiEA2%2BYt7tJOjcu9iWtV3k71HN5uOTOWLOHNQCSUGf2pmikqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJNzqB4it8YecQ%2F8ircAwgOezvn6jWZqMl0kH7qt97wV6OfznA9j443ifI%2FaySZPl5Nb%2B4CED59t85IBX%2FzImemxQ%2Ft%2FQ1MWktY7xGDePEMqqCbY%2F8LnZrpZH%2Fl58fTnSSxEFY%2BnIRCG2rO70tOOymqbeERIjPTaF60E4ECL1r29Sfcabb6E3Rwa6k1NSexU2d8Bgcf5lz8w3Wbsb7935BQ7Pe%2B72Fw%2F2n2WlAnbh5YOG%2BUeyFIQjLNgltuKvvbuDZOiEmz4T315yRnD%2FErmNscsr%2FhetM0OkbDxCHraCz36nSGQWsMS8e7BNNv7bA6E9uBUE4EpSgtscayA2NWneK096AFqi6fMa%2FXVUzh8GvCZSm3xWocXRwmNLMyBPjKvCcB12oEv9GtW2Rp7lzgvy2w5WariwZ4qZ8J3Uqw8NrGKhnkFtR99I4QQD4tGZZqf8sd4Imfu1PikIeJ69p1Engu%2FZCHJYuyvubVcu6Od%2Bvy%2FHxr2CXtJiV950q9Lxp2rxda7%2F9%2F5ZcsF9%2FMWD7fPnCIh9fqTqU2ND7kPbvm0XdkFe28evhTRGYZucSPncO2FT84TS9oegvhMy3CjfhRKN%2Bye7k9K0ThNimU%2F6VoaBThhW5SxISu%2FeSK0MpGHF%2B%2F6v0%2FcRv08DSXCrexMIqe5cQGOqUBBUKu9hSPuW7RiztkyfD34P1n788APs3A550yb2v0dTTdRfGmx3Kc5zc84%2BX%2FQCG8QuLXsDkszlhNaoltCRT2AqzHVg1O5sFobeinSiPS2yKDLsK%2FRfRXnRwDv084Qh%2FWDkkYnxWtxE6HbLXDuB2Y7TjiDol1iAHhkbbhGhEdxmtMssw1ADtiPr8PIr6ylvZkZfN0cptg8%2BAhDMn6I1QCQepzy4h%2F&X-Amz-Signature=739d36af130f39ed1ea7f74f6d6ed6d64bd5cc6a92531b1797983bb6e6f3c9b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLAE5XO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKUfFun9eGxSrl14trDfW2kKj1FpsWASofiCZ%2FDnwN9AiEA2%2BYt7tJOjcu9iWtV3k71HN5uOTOWLOHNQCSUGf2pmikqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJNzqB4it8YecQ%2F8ircAwgOezvn6jWZqMl0kH7qt97wV6OfznA9j443ifI%2FaySZPl5Nb%2B4CED59t85IBX%2FzImemxQ%2Ft%2FQ1MWktY7xGDePEMqqCbY%2F8LnZrpZH%2Fl58fTnSSxEFY%2BnIRCG2rO70tOOymqbeERIjPTaF60E4ECL1r29Sfcabb6E3Rwa6k1NSexU2d8Bgcf5lz8w3Wbsb7935BQ7Pe%2B72Fw%2F2n2WlAnbh5YOG%2BUeyFIQjLNgltuKvvbuDZOiEmz4T315yRnD%2FErmNscsr%2FhetM0OkbDxCHraCz36nSGQWsMS8e7BNNv7bA6E9uBUE4EpSgtscayA2NWneK096AFqi6fMa%2FXVUzh8GvCZSm3xWocXRwmNLMyBPjKvCcB12oEv9GtW2Rp7lzgvy2w5WariwZ4qZ8J3Uqw8NrGKhnkFtR99I4QQD4tGZZqf8sd4Imfu1PikIeJ69p1Engu%2FZCHJYuyvubVcu6Od%2Bvy%2FHxr2CXtJiV950q9Lxp2rxda7%2F9%2F5ZcsF9%2FMWD7fPnCIh9fqTqU2ND7kPbvm0XdkFe28evhTRGYZucSPncO2FT84TS9oegvhMy3CjfhRKN%2Bye7k9K0ThNimU%2F6VoaBThhW5SxISu%2FeSK0MpGHF%2B%2F6v0%2FcRv08DSXCrexMIqe5cQGOqUBBUKu9hSPuW7RiztkyfD34P1n788APs3A550yb2v0dTTdRfGmx3Kc5zc84%2BX%2FQCG8QuLXsDkszlhNaoltCRT2AqzHVg1O5sFobeinSiPS2yKDLsK%2FRfRXnRwDv084Qh%2FWDkkYnxWtxE6HbLXDuB2Y7TjiDol1iAHhkbbhGhEdxmtMssw1ADtiPr8PIr6ylvZkZfN0cptg8%2BAhDMn6I1QCQepzy4h%2F&X-Amz-Signature=0fe954a915da391fc82fccd16070c67811f6eba195a949fbc9ce0222383a3e24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLAE5XO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKUfFun9eGxSrl14trDfW2kKj1FpsWASofiCZ%2FDnwN9AiEA2%2BYt7tJOjcu9iWtV3k71HN5uOTOWLOHNQCSUGf2pmikqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJNzqB4it8YecQ%2F8ircAwgOezvn6jWZqMl0kH7qt97wV6OfznA9j443ifI%2FaySZPl5Nb%2B4CED59t85IBX%2FzImemxQ%2Ft%2FQ1MWktY7xGDePEMqqCbY%2F8LnZrpZH%2Fl58fTnSSxEFY%2BnIRCG2rO70tOOymqbeERIjPTaF60E4ECL1r29Sfcabb6E3Rwa6k1NSexU2d8Bgcf5lz8w3Wbsb7935BQ7Pe%2B72Fw%2F2n2WlAnbh5YOG%2BUeyFIQjLNgltuKvvbuDZOiEmz4T315yRnD%2FErmNscsr%2FhetM0OkbDxCHraCz36nSGQWsMS8e7BNNv7bA6E9uBUE4EpSgtscayA2NWneK096AFqi6fMa%2FXVUzh8GvCZSm3xWocXRwmNLMyBPjKvCcB12oEv9GtW2Rp7lzgvy2w5WariwZ4qZ8J3Uqw8NrGKhnkFtR99I4QQD4tGZZqf8sd4Imfu1PikIeJ69p1Engu%2FZCHJYuyvubVcu6Od%2Bvy%2FHxr2CXtJiV950q9Lxp2rxda7%2F9%2F5ZcsF9%2FMWD7fPnCIh9fqTqU2ND7kPbvm0XdkFe28evhTRGYZucSPncO2FT84TS9oegvhMy3CjfhRKN%2Bye7k9K0ThNimU%2F6VoaBThhW5SxISu%2FeSK0MpGHF%2B%2F6v0%2FcRv08DSXCrexMIqe5cQGOqUBBUKu9hSPuW7RiztkyfD34P1n788APs3A550yb2v0dTTdRfGmx3Kc5zc84%2BX%2FQCG8QuLXsDkszlhNaoltCRT2AqzHVg1O5sFobeinSiPS2yKDLsK%2FRfRXnRwDv084Qh%2FWDkkYnxWtxE6HbLXDuB2Y7TjiDol1iAHhkbbhGhEdxmtMssw1ADtiPr8PIr6ylvZkZfN0cptg8%2BAhDMn6I1QCQepzy4h%2F&X-Amz-Signature=cb6cb0f8e233029f265d2b9b5abd0c92eca9eea02bc8d4ebab2e6cef8e13c100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLAE5XO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKUfFun9eGxSrl14trDfW2kKj1FpsWASofiCZ%2FDnwN9AiEA2%2BYt7tJOjcu9iWtV3k71HN5uOTOWLOHNQCSUGf2pmikqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJNzqB4it8YecQ%2F8ircAwgOezvn6jWZqMl0kH7qt97wV6OfznA9j443ifI%2FaySZPl5Nb%2B4CED59t85IBX%2FzImemxQ%2Ft%2FQ1MWktY7xGDePEMqqCbY%2F8LnZrpZH%2Fl58fTnSSxEFY%2BnIRCG2rO70tOOymqbeERIjPTaF60E4ECL1r29Sfcabb6E3Rwa6k1NSexU2d8Bgcf5lz8w3Wbsb7935BQ7Pe%2B72Fw%2F2n2WlAnbh5YOG%2BUeyFIQjLNgltuKvvbuDZOiEmz4T315yRnD%2FErmNscsr%2FhetM0OkbDxCHraCz36nSGQWsMS8e7BNNv7bA6E9uBUE4EpSgtscayA2NWneK096AFqi6fMa%2FXVUzh8GvCZSm3xWocXRwmNLMyBPjKvCcB12oEv9GtW2Rp7lzgvy2w5WariwZ4qZ8J3Uqw8NrGKhnkFtR99I4QQD4tGZZqf8sd4Imfu1PikIeJ69p1Engu%2FZCHJYuyvubVcu6Od%2Bvy%2FHxr2CXtJiV950q9Lxp2rxda7%2F9%2F5ZcsF9%2FMWD7fPnCIh9fqTqU2ND7kPbvm0XdkFe28evhTRGYZucSPncO2FT84TS9oegvhMy3CjfhRKN%2Bye7k9K0ThNimU%2F6VoaBThhW5SxISu%2FeSK0MpGHF%2B%2F6v0%2FcRv08DSXCrexMIqe5cQGOqUBBUKu9hSPuW7RiztkyfD34P1n788APs3A550yb2v0dTTdRfGmx3Kc5zc84%2BX%2FQCG8QuLXsDkszlhNaoltCRT2AqzHVg1O5sFobeinSiPS2yKDLsK%2FRfRXnRwDv084Qh%2FWDkkYnxWtxE6HbLXDuB2Y7TjiDol1iAHhkbbhGhEdxmtMssw1ADtiPr8PIr6ylvZkZfN0cptg8%2BAhDMn6I1QCQepzy4h%2F&X-Amz-Signature=887d3de7a6aad9f8248a50993005a8d07fe15d87069f206e38a26f6279ed219d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLAE5XO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKUfFun9eGxSrl14trDfW2kKj1FpsWASofiCZ%2FDnwN9AiEA2%2BYt7tJOjcu9iWtV3k71HN5uOTOWLOHNQCSUGf2pmikqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJNzqB4it8YecQ%2F8ircAwgOezvn6jWZqMl0kH7qt97wV6OfznA9j443ifI%2FaySZPl5Nb%2B4CED59t85IBX%2FzImemxQ%2Ft%2FQ1MWktY7xGDePEMqqCbY%2F8LnZrpZH%2Fl58fTnSSxEFY%2BnIRCG2rO70tOOymqbeERIjPTaF60E4ECL1r29Sfcabb6E3Rwa6k1NSexU2d8Bgcf5lz8w3Wbsb7935BQ7Pe%2B72Fw%2F2n2WlAnbh5YOG%2BUeyFIQjLNgltuKvvbuDZOiEmz4T315yRnD%2FErmNscsr%2FhetM0OkbDxCHraCz36nSGQWsMS8e7BNNv7bA6E9uBUE4EpSgtscayA2NWneK096AFqi6fMa%2FXVUzh8GvCZSm3xWocXRwmNLMyBPjKvCcB12oEv9GtW2Rp7lzgvy2w5WariwZ4qZ8J3Uqw8NrGKhnkFtR99I4QQD4tGZZqf8sd4Imfu1PikIeJ69p1Engu%2FZCHJYuyvubVcu6Od%2Bvy%2FHxr2CXtJiV950q9Lxp2rxda7%2F9%2F5ZcsF9%2FMWD7fPnCIh9fqTqU2ND7kPbvm0XdkFe28evhTRGYZucSPncO2FT84TS9oegvhMy3CjfhRKN%2Bye7k9K0ThNimU%2F6VoaBThhW5SxISu%2FeSK0MpGHF%2B%2F6v0%2FcRv08DSXCrexMIqe5cQGOqUBBUKu9hSPuW7RiztkyfD34P1n788APs3A550yb2v0dTTdRfGmx3Kc5zc84%2BX%2FQCG8QuLXsDkszlhNaoltCRT2AqzHVg1O5sFobeinSiPS2yKDLsK%2FRfRXnRwDv084Qh%2FWDkkYnxWtxE6HbLXDuB2Y7TjiDol1iAHhkbbhGhEdxmtMssw1ADtiPr8PIr6ylvZkZfN0cptg8%2BAhDMn6I1QCQepzy4h%2F&X-Amz-Signature=813a4cb2101d668d6ce165a057b0eada87472bbd7b504d0c0ea4ffde2d755fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLAE5XO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKUfFun9eGxSrl14trDfW2kKj1FpsWASofiCZ%2FDnwN9AiEA2%2BYt7tJOjcu9iWtV3k71HN5uOTOWLOHNQCSUGf2pmikqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJNzqB4it8YecQ%2F8ircAwgOezvn6jWZqMl0kH7qt97wV6OfznA9j443ifI%2FaySZPl5Nb%2B4CED59t85IBX%2FzImemxQ%2Ft%2FQ1MWktY7xGDePEMqqCbY%2F8LnZrpZH%2Fl58fTnSSxEFY%2BnIRCG2rO70tOOymqbeERIjPTaF60E4ECL1r29Sfcabb6E3Rwa6k1NSexU2d8Bgcf5lz8w3Wbsb7935BQ7Pe%2B72Fw%2F2n2WlAnbh5YOG%2BUeyFIQjLNgltuKvvbuDZOiEmz4T315yRnD%2FErmNscsr%2FhetM0OkbDxCHraCz36nSGQWsMS8e7BNNv7bA6E9uBUE4EpSgtscayA2NWneK096AFqi6fMa%2FXVUzh8GvCZSm3xWocXRwmNLMyBPjKvCcB12oEv9GtW2Rp7lzgvy2w5WariwZ4qZ8J3Uqw8NrGKhnkFtR99I4QQD4tGZZqf8sd4Imfu1PikIeJ69p1Engu%2FZCHJYuyvubVcu6Od%2Bvy%2FHxr2CXtJiV950q9Lxp2rxda7%2F9%2F5ZcsF9%2FMWD7fPnCIh9fqTqU2ND7kPbvm0XdkFe28evhTRGYZucSPncO2FT84TS9oegvhMy3CjfhRKN%2Bye7k9K0ThNimU%2F6VoaBThhW5SxISu%2FeSK0MpGHF%2B%2F6v0%2FcRv08DSXCrexMIqe5cQGOqUBBUKu9hSPuW7RiztkyfD34P1n788APs3A550yb2v0dTTdRfGmx3Kc5zc84%2BX%2FQCG8QuLXsDkszlhNaoltCRT2AqzHVg1O5sFobeinSiPS2yKDLsK%2FRfRXnRwDv084Qh%2FWDkkYnxWtxE6HbLXDuB2Y7TjiDol1iAHhkbbhGhEdxmtMssw1ADtiPr8PIr6ylvZkZfN0cptg8%2BAhDMn6I1QCQepzy4h%2F&X-Amz-Signature=4fbd895a31af5fd285cb59eed99299811fd8e9a6831a54939f00d9d47fe77268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLAE5XO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKUfFun9eGxSrl14trDfW2kKj1FpsWASofiCZ%2FDnwN9AiEA2%2BYt7tJOjcu9iWtV3k71HN5uOTOWLOHNQCSUGf2pmikqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJNzqB4it8YecQ%2F8ircAwgOezvn6jWZqMl0kH7qt97wV6OfznA9j443ifI%2FaySZPl5Nb%2B4CED59t85IBX%2FzImemxQ%2Ft%2FQ1MWktY7xGDePEMqqCbY%2F8LnZrpZH%2Fl58fTnSSxEFY%2BnIRCG2rO70tOOymqbeERIjPTaF60E4ECL1r29Sfcabb6E3Rwa6k1NSexU2d8Bgcf5lz8w3Wbsb7935BQ7Pe%2B72Fw%2F2n2WlAnbh5YOG%2BUeyFIQjLNgltuKvvbuDZOiEmz4T315yRnD%2FErmNscsr%2FhetM0OkbDxCHraCz36nSGQWsMS8e7BNNv7bA6E9uBUE4EpSgtscayA2NWneK096AFqi6fMa%2FXVUzh8GvCZSm3xWocXRwmNLMyBPjKvCcB12oEv9GtW2Rp7lzgvy2w5WariwZ4qZ8J3Uqw8NrGKhnkFtR99I4QQD4tGZZqf8sd4Imfu1PikIeJ69p1Engu%2FZCHJYuyvubVcu6Od%2Bvy%2FHxr2CXtJiV950q9Lxp2rxda7%2F9%2F5ZcsF9%2FMWD7fPnCIh9fqTqU2ND7kPbvm0XdkFe28evhTRGYZucSPncO2FT84TS9oegvhMy3CjfhRKN%2Bye7k9K0ThNimU%2F6VoaBThhW5SxISu%2FeSK0MpGHF%2B%2F6v0%2FcRv08DSXCrexMIqe5cQGOqUBBUKu9hSPuW7RiztkyfD34P1n788APs3A550yb2v0dTTdRfGmx3Kc5zc84%2BX%2FQCG8QuLXsDkszlhNaoltCRT2AqzHVg1O5sFobeinSiPS2yKDLsK%2FRfRXnRwDv084Qh%2FWDkkYnxWtxE6HbLXDuB2Y7TjiDol1iAHhkbbhGhEdxmtMssw1ADtiPr8PIr6ylvZkZfN0cptg8%2BAhDMn6I1QCQepzy4h%2F&X-Amz-Signature=913adf7f7ab934fba21df628fc69e8fcf61f73ef698122a860e8afc515ed6707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
