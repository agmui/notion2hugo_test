---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

### What is odometry?

Odometry (odom) is the (x,y) position of where the robot thinks it is on a map

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5Z5LMC5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdYG0vdIcPsD8hG0coixIYIl7yyFbdDyj0ykQcUh%2BPqAIgNDOi%2F9A%2Bv5cBM0GZZOstgRnlAWEWUJHAryoefmqLu1MqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5yLvIzn%2Fg3kGyasCrcA%2BcN5toLKfIm0fGiefjEDUq%2B2jAcbsv8RiFqzh3b33ck7HkmsUOhRvALweEDwXrnURcgEAAyF3AlnzLO0iSX0jvzbSk0uoLoSAEscqNE9vEAhVTZqxMceq8l4MYuEPm5cX775SgWEBFIl8RpyNZDiMp6OuuCKGIOeSEgeGNKv1ns%2Fu71XzlvACzduG%2Fgo6ZuNsCnCuWPv%2BY%2BhQn%2F7Jys0EDr67JBqIXba%2F%2FEdbJByCWpNRL5y2R04waNhukRomzntwKj%2Fo7To9XOKC882x%2BAKeZsurM9bYfEibyCcxfZ%2BAZCL7a4%2FYmpWyFow9%2BJ5zqCBMS8j88H8D3x34yhITq4ZfUiOW0TYmCVeHGUPJByXIRBWPcQkYRnzC0jCEDvYPufAIeKNNQIOkh%2FHuNoqcuX4BE6MXUxY%2B3dC%2FhvoK1CmdU0YDasWm8kWqiEGsknY8%2BH6hTMdEDTFHO3J6pcd7il2ftF%2BiPrQxIBIwW%2F%2FlOV2kzQJWIa3whA4vG2aScAb6TnjAOvzZKDfDuoxE7rDxS3KVaCqn5pSZC7mzINOd7CNx5SarWE7Ba9dJGk5oExVhgWppXhttzgjTK7quz7f%2BaLt8trNeOVtgb5eiCGCitzOZHl5P89e6TNbwufN0trMMXAscQGOqUBA14aVzY4vShmHvxsdZKakVG99p1CB3KP2bJtSNn7krSuBaFQMUhdcfktqhj3ncnakknMlz%2FV8%2Bg4acJB5y6oLS9pj2a640AzY9vqp9COh45b71092XPCyBNNQ2m7TCk8XOXyNo73LHJra0Mmi44MH%2Fv0XDXiei5okk2evs8SfqCi1Nh4WoPOL6K5gkso6pDkwy%2FOEYzPVQmwIoF5sO%2Frnh%2FdibV5&X-Amz-Signature=c17f37ecef85ac90f0a41ee09207930277f33d8df3d129cd33b8f94ee53abe93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not ros2_control?</summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5Z5LMC5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdYG0vdIcPsD8hG0coixIYIl7yyFbdDyj0ykQcUh%2BPqAIgNDOi%2F9A%2Bv5cBM0GZZOstgRnlAWEWUJHAryoefmqLu1MqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5yLvIzn%2Fg3kGyasCrcA%2BcN5toLKfIm0fGiefjEDUq%2B2jAcbsv8RiFqzh3b33ck7HkmsUOhRvALweEDwXrnURcgEAAyF3AlnzLO0iSX0jvzbSk0uoLoSAEscqNE9vEAhVTZqxMceq8l4MYuEPm5cX775SgWEBFIl8RpyNZDiMp6OuuCKGIOeSEgeGNKv1ns%2Fu71XzlvACzduG%2Fgo6ZuNsCnCuWPv%2BY%2BhQn%2F7Jys0EDr67JBqIXba%2F%2FEdbJByCWpNRL5y2R04waNhukRomzntwKj%2Fo7To9XOKC882x%2BAKeZsurM9bYfEibyCcxfZ%2BAZCL7a4%2FYmpWyFow9%2BJ5zqCBMS8j88H8D3x34yhITq4ZfUiOW0TYmCVeHGUPJByXIRBWPcQkYRnzC0jCEDvYPufAIeKNNQIOkh%2FHuNoqcuX4BE6MXUxY%2B3dC%2FhvoK1CmdU0YDasWm8kWqiEGsknY8%2BH6hTMdEDTFHO3J6pcd7il2ftF%2BiPrQxIBIwW%2F%2FlOV2kzQJWIa3whA4vG2aScAb6TnjAOvzZKDfDuoxE7rDxS3KVaCqn5pSZC7mzINOd7CNx5SarWE7Ba9dJGk5oExVhgWppXhttzgjTK7quz7f%2BaLt8trNeOVtgb5eiCGCitzOZHl5P89e6TNbwufN0trMMXAscQGOqUBA14aVzY4vShmHvxsdZKakVG99p1CB3KP2bJtSNn7krSuBaFQMUhdcfktqhj3ncnakknMlz%2FV8%2Bg4acJB5y6oLS9pj2a640AzY9vqp9COh45b71092XPCyBNNQ2m7TCk8XOXyNo73LHJra0Mmi44MH%2Fv0XDXiei5okk2evs8SfqCi1Nh4WoPOL6K5gkso6pDkwy%2FOEYzPVQmwIoF5sO%2Frnh%2FdibV5&X-Amz-Signature=7c8801660e89f195c5ca6c160fb2f2059a7d7c157d3994b0c41946d8e21006b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

reads in the physical robot’s wheel angles and publishes them to `/joint_state` 

{{% /alert %}}

There should be a file `mbot_pkg/mbot_pkg/my_node.py`

