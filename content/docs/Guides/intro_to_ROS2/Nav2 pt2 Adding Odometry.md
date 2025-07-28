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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663PCYCRR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB2uT%2Bsm0b0b7CzFHpOG3qki1cIhOOrUWBUsi8uAcHZlAiEApK1VqgWNDIPMy%2B837zIg%2BpTGduSy%2BVvB35NBqs8D6ncqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdeN7w8UMc5TPqa%2ByrcA9KrHPt%2BlNnqXbBmpuuzO5oGgJYrvRUmC%2BuuFz5%2B9y2LbS9pMhc6w1%2BoAXXxfdaJlrFxrKZ0qoflvcHaverLDo%2FxCU7hA5jbH7hCS4HLSGRN%2BffSg7EEWEltqMBo9iNBi%2FM9AcNIwcZMJI%2FarkMgo778%2FDHNEzaJoPtOMrvDqr47j0tyfOO4FrQ7NqG8sZ50sIYvotiKsKPIYOujWBoO4bKr8xAVa7r6ySyHPpTeXDK8KvIQ0OBo95tVPZhvnaTEMFJ8OFXcOz4YN0GqehxqTVbX1IngPMPfZAOINj6jW60h89R0rRnz7trqJscU2sgknFIYuF06hpcor2HGsbc6TFrqfidOpI%2B36sM7WQTD%2FDJTbJXs1tm5p4N26yI7iqYHjVosA6rjaZeUP%2Fv%2B5%2Bp%2BlpgOuqgHGEuD%2FKpJnpttNll9916QJaLa6I%2BSiorEudQ8LA39Gm6xdsbpadTbG7rRVPQexYrBrohI238%2BS84YmA3GdabMrqe6lj6n3qPxQH1IjprzXj7SMiivjNgNIdD7jhNNjDJgNLf%2BVlK9kSWADrLVx8YUw8360p8XjFvlbrEGgF6ADHJTbdzPoUXp4gPpHtjvPGqmC3WIRQG75KJirpxyve%2FgTvpV372apG%2FNMJ%2FSnsQGOqUBX0wH1A31lnsdslIXXjUrZhlimKt3A8NRJvQvgQTWoVQPN%2BIkCyj%2FK6Isis2RzRKEvWWzmMqb6YSqFtGMhdtYZmo2ru8RMA4Yi%2FC5AnE8gQCe%2Fo8MlJY4vH7nOlZDTcQ9oTzn27JXcUtD%2BhhtoPYHyV6prifjIwTUI%2F%2FKEHp5WVjFBECkGI16EHuOlThI4dmabzCLo9jABZJGEsJLBPnml8BLqgeG&X-Amz-Signature=f09a7c295c04efd2d0cb8d525a449180319f345474591744eb16b1a5cc72fe97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663PCYCRR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB2uT%2Bsm0b0b7CzFHpOG3qki1cIhOOrUWBUsi8uAcHZlAiEApK1VqgWNDIPMy%2B837zIg%2BpTGduSy%2BVvB35NBqs8D6ncqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdeN7w8UMc5TPqa%2ByrcA9KrHPt%2BlNnqXbBmpuuzO5oGgJYrvRUmC%2BuuFz5%2B9y2LbS9pMhc6w1%2BoAXXxfdaJlrFxrKZ0qoflvcHaverLDo%2FxCU7hA5jbH7hCS4HLSGRN%2BffSg7EEWEltqMBo9iNBi%2FM9AcNIwcZMJI%2FarkMgo778%2FDHNEzaJoPtOMrvDqr47j0tyfOO4FrQ7NqG8sZ50sIYvotiKsKPIYOujWBoO4bKr8xAVa7r6ySyHPpTeXDK8KvIQ0OBo95tVPZhvnaTEMFJ8OFXcOz4YN0GqehxqTVbX1IngPMPfZAOINj6jW60h89R0rRnz7trqJscU2sgknFIYuF06hpcor2HGsbc6TFrqfidOpI%2B36sM7WQTD%2FDJTbJXs1tm5p4N26yI7iqYHjVosA6rjaZeUP%2Fv%2B5%2Bp%2BlpgOuqgHGEuD%2FKpJnpttNll9916QJaLa6I%2BSiorEudQ8LA39Gm6xdsbpadTbG7rRVPQexYrBrohI238%2BS84YmA3GdabMrqe6lj6n3qPxQH1IjprzXj7SMiivjNgNIdD7jhNNjDJgNLf%2BVlK9kSWADrLVx8YUw8360p8XjFvlbrEGgF6ADHJTbdzPoUXp4gPpHtjvPGqmC3WIRQG75KJirpxyve%2FgTvpV372apG%2FNMJ%2FSnsQGOqUBX0wH1A31lnsdslIXXjUrZhlimKt3A8NRJvQvgQTWoVQPN%2BIkCyj%2FK6Isis2RzRKEvWWzmMqb6YSqFtGMhdtYZmo2ru8RMA4Yi%2FC5AnE8gQCe%2Fo8MlJY4vH7nOlZDTcQ9oTzn27JXcUtD%2BhhtoPYHyV6prifjIwTUI%2F%2FKEHp5WVjFBECkGI16EHuOlThI4dmabzCLo9jABZJGEsJLBPnml8BLqgeG&X-Amz-Signature=e228f3b2b4df872520ccce3ede0768adf23e723f561d6cf28f86946b4fd18213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663PCYCRR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB2uT%2Bsm0b0b7CzFHpOG3qki1cIhOOrUWBUsi8uAcHZlAiEApK1VqgWNDIPMy%2B837zIg%2BpTGduSy%2BVvB35NBqs8D6ncqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdeN7w8UMc5TPqa%2ByrcA9KrHPt%2BlNnqXbBmpuuzO5oGgJYrvRUmC%2BuuFz5%2B9y2LbS9pMhc6w1%2BoAXXxfdaJlrFxrKZ0qoflvcHaverLDo%2FxCU7hA5jbH7hCS4HLSGRN%2BffSg7EEWEltqMBo9iNBi%2FM9AcNIwcZMJI%2FarkMgo778%2FDHNEzaJoPtOMrvDqr47j0tyfOO4FrQ7NqG8sZ50sIYvotiKsKPIYOujWBoO4bKr8xAVa7r6ySyHPpTeXDK8KvIQ0OBo95tVPZhvnaTEMFJ8OFXcOz4YN0GqehxqTVbX1IngPMPfZAOINj6jW60h89R0rRnz7trqJscU2sgknFIYuF06hpcor2HGsbc6TFrqfidOpI%2B36sM7WQTD%2FDJTbJXs1tm5p4N26yI7iqYHjVosA6rjaZeUP%2Fv%2B5%2Bp%2BlpgOuqgHGEuD%2FKpJnpttNll9916QJaLa6I%2BSiorEudQ8LA39Gm6xdsbpadTbG7rRVPQexYrBrohI238%2BS84YmA3GdabMrqe6lj6n3qPxQH1IjprzXj7SMiivjNgNIdD7jhNNjDJgNLf%2BVlK9kSWADrLVx8YUw8360p8XjFvlbrEGgF6ADHJTbdzPoUXp4gPpHtjvPGqmC3WIRQG75KJirpxyve%2FgTvpV372apG%2FNMJ%2FSnsQGOqUBX0wH1A31lnsdslIXXjUrZhlimKt3A8NRJvQvgQTWoVQPN%2BIkCyj%2FK6Isis2RzRKEvWWzmMqb6YSqFtGMhdtYZmo2ru8RMA4Yi%2FC5AnE8gQCe%2Fo8MlJY4vH7nOlZDTcQ9oTzn27JXcUtD%2BhhtoPYHyV6prifjIwTUI%2F%2FKEHp5WVjFBECkGI16EHuOlThI4dmabzCLo9jABZJGEsJLBPnml8BLqgeG&X-Amz-Signature=ed1a92f4fee529e2d09507fb978c11bf34bf3892705eafa9a822a51afac0e4dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663PCYCRR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB2uT%2Bsm0b0b7CzFHpOG3qki1cIhOOrUWBUsi8uAcHZlAiEApK1VqgWNDIPMy%2B837zIg%2BpTGduSy%2BVvB35NBqs8D6ncqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdeN7w8UMc5TPqa%2ByrcA9KrHPt%2BlNnqXbBmpuuzO5oGgJYrvRUmC%2BuuFz5%2B9y2LbS9pMhc6w1%2BoAXXxfdaJlrFxrKZ0qoflvcHaverLDo%2FxCU7hA5jbH7hCS4HLSGRN%2BffSg7EEWEltqMBo9iNBi%2FM9AcNIwcZMJI%2FarkMgo778%2FDHNEzaJoPtOMrvDqr47j0tyfOO4FrQ7NqG8sZ50sIYvotiKsKPIYOujWBoO4bKr8xAVa7r6ySyHPpTeXDK8KvIQ0OBo95tVPZhvnaTEMFJ8OFXcOz4YN0GqehxqTVbX1IngPMPfZAOINj6jW60h89R0rRnz7trqJscU2sgknFIYuF06hpcor2HGsbc6TFrqfidOpI%2B36sM7WQTD%2FDJTbJXs1tm5p4N26yI7iqYHjVosA6rjaZeUP%2Fv%2B5%2Bp%2BlpgOuqgHGEuD%2FKpJnpttNll9916QJaLa6I%2BSiorEudQ8LA39Gm6xdsbpadTbG7rRVPQexYrBrohI238%2BS84YmA3GdabMrqe6lj6n3qPxQH1IjprzXj7SMiivjNgNIdD7jhNNjDJgNLf%2BVlK9kSWADrLVx8YUw8360p8XjFvlbrEGgF6ADHJTbdzPoUXp4gPpHtjvPGqmC3WIRQG75KJirpxyve%2FgTvpV372apG%2FNMJ%2FSnsQGOqUBX0wH1A31lnsdslIXXjUrZhlimKt3A8NRJvQvgQTWoVQPN%2BIkCyj%2FK6Isis2RzRKEvWWzmMqb6YSqFtGMhdtYZmo2ru8RMA4Yi%2FC5AnE8gQCe%2Fo8MlJY4vH7nOlZDTcQ9oTzn27JXcUtD%2BhhtoPYHyV6prifjIwTUI%2F%2FKEHp5WVjFBECkGI16EHuOlThI4dmabzCLo9jABZJGEsJLBPnml8BLqgeG&X-Amz-Signature=541ab2b3e6a68f9650f52f972e202724d248bac340e2e14700322bfc3f9c2330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663PCYCRR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB2uT%2Bsm0b0b7CzFHpOG3qki1cIhOOrUWBUsi8uAcHZlAiEApK1VqgWNDIPMy%2B837zIg%2BpTGduSy%2BVvB35NBqs8D6ncqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdeN7w8UMc5TPqa%2ByrcA9KrHPt%2BlNnqXbBmpuuzO5oGgJYrvRUmC%2BuuFz5%2B9y2LbS9pMhc6w1%2BoAXXxfdaJlrFxrKZ0qoflvcHaverLDo%2FxCU7hA5jbH7hCS4HLSGRN%2BffSg7EEWEltqMBo9iNBi%2FM9AcNIwcZMJI%2FarkMgo778%2FDHNEzaJoPtOMrvDqr47j0tyfOO4FrQ7NqG8sZ50sIYvotiKsKPIYOujWBoO4bKr8xAVa7r6ySyHPpTeXDK8KvIQ0OBo95tVPZhvnaTEMFJ8OFXcOz4YN0GqehxqTVbX1IngPMPfZAOINj6jW60h89R0rRnz7trqJscU2sgknFIYuF06hpcor2HGsbc6TFrqfidOpI%2B36sM7WQTD%2FDJTbJXs1tm5p4N26yI7iqYHjVosA6rjaZeUP%2Fv%2B5%2Bp%2BlpgOuqgHGEuD%2FKpJnpttNll9916QJaLa6I%2BSiorEudQ8LA39Gm6xdsbpadTbG7rRVPQexYrBrohI238%2BS84YmA3GdabMrqe6lj6n3qPxQH1IjprzXj7SMiivjNgNIdD7jhNNjDJgNLf%2BVlK9kSWADrLVx8YUw8360p8XjFvlbrEGgF6ADHJTbdzPoUXp4gPpHtjvPGqmC3WIRQG75KJirpxyve%2FgTvpV372apG%2FNMJ%2FSnsQGOqUBX0wH1A31lnsdslIXXjUrZhlimKt3A8NRJvQvgQTWoVQPN%2BIkCyj%2FK6Isis2RzRKEvWWzmMqb6YSqFtGMhdtYZmo2ru8RMA4Yi%2FC5AnE8gQCe%2Fo8MlJY4vH7nOlZDTcQ9oTzn27JXcUtD%2BhhtoPYHyV6prifjIwTUI%2F%2FKEHp5WVjFBECkGI16EHuOlThI4dmabzCLo9jABZJGEsJLBPnml8BLqgeG&X-Amz-Signature=397da01bd6e6ec0cbc46b65871cfc5def56217197ec0d6c275dede9d85258658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663PCYCRR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB2uT%2Bsm0b0b7CzFHpOG3qki1cIhOOrUWBUsi8uAcHZlAiEApK1VqgWNDIPMy%2B837zIg%2BpTGduSy%2BVvB35NBqs8D6ncqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdeN7w8UMc5TPqa%2ByrcA9KrHPt%2BlNnqXbBmpuuzO5oGgJYrvRUmC%2BuuFz5%2B9y2LbS9pMhc6w1%2BoAXXxfdaJlrFxrKZ0qoflvcHaverLDo%2FxCU7hA5jbH7hCS4HLSGRN%2BffSg7EEWEltqMBo9iNBi%2FM9AcNIwcZMJI%2FarkMgo778%2FDHNEzaJoPtOMrvDqr47j0tyfOO4FrQ7NqG8sZ50sIYvotiKsKPIYOujWBoO4bKr8xAVa7r6ySyHPpTeXDK8KvIQ0OBo95tVPZhvnaTEMFJ8OFXcOz4YN0GqehxqTVbX1IngPMPfZAOINj6jW60h89R0rRnz7trqJscU2sgknFIYuF06hpcor2HGsbc6TFrqfidOpI%2B36sM7WQTD%2FDJTbJXs1tm5p4N26yI7iqYHjVosA6rjaZeUP%2Fv%2B5%2Bp%2BlpgOuqgHGEuD%2FKpJnpttNll9916QJaLa6I%2BSiorEudQ8LA39Gm6xdsbpadTbG7rRVPQexYrBrohI238%2BS84YmA3GdabMrqe6lj6n3qPxQH1IjprzXj7SMiivjNgNIdD7jhNNjDJgNLf%2BVlK9kSWADrLVx8YUw8360p8XjFvlbrEGgF6ADHJTbdzPoUXp4gPpHtjvPGqmC3WIRQG75KJirpxyve%2FgTvpV372apG%2FNMJ%2FSnsQGOqUBX0wH1A31lnsdslIXXjUrZhlimKt3A8NRJvQvgQTWoVQPN%2BIkCyj%2FK6Isis2RzRKEvWWzmMqb6YSqFtGMhdtYZmo2ru8RMA4Yi%2FC5AnE8gQCe%2Fo8MlJY4vH7nOlZDTcQ9oTzn27JXcUtD%2BhhtoPYHyV6prifjIwTUI%2F%2FKEHp5WVjFBECkGI16EHuOlThI4dmabzCLo9jABZJGEsJLBPnml8BLqgeG&X-Amz-Signature=7af887952277a101e4012971968c6d3c7e37d034036e3d0b29eee8a50696aa96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663PCYCRR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB2uT%2Bsm0b0b7CzFHpOG3qki1cIhOOrUWBUsi8uAcHZlAiEApK1VqgWNDIPMy%2B837zIg%2BpTGduSy%2BVvB35NBqs8D6ncqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdeN7w8UMc5TPqa%2ByrcA9KrHPt%2BlNnqXbBmpuuzO5oGgJYrvRUmC%2BuuFz5%2B9y2LbS9pMhc6w1%2BoAXXxfdaJlrFxrKZ0qoflvcHaverLDo%2FxCU7hA5jbH7hCS4HLSGRN%2BffSg7EEWEltqMBo9iNBi%2FM9AcNIwcZMJI%2FarkMgo778%2FDHNEzaJoPtOMrvDqr47j0tyfOO4FrQ7NqG8sZ50sIYvotiKsKPIYOujWBoO4bKr8xAVa7r6ySyHPpTeXDK8KvIQ0OBo95tVPZhvnaTEMFJ8OFXcOz4YN0GqehxqTVbX1IngPMPfZAOINj6jW60h89R0rRnz7trqJscU2sgknFIYuF06hpcor2HGsbc6TFrqfidOpI%2B36sM7WQTD%2FDJTbJXs1tm5p4N26yI7iqYHjVosA6rjaZeUP%2Fv%2B5%2Bp%2BlpgOuqgHGEuD%2FKpJnpttNll9916QJaLa6I%2BSiorEudQ8LA39Gm6xdsbpadTbG7rRVPQexYrBrohI238%2BS84YmA3GdabMrqe6lj6n3qPxQH1IjprzXj7SMiivjNgNIdD7jhNNjDJgNLf%2BVlK9kSWADrLVx8YUw8360p8XjFvlbrEGgF6ADHJTbdzPoUXp4gPpHtjvPGqmC3WIRQG75KJirpxyve%2FgTvpV372apG%2FNMJ%2FSnsQGOqUBX0wH1A31lnsdslIXXjUrZhlimKt3A8NRJvQvgQTWoVQPN%2BIkCyj%2FK6Isis2RzRKEvWWzmMqb6YSqFtGMhdtYZmo2ru8RMA4Yi%2FC5AnE8gQCe%2Fo8MlJY4vH7nOlZDTcQ9oTzn27JXcUtD%2BhhtoPYHyV6prifjIwTUI%2F%2FKEHp5WVjFBECkGI16EHuOlThI4dmabzCLo9jABZJGEsJLBPnml8BLqgeG&X-Amz-Signature=d74f327d619e632a634df668f96f2e620229be42b55a8aff1bf16df4fa154254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663PCYCRR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB2uT%2Bsm0b0b7CzFHpOG3qki1cIhOOrUWBUsi8uAcHZlAiEApK1VqgWNDIPMy%2B837zIg%2BpTGduSy%2BVvB35NBqs8D6ncqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdeN7w8UMc5TPqa%2ByrcA9KrHPt%2BlNnqXbBmpuuzO5oGgJYrvRUmC%2BuuFz5%2B9y2LbS9pMhc6w1%2BoAXXxfdaJlrFxrKZ0qoflvcHaverLDo%2FxCU7hA5jbH7hCS4HLSGRN%2BffSg7EEWEltqMBo9iNBi%2FM9AcNIwcZMJI%2FarkMgo778%2FDHNEzaJoPtOMrvDqr47j0tyfOO4FrQ7NqG8sZ50sIYvotiKsKPIYOujWBoO4bKr8xAVa7r6ySyHPpTeXDK8KvIQ0OBo95tVPZhvnaTEMFJ8OFXcOz4YN0GqehxqTVbX1IngPMPfZAOINj6jW60h89R0rRnz7trqJscU2sgknFIYuF06hpcor2HGsbc6TFrqfidOpI%2B36sM7WQTD%2FDJTbJXs1tm5p4N26yI7iqYHjVosA6rjaZeUP%2Fv%2B5%2Bp%2BlpgOuqgHGEuD%2FKpJnpttNll9916QJaLa6I%2BSiorEudQ8LA39Gm6xdsbpadTbG7rRVPQexYrBrohI238%2BS84YmA3GdabMrqe6lj6n3qPxQH1IjprzXj7SMiivjNgNIdD7jhNNjDJgNLf%2BVlK9kSWADrLVx8YUw8360p8XjFvlbrEGgF6ADHJTbdzPoUXp4gPpHtjvPGqmC3WIRQG75KJirpxyve%2FgTvpV372apG%2FNMJ%2FSnsQGOqUBX0wH1A31lnsdslIXXjUrZhlimKt3A8NRJvQvgQTWoVQPN%2BIkCyj%2FK6Isis2RzRKEvWWzmMqb6YSqFtGMhdtYZmo2ru8RMA4Yi%2FC5AnE8gQCe%2Fo8MlJY4vH7nOlZDTcQ9oTzn27JXcUtD%2BhhtoPYHyV6prifjIwTUI%2F%2FKEHp5WVjFBECkGI16EHuOlThI4dmabzCLo9jABZJGEsJLBPnml8BLqgeG&X-Amz-Signature=3ad2390713e680aa19c02a19242fa6ab8e2cb83ed60ed76ae4ce005fb6376eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663PCYCRR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB2uT%2Bsm0b0b7CzFHpOG3qki1cIhOOrUWBUsi8uAcHZlAiEApK1VqgWNDIPMy%2B837zIg%2BpTGduSy%2BVvB35NBqs8D6ncqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdeN7w8UMc5TPqa%2ByrcA9KrHPt%2BlNnqXbBmpuuzO5oGgJYrvRUmC%2BuuFz5%2B9y2LbS9pMhc6w1%2BoAXXxfdaJlrFxrKZ0qoflvcHaverLDo%2FxCU7hA5jbH7hCS4HLSGRN%2BffSg7EEWEltqMBo9iNBi%2FM9AcNIwcZMJI%2FarkMgo778%2FDHNEzaJoPtOMrvDqr47j0tyfOO4FrQ7NqG8sZ50sIYvotiKsKPIYOujWBoO4bKr8xAVa7r6ySyHPpTeXDK8KvIQ0OBo95tVPZhvnaTEMFJ8OFXcOz4YN0GqehxqTVbX1IngPMPfZAOINj6jW60h89R0rRnz7trqJscU2sgknFIYuF06hpcor2HGsbc6TFrqfidOpI%2B36sM7WQTD%2FDJTbJXs1tm5p4N26yI7iqYHjVosA6rjaZeUP%2Fv%2B5%2Bp%2BlpgOuqgHGEuD%2FKpJnpttNll9916QJaLa6I%2BSiorEudQ8LA39Gm6xdsbpadTbG7rRVPQexYrBrohI238%2BS84YmA3GdabMrqe6lj6n3qPxQH1IjprzXj7SMiivjNgNIdD7jhNNjDJgNLf%2BVlK9kSWADrLVx8YUw8360p8XjFvlbrEGgF6ADHJTbdzPoUXp4gPpHtjvPGqmC3WIRQG75KJirpxyve%2FgTvpV372apG%2FNMJ%2FSnsQGOqUBX0wH1A31lnsdslIXXjUrZhlimKt3A8NRJvQvgQTWoVQPN%2BIkCyj%2FK6Isis2RzRKEvWWzmMqb6YSqFtGMhdtYZmo2ru8RMA4Yi%2FC5AnE8gQCe%2Fo8MlJY4vH7nOlZDTcQ9oTzn27JXcUtD%2BhhtoPYHyV6prifjIwTUI%2F%2FKEHp5WVjFBECkGI16EHuOlThI4dmabzCLo9jABZJGEsJLBPnml8BLqgeG&X-Amz-Signature=5cc81cf9e09ce2a3fce8068683e678c54a7a40b72032cfea0124144d0bf4e526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L363MA5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAFCDIVx2d3swbEBJDGYjDs%2BhIeyfJmHJqyhzyzoXECtAiEAxcAFsoie%2F43HME2oNDGBdM3I6k1jEg%2BN9ifWL509UiwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuYUTDmO2VEW56hpyrcAzxFu9LqEDyrMXDpv5DYi7WEN0T96vZnbe8ZE15kQxtG3jpJ04iSyog0uTOjJ3QYb0ViwBGJ8sXqFEOqY1rxeowQW7j8FykVPIGBKNFnL4Cg0EHd8ZTqNdxelio3WFcr7%2BBJSnu9%2B%2FZuRMdEsaq1%2FFxIPgInAlGkg4637o%2Fj%2BnXiIop37TkWrbDMHU1nMf6soQN456puPscY6%2BoRZSNp6a%2BA0fNyy99cGjw84aIJJwf49bUJIo8NB%2BiTDqva%2BXZLeUNJrpi9hOsh0JhjCs2lhqOxxp%2Beh%2FyyT%2BgqlZYK1nk%2FjGvJm9eT3gXyIb1gLGrWVQ7pItiA7Mn2DXiMCrrPwZi6z9t%2BYWV4fR1BNmYe3nS%2BLEEb%2BVGU4EZewkFU5f%2FV91AyQZIFWua7PD3vGPxTJK3vatPbEOR8I%2BgVzYXeUyVSsL4DBOPtUsr1QIpaiWzfa9jMejLh7zNI6bcOJ4ZuvLpmqYc2bve3hMf0xGx44croFRGmUuErBm2dDpB%2BIV0Bn8Wi5q21TjKgsZWiPWlnct2RqlAwSZZcb35qKBJdq8L%2FjLkovWykDCP1gjHHiC9BIqkoaehDxXakIqQAFJ1IXrfggd8nLxaLM%2Biy0h0HClrPnOtyoctGzBIZWaJNMODSnsQGOqUBP%2BqPoH7qg%2Bf20oHoS15AVjR4ATcLsVOBNzOvhAQHymGV9PlycB557No%2Bp0XLY8V3APGvuBBCgrXWdtBY2cOrUz%2FlrMaln7LugVphNuMkk66Hgiyo25hLzXJ49ME38PhvBO58G5CQVtZ5DpY7aUQPMbm0mm91O8ZIb1MZ15362js2dah4M2YJuF9tApre5iQBr5UM%2FlMXQHkz2LM6DXLZtIZXkqBt&X-Amz-Signature=9e64eb10565a8ca778cd05deddfc61f6f10a9c459fa4fd171c19da2f9dcdf356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663PCYCRR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB2uT%2Bsm0b0b7CzFHpOG3qki1cIhOOrUWBUsi8uAcHZlAiEApK1VqgWNDIPMy%2B837zIg%2BpTGduSy%2BVvB35NBqs8D6ncqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdeN7w8UMc5TPqa%2ByrcA9KrHPt%2BlNnqXbBmpuuzO5oGgJYrvRUmC%2BuuFz5%2B9y2LbS9pMhc6w1%2BoAXXxfdaJlrFxrKZ0qoflvcHaverLDo%2FxCU7hA5jbH7hCS4HLSGRN%2BffSg7EEWEltqMBo9iNBi%2FM9AcNIwcZMJI%2FarkMgo778%2FDHNEzaJoPtOMrvDqr47j0tyfOO4FrQ7NqG8sZ50sIYvotiKsKPIYOujWBoO4bKr8xAVa7r6ySyHPpTeXDK8KvIQ0OBo95tVPZhvnaTEMFJ8OFXcOz4YN0GqehxqTVbX1IngPMPfZAOINj6jW60h89R0rRnz7trqJscU2sgknFIYuF06hpcor2HGsbc6TFrqfidOpI%2B36sM7WQTD%2FDJTbJXs1tm5p4N26yI7iqYHjVosA6rjaZeUP%2Fv%2B5%2Bp%2BlpgOuqgHGEuD%2FKpJnpttNll9916QJaLa6I%2BSiorEudQ8LA39Gm6xdsbpadTbG7rRVPQexYrBrohI238%2BS84YmA3GdabMrqe6lj6n3qPxQH1IjprzXj7SMiivjNgNIdD7jhNNjDJgNLf%2BVlK9kSWADrLVx8YUw8360p8XjFvlbrEGgF6ADHJTbdzPoUXp4gPpHtjvPGqmC3WIRQG75KJirpxyve%2FgTvpV372apG%2FNMJ%2FSnsQGOqUBX0wH1A31lnsdslIXXjUrZhlimKt3A8NRJvQvgQTWoVQPN%2BIkCyj%2FK6Isis2RzRKEvWWzmMqb6YSqFtGMhdtYZmo2ru8RMA4Yi%2FC5AnE8gQCe%2Fo8MlJY4vH7nOlZDTcQ9oTzn27JXcUtD%2BhhtoPYHyV6prifjIwTUI%2F%2FKEHp5WVjFBECkGI16EHuOlThI4dmabzCLo9jABZJGEsJLBPnml8BLqgeG&X-Amz-Signature=c26af2377980a9310953bf55b7f52de649a2b02fd7a6a58e516e1ab63cb7ccd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HO5IEW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDTX1YvNOkYayR2P1BaQzDyxLxP1yqnWly6Pu%2BJZ9wsfQIhAJ67CWIaZB8NLkF6Yt3%2Bci7pc1hEjLiI0WAMaLoyg9pnKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyAi5f9PvNnX8zDL8q3ANfv4siJV8mvX7G3X7Rh20EJG0xi8jIo5Gs17gcZfPABLSPVz%2FX1mGIaoqfYqlYzxqplyoHuVN5mRn63mvPHoJN%2FulC1Fp2uJvm1ICFm3mgb%2FpMv6%2BBB4%2FZPrg2FJ%2BEx62uHfNr2epJrLSzzFadPKD374Vd1pumdaegEfWLbm4SiRv3SwatWCWj986FfpNSuB%2FvHoWSmN%2F3%2BcA4vfhCM3798wupKpXfya6KoMa6i4W5Yz8Z6r9qZhzJAHFjGz%2FX3bUWYhKnzWDgmCmHgEKsUczQfeym%2FA%2Bo8iXssCYXRK737TCzG21dpRjOVuAApFMEFnDbV5etax34gx%2FtpnPfpHbd0ba2nc2vBmWb8fuCJ%2BczajqaUEP3KmS5kyy%2F0YZvcg3RYFHpkRjtat%2BmOzK5wKLPC6xGPbE6cZhiEssdVKcDLtbwOUy1j4pPqJdhGYyuxbi1ma4LAfhZk2NrVlcTbvappSEucooZteOO2VHKonO89vB9hg%2BFue%2B4lvG5gbG9%2FB6dYRW5UTl%2BZNYJ1IYrqgdmZMlzd4%2BrxSCDzRiAX2XrbzXySpPRoVfeQi6cxGudnmZ2j3zurSTlPC70OSl3UpgVdvF0tbizhGcSgK39UsiDmnyhLMrsdp2xxvxZHjCG0p7EBjqkAXyjl8gjvnXE%2BVkQRBXzQGrWeRIpd94pMOM%2FWIVivzj7J%2FVLRVyK3ACnFWVNM551ZHQbPcQECzN%2FJSVGTNU7qRZFn7XkWSJnrIcWVbhMSGURNEQVc0SUPbl7L9B4vF1WHR3XZ5MWxGKz0h%2BbDdYd%2BPz%2BR2ONu9TbUVK6uy0M3TbU4SSRw443HmGMMM6rHfhGOec9fC9rUmlIGI%2BvFkICA3P%2FgAwk&X-Amz-Signature=23d2c6561b3a82d7d03b96f105670fcf9e3e5c670de69ca27bc3a02c29bc290d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HO5IEW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDTX1YvNOkYayR2P1BaQzDyxLxP1yqnWly6Pu%2BJZ9wsfQIhAJ67CWIaZB8NLkF6Yt3%2Bci7pc1hEjLiI0WAMaLoyg9pnKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyAi5f9PvNnX8zDL8q3ANfv4siJV8mvX7G3X7Rh20EJG0xi8jIo5Gs17gcZfPABLSPVz%2FX1mGIaoqfYqlYzxqplyoHuVN5mRn63mvPHoJN%2FulC1Fp2uJvm1ICFm3mgb%2FpMv6%2BBB4%2FZPrg2FJ%2BEx62uHfNr2epJrLSzzFadPKD374Vd1pumdaegEfWLbm4SiRv3SwatWCWj986FfpNSuB%2FvHoWSmN%2F3%2BcA4vfhCM3798wupKpXfya6KoMa6i4W5Yz8Z6r9qZhzJAHFjGz%2FX3bUWYhKnzWDgmCmHgEKsUczQfeym%2FA%2Bo8iXssCYXRK737TCzG21dpRjOVuAApFMEFnDbV5etax34gx%2FtpnPfpHbd0ba2nc2vBmWb8fuCJ%2BczajqaUEP3KmS5kyy%2F0YZvcg3RYFHpkRjtat%2BmOzK5wKLPC6xGPbE6cZhiEssdVKcDLtbwOUy1j4pPqJdhGYyuxbi1ma4LAfhZk2NrVlcTbvappSEucooZteOO2VHKonO89vB9hg%2BFue%2B4lvG5gbG9%2FB6dYRW5UTl%2BZNYJ1IYrqgdmZMlzd4%2BrxSCDzRiAX2XrbzXySpPRoVfeQi6cxGudnmZ2j3zurSTlPC70OSl3UpgVdvF0tbizhGcSgK39UsiDmnyhLMrsdp2xxvxZHjCG0p7EBjqkAXyjl8gjvnXE%2BVkQRBXzQGrWeRIpd94pMOM%2FWIVivzj7J%2FVLRVyK3ACnFWVNM551ZHQbPcQECzN%2FJSVGTNU7qRZFn7XkWSJnrIcWVbhMSGURNEQVc0SUPbl7L9B4vF1WHR3XZ5MWxGKz0h%2BbDdYd%2BPz%2BR2ONu9TbUVK6uy0M3TbU4SSRw443HmGMMM6rHfhGOec9fC9rUmlIGI%2BvFkICA3P%2FgAwk&X-Amz-Signature=e968ad6a7ab177b68f7cf24ddfb5c9d154e502722f994397555baea6aebd2ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HO5IEW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDTX1YvNOkYayR2P1BaQzDyxLxP1yqnWly6Pu%2BJZ9wsfQIhAJ67CWIaZB8NLkF6Yt3%2Bci7pc1hEjLiI0WAMaLoyg9pnKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyAi5f9PvNnX8zDL8q3ANfv4siJV8mvX7G3X7Rh20EJG0xi8jIo5Gs17gcZfPABLSPVz%2FX1mGIaoqfYqlYzxqplyoHuVN5mRn63mvPHoJN%2FulC1Fp2uJvm1ICFm3mgb%2FpMv6%2BBB4%2FZPrg2FJ%2BEx62uHfNr2epJrLSzzFadPKD374Vd1pumdaegEfWLbm4SiRv3SwatWCWj986FfpNSuB%2FvHoWSmN%2F3%2BcA4vfhCM3798wupKpXfya6KoMa6i4W5Yz8Z6r9qZhzJAHFjGz%2FX3bUWYhKnzWDgmCmHgEKsUczQfeym%2FA%2Bo8iXssCYXRK737TCzG21dpRjOVuAApFMEFnDbV5etax34gx%2FtpnPfpHbd0ba2nc2vBmWb8fuCJ%2BczajqaUEP3KmS5kyy%2F0YZvcg3RYFHpkRjtat%2BmOzK5wKLPC6xGPbE6cZhiEssdVKcDLtbwOUy1j4pPqJdhGYyuxbi1ma4LAfhZk2NrVlcTbvappSEucooZteOO2VHKonO89vB9hg%2BFue%2B4lvG5gbG9%2FB6dYRW5UTl%2BZNYJ1IYrqgdmZMlzd4%2BrxSCDzRiAX2XrbzXySpPRoVfeQi6cxGudnmZ2j3zurSTlPC70OSl3UpgVdvF0tbizhGcSgK39UsiDmnyhLMrsdp2xxvxZHjCG0p7EBjqkAXyjl8gjvnXE%2BVkQRBXzQGrWeRIpd94pMOM%2FWIVivzj7J%2FVLRVyK3ACnFWVNM551ZHQbPcQECzN%2FJSVGTNU7qRZFn7XkWSJnrIcWVbhMSGURNEQVc0SUPbl7L9B4vF1WHR3XZ5MWxGKz0h%2BbDdYd%2BPz%2BR2ONu9TbUVK6uy0M3TbU4SSRw443HmGMMM6rHfhGOec9fC9rUmlIGI%2BvFkICA3P%2FgAwk&X-Amz-Signature=10045e82332c87758d2da4b382de0d4e74c398b838d4fddf13854d0bfc867207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HO5IEW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDTX1YvNOkYayR2P1BaQzDyxLxP1yqnWly6Pu%2BJZ9wsfQIhAJ67CWIaZB8NLkF6Yt3%2Bci7pc1hEjLiI0WAMaLoyg9pnKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyAi5f9PvNnX8zDL8q3ANfv4siJV8mvX7G3X7Rh20EJG0xi8jIo5Gs17gcZfPABLSPVz%2FX1mGIaoqfYqlYzxqplyoHuVN5mRn63mvPHoJN%2FulC1Fp2uJvm1ICFm3mgb%2FpMv6%2BBB4%2FZPrg2FJ%2BEx62uHfNr2epJrLSzzFadPKD374Vd1pumdaegEfWLbm4SiRv3SwatWCWj986FfpNSuB%2FvHoWSmN%2F3%2BcA4vfhCM3798wupKpXfya6KoMa6i4W5Yz8Z6r9qZhzJAHFjGz%2FX3bUWYhKnzWDgmCmHgEKsUczQfeym%2FA%2Bo8iXssCYXRK737TCzG21dpRjOVuAApFMEFnDbV5etax34gx%2FtpnPfpHbd0ba2nc2vBmWb8fuCJ%2BczajqaUEP3KmS5kyy%2F0YZvcg3RYFHpkRjtat%2BmOzK5wKLPC6xGPbE6cZhiEssdVKcDLtbwOUy1j4pPqJdhGYyuxbi1ma4LAfhZk2NrVlcTbvappSEucooZteOO2VHKonO89vB9hg%2BFue%2B4lvG5gbG9%2FB6dYRW5UTl%2BZNYJ1IYrqgdmZMlzd4%2BrxSCDzRiAX2XrbzXySpPRoVfeQi6cxGudnmZ2j3zurSTlPC70OSl3UpgVdvF0tbizhGcSgK39UsiDmnyhLMrsdp2xxvxZHjCG0p7EBjqkAXyjl8gjvnXE%2BVkQRBXzQGrWeRIpd94pMOM%2FWIVivzj7J%2FVLRVyK3ACnFWVNM551ZHQbPcQECzN%2FJSVGTNU7qRZFn7XkWSJnrIcWVbhMSGURNEQVc0SUPbl7L9B4vF1WHR3XZ5MWxGKz0h%2BbDdYd%2BPz%2BR2ONu9TbUVK6uy0M3TbU4SSRw443HmGMMM6rHfhGOec9fC9rUmlIGI%2BvFkICA3P%2FgAwk&X-Amz-Signature=9695269d4f8fa95ac8bf599b98c1348ad134de0f1f98caccc622b2963475f1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HO5IEW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDTX1YvNOkYayR2P1BaQzDyxLxP1yqnWly6Pu%2BJZ9wsfQIhAJ67CWIaZB8NLkF6Yt3%2Bci7pc1hEjLiI0WAMaLoyg9pnKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyAi5f9PvNnX8zDL8q3ANfv4siJV8mvX7G3X7Rh20EJG0xi8jIo5Gs17gcZfPABLSPVz%2FX1mGIaoqfYqlYzxqplyoHuVN5mRn63mvPHoJN%2FulC1Fp2uJvm1ICFm3mgb%2FpMv6%2BBB4%2FZPrg2FJ%2BEx62uHfNr2epJrLSzzFadPKD374Vd1pumdaegEfWLbm4SiRv3SwatWCWj986FfpNSuB%2FvHoWSmN%2F3%2BcA4vfhCM3798wupKpXfya6KoMa6i4W5Yz8Z6r9qZhzJAHFjGz%2FX3bUWYhKnzWDgmCmHgEKsUczQfeym%2FA%2Bo8iXssCYXRK737TCzG21dpRjOVuAApFMEFnDbV5etax34gx%2FtpnPfpHbd0ba2nc2vBmWb8fuCJ%2BczajqaUEP3KmS5kyy%2F0YZvcg3RYFHpkRjtat%2BmOzK5wKLPC6xGPbE6cZhiEssdVKcDLtbwOUy1j4pPqJdhGYyuxbi1ma4LAfhZk2NrVlcTbvappSEucooZteOO2VHKonO89vB9hg%2BFue%2B4lvG5gbG9%2FB6dYRW5UTl%2BZNYJ1IYrqgdmZMlzd4%2BrxSCDzRiAX2XrbzXySpPRoVfeQi6cxGudnmZ2j3zurSTlPC70OSl3UpgVdvF0tbizhGcSgK39UsiDmnyhLMrsdp2xxvxZHjCG0p7EBjqkAXyjl8gjvnXE%2BVkQRBXzQGrWeRIpd94pMOM%2FWIVivzj7J%2FVLRVyK3ACnFWVNM551ZHQbPcQECzN%2FJSVGTNU7qRZFn7XkWSJnrIcWVbhMSGURNEQVc0SUPbl7L9B4vF1WHR3XZ5MWxGKz0h%2BbDdYd%2BPz%2BR2ONu9TbUVK6uy0M3TbU4SSRw443HmGMMM6rHfhGOec9fC9rUmlIGI%2BvFkICA3P%2FgAwk&X-Amz-Signature=615377e5f1c09e8f97c014ea26660f083798cab586651894a9262144b6118933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HO5IEW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDTX1YvNOkYayR2P1BaQzDyxLxP1yqnWly6Pu%2BJZ9wsfQIhAJ67CWIaZB8NLkF6Yt3%2Bci7pc1hEjLiI0WAMaLoyg9pnKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyAi5f9PvNnX8zDL8q3ANfv4siJV8mvX7G3X7Rh20EJG0xi8jIo5Gs17gcZfPABLSPVz%2FX1mGIaoqfYqlYzxqplyoHuVN5mRn63mvPHoJN%2FulC1Fp2uJvm1ICFm3mgb%2FpMv6%2BBB4%2FZPrg2FJ%2BEx62uHfNr2epJrLSzzFadPKD374Vd1pumdaegEfWLbm4SiRv3SwatWCWj986FfpNSuB%2FvHoWSmN%2F3%2BcA4vfhCM3798wupKpXfya6KoMa6i4W5Yz8Z6r9qZhzJAHFjGz%2FX3bUWYhKnzWDgmCmHgEKsUczQfeym%2FA%2Bo8iXssCYXRK737TCzG21dpRjOVuAApFMEFnDbV5etax34gx%2FtpnPfpHbd0ba2nc2vBmWb8fuCJ%2BczajqaUEP3KmS5kyy%2F0YZvcg3RYFHpkRjtat%2BmOzK5wKLPC6xGPbE6cZhiEssdVKcDLtbwOUy1j4pPqJdhGYyuxbi1ma4LAfhZk2NrVlcTbvappSEucooZteOO2VHKonO89vB9hg%2BFue%2B4lvG5gbG9%2FB6dYRW5UTl%2BZNYJ1IYrqgdmZMlzd4%2BrxSCDzRiAX2XrbzXySpPRoVfeQi6cxGudnmZ2j3zurSTlPC70OSl3UpgVdvF0tbizhGcSgK39UsiDmnyhLMrsdp2xxvxZHjCG0p7EBjqkAXyjl8gjvnXE%2BVkQRBXzQGrWeRIpd94pMOM%2FWIVivzj7J%2FVLRVyK3ACnFWVNM551ZHQbPcQECzN%2FJSVGTNU7qRZFn7XkWSJnrIcWVbhMSGURNEQVc0SUPbl7L9B4vF1WHR3XZ5MWxGKz0h%2BbDdYd%2BPz%2BR2ONu9TbUVK6uy0M3TbU4SSRw443HmGMMM6rHfhGOec9fC9rUmlIGI%2BvFkICA3P%2FgAwk&X-Amz-Signature=490c092471319253d6c15b81896256e33bc06904d10cebf0e9b34b319e397a12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HO5IEW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDTX1YvNOkYayR2P1BaQzDyxLxP1yqnWly6Pu%2BJZ9wsfQIhAJ67CWIaZB8NLkF6Yt3%2Bci7pc1hEjLiI0WAMaLoyg9pnKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyAi5f9PvNnX8zDL8q3ANfv4siJV8mvX7G3X7Rh20EJG0xi8jIo5Gs17gcZfPABLSPVz%2FX1mGIaoqfYqlYzxqplyoHuVN5mRn63mvPHoJN%2FulC1Fp2uJvm1ICFm3mgb%2FpMv6%2BBB4%2FZPrg2FJ%2BEx62uHfNr2epJrLSzzFadPKD374Vd1pumdaegEfWLbm4SiRv3SwatWCWj986FfpNSuB%2FvHoWSmN%2F3%2BcA4vfhCM3798wupKpXfya6KoMa6i4W5Yz8Z6r9qZhzJAHFjGz%2FX3bUWYhKnzWDgmCmHgEKsUczQfeym%2FA%2Bo8iXssCYXRK737TCzG21dpRjOVuAApFMEFnDbV5etax34gx%2FtpnPfpHbd0ba2nc2vBmWb8fuCJ%2BczajqaUEP3KmS5kyy%2F0YZvcg3RYFHpkRjtat%2BmOzK5wKLPC6xGPbE6cZhiEssdVKcDLtbwOUy1j4pPqJdhGYyuxbi1ma4LAfhZk2NrVlcTbvappSEucooZteOO2VHKonO89vB9hg%2BFue%2B4lvG5gbG9%2FB6dYRW5UTl%2BZNYJ1IYrqgdmZMlzd4%2BrxSCDzRiAX2XrbzXySpPRoVfeQi6cxGudnmZ2j3zurSTlPC70OSl3UpgVdvF0tbizhGcSgK39UsiDmnyhLMrsdp2xxvxZHjCG0p7EBjqkAXyjl8gjvnXE%2BVkQRBXzQGrWeRIpd94pMOM%2FWIVivzj7J%2FVLRVyK3ACnFWVNM551ZHQbPcQECzN%2FJSVGTNU7qRZFn7XkWSJnrIcWVbhMSGURNEQVc0SUPbl7L9B4vF1WHR3XZ5MWxGKz0h%2BbDdYd%2BPz%2BR2ONu9TbUVK6uy0M3TbU4SSRw443HmGMMM6rHfhGOec9fC9rUmlIGI%2BvFkICA3P%2FgAwk&X-Amz-Signature=c873d16596655ea16797f68280588c4cf25b610578258cffcc6005b1e9302009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
