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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USVOFBON%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL5BkoHC2tf%2B18j9BsKy4DkLFvmWFhiGiGFUvzqb4IeAiBhHM%2BAtByjIDGGzB2YTgcPvfazTkGGmcDa34XppvA1Ryr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXgAMS0Q4nzMmRUCbKtwDV3IqBgaHz9zz0WDffx0RrXfl6Tht4xej4nQ1b2%2FRLctyLX7HTJDZslb2jY04jcu98YnUNR%2FD9qT3JhmEj8iaSM8p53Uaci6yT89%2FUmWtBWSQIQQbn5GTb0x2yGlCkOwg1%2FfP%2F8EtpE5dCWFxvje8Ms7872FF%2F%2BeWjaNpJeiBJKWAJwQZshQ3xQ5mf2q%2BtuYYx6yE%2B5L%2B0UU4OANQY29TtqG15H9r9FyMAjv%2BoTCXuarAm7TuB8wGKXFhsi%2BCFJIi%2FWUvyAZ%2B13YYzUcGwURbBq7CUS4Vjx8JfLdxdc9JTHg6UzcEF2a7dJOksgsjDeiliZwKx8FGho%2FFiH8HAD9hW5Y5XaFmfvw6YCoURZjxfuMmqimwso8oTLUE16WpLHTlkaZKREfeczbRrEVFBXQriC0prXZK70hOmMX9NrK4XHqP0Stf7rDOdectJVflUXZLPgJkGt4PGVRtcBLYa%2BwKXUyWTloAVEaCtGU23bLXl6tmo6ISHDmG0XPlA1DBw8a5WRriGtyJFlfbT9q8C09fHgxrMibhtc4sKLMDmIxS7IqjveRUVs%2BTzAoTYCkmbDGl2dSP7GFl9z16m6bTalFxb4OgMEY8bsgSxy%2BaADu3%2FRRJas91YKi%2BQC0j6Xgwydm%2BxAY6pgGe8Gf7dLNcx7a4ceO72HJU5e1NCpPRZT5EwQVP9vgxAA8zrK9ZHW2k1wpEJVJc8Ug%2BDbYkX3JJG4E5oyUlLOJrT3t1uX9K0qhytsJwd%2FyDefPQ%2FahDREdjT5B2tEfVJ0BU9K0D6CbAFOxwI92kSd2Kaz0H8zr4wXYz3pvgF08gBaM0Cj%2BlKst7zpGC18bH69FgmsBij1t7tnPe6wcejQx4xOlcLeT1&X-Amz-Signature=b9f962fd83087e2f5afdabe825f7084b68cba8483979bd8d0a4845b3146459b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USVOFBON%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL5BkoHC2tf%2B18j9BsKy4DkLFvmWFhiGiGFUvzqb4IeAiBhHM%2BAtByjIDGGzB2YTgcPvfazTkGGmcDa34XppvA1Ryr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXgAMS0Q4nzMmRUCbKtwDV3IqBgaHz9zz0WDffx0RrXfl6Tht4xej4nQ1b2%2FRLctyLX7HTJDZslb2jY04jcu98YnUNR%2FD9qT3JhmEj8iaSM8p53Uaci6yT89%2FUmWtBWSQIQQbn5GTb0x2yGlCkOwg1%2FfP%2F8EtpE5dCWFxvje8Ms7872FF%2F%2BeWjaNpJeiBJKWAJwQZshQ3xQ5mf2q%2BtuYYx6yE%2B5L%2B0UU4OANQY29TtqG15H9r9FyMAjv%2BoTCXuarAm7TuB8wGKXFhsi%2BCFJIi%2FWUvyAZ%2B13YYzUcGwURbBq7CUS4Vjx8JfLdxdc9JTHg6UzcEF2a7dJOksgsjDeiliZwKx8FGho%2FFiH8HAD9hW5Y5XaFmfvw6YCoURZjxfuMmqimwso8oTLUE16WpLHTlkaZKREfeczbRrEVFBXQriC0prXZK70hOmMX9NrK4XHqP0Stf7rDOdectJVflUXZLPgJkGt4PGVRtcBLYa%2BwKXUyWTloAVEaCtGU23bLXl6tmo6ISHDmG0XPlA1DBw8a5WRriGtyJFlfbT9q8C09fHgxrMibhtc4sKLMDmIxS7IqjveRUVs%2BTzAoTYCkmbDGl2dSP7GFl9z16m6bTalFxb4OgMEY8bsgSxy%2BaADu3%2FRRJas91YKi%2BQC0j6Xgwydm%2BxAY6pgGe8Gf7dLNcx7a4ceO72HJU5e1NCpPRZT5EwQVP9vgxAA8zrK9ZHW2k1wpEJVJc8Ug%2BDbYkX3JJG4E5oyUlLOJrT3t1uX9K0qhytsJwd%2FyDefPQ%2FahDREdjT5B2tEfVJ0BU9K0D6CbAFOxwI92kSd2Kaz0H8zr4wXYz3pvgF08gBaM0Cj%2BlKst7zpGC18bH69FgmsBij1t7tnPe6wcejQx4xOlcLeT1&X-Amz-Signature=733308f9396107ead62f2a43248d713d68d943905dd69fc3a7843b41ed3bec56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USVOFBON%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL5BkoHC2tf%2B18j9BsKy4DkLFvmWFhiGiGFUvzqb4IeAiBhHM%2BAtByjIDGGzB2YTgcPvfazTkGGmcDa34XppvA1Ryr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXgAMS0Q4nzMmRUCbKtwDV3IqBgaHz9zz0WDffx0RrXfl6Tht4xej4nQ1b2%2FRLctyLX7HTJDZslb2jY04jcu98YnUNR%2FD9qT3JhmEj8iaSM8p53Uaci6yT89%2FUmWtBWSQIQQbn5GTb0x2yGlCkOwg1%2FfP%2F8EtpE5dCWFxvje8Ms7872FF%2F%2BeWjaNpJeiBJKWAJwQZshQ3xQ5mf2q%2BtuYYx6yE%2B5L%2B0UU4OANQY29TtqG15H9r9FyMAjv%2BoTCXuarAm7TuB8wGKXFhsi%2BCFJIi%2FWUvyAZ%2B13YYzUcGwURbBq7CUS4Vjx8JfLdxdc9JTHg6UzcEF2a7dJOksgsjDeiliZwKx8FGho%2FFiH8HAD9hW5Y5XaFmfvw6YCoURZjxfuMmqimwso8oTLUE16WpLHTlkaZKREfeczbRrEVFBXQriC0prXZK70hOmMX9NrK4XHqP0Stf7rDOdectJVflUXZLPgJkGt4PGVRtcBLYa%2BwKXUyWTloAVEaCtGU23bLXl6tmo6ISHDmG0XPlA1DBw8a5WRriGtyJFlfbT9q8C09fHgxrMibhtc4sKLMDmIxS7IqjveRUVs%2BTzAoTYCkmbDGl2dSP7GFl9z16m6bTalFxb4OgMEY8bsgSxy%2BaADu3%2FRRJas91YKi%2BQC0j6Xgwydm%2BxAY6pgGe8Gf7dLNcx7a4ceO72HJU5e1NCpPRZT5EwQVP9vgxAA8zrK9ZHW2k1wpEJVJc8Ug%2BDbYkX3JJG4E5oyUlLOJrT3t1uX9K0qhytsJwd%2FyDefPQ%2FahDREdjT5B2tEfVJ0BU9K0D6CbAFOxwI92kSd2Kaz0H8zr4wXYz3pvgF08gBaM0Cj%2BlKst7zpGC18bH69FgmsBij1t7tnPe6wcejQx4xOlcLeT1&X-Amz-Signature=a5fad11856e4a2a8635399129e53c5020fcb2673d886848362857edb39f04b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USVOFBON%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL5BkoHC2tf%2B18j9BsKy4DkLFvmWFhiGiGFUvzqb4IeAiBhHM%2BAtByjIDGGzB2YTgcPvfazTkGGmcDa34XppvA1Ryr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXgAMS0Q4nzMmRUCbKtwDV3IqBgaHz9zz0WDffx0RrXfl6Tht4xej4nQ1b2%2FRLctyLX7HTJDZslb2jY04jcu98YnUNR%2FD9qT3JhmEj8iaSM8p53Uaci6yT89%2FUmWtBWSQIQQbn5GTb0x2yGlCkOwg1%2FfP%2F8EtpE5dCWFxvje8Ms7872FF%2F%2BeWjaNpJeiBJKWAJwQZshQ3xQ5mf2q%2BtuYYx6yE%2B5L%2B0UU4OANQY29TtqG15H9r9FyMAjv%2BoTCXuarAm7TuB8wGKXFhsi%2BCFJIi%2FWUvyAZ%2B13YYzUcGwURbBq7CUS4Vjx8JfLdxdc9JTHg6UzcEF2a7dJOksgsjDeiliZwKx8FGho%2FFiH8HAD9hW5Y5XaFmfvw6YCoURZjxfuMmqimwso8oTLUE16WpLHTlkaZKREfeczbRrEVFBXQriC0prXZK70hOmMX9NrK4XHqP0Stf7rDOdectJVflUXZLPgJkGt4PGVRtcBLYa%2BwKXUyWTloAVEaCtGU23bLXl6tmo6ISHDmG0XPlA1DBw8a5WRriGtyJFlfbT9q8C09fHgxrMibhtc4sKLMDmIxS7IqjveRUVs%2BTzAoTYCkmbDGl2dSP7GFl9z16m6bTalFxb4OgMEY8bsgSxy%2BaADu3%2FRRJas91YKi%2BQC0j6Xgwydm%2BxAY6pgGe8Gf7dLNcx7a4ceO72HJU5e1NCpPRZT5EwQVP9vgxAA8zrK9ZHW2k1wpEJVJc8Ug%2BDbYkX3JJG4E5oyUlLOJrT3t1uX9K0qhytsJwd%2FyDefPQ%2FahDREdjT5B2tEfVJ0BU9K0D6CbAFOxwI92kSd2Kaz0H8zr4wXYz3pvgF08gBaM0Cj%2BlKst7zpGC18bH69FgmsBij1t7tnPe6wcejQx4xOlcLeT1&X-Amz-Signature=b782d1fb55b0c9cdd6c569793bc4dfb8a7ee74ec20006790fedeba7ad1cc7714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USVOFBON%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL5BkoHC2tf%2B18j9BsKy4DkLFvmWFhiGiGFUvzqb4IeAiBhHM%2BAtByjIDGGzB2YTgcPvfazTkGGmcDa34XppvA1Ryr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXgAMS0Q4nzMmRUCbKtwDV3IqBgaHz9zz0WDffx0RrXfl6Tht4xej4nQ1b2%2FRLctyLX7HTJDZslb2jY04jcu98YnUNR%2FD9qT3JhmEj8iaSM8p53Uaci6yT89%2FUmWtBWSQIQQbn5GTb0x2yGlCkOwg1%2FfP%2F8EtpE5dCWFxvje8Ms7872FF%2F%2BeWjaNpJeiBJKWAJwQZshQ3xQ5mf2q%2BtuYYx6yE%2B5L%2B0UU4OANQY29TtqG15H9r9FyMAjv%2BoTCXuarAm7TuB8wGKXFhsi%2BCFJIi%2FWUvyAZ%2B13YYzUcGwURbBq7CUS4Vjx8JfLdxdc9JTHg6UzcEF2a7dJOksgsjDeiliZwKx8FGho%2FFiH8HAD9hW5Y5XaFmfvw6YCoURZjxfuMmqimwso8oTLUE16WpLHTlkaZKREfeczbRrEVFBXQriC0prXZK70hOmMX9NrK4XHqP0Stf7rDOdectJVflUXZLPgJkGt4PGVRtcBLYa%2BwKXUyWTloAVEaCtGU23bLXl6tmo6ISHDmG0XPlA1DBw8a5WRriGtyJFlfbT9q8C09fHgxrMibhtc4sKLMDmIxS7IqjveRUVs%2BTzAoTYCkmbDGl2dSP7GFl9z16m6bTalFxb4OgMEY8bsgSxy%2BaADu3%2FRRJas91YKi%2BQC0j6Xgwydm%2BxAY6pgGe8Gf7dLNcx7a4ceO72HJU5e1NCpPRZT5EwQVP9vgxAA8zrK9ZHW2k1wpEJVJc8Ug%2BDbYkX3JJG4E5oyUlLOJrT3t1uX9K0qhytsJwd%2FyDefPQ%2FahDREdjT5B2tEfVJ0BU9K0D6CbAFOxwI92kSd2Kaz0H8zr4wXYz3pvgF08gBaM0Cj%2BlKst7zpGC18bH69FgmsBij1t7tnPe6wcejQx4xOlcLeT1&X-Amz-Signature=16cc30fc12e5f81606f4b095543556e762d72e0407670043da6b88f6b3d13216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USVOFBON%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL5BkoHC2tf%2B18j9BsKy4DkLFvmWFhiGiGFUvzqb4IeAiBhHM%2BAtByjIDGGzB2YTgcPvfazTkGGmcDa34XppvA1Ryr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXgAMS0Q4nzMmRUCbKtwDV3IqBgaHz9zz0WDffx0RrXfl6Tht4xej4nQ1b2%2FRLctyLX7HTJDZslb2jY04jcu98YnUNR%2FD9qT3JhmEj8iaSM8p53Uaci6yT89%2FUmWtBWSQIQQbn5GTb0x2yGlCkOwg1%2FfP%2F8EtpE5dCWFxvje8Ms7872FF%2F%2BeWjaNpJeiBJKWAJwQZshQ3xQ5mf2q%2BtuYYx6yE%2B5L%2B0UU4OANQY29TtqG15H9r9FyMAjv%2BoTCXuarAm7TuB8wGKXFhsi%2BCFJIi%2FWUvyAZ%2B13YYzUcGwURbBq7CUS4Vjx8JfLdxdc9JTHg6UzcEF2a7dJOksgsjDeiliZwKx8FGho%2FFiH8HAD9hW5Y5XaFmfvw6YCoURZjxfuMmqimwso8oTLUE16WpLHTlkaZKREfeczbRrEVFBXQriC0prXZK70hOmMX9NrK4XHqP0Stf7rDOdectJVflUXZLPgJkGt4PGVRtcBLYa%2BwKXUyWTloAVEaCtGU23bLXl6tmo6ISHDmG0XPlA1DBw8a5WRriGtyJFlfbT9q8C09fHgxrMibhtc4sKLMDmIxS7IqjveRUVs%2BTzAoTYCkmbDGl2dSP7GFl9z16m6bTalFxb4OgMEY8bsgSxy%2BaADu3%2FRRJas91YKi%2BQC0j6Xgwydm%2BxAY6pgGe8Gf7dLNcx7a4ceO72HJU5e1NCpPRZT5EwQVP9vgxAA8zrK9ZHW2k1wpEJVJc8Ug%2BDbYkX3JJG4E5oyUlLOJrT3t1uX9K0qhytsJwd%2FyDefPQ%2FahDREdjT5B2tEfVJ0BU9K0D6CbAFOxwI92kSd2Kaz0H8zr4wXYz3pvgF08gBaM0Cj%2BlKst7zpGC18bH69FgmsBij1t7tnPe6wcejQx4xOlcLeT1&X-Amz-Signature=8ab4d72cfce5b46e15e72f7403a22fd514af9d38f4a7b0d552bc2225ad3dad16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USVOFBON%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL5BkoHC2tf%2B18j9BsKy4DkLFvmWFhiGiGFUvzqb4IeAiBhHM%2BAtByjIDGGzB2YTgcPvfazTkGGmcDa34XppvA1Ryr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXgAMS0Q4nzMmRUCbKtwDV3IqBgaHz9zz0WDffx0RrXfl6Tht4xej4nQ1b2%2FRLctyLX7HTJDZslb2jY04jcu98YnUNR%2FD9qT3JhmEj8iaSM8p53Uaci6yT89%2FUmWtBWSQIQQbn5GTb0x2yGlCkOwg1%2FfP%2F8EtpE5dCWFxvje8Ms7872FF%2F%2BeWjaNpJeiBJKWAJwQZshQ3xQ5mf2q%2BtuYYx6yE%2B5L%2B0UU4OANQY29TtqG15H9r9FyMAjv%2BoTCXuarAm7TuB8wGKXFhsi%2BCFJIi%2FWUvyAZ%2B13YYzUcGwURbBq7CUS4Vjx8JfLdxdc9JTHg6UzcEF2a7dJOksgsjDeiliZwKx8FGho%2FFiH8HAD9hW5Y5XaFmfvw6YCoURZjxfuMmqimwso8oTLUE16WpLHTlkaZKREfeczbRrEVFBXQriC0prXZK70hOmMX9NrK4XHqP0Stf7rDOdectJVflUXZLPgJkGt4PGVRtcBLYa%2BwKXUyWTloAVEaCtGU23bLXl6tmo6ISHDmG0XPlA1DBw8a5WRriGtyJFlfbT9q8C09fHgxrMibhtc4sKLMDmIxS7IqjveRUVs%2BTzAoTYCkmbDGl2dSP7GFl9z16m6bTalFxb4OgMEY8bsgSxy%2BaADu3%2FRRJas91YKi%2BQC0j6Xgwydm%2BxAY6pgGe8Gf7dLNcx7a4ceO72HJU5e1NCpPRZT5EwQVP9vgxAA8zrK9ZHW2k1wpEJVJc8Ug%2BDbYkX3JJG4E5oyUlLOJrT3t1uX9K0qhytsJwd%2FyDefPQ%2FahDREdjT5B2tEfVJ0BU9K0D6CbAFOxwI92kSd2Kaz0H8zr4wXYz3pvgF08gBaM0Cj%2BlKst7zpGC18bH69FgmsBij1t7tnPe6wcejQx4xOlcLeT1&X-Amz-Signature=ad4a10dd80ec0acc9a2a5bf27f862b25248cd619b5a4ea6a9e465c4ffec9538e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USVOFBON%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL5BkoHC2tf%2B18j9BsKy4DkLFvmWFhiGiGFUvzqb4IeAiBhHM%2BAtByjIDGGzB2YTgcPvfazTkGGmcDa34XppvA1Ryr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXgAMS0Q4nzMmRUCbKtwDV3IqBgaHz9zz0WDffx0RrXfl6Tht4xej4nQ1b2%2FRLctyLX7HTJDZslb2jY04jcu98YnUNR%2FD9qT3JhmEj8iaSM8p53Uaci6yT89%2FUmWtBWSQIQQbn5GTb0x2yGlCkOwg1%2FfP%2F8EtpE5dCWFxvje8Ms7872FF%2F%2BeWjaNpJeiBJKWAJwQZshQ3xQ5mf2q%2BtuYYx6yE%2B5L%2B0UU4OANQY29TtqG15H9r9FyMAjv%2BoTCXuarAm7TuB8wGKXFhsi%2BCFJIi%2FWUvyAZ%2B13YYzUcGwURbBq7CUS4Vjx8JfLdxdc9JTHg6UzcEF2a7dJOksgsjDeiliZwKx8FGho%2FFiH8HAD9hW5Y5XaFmfvw6YCoURZjxfuMmqimwso8oTLUE16WpLHTlkaZKREfeczbRrEVFBXQriC0prXZK70hOmMX9NrK4XHqP0Stf7rDOdectJVflUXZLPgJkGt4PGVRtcBLYa%2BwKXUyWTloAVEaCtGU23bLXl6tmo6ISHDmG0XPlA1DBw8a5WRriGtyJFlfbT9q8C09fHgxrMibhtc4sKLMDmIxS7IqjveRUVs%2BTzAoTYCkmbDGl2dSP7GFl9z16m6bTalFxb4OgMEY8bsgSxy%2BaADu3%2FRRJas91YKi%2BQC0j6Xgwydm%2BxAY6pgGe8Gf7dLNcx7a4ceO72HJU5e1NCpPRZT5EwQVP9vgxAA8zrK9ZHW2k1wpEJVJc8Ug%2BDbYkX3JJG4E5oyUlLOJrT3t1uX9K0qhytsJwd%2FyDefPQ%2FahDREdjT5B2tEfVJ0BU9K0D6CbAFOxwI92kSd2Kaz0H8zr4wXYz3pvgF08gBaM0Cj%2BlKst7zpGC18bH69FgmsBij1t7tnPe6wcejQx4xOlcLeT1&X-Amz-Signature=584e29954cf71306ca13bfa7139822396a9791d85753f204c97875f077cbc7db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USVOFBON%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL5BkoHC2tf%2B18j9BsKy4DkLFvmWFhiGiGFUvzqb4IeAiBhHM%2BAtByjIDGGzB2YTgcPvfazTkGGmcDa34XppvA1Ryr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXgAMS0Q4nzMmRUCbKtwDV3IqBgaHz9zz0WDffx0RrXfl6Tht4xej4nQ1b2%2FRLctyLX7HTJDZslb2jY04jcu98YnUNR%2FD9qT3JhmEj8iaSM8p53Uaci6yT89%2FUmWtBWSQIQQbn5GTb0x2yGlCkOwg1%2FfP%2F8EtpE5dCWFxvje8Ms7872FF%2F%2BeWjaNpJeiBJKWAJwQZshQ3xQ5mf2q%2BtuYYx6yE%2B5L%2B0UU4OANQY29TtqG15H9r9FyMAjv%2BoTCXuarAm7TuB8wGKXFhsi%2BCFJIi%2FWUvyAZ%2B13YYzUcGwURbBq7CUS4Vjx8JfLdxdc9JTHg6UzcEF2a7dJOksgsjDeiliZwKx8FGho%2FFiH8HAD9hW5Y5XaFmfvw6YCoURZjxfuMmqimwso8oTLUE16WpLHTlkaZKREfeczbRrEVFBXQriC0prXZK70hOmMX9NrK4XHqP0Stf7rDOdectJVflUXZLPgJkGt4PGVRtcBLYa%2BwKXUyWTloAVEaCtGU23bLXl6tmo6ISHDmG0XPlA1DBw8a5WRriGtyJFlfbT9q8C09fHgxrMibhtc4sKLMDmIxS7IqjveRUVs%2BTzAoTYCkmbDGl2dSP7GFl9z16m6bTalFxb4OgMEY8bsgSxy%2BaADu3%2FRRJas91YKi%2BQC0j6Xgwydm%2BxAY6pgGe8Gf7dLNcx7a4ceO72HJU5e1NCpPRZT5EwQVP9vgxAA8zrK9ZHW2k1wpEJVJc8Ug%2BDbYkX3JJG4E5oyUlLOJrT3t1uX9K0qhytsJwd%2FyDefPQ%2FahDREdjT5B2tEfVJ0BU9K0D6CbAFOxwI92kSd2Kaz0H8zr4wXYz3pvgF08gBaM0Cj%2BlKst7zpGC18bH69FgmsBij1t7tnPe6wcejQx4xOlcLeT1&X-Amz-Signature=685684ad9fd660cf8c0bedb7e57104bd4f0909b96d083a8e1ff5eb154d09e0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USVOFBON%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL5BkoHC2tf%2B18j9BsKy4DkLFvmWFhiGiGFUvzqb4IeAiBhHM%2BAtByjIDGGzB2YTgcPvfazTkGGmcDa34XppvA1Ryr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXgAMS0Q4nzMmRUCbKtwDV3IqBgaHz9zz0WDffx0RrXfl6Tht4xej4nQ1b2%2FRLctyLX7HTJDZslb2jY04jcu98YnUNR%2FD9qT3JhmEj8iaSM8p53Uaci6yT89%2FUmWtBWSQIQQbn5GTb0x2yGlCkOwg1%2FfP%2F8EtpE5dCWFxvje8Ms7872FF%2F%2BeWjaNpJeiBJKWAJwQZshQ3xQ5mf2q%2BtuYYx6yE%2B5L%2B0UU4OANQY29TtqG15H9r9FyMAjv%2BoTCXuarAm7TuB8wGKXFhsi%2BCFJIi%2FWUvyAZ%2B13YYzUcGwURbBq7CUS4Vjx8JfLdxdc9JTHg6UzcEF2a7dJOksgsjDeiliZwKx8FGho%2FFiH8HAD9hW5Y5XaFmfvw6YCoURZjxfuMmqimwso8oTLUE16WpLHTlkaZKREfeczbRrEVFBXQriC0prXZK70hOmMX9NrK4XHqP0Stf7rDOdectJVflUXZLPgJkGt4PGVRtcBLYa%2BwKXUyWTloAVEaCtGU23bLXl6tmo6ISHDmG0XPlA1DBw8a5WRriGtyJFlfbT9q8C09fHgxrMibhtc4sKLMDmIxS7IqjveRUVs%2BTzAoTYCkmbDGl2dSP7GFl9z16m6bTalFxb4OgMEY8bsgSxy%2BaADu3%2FRRJas91YKi%2BQC0j6Xgwydm%2BxAY6pgGe8Gf7dLNcx7a4ceO72HJU5e1NCpPRZT5EwQVP9vgxAA8zrK9ZHW2k1wpEJVJc8Ug%2BDbYkX3JJG4E5oyUlLOJrT3t1uX9K0qhytsJwd%2FyDefPQ%2FahDREdjT5B2tEfVJ0BU9K0D6CbAFOxwI92kSd2Kaz0H8zr4wXYz3pvgF08gBaM0Cj%2BlKst7zpGC18bH69FgmsBij1t7tnPe6wcejQx4xOlcLeT1&X-Amz-Signature=9aeb62359d71890893b7e584d700bd4bc0a998f42d688399a108f849f0a6b3fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SMXN357%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FlRcg6BQEVZI24cJ5UO%2FPtaHSgN5OK3CYCS6f0DoqIAiAmsW71gvI%2FOGDVPde7h14X3D%2BqbUYI17exRxW%2FljyHXCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMnE1SZLst2eoU4SKcKtwDHe49Fqb8o6%2FFtchL6Kv4A4q9WoaDCukrHCGiIqc4isyxM7QrRreoo1%2BNXiSLBtZz5ajqkDMAjfhRPB%2F9grSoBZT2c4bVlncSq4q3wF7uzNwPlDPvbMRtls0u7yp9Dnmf%2B8HddlAet3Cu%2FvwdpYEqlxYxD%2F53RRGi3FE7IdevVZZ0o5%2Fx91VuhcQxemKW7C65tgUSAmLkFzvfKKLMtOW4%2F3MFYgWhpcmxyWZTF1DHU0JNaLIlT9pKVB9QAd5CnqTHxKDqX0utzT9bq2WIqOc3wFgXyTS0WYC32f99LKk6rCAyB2v%2FAhn7t%2BHdz4UdPIuUsM%2B%2B8v9mK0LO2EmQxyXE9LSDLuVUmViZdA4FjkvJYBdoRbWpHktdwcvefOoqay3ljTmj1d5tVLds8pj%2Bg12l4PK0Upzq4XPkFD9aASE5RKyDHZigUPJe9HrmToHVNEX134t9%2B6NKf%2BQzkAsHR5QeVGeKrLCtuK%2FFnEna5%2Bu%2FdXc8yOln4zYl9b9UDhHUjaH8HQklSvGtKPq7m9vv26I0P4c%2FtStGyHhudxnMIbE7U%2BWSjpOV3kruUhl%2FmCwvuTDNxzV7CLF7AOPeRI6F4DOn%2BAmN%2BgiD%2FeuHfVJqUm653luo3WFVOZv9dOOhHiwwodm%2BxAY6pgH%2B7ZAs%2Bgoiq5BOO7HAj4o71k1lGCpZJJM%2FRqbXfiXqNX00Pn4c5ILjeEyC%2F6aGLUmmttlydV%2BbhKAN%2BpS3OMKTBcNNn8Y0wdzbQEz3PU8orTs4juIN6jRIFb9KqvnXfk%2Fpp1XH8yAcbY7pJwqoJedGKntWUBOIsz7ErwQdMzY6evkn%2B6bO2MQ1G%2B47bxT9qK8HIeOtCiSeOJ8cknd6dGUd70938Lqj&X-Amz-Signature=28c7752589af1e77ffe0ccc0e93fbcee432e59bee6a1d69958399974f92dc458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USVOFBON%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL5BkoHC2tf%2B18j9BsKy4DkLFvmWFhiGiGFUvzqb4IeAiBhHM%2BAtByjIDGGzB2YTgcPvfazTkGGmcDa34XppvA1Ryr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXgAMS0Q4nzMmRUCbKtwDV3IqBgaHz9zz0WDffx0RrXfl6Tht4xej4nQ1b2%2FRLctyLX7HTJDZslb2jY04jcu98YnUNR%2FD9qT3JhmEj8iaSM8p53Uaci6yT89%2FUmWtBWSQIQQbn5GTb0x2yGlCkOwg1%2FfP%2F8EtpE5dCWFxvje8Ms7872FF%2F%2BeWjaNpJeiBJKWAJwQZshQ3xQ5mf2q%2BtuYYx6yE%2B5L%2B0UU4OANQY29TtqG15H9r9FyMAjv%2BoTCXuarAm7TuB8wGKXFhsi%2BCFJIi%2FWUvyAZ%2B13YYzUcGwURbBq7CUS4Vjx8JfLdxdc9JTHg6UzcEF2a7dJOksgsjDeiliZwKx8FGho%2FFiH8HAD9hW5Y5XaFmfvw6YCoURZjxfuMmqimwso8oTLUE16WpLHTlkaZKREfeczbRrEVFBXQriC0prXZK70hOmMX9NrK4XHqP0Stf7rDOdectJVflUXZLPgJkGt4PGVRtcBLYa%2BwKXUyWTloAVEaCtGU23bLXl6tmo6ISHDmG0XPlA1DBw8a5WRriGtyJFlfbT9q8C09fHgxrMibhtc4sKLMDmIxS7IqjveRUVs%2BTzAoTYCkmbDGl2dSP7GFl9z16m6bTalFxb4OgMEY8bsgSxy%2BaADu3%2FRRJas91YKi%2BQC0j6Xgwydm%2BxAY6pgGe8Gf7dLNcx7a4ceO72HJU5e1NCpPRZT5EwQVP9vgxAA8zrK9ZHW2k1wpEJVJc8Ug%2BDbYkX3JJG4E5oyUlLOJrT3t1uX9K0qhytsJwd%2FyDefPQ%2FahDREdjT5B2tEfVJ0BU9K0D6CbAFOxwI92kSd2Kaz0H8zr4wXYz3pvgF08gBaM0Cj%2BlKst7zpGC18bH69FgmsBij1t7tnPe6wcejQx4xOlcLeT1&X-Amz-Signature=8727030323d1dc0ee44f8b6fb5d8f77a0e5cde9148b8a7adac03e33541e265f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574TWM67%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAl2EvTYXGl9K%2BKY2tbiB4mFD7fMoj%2FTxSJIbgh5HEAzAiAa%2FAsFAWTEQDUeIxX0bLkjtj5OaprwJktoWbJWYso14Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMPO3JCrxbhZhZK7cQKtwDZfjwVgnlonAEGFD6MqJxsxSXyng36wlHi2aVuXDuxgYo4eoU4f77MuwCV5T8oqooWr27p3yNo%2FC542A1wFDprNzktmqXb%2BgW7Tw70%2BPMIaL8Xw8M30KTdehSN1j5gNO1xTAM2lHjyVpkjJ%2BMFNdRt219UHf7NVVa0l%2BegM9vQaMdA2MSdeSHYweCpk3uipsXg%2FDPBWDyvrpTfyxuC65ysbDnjURC2H2hGcv7ARr3KKGUFFgE2NIXjltL3H0C4QPvZYbML00Mbmdx4G2oPYZXOq%2BzbSTrIjtmWEY12SuWU%2B2aUZaWdwzVUA0IRepUEpCn55D72K3Jih9RSJzH6%2FhmHJvjImEJ9khxAmOtSavk8b9KMoEgakoq5Kmb2iUNWu%2BSjlUTgXCoBX9%2FrGcD8Kn5qvEjiM487oY0UByAfhoNil%2B9r56R23fuJ1hDxAfZUrKqELtQhZbwbhLkQrkAdGcvjTWQPZy0w%2FUvwv2t6d3jN39Q6H6GmIkFmwUix%2Bi3%2FzvYaw9jBX4X9UV7x3vp6TBES4wTA6Hv3CYSGfdYuoAJF9lIHL2atcsGdrMGwplmfuxq9CVGKmbUySIqRYCFQZyRxmte93jQ44us0DBF5iYpdPEFDg4umSwN81MVjJwwwNm%2BxAY6pgGtkUQBUxpJZdfAclCDaESKTMQt1jS2%2F303Cbb9dpnqMN69Jz%2F2csWN0pTbV4RUehH6WXyj77zMs%2F%2BkgZsl1jN18gSSJHzGHzCZZ%2Fh1U7VxSdN%2FcLl3K1j6t8pLURgPyMGNGuvp%2FoECkNedg5YmqsIUfeCia0oEgEpY8NATngsxxs4NwOCBPfCy8xotUtiKoteG01n%2BLpkYDxkj7JduAb6zmnWnSu6j&X-Amz-Signature=42cec1396834086ab6fdc07fe7e12163d77ec01d149f6adb7595dd8687ad0c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574TWM67%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAl2EvTYXGl9K%2BKY2tbiB4mFD7fMoj%2FTxSJIbgh5HEAzAiAa%2FAsFAWTEQDUeIxX0bLkjtj5OaprwJktoWbJWYso14Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMPO3JCrxbhZhZK7cQKtwDZfjwVgnlonAEGFD6MqJxsxSXyng36wlHi2aVuXDuxgYo4eoU4f77MuwCV5T8oqooWr27p3yNo%2FC542A1wFDprNzktmqXb%2BgW7Tw70%2BPMIaL8Xw8M30KTdehSN1j5gNO1xTAM2lHjyVpkjJ%2BMFNdRt219UHf7NVVa0l%2BegM9vQaMdA2MSdeSHYweCpk3uipsXg%2FDPBWDyvrpTfyxuC65ysbDnjURC2H2hGcv7ARr3KKGUFFgE2NIXjltL3H0C4QPvZYbML00Mbmdx4G2oPYZXOq%2BzbSTrIjtmWEY12SuWU%2B2aUZaWdwzVUA0IRepUEpCn55D72K3Jih9RSJzH6%2FhmHJvjImEJ9khxAmOtSavk8b9KMoEgakoq5Kmb2iUNWu%2BSjlUTgXCoBX9%2FrGcD8Kn5qvEjiM487oY0UByAfhoNil%2B9r56R23fuJ1hDxAfZUrKqELtQhZbwbhLkQrkAdGcvjTWQPZy0w%2FUvwv2t6d3jN39Q6H6GmIkFmwUix%2Bi3%2FzvYaw9jBX4X9UV7x3vp6TBES4wTA6Hv3CYSGfdYuoAJF9lIHL2atcsGdrMGwplmfuxq9CVGKmbUySIqRYCFQZyRxmte93jQ44us0DBF5iYpdPEFDg4umSwN81MVjJwwwNm%2BxAY6pgGtkUQBUxpJZdfAclCDaESKTMQt1jS2%2F303Cbb9dpnqMN69Jz%2F2csWN0pTbV4RUehH6WXyj77zMs%2F%2BkgZsl1jN18gSSJHzGHzCZZ%2Fh1U7VxSdN%2FcLl3K1j6t8pLURgPyMGNGuvp%2FoECkNedg5YmqsIUfeCia0oEgEpY8NATngsxxs4NwOCBPfCy8xotUtiKoteG01n%2BLpkYDxkj7JduAb6zmnWnSu6j&X-Amz-Signature=fc50f0dd9181612eea725a645dc1379c3e8dcd823ba9895f79ed6eeca7c956a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574TWM67%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAl2EvTYXGl9K%2BKY2tbiB4mFD7fMoj%2FTxSJIbgh5HEAzAiAa%2FAsFAWTEQDUeIxX0bLkjtj5OaprwJktoWbJWYso14Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMPO3JCrxbhZhZK7cQKtwDZfjwVgnlonAEGFD6MqJxsxSXyng36wlHi2aVuXDuxgYo4eoU4f77MuwCV5T8oqooWr27p3yNo%2FC542A1wFDprNzktmqXb%2BgW7Tw70%2BPMIaL8Xw8M30KTdehSN1j5gNO1xTAM2lHjyVpkjJ%2BMFNdRt219UHf7NVVa0l%2BegM9vQaMdA2MSdeSHYweCpk3uipsXg%2FDPBWDyvrpTfyxuC65ysbDnjURC2H2hGcv7ARr3KKGUFFgE2NIXjltL3H0C4QPvZYbML00Mbmdx4G2oPYZXOq%2BzbSTrIjtmWEY12SuWU%2B2aUZaWdwzVUA0IRepUEpCn55D72K3Jih9RSJzH6%2FhmHJvjImEJ9khxAmOtSavk8b9KMoEgakoq5Kmb2iUNWu%2BSjlUTgXCoBX9%2FrGcD8Kn5qvEjiM487oY0UByAfhoNil%2B9r56R23fuJ1hDxAfZUrKqELtQhZbwbhLkQrkAdGcvjTWQPZy0w%2FUvwv2t6d3jN39Q6H6GmIkFmwUix%2Bi3%2FzvYaw9jBX4X9UV7x3vp6TBES4wTA6Hv3CYSGfdYuoAJF9lIHL2atcsGdrMGwplmfuxq9CVGKmbUySIqRYCFQZyRxmte93jQ44us0DBF5iYpdPEFDg4umSwN81MVjJwwwNm%2BxAY6pgGtkUQBUxpJZdfAclCDaESKTMQt1jS2%2F303Cbb9dpnqMN69Jz%2F2csWN0pTbV4RUehH6WXyj77zMs%2F%2BkgZsl1jN18gSSJHzGHzCZZ%2Fh1U7VxSdN%2FcLl3K1j6t8pLURgPyMGNGuvp%2FoECkNedg5YmqsIUfeCia0oEgEpY8NATngsxxs4NwOCBPfCy8xotUtiKoteG01n%2BLpkYDxkj7JduAb6zmnWnSu6j&X-Amz-Signature=e5c63b09b1fc1513257fc119cb35f049a87a491763e73a464be98ea79637e1d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574TWM67%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAl2EvTYXGl9K%2BKY2tbiB4mFD7fMoj%2FTxSJIbgh5HEAzAiAa%2FAsFAWTEQDUeIxX0bLkjtj5OaprwJktoWbJWYso14Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMPO3JCrxbhZhZK7cQKtwDZfjwVgnlonAEGFD6MqJxsxSXyng36wlHi2aVuXDuxgYo4eoU4f77MuwCV5T8oqooWr27p3yNo%2FC542A1wFDprNzktmqXb%2BgW7Tw70%2BPMIaL8Xw8M30KTdehSN1j5gNO1xTAM2lHjyVpkjJ%2BMFNdRt219UHf7NVVa0l%2BegM9vQaMdA2MSdeSHYweCpk3uipsXg%2FDPBWDyvrpTfyxuC65ysbDnjURC2H2hGcv7ARr3KKGUFFgE2NIXjltL3H0C4QPvZYbML00Mbmdx4G2oPYZXOq%2BzbSTrIjtmWEY12SuWU%2B2aUZaWdwzVUA0IRepUEpCn55D72K3Jih9RSJzH6%2FhmHJvjImEJ9khxAmOtSavk8b9KMoEgakoq5Kmb2iUNWu%2BSjlUTgXCoBX9%2FrGcD8Kn5qvEjiM487oY0UByAfhoNil%2B9r56R23fuJ1hDxAfZUrKqELtQhZbwbhLkQrkAdGcvjTWQPZy0w%2FUvwv2t6d3jN39Q6H6GmIkFmwUix%2Bi3%2FzvYaw9jBX4X9UV7x3vp6TBES4wTA6Hv3CYSGfdYuoAJF9lIHL2atcsGdrMGwplmfuxq9CVGKmbUySIqRYCFQZyRxmte93jQ44us0DBF5iYpdPEFDg4umSwN81MVjJwwwNm%2BxAY6pgGtkUQBUxpJZdfAclCDaESKTMQt1jS2%2F303Cbb9dpnqMN69Jz%2F2csWN0pTbV4RUehH6WXyj77zMs%2F%2BkgZsl1jN18gSSJHzGHzCZZ%2Fh1U7VxSdN%2FcLl3K1j6t8pLURgPyMGNGuvp%2FoECkNedg5YmqsIUfeCia0oEgEpY8NATngsxxs4NwOCBPfCy8xotUtiKoteG01n%2BLpkYDxkj7JduAb6zmnWnSu6j&X-Amz-Signature=6a240660b63229fc6c0398c8d6d83402ef001774ae2196ca500d176b088657d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574TWM67%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAl2EvTYXGl9K%2BKY2tbiB4mFD7fMoj%2FTxSJIbgh5HEAzAiAa%2FAsFAWTEQDUeIxX0bLkjtj5OaprwJktoWbJWYso14Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMPO3JCrxbhZhZK7cQKtwDZfjwVgnlonAEGFD6MqJxsxSXyng36wlHi2aVuXDuxgYo4eoU4f77MuwCV5T8oqooWr27p3yNo%2FC542A1wFDprNzktmqXb%2BgW7Tw70%2BPMIaL8Xw8M30KTdehSN1j5gNO1xTAM2lHjyVpkjJ%2BMFNdRt219UHf7NVVa0l%2BegM9vQaMdA2MSdeSHYweCpk3uipsXg%2FDPBWDyvrpTfyxuC65ysbDnjURC2H2hGcv7ARr3KKGUFFgE2NIXjltL3H0C4QPvZYbML00Mbmdx4G2oPYZXOq%2BzbSTrIjtmWEY12SuWU%2B2aUZaWdwzVUA0IRepUEpCn55D72K3Jih9RSJzH6%2FhmHJvjImEJ9khxAmOtSavk8b9KMoEgakoq5Kmb2iUNWu%2BSjlUTgXCoBX9%2FrGcD8Kn5qvEjiM487oY0UByAfhoNil%2B9r56R23fuJ1hDxAfZUrKqELtQhZbwbhLkQrkAdGcvjTWQPZy0w%2FUvwv2t6d3jN39Q6H6GmIkFmwUix%2Bi3%2FzvYaw9jBX4X9UV7x3vp6TBES4wTA6Hv3CYSGfdYuoAJF9lIHL2atcsGdrMGwplmfuxq9CVGKmbUySIqRYCFQZyRxmte93jQ44us0DBF5iYpdPEFDg4umSwN81MVjJwwwNm%2BxAY6pgGtkUQBUxpJZdfAclCDaESKTMQt1jS2%2F303Cbb9dpnqMN69Jz%2F2csWN0pTbV4RUehH6WXyj77zMs%2F%2BkgZsl1jN18gSSJHzGHzCZZ%2Fh1U7VxSdN%2FcLl3K1j6t8pLURgPyMGNGuvp%2FoECkNedg5YmqsIUfeCia0oEgEpY8NATngsxxs4NwOCBPfCy8xotUtiKoteG01n%2BLpkYDxkj7JduAb6zmnWnSu6j&X-Amz-Signature=f54aef28431522045248b4e5f6b49828b346b58d5316a07cc5e74ccf4f44862a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574TWM67%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAl2EvTYXGl9K%2BKY2tbiB4mFD7fMoj%2FTxSJIbgh5HEAzAiAa%2FAsFAWTEQDUeIxX0bLkjtj5OaprwJktoWbJWYso14Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMPO3JCrxbhZhZK7cQKtwDZfjwVgnlonAEGFD6MqJxsxSXyng36wlHi2aVuXDuxgYo4eoU4f77MuwCV5T8oqooWr27p3yNo%2FC542A1wFDprNzktmqXb%2BgW7Tw70%2BPMIaL8Xw8M30KTdehSN1j5gNO1xTAM2lHjyVpkjJ%2BMFNdRt219UHf7NVVa0l%2BegM9vQaMdA2MSdeSHYweCpk3uipsXg%2FDPBWDyvrpTfyxuC65ysbDnjURC2H2hGcv7ARr3KKGUFFgE2NIXjltL3H0C4QPvZYbML00Mbmdx4G2oPYZXOq%2BzbSTrIjtmWEY12SuWU%2B2aUZaWdwzVUA0IRepUEpCn55D72K3Jih9RSJzH6%2FhmHJvjImEJ9khxAmOtSavk8b9KMoEgakoq5Kmb2iUNWu%2BSjlUTgXCoBX9%2FrGcD8Kn5qvEjiM487oY0UByAfhoNil%2B9r56R23fuJ1hDxAfZUrKqELtQhZbwbhLkQrkAdGcvjTWQPZy0w%2FUvwv2t6d3jN39Q6H6GmIkFmwUix%2Bi3%2FzvYaw9jBX4X9UV7x3vp6TBES4wTA6Hv3CYSGfdYuoAJF9lIHL2atcsGdrMGwplmfuxq9CVGKmbUySIqRYCFQZyRxmte93jQ44us0DBF5iYpdPEFDg4umSwN81MVjJwwwNm%2BxAY6pgGtkUQBUxpJZdfAclCDaESKTMQt1jS2%2F303Cbb9dpnqMN69Jz%2F2csWN0pTbV4RUehH6WXyj77zMs%2F%2BkgZsl1jN18gSSJHzGHzCZZ%2Fh1U7VxSdN%2FcLl3K1j6t8pLURgPyMGNGuvp%2FoECkNedg5YmqsIUfeCia0oEgEpY8NATngsxxs4NwOCBPfCy8xotUtiKoteG01n%2BLpkYDxkj7JduAb6zmnWnSu6j&X-Amz-Signature=97fa3a6cf00d1d01e2e91307fe4869e3bbe2e87165e2b92b4858fa448daf222d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574TWM67%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAl2EvTYXGl9K%2BKY2tbiB4mFD7fMoj%2FTxSJIbgh5HEAzAiAa%2FAsFAWTEQDUeIxX0bLkjtj5OaprwJktoWbJWYso14Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMPO3JCrxbhZhZK7cQKtwDZfjwVgnlonAEGFD6MqJxsxSXyng36wlHi2aVuXDuxgYo4eoU4f77MuwCV5T8oqooWr27p3yNo%2FC542A1wFDprNzktmqXb%2BgW7Tw70%2BPMIaL8Xw8M30KTdehSN1j5gNO1xTAM2lHjyVpkjJ%2BMFNdRt219UHf7NVVa0l%2BegM9vQaMdA2MSdeSHYweCpk3uipsXg%2FDPBWDyvrpTfyxuC65ysbDnjURC2H2hGcv7ARr3KKGUFFgE2NIXjltL3H0C4QPvZYbML00Mbmdx4G2oPYZXOq%2BzbSTrIjtmWEY12SuWU%2B2aUZaWdwzVUA0IRepUEpCn55D72K3Jih9RSJzH6%2FhmHJvjImEJ9khxAmOtSavk8b9KMoEgakoq5Kmb2iUNWu%2BSjlUTgXCoBX9%2FrGcD8Kn5qvEjiM487oY0UByAfhoNil%2B9r56R23fuJ1hDxAfZUrKqELtQhZbwbhLkQrkAdGcvjTWQPZy0w%2FUvwv2t6d3jN39Q6H6GmIkFmwUix%2Bi3%2FzvYaw9jBX4X9UV7x3vp6TBES4wTA6Hv3CYSGfdYuoAJF9lIHL2atcsGdrMGwplmfuxq9CVGKmbUySIqRYCFQZyRxmte93jQ44us0DBF5iYpdPEFDg4umSwN81MVjJwwwNm%2BxAY6pgGtkUQBUxpJZdfAclCDaESKTMQt1jS2%2F303Cbb9dpnqMN69Jz%2F2csWN0pTbV4RUehH6WXyj77zMs%2F%2BkgZsl1jN18gSSJHzGHzCZZ%2Fh1U7VxSdN%2FcLl3K1j6t8pLURgPyMGNGuvp%2FoECkNedg5YmqsIUfeCia0oEgEpY8NATngsxxs4NwOCBPfCy8xotUtiKoteG01n%2BLpkYDxkj7JduAb6zmnWnSu6j&X-Amz-Signature=00a28fe2d79c07f408b70d5bec06aee1ed2e764665d5f488796a60264893a3df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574TWM67%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAl2EvTYXGl9K%2BKY2tbiB4mFD7fMoj%2FTxSJIbgh5HEAzAiAa%2FAsFAWTEQDUeIxX0bLkjtj5OaprwJktoWbJWYso14Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMPO3JCrxbhZhZK7cQKtwDZfjwVgnlonAEGFD6MqJxsxSXyng36wlHi2aVuXDuxgYo4eoU4f77MuwCV5T8oqooWr27p3yNo%2FC542A1wFDprNzktmqXb%2BgW7Tw70%2BPMIaL8Xw8M30KTdehSN1j5gNO1xTAM2lHjyVpkjJ%2BMFNdRt219UHf7NVVa0l%2BegM9vQaMdA2MSdeSHYweCpk3uipsXg%2FDPBWDyvrpTfyxuC65ysbDnjURC2H2hGcv7ARr3KKGUFFgE2NIXjltL3H0C4QPvZYbML00Mbmdx4G2oPYZXOq%2BzbSTrIjtmWEY12SuWU%2B2aUZaWdwzVUA0IRepUEpCn55D72K3Jih9RSJzH6%2FhmHJvjImEJ9khxAmOtSavk8b9KMoEgakoq5Kmb2iUNWu%2BSjlUTgXCoBX9%2FrGcD8Kn5qvEjiM487oY0UByAfhoNil%2B9r56R23fuJ1hDxAfZUrKqELtQhZbwbhLkQrkAdGcvjTWQPZy0w%2FUvwv2t6d3jN39Q6H6GmIkFmwUix%2Bi3%2FzvYaw9jBX4X9UV7x3vp6TBES4wTA6Hv3CYSGfdYuoAJF9lIHL2atcsGdrMGwplmfuxq9CVGKmbUySIqRYCFQZyRxmte93jQ44us0DBF5iYpdPEFDg4umSwN81MVjJwwwNm%2BxAY6pgGtkUQBUxpJZdfAclCDaESKTMQt1jS2%2F303Cbb9dpnqMN69Jz%2F2csWN0pTbV4RUehH6WXyj77zMs%2F%2BkgZsl1jN18gSSJHzGHzCZZ%2Fh1U7VxSdN%2FcLl3K1j6t8pLURgPyMGNGuvp%2FoECkNedg5YmqsIUfeCia0oEgEpY8NATngsxxs4NwOCBPfCy8xotUtiKoteG01n%2BLpkYDxkj7JduAb6zmnWnSu6j&X-Amz-Signature=1db1409cb3d4c8707052a80129cd1b177d353287ae79c42b74fa0e98a0c2b761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