This is where we are going to create our custom node to read in wheel angles

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5Z5LMC5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdYG0vdIcPsD8hG0coixIYIl7yyFbdDyj0ykQcUh%2BPqAIgNDOi%2F9A%2Bv5cBM0GZZOstgRnlAWEWUJHAryoefmqLu1MqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5yLvIzn%2Fg3kGyasCrcA%2BcN5toLKfIm0fGiefjEDUq%2B2jAcbsv8RiFqzh3b33ck7HkmsUOhRvALweEDwXrnURcgEAAyF3AlnzLO0iSX0jvzbSk0uoLoSAEscqNE9vEAhVTZqxMceq8l4MYuEPm5cX775SgWEBFIl8RpyNZDiMp6OuuCKGIOeSEgeGNKv1ns%2Fu71XzlvACzduG%2Fgo6ZuNsCnCuWPv%2BY%2BhQn%2F7Jys0EDr67JBqIXba%2F%2FEdbJByCWpNRL5y2R04waNhukRomzntwKj%2Fo7To9XOKC882x%2BAKeZsurM9bYfEibyCcxfZ%2BAZCL7a4%2FYmpWyFow9%2BJ5zqCBMS8j88H8D3x34yhITq4ZfUiOW0TYmCVeHGUPJByXIRBWPcQkYRnzC0jCEDvYPufAIeKNNQIOkh%2FHuNoqcuX4BE6MXUxY%2B3dC%2FhvoK1CmdU0YDasWm8kWqiEGsknY8%2BH6hTMdEDTFHO3J6pcd7il2ftF%2BiPrQxIBIwW%2F%2FlOV2kzQJWIa3whA4vG2aScAb6TnjAOvzZKDfDuoxE7rDxS3KVaCqn5pSZC7mzINOd7CNx5SarWE7Ba9dJGk5oExVhgWppXhttzgjTK7quz7f%2BaLt8trNeOVtgb5eiCGCitzOZHl5P89e6TNbwufN0trMMXAscQGOqUBA14aVzY4vShmHvxsdZKakVG99p1CB3KP2bJtSNn7krSuBaFQMUhdcfktqhj3ncnakknMlz%2FV8%2Bg4acJB5y6oLS9pj2a640AzY9vqp9COh45b71092XPCyBNNQ2m7TCk8XOXyNo73LHJra0Mmi44MH%2Fv0XDXiei5okk2evs8SfqCi1Nh4WoPOL6K5gkso6pDkwy%2FOEYzPVQmwIoF5sO%2Frnh%2FdibV5&X-Amz-Signature=349aee75db9bc517f56a67c8935c820b9c0993d838bece2a179a2369ca5efe64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.05 seconds
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Here is how the basic publisher object works

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5Z5LMC5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdYG0vdIcPsD8hG0coixIYIl7yyFbdDyj0ykQcUh%2BPqAIgNDOi%2F9A%2Bv5cBM0GZZOstgRnlAWEWUJHAryoefmqLu1MqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5yLvIzn%2Fg3kGyasCrcA%2BcN5toLKfIm0fGiefjEDUq%2B2jAcbsv8RiFqzh3b33ck7HkmsUOhRvALweEDwXrnURcgEAAyF3AlnzLO0iSX0jvzbSk0uoLoSAEscqNE9vEAhVTZqxMceq8l4MYuEPm5cX775SgWEBFIl8RpyNZDiMp6OuuCKGIOeSEgeGNKv1ns%2Fu71XzlvACzduG%2Fgo6ZuNsCnCuWPv%2BY%2BhQn%2F7Jys0EDr67JBqIXba%2F%2FEdbJByCWpNRL5y2R04waNhukRomzntwKj%2Fo7To9XOKC882x%2BAKeZsurM9bYfEibyCcxfZ%2BAZCL7a4%2FYmpWyFow9%2BJ5zqCBMS8j88H8D3x34yhITq4ZfUiOW0TYmCVeHGUPJByXIRBWPcQkYRnzC0jCEDvYPufAIeKNNQIOkh%2FHuNoqcuX4BE6MXUxY%2B3dC%2FhvoK1CmdU0YDasWm8kWqiEGsknY8%2BH6hTMdEDTFHO3J6pcd7il2ftF%2BiPrQxIBIwW%2F%2FlOV2kzQJWIa3whA4vG2aScAb6TnjAOvzZKDfDuoxE7rDxS3KVaCqn5pSZC7mzINOd7CNx5SarWE7Ba9dJGk5oExVhgWppXhttzgjTK7quz7f%2BaLt8trNeOVtgb5eiCGCitzOZHl5P89e6TNbwufN0trMMXAscQGOqUBA14aVzY4vShmHvxsdZKakVG99p1CB3KP2bJtSNn7krSuBaFQMUhdcfktqhj3ncnakknMlz%2FV8%2Bg4acJB5y6oLS9pj2a640AzY9vqp9COh45b71092XPCyBNNQ2m7TCk8XOXyNo73LHJra0Mmi44MH%2Fv0XDXiei5okk2evs8SfqCi1Nh4WoPOL6K5gkso6pDkwy%2FOEYzPVQmwIoF5sO%2Frnh%2FdibV5&X-Amz-Signature=427333c922cdf0881b6eaf8450ea06386214f49195450f980bfeddab25560978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin
from nav_msgs.msg import Odometry, Path

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)
		
		# gets called every 0.05 seconds
    def timer_callback(self):
			...
```

To find out how the `JointState` message is formatted we can run these two commands in two different terminals

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 topic echo /joint_states
```

</div>
</div>

**Output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5Z5LMC5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdYG0vdIcPsD8hG0coixIYIl7yyFbdDyj0ykQcUh%2BPqAIgNDOi%2F9A%2Bv5cBM0GZZOstgRnlAWEWUJHAryoefmqLu1MqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5yLvIzn%2Fg3kGyasCrcA%2BcN5toLKfIm0fGiefjEDUq%2B2jAcbsv8RiFqzh3b33ck7HkmsUOhRvALweEDwXrnURcgEAAyF3AlnzLO0iSX0jvzbSk0uoLoSAEscqNE9vEAhVTZqxMceq8l4MYuEPm5cX775SgWEBFIl8RpyNZDiMp6OuuCKGIOeSEgeGNKv1ns%2Fu71XzlvACzduG%2Fgo6ZuNsCnCuWPv%2BY%2BhQn%2F7Jys0EDr67JBqIXba%2F%2FEdbJByCWpNRL5y2R04waNhukRomzntwKj%2Fo7To9XOKC882x%2BAKeZsurM9bYfEibyCcxfZ%2BAZCL7a4%2FYmpWyFow9%2BJ5zqCBMS8j88H8D3x34yhITq4ZfUiOW0TYmCVeHGUPJByXIRBWPcQkYRnzC0jCEDvYPufAIeKNNQIOkh%2FHuNoqcuX4BE6MXUxY%2B3dC%2FhvoK1CmdU0YDasWm8kWqiEGsknY8%2BH6hTMdEDTFHO3J6pcd7il2ftF%2BiPrQxIBIwW%2F%2FlOV2kzQJWIa3whA4vG2aScAb6TnjAOvzZKDfDuoxE7rDxS3KVaCqn5pSZC7mzINOd7CNx5SarWE7Ba9dJGk5oExVhgWppXhttzgjTK7quz7f%2BaLt8trNeOVtgb5eiCGCitzOZHl5P89e6TNbwufN0trMMXAscQGOqUBA14aVzY4vShmHvxsdZKakVG99p1CB3KP2bJtSNn7krSuBaFQMUhdcfktqhj3ncnakknMlz%2FV8%2Bg4acJB5y6oLS9pj2a640AzY9vqp9COh45b71092XPCyBNNQ2m7TCk8XOXyNo73LHJra0Mmi44MH%2Fv0XDXiei5okk2evs8SfqCi1Nh4WoPOL6K5gkso6pDkwy%2FOEYzPVQmwIoF5sO%2Frnh%2FdibV5&X-Amz-Signature=1f9de5239af26a964db67da024cbbefb4bfc34e6f9000c43269dfa3f6796846b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

