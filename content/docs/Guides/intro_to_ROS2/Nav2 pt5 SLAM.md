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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TV7OVV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiKTq3KWtmCUd2%2Fm82j0iNtRctjbk4bXyGb7XNCeBr7AiEAz4thVLxpAg%2B%2FLqftmL89qwNkalhwPhk7uXt2DmGJAxkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA3ya5%2FE3bCV4wrzyrcA%2Fkf26kAAuGihewd6Fx8%2Bolm4nqJfCeXPieRo9nMtwDpueSm6YtTGe4p9%2F1b7iJ1aB25MoyOXIGlaOsf6KeV%2FpuPUsJaACIt%2B3MQtEwcubQW%2Bpf7StgbHZgWPOjLmvEKGAVXzbwCNoCqGK%2BI3lv4djgc7FJ3crIhJhhC7lUfyvMfBocm%2BlZV9XRkMXQ8vLE9KAEwL3SS8nXP%2FLLXviNmYs%2FBUOloNcuqpe6rx%2F6g0vz3L9dTZMDRhFslx3X7Fn3zpolaIxnUX0RWUrGdWw7gTvR13pzNGX0e3SYsHaJVjyy6cVr4g1zH1uKtRcwtDDMznknsBZhDD2Zlb9QNYRDStVzweLyo9%2FZz2YwiaZwhvunZngceEI%2FVtU43zii57ibNpj41Nn2Mq0g0grG3X3XdPhV4C3OqC%2Bu98L7BzJNxjvsT5e03KVXEe%2Fb2T8noAn7NE1lFnMTZWFRIsH50o7F16lUdhAjIgKhY2NWdUykZEoMgSXDt9pvK62LkgC%2B5D8xHkUua6XbVICuC9iESa%2Fdl%2FW0SpToJb2HjQobFgRKCY1F4GW7cfEv5Eb2ZvsKvrzSXpHLm%2FjHu08bKqeheGiKGHm%2BWtHF7awA53zcWGysUwFNm5XaC%2FYI4Kh0t5ErzML6L38QGOqUBJmevRt65Zn7LDj93zD2egp%2B7CzMH0COpJ%2FMRvFu%2BpChosYrWG9XPt8SpoqdLrZylWMNEPXxwdOdEvaFUvlpvn5bs0y21B9ENU4KDQaFktcmOexHtV2DTyXHUnMRF02vS21vjVpuqApTcXpWjZIUe%2BFdfLZ0SLmgm7Kl%2FMIH%2FOp3pGlAUesHbd8wBgcZavL%2B4%2B3Dd%2BdSIcUqjIGyRKKBjJjzrzEu4&X-Amz-Signature=c3d5db97882278a5c196221b3cef012ce71f409b8dfcd5003e5aa1e6f6870cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TV7OVV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiKTq3KWtmCUd2%2Fm82j0iNtRctjbk4bXyGb7XNCeBr7AiEAz4thVLxpAg%2B%2FLqftmL89qwNkalhwPhk7uXt2DmGJAxkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA3ya5%2FE3bCV4wrzyrcA%2Fkf26kAAuGihewd6Fx8%2Bolm4nqJfCeXPieRo9nMtwDpueSm6YtTGe4p9%2F1b7iJ1aB25MoyOXIGlaOsf6KeV%2FpuPUsJaACIt%2B3MQtEwcubQW%2Bpf7StgbHZgWPOjLmvEKGAVXzbwCNoCqGK%2BI3lv4djgc7FJ3crIhJhhC7lUfyvMfBocm%2BlZV9XRkMXQ8vLE9KAEwL3SS8nXP%2FLLXviNmYs%2FBUOloNcuqpe6rx%2F6g0vz3L9dTZMDRhFslx3X7Fn3zpolaIxnUX0RWUrGdWw7gTvR13pzNGX0e3SYsHaJVjyy6cVr4g1zH1uKtRcwtDDMznknsBZhDD2Zlb9QNYRDStVzweLyo9%2FZz2YwiaZwhvunZngceEI%2FVtU43zii57ibNpj41Nn2Mq0g0grG3X3XdPhV4C3OqC%2Bu98L7BzJNxjvsT5e03KVXEe%2Fb2T8noAn7NE1lFnMTZWFRIsH50o7F16lUdhAjIgKhY2NWdUykZEoMgSXDt9pvK62LkgC%2B5D8xHkUua6XbVICuC9iESa%2Fdl%2FW0SpToJb2HjQobFgRKCY1F4GW7cfEv5Eb2ZvsKvrzSXpHLm%2FjHu08bKqeheGiKGHm%2BWtHF7awA53zcWGysUwFNm5XaC%2FYI4Kh0t5ErzML6L38QGOqUBJmevRt65Zn7LDj93zD2egp%2B7CzMH0COpJ%2FMRvFu%2BpChosYrWG9XPt8SpoqdLrZylWMNEPXxwdOdEvaFUvlpvn5bs0y21B9ENU4KDQaFktcmOexHtV2DTyXHUnMRF02vS21vjVpuqApTcXpWjZIUe%2BFdfLZ0SLmgm7Kl%2FMIH%2FOp3pGlAUesHbd8wBgcZavL%2B4%2B3Dd%2BdSIcUqjIGyRKKBjJjzrzEu4&X-Amz-Signature=725b3dc0a07f47dff9844ae6de1697361a8e316edd932c35019587febf46508b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TV7OVV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiKTq3KWtmCUd2%2Fm82j0iNtRctjbk4bXyGb7XNCeBr7AiEAz4thVLxpAg%2B%2FLqftmL89qwNkalhwPhk7uXt2DmGJAxkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA3ya5%2FE3bCV4wrzyrcA%2Fkf26kAAuGihewd6Fx8%2Bolm4nqJfCeXPieRo9nMtwDpueSm6YtTGe4p9%2F1b7iJ1aB25MoyOXIGlaOsf6KeV%2FpuPUsJaACIt%2B3MQtEwcubQW%2Bpf7StgbHZgWPOjLmvEKGAVXzbwCNoCqGK%2BI3lv4djgc7FJ3crIhJhhC7lUfyvMfBocm%2BlZV9XRkMXQ8vLE9KAEwL3SS8nXP%2FLLXviNmYs%2FBUOloNcuqpe6rx%2F6g0vz3L9dTZMDRhFslx3X7Fn3zpolaIxnUX0RWUrGdWw7gTvR13pzNGX0e3SYsHaJVjyy6cVr4g1zH1uKtRcwtDDMznknsBZhDD2Zlb9QNYRDStVzweLyo9%2FZz2YwiaZwhvunZngceEI%2FVtU43zii57ibNpj41Nn2Mq0g0grG3X3XdPhV4C3OqC%2Bu98L7BzJNxjvsT5e03KVXEe%2Fb2T8noAn7NE1lFnMTZWFRIsH50o7F16lUdhAjIgKhY2NWdUykZEoMgSXDt9pvK62LkgC%2B5D8xHkUua6XbVICuC9iESa%2Fdl%2FW0SpToJb2HjQobFgRKCY1F4GW7cfEv5Eb2ZvsKvrzSXpHLm%2FjHu08bKqeheGiKGHm%2BWtHF7awA53zcWGysUwFNm5XaC%2FYI4Kh0t5ErzML6L38QGOqUBJmevRt65Zn7LDj93zD2egp%2B7CzMH0COpJ%2FMRvFu%2BpChosYrWG9XPt8SpoqdLrZylWMNEPXxwdOdEvaFUvlpvn5bs0y21B9ENU4KDQaFktcmOexHtV2DTyXHUnMRF02vS21vjVpuqApTcXpWjZIUe%2BFdfLZ0SLmgm7Kl%2FMIH%2FOp3pGlAUesHbd8wBgcZavL%2B4%2B3Dd%2BdSIcUqjIGyRKKBjJjzrzEu4&X-Amz-Signature=a848db99b522ec85764a7a43a71dcde0e3e4caf29ccc9201985c09ac8bd95633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TV7OVV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiKTq3KWtmCUd2%2Fm82j0iNtRctjbk4bXyGb7XNCeBr7AiEAz4thVLxpAg%2B%2FLqftmL89qwNkalhwPhk7uXt2DmGJAxkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA3ya5%2FE3bCV4wrzyrcA%2Fkf26kAAuGihewd6Fx8%2Bolm4nqJfCeXPieRo9nMtwDpueSm6YtTGe4p9%2F1b7iJ1aB25MoyOXIGlaOsf6KeV%2FpuPUsJaACIt%2B3MQtEwcubQW%2Bpf7StgbHZgWPOjLmvEKGAVXzbwCNoCqGK%2BI3lv4djgc7FJ3crIhJhhC7lUfyvMfBocm%2BlZV9XRkMXQ8vLE9KAEwL3SS8nXP%2FLLXviNmYs%2FBUOloNcuqpe6rx%2F6g0vz3L9dTZMDRhFslx3X7Fn3zpolaIxnUX0RWUrGdWw7gTvR13pzNGX0e3SYsHaJVjyy6cVr4g1zH1uKtRcwtDDMznknsBZhDD2Zlb9QNYRDStVzweLyo9%2FZz2YwiaZwhvunZngceEI%2FVtU43zii57ibNpj41Nn2Mq0g0grG3X3XdPhV4C3OqC%2Bu98L7BzJNxjvsT5e03KVXEe%2Fb2T8noAn7NE1lFnMTZWFRIsH50o7F16lUdhAjIgKhY2NWdUykZEoMgSXDt9pvK62LkgC%2B5D8xHkUua6XbVICuC9iESa%2Fdl%2FW0SpToJb2HjQobFgRKCY1F4GW7cfEv5Eb2ZvsKvrzSXpHLm%2FjHu08bKqeheGiKGHm%2BWtHF7awA53zcWGysUwFNm5XaC%2FYI4Kh0t5ErzML6L38QGOqUBJmevRt65Zn7LDj93zD2egp%2B7CzMH0COpJ%2FMRvFu%2BpChosYrWG9XPt8SpoqdLrZylWMNEPXxwdOdEvaFUvlpvn5bs0y21B9ENU4KDQaFktcmOexHtV2DTyXHUnMRF02vS21vjVpuqApTcXpWjZIUe%2BFdfLZ0SLmgm7Kl%2FMIH%2FOp3pGlAUesHbd8wBgcZavL%2B4%2B3Dd%2BdSIcUqjIGyRKKBjJjzrzEu4&X-Amz-Signature=1e046bf2a7c8d90d36827620d5dd1cca9ad247fbd8076ea320665749c1b6812e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TV7OVV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiKTq3KWtmCUd2%2Fm82j0iNtRctjbk4bXyGb7XNCeBr7AiEAz4thVLxpAg%2B%2FLqftmL89qwNkalhwPhk7uXt2DmGJAxkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA3ya5%2FE3bCV4wrzyrcA%2Fkf26kAAuGihewd6Fx8%2Bolm4nqJfCeXPieRo9nMtwDpueSm6YtTGe4p9%2F1b7iJ1aB25MoyOXIGlaOsf6KeV%2FpuPUsJaACIt%2B3MQtEwcubQW%2Bpf7StgbHZgWPOjLmvEKGAVXzbwCNoCqGK%2BI3lv4djgc7FJ3crIhJhhC7lUfyvMfBocm%2BlZV9XRkMXQ8vLE9KAEwL3SS8nXP%2FLLXviNmYs%2FBUOloNcuqpe6rx%2F6g0vz3L9dTZMDRhFslx3X7Fn3zpolaIxnUX0RWUrGdWw7gTvR13pzNGX0e3SYsHaJVjyy6cVr4g1zH1uKtRcwtDDMznknsBZhDD2Zlb9QNYRDStVzweLyo9%2FZz2YwiaZwhvunZngceEI%2FVtU43zii57ibNpj41Nn2Mq0g0grG3X3XdPhV4C3OqC%2Bu98L7BzJNxjvsT5e03KVXEe%2Fb2T8noAn7NE1lFnMTZWFRIsH50o7F16lUdhAjIgKhY2NWdUykZEoMgSXDt9pvK62LkgC%2B5D8xHkUua6XbVICuC9iESa%2Fdl%2FW0SpToJb2HjQobFgRKCY1F4GW7cfEv5Eb2ZvsKvrzSXpHLm%2FjHu08bKqeheGiKGHm%2BWtHF7awA53zcWGysUwFNm5XaC%2FYI4Kh0t5ErzML6L38QGOqUBJmevRt65Zn7LDj93zD2egp%2B7CzMH0COpJ%2FMRvFu%2BpChosYrWG9XPt8SpoqdLrZylWMNEPXxwdOdEvaFUvlpvn5bs0y21B9ENU4KDQaFktcmOexHtV2DTyXHUnMRF02vS21vjVpuqApTcXpWjZIUe%2BFdfLZ0SLmgm7Kl%2FMIH%2FOp3pGlAUesHbd8wBgcZavL%2B4%2B3Dd%2BdSIcUqjIGyRKKBjJjzrzEu4&X-Amz-Signature=114161e23ec8067aad96e331750a98f3d08343fd58bd1c01be56ce557356a04c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TV7OVV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiKTq3KWtmCUd2%2Fm82j0iNtRctjbk4bXyGb7XNCeBr7AiEAz4thVLxpAg%2B%2FLqftmL89qwNkalhwPhk7uXt2DmGJAxkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA3ya5%2FE3bCV4wrzyrcA%2Fkf26kAAuGihewd6Fx8%2Bolm4nqJfCeXPieRo9nMtwDpueSm6YtTGe4p9%2F1b7iJ1aB25MoyOXIGlaOsf6KeV%2FpuPUsJaACIt%2B3MQtEwcubQW%2Bpf7StgbHZgWPOjLmvEKGAVXzbwCNoCqGK%2BI3lv4djgc7FJ3crIhJhhC7lUfyvMfBocm%2BlZV9XRkMXQ8vLE9KAEwL3SS8nXP%2FLLXviNmYs%2FBUOloNcuqpe6rx%2F6g0vz3L9dTZMDRhFslx3X7Fn3zpolaIxnUX0RWUrGdWw7gTvR13pzNGX0e3SYsHaJVjyy6cVr4g1zH1uKtRcwtDDMznknsBZhDD2Zlb9QNYRDStVzweLyo9%2FZz2YwiaZwhvunZngceEI%2FVtU43zii57ibNpj41Nn2Mq0g0grG3X3XdPhV4C3OqC%2Bu98L7BzJNxjvsT5e03KVXEe%2Fb2T8noAn7NE1lFnMTZWFRIsH50o7F16lUdhAjIgKhY2NWdUykZEoMgSXDt9pvK62LkgC%2B5D8xHkUua6XbVICuC9iESa%2Fdl%2FW0SpToJb2HjQobFgRKCY1F4GW7cfEv5Eb2ZvsKvrzSXpHLm%2FjHu08bKqeheGiKGHm%2BWtHF7awA53zcWGysUwFNm5XaC%2FYI4Kh0t5ErzML6L38QGOqUBJmevRt65Zn7LDj93zD2egp%2B7CzMH0COpJ%2FMRvFu%2BpChosYrWG9XPt8SpoqdLrZylWMNEPXxwdOdEvaFUvlpvn5bs0y21B9ENU4KDQaFktcmOexHtV2DTyXHUnMRF02vS21vjVpuqApTcXpWjZIUe%2BFdfLZ0SLmgm7Kl%2FMIH%2FOp3pGlAUesHbd8wBgcZavL%2B4%2B3Dd%2BdSIcUqjIGyRKKBjJjzrzEu4&X-Amz-Signature=4887f3dc1d7269bc66f831b3b8a7a019c281002637d2044372c1e258ea093df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TV7OVV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiKTq3KWtmCUd2%2Fm82j0iNtRctjbk4bXyGb7XNCeBr7AiEAz4thVLxpAg%2B%2FLqftmL89qwNkalhwPhk7uXt2DmGJAxkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA3ya5%2FE3bCV4wrzyrcA%2Fkf26kAAuGihewd6Fx8%2Bolm4nqJfCeXPieRo9nMtwDpueSm6YtTGe4p9%2F1b7iJ1aB25MoyOXIGlaOsf6KeV%2FpuPUsJaACIt%2B3MQtEwcubQW%2Bpf7StgbHZgWPOjLmvEKGAVXzbwCNoCqGK%2BI3lv4djgc7FJ3crIhJhhC7lUfyvMfBocm%2BlZV9XRkMXQ8vLE9KAEwL3SS8nXP%2FLLXviNmYs%2FBUOloNcuqpe6rx%2F6g0vz3L9dTZMDRhFslx3X7Fn3zpolaIxnUX0RWUrGdWw7gTvR13pzNGX0e3SYsHaJVjyy6cVr4g1zH1uKtRcwtDDMznknsBZhDD2Zlb9QNYRDStVzweLyo9%2FZz2YwiaZwhvunZngceEI%2FVtU43zii57ibNpj41Nn2Mq0g0grG3X3XdPhV4C3OqC%2Bu98L7BzJNxjvsT5e03KVXEe%2Fb2T8noAn7NE1lFnMTZWFRIsH50o7F16lUdhAjIgKhY2NWdUykZEoMgSXDt9pvK62LkgC%2B5D8xHkUua6XbVICuC9iESa%2Fdl%2FW0SpToJb2HjQobFgRKCY1F4GW7cfEv5Eb2ZvsKvrzSXpHLm%2FjHu08bKqeheGiKGHm%2BWtHF7awA53zcWGysUwFNm5XaC%2FYI4Kh0t5ErzML6L38QGOqUBJmevRt65Zn7LDj93zD2egp%2B7CzMH0COpJ%2FMRvFu%2BpChosYrWG9XPt8SpoqdLrZylWMNEPXxwdOdEvaFUvlpvn5bs0y21B9ENU4KDQaFktcmOexHtV2DTyXHUnMRF02vS21vjVpuqApTcXpWjZIUe%2BFdfLZ0SLmgm7Kl%2FMIH%2FOp3pGlAUesHbd8wBgcZavL%2B4%2B3Dd%2BdSIcUqjIGyRKKBjJjzrzEu4&X-Amz-Signature=34f501b292a0409012d749d8eef9dc584a2b4b2e52922ab65663a5cace89f8da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TV7OVV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiKTq3KWtmCUd2%2Fm82j0iNtRctjbk4bXyGb7XNCeBr7AiEAz4thVLxpAg%2B%2FLqftmL89qwNkalhwPhk7uXt2DmGJAxkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA3ya5%2FE3bCV4wrzyrcA%2Fkf26kAAuGihewd6Fx8%2Bolm4nqJfCeXPieRo9nMtwDpueSm6YtTGe4p9%2F1b7iJ1aB25MoyOXIGlaOsf6KeV%2FpuPUsJaACIt%2B3MQtEwcubQW%2Bpf7StgbHZgWPOjLmvEKGAVXzbwCNoCqGK%2BI3lv4djgc7FJ3crIhJhhC7lUfyvMfBocm%2BlZV9XRkMXQ8vLE9KAEwL3SS8nXP%2FLLXviNmYs%2FBUOloNcuqpe6rx%2F6g0vz3L9dTZMDRhFslx3X7Fn3zpolaIxnUX0RWUrGdWw7gTvR13pzNGX0e3SYsHaJVjyy6cVr4g1zH1uKtRcwtDDMznknsBZhDD2Zlb9QNYRDStVzweLyo9%2FZz2YwiaZwhvunZngceEI%2FVtU43zii57ibNpj41Nn2Mq0g0grG3X3XdPhV4C3OqC%2Bu98L7BzJNxjvsT5e03KVXEe%2Fb2T8noAn7NE1lFnMTZWFRIsH50o7F16lUdhAjIgKhY2NWdUykZEoMgSXDt9pvK62LkgC%2B5D8xHkUua6XbVICuC9iESa%2Fdl%2FW0SpToJb2HjQobFgRKCY1F4GW7cfEv5Eb2ZvsKvrzSXpHLm%2FjHu08bKqeheGiKGHm%2BWtHF7awA53zcWGysUwFNm5XaC%2FYI4Kh0t5ErzML6L38QGOqUBJmevRt65Zn7LDj93zD2egp%2B7CzMH0COpJ%2FMRvFu%2BpChosYrWG9XPt8SpoqdLrZylWMNEPXxwdOdEvaFUvlpvn5bs0y21B9ENU4KDQaFktcmOexHtV2DTyXHUnMRF02vS21vjVpuqApTcXpWjZIUe%2BFdfLZ0SLmgm7Kl%2FMIH%2FOp3pGlAUesHbd8wBgcZavL%2B4%2B3Dd%2BdSIcUqjIGyRKKBjJjzrzEu4&X-Amz-Signature=5af7153e6bdbcdf577b3adef57f966ed49e20495626d6ebba24ce09e5fa34460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TV7OVV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiKTq3KWtmCUd2%2Fm82j0iNtRctjbk4bXyGb7XNCeBr7AiEAz4thVLxpAg%2B%2FLqftmL89qwNkalhwPhk7uXt2DmGJAxkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA3ya5%2FE3bCV4wrzyrcA%2Fkf26kAAuGihewd6Fx8%2Bolm4nqJfCeXPieRo9nMtwDpueSm6YtTGe4p9%2F1b7iJ1aB25MoyOXIGlaOsf6KeV%2FpuPUsJaACIt%2B3MQtEwcubQW%2Bpf7StgbHZgWPOjLmvEKGAVXzbwCNoCqGK%2BI3lv4djgc7FJ3crIhJhhC7lUfyvMfBocm%2BlZV9XRkMXQ8vLE9KAEwL3SS8nXP%2FLLXviNmYs%2FBUOloNcuqpe6rx%2F6g0vz3L9dTZMDRhFslx3X7Fn3zpolaIxnUX0RWUrGdWw7gTvR13pzNGX0e3SYsHaJVjyy6cVr4g1zH1uKtRcwtDDMznknsBZhDD2Zlb9QNYRDStVzweLyo9%2FZz2YwiaZwhvunZngceEI%2FVtU43zii57ibNpj41Nn2Mq0g0grG3X3XdPhV4C3OqC%2Bu98L7BzJNxjvsT5e03KVXEe%2Fb2T8noAn7NE1lFnMTZWFRIsH50o7F16lUdhAjIgKhY2NWdUykZEoMgSXDt9pvK62LkgC%2B5D8xHkUua6XbVICuC9iESa%2Fdl%2FW0SpToJb2HjQobFgRKCY1F4GW7cfEv5Eb2ZvsKvrzSXpHLm%2FjHu08bKqeheGiKGHm%2BWtHF7awA53zcWGysUwFNm5XaC%2FYI4Kh0t5ErzML6L38QGOqUBJmevRt65Zn7LDj93zD2egp%2B7CzMH0COpJ%2FMRvFu%2BpChosYrWG9XPt8SpoqdLrZylWMNEPXxwdOdEvaFUvlpvn5bs0y21B9ENU4KDQaFktcmOexHtV2DTyXHUnMRF02vS21vjVpuqApTcXpWjZIUe%2BFdfLZ0SLmgm7Kl%2FMIH%2FOp3pGlAUesHbd8wBgcZavL%2B4%2B3Dd%2BdSIcUqjIGyRKKBjJjzrzEu4&X-Amz-Signature=2a7254daab753ae4d1153dca425ba6d4fa8751349bfb3629c154c4f04e4fd415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TV7OVV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiKTq3KWtmCUd2%2Fm82j0iNtRctjbk4bXyGb7XNCeBr7AiEAz4thVLxpAg%2B%2FLqftmL89qwNkalhwPhk7uXt2DmGJAxkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA3ya5%2FE3bCV4wrzyrcA%2Fkf26kAAuGihewd6Fx8%2Bolm4nqJfCeXPieRo9nMtwDpueSm6YtTGe4p9%2F1b7iJ1aB25MoyOXIGlaOsf6KeV%2FpuPUsJaACIt%2B3MQtEwcubQW%2Bpf7StgbHZgWPOjLmvEKGAVXzbwCNoCqGK%2BI3lv4djgc7FJ3crIhJhhC7lUfyvMfBocm%2BlZV9XRkMXQ8vLE9KAEwL3SS8nXP%2FLLXviNmYs%2FBUOloNcuqpe6rx%2F6g0vz3L9dTZMDRhFslx3X7Fn3zpolaIxnUX0RWUrGdWw7gTvR13pzNGX0e3SYsHaJVjyy6cVr4g1zH1uKtRcwtDDMznknsBZhDD2Zlb9QNYRDStVzweLyo9%2FZz2YwiaZwhvunZngceEI%2FVtU43zii57ibNpj41Nn2Mq0g0grG3X3XdPhV4C3OqC%2Bu98L7BzJNxjvsT5e03KVXEe%2Fb2T8noAn7NE1lFnMTZWFRIsH50o7F16lUdhAjIgKhY2NWdUykZEoMgSXDt9pvK62LkgC%2B5D8xHkUua6XbVICuC9iESa%2Fdl%2FW0SpToJb2HjQobFgRKCY1F4GW7cfEv5Eb2ZvsKvrzSXpHLm%2FjHu08bKqeheGiKGHm%2BWtHF7awA53zcWGysUwFNm5XaC%2FYI4Kh0t5ErzML6L38QGOqUBJmevRt65Zn7LDj93zD2egp%2B7CzMH0COpJ%2FMRvFu%2BpChosYrWG9XPt8SpoqdLrZylWMNEPXxwdOdEvaFUvlpvn5bs0y21B9ENU4KDQaFktcmOexHtV2DTyXHUnMRF02vS21vjVpuqApTcXpWjZIUe%2BFdfLZ0SLmgm7Kl%2FMIH%2FOp3pGlAUesHbd8wBgcZavL%2B4%2B3Dd%2BdSIcUqjIGyRKKBjJjzrzEu4&X-Amz-Signature=0811cd954e270d080fe6d364e9e636a7f5a22e58dccf03aa1245e7b90e1021f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TV7OVV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiKTq3KWtmCUd2%2Fm82j0iNtRctjbk4bXyGb7XNCeBr7AiEAz4thVLxpAg%2B%2FLqftmL89qwNkalhwPhk7uXt2DmGJAxkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA3ya5%2FE3bCV4wrzyrcA%2Fkf26kAAuGihewd6Fx8%2Bolm4nqJfCeXPieRo9nMtwDpueSm6YtTGe4p9%2F1b7iJ1aB25MoyOXIGlaOsf6KeV%2FpuPUsJaACIt%2B3MQtEwcubQW%2Bpf7StgbHZgWPOjLmvEKGAVXzbwCNoCqGK%2BI3lv4djgc7FJ3crIhJhhC7lUfyvMfBocm%2BlZV9XRkMXQ8vLE9KAEwL3SS8nXP%2FLLXviNmYs%2FBUOloNcuqpe6rx%2F6g0vz3L9dTZMDRhFslx3X7Fn3zpolaIxnUX0RWUrGdWw7gTvR13pzNGX0e3SYsHaJVjyy6cVr4g1zH1uKtRcwtDDMznknsBZhDD2Zlb9QNYRDStVzweLyo9%2FZz2YwiaZwhvunZngceEI%2FVtU43zii57ibNpj41Nn2Mq0g0grG3X3XdPhV4C3OqC%2Bu98L7BzJNxjvsT5e03KVXEe%2Fb2T8noAn7NE1lFnMTZWFRIsH50o7F16lUdhAjIgKhY2NWdUykZEoMgSXDt9pvK62LkgC%2B5D8xHkUua6XbVICuC9iESa%2Fdl%2FW0SpToJb2HjQobFgRKCY1F4GW7cfEv5Eb2ZvsKvrzSXpHLm%2FjHu08bKqeheGiKGHm%2BWtHF7awA53zcWGysUwFNm5XaC%2FYI4Kh0t5ErzML6L38QGOqUBJmevRt65Zn7LDj93zD2egp%2B7CzMH0COpJ%2FMRvFu%2BpChosYrWG9XPt8SpoqdLrZylWMNEPXxwdOdEvaFUvlpvn5bs0y21B9ENU4KDQaFktcmOexHtV2DTyXHUnMRF02vS21vjVpuqApTcXpWjZIUe%2BFdfLZ0SLmgm7Kl%2FMIH%2FOp3pGlAUesHbd8wBgcZavL%2B4%2B3Dd%2BdSIcUqjIGyRKKBjJjzrzEu4&X-Amz-Signature=44688baa981df6f05456c6a10aa3a2d148d0649fe93659f1b4ca36309186cea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TV7OVV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiKTq3KWtmCUd2%2Fm82j0iNtRctjbk4bXyGb7XNCeBr7AiEAz4thVLxpAg%2B%2FLqftmL89qwNkalhwPhk7uXt2DmGJAxkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA3ya5%2FE3bCV4wrzyrcA%2Fkf26kAAuGihewd6Fx8%2Bolm4nqJfCeXPieRo9nMtwDpueSm6YtTGe4p9%2F1b7iJ1aB25MoyOXIGlaOsf6KeV%2FpuPUsJaACIt%2B3MQtEwcubQW%2Bpf7StgbHZgWPOjLmvEKGAVXzbwCNoCqGK%2BI3lv4djgc7FJ3crIhJhhC7lUfyvMfBocm%2BlZV9XRkMXQ8vLE9KAEwL3SS8nXP%2FLLXviNmYs%2FBUOloNcuqpe6rx%2F6g0vz3L9dTZMDRhFslx3X7Fn3zpolaIxnUX0RWUrGdWw7gTvR13pzNGX0e3SYsHaJVjyy6cVr4g1zH1uKtRcwtDDMznknsBZhDD2Zlb9QNYRDStVzweLyo9%2FZz2YwiaZwhvunZngceEI%2FVtU43zii57ibNpj41Nn2Mq0g0grG3X3XdPhV4C3OqC%2Bu98L7BzJNxjvsT5e03KVXEe%2Fb2T8noAn7NE1lFnMTZWFRIsH50o7F16lUdhAjIgKhY2NWdUykZEoMgSXDt9pvK62LkgC%2B5D8xHkUua6XbVICuC9iESa%2Fdl%2FW0SpToJb2HjQobFgRKCY1F4GW7cfEv5Eb2ZvsKvrzSXpHLm%2FjHu08bKqeheGiKGHm%2BWtHF7awA53zcWGysUwFNm5XaC%2FYI4Kh0t5ErzML6L38QGOqUBJmevRt65Zn7LDj93zD2egp%2B7CzMH0COpJ%2FMRvFu%2BpChosYrWG9XPt8SpoqdLrZylWMNEPXxwdOdEvaFUvlpvn5bs0y21B9ENU4KDQaFktcmOexHtV2DTyXHUnMRF02vS21vjVpuqApTcXpWjZIUe%2BFdfLZ0SLmgm7Kl%2FMIH%2FOp3pGlAUesHbd8wBgcZavL%2B4%2B3Dd%2BdSIcUqjIGyRKKBjJjzrzEu4&X-Amz-Signature=70a8ac27d184dfef69ed230fbe247ff4e44e392de44c726ea24e888b0543da41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TV7OVV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiKTq3KWtmCUd2%2Fm82j0iNtRctjbk4bXyGb7XNCeBr7AiEAz4thVLxpAg%2B%2FLqftmL89qwNkalhwPhk7uXt2DmGJAxkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA3ya5%2FE3bCV4wrzyrcA%2Fkf26kAAuGihewd6Fx8%2Bolm4nqJfCeXPieRo9nMtwDpueSm6YtTGe4p9%2F1b7iJ1aB25MoyOXIGlaOsf6KeV%2FpuPUsJaACIt%2B3MQtEwcubQW%2Bpf7StgbHZgWPOjLmvEKGAVXzbwCNoCqGK%2BI3lv4djgc7FJ3crIhJhhC7lUfyvMfBocm%2BlZV9XRkMXQ8vLE9KAEwL3SS8nXP%2FLLXviNmYs%2FBUOloNcuqpe6rx%2F6g0vz3L9dTZMDRhFslx3X7Fn3zpolaIxnUX0RWUrGdWw7gTvR13pzNGX0e3SYsHaJVjyy6cVr4g1zH1uKtRcwtDDMznknsBZhDD2Zlb9QNYRDStVzweLyo9%2FZz2YwiaZwhvunZngceEI%2FVtU43zii57ibNpj41Nn2Mq0g0grG3X3XdPhV4C3OqC%2Bu98L7BzJNxjvsT5e03KVXEe%2Fb2T8noAn7NE1lFnMTZWFRIsH50o7F16lUdhAjIgKhY2NWdUykZEoMgSXDt9pvK62LkgC%2B5D8xHkUua6XbVICuC9iESa%2Fdl%2FW0SpToJb2HjQobFgRKCY1F4GW7cfEv5Eb2ZvsKvrzSXpHLm%2FjHu08bKqeheGiKGHm%2BWtHF7awA53zcWGysUwFNm5XaC%2FYI4Kh0t5ErzML6L38QGOqUBJmevRt65Zn7LDj93zD2egp%2B7CzMH0COpJ%2FMRvFu%2BpChosYrWG9XPt8SpoqdLrZylWMNEPXxwdOdEvaFUvlpvn5bs0y21B9ENU4KDQaFktcmOexHtV2DTyXHUnMRF02vS21vjVpuqApTcXpWjZIUe%2BFdfLZ0SLmgm7Kl%2FMIH%2FOp3pGlAUesHbd8wBgcZavL%2B4%2B3Dd%2BdSIcUqjIGyRKKBjJjzrzEu4&X-Amz-Signature=f21d1eafdaef126c9c92062856fa30e878d1d592e738c612a82556a12b15d732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TV7OVV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiKTq3KWtmCUd2%2Fm82j0iNtRctjbk4bXyGb7XNCeBr7AiEAz4thVLxpAg%2B%2FLqftmL89qwNkalhwPhk7uXt2DmGJAxkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA3ya5%2FE3bCV4wrzyrcA%2Fkf26kAAuGihewd6Fx8%2Bolm4nqJfCeXPieRo9nMtwDpueSm6YtTGe4p9%2F1b7iJ1aB25MoyOXIGlaOsf6KeV%2FpuPUsJaACIt%2B3MQtEwcubQW%2Bpf7StgbHZgWPOjLmvEKGAVXzbwCNoCqGK%2BI3lv4djgc7FJ3crIhJhhC7lUfyvMfBocm%2BlZV9XRkMXQ8vLE9KAEwL3SS8nXP%2FLLXviNmYs%2FBUOloNcuqpe6rx%2F6g0vz3L9dTZMDRhFslx3X7Fn3zpolaIxnUX0RWUrGdWw7gTvR13pzNGX0e3SYsHaJVjyy6cVr4g1zH1uKtRcwtDDMznknsBZhDD2Zlb9QNYRDStVzweLyo9%2FZz2YwiaZwhvunZngceEI%2FVtU43zii57ibNpj41Nn2Mq0g0grG3X3XdPhV4C3OqC%2Bu98L7BzJNxjvsT5e03KVXEe%2Fb2T8noAn7NE1lFnMTZWFRIsH50o7F16lUdhAjIgKhY2NWdUykZEoMgSXDt9pvK62LkgC%2B5D8xHkUua6XbVICuC9iESa%2Fdl%2FW0SpToJb2HjQobFgRKCY1F4GW7cfEv5Eb2ZvsKvrzSXpHLm%2FjHu08bKqeheGiKGHm%2BWtHF7awA53zcWGysUwFNm5XaC%2FYI4Kh0t5ErzML6L38QGOqUBJmevRt65Zn7LDj93zD2egp%2B7CzMH0COpJ%2FMRvFu%2BpChosYrWG9XPt8SpoqdLrZylWMNEPXxwdOdEvaFUvlpvn5bs0y21B9ENU4KDQaFktcmOexHtV2DTyXHUnMRF02vS21vjVpuqApTcXpWjZIUe%2BFdfLZ0SLmgm7Kl%2FMIH%2FOp3pGlAUesHbd8wBgcZavL%2B4%2B3Dd%2BdSIcUqjIGyRKKBjJjzrzEu4&X-Amz-Signature=e27b5d755461ac635edb255675126cd7c7bf27dc11298f4c827acc49ed076252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
