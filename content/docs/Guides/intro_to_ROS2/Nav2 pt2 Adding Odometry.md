---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T10:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T10:34:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4PL424R%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDrfoSKHrP5ZbAfOv2L%2BNJcjsiqmMb23FBjHinMSgJJrQIhAL0biMKERGITFcCHMncZCqJUw%2FPx8JhpodIApzdBV%2BC0Kv8DCC4QABoMNjM3NDIzMTgzODA1Igz1%2FiiYsSQU88tHRTAq3APTXKIpSCC7e2irVd8Jb9NsFWveoLx2mCEWczd4rusKrVoFOrLQEKuJMPoJ%2B1C13IY1hTn6BzOIcAv9FF41qz4hssyg4R1eOaPZaU7YqhEt4jYOCZvLWIWNVtaV7oKGYkL9NZc1YGcQGWh97CzahQjaMDoUvXiSY0j3MK69zFT2wUrk3rhuk%2B7oWbpdYAZ3LjqIaJz7jqfqP88yk0vNbBUvkpESYHtzrBNfKsZjoE%2BImvwoYCczlOyVFwgCm2d8g3ZTuvMR%2FdQdVVQwMkd4zRSTgX3eUoRbxc90XnuY5uASh0Xs%2FyOo%2BJdHYU3Z0BMDSE%2BCwGJIhJ8XYiwtVJYK07e330OYMU%2BV3VNqlWBzIQZlv1eZrKs4E4o9zTvWi8VCiqK1Z41GX6tKTUA%2Fd2TKY3vtVeAbTEugvs0YB6S3PAWBcU7asy4ApKh9RLV%2BxlYBa6h7ihjG94a7uMawxzU00%2B8%2F356gDWyuuRLYodI9R2XTQkzSLpm%2F9cKstlSuyO81kQ0IkIVhwLhYzASe26v%2B2mKCgh4WUaRadl6PCKJGYXEor9Wgivid9mb%2BGMlG%2Bon%2BOjF6UHXJbMbQ6q7P3x5uvVcSWxCeKNqo05NhY87BNxwGP78SYYp%2BXSdtSNq7XDCb2YjEBjqkAc4a%2BLRzGMi45%2FVg0meSoqW1iFC1lACN9iDhd9dgitz%2BfnawWzeZrqHu2nO88gnUfwYqg1TPd7TsoQg9pcTMoBAX4v6yfzrhhmzS2LtwqdWAmsdHicrIm59EsH0CTE0znWk1ROm8lv41LZy1CwOpNusWRdCWCsz7tLoxONS69N6SM8KmGKisx9%2FybzoZpPJPHRLL4Y1mBT6HOSsrbCek3Go%2F0Qw7&X-Amz-Signature=d3cc110561daed1d194cae9dbf2836af0854f4dde5d7d0d33e8dfbddcdca31f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not </summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## creating custom node

