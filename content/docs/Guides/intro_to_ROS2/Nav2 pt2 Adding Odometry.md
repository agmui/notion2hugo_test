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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3LE4OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkVbXNa1Wf7TfqgjbdZfsCTT2SEpSMXNIW8Ax3kzJMQAiB71wA26uboywkOQTO7Uf9mmQkuO9j9lIUjQxSv6UgsHyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMNO5o%2BKp1ly0qWkP2KtwD49sYGYjSrFye5LZHmzqlZf0M6Uk0zy2nZakG2GAvVBd9Dtzv6R81AFkGGYpYsQ8zBCDGA2EssmpxQi1JsuCcXca%2BkXfLPbz434goyMvwN1EacRvOa0vxcubJS%2F423G9qKsex8hTTrVQMOoCoXDZ6e2xphl34IQJTNQq6ZSjda0Ee9yad5dsdgNLDbqQzy7NZA8CCahee%2Bdol1xWOzL5HTSpx%2BMMonicKizTJC2zTXPPWtneQBv3%2BEfiMdhV0GtMzgARfwuJvFTvpztbmmSxm%2FzMB91XwHA4uQCr0EoaBLxcoOY634%2BGAlWyRiO64JfAUVsCojcZIokE%2BsBSA2V%2FJ9i3tDid3gvPGYvczUXTXcCR27E0gzI7MgWxRcbbZ8XHmxYZIx%2B%2FSLi4nFF5qQZO%2FhKAU2Q7Krx5wjtYskAcBja2N6fe8vVdGOL1pLJkolX3C%2FhgSiVl4tUbxI4UxUNcZ4dPkWGQUdxJH6cRR3dIjfaCqg1GC%2B6QTPy2S60sQNisFNaC%2FRpG23oIdRpXHxT7wLpsBkVfyHe%2FywmhbsLC%2BgCs%2B43%2FcVC423iOjgdVcD%2BfNbly5gOUbdg%2BRI4p3qEAxEmpy9XwODIuliESSUhC7OIRRgW6orLROQnpnnGwwmq%2F2xAY6pgEQjrN3Z5uuli9X1wfjnwuJWVEDby31jUQL6RHO1M6pE1shWznbwA3oBUNaATYJiFj4CWCFTgIB9Po18SFE7WKat4kWqQI1KfikELFgHrHr3uSTyqZrrf%2BG6U2uDkDJcvSKxVRypmdzo9iyDYXBqvDjU4AVq2BmZzHfd8xhzsdVBI%2F3weKyWDP2Zo1jpt9qhT1s8EaB88IHXB7sRiMcPML0NNPmHcgo&X-Amz-Signature=1408dd649c97f9bf029576e856de6148ab12e9af62a043eb117b06259a0e0036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3LE4OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkVbXNa1Wf7TfqgjbdZfsCTT2SEpSMXNIW8Ax3kzJMQAiB71wA26uboywkOQTO7Uf9mmQkuO9j9lIUjQxSv6UgsHyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMNO5o%2BKp1ly0qWkP2KtwD49sYGYjSrFye5LZHmzqlZf0M6Uk0zy2nZakG2GAvVBd9Dtzv6R81AFkGGYpYsQ8zBCDGA2EssmpxQi1JsuCcXca%2BkXfLPbz434goyMvwN1EacRvOa0vxcubJS%2F423G9qKsex8hTTrVQMOoCoXDZ6e2xphl34IQJTNQq6ZSjda0Ee9yad5dsdgNLDbqQzy7NZA8CCahee%2Bdol1xWOzL5HTSpx%2BMMonicKizTJC2zTXPPWtneQBv3%2BEfiMdhV0GtMzgARfwuJvFTvpztbmmSxm%2FzMB91XwHA4uQCr0EoaBLxcoOY634%2BGAlWyRiO64JfAUVsCojcZIokE%2BsBSA2V%2FJ9i3tDid3gvPGYvczUXTXcCR27E0gzI7MgWxRcbbZ8XHmxYZIx%2B%2FSLi4nFF5qQZO%2FhKAU2Q7Krx5wjtYskAcBja2N6fe8vVdGOL1pLJkolX3C%2FhgSiVl4tUbxI4UxUNcZ4dPkWGQUdxJH6cRR3dIjfaCqg1GC%2B6QTPy2S60sQNisFNaC%2FRpG23oIdRpXHxT7wLpsBkVfyHe%2FywmhbsLC%2BgCs%2B43%2FcVC423iOjgdVcD%2BfNbly5gOUbdg%2BRI4p3qEAxEmpy9XwODIuliESSUhC7OIRRgW6orLROQnpnnGwwmq%2F2xAY6pgEQjrN3Z5uuli9X1wfjnwuJWVEDby31jUQL6RHO1M6pE1shWznbwA3oBUNaATYJiFj4CWCFTgIB9Po18SFE7WKat4kWqQI1KfikELFgHrHr3uSTyqZrrf%2BG6U2uDkDJcvSKxVRypmdzo9iyDYXBqvDjU4AVq2BmZzHfd8xhzsdVBI%2F3weKyWDP2Zo1jpt9qhT1s8EaB88IHXB7sRiMcPML0NNPmHcgo&X-Amz-Signature=1fb53de689d2212fdbcc50b2ac6173140f5524f8a5496fe43e5997da428bd709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3LE4OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkVbXNa1Wf7TfqgjbdZfsCTT2SEpSMXNIW8Ax3kzJMQAiB71wA26uboywkOQTO7Uf9mmQkuO9j9lIUjQxSv6UgsHyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMNO5o%2BKp1ly0qWkP2KtwD49sYGYjSrFye5LZHmzqlZf0M6Uk0zy2nZakG2GAvVBd9Dtzv6R81AFkGGYpYsQ8zBCDGA2EssmpxQi1JsuCcXca%2BkXfLPbz434goyMvwN1EacRvOa0vxcubJS%2F423G9qKsex8hTTrVQMOoCoXDZ6e2xphl34IQJTNQq6ZSjda0Ee9yad5dsdgNLDbqQzy7NZA8CCahee%2Bdol1xWOzL5HTSpx%2BMMonicKizTJC2zTXPPWtneQBv3%2BEfiMdhV0GtMzgARfwuJvFTvpztbmmSxm%2FzMB91XwHA4uQCr0EoaBLxcoOY634%2BGAlWyRiO64JfAUVsCojcZIokE%2BsBSA2V%2FJ9i3tDid3gvPGYvczUXTXcCR27E0gzI7MgWxRcbbZ8XHmxYZIx%2B%2FSLi4nFF5qQZO%2FhKAU2Q7Krx5wjtYskAcBja2N6fe8vVdGOL1pLJkolX3C%2FhgSiVl4tUbxI4UxUNcZ4dPkWGQUdxJH6cRR3dIjfaCqg1GC%2B6QTPy2S60sQNisFNaC%2FRpG23oIdRpXHxT7wLpsBkVfyHe%2FywmhbsLC%2BgCs%2B43%2FcVC423iOjgdVcD%2BfNbly5gOUbdg%2BRI4p3qEAxEmpy9XwODIuliESSUhC7OIRRgW6orLROQnpnnGwwmq%2F2xAY6pgEQjrN3Z5uuli9X1wfjnwuJWVEDby31jUQL6RHO1M6pE1shWznbwA3oBUNaATYJiFj4CWCFTgIB9Po18SFE7WKat4kWqQI1KfikELFgHrHr3uSTyqZrrf%2BG6U2uDkDJcvSKxVRypmdzo9iyDYXBqvDjU4AVq2BmZzHfd8xhzsdVBI%2F3weKyWDP2Zo1jpt9qhT1s8EaB88IHXB7sRiMcPML0NNPmHcgo&X-Amz-Signature=b2654c8f97f355e43a7f0ae591df6ea3f94b0e9ce4f8f06ff2c83947343dada2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3LE4OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkVbXNa1Wf7TfqgjbdZfsCTT2SEpSMXNIW8Ax3kzJMQAiB71wA26uboywkOQTO7Uf9mmQkuO9j9lIUjQxSv6UgsHyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMNO5o%2BKp1ly0qWkP2KtwD49sYGYjSrFye5LZHmzqlZf0M6Uk0zy2nZakG2GAvVBd9Dtzv6R81AFkGGYpYsQ8zBCDGA2EssmpxQi1JsuCcXca%2BkXfLPbz434goyMvwN1EacRvOa0vxcubJS%2F423G9qKsex8hTTrVQMOoCoXDZ6e2xphl34IQJTNQq6ZSjda0Ee9yad5dsdgNLDbqQzy7NZA8CCahee%2Bdol1xWOzL5HTSpx%2BMMonicKizTJC2zTXPPWtneQBv3%2BEfiMdhV0GtMzgARfwuJvFTvpztbmmSxm%2FzMB91XwHA4uQCr0EoaBLxcoOY634%2BGAlWyRiO64JfAUVsCojcZIokE%2BsBSA2V%2FJ9i3tDid3gvPGYvczUXTXcCR27E0gzI7MgWxRcbbZ8XHmxYZIx%2B%2FSLi4nFF5qQZO%2FhKAU2Q7Krx5wjtYskAcBja2N6fe8vVdGOL1pLJkolX3C%2FhgSiVl4tUbxI4UxUNcZ4dPkWGQUdxJH6cRR3dIjfaCqg1GC%2B6QTPy2S60sQNisFNaC%2FRpG23oIdRpXHxT7wLpsBkVfyHe%2FywmhbsLC%2BgCs%2B43%2FcVC423iOjgdVcD%2BfNbly5gOUbdg%2BRI4p3qEAxEmpy9XwODIuliESSUhC7OIRRgW6orLROQnpnnGwwmq%2F2xAY6pgEQjrN3Z5uuli9X1wfjnwuJWVEDby31jUQL6RHO1M6pE1shWznbwA3oBUNaATYJiFj4CWCFTgIB9Po18SFE7WKat4kWqQI1KfikELFgHrHr3uSTyqZrrf%2BG6U2uDkDJcvSKxVRypmdzo9iyDYXBqvDjU4AVq2BmZzHfd8xhzsdVBI%2F3weKyWDP2Zo1jpt9qhT1s8EaB88IHXB7sRiMcPML0NNPmHcgo&X-Amz-Signature=747dc9cb6d647225323a0b304fb8e5d0f0633ed415b3f46dc766f2be1072a026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3LE4OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkVbXNa1Wf7TfqgjbdZfsCTT2SEpSMXNIW8Ax3kzJMQAiB71wA26uboywkOQTO7Uf9mmQkuO9j9lIUjQxSv6UgsHyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMNO5o%2BKp1ly0qWkP2KtwD49sYGYjSrFye5LZHmzqlZf0M6Uk0zy2nZakG2GAvVBd9Dtzv6R81AFkGGYpYsQ8zBCDGA2EssmpxQi1JsuCcXca%2BkXfLPbz434goyMvwN1EacRvOa0vxcubJS%2F423G9qKsex8hTTrVQMOoCoXDZ6e2xphl34IQJTNQq6ZSjda0Ee9yad5dsdgNLDbqQzy7NZA8CCahee%2Bdol1xWOzL5HTSpx%2BMMonicKizTJC2zTXPPWtneQBv3%2BEfiMdhV0GtMzgARfwuJvFTvpztbmmSxm%2FzMB91XwHA4uQCr0EoaBLxcoOY634%2BGAlWyRiO64JfAUVsCojcZIokE%2BsBSA2V%2FJ9i3tDid3gvPGYvczUXTXcCR27E0gzI7MgWxRcbbZ8XHmxYZIx%2B%2FSLi4nFF5qQZO%2FhKAU2Q7Krx5wjtYskAcBja2N6fe8vVdGOL1pLJkolX3C%2FhgSiVl4tUbxI4UxUNcZ4dPkWGQUdxJH6cRR3dIjfaCqg1GC%2B6QTPy2S60sQNisFNaC%2FRpG23oIdRpXHxT7wLpsBkVfyHe%2FywmhbsLC%2BgCs%2B43%2FcVC423iOjgdVcD%2BfNbly5gOUbdg%2BRI4p3qEAxEmpy9XwODIuliESSUhC7OIRRgW6orLROQnpnnGwwmq%2F2xAY6pgEQjrN3Z5uuli9X1wfjnwuJWVEDby31jUQL6RHO1M6pE1shWznbwA3oBUNaATYJiFj4CWCFTgIB9Po18SFE7WKat4kWqQI1KfikELFgHrHr3uSTyqZrrf%2BG6U2uDkDJcvSKxVRypmdzo9iyDYXBqvDjU4AVq2BmZzHfd8xhzsdVBI%2F3weKyWDP2Zo1jpt9qhT1s8EaB88IHXB7sRiMcPML0NNPmHcgo&X-Amz-Signature=950c58269bac80273d11f26730538c851d1672ddba5a357711dba6333e3a0a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3LE4OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkVbXNa1Wf7TfqgjbdZfsCTT2SEpSMXNIW8Ax3kzJMQAiB71wA26uboywkOQTO7Uf9mmQkuO9j9lIUjQxSv6UgsHyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMNO5o%2BKp1ly0qWkP2KtwD49sYGYjSrFye5LZHmzqlZf0M6Uk0zy2nZakG2GAvVBd9Dtzv6R81AFkGGYpYsQ8zBCDGA2EssmpxQi1JsuCcXca%2BkXfLPbz434goyMvwN1EacRvOa0vxcubJS%2F423G9qKsex8hTTrVQMOoCoXDZ6e2xphl34IQJTNQq6ZSjda0Ee9yad5dsdgNLDbqQzy7NZA8CCahee%2Bdol1xWOzL5HTSpx%2BMMonicKizTJC2zTXPPWtneQBv3%2BEfiMdhV0GtMzgARfwuJvFTvpztbmmSxm%2FzMB91XwHA4uQCr0EoaBLxcoOY634%2BGAlWyRiO64JfAUVsCojcZIokE%2BsBSA2V%2FJ9i3tDid3gvPGYvczUXTXcCR27E0gzI7MgWxRcbbZ8XHmxYZIx%2B%2FSLi4nFF5qQZO%2FhKAU2Q7Krx5wjtYskAcBja2N6fe8vVdGOL1pLJkolX3C%2FhgSiVl4tUbxI4UxUNcZ4dPkWGQUdxJH6cRR3dIjfaCqg1GC%2B6QTPy2S60sQNisFNaC%2FRpG23oIdRpXHxT7wLpsBkVfyHe%2FywmhbsLC%2BgCs%2B43%2FcVC423iOjgdVcD%2BfNbly5gOUbdg%2BRI4p3qEAxEmpy9XwODIuliESSUhC7OIRRgW6orLROQnpnnGwwmq%2F2xAY6pgEQjrN3Z5uuli9X1wfjnwuJWVEDby31jUQL6RHO1M6pE1shWznbwA3oBUNaATYJiFj4CWCFTgIB9Po18SFE7WKat4kWqQI1KfikELFgHrHr3uSTyqZrrf%2BG6U2uDkDJcvSKxVRypmdzo9iyDYXBqvDjU4AVq2BmZzHfd8xhzsdVBI%2F3weKyWDP2Zo1jpt9qhT1s8EaB88IHXB7sRiMcPML0NNPmHcgo&X-Amz-Signature=7fddbbc9f8bdb257499c5e78a65ac4f45fb7027e4cce0b9a015ace3bfacc10e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3LE4OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkVbXNa1Wf7TfqgjbdZfsCTT2SEpSMXNIW8Ax3kzJMQAiB71wA26uboywkOQTO7Uf9mmQkuO9j9lIUjQxSv6UgsHyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMNO5o%2BKp1ly0qWkP2KtwD49sYGYjSrFye5LZHmzqlZf0M6Uk0zy2nZakG2GAvVBd9Dtzv6R81AFkGGYpYsQ8zBCDGA2EssmpxQi1JsuCcXca%2BkXfLPbz434goyMvwN1EacRvOa0vxcubJS%2F423G9qKsex8hTTrVQMOoCoXDZ6e2xphl34IQJTNQq6ZSjda0Ee9yad5dsdgNLDbqQzy7NZA8CCahee%2Bdol1xWOzL5HTSpx%2BMMonicKizTJC2zTXPPWtneQBv3%2BEfiMdhV0GtMzgARfwuJvFTvpztbmmSxm%2FzMB91XwHA4uQCr0EoaBLxcoOY634%2BGAlWyRiO64JfAUVsCojcZIokE%2BsBSA2V%2FJ9i3tDid3gvPGYvczUXTXcCR27E0gzI7MgWxRcbbZ8XHmxYZIx%2B%2FSLi4nFF5qQZO%2FhKAU2Q7Krx5wjtYskAcBja2N6fe8vVdGOL1pLJkolX3C%2FhgSiVl4tUbxI4UxUNcZ4dPkWGQUdxJH6cRR3dIjfaCqg1GC%2B6QTPy2S60sQNisFNaC%2FRpG23oIdRpXHxT7wLpsBkVfyHe%2FywmhbsLC%2BgCs%2B43%2FcVC423iOjgdVcD%2BfNbly5gOUbdg%2BRI4p3qEAxEmpy9XwODIuliESSUhC7OIRRgW6orLROQnpnnGwwmq%2F2xAY6pgEQjrN3Z5uuli9X1wfjnwuJWVEDby31jUQL6RHO1M6pE1shWznbwA3oBUNaATYJiFj4CWCFTgIB9Po18SFE7WKat4kWqQI1KfikELFgHrHr3uSTyqZrrf%2BG6U2uDkDJcvSKxVRypmdzo9iyDYXBqvDjU4AVq2BmZzHfd8xhzsdVBI%2F3weKyWDP2Zo1jpt9qhT1s8EaB88IHXB7sRiMcPML0NNPmHcgo&X-Amz-Signature=13e3b509cf15844ecf99b745278b25435936684704791ba0e724c880d9c47bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3LE4OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkVbXNa1Wf7TfqgjbdZfsCTT2SEpSMXNIW8Ax3kzJMQAiB71wA26uboywkOQTO7Uf9mmQkuO9j9lIUjQxSv6UgsHyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMNO5o%2BKp1ly0qWkP2KtwD49sYGYjSrFye5LZHmzqlZf0M6Uk0zy2nZakG2GAvVBd9Dtzv6R81AFkGGYpYsQ8zBCDGA2EssmpxQi1JsuCcXca%2BkXfLPbz434goyMvwN1EacRvOa0vxcubJS%2F423G9qKsex8hTTrVQMOoCoXDZ6e2xphl34IQJTNQq6ZSjda0Ee9yad5dsdgNLDbqQzy7NZA8CCahee%2Bdol1xWOzL5HTSpx%2BMMonicKizTJC2zTXPPWtneQBv3%2BEfiMdhV0GtMzgARfwuJvFTvpztbmmSxm%2FzMB91XwHA4uQCr0EoaBLxcoOY634%2BGAlWyRiO64JfAUVsCojcZIokE%2BsBSA2V%2FJ9i3tDid3gvPGYvczUXTXcCR27E0gzI7MgWxRcbbZ8XHmxYZIx%2B%2FSLi4nFF5qQZO%2FhKAU2Q7Krx5wjtYskAcBja2N6fe8vVdGOL1pLJkolX3C%2FhgSiVl4tUbxI4UxUNcZ4dPkWGQUdxJH6cRR3dIjfaCqg1GC%2B6QTPy2S60sQNisFNaC%2FRpG23oIdRpXHxT7wLpsBkVfyHe%2FywmhbsLC%2BgCs%2B43%2FcVC423iOjgdVcD%2BfNbly5gOUbdg%2BRI4p3qEAxEmpy9XwODIuliESSUhC7OIRRgW6orLROQnpnnGwwmq%2F2xAY6pgEQjrN3Z5uuli9X1wfjnwuJWVEDby31jUQL6RHO1M6pE1shWznbwA3oBUNaATYJiFj4CWCFTgIB9Po18SFE7WKat4kWqQI1KfikELFgHrHr3uSTyqZrrf%2BG6U2uDkDJcvSKxVRypmdzo9iyDYXBqvDjU4AVq2BmZzHfd8xhzsdVBI%2F3weKyWDP2Zo1jpt9qhT1s8EaB88IHXB7sRiMcPML0NNPmHcgo&X-Amz-Signature=a111df4f3f7c636dc463009dc2e90407d0f1fdfcd38670c4728a82579a3ff4fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3LE4OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkVbXNa1Wf7TfqgjbdZfsCTT2SEpSMXNIW8Ax3kzJMQAiB71wA26uboywkOQTO7Uf9mmQkuO9j9lIUjQxSv6UgsHyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMNO5o%2BKp1ly0qWkP2KtwD49sYGYjSrFye5LZHmzqlZf0M6Uk0zy2nZakG2GAvVBd9Dtzv6R81AFkGGYpYsQ8zBCDGA2EssmpxQi1JsuCcXca%2BkXfLPbz434goyMvwN1EacRvOa0vxcubJS%2F423G9qKsex8hTTrVQMOoCoXDZ6e2xphl34IQJTNQq6ZSjda0Ee9yad5dsdgNLDbqQzy7NZA8CCahee%2Bdol1xWOzL5HTSpx%2BMMonicKizTJC2zTXPPWtneQBv3%2BEfiMdhV0GtMzgARfwuJvFTvpztbmmSxm%2FzMB91XwHA4uQCr0EoaBLxcoOY634%2BGAlWyRiO64JfAUVsCojcZIokE%2BsBSA2V%2FJ9i3tDid3gvPGYvczUXTXcCR27E0gzI7MgWxRcbbZ8XHmxYZIx%2B%2FSLi4nFF5qQZO%2FhKAU2Q7Krx5wjtYskAcBja2N6fe8vVdGOL1pLJkolX3C%2FhgSiVl4tUbxI4UxUNcZ4dPkWGQUdxJH6cRR3dIjfaCqg1GC%2B6QTPy2S60sQNisFNaC%2FRpG23oIdRpXHxT7wLpsBkVfyHe%2FywmhbsLC%2BgCs%2B43%2FcVC423iOjgdVcD%2BfNbly5gOUbdg%2BRI4p3qEAxEmpy9XwODIuliESSUhC7OIRRgW6orLROQnpnnGwwmq%2F2xAY6pgEQjrN3Z5uuli9X1wfjnwuJWVEDby31jUQL6RHO1M6pE1shWznbwA3oBUNaATYJiFj4CWCFTgIB9Po18SFE7WKat4kWqQI1KfikELFgHrHr3uSTyqZrrf%2BG6U2uDkDJcvSKxVRypmdzo9iyDYXBqvDjU4AVq2BmZzHfd8xhzsdVBI%2F3weKyWDP2Zo1jpt9qhT1s8EaB88IHXB7sRiMcPML0NNPmHcgo&X-Amz-Signature=c4b3011f8f2382a760ae4211ff75d8be774d6fcc3919b01e067410679b4292ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3LE4OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkVbXNa1Wf7TfqgjbdZfsCTT2SEpSMXNIW8Ax3kzJMQAiB71wA26uboywkOQTO7Uf9mmQkuO9j9lIUjQxSv6UgsHyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMNO5o%2BKp1ly0qWkP2KtwD49sYGYjSrFye5LZHmzqlZf0M6Uk0zy2nZakG2GAvVBd9Dtzv6R81AFkGGYpYsQ8zBCDGA2EssmpxQi1JsuCcXca%2BkXfLPbz434goyMvwN1EacRvOa0vxcubJS%2F423G9qKsex8hTTrVQMOoCoXDZ6e2xphl34IQJTNQq6ZSjda0Ee9yad5dsdgNLDbqQzy7NZA8CCahee%2Bdol1xWOzL5HTSpx%2BMMonicKizTJC2zTXPPWtneQBv3%2BEfiMdhV0GtMzgARfwuJvFTvpztbmmSxm%2FzMB91XwHA4uQCr0EoaBLxcoOY634%2BGAlWyRiO64JfAUVsCojcZIokE%2BsBSA2V%2FJ9i3tDid3gvPGYvczUXTXcCR27E0gzI7MgWxRcbbZ8XHmxYZIx%2B%2FSLi4nFF5qQZO%2FhKAU2Q7Krx5wjtYskAcBja2N6fe8vVdGOL1pLJkolX3C%2FhgSiVl4tUbxI4UxUNcZ4dPkWGQUdxJH6cRR3dIjfaCqg1GC%2B6QTPy2S60sQNisFNaC%2FRpG23oIdRpXHxT7wLpsBkVfyHe%2FywmhbsLC%2BgCs%2B43%2FcVC423iOjgdVcD%2BfNbly5gOUbdg%2BRI4p3qEAxEmpy9XwODIuliESSUhC7OIRRgW6orLROQnpnnGwwmq%2F2xAY6pgEQjrN3Z5uuli9X1wfjnwuJWVEDby31jUQL6RHO1M6pE1shWznbwA3oBUNaATYJiFj4CWCFTgIB9Po18SFE7WKat4kWqQI1KfikELFgHrHr3uSTyqZrrf%2BG6U2uDkDJcvSKxVRypmdzo9iyDYXBqvDjU4AVq2BmZzHfd8xhzsdVBI%2F3weKyWDP2Zo1jpt9qhT1s8EaB88IHXB7sRiMcPML0NNPmHcgo&X-Amz-Signature=b3c84527787651f0932e6a2821bf4e684942750e94ba38309376258b53fcf830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2HCKB2O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLlk1y%2BdLqjG04kwslW3it7sHdUcH%2FchSmtbMn%2BHVMYgIgLez9im%2FuAOvKzcrbypMFzyyp%2B3qZEZJ0yPwC%2BGwLJeEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDG19jRkCnotebRaj2ircA%2ByzgJbPIHYiDAhjJp%2FHrGZ0oxbyNVE41ASwmqj5czosmcrY6LKhBT%2BvA46enfZ%2BdPOHjNQvgP8wjnSGVm2xCXl3YyhSyLsE2WhoVThteANcdBm7wfD21EjS%2Bf6St2DnHOqjiLLqhA1euSoGYo4fz0%2F%2Fgahg9vkqxmC30DFFbG9IoSNz0qsYP32u08nZVTTe2ldYtdzB6KsYO2LMShBrXo0Dk6KRwzdywWZa8uv5a0wA%2FX2TneoTxO7a3QMCVWEIlHDsUksEuJrxdGguqVqqiQ%2BDnelPwJvPoEuVP%2FY1nDJnWXDdfZTv4prsRf%2BQY4ZozGUdhUECMe25Rj2Y4OYqJWLLXHSEm4LTBl0GOPTT38ps217pK8%2FWt4WA0Hn58I3zdD5Q8glJhkFT4w44z%2F4oEYFiIaEmSmkNkPIS1Oek3EyMsl3nzSmK05HeN9p%2Fph8NzZQlH2kU9rl3ninhi250VoUiBr6BaQAIBQE9%2BjXVtK%2F%2BDmHfwQvGXC%2FeTgHIziCTuzjbD1qsgAk1IGgxxypRofO9%2FiO3uhzeMsxQTxRGjFrO%2FnFMvjnk4hf%2Fc%2BzgQm63%2BiRt68izfWJiJMfv6aXCp40xmzZlIzdnu2BQh3pP%2BHOcoKFxmxxvZxhQXye5MO%2Bv9sQGOqUB3yL89je1u5nYIiH4sjX7HoCb9RyweYTDTXs3UpewtoRG9Or0PSYxo663EuZo8hInUukFMqjOqnLgFVHLSqs%2FR2nWdd%2BOQeJGedX3HI8feq9AR9voRNNf0BES%2BRPbgIUsQGvyVwVh9P%2B8i6AlAvKAf0bYfOlDR%2B1erZ7TRysQzBlAXBHyDhpx4x1Sqvc85WEs%2BAMqQrGeVmKXAleHpbFSpweOzQhR&X-Amz-Signature=d86fa6ed019fde15df67f3c8dc1651118af15eb264095ec4f7a328c62d0b86b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PHM22I%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjwku7rvJ1iGQ0PUBKPgTFZduuVwgPFCg%2Fxy54oobV%2BwIhAIQlMbQtYVBzfv1d2kT1IaDX8UmYJP52%2Fs2N%2FwP6MyLVKv8DCEEQABoMNjM3NDIzMTgzODA1Igw3trh2zRNj9xmrxNwq3AM4eYTZryQUwyFRloKZbnrJTTfpslMSJHVaYf1zRHeqp7E8PsJ33lG8GeWbV3BwEyn2bcu8kWDOiMupzwOfD0%2FP2bxDIhArvuxg51B3GoxHUAzvt%2BrUfgb9pC1bnYBbuGIED0oQEpDhtg8tKLZXTByaUnXNF65nUAwp1yGum0p0vjrgG2bC9XXjGZZ3LQr7wguLZReOy%2BG%2BitH8dyEb%2Fq1ltfymz9mxEOerG3ufb9SjxZkPA7tcD%2BMc09Z7P8HOj%2B6Sh%2Fcb178om%2B%2FS%2FY75NBLzfgaiOSWz%2Fogp3Ipfo8I9xOntfciHQef0NHeGzlTvNr5r5t7yIxzPqzc1qM6S81MjQ9e715619QcJ4ibvWwxeGkDYABNu2jA%2FwWA0B1iYQka9d8tUWeCl%2FYa82IYHcJx9DRqLGBchuRzsDVjXkGajcKInr7uK6NmrQiFESaLYgXlucatAsRRAD%2BbXX36qBwhX9twOc1QBc5qoNZzpxe626vhx7k7f72NBXddWxB4vF7RhDUkwaDYMVGK8MqMiT7WXHrhRCQZ4dTk3bu6IC5RAfcqqLW5NoJse%2FJioW4n%2FO4aV2kPfnRKbUAGYtHfbYYlpJFYjpnTIfvOLeArp2gKMHPA47awNDL9vDeRJbzCOrvbEBjqkAWi1K%2Bt6CEqtGx3lQQUyrura0FEBbW0qZUAfWJLZFr3vW1FkoAQLTkXzbLajpQEPMVMyw6lmyU%2FTmaDPRch8p3jL9YsanrEVZlC42h4S7lOtgP8sWQwWFwsJ8qcB5Yh6oXnbPQOnh1QOAqU95VYmMQyn3nVjYSZPUNV0tr2zhW4Xo9Mu1AzcrvsJ5MP8elwac5nsHkI1UBSb4O5NZrROI8WbCZNw&X-Amz-Signature=f86c36ad752c0686c524b1a11180ca9b8723cff62cfdc3f60ce89e69925523ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PHM22I%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjwku7rvJ1iGQ0PUBKPgTFZduuVwgPFCg%2Fxy54oobV%2BwIhAIQlMbQtYVBzfv1d2kT1IaDX8UmYJP52%2Fs2N%2FwP6MyLVKv8DCEEQABoMNjM3NDIzMTgzODA1Igw3trh2zRNj9xmrxNwq3AM4eYTZryQUwyFRloKZbnrJTTfpslMSJHVaYf1zRHeqp7E8PsJ33lG8GeWbV3BwEyn2bcu8kWDOiMupzwOfD0%2FP2bxDIhArvuxg51B3GoxHUAzvt%2BrUfgb9pC1bnYBbuGIED0oQEpDhtg8tKLZXTByaUnXNF65nUAwp1yGum0p0vjrgG2bC9XXjGZZ3LQr7wguLZReOy%2BG%2BitH8dyEb%2Fq1ltfymz9mxEOerG3ufb9SjxZkPA7tcD%2BMc09Z7P8HOj%2B6Sh%2Fcb178om%2B%2FS%2FY75NBLzfgaiOSWz%2Fogp3Ipfo8I9xOntfciHQef0NHeGzlTvNr5r5t7yIxzPqzc1qM6S81MjQ9e715619QcJ4ibvWwxeGkDYABNu2jA%2FwWA0B1iYQka9d8tUWeCl%2FYa82IYHcJx9DRqLGBchuRzsDVjXkGajcKInr7uK6NmrQiFESaLYgXlucatAsRRAD%2BbXX36qBwhX9twOc1QBc5qoNZzpxe626vhx7k7f72NBXddWxB4vF7RhDUkwaDYMVGK8MqMiT7WXHrhRCQZ4dTk3bu6IC5RAfcqqLW5NoJse%2FJioW4n%2FO4aV2kPfnRKbUAGYtHfbYYlpJFYjpnTIfvOLeArp2gKMHPA47awNDL9vDeRJbzCOrvbEBjqkAWi1K%2Bt6CEqtGx3lQQUyrura0FEBbW0qZUAfWJLZFr3vW1FkoAQLTkXzbLajpQEPMVMyw6lmyU%2FTmaDPRch8p3jL9YsanrEVZlC42h4S7lOtgP8sWQwWFwsJ8qcB5Yh6oXnbPQOnh1QOAqU95VYmMQyn3nVjYSZPUNV0tr2zhW4Xo9Mu1AzcrvsJ5MP8elwac5nsHkI1UBSb4O5NZrROI8WbCZNw&X-Amz-Signature=a2cfeb8ac933dca9663690b1716cc8cfca28281d2bb7ee85c8e4aac120e7ae25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PHM22I%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjwku7rvJ1iGQ0PUBKPgTFZduuVwgPFCg%2Fxy54oobV%2BwIhAIQlMbQtYVBzfv1d2kT1IaDX8UmYJP52%2Fs2N%2FwP6MyLVKv8DCEEQABoMNjM3NDIzMTgzODA1Igw3trh2zRNj9xmrxNwq3AM4eYTZryQUwyFRloKZbnrJTTfpslMSJHVaYf1zRHeqp7E8PsJ33lG8GeWbV3BwEyn2bcu8kWDOiMupzwOfD0%2FP2bxDIhArvuxg51B3GoxHUAzvt%2BrUfgb9pC1bnYBbuGIED0oQEpDhtg8tKLZXTByaUnXNF65nUAwp1yGum0p0vjrgG2bC9XXjGZZ3LQr7wguLZReOy%2BG%2BitH8dyEb%2Fq1ltfymz9mxEOerG3ufb9SjxZkPA7tcD%2BMc09Z7P8HOj%2B6Sh%2Fcb178om%2B%2FS%2FY75NBLzfgaiOSWz%2Fogp3Ipfo8I9xOntfciHQef0NHeGzlTvNr5r5t7yIxzPqzc1qM6S81MjQ9e715619QcJ4ibvWwxeGkDYABNu2jA%2FwWA0B1iYQka9d8tUWeCl%2FYa82IYHcJx9DRqLGBchuRzsDVjXkGajcKInr7uK6NmrQiFESaLYgXlucatAsRRAD%2BbXX36qBwhX9twOc1QBc5qoNZzpxe626vhx7k7f72NBXddWxB4vF7RhDUkwaDYMVGK8MqMiT7WXHrhRCQZ4dTk3bu6IC5RAfcqqLW5NoJse%2FJioW4n%2FO4aV2kPfnRKbUAGYtHfbYYlpJFYjpnTIfvOLeArp2gKMHPA47awNDL9vDeRJbzCOrvbEBjqkAWi1K%2Bt6CEqtGx3lQQUyrura0FEBbW0qZUAfWJLZFr3vW1FkoAQLTkXzbLajpQEPMVMyw6lmyU%2FTmaDPRch8p3jL9YsanrEVZlC42h4S7lOtgP8sWQwWFwsJ8qcB5Yh6oXnbPQOnh1QOAqU95VYmMQyn3nVjYSZPUNV0tr2zhW4Xo9Mu1AzcrvsJ5MP8elwac5nsHkI1UBSb4O5NZrROI8WbCZNw&X-Amz-Signature=e025f085225649fd4adcda1f76a67ae5200291e6e4858ab59c4a937e147d9453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PHM22I%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjwku7rvJ1iGQ0PUBKPgTFZduuVwgPFCg%2Fxy54oobV%2BwIhAIQlMbQtYVBzfv1d2kT1IaDX8UmYJP52%2Fs2N%2FwP6MyLVKv8DCEEQABoMNjM3NDIzMTgzODA1Igw3trh2zRNj9xmrxNwq3AM4eYTZryQUwyFRloKZbnrJTTfpslMSJHVaYf1zRHeqp7E8PsJ33lG8GeWbV3BwEyn2bcu8kWDOiMupzwOfD0%2FP2bxDIhArvuxg51B3GoxHUAzvt%2BrUfgb9pC1bnYBbuGIED0oQEpDhtg8tKLZXTByaUnXNF65nUAwp1yGum0p0vjrgG2bC9XXjGZZ3LQr7wguLZReOy%2BG%2BitH8dyEb%2Fq1ltfymz9mxEOerG3ufb9SjxZkPA7tcD%2BMc09Z7P8HOj%2B6Sh%2Fcb178om%2B%2FS%2FY75NBLzfgaiOSWz%2Fogp3Ipfo8I9xOntfciHQef0NHeGzlTvNr5r5t7yIxzPqzc1qM6S81MjQ9e715619QcJ4ibvWwxeGkDYABNu2jA%2FwWA0B1iYQka9d8tUWeCl%2FYa82IYHcJx9DRqLGBchuRzsDVjXkGajcKInr7uK6NmrQiFESaLYgXlucatAsRRAD%2BbXX36qBwhX9twOc1QBc5qoNZzpxe626vhx7k7f72NBXddWxB4vF7RhDUkwaDYMVGK8MqMiT7WXHrhRCQZ4dTk3bu6IC5RAfcqqLW5NoJse%2FJioW4n%2FO4aV2kPfnRKbUAGYtHfbYYlpJFYjpnTIfvOLeArp2gKMHPA47awNDL9vDeRJbzCOrvbEBjqkAWi1K%2Bt6CEqtGx3lQQUyrura0FEBbW0qZUAfWJLZFr3vW1FkoAQLTkXzbLajpQEPMVMyw6lmyU%2FTmaDPRch8p3jL9YsanrEVZlC42h4S7lOtgP8sWQwWFwsJ8qcB5Yh6oXnbPQOnh1QOAqU95VYmMQyn3nVjYSZPUNV0tr2zhW4Xo9Mu1AzcrvsJ5MP8elwac5nsHkI1UBSb4O5NZrROI8WbCZNw&X-Amz-Signature=c27c0483421aaf25a844a013248d3be29e4d51ed51465c802d81918df54427f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PHM22I%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjwku7rvJ1iGQ0PUBKPgTFZduuVwgPFCg%2Fxy54oobV%2BwIhAIQlMbQtYVBzfv1d2kT1IaDX8UmYJP52%2Fs2N%2FwP6MyLVKv8DCEEQABoMNjM3NDIzMTgzODA1Igw3trh2zRNj9xmrxNwq3AM4eYTZryQUwyFRloKZbnrJTTfpslMSJHVaYf1zRHeqp7E8PsJ33lG8GeWbV3BwEyn2bcu8kWDOiMupzwOfD0%2FP2bxDIhArvuxg51B3GoxHUAzvt%2BrUfgb9pC1bnYBbuGIED0oQEpDhtg8tKLZXTByaUnXNF65nUAwp1yGum0p0vjrgG2bC9XXjGZZ3LQr7wguLZReOy%2BG%2BitH8dyEb%2Fq1ltfymz9mxEOerG3ufb9SjxZkPA7tcD%2BMc09Z7P8HOj%2B6Sh%2Fcb178om%2B%2FS%2FY75NBLzfgaiOSWz%2Fogp3Ipfo8I9xOntfciHQef0NHeGzlTvNr5r5t7yIxzPqzc1qM6S81MjQ9e715619QcJ4ibvWwxeGkDYABNu2jA%2FwWA0B1iYQka9d8tUWeCl%2FYa82IYHcJx9DRqLGBchuRzsDVjXkGajcKInr7uK6NmrQiFESaLYgXlucatAsRRAD%2BbXX36qBwhX9twOc1QBc5qoNZzpxe626vhx7k7f72NBXddWxB4vF7RhDUkwaDYMVGK8MqMiT7WXHrhRCQZ4dTk3bu6IC5RAfcqqLW5NoJse%2FJioW4n%2FO4aV2kPfnRKbUAGYtHfbYYlpJFYjpnTIfvOLeArp2gKMHPA47awNDL9vDeRJbzCOrvbEBjqkAWi1K%2Bt6CEqtGx3lQQUyrura0FEBbW0qZUAfWJLZFr3vW1FkoAQLTkXzbLajpQEPMVMyw6lmyU%2FTmaDPRch8p3jL9YsanrEVZlC42h4S7lOtgP8sWQwWFwsJ8qcB5Yh6oXnbPQOnh1QOAqU95VYmMQyn3nVjYSZPUNV0tr2zhW4Xo9Mu1AzcrvsJ5MP8elwac5nsHkI1UBSb4O5NZrROI8WbCZNw&X-Amz-Signature=e7a74a031271bc8b5b918adfd5d710f99611466921ab1117c51fd0b6aea13468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PHM22I%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjwku7rvJ1iGQ0PUBKPgTFZduuVwgPFCg%2Fxy54oobV%2BwIhAIQlMbQtYVBzfv1d2kT1IaDX8UmYJP52%2Fs2N%2FwP6MyLVKv8DCEEQABoMNjM3NDIzMTgzODA1Igw3trh2zRNj9xmrxNwq3AM4eYTZryQUwyFRloKZbnrJTTfpslMSJHVaYf1zRHeqp7E8PsJ33lG8GeWbV3BwEyn2bcu8kWDOiMupzwOfD0%2FP2bxDIhArvuxg51B3GoxHUAzvt%2BrUfgb9pC1bnYBbuGIED0oQEpDhtg8tKLZXTByaUnXNF65nUAwp1yGum0p0vjrgG2bC9XXjGZZ3LQr7wguLZReOy%2BG%2BitH8dyEb%2Fq1ltfymz9mxEOerG3ufb9SjxZkPA7tcD%2BMc09Z7P8HOj%2B6Sh%2Fcb178om%2B%2FS%2FY75NBLzfgaiOSWz%2Fogp3Ipfo8I9xOntfciHQef0NHeGzlTvNr5r5t7yIxzPqzc1qM6S81MjQ9e715619QcJ4ibvWwxeGkDYABNu2jA%2FwWA0B1iYQka9d8tUWeCl%2FYa82IYHcJx9DRqLGBchuRzsDVjXkGajcKInr7uK6NmrQiFESaLYgXlucatAsRRAD%2BbXX36qBwhX9twOc1QBc5qoNZzpxe626vhx7k7f72NBXddWxB4vF7RhDUkwaDYMVGK8MqMiT7WXHrhRCQZ4dTk3bu6IC5RAfcqqLW5NoJse%2FJioW4n%2FO4aV2kPfnRKbUAGYtHfbYYlpJFYjpnTIfvOLeArp2gKMHPA47awNDL9vDeRJbzCOrvbEBjqkAWi1K%2Bt6CEqtGx3lQQUyrura0FEBbW0qZUAfWJLZFr3vW1FkoAQLTkXzbLajpQEPMVMyw6lmyU%2FTmaDPRch8p3jL9YsanrEVZlC42h4S7lOtgP8sWQwWFwsJ8qcB5Yh6oXnbPQOnh1QOAqU95VYmMQyn3nVjYSZPUNV0tr2zhW4Xo9Mu1AzcrvsJ5MP8elwac5nsHkI1UBSb4O5NZrROI8WbCZNw&X-Amz-Signature=c3743fa5fc847f589ffd724684835298fecbd5b39a8a7165727684c3ca98815b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PHM22I%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjwku7rvJ1iGQ0PUBKPgTFZduuVwgPFCg%2Fxy54oobV%2BwIhAIQlMbQtYVBzfv1d2kT1IaDX8UmYJP52%2Fs2N%2FwP6MyLVKv8DCEEQABoMNjM3NDIzMTgzODA1Igw3trh2zRNj9xmrxNwq3AM4eYTZryQUwyFRloKZbnrJTTfpslMSJHVaYf1zRHeqp7E8PsJ33lG8GeWbV3BwEyn2bcu8kWDOiMupzwOfD0%2FP2bxDIhArvuxg51B3GoxHUAzvt%2BrUfgb9pC1bnYBbuGIED0oQEpDhtg8tKLZXTByaUnXNF65nUAwp1yGum0p0vjrgG2bC9XXjGZZ3LQr7wguLZReOy%2BG%2BitH8dyEb%2Fq1ltfymz9mxEOerG3ufb9SjxZkPA7tcD%2BMc09Z7P8HOj%2B6Sh%2Fcb178om%2B%2FS%2FY75NBLzfgaiOSWz%2Fogp3Ipfo8I9xOntfciHQef0NHeGzlTvNr5r5t7yIxzPqzc1qM6S81MjQ9e715619QcJ4ibvWwxeGkDYABNu2jA%2FwWA0B1iYQka9d8tUWeCl%2FYa82IYHcJx9DRqLGBchuRzsDVjXkGajcKInr7uK6NmrQiFESaLYgXlucatAsRRAD%2BbXX36qBwhX9twOc1QBc5qoNZzpxe626vhx7k7f72NBXddWxB4vF7RhDUkwaDYMVGK8MqMiT7WXHrhRCQZ4dTk3bu6IC5RAfcqqLW5NoJse%2FJioW4n%2FO4aV2kPfnRKbUAGYtHfbYYlpJFYjpnTIfvOLeArp2gKMHPA47awNDL9vDeRJbzCOrvbEBjqkAWi1K%2Bt6CEqtGx3lQQUyrura0FEBbW0qZUAfWJLZFr3vW1FkoAQLTkXzbLajpQEPMVMyw6lmyU%2FTmaDPRch8p3jL9YsanrEVZlC42h4S7lOtgP8sWQwWFwsJ8qcB5Yh6oXnbPQOnh1QOAqU95VYmMQyn3nVjYSZPUNV0tr2zhW4Xo9Mu1AzcrvsJ5MP8elwac5nsHkI1UBSb4O5NZrROI8WbCZNw&X-Amz-Signature=3de994162392a1fa064ece4cf0289d0960bb4baf0d1b20afaa29d647c248c4f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PHM22I%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjwku7rvJ1iGQ0PUBKPgTFZduuVwgPFCg%2Fxy54oobV%2BwIhAIQlMbQtYVBzfv1d2kT1IaDX8UmYJP52%2Fs2N%2FwP6MyLVKv8DCEEQABoMNjM3NDIzMTgzODA1Igw3trh2zRNj9xmrxNwq3AM4eYTZryQUwyFRloKZbnrJTTfpslMSJHVaYf1zRHeqp7E8PsJ33lG8GeWbV3BwEyn2bcu8kWDOiMupzwOfD0%2FP2bxDIhArvuxg51B3GoxHUAzvt%2BrUfgb9pC1bnYBbuGIED0oQEpDhtg8tKLZXTByaUnXNF65nUAwp1yGum0p0vjrgG2bC9XXjGZZ3LQr7wguLZReOy%2BG%2BitH8dyEb%2Fq1ltfymz9mxEOerG3ufb9SjxZkPA7tcD%2BMc09Z7P8HOj%2B6Sh%2Fcb178om%2B%2FS%2FY75NBLzfgaiOSWz%2Fogp3Ipfo8I9xOntfciHQef0NHeGzlTvNr5r5t7yIxzPqzc1qM6S81MjQ9e715619QcJ4ibvWwxeGkDYABNu2jA%2FwWA0B1iYQka9d8tUWeCl%2FYa82IYHcJx9DRqLGBchuRzsDVjXkGajcKInr7uK6NmrQiFESaLYgXlucatAsRRAD%2BbXX36qBwhX9twOc1QBc5qoNZzpxe626vhx7k7f72NBXddWxB4vF7RhDUkwaDYMVGK8MqMiT7WXHrhRCQZ4dTk3bu6IC5RAfcqqLW5NoJse%2FJioW4n%2FO4aV2kPfnRKbUAGYtHfbYYlpJFYjpnTIfvOLeArp2gKMHPA47awNDL9vDeRJbzCOrvbEBjqkAWi1K%2Bt6CEqtGx3lQQUyrura0FEBbW0qZUAfWJLZFr3vW1FkoAQLTkXzbLajpQEPMVMyw6lmyU%2FTmaDPRch8p3jL9YsanrEVZlC42h4S7lOtgP8sWQwWFwsJ8qcB5Yh6oXnbPQOnh1QOAqU95VYmMQyn3nVjYSZPUNV0tr2zhW4Xo9Mu1AzcrvsJ5MP8elwac5nsHkI1UBSb4O5NZrROI8WbCZNw&X-Amz-Signature=8e14650afa28aa68798c55f5f704fb07e5037023bd62227088fb29a0df947798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PHM22I%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjwku7rvJ1iGQ0PUBKPgTFZduuVwgPFCg%2Fxy54oobV%2BwIhAIQlMbQtYVBzfv1d2kT1IaDX8UmYJP52%2Fs2N%2FwP6MyLVKv8DCEEQABoMNjM3NDIzMTgzODA1Igw3trh2zRNj9xmrxNwq3AM4eYTZryQUwyFRloKZbnrJTTfpslMSJHVaYf1zRHeqp7E8PsJ33lG8GeWbV3BwEyn2bcu8kWDOiMupzwOfD0%2FP2bxDIhArvuxg51B3GoxHUAzvt%2BrUfgb9pC1bnYBbuGIED0oQEpDhtg8tKLZXTByaUnXNF65nUAwp1yGum0p0vjrgG2bC9XXjGZZ3LQr7wguLZReOy%2BG%2BitH8dyEb%2Fq1ltfymz9mxEOerG3ufb9SjxZkPA7tcD%2BMc09Z7P8HOj%2B6Sh%2Fcb178om%2B%2FS%2FY75NBLzfgaiOSWz%2Fogp3Ipfo8I9xOntfciHQef0NHeGzlTvNr5r5t7yIxzPqzc1qM6S81MjQ9e715619QcJ4ibvWwxeGkDYABNu2jA%2FwWA0B1iYQka9d8tUWeCl%2FYa82IYHcJx9DRqLGBchuRzsDVjXkGajcKInr7uK6NmrQiFESaLYgXlucatAsRRAD%2BbXX36qBwhX9twOc1QBc5qoNZzpxe626vhx7k7f72NBXddWxB4vF7RhDUkwaDYMVGK8MqMiT7WXHrhRCQZ4dTk3bu6IC5RAfcqqLW5NoJse%2FJioW4n%2FO4aV2kPfnRKbUAGYtHfbYYlpJFYjpnTIfvOLeArp2gKMHPA47awNDL9vDeRJbzCOrvbEBjqkAWi1K%2Bt6CEqtGx3lQQUyrura0FEBbW0qZUAfWJLZFr3vW1FkoAQLTkXzbLajpQEPMVMyw6lmyU%2FTmaDPRch8p3jL9YsanrEVZlC42h4S7lOtgP8sWQwWFwsJ8qcB5Yh6oXnbPQOnh1QOAqU95VYmMQyn3nVjYSZPUNV0tr2zhW4Xo9Mu1AzcrvsJ5MP8elwac5nsHkI1UBSb4O5NZrROI8WbCZNw&X-Amz-Signature=6af693af215ff883063358b41d9ccde4b96b8bbfd603dc5b87f52ca496865563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