the `ros2 topic echo /joint_states` command showed what the `joint_state_publisher_gui_node` is publishing. 

> [**official** ](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[**`sensor_msg/JointState`**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[ **docs**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)

#### `sensor_msg/JointState` format:

```python
header:
  stamp:
    sec: 1751953191
    nanosec: 173816334
  frame_id: ''
name:
- drivewhl_l_joint
- drivewhl_r_joint
position:
- -0.7640353333530374
- -0.25446900494077296
velocity: []
effort: []
```

we can fill in the fields roughly the same

```python

    # gets called every 0.05 seconds
    def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg
```

{{% alert context="warning" %}}

## REMEMBER TO GET WHEEL POSITION!!

At this point you would most likely read from your Arduino or from the Raspberry Pi’s GPIO.

if you are in Robomasters this will most likely come from the `RM_Uart` class

{{% /alert %}}

<details>
      <summary>How do I get wheel position from a Raspberry Pi or Arduino?</summary>
      TODO:
  </details>

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

TODO: if on WSL reference previous WSL guide

<details>
      <summary>What if I don’t have a robot</summary>
      We can fake the wheel values by doing this
  </details>

## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5Z5LMC5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdYG0vdIcPsD8hG0coixIYIl7yyFbdDyj0ykQcUh%2BPqAIgNDOi%2F9A%2Bv5cBM0GZZOstgRnlAWEWUJHAryoefmqLu1MqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5yLvIzn%2Fg3kGyasCrcA%2BcN5toLKfIm0fGiefjEDUq%2B2jAcbsv8RiFqzh3b33ck7HkmsUOhRvALweEDwXrnURcgEAAyF3AlnzLO0iSX0jvzbSk0uoLoSAEscqNE9vEAhVTZqxMceq8l4MYuEPm5cX775SgWEBFIl8RpyNZDiMp6OuuCKGIOeSEgeGNKv1ns%2Fu71XzlvACzduG%2Fgo6ZuNsCnCuWPv%2BY%2BhQn%2F7Jys0EDr67JBqIXba%2F%2FEdbJByCWpNRL5y2R04waNhukRomzntwKj%2Fo7To9XOKC882x%2BAKeZsurM9bYfEibyCcxfZ%2BAZCL7a4%2FYmpWyFow9%2BJ5zqCBMS8j88H8D3x34yhITq4ZfUiOW0TYmCVeHGUPJByXIRBWPcQkYRnzC0jCEDvYPufAIeKNNQIOkh%2FHuNoqcuX4BE6MXUxY%2B3dC%2FhvoK1CmdU0YDasWm8kWqiEGsknY8%2BH6hTMdEDTFHO3J6pcd7il2ftF%2BiPrQxIBIwW%2F%2FlOV2kzQJWIa3whA4vG2aScAb6TnjAOvzZKDfDuoxE7rDxS3KVaCqn5pSZC7mzINOd7CNx5SarWE7Ba9dJGk5oExVhgWppXhttzgjTK7quz7f%2BaLt8trNeOVtgb5eiCGCitzOZHl5P89e6TNbwufN0trMMXAscQGOqUBA14aVzY4vShmHvxsdZKakVG99p1CB3KP2bJtSNn7krSuBaFQMUhdcfktqhj3ncnakknMlz%2FV8%2Bg4acJB5y6oLS9pj2a640AzY9vqp9COh45b71092XPCyBNNQ2m7TCk8XOXyNo73LHJra0Mmi44MH%2Fv0XDXiei5okk2evs8SfqCi1Nh4WoPOL6K5gkso6pDkwy%2FOEYzPVQmwIoF5sO%2Frnh%2FdibV5&X-Amz-Signature=bc488b15f04f84178e0c2336b3352735a8e48360961b53c2cc3e6ad395b39f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5Z5LMC5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdYG0vdIcPsD8hG0coixIYIl7yyFbdDyj0ykQcUh%2BPqAIgNDOi%2F9A%2Bv5cBM0GZZOstgRnlAWEWUJHAryoefmqLu1MqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5yLvIzn%2Fg3kGyasCrcA%2BcN5toLKfIm0fGiefjEDUq%2B2jAcbsv8RiFqzh3b33ck7HkmsUOhRvALweEDwXrnURcgEAAyF3AlnzLO0iSX0jvzbSk0uoLoSAEscqNE9vEAhVTZqxMceq8l4MYuEPm5cX775SgWEBFIl8RpyNZDiMp6OuuCKGIOeSEgeGNKv1ns%2Fu71XzlvACzduG%2Fgo6ZuNsCnCuWPv%2BY%2BhQn%2F7Jys0EDr67JBqIXba%2F%2FEdbJByCWpNRL5y2R04waNhukRomzntwKj%2Fo7To9XOKC882x%2BAKeZsurM9bYfEibyCcxfZ%2BAZCL7a4%2FYmpWyFow9%2BJ5zqCBMS8j88H8D3x34yhITq4ZfUiOW0TYmCVeHGUPJByXIRBWPcQkYRnzC0jCEDvYPufAIeKNNQIOkh%2FHuNoqcuX4BE6MXUxY%2B3dC%2FhvoK1CmdU0YDasWm8kWqiEGsknY8%2BH6hTMdEDTFHO3J6pcd7il2ftF%2BiPrQxIBIwW%2F%2FlOV2kzQJWIa3whA4vG2aScAb6TnjAOvzZKDfDuoxE7rDxS3KVaCqn5pSZC7mzINOd7CNx5SarWE7Ba9dJGk5oExVhgWppXhttzgjTK7quz7f%2BaLt8trNeOVtgb5eiCGCitzOZHl5P89e6TNbwufN0trMMXAscQGOqUBA14aVzY4vShmHvxsdZKakVG99p1CB3KP2bJtSNn7krSuBaFQMUhdcfktqhj3ncnakknMlz%2FV8%2Bg4acJB5y6oLS9pj2a640AzY9vqp9COh45b71092XPCyBNNQ2m7TCk8XOXyNo73LHJra0Mmi44MH%2Fv0XDXiei5okk2evs8SfqCi1Nh4WoPOL6K5gkso6pDkwy%2FOEYzPVQmwIoF5sO%2Frnh%2FdibV5&X-Amz-Signature=b4ce57e2e63495a4624b7fede6c051d43873ccb9fad528459a588ae5f9e16b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run mbot_pkg my_node
```

</div>
</div>

### **rviz result:**

moving the robot should also update the rviz model

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5Z5LMC5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdYG0vdIcPsD8hG0coixIYIl7yyFbdDyj0ykQcUh%2BPqAIgNDOi%2F9A%2Bv5cBM0GZZOstgRnlAWEWUJHAryoefmqLu1MqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5yLvIzn%2Fg3kGyasCrcA%2BcN5toLKfIm0fGiefjEDUq%2B2jAcbsv8RiFqzh3b33ck7HkmsUOhRvALweEDwXrnURcgEAAyF3AlnzLO0iSX0jvzbSk0uoLoSAEscqNE9vEAhVTZqxMceq8l4MYuEPm5cX775SgWEBFIl8RpyNZDiMp6OuuCKGIOeSEgeGNKv1ns%2Fu71XzlvACzduG%2Fgo6ZuNsCnCuWPv%2BY%2BhQn%2F7Jys0EDr67JBqIXba%2F%2FEdbJByCWpNRL5y2R04waNhukRomzntwKj%2Fo7To9XOKC882x%2BAKeZsurM9bYfEibyCcxfZ%2BAZCL7a4%2FYmpWyFow9%2BJ5zqCBMS8j88H8D3x34yhITq4ZfUiOW0TYmCVeHGUPJByXIRBWPcQkYRnzC0jCEDvYPufAIeKNNQIOkh%2FHuNoqcuX4BE6MXUxY%2B3dC%2FhvoK1CmdU0YDasWm8kWqiEGsknY8%2BH6hTMdEDTFHO3J6pcd7il2ftF%2BiPrQxIBIwW%2F%2FlOV2kzQJWIa3whA4vG2aScAb6TnjAOvzZKDfDuoxE7rDxS3KVaCqn5pSZC7mzINOd7CNx5SarWE7Ba9dJGk5oExVhgWppXhttzgjTK7quz7f%2BaLt8trNeOVtgb5eiCGCitzOZHl5P89e6TNbwufN0trMMXAscQGOqUBA14aVzY4vShmHvxsdZKakVG99p1CB3KP2bJtSNn7krSuBaFQMUhdcfktqhj3ncnakknMlz%2FV8%2Bg4acJB5y6oLS9pj2a640AzY9vqp9COh45b71092XPCyBNNQ2m7TCk8XOXyNo73LHJra0Mmi44MH%2Fv0XDXiei5okk2evs8SfqCi1Nh4WoPOL6K5gkso6pDkwy%2FOEYzPVQmwIoF5sO%2Frnh%2FdibV5&X-Amz-Signature=ecdfb4298ab1eeea800bc03ec01efda01526ad645ea96ffece4c7e3fcf1525c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python
		...
		
		# ros2 run mbot_pkg my_node
    my_node = Node( # launches our custom node
        package='mbot_pkg',
        executable='my_node'
    )

    return LaunchDescription([
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
    ])
```

Now you only need `ros2 launch mbot_pkg display.launch.py` to run the whole setup

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5Z5LMC5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdYG0vdIcPsD8hG0coixIYIl7yyFbdDyj0ykQcUh%2BPqAIgNDOi%2F9A%2Bv5cBM0GZZOstgRnlAWEWUJHAryoefmqLu1MqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5yLvIzn%2Fg3kGyasCrcA%2BcN5toLKfIm0fGiefjEDUq%2B2jAcbsv8RiFqzh3b33ck7HkmsUOhRvALweEDwXrnURcgEAAyF3AlnzLO0iSX0jvzbSk0uoLoSAEscqNE9vEAhVTZqxMceq8l4MYuEPm5cX775SgWEBFIl8RpyNZDiMp6OuuCKGIOeSEgeGNKv1ns%2Fu71XzlvACzduG%2Fgo6ZuNsCnCuWPv%2BY%2BhQn%2F7Jys0EDr67JBqIXba%2F%2FEdbJByCWpNRL5y2R04waNhukRomzntwKj%2Fo7To9XOKC882x%2BAKeZsurM9bYfEibyCcxfZ%2BAZCL7a4%2FYmpWyFow9%2BJ5zqCBMS8j88H8D3x34yhITq4ZfUiOW0TYmCVeHGUPJByXIRBWPcQkYRnzC0jCEDvYPufAIeKNNQIOkh%2FHuNoqcuX4BE6MXUxY%2B3dC%2FhvoK1CmdU0YDasWm8kWqiEGsknY8%2BH6hTMdEDTFHO3J6pcd7il2ftF%2BiPrQxIBIwW%2F%2FlOV2kzQJWIa3whA4vG2aScAb6TnjAOvzZKDfDuoxE7rDxS3KVaCqn5pSZC7mzINOd7CNx5SarWE7Ba9dJGk5oExVhgWppXhttzgjTK7quz7f%2BaLt8trNeOVtgb5eiCGCitzOZHl5P89e6TNbwufN0trMMXAscQGOqUBA14aVzY4vShmHvxsdZKakVG99p1CB3KP2bJtSNn7krSuBaFQMUhdcfktqhj3ncnakknMlz%2FV8%2Bg4acJB5y6oLS9pj2a640AzY9vqp9COh45b71092XPCyBNNQ2m7TCk8XOXyNo73LHJra0Mmi44MH%2Fv0XDXiei5okk2evs8SfqCi1Nh4WoPOL6K5gkso6pDkwy%2FOEYzPVQmwIoF5sO%2Frnh%2FdibV5&X-Amz-Signature=e4863a66f3aec3e6a0d220a30c9cded4b580f72127d0c7f21448e0e167207607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LN65JBE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAtzItdguT8Fc2vMd2iEBKXyePrRypJXEny5wqabuIrAiAnEGEsIW3VEIZtBSy9qLXLEZkvmzbT9%2FeZvBLMrZ70xCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkrs%2Fbc%2B56lt8A2ZyKtwDRvuteQHCO9CDwEncZARucVogHb6SDoSw%2FHIOXkOp0Q7qDh5Fvej4LVo%2F7wxtMogMKHn3htfr7PMxxEdLEEvGsp8f%2B8MlXgRNAgVx3Y24lz1qu2RCD6r7mypWewmk1GOWsDsQV%2F4gQTH5xsAW%2FukrdFjPfDv8MhNdCxzR3bpI98FpLN5XQmh%2BtzzRAmuFmj9BOFcReM8qsGts6e%2BSkGjCbJsU2bR7nyue%2Fh0qEEL4tN0irIX4bp0eB8r3NAhUVlMlaUKQ5WfrlUyUrI4sT3b8zFo%2BbmaNIlkuFxe%2FFqDmOYCaSYFikbjKElE7jJ2OK2jjwjlmfCT84fQUHzzFpU8uJrjt%2BrDCFoD%2FNh%2BEoT9JtzLx7wrqKJ7CTxfCSc38bkUauKE0SVPInb6rJ8oPKHZugT%2Fx1TPAETUASu8FFf5oihZ9Cl3I5XgjjPaoMHBbVXLvpy4AE7tuKhtvEyMEeIDzu0fMBDlI4BsIznSmU7kIMZQp8R2iwfQVrZdYS%2BNmJ6wtDLx9LBgoUwsXSv5EOggxmtVUGrTTWJr6AHRMPFdKbto8f7g%2B4ioMvCxgBuGzyZWI2CBxnq4ZAlDpASZvICEMRLnAk8zh34nFNZEbh%2B%2Bx7Tkl%2Bc9k7ufg8HJt2zow%2BL%2BxxAY6pgGQ%2BVz%2BR02tlq1WS48j9cDJ9jx3iF7kU4WmgDnfCgW1jvPJd%2BUWCu2%2Fa935qhxTM060P2SQRkajhV5ErGcuv3zg99KaeXdEOJtix0stpcqlsCY0V6M5eEgJhCZEGQq74Gop4eLqtl%2BeIWdYcISfR98xF1UMz7Tso15k1YaWwk%2FG5qDZXLHtRxS%2BzchLtilWfwDsLcbz6xVC6uVMxgLlNROa0skDkh%2B5&X-Amz-Signature=5f3b22c755562ec83e82ce7f505a25991ce68edeb5bbd94e6c6aa1d4cd4226fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function that converts wheel angles to x,y

`calculate_position()` just takes in:

- current left & right wheel angles
- most recent measured left & right wheel angles
- robot’s rotation (theta)

and returns the (x,y)

add this above the `MinimalPublisher` class

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

```

Next lets make some variables to store the wheel angle, x, y, and theta (robot rotation)

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
   ...

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta


```

```python
 def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th, new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

first create a tf broadcaster object

```python
 class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # obj to broadcasts the odom tf frame
```

Then create a message and put `self.x` and `self.y` inside

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

```

## Running code

```bash
ros2 launch mbot_pkg display.launch.py
```

**Result:**

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5Z5LMC5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdYG0vdIcPsD8hG0coixIYIl7yyFbdDyj0ykQcUh%2BPqAIgNDOi%2F9A%2Bv5cBM0GZZOstgRnlAWEWUJHAryoefmqLu1MqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5yLvIzn%2Fg3kGyasCrcA%2BcN5toLKfIm0fGiefjEDUq%2B2jAcbsv8RiFqzh3b33ck7HkmsUOhRvALweEDwXrnURcgEAAyF3AlnzLO0iSX0jvzbSk0uoLoSAEscqNE9vEAhVTZqxMceq8l4MYuEPm5cX775SgWEBFIl8RpyNZDiMp6OuuCKGIOeSEgeGNKv1ns%2Fu71XzlvACzduG%2Fgo6ZuNsCnCuWPv%2BY%2BhQn%2F7Jys0EDr67JBqIXba%2F%2FEdbJByCWpNRL5y2R04waNhukRomzntwKj%2Fo7To9XOKC882x%2BAKeZsurM9bYfEibyCcxfZ%2BAZCL7a4%2FYmpWyFow9%2BJ5zqCBMS8j88H8D3x34yhITq4ZfUiOW0TYmCVeHGUPJByXIRBWPcQkYRnzC0jCEDvYPufAIeKNNQIOkh%2FHuNoqcuX4BE6MXUxY%2B3dC%2FhvoK1CmdU0YDasWm8kWqiEGsknY8%2BH6hTMdEDTFHO3J6pcd7il2ftF%2BiPrQxIBIwW%2F%2FlOV2kzQJWIa3whA4vG2aScAb6TnjAOvzZKDfDuoxE7rDxS3KVaCqn5pSZC7mzINOd7CNx5SarWE7Ba9dJGk5oExVhgWppXhttzgjTK7quz7f%2BaLt8trNeOVtgb5eiCGCitzOZHl5P89e6TNbwufN0trMMXAscQGOqUBA14aVzY4vShmHvxsdZKakVG99p1CB3KP2bJtSNn7krSuBaFQMUhdcfktqhj3ncnakknMlz%2FV8%2Bg4acJB5y6oLS9pj2a640AzY9vqp9COh45b71092XPCyBNNQ2m7TCk8XOXyNo73LHJra0Mmi44MH%2Fv0XDXiei5okk2evs8SfqCi1Nh4WoPOL6K5gkso6pDkwy%2FOEYzPVQmwIoF5sO%2Frnh%2FdibV5&X-Amz-Signature=af4eae684a1a053756e26ac71e1034aae09efbf3eda6068c2a6a8f48d650cf00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY2L7ZD6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC74%2BQcl9QtE0IIGIkMNI883534s6yd%2B7UR7dwarEGmtAiEAh6nnoBFR3hfgDzWioAiINTXOuKsdbdAPlcLzpADer7wqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX9d5xs0dKw591l4ircAzd37V%2B5MiFDd%2FQls9hZ34GOzmwj1mU7KYOJXIFAXxuh7n0j6rVBarju0zvF649BFabH3Un8u7O85hnRIlA2RJBFNWkB32QavELraRJBM282J%2B1QLSgXeDfxpBXaj6mREqb4M8ifmKyBUsmfayFSq%2BYcFIzFveI66aRKBomzGRIO%2BG6lKvg9XJRz1XOOFxabatxS%2B%2FwcCUfup8tnT1xJxUNU60M4knyWV8jF8vm6S6hM27ayHJMNlUwO9q4f6oQ702LXViyPX2Rwa%2F6FlX0frZvcmMic23f8kJ8UyE26wj4jvQxdCMuW4jIbA5%2FQrrdVVijl8E2pMABgiLyE7mdRSM0VjIu0YTo%2F%2BK9%2BB7Atku2D0OPOGQPhR%2BUdCnWnitZ%2F7tax%2BlrVARy%2F6v3dCfqCLu7Nn6cP5Zbc0hkfRcSEA6gqqbkPWDWtu10a8bJ5OiJG0ZzQoQtvD9NuPkJslq0HCYBWE7NyajUwC%2FUtR6fjqe9%2BbDhV%2FrYeq8J578QhzspVLbqh62NB980PqXg8GZyF1aYNY96YWdp%2FxCUJzN41oMc%2FWyUv0hZaDs5EdUsAMY%2BIexv6MyvYQZk88OLqbE7GkRh%2Bf6Xs0LJX5UTNTeXuu5guBllEB2TtwJh1qe%2BSMOvAscQGOqUBlH1noiDbAGfzNsQvmIrsptoMDO4%2Bn01JymKS1Ay4vVmNQqHKrvXfxOMEh6lHn6%2FhEx%2B7XhQ3E6Fd8q%2BMerhk59AZT4spXpLoupq6U1Kq%2B6Te4p1NFBfWyue3y3xz7kf4rKqcENhEgUtV9Oo5t9M4uOQyYTZKX1ruEyR1gV2%2Bw9i2Nkxb5m%2Fi2qaBhI%2B77cngw5L4Ebhx%2Bze8Oz66nCYF0HX3HNpo&X-Amz-Signature=54d7001e8995adeecff2badd478645ad66dced2617c0f8d6d58ce79c169a08fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY2L7ZD6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC74%2BQcl9QtE0IIGIkMNI883534s6yd%2B7UR7dwarEGmtAiEAh6nnoBFR3hfgDzWioAiINTXOuKsdbdAPlcLzpADer7wqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX9d5xs0dKw591l4ircAzd37V%2B5MiFDd%2FQls9hZ34GOzmwj1mU7KYOJXIFAXxuh7n0j6rVBarju0zvF649BFabH3Un8u7O85hnRIlA2RJBFNWkB32QavELraRJBM282J%2B1QLSgXeDfxpBXaj6mREqb4M8ifmKyBUsmfayFSq%2BYcFIzFveI66aRKBomzGRIO%2BG6lKvg9XJRz1XOOFxabatxS%2B%2FwcCUfup8tnT1xJxUNU60M4knyWV8jF8vm6S6hM27ayHJMNlUwO9q4f6oQ702LXViyPX2Rwa%2F6FlX0frZvcmMic23f8kJ8UyE26wj4jvQxdCMuW4jIbA5%2FQrrdVVijl8E2pMABgiLyE7mdRSM0VjIu0YTo%2F%2BK9%2BB7Atku2D0OPOGQPhR%2BUdCnWnitZ%2F7tax%2BlrVARy%2F6v3dCfqCLu7Nn6cP5Zbc0hkfRcSEA6gqqbkPWDWtu10a8bJ5OiJG0ZzQoQtvD9NuPkJslq0HCYBWE7NyajUwC%2FUtR6fjqe9%2BbDhV%2FrYeq8J578QhzspVLbqh62NB980PqXg8GZyF1aYNY96YWdp%2FxCUJzN41oMc%2FWyUv0hZaDs5EdUsAMY%2BIexv6MyvYQZk88OLqbE7GkRh%2Bf6Xs0LJX5UTNTeXuu5guBllEB2TtwJh1qe%2BSMOvAscQGOqUBlH1noiDbAGfzNsQvmIrsptoMDO4%2Bn01JymKS1Ay4vVmNQqHKrvXfxOMEh6lHn6%2FhEx%2B7XhQ3E6Fd8q%2BMerhk59AZT4spXpLoupq6U1Kq%2B6Te4p1NFBfWyue3y3xz7kf4rKqcENhEgUtV9Oo5t9M4uOQyYTZKX1ruEyR1gV2%2Bw9i2Nkxb5m%2Fi2qaBhI%2B77cngw5L4Ebhx%2Bze8Oz66nCYF0HX3HNpo&X-Amz-Signature=7fdcf70b6873365d21a95a481af1655556860a9bd9984da59596d2ba2f1a20ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self)

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...

    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY2L7ZD6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC74%2BQcl9QtE0IIGIkMNI883534s6yd%2B7UR7dwarEGmtAiEAh6nnoBFR3hfgDzWioAiINTXOuKsdbdAPlcLzpADer7wqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX9d5xs0dKw591l4ircAzd37V%2B5MiFDd%2FQls9hZ34GOzmwj1mU7KYOJXIFAXxuh7n0j6rVBarju0zvF649BFabH3Un8u7O85hnRIlA2RJBFNWkB32QavELraRJBM282J%2B1QLSgXeDfxpBXaj6mREqb4M8ifmKyBUsmfayFSq%2BYcFIzFveI66aRKBomzGRIO%2BG6lKvg9XJRz1XOOFxabatxS%2B%2FwcCUfup8tnT1xJxUNU60M4knyWV8jF8vm6S6hM27ayHJMNlUwO9q4f6oQ702LXViyPX2Rwa%2F6FlX0frZvcmMic23f8kJ8UyE26wj4jvQxdCMuW4jIbA5%2FQrrdVVijl8E2pMABgiLyE7mdRSM0VjIu0YTo%2F%2BK9%2BB7Atku2D0OPOGQPhR%2BUdCnWnitZ%2F7tax%2BlrVARy%2F6v3dCfqCLu7Nn6cP5Zbc0hkfRcSEA6gqqbkPWDWtu10a8bJ5OiJG0ZzQoQtvD9NuPkJslq0HCYBWE7NyajUwC%2FUtR6fjqe9%2BbDhV%2FrYeq8J578QhzspVLbqh62NB980PqXg8GZyF1aYNY96YWdp%2FxCUJzN41oMc%2FWyUv0hZaDs5EdUsAMY%2BIexv6MyvYQZk88OLqbE7GkRh%2Bf6Xs0LJX5UTNTeXuu5guBllEB2TtwJh1qe%2BSMOvAscQGOqUBlH1noiDbAGfzNsQvmIrsptoMDO4%2Bn01JymKS1Ay4vVmNQqHKrvXfxOMEh6lHn6%2FhEx%2B7XhQ3E6Fd8q%2BMerhk59AZT4spXpLoupq6U1Kq%2B6Te4p1NFBfWyue3y3xz7kf4rKqcENhEgUtV9Oo5t9M4uOQyYTZKX1ruEyR1gV2%2Bw9i2Nkxb5m%2Fi2qaBhI%2B77cngw5L4Ebhx%2Bze8Oz66nCYF0HX3HNpo&X-Amz-Signature=2bc4545ffd29cc2f73d8ada451535d288e07be0393cc7f6ed7db8d718d95512e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

{{< /table >}}

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY2L7ZD6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC74%2BQcl9QtE0IIGIkMNI883534s6yd%2B7UR7dwarEGmtAiEAh6nnoBFR3hfgDzWioAiINTXOuKsdbdAPlcLzpADer7wqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX9d5xs0dKw591l4ircAzd37V%2B5MiFDd%2FQls9hZ34GOzmwj1mU7KYOJXIFAXxuh7n0j6rVBarju0zvF649BFabH3Un8u7O85hnRIlA2RJBFNWkB32QavELraRJBM282J%2B1QLSgXeDfxpBXaj6mREqb4M8ifmKyBUsmfayFSq%2BYcFIzFveI66aRKBomzGRIO%2BG6lKvg9XJRz1XOOFxabatxS%2B%2FwcCUfup8tnT1xJxUNU60M4knyWV8jF8vm6S6hM27ayHJMNlUwO9q4f6oQ702LXViyPX2Rwa%2F6FlX0frZvcmMic23f8kJ8UyE26wj4jvQxdCMuW4jIbA5%2FQrrdVVijl8E2pMABgiLyE7mdRSM0VjIu0YTo%2F%2BK9%2BB7Atku2D0OPOGQPhR%2BUdCnWnitZ%2F7tax%2BlrVARy%2F6v3dCfqCLu7Nn6cP5Zbc0hkfRcSEA6gqqbkPWDWtu10a8bJ5OiJG0ZzQoQtvD9NuPkJslq0HCYBWE7NyajUwC%2FUtR6fjqe9%2BbDhV%2FrYeq8J578QhzspVLbqh62NB980PqXg8GZyF1aYNY96YWdp%2FxCUJzN41oMc%2FWyUv0hZaDs5EdUsAMY%2BIexv6MyvYQZk88OLqbE7GkRh%2Bf6Xs0LJX5UTNTeXuu5guBllEB2TtwJh1qe%2BSMOvAscQGOqUBlH1noiDbAGfzNsQvmIrsptoMDO4%2Bn01JymKS1Ay4vVmNQqHKrvXfxOMEh6lHn6%2FhEx%2B7XhQ3E6Fd8q%2BMerhk59AZT4spXpLoupq6U1Kq%2B6Te4p1NFBfWyue3y3xz7kf4rKqcENhEgUtV9Oo5t9M4uOQyYTZKX1ruEyR1gV2%2Bw9i2Nkxb5m%2Fi2qaBhI%2B77cngw5L4Ebhx%2Bze8Oz66nCYF0HX3HNpo&X-Amz-Signature=4ba682ac58e3a51e3db79b4a3d4750f0df562ea40de519905a766dca9de83c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY2L7ZD6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC74%2BQcl9QtE0IIGIkMNI883534s6yd%2B7UR7dwarEGmtAiEAh6nnoBFR3hfgDzWioAiINTXOuKsdbdAPlcLzpADer7wqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX9d5xs0dKw591l4ircAzd37V%2B5MiFDd%2FQls9hZ34GOzmwj1mU7KYOJXIFAXxuh7n0j6rVBarju0zvF649BFabH3Un8u7O85hnRIlA2RJBFNWkB32QavELraRJBM282J%2B1QLSgXeDfxpBXaj6mREqb4M8ifmKyBUsmfayFSq%2BYcFIzFveI66aRKBomzGRIO%2BG6lKvg9XJRz1XOOFxabatxS%2B%2FwcCUfup8tnT1xJxUNU60M4knyWV8jF8vm6S6hM27ayHJMNlUwO9q4f6oQ702LXViyPX2Rwa%2F6FlX0frZvcmMic23f8kJ8UyE26wj4jvQxdCMuW4jIbA5%2FQrrdVVijl8E2pMABgiLyE7mdRSM0VjIu0YTo%2F%2BK9%2BB7Atku2D0OPOGQPhR%2BUdCnWnitZ%2F7tax%2BlrVARy%2F6v3dCfqCLu7Nn6cP5Zbc0hkfRcSEA6gqqbkPWDWtu10a8bJ5OiJG0ZzQoQtvD9NuPkJslq0HCYBWE7NyajUwC%2FUtR6fjqe9%2BbDhV%2FrYeq8J578QhzspVLbqh62NB980PqXg8GZyF1aYNY96YWdp%2FxCUJzN41oMc%2FWyUv0hZaDs5EdUsAMY%2BIexv6MyvYQZk88OLqbE7GkRh%2Bf6Xs0LJX5UTNTeXuu5guBllEB2TtwJh1qe%2BSMOvAscQGOqUBlH1noiDbAGfzNsQvmIrsptoMDO4%2Bn01JymKS1Ay4vVmNQqHKrvXfxOMEh6lHn6%2FhEx%2B7XhQ3E6Fd8q%2BMerhk59AZT4spXpLoupq6U1Kq%2B6Te4p1NFBfWyue3y3xz7kf4rKqcENhEgUtV9Oo5t9M4uOQyYTZKX1ruEyR1gV2%2Bw9i2Nkxb5m%2Fi2qaBhI%2B77cngw5L4Ebhx%2Bze8Oz66nCYF0HX3HNpo&X-Amz-Signature=43c13ab05317d601ddb4b8006305ac62b874178ae6bdfb240cd61e33c66110a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY2L7ZD6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC74%2BQcl9QtE0IIGIkMNI883534s6yd%2B7UR7dwarEGmtAiEAh6nnoBFR3hfgDzWioAiINTXOuKsdbdAPlcLzpADer7wqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX9d5xs0dKw591l4ircAzd37V%2B5MiFDd%2FQls9hZ34GOzmwj1mU7KYOJXIFAXxuh7n0j6rVBarju0zvF649BFabH3Un8u7O85hnRIlA2RJBFNWkB32QavELraRJBM282J%2B1QLSgXeDfxpBXaj6mREqb4M8ifmKyBUsmfayFSq%2BYcFIzFveI66aRKBomzGRIO%2BG6lKvg9XJRz1XOOFxabatxS%2B%2FwcCUfup8tnT1xJxUNU60M4knyWV8jF8vm6S6hM27ayHJMNlUwO9q4f6oQ702LXViyPX2Rwa%2F6FlX0frZvcmMic23f8kJ8UyE26wj4jvQxdCMuW4jIbA5%2FQrrdVVijl8E2pMABgiLyE7mdRSM0VjIu0YTo%2F%2BK9%2BB7Atku2D0OPOGQPhR%2BUdCnWnitZ%2F7tax%2BlrVARy%2F6v3dCfqCLu7Nn6cP5Zbc0hkfRcSEA6gqqbkPWDWtu10a8bJ5OiJG0ZzQoQtvD9NuPkJslq0HCYBWE7NyajUwC%2FUtR6fjqe9%2BbDhV%2FrYeq8J578QhzspVLbqh62NB980PqXg8GZyF1aYNY96YWdp%2FxCUJzN41oMc%2FWyUv0hZaDs5EdUsAMY%2BIexv6MyvYQZk88OLqbE7GkRh%2Bf6Xs0LJX5UTNTeXuu5guBllEB2TtwJh1qe%2BSMOvAscQGOqUBlH1noiDbAGfzNsQvmIrsptoMDO4%2Bn01JymKS1Ay4vVmNQqHKrvXfxOMEh6lHn6%2FhEx%2B7XhQ3E6Fd8q%2BMerhk59AZT4spXpLoupq6U1Kq%2B6Te4p1NFBfWyue3y3xz7kf4rKqcENhEgUtV9Oo5t9M4uOQyYTZKX1ruEyR1gV2%2Bw9i2Nkxb5m%2Fi2qaBhI%2B77cngw5L4Ebhx%2Bze8Oz66nCYF0HX3HNpo&X-Amz-Signature=64fcbd80c98d346a0ab56348247bf5022f111e0a8bba2f4af2879887adcb6486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

formatting the print better we can see `TwistStamped` is made of 3 parts

```bash
geometry_msgs.msg.TwistStamped(
	header=std_msgs.msg.Header(stamp=builtin_interfaces.msg.Time(sec=1752445192, nanosec=279741976), frame_id=''),
	twist=geometry_msgs.msg.Twist(
		linear=geometry_msgs.msg.Vector3(x=0.5, y=0.0, z=0.0),
		angular=geometry_msgs.msg.Vector3(x=0.0, y=0.0, z=0.0)
	)
)
```

**TwistStamped:**

- header
- **Twist:**
	- linear
	- angular

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY2L7ZD6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC74%2BQcl9QtE0IIGIkMNI883534s6yd%2B7UR7dwarEGmtAiEAh6nnoBFR3hfgDzWioAiINTXOuKsdbdAPlcLzpADer7wqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX9d5xs0dKw591l4ircAzd37V%2B5MiFDd%2FQls9hZ34GOzmwj1mU7KYOJXIFAXxuh7n0j6rVBarju0zvF649BFabH3Un8u7O85hnRIlA2RJBFNWkB32QavELraRJBM282J%2B1QLSgXeDfxpBXaj6mREqb4M8ifmKyBUsmfayFSq%2BYcFIzFveI66aRKBomzGRIO%2BG6lKvg9XJRz1XOOFxabatxS%2B%2FwcCUfup8tnT1xJxUNU60M4knyWV8jF8vm6S6hM27ayHJMNlUwO9q4f6oQ702LXViyPX2Rwa%2F6FlX0frZvcmMic23f8kJ8UyE26wj4jvQxdCMuW4jIbA5%2FQrrdVVijl8E2pMABgiLyE7mdRSM0VjIu0YTo%2F%2BK9%2BB7Atku2D0OPOGQPhR%2BUdCnWnitZ%2F7tax%2BlrVARy%2F6v3dCfqCLu7Nn6cP5Zbc0hkfRcSEA6gqqbkPWDWtu10a8bJ5OiJG0ZzQoQtvD9NuPkJslq0HCYBWE7NyajUwC%2FUtR6fjqe9%2BbDhV%2FrYeq8J578QhzspVLbqh62NB980PqXg8GZyF1aYNY96YWdp%2FxCUJzN41oMc%2FWyUv0hZaDs5EdUsAMY%2BIexv6MyvYQZk88OLqbE7GkRh%2Bf6Xs0LJX5UTNTeXuu5guBllEB2TtwJh1qe%2BSMOvAscQGOqUBlH1noiDbAGfzNsQvmIrsptoMDO4%2Bn01JymKS1Ay4vVmNQqHKrvXfxOMEh6lHn6%2FhEx%2B7XhQ3E6Fd8q%2BMerhk59AZT4spXpLoupq6U1Kq%2B6Te4p1NFBfWyue3y3xz7kf4rKqcENhEgUtV9Oo5t9M4uOQyYTZKX1ruEyR1gV2%2Bw9i2Nkxb5m%2Fi2qaBhI%2B77cngw5L4Ebhx%2Bze8Oz66nCYF0HX3HNpo&X-Amz-Signature=32220fb108c15a9958cda6447346c3ba52adf409b64b8809e12a1ac76a85ee8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# Adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY2L7ZD6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC74%2BQcl9QtE0IIGIkMNI883534s6yd%2B7UR7dwarEGmtAiEAh6nnoBFR3hfgDzWioAiINTXOuKsdbdAPlcLzpADer7wqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX9d5xs0dKw591l4ircAzd37V%2B5MiFDd%2FQls9hZ34GOzmwj1mU7KYOJXIFAXxuh7n0j6rVBarju0zvF649BFabH3Un8u7O85hnRIlA2RJBFNWkB32QavELraRJBM282J%2B1QLSgXeDfxpBXaj6mREqb4M8ifmKyBUsmfayFSq%2BYcFIzFveI66aRKBomzGRIO%2BG6lKvg9XJRz1XOOFxabatxS%2B%2FwcCUfup8tnT1xJxUNU60M4knyWV8jF8vm6S6hM27ayHJMNlUwO9q4f6oQ702LXViyPX2Rwa%2F6FlX0frZvcmMic23f8kJ8UyE26wj4jvQxdCMuW4jIbA5%2FQrrdVVijl8E2pMABgiLyE7mdRSM0VjIu0YTo%2F%2BK9%2BB7Atku2D0OPOGQPhR%2BUdCnWnitZ%2F7tax%2BlrVARy%2F6v3dCfqCLu7Nn6cP5Zbc0hkfRcSEA6gqqbkPWDWtu10a8bJ5OiJG0ZzQoQtvD9NuPkJslq0HCYBWE7NyajUwC%2FUtR6fjqe9%2BbDhV%2FrYeq8J578QhzspVLbqh62NB980PqXg8GZyF1aYNY96YWdp%2FxCUJzN41oMc%2FWyUv0hZaDs5EdUsAMY%2BIexv6MyvYQZk88OLqbE7GkRh%2Bf6Xs0LJX5UTNTeXuu5guBllEB2TtwJh1qe%2BSMOvAscQGOqUBlH1noiDbAGfzNsQvmIrsptoMDO4%2Bn01JymKS1Ay4vVmNQqHKrvXfxOMEh6lHn6%2FhEx%2B7XhQ3E6Fd8q%2BMerhk59AZT4spXpLoupq6U1Kq%2B6Te4p1NFBfWyue3y3xz7kf4rKqcENhEgUtV9Oo5t9M4uOQyYTZKX1ruEyR1gV2%2Bw9i2Nkxb5m%2Fi2qaBhI%2B77cngw5L4Ebhx%2Bze8Oz66nCYF0HX3HNpo&X-Amz-Signature=5f95d8c36ecdab3aeb2f25318211680d3f69dbd411b8c61f7bc0d773c83ab9f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Again we just need to make a publisher and fill in the `nav_msgs/Odometry` message format:

```yaml
header:
  stamp:
    sec: 1753330401
    nanosec: 859879019
  frame_id: odom
child_frame_id: base_link
pose:
  pose:
    position:
      x: 0.42549007816038587
      y: 0.20845842868953549
      z: 0.0
    orientation:
      x: 0.0
      y: 0.0
      z: 0.43871361044460205
      w: 0.8986269348348412
  covariance:
  - 0.0
    ...
twist:
  twist:
    linear:
      x: 0.0
      y: 0.0
      z: 0.0
    angular:
      x: 0.0
      y: 0.0
      z: 0.0
  covariance:
  - 0.0
    ...
```

```python
       
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        
        ...

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 

        self.odom_publisher = self.create_publisher(Odometry, '/odom', 10)


    def timer_callback(self):
        ...
        
        odom_msg = Odometry()
        odom_msg.header.stamp = current_time
        odom_msg.header.frame_id = 'odom'
        odom_msg.child_frame_id = 'base_link'
        odom_msg.pose.pose.position.x = float(self.x)
        odom_msg.pose.pose.position.y = float(self.y)
        odom_msg.pose.pose.position.z = 0.0
        odom_msg.twist.twist.linear.x = 0.0#float(vx)
        odom_msg.twist.twist.linear.y = 0.0#float(vy)
        odom_msg.twist.twist.angular.z = 0.0
        odom_msg.pose.pose.orientation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_publisher.publish(odom_msg)
```

<details>
      <summary>Final code</summary>
      
  </details>

TODO: idk mention + link Robot Localization node
