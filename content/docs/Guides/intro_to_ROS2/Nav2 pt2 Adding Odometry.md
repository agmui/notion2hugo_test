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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZR4AM4H%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL4R7l7UdvQ4qFvce59xNYKGMiTUChpH3HsB1Hk0Eo6wIgPG%2F0XK0MJl%2BauNe2es0fmcIzQDRRI%2BhxE%2B4F04WmVR4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKP7XM3wXwhY3HpstyrcA4iUuAJdvn9NWlL%2Fv0xxHHpK3wVbWh%2BhXVDVQ4bDdrK5kDHR0fDtLzLI2OgdJK41ZmAmhtt9%2BqbDdaebgvGQSKZyApV%2BLGiNlUF8pCWqFD2Y9Un1ZkOFDpfm4a9IA1cu5YoiB1uSHq7pjcGYpcCebotwy5%2Bou8LW4nmdos8I0n891PxNvfD%2BUQtbqItR4Sax53KgV5jxnqEumJf3ZPYWaVnmrMRLJTlCObaFVsAUcQWma%2FTXedydClZryPGYrtvZSZdGLSkfn4kZb%2F71CdZv7bZIiQUa%2Fg8Q3oUZAecuexWTk8lkiQbfEMuzxqyeJVOSvJ%2FD5XdxGdEDVyeVtJivo4aobXO%2Bwt4j5YWV7y7aLh9W8ph3%2BNg86fQAVQ6Eb4DEjw1Fcf%2FVBNc5JTC98VU6%2FJzGFALgK8sgO%2F6OHEnJj%2BzyxuIGP8mguR4zyEde8ZygAhoun6jGMiORSKa%2ByWObVWwQLs2WvRWHSf7UyTtj2FiQMOehuUsHcZRCKs3W8IQUQhJFt5JHxL1Pq7Fv5IZW8q8fNSmVeGJiH4tbBKH6lFn27IY2l02sTkCrhzYNwWIrkaPc2Sqplf5dHNUytZ%2FGTm7L5AKBzGXFEp6MQF3cnBoXb40kCOx5JGY6LHt4MMLowcoGOqUBMaW3YEKaWfbdkiwSol%2BhX3RiVEiN1wop%2FjKkKMy5wJS9x6dB%2BGVx%2Fi8%2FJKoSrzyDHjCIVawDItSvS0pBy4luQZv100B6mKqRnpvg6PUFmk4sgKsiIRNNDUgfXojvmhHbk6WeSotkjB8cbe1d4bmxyXIvmDU4gepLLNmAuscpvJQoRIPJsNa0KK6XCHr5FyM4mSIhirBNmLf5j48Gu83sJ%2FDJFMNE&X-Amz-Signature=d0c40c0b15addf80fdc80000d3f3095fa4e0aacbb4fb48770d95cf430050eec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
  <summary>{{< markdownify >}}Why not ros2_control?{{< /markdownify >}}</summary>
  
This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.

If you are curious about `ros2_control` Articulate Robotics has a very good guide on it:

[ros2_control guide](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

</details>



{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZR4AM4H%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL4R7l7UdvQ4qFvce59xNYKGMiTUChpH3HsB1Hk0Eo6wIgPG%2F0XK0MJl%2BauNe2es0fmcIzQDRRI%2BhxE%2B4F04WmVR4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKP7XM3wXwhY3HpstyrcA4iUuAJdvn9NWlL%2Fv0xxHHpK3wVbWh%2BhXVDVQ4bDdrK5kDHR0fDtLzLI2OgdJK41ZmAmhtt9%2BqbDdaebgvGQSKZyApV%2BLGiNlUF8pCWqFD2Y9Un1ZkOFDpfm4a9IA1cu5YoiB1uSHq7pjcGYpcCebotwy5%2Bou8LW4nmdos8I0n891PxNvfD%2BUQtbqItR4Sax53KgV5jxnqEumJf3ZPYWaVnmrMRLJTlCObaFVsAUcQWma%2FTXedydClZryPGYrtvZSZdGLSkfn4kZb%2F71CdZv7bZIiQUa%2Fg8Q3oUZAecuexWTk8lkiQbfEMuzxqyeJVOSvJ%2FD5XdxGdEDVyeVtJivo4aobXO%2Bwt4j5YWV7y7aLh9W8ph3%2BNg86fQAVQ6Eb4DEjw1Fcf%2FVBNc5JTC98VU6%2FJzGFALgK8sgO%2F6OHEnJj%2BzyxuIGP8mguR4zyEde8ZygAhoun6jGMiORSKa%2ByWObVWwQLs2WvRWHSf7UyTtj2FiQMOehuUsHcZRCKs3W8IQUQhJFt5JHxL1Pq7Fv5IZW8q8fNSmVeGJiH4tbBKH6lFn27IY2l02sTkCrhzYNwWIrkaPc2Sqplf5dHNUytZ%2FGTm7L5AKBzGXFEp6MQF3cnBoXb40kCOx5JGY6LHt4MMLowcoGOqUBMaW3YEKaWfbdkiwSol%2BhX3RiVEiN1wop%2FjKkKMy5wJS9x6dB%2BGVx%2Fi8%2FJKoSrzyDHjCIVawDItSvS0pBy4luQZv100B6mKqRnpvg6PUFmk4sgKsiIRNNDUgfXojvmhHbk6WeSotkjB8cbe1d4bmxyXIvmDU4gepLLNmAuscpvJQoRIPJsNa0KK6XCHr5FyM4mSIhirBNmLf5j48Gu83sJ%2FDJFMNE&X-Amz-Signature=957d09dce3ae102d27f0fa87f4d8dd71eeb20a8cd317e84107eec064264e00dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZR4AM4H%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL4R7l7UdvQ4qFvce59xNYKGMiTUChpH3HsB1Hk0Eo6wIgPG%2F0XK0MJl%2BauNe2es0fmcIzQDRRI%2BhxE%2B4F04WmVR4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKP7XM3wXwhY3HpstyrcA4iUuAJdvn9NWlL%2Fv0xxHHpK3wVbWh%2BhXVDVQ4bDdrK5kDHR0fDtLzLI2OgdJK41ZmAmhtt9%2BqbDdaebgvGQSKZyApV%2BLGiNlUF8pCWqFD2Y9Un1ZkOFDpfm4a9IA1cu5YoiB1uSHq7pjcGYpcCebotwy5%2Bou8LW4nmdos8I0n891PxNvfD%2BUQtbqItR4Sax53KgV5jxnqEumJf3ZPYWaVnmrMRLJTlCObaFVsAUcQWma%2FTXedydClZryPGYrtvZSZdGLSkfn4kZb%2F71CdZv7bZIiQUa%2Fg8Q3oUZAecuexWTk8lkiQbfEMuzxqyeJVOSvJ%2FD5XdxGdEDVyeVtJivo4aobXO%2Bwt4j5YWV7y7aLh9W8ph3%2BNg86fQAVQ6Eb4DEjw1Fcf%2FVBNc5JTC98VU6%2FJzGFALgK8sgO%2F6OHEnJj%2BzyxuIGP8mguR4zyEde8ZygAhoun6jGMiORSKa%2ByWObVWwQLs2WvRWHSf7UyTtj2FiQMOehuUsHcZRCKs3W8IQUQhJFt5JHxL1Pq7Fv5IZW8q8fNSmVeGJiH4tbBKH6lFn27IY2l02sTkCrhzYNwWIrkaPc2Sqplf5dHNUytZ%2FGTm7L5AKBzGXFEp6MQF3cnBoXb40kCOx5JGY6LHt4MMLowcoGOqUBMaW3YEKaWfbdkiwSol%2BhX3RiVEiN1wop%2FjKkKMy5wJS9x6dB%2BGVx%2Fi8%2FJKoSrzyDHjCIVawDItSvS0pBy4luQZv100B6mKqRnpvg6PUFmk4sgKsiIRNNDUgfXojvmhHbk6WeSotkjB8cbe1d4bmxyXIvmDU4gepLLNmAuscpvJQoRIPJsNa0KK6XCHr5FyM4mSIhirBNmLf5j48Gu83sJ%2FDJFMNE&X-Amz-Signature=b9ae068f55a46e54a84d0210db7bbe564a98bf90a83b1a10a9f57fe737878a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZR4AM4H%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL4R7l7UdvQ4qFvce59xNYKGMiTUChpH3HsB1Hk0Eo6wIgPG%2F0XK0MJl%2BauNe2es0fmcIzQDRRI%2BhxE%2B4F04WmVR4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKP7XM3wXwhY3HpstyrcA4iUuAJdvn9NWlL%2Fv0xxHHpK3wVbWh%2BhXVDVQ4bDdrK5kDHR0fDtLzLI2OgdJK41ZmAmhtt9%2BqbDdaebgvGQSKZyApV%2BLGiNlUF8pCWqFD2Y9Un1ZkOFDpfm4a9IA1cu5YoiB1uSHq7pjcGYpcCebotwy5%2Bou8LW4nmdos8I0n891PxNvfD%2BUQtbqItR4Sax53KgV5jxnqEumJf3ZPYWaVnmrMRLJTlCObaFVsAUcQWma%2FTXedydClZryPGYrtvZSZdGLSkfn4kZb%2F71CdZv7bZIiQUa%2Fg8Q3oUZAecuexWTk8lkiQbfEMuzxqyeJVOSvJ%2FD5XdxGdEDVyeVtJivo4aobXO%2Bwt4j5YWV7y7aLh9W8ph3%2BNg86fQAVQ6Eb4DEjw1Fcf%2FVBNc5JTC98VU6%2FJzGFALgK8sgO%2F6OHEnJj%2BzyxuIGP8mguR4zyEde8ZygAhoun6jGMiORSKa%2ByWObVWwQLs2WvRWHSf7UyTtj2FiQMOehuUsHcZRCKs3W8IQUQhJFt5JHxL1Pq7Fv5IZW8q8fNSmVeGJiH4tbBKH6lFn27IY2l02sTkCrhzYNwWIrkaPc2Sqplf5dHNUytZ%2FGTm7L5AKBzGXFEp6MQF3cnBoXb40kCOx5JGY6LHt4MMLowcoGOqUBMaW3YEKaWfbdkiwSol%2BhX3RiVEiN1wop%2FjKkKMy5wJS9x6dB%2BGVx%2Fi8%2FJKoSrzyDHjCIVawDItSvS0pBy4luQZv100B6mKqRnpvg6PUFmk4sgKsiIRNNDUgfXojvmhHbk6WeSotkjB8cbe1d4bmxyXIvmDU4gepLLNmAuscpvJQoRIPJsNa0KK6XCHr5FyM4mSIhirBNmLf5j48Gu83sJ%2FDJFMNE&X-Amz-Signature=c824c784a36eb01c13e4cb01b24e5c6d57d796088316267268860e9cebfee9db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python "4-4","5-9","14-14","15-15"
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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZR4AM4H%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL4R7l7UdvQ4qFvce59xNYKGMiTUChpH3HsB1Hk0Eo6wIgPG%2F0XK0MJl%2BauNe2es0fmcIzQDRRI%2BhxE%2B4F04WmVR4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKP7XM3wXwhY3HpstyrcA4iUuAJdvn9NWlL%2Fv0xxHHpK3wVbWh%2BhXVDVQ4bDdrK5kDHR0fDtLzLI2OgdJK41ZmAmhtt9%2BqbDdaebgvGQSKZyApV%2BLGiNlUF8pCWqFD2Y9Un1ZkOFDpfm4a9IA1cu5YoiB1uSHq7pjcGYpcCebotwy5%2Bou8LW4nmdos8I0n891PxNvfD%2BUQtbqItR4Sax53KgV5jxnqEumJf3ZPYWaVnmrMRLJTlCObaFVsAUcQWma%2FTXedydClZryPGYrtvZSZdGLSkfn4kZb%2F71CdZv7bZIiQUa%2Fg8Q3oUZAecuexWTk8lkiQbfEMuzxqyeJVOSvJ%2FD5XdxGdEDVyeVtJivo4aobXO%2Bwt4j5YWV7y7aLh9W8ph3%2BNg86fQAVQ6Eb4DEjw1Fcf%2FVBNc5JTC98VU6%2FJzGFALgK8sgO%2F6OHEnJj%2BzyxuIGP8mguR4zyEde8ZygAhoun6jGMiORSKa%2ByWObVWwQLs2WvRWHSf7UyTtj2FiQMOehuUsHcZRCKs3W8IQUQhJFt5JHxL1Pq7Fv5IZW8q8fNSmVeGJiH4tbBKH6lFn27IY2l02sTkCrhzYNwWIrkaPc2Sqplf5dHNUytZ%2FGTm7L5AKBzGXFEp6MQF3cnBoXb40kCOx5JGY6LHt4MMLowcoGOqUBMaW3YEKaWfbdkiwSol%2BhX3RiVEiN1wop%2FjKkKMy5wJS9x6dB%2BGVx%2Fi8%2FJKoSrzyDHjCIVawDItSvS0pBy4luQZv100B6mKqRnpvg6PUFmk4sgKsiIRNNDUgfXojvmhHbk6WeSotkjB8cbe1d4bmxyXIvmDU4gepLLNmAuscpvJQoRIPJsNa0KK6XCHr5FyM4mSIhirBNmLf5j48Gu83sJ%2FDJFMNE&X-Amz-Signature=6b6c700e024afef34ea46465ad88e1bb8e2680e24f2d130c0be5af54457cce71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "1-17"

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
  <summary>{{< markdownify >}}**Final code:**{{< /markdownify >}}</summary>
  
```python "15-29"
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here

        
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


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

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
  <summary>{{< markdownify >}}What if I don’t have a robot{{< /markdownify >}}</summary>
  
We can fake the wheel values by doing this

```python "6-7","11-11","12-12","19-20"
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle
    
    # gets called every 0.05 seconds    
    def timer_callback(self):
        new_left_wheel_th = self.left_wheel_th+0.01 # faking wheel position
        new_right_wheel_th = self.right_wheel_th+0.02 # faking wheel position

        current_time = self.get_clock().now().to_msg()
        
        ...
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

This makes it so we just increment the wheel position every period

</details>



## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZR4AM4H%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL4R7l7UdvQ4qFvce59xNYKGMiTUChpH3HsB1Hk0Eo6wIgPG%2F0XK0MJl%2BauNe2es0fmcIzQDRRI%2BhxE%2B4F04WmVR4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKP7XM3wXwhY3HpstyrcA4iUuAJdvn9NWlL%2Fv0xxHHpK3wVbWh%2BhXVDVQ4bDdrK5kDHR0fDtLzLI2OgdJK41ZmAmhtt9%2BqbDdaebgvGQSKZyApV%2BLGiNlUF8pCWqFD2Y9Un1ZkOFDpfm4a9IA1cu5YoiB1uSHq7pjcGYpcCebotwy5%2Bou8LW4nmdos8I0n891PxNvfD%2BUQtbqItR4Sax53KgV5jxnqEumJf3ZPYWaVnmrMRLJTlCObaFVsAUcQWma%2FTXedydClZryPGYrtvZSZdGLSkfn4kZb%2F71CdZv7bZIiQUa%2Fg8Q3oUZAecuexWTk8lkiQbfEMuzxqyeJVOSvJ%2FD5XdxGdEDVyeVtJivo4aobXO%2Bwt4j5YWV7y7aLh9W8ph3%2BNg86fQAVQ6Eb4DEjw1Fcf%2FVBNc5JTC98VU6%2FJzGFALgK8sgO%2F6OHEnJj%2BzyxuIGP8mguR4zyEde8ZygAhoun6jGMiORSKa%2ByWObVWwQLs2WvRWHSf7UyTtj2FiQMOehuUsHcZRCKs3W8IQUQhJFt5JHxL1Pq7Fv5IZW8q8fNSmVeGJiH4tbBKH6lFn27IY2l02sTkCrhzYNwWIrkaPc2Sqplf5dHNUytZ%2FGTm7L5AKBzGXFEp6MQF3cnBoXb40kCOx5JGY6LHt4MMLowcoGOqUBMaW3YEKaWfbdkiwSol%2BhX3RiVEiN1wop%2FjKkKMy5wJS9x6dB%2BGVx%2Fi8%2FJKoSrzyDHjCIVawDItSvS0pBy4luQZv100B6mKqRnpvg6PUFmk4sgKsiIRNNDUgfXojvmhHbk6WeSotkjB8cbe1d4bmxyXIvmDU4gepLLNmAuscpvJQoRIPJsNa0KK6XCHr5FyM4mSIhirBNmLf5j48Gu83sJ%2FDJFMNE&X-Amz-Signature=4296ec3273ff76eb1cee78fbadd1a32025d178726b2b53bfbab586244c714e24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZR4AM4H%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL4R7l7UdvQ4qFvce59xNYKGMiTUChpH3HsB1Hk0Eo6wIgPG%2F0XK0MJl%2BauNe2es0fmcIzQDRRI%2BhxE%2B4F04WmVR4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKP7XM3wXwhY3HpstyrcA4iUuAJdvn9NWlL%2Fv0xxHHpK3wVbWh%2BhXVDVQ4bDdrK5kDHR0fDtLzLI2OgdJK41ZmAmhtt9%2BqbDdaebgvGQSKZyApV%2BLGiNlUF8pCWqFD2Y9Un1ZkOFDpfm4a9IA1cu5YoiB1uSHq7pjcGYpcCebotwy5%2Bou8LW4nmdos8I0n891PxNvfD%2BUQtbqItR4Sax53KgV5jxnqEumJf3ZPYWaVnmrMRLJTlCObaFVsAUcQWma%2FTXedydClZryPGYrtvZSZdGLSkfn4kZb%2F71CdZv7bZIiQUa%2Fg8Q3oUZAecuexWTk8lkiQbfEMuzxqyeJVOSvJ%2FD5XdxGdEDVyeVtJivo4aobXO%2Bwt4j5YWV7y7aLh9W8ph3%2BNg86fQAVQ6Eb4DEjw1Fcf%2FVBNc5JTC98VU6%2FJzGFALgK8sgO%2F6OHEnJj%2BzyxuIGP8mguR4zyEde8ZygAhoun6jGMiORSKa%2ByWObVWwQLs2WvRWHSf7UyTtj2FiQMOehuUsHcZRCKs3W8IQUQhJFt5JHxL1Pq7Fv5IZW8q8fNSmVeGJiH4tbBKH6lFn27IY2l02sTkCrhzYNwWIrkaPc2Sqplf5dHNUytZ%2FGTm7L5AKBzGXFEp6MQF3cnBoXb40kCOx5JGY6LHt4MMLowcoGOqUBMaW3YEKaWfbdkiwSol%2BhX3RiVEiN1wop%2FjKkKMy5wJS9x6dB%2BGVx%2Fi8%2FJKoSrzyDHjCIVawDItSvS0pBy4luQZv100B6mKqRnpvg6PUFmk4sgKsiIRNNDUgfXojvmhHbk6WeSotkjB8cbe1d4bmxyXIvmDU4gepLLNmAuscpvJQoRIPJsNa0KK6XCHr5FyM4mSIhirBNmLf5j48Gu83sJ%2FDJFMNE&X-Amz-Signature=30f147884b1bcabe4febf9f4c581c6b00e3b69ad5cf4e18dc126ff05c9870fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python "2-2"
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZR4AM4H%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL4R7l7UdvQ4qFvce59xNYKGMiTUChpH3HsB1Hk0Eo6wIgPG%2F0XK0MJl%2BauNe2es0fmcIzQDRRI%2BhxE%2B4F04WmVR4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKP7XM3wXwhY3HpstyrcA4iUuAJdvn9NWlL%2Fv0xxHHpK3wVbWh%2BhXVDVQ4bDdrK5kDHR0fDtLzLI2OgdJK41ZmAmhtt9%2BqbDdaebgvGQSKZyApV%2BLGiNlUF8pCWqFD2Y9Un1ZkOFDpfm4a9IA1cu5YoiB1uSHq7pjcGYpcCebotwy5%2Bou8LW4nmdos8I0n891PxNvfD%2BUQtbqItR4Sax53KgV5jxnqEumJf3ZPYWaVnmrMRLJTlCObaFVsAUcQWma%2FTXedydClZryPGYrtvZSZdGLSkfn4kZb%2F71CdZv7bZIiQUa%2Fg8Q3oUZAecuexWTk8lkiQbfEMuzxqyeJVOSvJ%2FD5XdxGdEDVyeVtJivo4aobXO%2Bwt4j5YWV7y7aLh9W8ph3%2BNg86fQAVQ6Eb4DEjw1Fcf%2FVBNc5JTC98VU6%2FJzGFALgK8sgO%2F6OHEnJj%2BzyxuIGP8mguR4zyEde8ZygAhoun6jGMiORSKa%2ByWObVWwQLs2WvRWHSf7UyTtj2FiQMOehuUsHcZRCKs3W8IQUQhJFt5JHxL1Pq7Fv5IZW8q8fNSmVeGJiH4tbBKH6lFn27IY2l02sTkCrhzYNwWIrkaPc2Sqplf5dHNUytZ%2FGTm7L5AKBzGXFEp6MQF3cnBoXb40kCOx5JGY6LHt4MMLowcoGOqUBMaW3YEKaWfbdkiwSol%2BhX3RiVEiN1wop%2FjKkKMy5wJS9x6dB%2BGVx%2Fi8%2FJKoSrzyDHjCIVawDItSvS0pBy4luQZv100B6mKqRnpvg6PUFmk4sgKsiIRNNDUgfXojvmhHbk6WeSotkjB8cbe1d4bmxyXIvmDU4gepLLNmAuscpvJQoRIPJsNa0KK6XCHr5FyM4mSIhirBNmLf5j48Gu83sJ%2FDJFMNE&X-Amz-Signature=47540995b0666e59690baf0061b8b082d1ec0bf8402f868a6d0e8cea50e50796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python "1-2","2-3","4-7","10-11"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZR4AM4H%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL4R7l7UdvQ4qFvce59xNYKGMiTUChpH3HsB1Hk0Eo6wIgPG%2F0XK0MJl%2BauNe2es0fmcIzQDRRI%2BhxE%2B4F04WmVR4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKP7XM3wXwhY3HpstyrcA4iUuAJdvn9NWlL%2Fv0xxHHpK3wVbWh%2BhXVDVQ4bDdrK5kDHR0fDtLzLI2OgdJK41ZmAmhtt9%2BqbDdaebgvGQSKZyApV%2BLGiNlUF8pCWqFD2Y9Un1ZkOFDpfm4a9IA1cu5YoiB1uSHq7pjcGYpcCebotwy5%2Bou8LW4nmdos8I0n891PxNvfD%2BUQtbqItR4Sax53KgV5jxnqEumJf3ZPYWaVnmrMRLJTlCObaFVsAUcQWma%2FTXedydClZryPGYrtvZSZdGLSkfn4kZb%2F71CdZv7bZIiQUa%2Fg8Q3oUZAecuexWTk8lkiQbfEMuzxqyeJVOSvJ%2FD5XdxGdEDVyeVtJivo4aobXO%2Bwt4j5YWV7y7aLh9W8ph3%2BNg86fQAVQ6Eb4DEjw1Fcf%2FVBNc5JTC98VU6%2FJzGFALgK8sgO%2F6OHEnJj%2BzyxuIGP8mguR4zyEde8ZygAhoun6jGMiORSKa%2ByWObVWwQLs2WvRWHSf7UyTtj2FiQMOehuUsHcZRCKs3W8IQUQhJFt5JHxL1Pq7Fv5IZW8q8fNSmVeGJiH4tbBKH6lFn27IY2l02sTkCrhzYNwWIrkaPc2Sqplf5dHNUytZ%2FGTm7L5AKBzGXFEp6MQF3cnBoXb40kCOx5JGY6LHt4MMLowcoGOqUBMaW3YEKaWfbdkiwSol%2BhX3RiVEiN1wop%2FjKkKMy5wJS9x6dB%2BGVx%2Fi8%2FJKoSrzyDHjCIVawDItSvS0pBy4luQZv100B6mKqRnpvg6PUFmk4sgKsiIRNNDUgfXojvmhHbk6WeSotkjB8cbe1d4bmxyXIvmDU4gepLLNmAuscpvJQoRIPJsNa0KK6XCHr5FyM4mSIhirBNmLf5j48Gu83sJ%2FDJFMNE&X-Amz-Signature=5b56ffad996e947522d8e67c606eaa0b3169fcacd960bd82484d67eaf01e5060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZR4AM4H%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL4R7l7UdvQ4qFvce59xNYKGMiTUChpH3HsB1Hk0Eo6wIgPG%2F0XK0MJl%2BauNe2es0fmcIzQDRRI%2BhxE%2B4F04WmVR4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKP7XM3wXwhY3HpstyrcA4iUuAJdvn9NWlL%2Fv0xxHHpK3wVbWh%2BhXVDVQ4bDdrK5kDHR0fDtLzLI2OgdJK41ZmAmhtt9%2BqbDdaebgvGQSKZyApV%2BLGiNlUF8pCWqFD2Y9Un1ZkOFDpfm4a9IA1cu5YoiB1uSHq7pjcGYpcCebotwy5%2Bou8LW4nmdos8I0n891PxNvfD%2BUQtbqItR4Sax53KgV5jxnqEumJf3ZPYWaVnmrMRLJTlCObaFVsAUcQWma%2FTXedydClZryPGYrtvZSZdGLSkfn4kZb%2F71CdZv7bZIiQUa%2Fg8Q3oUZAecuexWTk8lkiQbfEMuzxqyeJVOSvJ%2FD5XdxGdEDVyeVtJivo4aobXO%2Bwt4j5YWV7y7aLh9W8ph3%2BNg86fQAVQ6Eb4DEjw1Fcf%2FVBNc5JTC98VU6%2FJzGFALgK8sgO%2F6OHEnJj%2BzyxuIGP8mguR4zyEde8ZygAhoun6jGMiORSKa%2ByWObVWwQLs2WvRWHSf7UyTtj2FiQMOehuUsHcZRCKs3W8IQUQhJFt5JHxL1Pq7Fv5IZW8q8fNSmVeGJiH4tbBKH6lFn27IY2l02sTkCrhzYNwWIrkaPc2Sqplf5dHNUytZ%2FGTm7L5AKBzGXFEp6MQF3cnBoXb40kCOx5JGY6LHt4MMLowcoGOqUBMaW3YEKaWfbdkiwSol%2BhX3RiVEiN1wop%2FjKkKMy5wJS9x6dB%2BGVx%2Fi8%2FJKoSrzyDHjCIVawDItSvS0pBy4luQZv100B6mKqRnpvg6PUFmk4sgKsiIRNNDUgfXojvmhHbk6WeSotkjB8cbe1d4bmxyXIvmDU4gepLLNmAuscpvJQoRIPJsNa0KK6XCHr5FyM4mSIhirBNmLf5j48Gu83sJ%2FDJFMNE&X-Amz-Signature=8245c107d4dac41b5534f688fbef2be4585251dcfbca089230c2fd44b77b9618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOB53V5D%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4CYIS7wF2UUG2PcidgXi0%2BKXR2s4Sf%2F%2FWQeh1KuFpaQIgQBINzJMwY2xJpy7wG5cGsKCLHy%2B9%2FvLIBlvRjV%2Frdy4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDNJcxUgqajQNo%2FjfYCrcA%2FGjqSNV7wCKi7oyfYl0J5t6qy8Yc00Vol0e0T%2FhyImXor4iScgOaTqUTfkzNlXoCvPr3gZeGO3K5rchv2uArkfGzjaIpKRfQpl2JuF5y6OjEG8Av%2BVUWcAob3U7XrnIF1v75XnbCed8CUpD9mzipcJ69GWwiECGSYQ8HpY4p3HIEsYolmZKmsrptHP%2Bm%2FuIELJ%2BA5LwbTmKV2QsxIHTTyvDPI2PYHjJ2uutKYoctZcJO1keYWetWLR9MT6wxuNLMV6YdsIc663OchSN7NVl8H0cLHF3DD3i%2BhvGM8dTE7O3SNYcIxtXcKtG0fVyg1Brkk%2B76sAG6e2aq9f7kvljGWKgVtKgbDwxXtBkGwBlGhARmlE0Gol4bjKHjMdSrS69BefEB4DGA5lfez%2BIK7Y6zTik8EL2MxF2WkeThclsrGSIL6HrbxbHmTS3zQshBTUs70dKtPuptT0FUGeqciCUZe%2FIsD6Vr%2B27Fz14FzKTJ4MAcbdmmwxyWEYi%2BrrPsuTPyyB5iEDRZaSLQJZB834SxdbaOsxVn6f9F2FwOWUeBqygMwCXtEliDc0kK%2BZd0NbRkBlHWigHUpxlkB35A5fbYliWnLCZ9vskBnPmd9d3eMCsOH98bHrNZLPJg7PaMP%2FdwcoGOqUBFYpy3BOYYwpj1Z%2F%2BGuMPiGsB5i5YCEy7jQ6Xky1esF6qnSKCiGqi0MJlpIg8pJOhv27r%2BnXhXiaU2fUrhgfbsChoTwDYHf2Ie5iuOCorSzttbz3gjeBX%2FTNGPXJuzWnXtmsB1HuVhWUulDpnOTT2xur9Mp2SfgF0gU7yYh6SZkHAaITjodqXM%2BKgOCDoYlC0LpnO2GRUpyMKMiG7uqgk63%2Br0vtc&X-Amz-Signature=5e9bc24f88ce198f3400c05f395f85d1158aba0f016757944d3468c285cb151f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO:

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

```python "10-11","12-17"
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

```python "9-20","20-23"
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

```python "14-14"
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

```python "6-18","18-19","19-20","20-33"
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTA3I7YM%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB63saiE9EtW3%2BU%2FypvMUNSJxwVVv5VNJuRzX7xXgcaUAiB1gszXVMIP7KSLAUNHefIyrHakgP%2Fyro0a4F9qcyxpdyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMMgRYIUWSVhcunD0nKtwDjhTHIwFtA7Ui%2FDpzuzUTgUL4PuxblwHotQQPhy3fRfv1RkDxDdFqIkvUhx4tt1WZijWaU3LD749mtudNLzz0zctnkU9RyZyJjSFm3CmYIfHX%2BNdfXTAbUKJ5B7%2FQ9OQu7l0TGJSOrTfhlsfDQG2eZ6RbV%2B%2FGDlgmDOY5HX32NbypfvTnuph8fuEPFuKvfV7LLmrG%2Bndq%2BjcXZqAc1Rg8IYikowBkmNyZZjx7FXyzhJzbpbjOQ%2ByCNsatLfgnjxOIgOjg6zcoJaE6OfPck6whp91IYoXyt9jT9N2FHKoe4QOR2IkdOUzXoA6Cc82KLW815SK3740lOsOoGmEUUewMQdSqJhVOy3g1o6%2Bk%2FvW8K5vVOw5PE1I65QLQ9aPrCy%2BhQbrwdw4Cad1VAlQ4P%2Bo0tlp14yvzI2Lf8a4H4HkWPdbw9XF407cuyxQXgBBLFVF5v0rOUR0ailndjxZSQTu0fyxVD2n9WHXVlJDCcvrFVmGqyZJVyPtZzc8pLsRqcs2OEjGfhBpnpeAVMfwbvapn98EJUiCw7YAQjbmg2AP8D3sfrP9iMFl4bH7P0F497rFaIZFUTxKGfcMBLEfOehlP7q4jrSi2zG%2FZtoD2oe%2Fxrn3qBp3zvHare1taT0Iwv%2BPBygY6pgHjcB1hJyorPaSafy%2BtXbjKuq4zriIjiGdL%2FYAXONEOXkTbqz4IGZGMiPqF3NVSmj20w3T6kZi1HF8unBH6aYp4a6L8%2FyMvoAuQU4A%2FXqKawFQ0H96mIwxe9MjrKiZ1JopfC%2FgquXObAQ26u7%2FnUAOtOmcbb%2ForjD9s5OqE9AajlVPf%2Bdzn1BrWhf5y%2BW%2FI8aYHAs9TMYEYRA657kIYjLJ%2F418OoRvB&X-Amz-Signature=c827d0587379f26822d73b4008b450249c3b62f42bf3f70225c37154de954dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTA3I7YM%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB63saiE9EtW3%2BU%2FypvMUNSJxwVVv5VNJuRzX7xXgcaUAiB1gszXVMIP7KSLAUNHefIyrHakgP%2Fyro0a4F9qcyxpdyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMMgRYIUWSVhcunD0nKtwDjhTHIwFtA7Ui%2FDpzuzUTgUL4PuxblwHotQQPhy3fRfv1RkDxDdFqIkvUhx4tt1WZijWaU3LD749mtudNLzz0zctnkU9RyZyJjSFm3CmYIfHX%2BNdfXTAbUKJ5B7%2FQ9OQu7l0TGJSOrTfhlsfDQG2eZ6RbV%2B%2FGDlgmDOY5HX32NbypfvTnuph8fuEPFuKvfV7LLmrG%2Bndq%2BjcXZqAc1Rg8IYikowBkmNyZZjx7FXyzhJzbpbjOQ%2ByCNsatLfgnjxOIgOjg6zcoJaE6OfPck6whp91IYoXyt9jT9N2FHKoe4QOR2IkdOUzXoA6Cc82KLW815SK3740lOsOoGmEUUewMQdSqJhVOy3g1o6%2Bk%2FvW8K5vVOw5PE1I65QLQ9aPrCy%2BhQbrwdw4Cad1VAlQ4P%2Bo0tlp14yvzI2Lf8a4H4HkWPdbw9XF407cuyxQXgBBLFVF5v0rOUR0ailndjxZSQTu0fyxVD2n9WHXVlJDCcvrFVmGqyZJVyPtZzc8pLsRqcs2OEjGfhBpnpeAVMfwbvapn98EJUiCw7YAQjbmg2AP8D3sfrP9iMFl4bH7P0F497rFaIZFUTxKGfcMBLEfOehlP7q4jrSi2zG%2FZtoD2oe%2Fxrn3qBp3zvHare1taT0Iwv%2BPBygY6pgHjcB1hJyorPaSafy%2BtXbjKuq4zriIjiGdL%2FYAXONEOXkTbqz4IGZGMiPqF3NVSmj20w3T6kZi1HF8unBH6aYp4a6L8%2FyMvoAuQU4A%2FXqKawFQ0H96mIwxe9MjrKiZ1JopfC%2FgquXObAQ26u7%2FnUAOtOmcbb%2ForjD9s5OqE9AajlVPf%2Bdzn1BrWhf5y%2BW%2FI8aYHAs9TMYEYRA657kIYjLJ%2F418OoRvB&X-Amz-Signature=94119ab77ed40cb68f864d98ea1369f86083f1af12e038deb6c4978181dfb1d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTA3I7YM%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB63saiE9EtW3%2BU%2FypvMUNSJxwVVv5VNJuRzX7xXgcaUAiB1gszXVMIP7KSLAUNHefIyrHakgP%2Fyro0a4F9qcyxpdyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMMgRYIUWSVhcunD0nKtwDjhTHIwFtA7Ui%2FDpzuzUTgUL4PuxblwHotQQPhy3fRfv1RkDxDdFqIkvUhx4tt1WZijWaU3LD749mtudNLzz0zctnkU9RyZyJjSFm3CmYIfHX%2BNdfXTAbUKJ5B7%2FQ9OQu7l0TGJSOrTfhlsfDQG2eZ6RbV%2B%2FGDlgmDOY5HX32NbypfvTnuph8fuEPFuKvfV7LLmrG%2Bndq%2BjcXZqAc1Rg8IYikowBkmNyZZjx7FXyzhJzbpbjOQ%2ByCNsatLfgnjxOIgOjg6zcoJaE6OfPck6whp91IYoXyt9jT9N2FHKoe4QOR2IkdOUzXoA6Cc82KLW815SK3740lOsOoGmEUUewMQdSqJhVOy3g1o6%2Bk%2FvW8K5vVOw5PE1I65QLQ9aPrCy%2BhQbrwdw4Cad1VAlQ4P%2Bo0tlp14yvzI2Lf8a4H4HkWPdbw9XF407cuyxQXgBBLFVF5v0rOUR0ailndjxZSQTu0fyxVD2n9WHXVlJDCcvrFVmGqyZJVyPtZzc8pLsRqcs2OEjGfhBpnpeAVMfwbvapn98EJUiCw7YAQjbmg2AP8D3sfrP9iMFl4bH7P0F497rFaIZFUTxKGfcMBLEfOehlP7q4jrSi2zG%2FZtoD2oe%2Fxrn3qBp3zvHare1taT0Iwv%2BPBygY6pgHjcB1hJyorPaSafy%2BtXbjKuq4zriIjiGdL%2FYAXONEOXkTbqz4IGZGMiPqF3NVSmj20w3T6kZi1HF8unBH6aYp4a6L8%2FyMvoAuQU4A%2FXqKawFQ0H96mIwxe9MjrKiZ1JopfC%2FgquXObAQ26u7%2FnUAOtOmcbb%2ForjD9s5OqE9AajlVPf%2Bdzn1BrWhf5y%2BW%2FI8aYHAs9TMYEYRA657kIYjLJ%2F418OoRvB&X-Amz-Signature=f2e80cf2d720184eae4e818bfd172650d1826b75efba7b39ec84a66e4717521f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python "18-18","24-25"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTA3I7YM%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB63saiE9EtW3%2BU%2FypvMUNSJxwVVv5VNJuRzX7xXgcaUAiB1gszXVMIP7KSLAUNHefIyrHakgP%2Fyro0a4F9qcyxpdyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMMgRYIUWSVhcunD0nKtwDjhTHIwFtA7Ui%2FDpzuzUTgUL4PuxblwHotQQPhy3fRfv1RkDxDdFqIkvUhx4tt1WZijWaU3LD749mtudNLzz0zctnkU9RyZyJjSFm3CmYIfHX%2BNdfXTAbUKJ5B7%2FQ9OQu7l0TGJSOrTfhlsfDQG2eZ6RbV%2B%2FGDlgmDOY5HX32NbypfvTnuph8fuEPFuKvfV7LLmrG%2Bndq%2BjcXZqAc1Rg8IYikowBkmNyZZjx7FXyzhJzbpbjOQ%2ByCNsatLfgnjxOIgOjg6zcoJaE6OfPck6whp91IYoXyt9jT9N2FHKoe4QOR2IkdOUzXoA6Cc82KLW815SK3740lOsOoGmEUUewMQdSqJhVOy3g1o6%2Bk%2FvW8K5vVOw5PE1I65QLQ9aPrCy%2BhQbrwdw4Cad1VAlQ4P%2Bo0tlp14yvzI2Lf8a4H4HkWPdbw9XF407cuyxQXgBBLFVF5v0rOUR0ailndjxZSQTu0fyxVD2n9WHXVlJDCcvrFVmGqyZJVyPtZzc8pLsRqcs2OEjGfhBpnpeAVMfwbvapn98EJUiCw7YAQjbmg2AP8D3sfrP9iMFl4bH7P0F497rFaIZFUTxKGfcMBLEfOehlP7q4jrSi2zG%2FZtoD2oe%2Fxrn3qBp3zvHare1taT0Iwv%2BPBygY6pgHjcB1hJyorPaSafy%2BtXbjKuq4zriIjiGdL%2FYAXONEOXkTbqz4IGZGMiPqF3NVSmj20w3T6kZi1HF8unBH6aYp4a6L8%2FyMvoAuQU4A%2FXqKawFQ0H96mIwxe9MjrKiZ1JopfC%2FgquXObAQ26u7%2FnUAOtOmcbb%2ForjD9s5OqE9AajlVPf%2Bdzn1BrWhf5y%2BW%2FI8aYHAs9TMYEYRA657kIYjLJ%2F418OoRvB&X-Amz-Signature=d61a64b2ed7d9e24cf9f0f69afd6f57b8a11dab39996397e484ed683c198063b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

#### Params:

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTA3I7YM%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB63saiE9EtW3%2BU%2FypvMUNSJxwVVv5VNJuRzX7xXgcaUAiB1gszXVMIP7KSLAUNHefIyrHakgP%2Fyro0a4F9qcyxpdyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMMgRYIUWSVhcunD0nKtwDjhTHIwFtA7Ui%2FDpzuzUTgUL4PuxblwHotQQPhy3fRfv1RkDxDdFqIkvUhx4tt1WZijWaU3LD749mtudNLzz0zctnkU9RyZyJjSFm3CmYIfHX%2BNdfXTAbUKJ5B7%2FQ9OQu7l0TGJSOrTfhlsfDQG2eZ6RbV%2B%2FGDlgmDOY5HX32NbypfvTnuph8fuEPFuKvfV7LLmrG%2Bndq%2BjcXZqAc1Rg8IYikowBkmNyZZjx7FXyzhJzbpbjOQ%2ByCNsatLfgnjxOIgOjg6zcoJaE6OfPck6whp91IYoXyt9jT9N2FHKoe4QOR2IkdOUzXoA6Cc82KLW815SK3740lOsOoGmEUUewMQdSqJhVOy3g1o6%2Bk%2FvW8K5vVOw5PE1I65QLQ9aPrCy%2BhQbrwdw4Cad1VAlQ4P%2Bo0tlp14yvzI2Lf8a4H4HkWPdbw9XF407cuyxQXgBBLFVF5v0rOUR0ailndjxZSQTu0fyxVD2n9WHXVlJDCcvrFVmGqyZJVyPtZzc8pLsRqcs2OEjGfhBpnpeAVMfwbvapn98EJUiCw7YAQjbmg2AP8D3sfrP9iMFl4bH7P0F497rFaIZFUTxKGfcMBLEfOehlP7q4jrSi2zG%2FZtoD2oe%2Fxrn3qBp3zvHare1taT0Iwv%2BPBygY6pgHjcB1hJyorPaSafy%2BtXbjKuq4zriIjiGdL%2FYAXONEOXkTbqz4IGZGMiPqF3NVSmj20w3T6kZi1HF8unBH6aYp4a6L8%2FyMvoAuQU4A%2FXqKawFQ0H96mIwxe9MjrKiZ1JopfC%2FgquXObAQ26u7%2FnUAOtOmcbb%2ForjD9s5OqE9AajlVPf%2Bdzn1BrWhf5y%2BW%2FI8aYHAs9TMYEYRA657kIYjLJ%2F418OoRvB&X-Amz-Signature=95e1cfe7b5a6e89ffabc1c0ef98e2ab0e80135460e1c02277b16a64d56bb1929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTA3I7YM%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB63saiE9EtW3%2BU%2FypvMUNSJxwVVv5VNJuRzX7xXgcaUAiB1gszXVMIP7KSLAUNHefIyrHakgP%2Fyro0a4F9qcyxpdyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMMgRYIUWSVhcunD0nKtwDjhTHIwFtA7Ui%2FDpzuzUTgUL4PuxblwHotQQPhy3fRfv1RkDxDdFqIkvUhx4tt1WZijWaU3LD749mtudNLzz0zctnkU9RyZyJjSFm3CmYIfHX%2BNdfXTAbUKJ5B7%2FQ9OQu7l0TGJSOrTfhlsfDQG2eZ6RbV%2B%2FGDlgmDOY5HX32NbypfvTnuph8fuEPFuKvfV7LLmrG%2Bndq%2BjcXZqAc1Rg8IYikowBkmNyZZjx7FXyzhJzbpbjOQ%2ByCNsatLfgnjxOIgOjg6zcoJaE6OfPck6whp91IYoXyt9jT9N2FHKoe4QOR2IkdOUzXoA6Cc82KLW815SK3740lOsOoGmEUUewMQdSqJhVOy3g1o6%2Bk%2FvW8K5vVOw5PE1I65QLQ9aPrCy%2BhQbrwdw4Cad1VAlQ4P%2Bo0tlp14yvzI2Lf8a4H4HkWPdbw9XF407cuyxQXgBBLFVF5v0rOUR0ailndjxZSQTu0fyxVD2n9WHXVlJDCcvrFVmGqyZJVyPtZzc8pLsRqcs2OEjGfhBpnpeAVMfwbvapn98EJUiCw7YAQjbmg2AP8D3sfrP9iMFl4bH7P0F497rFaIZFUTxKGfcMBLEfOehlP7q4jrSi2zG%2FZtoD2oe%2Fxrn3qBp3zvHare1taT0Iwv%2BPBygY6pgHjcB1hJyorPaSafy%2BtXbjKuq4zriIjiGdL%2FYAXONEOXkTbqz4IGZGMiPqF3NVSmj20w3T6kZi1HF8unBH6aYp4a6L8%2FyMvoAuQU4A%2FXqKawFQ0H96mIwxe9MjrKiZ1JopfC%2FgquXObAQ26u7%2FnUAOtOmcbb%2ForjD9s5OqE9AajlVPf%2Bdzn1BrWhf5y%2BW%2FI8aYHAs9TMYEYRA657kIYjLJ%2F418OoRvB&X-Amz-Signature=d34b9bba5110885ad60a8a1e470d983be35eb6d59f74b6edefab457c779ea571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTA3I7YM%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB63saiE9EtW3%2BU%2FypvMUNSJxwVVv5VNJuRzX7xXgcaUAiB1gszXVMIP7KSLAUNHefIyrHakgP%2Fyro0a4F9qcyxpdyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMMgRYIUWSVhcunD0nKtwDjhTHIwFtA7Ui%2FDpzuzUTgUL4PuxblwHotQQPhy3fRfv1RkDxDdFqIkvUhx4tt1WZijWaU3LD749mtudNLzz0zctnkU9RyZyJjSFm3CmYIfHX%2BNdfXTAbUKJ5B7%2FQ9OQu7l0TGJSOrTfhlsfDQG2eZ6RbV%2B%2FGDlgmDOY5HX32NbypfvTnuph8fuEPFuKvfV7LLmrG%2Bndq%2BjcXZqAc1Rg8IYikowBkmNyZZjx7FXyzhJzbpbjOQ%2ByCNsatLfgnjxOIgOjg6zcoJaE6OfPck6whp91IYoXyt9jT9N2FHKoe4QOR2IkdOUzXoA6Cc82KLW815SK3740lOsOoGmEUUewMQdSqJhVOy3g1o6%2Bk%2FvW8K5vVOw5PE1I65QLQ9aPrCy%2BhQbrwdw4Cad1VAlQ4P%2Bo0tlp14yvzI2Lf8a4H4HkWPdbw9XF407cuyxQXgBBLFVF5v0rOUR0ailndjxZSQTu0fyxVD2n9WHXVlJDCcvrFVmGqyZJVyPtZzc8pLsRqcs2OEjGfhBpnpeAVMfwbvapn98EJUiCw7YAQjbmg2AP8D3sfrP9iMFl4bH7P0F497rFaIZFUTxKGfcMBLEfOehlP7q4jrSi2zG%2FZtoD2oe%2Fxrn3qBp3zvHare1taT0Iwv%2BPBygY6pgHjcB1hJyorPaSafy%2BtXbjKuq4zriIjiGdL%2FYAXONEOXkTbqz4IGZGMiPqF3NVSmj20w3T6kZi1HF8unBH6aYp4a6L8%2FyMvoAuQU4A%2FXqKawFQ0H96mIwxe9MjrKiZ1JopfC%2FgquXObAQ26u7%2FnUAOtOmcbb%2ForjD9s5OqE9AajlVPf%2Bdzn1BrWhf5y%2BW%2FI8aYHAs9TMYEYRA657kIYjLJ%2F418OoRvB&X-Amz-Signature=b2e3e4546617f1aeda7b5958ce67baa8ea38d41161650e6a9a4c675fd625f51a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTA3I7YM%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB63saiE9EtW3%2BU%2FypvMUNSJxwVVv5VNJuRzX7xXgcaUAiB1gszXVMIP7KSLAUNHefIyrHakgP%2Fyro0a4F9qcyxpdyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMMgRYIUWSVhcunD0nKtwDjhTHIwFtA7Ui%2FDpzuzUTgUL4PuxblwHotQQPhy3fRfv1RkDxDdFqIkvUhx4tt1WZijWaU3LD749mtudNLzz0zctnkU9RyZyJjSFm3CmYIfHX%2BNdfXTAbUKJ5B7%2FQ9OQu7l0TGJSOrTfhlsfDQG2eZ6RbV%2B%2FGDlgmDOY5HX32NbypfvTnuph8fuEPFuKvfV7LLmrG%2Bndq%2BjcXZqAc1Rg8IYikowBkmNyZZjx7FXyzhJzbpbjOQ%2ByCNsatLfgnjxOIgOjg6zcoJaE6OfPck6whp91IYoXyt9jT9N2FHKoe4QOR2IkdOUzXoA6Cc82KLW815SK3740lOsOoGmEUUewMQdSqJhVOy3g1o6%2Bk%2FvW8K5vVOw5PE1I65QLQ9aPrCy%2BhQbrwdw4Cad1VAlQ4P%2Bo0tlp14yvzI2Lf8a4H4HkWPdbw9XF407cuyxQXgBBLFVF5v0rOUR0ailndjxZSQTu0fyxVD2n9WHXVlJDCcvrFVmGqyZJVyPtZzc8pLsRqcs2OEjGfhBpnpeAVMfwbvapn98EJUiCw7YAQjbmg2AP8D3sfrP9iMFl4bH7P0F497rFaIZFUTxKGfcMBLEfOehlP7q4jrSi2zG%2FZtoD2oe%2Fxrn3qBp3zvHare1taT0Iwv%2BPBygY6pgHjcB1hJyorPaSafy%2BtXbjKuq4zriIjiGdL%2FYAXONEOXkTbqz4IGZGMiPqF3NVSmj20w3T6kZi1HF8unBH6aYp4a6L8%2FyMvoAuQU4A%2FXqKawFQ0H96mIwxe9MjrKiZ1JopfC%2FgquXObAQ26u7%2FnUAOtOmcbb%2ForjD9s5OqE9AajlVPf%2Bdzn1BrWhf5y%2BW%2FI8aYHAs9TMYEYRA657kIYjLJ%2F418OoRvB&X-Amz-Signature=ea0906c89eb1028bf4946a04339ec310c663f1381628c7ed9ea7361d436ad830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTA3I7YM%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB63saiE9EtW3%2BU%2FypvMUNSJxwVVv5VNJuRzX7xXgcaUAiB1gszXVMIP7KSLAUNHefIyrHakgP%2Fyro0a4F9qcyxpdyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMMgRYIUWSVhcunD0nKtwDjhTHIwFtA7Ui%2FDpzuzUTgUL4PuxblwHotQQPhy3fRfv1RkDxDdFqIkvUhx4tt1WZijWaU3LD749mtudNLzz0zctnkU9RyZyJjSFm3CmYIfHX%2BNdfXTAbUKJ5B7%2FQ9OQu7l0TGJSOrTfhlsfDQG2eZ6RbV%2B%2FGDlgmDOY5HX32NbypfvTnuph8fuEPFuKvfV7LLmrG%2Bndq%2BjcXZqAc1Rg8IYikowBkmNyZZjx7FXyzhJzbpbjOQ%2ByCNsatLfgnjxOIgOjg6zcoJaE6OfPck6whp91IYoXyt9jT9N2FHKoe4QOR2IkdOUzXoA6Cc82KLW815SK3740lOsOoGmEUUewMQdSqJhVOy3g1o6%2Bk%2FvW8K5vVOw5PE1I65QLQ9aPrCy%2BhQbrwdw4Cad1VAlQ4P%2Bo0tlp14yvzI2Lf8a4H4HkWPdbw9XF407cuyxQXgBBLFVF5v0rOUR0ailndjxZSQTu0fyxVD2n9WHXVlJDCcvrFVmGqyZJVyPtZzc8pLsRqcs2OEjGfhBpnpeAVMfwbvapn98EJUiCw7YAQjbmg2AP8D3sfrP9iMFl4bH7P0F497rFaIZFUTxKGfcMBLEfOehlP7q4jrSi2zG%2FZtoD2oe%2Fxrn3qBp3zvHare1taT0Iwv%2BPBygY6pgHjcB1hJyorPaSafy%2BtXbjKuq4zriIjiGdL%2FYAXONEOXkTbqz4IGZGMiPqF3NVSmj20w3T6kZi1HF8unBH6aYp4a6L8%2FyMvoAuQU4A%2FXqKawFQ0H96mIwxe9MjrKiZ1JopfC%2FgquXObAQ26u7%2FnUAOtOmcbb%2ForjD9s5OqE9AajlVPf%2Bdzn1BrWhf5y%2BW%2FI8aYHAs9TMYEYRA657kIYjLJ%2F418OoRvB&X-Amz-Signature=0023ca6ffdf819aa3111025298b2773167eed7e957a43c498448f598cfda88be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "10-10","16-27"
       
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
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin


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

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.05 seconds

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # broadcasts the odom tf frame

        # call listener_callback() when /cmd_vel topic recives a msg
        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 
    

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th = self.left_wheel_th+0.01 # reading motor position goes here
        new_right_wheel_th = self.right_wheel_th+0.02 # reading motor position goes here
        
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

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.left_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th) # converts theta to quaternions
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans) # publish transform

        # update left and right wheel positions
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th


    # gets called when /cmd_vel topic recives a msg
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # self.get_logger().info(f'{msg}')


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

</details>



For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
