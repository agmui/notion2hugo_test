---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-03T21:37:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVXR6ED%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOV0II4Cp%2BbNpz0J3PX1NFQI1C8MqECMSPnQP2YBbLAIgVivJ%2BfXhNglm4agCLFpO4MonMfOVuUVWr%2BkgP3lOYSYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRKhe60cRpMCfrnBircA0fnaAlPT21q%2BR7HSWk8n59UzLlVkkytQRd%2BXyD3AAdXA%2B6LzE5FYLQD2IiS7WKYVdctCOlGTF5lBibQkRoJ6gGX%2FaVokG%2FH4yLrK2QTZfHGg2PytUy4AjbJxdhqWnkBfqRirQjtZ0wg4Zt6nUZYHP48K9P6bdCfwo4en29dvQNsLbshP8jKV%2FsM6aaK2D7qCjevcWKdMHRNIpJpa4zft75vyG2NieKhLCbk7QEOfXYSY28wOU%2FPqiXqJnCod%2BoJJWwg2X739vzNeSPtoR3GsERvCzn0LjMYZQDbOdg0Ntrwo2Ou4cNPxUkfvmGDD7aGztAhqc%2FQ8uxNJxvkyRfhBD86th5Fk8lfI9pjdOlvM99U8y4vZQcirlq3WKT59Hxe7Z5lrshmd2L%2BHk5T4cy8RZOZDkvjpna%2BsbtnVPSCPJAta7fVC2%2Fq%2BZ7mLUoNO%2BJYM5f9MMsC6FO%2Fv84YU%2FFO3nZA5PjhzvZJmluvLibw6vOGbkv5VLRAubPYXDo%2F4FN3B9R4oIXIU2wgPTIrLw%2FIwvlqG3ZLzarCU%2FMvIV3k4vgCEDvguwr%2B8FfY45xuAue8MrIkqGOMc5Gbc%2F9f46FBK3fnVkHYnSSeDZPHKE38O8h2GeiVvJzW0EtZ4ijAMNbh3MQGOqUBDB5HN49ykHvC0K%2F%2FIZTH3t4q%2F332k6iIcUm3EjyTvcjM4aAntPdFji7bLZxT%2BwklJMNTcB9FhStoaz%2FCofSi2TpmSiZncVqYd299agCKarB55nLsrurhYg%2BIeDtB7GSBRA8elNt4Qpnwcx7%2FGwxvjaDhNAXcoK0QuVEpWc3TWAqbge%2FzrFBiTfcUrDoDyRyvDck6QDvXfm8zsKlpir%2FAA%2FPjvZWD&X-Amz-Signature=bd3f54f46a0558897a162bae5444ef9c2391f1ee06a633ecc696d23c308dbc08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVXR6ED%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOV0II4Cp%2BbNpz0J3PX1NFQI1C8MqECMSPnQP2YBbLAIgVivJ%2BfXhNglm4agCLFpO4MonMfOVuUVWr%2BkgP3lOYSYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRKhe60cRpMCfrnBircA0fnaAlPT21q%2BR7HSWk8n59UzLlVkkytQRd%2BXyD3AAdXA%2B6LzE5FYLQD2IiS7WKYVdctCOlGTF5lBibQkRoJ6gGX%2FaVokG%2FH4yLrK2QTZfHGg2PytUy4AjbJxdhqWnkBfqRirQjtZ0wg4Zt6nUZYHP48K9P6bdCfwo4en29dvQNsLbshP8jKV%2FsM6aaK2D7qCjevcWKdMHRNIpJpa4zft75vyG2NieKhLCbk7QEOfXYSY28wOU%2FPqiXqJnCod%2BoJJWwg2X739vzNeSPtoR3GsERvCzn0LjMYZQDbOdg0Ntrwo2Ou4cNPxUkfvmGDD7aGztAhqc%2FQ8uxNJxvkyRfhBD86th5Fk8lfI9pjdOlvM99U8y4vZQcirlq3WKT59Hxe7Z5lrshmd2L%2BHk5T4cy8RZOZDkvjpna%2BsbtnVPSCPJAta7fVC2%2Fq%2BZ7mLUoNO%2BJYM5f9MMsC6FO%2Fv84YU%2FFO3nZA5PjhzvZJmluvLibw6vOGbkv5VLRAubPYXDo%2F4FN3B9R4oIXIU2wgPTIrLw%2FIwvlqG3ZLzarCU%2FMvIV3k4vgCEDvguwr%2B8FfY45xuAue8MrIkqGOMc5Gbc%2F9f46FBK3fnVkHYnSSeDZPHKE38O8h2GeiVvJzW0EtZ4ijAMNbh3MQGOqUBDB5HN49ykHvC0K%2F%2FIZTH3t4q%2F332k6iIcUm3EjyTvcjM4aAntPdFji7bLZxT%2BwklJMNTcB9FhStoaz%2FCofSi2TpmSiZncVqYd299agCKarB55nLsrurhYg%2BIeDtB7GSBRA8elNt4Qpnwcx7%2FGwxvjaDhNAXcoK0QuVEpWc3TWAqbge%2FzrFBiTfcUrDoDyRyvDck6QDvXfm8zsKlpir%2FAA%2FPjvZWD&X-Amz-Signature=189d523c0ad44c9e5760e24714d855b13b264fe16a28671598c4794f4c2359c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVXR6ED%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOV0II4Cp%2BbNpz0J3PX1NFQI1C8MqECMSPnQP2YBbLAIgVivJ%2BfXhNglm4agCLFpO4MonMfOVuUVWr%2BkgP3lOYSYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRKhe60cRpMCfrnBircA0fnaAlPT21q%2BR7HSWk8n59UzLlVkkytQRd%2BXyD3AAdXA%2B6LzE5FYLQD2IiS7WKYVdctCOlGTF5lBibQkRoJ6gGX%2FaVokG%2FH4yLrK2QTZfHGg2PytUy4AjbJxdhqWnkBfqRirQjtZ0wg4Zt6nUZYHP48K9P6bdCfwo4en29dvQNsLbshP8jKV%2FsM6aaK2D7qCjevcWKdMHRNIpJpa4zft75vyG2NieKhLCbk7QEOfXYSY28wOU%2FPqiXqJnCod%2BoJJWwg2X739vzNeSPtoR3GsERvCzn0LjMYZQDbOdg0Ntrwo2Ou4cNPxUkfvmGDD7aGztAhqc%2FQ8uxNJxvkyRfhBD86th5Fk8lfI9pjdOlvM99U8y4vZQcirlq3WKT59Hxe7Z5lrshmd2L%2BHk5T4cy8RZOZDkvjpna%2BsbtnVPSCPJAta7fVC2%2Fq%2BZ7mLUoNO%2BJYM5f9MMsC6FO%2Fv84YU%2FFO3nZA5PjhzvZJmluvLibw6vOGbkv5VLRAubPYXDo%2F4FN3B9R4oIXIU2wgPTIrLw%2FIwvlqG3ZLzarCU%2FMvIV3k4vgCEDvguwr%2B8FfY45xuAue8MrIkqGOMc5Gbc%2F9f46FBK3fnVkHYnSSeDZPHKE38O8h2GeiVvJzW0EtZ4ijAMNbh3MQGOqUBDB5HN49ykHvC0K%2F%2FIZTH3t4q%2F332k6iIcUm3EjyTvcjM4aAntPdFji7bLZxT%2BwklJMNTcB9FhStoaz%2FCofSi2TpmSiZncVqYd299agCKarB55nLsrurhYg%2BIeDtB7GSBRA8elNt4Qpnwcx7%2FGwxvjaDhNAXcoK0QuVEpWc3TWAqbge%2FzrFBiTfcUrDoDyRyvDck6QDvXfm8zsKlpir%2FAA%2FPjvZWD&X-Amz-Signature=c5ae574cac2ef0f89c43111aacd1364382e24e64100dc9cb0c2b7a88a3974129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVXR6ED%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOV0II4Cp%2BbNpz0J3PX1NFQI1C8MqECMSPnQP2YBbLAIgVivJ%2BfXhNglm4agCLFpO4MonMfOVuUVWr%2BkgP3lOYSYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRKhe60cRpMCfrnBircA0fnaAlPT21q%2BR7HSWk8n59UzLlVkkytQRd%2BXyD3AAdXA%2B6LzE5FYLQD2IiS7WKYVdctCOlGTF5lBibQkRoJ6gGX%2FaVokG%2FH4yLrK2QTZfHGg2PytUy4AjbJxdhqWnkBfqRirQjtZ0wg4Zt6nUZYHP48K9P6bdCfwo4en29dvQNsLbshP8jKV%2FsM6aaK2D7qCjevcWKdMHRNIpJpa4zft75vyG2NieKhLCbk7QEOfXYSY28wOU%2FPqiXqJnCod%2BoJJWwg2X739vzNeSPtoR3GsERvCzn0LjMYZQDbOdg0Ntrwo2Ou4cNPxUkfvmGDD7aGztAhqc%2FQ8uxNJxvkyRfhBD86th5Fk8lfI9pjdOlvM99U8y4vZQcirlq3WKT59Hxe7Z5lrshmd2L%2BHk5T4cy8RZOZDkvjpna%2BsbtnVPSCPJAta7fVC2%2Fq%2BZ7mLUoNO%2BJYM5f9MMsC6FO%2Fv84YU%2FFO3nZA5PjhzvZJmluvLibw6vOGbkv5VLRAubPYXDo%2F4FN3B9R4oIXIU2wgPTIrLw%2FIwvlqG3ZLzarCU%2FMvIV3k4vgCEDvguwr%2B8FfY45xuAue8MrIkqGOMc5Gbc%2F9f46FBK3fnVkHYnSSeDZPHKE38O8h2GeiVvJzW0EtZ4ijAMNbh3MQGOqUBDB5HN49ykHvC0K%2F%2FIZTH3t4q%2F332k6iIcUm3EjyTvcjM4aAntPdFji7bLZxT%2BwklJMNTcB9FhStoaz%2FCofSi2TpmSiZncVqYd299agCKarB55nLsrurhYg%2BIeDtB7GSBRA8elNt4Qpnwcx7%2FGwxvjaDhNAXcoK0QuVEpWc3TWAqbge%2FzrFBiTfcUrDoDyRyvDck6QDvXfm8zsKlpir%2FAA%2FPjvZWD&X-Amz-Signature=18d6d2f5dbc49b72b828b1a92670fb5aaf69bebcbcb4808c24df2971c027cfd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVXR6ED%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOV0II4Cp%2BbNpz0J3PX1NFQI1C8MqECMSPnQP2YBbLAIgVivJ%2BfXhNglm4agCLFpO4MonMfOVuUVWr%2BkgP3lOYSYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRKhe60cRpMCfrnBircA0fnaAlPT21q%2BR7HSWk8n59UzLlVkkytQRd%2BXyD3AAdXA%2B6LzE5FYLQD2IiS7WKYVdctCOlGTF5lBibQkRoJ6gGX%2FaVokG%2FH4yLrK2QTZfHGg2PytUy4AjbJxdhqWnkBfqRirQjtZ0wg4Zt6nUZYHP48K9P6bdCfwo4en29dvQNsLbshP8jKV%2FsM6aaK2D7qCjevcWKdMHRNIpJpa4zft75vyG2NieKhLCbk7QEOfXYSY28wOU%2FPqiXqJnCod%2BoJJWwg2X739vzNeSPtoR3GsERvCzn0LjMYZQDbOdg0Ntrwo2Ou4cNPxUkfvmGDD7aGztAhqc%2FQ8uxNJxvkyRfhBD86th5Fk8lfI9pjdOlvM99U8y4vZQcirlq3WKT59Hxe7Z5lrshmd2L%2BHk5T4cy8RZOZDkvjpna%2BsbtnVPSCPJAta7fVC2%2Fq%2BZ7mLUoNO%2BJYM5f9MMsC6FO%2Fv84YU%2FFO3nZA5PjhzvZJmluvLibw6vOGbkv5VLRAubPYXDo%2F4FN3B9R4oIXIU2wgPTIrLw%2FIwvlqG3ZLzarCU%2FMvIV3k4vgCEDvguwr%2B8FfY45xuAue8MrIkqGOMc5Gbc%2F9f46FBK3fnVkHYnSSeDZPHKE38O8h2GeiVvJzW0EtZ4ijAMNbh3MQGOqUBDB5HN49ykHvC0K%2F%2FIZTH3t4q%2F332k6iIcUm3EjyTvcjM4aAntPdFji7bLZxT%2BwklJMNTcB9FhStoaz%2FCofSi2TpmSiZncVqYd299agCKarB55nLsrurhYg%2BIeDtB7GSBRA8elNt4Qpnwcx7%2FGwxvjaDhNAXcoK0QuVEpWc3TWAqbge%2FzrFBiTfcUrDoDyRyvDck6QDvXfm8zsKlpir%2FAA%2FPjvZWD&X-Amz-Signature=c1fc2d273f7d1381c64e62ec5d815196825e24499f4587e6814f2c3440efc73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVXR6ED%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOV0II4Cp%2BbNpz0J3PX1NFQI1C8MqECMSPnQP2YBbLAIgVivJ%2BfXhNglm4agCLFpO4MonMfOVuUVWr%2BkgP3lOYSYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRKhe60cRpMCfrnBircA0fnaAlPT21q%2BR7HSWk8n59UzLlVkkytQRd%2BXyD3AAdXA%2B6LzE5FYLQD2IiS7WKYVdctCOlGTF5lBibQkRoJ6gGX%2FaVokG%2FH4yLrK2QTZfHGg2PytUy4AjbJxdhqWnkBfqRirQjtZ0wg4Zt6nUZYHP48K9P6bdCfwo4en29dvQNsLbshP8jKV%2FsM6aaK2D7qCjevcWKdMHRNIpJpa4zft75vyG2NieKhLCbk7QEOfXYSY28wOU%2FPqiXqJnCod%2BoJJWwg2X739vzNeSPtoR3GsERvCzn0LjMYZQDbOdg0Ntrwo2Ou4cNPxUkfvmGDD7aGztAhqc%2FQ8uxNJxvkyRfhBD86th5Fk8lfI9pjdOlvM99U8y4vZQcirlq3WKT59Hxe7Z5lrshmd2L%2BHk5T4cy8RZOZDkvjpna%2BsbtnVPSCPJAta7fVC2%2Fq%2BZ7mLUoNO%2BJYM5f9MMsC6FO%2Fv84YU%2FFO3nZA5PjhzvZJmluvLibw6vOGbkv5VLRAubPYXDo%2F4FN3B9R4oIXIU2wgPTIrLw%2FIwvlqG3ZLzarCU%2FMvIV3k4vgCEDvguwr%2B8FfY45xuAue8MrIkqGOMc5Gbc%2F9f46FBK3fnVkHYnSSeDZPHKE38O8h2GeiVvJzW0EtZ4ijAMNbh3MQGOqUBDB5HN49ykHvC0K%2F%2FIZTH3t4q%2F332k6iIcUm3EjyTvcjM4aAntPdFji7bLZxT%2BwklJMNTcB9FhStoaz%2FCofSi2TpmSiZncVqYd299agCKarB55nLsrurhYg%2BIeDtB7GSBRA8elNt4Qpnwcx7%2FGwxvjaDhNAXcoK0QuVEpWc3TWAqbge%2FzrFBiTfcUrDoDyRyvDck6QDvXfm8zsKlpir%2FAA%2FPjvZWD&X-Amz-Signature=7b1429cc1c19955eb538e28e49ee67b567c2aa341555f0c29f5d05ef82c532c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVXR6ED%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOV0II4Cp%2BbNpz0J3PX1NFQI1C8MqECMSPnQP2YBbLAIgVivJ%2BfXhNglm4agCLFpO4MonMfOVuUVWr%2BkgP3lOYSYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRKhe60cRpMCfrnBircA0fnaAlPT21q%2BR7HSWk8n59UzLlVkkytQRd%2BXyD3AAdXA%2B6LzE5FYLQD2IiS7WKYVdctCOlGTF5lBibQkRoJ6gGX%2FaVokG%2FH4yLrK2QTZfHGg2PytUy4AjbJxdhqWnkBfqRirQjtZ0wg4Zt6nUZYHP48K9P6bdCfwo4en29dvQNsLbshP8jKV%2FsM6aaK2D7qCjevcWKdMHRNIpJpa4zft75vyG2NieKhLCbk7QEOfXYSY28wOU%2FPqiXqJnCod%2BoJJWwg2X739vzNeSPtoR3GsERvCzn0LjMYZQDbOdg0Ntrwo2Ou4cNPxUkfvmGDD7aGztAhqc%2FQ8uxNJxvkyRfhBD86th5Fk8lfI9pjdOlvM99U8y4vZQcirlq3WKT59Hxe7Z5lrshmd2L%2BHk5T4cy8RZOZDkvjpna%2BsbtnVPSCPJAta7fVC2%2Fq%2BZ7mLUoNO%2BJYM5f9MMsC6FO%2Fv84YU%2FFO3nZA5PjhzvZJmluvLibw6vOGbkv5VLRAubPYXDo%2F4FN3B9R4oIXIU2wgPTIrLw%2FIwvlqG3ZLzarCU%2FMvIV3k4vgCEDvguwr%2B8FfY45xuAue8MrIkqGOMc5Gbc%2F9f46FBK3fnVkHYnSSeDZPHKE38O8h2GeiVvJzW0EtZ4ijAMNbh3MQGOqUBDB5HN49ykHvC0K%2F%2FIZTH3t4q%2F332k6iIcUm3EjyTvcjM4aAntPdFji7bLZxT%2BwklJMNTcB9FhStoaz%2FCofSi2TpmSiZncVqYd299agCKarB55nLsrurhYg%2BIeDtB7GSBRA8elNt4Qpnwcx7%2FGwxvjaDhNAXcoK0QuVEpWc3TWAqbge%2FzrFBiTfcUrDoDyRyvDck6QDvXfm8zsKlpir%2FAA%2FPjvZWD&X-Amz-Signature=86c7f97b1733568bb2cbba75bd8de8dc674cb2ab4a9d872a82b4201107f2ec53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVXR6ED%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOV0II4Cp%2BbNpz0J3PX1NFQI1C8MqECMSPnQP2YBbLAIgVivJ%2BfXhNglm4agCLFpO4MonMfOVuUVWr%2BkgP3lOYSYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRKhe60cRpMCfrnBircA0fnaAlPT21q%2BR7HSWk8n59UzLlVkkytQRd%2BXyD3AAdXA%2B6LzE5FYLQD2IiS7WKYVdctCOlGTF5lBibQkRoJ6gGX%2FaVokG%2FH4yLrK2QTZfHGg2PytUy4AjbJxdhqWnkBfqRirQjtZ0wg4Zt6nUZYHP48K9P6bdCfwo4en29dvQNsLbshP8jKV%2FsM6aaK2D7qCjevcWKdMHRNIpJpa4zft75vyG2NieKhLCbk7QEOfXYSY28wOU%2FPqiXqJnCod%2BoJJWwg2X739vzNeSPtoR3GsERvCzn0LjMYZQDbOdg0Ntrwo2Ou4cNPxUkfvmGDD7aGztAhqc%2FQ8uxNJxvkyRfhBD86th5Fk8lfI9pjdOlvM99U8y4vZQcirlq3WKT59Hxe7Z5lrshmd2L%2BHk5T4cy8RZOZDkvjpna%2BsbtnVPSCPJAta7fVC2%2Fq%2BZ7mLUoNO%2BJYM5f9MMsC6FO%2Fv84YU%2FFO3nZA5PjhzvZJmluvLibw6vOGbkv5VLRAubPYXDo%2F4FN3B9R4oIXIU2wgPTIrLw%2FIwvlqG3ZLzarCU%2FMvIV3k4vgCEDvguwr%2B8FfY45xuAue8MrIkqGOMc5Gbc%2F9f46FBK3fnVkHYnSSeDZPHKE38O8h2GeiVvJzW0EtZ4ijAMNbh3MQGOqUBDB5HN49ykHvC0K%2F%2FIZTH3t4q%2F332k6iIcUm3EjyTvcjM4aAntPdFji7bLZxT%2BwklJMNTcB9FhStoaz%2FCofSi2TpmSiZncVqYd299agCKarB55nLsrurhYg%2BIeDtB7GSBRA8elNt4Qpnwcx7%2FGwxvjaDhNAXcoK0QuVEpWc3TWAqbge%2FzrFBiTfcUrDoDyRyvDck6QDvXfm8zsKlpir%2FAA%2FPjvZWD&X-Amz-Signature=24f4033e64b7a124449f8189f9d7a9e4006bc08a4382c8302f3fffbd1a037b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVXR6ED%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOV0II4Cp%2BbNpz0J3PX1NFQI1C8MqECMSPnQP2YBbLAIgVivJ%2BfXhNglm4agCLFpO4MonMfOVuUVWr%2BkgP3lOYSYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRKhe60cRpMCfrnBircA0fnaAlPT21q%2BR7HSWk8n59UzLlVkkytQRd%2BXyD3AAdXA%2B6LzE5FYLQD2IiS7WKYVdctCOlGTF5lBibQkRoJ6gGX%2FaVokG%2FH4yLrK2QTZfHGg2PytUy4AjbJxdhqWnkBfqRirQjtZ0wg4Zt6nUZYHP48K9P6bdCfwo4en29dvQNsLbshP8jKV%2FsM6aaK2D7qCjevcWKdMHRNIpJpa4zft75vyG2NieKhLCbk7QEOfXYSY28wOU%2FPqiXqJnCod%2BoJJWwg2X739vzNeSPtoR3GsERvCzn0LjMYZQDbOdg0Ntrwo2Ou4cNPxUkfvmGDD7aGztAhqc%2FQ8uxNJxvkyRfhBD86th5Fk8lfI9pjdOlvM99U8y4vZQcirlq3WKT59Hxe7Z5lrshmd2L%2BHk5T4cy8RZOZDkvjpna%2BsbtnVPSCPJAta7fVC2%2Fq%2BZ7mLUoNO%2BJYM5f9MMsC6FO%2Fv84YU%2FFO3nZA5PjhzvZJmluvLibw6vOGbkv5VLRAubPYXDo%2F4FN3B9R4oIXIU2wgPTIrLw%2FIwvlqG3ZLzarCU%2FMvIV3k4vgCEDvguwr%2B8FfY45xuAue8MrIkqGOMc5Gbc%2F9f46FBK3fnVkHYnSSeDZPHKE38O8h2GeiVvJzW0EtZ4ijAMNbh3MQGOqUBDB5HN49ykHvC0K%2F%2FIZTH3t4q%2F332k6iIcUm3EjyTvcjM4aAntPdFji7bLZxT%2BwklJMNTcB9FhStoaz%2FCofSi2TpmSiZncVqYd299agCKarB55nLsrurhYg%2BIeDtB7GSBRA8elNt4Qpnwcx7%2FGwxvjaDhNAXcoK0QuVEpWc3TWAqbge%2FzrFBiTfcUrDoDyRyvDck6QDvXfm8zsKlpir%2FAA%2FPjvZWD&X-Amz-Signature=38a2d3279ef6176bfde5ae139f8f112dd7504b8d6f5d3aec0fd16a0cd3db75de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVXR6ED%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOV0II4Cp%2BbNpz0J3PX1NFQI1C8MqECMSPnQP2YBbLAIgVivJ%2BfXhNglm4agCLFpO4MonMfOVuUVWr%2BkgP3lOYSYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRKhe60cRpMCfrnBircA0fnaAlPT21q%2BR7HSWk8n59UzLlVkkytQRd%2BXyD3AAdXA%2B6LzE5FYLQD2IiS7WKYVdctCOlGTF5lBibQkRoJ6gGX%2FaVokG%2FH4yLrK2QTZfHGg2PytUy4AjbJxdhqWnkBfqRirQjtZ0wg4Zt6nUZYHP48K9P6bdCfwo4en29dvQNsLbshP8jKV%2FsM6aaK2D7qCjevcWKdMHRNIpJpa4zft75vyG2NieKhLCbk7QEOfXYSY28wOU%2FPqiXqJnCod%2BoJJWwg2X739vzNeSPtoR3GsERvCzn0LjMYZQDbOdg0Ntrwo2Ou4cNPxUkfvmGDD7aGztAhqc%2FQ8uxNJxvkyRfhBD86th5Fk8lfI9pjdOlvM99U8y4vZQcirlq3WKT59Hxe7Z5lrshmd2L%2BHk5T4cy8RZOZDkvjpna%2BsbtnVPSCPJAta7fVC2%2Fq%2BZ7mLUoNO%2BJYM5f9MMsC6FO%2Fv84YU%2FFO3nZA5PjhzvZJmluvLibw6vOGbkv5VLRAubPYXDo%2F4FN3B9R4oIXIU2wgPTIrLw%2FIwvlqG3ZLzarCU%2FMvIV3k4vgCEDvguwr%2B8FfY45xuAue8MrIkqGOMc5Gbc%2F9f46FBK3fnVkHYnSSeDZPHKE38O8h2GeiVvJzW0EtZ4ijAMNbh3MQGOqUBDB5HN49ykHvC0K%2F%2FIZTH3t4q%2F332k6iIcUm3EjyTvcjM4aAntPdFji7bLZxT%2BwklJMNTcB9FhStoaz%2FCofSi2TpmSiZncVqYd299agCKarB55nLsrurhYg%2BIeDtB7GSBRA8elNt4Qpnwcx7%2FGwxvjaDhNAXcoK0QuVEpWc3TWAqbge%2FzrFBiTfcUrDoDyRyvDck6QDvXfm8zsKlpir%2FAA%2FPjvZWD&X-Amz-Signature=cd4f1a36db9c284ea4b2090c272a240bc383b92483770f383f146cd3c8a87ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A7BNQHK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY3KUKVExrHX67hnN%2B9hhOdKMkaI4%2Bsp6VMZX4RjC8VAIgEoyLfRq2y%2FvBes6iVb5Mk%2BtxAyOKy76NdxUEU7Yh2m4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD82%2FBJgxK0NWTJYpCrcA0aGurOz6jusrUhhRY26MUfQTnXe0m2%2F5FPtlICvJXQCXN7QkF%2FvtZSwB6Mu7JMhmuSuLniC9Sjq5VG79TFyo82Y7lEg78C9CZaB%2Bv1xVvVVhQx88%2FEzkYftOUY8KHd6kLzKkmA%2BRLC5Xw%2Bx70twYxDKzbiz3KuK%2Bfk6laJX7O96DCzEx%2BEQCR%2BB%2FUr7wxXLh4OqtaxGQlOriooRoQ4qgq9ovJTEz5OJmZYcZ2tff846JcXF41bbtoodcR9htaUV%2BIPSPGPJiZ4E2TMiyZmM6crztwLhEyutyQOpjEybl1USVRwCUqk3ISOljl%2FdwijjYPyWUOwdZmj2pINKOBusRySlETaScM52N0d%2FjD400BM5Q9WjII%2Fhxv1ZnOUSy1X7VGXUYKPRTKnSgwE8H9fikz7jD29wkrhTugLj6IVUmMQnKxH9tawzcRse7Al0FTY18gCWCQdy2SCLZycRlP3dZnLzWYSTdO6sWE2fPgRQZ9nMZfF3AU5AaRJKrKSp9E49P1Gz416x4H9m5mND9%2BS8BCeb32oTEMA1wUN9PmalatnKFxtOJrxUzJq3Xi5%2BMSRjgkQ%2BojtZ2qlvxxsNQZSmirydI9IgchqkPGiOM0AjG1hPk%2Bxc%2FcIR6%2BAVr2ADMMHp3MQGOqUBTYIZSw2XKHdebkSHga9kvvkmozWLHk9HcZT8DFvkjBaM1vaRUJhVQ0H771CXM23uE%2FNLwFjfRNK28Cdh%2Br0Kn6R04vv1sM%2Frx5cGhnmOB%2FFV7zjYtqRG3GuLZ4VYzppPczQVa0in7jJZfLK0WsM6FLa%2F5LyCyuHvdZBJFoMcc3nqx4AF2u0TWFbLdyZND7s9YlWZ3Wu9DZ%2Fmw7gmCkkoa5Rv0EEt&X-Amz-Signature=6a0fecccc7d886d6947a579837202dffb2d8867cb940f1cbfbcaa647589d50f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYRYO27%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzEDHgkE%2BQHItVNZNshbB72CxOjXPNXa%2FQyGoC%2B6l%2BqAiAYxGeb4oVCUnZ8eBvo%2Fy7v3MoKssPzOWyhWxEygyyORiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyKJSc9LeX7pqJg2sKtwDDFje9qcG7ZhqeAbN60%2F94pQen4M6XisuPP8fGA2ayLczChSZRFZv2l953HaqZy6ijv1hs%2BVK48wHLrgvSNr4WQ8DvYLOi%2F23cZ8M5d5FTHUr3QHLoRSW6gt1gg6xLlTTuyNZm%2Furv9%2BHUeTVlEeJF%2BIjBMkGe6KzL0%2FhNf%2B7Vp8adsxEjHKnVRpJyLrqafTzdomq0KTdcXZ74PDyiINkXWN9SQ2baCO%2FWwsbg1VZY6kFeS9ktv7pliJh1SzuPLVvKz1kqNBYt9WgLKXnInZ7BxEE2JC3RwrF55S1%2FLVG3RZWCwtM7y9pJmfe27W%2Bv4LMT15uD5R49cdw3W9ZoQtAuX%2BOWjhvwok2CQOrqkkTfd4tyHxG4RUv7ywBZXpMXNtvN3CcZGHKf3on5q6bqkEU%2Fif%2Ftt1MB3kCOUBKXdNWWbjtSg65nL7OtMLlkbh82p5mVgoIbSsxyyE3msYXFhwl1HHOx8rbFsD4w95Q9nzGxWtPhXxSu0IEQAo7Yr5BWJfmh7uASRL0vkGa7bZxjCQL7JKi%2B25j4uQVAa3XxAw%2BkXBkAkytoBnvaNlVAklp6OHMHWC3%2FOXDOlyG1WaGl0UHnRbQU%2FXpPnjJdQHNjmtxhIwAHPLvZNuDgzXlKt8wluPcxAY6pgGbN2ZDr8JPwe4vHCE8Bqd95Co2Q8zRg%2FQhLgSjnZucSHhtnO%2B51RNwr4iXJLOmQlmcudpF3BKgFmSO0y4lr7n51fUPNvsWLpq8xjy8p8r1p9xiuSXchyLZKb4wx9HxHwG47H4U8h%2Fnk%2BVXtqcoZn3jCgs5SxvdzchGL83CGIkL66ItxTIvq%2FyqA0T3K2nZfUrnN%2BxfozueIBpQQTKCR4D84Ac8sdBS&X-Amz-Signature=ce1e83491ef468a9c0c4dc71645772b5cf280cbba5136d57bdfb0231d1c793d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYRYO27%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzEDHgkE%2BQHItVNZNshbB72CxOjXPNXa%2FQyGoC%2B6l%2BqAiAYxGeb4oVCUnZ8eBvo%2Fy7v3MoKssPzOWyhWxEygyyORiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyKJSc9LeX7pqJg2sKtwDDFje9qcG7ZhqeAbN60%2F94pQen4M6XisuPP8fGA2ayLczChSZRFZv2l953HaqZy6ijv1hs%2BVK48wHLrgvSNr4WQ8DvYLOi%2F23cZ8M5d5FTHUr3QHLoRSW6gt1gg6xLlTTuyNZm%2Furv9%2BHUeTVlEeJF%2BIjBMkGe6KzL0%2FhNf%2B7Vp8adsxEjHKnVRpJyLrqafTzdomq0KTdcXZ74PDyiINkXWN9SQ2baCO%2FWwsbg1VZY6kFeS9ktv7pliJh1SzuPLVvKz1kqNBYt9WgLKXnInZ7BxEE2JC3RwrF55S1%2FLVG3RZWCwtM7y9pJmfe27W%2Bv4LMT15uD5R49cdw3W9ZoQtAuX%2BOWjhvwok2CQOrqkkTfd4tyHxG4RUv7ywBZXpMXNtvN3CcZGHKf3on5q6bqkEU%2Fif%2Ftt1MB3kCOUBKXdNWWbjtSg65nL7OtMLlkbh82p5mVgoIbSsxyyE3msYXFhwl1HHOx8rbFsD4w95Q9nzGxWtPhXxSu0IEQAo7Yr5BWJfmh7uASRL0vkGa7bZxjCQL7JKi%2B25j4uQVAa3XxAw%2BkXBkAkytoBnvaNlVAklp6OHMHWC3%2FOXDOlyG1WaGl0UHnRbQU%2FXpPnjJdQHNjmtxhIwAHPLvZNuDgzXlKt8wluPcxAY6pgGbN2ZDr8JPwe4vHCE8Bqd95Co2Q8zRg%2FQhLgSjnZucSHhtnO%2B51RNwr4iXJLOmQlmcudpF3BKgFmSO0y4lr7n51fUPNvsWLpq8xjy8p8r1p9xiuSXchyLZKb4wx9HxHwG47H4U8h%2Fnk%2BVXtqcoZn3jCgs5SxvdzchGL83CGIkL66ItxTIvq%2FyqA0T3K2nZfUrnN%2BxfozueIBpQQTKCR4D84Ac8sdBS&X-Amz-Signature=47b5081bbef737f50dbf54fe998f617091ef0a1a13a168c53e10b416fe0ab705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYRYO27%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzEDHgkE%2BQHItVNZNshbB72CxOjXPNXa%2FQyGoC%2B6l%2BqAiAYxGeb4oVCUnZ8eBvo%2Fy7v3MoKssPzOWyhWxEygyyORiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyKJSc9LeX7pqJg2sKtwDDFje9qcG7ZhqeAbN60%2F94pQen4M6XisuPP8fGA2ayLczChSZRFZv2l953HaqZy6ijv1hs%2BVK48wHLrgvSNr4WQ8DvYLOi%2F23cZ8M5d5FTHUr3QHLoRSW6gt1gg6xLlTTuyNZm%2Furv9%2BHUeTVlEeJF%2BIjBMkGe6KzL0%2FhNf%2B7Vp8adsxEjHKnVRpJyLrqafTzdomq0KTdcXZ74PDyiINkXWN9SQ2baCO%2FWwsbg1VZY6kFeS9ktv7pliJh1SzuPLVvKz1kqNBYt9WgLKXnInZ7BxEE2JC3RwrF55S1%2FLVG3RZWCwtM7y9pJmfe27W%2Bv4LMT15uD5R49cdw3W9ZoQtAuX%2BOWjhvwok2CQOrqkkTfd4tyHxG4RUv7ywBZXpMXNtvN3CcZGHKf3on5q6bqkEU%2Fif%2Ftt1MB3kCOUBKXdNWWbjtSg65nL7OtMLlkbh82p5mVgoIbSsxyyE3msYXFhwl1HHOx8rbFsD4w95Q9nzGxWtPhXxSu0IEQAo7Yr5BWJfmh7uASRL0vkGa7bZxjCQL7JKi%2B25j4uQVAa3XxAw%2BkXBkAkytoBnvaNlVAklp6OHMHWC3%2FOXDOlyG1WaGl0UHnRbQU%2FXpPnjJdQHNjmtxhIwAHPLvZNuDgzXlKt8wluPcxAY6pgGbN2ZDr8JPwe4vHCE8Bqd95Co2Q8zRg%2FQhLgSjnZucSHhtnO%2B51RNwr4iXJLOmQlmcudpF3BKgFmSO0y4lr7n51fUPNvsWLpq8xjy8p8r1p9xiuSXchyLZKb4wx9HxHwG47H4U8h%2Fnk%2BVXtqcoZn3jCgs5SxvdzchGL83CGIkL66ItxTIvq%2FyqA0T3K2nZfUrnN%2BxfozueIBpQQTKCR4D84Ac8sdBS&X-Amz-Signature=14dbe655434b4fd2beac4bd9c16e75fc6e2012e68fda6f3a37692b88eeee0376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYRYO27%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzEDHgkE%2BQHItVNZNshbB72CxOjXPNXa%2FQyGoC%2B6l%2BqAiAYxGeb4oVCUnZ8eBvo%2Fy7v3MoKssPzOWyhWxEygyyORiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyKJSc9LeX7pqJg2sKtwDDFje9qcG7ZhqeAbN60%2F94pQen4M6XisuPP8fGA2ayLczChSZRFZv2l953HaqZy6ijv1hs%2BVK48wHLrgvSNr4WQ8DvYLOi%2F23cZ8M5d5FTHUr3QHLoRSW6gt1gg6xLlTTuyNZm%2Furv9%2BHUeTVlEeJF%2BIjBMkGe6KzL0%2FhNf%2B7Vp8adsxEjHKnVRpJyLrqafTzdomq0KTdcXZ74PDyiINkXWN9SQ2baCO%2FWwsbg1VZY6kFeS9ktv7pliJh1SzuPLVvKz1kqNBYt9WgLKXnInZ7BxEE2JC3RwrF55S1%2FLVG3RZWCwtM7y9pJmfe27W%2Bv4LMT15uD5R49cdw3W9ZoQtAuX%2BOWjhvwok2CQOrqkkTfd4tyHxG4RUv7ywBZXpMXNtvN3CcZGHKf3on5q6bqkEU%2Fif%2Ftt1MB3kCOUBKXdNWWbjtSg65nL7OtMLlkbh82p5mVgoIbSsxyyE3msYXFhwl1HHOx8rbFsD4w95Q9nzGxWtPhXxSu0IEQAo7Yr5BWJfmh7uASRL0vkGa7bZxjCQL7JKi%2B25j4uQVAa3XxAw%2BkXBkAkytoBnvaNlVAklp6OHMHWC3%2FOXDOlyG1WaGl0UHnRbQU%2FXpPnjJdQHNjmtxhIwAHPLvZNuDgzXlKt8wluPcxAY6pgGbN2ZDr8JPwe4vHCE8Bqd95Co2Q8zRg%2FQhLgSjnZucSHhtnO%2B51RNwr4iXJLOmQlmcudpF3BKgFmSO0y4lr7n51fUPNvsWLpq8xjy8p8r1p9xiuSXchyLZKb4wx9HxHwG47H4U8h%2Fnk%2BVXtqcoZn3jCgs5SxvdzchGL83CGIkL66ItxTIvq%2FyqA0T3K2nZfUrnN%2BxfozueIBpQQTKCR4D84Ac8sdBS&X-Amz-Signature=aae9806c6d0ac750bc7669e5c4ea4feab752afba3fff90d24cdc8444dcbf152b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYRYO27%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzEDHgkE%2BQHItVNZNshbB72CxOjXPNXa%2FQyGoC%2B6l%2BqAiAYxGeb4oVCUnZ8eBvo%2Fy7v3MoKssPzOWyhWxEygyyORiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyKJSc9LeX7pqJg2sKtwDDFje9qcG7ZhqeAbN60%2F94pQen4M6XisuPP8fGA2ayLczChSZRFZv2l953HaqZy6ijv1hs%2BVK48wHLrgvSNr4WQ8DvYLOi%2F23cZ8M5d5FTHUr3QHLoRSW6gt1gg6xLlTTuyNZm%2Furv9%2BHUeTVlEeJF%2BIjBMkGe6KzL0%2FhNf%2B7Vp8adsxEjHKnVRpJyLrqafTzdomq0KTdcXZ74PDyiINkXWN9SQ2baCO%2FWwsbg1VZY6kFeS9ktv7pliJh1SzuPLVvKz1kqNBYt9WgLKXnInZ7BxEE2JC3RwrF55S1%2FLVG3RZWCwtM7y9pJmfe27W%2Bv4LMT15uD5R49cdw3W9ZoQtAuX%2BOWjhvwok2CQOrqkkTfd4tyHxG4RUv7ywBZXpMXNtvN3CcZGHKf3on5q6bqkEU%2Fif%2Ftt1MB3kCOUBKXdNWWbjtSg65nL7OtMLlkbh82p5mVgoIbSsxyyE3msYXFhwl1HHOx8rbFsD4w95Q9nzGxWtPhXxSu0IEQAo7Yr5BWJfmh7uASRL0vkGa7bZxjCQL7JKi%2B25j4uQVAa3XxAw%2BkXBkAkytoBnvaNlVAklp6OHMHWC3%2FOXDOlyG1WaGl0UHnRbQU%2FXpPnjJdQHNjmtxhIwAHPLvZNuDgzXlKt8wluPcxAY6pgGbN2ZDr8JPwe4vHCE8Bqd95Co2Q8zRg%2FQhLgSjnZucSHhtnO%2B51RNwr4iXJLOmQlmcudpF3BKgFmSO0y4lr7n51fUPNvsWLpq8xjy8p8r1p9xiuSXchyLZKb4wx9HxHwG47H4U8h%2Fnk%2BVXtqcoZn3jCgs5SxvdzchGL83CGIkL66ItxTIvq%2FyqA0T3K2nZfUrnN%2BxfozueIBpQQTKCR4D84Ac8sdBS&X-Amz-Signature=8d72554bcb2703ee3c9ed535d76eda4107505a373614051f03ef496f9c2802a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYRYO27%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzEDHgkE%2BQHItVNZNshbB72CxOjXPNXa%2FQyGoC%2B6l%2BqAiAYxGeb4oVCUnZ8eBvo%2Fy7v3MoKssPzOWyhWxEygyyORiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyKJSc9LeX7pqJg2sKtwDDFje9qcG7ZhqeAbN60%2F94pQen4M6XisuPP8fGA2ayLczChSZRFZv2l953HaqZy6ijv1hs%2BVK48wHLrgvSNr4WQ8DvYLOi%2F23cZ8M5d5FTHUr3QHLoRSW6gt1gg6xLlTTuyNZm%2Furv9%2BHUeTVlEeJF%2BIjBMkGe6KzL0%2FhNf%2B7Vp8adsxEjHKnVRpJyLrqafTzdomq0KTdcXZ74PDyiINkXWN9SQ2baCO%2FWwsbg1VZY6kFeS9ktv7pliJh1SzuPLVvKz1kqNBYt9WgLKXnInZ7BxEE2JC3RwrF55S1%2FLVG3RZWCwtM7y9pJmfe27W%2Bv4LMT15uD5R49cdw3W9ZoQtAuX%2BOWjhvwok2CQOrqkkTfd4tyHxG4RUv7ywBZXpMXNtvN3CcZGHKf3on5q6bqkEU%2Fif%2Ftt1MB3kCOUBKXdNWWbjtSg65nL7OtMLlkbh82p5mVgoIbSsxyyE3msYXFhwl1HHOx8rbFsD4w95Q9nzGxWtPhXxSu0IEQAo7Yr5BWJfmh7uASRL0vkGa7bZxjCQL7JKi%2B25j4uQVAa3XxAw%2BkXBkAkytoBnvaNlVAklp6OHMHWC3%2FOXDOlyG1WaGl0UHnRbQU%2FXpPnjJdQHNjmtxhIwAHPLvZNuDgzXlKt8wluPcxAY6pgGbN2ZDr8JPwe4vHCE8Bqd95Co2Q8zRg%2FQhLgSjnZucSHhtnO%2B51RNwr4iXJLOmQlmcudpF3BKgFmSO0y4lr7n51fUPNvsWLpq8xjy8p8r1p9xiuSXchyLZKb4wx9HxHwG47H4U8h%2Fnk%2BVXtqcoZn3jCgs5SxvdzchGL83CGIkL66ItxTIvq%2FyqA0T3K2nZfUrnN%2BxfozueIBpQQTKCR4D84Ac8sdBS&X-Amz-Signature=1b10d70e1a336636cc766d2d8601700b35839c8757460404a14d9ff00e1b821e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYRYO27%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzEDHgkE%2BQHItVNZNshbB72CxOjXPNXa%2FQyGoC%2B6l%2BqAiAYxGeb4oVCUnZ8eBvo%2Fy7v3MoKssPzOWyhWxEygyyORiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyKJSc9LeX7pqJg2sKtwDDFje9qcG7ZhqeAbN60%2F94pQen4M6XisuPP8fGA2ayLczChSZRFZv2l953HaqZy6ijv1hs%2BVK48wHLrgvSNr4WQ8DvYLOi%2F23cZ8M5d5FTHUr3QHLoRSW6gt1gg6xLlTTuyNZm%2Furv9%2BHUeTVlEeJF%2BIjBMkGe6KzL0%2FhNf%2B7Vp8adsxEjHKnVRpJyLrqafTzdomq0KTdcXZ74PDyiINkXWN9SQ2baCO%2FWwsbg1VZY6kFeS9ktv7pliJh1SzuPLVvKz1kqNBYt9WgLKXnInZ7BxEE2JC3RwrF55S1%2FLVG3RZWCwtM7y9pJmfe27W%2Bv4LMT15uD5R49cdw3W9ZoQtAuX%2BOWjhvwok2CQOrqkkTfd4tyHxG4RUv7ywBZXpMXNtvN3CcZGHKf3on5q6bqkEU%2Fif%2Ftt1MB3kCOUBKXdNWWbjtSg65nL7OtMLlkbh82p5mVgoIbSsxyyE3msYXFhwl1HHOx8rbFsD4w95Q9nzGxWtPhXxSu0IEQAo7Yr5BWJfmh7uASRL0vkGa7bZxjCQL7JKi%2B25j4uQVAa3XxAw%2BkXBkAkytoBnvaNlVAklp6OHMHWC3%2FOXDOlyG1WaGl0UHnRbQU%2FXpPnjJdQHNjmtxhIwAHPLvZNuDgzXlKt8wluPcxAY6pgGbN2ZDr8JPwe4vHCE8Bqd95Co2Q8zRg%2FQhLgSjnZucSHhtnO%2B51RNwr4iXJLOmQlmcudpF3BKgFmSO0y4lr7n51fUPNvsWLpq8xjy8p8r1p9xiuSXchyLZKb4wx9HxHwG47H4U8h%2Fnk%2BVXtqcoZn3jCgs5SxvdzchGL83CGIkL66ItxTIvq%2FyqA0T3K2nZfUrnN%2BxfozueIBpQQTKCR4D84Ac8sdBS&X-Amz-Signature=fe1bdfcaf5442c4eb36bcad250c6ce65ecd795fa5cd0ab007f2ea4fbecef4724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYRYO27%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzEDHgkE%2BQHItVNZNshbB72CxOjXPNXa%2FQyGoC%2B6l%2BqAiAYxGeb4oVCUnZ8eBvo%2Fy7v3MoKssPzOWyhWxEygyyORiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyKJSc9LeX7pqJg2sKtwDDFje9qcG7ZhqeAbN60%2F94pQen4M6XisuPP8fGA2ayLczChSZRFZv2l953HaqZy6ijv1hs%2BVK48wHLrgvSNr4WQ8DvYLOi%2F23cZ8M5d5FTHUr3QHLoRSW6gt1gg6xLlTTuyNZm%2Furv9%2BHUeTVlEeJF%2BIjBMkGe6KzL0%2FhNf%2B7Vp8adsxEjHKnVRpJyLrqafTzdomq0KTdcXZ74PDyiINkXWN9SQ2baCO%2FWwsbg1VZY6kFeS9ktv7pliJh1SzuPLVvKz1kqNBYt9WgLKXnInZ7BxEE2JC3RwrF55S1%2FLVG3RZWCwtM7y9pJmfe27W%2Bv4LMT15uD5R49cdw3W9ZoQtAuX%2BOWjhvwok2CQOrqkkTfd4tyHxG4RUv7ywBZXpMXNtvN3CcZGHKf3on5q6bqkEU%2Fif%2Ftt1MB3kCOUBKXdNWWbjtSg65nL7OtMLlkbh82p5mVgoIbSsxyyE3msYXFhwl1HHOx8rbFsD4w95Q9nzGxWtPhXxSu0IEQAo7Yr5BWJfmh7uASRL0vkGa7bZxjCQL7JKi%2B25j4uQVAa3XxAw%2BkXBkAkytoBnvaNlVAklp6OHMHWC3%2FOXDOlyG1WaGl0UHnRbQU%2FXpPnjJdQHNjmtxhIwAHPLvZNuDgzXlKt8wluPcxAY6pgGbN2ZDr8JPwe4vHCE8Bqd95Co2Q8zRg%2FQhLgSjnZucSHhtnO%2B51RNwr4iXJLOmQlmcudpF3BKgFmSO0y4lr7n51fUPNvsWLpq8xjy8p8r1p9xiuSXchyLZKb4wx9HxHwG47H4U8h%2Fnk%2BVXtqcoZn3jCgs5SxvdzchGL83CGIkL66ItxTIvq%2FyqA0T3K2nZfUrnN%2BxfozueIBpQQTKCR4D84Ac8sdBS&X-Amz-Signature=cb9d3d51190a96fac266fb05f266b9b325b48b89fc21f79945ccd21c937d7ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYRYO27%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzEDHgkE%2BQHItVNZNshbB72CxOjXPNXa%2FQyGoC%2B6l%2BqAiAYxGeb4oVCUnZ8eBvo%2Fy7v3MoKssPzOWyhWxEygyyORiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyKJSc9LeX7pqJg2sKtwDDFje9qcG7ZhqeAbN60%2F94pQen4M6XisuPP8fGA2ayLczChSZRFZv2l953HaqZy6ijv1hs%2BVK48wHLrgvSNr4WQ8DvYLOi%2F23cZ8M5d5FTHUr3QHLoRSW6gt1gg6xLlTTuyNZm%2Furv9%2BHUeTVlEeJF%2BIjBMkGe6KzL0%2FhNf%2B7Vp8adsxEjHKnVRpJyLrqafTzdomq0KTdcXZ74PDyiINkXWN9SQ2baCO%2FWwsbg1VZY6kFeS9ktv7pliJh1SzuPLVvKz1kqNBYt9WgLKXnInZ7BxEE2JC3RwrF55S1%2FLVG3RZWCwtM7y9pJmfe27W%2Bv4LMT15uD5R49cdw3W9ZoQtAuX%2BOWjhvwok2CQOrqkkTfd4tyHxG4RUv7ywBZXpMXNtvN3CcZGHKf3on5q6bqkEU%2Fif%2Ftt1MB3kCOUBKXdNWWbjtSg65nL7OtMLlkbh82p5mVgoIbSsxyyE3msYXFhwl1HHOx8rbFsD4w95Q9nzGxWtPhXxSu0IEQAo7Yr5BWJfmh7uASRL0vkGa7bZxjCQL7JKi%2B25j4uQVAa3XxAw%2BkXBkAkytoBnvaNlVAklp6OHMHWC3%2FOXDOlyG1WaGl0UHnRbQU%2FXpPnjJdQHNjmtxhIwAHPLvZNuDgzXlKt8wluPcxAY6pgGbN2ZDr8JPwe4vHCE8Bqd95Co2Q8zRg%2FQhLgSjnZucSHhtnO%2B51RNwr4iXJLOmQlmcudpF3BKgFmSO0y4lr7n51fUPNvsWLpq8xjy8p8r1p9xiuSXchyLZKb4wx9HxHwG47H4U8h%2Fnk%2BVXtqcoZn3jCgs5SxvdzchGL83CGIkL66ItxTIvq%2FyqA0T3K2nZfUrnN%2BxfozueIBpQQTKCR4D84Ac8sdBS&X-Amz-Signature=8e8457fa031222915c0673da23ab89e97f8f58717a806fc824c0bff6fc46b4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
