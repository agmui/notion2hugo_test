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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4W3UGYL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAcYAwuUdYPrLSWYtjGGnAZ9WJgHWWAKKwdDFJ5BZn%2BgAiAUHl0H%2FMGAuv7YeOm43vzE3EQmtgj7%2F%2BSxHgqxyASsDCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMju1L10FauAYw5vNuKtwD1DUbaic3PLJ5lTsf%2FGCp%2BvKahja7tfWVGzzmsEqQ0mmDZLlZdfF1OyzFwg2ifqmB4DrFOfMSNbQ2PEB5yISVZ7I6kLXyFUxOubwBp%2FloHhIpoirqvmEkGohj3XgQAkkYjh0d5SoaW9m3nH3YXFB%2Fs7ViG1ssjW%2BTjE%2FZf2T5kJdJ29RjzSJ3%2F9EJuVag6%2FrG7R%2BPpVd1P%2FtWhT79RXCZSvrPK7o7knfaNVxVCjQN4%2BelBjuNDoiiHVDB6%2Flxp1B08dJeX1Sx0v2Onrqk0BZZ%2BTicIMLgVEjn34HcvYL3Zs%2F0MKI0J6EFWINu5godN%2BCfntJh1f1LKmsTIb7YAZ6pSXXqQB3Vj2Zbvm%2BTyL3tuY5vFMJ65DtfUf0X71ja6Eqf95Qn2n%2BGz9%2Bfng6XXQLC2t7Dizmtz7HjbRIrDBC%2Fyx%2BvUaD8eWd1GuVnUh%2FCHBc4RIW%2FlKG13UgG9vCgvQ6%2F9qxZokQBH%2BG0LmfmeyOE5R%2FPCF2UN%2FOHmpY8gD94wycga9NtFJHWjegxlM80GbF1SFyU0NhaxdEDlcRvvBEmBloW7Q0%2B9%2Fe34jb%2FpvtykSa2toJYckeZG%2BsvKIRx%2B2ZW5sFXyuX166FQeIA7VH9c77rVKQPOwpRk8TPh2%2BAw36HQxAY6pgEpDWV4jz%2FfCTF1qCYhUfBix4oHyxBiwhXK0FmiSxO6z9gBhbH2PUT4ngkJ5YRasd5WY73UT1MLZX6%2FPrcQ7Q%2FdXrDRfZFNmbmDap7497tEJeJCiR9%2F6ZlHdNvrc5fgka68cSKHgNpKDgX1S2mvVFVb0g6KwTUl7Xt2ViXfGaUt7je7CvKSZwlr1IFCvQJ8sN5y8dPlC07Yua2iu0OvYUyoj2wqAD3l&X-Amz-Signature=962d6a1f48ab420ae13de64421af3a6c6a05394c9eaaea384a0e024a8cb5a75a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4W3UGYL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAcYAwuUdYPrLSWYtjGGnAZ9WJgHWWAKKwdDFJ5BZn%2BgAiAUHl0H%2FMGAuv7YeOm43vzE3EQmtgj7%2F%2BSxHgqxyASsDCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMju1L10FauAYw5vNuKtwD1DUbaic3PLJ5lTsf%2FGCp%2BvKahja7tfWVGzzmsEqQ0mmDZLlZdfF1OyzFwg2ifqmB4DrFOfMSNbQ2PEB5yISVZ7I6kLXyFUxOubwBp%2FloHhIpoirqvmEkGohj3XgQAkkYjh0d5SoaW9m3nH3YXFB%2Fs7ViG1ssjW%2BTjE%2FZf2T5kJdJ29RjzSJ3%2F9EJuVag6%2FrG7R%2BPpVd1P%2FtWhT79RXCZSvrPK7o7knfaNVxVCjQN4%2BelBjuNDoiiHVDB6%2Flxp1B08dJeX1Sx0v2Onrqk0BZZ%2BTicIMLgVEjn34HcvYL3Zs%2F0MKI0J6EFWINu5godN%2BCfntJh1f1LKmsTIb7YAZ6pSXXqQB3Vj2Zbvm%2BTyL3tuY5vFMJ65DtfUf0X71ja6Eqf95Qn2n%2BGz9%2Bfng6XXQLC2t7Dizmtz7HjbRIrDBC%2Fyx%2BvUaD8eWd1GuVnUh%2FCHBc4RIW%2FlKG13UgG9vCgvQ6%2F9qxZokQBH%2BG0LmfmeyOE5R%2FPCF2UN%2FOHmpY8gD94wycga9NtFJHWjegxlM80GbF1SFyU0NhaxdEDlcRvvBEmBloW7Q0%2B9%2Fe34jb%2FpvtykSa2toJYckeZG%2BsvKIRx%2B2ZW5sFXyuX166FQeIA7VH9c77rVKQPOwpRk8TPh2%2BAw36HQxAY6pgEpDWV4jz%2FfCTF1qCYhUfBix4oHyxBiwhXK0FmiSxO6z9gBhbH2PUT4ngkJ5YRasd5WY73UT1MLZX6%2FPrcQ7Q%2FdXrDRfZFNmbmDap7497tEJeJCiR9%2F6ZlHdNvrc5fgka68cSKHgNpKDgX1S2mvVFVb0g6KwTUl7Xt2ViXfGaUt7je7CvKSZwlr1IFCvQJ8sN5y8dPlC07Yua2iu0OvYUyoj2wqAD3l&X-Amz-Signature=b4e33d319be045fd03e676339e389583e8d85898ccaef68a8934187d95e9d0b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4W3UGYL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAcYAwuUdYPrLSWYtjGGnAZ9WJgHWWAKKwdDFJ5BZn%2BgAiAUHl0H%2FMGAuv7YeOm43vzE3EQmtgj7%2F%2BSxHgqxyASsDCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMju1L10FauAYw5vNuKtwD1DUbaic3PLJ5lTsf%2FGCp%2BvKahja7tfWVGzzmsEqQ0mmDZLlZdfF1OyzFwg2ifqmB4DrFOfMSNbQ2PEB5yISVZ7I6kLXyFUxOubwBp%2FloHhIpoirqvmEkGohj3XgQAkkYjh0d5SoaW9m3nH3YXFB%2Fs7ViG1ssjW%2BTjE%2FZf2T5kJdJ29RjzSJ3%2F9EJuVag6%2FrG7R%2BPpVd1P%2FtWhT79RXCZSvrPK7o7knfaNVxVCjQN4%2BelBjuNDoiiHVDB6%2Flxp1B08dJeX1Sx0v2Onrqk0BZZ%2BTicIMLgVEjn34HcvYL3Zs%2F0MKI0J6EFWINu5godN%2BCfntJh1f1LKmsTIb7YAZ6pSXXqQB3Vj2Zbvm%2BTyL3tuY5vFMJ65DtfUf0X71ja6Eqf95Qn2n%2BGz9%2Bfng6XXQLC2t7Dizmtz7HjbRIrDBC%2Fyx%2BvUaD8eWd1GuVnUh%2FCHBc4RIW%2FlKG13UgG9vCgvQ6%2F9qxZokQBH%2BG0LmfmeyOE5R%2FPCF2UN%2FOHmpY8gD94wycga9NtFJHWjegxlM80GbF1SFyU0NhaxdEDlcRvvBEmBloW7Q0%2B9%2Fe34jb%2FpvtykSa2toJYckeZG%2BsvKIRx%2B2ZW5sFXyuX166FQeIA7VH9c77rVKQPOwpRk8TPh2%2BAw36HQxAY6pgEpDWV4jz%2FfCTF1qCYhUfBix4oHyxBiwhXK0FmiSxO6z9gBhbH2PUT4ngkJ5YRasd5WY73UT1MLZX6%2FPrcQ7Q%2FdXrDRfZFNmbmDap7497tEJeJCiR9%2F6ZlHdNvrc5fgka68cSKHgNpKDgX1S2mvVFVb0g6KwTUl7Xt2ViXfGaUt7je7CvKSZwlr1IFCvQJ8sN5y8dPlC07Yua2iu0OvYUyoj2wqAD3l&X-Amz-Signature=4db63eb70f9384696d5bcb2040aaa59c530900910b6c075a2fa43c7105d08156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4W3UGYL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAcYAwuUdYPrLSWYtjGGnAZ9WJgHWWAKKwdDFJ5BZn%2BgAiAUHl0H%2FMGAuv7YeOm43vzE3EQmtgj7%2F%2BSxHgqxyASsDCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMju1L10FauAYw5vNuKtwD1DUbaic3PLJ5lTsf%2FGCp%2BvKahja7tfWVGzzmsEqQ0mmDZLlZdfF1OyzFwg2ifqmB4DrFOfMSNbQ2PEB5yISVZ7I6kLXyFUxOubwBp%2FloHhIpoirqvmEkGohj3XgQAkkYjh0d5SoaW9m3nH3YXFB%2Fs7ViG1ssjW%2BTjE%2FZf2T5kJdJ29RjzSJ3%2F9EJuVag6%2FrG7R%2BPpVd1P%2FtWhT79RXCZSvrPK7o7knfaNVxVCjQN4%2BelBjuNDoiiHVDB6%2Flxp1B08dJeX1Sx0v2Onrqk0BZZ%2BTicIMLgVEjn34HcvYL3Zs%2F0MKI0J6EFWINu5godN%2BCfntJh1f1LKmsTIb7YAZ6pSXXqQB3Vj2Zbvm%2BTyL3tuY5vFMJ65DtfUf0X71ja6Eqf95Qn2n%2BGz9%2Bfng6XXQLC2t7Dizmtz7HjbRIrDBC%2Fyx%2BvUaD8eWd1GuVnUh%2FCHBc4RIW%2FlKG13UgG9vCgvQ6%2F9qxZokQBH%2BG0LmfmeyOE5R%2FPCF2UN%2FOHmpY8gD94wycga9NtFJHWjegxlM80GbF1SFyU0NhaxdEDlcRvvBEmBloW7Q0%2B9%2Fe34jb%2FpvtykSa2toJYckeZG%2BsvKIRx%2B2ZW5sFXyuX166FQeIA7VH9c77rVKQPOwpRk8TPh2%2BAw36HQxAY6pgEpDWV4jz%2FfCTF1qCYhUfBix4oHyxBiwhXK0FmiSxO6z9gBhbH2PUT4ngkJ5YRasd5WY73UT1MLZX6%2FPrcQ7Q%2FdXrDRfZFNmbmDap7497tEJeJCiR9%2F6ZlHdNvrc5fgka68cSKHgNpKDgX1S2mvVFVb0g6KwTUl7Xt2ViXfGaUt7je7CvKSZwlr1IFCvQJ8sN5y8dPlC07Yua2iu0OvYUyoj2wqAD3l&X-Amz-Signature=3af23117770af8b870021fe78b11e0ff8018e4e6a41a0a9e281beeabfdf2681d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4W3UGYL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAcYAwuUdYPrLSWYtjGGnAZ9WJgHWWAKKwdDFJ5BZn%2BgAiAUHl0H%2FMGAuv7YeOm43vzE3EQmtgj7%2F%2BSxHgqxyASsDCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMju1L10FauAYw5vNuKtwD1DUbaic3PLJ5lTsf%2FGCp%2BvKahja7tfWVGzzmsEqQ0mmDZLlZdfF1OyzFwg2ifqmB4DrFOfMSNbQ2PEB5yISVZ7I6kLXyFUxOubwBp%2FloHhIpoirqvmEkGohj3XgQAkkYjh0d5SoaW9m3nH3YXFB%2Fs7ViG1ssjW%2BTjE%2FZf2T5kJdJ29RjzSJ3%2F9EJuVag6%2FrG7R%2BPpVd1P%2FtWhT79RXCZSvrPK7o7knfaNVxVCjQN4%2BelBjuNDoiiHVDB6%2Flxp1B08dJeX1Sx0v2Onrqk0BZZ%2BTicIMLgVEjn34HcvYL3Zs%2F0MKI0J6EFWINu5godN%2BCfntJh1f1LKmsTIb7YAZ6pSXXqQB3Vj2Zbvm%2BTyL3tuY5vFMJ65DtfUf0X71ja6Eqf95Qn2n%2BGz9%2Bfng6XXQLC2t7Dizmtz7HjbRIrDBC%2Fyx%2BvUaD8eWd1GuVnUh%2FCHBc4RIW%2FlKG13UgG9vCgvQ6%2F9qxZokQBH%2BG0LmfmeyOE5R%2FPCF2UN%2FOHmpY8gD94wycga9NtFJHWjegxlM80GbF1SFyU0NhaxdEDlcRvvBEmBloW7Q0%2B9%2Fe34jb%2FpvtykSa2toJYckeZG%2BsvKIRx%2B2ZW5sFXyuX166FQeIA7VH9c77rVKQPOwpRk8TPh2%2BAw36HQxAY6pgEpDWV4jz%2FfCTF1qCYhUfBix4oHyxBiwhXK0FmiSxO6z9gBhbH2PUT4ngkJ5YRasd5WY73UT1MLZX6%2FPrcQ7Q%2FdXrDRfZFNmbmDap7497tEJeJCiR9%2F6ZlHdNvrc5fgka68cSKHgNpKDgX1S2mvVFVb0g6KwTUl7Xt2ViXfGaUt7je7CvKSZwlr1IFCvQJ8sN5y8dPlC07Yua2iu0OvYUyoj2wqAD3l&X-Amz-Signature=1078b4dfbcd387eb04d962dd38daba554256e63e3d11023d87637260951763d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4W3UGYL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAcYAwuUdYPrLSWYtjGGnAZ9WJgHWWAKKwdDFJ5BZn%2BgAiAUHl0H%2FMGAuv7YeOm43vzE3EQmtgj7%2F%2BSxHgqxyASsDCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMju1L10FauAYw5vNuKtwD1DUbaic3PLJ5lTsf%2FGCp%2BvKahja7tfWVGzzmsEqQ0mmDZLlZdfF1OyzFwg2ifqmB4DrFOfMSNbQ2PEB5yISVZ7I6kLXyFUxOubwBp%2FloHhIpoirqvmEkGohj3XgQAkkYjh0d5SoaW9m3nH3YXFB%2Fs7ViG1ssjW%2BTjE%2FZf2T5kJdJ29RjzSJ3%2F9EJuVag6%2FrG7R%2BPpVd1P%2FtWhT79RXCZSvrPK7o7knfaNVxVCjQN4%2BelBjuNDoiiHVDB6%2Flxp1B08dJeX1Sx0v2Onrqk0BZZ%2BTicIMLgVEjn34HcvYL3Zs%2F0MKI0J6EFWINu5godN%2BCfntJh1f1LKmsTIb7YAZ6pSXXqQB3Vj2Zbvm%2BTyL3tuY5vFMJ65DtfUf0X71ja6Eqf95Qn2n%2BGz9%2Bfng6XXQLC2t7Dizmtz7HjbRIrDBC%2Fyx%2BvUaD8eWd1GuVnUh%2FCHBc4RIW%2FlKG13UgG9vCgvQ6%2F9qxZokQBH%2BG0LmfmeyOE5R%2FPCF2UN%2FOHmpY8gD94wycga9NtFJHWjegxlM80GbF1SFyU0NhaxdEDlcRvvBEmBloW7Q0%2B9%2Fe34jb%2FpvtykSa2toJYckeZG%2BsvKIRx%2B2ZW5sFXyuX166FQeIA7VH9c77rVKQPOwpRk8TPh2%2BAw36HQxAY6pgEpDWV4jz%2FfCTF1qCYhUfBix4oHyxBiwhXK0FmiSxO6z9gBhbH2PUT4ngkJ5YRasd5WY73UT1MLZX6%2FPrcQ7Q%2FdXrDRfZFNmbmDap7497tEJeJCiR9%2F6ZlHdNvrc5fgka68cSKHgNpKDgX1S2mvVFVb0g6KwTUl7Xt2ViXfGaUt7je7CvKSZwlr1IFCvQJ8sN5y8dPlC07Yua2iu0OvYUyoj2wqAD3l&X-Amz-Signature=af56bbca1b114ef1a15b7b7695ba18145d2fb351f55ce9dbc9c693fa0d20bf52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4W3UGYL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAcYAwuUdYPrLSWYtjGGnAZ9WJgHWWAKKwdDFJ5BZn%2BgAiAUHl0H%2FMGAuv7YeOm43vzE3EQmtgj7%2F%2BSxHgqxyASsDCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMju1L10FauAYw5vNuKtwD1DUbaic3PLJ5lTsf%2FGCp%2BvKahja7tfWVGzzmsEqQ0mmDZLlZdfF1OyzFwg2ifqmB4DrFOfMSNbQ2PEB5yISVZ7I6kLXyFUxOubwBp%2FloHhIpoirqvmEkGohj3XgQAkkYjh0d5SoaW9m3nH3YXFB%2Fs7ViG1ssjW%2BTjE%2FZf2T5kJdJ29RjzSJ3%2F9EJuVag6%2FrG7R%2BPpVd1P%2FtWhT79RXCZSvrPK7o7knfaNVxVCjQN4%2BelBjuNDoiiHVDB6%2Flxp1B08dJeX1Sx0v2Onrqk0BZZ%2BTicIMLgVEjn34HcvYL3Zs%2F0MKI0J6EFWINu5godN%2BCfntJh1f1LKmsTIb7YAZ6pSXXqQB3Vj2Zbvm%2BTyL3tuY5vFMJ65DtfUf0X71ja6Eqf95Qn2n%2BGz9%2Bfng6XXQLC2t7Dizmtz7HjbRIrDBC%2Fyx%2BvUaD8eWd1GuVnUh%2FCHBc4RIW%2FlKG13UgG9vCgvQ6%2F9qxZokQBH%2BG0LmfmeyOE5R%2FPCF2UN%2FOHmpY8gD94wycga9NtFJHWjegxlM80GbF1SFyU0NhaxdEDlcRvvBEmBloW7Q0%2B9%2Fe34jb%2FpvtykSa2toJYckeZG%2BsvKIRx%2B2ZW5sFXyuX166FQeIA7VH9c77rVKQPOwpRk8TPh2%2BAw36HQxAY6pgEpDWV4jz%2FfCTF1qCYhUfBix4oHyxBiwhXK0FmiSxO6z9gBhbH2PUT4ngkJ5YRasd5WY73UT1MLZX6%2FPrcQ7Q%2FdXrDRfZFNmbmDap7497tEJeJCiR9%2F6ZlHdNvrc5fgka68cSKHgNpKDgX1S2mvVFVb0g6KwTUl7Xt2ViXfGaUt7je7CvKSZwlr1IFCvQJ8sN5y8dPlC07Yua2iu0OvYUyoj2wqAD3l&X-Amz-Signature=6a5c9ce366334faea3831158bdd3f25235cef8727d5a064290f7e1d628e111e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4W3UGYL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAcYAwuUdYPrLSWYtjGGnAZ9WJgHWWAKKwdDFJ5BZn%2BgAiAUHl0H%2FMGAuv7YeOm43vzE3EQmtgj7%2F%2BSxHgqxyASsDCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMju1L10FauAYw5vNuKtwD1DUbaic3PLJ5lTsf%2FGCp%2BvKahja7tfWVGzzmsEqQ0mmDZLlZdfF1OyzFwg2ifqmB4DrFOfMSNbQ2PEB5yISVZ7I6kLXyFUxOubwBp%2FloHhIpoirqvmEkGohj3XgQAkkYjh0d5SoaW9m3nH3YXFB%2Fs7ViG1ssjW%2BTjE%2FZf2T5kJdJ29RjzSJ3%2F9EJuVag6%2FrG7R%2BPpVd1P%2FtWhT79RXCZSvrPK7o7knfaNVxVCjQN4%2BelBjuNDoiiHVDB6%2Flxp1B08dJeX1Sx0v2Onrqk0BZZ%2BTicIMLgVEjn34HcvYL3Zs%2F0MKI0J6EFWINu5godN%2BCfntJh1f1LKmsTIb7YAZ6pSXXqQB3Vj2Zbvm%2BTyL3tuY5vFMJ65DtfUf0X71ja6Eqf95Qn2n%2BGz9%2Bfng6XXQLC2t7Dizmtz7HjbRIrDBC%2Fyx%2BvUaD8eWd1GuVnUh%2FCHBc4RIW%2FlKG13UgG9vCgvQ6%2F9qxZokQBH%2BG0LmfmeyOE5R%2FPCF2UN%2FOHmpY8gD94wycga9NtFJHWjegxlM80GbF1SFyU0NhaxdEDlcRvvBEmBloW7Q0%2B9%2Fe34jb%2FpvtykSa2toJYckeZG%2BsvKIRx%2B2ZW5sFXyuX166FQeIA7VH9c77rVKQPOwpRk8TPh2%2BAw36HQxAY6pgEpDWV4jz%2FfCTF1qCYhUfBix4oHyxBiwhXK0FmiSxO6z9gBhbH2PUT4ngkJ5YRasd5WY73UT1MLZX6%2FPrcQ7Q%2FdXrDRfZFNmbmDap7497tEJeJCiR9%2F6ZlHdNvrc5fgka68cSKHgNpKDgX1S2mvVFVb0g6KwTUl7Xt2ViXfGaUt7je7CvKSZwlr1IFCvQJ8sN5y8dPlC07Yua2iu0OvYUyoj2wqAD3l&X-Amz-Signature=ed499a0fcb1a4326e1f4a1409a97868837783205a4d0eb3448460af13319c4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4W3UGYL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAcYAwuUdYPrLSWYtjGGnAZ9WJgHWWAKKwdDFJ5BZn%2BgAiAUHl0H%2FMGAuv7YeOm43vzE3EQmtgj7%2F%2BSxHgqxyASsDCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMju1L10FauAYw5vNuKtwD1DUbaic3PLJ5lTsf%2FGCp%2BvKahja7tfWVGzzmsEqQ0mmDZLlZdfF1OyzFwg2ifqmB4DrFOfMSNbQ2PEB5yISVZ7I6kLXyFUxOubwBp%2FloHhIpoirqvmEkGohj3XgQAkkYjh0d5SoaW9m3nH3YXFB%2Fs7ViG1ssjW%2BTjE%2FZf2T5kJdJ29RjzSJ3%2F9EJuVag6%2FrG7R%2BPpVd1P%2FtWhT79RXCZSvrPK7o7knfaNVxVCjQN4%2BelBjuNDoiiHVDB6%2Flxp1B08dJeX1Sx0v2Onrqk0BZZ%2BTicIMLgVEjn34HcvYL3Zs%2F0MKI0J6EFWINu5godN%2BCfntJh1f1LKmsTIb7YAZ6pSXXqQB3Vj2Zbvm%2BTyL3tuY5vFMJ65DtfUf0X71ja6Eqf95Qn2n%2BGz9%2Bfng6XXQLC2t7Dizmtz7HjbRIrDBC%2Fyx%2BvUaD8eWd1GuVnUh%2FCHBc4RIW%2FlKG13UgG9vCgvQ6%2F9qxZokQBH%2BG0LmfmeyOE5R%2FPCF2UN%2FOHmpY8gD94wycga9NtFJHWjegxlM80GbF1SFyU0NhaxdEDlcRvvBEmBloW7Q0%2B9%2Fe34jb%2FpvtykSa2toJYckeZG%2BsvKIRx%2B2ZW5sFXyuX166FQeIA7VH9c77rVKQPOwpRk8TPh2%2BAw36HQxAY6pgEpDWV4jz%2FfCTF1qCYhUfBix4oHyxBiwhXK0FmiSxO6z9gBhbH2PUT4ngkJ5YRasd5WY73UT1MLZX6%2FPrcQ7Q%2FdXrDRfZFNmbmDap7497tEJeJCiR9%2F6ZlHdNvrc5fgka68cSKHgNpKDgX1S2mvVFVb0g6KwTUl7Xt2ViXfGaUt7je7CvKSZwlr1IFCvQJ8sN5y8dPlC07Yua2iu0OvYUyoj2wqAD3l&X-Amz-Signature=667de7dcd3fd6f8f91259c0813e4ce17b7a064ece9eaf727d0f4f06ca463a8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4W3UGYL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAcYAwuUdYPrLSWYtjGGnAZ9WJgHWWAKKwdDFJ5BZn%2BgAiAUHl0H%2FMGAuv7YeOm43vzE3EQmtgj7%2F%2BSxHgqxyASsDCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMju1L10FauAYw5vNuKtwD1DUbaic3PLJ5lTsf%2FGCp%2BvKahja7tfWVGzzmsEqQ0mmDZLlZdfF1OyzFwg2ifqmB4DrFOfMSNbQ2PEB5yISVZ7I6kLXyFUxOubwBp%2FloHhIpoirqvmEkGohj3XgQAkkYjh0d5SoaW9m3nH3YXFB%2Fs7ViG1ssjW%2BTjE%2FZf2T5kJdJ29RjzSJ3%2F9EJuVag6%2FrG7R%2BPpVd1P%2FtWhT79RXCZSvrPK7o7knfaNVxVCjQN4%2BelBjuNDoiiHVDB6%2Flxp1B08dJeX1Sx0v2Onrqk0BZZ%2BTicIMLgVEjn34HcvYL3Zs%2F0MKI0J6EFWINu5godN%2BCfntJh1f1LKmsTIb7YAZ6pSXXqQB3Vj2Zbvm%2BTyL3tuY5vFMJ65DtfUf0X71ja6Eqf95Qn2n%2BGz9%2Bfng6XXQLC2t7Dizmtz7HjbRIrDBC%2Fyx%2BvUaD8eWd1GuVnUh%2FCHBc4RIW%2FlKG13UgG9vCgvQ6%2F9qxZokQBH%2BG0LmfmeyOE5R%2FPCF2UN%2FOHmpY8gD94wycga9NtFJHWjegxlM80GbF1SFyU0NhaxdEDlcRvvBEmBloW7Q0%2B9%2Fe34jb%2FpvtykSa2toJYckeZG%2BsvKIRx%2B2ZW5sFXyuX166FQeIA7VH9c77rVKQPOwpRk8TPh2%2BAw36HQxAY6pgEpDWV4jz%2FfCTF1qCYhUfBix4oHyxBiwhXK0FmiSxO6z9gBhbH2PUT4ngkJ5YRasd5WY73UT1MLZX6%2FPrcQ7Q%2FdXrDRfZFNmbmDap7497tEJeJCiR9%2F6ZlHdNvrc5fgka68cSKHgNpKDgX1S2mvVFVb0g6KwTUl7Xt2ViXfGaUt7je7CvKSZwlr1IFCvQJ8sN5y8dPlC07Yua2iu0OvYUyoj2wqAD3l&X-Amz-Signature=8de2e2eedfad1367d2804c91533f251c43a7c3ca0270ca69644bc1da5de7ffac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDUBY3MC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIGm4Tn55%2Bjqu56UQA0nwR8v2OE3H75TT3Ju%2F7HRShJPTAiEA6UFTbQwqboba8Tad0gCw5K5fFKca3F4dAQvbSNlHWXUqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0afRtullFZBxTEgCrcAz7GifmOE96hjHfmeCH7jcA7vNJtVgSOZZotNsbNdCMko9dekwR48hpg3Bx6hpnNpfFVops9t4GOiuWucwKTL3KCd62Uu0XBrbmdPmCYNzTQHNlTMsMgtumu6tpRVpKwMwaR4F5W9Lt4Sv%2FFB19hou9J2lOEzClMFe%2FlMHuqj4x2XtdPgE3%2BtZWHD4Lo4g%2F7iQn2WB8CAOHdLSn1SRYAbW8BTt4qG%2BAkFmSK46%2BNYisxq%2F0oXem2wbexWSoMmFbMWKxh4n4jvzNFL%2FtCvURADgAoHvvUJAIUY1qwAgHqrVeW%2FO9IMHRfhvioBo4rJkxnKFhZMikuIKBjndblGShPa%2BJ98tJMRDCyk7UYaJkmDnIHPny2wWLgzKg2yUCH71v5Hd1XakNYQzwOblDPdbaVpjkJR9Ysi7fpf2MYPIFuqo7AMpzukVIcrHei7AgK1Uaxd9yMhKDhRScAQXJtk3ymPUld52ZCT4enjrhwU9Hu3aMRy%2FCXsYP2SZzRsBlG5qqur2obHuQ%2BPH3zCsPb06qIKo3fstXdmXHM9Stb19dIdqsZbwYKBj0SopSWDUj6PE8fEYjlHV8%2FwNvDtVIbNYdRarZJj1L7NxlCP5cyF7T5kfI27L3h7gta2xQzJYnDMLei0MQGOqUBNX7i%2BCNkOa265%2BQk6cf93z%2BT98fNTHCK9KuHL8wFmadjTwK8KJYm0SGJHe7%2FfbEe3x2TEZ%2BUQrtwGyQWaUWj%2Fn9Wjn36gp5%2FVmfuGx1ELWatMxHslYhErHmu3svxhttlMJ56znImt%2BPMNnQC51DXOpNuwlkzspy1%2BIYBTgM527w6zVlmr1oxljUQ5C%2But6JvCsmIrrEBea%2B9rIMacFlmPXCWuYsr&X-Amz-Signature=27723c6769e2712af0cd58260963f4a912944c1c8f8c1c541fa91acb22b021a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DFU3JWB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDL8bnS6dGPwfQaNumrRIy72urQx%2FLgSGG51Z%2FTae%2FE3AiEA7ltKFTazrLTox8kGgqhI54Tb8jd7N39VEngoYHlv5rsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL36CW3PqJD%2BCv2BYyrcA8RMtdb6vpN4qelelq7zmdP480Ok8cGBIC%2BoAYm3v9SwDY4EaF1HN%2Br2Aq6Ca94xyFHbd7OSBqZFPPs346xSMUOP7vJaMft1bKHzX49EHcuKGtcWWC0snTFbd1sYglQwZ5Cz1hRFfvMOKGHeRfPZvJhGPaYbagkiP5lNxeXWWc4bLO1LEwxhjtMtD0c8iLA91%2BbEGMFyLnaFdwyavWjF8HGeAMdlAIODOsnM9yiqkPX%2FrcWoOSuL%2FVolz%2F6khtqj7bNxfOe43uG8eh6Qf20chAr5cp1ikDzR6%2FvnWwGETRSZ5dcwt8c%2BVqwyxC1%2BWYEwCfCx%2FL39WyCjJ4tx4PgZnJyun9Kv7sL8NL9%2FeQVwwvNjPGBIY%2F8HQ3Sr9flsgeTOpxdy%2BPZDtiqpIUdw3dPyWw6XMfZe4PBAy2tEcVdg9D4nxMLlRAtWYllqIZ9xIl3z7jmOC2%2FJiDZ4fOdK6me5Vw4qxFnSyMMngpXoCiEqKMT2sSYr8%2Bj4jCBKzxGqwZUEGUmuH%2FiGzRGMsmJEOs8fe88VNgoZGMYrSJERZOAdJKRRfKi9VwoC70j3lGWrzgJO24S616IPZov5zUY0UguMXUY4%2F27IZoOybILGVThvnFw%2FwSHu0mCFExSZd7UuMMCi0MQGOqUB1dLMEPBx0It7ePY%2FLasnnWyfTQlpCbK%2F6N3dMZWd0%2B0gGPdt8JzFZFE93BO2fPhRhvimIaDo7ITLgcBpkiQUhWa5PzY%2BB4zxAfoc63qLSpK%2FNlBy8%2FgLB5RDgYgGcoQ4bIg1zSFqNHYTEOq77rIJCfMuqIO74%2Bl8bVAX5hgW4rneHO2lMoRlfw2m2xz7QaslYbjnC4giFYRIcjG9TVrmU1hULPo0&X-Amz-Signature=05a01395072b8cb2e33570e21708d91cdbbea6abb534e4ae6c188a21a653576b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DFU3JWB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDL8bnS6dGPwfQaNumrRIy72urQx%2FLgSGG51Z%2FTae%2FE3AiEA7ltKFTazrLTox8kGgqhI54Tb8jd7N39VEngoYHlv5rsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL36CW3PqJD%2BCv2BYyrcA8RMtdb6vpN4qelelq7zmdP480Ok8cGBIC%2BoAYm3v9SwDY4EaF1HN%2Br2Aq6Ca94xyFHbd7OSBqZFPPs346xSMUOP7vJaMft1bKHzX49EHcuKGtcWWC0snTFbd1sYglQwZ5Cz1hRFfvMOKGHeRfPZvJhGPaYbagkiP5lNxeXWWc4bLO1LEwxhjtMtD0c8iLA91%2BbEGMFyLnaFdwyavWjF8HGeAMdlAIODOsnM9yiqkPX%2FrcWoOSuL%2FVolz%2F6khtqj7bNxfOe43uG8eh6Qf20chAr5cp1ikDzR6%2FvnWwGETRSZ5dcwt8c%2BVqwyxC1%2BWYEwCfCx%2FL39WyCjJ4tx4PgZnJyun9Kv7sL8NL9%2FeQVwwvNjPGBIY%2F8HQ3Sr9flsgeTOpxdy%2BPZDtiqpIUdw3dPyWw6XMfZe4PBAy2tEcVdg9D4nxMLlRAtWYllqIZ9xIl3z7jmOC2%2FJiDZ4fOdK6me5Vw4qxFnSyMMngpXoCiEqKMT2sSYr8%2Bj4jCBKzxGqwZUEGUmuH%2FiGzRGMsmJEOs8fe88VNgoZGMYrSJERZOAdJKRRfKi9VwoC70j3lGWrzgJO24S616IPZov5zUY0UguMXUY4%2F27IZoOybILGVThvnFw%2FwSHu0mCFExSZd7UuMMCi0MQGOqUB1dLMEPBx0It7ePY%2FLasnnWyfTQlpCbK%2F6N3dMZWd0%2B0gGPdt8JzFZFE93BO2fPhRhvimIaDo7ITLgcBpkiQUhWa5PzY%2BB4zxAfoc63qLSpK%2FNlBy8%2FgLB5RDgYgGcoQ4bIg1zSFqNHYTEOq77rIJCfMuqIO74%2Bl8bVAX5hgW4rneHO2lMoRlfw2m2xz7QaslYbjnC4giFYRIcjG9TVrmU1hULPo0&X-Amz-Signature=098f9c215e029958db8a8bff1928003021715e88846f8566c55f587aa6f4b039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DFU3JWB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDL8bnS6dGPwfQaNumrRIy72urQx%2FLgSGG51Z%2FTae%2FE3AiEA7ltKFTazrLTox8kGgqhI54Tb8jd7N39VEngoYHlv5rsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL36CW3PqJD%2BCv2BYyrcA8RMtdb6vpN4qelelq7zmdP480Ok8cGBIC%2BoAYm3v9SwDY4EaF1HN%2Br2Aq6Ca94xyFHbd7OSBqZFPPs346xSMUOP7vJaMft1bKHzX49EHcuKGtcWWC0snTFbd1sYglQwZ5Cz1hRFfvMOKGHeRfPZvJhGPaYbagkiP5lNxeXWWc4bLO1LEwxhjtMtD0c8iLA91%2BbEGMFyLnaFdwyavWjF8HGeAMdlAIODOsnM9yiqkPX%2FrcWoOSuL%2FVolz%2F6khtqj7bNxfOe43uG8eh6Qf20chAr5cp1ikDzR6%2FvnWwGETRSZ5dcwt8c%2BVqwyxC1%2BWYEwCfCx%2FL39WyCjJ4tx4PgZnJyun9Kv7sL8NL9%2FeQVwwvNjPGBIY%2F8HQ3Sr9flsgeTOpxdy%2BPZDtiqpIUdw3dPyWw6XMfZe4PBAy2tEcVdg9D4nxMLlRAtWYllqIZ9xIl3z7jmOC2%2FJiDZ4fOdK6me5Vw4qxFnSyMMngpXoCiEqKMT2sSYr8%2Bj4jCBKzxGqwZUEGUmuH%2FiGzRGMsmJEOs8fe88VNgoZGMYrSJERZOAdJKRRfKi9VwoC70j3lGWrzgJO24S616IPZov5zUY0UguMXUY4%2F27IZoOybILGVThvnFw%2FwSHu0mCFExSZd7UuMMCi0MQGOqUB1dLMEPBx0It7ePY%2FLasnnWyfTQlpCbK%2F6N3dMZWd0%2B0gGPdt8JzFZFE93BO2fPhRhvimIaDo7ITLgcBpkiQUhWa5PzY%2BB4zxAfoc63qLSpK%2FNlBy8%2FgLB5RDgYgGcoQ4bIg1zSFqNHYTEOq77rIJCfMuqIO74%2Bl8bVAX5hgW4rneHO2lMoRlfw2m2xz7QaslYbjnC4giFYRIcjG9TVrmU1hULPo0&X-Amz-Signature=6921949548fd583e4d273576ccb8895d1c5a2deabb634f8337d27cd9540c5c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DFU3JWB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDL8bnS6dGPwfQaNumrRIy72urQx%2FLgSGG51Z%2FTae%2FE3AiEA7ltKFTazrLTox8kGgqhI54Tb8jd7N39VEngoYHlv5rsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL36CW3PqJD%2BCv2BYyrcA8RMtdb6vpN4qelelq7zmdP480Ok8cGBIC%2BoAYm3v9SwDY4EaF1HN%2Br2Aq6Ca94xyFHbd7OSBqZFPPs346xSMUOP7vJaMft1bKHzX49EHcuKGtcWWC0snTFbd1sYglQwZ5Cz1hRFfvMOKGHeRfPZvJhGPaYbagkiP5lNxeXWWc4bLO1LEwxhjtMtD0c8iLA91%2BbEGMFyLnaFdwyavWjF8HGeAMdlAIODOsnM9yiqkPX%2FrcWoOSuL%2FVolz%2F6khtqj7bNxfOe43uG8eh6Qf20chAr5cp1ikDzR6%2FvnWwGETRSZ5dcwt8c%2BVqwyxC1%2BWYEwCfCx%2FL39WyCjJ4tx4PgZnJyun9Kv7sL8NL9%2FeQVwwvNjPGBIY%2F8HQ3Sr9flsgeTOpxdy%2BPZDtiqpIUdw3dPyWw6XMfZe4PBAy2tEcVdg9D4nxMLlRAtWYllqIZ9xIl3z7jmOC2%2FJiDZ4fOdK6me5Vw4qxFnSyMMngpXoCiEqKMT2sSYr8%2Bj4jCBKzxGqwZUEGUmuH%2FiGzRGMsmJEOs8fe88VNgoZGMYrSJERZOAdJKRRfKi9VwoC70j3lGWrzgJO24S616IPZov5zUY0UguMXUY4%2F27IZoOybILGVThvnFw%2FwSHu0mCFExSZd7UuMMCi0MQGOqUB1dLMEPBx0It7ePY%2FLasnnWyfTQlpCbK%2F6N3dMZWd0%2B0gGPdt8JzFZFE93BO2fPhRhvimIaDo7ITLgcBpkiQUhWa5PzY%2BB4zxAfoc63qLSpK%2FNlBy8%2FgLB5RDgYgGcoQ4bIg1zSFqNHYTEOq77rIJCfMuqIO74%2Bl8bVAX5hgW4rneHO2lMoRlfw2m2xz7QaslYbjnC4giFYRIcjG9TVrmU1hULPo0&X-Amz-Signature=fb6d4f7b17c8ad2f8ec4e9a98b6b339c8c81061dbd8f073ce859b8d0101540c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DFU3JWB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDL8bnS6dGPwfQaNumrRIy72urQx%2FLgSGG51Z%2FTae%2FE3AiEA7ltKFTazrLTox8kGgqhI54Tb8jd7N39VEngoYHlv5rsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL36CW3PqJD%2BCv2BYyrcA8RMtdb6vpN4qelelq7zmdP480Ok8cGBIC%2BoAYm3v9SwDY4EaF1HN%2Br2Aq6Ca94xyFHbd7OSBqZFPPs346xSMUOP7vJaMft1bKHzX49EHcuKGtcWWC0snTFbd1sYglQwZ5Cz1hRFfvMOKGHeRfPZvJhGPaYbagkiP5lNxeXWWc4bLO1LEwxhjtMtD0c8iLA91%2BbEGMFyLnaFdwyavWjF8HGeAMdlAIODOsnM9yiqkPX%2FrcWoOSuL%2FVolz%2F6khtqj7bNxfOe43uG8eh6Qf20chAr5cp1ikDzR6%2FvnWwGETRSZ5dcwt8c%2BVqwyxC1%2BWYEwCfCx%2FL39WyCjJ4tx4PgZnJyun9Kv7sL8NL9%2FeQVwwvNjPGBIY%2F8HQ3Sr9flsgeTOpxdy%2BPZDtiqpIUdw3dPyWw6XMfZe4PBAy2tEcVdg9D4nxMLlRAtWYllqIZ9xIl3z7jmOC2%2FJiDZ4fOdK6me5Vw4qxFnSyMMngpXoCiEqKMT2sSYr8%2Bj4jCBKzxGqwZUEGUmuH%2FiGzRGMsmJEOs8fe88VNgoZGMYrSJERZOAdJKRRfKi9VwoC70j3lGWrzgJO24S616IPZov5zUY0UguMXUY4%2F27IZoOybILGVThvnFw%2FwSHu0mCFExSZd7UuMMCi0MQGOqUB1dLMEPBx0It7ePY%2FLasnnWyfTQlpCbK%2F6N3dMZWd0%2B0gGPdt8JzFZFE93BO2fPhRhvimIaDo7ITLgcBpkiQUhWa5PzY%2BB4zxAfoc63qLSpK%2FNlBy8%2FgLB5RDgYgGcoQ4bIg1zSFqNHYTEOq77rIJCfMuqIO74%2Bl8bVAX5hgW4rneHO2lMoRlfw2m2xz7QaslYbjnC4giFYRIcjG9TVrmU1hULPo0&X-Amz-Signature=8dfc488c58910455d56394d678e42cc34e11f0e1a7a3fb9d13551b12adff1b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DFU3JWB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDL8bnS6dGPwfQaNumrRIy72urQx%2FLgSGG51Z%2FTae%2FE3AiEA7ltKFTazrLTox8kGgqhI54Tb8jd7N39VEngoYHlv5rsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL36CW3PqJD%2BCv2BYyrcA8RMtdb6vpN4qelelq7zmdP480Ok8cGBIC%2BoAYm3v9SwDY4EaF1HN%2Br2Aq6Ca94xyFHbd7OSBqZFPPs346xSMUOP7vJaMft1bKHzX49EHcuKGtcWWC0snTFbd1sYglQwZ5Cz1hRFfvMOKGHeRfPZvJhGPaYbagkiP5lNxeXWWc4bLO1LEwxhjtMtD0c8iLA91%2BbEGMFyLnaFdwyavWjF8HGeAMdlAIODOsnM9yiqkPX%2FrcWoOSuL%2FVolz%2F6khtqj7bNxfOe43uG8eh6Qf20chAr5cp1ikDzR6%2FvnWwGETRSZ5dcwt8c%2BVqwyxC1%2BWYEwCfCx%2FL39WyCjJ4tx4PgZnJyun9Kv7sL8NL9%2FeQVwwvNjPGBIY%2F8HQ3Sr9flsgeTOpxdy%2BPZDtiqpIUdw3dPyWw6XMfZe4PBAy2tEcVdg9D4nxMLlRAtWYllqIZ9xIl3z7jmOC2%2FJiDZ4fOdK6me5Vw4qxFnSyMMngpXoCiEqKMT2sSYr8%2Bj4jCBKzxGqwZUEGUmuH%2FiGzRGMsmJEOs8fe88VNgoZGMYrSJERZOAdJKRRfKi9VwoC70j3lGWrzgJO24S616IPZov5zUY0UguMXUY4%2F27IZoOybILGVThvnFw%2FwSHu0mCFExSZd7UuMMCi0MQGOqUB1dLMEPBx0It7ePY%2FLasnnWyfTQlpCbK%2F6N3dMZWd0%2B0gGPdt8JzFZFE93BO2fPhRhvimIaDo7ITLgcBpkiQUhWa5PzY%2BB4zxAfoc63qLSpK%2FNlBy8%2FgLB5RDgYgGcoQ4bIg1zSFqNHYTEOq77rIJCfMuqIO74%2Bl8bVAX5hgW4rneHO2lMoRlfw2m2xz7QaslYbjnC4giFYRIcjG9TVrmU1hULPo0&X-Amz-Signature=a655abd17040e302ad939e3a1f519932cd15c9e094fe658140360115cd092d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DFU3JWB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDL8bnS6dGPwfQaNumrRIy72urQx%2FLgSGG51Z%2FTae%2FE3AiEA7ltKFTazrLTox8kGgqhI54Tb8jd7N39VEngoYHlv5rsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL36CW3PqJD%2BCv2BYyrcA8RMtdb6vpN4qelelq7zmdP480Ok8cGBIC%2BoAYm3v9SwDY4EaF1HN%2Br2Aq6Ca94xyFHbd7OSBqZFPPs346xSMUOP7vJaMft1bKHzX49EHcuKGtcWWC0snTFbd1sYglQwZ5Cz1hRFfvMOKGHeRfPZvJhGPaYbagkiP5lNxeXWWc4bLO1LEwxhjtMtD0c8iLA91%2BbEGMFyLnaFdwyavWjF8HGeAMdlAIODOsnM9yiqkPX%2FrcWoOSuL%2FVolz%2F6khtqj7bNxfOe43uG8eh6Qf20chAr5cp1ikDzR6%2FvnWwGETRSZ5dcwt8c%2BVqwyxC1%2BWYEwCfCx%2FL39WyCjJ4tx4PgZnJyun9Kv7sL8NL9%2FeQVwwvNjPGBIY%2F8HQ3Sr9flsgeTOpxdy%2BPZDtiqpIUdw3dPyWw6XMfZe4PBAy2tEcVdg9D4nxMLlRAtWYllqIZ9xIl3z7jmOC2%2FJiDZ4fOdK6me5Vw4qxFnSyMMngpXoCiEqKMT2sSYr8%2Bj4jCBKzxGqwZUEGUmuH%2FiGzRGMsmJEOs8fe88VNgoZGMYrSJERZOAdJKRRfKi9VwoC70j3lGWrzgJO24S616IPZov5zUY0UguMXUY4%2F27IZoOybILGVThvnFw%2FwSHu0mCFExSZd7UuMMCi0MQGOqUB1dLMEPBx0It7ePY%2FLasnnWyfTQlpCbK%2F6N3dMZWd0%2B0gGPdt8JzFZFE93BO2fPhRhvimIaDo7ITLgcBpkiQUhWa5PzY%2BB4zxAfoc63qLSpK%2FNlBy8%2FgLB5RDgYgGcoQ4bIg1zSFqNHYTEOq77rIJCfMuqIO74%2Bl8bVAX5hgW4rneHO2lMoRlfw2m2xz7QaslYbjnC4giFYRIcjG9TVrmU1hULPo0&X-Amz-Signature=8dc0fd029f2364524b1b852c8f83147621584ece34b0253574201c5474468170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DFU3JWB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDL8bnS6dGPwfQaNumrRIy72urQx%2FLgSGG51Z%2FTae%2FE3AiEA7ltKFTazrLTox8kGgqhI54Tb8jd7N39VEngoYHlv5rsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL36CW3PqJD%2BCv2BYyrcA8RMtdb6vpN4qelelq7zmdP480Ok8cGBIC%2BoAYm3v9SwDY4EaF1HN%2Br2Aq6Ca94xyFHbd7OSBqZFPPs346xSMUOP7vJaMft1bKHzX49EHcuKGtcWWC0snTFbd1sYglQwZ5Cz1hRFfvMOKGHeRfPZvJhGPaYbagkiP5lNxeXWWc4bLO1LEwxhjtMtD0c8iLA91%2BbEGMFyLnaFdwyavWjF8HGeAMdlAIODOsnM9yiqkPX%2FrcWoOSuL%2FVolz%2F6khtqj7bNxfOe43uG8eh6Qf20chAr5cp1ikDzR6%2FvnWwGETRSZ5dcwt8c%2BVqwyxC1%2BWYEwCfCx%2FL39WyCjJ4tx4PgZnJyun9Kv7sL8NL9%2FeQVwwvNjPGBIY%2F8HQ3Sr9flsgeTOpxdy%2BPZDtiqpIUdw3dPyWw6XMfZe4PBAy2tEcVdg9D4nxMLlRAtWYllqIZ9xIl3z7jmOC2%2FJiDZ4fOdK6me5Vw4qxFnSyMMngpXoCiEqKMT2sSYr8%2Bj4jCBKzxGqwZUEGUmuH%2FiGzRGMsmJEOs8fe88VNgoZGMYrSJERZOAdJKRRfKi9VwoC70j3lGWrzgJO24S616IPZov5zUY0UguMXUY4%2F27IZoOybILGVThvnFw%2FwSHu0mCFExSZd7UuMMCi0MQGOqUB1dLMEPBx0It7ePY%2FLasnnWyfTQlpCbK%2F6N3dMZWd0%2B0gGPdt8JzFZFE93BO2fPhRhvimIaDo7ITLgcBpkiQUhWa5PzY%2BB4zxAfoc63qLSpK%2FNlBy8%2FgLB5RDgYgGcoQ4bIg1zSFqNHYTEOq77rIJCfMuqIO74%2Bl8bVAX5hgW4rneHO2lMoRlfw2m2xz7QaslYbjnC4giFYRIcjG9TVrmU1hULPo0&X-Amz-Signature=3a38e67ce18cfad285fb01d18bc400a9370f718290ecb49f51845cac378689b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DFU3JWB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDL8bnS6dGPwfQaNumrRIy72urQx%2FLgSGG51Z%2FTae%2FE3AiEA7ltKFTazrLTox8kGgqhI54Tb8jd7N39VEngoYHlv5rsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL36CW3PqJD%2BCv2BYyrcA8RMtdb6vpN4qelelq7zmdP480Ok8cGBIC%2BoAYm3v9SwDY4EaF1HN%2Br2Aq6Ca94xyFHbd7OSBqZFPPs346xSMUOP7vJaMft1bKHzX49EHcuKGtcWWC0snTFbd1sYglQwZ5Cz1hRFfvMOKGHeRfPZvJhGPaYbagkiP5lNxeXWWc4bLO1LEwxhjtMtD0c8iLA91%2BbEGMFyLnaFdwyavWjF8HGeAMdlAIODOsnM9yiqkPX%2FrcWoOSuL%2FVolz%2F6khtqj7bNxfOe43uG8eh6Qf20chAr5cp1ikDzR6%2FvnWwGETRSZ5dcwt8c%2BVqwyxC1%2BWYEwCfCx%2FL39WyCjJ4tx4PgZnJyun9Kv7sL8NL9%2FeQVwwvNjPGBIY%2F8HQ3Sr9flsgeTOpxdy%2BPZDtiqpIUdw3dPyWw6XMfZe4PBAy2tEcVdg9D4nxMLlRAtWYllqIZ9xIl3z7jmOC2%2FJiDZ4fOdK6me5Vw4qxFnSyMMngpXoCiEqKMT2sSYr8%2Bj4jCBKzxGqwZUEGUmuH%2FiGzRGMsmJEOs8fe88VNgoZGMYrSJERZOAdJKRRfKi9VwoC70j3lGWrzgJO24S616IPZov5zUY0UguMXUY4%2F27IZoOybILGVThvnFw%2FwSHu0mCFExSZd7UuMMCi0MQGOqUB1dLMEPBx0It7ePY%2FLasnnWyfTQlpCbK%2F6N3dMZWd0%2B0gGPdt8JzFZFE93BO2fPhRhvimIaDo7ITLgcBpkiQUhWa5PzY%2BB4zxAfoc63qLSpK%2FNlBy8%2FgLB5RDgYgGcoQ4bIg1zSFqNHYTEOq77rIJCfMuqIO74%2Bl8bVAX5hgW4rneHO2lMoRlfw2m2xz7QaslYbjnC4giFYRIcjG9TVrmU1hULPo0&X-Amz-Signature=0e5d007e19cce578750712516b205815b13edf6b7771f845057dcb095d769774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