{{% alert icon=”👾” context="info" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4PL424R%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDrfoSKHrP5ZbAfOv2L%2BNJcjsiqmMb23FBjHinMSgJJrQIhAL0biMKERGITFcCHMncZCqJUw%2FPx8JhpodIApzdBV%2BC0Kv8DCC4QABoMNjM3NDIzMTgzODA1Igz1%2FiiYsSQU88tHRTAq3APTXKIpSCC7e2irVd8Jb9NsFWveoLx2mCEWczd4rusKrVoFOrLQEKuJMPoJ%2B1C13IY1hTn6BzOIcAv9FF41qz4hssyg4R1eOaPZaU7YqhEt4jYOCZvLWIWNVtaV7oKGYkL9NZc1YGcQGWh97CzahQjaMDoUvXiSY0j3MK69zFT2wUrk3rhuk%2B7oWbpdYAZ3LjqIaJz7jqfqP88yk0vNbBUvkpESYHtzrBNfKsZjoE%2BImvwoYCczlOyVFwgCm2d8g3ZTuvMR%2FdQdVVQwMkd4zRSTgX3eUoRbxc90XnuY5uASh0Xs%2FyOo%2BJdHYU3Z0BMDSE%2BCwGJIhJ8XYiwtVJYK07e330OYMU%2BV3VNqlWBzIQZlv1eZrKs4E4o9zTvWi8VCiqK1Z41GX6tKTUA%2Fd2TKY3vtVeAbTEugvs0YB6S3PAWBcU7asy4ApKh9RLV%2BxlYBa6h7ihjG94a7uMawxzU00%2B8%2F356gDWyuuRLYodI9R2XTQkzSLpm%2F9cKstlSuyO81kQ0IkIVhwLhYzASe26v%2B2mKCgh4WUaRadl6PCKJGYXEor9Wgivid9mb%2BGMlG%2Bon%2BOjF6UHXJbMbQ6q7P3x5uvVcSWxCeKNqo05NhY87BNxwGP78SYYp%2BXSdtSNq7XDCb2YjEBjqkAc4a%2BLRzGMi45%2FVg0meSoqW1iFC1lACN9iDhd9dgitz%2BfnawWzeZrqHu2nO88gnUfwYqg1TPd7TsoQg9pcTMoBAX4v6yfzrhhmzS2LtwqdWAmsdHicrIm59EsH0CTE0znWk1ROm8lv41LZy1CwOpNusWRdCWCsz7tLoxONS69N6SM8KmGKisx9%2FybzoZpPJPHRLL4Y1mBT6HOSsrbCek3Go%2F0Qw7&X-Amz-Signature=c42bc5f55323623543f53b5050b93fc1aab7bb347fcf9806cc527b9a0e7384f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4PL424R%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDrfoSKHrP5ZbAfOv2L%2BNJcjsiqmMb23FBjHinMSgJJrQIhAL0biMKERGITFcCHMncZCqJUw%2FPx8JhpodIApzdBV%2BC0Kv8DCC4QABoMNjM3NDIzMTgzODA1Igz1%2FiiYsSQU88tHRTAq3APTXKIpSCC7e2irVd8Jb9NsFWveoLx2mCEWczd4rusKrVoFOrLQEKuJMPoJ%2B1C13IY1hTn6BzOIcAv9FF41qz4hssyg4R1eOaPZaU7YqhEt4jYOCZvLWIWNVtaV7oKGYkL9NZc1YGcQGWh97CzahQjaMDoUvXiSY0j3MK69zFT2wUrk3rhuk%2B7oWbpdYAZ3LjqIaJz7jqfqP88yk0vNbBUvkpESYHtzrBNfKsZjoE%2BImvwoYCczlOyVFwgCm2d8g3ZTuvMR%2FdQdVVQwMkd4zRSTgX3eUoRbxc90XnuY5uASh0Xs%2FyOo%2BJdHYU3Z0BMDSE%2BCwGJIhJ8XYiwtVJYK07e330OYMU%2BV3VNqlWBzIQZlv1eZrKs4E4o9zTvWi8VCiqK1Z41GX6tKTUA%2Fd2TKY3vtVeAbTEugvs0YB6S3PAWBcU7asy4ApKh9RLV%2BxlYBa6h7ihjG94a7uMawxzU00%2B8%2F356gDWyuuRLYodI9R2XTQkzSLpm%2F9cKstlSuyO81kQ0IkIVhwLhYzASe26v%2B2mKCgh4WUaRadl6PCKJGYXEor9Wgivid9mb%2BGMlG%2Bon%2BOjF6UHXJbMbQ6q7P3x5uvVcSWxCeKNqo05NhY87BNxwGP78SYYp%2BXSdtSNq7XDCb2YjEBjqkAc4a%2BLRzGMi45%2FVg0meSoqW1iFC1lACN9iDhd9dgitz%2BfnawWzeZrqHu2nO88gnUfwYqg1TPd7TsoQg9pcTMoBAX4v6yfzrhhmzS2LtwqdWAmsdHicrIm59EsH0CTE0znWk1ROm8lv41LZy1CwOpNusWRdCWCsz7tLoxONS69N6SM8KmGKisx9%2FybzoZpPJPHRLL4Y1mBT6HOSsrbCek3Go%2F0Qw7&X-Amz-Signature=b35acb888b1709960d5e5159e043a8e6e3640051576e7446b035611320d8a551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4PL424R%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDrfoSKHrP5ZbAfOv2L%2BNJcjsiqmMb23FBjHinMSgJJrQIhAL0biMKERGITFcCHMncZCqJUw%2FPx8JhpodIApzdBV%2BC0Kv8DCC4QABoMNjM3NDIzMTgzODA1Igz1%2FiiYsSQU88tHRTAq3APTXKIpSCC7e2irVd8Jb9NsFWveoLx2mCEWczd4rusKrVoFOrLQEKuJMPoJ%2B1C13IY1hTn6BzOIcAv9FF41qz4hssyg4R1eOaPZaU7YqhEt4jYOCZvLWIWNVtaV7oKGYkL9NZc1YGcQGWh97CzahQjaMDoUvXiSY0j3MK69zFT2wUrk3rhuk%2B7oWbpdYAZ3LjqIaJz7jqfqP88yk0vNbBUvkpESYHtzrBNfKsZjoE%2BImvwoYCczlOyVFwgCm2d8g3ZTuvMR%2FdQdVVQwMkd4zRSTgX3eUoRbxc90XnuY5uASh0Xs%2FyOo%2BJdHYU3Z0BMDSE%2BCwGJIhJ8XYiwtVJYK07e330OYMU%2BV3VNqlWBzIQZlv1eZrKs4E4o9zTvWi8VCiqK1Z41GX6tKTUA%2Fd2TKY3vtVeAbTEugvs0YB6S3PAWBcU7asy4ApKh9RLV%2BxlYBa6h7ihjG94a7uMawxzU00%2B8%2F356gDWyuuRLYodI9R2XTQkzSLpm%2F9cKstlSuyO81kQ0IkIVhwLhYzASe26v%2B2mKCgh4WUaRadl6PCKJGYXEor9Wgivid9mb%2BGMlG%2Bon%2BOjF6UHXJbMbQ6q7P3x5uvVcSWxCeKNqo05NhY87BNxwGP78SYYp%2BXSdtSNq7XDCb2YjEBjqkAc4a%2BLRzGMi45%2FVg0meSoqW1iFC1lACN9iDhd9dgitz%2BfnawWzeZrqHu2nO88gnUfwYqg1TPd7TsoQg9pcTMoBAX4v6yfzrhhmzS2LtwqdWAmsdHicrIm59EsH0CTE0znWk1ROm8lv41LZy1CwOpNusWRdCWCsz7tLoxONS69N6SM8KmGKisx9%2FybzoZpPJPHRLL4Y1mBT6HOSsrbCek3Go%2F0Qw7&X-Amz-Signature=3fdd4c94209c45484aaf05e83c95e02ed658a71adbdfa05e88bc721e92c61754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4PL424R%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDrfoSKHrP5ZbAfOv2L%2BNJcjsiqmMb23FBjHinMSgJJrQIhAL0biMKERGITFcCHMncZCqJUw%2FPx8JhpodIApzdBV%2BC0Kv8DCC4QABoMNjM3NDIzMTgzODA1Igz1%2FiiYsSQU88tHRTAq3APTXKIpSCC7e2irVd8Jb9NsFWveoLx2mCEWczd4rusKrVoFOrLQEKuJMPoJ%2B1C13IY1hTn6BzOIcAv9FF41qz4hssyg4R1eOaPZaU7YqhEt4jYOCZvLWIWNVtaV7oKGYkL9NZc1YGcQGWh97CzahQjaMDoUvXiSY0j3MK69zFT2wUrk3rhuk%2B7oWbpdYAZ3LjqIaJz7jqfqP88yk0vNbBUvkpESYHtzrBNfKsZjoE%2BImvwoYCczlOyVFwgCm2d8g3ZTuvMR%2FdQdVVQwMkd4zRSTgX3eUoRbxc90XnuY5uASh0Xs%2FyOo%2BJdHYU3Z0BMDSE%2BCwGJIhJ8XYiwtVJYK07e330OYMU%2BV3VNqlWBzIQZlv1eZrKs4E4o9zTvWi8VCiqK1Z41GX6tKTUA%2Fd2TKY3vtVeAbTEugvs0YB6S3PAWBcU7asy4ApKh9RLV%2BxlYBa6h7ihjG94a7uMawxzU00%2B8%2F356gDWyuuRLYodI9R2XTQkzSLpm%2F9cKstlSuyO81kQ0IkIVhwLhYzASe26v%2B2mKCgh4WUaRadl6PCKJGYXEor9Wgivid9mb%2BGMlG%2Bon%2BOjF6UHXJbMbQ6q7P3x5uvVcSWxCeKNqo05NhY87BNxwGP78SYYp%2BXSdtSNq7XDCb2YjEBjqkAc4a%2BLRzGMi45%2FVg0meSoqW1iFC1lACN9iDhd9dgitz%2BfnawWzeZrqHu2nO88gnUfwYqg1TPd7TsoQg9pcTMoBAX4v6yfzrhhmzS2LtwqdWAmsdHicrIm59EsH0CTE0znWk1ROm8lv41LZy1CwOpNusWRdCWCsz7tLoxONS69N6SM8KmGKisx9%2FybzoZpPJPHRLL4Y1mBT6HOSsrbCek3Go%2F0Qw7&X-Amz-Signature=0308bfb8808edb179a9082a75ab7302a1dd0d56ea76675af75f73ba59fa266d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
        self.get_logger().info('Publishing position')       # print msg
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

## Testing our code

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4PL424R%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDrfoSKHrP5ZbAfOv2L%2BNJcjsiqmMb23FBjHinMSgJJrQIhAL0biMKERGITFcCHMncZCqJUw%2FPx8JhpodIApzdBV%2BC0Kv8DCC4QABoMNjM3NDIzMTgzODA1Igz1%2FiiYsSQU88tHRTAq3APTXKIpSCC7e2irVd8Jb9NsFWveoLx2mCEWczd4rusKrVoFOrLQEKuJMPoJ%2B1C13IY1hTn6BzOIcAv9FF41qz4hssyg4R1eOaPZaU7YqhEt4jYOCZvLWIWNVtaV7oKGYkL9NZc1YGcQGWh97CzahQjaMDoUvXiSY0j3MK69zFT2wUrk3rhuk%2B7oWbpdYAZ3LjqIaJz7jqfqP88yk0vNbBUvkpESYHtzrBNfKsZjoE%2BImvwoYCczlOyVFwgCm2d8g3ZTuvMR%2FdQdVVQwMkd4zRSTgX3eUoRbxc90XnuY5uASh0Xs%2FyOo%2BJdHYU3Z0BMDSE%2BCwGJIhJ8XYiwtVJYK07e330OYMU%2BV3VNqlWBzIQZlv1eZrKs4E4o9zTvWi8VCiqK1Z41GX6tKTUA%2Fd2TKY3vtVeAbTEugvs0YB6S3PAWBcU7asy4ApKh9RLV%2BxlYBa6h7ihjG94a7uMawxzU00%2B8%2F356gDWyuuRLYodI9R2XTQkzSLpm%2F9cKstlSuyO81kQ0IkIVhwLhYzASe26v%2B2mKCgh4WUaRadl6PCKJGYXEor9Wgivid9mb%2BGMlG%2Bon%2BOjF6UHXJbMbQ6q7P3x5uvVcSWxCeKNqo05NhY87BNxwGP78SYYp%2BXSdtSNq7XDCb2YjEBjqkAc4a%2BLRzGMi45%2FVg0meSoqW1iFC1lACN9iDhd9dgitz%2BfnawWzeZrqHu2nO88gnUfwYqg1TPd7TsoQg9pcTMoBAX4v6yfzrhhmzS2LtwqdWAmsdHicrIm59EsH0CTE0znWk1ROm8lv41LZy1CwOpNusWRdCWCsz7tLoxONS69N6SM8KmGKisx9%2FybzoZpPJPHRLL4Y1mBT6HOSsrbCek3Go%2F0Qw7&X-Amz-Signature=3bab8fe593e9cb12452678fb96e854f87de0ddc7de28d5fa3e8d9d02e1ff8a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4PL424R%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDrfoSKHrP5ZbAfOv2L%2BNJcjsiqmMb23FBjHinMSgJJrQIhAL0biMKERGITFcCHMncZCqJUw%2FPx8JhpodIApzdBV%2BC0Kv8DCC4QABoMNjM3NDIzMTgzODA1Igz1%2FiiYsSQU88tHRTAq3APTXKIpSCC7e2irVd8Jb9NsFWveoLx2mCEWczd4rusKrVoFOrLQEKuJMPoJ%2B1C13IY1hTn6BzOIcAv9FF41qz4hssyg4R1eOaPZaU7YqhEt4jYOCZvLWIWNVtaV7oKGYkL9NZc1YGcQGWh97CzahQjaMDoUvXiSY0j3MK69zFT2wUrk3rhuk%2B7oWbpdYAZ3LjqIaJz7jqfqP88yk0vNbBUvkpESYHtzrBNfKsZjoE%2BImvwoYCczlOyVFwgCm2d8g3ZTuvMR%2FdQdVVQwMkd4zRSTgX3eUoRbxc90XnuY5uASh0Xs%2FyOo%2BJdHYU3Z0BMDSE%2BCwGJIhJ8XYiwtVJYK07e330OYMU%2BV3VNqlWBzIQZlv1eZrKs4E4o9zTvWi8VCiqK1Z41GX6tKTUA%2Fd2TKY3vtVeAbTEugvs0YB6S3PAWBcU7asy4ApKh9RLV%2BxlYBa6h7ihjG94a7uMawxzU00%2B8%2F356gDWyuuRLYodI9R2XTQkzSLpm%2F9cKstlSuyO81kQ0IkIVhwLhYzASe26v%2B2mKCgh4WUaRadl6PCKJGYXEor9Wgivid9mb%2BGMlG%2Bon%2BOjF6UHXJbMbQ6q7P3x5uvVcSWxCeKNqo05NhY87BNxwGP78SYYp%2BXSdtSNq7XDCb2YjEBjqkAc4a%2BLRzGMi45%2FVg0meSoqW1iFC1lACN9iDhd9dgitz%2BfnawWzeZrqHu2nO88gnUfwYqg1TPd7TsoQg9pcTMoBAX4v6yfzrhhmzS2LtwqdWAmsdHicrIm59EsH0CTE0znWk1ROm8lv41LZy1CwOpNusWRdCWCsz7tLoxONS69N6SM8KmGKisx9%2FybzoZpPJPHRLL4Y1mBT6HOSsrbCek3Go%2F0Qw7&X-Amz-Signature=9c01adb9fdab9074a28037b7387eac988e476aeb783b953ee4b97ebba37012ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4PL424R%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDrfoSKHrP5ZbAfOv2L%2BNJcjsiqmMb23FBjHinMSgJJrQIhAL0biMKERGITFcCHMncZCqJUw%2FPx8JhpodIApzdBV%2BC0Kv8DCC4QABoMNjM3NDIzMTgzODA1Igz1%2FiiYsSQU88tHRTAq3APTXKIpSCC7e2irVd8Jb9NsFWveoLx2mCEWczd4rusKrVoFOrLQEKuJMPoJ%2B1C13IY1hTn6BzOIcAv9FF41qz4hssyg4R1eOaPZaU7YqhEt4jYOCZvLWIWNVtaV7oKGYkL9NZc1YGcQGWh97CzahQjaMDoUvXiSY0j3MK69zFT2wUrk3rhuk%2B7oWbpdYAZ3LjqIaJz7jqfqP88yk0vNbBUvkpESYHtzrBNfKsZjoE%2BImvwoYCczlOyVFwgCm2d8g3ZTuvMR%2FdQdVVQwMkd4zRSTgX3eUoRbxc90XnuY5uASh0Xs%2FyOo%2BJdHYU3Z0BMDSE%2BCwGJIhJ8XYiwtVJYK07e330OYMU%2BV3VNqlWBzIQZlv1eZrKs4E4o9zTvWi8VCiqK1Z41GX6tKTUA%2Fd2TKY3vtVeAbTEugvs0YB6S3PAWBcU7asy4ApKh9RLV%2BxlYBa6h7ihjG94a7uMawxzU00%2B8%2F356gDWyuuRLYodI9R2XTQkzSLpm%2F9cKstlSuyO81kQ0IkIVhwLhYzASe26v%2B2mKCgh4WUaRadl6PCKJGYXEor9Wgivid9mb%2BGMlG%2Bon%2BOjF6UHXJbMbQ6q7P3x5uvVcSWxCeKNqo05NhY87BNxwGP78SYYp%2BXSdtSNq7XDCb2YjEBjqkAc4a%2BLRzGMi45%2FVg0meSoqW1iFC1lACN9iDhd9dgitz%2BfnawWzeZrqHu2nO88gnUfwYqg1TPd7TsoQg9pcTMoBAX4v6yfzrhhmzS2LtwqdWAmsdHicrIm59EsH0CTE0znWk1ROm8lv41LZy1CwOpNusWRdCWCsz7tLoxONS69N6SM8KmGKisx9%2FybzoZpPJPHRLL4Y1mBT6HOSsrbCek3Go%2F0Qw7&X-Amz-Signature=493e6ac8c22965e20cc138d0d40f542ebf5a6e9b6dd5b9c15d82ffe5abcb8068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## updating launch file

Lets add our new node to the launch file

```python
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

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4PL424R%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDrfoSKHrP5ZbAfOv2L%2BNJcjsiqmMb23FBjHinMSgJJrQIhAL0biMKERGITFcCHMncZCqJUw%2FPx8JhpodIApzdBV%2BC0Kv8DCC4QABoMNjM3NDIzMTgzODA1Igz1%2FiiYsSQU88tHRTAq3APTXKIpSCC7e2irVd8Jb9NsFWveoLx2mCEWczd4rusKrVoFOrLQEKuJMPoJ%2B1C13IY1hTn6BzOIcAv9FF41qz4hssyg4R1eOaPZaU7YqhEt4jYOCZvLWIWNVtaV7oKGYkL9NZc1YGcQGWh97CzahQjaMDoUvXiSY0j3MK69zFT2wUrk3rhuk%2B7oWbpdYAZ3LjqIaJz7jqfqP88yk0vNbBUvkpESYHtzrBNfKsZjoE%2BImvwoYCczlOyVFwgCm2d8g3ZTuvMR%2FdQdVVQwMkd4zRSTgX3eUoRbxc90XnuY5uASh0Xs%2FyOo%2BJdHYU3Z0BMDSE%2BCwGJIhJ8XYiwtVJYK07e330OYMU%2BV3VNqlWBzIQZlv1eZrKs4E4o9zTvWi8VCiqK1Z41GX6tKTUA%2Fd2TKY3vtVeAbTEugvs0YB6S3PAWBcU7asy4ApKh9RLV%2BxlYBa6h7ihjG94a7uMawxzU00%2B8%2F356gDWyuuRLYodI9R2XTQkzSLpm%2F9cKstlSuyO81kQ0IkIVhwLhYzASe26v%2B2mKCgh4WUaRadl6PCKJGYXEor9Wgivid9mb%2BGMlG%2Bon%2BOjF6UHXJbMbQ6q7P3x5uvVcSWxCeKNqo05NhY87BNxwGP78SYYp%2BXSdtSNq7XDCb2YjEBjqkAc4a%2BLRzGMi45%2FVg0meSoqW1iFC1lACN9iDhd9dgitz%2BfnawWzeZrqHu2nO88gnUfwYqg1TPd7TsoQg9pcTMoBAX4v6yfzrhhmzS2LtwqdWAmsdHicrIm59EsH0CTE0znWk1ROm8lv41LZy1CwOpNusWRdCWCsz7tLoxONS69N6SM8KmGKisx9%2FybzoZpPJPHRLL4Y1mBT6HOSsrbCek3Go%2F0Qw7&X-Amz-Signature=22b5a75e1f1339db8a8955ac4a7299a2d3d7051d482a178b87146ffc186c5894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDE2FVZR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDehc65CKHCkKF%2BwQ4RSMG5BZAqwPVkEiycBriPnBkERAIhAIsVa%2BS%2FfNYA7sO76a4FiwgubkdWVI87QZ5mjo1cNDZqKv8DCC4QABoMNjM3NDIzMTgzODA1IgzcvtPhqp6X5J1JlTAq3AO4VdS7QkQGoW6ZX%2BtdoKo5RUZ3A0K7zgDudHykIZsPIVJmbXHVAIVARM%2B4C3mbFp8vsC0Lbra1bw2RS8WcymZ3RXcz2xvXTEMLQubG%2FCP8hU1HsUhUEE%2BlTtReMKRxedDxtb4oEX9aL9lAGXeLUlwLDUKDVrU3mFiujySUSMgwGNzw%2FDEweAOzAV45dXHAwM3giWkUzOUC5tRkMk3YUUgyARK83QqyOIMRy%2FFpauYT9pYLeYOFK32oergBpd3%2BBkSSEQ3rS26ohI0wo5jVriBH6xJAjMtGMFslwFtQcivkjum3wgfu8JwmtiV%2FSxzZXSsgBNDrT1edeNeqe5YoR63IUVVFhvN1DWar4pO3G4nSByC3sdGkKufKmYHxSXhIiRln2UqzlmjhQU51%2BGU2NZQX745PZCEUEJaW1uXxotQEbZxgGMTACI%2Fs42rDkFbtigtx2COEH4UgHzzX1FsM1F5AqTcU5d5HNPHkdIgzwhEeFzy98ORCv%2Fd4c5WbO0oM3qipyFORw%2BFEQi9P40AYYILRHrKl2e0MVfo4iB78ls%2F9pLwp18AUKsyd4rH7OEDl3O0K%2BdIT6ejQLr7A330kIS7jx4dOdReAsxBEovM1obT2O%2B9qFOaw%2Fw9dwsdnEzCh2ojEBjqkATKiUsps%2Fj6Z9Y%2BUTdCKXe%2FWOfwz5Vqwy4o%2BhHPNUFBd8ik0WUUiHyU6x904sS1mxJjjpnlr9sRAA7DXEuLNsk5jNXRnTl767tDwAjZFLuKxxT94IluVMklwOcEeeZrXZ5L7bfQM45ylYGlgGXZxuC9OR%2F%2Bwtemr0HBmUcN1YBh4qUO1tpY%2FwlcjKzhecROkneph%2By1PjJXi%2BR%2FlYtioTpMegtYE&X-Amz-Signature=8e01aeb8f87dfcb7f13fded4351f4100457fcea511ad6a52292e9eef7de4b820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4PL424R%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDrfoSKHrP5ZbAfOv2L%2BNJcjsiqmMb23FBjHinMSgJJrQIhAL0biMKERGITFcCHMncZCqJUw%2FPx8JhpodIApzdBV%2BC0Kv8DCC4QABoMNjM3NDIzMTgzODA1Igz1%2FiiYsSQU88tHRTAq3APTXKIpSCC7e2irVd8Jb9NsFWveoLx2mCEWczd4rusKrVoFOrLQEKuJMPoJ%2B1C13IY1hTn6BzOIcAv9FF41qz4hssyg4R1eOaPZaU7YqhEt4jYOCZvLWIWNVtaV7oKGYkL9NZc1YGcQGWh97CzahQjaMDoUvXiSY0j3MK69zFT2wUrk3rhuk%2B7oWbpdYAZ3LjqIaJz7jqfqP88yk0vNbBUvkpESYHtzrBNfKsZjoE%2BImvwoYCczlOyVFwgCm2d8g3ZTuvMR%2FdQdVVQwMkd4zRSTgX3eUoRbxc90XnuY5uASh0Xs%2FyOo%2BJdHYU3Z0BMDSE%2BCwGJIhJ8XYiwtVJYK07e330OYMU%2BV3VNqlWBzIQZlv1eZrKs4E4o9zTvWi8VCiqK1Z41GX6tKTUA%2Fd2TKY3vtVeAbTEugvs0YB6S3PAWBcU7asy4ApKh9RLV%2BxlYBa6h7ihjG94a7uMawxzU00%2B8%2F356gDWyuuRLYodI9R2XTQkzSLpm%2F9cKstlSuyO81kQ0IkIVhwLhYzASe26v%2B2mKCgh4WUaRadl6PCKJGYXEor9Wgivid9mb%2BGMlG%2Bon%2BOjF6UHXJbMbQ6q7P3x5uvVcSWxCeKNqo05NhY87BNxwGP78SYYp%2BXSdtSNq7XDCb2YjEBjqkAc4a%2BLRzGMi45%2FVg0meSoqW1iFC1lACN9iDhd9dgitz%2BfnawWzeZrqHu2nO88gnUfwYqg1TPd7TsoQg9pcTMoBAX4v6yfzrhhmzS2LtwqdWAmsdHicrIm59EsH0CTE0znWk1ROm8lv41LZy1CwOpNusWRdCWCsz7tLoxONS69N6SM8KmGKisx9%2FybzoZpPJPHRLL4Y1mBT6HOSsrbCek3Go%2F0Qw7&X-Amz-Signature=451d32c1bd7d2da6b653f6a2d41b16f6b15049888cdc69ede5051083c2308091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4PL424R%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDrfoSKHrP5ZbAfOv2L%2BNJcjsiqmMb23FBjHinMSgJJrQIhAL0biMKERGITFcCHMncZCqJUw%2FPx8JhpodIApzdBV%2BC0Kv8DCC4QABoMNjM3NDIzMTgzODA1Igz1%2FiiYsSQU88tHRTAq3APTXKIpSCC7e2irVd8Jb9NsFWveoLx2mCEWczd4rusKrVoFOrLQEKuJMPoJ%2B1C13IY1hTn6BzOIcAv9FF41qz4hssyg4R1eOaPZaU7YqhEt4jYOCZvLWIWNVtaV7oKGYkL9NZc1YGcQGWh97CzahQjaMDoUvXiSY0j3MK69zFT2wUrk3rhuk%2B7oWbpdYAZ3LjqIaJz7jqfqP88yk0vNbBUvkpESYHtzrBNfKsZjoE%2BImvwoYCczlOyVFwgCm2d8g3ZTuvMR%2FdQdVVQwMkd4zRSTgX3eUoRbxc90XnuY5uASh0Xs%2FyOo%2BJdHYU3Z0BMDSE%2BCwGJIhJ8XYiwtVJYK07e330OYMU%2BV3VNqlWBzIQZlv1eZrKs4E4o9zTvWi8VCiqK1Z41GX6tKTUA%2Fd2TKY3vtVeAbTEugvs0YB6S3PAWBcU7asy4ApKh9RLV%2BxlYBa6h7ihjG94a7uMawxzU00%2B8%2F356gDWyuuRLYodI9R2XTQkzSLpm%2F9cKstlSuyO81kQ0IkIVhwLhYzASe26v%2B2mKCgh4WUaRadl6PCKJGYXEor9Wgivid9mb%2BGMlG%2Bon%2BOjF6UHXJbMbQ6q7P3x5uvVcSWxCeKNqo05NhY87BNxwGP78SYYp%2BXSdtSNq7XDCb2YjEBjqkAc4a%2BLRzGMi45%2FVg0meSoqW1iFC1lACN9iDhd9dgitz%2BfnawWzeZrqHu2nO88gnUfwYqg1TPd7TsoQg9pcTMoBAX4v6yfzrhhmzS2LtwqdWAmsdHicrIm59EsH0CTE0znWk1ROm8lv41LZy1CwOpNusWRdCWCsz7tLoxONS69N6SM8KmGKisx9%2FybzoZpPJPHRLL4Y1mBT6HOSsrbCek3Go%2F0Qw7&X-Amz-Signature=5e3437ce06aae0a82671c3774316a16142aabd15044c444d4d7cbf2e72b24591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPDMVHI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCboBvI8jTB9jm3iwsAs1vJEy1ELDLG7HimrY7KXCeU9gIhAJ6EwaNzJGrnHJlMXQf8Kq0aErbDJHmCgfIaf4OhRbx2Kv8DCC4QABoMNjM3NDIzMTgzODA1Igwn7Y6b971jFrIKYRIq3ANW0Z3n4eKids%2F0jCSxTfglv5uT7ZDWgeEP8dX%2F32cOUrEU3o07GFNOwZNDLB5V8VMYuHCHKJMJOM30BgTwks1rhNFX7mZlBqvz9OGw7WXQ5lWe7XzJsv0GwmyfV8AU0wDd%2B48XSPPS5vg%2Bwf5mUfFJNb0Jlya3495aHTxrcFjZ2eqcLHFGeVJ4D9VGeZIAhoxsEFjwyNMMa2YUlN7e%2F2aN0sFJpLfq0E8qJ7cVZ%2BeAcg6dzQgga5EWlzhrqavEfdUb5sJFAYptBfhBzA73blCaNd8n1%2F3jhzNPT8BYaBwVIkZWoJnZznfAl4FPRy2%2Bev03gsZBWTJg1Nx8R6MFn74HM61LHB3Tqq4pbVqTfpiAsGov5WGJBOJyrSNA79FwpcYv3Mr1crx%2BgiN9RqXggqLQah0Oi3ySDs4OWalTI3dwXxlLJkQOkAEJtDl8%2BBP1%2BL1oD%2FU9XWe61qMUO21POrSKtSE4yS91E72EUXt9ipMXVzFHUqrGk0Ajz%2FITcGW%2BIpVXr%2FCeBa%2BF7VUu7bX4UM1LjkP4DxkkXEypmOXu3Nf3Nmcrl2bzQMkIwSUisx6X2LI73CbvQMOPJxii3AygpmkKtciu8HFpjSlFZxW1RkAy91QHgP40I%2By0vyNQ7DC52ojEBjqkAUGogpLCmMp0aHZTuPldPP446xkb2LtQH9v0uN0EpT9hl%2BFYy9QdUZDNIxSzEHWvZUGNhabx9Hw%2F14B%2Be%2BM2dXyjt0jDiEl1UPFvBmRdB71zjxWBs1t2DZuIOE55LRzYbh0aPb092XHkf8iarSWSwq%2FpC5ZqeiLq5k3YFxP75e3DnEuME42iiad9DkGgX90nG%2BYVqAIvF4PQFD0Tfv9r%2BvJb2b%2BH&X-Amz-Signature=d13b3cdf6d499c7d329561c9d6ddf0d2f8ed36605284eba0eac400ee39fc3011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPDMVHI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCboBvI8jTB9jm3iwsAs1vJEy1ELDLG7HimrY7KXCeU9gIhAJ6EwaNzJGrnHJlMXQf8Kq0aErbDJHmCgfIaf4OhRbx2Kv8DCC4QABoMNjM3NDIzMTgzODA1Igwn7Y6b971jFrIKYRIq3ANW0Z3n4eKids%2F0jCSxTfglv5uT7ZDWgeEP8dX%2F32cOUrEU3o07GFNOwZNDLB5V8VMYuHCHKJMJOM30BgTwks1rhNFX7mZlBqvz9OGw7WXQ5lWe7XzJsv0GwmyfV8AU0wDd%2B48XSPPS5vg%2Bwf5mUfFJNb0Jlya3495aHTxrcFjZ2eqcLHFGeVJ4D9VGeZIAhoxsEFjwyNMMa2YUlN7e%2F2aN0sFJpLfq0E8qJ7cVZ%2BeAcg6dzQgga5EWlzhrqavEfdUb5sJFAYptBfhBzA73blCaNd8n1%2F3jhzNPT8BYaBwVIkZWoJnZznfAl4FPRy2%2Bev03gsZBWTJg1Nx8R6MFn74HM61LHB3Tqq4pbVqTfpiAsGov5WGJBOJyrSNA79FwpcYv3Mr1crx%2BgiN9RqXggqLQah0Oi3ySDs4OWalTI3dwXxlLJkQOkAEJtDl8%2BBP1%2BL1oD%2FU9XWe61qMUO21POrSKtSE4yS91E72EUXt9ipMXVzFHUqrGk0Ajz%2FITcGW%2BIpVXr%2FCeBa%2BF7VUu7bX4UM1LjkP4DxkkXEypmOXu3Nf3Nmcrl2bzQMkIwSUisx6X2LI73CbvQMOPJxii3AygpmkKtciu8HFpjSlFZxW1RkAy91QHgP40I%2By0vyNQ7DC52ojEBjqkAUGogpLCmMp0aHZTuPldPP446xkb2LtQH9v0uN0EpT9hl%2BFYy9QdUZDNIxSzEHWvZUGNhabx9Hw%2F14B%2Be%2BM2dXyjt0jDiEl1UPFvBmRdB71zjxWBs1t2DZuIOE55LRzYbh0aPb092XHkf8iarSWSwq%2FpC5ZqeiLq5k3YFxP75e3DnEuME42iiad9DkGgX90nG%2BYVqAIvF4PQFD0Tfv9r%2BvJb2b%2BH&X-Amz-Signature=e22b9d105031eef4d3f6218f4d34fd7597451b6151a11e7b80bb34e3c1a192af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPDMVHI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCboBvI8jTB9jm3iwsAs1vJEy1ELDLG7HimrY7KXCeU9gIhAJ6EwaNzJGrnHJlMXQf8Kq0aErbDJHmCgfIaf4OhRbx2Kv8DCC4QABoMNjM3NDIzMTgzODA1Igwn7Y6b971jFrIKYRIq3ANW0Z3n4eKids%2F0jCSxTfglv5uT7ZDWgeEP8dX%2F32cOUrEU3o07GFNOwZNDLB5V8VMYuHCHKJMJOM30BgTwks1rhNFX7mZlBqvz9OGw7WXQ5lWe7XzJsv0GwmyfV8AU0wDd%2B48XSPPS5vg%2Bwf5mUfFJNb0Jlya3495aHTxrcFjZ2eqcLHFGeVJ4D9VGeZIAhoxsEFjwyNMMa2YUlN7e%2F2aN0sFJpLfq0E8qJ7cVZ%2BeAcg6dzQgga5EWlzhrqavEfdUb5sJFAYptBfhBzA73blCaNd8n1%2F3jhzNPT8BYaBwVIkZWoJnZznfAl4FPRy2%2Bev03gsZBWTJg1Nx8R6MFn74HM61LHB3Tqq4pbVqTfpiAsGov5WGJBOJyrSNA79FwpcYv3Mr1crx%2BgiN9RqXggqLQah0Oi3ySDs4OWalTI3dwXxlLJkQOkAEJtDl8%2BBP1%2BL1oD%2FU9XWe61qMUO21POrSKtSE4yS91E72EUXt9ipMXVzFHUqrGk0Ajz%2FITcGW%2BIpVXr%2FCeBa%2BF7VUu7bX4UM1LjkP4DxkkXEypmOXu3Nf3Nmcrl2bzQMkIwSUisx6X2LI73CbvQMOPJxii3AygpmkKtciu8HFpjSlFZxW1RkAy91QHgP40I%2By0vyNQ7DC52ojEBjqkAUGogpLCmMp0aHZTuPldPP446xkb2LtQH9v0uN0EpT9hl%2BFYy9QdUZDNIxSzEHWvZUGNhabx9Hw%2F14B%2Be%2BM2dXyjt0jDiEl1UPFvBmRdB71zjxWBs1t2DZuIOE55LRzYbh0aPb092XHkf8iarSWSwq%2FpC5ZqeiLq5k3YFxP75e3DnEuME42iiad9DkGgX90nG%2BYVqAIvF4PQFD0Tfv9r%2BvJb2b%2BH&X-Amz-Signature=abe89d5673e936970100c89a9aaaf4d099a8ab99c28412a74bc8d35e60052fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPDMVHI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCboBvI8jTB9jm3iwsAs1vJEy1ELDLG7HimrY7KXCeU9gIhAJ6EwaNzJGrnHJlMXQf8Kq0aErbDJHmCgfIaf4OhRbx2Kv8DCC4QABoMNjM3NDIzMTgzODA1Igwn7Y6b971jFrIKYRIq3ANW0Z3n4eKids%2F0jCSxTfglv5uT7ZDWgeEP8dX%2F32cOUrEU3o07GFNOwZNDLB5V8VMYuHCHKJMJOM30BgTwks1rhNFX7mZlBqvz9OGw7WXQ5lWe7XzJsv0GwmyfV8AU0wDd%2B48XSPPS5vg%2Bwf5mUfFJNb0Jlya3495aHTxrcFjZ2eqcLHFGeVJ4D9VGeZIAhoxsEFjwyNMMa2YUlN7e%2F2aN0sFJpLfq0E8qJ7cVZ%2BeAcg6dzQgga5EWlzhrqavEfdUb5sJFAYptBfhBzA73blCaNd8n1%2F3jhzNPT8BYaBwVIkZWoJnZznfAl4FPRy2%2Bev03gsZBWTJg1Nx8R6MFn74HM61LHB3Tqq4pbVqTfpiAsGov5WGJBOJyrSNA79FwpcYv3Mr1crx%2BgiN9RqXggqLQah0Oi3ySDs4OWalTI3dwXxlLJkQOkAEJtDl8%2BBP1%2BL1oD%2FU9XWe61qMUO21POrSKtSE4yS91E72EUXt9ipMXVzFHUqrGk0Ajz%2FITcGW%2BIpVXr%2FCeBa%2BF7VUu7bX4UM1LjkP4DxkkXEypmOXu3Nf3Nmcrl2bzQMkIwSUisx6X2LI73CbvQMOPJxii3AygpmkKtciu8HFpjSlFZxW1RkAy91QHgP40I%2By0vyNQ7DC52ojEBjqkAUGogpLCmMp0aHZTuPldPP446xkb2LtQH9v0uN0EpT9hl%2BFYy9QdUZDNIxSzEHWvZUGNhabx9Hw%2F14B%2Be%2BM2dXyjt0jDiEl1UPFvBmRdB71zjxWBs1t2DZuIOE55LRzYbh0aPb092XHkf8iarSWSwq%2FpC5ZqeiLq5k3YFxP75e3DnEuME42iiad9DkGgX90nG%2BYVqAIvF4PQFD0Tfv9r%2BvJb2b%2BH&X-Amz-Signature=0226ac431c175ad1a3795cb612c6a25a0018fa5bbbfcb0e776438131e02c974f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPDMVHI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCboBvI8jTB9jm3iwsAs1vJEy1ELDLG7HimrY7KXCeU9gIhAJ6EwaNzJGrnHJlMXQf8Kq0aErbDJHmCgfIaf4OhRbx2Kv8DCC4QABoMNjM3NDIzMTgzODA1Igwn7Y6b971jFrIKYRIq3ANW0Z3n4eKids%2F0jCSxTfglv5uT7ZDWgeEP8dX%2F32cOUrEU3o07GFNOwZNDLB5V8VMYuHCHKJMJOM30BgTwks1rhNFX7mZlBqvz9OGw7WXQ5lWe7XzJsv0GwmyfV8AU0wDd%2B48XSPPS5vg%2Bwf5mUfFJNb0Jlya3495aHTxrcFjZ2eqcLHFGeVJ4D9VGeZIAhoxsEFjwyNMMa2YUlN7e%2F2aN0sFJpLfq0E8qJ7cVZ%2BeAcg6dzQgga5EWlzhrqavEfdUb5sJFAYptBfhBzA73blCaNd8n1%2F3jhzNPT8BYaBwVIkZWoJnZznfAl4FPRy2%2Bev03gsZBWTJg1Nx8R6MFn74HM61LHB3Tqq4pbVqTfpiAsGov5WGJBOJyrSNA79FwpcYv3Mr1crx%2BgiN9RqXggqLQah0Oi3ySDs4OWalTI3dwXxlLJkQOkAEJtDl8%2BBP1%2BL1oD%2FU9XWe61qMUO21POrSKtSE4yS91E72EUXt9ipMXVzFHUqrGk0Ajz%2FITcGW%2BIpVXr%2FCeBa%2BF7VUu7bX4UM1LjkP4DxkkXEypmOXu3Nf3Nmcrl2bzQMkIwSUisx6X2LI73CbvQMOPJxii3AygpmkKtciu8HFpjSlFZxW1RkAy91QHgP40I%2By0vyNQ7DC52ojEBjqkAUGogpLCmMp0aHZTuPldPP446xkb2LtQH9v0uN0EpT9hl%2BFYy9QdUZDNIxSzEHWvZUGNhabx9Hw%2F14B%2Be%2BM2dXyjt0jDiEl1UPFvBmRdB71zjxWBs1t2DZuIOE55LRzYbh0aPb092XHkf8iarSWSwq%2FpC5ZqeiLq5k3YFxP75e3DnEuME42iiad9DkGgX90nG%2BYVqAIvF4PQFD0Tfv9r%2BvJb2b%2BH&X-Amz-Signature=cb600c2113a10d05b54ebeedcc231fa057b7c77c02960b974a6832a86c631bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPDMVHI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCboBvI8jTB9jm3iwsAs1vJEy1ELDLG7HimrY7KXCeU9gIhAJ6EwaNzJGrnHJlMXQf8Kq0aErbDJHmCgfIaf4OhRbx2Kv8DCC4QABoMNjM3NDIzMTgzODA1Igwn7Y6b971jFrIKYRIq3ANW0Z3n4eKids%2F0jCSxTfglv5uT7ZDWgeEP8dX%2F32cOUrEU3o07GFNOwZNDLB5V8VMYuHCHKJMJOM30BgTwks1rhNFX7mZlBqvz9OGw7WXQ5lWe7XzJsv0GwmyfV8AU0wDd%2B48XSPPS5vg%2Bwf5mUfFJNb0Jlya3495aHTxrcFjZ2eqcLHFGeVJ4D9VGeZIAhoxsEFjwyNMMa2YUlN7e%2F2aN0sFJpLfq0E8qJ7cVZ%2BeAcg6dzQgga5EWlzhrqavEfdUb5sJFAYptBfhBzA73blCaNd8n1%2F3jhzNPT8BYaBwVIkZWoJnZznfAl4FPRy2%2Bev03gsZBWTJg1Nx8R6MFn74HM61LHB3Tqq4pbVqTfpiAsGov5WGJBOJyrSNA79FwpcYv3Mr1crx%2BgiN9RqXggqLQah0Oi3ySDs4OWalTI3dwXxlLJkQOkAEJtDl8%2BBP1%2BL1oD%2FU9XWe61qMUO21POrSKtSE4yS91E72EUXt9ipMXVzFHUqrGk0Ajz%2FITcGW%2BIpVXr%2FCeBa%2BF7VUu7bX4UM1LjkP4DxkkXEypmOXu3Nf3Nmcrl2bzQMkIwSUisx6X2LI73CbvQMOPJxii3AygpmkKtciu8HFpjSlFZxW1RkAy91QHgP40I%2By0vyNQ7DC52ojEBjqkAUGogpLCmMp0aHZTuPldPP446xkb2LtQH9v0uN0EpT9hl%2BFYy9QdUZDNIxSzEHWvZUGNhabx9Hw%2F14B%2Be%2BM2dXyjt0jDiEl1UPFvBmRdB71zjxWBs1t2DZuIOE55LRzYbh0aPb092XHkf8iarSWSwq%2FpC5ZqeiLq5k3YFxP75e3DnEuME42iiad9DkGgX90nG%2BYVqAIvF4PQFD0Tfv9r%2BvJb2b%2BH&X-Amz-Signature=3093ec43bf8894512b176eccdc909dce76a31488df0bb5ddb0b3a700b181caf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
