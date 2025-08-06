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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4HNDVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHq6NlJNLD1zFOwnKAB4mY6Q%2BVb15eQGe%2BqnJhD%2FG3owIgFzXfOjodjdw3UapTFNMH3FaEwCZ47Mhv2D0fTCbyVKYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAxPPZ3gHPg%2Bb%2FCLzSrcA5TFWRohS1ewqilxoXBHpwmSPeNEYt08aIMq%2FhIzCh6ARsdsf3lvRcYkaY6km7POSlQxPXV8b33RztSk86WNyWOQLN6yyLOKVjqliblHknHXjG73%2BL7DRt5LgxrNU7SHKucU1yi%2B56IL4nZxVCxAN7IL5XCzMzQ4MS8Ybf0GFEHQD7In3YTli6FxOtn10dNBOqejHVbIguihmfO4O3njgLl1Y%2F%2BvMDrlQAa6Q%2BxEYc4tN0t4TxXJ5XniaWg3AjIbRAfV1sQDNjwA%2B8yXdFXWDI5uGSda6O%2FqtR2IcX%2Bzg%2FM4r0zwDFm%2FN0nlvhY9IWbEE0CTfgeGKkLqH%2BF7YKoUh463xOCAMCI01tBEKZtvg3UQP%2B4Jlut%2BrijeI8eZVyBU1UC4kbAnnYztaAaxoek100%2FAz8EkfVp%2Bb3v8PmVTiX9JndYRYgV%2F1WxwJ%2BomR4JwfawWmUCBKnbY6HAv96%2Bhyv%2FbWhcKQxuY05C8MQDrinaOZSU%2B8c9PwL1kiYKcdn1ZJJkP%2BXcx9O1xPP8mQby2k9pe%2Bk0pCCv%2FqulMo1LG4LT1Kp7YjeNtmdeGbS%2BXSjZleAf%2FiPteczRr83Bh6J9gLb5pMT8UjvZ7SSRDAlJYgKygAb%2F4kMyd%2Bk1sZBp3MLGXzMQGOqUBfz2JXw%2F6tI2Rih3gJE8XSQziB3Yr3FNbkHMidgrxTMg0kMj6r%2Fy63E2vragdCIEI%2BPv9Wh2Y2CphM2RmTfeSVM8hfctQRX9%2BjFfm%2FvG3jt9MaOE65xsmHb4c%2BNO5C6pcRhwRI8P2QavPJRNhSsDd%2BkGmPWB1%2FYLdlBHO44OP9gtKf1YYgqsZbEZbZcLKN2yNdCdnjgIOnD7iKUMawWJGA%2Fr%2FpYZ%2B&X-Amz-Signature=a70299a2ec7f4d271ee4f06d87d5fd00b3ca6a37b67f1be50c925e5fd6876ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4HNDVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHq6NlJNLD1zFOwnKAB4mY6Q%2BVb15eQGe%2BqnJhD%2FG3owIgFzXfOjodjdw3UapTFNMH3FaEwCZ47Mhv2D0fTCbyVKYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAxPPZ3gHPg%2Bb%2FCLzSrcA5TFWRohS1ewqilxoXBHpwmSPeNEYt08aIMq%2FhIzCh6ARsdsf3lvRcYkaY6km7POSlQxPXV8b33RztSk86WNyWOQLN6yyLOKVjqliblHknHXjG73%2BL7DRt5LgxrNU7SHKucU1yi%2B56IL4nZxVCxAN7IL5XCzMzQ4MS8Ybf0GFEHQD7In3YTli6FxOtn10dNBOqejHVbIguihmfO4O3njgLl1Y%2F%2BvMDrlQAa6Q%2BxEYc4tN0t4TxXJ5XniaWg3AjIbRAfV1sQDNjwA%2B8yXdFXWDI5uGSda6O%2FqtR2IcX%2Bzg%2FM4r0zwDFm%2FN0nlvhY9IWbEE0CTfgeGKkLqH%2BF7YKoUh463xOCAMCI01tBEKZtvg3UQP%2B4Jlut%2BrijeI8eZVyBU1UC4kbAnnYztaAaxoek100%2FAz8EkfVp%2Bb3v8PmVTiX9JndYRYgV%2F1WxwJ%2BomR4JwfawWmUCBKnbY6HAv96%2Bhyv%2FbWhcKQxuY05C8MQDrinaOZSU%2B8c9PwL1kiYKcdn1ZJJkP%2BXcx9O1xPP8mQby2k9pe%2Bk0pCCv%2FqulMo1LG4LT1Kp7YjeNtmdeGbS%2BXSjZleAf%2FiPteczRr83Bh6J9gLb5pMT8UjvZ7SSRDAlJYgKygAb%2F4kMyd%2Bk1sZBp3MLGXzMQGOqUBfz2JXw%2F6tI2Rih3gJE8XSQziB3Yr3FNbkHMidgrxTMg0kMj6r%2Fy63E2vragdCIEI%2BPv9Wh2Y2CphM2RmTfeSVM8hfctQRX9%2BjFfm%2FvG3jt9MaOE65xsmHb4c%2BNO5C6pcRhwRI8P2QavPJRNhSsDd%2BkGmPWB1%2FYLdlBHO44OP9gtKf1YYgqsZbEZbZcLKN2yNdCdnjgIOnD7iKUMawWJGA%2Fr%2FpYZ%2B&X-Amz-Signature=4b079337e642c7af6766dc294f140dfabeef981dc6ea944815664d69d4dab144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4HNDVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHq6NlJNLD1zFOwnKAB4mY6Q%2BVb15eQGe%2BqnJhD%2FG3owIgFzXfOjodjdw3UapTFNMH3FaEwCZ47Mhv2D0fTCbyVKYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAxPPZ3gHPg%2Bb%2FCLzSrcA5TFWRohS1ewqilxoXBHpwmSPeNEYt08aIMq%2FhIzCh6ARsdsf3lvRcYkaY6km7POSlQxPXV8b33RztSk86WNyWOQLN6yyLOKVjqliblHknHXjG73%2BL7DRt5LgxrNU7SHKucU1yi%2B56IL4nZxVCxAN7IL5XCzMzQ4MS8Ybf0GFEHQD7In3YTli6FxOtn10dNBOqejHVbIguihmfO4O3njgLl1Y%2F%2BvMDrlQAa6Q%2BxEYc4tN0t4TxXJ5XniaWg3AjIbRAfV1sQDNjwA%2B8yXdFXWDI5uGSda6O%2FqtR2IcX%2Bzg%2FM4r0zwDFm%2FN0nlvhY9IWbEE0CTfgeGKkLqH%2BF7YKoUh463xOCAMCI01tBEKZtvg3UQP%2B4Jlut%2BrijeI8eZVyBU1UC4kbAnnYztaAaxoek100%2FAz8EkfVp%2Bb3v8PmVTiX9JndYRYgV%2F1WxwJ%2BomR4JwfawWmUCBKnbY6HAv96%2Bhyv%2FbWhcKQxuY05C8MQDrinaOZSU%2B8c9PwL1kiYKcdn1ZJJkP%2BXcx9O1xPP8mQby2k9pe%2Bk0pCCv%2FqulMo1LG4LT1Kp7YjeNtmdeGbS%2BXSjZleAf%2FiPteczRr83Bh6J9gLb5pMT8UjvZ7SSRDAlJYgKygAb%2F4kMyd%2Bk1sZBp3MLGXzMQGOqUBfz2JXw%2F6tI2Rih3gJE8XSQziB3Yr3FNbkHMidgrxTMg0kMj6r%2Fy63E2vragdCIEI%2BPv9Wh2Y2CphM2RmTfeSVM8hfctQRX9%2BjFfm%2FvG3jt9MaOE65xsmHb4c%2BNO5C6pcRhwRI8P2QavPJRNhSsDd%2BkGmPWB1%2FYLdlBHO44OP9gtKf1YYgqsZbEZbZcLKN2yNdCdnjgIOnD7iKUMawWJGA%2Fr%2FpYZ%2B&X-Amz-Signature=f140a5b0af577bdd62b5503bd90e9ab56c8cded6e58d5bd7a0e413af1d440a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4HNDVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHq6NlJNLD1zFOwnKAB4mY6Q%2BVb15eQGe%2BqnJhD%2FG3owIgFzXfOjodjdw3UapTFNMH3FaEwCZ47Mhv2D0fTCbyVKYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAxPPZ3gHPg%2Bb%2FCLzSrcA5TFWRohS1ewqilxoXBHpwmSPeNEYt08aIMq%2FhIzCh6ARsdsf3lvRcYkaY6km7POSlQxPXV8b33RztSk86WNyWOQLN6yyLOKVjqliblHknHXjG73%2BL7DRt5LgxrNU7SHKucU1yi%2B56IL4nZxVCxAN7IL5XCzMzQ4MS8Ybf0GFEHQD7In3YTli6FxOtn10dNBOqejHVbIguihmfO4O3njgLl1Y%2F%2BvMDrlQAa6Q%2BxEYc4tN0t4TxXJ5XniaWg3AjIbRAfV1sQDNjwA%2B8yXdFXWDI5uGSda6O%2FqtR2IcX%2Bzg%2FM4r0zwDFm%2FN0nlvhY9IWbEE0CTfgeGKkLqH%2BF7YKoUh463xOCAMCI01tBEKZtvg3UQP%2B4Jlut%2BrijeI8eZVyBU1UC4kbAnnYztaAaxoek100%2FAz8EkfVp%2Bb3v8PmVTiX9JndYRYgV%2F1WxwJ%2BomR4JwfawWmUCBKnbY6HAv96%2Bhyv%2FbWhcKQxuY05C8MQDrinaOZSU%2B8c9PwL1kiYKcdn1ZJJkP%2BXcx9O1xPP8mQby2k9pe%2Bk0pCCv%2FqulMo1LG4LT1Kp7YjeNtmdeGbS%2BXSjZleAf%2FiPteczRr83Bh6J9gLb5pMT8UjvZ7SSRDAlJYgKygAb%2F4kMyd%2Bk1sZBp3MLGXzMQGOqUBfz2JXw%2F6tI2Rih3gJE8XSQziB3Yr3FNbkHMidgrxTMg0kMj6r%2Fy63E2vragdCIEI%2BPv9Wh2Y2CphM2RmTfeSVM8hfctQRX9%2BjFfm%2FvG3jt9MaOE65xsmHb4c%2BNO5C6pcRhwRI8P2QavPJRNhSsDd%2BkGmPWB1%2FYLdlBHO44OP9gtKf1YYgqsZbEZbZcLKN2yNdCdnjgIOnD7iKUMawWJGA%2Fr%2FpYZ%2B&X-Amz-Signature=7b058387fdbbbb2999af8c1912ae32b1d244d0417fe8ffec9ac5679b55bbf3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4HNDVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHq6NlJNLD1zFOwnKAB4mY6Q%2BVb15eQGe%2BqnJhD%2FG3owIgFzXfOjodjdw3UapTFNMH3FaEwCZ47Mhv2D0fTCbyVKYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAxPPZ3gHPg%2Bb%2FCLzSrcA5TFWRohS1ewqilxoXBHpwmSPeNEYt08aIMq%2FhIzCh6ARsdsf3lvRcYkaY6km7POSlQxPXV8b33RztSk86WNyWOQLN6yyLOKVjqliblHknHXjG73%2BL7DRt5LgxrNU7SHKucU1yi%2B56IL4nZxVCxAN7IL5XCzMzQ4MS8Ybf0GFEHQD7In3YTli6FxOtn10dNBOqejHVbIguihmfO4O3njgLl1Y%2F%2BvMDrlQAa6Q%2BxEYc4tN0t4TxXJ5XniaWg3AjIbRAfV1sQDNjwA%2B8yXdFXWDI5uGSda6O%2FqtR2IcX%2Bzg%2FM4r0zwDFm%2FN0nlvhY9IWbEE0CTfgeGKkLqH%2BF7YKoUh463xOCAMCI01tBEKZtvg3UQP%2B4Jlut%2BrijeI8eZVyBU1UC4kbAnnYztaAaxoek100%2FAz8EkfVp%2Bb3v8PmVTiX9JndYRYgV%2F1WxwJ%2BomR4JwfawWmUCBKnbY6HAv96%2Bhyv%2FbWhcKQxuY05C8MQDrinaOZSU%2B8c9PwL1kiYKcdn1ZJJkP%2BXcx9O1xPP8mQby2k9pe%2Bk0pCCv%2FqulMo1LG4LT1Kp7YjeNtmdeGbS%2BXSjZleAf%2FiPteczRr83Bh6J9gLb5pMT8UjvZ7SSRDAlJYgKygAb%2F4kMyd%2Bk1sZBp3MLGXzMQGOqUBfz2JXw%2F6tI2Rih3gJE8XSQziB3Yr3FNbkHMidgrxTMg0kMj6r%2Fy63E2vragdCIEI%2BPv9Wh2Y2CphM2RmTfeSVM8hfctQRX9%2BjFfm%2FvG3jt9MaOE65xsmHb4c%2BNO5C6pcRhwRI8P2QavPJRNhSsDd%2BkGmPWB1%2FYLdlBHO44OP9gtKf1YYgqsZbEZbZcLKN2yNdCdnjgIOnD7iKUMawWJGA%2Fr%2FpYZ%2B&X-Amz-Signature=2fbfa5948df30d06909072ba8cbae4f1fee84c677284f58aad2e2f639311e344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4HNDVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHq6NlJNLD1zFOwnKAB4mY6Q%2BVb15eQGe%2BqnJhD%2FG3owIgFzXfOjodjdw3UapTFNMH3FaEwCZ47Mhv2D0fTCbyVKYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAxPPZ3gHPg%2Bb%2FCLzSrcA5TFWRohS1ewqilxoXBHpwmSPeNEYt08aIMq%2FhIzCh6ARsdsf3lvRcYkaY6km7POSlQxPXV8b33RztSk86WNyWOQLN6yyLOKVjqliblHknHXjG73%2BL7DRt5LgxrNU7SHKucU1yi%2B56IL4nZxVCxAN7IL5XCzMzQ4MS8Ybf0GFEHQD7In3YTli6FxOtn10dNBOqejHVbIguihmfO4O3njgLl1Y%2F%2BvMDrlQAa6Q%2BxEYc4tN0t4TxXJ5XniaWg3AjIbRAfV1sQDNjwA%2B8yXdFXWDI5uGSda6O%2FqtR2IcX%2Bzg%2FM4r0zwDFm%2FN0nlvhY9IWbEE0CTfgeGKkLqH%2BF7YKoUh463xOCAMCI01tBEKZtvg3UQP%2B4Jlut%2BrijeI8eZVyBU1UC4kbAnnYztaAaxoek100%2FAz8EkfVp%2Bb3v8PmVTiX9JndYRYgV%2F1WxwJ%2BomR4JwfawWmUCBKnbY6HAv96%2Bhyv%2FbWhcKQxuY05C8MQDrinaOZSU%2B8c9PwL1kiYKcdn1ZJJkP%2BXcx9O1xPP8mQby2k9pe%2Bk0pCCv%2FqulMo1LG4LT1Kp7YjeNtmdeGbS%2BXSjZleAf%2FiPteczRr83Bh6J9gLb5pMT8UjvZ7SSRDAlJYgKygAb%2F4kMyd%2Bk1sZBp3MLGXzMQGOqUBfz2JXw%2F6tI2Rih3gJE8XSQziB3Yr3FNbkHMidgrxTMg0kMj6r%2Fy63E2vragdCIEI%2BPv9Wh2Y2CphM2RmTfeSVM8hfctQRX9%2BjFfm%2FvG3jt9MaOE65xsmHb4c%2BNO5C6pcRhwRI8P2QavPJRNhSsDd%2BkGmPWB1%2FYLdlBHO44OP9gtKf1YYgqsZbEZbZcLKN2yNdCdnjgIOnD7iKUMawWJGA%2Fr%2FpYZ%2B&X-Amz-Signature=3349b88106c707b74a0f769f760482fd443d00e0b3a1b1e1b01aff94b1cd244c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4HNDVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHq6NlJNLD1zFOwnKAB4mY6Q%2BVb15eQGe%2BqnJhD%2FG3owIgFzXfOjodjdw3UapTFNMH3FaEwCZ47Mhv2D0fTCbyVKYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAxPPZ3gHPg%2Bb%2FCLzSrcA5TFWRohS1ewqilxoXBHpwmSPeNEYt08aIMq%2FhIzCh6ARsdsf3lvRcYkaY6km7POSlQxPXV8b33RztSk86WNyWOQLN6yyLOKVjqliblHknHXjG73%2BL7DRt5LgxrNU7SHKucU1yi%2B56IL4nZxVCxAN7IL5XCzMzQ4MS8Ybf0GFEHQD7In3YTli6FxOtn10dNBOqejHVbIguihmfO4O3njgLl1Y%2F%2BvMDrlQAa6Q%2BxEYc4tN0t4TxXJ5XniaWg3AjIbRAfV1sQDNjwA%2B8yXdFXWDI5uGSda6O%2FqtR2IcX%2Bzg%2FM4r0zwDFm%2FN0nlvhY9IWbEE0CTfgeGKkLqH%2BF7YKoUh463xOCAMCI01tBEKZtvg3UQP%2B4Jlut%2BrijeI8eZVyBU1UC4kbAnnYztaAaxoek100%2FAz8EkfVp%2Bb3v8PmVTiX9JndYRYgV%2F1WxwJ%2BomR4JwfawWmUCBKnbY6HAv96%2Bhyv%2FbWhcKQxuY05C8MQDrinaOZSU%2B8c9PwL1kiYKcdn1ZJJkP%2BXcx9O1xPP8mQby2k9pe%2Bk0pCCv%2FqulMo1LG4LT1Kp7YjeNtmdeGbS%2BXSjZleAf%2FiPteczRr83Bh6J9gLb5pMT8UjvZ7SSRDAlJYgKygAb%2F4kMyd%2Bk1sZBp3MLGXzMQGOqUBfz2JXw%2F6tI2Rih3gJE8XSQziB3Yr3FNbkHMidgrxTMg0kMj6r%2Fy63E2vragdCIEI%2BPv9Wh2Y2CphM2RmTfeSVM8hfctQRX9%2BjFfm%2FvG3jt9MaOE65xsmHb4c%2BNO5C6pcRhwRI8P2QavPJRNhSsDd%2BkGmPWB1%2FYLdlBHO44OP9gtKf1YYgqsZbEZbZcLKN2yNdCdnjgIOnD7iKUMawWJGA%2Fr%2FpYZ%2B&X-Amz-Signature=ce77d3aa3831cfbcfe06772f86261cef16a983e5ce78e2e40b29c59ba4638c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4HNDVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHq6NlJNLD1zFOwnKAB4mY6Q%2BVb15eQGe%2BqnJhD%2FG3owIgFzXfOjodjdw3UapTFNMH3FaEwCZ47Mhv2D0fTCbyVKYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAxPPZ3gHPg%2Bb%2FCLzSrcA5TFWRohS1ewqilxoXBHpwmSPeNEYt08aIMq%2FhIzCh6ARsdsf3lvRcYkaY6km7POSlQxPXV8b33RztSk86WNyWOQLN6yyLOKVjqliblHknHXjG73%2BL7DRt5LgxrNU7SHKucU1yi%2B56IL4nZxVCxAN7IL5XCzMzQ4MS8Ybf0GFEHQD7In3YTli6FxOtn10dNBOqejHVbIguihmfO4O3njgLl1Y%2F%2BvMDrlQAa6Q%2BxEYc4tN0t4TxXJ5XniaWg3AjIbRAfV1sQDNjwA%2B8yXdFXWDI5uGSda6O%2FqtR2IcX%2Bzg%2FM4r0zwDFm%2FN0nlvhY9IWbEE0CTfgeGKkLqH%2BF7YKoUh463xOCAMCI01tBEKZtvg3UQP%2B4Jlut%2BrijeI8eZVyBU1UC4kbAnnYztaAaxoek100%2FAz8EkfVp%2Bb3v8PmVTiX9JndYRYgV%2F1WxwJ%2BomR4JwfawWmUCBKnbY6HAv96%2Bhyv%2FbWhcKQxuY05C8MQDrinaOZSU%2B8c9PwL1kiYKcdn1ZJJkP%2BXcx9O1xPP8mQby2k9pe%2Bk0pCCv%2FqulMo1LG4LT1Kp7YjeNtmdeGbS%2BXSjZleAf%2FiPteczRr83Bh6J9gLb5pMT8UjvZ7SSRDAlJYgKygAb%2F4kMyd%2Bk1sZBp3MLGXzMQGOqUBfz2JXw%2F6tI2Rih3gJE8XSQziB3Yr3FNbkHMidgrxTMg0kMj6r%2Fy63E2vragdCIEI%2BPv9Wh2Y2CphM2RmTfeSVM8hfctQRX9%2BjFfm%2FvG3jt9MaOE65xsmHb4c%2BNO5C6pcRhwRI8P2QavPJRNhSsDd%2BkGmPWB1%2FYLdlBHO44OP9gtKf1YYgqsZbEZbZcLKN2yNdCdnjgIOnD7iKUMawWJGA%2Fr%2FpYZ%2B&X-Amz-Signature=3c9153ddedc941dab4b6fb76d4911663923defc2f4748f37bfb5a9b138365e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4HNDVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHq6NlJNLD1zFOwnKAB4mY6Q%2BVb15eQGe%2BqnJhD%2FG3owIgFzXfOjodjdw3UapTFNMH3FaEwCZ47Mhv2D0fTCbyVKYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAxPPZ3gHPg%2Bb%2FCLzSrcA5TFWRohS1ewqilxoXBHpwmSPeNEYt08aIMq%2FhIzCh6ARsdsf3lvRcYkaY6km7POSlQxPXV8b33RztSk86WNyWOQLN6yyLOKVjqliblHknHXjG73%2BL7DRt5LgxrNU7SHKucU1yi%2B56IL4nZxVCxAN7IL5XCzMzQ4MS8Ybf0GFEHQD7In3YTli6FxOtn10dNBOqejHVbIguihmfO4O3njgLl1Y%2F%2BvMDrlQAa6Q%2BxEYc4tN0t4TxXJ5XniaWg3AjIbRAfV1sQDNjwA%2B8yXdFXWDI5uGSda6O%2FqtR2IcX%2Bzg%2FM4r0zwDFm%2FN0nlvhY9IWbEE0CTfgeGKkLqH%2BF7YKoUh463xOCAMCI01tBEKZtvg3UQP%2B4Jlut%2BrijeI8eZVyBU1UC4kbAnnYztaAaxoek100%2FAz8EkfVp%2Bb3v8PmVTiX9JndYRYgV%2F1WxwJ%2BomR4JwfawWmUCBKnbY6HAv96%2Bhyv%2FbWhcKQxuY05C8MQDrinaOZSU%2B8c9PwL1kiYKcdn1ZJJkP%2BXcx9O1xPP8mQby2k9pe%2Bk0pCCv%2FqulMo1LG4LT1Kp7YjeNtmdeGbS%2BXSjZleAf%2FiPteczRr83Bh6J9gLb5pMT8UjvZ7SSRDAlJYgKygAb%2F4kMyd%2Bk1sZBp3MLGXzMQGOqUBfz2JXw%2F6tI2Rih3gJE8XSQziB3Yr3FNbkHMidgrxTMg0kMj6r%2Fy63E2vragdCIEI%2BPv9Wh2Y2CphM2RmTfeSVM8hfctQRX9%2BjFfm%2FvG3jt9MaOE65xsmHb4c%2BNO5C6pcRhwRI8P2QavPJRNhSsDd%2BkGmPWB1%2FYLdlBHO44OP9gtKf1YYgqsZbEZbZcLKN2yNdCdnjgIOnD7iKUMawWJGA%2Fr%2FpYZ%2B&X-Amz-Signature=5a68a9e221d6d1ab4cd7f004e16351f2072665a2cde9584c2bd296ba4b3de1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4HNDVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHq6NlJNLD1zFOwnKAB4mY6Q%2BVb15eQGe%2BqnJhD%2FG3owIgFzXfOjodjdw3UapTFNMH3FaEwCZ47Mhv2D0fTCbyVKYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAxPPZ3gHPg%2Bb%2FCLzSrcA5TFWRohS1ewqilxoXBHpwmSPeNEYt08aIMq%2FhIzCh6ARsdsf3lvRcYkaY6km7POSlQxPXV8b33RztSk86WNyWOQLN6yyLOKVjqliblHknHXjG73%2BL7DRt5LgxrNU7SHKucU1yi%2B56IL4nZxVCxAN7IL5XCzMzQ4MS8Ybf0GFEHQD7In3YTli6FxOtn10dNBOqejHVbIguihmfO4O3njgLl1Y%2F%2BvMDrlQAa6Q%2BxEYc4tN0t4TxXJ5XniaWg3AjIbRAfV1sQDNjwA%2B8yXdFXWDI5uGSda6O%2FqtR2IcX%2Bzg%2FM4r0zwDFm%2FN0nlvhY9IWbEE0CTfgeGKkLqH%2BF7YKoUh463xOCAMCI01tBEKZtvg3UQP%2B4Jlut%2BrijeI8eZVyBU1UC4kbAnnYztaAaxoek100%2FAz8EkfVp%2Bb3v8PmVTiX9JndYRYgV%2F1WxwJ%2BomR4JwfawWmUCBKnbY6HAv96%2Bhyv%2FbWhcKQxuY05C8MQDrinaOZSU%2B8c9PwL1kiYKcdn1ZJJkP%2BXcx9O1xPP8mQby2k9pe%2Bk0pCCv%2FqulMo1LG4LT1Kp7YjeNtmdeGbS%2BXSjZleAf%2FiPteczRr83Bh6J9gLb5pMT8UjvZ7SSRDAlJYgKygAb%2F4kMyd%2Bk1sZBp3MLGXzMQGOqUBfz2JXw%2F6tI2Rih3gJE8XSQziB3Yr3FNbkHMidgrxTMg0kMj6r%2Fy63E2vragdCIEI%2BPv9Wh2Y2CphM2RmTfeSVM8hfctQRX9%2BjFfm%2FvG3jt9MaOE65xsmHb4c%2BNO5C6pcRhwRI8P2QavPJRNhSsDd%2BkGmPWB1%2FYLdlBHO44OP9gtKf1YYgqsZbEZbZcLKN2yNdCdnjgIOnD7iKUMawWJGA%2Fr%2FpYZ%2B&X-Amz-Signature=21eaa4a3c2a71d6ef1ac0b6d950bb421d9cd280c8c9c655a8dd12fc00f746c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CBXWXJM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIEvAKfzr9mNsus2jHXTdP%2F0T7GMO93dDlZ5m295jIeRHAiA9AJopa8t5JwrEJoinzWtWNbOgomI9x1iRF26MaaEQfCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMOJz8SbIU0q3GO%2FL6KtwDZ5c%2Bc7RAkVhKh5CAw0y7dZkaR%2FMWQ6Eb%2FuZRKHyz1r8CrPJhrIfEYVIWSNCMlfI7tuDCAErIw8a1SnSRY0RyxZ%2F1BSZm22NMhHdAZJ8yC%2FP1VpJe437ZOlKA%2FDJNo5C8On5cDwi7t4yv1bBT98bxyW9L%2BtNj4kZIf2K9xSVfKaTG7F12lvnkQFx7gmnOONtPqV6Im1FB0%2BwF8pret4E19g%2FzIIAkBNIxl3C80PnQEg6OZ9YTYd3yo55WU9l%2BW40gta6Xfe1px9VrczyxkPGPWYKh0RKeh8h%2BNV9xVmUUGoDJ9efY78lG%2Frc7Mho91w8ol%2BIK8hXYgLJ1kkiNMTMSsTfZ7MHUO1MOxZ96kmyJDSID3MYOaXvNchNG8bomgcMBEfFDzSops35GFykaVSHBiFS7ASSLcCp5JGQYpLtlWyyN21Qhb%2Fhe3FJILrr2VhphVVP5rq7zkR%2BzUOhk2xqtwH06k2K2ytjsilofmZXa%2Fg1JHcZbm%2FrZs0VXKQpqrP3YgBbdxygntPgNMqZ3Q4BgYr4UXX%2BUCmGz0wq3KV3zY2BtEM6mwZZrklyqsRyGT0VshAKOLlaw6pSZb9rq%2B06aOrTCgd4IZHtD1VSvVBdid4wd7cgJWBm0R1%2FWGSYwp5fMxAY6pgGEyi3ZjeH3Ckw7L4tXrgcuHuQ9KiClqs4V3K%2Bw1Yei3YBcTC3%2BBkqwQaOw4CsJ7dPTSjs33YCiYng69YmD2zD8177l0iO%2B0WAdpgm87MWbzqvlFlvEqz8TiODabCYKsK516irysnRubVMc%2BpeXay2g2wu%2BXnehcenVe4rwfgYEbJcXylunaIoPBLUraoQoVmtFanRbxXZ8nbz%2FaS826a%2BdachSfNp8&X-Amz-Signature=a04feb64aef19735bef5784d6d756920c9c9eacbe12e1619bb0689d11b136ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYILVS5L%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAeALMXghm1dQIJEDVRowYAI0enzfX0OkxBReU6Y7NKuAiBNZt4l%2BQGyc73NjpKlCymUrKqY6CUpCCJeOlcu8L0QVSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMX5e07Ud2fACXNwBWKtwDKxCIYpW2BFMEdHchMB3y1SUsKMD179%2FyxzqGRLplc7AITm5c2bo43knmLmzvmEHseOt5tVmNElz1HPDBhQUzEn7w8GCJo4zX7pVdZm8mN53bh4S%2FCXWYEzIS%2F4C8Y3rO7kGIxMd6IBkuvAlEHwj8rWMTXXhRvjzxj9Zctp9FAjYhGKoXrQGQzUh9ri8fzTvYlbNK2CSjc76P1xnp6HKpB9iTOOgL1cTxcm%2B2ejbuSRwfZxL87EihGPYC6AH9mm5xvEZ%2BAKPkHPKFRfJtK0mVBe0tUjSt2ysroe9QsObrklua6Js4PlI5ZMcdy33Ml5DDdBoEpMFqDU0mu3Jn6kycPOxCe1c8K48gF27jPiHgLmT42o%2F7roFlPWOfzjJugiLkNpkUNuWuoHtKevvW%2Fye6jlGtrPGfV3bCZ%2FP%2FgUs8JSIxxNPJ2sV3mUcsiVur%2B8KwnbbYhFOBspi4MKT%2BXBxzz0h2LugBTozMHRmykSCe9IGirzBHv%2BHGkApq9vFRCo1oI13eqZIappoL1Fke2qq9Ar%2BgnR9XcRYUOPmdjUKiHgknKiWu44C7pNiz50JmyChydV4WnKrnwd6nVAvZCearLa85zIgvceS5D96Qm7NMQ0m8ryLfU0IJ%2Bnjqvaswp5fMxAY6pgHkjgrCpOdK59EZcNo%2BD%2FTqAowPSVDIlE6IjuBRgpyfWMwi4tLukom2l2RViS9RR1KAu8U677hfd7U6E555JdVdGGj3HGGWG7DUWrKuVUIuJDNsG%2FF2vudrRmPPARN8hoqdRlQTpkmNdL8h3AqGnkR%2BWaKMQMtiEuhL%2FF59KGfljoJwDL7nLKVo1%2BDlim%2FdGXshxIgyGh3MdPVu%2FMkgSczZUtFbiu9E&X-Amz-Signature=7a69f0002f6878ef39e071874f1a91d26ec0b01bf6fe8629143bd5306425f22d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYILVS5L%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAeALMXghm1dQIJEDVRowYAI0enzfX0OkxBReU6Y7NKuAiBNZt4l%2BQGyc73NjpKlCymUrKqY6CUpCCJeOlcu8L0QVSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMX5e07Ud2fACXNwBWKtwDKxCIYpW2BFMEdHchMB3y1SUsKMD179%2FyxzqGRLplc7AITm5c2bo43knmLmzvmEHseOt5tVmNElz1HPDBhQUzEn7w8GCJo4zX7pVdZm8mN53bh4S%2FCXWYEzIS%2F4C8Y3rO7kGIxMd6IBkuvAlEHwj8rWMTXXhRvjzxj9Zctp9FAjYhGKoXrQGQzUh9ri8fzTvYlbNK2CSjc76P1xnp6HKpB9iTOOgL1cTxcm%2B2ejbuSRwfZxL87EihGPYC6AH9mm5xvEZ%2BAKPkHPKFRfJtK0mVBe0tUjSt2ysroe9QsObrklua6Js4PlI5ZMcdy33Ml5DDdBoEpMFqDU0mu3Jn6kycPOxCe1c8K48gF27jPiHgLmT42o%2F7roFlPWOfzjJugiLkNpkUNuWuoHtKevvW%2Fye6jlGtrPGfV3bCZ%2FP%2FgUs8JSIxxNPJ2sV3mUcsiVur%2B8KwnbbYhFOBspi4MKT%2BXBxzz0h2LugBTozMHRmykSCe9IGirzBHv%2BHGkApq9vFRCo1oI13eqZIappoL1Fke2qq9Ar%2BgnR9XcRYUOPmdjUKiHgknKiWu44C7pNiz50JmyChydV4WnKrnwd6nVAvZCearLa85zIgvceS5D96Qm7NMQ0m8ryLfU0IJ%2Bnjqvaswp5fMxAY6pgHkjgrCpOdK59EZcNo%2BD%2FTqAowPSVDIlE6IjuBRgpyfWMwi4tLukom2l2RViS9RR1KAu8U677hfd7U6E555JdVdGGj3HGGWG7DUWrKuVUIuJDNsG%2FF2vudrRmPPARN8hoqdRlQTpkmNdL8h3AqGnkR%2BWaKMQMtiEuhL%2FF59KGfljoJwDL7nLKVo1%2BDlim%2FdGXshxIgyGh3MdPVu%2FMkgSczZUtFbiu9E&X-Amz-Signature=a0287a081726739d41ed2be7e7d78cc3997967243b1122c59868cefb6e75a9d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYILVS5L%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAeALMXghm1dQIJEDVRowYAI0enzfX0OkxBReU6Y7NKuAiBNZt4l%2BQGyc73NjpKlCymUrKqY6CUpCCJeOlcu8L0QVSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMX5e07Ud2fACXNwBWKtwDKxCIYpW2BFMEdHchMB3y1SUsKMD179%2FyxzqGRLplc7AITm5c2bo43knmLmzvmEHseOt5tVmNElz1HPDBhQUzEn7w8GCJo4zX7pVdZm8mN53bh4S%2FCXWYEzIS%2F4C8Y3rO7kGIxMd6IBkuvAlEHwj8rWMTXXhRvjzxj9Zctp9FAjYhGKoXrQGQzUh9ri8fzTvYlbNK2CSjc76P1xnp6HKpB9iTOOgL1cTxcm%2B2ejbuSRwfZxL87EihGPYC6AH9mm5xvEZ%2BAKPkHPKFRfJtK0mVBe0tUjSt2ysroe9QsObrklua6Js4PlI5ZMcdy33Ml5DDdBoEpMFqDU0mu3Jn6kycPOxCe1c8K48gF27jPiHgLmT42o%2F7roFlPWOfzjJugiLkNpkUNuWuoHtKevvW%2Fye6jlGtrPGfV3bCZ%2FP%2FgUs8JSIxxNPJ2sV3mUcsiVur%2B8KwnbbYhFOBspi4MKT%2BXBxzz0h2LugBTozMHRmykSCe9IGirzBHv%2BHGkApq9vFRCo1oI13eqZIappoL1Fke2qq9Ar%2BgnR9XcRYUOPmdjUKiHgknKiWu44C7pNiz50JmyChydV4WnKrnwd6nVAvZCearLa85zIgvceS5D96Qm7NMQ0m8ryLfU0IJ%2Bnjqvaswp5fMxAY6pgHkjgrCpOdK59EZcNo%2BD%2FTqAowPSVDIlE6IjuBRgpyfWMwi4tLukom2l2RViS9RR1KAu8U677hfd7U6E555JdVdGGj3HGGWG7DUWrKuVUIuJDNsG%2FF2vudrRmPPARN8hoqdRlQTpkmNdL8h3AqGnkR%2BWaKMQMtiEuhL%2FF59KGfljoJwDL7nLKVo1%2BDlim%2FdGXshxIgyGh3MdPVu%2FMkgSczZUtFbiu9E&X-Amz-Signature=7856ace4084b8032a29ea14c5ec7b994b43508313daadee61f3d289fd5ce470d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYILVS5L%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAeALMXghm1dQIJEDVRowYAI0enzfX0OkxBReU6Y7NKuAiBNZt4l%2BQGyc73NjpKlCymUrKqY6CUpCCJeOlcu8L0QVSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMX5e07Ud2fACXNwBWKtwDKxCIYpW2BFMEdHchMB3y1SUsKMD179%2FyxzqGRLplc7AITm5c2bo43knmLmzvmEHseOt5tVmNElz1HPDBhQUzEn7w8GCJo4zX7pVdZm8mN53bh4S%2FCXWYEzIS%2F4C8Y3rO7kGIxMd6IBkuvAlEHwj8rWMTXXhRvjzxj9Zctp9FAjYhGKoXrQGQzUh9ri8fzTvYlbNK2CSjc76P1xnp6HKpB9iTOOgL1cTxcm%2B2ejbuSRwfZxL87EihGPYC6AH9mm5xvEZ%2BAKPkHPKFRfJtK0mVBe0tUjSt2ysroe9QsObrklua6Js4PlI5ZMcdy33Ml5DDdBoEpMFqDU0mu3Jn6kycPOxCe1c8K48gF27jPiHgLmT42o%2F7roFlPWOfzjJugiLkNpkUNuWuoHtKevvW%2Fye6jlGtrPGfV3bCZ%2FP%2FgUs8JSIxxNPJ2sV3mUcsiVur%2B8KwnbbYhFOBspi4MKT%2BXBxzz0h2LugBTozMHRmykSCe9IGirzBHv%2BHGkApq9vFRCo1oI13eqZIappoL1Fke2qq9Ar%2BgnR9XcRYUOPmdjUKiHgknKiWu44C7pNiz50JmyChydV4WnKrnwd6nVAvZCearLa85zIgvceS5D96Qm7NMQ0m8ryLfU0IJ%2Bnjqvaswp5fMxAY6pgHkjgrCpOdK59EZcNo%2BD%2FTqAowPSVDIlE6IjuBRgpyfWMwi4tLukom2l2RViS9RR1KAu8U677hfd7U6E555JdVdGGj3HGGWG7DUWrKuVUIuJDNsG%2FF2vudrRmPPARN8hoqdRlQTpkmNdL8h3AqGnkR%2BWaKMQMtiEuhL%2FF59KGfljoJwDL7nLKVo1%2BDlim%2FdGXshxIgyGh3MdPVu%2FMkgSczZUtFbiu9E&X-Amz-Signature=00c2e3b13d2dd8e720067deeb773e5dfd5a02a86557f28997cd09fa5ccf52e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYILVS5L%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAeALMXghm1dQIJEDVRowYAI0enzfX0OkxBReU6Y7NKuAiBNZt4l%2BQGyc73NjpKlCymUrKqY6CUpCCJeOlcu8L0QVSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMX5e07Ud2fACXNwBWKtwDKxCIYpW2BFMEdHchMB3y1SUsKMD179%2FyxzqGRLplc7AITm5c2bo43knmLmzvmEHseOt5tVmNElz1HPDBhQUzEn7w8GCJo4zX7pVdZm8mN53bh4S%2FCXWYEzIS%2F4C8Y3rO7kGIxMd6IBkuvAlEHwj8rWMTXXhRvjzxj9Zctp9FAjYhGKoXrQGQzUh9ri8fzTvYlbNK2CSjc76P1xnp6HKpB9iTOOgL1cTxcm%2B2ejbuSRwfZxL87EihGPYC6AH9mm5xvEZ%2BAKPkHPKFRfJtK0mVBe0tUjSt2ysroe9QsObrklua6Js4PlI5ZMcdy33Ml5DDdBoEpMFqDU0mu3Jn6kycPOxCe1c8K48gF27jPiHgLmT42o%2F7roFlPWOfzjJugiLkNpkUNuWuoHtKevvW%2Fye6jlGtrPGfV3bCZ%2FP%2FgUs8JSIxxNPJ2sV3mUcsiVur%2B8KwnbbYhFOBspi4MKT%2BXBxzz0h2LugBTozMHRmykSCe9IGirzBHv%2BHGkApq9vFRCo1oI13eqZIappoL1Fke2qq9Ar%2BgnR9XcRYUOPmdjUKiHgknKiWu44C7pNiz50JmyChydV4WnKrnwd6nVAvZCearLa85zIgvceS5D96Qm7NMQ0m8ryLfU0IJ%2Bnjqvaswp5fMxAY6pgHkjgrCpOdK59EZcNo%2BD%2FTqAowPSVDIlE6IjuBRgpyfWMwi4tLukom2l2RViS9RR1KAu8U677hfd7U6E555JdVdGGj3HGGWG7DUWrKuVUIuJDNsG%2FF2vudrRmPPARN8hoqdRlQTpkmNdL8h3AqGnkR%2BWaKMQMtiEuhL%2FF59KGfljoJwDL7nLKVo1%2BDlim%2FdGXshxIgyGh3MdPVu%2FMkgSczZUtFbiu9E&X-Amz-Signature=971b7ce4d095cd8115f8e086aaa44790d4bc6dc24088607f60ae1242bbf320ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYILVS5L%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAeALMXghm1dQIJEDVRowYAI0enzfX0OkxBReU6Y7NKuAiBNZt4l%2BQGyc73NjpKlCymUrKqY6CUpCCJeOlcu8L0QVSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMX5e07Ud2fACXNwBWKtwDKxCIYpW2BFMEdHchMB3y1SUsKMD179%2FyxzqGRLplc7AITm5c2bo43knmLmzvmEHseOt5tVmNElz1HPDBhQUzEn7w8GCJo4zX7pVdZm8mN53bh4S%2FCXWYEzIS%2F4C8Y3rO7kGIxMd6IBkuvAlEHwj8rWMTXXhRvjzxj9Zctp9FAjYhGKoXrQGQzUh9ri8fzTvYlbNK2CSjc76P1xnp6HKpB9iTOOgL1cTxcm%2B2ejbuSRwfZxL87EihGPYC6AH9mm5xvEZ%2BAKPkHPKFRfJtK0mVBe0tUjSt2ysroe9QsObrklua6Js4PlI5ZMcdy33Ml5DDdBoEpMFqDU0mu3Jn6kycPOxCe1c8K48gF27jPiHgLmT42o%2F7roFlPWOfzjJugiLkNpkUNuWuoHtKevvW%2Fye6jlGtrPGfV3bCZ%2FP%2FgUs8JSIxxNPJ2sV3mUcsiVur%2B8KwnbbYhFOBspi4MKT%2BXBxzz0h2LugBTozMHRmykSCe9IGirzBHv%2BHGkApq9vFRCo1oI13eqZIappoL1Fke2qq9Ar%2BgnR9XcRYUOPmdjUKiHgknKiWu44C7pNiz50JmyChydV4WnKrnwd6nVAvZCearLa85zIgvceS5D96Qm7NMQ0m8ryLfU0IJ%2Bnjqvaswp5fMxAY6pgHkjgrCpOdK59EZcNo%2BD%2FTqAowPSVDIlE6IjuBRgpyfWMwi4tLukom2l2RViS9RR1KAu8U677hfd7U6E555JdVdGGj3HGGWG7DUWrKuVUIuJDNsG%2FF2vudrRmPPARN8hoqdRlQTpkmNdL8h3AqGnkR%2BWaKMQMtiEuhL%2FF59KGfljoJwDL7nLKVo1%2BDlim%2FdGXshxIgyGh3MdPVu%2FMkgSczZUtFbiu9E&X-Amz-Signature=0780ff5d57717838388a90ebc2d75dfe8c9ed835c2286dd257dd8f6de6e8c79a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYILVS5L%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAeALMXghm1dQIJEDVRowYAI0enzfX0OkxBReU6Y7NKuAiBNZt4l%2BQGyc73NjpKlCymUrKqY6CUpCCJeOlcu8L0QVSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMX5e07Ud2fACXNwBWKtwDKxCIYpW2BFMEdHchMB3y1SUsKMD179%2FyxzqGRLplc7AITm5c2bo43knmLmzvmEHseOt5tVmNElz1HPDBhQUzEn7w8GCJo4zX7pVdZm8mN53bh4S%2FCXWYEzIS%2F4C8Y3rO7kGIxMd6IBkuvAlEHwj8rWMTXXhRvjzxj9Zctp9FAjYhGKoXrQGQzUh9ri8fzTvYlbNK2CSjc76P1xnp6HKpB9iTOOgL1cTxcm%2B2ejbuSRwfZxL87EihGPYC6AH9mm5xvEZ%2BAKPkHPKFRfJtK0mVBe0tUjSt2ysroe9QsObrklua6Js4PlI5ZMcdy33Ml5DDdBoEpMFqDU0mu3Jn6kycPOxCe1c8K48gF27jPiHgLmT42o%2F7roFlPWOfzjJugiLkNpkUNuWuoHtKevvW%2Fye6jlGtrPGfV3bCZ%2FP%2FgUs8JSIxxNPJ2sV3mUcsiVur%2B8KwnbbYhFOBspi4MKT%2BXBxzz0h2LugBTozMHRmykSCe9IGirzBHv%2BHGkApq9vFRCo1oI13eqZIappoL1Fke2qq9Ar%2BgnR9XcRYUOPmdjUKiHgknKiWu44C7pNiz50JmyChydV4WnKrnwd6nVAvZCearLa85zIgvceS5D96Qm7NMQ0m8ryLfU0IJ%2Bnjqvaswp5fMxAY6pgHkjgrCpOdK59EZcNo%2BD%2FTqAowPSVDIlE6IjuBRgpyfWMwi4tLukom2l2RViS9RR1KAu8U677hfd7U6E555JdVdGGj3HGGWG7DUWrKuVUIuJDNsG%2FF2vudrRmPPARN8hoqdRlQTpkmNdL8h3AqGnkR%2BWaKMQMtiEuhL%2FF59KGfljoJwDL7nLKVo1%2BDlim%2FdGXshxIgyGh3MdPVu%2FMkgSczZUtFbiu9E&X-Amz-Signature=5be234fd6527e8fd381fb1ae26d858365dc7fdc2952edff9c0e1117e1200e120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYILVS5L%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAeALMXghm1dQIJEDVRowYAI0enzfX0OkxBReU6Y7NKuAiBNZt4l%2BQGyc73NjpKlCymUrKqY6CUpCCJeOlcu8L0QVSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMX5e07Ud2fACXNwBWKtwDKxCIYpW2BFMEdHchMB3y1SUsKMD179%2FyxzqGRLplc7AITm5c2bo43knmLmzvmEHseOt5tVmNElz1HPDBhQUzEn7w8GCJo4zX7pVdZm8mN53bh4S%2FCXWYEzIS%2F4C8Y3rO7kGIxMd6IBkuvAlEHwj8rWMTXXhRvjzxj9Zctp9FAjYhGKoXrQGQzUh9ri8fzTvYlbNK2CSjc76P1xnp6HKpB9iTOOgL1cTxcm%2B2ejbuSRwfZxL87EihGPYC6AH9mm5xvEZ%2BAKPkHPKFRfJtK0mVBe0tUjSt2ysroe9QsObrklua6Js4PlI5ZMcdy33Ml5DDdBoEpMFqDU0mu3Jn6kycPOxCe1c8K48gF27jPiHgLmT42o%2F7roFlPWOfzjJugiLkNpkUNuWuoHtKevvW%2Fye6jlGtrPGfV3bCZ%2FP%2FgUs8JSIxxNPJ2sV3mUcsiVur%2B8KwnbbYhFOBspi4MKT%2BXBxzz0h2LugBTozMHRmykSCe9IGirzBHv%2BHGkApq9vFRCo1oI13eqZIappoL1Fke2qq9Ar%2BgnR9XcRYUOPmdjUKiHgknKiWu44C7pNiz50JmyChydV4WnKrnwd6nVAvZCearLa85zIgvceS5D96Qm7NMQ0m8ryLfU0IJ%2Bnjqvaswp5fMxAY6pgHkjgrCpOdK59EZcNo%2BD%2FTqAowPSVDIlE6IjuBRgpyfWMwi4tLukom2l2RViS9RR1KAu8U677hfd7U6E555JdVdGGj3HGGWG7DUWrKuVUIuJDNsG%2FF2vudrRmPPARN8hoqdRlQTpkmNdL8h3AqGnkR%2BWaKMQMtiEuhL%2FF59KGfljoJwDL7nLKVo1%2BDlim%2FdGXshxIgyGh3MdPVu%2FMkgSczZUtFbiu9E&X-Amz-Signature=afc62700a98119816c570ce3e5646f224de336d2ee6da2bf170594b6c21f7931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYILVS5L%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAeALMXghm1dQIJEDVRowYAI0enzfX0OkxBReU6Y7NKuAiBNZt4l%2BQGyc73NjpKlCymUrKqY6CUpCCJeOlcu8L0QVSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMX5e07Ud2fACXNwBWKtwDKxCIYpW2BFMEdHchMB3y1SUsKMD179%2FyxzqGRLplc7AITm5c2bo43knmLmzvmEHseOt5tVmNElz1HPDBhQUzEn7w8GCJo4zX7pVdZm8mN53bh4S%2FCXWYEzIS%2F4C8Y3rO7kGIxMd6IBkuvAlEHwj8rWMTXXhRvjzxj9Zctp9FAjYhGKoXrQGQzUh9ri8fzTvYlbNK2CSjc76P1xnp6HKpB9iTOOgL1cTxcm%2B2ejbuSRwfZxL87EihGPYC6AH9mm5xvEZ%2BAKPkHPKFRfJtK0mVBe0tUjSt2ysroe9QsObrklua6Js4PlI5ZMcdy33Ml5DDdBoEpMFqDU0mu3Jn6kycPOxCe1c8K48gF27jPiHgLmT42o%2F7roFlPWOfzjJugiLkNpkUNuWuoHtKevvW%2Fye6jlGtrPGfV3bCZ%2FP%2FgUs8JSIxxNPJ2sV3mUcsiVur%2B8KwnbbYhFOBspi4MKT%2BXBxzz0h2LugBTozMHRmykSCe9IGirzBHv%2BHGkApq9vFRCo1oI13eqZIappoL1Fke2qq9Ar%2BgnR9XcRYUOPmdjUKiHgknKiWu44C7pNiz50JmyChydV4WnKrnwd6nVAvZCearLa85zIgvceS5D96Qm7NMQ0m8ryLfU0IJ%2Bnjqvaswp5fMxAY6pgHkjgrCpOdK59EZcNo%2BD%2FTqAowPSVDIlE6IjuBRgpyfWMwi4tLukom2l2RViS9RR1KAu8U677hfd7U6E555JdVdGGj3HGGWG7DUWrKuVUIuJDNsG%2FF2vudrRmPPARN8hoqdRlQTpkmNdL8h3AqGnkR%2BWaKMQMtiEuhL%2FF59KGfljoJwDL7nLKVo1%2BDlim%2FdGXshxIgyGh3MdPVu%2FMkgSczZUtFbiu9E&X-Amz-Signature=f3e54c9ef3793bb63e83771edc94df5c6710b12f7505fa80ef6eca496d16e98e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
