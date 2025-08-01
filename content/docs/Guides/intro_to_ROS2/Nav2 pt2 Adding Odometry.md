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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNWQTEU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbr0RW17t8sFgdqctdJ5tEfdS1QmNDMiCe2lKh3yA6FAIhAPbvAqcv3BuZyb%2FEKlp9Nlq32tVwENyO9GvQYsrQ6iGpKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwKr4qAFxaHYHHo2wq3AMmld3zVAPrptpoqkvnu3F6Q%2FXIhvE%2FQRafmeRV%2BsRiAgovTLJiwcwoCclneqAUR720iPf%2BBqQTB85qkhoEpUZlusaZ%2BT23zCMP4qzGyI1EkEJzJkOeURI71zaFzl45ToMbcer9QQF%2FTeymKQBVvuQEjsRd%2FyHai6r%2BVrICI2CzONNbFO0PamqDFwbIIN5Rt5Ci2u%2FcfwUt38NEUAxR0SWKElUp9GvETiMhtS86bmwb3aJ%2BxqC1AXjl3oAcgS46EzDcBsaPRKAQkvMjLMS0tVgHRsIp9EPFmRB%2Ba5KStrqxL820p9E3eJhfZ3oJwPW2e6igWpwDAqXcv5HaBOpA3JUdx3kMZp0z15EE%2F1lC8rnQvIQKZdkzenImmrh4jfOndmAu69PEE18OPTrn6oZ1RfdP3wg6gleOLsXiFRvGzYF4bVtPiANCqF04uDVlRhLbGPaGCxVEFhKJUTwCrqi%2B4GvS4ThcUaOlsioge2bpcO8zLEcWdgXO33GPpMRzXTTCyCZNeZ71qpV86k4nJzlBmtfPVn%2FRFnLSVbFL30QbcDn6cmcYgt0MCllyXICUIeUd2k4QCW1jeOb1RA8H%2B8VkqQEGnzngkKCgilBn7iRxwaVai6u%2BCjd57zBtsRN1bzCu7rTEBjqkAYEyy%2BNJzpuLsSCcwKfeh1YDIleX1y8ufp2NCW4S43pH8%2BZZu%2FtZdWaU5qJr3YZh5JH7%2FepeYUFsfcQ%2BBPT8UhrFQZHzZmgdJ%2B0%2FkzjatpVTyE0u1H23Fv3ukALkBuCHnxsqgwMIBQjWaFbPz1pVdbc%2FFZwJ0sgAqfd9xCJKZ6pQ9ZpUgitEHkLvcyIqYYlfq2LAYWU%2FAtBZkOMLkeMAHvkBc04C&X-Amz-Signature=713c031a01c977cdff9cfc8d8607dbe5fa0e468b83bcc69dd1ed3b0c286f18a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNWQTEU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbr0RW17t8sFgdqctdJ5tEfdS1QmNDMiCe2lKh3yA6FAIhAPbvAqcv3BuZyb%2FEKlp9Nlq32tVwENyO9GvQYsrQ6iGpKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwKr4qAFxaHYHHo2wq3AMmld3zVAPrptpoqkvnu3F6Q%2FXIhvE%2FQRafmeRV%2BsRiAgovTLJiwcwoCclneqAUR720iPf%2BBqQTB85qkhoEpUZlusaZ%2BT23zCMP4qzGyI1EkEJzJkOeURI71zaFzl45ToMbcer9QQF%2FTeymKQBVvuQEjsRd%2FyHai6r%2BVrICI2CzONNbFO0PamqDFwbIIN5Rt5Ci2u%2FcfwUt38NEUAxR0SWKElUp9GvETiMhtS86bmwb3aJ%2BxqC1AXjl3oAcgS46EzDcBsaPRKAQkvMjLMS0tVgHRsIp9EPFmRB%2Ba5KStrqxL820p9E3eJhfZ3oJwPW2e6igWpwDAqXcv5HaBOpA3JUdx3kMZp0z15EE%2F1lC8rnQvIQKZdkzenImmrh4jfOndmAu69PEE18OPTrn6oZ1RfdP3wg6gleOLsXiFRvGzYF4bVtPiANCqF04uDVlRhLbGPaGCxVEFhKJUTwCrqi%2B4GvS4ThcUaOlsioge2bpcO8zLEcWdgXO33GPpMRzXTTCyCZNeZ71qpV86k4nJzlBmtfPVn%2FRFnLSVbFL30QbcDn6cmcYgt0MCllyXICUIeUd2k4QCW1jeOb1RA8H%2B8VkqQEGnzngkKCgilBn7iRxwaVai6u%2BCjd57zBtsRN1bzCu7rTEBjqkAYEyy%2BNJzpuLsSCcwKfeh1YDIleX1y8ufp2NCW4S43pH8%2BZZu%2FtZdWaU5qJr3YZh5JH7%2FepeYUFsfcQ%2BBPT8UhrFQZHzZmgdJ%2B0%2FkzjatpVTyE0u1H23Fv3ukALkBuCHnxsqgwMIBQjWaFbPz1pVdbc%2FFZwJ0sgAqfd9xCJKZ6pQ9ZpUgitEHkLvcyIqYYlfq2LAYWU%2FAtBZkOMLkeMAHvkBc04C&X-Amz-Signature=5db44c97a8286e2ed148365df1d2bb247c55d9486411e2ce1d83f13112e47b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNWQTEU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbr0RW17t8sFgdqctdJ5tEfdS1QmNDMiCe2lKh3yA6FAIhAPbvAqcv3BuZyb%2FEKlp9Nlq32tVwENyO9GvQYsrQ6iGpKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwKr4qAFxaHYHHo2wq3AMmld3zVAPrptpoqkvnu3F6Q%2FXIhvE%2FQRafmeRV%2BsRiAgovTLJiwcwoCclneqAUR720iPf%2BBqQTB85qkhoEpUZlusaZ%2BT23zCMP4qzGyI1EkEJzJkOeURI71zaFzl45ToMbcer9QQF%2FTeymKQBVvuQEjsRd%2FyHai6r%2BVrICI2CzONNbFO0PamqDFwbIIN5Rt5Ci2u%2FcfwUt38NEUAxR0SWKElUp9GvETiMhtS86bmwb3aJ%2BxqC1AXjl3oAcgS46EzDcBsaPRKAQkvMjLMS0tVgHRsIp9EPFmRB%2Ba5KStrqxL820p9E3eJhfZ3oJwPW2e6igWpwDAqXcv5HaBOpA3JUdx3kMZp0z15EE%2F1lC8rnQvIQKZdkzenImmrh4jfOndmAu69PEE18OPTrn6oZ1RfdP3wg6gleOLsXiFRvGzYF4bVtPiANCqF04uDVlRhLbGPaGCxVEFhKJUTwCrqi%2B4GvS4ThcUaOlsioge2bpcO8zLEcWdgXO33GPpMRzXTTCyCZNeZ71qpV86k4nJzlBmtfPVn%2FRFnLSVbFL30QbcDn6cmcYgt0MCllyXICUIeUd2k4QCW1jeOb1RA8H%2B8VkqQEGnzngkKCgilBn7iRxwaVai6u%2BCjd57zBtsRN1bzCu7rTEBjqkAYEyy%2BNJzpuLsSCcwKfeh1YDIleX1y8ufp2NCW4S43pH8%2BZZu%2FtZdWaU5qJr3YZh5JH7%2FepeYUFsfcQ%2BBPT8UhrFQZHzZmgdJ%2B0%2FkzjatpVTyE0u1H23Fv3ukALkBuCHnxsqgwMIBQjWaFbPz1pVdbc%2FFZwJ0sgAqfd9xCJKZ6pQ9ZpUgitEHkLvcyIqYYlfq2LAYWU%2FAtBZkOMLkeMAHvkBc04C&X-Amz-Signature=9192a43923488844a15b232ad96d42d65b2cc78d305816888add2a5156480a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNWQTEU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbr0RW17t8sFgdqctdJ5tEfdS1QmNDMiCe2lKh3yA6FAIhAPbvAqcv3BuZyb%2FEKlp9Nlq32tVwENyO9GvQYsrQ6iGpKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwKr4qAFxaHYHHo2wq3AMmld3zVAPrptpoqkvnu3F6Q%2FXIhvE%2FQRafmeRV%2BsRiAgovTLJiwcwoCclneqAUR720iPf%2BBqQTB85qkhoEpUZlusaZ%2BT23zCMP4qzGyI1EkEJzJkOeURI71zaFzl45ToMbcer9QQF%2FTeymKQBVvuQEjsRd%2FyHai6r%2BVrICI2CzONNbFO0PamqDFwbIIN5Rt5Ci2u%2FcfwUt38NEUAxR0SWKElUp9GvETiMhtS86bmwb3aJ%2BxqC1AXjl3oAcgS46EzDcBsaPRKAQkvMjLMS0tVgHRsIp9EPFmRB%2Ba5KStrqxL820p9E3eJhfZ3oJwPW2e6igWpwDAqXcv5HaBOpA3JUdx3kMZp0z15EE%2F1lC8rnQvIQKZdkzenImmrh4jfOndmAu69PEE18OPTrn6oZ1RfdP3wg6gleOLsXiFRvGzYF4bVtPiANCqF04uDVlRhLbGPaGCxVEFhKJUTwCrqi%2B4GvS4ThcUaOlsioge2bpcO8zLEcWdgXO33GPpMRzXTTCyCZNeZ71qpV86k4nJzlBmtfPVn%2FRFnLSVbFL30QbcDn6cmcYgt0MCllyXICUIeUd2k4QCW1jeOb1RA8H%2B8VkqQEGnzngkKCgilBn7iRxwaVai6u%2BCjd57zBtsRN1bzCu7rTEBjqkAYEyy%2BNJzpuLsSCcwKfeh1YDIleX1y8ufp2NCW4S43pH8%2BZZu%2FtZdWaU5qJr3YZh5JH7%2FepeYUFsfcQ%2BBPT8UhrFQZHzZmgdJ%2B0%2FkzjatpVTyE0u1H23Fv3ukALkBuCHnxsqgwMIBQjWaFbPz1pVdbc%2FFZwJ0sgAqfd9xCJKZ6pQ9ZpUgitEHkLvcyIqYYlfq2LAYWU%2FAtBZkOMLkeMAHvkBc04C&X-Amz-Signature=f9dffdf22abe3414731c372207be4d59a34f32ff774a1a9c22bcb2d06eaa9249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNWQTEU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbr0RW17t8sFgdqctdJ5tEfdS1QmNDMiCe2lKh3yA6FAIhAPbvAqcv3BuZyb%2FEKlp9Nlq32tVwENyO9GvQYsrQ6iGpKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwKr4qAFxaHYHHo2wq3AMmld3zVAPrptpoqkvnu3F6Q%2FXIhvE%2FQRafmeRV%2BsRiAgovTLJiwcwoCclneqAUR720iPf%2BBqQTB85qkhoEpUZlusaZ%2BT23zCMP4qzGyI1EkEJzJkOeURI71zaFzl45ToMbcer9QQF%2FTeymKQBVvuQEjsRd%2FyHai6r%2BVrICI2CzONNbFO0PamqDFwbIIN5Rt5Ci2u%2FcfwUt38NEUAxR0SWKElUp9GvETiMhtS86bmwb3aJ%2BxqC1AXjl3oAcgS46EzDcBsaPRKAQkvMjLMS0tVgHRsIp9EPFmRB%2Ba5KStrqxL820p9E3eJhfZ3oJwPW2e6igWpwDAqXcv5HaBOpA3JUdx3kMZp0z15EE%2F1lC8rnQvIQKZdkzenImmrh4jfOndmAu69PEE18OPTrn6oZ1RfdP3wg6gleOLsXiFRvGzYF4bVtPiANCqF04uDVlRhLbGPaGCxVEFhKJUTwCrqi%2B4GvS4ThcUaOlsioge2bpcO8zLEcWdgXO33GPpMRzXTTCyCZNeZ71qpV86k4nJzlBmtfPVn%2FRFnLSVbFL30QbcDn6cmcYgt0MCllyXICUIeUd2k4QCW1jeOb1RA8H%2B8VkqQEGnzngkKCgilBn7iRxwaVai6u%2BCjd57zBtsRN1bzCu7rTEBjqkAYEyy%2BNJzpuLsSCcwKfeh1YDIleX1y8ufp2NCW4S43pH8%2BZZu%2FtZdWaU5qJr3YZh5JH7%2FepeYUFsfcQ%2BBPT8UhrFQZHzZmgdJ%2B0%2FkzjatpVTyE0u1H23Fv3ukALkBuCHnxsqgwMIBQjWaFbPz1pVdbc%2FFZwJ0sgAqfd9xCJKZ6pQ9ZpUgitEHkLvcyIqYYlfq2LAYWU%2FAtBZkOMLkeMAHvkBc04C&X-Amz-Signature=1ee2a72fbfec59343b28499182715f81702aaa1bec67c8649c160e902afd82da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNWQTEU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbr0RW17t8sFgdqctdJ5tEfdS1QmNDMiCe2lKh3yA6FAIhAPbvAqcv3BuZyb%2FEKlp9Nlq32tVwENyO9GvQYsrQ6iGpKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwKr4qAFxaHYHHo2wq3AMmld3zVAPrptpoqkvnu3F6Q%2FXIhvE%2FQRafmeRV%2BsRiAgovTLJiwcwoCclneqAUR720iPf%2BBqQTB85qkhoEpUZlusaZ%2BT23zCMP4qzGyI1EkEJzJkOeURI71zaFzl45ToMbcer9QQF%2FTeymKQBVvuQEjsRd%2FyHai6r%2BVrICI2CzONNbFO0PamqDFwbIIN5Rt5Ci2u%2FcfwUt38NEUAxR0SWKElUp9GvETiMhtS86bmwb3aJ%2BxqC1AXjl3oAcgS46EzDcBsaPRKAQkvMjLMS0tVgHRsIp9EPFmRB%2Ba5KStrqxL820p9E3eJhfZ3oJwPW2e6igWpwDAqXcv5HaBOpA3JUdx3kMZp0z15EE%2F1lC8rnQvIQKZdkzenImmrh4jfOndmAu69PEE18OPTrn6oZ1RfdP3wg6gleOLsXiFRvGzYF4bVtPiANCqF04uDVlRhLbGPaGCxVEFhKJUTwCrqi%2B4GvS4ThcUaOlsioge2bpcO8zLEcWdgXO33GPpMRzXTTCyCZNeZ71qpV86k4nJzlBmtfPVn%2FRFnLSVbFL30QbcDn6cmcYgt0MCllyXICUIeUd2k4QCW1jeOb1RA8H%2B8VkqQEGnzngkKCgilBn7iRxwaVai6u%2BCjd57zBtsRN1bzCu7rTEBjqkAYEyy%2BNJzpuLsSCcwKfeh1YDIleX1y8ufp2NCW4S43pH8%2BZZu%2FtZdWaU5qJr3YZh5JH7%2FepeYUFsfcQ%2BBPT8UhrFQZHzZmgdJ%2B0%2FkzjatpVTyE0u1H23Fv3ukALkBuCHnxsqgwMIBQjWaFbPz1pVdbc%2FFZwJ0sgAqfd9xCJKZ6pQ9ZpUgitEHkLvcyIqYYlfq2LAYWU%2FAtBZkOMLkeMAHvkBc04C&X-Amz-Signature=cb51029a0447b335329cb1e28d5a69b36856155e10634a9a3f2e1c8d31656e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNWQTEU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbr0RW17t8sFgdqctdJ5tEfdS1QmNDMiCe2lKh3yA6FAIhAPbvAqcv3BuZyb%2FEKlp9Nlq32tVwENyO9GvQYsrQ6iGpKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwKr4qAFxaHYHHo2wq3AMmld3zVAPrptpoqkvnu3F6Q%2FXIhvE%2FQRafmeRV%2BsRiAgovTLJiwcwoCclneqAUR720iPf%2BBqQTB85qkhoEpUZlusaZ%2BT23zCMP4qzGyI1EkEJzJkOeURI71zaFzl45ToMbcer9QQF%2FTeymKQBVvuQEjsRd%2FyHai6r%2BVrICI2CzONNbFO0PamqDFwbIIN5Rt5Ci2u%2FcfwUt38NEUAxR0SWKElUp9GvETiMhtS86bmwb3aJ%2BxqC1AXjl3oAcgS46EzDcBsaPRKAQkvMjLMS0tVgHRsIp9EPFmRB%2Ba5KStrqxL820p9E3eJhfZ3oJwPW2e6igWpwDAqXcv5HaBOpA3JUdx3kMZp0z15EE%2F1lC8rnQvIQKZdkzenImmrh4jfOndmAu69PEE18OPTrn6oZ1RfdP3wg6gleOLsXiFRvGzYF4bVtPiANCqF04uDVlRhLbGPaGCxVEFhKJUTwCrqi%2B4GvS4ThcUaOlsioge2bpcO8zLEcWdgXO33GPpMRzXTTCyCZNeZ71qpV86k4nJzlBmtfPVn%2FRFnLSVbFL30QbcDn6cmcYgt0MCllyXICUIeUd2k4QCW1jeOb1RA8H%2B8VkqQEGnzngkKCgilBn7iRxwaVai6u%2BCjd57zBtsRN1bzCu7rTEBjqkAYEyy%2BNJzpuLsSCcwKfeh1YDIleX1y8ufp2NCW4S43pH8%2BZZu%2FtZdWaU5qJr3YZh5JH7%2FepeYUFsfcQ%2BBPT8UhrFQZHzZmgdJ%2B0%2FkzjatpVTyE0u1H23Fv3ukALkBuCHnxsqgwMIBQjWaFbPz1pVdbc%2FFZwJ0sgAqfd9xCJKZ6pQ9ZpUgitEHkLvcyIqYYlfq2LAYWU%2FAtBZkOMLkeMAHvkBc04C&X-Amz-Signature=ba018e444bf5f514c2dfb4f4c8226c5cde5e245fec68c92c71e2247cfbbecf02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNWQTEU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbr0RW17t8sFgdqctdJ5tEfdS1QmNDMiCe2lKh3yA6FAIhAPbvAqcv3BuZyb%2FEKlp9Nlq32tVwENyO9GvQYsrQ6iGpKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwKr4qAFxaHYHHo2wq3AMmld3zVAPrptpoqkvnu3F6Q%2FXIhvE%2FQRafmeRV%2BsRiAgovTLJiwcwoCclneqAUR720iPf%2BBqQTB85qkhoEpUZlusaZ%2BT23zCMP4qzGyI1EkEJzJkOeURI71zaFzl45ToMbcer9QQF%2FTeymKQBVvuQEjsRd%2FyHai6r%2BVrICI2CzONNbFO0PamqDFwbIIN5Rt5Ci2u%2FcfwUt38NEUAxR0SWKElUp9GvETiMhtS86bmwb3aJ%2BxqC1AXjl3oAcgS46EzDcBsaPRKAQkvMjLMS0tVgHRsIp9EPFmRB%2Ba5KStrqxL820p9E3eJhfZ3oJwPW2e6igWpwDAqXcv5HaBOpA3JUdx3kMZp0z15EE%2F1lC8rnQvIQKZdkzenImmrh4jfOndmAu69PEE18OPTrn6oZ1RfdP3wg6gleOLsXiFRvGzYF4bVtPiANCqF04uDVlRhLbGPaGCxVEFhKJUTwCrqi%2B4GvS4ThcUaOlsioge2bpcO8zLEcWdgXO33GPpMRzXTTCyCZNeZ71qpV86k4nJzlBmtfPVn%2FRFnLSVbFL30QbcDn6cmcYgt0MCllyXICUIeUd2k4QCW1jeOb1RA8H%2B8VkqQEGnzngkKCgilBn7iRxwaVai6u%2BCjd57zBtsRN1bzCu7rTEBjqkAYEyy%2BNJzpuLsSCcwKfeh1YDIleX1y8ufp2NCW4S43pH8%2BZZu%2FtZdWaU5qJr3YZh5JH7%2FepeYUFsfcQ%2BBPT8UhrFQZHzZmgdJ%2B0%2FkzjatpVTyE0u1H23Fv3ukALkBuCHnxsqgwMIBQjWaFbPz1pVdbc%2FFZwJ0sgAqfd9xCJKZ6pQ9ZpUgitEHkLvcyIqYYlfq2LAYWU%2FAtBZkOMLkeMAHvkBc04C&X-Amz-Signature=fd486bf3a5baef476d8392a72cfebf7e13932a6fd59025fbfd898da4b2eb1a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNWQTEU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbr0RW17t8sFgdqctdJ5tEfdS1QmNDMiCe2lKh3yA6FAIhAPbvAqcv3BuZyb%2FEKlp9Nlq32tVwENyO9GvQYsrQ6iGpKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwKr4qAFxaHYHHo2wq3AMmld3zVAPrptpoqkvnu3F6Q%2FXIhvE%2FQRafmeRV%2BsRiAgovTLJiwcwoCclneqAUR720iPf%2BBqQTB85qkhoEpUZlusaZ%2BT23zCMP4qzGyI1EkEJzJkOeURI71zaFzl45ToMbcer9QQF%2FTeymKQBVvuQEjsRd%2FyHai6r%2BVrICI2CzONNbFO0PamqDFwbIIN5Rt5Ci2u%2FcfwUt38NEUAxR0SWKElUp9GvETiMhtS86bmwb3aJ%2BxqC1AXjl3oAcgS46EzDcBsaPRKAQkvMjLMS0tVgHRsIp9EPFmRB%2Ba5KStrqxL820p9E3eJhfZ3oJwPW2e6igWpwDAqXcv5HaBOpA3JUdx3kMZp0z15EE%2F1lC8rnQvIQKZdkzenImmrh4jfOndmAu69PEE18OPTrn6oZ1RfdP3wg6gleOLsXiFRvGzYF4bVtPiANCqF04uDVlRhLbGPaGCxVEFhKJUTwCrqi%2B4GvS4ThcUaOlsioge2bpcO8zLEcWdgXO33GPpMRzXTTCyCZNeZ71qpV86k4nJzlBmtfPVn%2FRFnLSVbFL30QbcDn6cmcYgt0MCllyXICUIeUd2k4QCW1jeOb1RA8H%2B8VkqQEGnzngkKCgilBn7iRxwaVai6u%2BCjd57zBtsRN1bzCu7rTEBjqkAYEyy%2BNJzpuLsSCcwKfeh1YDIleX1y8ufp2NCW4S43pH8%2BZZu%2FtZdWaU5qJr3YZh5JH7%2FepeYUFsfcQ%2BBPT8UhrFQZHzZmgdJ%2B0%2FkzjatpVTyE0u1H23Fv3ukALkBuCHnxsqgwMIBQjWaFbPz1pVdbc%2FFZwJ0sgAqfd9xCJKZ6pQ9ZpUgitEHkLvcyIqYYlfq2LAYWU%2FAtBZkOMLkeMAHvkBc04C&X-Amz-Signature=fe511b3fb14eaaea688fca22b98f9bdc85eafd02d1d8996a700145b274e056df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UDC5AYK%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T231009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF2aQotA%2F%2F5LNqJdLjFF8QFTeovAwKQKAeD2pY54FPLQIgWVJnYLLU0GPN6RymkUU9HcCcKAl50FZoF6qKDr0TI9YqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDkiNmzP1nvtHpC%2FircA422u8TfzWpdDZ01kx9IA8i%2Fsc7%2FaOAwIjbmDYa12zhbOMi4j%2FJ%2FvrIoYSqN02im45XHpfUg2rvmq8Gjsil08q%2FiOPT2%2Fvy5oODLUrM3TmHsuMET6vANoBTN39mI5viVVAuBGdg3d8bNWBD7Kvdse5guKrFcggcyugiGXDmJXPPo8hP%2Fj9gQ%2F6H24BnTIN8qbOuP4cOJNKxk3benG2EYXXXeyEOoBxozHi02blrURRSaCUfm6X%2FmVRaNfmk6mvQAVesOSYgis6RIGhLK2j9JOlLGvwPCwg48TQGTgseQdQSh0nDjxjjRwn4ApETfycCCdtkWb53RpCLi5G%2BnyoZuhquyIbNI7afEkfykWpyJhvkWgGedFmQuKzWFARd0Ix7qUrOH09k84uxwrUMc9970iYx1uXv2BAtfgrGWb4OMefBwHwh6JQV%2FQe6Q7prRdPzs7%2Fx%2Foy7tPXknm7tHU23HtyXkXDAC98G%2Fdb0%2BXoqY%2FKOoznz94LV2Hy16p6sIwIQAITuLJkB%2BFnGIk758lrflFM6W7aAPO4Dz%2FBoSaJ27aG1cSF38nI6Heb%2FH3upR4%2Bqfl94CDCbCVsCs0PlnQcrdoTHKm%2BRJpBPVaAkQFYAprjXKh0ioyw0AFdSWpERnMLHutMQGOqUBV0G3BBZZO%2Be9s8bsHiSX9JPfGzGtteg7wEa3Ju%2Fc8ixYyZvjLiovWDRiV9cCcAJCRGnKKkUlbOLZ6SPblvYC5Z8OOUsF2vHcH9CwCkwF98I27yw24bxJ1Ftn2%2Fi9LMzuATEwff6q2utim2mMguGhvSBXgCG19SBxuW4Ce8tgpafDgWgKywKhomaQQvIwrH7dD3hVKnX%2FiTUo1SelTbwImfWiQj%2FZ&X-Amz-Signature=c9d4c8dd6bb8518b85740a8005d64aca03e77c65b49cae46577faeb9c01812ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNWQTEU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbr0RW17t8sFgdqctdJ5tEfdS1QmNDMiCe2lKh3yA6FAIhAPbvAqcv3BuZyb%2FEKlp9Nlq32tVwENyO9GvQYsrQ6iGpKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwKr4qAFxaHYHHo2wq3AMmld3zVAPrptpoqkvnu3F6Q%2FXIhvE%2FQRafmeRV%2BsRiAgovTLJiwcwoCclneqAUR720iPf%2BBqQTB85qkhoEpUZlusaZ%2BT23zCMP4qzGyI1EkEJzJkOeURI71zaFzl45ToMbcer9QQF%2FTeymKQBVvuQEjsRd%2FyHai6r%2BVrICI2CzONNbFO0PamqDFwbIIN5Rt5Ci2u%2FcfwUt38NEUAxR0SWKElUp9GvETiMhtS86bmwb3aJ%2BxqC1AXjl3oAcgS46EzDcBsaPRKAQkvMjLMS0tVgHRsIp9EPFmRB%2Ba5KStrqxL820p9E3eJhfZ3oJwPW2e6igWpwDAqXcv5HaBOpA3JUdx3kMZp0z15EE%2F1lC8rnQvIQKZdkzenImmrh4jfOndmAu69PEE18OPTrn6oZ1RfdP3wg6gleOLsXiFRvGzYF4bVtPiANCqF04uDVlRhLbGPaGCxVEFhKJUTwCrqi%2B4GvS4ThcUaOlsioge2bpcO8zLEcWdgXO33GPpMRzXTTCyCZNeZ71qpV86k4nJzlBmtfPVn%2FRFnLSVbFL30QbcDn6cmcYgt0MCllyXICUIeUd2k4QCW1jeOb1RA8H%2B8VkqQEGnzngkKCgilBn7iRxwaVai6u%2BCjd57zBtsRN1bzCu7rTEBjqkAYEyy%2BNJzpuLsSCcwKfeh1YDIleX1y8ufp2NCW4S43pH8%2BZZu%2FtZdWaU5qJr3YZh5JH7%2FepeYUFsfcQ%2BBPT8UhrFQZHzZmgdJ%2B0%2FkzjatpVTyE0u1H23Fv3ukALkBuCHnxsqgwMIBQjWaFbPz1pVdbc%2FFZwJ0sgAqfd9xCJKZ6pQ9ZpUgitEHkLvcyIqYYlfq2LAYWU%2FAtBZkOMLkeMAHvkBc04C&X-Amz-Signature=50da429dc587544a841ab68bab75300ead37f46724b5d493aa4639c2ea4b8945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBGWLBF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyf5sSmNN9yV53zQG9NtqMRBxAzjioBWf9Z3c5mg0kjAiBWfL3QYG6PUyo6hAG2UEeRzskravAE8iY%2BxDPg8K4xHSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQiz5Nd99eI%2BTohcMKtwDyYbj7JACWgaI8pR4uD23%2FdUSGzKW08JiQ%2FiGF1BUXE%2F4iUFvNEj7Y%2FjFjtdRZ7Ru2u2Y%2FVxEh2QwaPGxRjgwSQkgIzTRMcDNtldeJZqCOKL4z%2Fy6iRKn1xmTmM6EssZSv49hvDEzH7Va0Q2RN95Cy1U7aQ%2FIUGk5quMlFcqPiagkK1s3Qb3BAP1%2FOzWScTLSjyGjbNdtRj19C5KS%2BBl6wECAE4EkaJM8OjL7ZwJg88VC4C%2FQAmk3zwRmMn2OJbZf%2FTtJ6i6gV3o6xvnSr1Zvmgb%2FiqmOMcwC3SKtLcy%2Bs9J4HaHBxkrneis0IyOWIuGos4UgnhHgf4ipa%2BYqLhpmJMLXM%2FFR2EHCLZkP1qvr8CeYUP9GHWcpf9B5CswZuLKq46SGXdDvXwbGjgwYpotPRDT8uKbY6Oh9jxr2AeKIetLL%2F0zU2qO96FY3TBeR0%2BCFcetPzN3n08knPrjN7LBe%2BcMSxjxNiNWZsAPxrtSAUA1dQ723TFmaPDp%2FdIRObsB%2BADdP2W46q0%2BjF01E97yQYDGkYDeFa%2B%2BIRh3G8uRkSokxUZTJbOvH%2BbHBGH4bx52EhTXUXMFTMvzqCkLbJ3U1GX5Hhb3MWAOI0tVDbMqoEwUCIDLm3X7HtPasM0Iw6O20xAY6pgGCbkvJ2c3Gk5NCtOMkj9TW9vphxPpHpVwd9mdSOjDs6hrWyuHflIed1KwGoqqmCq%2BKLpnNzQIcQIPW0pTeVETZFsmw0b%2B6nBZavUle9XBu5tzWsnyyOhhstv8qEf51y8RwKUAYWuOFbcZGI4afh5Ed5iwex%2BRCifeD%2BYEn0fw1tsu%2BdbsNeRAjTxRq5FEb2ODYsKPGyi9uqHusGBjlUGMoEo63fO%2Bb&X-Amz-Signature=c05b0cec49d3d76930f58e7e36991dfc6723c4843a831062416c94f871652928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBGWLBF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyf5sSmNN9yV53zQG9NtqMRBxAzjioBWf9Z3c5mg0kjAiBWfL3QYG6PUyo6hAG2UEeRzskravAE8iY%2BxDPg8K4xHSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQiz5Nd99eI%2BTohcMKtwDyYbj7JACWgaI8pR4uD23%2FdUSGzKW08JiQ%2FiGF1BUXE%2F4iUFvNEj7Y%2FjFjtdRZ7Ru2u2Y%2FVxEh2QwaPGxRjgwSQkgIzTRMcDNtldeJZqCOKL4z%2Fy6iRKn1xmTmM6EssZSv49hvDEzH7Va0Q2RN95Cy1U7aQ%2FIUGk5quMlFcqPiagkK1s3Qb3BAP1%2FOzWScTLSjyGjbNdtRj19C5KS%2BBl6wECAE4EkaJM8OjL7ZwJg88VC4C%2FQAmk3zwRmMn2OJbZf%2FTtJ6i6gV3o6xvnSr1Zvmgb%2FiqmOMcwC3SKtLcy%2Bs9J4HaHBxkrneis0IyOWIuGos4UgnhHgf4ipa%2BYqLhpmJMLXM%2FFR2EHCLZkP1qvr8CeYUP9GHWcpf9B5CswZuLKq46SGXdDvXwbGjgwYpotPRDT8uKbY6Oh9jxr2AeKIetLL%2F0zU2qO96FY3TBeR0%2BCFcetPzN3n08knPrjN7LBe%2BcMSxjxNiNWZsAPxrtSAUA1dQ723TFmaPDp%2FdIRObsB%2BADdP2W46q0%2BjF01E97yQYDGkYDeFa%2B%2BIRh3G8uRkSokxUZTJbOvH%2BbHBGH4bx52EhTXUXMFTMvzqCkLbJ3U1GX5Hhb3MWAOI0tVDbMqoEwUCIDLm3X7HtPasM0Iw6O20xAY6pgGCbkvJ2c3Gk5NCtOMkj9TW9vphxPpHpVwd9mdSOjDs6hrWyuHflIed1KwGoqqmCq%2BKLpnNzQIcQIPW0pTeVETZFsmw0b%2B6nBZavUle9XBu5tzWsnyyOhhstv8qEf51y8RwKUAYWuOFbcZGI4afh5Ed5iwex%2BRCifeD%2BYEn0fw1tsu%2BdbsNeRAjTxRq5FEb2ODYsKPGyi9uqHusGBjlUGMoEo63fO%2Bb&X-Amz-Signature=e091422f2471ee0e9469aea38c96c4ac164e548032aed8615646f73f9ef0c1de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBGWLBF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyf5sSmNN9yV53zQG9NtqMRBxAzjioBWf9Z3c5mg0kjAiBWfL3QYG6PUyo6hAG2UEeRzskravAE8iY%2BxDPg8K4xHSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQiz5Nd99eI%2BTohcMKtwDyYbj7JACWgaI8pR4uD23%2FdUSGzKW08JiQ%2FiGF1BUXE%2F4iUFvNEj7Y%2FjFjtdRZ7Ru2u2Y%2FVxEh2QwaPGxRjgwSQkgIzTRMcDNtldeJZqCOKL4z%2Fy6iRKn1xmTmM6EssZSv49hvDEzH7Va0Q2RN95Cy1U7aQ%2FIUGk5quMlFcqPiagkK1s3Qb3BAP1%2FOzWScTLSjyGjbNdtRj19C5KS%2BBl6wECAE4EkaJM8OjL7ZwJg88VC4C%2FQAmk3zwRmMn2OJbZf%2FTtJ6i6gV3o6xvnSr1Zvmgb%2FiqmOMcwC3SKtLcy%2Bs9J4HaHBxkrneis0IyOWIuGos4UgnhHgf4ipa%2BYqLhpmJMLXM%2FFR2EHCLZkP1qvr8CeYUP9GHWcpf9B5CswZuLKq46SGXdDvXwbGjgwYpotPRDT8uKbY6Oh9jxr2AeKIetLL%2F0zU2qO96FY3TBeR0%2BCFcetPzN3n08knPrjN7LBe%2BcMSxjxNiNWZsAPxrtSAUA1dQ723TFmaPDp%2FdIRObsB%2BADdP2W46q0%2BjF01E97yQYDGkYDeFa%2B%2BIRh3G8uRkSokxUZTJbOvH%2BbHBGH4bx52EhTXUXMFTMvzqCkLbJ3U1GX5Hhb3MWAOI0tVDbMqoEwUCIDLm3X7HtPasM0Iw6O20xAY6pgGCbkvJ2c3Gk5NCtOMkj9TW9vphxPpHpVwd9mdSOjDs6hrWyuHflIed1KwGoqqmCq%2BKLpnNzQIcQIPW0pTeVETZFsmw0b%2B6nBZavUle9XBu5tzWsnyyOhhstv8qEf51y8RwKUAYWuOFbcZGI4afh5Ed5iwex%2BRCifeD%2BYEn0fw1tsu%2BdbsNeRAjTxRq5FEb2ODYsKPGyi9uqHusGBjlUGMoEo63fO%2Bb&X-Amz-Signature=c55c3c9cf814601270546bf487746e784b26403e4ace750609fe5caa8f0cd042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBGWLBF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyf5sSmNN9yV53zQG9NtqMRBxAzjioBWf9Z3c5mg0kjAiBWfL3QYG6PUyo6hAG2UEeRzskravAE8iY%2BxDPg8K4xHSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQiz5Nd99eI%2BTohcMKtwDyYbj7JACWgaI8pR4uD23%2FdUSGzKW08JiQ%2FiGF1BUXE%2F4iUFvNEj7Y%2FjFjtdRZ7Ru2u2Y%2FVxEh2QwaPGxRjgwSQkgIzTRMcDNtldeJZqCOKL4z%2Fy6iRKn1xmTmM6EssZSv49hvDEzH7Va0Q2RN95Cy1U7aQ%2FIUGk5quMlFcqPiagkK1s3Qb3BAP1%2FOzWScTLSjyGjbNdtRj19C5KS%2BBl6wECAE4EkaJM8OjL7ZwJg88VC4C%2FQAmk3zwRmMn2OJbZf%2FTtJ6i6gV3o6xvnSr1Zvmgb%2FiqmOMcwC3SKtLcy%2Bs9J4HaHBxkrneis0IyOWIuGos4UgnhHgf4ipa%2BYqLhpmJMLXM%2FFR2EHCLZkP1qvr8CeYUP9GHWcpf9B5CswZuLKq46SGXdDvXwbGjgwYpotPRDT8uKbY6Oh9jxr2AeKIetLL%2F0zU2qO96FY3TBeR0%2BCFcetPzN3n08knPrjN7LBe%2BcMSxjxNiNWZsAPxrtSAUA1dQ723TFmaPDp%2FdIRObsB%2BADdP2W46q0%2BjF01E97yQYDGkYDeFa%2B%2BIRh3G8uRkSokxUZTJbOvH%2BbHBGH4bx52EhTXUXMFTMvzqCkLbJ3U1GX5Hhb3MWAOI0tVDbMqoEwUCIDLm3X7HtPasM0Iw6O20xAY6pgGCbkvJ2c3Gk5NCtOMkj9TW9vphxPpHpVwd9mdSOjDs6hrWyuHflIed1KwGoqqmCq%2BKLpnNzQIcQIPW0pTeVETZFsmw0b%2B6nBZavUle9XBu5tzWsnyyOhhstv8qEf51y8RwKUAYWuOFbcZGI4afh5Ed5iwex%2BRCifeD%2BYEn0fw1tsu%2BdbsNeRAjTxRq5FEb2ODYsKPGyi9uqHusGBjlUGMoEo63fO%2Bb&X-Amz-Signature=186f80fb7c759572486690a5402241c7c0e11d5438c00843a1b602d25a834573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBGWLBF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyf5sSmNN9yV53zQG9NtqMRBxAzjioBWf9Z3c5mg0kjAiBWfL3QYG6PUyo6hAG2UEeRzskravAE8iY%2BxDPg8K4xHSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQiz5Nd99eI%2BTohcMKtwDyYbj7JACWgaI8pR4uD23%2FdUSGzKW08JiQ%2FiGF1BUXE%2F4iUFvNEj7Y%2FjFjtdRZ7Ru2u2Y%2FVxEh2QwaPGxRjgwSQkgIzTRMcDNtldeJZqCOKL4z%2Fy6iRKn1xmTmM6EssZSv49hvDEzH7Va0Q2RN95Cy1U7aQ%2FIUGk5quMlFcqPiagkK1s3Qb3BAP1%2FOzWScTLSjyGjbNdtRj19C5KS%2BBl6wECAE4EkaJM8OjL7ZwJg88VC4C%2FQAmk3zwRmMn2OJbZf%2FTtJ6i6gV3o6xvnSr1Zvmgb%2FiqmOMcwC3SKtLcy%2Bs9J4HaHBxkrneis0IyOWIuGos4UgnhHgf4ipa%2BYqLhpmJMLXM%2FFR2EHCLZkP1qvr8CeYUP9GHWcpf9B5CswZuLKq46SGXdDvXwbGjgwYpotPRDT8uKbY6Oh9jxr2AeKIetLL%2F0zU2qO96FY3TBeR0%2BCFcetPzN3n08knPrjN7LBe%2BcMSxjxNiNWZsAPxrtSAUA1dQ723TFmaPDp%2FdIRObsB%2BADdP2W46q0%2BjF01E97yQYDGkYDeFa%2B%2BIRh3G8uRkSokxUZTJbOvH%2BbHBGH4bx52EhTXUXMFTMvzqCkLbJ3U1GX5Hhb3MWAOI0tVDbMqoEwUCIDLm3X7HtPasM0Iw6O20xAY6pgGCbkvJ2c3Gk5NCtOMkj9TW9vphxPpHpVwd9mdSOjDs6hrWyuHflIed1KwGoqqmCq%2BKLpnNzQIcQIPW0pTeVETZFsmw0b%2B6nBZavUle9XBu5tzWsnyyOhhstv8qEf51y8RwKUAYWuOFbcZGI4afh5Ed5iwex%2BRCifeD%2BYEn0fw1tsu%2BdbsNeRAjTxRq5FEb2ODYsKPGyi9uqHusGBjlUGMoEo63fO%2Bb&X-Amz-Signature=6edea685b918379173102226e3d8adcac7e80cc29597f8079015767cface30fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBGWLBF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyf5sSmNN9yV53zQG9NtqMRBxAzjioBWf9Z3c5mg0kjAiBWfL3QYG6PUyo6hAG2UEeRzskravAE8iY%2BxDPg8K4xHSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQiz5Nd99eI%2BTohcMKtwDyYbj7JACWgaI8pR4uD23%2FdUSGzKW08JiQ%2FiGF1BUXE%2F4iUFvNEj7Y%2FjFjtdRZ7Ru2u2Y%2FVxEh2QwaPGxRjgwSQkgIzTRMcDNtldeJZqCOKL4z%2Fy6iRKn1xmTmM6EssZSv49hvDEzH7Va0Q2RN95Cy1U7aQ%2FIUGk5quMlFcqPiagkK1s3Qb3BAP1%2FOzWScTLSjyGjbNdtRj19C5KS%2BBl6wECAE4EkaJM8OjL7ZwJg88VC4C%2FQAmk3zwRmMn2OJbZf%2FTtJ6i6gV3o6xvnSr1Zvmgb%2FiqmOMcwC3SKtLcy%2Bs9J4HaHBxkrneis0IyOWIuGos4UgnhHgf4ipa%2BYqLhpmJMLXM%2FFR2EHCLZkP1qvr8CeYUP9GHWcpf9B5CswZuLKq46SGXdDvXwbGjgwYpotPRDT8uKbY6Oh9jxr2AeKIetLL%2F0zU2qO96FY3TBeR0%2BCFcetPzN3n08knPrjN7LBe%2BcMSxjxNiNWZsAPxrtSAUA1dQ723TFmaPDp%2FdIRObsB%2BADdP2W46q0%2BjF01E97yQYDGkYDeFa%2B%2BIRh3G8uRkSokxUZTJbOvH%2BbHBGH4bx52EhTXUXMFTMvzqCkLbJ3U1GX5Hhb3MWAOI0tVDbMqoEwUCIDLm3X7HtPasM0Iw6O20xAY6pgGCbkvJ2c3Gk5NCtOMkj9TW9vphxPpHpVwd9mdSOjDs6hrWyuHflIed1KwGoqqmCq%2BKLpnNzQIcQIPW0pTeVETZFsmw0b%2B6nBZavUle9XBu5tzWsnyyOhhstv8qEf51y8RwKUAYWuOFbcZGI4afh5Ed5iwex%2BRCifeD%2BYEn0fw1tsu%2BdbsNeRAjTxRq5FEb2ODYsKPGyi9uqHusGBjlUGMoEo63fO%2Bb&X-Amz-Signature=ae894d587abf3ac2bcac045390288c0be6830fc7081079dbdd2468441f4627e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBGWLBF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyf5sSmNN9yV53zQG9NtqMRBxAzjioBWf9Z3c5mg0kjAiBWfL3QYG6PUyo6hAG2UEeRzskravAE8iY%2BxDPg8K4xHSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQiz5Nd99eI%2BTohcMKtwDyYbj7JACWgaI8pR4uD23%2FdUSGzKW08JiQ%2FiGF1BUXE%2F4iUFvNEj7Y%2FjFjtdRZ7Ru2u2Y%2FVxEh2QwaPGxRjgwSQkgIzTRMcDNtldeJZqCOKL4z%2Fy6iRKn1xmTmM6EssZSv49hvDEzH7Va0Q2RN95Cy1U7aQ%2FIUGk5quMlFcqPiagkK1s3Qb3BAP1%2FOzWScTLSjyGjbNdtRj19C5KS%2BBl6wECAE4EkaJM8OjL7ZwJg88VC4C%2FQAmk3zwRmMn2OJbZf%2FTtJ6i6gV3o6xvnSr1Zvmgb%2FiqmOMcwC3SKtLcy%2Bs9J4HaHBxkrneis0IyOWIuGos4UgnhHgf4ipa%2BYqLhpmJMLXM%2FFR2EHCLZkP1qvr8CeYUP9GHWcpf9B5CswZuLKq46SGXdDvXwbGjgwYpotPRDT8uKbY6Oh9jxr2AeKIetLL%2F0zU2qO96FY3TBeR0%2BCFcetPzN3n08knPrjN7LBe%2BcMSxjxNiNWZsAPxrtSAUA1dQ723TFmaPDp%2FdIRObsB%2BADdP2W46q0%2BjF01E97yQYDGkYDeFa%2B%2BIRh3G8uRkSokxUZTJbOvH%2BbHBGH4bx52EhTXUXMFTMvzqCkLbJ3U1GX5Hhb3MWAOI0tVDbMqoEwUCIDLm3X7HtPasM0Iw6O20xAY6pgGCbkvJ2c3Gk5NCtOMkj9TW9vphxPpHpVwd9mdSOjDs6hrWyuHflIed1KwGoqqmCq%2BKLpnNzQIcQIPW0pTeVETZFsmw0b%2B6nBZavUle9XBu5tzWsnyyOhhstv8qEf51y8RwKUAYWuOFbcZGI4afh5Ed5iwex%2BRCifeD%2BYEn0fw1tsu%2BdbsNeRAjTxRq5FEb2ODYsKPGyi9uqHusGBjlUGMoEo63fO%2Bb&X-Amz-Signature=8ded4d1d17ec3a5733c50862118c968d5ed63085a50c38f43b803de07a45eb23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBGWLBF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyf5sSmNN9yV53zQG9NtqMRBxAzjioBWf9Z3c5mg0kjAiBWfL3QYG6PUyo6hAG2UEeRzskravAE8iY%2BxDPg8K4xHSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQiz5Nd99eI%2BTohcMKtwDyYbj7JACWgaI8pR4uD23%2FdUSGzKW08JiQ%2FiGF1BUXE%2F4iUFvNEj7Y%2FjFjtdRZ7Ru2u2Y%2FVxEh2QwaPGxRjgwSQkgIzTRMcDNtldeJZqCOKL4z%2Fy6iRKn1xmTmM6EssZSv49hvDEzH7Va0Q2RN95Cy1U7aQ%2FIUGk5quMlFcqPiagkK1s3Qb3BAP1%2FOzWScTLSjyGjbNdtRj19C5KS%2BBl6wECAE4EkaJM8OjL7ZwJg88VC4C%2FQAmk3zwRmMn2OJbZf%2FTtJ6i6gV3o6xvnSr1Zvmgb%2FiqmOMcwC3SKtLcy%2Bs9J4HaHBxkrneis0IyOWIuGos4UgnhHgf4ipa%2BYqLhpmJMLXM%2FFR2EHCLZkP1qvr8CeYUP9GHWcpf9B5CswZuLKq46SGXdDvXwbGjgwYpotPRDT8uKbY6Oh9jxr2AeKIetLL%2F0zU2qO96FY3TBeR0%2BCFcetPzN3n08knPrjN7LBe%2BcMSxjxNiNWZsAPxrtSAUA1dQ723TFmaPDp%2FdIRObsB%2BADdP2W46q0%2BjF01E97yQYDGkYDeFa%2B%2BIRh3G8uRkSokxUZTJbOvH%2BbHBGH4bx52EhTXUXMFTMvzqCkLbJ3U1GX5Hhb3MWAOI0tVDbMqoEwUCIDLm3X7HtPasM0Iw6O20xAY6pgGCbkvJ2c3Gk5NCtOMkj9TW9vphxPpHpVwd9mdSOjDs6hrWyuHflIed1KwGoqqmCq%2BKLpnNzQIcQIPW0pTeVETZFsmw0b%2B6nBZavUle9XBu5tzWsnyyOhhstv8qEf51y8RwKUAYWuOFbcZGI4afh5Ed5iwex%2BRCifeD%2BYEn0fw1tsu%2BdbsNeRAjTxRq5FEb2ODYsKPGyi9uqHusGBjlUGMoEo63fO%2Bb&X-Amz-Signature=53ba44cbaf097d9b3c59a2ed1496083184c9f5f9799b8fc120c0b7bb27ede89a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
