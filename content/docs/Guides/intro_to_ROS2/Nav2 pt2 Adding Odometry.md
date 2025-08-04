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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5ECT4P%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBk1M4Jz0k2QhMnt7bJsvnBRSdLhpFG1%2FZo5LW9f%2F2etAiAxDWcd0I5TV%2F1KvpBVdHgqh8GzybkPEPDldbI8VZpf3yr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMMd%2BwpJ42YxLr7av7KtwDj9li4BurDBnflJiUoGOBImok3LQqrRnx77FaNcZsoJzgX4XShKybkZffpOFVVqiEiQ6wEp3pVz%2F8uGzJqqIUE11l8NTbGZozYNqVEDn7IBEyu4kM3rwcFvWfxYsCJJuhBBNEbThHs15YZVF9oAjR3oCqOcfAAM5wmiYL2JgR2qW4bbBIYtaTqlXR3Njn%2BsbmGUqUisBglmdAmc9pJYhtqRIf5%2B3jgq5BIVmDfC9yqoiGWJtjRWYyDtqZ6uKbla9joYKEO8o3gep0zxIEmJpoSBzes5P%2B0WSfqIUvbXKxO01Z0qXAclKQ%2F0m1tYx3JqgsnEi2uptl80IREPWfa6rQbpleCFha5JHW4edQ9U%2FY4t4mxHbLuOQat1w64FSWnn1vutIvF14swhPyFTZ2D%2BGRwYoLSWIi1DJ8itjT4mc0x6XX9UlMJXywa96r1m3QRUq1%2FIvcT6Sq1lUQcJiRE1XsJKr30Xg7Px0p3f3nK1Res6bDQ%2FopQwRnj1hg8kKJ%2Fs2eoKDGSJCUk0iUmd1G0fiOlYuFirAOq5C6x3xBTHaAFHsOUk30%2B%2Fqd1Na1eCoMkaFc4P9GONbp2Ka%2BFyraYFLX4vXVhzwCk8Y9ydYJj8bnjVJcUKZIQhh0sTu8qhow2KbCxAY6pgGcy76GEOseyelJ8AoOKiVE9h%2BPUGfzYURhIdYfYd1qcKxzx%2B8GO9N8UuFJ%2BHooQj8OuwB57LS7rX1sH0b82MVMRGuznukUDQhiTni6y5wMRJEE8BIT%2Bm2Kmo7RD30tQkdUVMvCkpVZIxCrYimgdO7zYrkAoNg7BgF%2FN2LU3Vfu5SjbAkFuhoFHJ8IHBVSj8li8oiTY3aVH7KM1z0qOistUlWWt8iO1&X-Amz-Signature=d621db3afb9bf205f40b01f34a7a636acdc1417f8a3a4d316af9c6c7a446272f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5ECT4P%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBk1M4Jz0k2QhMnt7bJsvnBRSdLhpFG1%2FZo5LW9f%2F2etAiAxDWcd0I5TV%2F1KvpBVdHgqh8GzybkPEPDldbI8VZpf3yr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMMd%2BwpJ42YxLr7av7KtwDj9li4BurDBnflJiUoGOBImok3LQqrRnx77FaNcZsoJzgX4XShKybkZffpOFVVqiEiQ6wEp3pVz%2F8uGzJqqIUE11l8NTbGZozYNqVEDn7IBEyu4kM3rwcFvWfxYsCJJuhBBNEbThHs15YZVF9oAjR3oCqOcfAAM5wmiYL2JgR2qW4bbBIYtaTqlXR3Njn%2BsbmGUqUisBglmdAmc9pJYhtqRIf5%2B3jgq5BIVmDfC9yqoiGWJtjRWYyDtqZ6uKbla9joYKEO8o3gep0zxIEmJpoSBzes5P%2B0WSfqIUvbXKxO01Z0qXAclKQ%2F0m1tYx3JqgsnEi2uptl80IREPWfa6rQbpleCFha5JHW4edQ9U%2FY4t4mxHbLuOQat1w64FSWnn1vutIvF14swhPyFTZ2D%2BGRwYoLSWIi1DJ8itjT4mc0x6XX9UlMJXywa96r1m3QRUq1%2FIvcT6Sq1lUQcJiRE1XsJKr30Xg7Px0p3f3nK1Res6bDQ%2FopQwRnj1hg8kKJ%2Fs2eoKDGSJCUk0iUmd1G0fiOlYuFirAOq5C6x3xBTHaAFHsOUk30%2B%2Fqd1Na1eCoMkaFc4P9GONbp2Ka%2BFyraYFLX4vXVhzwCk8Y9ydYJj8bnjVJcUKZIQhh0sTu8qhow2KbCxAY6pgGcy76GEOseyelJ8AoOKiVE9h%2BPUGfzYURhIdYfYd1qcKxzx%2B8GO9N8UuFJ%2BHooQj8OuwB57LS7rX1sH0b82MVMRGuznukUDQhiTni6y5wMRJEE8BIT%2Bm2Kmo7RD30tQkdUVMvCkpVZIxCrYimgdO7zYrkAoNg7BgF%2FN2LU3Vfu5SjbAkFuhoFHJ8IHBVSj8li8oiTY3aVH7KM1z0qOistUlWWt8iO1&X-Amz-Signature=586a6e61e1640da24a4a4b214f985161f533f8a01998528a042fe13d781b942b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5ECT4P%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBk1M4Jz0k2QhMnt7bJsvnBRSdLhpFG1%2FZo5LW9f%2F2etAiAxDWcd0I5TV%2F1KvpBVdHgqh8GzybkPEPDldbI8VZpf3yr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMMd%2BwpJ42YxLr7av7KtwDj9li4BurDBnflJiUoGOBImok3LQqrRnx77FaNcZsoJzgX4XShKybkZffpOFVVqiEiQ6wEp3pVz%2F8uGzJqqIUE11l8NTbGZozYNqVEDn7IBEyu4kM3rwcFvWfxYsCJJuhBBNEbThHs15YZVF9oAjR3oCqOcfAAM5wmiYL2JgR2qW4bbBIYtaTqlXR3Njn%2BsbmGUqUisBglmdAmc9pJYhtqRIf5%2B3jgq5BIVmDfC9yqoiGWJtjRWYyDtqZ6uKbla9joYKEO8o3gep0zxIEmJpoSBzes5P%2B0WSfqIUvbXKxO01Z0qXAclKQ%2F0m1tYx3JqgsnEi2uptl80IREPWfa6rQbpleCFha5JHW4edQ9U%2FY4t4mxHbLuOQat1w64FSWnn1vutIvF14swhPyFTZ2D%2BGRwYoLSWIi1DJ8itjT4mc0x6XX9UlMJXywa96r1m3QRUq1%2FIvcT6Sq1lUQcJiRE1XsJKr30Xg7Px0p3f3nK1Res6bDQ%2FopQwRnj1hg8kKJ%2Fs2eoKDGSJCUk0iUmd1G0fiOlYuFirAOq5C6x3xBTHaAFHsOUk30%2B%2Fqd1Na1eCoMkaFc4P9GONbp2Ka%2BFyraYFLX4vXVhzwCk8Y9ydYJj8bnjVJcUKZIQhh0sTu8qhow2KbCxAY6pgGcy76GEOseyelJ8AoOKiVE9h%2BPUGfzYURhIdYfYd1qcKxzx%2B8GO9N8UuFJ%2BHooQj8OuwB57LS7rX1sH0b82MVMRGuznukUDQhiTni6y5wMRJEE8BIT%2Bm2Kmo7RD30tQkdUVMvCkpVZIxCrYimgdO7zYrkAoNg7BgF%2FN2LU3Vfu5SjbAkFuhoFHJ8IHBVSj8li8oiTY3aVH7KM1z0qOistUlWWt8iO1&X-Amz-Signature=2ad2572180bc83cdc562959bb4735bac96f45202e6cd8f8d77df37bf1cc4ef26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5ECT4P%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBk1M4Jz0k2QhMnt7bJsvnBRSdLhpFG1%2FZo5LW9f%2F2etAiAxDWcd0I5TV%2F1KvpBVdHgqh8GzybkPEPDldbI8VZpf3yr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMMd%2BwpJ42YxLr7av7KtwDj9li4BurDBnflJiUoGOBImok3LQqrRnx77FaNcZsoJzgX4XShKybkZffpOFVVqiEiQ6wEp3pVz%2F8uGzJqqIUE11l8NTbGZozYNqVEDn7IBEyu4kM3rwcFvWfxYsCJJuhBBNEbThHs15YZVF9oAjR3oCqOcfAAM5wmiYL2JgR2qW4bbBIYtaTqlXR3Njn%2BsbmGUqUisBglmdAmc9pJYhtqRIf5%2B3jgq5BIVmDfC9yqoiGWJtjRWYyDtqZ6uKbla9joYKEO8o3gep0zxIEmJpoSBzes5P%2B0WSfqIUvbXKxO01Z0qXAclKQ%2F0m1tYx3JqgsnEi2uptl80IREPWfa6rQbpleCFha5JHW4edQ9U%2FY4t4mxHbLuOQat1w64FSWnn1vutIvF14swhPyFTZ2D%2BGRwYoLSWIi1DJ8itjT4mc0x6XX9UlMJXywa96r1m3QRUq1%2FIvcT6Sq1lUQcJiRE1XsJKr30Xg7Px0p3f3nK1Res6bDQ%2FopQwRnj1hg8kKJ%2Fs2eoKDGSJCUk0iUmd1G0fiOlYuFirAOq5C6x3xBTHaAFHsOUk30%2B%2Fqd1Na1eCoMkaFc4P9GONbp2Ka%2BFyraYFLX4vXVhzwCk8Y9ydYJj8bnjVJcUKZIQhh0sTu8qhow2KbCxAY6pgGcy76GEOseyelJ8AoOKiVE9h%2BPUGfzYURhIdYfYd1qcKxzx%2B8GO9N8UuFJ%2BHooQj8OuwB57LS7rX1sH0b82MVMRGuznukUDQhiTni6y5wMRJEE8BIT%2Bm2Kmo7RD30tQkdUVMvCkpVZIxCrYimgdO7zYrkAoNg7BgF%2FN2LU3Vfu5SjbAkFuhoFHJ8IHBVSj8li8oiTY3aVH7KM1z0qOistUlWWt8iO1&X-Amz-Signature=8fada76d86879f6af9708ef83145cccd12a476f88814a6b59f9b572fbfe9819a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5ECT4P%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBk1M4Jz0k2QhMnt7bJsvnBRSdLhpFG1%2FZo5LW9f%2F2etAiAxDWcd0I5TV%2F1KvpBVdHgqh8GzybkPEPDldbI8VZpf3yr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMMd%2BwpJ42YxLr7av7KtwDj9li4BurDBnflJiUoGOBImok3LQqrRnx77FaNcZsoJzgX4XShKybkZffpOFVVqiEiQ6wEp3pVz%2F8uGzJqqIUE11l8NTbGZozYNqVEDn7IBEyu4kM3rwcFvWfxYsCJJuhBBNEbThHs15YZVF9oAjR3oCqOcfAAM5wmiYL2JgR2qW4bbBIYtaTqlXR3Njn%2BsbmGUqUisBglmdAmc9pJYhtqRIf5%2B3jgq5BIVmDfC9yqoiGWJtjRWYyDtqZ6uKbla9joYKEO8o3gep0zxIEmJpoSBzes5P%2B0WSfqIUvbXKxO01Z0qXAclKQ%2F0m1tYx3JqgsnEi2uptl80IREPWfa6rQbpleCFha5JHW4edQ9U%2FY4t4mxHbLuOQat1w64FSWnn1vutIvF14swhPyFTZ2D%2BGRwYoLSWIi1DJ8itjT4mc0x6XX9UlMJXywa96r1m3QRUq1%2FIvcT6Sq1lUQcJiRE1XsJKr30Xg7Px0p3f3nK1Res6bDQ%2FopQwRnj1hg8kKJ%2Fs2eoKDGSJCUk0iUmd1G0fiOlYuFirAOq5C6x3xBTHaAFHsOUk30%2B%2Fqd1Na1eCoMkaFc4P9GONbp2Ka%2BFyraYFLX4vXVhzwCk8Y9ydYJj8bnjVJcUKZIQhh0sTu8qhow2KbCxAY6pgGcy76GEOseyelJ8AoOKiVE9h%2BPUGfzYURhIdYfYd1qcKxzx%2B8GO9N8UuFJ%2BHooQj8OuwB57LS7rX1sH0b82MVMRGuznukUDQhiTni6y5wMRJEE8BIT%2Bm2Kmo7RD30tQkdUVMvCkpVZIxCrYimgdO7zYrkAoNg7BgF%2FN2LU3Vfu5SjbAkFuhoFHJ8IHBVSj8li8oiTY3aVH7KM1z0qOistUlWWt8iO1&X-Amz-Signature=d9edce48e2a223cd0c7cee03551b69708c9b17e488950946565a723394ee6afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5ECT4P%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBk1M4Jz0k2QhMnt7bJsvnBRSdLhpFG1%2FZo5LW9f%2F2etAiAxDWcd0I5TV%2F1KvpBVdHgqh8GzybkPEPDldbI8VZpf3yr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMMd%2BwpJ42YxLr7av7KtwDj9li4BurDBnflJiUoGOBImok3LQqrRnx77FaNcZsoJzgX4XShKybkZffpOFVVqiEiQ6wEp3pVz%2F8uGzJqqIUE11l8NTbGZozYNqVEDn7IBEyu4kM3rwcFvWfxYsCJJuhBBNEbThHs15YZVF9oAjR3oCqOcfAAM5wmiYL2JgR2qW4bbBIYtaTqlXR3Njn%2BsbmGUqUisBglmdAmc9pJYhtqRIf5%2B3jgq5BIVmDfC9yqoiGWJtjRWYyDtqZ6uKbla9joYKEO8o3gep0zxIEmJpoSBzes5P%2B0WSfqIUvbXKxO01Z0qXAclKQ%2F0m1tYx3JqgsnEi2uptl80IREPWfa6rQbpleCFha5JHW4edQ9U%2FY4t4mxHbLuOQat1w64FSWnn1vutIvF14swhPyFTZ2D%2BGRwYoLSWIi1DJ8itjT4mc0x6XX9UlMJXywa96r1m3QRUq1%2FIvcT6Sq1lUQcJiRE1XsJKr30Xg7Px0p3f3nK1Res6bDQ%2FopQwRnj1hg8kKJ%2Fs2eoKDGSJCUk0iUmd1G0fiOlYuFirAOq5C6x3xBTHaAFHsOUk30%2B%2Fqd1Na1eCoMkaFc4P9GONbp2Ka%2BFyraYFLX4vXVhzwCk8Y9ydYJj8bnjVJcUKZIQhh0sTu8qhow2KbCxAY6pgGcy76GEOseyelJ8AoOKiVE9h%2BPUGfzYURhIdYfYd1qcKxzx%2B8GO9N8UuFJ%2BHooQj8OuwB57LS7rX1sH0b82MVMRGuznukUDQhiTni6y5wMRJEE8BIT%2Bm2Kmo7RD30tQkdUVMvCkpVZIxCrYimgdO7zYrkAoNg7BgF%2FN2LU3Vfu5SjbAkFuhoFHJ8IHBVSj8li8oiTY3aVH7KM1z0qOistUlWWt8iO1&X-Amz-Signature=35627f16a14a890aebf1d32fd806cc881427bb4dacc5928f4a56f371085e8a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5ECT4P%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBk1M4Jz0k2QhMnt7bJsvnBRSdLhpFG1%2FZo5LW9f%2F2etAiAxDWcd0I5TV%2F1KvpBVdHgqh8GzybkPEPDldbI8VZpf3yr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMMd%2BwpJ42YxLr7av7KtwDj9li4BurDBnflJiUoGOBImok3LQqrRnx77FaNcZsoJzgX4XShKybkZffpOFVVqiEiQ6wEp3pVz%2F8uGzJqqIUE11l8NTbGZozYNqVEDn7IBEyu4kM3rwcFvWfxYsCJJuhBBNEbThHs15YZVF9oAjR3oCqOcfAAM5wmiYL2JgR2qW4bbBIYtaTqlXR3Njn%2BsbmGUqUisBglmdAmc9pJYhtqRIf5%2B3jgq5BIVmDfC9yqoiGWJtjRWYyDtqZ6uKbla9joYKEO8o3gep0zxIEmJpoSBzes5P%2B0WSfqIUvbXKxO01Z0qXAclKQ%2F0m1tYx3JqgsnEi2uptl80IREPWfa6rQbpleCFha5JHW4edQ9U%2FY4t4mxHbLuOQat1w64FSWnn1vutIvF14swhPyFTZ2D%2BGRwYoLSWIi1DJ8itjT4mc0x6XX9UlMJXywa96r1m3QRUq1%2FIvcT6Sq1lUQcJiRE1XsJKr30Xg7Px0p3f3nK1Res6bDQ%2FopQwRnj1hg8kKJ%2Fs2eoKDGSJCUk0iUmd1G0fiOlYuFirAOq5C6x3xBTHaAFHsOUk30%2B%2Fqd1Na1eCoMkaFc4P9GONbp2Ka%2BFyraYFLX4vXVhzwCk8Y9ydYJj8bnjVJcUKZIQhh0sTu8qhow2KbCxAY6pgGcy76GEOseyelJ8AoOKiVE9h%2BPUGfzYURhIdYfYd1qcKxzx%2B8GO9N8UuFJ%2BHooQj8OuwB57LS7rX1sH0b82MVMRGuznukUDQhiTni6y5wMRJEE8BIT%2Bm2Kmo7RD30tQkdUVMvCkpVZIxCrYimgdO7zYrkAoNg7BgF%2FN2LU3Vfu5SjbAkFuhoFHJ8IHBVSj8li8oiTY3aVH7KM1z0qOistUlWWt8iO1&X-Amz-Signature=36e6114b2a5a428b911b14f50a67d81196cefdf701a7d3bb736cbdd68a9a661e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5ECT4P%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBk1M4Jz0k2QhMnt7bJsvnBRSdLhpFG1%2FZo5LW9f%2F2etAiAxDWcd0I5TV%2F1KvpBVdHgqh8GzybkPEPDldbI8VZpf3yr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMMd%2BwpJ42YxLr7av7KtwDj9li4BurDBnflJiUoGOBImok3LQqrRnx77FaNcZsoJzgX4XShKybkZffpOFVVqiEiQ6wEp3pVz%2F8uGzJqqIUE11l8NTbGZozYNqVEDn7IBEyu4kM3rwcFvWfxYsCJJuhBBNEbThHs15YZVF9oAjR3oCqOcfAAM5wmiYL2JgR2qW4bbBIYtaTqlXR3Njn%2BsbmGUqUisBglmdAmc9pJYhtqRIf5%2B3jgq5BIVmDfC9yqoiGWJtjRWYyDtqZ6uKbla9joYKEO8o3gep0zxIEmJpoSBzes5P%2B0WSfqIUvbXKxO01Z0qXAclKQ%2F0m1tYx3JqgsnEi2uptl80IREPWfa6rQbpleCFha5JHW4edQ9U%2FY4t4mxHbLuOQat1w64FSWnn1vutIvF14swhPyFTZ2D%2BGRwYoLSWIi1DJ8itjT4mc0x6XX9UlMJXywa96r1m3QRUq1%2FIvcT6Sq1lUQcJiRE1XsJKr30Xg7Px0p3f3nK1Res6bDQ%2FopQwRnj1hg8kKJ%2Fs2eoKDGSJCUk0iUmd1G0fiOlYuFirAOq5C6x3xBTHaAFHsOUk30%2B%2Fqd1Na1eCoMkaFc4P9GONbp2Ka%2BFyraYFLX4vXVhzwCk8Y9ydYJj8bnjVJcUKZIQhh0sTu8qhow2KbCxAY6pgGcy76GEOseyelJ8AoOKiVE9h%2BPUGfzYURhIdYfYd1qcKxzx%2B8GO9N8UuFJ%2BHooQj8OuwB57LS7rX1sH0b82MVMRGuznukUDQhiTni6y5wMRJEE8BIT%2Bm2Kmo7RD30tQkdUVMvCkpVZIxCrYimgdO7zYrkAoNg7BgF%2FN2LU3Vfu5SjbAkFuhoFHJ8IHBVSj8li8oiTY3aVH7KM1z0qOistUlWWt8iO1&X-Amz-Signature=b3475ffc8128d0cd8a9d428ac0b5586879b702ed26e9aa26bb84d1d5f0e0c05c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5ECT4P%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBk1M4Jz0k2QhMnt7bJsvnBRSdLhpFG1%2FZo5LW9f%2F2etAiAxDWcd0I5TV%2F1KvpBVdHgqh8GzybkPEPDldbI8VZpf3yr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMMd%2BwpJ42YxLr7av7KtwDj9li4BurDBnflJiUoGOBImok3LQqrRnx77FaNcZsoJzgX4XShKybkZffpOFVVqiEiQ6wEp3pVz%2F8uGzJqqIUE11l8NTbGZozYNqVEDn7IBEyu4kM3rwcFvWfxYsCJJuhBBNEbThHs15YZVF9oAjR3oCqOcfAAM5wmiYL2JgR2qW4bbBIYtaTqlXR3Njn%2BsbmGUqUisBglmdAmc9pJYhtqRIf5%2B3jgq5BIVmDfC9yqoiGWJtjRWYyDtqZ6uKbla9joYKEO8o3gep0zxIEmJpoSBzes5P%2B0WSfqIUvbXKxO01Z0qXAclKQ%2F0m1tYx3JqgsnEi2uptl80IREPWfa6rQbpleCFha5JHW4edQ9U%2FY4t4mxHbLuOQat1w64FSWnn1vutIvF14swhPyFTZ2D%2BGRwYoLSWIi1DJ8itjT4mc0x6XX9UlMJXywa96r1m3QRUq1%2FIvcT6Sq1lUQcJiRE1XsJKr30Xg7Px0p3f3nK1Res6bDQ%2FopQwRnj1hg8kKJ%2Fs2eoKDGSJCUk0iUmd1G0fiOlYuFirAOq5C6x3xBTHaAFHsOUk30%2B%2Fqd1Na1eCoMkaFc4P9GONbp2Ka%2BFyraYFLX4vXVhzwCk8Y9ydYJj8bnjVJcUKZIQhh0sTu8qhow2KbCxAY6pgGcy76GEOseyelJ8AoOKiVE9h%2BPUGfzYURhIdYfYd1qcKxzx%2B8GO9N8UuFJ%2BHooQj8OuwB57LS7rX1sH0b82MVMRGuznukUDQhiTni6y5wMRJEE8BIT%2Bm2Kmo7RD30tQkdUVMvCkpVZIxCrYimgdO7zYrkAoNg7BgF%2FN2LU3Vfu5SjbAkFuhoFHJ8IHBVSj8li8oiTY3aVH7KM1z0qOistUlWWt8iO1&X-Amz-Signature=1f29cffb11393dfa8de9a3cb1c28cf7dbb0df6bb7c6bfef016b6395ee743da85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5ECT4P%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBk1M4Jz0k2QhMnt7bJsvnBRSdLhpFG1%2FZo5LW9f%2F2etAiAxDWcd0I5TV%2F1KvpBVdHgqh8GzybkPEPDldbI8VZpf3yr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMMd%2BwpJ42YxLr7av7KtwDj9li4BurDBnflJiUoGOBImok3LQqrRnx77FaNcZsoJzgX4XShKybkZffpOFVVqiEiQ6wEp3pVz%2F8uGzJqqIUE11l8NTbGZozYNqVEDn7IBEyu4kM3rwcFvWfxYsCJJuhBBNEbThHs15YZVF9oAjR3oCqOcfAAM5wmiYL2JgR2qW4bbBIYtaTqlXR3Njn%2BsbmGUqUisBglmdAmc9pJYhtqRIf5%2B3jgq5BIVmDfC9yqoiGWJtjRWYyDtqZ6uKbla9joYKEO8o3gep0zxIEmJpoSBzes5P%2B0WSfqIUvbXKxO01Z0qXAclKQ%2F0m1tYx3JqgsnEi2uptl80IREPWfa6rQbpleCFha5JHW4edQ9U%2FY4t4mxHbLuOQat1w64FSWnn1vutIvF14swhPyFTZ2D%2BGRwYoLSWIi1DJ8itjT4mc0x6XX9UlMJXywa96r1m3QRUq1%2FIvcT6Sq1lUQcJiRE1XsJKr30Xg7Px0p3f3nK1Res6bDQ%2FopQwRnj1hg8kKJ%2Fs2eoKDGSJCUk0iUmd1G0fiOlYuFirAOq5C6x3xBTHaAFHsOUk30%2B%2Fqd1Na1eCoMkaFc4P9GONbp2Ka%2BFyraYFLX4vXVhzwCk8Y9ydYJj8bnjVJcUKZIQhh0sTu8qhow2KbCxAY6pgGcy76GEOseyelJ8AoOKiVE9h%2BPUGfzYURhIdYfYd1qcKxzx%2B8GO9N8UuFJ%2BHooQj8OuwB57LS7rX1sH0b82MVMRGuznukUDQhiTni6y5wMRJEE8BIT%2Bm2Kmo7RD30tQkdUVMvCkpVZIxCrYimgdO7zYrkAoNg7BgF%2FN2LU3Vfu5SjbAkFuhoFHJ8IHBVSj8li8oiTY3aVH7KM1z0qOistUlWWt8iO1&X-Amz-Signature=ec66f0da10830ac57d46f8554787d3f29ada9bfd3f317aa04a21ca850361cc7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637MQQCZR%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFoH%2FW45JhmpuKvP2G3grjtbkNY7pETalGTLrXgXzDT4AiEAv5FgoKtbj2I7EbTMrENDwACFkp%2F%2FodINZqKENwoZYl8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDE6Rd%2BCQ8l%2FaMslHTyrcA9Rg0x6gan%2Fmkc3l4BoKBydFWJ0V%2BfAxbIzBfGs3QKvozZF30VTFK%2BqEYHF1pvwuy17xN16z0UxIntfeUVEGMmuAJ2g2LW8DQ6ydyYBQTLdzI05ZErZiO4GAB18kZvGxUOzJq0IpdG76kGXu%2Bq7BygoQ6j5BfxunsJa7H4CA1HbYx%2Byq4v4FfkEm8JNxn%2F8opePggYsr1CnOshpReQM9YKfpubeDKpPpklP2Ttl%2F3DpHJsUSqtpUWvyAN2bZ8l4Y4l4rtTjYj%2B7mrxHyh6upd%2B30xIaACNk8cJlxHhQsg9E3%2BRdLcjWArHNWi%2F7V9ey0Rn8KHIwzA3wv3bXjcit5fHHweIbEsUAs5ZyJR%2B2MiRzQEiD%2B46PS2lYsgBl8%2FjyhVm%2B3ldgIAmO3%2FVW1pnPfLbl3uPLyLLAwo3RGN3dp14Od0GW5yBFNGwRcrr8e%2FI2b%2FWJj7BJ97OZdF%2BnI7poXgvYykBQjj95TX3ELx4jdngrb5%2F6Bj1qJ55s3dq3FmQMT3C5YW3IxSsHhKfpRrGjgmzj%2FvssAONFOndB4ChfO3cWzh2rSEMKQwwTRRunNP9u%2Fs4u32cwVMwrDUxr8dlXzN6R4uV5q6WlqPb%2BJQrEB6JfVH9z8wSn0laJO8IBhMMSmwsQGOqUBjSEZiLgBZWYORHj8pq58jHXp3CzCHppyC6sEO9JDwJFATjYYOaGfHAumARysS8IrbS61O96V1z5NdDecirssVdUyL19kur0ME%2F2903lqo2Ddo1SbWYgglg7wAcE4lIPbFoxOEeUtAfCQ847tzf9oAAJ5l6CPEtckHBhdv%2Fwo8UuazD1c2v3%2FvxiyJaomCnnU7txLOgVB8bSQfrWCNnr46FoZvwoS&X-Amz-Signature=71c0c28fd7b5a9eb7146fbb5e607ed0fa9f5077aba92d5edcd48e2847f9f93fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R573Q256%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDXQY8FpXYAL8SNBM9xA5ZaVhIgrAexCbD%2F7WNPYQojFgIgd3qrv5oxcFfx0Clx3Mp0XHSNSI2m0CvPnMLEpIW2VbMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPHK81T9pk73JJ2PAyrcA4rX2NwfOkR52c0YPRZO8LZxFHqlfZc6%2FxBkx%2BoYmdSHYxZt6cbiW1ARu1dsIaHtgh2NJVvIpjwCKXhjJXs2YV74TLljFiuMycEiLACcIUel%2FvoDUXjtu4ymiypElbdd2Nb2vi%2B2vHAHksT8w1pFPe1ugdTiq4EzCC4yIagnWDvD%2FSvZX95bywxLzt5DAj3nAabgq3QWNQgUD6Tbs%2FkgDK%2BSBc7%2BA7iLuYTwHAVHIJzhEJ1nvntdeR3ss33P%2Fvn%2BgFYBPrhpAEegIM0ZuR2sOZq8S96UP2BVJYWo7kwg4KvMP1ioXOmoMIllPQQdO0BuGe1kxBfvNzOv1i%2B56RdcT0nAyVz4VI%2BpxFVKQz3KoDGc0pMiY7ebibcsu6Luu9z0EtlqQ%2Bmdl56agiPvQWWZBoU9lVrhxas0%2Fz3tP8vf3wjRzsrp32JnpATnsJL4QLFpFs8DQ3FNQlQnlWgyLQ7zdTMd0tvGKFtdCWiFJ92swdOoIWvXFk%2FL%2F7JVSQq2VmucjTL4SJUepffQfxathetr2NXe2502iXlEnQ%2BBOMBmMUKX2hz1AJ4Q44fvPp1NRbBgaesFyMzVoUZF0KK%2F5xHYXFtvgroD5pAG6B%2BGdx5DdkFLhyRRPUPC0luF4ojeMOWmwsQGOqUBibiZ57dVdmDc1NI9%2FAIje%2BC4%2F5dowSS2RQo0TBB3kI%2BrkD3GA6001Tc1hXiMNkagz2KejK6yyBYf0uWQwOegX1vkHfsRoDI3r8u2iAiQlKXFcAshoxPWOthoRJLcIkf4xc8bYmLR8xLDb%2BjvmT3Ul0Zn%2BoAYiHol5DZjJQ79K5h%2FsYMio6JXJGz%2FBAsMsmpQc8UsiMAeSiGh%2F5cSwdkpqCWBOT8%2F&X-Amz-Signature=2b0519624a4bec34d7e9b610bed219a600254ee28a860cc381fad615f717f904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R573Q256%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDXQY8FpXYAL8SNBM9xA5ZaVhIgrAexCbD%2F7WNPYQojFgIgd3qrv5oxcFfx0Clx3Mp0XHSNSI2m0CvPnMLEpIW2VbMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPHK81T9pk73JJ2PAyrcA4rX2NwfOkR52c0YPRZO8LZxFHqlfZc6%2FxBkx%2BoYmdSHYxZt6cbiW1ARu1dsIaHtgh2NJVvIpjwCKXhjJXs2YV74TLljFiuMycEiLACcIUel%2FvoDUXjtu4ymiypElbdd2Nb2vi%2B2vHAHksT8w1pFPe1ugdTiq4EzCC4yIagnWDvD%2FSvZX95bywxLzt5DAj3nAabgq3QWNQgUD6Tbs%2FkgDK%2BSBc7%2BA7iLuYTwHAVHIJzhEJ1nvntdeR3ss33P%2Fvn%2BgFYBPrhpAEegIM0ZuR2sOZq8S96UP2BVJYWo7kwg4KvMP1ioXOmoMIllPQQdO0BuGe1kxBfvNzOv1i%2B56RdcT0nAyVz4VI%2BpxFVKQz3KoDGc0pMiY7ebibcsu6Luu9z0EtlqQ%2Bmdl56agiPvQWWZBoU9lVrhxas0%2Fz3tP8vf3wjRzsrp32JnpATnsJL4QLFpFs8DQ3FNQlQnlWgyLQ7zdTMd0tvGKFtdCWiFJ92swdOoIWvXFk%2FL%2F7JVSQq2VmucjTL4SJUepffQfxathetr2NXe2502iXlEnQ%2BBOMBmMUKX2hz1AJ4Q44fvPp1NRbBgaesFyMzVoUZF0KK%2F5xHYXFtvgroD5pAG6B%2BGdx5DdkFLhyRRPUPC0luF4ojeMOWmwsQGOqUBibiZ57dVdmDc1NI9%2FAIje%2BC4%2F5dowSS2RQo0TBB3kI%2BrkD3GA6001Tc1hXiMNkagz2KejK6yyBYf0uWQwOegX1vkHfsRoDI3r8u2iAiQlKXFcAshoxPWOthoRJLcIkf4xc8bYmLR8xLDb%2BjvmT3Ul0Zn%2BoAYiHol5DZjJQ79K5h%2FsYMio6JXJGz%2FBAsMsmpQc8UsiMAeSiGh%2F5cSwdkpqCWBOT8%2F&X-Amz-Signature=c299af236a6807293925bce898df48e8b0ace5861ff35bad21cad5582cad9842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R573Q256%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDXQY8FpXYAL8SNBM9xA5ZaVhIgrAexCbD%2F7WNPYQojFgIgd3qrv5oxcFfx0Clx3Mp0XHSNSI2m0CvPnMLEpIW2VbMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPHK81T9pk73JJ2PAyrcA4rX2NwfOkR52c0YPRZO8LZxFHqlfZc6%2FxBkx%2BoYmdSHYxZt6cbiW1ARu1dsIaHtgh2NJVvIpjwCKXhjJXs2YV74TLljFiuMycEiLACcIUel%2FvoDUXjtu4ymiypElbdd2Nb2vi%2B2vHAHksT8w1pFPe1ugdTiq4EzCC4yIagnWDvD%2FSvZX95bywxLzt5DAj3nAabgq3QWNQgUD6Tbs%2FkgDK%2BSBc7%2BA7iLuYTwHAVHIJzhEJ1nvntdeR3ss33P%2Fvn%2BgFYBPrhpAEegIM0ZuR2sOZq8S96UP2BVJYWo7kwg4KvMP1ioXOmoMIllPQQdO0BuGe1kxBfvNzOv1i%2B56RdcT0nAyVz4VI%2BpxFVKQz3KoDGc0pMiY7ebibcsu6Luu9z0EtlqQ%2Bmdl56agiPvQWWZBoU9lVrhxas0%2Fz3tP8vf3wjRzsrp32JnpATnsJL4QLFpFs8DQ3FNQlQnlWgyLQ7zdTMd0tvGKFtdCWiFJ92swdOoIWvXFk%2FL%2F7JVSQq2VmucjTL4SJUepffQfxathetr2NXe2502iXlEnQ%2BBOMBmMUKX2hz1AJ4Q44fvPp1NRbBgaesFyMzVoUZF0KK%2F5xHYXFtvgroD5pAG6B%2BGdx5DdkFLhyRRPUPC0luF4ojeMOWmwsQGOqUBibiZ57dVdmDc1NI9%2FAIje%2BC4%2F5dowSS2RQo0TBB3kI%2BrkD3GA6001Tc1hXiMNkagz2KejK6yyBYf0uWQwOegX1vkHfsRoDI3r8u2iAiQlKXFcAshoxPWOthoRJLcIkf4xc8bYmLR8xLDb%2BjvmT3Ul0Zn%2BoAYiHol5DZjJQ79K5h%2FsYMio6JXJGz%2FBAsMsmpQc8UsiMAeSiGh%2F5cSwdkpqCWBOT8%2F&X-Amz-Signature=1c0736b1ee1d4e9fa0c2ae0665cd7daf4b184f0352ba7b6e72f1abfba44657b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R573Q256%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDXQY8FpXYAL8SNBM9xA5ZaVhIgrAexCbD%2F7WNPYQojFgIgd3qrv5oxcFfx0Clx3Mp0XHSNSI2m0CvPnMLEpIW2VbMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPHK81T9pk73JJ2PAyrcA4rX2NwfOkR52c0YPRZO8LZxFHqlfZc6%2FxBkx%2BoYmdSHYxZt6cbiW1ARu1dsIaHtgh2NJVvIpjwCKXhjJXs2YV74TLljFiuMycEiLACcIUel%2FvoDUXjtu4ymiypElbdd2Nb2vi%2B2vHAHksT8w1pFPe1ugdTiq4EzCC4yIagnWDvD%2FSvZX95bywxLzt5DAj3nAabgq3QWNQgUD6Tbs%2FkgDK%2BSBc7%2BA7iLuYTwHAVHIJzhEJ1nvntdeR3ss33P%2Fvn%2BgFYBPrhpAEegIM0ZuR2sOZq8S96UP2BVJYWo7kwg4KvMP1ioXOmoMIllPQQdO0BuGe1kxBfvNzOv1i%2B56RdcT0nAyVz4VI%2BpxFVKQz3KoDGc0pMiY7ebibcsu6Luu9z0EtlqQ%2Bmdl56agiPvQWWZBoU9lVrhxas0%2Fz3tP8vf3wjRzsrp32JnpATnsJL4QLFpFs8DQ3FNQlQnlWgyLQ7zdTMd0tvGKFtdCWiFJ92swdOoIWvXFk%2FL%2F7JVSQq2VmucjTL4SJUepffQfxathetr2NXe2502iXlEnQ%2BBOMBmMUKX2hz1AJ4Q44fvPp1NRbBgaesFyMzVoUZF0KK%2F5xHYXFtvgroD5pAG6B%2BGdx5DdkFLhyRRPUPC0luF4ojeMOWmwsQGOqUBibiZ57dVdmDc1NI9%2FAIje%2BC4%2F5dowSS2RQo0TBB3kI%2BrkD3GA6001Tc1hXiMNkagz2KejK6yyBYf0uWQwOegX1vkHfsRoDI3r8u2iAiQlKXFcAshoxPWOthoRJLcIkf4xc8bYmLR8xLDb%2BjvmT3Ul0Zn%2BoAYiHol5DZjJQ79K5h%2FsYMio6JXJGz%2FBAsMsmpQc8UsiMAeSiGh%2F5cSwdkpqCWBOT8%2F&X-Amz-Signature=e880ef92a9bbae3a4880adfd41d79b9462430592976ed177591d65c680452e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R573Q256%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDXQY8FpXYAL8SNBM9xA5ZaVhIgrAexCbD%2F7WNPYQojFgIgd3qrv5oxcFfx0Clx3Mp0XHSNSI2m0CvPnMLEpIW2VbMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPHK81T9pk73JJ2PAyrcA4rX2NwfOkR52c0YPRZO8LZxFHqlfZc6%2FxBkx%2BoYmdSHYxZt6cbiW1ARu1dsIaHtgh2NJVvIpjwCKXhjJXs2YV74TLljFiuMycEiLACcIUel%2FvoDUXjtu4ymiypElbdd2Nb2vi%2B2vHAHksT8w1pFPe1ugdTiq4EzCC4yIagnWDvD%2FSvZX95bywxLzt5DAj3nAabgq3QWNQgUD6Tbs%2FkgDK%2BSBc7%2BA7iLuYTwHAVHIJzhEJ1nvntdeR3ss33P%2Fvn%2BgFYBPrhpAEegIM0ZuR2sOZq8S96UP2BVJYWo7kwg4KvMP1ioXOmoMIllPQQdO0BuGe1kxBfvNzOv1i%2B56RdcT0nAyVz4VI%2BpxFVKQz3KoDGc0pMiY7ebibcsu6Luu9z0EtlqQ%2Bmdl56agiPvQWWZBoU9lVrhxas0%2Fz3tP8vf3wjRzsrp32JnpATnsJL4QLFpFs8DQ3FNQlQnlWgyLQ7zdTMd0tvGKFtdCWiFJ92swdOoIWvXFk%2FL%2F7JVSQq2VmucjTL4SJUepffQfxathetr2NXe2502iXlEnQ%2BBOMBmMUKX2hz1AJ4Q44fvPp1NRbBgaesFyMzVoUZF0KK%2F5xHYXFtvgroD5pAG6B%2BGdx5DdkFLhyRRPUPC0luF4ojeMOWmwsQGOqUBibiZ57dVdmDc1NI9%2FAIje%2BC4%2F5dowSS2RQo0TBB3kI%2BrkD3GA6001Tc1hXiMNkagz2KejK6yyBYf0uWQwOegX1vkHfsRoDI3r8u2iAiQlKXFcAshoxPWOthoRJLcIkf4xc8bYmLR8xLDb%2BjvmT3Ul0Zn%2BoAYiHol5DZjJQ79K5h%2FsYMio6JXJGz%2FBAsMsmpQc8UsiMAeSiGh%2F5cSwdkpqCWBOT8%2F&X-Amz-Signature=23a5d9dc3e295bdd48ff8130257045e73626a0ccc7271b8f208269e91ccef569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R573Q256%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDXQY8FpXYAL8SNBM9xA5ZaVhIgrAexCbD%2F7WNPYQojFgIgd3qrv5oxcFfx0Clx3Mp0XHSNSI2m0CvPnMLEpIW2VbMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPHK81T9pk73JJ2PAyrcA4rX2NwfOkR52c0YPRZO8LZxFHqlfZc6%2FxBkx%2BoYmdSHYxZt6cbiW1ARu1dsIaHtgh2NJVvIpjwCKXhjJXs2YV74TLljFiuMycEiLACcIUel%2FvoDUXjtu4ymiypElbdd2Nb2vi%2B2vHAHksT8w1pFPe1ugdTiq4EzCC4yIagnWDvD%2FSvZX95bywxLzt5DAj3nAabgq3QWNQgUD6Tbs%2FkgDK%2BSBc7%2BA7iLuYTwHAVHIJzhEJ1nvntdeR3ss33P%2Fvn%2BgFYBPrhpAEegIM0ZuR2sOZq8S96UP2BVJYWo7kwg4KvMP1ioXOmoMIllPQQdO0BuGe1kxBfvNzOv1i%2B56RdcT0nAyVz4VI%2BpxFVKQz3KoDGc0pMiY7ebibcsu6Luu9z0EtlqQ%2Bmdl56agiPvQWWZBoU9lVrhxas0%2Fz3tP8vf3wjRzsrp32JnpATnsJL4QLFpFs8DQ3FNQlQnlWgyLQ7zdTMd0tvGKFtdCWiFJ92swdOoIWvXFk%2FL%2F7JVSQq2VmucjTL4SJUepffQfxathetr2NXe2502iXlEnQ%2BBOMBmMUKX2hz1AJ4Q44fvPp1NRbBgaesFyMzVoUZF0KK%2F5xHYXFtvgroD5pAG6B%2BGdx5DdkFLhyRRPUPC0luF4ojeMOWmwsQGOqUBibiZ57dVdmDc1NI9%2FAIje%2BC4%2F5dowSS2RQo0TBB3kI%2BrkD3GA6001Tc1hXiMNkagz2KejK6yyBYf0uWQwOegX1vkHfsRoDI3r8u2iAiQlKXFcAshoxPWOthoRJLcIkf4xc8bYmLR8xLDb%2BjvmT3Ul0Zn%2BoAYiHol5DZjJQ79K5h%2FsYMio6JXJGz%2FBAsMsmpQc8UsiMAeSiGh%2F5cSwdkpqCWBOT8%2F&X-Amz-Signature=1aadc61b645b98af66202ffc0dfcb734c6575ac5be657d48d4a776fb3a20ec76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R573Q256%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDXQY8FpXYAL8SNBM9xA5ZaVhIgrAexCbD%2F7WNPYQojFgIgd3qrv5oxcFfx0Clx3Mp0XHSNSI2m0CvPnMLEpIW2VbMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPHK81T9pk73JJ2PAyrcA4rX2NwfOkR52c0YPRZO8LZxFHqlfZc6%2FxBkx%2BoYmdSHYxZt6cbiW1ARu1dsIaHtgh2NJVvIpjwCKXhjJXs2YV74TLljFiuMycEiLACcIUel%2FvoDUXjtu4ymiypElbdd2Nb2vi%2B2vHAHksT8w1pFPe1ugdTiq4EzCC4yIagnWDvD%2FSvZX95bywxLzt5DAj3nAabgq3QWNQgUD6Tbs%2FkgDK%2BSBc7%2BA7iLuYTwHAVHIJzhEJ1nvntdeR3ss33P%2Fvn%2BgFYBPrhpAEegIM0ZuR2sOZq8S96UP2BVJYWo7kwg4KvMP1ioXOmoMIllPQQdO0BuGe1kxBfvNzOv1i%2B56RdcT0nAyVz4VI%2BpxFVKQz3KoDGc0pMiY7ebibcsu6Luu9z0EtlqQ%2Bmdl56agiPvQWWZBoU9lVrhxas0%2Fz3tP8vf3wjRzsrp32JnpATnsJL4QLFpFs8DQ3FNQlQnlWgyLQ7zdTMd0tvGKFtdCWiFJ92swdOoIWvXFk%2FL%2F7JVSQq2VmucjTL4SJUepffQfxathetr2NXe2502iXlEnQ%2BBOMBmMUKX2hz1AJ4Q44fvPp1NRbBgaesFyMzVoUZF0KK%2F5xHYXFtvgroD5pAG6B%2BGdx5DdkFLhyRRPUPC0luF4ojeMOWmwsQGOqUBibiZ57dVdmDc1NI9%2FAIje%2BC4%2F5dowSS2RQo0TBB3kI%2BrkD3GA6001Tc1hXiMNkagz2KejK6yyBYf0uWQwOegX1vkHfsRoDI3r8u2iAiQlKXFcAshoxPWOthoRJLcIkf4xc8bYmLR8xLDb%2BjvmT3Ul0Zn%2BoAYiHol5DZjJQ79K5h%2FsYMio6JXJGz%2FBAsMsmpQc8UsiMAeSiGh%2F5cSwdkpqCWBOT8%2F&X-Amz-Signature=33c76c86ace5ebeedac04661698fdc637ca9896cb62c8e669c07da97da18105e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R573Q256%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDXQY8FpXYAL8SNBM9xA5ZaVhIgrAexCbD%2F7WNPYQojFgIgd3qrv5oxcFfx0Clx3Mp0XHSNSI2m0CvPnMLEpIW2VbMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPHK81T9pk73JJ2PAyrcA4rX2NwfOkR52c0YPRZO8LZxFHqlfZc6%2FxBkx%2BoYmdSHYxZt6cbiW1ARu1dsIaHtgh2NJVvIpjwCKXhjJXs2YV74TLljFiuMycEiLACcIUel%2FvoDUXjtu4ymiypElbdd2Nb2vi%2B2vHAHksT8w1pFPe1ugdTiq4EzCC4yIagnWDvD%2FSvZX95bywxLzt5DAj3nAabgq3QWNQgUD6Tbs%2FkgDK%2BSBc7%2BA7iLuYTwHAVHIJzhEJ1nvntdeR3ss33P%2Fvn%2BgFYBPrhpAEegIM0ZuR2sOZq8S96UP2BVJYWo7kwg4KvMP1ioXOmoMIllPQQdO0BuGe1kxBfvNzOv1i%2B56RdcT0nAyVz4VI%2BpxFVKQz3KoDGc0pMiY7ebibcsu6Luu9z0EtlqQ%2Bmdl56agiPvQWWZBoU9lVrhxas0%2Fz3tP8vf3wjRzsrp32JnpATnsJL4QLFpFs8DQ3FNQlQnlWgyLQ7zdTMd0tvGKFtdCWiFJ92swdOoIWvXFk%2FL%2F7JVSQq2VmucjTL4SJUepffQfxathetr2NXe2502iXlEnQ%2BBOMBmMUKX2hz1AJ4Q44fvPp1NRbBgaesFyMzVoUZF0KK%2F5xHYXFtvgroD5pAG6B%2BGdx5DdkFLhyRRPUPC0luF4ojeMOWmwsQGOqUBibiZ57dVdmDc1NI9%2FAIje%2BC4%2F5dowSS2RQo0TBB3kI%2BrkD3GA6001Tc1hXiMNkagz2KejK6yyBYf0uWQwOegX1vkHfsRoDI3r8u2iAiQlKXFcAshoxPWOthoRJLcIkf4xc8bYmLR8xLDb%2BjvmT3Ul0Zn%2BoAYiHol5DZjJQ79K5h%2FsYMio6JXJGz%2FBAsMsmpQc8UsiMAeSiGh%2F5cSwdkpqCWBOT8%2F&X-Amz-Signature=5d36627d0735dc4c19b11c5bacfa20a56ad21e24651893b301fbb213bcb379ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R573Q256%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDXQY8FpXYAL8SNBM9xA5ZaVhIgrAexCbD%2F7WNPYQojFgIgd3qrv5oxcFfx0Clx3Mp0XHSNSI2m0CvPnMLEpIW2VbMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPHK81T9pk73JJ2PAyrcA4rX2NwfOkR52c0YPRZO8LZxFHqlfZc6%2FxBkx%2BoYmdSHYxZt6cbiW1ARu1dsIaHtgh2NJVvIpjwCKXhjJXs2YV74TLljFiuMycEiLACcIUel%2FvoDUXjtu4ymiypElbdd2Nb2vi%2B2vHAHksT8w1pFPe1ugdTiq4EzCC4yIagnWDvD%2FSvZX95bywxLzt5DAj3nAabgq3QWNQgUD6Tbs%2FkgDK%2BSBc7%2BA7iLuYTwHAVHIJzhEJ1nvntdeR3ss33P%2Fvn%2BgFYBPrhpAEegIM0ZuR2sOZq8S96UP2BVJYWo7kwg4KvMP1ioXOmoMIllPQQdO0BuGe1kxBfvNzOv1i%2B56RdcT0nAyVz4VI%2BpxFVKQz3KoDGc0pMiY7ebibcsu6Luu9z0EtlqQ%2Bmdl56agiPvQWWZBoU9lVrhxas0%2Fz3tP8vf3wjRzsrp32JnpATnsJL4QLFpFs8DQ3FNQlQnlWgyLQ7zdTMd0tvGKFtdCWiFJ92swdOoIWvXFk%2FL%2F7JVSQq2VmucjTL4SJUepffQfxathetr2NXe2502iXlEnQ%2BBOMBmMUKX2hz1AJ4Q44fvPp1NRbBgaesFyMzVoUZF0KK%2F5xHYXFtvgroD5pAG6B%2BGdx5DdkFLhyRRPUPC0luF4ojeMOWmwsQGOqUBibiZ57dVdmDc1NI9%2FAIje%2BC4%2F5dowSS2RQo0TBB3kI%2BrkD3GA6001Tc1hXiMNkagz2KejK6yyBYf0uWQwOegX1vkHfsRoDI3r8u2iAiQlKXFcAshoxPWOthoRJLcIkf4xc8bYmLR8xLDb%2BjvmT3Ul0Zn%2BoAYiHol5DZjJQ79K5h%2FsYMio6JXJGz%2FBAsMsmpQc8UsiMAeSiGh%2F5cSwdkpqCWBOT8%2F&X-Amz-Signature=218f26f016eed18e1b31b57c08ebc784a992d42c453deb406c9869315c6085b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
