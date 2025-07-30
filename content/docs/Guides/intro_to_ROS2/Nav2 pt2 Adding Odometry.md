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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEGKEU3B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaLDjVBjQt%2F5uGiIYAkNsyAWBbdWa4TX2dac4AlOUmsgIgPQy5%2FSksafUw4Sur3J%2B9JgYbaBVazq5C8BukWqix3rwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvkdeD414mqY42Z5yrcA%2FuEjHa5Y1c0StWwzrib7nWA5Pae1ZFY%2BIp7PE1wSvlmoUs6x4NgWLYikwB36sCnxqZyG5%2FQahqvaDZIEsakpi25GuVUWq%2BUNCrOSBXiFOx8f9Na2moqmZW454kk7O3PyQcA09qFt4pFtAjjfDN%2BHjYdpaTJnyGfoXrVGjBntqKweDYRoSygfPwyNb%2BM51lZV33GnDfDY2B8Fz8bhMApTSlQXGlZPihvvMLBvaFPQq%2B6EToAToV4b1ZsM5%2BafpzhwHSmDBIzMzbOnAZFKsa%2BaA7TH7p%2BQATV1kzPiJolzqYjR5ezMbkev7jjT6tf7%2Bg9mlmHH%2FV4JzG%2FDLGxTkAxp%2FuNmV%2FpoalxkYA4gR%2F7kCaFHJ5aIqNOTtytp5vWKD7aOd6Hi3IFXzgl2W33YKx%2B5WjuPg20x7lqFwcsAQNkwaHs2OIXbil5%2FsCDJdDYeC1rdf6J39vLJTK1JlVBNV34XS9tiUm%2B2gUhAdXfF3nlrxejFG9eRFxWM9pvadL0TKvta1PnFEt6bTLtxYUqkVGnb7YV2Y6AhX6cOsyyKjO8Uf5YdDgxVXoQ1ZJtsZJ4twxcsKlVBRf33siCwHh9WUcN%2BQUu1Ag6c37vBp2SxNUcl6y7hqmSAC9agKaxz2F0MIDpqcQGOqUBdvjg16h5hruWnn0zmAToKaGBs%2F21H8UZp9nIAGWtKiFY%2BMboFn3jhJ87oghSsehkmCMr1I0luHuLRCVsjjJtDf69DmyzuODggoEzLRK9bnP21ovUr8C9MOPhTC6CXxc7LYZquXZqz%2FqK8xyOmSKsOUmDyKNntetAVmTJw6RY%2FcX%2BF824n%2BnfQ0TjmqE0Iy65RW%2Flz4GPV4ndmTuRuJTWyenmI1HL&X-Amz-Signature=296b8cd5b6563e2b0b9dd9634317417a4db92e81ee38f53b7b516eaeb7dfe2c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEGKEU3B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaLDjVBjQt%2F5uGiIYAkNsyAWBbdWa4TX2dac4AlOUmsgIgPQy5%2FSksafUw4Sur3J%2B9JgYbaBVazq5C8BukWqix3rwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvkdeD414mqY42Z5yrcA%2FuEjHa5Y1c0StWwzrib7nWA5Pae1ZFY%2BIp7PE1wSvlmoUs6x4NgWLYikwB36sCnxqZyG5%2FQahqvaDZIEsakpi25GuVUWq%2BUNCrOSBXiFOx8f9Na2moqmZW454kk7O3PyQcA09qFt4pFtAjjfDN%2BHjYdpaTJnyGfoXrVGjBntqKweDYRoSygfPwyNb%2BM51lZV33GnDfDY2B8Fz8bhMApTSlQXGlZPihvvMLBvaFPQq%2B6EToAToV4b1ZsM5%2BafpzhwHSmDBIzMzbOnAZFKsa%2BaA7TH7p%2BQATV1kzPiJolzqYjR5ezMbkev7jjT6tf7%2Bg9mlmHH%2FV4JzG%2FDLGxTkAxp%2FuNmV%2FpoalxkYA4gR%2F7kCaFHJ5aIqNOTtytp5vWKD7aOd6Hi3IFXzgl2W33YKx%2B5WjuPg20x7lqFwcsAQNkwaHs2OIXbil5%2FsCDJdDYeC1rdf6J39vLJTK1JlVBNV34XS9tiUm%2B2gUhAdXfF3nlrxejFG9eRFxWM9pvadL0TKvta1PnFEt6bTLtxYUqkVGnb7YV2Y6AhX6cOsyyKjO8Uf5YdDgxVXoQ1ZJtsZJ4twxcsKlVBRf33siCwHh9WUcN%2BQUu1Ag6c37vBp2SxNUcl6y7hqmSAC9agKaxz2F0MIDpqcQGOqUBdvjg16h5hruWnn0zmAToKaGBs%2F21H8UZp9nIAGWtKiFY%2BMboFn3jhJ87oghSsehkmCMr1I0luHuLRCVsjjJtDf69DmyzuODggoEzLRK9bnP21ovUr8C9MOPhTC6CXxc7LYZquXZqz%2FqK8xyOmSKsOUmDyKNntetAVmTJw6RY%2FcX%2BF824n%2BnfQ0TjmqE0Iy65RW%2Flz4GPV4ndmTuRuJTWyenmI1HL&X-Amz-Signature=e2797ed382cd4d2de27ac0023ef16f0c6421d25d3333da57992ce32d13da8de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEGKEU3B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaLDjVBjQt%2F5uGiIYAkNsyAWBbdWa4TX2dac4AlOUmsgIgPQy5%2FSksafUw4Sur3J%2B9JgYbaBVazq5C8BukWqix3rwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvkdeD414mqY42Z5yrcA%2FuEjHa5Y1c0StWwzrib7nWA5Pae1ZFY%2BIp7PE1wSvlmoUs6x4NgWLYikwB36sCnxqZyG5%2FQahqvaDZIEsakpi25GuVUWq%2BUNCrOSBXiFOx8f9Na2moqmZW454kk7O3PyQcA09qFt4pFtAjjfDN%2BHjYdpaTJnyGfoXrVGjBntqKweDYRoSygfPwyNb%2BM51lZV33GnDfDY2B8Fz8bhMApTSlQXGlZPihvvMLBvaFPQq%2B6EToAToV4b1ZsM5%2BafpzhwHSmDBIzMzbOnAZFKsa%2BaA7TH7p%2BQATV1kzPiJolzqYjR5ezMbkev7jjT6tf7%2Bg9mlmHH%2FV4JzG%2FDLGxTkAxp%2FuNmV%2FpoalxkYA4gR%2F7kCaFHJ5aIqNOTtytp5vWKD7aOd6Hi3IFXzgl2W33YKx%2B5WjuPg20x7lqFwcsAQNkwaHs2OIXbil5%2FsCDJdDYeC1rdf6J39vLJTK1JlVBNV34XS9tiUm%2B2gUhAdXfF3nlrxejFG9eRFxWM9pvadL0TKvta1PnFEt6bTLtxYUqkVGnb7YV2Y6AhX6cOsyyKjO8Uf5YdDgxVXoQ1ZJtsZJ4twxcsKlVBRf33siCwHh9WUcN%2BQUu1Ag6c37vBp2SxNUcl6y7hqmSAC9agKaxz2F0MIDpqcQGOqUBdvjg16h5hruWnn0zmAToKaGBs%2F21H8UZp9nIAGWtKiFY%2BMboFn3jhJ87oghSsehkmCMr1I0luHuLRCVsjjJtDf69DmyzuODggoEzLRK9bnP21ovUr8C9MOPhTC6CXxc7LYZquXZqz%2FqK8xyOmSKsOUmDyKNntetAVmTJw6RY%2FcX%2BF824n%2BnfQ0TjmqE0Iy65RW%2Flz4GPV4ndmTuRuJTWyenmI1HL&X-Amz-Signature=52e0763d64a3e22f68db2d71f325d49d1a7ab4a3dc7f31aece50ad35ac730878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEGKEU3B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaLDjVBjQt%2F5uGiIYAkNsyAWBbdWa4TX2dac4AlOUmsgIgPQy5%2FSksafUw4Sur3J%2B9JgYbaBVazq5C8BukWqix3rwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvkdeD414mqY42Z5yrcA%2FuEjHa5Y1c0StWwzrib7nWA5Pae1ZFY%2BIp7PE1wSvlmoUs6x4NgWLYikwB36sCnxqZyG5%2FQahqvaDZIEsakpi25GuVUWq%2BUNCrOSBXiFOx8f9Na2moqmZW454kk7O3PyQcA09qFt4pFtAjjfDN%2BHjYdpaTJnyGfoXrVGjBntqKweDYRoSygfPwyNb%2BM51lZV33GnDfDY2B8Fz8bhMApTSlQXGlZPihvvMLBvaFPQq%2B6EToAToV4b1ZsM5%2BafpzhwHSmDBIzMzbOnAZFKsa%2BaA7TH7p%2BQATV1kzPiJolzqYjR5ezMbkev7jjT6tf7%2Bg9mlmHH%2FV4JzG%2FDLGxTkAxp%2FuNmV%2FpoalxkYA4gR%2F7kCaFHJ5aIqNOTtytp5vWKD7aOd6Hi3IFXzgl2W33YKx%2B5WjuPg20x7lqFwcsAQNkwaHs2OIXbil5%2FsCDJdDYeC1rdf6J39vLJTK1JlVBNV34XS9tiUm%2B2gUhAdXfF3nlrxejFG9eRFxWM9pvadL0TKvta1PnFEt6bTLtxYUqkVGnb7YV2Y6AhX6cOsyyKjO8Uf5YdDgxVXoQ1ZJtsZJ4twxcsKlVBRf33siCwHh9WUcN%2BQUu1Ag6c37vBp2SxNUcl6y7hqmSAC9agKaxz2F0MIDpqcQGOqUBdvjg16h5hruWnn0zmAToKaGBs%2F21H8UZp9nIAGWtKiFY%2BMboFn3jhJ87oghSsehkmCMr1I0luHuLRCVsjjJtDf69DmyzuODggoEzLRK9bnP21ovUr8C9MOPhTC6CXxc7LYZquXZqz%2FqK8xyOmSKsOUmDyKNntetAVmTJw6RY%2FcX%2BF824n%2BnfQ0TjmqE0Iy65RW%2Flz4GPV4ndmTuRuJTWyenmI1HL&X-Amz-Signature=b9071d8b930ac3689c643fd10bbdb2f9edd113627bea4fe640b5874e0ae3eaae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEGKEU3B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaLDjVBjQt%2F5uGiIYAkNsyAWBbdWa4TX2dac4AlOUmsgIgPQy5%2FSksafUw4Sur3J%2B9JgYbaBVazq5C8BukWqix3rwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvkdeD414mqY42Z5yrcA%2FuEjHa5Y1c0StWwzrib7nWA5Pae1ZFY%2BIp7PE1wSvlmoUs6x4NgWLYikwB36sCnxqZyG5%2FQahqvaDZIEsakpi25GuVUWq%2BUNCrOSBXiFOx8f9Na2moqmZW454kk7O3PyQcA09qFt4pFtAjjfDN%2BHjYdpaTJnyGfoXrVGjBntqKweDYRoSygfPwyNb%2BM51lZV33GnDfDY2B8Fz8bhMApTSlQXGlZPihvvMLBvaFPQq%2B6EToAToV4b1ZsM5%2BafpzhwHSmDBIzMzbOnAZFKsa%2BaA7TH7p%2BQATV1kzPiJolzqYjR5ezMbkev7jjT6tf7%2Bg9mlmHH%2FV4JzG%2FDLGxTkAxp%2FuNmV%2FpoalxkYA4gR%2F7kCaFHJ5aIqNOTtytp5vWKD7aOd6Hi3IFXzgl2W33YKx%2B5WjuPg20x7lqFwcsAQNkwaHs2OIXbil5%2FsCDJdDYeC1rdf6J39vLJTK1JlVBNV34XS9tiUm%2B2gUhAdXfF3nlrxejFG9eRFxWM9pvadL0TKvta1PnFEt6bTLtxYUqkVGnb7YV2Y6AhX6cOsyyKjO8Uf5YdDgxVXoQ1ZJtsZJ4twxcsKlVBRf33siCwHh9WUcN%2BQUu1Ag6c37vBp2SxNUcl6y7hqmSAC9agKaxz2F0MIDpqcQGOqUBdvjg16h5hruWnn0zmAToKaGBs%2F21H8UZp9nIAGWtKiFY%2BMboFn3jhJ87oghSsehkmCMr1I0luHuLRCVsjjJtDf69DmyzuODggoEzLRK9bnP21ovUr8C9MOPhTC6CXxc7LYZquXZqz%2FqK8xyOmSKsOUmDyKNntetAVmTJw6RY%2FcX%2BF824n%2BnfQ0TjmqE0Iy65RW%2Flz4GPV4ndmTuRuJTWyenmI1HL&X-Amz-Signature=b65165c9703f74b0a033821d65043dc26460aad7075735d221dbc1a8412c1134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEGKEU3B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaLDjVBjQt%2F5uGiIYAkNsyAWBbdWa4TX2dac4AlOUmsgIgPQy5%2FSksafUw4Sur3J%2B9JgYbaBVazq5C8BukWqix3rwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvkdeD414mqY42Z5yrcA%2FuEjHa5Y1c0StWwzrib7nWA5Pae1ZFY%2BIp7PE1wSvlmoUs6x4NgWLYikwB36sCnxqZyG5%2FQahqvaDZIEsakpi25GuVUWq%2BUNCrOSBXiFOx8f9Na2moqmZW454kk7O3PyQcA09qFt4pFtAjjfDN%2BHjYdpaTJnyGfoXrVGjBntqKweDYRoSygfPwyNb%2BM51lZV33GnDfDY2B8Fz8bhMApTSlQXGlZPihvvMLBvaFPQq%2B6EToAToV4b1ZsM5%2BafpzhwHSmDBIzMzbOnAZFKsa%2BaA7TH7p%2BQATV1kzPiJolzqYjR5ezMbkev7jjT6tf7%2Bg9mlmHH%2FV4JzG%2FDLGxTkAxp%2FuNmV%2FpoalxkYA4gR%2F7kCaFHJ5aIqNOTtytp5vWKD7aOd6Hi3IFXzgl2W33YKx%2B5WjuPg20x7lqFwcsAQNkwaHs2OIXbil5%2FsCDJdDYeC1rdf6J39vLJTK1JlVBNV34XS9tiUm%2B2gUhAdXfF3nlrxejFG9eRFxWM9pvadL0TKvta1PnFEt6bTLtxYUqkVGnb7YV2Y6AhX6cOsyyKjO8Uf5YdDgxVXoQ1ZJtsZJ4twxcsKlVBRf33siCwHh9WUcN%2BQUu1Ag6c37vBp2SxNUcl6y7hqmSAC9agKaxz2F0MIDpqcQGOqUBdvjg16h5hruWnn0zmAToKaGBs%2F21H8UZp9nIAGWtKiFY%2BMboFn3jhJ87oghSsehkmCMr1I0luHuLRCVsjjJtDf69DmyzuODggoEzLRK9bnP21ovUr8C9MOPhTC6CXxc7LYZquXZqz%2FqK8xyOmSKsOUmDyKNntetAVmTJw6RY%2FcX%2BF824n%2BnfQ0TjmqE0Iy65RW%2Flz4GPV4ndmTuRuJTWyenmI1HL&X-Amz-Signature=406d8ad493f5be88486087f4e783650395616126e63ac9ddab809a86699886d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEGKEU3B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaLDjVBjQt%2F5uGiIYAkNsyAWBbdWa4TX2dac4AlOUmsgIgPQy5%2FSksafUw4Sur3J%2B9JgYbaBVazq5C8BukWqix3rwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvkdeD414mqY42Z5yrcA%2FuEjHa5Y1c0StWwzrib7nWA5Pae1ZFY%2BIp7PE1wSvlmoUs6x4NgWLYikwB36sCnxqZyG5%2FQahqvaDZIEsakpi25GuVUWq%2BUNCrOSBXiFOx8f9Na2moqmZW454kk7O3PyQcA09qFt4pFtAjjfDN%2BHjYdpaTJnyGfoXrVGjBntqKweDYRoSygfPwyNb%2BM51lZV33GnDfDY2B8Fz8bhMApTSlQXGlZPihvvMLBvaFPQq%2B6EToAToV4b1ZsM5%2BafpzhwHSmDBIzMzbOnAZFKsa%2BaA7TH7p%2BQATV1kzPiJolzqYjR5ezMbkev7jjT6tf7%2Bg9mlmHH%2FV4JzG%2FDLGxTkAxp%2FuNmV%2FpoalxkYA4gR%2F7kCaFHJ5aIqNOTtytp5vWKD7aOd6Hi3IFXzgl2W33YKx%2B5WjuPg20x7lqFwcsAQNkwaHs2OIXbil5%2FsCDJdDYeC1rdf6J39vLJTK1JlVBNV34XS9tiUm%2B2gUhAdXfF3nlrxejFG9eRFxWM9pvadL0TKvta1PnFEt6bTLtxYUqkVGnb7YV2Y6AhX6cOsyyKjO8Uf5YdDgxVXoQ1ZJtsZJ4twxcsKlVBRf33siCwHh9WUcN%2BQUu1Ag6c37vBp2SxNUcl6y7hqmSAC9agKaxz2F0MIDpqcQGOqUBdvjg16h5hruWnn0zmAToKaGBs%2F21H8UZp9nIAGWtKiFY%2BMboFn3jhJ87oghSsehkmCMr1I0luHuLRCVsjjJtDf69DmyzuODggoEzLRK9bnP21ovUr8C9MOPhTC6CXxc7LYZquXZqz%2FqK8xyOmSKsOUmDyKNntetAVmTJw6RY%2FcX%2BF824n%2BnfQ0TjmqE0Iy65RW%2Flz4GPV4ndmTuRuJTWyenmI1HL&X-Amz-Signature=b008ee567dbbd18f8dbaf01065303cc5e06c6b3e2561617f81907c0ac26a53d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEGKEU3B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaLDjVBjQt%2F5uGiIYAkNsyAWBbdWa4TX2dac4AlOUmsgIgPQy5%2FSksafUw4Sur3J%2B9JgYbaBVazq5C8BukWqix3rwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvkdeD414mqY42Z5yrcA%2FuEjHa5Y1c0StWwzrib7nWA5Pae1ZFY%2BIp7PE1wSvlmoUs6x4NgWLYikwB36sCnxqZyG5%2FQahqvaDZIEsakpi25GuVUWq%2BUNCrOSBXiFOx8f9Na2moqmZW454kk7O3PyQcA09qFt4pFtAjjfDN%2BHjYdpaTJnyGfoXrVGjBntqKweDYRoSygfPwyNb%2BM51lZV33GnDfDY2B8Fz8bhMApTSlQXGlZPihvvMLBvaFPQq%2B6EToAToV4b1ZsM5%2BafpzhwHSmDBIzMzbOnAZFKsa%2BaA7TH7p%2BQATV1kzPiJolzqYjR5ezMbkev7jjT6tf7%2Bg9mlmHH%2FV4JzG%2FDLGxTkAxp%2FuNmV%2FpoalxkYA4gR%2F7kCaFHJ5aIqNOTtytp5vWKD7aOd6Hi3IFXzgl2W33YKx%2B5WjuPg20x7lqFwcsAQNkwaHs2OIXbil5%2FsCDJdDYeC1rdf6J39vLJTK1JlVBNV34XS9tiUm%2B2gUhAdXfF3nlrxejFG9eRFxWM9pvadL0TKvta1PnFEt6bTLtxYUqkVGnb7YV2Y6AhX6cOsyyKjO8Uf5YdDgxVXoQ1ZJtsZJ4twxcsKlVBRf33siCwHh9WUcN%2BQUu1Ag6c37vBp2SxNUcl6y7hqmSAC9agKaxz2F0MIDpqcQGOqUBdvjg16h5hruWnn0zmAToKaGBs%2F21H8UZp9nIAGWtKiFY%2BMboFn3jhJ87oghSsehkmCMr1I0luHuLRCVsjjJtDf69DmyzuODggoEzLRK9bnP21ovUr8C9MOPhTC6CXxc7LYZquXZqz%2FqK8xyOmSKsOUmDyKNntetAVmTJw6RY%2FcX%2BF824n%2BnfQ0TjmqE0Iy65RW%2Flz4GPV4ndmTuRuJTWyenmI1HL&X-Amz-Signature=26e7591b844756649930936fbf971849bb2713258bb90ce3cbb78780cde90a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEGKEU3B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaLDjVBjQt%2F5uGiIYAkNsyAWBbdWa4TX2dac4AlOUmsgIgPQy5%2FSksafUw4Sur3J%2B9JgYbaBVazq5C8BukWqix3rwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvkdeD414mqY42Z5yrcA%2FuEjHa5Y1c0StWwzrib7nWA5Pae1ZFY%2BIp7PE1wSvlmoUs6x4NgWLYikwB36sCnxqZyG5%2FQahqvaDZIEsakpi25GuVUWq%2BUNCrOSBXiFOx8f9Na2moqmZW454kk7O3PyQcA09qFt4pFtAjjfDN%2BHjYdpaTJnyGfoXrVGjBntqKweDYRoSygfPwyNb%2BM51lZV33GnDfDY2B8Fz8bhMApTSlQXGlZPihvvMLBvaFPQq%2B6EToAToV4b1ZsM5%2BafpzhwHSmDBIzMzbOnAZFKsa%2BaA7TH7p%2BQATV1kzPiJolzqYjR5ezMbkev7jjT6tf7%2Bg9mlmHH%2FV4JzG%2FDLGxTkAxp%2FuNmV%2FpoalxkYA4gR%2F7kCaFHJ5aIqNOTtytp5vWKD7aOd6Hi3IFXzgl2W33YKx%2B5WjuPg20x7lqFwcsAQNkwaHs2OIXbil5%2FsCDJdDYeC1rdf6J39vLJTK1JlVBNV34XS9tiUm%2B2gUhAdXfF3nlrxejFG9eRFxWM9pvadL0TKvta1PnFEt6bTLtxYUqkVGnb7YV2Y6AhX6cOsyyKjO8Uf5YdDgxVXoQ1ZJtsZJ4twxcsKlVBRf33siCwHh9WUcN%2BQUu1Ag6c37vBp2SxNUcl6y7hqmSAC9agKaxz2F0MIDpqcQGOqUBdvjg16h5hruWnn0zmAToKaGBs%2F21H8UZp9nIAGWtKiFY%2BMboFn3jhJ87oghSsehkmCMr1I0luHuLRCVsjjJtDf69DmyzuODggoEzLRK9bnP21ovUr8C9MOPhTC6CXxc7LYZquXZqz%2FqK8xyOmSKsOUmDyKNntetAVmTJw6RY%2FcX%2BF824n%2BnfQ0TjmqE0Iy65RW%2Flz4GPV4ndmTuRuJTWyenmI1HL&X-Amz-Signature=78eb9f7e9953edfbfcdefb0cc3ecdcdd1914cd084aad3c2f1e8ab842c4dcc105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRSIFHF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyBEaJXc3YnoY05qhCaCpcCXzlMBx9eDBYwXEcof774AiEAj7Pkmb1rxeedOneWIkw0jb10z8%2FwZvyuWV%2BmJpS5vikqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtl6wnVmMT2FWcDgSrcAwZUwj708n1%2FN%2BQp%2BnJuV12AdpHuPitJfgzPAXjMBxrAm8QSKssDz4J%2BL9ggUc%2FAxi3rj%2FRju8LELZcDxgM25AE2ihNRbzSIeQHrViGk%2FB%2Fd5LKJRhtG2NhYJyjE%2Bc%2FR4hNZ8aZx4fNdZbDJre9yD1ofqwTYxuLrKFjteCb%2BNtk8CfYThFxMgVirWuNsoqC5Dk0zIurWaJPv5JgaCWBVQrqjHcxZePZFJsD6E%2BOjeMDeEj03yg88qFgjv2yIuNoahi1tM70DM5UZPPl8rCyQDcMdr3Zk%2BQskPdDF87leLAdIWy%2BDNCHjUtwCEQa9jkMMLm8IGFzmM04hBkn14YcD1ywFchCLi49tm2RoNV3EIGmny2ZWnb%2FDniwoyhfEz4kT3OmdgTN4%2ByeWfHZm2ql4nglf5ljZed4lscyzTVdKmVoJTaCHqcvGdy9scn4V3sf3v4VCJDOnd%2B1eFN06DIdzzHgarF7M17XzT7YhwHG7eB1q%2F5WRV6LgsX%2BJQtydYjBKYL3f%2FyllRPciJdvO5MHe2sQw4iDRvv0%2F3zLuxh4KCBMzgY1NKMluT1jmopXVmC6%2BG5XKDxm306rvdsF6p3r%2FWBOSOM3Sborwb6CTD2c7dltEuG6miBprDwxIK2yNMLHoqcQGOqUBFOSVv4JCz4S88LLo79zp2h2nfa7zIHkbdRPnlkW84PjGBaqgzUXttCdL5izxaIFP45TZsDXsVKPXXmCiXXhj8HBHVh4H7biE1ccK%2FF4iyRv1VvOO5c5FuHtGawhHbSQwJaVB0K%2BUkykyrgkkjtw%2FrbUYKAPEbl7YPR%2FHaJuiY9ZXKjOCSSQHzfhIlnT3Dgz1Zg3cn6P2YfABxRcegpge%2BwkWup%2Be&X-Amz-Signature=9c108f1a190fcb981b2713c0c2b248bf48f271e1d19d9bf1dc580b853f1c5b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEGKEU3B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaLDjVBjQt%2F5uGiIYAkNsyAWBbdWa4TX2dac4AlOUmsgIgPQy5%2FSksafUw4Sur3J%2B9JgYbaBVazq5C8BukWqix3rwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvkdeD414mqY42Z5yrcA%2FuEjHa5Y1c0StWwzrib7nWA5Pae1ZFY%2BIp7PE1wSvlmoUs6x4NgWLYikwB36sCnxqZyG5%2FQahqvaDZIEsakpi25GuVUWq%2BUNCrOSBXiFOx8f9Na2moqmZW454kk7O3PyQcA09qFt4pFtAjjfDN%2BHjYdpaTJnyGfoXrVGjBntqKweDYRoSygfPwyNb%2BM51lZV33GnDfDY2B8Fz8bhMApTSlQXGlZPihvvMLBvaFPQq%2B6EToAToV4b1ZsM5%2BafpzhwHSmDBIzMzbOnAZFKsa%2BaA7TH7p%2BQATV1kzPiJolzqYjR5ezMbkev7jjT6tf7%2Bg9mlmHH%2FV4JzG%2FDLGxTkAxp%2FuNmV%2FpoalxkYA4gR%2F7kCaFHJ5aIqNOTtytp5vWKD7aOd6Hi3IFXzgl2W33YKx%2B5WjuPg20x7lqFwcsAQNkwaHs2OIXbil5%2FsCDJdDYeC1rdf6J39vLJTK1JlVBNV34XS9tiUm%2B2gUhAdXfF3nlrxejFG9eRFxWM9pvadL0TKvta1PnFEt6bTLtxYUqkVGnb7YV2Y6AhX6cOsyyKjO8Uf5YdDgxVXoQ1ZJtsZJ4twxcsKlVBRf33siCwHh9WUcN%2BQUu1Ag6c37vBp2SxNUcl6y7hqmSAC9agKaxz2F0MIDpqcQGOqUBdvjg16h5hruWnn0zmAToKaGBs%2F21H8UZp9nIAGWtKiFY%2BMboFn3jhJ87oghSsehkmCMr1I0luHuLRCVsjjJtDf69DmyzuODggoEzLRK9bnP21ovUr8C9MOPhTC6CXxc7LYZquXZqz%2FqK8xyOmSKsOUmDyKNntetAVmTJw6RY%2FcX%2BF824n%2BnfQ0TjmqE0Iy65RW%2Flz4GPV4ndmTuRuJTWyenmI1HL&X-Amz-Signature=f6502b5fe1821c57e55ee40fed437fa04b74c177d057e128eaaa025a4ae3ace2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NTCJJ2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGINcQxemojcnnHLZD4eSstIaBgXK9kiA%2BS5YHEnJu4NAiEAo%2Bo2COFzqQ8lMbMSKkokz14XIx9dMET%2FKxMZX%2BbRwiYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIzYVTKYX%2F9Wqs4MSrcA1YVVJ5s5ZILphXI0Ygi5WbbBN7NyiwtT1GXKDUiHm3mDK%2F0s98SGKUfelrw%2BN4orF%2FNeplAb5nQqtyDYUAUd6Fnc8%2FvGBQyTH7M%2BPnoEv91A%2Fmf5wY%2BGQEGayKObPy2vCUHcJmU%2Fe2cyDezWxQeDCv%2FCUPANsleZzOvn%2BVMfPvaZbRld6kxsIO76yjAxHtsdt%2F90LJ0ZMCAa9fjbbtj3yYSU%2FfeSE6wqlpbDwenOGS%2B%2Fy9a0kGY9NIfFsTybvSBIp1t7C%2BpqCVyZ%2F36E4pChEyDvm8aaLbbcnKcgYAhF6xreuH6MEfsn41o5m4iyo0ysJv0qJm5fnc2NBmagDClknIaTNc8hmZCsdbPp59EwRKWGKcewGDGajiqHIHiS0iD1HzL%2FX921tx6zJzGUsbWpENGi2naJM4tKApqvqpksKGLvT9qMiJ7dlebNmrGojg24tNlig4uGAXK7JWJ6ekJNykjBop3GWimZlmVh%2BGz9%2B9eVVBMnCFAqO%2ByfMfKzQPXFl6OVYo9kff5p4jsGCzmjVXuFww6EwpaIuin%2B4elrgWpPCctsfqrVMxxWgQtZLXYtYT1c8P3k480%2BYfnMSw2CD5NSYDJMO22W2XmyR02AoBacVLJttviVYg1wCWWMKzoqcQGOqUBrkrBFgwC2TVylSEuITNg%2Bq3E9tjwxhrJMdVcIDqPTxXrUnBw5CyxSwZFqGjJuttxxu%2BFSuvUrxrKdF0ovgoTQlB3AVXgAHk26YPogfu2oJreHzPzphrcPsGmqu5W1Pwf1rOrqoGA2XN%2FGBMC4bkcX6rfX7FkvCFnqsDcsj2WXNaWb7lW9Gvh30xOXpctY6P3eQ0Gtc5k8%2Bg2R8Ci8ut0aROYiGsy&X-Amz-Signature=d43fec454bb2d85869df5c1bdb4f99c05941fcd16a0e62635920313520982bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NTCJJ2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGINcQxemojcnnHLZD4eSstIaBgXK9kiA%2BS5YHEnJu4NAiEAo%2Bo2COFzqQ8lMbMSKkokz14XIx9dMET%2FKxMZX%2BbRwiYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIzYVTKYX%2F9Wqs4MSrcA1YVVJ5s5ZILphXI0Ygi5WbbBN7NyiwtT1GXKDUiHm3mDK%2F0s98SGKUfelrw%2BN4orF%2FNeplAb5nQqtyDYUAUd6Fnc8%2FvGBQyTH7M%2BPnoEv91A%2Fmf5wY%2BGQEGayKObPy2vCUHcJmU%2Fe2cyDezWxQeDCv%2FCUPANsleZzOvn%2BVMfPvaZbRld6kxsIO76yjAxHtsdt%2F90LJ0ZMCAa9fjbbtj3yYSU%2FfeSE6wqlpbDwenOGS%2B%2Fy9a0kGY9NIfFsTybvSBIp1t7C%2BpqCVyZ%2F36E4pChEyDvm8aaLbbcnKcgYAhF6xreuH6MEfsn41o5m4iyo0ysJv0qJm5fnc2NBmagDClknIaTNc8hmZCsdbPp59EwRKWGKcewGDGajiqHIHiS0iD1HzL%2FX921tx6zJzGUsbWpENGi2naJM4tKApqvqpksKGLvT9qMiJ7dlebNmrGojg24tNlig4uGAXK7JWJ6ekJNykjBop3GWimZlmVh%2BGz9%2B9eVVBMnCFAqO%2ByfMfKzQPXFl6OVYo9kff5p4jsGCzmjVXuFww6EwpaIuin%2B4elrgWpPCctsfqrVMxxWgQtZLXYtYT1c8P3k480%2BYfnMSw2CD5NSYDJMO22W2XmyR02AoBacVLJttviVYg1wCWWMKzoqcQGOqUBrkrBFgwC2TVylSEuITNg%2Bq3E9tjwxhrJMdVcIDqPTxXrUnBw5CyxSwZFqGjJuttxxu%2BFSuvUrxrKdF0ovgoTQlB3AVXgAHk26YPogfu2oJreHzPzphrcPsGmqu5W1Pwf1rOrqoGA2XN%2FGBMC4bkcX6rfX7FkvCFnqsDcsj2WXNaWb7lW9Gvh30xOXpctY6P3eQ0Gtc5k8%2Bg2R8Ci8ut0aROYiGsy&X-Amz-Signature=cb783a90b1d77a502dee15e2dd3104ceeabd61d6fb5ba45f63f20d94edeb5baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NTCJJ2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGINcQxemojcnnHLZD4eSstIaBgXK9kiA%2BS5YHEnJu4NAiEAo%2Bo2COFzqQ8lMbMSKkokz14XIx9dMET%2FKxMZX%2BbRwiYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIzYVTKYX%2F9Wqs4MSrcA1YVVJ5s5ZILphXI0Ygi5WbbBN7NyiwtT1GXKDUiHm3mDK%2F0s98SGKUfelrw%2BN4orF%2FNeplAb5nQqtyDYUAUd6Fnc8%2FvGBQyTH7M%2BPnoEv91A%2Fmf5wY%2BGQEGayKObPy2vCUHcJmU%2Fe2cyDezWxQeDCv%2FCUPANsleZzOvn%2BVMfPvaZbRld6kxsIO76yjAxHtsdt%2F90LJ0ZMCAa9fjbbtj3yYSU%2FfeSE6wqlpbDwenOGS%2B%2Fy9a0kGY9NIfFsTybvSBIp1t7C%2BpqCVyZ%2F36E4pChEyDvm8aaLbbcnKcgYAhF6xreuH6MEfsn41o5m4iyo0ysJv0qJm5fnc2NBmagDClknIaTNc8hmZCsdbPp59EwRKWGKcewGDGajiqHIHiS0iD1HzL%2FX921tx6zJzGUsbWpENGi2naJM4tKApqvqpksKGLvT9qMiJ7dlebNmrGojg24tNlig4uGAXK7JWJ6ekJNykjBop3GWimZlmVh%2BGz9%2B9eVVBMnCFAqO%2ByfMfKzQPXFl6OVYo9kff5p4jsGCzmjVXuFww6EwpaIuin%2B4elrgWpPCctsfqrVMxxWgQtZLXYtYT1c8P3k480%2BYfnMSw2CD5NSYDJMO22W2XmyR02AoBacVLJttviVYg1wCWWMKzoqcQGOqUBrkrBFgwC2TVylSEuITNg%2Bq3E9tjwxhrJMdVcIDqPTxXrUnBw5CyxSwZFqGjJuttxxu%2BFSuvUrxrKdF0ovgoTQlB3AVXgAHk26YPogfu2oJreHzPzphrcPsGmqu5W1Pwf1rOrqoGA2XN%2FGBMC4bkcX6rfX7FkvCFnqsDcsj2WXNaWb7lW9Gvh30xOXpctY6P3eQ0Gtc5k8%2Bg2R8Ci8ut0aROYiGsy&X-Amz-Signature=adb1332f596fdd71f972fb4fb6a4fb164d1222ebd3e3d5c8f284f80d0910e099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NTCJJ2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGINcQxemojcnnHLZD4eSstIaBgXK9kiA%2BS5YHEnJu4NAiEAo%2Bo2COFzqQ8lMbMSKkokz14XIx9dMET%2FKxMZX%2BbRwiYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIzYVTKYX%2F9Wqs4MSrcA1YVVJ5s5ZILphXI0Ygi5WbbBN7NyiwtT1GXKDUiHm3mDK%2F0s98SGKUfelrw%2BN4orF%2FNeplAb5nQqtyDYUAUd6Fnc8%2FvGBQyTH7M%2BPnoEv91A%2Fmf5wY%2BGQEGayKObPy2vCUHcJmU%2Fe2cyDezWxQeDCv%2FCUPANsleZzOvn%2BVMfPvaZbRld6kxsIO76yjAxHtsdt%2F90LJ0ZMCAa9fjbbtj3yYSU%2FfeSE6wqlpbDwenOGS%2B%2Fy9a0kGY9NIfFsTybvSBIp1t7C%2BpqCVyZ%2F36E4pChEyDvm8aaLbbcnKcgYAhF6xreuH6MEfsn41o5m4iyo0ysJv0qJm5fnc2NBmagDClknIaTNc8hmZCsdbPp59EwRKWGKcewGDGajiqHIHiS0iD1HzL%2FX921tx6zJzGUsbWpENGi2naJM4tKApqvqpksKGLvT9qMiJ7dlebNmrGojg24tNlig4uGAXK7JWJ6ekJNykjBop3GWimZlmVh%2BGz9%2B9eVVBMnCFAqO%2ByfMfKzQPXFl6OVYo9kff5p4jsGCzmjVXuFww6EwpaIuin%2B4elrgWpPCctsfqrVMxxWgQtZLXYtYT1c8P3k480%2BYfnMSw2CD5NSYDJMO22W2XmyR02AoBacVLJttviVYg1wCWWMKzoqcQGOqUBrkrBFgwC2TVylSEuITNg%2Bq3E9tjwxhrJMdVcIDqPTxXrUnBw5CyxSwZFqGjJuttxxu%2BFSuvUrxrKdF0ovgoTQlB3AVXgAHk26YPogfu2oJreHzPzphrcPsGmqu5W1Pwf1rOrqoGA2XN%2FGBMC4bkcX6rfX7FkvCFnqsDcsj2WXNaWb7lW9Gvh30xOXpctY6P3eQ0Gtc5k8%2Bg2R8Ci8ut0aROYiGsy&X-Amz-Signature=ec7cbbd4e8facd0266ebdb93a91ad1ca52b36026540a4901d1fc3dac02770d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NTCJJ2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGINcQxemojcnnHLZD4eSstIaBgXK9kiA%2BS5YHEnJu4NAiEAo%2Bo2COFzqQ8lMbMSKkokz14XIx9dMET%2FKxMZX%2BbRwiYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIzYVTKYX%2F9Wqs4MSrcA1YVVJ5s5ZILphXI0Ygi5WbbBN7NyiwtT1GXKDUiHm3mDK%2F0s98SGKUfelrw%2BN4orF%2FNeplAb5nQqtyDYUAUd6Fnc8%2FvGBQyTH7M%2BPnoEv91A%2Fmf5wY%2BGQEGayKObPy2vCUHcJmU%2Fe2cyDezWxQeDCv%2FCUPANsleZzOvn%2BVMfPvaZbRld6kxsIO76yjAxHtsdt%2F90LJ0ZMCAa9fjbbtj3yYSU%2FfeSE6wqlpbDwenOGS%2B%2Fy9a0kGY9NIfFsTybvSBIp1t7C%2BpqCVyZ%2F36E4pChEyDvm8aaLbbcnKcgYAhF6xreuH6MEfsn41o5m4iyo0ysJv0qJm5fnc2NBmagDClknIaTNc8hmZCsdbPp59EwRKWGKcewGDGajiqHIHiS0iD1HzL%2FX921tx6zJzGUsbWpENGi2naJM4tKApqvqpksKGLvT9qMiJ7dlebNmrGojg24tNlig4uGAXK7JWJ6ekJNykjBop3GWimZlmVh%2BGz9%2B9eVVBMnCFAqO%2ByfMfKzQPXFl6OVYo9kff5p4jsGCzmjVXuFww6EwpaIuin%2B4elrgWpPCctsfqrVMxxWgQtZLXYtYT1c8P3k480%2BYfnMSw2CD5NSYDJMO22W2XmyR02AoBacVLJttviVYg1wCWWMKzoqcQGOqUBrkrBFgwC2TVylSEuITNg%2Bq3E9tjwxhrJMdVcIDqPTxXrUnBw5CyxSwZFqGjJuttxxu%2BFSuvUrxrKdF0ovgoTQlB3AVXgAHk26YPogfu2oJreHzPzphrcPsGmqu5W1Pwf1rOrqoGA2XN%2FGBMC4bkcX6rfX7FkvCFnqsDcsj2WXNaWb7lW9Gvh30xOXpctY6P3eQ0Gtc5k8%2Bg2R8Ci8ut0aROYiGsy&X-Amz-Signature=1127ab06cf881cf95189039890e360b3a2ee663b690c976a99a604e238f69616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NTCJJ2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGINcQxemojcnnHLZD4eSstIaBgXK9kiA%2BS5YHEnJu4NAiEAo%2Bo2COFzqQ8lMbMSKkokz14XIx9dMET%2FKxMZX%2BbRwiYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIzYVTKYX%2F9Wqs4MSrcA1YVVJ5s5ZILphXI0Ygi5WbbBN7NyiwtT1GXKDUiHm3mDK%2F0s98SGKUfelrw%2BN4orF%2FNeplAb5nQqtyDYUAUd6Fnc8%2FvGBQyTH7M%2BPnoEv91A%2Fmf5wY%2BGQEGayKObPy2vCUHcJmU%2Fe2cyDezWxQeDCv%2FCUPANsleZzOvn%2BVMfPvaZbRld6kxsIO76yjAxHtsdt%2F90LJ0ZMCAa9fjbbtj3yYSU%2FfeSE6wqlpbDwenOGS%2B%2Fy9a0kGY9NIfFsTybvSBIp1t7C%2BpqCVyZ%2F36E4pChEyDvm8aaLbbcnKcgYAhF6xreuH6MEfsn41o5m4iyo0ysJv0qJm5fnc2NBmagDClknIaTNc8hmZCsdbPp59EwRKWGKcewGDGajiqHIHiS0iD1HzL%2FX921tx6zJzGUsbWpENGi2naJM4tKApqvqpksKGLvT9qMiJ7dlebNmrGojg24tNlig4uGAXK7JWJ6ekJNykjBop3GWimZlmVh%2BGz9%2B9eVVBMnCFAqO%2ByfMfKzQPXFl6OVYo9kff5p4jsGCzmjVXuFww6EwpaIuin%2B4elrgWpPCctsfqrVMxxWgQtZLXYtYT1c8P3k480%2BYfnMSw2CD5NSYDJMO22W2XmyR02AoBacVLJttviVYg1wCWWMKzoqcQGOqUBrkrBFgwC2TVylSEuITNg%2Bq3E9tjwxhrJMdVcIDqPTxXrUnBw5CyxSwZFqGjJuttxxu%2BFSuvUrxrKdF0ovgoTQlB3AVXgAHk26YPogfu2oJreHzPzphrcPsGmqu5W1Pwf1rOrqoGA2XN%2FGBMC4bkcX6rfX7FkvCFnqsDcsj2WXNaWb7lW9Gvh30xOXpctY6P3eQ0Gtc5k8%2Bg2R8Ci8ut0aROYiGsy&X-Amz-Signature=5b6c29c3de01f0727be2ef656ddb9824bfd9cf0d3d272051f0cf16cb42eaec7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NTCJJ2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGINcQxemojcnnHLZD4eSstIaBgXK9kiA%2BS5YHEnJu4NAiEAo%2Bo2COFzqQ8lMbMSKkokz14XIx9dMET%2FKxMZX%2BbRwiYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIzYVTKYX%2F9Wqs4MSrcA1YVVJ5s5ZILphXI0Ygi5WbbBN7NyiwtT1GXKDUiHm3mDK%2F0s98SGKUfelrw%2BN4orF%2FNeplAb5nQqtyDYUAUd6Fnc8%2FvGBQyTH7M%2BPnoEv91A%2Fmf5wY%2BGQEGayKObPy2vCUHcJmU%2Fe2cyDezWxQeDCv%2FCUPANsleZzOvn%2BVMfPvaZbRld6kxsIO76yjAxHtsdt%2F90LJ0ZMCAa9fjbbtj3yYSU%2FfeSE6wqlpbDwenOGS%2B%2Fy9a0kGY9NIfFsTybvSBIp1t7C%2BpqCVyZ%2F36E4pChEyDvm8aaLbbcnKcgYAhF6xreuH6MEfsn41o5m4iyo0ysJv0qJm5fnc2NBmagDClknIaTNc8hmZCsdbPp59EwRKWGKcewGDGajiqHIHiS0iD1HzL%2FX921tx6zJzGUsbWpENGi2naJM4tKApqvqpksKGLvT9qMiJ7dlebNmrGojg24tNlig4uGAXK7JWJ6ekJNykjBop3GWimZlmVh%2BGz9%2B9eVVBMnCFAqO%2ByfMfKzQPXFl6OVYo9kff5p4jsGCzmjVXuFww6EwpaIuin%2B4elrgWpPCctsfqrVMxxWgQtZLXYtYT1c8P3k480%2BYfnMSw2CD5NSYDJMO22W2XmyR02AoBacVLJttviVYg1wCWWMKzoqcQGOqUBrkrBFgwC2TVylSEuITNg%2Bq3E9tjwxhrJMdVcIDqPTxXrUnBw5CyxSwZFqGjJuttxxu%2BFSuvUrxrKdF0ovgoTQlB3AVXgAHk26YPogfu2oJreHzPzphrcPsGmqu5W1Pwf1rOrqoGA2XN%2FGBMC4bkcX6rfX7FkvCFnqsDcsj2WXNaWb7lW9Gvh30xOXpctY6P3eQ0Gtc5k8%2Bg2R8Ci8ut0aROYiGsy&X-Amz-Signature=a4440734880a8f99547301639f46c0eda5b98712bbb906133e86f480fef7b636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NTCJJ2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGINcQxemojcnnHLZD4eSstIaBgXK9kiA%2BS5YHEnJu4NAiEAo%2Bo2COFzqQ8lMbMSKkokz14XIx9dMET%2FKxMZX%2BbRwiYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIzYVTKYX%2F9Wqs4MSrcA1YVVJ5s5ZILphXI0Ygi5WbbBN7NyiwtT1GXKDUiHm3mDK%2F0s98SGKUfelrw%2BN4orF%2FNeplAb5nQqtyDYUAUd6Fnc8%2FvGBQyTH7M%2BPnoEv91A%2Fmf5wY%2BGQEGayKObPy2vCUHcJmU%2Fe2cyDezWxQeDCv%2FCUPANsleZzOvn%2BVMfPvaZbRld6kxsIO76yjAxHtsdt%2F90LJ0ZMCAa9fjbbtj3yYSU%2FfeSE6wqlpbDwenOGS%2B%2Fy9a0kGY9NIfFsTybvSBIp1t7C%2BpqCVyZ%2F36E4pChEyDvm8aaLbbcnKcgYAhF6xreuH6MEfsn41o5m4iyo0ysJv0qJm5fnc2NBmagDClknIaTNc8hmZCsdbPp59EwRKWGKcewGDGajiqHIHiS0iD1HzL%2FX921tx6zJzGUsbWpENGi2naJM4tKApqvqpksKGLvT9qMiJ7dlebNmrGojg24tNlig4uGAXK7JWJ6ekJNykjBop3GWimZlmVh%2BGz9%2B9eVVBMnCFAqO%2ByfMfKzQPXFl6OVYo9kff5p4jsGCzmjVXuFww6EwpaIuin%2B4elrgWpPCctsfqrVMxxWgQtZLXYtYT1c8P3k480%2BYfnMSw2CD5NSYDJMO22W2XmyR02AoBacVLJttviVYg1wCWWMKzoqcQGOqUBrkrBFgwC2TVylSEuITNg%2Bq3E9tjwxhrJMdVcIDqPTxXrUnBw5CyxSwZFqGjJuttxxu%2BFSuvUrxrKdF0ovgoTQlB3AVXgAHk26YPogfu2oJreHzPzphrcPsGmqu5W1Pwf1rOrqoGA2XN%2FGBMC4bkcX6rfX7FkvCFnqsDcsj2WXNaWb7lW9Gvh30xOXpctY6P3eQ0Gtc5k8%2Bg2R8Ci8ut0aROYiGsy&X-Amz-Signature=c8391a6398cf61ccd70d12d209b602d284de296c4cdeb2f89f94e86fad417755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
