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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKGVA5X%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJmqCVVGYg4F6rjKJ7vR%2FBhjca6ykshpvOam7eaMfweAiEAs6WVs1Ch7cTO9mtXJTerBc538bkHD29tU344dSmP%2Ftsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL8y6cZZSzrmTiOczircA9lsld2HnyHMIR0P2n29Kn2yM6KhKwZTGG4T0TGgxxkm79tMlmdK2v1IbW8C5%2FvSkiL8%2BX6aM9tcCnteDm95bYuoR4LPmk%2FPUWWGEw6xoGYz8T4ESgRJzYE0IElHzmaXJfr2%2FnIwMWUJeXsyaosmAFx2wKl4mHNyrKGvKpeG1kj039tAF%2B0KC7xiApVIorHHQ2bOEekeiE%2F0O2r6IHRuMNL%2FvodRHH8S5ctj8hxNSNYx2CJ38NaAp2gtD9b4yFl1T%2BRiNTPPwCFiZsYGDgIBqmumbReioluPdsrVwbiMHakDRFkBRjEfU3qJrRfaDXIRzuV7awdOZIqcQY0jRyVZ5T6vQEaco3m2J7BDVALllaCCG11e80eqKNoDdmxyip4GK8p%2BnMUcskUXu8MLCV40KL9r%2F90tt2MGT%2Br7l19ukZD%2BhdrHTeIlk4OKniQk%2BIC1vqt1WLst1d4v49t%2FCoA0YidGNdXx85I7BDk1F1e6iehSJe7dLCw8%2Bjf9ZXPqvh6t6RK%2FG9kccDvT9iBKmrAEADLPbw%2BzIRXQR%2BX80%2F%2FrjMsGmdJAojLd7fG9mITcFFb5Lu6Mg5m1sKTDdepsi6kkG40KtBw0RJvqipanze8mzjvj2mIF3UjI9Ou2ZMqZMKzwvMoGOqUBCwL%2BRXr7l4KuYGuK1f0zjVUA9EmH0Y8ddgo1xyhttWcNUNpAnVcs3p16VHoFSmF9XU2ZG%2BRR7RBnQ1PIzeXjhivQwxkCk6urwWMO%2FeUEbCQZrWzX6SrFe0yYl%2FMxnlijU12UlFdMmAZ9f5NCB1CUcF4CSQCWl1w4BQaK%2F1PRRsDJ4xNlqWb1k4civtHj6yCWhDoLPehPa1DQWATt68Q180vriYtk&X-Amz-Signature=b2da4b1b9ac941eca746123be185287ca7afe44b8beaaf079136ea73a1a444bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKGVA5X%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJmqCVVGYg4F6rjKJ7vR%2FBhjca6ykshpvOam7eaMfweAiEAs6WVs1Ch7cTO9mtXJTerBc538bkHD29tU344dSmP%2Ftsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL8y6cZZSzrmTiOczircA9lsld2HnyHMIR0P2n29Kn2yM6KhKwZTGG4T0TGgxxkm79tMlmdK2v1IbW8C5%2FvSkiL8%2BX6aM9tcCnteDm95bYuoR4LPmk%2FPUWWGEw6xoGYz8T4ESgRJzYE0IElHzmaXJfr2%2FnIwMWUJeXsyaosmAFx2wKl4mHNyrKGvKpeG1kj039tAF%2B0KC7xiApVIorHHQ2bOEekeiE%2F0O2r6IHRuMNL%2FvodRHH8S5ctj8hxNSNYx2CJ38NaAp2gtD9b4yFl1T%2BRiNTPPwCFiZsYGDgIBqmumbReioluPdsrVwbiMHakDRFkBRjEfU3qJrRfaDXIRzuV7awdOZIqcQY0jRyVZ5T6vQEaco3m2J7BDVALllaCCG11e80eqKNoDdmxyip4GK8p%2BnMUcskUXu8MLCV40KL9r%2F90tt2MGT%2Br7l19ukZD%2BhdrHTeIlk4OKniQk%2BIC1vqt1WLst1d4v49t%2FCoA0YidGNdXx85I7BDk1F1e6iehSJe7dLCw8%2Bjf9ZXPqvh6t6RK%2FG9kccDvT9iBKmrAEADLPbw%2BzIRXQR%2BX80%2F%2FrjMsGmdJAojLd7fG9mITcFFb5Lu6Mg5m1sKTDdepsi6kkG40KtBw0RJvqipanze8mzjvj2mIF3UjI9Ou2ZMqZMKzwvMoGOqUBCwL%2BRXr7l4KuYGuK1f0zjVUA9EmH0Y8ddgo1xyhttWcNUNpAnVcs3p16VHoFSmF9XU2ZG%2BRR7RBnQ1PIzeXjhivQwxkCk6urwWMO%2FeUEbCQZrWzX6SrFe0yYl%2FMxnlijU12UlFdMmAZ9f5NCB1CUcF4CSQCWl1w4BQaK%2F1PRRsDJ4xNlqWb1k4civtHj6yCWhDoLPehPa1DQWATt68Q180vriYtk&X-Amz-Signature=ada82aa13bcf8772db9af42a6c90a42a7f7f1de0d7d2fa8e07c8c62f597c592d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKGVA5X%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJmqCVVGYg4F6rjKJ7vR%2FBhjca6ykshpvOam7eaMfweAiEAs6WVs1Ch7cTO9mtXJTerBc538bkHD29tU344dSmP%2Ftsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL8y6cZZSzrmTiOczircA9lsld2HnyHMIR0P2n29Kn2yM6KhKwZTGG4T0TGgxxkm79tMlmdK2v1IbW8C5%2FvSkiL8%2BX6aM9tcCnteDm95bYuoR4LPmk%2FPUWWGEw6xoGYz8T4ESgRJzYE0IElHzmaXJfr2%2FnIwMWUJeXsyaosmAFx2wKl4mHNyrKGvKpeG1kj039tAF%2B0KC7xiApVIorHHQ2bOEekeiE%2F0O2r6IHRuMNL%2FvodRHH8S5ctj8hxNSNYx2CJ38NaAp2gtD9b4yFl1T%2BRiNTPPwCFiZsYGDgIBqmumbReioluPdsrVwbiMHakDRFkBRjEfU3qJrRfaDXIRzuV7awdOZIqcQY0jRyVZ5T6vQEaco3m2J7BDVALllaCCG11e80eqKNoDdmxyip4GK8p%2BnMUcskUXu8MLCV40KL9r%2F90tt2MGT%2Br7l19ukZD%2BhdrHTeIlk4OKniQk%2BIC1vqt1WLst1d4v49t%2FCoA0YidGNdXx85I7BDk1F1e6iehSJe7dLCw8%2Bjf9ZXPqvh6t6RK%2FG9kccDvT9iBKmrAEADLPbw%2BzIRXQR%2BX80%2F%2FrjMsGmdJAojLd7fG9mITcFFb5Lu6Mg5m1sKTDdepsi6kkG40KtBw0RJvqipanze8mzjvj2mIF3UjI9Ou2ZMqZMKzwvMoGOqUBCwL%2BRXr7l4KuYGuK1f0zjVUA9EmH0Y8ddgo1xyhttWcNUNpAnVcs3p16VHoFSmF9XU2ZG%2BRR7RBnQ1PIzeXjhivQwxkCk6urwWMO%2FeUEbCQZrWzX6SrFe0yYl%2FMxnlijU12UlFdMmAZ9f5NCB1CUcF4CSQCWl1w4BQaK%2F1PRRsDJ4xNlqWb1k4civtHj6yCWhDoLPehPa1DQWATt68Q180vriYtk&X-Amz-Signature=29619996b0dec8e04ab310694895c6cd241fb5938cf770c607d97a412919533f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKGVA5X%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJmqCVVGYg4F6rjKJ7vR%2FBhjca6ykshpvOam7eaMfweAiEAs6WVs1Ch7cTO9mtXJTerBc538bkHD29tU344dSmP%2Ftsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL8y6cZZSzrmTiOczircA9lsld2HnyHMIR0P2n29Kn2yM6KhKwZTGG4T0TGgxxkm79tMlmdK2v1IbW8C5%2FvSkiL8%2BX6aM9tcCnteDm95bYuoR4LPmk%2FPUWWGEw6xoGYz8T4ESgRJzYE0IElHzmaXJfr2%2FnIwMWUJeXsyaosmAFx2wKl4mHNyrKGvKpeG1kj039tAF%2B0KC7xiApVIorHHQ2bOEekeiE%2F0O2r6IHRuMNL%2FvodRHH8S5ctj8hxNSNYx2CJ38NaAp2gtD9b4yFl1T%2BRiNTPPwCFiZsYGDgIBqmumbReioluPdsrVwbiMHakDRFkBRjEfU3qJrRfaDXIRzuV7awdOZIqcQY0jRyVZ5T6vQEaco3m2J7BDVALllaCCG11e80eqKNoDdmxyip4GK8p%2BnMUcskUXu8MLCV40KL9r%2F90tt2MGT%2Br7l19ukZD%2BhdrHTeIlk4OKniQk%2BIC1vqt1WLst1d4v49t%2FCoA0YidGNdXx85I7BDk1F1e6iehSJe7dLCw8%2Bjf9ZXPqvh6t6RK%2FG9kccDvT9iBKmrAEADLPbw%2BzIRXQR%2BX80%2F%2FrjMsGmdJAojLd7fG9mITcFFb5Lu6Mg5m1sKTDdepsi6kkG40KtBw0RJvqipanze8mzjvj2mIF3UjI9Ou2ZMqZMKzwvMoGOqUBCwL%2BRXr7l4KuYGuK1f0zjVUA9EmH0Y8ddgo1xyhttWcNUNpAnVcs3p16VHoFSmF9XU2ZG%2BRR7RBnQ1PIzeXjhivQwxkCk6urwWMO%2FeUEbCQZrWzX6SrFe0yYl%2FMxnlijU12UlFdMmAZ9f5NCB1CUcF4CSQCWl1w4BQaK%2F1PRRsDJ4xNlqWb1k4civtHj6yCWhDoLPehPa1DQWATt68Q180vriYtk&X-Amz-Signature=647cae40efd72d30a869a0de93d272afde83d79fc4da065eb4ebd4c17277785d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKGVA5X%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJmqCVVGYg4F6rjKJ7vR%2FBhjca6ykshpvOam7eaMfweAiEAs6WVs1Ch7cTO9mtXJTerBc538bkHD29tU344dSmP%2Ftsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL8y6cZZSzrmTiOczircA9lsld2HnyHMIR0P2n29Kn2yM6KhKwZTGG4T0TGgxxkm79tMlmdK2v1IbW8C5%2FvSkiL8%2BX6aM9tcCnteDm95bYuoR4LPmk%2FPUWWGEw6xoGYz8T4ESgRJzYE0IElHzmaXJfr2%2FnIwMWUJeXsyaosmAFx2wKl4mHNyrKGvKpeG1kj039tAF%2B0KC7xiApVIorHHQ2bOEekeiE%2F0O2r6IHRuMNL%2FvodRHH8S5ctj8hxNSNYx2CJ38NaAp2gtD9b4yFl1T%2BRiNTPPwCFiZsYGDgIBqmumbReioluPdsrVwbiMHakDRFkBRjEfU3qJrRfaDXIRzuV7awdOZIqcQY0jRyVZ5T6vQEaco3m2J7BDVALllaCCG11e80eqKNoDdmxyip4GK8p%2BnMUcskUXu8MLCV40KL9r%2F90tt2MGT%2Br7l19ukZD%2BhdrHTeIlk4OKniQk%2BIC1vqt1WLst1d4v49t%2FCoA0YidGNdXx85I7BDk1F1e6iehSJe7dLCw8%2Bjf9ZXPqvh6t6RK%2FG9kccDvT9iBKmrAEADLPbw%2BzIRXQR%2BX80%2F%2FrjMsGmdJAojLd7fG9mITcFFb5Lu6Mg5m1sKTDdepsi6kkG40KtBw0RJvqipanze8mzjvj2mIF3UjI9Ou2ZMqZMKzwvMoGOqUBCwL%2BRXr7l4KuYGuK1f0zjVUA9EmH0Y8ddgo1xyhttWcNUNpAnVcs3p16VHoFSmF9XU2ZG%2BRR7RBnQ1PIzeXjhivQwxkCk6urwWMO%2FeUEbCQZrWzX6SrFe0yYl%2FMxnlijU12UlFdMmAZ9f5NCB1CUcF4CSQCWl1w4BQaK%2F1PRRsDJ4xNlqWb1k4civtHj6yCWhDoLPehPa1DQWATt68Q180vriYtk&X-Amz-Signature=599dfeaddb1884d074e074daf6dc3b0f5cb0231f579910b130ae11ee7001e0b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKGVA5X%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJmqCVVGYg4F6rjKJ7vR%2FBhjca6ykshpvOam7eaMfweAiEAs6WVs1Ch7cTO9mtXJTerBc538bkHD29tU344dSmP%2Ftsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL8y6cZZSzrmTiOczircA9lsld2HnyHMIR0P2n29Kn2yM6KhKwZTGG4T0TGgxxkm79tMlmdK2v1IbW8C5%2FvSkiL8%2BX6aM9tcCnteDm95bYuoR4LPmk%2FPUWWGEw6xoGYz8T4ESgRJzYE0IElHzmaXJfr2%2FnIwMWUJeXsyaosmAFx2wKl4mHNyrKGvKpeG1kj039tAF%2B0KC7xiApVIorHHQ2bOEekeiE%2F0O2r6IHRuMNL%2FvodRHH8S5ctj8hxNSNYx2CJ38NaAp2gtD9b4yFl1T%2BRiNTPPwCFiZsYGDgIBqmumbReioluPdsrVwbiMHakDRFkBRjEfU3qJrRfaDXIRzuV7awdOZIqcQY0jRyVZ5T6vQEaco3m2J7BDVALllaCCG11e80eqKNoDdmxyip4GK8p%2BnMUcskUXu8MLCV40KL9r%2F90tt2MGT%2Br7l19ukZD%2BhdrHTeIlk4OKniQk%2BIC1vqt1WLst1d4v49t%2FCoA0YidGNdXx85I7BDk1F1e6iehSJe7dLCw8%2Bjf9ZXPqvh6t6RK%2FG9kccDvT9iBKmrAEADLPbw%2BzIRXQR%2BX80%2F%2FrjMsGmdJAojLd7fG9mITcFFb5Lu6Mg5m1sKTDdepsi6kkG40KtBw0RJvqipanze8mzjvj2mIF3UjI9Ou2ZMqZMKzwvMoGOqUBCwL%2BRXr7l4KuYGuK1f0zjVUA9EmH0Y8ddgo1xyhttWcNUNpAnVcs3p16VHoFSmF9XU2ZG%2BRR7RBnQ1PIzeXjhivQwxkCk6urwWMO%2FeUEbCQZrWzX6SrFe0yYl%2FMxnlijU12UlFdMmAZ9f5NCB1CUcF4CSQCWl1w4BQaK%2F1PRRsDJ4xNlqWb1k4civtHj6yCWhDoLPehPa1DQWATt68Q180vriYtk&X-Amz-Signature=c384dc6d6e742d482d8bde0599f126da51df68d78e4b30cd6398891d05317c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKGVA5X%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJmqCVVGYg4F6rjKJ7vR%2FBhjca6ykshpvOam7eaMfweAiEAs6WVs1Ch7cTO9mtXJTerBc538bkHD29tU344dSmP%2Ftsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL8y6cZZSzrmTiOczircA9lsld2HnyHMIR0P2n29Kn2yM6KhKwZTGG4T0TGgxxkm79tMlmdK2v1IbW8C5%2FvSkiL8%2BX6aM9tcCnteDm95bYuoR4LPmk%2FPUWWGEw6xoGYz8T4ESgRJzYE0IElHzmaXJfr2%2FnIwMWUJeXsyaosmAFx2wKl4mHNyrKGvKpeG1kj039tAF%2B0KC7xiApVIorHHQ2bOEekeiE%2F0O2r6IHRuMNL%2FvodRHH8S5ctj8hxNSNYx2CJ38NaAp2gtD9b4yFl1T%2BRiNTPPwCFiZsYGDgIBqmumbReioluPdsrVwbiMHakDRFkBRjEfU3qJrRfaDXIRzuV7awdOZIqcQY0jRyVZ5T6vQEaco3m2J7BDVALllaCCG11e80eqKNoDdmxyip4GK8p%2BnMUcskUXu8MLCV40KL9r%2F90tt2MGT%2Br7l19ukZD%2BhdrHTeIlk4OKniQk%2BIC1vqt1WLst1d4v49t%2FCoA0YidGNdXx85I7BDk1F1e6iehSJe7dLCw8%2Bjf9ZXPqvh6t6RK%2FG9kccDvT9iBKmrAEADLPbw%2BzIRXQR%2BX80%2F%2FrjMsGmdJAojLd7fG9mITcFFb5Lu6Mg5m1sKTDdepsi6kkG40KtBw0RJvqipanze8mzjvj2mIF3UjI9Ou2ZMqZMKzwvMoGOqUBCwL%2BRXr7l4KuYGuK1f0zjVUA9EmH0Y8ddgo1xyhttWcNUNpAnVcs3p16VHoFSmF9XU2ZG%2BRR7RBnQ1PIzeXjhivQwxkCk6urwWMO%2FeUEbCQZrWzX6SrFe0yYl%2FMxnlijU12UlFdMmAZ9f5NCB1CUcF4CSQCWl1w4BQaK%2F1PRRsDJ4xNlqWb1k4civtHj6yCWhDoLPehPa1DQWATt68Q180vriYtk&X-Amz-Signature=b90b0a1bb0d4fd2f1807279b1f93caf7745d4c4aa0d1c9d382319c9bbac65d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKGVA5X%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJmqCVVGYg4F6rjKJ7vR%2FBhjca6ykshpvOam7eaMfweAiEAs6WVs1Ch7cTO9mtXJTerBc538bkHD29tU344dSmP%2Ftsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL8y6cZZSzrmTiOczircA9lsld2HnyHMIR0P2n29Kn2yM6KhKwZTGG4T0TGgxxkm79tMlmdK2v1IbW8C5%2FvSkiL8%2BX6aM9tcCnteDm95bYuoR4LPmk%2FPUWWGEw6xoGYz8T4ESgRJzYE0IElHzmaXJfr2%2FnIwMWUJeXsyaosmAFx2wKl4mHNyrKGvKpeG1kj039tAF%2B0KC7xiApVIorHHQ2bOEekeiE%2F0O2r6IHRuMNL%2FvodRHH8S5ctj8hxNSNYx2CJ38NaAp2gtD9b4yFl1T%2BRiNTPPwCFiZsYGDgIBqmumbReioluPdsrVwbiMHakDRFkBRjEfU3qJrRfaDXIRzuV7awdOZIqcQY0jRyVZ5T6vQEaco3m2J7BDVALllaCCG11e80eqKNoDdmxyip4GK8p%2BnMUcskUXu8MLCV40KL9r%2F90tt2MGT%2Br7l19ukZD%2BhdrHTeIlk4OKniQk%2BIC1vqt1WLst1d4v49t%2FCoA0YidGNdXx85I7BDk1F1e6iehSJe7dLCw8%2Bjf9ZXPqvh6t6RK%2FG9kccDvT9iBKmrAEADLPbw%2BzIRXQR%2BX80%2F%2FrjMsGmdJAojLd7fG9mITcFFb5Lu6Mg5m1sKTDdepsi6kkG40KtBw0RJvqipanze8mzjvj2mIF3UjI9Ou2ZMqZMKzwvMoGOqUBCwL%2BRXr7l4KuYGuK1f0zjVUA9EmH0Y8ddgo1xyhttWcNUNpAnVcs3p16VHoFSmF9XU2ZG%2BRR7RBnQ1PIzeXjhivQwxkCk6urwWMO%2FeUEbCQZrWzX6SrFe0yYl%2FMxnlijU12UlFdMmAZ9f5NCB1CUcF4CSQCWl1w4BQaK%2F1PRRsDJ4xNlqWb1k4civtHj6yCWhDoLPehPa1DQWATt68Q180vriYtk&X-Amz-Signature=e0109cf63b0be1e84ccc64939b658895fd0f065191e9e67a19a7eb3b50f2ea18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKGVA5X%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJmqCVVGYg4F6rjKJ7vR%2FBhjca6ykshpvOam7eaMfweAiEAs6WVs1Ch7cTO9mtXJTerBc538bkHD29tU344dSmP%2Ftsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL8y6cZZSzrmTiOczircA9lsld2HnyHMIR0P2n29Kn2yM6KhKwZTGG4T0TGgxxkm79tMlmdK2v1IbW8C5%2FvSkiL8%2BX6aM9tcCnteDm95bYuoR4LPmk%2FPUWWGEw6xoGYz8T4ESgRJzYE0IElHzmaXJfr2%2FnIwMWUJeXsyaosmAFx2wKl4mHNyrKGvKpeG1kj039tAF%2B0KC7xiApVIorHHQ2bOEekeiE%2F0O2r6IHRuMNL%2FvodRHH8S5ctj8hxNSNYx2CJ38NaAp2gtD9b4yFl1T%2BRiNTPPwCFiZsYGDgIBqmumbReioluPdsrVwbiMHakDRFkBRjEfU3qJrRfaDXIRzuV7awdOZIqcQY0jRyVZ5T6vQEaco3m2J7BDVALllaCCG11e80eqKNoDdmxyip4GK8p%2BnMUcskUXu8MLCV40KL9r%2F90tt2MGT%2Br7l19ukZD%2BhdrHTeIlk4OKniQk%2BIC1vqt1WLst1d4v49t%2FCoA0YidGNdXx85I7BDk1F1e6iehSJe7dLCw8%2Bjf9ZXPqvh6t6RK%2FG9kccDvT9iBKmrAEADLPbw%2BzIRXQR%2BX80%2F%2FrjMsGmdJAojLd7fG9mITcFFb5Lu6Mg5m1sKTDdepsi6kkG40KtBw0RJvqipanze8mzjvj2mIF3UjI9Ou2ZMqZMKzwvMoGOqUBCwL%2BRXr7l4KuYGuK1f0zjVUA9EmH0Y8ddgo1xyhttWcNUNpAnVcs3p16VHoFSmF9XU2ZG%2BRR7RBnQ1PIzeXjhivQwxkCk6urwWMO%2FeUEbCQZrWzX6SrFe0yYl%2FMxnlijU12UlFdMmAZ9f5NCB1CUcF4CSQCWl1w4BQaK%2F1PRRsDJ4xNlqWb1k4civtHj6yCWhDoLPehPa1DQWATt68Q180vriYtk&X-Amz-Signature=cf2901d9b8852f958f63a747d0f34ffca470e05b3eda14be244ba57bf61969d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKGVA5X%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJmqCVVGYg4F6rjKJ7vR%2FBhjca6ykshpvOam7eaMfweAiEAs6WVs1Ch7cTO9mtXJTerBc538bkHD29tU344dSmP%2Ftsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL8y6cZZSzrmTiOczircA9lsld2HnyHMIR0P2n29Kn2yM6KhKwZTGG4T0TGgxxkm79tMlmdK2v1IbW8C5%2FvSkiL8%2BX6aM9tcCnteDm95bYuoR4LPmk%2FPUWWGEw6xoGYz8T4ESgRJzYE0IElHzmaXJfr2%2FnIwMWUJeXsyaosmAFx2wKl4mHNyrKGvKpeG1kj039tAF%2B0KC7xiApVIorHHQ2bOEekeiE%2F0O2r6IHRuMNL%2FvodRHH8S5ctj8hxNSNYx2CJ38NaAp2gtD9b4yFl1T%2BRiNTPPwCFiZsYGDgIBqmumbReioluPdsrVwbiMHakDRFkBRjEfU3qJrRfaDXIRzuV7awdOZIqcQY0jRyVZ5T6vQEaco3m2J7BDVALllaCCG11e80eqKNoDdmxyip4GK8p%2BnMUcskUXu8MLCV40KL9r%2F90tt2MGT%2Br7l19ukZD%2BhdrHTeIlk4OKniQk%2BIC1vqt1WLst1d4v49t%2FCoA0YidGNdXx85I7BDk1F1e6iehSJe7dLCw8%2Bjf9ZXPqvh6t6RK%2FG9kccDvT9iBKmrAEADLPbw%2BzIRXQR%2BX80%2F%2FrjMsGmdJAojLd7fG9mITcFFb5Lu6Mg5m1sKTDdepsi6kkG40KtBw0RJvqipanze8mzjvj2mIF3UjI9Ou2ZMqZMKzwvMoGOqUBCwL%2BRXr7l4KuYGuK1f0zjVUA9EmH0Y8ddgo1xyhttWcNUNpAnVcs3p16VHoFSmF9XU2ZG%2BRR7RBnQ1PIzeXjhivQwxkCk6urwWMO%2FeUEbCQZrWzX6SrFe0yYl%2FMxnlijU12UlFdMmAZ9f5NCB1CUcF4CSQCWl1w4BQaK%2F1PRRsDJ4xNlqWb1k4civtHj6yCWhDoLPehPa1DQWATt68Q180vriYtk&X-Amz-Signature=0dc2d50231cf68e21dfac334077c7775da825435d277402e962930256384583d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKGVA5X%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJmqCVVGYg4F6rjKJ7vR%2FBhjca6ykshpvOam7eaMfweAiEAs6WVs1Ch7cTO9mtXJTerBc538bkHD29tU344dSmP%2Ftsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL8y6cZZSzrmTiOczircA9lsld2HnyHMIR0P2n29Kn2yM6KhKwZTGG4T0TGgxxkm79tMlmdK2v1IbW8C5%2FvSkiL8%2BX6aM9tcCnteDm95bYuoR4LPmk%2FPUWWGEw6xoGYz8T4ESgRJzYE0IElHzmaXJfr2%2FnIwMWUJeXsyaosmAFx2wKl4mHNyrKGvKpeG1kj039tAF%2B0KC7xiApVIorHHQ2bOEekeiE%2F0O2r6IHRuMNL%2FvodRHH8S5ctj8hxNSNYx2CJ38NaAp2gtD9b4yFl1T%2BRiNTPPwCFiZsYGDgIBqmumbReioluPdsrVwbiMHakDRFkBRjEfU3qJrRfaDXIRzuV7awdOZIqcQY0jRyVZ5T6vQEaco3m2J7BDVALllaCCG11e80eqKNoDdmxyip4GK8p%2BnMUcskUXu8MLCV40KL9r%2F90tt2MGT%2Br7l19ukZD%2BhdrHTeIlk4OKniQk%2BIC1vqt1WLst1d4v49t%2FCoA0YidGNdXx85I7BDk1F1e6iehSJe7dLCw8%2Bjf9ZXPqvh6t6RK%2FG9kccDvT9iBKmrAEADLPbw%2BzIRXQR%2BX80%2F%2FrjMsGmdJAojLd7fG9mITcFFb5Lu6Mg5m1sKTDdepsi6kkG40KtBw0RJvqipanze8mzjvj2mIF3UjI9Ou2ZMqZMKzwvMoGOqUBCwL%2BRXr7l4KuYGuK1f0zjVUA9EmH0Y8ddgo1xyhttWcNUNpAnVcs3p16VHoFSmF9XU2ZG%2BRR7RBnQ1PIzeXjhivQwxkCk6urwWMO%2FeUEbCQZrWzX6SrFe0yYl%2FMxnlijU12UlFdMmAZ9f5NCB1CUcF4CSQCWl1w4BQaK%2F1PRRsDJ4xNlqWb1k4civtHj6yCWhDoLPehPa1DQWATt68Q180vriYtk&X-Amz-Signature=cc8a6a47ed30815e2bfa733ce91248c91879a246135f853cfbc5998c876f7db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKGVA5X%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJmqCVVGYg4F6rjKJ7vR%2FBhjca6ykshpvOam7eaMfweAiEAs6WVs1Ch7cTO9mtXJTerBc538bkHD29tU344dSmP%2Ftsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL8y6cZZSzrmTiOczircA9lsld2HnyHMIR0P2n29Kn2yM6KhKwZTGG4T0TGgxxkm79tMlmdK2v1IbW8C5%2FvSkiL8%2BX6aM9tcCnteDm95bYuoR4LPmk%2FPUWWGEw6xoGYz8T4ESgRJzYE0IElHzmaXJfr2%2FnIwMWUJeXsyaosmAFx2wKl4mHNyrKGvKpeG1kj039tAF%2B0KC7xiApVIorHHQ2bOEekeiE%2F0O2r6IHRuMNL%2FvodRHH8S5ctj8hxNSNYx2CJ38NaAp2gtD9b4yFl1T%2BRiNTPPwCFiZsYGDgIBqmumbReioluPdsrVwbiMHakDRFkBRjEfU3qJrRfaDXIRzuV7awdOZIqcQY0jRyVZ5T6vQEaco3m2J7BDVALllaCCG11e80eqKNoDdmxyip4GK8p%2BnMUcskUXu8MLCV40KL9r%2F90tt2MGT%2Br7l19ukZD%2BhdrHTeIlk4OKniQk%2BIC1vqt1WLst1d4v49t%2FCoA0YidGNdXx85I7BDk1F1e6iehSJe7dLCw8%2Bjf9ZXPqvh6t6RK%2FG9kccDvT9iBKmrAEADLPbw%2BzIRXQR%2BX80%2F%2FrjMsGmdJAojLd7fG9mITcFFb5Lu6Mg5m1sKTDdepsi6kkG40KtBw0RJvqipanze8mzjvj2mIF3UjI9Ou2ZMqZMKzwvMoGOqUBCwL%2BRXr7l4KuYGuK1f0zjVUA9EmH0Y8ddgo1xyhttWcNUNpAnVcs3p16VHoFSmF9XU2ZG%2BRR7RBnQ1PIzeXjhivQwxkCk6urwWMO%2FeUEbCQZrWzX6SrFe0yYl%2FMxnlijU12UlFdMmAZ9f5NCB1CUcF4CSQCWl1w4BQaK%2F1PRRsDJ4xNlqWb1k4civtHj6yCWhDoLPehPa1DQWATt68Q180vriYtk&X-Amz-Signature=82ec185d652bb94ceddb989922f4afc58a01984a3d22ca4fdf95eacf97a739e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKGVA5X%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJmqCVVGYg4F6rjKJ7vR%2FBhjca6ykshpvOam7eaMfweAiEAs6WVs1Ch7cTO9mtXJTerBc538bkHD29tU344dSmP%2Ftsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL8y6cZZSzrmTiOczircA9lsld2HnyHMIR0P2n29Kn2yM6KhKwZTGG4T0TGgxxkm79tMlmdK2v1IbW8C5%2FvSkiL8%2BX6aM9tcCnteDm95bYuoR4LPmk%2FPUWWGEw6xoGYz8T4ESgRJzYE0IElHzmaXJfr2%2FnIwMWUJeXsyaosmAFx2wKl4mHNyrKGvKpeG1kj039tAF%2B0KC7xiApVIorHHQ2bOEekeiE%2F0O2r6IHRuMNL%2FvodRHH8S5ctj8hxNSNYx2CJ38NaAp2gtD9b4yFl1T%2BRiNTPPwCFiZsYGDgIBqmumbReioluPdsrVwbiMHakDRFkBRjEfU3qJrRfaDXIRzuV7awdOZIqcQY0jRyVZ5T6vQEaco3m2J7BDVALllaCCG11e80eqKNoDdmxyip4GK8p%2BnMUcskUXu8MLCV40KL9r%2F90tt2MGT%2Br7l19ukZD%2BhdrHTeIlk4OKniQk%2BIC1vqt1WLst1d4v49t%2FCoA0YidGNdXx85I7BDk1F1e6iehSJe7dLCw8%2Bjf9ZXPqvh6t6RK%2FG9kccDvT9iBKmrAEADLPbw%2BzIRXQR%2BX80%2F%2FrjMsGmdJAojLd7fG9mITcFFb5Lu6Mg5m1sKTDdepsi6kkG40KtBw0RJvqipanze8mzjvj2mIF3UjI9Ou2ZMqZMKzwvMoGOqUBCwL%2BRXr7l4KuYGuK1f0zjVUA9EmH0Y8ddgo1xyhttWcNUNpAnVcs3p16VHoFSmF9XU2ZG%2BRR7RBnQ1PIzeXjhivQwxkCk6urwWMO%2FeUEbCQZrWzX6SrFe0yYl%2FMxnlijU12UlFdMmAZ9f5NCB1CUcF4CSQCWl1w4BQaK%2F1PRRsDJ4xNlqWb1k4civtHj6yCWhDoLPehPa1DQWATt68Q180vriYtk&X-Amz-Signature=a70dcd4ad32ce9cd8468cc29a73f680ff99f97de581cb56d6ee7eb3712f85bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKGVA5X%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJmqCVVGYg4F6rjKJ7vR%2FBhjca6ykshpvOam7eaMfweAiEAs6WVs1Ch7cTO9mtXJTerBc538bkHD29tU344dSmP%2Ftsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL8y6cZZSzrmTiOczircA9lsld2HnyHMIR0P2n29Kn2yM6KhKwZTGG4T0TGgxxkm79tMlmdK2v1IbW8C5%2FvSkiL8%2BX6aM9tcCnteDm95bYuoR4LPmk%2FPUWWGEw6xoGYz8T4ESgRJzYE0IElHzmaXJfr2%2FnIwMWUJeXsyaosmAFx2wKl4mHNyrKGvKpeG1kj039tAF%2B0KC7xiApVIorHHQ2bOEekeiE%2F0O2r6IHRuMNL%2FvodRHH8S5ctj8hxNSNYx2CJ38NaAp2gtD9b4yFl1T%2BRiNTPPwCFiZsYGDgIBqmumbReioluPdsrVwbiMHakDRFkBRjEfU3qJrRfaDXIRzuV7awdOZIqcQY0jRyVZ5T6vQEaco3m2J7BDVALllaCCG11e80eqKNoDdmxyip4GK8p%2BnMUcskUXu8MLCV40KL9r%2F90tt2MGT%2Br7l19ukZD%2BhdrHTeIlk4OKniQk%2BIC1vqt1WLst1d4v49t%2FCoA0YidGNdXx85I7BDk1F1e6iehSJe7dLCw8%2Bjf9ZXPqvh6t6RK%2FG9kccDvT9iBKmrAEADLPbw%2BzIRXQR%2BX80%2F%2FrjMsGmdJAojLd7fG9mITcFFb5Lu6Mg5m1sKTDdepsi6kkG40KtBw0RJvqipanze8mzjvj2mIF3UjI9Ou2ZMqZMKzwvMoGOqUBCwL%2BRXr7l4KuYGuK1f0zjVUA9EmH0Y8ddgo1xyhttWcNUNpAnVcs3p16VHoFSmF9XU2ZG%2BRR7RBnQ1PIzeXjhivQwxkCk6urwWMO%2FeUEbCQZrWzX6SrFe0yYl%2FMxnlijU12UlFdMmAZ9f5NCB1CUcF4CSQCWl1w4BQaK%2F1PRRsDJ4xNlqWb1k4civtHj6yCWhDoLPehPa1DQWATt68Q180vriYtk&X-Amz-Signature=7e2bdb35bff3377e77c6686a3cc9ba15d5153c5cf166bffbf206e27b89aecb67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
