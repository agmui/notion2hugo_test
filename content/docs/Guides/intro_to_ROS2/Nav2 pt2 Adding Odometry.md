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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQSNWNQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIB%2BBAQqvuriROqgYW5%2BKAdCKTRIuQ6ysYHfLCXhutR4iAiANGGGsEGfs3LuRDrc4ZyhwTl78arbxQvBMgie7ZO00HyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpKk028bRLtQEYLcKtwD0f2TbsM7rkljVE1GWIEi8KCevRmhdEPdpgehyhu8nhc3q6zgAbFrBpQwqELgu5zRaIIUpo58%2FWyZHV3sN0KX0Xn0evb%2FXPVO057krfBe8wMuVj7TLMOfFkc8BUUuAVyxDmGiQJj6J%2FN2h2nuwB1sxxzgONaAK3wh6EyLfq6rBQ3faEPARcWPa8pwW%2BL97%2BOOXCauMt8O46E9g0iLwPnkFfFQagp7CpykC9UNuLxdK9PeYi9NQVR6nwVw4yQjDWaiuuo5LlvxPvxbfT8o21JeE%2BbWcU%2BqVBcFSKW3vL3ULe9N2ihNlYphns0E2q%2BLWLDYOnOlYwG1YmICz7OzY7%2BHhYINNJdpDxYrnPu5Kqlpt2Y%2FtnMw8VhPzDzRyO72tKWzdN1ygs%2Bhnn7o49mj3vs9ZcMGD%2BA7Fp2bhl%2B2KythfZX9HzR79mV2iDeyXBe1GRcN%2F99bxpZsGD7bFQ%2FbLqvDrLdc6ELyuILYNwvmv%2FIjRoGf55V%2FH33OfPb2wrhn6%2F6KRWttyAx%2BH16N20D6vag2ETRnMpPcYdkVXTjDnqemQxUVdIpcFnLes1cOMewL%2BKxamUpUfiZq8hC02iOTN%2BGuDsDDS72Imiast6XkIJwfctYPFFaHpoMTX3JbG8Ywt5ObxAY6pgGuxWyHufCJTzEwpUt5POUWnVVNRC1FFspYw1x9afhW7KZpt04iucWUQovD96OAwZWenH9zvm2BwuJs%2F7M0l50NODhxkApgKVRUyYytqt5ivDx2jV3cVfjMtd6jJBv4yEla6dZvWCGiJVDFurUPrgrWar8f7uUUjJ9xYY1xmbAV9xum6insThqmxvDF7y%2Bdt8nDgaBfEOTqvgwdxY4Sog1KRAoJWf7C&X-Amz-Signature=e04b32a11a60161d59b824bc931d9da88d0ef383c11192d124f176dc6794781f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQSNWNQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIB%2BBAQqvuriROqgYW5%2BKAdCKTRIuQ6ysYHfLCXhutR4iAiANGGGsEGfs3LuRDrc4ZyhwTl78arbxQvBMgie7ZO00HyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpKk028bRLtQEYLcKtwD0f2TbsM7rkljVE1GWIEi8KCevRmhdEPdpgehyhu8nhc3q6zgAbFrBpQwqELgu5zRaIIUpo58%2FWyZHV3sN0KX0Xn0evb%2FXPVO057krfBe8wMuVj7TLMOfFkc8BUUuAVyxDmGiQJj6J%2FN2h2nuwB1sxxzgONaAK3wh6EyLfq6rBQ3faEPARcWPa8pwW%2BL97%2BOOXCauMt8O46E9g0iLwPnkFfFQagp7CpykC9UNuLxdK9PeYi9NQVR6nwVw4yQjDWaiuuo5LlvxPvxbfT8o21JeE%2BbWcU%2BqVBcFSKW3vL3ULe9N2ihNlYphns0E2q%2BLWLDYOnOlYwG1YmICz7OzY7%2BHhYINNJdpDxYrnPu5Kqlpt2Y%2FtnMw8VhPzDzRyO72tKWzdN1ygs%2Bhnn7o49mj3vs9ZcMGD%2BA7Fp2bhl%2B2KythfZX9HzR79mV2iDeyXBe1GRcN%2F99bxpZsGD7bFQ%2FbLqvDrLdc6ELyuILYNwvmv%2FIjRoGf55V%2FH33OfPb2wrhn6%2F6KRWttyAx%2BH16N20D6vag2ETRnMpPcYdkVXTjDnqemQxUVdIpcFnLes1cOMewL%2BKxamUpUfiZq8hC02iOTN%2BGuDsDDS72Imiast6XkIJwfctYPFFaHpoMTX3JbG8Ywt5ObxAY6pgGuxWyHufCJTzEwpUt5POUWnVVNRC1FFspYw1x9afhW7KZpt04iucWUQovD96OAwZWenH9zvm2BwuJs%2F7M0l50NODhxkApgKVRUyYytqt5ivDx2jV3cVfjMtd6jJBv4yEla6dZvWCGiJVDFurUPrgrWar8f7uUUjJ9xYY1xmbAV9xum6insThqmxvDF7y%2Bdt8nDgaBfEOTqvgwdxY4Sog1KRAoJWf7C&X-Amz-Signature=6d30caf4d59d7bde3d232c80e65d96b9f8e93edc851e0b467e98e621e49790d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQSNWNQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIB%2BBAQqvuriROqgYW5%2BKAdCKTRIuQ6ysYHfLCXhutR4iAiANGGGsEGfs3LuRDrc4ZyhwTl78arbxQvBMgie7ZO00HyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpKk028bRLtQEYLcKtwD0f2TbsM7rkljVE1GWIEi8KCevRmhdEPdpgehyhu8nhc3q6zgAbFrBpQwqELgu5zRaIIUpo58%2FWyZHV3sN0KX0Xn0evb%2FXPVO057krfBe8wMuVj7TLMOfFkc8BUUuAVyxDmGiQJj6J%2FN2h2nuwB1sxxzgONaAK3wh6EyLfq6rBQ3faEPARcWPa8pwW%2BL97%2BOOXCauMt8O46E9g0iLwPnkFfFQagp7CpykC9UNuLxdK9PeYi9NQVR6nwVw4yQjDWaiuuo5LlvxPvxbfT8o21JeE%2BbWcU%2BqVBcFSKW3vL3ULe9N2ihNlYphns0E2q%2BLWLDYOnOlYwG1YmICz7OzY7%2BHhYINNJdpDxYrnPu5Kqlpt2Y%2FtnMw8VhPzDzRyO72tKWzdN1ygs%2Bhnn7o49mj3vs9ZcMGD%2BA7Fp2bhl%2B2KythfZX9HzR79mV2iDeyXBe1GRcN%2F99bxpZsGD7bFQ%2FbLqvDrLdc6ELyuILYNwvmv%2FIjRoGf55V%2FH33OfPb2wrhn6%2F6KRWttyAx%2BH16N20D6vag2ETRnMpPcYdkVXTjDnqemQxUVdIpcFnLes1cOMewL%2BKxamUpUfiZq8hC02iOTN%2BGuDsDDS72Imiast6XkIJwfctYPFFaHpoMTX3JbG8Ywt5ObxAY6pgGuxWyHufCJTzEwpUt5POUWnVVNRC1FFspYw1x9afhW7KZpt04iucWUQovD96OAwZWenH9zvm2BwuJs%2F7M0l50NODhxkApgKVRUyYytqt5ivDx2jV3cVfjMtd6jJBv4yEla6dZvWCGiJVDFurUPrgrWar8f7uUUjJ9xYY1xmbAV9xum6insThqmxvDF7y%2Bdt8nDgaBfEOTqvgwdxY4Sog1KRAoJWf7C&X-Amz-Signature=a9a99fd67d4accc8319f3253ae49464d0352d959f4059a1ae817e6d74cbfdf3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQSNWNQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIB%2BBAQqvuriROqgYW5%2BKAdCKTRIuQ6ysYHfLCXhutR4iAiANGGGsEGfs3LuRDrc4ZyhwTl78arbxQvBMgie7ZO00HyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpKk028bRLtQEYLcKtwD0f2TbsM7rkljVE1GWIEi8KCevRmhdEPdpgehyhu8nhc3q6zgAbFrBpQwqELgu5zRaIIUpo58%2FWyZHV3sN0KX0Xn0evb%2FXPVO057krfBe8wMuVj7TLMOfFkc8BUUuAVyxDmGiQJj6J%2FN2h2nuwB1sxxzgONaAK3wh6EyLfq6rBQ3faEPARcWPa8pwW%2BL97%2BOOXCauMt8O46E9g0iLwPnkFfFQagp7CpykC9UNuLxdK9PeYi9NQVR6nwVw4yQjDWaiuuo5LlvxPvxbfT8o21JeE%2BbWcU%2BqVBcFSKW3vL3ULe9N2ihNlYphns0E2q%2BLWLDYOnOlYwG1YmICz7OzY7%2BHhYINNJdpDxYrnPu5Kqlpt2Y%2FtnMw8VhPzDzRyO72tKWzdN1ygs%2Bhnn7o49mj3vs9ZcMGD%2BA7Fp2bhl%2B2KythfZX9HzR79mV2iDeyXBe1GRcN%2F99bxpZsGD7bFQ%2FbLqvDrLdc6ELyuILYNwvmv%2FIjRoGf55V%2FH33OfPb2wrhn6%2F6KRWttyAx%2BH16N20D6vag2ETRnMpPcYdkVXTjDnqemQxUVdIpcFnLes1cOMewL%2BKxamUpUfiZq8hC02iOTN%2BGuDsDDS72Imiast6XkIJwfctYPFFaHpoMTX3JbG8Ywt5ObxAY6pgGuxWyHufCJTzEwpUt5POUWnVVNRC1FFspYw1x9afhW7KZpt04iucWUQovD96OAwZWenH9zvm2BwuJs%2F7M0l50NODhxkApgKVRUyYytqt5ivDx2jV3cVfjMtd6jJBv4yEla6dZvWCGiJVDFurUPrgrWar8f7uUUjJ9xYY1xmbAV9xum6insThqmxvDF7y%2Bdt8nDgaBfEOTqvgwdxY4Sog1KRAoJWf7C&X-Amz-Signature=41bed4e880b696226916ad2b2327bcb14c586e3c14052faadd91af1467c5b3c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQSNWNQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIB%2BBAQqvuriROqgYW5%2BKAdCKTRIuQ6ysYHfLCXhutR4iAiANGGGsEGfs3LuRDrc4ZyhwTl78arbxQvBMgie7ZO00HyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpKk028bRLtQEYLcKtwD0f2TbsM7rkljVE1GWIEi8KCevRmhdEPdpgehyhu8nhc3q6zgAbFrBpQwqELgu5zRaIIUpo58%2FWyZHV3sN0KX0Xn0evb%2FXPVO057krfBe8wMuVj7TLMOfFkc8BUUuAVyxDmGiQJj6J%2FN2h2nuwB1sxxzgONaAK3wh6EyLfq6rBQ3faEPARcWPa8pwW%2BL97%2BOOXCauMt8O46E9g0iLwPnkFfFQagp7CpykC9UNuLxdK9PeYi9NQVR6nwVw4yQjDWaiuuo5LlvxPvxbfT8o21JeE%2BbWcU%2BqVBcFSKW3vL3ULe9N2ihNlYphns0E2q%2BLWLDYOnOlYwG1YmICz7OzY7%2BHhYINNJdpDxYrnPu5Kqlpt2Y%2FtnMw8VhPzDzRyO72tKWzdN1ygs%2Bhnn7o49mj3vs9ZcMGD%2BA7Fp2bhl%2B2KythfZX9HzR79mV2iDeyXBe1GRcN%2F99bxpZsGD7bFQ%2FbLqvDrLdc6ELyuILYNwvmv%2FIjRoGf55V%2FH33OfPb2wrhn6%2F6KRWttyAx%2BH16N20D6vag2ETRnMpPcYdkVXTjDnqemQxUVdIpcFnLes1cOMewL%2BKxamUpUfiZq8hC02iOTN%2BGuDsDDS72Imiast6XkIJwfctYPFFaHpoMTX3JbG8Ywt5ObxAY6pgGuxWyHufCJTzEwpUt5POUWnVVNRC1FFspYw1x9afhW7KZpt04iucWUQovD96OAwZWenH9zvm2BwuJs%2F7M0l50NODhxkApgKVRUyYytqt5ivDx2jV3cVfjMtd6jJBv4yEla6dZvWCGiJVDFurUPrgrWar8f7uUUjJ9xYY1xmbAV9xum6insThqmxvDF7y%2Bdt8nDgaBfEOTqvgwdxY4Sog1KRAoJWf7C&X-Amz-Signature=891fb75fa5f7fbae786e5f4227bc90e8fed83feb6317ebcf3781024b5179f437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQSNWNQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIB%2BBAQqvuriROqgYW5%2BKAdCKTRIuQ6ysYHfLCXhutR4iAiANGGGsEGfs3LuRDrc4ZyhwTl78arbxQvBMgie7ZO00HyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpKk028bRLtQEYLcKtwD0f2TbsM7rkljVE1GWIEi8KCevRmhdEPdpgehyhu8nhc3q6zgAbFrBpQwqELgu5zRaIIUpo58%2FWyZHV3sN0KX0Xn0evb%2FXPVO057krfBe8wMuVj7TLMOfFkc8BUUuAVyxDmGiQJj6J%2FN2h2nuwB1sxxzgONaAK3wh6EyLfq6rBQ3faEPARcWPa8pwW%2BL97%2BOOXCauMt8O46E9g0iLwPnkFfFQagp7CpykC9UNuLxdK9PeYi9NQVR6nwVw4yQjDWaiuuo5LlvxPvxbfT8o21JeE%2BbWcU%2BqVBcFSKW3vL3ULe9N2ihNlYphns0E2q%2BLWLDYOnOlYwG1YmICz7OzY7%2BHhYINNJdpDxYrnPu5Kqlpt2Y%2FtnMw8VhPzDzRyO72tKWzdN1ygs%2Bhnn7o49mj3vs9ZcMGD%2BA7Fp2bhl%2B2KythfZX9HzR79mV2iDeyXBe1GRcN%2F99bxpZsGD7bFQ%2FbLqvDrLdc6ELyuILYNwvmv%2FIjRoGf55V%2FH33OfPb2wrhn6%2F6KRWttyAx%2BH16N20D6vag2ETRnMpPcYdkVXTjDnqemQxUVdIpcFnLes1cOMewL%2BKxamUpUfiZq8hC02iOTN%2BGuDsDDS72Imiast6XkIJwfctYPFFaHpoMTX3JbG8Ywt5ObxAY6pgGuxWyHufCJTzEwpUt5POUWnVVNRC1FFspYw1x9afhW7KZpt04iucWUQovD96OAwZWenH9zvm2BwuJs%2F7M0l50NODhxkApgKVRUyYytqt5ivDx2jV3cVfjMtd6jJBv4yEla6dZvWCGiJVDFurUPrgrWar8f7uUUjJ9xYY1xmbAV9xum6insThqmxvDF7y%2Bdt8nDgaBfEOTqvgwdxY4Sog1KRAoJWf7C&X-Amz-Signature=8a2d942b89bef24e9ccdad7bed3b33763499b7ba52dcab80030c5c4f186e253b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQSNWNQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIB%2BBAQqvuriROqgYW5%2BKAdCKTRIuQ6ysYHfLCXhutR4iAiANGGGsEGfs3LuRDrc4ZyhwTl78arbxQvBMgie7ZO00HyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpKk028bRLtQEYLcKtwD0f2TbsM7rkljVE1GWIEi8KCevRmhdEPdpgehyhu8nhc3q6zgAbFrBpQwqELgu5zRaIIUpo58%2FWyZHV3sN0KX0Xn0evb%2FXPVO057krfBe8wMuVj7TLMOfFkc8BUUuAVyxDmGiQJj6J%2FN2h2nuwB1sxxzgONaAK3wh6EyLfq6rBQ3faEPARcWPa8pwW%2BL97%2BOOXCauMt8O46E9g0iLwPnkFfFQagp7CpykC9UNuLxdK9PeYi9NQVR6nwVw4yQjDWaiuuo5LlvxPvxbfT8o21JeE%2BbWcU%2BqVBcFSKW3vL3ULe9N2ihNlYphns0E2q%2BLWLDYOnOlYwG1YmICz7OzY7%2BHhYINNJdpDxYrnPu5Kqlpt2Y%2FtnMw8VhPzDzRyO72tKWzdN1ygs%2Bhnn7o49mj3vs9ZcMGD%2BA7Fp2bhl%2B2KythfZX9HzR79mV2iDeyXBe1GRcN%2F99bxpZsGD7bFQ%2FbLqvDrLdc6ELyuILYNwvmv%2FIjRoGf55V%2FH33OfPb2wrhn6%2F6KRWttyAx%2BH16N20D6vag2ETRnMpPcYdkVXTjDnqemQxUVdIpcFnLes1cOMewL%2BKxamUpUfiZq8hC02iOTN%2BGuDsDDS72Imiast6XkIJwfctYPFFaHpoMTX3JbG8Ywt5ObxAY6pgGuxWyHufCJTzEwpUt5POUWnVVNRC1FFspYw1x9afhW7KZpt04iucWUQovD96OAwZWenH9zvm2BwuJs%2F7M0l50NODhxkApgKVRUyYytqt5ivDx2jV3cVfjMtd6jJBv4yEla6dZvWCGiJVDFurUPrgrWar8f7uUUjJ9xYY1xmbAV9xum6insThqmxvDF7y%2Bdt8nDgaBfEOTqvgwdxY4Sog1KRAoJWf7C&X-Amz-Signature=ef3b52d188dba596b08e92d6605788efdea814c8a74ec4e7b9558a62f336b4ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQSNWNQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIB%2BBAQqvuriROqgYW5%2BKAdCKTRIuQ6ysYHfLCXhutR4iAiANGGGsEGfs3LuRDrc4ZyhwTl78arbxQvBMgie7ZO00HyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpKk028bRLtQEYLcKtwD0f2TbsM7rkljVE1GWIEi8KCevRmhdEPdpgehyhu8nhc3q6zgAbFrBpQwqELgu5zRaIIUpo58%2FWyZHV3sN0KX0Xn0evb%2FXPVO057krfBe8wMuVj7TLMOfFkc8BUUuAVyxDmGiQJj6J%2FN2h2nuwB1sxxzgONaAK3wh6EyLfq6rBQ3faEPARcWPa8pwW%2BL97%2BOOXCauMt8O46E9g0iLwPnkFfFQagp7CpykC9UNuLxdK9PeYi9NQVR6nwVw4yQjDWaiuuo5LlvxPvxbfT8o21JeE%2BbWcU%2BqVBcFSKW3vL3ULe9N2ihNlYphns0E2q%2BLWLDYOnOlYwG1YmICz7OzY7%2BHhYINNJdpDxYrnPu5Kqlpt2Y%2FtnMw8VhPzDzRyO72tKWzdN1ygs%2Bhnn7o49mj3vs9ZcMGD%2BA7Fp2bhl%2B2KythfZX9HzR79mV2iDeyXBe1GRcN%2F99bxpZsGD7bFQ%2FbLqvDrLdc6ELyuILYNwvmv%2FIjRoGf55V%2FH33OfPb2wrhn6%2F6KRWttyAx%2BH16N20D6vag2ETRnMpPcYdkVXTjDnqemQxUVdIpcFnLes1cOMewL%2BKxamUpUfiZq8hC02iOTN%2BGuDsDDS72Imiast6XkIJwfctYPFFaHpoMTX3JbG8Ywt5ObxAY6pgGuxWyHufCJTzEwpUt5POUWnVVNRC1FFspYw1x9afhW7KZpt04iucWUQovD96OAwZWenH9zvm2BwuJs%2F7M0l50NODhxkApgKVRUyYytqt5ivDx2jV3cVfjMtd6jJBv4yEla6dZvWCGiJVDFurUPrgrWar8f7uUUjJ9xYY1xmbAV9xum6insThqmxvDF7y%2Bdt8nDgaBfEOTqvgwdxY4Sog1KRAoJWf7C&X-Amz-Signature=4fae6fa80d7168d2a0578617e958ec6cae6302f0462b28ee83041607bd78ef8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQSNWNQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIB%2BBAQqvuriROqgYW5%2BKAdCKTRIuQ6ysYHfLCXhutR4iAiANGGGsEGfs3LuRDrc4ZyhwTl78arbxQvBMgie7ZO00HyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpKk028bRLtQEYLcKtwD0f2TbsM7rkljVE1GWIEi8KCevRmhdEPdpgehyhu8nhc3q6zgAbFrBpQwqELgu5zRaIIUpo58%2FWyZHV3sN0KX0Xn0evb%2FXPVO057krfBe8wMuVj7TLMOfFkc8BUUuAVyxDmGiQJj6J%2FN2h2nuwB1sxxzgONaAK3wh6EyLfq6rBQ3faEPARcWPa8pwW%2BL97%2BOOXCauMt8O46E9g0iLwPnkFfFQagp7CpykC9UNuLxdK9PeYi9NQVR6nwVw4yQjDWaiuuo5LlvxPvxbfT8o21JeE%2BbWcU%2BqVBcFSKW3vL3ULe9N2ihNlYphns0E2q%2BLWLDYOnOlYwG1YmICz7OzY7%2BHhYINNJdpDxYrnPu5Kqlpt2Y%2FtnMw8VhPzDzRyO72tKWzdN1ygs%2Bhnn7o49mj3vs9ZcMGD%2BA7Fp2bhl%2B2KythfZX9HzR79mV2iDeyXBe1GRcN%2F99bxpZsGD7bFQ%2FbLqvDrLdc6ELyuILYNwvmv%2FIjRoGf55V%2FH33OfPb2wrhn6%2F6KRWttyAx%2BH16N20D6vag2ETRnMpPcYdkVXTjDnqemQxUVdIpcFnLes1cOMewL%2BKxamUpUfiZq8hC02iOTN%2BGuDsDDS72Imiast6XkIJwfctYPFFaHpoMTX3JbG8Ywt5ObxAY6pgGuxWyHufCJTzEwpUt5POUWnVVNRC1FFspYw1x9afhW7KZpt04iucWUQovD96OAwZWenH9zvm2BwuJs%2F7M0l50NODhxkApgKVRUyYytqt5ivDx2jV3cVfjMtd6jJBv4yEla6dZvWCGiJVDFurUPrgrWar8f7uUUjJ9xYY1xmbAV9xum6insThqmxvDF7y%2Bdt8nDgaBfEOTqvgwdxY4Sog1KRAoJWf7C&X-Amz-Signature=1e596827984a7f0b5e54be60eb944c429d6e496f7eb13b296d49a85081379e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JPORNF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIH2VmX2zkJ%2BLQIU8xwY4iPvO%2FQ%2B0BqRtADd6S1VtDVDyAiEAosNVjHcU8NE7UEdHBLtWWIrR0DcRvhYvmpaeuhp2tAMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzC6TXvlHmj6roBNircA%2FHZO2iG9tTMt0STlFYm8erJIFnU26hcM0eRJHkm8MYYjM2PAupEa9oWrgRSvcZTl2tVq3wi4rg7gehhdsZ9Kk6rtpLoRDL49Pd6hyFo5HaAbjcY1VzUrXAFUiQRmErP2cDSJIfqxew5igQ%2Bqig%2FZCPS1qeGOZwcFQTQcOskgoU9MfRktaujHnmm2PoSFLF%2Bm1vAJWqmMpQIAnQgKQ1rvGNngKr%2FYWczd5Izvs%2B347219Lp1gvJnTctxNbUaK6fRYutoQkE0gWM%2FhUZTOJ3eCrl9hR5phSXh0GLIdCUb%2FlDmFm%2Fh4eyCpmJFf9Tcn6FCjLLCBBgzqYuOaS0XCkF7ZB9kzMYC20ot3caQjGabH4egExJoMf6%2BRnNOol4unM%2BjdYOyjBZsbkddBIDFEM1rwPihVsRaYlyRE57%2BxPaJiZvH6ddl6wVIRLUXDchpii5F9Oi%2FKcq0IuWOTiU2%2FID%2F92SA7f%2B5pnJJ6%2B7NOWW5wyfWFBwLz7%2B3g8ctdbBstX%2F8hZckoBATvnYSUZ1B2M3Rp6Mu2HyLwJ0oNcr3vae0n2k3i0IZ5Cr0zm%2BNjd1VUhmKs1xGE5SgVlmPYA6MX9GC20wEFECoONCeXLQacRRDG85vzo49AU6%2FG5N%2Fz9kMMISTm8QGOqUBofWyn8%2FWLeUuASuSyiinZIxW5aHMVHiYIPqm9CkquD29VDmIQXNhcbTXEcQAXr9FVXvNyTiQB7DkVgCIpgwCLBI7UwvUDSuy0l9gs9xqgo5dvQeNZZHU%2BSDc14hdYuFUhPdNcOyAdQuRjeRjXB9kf%2BL3saKSbpYSKXw0lsBsXubTUZUTunVUaZl%2B7s9cZHU2xSzCLWQ%2BmIKOw06Vkcf4tzg8y30L&X-Amz-Signature=5b29673e634d84094a6161c01f7e7c69d67d77c300bba4c86a5a7b33a6cd54f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQSNWNQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIB%2BBAQqvuriROqgYW5%2BKAdCKTRIuQ6ysYHfLCXhutR4iAiANGGGsEGfs3LuRDrc4ZyhwTl78arbxQvBMgie7ZO00HyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpKk028bRLtQEYLcKtwD0f2TbsM7rkljVE1GWIEi8KCevRmhdEPdpgehyhu8nhc3q6zgAbFrBpQwqELgu5zRaIIUpo58%2FWyZHV3sN0KX0Xn0evb%2FXPVO057krfBe8wMuVj7TLMOfFkc8BUUuAVyxDmGiQJj6J%2FN2h2nuwB1sxxzgONaAK3wh6EyLfq6rBQ3faEPARcWPa8pwW%2BL97%2BOOXCauMt8O46E9g0iLwPnkFfFQagp7CpykC9UNuLxdK9PeYi9NQVR6nwVw4yQjDWaiuuo5LlvxPvxbfT8o21JeE%2BbWcU%2BqVBcFSKW3vL3ULe9N2ihNlYphns0E2q%2BLWLDYOnOlYwG1YmICz7OzY7%2BHhYINNJdpDxYrnPu5Kqlpt2Y%2FtnMw8VhPzDzRyO72tKWzdN1ygs%2Bhnn7o49mj3vs9ZcMGD%2BA7Fp2bhl%2B2KythfZX9HzR79mV2iDeyXBe1GRcN%2F99bxpZsGD7bFQ%2FbLqvDrLdc6ELyuILYNwvmv%2FIjRoGf55V%2FH33OfPb2wrhn6%2F6KRWttyAx%2BH16N20D6vag2ETRnMpPcYdkVXTjDnqemQxUVdIpcFnLes1cOMewL%2BKxamUpUfiZq8hC02iOTN%2BGuDsDDS72Imiast6XkIJwfctYPFFaHpoMTX3JbG8Ywt5ObxAY6pgGuxWyHufCJTzEwpUt5POUWnVVNRC1FFspYw1x9afhW7KZpt04iucWUQovD96OAwZWenH9zvm2BwuJs%2F7M0l50NODhxkApgKVRUyYytqt5ivDx2jV3cVfjMtd6jJBv4yEla6dZvWCGiJVDFurUPrgrWar8f7uUUjJ9xYY1xmbAV9xum6insThqmxvDF7y%2Bdt8nDgaBfEOTqvgwdxY4Sog1KRAoJWf7C&X-Amz-Signature=6b27af9a3e144712d18b5235d4b16dee367b5c6f8dda07068233d81d585b3f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBPR6MG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIF%2BPBE7o0Tu0I%2BXn79ZaMlCjITfjW%2BY5HBaABxpX98FRAiA1RYK6CIlx8g8o%2FIAoq5o%2FsEkJzbGgkQOWh0%2BFaCFQ5CqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV9FlV3RhpJwi9o7zKtwDkIH6VjOE7kpKWv0pbuMe2BPmrlzUeKF5IgQVd1ozwqwxMBCv8Wj4NLcTgCrPTR7UZBb%2FPTYQUKuLoNDheRZ5ZqKYn6zNARplU9LyxuAnkLJjnDUU0uHbmh7UK8tBJamIJwKgJnV00k3kI31IoiYJuygzAmX0n3OfIFtJEcsMDr7tpHwFj92k6cVb5gWoIE5dKC3gfw93ClUERMTJ6ocx1LczrnMNww3zHYPFC2RSiQn%2BaMFmekDKJ7KkR1qPaYwdQJ9eHQc8zzTLPH39PKobjhukvEdJbFXZbUHFR65iGj9xQYRd26fpxWDeprm8jMa5Ab3CWZ4I%2BM9WPARgqkDwJLA2El7RWW7ZW79Q22FhRuLAXTDkV54klhpc11Akl%2BpofnQo6kwWzOCJwQWrfDMG4tg84bATP5ivDF4D9YKLkzaUtq%2B4sudTIlG08govEH%2FwFy%2FXUNGBEXhmOeu1esNKy82okS%2F5FajUBfH7cTPGkW5uPpU3dbycDaLFkiwG8EsYuAgNNpyQTwhlA%2BPEbZx7ZOeSMwvzfKphV2XqBVc1U%2FRgoPXiHudbKOpadBH3D49W%2BQDpJWLBeFap%2B%2BvXpuBYLGp8IG30%2FWYBd48x7NL4IqgcsplRtCGyvkYtQGYwt5ObxAY6pgFp01oOWCYd2UocDlFd0XLJ2I6YMtF%2BuPDLAOZ%2FKNiu6Z3Jr4R0JMfDhrjYD7detpUMdQoyEynP%2B8Y6YmNWuBBRcbh%2BSPZ9UDJiJHOeEGJL6oqfwzTcRnv%2F2S7qS3%2F83jwMftg%2FlhQoxg9aGTmKkJO6SHrfIg4khDc0hlY22zdX7DyWzhygTqi%2BnHZkNZw4F6QiFNGEV1pILeehpeVs%2BUmK2RwGs1xc&X-Amz-Signature=4056fd553b78298f912cd6f60871ab4afed6c3874131c5a125feb3e4a30645c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBPR6MG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIF%2BPBE7o0Tu0I%2BXn79ZaMlCjITfjW%2BY5HBaABxpX98FRAiA1RYK6CIlx8g8o%2FIAoq5o%2FsEkJzbGgkQOWh0%2BFaCFQ5CqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV9FlV3RhpJwi9o7zKtwDkIH6VjOE7kpKWv0pbuMe2BPmrlzUeKF5IgQVd1ozwqwxMBCv8Wj4NLcTgCrPTR7UZBb%2FPTYQUKuLoNDheRZ5ZqKYn6zNARplU9LyxuAnkLJjnDUU0uHbmh7UK8tBJamIJwKgJnV00k3kI31IoiYJuygzAmX0n3OfIFtJEcsMDr7tpHwFj92k6cVb5gWoIE5dKC3gfw93ClUERMTJ6ocx1LczrnMNww3zHYPFC2RSiQn%2BaMFmekDKJ7KkR1qPaYwdQJ9eHQc8zzTLPH39PKobjhukvEdJbFXZbUHFR65iGj9xQYRd26fpxWDeprm8jMa5Ab3CWZ4I%2BM9WPARgqkDwJLA2El7RWW7ZW79Q22FhRuLAXTDkV54klhpc11Akl%2BpofnQo6kwWzOCJwQWrfDMG4tg84bATP5ivDF4D9YKLkzaUtq%2B4sudTIlG08govEH%2FwFy%2FXUNGBEXhmOeu1esNKy82okS%2F5FajUBfH7cTPGkW5uPpU3dbycDaLFkiwG8EsYuAgNNpyQTwhlA%2BPEbZx7ZOeSMwvzfKphV2XqBVc1U%2FRgoPXiHudbKOpadBH3D49W%2BQDpJWLBeFap%2B%2BvXpuBYLGp8IG30%2FWYBd48x7NL4IqgcsplRtCGyvkYtQGYwt5ObxAY6pgFp01oOWCYd2UocDlFd0XLJ2I6YMtF%2BuPDLAOZ%2FKNiu6Z3Jr4R0JMfDhrjYD7detpUMdQoyEynP%2B8Y6YmNWuBBRcbh%2BSPZ9UDJiJHOeEGJL6oqfwzTcRnv%2F2S7qS3%2F83jwMftg%2FlhQoxg9aGTmKkJO6SHrfIg4khDc0hlY22zdX7DyWzhygTqi%2BnHZkNZw4F6QiFNGEV1pILeehpeVs%2BUmK2RwGs1xc&X-Amz-Signature=e09aee0187795dce8a6a51ed7f80d8c37e0299f0476ea5c2eff2bff04c8a930f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBPR6MG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIF%2BPBE7o0Tu0I%2BXn79ZaMlCjITfjW%2BY5HBaABxpX98FRAiA1RYK6CIlx8g8o%2FIAoq5o%2FsEkJzbGgkQOWh0%2BFaCFQ5CqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV9FlV3RhpJwi9o7zKtwDkIH6VjOE7kpKWv0pbuMe2BPmrlzUeKF5IgQVd1ozwqwxMBCv8Wj4NLcTgCrPTR7UZBb%2FPTYQUKuLoNDheRZ5ZqKYn6zNARplU9LyxuAnkLJjnDUU0uHbmh7UK8tBJamIJwKgJnV00k3kI31IoiYJuygzAmX0n3OfIFtJEcsMDr7tpHwFj92k6cVb5gWoIE5dKC3gfw93ClUERMTJ6ocx1LczrnMNww3zHYPFC2RSiQn%2BaMFmekDKJ7KkR1qPaYwdQJ9eHQc8zzTLPH39PKobjhukvEdJbFXZbUHFR65iGj9xQYRd26fpxWDeprm8jMa5Ab3CWZ4I%2BM9WPARgqkDwJLA2El7RWW7ZW79Q22FhRuLAXTDkV54klhpc11Akl%2BpofnQo6kwWzOCJwQWrfDMG4tg84bATP5ivDF4D9YKLkzaUtq%2B4sudTIlG08govEH%2FwFy%2FXUNGBEXhmOeu1esNKy82okS%2F5FajUBfH7cTPGkW5uPpU3dbycDaLFkiwG8EsYuAgNNpyQTwhlA%2BPEbZx7ZOeSMwvzfKphV2XqBVc1U%2FRgoPXiHudbKOpadBH3D49W%2BQDpJWLBeFap%2B%2BvXpuBYLGp8IG30%2FWYBd48x7NL4IqgcsplRtCGyvkYtQGYwt5ObxAY6pgFp01oOWCYd2UocDlFd0XLJ2I6YMtF%2BuPDLAOZ%2FKNiu6Z3Jr4R0JMfDhrjYD7detpUMdQoyEynP%2B8Y6YmNWuBBRcbh%2BSPZ9UDJiJHOeEGJL6oqfwzTcRnv%2F2S7qS3%2F83jwMftg%2FlhQoxg9aGTmKkJO6SHrfIg4khDc0hlY22zdX7DyWzhygTqi%2BnHZkNZw4F6QiFNGEV1pILeehpeVs%2BUmK2RwGs1xc&X-Amz-Signature=5505505253713058772af4a6d0b99446377419a5a5177a73d593b5a991050076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBPR6MG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIF%2BPBE7o0Tu0I%2BXn79ZaMlCjITfjW%2BY5HBaABxpX98FRAiA1RYK6CIlx8g8o%2FIAoq5o%2FsEkJzbGgkQOWh0%2BFaCFQ5CqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV9FlV3RhpJwi9o7zKtwDkIH6VjOE7kpKWv0pbuMe2BPmrlzUeKF5IgQVd1ozwqwxMBCv8Wj4NLcTgCrPTR7UZBb%2FPTYQUKuLoNDheRZ5ZqKYn6zNARplU9LyxuAnkLJjnDUU0uHbmh7UK8tBJamIJwKgJnV00k3kI31IoiYJuygzAmX0n3OfIFtJEcsMDr7tpHwFj92k6cVb5gWoIE5dKC3gfw93ClUERMTJ6ocx1LczrnMNww3zHYPFC2RSiQn%2BaMFmekDKJ7KkR1qPaYwdQJ9eHQc8zzTLPH39PKobjhukvEdJbFXZbUHFR65iGj9xQYRd26fpxWDeprm8jMa5Ab3CWZ4I%2BM9WPARgqkDwJLA2El7RWW7ZW79Q22FhRuLAXTDkV54klhpc11Akl%2BpofnQo6kwWzOCJwQWrfDMG4tg84bATP5ivDF4D9YKLkzaUtq%2B4sudTIlG08govEH%2FwFy%2FXUNGBEXhmOeu1esNKy82okS%2F5FajUBfH7cTPGkW5uPpU3dbycDaLFkiwG8EsYuAgNNpyQTwhlA%2BPEbZx7ZOeSMwvzfKphV2XqBVc1U%2FRgoPXiHudbKOpadBH3D49W%2BQDpJWLBeFap%2B%2BvXpuBYLGp8IG30%2FWYBd48x7NL4IqgcsplRtCGyvkYtQGYwt5ObxAY6pgFp01oOWCYd2UocDlFd0XLJ2I6YMtF%2BuPDLAOZ%2FKNiu6Z3Jr4R0JMfDhrjYD7detpUMdQoyEynP%2B8Y6YmNWuBBRcbh%2BSPZ9UDJiJHOeEGJL6oqfwzTcRnv%2F2S7qS3%2F83jwMftg%2FlhQoxg9aGTmKkJO6SHrfIg4khDc0hlY22zdX7DyWzhygTqi%2BnHZkNZw4F6QiFNGEV1pILeehpeVs%2BUmK2RwGs1xc&X-Amz-Signature=3a23e93d4369f7436f6da53096a573c50420391426c7a451d5a3c6586b3bea5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBPR6MG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIF%2BPBE7o0Tu0I%2BXn79ZaMlCjITfjW%2BY5HBaABxpX98FRAiA1RYK6CIlx8g8o%2FIAoq5o%2FsEkJzbGgkQOWh0%2BFaCFQ5CqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV9FlV3RhpJwi9o7zKtwDkIH6VjOE7kpKWv0pbuMe2BPmrlzUeKF5IgQVd1ozwqwxMBCv8Wj4NLcTgCrPTR7UZBb%2FPTYQUKuLoNDheRZ5ZqKYn6zNARplU9LyxuAnkLJjnDUU0uHbmh7UK8tBJamIJwKgJnV00k3kI31IoiYJuygzAmX0n3OfIFtJEcsMDr7tpHwFj92k6cVb5gWoIE5dKC3gfw93ClUERMTJ6ocx1LczrnMNww3zHYPFC2RSiQn%2BaMFmekDKJ7KkR1qPaYwdQJ9eHQc8zzTLPH39PKobjhukvEdJbFXZbUHFR65iGj9xQYRd26fpxWDeprm8jMa5Ab3CWZ4I%2BM9WPARgqkDwJLA2El7RWW7ZW79Q22FhRuLAXTDkV54klhpc11Akl%2BpofnQo6kwWzOCJwQWrfDMG4tg84bATP5ivDF4D9YKLkzaUtq%2B4sudTIlG08govEH%2FwFy%2FXUNGBEXhmOeu1esNKy82okS%2F5FajUBfH7cTPGkW5uPpU3dbycDaLFkiwG8EsYuAgNNpyQTwhlA%2BPEbZx7ZOeSMwvzfKphV2XqBVc1U%2FRgoPXiHudbKOpadBH3D49W%2BQDpJWLBeFap%2B%2BvXpuBYLGp8IG30%2FWYBd48x7NL4IqgcsplRtCGyvkYtQGYwt5ObxAY6pgFp01oOWCYd2UocDlFd0XLJ2I6YMtF%2BuPDLAOZ%2FKNiu6Z3Jr4R0JMfDhrjYD7detpUMdQoyEynP%2B8Y6YmNWuBBRcbh%2BSPZ9UDJiJHOeEGJL6oqfwzTcRnv%2F2S7qS3%2F83jwMftg%2FlhQoxg9aGTmKkJO6SHrfIg4khDc0hlY22zdX7DyWzhygTqi%2BnHZkNZw4F6QiFNGEV1pILeehpeVs%2BUmK2RwGs1xc&X-Amz-Signature=38eeafcae422611fe93c43707e3963cc61d08d051a01f1fe121aeb3b4158c3ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBPR6MG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIF%2BPBE7o0Tu0I%2BXn79ZaMlCjITfjW%2BY5HBaABxpX98FRAiA1RYK6CIlx8g8o%2FIAoq5o%2FsEkJzbGgkQOWh0%2BFaCFQ5CqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV9FlV3RhpJwi9o7zKtwDkIH6VjOE7kpKWv0pbuMe2BPmrlzUeKF5IgQVd1ozwqwxMBCv8Wj4NLcTgCrPTR7UZBb%2FPTYQUKuLoNDheRZ5ZqKYn6zNARplU9LyxuAnkLJjnDUU0uHbmh7UK8tBJamIJwKgJnV00k3kI31IoiYJuygzAmX0n3OfIFtJEcsMDr7tpHwFj92k6cVb5gWoIE5dKC3gfw93ClUERMTJ6ocx1LczrnMNww3zHYPFC2RSiQn%2BaMFmekDKJ7KkR1qPaYwdQJ9eHQc8zzTLPH39PKobjhukvEdJbFXZbUHFR65iGj9xQYRd26fpxWDeprm8jMa5Ab3CWZ4I%2BM9WPARgqkDwJLA2El7RWW7ZW79Q22FhRuLAXTDkV54klhpc11Akl%2BpofnQo6kwWzOCJwQWrfDMG4tg84bATP5ivDF4D9YKLkzaUtq%2B4sudTIlG08govEH%2FwFy%2FXUNGBEXhmOeu1esNKy82okS%2F5FajUBfH7cTPGkW5uPpU3dbycDaLFkiwG8EsYuAgNNpyQTwhlA%2BPEbZx7ZOeSMwvzfKphV2XqBVc1U%2FRgoPXiHudbKOpadBH3D49W%2BQDpJWLBeFap%2B%2BvXpuBYLGp8IG30%2FWYBd48x7NL4IqgcsplRtCGyvkYtQGYwt5ObxAY6pgFp01oOWCYd2UocDlFd0XLJ2I6YMtF%2BuPDLAOZ%2FKNiu6Z3Jr4R0JMfDhrjYD7detpUMdQoyEynP%2B8Y6YmNWuBBRcbh%2BSPZ9UDJiJHOeEGJL6oqfwzTcRnv%2F2S7qS3%2F83jwMftg%2FlhQoxg9aGTmKkJO6SHrfIg4khDc0hlY22zdX7DyWzhygTqi%2BnHZkNZw4F6QiFNGEV1pILeehpeVs%2BUmK2RwGs1xc&X-Amz-Signature=a2aee883093b1d6cacdc040c0172fae31062d09ff17e203b2de47b135a29baab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBPR6MG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIF%2BPBE7o0Tu0I%2BXn79ZaMlCjITfjW%2BY5HBaABxpX98FRAiA1RYK6CIlx8g8o%2FIAoq5o%2FsEkJzbGgkQOWh0%2BFaCFQ5CqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV9FlV3RhpJwi9o7zKtwDkIH6VjOE7kpKWv0pbuMe2BPmrlzUeKF5IgQVd1ozwqwxMBCv8Wj4NLcTgCrPTR7UZBb%2FPTYQUKuLoNDheRZ5ZqKYn6zNARplU9LyxuAnkLJjnDUU0uHbmh7UK8tBJamIJwKgJnV00k3kI31IoiYJuygzAmX0n3OfIFtJEcsMDr7tpHwFj92k6cVb5gWoIE5dKC3gfw93ClUERMTJ6ocx1LczrnMNww3zHYPFC2RSiQn%2BaMFmekDKJ7KkR1qPaYwdQJ9eHQc8zzTLPH39PKobjhukvEdJbFXZbUHFR65iGj9xQYRd26fpxWDeprm8jMa5Ab3CWZ4I%2BM9WPARgqkDwJLA2El7RWW7ZW79Q22FhRuLAXTDkV54klhpc11Akl%2BpofnQo6kwWzOCJwQWrfDMG4tg84bATP5ivDF4D9YKLkzaUtq%2B4sudTIlG08govEH%2FwFy%2FXUNGBEXhmOeu1esNKy82okS%2F5FajUBfH7cTPGkW5uPpU3dbycDaLFkiwG8EsYuAgNNpyQTwhlA%2BPEbZx7ZOeSMwvzfKphV2XqBVc1U%2FRgoPXiHudbKOpadBH3D49W%2BQDpJWLBeFap%2B%2BvXpuBYLGp8IG30%2FWYBd48x7NL4IqgcsplRtCGyvkYtQGYwt5ObxAY6pgFp01oOWCYd2UocDlFd0XLJ2I6YMtF%2BuPDLAOZ%2FKNiu6Z3Jr4R0JMfDhrjYD7detpUMdQoyEynP%2B8Y6YmNWuBBRcbh%2BSPZ9UDJiJHOeEGJL6oqfwzTcRnv%2F2S7qS3%2F83jwMftg%2FlhQoxg9aGTmKkJO6SHrfIg4khDc0hlY22zdX7DyWzhygTqi%2BnHZkNZw4F6QiFNGEV1pILeehpeVs%2BUmK2RwGs1xc&X-Amz-Signature=7662eaa4c10adf6a984930b1224538c65704506e9430d58634499c02d2e4346d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
