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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657URDQEC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC6MjQeSkmzZYBkKxNjKVqVHIHIEGYpl%2BC8DsCl6DpKZwIhAM5N4jwuvhKdkmHliMKHRv5WNRT8HtYoYW5ZXcwSbEVoKv8DCHwQABoMNjM3NDIzMTgzODA1Igxflz9o%2B%2FSO5SO4S10q3AOQxvQJyyN2GUvOORoKXpQJ3JMaElv8ynV7QM4KyymRwvv00klmYmZLvAnuq%2FwIRa8jMUZs38716O4%2FetLf04%2FYBRg6JghuUmKUWY8145FxucEziYPuP%2FgsfW7PMMWv7MzzSo2h0nrCO6UcSN%2FxQye2Ek%2FgB4hYdvhlNdv3sGcZPob8qhmKWVJlBQb16eFRgAan4TBHoAuhGfCuMs9HEbsCj0lP0gY4CnqyCXOKiTtKR2GjE6Dpj6obKGDYF8qU%2BbVVq%2FP%2BlC0YIALDsJKHPEGnddVAMAlr6aWIWKhcKu3tbt%2B4iH5dChwYLzguPeZZE2S%2FLS9dUGZsdJAS5A9ipgjJgNoD7%2BqdVnkOqmS7bVhgyXCicmXpVBEufzXMGajhHhQpXiAf8PvkDqt6wooRDd9m6xTCe8MV%2FUS1R42mSyY5zM1%2Fneh2V1I046LVAOgL7cq8ieFHUQfPQxLyhk9o7Nr9hmH7R8v7%2BKy%2BU0U7oZQ9QybUQeWZ7bof7gsV2LGItxmGgT%2B%2Bdl5ewl7XToN7mBh1oQ2mYUVzNyBIXiIvV45BMQZbvi0OV6xb08QKE56k6NUyHSyNNZHKIgxOXcr2PUgZ8QwBssgPJ2%2BzrTjtVA2ZSvaonqJPl7xevW%2BJoTDCxc7EBjqkAUYjHw9ZPeZWgkYzpvO9%2F5MvxbJdVemPohzys6qubrJHOC9YfSnlcNsutY4h6ii%2F7uKz7Us6dub1kpL51sl9OMPLIdC11ffvO1PYzEhQpdkUJ9p0X62LMtwRfjK7lCTm2EdW3ztXqMljLAWvpNio1ioJz2Yref2z4lpEtqjaYfh7ra%2Bv%2BibB2JgDseYENRStXZCjCS%2BLhZPKz30DcdG%2Bvdj7tFBX&X-Amz-Signature=d854b7fac9ca6547b0fd43d17cf8d4c6a7f0d78c4346a31e540ded5db79df3b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657URDQEC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC6MjQeSkmzZYBkKxNjKVqVHIHIEGYpl%2BC8DsCl6DpKZwIhAM5N4jwuvhKdkmHliMKHRv5WNRT8HtYoYW5ZXcwSbEVoKv8DCHwQABoMNjM3NDIzMTgzODA1Igxflz9o%2B%2FSO5SO4S10q3AOQxvQJyyN2GUvOORoKXpQJ3JMaElv8ynV7QM4KyymRwvv00klmYmZLvAnuq%2FwIRa8jMUZs38716O4%2FetLf04%2FYBRg6JghuUmKUWY8145FxucEziYPuP%2FgsfW7PMMWv7MzzSo2h0nrCO6UcSN%2FxQye2Ek%2FgB4hYdvhlNdv3sGcZPob8qhmKWVJlBQb16eFRgAan4TBHoAuhGfCuMs9HEbsCj0lP0gY4CnqyCXOKiTtKR2GjE6Dpj6obKGDYF8qU%2BbVVq%2FP%2BlC0YIALDsJKHPEGnddVAMAlr6aWIWKhcKu3tbt%2B4iH5dChwYLzguPeZZE2S%2FLS9dUGZsdJAS5A9ipgjJgNoD7%2BqdVnkOqmS7bVhgyXCicmXpVBEufzXMGajhHhQpXiAf8PvkDqt6wooRDd9m6xTCe8MV%2FUS1R42mSyY5zM1%2Fneh2V1I046LVAOgL7cq8ieFHUQfPQxLyhk9o7Nr9hmH7R8v7%2BKy%2BU0U7oZQ9QybUQeWZ7bof7gsV2LGItxmGgT%2B%2Bdl5ewl7XToN7mBh1oQ2mYUVzNyBIXiIvV45BMQZbvi0OV6xb08QKE56k6NUyHSyNNZHKIgxOXcr2PUgZ8QwBssgPJ2%2BzrTjtVA2ZSvaonqJPl7xevW%2BJoTDCxc7EBjqkAUYjHw9ZPeZWgkYzpvO9%2F5MvxbJdVemPohzys6qubrJHOC9YfSnlcNsutY4h6ii%2F7uKz7Us6dub1kpL51sl9OMPLIdC11ffvO1PYzEhQpdkUJ9p0X62LMtwRfjK7lCTm2EdW3ztXqMljLAWvpNio1ioJz2Yref2z4lpEtqjaYfh7ra%2Bv%2BibB2JgDseYENRStXZCjCS%2BLhZPKz30DcdG%2Bvdj7tFBX&X-Amz-Signature=be9ebeaf592dee5f2d2ef5d5c1e8d18370ec70aec69494e35a1dedd182880954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657URDQEC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC6MjQeSkmzZYBkKxNjKVqVHIHIEGYpl%2BC8DsCl6DpKZwIhAM5N4jwuvhKdkmHliMKHRv5WNRT8HtYoYW5ZXcwSbEVoKv8DCHwQABoMNjM3NDIzMTgzODA1Igxflz9o%2B%2FSO5SO4S10q3AOQxvQJyyN2GUvOORoKXpQJ3JMaElv8ynV7QM4KyymRwvv00klmYmZLvAnuq%2FwIRa8jMUZs38716O4%2FetLf04%2FYBRg6JghuUmKUWY8145FxucEziYPuP%2FgsfW7PMMWv7MzzSo2h0nrCO6UcSN%2FxQye2Ek%2FgB4hYdvhlNdv3sGcZPob8qhmKWVJlBQb16eFRgAan4TBHoAuhGfCuMs9HEbsCj0lP0gY4CnqyCXOKiTtKR2GjE6Dpj6obKGDYF8qU%2BbVVq%2FP%2BlC0YIALDsJKHPEGnddVAMAlr6aWIWKhcKu3tbt%2B4iH5dChwYLzguPeZZE2S%2FLS9dUGZsdJAS5A9ipgjJgNoD7%2BqdVnkOqmS7bVhgyXCicmXpVBEufzXMGajhHhQpXiAf8PvkDqt6wooRDd9m6xTCe8MV%2FUS1R42mSyY5zM1%2Fneh2V1I046LVAOgL7cq8ieFHUQfPQxLyhk9o7Nr9hmH7R8v7%2BKy%2BU0U7oZQ9QybUQeWZ7bof7gsV2LGItxmGgT%2B%2Bdl5ewl7XToN7mBh1oQ2mYUVzNyBIXiIvV45BMQZbvi0OV6xb08QKE56k6NUyHSyNNZHKIgxOXcr2PUgZ8QwBssgPJ2%2BzrTjtVA2ZSvaonqJPl7xevW%2BJoTDCxc7EBjqkAUYjHw9ZPeZWgkYzpvO9%2F5MvxbJdVemPohzys6qubrJHOC9YfSnlcNsutY4h6ii%2F7uKz7Us6dub1kpL51sl9OMPLIdC11ffvO1PYzEhQpdkUJ9p0X62LMtwRfjK7lCTm2EdW3ztXqMljLAWvpNio1ioJz2Yref2z4lpEtqjaYfh7ra%2Bv%2BibB2JgDseYENRStXZCjCS%2BLhZPKz30DcdG%2Bvdj7tFBX&X-Amz-Signature=ff659121bc4a2efc873f323572348a54e70534bd69451e8433e2d6e2eb9d84c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657URDQEC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC6MjQeSkmzZYBkKxNjKVqVHIHIEGYpl%2BC8DsCl6DpKZwIhAM5N4jwuvhKdkmHliMKHRv5WNRT8HtYoYW5ZXcwSbEVoKv8DCHwQABoMNjM3NDIzMTgzODA1Igxflz9o%2B%2FSO5SO4S10q3AOQxvQJyyN2GUvOORoKXpQJ3JMaElv8ynV7QM4KyymRwvv00klmYmZLvAnuq%2FwIRa8jMUZs38716O4%2FetLf04%2FYBRg6JghuUmKUWY8145FxucEziYPuP%2FgsfW7PMMWv7MzzSo2h0nrCO6UcSN%2FxQye2Ek%2FgB4hYdvhlNdv3sGcZPob8qhmKWVJlBQb16eFRgAan4TBHoAuhGfCuMs9HEbsCj0lP0gY4CnqyCXOKiTtKR2GjE6Dpj6obKGDYF8qU%2BbVVq%2FP%2BlC0YIALDsJKHPEGnddVAMAlr6aWIWKhcKu3tbt%2B4iH5dChwYLzguPeZZE2S%2FLS9dUGZsdJAS5A9ipgjJgNoD7%2BqdVnkOqmS7bVhgyXCicmXpVBEufzXMGajhHhQpXiAf8PvkDqt6wooRDd9m6xTCe8MV%2FUS1R42mSyY5zM1%2Fneh2V1I046LVAOgL7cq8ieFHUQfPQxLyhk9o7Nr9hmH7R8v7%2BKy%2BU0U7oZQ9QybUQeWZ7bof7gsV2LGItxmGgT%2B%2Bdl5ewl7XToN7mBh1oQ2mYUVzNyBIXiIvV45BMQZbvi0OV6xb08QKE56k6NUyHSyNNZHKIgxOXcr2PUgZ8QwBssgPJ2%2BzrTjtVA2ZSvaonqJPl7xevW%2BJoTDCxc7EBjqkAUYjHw9ZPeZWgkYzpvO9%2F5MvxbJdVemPohzys6qubrJHOC9YfSnlcNsutY4h6ii%2F7uKz7Us6dub1kpL51sl9OMPLIdC11ffvO1PYzEhQpdkUJ9p0X62LMtwRfjK7lCTm2EdW3ztXqMljLAWvpNio1ioJz2Yref2z4lpEtqjaYfh7ra%2Bv%2BibB2JgDseYENRStXZCjCS%2BLhZPKz30DcdG%2Bvdj7tFBX&X-Amz-Signature=9da843c1ba0f07531a3788b2a2b6453b64398726f7cc9f50b9d15edf2c7556fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657URDQEC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC6MjQeSkmzZYBkKxNjKVqVHIHIEGYpl%2BC8DsCl6DpKZwIhAM5N4jwuvhKdkmHliMKHRv5WNRT8HtYoYW5ZXcwSbEVoKv8DCHwQABoMNjM3NDIzMTgzODA1Igxflz9o%2B%2FSO5SO4S10q3AOQxvQJyyN2GUvOORoKXpQJ3JMaElv8ynV7QM4KyymRwvv00klmYmZLvAnuq%2FwIRa8jMUZs38716O4%2FetLf04%2FYBRg6JghuUmKUWY8145FxucEziYPuP%2FgsfW7PMMWv7MzzSo2h0nrCO6UcSN%2FxQye2Ek%2FgB4hYdvhlNdv3sGcZPob8qhmKWVJlBQb16eFRgAan4TBHoAuhGfCuMs9HEbsCj0lP0gY4CnqyCXOKiTtKR2GjE6Dpj6obKGDYF8qU%2BbVVq%2FP%2BlC0YIALDsJKHPEGnddVAMAlr6aWIWKhcKu3tbt%2B4iH5dChwYLzguPeZZE2S%2FLS9dUGZsdJAS5A9ipgjJgNoD7%2BqdVnkOqmS7bVhgyXCicmXpVBEufzXMGajhHhQpXiAf8PvkDqt6wooRDd9m6xTCe8MV%2FUS1R42mSyY5zM1%2Fneh2V1I046LVAOgL7cq8ieFHUQfPQxLyhk9o7Nr9hmH7R8v7%2BKy%2BU0U7oZQ9QybUQeWZ7bof7gsV2LGItxmGgT%2B%2Bdl5ewl7XToN7mBh1oQ2mYUVzNyBIXiIvV45BMQZbvi0OV6xb08QKE56k6NUyHSyNNZHKIgxOXcr2PUgZ8QwBssgPJ2%2BzrTjtVA2ZSvaonqJPl7xevW%2BJoTDCxc7EBjqkAUYjHw9ZPeZWgkYzpvO9%2F5MvxbJdVemPohzys6qubrJHOC9YfSnlcNsutY4h6ii%2F7uKz7Us6dub1kpL51sl9OMPLIdC11ffvO1PYzEhQpdkUJ9p0X62LMtwRfjK7lCTm2EdW3ztXqMljLAWvpNio1ioJz2Yref2z4lpEtqjaYfh7ra%2Bv%2BibB2JgDseYENRStXZCjCS%2BLhZPKz30DcdG%2Bvdj7tFBX&X-Amz-Signature=31f400c374424580a1ecaa52d125cca74bce9c8da5580a755c7c8726a2d59d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657URDQEC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC6MjQeSkmzZYBkKxNjKVqVHIHIEGYpl%2BC8DsCl6DpKZwIhAM5N4jwuvhKdkmHliMKHRv5WNRT8HtYoYW5ZXcwSbEVoKv8DCHwQABoMNjM3NDIzMTgzODA1Igxflz9o%2B%2FSO5SO4S10q3AOQxvQJyyN2GUvOORoKXpQJ3JMaElv8ynV7QM4KyymRwvv00klmYmZLvAnuq%2FwIRa8jMUZs38716O4%2FetLf04%2FYBRg6JghuUmKUWY8145FxucEziYPuP%2FgsfW7PMMWv7MzzSo2h0nrCO6UcSN%2FxQye2Ek%2FgB4hYdvhlNdv3sGcZPob8qhmKWVJlBQb16eFRgAan4TBHoAuhGfCuMs9HEbsCj0lP0gY4CnqyCXOKiTtKR2GjE6Dpj6obKGDYF8qU%2BbVVq%2FP%2BlC0YIALDsJKHPEGnddVAMAlr6aWIWKhcKu3tbt%2B4iH5dChwYLzguPeZZE2S%2FLS9dUGZsdJAS5A9ipgjJgNoD7%2BqdVnkOqmS7bVhgyXCicmXpVBEufzXMGajhHhQpXiAf8PvkDqt6wooRDd9m6xTCe8MV%2FUS1R42mSyY5zM1%2Fneh2V1I046LVAOgL7cq8ieFHUQfPQxLyhk9o7Nr9hmH7R8v7%2BKy%2BU0U7oZQ9QybUQeWZ7bof7gsV2LGItxmGgT%2B%2Bdl5ewl7XToN7mBh1oQ2mYUVzNyBIXiIvV45BMQZbvi0OV6xb08QKE56k6NUyHSyNNZHKIgxOXcr2PUgZ8QwBssgPJ2%2BzrTjtVA2ZSvaonqJPl7xevW%2BJoTDCxc7EBjqkAUYjHw9ZPeZWgkYzpvO9%2F5MvxbJdVemPohzys6qubrJHOC9YfSnlcNsutY4h6ii%2F7uKz7Us6dub1kpL51sl9OMPLIdC11ffvO1PYzEhQpdkUJ9p0X62LMtwRfjK7lCTm2EdW3ztXqMljLAWvpNio1ioJz2Yref2z4lpEtqjaYfh7ra%2Bv%2BibB2JgDseYENRStXZCjCS%2BLhZPKz30DcdG%2Bvdj7tFBX&X-Amz-Signature=24a7b7016c802ffdc706e46041cd7a320f42a65e4042c084e46a4f059a0a03b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657URDQEC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC6MjQeSkmzZYBkKxNjKVqVHIHIEGYpl%2BC8DsCl6DpKZwIhAM5N4jwuvhKdkmHliMKHRv5WNRT8HtYoYW5ZXcwSbEVoKv8DCHwQABoMNjM3NDIzMTgzODA1Igxflz9o%2B%2FSO5SO4S10q3AOQxvQJyyN2GUvOORoKXpQJ3JMaElv8ynV7QM4KyymRwvv00klmYmZLvAnuq%2FwIRa8jMUZs38716O4%2FetLf04%2FYBRg6JghuUmKUWY8145FxucEziYPuP%2FgsfW7PMMWv7MzzSo2h0nrCO6UcSN%2FxQye2Ek%2FgB4hYdvhlNdv3sGcZPob8qhmKWVJlBQb16eFRgAan4TBHoAuhGfCuMs9HEbsCj0lP0gY4CnqyCXOKiTtKR2GjE6Dpj6obKGDYF8qU%2BbVVq%2FP%2BlC0YIALDsJKHPEGnddVAMAlr6aWIWKhcKu3tbt%2B4iH5dChwYLzguPeZZE2S%2FLS9dUGZsdJAS5A9ipgjJgNoD7%2BqdVnkOqmS7bVhgyXCicmXpVBEufzXMGajhHhQpXiAf8PvkDqt6wooRDd9m6xTCe8MV%2FUS1R42mSyY5zM1%2Fneh2V1I046LVAOgL7cq8ieFHUQfPQxLyhk9o7Nr9hmH7R8v7%2BKy%2BU0U7oZQ9QybUQeWZ7bof7gsV2LGItxmGgT%2B%2Bdl5ewl7XToN7mBh1oQ2mYUVzNyBIXiIvV45BMQZbvi0OV6xb08QKE56k6NUyHSyNNZHKIgxOXcr2PUgZ8QwBssgPJ2%2BzrTjtVA2ZSvaonqJPl7xevW%2BJoTDCxc7EBjqkAUYjHw9ZPeZWgkYzpvO9%2F5MvxbJdVemPohzys6qubrJHOC9YfSnlcNsutY4h6ii%2F7uKz7Us6dub1kpL51sl9OMPLIdC11ffvO1PYzEhQpdkUJ9p0X62LMtwRfjK7lCTm2EdW3ztXqMljLAWvpNio1ioJz2Yref2z4lpEtqjaYfh7ra%2Bv%2BibB2JgDseYENRStXZCjCS%2BLhZPKz30DcdG%2Bvdj7tFBX&X-Amz-Signature=029b9c856d968b69daf4f49b33091f27dbf04a0c992fdf54ba97651ecd923467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657URDQEC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC6MjQeSkmzZYBkKxNjKVqVHIHIEGYpl%2BC8DsCl6DpKZwIhAM5N4jwuvhKdkmHliMKHRv5WNRT8HtYoYW5ZXcwSbEVoKv8DCHwQABoMNjM3NDIzMTgzODA1Igxflz9o%2B%2FSO5SO4S10q3AOQxvQJyyN2GUvOORoKXpQJ3JMaElv8ynV7QM4KyymRwvv00klmYmZLvAnuq%2FwIRa8jMUZs38716O4%2FetLf04%2FYBRg6JghuUmKUWY8145FxucEziYPuP%2FgsfW7PMMWv7MzzSo2h0nrCO6UcSN%2FxQye2Ek%2FgB4hYdvhlNdv3sGcZPob8qhmKWVJlBQb16eFRgAan4TBHoAuhGfCuMs9HEbsCj0lP0gY4CnqyCXOKiTtKR2GjE6Dpj6obKGDYF8qU%2BbVVq%2FP%2BlC0YIALDsJKHPEGnddVAMAlr6aWIWKhcKu3tbt%2B4iH5dChwYLzguPeZZE2S%2FLS9dUGZsdJAS5A9ipgjJgNoD7%2BqdVnkOqmS7bVhgyXCicmXpVBEufzXMGajhHhQpXiAf8PvkDqt6wooRDd9m6xTCe8MV%2FUS1R42mSyY5zM1%2Fneh2V1I046LVAOgL7cq8ieFHUQfPQxLyhk9o7Nr9hmH7R8v7%2BKy%2BU0U7oZQ9QybUQeWZ7bof7gsV2LGItxmGgT%2B%2Bdl5ewl7XToN7mBh1oQ2mYUVzNyBIXiIvV45BMQZbvi0OV6xb08QKE56k6NUyHSyNNZHKIgxOXcr2PUgZ8QwBssgPJ2%2BzrTjtVA2ZSvaonqJPl7xevW%2BJoTDCxc7EBjqkAUYjHw9ZPeZWgkYzpvO9%2F5MvxbJdVemPohzys6qubrJHOC9YfSnlcNsutY4h6ii%2F7uKz7Us6dub1kpL51sl9OMPLIdC11ffvO1PYzEhQpdkUJ9p0X62LMtwRfjK7lCTm2EdW3ztXqMljLAWvpNio1ioJz2Yref2z4lpEtqjaYfh7ra%2Bv%2BibB2JgDseYENRStXZCjCS%2BLhZPKz30DcdG%2Bvdj7tFBX&X-Amz-Signature=47a0fc34d37f9206fed44164f847513ef2f451d8d225fe49bdffb37c7473e6b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657URDQEC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC6MjQeSkmzZYBkKxNjKVqVHIHIEGYpl%2BC8DsCl6DpKZwIhAM5N4jwuvhKdkmHliMKHRv5WNRT8HtYoYW5ZXcwSbEVoKv8DCHwQABoMNjM3NDIzMTgzODA1Igxflz9o%2B%2FSO5SO4S10q3AOQxvQJyyN2GUvOORoKXpQJ3JMaElv8ynV7QM4KyymRwvv00klmYmZLvAnuq%2FwIRa8jMUZs38716O4%2FetLf04%2FYBRg6JghuUmKUWY8145FxucEziYPuP%2FgsfW7PMMWv7MzzSo2h0nrCO6UcSN%2FxQye2Ek%2FgB4hYdvhlNdv3sGcZPob8qhmKWVJlBQb16eFRgAan4TBHoAuhGfCuMs9HEbsCj0lP0gY4CnqyCXOKiTtKR2GjE6Dpj6obKGDYF8qU%2BbVVq%2FP%2BlC0YIALDsJKHPEGnddVAMAlr6aWIWKhcKu3tbt%2B4iH5dChwYLzguPeZZE2S%2FLS9dUGZsdJAS5A9ipgjJgNoD7%2BqdVnkOqmS7bVhgyXCicmXpVBEufzXMGajhHhQpXiAf8PvkDqt6wooRDd9m6xTCe8MV%2FUS1R42mSyY5zM1%2Fneh2V1I046LVAOgL7cq8ieFHUQfPQxLyhk9o7Nr9hmH7R8v7%2BKy%2BU0U7oZQ9QybUQeWZ7bof7gsV2LGItxmGgT%2B%2Bdl5ewl7XToN7mBh1oQ2mYUVzNyBIXiIvV45BMQZbvi0OV6xb08QKE56k6NUyHSyNNZHKIgxOXcr2PUgZ8QwBssgPJ2%2BzrTjtVA2ZSvaonqJPl7xevW%2BJoTDCxc7EBjqkAUYjHw9ZPeZWgkYzpvO9%2F5MvxbJdVemPohzys6qubrJHOC9YfSnlcNsutY4h6ii%2F7uKz7Us6dub1kpL51sl9OMPLIdC11ffvO1PYzEhQpdkUJ9p0X62LMtwRfjK7lCTm2EdW3ztXqMljLAWvpNio1ioJz2Yref2z4lpEtqjaYfh7ra%2Bv%2BibB2JgDseYENRStXZCjCS%2BLhZPKz30DcdG%2Bvdj7tFBX&X-Amz-Signature=5828119cf9a88d21e382baf40c921364b5a991d5f741783eeed3b2a6372e80fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657URDQEC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC6MjQeSkmzZYBkKxNjKVqVHIHIEGYpl%2BC8DsCl6DpKZwIhAM5N4jwuvhKdkmHliMKHRv5WNRT8HtYoYW5ZXcwSbEVoKv8DCHwQABoMNjM3NDIzMTgzODA1Igxflz9o%2B%2FSO5SO4S10q3AOQxvQJyyN2GUvOORoKXpQJ3JMaElv8ynV7QM4KyymRwvv00klmYmZLvAnuq%2FwIRa8jMUZs38716O4%2FetLf04%2FYBRg6JghuUmKUWY8145FxucEziYPuP%2FgsfW7PMMWv7MzzSo2h0nrCO6UcSN%2FxQye2Ek%2FgB4hYdvhlNdv3sGcZPob8qhmKWVJlBQb16eFRgAan4TBHoAuhGfCuMs9HEbsCj0lP0gY4CnqyCXOKiTtKR2GjE6Dpj6obKGDYF8qU%2BbVVq%2FP%2BlC0YIALDsJKHPEGnddVAMAlr6aWIWKhcKu3tbt%2B4iH5dChwYLzguPeZZE2S%2FLS9dUGZsdJAS5A9ipgjJgNoD7%2BqdVnkOqmS7bVhgyXCicmXpVBEufzXMGajhHhQpXiAf8PvkDqt6wooRDd9m6xTCe8MV%2FUS1R42mSyY5zM1%2Fneh2V1I046LVAOgL7cq8ieFHUQfPQxLyhk9o7Nr9hmH7R8v7%2BKy%2BU0U7oZQ9QybUQeWZ7bof7gsV2LGItxmGgT%2B%2Bdl5ewl7XToN7mBh1oQ2mYUVzNyBIXiIvV45BMQZbvi0OV6xb08QKE56k6NUyHSyNNZHKIgxOXcr2PUgZ8QwBssgPJ2%2BzrTjtVA2ZSvaonqJPl7xevW%2BJoTDCxc7EBjqkAUYjHw9ZPeZWgkYzpvO9%2F5MvxbJdVemPohzys6qubrJHOC9YfSnlcNsutY4h6ii%2F7uKz7Us6dub1kpL51sl9OMPLIdC11ffvO1PYzEhQpdkUJ9p0X62LMtwRfjK7lCTm2EdW3ztXqMljLAWvpNio1ioJz2Yref2z4lpEtqjaYfh7ra%2Bv%2BibB2JgDseYENRStXZCjCS%2BLhZPKz30DcdG%2Bvdj7tFBX&X-Amz-Signature=6bd9ae3aaab396459ae2f339c2b6eb9856eb2904cb170257421f187868445a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q36HH5HA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDKixfmt8qGYntnihkoXZdrb2SeMKfihtG9UdurwyNW%2FQIhAOuOSzj8BXhSXqwU80i0X7mRfeJXN044IN6rD9RPtsSkKv8DCHwQABoMNjM3NDIzMTgzODA1IgzbaJE0yKZW2VBWdJcq3AP%2FZ1r8Z3EfK%2F1sLaY6dzozvsVor%2Bc1c5GmK8RzVZqINCOTKobPxdnikNUSXAo1SBf0FTmoUw2XaiRcCOH1k6Lot%2FbVnzXmYLAjCxIR3M1eANCBfqrG0N4TbX658Xjq%2BJvyzNwGeTw0iuQadiMM6RYSXmNIuY8FwwahEnVOK0lf8VceXMeNINSzBkDA%2BiXdneZTRMxYjPCEl%2Bwm0fcFE8rO%2B%2FFJpiQd9%2Bj9Gv3deQyViF8QwSL62n4wSME4gCoWh3vG8EXr1whz7hKpItK9BbAdOg%2FVGJuqRAuGMHiaAjP5vK9R2fiuYnDWGIvZWoCOn5sq8XICGRSjl9D414tjPt28kYFe24hIQ3Og%2F1qeDqQ4HqjKYVcn0%2FpTnAJm%2BlxbFf0zggnm6lPXrdvK3NITUrvHxlUYpUv0%2Bfl1KaJWmma0CvMUPbRPgkwM00vx3uEjI0%2FoL2KOxY2DrcrT%2BQt2nX9ICCCgK2hCwtU0MOmJMu3KEzHGhr5Akk8TNV7LZmnaiJVD9fL0dTrdszTuWPXq%2BKfe5MuHC7IZ%2FGqJ20Me1QdCq7czrQZt9KMBn00eNdnOYDJ7TGuKfRL4uBF7aKsQrln583otxuVjMpGJni%2BdyHBkaq7nr1UmsA5LhEDhejCNxs7EBjqkAX15RoME%2B2pkgV04bLmpVLpAGcJ6LYVhAvyx7iL0jP%2FyWTl7HiM52liLh2lsWdhH4qm8U7L6Fm%2F9Qco%2F51r9mRywiBfm28iPtYUmqiAls%2FVuasPsyRGbLjB4peLknvtl8mG66pZodGJzNkvEQV9HhQu48oWKYRaZfcXQdGn%2BrQQBQX%2FJSr2GaJVFWfnmkWf1AHaoAIbmECQyaHHI7og8QWXiV4zz&X-Amz-Signature=fab55f89cced91cd2c9916ad49e93ab09bf6d347eb105091d9d8197ca9276fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMXOCBP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICEdfNN%2BU3Lw3Mdbt4kRRcRjvtyhvNrbtHkmG%2BQK25A1AiEAh1yH5zO7IwbdPJXlW60ZkrACqvFGiXZbRC5uX5Byl8Qq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB%2Bb%2BgDQUDkJ1hkeuCrcA1zSheoG7OZ4VNadV3V4NV5pflE9gLf1cLfLzDdcwnLqoJx72RZZ3lAakBZFVv5uCRpiKjdWgpyAhoinJPqY9t%2FCA2VDXfigshNpUSonSEV%2BP1LN45eQc8H%2BG%2FLtiyU%2BM9ffKw6Wg%2BDO5mXiqMydTN7uynPTV5x8A9m74oUf6XiJjF1EjHnuvyyLDuSIXYAHY26zMl%2ByyzcbPHggJqL3qZS3cqLhhRIJFiop3x4poMr4mh2NsJUthgFqShN6OeUTziDuT58a2YgvyXhvJ2SWumgpWRd5U8KjnyKX%2BHpDNnwKBUTRfWkTaXl4RMLOQLSqtj%2FXeep%2Bt%2B46hRW2nyh0aI%2FcM2UFmAjfxWHWL7pvUga0NY0ahAaIv%2FrjRmaa%2FfN3E3z0i2qHaGb7NxG5Oo5gpMOJpMChetOzySWUJxC9oh%2Fhoj2xY8Gl7X54GShteCgqMyXTg79hdcIAd%2BS3z6TR2T5rAIrqNUwRlAh6ziU3nm5NcQxYc%2FP7wMwpmKNRcMKEgwjxdrj2qSaW%2FesgERsnjb4xX1kzY2pVAdCmqR4eYZSjhvkwkKFuddqIrEHQYb1JxjlBkpshtqwdJrV5utwcDXUdhbz%2FUwEp7ZPcu9cXI0Y9JYPRhoPDj5BaDP2MMKHFzsQGOqUB2TVtDI1GNEfQ4g5nzYLvtNEHFeYyc%2F%2FYHB88S92NhK6GZ3%2BAU4K1goMHkYhm5JKymCx2YBkg3kyGsvsEJWsmVxdjQWQyXWr0hFYUsnht%2Bz9Mt7Yb2OwdDkcZyNYJB7Pstlq0ZJiD6pACtcmj1G5SlS8%2F2mvyz5xv3gy7OiYTlRhsH6bWkDQRQWUgJCpPv32amtk0zGFZhpENrDxSz6SvAhXzw8Wv&X-Amz-Signature=1d1bf55414df7178d219792b841634d4753211bd4aee3d6b300f8d8a115187ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMXOCBP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICEdfNN%2BU3Lw3Mdbt4kRRcRjvtyhvNrbtHkmG%2BQK25A1AiEAh1yH5zO7IwbdPJXlW60ZkrACqvFGiXZbRC5uX5Byl8Qq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB%2Bb%2BgDQUDkJ1hkeuCrcA1zSheoG7OZ4VNadV3V4NV5pflE9gLf1cLfLzDdcwnLqoJx72RZZ3lAakBZFVv5uCRpiKjdWgpyAhoinJPqY9t%2FCA2VDXfigshNpUSonSEV%2BP1LN45eQc8H%2BG%2FLtiyU%2BM9ffKw6Wg%2BDO5mXiqMydTN7uynPTV5x8A9m74oUf6XiJjF1EjHnuvyyLDuSIXYAHY26zMl%2ByyzcbPHggJqL3qZS3cqLhhRIJFiop3x4poMr4mh2NsJUthgFqShN6OeUTziDuT58a2YgvyXhvJ2SWumgpWRd5U8KjnyKX%2BHpDNnwKBUTRfWkTaXl4RMLOQLSqtj%2FXeep%2Bt%2B46hRW2nyh0aI%2FcM2UFmAjfxWHWL7pvUga0NY0ahAaIv%2FrjRmaa%2FfN3E3z0i2qHaGb7NxG5Oo5gpMOJpMChetOzySWUJxC9oh%2Fhoj2xY8Gl7X54GShteCgqMyXTg79hdcIAd%2BS3z6TR2T5rAIrqNUwRlAh6ziU3nm5NcQxYc%2FP7wMwpmKNRcMKEgwjxdrj2qSaW%2FesgERsnjb4xX1kzY2pVAdCmqR4eYZSjhvkwkKFuddqIrEHQYb1JxjlBkpshtqwdJrV5utwcDXUdhbz%2FUwEp7ZPcu9cXI0Y9JYPRhoPDj5BaDP2MMKHFzsQGOqUB2TVtDI1GNEfQ4g5nzYLvtNEHFeYyc%2F%2FYHB88S92NhK6GZ3%2BAU4K1goMHkYhm5JKymCx2YBkg3kyGsvsEJWsmVxdjQWQyXWr0hFYUsnht%2Bz9Mt7Yb2OwdDkcZyNYJB7Pstlq0ZJiD6pACtcmj1G5SlS8%2F2mvyz5xv3gy7OiYTlRhsH6bWkDQRQWUgJCpPv32amtk0zGFZhpENrDxSz6SvAhXzw8Wv&X-Amz-Signature=401ec076a25affb8df86ad9d769121428f904972aec890ec1b2efe133c4e0e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMXOCBP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICEdfNN%2BU3Lw3Mdbt4kRRcRjvtyhvNrbtHkmG%2BQK25A1AiEAh1yH5zO7IwbdPJXlW60ZkrACqvFGiXZbRC5uX5Byl8Qq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB%2Bb%2BgDQUDkJ1hkeuCrcA1zSheoG7OZ4VNadV3V4NV5pflE9gLf1cLfLzDdcwnLqoJx72RZZ3lAakBZFVv5uCRpiKjdWgpyAhoinJPqY9t%2FCA2VDXfigshNpUSonSEV%2BP1LN45eQc8H%2BG%2FLtiyU%2BM9ffKw6Wg%2BDO5mXiqMydTN7uynPTV5x8A9m74oUf6XiJjF1EjHnuvyyLDuSIXYAHY26zMl%2ByyzcbPHggJqL3qZS3cqLhhRIJFiop3x4poMr4mh2NsJUthgFqShN6OeUTziDuT58a2YgvyXhvJ2SWumgpWRd5U8KjnyKX%2BHpDNnwKBUTRfWkTaXl4RMLOQLSqtj%2FXeep%2Bt%2B46hRW2nyh0aI%2FcM2UFmAjfxWHWL7pvUga0NY0ahAaIv%2FrjRmaa%2FfN3E3z0i2qHaGb7NxG5Oo5gpMOJpMChetOzySWUJxC9oh%2Fhoj2xY8Gl7X54GShteCgqMyXTg79hdcIAd%2BS3z6TR2T5rAIrqNUwRlAh6ziU3nm5NcQxYc%2FP7wMwpmKNRcMKEgwjxdrj2qSaW%2FesgERsnjb4xX1kzY2pVAdCmqR4eYZSjhvkwkKFuddqIrEHQYb1JxjlBkpshtqwdJrV5utwcDXUdhbz%2FUwEp7ZPcu9cXI0Y9JYPRhoPDj5BaDP2MMKHFzsQGOqUB2TVtDI1GNEfQ4g5nzYLvtNEHFeYyc%2F%2FYHB88S92NhK6GZ3%2BAU4K1goMHkYhm5JKymCx2YBkg3kyGsvsEJWsmVxdjQWQyXWr0hFYUsnht%2Bz9Mt7Yb2OwdDkcZyNYJB7Pstlq0ZJiD6pACtcmj1G5SlS8%2F2mvyz5xv3gy7OiYTlRhsH6bWkDQRQWUgJCpPv32amtk0zGFZhpENrDxSz6SvAhXzw8Wv&X-Amz-Signature=b1d04ed00b0cefb9cf42277890c13f4963f8d3c5acb3464dc98bdd580b2a4fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMXOCBP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICEdfNN%2BU3Lw3Mdbt4kRRcRjvtyhvNrbtHkmG%2BQK25A1AiEAh1yH5zO7IwbdPJXlW60ZkrACqvFGiXZbRC5uX5Byl8Qq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB%2Bb%2BgDQUDkJ1hkeuCrcA1zSheoG7OZ4VNadV3V4NV5pflE9gLf1cLfLzDdcwnLqoJx72RZZ3lAakBZFVv5uCRpiKjdWgpyAhoinJPqY9t%2FCA2VDXfigshNpUSonSEV%2BP1LN45eQc8H%2BG%2FLtiyU%2BM9ffKw6Wg%2BDO5mXiqMydTN7uynPTV5x8A9m74oUf6XiJjF1EjHnuvyyLDuSIXYAHY26zMl%2ByyzcbPHggJqL3qZS3cqLhhRIJFiop3x4poMr4mh2NsJUthgFqShN6OeUTziDuT58a2YgvyXhvJ2SWumgpWRd5U8KjnyKX%2BHpDNnwKBUTRfWkTaXl4RMLOQLSqtj%2FXeep%2Bt%2B46hRW2nyh0aI%2FcM2UFmAjfxWHWL7pvUga0NY0ahAaIv%2FrjRmaa%2FfN3E3z0i2qHaGb7NxG5Oo5gpMOJpMChetOzySWUJxC9oh%2Fhoj2xY8Gl7X54GShteCgqMyXTg79hdcIAd%2BS3z6TR2T5rAIrqNUwRlAh6ziU3nm5NcQxYc%2FP7wMwpmKNRcMKEgwjxdrj2qSaW%2FesgERsnjb4xX1kzY2pVAdCmqR4eYZSjhvkwkKFuddqIrEHQYb1JxjlBkpshtqwdJrV5utwcDXUdhbz%2FUwEp7ZPcu9cXI0Y9JYPRhoPDj5BaDP2MMKHFzsQGOqUB2TVtDI1GNEfQ4g5nzYLvtNEHFeYyc%2F%2FYHB88S92NhK6GZ3%2BAU4K1goMHkYhm5JKymCx2YBkg3kyGsvsEJWsmVxdjQWQyXWr0hFYUsnht%2Bz9Mt7Yb2OwdDkcZyNYJB7Pstlq0ZJiD6pACtcmj1G5SlS8%2F2mvyz5xv3gy7OiYTlRhsH6bWkDQRQWUgJCpPv32amtk0zGFZhpENrDxSz6SvAhXzw8Wv&X-Amz-Signature=e70132be904ea8c31fe17cb87a320a9251de1b8a23091b7922ece613c3045d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMXOCBP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICEdfNN%2BU3Lw3Mdbt4kRRcRjvtyhvNrbtHkmG%2BQK25A1AiEAh1yH5zO7IwbdPJXlW60ZkrACqvFGiXZbRC5uX5Byl8Qq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB%2Bb%2BgDQUDkJ1hkeuCrcA1zSheoG7OZ4VNadV3V4NV5pflE9gLf1cLfLzDdcwnLqoJx72RZZ3lAakBZFVv5uCRpiKjdWgpyAhoinJPqY9t%2FCA2VDXfigshNpUSonSEV%2BP1LN45eQc8H%2BG%2FLtiyU%2BM9ffKw6Wg%2BDO5mXiqMydTN7uynPTV5x8A9m74oUf6XiJjF1EjHnuvyyLDuSIXYAHY26zMl%2ByyzcbPHggJqL3qZS3cqLhhRIJFiop3x4poMr4mh2NsJUthgFqShN6OeUTziDuT58a2YgvyXhvJ2SWumgpWRd5U8KjnyKX%2BHpDNnwKBUTRfWkTaXl4RMLOQLSqtj%2FXeep%2Bt%2B46hRW2nyh0aI%2FcM2UFmAjfxWHWL7pvUga0NY0ahAaIv%2FrjRmaa%2FfN3E3z0i2qHaGb7NxG5Oo5gpMOJpMChetOzySWUJxC9oh%2Fhoj2xY8Gl7X54GShteCgqMyXTg79hdcIAd%2BS3z6TR2T5rAIrqNUwRlAh6ziU3nm5NcQxYc%2FP7wMwpmKNRcMKEgwjxdrj2qSaW%2FesgERsnjb4xX1kzY2pVAdCmqR4eYZSjhvkwkKFuddqIrEHQYb1JxjlBkpshtqwdJrV5utwcDXUdhbz%2FUwEp7ZPcu9cXI0Y9JYPRhoPDj5BaDP2MMKHFzsQGOqUB2TVtDI1GNEfQ4g5nzYLvtNEHFeYyc%2F%2FYHB88S92NhK6GZ3%2BAU4K1goMHkYhm5JKymCx2YBkg3kyGsvsEJWsmVxdjQWQyXWr0hFYUsnht%2Bz9Mt7Yb2OwdDkcZyNYJB7Pstlq0ZJiD6pACtcmj1G5SlS8%2F2mvyz5xv3gy7OiYTlRhsH6bWkDQRQWUgJCpPv32amtk0zGFZhpENrDxSz6SvAhXzw8Wv&X-Amz-Signature=fc2bd624fa7f49b3facae2dbd8274cd8756f965d3323c2c437906ea2b710cc3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMXOCBP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICEdfNN%2BU3Lw3Mdbt4kRRcRjvtyhvNrbtHkmG%2BQK25A1AiEAh1yH5zO7IwbdPJXlW60ZkrACqvFGiXZbRC5uX5Byl8Qq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB%2Bb%2BgDQUDkJ1hkeuCrcA1zSheoG7OZ4VNadV3V4NV5pflE9gLf1cLfLzDdcwnLqoJx72RZZ3lAakBZFVv5uCRpiKjdWgpyAhoinJPqY9t%2FCA2VDXfigshNpUSonSEV%2BP1LN45eQc8H%2BG%2FLtiyU%2BM9ffKw6Wg%2BDO5mXiqMydTN7uynPTV5x8A9m74oUf6XiJjF1EjHnuvyyLDuSIXYAHY26zMl%2ByyzcbPHggJqL3qZS3cqLhhRIJFiop3x4poMr4mh2NsJUthgFqShN6OeUTziDuT58a2YgvyXhvJ2SWumgpWRd5U8KjnyKX%2BHpDNnwKBUTRfWkTaXl4RMLOQLSqtj%2FXeep%2Bt%2B46hRW2nyh0aI%2FcM2UFmAjfxWHWL7pvUga0NY0ahAaIv%2FrjRmaa%2FfN3E3z0i2qHaGb7NxG5Oo5gpMOJpMChetOzySWUJxC9oh%2Fhoj2xY8Gl7X54GShteCgqMyXTg79hdcIAd%2BS3z6TR2T5rAIrqNUwRlAh6ziU3nm5NcQxYc%2FP7wMwpmKNRcMKEgwjxdrj2qSaW%2FesgERsnjb4xX1kzY2pVAdCmqR4eYZSjhvkwkKFuddqIrEHQYb1JxjlBkpshtqwdJrV5utwcDXUdhbz%2FUwEp7ZPcu9cXI0Y9JYPRhoPDj5BaDP2MMKHFzsQGOqUB2TVtDI1GNEfQ4g5nzYLvtNEHFeYyc%2F%2FYHB88S92NhK6GZ3%2BAU4K1goMHkYhm5JKymCx2YBkg3kyGsvsEJWsmVxdjQWQyXWr0hFYUsnht%2Bz9Mt7Yb2OwdDkcZyNYJB7Pstlq0ZJiD6pACtcmj1G5SlS8%2F2mvyz5xv3gy7OiYTlRhsH6bWkDQRQWUgJCpPv32amtk0zGFZhpENrDxSz6SvAhXzw8Wv&X-Amz-Signature=e729d8719aa4194795a60b7d9acfdd6dbae8cb2bc9d4abab9554d3c8987b0734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMXOCBP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICEdfNN%2BU3Lw3Mdbt4kRRcRjvtyhvNrbtHkmG%2BQK25A1AiEAh1yH5zO7IwbdPJXlW60ZkrACqvFGiXZbRC5uX5Byl8Qq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB%2Bb%2BgDQUDkJ1hkeuCrcA1zSheoG7OZ4VNadV3V4NV5pflE9gLf1cLfLzDdcwnLqoJx72RZZ3lAakBZFVv5uCRpiKjdWgpyAhoinJPqY9t%2FCA2VDXfigshNpUSonSEV%2BP1LN45eQc8H%2BG%2FLtiyU%2BM9ffKw6Wg%2BDO5mXiqMydTN7uynPTV5x8A9m74oUf6XiJjF1EjHnuvyyLDuSIXYAHY26zMl%2ByyzcbPHggJqL3qZS3cqLhhRIJFiop3x4poMr4mh2NsJUthgFqShN6OeUTziDuT58a2YgvyXhvJ2SWumgpWRd5U8KjnyKX%2BHpDNnwKBUTRfWkTaXl4RMLOQLSqtj%2FXeep%2Bt%2B46hRW2nyh0aI%2FcM2UFmAjfxWHWL7pvUga0NY0ahAaIv%2FrjRmaa%2FfN3E3z0i2qHaGb7NxG5Oo5gpMOJpMChetOzySWUJxC9oh%2Fhoj2xY8Gl7X54GShteCgqMyXTg79hdcIAd%2BS3z6TR2T5rAIrqNUwRlAh6ziU3nm5NcQxYc%2FP7wMwpmKNRcMKEgwjxdrj2qSaW%2FesgERsnjb4xX1kzY2pVAdCmqR4eYZSjhvkwkKFuddqIrEHQYb1JxjlBkpshtqwdJrV5utwcDXUdhbz%2FUwEp7ZPcu9cXI0Y9JYPRhoPDj5BaDP2MMKHFzsQGOqUB2TVtDI1GNEfQ4g5nzYLvtNEHFeYyc%2F%2FYHB88S92NhK6GZ3%2BAU4K1goMHkYhm5JKymCx2YBkg3kyGsvsEJWsmVxdjQWQyXWr0hFYUsnht%2Bz9Mt7Yb2OwdDkcZyNYJB7Pstlq0ZJiD6pACtcmj1G5SlS8%2F2mvyz5xv3gy7OiYTlRhsH6bWkDQRQWUgJCpPv32amtk0zGFZhpENrDxSz6SvAhXzw8Wv&X-Amz-Signature=885c6bc17448dc82848cae79f2e0492b4503c3bf2a14866f2a648dc32c15a66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMXOCBP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICEdfNN%2BU3Lw3Mdbt4kRRcRjvtyhvNrbtHkmG%2BQK25A1AiEAh1yH5zO7IwbdPJXlW60ZkrACqvFGiXZbRC5uX5Byl8Qq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB%2Bb%2BgDQUDkJ1hkeuCrcA1zSheoG7OZ4VNadV3V4NV5pflE9gLf1cLfLzDdcwnLqoJx72RZZ3lAakBZFVv5uCRpiKjdWgpyAhoinJPqY9t%2FCA2VDXfigshNpUSonSEV%2BP1LN45eQc8H%2BG%2FLtiyU%2BM9ffKw6Wg%2BDO5mXiqMydTN7uynPTV5x8A9m74oUf6XiJjF1EjHnuvyyLDuSIXYAHY26zMl%2ByyzcbPHggJqL3qZS3cqLhhRIJFiop3x4poMr4mh2NsJUthgFqShN6OeUTziDuT58a2YgvyXhvJ2SWumgpWRd5U8KjnyKX%2BHpDNnwKBUTRfWkTaXl4RMLOQLSqtj%2FXeep%2Bt%2B46hRW2nyh0aI%2FcM2UFmAjfxWHWL7pvUga0NY0ahAaIv%2FrjRmaa%2FfN3E3z0i2qHaGb7NxG5Oo5gpMOJpMChetOzySWUJxC9oh%2Fhoj2xY8Gl7X54GShteCgqMyXTg79hdcIAd%2BS3z6TR2T5rAIrqNUwRlAh6ziU3nm5NcQxYc%2FP7wMwpmKNRcMKEgwjxdrj2qSaW%2FesgERsnjb4xX1kzY2pVAdCmqR4eYZSjhvkwkKFuddqIrEHQYb1JxjlBkpshtqwdJrV5utwcDXUdhbz%2FUwEp7ZPcu9cXI0Y9JYPRhoPDj5BaDP2MMKHFzsQGOqUB2TVtDI1GNEfQ4g5nzYLvtNEHFeYyc%2F%2FYHB88S92NhK6GZ3%2BAU4K1goMHkYhm5JKymCx2YBkg3kyGsvsEJWsmVxdjQWQyXWr0hFYUsnht%2Bz9Mt7Yb2OwdDkcZyNYJB7Pstlq0ZJiD6pACtcmj1G5SlS8%2F2mvyz5xv3gy7OiYTlRhsH6bWkDQRQWUgJCpPv32amtk0zGFZhpENrDxSz6SvAhXzw8Wv&X-Amz-Signature=84903b4a32cb8ce7235153c55938e2110ebb0c522dd9e67bb6021b6087c30c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMXOCBP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICEdfNN%2BU3Lw3Mdbt4kRRcRjvtyhvNrbtHkmG%2BQK25A1AiEAh1yH5zO7IwbdPJXlW60ZkrACqvFGiXZbRC5uX5Byl8Qq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB%2Bb%2BgDQUDkJ1hkeuCrcA1zSheoG7OZ4VNadV3V4NV5pflE9gLf1cLfLzDdcwnLqoJx72RZZ3lAakBZFVv5uCRpiKjdWgpyAhoinJPqY9t%2FCA2VDXfigshNpUSonSEV%2BP1LN45eQc8H%2BG%2FLtiyU%2BM9ffKw6Wg%2BDO5mXiqMydTN7uynPTV5x8A9m74oUf6XiJjF1EjHnuvyyLDuSIXYAHY26zMl%2ByyzcbPHggJqL3qZS3cqLhhRIJFiop3x4poMr4mh2NsJUthgFqShN6OeUTziDuT58a2YgvyXhvJ2SWumgpWRd5U8KjnyKX%2BHpDNnwKBUTRfWkTaXl4RMLOQLSqtj%2FXeep%2Bt%2B46hRW2nyh0aI%2FcM2UFmAjfxWHWL7pvUga0NY0ahAaIv%2FrjRmaa%2FfN3E3z0i2qHaGb7NxG5Oo5gpMOJpMChetOzySWUJxC9oh%2Fhoj2xY8Gl7X54GShteCgqMyXTg79hdcIAd%2BS3z6TR2T5rAIrqNUwRlAh6ziU3nm5NcQxYc%2FP7wMwpmKNRcMKEgwjxdrj2qSaW%2FesgERsnjb4xX1kzY2pVAdCmqR4eYZSjhvkwkKFuddqIrEHQYb1JxjlBkpshtqwdJrV5utwcDXUdhbz%2FUwEp7ZPcu9cXI0Y9JYPRhoPDj5BaDP2MMKHFzsQGOqUB2TVtDI1GNEfQ4g5nzYLvtNEHFeYyc%2F%2FYHB88S92NhK6GZ3%2BAU4K1goMHkYhm5JKymCx2YBkg3kyGsvsEJWsmVxdjQWQyXWr0hFYUsnht%2Bz9Mt7Yb2OwdDkcZyNYJB7Pstlq0ZJiD6pACtcmj1G5SlS8%2F2mvyz5xv3gy7OiYTlRhsH6bWkDQRQWUgJCpPv32amtk0zGFZhpENrDxSz6SvAhXzw8Wv&X-Amz-Signature=05431310268bf15cc1d736ebef73ed6ef11c476eec44c555e2e99a0aa6d5ed11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
