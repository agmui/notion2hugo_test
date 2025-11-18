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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q36QKIGQ%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt3vpySLnR9w%2BISenTKHv2YMrL3o0f8H3swSRuXRXchgIhAILnLTnuIHAhgqCC2XOJFo1cpiZ8id88MQx%2FK%2FM2Je2gKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlDlKHbiARGQ4%2F6E8q3AOlfG5AIbsTRz5GyIel6ImhVs4i7FS7LoEebR1c5%2BAc9zFT%2Fv8oFXwHsTtf2q%2B3Z4Y6R3fIP%2BOM4JTDIWvJ94RY94bOXvGM4f354M3yGOgs0irvflkpLfkjGy1%2B7aIQMccYL5yB5rTw%2BlUASVZph8p%2BreAR1zBw%2Ffs1sTkzlpBSm%2BUuU9u42hqrPEmWOVExjwPjez1JQZycOuymlTWfM7%2BAIU8tdAdPt0I2bPela0FPPXeUz%2FqnRZK5KCADqk6aHBHahR8zZayeEFoiiwkn5jAlHsOLf8HNSh3FnBt4rX17PRhpC%2B5qljSQ0PBnmoW0PZZ%2Fd8uoBVE%2FV%2BDSt5ZJ7jiclFe61hK9%2BBGb0%2BQbhEQMxk2aqokfWo58BcFGC4FcxDkuT5El9cU1rgHw7HGRKjQoNK0i4JwtFmN6O1LVW1JXNWYm5MZYt7nFQ1Fvaofltxq2hArMq4SSclkykUKWwCJpgY%2FZoLPQGViFhUeBWO8Fxg99fHG6RJtPlB%2BN%2Fc%2FRZ7lijjYWLWU65F%2FG2d7E33VOOcqiSpY9cvbLKGqXczSAMIDwpC7kF0Y35vsGfL6pEP1lrZ4m9KzxI%2Bl%2F5jnyC7EC8NElOI4VtyBsEkvzemx7W%2BlfM4uhtAaEn%2Fz8ITDNmO%2FIBjqkAVyGaWr7AJrTqD0tYWLM%2FgC6XO1ShTjUtvN5TZHdwmG1CTfq%2B%2FkQyfx5%2Fm5TC%2Fb5jKVfDhA%2FyCEPnESuCpEm1Atmk23U3HUY%2BOiyYjg6SFhSsWegxnutwRxcHI6QAkCzB0ty1lS0HUzMxdGNDVpi9c8KM3e463NoRyFamgeV7GDHkRr39MjuPUPRqC9bDkbYvI%2FS8tjcS5IYfcf8Nm0Q6bTGUBF9&X-Amz-Signature=1b89c1d3b4a640567bb262fefd4ee136ec3aeabdbf852cb217e575556fac9e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q36QKIGQ%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt3vpySLnR9w%2BISenTKHv2YMrL3o0f8H3swSRuXRXchgIhAILnLTnuIHAhgqCC2XOJFo1cpiZ8id88MQx%2FK%2FM2Je2gKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlDlKHbiARGQ4%2F6E8q3AOlfG5AIbsTRz5GyIel6ImhVs4i7FS7LoEebR1c5%2BAc9zFT%2Fv8oFXwHsTtf2q%2B3Z4Y6R3fIP%2BOM4JTDIWvJ94RY94bOXvGM4f354M3yGOgs0irvflkpLfkjGy1%2B7aIQMccYL5yB5rTw%2BlUASVZph8p%2BreAR1zBw%2Ffs1sTkzlpBSm%2BUuU9u42hqrPEmWOVExjwPjez1JQZycOuymlTWfM7%2BAIU8tdAdPt0I2bPela0FPPXeUz%2FqnRZK5KCADqk6aHBHahR8zZayeEFoiiwkn5jAlHsOLf8HNSh3FnBt4rX17PRhpC%2B5qljSQ0PBnmoW0PZZ%2Fd8uoBVE%2FV%2BDSt5ZJ7jiclFe61hK9%2BBGb0%2BQbhEQMxk2aqokfWo58BcFGC4FcxDkuT5El9cU1rgHw7HGRKjQoNK0i4JwtFmN6O1LVW1JXNWYm5MZYt7nFQ1Fvaofltxq2hArMq4SSclkykUKWwCJpgY%2FZoLPQGViFhUeBWO8Fxg99fHG6RJtPlB%2BN%2Fc%2FRZ7lijjYWLWU65F%2FG2d7E33VOOcqiSpY9cvbLKGqXczSAMIDwpC7kF0Y35vsGfL6pEP1lrZ4m9KzxI%2Bl%2F5jnyC7EC8NElOI4VtyBsEkvzemx7W%2BlfM4uhtAaEn%2Fz8ITDNmO%2FIBjqkAVyGaWr7AJrTqD0tYWLM%2FgC6XO1ShTjUtvN5TZHdwmG1CTfq%2B%2FkQyfx5%2Fm5TC%2Fb5jKVfDhA%2FyCEPnESuCpEm1Atmk23U3HUY%2BOiyYjg6SFhSsWegxnutwRxcHI6QAkCzB0ty1lS0HUzMxdGNDVpi9c8KM3e463NoRyFamgeV7GDHkRr39MjuPUPRqC9bDkbYvI%2FS8tjcS5IYfcf8Nm0Q6bTGUBF9&X-Amz-Signature=b3b256f8c4b6c7a9e7c62e592fe0a045f4e16372ce58fb960cca74379d7c5e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q36QKIGQ%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt3vpySLnR9w%2BISenTKHv2YMrL3o0f8H3swSRuXRXchgIhAILnLTnuIHAhgqCC2XOJFo1cpiZ8id88MQx%2FK%2FM2Je2gKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlDlKHbiARGQ4%2F6E8q3AOlfG5AIbsTRz5GyIel6ImhVs4i7FS7LoEebR1c5%2BAc9zFT%2Fv8oFXwHsTtf2q%2B3Z4Y6R3fIP%2BOM4JTDIWvJ94RY94bOXvGM4f354M3yGOgs0irvflkpLfkjGy1%2B7aIQMccYL5yB5rTw%2BlUASVZph8p%2BreAR1zBw%2Ffs1sTkzlpBSm%2BUuU9u42hqrPEmWOVExjwPjez1JQZycOuymlTWfM7%2BAIU8tdAdPt0I2bPela0FPPXeUz%2FqnRZK5KCADqk6aHBHahR8zZayeEFoiiwkn5jAlHsOLf8HNSh3FnBt4rX17PRhpC%2B5qljSQ0PBnmoW0PZZ%2Fd8uoBVE%2FV%2BDSt5ZJ7jiclFe61hK9%2BBGb0%2BQbhEQMxk2aqokfWo58BcFGC4FcxDkuT5El9cU1rgHw7HGRKjQoNK0i4JwtFmN6O1LVW1JXNWYm5MZYt7nFQ1Fvaofltxq2hArMq4SSclkykUKWwCJpgY%2FZoLPQGViFhUeBWO8Fxg99fHG6RJtPlB%2BN%2Fc%2FRZ7lijjYWLWU65F%2FG2d7E33VOOcqiSpY9cvbLKGqXczSAMIDwpC7kF0Y35vsGfL6pEP1lrZ4m9KzxI%2Bl%2F5jnyC7EC8NElOI4VtyBsEkvzemx7W%2BlfM4uhtAaEn%2Fz8ITDNmO%2FIBjqkAVyGaWr7AJrTqD0tYWLM%2FgC6XO1ShTjUtvN5TZHdwmG1CTfq%2B%2FkQyfx5%2Fm5TC%2Fb5jKVfDhA%2FyCEPnESuCpEm1Atmk23U3HUY%2BOiyYjg6SFhSsWegxnutwRxcHI6QAkCzB0ty1lS0HUzMxdGNDVpi9c8KM3e463NoRyFamgeV7GDHkRr39MjuPUPRqC9bDkbYvI%2FS8tjcS5IYfcf8Nm0Q6bTGUBF9&X-Amz-Signature=a8c9053d2e2dd1fe8c264a68d78f8cb7e61f0e50856077e30e3d6d12df4c65b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q36QKIGQ%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt3vpySLnR9w%2BISenTKHv2YMrL3o0f8H3swSRuXRXchgIhAILnLTnuIHAhgqCC2XOJFo1cpiZ8id88MQx%2FK%2FM2Je2gKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlDlKHbiARGQ4%2F6E8q3AOlfG5AIbsTRz5GyIel6ImhVs4i7FS7LoEebR1c5%2BAc9zFT%2Fv8oFXwHsTtf2q%2B3Z4Y6R3fIP%2BOM4JTDIWvJ94RY94bOXvGM4f354M3yGOgs0irvflkpLfkjGy1%2B7aIQMccYL5yB5rTw%2BlUASVZph8p%2BreAR1zBw%2Ffs1sTkzlpBSm%2BUuU9u42hqrPEmWOVExjwPjez1JQZycOuymlTWfM7%2BAIU8tdAdPt0I2bPela0FPPXeUz%2FqnRZK5KCADqk6aHBHahR8zZayeEFoiiwkn5jAlHsOLf8HNSh3FnBt4rX17PRhpC%2B5qljSQ0PBnmoW0PZZ%2Fd8uoBVE%2FV%2BDSt5ZJ7jiclFe61hK9%2BBGb0%2BQbhEQMxk2aqokfWo58BcFGC4FcxDkuT5El9cU1rgHw7HGRKjQoNK0i4JwtFmN6O1LVW1JXNWYm5MZYt7nFQ1Fvaofltxq2hArMq4SSclkykUKWwCJpgY%2FZoLPQGViFhUeBWO8Fxg99fHG6RJtPlB%2BN%2Fc%2FRZ7lijjYWLWU65F%2FG2d7E33VOOcqiSpY9cvbLKGqXczSAMIDwpC7kF0Y35vsGfL6pEP1lrZ4m9KzxI%2Bl%2F5jnyC7EC8NElOI4VtyBsEkvzemx7W%2BlfM4uhtAaEn%2Fz8ITDNmO%2FIBjqkAVyGaWr7AJrTqD0tYWLM%2FgC6XO1ShTjUtvN5TZHdwmG1CTfq%2B%2FkQyfx5%2Fm5TC%2Fb5jKVfDhA%2FyCEPnESuCpEm1Atmk23U3HUY%2BOiyYjg6SFhSsWegxnutwRxcHI6QAkCzB0ty1lS0HUzMxdGNDVpi9c8KM3e463NoRyFamgeV7GDHkRr39MjuPUPRqC9bDkbYvI%2FS8tjcS5IYfcf8Nm0Q6bTGUBF9&X-Amz-Signature=02209f7ee4994a053cff692b277da7d79462980b6a69f35a1d60743982d9472f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q36QKIGQ%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt3vpySLnR9w%2BISenTKHv2YMrL3o0f8H3swSRuXRXchgIhAILnLTnuIHAhgqCC2XOJFo1cpiZ8id88MQx%2FK%2FM2Je2gKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlDlKHbiARGQ4%2F6E8q3AOlfG5AIbsTRz5GyIel6ImhVs4i7FS7LoEebR1c5%2BAc9zFT%2Fv8oFXwHsTtf2q%2B3Z4Y6R3fIP%2BOM4JTDIWvJ94RY94bOXvGM4f354M3yGOgs0irvflkpLfkjGy1%2B7aIQMccYL5yB5rTw%2BlUASVZph8p%2BreAR1zBw%2Ffs1sTkzlpBSm%2BUuU9u42hqrPEmWOVExjwPjez1JQZycOuymlTWfM7%2BAIU8tdAdPt0I2bPela0FPPXeUz%2FqnRZK5KCADqk6aHBHahR8zZayeEFoiiwkn5jAlHsOLf8HNSh3FnBt4rX17PRhpC%2B5qljSQ0PBnmoW0PZZ%2Fd8uoBVE%2FV%2BDSt5ZJ7jiclFe61hK9%2BBGb0%2BQbhEQMxk2aqokfWo58BcFGC4FcxDkuT5El9cU1rgHw7HGRKjQoNK0i4JwtFmN6O1LVW1JXNWYm5MZYt7nFQ1Fvaofltxq2hArMq4SSclkykUKWwCJpgY%2FZoLPQGViFhUeBWO8Fxg99fHG6RJtPlB%2BN%2Fc%2FRZ7lijjYWLWU65F%2FG2d7E33VOOcqiSpY9cvbLKGqXczSAMIDwpC7kF0Y35vsGfL6pEP1lrZ4m9KzxI%2Bl%2F5jnyC7EC8NElOI4VtyBsEkvzemx7W%2BlfM4uhtAaEn%2Fz8ITDNmO%2FIBjqkAVyGaWr7AJrTqD0tYWLM%2FgC6XO1ShTjUtvN5TZHdwmG1CTfq%2B%2FkQyfx5%2Fm5TC%2Fb5jKVfDhA%2FyCEPnESuCpEm1Atmk23U3HUY%2BOiyYjg6SFhSsWegxnutwRxcHI6QAkCzB0ty1lS0HUzMxdGNDVpi9c8KM3e463NoRyFamgeV7GDHkRr39MjuPUPRqC9bDkbYvI%2FS8tjcS5IYfcf8Nm0Q6bTGUBF9&X-Amz-Signature=09a71da688b4f963457c3be3e6feecf38ef7dc92a9ac51bfedacff38118b734d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q36QKIGQ%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt3vpySLnR9w%2BISenTKHv2YMrL3o0f8H3swSRuXRXchgIhAILnLTnuIHAhgqCC2XOJFo1cpiZ8id88MQx%2FK%2FM2Je2gKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlDlKHbiARGQ4%2F6E8q3AOlfG5AIbsTRz5GyIel6ImhVs4i7FS7LoEebR1c5%2BAc9zFT%2Fv8oFXwHsTtf2q%2B3Z4Y6R3fIP%2BOM4JTDIWvJ94RY94bOXvGM4f354M3yGOgs0irvflkpLfkjGy1%2B7aIQMccYL5yB5rTw%2BlUASVZph8p%2BreAR1zBw%2Ffs1sTkzlpBSm%2BUuU9u42hqrPEmWOVExjwPjez1JQZycOuymlTWfM7%2BAIU8tdAdPt0I2bPela0FPPXeUz%2FqnRZK5KCADqk6aHBHahR8zZayeEFoiiwkn5jAlHsOLf8HNSh3FnBt4rX17PRhpC%2B5qljSQ0PBnmoW0PZZ%2Fd8uoBVE%2FV%2BDSt5ZJ7jiclFe61hK9%2BBGb0%2BQbhEQMxk2aqokfWo58BcFGC4FcxDkuT5El9cU1rgHw7HGRKjQoNK0i4JwtFmN6O1LVW1JXNWYm5MZYt7nFQ1Fvaofltxq2hArMq4SSclkykUKWwCJpgY%2FZoLPQGViFhUeBWO8Fxg99fHG6RJtPlB%2BN%2Fc%2FRZ7lijjYWLWU65F%2FG2d7E33VOOcqiSpY9cvbLKGqXczSAMIDwpC7kF0Y35vsGfL6pEP1lrZ4m9KzxI%2Bl%2F5jnyC7EC8NElOI4VtyBsEkvzemx7W%2BlfM4uhtAaEn%2Fz8ITDNmO%2FIBjqkAVyGaWr7AJrTqD0tYWLM%2FgC6XO1ShTjUtvN5TZHdwmG1CTfq%2B%2FkQyfx5%2Fm5TC%2Fb5jKVfDhA%2FyCEPnESuCpEm1Atmk23U3HUY%2BOiyYjg6SFhSsWegxnutwRxcHI6QAkCzB0ty1lS0HUzMxdGNDVpi9c8KM3e463NoRyFamgeV7GDHkRr39MjuPUPRqC9bDkbYvI%2FS8tjcS5IYfcf8Nm0Q6bTGUBF9&X-Amz-Signature=3aef46926e09d45ccb7eadd866b71243661a17050c5fb87a5a5a6adac3471be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q36QKIGQ%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt3vpySLnR9w%2BISenTKHv2YMrL3o0f8H3swSRuXRXchgIhAILnLTnuIHAhgqCC2XOJFo1cpiZ8id88MQx%2FK%2FM2Je2gKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlDlKHbiARGQ4%2F6E8q3AOlfG5AIbsTRz5GyIel6ImhVs4i7FS7LoEebR1c5%2BAc9zFT%2Fv8oFXwHsTtf2q%2B3Z4Y6R3fIP%2BOM4JTDIWvJ94RY94bOXvGM4f354M3yGOgs0irvflkpLfkjGy1%2B7aIQMccYL5yB5rTw%2BlUASVZph8p%2BreAR1zBw%2Ffs1sTkzlpBSm%2BUuU9u42hqrPEmWOVExjwPjez1JQZycOuymlTWfM7%2BAIU8tdAdPt0I2bPela0FPPXeUz%2FqnRZK5KCADqk6aHBHahR8zZayeEFoiiwkn5jAlHsOLf8HNSh3FnBt4rX17PRhpC%2B5qljSQ0PBnmoW0PZZ%2Fd8uoBVE%2FV%2BDSt5ZJ7jiclFe61hK9%2BBGb0%2BQbhEQMxk2aqokfWo58BcFGC4FcxDkuT5El9cU1rgHw7HGRKjQoNK0i4JwtFmN6O1LVW1JXNWYm5MZYt7nFQ1Fvaofltxq2hArMq4SSclkykUKWwCJpgY%2FZoLPQGViFhUeBWO8Fxg99fHG6RJtPlB%2BN%2Fc%2FRZ7lijjYWLWU65F%2FG2d7E33VOOcqiSpY9cvbLKGqXczSAMIDwpC7kF0Y35vsGfL6pEP1lrZ4m9KzxI%2Bl%2F5jnyC7EC8NElOI4VtyBsEkvzemx7W%2BlfM4uhtAaEn%2Fz8ITDNmO%2FIBjqkAVyGaWr7AJrTqD0tYWLM%2FgC6XO1ShTjUtvN5TZHdwmG1CTfq%2B%2FkQyfx5%2Fm5TC%2Fb5jKVfDhA%2FyCEPnESuCpEm1Atmk23U3HUY%2BOiyYjg6SFhSsWegxnutwRxcHI6QAkCzB0ty1lS0HUzMxdGNDVpi9c8KM3e463NoRyFamgeV7GDHkRr39MjuPUPRqC9bDkbYvI%2FS8tjcS5IYfcf8Nm0Q6bTGUBF9&X-Amz-Signature=6ab41da7359f52e4327387da04ef8ce488a59254d3787e9d4d1e17e2e4f93e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q36QKIGQ%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt3vpySLnR9w%2BISenTKHv2YMrL3o0f8H3swSRuXRXchgIhAILnLTnuIHAhgqCC2XOJFo1cpiZ8id88MQx%2FK%2FM2Je2gKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlDlKHbiARGQ4%2F6E8q3AOlfG5AIbsTRz5GyIel6ImhVs4i7FS7LoEebR1c5%2BAc9zFT%2Fv8oFXwHsTtf2q%2B3Z4Y6R3fIP%2BOM4JTDIWvJ94RY94bOXvGM4f354M3yGOgs0irvflkpLfkjGy1%2B7aIQMccYL5yB5rTw%2BlUASVZph8p%2BreAR1zBw%2Ffs1sTkzlpBSm%2BUuU9u42hqrPEmWOVExjwPjez1JQZycOuymlTWfM7%2BAIU8tdAdPt0I2bPela0FPPXeUz%2FqnRZK5KCADqk6aHBHahR8zZayeEFoiiwkn5jAlHsOLf8HNSh3FnBt4rX17PRhpC%2B5qljSQ0PBnmoW0PZZ%2Fd8uoBVE%2FV%2BDSt5ZJ7jiclFe61hK9%2BBGb0%2BQbhEQMxk2aqokfWo58BcFGC4FcxDkuT5El9cU1rgHw7HGRKjQoNK0i4JwtFmN6O1LVW1JXNWYm5MZYt7nFQ1Fvaofltxq2hArMq4SSclkykUKWwCJpgY%2FZoLPQGViFhUeBWO8Fxg99fHG6RJtPlB%2BN%2Fc%2FRZ7lijjYWLWU65F%2FG2d7E33VOOcqiSpY9cvbLKGqXczSAMIDwpC7kF0Y35vsGfL6pEP1lrZ4m9KzxI%2Bl%2F5jnyC7EC8NElOI4VtyBsEkvzemx7W%2BlfM4uhtAaEn%2Fz8ITDNmO%2FIBjqkAVyGaWr7AJrTqD0tYWLM%2FgC6XO1ShTjUtvN5TZHdwmG1CTfq%2B%2FkQyfx5%2Fm5TC%2Fb5jKVfDhA%2FyCEPnESuCpEm1Atmk23U3HUY%2BOiyYjg6SFhSsWegxnutwRxcHI6QAkCzB0ty1lS0HUzMxdGNDVpi9c8KM3e463NoRyFamgeV7GDHkRr39MjuPUPRqC9bDkbYvI%2FS8tjcS5IYfcf8Nm0Q6bTGUBF9&X-Amz-Signature=60df466f69cc99752bd3f3551a2f5494bad79d986940cdcff08a4a94f0fb7e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q36QKIGQ%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt3vpySLnR9w%2BISenTKHv2YMrL3o0f8H3swSRuXRXchgIhAILnLTnuIHAhgqCC2XOJFo1cpiZ8id88MQx%2FK%2FM2Je2gKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlDlKHbiARGQ4%2F6E8q3AOlfG5AIbsTRz5GyIel6ImhVs4i7FS7LoEebR1c5%2BAc9zFT%2Fv8oFXwHsTtf2q%2B3Z4Y6R3fIP%2BOM4JTDIWvJ94RY94bOXvGM4f354M3yGOgs0irvflkpLfkjGy1%2B7aIQMccYL5yB5rTw%2BlUASVZph8p%2BreAR1zBw%2Ffs1sTkzlpBSm%2BUuU9u42hqrPEmWOVExjwPjez1JQZycOuymlTWfM7%2BAIU8tdAdPt0I2bPela0FPPXeUz%2FqnRZK5KCADqk6aHBHahR8zZayeEFoiiwkn5jAlHsOLf8HNSh3FnBt4rX17PRhpC%2B5qljSQ0PBnmoW0PZZ%2Fd8uoBVE%2FV%2BDSt5ZJ7jiclFe61hK9%2BBGb0%2BQbhEQMxk2aqokfWo58BcFGC4FcxDkuT5El9cU1rgHw7HGRKjQoNK0i4JwtFmN6O1LVW1JXNWYm5MZYt7nFQ1Fvaofltxq2hArMq4SSclkykUKWwCJpgY%2FZoLPQGViFhUeBWO8Fxg99fHG6RJtPlB%2BN%2Fc%2FRZ7lijjYWLWU65F%2FG2d7E33VOOcqiSpY9cvbLKGqXczSAMIDwpC7kF0Y35vsGfL6pEP1lrZ4m9KzxI%2Bl%2F5jnyC7EC8NElOI4VtyBsEkvzemx7W%2BlfM4uhtAaEn%2Fz8ITDNmO%2FIBjqkAVyGaWr7AJrTqD0tYWLM%2FgC6XO1ShTjUtvN5TZHdwmG1CTfq%2B%2FkQyfx5%2Fm5TC%2Fb5jKVfDhA%2FyCEPnESuCpEm1Atmk23U3HUY%2BOiyYjg6SFhSsWegxnutwRxcHI6QAkCzB0ty1lS0HUzMxdGNDVpi9c8KM3e463NoRyFamgeV7GDHkRr39MjuPUPRqC9bDkbYvI%2FS8tjcS5IYfcf8Nm0Q6bTGUBF9&X-Amz-Signature=f20dd9fac2cd2f1fdc7cdf658bd3b7c3fc2e86a8f45008721c8b5846b066563b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q36QKIGQ%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt3vpySLnR9w%2BISenTKHv2YMrL3o0f8H3swSRuXRXchgIhAILnLTnuIHAhgqCC2XOJFo1cpiZ8id88MQx%2FK%2FM2Je2gKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlDlKHbiARGQ4%2F6E8q3AOlfG5AIbsTRz5GyIel6ImhVs4i7FS7LoEebR1c5%2BAc9zFT%2Fv8oFXwHsTtf2q%2B3Z4Y6R3fIP%2BOM4JTDIWvJ94RY94bOXvGM4f354M3yGOgs0irvflkpLfkjGy1%2B7aIQMccYL5yB5rTw%2BlUASVZph8p%2BreAR1zBw%2Ffs1sTkzlpBSm%2BUuU9u42hqrPEmWOVExjwPjez1JQZycOuymlTWfM7%2BAIU8tdAdPt0I2bPela0FPPXeUz%2FqnRZK5KCADqk6aHBHahR8zZayeEFoiiwkn5jAlHsOLf8HNSh3FnBt4rX17PRhpC%2B5qljSQ0PBnmoW0PZZ%2Fd8uoBVE%2FV%2BDSt5ZJ7jiclFe61hK9%2BBGb0%2BQbhEQMxk2aqokfWo58BcFGC4FcxDkuT5El9cU1rgHw7HGRKjQoNK0i4JwtFmN6O1LVW1JXNWYm5MZYt7nFQ1Fvaofltxq2hArMq4SSclkykUKWwCJpgY%2FZoLPQGViFhUeBWO8Fxg99fHG6RJtPlB%2BN%2Fc%2FRZ7lijjYWLWU65F%2FG2d7E33VOOcqiSpY9cvbLKGqXczSAMIDwpC7kF0Y35vsGfL6pEP1lrZ4m9KzxI%2Bl%2F5jnyC7EC8NElOI4VtyBsEkvzemx7W%2BlfM4uhtAaEn%2Fz8ITDNmO%2FIBjqkAVyGaWr7AJrTqD0tYWLM%2FgC6XO1ShTjUtvN5TZHdwmG1CTfq%2B%2FkQyfx5%2Fm5TC%2Fb5jKVfDhA%2FyCEPnESuCpEm1Atmk23U3HUY%2BOiyYjg6SFhSsWegxnutwRxcHI6QAkCzB0ty1lS0HUzMxdGNDVpi9c8KM3e463NoRyFamgeV7GDHkRr39MjuPUPRqC9bDkbYvI%2FS8tjcS5IYfcf8Nm0Q6bTGUBF9&X-Amz-Signature=d86b4c920189b3b3ce8e092c1e1d32b7fa82db03929c29d505d3e0e57c2fd13f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3W6H3PI%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyLUYA1XEDZec2A%2FegoJiQhjKa7utpAFYKKI010cPPPAiBX1m0e7L%2B3QJLGqycjhZEFTp7OG39uj3hKcdLiTQ4hAiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BIXXy3Et1JnuWYWxKtwDhptGf39Gqm3qkDvyt6SKPV0qaS1WafawxfrX%2FDzgnif7ucDsRPPOV9nkZXdz8j1e16AL5%2BoOj8CkaEC3II%2Fk9fFBOIM85jbIJGY6Q6PTk%2Ft3JuC9cqgEpHeNn88XGvdheFuNHlLFyzy1DCnfB4KBBCUM33MbcHJhwvmgF1BnuMvsdMhp%2BYc3Rth8PtWkzqb579zG%2Ft9rA3DK%2FpN%2FxZtI7fS8qHa9SCl%2B1qehdDEh%2B7DNfh%2FEgNbfuPvpaHILcIq%2BvlQoc9gaMY7sxK%2BB7TN9iEJxg2spCFa%2BwP5J2%2FbSWbM2V3ajJqNP3atEyD9jRM3Y%2B5Kc82VwzQtb0HowQjlHFMwDTN1KUxKFXPrh%2BroJMLv78fnNMSPnolscwv34%2FkjUyzmeBNKu%2BNVGzPQOvTCSPUkrIfvOtwlZuyln87N8kIosKNmdiEk%2FcRgnvNAIUj2t6%2F401oj4JkhosWtb4UscYEhXessXdEH4W5DpFM7%2BKBT1Y5Ttiz4VNzqHyT%2FA6OzwEC8MqsIwSn4zlxBwnYF6ATLLd4jwnhrE5XUW4YzpAiHf8VLMrVPvYgBgWxnQ8ExlfxQjKcoqie5TgBvqCUoZ92Ao4wQd%2F3%2BDSOfPI9o9P5LTE4bgmCznJvq5Kz8wgZnvyAY6pgEI7KVLgU8lOF0ap9kq1VU%2BY3vjrFcKGOvSoV4Mz1AEfg%2FCK9pQrebkMI2uXU5quoCyE2DcM8BOsBrI9K0C391LYnZjEtBAj92fjCMqYmXS7M2eqz6ozDuBTcDCKJKQY0JYukWFVG3ZvKdIgMpoDOOMdliuuOBduWnxHPrWuPusoyMQBmXwV76X0mtXuBTjJ0X4%2FtR9ZsMygq%2FS3HIn8UNtUk%2BgrBZD&X-Amz-Signature=b1692cea6cad1ac93aca2de013fe9e323b6accacf2e33947844119ef177db893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJABV5JS%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWs63tNhzwxvaYiJJiuZwERaBGV8YUQpQGe9gGORToiAiEA7PbVkocEvSWR0Q3O28O6PJ9%2FyLeZmkeCvM7TOZAUC7UqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1rHadAfFaZIBAdRCrcAz9Q7qI%2FEEfBM6mRv7Gi%2BTZYzMqE2QjvV7RFyK5Au%2BOQB%2FkPaAA5kcuWdWnWXZDfioKkwqmoPlVeWi8hnU1rFQ0136xo9iiYLg01cWGMqXylJR8jp8Zg2MtdhbsWFTd%2BFWPiAXlNEZR3U%2B%2BmyyORlsx9s7yOs9%2B780CoFIZGrSK9AOt%2BN%2BxbVhaOxLNAJkBzq2iT4fGRDjnh5I8GTFKrjvAPXLHVcKhg7v%2BAImeTU%2FJMN9jZhjczyVew2QMJ07xajbBrDHs3cy6VEy6sVAN8p5XjKbjewb2vbgHDcOsLI0kXLwXQdn6lfW96NS5LdSRIp8XlTsSt9KG8EWFqYv9Y1lhmeFcKI9m9BQjJTNo3%2FaFwRcXojhJox2cLYexB%2FsGgYtX5s6%2FeRbKnlYNWEBjAKaYJXnyhaft23iKJBLeEXDwrvrm8ri6mSDC4tdE4tpszs25oQRVmYwTuyrmEOOPeB3lEYeQ0sRqh5oH5KqXzwUedlLWLk6yeYe4msDBS3iexsRtHRS0WFlBG49eiCsYkEv0xDGZj8QQvt%2BSUH3QasPwTIzQjbl0Ff0KLW2CrA%2Fp0cSOVIZ7hzqLKgc%2Fw9iXeRb2ph6hIN17iq5Z6Rk%2BsHqRWEH%2BWrQ8YjaFgIbUIMOyX78gGOqUBgBZKEPJo3VBteHUXVcOY32IAhr39mzJGZ3CB0OKb6zEyPldwCZQV428FiayLzT8z%2FQwQvdPFIHcjAP4HlSmSUGygIPE%2BR8xnZUh5gZk2STOijY3htsMvcG1VDwhdlU9%2FCN0tDkN%2BonqFZDtOiEW74Yeh7hS4VTg4Zx9p%2BosmEB6eDTOvBQ3s4rytLeLrtRpdLIHfEBZKZ3b%2FxZfFyZXdFVZtZDrC&X-Amz-Signature=fad803a154c5f14da6429db31db606f630277247594ab4bdda9b67796a51fbb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJABV5JS%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWs63tNhzwxvaYiJJiuZwERaBGV8YUQpQGe9gGORToiAiEA7PbVkocEvSWR0Q3O28O6PJ9%2FyLeZmkeCvM7TOZAUC7UqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1rHadAfFaZIBAdRCrcAz9Q7qI%2FEEfBM6mRv7Gi%2BTZYzMqE2QjvV7RFyK5Au%2BOQB%2FkPaAA5kcuWdWnWXZDfioKkwqmoPlVeWi8hnU1rFQ0136xo9iiYLg01cWGMqXylJR8jp8Zg2MtdhbsWFTd%2BFWPiAXlNEZR3U%2B%2BmyyORlsx9s7yOs9%2B780CoFIZGrSK9AOt%2BN%2BxbVhaOxLNAJkBzq2iT4fGRDjnh5I8GTFKrjvAPXLHVcKhg7v%2BAImeTU%2FJMN9jZhjczyVew2QMJ07xajbBrDHs3cy6VEy6sVAN8p5XjKbjewb2vbgHDcOsLI0kXLwXQdn6lfW96NS5LdSRIp8XlTsSt9KG8EWFqYv9Y1lhmeFcKI9m9BQjJTNo3%2FaFwRcXojhJox2cLYexB%2FsGgYtX5s6%2FeRbKnlYNWEBjAKaYJXnyhaft23iKJBLeEXDwrvrm8ri6mSDC4tdE4tpszs25oQRVmYwTuyrmEOOPeB3lEYeQ0sRqh5oH5KqXzwUedlLWLk6yeYe4msDBS3iexsRtHRS0WFlBG49eiCsYkEv0xDGZj8QQvt%2BSUH3QasPwTIzQjbl0Ff0KLW2CrA%2Fp0cSOVIZ7hzqLKgc%2Fw9iXeRb2ph6hIN17iq5Z6Rk%2BsHqRWEH%2BWrQ8YjaFgIbUIMOyX78gGOqUBgBZKEPJo3VBteHUXVcOY32IAhr39mzJGZ3CB0OKb6zEyPldwCZQV428FiayLzT8z%2FQwQvdPFIHcjAP4HlSmSUGygIPE%2BR8xnZUh5gZk2STOijY3htsMvcG1VDwhdlU9%2FCN0tDkN%2BonqFZDtOiEW74Yeh7hS4VTg4Zx9p%2BosmEB6eDTOvBQ3s4rytLeLrtRpdLIHfEBZKZ3b%2FxZfFyZXdFVZtZDrC&X-Amz-Signature=fa6541c338a834036d6b9f8f9d3daabb410680c0e457bb012cdd7f4839cd393f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJABV5JS%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWs63tNhzwxvaYiJJiuZwERaBGV8YUQpQGe9gGORToiAiEA7PbVkocEvSWR0Q3O28O6PJ9%2FyLeZmkeCvM7TOZAUC7UqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1rHadAfFaZIBAdRCrcAz9Q7qI%2FEEfBM6mRv7Gi%2BTZYzMqE2QjvV7RFyK5Au%2BOQB%2FkPaAA5kcuWdWnWXZDfioKkwqmoPlVeWi8hnU1rFQ0136xo9iiYLg01cWGMqXylJR8jp8Zg2MtdhbsWFTd%2BFWPiAXlNEZR3U%2B%2BmyyORlsx9s7yOs9%2B780CoFIZGrSK9AOt%2BN%2BxbVhaOxLNAJkBzq2iT4fGRDjnh5I8GTFKrjvAPXLHVcKhg7v%2BAImeTU%2FJMN9jZhjczyVew2QMJ07xajbBrDHs3cy6VEy6sVAN8p5XjKbjewb2vbgHDcOsLI0kXLwXQdn6lfW96NS5LdSRIp8XlTsSt9KG8EWFqYv9Y1lhmeFcKI9m9BQjJTNo3%2FaFwRcXojhJox2cLYexB%2FsGgYtX5s6%2FeRbKnlYNWEBjAKaYJXnyhaft23iKJBLeEXDwrvrm8ri6mSDC4tdE4tpszs25oQRVmYwTuyrmEOOPeB3lEYeQ0sRqh5oH5KqXzwUedlLWLk6yeYe4msDBS3iexsRtHRS0WFlBG49eiCsYkEv0xDGZj8QQvt%2BSUH3QasPwTIzQjbl0Ff0KLW2CrA%2Fp0cSOVIZ7hzqLKgc%2Fw9iXeRb2ph6hIN17iq5Z6Rk%2BsHqRWEH%2BWrQ8YjaFgIbUIMOyX78gGOqUBgBZKEPJo3VBteHUXVcOY32IAhr39mzJGZ3CB0OKb6zEyPldwCZQV428FiayLzT8z%2FQwQvdPFIHcjAP4HlSmSUGygIPE%2BR8xnZUh5gZk2STOijY3htsMvcG1VDwhdlU9%2FCN0tDkN%2BonqFZDtOiEW74Yeh7hS4VTg4Zx9p%2BosmEB6eDTOvBQ3s4rytLeLrtRpdLIHfEBZKZ3b%2FxZfFyZXdFVZtZDrC&X-Amz-Signature=96408d0040a744c3b8f9d1ea6e0bfba8e03983eeda5de8f0583d30745f2b03a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJABV5JS%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWs63tNhzwxvaYiJJiuZwERaBGV8YUQpQGe9gGORToiAiEA7PbVkocEvSWR0Q3O28O6PJ9%2FyLeZmkeCvM7TOZAUC7UqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1rHadAfFaZIBAdRCrcAz9Q7qI%2FEEfBM6mRv7Gi%2BTZYzMqE2QjvV7RFyK5Au%2BOQB%2FkPaAA5kcuWdWnWXZDfioKkwqmoPlVeWi8hnU1rFQ0136xo9iiYLg01cWGMqXylJR8jp8Zg2MtdhbsWFTd%2BFWPiAXlNEZR3U%2B%2BmyyORlsx9s7yOs9%2B780CoFIZGrSK9AOt%2BN%2BxbVhaOxLNAJkBzq2iT4fGRDjnh5I8GTFKrjvAPXLHVcKhg7v%2BAImeTU%2FJMN9jZhjczyVew2QMJ07xajbBrDHs3cy6VEy6sVAN8p5XjKbjewb2vbgHDcOsLI0kXLwXQdn6lfW96NS5LdSRIp8XlTsSt9KG8EWFqYv9Y1lhmeFcKI9m9BQjJTNo3%2FaFwRcXojhJox2cLYexB%2FsGgYtX5s6%2FeRbKnlYNWEBjAKaYJXnyhaft23iKJBLeEXDwrvrm8ri6mSDC4tdE4tpszs25oQRVmYwTuyrmEOOPeB3lEYeQ0sRqh5oH5KqXzwUedlLWLk6yeYe4msDBS3iexsRtHRS0WFlBG49eiCsYkEv0xDGZj8QQvt%2BSUH3QasPwTIzQjbl0Ff0KLW2CrA%2Fp0cSOVIZ7hzqLKgc%2Fw9iXeRb2ph6hIN17iq5Z6Rk%2BsHqRWEH%2BWrQ8YjaFgIbUIMOyX78gGOqUBgBZKEPJo3VBteHUXVcOY32IAhr39mzJGZ3CB0OKb6zEyPldwCZQV428FiayLzT8z%2FQwQvdPFIHcjAP4HlSmSUGygIPE%2BR8xnZUh5gZk2STOijY3htsMvcG1VDwhdlU9%2FCN0tDkN%2BonqFZDtOiEW74Yeh7hS4VTg4Zx9p%2BosmEB6eDTOvBQ3s4rytLeLrtRpdLIHfEBZKZ3b%2FxZfFyZXdFVZtZDrC&X-Amz-Signature=e96dca66754ee67e44fc0f738cc4b237b23b675fd9ee7c7f71086fa27068c7af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJABV5JS%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWs63tNhzwxvaYiJJiuZwERaBGV8YUQpQGe9gGORToiAiEA7PbVkocEvSWR0Q3O28O6PJ9%2FyLeZmkeCvM7TOZAUC7UqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1rHadAfFaZIBAdRCrcAz9Q7qI%2FEEfBM6mRv7Gi%2BTZYzMqE2QjvV7RFyK5Au%2BOQB%2FkPaAA5kcuWdWnWXZDfioKkwqmoPlVeWi8hnU1rFQ0136xo9iiYLg01cWGMqXylJR8jp8Zg2MtdhbsWFTd%2BFWPiAXlNEZR3U%2B%2BmyyORlsx9s7yOs9%2B780CoFIZGrSK9AOt%2BN%2BxbVhaOxLNAJkBzq2iT4fGRDjnh5I8GTFKrjvAPXLHVcKhg7v%2BAImeTU%2FJMN9jZhjczyVew2QMJ07xajbBrDHs3cy6VEy6sVAN8p5XjKbjewb2vbgHDcOsLI0kXLwXQdn6lfW96NS5LdSRIp8XlTsSt9KG8EWFqYv9Y1lhmeFcKI9m9BQjJTNo3%2FaFwRcXojhJox2cLYexB%2FsGgYtX5s6%2FeRbKnlYNWEBjAKaYJXnyhaft23iKJBLeEXDwrvrm8ri6mSDC4tdE4tpszs25oQRVmYwTuyrmEOOPeB3lEYeQ0sRqh5oH5KqXzwUedlLWLk6yeYe4msDBS3iexsRtHRS0WFlBG49eiCsYkEv0xDGZj8QQvt%2BSUH3QasPwTIzQjbl0Ff0KLW2CrA%2Fp0cSOVIZ7hzqLKgc%2Fw9iXeRb2ph6hIN17iq5Z6Rk%2BsHqRWEH%2BWrQ8YjaFgIbUIMOyX78gGOqUBgBZKEPJo3VBteHUXVcOY32IAhr39mzJGZ3CB0OKb6zEyPldwCZQV428FiayLzT8z%2FQwQvdPFIHcjAP4HlSmSUGygIPE%2BR8xnZUh5gZk2STOijY3htsMvcG1VDwhdlU9%2FCN0tDkN%2BonqFZDtOiEW74Yeh7hS4VTg4Zx9p%2BosmEB6eDTOvBQ3s4rytLeLrtRpdLIHfEBZKZ3b%2FxZfFyZXdFVZtZDrC&X-Amz-Signature=a7783081861ccd0533ed4c39a4fc7ed61f4d2c1d9971f4f3bf3fa41623342b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJABV5JS%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWs63tNhzwxvaYiJJiuZwERaBGV8YUQpQGe9gGORToiAiEA7PbVkocEvSWR0Q3O28O6PJ9%2FyLeZmkeCvM7TOZAUC7UqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1rHadAfFaZIBAdRCrcAz9Q7qI%2FEEfBM6mRv7Gi%2BTZYzMqE2QjvV7RFyK5Au%2BOQB%2FkPaAA5kcuWdWnWXZDfioKkwqmoPlVeWi8hnU1rFQ0136xo9iiYLg01cWGMqXylJR8jp8Zg2MtdhbsWFTd%2BFWPiAXlNEZR3U%2B%2BmyyORlsx9s7yOs9%2B780CoFIZGrSK9AOt%2BN%2BxbVhaOxLNAJkBzq2iT4fGRDjnh5I8GTFKrjvAPXLHVcKhg7v%2BAImeTU%2FJMN9jZhjczyVew2QMJ07xajbBrDHs3cy6VEy6sVAN8p5XjKbjewb2vbgHDcOsLI0kXLwXQdn6lfW96NS5LdSRIp8XlTsSt9KG8EWFqYv9Y1lhmeFcKI9m9BQjJTNo3%2FaFwRcXojhJox2cLYexB%2FsGgYtX5s6%2FeRbKnlYNWEBjAKaYJXnyhaft23iKJBLeEXDwrvrm8ri6mSDC4tdE4tpszs25oQRVmYwTuyrmEOOPeB3lEYeQ0sRqh5oH5KqXzwUedlLWLk6yeYe4msDBS3iexsRtHRS0WFlBG49eiCsYkEv0xDGZj8QQvt%2BSUH3QasPwTIzQjbl0Ff0KLW2CrA%2Fp0cSOVIZ7hzqLKgc%2Fw9iXeRb2ph6hIN17iq5Z6Rk%2BsHqRWEH%2BWrQ8YjaFgIbUIMOyX78gGOqUBgBZKEPJo3VBteHUXVcOY32IAhr39mzJGZ3CB0OKb6zEyPldwCZQV428FiayLzT8z%2FQwQvdPFIHcjAP4HlSmSUGygIPE%2BR8xnZUh5gZk2STOijY3htsMvcG1VDwhdlU9%2FCN0tDkN%2BonqFZDtOiEW74Yeh7hS4VTg4Zx9p%2BosmEB6eDTOvBQ3s4rytLeLrtRpdLIHfEBZKZ3b%2FxZfFyZXdFVZtZDrC&X-Amz-Signature=191b2abf8f8eb171f5f39dca6739461eff7ac9f91a02578f00817461137eca10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJABV5JS%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWs63tNhzwxvaYiJJiuZwERaBGV8YUQpQGe9gGORToiAiEA7PbVkocEvSWR0Q3O28O6PJ9%2FyLeZmkeCvM7TOZAUC7UqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1rHadAfFaZIBAdRCrcAz9Q7qI%2FEEfBM6mRv7Gi%2BTZYzMqE2QjvV7RFyK5Au%2BOQB%2FkPaAA5kcuWdWnWXZDfioKkwqmoPlVeWi8hnU1rFQ0136xo9iiYLg01cWGMqXylJR8jp8Zg2MtdhbsWFTd%2BFWPiAXlNEZR3U%2B%2BmyyORlsx9s7yOs9%2B780CoFIZGrSK9AOt%2BN%2BxbVhaOxLNAJkBzq2iT4fGRDjnh5I8GTFKrjvAPXLHVcKhg7v%2BAImeTU%2FJMN9jZhjczyVew2QMJ07xajbBrDHs3cy6VEy6sVAN8p5XjKbjewb2vbgHDcOsLI0kXLwXQdn6lfW96NS5LdSRIp8XlTsSt9KG8EWFqYv9Y1lhmeFcKI9m9BQjJTNo3%2FaFwRcXojhJox2cLYexB%2FsGgYtX5s6%2FeRbKnlYNWEBjAKaYJXnyhaft23iKJBLeEXDwrvrm8ri6mSDC4tdE4tpszs25oQRVmYwTuyrmEOOPeB3lEYeQ0sRqh5oH5KqXzwUedlLWLk6yeYe4msDBS3iexsRtHRS0WFlBG49eiCsYkEv0xDGZj8QQvt%2BSUH3QasPwTIzQjbl0Ff0KLW2CrA%2Fp0cSOVIZ7hzqLKgc%2Fw9iXeRb2ph6hIN17iq5Z6Rk%2BsHqRWEH%2BWrQ8YjaFgIbUIMOyX78gGOqUBgBZKEPJo3VBteHUXVcOY32IAhr39mzJGZ3CB0OKb6zEyPldwCZQV428FiayLzT8z%2FQwQvdPFIHcjAP4HlSmSUGygIPE%2BR8xnZUh5gZk2STOijY3htsMvcG1VDwhdlU9%2FCN0tDkN%2BonqFZDtOiEW74Yeh7hS4VTg4Zx9p%2BosmEB6eDTOvBQ3s4rytLeLrtRpdLIHfEBZKZ3b%2FxZfFyZXdFVZtZDrC&X-Amz-Signature=b3e9de527c26f32f4865b7381c6b7749a8c44cb8f5b083dfe36bd87f16471fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJABV5JS%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWs63tNhzwxvaYiJJiuZwERaBGV8YUQpQGe9gGORToiAiEA7PbVkocEvSWR0Q3O28O6PJ9%2FyLeZmkeCvM7TOZAUC7UqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1rHadAfFaZIBAdRCrcAz9Q7qI%2FEEfBM6mRv7Gi%2BTZYzMqE2QjvV7RFyK5Au%2BOQB%2FkPaAA5kcuWdWnWXZDfioKkwqmoPlVeWi8hnU1rFQ0136xo9iiYLg01cWGMqXylJR8jp8Zg2MtdhbsWFTd%2BFWPiAXlNEZR3U%2B%2BmyyORlsx9s7yOs9%2B780CoFIZGrSK9AOt%2BN%2BxbVhaOxLNAJkBzq2iT4fGRDjnh5I8GTFKrjvAPXLHVcKhg7v%2BAImeTU%2FJMN9jZhjczyVew2QMJ07xajbBrDHs3cy6VEy6sVAN8p5XjKbjewb2vbgHDcOsLI0kXLwXQdn6lfW96NS5LdSRIp8XlTsSt9KG8EWFqYv9Y1lhmeFcKI9m9BQjJTNo3%2FaFwRcXojhJox2cLYexB%2FsGgYtX5s6%2FeRbKnlYNWEBjAKaYJXnyhaft23iKJBLeEXDwrvrm8ri6mSDC4tdE4tpszs25oQRVmYwTuyrmEOOPeB3lEYeQ0sRqh5oH5KqXzwUedlLWLk6yeYe4msDBS3iexsRtHRS0WFlBG49eiCsYkEv0xDGZj8QQvt%2BSUH3QasPwTIzQjbl0Ff0KLW2CrA%2Fp0cSOVIZ7hzqLKgc%2Fw9iXeRb2ph6hIN17iq5Z6Rk%2BsHqRWEH%2BWrQ8YjaFgIbUIMOyX78gGOqUBgBZKEPJo3VBteHUXVcOY32IAhr39mzJGZ3CB0OKb6zEyPldwCZQV428FiayLzT8z%2FQwQvdPFIHcjAP4HlSmSUGygIPE%2BR8xnZUh5gZk2STOijY3htsMvcG1VDwhdlU9%2FCN0tDkN%2BonqFZDtOiEW74Yeh7hS4VTg4Zx9p%2BosmEB6eDTOvBQ3s4rytLeLrtRpdLIHfEBZKZ3b%2FxZfFyZXdFVZtZDrC&X-Amz-Signature=79d2fb2d66f836521ec9f747eddd7cbecf9c7cc9ba93463e8dfed60992025318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJABV5JS%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWs63tNhzwxvaYiJJiuZwERaBGV8YUQpQGe9gGORToiAiEA7PbVkocEvSWR0Q3O28O6PJ9%2FyLeZmkeCvM7TOZAUC7UqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1rHadAfFaZIBAdRCrcAz9Q7qI%2FEEfBM6mRv7Gi%2BTZYzMqE2QjvV7RFyK5Au%2BOQB%2FkPaAA5kcuWdWnWXZDfioKkwqmoPlVeWi8hnU1rFQ0136xo9iiYLg01cWGMqXylJR8jp8Zg2MtdhbsWFTd%2BFWPiAXlNEZR3U%2B%2BmyyORlsx9s7yOs9%2B780CoFIZGrSK9AOt%2BN%2BxbVhaOxLNAJkBzq2iT4fGRDjnh5I8GTFKrjvAPXLHVcKhg7v%2BAImeTU%2FJMN9jZhjczyVew2QMJ07xajbBrDHs3cy6VEy6sVAN8p5XjKbjewb2vbgHDcOsLI0kXLwXQdn6lfW96NS5LdSRIp8XlTsSt9KG8EWFqYv9Y1lhmeFcKI9m9BQjJTNo3%2FaFwRcXojhJox2cLYexB%2FsGgYtX5s6%2FeRbKnlYNWEBjAKaYJXnyhaft23iKJBLeEXDwrvrm8ri6mSDC4tdE4tpszs25oQRVmYwTuyrmEOOPeB3lEYeQ0sRqh5oH5KqXzwUedlLWLk6yeYe4msDBS3iexsRtHRS0WFlBG49eiCsYkEv0xDGZj8QQvt%2BSUH3QasPwTIzQjbl0Ff0KLW2CrA%2Fp0cSOVIZ7hzqLKgc%2Fw9iXeRb2ph6hIN17iq5Z6Rk%2BsHqRWEH%2BWrQ8YjaFgIbUIMOyX78gGOqUBgBZKEPJo3VBteHUXVcOY32IAhr39mzJGZ3CB0OKb6zEyPldwCZQV428FiayLzT8z%2FQwQvdPFIHcjAP4HlSmSUGygIPE%2BR8xnZUh5gZk2STOijY3htsMvcG1VDwhdlU9%2FCN0tDkN%2BonqFZDtOiEW74Yeh7hS4VTg4Zx9p%2BosmEB6eDTOvBQ3s4rytLeLrtRpdLIHfEBZKZ3b%2FxZfFyZXdFVZtZDrC&X-Amz-Signature=84e7f3136d68717915ff44b6a6b3583d74568feb5d8a8175c2067eddd88ea74c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
