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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIKT2SF%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIENq8Dv3ZPzO2hq2sQ4%2FNr3B4WmWSfPcXWsWUiXqozT3AiEA05iTO%2FL%2BEzsY4XdK08x%2BTX9bmChl7uLvGeSadSSEwcAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtlDc%2BFMF5V0rUNqCrcA0L2KxyPNaqmnn1gPk6RHYBLsLiw04Fk7rroNwHStnE422HAoaJ8UZUVYAPWzFBDsGQpgPNy2AhSFTQ7qv8cLVxHfuWE3eCpY4iLya4Su17mNJRFmjT2BzUe%2B0tfCGCDTiefl%2BLLvI6fTe1mNIhCsyKu9jgHkP7b2%2BahS9klWtJKqPwG3efITLrsuRLIuwbo64hYom%2FHSRAi%2F6100RfBLE4aj6tLZNsFSOZD4%2FuDXNbl1BqKVi0sKWjkv3m3FNZ8I55dDsYKdCUOzOyfYHB6QYXbXi9t5yzV2fMP7bL5FXvIQxyBRGygTvgcUajkZA9ToMif14fLFEajBCgXNgLC0X3GT56IVAGY%2BYovDf1KM1Dof4RqWRlDXv7rVtY3Zw%2FXv6AFd5gUkO10LN8DrFS74co8KDBZMCNu9HFMcqMPOvjroA5XzpdXPLJeTMaUnUi8KqTCsQPWFpHtashXexWeCmaBQwRT%2F1sH7kH499QxBIbSWnqpZcDrtOgoA%2BJYw0rhIxnDAlqJ%2FOT9MAD5iYvIPEweJYrTk0DT3aKWUTcErfdFqt3u9msdjpieA1V5aQkpuzjyD84MzB2XtF6YGS51UAv8TgE%2BHR3bvfDve8wcFVtbg56zkTlMl5NwplaRMKbSrckGOqUBbkoQfNR%2BcXarmOWZ1Jimg2O%2FR1odxouRh8lcsqK0sIX382tgQ0q3EAQPKJ0tYZn5OXmTgTX4AvH7sWb%2BbzvzGIjlsDDQ8JdYwO%2FuxAXshGzr2t3nCyDnvN7dm6pz6slEfqAtVMoluQSoqNAGiDerCXkq9qJr1rFm87OSAEgG6VWYOpLO%2FOKA9ktycStgfwjjhmu71VuMVZKlf5koWOdUuhQQBA0s&X-Amz-Signature=2ee21697b2a54f659ce908fe12258bd7d28045160ac76202fba48bdb18cde91a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
  <summary>{{< markdownify >}}Why not ros2_control?{{< /markdownify >}}</summary>
  
This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.

If you are curious about `ros2_control` Articulate Robotics has a very good guide on it:

[ros2_control guide](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

</details>



{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIKT2SF%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIENq8Dv3ZPzO2hq2sQ4%2FNr3B4WmWSfPcXWsWUiXqozT3AiEA05iTO%2FL%2BEzsY4XdK08x%2BTX9bmChl7uLvGeSadSSEwcAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtlDc%2BFMF5V0rUNqCrcA0L2KxyPNaqmnn1gPk6RHYBLsLiw04Fk7rroNwHStnE422HAoaJ8UZUVYAPWzFBDsGQpgPNy2AhSFTQ7qv8cLVxHfuWE3eCpY4iLya4Su17mNJRFmjT2BzUe%2B0tfCGCDTiefl%2BLLvI6fTe1mNIhCsyKu9jgHkP7b2%2BahS9klWtJKqPwG3efITLrsuRLIuwbo64hYom%2FHSRAi%2F6100RfBLE4aj6tLZNsFSOZD4%2FuDXNbl1BqKVi0sKWjkv3m3FNZ8I55dDsYKdCUOzOyfYHB6QYXbXi9t5yzV2fMP7bL5FXvIQxyBRGygTvgcUajkZA9ToMif14fLFEajBCgXNgLC0X3GT56IVAGY%2BYovDf1KM1Dof4RqWRlDXv7rVtY3Zw%2FXv6AFd5gUkO10LN8DrFS74co8KDBZMCNu9HFMcqMPOvjroA5XzpdXPLJeTMaUnUi8KqTCsQPWFpHtashXexWeCmaBQwRT%2F1sH7kH499QxBIbSWnqpZcDrtOgoA%2BJYw0rhIxnDAlqJ%2FOT9MAD5iYvIPEweJYrTk0DT3aKWUTcErfdFqt3u9msdjpieA1V5aQkpuzjyD84MzB2XtF6YGS51UAv8TgE%2BHR3bvfDve8wcFVtbg56zkTlMl5NwplaRMKbSrckGOqUBbkoQfNR%2BcXarmOWZ1Jimg2O%2FR1odxouRh8lcsqK0sIX382tgQ0q3EAQPKJ0tYZn5OXmTgTX4AvH7sWb%2BbzvzGIjlsDDQ8JdYwO%2FuxAXshGzr2t3nCyDnvN7dm6pz6slEfqAtVMoluQSoqNAGiDerCXkq9qJr1rFm87OSAEgG6VWYOpLO%2FOKA9ktycStgfwjjhmu71VuMVZKlf5koWOdUuhQQBA0s&X-Amz-Signature=9f7498846ccd9832452238952318026a378f7a0d965efcc15eda9aaf7c98b0a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIKT2SF%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIENq8Dv3ZPzO2hq2sQ4%2FNr3B4WmWSfPcXWsWUiXqozT3AiEA05iTO%2FL%2BEzsY4XdK08x%2BTX9bmChl7uLvGeSadSSEwcAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtlDc%2BFMF5V0rUNqCrcA0L2KxyPNaqmnn1gPk6RHYBLsLiw04Fk7rroNwHStnE422HAoaJ8UZUVYAPWzFBDsGQpgPNy2AhSFTQ7qv8cLVxHfuWE3eCpY4iLya4Su17mNJRFmjT2BzUe%2B0tfCGCDTiefl%2BLLvI6fTe1mNIhCsyKu9jgHkP7b2%2BahS9klWtJKqPwG3efITLrsuRLIuwbo64hYom%2FHSRAi%2F6100RfBLE4aj6tLZNsFSOZD4%2FuDXNbl1BqKVi0sKWjkv3m3FNZ8I55dDsYKdCUOzOyfYHB6QYXbXi9t5yzV2fMP7bL5FXvIQxyBRGygTvgcUajkZA9ToMif14fLFEajBCgXNgLC0X3GT56IVAGY%2BYovDf1KM1Dof4RqWRlDXv7rVtY3Zw%2FXv6AFd5gUkO10LN8DrFS74co8KDBZMCNu9HFMcqMPOvjroA5XzpdXPLJeTMaUnUi8KqTCsQPWFpHtashXexWeCmaBQwRT%2F1sH7kH499QxBIbSWnqpZcDrtOgoA%2BJYw0rhIxnDAlqJ%2FOT9MAD5iYvIPEweJYrTk0DT3aKWUTcErfdFqt3u9msdjpieA1V5aQkpuzjyD84MzB2XtF6YGS51UAv8TgE%2BHR3bvfDve8wcFVtbg56zkTlMl5NwplaRMKbSrckGOqUBbkoQfNR%2BcXarmOWZ1Jimg2O%2FR1odxouRh8lcsqK0sIX382tgQ0q3EAQPKJ0tYZn5OXmTgTX4AvH7sWb%2BbzvzGIjlsDDQ8JdYwO%2FuxAXshGzr2t3nCyDnvN7dm6pz6slEfqAtVMoluQSoqNAGiDerCXkq9qJr1rFm87OSAEgG6VWYOpLO%2FOKA9ktycStgfwjjhmu71VuMVZKlf5koWOdUuhQQBA0s&X-Amz-Signature=c5a6aeab531fbe184eb38b121da9d860f13f4b5eadd106b9c7bf641e78a824b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIKT2SF%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIENq8Dv3ZPzO2hq2sQ4%2FNr3B4WmWSfPcXWsWUiXqozT3AiEA05iTO%2FL%2BEzsY4XdK08x%2BTX9bmChl7uLvGeSadSSEwcAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtlDc%2BFMF5V0rUNqCrcA0L2KxyPNaqmnn1gPk6RHYBLsLiw04Fk7rroNwHStnE422HAoaJ8UZUVYAPWzFBDsGQpgPNy2AhSFTQ7qv8cLVxHfuWE3eCpY4iLya4Su17mNJRFmjT2BzUe%2B0tfCGCDTiefl%2BLLvI6fTe1mNIhCsyKu9jgHkP7b2%2BahS9klWtJKqPwG3efITLrsuRLIuwbo64hYom%2FHSRAi%2F6100RfBLE4aj6tLZNsFSOZD4%2FuDXNbl1BqKVi0sKWjkv3m3FNZ8I55dDsYKdCUOzOyfYHB6QYXbXi9t5yzV2fMP7bL5FXvIQxyBRGygTvgcUajkZA9ToMif14fLFEajBCgXNgLC0X3GT56IVAGY%2BYovDf1KM1Dof4RqWRlDXv7rVtY3Zw%2FXv6AFd5gUkO10LN8DrFS74co8KDBZMCNu9HFMcqMPOvjroA5XzpdXPLJeTMaUnUi8KqTCsQPWFpHtashXexWeCmaBQwRT%2F1sH7kH499QxBIbSWnqpZcDrtOgoA%2BJYw0rhIxnDAlqJ%2FOT9MAD5iYvIPEweJYrTk0DT3aKWUTcErfdFqt3u9msdjpieA1V5aQkpuzjyD84MzB2XtF6YGS51UAv8TgE%2BHR3bvfDve8wcFVtbg56zkTlMl5NwplaRMKbSrckGOqUBbkoQfNR%2BcXarmOWZ1Jimg2O%2FR1odxouRh8lcsqK0sIX382tgQ0q3EAQPKJ0tYZn5OXmTgTX4AvH7sWb%2BbzvzGIjlsDDQ8JdYwO%2FuxAXshGzr2t3nCyDnvN7dm6pz6slEfqAtVMoluQSoqNAGiDerCXkq9qJr1rFm87OSAEgG6VWYOpLO%2FOKA9ktycStgfwjjhmu71VuMVZKlf5koWOdUuhQQBA0s&X-Amz-Signature=9aa02aa0f39b2b1d823434b7482013f96edd2bfb384fc518cb9bc970dd23498f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python "4-4","5-9","14-14","15-15"
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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIKT2SF%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIENq8Dv3ZPzO2hq2sQ4%2FNr3B4WmWSfPcXWsWUiXqozT3AiEA05iTO%2FL%2BEzsY4XdK08x%2BTX9bmChl7uLvGeSadSSEwcAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtlDc%2BFMF5V0rUNqCrcA0L2KxyPNaqmnn1gPk6RHYBLsLiw04Fk7rroNwHStnE422HAoaJ8UZUVYAPWzFBDsGQpgPNy2AhSFTQ7qv8cLVxHfuWE3eCpY4iLya4Su17mNJRFmjT2BzUe%2B0tfCGCDTiefl%2BLLvI6fTe1mNIhCsyKu9jgHkP7b2%2BahS9klWtJKqPwG3efITLrsuRLIuwbo64hYom%2FHSRAi%2F6100RfBLE4aj6tLZNsFSOZD4%2FuDXNbl1BqKVi0sKWjkv3m3FNZ8I55dDsYKdCUOzOyfYHB6QYXbXi9t5yzV2fMP7bL5FXvIQxyBRGygTvgcUajkZA9ToMif14fLFEajBCgXNgLC0X3GT56IVAGY%2BYovDf1KM1Dof4RqWRlDXv7rVtY3Zw%2FXv6AFd5gUkO10LN8DrFS74co8KDBZMCNu9HFMcqMPOvjroA5XzpdXPLJeTMaUnUi8KqTCsQPWFpHtashXexWeCmaBQwRT%2F1sH7kH499QxBIbSWnqpZcDrtOgoA%2BJYw0rhIxnDAlqJ%2FOT9MAD5iYvIPEweJYrTk0DT3aKWUTcErfdFqt3u9msdjpieA1V5aQkpuzjyD84MzB2XtF6YGS51UAv8TgE%2BHR3bvfDve8wcFVtbg56zkTlMl5NwplaRMKbSrckGOqUBbkoQfNR%2BcXarmOWZ1Jimg2O%2FR1odxouRh8lcsqK0sIX382tgQ0q3EAQPKJ0tYZn5OXmTgTX4AvH7sWb%2BbzvzGIjlsDDQ8JdYwO%2FuxAXshGzr2t3nCyDnvN7dm6pz6slEfqAtVMoluQSoqNAGiDerCXkq9qJr1rFm87OSAEgG6VWYOpLO%2FOKA9ktycStgfwjjhmu71VuMVZKlf5koWOdUuhQQBA0s&X-Amz-Signature=b2c2dd3127733c21113ed3f8e811f652e53930e5b9ae3a99b92762f7c2c17438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "1-17"

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
  <summary>{{< markdownify >}}**Final code:**{{< /markdownify >}}</summary>
  
```python "15-29"
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here

        
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


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

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
  <summary>{{< markdownify >}}What if I don’t have a robot{{< /markdownify >}}</summary>
  
We can fake the wheel values by doing this

```python "6-7","11-11","12-12","19-20"
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle
    
    # gets called every 0.05 seconds    
    def timer_callback(self):
        new_left_wheel_th = self.left_wheel_th+0.01 # faking wheel position
        new_right_wheel_th = self.right_wheel_th+0.02 # faking wheel position

        current_time = self.get_clock().now().to_msg()
        
        ...
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

This makes it so we just increment the wheel position every period

</details>



## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIKT2SF%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIENq8Dv3ZPzO2hq2sQ4%2FNr3B4WmWSfPcXWsWUiXqozT3AiEA05iTO%2FL%2BEzsY4XdK08x%2BTX9bmChl7uLvGeSadSSEwcAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtlDc%2BFMF5V0rUNqCrcA0L2KxyPNaqmnn1gPk6RHYBLsLiw04Fk7rroNwHStnE422HAoaJ8UZUVYAPWzFBDsGQpgPNy2AhSFTQ7qv8cLVxHfuWE3eCpY4iLya4Su17mNJRFmjT2BzUe%2B0tfCGCDTiefl%2BLLvI6fTe1mNIhCsyKu9jgHkP7b2%2BahS9klWtJKqPwG3efITLrsuRLIuwbo64hYom%2FHSRAi%2F6100RfBLE4aj6tLZNsFSOZD4%2FuDXNbl1BqKVi0sKWjkv3m3FNZ8I55dDsYKdCUOzOyfYHB6QYXbXi9t5yzV2fMP7bL5FXvIQxyBRGygTvgcUajkZA9ToMif14fLFEajBCgXNgLC0X3GT56IVAGY%2BYovDf1KM1Dof4RqWRlDXv7rVtY3Zw%2FXv6AFd5gUkO10LN8DrFS74co8KDBZMCNu9HFMcqMPOvjroA5XzpdXPLJeTMaUnUi8KqTCsQPWFpHtashXexWeCmaBQwRT%2F1sH7kH499QxBIbSWnqpZcDrtOgoA%2BJYw0rhIxnDAlqJ%2FOT9MAD5iYvIPEweJYrTk0DT3aKWUTcErfdFqt3u9msdjpieA1V5aQkpuzjyD84MzB2XtF6YGS51UAv8TgE%2BHR3bvfDve8wcFVtbg56zkTlMl5NwplaRMKbSrckGOqUBbkoQfNR%2BcXarmOWZ1Jimg2O%2FR1odxouRh8lcsqK0sIX382tgQ0q3EAQPKJ0tYZn5OXmTgTX4AvH7sWb%2BbzvzGIjlsDDQ8JdYwO%2FuxAXshGzr2t3nCyDnvN7dm6pz6slEfqAtVMoluQSoqNAGiDerCXkq9qJr1rFm87OSAEgG6VWYOpLO%2FOKA9ktycStgfwjjhmu71VuMVZKlf5koWOdUuhQQBA0s&X-Amz-Signature=3431be8f47de9526f67ebf1e7ef38b0e1033b2df2310f4457d5d1f7ee2e91b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIKT2SF%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIENq8Dv3ZPzO2hq2sQ4%2FNr3B4WmWSfPcXWsWUiXqozT3AiEA05iTO%2FL%2BEzsY4XdK08x%2BTX9bmChl7uLvGeSadSSEwcAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtlDc%2BFMF5V0rUNqCrcA0L2KxyPNaqmnn1gPk6RHYBLsLiw04Fk7rroNwHStnE422HAoaJ8UZUVYAPWzFBDsGQpgPNy2AhSFTQ7qv8cLVxHfuWE3eCpY4iLya4Su17mNJRFmjT2BzUe%2B0tfCGCDTiefl%2BLLvI6fTe1mNIhCsyKu9jgHkP7b2%2BahS9klWtJKqPwG3efITLrsuRLIuwbo64hYom%2FHSRAi%2F6100RfBLE4aj6tLZNsFSOZD4%2FuDXNbl1BqKVi0sKWjkv3m3FNZ8I55dDsYKdCUOzOyfYHB6QYXbXi9t5yzV2fMP7bL5FXvIQxyBRGygTvgcUajkZA9ToMif14fLFEajBCgXNgLC0X3GT56IVAGY%2BYovDf1KM1Dof4RqWRlDXv7rVtY3Zw%2FXv6AFd5gUkO10LN8DrFS74co8KDBZMCNu9HFMcqMPOvjroA5XzpdXPLJeTMaUnUi8KqTCsQPWFpHtashXexWeCmaBQwRT%2F1sH7kH499QxBIbSWnqpZcDrtOgoA%2BJYw0rhIxnDAlqJ%2FOT9MAD5iYvIPEweJYrTk0DT3aKWUTcErfdFqt3u9msdjpieA1V5aQkpuzjyD84MzB2XtF6YGS51UAv8TgE%2BHR3bvfDve8wcFVtbg56zkTlMl5NwplaRMKbSrckGOqUBbkoQfNR%2BcXarmOWZ1Jimg2O%2FR1odxouRh8lcsqK0sIX382tgQ0q3EAQPKJ0tYZn5OXmTgTX4AvH7sWb%2BbzvzGIjlsDDQ8JdYwO%2FuxAXshGzr2t3nCyDnvN7dm6pz6slEfqAtVMoluQSoqNAGiDerCXkq9qJr1rFm87OSAEgG6VWYOpLO%2FOKA9ktycStgfwjjhmu71VuMVZKlf5koWOdUuhQQBA0s&X-Amz-Signature=4007e93de3b16813a8be6197db408ad62f005fdd6dce6afe446b450bbebaabac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python "2-2"
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIKT2SF%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIENq8Dv3ZPzO2hq2sQ4%2FNr3B4WmWSfPcXWsWUiXqozT3AiEA05iTO%2FL%2BEzsY4XdK08x%2BTX9bmChl7uLvGeSadSSEwcAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtlDc%2BFMF5V0rUNqCrcA0L2KxyPNaqmnn1gPk6RHYBLsLiw04Fk7rroNwHStnE422HAoaJ8UZUVYAPWzFBDsGQpgPNy2AhSFTQ7qv8cLVxHfuWE3eCpY4iLya4Su17mNJRFmjT2BzUe%2B0tfCGCDTiefl%2BLLvI6fTe1mNIhCsyKu9jgHkP7b2%2BahS9klWtJKqPwG3efITLrsuRLIuwbo64hYom%2FHSRAi%2F6100RfBLE4aj6tLZNsFSOZD4%2FuDXNbl1BqKVi0sKWjkv3m3FNZ8I55dDsYKdCUOzOyfYHB6QYXbXi9t5yzV2fMP7bL5FXvIQxyBRGygTvgcUajkZA9ToMif14fLFEajBCgXNgLC0X3GT56IVAGY%2BYovDf1KM1Dof4RqWRlDXv7rVtY3Zw%2FXv6AFd5gUkO10LN8DrFS74co8KDBZMCNu9HFMcqMPOvjroA5XzpdXPLJeTMaUnUi8KqTCsQPWFpHtashXexWeCmaBQwRT%2F1sH7kH499QxBIbSWnqpZcDrtOgoA%2BJYw0rhIxnDAlqJ%2FOT9MAD5iYvIPEweJYrTk0DT3aKWUTcErfdFqt3u9msdjpieA1V5aQkpuzjyD84MzB2XtF6YGS51UAv8TgE%2BHR3bvfDve8wcFVtbg56zkTlMl5NwplaRMKbSrckGOqUBbkoQfNR%2BcXarmOWZ1Jimg2O%2FR1odxouRh8lcsqK0sIX382tgQ0q3EAQPKJ0tYZn5OXmTgTX4AvH7sWb%2BbzvzGIjlsDDQ8JdYwO%2FuxAXshGzr2t3nCyDnvN7dm6pz6slEfqAtVMoluQSoqNAGiDerCXkq9qJr1rFm87OSAEgG6VWYOpLO%2FOKA9ktycStgfwjjhmu71VuMVZKlf5koWOdUuhQQBA0s&X-Amz-Signature=d625c4054226fc3e640b34438242ea1c34a4a94ec37ee03d45052beab3cc061f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python "1-2","2-3","4-7","10-11"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIKT2SF%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIENq8Dv3ZPzO2hq2sQ4%2FNr3B4WmWSfPcXWsWUiXqozT3AiEA05iTO%2FL%2BEzsY4XdK08x%2BTX9bmChl7uLvGeSadSSEwcAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtlDc%2BFMF5V0rUNqCrcA0L2KxyPNaqmnn1gPk6RHYBLsLiw04Fk7rroNwHStnE422HAoaJ8UZUVYAPWzFBDsGQpgPNy2AhSFTQ7qv8cLVxHfuWE3eCpY4iLya4Su17mNJRFmjT2BzUe%2B0tfCGCDTiefl%2BLLvI6fTe1mNIhCsyKu9jgHkP7b2%2BahS9klWtJKqPwG3efITLrsuRLIuwbo64hYom%2FHSRAi%2F6100RfBLE4aj6tLZNsFSOZD4%2FuDXNbl1BqKVi0sKWjkv3m3FNZ8I55dDsYKdCUOzOyfYHB6QYXbXi9t5yzV2fMP7bL5FXvIQxyBRGygTvgcUajkZA9ToMif14fLFEajBCgXNgLC0X3GT56IVAGY%2BYovDf1KM1Dof4RqWRlDXv7rVtY3Zw%2FXv6AFd5gUkO10LN8DrFS74co8KDBZMCNu9HFMcqMPOvjroA5XzpdXPLJeTMaUnUi8KqTCsQPWFpHtashXexWeCmaBQwRT%2F1sH7kH499QxBIbSWnqpZcDrtOgoA%2BJYw0rhIxnDAlqJ%2FOT9MAD5iYvIPEweJYrTk0DT3aKWUTcErfdFqt3u9msdjpieA1V5aQkpuzjyD84MzB2XtF6YGS51UAv8TgE%2BHR3bvfDve8wcFVtbg56zkTlMl5NwplaRMKbSrckGOqUBbkoQfNR%2BcXarmOWZ1Jimg2O%2FR1odxouRh8lcsqK0sIX382tgQ0q3EAQPKJ0tYZn5OXmTgTX4AvH7sWb%2BbzvzGIjlsDDQ8JdYwO%2FuxAXshGzr2t3nCyDnvN7dm6pz6slEfqAtVMoluQSoqNAGiDerCXkq9qJr1rFm87OSAEgG6VWYOpLO%2FOKA9ktycStgfwjjhmu71VuMVZKlf5koWOdUuhQQBA0s&X-Amz-Signature=458126fb4f275dc343f6674948f457657e3fb3a632753282fa03350d363e0fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIKT2SF%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIENq8Dv3ZPzO2hq2sQ4%2FNr3B4WmWSfPcXWsWUiXqozT3AiEA05iTO%2FL%2BEzsY4XdK08x%2BTX9bmChl7uLvGeSadSSEwcAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtlDc%2BFMF5V0rUNqCrcA0L2KxyPNaqmnn1gPk6RHYBLsLiw04Fk7rroNwHStnE422HAoaJ8UZUVYAPWzFBDsGQpgPNy2AhSFTQ7qv8cLVxHfuWE3eCpY4iLya4Su17mNJRFmjT2BzUe%2B0tfCGCDTiefl%2BLLvI6fTe1mNIhCsyKu9jgHkP7b2%2BahS9klWtJKqPwG3efITLrsuRLIuwbo64hYom%2FHSRAi%2F6100RfBLE4aj6tLZNsFSOZD4%2FuDXNbl1BqKVi0sKWjkv3m3FNZ8I55dDsYKdCUOzOyfYHB6QYXbXi9t5yzV2fMP7bL5FXvIQxyBRGygTvgcUajkZA9ToMif14fLFEajBCgXNgLC0X3GT56IVAGY%2BYovDf1KM1Dof4RqWRlDXv7rVtY3Zw%2FXv6AFd5gUkO10LN8DrFS74co8KDBZMCNu9HFMcqMPOvjroA5XzpdXPLJeTMaUnUi8KqTCsQPWFpHtashXexWeCmaBQwRT%2F1sH7kH499QxBIbSWnqpZcDrtOgoA%2BJYw0rhIxnDAlqJ%2FOT9MAD5iYvIPEweJYrTk0DT3aKWUTcErfdFqt3u9msdjpieA1V5aQkpuzjyD84MzB2XtF6YGS51UAv8TgE%2BHR3bvfDve8wcFVtbg56zkTlMl5NwplaRMKbSrckGOqUBbkoQfNR%2BcXarmOWZ1Jimg2O%2FR1odxouRh8lcsqK0sIX382tgQ0q3EAQPKJ0tYZn5OXmTgTX4AvH7sWb%2BbzvzGIjlsDDQ8JdYwO%2FuxAXshGzr2t3nCyDnvN7dm6pz6slEfqAtVMoluQSoqNAGiDerCXkq9qJr1rFm87OSAEgG6VWYOpLO%2FOKA9ktycStgfwjjhmu71VuMVZKlf5koWOdUuhQQBA0s&X-Amz-Signature=e4728997ae44e5795b757c6b409770e3f16df09e1f73236c3d4627aa5eca640f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP3MSOA%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIFLPE%2BQ9rkNYNmLDdF6DokoOMf1cW%2B4CMKGn0qpdCkoBAiBLtB960p%2FEDsYqXgZnDzg0vJS4P3IIt1hUipo6YIbexiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjTu4iwBs0rsOXYIrKtwDh5YCwPeAHMBOzhPyo4Xg35d2WaKDAijUqr1%2FYkqPEk%2F89BLECuYeQn1Jmefnrh%2FQYSQvxAauadNomrX33I4K2OLpNYI3w3PQe6ZU7uKsLUUhXVUPvKzsUfeo0PoR4ropLKovJEvp5OCK%2FDeuWGpRh%2FaKoR85mFOa9IBj2fqkl7Zg9poDgCh2wCBCZnyHC5KiXT5p1CHdgS0bEQqWnmdV75uYxWk6e6Q3R8qv02%2BG3no7vo5GKEbzgYwvzeAfl55RsR3V%2BAaLUsEiiLYnTM8Ihkv9Rp1mxylJlyf%2FVRVjqqDMm9u6jUKJJTgTG9ov%2B9mkCKBa3kZCaQzP0H4lhVGCmC8mxktNdteMZt%2B7jaYHzrpeUb7Ghf%2B9biHqeDDY97HR33m9uyORhdFiIXOjiYYQH0%2FRIsynwOojCTclOT6YFDz0nCy25Np8UDeWEgcOW8ivA4swiApM%2B7UKwWj6W2mPun6WV8Guj1SOTrso96takdiqjvwI9ySwlyXuxlu33p9Q1HBiQ%2FefTmg3wfDysHbgSzA1r2STVY2MCBHQ%2B10icjn2EIwYEvg9DgB2JNfT%2B68a4xN94pyEBowoPvYSBo96oiFxaVZg%2Bcprk9arkjn47gLdplOoWvrT1tweOkcwutCtyQY6pgGqAgoZrvcFMhNPao%2BDRzC7enVB6SiP4%2FzY5VndwNLYZxYto6xY%2BG9JgIWSi86toW3FYup3Ah7ETRVCoSCgOAOgfg7PZPMSh7AQN%2FeAHc1EauP8etLFzvtRcvaD2y3WxrlHqmjKSmaV%2BZEs2XOgCL40rK%2BsSplwGTDZB4k2UhWdHeTCQQEiM79dDm4TPgOdtsDc6zVdHCR%2FHHJ4VPQSodl5ykyFjQAE&X-Amz-Signature=eeab38b8db5fcab3247aa459d71ab9e5e6a810fd8f323a478c6538f660e3e1db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO:

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

```python "10-11","12-17"
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

```python "9-20","20-23"
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

```python "14-14"
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

```python "6-18","18-19","19-20","20-33"
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLYMVBLX%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIA1DLMLgcIBv6hfyMAmvWq00Dn2S57EC1F05%2BpS3JH9zAiEA3Scz6QsBLrXVhF48fwJw3J%2FeVKLZbQTl8FSWt9kNlN0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVtZCmEaHcPwB%2FmICrcA9sxWFZI5g6rOByGpA3YP3RMuxN5VAKAfs8CscKV%2FLSUOELFJtQyapMBJtG6Dsv9IEsR5ZanM0X3rN2sUDdHOO%2Fwqm3yI6wbzd29YpvKJzAtyefgdn2DG2MGbeqk%2B71FngXucbcIykbCorGGyNjT7tMkd8NX0WYga3s9rblJzVX2yE3ox6ci3wf6n4N%2FB3jHYYfyGEqKWz4cr4PZGdOxdO1nurojm%2BcUdlCurblhWpyHiSAMy%2FaXQ5P5VDFX9oNnxYu%2FDtkyQmfYeRG3tcHgWY8hgTvXp7KuG1ktue3A3QIhriLYfY1FKkFKRldxQW7c8IfdFqXp2OjAeKzmtviNyr07llBKPJYxwaDWsB42M78HG%2FiGZ24xz1b8WOUqw3HRPbV8WTen5wYV%2BEpzYLjzJ5VHFgCGKZGS%2FUc1aKI6RyCunkiV1755JCK6zwhGTBRMhXLcwYZRq0696gztAYjhTJrLps003ypwT3LvxcN5%2BjFSDt2kMc3Wl6TKoDgWG459Iu69Vk8NUOcU5iF3Kr2LAqhjBRBg3uDFYbU8zu8pTGWbLr3XF49n3BGh191M%2FJrk9UkwwgCuF6ISIAU2N7bXWBII0lKXTM1IoutNLV%2BJeFlgM%2BKe%2FvkUAsHh2UaLMJrXrckGOqUBsT31qx%2BTu3xYe66r6Mwu12Tmd2A8x%2B5KZXcX%2BahOZXpqpKJ6NmnE%2FeXEbzL%2BMEMykVaeJac0U47MwQRt82eZz7RSarptxRe8leAkrZAqHZgcGp2e5lqV9yG9I6tk%2Fzm1qH8sii8PUAmryFmpjLwqrmExicflGFAeCZqXeQd6c8R63OHuhTT6PaXqgKohBqRXUaa2mzr52%2B%2F8MPpVsZiIH5GX2y%2Bp&X-Amz-Signature=1d4fb92d953a2ff32af73afe43f5dfb3fa91c69f503dfb9c6a7d721d38d2827e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLYMVBLX%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIA1DLMLgcIBv6hfyMAmvWq00Dn2S57EC1F05%2BpS3JH9zAiEA3Scz6QsBLrXVhF48fwJw3J%2FeVKLZbQTl8FSWt9kNlN0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVtZCmEaHcPwB%2FmICrcA9sxWFZI5g6rOByGpA3YP3RMuxN5VAKAfs8CscKV%2FLSUOELFJtQyapMBJtG6Dsv9IEsR5ZanM0X3rN2sUDdHOO%2Fwqm3yI6wbzd29YpvKJzAtyefgdn2DG2MGbeqk%2B71FngXucbcIykbCorGGyNjT7tMkd8NX0WYga3s9rblJzVX2yE3ox6ci3wf6n4N%2FB3jHYYfyGEqKWz4cr4PZGdOxdO1nurojm%2BcUdlCurblhWpyHiSAMy%2FaXQ5P5VDFX9oNnxYu%2FDtkyQmfYeRG3tcHgWY8hgTvXp7KuG1ktue3A3QIhriLYfY1FKkFKRldxQW7c8IfdFqXp2OjAeKzmtviNyr07llBKPJYxwaDWsB42M78HG%2FiGZ24xz1b8WOUqw3HRPbV8WTen5wYV%2BEpzYLjzJ5VHFgCGKZGS%2FUc1aKI6RyCunkiV1755JCK6zwhGTBRMhXLcwYZRq0696gztAYjhTJrLps003ypwT3LvxcN5%2BjFSDt2kMc3Wl6TKoDgWG459Iu69Vk8NUOcU5iF3Kr2LAqhjBRBg3uDFYbU8zu8pTGWbLr3XF49n3BGh191M%2FJrk9UkwwgCuF6ISIAU2N7bXWBII0lKXTM1IoutNLV%2BJeFlgM%2BKe%2FvkUAsHh2UaLMJrXrckGOqUBsT31qx%2BTu3xYe66r6Mwu12Tmd2A8x%2B5KZXcX%2BahOZXpqpKJ6NmnE%2FeXEbzL%2BMEMykVaeJac0U47MwQRt82eZz7RSarptxRe8leAkrZAqHZgcGp2e5lqV9yG9I6tk%2Fzm1qH8sii8PUAmryFmpjLwqrmExicflGFAeCZqXeQd6c8R63OHuhTT6PaXqgKohBqRXUaa2mzr52%2B%2F8MPpVsZiIH5GX2y%2Bp&X-Amz-Signature=f02c24ba1b8ddcce3a51f4f94a4b47692e0bbdf8e2b5e771aaefc763629473f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLYMVBLX%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIA1DLMLgcIBv6hfyMAmvWq00Dn2S57EC1F05%2BpS3JH9zAiEA3Scz6QsBLrXVhF48fwJw3J%2FeVKLZbQTl8FSWt9kNlN0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVtZCmEaHcPwB%2FmICrcA9sxWFZI5g6rOByGpA3YP3RMuxN5VAKAfs8CscKV%2FLSUOELFJtQyapMBJtG6Dsv9IEsR5ZanM0X3rN2sUDdHOO%2Fwqm3yI6wbzd29YpvKJzAtyefgdn2DG2MGbeqk%2B71FngXucbcIykbCorGGyNjT7tMkd8NX0WYga3s9rblJzVX2yE3ox6ci3wf6n4N%2FB3jHYYfyGEqKWz4cr4PZGdOxdO1nurojm%2BcUdlCurblhWpyHiSAMy%2FaXQ5P5VDFX9oNnxYu%2FDtkyQmfYeRG3tcHgWY8hgTvXp7KuG1ktue3A3QIhriLYfY1FKkFKRldxQW7c8IfdFqXp2OjAeKzmtviNyr07llBKPJYxwaDWsB42M78HG%2FiGZ24xz1b8WOUqw3HRPbV8WTen5wYV%2BEpzYLjzJ5VHFgCGKZGS%2FUc1aKI6RyCunkiV1755JCK6zwhGTBRMhXLcwYZRq0696gztAYjhTJrLps003ypwT3LvxcN5%2BjFSDt2kMc3Wl6TKoDgWG459Iu69Vk8NUOcU5iF3Kr2LAqhjBRBg3uDFYbU8zu8pTGWbLr3XF49n3BGh191M%2FJrk9UkwwgCuF6ISIAU2N7bXWBII0lKXTM1IoutNLV%2BJeFlgM%2BKe%2FvkUAsHh2UaLMJrXrckGOqUBsT31qx%2BTu3xYe66r6Mwu12Tmd2A8x%2B5KZXcX%2BahOZXpqpKJ6NmnE%2FeXEbzL%2BMEMykVaeJac0U47MwQRt82eZz7RSarptxRe8leAkrZAqHZgcGp2e5lqV9yG9I6tk%2Fzm1qH8sii8PUAmryFmpjLwqrmExicflGFAeCZqXeQd6c8R63OHuhTT6PaXqgKohBqRXUaa2mzr52%2B%2F8MPpVsZiIH5GX2y%2Bp&X-Amz-Signature=9e5d7f9c3b26c5ae5b2a16d2187dd4bd46d7564d5630738cda663ee2e8a8d14b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python "18-18","24-25"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLYMVBLX%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIA1DLMLgcIBv6hfyMAmvWq00Dn2S57EC1F05%2BpS3JH9zAiEA3Scz6QsBLrXVhF48fwJw3J%2FeVKLZbQTl8FSWt9kNlN0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVtZCmEaHcPwB%2FmICrcA9sxWFZI5g6rOByGpA3YP3RMuxN5VAKAfs8CscKV%2FLSUOELFJtQyapMBJtG6Dsv9IEsR5ZanM0X3rN2sUDdHOO%2Fwqm3yI6wbzd29YpvKJzAtyefgdn2DG2MGbeqk%2B71FngXucbcIykbCorGGyNjT7tMkd8NX0WYga3s9rblJzVX2yE3ox6ci3wf6n4N%2FB3jHYYfyGEqKWz4cr4PZGdOxdO1nurojm%2BcUdlCurblhWpyHiSAMy%2FaXQ5P5VDFX9oNnxYu%2FDtkyQmfYeRG3tcHgWY8hgTvXp7KuG1ktue3A3QIhriLYfY1FKkFKRldxQW7c8IfdFqXp2OjAeKzmtviNyr07llBKPJYxwaDWsB42M78HG%2FiGZ24xz1b8WOUqw3HRPbV8WTen5wYV%2BEpzYLjzJ5VHFgCGKZGS%2FUc1aKI6RyCunkiV1755JCK6zwhGTBRMhXLcwYZRq0696gztAYjhTJrLps003ypwT3LvxcN5%2BjFSDt2kMc3Wl6TKoDgWG459Iu69Vk8NUOcU5iF3Kr2LAqhjBRBg3uDFYbU8zu8pTGWbLr3XF49n3BGh191M%2FJrk9UkwwgCuF6ISIAU2N7bXWBII0lKXTM1IoutNLV%2BJeFlgM%2BKe%2FvkUAsHh2UaLMJrXrckGOqUBsT31qx%2BTu3xYe66r6Mwu12Tmd2A8x%2B5KZXcX%2BahOZXpqpKJ6NmnE%2FeXEbzL%2BMEMykVaeJac0U47MwQRt82eZz7RSarptxRe8leAkrZAqHZgcGp2e5lqV9yG9I6tk%2Fzm1qH8sii8PUAmryFmpjLwqrmExicflGFAeCZqXeQd6c8R63OHuhTT6PaXqgKohBqRXUaa2mzr52%2B%2F8MPpVsZiIH5GX2y%2Bp&X-Amz-Signature=1f7805129b79a7e480ae265baf1e5a616b15164caa5f375aad1e7aa3fb666662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

#### Params:

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLYMVBLX%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIA1DLMLgcIBv6hfyMAmvWq00Dn2S57EC1F05%2BpS3JH9zAiEA3Scz6QsBLrXVhF48fwJw3J%2FeVKLZbQTl8FSWt9kNlN0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVtZCmEaHcPwB%2FmICrcA9sxWFZI5g6rOByGpA3YP3RMuxN5VAKAfs8CscKV%2FLSUOELFJtQyapMBJtG6Dsv9IEsR5ZanM0X3rN2sUDdHOO%2Fwqm3yI6wbzd29YpvKJzAtyefgdn2DG2MGbeqk%2B71FngXucbcIykbCorGGyNjT7tMkd8NX0WYga3s9rblJzVX2yE3ox6ci3wf6n4N%2FB3jHYYfyGEqKWz4cr4PZGdOxdO1nurojm%2BcUdlCurblhWpyHiSAMy%2FaXQ5P5VDFX9oNnxYu%2FDtkyQmfYeRG3tcHgWY8hgTvXp7KuG1ktue3A3QIhriLYfY1FKkFKRldxQW7c8IfdFqXp2OjAeKzmtviNyr07llBKPJYxwaDWsB42M78HG%2FiGZ24xz1b8WOUqw3HRPbV8WTen5wYV%2BEpzYLjzJ5VHFgCGKZGS%2FUc1aKI6RyCunkiV1755JCK6zwhGTBRMhXLcwYZRq0696gztAYjhTJrLps003ypwT3LvxcN5%2BjFSDt2kMc3Wl6TKoDgWG459Iu69Vk8NUOcU5iF3Kr2LAqhjBRBg3uDFYbU8zu8pTGWbLr3XF49n3BGh191M%2FJrk9UkwwgCuF6ISIAU2N7bXWBII0lKXTM1IoutNLV%2BJeFlgM%2BKe%2FvkUAsHh2UaLMJrXrckGOqUBsT31qx%2BTu3xYe66r6Mwu12Tmd2A8x%2B5KZXcX%2BahOZXpqpKJ6NmnE%2FeXEbzL%2BMEMykVaeJac0U47MwQRt82eZz7RSarptxRe8leAkrZAqHZgcGp2e5lqV9yG9I6tk%2Fzm1qH8sii8PUAmryFmpjLwqrmExicflGFAeCZqXeQd6c8R63OHuhTT6PaXqgKohBqRXUaa2mzr52%2B%2F8MPpVsZiIH5GX2y%2Bp&X-Amz-Signature=faf6191fce7110555fd5d916451cf62d073b861e578fd9761e41b8f04cf4a9d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLYMVBLX%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIA1DLMLgcIBv6hfyMAmvWq00Dn2S57EC1F05%2BpS3JH9zAiEA3Scz6QsBLrXVhF48fwJw3J%2FeVKLZbQTl8FSWt9kNlN0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVtZCmEaHcPwB%2FmICrcA9sxWFZI5g6rOByGpA3YP3RMuxN5VAKAfs8CscKV%2FLSUOELFJtQyapMBJtG6Dsv9IEsR5ZanM0X3rN2sUDdHOO%2Fwqm3yI6wbzd29YpvKJzAtyefgdn2DG2MGbeqk%2B71FngXucbcIykbCorGGyNjT7tMkd8NX0WYga3s9rblJzVX2yE3ox6ci3wf6n4N%2FB3jHYYfyGEqKWz4cr4PZGdOxdO1nurojm%2BcUdlCurblhWpyHiSAMy%2FaXQ5P5VDFX9oNnxYu%2FDtkyQmfYeRG3tcHgWY8hgTvXp7KuG1ktue3A3QIhriLYfY1FKkFKRldxQW7c8IfdFqXp2OjAeKzmtviNyr07llBKPJYxwaDWsB42M78HG%2FiGZ24xz1b8WOUqw3HRPbV8WTen5wYV%2BEpzYLjzJ5VHFgCGKZGS%2FUc1aKI6RyCunkiV1755JCK6zwhGTBRMhXLcwYZRq0696gztAYjhTJrLps003ypwT3LvxcN5%2BjFSDt2kMc3Wl6TKoDgWG459Iu69Vk8NUOcU5iF3Kr2LAqhjBRBg3uDFYbU8zu8pTGWbLr3XF49n3BGh191M%2FJrk9UkwwgCuF6ISIAU2N7bXWBII0lKXTM1IoutNLV%2BJeFlgM%2BKe%2FvkUAsHh2UaLMJrXrckGOqUBsT31qx%2BTu3xYe66r6Mwu12Tmd2A8x%2B5KZXcX%2BahOZXpqpKJ6NmnE%2FeXEbzL%2BMEMykVaeJac0U47MwQRt82eZz7RSarptxRe8leAkrZAqHZgcGp2e5lqV9yG9I6tk%2Fzm1qH8sii8PUAmryFmpjLwqrmExicflGFAeCZqXeQd6c8R63OHuhTT6PaXqgKohBqRXUaa2mzr52%2B%2F8MPpVsZiIH5GX2y%2Bp&X-Amz-Signature=8eaabdaa6d1a964438d931df2b7f12fb1c4e1562cb3396d071833d6f30b5b0d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLYMVBLX%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIA1DLMLgcIBv6hfyMAmvWq00Dn2S57EC1F05%2BpS3JH9zAiEA3Scz6QsBLrXVhF48fwJw3J%2FeVKLZbQTl8FSWt9kNlN0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVtZCmEaHcPwB%2FmICrcA9sxWFZI5g6rOByGpA3YP3RMuxN5VAKAfs8CscKV%2FLSUOELFJtQyapMBJtG6Dsv9IEsR5ZanM0X3rN2sUDdHOO%2Fwqm3yI6wbzd29YpvKJzAtyefgdn2DG2MGbeqk%2B71FngXucbcIykbCorGGyNjT7tMkd8NX0WYga3s9rblJzVX2yE3ox6ci3wf6n4N%2FB3jHYYfyGEqKWz4cr4PZGdOxdO1nurojm%2BcUdlCurblhWpyHiSAMy%2FaXQ5P5VDFX9oNnxYu%2FDtkyQmfYeRG3tcHgWY8hgTvXp7KuG1ktue3A3QIhriLYfY1FKkFKRldxQW7c8IfdFqXp2OjAeKzmtviNyr07llBKPJYxwaDWsB42M78HG%2FiGZ24xz1b8WOUqw3HRPbV8WTen5wYV%2BEpzYLjzJ5VHFgCGKZGS%2FUc1aKI6RyCunkiV1755JCK6zwhGTBRMhXLcwYZRq0696gztAYjhTJrLps003ypwT3LvxcN5%2BjFSDt2kMc3Wl6TKoDgWG459Iu69Vk8NUOcU5iF3Kr2LAqhjBRBg3uDFYbU8zu8pTGWbLr3XF49n3BGh191M%2FJrk9UkwwgCuF6ISIAU2N7bXWBII0lKXTM1IoutNLV%2BJeFlgM%2BKe%2FvkUAsHh2UaLMJrXrckGOqUBsT31qx%2BTu3xYe66r6Mwu12Tmd2A8x%2B5KZXcX%2BahOZXpqpKJ6NmnE%2FeXEbzL%2BMEMykVaeJac0U47MwQRt82eZz7RSarptxRe8leAkrZAqHZgcGp2e5lqV9yG9I6tk%2Fzm1qH8sii8PUAmryFmpjLwqrmExicflGFAeCZqXeQd6c8R63OHuhTT6PaXqgKohBqRXUaa2mzr52%2B%2F8MPpVsZiIH5GX2y%2Bp&X-Amz-Signature=079b53cbd7551ac9a2724916ed2dfca583f77a96ab39882057c7927086bb4841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLYMVBLX%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIA1DLMLgcIBv6hfyMAmvWq00Dn2S57EC1F05%2BpS3JH9zAiEA3Scz6QsBLrXVhF48fwJw3J%2FeVKLZbQTl8FSWt9kNlN0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVtZCmEaHcPwB%2FmICrcA9sxWFZI5g6rOByGpA3YP3RMuxN5VAKAfs8CscKV%2FLSUOELFJtQyapMBJtG6Dsv9IEsR5ZanM0X3rN2sUDdHOO%2Fwqm3yI6wbzd29YpvKJzAtyefgdn2DG2MGbeqk%2B71FngXucbcIykbCorGGyNjT7tMkd8NX0WYga3s9rblJzVX2yE3ox6ci3wf6n4N%2FB3jHYYfyGEqKWz4cr4PZGdOxdO1nurojm%2BcUdlCurblhWpyHiSAMy%2FaXQ5P5VDFX9oNnxYu%2FDtkyQmfYeRG3tcHgWY8hgTvXp7KuG1ktue3A3QIhriLYfY1FKkFKRldxQW7c8IfdFqXp2OjAeKzmtviNyr07llBKPJYxwaDWsB42M78HG%2FiGZ24xz1b8WOUqw3HRPbV8WTen5wYV%2BEpzYLjzJ5VHFgCGKZGS%2FUc1aKI6RyCunkiV1755JCK6zwhGTBRMhXLcwYZRq0696gztAYjhTJrLps003ypwT3LvxcN5%2BjFSDt2kMc3Wl6TKoDgWG459Iu69Vk8NUOcU5iF3Kr2LAqhjBRBg3uDFYbU8zu8pTGWbLr3XF49n3BGh191M%2FJrk9UkwwgCuF6ISIAU2N7bXWBII0lKXTM1IoutNLV%2BJeFlgM%2BKe%2FvkUAsHh2UaLMJrXrckGOqUBsT31qx%2BTu3xYe66r6Mwu12Tmd2A8x%2B5KZXcX%2BahOZXpqpKJ6NmnE%2FeXEbzL%2BMEMykVaeJac0U47MwQRt82eZz7RSarptxRe8leAkrZAqHZgcGp2e5lqV9yG9I6tk%2Fzm1qH8sii8PUAmryFmpjLwqrmExicflGFAeCZqXeQd6c8R63OHuhTT6PaXqgKohBqRXUaa2mzr52%2B%2F8MPpVsZiIH5GX2y%2Bp&X-Amz-Signature=86f8856377e7aa76f35bbaf68386eb1b7bd27cfee7a313da53a9b9932463fcc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLYMVBLX%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIA1DLMLgcIBv6hfyMAmvWq00Dn2S57EC1F05%2BpS3JH9zAiEA3Scz6QsBLrXVhF48fwJw3J%2FeVKLZbQTl8FSWt9kNlN0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVtZCmEaHcPwB%2FmICrcA9sxWFZI5g6rOByGpA3YP3RMuxN5VAKAfs8CscKV%2FLSUOELFJtQyapMBJtG6Dsv9IEsR5ZanM0X3rN2sUDdHOO%2Fwqm3yI6wbzd29YpvKJzAtyefgdn2DG2MGbeqk%2B71FngXucbcIykbCorGGyNjT7tMkd8NX0WYga3s9rblJzVX2yE3ox6ci3wf6n4N%2FB3jHYYfyGEqKWz4cr4PZGdOxdO1nurojm%2BcUdlCurblhWpyHiSAMy%2FaXQ5P5VDFX9oNnxYu%2FDtkyQmfYeRG3tcHgWY8hgTvXp7KuG1ktue3A3QIhriLYfY1FKkFKRldxQW7c8IfdFqXp2OjAeKzmtviNyr07llBKPJYxwaDWsB42M78HG%2FiGZ24xz1b8WOUqw3HRPbV8WTen5wYV%2BEpzYLjzJ5VHFgCGKZGS%2FUc1aKI6RyCunkiV1755JCK6zwhGTBRMhXLcwYZRq0696gztAYjhTJrLps003ypwT3LvxcN5%2BjFSDt2kMc3Wl6TKoDgWG459Iu69Vk8NUOcU5iF3Kr2LAqhjBRBg3uDFYbU8zu8pTGWbLr3XF49n3BGh191M%2FJrk9UkwwgCuF6ISIAU2N7bXWBII0lKXTM1IoutNLV%2BJeFlgM%2BKe%2FvkUAsHh2UaLMJrXrckGOqUBsT31qx%2BTu3xYe66r6Mwu12Tmd2A8x%2B5KZXcX%2BahOZXpqpKJ6NmnE%2FeXEbzL%2BMEMykVaeJac0U47MwQRt82eZz7RSarptxRe8leAkrZAqHZgcGp2e5lqV9yG9I6tk%2Fzm1qH8sii8PUAmryFmpjLwqrmExicflGFAeCZqXeQd6c8R63OHuhTT6PaXqgKohBqRXUaa2mzr52%2B%2F8MPpVsZiIH5GX2y%2Bp&X-Amz-Signature=0c12e455c37f33cfcbc760bf7a21defe0802318560cd4484a6d20b4dcbf8851b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "10-10","16-27"
       
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
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin


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

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.05 seconds

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # broadcasts the odom tf frame

        # call listener_callback() when /cmd_vel topic recives a msg
        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 
    

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th = self.left_wheel_th+0.01 # reading motor position goes here
        new_right_wheel_th = self.right_wheel_th+0.02 # reading motor position goes here
        
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

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th) # converts theta to quaternions
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans) # publish transform

        # update left and right wheel positions
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th


    # gets called when /cmd_vel topic recives a msg
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # self.get_logger().info(f'{msg}')


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

</details>



For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
