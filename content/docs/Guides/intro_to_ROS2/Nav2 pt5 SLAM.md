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
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=cf6ef5d9130192a1cfabd496586daa85838e776c43c367c5867b44b1434f4947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=c37717f9048b8491970aa5a2caa892043aacf5ec41c8385cad7e12490d2bb291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=9da56f9107c87af05f914ada2bd50c2d82042d0d7ff5a3fc56a04804ae07ea83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=c95d2b64b0efceaf9014e5d0618f63a7c2d92543c557f8206fb1848935eb096b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=6c9a81afeebd3fe9cf7face4c6571f8a23edce01eaa9a0cabf21e6c5dbcc1aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=df5e54a2f19f2fc50b2722ee66814ca5070ce21dfbf98c523ef5b419e2da41f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=f34693ac5f9b4dc452411dda0b8b1974ad6ff0fd325231407fba5ad05522a601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=d4e724545a207b19958027ebf7386af174481cfccbc4b78daeb6dc6f1c961008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=8e507904a16cbbfef43c61d2d9134b7c200044be4044c93c35d45e16440de190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=5652a684d253786dc55edc4e043eda2a1930f5c1dbb8d0c537da5cc0f4bf87d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=a5e03fc5b3a24d896044764819fc546c6ddfe553f83f71ab7eb1d0178947da10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=080b26cfd2d9387a5b62dfe31fe3f930a5a42853b5cbc9c67566a422711ee29a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=3f32aa1046065de3e458425a712c9b67511abf12212306387a47ecc6e71f1704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDMIM2R%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnAWScSMp8IA2gDzHxLNM52X3BrnGz8sKyvV5NuJB5DAIgRLURu6SDO4YLYaOt7AlYQzJVQhKB0AE7oDFutA7PQpIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcty0oK2d2iFas%2FaircA%2Bq2RbdwP5Z3QFEZtLozj0umRODQph8Rb09XfympaWPZ4BFWL9u6DMi8%2BJwpsSlAqlT0Lze%2FF%2BSoJRzR6A0wwKWDO7NagM68aWynCTyhEnv8%2BJDLYeGsVgJBdKQ6g5om5qQ70m6JBX157AxZ5JrucIVyamKtDaC08ZyH1E8fK%2FHs%2FmyISLeoj5D38RKQzLmZTZmXfROdhjOuwuqLPbJWOkkJ8%2FGySUiOwt7zgi%2FgCCjIxG%2Fti%2BtTwPfgMpvFuNMRNzbiyWtDGrhJTZdKF4zwtgbbKQhcZTNfomh05vrQUQjmilXsueKtuuTFf4e%2BVnXwpDz%2BPMfYF30wabjAj5P4TNV8CE71B%2B486Q1VE2i6LWRupibtWqs7PaSgwlMlp%2F%2Bwz4slEir%2BAv9ABtllFLVjIPUAfSz2xEpYfvOP2LbclPD5UUAq07xMxjg44I%2BR9rK8hma%2FAcU%2FTW0JR0nqbg3eWimhuVzl%2Fb21ivZkUuV8T0vSmBAIsrQEohe71E8P7HVSyra3XN6z%2FsW%2FtldvImwWtsaV%2BahA2YD%2Fbh1CgsWsyL%2F53V%2F4PrPNUV9sFgxctLQwIoDKeJohXivhLu0cA1yxNkskD5A0ZI%2BE6hhXADQIF0SJeEGs94x%2Bm%2BbCnhvSMJjznsUGOqUBD1oCqkIpsXSbMB4bTFUl0Qahk6trXbJp2gkSY1%2FokVnPv8vBj7NXQ6OVuj02dyPqEyeYBKbNoJohfWWMRDSe4HcsTXchRAaG6klIjO5LRCR01Za2mvTPBgsCz6vQw5Wz1GQPQhS4tf3Twfy68C1tERogmh2KyNSVW%2Bti81HYsCstQW4wxXZpC%2BGYz5h9gkRXUA2oDKgVjwOe1MdyvevineA2rivK&X-Amz-Signature=e1dc4590ab10ec7eec29419bc37397f7c6bb316438188f15b3e25eaa5b0264ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
