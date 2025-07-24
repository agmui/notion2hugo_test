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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWNJUCE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDOZedwoiPAGCv0dSxsodvGSB55vB2sno3vbPZjFsW46gIgbC2zyg9OhSTzjh4rEmLLQ9oUWAdbY0njL7TouBmTueIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKvjc2Zr5s3S3%2BvOCircA1c8GFpS%2Bls3QMvvurYAW7zG3p4VQoC69U2QDakgw4kzOnYQUwOmWij7d1dToG%2BWmAjw9AdhhfJ4siIwCKbOGzs1n3jkvuYOZOnuqA4kDmtpyI77Rn1UVoZg1CUcxXC2OmRHeYmJUPkwJD0UHTuoGPKPf5%2FV6TU9R4RVknHFLK%2BwIxlBYg%2BBYtS6lQB9KXOtn8wlBJ9RygJxUKos%2Fi4oeVR91ihu2rhzjKO%2FHt8qFcmf4aPtFe5onYDlGRbKpFPTX7KBgcsJ2GaeOQUoO%2BaJ6mETYizKfx0FCdtyquYJVtjdOyQ4giM3k4A%2FeJV9ikBQy9mZcD0TNxsjIBNftvsRx5sGgUZ5I7IINNihAN1zfZflfbZHm9%2FhtJhNgmA6W2hVU7e%2B%2BRx4XNq0R5yjITHhSLD4vvgfXuO1o9qH9pAqf3UPcDYpV3q6uiiayfy%2BQZJorxJg213%2Fr%2F9wTGj1CeY6dAYY57EhJgacq8X8m%2FWxqU23eq43HGUOyTrbyio8Pz0xL9mDne%2Bg2cRg6qFSdx2V9rXcoQ13EQAiiIDnRu0X2Wuyl8hSK96zd8f8X5RlQ4szww7LikAGrgAngST3jjoXclrbvwifZJH8BMD2Yu3HoS9FUsKxjvgDL7qm0vA%2BMJqPisQGOqUB0dVccsbjdJP%2Bjj9EG3qCKk2KKpNlkZqzfYVoSPU%2BBdXWyOB8x8USycVRj0o9Ty9qcQL%2FNAx%2F2ENZnicSBNDzzbvbcJBeN0ZFg1cUJkvAD24B3J8BDKjA1Wh9hlKF%2BNqGb1r845yhd2%2B9AQxRJaDZ21UJoJQCFq7ammGF7DUPgfDr1u9KNQlMcUZnFvrW4RWvIywhAQiBQbW66PtF5mh9wsxuKjzV&X-Amz-Signature=01872ad3ef291769b4de522a1285c0c2a9327a10ce362e3f434ecaff5847f012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWNJUCE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDOZedwoiPAGCv0dSxsodvGSB55vB2sno3vbPZjFsW46gIgbC2zyg9OhSTzjh4rEmLLQ9oUWAdbY0njL7TouBmTueIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKvjc2Zr5s3S3%2BvOCircA1c8GFpS%2Bls3QMvvurYAW7zG3p4VQoC69U2QDakgw4kzOnYQUwOmWij7d1dToG%2BWmAjw9AdhhfJ4siIwCKbOGzs1n3jkvuYOZOnuqA4kDmtpyI77Rn1UVoZg1CUcxXC2OmRHeYmJUPkwJD0UHTuoGPKPf5%2FV6TU9R4RVknHFLK%2BwIxlBYg%2BBYtS6lQB9KXOtn8wlBJ9RygJxUKos%2Fi4oeVR91ihu2rhzjKO%2FHt8qFcmf4aPtFe5onYDlGRbKpFPTX7KBgcsJ2GaeOQUoO%2BaJ6mETYizKfx0FCdtyquYJVtjdOyQ4giM3k4A%2FeJV9ikBQy9mZcD0TNxsjIBNftvsRx5sGgUZ5I7IINNihAN1zfZflfbZHm9%2FhtJhNgmA6W2hVU7e%2B%2BRx4XNq0R5yjITHhSLD4vvgfXuO1o9qH9pAqf3UPcDYpV3q6uiiayfy%2BQZJorxJg213%2Fr%2F9wTGj1CeY6dAYY57EhJgacq8X8m%2FWxqU23eq43HGUOyTrbyio8Pz0xL9mDne%2Bg2cRg6qFSdx2V9rXcoQ13EQAiiIDnRu0X2Wuyl8hSK96zd8f8X5RlQ4szww7LikAGrgAngST3jjoXclrbvwifZJH8BMD2Yu3HoS9FUsKxjvgDL7qm0vA%2BMJqPisQGOqUB0dVccsbjdJP%2Bjj9EG3qCKk2KKpNlkZqzfYVoSPU%2BBdXWyOB8x8USycVRj0o9Ty9qcQL%2FNAx%2F2ENZnicSBNDzzbvbcJBeN0ZFg1cUJkvAD24B3J8BDKjA1Wh9hlKF%2BNqGb1r845yhd2%2B9AQxRJaDZ21UJoJQCFq7ammGF7DUPgfDr1u9KNQlMcUZnFvrW4RWvIywhAQiBQbW66PtF5mh9wsxuKjzV&X-Amz-Signature=7f41221bd963f3f46fbe4de2b67e7c2c4edb564aef867e52f1f3543ecf10a9f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWNJUCE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDOZedwoiPAGCv0dSxsodvGSB55vB2sno3vbPZjFsW46gIgbC2zyg9OhSTzjh4rEmLLQ9oUWAdbY0njL7TouBmTueIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKvjc2Zr5s3S3%2BvOCircA1c8GFpS%2Bls3QMvvurYAW7zG3p4VQoC69U2QDakgw4kzOnYQUwOmWij7d1dToG%2BWmAjw9AdhhfJ4siIwCKbOGzs1n3jkvuYOZOnuqA4kDmtpyI77Rn1UVoZg1CUcxXC2OmRHeYmJUPkwJD0UHTuoGPKPf5%2FV6TU9R4RVknHFLK%2BwIxlBYg%2BBYtS6lQB9KXOtn8wlBJ9RygJxUKos%2Fi4oeVR91ihu2rhzjKO%2FHt8qFcmf4aPtFe5onYDlGRbKpFPTX7KBgcsJ2GaeOQUoO%2BaJ6mETYizKfx0FCdtyquYJVtjdOyQ4giM3k4A%2FeJV9ikBQy9mZcD0TNxsjIBNftvsRx5sGgUZ5I7IINNihAN1zfZflfbZHm9%2FhtJhNgmA6W2hVU7e%2B%2BRx4XNq0R5yjITHhSLD4vvgfXuO1o9qH9pAqf3UPcDYpV3q6uiiayfy%2BQZJorxJg213%2Fr%2F9wTGj1CeY6dAYY57EhJgacq8X8m%2FWxqU23eq43HGUOyTrbyio8Pz0xL9mDne%2Bg2cRg6qFSdx2V9rXcoQ13EQAiiIDnRu0X2Wuyl8hSK96zd8f8X5RlQ4szww7LikAGrgAngST3jjoXclrbvwifZJH8BMD2Yu3HoS9FUsKxjvgDL7qm0vA%2BMJqPisQGOqUB0dVccsbjdJP%2Bjj9EG3qCKk2KKpNlkZqzfYVoSPU%2BBdXWyOB8x8USycVRj0o9Ty9qcQL%2FNAx%2F2ENZnicSBNDzzbvbcJBeN0ZFg1cUJkvAD24B3J8BDKjA1Wh9hlKF%2BNqGb1r845yhd2%2B9AQxRJaDZ21UJoJQCFq7ammGF7DUPgfDr1u9KNQlMcUZnFvrW4RWvIywhAQiBQbW66PtF5mh9wsxuKjzV&X-Amz-Signature=579ae5d58fdc05013ca0fa2fdf6290492c702cc4604f954b37d99d9d342defc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWNJUCE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDOZedwoiPAGCv0dSxsodvGSB55vB2sno3vbPZjFsW46gIgbC2zyg9OhSTzjh4rEmLLQ9oUWAdbY0njL7TouBmTueIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKvjc2Zr5s3S3%2BvOCircA1c8GFpS%2Bls3QMvvurYAW7zG3p4VQoC69U2QDakgw4kzOnYQUwOmWij7d1dToG%2BWmAjw9AdhhfJ4siIwCKbOGzs1n3jkvuYOZOnuqA4kDmtpyI77Rn1UVoZg1CUcxXC2OmRHeYmJUPkwJD0UHTuoGPKPf5%2FV6TU9R4RVknHFLK%2BwIxlBYg%2BBYtS6lQB9KXOtn8wlBJ9RygJxUKos%2Fi4oeVR91ihu2rhzjKO%2FHt8qFcmf4aPtFe5onYDlGRbKpFPTX7KBgcsJ2GaeOQUoO%2BaJ6mETYizKfx0FCdtyquYJVtjdOyQ4giM3k4A%2FeJV9ikBQy9mZcD0TNxsjIBNftvsRx5sGgUZ5I7IINNihAN1zfZflfbZHm9%2FhtJhNgmA6W2hVU7e%2B%2BRx4XNq0R5yjITHhSLD4vvgfXuO1o9qH9pAqf3UPcDYpV3q6uiiayfy%2BQZJorxJg213%2Fr%2F9wTGj1CeY6dAYY57EhJgacq8X8m%2FWxqU23eq43HGUOyTrbyio8Pz0xL9mDne%2Bg2cRg6qFSdx2V9rXcoQ13EQAiiIDnRu0X2Wuyl8hSK96zd8f8X5RlQ4szww7LikAGrgAngST3jjoXclrbvwifZJH8BMD2Yu3HoS9FUsKxjvgDL7qm0vA%2BMJqPisQGOqUB0dVccsbjdJP%2Bjj9EG3qCKk2KKpNlkZqzfYVoSPU%2BBdXWyOB8x8USycVRj0o9Ty9qcQL%2FNAx%2F2ENZnicSBNDzzbvbcJBeN0ZFg1cUJkvAD24B3J8BDKjA1Wh9hlKF%2BNqGb1r845yhd2%2B9AQxRJaDZ21UJoJQCFq7ammGF7DUPgfDr1u9KNQlMcUZnFvrW4RWvIywhAQiBQbW66PtF5mh9wsxuKjzV&X-Amz-Signature=14c5739345d14a2923f3aaa0d1bf63712bc57b31540f8b7412058cef7bbdb680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWNJUCE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDOZedwoiPAGCv0dSxsodvGSB55vB2sno3vbPZjFsW46gIgbC2zyg9OhSTzjh4rEmLLQ9oUWAdbY0njL7TouBmTueIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKvjc2Zr5s3S3%2BvOCircA1c8GFpS%2Bls3QMvvurYAW7zG3p4VQoC69U2QDakgw4kzOnYQUwOmWij7d1dToG%2BWmAjw9AdhhfJ4siIwCKbOGzs1n3jkvuYOZOnuqA4kDmtpyI77Rn1UVoZg1CUcxXC2OmRHeYmJUPkwJD0UHTuoGPKPf5%2FV6TU9R4RVknHFLK%2BwIxlBYg%2BBYtS6lQB9KXOtn8wlBJ9RygJxUKos%2Fi4oeVR91ihu2rhzjKO%2FHt8qFcmf4aPtFe5onYDlGRbKpFPTX7KBgcsJ2GaeOQUoO%2BaJ6mETYizKfx0FCdtyquYJVtjdOyQ4giM3k4A%2FeJV9ikBQy9mZcD0TNxsjIBNftvsRx5sGgUZ5I7IINNihAN1zfZflfbZHm9%2FhtJhNgmA6W2hVU7e%2B%2BRx4XNq0R5yjITHhSLD4vvgfXuO1o9qH9pAqf3UPcDYpV3q6uiiayfy%2BQZJorxJg213%2Fr%2F9wTGj1CeY6dAYY57EhJgacq8X8m%2FWxqU23eq43HGUOyTrbyio8Pz0xL9mDne%2Bg2cRg6qFSdx2V9rXcoQ13EQAiiIDnRu0X2Wuyl8hSK96zd8f8X5RlQ4szww7LikAGrgAngST3jjoXclrbvwifZJH8BMD2Yu3HoS9FUsKxjvgDL7qm0vA%2BMJqPisQGOqUB0dVccsbjdJP%2Bjj9EG3qCKk2KKpNlkZqzfYVoSPU%2BBdXWyOB8x8USycVRj0o9Ty9qcQL%2FNAx%2F2ENZnicSBNDzzbvbcJBeN0ZFg1cUJkvAD24B3J8BDKjA1Wh9hlKF%2BNqGb1r845yhd2%2B9AQxRJaDZ21UJoJQCFq7ammGF7DUPgfDr1u9KNQlMcUZnFvrW4RWvIywhAQiBQbW66PtF5mh9wsxuKjzV&X-Amz-Signature=357620011ddd9e5672770a9659ed97a01b1377d9e5e2a5c69bf6f794d0555c4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWNJUCE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDOZedwoiPAGCv0dSxsodvGSB55vB2sno3vbPZjFsW46gIgbC2zyg9OhSTzjh4rEmLLQ9oUWAdbY0njL7TouBmTueIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKvjc2Zr5s3S3%2BvOCircA1c8GFpS%2Bls3QMvvurYAW7zG3p4VQoC69U2QDakgw4kzOnYQUwOmWij7d1dToG%2BWmAjw9AdhhfJ4siIwCKbOGzs1n3jkvuYOZOnuqA4kDmtpyI77Rn1UVoZg1CUcxXC2OmRHeYmJUPkwJD0UHTuoGPKPf5%2FV6TU9R4RVknHFLK%2BwIxlBYg%2BBYtS6lQB9KXOtn8wlBJ9RygJxUKos%2Fi4oeVR91ihu2rhzjKO%2FHt8qFcmf4aPtFe5onYDlGRbKpFPTX7KBgcsJ2GaeOQUoO%2BaJ6mETYizKfx0FCdtyquYJVtjdOyQ4giM3k4A%2FeJV9ikBQy9mZcD0TNxsjIBNftvsRx5sGgUZ5I7IINNihAN1zfZflfbZHm9%2FhtJhNgmA6W2hVU7e%2B%2BRx4XNq0R5yjITHhSLD4vvgfXuO1o9qH9pAqf3UPcDYpV3q6uiiayfy%2BQZJorxJg213%2Fr%2F9wTGj1CeY6dAYY57EhJgacq8X8m%2FWxqU23eq43HGUOyTrbyio8Pz0xL9mDne%2Bg2cRg6qFSdx2V9rXcoQ13EQAiiIDnRu0X2Wuyl8hSK96zd8f8X5RlQ4szww7LikAGrgAngST3jjoXclrbvwifZJH8BMD2Yu3HoS9FUsKxjvgDL7qm0vA%2BMJqPisQGOqUB0dVccsbjdJP%2Bjj9EG3qCKk2KKpNlkZqzfYVoSPU%2BBdXWyOB8x8USycVRj0o9Ty9qcQL%2FNAx%2F2ENZnicSBNDzzbvbcJBeN0ZFg1cUJkvAD24B3J8BDKjA1Wh9hlKF%2BNqGb1r845yhd2%2B9AQxRJaDZ21UJoJQCFq7ammGF7DUPgfDr1u9KNQlMcUZnFvrW4RWvIywhAQiBQbW66PtF5mh9wsxuKjzV&X-Amz-Signature=a961a3edc5419e4fc5d29d0a7f2791024f26f9db8da0e87e76b6d9a5f4c742af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWNJUCE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDOZedwoiPAGCv0dSxsodvGSB55vB2sno3vbPZjFsW46gIgbC2zyg9OhSTzjh4rEmLLQ9oUWAdbY0njL7TouBmTueIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKvjc2Zr5s3S3%2BvOCircA1c8GFpS%2Bls3QMvvurYAW7zG3p4VQoC69U2QDakgw4kzOnYQUwOmWij7d1dToG%2BWmAjw9AdhhfJ4siIwCKbOGzs1n3jkvuYOZOnuqA4kDmtpyI77Rn1UVoZg1CUcxXC2OmRHeYmJUPkwJD0UHTuoGPKPf5%2FV6TU9R4RVknHFLK%2BwIxlBYg%2BBYtS6lQB9KXOtn8wlBJ9RygJxUKos%2Fi4oeVR91ihu2rhzjKO%2FHt8qFcmf4aPtFe5onYDlGRbKpFPTX7KBgcsJ2GaeOQUoO%2BaJ6mETYizKfx0FCdtyquYJVtjdOyQ4giM3k4A%2FeJV9ikBQy9mZcD0TNxsjIBNftvsRx5sGgUZ5I7IINNihAN1zfZflfbZHm9%2FhtJhNgmA6W2hVU7e%2B%2BRx4XNq0R5yjITHhSLD4vvgfXuO1o9qH9pAqf3UPcDYpV3q6uiiayfy%2BQZJorxJg213%2Fr%2F9wTGj1CeY6dAYY57EhJgacq8X8m%2FWxqU23eq43HGUOyTrbyio8Pz0xL9mDne%2Bg2cRg6qFSdx2V9rXcoQ13EQAiiIDnRu0X2Wuyl8hSK96zd8f8X5RlQ4szww7LikAGrgAngST3jjoXclrbvwifZJH8BMD2Yu3HoS9FUsKxjvgDL7qm0vA%2BMJqPisQGOqUB0dVccsbjdJP%2Bjj9EG3qCKk2KKpNlkZqzfYVoSPU%2BBdXWyOB8x8USycVRj0o9Ty9qcQL%2FNAx%2F2ENZnicSBNDzzbvbcJBeN0ZFg1cUJkvAD24B3J8BDKjA1Wh9hlKF%2BNqGb1r845yhd2%2B9AQxRJaDZ21UJoJQCFq7ammGF7DUPgfDr1u9KNQlMcUZnFvrW4RWvIywhAQiBQbW66PtF5mh9wsxuKjzV&X-Amz-Signature=c67de495a1beb066fb5e6c668ae8106f1f79e7331c3f9b95d9f0c8f871a0b3b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWNJUCE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDOZedwoiPAGCv0dSxsodvGSB55vB2sno3vbPZjFsW46gIgbC2zyg9OhSTzjh4rEmLLQ9oUWAdbY0njL7TouBmTueIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKvjc2Zr5s3S3%2BvOCircA1c8GFpS%2Bls3QMvvurYAW7zG3p4VQoC69U2QDakgw4kzOnYQUwOmWij7d1dToG%2BWmAjw9AdhhfJ4siIwCKbOGzs1n3jkvuYOZOnuqA4kDmtpyI77Rn1UVoZg1CUcxXC2OmRHeYmJUPkwJD0UHTuoGPKPf5%2FV6TU9R4RVknHFLK%2BwIxlBYg%2BBYtS6lQB9KXOtn8wlBJ9RygJxUKos%2Fi4oeVR91ihu2rhzjKO%2FHt8qFcmf4aPtFe5onYDlGRbKpFPTX7KBgcsJ2GaeOQUoO%2BaJ6mETYizKfx0FCdtyquYJVtjdOyQ4giM3k4A%2FeJV9ikBQy9mZcD0TNxsjIBNftvsRx5sGgUZ5I7IINNihAN1zfZflfbZHm9%2FhtJhNgmA6W2hVU7e%2B%2BRx4XNq0R5yjITHhSLD4vvgfXuO1o9qH9pAqf3UPcDYpV3q6uiiayfy%2BQZJorxJg213%2Fr%2F9wTGj1CeY6dAYY57EhJgacq8X8m%2FWxqU23eq43HGUOyTrbyio8Pz0xL9mDne%2Bg2cRg6qFSdx2V9rXcoQ13EQAiiIDnRu0X2Wuyl8hSK96zd8f8X5RlQ4szww7LikAGrgAngST3jjoXclrbvwifZJH8BMD2Yu3HoS9FUsKxjvgDL7qm0vA%2BMJqPisQGOqUB0dVccsbjdJP%2Bjj9EG3qCKk2KKpNlkZqzfYVoSPU%2BBdXWyOB8x8USycVRj0o9Ty9qcQL%2FNAx%2F2ENZnicSBNDzzbvbcJBeN0ZFg1cUJkvAD24B3J8BDKjA1Wh9hlKF%2BNqGb1r845yhd2%2B9AQxRJaDZ21UJoJQCFq7ammGF7DUPgfDr1u9KNQlMcUZnFvrW4RWvIywhAQiBQbW66PtF5mh9wsxuKjzV&X-Amz-Signature=46789d4b8d243b90d5767c8e096ce6c058f7217ef45799e34863e479fa31df28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWNJUCE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDOZedwoiPAGCv0dSxsodvGSB55vB2sno3vbPZjFsW46gIgbC2zyg9OhSTzjh4rEmLLQ9oUWAdbY0njL7TouBmTueIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKvjc2Zr5s3S3%2BvOCircA1c8GFpS%2Bls3QMvvurYAW7zG3p4VQoC69U2QDakgw4kzOnYQUwOmWij7d1dToG%2BWmAjw9AdhhfJ4siIwCKbOGzs1n3jkvuYOZOnuqA4kDmtpyI77Rn1UVoZg1CUcxXC2OmRHeYmJUPkwJD0UHTuoGPKPf5%2FV6TU9R4RVknHFLK%2BwIxlBYg%2BBYtS6lQB9KXOtn8wlBJ9RygJxUKos%2Fi4oeVR91ihu2rhzjKO%2FHt8qFcmf4aPtFe5onYDlGRbKpFPTX7KBgcsJ2GaeOQUoO%2BaJ6mETYizKfx0FCdtyquYJVtjdOyQ4giM3k4A%2FeJV9ikBQy9mZcD0TNxsjIBNftvsRx5sGgUZ5I7IINNihAN1zfZflfbZHm9%2FhtJhNgmA6W2hVU7e%2B%2BRx4XNq0R5yjITHhSLD4vvgfXuO1o9qH9pAqf3UPcDYpV3q6uiiayfy%2BQZJorxJg213%2Fr%2F9wTGj1CeY6dAYY57EhJgacq8X8m%2FWxqU23eq43HGUOyTrbyio8Pz0xL9mDne%2Bg2cRg6qFSdx2V9rXcoQ13EQAiiIDnRu0X2Wuyl8hSK96zd8f8X5RlQ4szww7LikAGrgAngST3jjoXclrbvwifZJH8BMD2Yu3HoS9FUsKxjvgDL7qm0vA%2BMJqPisQGOqUB0dVccsbjdJP%2Bjj9EG3qCKk2KKpNlkZqzfYVoSPU%2BBdXWyOB8x8USycVRj0o9Ty9qcQL%2FNAx%2F2ENZnicSBNDzzbvbcJBeN0ZFg1cUJkvAD24B3J8BDKjA1Wh9hlKF%2BNqGb1r845yhd2%2B9AQxRJaDZ21UJoJQCFq7ammGF7DUPgfDr1u9KNQlMcUZnFvrW4RWvIywhAQiBQbW66PtF5mh9wsxuKjzV&X-Amz-Signature=ed4f6343290b9c936f67f32c536ea857263e0af8b5c9199480bb4cc0d8d4c9a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW44HQQ2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCuctx7b8qJNbZXatZPww7SXEim30bs0S%2Fuc%2FIOo13W0QIgSPBJA0XLpgNMKhGi9bkAeA3T8WrLdBhZzOov2W0i6DIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDP5rUw%2BQw3%2B0Lgac5yrcA2VgqAbYXeBWmzn2ENhaLeMcEEXCGHWvSvCclNzsGnGCHhefd6vvVnDveUqm47bFx5w6Qc0QkUMRwBNF%2Bcu6GsOYi13qPlN8Eg4AoAolYfpz2D4Yhzs6KztlcFvMPNYtwkBe%2FgMtj84dp0s7kKbDBtiNZ89jBH4AphqQyZylLFDBdMO6jTkTX%2FpNfz9Z8Tzm1qyoNN9HlkcLW6K%2BpkvCWc%2BDgEyYqoFPz92lTa%2BhU1CEcLv6s%2F0FhpXpraKXCD08f1exezBWLVmexhzWYZqp30hLd19XQlf7GzS1zOl08ADwch790nTU1LvLR58rNjkLNxgWH5b8XuaWFC1Ado68%2B3JR7LaSWYtEUJyD42MiDr2k0L4%2B2h%2B52MXvCFjA%2BRsCdfX2X%2ByqM3BLtkD1ysMkgKRngz3vfAGNnWNLlmleOnbtPOSzrZCzMBjrW57SzbMdNtu%2BLQd%2BHXqy7oKo16Ol1XoSrOxjjFBdeApwqKbKo3TBWE1bO5z41Mkt6oX6tzhcRAFQxp4sAXzqwi%2B8AvSPlHAhzYfZH2xG9plEFqr%2FXz4Uz0rhenUA4XwyOumHhbUH%2BQLkfpKDbV4OgsMvzWixmgEVYlsWbPGt5Tyro1Ob3lLZTjwcVz2F6HaGSYQcMIuPisQGOqUBlI7SkRGG0QvUqUvA1s7byVXZe7J4IojjfdrmJq63FABGpq7r7ybwC2JlFngpTIdvFGWS2%2Bt29DSZ3dYlC%2FV0XJvrgNg%2B9uwye%2FioooEtlJ7HUCkJuETRllmN9VqigntETu1FVZps2h2VEB3zGjRz9ODTMWzr%2BijJwbMT1PUWL%2Fe9ZQ%2Fr%2BpUkPOEqNqXLCuzsXxZq2B49MdDIl1ynUZSH9C3vERJp&X-Amz-Signature=c84e2756f65f52e4effb1c4196ae2967db0f2e1b04ce14321478b1958677be8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWNJUCE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDOZedwoiPAGCv0dSxsodvGSB55vB2sno3vbPZjFsW46gIgbC2zyg9OhSTzjh4rEmLLQ9oUWAdbY0njL7TouBmTueIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKvjc2Zr5s3S3%2BvOCircA1c8GFpS%2Bls3QMvvurYAW7zG3p4VQoC69U2QDakgw4kzOnYQUwOmWij7d1dToG%2BWmAjw9AdhhfJ4siIwCKbOGzs1n3jkvuYOZOnuqA4kDmtpyI77Rn1UVoZg1CUcxXC2OmRHeYmJUPkwJD0UHTuoGPKPf5%2FV6TU9R4RVknHFLK%2BwIxlBYg%2BBYtS6lQB9KXOtn8wlBJ9RygJxUKos%2Fi4oeVR91ihu2rhzjKO%2FHt8qFcmf4aPtFe5onYDlGRbKpFPTX7KBgcsJ2GaeOQUoO%2BaJ6mETYizKfx0FCdtyquYJVtjdOyQ4giM3k4A%2FeJV9ikBQy9mZcD0TNxsjIBNftvsRx5sGgUZ5I7IINNihAN1zfZflfbZHm9%2FhtJhNgmA6W2hVU7e%2B%2BRx4XNq0R5yjITHhSLD4vvgfXuO1o9qH9pAqf3UPcDYpV3q6uiiayfy%2BQZJorxJg213%2Fr%2F9wTGj1CeY6dAYY57EhJgacq8X8m%2FWxqU23eq43HGUOyTrbyio8Pz0xL9mDne%2Bg2cRg6qFSdx2V9rXcoQ13EQAiiIDnRu0X2Wuyl8hSK96zd8f8X5RlQ4szww7LikAGrgAngST3jjoXclrbvwifZJH8BMD2Yu3HoS9FUsKxjvgDL7qm0vA%2BMJqPisQGOqUB0dVccsbjdJP%2Bjj9EG3qCKk2KKpNlkZqzfYVoSPU%2BBdXWyOB8x8USycVRj0o9Ty9qcQL%2FNAx%2F2ENZnicSBNDzzbvbcJBeN0ZFg1cUJkvAD24B3J8BDKjA1Wh9hlKF%2BNqGb1r845yhd2%2B9AQxRJaDZ21UJoJQCFq7ammGF7DUPgfDr1u9KNQlMcUZnFvrW4RWvIywhAQiBQbW66PtF5mh9wsxuKjzV&X-Amz-Signature=7e2ce4c919ee81d8e798748f7dabb88f1a768385f19c75eda4997640de05d44f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWNJUCE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDOZedwoiPAGCv0dSxsodvGSB55vB2sno3vbPZjFsW46gIgbC2zyg9OhSTzjh4rEmLLQ9oUWAdbY0njL7TouBmTueIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKvjc2Zr5s3S3%2BvOCircA1c8GFpS%2Bls3QMvvurYAW7zG3p4VQoC69U2QDakgw4kzOnYQUwOmWij7d1dToG%2BWmAjw9AdhhfJ4siIwCKbOGzs1n3jkvuYOZOnuqA4kDmtpyI77Rn1UVoZg1CUcxXC2OmRHeYmJUPkwJD0UHTuoGPKPf5%2FV6TU9R4RVknHFLK%2BwIxlBYg%2BBYtS6lQB9KXOtn8wlBJ9RygJxUKos%2Fi4oeVR91ihu2rhzjKO%2FHt8qFcmf4aPtFe5onYDlGRbKpFPTX7KBgcsJ2GaeOQUoO%2BaJ6mETYizKfx0FCdtyquYJVtjdOyQ4giM3k4A%2FeJV9ikBQy9mZcD0TNxsjIBNftvsRx5sGgUZ5I7IINNihAN1zfZflfbZHm9%2FhtJhNgmA6W2hVU7e%2B%2BRx4XNq0R5yjITHhSLD4vvgfXuO1o9qH9pAqf3UPcDYpV3q6uiiayfy%2BQZJorxJg213%2Fr%2F9wTGj1CeY6dAYY57EhJgacq8X8m%2FWxqU23eq43HGUOyTrbyio8Pz0xL9mDne%2Bg2cRg6qFSdx2V9rXcoQ13EQAiiIDnRu0X2Wuyl8hSK96zd8f8X5RlQ4szww7LikAGrgAngST3jjoXclrbvwifZJH8BMD2Yu3HoS9FUsKxjvgDL7qm0vA%2BMJqPisQGOqUB0dVccsbjdJP%2Bjj9EG3qCKk2KKpNlkZqzfYVoSPU%2BBdXWyOB8x8USycVRj0o9Ty9qcQL%2FNAx%2F2ENZnicSBNDzzbvbcJBeN0ZFg1cUJkvAD24B3J8BDKjA1Wh9hlKF%2BNqGb1r845yhd2%2B9AQxRJaDZ21UJoJQCFq7ammGF7DUPgfDr1u9KNQlMcUZnFvrW4RWvIywhAQiBQbW66PtF5mh9wsxuKjzV&X-Amz-Signature=153d861d682fffaf649f55e91dc98c45015a8f1645255e15e5df4b95ac889f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUHMK5P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD6wtsmx6GoP5FwlP4lOBd8%2BzNaOAewp9R94m%2FiObq4tQIgGYLrhqO0mJT6jw94hCVHeTUyugHKyHClyq2rjsTurXsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIO8MSq7n1zNgS1RLircA8VVrvLp1STrr0qpRTkOexkhH0IfunXmUuaGo%2BDKFuOhCkGglY%2BPIDRS69WKnqZFV9XOZmmxWGg3V1K0FOCklWFOJGbA7CKj7r7BUhtMHa0ViBWi1zwykByyrGlur7iT5%2BuZLwlWUsWRBM9QhbtUQaLIgjRuYkciWl%2B%2BSNV68pBR%2FCz9qX43DdlBPwsre0CKR2i2LSbQ88ads68Dd0ARoNudz3d5B8cWNsHVnWZ3ZEcKVb9YoCtOZjY02Ufrkf%2BJlqHm8xcZ3jZz1leNRQbZGxeRY6BZG%2BK2unxu1Dxl%2BQdK4PUrQEgriyyWSqJ0YbZaWD%2Bavyq7S%2Brp%2F%2BXw%2FRRWQ759nIqFTAvEkV%2FSE6Ditp69Ecg7E3dg3AVakw974DpoYV%2BIyMiVU0pI%2F4cM%2Bxynh8S4HGSql7123Y5%2FnUtFlMkkpbXEHF9IRrrQnLI%2Fws3hg4prEWy5DXLLuTLwFeXvYQYWfFNKmEfB5FTYExNmCZ%2B90RL%2FOVYLI%2BnxmfCRq4B%2FgyMZDdRxNxMIIP%2Buj8HgyLQ6fLVQGEZrbS9VzgrRPB3XEWJRHVrxNX9HSyZtPvLRvoMSOcPGnuISJm8x8g8sFx7oJIgodJJ3tIQqT4YMFL3ZS6GYpoBS4svaG1s6MKiPisQGOqUBdqOoT0fzzANtWk3uHBnW6qu8nAHT2e68oArAxWT1%2FU0mg95oObjhWv2TpaUWyKb6wG%2FnD7nkqBD6TDAFU25fb25tOYM8xAHqq5CUnfoIIjIX%2BDUJQg8%2BrT95nudTw4%2Bl3l4gC4xEPZrOO0xaBchv0YyQ57qaejpoO2LcklhOQZhOKyr9KFEv2I6CfD1J4Y9R9ChrXw0QGS%2Fosz79lZPRMdd8h7k7&X-Amz-Signature=c5f642dfb6ca4135044b89acdad82c72c1c3a5106fdc7d5c317324b03ed6daa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUHMK5P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD6wtsmx6GoP5FwlP4lOBd8%2BzNaOAewp9R94m%2FiObq4tQIgGYLrhqO0mJT6jw94hCVHeTUyugHKyHClyq2rjsTurXsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIO8MSq7n1zNgS1RLircA8VVrvLp1STrr0qpRTkOexkhH0IfunXmUuaGo%2BDKFuOhCkGglY%2BPIDRS69WKnqZFV9XOZmmxWGg3V1K0FOCklWFOJGbA7CKj7r7BUhtMHa0ViBWi1zwykByyrGlur7iT5%2BuZLwlWUsWRBM9QhbtUQaLIgjRuYkciWl%2B%2BSNV68pBR%2FCz9qX43DdlBPwsre0CKR2i2LSbQ88ads68Dd0ARoNudz3d5B8cWNsHVnWZ3ZEcKVb9YoCtOZjY02Ufrkf%2BJlqHm8xcZ3jZz1leNRQbZGxeRY6BZG%2BK2unxu1Dxl%2BQdK4PUrQEgriyyWSqJ0YbZaWD%2Bavyq7S%2Brp%2F%2BXw%2FRRWQ759nIqFTAvEkV%2FSE6Ditp69Ecg7E3dg3AVakw974DpoYV%2BIyMiVU0pI%2F4cM%2Bxynh8S4HGSql7123Y5%2FnUtFlMkkpbXEHF9IRrrQnLI%2Fws3hg4prEWy5DXLLuTLwFeXvYQYWfFNKmEfB5FTYExNmCZ%2B90RL%2FOVYLI%2BnxmfCRq4B%2FgyMZDdRxNxMIIP%2Buj8HgyLQ6fLVQGEZrbS9VzgrRPB3XEWJRHVrxNX9HSyZtPvLRvoMSOcPGnuISJm8x8g8sFx7oJIgodJJ3tIQqT4YMFL3ZS6GYpoBS4svaG1s6MKiPisQGOqUBdqOoT0fzzANtWk3uHBnW6qu8nAHT2e68oArAxWT1%2FU0mg95oObjhWv2TpaUWyKb6wG%2FnD7nkqBD6TDAFU25fb25tOYM8xAHqq5CUnfoIIjIX%2BDUJQg8%2BrT95nudTw4%2Bl3l4gC4xEPZrOO0xaBchv0YyQ57qaejpoO2LcklhOQZhOKyr9KFEv2I6CfD1J4Y9R9ChrXw0QGS%2Fosz79lZPRMdd8h7k7&X-Amz-Signature=9c0c725f21364617e92ffc6c7400d85f306c5f914466e980898a46ae3da5ca0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUHMK5P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD6wtsmx6GoP5FwlP4lOBd8%2BzNaOAewp9R94m%2FiObq4tQIgGYLrhqO0mJT6jw94hCVHeTUyugHKyHClyq2rjsTurXsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIO8MSq7n1zNgS1RLircA8VVrvLp1STrr0qpRTkOexkhH0IfunXmUuaGo%2BDKFuOhCkGglY%2BPIDRS69WKnqZFV9XOZmmxWGg3V1K0FOCklWFOJGbA7CKj7r7BUhtMHa0ViBWi1zwykByyrGlur7iT5%2BuZLwlWUsWRBM9QhbtUQaLIgjRuYkciWl%2B%2BSNV68pBR%2FCz9qX43DdlBPwsre0CKR2i2LSbQ88ads68Dd0ARoNudz3d5B8cWNsHVnWZ3ZEcKVb9YoCtOZjY02Ufrkf%2BJlqHm8xcZ3jZz1leNRQbZGxeRY6BZG%2BK2unxu1Dxl%2BQdK4PUrQEgriyyWSqJ0YbZaWD%2Bavyq7S%2Brp%2F%2BXw%2FRRWQ759nIqFTAvEkV%2FSE6Ditp69Ecg7E3dg3AVakw974DpoYV%2BIyMiVU0pI%2F4cM%2Bxynh8S4HGSql7123Y5%2FnUtFlMkkpbXEHF9IRrrQnLI%2Fws3hg4prEWy5DXLLuTLwFeXvYQYWfFNKmEfB5FTYExNmCZ%2B90RL%2FOVYLI%2BnxmfCRq4B%2FgyMZDdRxNxMIIP%2Buj8HgyLQ6fLVQGEZrbS9VzgrRPB3XEWJRHVrxNX9HSyZtPvLRvoMSOcPGnuISJm8x8g8sFx7oJIgodJJ3tIQqT4YMFL3ZS6GYpoBS4svaG1s6MKiPisQGOqUBdqOoT0fzzANtWk3uHBnW6qu8nAHT2e68oArAxWT1%2FU0mg95oObjhWv2TpaUWyKb6wG%2FnD7nkqBD6TDAFU25fb25tOYM8xAHqq5CUnfoIIjIX%2BDUJQg8%2BrT95nudTw4%2Bl3l4gC4xEPZrOO0xaBchv0YyQ57qaejpoO2LcklhOQZhOKyr9KFEv2I6CfD1J4Y9R9ChrXw0QGS%2Fosz79lZPRMdd8h7k7&X-Amz-Signature=554c6444cc29f7c35b7e59d57f45cafbbeca93653b9b04a756042136fe310614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUHMK5P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD6wtsmx6GoP5FwlP4lOBd8%2BzNaOAewp9R94m%2FiObq4tQIgGYLrhqO0mJT6jw94hCVHeTUyugHKyHClyq2rjsTurXsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIO8MSq7n1zNgS1RLircA8VVrvLp1STrr0qpRTkOexkhH0IfunXmUuaGo%2BDKFuOhCkGglY%2BPIDRS69WKnqZFV9XOZmmxWGg3V1K0FOCklWFOJGbA7CKj7r7BUhtMHa0ViBWi1zwykByyrGlur7iT5%2BuZLwlWUsWRBM9QhbtUQaLIgjRuYkciWl%2B%2BSNV68pBR%2FCz9qX43DdlBPwsre0CKR2i2LSbQ88ads68Dd0ARoNudz3d5B8cWNsHVnWZ3ZEcKVb9YoCtOZjY02Ufrkf%2BJlqHm8xcZ3jZz1leNRQbZGxeRY6BZG%2BK2unxu1Dxl%2BQdK4PUrQEgriyyWSqJ0YbZaWD%2Bavyq7S%2Brp%2F%2BXw%2FRRWQ759nIqFTAvEkV%2FSE6Ditp69Ecg7E3dg3AVakw974DpoYV%2BIyMiVU0pI%2F4cM%2Bxynh8S4HGSql7123Y5%2FnUtFlMkkpbXEHF9IRrrQnLI%2Fws3hg4prEWy5DXLLuTLwFeXvYQYWfFNKmEfB5FTYExNmCZ%2B90RL%2FOVYLI%2BnxmfCRq4B%2FgyMZDdRxNxMIIP%2Buj8HgyLQ6fLVQGEZrbS9VzgrRPB3XEWJRHVrxNX9HSyZtPvLRvoMSOcPGnuISJm8x8g8sFx7oJIgodJJ3tIQqT4YMFL3ZS6GYpoBS4svaG1s6MKiPisQGOqUBdqOoT0fzzANtWk3uHBnW6qu8nAHT2e68oArAxWT1%2FU0mg95oObjhWv2TpaUWyKb6wG%2FnD7nkqBD6TDAFU25fb25tOYM8xAHqq5CUnfoIIjIX%2BDUJQg8%2BrT95nudTw4%2Bl3l4gC4xEPZrOO0xaBchv0YyQ57qaejpoO2LcklhOQZhOKyr9KFEv2I6CfD1J4Y9R9ChrXw0QGS%2Fosz79lZPRMdd8h7k7&X-Amz-Signature=6be1b61985459a4f6208c631b036d7d1bf189b6c4e978153b7db33d5dbff549b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUHMK5P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD6wtsmx6GoP5FwlP4lOBd8%2BzNaOAewp9R94m%2FiObq4tQIgGYLrhqO0mJT6jw94hCVHeTUyugHKyHClyq2rjsTurXsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIO8MSq7n1zNgS1RLircA8VVrvLp1STrr0qpRTkOexkhH0IfunXmUuaGo%2BDKFuOhCkGglY%2BPIDRS69WKnqZFV9XOZmmxWGg3V1K0FOCklWFOJGbA7CKj7r7BUhtMHa0ViBWi1zwykByyrGlur7iT5%2BuZLwlWUsWRBM9QhbtUQaLIgjRuYkciWl%2B%2BSNV68pBR%2FCz9qX43DdlBPwsre0CKR2i2LSbQ88ads68Dd0ARoNudz3d5B8cWNsHVnWZ3ZEcKVb9YoCtOZjY02Ufrkf%2BJlqHm8xcZ3jZz1leNRQbZGxeRY6BZG%2BK2unxu1Dxl%2BQdK4PUrQEgriyyWSqJ0YbZaWD%2Bavyq7S%2Brp%2F%2BXw%2FRRWQ759nIqFTAvEkV%2FSE6Ditp69Ecg7E3dg3AVakw974DpoYV%2BIyMiVU0pI%2F4cM%2Bxynh8S4HGSql7123Y5%2FnUtFlMkkpbXEHF9IRrrQnLI%2Fws3hg4prEWy5DXLLuTLwFeXvYQYWfFNKmEfB5FTYExNmCZ%2B90RL%2FOVYLI%2BnxmfCRq4B%2FgyMZDdRxNxMIIP%2Buj8HgyLQ6fLVQGEZrbS9VzgrRPB3XEWJRHVrxNX9HSyZtPvLRvoMSOcPGnuISJm8x8g8sFx7oJIgodJJ3tIQqT4YMFL3ZS6GYpoBS4svaG1s6MKiPisQGOqUBdqOoT0fzzANtWk3uHBnW6qu8nAHT2e68oArAxWT1%2FU0mg95oObjhWv2TpaUWyKb6wG%2FnD7nkqBD6TDAFU25fb25tOYM8xAHqq5CUnfoIIjIX%2BDUJQg8%2BrT95nudTw4%2Bl3l4gC4xEPZrOO0xaBchv0YyQ57qaejpoO2LcklhOQZhOKyr9KFEv2I6CfD1J4Y9R9ChrXw0QGS%2Fosz79lZPRMdd8h7k7&X-Amz-Signature=601de6e121bcf3f201e103ea49f6537a9b7b5a9b1340689f6a5adb7e46878a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUHMK5P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD6wtsmx6GoP5FwlP4lOBd8%2BzNaOAewp9R94m%2FiObq4tQIgGYLrhqO0mJT6jw94hCVHeTUyugHKyHClyq2rjsTurXsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIO8MSq7n1zNgS1RLircA8VVrvLp1STrr0qpRTkOexkhH0IfunXmUuaGo%2BDKFuOhCkGglY%2BPIDRS69WKnqZFV9XOZmmxWGg3V1K0FOCklWFOJGbA7CKj7r7BUhtMHa0ViBWi1zwykByyrGlur7iT5%2BuZLwlWUsWRBM9QhbtUQaLIgjRuYkciWl%2B%2BSNV68pBR%2FCz9qX43DdlBPwsre0CKR2i2LSbQ88ads68Dd0ARoNudz3d5B8cWNsHVnWZ3ZEcKVb9YoCtOZjY02Ufrkf%2BJlqHm8xcZ3jZz1leNRQbZGxeRY6BZG%2BK2unxu1Dxl%2BQdK4PUrQEgriyyWSqJ0YbZaWD%2Bavyq7S%2Brp%2F%2BXw%2FRRWQ759nIqFTAvEkV%2FSE6Ditp69Ecg7E3dg3AVakw974DpoYV%2BIyMiVU0pI%2F4cM%2Bxynh8S4HGSql7123Y5%2FnUtFlMkkpbXEHF9IRrrQnLI%2Fws3hg4prEWy5DXLLuTLwFeXvYQYWfFNKmEfB5FTYExNmCZ%2B90RL%2FOVYLI%2BnxmfCRq4B%2FgyMZDdRxNxMIIP%2Buj8HgyLQ6fLVQGEZrbS9VzgrRPB3XEWJRHVrxNX9HSyZtPvLRvoMSOcPGnuISJm8x8g8sFx7oJIgodJJ3tIQqT4YMFL3ZS6GYpoBS4svaG1s6MKiPisQGOqUBdqOoT0fzzANtWk3uHBnW6qu8nAHT2e68oArAxWT1%2FU0mg95oObjhWv2TpaUWyKb6wG%2FnD7nkqBD6TDAFU25fb25tOYM8xAHqq5CUnfoIIjIX%2BDUJQg8%2BrT95nudTw4%2Bl3l4gC4xEPZrOO0xaBchv0YyQ57qaejpoO2LcklhOQZhOKyr9KFEv2I6CfD1J4Y9R9ChrXw0QGS%2Fosz79lZPRMdd8h7k7&X-Amz-Signature=0d6780918af3009a1f7c66f01ca6a8ceec42b522ceaac206c94c837cebacb556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
