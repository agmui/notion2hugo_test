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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGF5QLHU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHvqf1ImupMdmghErBO5H90un3fvW0HoR02RRcC0H4AQIgDje4GBP73XgxQRwGqg%2BW8yWf1XRtaHF%2BKC2Ch7SeXcsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKao4qpbdFUhTjUwSrcA5s%2B5OKwugTMQZPlAFXBjBptOwmzIqykU%2Fk2aIOgUly9WQOjpeHXPs9UJOg3q5KsHjQLPCDeb979uG9gnoBSI%2FBPMS9FhL7vYRVCfLzJ4%2BPpttQrIQMFjK4AE6cPxxYz%2F6fHYtq7Lt4KbzNC0MFM7I7b2eFdMoMl5c1MBOTfWJ%2Fz2BH3P%2Bfx2YjNWTmCeMk%2Ff4D1SIR3L1oNj6GrvYTZFnYbF9cZmkDDDph4hcmnfnnSEQFdqFLorgRI8mxwe1%2BoA86BjliQn6Bzez57p5y9daodKOqwqNMs%2FbObAxPoJt7Wor34750OZ%2FK%2BMWW1pjpW6iWX1Cqv1z9urXfuPWkEk5drBrVz5d4cPS48ZcRF9suPVgwFswmzo3qKjpIJPNgMdeOUF6TlKCdJqxVbXOGzd7qKWtgKpl4B9QU8ssgR7ZsP0jZ%2FcbmqY2XHNFZGmVa3Vxm5SpHmGvlELeLG9vwjjsAxwhizmb9CfZp%2BaZb4gw1OsiNbc6B5kNnVqEq5MdQeJNnFFVpj7ijtlHAtmmnedgWdDBbXMD9zuF6%2FdqXlE%2FaeHaS1KveyuXGOHILraH88fq0hr0CUoiZAA9HqGX8%2FmIr9b4A1sz0Er6Ck%2BIu8sQhhbGZzpgjNjwzLqfgnMObtscQGOqUBPuVmN5GoxseEDTF%2FbUJhvj%2FGAk2djpiBpn95Cf9i7U4T4GFvjVakYHgf9FSrJzZsd5uY7u9GQ%2Fyav5g0IwrVh%2FVm6gqxBUCe8zM2EPmtt9889%2FMt76Mqu77NUA2P7bNpJIwV6hTZRfo4RZ2JHrpb2P9OOxd%2BfuAQWBzPK3FYUKjVaerPUrSkF813X8qZRrRQoxx5AYhQbjUC37oEMQk048JzVJ4T&X-Amz-Signature=b47d7626b47a507e2410fbe590adb6a6f318df11db32ace496ae948e61117b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGF5QLHU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHvqf1ImupMdmghErBO5H90un3fvW0HoR02RRcC0H4AQIgDje4GBP73XgxQRwGqg%2BW8yWf1XRtaHF%2BKC2Ch7SeXcsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKao4qpbdFUhTjUwSrcA5s%2B5OKwugTMQZPlAFXBjBptOwmzIqykU%2Fk2aIOgUly9WQOjpeHXPs9UJOg3q5KsHjQLPCDeb979uG9gnoBSI%2FBPMS9FhL7vYRVCfLzJ4%2BPpttQrIQMFjK4AE6cPxxYz%2F6fHYtq7Lt4KbzNC0MFM7I7b2eFdMoMl5c1MBOTfWJ%2Fz2BH3P%2Bfx2YjNWTmCeMk%2Ff4D1SIR3L1oNj6GrvYTZFnYbF9cZmkDDDph4hcmnfnnSEQFdqFLorgRI8mxwe1%2BoA86BjliQn6Bzez57p5y9daodKOqwqNMs%2FbObAxPoJt7Wor34750OZ%2FK%2BMWW1pjpW6iWX1Cqv1z9urXfuPWkEk5drBrVz5d4cPS48ZcRF9suPVgwFswmzo3qKjpIJPNgMdeOUF6TlKCdJqxVbXOGzd7qKWtgKpl4B9QU8ssgR7ZsP0jZ%2FcbmqY2XHNFZGmVa3Vxm5SpHmGvlELeLG9vwjjsAxwhizmb9CfZp%2BaZb4gw1OsiNbc6B5kNnVqEq5MdQeJNnFFVpj7ijtlHAtmmnedgWdDBbXMD9zuF6%2FdqXlE%2FaeHaS1KveyuXGOHILraH88fq0hr0CUoiZAA9HqGX8%2FmIr9b4A1sz0Er6Ck%2BIu8sQhhbGZzpgjNjwzLqfgnMObtscQGOqUBPuVmN5GoxseEDTF%2FbUJhvj%2FGAk2djpiBpn95Cf9i7U4T4GFvjVakYHgf9FSrJzZsd5uY7u9GQ%2Fyav5g0IwrVh%2FVm6gqxBUCe8zM2EPmtt9889%2FMt76Mqu77NUA2P7bNpJIwV6hTZRfo4RZ2JHrpb2P9OOxd%2BfuAQWBzPK3FYUKjVaerPUrSkF813X8qZRrRQoxx5AYhQbjUC37oEMQk048JzVJ4T&X-Amz-Signature=e5f33b55daf67bffffe9c2c0c9185169177fd52bc529d1cf1cf3893468c55508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGF5QLHU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHvqf1ImupMdmghErBO5H90un3fvW0HoR02RRcC0H4AQIgDje4GBP73XgxQRwGqg%2BW8yWf1XRtaHF%2BKC2Ch7SeXcsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKao4qpbdFUhTjUwSrcA5s%2B5OKwugTMQZPlAFXBjBptOwmzIqykU%2Fk2aIOgUly9WQOjpeHXPs9UJOg3q5KsHjQLPCDeb979uG9gnoBSI%2FBPMS9FhL7vYRVCfLzJ4%2BPpttQrIQMFjK4AE6cPxxYz%2F6fHYtq7Lt4KbzNC0MFM7I7b2eFdMoMl5c1MBOTfWJ%2Fz2BH3P%2Bfx2YjNWTmCeMk%2Ff4D1SIR3L1oNj6GrvYTZFnYbF9cZmkDDDph4hcmnfnnSEQFdqFLorgRI8mxwe1%2BoA86BjliQn6Bzez57p5y9daodKOqwqNMs%2FbObAxPoJt7Wor34750OZ%2FK%2BMWW1pjpW6iWX1Cqv1z9urXfuPWkEk5drBrVz5d4cPS48ZcRF9suPVgwFswmzo3qKjpIJPNgMdeOUF6TlKCdJqxVbXOGzd7qKWtgKpl4B9QU8ssgR7ZsP0jZ%2FcbmqY2XHNFZGmVa3Vxm5SpHmGvlELeLG9vwjjsAxwhizmb9CfZp%2BaZb4gw1OsiNbc6B5kNnVqEq5MdQeJNnFFVpj7ijtlHAtmmnedgWdDBbXMD9zuF6%2FdqXlE%2FaeHaS1KveyuXGOHILraH88fq0hr0CUoiZAA9HqGX8%2FmIr9b4A1sz0Er6Ck%2BIu8sQhhbGZzpgjNjwzLqfgnMObtscQGOqUBPuVmN5GoxseEDTF%2FbUJhvj%2FGAk2djpiBpn95Cf9i7U4T4GFvjVakYHgf9FSrJzZsd5uY7u9GQ%2Fyav5g0IwrVh%2FVm6gqxBUCe8zM2EPmtt9889%2FMt76Mqu77NUA2P7bNpJIwV6hTZRfo4RZ2JHrpb2P9OOxd%2BfuAQWBzPK3FYUKjVaerPUrSkF813X8qZRrRQoxx5AYhQbjUC37oEMQk048JzVJ4T&X-Amz-Signature=e3c8b7af24b0dced5097982b7c9f033b7b094f48c6b9fb4d5809f40e21f0c80b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGF5QLHU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHvqf1ImupMdmghErBO5H90un3fvW0HoR02RRcC0H4AQIgDje4GBP73XgxQRwGqg%2BW8yWf1XRtaHF%2BKC2Ch7SeXcsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKao4qpbdFUhTjUwSrcA5s%2B5OKwugTMQZPlAFXBjBptOwmzIqykU%2Fk2aIOgUly9WQOjpeHXPs9UJOg3q5KsHjQLPCDeb979uG9gnoBSI%2FBPMS9FhL7vYRVCfLzJ4%2BPpttQrIQMFjK4AE6cPxxYz%2F6fHYtq7Lt4KbzNC0MFM7I7b2eFdMoMl5c1MBOTfWJ%2Fz2BH3P%2Bfx2YjNWTmCeMk%2Ff4D1SIR3L1oNj6GrvYTZFnYbF9cZmkDDDph4hcmnfnnSEQFdqFLorgRI8mxwe1%2BoA86BjliQn6Bzez57p5y9daodKOqwqNMs%2FbObAxPoJt7Wor34750OZ%2FK%2BMWW1pjpW6iWX1Cqv1z9urXfuPWkEk5drBrVz5d4cPS48ZcRF9suPVgwFswmzo3qKjpIJPNgMdeOUF6TlKCdJqxVbXOGzd7qKWtgKpl4B9QU8ssgR7ZsP0jZ%2FcbmqY2XHNFZGmVa3Vxm5SpHmGvlELeLG9vwjjsAxwhizmb9CfZp%2BaZb4gw1OsiNbc6B5kNnVqEq5MdQeJNnFFVpj7ijtlHAtmmnedgWdDBbXMD9zuF6%2FdqXlE%2FaeHaS1KveyuXGOHILraH88fq0hr0CUoiZAA9HqGX8%2FmIr9b4A1sz0Er6Ck%2BIu8sQhhbGZzpgjNjwzLqfgnMObtscQGOqUBPuVmN5GoxseEDTF%2FbUJhvj%2FGAk2djpiBpn95Cf9i7U4T4GFvjVakYHgf9FSrJzZsd5uY7u9GQ%2Fyav5g0IwrVh%2FVm6gqxBUCe8zM2EPmtt9889%2FMt76Mqu77NUA2P7bNpJIwV6hTZRfo4RZ2JHrpb2P9OOxd%2BfuAQWBzPK3FYUKjVaerPUrSkF813X8qZRrRQoxx5AYhQbjUC37oEMQk048JzVJ4T&X-Amz-Signature=46d3b7659db5fdfae97e6adba52add340fa834f7eea076c6087df6919466f36d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGF5QLHU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHvqf1ImupMdmghErBO5H90un3fvW0HoR02RRcC0H4AQIgDje4GBP73XgxQRwGqg%2BW8yWf1XRtaHF%2BKC2Ch7SeXcsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKao4qpbdFUhTjUwSrcA5s%2B5OKwugTMQZPlAFXBjBptOwmzIqykU%2Fk2aIOgUly9WQOjpeHXPs9UJOg3q5KsHjQLPCDeb979uG9gnoBSI%2FBPMS9FhL7vYRVCfLzJ4%2BPpttQrIQMFjK4AE6cPxxYz%2F6fHYtq7Lt4KbzNC0MFM7I7b2eFdMoMl5c1MBOTfWJ%2Fz2BH3P%2Bfx2YjNWTmCeMk%2Ff4D1SIR3L1oNj6GrvYTZFnYbF9cZmkDDDph4hcmnfnnSEQFdqFLorgRI8mxwe1%2BoA86BjliQn6Bzez57p5y9daodKOqwqNMs%2FbObAxPoJt7Wor34750OZ%2FK%2BMWW1pjpW6iWX1Cqv1z9urXfuPWkEk5drBrVz5d4cPS48ZcRF9suPVgwFswmzo3qKjpIJPNgMdeOUF6TlKCdJqxVbXOGzd7qKWtgKpl4B9QU8ssgR7ZsP0jZ%2FcbmqY2XHNFZGmVa3Vxm5SpHmGvlELeLG9vwjjsAxwhizmb9CfZp%2BaZb4gw1OsiNbc6B5kNnVqEq5MdQeJNnFFVpj7ijtlHAtmmnedgWdDBbXMD9zuF6%2FdqXlE%2FaeHaS1KveyuXGOHILraH88fq0hr0CUoiZAA9HqGX8%2FmIr9b4A1sz0Er6Ck%2BIu8sQhhbGZzpgjNjwzLqfgnMObtscQGOqUBPuVmN5GoxseEDTF%2FbUJhvj%2FGAk2djpiBpn95Cf9i7U4T4GFvjVakYHgf9FSrJzZsd5uY7u9GQ%2Fyav5g0IwrVh%2FVm6gqxBUCe8zM2EPmtt9889%2FMt76Mqu77NUA2P7bNpJIwV6hTZRfo4RZ2JHrpb2P9OOxd%2BfuAQWBzPK3FYUKjVaerPUrSkF813X8qZRrRQoxx5AYhQbjUC37oEMQk048JzVJ4T&X-Amz-Signature=6f6b87d4878088fe5a10ab8aa6148702ec360e667aa445cf98fe3f3d28caf46d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGF5QLHU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHvqf1ImupMdmghErBO5H90un3fvW0HoR02RRcC0H4AQIgDje4GBP73XgxQRwGqg%2BW8yWf1XRtaHF%2BKC2Ch7SeXcsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKao4qpbdFUhTjUwSrcA5s%2B5OKwugTMQZPlAFXBjBptOwmzIqykU%2Fk2aIOgUly9WQOjpeHXPs9UJOg3q5KsHjQLPCDeb979uG9gnoBSI%2FBPMS9FhL7vYRVCfLzJ4%2BPpttQrIQMFjK4AE6cPxxYz%2F6fHYtq7Lt4KbzNC0MFM7I7b2eFdMoMl5c1MBOTfWJ%2Fz2BH3P%2Bfx2YjNWTmCeMk%2Ff4D1SIR3L1oNj6GrvYTZFnYbF9cZmkDDDph4hcmnfnnSEQFdqFLorgRI8mxwe1%2BoA86BjliQn6Bzez57p5y9daodKOqwqNMs%2FbObAxPoJt7Wor34750OZ%2FK%2BMWW1pjpW6iWX1Cqv1z9urXfuPWkEk5drBrVz5d4cPS48ZcRF9suPVgwFswmzo3qKjpIJPNgMdeOUF6TlKCdJqxVbXOGzd7qKWtgKpl4B9QU8ssgR7ZsP0jZ%2FcbmqY2XHNFZGmVa3Vxm5SpHmGvlELeLG9vwjjsAxwhizmb9CfZp%2BaZb4gw1OsiNbc6B5kNnVqEq5MdQeJNnFFVpj7ijtlHAtmmnedgWdDBbXMD9zuF6%2FdqXlE%2FaeHaS1KveyuXGOHILraH88fq0hr0CUoiZAA9HqGX8%2FmIr9b4A1sz0Er6Ck%2BIu8sQhhbGZzpgjNjwzLqfgnMObtscQGOqUBPuVmN5GoxseEDTF%2FbUJhvj%2FGAk2djpiBpn95Cf9i7U4T4GFvjVakYHgf9FSrJzZsd5uY7u9GQ%2Fyav5g0IwrVh%2FVm6gqxBUCe8zM2EPmtt9889%2FMt76Mqu77NUA2P7bNpJIwV6hTZRfo4RZ2JHrpb2P9OOxd%2BfuAQWBzPK3FYUKjVaerPUrSkF813X8qZRrRQoxx5AYhQbjUC37oEMQk048JzVJ4T&X-Amz-Signature=6238ac1522928b8d941ef0711ecced32337d5b1194702c509e048a89be2f179b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGF5QLHU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHvqf1ImupMdmghErBO5H90un3fvW0HoR02RRcC0H4AQIgDje4GBP73XgxQRwGqg%2BW8yWf1XRtaHF%2BKC2Ch7SeXcsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKao4qpbdFUhTjUwSrcA5s%2B5OKwugTMQZPlAFXBjBptOwmzIqykU%2Fk2aIOgUly9WQOjpeHXPs9UJOg3q5KsHjQLPCDeb979uG9gnoBSI%2FBPMS9FhL7vYRVCfLzJ4%2BPpttQrIQMFjK4AE6cPxxYz%2F6fHYtq7Lt4KbzNC0MFM7I7b2eFdMoMl5c1MBOTfWJ%2Fz2BH3P%2Bfx2YjNWTmCeMk%2Ff4D1SIR3L1oNj6GrvYTZFnYbF9cZmkDDDph4hcmnfnnSEQFdqFLorgRI8mxwe1%2BoA86BjliQn6Bzez57p5y9daodKOqwqNMs%2FbObAxPoJt7Wor34750OZ%2FK%2BMWW1pjpW6iWX1Cqv1z9urXfuPWkEk5drBrVz5d4cPS48ZcRF9suPVgwFswmzo3qKjpIJPNgMdeOUF6TlKCdJqxVbXOGzd7qKWtgKpl4B9QU8ssgR7ZsP0jZ%2FcbmqY2XHNFZGmVa3Vxm5SpHmGvlELeLG9vwjjsAxwhizmb9CfZp%2BaZb4gw1OsiNbc6B5kNnVqEq5MdQeJNnFFVpj7ijtlHAtmmnedgWdDBbXMD9zuF6%2FdqXlE%2FaeHaS1KveyuXGOHILraH88fq0hr0CUoiZAA9HqGX8%2FmIr9b4A1sz0Er6Ck%2BIu8sQhhbGZzpgjNjwzLqfgnMObtscQGOqUBPuVmN5GoxseEDTF%2FbUJhvj%2FGAk2djpiBpn95Cf9i7U4T4GFvjVakYHgf9FSrJzZsd5uY7u9GQ%2Fyav5g0IwrVh%2FVm6gqxBUCe8zM2EPmtt9889%2FMt76Mqu77NUA2P7bNpJIwV6hTZRfo4RZ2JHrpb2P9OOxd%2BfuAQWBzPK3FYUKjVaerPUrSkF813X8qZRrRQoxx5AYhQbjUC37oEMQk048JzVJ4T&X-Amz-Signature=7157cba2403c307800436991ff7ff492faed976e430e08586785ece9b15cfd56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGF5QLHU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHvqf1ImupMdmghErBO5H90un3fvW0HoR02RRcC0H4AQIgDje4GBP73XgxQRwGqg%2BW8yWf1XRtaHF%2BKC2Ch7SeXcsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKao4qpbdFUhTjUwSrcA5s%2B5OKwugTMQZPlAFXBjBptOwmzIqykU%2Fk2aIOgUly9WQOjpeHXPs9UJOg3q5KsHjQLPCDeb979uG9gnoBSI%2FBPMS9FhL7vYRVCfLzJ4%2BPpttQrIQMFjK4AE6cPxxYz%2F6fHYtq7Lt4KbzNC0MFM7I7b2eFdMoMl5c1MBOTfWJ%2Fz2BH3P%2Bfx2YjNWTmCeMk%2Ff4D1SIR3L1oNj6GrvYTZFnYbF9cZmkDDDph4hcmnfnnSEQFdqFLorgRI8mxwe1%2BoA86BjliQn6Bzez57p5y9daodKOqwqNMs%2FbObAxPoJt7Wor34750OZ%2FK%2BMWW1pjpW6iWX1Cqv1z9urXfuPWkEk5drBrVz5d4cPS48ZcRF9suPVgwFswmzo3qKjpIJPNgMdeOUF6TlKCdJqxVbXOGzd7qKWtgKpl4B9QU8ssgR7ZsP0jZ%2FcbmqY2XHNFZGmVa3Vxm5SpHmGvlELeLG9vwjjsAxwhizmb9CfZp%2BaZb4gw1OsiNbc6B5kNnVqEq5MdQeJNnFFVpj7ijtlHAtmmnedgWdDBbXMD9zuF6%2FdqXlE%2FaeHaS1KveyuXGOHILraH88fq0hr0CUoiZAA9HqGX8%2FmIr9b4A1sz0Er6Ck%2BIu8sQhhbGZzpgjNjwzLqfgnMObtscQGOqUBPuVmN5GoxseEDTF%2FbUJhvj%2FGAk2djpiBpn95Cf9i7U4T4GFvjVakYHgf9FSrJzZsd5uY7u9GQ%2Fyav5g0IwrVh%2FVm6gqxBUCe8zM2EPmtt9889%2FMt76Mqu77NUA2P7bNpJIwV6hTZRfo4RZ2JHrpb2P9OOxd%2BfuAQWBzPK3FYUKjVaerPUrSkF813X8qZRrRQoxx5AYhQbjUC37oEMQk048JzVJ4T&X-Amz-Signature=e9b868d4a48ff7e88e679c069f7d32f7604d24cdbaf1559abd51a34584cc73ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGF5QLHU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHvqf1ImupMdmghErBO5H90un3fvW0HoR02RRcC0H4AQIgDje4GBP73XgxQRwGqg%2BW8yWf1XRtaHF%2BKC2Ch7SeXcsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKao4qpbdFUhTjUwSrcA5s%2B5OKwugTMQZPlAFXBjBptOwmzIqykU%2Fk2aIOgUly9WQOjpeHXPs9UJOg3q5KsHjQLPCDeb979uG9gnoBSI%2FBPMS9FhL7vYRVCfLzJ4%2BPpttQrIQMFjK4AE6cPxxYz%2F6fHYtq7Lt4KbzNC0MFM7I7b2eFdMoMl5c1MBOTfWJ%2Fz2BH3P%2Bfx2YjNWTmCeMk%2Ff4D1SIR3L1oNj6GrvYTZFnYbF9cZmkDDDph4hcmnfnnSEQFdqFLorgRI8mxwe1%2BoA86BjliQn6Bzez57p5y9daodKOqwqNMs%2FbObAxPoJt7Wor34750OZ%2FK%2BMWW1pjpW6iWX1Cqv1z9urXfuPWkEk5drBrVz5d4cPS48ZcRF9suPVgwFswmzo3qKjpIJPNgMdeOUF6TlKCdJqxVbXOGzd7qKWtgKpl4B9QU8ssgR7ZsP0jZ%2FcbmqY2XHNFZGmVa3Vxm5SpHmGvlELeLG9vwjjsAxwhizmb9CfZp%2BaZb4gw1OsiNbc6B5kNnVqEq5MdQeJNnFFVpj7ijtlHAtmmnedgWdDBbXMD9zuF6%2FdqXlE%2FaeHaS1KveyuXGOHILraH88fq0hr0CUoiZAA9HqGX8%2FmIr9b4A1sz0Er6Ck%2BIu8sQhhbGZzpgjNjwzLqfgnMObtscQGOqUBPuVmN5GoxseEDTF%2FbUJhvj%2FGAk2djpiBpn95Cf9i7U4T4GFvjVakYHgf9FSrJzZsd5uY7u9GQ%2Fyav5g0IwrVh%2FVm6gqxBUCe8zM2EPmtt9889%2FMt76Mqu77NUA2P7bNpJIwV6hTZRfo4RZ2JHrpb2P9OOxd%2BfuAQWBzPK3FYUKjVaerPUrSkF813X8qZRrRQoxx5AYhQbjUC37oEMQk048JzVJ4T&X-Amz-Signature=ce2cac1ca41db934ae4606c385fbc6dee6d997691df4348ff0eea1ddd8d93328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZVMFADP%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwTEEeY5ZG%2FhLxiP%2FCr4o%2FRf2Lk%2FxUYQm46pJNY6wo%2FAIgO5id5ntWQHy1hGQah7jkqytQeA%2F68cj98j5f3LnVJrIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsBo0waywdB1G7TxSrcA3%2FeWk9r4P5AsS8ddtbXuCS1UWfOoIZ%2B9kMOAAyknUmCybCZK8o5OuKVxSj6%2B7Tczt1kkQU8bPK4PZf0XQQ%2BHtfP%2FAWLqsO%2FinuBYErDF4jH3RZz0a7K6s0dnczHSbJ7zcGtZ8NF5HgGpTi%2BwHAgm1rfb5dXRX5%2BT0uJj7NEv56ZAJ94GknDqpEM%2BvxfsYjCVmykEEPewzQPXdhTHSAK3%2B97am%2FFxsSoolIicBnCQAExCQxdFsYF5dXzqs4mSCsUiPtA5Vqk0btzyXEWtBglXBIu82tAWCSR%2BjyRxmGSx2gN37zFwB%2BrhDi55%2BLUM%2FYS08IQbagzkKXxMpqg2pxzDvp8DtFyM1QJl1Q83FOzGea0e9IlYyAzCo3Vo%2BHbKM7Nu9YII%2FNaYjNYF5GQhT7QAuuNnhY1xNwahnQV7fSATNaZ%2Fi49NlTNG1%2FSDk5qlN0iFDsJuaNQdbPNPKfkZewyG8JiI1TT82%2BwoC3F9FbJ19c3L2n%2FtNLBCpl3UhSybAyufj0FI5rs75ga9%2B%2FCrxQYSa46fvL3VMtKvNRrGJaTQUccOx%2Fgmi%2F8nVzYw98UasmMmMkSVywZx7RHTYRyq8y5nbrl8MY7ftKHugRkgkPw04fS%2F0AhkRZcjtMtlqIjMKPtscQGOqUBfAacL9JG5zhLfarfW57nk8ItsOCLb1uGOHLJnuHw0ZDZRu0sJ%2BXTEESVpZhlnVTW1al%2FPjjUn34soHdGdwmwodbm4tqFNodTc%2FcKCk%2F91c1Xu3XkW8H3IYpgcYPh6luj1zyLz8Od%2BED1A8mlPVx5NoTA0kD%2Bnvhlwue3fjpfVIuIlh0CnPCUNvPmq9uEr3ymv3QAQ7M66IYjkl%2FZ11rltG4noiwf&X-Amz-Signature=4a10846631c7591fd8ea7e433a8cafc90fdf3242135eca398df6654c98688130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGF5QLHU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHvqf1ImupMdmghErBO5H90un3fvW0HoR02RRcC0H4AQIgDje4GBP73XgxQRwGqg%2BW8yWf1XRtaHF%2BKC2Ch7SeXcsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKao4qpbdFUhTjUwSrcA5s%2B5OKwugTMQZPlAFXBjBptOwmzIqykU%2Fk2aIOgUly9WQOjpeHXPs9UJOg3q5KsHjQLPCDeb979uG9gnoBSI%2FBPMS9FhL7vYRVCfLzJ4%2BPpttQrIQMFjK4AE6cPxxYz%2F6fHYtq7Lt4KbzNC0MFM7I7b2eFdMoMl5c1MBOTfWJ%2Fz2BH3P%2Bfx2YjNWTmCeMk%2Ff4D1SIR3L1oNj6GrvYTZFnYbF9cZmkDDDph4hcmnfnnSEQFdqFLorgRI8mxwe1%2BoA86BjliQn6Bzez57p5y9daodKOqwqNMs%2FbObAxPoJt7Wor34750OZ%2FK%2BMWW1pjpW6iWX1Cqv1z9urXfuPWkEk5drBrVz5d4cPS48ZcRF9suPVgwFswmzo3qKjpIJPNgMdeOUF6TlKCdJqxVbXOGzd7qKWtgKpl4B9QU8ssgR7ZsP0jZ%2FcbmqY2XHNFZGmVa3Vxm5SpHmGvlELeLG9vwjjsAxwhizmb9CfZp%2BaZb4gw1OsiNbc6B5kNnVqEq5MdQeJNnFFVpj7ijtlHAtmmnedgWdDBbXMD9zuF6%2FdqXlE%2FaeHaS1KveyuXGOHILraH88fq0hr0CUoiZAA9HqGX8%2FmIr9b4A1sz0Er6Ck%2BIu8sQhhbGZzpgjNjwzLqfgnMObtscQGOqUBPuVmN5GoxseEDTF%2FbUJhvj%2FGAk2djpiBpn95Cf9i7U4T4GFvjVakYHgf9FSrJzZsd5uY7u9GQ%2Fyav5g0IwrVh%2FVm6gqxBUCe8zM2EPmtt9889%2FMt76Mqu77NUA2P7bNpJIwV6hTZRfo4RZ2JHrpb2P9OOxd%2BfuAQWBzPK3FYUKjVaerPUrSkF813X8qZRrRQoxx5AYhQbjUC37oEMQk048JzVJ4T&X-Amz-Signature=cdd8bb5ea9a198a81be55ad15a833eba4e1f9e26af65c92640b47dcfadc5e002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VHTJELQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSi9lGoOm3Ez2JXGIrVBLKU0P2gnnCc7l3uh94Ss9RGAiBQ%2BN2LAIoHVEywUh9BgpP8EZvmy9rIwTgagMOb7wFk5iqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTc0ndN%2Fe7AOVpQ0KtwDtIMNwoqwQ05k08x1W82sNfdTAQVp6Y34IKdnSi9mW%2BBsc4l3GdmAJ3ze9XzA8WGyGWE2%2B3MF2hhTbjczmd2ATTwAH5o4E%2BcZiF7xLi%2BpV5Ywi7DIxWqC2qRU4TtgAfs%2Fwa5KZvCO1IV9K8nZCIQPPHA4YcCr4pXHlpfkVkwPC5rmjv4KzUPnok1j6WOVwJHQWpSzPAKolgATNoSK8YMDqr5oaU%2FscpOH%2BjC3d87pVV27yrloPqUpRgwvvwbvgCSeNof4IPB0gGfmvw8lexBeHsxLjxsYIIhv4ccApHZVfmrOkSegYJHAYtdf1X8sSJt1%2BtYQl%2Fe1ZF6%2BRbN0abB4iBMvXd7ndUXrClhrLutcnXmBqEbdez%2BFwAb2YI8Ck3WjsnXKMFkNKUuRJ2YM1fdTbU5lwxAGCNpBGSNmg8440D5SI6pA7M6dzlxi3EAhfOy6hE7nqML4HLpqupOA3XgvtWfPb4uQpsK95oe%2FclMaVDW%2FJuBv59Eo3aBec1gsrJm%2FVUqTFwRAsTgjIzcYqkynkyuR56JEwzFW9YZIvASY9iJ33pwcHsNZt%2FxhHnSMx5jRSoHnha1a2o2TQsU1hYosTw22oG97nUDFtZr7UCpypzXoR5i%2FMTIFNyFo9Ngww%2B2xxAY6pgH0rnafLfQwc6VbQQcCoPhrxi8o5ws0XTBrAxFLnVFBTppxHlOQFLZoWxOv2hdWFfVGOz5DdU58dq7%2FZ6gnX0ijB7nuoeJpGazKDU66lY3YF97qQo3dtiGaNr6%2BfunZUv2FwZBmN1j4yAzsx6oReRjCKCz59vz9ES9bpctP0jSPk2%2BfFRs4MVjSZAbZFjJPMOaHqfWmI8LmHPtBgl6G04m64HcZNxc9&X-Amz-Signature=2f3f64607f8a6338ab17e1c0aaf850dfc73029682a8d02af7d9e0b01f35834c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VHTJELQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSi9lGoOm3Ez2JXGIrVBLKU0P2gnnCc7l3uh94Ss9RGAiBQ%2BN2LAIoHVEywUh9BgpP8EZvmy9rIwTgagMOb7wFk5iqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTc0ndN%2Fe7AOVpQ0KtwDtIMNwoqwQ05k08x1W82sNfdTAQVp6Y34IKdnSi9mW%2BBsc4l3GdmAJ3ze9XzA8WGyGWE2%2B3MF2hhTbjczmd2ATTwAH5o4E%2BcZiF7xLi%2BpV5Ywi7DIxWqC2qRU4TtgAfs%2Fwa5KZvCO1IV9K8nZCIQPPHA4YcCr4pXHlpfkVkwPC5rmjv4KzUPnok1j6WOVwJHQWpSzPAKolgATNoSK8YMDqr5oaU%2FscpOH%2BjC3d87pVV27yrloPqUpRgwvvwbvgCSeNof4IPB0gGfmvw8lexBeHsxLjxsYIIhv4ccApHZVfmrOkSegYJHAYtdf1X8sSJt1%2BtYQl%2Fe1ZF6%2BRbN0abB4iBMvXd7ndUXrClhrLutcnXmBqEbdez%2BFwAb2YI8Ck3WjsnXKMFkNKUuRJ2YM1fdTbU5lwxAGCNpBGSNmg8440D5SI6pA7M6dzlxi3EAhfOy6hE7nqML4HLpqupOA3XgvtWfPb4uQpsK95oe%2FclMaVDW%2FJuBv59Eo3aBec1gsrJm%2FVUqTFwRAsTgjIzcYqkynkyuR56JEwzFW9YZIvASY9iJ33pwcHsNZt%2FxhHnSMx5jRSoHnha1a2o2TQsU1hYosTw22oG97nUDFtZr7UCpypzXoR5i%2FMTIFNyFo9Ngww%2B2xxAY6pgH0rnafLfQwc6VbQQcCoPhrxi8o5ws0XTBrAxFLnVFBTppxHlOQFLZoWxOv2hdWFfVGOz5DdU58dq7%2FZ6gnX0ijB7nuoeJpGazKDU66lY3YF97qQo3dtiGaNr6%2BfunZUv2FwZBmN1j4yAzsx6oReRjCKCz59vz9ES9bpctP0jSPk2%2BfFRs4MVjSZAbZFjJPMOaHqfWmI8LmHPtBgl6G04m64HcZNxc9&X-Amz-Signature=ee50749cbc61c8ec1a4821e4f3eda1e9a61cace335e0eaa7ab84742c87405862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VHTJELQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSi9lGoOm3Ez2JXGIrVBLKU0P2gnnCc7l3uh94Ss9RGAiBQ%2BN2LAIoHVEywUh9BgpP8EZvmy9rIwTgagMOb7wFk5iqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTc0ndN%2Fe7AOVpQ0KtwDtIMNwoqwQ05k08x1W82sNfdTAQVp6Y34IKdnSi9mW%2BBsc4l3GdmAJ3ze9XzA8WGyGWE2%2B3MF2hhTbjczmd2ATTwAH5o4E%2BcZiF7xLi%2BpV5Ywi7DIxWqC2qRU4TtgAfs%2Fwa5KZvCO1IV9K8nZCIQPPHA4YcCr4pXHlpfkVkwPC5rmjv4KzUPnok1j6WOVwJHQWpSzPAKolgATNoSK8YMDqr5oaU%2FscpOH%2BjC3d87pVV27yrloPqUpRgwvvwbvgCSeNof4IPB0gGfmvw8lexBeHsxLjxsYIIhv4ccApHZVfmrOkSegYJHAYtdf1X8sSJt1%2BtYQl%2Fe1ZF6%2BRbN0abB4iBMvXd7ndUXrClhrLutcnXmBqEbdez%2BFwAb2YI8Ck3WjsnXKMFkNKUuRJ2YM1fdTbU5lwxAGCNpBGSNmg8440D5SI6pA7M6dzlxi3EAhfOy6hE7nqML4HLpqupOA3XgvtWfPb4uQpsK95oe%2FclMaVDW%2FJuBv59Eo3aBec1gsrJm%2FVUqTFwRAsTgjIzcYqkynkyuR56JEwzFW9YZIvASY9iJ33pwcHsNZt%2FxhHnSMx5jRSoHnha1a2o2TQsU1hYosTw22oG97nUDFtZr7UCpypzXoR5i%2FMTIFNyFo9Ngww%2B2xxAY6pgH0rnafLfQwc6VbQQcCoPhrxi8o5ws0XTBrAxFLnVFBTppxHlOQFLZoWxOv2hdWFfVGOz5DdU58dq7%2FZ6gnX0ijB7nuoeJpGazKDU66lY3YF97qQo3dtiGaNr6%2BfunZUv2FwZBmN1j4yAzsx6oReRjCKCz59vz9ES9bpctP0jSPk2%2BfFRs4MVjSZAbZFjJPMOaHqfWmI8LmHPtBgl6G04m64HcZNxc9&X-Amz-Signature=3d06ad4930c6fdaa00d54fe927424c4be9a4e75c5e59a4946da37c3917ecb039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VHTJELQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSi9lGoOm3Ez2JXGIrVBLKU0P2gnnCc7l3uh94Ss9RGAiBQ%2BN2LAIoHVEywUh9BgpP8EZvmy9rIwTgagMOb7wFk5iqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTc0ndN%2Fe7AOVpQ0KtwDtIMNwoqwQ05k08x1W82sNfdTAQVp6Y34IKdnSi9mW%2BBsc4l3GdmAJ3ze9XzA8WGyGWE2%2B3MF2hhTbjczmd2ATTwAH5o4E%2BcZiF7xLi%2BpV5Ywi7DIxWqC2qRU4TtgAfs%2Fwa5KZvCO1IV9K8nZCIQPPHA4YcCr4pXHlpfkVkwPC5rmjv4KzUPnok1j6WOVwJHQWpSzPAKolgATNoSK8YMDqr5oaU%2FscpOH%2BjC3d87pVV27yrloPqUpRgwvvwbvgCSeNof4IPB0gGfmvw8lexBeHsxLjxsYIIhv4ccApHZVfmrOkSegYJHAYtdf1X8sSJt1%2BtYQl%2Fe1ZF6%2BRbN0abB4iBMvXd7ndUXrClhrLutcnXmBqEbdez%2BFwAb2YI8Ck3WjsnXKMFkNKUuRJ2YM1fdTbU5lwxAGCNpBGSNmg8440D5SI6pA7M6dzlxi3EAhfOy6hE7nqML4HLpqupOA3XgvtWfPb4uQpsK95oe%2FclMaVDW%2FJuBv59Eo3aBec1gsrJm%2FVUqTFwRAsTgjIzcYqkynkyuR56JEwzFW9YZIvASY9iJ33pwcHsNZt%2FxhHnSMx5jRSoHnha1a2o2TQsU1hYosTw22oG97nUDFtZr7UCpypzXoR5i%2FMTIFNyFo9Ngww%2B2xxAY6pgH0rnafLfQwc6VbQQcCoPhrxi8o5ws0XTBrAxFLnVFBTppxHlOQFLZoWxOv2hdWFfVGOz5DdU58dq7%2FZ6gnX0ijB7nuoeJpGazKDU66lY3YF97qQo3dtiGaNr6%2BfunZUv2FwZBmN1j4yAzsx6oReRjCKCz59vz9ES9bpctP0jSPk2%2BfFRs4MVjSZAbZFjJPMOaHqfWmI8LmHPtBgl6G04m64HcZNxc9&X-Amz-Signature=2e8eddf0e589c225d90ab497151cdee6d209d24d064588fc40a164f4add13d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VHTJELQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSi9lGoOm3Ez2JXGIrVBLKU0P2gnnCc7l3uh94Ss9RGAiBQ%2BN2LAIoHVEywUh9BgpP8EZvmy9rIwTgagMOb7wFk5iqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTc0ndN%2Fe7AOVpQ0KtwDtIMNwoqwQ05k08x1W82sNfdTAQVp6Y34IKdnSi9mW%2BBsc4l3GdmAJ3ze9XzA8WGyGWE2%2B3MF2hhTbjczmd2ATTwAH5o4E%2BcZiF7xLi%2BpV5Ywi7DIxWqC2qRU4TtgAfs%2Fwa5KZvCO1IV9K8nZCIQPPHA4YcCr4pXHlpfkVkwPC5rmjv4KzUPnok1j6WOVwJHQWpSzPAKolgATNoSK8YMDqr5oaU%2FscpOH%2BjC3d87pVV27yrloPqUpRgwvvwbvgCSeNof4IPB0gGfmvw8lexBeHsxLjxsYIIhv4ccApHZVfmrOkSegYJHAYtdf1X8sSJt1%2BtYQl%2Fe1ZF6%2BRbN0abB4iBMvXd7ndUXrClhrLutcnXmBqEbdez%2BFwAb2YI8Ck3WjsnXKMFkNKUuRJ2YM1fdTbU5lwxAGCNpBGSNmg8440D5SI6pA7M6dzlxi3EAhfOy6hE7nqML4HLpqupOA3XgvtWfPb4uQpsK95oe%2FclMaVDW%2FJuBv59Eo3aBec1gsrJm%2FVUqTFwRAsTgjIzcYqkynkyuR56JEwzFW9YZIvASY9iJ33pwcHsNZt%2FxhHnSMx5jRSoHnha1a2o2TQsU1hYosTw22oG97nUDFtZr7UCpypzXoR5i%2FMTIFNyFo9Ngww%2B2xxAY6pgH0rnafLfQwc6VbQQcCoPhrxi8o5ws0XTBrAxFLnVFBTppxHlOQFLZoWxOv2hdWFfVGOz5DdU58dq7%2FZ6gnX0ijB7nuoeJpGazKDU66lY3YF97qQo3dtiGaNr6%2BfunZUv2FwZBmN1j4yAzsx6oReRjCKCz59vz9ES9bpctP0jSPk2%2BfFRs4MVjSZAbZFjJPMOaHqfWmI8LmHPtBgl6G04m64HcZNxc9&X-Amz-Signature=d5dab1148a8193bf450975f1f9e62eb5420b65bac401365395a0a618fb1e3445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VHTJELQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSi9lGoOm3Ez2JXGIrVBLKU0P2gnnCc7l3uh94Ss9RGAiBQ%2BN2LAIoHVEywUh9BgpP8EZvmy9rIwTgagMOb7wFk5iqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTc0ndN%2Fe7AOVpQ0KtwDtIMNwoqwQ05k08x1W82sNfdTAQVp6Y34IKdnSi9mW%2BBsc4l3GdmAJ3ze9XzA8WGyGWE2%2B3MF2hhTbjczmd2ATTwAH5o4E%2BcZiF7xLi%2BpV5Ywi7DIxWqC2qRU4TtgAfs%2Fwa5KZvCO1IV9K8nZCIQPPHA4YcCr4pXHlpfkVkwPC5rmjv4KzUPnok1j6WOVwJHQWpSzPAKolgATNoSK8YMDqr5oaU%2FscpOH%2BjC3d87pVV27yrloPqUpRgwvvwbvgCSeNof4IPB0gGfmvw8lexBeHsxLjxsYIIhv4ccApHZVfmrOkSegYJHAYtdf1X8sSJt1%2BtYQl%2Fe1ZF6%2BRbN0abB4iBMvXd7ndUXrClhrLutcnXmBqEbdez%2BFwAb2YI8Ck3WjsnXKMFkNKUuRJ2YM1fdTbU5lwxAGCNpBGSNmg8440D5SI6pA7M6dzlxi3EAhfOy6hE7nqML4HLpqupOA3XgvtWfPb4uQpsK95oe%2FclMaVDW%2FJuBv59Eo3aBec1gsrJm%2FVUqTFwRAsTgjIzcYqkynkyuR56JEwzFW9YZIvASY9iJ33pwcHsNZt%2FxhHnSMx5jRSoHnha1a2o2TQsU1hYosTw22oG97nUDFtZr7UCpypzXoR5i%2FMTIFNyFo9Ngww%2B2xxAY6pgH0rnafLfQwc6VbQQcCoPhrxi8o5ws0XTBrAxFLnVFBTppxHlOQFLZoWxOv2hdWFfVGOz5DdU58dq7%2FZ6gnX0ijB7nuoeJpGazKDU66lY3YF97qQo3dtiGaNr6%2BfunZUv2FwZBmN1j4yAzsx6oReRjCKCz59vz9ES9bpctP0jSPk2%2BfFRs4MVjSZAbZFjJPMOaHqfWmI8LmHPtBgl6G04m64HcZNxc9&X-Amz-Signature=c81fa5a7044c05075ca21dd40579367ee5f2dd1454c9bb7c1191415e70a5fe6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VHTJELQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSi9lGoOm3Ez2JXGIrVBLKU0P2gnnCc7l3uh94Ss9RGAiBQ%2BN2LAIoHVEywUh9BgpP8EZvmy9rIwTgagMOb7wFk5iqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTc0ndN%2Fe7AOVpQ0KtwDtIMNwoqwQ05k08x1W82sNfdTAQVp6Y34IKdnSi9mW%2BBsc4l3GdmAJ3ze9XzA8WGyGWE2%2B3MF2hhTbjczmd2ATTwAH5o4E%2BcZiF7xLi%2BpV5Ywi7DIxWqC2qRU4TtgAfs%2Fwa5KZvCO1IV9K8nZCIQPPHA4YcCr4pXHlpfkVkwPC5rmjv4KzUPnok1j6WOVwJHQWpSzPAKolgATNoSK8YMDqr5oaU%2FscpOH%2BjC3d87pVV27yrloPqUpRgwvvwbvgCSeNof4IPB0gGfmvw8lexBeHsxLjxsYIIhv4ccApHZVfmrOkSegYJHAYtdf1X8sSJt1%2BtYQl%2Fe1ZF6%2BRbN0abB4iBMvXd7ndUXrClhrLutcnXmBqEbdez%2BFwAb2YI8Ck3WjsnXKMFkNKUuRJ2YM1fdTbU5lwxAGCNpBGSNmg8440D5SI6pA7M6dzlxi3EAhfOy6hE7nqML4HLpqupOA3XgvtWfPb4uQpsK95oe%2FclMaVDW%2FJuBv59Eo3aBec1gsrJm%2FVUqTFwRAsTgjIzcYqkynkyuR56JEwzFW9YZIvASY9iJ33pwcHsNZt%2FxhHnSMx5jRSoHnha1a2o2TQsU1hYosTw22oG97nUDFtZr7UCpypzXoR5i%2FMTIFNyFo9Ngww%2B2xxAY6pgH0rnafLfQwc6VbQQcCoPhrxi8o5ws0XTBrAxFLnVFBTppxHlOQFLZoWxOv2hdWFfVGOz5DdU58dq7%2FZ6gnX0ijB7nuoeJpGazKDU66lY3YF97qQo3dtiGaNr6%2BfunZUv2FwZBmN1j4yAzsx6oReRjCKCz59vz9ES9bpctP0jSPk2%2BfFRs4MVjSZAbZFjJPMOaHqfWmI8LmHPtBgl6G04m64HcZNxc9&X-Amz-Signature=8e4a52eb0099d9446a7ebd046736c81caad52c421596259b01655eee454079e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VHTJELQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSi9lGoOm3Ez2JXGIrVBLKU0P2gnnCc7l3uh94Ss9RGAiBQ%2BN2LAIoHVEywUh9BgpP8EZvmy9rIwTgagMOb7wFk5iqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTc0ndN%2Fe7AOVpQ0KtwDtIMNwoqwQ05k08x1W82sNfdTAQVp6Y34IKdnSi9mW%2BBsc4l3GdmAJ3ze9XzA8WGyGWE2%2B3MF2hhTbjczmd2ATTwAH5o4E%2BcZiF7xLi%2BpV5Ywi7DIxWqC2qRU4TtgAfs%2Fwa5KZvCO1IV9K8nZCIQPPHA4YcCr4pXHlpfkVkwPC5rmjv4KzUPnok1j6WOVwJHQWpSzPAKolgATNoSK8YMDqr5oaU%2FscpOH%2BjC3d87pVV27yrloPqUpRgwvvwbvgCSeNof4IPB0gGfmvw8lexBeHsxLjxsYIIhv4ccApHZVfmrOkSegYJHAYtdf1X8sSJt1%2BtYQl%2Fe1ZF6%2BRbN0abB4iBMvXd7ndUXrClhrLutcnXmBqEbdez%2BFwAb2YI8Ck3WjsnXKMFkNKUuRJ2YM1fdTbU5lwxAGCNpBGSNmg8440D5SI6pA7M6dzlxi3EAhfOy6hE7nqML4HLpqupOA3XgvtWfPb4uQpsK95oe%2FclMaVDW%2FJuBv59Eo3aBec1gsrJm%2FVUqTFwRAsTgjIzcYqkynkyuR56JEwzFW9YZIvASY9iJ33pwcHsNZt%2FxhHnSMx5jRSoHnha1a2o2TQsU1hYosTw22oG97nUDFtZr7UCpypzXoR5i%2FMTIFNyFo9Ngww%2B2xxAY6pgH0rnafLfQwc6VbQQcCoPhrxi8o5ws0XTBrAxFLnVFBTppxHlOQFLZoWxOv2hdWFfVGOz5DdU58dq7%2FZ6gnX0ijB7nuoeJpGazKDU66lY3YF97qQo3dtiGaNr6%2BfunZUv2FwZBmN1j4yAzsx6oReRjCKCz59vz9ES9bpctP0jSPk2%2BfFRs4MVjSZAbZFjJPMOaHqfWmI8LmHPtBgl6G04m64HcZNxc9&X-Amz-Signature=20f840e75aa8769951d58047e63047a5f5bb0f1d5d38d1dd0a59e0549132e38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
