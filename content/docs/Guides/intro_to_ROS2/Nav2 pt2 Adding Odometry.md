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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3KEBGZ%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDKhaH1wrRgWYGiFH7NFltqTSkRJbxOE5uAe0gmjupuugIgQLWi%2FOqPrToG3rtanKYTf8e0Vn113n6Vb3wCIg9Vv1Uq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDFLLQig66YG6WE0k3ircA6MSv3VaNqdza8iJHZ4gd4RO3OnxsmtD6zT4o9kW4gj%2B7ZsTJQnA0B9rXxhynd2AI9zGaxNn0pZSbS12uHjF6gJ5ZsSieF1ersJTvWF0SdEOSiFp0msC5KjXcrQ29bs%2BtXNmLh0J291096wKOE%2FCILrxwLdQM3%2BMm4KGRXLvhn0TTBvmXldKAvEkytSqpTuFMj9Dxj8995rxuftEklrI1SZZtPhPjJMXSMFhXF9XB2KI9Z5aXkQNyei1TVR2DRI3h262bY6El41IsyEdvOB6i%2FR%2FmZFsQFvmyw%2F%2FFQLnT6izoMJd%2FnWbVqZCyN2Yn5ZOj4zjjTo0jpZSuNe9ZwHYJViQQbP%2FvR5%2BRnMlxG6qCt9%2B5tkW0EMvBE1Q7ss5Yl%2Friy7Jre0Ruzs71jluhxyBfJnExJwg1RobBDDIR7CK5S2xOd4iW5u19QpDQis7MQNyXBygMf8hJTb1dmoT7ML6lG8ejHbo3Vy9vDP%2F9AXS2lSgvCwli79gAtUHvjKc14xQkhZoHoHtpF%2FLQC3YJ3nHaW5iyACelBRRc9hIlO3rK3nz%2F8Mv6ZdmCQ%2BYqbOUDKDQb3bNvV%2BALk3S3muYbFMf3bcSEP8jgRvAekeSRZZjNgFDFTq7lQoJ98YWIkstMMLhp8oGOqUBWwtZAUniJEcOIUlcE0UslQ8rK%2BGsCDKodkSysndEtTU9ZbTf4%2BnGKlzl1A8DFJVggYC8zlE%2FrJU9uo851q6eefElM83KZtEOL%2FawO%2BCU8Z1Cw5%2BZ3PF3v90oJ2wrNaUgHZGCDPMV4sgRxZv9WvlzRTY4%2BcKoN0pW9%2FxdW8vDMepWA6H2YINgSpl6L%2B31Wvjr44unA6x%2FdCA5W0I0Rhq%2BEnscEwya&X-Amz-Signature=35491540c5ddb488a8b13b2fa118e7fcf27efb8a2ebf4b084346b63fcfd229ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3KEBGZ%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDKhaH1wrRgWYGiFH7NFltqTSkRJbxOE5uAe0gmjupuugIgQLWi%2FOqPrToG3rtanKYTf8e0Vn113n6Vb3wCIg9Vv1Uq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDFLLQig66YG6WE0k3ircA6MSv3VaNqdza8iJHZ4gd4RO3OnxsmtD6zT4o9kW4gj%2B7ZsTJQnA0B9rXxhynd2AI9zGaxNn0pZSbS12uHjF6gJ5ZsSieF1ersJTvWF0SdEOSiFp0msC5KjXcrQ29bs%2BtXNmLh0J291096wKOE%2FCILrxwLdQM3%2BMm4KGRXLvhn0TTBvmXldKAvEkytSqpTuFMj9Dxj8995rxuftEklrI1SZZtPhPjJMXSMFhXF9XB2KI9Z5aXkQNyei1TVR2DRI3h262bY6El41IsyEdvOB6i%2FR%2FmZFsQFvmyw%2F%2FFQLnT6izoMJd%2FnWbVqZCyN2Yn5ZOj4zjjTo0jpZSuNe9ZwHYJViQQbP%2FvR5%2BRnMlxG6qCt9%2B5tkW0EMvBE1Q7ss5Yl%2Friy7Jre0Ruzs71jluhxyBfJnExJwg1RobBDDIR7CK5S2xOd4iW5u19QpDQis7MQNyXBygMf8hJTb1dmoT7ML6lG8ejHbo3Vy9vDP%2F9AXS2lSgvCwli79gAtUHvjKc14xQkhZoHoHtpF%2FLQC3YJ3nHaW5iyACelBRRc9hIlO3rK3nz%2F8Mv6ZdmCQ%2BYqbOUDKDQb3bNvV%2BALk3S3muYbFMf3bcSEP8jgRvAekeSRZZjNgFDFTq7lQoJ98YWIkstMMLhp8oGOqUBWwtZAUniJEcOIUlcE0UslQ8rK%2BGsCDKodkSysndEtTU9ZbTf4%2BnGKlzl1A8DFJVggYC8zlE%2FrJU9uo851q6eefElM83KZtEOL%2FawO%2BCU8Z1Cw5%2BZ3PF3v90oJ2wrNaUgHZGCDPMV4sgRxZv9WvlzRTY4%2BcKoN0pW9%2FxdW8vDMepWA6H2YINgSpl6L%2B31Wvjr44unA6x%2FdCA5W0I0Rhq%2BEnscEwya&X-Amz-Signature=25e7ec35132ec239e3b8ea41a7240c4c266c92141c3639443c6128462fc9a52f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3KEBGZ%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDKhaH1wrRgWYGiFH7NFltqTSkRJbxOE5uAe0gmjupuugIgQLWi%2FOqPrToG3rtanKYTf8e0Vn113n6Vb3wCIg9Vv1Uq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDFLLQig66YG6WE0k3ircA6MSv3VaNqdza8iJHZ4gd4RO3OnxsmtD6zT4o9kW4gj%2B7ZsTJQnA0B9rXxhynd2AI9zGaxNn0pZSbS12uHjF6gJ5ZsSieF1ersJTvWF0SdEOSiFp0msC5KjXcrQ29bs%2BtXNmLh0J291096wKOE%2FCILrxwLdQM3%2BMm4KGRXLvhn0TTBvmXldKAvEkytSqpTuFMj9Dxj8995rxuftEklrI1SZZtPhPjJMXSMFhXF9XB2KI9Z5aXkQNyei1TVR2DRI3h262bY6El41IsyEdvOB6i%2FR%2FmZFsQFvmyw%2F%2FFQLnT6izoMJd%2FnWbVqZCyN2Yn5ZOj4zjjTo0jpZSuNe9ZwHYJViQQbP%2FvR5%2BRnMlxG6qCt9%2B5tkW0EMvBE1Q7ss5Yl%2Friy7Jre0Ruzs71jluhxyBfJnExJwg1RobBDDIR7CK5S2xOd4iW5u19QpDQis7MQNyXBygMf8hJTb1dmoT7ML6lG8ejHbo3Vy9vDP%2F9AXS2lSgvCwli79gAtUHvjKc14xQkhZoHoHtpF%2FLQC3YJ3nHaW5iyACelBRRc9hIlO3rK3nz%2F8Mv6ZdmCQ%2BYqbOUDKDQb3bNvV%2BALk3S3muYbFMf3bcSEP8jgRvAekeSRZZjNgFDFTq7lQoJ98YWIkstMMLhp8oGOqUBWwtZAUniJEcOIUlcE0UslQ8rK%2BGsCDKodkSysndEtTU9ZbTf4%2BnGKlzl1A8DFJVggYC8zlE%2FrJU9uo851q6eefElM83KZtEOL%2FawO%2BCU8Z1Cw5%2BZ3PF3v90oJ2wrNaUgHZGCDPMV4sgRxZv9WvlzRTY4%2BcKoN0pW9%2FxdW8vDMepWA6H2YINgSpl6L%2B31Wvjr44unA6x%2FdCA5W0I0Rhq%2BEnscEwya&X-Amz-Signature=9ece07a3425d25977c561f8c3e7f5c955d599658427102408acc76343cc57d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3KEBGZ%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDKhaH1wrRgWYGiFH7NFltqTSkRJbxOE5uAe0gmjupuugIgQLWi%2FOqPrToG3rtanKYTf8e0Vn113n6Vb3wCIg9Vv1Uq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDFLLQig66YG6WE0k3ircA6MSv3VaNqdza8iJHZ4gd4RO3OnxsmtD6zT4o9kW4gj%2B7ZsTJQnA0B9rXxhynd2AI9zGaxNn0pZSbS12uHjF6gJ5ZsSieF1ersJTvWF0SdEOSiFp0msC5KjXcrQ29bs%2BtXNmLh0J291096wKOE%2FCILrxwLdQM3%2BMm4KGRXLvhn0TTBvmXldKAvEkytSqpTuFMj9Dxj8995rxuftEklrI1SZZtPhPjJMXSMFhXF9XB2KI9Z5aXkQNyei1TVR2DRI3h262bY6El41IsyEdvOB6i%2FR%2FmZFsQFvmyw%2F%2FFQLnT6izoMJd%2FnWbVqZCyN2Yn5ZOj4zjjTo0jpZSuNe9ZwHYJViQQbP%2FvR5%2BRnMlxG6qCt9%2B5tkW0EMvBE1Q7ss5Yl%2Friy7Jre0Ruzs71jluhxyBfJnExJwg1RobBDDIR7CK5S2xOd4iW5u19QpDQis7MQNyXBygMf8hJTb1dmoT7ML6lG8ejHbo3Vy9vDP%2F9AXS2lSgvCwli79gAtUHvjKc14xQkhZoHoHtpF%2FLQC3YJ3nHaW5iyACelBRRc9hIlO3rK3nz%2F8Mv6ZdmCQ%2BYqbOUDKDQb3bNvV%2BALk3S3muYbFMf3bcSEP8jgRvAekeSRZZjNgFDFTq7lQoJ98YWIkstMMLhp8oGOqUBWwtZAUniJEcOIUlcE0UslQ8rK%2BGsCDKodkSysndEtTU9ZbTf4%2BnGKlzl1A8DFJVggYC8zlE%2FrJU9uo851q6eefElM83KZtEOL%2FawO%2BCU8Z1Cw5%2BZ3PF3v90oJ2wrNaUgHZGCDPMV4sgRxZv9WvlzRTY4%2BcKoN0pW9%2FxdW8vDMepWA6H2YINgSpl6L%2B31Wvjr44unA6x%2FdCA5W0I0Rhq%2BEnscEwya&X-Amz-Signature=1e87630ec7622b8826c0d9ba5b43d6822921d92e66f6084bd4abae14eddabf87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3KEBGZ%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDKhaH1wrRgWYGiFH7NFltqTSkRJbxOE5uAe0gmjupuugIgQLWi%2FOqPrToG3rtanKYTf8e0Vn113n6Vb3wCIg9Vv1Uq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDFLLQig66YG6WE0k3ircA6MSv3VaNqdza8iJHZ4gd4RO3OnxsmtD6zT4o9kW4gj%2B7ZsTJQnA0B9rXxhynd2AI9zGaxNn0pZSbS12uHjF6gJ5ZsSieF1ersJTvWF0SdEOSiFp0msC5KjXcrQ29bs%2BtXNmLh0J291096wKOE%2FCILrxwLdQM3%2BMm4KGRXLvhn0TTBvmXldKAvEkytSqpTuFMj9Dxj8995rxuftEklrI1SZZtPhPjJMXSMFhXF9XB2KI9Z5aXkQNyei1TVR2DRI3h262bY6El41IsyEdvOB6i%2FR%2FmZFsQFvmyw%2F%2FFQLnT6izoMJd%2FnWbVqZCyN2Yn5ZOj4zjjTo0jpZSuNe9ZwHYJViQQbP%2FvR5%2BRnMlxG6qCt9%2B5tkW0EMvBE1Q7ss5Yl%2Friy7Jre0Ruzs71jluhxyBfJnExJwg1RobBDDIR7CK5S2xOd4iW5u19QpDQis7MQNyXBygMf8hJTb1dmoT7ML6lG8ejHbo3Vy9vDP%2F9AXS2lSgvCwli79gAtUHvjKc14xQkhZoHoHtpF%2FLQC3YJ3nHaW5iyACelBRRc9hIlO3rK3nz%2F8Mv6ZdmCQ%2BYqbOUDKDQb3bNvV%2BALk3S3muYbFMf3bcSEP8jgRvAekeSRZZjNgFDFTq7lQoJ98YWIkstMMLhp8oGOqUBWwtZAUniJEcOIUlcE0UslQ8rK%2BGsCDKodkSysndEtTU9ZbTf4%2BnGKlzl1A8DFJVggYC8zlE%2FrJU9uo851q6eefElM83KZtEOL%2FawO%2BCU8Z1Cw5%2BZ3PF3v90oJ2wrNaUgHZGCDPMV4sgRxZv9WvlzRTY4%2BcKoN0pW9%2FxdW8vDMepWA6H2YINgSpl6L%2B31Wvjr44unA6x%2FdCA5W0I0Rhq%2BEnscEwya&X-Amz-Signature=3ce96c68c749859d321c74b3a04a65663237a907eae65a4bed7f06ca5458787e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3KEBGZ%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDKhaH1wrRgWYGiFH7NFltqTSkRJbxOE5uAe0gmjupuugIgQLWi%2FOqPrToG3rtanKYTf8e0Vn113n6Vb3wCIg9Vv1Uq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDFLLQig66YG6WE0k3ircA6MSv3VaNqdza8iJHZ4gd4RO3OnxsmtD6zT4o9kW4gj%2B7ZsTJQnA0B9rXxhynd2AI9zGaxNn0pZSbS12uHjF6gJ5ZsSieF1ersJTvWF0SdEOSiFp0msC5KjXcrQ29bs%2BtXNmLh0J291096wKOE%2FCILrxwLdQM3%2BMm4KGRXLvhn0TTBvmXldKAvEkytSqpTuFMj9Dxj8995rxuftEklrI1SZZtPhPjJMXSMFhXF9XB2KI9Z5aXkQNyei1TVR2DRI3h262bY6El41IsyEdvOB6i%2FR%2FmZFsQFvmyw%2F%2FFQLnT6izoMJd%2FnWbVqZCyN2Yn5ZOj4zjjTo0jpZSuNe9ZwHYJViQQbP%2FvR5%2BRnMlxG6qCt9%2B5tkW0EMvBE1Q7ss5Yl%2Friy7Jre0Ruzs71jluhxyBfJnExJwg1RobBDDIR7CK5S2xOd4iW5u19QpDQis7MQNyXBygMf8hJTb1dmoT7ML6lG8ejHbo3Vy9vDP%2F9AXS2lSgvCwli79gAtUHvjKc14xQkhZoHoHtpF%2FLQC3YJ3nHaW5iyACelBRRc9hIlO3rK3nz%2F8Mv6ZdmCQ%2BYqbOUDKDQb3bNvV%2BALk3S3muYbFMf3bcSEP8jgRvAekeSRZZjNgFDFTq7lQoJ98YWIkstMMLhp8oGOqUBWwtZAUniJEcOIUlcE0UslQ8rK%2BGsCDKodkSysndEtTU9ZbTf4%2BnGKlzl1A8DFJVggYC8zlE%2FrJU9uo851q6eefElM83KZtEOL%2FawO%2BCU8Z1Cw5%2BZ3PF3v90oJ2wrNaUgHZGCDPMV4sgRxZv9WvlzRTY4%2BcKoN0pW9%2FxdW8vDMepWA6H2YINgSpl6L%2B31Wvjr44unA6x%2FdCA5W0I0Rhq%2BEnscEwya&X-Amz-Signature=ba78a43a4a915178b667beea2f0cb470d027a1e90086104ca6f782da79c69e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3KEBGZ%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDKhaH1wrRgWYGiFH7NFltqTSkRJbxOE5uAe0gmjupuugIgQLWi%2FOqPrToG3rtanKYTf8e0Vn113n6Vb3wCIg9Vv1Uq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDFLLQig66YG6WE0k3ircA6MSv3VaNqdza8iJHZ4gd4RO3OnxsmtD6zT4o9kW4gj%2B7ZsTJQnA0B9rXxhynd2AI9zGaxNn0pZSbS12uHjF6gJ5ZsSieF1ersJTvWF0SdEOSiFp0msC5KjXcrQ29bs%2BtXNmLh0J291096wKOE%2FCILrxwLdQM3%2BMm4KGRXLvhn0TTBvmXldKAvEkytSqpTuFMj9Dxj8995rxuftEklrI1SZZtPhPjJMXSMFhXF9XB2KI9Z5aXkQNyei1TVR2DRI3h262bY6El41IsyEdvOB6i%2FR%2FmZFsQFvmyw%2F%2FFQLnT6izoMJd%2FnWbVqZCyN2Yn5ZOj4zjjTo0jpZSuNe9ZwHYJViQQbP%2FvR5%2BRnMlxG6qCt9%2B5tkW0EMvBE1Q7ss5Yl%2Friy7Jre0Ruzs71jluhxyBfJnExJwg1RobBDDIR7CK5S2xOd4iW5u19QpDQis7MQNyXBygMf8hJTb1dmoT7ML6lG8ejHbo3Vy9vDP%2F9AXS2lSgvCwli79gAtUHvjKc14xQkhZoHoHtpF%2FLQC3YJ3nHaW5iyACelBRRc9hIlO3rK3nz%2F8Mv6ZdmCQ%2BYqbOUDKDQb3bNvV%2BALk3S3muYbFMf3bcSEP8jgRvAekeSRZZjNgFDFTq7lQoJ98YWIkstMMLhp8oGOqUBWwtZAUniJEcOIUlcE0UslQ8rK%2BGsCDKodkSysndEtTU9ZbTf4%2BnGKlzl1A8DFJVggYC8zlE%2FrJU9uo851q6eefElM83KZtEOL%2FawO%2BCU8Z1Cw5%2BZ3PF3v90oJ2wrNaUgHZGCDPMV4sgRxZv9WvlzRTY4%2BcKoN0pW9%2FxdW8vDMepWA6H2YINgSpl6L%2B31Wvjr44unA6x%2FdCA5W0I0Rhq%2BEnscEwya&X-Amz-Signature=ff2d7d7000c4a8f8e23bfee412664d70fa3d80f10bd76f51a90f76e3793bcffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3KEBGZ%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDKhaH1wrRgWYGiFH7NFltqTSkRJbxOE5uAe0gmjupuugIgQLWi%2FOqPrToG3rtanKYTf8e0Vn113n6Vb3wCIg9Vv1Uq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDFLLQig66YG6WE0k3ircA6MSv3VaNqdza8iJHZ4gd4RO3OnxsmtD6zT4o9kW4gj%2B7ZsTJQnA0B9rXxhynd2AI9zGaxNn0pZSbS12uHjF6gJ5ZsSieF1ersJTvWF0SdEOSiFp0msC5KjXcrQ29bs%2BtXNmLh0J291096wKOE%2FCILrxwLdQM3%2BMm4KGRXLvhn0TTBvmXldKAvEkytSqpTuFMj9Dxj8995rxuftEklrI1SZZtPhPjJMXSMFhXF9XB2KI9Z5aXkQNyei1TVR2DRI3h262bY6El41IsyEdvOB6i%2FR%2FmZFsQFvmyw%2F%2FFQLnT6izoMJd%2FnWbVqZCyN2Yn5ZOj4zjjTo0jpZSuNe9ZwHYJViQQbP%2FvR5%2BRnMlxG6qCt9%2B5tkW0EMvBE1Q7ss5Yl%2Friy7Jre0Ruzs71jluhxyBfJnExJwg1RobBDDIR7CK5S2xOd4iW5u19QpDQis7MQNyXBygMf8hJTb1dmoT7ML6lG8ejHbo3Vy9vDP%2F9AXS2lSgvCwli79gAtUHvjKc14xQkhZoHoHtpF%2FLQC3YJ3nHaW5iyACelBRRc9hIlO3rK3nz%2F8Mv6ZdmCQ%2BYqbOUDKDQb3bNvV%2BALk3S3muYbFMf3bcSEP8jgRvAekeSRZZjNgFDFTq7lQoJ98YWIkstMMLhp8oGOqUBWwtZAUniJEcOIUlcE0UslQ8rK%2BGsCDKodkSysndEtTU9ZbTf4%2BnGKlzl1A8DFJVggYC8zlE%2FrJU9uo851q6eefElM83KZtEOL%2FawO%2BCU8Z1Cw5%2BZ3PF3v90oJ2wrNaUgHZGCDPMV4sgRxZv9WvlzRTY4%2BcKoN0pW9%2FxdW8vDMepWA6H2YINgSpl6L%2B31Wvjr44unA6x%2FdCA5W0I0Rhq%2BEnscEwya&X-Amz-Signature=3412c12df20e9771543b006f9466756060b65de2a84a0af80254890eee34f6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3KEBGZ%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDKhaH1wrRgWYGiFH7NFltqTSkRJbxOE5uAe0gmjupuugIgQLWi%2FOqPrToG3rtanKYTf8e0Vn113n6Vb3wCIg9Vv1Uq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDFLLQig66YG6WE0k3ircA6MSv3VaNqdza8iJHZ4gd4RO3OnxsmtD6zT4o9kW4gj%2B7ZsTJQnA0B9rXxhynd2AI9zGaxNn0pZSbS12uHjF6gJ5ZsSieF1ersJTvWF0SdEOSiFp0msC5KjXcrQ29bs%2BtXNmLh0J291096wKOE%2FCILrxwLdQM3%2BMm4KGRXLvhn0TTBvmXldKAvEkytSqpTuFMj9Dxj8995rxuftEklrI1SZZtPhPjJMXSMFhXF9XB2KI9Z5aXkQNyei1TVR2DRI3h262bY6El41IsyEdvOB6i%2FR%2FmZFsQFvmyw%2F%2FFQLnT6izoMJd%2FnWbVqZCyN2Yn5ZOj4zjjTo0jpZSuNe9ZwHYJViQQbP%2FvR5%2BRnMlxG6qCt9%2B5tkW0EMvBE1Q7ss5Yl%2Friy7Jre0Ruzs71jluhxyBfJnExJwg1RobBDDIR7CK5S2xOd4iW5u19QpDQis7MQNyXBygMf8hJTb1dmoT7ML6lG8ejHbo3Vy9vDP%2F9AXS2lSgvCwli79gAtUHvjKc14xQkhZoHoHtpF%2FLQC3YJ3nHaW5iyACelBRRc9hIlO3rK3nz%2F8Mv6ZdmCQ%2BYqbOUDKDQb3bNvV%2BALk3S3muYbFMf3bcSEP8jgRvAekeSRZZjNgFDFTq7lQoJ98YWIkstMMLhp8oGOqUBWwtZAUniJEcOIUlcE0UslQ8rK%2BGsCDKodkSysndEtTU9ZbTf4%2BnGKlzl1A8DFJVggYC8zlE%2FrJU9uo851q6eefElM83KZtEOL%2FawO%2BCU8Z1Cw5%2BZ3PF3v90oJ2wrNaUgHZGCDPMV4sgRxZv9WvlzRTY4%2BcKoN0pW9%2FxdW8vDMepWA6H2YINgSpl6L%2B31Wvjr44unA6x%2FdCA5W0I0Rhq%2BEnscEwya&X-Amz-Signature=7e353439419e573a750a3eb8bed5e201afb954b2680a5e22811819436979ed9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3KEBGZ%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDKhaH1wrRgWYGiFH7NFltqTSkRJbxOE5uAe0gmjupuugIgQLWi%2FOqPrToG3rtanKYTf8e0Vn113n6Vb3wCIg9Vv1Uq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDFLLQig66YG6WE0k3ircA6MSv3VaNqdza8iJHZ4gd4RO3OnxsmtD6zT4o9kW4gj%2B7ZsTJQnA0B9rXxhynd2AI9zGaxNn0pZSbS12uHjF6gJ5ZsSieF1ersJTvWF0SdEOSiFp0msC5KjXcrQ29bs%2BtXNmLh0J291096wKOE%2FCILrxwLdQM3%2BMm4KGRXLvhn0TTBvmXldKAvEkytSqpTuFMj9Dxj8995rxuftEklrI1SZZtPhPjJMXSMFhXF9XB2KI9Z5aXkQNyei1TVR2DRI3h262bY6El41IsyEdvOB6i%2FR%2FmZFsQFvmyw%2F%2FFQLnT6izoMJd%2FnWbVqZCyN2Yn5ZOj4zjjTo0jpZSuNe9ZwHYJViQQbP%2FvR5%2BRnMlxG6qCt9%2B5tkW0EMvBE1Q7ss5Yl%2Friy7Jre0Ruzs71jluhxyBfJnExJwg1RobBDDIR7CK5S2xOd4iW5u19QpDQis7MQNyXBygMf8hJTb1dmoT7ML6lG8ejHbo3Vy9vDP%2F9AXS2lSgvCwli79gAtUHvjKc14xQkhZoHoHtpF%2FLQC3YJ3nHaW5iyACelBRRc9hIlO3rK3nz%2F8Mv6ZdmCQ%2BYqbOUDKDQb3bNvV%2BALk3S3muYbFMf3bcSEP8jgRvAekeSRZZjNgFDFTq7lQoJ98YWIkstMMLhp8oGOqUBWwtZAUniJEcOIUlcE0UslQ8rK%2BGsCDKodkSysndEtTU9ZbTf4%2BnGKlzl1A8DFJVggYC8zlE%2FrJU9uo851q6eefElM83KZtEOL%2FawO%2BCU8Z1Cw5%2BZ3PF3v90oJ2wrNaUgHZGCDPMV4sgRxZv9WvlzRTY4%2BcKoN0pW9%2FxdW8vDMepWA6H2YINgSpl6L%2B31Wvjr44unA6x%2FdCA5W0I0Rhq%2BEnscEwya&X-Amz-Signature=f3fa005723759e33effdd06658a85fe01f6e982f0f4ec82a7b9a28a71141a08a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOQJGAPE%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCqP%2F%2FFob7TVKREokhHj84wXNQ5VDxBxp81jc2XJ2v%2BrgIgHLRtrexaCxrsjTF0LTYFBjes%2FScMTYWaOIfPQYuKUHUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDAovPk6Ne4p8VwuAvSrcAzuXjgCOH%2Fja6y5Uue%2FfS2Rmt0kjiaXhL%2BdxlANoClQyVzMDdJrHA%2BiiTw9fBuoDqNapq2g87RFx9DREq3KKK75sRprWQ7kLCv9cCboGn9Ii89cz5YtbV7JDbyA8jQGGow7M7SkVhNzeWtJv9IdQ0SCNdCc7LZwcHFOTfPnC8m1frhxQnbeelaSEyKTWaN4gFEr2Gxn7iafHQ8U3%2F6al%2F9jAl3D6hBbcppzYTV90EgKbuAsEWn%2B%2B2SPkWR8SdgWe%2FVQGVqvMsUA%2FMZ1ome8k8U8pi1AjY2B%2BUg%2Bjt8%2F04Yo%2B4YR2LnDGLkGJzprJ7wO3VJl7UUKA7qPqBduHO38%2BFJ9x%2BNgVyMC%2BjtC5HJ7nGGCyz7QX5OecTeIn6kOv1DgJKoiqtMciEpakrhQ34jtzbSCg0xgzXjZORw4iEJcbyCN6UA032HTqlAOthm2AZluPNdOymczrMR01HnLtxLQTypb6oB7KV4JQ5196toXwMPzHt78PSbGhYVYj0eJQJAAkdUEUiI4Mqwgtg8u9R%2FSyhfNLuyhVuFS3CyvPpA%2BEyh2PnGRGp9UDuKbOLFcB5zW8Qi18mH221kj3V2DwjwOcWa%2Fv1YSSMjLLNZUbLXBlJLEhVku6%2FeI5gwhaZNNGMIPgp8oGOqUBPSQhfSxmsImq4IOK1RxnEPGKzNT5S8j%2Fn7lYAqVpLohcBnxv2LBEEfUDDo6sFtMbucG0EAwBfznejZb6PgV1A112TrtF0H8Rh%2BLyDgCTaTvtKHCvmc2fg092AeJYp%2BMniXnP%2BKr2MqfSmiEyESjSmdZHlsJ257LMI6X6GY%2FQidZFzk2NF%2F4uuta2cRIciWiLJSuLrW75ERxB7GWj2tVSi0XNhOFH&X-Amz-Signature=fea45bd0ae129cbc19ebed28c1867e2a02ed3eabaaf59d7e63c8124c33e11c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZARCC24F%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCJxN%2BrKOaOI3IvoxaQNuANV0h4q2iQs%2B29kMrnmyawfAIhAMyz5%2FgRl6E2SfgXIttOxpnCS5wRIpRN6VPRtglzSzaHKv8DCAMQABoMNjM3NDIzMTgzODA1IgzDHZOQlkxa%2FZJdwNkq3APJiEbFVIQ3siyTaxurZanDt1dsnS3orHT2vVBDXGy%2BzJ2JgS2NMUkN020Jz0f6nOoqAHmRjWFqEKZ%2B55s655h5UxyKDkyvrzPHBomQs6gldMx7kHYb3iLbqYAJFQgS%2Fvd9GyZsR%2BJx5P15V9rYeCFyrFwaX0U43Spd9hBiv9lx2jwn%2FZ3MJ0J4WDdAVOu8IeO4Y7aBFmlNc6shxrGnK9Bvwo5NZ4jd8U7VSodM5jWWcFtNOccemBV3MjKQ%2BlaYfJWgesHhdxFjk2l5mm1lb6%2FzYjJ6dWAb2ZMw%2FYiI1oyTzmy8hLCBebSslSsanH3CEK63ImyyWYoRtsZ1cZYZDLjPy07LtNjkhuXQojk4pjocfadmuoTlVTHAmHHn80I0k%2FyJQMzMFHkUIR3ya7ebWQM1srklKiJCKtIM98hf%2F2dNTa8d7RzoNfu57AhOMJb%2By0QivcMBrwfyUWDmBzbqOvpMTcnCGc3r6bm944gEkUGuC%2FKhCLwACh79KJVK1VXBeDuRp8r0OjOUVW3UQ90Ef0tZAEP%2BdIwcbAvywejKG%2FY6Dyx6iKy7DibfcmqUqSi5vN339AniG5jcKPl8zyZWvFFPMe7R2rx61QPLdlPMSBU2OlzYd96HxYWp2Np15jCJ4KfKBjqkATmJv01hpSg9Hp%2BmOMEA%2FJ%2F5cgD7xzcCd63J%2F4yuQ1SATv%2FNOkrELre1VV%2BhcJThV3%2BO4DPkwwl3E9LuE6N43f0fKOGZ8gIkJhqCoYZt4K3TIo24rYXfI1BnK%2FZGJFl3qAF7o73Nc4Rsnf1r1uT5FGmyCFU9YJBRG9IAq5%2BXzKjLFtUL1GiSvZeCFTBfyT%2FheSsBYgqvs%2BB72p9OQr38YAm%2FVzCG&X-Amz-Signature=003ad3a76dad42090283bfacb9b337d85e8a499228cf11bb195056a3212cd541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZARCC24F%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCJxN%2BrKOaOI3IvoxaQNuANV0h4q2iQs%2B29kMrnmyawfAIhAMyz5%2FgRl6E2SfgXIttOxpnCS5wRIpRN6VPRtglzSzaHKv8DCAMQABoMNjM3NDIzMTgzODA1IgzDHZOQlkxa%2FZJdwNkq3APJiEbFVIQ3siyTaxurZanDt1dsnS3orHT2vVBDXGy%2BzJ2JgS2NMUkN020Jz0f6nOoqAHmRjWFqEKZ%2B55s655h5UxyKDkyvrzPHBomQs6gldMx7kHYb3iLbqYAJFQgS%2Fvd9GyZsR%2BJx5P15V9rYeCFyrFwaX0U43Spd9hBiv9lx2jwn%2FZ3MJ0J4WDdAVOu8IeO4Y7aBFmlNc6shxrGnK9Bvwo5NZ4jd8U7VSodM5jWWcFtNOccemBV3MjKQ%2BlaYfJWgesHhdxFjk2l5mm1lb6%2FzYjJ6dWAb2ZMw%2FYiI1oyTzmy8hLCBebSslSsanH3CEK63ImyyWYoRtsZ1cZYZDLjPy07LtNjkhuXQojk4pjocfadmuoTlVTHAmHHn80I0k%2FyJQMzMFHkUIR3ya7ebWQM1srklKiJCKtIM98hf%2F2dNTa8d7RzoNfu57AhOMJb%2By0QivcMBrwfyUWDmBzbqOvpMTcnCGc3r6bm944gEkUGuC%2FKhCLwACh79KJVK1VXBeDuRp8r0OjOUVW3UQ90Ef0tZAEP%2BdIwcbAvywejKG%2FY6Dyx6iKy7DibfcmqUqSi5vN339AniG5jcKPl8zyZWvFFPMe7R2rx61QPLdlPMSBU2OlzYd96HxYWp2Np15jCJ4KfKBjqkATmJv01hpSg9Hp%2BmOMEA%2FJ%2F5cgD7xzcCd63J%2F4yuQ1SATv%2FNOkrELre1VV%2BhcJThV3%2BO4DPkwwl3E9LuE6N43f0fKOGZ8gIkJhqCoYZt4K3TIo24rYXfI1BnK%2FZGJFl3qAF7o73Nc4Rsnf1r1uT5FGmyCFU9YJBRG9IAq5%2BXzKjLFtUL1GiSvZeCFTBfyT%2FheSsBYgqvs%2BB72p9OQr38YAm%2FVzCG&X-Amz-Signature=ca3af8b0a3114648b5f7cb3dfdceaaa71e937eba63a2c9aefdddb0b93d53e1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZARCC24F%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCJxN%2BrKOaOI3IvoxaQNuANV0h4q2iQs%2B29kMrnmyawfAIhAMyz5%2FgRl6E2SfgXIttOxpnCS5wRIpRN6VPRtglzSzaHKv8DCAMQABoMNjM3NDIzMTgzODA1IgzDHZOQlkxa%2FZJdwNkq3APJiEbFVIQ3siyTaxurZanDt1dsnS3orHT2vVBDXGy%2BzJ2JgS2NMUkN020Jz0f6nOoqAHmRjWFqEKZ%2B55s655h5UxyKDkyvrzPHBomQs6gldMx7kHYb3iLbqYAJFQgS%2Fvd9GyZsR%2BJx5P15V9rYeCFyrFwaX0U43Spd9hBiv9lx2jwn%2FZ3MJ0J4WDdAVOu8IeO4Y7aBFmlNc6shxrGnK9Bvwo5NZ4jd8U7VSodM5jWWcFtNOccemBV3MjKQ%2BlaYfJWgesHhdxFjk2l5mm1lb6%2FzYjJ6dWAb2ZMw%2FYiI1oyTzmy8hLCBebSslSsanH3CEK63ImyyWYoRtsZ1cZYZDLjPy07LtNjkhuXQojk4pjocfadmuoTlVTHAmHHn80I0k%2FyJQMzMFHkUIR3ya7ebWQM1srklKiJCKtIM98hf%2F2dNTa8d7RzoNfu57AhOMJb%2By0QivcMBrwfyUWDmBzbqOvpMTcnCGc3r6bm944gEkUGuC%2FKhCLwACh79KJVK1VXBeDuRp8r0OjOUVW3UQ90Ef0tZAEP%2BdIwcbAvywejKG%2FY6Dyx6iKy7DibfcmqUqSi5vN339AniG5jcKPl8zyZWvFFPMe7R2rx61QPLdlPMSBU2OlzYd96HxYWp2Np15jCJ4KfKBjqkATmJv01hpSg9Hp%2BmOMEA%2FJ%2F5cgD7xzcCd63J%2F4yuQ1SATv%2FNOkrELre1VV%2BhcJThV3%2BO4DPkwwl3E9LuE6N43f0fKOGZ8gIkJhqCoYZt4K3TIo24rYXfI1BnK%2FZGJFl3qAF7o73Nc4Rsnf1r1uT5FGmyCFU9YJBRG9IAq5%2BXzKjLFtUL1GiSvZeCFTBfyT%2FheSsBYgqvs%2BB72p9OQr38YAm%2FVzCG&X-Amz-Signature=3433895d6e8c6c8074b4c321a106add270c893fe211bdbc94e4994b94c83e335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZARCC24F%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCJxN%2BrKOaOI3IvoxaQNuANV0h4q2iQs%2B29kMrnmyawfAIhAMyz5%2FgRl6E2SfgXIttOxpnCS5wRIpRN6VPRtglzSzaHKv8DCAMQABoMNjM3NDIzMTgzODA1IgzDHZOQlkxa%2FZJdwNkq3APJiEbFVIQ3siyTaxurZanDt1dsnS3orHT2vVBDXGy%2BzJ2JgS2NMUkN020Jz0f6nOoqAHmRjWFqEKZ%2B55s655h5UxyKDkyvrzPHBomQs6gldMx7kHYb3iLbqYAJFQgS%2Fvd9GyZsR%2BJx5P15V9rYeCFyrFwaX0U43Spd9hBiv9lx2jwn%2FZ3MJ0J4WDdAVOu8IeO4Y7aBFmlNc6shxrGnK9Bvwo5NZ4jd8U7VSodM5jWWcFtNOccemBV3MjKQ%2BlaYfJWgesHhdxFjk2l5mm1lb6%2FzYjJ6dWAb2ZMw%2FYiI1oyTzmy8hLCBebSslSsanH3CEK63ImyyWYoRtsZ1cZYZDLjPy07LtNjkhuXQojk4pjocfadmuoTlVTHAmHHn80I0k%2FyJQMzMFHkUIR3ya7ebWQM1srklKiJCKtIM98hf%2F2dNTa8d7RzoNfu57AhOMJb%2By0QivcMBrwfyUWDmBzbqOvpMTcnCGc3r6bm944gEkUGuC%2FKhCLwACh79KJVK1VXBeDuRp8r0OjOUVW3UQ90Ef0tZAEP%2BdIwcbAvywejKG%2FY6Dyx6iKy7DibfcmqUqSi5vN339AniG5jcKPl8zyZWvFFPMe7R2rx61QPLdlPMSBU2OlzYd96HxYWp2Np15jCJ4KfKBjqkATmJv01hpSg9Hp%2BmOMEA%2FJ%2F5cgD7xzcCd63J%2F4yuQ1SATv%2FNOkrELre1VV%2BhcJThV3%2BO4DPkwwl3E9LuE6N43f0fKOGZ8gIkJhqCoYZt4K3TIo24rYXfI1BnK%2FZGJFl3qAF7o73Nc4Rsnf1r1uT5FGmyCFU9YJBRG9IAq5%2BXzKjLFtUL1GiSvZeCFTBfyT%2FheSsBYgqvs%2BB72p9OQr38YAm%2FVzCG&X-Amz-Signature=4199a641de169640508e692aa6800b7cd329ecf89d81993245d1cc2502cc997a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZARCC24F%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCJxN%2BrKOaOI3IvoxaQNuANV0h4q2iQs%2B29kMrnmyawfAIhAMyz5%2FgRl6E2SfgXIttOxpnCS5wRIpRN6VPRtglzSzaHKv8DCAMQABoMNjM3NDIzMTgzODA1IgzDHZOQlkxa%2FZJdwNkq3APJiEbFVIQ3siyTaxurZanDt1dsnS3orHT2vVBDXGy%2BzJ2JgS2NMUkN020Jz0f6nOoqAHmRjWFqEKZ%2B55s655h5UxyKDkyvrzPHBomQs6gldMx7kHYb3iLbqYAJFQgS%2Fvd9GyZsR%2BJx5P15V9rYeCFyrFwaX0U43Spd9hBiv9lx2jwn%2FZ3MJ0J4WDdAVOu8IeO4Y7aBFmlNc6shxrGnK9Bvwo5NZ4jd8U7VSodM5jWWcFtNOccemBV3MjKQ%2BlaYfJWgesHhdxFjk2l5mm1lb6%2FzYjJ6dWAb2ZMw%2FYiI1oyTzmy8hLCBebSslSsanH3CEK63ImyyWYoRtsZ1cZYZDLjPy07LtNjkhuXQojk4pjocfadmuoTlVTHAmHHn80I0k%2FyJQMzMFHkUIR3ya7ebWQM1srklKiJCKtIM98hf%2F2dNTa8d7RzoNfu57AhOMJb%2By0QivcMBrwfyUWDmBzbqOvpMTcnCGc3r6bm944gEkUGuC%2FKhCLwACh79KJVK1VXBeDuRp8r0OjOUVW3UQ90Ef0tZAEP%2BdIwcbAvywejKG%2FY6Dyx6iKy7DibfcmqUqSi5vN339AniG5jcKPl8zyZWvFFPMe7R2rx61QPLdlPMSBU2OlzYd96HxYWp2Np15jCJ4KfKBjqkATmJv01hpSg9Hp%2BmOMEA%2FJ%2F5cgD7xzcCd63J%2F4yuQ1SATv%2FNOkrELre1VV%2BhcJThV3%2BO4DPkwwl3E9LuE6N43f0fKOGZ8gIkJhqCoYZt4K3TIo24rYXfI1BnK%2FZGJFl3qAF7o73Nc4Rsnf1r1uT5FGmyCFU9YJBRG9IAq5%2BXzKjLFtUL1GiSvZeCFTBfyT%2FheSsBYgqvs%2BB72p9OQr38YAm%2FVzCG&X-Amz-Signature=240447af7a30f20045a4fb012f12bcd6c3fe664b63ab924d1f1aff58045d31a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZARCC24F%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCJxN%2BrKOaOI3IvoxaQNuANV0h4q2iQs%2B29kMrnmyawfAIhAMyz5%2FgRl6E2SfgXIttOxpnCS5wRIpRN6VPRtglzSzaHKv8DCAMQABoMNjM3NDIzMTgzODA1IgzDHZOQlkxa%2FZJdwNkq3APJiEbFVIQ3siyTaxurZanDt1dsnS3orHT2vVBDXGy%2BzJ2JgS2NMUkN020Jz0f6nOoqAHmRjWFqEKZ%2B55s655h5UxyKDkyvrzPHBomQs6gldMx7kHYb3iLbqYAJFQgS%2Fvd9GyZsR%2BJx5P15V9rYeCFyrFwaX0U43Spd9hBiv9lx2jwn%2FZ3MJ0J4WDdAVOu8IeO4Y7aBFmlNc6shxrGnK9Bvwo5NZ4jd8U7VSodM5jWWcFtNOccemBV3MjKQ%2BlaYfJWgesHhdxFjk2l5mm1lb6%2FzYjJ6dWAb2ZMw%2FYiI1oyTzmy8hLCBebSslSsanH3CEK63ImyyWYoRtsZ1cZYZDLjPy07LtNjkhuXQojk4pjocfadmuoTlVTHAmHHn80I0k%2FyJQMzMFHkUIR3ya7ebWQM1srklKiJCKtIM98hf%2F2dNTa8d7RzoNfu57AhOMJb%2By0QivcMBrwfyUWDmBzbqOvpMTcnCGc3r6bm944gEkUGuC%2FKhCLwACh79KJVK1VXBeDuRp8r0OjOUVW3UQ90Ef0tZAEP%2BdIwcbAvywejKG%2FY6Dyx6iKy7DibfcmqUqSi5vN339AniG5jcKPl8zyZWvFFPMe7R2rx61QPLdlPMSBU2OlzYd96HxYWp2Np15jCJ4KfKBjqkATmJv01hpSg9Hp%2BmOMEA%2FJ%2F5cgD7xzcCd63J%2F4yuQ1SATv%2FNOkrELre1VV%2BhcJThV3%2BO4DPkwwl3E9LuE6N43f0fKOGZ8gIkJhqCoYZt4K3TIo24rYXfI1BnK%2FZGJFl3qAF7o73Nc4Rsnf1r1uT5FGmyCFU9YJBRG9IAq5%2BXzKjLFtUL1GiSvZeCFTBfyT%2FheSsBYgqvs%2BB72p9OQr38YAm%2FVzCG&X-Amz-Signature=5fa41c71ff785de6a5e984e5f9d0b9a507113e48c23dc8128760018d887a16ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZARCC24F%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCJxN%2BrKOaOI3IvoxaQNuANV0h4q2iQs%2B29kMrnmyawfAIhAMyz5%2FgRl6E2SfgXIttOxpnCS5wRIpRN6VPRtglzSzaHKv8DCAMQABoMNjM3NDIzMTgzODA1IgzDHZOQlkxa%2FZJdwNkq3APJiEbFVIQ3siyTaxurZanDt1dsnS3orHT2vVBDXGy%2BzJ2JgS2NMUkN020Jz0f6nOoqAHmRjWFqEKZ%2B55s655h5UxyKDkyvrzPHBomQs6gldMx7kHYb3iLbqYAJFQgS%2Fvd9GyZsR%2BJx5P15V9rYeCFyrFwaX0U43Spd9hBiv9lx2jwn%2FZ3MJ0J4WDdAVOu8IeO4Y7aBFmlNc6shxrGnK9Bvwo5NZ4jd8U7VSodM5jWWcFtNOccemBV3MjKQ%2BlaYfJWgesHhdxFjk2l5mm1lb6%2FzYjJ6dWAb2ZMw%2FYiI1oyTzmy8hLCBebSslSsanH3CEK63ImyyWYoRtsZ1cZYZDLjPy07LtNjkhuXQojk4pjocfadmuoTlVTHAmHHn80I0k%2FyJQMzMFHkUIR3ya7ebWQM1srklKiJCKtIM98hf%2F2dNTa8d7RzoNfu57AhOMJb%2By0QivcMBrwfyUWDmBzbqOvpMTcnCGc3r6bm944gEkUGuC%2FKhCLwACh79KJVK1VXBeDuRp8r0OjOUVW3UQ90Ef0tZAEP%2BdIwcbAvywejKG%2FY6Dyx6iKy7DibfcmqUqSi5vN339AniG5jcKPl8zyZWvFFPMe7R2rx61QPLdlPMSBU2OlzYd96HxYWp2Np15jCJ4KfKBjqkATmJv01hpSg9Hp%2BmOMEA%2FJ%2F5cgD7xzcCd63J%2F4yuQ1SATv%2FNOkrELre1VV%2BhcJThV3%2BO4DPkwwl3E9LuE6N43f0fKOGZ8gIkJhqCoYZt4K3TIo24rYXfI1BnK%2FZGJFl3qAF7o73Nc4Rsnf1r1uT5FGmyCFU9YJBRG9IAq5%2BXzKjLFtUL1GiSvZeCFTBfyT%2FheSsBYgqvs%2BB72p9OQr38YAm%2FVzCG&X-Amz-Signature=d995dfd1a827a2fc7ead13fd43c56f25b53a16cfc1e06f380d4ca1c802663f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZARCC24F%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCJxN%2BrKOaOI3IvoxaQNuANV0h4q2iQs%2B29kMrnmyawfAIhAMyz5%2FgRl6E2SfgXIttOxpnCS5wRIpRN6VPRtglzSzaHKv8DCAMQABoMNjM3NDIzMTgzODA1IgzDHZOQlkxa%2FZJdwNkq3APJiEbFVIQ3siyTaxurZanDt1dsnS3orHT2vVBDXGy%2BzJ2JgS2NMUkN020Jz0f6nOoqAHmRjWFqEKZ%2B55s655h5UxyKDkyvrzPHBomQs6gldMx7kHYb3iLbqYAJFQgS%2Fvd9GyZsR%2BJx5P15V9rYeCFyrFwaX0U43Spd9hBiv9lx2jwn%2FZ3MJ0J4WDdAVOu8IeO4Y7aBFmlNc6shxrGnK9Bvwo5NZ4jd8U7VSodM5jWWcFtNOccemBV3MjKQ%2BlaYfJWgesHhdxFjk2l5mm1lb6%2FzYjJ6dWAb2ZMw%2FYiI1oyTzmy8hLCBebSslSsanH3CEK63ImyyWYoRtsZ1cZYZDLjPy07LtNjkhuXQojk4pjocfadmuoTlVTHAmHHn80I0k%2FyJQMzMFHkUIR3ya7ebWQM1srklKiJCKtIM98hf%2F2dNTa8d7RzoNfu57AhOMJb%2By0QivcMBrwfyUWDmBzbqOvpMTcnCGc3r6bm944gEkUGuC%2FKhCLwACh79KJVK1VXBeDuRp8r0OjOUVW3UQ90Ef0tZAEP%2BdIwcbAvywejKG%2FY6Dyx6iKy7DibfcmqUqSi5vN339AniG5jcKPl8zyZWvFFPMe7R2rx61QPLdlPMSBU2OlzYd96HxYWp2Np15jCJ4KfKBjqkATmJv01hpSg9Hp%2BmOMEA%2FJ%2F5cgD7xzcCd63J%2F4yuQ1SATv%2FNOkrELre1VV%2BhcJThV3%2BO4DPkwwl3E9LuE6N43f0fKOGZ8gIkJhqCoYZt4K3TIo24rYXfI1BnK%2FZGJFl3qAF7o73Nc4Rsnf1r1uT5FGmyCFU9YJBRG9IAq5%2BXzKjLFtUL1GiSvZeCFTBfyT%2FheSsBYgqvs%2BB72p9OQr38YAm%2FVzCG&X-Amz-Signature=040269c0e9adce0a08dc59f76c1bcbb742101134b14593681888086cbeb78361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZARCC24F%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCJxN%2BrKOaOI3IvoxaQNuANV0h4q2iQs%2B29kMrnmyawfAIhAMyz5%2FgRl6E2SfgXIttOxpnCS5wRIpRN6VPRtglzSzaHKv8DCAMQABoMNjM3NDIzMTgzODA1IgzDHZOQlkxa%2FZJdwNkq3APJiEbFVIQ3siyTaxurZanDt1dsnS3orHT2vVBDXGy%2BzJ2JgS2NMUkN020Jz0f6nOoqAHmRjWFqEKZ%2B55s655h5UxyKDkyvrzPHBomQs6gldMx7kHYb3iLbqYAJFQgS%2Fvd9GyZsR%2BJx5P15V9rYeCFyrFwaX0U43Spd9hBiv9lx2jwn%2FZ3MJ0J4WDdAVOu8IeO4Y7aBFmlNc6shxrGnK9Bvwo5NZ4jd8U7VSodM5jWWcFtNOccemBV3MjKQ%2BlaYfJWgesHhdxFjk2l5mm1lb6%2FzYjJ6dWAb2ZMw%2FYiI1oyTzmy8hLCBebSslSsanH3CEK63ImyyWYoRtsZ1cZYZDLjPy07LtNjkhuXQojk4pjocfadmuoTlVTHAmHHn80I0k%2FyJQMzMFHkUIR3ya7ebWQM1srklKiJCKtIM98hf%2F2dNTa8d7RzoNfu57AhOMJb%2By0QivcMBrwfyUWDmBzbqOvpMTcnCGc3r6bm944gEkUGuC%2FKhCLwACh79KJVK1VXBeDuRp8r0OjOUVW3UQ90Ef0tZAEP%2BdIwcbAvywejKG%2FY6Dyx6iKy7DibfcmqUqSi5vN339AniG5jcKPl8zyZWvFFPMe7R2rx61QPLdlPMSBU2OlzYd96HxYWp2Np15jCJ4KfKBjqkATmJv01hpSg9Hp%2BmOMEA%2FJ%2F5cgD7xzcCd63J%2F4yuQ1SATv%2FNOkrELre1VV%2BhcJThV3%2BO4DPkwwl3E9LuE6N43f0fKOGZ8gIkJhqCoYZt4K3TIo24rYXfI1BnK%2FZGJFl3qAF7o73Nc4Rsnf1r1uT5FGmyCFU9YJBRG9IAq5%2BXzKjLFtUL1GiSvZeCFTBfyT%2FheSsBYgqvs%2BB72p9OQr38YAm%2FVzCG&X-Amz-Signature=e887c6136d0309385447f0aef730db03be59f5793ac801c3ba74b31cbb60f917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
