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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SI6VKN%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDA1%2BSuqYz2lONcTx3qGL6FhGzH1w3MRGSZ9QDisv%2BkOwIhAOUqHb625UlcrBZeNf2hyYlJ2cz%2F8yBgh1xeWYRRRATdKv8DCAIQABoMNjM3NDIzMTgzODA1IgwfTXix6sYsl%2Ftvf%2BYq3AOueOnT3BGVofCjwmxXSAvqCzmlsZHbVTUhXbafLAvRnRBdCblpzQmLWpm7Mra9EvrSb%2Fx2%2BVeHEpdnM8fnNYY8z6oiDWyFxYA%2FLPYs5CnW0BtgmOVou2iw7BmCKujiiyad%2B5OscGX5TnATViHvETI5uOBEkYFiZkaXb%2Bp40Fikki%2BNAIThWGEb3plCAqsNP5zSrsNfjMDzV7K45MqhAIzRYaOHebTN%2BmRFogKpcRurb1ZZQvKEYwqi12y59fSKA5JfYZoY9ntFbZ67jjzyZz3h7%2FxDK9U7glnOuNqjBCpYR%2BRgaHQ%2BrGrX0EwyL96sD9A4pwWzrrTfg3oAthnkttYELHe4a8%2F7Vfcd3GdwE1wStQ6LFdmNzLRHoa02ms7U7cEhJIG2iRUL8ikhZdEvJ5ddOHSgbHIjNJljgygOC%2F72zilpApUtCeenTdIYtRJrtcJECl3Nfm82zvR%2Bte7XaleF%2FNmRUuRuBd94XW%2BWA%2Bc7My5qvM%2BxebWb%2B5xEwDbtFP9HPinEsUP9F02fy%2B2%2FnKxTL0PwFMvjFloZ5kPR6GKiYgjGMTeKe3aNo6S0s28P%2B31xozBvwhGA9hGjiYP1Dgmdh24DkJMxcJo5huOPe065NymSEMwGCzY0Yo0YezDHg%2FnMBjqkAatyhwmMkotXBTyIx36Whsd2cLbQ63jpIhSDxcSEGG%2Feyl9yb8fK0cVj2jYjxzO8k8ra5ZgHFjsuMtNPsYPsLm87vwRwiWtdWf%2Br1sXzQoqWsXqTnoI5GH49OtTEa3Mfq%2FXNP3W0KY2EclfU1USW4i0MQcuPXXFWZfMbCAe3BWIuHwNt4YedAUlvLW8v3CbX9nkJT7VTdaTDvRhhAhRO4zWOiAaA&X-Amz-Signature=df595214292ffa17997c4beeb57196b6d9b9b85b3682cb70613fe351aeeed3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SI6VKN%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDA1%2BSuqYz2lONcTx3qGL6FhGzH1w3MRGSZ9QDisv%2BkOwIhAOUqHb625UlcrBZeNf2hyYlJ2cz%2F8yBgh1xeWYRRRATdKv8DCAIQABoMNjM3NDIzMTgzODA1IgwfTXix6sYsl%2Ftvf%2BYq3AOueOnT3BGVofCjwmxXSAvqCzmlsZHbVTUhXbafLAvRnRBdCblpzQmLWpm7Mra9EvrSb%2Fx2%2BVeHEpdnM8fnNYY8z6oiDWyFxYA%2FLPYs5CnW0BtgmOVou2iw7BmCKujiiyad%2B5OscGX5TnATViHvETI5uOBEkYFiZkaXb%2Bp40Fikki%2BNAIThWGEb3plCAqsNP5zSrsNfjMDzV7K45MqhAIzRYaOHebTN%2BmRFogKpcRurb1ZZQvKEYwqi12y59fSKA5JfYZoY9ntFbZ67jjzyZz3h7%2FxDK9U7glnOuNqjBCpYR%2BRgaHQ%2BrGrX0EwyL96sD9A4pwWzrrTfg3oAthnkttYELHe4a8%2F7Vfcd3GdwE1wStQ6LFdmNzLRHoa02ms7U7cEhJIG2iRUL8ikhZdEvJ5ddOHSgbHIjNJljgygOC%2F72zilpApUtCeenTdIYtRJrtcJECl3Nfm82zvR%2Bte7XaleF%2FNmRUuRuBd94XW%2BWA%2Bc7My5qvM%2BxebWb%2B5xEwDbtFP9HPinEsUP9F02fy%2B2%2FnKxTL0PwFMvjFloZ5kPR6GKiYgjGMTeKe3aNo6S0s28P%2B31xozBvwhGA9hGjiYP1Dgmdh24DkJMxcJo5huOPe065NymSEMwGCzY0Yo0YezDHg%2FnMBjqkAatyhwmMkotXBTyIx36Whsd2cLbQ63jpIhSDxcSEGG%2Feyl9yb8fK0cVj2jYjxzO8k8ra5ZgHFjsuMtNPsYPsLm87vwRwiWtdWf%2Br1sXzQoqWsXqTnoI5GH49OtTEa3Mfq%2FXNP3W0KY2EclfU1USW4i0MQcuPXXFWZfMbCAe3BWIuHwNt4YedAUlvLW8v3CbX9nkJT7VTdaTDvRhhAhRO4zWOiAaA&X-Amz-Signature=243595d336b36e9d8058bd71e7246c491d25ecc295b77910258bd52659b278a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SI6VKN%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDA1%2BSuqYz2lONcTx3qGL6FhGzH1w3MRGSZ9QDisv%2BkOwIhAOUqHb625UlcrBZeNf2hyYlJ2cz%2F8yBgh1xeWYRRRATdKv8DCAIQABoMNjM3NDIzMTgzODA1IgwfTXix6sYsl%2Ftvf%2BYq3AOueOnT3BGVofCjwmxXSAvqCzmlsZHbVTUhXbafLAvRnRBdCblpzQmLWpm7Mra9EvrSb%2Fx2%2BVeHEpdnM8fnNYY8z6oiDWyFxYA%2FLPYs5CnW0BtgmOVou2iw7BmCKujiiyad%2B5OscGX5TnATViHvETI5uOBEkYFiZkaXb%2Bp40Fikki%2BNAIThWGEb3plCAqsNP5zSrsNfjMDzV7K45MqhAIzRYaOHebTN%2BmRFogKpcRurb1ZZQvKEYwqi12y59fSKA5JfYZoY9ntFbZ67jjzyZz3h7%2FxDK9U7glnOuNqjBCpYR%2BRgaHQ%2BrGrX0EwyL96sD9A4pwWzrrTfg3oAthnkttYELHe4a8%2F7Vfcd3GdwE1wStQ6LFdmNzLRHoa02ms7U7cEhJIG2iRUL8ikhZdEvJ5ddOHSgbHIjNJljgygOC%2F72zilpApUtCeenTdIYtRJrtcJECl3Nfm82zvR%2Bte7XaleF%2FNmRUuRuBd94XW%2BWA%2Bc7My5qvM%2BxebWb%2B5xEwDbtFP9HPinEsUP9F02fy%2B2%2FnKxTL0PwFMvjFloZ5kPR6GKiYgjGMTeKe3aNo6S0s28P%2B31xozBvwhGA9hGjiYP1Dgmdh24DkJMxcJo5huOPe065NymSEMwGCzY0Yo0YezDHg%2FnMBjqkAatyhwmMkotXBTyIx36Whsd2cLbQ63jpIhSDxcSEGG%2Feyl9yb8fK0cVj2jYjxzO8k8ra5ZgHFjsuMtNPsYPsLm87vwRwiWtdWf%2Br1sXzQoqWsXqTnoI5GH49OtTEa3Mfq%2FXNP3W0KY2EclfU1USW4i0MQcuPXXFWZfMbCAe3BWIuHwNt4YedAUlvLW8v3CbX9nkJT7VTdaTDvRhhAhRO4zWOiAaA&X-Amz-Signature=e2580b39eefd6ab5fcdf50ab52782342e41e0f25a0c749422a55a3ce3d65fafb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SI6VKN%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDA1%2BSuqYz2lONcTx3qGL6FhGzH1w3MRGSZ9QDisv%2BkOwIhAOUqHb625UlcrBZeNf2hyYlJ2cz%2F8yBgh1xeWYRRRATdKv8DCAIQABoMNjM3NDIzMTgzODA1IgwfTXix6sYsl%2Ftvf%2BYq3AOueOnT3BGVofCjwmxXSAvqCzmlsZHbVTUhXbafLAvRnRBdCblpzQmLWpm7Mra9EvrSb%2Fx2%2BVeHEpdnM8fnNYY8z6oiDWyFxYA%2FLPYs5CnW0BtgmOVou2iw7BmCKujiiyad%2B5OscGX5TnATViHvETI5uOBEkYFiZkaXb%2Bp40Fikki%2BNAIThWGEb3plCAqsNP5zSrsNfjMDzV7K45MqhAIzRYaOHebTN%2BmRFogKpcRurb1ZZQvKEYwqi12y59fSKA5JfYZoY9ntFbZ67jjzyZz3h7%2FxDK9U7glnOuNqjBCpYR%2BRgaHQ%2BrGrX0EwyL96sD9A4pwWzrrTfg3oAthnkttYELHe4a8%2F7Vfcd3GdwE1wStQ6LFdmNzLRHoa02ms7U7cEhJIG2iRUL8ikhZdEvJ5ddOHSgbHIjNJljgygOC%2F72zilpApUtCeenTdIYtRJrtcJECl3Nfm82zvR%2Bte7XaleF%2FNmRUuRuBd94XW%2BWA%2Bc7My5qvM%2BxebWb%2B5xEwDbtFP9HPinEsUP9F02fy%2B2%2FnKxTL0PwFMvjFloZ5kPR6GKiYgjGMTeKe3aNo6S0s28P%2B31xozBvwhGA9hGjiYP1Dgmdh24DkJMxcJo5huOPe065NymSEMwGCzY0Yo0YezDHg%2FnMBjqkAatyhwmMkotXBTyIx36Whsd2cLbQ63jpIhSDxcSEGG%2Feyl9yb8fK0cVj2jYjxzO8k8ra5ZgHFjsuMtNPsYPsLm87vwRwiWtdWf%2Br1sXzQoqWsXqTnoI5GH49OtTEa3Mfq%2FXNP3W0KY2EclfU1USW4i0MQcuPXXFWZfMbCAe3BWIuHwNt4YedAUlvLW8v3CbX9nkJT7VTdaTDvRhhAhRO4zWOiAaA&X-Amz-Signature=6e0949e4272448626b9ade6f340416767efab1fb676e12a889b0af2b63fef14c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SI6VKN%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDA1%2BSuqYz2lONcTx3qGL6FhGzH1w3MRGSZ9QDisv%2BkOwIhAOUqHb625UlcrBZeNf2hyYlJ2cz%2F8yBgh1xeWYRRRATdKv8DCAIQABoMNjM3NDIzMTgzODA1IgwfTXix6sYsl%2Ftvf%2BYq3AOueOnT3BGVofCjwmxXSAvqCzmlsZHbVTUhXbafLAvRnRBdCblpzQmLWpm7Mra9EvrSb%2Fx2%2BVeHEpdnM8fnNYY8z6oiDWyFxYA%2FLPYs5CnW0BtgmOVou2iw7BmCKujiiyad%2B5OscGX5TnATViHvETI5uOBEkYFiZkaXb%2Bp40Fikki%2BNAIThWGEb3plCAqsNP5zSrsNfjMDzV7K45MqhAIzRYaOHebTN%2BmRFogKpcRurb1ZZQvKEYwqi12y59fSKA5JfYZoY9ntFbZ67jjzyZz3h7%2FxDK9U7glnOuNqjBCpYR%2BRgaHQ%2BrGrX0EwyL96sD9A4pwWzrrTfg3oAthnkttYELHe4a8%2F7Vfcd3GdwE1wStQ6LFdmNzLRHoa02ms7U7cEhJIG2iRUL8ikhZdEvJ5ddOHSgbHIjNJljgygOC%2F72zilpApUtCeenTdIYtRJrtcJECl3Nfm82zvR%2Bte7XaleF%2FNmRUuRuBd94XW%2BWA%2Bc7My5qvM%2BxebWb%2B5xEwDbtFP9HPinEsUP9F02fy%2B2%2FnKxTL0PwFMvjFloZ5kPR6GKiYgjGMTeKe3aNo6S0s28P%2B31xozBvwhGA9hGjiYP1Dgmdh24DkJMxcJo5huOPe065NymSEMwGCzY0Yo0YezDHg%2FnMBjqkAatyhwmMkotXBTyIx36Whsd2cLbQ63jpIhSDxcSEGG%2Feyl9yb8fK0cVj2jYjxzO8k8ra5ZgHFjsuMtNPsYPsLm87vwRwiWtdWf%2Br1sXzQoqWsXqTnoI5GH49OtTEa3Mfq%2FXNP3W0KY2EclfU1USW4i0MQcuPXXFWZfMbCAe3BWIuHwNt4YedAUlvLW8v3CbX9nkJT7VTdaTDvRhhAhRO4zWOiAaA&X-Amz-Signature=27cd8f3c1279e08cd6323cfa440c32a63bae82181a6c1f14655d4d515c98ca14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SI6VKN%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDA1%2BSuqYz2lONcTx3qGL6FhGzH1w3MRGSZ9QDisv%2BkOwIhAOUqHb625UlcrBZeNf2hyYlJ2cz%2F8yBgh1xeWYRRRATdKv8DCAIQABoMNjM3NDIzMTgzODA1IgwfTXix6sYsl%2Ftvf%2BYq3AOueOnT3BGVofCjwmxXSAvqCzmlsZHbVTUhXbafLAvRnRBdCblpzQmLWpm7Mra9EvrSb%2Fx2%2BVeHEpdnM8fnNYY8z6oiDWyFxYA%2FLPYs5CnW0BtgmOVou2iw7BmCKujiiyad%2B5OscGX5TnATViHvETI5uOBEkYFiZkaXb%2Bp40Fikki%2BNAIThWGEb3plCAqsNP5zSrsNfjMDzV7K45MqhAIzRYaOHebTN%2BmRFogKpcRurb1ZZQvKEYwqi12y59fSKA5JfYZoY9ntFbZ67jjzyZz3h7%2FxDK9U7glnOuNqjBCpYR%2BRgaHQ%2BrGrX0EwyL96sD9A4pwWzrrTfg3oAthnkttYELHe4a8%2F7Vfcd3GdwE1wStQ6LFdmNzLRHoa02ms7U7cEhJIG2iRUL8ikhZdEvJ5ddOHSgbHIjNJljgygOC%2F72zilpApUtCeenTdIYtRJrtcJECl3Nfm82zvR%2Bte7XaleF%2FNmRUuRuBd94XW%2BWA%2Bc7My5qvM%2BxebWb%2B5xEwDbtFP9HPinEsUP9F02fy%2B2%2FnKxTL0PwFMvjFloZ5kPR6GKiYgjGMTeKe3aNo6S0s28P%2B31xozBvwhGA9hGjiYP1Dgmdh24DkJMxcJo5huOPe065NymSEMwGCzY0Yo0YezDHg%2FnMBjqkAatyhwmMkotXBTyIx36Whsd2cLbQ63jpIhSDxcSEGG%2Feyl9yb8fK0cVj2jYjxzO8k8ra5ZgHFjsuMtNPsYPsLm87vwRwiWtdWf%2Br1sXzQoqWsXqTnoI5GH49OtTEa3Mfq%2FXNP3W0KY2EclfU1USW4i0MQcuPXXFWZfMbCAe3BWIuHwNt4YedAUlvLW8v3CbX9nkJT7VTdaTDvRhhAhRO4zWOiAaA&X-Amz-Signature=6707c413a9e03c604e7e819699525ad049a31bc9231ddf9ffd1fa63328b07536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SI6VKN%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDA1%2BSuqYz2lONcTx3qGL6FhGzH1w3MRGSZ9QDisv%2BkOwIhAOUqHb625UlcrBZeNf2hyYlJ2cz%2F8yBgh1xeWYRRRATdKv8DCAIQABoMNjM3NDIzMTgzODA1IgwfTXix6sYsl%2Ftvf%2BYq3AOueOnT3BGVofCjwmxXSAvqCzmlsZHbVTUhXbafLAvRnRBdCblpzQmLWpm7Mra9EvrSb%2Fx2%2BVeHEpdnM8fnNYY8z6oiDWyFxYA%2FLPYs5CnW0BtgmOVou2iw7BmCKujiiyad%2B5OscGX5TnATViHvETI5uOBEkYFiZkaXb%2Bp40Fikki%2BNAIThWGEb3plCAqsNP5zSrsNfjMDzV7K45MqhAIzRYaOHebTN%2BmRFogKpcRurb1ZZQvKEYwqi12y59fSKA5JfYZoY9ntFbZ67jjzyZz3h7%2FxDK9U7glnOuNqjBCpYR%2BRgaHQ%2BrGrX0EwyL96sD9A4pwWzrrTfg3oAthnkttYELHe4a8%2F7Vfcd3GdwE1wStQ6LFdmNzLRHoa02ms7U7cEhJIG2iRUL8ikhZdEvJ5ddOHSgbHIjNJljgygOC%2F72zilpApUtCeenTdIYtRJrtcJECl3Nfm82zvR%2Bte7XaleF%2FNmRUuRuBd94XW%2BWA%2Bc7My5qvM%2BxebWb%2B5xEwDbtFP9HPinEsUP9F02fy%2B2%2FnKxTL0PwFMvjFloZ5kPR6GKiYgjGMTeKe3aNo6S0s28P%2B31xozBvwhGA9hGjiYP1Dgmdh24DkJMxcJo5huOPe065NymSEMwGCzY0Yo0YezDHg%2FnMBjqkAatyhwmMkotXBTyIx36Whsd2cLbQ63jpIhSDxcSEGG%2Feyl9yb8fK0cVj2jYjxzO8k8ra5ZgHFjsuMtNPsYPsLm87vwRwiWtdWf%2Br1sXzQoqWsXqTnoI5GH49OtTEa3Mfq%2FXNP3W0KY2EclfU1USW4i0MQcuPXXFWZfMbCAe3BWIuHwNt4YedAUlvLW8v3CbX9nkJT7VTdaTDvRhhAhRO4zWOiAaA&X-Amz-Signature=a3e1f6f3bf89d510f8c570d27d7ffa3c288a030313d1c62a5ba2ba383203a26f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SI6VKN%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDA1%2BSuqYz2lONcTx3qGL6FhGzH1w3MRGSZ9QDisv%2BkOwIhAOUqHb625UlcrBZeNf2hyYlJ2cz%2F8yBgh1xeWYRRRATdKv8DCAIQABoMNjM3NDIzMTgzODA1IgwfTXix6sYsl%2Ftvf%2BYq3AOueOnT3BGVofCjwmxXSAvqCzmlsZHbVTUhXbafLAvRnRBdCblpzQmLWpm7Mra9EvrSb%2Fx2%2BVeHEpdnM8fnNYY8z6oiDWyFxYA%2FLPYs5CnW0BtgmOVou2iw7BmCKujiiyad%2B5OscGX5TnATViHvETI5uOBEkYFiZkaXb%2Bp40Fikki%2BNAIThWGEb3plCAqsNP5zSrsNfjMDzV7K45MqhAIzRYaOHebTN%2BmRFogKpcRurb1ZZQvKEYwqi12y59fSKA5JfYZoY9ntFbZ67jjzyZz3h7%2FxDK9U7glnOuNqjBCpYR%2BRgaHQ%2BrGrX0EwyL96sD9A4pwWzrrTfg3oAthnkttYELHe4a8%2F7Vfcd3GdwE1wStQ6LFdmNzLRHoa02ms7U7cEhJIG2iRUL8ikhZdEvJ5ddOHSgbHIjNJljgygOC%2F72zilpApUtCeenTdIYtRJrtcJECl3Nfm82zvR%2Bte7XaleF%2FNmRUuRuBd94XW%2BWA%2Bc7My5qvM%2BxebWb%2B5xEwDbtFP9HPinEsUP9F02fy%2B2%2FnKxTL0PwFMvjFloZ5kPR6GKiYgjGMTeKe3aNo6S0s28P%2B31xozBvwhGA9hGjiYP1Dgmdh24DkJMxcJo5huOPe065NymSEMwGCzY0Yo0YezDHg%2FnMBjqkAatyhwmMkotXBTyIx36Whsd2cLbQ63jpIhSDxcSEGG%2Feyl9yb8fK0cVj2jYjxzO8k8ra5ZgHFjsuMtNPsYPsLm87vwRwiWtdWf%2Br1sXzQoqWsXqTnoI5GH49OtTEa3Mfq%2FXNP3W0KY2EclfU1USW4i0MQcuPXXFWZfMbCAe3BWIuHwNt4YedAUlvLW8v3CbX9nkJT7VTdaTDvRhhAhRO4zWOiAaA&X-Amz-Signature=c9b42790d78dd1d7988e2975f171a0c9894efaef06b325f921b174e770ffa88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SI6VKN%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDA1%2BSuqYz2lONcTx3qGL6FhGzH1w3MRGSZ9QDisv%2BkOwIhAOUqHb625UlcrBZeNf2hyYlJ2cz%2F8yBgh1xeWYRRRATdKv8DCAIQABoMNjM3NDIzMTgzODA1IgwfTXix6sYsl%2Ftvf%2BYq3AOueOnT3BGVofCjwmxXSAvqCzmlsZHbVTUhXbafLAvRnRBdCblpzQmLWpm7Mra9EvrSb%2Fx2%2BVeHEpdnM8fnNYY8z6oiDWyFxYA%2FLPYs5CnW0BtgmOVou2iw7BmCKujiiyad%2B5OscGX5TnATViHvETI5uOBEkYFiZkaXb%2Bp40Fikki%2BNAIThWGEb3plCAqsNP5zSrsNfjMDzV7K45MqhAIzRYaOHebTN%2BmRFogKpcRurb1ZZQvKEYwqi12y59fSKA5JfYZoY9ntFbZ67jjzyZz3h7%2FxDK9U7glnOuNqjBCpYR%2BRgaHQ%2BrGrX0EwyL96sD9A4pwWzrrTfg3oAthnkttYELHe4a8%2F7Vfcd3GdwE1wStQ6LFdmNzLRHoa02ms7U7cEhJIG2iRUL8ikhZdEvJ5ddOHSgbHIjNJljgygOC%2F72zilpApUtCeenTdIYtRJrtcJECl3Nfm82zvR%2Bte7XaleF%2FNmRUuRuBd94XW%2BWA%2Bc7My5qvM%2BxebWb%2B5xEwDbtFP9HPinEsUP9F02fy%2B2%2FnKxTL0PwFMvjFloZ5kPR6GKiYgjGMTeKe3aNo6S0s28P%2B31xozBvwhGA9hGjiYP1Dgmdh24DkJMxcJo5huOPe065NymSEMwGCzY0Yo0YezDHg%2FnMBjqkAatyhwmMkotXBTyIx36Whsd2cLbQ63jpIhSDxcSEGG%2Feyl9yb8fK0cVj2jYjxzO8k8ra5ZgHFjsuMtNPsYPsLm87vwRwiWtdWf%2Br1sXzQoqWsXqTnoI5GH49OtTEa3Mfq%2FXNP3W0KY2EclfU1USW4i0MQcuPXXFWZfMbCAe3BWIuHwNt4YedAUlvLW8v3CbX9nkJT7VTdaTDvRhhAhRO4zWOiAaA&X-Amz-Signature=34cc8b78a123e08f8ab960ff6efbcc22910ad9e8f2f61e4890e61bef8d411127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SI6VKN%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDA1%2BSuqYz2lONcTx3qGL6FhGzH1w3MRGSZ9QDisv%2BkOwIhAOUqHb625UlcrBZeNf2hyYlJ2cz%2F8yBgh1xeWYRRRATdKv8DCAIQABoMNjM3NDIzMTgzODA1IgwfTXix6sYsl%2Ftvf%2BYq3AOueOnT3BGVofCjwmxXSAvqCzmlsZHbVTUhXbafLAvRnRBdCblpzQmLWpm7Mra9EvrSb%2Fx2%2BVeHEpdnM8fnNYY8z6oiDWyFxYA%2FLPYs5CnW0BtgmOVou2iw7BmCKujiiyad%2B5OscGX5TnATViHvETI5uOBEkYFiZkaXb%2Bp40Fikki%2BNAIThWGEb3plCAqsNP5zSrsNfjMDzV7K45MqhAIzRYaOHebTN%2BmRFogKpcRurb1ZZQvKEYwqi12y59fSKA5JfYZoY9ntFbZ67jjzyZz3h7%2FxDK9U7glnOuNqjBCpYR%2BRgaHQ%2BrGrX0EwyL96sD9A4pwWzrrTfg3oAthnkttYELHe4a8%2F7Vfcd3GdwE1wStQ6LFdmNzLRHoa02ms7U7cEhJIG2iRUL8ikhZdEvJ5ddOHSgbHIjNJljgygOC%2F72zilpApUtCeenTdIYtRJrtcJECl3Nfm82zvR%2Bte7XaleF%2FNmRUuRuBd94XW%2BWA%2Bc7My5qvM%2BxebWb%2B5xEwDbtFP9HPinEsUP9F02fy%2B2%2FnKxTL0PwFMvjFloZ5kPR6GKiYgjGMTeKe3aNo6S0s28P%2B31xozBvwhGA9hGjiYP1Dgmdh24DkJMxcJo5huOPe065NymSEMwGCzY0Yo0YezDHg%2FnMBjqkAatyhwmMkotXBTyIx36Whsd2cLbQ63jpIhSDxcSEGG%2Feyl9yb8fK0cVj2jYjxzO8k8ra5ZgHFjsuMtNPsYPsLm87vwRwiWtdWf%2Br1sXzQoqWsXqTnoI5GH49OtTEa3Mfq%2FXNP3W0KY2EclfU1USW4i0MQcuPXXFWZfMbCAe3BWIuHwNt4YedAUlvLW8v3CbX9nkJT7VTdaTDvRhhAhRO4zWOiAaA&X-Amz-Signature=a8ba8529deee07148d5873cb81d5c1d73449c5dd78308fb34782a65074fccb57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SI6VKN%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDA1%2BSuqYz2lONcTx3qGL6FhGzH1w3MRGSZ9QDisv%2BkOwIhAOUqHb625UlcrBZeNf2hyYlJ2cz%2F8yBgh1xeWYRRRATdKv8DCAIQABoMNjM3NDIzMTgzODA1IgwfTXix6sYsl%2Ftvf%2BYq3AOueOnT3BGVofCjwmxXSAvqCzmlsZHbVTUhXbafLAvRnRBdCblpzQmLWpm7Mra9EvrSb%2Fx2%2BVeHEpdnM8fnNYY8z6oiDWyFxYA%2FLPYs5CnW0BtgmOVou2iw7BmCKujiiyad%2B5OscGX5TnATViHvETI5uOBEkYFiZkaXb%2Bp40Fikki%2BNAIThWGEb3plCAqsNP5zSrsNfjMDzV7K45MqhAIzRYaOHebTN%2BmRFogKpcRurb1ZZQvKEYwqi12y59fSKA5JfYZoY9ntFbZ67jjzyZz3h7%2FxDK9U7glnOuNqjBCpYR%2BRgaHQ%2BrGrX0EwyL96sD9A4pwWzrrTfg3oAthnkttYELHe4a8%2F7Vfcd3GdwE1wStQ6LFdmNzLRHoa02ms7U7cEhJIG2iRUL8ikhZdEvJ5ddOHSgbHIjNJljgygOC%2F72zilpApUtCeenTdIYtRJrtcJECl3Nfm82zvR%2Bte7XaleF%2FNmRUuRuBd94XW%2BWA%2Bc7My5qvM%2BxebWb%2B5xEwDbtFP9HPinEsUP9F02fy%2B2%2FnKxTL0PwFMvjFloZ5kPR6GKiYgjGMTeKe3aNo6S0s28P%2B31xozBvwhGA9hGjiYP1Dgmdh24DkJMxcJo5huOPe065NymSEMwGCzY0Yo0YezDHg%2FnMBjqkAatyhwmMkotXBTyIx36Whsd2cLbQ63jpIhSDxcSEGG%2Feyl9yb8fK0cVj2jYjxzO8k8ra5ZgHFjsuMtNPsYPsLm87vwRwiWtdWf%2Br1sXzQoqWsXqTnoI5GH49OtTEa3Mfq%2FXNP3W0KY2EclfU1USW4i0MQcuPXXFWZfMbCAe3BWIuHwNt4YedAUlvLW8v3CbX9nkJT7VTdaTDvRhhAhRO4zWOiAaA&X-Amz-Signature=6443a8963ee1c2eb786f6249a4214f4a51b0177999253885e131190212baad75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SI6VKN%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDA1%2BSuqYz2lONcTx3qGL6FhGzH1w3MRGSZ9QDisv%2BkOwIhAOUqHb625UlcrBZeNf2hyYlJ2cz%2F8yBgh1xeWYRRRATdKv8DCAIQABoMNjM3NDIzMTgzODA1IgwfTXix6sYsl%2Ftvf%2BYq3AOueOnT3BGVofCjwmxXSAvqCzmlsZHbVTUhXbafLAvRnRBdCblpzQmLWpm7Mra9EvrSb%2Fx2%2BVeHEpdnM8fnNYY8z6oiDWyFxYA%2FLPYs5CnW0BtgmOVou2iw7BmCKujiiyad%2B5OscGX5TnATViHvETI5uOBEkYFiZkaXb%2Bp40Fikki%2BNAIThWGEb3plCAqsNP5zSrsNfjMDzV7K45MqhAIzRYaOHebTN%2BmRFogKpcRurb1ZZQvKEYwqi12y59fSKA5JfYZoY9ntFbZ67jjzyZz3h7%2FxDK9U7glnOuNqjBCpYR%2BRgaHQ%2BrGrX0EwyL96sD9A4pwWzrrTfg3oAthnkttYELHe4a8%2F7Vfcd3GdwE1wStQ6LFdmNzLRHoa02ms7U7cEhJIG2iRUL8ikhZdEvJ5ddOHSgbHIjNJljgygOC%2F72zilpApUtCeenTdIYtRJrtcJECl3Nfm82zvR%2Bte7XaleF%2FNmRUuRuBd94XW%2BWA%2Bc7My5qvM%2BxebWb%2B5xEwDbtFP9HPinEsUP9F02fy%2B2%2FnKxTL0PwFMvjFloZ5kPR6GKiYgjGMTeKe3aNo6S0s28P%2B31xozBvwhGA9hGjiYP1Dgmdh24DkJMxcJo5huOPe065NymSEMwGCzY0Yo0YezDHg%2FnMBjqkAatyhwmMkotXBTyIx36Whsd2cLbQ63jpIhSDxcSEGG%2Feyl9yb8fK0cVj2jYjxzO8k8ra5ZgHFjsuMtNPsYPsLm87vwRwiWtdWf%2Br1sXzQoqWsXqTnoI5GH49OtTEa3Mfq%2FXNP3W0KY2EclfU1USW4i0MQcuPXXFWZfMbCAe3BWIuHwNt4YedAUlvLW8v3CbX9nkJT7VTdaTDvRhhAhRO4zWOiAaA&X-Amz-Signature=b94f1925324359b811446e538e7500c858e739818f6553a894fea3700deb2ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SI6VKN%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDA1%2BSuqYz2lONcTx3qGL6FhGzH1w3MRGSZ9QDisv%2BkOwIhAOUqHb625UlcrBZeNf2hyYlJ2cz%2F8yBgh1xeWYRRRATdKv8DCAIQABoMNjM3NDIzMTgzODA1IgwfTXix6sYsl%2Ftvf%2BYq3AOueOnT3BGVofCjwmxXSAvqCzmlsZHbVTUhXbafLAvRnRBdCblpzQmLWpm7Mra9EvrSb%2Fx2%2BVeHEpdnM8fnNYY8z6oiDWyFxYA%2FLPYs5CnW0BtgmOVou2iw7BmCKujiiyad%2B5OscGX5TnATViHvETI5uOBEkYFiZkaXb%2Bp40Fikki%2BNAIThWGEb3plCAqsNP5zSrsNfjMDzV7K45MqhAIzRYaOHebTN%2BmRFogKpcRurb1ZZQvKEYwqi12y59fSKA5JfYZoY9ntFbZ67jjzyZz3h7%2FxDK9U7glnOuNqjBCpYR%2BRgaHQ%2BrGrX0EwyL96sD9A4pwWzrrTfg3oAthnkttYELHe4a8%2F7Vfcd3GdwE1wStQ6LFdmNzLRHoa02ms7U7cEhJIG2iRUL8ikhZdEvJ5ddOHSgbHIjNJljgygOC%2F72zilpApUtCeenTdIYtRJrtcJECl3Nfm82zvR%2Bte7XaleF%2FNmRUuRuBd94XW%2BWA%2Bc7My5qvM%2BxebWb%2B5xEwDbtFP9HPinEsUP9F02fy%2B2%2FnKxTL0PwFMvjFloZ5kPR6GKiYgjGMTeKe3aNo6S0s28P%2B31xozBvwhGA9hGjiYP1Dgmdh24DkJMxcJo5huOPe065NymSEMwGCzY0Yo0YezDHg%2FnMBjqkAatyhwmMkotXBTyIx36Whsd2cLbQ63jpIhSDxcSEGG%2Feyl9yb8fK0cVj2jYjxzO8k8ra5ZgHFjsuMtNPsYPsLm87vwRwiWtdWf%2Br1sXzQoqWsXqTnoI5GH49OtTEa3Mfq%2FXNP3W0KY2EclfU1USW4i0MQcuPXXFWZfMbCAe3BWIuHwNt4YedAUlvLW8v3CbX9nkJT7VTdaTDvRhhAhRO4zWOiAaA&X-Amz-Signature=b2c560bd910c6ca973281eb6f1963c9d7ab09c938092662c1923c40ceab28c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SI6VKN%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDA1%2BSuqYz2lONcTx3qGL6FhGzH1w3MRGSZ9QDisv%2BkOwIhAOUqHb625UlcrBZeNf2hyYlJ2cz%2F8yBgh1xeWYRRRATdKv8DCAIQABoMNjM3NDIzMTgzODA1IgwfTXix6sYsl%2Ftvf%2BYq3AOueOnT3BGVofCjwmxXSAvqCzmlsZHbVTUhXbafLAvRnRBdCblpzQmLWpm7Mra9EvrSb%2Fx2%2BVeHEpdnM8fnNYY8z6oiDWyFxYA%2FLPYs5CnW0BtgmOVou2iw7BmCKujiiyad%2B5OscGX5TnATViHvETI5uOBEkYFiZkaXb%2Bp40Fikki%2BNAIThWGEb3plCAqsNP5zSrsNfjMDzV7K45MqhAIzRYaOHebTN%2BmRFogKpcRurb1ZZQvKEYwqi12y59fSKA5JfYZoY9ntFbZ67jjzyZz3h7%2FxDK9U7glnOuNqjBCpYR%2BRgaHQ%2BrGrX0EwyL96sD9A4pwWzrrTfg3oAthnkttYELHe4a8%2F7Vfcd3GdwE1wStQ6LFdmNzLRHoa02ms7U7cEhJIG2iRUL8ikhZdEvJ5ddOHSgbHIjNJljgygOC%2F72zilpApUtCeenTdIYtRJrtcJECl3Nfm82zvR%2Bte7XaleF%2FNmRUuRuBd94XW%2BWA%2Bc7My5qvM%2BxebWb%2B5xEwDbtFP9HPinEsUP9F02fy%2B2%2FnKxTL0PwFMvjFloZ5kPR6GKiYgjGMTeKe3aNo6S0s28P%2B31xozBvwhGA9hGjiYP1Dgmdh24DkJMxcJo5huOPe065NymSEMwGCzY0Yo0YezDHg%2FnMBjqkAatyhwmMkotXBTyIx36Whsd2cLbQ63jpIhSDxcSEGG%2Feyl9yb8fK0cVj2jYjxzO8k8ra5ZgHFjsuMtNPsYPsLm87vwRwiWtdWf%2Br1sXzQoqWsXqTnoI5GH49OtTEa3Mfq%2FXNP3W0KY2EclfU1USW4i0MQcuPXXFWZfMbCAe3BWIuHwNt4YedAUlvLW8v3CbX9nkJT7VTdaTDvRhhAhRO4zWOiAaA&X-Amz-Signature=9cfaad2b3ea31c9b6ab071b47aacacaf1aec8636c125530d09fc37882ea7d0cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
