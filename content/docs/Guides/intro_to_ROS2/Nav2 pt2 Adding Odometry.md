---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-28T21:22:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-28T21:22:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIPO6KV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWZlCMlFWPnKL70efaRTDeY5BcO45%2FpjPKgGjQmlQGHAiEArLf6D3qq3Et4cK%2Fla2bY7v1ix6Xfw0dy9BaHZHS7kMYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKMHnz3RWSXPG4FoircA5pxu9XKVIl8zG9ZGrqCqpz8yrnLpNynZOapeRN%2BH52UCDuhbDAtB0phM50t03%2FJn%2BvirmLSRDUILqxVlZBvJA8%2FiWHNIQrDFFTsPLCoHDlWAQEbTr%2FihKjTpbs4WyKIWig7alWxGQmq0tEtbUO6knpo1fJi56f1MxEYsIHbRaCsPlnNyqrA3MZ87fp7tcEkuu%2BI%2BaKDu2llKDfJarOrtOQvsbypRE9ySrkBAlTjKS9l0pITBbOINpAWR8krrlworl3Ie5ifi6eYkS%2FpnEG7D2nlHfcQjxyGGHXUsdomCmX%2BwJ4wBPhl9XfA2Zdk5AmHqfLMUuNFRlSnsE7IwXPN9EXEExoFv1aEfOh2FuTXFJWtyYoS3%2FqwTFiZxCWJRBfAIqJwnz0FkmOdgFDcGHCIcOBrUYNuW8HhSSmXpXD2kTK%2BRYS9HAagxkyy9o8b6PHDL7iA5E%2FrJyMnvxel9TkOKziF%2BkGgDZDeRTa8QrYhU%2BxsDlnR3FqJlNTOKP3lirWm7Z1PnzyZhhhm1ib7jw6aKIVUv4j7g36w6nsH9YXuB%2BYJwptQe9yhPN%2BMpg9SdK4CX8QMBAvU01Ly0rpycpk7t0iqXC8W3uz2ef2N462rLkms5rwYI4CIExgshSa4MND%2Bo8QGOqUBaTq7rQXlAhjVy6G5GikaivgAzLj%2FrdF2KHUCJntOVaIQbJ6xbxZOz%2FOEKgCJtwdigXhROvB315w1tb6WQ4GtzerfY8hXS0%2F9Mv9WYdEgi5AUTmDUPn5Rw0yXf3UyiQxmtKGuqwvS4UM9asqPkJgBFtF3IuP9NqoL%2B5QwnBfw8rnIfgmfRnUXWVVKHvqBdNHn4hW4Gs4jrAYTaxuO2qfIl49XMhO0&X-Amz-Signature=04150753fbec4d94b967ac2c3736dd354bbc4dbc564c2589430afcc0dcb46809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIPO6KV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWZlCMlFWPnKL70efaRTDeY5BcO45%2FpjPKgGjQmlQGHAiEArLf6D3qq3Et4cK%2Fla2bY7v1ix6Xfw0dy9BaHZHS7kMYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKMHnz3RWSXPG4FoircA5pxu9XKVIl8zG9ZGrqCqpz8yrnLpNynZOapeRN%2BH52UCDuhbDAtB0phM50t03%2FJn%2BvirmLSRDUILqxVlZBvJA8%2FiWHNIQrDFFTsPLCoHDlWAQEbTr%2FihKjTpbs4WyKIWig7alWxGQmq0tEtbUO6knpo1fJi56f1MxEYsIHbRaCsPlnNyqrA3MZ87fp7tcEkuu%2BI%2BaKDu2llKDfJarOrtOQvsbypRE9ySrkBAlTjKS9l0pITBbOINpAWR8krrlworl3Ie5ifi6eYkS%2FpnEG7D2nlHfcQjxyGGHXUsdomCmX%2BwJ4wBPhl9XfA2Zdk5AmHqfLMUuNFRlSnsE7IwXPN9EXEExoFv1aEfOh2FuTXFJWtyYoS3%2FqwTFiZxCWJRBfAIqJwnz0FkmOdgFDcGHCIcOBrUYNuW8HhSSmXpXD2kTK%2BRYS9HAagxkyy9o8b6PHDL7iA5E%2FrJyMnvxel9TkOKziF%2BkGgDZDeRTa8QrYhU%2BxsDlnR3FqJlNTOKP3lirWm7Z1PnzyZhhhm1ib7jw6aKIVUv4j7g36w6nsH9YXuB%2BYJwptQe9yhPN%2BMpg9SdK4CX8QMBAvU01Ly0rpycpk7t0iqXC8W3uz2ef2N462rLkms5rwYI4CIExgshSa4MND%2Bo8QGOqUBaTq7rQXlAhjVy6G5GikaivgAzLj%2FrdF2KHUCJntOVaIQbJ6xbxZOz%2FOEKgCJtwdigXhROvB315w1tb6WQ4GtzerfY8hXS0%2F9Mv9WYdEgi5AUTmDUPn5Rw0yXf3UyiQxmtKGuqwvS4UM9asqPkJgBFtF3IuP9NqoL%2B5QwnBfw8rnIfgmfRnUXWVVKHvqBdNHn4hW4Gs4jrAYTaxuO2qfIl49XMhO0&X-Amz-Signature=7e8663c31f4be762aff0631c0ad22844a1bcac5ecf5b96a06e2a2a92c619632e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIPO6KV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWZlCMlFWPnKL70efaRTDeY5BcO45%2FpjPKgGjQmlQGHAiEArLf6D3qq3Et4cK%2Fla2bY7v1ix6Xfw0dy9BaHZHS7kMYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKMHnz3RWSXPG4FoircA5pxu9XKVIl8zG9ZGrqCqpz8yrnLpNynZOapeRN%2BH52UCDuhbDAtB0phM50t03%2FJn%2BvirmLSRDUILqxVlZBvJA8%2FiWHNIQrDFFTsPLCoHDlWAQEbTr%2FihKjTpbs4WyKIWig7alWxGQmq0tEtbUO6knpo1fJi56f1MxEYsIHbRaCsPlnNyqrA3MZ87fp7tcEkuu%2BI%2BaKDu2llKDfJarOrtOQvsbypRE9ySrkBAlTjKS9l0pITBbOINpAWR8krrlworl3Ie5ifi6eYkS%2FpnEG7D2nlHfcQjxyGGHXUsdomCmX%2BwJ4wBPhl9XfA2Zdk5AmHqfLMUuNFRlSnsE7IwXPN9EXEExoFv1aEfOh2FuTXFJWtyYoS3%2FqwTFiZxCWJRBfAIqJwnz0FkmOdgFDcGHCIcOBrUYNuW8HhSSmXpXD2kTK%2BRYS9HAagxkyy9o8b6PHDL7iA5E%2FrJyMnvxel9TkOKziF%2BkGgDZDeRTa8QrYhU%2BxsDlnR3FqJlNTOKP3lirWm7Z1PnzyZhhhm1ib7jw6aKIVUv4j7g36w6nsH9YXuB%2BYJwptQe9yhPN%2BMpg9SdK4CX8QMBAvU01Ly0rpycpk7t0iqXC8W3uz2ef2N462rLkms5rwYI4CIExgshSa4MND%2Bo8QGOqUBaTq7rQXlAhjVy6G5GikaivgAzLj%2FrdF2KHUCJntOVaIQbJ6xbxZOz%2FOEKgCJtwdigXhROvB315w1tb6WQ4GtzerfY8hXS0%2F9Mv9WYdEgi5AUTmDUPn5Rw0yXf3UyiQxmtKGuqwvS4UM9asqPkJgBFtF3IuP9NqoL%2B5QwnBfw8rnIfgmfRnUXWVVKHvqBdNHn4hW4Gs4jrAYTaxuO2qfIl49XMhO0&X-Amz-Signature=9b4ca700f10c4d2a15555d1d4b995c78e36261f6bec24af7312a4a998f4289a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIPO6KV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWZlCMlFWPnKL70efaRTDeY5BcO45%2FpjPKgGjQmlQGHAiEArLf6D3qq3Et4cK%2Fla2bY7v1ix6Xfw0dy9BaHZHS7kMYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKMHnz3RWSXPG4FoircA5pxu9XKVIl8zG9ZGrqCqpz8yrnLpNynZOapeRN%2BH52UCDuhbDAtB0phM50t03%2FJn%2BvirmLSRDUILqxVlZBvJA8%2FiWHNIQrDFFTsPLCoHDlWAQEbTr%2FihKjTpbs4WyKIWig7alWxGQmq0tEtbUO6knpo1fJi56f1MxEYsIHbRaCsPlnNyqrA3MZ87fp7tcEkuu%2BI%2BaKDu2llKDfJarOrtOQvsbypRE9ySrkBAlTjKS9l0pITBbOINpAWR8krrlworl3Ie5ifi6eYkS%2FpnEG7D2nlHfcQjxyGGHXUsdomCmX%2BwJ4wBPhl9XfA2Zdk5AmHqfLMUuNFRlSnsE7IwXPN9EXEExoFv1aEfOh2FuTXFJWtyYoS3%2FqwTFiZxCWJRBfAIqJwnz0FkmOdgFDcGHCIcOBrUYNuW8HhSSmXpXD2kTK%2BRYS9HAagxkyy9o8b6PHDL7iA5E%2FrJyMnvxel9TkOKziF%2BkGgDZDeRTa8QrYhU%2BxsDlnR3FqJlNTOKP3lirWm7Z1PnzyZhhhm1ib7jw6aKIVUv4j7g36w6nsH9YXuB%2BYJwptQe9yhPN%2BMpg9SdK4CX8QMBAvU01Ly0rpycpk7t0iqXC8W3uz2ef2N462rLkms5rwYI4CIExgshSa4MND%2Bo8QGOqUBaTq7rQXlAhjVy6G5GikaivgAzLj%2FrdF2KHUCJntOVaIQbJ6xbxZOz%2FOEKgCJtwdigXhROvB315w1tb6WQ4GtzerfY8hXS0%2F9Mv9WYdEgi5AUTmDUPn5Rw0yXf3UyiQxmtKGuqwvS4UM9asqPkJgBFtF3IuP9NqoL%2B5QwnBfw8rnIfgmfRnUXWVVKHvqBdNHn4hW4Gs4jrAYTaxuO2qfIl49XMhO0&X-Amz-Signature=073ae14974181886e25fc6065fdcc777eec07cca5fd48bcc6fc6dcf11593f28d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIPO6KV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWZlCMlFWPnKL70efaRTDeY5BcO45%2FpjPKgGjQmlQGHAiEArLf6D3qq3Et4cK%2Fla2bY7v1ix6Xfw0dy9BaHZHS7kMYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKMHnz3RWSXPG4FoircA5pxu9XKVIl8zG9ZGrqCqpz8yrnLpNynZOapeRN%2BH52UCDuhbDAtB0phM50t03%2FJn%2BvirmLSRDUILqxVlZBvJA8%2FiWHNIQrDFFTsPLCoHDlWAQEbTr%2FihKjTpbs4WyKIWig7alWxGQmq0tEtbUO6knpo1fJi56f1MxEYsIHbRaCsPlnNyqrA3MZ87fp7tcEkuu%2BI%2BaKDu2llKDfJarOrtOQvsbypRE9ySrkBAlTjKS9l0pITBbOINpAWR8krrlworl3Ie5ifi6eYkS%2FpnEG7D2nlHfcQjxyGGHXUsdomCmX%2BwJ4wBPhl9XfA2Zdk5AmHqfLMUuNFRlSnsE7IwXPN9EXEExoFv1aEfOh2FuTXFJWtyYoS3%2FqwTFiZxCWJRBfAIqJwnz0FkmOdgFDcGHCIcOBrUYNuW8HhSSmXpXD2kTK%2BRYS9HAagxkyy9o8b6PHDL7iA5E%2FrJyMnvxel9TkOKziF%2BkGgDZDeRTa8QrYhU%2BxsDlnR3FqJlNTOKP3lirWm7Z1PnzyZhhhm1ib7jw6aKIVUv4j7g36w6nsH9YXuB%2BYJwptQe9yhPN%2BMpg9SdK4CX8QMBAvU01Ly0rpycpk7t0iqXC8W3uz2ef2N462rLkms5rwYI4CIExgshSa4MND%2Bo8QGOqUBaTq7rQXlAhjVy6G5GikaivgAzLj%2FrdF2KHUCJntOVaIQbJ6xbxZOz%2FOEKgCJtwdigXhROvB315w1tb6WQ4GtzerfY8hXS0%2F9Mv9WYdEgi5AUTmDUPn5Rw0yXf3UyiQxmtKGuqwvS4UM9asqPkJgBFtF3IuP9NqoL%2B5QwnBfw8rnIfgmfRnUXWVVKHvqBdNHn4hW4Gs4jrAYTaxuO2qfIl49XMhO0&X-Amz-Signature=c3aad78f2f8ab1dbf6d2c7e9c51e277789dd3b6c2312b7facfd428c2985a1242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIPO6KV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWZlCMlFWPnKL70efaRTDeY5BcO45%2FpjPKgGjQmlQGHAiEArLf6D3qq3Et4cK%2Fla2bY7v1ix6Xfw0dy9BaHZHS7kMYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKMHnz3RWSXPG4FoircA5pxu9XKVIl8zG9ZGrqCqpz8yrnLpNynZOapeRN%2BH52UCDuhbDAtB0phM50t03%2FJn%2BvirmLSRDUILqxVlZBvJA8%2FiWHNIQrDFFTsPLCoHDlWAQEbTr%2FihKjTpbs4WyKIWig7alWxGQmq0tEtbUO6knpo1fJi56f1MxEYsIHbRaCsPlnNyqrA3MZ87fp7tcEkuu%2BI%2BaKDu2llKDfJarOrtOQvsbypRE9ySrkBAlTjKS9l0pITBbOINpAWR8krrlworl3Ie5ifi6eYkS%2FpnEG7D2nlHfcQjxyGGHXUsdomCmX%2BwJ4wBPhl9XfA2Zdk5AmHqfLMUuNFRlSnsE7IwXPN9EXEExoFv1aEfOh2FuTXFJWtyYoS3%2FqwTFiZxCWJRBfAIqJwnz0FkmOdgFDcGHCIcOBrUYNuW8HhSSmXpXD2kTK%2BRYS9HAagxkyy9o8b6PHDL7iA5E%2FrJyMnvxel9TkOKziF%2BkGgDZDeRTa8QrYhU%2BxsDlnR3FqJlNTOKP3lirWm7Z1PnzyZhhhm1ib7jw6aKIVUv4j7g36w6nsH9YXuB%2BYJwptQe9yhPN%2BMpg9SdK4CX8QMBAvU01Ly0rpycpk7t0iqXC8W3uz2ef2N462rLkms5rwYI4CIExgshSa4MND%2Bo8QGOqUBaTq7rQXlAhjVy6G5GikaivgAzLj%2FrdF2KHUCJntOVaIQbJ6xbxZOz%2FOEKgCJtwdigXhROvB315w1tb6WQ4GtzerfY8hXS0%2F9Mv9WYdEgi5AUTmDUPn5Rw0yXf3UyiQxmtKGuqwvS4UM9asqPkJgBFtF3IuP9NqoL%2B5QwnBfw8rnIfgmfRnUXWVVKHvqBdNHn4hW4Gs4jrAYTaxuO2qfIl49XMhO0&X-Amz-Signature=9b0784b08e877011bdea20fb14a7532fbe873a11157033fa1863ecae87374e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIPO6KV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWZlCMlFWPnKL70efaRTDeY5BcO45%2FpjPKgGjQmlQGHAiEArLf6D3qq3Et4cK%2Fla2bY7v1ix6Xfw0dy9BaHZHS7kMYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKMHnz3RWSXPG4FoircA5pxu9XKVIl8zG9ZGrqCqpz8yrnLpNynZOapeRN%2BH52UCDuhbDAtB0phM50t03%2FJn%2BvirmLSRDUILqxVlZBvJA8%2FiWHNIQrDFFTsPLCoHDlWAQEbTr%2FihKjTpbs4WyKIWig7alWxGQmq0tEtbUO6knpo1fJi56f1MxEYsIHbRaCsPlnNyqrA3MZ87fp7tcEkuu%2BI%2BaKDu2llKDfJarOrtOQvsbypRE9ySrkBAlTjKS9l0pITBbOINpAWR8krrlworl3Ie5ifi6eYkS%2FpnEG7D2nlHfcQjxyGGHXUsdomCmX%2BwJ4wBPhl9XfA2Zdk5AmHqfLMUuNFRlSnsE7IwXPN9EXEExoFv1aEfOh2FuTXFJWtyYoS3%2FqwTFiZxCWJRBfAIqJwnz0FkmOdgFDcGHCIcOBrUYNuW8HhSSmXpXD2kTK%2BRYS9HAagxkyy9o8b6PHDL7iA5E%2FrJyMnvxel9TkOKziF%2BkGgDZDeRTa8QrYhU%2BxsDlnR3FqJlNTOKP3lirWm7Z1PnzyZhhhm1ib7jw6aKIVUv4j7g36w6nsH9YXuB%2BYJwptQe9yhPN%2BMpg9SdK4CX8QMBAvU01Ly0rpycpk7t0iqXC8W3uz2ef2N462rLkms5rwYI4CIExgshSa4MND%2Bo8QGOqUBaTq7rQXlAhjVy6G5GikaivgAzLj%2FrdF2KHUCJntOVaIQbJ6xbxZOz%2FOEKgCJtwdigXhROvB315w1tb6WQ4GtzerfY8hXS0%2F9Mv9WYdEgi5AUTmDUPn5Rw0yXf3UyiQxmtKGuqwvS4UM9asqPkJgBFtF3IuP9NqoL%2B5QwnBfw8rnIfgmfRnUXWVVKHvqBdNHn4hW4Gs4jrAYTaxuO2qfIl49XMhO0&X-Amz-Signature=ec6477c2a147cb9101de3fcedbb6716853e0141b077c334e21f8bebef2ff25fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIPO6KV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWZlCMlFWPnKL70efaRTDeY5BcO45%2FpjPKgGjQmlQGHAiEArLf6D3qq3Et4cK%2Fla2bY7v1ix6Xfw0dy9BaHZHS7kMYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKMHnz3RWSXPG4FoircA5pxu9XKVIl8zG9ZGrqCqpz8yrnLpNynZOapeRN%2BH52UCDuhbDAtB0phM50t03%2FJn%2BvirmLSRDUILqxVlZBvJA8%2FiWHNIQrDFFTsPLCoHDlWAQEbTr%2FihKjTpbs4WyKIWig7alWxGQmq0tEtbUO6knpo1fJi56f1MxEYsIHbRaCsPlnNyqrA3MZ87fp7tcEkuu%2BI%2BaKDu2llKDfJarOrtOQvsbypRE9ySrkBAlTjKS9l0pITBbOINpAWR8krrlworl3Ie5ifi6eYkS%2FpnEG7D2nlHfcQjxyGGHXUsdomCmX%2BwJ4wBPhl9XfA2Zdk5AmHqfLMUuNFRlSnsE7IwXPN9EXEExoFv1aEfOh2FuTXFJWtyYoS3%2FqwTFiZxCWJRBfAIqJwnz0FkmOdgFDcGHCIcOBrUYNuW8HhSSmXpXD2kTK%2BRYS9HAagxkyy9o8b6PHDL7iA5E%2FrJyMnvxel9TkOKziF%2BkGgDZDeRTa8QrYhU%2BxsDlnR3FqJlNTOKP3lirWm7Z1PnzyZhhhm1ib7jw6aKIVUv4j7g36w6nsH9YXuB%2BYJwptQe9yhPN%2BMpg9SdK4CX8QMBAvU01Ly0rpycpk7t0iqXC8W3uz2ef2N462rLkms5rwYI4CIExgshSa4MND%2Bo8QGOqUBaTq7rQXlAhjVy6G5GikaivgAzLj%2FrdF2KHUCJntOVaIQbJ6xbxZOz%2FOEKgCJtwdigXhROvB315w1tb6WQ4GtzerfY8hXS0%2F9Mv9WYdEgi5AUTmDUPn5Rw0yXf3UyiQxmtKGuqwvS4UM9asqPkJgBFtF3IuP9NqoL%2B5QwnBfw8rnIfgmfRnUXWVVKHvqBdNHn4hW4Gs4jrAYTaxuO2qfIl49XMhO0&X-Amz-Signature=a01d2b9b3b08dae30213afbaa08178fc067cf3a0cebea1c11d767544bdb13ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIPO6KV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWZlCMlFWPnKL70efaRTDeY5BcO45%2FpjPKgGjQmlQGHAiEArLf6D3qq3Et4cK%2Fla2bY7v1ix6Xfw0dy9BaHZHS7kMYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKMHnz3RWSXPG4FoircA5pxu9XKVIl8zG9ZGrqCqpz8yrnLpNynZOapeRN%2BH52UCDuhbDAtB0phM50t03%2FJn%2BvirmLSRDUILqxVlZBvJA8%2FiWHNIQrDFFTsPLCoHDlWAQEbTr%2FihKjTpbs4WyKIWig7alWxGQmq0tEtbUO6knpo1fJi56f1MxEYsIHbRaCsPlnNyqrA3MZ87fp7tcEkuu%2BI%2BaKDu2llKDfJarOrtOQvsbypRE9ySrkBAlTjKS9l0pITBbOINpAWR8krrlworl3Ie5ifi6eYkS%2FpnEG7D2nlHfcQjxyGGHXUsdomCmX%2BwJ4wBPhl9XfA2Zdk5AmHqfLMUuNFRlSnsE7IwXPN9EXEExoFv1aEfOh2FuTXFJWtyYoS3%2FqwTFiZxCWJRBfAIqJwnz0FkmOdgFDcGHCIcOBrUYNuW8HhSSmXpXD2kTK%2BRYS9HAagxkyy9o8b6PHDL7iA5E%2FrJyMnvxel9TkOKziF%2BkGgDZDeRTa8QrYhU%2BxsDlnR3FqJlNTOKP3lirWm7Z1PnzyZhhhm1ib7jw6aKIVUv4j7g36w6nsH9YXuB%2BYJwptQe9yhPN%2BMpg9SdK4CX8QMBAvU01Ly0rpycpk7t0iqXC8W3uz2ef2N462rLkms5rwYI4CIExgshSa4MND%2Bo8QGOqUBaTq7rQXlAhjVy6G5GikaivgAzLj%2FrdF2KHUCJntOVaIQbJ6xbxZOz%2FOEKgCJtwdigXhROvB315w1tb6WQ4GtzerfY8hXS0%2F9Mv9WYdEgi5AUTmDUPn5Rw0yXf3UyiQxmtKGuqwvS4UM9asqPkJgBFtF3IuP9NqoL%2B5QwnBfw8rnIfgmfRnUXWVVKHvqBdNHn4hW4Gs4jrAYTaxuO2qfIl49XMhO0&X-Amz-Signature=f684e51e73f044e5dca6e762ef7d4485553d0f13ad5f40fcbda24a14833b0762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULQYRCFO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1vJYKLji6x1t%2FqEDuXgqxGyXbv0Dswm0b7Bx8qjCR5wIhAOnLvB%2Fk61DOk4iq85tHEP5KUg%2FPuefAJqc%2ByReSt%2FoyKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp9UJXbg6WV33tSAcq3AO04e0NU04uwmW2R2iBHLInrGwH393AukD2hAiYj09PPQY8d%2BSKXbIvFEHTuGupWDCB8Y37OVePTnjnCREu1OWEyi1D%2BqCS5SGfSrgmQZWIju6LuQERuQv7D%2FlBDSsYS4MsZgBXh0M3zKEKFVFnlRwttdOVNa9DcZdwz2Hkyuls%2FjkFhHYITkeUUinG3PV3SIOhYvsvoItpjdRolVWzXZePoLl%2FpbgMFMRm3AO3Ax%2F%2BCie1gG0Tc1jM0z6J9pLLgujVsJ6qTEh49DCAfWcJ4H7Ni3GwidjWMCWK5mw9AnhAyKFZcPyIikAv0tZmQgqGvSIq4PVVLh4K4X%2F6hFGn2iaBkq9LhuYznHYGxjpAmRANFsDvzJttYA0UDW4GSrX1F3cUWW0PyoZrsDDnSm2%2BpXLPDVQgX3GCwlC3lZyUWD864mVhiG2FlNCzHZabRtTnwSJGPWRQvoHJt0VapztnNVAWxM3q91SUkmsafhTYBsbLgiBdr0w84X7x8sSq1t2Vk1SjIlCL6GAYFA5%2FTy09XqQYeTuhQja%2FPk3%2BwkdsEMNdRjtHop9oC3mqKgbyvMr1343PFs2jhu1G5BU%2FHsLS7ES%2BjigFaYU1tjGPh0FjPA4NZd137vfYexztm0D0VTCs%2FqPEBjqkATm99vAqzHoZr%2BrAREa%2FmUhNUtlvOXCs9v0lwc6IMDZY1via2Mk66jNLJ6EXCeqjGPeeQvUzo9FjPPhZ9DP59EZS2jdvTfo8ykzG48Gr967ZERmJO1VjXLYo7LnhYl%2FWvKmZsO%2Fcuv6Se3dHQjc%2B0helxZ8xZfJYH5OcAY8aoZUMCRloAtAkCDkXRrp4Cv0apfYMglM6kOtUuA4aLjkCZrFsBLZc&X-Amz-Signature=742819edf5fae9981db0112c1d35bcd658f22b0756f7444e73c23cb459773a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIPO6KV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWZlCMlFWPnKL70efaRTDeY5BcO45%2FpjPKgGjQmlQGHAiEArLf6D3qq3Et4cK%2Fla2bY7v1ix6Xfw0dy9BaHZHS7kMYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKMHnz3RWSXPG4FoircA5pxu9XKVIl8zG9ZGrqCqpz8yrnLpNynZOapeRN%2BH52UCDuhbDAtB0phM50t03%2FJn%2BvirmLSRDUILqxVlZBvJA8%2FiWHNIQrDFFTsPLCoHDlWAQEbTr%2FihKjTpbs4WyKIWig7alWxGQmq0tEtbUO6knpo1fJi56f1MxEYsIHbRaCsPlnNyqrA3MZ87fp7tcEkuu%2BI%2BaKDu2llKDfJarOrtOQvsbypRE9ySrkBAlTjKS9l0pITBbOINpAWR8krrlworl3Ie5ifi6eYkS%2FpnEG7D2nlHfcQjxyGGHXUsdomCmX%2BwJ4wBPhl9XfA2Zdk5AmHqfLMUuNFRlSnsE7IwXPN9EXEExoFv1aEfOh2FuTXFJWtyYoS3%2FqwTFiZxCWJRBfAIqJwnz0FkmOdgFDcGHCIcOBrUYNuW8HhSSmXpXD2kTK%2BRYS9HAagxkyy9o8b6PHDL7iA5E%2FrJyMnvxel9TkOKziF%2BkGgDZDeRTa8QrYhU%2BxsDlnR3FqJlNTOKP3lirWm7Z1PnzyZhhhm1ib7jw6aKIVUv4j7g36w6nsH9YXuB%2BYJwptQe9yhPN%2BMpg9SdK4CX8QMBAvU01Ly0rpycpk7t0iqXC8W3uz2ef2N462rLkms5rwYI4CIExgshSa4MND%2Bo8QGOqUBaTq7rQXlAhjVy6G5GikaivgAzLj%2FrdF2KHUCJntOVaIQbJ6xbxZOz%2FOEKgCJtwdigXhROvB315w1tb6WQ4GtzerfY8hXS0%2F9Mv9WYdEgi5AUTmDUPn5Rw0yXf3UyiQxmtKGuqwvS4UM9asqPkJgBFtF3IuP9NqoL%2B5QwnBfw8rnIfgmfRnUXWVVKHvqBdNHn4hW4Gs4jrAYTaxuO2qfIl49XMhO0&X-Amz-Signature=96538498036fdaf4598f06bc47ca5754b60b2ae0813d0cc645f3ce579fa523a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLQHJB26%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMp4T3ocLojIVVIuh%2F8qgSzPSHoZ7CkkJinnzzcwxTtgIhAO86iHCWaEAooEOuOMsIvo3j9tt6VH%2BifS%2B%2FqIstAiKnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM6U3C1TvpC2yn46Qq3AOdScNILJ6o%2Bd9qhWBEwu9OiQ034z%2Fp8QAJ8hl%2BhVXSSMaGkZAuvL6ohnIyrYjMxkecbvHrJKYOdEm7qfhsrVmG%2Fy5XSTrZUwQv42kQ0DHGC8sGIddqYvH03wXMvMelj3Ul9qcyL52eMrTP0Zuq59pnHfWEQDN7cnmpJqJ17dIiEzFlBA6g%2BzxCAK4tVB5IR8C8FHZYquQ6tQvSBxVyX7VGk75s3vziR8%2FKkhufeS5DBlIEflPazT0iViRAeSnsoSARxNPJLsy3SFodFAeCUWVT7TMy4QHnuK92svO7Gr5Uo6BLEz%2FlyGonSJSBSe4ijwGfFV8ZQUqLnROpsP2iDZcvQX6UZC751wAEG8p%2FybNOMpNUdwN1lTqrClopv5GGge7zcBFBkncHANp3J%2BgzZ55IC0MrdhIz1BjuXr5aP9sir70E3MKBJz89nWLufh0E%2Fceynu2727WjShKRLj%2FyHTQXKMgpBsplb0xB3pj2M1mJWuh5t4%2FxeaQWrC%2B6esm6rr%2Bjxykg7QmOQdWRh5zna7DaGdTXXO11PE7%2BS7RzeVomSrkAZhDONxifogTKvHCqW%2FLOqbumKfRo%2BzmILI4yLv%2BIjvbD5TSAV3r1SLo%2BtOvTlRnIq1VD1e6Tw2vGWTD%2B%2FaPEBjqkAcqf%2Faye4zeO4jPEy1NCzHGP8KyFMRT6L15DAiAq4PRpNNMigSlSu16ppDSLyBovUevwgYZ8IpjOCm4aan%2Fki%2BFTvJMnlb%2FknPLrlz2vGKauez52l%2FUujI1jg8Fn84%2Frz4nOAp5pvtd%2FN7g%2F2f1DitjM%2BGFZQ0Okf2dKRdx9IwQ9BTfyRvu7lFseJVrn82a6502OaS91lDUCxXZv0Rq0Xk5exLyI&X-Amz-Signature=03fb03d1d4bd1f45bf6e58aa51e6acdbed86a14c3a335aa4511ab2dec8d5d011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLQHJB26%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMp4T3ocLojIVVIuh%2F8qgSzPSHoZ7CkkJinnzzcwxTtgIhAO86iHCWaEAooEOuOMsIvo3j9tt6VH%2BifS%2B%2FqIstAiKnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM6U3C1TvpC2yn46Qq3AOdScNILJ6o%2Bd9qhWBEwu9OiQ034z%2Fp8QAJ8hl%2BhVXSSMaGkZAuvL6ohnIyrYjMxkecbvHrJKYOdEm7qfhsrVmG%2Fy5XSTrZUwQv42kQ0DHGC8sGIddqYvH03wXMvMelj3Ul9qcyL52eMrTP0Zuq59pnHfWEQDN7cnmpJqJ17dIiEzFlBA6g%2BzxCAK4tVB5IR8C8FHZYquQ6tQvSBxVyX7VGk75s3vziR8%2FKkhufeS5DBlIEflPazT0iViRAeSnsoSARxNPJLsy3SFodFAeCUWVT7TMy4QHnuK92svO7Gr5Uo6BLEz%2FlyGonSJSBSe4ijwGfFV8ZQUqLnROpsP2iDZcvQX6UZC751wAEG8p%2FybNOMpNUdwN1lTqrClopv5GGge7zcBFBkncHANp3J%2BgzZ55IC0MrdhIz1BjuXr5aP9sir70E3MKBJz89nWLufh0E%2Fceynu2727WjShKRLj%2FyHTQXKMgpBsplb0xB3pj2M1mJWuh5t4%2FxeaQWrC%2B6esm6rr%2Bjxykg7QmOQdWRh5zna7DaGdTXXO11PE7%2BS7RzeVomSrkAZhDONxifogTKvHCqW%2FLOqbumKfRo%2BzmILI4yLv%2BIjvbD5TSAV3r1SLo%2BtOvTlRnIq1VD1e6Tw2vGWTD%2B%2FaPEBjqkAcqf%2Faye4zeO4jPEy1NCzHGP8KyFMRT6L15DAiAq4PRpNNMigSlSu16ppDSLyBovUevwgYZ8IpjOCm4aan%2Fki%2BFTvJMnlb%2FknPLrlz2vGKauez52l%2FUujI1jg8Fn84%2Frz4nOAp5pvtd%2FN7g%2F2f1DitjM%2BGFZQ0Okf2dKRdx9IwQ9BTfyRvu7lFseJVrn82a6502OaS91lDUCxXZv0Rq0Xk5exLyI&X-Amz-Signature=a4f1330fc8d71a020505bcb3091f0259df791535928f10ef47e1df0bc2dcc625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLQHJB26%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMp4T3ocLojIVVIuh%2F8qgSzPSHoZ7CkkJinnzzcwxTtgIhAO86iHCWaEAooEOuOMsIvo3j9tt6VH%2BifS%2B%2FqIstAiKnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM6U3C1TvpC2yn46Qq3AOdScNILJ6o%2Bd9qhWBEwu9OiQ034z%2Fp8QAJ8hl%2BhVXSSMaGkZAuvL6ohnIyrYjMxkecbvHrJKYOdEm7qfhsrVmG%2Fy5XSTrZUwQv42kQ0DHGC8sGIddqYvH03wXMvMelj3Ul9qcyL52eMrTP0Zuq59pnHfWEQDN7cnmpJqJ17dIiEzFlBA6g%2BzxCAK4tVB5IR8C8FHZYquQ6tQvSBxVyX7VGk75s3vziR8%2FKkhufeS5DBlIEflPazT0iViRAeSnsoSARxNPJLsy3SFodFAeCUWVT7TMy4QHnuK92svO7Gr5Uo6BLEz%2FlyGonSJSBSe4ijwGfFV8ZQUqLnROpsP2iDZcvQX6UZC751wAEG8p%2FybNOMpNUdwN1lTqrClopv5GGge7zcBFBkncHANp3J%2BgzZ55IC0MrdhIz1BjuXr5aP9sir70E3MKBJz89nWLufh0E%2Fceynu2727WjShKRLj%2FyHTQXKMgpBsplb0xB3pj2M1mJWuh5t4%2FxeaQWrC%2B6esm6rr%2Bjxykg7QmOQdWRh5zna7DaGdTXXO11PE7%2BS7RzeVomSrkAZhDONxifogTKvHCqW%2FLOqbumKfRo%2BzmILI4yLv%2BIjvbD5TSAV3r1SLo%2BtOvTlRnIq1VD1e6Tw2vGWTD%2B%2FaPEBjqkAcqf%2Faye4zeO4jPEy1NCzHGP8KyFMRT6L15DAiAq4PRpNNMigSlSu16ppDSLyBovUevwgYZ8IpjOCm4aan%2Fki%2BFTvJMnlb%2FknPLrlz2vGKauez52l%2FUujI1jg8Fn84%2Frz4nOAp5pvtd%2FN7g%2F2f1DitjM%2BGFZQ0Okf2dKRdx9IwQ9BTfyRvu7lFseJVrn82a6502OaS91lDUCxXZv0Rq0Xk5exLyI&X-Amz-Signature=cd3fe647d554dd5d76868870817bfb28ef64f8dfe2595618860b48639b4812d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLQHJB26%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMp4T3ocLojIVVIuh%2F8qgSzPSHoZ7CkkJinnzzcwxTtgIhAO86iHCWaEAooEOuOMsIvo3j9tt6VH%2BifS%2B%2FqIstAiKnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM6U3C1TvpC2yn46Qq3AOdScNILJ6o%2Bd9qhWBEwu9OiQ034z%2Fp8QAJ8hl%2BhVXSSMaGkZAuvL6ohnIyrYjMxkecbvHrJKYOdEm7qfhsrVmG%2Fy5XSTrZUwQv42kQ0DHGC8sGIddqYvH03wXMvMelj3Ul9qcyL52eMrTP0Zuq59pnHfWEQDN7cnmpJqJ17dIiEzFlBA6g%2BzxCAK4tVB5IR8C8FHZYquQ6tQvSBxVyX7VGk75s3vziR8%2FKkhufeS5DBlIEflPazT0iViRAeSnsoSARxNPJLsy3SFodFAeCUWVT7TMy4QHnuK92svO7Gr5Uo6BLEz%2FlyGonSJSBSe4ijwGfFV8ZQUqLnROpsP2iDZcvQX6UZC751wAEG8p%2FybNOMpNUdwN1lTqrClopv5GGge7zcBFBkncHANp3J%2BgzZ55IC0MrdhIz1BjuXr5aP9sir70E3MKBJz89nWLufh0E%2Fceynu2727WjShKRLj%2FyHTQXKMgpBsplb0xB3pj2M1mJWuh5t4%2FxeaQWrC%2B6esm6rr%2Bjxykg7QmOQdWRh5zna7DaGdTXXO11PE7%2BS7RzeVomSrkAZhDONxifogTKvHCqW%2FLOqbumKfRo%2BzmILI4yLv%2BIjvbD5TSAV3r1SLo%2BtOvTlRnIq1VD1e6Tw2vGWTD%2B%2FaPEBjqkAcqf%2Faye4zeO4jPEy1NCzHGP8KyFMRT6L15DAiAq4PRpNNMigSlSu16ppDSLyBovUevwgYZ8IpjOCm4aan%2Fki%2BFTvJMnlb%2FknPLrlz2vGKauez52l%2FUujI1jg8Fn84%2Frz4nOAp5pvtd%2FN7g%2F2f1DitjM%2BGFZQ0Okf2dKRdx9IwQ9BTfyRvu7lFseJVrn82a6502OaS91lDUCxXZv0Rq0Xk5exLyI&X-Amz-Signature=8973277ea6aef0d34321e249526c8101721f694e752fc89743eeb297a7ce1417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLQHJB26%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMp4T3ocLojIVVIuh%2F8qgSzPSHoZ7CkkJinnzzcwxTtgIhAO86iHCWaEAooEOuOMsIvo3j9tt6VH%2BifS%2B%2FqIstAiKnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM6U3C1TvpC2yn46Qq3AOdScNILJ6o%2Bd9qhWBEwu9OiQ034z%2Fp8QAJ8hl%2BhVXSSMaGkZAuvL6ohnIyrYjMxkecbvHrJKYOdEm7qfhsrVmG%2Fy5XSTrZUwQv42kQ0DHGC8sGIddqYvH03wXMvMelj3Ul9qcyL52eMrTP0Zuq59pnHfWEQDN7cnmpJqJ17dIiEzFlBA6g%2BzxCAK4tVB5IR8C8FHZYquQ6tQvSBxVyX7VGk75s3vziR8%2FKkhufeS5DBlIEflPazT0iViRAeSnsoSARxNPJLsy3SFodFAeCUWVT7TMy4QHnuK92svO7Gr5Uo6BLEz%2FlyGonSJSBSe4ijwGfFV8ZQUqLnROpsP2iDZcvQX6UZC751wAEG8p%2FybNOMpNUdwN1lTqrClopv5GGge7zcBFBkncHANp3J%2BgzZ55IC0MrdhIz1BjuXr5aP9sir70E3MKBJz89nWLufh0E%2Fceynu2727WjShKRLj%2FyHTQXKMgpBsplb0xB3pj2M1mJWuh5t4%2FxeaQWrC%2B6esm6rr%2Bjxykg7QmOQdWRh5zna7DaGdTXXO11PE7%2BS7RzeVomSrkAZhDONxifogTKvHCqW%2FLOqbumKfRo%2BzmILI4yLv%2BIjvbD5TSAV3r1SLo%2BtOvTlRnIq1VD1e6Tw2vGWTD%2B%2FaPEBjqkAcqf%2Faye4zeO4jPEy1NCzHGP8KyFMRT6L15DAiAq4PRpNNMigSlSu16ppDSLyBovUevwgYZ8IpjOCm4aan%2Fki%2BFTvJMnlb%2FknPLrlz2vGKauez52l%2FUujI1jg8Fn84%2Frz4nOAp5pvtd%2FN7g%2F2f1DitjM%2BGFZQ0Okf2dKRdx9IwQ9BTfyRvu7lFseJVrn82a6502OaS91lDUCxXZv0Rq0Xk5exLyI&X-Amz-Signature=c2f18536d21e131bbac5f61f5d2ee4688b9fbe6eaf1972445878ca7535cef2a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLQHJB26%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMp4T3ocLojIVVIuh%2F8qgSzPSHoZ7CkkJinnzzcwxTtgIhAO86iHCWaEAooEOuOMsIvo3j9tt6VH%2BifS%2B%2FqIstAiKnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM6U3C1TvpC2yn46Qq3AOdScNILJ6o%2Bd9qhWBEwu9OiQ034z%2Fp8QAJ8hl%2BhVXSSMaGkZAuvL6ohnIyrYjMxkecbvHrJKYOdEm7qfhsrVmG%2Fy5XSTrZUwQv42kQ0DHGC8sGIddqYvH03wXMvMelj3Ul9qcyL52eMrTP0Zuq59pnHfWEQDN7cnmpJqJ17dIiEzFlBA6g%2BzxCAK4tVB5IR8C8FHZYquQ6tQvSBxVyX7VGk75s3vziR8%2FKkhufeS5DBlIEflPazT0iViRAeSnsoSARxNPJLsy3SFodFAeCUWVT7TMy4QHnuK92svO7Gr5Uo6BLEz%2FlyGonSJSBSe4ijwGfFV8ZQUqLnROpsP2iDZcvQX6UZC751wAEG8p%2FybNOMpNUdwN1lTqrClopv5GGge7zcBFBkncHANp3J%2BgzZ55IC0MrdhIz1BjuXr5aP9sir70E3MKBJz89nWLufh0E%2Fceynu2727WjShKRLj%2FyHTQXKMgpBsplb0xB3pj2M1mJWuh5t4%2FxeaQWrC%2B6esm6rr%2Bjxykg7QmOQdWRh5zna7DaGdTXXO11PE7%2BS7RzeVomSrkAZhDONxifogTKvHCqW%2FLOqbumKfRo%2BzmILI4yLv%2BIjvbD5TSAV3r1SLo%2BtOvTlRnIq1VD1e6Tw2vGWTD%2B%2FaPEBjqkAcqf%2Faye4zeO4jPEy1NCzHGP8KyFMRT6L15DAiAq4PRpNNMigSlSu16ppDSLyBovUevwgYZ8IpjOCm4aan%2Fki%2BFTvJMnlb%2FknPLrlz2vGKauez52l%2FUujI1jg8Fn84%2Frz4nOAp5pvtd%2FN7g%2F2f1DitjM%2BGFZQ0Okf2dKRdx9IwQ9BTfyRvu7lFseJVrn82a6502OaS91lDUCxXZv0Rq0Xk5exLyI&X-Amz-Signature=404102d5def294b6a5477f513cd2bf1767316cdbe480387b2259849be334b70f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLQHJB26%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMp4T3ocLojIVVIuh%2F8qgSzPSHoZ7CkkJinnzzcwxTtgIhAO86iHCWaEAooEOuOMsIvo3j9tt6VH%2BifS%2B%2FqIstAiKnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM6U3C1TvpC2yn46Qq3AOdScNILJ6o%2Bd9qhWBEwu9OiQ034z%2Fp8QAJ8hl%2BhVXSSMaGkZAuvL6ohnIyrYjMxkecbvHrJKYOdEm7qfhsrVmG%2Fy5XSTrZUwQv42kQ0DHGC8sGIddqYvH03wXMvMelj3Ul9qcyL52eMrTP0Zuq59pnHfWEQDN7cnmpJqJ17dIiEzFlBA6g%2BzxCAK4tVB5IR8C8FHZYquQ6tQvSBxVyX7VGk75s3vziR8%2FKkhufeS5DBlIEflPazT0iViRAeSnsoSARxNPJLsy3SFodFAeCUWVT7TMy4QHnuK92svO7Gr5Uo6BLEz%2FlyGonSJSBSe4ijwGfFV8ZQUqLnROpsP2iDZcvQX6UZC751wAEG8p%2FybNOMpNUdwN1lTqrClopv5GGge7zcBFBkncHANp3J%2BgzZ55IC0MrdhIz1BjuXr5aP9sir70E3MKBJz89nWLufh0E%2Fceynu2727WjShKRLj%2FyHTQXKMgpBsplb0xB3pj2M1mJWuh5t4%2FxeaQWrC%2B6esm6rr%2Bjxykg7QmOQdWRh5zna7DaGdTXXO11PE7%2BS7RzeVomSrkAZhDONxifogTKvHCqW%2FLOqbumKfRo%2BzmILI4yLv%2BIjvbD5TSAV3r1SLo%2BtOvTlRnIq1VD1e6Tw2vGWTD%2B%2FaPEBjqkAcqf%2Faye4zeO4jPEy1NCzHGP8KyFMRT6L15DAiAq4PRpNNMigSlSu16ppDSLyBovUevwgYZ8IpjOCm4aan%2Fki%2BFTvJMnlb%2FknPLrlz2vGKauez52l%2FUujI1jg8Fn84%2Frz4nOAp5pvtd%2FN7g%2F2f1DitjM%2BGFZQ0Okf2dKRdx9IwQ9BTfyRvu7lFseJVrn82a6502OaS91lDUCxXZv0Rq0Xk5exLyI&X-Amz-Signature=3a7fd1c0f6c7fe27b30e480bebd8477cf887e22dbd6115744ce438d77c2a9e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLQHJB26%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMp4T3ocLojIVVIuh%2F8qgSzPSHoZ7CkkJinnzzcwxTtgIhAO86iHCWaEAooEOuOMsIvo3j9tt6VH%2BifS%2B%2FqIstAiKnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM6U3C1TvpC2yn46Qq3AOdScNILJ6o%2Bd9qhWBEwu9OiQ034z%2Fp8QAJ8hl%2BhVXSSMaGkZAuvL6ohnIyrYjMxkecbvHrJKYOdEm7qfhsrVmG%2Fy5XSTrZUwQv42kQ0DHGC8sGIddqYvH03wXMvMelj3Ul9qcyL52eMrTP0Zuq59pnHfWEQDN7cnmpJqJ17dIiEzFlBA6g%2BzxCAK4tVB5IR8C8FHZYquQ6tQvSBxVyX7VGk75s3vziR8%2FKkhufeS5DBlIEflPazT0iViRAeSnsoSARxNPJLsy3SFodFAeCUWVT7TMy4QHnuK92svO7Gr5Uo6BLEz%2FlyGonSJSBSe4ijwGfFV8ZQUqLnROpsP2iDZcvQX6UZC751wAEG8p%2FybNOMpNUdwN1lTqrClopv5GGge7zcBFBkncHANp3J%2BgzZ55IC0MrdhIz1BjuXr5aP9sir70E3MKBJz89nWLufh0E%2Fceynu2727WjShKRLj%2FyHTQXKMgpBsplb0xB3pj2M1mJWuh5t4%2FxeaQWrC%2B6esm6rr%2Bjxykg7QmOQdWRh5zna7DaGdTXXO11PE7%2BS7RzeVomSrkAZhDONxifogTKvHCqW%2FLOqbumKfRo%2BzmILI4yLv%2BIjvbD5TSAV3r1SLo%2BtOvTlRnIq1VD1e6Tw2vGWTD%2B%2FaPEBjqkAcqf%2Faye4zeO4jPEy1NCzHGP8KyFMRT6L15DAiAq4PRpNNMigSlSu16ppDSLyBovUevwgYZ8IpjOCm4aan%2Fki%2BFTvJMnlb%2FknPLrlz2vGKauez52l%2FUujI1jg8Fn84%2Frz4nOAp5pvtd%2FN7g%2F2f1DitjM%2BGFZQ0Okf2dKRdx9IwQ9BTfyRvu7lFseJVrn82a6502OaS91lDUCxXZv0Rq0Xk5exLyI&X-Amz-Signature=d35e7b1e9740c949be8c4e9bac196ad078a7c3db2038fd9e27a77535e0fbc588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
