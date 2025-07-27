---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T23:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T23:53:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25LJF5Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHnDZt4%2F4sKa0XvvbEQLr21qZ9Yh8GHGCdAut14KH8jRAiEAwDFy0pWq9BFQsE28%2B8I50nnap1sjofJnsMrQDGGeDdAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN6Z%2FqCQe60fp4%2B4myrcA4cSsbLbm1ZjoZaqjxCJ8JMfh8gFhpjFYE1QN3EknaxAoRyN8TSbizeBaHVUU9tLBU11wqgI4l9MzfIzAjjTXJBbitX6CXoEge7EWgS64gPsfkQO8xqncEs9OnMaLU4cU9G6iLeQBBwNTOIT5deZbZERSxv%2BzoGGSh3RjfPaVB9Te1xe2X0p%2FW5sHd6l7A1LfSH4VN4CWHJT%2FrUN0%2Fa2rSGoac24EyTI8c2nCfPaD0sHhuvFEvPiz7%2BdIYcduvvxSPuucQvorp0QT%2B0siX9BiTHq9LtQPe0YQ7IOfmneXbVPbKvWC4hEKhxs79c1TmqHl9IQnMuoS8DwxoowMtd24LsHUjqS%2B0NyGOAR29ygpxBTLPJati7BetxKt2NxftOQUdUeoeor4lfXgP8oWrOwJUMzrAjQUWS1y1HOWrGM8nqllDBglTOqPwEuc3lkmGelX%2FpeQr1iAIvWkVpe1%2BH%2B0X9JjM%2FefZGkSgTfQSHgy8Jpke4fJFLZXyWNuV2IoPTqs6UXYtiNZ2h6wCWh07I1JrgTfDTG5YvMVBniIMqpDKPDkyc0ybbsNXQhVrdBpz99xs0wv5UmBnkBiypjN%2BoTrQJV3x5ZembdF83NqaWau8w%2F%2BfBwWlSSmkbDKeVKMNa7lsQGOqUBhd%2BlUS3bhuuMALw6jpABHlHcSD7aiDI%2Fyx94oeVj73R5E34Flfzl42GG84n%2Fc924e6Oc5xt663ExjSCcWGwyO5IYAMzAF0NnUaSeSuW2b1JWB9rxg31%2BKXGdDTjHL%2FyRjleViIrEDdkWjmXcYuodR%2BH4TE7nRyXtVPJjrZcz5DHKdUOFXRRZ%2BX2Qj5m%2Fj%2BzTIlmYBcMibuKO2UVqQ7qLoh3N9Cc5&X-Amz-Signature=5cd159b3351b6dbff5081b55f2d6577e0580976978962107e1dede99a6fd2e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25LJF5Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHnDZt4%2F4sKa0XvvbEQLr21qZ9Yh8GHGCdAut14KH8jRAiEAwDFy0pWq9BFQsE28%2B8I50nnap1sjofJnsMrQDGGeDdAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN6Z%2FqCQe60fp4%2B4myrcA4cSsbLbm1ZjoZaqjxCJ8JMfh8gFhpjFYE1QN3EknaxAoRyN8TSbizeBaHVUU9tLBU11wqgI4l9MzfIzAjjTXJBbitX6CXoEge7EWgS64gPsfkQO8xqncEs9OnMaLU4cU9G6iLeQBBwNTOIT5deZbZERSxv%2BzoGGSh3RjfPaVB9Te1xe2X0p%2FW5sHd6l7A1LfSH4VN4CWHJT%2FrUN0%2Fa2rSGoac24EyTI8c2nCfPaD0sHhuvFEvPiz7%2BdIYcduvvxSPuucQvorp0QT%2B0siX9BiTHq9LtQPe0YQ7IOfmneXbVPbKvWC4hEKhxs79c1TmqHl9IQnMuoS8DwxoowMtd24LsHUjqS%2B0NyGOAR29ygpxBTLPJati7BetxKt2NxftOQUdUeoeor4lfXgP8oWrOwJUMzrAjQUWS1y1HOWrGM8nqllDBglTOqPwEuc3lkmGelX%2FpeQr1iAIvWkVpe1%2BH%2B0X9JjM%2FefZGkSgTfQSHgy8Jpke4fJFLZXyWNuV2IoPTqs6UXYtiNZ2h6wCWh07I1JrgTfDTG5YvMVBniIMqpDKPDkyc0ybbsNXQhVrdBpz99xs0wv5UmBnkBiypjN%2BoTrQJV3x5ZembdF83NqaWau8w%2F%2BfBwWlSSmkbDKeVKMNa7lsQGOqUBhd%2BlUS3bhuuMALw6jpABHlHcSD7aiDI%2Fyx94oeVj73R5E34Flfzl42GG84n%2Fc924e6Oc5xt663ExjSCcWGwyO5IYAMzAF0NnUaSeSuW2b1JWB9rxg31%2BKXGdDTjHL%2FyRjleViIrEDdkWjmXcYuodR%2BH4TE7nRyXtVPJjrZcz5DHKdUOFXRRZ%2BX2Qj5m%2Fj%2BzTIlmYBcMibuKO2UVqQ7qLoh3N9Cc5&X-Amz-Signature=2a6880cb1018e6daf23f2e0abc8ac22c96deb1d6fc8a1d30ad0e3d96f84dd7ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25LJF5Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHnDZt4%2F4sKa0XvvbEQLr21qZ9Yh8GHGCdAut14KH8jRAiEAwDFy0pWq9BFQsE28%2B8I50nnap1sjofJnsMrQDGGeDdAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN6Z%2FqCQe60fp4%2B4myrcA4cSsbLbm1ZjoZaqjxCJ8JMfh8gFhpjFYE1QN3EknaxAoRyN8TSbizeBaHVUU9tLBU11wqgI4l9MzfIzAjjTXJBbitX6CXoEge7EWgS64gPsfkQO8xqncEs9OnMaLU4cU9G6iLeQBBwNTOIT5deZbZERSxv%2BzoGGSh3RjfPaVB9Te1xe2X0p%2FW5sHd6l7A1LfSH4VN4CWHJT%2FrUN0%2Fa2rSGoac24EyTI8c2nCfPaD0sHhuvFEvPiz7%2BdIYcduvvxSPuucQvorp0QT%2B0siX9BiTHq9LtQPe0YQ7IOfmneXbVPbKvWC4hEKhxs79c1TmqHl9IQnMuoS8DwxoowMtd24LsHUjqS%2B0NyGOAR29ygpxBTLPJati7BetxKt2NxftOQUdUeoeor4lfXgP8oWrOwJUMzrAjQUWS1y1HOWrGM8nqllDBglTOqPwEuc3lkmGelX%2FpeQr1iAIvWkVpe1%2BH%2B0X9JjM%2FefZGkSgTfQSHgy8Jpke4fJFLZXyWNuV2IoPTqs6UXYtiNZ2h6wCWh07I1JrgTfDTG5YvMVBniIMqpDKPDkyc0ybbsNXQhVrdBpz99xs0wv5UmBnkBiypjN%2BoTrQJV3x5ZembdF83NqaWau8w%2F%2BfBwWlSSmkbDKeVKMNa7lsQGOqUBhd%2BlUS3bhuuMALw6jpABHlHcSD7aiDI%2Fyx94oeVj73R5E34Flfzl42GG84n%2Fc924e6Oc5xt663ExjSCcWGwyO5IYAMzAF0NnUaSeSuW2b1JWB9rxg31%2BKXGdDTjHL%2FyRjleViIrEDdkWjmXcYuodR%2BH4TE7nRyXtVPJjrZcz5DHKdUOFXRRZ%2BX2Qj5m%2Fj%2BzTIlmYBcMibuKO2UVqQ7qLoh3N9Cc5&X-Amz-Signature=11a3cc9ab8e9209a2cfaa1fd51c58b455d61544b56d11dfb12dedd5e7d80c5df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25LJF5Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHnDZt4%2F4sKa0XvvbEQLr21qZ9Yh8GHGCdAut14KH8jRAiEAwDFy0pWq9BFQsE28%2B8I50nnap1sjofJnsMrQDGGeDdAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN6Z%2FqCQe60fp4%2B4myrcA4cSsbLbm1ZjoZaqjxCJ8JMfh8gFhpjFYE1QN3EknaxAoRyN8TSbizeBaHVUU9tLBU11wqgI4l9MzfIzAjjTXJBbitX6CXoEge7EWgS64gPsfkQO8xqncEs9OnMaLU4cU9G6iLeQBBwNTOIT5deZbZERSxv%2BzoGGSh3RjfPaVB9Te1xe2X0p%2FW5sHd6l7A1LfSH4VN4CWHJT%2FrUN0%2Fa2rSGoac24EyTI8c2nCfPaD0sHhuvFEvPiz7%2BdIYcduvvxSPuucQvorp0QT%2B0siX9BiTHq9LtQPe0YQ7IOfmneXbVPbKvWC4hEKhxs79c1TmqHl9IQnMuoS8DwxoowMtd24LsHUjqS%2B0NyGOAR29ygpxBTLPJati7BetxKt2NxftOQUdUeoeor4lfXgP8oWrOwJUMzrAjQUWS1y1HOWrGM8nqllDBglTOqPwEuc3lkmGelX%2FpeQr1iAIvWkVpe1%2BH%2B0X9JjM%2FefZGkSgTfQSHgy8Jpke4fJFLZXyWNuV2IoPTqs6UXYtiNZ2h6wCWh07I1JrgTfDTG5YvMVBniIMqpDKPDkyc0ybbsNXQhVrdBpz99xs0wv5UmBnkBiypjN%2BoTrQJV3x5ZembdF83NqaWau8w%2F%2BfBwWlSSmkbDKeVKMNa7lsQGOqUBhd%2BlUS3bhuuMALw6jpABHlHcSD7aiDI%2Fyx94oeVj73R5E34Flfzl42GG84n%2Fc924e6Oc5xt663ExjSCcWGwyO5IYAMzAF0NnUaSeSuW2b1JWB9rxg31%2BKXGdDTjHL%2FyRjleViIrEDdkWjmXcYuodR%2BH4TE7nRyXtVPJjrZcz5DHKdUOFXRRZ%2BX2Qj5m%2Fj%2BzTIlmYBcMibuKO2UVqQ7qLoh3N9Cc5&X-Amz-Signature=78b0d0c2b64d2d41d49b1523532bd1afe36cda2afa3f2fb003539801644a76f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too

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
        self.timer = self.create_timer(0.5, self.timer_callback)
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25LJF5Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHnDZt4%2F4sKa0XvvbEQLr21qZ9Yh8GHGCdAut14KH8jRAiEAwDFy0pWq9BFQsE28%2B8I50nnap1sjofJnsMrQDGGeDdAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN6Z%2FqCQe60fp4%2B4myrcA4cSsbLbm1ZjoZaqjxCJ8JMfh8gFhpjFYE1QN3EknaxAoRyN8TSbizeBaHVUU9tLBU11wqgI4l9MzfIzAjjTXJBbitX6CXoEge7EWgS64gPsfkQO8xqncEs9OnMaLU4cU9G6iLeQBBwNTOIT5deZbZERSxv%2BzoGGSh3RjfPaVB9Te1xe2X0p%2FW5sHd6l7A1LfSH4VN4CWHJT%2FrUN0%2Fa2rSGoac24EyTI8c2nCfPaD0sHhuvFEvPiz7%2BdIYcduvvxSPuucQvorp0QT%2B0siX9BiTHq9LtQPe0YQ7IOfmneXbVPbKvWC4hEKhxs79c1TmqHl9IQnMuoS8DwxoowMtd24LsHUjqS%2B0NyGOAR29ygpxBTLPJati7BetxKt2NxftOQUdUeoeor4lfXgP8oWrOwJUMzrAjQUWS1y1HOWrGM8nqllDBglTOqPwEuc3lkmGelX%2FpeQr1iAIvWkVpe1%2BH%2B0X9JjM%2FefZGkSgTfQSHgy8Jpke4fJFLZXyWNuV2IoPTqs6UXYtiNZ2h6wCWh07I1JrgTfDTG5YvMVBniIMqpDKPDkyc0ybbsNXQhVrdBpz99xs0wv5UmBnkBiypjN%2BoTrQJV3x5ZembdF83NqaWau8w%2F%2BfBwWlSSmkbDKeVKMNa7lsQGOqUBhd%2BlUS3bhuuMALw6jpABHlHcSD7aiDI%2Fyx94oeVj73R5E34Flfzl42GG84n%2Fc924e6Oc5xt663ExjSCcWGwyO5IYAMzAF0NnUaSeSuW2b1JWB9rxg31%2BKXGdDTjHL%2FyRjleViIrEDdkWjmXcYuodR%2BH4TE7nRyXtVPJjrZcz5DHKdUOFXRRZ%2BX2Qj5m%2Fj%2BzTIlmYBcMibuKO2UVqQ7qLoh3N9Cc5&X-Amz-Signature=46579a2a2663b9a82930623efc469ade8891e111e79a20cd7186809ff29a3ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25LJF5Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHnDZt4%2F4sKa0XvvbEQLr21qZ9Yh8GHGCdAut14KH8jRAiEAwDFy0pWq9BFQsE28%2B8I50nnap1sjofJnsMrQDGGeDdAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN6Z%2FqCQe60fp4%2B4myrcA4cSsbLbm1ZjoZaqjxCJ8JMfh8gFhpjFYE1QN3EknaxAoRyN8TSbizeBaHVUU9tLBU11wqgI4l9MzfIzAjjTXJBbitX6CXoEge7EWgS64gPsfkQO8xqncEs9OnMaLU4cU9G6iLeQBBwNTOIT5deZbZERSxv%2BzoGGSh3RjfPaVB9Te1xe2X0p%2FW5sHd6l7A1LfSH4VN4CWHJT%2FrUN0%2Fa2rSGoac24EyTI8c2nCfPaD0sHhuvFEvPiz7%2BdIYcduvvxSPuucQvorp0QT%2B0siX9BiTHq9LtQPe0YQ7IOfmneXbVPbKvWC4hEKhxs79c1TmqHl9IQnMuoS8DwxoowMtd24LsHUjqS%2B0NyGOAR29ygpxBTLPJati7BetxKt2NxftOQUdUeoeor4lfXgP8oWrOwJUMzrAjQUWS1y1HOWrGM8nqllDBglTOqPwEuc3lkmGelX%2FpeQr1iAIvWkVpe1%2BH%2B0X9JjM%2FefZGkSgTfQSHgy8Jpke4fJFLZXyWNuV2IoPTqs6UXYtiNZ2h6wCWh07I1JrgTfDTG5YvMVBniIMqpDKPDkyc0ybbsNXQhVrdBpz99xs0wv5UmBnkBiypjN%2BoTrQJV3x5ZembdF83NqaWau8w%2F%2BfBwWlSSmkbDKeVKMNa7lsQGOqUBhd%2BlUS3bhuuMALw6jpABHlHcSD7aiDI%2Fyx94oeVj73R5E34Flfzl42GG84n%2Fc924e6Oc5xt663ExjSCcWGwyO5IYAMzAF0NnUaSeSuW2b1JWB9rxg31%2BKXGdDTjHL%2FyRjleViIrEDdkWjmXcYuodR%2BH4TE7nRyXtVPJjrZcz5DHKdUOFXRRZ%2BX2Qj5m%2Fj%2BzTIlmYBcMibuKO2UVqQ7qLoh3N9Cc5&X-Amz-Signature=5386ec13e17cc402b3e7645bd5ca41e2eba30dec1262c5becf3f42c9589812b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25LJF5Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHnDZt4%2F4sKa0XvvbEQLr21qZ9Yh8GHGCdAut14KH8jRAiEAwDFy0pWq9BFQsE28%2B8I50nnap1sjofJnsMrQDGGeDdAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN6Z%2FqCQe60fp4%2B4myrcA4cSsbLbm1ZjoZaqjxCJ8JMfh8gFhpjFYE1QN3EknaxAoRyN8TSbizeBaHVUU9tLBU11wqgI4l9MzfIzAjjTXJBbitX6CXoEge7EWgS64gPsfkQO8xqncEs9OnMaLU4cU9G6iLeQBBwNTOIT5deZbZERSxv%2BzoGGSh3RjfPaVB9Te1xe2X0p%2FW5sHd6l7A1LfSH4VN4CWHJT%2FrUN0%2Fa2rSGoac24EyTI8c2nCfPaD0sHhuvFEvPiz7%2BdIYcduvvxSPuucQvorp0QT%2B0siX9BiTHq9LtQPe0YQ7IOfmneXbVPbKvWC4hEKhxs79c1TmqHl9IQnMuoS8DwxoowMtd24LsHUjqS%2B0NyGOAR29ygpxBTLPJati7BetxKt2NxftOQUdUeoeor4lfXgP8oWrOwJUMzrAjQUWS1y1HOWrGM8nqllDBglTOqPwEuc3lkmGelX%2FpeQr1iAIvWkVpe1%2BH%2B0X9JjM%2FefZGkSgTfQSHgy8Jpke4fJFLZXyWNuV2IoPTqs6UXYtiNZ2h6wCWh07I1JrgTfDTG5YvMVBniIMqpDKPDkyc0ybbsNXQhVrdBpz99xs0wv5UmBnkBiypjN%2BoTrQJV3x5ZembdF83NqaWau8w%2F%2BfBwWlSSmkbDKeVKMNa7lsQGOqUBhd%2BlUS3bhuuMALw6jpABHlHcSD7aiDI%2Fyx94oeVj73R5E34Flfzl42GG84n%2Fc924e6Oc5xt663ExjSCcWGwyO5IYAMzAF0NnUaSeSuW2b1JWB9rxg31%2BKXGdDTjHL%2FyRjleViIrEDdkWjmXcYuodR%2BH4TE7nRyXtVPJjrZcz5DHKdUOFXRRZ%2BX2Qj5m%2Fj%2BzTIlmYBcMibuKO2UVqQ7qLoh3N9Cc5&X-Amz-Signature=88f6e7e847c2ae4e9246647c69a581a5f323944af8fcb663a9b606896bfeac9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25LJF5Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHnDZt4%2F4sKa0XvvbEQLr21qZ9Yh8GHGCdAut14KH8jRAiEAwDFy0pWq9BFQsE28%2B8I50nnap1sjofJnsMrQDGGeDdAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN6Z%2FqCQe60fp4%2B4myrcA4cSsbLbm1ZjoZaqjxCJ8JMfh8gFhpjFYE1QN3EknaxAoRyN8TSbizeBaHVUU9tLBU11wqgI4l9MzfIzAjjTXJBbitX6CXoEge7EWgS64gPsfkQO8xqncEs9OnMaLU4cU9G6iLeQBBwNTOIT5deZbZERSxv%2BzoGGSh3RjfPaVB9Te1xe2X0p%2FW5sHd6l7A1LfSH4VN4CWHJT%2FrUN0%2Fa2rSGoac24EyTI8c2nCfPaD0sHhuvFEvPiz7%2BdIYcduvvxSPuucQvorp0QT%2B0siX9BiTHq9LtQPe0YQ7IOfmneXbVPbKvWC4hEKhxs79c1TmqHl9IQnMuoS8DwxoowMtd24LsHUjqS%2B0NyGOAR29ygpxBTLPJati7BetxKt2NxftOQUdUeoeor4lfXgP8oWrOwJUMzrAjQUWS1y1HOWrGM8nqllDBglTOqPwEuc3lkmGelX%2FpeQr1iAIvWkVpe1%2BH%2B0X9JjM%2FefZGkSgTfQSHgy8Jpke4fJFLZXyWNuV2IoPTqs6UXYtiNZ2h6wCWh07I1JrgTfDTG5YvMVBniIMqpDKPDkyc0ybbsNXQhVrdBpz99xs0wv5UmBnkBiypjN%2BoTrQJV3x5ZembdF83NqaWau8w%2F%2BfBwWlSSmkbDKeVKMNa7lsQGOqUBhd%2BlUS3bhuuMALw6jpABHlHcSD7aiDI%2Fyx94oeVj73R5E34Flfzl42GG84n%2Fc924e6Oc5xt663ExjSCcWGwyO5IYAMzAF0NnUaSeSuW2b1JWB9rxg31%2BKXGdDTjHL%2FyRjleViIrEDdkWjmXcYuodR%2BH4TE7nRyXtVPJjrZcz5DHKdUOFXRRZ%2BX2Qj5m%2Fj%2BzTIlmYBcMibuKO2UVqQ7qLoh3N9Cc5&X-Amz-Signature=9fdf858d23fce3655f961ec6674f821544210d3a97bb2049e55fd22c5c9ea1ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25LJF5Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHnDZt4%2F4sKa0XvvbEQLr21qZ9Yh8GHGCdAut14KH8jRAiEAwDFy0pWq9BFQsE28%2B8I50nnap1sjofJnsMrQDGGeDdAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN6Z%2FqCQe60fp4%2B4myrcA4cSsbLbm1ZjoZaqjxCJ8JMfh8gFhpjFYE1QN3EknaxAoRyN8TSbizeBaHVUU9tLBU11wqgI4l9MzfIzAjjTXJBbitX6CXoEge7EWgS64gPsfkQO8xqncEs9OnMaLU4cU9G6iLeQBBwNTOIT5deZbZERSxv%2BzoGGSh3RjfPaVB9Te1xe2X0p%2FW5sHd6l7A1LfSH4VN4CWHJT%2FrUN0%2Fa2rSGoac24EyTI8c2nCfPaD0sHhuvFEvPiz7%2BdIYcduvvxSPuucQvorp0QT%2B0siX9BiTHq9LtQPe0YQ7IOfmneXbVPbKvWC4hEKhxs79c1TmqHl9IQnMuoS8DwxoowMtd24LsHUjqS%2B0NyGOAR29ygpxBTLPJati7BetxKt2NxftOQUdUeoeor4lfXgP8oWrOwJUMzrAjQUWS1y1HOWrGM8nqllDBglTOqPwEuc3lkmGelX%2FpeQr1iAIvWkVpe1%2BH%2B0X9JjM%2FefZGkSgTfQSHgy8Jpke4fJFLZXyWNuV2IoPTqs6UXYtiNZ2h6wCWh07I1JrgTfDTG5YvMVBniIMqpDKPDkyc0ybbsNXQhVrdBpz99xs0wv5UmBnkBiypjN%2BoTrQJV3x5ZembdF83NqaWau8w%2F%2BfBwWlSSmkbDKeVKMNa7lsQGOqUBhd%2BlUS3bhuuMALw6jpABHlHcSD7aiDI%2Fyx94oeVj73R5E34Flfzl42GG84n%2Fc924e6Oc5xt663ExjSCcWGwyO5IYAMzAF0NnUaSeSuW2b1JWB9rxg31%2BKXGdDTjHL%2FyRjleViIrEDdkWjmXcYuodR%2BH4TE7nRyXtVPJjrZcz5DHKdUOFXRRZ%2BX2Qj5m%2Fj%2BzTIlmYBcMibuKO2UVqQ7qLoh3N9Cc5&X-Amz-Signature=df282e063a3cb9d97d0e2d5941489498658386b95bda1d17087dc13e936e02de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7FPSDSG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDahroRfcwdnande7KK9eAyXGoqVgL3jCa3hXrzxQZRQwIhANZG8mwTtl26jKBRTcU7piqN7FWlmLO9AR5Y8vj9E2TDKv8DCG0QABoMNjM3NDIzMTgzODA1IgxtaDTpJJIRwCWPiBMq3AOsMZwmwkasUWTEm42o4HJu%2FU%2F%2BvF5pDYvMLoUyOTQO27uIbLth5nMAahrdFn42I%2FBYFhUhh7xPYD5Y4V5VunWNL1tNw6Bj6x21VhzTe1c9Fk4anFL9xq99vnmKjaJqsKldAfvaGXYLiDvOEm2KREa0yEpfJjW12XaP8UmEaOKG1dZgCzr4WrPAzQkSwJYErlmr8PrBHtMfVQXi62DehKwp90tbKnYRM3v%2FNf%2FuY9FFrEVWjDsEkgL6hgUblvKIWfJ8NZboYNUyNb6jrMlK3loZnWDhcDS3B0MUUweGTJJlBC6y5X2aJsA7jQon%2Bfp13EMQQxzKkHCw0M9pseZoHlO2rLt3Fi7A%2BrkTT%2Fc11bk8M%2BRenSOviYHmnMsa0Wcrg4IURRo5m8DnWNUtS%2FzL0677spcxJ%2F4YrP8CXFr1kCLBJpQ38AdjTJF4D6bBO%2B1MYNqUGdhGfTeptZjYr%2FqYkHhp7qz62E0TJmRUa8AJ55yxC37NsEnHFaZlSAErJHeopt1t8zk2UcwY6DF7g45hJJN%2FNyuWLGgTszSYinu7KeSI0y5dQ2r3B%2FGNBNxtY43wml3tjK5hndcJsLtmVPC8524UV9J5kfPWmCyjoVEI7QTURiK1U6u7O4a7AOojOjD%2BupbEBjqkAWcwExU33kRf%2FlA1FTU7keQjxDdvTFMX42hL4KUIG6YwAa0QZWCIjbQ%2BD8rIAqE4wJgROE1QU1coSWBz9e0b0K2ZQgCpqCq1eQzaa1ulXDWqcfBXzAm%2BttYXE7llxKTnWG8REQ0trwCU4DdWqmYlh9JllZA8jUksJ3joDnROr%2BaZc4IDseNSTGdK8MzsrOkVhA0rOY0tgUmqHE%2Bul7R5hapCb7ZR&X-Amz-Signature=72d14f59d036ee1ace99a561ad1c9988045e058206e48a1bf97bd5e737ff9ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function

