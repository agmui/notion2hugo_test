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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGSXSBO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDHFAb06Xa9yh8jgJ%2B1ZK0KhynTJHRDNNz8IX2%2Bg6bmwwIgOT%2Bp5l3gvdgO9WL0P4odvNkeoZzrFRWH7SB%2Be2T%2Fg6Aq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJ%2FHrDDUTbfS3pVzYCrcA4ma%2BNtywu6STb2OA8Z2ItkmB0lpH3vEi0CovIpSJZlgGqQaTKj5P7B%2Fdh68x6qEU4y3WdtvE334TXLk1qVNTrwPA8qzwWOH2C3T1U6%2B2rl0anUk7k4PQqY%2F5IcBoL0RLXG5fndV2w8Rvomn%2BHI89SycgFDtS8LrUhHQHM7LM4Oav18sRqAGJ1ZcOIN6M7XlCD5z7HUKsFnda%2B2dW4iINSRd83cKIN1TOufImVs0ecx4iu5%2FCRdalXeVXOe062gqcJmficIwDX3otVj8bw0q4kcpqy47RmZpmWwoT3ztCwewMwQUNFKpzDIA34Cw7g8iQa9%2Bm60p4uWU53PS%2FvgnDoP%2BqxV1uANCYX%2Bd%2F3ScLFu1bnbKZiSxZu%2FT3E6S6DvLHhD3JLq5m9EGnJ3KQZ7QgEeIEKZHktokJ9kgV6uOtgt4n%2FFgHQkdFVTbUBiBqB2QTVHCAPd327KGDWEu%2BoIsjyYi73f52WtZgKv6cztnEjuZmo10vuruYRQYaIhv4qlGhQ36fnC8rnEEh7WH6%2FMVSxQk%2BQkpCd0FzvTtWXD1MhcMcKiGAhmFQEy0NJKdCDqs%2BGwhlUz3XhMD%2Bfl1HhKkeiQmvYYk%2Fpc2mm03O91bWKvYfACugj8A6ftuNhfHMOrKy8QGOqUBF13sVqiSZi0zXeCDnxHhdBHS2Rh2PA5KjYUgB7vqGVjYzdKtVPM3PKfperp3g7BFffwH%2FYTG7qViIaqIbjiiIhozK%2F5vJntocsddFh3Y5wNYNzeScCk7r4Rnca26YZAj1tTwkCX%2BE3hPyC5p%2FVLUXvDSPwnh1L5SO8lUxfgkGK3aqyP5ZBiEXpi1tUnTo4KVtM3A4Kd7Bnbd4Qwx%2B%2BqfZ9nbldjq&X-Amz-Signature=aaa31e42605315936a02a10d6defc41e2b4e80ee32bc3c412063a778e7c2f0a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGSXSBO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDHFAb06Xa9yh8jgJ%2B1ZK0KhynTJHRDNNz8IX2%2Bg6bmwwIgOT%2Bp5l3gvdgO9WL0P4odvNkeoZzrFRWH7SB%2Be2T%2Fg6Aq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJ%2FHrDDUTbfS3pVzYCrcA4ma%2BNtywu6STb2OA8Z2ItkmB0lpH3vEi0CovIpSJZlgGqQaTKj5P7B%2Fdh68x6qEU4y3WdtvE334TXLk1qVNTrwPA8qzwWOH2C3T1U6%2B2rl0anUk7k4PQqY%2F5IcBoL0RLXG5fndV2w8Rvomn%2BHI89SycgFDtS8LrUhHQHM7LM4Oav18sRqAGJ1ZcOIN6M7XlCD5z7HUKsFnda%2B2dW4iINSRd83cKIN1TOufImVs0ecx4iu5%2FCRdalXeVXOe062gqcJmficIwDX3otVj8bw0q4kcpqy47RmZpmWwoT3ztCwewMwQUNFKpzDIA34Cw7g8iQa9%2Bm60p4uWU53PS%2FvgnDoP%2BqxV1uANCYX%2Bd%2F3ScLFu1bnbKZiSxZu%2FT3E6S6DvLHhD3JLq5m9EGnJ3KQZ7QgEeIEKZHktokJ9kgV6uOtgt4n%2FFgHQkdFVTbUBiBqB2QTVHCAPd327KGDWEu%2BoIsjyYi73f52WtZgKv6cztnEjuZmo10vuruYRQYaIhv4qlGhQ36fnC8rnEEh7WH6%2FMVSxQk%2BQkpCd0FzvTtWXD1MhcMcKiGAhmFQEy0NJKdCDqs%2BGwhlUz3XhMD%2Bfl1HhKkeiQmvYYk%2Fpc2mm03O91bWKvYfACugj8A6ftuNhfHMOrKy8QGOqUBF13sVqiSZi0zXeCDnxHhdBHS2Rh2PA5KjYUgB7vqGVjYzdKtVPM3PKfperp3g7BFffwH%2FYTG7qViIaqIbjiiIhozK%2F5vJntocsddFh3Y5wNYNzeScCk7r4Rnca26YZAj1tTwkCX%2BE3hPyC5p%2FVLUXvDSPwnh1L5SO8lUxfgkGK3aqyP5ZBiEXpi1tUnTo4KVtM3A4Kd7Bnbd4Qwx%2B%2BqfZ9nbldjq&X-Amz-Signature=44b3e2a040deef15b52afcefbd36805fb84198f419d8764940eac09c43881564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGSXSBO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDHFAb06Xa9yh8jgJ%2B1ZK0KhynTJHRDNNz8IX2%2Bg6bmwwIgOT%2Bp5l3gvdgO9WL0P4odvNkeoZzrFRWH7SB%2Be2T%2Fg6Aq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJ%2FHrDDUTbfS3pVzYCrcA4ma%2BNtywu6STb2OA8Z2ItkmB0lpH3vEi0CovIpSJZlgGqQaTKj5P7B%2Fdh68x6qEU4y3WdtvE334TXLk1qVNTrwPA8qzwWOH2C3T1U6%2B2rl0anUk7k4PQqY%2F5IcBoL0RLXG5fndV2w8Rvomn%2BHI89SycgFDtS8LrUhHQHM7LM4Oav18sRqAGJ1ZcOIN6M7XlCD5z7HUKsFnda%2B2dW4iINSRd83cKIN1TOufImVs0ecx4iu5%2FCRdalXeVXOe062gqcJmficIwDX3otVj8bw0q4kcpqy47RmZpmWwoT3ztCwewMwQUNFKpzDIA34Cw7g8iQa9%2Bm60p4uWU53PS%2FvgnDoP%2BqxV1uANCYX%2Bd%2F3ScLFu1bnbKZiSxZu%2FT3E6S6DvLHhD3JLq5m9EGnJ3KQZ7QgEeIEKZHktokJ9kgV6uOtgt4n%2FFgHQkdFVTbUBiBqB2QTVHCAPd327KGDWEu%2BoIsjyYi73f52WtZgKv6cztnEjuZmo10vuruYRQYaIhv4qlGhQ36fnC8rnEEh7WH6%2FMVSxQk%2BQkpCd0FzvTtWXD1MhcMcKiGAhmFQEy0NJKdCDqs%2BGwhlUz3XhMD%2Bfl1HhKkeiQmvYYk%2Fpc2mm03O91bWKvYfACugj8A6ftuNhfHMOrKy8QGOqUBF13sVqiSZi0zXeCDnxHhdBHS2Rh2PA5KjYUgB7vqGVjYzdKtVPM3PKfperp3g7BFffwH%2FYTG7qViIaqIbjiiIhozK%2F5vJntocsddFh3Y5wNYNzeScCk7r4Rnca26YZAj1tTwkCX%2BE3hPyC5p%2FVLUXvDSPwnh1L5SO8lUxfgkGK3aqyP5ZBiEXpi1tUnTo4KVtM3A4Kd7Bnbd4Qwx%2B%2BqfZ9nbldjq&X-Amz-Signature=c87ba12deb72851c6e1093f4e2c16c61608af6379d9955fa625ac78135cc04dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGSXSBO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDHFAb06Xa9yh8jgJ%2B1ZK0KhynTJHRDNNz8IX2%2Bg6bmwwIgOT%2Bp5l3gvdgO9WL0P4odvNkeoZzrFRWH7SB%2Be2T%2Fg6Aq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJ%2FHrDDUTbfS3pVzYCrcA4ma%2BNtywu6STb2OA8Z2ItkmB0lpH3vEi0CovIpSJZlgGqQaTKj5P7B%2Fdh68x6qEU4y3WdtvE334TXLk1qVNTrwPA8qzwWOH2C3T1U6%2B2rl0anUk7k4PQqY%2F5IcBoL0RLXG5fndV2w8Rvomn%2BHI89SycgFDtS8LrUhHQHM7LM4Oav18sRqAGJ1ZcOIN6M7XlCD5z7HUKsFnda%2B2dW4iINSRd83cKIN1TOufImVs0ecx4iu5%2FCRdalXeVXOe062gqcJmficIwDX3otVj8bw0q4kcpqy47RmZpmWwoT3ztCwewMwQUNFKpzDIA34Cw7g8iQa9%2Bm60p4uWU53PS%2FvgnDoP%2BqxV1uANCYX%2Bd%2F3ScLFu1bnbKZiSxZu%2FT3E6S6DvLHhD3JLq5m9EGnJ3KQZ7QgEeIEKZHktokJ9kgV6uOtgt4n%2FFgHQkdFVTbUBiBqB2QTVHCAPd327KGDWEu%2BoIsjyYi73f52WtZgKv6cztnEjuZmo10vuruYRQYaIhv4qlGhQ36fnC8rnEEh7WH6%2FMVSxQk%2BQkpCd0FzvTtWXD1MhcMcKiGAhmFQEy0NJKdCDqs%2BGwhlUz3XhMD%2Bfl1HhKkeiQmvYYk%2Fpc2mm03O91bWKvYfACugj8A6ftuNhfHMOrKy8QGOqUBF13sVqiSZi0zXeCDnxHhdBHS2Rh2PA5KjYUgB7vqGVjYzdKtVPM3PKfperp3g7BFffwH%2FYTG7qViIaqIbjiiIhozK%2F5vJntocsddFh3Y5wNYNzeScCk7r4Rnca26YZAj1tTwkCX%2BE3hPyC5p%2FVLUXvDSPwnh1L5SO8lUxfgkGK3aqyP5ZBiEXpi1tUnTo4KVtM3A4Kd7Bnbd4Qwx%2B%2BqfZ9nbldjq&X-Amz-Signature=dcd729ea728940e0711d28ac03638e55fefa371e3e3aefb95b54de4fdcd47b77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGSXSBO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDHFAb06Xa9yh8jgJ%2B1ZK0KhynTJHRDNNz8IX2%2Bg6bmwwIgOT%2Bp5l3gvdgO9WL0P4odvNkeoZzrFRWH7SB%2Be2T%2Fg6Aq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJ%2FHrDDUTbfS3pVzYCrcA4ma%2BNtywu6STb2OA8Z2ItkmB0lpH3vEi0CovIpSJZlgGqQaTKj5P7B%2Fdh68x6qEU4y3WdtvE334TXLk1qVNTrwPA8qzwWOH2C3T1U6%2B2rl0anUk7k4PQqY%2F5IcBoL0RLXG5fndV2w8Rvomn%2BHI89SycgFDtS8LrUhHQHM7LM4Oav18sRqAGJ1ZcOIN6M7XlCD5z7HUKsFnda%2B2dW4iINSRd83cKIN1TOufImVs0ecx4iu5%2FCRdalXeVXOe062gqcJmficIwDX3otVj8bw0q4kcpqy47RmZpmWwoT3ztCwewMwQUNFKpzDIA34Cw7g8iQa9%2Bm60p4uWU53PS%2FvgnDoP%2BqxV1uANCYX%2Bd%2F3ScLFu1bnbKZiSxZu%2FT3E6S6DvLHhD3JLq5m9EGnJ3KQZ7QgEeIEKZHktokJ9kgV6uOtgt4n%2FFgHQkdFVTbUBiBqB2QTVHCAPd327KGDWEu%2BoIsjyYi73f52WtZgKv6cztnEjuZmo10vuruYRQYaIhv4qlGhQ36fnC8rnEEh7WH6%2FMVSxQk%2BQkpCd0FzvTtWXD1MhcMcKiGAhmFQEy0NJKdCDqs%2BGwhlUz3XhMD%2Bfl1HhKkeiQmvYYk%2Fpc2mm03O91bWKvYfACugj8A6ftuNhfHMOrKy8QGOqUBF13sVqiSZi0zXeCDnxHhdBHS2Rh2PA5KjYUgB7vqGVjYzdKtVPM3PKfperp3g7BFffwH%2FYTG7qViIaqIbjiiIhozK%2F5vJntocsddFh3Y5wNYNzeScCk7r4Rnca26YZAj1tTwkCX%2BE3hPyC5p%2FVLUXvDSPwnh1L5SO8lUxfgkGK3aqyP5ZBiEXpi1tUnTo4KVtM3A4Kd7Bnbd4Qwx%2B%2BqfZ9nbldjq&X-Amz-Signature=00bb0bdfbe00ff1d0aa66243b695b5447613377cae669fe28cafb444ad08c730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGSXSBO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDHFAb06Xa9yh8jgJ%2B1ZK0KhynTJHRDNNz8IX2%2Bg6bmwwIgOT%2Bp5l3gvdgO9WL0P4odvNkeoZzrFRWH7SB%2Be2T%2Fg6Aq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJ%2FHrDDUTbfS3pVzYCrcA4ma%2BNtywu6STb2OA8Z2ItkmB0lpH3vEi0CovIpSJZlgGqQaTKj5P7B%2Fdh68x6qEU4y3WdtvE334TXLk1qVNTrwPA8qzwWOH2C3T1U6%2B2rl0anUk7k4PQqY%2F5IcBoL0RLXG5fndV2w8Rvomn%2BHI89SycgFDtS8LrUhHQHM7LM4Oav18sRqAGJ1ZcOIN6M7XlCD5z7HUKsFnda%2B2dW4iINSRd83cKIN1TOufImVs0ecx4iu5%2FCRdalXeVXOe062gqcJmficIwDX3otVj8bw0q4kcpqy47RmZpmWwoT3ztCwewMwQUNFKpzDIA34Cw7g8iQa9%2Bm60p4uWU53PS%2FvgnDoP%2BqxV1uANCYX%2Bd%2F3ScLFu1bnbKZiSxZu%2FT3E6S6DvLHhD3JLq5m9EGnJ3KQZ7QgEeIEKZHktokJ9kgV6uOtgt4n%2FFgHQkdFVTbUBiBqB2QTVHCAPd327KGDWEu%2BoIsjyYi73f52WtZgKv6cztnEjuZmo10vuruYRQYaIhv4qlGhQ36fnC8rnEEh7WH6%2FMVSxQk%2BQkpCd0FzvTtWXD1MhcMcKiGAhmFQEy0NJKdCDqs%2BGwhlUz3XhMD%2Bfl1HhKkeiQmvYYk%2Fpc2mm03O91bWKvYfACugj8A6ftuNhfHMOrKy8QGOqUBF13sVqiSZi0zXeCDnxHhdBHS2Rh2PA5KjYUgB7vqGVjYzdKtVPM3PKfperp3g7BFffwH%2FYTG7qViIaqIbjiiIhozK%2F5vJntocsddFh3Y5wNYNzeScCk7r4Rnca26YZAj1tTwkCX%2BE3hPyC5p%2FVLUXvDSPwnh1L5SO8lUxfgkGK3aqyP5ZBiEXpi1tUnTo4KVtM3A4Kd7Bnbd4Qwx%2B%2BqfZ9nbldjq&X-Amz-Signature=1a57a28a2e67dd10e57d349c0bfd639c08c9e6e639f90e8df497913811e29fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGSXSBO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDHFAb06Xa9yh8jgJ%2B1ZK0KhynTJHRDNNz8IX2%2Bg6bmwwIgOT%2Bp5l3gvdgO9WL0P4odvNkeoZzrFRWH7SB%2Be2T%2Fg6Aq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJ%2FHrDDUTbfS3pVzYCrcA4ma%2BNtywu6STb2OA8Z2ItkmB0lpH3vEi0CovIpSJZlgGqQaTKj5P7B%2Fdh68x6qEU4y3WdtvE334TXLk1qVNTrwPA8qzwWOH2C3T1U6%2B2rl0anUk7k4PQqY%2F5IcBoL0RLXG5fndV2w8Rvomn%2BHI89SycgFDtS8LrUhHQHM7LM4Oav18sRqAGJ1ZcOIN6M7XlCD5z7HUKsFnda%2B2dW4iINSRd83cKIN1TOufImVs0ecx4iu5%2FCRdalXeVXOe062gqcJmficIwDX3otVj8bw0q4kcpqy47RmZpmWwoT3ztCwewMwQUNFKpzDIA34Cw7g8iQa9%2Bm60p4uWU53PS%2FvgnDoP%2BqxV1uANCYX%2Bd%2F3ScLFu1bnbKZiSxZu%2FT3E6S6DvLHhD3JLq5m9EGnJ3KQZ7QgEeIEKZHktokJ9kgV6uOtgt4n%2FFgHQkdFVTbUBiBqB2QTVHCAPd327KGDWEu%2BoIsjyYi73f52WtZgKv6cztnEjuZmo10vuruYRQYaIhv4qlGhQ36fnC8rnEEh7WH6%2FMVSxQk%2BQkpCd0FzvTtWXD1MhcMcKiGAhmFQEy0NJKdCDqs%2BGwhlUz3XhMD%2Bfl1HhKkeiQmvYYk%2Fpc2mm03O91bWKvYfACugj8A6ftuNhfHMOrKy8QGOqUBF13sVqiSZi0zXeCDnxHhdBHS2Rh2PA5KjYUgB7vqGVjYzdKtVPM3PKfperp3g7BFffwH%2FYTG7qViIaqIbjiiIhozK%2F5vJntocsddFh3Y5wNYNzeScCk7r4Rnca26YZAj1tTwkCX%2BE3hPyC5p%2FVLUXvDSPwnh1L5SO8lUxfgkGK3aqyP5ZBiEXpi1tUnTo4KVtM3A4Kd7Bnbd4Qwx%2B%2BqfZ9nbldjq&X-Amz-Signature=0d4805ed8897505ac403c524b98cc5b7382539931277178c2f06062183f4981f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGSXSBO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDHFAb06Xa9yh8jgJ%2B1ZK0KhynTJHRDNNz8IX2%2Bg6bmwwIgOT%2Bp5l3gvdgO9WL0P4odvNkeoZzrFRWH7SB%2Be2T%2Fg6Aq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJ%2FHrDDUTbfS3pVzYCrcA4ma%2BNtywu6STb2OA8Z2ItkmB0lpH3vEi0CovIpSJZlgGqQaTKj5P7B%2Fdh68x6qEU4y3WdtvE334TXLk1qVNTrwPA8qzwWOH2C3T1U6%2B2rl0anUk7k4PQqY%2F5IcBoL0RLXG5fndV2w8Rvomn%2BHI89SycgFDtS8LrUhHQHM7LM4Oav18sRqAGJ1ZcOIN6M7XlCD5z7HUKsFnda%2B2dW4iINSRd83cKIN1TOufImVs0ecx4iu5%2FCRdalXeVXOe062gqcJmficIwDX3otVj8bw0q4kcpqy47RmZpmWwoT3ztCwewMwQUNFKpzDIA34Cw7g8iQa9%2Bm60p4uWU53PS%2FvgnDoP%2BqxV1uANCYX%2Bd%2F3ScLFu1bnbKZiSxZu%2FT3E6S6DvLHhD3JLq5m9EGnJ3KQZ7QgEeIEKZHktokJ9kgV6uOtgt4n%2FFgHQkdFVTbUBiBqB2QTVHCAPd327KGDWEu%2BoIsjyYi73f52WtZgKv6cztnEjuZmo10vuruYRQYaIhv4qlGhQ36fnC8rnEEh7WH6%2FMVSxQk%2BQkpCd0FzvTtWXD1MhcMcKiGAhmFQEy0NJKdCDqs%2BGwhlUz3XhMD%2Bfl1HhKkeiQmvYYk%2Fpc2mm03O91bWKvYfACugj8A6ftuNhfHMOrKy8QGOqUBF13sVqiSZi0zXeCDnxHhdBHS2Rh2PA5KjYUgB7vqGVjYzdKtVPM3PKfperp3g7BFffwH%2FYTG7qViIaqIbjiiIhozK%2F5vJntocsddFh3Y5wNYNzeScCk7r4Rnca26YZAj1tTwkCX%2BE3hPyC5p%2FVLUXvDSPwnh1L5SO8lUxfgkGK3aqyP5ZBiEXpi1tUnTo4KVtM3A4Kd7Bnbd4Qwx%2B%2BqfZ9nbldjq&X-Amz-Signature=3c7f37a4c113aaa139f379b4018f0a40275d254511ee2ebf1c456a92e43c65df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGSXSBO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDHFAb06Xa9yh8jgJ%2B1ZK0KhynTJHRDNNz8IX2%2Bg6bmwwIgOT%2Bp5l3gvdgO9WL0P4odvNkeoZzrFRWH7SB%2Be2T%2Fg6Aq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJ%2FHrDDUTbfS3pVzYCrcA4ma%2BNtywu6STb2OA8Z2ItkmB0lpH3vEi0CovIpSJZlgGqQaTKj5P7B%2Fdh68x6qEU4y3WdtvE334TXLk1qVNTrwPA8qzwWOH2C3T1U6%2B2rl0anUk7k4PQqY%2F5IcBoL0RLXG5fndV2w8Rvomn%2BHI89SycgFDtS8LrUhHQHM7LM4Oav18sRqAGJ1ZcOIN6M7XlCD5z7HUKsFnda%2B2dW4iINSRd83cKIN1TOufImVs0ecx4iu5%2FCRdalXeVXOe062gqcJmficIwDX3otVj8bw0q4kcpqy47RmZpmWwoT3ztCwewMwQUNFKpzDIA34Cw7g8iQa9%2Bm60p4uWU53PS%2FvgnDoP%2BqxV1uANCYX%2Bd%2F3ScLFu1bnbKZiSxZu%2FT3E6S6DvLHhD3JLq5m9EGnJ3KQZ7QgEeIEKZHktokJ9kgV6uOtgt4n%2FFgHQkdFVTbUBiBqB2QTVHCAPd327KGDWEu%2BoIsjyYi73f52WtZgKv6cztnEjuZmo10vuruYRQYaIhv4qlGhQ36fnC8rnEEh7WH6%2FMVSxQk%2BQkpCd0FzvTtWXD1MhcMcKiGAhmFQEy0NJKdCDqs%2BGwhlUz3XhMD%2Bfl1HhKkeiQmvYYk%2Fpc2mm03O91bWKvYfACugj8A6ftuNhfHMOrKy8QGOqUBF13sVqiSZi0zXeCDnxHhdBHS2Rh2PA5KjYUgB7vqGVjYzdKtVPM3PKfperp3g7BFffwH%2FYTG7qViIaqIbjiiIhozK%2F5vJntocsddFh3Y5wNYNzeScCk7r4Rnca26YZAj1tTwkCX%2BE3hPyC5p%2FVLUXvDSPwnh1L5SO8lUxfgkGK3aqyP5ZBiEXpi1tUnTo4KVtM3A4Kd7Bnbd4Qwx%2B%2BqfZ9nbldjq&X-Amz-Signature=9da1d6c9e54e0fb9163f4d56fdf786cb25e16e80ccf031c6e1de2a67e6025cf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGSXSBO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDHFAb06Xa9yh8jgJ%2B1ZK0KhynTJHRDNNz8IX2%2Bg6bmwwIgOT%2Bp5l3gvdgO9WL0P4odvNkeoZzrFRWH7SB%2Be2T%2Fg6Aq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJ%2FHrDDUTbfS3pVzYCrcA4ma%2BNtywu6STb2OA8Z2ItkmB0lpH3vEi0CovIpSJZlgGqQaTKj5P7B%2Fdh68x6qEU4y3WdtvE334TXLk1qVNTrwPA8qzwWOH2C3T1U6%2B2rl0anUk7k4PQqY%2F5IcBoL0RLXG5fndV2w8Rvomn%2BHI89SycgFDtS8LrUhHQHM7LM4Oav18sRqAGJ1ZcOIN6M7XlCD5z7HUKsFnda%2B2dW4iINSRd83cKIN1TOufImVs0ecx4iu5%2FCRdalXeVXOe062gqcJmficIwDX3otVj8bw0q4kcpqy47RmZpmWwoT3ztCwewMwQUNFKpzDIA34Cw7g8iQa9%2Bm60p4uWU53PS%2FvgnDoP%2BqxV1uANCYX%2Bd%2F3ScLFu1bnbKZiSxZu%2FT3E6S6DvLHhD3JLq5m9EGnJ3KQZ7QgEeIEKZHktokJ9kgV6uOtgt4n%2FFgHQkdFVTbUBiBqB2QTVHCAPd327KGDWEu%2BoIsjyYi73f52WtZgKv6cztnEjuZmo10vuruYRQYaIhv4qlGhQ36fnC8rnEEh7WH6%2FMVSxQk%2BQkpCd0FzvTtWXD1MhcMcKiGAhmFQEy0NJKdCDqs%2BGwhlUz3XhMD%2Bfl1HhKkeiQmvYYk%2Fpc2mm03O91bWKvYfACugj8A6ftuNhfHMOrKy8QGOqUBF13sVqiSZi0zXeCDnxHhdBHS2Rh2PA5KjYUgB7vqGVjYzdKtVPM3PKfperp3g7BFffwH%2FYTG7qViIaqIbjiiIhozK%2F5vJntocsddFh3Y5wNYNzeScCk7r4Rnca26YZAj1tTwkCX%2BE3hPyC5p%2FVLUXvDSPwnh1L5SO8lUxfgkGK3aqyP5ZBiEXpi1tUnTo4KVtM3A4Kd7Bnbd4Qwx%2B%2BqfZ9nbldjq&X-Amz-Signature=d5c158186adceae58da8f324d2816ebe00b07b2070d807f3dd78c7497cd42867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WZIN22U%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCDnvk4gnrXXILuUFMwcKVB6ovzHv1BOh2jN73%2BUPwBtQIgHvxfN%2BmZ987djljkgDqfLLplpAAQvx2IRf7QWo2HJ7kq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFDYeAnEvMmJipxCqircA%2F5%2FIViigPzE%2FB2%2B3lPGA3rjIREf9fiwrcjGqj52sxD%2Bi1HSbumJrn%2FE6eN5GEA2Nj%2FReiuuWckZ9TsqAs7tilvoOnhuzLf1%2FLBQF%2F4JDe3wce6T81e%2FCD%2BYcrJpOtAbruWxou7A5C5im3%2BaN3pFU7lsFV8X549jDOPweHPSHk%2F4sT5o1878vqMcr%2F5TtNLkQDz6N2i8Yvagv5rKOFW3gYM5l30ushoVIfp0HvB0jDF435sEqX3anzPDtHMBn31R6EtocNCnLXCA%2F6dYm0OEuAlFYV2OmH4ZUL8NWVuqrLCu%2FQomAq4JpkJVuQHeRhSJHmpmOUeQb%2FQ0akdnUweXHGn5dLZpEyMH2cmWSRlMcridIdTRp9JXvm%2FcAaeoE932x3Rig3wQtSlrsact36jMx2GavaW2czMGwAi9hYfouPMG3Q%2B3XQ6XzWRpPqeD163vnNd01gf8lyUKQryuN%2Fw9Vzx7XT1EkunZJrYLZyiFIJV2QJAs81lLFHr7tP9XFnY2FPV2zZ9Sfvng%2FFiI5wfwtfgYCQqGns77DwdQkvKvLh%2FUs61hOqWtFqegxZjrW%2FAn2GvqMOTpqIrX7AUeo2lzN%2BbgKuRWD7RpA1DFOxIEO%2BLxxRlEuZ77svcOc568MO7Ky8QGOqUB2BjDajsnfGseYJtU2EwmW%2BZdPiFTvP2JLTbqELRZU53qEd4%2FM%2FdaA45tqPYcxE7lPZvZBhufjTe5%2BjELbrMu2lH3sYPD6YVNOSaaVprl1tZHU7rMLirleWBxFtxoQqbKnkMouxmPa7bdQiTyyXzm2ib0Hz9nUv5iOY%2Fbe1ub611qCORLdelbfouH2zvDOax3C0eQCgzNTs%2BbCcEYdhUVrKVseMMV&X-Amz-Signature=864530bdc09a131e1aaa4265c05b2ad9c370cd3e62470ec2ec80025abf7c0d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNG47523%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCs10ZhieB4j20FyUfp1Oc6GwZbJnQs5w2yaJzme8uYyQIgT3q7AhsBOhMTA3uQVI5RmY9R%2FosJo2T%2BbBaMripUwOkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBAZXyaJ6qi4A1S5GSrcAyobJygvyWhSatDFQIyl4MR6%2BxGJf1WwmgE5kuoXZzgAv0%2FqU7TSu%2F%2F%2BTqcdF8j5YcwXY3GiibnRQzOmxPUePGME2klgktQUgoFtWLUUyBQrD%2BoP8Kwz%2FbgZnNHeYjIbE78JQKmllzFDjlZbUa1Q%2B%2Fq4Z6NaFf8PG883jRXVdGDQH8KsfSQxyNFw94VpBjA4W5c%2B4oyyrwMVkOAm0M7FCg6HUVali0aUa7UyjZYDltoc6fErEXBC3%2F7d%2FnK798WY9Y%2BPm6%2FccA7Z%2BSr97o8I2cHQsEjcImGq5E2ZS5hnBQbz%2Fe2iozyK9fthJp0YfBi0jZySwog%2FoBlYsc3kP89cTRhXSpXNWPqT187VU0Ejd2ufL57IH%2BkLH2Gta584vnILxzU0GY2sMwp2JyG6HUmyqoR8sAf%2BfmLnDHQtZslzOR5VR%2F2MzG2t5d2kxC9x3BA1XcmiiCU7244wx6BxaNHjZwVsZF5kvnUtpGr48p5NwspdSQ9WHvAPWI0iKQk5lUiqfId1XC7Ro9TQfiPMvZ0JmDiUn0d18jbIrcs5ftCybSjhwh6ykcqE7OGKyUvK8s3vMPHiVYUz%2Bb6Z7Fm5%2BbpKX5CBrQvxtc7H1WbytyDIOeGQl3VnHJTzK8DwHESSMLvLy8QGOqUBNv2RSJW7ydq90plbAzlaE20MiElk7OP3%2BzlCre2p0083RMOp13ZWNTN79WVo7qv4gSp%2BL3Az0uS%2FCkM1jBba0k3BwjwOgtyMnkeXWV98%2F6iEBf%2BcFzR40oolmbWlk84wsG8Xnewxllf2VWa7A7R8j%2B0t4V8c2JeZrjz%2BskboOd1ftKmn5HnmVIe2D%2FpNP3FLH5HyqpM2nHiVZzFGn1G7r01HdxcW&X-Amz-Signature=4ec1a67628cb23188ad8512dd407e947388e40df29a616ac1e46539b192e0b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNG47523%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCs10ZhieB4j20FyUfp1Oc6GwZbJnQs5w2yaJzme8uYyQIgT3q7AhsBOhMTA3uQVI5RmY9R%2FosJo2T%2BbBaMripUwOkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBAZXyaJ6qi4A1S5GSrcAyobJygvyWhSatDFQIyl4MR6%2BxGJf1WwmgE5kuoXZzgAv0%2FqU7TSu%2F%2F%2BTqcdF8j5YcwXY3GiibnRQzOmxPUePGME2klgktQUgoFtWLUUyBQrD%2BoP8Kwz%2FbgZnNHeYjIbE78JQKmllzFDjlZbUa1Q%2B%2Fq4Z6NaFf8PG883jRXVdGDQH8KsfSQxyNFw94VpBjA4W5c%2B4oyyrwMVkOAm0M7FCg6HUVali0aUa7UyjZYDltoc6fErEXBC3%2F7d%2FnK798WY9Y%2BPm6%2FccA7Z%2BSr97o8I2cHQsEjcImGq5E2ZS5hnBQbz%2Fe2iozyK9fthJp0YfBi0jZySwog%2FoBlYsc3kP89cTRhXSpXNWPqT187VU0Ejd2ufL57IH%2BkLH2Gta584vnILxzU0GY2sMwp2JyG6HUmyqoR8sAf%2BfmLnDHQtZslzOR5VR%2F2MzG2t5d2kxC9x3BA1XcmiiCU7244wx6BxaNHjZwVsZF5kvnUtpGr48p5NwspdSQ9WHvAPWI0iKQk5lUiqfId1XC7Ro9TQfiPMvZ0JmDiUn0d18jbIrcs5ftCybSjhwh6ykcqE7OGKyUvK8s3vMPHiVYUz%2Bb6Z7Fm5%2BbpKX5CBrQvxtc7H1WbytyDIOeGQl3VnHJTzK8DwHESSMLvLy8QGOqUBNv2RSJW7ydq90plbAzlaE20MiElk7OP3%2BzlCre2p0083RMOp13ZWNTN79WVo7qv4gSp%2BL3Az0uS%2FCkM1jBba0k3BwjwOgtyMnkeXWV98%2F6iEBf%2BcFzR40oolmbWlk84wsG8Xnewxllf2VWa7A7R8j%2B0t4V8c2JeZrjz%2BskboOd1ftKmn5HnmVIe2D%2FpNP3FLH5HyqpM2nHiVZzFGn1G7r01HdxcW&X-Amz-Signature=fcb542ecbb207793c67a431940fcd655a399c9cdd3824c38f4e624406a73ad92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNG47523%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCs10ZhieB4j20FyUfp1Oc6GwZbJnQs5w2yaJzme8uYyQIgT3q7AhsBOhMTA3uQVI5RmY9R%2FosJo2T%2BbBaMripUwOkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBAZXyaJ6qi4A1S5GSrcAyobJygvyWhSatDFQIyl4MR6%2BxGJf1WwmgE5kuoXZzgAv0%2FqU7TSu%2F%2F%2BTqcdF8j5YcwXY3GiibnRQzOmxPUePGME2klgktQUgoFtWLUUyBQrD%2BoP8Kwz%2FbgZnNHeYjIbE78JQKmllzFDjlZbUa1Q%2B%2Fq4Z6NaFf8PG883jRXVdGDQH8KsfSQxyNFw94VpBjA4W5c%2B4oyyrwMVkOAm0M7FCg6HUVali0aUa7UyjZYDltoc6fErEXBC3%2F7d%2FnK798WY9Y%2BPm6%2FccA7Z%2BSr97o8I2cHQsEjcImGq5E2ZS5hnBQbz%2Fe2iozyK9fthJp0YfBi0jZySwog%2FoBlYsc3kP89cTRhXSpXNWPqT187VU0Ejd2ufL57IH%2BkLH2Gta584vnILxzU0GY2sMwp2JyG6HUmyqoR8sAf%2BfmLnDHQtZslzOR5VR%2F2MzG2t5d2kxC9x3BA1XcmiiCU7244wx6BxaNHjZwVsZF5kvnUtpGr48p5NwspdSQ9WHvAPWI0iKQk5lUiqfId1XC7Ro9TQfiPMvZ0JmDiUn0d18jbIrcs5ftCybSjhwh6ykcqE7OGKyUvK8s3vMPHiVYUz%2Bb6Z7Fm5%2BbpKX5CBrQvxtc7H1WbytyDIOeGQl3VnHJTzK8DwHESSMLvLy8QGOqUBNv2RSJW7ydq90plbAzlaE20MiElk7OP3%2BzlCre2p0083RMOp13ZWNTN79WVo7qv4gSp%2BL3Az0uS%2FCkM1jBba0k3BwjwOgtyMnkeXWV98%2F6iEBf%2BcFzR40oolmbWlk84wsG8Xnewxllf2VWa7A7R8j%2B0t4V8c2JeZrjz%2BskboOd1ftKmn5HnmVIe2D%2FpNP3FLH5HyqpM2nHiVZzFGn1G7r01HdxcW&X-Amz-Signature=901303d42e3dedfe94e4d24f92d1ea6c2a1c5406583b6aa1704d9a0992891781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNG47523%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCs10ZhieB4j20FyUfp1Oc6GwZbJnQs5w2yaJzme8uYyQIgT3q7AhsBOhMTA3uQVI5RmY9R%2FosJo2T%2BbBaMripUwOkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBAZXyaJ6qi4A1S5GSrcAyobJygvyWhSatDFQIyl4MR6%2BxGJf1WwmgE5kuoXZzgAv0%2FqU7TSu%2F%2F%2BTqcdF8j5YcwXY3GiibnRQzOmxPUePGME2klgktQUgoFtWLUUyBQrD%2BoP8Kwz%2FbgZnNHeYjIbE78JQKmllzFDjlZbUa1Q%2B%2Fq4Z6NaFf8PG883jRXVdGDQH8KsfSQxyNFw94VpBjA4W5c%2B4oyyrwMVkOAm0M7FCg6HUVali0aUa7UyjZYDltoc6fErEXBC3%2F7d%2FnK798WY9Y%2BPm6%2FccA7Z%2BSr97o8I2cHQsEjcImGq5E2ZS5hnBQbz%2Fe2iozyK9fthJp0YfBi0jZySwog%2FoBlYsc3kP89cTRhXSpXNWPqT187VU0Ejd2ufL57IH%2BkLH2Gta584vnILxzU0GY2sMwp2JyG6HUmyqoR8sAf%2BfmLnDHQtZslzOR5VR%2F2MzG2t5d2kxC9x3BA1XcmiiCU7244wx6BxaNHjZwVsZF5kvnUtpGr48p5NwspdSQ9WHvAPWI0iKQk5lUiqfId1XC7Ro9TQfiPMvZ0JmDiUn0d18jbIrcs5ftCybSjhwh6ykcqE7OGKyUvK8s3vMPHiVYUz%2Bb6Z7Fm5%2BbpKX5CBrQvxtc7H1WbytyDIOeGQl3VnHJTzK8DwHESSMLvLy8QGOqUBNv2RSJW7ydq90plbAzlaE20MiElk7OP3%2BzlCre2p0083RMOp13ZWNTN79WVo7qv4gSp%2BL3Az0uS%2FCkM1jBba0k3BwjwOgtyMnkeXWV98%2F6iEBf%2BcFzR40oolmbWlk84wsG8Xnewxllf2VWa7A7R8j%2B0t4V8c2JeZrjz%2BskboOd1ftKmn5HnmVIe2D%2FpNP3FLH5HyqpM2nHiVZzFGn1G7r01HdxcW&X-Amz-Signature=d9f283496bd8d42c0680cb13426e2c5516ccc3a44b4e71343024ff50e8d10673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNG47523%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCs10ZhieB4j20FyUfp1Oc6GwZbJnQs5w2yaJzme8uYyQIgT3q7AhsBOhMTA3uQVI5RmY9R%2FosJo2T%2BbBaMripUwOkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBAZXyaJ6qi4A1S5GSrcAyobJygvyWhSatDFQIyl4MR6%2BxGJf1WwmgE5kuoXZzgAv0%2FqU7TSu%2F%2F%2BTqcdF8j5YcwXY3GiibnRQzOmxPUePGME2klgktQUgoFtWLUUyBQrD%2BoP8Kwz%2FbgZnNHeYjIbE78JQKmllzFDjlZbUa1Q%2B%2Fq4Z6NaFf8PG883jRXVdGDQH8KsfSQxyNFw94VpBjA4W5c%2B4oyyrwMVkOAm0M7FCg6HUVali0aUa7UyjZYDltoc6fErEXBC3%2F7d%2FnK798WY9Y%2BPm6%2FccA7Z%2BSr97o8I2cHQsEjcImGq5E2ZS5hnBQbz%2Fe2iozyK9fthJp0YfBi0jZySwog%2FoBlYsc3kP89cTRhXSpXNWPqT187VU0Ejd2ufL57IH%2BkLH2Gta584vnILxzU0GY2sMwp2JyG6HUmyqoR8sAf%2BfmLnDHQtZslzOR5VR%2F2MzG2t5d2kxC9x3BA1XcmiiCU7244wx6BxaNHjZwVsZF5kvnUtpGr48p5NwspdSQ9WHvAPWI0iKQk5lUiqfId1XC7Ro9TQfiPMvZ0JmDiUn0d18jbIrcs5ftCybSjhwh6ykcqE7OGKyUvK8s3vMPHiVYUz%2Bb6Z7Fm5%2BbpKX5CBrQvxtc7H1WbytyDIOeGQl3VnHJTzK8DwHESSMLvLy8QGOqUBNv2RSJW7ydq90plbAzlaE20MiElk7OP3%2BzlCre2p0083RMOp13ZWNTN79WVo7qv4gSp%2BL3Az0uS%2FCkM1jBba0k3BwjwOgtyMnkeXWV98%2F6iEBf%2BcFzR40oolmbWlk84wsG8Xnewxllf2VWa7A7R8j%2B0t4V8c2JeZrjz%2BskboOd1ftKmn5HnmVIe2D%2FpNP3FLH5HyqpM2nHiVZzFGn1G7r01HdxcW&X-Amz-Signature=418e2519b2c2ed81f247978f537c8d8d78814599ca1de1bc7d7912864211275e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNG47523%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCs10ZhieB4j20FyUfp1Oc6GwZbJnQs5w2yaJzme8uYyQIgT3q7AhsBOhMTA3uQVI5RmY9R%2FosJo2T%2BbBaMripUwOkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBAZXyaJ6qi4A1S5GSrcAyobJygvyWhSatDFQIyl4MR6%2BxGJf1WwmgE5kuoXZzgAv0%2FqU7TSu%2F%2F%2BTqcdF8j5YcwXY3GiibnRQzOmxPUePGME2klgktQUgoFtWLUUyBQrD%2BoP8Kwz%2FbgZnNHeYjIbE78JQKmllzFDjlZbUa1Q%2B%2Fq4Z6NaFf8PG883jRXVdGDQH8KsfSQxyNFw94VpBjA4W5c%2B4oyyrwMVkOAm0M7FCg6HUVali0aUa7UyjZYDltoc6fErEXBC3%2F7d%2FnK798WY9Y%2BPm6%2FccA7Z%2BSr97o8I2cHQsEjcImGq5E2ZS5hnBQbz%2Fe2iozyK9fthJp0YfBi0jZySwog%2FoBlYsc3kP89cTRhXSpXNWPqT187VU0Ejd2ufL57IH%2BkLH2Gta584vnILxzU0GY2sMwp2JyG6HUmyqoR8sAf%2BfmLnDHQtZslzOR5VR%2F2MzG2t5d2kxC9x3BA1XcmiiCU7244wx6BxaNHjZwVsZF5kvnUtpGr48p5NwspdSQ9WHvAPWI0iKQk5lUiqfId1XC7Ro9TQfiPMvZ0JmDiUn0d18jbIrcs5ftCybSjhwh6ykcqE7OGKyUvK8s3vMPHiVYUz%2Bb6Z7Fm5%2BbpKX5CBrQvxtc7H1WbytyDIOeGQl3VnHJTzK8DwHESSMLvLy8QGOqUBNv2RSJW7ydq90plbAzlaE20MiElk7OP3%2BzlCre2p0083RMOp13ZWNTN79WVo7qv4gSp%2BL3Az0uS%2FCkM1jBba0k3BwjwOgtyMnkeXWV98%2F6iEBf%2BcFzR40oolmbWlk84wsG8Xnewxllf2VWa7A7R8j%2B0t4V8c2JeZrjz%2BskboOd1ftKmn5HnmVIe2D%2FpNP3FLH5HyqpM2nHiVZzFGn1G7r01HdxcW&X-Amz-Signature=9f410f719152278635be8103f2c913a7f5dc9c5d9d232f3127f90a79e8e15afb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNG47523%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCs10ZhieB4j20FyUfp1Oc6GwZbJnQs5w2yaJzme8uYyQIgT3q7AhsBOhMTA3uQVI5RmY9R%2FosJo2T%2BbBaMripUwOkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBAZXyaJ6qi4A1S5GSrcAyobJygvyWhSatDFQIyl4MR6%2BxGJf1WwmgE5kuoXZzgAv0%2FqU7TSu%2F%2F%2BTqcdF8j5YcwXY3GiibnRQzOmxPUePGME2klgktQUgoFtWLUUyBQrD%2BoP8Kwz%2FbgZnNHeYjIbE78JQKmllzFDjlZbUa1Q%2B%2Fq4Z6NaFf8PG883jRXVdGDQH8KsfSQxyNFw94VpBjA4W5c%2B4oyyrwMVkOAm0M7FCg6HUVali0aUa7UyjZYDltoc6fErEXBC3%2F7d%2FnK798WY9Y%2BPm6%2FccA7Z%2BSr97o8I2cHQsEjcImGq5E2ZS5hnBQbz%2Fe2iozyK9fthJp0YfBi0jZySwog%2FoBlYsc3kP89cTRhXSpXNWPqT187VU0Ejd2ufL57IH%2BkLH2Gta584vnILxzU0GY2sMwp2JyG6HUmyqoR8sAf%2BfmLnDHQtZslzOR5VR%2F2MzG2t5d2kxC9x3BA1XcmiiCU7244wx6BxaNHjZwVsZF5kvnUtpGr48p5NwspdSQ9WHvAPWI0iKQk5lUiqfId1XC7Ro9TQfiPMvZ0JmDiUn0d18jbIrcs5ftCybSjhwh6ykcqE7OGKyUvK8s3vMPHiVYUz%2Bb6Z7Fm5%2BbpKX5CBrQvxtc7H1WbytyDIOeGQl3VnHJTzK8DwHESSMLvLy8QGOqUBNv2RSJW7ydq90plbAzlaE20MiElk7OP3%2BzlCre2p0083RMOp13ZWNTN79WVo7qv4gSp%2BL3Az0uS%2FCkM1jBba0k3BwjwOgtyMnkeXWV98%2F6iEBf%2BcFzR40oolmbWlk84wsG8Xnewxllf2VWa7A7R8j%2B0t4V8c2JeZrjz%2BskboOd1ftKmn5HnmVIe2D%2FpNP3FLH5HyqpM2nHiVZzFGn1G7r01HdxcW&X-Amz-Signature=455e9094794c93580dd9e2350a59cbf5a645577dea17bcb3526c4e932a0556ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNG47523%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCs10ZhieB4j20FyUfp1Oc6GwZbJnQs5w2yaJzme8uYyQIgT3q7AhsBOhMTA3uQVI5RmY9R%2FosJo2T%2BbBaMripUwOkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBAZXyaJ6qi4A1S5GSrcAyobJygvyWhSatDFQIyl4MR6%2BxGJf1WwmgE5kuoXZzgAv0%2FqU7TSu%2F%2F%2BTqcdF8j5YcwXY3GiibnRQzOmxPUePGME2klgktQUgoFtWLUUyBQrD%2BoP8Kwz%2FbgZnNHeYjIbE78JQKmllzFDjlZbUa1Q%2B%2Fq4Z6NaFf8PG883jRXVdGDQH8KsfSQxyNFw94VpBjA4W5c%2B4oyyrwMVkOAm0M7FCg6HUVali0aUa7UyjZYDltoc6fErEXBC3%2F7d%2FnK798WY9Y%2BPm6%2FccA7Z%2BSr97o8I2cHQsEjcImGq5E2ZS5hnBQbz%2Fe2iozyK9fthJp0YfBi0jZySwog%2FoBlYsc3kP89cTRhXSpXNWPqT187VU0Ejd2ufL57IH%2BkLH2Gta584vnILxzU0GY2sMwp2JyG6HUmyqoR8sAf%2BfmLnDHQtZslzOR5VR%2F2MzG2t5d2kxC9x3BA1XcmiiCU7244wx6BxaNHjZwVsZF5kvnUtpGr48p5NwspdSQ9WHvAPWI0iKQk5lUiqfId1XC7Ro9TQfiPMvZ0JmDiUn0d18jbIrcs5ftCybSjhwh6ykcqE7OGKyUvK8s3vMPHiVYUz%2Bb6Z7Fm5%2BbpKX5CBrQvxtc7H1WbytyDIOeGQl3VnHJTzK8DwHESSMLvLy8QGOqUBNv2RSJW7ydq90plbAzlaE20MiElk7OP3%2BzlCre2p0083RMOp13ZWNTN79WVo7qv4gSp%2BL3Az0uS%2FCkM1jBba0k3BwjwOgtyMnkeXWV98%2F6iEBf%2BcFzR40oolmbWlk84wsG8Xnewxllf2VWa7A7R8j%2B0t4V8c2JeZrjz%2BskboOd1ftKmn5HnmVIe2D%2FpNP3FLH5HyqpM2nHiVZzFGn1G7r01HdxcW&X-Amz-Signature=225ee8abde8f75fe9f9b42343f11fa8df39233a6494e8b8b7f57cb8ca8c35e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNG47523%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCs10ZhieB4j20FyUfp1Oc6GwZbJnQs5w2yaJzme8uYyQIgT3q7AhsBOhMTA3uQVI5RmY9R%2FosJo2T%2BbBaMripUwOkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBAZXyaJ6qi4A1S5GSrcAyobJygvyWhSatDFQIyl4MR6%2BxGJf1WwmgE5kuoXZzgAv0%2FqU7TSu%2F%2F%2BTqcdF8j5YcwXY3GiibnRQzOmxPUePGME2klgktQUgoFtWLUUyBQrD%2BoP8Kwz%2FbgZnNHeYjIbE78JQKmllzFDjlZbUa1Q%2B%2Fq4Z6NaFf8PG883jRXVdGDQH8KsfSQxyNFw94VpBjA4W5c%2B4oyyrwMVkOAm0M7FCg6HUVali0aUa7UyjZYDltoc6fErEXBC3%2F7d%2FnK798WY9Y%2BPm6%2FccA7Z%2BSr97o8I2cHQsEjcImGq5E2ZS5hnBQbz%2Fe2iozyK9fthJp0YfBi0jZySwog%2FoBlYsc3kP89cTRhXSpXNWPqT187VU0Ejd2ufL57IH%2BkLH2Gta584vnILxzU0GY2sMwp2JyG6HUmyqoR8sAf%2BfmLnDHQtZslzOR5VR%2F2MzG2t5d2kxC9x3BA1XcmiiCU7244wx6BxaNHjZwVsZF5kvnUtpGr48p5NwspdSQ9WHvAPWI0iKQk5lUiqfId1XC7Ro9TQfiPMvZ0JmDiUn0d18jbIrcs5ftCybSjhwh6ykcqE7OGKyUvK8s3vMPHiVYUz%2Bb6Z7Fm5%2BbpKX5CBrQvxtc7H1WbytyDIOeGQl3VnHJTzK8DwHESSMLvLy8QGOqUBNv2RSJW7ydq90plbAzlaE20MiElk7OP3%2BzlCre2p0083RMOp13ZWNTN79WVo7qv4gSp%2BL3Az0uS%2FCkM1jBba0k3BwjwOgtyMnkeXWV98%2F6iEBf%2BcFzR40oolmbWlk84wsG8Xnewxllf2VWa7A7R8j%2B0t4V8c2JeZrjz%2BskboOd1ftKmn5HnmVIe2D%2FpNP3FLH5HyqpM2nHiVZzFGn1G7r01HdxcW&X-Amz-Signature=ab58891a1d07524f66c9ed7ee3f1bb62574c9762090789d847db48456faf5a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
