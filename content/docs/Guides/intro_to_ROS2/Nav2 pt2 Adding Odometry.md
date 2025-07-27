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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4V7NN3C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCUduSU9V%2FY4WOhRaYFF1BWBE4Kwwijvytw4b7K19XsfgIgUn0xEHmyS2fhumL9hR4ZupeHWtDiedV%2Fh9SbkGc80uEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAYbHu%2FTtRg%2FCp62YCrcAykENy9uDLzNyqwow6wsAZaTe55vW%2Bf23S%2FrrJhW0em5yx%2BjzTFz%2Fq58k7FueaTKFaQ9FVCK73rxjLzRjp4rL5plR05Q7IQa04C6488D8Zkxw4lLR%2BW1F89gUnkzQPNGV4ek2me%2FbBqrk6EQxlftZczEvl5s9ll3drYe%2FdQlTPf29qn4SzCKO5j%2F8uARKLZalBpqJMul4kNJxCqmogRYZgc5qM7DcV6Ie2iAZrHrBhCPHGCpVyvGbNr1wafICVKy7Zkj7hpFPXcssjjjzM0Z7uxLuztP7py5wYW9kdBBYzTBSGcnoqgGEy22wRzlaJLUCbUzUFH5AwrLnUNYeaPWQXaIvyRVXwBnDmCSNtAcveMc6m6k12N7NmYssVS1dMSJb9oudPsghv1CDrnULHPqq2Mmm1HvnGn80i3CIy3dZF8JPRf0zb5hDEGmS3q77tGvPbxtMmvw1WhfvtmTnZOg3KJ%2B0JvNXhWE6Foc4pbAKrChGZOHt9czQ%2F78E32GoJIVENejnichZur3EwJCNaQU5kbMfKbomywt44Ovb4bxcp8WoXxZGHULvGi7fIt697MFG9vBHL0rP06%2FhRM9iy6Z3uIrtOE3NzpXgxg2Sk33YkDi7Tuj%2B41WhtP0ynpXMLn%2FmMQGOqUBPCibkHi0pI59xQ1CBLywYvgcH3xtAOtGM93ZZq4YnNLckMcf25ADYPWheDDX0nBPGoh8keiwWmGrSQVLgQSmjjUaHHmBMuR5U7r46aszMJVAvaO8f6Wo5dhSeE6fJfIB8G01%2FHRYGR%2FU5kNZj52sW7F8eDgC9lyocRGLvKvJgvBq6ijJPYhlmdXeDExET1q%2Btoh37nJAZY6qAnAIcwSRr0%2BTsepX&X-Amz-Signature=02fbc2af3b1ae82f65d524d15b26a2d553d9b726ea082fe7d9189d81453fd027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4V7NN3C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCUduSU9V%2FY4WOhRaYFF1BWBE4Kwwijvytw4b7K19XsfgIgUn0xEHmyS2fhumL9hR4ZupeHWtDiedV%2Fh9SbkGc80uEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAYbHu%2FTtRg%2FCp62YCrcAykENy9uDLzNyqwow6wsAZaTe55vW%2Bf23S%2FrrJhW0em5yx%2BjzTFz%2Fq58k7FueaTKFaQ9FVCK73rxjLzRjp4rL5plR05Q7IQa04C6488D8Zkxw4lLR%2BW1F89gUnkzQPNGV4ek2me%2FbBqrk6EQxlftZczEvl5s9ll3drYe%2FdQlTPf29qn4SzCKO5j%2F8uARKLZalBpqJMul4kNJxCqmogRYZgc5qM7DcV6Ie2iAZrHrBhCPHGCpVyvGbNr1wafICVKy7Zkj7hpFPXcssjjjzM0Z7uxLuztP7py5wYW9kdBBYzTBSGcnoqgGEy22wRzlaJLUCbUzUFH5AwrLnUNYeaPWQXaIvyRVXwBnDmCSNtAcveMc6m6k12N7NmYssVS1dMSJb9oudPsghv1CDrnULHPqq2Mmm1HvnGn80i3CIy3dZF8JPRf0zb5hDEGmS3q77tGvPbxtMmvw1WhfvtmTnZOg3KJ%2B0JvNXhWE6Foc4pbAKrChGZOHt9czQ%2F78E32GoJIVENejnichZur3EwJCNaQU5kbMfKbomywt44Ovb4bxcp8WoXxZGHULvGi7fIt697MFG9vBHL0rP06%2FhRM9iy6Z3uIrtOE3NzpXgxg2Sk33YkDi7Tuj%2B41WhtP0ynpXMLn%2FmMQGOqUBPCibkHi0pI59xQ1CBLywYvgcH3xtAOtGM93ZZq4YnNLckMcf25ADYPWheDDX0nBPGoh8keiwWmGrSQVLgQSmjjUaHHmBMuR5U7r46aszMJVAvaO8f6Wo5dhSeE6fJfIB8G01%2FHRYGR%2FU5kNZj52sW7F8eDgC9lyocRGLvKvJgvBq6ijJPYhlmdXeDExET1q%2Btoh37nJAZY6qAnAIcwSRr0%2BTsepX&X-Amz-Signature=399d92c7318e2dc33e229a3e015d7f86fa8b1781b4111c99d86bcbaa4ecc0b82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4V7NN3C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCUduSU9V%2FY4WOhRaYFF1BWBE4Kwwijvytw4b7K19XsfgIgUn0xEHmyS2fhumL9hR4ZupeHWtDiedV%2Fh9SbkGc80uEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAYbHu%2FTtRg%2FCp62YCrcAykENy9uDLzNyqwow6wsAZaTe55vW%2Bf23S%2FrrJhW0em5yx%2BjzTFz%2Fq58k7FueaTKFaQ9FVCK73rxjLzRjp4rL5plR05Q7IQa04C6488D8Zkxw4lLR%2BW1F89gUnkzQPNGV4ek2me%2FbBqrk6EQxlftZczEvl5s9ll3drYe%2FdQlTPf29qn4SzCKO5j%2F8uARKLZalBpqJMul4kNJxCqmogRYZgc5qM7DcV6Ie2iAZrHrBhCPHGCpVyvGbNr1wafICVKy7Zkj7hpFPXcssjjjzM0Z7uxLuztP7py5wYW9kdBBYzTBSGcnoqgGEy22wRzlaJLUCbUzUFH5AwrLnUNYeaPWQXaIvyRVXwBnDmCSNtAcveMc6m6k12N7NmYssVS1dMSJb9oudPsghv1CDrnULHPqq2Mmm1HvnGn80i3CIy3dZF8JPRf0zb5hDEGmS3q77tGvPbxtMmvw1WhfvtmTnZOg3KJ%2B0JvNXhWE6Foc4pbAKrChGZOHt9czQ%2F78E32GoJIVENejnichZur3EwJCNaQU5kbMfKbomywt44Ovb4bxcp8WoXxZGHULvGi7fIt697MFG9vBHL0rP06%2FhRM9iy6Z3uIrtOE3NzpXgxg2Sk33YkDi7Tuj%2B41WhtP0ynpXMLn%2FmMQGOqUBPCibkHi0pI59xQ1CBLywYvgcH3xtAOtGM93ZZq4YnNLckMcf25ADYPWheDDX0nBPGoh8keiwWmGrSQVLgQSmjjUaHHmBMuR5U7r46aszMJVAvaO8f6Wo5dhSeE6fJfIB8G01%2FHRYGR%2FU5kNZj52sW7F8eDgC9lyocRGLvKvJgvBq6ijJPYhlmdXeDExET1q%2Btoh37nJAZY6qAnAIcwSRr0%2BTsepX&X-Amz-Signature=89a9befe30bd5c582224f73feb7c6a85229569d765861b8a61ad002bc779f916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4V7NN3C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCUduSU9V%2FY4WOhRaYFF1BWBE4Kwwijvytw4b7K19XsfgIgUn0xEHmyS2fhumL9hR4ZupeHWtDiedV%2Fh9SbkGc80uEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAYbHu%2FTtRg%2FCp62YCrcAykENy9uDLzNyqwow6wsAZaTe55vW%2Bf23S%2FrrJhW0em5yx%2BjzTFz%2Fq58k7FueaTKFaQ9FVCK73rxjLzRjp4rL5plR05Q7IQa04C6488D8Zkxw4lLR%2BW1F89gUnkzQPNGV4ek2me%2FbBqrk6EQxlftZczEvl5s9ll3drYe%2FdQlTPf29qn4SzCKO5j%2F8uARKLZalBpqJMul4kNJxCqmogRYZgc5qM7DcV6Ie2iAZrHrBhCPHGCpVyvGbNr1wafICVKy7Zkj7hpFPXcssjjjzM0Z7uxLuztP7py5wYW9kdBBYzTBSGcnoqgGEy22wRzlaJLUCbUzUFH5AwrLnUNYeaPWQXaIvyRVXwBnDmCSNtAcveMc6m6k12N7NmYssVS1dMSJb9oudPsghv1CDrnULHPqq2Mmm1HvnGn80i3CIy3dZF8JPRf0zb5hDEGmS3q77tGvPbxtMmvw1WhfvtmTnZOg3KJ%2B0JvNXhWE6Foc4pbAKrChGZOHt9czQ%2F78E32GoJIVENejnichZur3EwJCNaQU5kbMfKbomywt44Ovb4bxcp8WoXxZGHULvGi7fIt697MFG9vBHL0rP06%2FhRM9iy6Z3uIrtOE3NzpXgxg2Sk33YkDi7Tuj%2B41WhtP0ynpXMLn%2FmMQGOqUBPCibkHi0pI59xQ1CBLywYvgcH3xtAOtGM93ZZq4YnNLckMcf25ADYPWheDDX0nBPGoh8keiwWmGrSQVLgQSmjjUaHHmBMuR5U7r46aszMJVAvaO8f6Wo5dhSeE6fJfIB8G01%2FHRYGR%2FU5kNZj52sW7F8eDgC9lyocRGLvKvJgvBq6ijJPYhlmdXeDExET1q%2Btoh37nJAZY6qAnAIcwSRr0%2BTsepX&X-Amz-Signature=aff20196145380775a2589591b1f5156257f349b0d8b3be3c34ad94f18a98937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4V7NN3C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCUduSU9V%2FY4WOhRaYFF1BWBE4Kwwijvytw4b7K19XsfgIgUn0xEHmyS2fhumL9hR4ZupeHWtDiedV%2Fh9SbkGc80uEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAYbHu%2FTtRg%2FCp62YCrcAykENy9uDLzNyqwow6wsAZaTe55vW%2Bf23S%2FrrJhW0em5yx%2BjzTFz%2Fq58k7FueaTKFaQ9FVCK73rxjLzRjp4rL5plR05Q7IQa04C6488D8Zkxw4lLR%2BW1F89gUnkzQPNGV4ek2me%2FbBqrk6EQxlftZczEvl5s9ll3drYe%2FdQlTPf29qn4SzCKO5j%2F8uARKLZalBpqJMul4kNJxCqmogRYZgc5qM7DcV6Ie2iAZrHrBhCPHGCpVyvGbNr1wafICVKy7Zkj7hpFPXcssjjjzM0Z7uxLuztP7py5wYW9kdBBYzTBSGcnoqgGEy22wRzlaJLUCbUzUFH5AwrLnUNYeaPWQXaIvyRVXwBnDmCSNtAcveMc6m6k12N7NmYssVS1dMSJb9oudPsghv1CDrnULHPqq2Mmm1HvnGn80i3CIy3dZF8JPRf0zb5hDEGmS3q77tGvPbxtMmvw1WhfvtmTnZOg3KJ%2B0JvNXhWE6Foc4pbAKrChGZOHt9czQ%2F78E32GoJIVENejnichZur3EwJCNaQU5kbMfKbomywt44Ovb4bxcp8WoXxZGHULvGi7fIt697MFG9vBHL0rP06%2FhRM9iy6Z3uIrtOE3NzpXgxg2Sk33YkDi7Tuj%2B41WhtP0ynpXMLn%2FmMQGOqUBPCibkHi0pI59xQ1CBLywYvgcH3xtAOtGM93ZZq4YnNLckMcf25ADYPWheDDX0nBPGoh8keiwWmGrSQVLgQSmjjUaHHmBMuR5U7r46aszMJVAvaO8f6Wo5dhSeE6fJfIB8G01%2FHRYGR%2FU5kNZj52sW7F8eDgC9lyocRGLvKvJgvBq6ijJPYhlmdXeDExET1q%2Btoh37nJAZY6qAnAIcwSRr0%2BTsepX&X-Amz-Signature=61c3dd651f67a82733c49f6343f0edab941447a78a27901409a27eb896e7cf7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4V7NN3C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCUduSU9V%2FY4WOhRaYFF1BWBE4Kwwijvytw4b7K19XsfgIgUn0xEHmyS2fhumL9hR4ZupeHWtDiedV%2Fh9SbkGc80uEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAYbHu%2FTtRg%2FCp62YCrcAykENy9uDLzNyqwow6wsAZaTe55vW%2Bf23S%2FrrJhW0em5yx%2BjzTFz%2Fq58k7FueaTKFaQ9FVCK73rxjLzRjp4rL5plR05Q7IQa04C6488D8Zkxw4lLR%2BW1F89gUnkzQPNGV4ek2me%2FbBqrk6EQxlftZczEvl5s9ll3drYe%2FdQlTPf29qn4SzCKO5j%2F8uARKLZalBpqJMul4kNJxCqmogRYZgc5qM7DcV6Ie2iAZrHrBhCPHGCpVyvGbNr1wafICVKy7Zkj7hpFPXcssjjjzM0Z7uxLuztP7py5wYW9kdBBYzTBSGcnoqgGEy22wRzlaJLUCbUzUFH5AwrLnUNYeaPWQXaIvyRVXwBnDmCSNtAcveMc6m6k12N7NmYssVS1dMSJb9oudPsghv1CDrnULHPqq2Mmm1HvnGn80i3CIy3dZF8JPRf0zb5hDEGmS3q77tGvPbxtMmvw1WhfvtmTnZOg3KJ%2B0JvNXhWE6Foc4pbAKrChGZOHt9czQ%2F78E32GoJIVENejnichZur3EwJCNaQU5kbMfKbomywt44Ovb4bxcp8WoXxZGHULvGi7fIt697MFG9vBHL0rP06%2FhRM9iy6Z3uIrtOE3NzpXgxg2Sk33YkDi7Tuj%2B41WhtP0ynpXMLn%2FmMQGOqUBPCibkHi0pI59xQ1CBLywYvgcH3xtAOtGM93ZZq4YnNLckMcf25ADYPWheDDX0nBPGoh8keiwWmGrSQVLgQSmjjUaHHmBMuR5U7r46aszMJVAvaO8f6Wo5dhSeE6fJfIB8G01%2FHRYGR%2FU5kNZj52sW7F8eDgC9lyocRGLvKvJgvBq6ijJPYhlmdXeDExET1q%2Btoh37nJAZY6qAnAIcwSRr0%2BTsepX&X-Amz-Signature=c689a04e3564d264333449629008e03b7b262c2271423a1028f12a81697a0dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4V7NN3C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCUduSU9V%2FY4WOhRaYFF1BWBE4Kwwijvytw4b7K19XsfgIgUn0xEHmyS2fhumL9hR4ZupeHWtDiedV%2Fh9SbkGc80uEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAYbHu%2FTtRg%2FCp62YCrcAykENy9uDLzNyqwow6wsAZaTe55vW%2Bf23S%2FrrJhW0em5yx%2BjzTFz%2Fq58k7FueaTKFaQ9FVCK73rxjLzRjp4rL5plR05Q7IQa04C6488D8Zkxw4lLR%2BW1F89gUnkzQPNGV4ek2me%2FbBqrk6EQxlftZczEvl5s9ll3drYe%2FdQlTPf29qn4SzCKO5j%2F8uARKLZalBpqJMul4kNJxCqmogRYZgc5qM7DcV6Ie2iAZrHrBhCPHGCpVyvGbNr1wafICVKy7Zkj7hpFPXcssjjjzM0Z7uxLuztP7py5wYW9kdBBYzTBSGcnoqgGEy22wRzlaJLUCbUzUFH5AwrLnUNYeaPWQXaIvyRVXwBnDmCSNtAcveMc6m6k12N7NmYssVS1dMSJb9oudPsghv1CDrnULHPqq2Mmm1HvnGn80i3CIy3dZF8JPRf0zb5hDEGmS3q77tGvPbxtMmvw1WhfvtmTnZOg3KJ%2B0JvNXhWE6Foc4pbAKrChGZOHt9czQ%2F78E32GoJIVENejnichZur3EwJCNaQU5kbMfKbomywt44Ovb4bxcp8WoXxZGHULvGi7fIt697MFG9vBHL0rP06%2FhRM9iy6Z3uIrtOE3NzpXgxg2Sk33YkDi7Tuj%2B41WhtP0ynpXMLn%2FmMQGOqUBPCibkHi0pI59xQ1CBLywYvgcH3xtAOtGM93ZZq4YnNLckMcf25ADYPWheDDX0nBPGoh8keiwWmGrSQVLgQSmjjUaHHmBMuR5U7r46aszMJVAvaO8f6Wo5dhSeE6fJfIB8G01%2FHRYGR%2FU5kNZj52sW7F8eDgC9lyocRGLvKvJgvBq6ijJPYhlmdXeDExET1q%2Btoh37nJAZY6qAnAIcwSRr0%2BTsepX&X-Amz-Signature=26a549a08cc21f6c69c6dfa526daff10e28fdbcb10997f1b3429943aa593b624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4V7NN3C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCUduSU9V%2FY4WOhRaYFF1BWBE4Kwwijvytw4b7K19XsfgIgUn0xEHmyS2fhumL9hR4ZupeHWtDiedV%2Fh9SbkGc80uEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAYbHu%2FTtRg%2FCp62YCrcAykENy9uDLzNyqwow6wsAZaTe55vW%2Bf23S%2FrrJhW0em5yx%2BjzTFz%2Fq58k7FueaTKFaQ9FVCK73rxjLzRjp4rL5plR05Q7IQa04C6488D8Zkxw4lLR%2BW1F89gUnkzQPNGV4ek2me%2FbBqrk6EQxlftZczEvl5s9ll3drYe%2FdQlTPf29qn4SzCKO5j%2F8uARKLZalBpqJMul4kNJxCqmogRYZgc5qM7DcV6Ie2iAZrHrBhCPHGCpVyvGbNr1wafICVKy7Zkj7hpFPXcssjjjzM0Z7uxLuztP7py5wYW9kdBBYzTBSGcnoqgGEy22wRzlaJLUCbUzUFH5AwrLnUNYeaPWQXaIvyRVXwBnDmCSNtAcveMc6m6k12N7NmYssVS1dMSJb9oudPsghv1CDrnULHPqq2Mmm1HvnGn80i3CIy3dZF8JPRf0zb5hDEGmS3q77tGvPbxtMmvw1WhfvtmTnZOg3KJ%2B0JvNXhWE6Foc4pbAKrChGZOHt9czQ%2F78E32GoJIVENejnichZur3EwJCNaQU5kbMfKbomywt44Ovb4bxcp8WoXxZGHULvGi7fIt697MFG9vBHL0rP06%2FhRM9iy6Z3uIrtOE3NzpXgxg2Sk33YkDi7Tuj%2B41WhtP0ynpXMLn%2FmMQGOqUBPCibkHi0pI59xQ1CBLywYvgcH3xtAOtGM93ZZq4YnNLckMcf25ADYPWheDDX0nBPGoh8keiwWmGrSQVLgQSmjjUaHHmBMuR5U7r46aszMJVAvaO8f6Wo5dhSeE6fJfIB8G01%2FHRYGR%2FU5kNZj52sW7F8eDgC9lyocRGLvKvJgvBq6ijJPYhlmdXeDExET1q%2Btoh37nJAZY6qAnAIcwSRr0%2BTsepX&X-Amz-Signature=98a95b3110373220ebeb884eeb97fdd74656a15efdcb0fe5dbd8eeb060d9b628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4V7NN3C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCUduSU9V%2FY4WOhRaYFF1BWBE4Kwwijvytw4b7K19XsfgIgUn0xEHmyS2fhumL9hR4ZupeHWtDiedV%2Fh9SbkGc80uEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAYbHu%2FTtRg%2FCp62YCrcAykENy9uDLzNyqwow6wsAZaTe55vW%2Bf23S%2FrrJhW0em5yx%2BjzTFz%2Fq58k7FueaTKFaQ9FVCK73rxjLzRjp4rL5plR05Q7IQa04C6488D8Zkxw4lLR%2BW1F89gUnkzQPNGV4ek2me%2FbBqrk6EQxlftZczEvl5s9ll3drYe%2FdQlTPf29qn4SzCKO5j%2F8uARKLZalBpqJMul4kNJxCqmogRYZgc5qM7DcV6Ie2iAZrHrBhCPHGCpVyvGbNr1wafICVKy7Zkj7hpFPXcssjjjzM0Z7uxLuztP7py5wYW9kdBBYzTBSGcnoqgGEy22wRzlaJLUCbUzUFH5AwrLnUNYeaPWQXaIvyRVXwBnDmCSNtAcveMc6m6k12N7NmYssVS1dMSJb9oudPsghv1CDrnULHPqq2Mmm1HvnGn80i3CIy3dZF8JPRf0zb5hDEGmS3q77tGvPbxtMmvw1WhfvtmTnZOg3KJ%2B0JvNXhWE6Foc4pbAKrChGZOHt9czQ%2F78E32GoJIVENejnichZur3EwJCNaQU5kbMfKbomywt44Ovb4bxcp8WoXxZGHULvGi7fIt697MFG9vBHL0rP06%2FhRM9iy6Z3uIrtOE3NzpXgxg2Sk33YkDi7Tuj%2B41WhtP0ynpXMLn%2FmMQGOqUBPCibkHi0pI59xQ1CBLywYvgcH3xtAOtGM93ZZq4YnNLckMcf25ADYPWheDDX0nBPGoh8keiwWmGrSQVLgQSmjjUaHHmBMuR5U7r46aszMJVAvaO8f6Wo5dhSeE6fJfIB8G01%2FHRYGR%2FU5kNZj52sW7F8eDgC9lyocRGLvKvJgvBq6ijJPYhlmdXeDExET1q%2Btoh37nJAZY6qAnAIcwSRr0%2BTsepX&X-Amz-Signature=0d9175771d560e5cc03926ec7b90523e8e4da8d5b8131d842b6f55da6c7245e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOPZYIZC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICh6hEeM5ZG6osBdRlvsFasV9%2FBnj06%2FC6DGMvzeAj4FAiEAyMe9rbJTpNvzmn662BRyup3hhCAovjVflYgLLMcdR8Qq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHA80mh73RErWD1Q6SrcA%2BQZRT5gl9FwCw1nON41EpIAJ6DLHG6%2FQ3MghDkS5qUavcpQRYPJ2wZVO73DLSD2oFn6DZHAbgLzs9hmY81yrNKEo0OLxeipD5WOCcL36%2FS0DWzFz7y7qcks1IV4OV4jNsDSYuH8JERkogwGqPs05XkFlibxYmHV9lITWGfGqBBH4arFJl5AwmwwS4C4GLmKTrtrXRPcxZrPyhJMX5COj3oQ5rUP6alC69BZbrjB8E31TzNLEYiUIpI1QU1xNhGzoXGuuqCfqxOQRKPNgWFR4C77R3kQsacsilvhPpCk3%2F1FSUtBu8YVRGuhmOjsc%2B9tJxZekVnC9QEHfaelTn8iX0UL%2Fq4D%2BXMquFRJTONHJlQrEsx692vIPEQrtl01IuyzB7H%2FiieNVpypQgjdsq5xXKjLEwemqcq2Qzs8OWSeNQrLbtYRL4pIwII3RLHEAA7%2B777ZGpQO48y03jJSc23Y2qvwuuqWBdqFWebufahkDVzmXBT3bTU7MhpaFfA%2FJ7z6zZ05a4DbSbc4KX5DOmwuk23bGBxUvtZtb8CCUOfb6rwfEfQ3%2FjRx6bUvZJ0swk1zPuZ4PcZsUhX59lIbvmAYm97rh7ijsBY1YQyQujUJ1FF2ReEC6Z%2Bj6NWeSqEtMO7wmMQGOqUBUzQ9ICzBb2wqW2KVuIaMnLlHDKzwBLyiM%2BktT68sEzupIg%2BPGuY4G%2Br%2FS%2BEEeDjSxRzFyIX31kIRSFgZGPYfiTuvGEByofq3dO113zYDja%2FTF9ngqyxTdi0q2T7l8WQG372OImBayD45mxII0i1W9b6gEVgCEGqgyk7d0R0%2BZ8Qr%2FUw21prGiGXgA6eTXhc15dHPuP65eyEJIwWS0ZvWJcVm6W9Y&X-Amz-Signature=21310a4b79f2584475a5d549206ecadf646b60279c726afad23e771afa3af2db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4V7NN3C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCUduSU9V%2FY4WOhRaYFF1BWBE4Kwwijvytw4b7K19XsfgIgUn0xEHmyS2fhumL9hR4ZupeHWtDiedV%2Fh9SbkGc80uEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAYbHu%2FTtRg%2FCp62YCrcAykENy9uDLzNyqwow6wsAZaTe55vW%2Bf23S%2FrrJhW0em5yx%2BjzTFz%2Fq58k7FueaTKFaQ9FVCK73rxjLzRjp4rL5plR05Q7IQa04C6488D8Zkxw4lLR%2BW1F89gUnkzQPNGV4ek2me%2FbBqrk6EQxlftZczEvl5s9ll3drYe%2FdQlTPf29qn4SzCKO5j%2F8uARKLZalBpqJMul4kNJxCqmogRYZgc5qM7DcV6Ie2iAZrHrBhCPHGCpVyvGbNr1wafICVKy7Zkj7hpFPXcssjjjzM0Z7uxLuztP7py5wYW9kdBBYzTBSGcnoqgGEy22wRzlaJLUCbUzUFH5AwrLnUNYeaPWQXaIvyRVXwBnDmCSNtAcveMc6m6k12N7NmYssVS1dMSJb9oudPsghv1CDrnULHPqq2Mmm1HvnGn80i3CIy3dZF8JPRf0zb5hDEGmS3q77tGvPbxtMmvw1WhfvtmTnZOg3KJ%2B0JvNXhWE6Foc4pbAKrChGZOHt9czQ%2F78E32GoJIVENejnichZur3EwJCNaQU5kbMfKbomywt44Ovb4bxcp8WoXxZGHULvGi7fIt697MFG9vBHL0rP06%2FhRM9iy6Z3uIrtOE3NzpXgxg2Sk33YkDi7Tuj%2B41WhtP0ynpXMLn%2FmMQGOqUBPCibkHi0pI59xQ1CBLywYvgcH3xtAOtGM93ZZq4YnNLckMcf25ADYPWheDDX0nBPGoh8keiwWmGrSQVLgQSmjjUaHHmBMuR5U7r46aszMJVAvaO8f6Wo5dhSeE6fJfIB8G01%2FHRYGR%2FU5kNZj52sW7F8eDgC9lyocRGLvKvJgvBq6ijJPYhlmdXeDExET1q%2Btoh37nJAZY6qAnAIcwSRr0%2BTsepX&X-Amz-Signature=f5f7244960e3cddff51fd3fae0acc2371b844b7c640db6b5595e1ff15cd2352b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJM7EYO3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDaplNLsAUOK1ftWXm2rFguFMC8%2Br06pDIZebdxgUZq7gIhAIfKnAEaMZLJdojL4P42SDoYPt3lJGIMUyxE9ZS39IxrKv8DCHgQABoMNjM3NDIzMTgzODA1Igzqg2BZhKajEjjLKHYq3AOUKRmPiLs4Ague%2BFrU42tIUixF4KZiOl9CdYYiJ6ZiAf6Sta7BFgs0EsrXI5Oh5IjeaMk80JNqxZKw4rIgqiPEqSsEaDhO5NTvhgW6m%2Fuc%2Fwuh8L4mCyVbuGzRLyU6%2FfXh3xotOdNz6BVw8ehBtiBMl68zMXLMwS%2BEmx7FWLoamm2%2FjPMGgNKbls87fAGg7UOcWLNL1TTY60RSCXIj2EIsHnbvIfXqu2ZJ2lw%2FHV6%2FM0YjnpIefS9TGxmXjq3wohNFp9Sv8ndOobmaxVQ9%2FZN1xGJObFGSAojBUzywR0ZJpP9IKIx16ySKDqITEFYdbtJ0x%2FCZY2Ntsi6YllQGd82xD%2FICb33DptYuuEJendEQT5KA4BIGh65obDKLJBlX0m1UvZTKEnTNs5oEEptn1JnBF0CxnSK71oTX8ZTCLbyunpT6QO5fT1CoUVRgl1nIYU3fqQiHQqrDN06HhdYYD0Oyef6Gh46cL42%2F3hKGthMfHYL6vqgr6DHWtITone63J9Pm2DGDSbWeIgj7cBjDk76pvmT7O4LtiEMYbTrCNJ2SofMUNWz3EBDAtWeAAOEee6ZjhHKmbQvkFAR77l4fhKDdAeLQ5wLaVl%2BJuxQdDol6GwPwPBnRoRcbTPe3JzDn%2FpjEBjqkAT3ERoCFioswxovW4VTdJM%2BicY1ASya8VDE8dQehxEtAuJ8HkKb1lKhxWG5tBKbkWijIZe1uefqGPnpoJZodG0Xa7YinfrtJEaZD8%2FGBiyWRCUhraMRR5LJfj9qxu27iz5hlSyK8Yn3AxQObdij0NEQN8DW9etB7rZ3Ovgo%2Fy%2BYNg5N3BZxYfFs%2BKv0l1jGtGCTuW24taVOCMDzCdzMLaiGstfzE&X-Amz-Signature=9d5518c3d4c824da6306d3f869d164fe5b3cdb0fd7988aea1b2f71721eb1327c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJM7EYO3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDaplNLsAUOK1ftWXm2rFguFMC8%2Br06pDIZebdxgUZq7gIhAIfKnAEaMZLJdojL4P42SDoYPt3lJGIMUyxE9ZS39IxrKv8DCHgQABoMNjM3NDIzMTgzODA1Igzqg2BZhKajEjjLKHYq3AOUKRmPiLs4Ague%2BFrU42tIUixF4KZiOl9CdYYiJ6ZiAf6Sta7BFgs0EsrXI5Oh5IjeaMk80JNqxZKw4rIgqiPEqSsEaDhO5NTvhgW6m%2Fuc%2Fwuh8L4mCyVbuGzRLyU6%2FfXh3xotOdNz6BVw8ehBtiBMl68zMXLMwS%2BEmx7FWLoamm2%2FjPMGgNKbls87fAGg7UOcWLNL1TTY60RSCXIj2EIsHnbvIfXqu2ZJ2lw%2FHV6%2FM0YjnpIefS9TGxmXjq3wohNFp9Sv8ndOobmaxVQ9%2FZN1xGJObFGSAojBUzywR0ZJpP9IKIx16ySKDqITEFYdbtJ0x%2FCZY2Ntsi6YllQGd82xD%2FICb33DptYuuEJendEQT5KA4BIGh65obDKLJBlX0m1UvZTKEnTNs5oEEptn1JnBF0CxnSK71oTX8ZTCLbyunpT6QO5fT1CoUVRgl1nIYU3fqQiHQqrDN06HhdYYD0Oyef6Gh46cL42%2F3hKGthMfHYL6vqgr6DHWtITone63J9Pm2DGDSbWeIgj7cBjDk76pvmT7O4LtiEMYbTrCNJ2SofMUNWz3EBDAtWeAAOEee6ZjhHKmbQvkFAR77l4fhKDdAeLQ5wLaVl%2BJuxQdDol6GwPwPBnRoRcbTPe3JzDn%2FpjEBjqkAT3ERoCFioswxovW4VTdJM%2BicY1ASya8VDE8dQehxEtAuJ8HkKb1lKhxWG5tBKbkWijIZe1uefqGPnpoJZodG0Xa7YinfrtJEaZD8%2FGBiyWRCUhraMRR5LJfj9qxu27iz5hlSyK8Yn3AxQObdij0NEQN8DW9etB7rZ3Ovgo%2Fy%2BYNg5N3BZxYfFs%2BKv0l1jGtGCTuW24taVOCMDzCdzMLaiGstfzE&X-Amz-Signature=1eab5c9d2202b548bf0ac3b2d119e9f205c58729abe531e16cbd008e2b01e3c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJM7EYO3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDaplNLsAUOK1ftWXm2rFguFMC8%2Br06pDIZebdxgUZq7gIhAIfKnAEaMZLJdojL4P42SDoYPt3lJGIMUyxE9ZS39IxrKv8DCHgQABoMNjM3NDIzMTgzODA1Igzqg2BZhKajEjjLKHYq3AOUKRmPiLs4Ague%2BFrU42tIUixF4KZiOl9CdYYiJ6ZiAf6Sta7BFgs0EsrXI5Oh5IjeaMk80JNqxZKw4rIgqiPEqSsEaDhO5NTvhgW6m%2Fuc%2Fwuh8L4mCyVbuGzRLyU6%2FfXh3xotOdNz6BVw8ehBtiBMl68zMXLMwS%2BEmx7FWLoamm2%2FjPMGgNKbls87fAGg7UOcWLNL1TTY60RSCXIj2EIsHnbvIfXqu2ZJ2lw%2FHV6%2FM0YjnpIefS9TGxmXjq3wohNFp9Sv8ndOobmaxVQ9%2FZN1xGJObFGSAojBUzywR0ZJpP9IKIx16ySKDqITEFYdbtJ0x%2FCZY2Ntsi6YllQGd82xD%2FICb33DptYuuEJendEQT5KA4BIGh65obDKLJBlX0m1UvZTKEnTNs5oEEptn1JnBF0CxnSK71oTX8ZTCLbyunpT6QO5fT1CoUVRgl1nIYU3fqQiHQqrDN06HhdYYD0Oyef6Gh46cL42%2F3hKGthMfHYL6vqgr6DHWtITone63J9Pm2DGDSbWeIgj7cBjDk76pvmT7O4LtiEMYbTrCNJ2SofMUNWz3EBDAtWeAAOEee6ZjhHKmbQvkFAR77l4fhKDdAeLQ5wLaVl%2BJuxQdDol6GwPwPBnRoRcbTPe3JzDn%2FpjEBjqkAT3ERoCFioswxovW4VTdJM%2BicY1ASya8VDE8dQehxEtAuJ8HkKb1lKhxWG5tBKbkWijIZe1uefqGPnpoJZodG0Xa7YinfrtJEaZD8%2FGBiyWRCUhraMRR5LJfj9qxu27iz5hlSyK8Yn3AxQObdij0NEQN8DW9etB7rZ3Ovgo%2Fy%2BYNg5N3BZxYfFs%2BKv0l1jGtGCTuW24taVOCMDzCdzMLaiGstfzE&X-Amz-Signature=c48372d555112bfaf8db873900f03033c58e597d7c49fadc158eaf0d8a7ee7bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJM7EYO3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDaplNLsAUOK1ftWXm2rFguFMC8%2Br06pDIZebdxgUZq7gIhAIfKnAEaMZLJdojL4P42SDoYPt3lJGIMUyxE9ZS39IxrKv8DCHgQABoMNjM3NDIzMTgzODA1Igzqg2BZhKajEjjLKHYq3AOUKRmPiLs4Ague%2BFrU42tIUixF4KZiOl9CdYYiJ6ZiAf6Sta7BFgs0EsrXI5Oh5IjeaMk80JNqxZKw4rIgqiPEqSsEaDhO5NTvhgW6m%2Fuc%2Fwuh8L4mCyVbuGzRLyU6%2FfXh3xotOdNz6BVw8ehBtiBMl68zMXLMwS%2BEmx7FWLoamm2%2FjPMGgNKbls87fAGg7UOcWLNL1TTY60RSCXIj2EIsHnbvIfXqu2ZJ2lw%2FHV6%2FM0YjnpIefS9TGxmXjq3wohNFp9Sv8ndOobmaxVQ9%2FZN1xGJObFGSAojBUzywR0ZJpP9IKIx16ySKDqITEFYdbtJ0x%2FCZY2Ntsi6YllQGd82xD%2FICb33DptYuuEJendEQT5KA4BIGh65obDKLJBlX0m1UvZTKEnTNs5oEEptn1JnBF0CxnSK71oTX8ZTCLbyunpT6QO5fT1CoUVRgl1nIYU3fqQiHQqrDN06HhdYYD0Oyef6Gh46cL42%2F3hKGthMfHYL6vqgr6DHWtITone63J9Pm2DGDSbWeIgj7cBjDk76pvmT7O4LtiEMYbTrCNJ2SofMUNWz3EBDAtWeAAOEee6ZjhHKmbQvkFAR77l4fhKDdAeLQ5wLaVl%2BJuxQdDol6GwPwPBnRoRcbTPe3JzDn%2FpjEBjqkAT3ERoCFioswxovW4VTdJM%2BicY1ASya8VDE8dQehxEtAuJ8HkKb1lKhxWG5tBKbkWijIZe1uefqGPnpoJZodG0Xa7YinfrtJEaZD8%2FGBiyWRCUhraMRR5LJfj9qxu27iz5hlSyK8Yn3AxQObdij0NEQN8DW9etB7rZ3Ovgo%2Fy%2BYNg5N3BZxYfFs%2BKv0l1jGtGCTuW24taVOCMDzCdzMLaiGstfzE&X-Amz-Signature=822b83de11f80029c3dbf4002faec46af1fa8a332221a20400220c31dcbb1ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJM7EYO3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDaplNLsAUOK1ftWXm2rFguFMC8%2Br06pDIZebdxgUZq7gIhAIfKnAEaMZLJdojL4P42SDoYPt3lJGIMUyxE9ZS39IxrKv8DCHgQABoMNjM3NDIzMTgzODA1Igzqg2BZhKajEjjLKHYq3AOUKRmPiLs4Ague%2BFrU42tIUixF4KZiOl9CdYYiJ6ZiAf6Sta7BFgs0EsrXI5Oh5IjeaMk80JNqxZKw4rIgqiPEqSsEaDhO5NTvhgW6m%2Fuc%2Fwuh8L4mCyVbuGzRLyU6%2FfXh3xotOdNz6BVw8ehBtiBMl68zMXLMwS%2BEmx7FWLoamm2%2FjPMGgNKbls87fAGg7UOcWLNL1TTY60RSCXIj2EIsHnbvIfXqu2ZJ2lw%2FHV6%2FM0YjnpIefS9TGxmXjq3wohNFp9Sv8ndOobmaxVQ9%2FZN1xGJObFGSAojBUzywR0ZJpP9IKIx16ySKDqITEFYdbtJ0x%2FCZY2Ntsi6YllQGd82xD%2FICb33DptYuuEJendEQT5KA4BIGh65obDKLJBlX0m1UvZTKEnTNs5oEEptn1JnBF0CxnSK71oTX8ZTCLbyunpT6QO5fT1CoUVRgl1nIYU3fqQiHQqrDN06HhdYYD0Oyef6Gh46cL42%2F3hKGthMfHYL6vqgr6DHWtITone63J9Pm2DGDSbWeIgj7cBjDk76pvmT7O4LtiEMYbTrCNJ2SofMUNWz3EBDAtWeAAOEee6ZjhHKmbQvkFAR77l4fhKDdAeLQ5wLaVl%2BJuxQdDol6GwPwPBnRoRcbTPe3JzDn%2FpjEBjqkAT3ERoCFioswxovW4VTdJM%2BicY1ASya8VDE8dQehxEtAuJ8HkKb1lKhxWG5tBKbkWijIZe1uefqGPnpoJZodG0Xa7YinfrtJEaZD8%2FGBiyWRCUhraMRR5LJfj9qxu27iz5hlSyK8Yn3AxQObdij0NEQN8DW9etB7rZ3Ovgo%2Fy%2BYNg5N3BZxYfFs%2BKv0l1jGtGCTuW24taVOCMDzCdzMLaiGstfzE&X-Amz-Signature=d717b8bb64a7e9c150f38268f088eeab3f194649e59a06a531d992a46fa27381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJM7EYO3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDaplNLsAUOK1ftWXm2rFguFMC8%2Br06pDIZebdxgUZq7gIhAIfKnAEaMZLJdojL4P42SDoYPt3lJGIMUyxE9ZS39IxrKv8DCHgQABoMNjM3NDIzMTgzODA1Igzqg2BZhKajEjjLKHYq3AOUKRmPiLs4Ague%2BFrU42tIUixF4KZiOl9CdYYiJ6ZiAf6Sta7BFgs0EsrXI5Oh5IjeaMk80JNqxZKw4rIgqiPEqSsEaDhO5NTvhgW6m%2Fuc%2Fwuh8L4mCyVbuGzRLyU6%2FfXh3xotOdNz6BVw8ehBtiBMl68zMXLMwS%2BEmx7FWLoamm2%2FjPMGgNKbls87fAGg7UOcWLNL1TTY60RSCXIj2EIsHnbvIfXqu2ZJ2lw%2FHV6%2FM0YjnpIefS9TGxmXjq3wohNFp9Sv8ndOobmaxVQ9%2FZN1xGJObFGSAojBUzywR0ZJpP9IKIx16ySKDqITEFYdbtJ0x%2FCZY2Ntsi6YllQGd82xD%2FICb33DptYuuEJendEQT5KA4BIGh65obDKLJBlX0m1UvZTKEnTNs5oEEptn1JnBF0CxnSK71oTX8ZTCLbyunpT6QO5fT1CoUVRgl1nIYU3fqQiHQqrDN06HhdYYD0Oyef6Gh46cL42%2F3hKGthMfHYL6vqgr6DHWtITone63J9Pm2DGDSbWeIgj7cBjDk76pvmT7O4LtiEMYbTrCNJ2SofMUNWz3EBDAtWeAAOEee6ZjhHKmbQvkFAR77l4fhKDdAeLQ5wLaVl%2BJuxQdDol6GwPwPBnRoRcbTPe3JzDn%2FpjEBjqkAT3ERoCFioswxovW4VTdJM%2BicY1ASya8VDE8dQehxEtAuJ8HkKb1lKhxWG5tBKbkWijIZe1uefqGPnpoJZodG0Xa7YinfrtJEaZD8%2FGBiyWRCUhraMRR5LJfj9qxu27iz5hlSyK8Yn3AxQObdij0NEQN8DW9etB7rZ3Ovgo%2Fy%2BYNg5N3BZxYfFs%2BKv0l1jGtGCTuW24taVOCMDzCdzMLaiGstfzE&X-Amz-Signature=1326228919195e488cfca49f9f4f7cc2d17274315300a695cad6869a815755f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJM7EYO3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDaplNLsAUOK1ftWXm2rFguFMC8%2Br06pDIZebdxgUZq7gIhAIfKnAEaMZLJdojL4P42SDoYPt3lJGIMUyxE9ZS39IxrKv8DCHgQABoMNjM3NDIzMTgzODA1Igzqg2BZhKajEjjLKHYq3AOUKRmPiLs4Ague%2BFrU42tIUixF4KZiOl9CdYYiJ6ZiAf6Sta7BFgs0EsrXI5Oh5IjeaMk80JNqxZKw4rIgqiPEqSsEaDhO5NTvhgW6m%2Fuc%2Fwuh8L4mCyVbuGzRLyU6%2FfXh3xotOdNz6BVw8ehBtiBMl68zMXLMwS%2BEmx7FWLoamm2%2FjPMGgNKbls87fAGg7UOcWLNL1TTY60RSCXIj2EIsHnbvIfXqu2ZJ2lw%2FHV6%2FM0YjnpIefS9TGxmXjq3wohNFp9Sv8ndOobmaxVQ9%2FZN1xGJObFGSAojBUzywR0ZJpP9IKIx16ySKDqITEFYdbtJ0x%2FCZY2Ntsi6YllQGd82xD%2FICb33DptYuuEJendEQT5KA4BIGh65obDKLJBlX0m1UvZTKEnTNs5oEEptn1JnBF0CxnSK71oTX8ZTCLbyunpT6QO5fT1CoUVRgl1nIYU3fqQiHQqrDN06HhdYYD0Oyef6Gh46cL42%2F3hKGthMfHYL6vqgr6DHWtITone63J9Pm2DGDSbWeIgj7cBjDk76pvmT7O4LtiEMYbTrCNJ2SofMUNWz3EBDAtWeAAOEee6ZjhHKmbQvkFAR77l4fhKDdAeLQ5wLaVl%2BJuxQdDol6GwPwPBnRoRcbTPe3JzDn%2FpjEBjqkAT3ERoCFioswxovW4VTdJM%2BicY1ASya8VDE8dQehxEtAuJ8HkKb1lKhxWG5tBKbkWijIZe1uefqGPnpoJZodG0Xa7YinfrtJEaZD8%2FGBiyWRCUhraMRR5LJfj9qxu27iz5hlSyK8Yn3AxQObdij0NEQN8DW9etB7rZ3Ovgo%2Fy%2BYNg5N3BZxYfFs%2BKv0l1jGtGCTuW24taVOCMDzCdzMLaiGstfzE&X-Amz-Signature=8d8742ee88e190002d6746e73c7b0b14090dd551f4bc3c11dd33d2f98b37ddf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