This function just takes in:

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

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

## Running code

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

TODO: get screen cap

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25LJF5Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHnDZt4%2F4sKa0XvvbEQLr21qZ9Yh8GHGCdAut14KH8jRAiEAwDFy0pWq9BFQsE28%2B8I50nnap1sjofJnsMrQDGGeDdAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN6Z%2FqCQe60fp4%2B4myrcA4cSsbLbm1ZjoZaqjxCJ8JMfh8gFhpjFYE1QN3EknaxAoRyN8TSbizeBaHVUU9tLBU11wqgI4l9MzfIzAjjTXJBbitX6CXoEge7EWgS64gPsfkQO8xqncEs9OnMaLU4cU9G6iLeQBBwNTOIT5deZbZERSxv%2BzoGGSh3RjfPaVB9Te1xe2X0p%2FW5sHd6l7A1LfSH4VN4CWHJT%2FrUN0%2Fa2rSGoac24EyTI8c2nCfPaD0sHhuvFEvPiz7%2BdIYcduvvxSPuucQvorp0QT%2B0siX9BiTHq9LtQPe0YQ7IOfmneXbVPbKvWC4hEKhxs79c1TmqHl9IQnMuoS8DwxoowMtd24LsHUjqS%2B0NyGOAR29ygpxBTLPJati7BetxKt2NxftOQUdUeoeor4lfXgP8oWrOwJUMzrAjQUWS1y1HOWrGM8nqllDBglTOqPwEuc3lkmGelX%2FpeQr1iAIvWkVpe1%2BH%2B0X9JjM%2FefZGkSgTfQSHgy8Jpke4fJFLZXyWNuV2IoPTqs6UXYtiNZ2h6wCWh07I1JrgTfDTG5YvMVBniIMqpDKPDkyc0ybbsNXQhVrdBpz99xs0wv5UmBnkBiypjN%2BoTrQJV3x5ZembdF83NqaWau8w%2F%2BfBwWlSSmkbDKeVKMNa7lsQGOqUBhd%2BlUS3bhuuMALw6jpABHlHcSD7aiDI%2Fyx94oeVj73R5E34Flfzl42GG84n%2Fc924e6Oc5xt663ExjSCcWGwyO5IYAMzAF0NnUaSeSuW2b1JWB9rxg31%2BKXGdDTjHL%2FyRjleViIrEDdkWjmXcYuodR%2BH4TE7nRyXtVPJjrZcz5DHKdUOFXRRZ%2BX2Qj5m%2Fj%2BzTIlmYBcMibuKO2UVqQ7qLoh3N9Cc5&X-Amz-Signature=897873e87520b0c7799d06240c3cce6b041f28dad63d7ca4756540ae594e684b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4GM6G5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC7VqIZIQJTVpK3uFfPg9sz0pRKYF7IvnvxSZjhgOpLHQIgLmu4Ea4k%2B2ZmXJr57OuCdoGqq9oQFyc%2BIr%2BE%2BSnrhCQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKZW07wz%2FIV59eyzqCrcA3MzZ16T0ZBhsjATvzaQWa1FxtByPMivZ9V4fGqJko9CG2%2FainzEebhYWC4sa0K%2BGBkt4b15Lu1AhxOeFilLuHoQHMaKHTAoDZLETvB4vDY37TzIOxDsObZ3C7yqtrQQSYQIwQor5P80HzC60JH3UMryzzdxDY84AK1moz33l8hbRPwr6vXq2cqwVpqxNgaLUlUa8lZK59YXv%2FZ6qc3PgW98U1B%2F4Me0lmq5%2FWxjMoKyzHJEwzBJaPpASDCbZVZAKTf7qh%2Bzg3AEmVBeBBd2bNxwPlsUNfzjtXflnJeyauk1v9NdVm0NO77HwCV%2FeE68WX%2B6r0AajbVNLLpCz%2FIS9IcD1dj27tHLWgZ45OCtQsFvYJu50PHpTsC2YIqsNhxnYq6eOAoHVS6a2f50LWRrmClKPLv2EieW2nofrBBNSxDUtrIdb836S2J6m6eGlxdDjVioI2maJwREVzQ2wXgkmZbiQu8wexCVUtJYa1bm8fMpck%2FpSPLVwvNwDSLAdvuILFw4leuziURlAOafP2jZ7FvChcHtP6z5%2F41K5v5fxIJM%2BnIxREsn6r1LbsoyOMqcqUa2uRrYSzDP24lISxpPqSKTgd8O%2B2MKRUWYyd9Bio3%2FP74cdx8tIpfQtP%2FOMMq7lsQGOqUBiAcm5RJ3QBuD74ZmHYDvGOouOBL4%2BSuUefMv2xL9kHQNsBTXS8EIuPcgvhrNGKZ%2Fb%2Bc8lAWQppWjbxRW3IimucqpMutoCyRZL%2FN0nQwKrNdDbivH29Rb8AdyHMIe%2FbtsWQ0qhN%2FRakdcgeQFK6E0vDzZyCFPmE7dPrL0IjRAeiHuSnkgGI07NdCGB9%2FlshF0bNmCbMJPjlNQ0AZcxmdG5Bv9nRqV&X-Amz-Signature=805c18857a73e7169dee2b939fce3757011f16685270e0163fe8c205da4ffd16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

        self.subscription = self.create_subscription(Twist, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...


    def listener_callback(self, msg: Twist):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4GM6G5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC7VqIZIQJTVpK3uFfPg9sz0pRKYF7IvnvxSZjhgOpLHQIgLmu4Ea4k%2B2ZmXJr57OuCdoGqq9oQFyc%2BIr%2BE%2BSnrhCQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKZW07wz%2FIV59eyzqCrcA3MzZ16T0ZBhsjATvzaQWa1FxtByPMivZ9V4fGqJko9CG2%2FainzEebhYWC4sa0K%2BGBkt4b15Lu1AhxOeFilLuHoQHMaKHTAoDZLETvB4vDY37TzIOxDsObZ3C7yqtrQQSYQIwQor5P80HzC60JH3UMryzzdxDY84AK1moz33l8hbRPwr6vXq2cqwVpqxNgaLUlUa8lZK59YXv%2FZ6qc3PgW98U1B%2F4Me0lmq5%2FWxjMoKyzHJEwzBJaPpASDCbZVZAKTf7qh%2Bzg3AEmVBeBBd2bNxwPlsUNfzjtXflnJeyauk1v9NdVm0NO77HwCV%2FeE68WX%2B6r0AajbVNLLpCz%2FIS9IcD1dj27tHLWgZ45OCtQsFvYJu50PHpTsC2YIqsNhxnYq6eOAoHVS6a2f50LWRrmClKPLv2EieW2nofrBBNSxDUtrIdb836S2J6m6eGlxdDjVioI2maJwREVzQ2wXgkmZbiQu8wexCVUtJYa1bm8fMpck%2FpSPLVwvNwDSLAdvuILFw4leuziURlAOafP2jZ7FvChcHtP6z5%2F41K5v5fxIJM%2BnIxREsn6r1LbsoyOMqcqUa2uRrYSzDP24lISxpPqSKTgd8O%2B2MKRUWYyd9Bio3%2FP74cdx8tIpfQtP%2FOMMq7lsQGOqUBiAcm5RJ3QBuD74ZmHYDvGOouOBL4%2BSuUefMv2xL9kHQNsBTXS8EIuPcgvhrNGKZ%2Fb%2Bc8lAWQppWjbxRW3IimucqpMutoCyRZL%2FN0nQwKrNdDbivH29Rb8AdyHMIe%2FbtsWQ0qhN%2FRakdcgeQFK6E0vDzZyCFPmE7dPrL0IjRAeiHuSnkgGI07NdCGB9%2FlshF0bNmCbMJPjlNQ0AZcxmdG5Bv9nRqV&X-Amz-Signature=4eb5a12eb6baeac83ef9d9812992ee69b6adccecbb0aa0e8afc08ff8b4101e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4GM6G5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC7VqIZIQJTVpK3uFfPg9sz0pRKYF7IvnvxSZjhgOpLHQIgLmu4Ea4k%2B2ZmXJr57OuCdoGqq9oQFyc%2BIr%2BE%2BSnrhCQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKZW07wz%2FIV59eyzqCrcA3MzZ16T0ZBhsjATvzaQWa1FxtByPMivZ9V4fGqJko9CG2%2FainzEebhYWC4sa0K%2BGBkt4b15Lu1AhxOeFilLuHoQHMaKHTAoDZLETvB4vDY37TzIOxDsObZ3C7yqtrQQSYQIwQor5P80HzC60JH3UMryzzdxDY84AK1moz33l8hbRPwr6vXq2cqwVpqxNgaLUlUa8lZK59YXv%2FZ6qc3PgW98U1B%2F4Me0lmq5%2FWxjMoKyzHJEwzBJaPpASDCbZVZAKTf7qh%2Bzg3AEmVBeBBd2bNxwPlsUNfzjtXflnJeyauk1v9NdVm0NO77HwCV%2FeE68WX%2B6r0AajbVNLLpCz%2FIS9IcD1dj27tHLWgZ45OCtQsFvYJu50PHpTsC2YIqsNhxnYq6eOAoHVS6a2f50LWRrmClKPLv2EieW2nofrBBNSxDUtrIdb836S2J6m6eGlxdDjVioI2maJwREVzQ2wXgkmZbiQu8wexCVUtJYa1bm8fMpck%2FpSPLVwvNwDSLAdvuILFw4leuziURlAOafP2jZ7FvChcHtP6z5%2F41K5v5fxIJM%2BnIxREsn6r1LbsoyOMqcqUa2uRrYSzDP24lISxpPqSKTgd8O%2B2MKRUWYyd9Bio3%2FP74cdx8tIpfQtP%2FOMMq7lsQGOqUBiAcm5RJ3QBuD74ZmHYDvGOouOBL4%2BSuUefMv2xL9kHQNsBTXS8EIuPcgvhrNGKZ%2Fb%2Bc8lAWQppWjbxRW3IimucqpMutoCyRZL%2FN0nQwKrNdDbivH29Rb8AdyHMIe%2FbtsWQ0qhN%2FRakdcgeQFK6E0vDzZyCFPmE7dPrL0IjRAeiHuSnkgGI07NdCGB9%2FlshF0bNmCbMJPjlNQ0AZcxmdG5Bv9nRqV&X-Amz-Signature=be3e799c8e694c1cc503338245c0d126f435b830b669bd80399b61ee926c3045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4GM6G5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC7VqIZIQJTVpK3uFfPg9sz0pRKYF7IvnvxSZjhgOpLHQIgLmu4Ea4k%2B2ZmXJr57OuCdoGqq9oQFyc%2BIr%2BE%2BSnrhCQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKZW07wz%2FIV59eyzqCrcA3MzZ16T0ZBhsjATvzaQWa1FxtByPMivZ9V4fGqJko9CG2%2FainzEebhYWC4sa0K%2BGBkt4b15Lu1AhxOeFilLuHoQHMaKHTAoDZLETvB4vDY37TzIOxDsObZ3C7yqtrQQSYQIwQor5P80HzC60JH3UMryzzdxDY84AK1moz33l8hbRPwr6vXq2cqwVpqxNgaLUlUa8lZK59YXv%2FZ6qc3PgW98U1B%2F4Me0lmq5%2FWxjMoKyzHJEwzBJaPpASDCbZVZAKTf7qh%2Bzg3AEmVBeBBd2bNxwPlsUNfzjtXflnJeyauk1v9NdVm0NO77HwCV%2FeE68WX%2B6r0AajbVNLLpCz%2FIS9IcD1dj27tHLWgZ45OCtQsFvYJu50PHpTsC2YIqsNhxnYq6eOAoHVS6a2f50LWRrmClKPLv2EieW2nofrBBNSxDUtrIdb836S2J6m6eGlxdDjVioI2maJwREVzQ2wXgkmZbiQu8wexCVUtJYa1bm8fMpck%2FpSPLVwvNwDSLAdvuILFw4leuziURlAOafP2jZ7FvChcHtP6z5%2F41K5v5fxIJM%2BnIxREsn6r1LbsoyOMqcqUa2uRrYSzDP24lISxpPqSKTgd8O%2B2MKRUWYyd9Bio3%2FP74cdx8tIpfQtP%2FOMMq7lsQGOqUBiAcm5RJ3QBuD74ZmHYDvGOouOBL4%2BSuUefMv2xL9kHQNsBTXS8EIuPcgvhrNGKZ%2Fb%2Bc8lAWQppWjbxRW3IimucqpMutoCyRZL%2FN0nQwKrNdDbivH29Rb8AdyHMIe%2FbtsWQ0qhN%2FRakdcgeQFK6E0vDzZyCFPmE7dPrL0IjRAeiHuSnkgGI07NdCGB9%2FlshF0bNmCbMJPjlNQ0AZcxmdG5Bv9nRqV&X-Amz-Signature=5f6290fcfd381de0d7023613cdd21516e7dda03604cd7c3857991fb5b24dce2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4GM6G5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC7VqIZIQJTVpK3uFfPg9sz0pRKYF7IvnvxSZjhgOpLHQIgLmu4Ea4k%2B2ZmXJr57OuCdoGqq9oQFyc%2BIr%2BE%2BSnrhCQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKZW07wz%2FIV59eyzqCrcA3MzZ16T0ZBhsjATvzaQWa1FxtByPMivZ9V4fGqJko9CG2%2FainzEebhYWC4sa0K%2BGBkt4b15Lu1AhxOeFilLuHoQHMaKHTAoDZLETvB4vDY37TzIOxDsObZ3C7yqtrQQSYQIwQor5P80HzC60JH3UMryzzdxDY84AK1moz33l8hbRPwr6vXq2cqwVpqxNgaLUlUa8lZK59YXv%2FZ6qc3PgW98U1B%2F4Me0lmq5%2FWxjMoKyzHJEwzBJaPpASDCbZVZAKTf7qh%2Bzg3AEmVBeBBd2bNxwPlsUNfzjtXflnJeyauk1v9NdVm0NO77HwCV%2FeE68WX%2B6r0AajbVNLLpCz%2FIS9IcD1dj27tHLWgZ45OCtQsFvYJu50PHpTsC2YIqsNhxnYq6eOAoHVS6a2f50LWRrmClKPLv2EieW2nofrBBNSxDUtrIdb836S2J6m6eGlxdDjVioI2maJwREVzQ2wXgkmZbiQu8wexCVUtJYa1bm8fMpck%2FpSPLVwvNwDSLAdvuILFw4leuziURlAOafP2jZ7FvChcHtP6z5%2F41K5v5fxIJM%2BnIxREsn6r1LbsoyOMqcqUa2uRrYSzDP24lISxpPqSKTgd8O%2B2MKRUWYyd9Bio3%2FP74cdx8tIpfQtP%2FOMMq7lsQGOqUBiAcm5RJ3QBuD74ZmHYDvGOouOBL4%2BSuUefMv2xL9kHQNsBTXS8EIuPcgvhrNGKZ%2Fb%2Bc8lAWQppWjbxRW3IimucqpMutoCyRZL%2FN0nQwKrNdDbivH29Rb8AdyHMIe%2FbtsWQ0qhN%2FRakdcgeQFK6E0vDzZyCFPmE7dPrL0IjRAeiHuSnkgGI07NdCGB9%2FlshF0bNmCbMJPjlNQ0AZcxmdG5Bv9nRqV&X-Amz-Signature=6c7e9fda7bb1691b37999828776cf736b4e0cd415e921de631a783a2b745a21a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4GM6G5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC7VqIZIQJTVpK3uFfPg9sz0pRKYF7IvnvxSZjhgOpLHQIgLmu4Ea4k%2B2ZmXJr57OuCdoGqq9oQFyc%2BIr%2BE%2BSnrhCQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKZW07wz%2FIV59eyzqCrcA3MzZ16T0ZBhsjATvzaQWa1FxtByPMivZ9V4fGqJko9CG2%2FainzEebhYWC4sa0K%2BGBkt4b15Lu1AhxOeFilLuHoQHMaKHTAoDZLETvB4vDY37TzIOxDsObZ3C7yqtrQQSYQIwQor5P80HzC60JH3UMryzzdxDY84AK1moz33l8hbRPwr6vXq2cqwVpqxNgaLUlUa8lZK59YXv%2FZ6qc3PgW98U1B%2F4Me0lmq5%2FWxjMoKyzHJEwzBJaPpASDCbZVZAKTf7qh%2Bzg3AEmVBeBBd2bNxwPlsUNfzjtXflnJeyauk1v9NdVm0NO77HwCV%2FeE68WX%2B6r0AajbVNLLpCz%2FIS9IcD1dj27tHLWgZ45OCtQsFvYJu50PHpTsC2YIqsNhxnYq6eOAoHVS6a2f50LWRrmClKPLv2EieW2nofrBBNSxDUtrIdb836S2J6m6eGlxdDjVioI2maJwREVzQ2wXgkmZbiQu8wexCVUtJYa1bm8fMpck%2FpSPLVwvNwDSLAdvuILFw4leuziURlAOafP2jZ7FvChcHtP6z5%2F41K5v5fxIJM%2BnIxREsn6r1LbsoyOMqcqUa2uRrYSzDP24lISxpPqSKTgd8O%2B2MKRUWYyd9Bio3%2FP74cdx8tIpfQtP%2FOMMq7lsQGOqUBiAcm5RJ3QBuD74ZmHYDvGOouOBL4%2BSuUefMv2xL9kHQNsBTXS8EIuPcgvhrNGKZ%2Fb%2Bc8lAWQppWjbxRW3IimucqpMutoCyRZL%2FN0nQwKrNdDbivH29Rb8AdyHMIe%2FbtsWQ0qhN%2FRakdcgeQFK6E0vDzZyCFPmE7dPrL0IjRAeiHuSnkgGI07NdCGB9%2FlshF0bNmCbMJPjlNQ0AZcxmdG5Bv9nRqV&X-Amz-Signature=5e7c627367aa41587dafe4a03b076684e722bf776a40e2deaf507b2c7481feab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4GM6G5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC7VqIZIQJTVpK3uFfPg9sz0pRKYF7IvnvxSZjhgOpLHQIgLmu4Ea4k%2B2ZmXJr57OuCdoGqq9oQFyc%2BIr%2BE%2BSnrhCQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKZW07wz%2FIV59eyzqCrcA3MzZ16T0ZBhsjATvzaQWa1FxtByPMivZ9V4fGqJko9CG2%2FainzEebhYWC4sa0K%2BGBkt4b15Lu1AhxOeFilLuHoQHMaKHTAoDZLETvB4vDY37TzIOxDsObZ3C7yqtrQQSYQIwQor5P80HzC60JH3UMryzzdxDY84AK1moz33l8hbRPwr6vXq2cqwVpqxNgaLUlUa8lZK59YXv%2FZ6qc3PgW98U1B%2F4Me0lmq5%2FWxjMoKyzHJEwzBJaPpASDCbZVZAKTf7qh%2Bzg3AEmVBeBBd2bNxwPlsUNfzjtXflnJeyauk1v9NdVm0NO77HwCV%2FeE68WX%2B6r0AajbVNLLpCz%2FIS9IcD1dj27tHLWgZ45OCtQsFvYJu50PHpTsC2YIqsNhxnYq6eOAoHVS6a2f50LWRrmClKPLv2EieW2nofrBBNSxDUtrIdb836S2J6m6eGlxdDjVioI2maJwREVzQ2wXgkmZbiQu8wexCVUtJYa1bm8fMpck%2FpSPLVwvNwDSLAdvuILFw4leuziURlAOafP2jZ7FvChcHtP6z5%2F41K5v5fxIJM%2BnIxREsn6r1LbsoyOMqcqUa2uRrYSzDP24lISxpPqSKTgd8O%2B2MKRUWYyd9Bio3%2FP74cdx8tIpfQtP%2FOMMq7lsQGOqUBiAcm5RJ3QBuD74ZmHYDvGOouOBL4%2BSuUefMv2xL9kHQNsBTXS8EIuPcgvhrNGKZ%2Fb%2Bc8lAWQppWjbxRW3IimucqpMutoCyRZL%2FN0nQwKrNdDbivH29Rb8AdyHMIe%2FbtsWQ0qhN%2FRakdcgeQFK6E0vDzZyCFPmE7dPrL0IjRAeiHuSnkgGI07NdCGB9%2FlshF0bNmCbMJPjlNQ0AZcxmdG5Bv9nRqV&X-Amz-Signature=8eb7fd25f8e2208196efac96cf77d62e303a8b48d405f16080928b0e7c7d015d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
