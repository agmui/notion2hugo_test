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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBFX55VF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC8capFIJYVg27uEtIG7OL1CoQyxZAEAQ1IFVZbCqzdEQIhAIH8Qnf%2FG0%2FuXeMKjcUwBDI8hdM%2BxmL29Q34%2F6IbbtP%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgzTfJo996WZSlUyc6Yq3AOlSiEyR5AlvRrzqc0xXDKrOKCI8ZKbIK54lqIKWHWbRgUx8mQohys5K2prQF37wNUVevIDqYELcb5kDjNsqRUweMwaQ%2BcbtaG%2F9jVHr4xrOgOasPnybzxbH6R3OY7ycdVtRWnua8BSYidHbUFXjsxhIx8Kp1ZxCY2ZZIGj%2FwKistr7ILLsml%2BdWbYi2MnOZwbZk%2BQj%2Frcd%2BNXFTuAYseUsFFmjHtetadeD7QSo9cWP7flnmvseytCtmbj2MhsbGCgW7JFd3IInZjjsagCsO9jE39upuUsTOS4R0h9QUZG%2Fn7GMwJ5b6YYgM0uNiqwNbGbKZFtMCwPO6VLZQKfJieoTPqTKXUl0q7Wp4Poes2xi2k%2Fo43MV3olSWPRtE3dQ4X2tJhQoLPJjzAw%2F7KvaT7yRbQ6mY58ru8Gdo403LdBPd%2FL3NSlqJZgtmh3O7f7csiu92tv33wuj0Bzbsq7S7ISCLxHq1mts1UwDB%2BrM7FR%2BOUy%2FhvJIXLgjI6BkLkooj5%2Fj%2BJ0v45MJeRaB%2FKS3V%2F%2BA2LIaLCubpjxklb%2FczAS%2Fnu0RseVY5GEoPYr7aaB3ywr%2BGNfcvsHIaqAGEDnDvU%2FE6RyJL0MTLyLuzsdew3n7R605gBxV8o4uZ6AiaTD2zszEBjqkARUoNX%2By%2FoWzKNpzzCOzCyljXTmSIvi7C7jc%2BylGFrWKhm5BHv9Hz2L%2FoY9jEw3mSmRYQcEaTIAQ9QTW6JYyMYg5FPTEYwsK%2B62y4XyHkSMOl3pTeFPDOJaqQ2xcpo0Z9EjGohebcvQ01McSmgiSL40muw8r%2FjCVaEmQpEXK5c3arJxn7iAMcpxHyQZ3RGUzmYCExX1FElabuYWRE0FLLvUGP2nj&X-Amz-Signature=03fc725b47fd2dce5052f05ccb36bba3afe020dc2903b5c088c649a8549343f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBFX55VF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC8capFIJYVg27uEtIG7OL1CoQyxZAEAQ1IFVZbCqzdEQIhAIH8Qnf%2FG0%2FuXeMKjcUwBDI8hdM%2BxmL29Q34%2F6IbbtP%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgzTfJo996WZSlUyc6Yq3AOlSiEyR5AlvRrzqc0xXDKrOKCI8ZKbIK54lqIKWHWbRgUx8mQohys5K2prQF37wNUVevIDqYELcb5kDjNsqRUweMwaQ%2BcbtaG%2F9jVHr4xrOgOasPnybzxbH6R3OY7ycdVtRWnua8BSYidHbUFXjsxhIx8Kp1ZxCY2ZZIGj%2FwKistr7ILLsml%2BdWbYi2MnOZwbZk%2BQj%2Frcd%2BNXFTuAYseUsFFmjHtetadeD7QSo9cWP7flnmvseytCtmbj2MhsbGCgW7JFd3IInZjjsagCsO9jE39upuUsTOS4R0h9QUZG%2Fn7GMwJ5b6YYgM0uNiqwNbGbKZFtMCwPO6VLZQKfJieoTPqTKXUl0q7Wp4Poes2xi2k%2Fo43MV3olSWPRtE3dQ4X2tJhQoLPJjzAw%2F7KvaT7yRbQ6mY58ru8Gdo403LdBPd%2FL3NSlqJZgtmh3O7f7csiu92tv33wuj0Bzbsq7S7ISCLxHq1mts1UwDB%2BrM7FR%2BOUy%2FhvJIXLgjI6BkLkooj5%2Fj%2BJ0v45MJeRaB%2FKS3V%2F%2BA2LIaLCubpjxklb%2FczAS%2Fnu0RseVY5GEoPYr7aaB3ywr%2BGNfcvsHIaqAGEDnDvU%2FE6RyJL0MTLyLuzsdew3n7R605gBxV8o4uZ6AiaTD2zszEBjqkARUoNX%2By%2FoWzKNpzzCOzCyljXTmSIvi7C7jc%2BylGFrWKhm5BHv9Hz2L%2FoY9jEw3mSmRYQcEaTIAQ9QTW6JYyMYg5FPTEYwsK%2B62y4XyHkSMOl3pTeFPDOJaqQ2xcpo0Z9EjGohebcvQ01McSmgiSL40muw8r%2FjCVaEmQpEXK5c3arJxn7iAMcpxHyQZ3RGUzmYCExX1FElabuYWRE0FLLvUGP2nj&X-Amz-Signature=5f76054fbe16b9d9ffc2749c21e449eedb7bdd79de0c51fb224422c21bf129e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBFX55VF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC8capFIJYVg27uEtIG7OL1CoQyxZAEAQ1IFVZbCqzdEQIhAIH8Qnf%2FG0%2FuXeMKjcUwBDI8hdM%2BxmL29Q34%2F6IbbtP%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgzTfJo996WZSlUyc6Yq3AOlSiEyR5AlvRrzqc0xXDKrOKCI8ZKbIK54lqIKWHWbRgUx8mQohys5K2prQF37wNUVevIDqYELcb5kDjNsqRUweMwaQ%2BcbtaG%2F9jVHr4xrOgOasPnybzxbH6R3OY7ycdVtRWnua8BSYidHbUFXjsxhIx8Kp1ZxCY2ZZIGj%2FwKistr7ILLsml%2BdWbYi2MnOZwbZk%2BQj%2Frcd%2BNXFTuAYseUsFFmjHtetadeD7QSo9cWP7flnmvseytCtmbj2MhsbGCgW7JFd3IInZjjsagCsO9jE39upuUsTOS4R0h9QUZG%2Fn7GMwJ5b6YYgM0uNiqwNbGbKZFtMCwPO6VLZQKfJieoTPqTKXUl0q7Wp4Poes2xi2k%2Fo43MV3olSWPRtE3dQ4X2tJhQoLPJjzAw%2F7KvaT7yRbQ6mY58ru8Gdo403LdBPd%2FL3NSlqJZgtmh3O7f7csiu92tv33wuj0Bzbsq7S7ISCLxHq1mts1UwDB%2BrM7FR%2BOUy%2FhvJIXLgjI6BkLkooj5%2Fj%2BJ0v45MJeRaB%2FKS3V%2F%2BA2LIaLCubpjxklb%2FczAS%2Fnu0RseVY5GEoPYr7aaB3ywr%2BGNfcvsHIaqAGEDnDvU%2FE6RyJL0MTLyLuzsdew3n7R605gBxV8o4uZ6AiaTD2zszEBjqkARUoNX%2By%2FoWzKNpzzCOzCyljXTmSIvi7C7jc%2BylGFrWKhm5BHv9Hz2L%2FoY9jEw3mSmRYQcEaTIAQ9QTW6JYyMYg5FPTEYwsK%2B62y4XyHkSMOl3pTeFPDOJaqQ2xcpo0Z9EjGohebcvQ01McSmgiSL40muw8r%2FjCVaEmQpEXK5c3arJxn7iAMcpxHyQZ3RGUzmYCExX1FElabuYWRE0FLLvUGP2nj&X-Amz-Signature=1077fde8a32cf76474edbbb0c76365c65b40a801818ee70140c22ec4b318e9db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBFX55VF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC8capFIJYVg27uEtIG7OL1CoQyxZAEAQ1IFVZbCqzdEQIhAIH8Qnf%2FG0%2FuXeMKjcUwBDI8hdM%2BxmL29Q34%2F6IbbtP%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgzTfJo996WZSlUyc6Yq3AOlSiEyR5AlvRrzqc0xXDKrOKCI8ZKbIK54lqIKWHWbRgUx8mQohys5K2prQF37wNUVevIDqYELcb5kDjNsqRUweMwaQ%2BcbtaG%2F9jVHr4xrOgOasPnybzxbH6R3OY7ycdVtRWnua8BSYidHbUFXjsxhIx8Kp1ZxCY2ZZIGj%2FwKistr7ILLsml%2BdWbYi2MnOZwbZk%2BQj%2Frcd%2BNXFTuAYseUsFFmjHtetadeD7QSo9cWP7flnmvseytCtmbj2MhsbGCgW7JFd3IInZjjsagCsO9jE39upuUsTOS4R0h9QUZG%2Fn7GMwJ5b6YYgM0uNiqwNbGbKZFtMCwPO6VLZQKfJieoTPqTKXUl0q7Wp4Poes2xi2k%2Fo43MV3olSWPRtE3dQ4X2tJhQoLPJjzAw%2F7KvaT7yRbQ6mY58ru8Gdo403LdBPd%2FL3NSlqJZgtmh3O7f7csiu92tv33wuj0Bzbsq7S7ISCLxHq1mts1UwDB%2BrM7FR%2BOUy%2FhvJIXLgjI6BkLkooj5%2Fj%2BJ0v45MJeRaB%2FKS3V%2F%2BA2LIaLCubpjxklb%2FczAS%2Fnu0RseVY5GEoPYr7aaB3ywr%2BGNfcvsHIaqAGEDnDvU%2FE6RyJL0MTLyLuzsdew3n7R605gBxV8o4uZ6AiaTD2zszEBjqkARUoNX%2By%2FoWzKNpzzCOzCyljXTmSIvi7C7jc%2BylGFrWKhm5BHv9Hz2L%2FoY9jEw3mSmRYQcEaTIAQ9QTW6JYyMYg5FPTEYwsK%2B62y4XyHkSMOl3pTeFPDOJaqQ2xcpo0Z9EjGohebcvQ01McSmgiSL40muw8r%2FjCVaEmQpEXK5c3arJxn7iAMcpxHyQZ3RGUzmYCExX1FElabuYWRE0FLLvUGP2nj&X-Amz-Signature=991d100d458dc59f896283e628f3acc7fe5c959fc2e8e1a98cb9d93f3098eae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBFX55VF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC8capFIJYVg27uEtIG7OL1CoQyxZAEAQ1IFVZbCqzdEQIhAIH8Qnf%2FG0%2FuXeMKjcUwBDI8hdM%2BxmL29Q34%2F6IbbtP%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgzTfJo996WZSlUyc6Yq3AOlSiEyR5AlvRrzqc0xXDKrOKCI8ZKbIK54lqIKWHWbRgUx8mQohys5K2prQF37wNUVevIDqYELcb5kDjNsqRUweMwaQ%2BcbtaG%2F9jVHr4xrOgOasPnybzxbH6R3OY7ycdVtRWnua8BSYidHbUFXjsxhIx8Kp1ZxCY2ZZIGj%2FwKistr7ILLsml%2BdWbYi2MnOZwbZk%2BQj%2Frcd%2BNXFTuAYseUsFFmjHtetadeD7QSo9cWP7flnmvseytCtmbj2MhsbGCgW7JFd3IInZjjsagCsO9jE39upuUsTOS4R0h9QUZG%2Fn7GMwJ5b6YYgM0uNiqwNbGbKZFtMCwPO6VLZQKfJieoTPqTKXUl0q7Wp4Poes2xi2k%2Fo43MV3olSWPRtE3dQ4X2tJhQoLPJjzAw%2F7KvaT7yRbQ6mY58ru8Gdo403LdBPd%2FL3NSlqJZgtmh3O7f7csiu92tv33wuj0Bzbsq7S7ISCLxHq1mts1UwDB%2BrM7FR%2BOUy%2FhvJIXLgjI6BkLkooj5%2Fj%2BJ0v45MJeRaB%2FKS3V%2F%2BA2LIaLCubpjxklb%2FczAS%2Fnu0RseVY5GEoPYr7aaB3ywr%2BGNfcvsHIaqAGEDnDvU%2FE6RyJL0MTLyLuzsdew3n7R605gBxV8o4uZ6AiaTD2zszEBjqkARUoNX%2By%2FoWzKNpzzCOzCyljXTmSIvi7C7jc%2BylGFrWKhm5BHv9Hz2L%2FoY9jEw3mSmRYQcEaTIAQ9QTW6JYyMYg5FPTEYwsK%2B62y4XyHkSMOl3pTeFPDOJaqQ2xcpo0Z9EjGohebcvQ01McSmgiSL40muw8r%2FjCVaEmQpEXK5c3arJxn7iAMcpxHyQZ3RGUzmYCExX1FElabuYWRE0FLLvUGP2nj&X-Amz-Signature=411fc3b0fafe78d161dcf07f6e16c9ab8b08eed928d6b764a2fb2b6116964ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBFX55VF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC8capFIJYVg27uEtIG7OL1CoQyxZAEAQ1IFVZbCqzdEQIhAIH8Qnf%2FG0%2FuXeMKjcUwBDI8hdM%2BxmL29Q34%2F6IbbtP%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgzTfJo996WZSlUyc6Yq3AOlSiEyR5AlvRrzqc0xXDKrOKCI8ZKbIK54lqIKWHWbRgUx8mQohys5K2prQF37wNUVevIDqYELcb5kDjNsqRUweMwaQ%2BcbtaG%2F9jVHr4xrOgOasPnybzxbH6R3OY7ycdVtRWnua8BSYidHbUFXjsxhIx8Kp1ZxCY2ZZIGj%2FwKistr7ILLsml%2BdWbYi2MnOZwbZk%2BQj%2Frcd%2BNXFTuAYseUsFFmjHtetadeD7QSo9cWP7flnmvseytCtmbj2MhsbGCgW7JFd3IInZjjsagCsO9jE39upuUsTOS4R0h9QUZG%2Fn7GMwJ5b6YYgM0uNiqwNbGbKZFtMCwPO6VLZQKfJieoTPqTKXUl0q7Wp4Poes2xi2k%2Fo43MV3olSWPRtE3dQ4X2tJhQoLPJjzAw%2F7KvaT7yRbQ6mY58ru8Gdo403LdBPd%2FL3NSlqJZgtmh3O7f7csiu92tv33wuj0Bzbsq7S7ISCLxHq1mts1UwDB%2BrM7FR%2BOUy%2FhvJIXLgjI6BkLkooj5%2Fj%2BJ0v45MJeRaB%2FKS3V%2F%2BA2LIaLCubpjxklb%2FczAS%2Fnu0RseVY5GEoPYr7aaB3ywr%2BGNfcvsHIaqAGEDnDvU%2FE6RyJL0MTLyLuzsdew3n7R605gBxV8o4uZ6AiaTD2zszEBjqkARUoNX%2By%2FoWzKNpzzCOzCyljXTmSIvi7C7jc%2BylGFrWKhm5BHv9Hz2L%2FoY9jEw3mSmRYQcEaTIAQ9QTW6JYyMYg5FPTEYwsK%2B62y4XyHkSMOl3pTeFPDOJaqQ2xcpo0Z9EjGohebcvQ01McSmgiSL40muw8r%2FjCVaEmQpEXK5c3arJxn7iAMcpxHyQZ3RGUzmYCExX1FElabuYWRE0FLLvUGP2nj&X-Amz-Signature=56b9c952666df61a3669867583ca3bae05d16450a6075469361b80447f791180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBFX55VF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC8capFIJYVg27uEtIG7OL1CoQyxZAEAQ1IFVZbCqzdEQIhAIH8Qnf%2FG0%2FuXeMKjcUwBDI8hdM%2BxmL29Q34%2F6IbbtP%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgzTfJo996WZSlUyc6Yq3AOlSiEyR5AlvRrzqc0xXDKrOKCI8ZKbIK54lqIKWHWbRgUx8mQohys5K2prQF37wNUVevIDqYELcb5kDjNsqRUweMwaQ%2BcbtaG%2F9jVHr4xrOgOasPnybzxbH6R3OY7ycdVtRWnua8BSYidHbUFXjsxhIx8Kp1ZxCY2ZZIGj%2FwKistr7ILLsml%2BdWbYi2MnOZwbZk%2BQj%2Frcd%2BNXFTuAYseUsFFmjHtetadeD7QSo9cWP7flnmvseytCtmbj2MhsbGCgW7JFd3IInZjjsagCsO9jE39upuUsTOS4R0h9QUZG%2Fn7GMwJ5b6YYgM0uNiqwNbGbKZFtMCwPO6VLZQKfJieoTPqTKXUl0q7Wp4Poes2xi2k%2Fo43MV3olSWPRtE3dQ4X2tJhQoLPJjzAw%2F7KvaT7yRbQ6mY58ru8Gdo403LdBPd%2FL3NSlqJZgtmh3O7f7csiu92tv33wuj0Bzbsq7S7ISCLxHq1mts1UwDB%2BrM7FR%2BOUy%2FhvJIXLgjI6BkLkooj5%2Fj%2BJ0v45MJeRaB%2FKS3V%2F%2BA2LIaLCubpjxklb%2FczAS%2Fnu0RseVY5GEoPYr7aaB3ywr%2BGNfcvsHIaqAGEDnDvU%2FE6RyJL0MTLyLuzsdew3n7R605gBxV8o4uZ6AiaTD2zszEBjqkARUoNX%2By%2FoWzKNpzzCOzCyljXTmSIvi7C7jc%2BylGFrWKhm5BHv9Hz2L%2FoY9jEw3mSmRYQcEaTIAQ9QTW6JYyMYg5FPTEYwsK%2B62y4XyHkSMOl3pTeFPDOJaqQ2xcpo0Z9EjGohebcvQ01McSmgiSL40muw8r%2FjCVaEmQpEXK5c3arJxn7iAMcpxHyQZ3RGUzmYCExX1FElabuYWRE0FLLvUGP2nj&X-Amz-Signature=ab1d9ab8fc18ec4257d4142299069dbca58d4e963beaa547cc67f615a90fb05c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBFX55VF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC8capFIJYVg27uEtIG7OL1CoQyxZAEAQ1IFVZbCqzdEQIhAIH8Qnf%2FG0%2FuXeMKjcUwBDI8hdM%2BxmL29Q34%2F6IbbtP%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgzTfJo996WZSlUyc6Yq3AOlSiEyR5AlvRrzqc0xXDKrOKCI8ZKbIK54lqIKWHWbRgUx8mQohys5K2prQF37wNUVevIDqYELcb5kDjNsqRUweMwaQ%2BcbtaG%2F9jVHr4xrOgOasPnybzxbH6R3OY7ycdVtRWnua8BSYidHbUFXjsxhIx8Kp1ZxCY2ZZIGj%2FwKistr7ILLsml%2BdWbYi2MnOZwbZk%2BQj%2Frcd%2BNXFTuAYseUsFFmjHtetadeD7QSo9cWP7flnmvseytCtmbj2MhsbGCgW7JFd3IInZjjsagCsO9jE39upuUsTOS4R0h9QUZG%2Fn7GMwJ5b6YYgM0uNiqwNbGbKZFtMCwPO6VLZQKfJieoTPqTKXUl0q7Wp4Poes2xi2k%2Fo43MV3olSWPRtE3dQ4X2tJhQoLPJjzAw%2F7KvaT7yRbQ6mY58ru8Gdo403LdBPd%2FL3NSlqJZgtmh3O7f7csiu92tv33wuj0Bzbsq7S7ISCLxHq1mts1UwDB%2BrM7FR%2BOUy%2FhvJIXLgjI6BkLkooj5%2Fj%2BJ0v45MJeRaB%2FKS3V%2F%2BA2LIaLCubpjxklb%2FczAS%2Fnu0RseVY5GEoPYr7aaB3ywr%2BGNfcvsHIaqAGEDnDvU%2FE6RyJL0MTLyLuzsdew3n7R605gBxV8o4uZ6AiaTD2zszEBjqkARUoNX%2By%2FoWzKNpzzCOzCyljXTmSIvi7C7jc%2BylGFrWKhm5BHv9Hz2L%2FoY9jEw3mSmRYQcEaTIAQ9QTW6JYyMYg5FPTEYwsK%2B62y4XyHkSMOl3pTeFPDOJaqQ2xcpo0Z9EjGohebcvQ01McSmgiSL40muw8r%2FjCVaEmQpEXK5c3arJxn7iAMcpxHyQZ3RGUzmYCExX1FElabuYWRE0FLLvUGP2nj&X-Amz-Signature=8dc8098c568f93ece8284f8455107ddff3ea461c9d1f0342d146b054ac438a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBFX55VF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC8capFIJYVg27uEtIG7OL1CoQyxZAEAQ1IFVZbCqzdEQIhAIH8Qnf%2FG0%2FuXeMKjcUwBDI8hdM%2BxmL29Q34%2F6IbbtP%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgzTfJo996WZSlUyc6Yq3AOlSiEyR5AlvRrzqc0xXDKrOKCI8ZKbIK54lqIKWHWbRgUx8mQohys5K2prQF37wNUVevIDqYELcb5kDjNsqRUweMwaQ%2BcbtaG%2F9jVHr4xrOgOasPnybzxbH6R3OY7ycdVtRWnua8BSYidHbUFXjsxhIx8Kp1ZxCY2ZZIGj%2FwKistr7ILLsml%2BdWbYi2MnOZwbZk%2BQj%2Frcd%2BNXFTuAYseUsFFmjHtetadeD7QSo9cWP7flnmvseytCtmbj2MhsbGCgW7JFd3IInZjjsagCsO9jE39upuUsTOS4R0h9QUZG%2Fn7GMwJ5b6YYgM0uNiqwNbGbKZFtMCwPO6VLZQKfJieoTPqTKXUl0q7Wp4Poes2xi2k%2Fo43MV3olSWPRtE3dQ4X2tJhQoLPJjzAw%2F7KvaT7yRbQ6mY58ru8Gdo403LdBPd%2FL3NSlqJZgtmh3O7f7csiu92tv33wuj0Bzbsq7S7ISCLxHq1mts1UwDB%2BrM7FR%2BOUy%2FhvJIXLgjI6BkLkooj5%2Fj%2BJ0v45MJeRaB%2FKS3V%2F%2BA2LIaLCubpjxklb%2FczAS%2Fnu0RseVY5GEoPYr7aaB3ywr%2BGNfcvsHIaqAGEDnDvU%2FE6RyJL0MTLyLuzsdew3n7R605gBxV8o4uZ6AiaTD2zszEBjqkARUoNX%2By%2FoWzKNpzzCOzCyljXTmSIvi7C7jc%2BylGFrWKhm5BHv9Hz2L%2FoY9jEw3mSmRYQcEaTIAQ9QTW6JYyMYg5FPTEYwsK%2B62y4XyHkSMOl3pTeFPDOJaqQ2xcpo0Z9EjGohebcvQ01McSmgiSL40muw8r%2FjCVaEmQpEXK5c3arJxn7iAMcpxHyQZ3RGUzmYCExX1FElabuYWRE0FLLvUGP2nj&X-Amz-Signature=4cb309df65aedf49276344fc061362b4f5a942fa4d0a48f5699b7862c8b13274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBFX55VF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC8capFIJYVg27uEtIG7OL1CoQyxZAEAQ1IFVZbCqzdEQIhAIH8Qnf%2FG0%2FuXeMKjcUwBDI8hdM%2BxmL29Q34%2F6IbbtP%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgzTfJo996WZSlUyc6Yq3AOlSiEyR5AlvRrzqc0xXDKrOKCI8ZKbIK54lqIKWHWbRgUx8mQohys5K2prQF37wNUVevIDqYELcb5kDjNsqRUweMwaQ%2BcbtaG%2F9jVHr4xrOgOasPnybzxbH6R3OY7ycdVtRWnua8BSYidHbUFXjsxhIx8Kp1ZxCY2ZZIGj%2FwKistr7ILLsml%2BdWbYi2MnOZwbZk%2BQj%2Frcd%2BNXFTuAYseUsFFmjHtetadeD7QSo9cWP7flnmvseytCtmbj2MhsbGCgW7JFd3IInZjjsagCsO9jE39upuUsTOS4R0h9QUZG%2Fn7GMwJ5b6YYgM0uNiqwNbGbKZFtMCwPO6VLZQKfJieoTPqTKXUl0q7Wp4Poes2xi2k%2Fo43MV3olSWPRtE3dQ4X2tJhQoLPJjzAw%2F7KvaT7yRbQ6mY58ru8Gdo403LdBPd%2FL3NSlqJZgtmh3O7f7csiu92tv33wuj0Bzbsq7S7ISCLxHq1mts1UwDB%2BrM7FR%2BOUy%2FhvJIXLgjI6BkLkooj5%2Fj%2BJ0v45MJeRaB%2FKS3V%2F%2BA2LIaLCubpjxklb%2FczAS%2Fnu0RseVY5GEoPYr7aaB3ywr%2BGNfcvsHIaqAGEDnDvU%2FE6RyJL0MTLyLuzsdew3n7R605gBxV8o4uZ6AiaTD2zszEBjqkARUoNX%2By%2FoWzKNpzzCOzCyljXTmSIvi7C7jc%2BylGFrWKhm5BHv9Hz2L%2FoY9jEw3mSmRYQcEaTIAQ9QTW6JYyMYg5FPTEYwsK%2B62y4XyHkSMOl3pTeFPDOJaqQ2xcpo0Z9EjGohebcvQ01McSmgiSL40muw8r%2FjCVaEmQpEXK5c3arJxn7iAMcpxHyQZ3RGUzmYCExX1FElabuYWRE0FLLvUGP2nj&X-Amz-Signature=39e68c4fb295466b03e26bb6647e2e120ed40bb05e17deac0ed95ebbd94ce480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC6VCU3Q%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCihAhRC2S3oWngJRBeN1rRVAianvQO4pho3aWq%2BLrSZwIhAPia5AxkmXL3LjFOYRyGVpCItydV2LZhRiUOw0PqEKe%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgztILHa1N%2BS6C9p4tYq3APUnlPkTK3tO8EfGCWZKKaHVOR4HnXM%2FQzSygCmFpi2SuMVo1tc4RHRNUsmSj9FrkcQhQNMZRiUiUI4yTcSrQq8%2FbEW48lWx0fBTCsAP9J%2Brioos1Y07Nr3Onvh4Ju1%2BG7ygFv4QfjIhAtufy5eURKh9lBRloEackil1sWIbflvyVGaIsuqHRtTeMwUjgmorgUQIDtV%2BpupyurwwMbgT16VQI49PcARuJXNclAGWkF5HnSr2PG2mqyt2nLJmSVnz6WjnLt08mBTxUkHv3twttuG4aXB%2FTZZTMYFHNikSj9%2FehQGq%2BSEs9Lde%2FLdLQn9348LyS%2FNLgc%2BLc9oPhD%2FeHYg80czEzbIvX7htc7EsFGE7jtEwCtVEv2r5%2FzQpMzJqos2Ol88NIaHzfc3naSmdhoM9a5I%2F1IuDIpWSKncCnyIKlb5ZTpm7CZdZ1sm4fVtarDX7GBMuZBKntRjGPOKp%2Fy4hBEN6%2BqyBdQwakODHrXImYn3SXtvW4%2Fpkf8KPWSXiOZ7jBiVU8emYVUuxTf3431CZ3R2qNE8oTrb1pE19QqPNsF7kpQjlmnA0QhTksZx91n9WnVfCVIp8EoNwsk4pfJrT6kDzfhM%2FRFR1Y3E6LwBEnruGzZiqjl%2BNSd59jChz8zEBjqkAX7Yvo4ACGsAP7wX6lfBQp0Xk3Xc6%2FkhbGXDn3LFFq7U2D24%2Fix6ix6sfRBDYWO%2BzRZQD3UGU%2B99Ol978Ff2GuZw%2BPRij153rJtQ8SR7J2qASs%2BQZ0ZY5OaC6Oy10pctx%2ByDrR8SzwQ1J4frFkbNJiuRHKIik2KJVjCoDuyIa%2FilfPk9x8KW57kmnnF8pAF1elNIxXZS%2Bctpx739h3mK86Z1n6ir&X-Amz-Signature=2e2b3276df1a2a8f445a3474c5439952fdde82f9c3179a949193bbbce3a876bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWL2E4D5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCZOFZTr2yVk2BZ4jzpp8VeSe4lhGSYcXqvfXrBu2hQsAIgc5Dl8sQnBDa2KZMikBv5EUsrhR0HcMlSkulePLV06MQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCyvQXCh7kQJLSIzvircA2jsxxsxRdpPuCk2xomZhSD3bZkVWIWskUrGhYAKYzBwoRFUwhe7sEKb3wTkXPxpBTAok98KTR9h2gj2KtJKxuqMU90ST41B7ZSxa9QIwXsmwNKhcMFPPEPwRTj954qI3Maos9qXTZW8ut4BdDA%2BMluQepKV%2BXtDzbEUSAPnvaLJm1LMoSwnau7TiBR7qOYvoxbgzLZonwP0Lnm%2B7f0ZROLnf8UVXlTTn9sRs%2FQVDre76%2BXrdXonfLVGDQ7t44%2Fab%2F6GEvYIEKeHUab5%2Bmxyyz8M9caRQDjbOlfw%2FAPHutw9UpuWTJ5ViseSkUyawQHt5ZaMAqAiIt5MqKOeqvfkcO1Lql1qpJxogl1LVsZdLxRIT78FKONPCKJR7i1LQxjOgbdgMMWrm1wUUHdE9ML1Q8iiYrgu9GTeaVlVa2RkT6BiswpKKrzTGrF0lDokRBiDYurVg3hsxPY1I9gARjww7y13A%2BThwJiyQMCuGffGsTuuwjDFyVnW6q8T6FAAYhtZ3%2FY4hhvWM%2BPYgvCPC%2FPhBdBqoy9UWV%2BwlYeKXjkZkVUdAr4GezLKUpNwifh%2F76KozuTgWJ8XmF0LGceNeRL3RIwF9uAicH%2BsZlegsg%2FNFRl2zHsafSWcIfKp0w4MMKfQzMQGOqUBtfEkn3GtuLykk5aS9%2F%2FtwLSPs1wTt44WL5kNu0ZPeA9OUCcd70FdVi5OpdV3xN6CDsKchMFcJee7h1qE%2FiB6QxnW7SuyFdpDItuAYjJ9U5vD3td7PboVHAD6%2FGL2U87mBmNAKJ13qOn9ZzWzuquttPwxDUlni6GfVP9YvyKH5TrAMeGxxJ2lB9GNBo3ZwfchM5iVi0PNe4wITuBiFw3YjqCf0PB8&X-Amz-Signature=53899b33fd276a944447b78e2ed67d8d3b02d9568d942ac0998bd9190a04f82a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWL2E4D5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCZOFZTr2yVk2BZ4jzpp8VeSe4lhGSYcXqvfXrBu2hQsAIgc5Dl8sQnBDa2KZMikBv5EUsrhR0HcMlSkulePLV06MQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCyvQXCh7kQJLSIzvircA2jsxxsxRdpPuCk2xomZhSD3bZkVWIWskUrGhYAKYzBwoRFUwhe7sEKb3wTkXPxpBTAok98KTR9h2gj2KtJKxuqMU90ST41B7ZSxa9QIwXsmwNKhcMFPPEPwRTj954qI3Maos9qXTZW8ut4BdDA%2BMluQepKV%2BXtDzbEUSAPnvaLJm1LMoSwnau7TiBR7qOYvoxbgzLZonwP0Lnm%2B7f0ZROLnf8UVXlTTn9sRs%2FQVDre76%2BXrdXonfLVGDQ7t44%2Fab%2F6GEvYIEKeHUab5%2Bmxyyz8M9caRQDjbOlfw%2FAPHutw9UpuWTJ5ViseSkUyawQHt5ZaMAqAiIt5MqKOeqvfkcO1Lql1qpJxogl1LVsZdLxRIT78FKONPCKJR7i1LQxjOgbdgMMWrm1wUUHdE9ML1Q8iiYrgu9GTeaVlVa2RkT6BiswpKKrzTGrF0lDokRBiDYurVg3hsxPY1I9gARjww7y13A%2BThwJiyQMCuGffGsTuuwjDFyVnW6q8T6FAAYhtZ3%2FY4hhvWM%2BPYgvCPC%2FPhBdBqoy9UWV%2BwlYeKXjkZkVUdAr4GezLKUpNwifh%2F76KozuTgWJ8XmF0LGceNeRL3RIwF9uAicH%2BsZlegsg%2FNFRl2zHsafSWcIfKp0w4MMKfQzMQGOqUBtfEkn3GtuLykk5aS9%2F%2FtwLSPs1wTt44WL5kNu0ZPeA9OUCcd70FdVi5OpdV3xN6CDsKchMFcJee7h1qE%2FiB6QxnW7SuyFdpDItuAYjJ9U5vD3td7PboVHAD6%2FGL2U87mBmNAKJ13qOn9ZzWzuquttPwxDUlni6GfVP9YvyKH5TrAMeGxxJ2lB9GNBo3ZwfchM5iVi0PNe4wITuBiFw3YjqCf0PB8&X-Amz-Signature=dd32915b6d864d550b87c97a036028dc95e5d4d2ef7688d60998e3a23569a3a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWL2E4D5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCZOFZTr2yVk2BZ4jzpp8VeSe4lhGSYcXqvfXrBu2hQsAIgc5Dl8sQnBDa2KZMikBv5EUsrhR0HcMlSkulePLV06MQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCyvQXCh7kQJLSIzvircA2jsxxsxRdpPuCk2xomZhSD3bZkVWIWskUrGhYAKYzBwoRFUwhe7sEKb3wTkXPxpBTAok98KTR9h2gj2KtJKxuqMU90ST41B7ZSxa9QIwXsmwNKhcMFPPEPwRTj954qI3Maos9qXTZW8ut4BdDA%2BMluQepKV%2BXtDzbEUSAPnvaLJm1LMoSwnau7TiBR7qOYvoxbgzLZonwP0Lnm%2B7f0ZROLnf8UVXlTTn9sRs%2FQVDre76%2BXrdXonfLVGDQ7t44%2Fab%2F6GEvYIEKeHUab5%2Bmxyyz8M9caRQDjbOlfw%2FAPHutw9UpuWTJ5ViseSkUyawQHt5ZaMAqAiIt5MqKOeqvfkcO1Lql1qpJxogl1LVsZdLxRIT78FKONPCKJR7i1LQxjOgbdgMMWrm1wUUHdE9ML1Q8iiYrgu9GTeaVlVa2RkT6BiswpKKrzTGrF0lDokRBiDYurVg3hsxPY1I9gARjww7y13A%2BThwJiyQMCuGffGsTuuwjDFyVnW6q8T6FAAYhtZ3%2FY4hhvWM%2BPYgvCPC%2FPhBdBqoy9UWV%2BwlYeKXjkZkVUdAr4GezLKUpNwifh%2F76KozuTgWJ8XmF0LGceNeRL3RIwF9uAicH%2BsZlegsg%2FNFRl2zHsafSWcIfKp0w4MMKfQzMQGOqUBtfEkn3GtuLykk5aS9%2F%2FtwLSPs1wTt44WL5kNu0ZPeA9OUCcd70FdVi5OpdV3xN6CDsKchMFcJee7h1qE%2FiB6QxnW7SuyFdpDItuAYjJ9U5vD3td7PboVHAD6%2FGL2U87mBmNAKJ13qOn9ZzWzuquttPwxDUlni6GfVP9YvyKH5TrAMeGxxJ2lB9GNBo3ZwfchM5iVi0PNe4wITuBiFw3YjqCf0PB8&X-Amz-Signature=be5d92014b3a5791ef67c17a2e2e72e6bab0a2a9d52bd1b51f3e598fb1dd8ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWL2E4D5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCZOFZTr2yVk2BZ4jzpp8VeSe4lhGSYcXqvfXrBu2hQsAIgc5Dl8sQnBDa2KZMikBv5EUsrhR0HcMlSkulePLV06MQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCyvQXCh7kQJLSIzvircA2jsxxsxRdpPuCk2xomZhSD3bZkVWIWskUrGhYAKYzBwoRFUwhe7sEKb3wTkXPxpBTAok98KTR9h2gj2KtJKxuqMU90ST41B7ZSxa9QIwXsmwNKhcMFPPEPwRTj954qI3Maos9qXTZW8ut4BdDA%2BMluQepKV%2BXtDzbEUSAPnvaLJm1LMoSwnau7TiBR7qOYvoxbgzLZonwP0Lnm%2B7f0ZROLnf8UVXlTTn9sRs%2FQVDre76%2BXrdXonfLVGDQ7t44%2Fab%2F6GEvYIEKeHUab5%2Bmxyyz8M9caRQDjbOlfw%2FAPHutw9UpuWTJ5ViseSkUyawQHt5ZaMAqAiIt5MqKOeqvfkcO1Lql1qpJxogl1LVsZdLxRIT78FKONPCKJR7i1LQxjOgbdgMMWrm1wUUHdE9ML1Q8iiYrgu9GTeaVlVa2RkT6BiswpKKrzTGrF0lDokRBiDYurVg3hsxPY1I9gARjww7y13A%2BThwJiyQMCuGffGsTuuwjDFyVnW6q8T6FAAYhtZ3%2FY4hhvWM%2BPYgvCPC%2FPhBdBqoy9UWV%2BwlYeKXjkZkVUdAr4GezLKUpNwifh%2F76KozuTgWJ8XmF0LGceNeRL3RIwF9uAicH%2BsZlegsg%2FNFRl2zHsafSWcIfKp0w4MMKfQzMQGOqUBtfEkn3GtuLykk5aS9%2F%2FtwLSPs1wTt44WL5kNu0ZPeA9OUCcd70FdVi5OpdV3xN6CDsKchMFcJee7h1qE%2FiB6QxnW7SuyFdpDItuAYjJ9U5vD3td7PboVHAD6%2FGL2U87mBmNAKJ13qOn9ZzWzuquttPwxDUlni6GfVP9YvyKH5TrAMeGxxJ2lB9GNBo3ZwfchM5iVi0PNe4wITuBiFw3YjqCf0PB8&X-Amz-Signature=a86c04759f07288120caf9540b25ba6aab7e0ac4bbbd47867f3e7ecf4d0b960f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWL2E4D5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCZOFZTr2yVk2BZ4jzpp8VeSe4lhGSYcXqvfXrBu2hQsAIgc5Dl8sQnBDa2KZMikBv5EUsrhR0HcMlSkulePLV06MQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCyvQXCh7kQJLSIzvircA2jsxxsxRdpPuCk2xomZhSD3bZkVWIWskUrGhYAKYzBwoRFUwhe7sEKb3wTkXPxpBTAok98KTR9h2gj2KtJKxuqMU90ST41B7ZSxa9QIwXsmwNKhcMFPPEPwRTj954qI3Maos9qXTZW8ut4BdDA%2BMluQepKV%2BXtDzbEUSAPnvaLJm1LMoSwnau7TiBR7qOYvoxbgzLZonwP0Lnm%2B7f0ZROLnf8UVXlTTn9sRs%2FQVDre76%2BXrdXonfLVGDQ7t44%2Fab%2F6GEvYIEKeHUab5%2Bmxyyz8M9caRQDjbOlfw%2FAPHutw9UpuWTJ5ViseSkUyawQHt5ZaMAqAiIt5MqKOeqvfkcO1Lql1qpJxogl1LVsZdLxRIT78FKONPCKJR7i1LQxjOgbdgMMWrm1wUUHdE9ML1Q8iiYrgu9GTeaVlVa2RkT6BiswpKKrzTGrF0lDokRBiDYurVg3hsxPY1I9gARjww7y13A%2BThwJiyQMCuGffGsTuuwjDFyVnW6q8T6FAAYhtZ3%2FY4hhvWM%2BPYgvCPC%2FPhBdBqoy9UWV%2BwlYeKXjkZkVUdAr4GezLKUpNwifh%2F76KozuTgWJ8XmF0LGceNeRL3RIwF9uAicH%2BsZlegsg%2FNFRl2zHsafSWcIfKp0w4MMKfQzMQGOqUBtfEkn3GtuLykk5aS9%2F%2FtwLSPs1wTt44WL5kNu0ZPeA9OUCcd70FdVi5OpdV3xN6CDsKchMFcJee7h1qE%2FiB6QxnW7SuyFdpDItuAYjJ9U5vD3td7PboVHAD6%2FGL2U87mBmNAKJ13qOn9ZzWzuquttPwxDUlni6GfVP9YvyKH5TrAMeGxxJ2lB9GNBo3ZwfchM5iVi0PNe4wITuBiFw3YjqCf0PB8&X-Amz-Signature=502447868bfcd60a5ecd8aaccf43fa14582c1dc87ae2dfa531d64e699ca5b5dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWL2E4D5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCZOFZTr2yVk2BZ4jzpp8VeSe4lhGSYcXqvfXrBu2hQsAIgc5Dl8sQnBDa2KZMikBv5EUsrhR0HcMlSkulePLV06MQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCyvQXCh7kQJLSIzvircA2jsxxsxRdpPuCk2xomZhSD3bZkVWIWskUrGhYAKYzBwoRFUwhe7sEKb3wTkXPxpBTAok98KTR9h2gj2KtJKxuqMU90ST41B7ZSxa9QIwXsmwNKhcMFPPEPwRTj954qI3Maos9qXTZW8ut4BdDA%2BMluQepKV%2BXtDzbEUSAPnvaLJm1LMoSwnau7TiBR7qOYvoxbgzLZonwP0Lnm%2B7f0ZROLnf8UVXlTTn9sRs%2FQVDre76%2BXrdXonfLVGDQ7t44%2Fab%2F6GEvYIEKeHUab5%2Bmxyyz8M9caRQDjbOlfw%2FAPHutw9UpuWTJ5ViseSkUyawQHt5ZaMAqAiIt5MqKOeqvfkcO1Lql1qpJxogl1LVsZdLxRIT78FKONPCKJR7i1LQxjOgbdgMMWrm1wUUHdE9ML1Q8iiYrgu9GTeaVlVa2RkT6BiswpKKrzTGrF0lDokRBiDYurVg3hsxPY1I9gARjww7y13A%2BThwJiyQMCuGffGsTuuwjDFyVnW6q8T6FAAYhtZ3%2FY4hhvWM%2BPYgvCPC%2FPhBdBqoy9UWV%2BwlYeKXjkZkVUdAr4GezLKUpNwifh%2F76KozuTgWJ8XmF0LGceNeRL3RIwF9uAicH%2BsZlegsg%2FNFRl2zHsafSWcIfKp0w4MMKfQzMQGOqUBtfEkn3GtuLykk5aS9%2F%2FtwLSPs1wTt44WL5kNu0ZPeA9OUCcd70FdVi5OpdV3xN6CDsKchMFcJee7h1qE%2FiB6QxnW7SuyFdpDItuAYjJ9U5vD3td7PboVHAD6%2FGL2U87mBmNAKJ13qOn9ZzWzuquttPwxDUlni6GfVP9YvyKH5TrAMeGxxJ2lB9GNBo3ZwfchM5iVi0PNe4wITuBiFw3YjqCf0PB8&X-Amz-Signature=992c50491f3764ef85e00544002535e526d45a46f2591b30c66cb6678c2867fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWL2E4D5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCZOFZTr2yVk2BZ4jzpp8VeSe4lhGSYcXqvfXrBu2hQsAIgc5Dl8sQnBDa2KZMikBv5EUsrhR0HcMlSkulePLV06MQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCyvQXCh7kQJLSIzvircA2jsxxsxRdpPuCk2xomZhSD3bZkVWIWskUrGhYAKYzBwoRFUwhe7sEKb3wTkXPxpBTAok98KTR9h2gj2KtJKxuqMU90ST41B7ZSxa9QIwXsmwNKhcMFPPEPwRTj954qI3Maos9qXTZW8ut4BdDA%2BMluQepKV%2BXtDzbEUSAPnvaLJm1LMoSwnau7TiBR7qOYvoxbgzLZonwP0Lnm%2B7f0ZROLnf8UVXlTTn9sRs%2FQVDre76%2BXrdXonfLVGDQ7t44%2Fab%2F6GEvYIEKeHUab5%2Bmxyyz8M9caRQDjbOlfw%2FAPHutw9UpuWTJ5ViseSkUyawQHt5ZaMAqAiIt5MqKOeqvfkcO1Lql1qpJxogl1LVsZdLxRIT78FKONPCKJR7i1LQxjOgbdgMMWrm1wUUHdE9ML1Q8iiYrgu9GTeaVlVa2RkT6BiswpKKrzTGrF0lDokRBiDYurVg3hsxPY1I9gARjww7y13A%2BThwJiyQMCuGffGsTuuwjDFyVnW6q8T6FAAYhtZ3%2FY4hhvWM%2BPYgvCPC%2FPhBdBqoy9UWV%2BwlYeKXjkZkVUdAr4GezLKUpNwifh%2F76KozuTgWJ8XmF0LGceNeRL3RIwF9uAicH%2BsZlegsg%2FNFRl2zHsafSWcIfKp0w4MMKfQzMQGOqUBtfEkn3GtuLykk5aS9%2F%2FtwLSPs1wTt44WL5kNu0ZPeA9OUCcd70FdVi5OpdV3xN6CDsKchMFcJee7h1qE%2FiB6QxnW7SuyFdpDItuAYjJ9U5vD3td7PboVHAD6%2FGL2U87mBmNAKJ13qOn9ZzWzuquttPwxDUlni6GfVP9YvyKH5TrAMeGxxJ2lB9GNBo3ZwfchM5iVi0PNe4wITuBiFw3YjqCf0PB8&X-Amz-Signature=3c3b06bfd314aa0e2705500ae18620e30cc1118fb9fe5b45d540996d05d0f319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWL2E4D5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCZOFZTr2yVk2BZ4jzpp8VeSe4lhGSYcXqvfXrBu2hQsAIgc5Dl8sQnBDa2KZMikBv5EUsrhR0HcMlSkulePLV06MQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCyvQXCh7kQJLSIzvircA2jsxxsxRdpPuCk2xomZhSD3bZkVWIWskUrGhYAKYzBwoRFUwhe7sEKb3wTkXPxpBTAok98KTR9h2gj2KtJKxuqMU90ST41B7ZSxa9QIwXsmwNKhcMFPPEPwRTj954qI3Maos9qXTZW8ut4BdDA%2BMluQepKV%2BXtDzbEUSAPnvaLJm1LMoSwnau7TiBR7qOYvoxbgzLZonwP0Lnm%2B7f0ZROLnf8UVXlTTn9sRs%2FQVDre76%2BXrdXonfLVGDQ7t44%2Fab%2F6GEvYIEKeHUab5%2Bmxyyz8M9caRQDjbOlfw%2FAPHutw9UpuWTJ5ViseSkUyawQHt5ZaMAqAiIt5MqKOeqvfkcO1Lql1qpJxogl1LVsZdLxRIT78FKONPCKJR7i1LQxjOgbdgMMWrm1wUUHdE9ML1Q8iiYrgu9GTeaVlVa2RkT6BiswpKKrzTGrF0lDokRBiDYurVg3hsxPY1I9gARjww7y13A%2BThwJiyQMCuGffGsTuuwjDFyVnW6q8T6FAAYhtZ3%2FY4hhvWM%2BPYgvCPC%2FPhBdBqoy9UWV%2BwlYeKXjkZkVUdAr4GezLKUpNwifh%2F76KozuTgWJ8XmF0LGceNeRL3RIwF9uAicH%2BsZlegsg%2FNFRl2zHsafSWcIfKp0w4MMKfQzMQGOqUBtfEkn3GtuLykk5aS9%2F%2FtwLSPs1wTt44WL5kNu0ZPeA9OUCcd70FdVi5OpdV3xN6CDsKchMFcJee7h1qE%2FiB6QxnW7SuyFdpDItuAYjJ9U5vD3td7PboVHAD6%2FGL2U87mBmNAKJ13qOn9ZzWzuquttPwxDUlni6GfVP9YvyKH5TrAMeGxxJ2lB9GNBo3ZwfchM5iVi0PNe4wITuBiFw3YjqCf0PB8&X-Amz-Signature=f0e0686df07e227c8ce413f88ad60784e54f82fa67c722dede907972dc617daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWL2E4D5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCZOFZTr2yVk2BZ4jzpp8VeSe4lhGSYcXqvfXrBu2hQsAIgc5Dl8sQnBDa2KZMikBv5EUsrhR0HcMlSkulePLV06MQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCyvQXCh7kQJLSIzvircA2jsxxsxRdpPuCk2xomZhSD3bZkVWIWskUrGhYAKYzBwoRFUwhe7sEKb3wTkXPxpBTAok98KTR9h2gj2KtJKxuqMU90ST41B7ZSxa9QIwXsmwNKhcMFPPEPwRTj954qI3Maos9qXTZW8ut4BdDA%2BMluQepKV%2BXtDzbEUSAPnvaLJm1LMoSwnau7TiBR7qOYvoxbgzLZonwP0Lnm%2B7f0ZROLnf8UVXlTTn9sRs%2FQVDre76%2BXrdXonfLVGDQ7t44%2Fab%2F6GEvYIEKeHUab5%2Bmxyyz8M9caRQDjbOlfw%2FAPHutw9UpuWTJ5ViseSkUyawQHt5ZaMAqAiIt5MqKOeqvfkcO1Lql1qpJxogl1LVsZdLxRIT78FKONPCKJR7i1LQxjOgbdgMMWrm1wUUHdE9ML1Q8iiYrgu9GTeaVlVa2RkT6BiswpKKrzTGrF0lDokRBiDYurVg3hsxPY1I9gARjww7y13A%2BThwJiyQMCuGffGsTuuwjDFyVnW6q8T6FAAYhtZ3%2FY4hhvWM%2BPYgvCPC%2FPhBdBqoy9UWV%2BwlYeKXjkZkVUdAr4GezLKUpNwifh%2F76KozuTgWJ8XmF0LGceNeRL3RIwF9uAicH%2BsZlegsg%2FNFRl2zHsafSWcIfKp0w4MMKfQzMQGOqUBtfEkn3GtuLykk5aS9%2F%2FtwLSPs1wTt44WL5kNu0ZPeA9OUCcd70FdVi5OpdV3xN6CDsKchMFcJee7h1qE%2FiB6QxnW7SuyFdpDItuAYjJ9U5vD3td7PboVHAD6%2FGL2U87mBmNAKJ13qOn9ZzWzuquttPwxDUlni6GfVP9YvyKH5TrAMeGxxJ2lB9GNBo3ZwfchM5iVi0PNe4wITuBiFw3YjqCf0PB8&X-Amz-Signature=3ebc4731ef070d8309dcc1487a28610731c403234fa4ec05eb0c96efff4ab334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
