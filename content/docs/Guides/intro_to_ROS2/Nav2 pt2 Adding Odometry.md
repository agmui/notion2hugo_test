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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY57W67V%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGF5biwWRG%2FE0s96xH0PokKPceph%2BycGxIi5xyAmJUzgIgM2TmQ8wzJbrtfCtPes4obHy9sSMKsApvCZHmVjdqfwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8vfcMxusoNAnDDDSrcA4oB7FxZzgaCnBLsmL2vYQ%2FmKf1cP%2BhhsTmfw9okR5hjAqwdGPd%2Ff4PgOYD4gJHdN1WVu4dC69tixBzbw81i3ltAYCtK8q1l1ETBmIiA%2B1iNNiikm2%2F8AfHgjEbIGqKRde62BLCHnCri0zfnTwVZZVSii%2Bz3cOSr%2Bn5zY5K70QBPqbiXXKcoCZyQs8pPD4hQkUraVYxR8FpbEFU26p5bnyqrw8ndNvLwrswK7stY76OftXJhVY%2BXbs91Qir7%2B0Pqlzu4vK3gWY%2F%2FuL3BJ7r1rtNz9KKw9EJKY7d3b88Gs2ikhqP7XcnJHcfSB2aehU4qGtHYqsxmSchSQaJynPa%2FDJX%2Bgvjvg56bHyUkic6bgx80tA4TYQxAQZHrcDmrheHmA9ZFMbZyDnG%2BPKWymUa5Q11gTwvJpoYJcfDCFnQHxzoG6UUNFStIhk7bZmUd9RzIBHS1FVVEXzlSWzkG8MoByDGWJd4kb3O8TYaDwKADN1PI53bgWEzVPfixkqGI4o1axMsMSsflRT0GxUE%2FD7XS8RZbteWGX5pI%2BcOEdpHpQhP4oqvH7sO4C6qM2CrFetGPmF9K9ilyrsDNWekQjZ2u1FqwkdjiHffWCqq9HaYkMv3fD2A2d3qWZO30L%2FnDMJKd5cQGOqUB7DJaxEKfCt50wCLXNCGJi3OjHb6iFi79hwFiqlMLeAxrANUCIx2ddDbBbYsGZo8Hs1cfEnvqk9eTDLRncTOP6ZbzEfsBELaENdwZ3lQKsLSe69czrDSbp3pwOjaW0oYR3aJPKhT23xJMErcVofjO0ipfnPUzZMCwoYrFFwtDqDJ4gkdx3p6DWiw5grf6j4Dx%2FIhU9hdj%2B6Ncmj4Wo4IyAn0cgq%2Fz&X-Amz-Signature=a8ac19b8fb2f9e6bf2a45aa41969fb0d4d789a6bd186deaa146a6322e5347a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY57W67V%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGF5biwWRG%2FE0s96xH0PokKPceph%2BycGxIi5xyAmJUzgIgM2TmQ8wzJbrtfCtPes4obHy9sSMKsApvCZHmVjdqfwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8vfcMxusoNAnDDDSrcA4oB7FxZzgaCnBLsmL2vYQ%2FmKf1cP%2BhhsTmfw9okR5hjAqwdGPd%2Ff4PgOYD4gJHdN1WVu4dC69tixBzbw81i3ltAYCtK8q1l1ETBmIiA%2B1iNNiikm2%2F8AfHgjEbIGqKRde62BLCHnCri0zfnTwVZZVSii%2Bz3cOSr%2Bn5zY5K70QBPqbiXXKcoCZyQs8pPD4hQkUraVYxR8FpbEFU26p5bnyqrw8ndNvLwrswK7stY76OftXJhVY%2BXbs91Qir7%2B0Pqlzu4vK3gWY%2F%2FuL3BJ7r1rtNz9KKw9EJKY7d3b88Gs2ikhqP7XcnJHcfSB2aehU4qGtHYqsxmSchSQaJynPa%2FDJX%2Bgvjvg56bHyUkic6bgx80tA4TYQxAQZHrcDmrheHmA9ZFMbZyDnG%2BPKWymUa5Q11gTwvJpoYJcfDCFnQHxzoG6UUNFStIhk7bZmUd9RzIBHS1FVVEXzlSWzkG8MoByDGWJd4kb3O8TYaDwKADN1PI53bgWEzVPfixkqGI4o1axMsMSsflRT0GxUE%2FD7XS8RZbteWGX5pI%2BcOEdpHpQhP4oqvH7sO4C6qM2CrFetGPmF9K9ilyrsDNWekQjZ2u1FqwkdjiHffWCqq9HaYkMv3fD2A2d3qWZO30L%2FnDMJKd5cQGOqUB7DJaxEKfCt50wCLXNCGJi3OjHb6iFi79hwFiqlMLeAxrANUCIx2ddDbBbYsGZo8Hs1cfEnvqk9eTDLRncTOP6ZbzEfsBELaENdwZ3lQKsLSe69czrDSbp3pwOjaW0oYR3aJPKhT23xJMErcVofjO0ipfnPUzZMCwoYrFFwtDqDJ4gkdx3p6DWiw5grf6j4Dx%2FIhU9hdj%2B6Ncmj4Wo4IyAn0cgq%2Fz&X-Amz-Signature=77c5cecaa33a98b077e56f4fe59c63fd8a5d14f9abbb6bcc26749f6e08daf009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY57W67V%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGF5biwWRG%2FE0s96xH0PokKPceph%2BycGxIi5xyAmJUzgIgM2TmQ8wzJbrtfCtPes4obHy9sSMKsApvCZHmVjdqfwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8vfcMxusoNAnDDDSrcA4oB7FxZzgaCnBLsmL2vYQ%2FmKf1cP%2BhhsTmfw9okR5hjAqwdGPd%2Ff4PgOYD4gJHdN1WVu4dC69tixBzbw81i3ltAYCtK8q1l1ETBmIiA%2B1iNNiikm2%2F8AfHgjEbIGqKRde62BLCHnCri0zfnTwVZZVSii%2Bz3cOSr%2Bn5zY5K70QBPqbiXXKcoCZyQs8pPD4hQkUraVYxR8FpbEFU26p5bnyqrw8ndNvLwrswK7stY76OftXJhVY%2BXbs91Qir7%2B0Pqlzu4vK3gWY%2F%2FuL3BJ7r1rtNz9KKw9EJKY7d3b88Gs2ikhqP7XcnJHcfSB2aehU4qGtHYqsxmSchSQaJynPa%2FDJX%2Bgvjvg56bHyUkic6bgx80tA4TYQxAQZHrcDmrheHmA9ZFMbZyDnG%2BPKWymUa5Q11gTwvJpoYJcfDCFnQHxzoG6UUNFStIhk7bZmUd9RzIBHS1FVVEXzlSWzkG8MoByDGWJd4kb3O8TYaDwKADN1PI53bgWEzVPfixkqGI4o1axMsMSsflRT0GxUE%2FD7XS8RZbteWGX5pI%2BcOEdpHpQhP4oqvH7sO4C6qM2CrFetGPmF9K9ilyrsDNWekQjZ2u1FqwkdjiHffWCqq9HaYkMv3fD2A2d3qWZO30L%2FnDMJKd5cQGOqUB7DJaxEKfCt50wCLXNCGJi3OjHb6iFi79hwFiqlMLeAxrANUCIx2ddDbBbYsGZo8Hs1cfEnvqk9eTDLRncTOP6ZbzEfsBELaENdwZ3lQKsLSe69czrDSbp3pwOjaW0oYR3aJPKhT23xJMErcVofjO0ipfnPUzZMCwoYrFFwtDqDJ4gkdx3p6DWiw5grf6j4Dx%2FIhU9hdj%2B6Ncmj4Wo4IyAn0cgq%2Fz&X-Amz-Signature=6a8e74982fbf51b25fe8fa08d561183516d4349d8391b2352652a945e10725ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY57W67V%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGF5biwWRG%2FE0s96xH0PokKPceph%2BycGxIi5xyAmJUzgIgM2TmQ8wzJbrtfCtPes4obHy9sSMKsApvCZHmVjdqfwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8vfcMxusoNAnDDDSrcA4oB7FxZzgaCnBLsmL2vYQ%2FmKf1cP%2BhhsTmfw9okR5hjAqwdGPd%2Ff4PgOYD4gJHdN1WVu4dC69tixBzbw81i3ltAYCtK8q1l1ETBmIiA%2B1iNNiikm2%2F8AfHgjEbIGqKRde62BLCHnCri0zfnTwVZZVSii%2Bz3cOSr%2Bn5zY5K70QBPqbiXXKcoCZyQs8pPD4hQkUraVYxR8FpbEFU26p5bnyqrw8ndNvLwrswK7stY76OftXJhVY%2BXbs91Qir7%2B0Pqlzu4vK3gWY%2F%2FuL3BJ7r1rtNz9KKw9EJKY7d3b88Gs2ikhqP7XcnJHcfSB2aehU4qGtHYqsxmSchSQaJynPa%2FDJX%2Bgvjvg56bHyUkic6bgx80tA4TYQxAQZHrcDmrheHmA9ZFMbZyDnG%2BPKWymUa5Q11gTwvJpoYJcfDCFnQHxzoG6UUNFStIhk7bZmUd9RzIBHS1FVVEXzlSWzkG8MoByDGWJd4kb3O8TYaDwKADN1PI53bgWEzVPfixkqGI4o1axMsMSsflRT0GxUE%2FD7XS8RZbteWGX5pI%2BcOEdpHpQhP4oqvH7sO4C6qM2CrFetGPmF9K9ilyrsDNWekQjZ2u1FqwkdjiHffWCqq9HaYkMv3fD2A2d3qWZO30L%2FnDMJKd5cQGOqUB7DJaxEKfCt50wCLXNCGJi3OjHb6iFi79hwFiqlMLeAxrANUCIx2ddDbBbYsGZo8Hs1cfEnvqk9eTDLRncTOP6ZbzEfsBELaENdwZ3lQKsLSe69czrDSbp3pwOjaW0oYR3aJPKhT23xJMErcVofjO0ipfnPUzZMCwoYrFFwtDqDJ4gkdx3p6DWiw5grf6j4Dx%2FIhU9hdj%2B6Ncmj4Wo4IyAn0cgq%2Fz&X-Amz-Signature=7f9997a5b3c539c096f0f2d85408de479f849993b02a7e177c4260e191b904db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY57W67V%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGF5biwWRG%2FE0s96xH0PokKPceph%2BycGxIi5xyAmJUzgIgM2TmQ8wzJbrtfCtPes4obHy9sSMKsApvCZHmVjdqfwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8vfcMxusoNAnDDDSrcA4oB7FxZzgaCnBLsmL2vYQ%2FmKf1cP%2BhhsTmfw9okR5hjAqwdGPd%2Ff4PgOYD4gJHdN1WVu4dC69tixBzbw81i3ltAYCtK8q1l1ETBmIiA%2B1iNNiikm2%2F8AfHgjEbIGqKRde62BLCHnCri0zfnTwVZZVSii%2Bz3cOSr%2Bn5zY5K70QBPqbiXXKcoCZyQs8pPD4hQkUraVYxR8FpbEFU26p5bnyqrw8ndNvLwrswK7stY76OftXJhVY%2BXbs91Qir7%2B0Pqlzu4vK3gWY%2F%2FuL3BJ7r1rtNz9KKw9EJKY7d3b88Gs2ikhqP7XcnJHcfSB2aehU4qGtHYqsxmSchSQaJynPa%2FDJX%2Bgvjvg56bHyUkic6bgx80tA4TYQxAQZHrcDmrheHmA9ZFMbZyDnG%2BPKWymUa5Q11gTwvJpoYJcfDCFnQHxzoG6UUNFStIhk7bZmUd9RzIBHS1FVVEXzlSWzkG8MoByDGWJd4kb3O8TYaDwKADN1PI53bgWEzVPfixkqGI4o1axMsMSsflRT0GxUE%2FD7XS8RZbteWGX5pI%2BcOEdpHpQhP4oqvH7sO4C6qM2CrFetGPmF9K9ilyrsDNWekQjZ2u1FqwkdjiHffWCqq9HaYkMv3fD2A2d3qWZO30L%2FnDMJKd5cQGOqUB7DJaxEKfCt50wCLXNCGJi3OjHb6iFi79hwFiqlMLeAxrANUCIx2ddDbBbYsGZo8Hs1cfEnvqk9eTDLRncTOP6ZbzEfsBELaENdwZ3lQKsLSe69czrDSbp3pwOjaW0oYR3aJPKhT23xJMErcVofjO0ipfnPUzZMCwoYrFFwtDqDJ4gkdx3p6DWiw5grf6j4Dx%2FIhU9hdj%2B6Ncmj4Wo4IyAn0cgq%2Fz&X-Amz-Signature=61b11f8c509311fb221226671d57ce11f4e32e6d0b5cee6dbed8b3d60e16146c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY57W67V%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGF5biwWRG%2FE0s96xH0PokKPceph%2BycGxIi5xyAmJUzgIgM2TmQ8wzJbrtfCtPes4obHy9sSMKsApvCZHmVjdqfwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8vfcMxusoNAnDDDSrcA4oB7FxZzgaCnBLsmL2vYQ%2FmKf1cP%2BhhsTmfw9okR5hjAqwdGPd%2Ff4PgOYD4gJHdN1WVu4dC69tixBzbw81i3ltAYCtK8q1l1ETBmIiA%2B1iNNiikm2%2F8AfHgjEbIGqKRde62BLCHnCri0zfnTwVZZVSii%2Bz3cOSr%2Bn5zY5K70QBPqbiXXKcoCZyQs8pPD4hQkUraVYxR8FpbEFU26p5bnyqrw8ndNvLwrswK7stY76OftXJhVY%2BXbs91Qir7%2B0Pqlzu4vK3gWY%2F%2FuL3BJ7r1rtNz9KKw9EJKY7d3b88Gs2ikhqP7XcnJHcfSB2aehU4qGtHYqsxmSchSQaJynPa%2FDJX%2Bgvjvg56bHyUkic6bgx80tA4TYQxAQZHrcDmrheHmA9ZFMbZyDnG%2BPKWymUa5Q11gTwvJpoYJcfDCFnQHxzoG6UUNFStIhk7bZmUd9RzIBHS1FVVEXzlSWzkG8MoByDGWJd4kb3O8TYaDwKADN1PI53bgWEzVPfixkqGI4o1axMsMSsflRT0GxUE%2FD7XS8RZbteWGX5pI%2BcOEdpHpQhP4oqvH7sO4C6qM2CrFetGPmF9K9ilyrsDNWekQjZ2u1FqwkdjiHffWCqq9HaYkMv3fD2A2d3qWZO30L%2FnDMJKd5cQGOqUB7DJaxEKfCt50wCLXNCGJi3OjHb6iFi79hwFiqlMLeAxrANUCIx2ddDbBbYsGZo8Hs1cfEnvqk9eTDLRncTOP6ZbzEfsBELaENdwZ3lQKsLSe69czrDSbp3pwOjaW0oYR3aJPKhT23xJMErcVofjO0ipfnPUzZMCwoYrFFwtDqDJ4gkdx3p6DWiw5grf6j4Dx%2FIhU9hdj%2B6Ncmj4Wo4IyAn0cgq%2Fz&X-Amz-Signature=6fb2127ca337337784ccfb927a14279a6c37b3fc1e6293e83eafcad2c916336c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY57W67V%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGF5biwWRG%2FE0s96xH0PokKPceph%2BycGxIi5xyAmJUzgIgM2TmQ8wzJbrtfCtPes4obHy9sSMKsApvCZHmVjdqfwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8vfcMxusoNAnDDDSrcA4oB7FxZzgaCnBLsmL2vYQ%2FmKf1cP%2BhhsTmfw9okR5hjAqwdGPd%2Ff4PgOYD4gJHdN1WVu4dC69tixBzbw81i3ltAYCtK8q1l1ETBmIiA%2B1iNNiikm2%2F8AfHgjEbIGqKRde62BLCHnCri0zfnTwVZZVSii%2Bz3cOSr%2Bn5zY5K70QBPqbiXXKcoCZyQs8pPD4hQkUraVYxR8FpbEFU26p5bnyqrw8ndNvLwrswK7stY76OftXJhVY%2BXbs91Qir7%2B0Pqlzu4vK3gWY%2F%2FuL3BJ7r1rtNz9KKw9EJKY7d3b88Gs2ikhqP7XcnJHcfSB2aehU4qGtHYqsxmSchSQaJynPa%2FDJX%2Bgvjvg56bHyUkic6bgx80tA4TYQxAQZHrcDmrheHmA9ZFMbZyDnG%2BPKWymUa5Q11gTwvJpoYJcfDCFnQHxzoG6UUNFStIhk7bZmUd9RzIBHS1FVVEXzlSWzkG8MoByDGWJd4kb3O8TYaDwKADN1PI53bgWEzVPfixkqGI4o1axMsMSsflRT0GxUE%2FD7XS8RZbteWGX5pI%2BcOEdpHpQhP4oqvH7sO4C6qM2CrFetGPmF9K9ilyrsDNWekQjZ2u1FqwkdjiHffWCqq9HaYkMv3fD2A2d3qWZO30L%2FnDMJKd5cQGOqUB7DJaxEKfCt50wCLXNCGJi3OjHb6iFi79hwFiqlMLeAxrANUCIx2ddDbBbYsGZo8Hs1cfEnvqk9eTDLRncTOP6ZbzEfsBELaENdwZ3lQKsLSe69czrDSbp3pwOjaW0oYR3aJPKhT23xJMErcVofjO0ipfnPUzZMCwoYrFFwtDqDJ4gkdx3p6DWiw5grf6j4Dx%2FIhU9hdj%2B6Ncmj4Wo4IyAn0cgq%2Fz&X-Amz-Signature=322b082ed09748b12c2e9f098104c1134230dd689169e7d14bb82b1203f91532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY57W67V%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGF5biwWRG%2FE0s96xH0PokKPceph%2BycGxIi5xyAmJUzgIgM2TmQ8wzJbrtfCtPes4obHy9sSMKsApvCZHmVjdqfwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8vfcMxusoNAnDDDSrcA4oB7FxZzgaCnBLsmL2vYQ%2FmKf1cP%2BhhsTmfw9okR5hjAqwdGPd%2Ff4PgOYD4gJHdN1WVu4dC69tixBzbw81i3ltAYCtK8q1l1ETBmIiA%2B1iNNiikm2%2F8AfHgjEbIGqKRde62BLCHnCri0zfnTwVZZVSii%2Bz3cOSr%2Bn5zY5K70QBPqbiXXKcoCZyQs8pPD4hQkUraVYxR8FpbEFU26p5bnyqrw8ndNvLwrswK7stY76OftXJhVY%2BXbs91Qir7%2B0Pqlzu4vK3gWY%2F%2FuL3BJ7r1rtNz9KKw9EJKY7d3b88Gs2ikhqP7XcnJHcfSB2aehU4qGtHYqsxmSchSQaJynPa%2FDJX%2Bgvjvg56bHyUkic6bgx80tA4TYQxAQZHrcDmrheHmA9ZFMbZyDnG%2BPKWymUa5Q11gTwvJpoYJcfDCFnQHxzoG6UUNFStIhk7bZmUd9RzIBHS1FVVEXzlSWzkG8MoByDGWJd4kb3O8TYaDwKADN1PI53bgWEzVPfixkqGI4o1axMsMSsflRT0GxUE%2FD7XS8RZbteWGX5pI%2BcOEdpHpQhP4oqvH7sO4C6qM2CrFetGPmF9K9ilyrsDNWekQjZ2u1FqwkdjiHffWCqq9HaYkMv3fD2A2d3qWZO30L%2FnDMJKd5cQGOqUB7DJaxEKfCt50wCLXNCGJi3OjHb6iFi79hwFiqlMLeAxrANUCIx2ddDbBbYsGZo8Hs1cfEnvqk9eTDLRncTOP6ZbzEfsBELaENdwZ3lQKsLSe69czrDSbp3pwOjaW0oYR3aJPKhT23xJMErcVofjO0ipfnPUzZMCwoYrFFwtDqDJ4gkdx3p6DWiw5grf6j4Dx%2FIhU9hdj%2B6Ncmj4Wo4IyAn0cgq%2Fz&X-Amz-Signature=deaa009372a61f5e183cce63626efff5f40589d38b41074375070d9fbdca862d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY57W67V%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGF5biwWRG%2FE0s96xH0PokKPceph%2BycGxIi5xyAmJUzgIgM2TmQ8wzJbrtfCtPes4obHy9sSMKsApvCZHmVjdqfwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8vfcMxusoNAnDDDSrcA4oB7FxZzgaCnBLsmL2vYQ%2FmKf1cP%2BhhsTmfw9okR5hjAqwdGPd%2Ff4PgOYD4gJHdN1WVu4dC69tixBzbw81i3ltAYCtK8q1l1ETBmIiA%2B1iNNiikm2%2F8AfHgjEbIGqKRde62BLCHnCri0zfnTwVZZVSii%2Bz3cOSr%2Bn5zY5K70QBPqbiXXKcoCZyQs8pPD4hQkUraVYxR8FpbEFU26p5bnyqrw8ndNvLwrswK7stY76OftXJhVY%2BXbs91Qir7%2B0Pqlzu4vK3gWY%2F%2FuL3BJ7r1rtNz9KKw9EJKY7d3b88Gs2ikhqP7XcnJHcfSB2aehU4qGtHYqsxmSchSQaJynPa%2FDJX%2Bgvjvg56bHyUkic6bgx80tA4TYQxAQZHrcDmrheHmA9ZFMbZyDnG%2BPKWymUa5Q11gTwvJpoYJcfDCFnQHxzoG6UUNFStIhk7bZmUd9RzIBHS1FVVEXzlSWzkG8MoByDGWJd4kb3O8TYaDwKADN1PI53bgWEzVPfixkqGI4o1axMsMSsflRT0GxUE%2FD7XS8RZbteWGX5pI%2BcOEdpHpQhP4oqvH7sO4C6qM2CrFetGPmF9K9ilyrsDNWekQjZ2u1FqwkdjiHffWCqq9HaYkMv3fD2A2d3qWZO30L%2FnDMJKd5cQGOqUB7DJaxEKfCt50wCLXNCGJi3OjHb6iFi79hwFiqlMLeAxrANUCIx2ddDbBbYsGZo8Hs1cfEnvqk9eTDLRncTOP6ZbzEfsBELaENdwZ3lQKsLSe69czrDSbp3pwOjaW0oYR3aJPKhT23xJMErcVofjO0ipfnPUzZMCwoYrFFwtDqDJ4gkdx3p6DWiw5grf6j4Dx%2FIhU9hdj%2B6Ncmj4Wo4IyAn0cgq%2Fz&X-Amz-Signature=fa5552e9249e383999e9eb1d63af5d6b78d5414e0c001900d689fdfc92ae0269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY57W67V%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGF5biwWRG%2FE0s96xH0PokKPceph%2BycGxIi5xyAmJUzgIgM2TmQ8wzJbrtfCtPes4obHy9sSMKsApvCZHmVjdqfwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8vfcMxusoNAnDDDSrcA4oB7FxZzgaCnBLsmL2vYQ%2FmKf1cP%2BhhsTmfw9okR5hjAqwdGPd%2Ff4PgOYD4gJHdN1WVu4dC69tixBzbw81i3ltAYCtK8q1l1ETBmIiA%2B1iNNiikm2%2F8AfHgjEbIGqKRde62BLCHnCri0zfnTwVZZVSii%2Bz3cOSr%2Bn5zY5K70QBPqbiXXKcoCZyQs8pPD4hQkUraVYxR8FpbEFU26p5bnyqrw8ndNvLwrswK7stY76OftXJhVY%2BXbs91Qir7%2B0Pqlzu4vK3gWY%2F%2FuL3BJ7r1rtNz9KKw9EJKY7d3b88Gs2ikhqP7XcnJHcfSB2aehU4qGtHYqsxmSchSQaJynPa%2FDJX%2Bgvjvg56bHyUkic6bgx80tA4TYQxAQZHrcDmrheHmA9ZFMbZyDnG%2BPKWymUa5Q11gTwvJpoYJcfDCFnQHxzoG6UUNFStIhk7bZmUd9RzIBHS1FVVEXzlSWzkG8MoByDGWJd4kb3O8TYaDwKADN1PI53bgWEzVPfixkqGI4o1axMsMSsflRT0GxUE%2FD7XS8RZbteWGX5pI%2BcOEdpHpQhP4oqvH7sO4C6qM2CrFetGPmF9K9ilyrsDNWekQjZ2u1FqwkdjiHffWCqq9HaYkMv3fD2A2d3qWZO30L%2FnDMJKd5cQGOqUB7DJaxEKfCt50wCLXNCGJi3OjHb6iFi79hwFiqlMLeAxrANUCIx2ddDbBbYsGZo8Hs1cfEnvqk9eTDLRncTOP6ZbzEfsBELaENdwZ3lQKsLSe69czrDSbp3pwOjaW0oYR3aJPKhT23xJMErcVofjO0ipfnPUzZMCwoYrFFwtDqDJ4gkdx3p6DWiw5grf6j4Dx%2FIhU9hdj%2B6Ncmj4Wo4IyAn0cgq%2Fz&X-Amz-Signature=77f264843e53d059baef2c113354d096c3364491b4b2390c010db8ad0464edf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGMYKODA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T040003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmdrm28nI0HIHR%2BLRYkZECfmVuqmGBGVCRDzAVDNiHLQIhAPlY5xNuD8duo9GbIB8tj0krBFhcyaFjiGnhXKvG9r%2BBKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHO1FInmCex6qWRAAq3AOLrY1qQnKwmpNVmy4Ud0B9%2Ft%2FTROnPvWL%2Bh4iUneheR0Kf%2BM0AIjKE8KRLQr7oUvN4A%2BdtUP9hSts6v7xvOgQjPW6%2BSYVCgMwsw8457dMUGC%2FyDOcli%2B%2Fm3WB77lzeoPCJdrJjElj%2FJiP4DloDmriLLm%2FVlUcSp0fPItm0C6bJEa18EUp2LRMCMbbJv2tFslk1KZfCXGY4E8lFo%2FgSuoNz2h%2FA%2FPiFQlyzfyPst7rA%2FlSdfZtub6Y7lUlnJcWtf73%2FA8eTJyZQBvv6EqUszLDFmJdN1CapmYit5lRBxcN%2BbW23YtmqvFLm63k9XiBXt4mS1sGudg%2ByM8wugBhilQ4nGeRdZAcm%2BerzQWKJLyH9sixIlEO11zRiLZnpCl0ByYwEieZ52iBlPA7mN4K8UadFWwkWhSjfHD8fZ2cVwz2iJDf3jdAJWbKy%2FolLIYFIlL7UJ8n4e1I8XSmLtxOEpKcgrtP5PjcvzjMRzv%2FeSv1tkQHf7oLvcAg23ZObbv80wMD2vvYR0sbBG%2Fr4BBNQdQS1bnK95ykbwDJMB%2F69XFdqfSGpXxF3jlwWJBxX2PUl%2FyL3FNlmicpMT2UDNuE%2FRA57xDMeqIgbDTK12jw6gw2OUNiYNb5OdqiVAVAI2DCDnuXEBjqkAcqRVkXAT1Vyz5SNCT1En1ynMYHGTrCN6CAITee99ZN2sHRY4%2F3vM2Ms1qLzlBsIl3FAHIFBr9WDtIlFDXmXssOCBy84L94hSS7bGTwe%2Fat1wM0OAmMo0XdKbMhd7Q8nf%2FVLjU6TFDafO5dUguZMgF9zdcSypnIcin9jdbhJuZS10MLkzwCUFhJ%2BolhR6r5EJxSPf2skp1LFG2MaZ6weH3DueYHB&X-Amz-Signature=1eb43a072edbf85dbfca3766332bb1c0a2199be9523764100d30574f7f95d7f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPHEEZPK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAskpmUrrHQ3qOD1uhFfCgxOdO7drBuNLpZ83Uvgbqh0AiAPLG%2B9I1GUPJQyGFGGQW5r59DEIKaK16E5t%2FAUpvn4dyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOEBuTH3I4snZXe3KtwDgITerVeNgEbEkQ03Iz5ycfEo5ms419OBW9JWKudfaCAla9Ddq5csNjin5nU1t%2B26yUeN0vlPRzRyD9WTR%2Fu7yMLNSvVotzIqrqVYm7Oe4DG3W6eT1m7qSeKP7xbM5y7qwBRyynoCr9ZnKiccc8YLmDSVB%2FquRvUGIqYtTEIfAWKSAbbZEh%2F9ynlAnKF5aUHkMA2ESqBglqWAbCq45B0Flw6y%2F8MVdZh%2FI4f0iK7TbbfZASUiYOiDOXw8XwueVYvxTVWSlGQbREKjbjovp5L5Qiy37wPhM7%2B7IsupVJYLoWLKglUKD0VaACYXIf6T%2F%2FL%2BvbXTt9c0f9DCsbUQACb2wzAQXyBeIBQLnxnuZQnkW3aRJBKmYJQGvxkqT3aE1mnVloB7uc97aYrAAG%2FnVjjoYV7Cu3ycK9PWxVkR0NDFYEGWGf2seQ2f3mUTaS%2FTtqNUflRq5hOHD1dOPfC8nutrb7S6LG3uHHpUKnybBB4C6cuyEBZOZIIxyADJB5slsRigrxJQntx4HfB3LTVl8g%2FQbTw0EYwrGt2HhVQePmOyh%2BPTtyXTKL03%2Bskgg5DpY1iyrDRLazwzjM1SX06aA6wc3n6c3hZCTSXoumTujHeMaST87dGCbtE1NG3lJAMw4J3lxAY6pgHaBFwGND0UxHxpnqg6fMQSSvqWrIbc2GeaXKuYxyNmOGerf4c0lDDGi%2BQxs%2FZC%2BVahmtmEVrBH%2FxWLnnhEE981edFrxlPvMKAIzlrPN7B3h3rTBA%2BOz2jPmgN6sjBSOP6ihJ%2BnDOWCp5To2UPaJ%2BAjAVh3ghx4t5j3WY2x9jjRcJIuSV4X8UpOtFgyftlhN3DrZx%2Fay0%2F1UhErd4IgrrVka7nmQGa1&X-Amz-Signature=82488fa5d60d8a9340caf69b41f1ec4c3ff73b12e69398fe152d7a9c4d74f1d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPHEEZPK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAskpmUrrHQ3qOD1uhFfCgxOdO7drBuNLpZ83Uvgbqh0AiAPLG%2B9I1GUPJQyGFGGQW5r59DEIKaK16E5t%2FAUpvn4dyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOEBuTH3I4snZXe3KtwDgITerVeNgEbEkQ03Iz5ycfEo5ms419OBW9JWKudfaCAla9Ddq5csNjin5nU1t%2B26yUeN0vlPRzRyD9WTR%2Fu7yMLNSvVotzIqrqVYm7Oe4DG3W6eT1m7qSeKP7xbM5y7qwBRyynoCr9ZnKiccc8YLmDSVB%2FquRvUGIqYtTEIfAWKSAbbZEh%2F9ynlAnKF5aUHkMA2ESqBglqWAbCq45B0Flw6y%2F8MVdZh%2FI4f0iK7TbbfZASUiYOiDOXw8XwueVYvxTVWSlGQbREKjbjovp5L5Qiy37wPhM7%2B7IsupVJYLoWLKglUKD0VaACYXIf6T%2F%2FL%2BvbXTt9c0f9DCsbUQACb2wzAQXyBeIBQLnxnuZQnkW3aRJBKmYJQGvxkqT3aE1mnVloB7uc97aYrAAG%2FnVjjoYV7Cu3ycK9PWxVkR0NDFYEGWGf2seQ2f3mUTaS%2FTtqNUflRq5hOHD1dOPfC8nutrb7S6LG3uHHpUKnybBB4C6cuyEBZOZIIxyADJB5slsRigrxJQntx4HfB3LTVl8g%2FQbTw0EYwrGt2HhVQePmOyh%2BPTtyXTKL03%2Bskgg5DpY1iyrDRLazwzjM1SX06aA6wc3n6c3hZCTSXoumTujHeMaST87dGCbtE1NG3lJAMw4J3lxAY6pgHaBFwGND0UxHxpnqg6fMQSSvqWrIbc2GeaXKuYxyNmOGerf4c0lDDGi%2BQxs%2FZC%2BVahmtmEVrBH%2FxWLnnhEE981edFrxlPvMKAIzlrPN7B3h3rTBA%2BOz2jPmgN6sjBSOP6ihJ%2BnDOWCp5To2UPaJ%2BAjAVh3ghx4t5j3WY2x9jjRcJIuSV4X8UpOtFgyftlhN3DrZx%2Fay0%2F1UhErd4IgrrVka7nmQGa1&X-Amz-Signature=74e10e5b23ede8dc41067656de01e75b1c6c57a80bd48025dcc582bfe795c466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPHEEZPK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAskpmUrrHQ3qOD1uhFfCgxOdO7drBuNLpZ83Uvgbqh0AiAPLG%2B9I1GUPJQyGFGGQW5r59DEIKaK16E5t%2FAUpvn4dyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOEBuTH3I4snZXe3KtwDgITerVeNgEbEkQ03Iz5ycfEo5ms419OBW9JWKudfaCAla9Ddq5csNjin5nU1t%2B26yUeN0vlPRzRyD9WTR%2Fu7yMLNSvVotzIqrqVYm7Oe4DG3W6eT1m7qSeKP7xbM5y7qwBRyynoCr9ZnKiccc8YLmDSVB%2FquRvUGIqYtTEIfAWKSAbbZEh%2F9ynlAnKF5aUHkMA2ESqBglqWAbCq45B0Flw6y%2F8MVdZh%2FI4f0iK7TbbfZASUiYOiDOXw8XwueVYvxTVWSlGQbREKjbjovp5L5Qiy37wPhM7%2B7IsupVJYLoWLKglUKD0VaACYXIf6T%2F%2FL%2BvbXTt9c0f9DCsbUQACb2wzAQXyBeIBQLnxnuZQnkW3aRJBKmYJQGvxkqT3aE1mnVloB7uc97aYrAAG%2FnVjjoYV7Cu3ycK9PWxVkR0NDFYEGWGf2seQ2f3mUTaS%2FTtqNUflRq5hOHD1dOPfC8nutrb7S6LG3uHHpUKnybBB4C6cuyEBZOZIIxyADJB5slsRigrxJQntx4HfB3LTVl8g%2FQbTw0EYwrGt2HhVQePmOyh%2BPTtyXTKL03%2Bskgg5DpY1iyrDRLazwzjM1SX06aA6wc3n6c3hZCTSXoumTujHeMaST87dGCbtE1NG3lJAMw4J3lxAY6pgHaBFwGND0UxHxpnqg6fMQSSvqWrIbc2GeaXKuYxyNmOGerf4c0lDDGi%2BQxs%2FZC%2BVahmtmEVrBH%2FxWLnnhEE981edFrxlPvMKAIzlrPN7B3h3rTBA%2BOz2jPmgN6sjBSOP6ihJ%2BnDOWCp5To2UPaJ%2BAjAVh3ghx4t5j3WY2x9jjRcJIuSV4X8UpOtFgyftlhN3DrZx%2Fay0%2F1UhErd4IgrrVka7nmQGa1&X-Amz-Signature=0e12a6ee0996594f4e2a116a20f831feef83ee3c30ee8d16f921045aea30ff0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPHEEZPK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAskpmUrrHQ3qOD1uhFfCgxOdO7drBuNLpZ83Uvgbqh0AiAPLG%2B9I1GUPJQyGFGGQW5r59DEIKaK16E5t%2FAUpvn4dyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOEBuTH3I4snZXe3KtwDgITerVeNgEbEkQ03Iz5ycfEo5ms419OBW9JWKudfaCAla9Ddq5csNjin5nU1t%2B26yUeN0vlPRzRyD9WTR%2Fu7yMLNSvVotzIqrqVYm7Oe4DG3W6eT1m7qSeKP7xbM5y7qwBRyynoCr9ZnKiccc8YLmDSVB%2FquRvUGIqYtTEIfAWKSAbbZEh%2F9ynlAnKF5aUHkMA2ESqBglqWAbCq45B0Flw6y%2F8MVdZh%2FI4f0iK7TbbfZASUiYOiDOXw8XwueVYvxTVWSlGQbREKjbjovp5L5Qiy37wPhM7%2B7IsupVJYLoWLKglUKD0VaACYXIf6T%2F%2FL%2BvbXTt9c0f9DCsbUQACb2wzAQXyBeIBQLnxnuZQnkW3aRJBKmYJQGvxkqT3aE1mnVloB7uc97aYrAAG%2FnVjjoYV7Cu3ycK9PWxVkR0NDFYEGWGf2seQ2f3mUTaS%2FTtqNUflRq5hOHD1dOPfC8nutrb7S6LG3uHHpUKnybBB4C6cuyEBZOZIIxyADJB5slsRigrxJQntx4HfB3LTVl8g%2FQbTw0EYwrGt2HhVQePmOyh%2BPTtyXTKL03%2Bskgg5DpY1iyrDRLazwzjM1SX06aA6wc3n6c3hZCTSXoumTujHeMaST87dGCbtE1NG3lJAMw4J3lxAY6pgHaBFwGND0UxHxpnqg6fMQSSvqWrIbc2GeaXKuYxyNmOGerf4c0lDDGi%2BQxs%2FZC%2BVahmtmEVrBH%2FxWLnnhEE981edFrxlPvMKAIzlrPN7B3h3rTBA%2BOz2jPmgN6sjBSOP6ihJ%2BnDOWCp5To2UPaJ%2BAjAVh3ghx4t5j3WY2x9jjRcJIuSV4X8UpOtFgyftlhN3DrZx%2Fay0%2F1UhErd4IgrrVka7nmQGa1&X-Amz-Signature=6c8bbabd35951dd7a18bda967c0795199d6c2dec193f2e32f4a27d2ab4708588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPHEEZPK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAskpmUrrHQ3qOD1uhFfCgxOdO7drBuNLpZ83Uvgbqh0AiAPLG%2B9I1GUPJQyGFGGQW5r59DEIKaK16E5t%2FAUpvn4dyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOEBuTH3I4snZXe3KtwDgITerVeNgEbEkQ03Iz5ycfEo5ms419OBW9JWKudfaCAla9Ddq5csNjin5nU1t%2B26yUeN0vlPRzRyD9WTR%2Fu7yMLNSvVotzIqrqVYm7Oe4DG3W6eT1m7qSeKP7xbM5y7qwBRyynoCr9ZnKiccc8YLmDSVB%2FquRvUGIqYtTEIfAWKSAbbZEh%2F9ynlAnKF5aUHkMA2ESqBglqWAbCq45B0Flw6y%2F8MVdZh%2FI4f0iK7TbbfZASUiYOiDOXw8XwueVYvxTVWSlGQbREKjbjovp5L5Qiy37wPhM7%2B7IsupVJYLoWLKglUKD0VaACYXIf6T%2F%2FL%2BvbXTt9c0f9DCsbUQACb2wzAQXyBeIBQLnxnuZQnkW3aRJBKmYJQGvxkqT3aE1mnVloB7uc97aYrAAG%2FnVjjoYV7Cu3ycK9PWxVkR0NDFYEGWGf2seQ2f3mUTaS%2FTtqNUflRq5hOHD1dOPfC8nutrb7S6LG3uHHpUKnybBB4C6cuyEBZOZIIxyADJB5slsRigrxJQntx4HfB3LTVl8g%2FQbTw0EYwrGt2HhVQePmOyh%2BPTtyXTKL03%2Bskgg5DpY1iyrDRLazwzjM1SX06aA6wc3n6c3hZCTSXoumTujHeMaST87dGCbtE1NG3lJAMw4J3lxAY6pgHaBFwGND0UxHxpnqg6fMQSSvqWrIbc2GeaXKuYxyNmOGerf4c0lDDGi%2BQxs%2FZC%2BVahmtmEVrBH%2FxWLnnhEE981edFrxlPvMKAIzlrPN7B3h3rTBA%2BOz2jPmgN6sjBSOP6ihJ%2BnDOWCp5To2UPaJ%2BAjAVh3ghx4t5j3WY2x9jjRcJIuSV4X8UpOtFgyftlhN3DrZx%2Fay0%2F1UhErd4IgrrVka7nmQGa1&X-Amz-Signature=1053d9fa32013c31c4f1796d088c47188382d794695a24979650f15194d35f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPHEEZPK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAskpmUrrHQ3qOD1uhFfCgxOdO7drBuNLpZ83Uvgbqh0AiAPLG%2B9I1GUPJQyGFGGQW5r59DEIKaK16E5t%2FAUpvn4dyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOEBuTH3I4snZXe3KtwDgITerVeNgEbEkQ03Iz5ycfEo5ms419OBW9JWKudfaCAla9Ddq5csNjin5nU1t%2B26yUeN0vlPRzRyD9WTR%2Fu7yMLNSvVotzIqrqVYm7Oe4DG3W6eT1m7qSeKP7xbM5y7qwBRyynoCr9ZnKiccc8YLmDSVB%2FquRvUGIqYtTEIfAWKSAbbZEh%2F9ynlAnKF5aUHkMA2ESqBglqWAbCq45B0Flw6y%2F8MVdZh%2FI4f0iK7TbbfZASUiYOiDOXw8XwueVYvxTVWSlGQbREKjbjovp5L5Qiy37wPhM7%2B7IsupVJYLoWLKglUKD0VaACYXIf6T%2F%2FL%2BvbXTt9c0f9DCsbUQACb2wzAQXyBeIBQLnxnuZQnkW3aRJBKmYJQGvxkqT3aE1mnVloB7uc97aYrAAG%2FnVjjoYV7Cu3ycK9PWxVkR0NDFYEGWGf2seQ2f3mUTaS%2FTtqNUflRq5hOHD1dOPfC8nutrb7S6LG3uHHpUKnybBB4C6cuyEBZOZIIxyADJB5slsRigrxJQntx4HfB3LTVl8g%2FQbTw0EYwrGt2HhVQePmOyh%2BPTtyXTKL03%2Bskgg5DpY1iyrDRLazwzjM1SX06aA6wc3n6c3hZCTSXoumTujHeMaST87dGCbtE1NG3lJAMw4J3lxAY6pgHaBFwGND0UxHxpnqg6fMQSSvqWrIbc2GeaXKuYxyNmOGerf4c0lDDGi%2BQxs%2FZC%2BVahmtmEVrBH%2FxWLnnhEE981edFrxlPvMKAIzlrPN7B3h3rTBA%2BOz2jPmgN6sjBSOP6ihJ%2BnDOWCp5To2UPaJ%2BAjAVh3ghx4t5j3WY2x9jjRcJIuSV4X8UpOtFgyftlhN3DrZx%2Fay0%2F1UhErd4IgrrVka7nmQGa1&X-Amz-Signature=e3b8ea4d645151597cca39f82a74ad3546956400f1476d3c6bc3b2f0465929e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPHEEZPK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAskpmUrrHQ3qOD1uhFfCgxOdO7drBuNLpZ83Uvgbqh0AiAPLG%2B9I1GUPJQyGFGGQW5r59DEIKaK16E5t%2FAUpvn4dyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOEBuTH3I4snZXe3KtwDgITerVeNgEbEkQ03Iz5ycfEo5ms419OBW9JWKudfaCAla9Ddq5csNjin5nU1t%2B26yUeN0vlPRzRyD9WTR%2Fu7yMLNSvVotzIqrqVYm7Oe4DG3W6eT1m7qSeKP7xbM5y7qwBRyynoCr9ZnKiccc8YLmDSVB%2FquRvUGIqYtTEIfAWKSAbbZEh%2F9ynlAnKF5aUHkMA2ESqBglqWAbCq45B0Flw6y%2F8MVdZh%2FI4f0iK7TbbfZASUiYOiDOXw8XwueVYvxTVWSlGQbREKjbjovp5L5Qiy37wPhM7%2B7IsupVJYLoWLKglUKD0VaACYXIf6T%2F%2FL%2BvbXTt9c0f9DCsbUQACb2wzAQXyBeIBQLnxnuZQnkW3aRJBKmYJQGvxkqT3aE1mnVloB7uc97aYrAAG%2FnVjjoYV7Cu3ycK9PWxVkR0NDFYEGWGf2seQ2f3mUTaS%2FTtqNUflRq5hOHD1dOPfC8nutrb7S6LG3uHHpUKnybBB4C6cuyEBZOZIIxyADJB5slsRigrxJQntx4HfB3LTVl8g%2FQbTw0EYwrGt2HhVQePmOyh%2BPTtyXTKL03%2Bskgg5DpY1iyrDRLazwzjM1SX06aA6wc3n6c3hZCTSXoumTujHeMaST87dGCbtE1NG3lJAMw4J3lxAY6pgHaBFwGND0UxHxpnqg6fMQSSvqWrIbc2GeaXKuYxyNmOGerf4c0lDDGi%2BQxs%2FZC%2BVahmtmEVrBH%2FxWLnnhEE981edFrxlPvMKAIzlrPN7B3h3rTBA%2BOz2jPmgN6sjBSOP6ihJ%2BnDOWCp5To2UPaJ%2BAjAVh3ghx4t5j3WY2x9jjRcJIuSV4X8UpOtFgyftlhN3DrZx%2Fay0%2F1UhErd4IgrrVka7nmQGa1&X-Amz-Signature=c20f37c88f0bec5375ab17c3f55f624e322076808e1d753daba44d6ed86eb75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPHEEZPK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAskpmUrrHQ3qOD1uhFfCgxOdO7drBuNLpZ83Uvgbqh0AiAPLG%2B9I1GUPJQyGFGGQW5r59DEIKaK16E5t%2FAUpvn4dyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOEBuTH3I4snZXe3KtwDgITerVeNgEbEkQ03Iz5ycfEo5ms419OBW9JWKudfaCAla9Ddq5csNjin5nU1t%2B26yUeN0vlPRzRyD9WTR%2Fu7yMLNSvVotzIqrqVYm7Oe4DG3W6eT1m7qSeKP7xbM5y7qwBRyynoCr9ZnKiccc8YLmDSVB%2FquRvUGIqYtTEIfAWKSAbbZEh%2F9ynlAnKF5aUHkMA2ESqBglqWAbCq45B0Flw6y%2F8MVdZh%2FI4f0iK7TbbfZASUiYOiDOXw8XwueVYvxTVWSlGQbREKjbjovp5L5Qiy37wPhM7%2B7IsupVJYLoWLKglUKD0VaACYXIf6T%2F%2FL%2BvbXTt9c0f9DCsbUQACb2wzAQXyBeIBQLnxnuZQnkW3aRJBKmYJQGvxkqT3aE1mnVloB7uc97aYrAAG%2FnVjjoYV7Cu3ycK9PWxVkR0NDFYEGWGf2seQ2f3mUTaS%2FTtqNUflRq5hOHD1dOPfC8nutrb7S6LG3uHHpUKnybBB4C6cuyEBZOZIIxyADJB5slsRigrxJQntx4HfB3LTVl8g%2FQbTw0EYwrGt2HhVQePmOyh%2BPTtyXTKL03%2Bskgg5DpY1iyrDRLazwzjM1SX06aA6wc3n6c3hZCTSXoumTujHeMaST87dGCbtE1NG3lJAMw4J3lxAY6pgHaBFwGND0UxHxpnqg6fMQSSvqWrIbc2GeaXKuYxyNmOGerf4c0lDDGi%2BQxs%2FZC%2BVahmtmEVrBH%2FxWLnnhEE981edFrxlPvMKAIzlrPN7B3h3rTBA%2BOz2jPmgN6sjBSOP6ihJ%2BnDOWCp5To2UPaJ%2BAjAVh3ghx4t5j3WY2x9jjRcJIuSV4X8UpOtFgyftlhN3DrZx%2Fay0%2F1UhErd4IgrrVka7nmQGa1&X-Amz-Signature=5b559baa9725d1d22b6b8d53ed25837e45f2e763cc5cc206ad1d1c12c133876c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPHEEZPK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAskpmUrrHQ3qOD1uhFfCgxOdO7drBuNLpZ83Uvgbqh0AiAPLG%2B9I1GUPJQyGFGGQW5r59DEIKaK16E5t%2FAUpvn4dyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOEBuTH3I4snZXe3KtwDgITerVeNgEbEkQ03Iz5ycfEo5ms419OBW9JWKudfaCAla9Ddq5csNjin5nU1t%2B26yUeN0vlPRzRyD9WTR%2Fu7yMLNSvVotzIqrqVYm7Oe4DG3W6eT1m7qSeKP7xbM5y7qwBRyynoCr9ZnKiccc8YLmDSVB%2FquRvUGIqYtTEIfAWKSAbbZEh%2F9ynlAnKF5aUHkMA2ESqBglqWAbCq45B0Flw6y%2F8MVdZh%2FI4f0iK7TbbfZASUiYOiDOXw8XwueVYvxTVWSlGQbREKjbjovp5L5Qiy37wPhM7%2B7IsupVJYLoWLKglUKD0VaACYXIf6T%2F%2FL%2BvbXTt9c0f9DCsbUQACb2wzAQXyBeIBQLnxnuZQnkW3aRJBKmYJQGvxkqT3aE1mnVloB7uc97aYrAAG%2FnVjjoYV7Cu3ycK9PWxVkR0NDFYEGWGf2seQ2f3mUTaS%2FTtqNUflRq5hOHD1dOPfC8nutrb7S6LG3uHHpUKnybBB4C6cuyEBZOZIIxyADJB5slsRigrxJQntx4HfB3LTVl8g%2FQbTw0EYwrGt2HhVQePmOyh%2BPTtyXTKL03%2Bskgg5DpY1iyrDRLazwzjM1SX06aA6wc3n6c3hZCTSXoumTujHeMaST87dGCbtE1NG3lJAMw4J3lxAY6pgHaBFwGND0UxHxpnqg6fMQSSvqWrIbc2GeaXKuYxyNmOGerf4c0lDDGi%2BQxs%2FZC%2BVahmtmEVrBH%2FxWLnnhEE981edFrxlPvMKAIzlrPN7B3h3rTBA%2BOz2jPmgN6sjBSOP6ihJ%2BnDOWCp5To2UPaJ%2BAjAVh3ghx4t5j3WY2x9jjRcJIuSV4X8UpOtFgyftlhN3DrZx%2Fay0%2F1UhErd4IgrrVka7nmQGa1&X-Amz-Signature=ee9e661ffe1016aec3e4cf792215f314391315bada7a71b5a8b79393b1b96e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
