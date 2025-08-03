---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T23:19:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T23:19:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIYSNBX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaV9vyp8bwARtjBuh9%2BImpgFfJwjWSDPKm3fq1yoh3QIgEq3UulIpTd5VFc31M8F8DaQN5NQZf1niM9DN0%2BDT%2Fo0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJi%2BxDaQNhFaNLVYjCrcA3bcAsl8gVtE09tB0CdxqW0wR60ilxuaLq5L6owGwIVoT1A%2BZiUt39nhY%2BUGAA6bBi%2FD7xMwMoq9ld3dnIiQnx16pV8%2BvRgXd3KkOuQH841RpgQ4DtXb%2BkxaC68uSDGwsCivi9zVXlr6MHVuguL9n8aA5RAw8yxhNS37DozzvF6airtFNw0jalyib9hD8KSonkDaI%2FW2nFkIONjCEwldAI2ivEjfNrLCkzG3nscYc%2FKWkAij0vBaQOtaE5gul7OU0sdZWjT9aIGHDfKXDLStX%2FLfqfH0DERNDKICQ%2Bm7n4af4lhUvcSqN7DxOCysUh1kMEcY4FGhobsR69UPMzQssLmvdD3HR6czafMCHNYjZGqi7zzJ%2FP8gXjPxkznLMUI%2FDaGAx9Gou9ralyPAs%2F7WQJY7o5jL29qCDVX%2FX6xPGO9CZu2Df0I8HCbHMsdEt%2BhIVcYpMYxUEsdwDDO7OUCtrp7mhvappF8A8hdbonGMmR5UNvuFBZnxL7hk1ZWgcVQ1ITL1tBTP9GDpcI7aIsYir%2BO3124PC97xN4WG1pn2wmpMnzv0PgYoyVwLURC7dEDQDQDwKeNx8PpuhPBlElbHuUeFD8DeRFLxcUVfKWrU5GMobGfN7fAxTn8rnARyMMKju8QGOqUBtKj1M3EloiXdezPDcObuFRYPj%2BNu%2BMvWuLQa70WUqNE%2B45JPAEkkd5uc0RA9WYws%2FKpherrxo7Av6SN44Pa2NfOh6dZ%2BB73zNe5Jh5K75A2%2BzWUYTf8i0egy49SIzFJ%2Bfzk7rFYRhX%2FYkm%2FFTinlhNo%2FNIyvtlq1qlalHoZn9e2fhymb1jxUUQktxPGc1WPlShai9srQRKNrUfd06HjiQawr0Zx4&X-Amz-Signature=927acfe3687e596af293dae3718a73769ce9f104e64524068ca2bf2bf7883da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIYSNBX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaV9vyp8bwARtjBuh9%2BImpgFfJwjWSDPKm3fq1yoh3QIgEq3UulIpTd5VFc31M8F8DaQN5NQZf1niM9DN0%2BDT%2Fo0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJi%2BxDaQNhFaNLVYjCrcA3bcAsl8gVtE09tB0CdxqW0wR60ilxuaLq5L6owGwIVoT1A%2BZiUt39nhY%2BUGAA6bBi%2FD7xMwMoq9ld3dnIiQnx16pV8%2BvRgXd3KkOuQH841RpgQ4DtXb%2BkxaC68uSDGwsCivi9zVXlr6MHVuguL9n8aA5RAw8yxhNS37DozzvF6airtFNw0jalyib9hD8KSonkDaI%2FW2nFkIONjCEwldAI2ivEjfNrLCkzG3nscYc%2FKWkAij0vBaQOtaE5gul7OU0sdZWjT9aIGHDfKXDLStX%2FLfqfH0DERNDKICQ%2Bm7n4af4lhUvcSqN7DxOCysUh1kMEcY4FGhobsR69UPMzQssLmvdD3HR6czafMCHNYjZGqi7zzJ%2FP8gXjPxkznLMUI%2FDaGAx9Gou9ralyPAs%2F7WQJY7o5jL29qCDVX%2FX6xPGO9CZu2Df0I8HCbHMsdEt%2BhIVcYpMYxUEsdwDDO7OUCtrp7mhvappF8A8hdbonGMmR5UNvuFBZnxL7hk1ZWgcVQ1ITL1tBTP9GDpcI7aIsYir%2BO3124PC97xN4WG1pn2wmpMnzv0PgYoyVwLURC7dEDQDQDwKeNx8PpuhPBlElbHuUeFD8DeRFLxcUVfKWrU5GMobGfN7fAxTn8rnARyMMKju8QGOqUBtKj1M3EloiXdezPDcObuFRYPj%2BNu%2BMvWuLQa70WUqNE%2B45JPAEkkd5uc0RA9WYws%2FKpherrxo7Av6SN44Pa2NfOh6dZ%2BB73zNe5Jh5K75A2%2BzWUYTf8i0egy49SIzFJ%2Bfzk7rFYRhX%2FYkm%2FFTinlhNo%2FNIyvtlq1qlalHoZn9e2fhymb1jxUUQktxPGc1WPlShai9srQRKNrUfd06HjiQawr0Zx4&X-Amz-Signature=9ad29de97645fa9374958a182b74653cc4c2744c7286d38a0adbd60299f247fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIYSNBX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaV9vyp8bwARtjBuh9%2BImpgFfJwjWSDPKm3fq1yoh3QIgEq3UulIpTd5VFc31M8F8DaQN5NQZf1niM9DN0%2BDT%2Fo0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJi%2BxDaQNhFaNLVYjCrcA3bcAsl8gVtE09tB0CdxqW0wR60ilxuaLq5L6owGwIVoT1A%2BZiUt39nhY%2BUGAA6bBi%2FD7xMwMoq9ld3dnIiQnx16pV8%2BvRgXd3KkOuQH841RpgQ4DtXb%2BkxaC68uSDGwsCivi9zVXlr6MHVuguL9n8aA5RAw8yxhNS37DozzvF6airtFNw0jalyib9hD8KSonkDaI%2FW2nFkIONjCEwldAI2ivEjfNrLCkzG3nscYc%2FKWkAij0vBaQOtaE5gul7OU0sdZWjT9aIGHDfKXDLStX%2FLfqfH0DERNDKICQ%2Bm7n4af4lhUvcSqN7DxOCysUh1kMEcY4FGhobsR69UPMzQssLmvdD3HR6czafMCHNYjZGqi7zzJ%2FP8gXjPxkznLMUI%2FDaGAx9Gou9ralyPAs%2F7WQJY7o5jL29qCDVX%2FX6xPGO9CZu2Df0I8HCbHMsdEt%2BhIVcYpMYxUEsdwDDO7OUCtrp7mhvappF8A8hdbonGMmR5UNvuFBZnxL7hk1ZWgcVQ1ITL1tBTP9GDpcI7aIsYir%2BO3124PC97xN4WG1pn2wmpMnzv0PgYoyVwLURC7dEDQDQDwKeNx8PpuhPBlElbHuUeFD8DeRFLxcUVfKWrU5GMobGfN7fAxTn8rnARyMMKju8QGOqUBtKj1M3EloiXdezPDcObuFRYPj%2BNu%2BMvWuLQa70WUqNE%2B45JPAEkkd5uc0RA9WYws%2FKpherrxo7Av6SN44Pa2NfOh6dZ%2BB73zNe5Jh5K75A2%2BzWUYTf8i0egy49SIzFJ%2Bfzk7rFYRhX%2FYkm%2FFTinlhNo%2FNIyvtlq1qlalHoZn9e2fhymb1jxUUQktxPGc1WPlShai9srQRKNrUfd06HjiQawr0Zx4&X-Amz-Signature=f129d7f44889e112b4cb3874aaabe255bf8aa88029583eb2f870e11b5c2b5267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIYSNBX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaV9vyp8bwARtjBuh9%2BImpgFfJwjWSDPKm3fq1yoh3QIgEq3UulIpTd5VFc31M8F8DaQN5NQZf1niM9DN0%2BDT%2Fo0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJi%2BxDaQNhFaNLVYjCrcA3bcAsl8gVtE09tB0CdxqW0wR60ilxuaLq5L6owGwIVoT1A%2BZiUt39nhY%2BUGAA6bBi%2FD7xMwMoq9ld3dnIiQnx16pV8%2BvRgXd3KkOuQH841RpgQ4DtXb%2BkxaC68uSDGwsCivi9zVXlr6MHVuguL9n8aA5RAw8yxhNS37DozzvF6airtFNw0jalyib9hD8KSonkDaI%2FW2nFkIONjCEwldAI2ivEjfNrLCkzG3nscYc%2FKWkAij0vBaQOtaE5gul7OU0sdZWjT9aIGHDfKXDLStX%2FLfqfH0DERNDKICQ%2Bm7n4af4lhUvcSqN7DxOCysUh1kMEcY4FGhobsR69UPMzQssLmvdD3HR6czafMCHNYjZGqi7zzJ%2FP8gXjPxkznLMUI%2FDaGAx9Gou9ralyPAs%2F7WQJY7o5jL29qCDVX%2FX6xPGO9CZu2Df0I8HCbHMsdEt%2BhIVcYpMYxUEsdwDDO7OUCtrp7mhvappF8A8hdbonGMmR5UNvuFBZnxL7hk1ZWgcVQ1ITL1tBTP9GDpcI7aIsYir%2BO3124PC97xN4WG1pn2wmpMnzv0PgYoyVwLURC7dEDQDQDwKeNx8PpuhPBlElbHuUeFD8DeRFLxcUVfKWrU5GMobGfN7fAxTn8rnARyMMKju8QGOqUBtKj1M3EloiXdezPDcObuFRYPj%2BNu%2BMvWuLQa70WUqNE%2B45JPAEkkd5uc0RA9WYws%2FKpherrxo7Av6SN44Pa2NfOh6dZ%2BB73zNe5Jh5K75A2%2BzWUYTf8i0egy49SIzFJ%2Bfzk7rFYRhX%2FYkm%2FFTinlhNo%2FNIyvtlq1qlalHoZn9e2fhymb1jxUUQktxPGc1WPlShai9srQRKNrUfd06HjiQawr0Zx4&X-Amz-Signature=116da9751b81c6d83e3419697391e07e264c063209d9f953f294c4bf87758faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIYSNBX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaV9vyp8bwARtjBuh9%2BImpgFfJwjWSDPKm3fq1yoh3QIgEq3UulIpTd5VFc31M8F8DaQN5NQZf1niM9DN0%2BDT%2Fo0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJi%2BxDaQNhFaNLVYjCrcA3bcAsl8gVtE09tB0CdxqW0wR60ilxuaLq5L6owGwIVoT1A%2BZiUt39nhY%2BUGAA6bBi%2FD7xMwMoq9ld3dnIiQnx16pV8%2BvRgXd3KkOuQH841RpgQ4DtXb%2BkxaC68uSDGwsCivi9zVXlr6MHVuguL9n8aA5RAw8yxhNS37DozzvF6airtFNw0jalyib9hD8KSonkDaI%2FW2nFkIONjCEwldAI2ivEjfNrLCkzG3nscYc%2FKWkAij0vBaQOtaE5gul7OU0sdZWjT9aIGHDfKXDLStX%2FLfqfH0DERNDKICQ%2Bm7n4af4lhUvcSqN7DxOCysUh1kMEcY4FGhobsR69UPMzQssLmvdD3HR6czafMCHNYjZGqi7zzJ%2FP8gXjPxkznLMUI%2FDaGAx9Gou9ralyPAs%2F7WQJY7o5jL29qCDVX%2FX6xPGO9CZu2Df0I8HCbHMsdEt%2BhIVcYpMYxUEsdwDDO7OUCtrp7mhvappF8A8hdbonGMmR5UNvuFBZnxL7hk1ZWgcVQ1ITL1tBTP9GDpcI7aIsYir%2BO3124PC97xN4WG1pn2wmpMnzv0PgYoyVwLURC7dEDQDQDwKeNx8PpuhPBlElbHuUeFD8DeRFLxcUVfKWrU5GMobGfN7fAxTn8rnARyMMKju8QGOqUBtKj1M3EloiXdezPDcObuFRYPj%2BNu%2BMvWuLQa70WUqNE%2B45JPAEkkd5uc0RA9WYws%2FKpherrxo7Av6SN44Pa2NfOh6dZ%2BB73zNe5Jh5K75A2%2BzWUYTf8i0egy49SIzFJ%2Bfzk7rFYRhX%2FYkm%2FFTinlhNo%2FNIyvtlq1qlalHoZn9e2fhymb1jxUUQktxPGc1WPlShai9srQRKNrUfd06HjiQawr0Zx4&X-Amz-Signature=5c5c7bac264f8a754229873aeaff77621b6485802f45533f299a478282d1ca53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIYSNBX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaV9vyp8bwARtjBuh9%2BImpgFfJwjWSDPKm3fq1yoh3QIgEq3UulIpTd5VFc31M8F8DaQN5NQZf1niM9DN0%2BDT%2Fo0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJi%2BxDaQNhFaNLVYjCrcA3bcAsl8gVtE09tB0CdxqW0wR60ilxuaLq5L6owGwIVoT1A%2BZiUt39nhY%2BUGAA6bBi%2FD7xMwMoq9ld3dnIiQnx16pV8%2BvRgXd3KkOuQH841RpgQ4DtXb%2BkxaC68uSDGwsCivi9zVXlr6MHVuguL9n8aA5RAw8yxhNS37DozzvF6airtFNw0jalyib9hD8KSonkDaI%2FW2nFkIONjCEwldAI2ivEjfNrLCkzG3nscYc%2FKWkAij0vBaQOtaE5gul7OU0sdZWjT9aIGHDfKXDLStX%2FLfqfH0DERNDKICQ%2Bm7n4af4lhUvcSqN7DxOCysUh1kMEcY4FGhobsR69UPMzQssLmvdD3HR6czafMCHNYjZGqi7zzJ%2FP8gXjPxkznLMUI%2FDaGAx9Gou9ralyPAs%2F7WQJY7o5jL29qCDVX%2FX6xPGO9CZu2Df0I8HCbHMsdEt%2BhIVcYpMYxUEsdwDDO7OUCtrp7mhvappF8A8hdbonGMmR5UNvuFBZnxL7hk1ZWgcVQ1ITL1tBTP9GDpcI7aIsYir%2BO3124PC97xN4WG1pn2wmpMnzv0PgYoyVwLURC7dEDQDQDwKeNx8PpuhPBlElbHuUeFD8DeRFLxcUVfKWrU5GMobGfN7fAxTn8rnARyMMKju8QGOqUBtKj1M3EloiXdezPDcObuFRYPj%2BNu%2BMvWuLQa70WUqNE%2B45JPAEkkd5uc0RA9WYws%2FKpherrxo7Av6SN44Pa2NfOh6dZ%2BB73zNe5Jh5K75A2%2BzWUYTf8i0egy49SIzFJ%2Bfzk7rFYRhX%2FYkm%2FFTinlhNo%2FNIyvtlq1qlalHoZn9e2fhymb1jxUUQktxPGc1WPlShai9srQRKNrUfd06HjiQawr0Zx4&X-Amz-Signature=76f43a166a42abc352d3e010572745afdc522e2749defeda32f94689367f19e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIYSNBX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaV9vyp8bwARtjBuh9%2BImpgFfJwjWSDPKm3fq1yoh3QIgEq3UulIpTd5VFc31M8F8DaQN5NQZf1niM9DN0%2BDT%2Fo0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJi%2BxDaQNhFaNLVYjCrcA3bcAsl8gVtE09tB0CdxqW0wR60ilxuaLq5L6owGwIVoT1A%2BZiUt39nhY%2BUGAA6bBi%2FD7xMwMoq9ld3dnIiQnx16pV8%2BvRgXd3KkOuQH841RpgQ4DtXb%2BkxaC68uSDGwsCivi9zVXlr6MHVuguL9n8aA5RAw8yxhNS37DozzvF6airtFNw0jalyib9hD8KSonkDaI%2FW2nFkIONjCEwldAI2ivEjfNrLCkzG3nscYc%2FKWkAij0vBaQOtaE5gul7OU0sdZWjT9aIGHDfKXDLStX%2FLfqfH0DERNDKICQ%2Bm7n4af4lhUvcSqN7DxOCysUh1kMEcY4FGhobsR69UPMzQssLmvdD3HR6czafMCHNYjZGqi7zzJ%2FP8gXjPxkznLMUI%2FDaGAx9Gou9ralyPAs%2F7WQJY7o5jL29qCDVX%2FX6xPGO9CZu2Df0I8HCbHMsdEt%2BhIVcYpMYxUEsdwDDO7OUCtrp7mhvappF8A8hdbonGMmR5UNvuFBZnxL7hk1ZWgcVQ1ITL1tBTP9GDpcI7aIsYir%2BO3124PC97xN4WG1pn2wmpMnzv0PgYoyVwLURC7dEDQDQDwKeNx8PpuhPBlElbHuUeFD8DeRFLxcUVfKWrU5GMobGfN7fAxTn8rnARyMMKju8QGOqUBtKj1M3EloiXdezPDcObuFRYPj%2BNu%2BMvWuLQa70WUqNE%2B45JPAEkkd5uc0RA9WYws%2FKpherrxo7Av6SN44Pa2NfOh6dZ%2BB73zNe5Jh5K75A2%2BzWUYTf8i0egy49SIzFJ%2Bfzk7rFYRhX%2FYkm%2FFTinlhNo%2FNIyvtlq1qlalHoZn9e2fhymb1jxUUQktxPGc1WPlShai9srQRKNrUfd06HjiQawr0Zx4&X-Amz-Signature=5fdeba0b57ce9c0b415510e4dc359eeb2d0abd9cd12ff266fdccb6da6f7b52c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIYSNBX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaV9vyp8bwARtjBuh9%2BImpgFfJwjWSDPKm3fq1yoh3QIgEq3UulIpTd5VFc31M8F8DaQN5NQZf1niM9DN0%2BDT%2Fo0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJi%2BxDaQNhFaNLVYjCrcA3bcAsl8gVtE09tB0CdxqW0wR60ilxuaLq5L6owGwIVoT1A%2BZiUt39nhY%2BUGAA6bBi%2FD7xMwMoq9ld3dnIiQnx16pV8%2BvRgXd3KkOuQH841RpgQ4DtXb%2BkxaC68uSDGwsCivi9zVXlr6MHVuguL9n8aA5RAw8yxhNS37DozzvF6airtFNw0jalyib9hD8KSonkDaI%2FW2nFkIONjCEwldAI2ivEjfNrLCkzG3nscYc%2FKWkAij0vBaQOtaE5gul7OU0sdZWjT9aIGHDfKXDLStX%2FLfqfH0DERNDKICQ%2Bm7n4af4lhUvcSqN7DxOCysUh1kMEcY4FGhobsR69UPMzQssLmvdD3HR6czafMCHNYjZGqi7zzJ%2FP8gXjPxkznLMUI%2FDaGAx9Gou9ralyPAs%2F7WQJY7o5jL29qCDVX%2FX6xPGO9CZu2Df0I8HCbHMsdEt%2BhIVcYpMYxUEsdwDDO7OUCtrp7mhvappF8A8hdbonGMmR5UNvuFBZnxL7hk1ZWgcVQ1ITL1tBTP9GDpcI7aIsYir%2BO3124PC97xN4WG1pn2wmpMnzv0PgYoyVwLURC7dEDQDQDwKeNx8PpuhPBlElbHuUeFD8DeRFLxcUVfKWrU5GMobGfN7fAxTn8rnARyMMKju8QGOqUBtKj1M3EloiXdezPDcObuFRYPj%2BNu%2BMvWuLQa70WUqNE%2B45JPAEkkd5uc0RA9WYws%2FKpherrxo7Av6SN44Pa2NfOh6dZ%2BB73zNe5Jh5K75A2%2BzWUYTf8i0egy49SIzFJ%2Bfzk7rFYRhX%2FYkm%2FFTinlhNo%2FNIyvtlq1qlalHoZn9e2fhymb1jxUUQktxPGc1WPlShai9srQRKNrUfd06HjiQawr0Zx4&X-Amz-Signature=fe1c3c35dcba49afae9a7ae1da125f2856986a8424e75d277875bd1be98b7675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIYSNBX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaV9vyp8bwARtjBuh9%2BImpgFfJwjWSDPKm3fq1yoh3QIgEq3UulIpTd5VFc31M8F8DaQN5NQZf1niM9DN0%2BDT%2Fo0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJi%2BxDaQNhFaNLVYjCrcA3bcAsl8gVtE09tB0CdxqW0wR60ilxuaLq5L6owGwIVoT1A%2BZiUt39nhY%2BUGAA6bBi%2FD7xMwMoq9ld3dnIiQnx16pV8%2BvRgXd3KkOuQH841RpgQ4DtXb%2BkxaC68uSDGwsCivi9zVXlr6MHVuguL9n8aA5RAw8yxhNS37DozzvF6airtFNw0jalyib9hD8KSonkDaI%2FW2nFkIONjCEwldAI2ivEjfNrLCkzG3nscYc%2FKWkAij0vBaQOtaE5gul7OU0sdZWjT9aIGHDfKXDLStX%2FLfqfH0DERNDKICQ%2Bm7n4af4lhUvcSqN7DxOCysUh1kMEcY4FGhobsR69UPMzQssLmvdD3HR6czafMCHNYjZGqi7zzJ%2FP8gXjPxkznLMUI%2FDaGAx9Gou9ralyPAs%2F7WQJY7o5jL29qCDVX%2FX6xPGO9CZu2Df0I8HCbHMsdEt%2BhIVcYpMYxUEsdwDDO7OUCtrp7mhvappF8A8hdbonGMmR5UNvuFBZnxL7hk1ZWgcVQ1ITL1tBTP9GDpcI7aIsYir%2BO3124PC97xN4WG1pn2wmpMnzv0PgYoyVwLURC7dEDQDQDwKeNx8PpuhPBlElbHuUeFD8DeRFLxcUVfKWrU5GMobGfN7fAxTn8rnARyMMKju8QGOqUBtKj1M3EloiXdezPDcObuFRYPj%2BNu%2BMvWuLQa70WUqNE%2B45JPAEkkd5uc0RA9WYws%2FKpherrxo7Av6SN44Pa2NfOh6dZ%2BB73zNe5Jh5K75A2%2BzWUYTf8i0egy49SIzFJ%2Bfzk7rFYRhX%2FYkm%2FFTinlhNo%2FNIyvtlq1qlalHoZn9e2fhymb1jxUUQktxPGc1WPlShai9srQRKNrUfd06HjiQawr0Zx4&X-Amz-Signature=2e4cffe2fa30558d3bf07db676cb2ff90b0974c0d0b5c0133500b75912b095cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIYSNBX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaV9vyp8bwARtjBuh9%2BImpgFfJwjWSDPKm3fq1yoh3QIgEq3UulIpTd5VFc31M8F8DaQN5NQZf1niM9DN0%2BDT%2Fo0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJi%2BxDaQNhFaNLVYjCrcA3bcAsl8gVtE09tB0CdxqW0wR60ilxuaLq5L6owGwIVoT1A%2BZiUt39nhY%2BUGAA6bBi%2FD7xMwMoq9ld3dnIiQnx16pV8%2BvRgXd3KkOuQH841RpgQ4DtXb%2BkxaC68uSDGwsCivi9zVXlr6MHVuguL9n8aA5RAw8yxhNS37DozzvF6airtFNw0jalyib9hD8KSonkDaI%2FW2nFkIONjCEwldAI2ivEjfNrLCkzG3nscYc%2FKWkAij0vBaQOtaE5gul7OU0sdZWjT9aIGHDfKXDLStX%2FLfqfH0DERNDKICQ%2Bm7n4af4lhUvcSqN7DxOCysUh1kMEcY4FGhobsR69UPMzQssLmvdD3HR6czafMCHNYjZGqi7zzJ%2FP8gXjPxkznLMUI%2FDaGAx9Gou9ralyPAs%2F7WQJY7o5jL29qCDVX%2FX6xPGO9CZu2Df0I8HCbHMsdEt%2BhIVcYpMYxUEsdwDDO7OUCtrp7mhvappF8A8hdbonGMmR5UNvuFBZnxL7hk1ZWgcVQ1ITL1tBTP9GDpcI7aIsYir%2BO3124PC97xN4WG1pn2wmpMnzv0PgYoyVwLURC7dEDQDQDwKeNx8PpuhPBlElbHuUeFD8DeRFLxcUVfKWrU5GMobGfN7fAxTn8rnARyMMKju8QGOqUBtKj1M3EloiXdezPDcObuFRYPj%2BNu%2BMvWuLQa70WUqNE%2B45JPAEkkd5uc0RA9WYws%2FKpherrxo7Av6SN44Pa2NfOh6dZ%2BB73zNe5Jh5K75A2%2BzWUYTf8i0egy49SIzFJ%2Bfzk7rFYRhX%2FYkm%2FFTinlhNo%2FNIyvtlq1qlalHoZn9e2fhymb1jxUUQktxPGc1WPlShai9srQRKNrUfd06HjiQawr0Zx4&X-Amz-Signature=735e6f1bdfb396b2a7b7efe819c92fe16ee3d98a36eaa60fccdb8ea9de4434a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V56JGZIH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKsYg6Dj6OP0K6gUu1H5dlvoZRzM5sjsE%2B%2BVOliwm9yQIgXM4GZXXuPTSI3BiBvnsdoxOPoRWQYu9I00YINUr2VS8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKiBfDZKbIXNC5ZbcyrcA5R825YdoGelyl1bErJu2oLgIB7JIn1fnecEKB%2FUNE%2FmWfLsDabMBNYbl3l0d1%2BxxwnwfzLYZCAkfbCzC08I6hFQZVMcW0nJ%2F2DoZqZSmRbmZsrZXPbLF5RtSsloMPR5qGLQxfGxkdwP0RidfZ2J45xyt%2F4TOPmHMqYGhCjo8FzpE5B1gmuZfn3ovC%2FyihwhczeDS5ZOVcmrj0Imlz2%2FegtpTBD%2Fk603A4nPaCsCeSs8IiIp1tRPJeP4BDEca4oyF0qjlYR6Gw7fhN60l%2Fcghm0pKLWUPwYlKjOo71p0y%2FnumKb%2Fns4gb2bfYcVHoVTOyab4137n6TkdW64jV2d5W18sqE3CcSX4CQC4nygyrymVIjoDM7BzxpGgtKGdHVVI%2BXJiWMS3ZLQgMVA3XauW1q9VasjBgzSXCusoF6CbGivkLN07mSvt%2B4F7nYkiz4vzqLgds%2FZ5%2BGtyDn2UjRkJAVyqAX4s0eHGVt8pZVxHb5%2FfBKlia0b68Jl9eGjee0DR%2FPNNStBSL5Oag3Dac1go0VSZcqvDZdpTtH4nnxfM%2FW5YNdE3n9gIFWP%2FP2w8TWJqhtQW7FH1lM3Nc9piBSGJSifey%2FAfnGTTQPV0%2BoCl2QCKrTTr8EeS02oKEKJhMKeiu8QGOqUBSgH3Q0I0rjKFBhU5Tx5yBwVYZCOHtt8GV%2BVdZeec7NQIIMco96Z1U8aLpSWzJhJv2ueVgBgPqfDa9MavYqUPrRdfZuolJ3jOrvdR8D9wgxAn64N07gbD7ScA9AWTPoQ7SOHOBfTsqYC7%2FVOaQ7JDRa86mmio1UD5DkZA5d51pZZFKNqGWAHx6rRwxITYQLdf9QRBSBaFv0C8w6K9cLB7cXMjf1vk&X-Amz-Signature=4e29da00f1a1dcd477b01169f7fe1b38cf2a5b0b2793d256fa33331918314888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIYSNBX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaV9vyp8bwARtjBuh9%2BImpgFfJwjWSDPKm3fq1yoh3QIgEq3UulIpTd5VFc31M8F8DaQN5NQZf1niM9DN0%2BDT%2Fo0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJi%2BxDaQNhFaNLVYjCrcA3bcAsl8gVtE09tB0CdxqW0wR60ilxuaLq5L6owGwIVoT1A%2BZiUt39nhY%2BUGAA6bBi%2FD7xMwMoq9ld3dnIiQnx16pV8%2BvRgXd3KkOuQH841RpgQ4DtXb%2BkxaC68uSDGwsCivi9zVXlr6MHVuguL9n8aA5RAw8yxhNS37DozzvF6airtFNw0jalyib9hD8KSonkDaI%2FW2nFkIONjCEwldAI2ivEjfNrLCkzG3nscYc%2FKWkAij0vBaQOtaE5gul7OU0sdZWjT9aIGHDfKXDLStX%2FLfqfH0DERNDKICQ%2Bm7n4af4lhUvcSqN7DxOCysUh1kMEcY4FGhobsR69UPMzQssLmvdD3HR6czafMCHNYjZGqi7zzJ%2FP8gXjPxkznLMUI%2FDaGAx9Gou9ralyPAs%2F7WQJY7o5jL29qCDVX%2FX6xPGO9CZu2Df0I8HCbHMsdEt%2BhIVcYpMYxUEsdwDDO7OUCtrp7mhvappF8A8hdbonGMmR5UNvuFBZnxL7hk1ZWgcVQ1ITL1tBTP9GDpcI7aIsYir%2BO3124PC97xN4WG1pn2wmpMnzv0PgYoyVwLURC7dEDQDQDwKeNx8PpuhPBlElbHuUeFD8DeRFLxcUVfKWrU5GMobGfN7fAxTn8rnARyMMKju8QGOqUBtKj1M3EloiXdezPDcObuFRYPj%2BNu%2BMvWuLQa70WUqNE%2B45JPAEkkd5uc0RA9WYws%2FKpherrxo7Av6SN44Pa2NfOh6dZ%2BB73zNe5Jh5K75A2%2BzWUYTf8i0egy49SIzFJ%2Bfzk7rFYRhX%2FYkm%2FFTinlhNo%2FNIyvtlq1qlalHoZn9e2fhymb1jxUUQktxPGc1WPlShai9srQRKNrUfd06HjiQawr0Zx4&X-Amz-Signature=e4aed633e128cbec7e7ac2f568aa373fb72024a349cdc3716630a7e0f4829ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEOLVT6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FiQO4vZvtsV3iWHmTe0CgxNEWNuKLSkE%2BsWwu7AgF4wIhAMe8rV2ppnkwQPrKPIl2eA%2BrjBGUD6WX8MCEdnI9Z3%2BpKv8DCCQQABoMNjM3NDIzMTgzODA1IgwQNMbeCntBsG8wabQq3ANiTKUZNP4pdKSJrUXZS0Zu%2Fncg35WzbJjtD0llipqhiEBYazHfXKjHubSD8xxmpHwGOz46HKJf1a4j3RxNQMO5WRinRpAsLOaSh%2FbPUbZJPe8YXM4d2qO%2BaWKKPdnjqirJijOhHyGrBkLDb%2BRreO5fT7Jla5muZkhfUDavSmgfSpWRGGAUoE2X57KiwsfdKzCpV6TrhM0kQ4suC5Nm2DqXzSMdIE2h5Z3vR8RyU7pYCJkiLrN4DnLOFemDMvnWNrlnK%2FhiJ3YtZgjW5GI%2BCPxMSbtnrlx7QOlOg%2F6ePPixDNskjnJDVVvWjlujVBWjjyKgllo0d2PczChj81cW5GNQoBfgxHTVT%2F40JLunVO8cPqOROZU%2FRsWUNDHuqrOAPOq4KjE%2FhfCMQOa0gg1b2yN0i5%2F1qlUizIpbjdzgY9mN9792MpWm%2FqFyyDJs6K9OfMfJyhdK2eq%2Bo7Gx%2BtrFv7%2FWKnh4g9wIUl07pY5nxGWUCFRdFTunJ2fTQOq26OYHgAZkAtQGhxDpif90O6JOLrVuA8JkSNPHm6X6Gk8FfnX2ZqI5%2BBNoGXP56EUzdcguHWmFIW0ACwut8ALV9J3MFwM61cBMjXUMFzcbRX4nhJBgNZyV93AQdiECWPvUsDCGo7vEBjqkAT3AjZddBTTVhcn8ERlqgg5IX56Xxrc%2FokE1GSuMIiwauu7jPQM7nIiNZBDqwFfHl0oLNVN7iB28aWxLM3ukWHxGRIzYUebleB4TIICOgtN91JoAX5%2FC50yl596nu80IVJQh9QJ7%2BeW3AvKw55J9qZ%2Fj1KUHyRH7CpQANKrwFPW7kGhja6Rg3ivU%2BwJ%2Fc10kLCF2U1aD4NR8bv7SQs8zc2WLzoV0&X-Amz-Signature=d81370eab6bf7f912f552c0acf047abc5d23c1d1f4d172162d4f3c0fa21f129a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEOLVT6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FiQO4vZvtsV3iWHmTe0CgxNEWNuKLSkE%2BsWwu7AgF4wIhAMe8rV2ppnkwQPrKPIl2eA%2BrjBGUD6WX8MCEdnI9Z3%2BpKv8DCCQQABoMNjM3NDIzMTgzODA1IgwQNMbeCntBsG8wabQq3ANiTKUZNP4pdKSJrUXZS0Zu%2Fncg35WzbJjtD0llipqhiEBYazHfXKjHubSD8xxmpHwGOz46HKJf1a4j3RxNQMO5WRinRpAsLOaSh%2FbPUbZJPe8YXM4d2qO%2BaWKKPdnjqirJijOhHyGrBkLDb%2BRreO5fT7Jla5muZkhfUDavSmgfSpWRGGAUoE2X57KiwsfdKzCpV6TrhM0kQ4suC5Nm2DqXzSMdIE2h5Z3vR8RyU7pYCJkiLrN4DnLOFemDMvnWNrlnK%2FhiJ3YtZgjW5GI%2BCPxMSbtnrlx7QOlOg%2F6ePPixDNskjnJDVVvWjlujVBWjjyKgllo0d2PczChj81cW5GNQoBfgxHTVT%2F40JLunVO8cPqOROZU%2FRsWUNDHuqrOAPOq4KjE%2FhfCMQOa0gg1b2yN0i5%2F1qlUizIpbjdzgY9mN9792MpWm%2FqFyyDJs6K9OfMfJyhdK2eq%2Bo7Gx%2BtrFv7%2FWKnh4g9wIUl07pY5nxGWUCFRdFTunJ2fTQOq26OYHgAZkAtQGhxDpif90O6JOLrVuA8JkSNPHm6X6Gk8FfnX2ZqI5%2BBNoGXP56EUzdcguHWmFIW0ACwut8ALV9J3MFwM61cBMjXUMFzcbRX4nhJBgNZyV93AQdiECWPvUsDCGo7vEBjqkAT3AjZddBTTVhcn8ERlqgg5IX56Xxrc%2FokE1GSuMIiwauu7jPQM7nIiNZBDqwFfHl0oLNVN7iB28aWxLM3ukWHxGRIzYUebleB4TIICOgtN91JoAX5%2FC50yl596nu80IVJQh9QJ7%2BeW3AvKw55J9qZ%2Fj1KUHyRH7CpQANKrwFPW7kGhja6Rg3ivU%2BwJ%2Fc10kLCF2U1aD4NR8bv7SQs8zc2WLzoV0&X-Amz-Signature=54d2f570bfb451f7e52cacb675fa1dcbe610e355dc12a1e60d578151fe3fd47e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEOLVT6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FiQO4vZvtsV3iWHmTe0CgxNEWNuKLSkE%2BsWwu7AgF4wIhAMe8rV2ppnkwQPrKPIl2eA%2BrjBGUD6WX8MCEdnI9Z3%2BpKv8DCCQQABoMNjM3NDIzMTgzODA1IgwQNMbeCntBsG8wabQq3ANiTKUZNP4pdKSJrUXZS0Zu%2Fncg35WzbJjtD0llipqhiEBYazHfXKjHubSD8xxmpHwGOz46HKJf1a4j3RxNQMO5WRinRpAsLOaSh%2FbPUbZJPe8YXM4d2qO%2BaWKKPdnjqirJijOhHyGrBkLDb%2BRreO5fT7Jla5muZkhfUDavSmgfSpWRGGAUoE2X57KiwsfdKzCpV6TrhM0kQ4suC5Nm2DqXzSMdIE2h5Z3vR8RyU7pYCJkiLrN4DnLOFemDMvnWNrlnK%2FhiJ3YtZgjW5GI%2BCPxMSbtnrlx7QOlOg%2F6ePPixDNskjnJDVVvWjlujVBWjjyKgllo0d2PczChj81cW5GNQoBfgxHTVT%2F40JLunVO8cPqOROZU%2FRsWUNDHuqrOAPOq4KjE%2FhfCMQOa0gg1b2yN0i5%2F1qlUizIpbjdzgY9mN9792MpWm%2FqFyyDJs6K9OfMfJyhdK2eq%2Bo7Gx%2BtrFv7%2FWKnh4g9wIUl07pY5nxGWUCFRdFTunJ2fTQOq26OYHgAZkAtQGhxDpif90O6JOLrVuA8JkSNPHm6X6Gk8FfnX2ZqI5%2BBNoGXP56EUzdcguHWmFIW0ACwut8ALV9J3MFwM61cBMjXUMFzcbRX4nhJBgNZyV93AQdiECWPvUsDCGo7vEBjqkAT3AjZddBTTVhcn8ERlqgg5IX56Xxrc%2FokE1GSuMIiwauu7jPQM7nIiNZBDqwFfHl0oLNVN7iB28aWxLM3ukWHxGRIzYUebleB4TIICOgtN91JoAX5%2FC50yl596nu80IVJQh9QJ7%2BeW3AvKw55J9qZ%2Fj1KUHyRH7CpQANKrwFPW7kGhja6Rg3ivU%2BwJ%2Fc10kLCF2U1aD4NR8bv7SQs8zc2WLzoV0&X-Amz-Signature=4e41804be8b12742c66c6da8deff6fd1d6aca79620bb5111de80a9275c196d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEOLVT6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FiQO4vZvtsV3iWHmTe0CgxNEWNuKLSkE%2BsWwu7AgF4wIhAMe8rV2ppnkwQPrKPIl2eA%2BrjBGUD6WX8MCEdnI9Z3%2BpKv8DCCQQABoMNjM3NDIzMTgzODA1IgwQNMbeCntBsG8wabQq3ANiTKUZNP4pdKSJrUXZS0Zu%2Fncg35WzbJjtD0llipqhiEBYazHfXKjHubSD8xxmpHwGOz46HKJf1a4j3RxNQMO5WRinRpAsLOaSh%2FbPUbZJPe8YXM4d2qO%2BaWKKPdnjqirJijOhHyGrBkLDb%2BRreO5fT7Jla5muZkhfUDavSmgfSpWRGGAUoE2X57KiwsfdKzCpV6TrhM0kQ4suC5Nm2DqXzSMdIE2h5Z3vR8RyU7pYCJkiLrN4DnLOFemDMvnWNrlnK%2FhiJ3YtZgjW5GI%2BCPxMSbtnrlx7QOlOg%2F6ePPixDNskjnJDVVvWjlujVBWjjyKgllo0d2PczChj81cW5GNQoBfgxHTVT%2F40JLunVO8cPqOROZU%2FRsWUNDHuqrOAPOq4KjE%2FhfCMQOa0gg1b2yN0i5%2F1qlUizIpbjdzgY9mN9792MpWm%2FqFyyDJs6K9OfMfJyhdK2eq%2Bo7Gx%2BtrFv7%2FWKnh4g9wIUl07pY5nxGWUCFRdFTunJ2fTQOq26OYHgAZkAtQGhxDpif90O6JOLrVuA8JkSNPHm6X6Gk8FfnX2ZqI5%2BBNoGXP56EUzdcguHWmFIW0ACwut8ALV9J3MFwM61cBMjXUMFzcbRX4nhJBgNZyV93AQdiECWPvUsDCGo7vEBjqkAT3AjZddBTTVhcn8ERlqgg5IX56Xxrc%2FokE1GSuMIiwauu7jPQM7nIiNZBDqwFfHl0oLNVN7iB28aWxLM3ukWHxGRIzYUebleB4TIICOgtN91JoAX5%2FC50yl596nu80IVJQh9QJ7%2BeW3AvKw55J9qZ%2Fj1KUHyRH7CpQANKrwFPW7kGhja6Rg3ivU%2BwJ%2Fc10kLCF2U1aD4NR8bv7SQs8zc2WLzoV0&X-Amz-Signature=c743558244d6feb8187250761d9ee2e5c415023354275fc9dd92f2caa6760d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEOLVT6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FiQO4vZvtsV3iWHmTe0CgxNEWNuKLSkE%2BsWwu7AgF4wIhAMe8rV2ppnkwQPrKPIl2eA%2BrjBGUD6WX8MCEdnI9Z3%2BpKv8DCCQQABoMNjM3NDIzMTgzODA1IgwQNMbeCntBsG8wabQq3ANiTKUZNP4pdKSJrUXZS0Zu%2Fncg35WzbJjtD0llipqhiEBYazHfXKjHubSD8xxmpHwGOz46HKJf1a4j3RxNQMO5WRinRpAsLOaSh%2FbPUbZJPe8YXM4d2qO%2BaWKKPdnjqirJijOhHyGrBkLDb%2BRreO5fT7Jla5muZkhfUDavSmgfSpWRGGAUoE2X57KiwsfdKzCpV6TrhM0kQ4suC5Nm2DqXzSMdIE2h5Z3vR8RyU7pYCJkiLrN4DnLOFemDMvnWNrlnK%2FhiJ3YtZgjW5GI%2BCPxMSbtnrlx7QOlOg%2F6ePPixDNskjnJDVVvWjlujVBWjjyKgllo0d2PczChj81cW5GNQoBfgxHTVT%2F40JLunVO8cPqOROZU%2FRsWUNDHuqrOAPOq4KjE%2FhfCMQOa0gg1b2yN0i5%2F1qlUizIpbjdzgY9mN9792MpWm%2FqFyyDJs6K9OfMfJyhdK2eq%2Bo7Gx%2BtrFv7%2FWKnh4g9wIUl07pY5nxGWUCFRdFTunJ2fTQOq26OYHgAZkAtQGhxDpif90O6JOLrVuA8JkSNPHm6X6Gk8FfnX2ZqI5%2BBNoGXP56EUzdcguHWmFIW0ACwut8ALV9J3MFwM61cBMjXUMFzcbRX4nhJBgNZyV93AQdiECWPvUsDCGo7vEBjqkAT3AjZddBTTVhcn8ERlqgg5IX56Xxrc%2FokE1GSuMIiwauu7jPQM7nIiNZBDqwFfHl0oLNVN7iB28aWxLM3ukWHxGRIzYUebleB4TIICOgtN91JoAX5%2FC50yl596nu80IVJQh9QJ7%2BeW3AvKw55J9qZ%2Fj1KUHyRH7CpQANKrwFPW7kGhja6Rg3ivU%2BwJ%2Fc10kLCF2U1aD4NR8bv7SQs8zc2WLzoV0&X-Amz-Signature=e56e568d1195b969c2a13fbd5d0f41ecf4233683455e32d2db8542567f30fd8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEOLVT6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FiQO4vZvtsV3iWHmTe0CgxNEWNuKLSkE%2BsWwu7AgF4wIhAMe8rV2ppnkwQPrKPIl2eA%2BrjBGUD6WX8MCEdnI9Z3%2BpKv8DCCQQABoMNjM3NDIzMTgzODA1IgwQNMbeCntBsG8wabQq3ANiTKUZNP4pdKSJrUXZS0Zu%2Fncg35WzbJjtD0llipqhiEBYazHfXKjHubSD8xxmpHwGOz46HKJf1a4j3RxNQMO5WRinRpAsLOaSh%2FbPUbZJPe8YXM4d2qO%2BaWKKPdnjqirJijOhHyGrBkLDb%2BRreO5fT7Jla5muZkhfUDavSmgfSpWRGGAUoE2X57KiwsfdKzCpV6TrhM0kQ4suC5Nm2DqXzSMdIE2h5Z3vR8RyU7pYCJkiLrN4DnLOFemDMvnWNrlnK%2FhiJ3YtZgjW5GI%2BCPxMSbtnrlx7QOlOg%2F6ePPixDNskjnJDVVvWjlujVBWjjyKgllo0d2PczChj81cW5GNQoBfgxHTVT%2F40JLunVO8cPqOROZU%2FRsWUNDHuqrOAPOq4KjE%2FhfCMQOa0gg1b2yN0i5%2F1qlUizIpbjdzgY9mN9792MpWm%2FqFyyDJs6K9OfMfJyhdK2eq%2Bo7Gx%2BtrFv7%2FWKnh4g9wIUl07pY5nxGWUCFRdFTunJ2fTQOq26OYHgAZkAtQGhxDpif90O6JOLrVuA8JkSNPHm6X6Gk8FfnX2ZqI5%2BBNoGXP56EUzdcguHWmFIW0ACwut8ALV9J3MFwM61cBMjXUMFzcbRX4nhJBgNZyV93AQdiECWPvUsDCGo7vEBjqkAT3AjZddBTTVhcn8ERlqgg5IX56Xxrc%2FokE1GSuMIiwauu7jPQM7nIiNZBDqwFfHl0oLNVN7iB28aWxLM3ukWHxGRIzYUebleB4TIICOgtN91JoAX5%2FC50yl596nu80IVJQh9QJ7%2BeW3AvKw55J9qZ%2Fj1KUHyRH7CpQANKrwFPW7kGhja6Rg3ivU%2BwJ%2Fc10kLCF2U1aD4NR8bv7SQs8zc2WLzoV0&X-Amz-Signature=b3329af3e22653e7266d99f883a1beca50bbed92bd04973e4ca380603a5eea88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEOLVT6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FiQO4vZvtsV3iWHmTe0CgxNEWNuKLSkE%2BsWwu7AgF4wIhAMe8rV2ppnkwQPrKPIl2eA%2BrjBGUD6WX8MCEdnI9Z3%2BpKv8DCCQQABoMNjM3NDIzMTgzODA1IgwQNMbeCntBsG8wabQq3ANiTKUZNP4pdKSJrUXZS0Zu%2Fncg35WzbJjtD0llipqhiEBYazHfXKjHubSD8xxmpHwGOz46HKJf1a4j3RxNQMO5WRinRpAsLOaSh%2FbPUbZJPe8YXM4d2qO%2BaWKKPdnjqirJijOhHyGrBkLDb%2BRreO5fT7Jla5muZkhfUDavSmgfSpWRGGAUoE2X57KiwsfdKzCpV6TrhM0kQ4suC5Nm2DqXzSMdIE2h5Z3vR8RyU7pYCJkiLrN4DnLOFemDMvnWNrlnK%2FhiJ3YtZgjW5GI%2BCPxMSbtnrlx7QOlOg%2F6ePPixDNskjnJDVVvWjlujVBWjjyKgllo0d2PczChj81cW5GNQoBfgxHTVT%2F40JLunVO8cPqOROZU%2FRsWUNDHuqrOAPOq4KjE%2FhfCMQOa0gg1b2yN0i5%2F1qlUizIpbjdzgY9mN9792MpWm%2FqFyyDJs6K9OfMfJyhdK2eq%2Bo7Gx%2BtrFv7%2FWKnh4g9wIUl07pY5nxGWUCFRdFTunJ2fTQOq26OYHgAZkAtQGhxDpif90O6JOLrVuA8JkSNPHm6X6Gk8FfnX2ZqI5%2BBNoGXP56EUzdcguHWmFIW0ACwut8ALV9J3MFwM61cBMjXUMFzcbRX4nhJBgNZyV93AQdiECWPvUsDCGo7vEBjqkAT3AjZddBTTVhcn8ERlqgg5IX56Xxrc%2FokE1GSuMIiwauu7jPQM7nIiNZBDqwFfHl0oLNVN7iB28aWxLM3ukWHxGRIzYUebleB4TIICOgtN91JoAX5%2FC50yl596nu80IVJQh9QJ7%2BeW3AvKw55J9qZ%2Fj1KUHyRH7CpQANKrwFPW7kGhja6Rg3ivU%2BwJ%2Fc10kLCF2U1aD4NR8bv7SQs8zc2WLzoV0&X-Amz-Signature=f1cbec314a2903ac0f36aee9eafb91359ed8b8362c78bdc64726697104563340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEOLVT6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FiQO4vZvtsV3iWHmTe0CgxNEWNuKLSkE%2BsWwu7AgF4wIhAMe8rV2ppnkwQPrKPIl2eA%2BrjBGUD6WX8MCEdnI9Z3%2BpKv8DCCQQABoMNjM3NDIzMTgzODA1IgwQNMbeCntBsG8wabQq3ANiTKUZNP4pdKSJrUXZS0Zu%2Fncg35WzbJjtD0llipqhiEBYazHfXKjHubSD8xxmpHwGOz46HKJf1a4j3RxNQMO5WRinRpAsLOaSh%2FbPUbZJPe8YXM4d2qO%2BaWKKPdnjqirJijOhHyGrBkLDb%2BRreO5fT7Jla5muZkhfUDavSmgfSpWRGGAUoE2X57KiwsfdKzCpV6TrhM0kQ4suC5Nm2DqXzSMdIE2h5Z3vR8RyU7pYCJkiLrN4DnLOFemDMvnWNrlnK%2FhiJ3YtZgjW5GI%2BCPxMSbtnrlx7QOlOg%2F6ePPixDNskjnJDVVvWjlujVBWjjyKgllo0d2PczChj81cW5GNQoBfgxHTVT%2F40JLunVO8cPqOROZU%2FRsWUNDHuqrOAPOq4KjE%2FhfCMQOa0gg1b2yN0i5%2F1qlUizIpbjdzgY9mN9792MpWm%2FqFyyDJs6K9OfMfJyhdK2eq%2Bo7Gx%2BtrFv7%2FWKnh4g9wIUl07pY5nxGWUCFRdFTunJ2fTQOq26OYHgAZkAtQGhxDpif90O6JOLrVuA8JkSNPHm6X6Gk8FfnX2ZqI5%2BBNoGXP56EUzdcguHWmFIW0ACwut8ALV9J3MFwM61cBMjXUMFzcbRX4nhJBgNZyV93AQdiECWPvUsDCGo7vEBjqkAT3AjZddBTTVhcn8ERlqgg5IX56Xxrc%2FokE1GSuMIiwauu7jPQM7nIiNZBDqwFfHl0oLNVN7iB28aWxLM3ukWHxGRIzYUebleB4TIICOgtN91JoAX5%2FC50yl596nu80IVJQh9QJ7%2BeW3AvKw55J9qZ%2Fj1KUHyRH7CpQANKrwFPW7kGhja6Rg3ivU%2BwJ%2Fc10kLCF2U1aD4NR8bv7SQs8zc2WLzoV0&X-Amz-Signature=c20b443afcd5371acf349538eeacaa3706382034b6b03d60b9755224e0994500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
