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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L32LHFA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYxhyAkDMZUW%2F3USN4LY57TLip6u6AeJHOKUoJMzQkIAIhAK4TIpoirZG4NgRUstRYJGETlEW4d6EP88SHlwkpnjApKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi9P4e3phjeJVABZkq3AN4GI6VBU1cgpj%2BENDWelVsGVSuG6PFAP40T1LTfALLI3uNmOVCz5wbZ5uPJ%2BTtU2n%2BdO3apGkpdZ3EL%2BXtt6pl%2BsjL3j4HLnkNHUEauAwJQfle%2Fg7kdjngEkGrveBjLaia1gl3%2BIEj1BVWouDiMvAuN0haBWM7IZAc%2BiYy2z1ZrOKZJojQD1s7TRYodJLV5L6fL%2FAlG61%2BbQ9TpGkMW1xCzHoBlXFiJLeXpGrrEJAZl0IC2ZBzIgscmetBPi37yBPFGTmTYpVvUx8wh1kYat3cz4bDPCbDQhN1hS3i%2BjrZsUtNPm7ohSCapZaz3H8MBAucdLTlNdzdV%2FEBnXA%2BPK93G4iy1jelOsQ2UYI9KJPo93F90dz%2Fm7Bpnrby4ue3Dc62Yj75%2FFUADmTydBNfJLYNlFlmLDtx7rQ1j8IJjdrca5XvzT3vGnsyP62kKDQM71JWtwqsQKro9HiWvKvvgKwP1Lq1sxFjziv7G7GeNtH2vHDa6PMlstfnF5CwwSA0dGdVZxeT69iX3pM%2F7jSw%2FyGz570kAVYSilhNakd3R93UW%2FqT6q%2F57p7mmoHH9KcN%2B4oC8bdSwlOApKWeRAqU0quKs9GvDT6FIl4R8KMYDEoel%2FVbL%2BQl9gLnthkuIDCF6anEBjqkAYc6AIhOFtlq%2BRW04oNtToQ%2Fk3aB2ZkJys5HuKzBkTY0SHgtwerFjq4b1LGWYuGJFm%2BdbhncTkmB%2BN95oN%2FpvpmiGIR1P9qBowz%2BIwMk%2FSxsnV0gdq628wKSYCNi7%2FlZG1oXNKG65iKbuFXVhhHuNOto14J%2FmgJC6rEh79jGVZygglfNwAK54RN4z9GuRa7cFk21bCQlLub8qOOLNxoh1v%2FpONxy&X-Amz-Signature=b090d3a52fb138bb4d03c0b65ab3674cabf6c43784e7c23aa810b189ec10a06e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L32LHFA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYxhyAkDMZUW%2F3USN4LY57TLip6u6AeJHOKUoJMzQkIAIhAK4TIpoirZG4NgRUstRYJGETlEW4d6EP88SHlwkpnjApKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi9P4e3phjeJVABZkq3AN4GI6VBU1cgpj%2BENDWelVsGVSuG6PFAP40T1LTfALLI3uNmOVCz5wbZ5uPJ%2BTtU2n%2BdO3apGkpdZ3EL%2BXtt6pl%2BsjL3j4HLnkNHUEauAwJQfle%2Fg7kdjngEkGrveBjLaia1gl3%2BIEj1BVWouDiMvAuN0haBWM7IZAc%2BiYy2z1ZrOKZJojQD1s7TRYodJLV5L6fL%2FAlG61%2BbQ9TpGkMW1xCzHoBlXFiJLeXpGrrEJAZl0IC2ZBzIgscmetBPi37yBPFGTmTYpVvUx8wh1kYat3cz4bDPCbDQhN1hS3i%2BjrZsUtNPm7ohSCapZaz3H8MBAucdLTlNdzdV%2FEBnXA%2BPK93G4iy1jelOsQ2UYI9KJPo93F90dz%2Fm7Bpnrby4ue3Dc62Yj75%2FFUADmTydBNfJLYNlFlmLDtx7rQ1j8IJjdrca5XvzT3vGnsyP62kKDQM71JWtwqsQKro9HiWvKvvgKwP1Lq1sxFjziv7G7GeNtH2vHDa6PMlstfnF5CwwSA0dGdVZxeT69iX3pM%2F7jSw%2FyGz570kAVYSilhNakd3R93UW%2FqT6q%2F57p7mmoHH9KcN%2B4oC8bdSwlOApKWeRAqU0quKs9GvDT6FIl4R8KMYDEoel%2FVbL%2BQl9gLnthkuIDCF6anEBjqkAYc6AIhOFtlq%2BRW04oNtToQ%2Fk3aB2ZkJys5HuKzBkTY0SHgtwerFjq4b1LGWYuGJFm%2BdbhncTkmB%2BN95oN%2FpvpmiGIR1P9qBowz%2BIwMk%2FSxsnV0gdq628wKSYCNi7%2FlZG1oXNKG65iKbuFXVhhHuNOto14J%2FmgJC6rEh79jGVZygglfNwAK54RN4z9GuRa7cFk21bCQlLub8qOOLNxoh1v%2FpONxy&X-Amz-Signature=9102f5a33b1004d77417dfb2a25fb793618f65de59427fea5da7a3c84f9185b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L32LHFA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYxhyAkDMZUW%2F3USN4LY57TLip6u6AeJHOKUoJMzQkIAIhAK4TIpoirZG4NgRUstRYJGETlEW4d6EP88SHlwkpnjApKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi9P4e3phjeJVABZkq3AN4GI6VBU1cgpj%2BENDWelVsGVSuG6PFAP40T1LTfALLI3uNmOVCz5wbZ5uPJ%2BTtU2n%2BdO3apGkpdZ3EL%2BXtt6pl%2BsjL3j4HLnkNHUEauAwJQfle%2Fg7kdjngEkGrveBjLaia1gl3%2BIEj1BVWouDiMvAuN0haBWM7IZAc%2BiYy2z1ZrOKZJojQD1s7TRYodJLV5L6fL%2FAlG61%2BbQ9TpGkMW1xCzHoBlXFiJLeXpGrrEJAZl0IC2ZBzIgscmetBPi37yBPFGTmTYpVvUx8wh1kYat3cz4bDPCbDQhN1hS3i%2BjrZsUtNPm7ohSCapZaz3H8MBAucdLTlNdzdV%2FEBnXA%2BPK93G4iy1jelOsQ2UYI9KJPo93F90dz%2Fm7Bpnrby4ue3Dc62Yj75%2FFUADmTydBNfJLYNlFlmLDtx7rQ1j8IJjdrca5XvzT3vGnsyP62kKDQM71JWtwqsQKro9HiWvKvvgKwP1Lq1sxFjziv7G7GeNtH2vHDa6PMlstfnF5CwwSA0dGdVZxeT69iX3pM%2F7jSw%2FyGz570kAVYSilhNakd3R93UW%2FqT6q%2F57p7mmoHH9KcN%2B4oC8bdSwlOApKWeRAqU0quKs9GvDT6FIl4R8KMYDEoel%2FVbL%2BQl9gLnthkuIDCF6anEBjqkAYc6AIhOFtlq%2BRW04oNtToQ%2Fk3aB2ZkJys5HuKzBkTY0SHgtwerFjq4b1LGWYuGJFm%2BdbhncTkmB%2BN95oN%2FpvpmiGIR1P9qBowz%2BIwMk%2FSxsnV0gdq628wKSYCNi7%2FlZG1oXNKG65iKbuFXVhhHuNOto14J%2FmgJC6rEh79jGVZygglfNwAK54RN4z9GuRa7cFk21bCQlLub8qOOLNxoh1v%2FpONxy&X-Amz-Signature=5c3ddc891e80332de333d261cd58d1184d9fca68577e6f238e8017b5f90dbd17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L32LHFA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYxhyAkDMZUW%2F3USN4LY57TLip6u6AeJHOKUoJMzQkIAIhAK4TIpoirZG4NgRUstRYJGETlEW4d6EP88SHlwkpnjApKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi9P4e3phjeJVABZkq3AN4GI6VBU1cgpj%2BENDWelVsGVSuG6PFAP40T1LTfALLI3uNmOVCz5wbZ5uPJ%2BTtU2n%2BdO3apGkpdZ3EL%2BXtt6pl%2BsjL3j4HLnkNHUEauAwJQfle%2Fg7kdjngEkGrveBjLaia1gl3%2BIEj1BVWouDiMvAuN0haBWM7IZAc%2BiYy2z1ZrOKZJojQD1s7TRYodJLV5L6fL%2FAlG61%2BbQ9TpGkMW1xCzHoBlXFiJLeXpGrrEJAZl0IC2ZBzIgscmetBPi37yBPFGTmTYpVvUx8wh1kYat3cz4bDPCbDQhN1hS3i%2BjrZsUtNPm7ohSCapZaz3H8MBAucdLTlNdzdV%2FEBnXA%2BPK93G4iy1jelOsQ2UYI9KJPo93F90dz%2Fm7Bpnrby4ue3Dc62Yj75%2FFUADmTydBNfJLYNlFlmLDtx7rQ1j8IJjdrca5XvzT3vGnsyP62kKDQM71JWtwqsQKro9HiWvKvvgKwP1Lq1sxFjziv7G7GeNtH2vHDa6PMlstfnF5CwwSA0dGdVZxeT69iX3pM%2F7jSw%2FyGz570kAVYSilhNakd3R93UW%2FqT6q%2F57p7mmoHH9KcN%2B4oC8bdSwlOApKWeRAqU0quKs9GvDT6FIl4R8KMYDEoel%2FVbL%2BQl9gLnthkuIDCF6anEBjqkAYc6AIhOFtlq%2BRW04oNtToQ%2Fk3aB2ZkJys5HuKzBkTY0SHgtwerFjq4b1LGWYuGJFm%2BdbhncTkmB%2BN95oN%2FpvpmiGIR1P9qBowz%2BIwMk%2FSxsnV0gdq628wKSYCNi7%2FlZG1oXNKG65iKbuFXVhhHuNOto14J%2FmgJC6rEh79jGVZygglfNwAK54RN4z9GuRa7cFk21bCQlLub8qOOLNxoh1v%2FpONxy&X-Amz-Signature=28e8736d6feef88905c1fdf09c67bc1d593a11b4041d820b37b66c75cbb28e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L32LHFA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYxhyAkDMZUW%2F3USN4LY57TLip6u6AeJHOKUoJMzQkIAIhAK4TIpoirZG4NgRUstRYJGETlEW4d6EP88SHlwkpnjApKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi9P4e3phjeJVABZkq3AN4GI6VBU1cgpj%2BENDWelVsGVSuG6PFAP40T1LTfALLI3uNmOVCz5wbZ5uPJ%2BTtU2n%2BdO3apGkpdZ3EL%2BXtt6pl%2BsjL3j4HLnkNHUEauAwJQfle%2Fg7kdjngEkGrveBjLaia1gl3%2BIEj1BVWouDiMvAuN0haBWM7IZAc%2BiYy2z1ZrOKZJojQD1s7TRYodJLV5L6fL%2FAlG61%2BbQ9TpGkMW1xCzHoBlXFiJLeXpGrrEJAZl0IC2ZBzIgscmetBPi37yBPFGTmTYpVvUx8wh1kYat3cz4bDPCbDQhN1hS3i%2BjrZsUtNPm7ohSCapZaz3H8MBAucdLTlNdzdV%2FEBnXA%2BPK93G4iy1jelOsQ2UYI9KJPo93F90dz%2Fm7Bpnrby4ue3Dc62Yj75%2FFUADmTydBNfJLYNlFlmLDtx7rQ1j8IJjdrca5XvzT3vGnsyP62kKDQM71JWtwqsQKro9HiWvKvvgKwP1Lq1sxFjziv7G7GeNtH2vHDa6PMlstfnF5CwwSA0dGdVZxeT69iX3pM%2F7jSw%2FyGz570kAVYSilhNakd3R93UW%2FqT6q%2F57p7mmoHH9KcN%2B4oC8bdSwlOApKWeRAqU0quKs9GvDT6FIl4R8KMYDEoel%2FVbL%2BQl9gLnthkuIDCF6anEBjqkAYc6AIhOFtlq%2BRW04oNtToQ%2Fk3aB2ZkJys5HuKzBkTY0SHgtwerFjq4b1LGWYuGJFm%2BdbhncTkmB%2BN95oN%2FpvpmiGIR1P9qBowz%2BIwMk%2FSxsnV0gdq628wKSYCNi7%2FlZG1oXNKG65iKbuFXVhhHuNOto14J%2FmgJC6rEh79jGVZygglfNwAK54RN4z9GuRa7cFk21bCQlLub8qOOLNxoh1v%2FpONxy&X-Amz-Signature=d25a83aa545e10d9c966fbffd7aca4777a68d6d82e90bde042580cbd8ff80b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L32LHFA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYxhyAkDMZUW%2F3USN4LY57TLip6u6AeJHOKUoJMzQkIAIhAK4TIpoirZG4NgRUstRYJGETlEW4d6EP88SHlwkpnjApKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi9P4e3phjeJVABZkq3AN4GI6VBU1cgpj%2BENDWelVsGVSuG6PFAP40T1LTfALLI3uNmOVCz5wbZ5uPJ%2BTtU2n%2BdO3apGkpdZ3EL%2BXtt6pl%2BsjL3j4HLnkNHUEauAwJQfle%2Fg7kdjngEkGrveBjLaia1gl3%2BIEj1BVWouDiMvAuN0haBWM7IZAc%2BiYy2z1ZrOKZJojQD1s7TRYodJLV5L6fL%2FAlG61%2BbQ9TpGkMW1xCzHoBlXFiJLeXpGrrEJAZl0IC2ZBzIgscmetBPi37yBPFGTmTYpVvUx8wh1kYat3cz4bDPCbDQhN1hS3i%2BjrZsUtNPm7ohSCapZaz3H8MBAucdLTlNdzdV%2FEBnXA%2BPK93G4iy1jelOsQ2UYI9KJPo93F90dz%2Fm7Bpnrby4ue3Dc62Yj75%2FFUADmTydBNfJLYNlFlmLDtx7rQ1j8IJjdrca5XvzT3vGnsyP62kKDQM71JWtwqsQKro9HiWvKvvgKwP1Lq1sxFjziv7G7GeNtH2vHDa6PMlstfnF5CwwSA0dGdVZxeT69iX3pM%2F7jSw%2FyGz570kAVYSilhNakd3R93UW%2FqT6q%2F57p7mmoHH9KcN%2B4oC8bdSwlOApKWeRAqU0quKs9GvDT6FIl4R8KMYDEoel%2FVbL%2BQl9gLnthkuIDCF6anEBjqkAYc6AIhOFtlq%2BRW04oNtToQ%2Fk3aB2ZkJys5HuKzBkTY0SHgtwerFjq4b1LGWYuGJFm%2BdbhncTkmB%2BN95oN%2FpvpmiGIR1P9qBowz%2BIwMk%2FSxsnV0gdq628wKSYCNi7%2FlZG1oXNKG65iKbuFXVhhHuNOto14J%2FmgJC6rEh79jGVZygglfNwAK54RN4z9GuRa7cFk21bCQlLub8qOOLNxoh1v%2FpONxy&X-Amz-Signature=53ae4dc8dac6c06a49e18b4eb65a174b9925404e85d449f455775de8bc861033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L32LHFA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYxhyAkDMZUW%2F3USN4LY57TLip6u6AeJHOKUoJMzQkIAIhAK4TIpoirZG4NgRUstRYJGETlEW4d6EP88SHlwkpnjApKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi9P4e3phjeJVABZkq3AN4GI6VBU1cgpj%2BENDWelVsGVSuG6PFAP40T1LTfALLI3uNmOVCz5wbZ5uPJ%2BTtU2n%2BdO3apGkpdZ3EL%2BXtt6pl%2BsjL3j4HLnkNHUEauAwJQfle%2Fg7kdjngEkGrveBjLaia1gl3%2BIEj1BVWouDiMvAuN0haBWM7IZAc%2BiYy2z1ZrOKZJojQD1s7TRYodJLV5L6fL%2FAlG61%2BbQ9TpGkMW1xCzHoBlXFiJLeXpGrrEJAZl0IC2ZBzIgscmetBPi37yBPFGTmTYpVvUx8wh1kYat3cz4bDPCbDQhN1hS3i%2BjrZsUtNPm7ohSCapZaz3H8MBAucdLTlNdzdV%2FEBnXA%2BPK93G4iy1jelOsQ2UYI9KJPo93F90dz%2Fm7Bpnrby4ue3Dc62Yj75%2FFUADmTydBNfJLYNlFlmLDtx7rQ1j8IJjdrca5XvzT3vGnsyP62kKDQM71JWtwqsQKro9HiWvKvvgKwP1Lq1sxFjziv7G7GeNtH2vHDa6PMlstfnF5CwwSA0dGdVZxeT69iX3pM%2F7jSw%2FyGz570kAVYSilhNakd3R93UW%2FqT6q%2F57p7mmoHH9KcN%2B4oC8bdSwlOApKWeRAqU0quKs9GvDT6FIl4R8KMYDEoel%2FVbL%2BQl9gLnthkuIDCF6anEBjqkAYc6AIhOFtlq%2BRW04oNtToQ%2Fk3aB2ZkJys5HuKzBkTY0SHgtwerFjq4b1LGWYuGJFm%2BdbhncTkmB%2BN95oN%2FpvpmiGIR1P9qBowz%2BIwMk%2FSxsnV0gdq628wKSYCNi7%2FlZG1oXNKG65iKbuFXVhhHuNOto14J%2FmgJC6rEh79jGVZygglfNwAK54RN4z9GuRa7cFk21bCQlLub8qOOLNxoh1v%2FpONxy&X-Amz-Signature=3fbbaf634227644ca520377691c09e03e2d8e2b11f06bfd0e70637eb7812a26f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L32LHFA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYxhyAkDMZUW%2F3USN4LY57TLip6u6AeJHOKUoJMzQkIAIhAK4TIpoirZG4NgRUstRYJGETlEW4d6EP88SHlwkpnjApKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi9P4e3phjeJVABZkq3AN4GI6VBU1cgpj%2BENDWelVsGVSuG6PFAP40T1LTfALLI3uNmOVCz5wbZ5uPJ%2BTtU2n%2BdO3apGkpdZ3EL%2BXtt6pl%2BsjL3j4HLnkNHUEauAwJQfle%2Fg7kdjngEkGrveBjLaia1gl3%2BIEj1BVWouDiMvAuN0haBWM7IZAc%2BiYy2z1ZrOKZJojQD1s7TRYodJLV5L6fL%2FAlG61%2BbQ9TpGkMW1xCzHoBlXFiJLeXpGrrEJAZl0IC2ZBzIgscmetBPi37yBPFGTmTYpVvUx8wh1kYat3cz4bDPCbDQhN1hS3i%2BjrZsUtNPm7ohSCapZaz3H8MBAucdLTlNdzdV%2FEBnXA%2BPK93G4iy1jelOsQ2UYI9KJPo93F90dz%2Fm7Bpnrby4ue3Dc62Yj75%2FFUADmTydBNfJLYNlFlmLDtx7rQ1j8IJjdrca5XvzT3vGnsyP62kKDQM71JWtwqsQKro9HiWvKvvgKwP1Lq1sxFjziv7G7GeNtH2vHDa6PMlstfnF5CwwSA0dGdVZxeT69iX3pM%2F7jSw%2FyGz570kAVYSilhNakd3R93UW%2FqT6q%2F57p7mmoHH9KcN%2B4oC8bdSwlOApKWeRAqU0quKs9GvDT6FIl4R8KMYDEoel%2FVbL%2BQl9gLnthkuIDCF6anEBjqkAYc6AIhOFtlq%2BRW04oNtToQ%2Fk3aB2ZkJys5HuKzBkTY0SHgtwerFjq4b1LGWYuGJFm%2BdbhncTkmB%2BN95oN%2FpvpmiGIR1P9qBowz%2BIwMk%2FSxsnV0gdq628wKSYCNi7%2FlZG1oXNKG65iKbuFXVhhHuNOto14J%2FmgJC6rEh79jGVZygglfNwAK54RN4z9GuRa7cFk21bCQlLub8qOOLNxoh1v%2FpONxy&X-Amz-Signature=5e2070c29725492059ccbcbab164f904a3d50f66503995e9ba3a11db4a2997be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L32LHFA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYxhyAkDMZUW%2F3USN4LY57TLip6u6AeJHOKUoJMzQkIAIhAK4TIpoirZG4NgRUstRYJGETlEW4d6EP88SHlwkpnjApKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi9P4e3phjeJVABZkq3AN4GI6VBU1cgpj%2BENDWelVsGVSuG6PFAP40T1LTfALLI3uNmOVCz5wbZ5uPJ%2BTtU2n%2BdO3apGkpdZ3EL%2BXtt6pl%2BsjL3j4HLnkNHUEauAwJQfle%2Fg7kdjngEkGrveBjLaia1gl3%2BIEj1BVWouDiMvAuN0haBWM7IZAc%2BiYy2z1ZrOKZJojQD1s7TRYodJLV5L6fL%2FAlG61%2BbQ9TpGkMW1xCzHoBlXFiJLeXpGrrEJAZl0IC2ZBzIgscmetBPi37yBPFGTmTYpVvUx8wh1kYat3cz4bDPCbDQhN1hS3i%2BjrZsUtNPm7ohSCapZaz3H8MBAucdLTlNdzdV%2FEBnXA%2BPK93G4iy1jelOsQ2UYI9KJPo93F90dz%2Fm7Bpnrby4ue3Dc62Yj75%2FFUADmTydBNfJLYNlFlmLDtx7rQ1j8IJjdrca5XvzT3vGnsyP62kKDQM71JWtwqsQKro9HiWvKvvgKwP1Lq1sxFjziv7G7GeNtH2vHDa6PMlstfnF5CwwSA0dGdVZxeT69iX3pM%2F7jSw%2FyGz570kAVYSilhNakd3R93UW%2FqT6q%2F57p7mmoHH9KcN%2B4oC8bdSwlOApKWeRAqU0quKs9GvDT6FIl4R8KMYDEoel%2FVbL%2BQl9gLnthkuIDCF6anEBjqkAYc6AIhOFtlq%2BRW04oNtToQ%2Fk3aB2ZkJys5HuKzBkTY0SHgtwerFjq4b1LGWYuGJFm%2BdbhncTkmB%2BN95oN%2FpvpmiGIR1P9qBowz%2BIwMk%2FSxsnV0gdq628wKSYCNi7%2FlZG1oXNKG65iKbuFXVhhHuNOto14J%2FmgJC6rEh79jGVZygglfNwAK54RN4z9GuRa7cFk21bCQlLub8qOOLNxoh1v%2FpONxy&X-Amz-Signature=4dd25cf48d7609ae143489c7202364a4168de13dd43fd26b3f9bfaea964a30d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA3TR4KC%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX%2FmsxqCGZPizSbc9pYa%2BnZlbh6ltvjLFWI%2BZ2t3yi0gIhAOTwIsrJsFmIZ%2BglnAPnOvPMrsMlhI2XfoMPVUuy%2FClxKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwx6syeKzWDeRBopFEq3ANZYdBkbJIM9%2BMSNtjUOyGMk80GSHyLha0%2FdijVbvqAhnPW7IX%2BiThkbbZBdU0bbc65nBqBSjbvZCGa20N2jabTbFsPat1T3KMTAfBi7OBBcV0c0PtVmPKrWs9ztp%2BCdM07z3eBkuLm4kpukYGrzPruxysGYUQjRUrw7IVjL0kq6LQ%2BJdjnTTVG8iuNq8mO1HHo9b4r%2F8G9yFIYvtbswYTgUi9p%2BJKqb86ZzJhqbGGPIBU%2FKyHmA9mGLIGv%2BiTp5pTg%2BUPorKmcO2rUf9zhRtIwGZwkfu9oeKp0D50qhX9HoXqEQ7PKdqeK44DhIkzrHGDOc%2B%2F6VmOyZUnVFGz8finbWI1V0G1BqItZBpknaUwiOj0j%2FPf1GYVZbVYujpYKXqJs5VPquPUslhmQsWQun2AB6BBtXVgL%2FeE7u2Xmlx%2BEacMnRteEPZP5YLj1jgjict79f%2B5ndUKjQQKFIAqQXOhChOUxw%2Bd9d%2FbKf0KkyD6j9xKvH5r%2FT3esD8aF1x37Pam1%2FHu1N02mVYsFrej9dNtoxkO4%2B2VRVZb1%2BmqrHJPmhebQkRvR%2BzUsj0y3SZ0xX9OoCJQyslQejOgxJm6egqXDqZp5FFmBhrgHWfgUS3hsRwxH4fXS2TgqDCMuZzDM6KnEBjqkAen9EAFsYDEoHVTirTyzI2RHQfHy8Xn%2FNTOTNZLoMBP4m2lGZTFdwk7ho3zjaZiDxdP%2Fymw1JKArVcGD9%2FvNsLxibY5iuwZ17mGpeJ0rXAPHl2dSeZiF3iNuo0atdwr0UTJFV13Ec9zC8EzrT3xXKMdHM6uF9073Uzs3dn0bUE%2Fr4WJdK7HP9EDeDBoy6Jvbgaw9%2FWtIx01QZd2au%2BFpZuiRPezk&X-Amz-Signature=98382509d57dea94c8d0171ee7d18e7cb1eb37da4d3cf6cc8b83deeac91fc644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L32LHFA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYxhyAkDMZUW%2F3USN4LY57TLip6u6AeJHOKUoJMzQkIAIhAK4TIpoirZG4NgRUstRYJGETlEW4d6EP88SHlwkpnjApKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi9P4e3phjeJVABZkq3AN4GI6VBU1cgpj%2BENDWelVsGVSuG6PFAP40T1LTfALLI3uNmOVCz5wbZ5uPJ%2BTtU2n%2BdO3apGkpdZ3EL%2BXtt6pl%2BsjL3j4HLnkNHUEauAwJQfle%2Fg7kdjngEkGrveBjLaia1gl3%2BIEj1BVWouDiMvAuN0haBWM7IZAc%2BiYy2z1ZrOKZJojQD1s7TRYodJLV5L6fL%2FAlG61%2BbQ9TpGkMW1xCzHoBlXFiJLeXpGrrEJAZl0IC2ZBzIgscmetBPi37yBPFGTmTYpVvUx8wh1kYat3cz4bDPCbDQhN1hS3i%2BjrZsUtNPm7ohSCapZaz3H8MBAucdLTlNdzdV%2FEBnXA%2BPK93G4iy1jelOsQ2UYI9KJPo93F90dz%2Fm7Bpnrby4ue3Dc62Yj75%2FFUADmTydBNfJLYNlFlmLDtx7rQ1j8IJjdrca5XvzT3vGnsyP62kKDQM71JWtwqsQKro9HiWvKvvgKwP1Lq1sxFjziv7G7GeNtH2vHDa6PMlstfnF5CwwSA0dGdVZxeT69iX3pM%2F7jSw%2FyGz570kAVYSilhNakd3R93UW%2FqT6q%2F57p7mmoHH9KcN%2B4oC8bdSwlOApKWeRAqU0quKs9GvDT6FIl4R8KMYDEoel%2FVbL%2BQl9gLnthkuIDCF6anEBjqkAYc6AIhOFtlq%2BRW04oNtToQ%2Fk3aB2ZkJys5HuKzBkTY0SHgtwerFjq4b1LGWYuGJFm%2BdbhncTkmB%2BN95oN%2FpvpmiGIR1P9qBowz%2BIwMk%2FSxsnV0gdq628wKSYCNi7%2FlZG1oXNKG65iKbuFXVhhHuNOto14J%2FmgJC6rEh79jGVZygglfNwAK54RN4z9GuRa7cFk21bCQlLub8qOOLNxoh1v%2FpONxy&X-Amz-Signature=b9d51dbb7d4279cd9a994e87342876f5f960980afb3f99438795a0db44827ebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7E6DXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgSeHH4Q9B%2FosTm%2BwGyDvK60DpRORNtvzVsIhgywC5aAiEAgZ6yEXFGWC7Xj8W3Q8Hm7bosVWqH2wrmBwaL80FmOFIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGgQmPOxDQGUPYY2yrcA1%2Fh%2FtAKhRXlcGYRMaKyTMurd%2BS7MiNL4wOMuT9cfoZ9zWzpop%2Bx7oi9Qu3JSIbW34p48TCDmYJ6o0wWngqz%2BknWL%2FDKw8W%2Bf%2FQNR%2BaKYz25oxLO%2FVIMOkmyIt1dPUiOyAJ%2Ftf6Vk%2FnoSUnFOyxQnrYnovjlbazoshUyaqYnChVFQ0YHVL3rtQITDTbGZsyqhacSR1A5Q%2F%2BTRHwLSGG1iRtOeZQyH3s0I5ITyD%2BaYS4LNdbbexUhBLiY5Du0AX2yHMgkd%2FfyhuvzXw32RHJoPOYbkZJJm8cJ6kDwcOTTfMKCoBaTOO09JtuFTEP9HH%2Ft7DrC0CthmDP4kTmP%2BlDgZlNleammrqWbrYZe6kKD1UrNmKTo1%2F1ZuiZW0oCWgen%2B3AKrGNLkZl4%2FgNBcKGLwQPie71DjtKLhM8xnMEWyB06wobyqRR%2BVyRH94p5QAuK6%2FhBk%2FgvVLuKBAJJ0LMVoxXnEdiiYKioeHsF8sT1N7wvTLrj8X3OV052S%2B4umsrIiXzNOjYb86cW6vHm14jE6qcVPEcgIwnHF7gJuMERibIpJn0mHY0a8d4SOQNlshz3T%2BAilz2BIGpWiwm%2BjXS%2BZvMmP1uZ0mnQgqxUi7vhx9%2FN5Qh6OMcrb2%2BEwuUa2MPXoqcQGOqUBw5IJYUG4td92AQ9S%2BJbVUilbdIdyXY1IFoXXQ9qsRbUyRC%2F6FAuHRPXRoqtFxR2kcnyzy%2FZWy9I5xxReweMAD9sEVYLZ4olZR%2BsBW66z2mtgU06ZDeXYf0RLlDyAVfYNlLweSngMX%2FVWil6XFGZzvryqeQzJmfcSACZ%2Fu%2FgSK12KoupfQT4v%2BuHdlDgyzlaLufQOm7jP39w4XIntei%2Bk9J4Ji7fQ&X-Amz-Signature=fe2b948cabed0b9da8ced2889ebbe63fa6e1f6e1d6249b01c2c0550abcc81893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7E6DXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgSeHH4Q9B%2FosTm%2BwGyDvK60DpRORNtvzVsIhgywC5aAiEAgZ6yEXFGWC7Xj8W3Q8Hm7bosVWqH2wrmBwaL80FmOFIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGgQmPOxDQGUPYY2yrcA1%2Fh%2FtAKhRXlcGYRMaKyTMurd%2BS7MiNL4wOMuT9cfoZ9zWzpop%2Bx7oi9Qu3JSIbW34p48TCDmYJ6o0wWngqz%2BknWL%2FDKw8W%2Bf%2FQNR%2BaKYz25oxLO%2FVIMOkmyIt1dPUiOyAJ%2Ftf6Vk%2FnoSUnFOyxQnrYnovjlbazoshUyaqYnChVFQ0YHVL3rtQITDTbGZsyqhacSR1A5Q%2F%2BTRHwLSGG1iRtOeZQyH3s0I5ITyD%2BaYS4LNdbbexUhBLiY5Du0AX2yHMgkd%2FfyhuvzXw32RHJoPOYbkZJJm8cJ6kDwcOTTfMKCoBaTOO09JtuFTEP9HH%2Ft7DrC0CthmDP4kTmP%2BlDgZlNleammrqWbrYZe6kKD1UrNmKTo1%2F1ZuiZW0oCWgen%2B3AKrGNLkZl4%2FgNBcKGLwQPie71DjtKLhM8xnMEWyB06wobyqRR%2BVyRH94p5QAuK6%2FhBk%2FgvVLuKBAJJ0LMVoxXnEdiiYKioeHsF8sT1N7wvTLrj8X3OV052S%2B4umsrIiXzNOjYb86cW6vHm14jE6qcVPEcgIwnHF7gJuMERibIpJn0mHY0a8d4SOQNlshz3T%2BAilz2BIGpWiwm%2BjXS%2BZvMmP1uZ0mnQgqxUi7vhx9%2FN5Qh6OMcrb2%2BEwuUa2MPXoqcQGOqUBw5IJYUG4td92AQ9S%2BJbVUilbdIdyXY1IFoXXQ9qsRbUyRC%2F6FAuHRPXRoqtFxR2kcnyzy%2FZWy9I5xxReweMAD9sEVYLZ4olZR%2BsBW66z2mtgU06ZDeXYf0RLlDyAVfYNlLweSngMX%2FVWil6XFGZzvryqeQzJmfcSACZ%2Fu%2FgSK12KoupfQT4v%2BuHdlDgyzlaLufQOm7jP39w4XIntei%2Bk9J4Ji7fQ&X-Amz-Signature=da9514ca46c12f20fde1740f03e52fd986c2b4a67efe17cde73085465fcdef02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7E6DXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgSeHH4Q9B%2FosTm%2BwGyDvK60DpRORNtvzVsIhgywC5aAiEAgZ6yEXFGWC7Xj8W3Q8Hm7bosVWqH2wrmBwaL80FmOFIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGgQmPOxDQGUPYY2yrcA1%2Fh%2FtAKhRXlcGYRMaKyTMurd%2BS7MiNL4wOMuT9cfoZ9zWzpop%2Bx7oi9Qu3JSIbW34p48TCDmYJ6o0wWngqz%2BknWL%2FDKw8W%2Bf%2FQNR%2BaKYz25oxLO%2FVIMOkmyIt1dPUiOyAJ%2Ftf6Vk%2FnoSUnFOyxQnrYnovjlbazoshUyaqYnChVFQ0YHVL3rtQITDTbGZsyqhacSR1A5Q%2F%2BTRHwLSGG1iRtOeZQyH3s0I5ITyD%2BaYS4LNdbbexUhBLiY5Du0AX2yHMgkd%2FfyhuvzXw32RHJoPOYbkZJJm8cJ6kDwcOTTfMKCoBaTOO09JtuFTEP9HH%2Ft7DrC0CthmDP4kTmP%2BlDgZlNleammrqWbrYZe6kKD1UrNmKTo1%2F1ZuiZW0oCWgen%2B3AKrGNLkZl4%2FgNBcKGLwQPie71DjtKLhM8xnMEWyB06wobyqRR%2BVyRH94p5QAuK6%2FhBk%2FgvVLuKBAJJ0LMVoxXnEdiiYKioeHsF8sT1N7wvTLrj8X3OV052S%2B4umsrIiXzNOjYb86cW6vHm14jE6qcVPEcgIwnHF7gJuMERibIpJn0mHY0a8d4SOQNlshz3T%2BAilz2BIGpWiwm%2BjXS%2BZvMmP1uZ0mnQgqxUi7vhx9%2FN5Qh6OMcrb2%2BEwuUa2MPXoqcQGOqUBw5IJYUG4td92AQ9S%2BJbVUilbdIdyXY1IFoXXQ9qsRbUyRC%2F6FAuHRPXRoqtFxR2kcnyzy%2FZWy9I5xxReweMAD9sEVYLZ4olZR%2BsBW66z2mtgU06ZDeXYf0RLlDyAVfYNlLweSngMX%2FVWil6XFGZzvryqeQzJmfcSACZ%2Fu%2FgSK12KoupfQT4v%2BuHdlDgyzlaLufQOm7jP39w4XIntei%2Bk9J4Ji7fQ&X-Amz-Signature=6b921023d0c5d4a23cc50a263c0fe935b8be0dd476f419d900636f6209990425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7E6DXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgSeHH4Q9B%2FosTm%2BwGyDvK60DpRORNtvzVsIhgywC5aAiEAgZ6yEXFGWC7Xj8W3Q8Hm7bosVWqH2wrmBwaL80FmOFIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGgQmPOxDQGUPYY2yrcA1%2Fh%2FtAKhRXlcGYRMaKyTMurd%2BS7MiNL4wOMuT9cfoZ9zWzpop%2Bx7oi9Qu3JSIbW34p48TCDmYJ6o0wWngqz%2BknWL%2FDKw8W%2Bf%2FQNR%2BaKYz25oxLO%2FVIMOkmyIt1dPUiOyAJ%2Ftf6Vk%2FnoSUnFOyxQnrYnovjlbazoshUyaqYnChVFQ0YHVL3rtQITDTbGZsyqhacSR1A5Q%2F%2BTRHwLSGG1iRtOeZQyH3s0I5ITyD%2BaYS4LNdbbexUhBLiY5Du0AX2yHMgkd%2FfyhuvzXw32RHJoPOYbkZJJm8cJ6kDwcOTTfMKCoBaTOO09JtuFTEP9HH%2Ft7DrC0CthmDP4kTmP%2BlDgZlNleammrqWbrYZe6kKD1UrNmKTo1%2F1ZuiZW0oCWgen%2B3AKrGNLkZl4%2FgNBcKGLwQPie71DjtKLhM8xnMEWyB06wobyqRR%2BVyRH94p5QAuK6%2FhBk%2FgvVLuKBAJJ0LMVoxXnEdiiYKioeHsF8sT1N7wvTLrj8X3OV052S%2B4umsrIiXzNOjYb86cW6vHm14jE6qcVPEcgIwnHF7gJuMERibIpJn0mHY0a8d4SOQNlshz3T%2BAilz2BIGpWiwm%2BjXS%2BZvMmP1uZ0mnQgqxUi7vhx9%2FN5Qh6OMcrb2%2BEwuUa2MPXoqcQGOqUBw5IJYUG4td92AQ9S%2BJbVUilbdIdyXY1IFoXXQ9qsRbUyRC%2F6FAuHRPXRoqtFxR2kcnyzy%2FZWy9I5xxReweMAD9sEVYLZ4olZR%2BsBW66z2mtgU06ZDeXYf0RLlDyAVfYNlLweSngMX%2FVWil6XFGZzvryqeQzJmfcSACZ%2Fu%2FgSK12KoupfQT4v%2BuHdlDgyzlaLufQOm7jP39w4XIntei%2Bk9J4Ji7fQ&X-Amz-Signature=b516e29f38e5e3162fcfe6aec18264530da64ca631eb522b39c17a78de7385a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7E6DXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgSeHH4Q9B%2FosTm%2BwGyDvK60DpRORNtvzVsIhgywC5aAiEAgZ6yEXFGWC7Xj8W3Q8Hm7bosVWqH2wrmBwaL80FmOFIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGgQmPOxDQGUPYY2yrcA1%2Fh%2FtAKhRXlcGYRMaKyTMurd%2BS7MiNL4wOMuT9cfoZ9zWzpop%2Bx7oi9Qu3JSIbW34p48TCDmYJ6o0wWngqz%2BknWL%2FDKw8W%2Bf%2FQNR%2BaKYz25oxLO%2FVIMOkmyIt1dPUiOyAJ%2Ftf6Vk%2FnoSUnFOyxQnrYnovjlbazoshUyaqYnChVFQ0YHVL3rtQITDTbGZsyqhacSR1A5Q%2F%2BTRHwLSGG1iRtOeZQyH3s0I5ITyD%2BaYS4LNdbbexUhBLiY5Du0AX2yHMgkd%2FfyhuvzXw32RHJoPOYbkZJJm8cJ6kDwcOTTfMKCoBaTOO09JtuFTEP9HH%2Ft7DrC0CthmDP4kTmP%2BlDgZlNleammrqWbrYZe6kKD1UrNmKTo1%2F1ZuiZW0oCWgen%2B3AKrGNLkZl4%2FgNBcKGLwQPie71DjtKLhM8xnMEWyB06wobyqRR%2BVyRH94p5QAuK6%2FhBk%2FgvVLuKBAJJ0LMVoxXnEdiiYKioeHsF8sT1N7wvTLrj8X3OV052S%2B4umsrIiXzNOjYb86cW6vHm14jE6qcVPEcgIwnHF7gJuMERibIpJn0mHY0a8d4SOQNlshz3T%2BAilz2BIGpWiwm%2BjXS%2BZvMmP1uZ0mnQgqxUi7vhx9%2FN5Qh6OMcrb2%2BEwuUa2MPXoqcQGOqUBw5IJYUG4td92AQ9S%2BJbVUilbdIdyXY1IFoXXQ9qsRbUyRC%2F6FAuHRPXRoqtFxR2kcnyzy%2FZWy9I5xxReweMAD9sEVYLZ4olZR%2BsBW66z2mtgU06ZDeXYf0RLlDyAVfYNlLweSngMX%2FVWil6XFGZzvryqeQzJmfcSACZ%2Fu%2FgSK12KoupfQT4v%2BuHdlDgyzlaLufQOm7jP39w4XIntei%2Bk9J4Ji7fQ&X-Amz-Signature=fa97e7e2d55cb121af42adb0f0452fa5397c911feac7dfa67d2e135a0351c62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7E6DXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgSeHH4Q9B%2FosTm%2BwGyDvK60DpRORNtvzVsIhgywC5aAiEAgZ6yEXFGWC7Xj8W3Q8Hm7bosVWqH2wrmBwaL80FmOFIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGgQmPOxDQGUPYY2yrcA1%2Fh%2FtAKhRXlcGYRMaKyTMurd%2BS7MiNL4wOMuT9cfoZ9zWzpop%2Bx7oi9Qu3JSIbW34p48TCDmYJ6o0wWngqz%2BknWL%2FDKw8W%2Bf%2FQNR%2BaKYz25oxLO%2FVIMOkmyIt1dPUiOyAJ%2Ftf6Vk%2FnoSUnFOyxQnrYnovjlbazoshUyaqYnChVFQ0YHVL3rtQITDTbGZsyqhacSR1A5Q%2F%2BTRHwLSGG1iRtOeZQyH3s0I5ITyD%2BaYS4LNdbbexUhBLiY5Du0AX2yHMgkd%2FfyhuvzXw32RHJoPOYbkZJJm8cJ6kDwcOTTfMKCoBaTOO09JtuFTEP9HH%2Ft7DrC0CthmDP4kTmP%2BlDgZlNleammrqWbrYZe6kKD1UrNmKTo1%2F1ZuiZW0oCWgen%2B3AKrGNLkZl4%2FgNBcKGLwQPie71DjtKLhM8xnMEWyB06wobyqRR%2BVyRH94p5QAuK6%2FhBk%2FgvVLuKBAJJ0LMVoxXnEdiiYKioeHsF8sT1N7wvTLrj8X3OV052S%2B4umsrIiXzNOjYb86cW6vHm14jE6qcVPEcgIwnHF7gJuMERibIpJn0mHY0a8d4SOQNlshz3T%2BAilz2BIGpWiwm%2BjXS%2BZvMmP1uZ0mnQgqxUi7vhx9%2FN5Qh6OMcrb2%2BEwuUa2MPXoqcQGOqUBw5IJYUG4td92AQ9S%2BJbVUilbdIdyXY1IFoXXQ9qsRbUyRC%2F6FAuHRPXRoqtFxR2kcnyzy%2FZWy9I5xxReweMAD9sEVYLZ4olZR%2BsBW66z2mtgU06ZDeXYf0RLlDyAVfYNlLweSngMX%2FVWil6XFGZzvryqeQzJmfcSACZ%2Fu%2FgSK12KoupfQT4v%2BuHdlDgyzlaLufQOm7jP39w4XIntei%2Bk9J4Ji7fQ&X-Amz-Signature=b3767824f0281b89337cb4ea09f6365540a2dfc730ec4ae1ab3f237ef94e51da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7E6DXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgSeHH4Q9B%2FosTm%2BwGyDvK60DpRORNtvzVsIhgywC5aAiEAgZ6yEXFGWC7Xj8W3Q8Hm7bosVWqH2wrmBwaL80FmOFIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGgQmPOxDQGUPYY2yrcA1%2Fh%2FtAKhRXlcGYRMaKyTMurd%2BS7MiNL4wOMuT9cfoZ9zWzpop%2Bx7oi9Qu3JSIbW34p48TCDmYJ6o0wWngqz%2BknWL%2FDKw8W%2Bf%2FQNR%2BaKYz25oxLO%2FVIMOkmyIt1dPUiOyAJ%2Ftf6Vk%2FnoSUnFOyxQnrYnovjlbazoshUyaqYnChVFQ0YHVL3rtQITDTbGZsyqhacSR1A5Q%2F%2BTRHwLSGG1iRtOeZQyH3s0I5ITyD%2BaYS4LNdbbexUhBLiY5Du0AX2yHMgkd%2FfyhuvzXw32RHJoPOYbkZJJm8cJ6kDwcOTTfMKCoBaTOO09JtuFTEP9HH%2Ft7DrC0CthmDP4kTmP%2BlDgZlNleammrqWbrYZe6kKD1UrNmKTo1%2F1ZuiZW0oCWgen%2B3AKrGNLkZl4%2FgNBcKGLwQPie71DjtKLhM8xnMEWyB06wobyqRR%2BVyRH94p5QAuK6%2FhBk%2FgvVLuKBAJJ0LMVoxXnEdiiYKioeHsF8sT1N7wvTLrj8X3OV052S%2B4umsrIiXzNOjYb86cW6vHm14jE6qcVPEcgIwnHF7gJuMERibIpJn0mHY0a8d4SOQNlshz3T%2BAilz2BIGpWiwm%2BjXS%2BZvMmP1uZ0mnQgqxUi7vhx9%2FN5Qh6OMcrb2%2BEwuUa2MPXoqcQGOqUBw5IJYUG4td92AQ9S%2BJbVUilbdIdyXY1IFoXXQ9qsRbUyRC%2F6FAuHRPXRoqtFxR2kcnyzy%2FZWy9I5xxReweMAD9sEVYLZ4olZR%2BsBW66z2mtgU06ZDeXYf0RLlDyAVfYNlLweSngMX%2FVWil6XFGZzvryqeQzJmfcSACZ%2Fu%2FgSK12KoupfQT4v%2BuHdlDgyzlaLufQOm7jP39w4XIntei%2Bk9J4Ji7fQ&X-Amz-Signature=4dc9f04831cfcd3d031e03d5c4acb3e835d66a8120b923efe8958862aa23d431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7E6DXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgSeHH4Q9B%2FosTm%2BwGyDvK60DpRORNtvzVsIhgywC5aAiEAgZ6yEXFGWC7Xj8W3Q8Hm7bosVWqH2wrmBwaL80FmOFIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGgQmPOxDQGUPYY2yrcA1%2Fh%2FtAKhRXlcGYRMaKyTMurd%2BS7MiNL4wOMuT9cfoZ9zWzpop%2Bx7oi9Qu3JSIbW34p48TCDmYJ6o0wWngqz%2BknWL%2FDKw8W%2Bf%2FQNR%2BaKYz25oxLO%2FVIMOkmyIt1dPUiOyAJ%2Ftf6Vk%2FnoSUnFOyxQnrYnovjlbazoshUyaqYnChVFQ0YHVL3rtQITDTbGZsyqhacSR1A5Q%2F%2BTRHwLSGG1iRtOeZQyH3s0I5ITyD%2BaYS4LNdbbexUhBLiY5Du0AX2yHMgkd%2FfyhuvzXw32RHJoPOYbkZJJm8cJ6kDwcOTTfMKCoBaTOO09JtuFTEP9HH%2Ft7DrC0CthmDP4kTmP%2BlDgZlNleammrqWbrYZe6kKD1UrNmKTo1%2F1ZuiZW0oCWgen%2B3AKrGNLkZl4%2FgNBcKGLwQPie71DjtKLhM8xnMEWyB06wobyqRR%2BVyRH94p5QAuK6%2FhBk%2FgvVLuKBAJJ0LMVoxXnEdiiYKioeHsF8sT1N7wvTLrj8X3OV052S%2B4umsrIiXzNOjYb86cW6vHm14jE6qcVPEcgIwnHF7gJuMERibIpJn0mHY0a8d4SOQNlshz3T%2BAilz2BIGpWiwm%2BjXS%2BZvMmP1uZ0mnQgqxUi7vhx9%2FN5Qh6OMcrb2%2BEwuUa2MPXoqcQGOqUBw5IJYUG4td92AQ9S%2BJbVUilbdIdyXY1IFoXXQ9qsRbUyRC%2F6FAuHRPXRoqtFxR2kcnyzy%2FZWy9I5xxReweMAD9sEVYLZ4olZR%2BsBW66z2mtgU06ZDeXYf0RLlDyAVfYNlLweSngMX%2FVWil6XFGZzvryqeQzJmfcSACZ%2Fu%2FgSK12KoupfQT4v%2BuHdlDgyzlaLufQOm7jP39w4XIntei%2Bk9J4Ji7fQ&X-Amz-Signature=2483037b97f8430725077017912b23db3a19f850103245d772f8761ffa858675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
