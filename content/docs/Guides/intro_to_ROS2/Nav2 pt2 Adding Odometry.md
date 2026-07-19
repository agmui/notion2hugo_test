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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STRMSULI%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxwKdpFxNaSU2W%2F6d6Z5w6Nm0sq27zXlO8r9NOIrcKfwIgIbzgApw5nbgn8DWxEeLFsORn1gMdMfDmOW756W6EkRwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcL5TuCiwMhuEq2mircA4RWwVupag4eLwfPtKS0opa%2BLZqDJ9APvw445q8eYkY%2Bi7VuNhJ4gF6jLHK45rUVg00jYTj94tD3x1pl2EuJO1S0TIF4Vqh5WExM6zyDL8vxvKUKyLsxxUvIknaGFiBD9XQxltFdFUskkjsIzwO%2F6mA%2BIVTpwHxwgICnj1cLHTrJbXEbnlt6kd4UU0eF0%2FxIHJ%2B6xKqyJ%2FMZtWBXvXa5pRzrP175hy3gEmyn7HBKJaIk5klEX0J6ZrcLbRKEDr9VlhLSCHGO2QppW2tdVcCHmgbQNBb6sc8Pvw1niPJCUMYgI%2BfYqCZXZVvQ3cVTBaYxW%2FncSWBN8IwtB5DEauAW7uN%2FYq%2F%2Fy0P%2BvgLo%2Fa5y0Y%2F0HEcwYBqfWAk18qNmq0DrRnD25R%2Bde6UI%2BCbMTyjhvao%2BbQMP7%2BmymIzhVW6tInkmAURkEV2cDeZyJjRplg9ej29YiINvKMuhWr52CRUzMVd1nMsK88pJ5bNJte3gb87Ndk1BGq23idSGaOrKYJaYDEnuNrWzbx%2FwLfrwz4wB%2BJBQR6LWEjEDAqauj6C5C%2Bj4JoIor6gACbpDa2AVGCYXdl%2Fs%2FAviL1R9c9DgTSq%2Brex6gXfISuAMC1wVsyOZ5ilNeupl9os4FnQHhiyXMIPW8NIGOqUBoyv0NerVuZoQgAuSnVqHp8bZLfGovMJJbcgHfpRCKsDgCmYhB0mGo9WQ7GqgPaGmXyfAT1Avs5cVv35ls3ncCmt0jweB4Hn1v6Pn5%2FRm81xojut5XoPA4oxOtOg9aZoLl5qhQaXBtDVdpKFGgBptsZoECBxhT5bCX96TkVpyY5OpLAn2ANjULu%2BsSOtye1dugvSGFdRqCVlXVpFDCBHxurWAfAvW&X-Amz-Signature=d989ab8a01a59326400feff9a8e3f8e1c11a37ed7980e720180f3aa6e7ffe89f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STRMSULI%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxwKdpFxNaSU2W%2F6d6Z5w6Nm0sq27zXlO8r9NOIrcKfwIgIbzgApw5nbgn8DWxEeLFsORn1gMdMfDmOW756W6EkRwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcL5TuCiwMhuEq2mircA4RWwVupag4eLwfPtKS0opa%2BLZqDJ9APvw445q8eYkY%2Bi7VuNhJ4gF6jLHK45rUVg00jYTj94tD3x1pl2EuJO1S0TIF4Vqh5WExM6zyDL8vxvKUKyLsxxUvIknaGFiBD9XQxltFdFUskkjsIzwO%2F6mA%2BIVTpwHxwgICnj1cLHTrJbXEbnlt6kd4UU0eF0%2FxIHJ%2B6xKqyJ%2FMZtWBXvXa5pRzrP175hy3gEmyn7HBKJaIk5klEX0J6ZrcLbRKEDr9VlhLSCHGO2QppW2tdVcCHmgbQNBb6sc8Pvw1niPJCUMYgI%2BfYqCZXZVvQ3cVTBaYxW%2FncSWBN8IwtB5DEauAW7uN%2FYq%2F%2Fy0P%2BvgLo%2Fa5y0Y%2F0HEcwYBqfWAk18qNmq0DrRnD25R%2Bde6UI%2BCbMTyjhvao%2BbQMP7%2BmymIzhVW6tInkmAURkEV2cDeZyJjRplg9ej29YiINvKMuhWr52CRUzMVd1nMsK88pJ5bNJte3gb87Ndk1BGq23idSGaOrKYJaYDEnuNrWzbx%2FwLfrwz4wB%2BJBQR6LWEjEDAqauj6C5C%2Bj4JoIor6gACbpDa2AVGCYXdl%2Fs%2FAviL1R9c9DgTSq%2Brex6gXfISuAMC1wVsyOZ5ilNeupl9os4FnQHhiyXMIPW8NIGOqUBoyv0NerVuZoQgAuSnVqHp8bZLfGovMJJbcgHfpRCKsDgCmYhB0mGo9WQ7GqgPaGmXyfAT1Avs5cVv35ls3ncCmt0jweB4Hn1v6Pn5%2FRm81xojut5XoPA4oxOtOg9aZoLl5qhQaXBtDVdpKFGgBptsZoECBxhT5bCX96TkVpyY5OpLAn2ANjULu%2BsSOtye1dugvSGFdRqCVlXVpFDCBHxurWAfAvW&X-Amz-Signature=b8c603fc0472b88501f7694ac10f9d361d9666fcb5c09d15bb3541fa299d9a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STRMSULI%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxwKdpFxNaSU2W%2F6d6Z5w6Nm0sq27zXlO8r9NOIrcKfwIgIbzgApw5nbgn8DWxEeLFsORn1gMdMfDmOW756W6EkRwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcL5TuCiwMhuEq2mircA4RWwVupag4eLwfPtKS0opa%2BLZqDJ9APvw445q8eYkY%2Bi7VuNhJ4gF6jLHK45rUVg00jYTj94tD3x1pl2EuJO1S0TIF4Vqh5WExM6zyDL8vxvKUKyLsxxUvIknaGFiBD9XQxltFdFUskkjsIzwO%2F6mA%2BIVTpwHxwgICnj1cLHTrJbXEbnlt6kd4UU0eF0%2FxIHJ%2B6xKqyJ%2FMZtWBXvXa5pRzrP175hy3gEmyn7HBKJaIk5klEX0J6ZrcLbRKEDr9VlhLSCHGO2QppW2tdVcCHmgbQNBb6sc8Pvw1niPJCUMYgI%2BfYqCZXZVvQ3cVTBaYxW%2FncSWBN8IwtB5DEauAW7uN%2FYq%2F%2Fy0P%2BvgLo%2Fa5y0Y%2F0HEcwYBqfWAk18qNmq0DrRnD25R%2Bde6UI%2BCbMTyjhvao%2BbQMP7%2BmymIzhVW6tInkmAURkEV2cDeZyJjRplg9ej29YiINvKMuhWr52CRUzMVd1nMsK88pJ5bNJte3gb87Ndk1BGq23idSGaOrKYJaYDEnuNrWzbx%2FwLfrwz4wB%2BJBQR6LWEjEDAqauj6C5C%2Bj4JoIor6gACbpDa2AVGCYXdl%2Fs%2FAviL1R9c9DgTSq%2Brex6gXfISuAMC1wVsyOZ5ilNeupl9os4FnQHhiyXMIPW8NIGOqUBoyv0NerVuZoQgAuSnVqHp8bZLfGovMJJbcgHfpRCKsDgCmYhB0mGo9WQ7GqgPaGmXyfAT1Avs5cVv35ls3ncCmt0jweB4Hn1v6Pn5%2FRm81xojut5XoPA4oxOtOg9aZoLl5qhQaXBtDVdpKFGgBptsZoECBxhT5bCX96TkVpyY5OpLAn2ANjULu%2BsSOtye1dugvSGFdRqCVlXVpFDCBHxurWAfAvW&X-Amz-Signature=50237048dff5dff3323ac4d1d13db1912158b42a867022a3c1daf006c284907b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STRMSULI%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxwKdpFxNaSU2W%2F6d6Z5w6Nm0sq27zXlO8r9NOIrcKfwIgIbzgApw5nbgn8DWxEeLFsORn1gMdMfDmOW756W6EkRwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcL5TuCiwMhuEq2mircA4RWwVupag4eLwfPtKS0opa%2BLZqDJ9APvw445q8eYkY%2Bi7VuNhJ4gF6jLHK45rUVg00jYTj94tD3x1pl2EuJO1S0TIF4Vqh5WExM6zyDL8vxvKUKyLsxxUvIknaGFiBD9XQxltFdFUskkjsIzwO%2F6mA%2BIVTpwHxwgICnj1cLHTrJbXEbnlt6kd4UU0eF0%2FxIHJ%2B6xKqyJ%2FMZtWBXvXa5pRzrP175hy3gEmyn7HBKJaIk5klEX0J6ZrcLbRKEDr9VlhLSCHGO2QppW2tdVcCHmgbQNBb6sc8Pvw1niPJCUMYgI%2BfYqCZXZVvQ3cVTBaYxW%2FncSWBN8IwtB5DEauAW7uN%2FYq%2F%2Fy0P%2BvgLo%2Fa5y0Y%2F0HEcwYBqfWAk18qNmq0DrRnD25R%2Bde6UI%2BCbMTyjhvao%2BbQMP7%2BmymIzhVW6tInkmAURkEV2cDeZyJjRplg9ej29YiINvKMuhWr52CRUzMVd1nMsK88pJ5bNJte3gb87Ndk1BGq23idSGaOrKYJaYDEnuNrWzbx%2FwLfrwz4wB%2BJBQR6LWEjEDAqauj6C5C%2Bj4JoIor6gACbpDa2AVGCYXdl%2Fs%2FAviL1R9c9DgTSq%2Brex6gXfISuAMC1wVsyOZ5ilNeupl9os4FnQHhiyXMIPW8NIGOqUBoyv0NerVuZoQgAuSnVqHp8bZLfGovMJJbcgHfpRCKsDgCmYhB0mGo9WQ7GqgPaGmXyfAT1Avs5cVv35ls3ncCmt0jweB4Hn1v6Pn5%2FRm81xojut5XoPA4oxOtOg9aZoLl5qhQaXBtDVdpKFGgBptsZoECBxhT5bCX96TkVpyY5OpLAn2ANjULu%2BsSOtye1dugvSGFdRqCVlXVpFDCBHxurWAfAvW&X-Amz-Signature=c1a04fa54ac091527f0a2cb87dcbaa02696b3d319a14e7ebc3c29a575e4fcc0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STRMSULI%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxwKdpFxNaSU2W%2F6d6Z5w6Nm0sq27zXlO8r9NOIrcKfwIgIbzgApw5nbgn8DWxEeLFsORn1gMdMfDmOW756W6EkRwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcL5TuCiwMhuEq2mircA4RWwVupag4eLwfPtKS0opa%2BLZqDJ9APvw445q8eYkY%2Bi7VuNhJ4gF6jLHK45rUVg00jYTj94tD3x1pl2EuJO1S0TIF4Vqh5WExM6zyDL8vxvKUKyLsxxUvIknaGFiBD9XQxltFdFUskkjsIzwO%2F6mA%2BIVTpwHxwgICnj1cLHTrJbXEbnlt6kd4UU0eF0%2FxIHJ%2B6xKqyJ%2FMZtWBXvXa5pRzrP175hy3gEmyn7HBKJaIk5klEX0J6ZrcLbRKEDr9VlhLSCHGO2QppW2tdVcCHmgbQNBb6sc8Pvw1niPJCUMYgI%2BfYqCZXZVvQ3cVTBaYxW%2FncSWBN8IwtB5DEauAW7uN%2FYq%2F%2Fy0P%2BvgLo%2Fa5y0Y%2F0HEcwYBqfWAk18qNmq0DrRnD25R%2Bde6UI%2BCbMTyjhvao%2BbQMP7%2BmymIzhVW6tInkmAURkEV2cDeZyJjRplg9ej29YiINvKMuhWr52CRUzMVd1nMsK88pJ5bNJte3gb87Ndk1BGq23idSGaOrKYJaYDEnuNrWzbx%2FwLfrwz4wB%2BJBQR6LWEjEDAqauj6C5C%2Bj4JoIor6gACbpDa2AVGCYXdl%2Fs%2FAviL1R9c9DgTSq%2Brex6gXfISuAMC1wVsyOZ5ilNeupl9os4FnQHhiyXMIPW8NIGOqUBoyv0NerVuZoQgAuSnVqHp8bZLfGovMJJbcgHfpRCKsDgCmYhB0mGo9WQ7GqgPaGmXyfAT1Avs5cVv35ls3ncCmt0jweB4Hn1v6Pn5%2FRm81xojut5XoPA4oxOtOg9aZoLl5qhQaXBtDVdpKFGgBptsZoECBxhT5bCX96TkVpyY5OpLAn2ANjULu%2BsSOtye1dugvSGFdRqCVlXVpFDCBHxurWAfAvW&X-Amz-Signature=8e6c99ce4ac1eb0650b682740457a5c39c58d1b5f7fa93902cb23709caaec1cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STRMSULI%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxwKdpFxNaSU2W%2F6d6Z5w6Nm0sq27zXlO8r9NOIrcKfwIgIbzgApw5nbgn8DWxEeLFsORn1gMdMfDmOW756W6EkRwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcL5TuCiwMhuEq2mircA4RWwVupag4eLwfPtKS0opa%2BLZqDJ9APvw445q8eYkY%2Bi7VuNhJ4gF6jLHK45rUVg00jYTj94tD3x1pl2EuJO1S0TIF4Vqh5WExM6zyDL8vxvKUKyLsxxUvIknaGFiBD9XQxltFdFUskkjsIzwO%2F6mA%2BIVTpwHxwgICnj1cLHTrJbXEbnlt6kd4UU0eF0%2FxIHJ%2B6xKqyJ%2FMZtWBXvXa5pRzrP175hy3gEmyn7HBKJaIk5klEX0J6ZrcLbRKEDr9VlhLSCHGO2QppW2tdVcCHmgbQNBb6sc8Pvw1niPJCUMYgI%2BfYqCZXZVvQ3cVTBaYxW%2FncSWBN8IwtB5DEauAW7uN%2FYq%2F%2Fy0P%2BvgLo%2Fa5y0Y%2F0HEcwYBqfWAk18qNmq0DrRnD25R%2Bde6UI%2BCbMTyjhvao%2BbQMP7%2BmymIzhVW6tInkmAURkEV2cDeZyJjRplg9ej29YiINvKMuhWr52CRUzMVd1nMsK88pJ5bNJte3gb87Ndk1BGq23idSGaOrKYJaYDEnuNrWzbx%2FwLfrwz4wB%2BJBQR6LWEjEDAqauj6C5C%2Bj4JoIor6gACbpDa2AVGCYXdl%2Fs%2FAviL1R9c9DgTSq%2Brex6gXfISuAMC1wVsyOZ5ilNeupl9os4FnQHhiyXMIPW8NIGOqUBoyv0NerVuZoQgAuSnVqHp8bZLfGovMJJbcgHfpRCKsDgCmYhB0mGo9WQ7GqgPaGmXyfAT1Avs5cVv35ls3ncCmt0jweB4Hn1v6Pn5%2FRm81xojut5XoPA4oxOtOg9aZoLl5qhQaXBtDVdpKFGgBptsZoECBxhT5bCX96TkVpyY5OpLAn2ANjULu%2BsSOtye1dugvSGFdRqCVlXVpFDCBHxurWAfAvW&X-Amz-Signature=5718e67b2cdace7d22f902c3ed545fc249d59365a6d58249120b32b8517d3e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STRMSULI%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxwKdpFxNaSU2W%2F6d6Z5w6Nm0sq27zXlO8r9NOIrcKfwIgIbzgApw5nbgn8DWxEeLFsORn1gMdMfDmOW756W6EkRwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcL5TuCiwMhuEq2mircA4RWwVupag4eLwfPtKS0opa%2BLZqDJ9APvw445q8eYkY%2Bi7VuNhJ4gF6jLHK45rUVg00jYTj94tD3x1pl2EuJO1S0TIF4Vqh5WExM6zyDL8vxvKUKyLsxxUvIknaGFiBD9XQxltFdFUskkjsIzwO%2F6mA%2BIVTpwHxwgICnj1cLHTrJbXEbnlt6kd4UU0eF0%2FxIHJ%2B6xKqyJ%2FMZtWBXvXa5pRzrP175hy3gEmyn7HBKJaIk5klEX0J6ZrcLbRKEDr9VlhLSCHGO2QppW2tdVcCHmgbQNBb6sc8Pvw1niPJCUMYgI%2BfYqCZXZVvQ3cVTBaYxW%2FncSWBN8IwtB5DEauAW7uN%2FYq%2F%2Fy0P%2BvgLo%2Fa5y0Y%2F0HEcwYBqfWAk18qNmq0DrRnD25R%2Bde6UI%2BCbMTyjhvao%2BbQMP7%2BmymIzhVW6tInkmAURkEV2cDeZyJjRplg9ej29YiINvKMuhWr52CRUzMVd1nMsK88pJ5bNJte3gb87Ndk1BGq23idSGaOrKYJaYDEnuNrWzbx%2FwLfrwz4wB%2BJBQR6LWEjEDAqauj6C5C%2Bj4JoIor6gACbpDa2AVGCYXdl%2Fs%2FAviL1R9c9DgTSq%2Brex6gXfISuAMC1wVsyOZ5ilNeupl9os4FnQHhiyXMIPW8NIGOqUBoyv0NerVuZoQgAuSnVqHp8bZLfGovMJJbcgHfpRCKsDgCmYhB0mGo9WQ7GqgPaGmXyfAT1Avs5cVv35ls3ncCmt0jweB4Hn1v6Pn5%2FRm81xojut5XoPA4oxOtOg9aZoLl5qhQaXBtDVdpKFGgBptsZoECBxhT5bCX96TkVpyY5OpLAn2ANjULu%2BsSOtye1dugvSGFdRqCVlXVpFDCBHxurWAfAvW&X-Amz-Signature=5299c5e22197555c03f5fcf3d856b5d41bc9704840a41f45c4ac38aca3e4f21b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STRMSULI%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxwKdpFxNaSU2W%2F6d6Z5w6Nm0sq27zXlO8r9NOIrcKfwIgIbzgApw5nbgn8DWxEeLFsORn1gMdMfDmOW756W6EkRwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcL5TuCiwMhuEq2mircA4RWwVupag4eLwfPtKS0opa%2BLZqDJ9APvw445q8eYkY%2Bi7VuNhJ4gF6jLHK45rUVg00jYTj94tD3x1pl2EuJO1S0TIF4Vqh5WExM6zyDL8vxvKUKyLsxxUvIknaGFiBD9XQxltFdFUskkjsIzwO%2F6mA%2BIVTpwHxwgICnj1cLHTrJbXEbnlt6kd4UU0eF0%2FxIHJ%2B6xKqyJ%2FMZtWBXvXa5pRzrP175hy3gEmyn7HBKJaIk5klEX0J6ZrcLbRKEDr9VlhLSCHGO2QppW2tdVcCHmgbQNBb6sc8Pvw1niPJCUMYgI%2BfYqCZXZVvQ3cVTBaYxW%2FncSWBN8IwtB5DEauAW7uN%2FYq%2F%2Fy0P%2BvgLo%2Fa5y0Y%2F0HEcwYBqfWAk18qNmq0DrRnD25R%2Bde6UI%2BCbMTyjhvao%2BbQMP7%2BmymIzhVW6tInkmAURkEV2cDeZyJjRplg9ej29YiINvKMuhWr52CRUzMVd1nMsK88pJ5bNJte3gb87Ndk1BGq23idSGaOrKYJaYDEnuNrWzbx%2FwLfrwz4wB%2BJBQR6LWEjEDAqauj6C5C%2Bj4JoIor6gACbpDa2AVGCYXdl%2Fs%2FAviL1R9c9DgTSq%2Brex6gXfISuAMC1wVsyOZ5ilNeupl9os4FnQHhiyXMIPW8NIGOqUBoyv0NerVuZoQgAuSnVqHp8bZLfGovMJJbcgHfpRCKsDgCmYhB0mGo9WQ7GqgPaGmXyfAT1Avs5cVv35ls3ncCmt0jweB4Hn1v6Pn5%2FRm81xojut5XoPA4oxOtOg9aZoLl5qhQaXBtDVdpKFGgBptsZoECBxhT5bCX96TkVpyY5OpLAn2ANjULu%2BsSOtye1dugvSGFdRqCVlXVpFDCBHxurWAfAvW&X-Amz-Signature=1916e8bcc51e16c1e5fee9bf04641dda64a8b29ae2b311ed59ca5ea9727ce1fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STRMSULI%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxwKdpFxNaSU2W%2F6d6Z5w6Nm0sq27zXlO8r9NOIrcKfwIgIbzgApw5nbgn8DWxEeLFsORn1gMdMfDmOW756W6EkRwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcL5TuCiwMhuEq2mircA4RWwVupag4eLwfPtKS0opa%2BLZqDJ9APvw445q8eYkY%2Bi7VuNhJ4gF6jLHK45rUVg00jYTj94tD3x1pl2EuJO1S0TIF4Vqh5WExM6zyDL8vxvKUKyLsxxUvIknaGFiBD9XQxltFdFUskkjsIzwO%2F6mA%2BIVTpwHxwgICnj1cLHTrJbXEbnlt6kd4UU0eF0%2FxIHJ%2B6xKqyJ%2FMZtWBXvXa5pRzrP175hy3gEmyn7HBKJaIk5klEX0J6ZrcLbRKEDr9VlhLSCHGO2QppW2tdVcCHmgbQNBb6sc8Pvw1niPJCUMYgI%2BfYqCZXZVvQ3cVTBaYxW%2FncSWBN8IwtB5DEauAW7uN%2FYq%2F%2Fy0P%2BvgLo%2Fa5y0Y%2F0HEcwYBqfWAk18qNmq0DrRnD25R%2Bde6UI%2BCbMTyjhvao%2BbQMP7%2BmymIzhVW6tInkmAURkEV2cDeZyJjRplg9ej29YiINvKMuhWr52CRUzMVd1nMsK88pJ5bNJte3gb87Ndk1BGq23idSGaOrKYJaYDEnuNrWzbx%2FwLfrwz4wB%2BJBQR6LWEjEDAqauj6C5C%2Bj4JoIor6gACbpDa2AVGCYXdl%2Fs%2FAviL1R9c9DgTSq%2Brex6gXfISuAMC1wVsyOZ5ilNeupl9os4FnQHhiyXMIPW8NIGOqUBoyv0NerVuZoQgAuSnVqHp8bZLfGovMJJbcgHfpRCKsDgCmYhB0mGo9WQ7GqgPaGmXyfAT1Avs5cVv35ls3ncCmt0jweB4Hn1v6Pn5%2FRm81xojut5XoPA4oxOtOg9aZoLl5qhQaXBtDVdpKFGgBptsZoECBxhT5bCX96TkVpyY5OpLAn2ANjULu%2BsSOtye1dugvSGFdRqCVlXVpFDCBHxurWAfAvW&X-Amz-Signature=8a08fdb4984c4abfcf73c92a5b13c9e245cb8a3c421e9082a70074273baef03a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STRMSULI%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxwKdpFxNaSU2W%2F6d6Z5w6Nm0sq27zXlO8r9NOIrcKfwIgIbzgApw5nbgn8DWxEeLFsORn1gMdMfDmOW756W6EkRwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcL5TuCiwMhuEq2mircA4RWwVupag4eLwfPtKS0opa%2BLZqDJ9APvw445q8eYkY%2Bi7VuNhJ4gF6jLHK45rUVg00jYTj94tD3x1pl2EuJO1S0TIF4Vqh5WExM6zyDL8vxvKUKyLsxxUvIknaGFiBD9XQxltFdFUskkjsIzwO%2F6mA%2BIVTpwHxwgICnj1cLHTrJbXEbnlt6kd4UU0eF0%2FxIHJ%2B6xKqyJ%2FMZtWBXvXa5pRzrP175hy3gEmyn7HBKJaIk5klEX0J6ZrcLbRKEDr9VlhLSCHGO2QppW2tdVcCHmgbQNBb6sc8Pvw1niPJCUMYgI%2BfYqCZXZVvQ3cVTBaYxW%2FncSWBN8IwtB5DEauAW7uN%2FYq%2F%2Fy0P%2BvgLo%2Fa5y0Y%2F0HEcwYBqfWAk18qNmq0DrRnD25R%2Bde6UI%2BCbMTyjhvao%2BbQMP7%2BmymIzhVW6tInkmAURkEV2cDeZyJjRplg9ej29YiINvKMuhWr52CRUzMVd1nMsK88pJ5bNJte3gb87Ndk1BGq23idSGaOrKYJaYDEnuNrWzbx%2FwLfrwz4wB%2BJBQR6LWEjEDAqauj6C5C%2Bj4JoIor6gACbpDa2AVGCYXdl%2Fs%2FAviL1R9c9DgTSq%2Brex6gXfISuAMC1wVsyOZ5ilNeupl9os4FnQHhiyXMIPW8NIGOqUBoyv0NerVuZoQgAuSnVqHp8bZLfGovMJJbcgHfpRCKsDgCmYhB0mGo9WQ7GqgPaGmXyfAT1Avs5cVv35ls3ncCmt0jweB4Hn1v6Pn5%2FRm81xojut5XoPA4oxOtOg9aZoLl5qhQaXBtDVdpKFGgBptsZoECBxhT5bCX96TkVpyY5OpLAn2ANjULu%2BsSOtye1dugvSGFdRqCVlXVpFDCBHxurWAfAvW&X-Amz-Signature=572ff083477b235fbf849396174d1dcf4fb7b49986839a0d7c0ad530b1847e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZMMOUBO%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdxQZBNIUgA1RIFwt%2Bu15qtSVhFd%2BVPMLcOoFaFDVVZAiEA8hD3xEY8PtDuFC%2F48edCtj9DzhTs8Ln7w5JfSdMwfPgqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJAhB%2FYE2hu17kma1SrcA%2BluBA0ss57Lkuu57n4u9pR6um0DXoeh%2FiaAcKEJ7KoN2VkNKi%2BmhgVYm3EXbkTPbTEE8gjIEX10CKrkl1rQ24d1WVTJrdJZUznxF5SZJ0h7B2WB83Rd7TR6i%2B8ZGSxA0s1K6fq3odGpre92dmm%2FsdE8AZEa6FROxl3HdRBORFf8MmZKJxRyI%2B3rDeR9GPouF9AXCR7%2FffAacH62PTF9r5VfYtR%2BPtICxAD5vpKHIPS%2BOlG3f7VLSZOS1JQnUCwmmf83bntjyKl38bA2KRAyR5FxyoIRd5z8JFpq%2BEDZOFu0ELbo51DFW89Pd8tzGhJThFT3RpKix7KYrBzI%2F3ISroe0oapajVilVoTZL2Qp0IkPcbwzcfp46aNUupq8pW0wVCh%2F%2BZSkqMM8LxGRxMtf4gW23LVDKY4sK9SUdc1nWJTLap02JOKGhu2bF4dkowE%2BZj2sUSY1CHIPiE6hQi9Jwv5%2FKJUEX3SxQYBjDrV7t%2FZGlW96VAW431LVQf7GF52yPSjfk43xg2RJ6UmoDpwpkD95QMWaNLOSbzwlfRpo52IwlpeZSZ%2FrlgM%2FMv0sp%2F2WS8l2k%2BfLNm1qLWu2UHviVyHDs5NUOhH%2FJZJLy9O3VjCTPiDNg3DbrtqoUjNCMNnX8NIGOqUBoG8jSbcQw1kIj7gwoC%2BoPu5ndWlegPjptEdJYscZEExXcrUxIRuIcckjvmJF2PfmPDIXqlFQj8nQiXXZlNC9kgKSCSx6IDT41QlmWJAtVvr2UGHC%2Ffjv1yOrsrFMC3uciBgSKeSgJJ0BR3CQUkkP5CITTg7qGaKLA1gMQxjzBqgqye1iCJ1v32ZGHFw%2B0gEos1q%2B85glcdfkhvt5SPmTqIUxKMRJ&X-Amz-Signature=b6fb463cb3890ace225593b8354282dcecce031e18d447f53d34608f243420e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3PTTVX%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8BEFHQ0IOQk5mhMOSm%2FIyd8ErRAi03DR62cUXPZXUjAiEA8c03gUUUaY5pZ%2FkGJFZxHNdGet7lhldwn24Nzh7X8gYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfyd%2F%2Brol8cL4I35CrcA%2F99Sa%2B24ro9pwRUqv1R2jW8LPQAAfWDenWh7K%2FwnpmyBioXCVPkxjDygI%2F8gFL7Lx%2BG81o79o%2FFSSlnnQvJN3fvUUkQNrTC76jaOVohrAbtaEU0uKVxxrMEku6%2BpH8oltnbbuviFEcOMOgx26Ix4ozEumtRgQ5vRe1h%2FaV4x4A%2BdmJUXHSJxazKZEtwMlG5%2BlKxzqoZzMdiIOELameHA2zERa2O7SsCTfRxqXG9N7CmELUX%2BTdesLOpAhdEmteK26716hcjqSNtgMkdgz56vOrUcMdAhlUO5Tv0Mp2D%2BHgO1C5U%2FIFJy2Tr5p6hnYzxXhk51GTE4t%2Bb884AMAanIpavlqpQ2PqmOi4Ss9WHaVcdCfQkt2y%2BatrjYYfVv12pz%2FCwnTaafWZ31NnLjw1hrzTbLSsXmzgLRfm3GSE3RI2McMfovoklFNZdGWcps6aaOzD4zYt54WQBl%2Fd0TscbIefVZWAZrXVbVj4nB32gWs8qLiRt1I1LmBtyiKtCiqDnc5wciZppSR3uL%2FI2%2FLGFu%2FfcN874AR7l5oZY5%2FvZo04cVKFXg%2B11AO1xz0gqdRCNKhhRUtouF5ECbBJuTW0ruHJaBRWiLfJceJWw54y60M9j20E1zeNV5hQkiEBpMNnW8NIGOqUBZOWssvTzD3nkt972xq49kPznlNqhX3NpXmCEQF0dTTAJMC6LqF0z0px5FtSVJiJ%2BOqpEO0dynQgpDnDhLgSPhJsg0NtdcxIJN3jPq%2ByPGDMr6d9VfjWBXW7BFP3y1tdfGYsWUC6RCy2IrLOnhQwYX%2B6KdcttF9AYeEQHWJY44L%2FmR7FTXKxXTgEAJVGkvvph1HqZZXugQwb%2FQ5ofL5rrtiaK7XCj&X-Amz-Signature=9d6889eb62e0f907063dd16fc5662721f101bb0c5b0ed6467aba046636d331ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3PTTVX%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8BEFHQ0IOQk5mhMOSm%2FIyd8ErRAi03DR62cUXPZXUjAiEA8c03gUUUaY5pZ%2FkGJFZxHNdGet7lhldwn24Nzh7X8gYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfyd%2F%2Brol8cL4I35CrcA%2F99Sa%2B24ro9pwRUqv1R2jW8LPQAAfWDenWh7K%2FwnpmyBioXCVPkxjDygI%2F8gFL7Lx%2BG81o79o%2FFSSlnnQvJN3fvUUkQNrTC76jaOVohrAbtaEU0uKVxxrMEku6%2BpH8oltnbbuviFEcOMOgx26Ix4ozEumtRgQ5vRe1h%2FaV4x4A%2BdmJUXHSJxazKZEtwMlG5%2BlKxzqoZzMdiIOELameHA2zERa2O7SsCTfRxqXG9N7CmELUX%2BTdesLOpAhdEmteK26716hcjqSNtgMkdgz56vOrUcMdAhlUO5Tv0Mp2D%2BHgO1C5U%2FIFJy2Tr5p6hnYzxXhk51GTE4t%2Bb884AMAanIpavlqpQ2PqmOi4Ss9WHaVcdCfQkt2y%2BatrjYYfVv12pz%2FCwnTaafWZ31NnLjw1hrzTbLSsXmzgLRfm3GSE3RI2McMfovoklFNZdGWcps6aaOzD4zYt54WQBl%2Fd0TscbIefVZWAZrXVbVj4nB32gWs8qLiRt1I1LmBtyiKtCiqDnc5wciZppSR3uL%2FI2%2FLGFu%2FfcN874AR7l5oZY5%2FvZo04cVKFXg%2B11AO1xz0gqdRCNKhhRUtouF5ECbBJuTW0ruHJaBRWiLfJceJWw54y60M9j20E1zeNV5hQkiEBpMNnW8NIGOqUBZOWssvTzD3nkt972xq49kPznlNqhX3NpXmCEQF0dTTAJMC6LqF0z0px5FtSVJiJ%2BOqpEO0dynQgpDnDhLgSPhJsg0NtdcxIJN3jPq%2ByPGDMr6d9VfjWBXW7BFP3y1tdfGYsWUC6RCy2IrLOnhQwYX%2B6KdcttF9AYeEQHWJY44L%2FmR7FTXKxXTgEAJVGkvvph1HqZZXugQwb%2FQ5ofL5rrtiaK7XCj&X-Amz-Signature=0c40504daa3194b64d2a358c21bbb9e148a5a23ea14f26dce48e2d25bd6238d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3PTTVX%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8BEFHQ0IOQk5mhMOSm%2FIyd8ErRAi03DR62cUXPZXUjAiEA8c03gUUUaY5pZ%2FkGJFZxHNdGet7lhldwn24Nzh7X8gYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfyd%2F%2Brol8cL4I35CrcA%2F99Sa%2B24ro9pwRUqv1R2jW8LPQAAfWDenWh7K%2FwnpmyBioXCVPkxjDygI%2F8gFL7Lx%2BG81o79o%2FFSSlnnQvJN3fvUUkQNrTC76jaOVohrAbtaEU0uKVxxrMEku6%2BpH8oltnbbuviFEcOMOgx26Ix4ozEumtRgQ5vRe1h%2FaV4x4A%2BdmJUXHSJxazKZEtwMlG5%2BlKxzqoZzMdiIOELameHA2zERa2O7SsCTfRxqXG9N7CmELUX%2BTdesLOpAhdEmteK26716hcjqSNtgMkdgz56vOrUcMdAhlUO5Tv0Mp2D%2BHgO1C5U%2FIFJy2Tr5p6hnYzxXhk51GTE4t%2Bb884AMAanIpavlqpQ2PqmOi4Ss9WHaVcdCfQkt2y%2BatrjYYfVv12pz%2FCwnTaafWZ31NnLjw1hrzTbLSsXmzgLRfm3GSE3RI2McMfovoklFNZdGWcps6aaOzD4zYt54WQBl%2Fd0TscbIefVZWAZrXVbVj4nB32gWs8qLiRt1I1LmBtyiKtCiqDnc5wciZppSR3uL%2FI2%2FLGFu%2FfcN874AR7l5oZY5%2FvZo04cVKFXg%2B11AO1xz0gqdRCNKhhRUtouF5ECbBJuTW0ruHJaBRWiLfJceJWw54y60M9j20E1zeNV5hQkiEBpMNnW8NIGOqUBZOWssvTzD3nkt972xq49kPznlNqhX3NpXmCEQF0dTTAJMC6LqF0z0px5FtSVJiJ%2BOqpEO0dynQgpDnDhLgSPhJsg0NtdcxIJN3jPq%2ByPGDMr6d9VfjWBXW7BFP3y1tdfGYsWUC6RCy2IrLOnhQwYX%2B6KdcttF9AYeEQHWJY44L%2FmR7FTXKxXTgEAJVGkvvph1HqZZXugQwb%2FQ5ofL5rrtiaK7XCj&X-Amz-Signature=70503abafa13b038ad7c79c0a61413773a7c29f446ed0c0584bf51ad875fece1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3PTTVX%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8BEFHQ0IOQk5mhMOSm%2FIyd8ErRAi03DR62cUXPZXUjAiEA8c03gUUUaY5pZ%2FkGJFZxHNdGet7lhldwn24Nzh7X8gYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfyd%2F%2Brol8cL4I35CrcA%2F99Sa%2B24ro9pwRUqv1R2jW8LPQAAfWDenWh7K%2FwnpmyBioXCVPkxjDygI%2F8gFL7Lx%2BG81o79o%2FFSSlnnQvJN3fvUUkQNrTC76jaOVohrAbtaEU0uKVxxrMEku6%2BpH8oltnbbuviFEcOMOgx26Ix4ozEumtRgQ5vRe1h%2FaV4x4A%2BdmJUXHSJxazKZEtwMlG5%2BlKxzqoZzMdiIOELameHA2zERa2O7SsCTfRxqXG9N7CmELUX%2BTdesLOpAhdEmteK26716hcjqSNtgMkdgz56vOrUcMdAhlUO5Tv0Mp2D%2BHgO1C5U%2FIFJy2Tr5p6hnYzxXhk51GTE4t%2Bb884AMAanIpavlqpQ2PqmOi4Ss9WHaVcdCfQkt2y%2BatrjYYfVv12pz%2FCwnTaafWZ31NnLjw1hrzTbLSsXmzgLRfm3GSE3RI2McMfovoklFNZdGWcps6aaOzD4zYt54WQBl%2Fd0TscbIefVZWAZrXVbVj4nB32gWs8qLiRt1I1LmBtyiKtCiqDnc5wciZppSR3uL%2FI2%2FLGFu%2FfcN874AR7l5oZY5%2FvZo04cVKFXg%2B11AO1xz0gqdRCNKhhRUtouF5ECbBJuTW0ruHJaBRWiLfJceJWw54y60M9j20E1zeNV5hQkiEBpMNnW8NIGOqUBZOWssvTzD3nkt972xq49kPznlNqhX3NpXmCEQF0dTTAJMC6LqF0z0px5FtSVJiJ%2BOqpEO0dynQgpDnDhLgSPhJsg0NtdcxIJN3jPq%2ByPGDMr6d9VfjWBXW7BFP3y1tdfGYsWUC6RCy2IrLOnhQwYX%2B6KdcttF9AYeEQHWJY44L%2FmR7FTXKxXTgEAJVGkvvph1HqZZXugQwb%2FQ5ofL5rrtiaK7XCj&X-Amz-Signature=435fdef754f5e4899965b6ef09de630d9fbcb9207708e131864bc186d67a9c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3PTTVX%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8BEFHQ0IOQk5mhMOSm%2FIyd8ErRAi03DR62cUXPZXUjAiEA8c03gUUUaY5pZ%2FkGJFZxHNdGet7lhldwn24Nzh7X8gYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfyd%2F%2Brol8cL4I35CrcA%2F99Sa%2B24ro9pwRUqv1R2jW8LPQAAfWDenWh7K%2FwnpmyBioXCVPkxjDygI%2F8gFL7Lx%2BG81o79o%2FFSSlnnQvJN3fvUUkQNrTC76jaOVohrAbtaEU0uKVxxrMEku6%2BpH8oltnbbuviFEcOMOgx26Ix4ozEumtRgQ5vRe1h%2FaV4x4A%2BdmJUXHSJxazKZEtwMlG5%2BlKxzqoZzMdiIOELameHA2zERa2O7SsCTfRxqXG9N7CmELUX%2BTdesLOpAhdEmteK26716hcjqSNtgMkdgz56vOrUcMdAhlUO5Tv0Mp2D%2BHgO1C5U%2FIFJy2Tr5p6hnYzxXhk51GTE4t%2Bb884AMAanIpavlqpQ2PqmOi4Ss9WHaVcdCfQkt2y%2BatrjYYfVv12pz%2FCwnTaafWZ31NnLjw1hrzTbLSsXmzgLRfm3GSE3RI2McMfovoklFNZdGWcps6aaOzD4zYt54WQBl%2Fd0TscbIefVZWAZrXVbVj4nB32gWs8qLiRt1I1LmBtyiKtCiqDnc5wciZppSR3uL%2FI2%2FLGFu%2FfcN874AR7l5oZY5%2FvZo04cVKFXg%2B11AO1xz0gqdRCNKhhRUtouF5ECbBJuTW0ruHJaBRWiLfJceJWw54y60M9j20E1zeNV5hQkiEBpMNnW8NIGOqUBZOWssvTzD3nkt972xq49kPznlNqhX3NpXmCEQF0dTTAJMC6LqF0z0px5FtSVJiJ%2BOqpEO0dynQgpDnDhLgSPhJsg0NtdcxIJN3jPq%2ByPGDMr6d9VfjWBXW7BFP3y1tdfGYsWUC6RCy2IrLOnhQwYX%2B6KdcttF9AYeEQHWJY44L%2FmR7FTXKxXTgEAJVGkvvph1HqZZXugQwb%2FQ5ofL5rrtiaK7XCj&X-Amz-Signature=2715f25cbf2dea82f4aaa6349f25fb900374c71fbc977d6e4e4455585094e2db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3PTTVX%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8BEFHQ0IOQk5mhMOSm%2FIyd8ErRAi03DR62cUXPZXUjAiEA8c03gUUUaY5pZ%2FkGJFZxHNdGet7lhldwn24Nzh7X8gYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfyd%2F%2Brol8cL4I35CrcA%2F99Sa%2B24ro9pwRUqv1R2jW8LPQAAfWDenWh7K%2FwnpmyBioXCVPkxjDygI%2F8gFL7Lx%2BG81o79o%2FFSSlnnQvJN3fvUUkQNrTC76jaOVohrAbtaEU0uKVxxrMEku6%2BpH8oltnbbuviFEcOMOgx26Ix4ozEumtRgQ5vRe1h%2FaV4x4A%2BdmJUXHSJxazKZEtwMlG5%2BlKxzqoZzMdiIOELameHA2zERa2O7SsCTfRxqXG9N7CmELUX%2BTdesLOpAhdEmteK26716hcjqSNtgMkdgz56vOrUcMdAhlUO5Tv0Mp2D%2BHgO1C5U%2FIFJy2Tr5p6hnYzxXhk51GTE4t%2Bb884AMAanIpavlqpQ2PqmOi4Ss9WHaVcdCfQkt2y%2BatrjYYfVv12pz%2FCwnTaafWZ31NnLjw1hrzTbLSsXmzgLRfm3GSE3RI2McMfovoklFNZdGWcps6aaOzD4zYt54WQBl%2Fd0TscbIefVZWAZrXVbVj4nB32gWs8qLiRt1I1LmBtyiKtCiqDnc5wciZppSR3uL%2FI2%2FLGFu%2FfcN874AR7l5oZY5%2FvZo04cVKFXg%2B11AO1xz0gqdRCNKhhRUtouF5ECbBJuTW0ruHJaBRWiLfJceJWw54y60M9j20E1zeNV5hQkiEBpMNnW8NIGOqUBZOWssvTzD3nkt972xq49kPznlNqhX3NpXmCEQF0dTTAJMC6LqF0z0px5FtSVJiJ%2BOqpEO0dynQgpDnDhLgSPhJsg0NtdcxIJN3jPq%2ByPGDMr6d9VfjWBXW7BFP3y1tdfGYsWUC6RCy2IrLOnhQwYX%2B6KdcttF9AYeEQHWJY44L%2FmR7FTXKxXTgEAJVGkvvph1HqZZXugQwb%2FQ5ofL5rrtiaK7XCj&X-Amz-Signature=cb8873ac2a8c507e201a854fb9a9e9768cf4b29da68013b0e3877becae7457d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3PTTVX%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8BEFHQ0IOQk5mhMOSm%2FIyd8ErRAi03DR62cUXPZXUjAiEA8c03gUUUaY5pZ%2FkGJFZxHNdGet7lhldwn24Nzh7X8gYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfyd%2F%2Brol8cL4I35CrcA%2F99Sa%2B24ro9pwRUqv1R2jW8LPQAAfWDenWh7K%2FwnpmyBioXCVPkxjDygI%2F8gFL7Lx%2BG81o79o%2FFSSlnnQvJN3fvUUkQNrTC76jaOVohrAbtaEU0uKVxxrMEku6%2BpH8oltnbbuviFEcOMOgx26Ix4ozEumtRgQ5vRe1h%2FaV4x4A%2BdmJUXHSJxazKZEtwMlG5%2BlKxzqoZzMdiIOELameHA2zERa2O7SsCTfRxqXG9N7CmELUX%2BTdesLOpAhdEmteK26716hcjqSNtgMkdgz56vOrUcMdAhlUO5Tv0Mp2D%2BHgO1C5U%2FIFJy2Tr5p6hnYzxXhk51GTE4t%2Bb884AMAanIpavlqpQ2PqmOi4Ss9WHaVcdCfQkt2y%2BatrjYYfVv12pz%2FCwnTaafWZ31NnLjw1hrzTbLSsXmzgLRfm3GSE3RI2McMfovoklFNZdGWcps6aaOzD4zYt54WQBl%2Fd0TscbIefVZWAZrXVbVj4nB32gWs8qLiRt1I1LmBtyiKtCiqDnc5wciZppSR3uL%2FI2%2FLGFu%2FfcN874AR7l5oZY5%2FvZo04cVKFXg%2B11AO1xz0gqdRCNKhhRUtouF5ECbBJuTW0ruHJaBRWiLfJceJWw54y60M9j20E1zeNV5hQkiEBpMNnW8NIGOqUBZOWssvTzD3nkt972xq49kPznlNqhX3NpXmCEQF0dTTAJMC6LqF0z0px5FtSVJiJ%2BOqpEO0dynQgpDnDhLgSPhJsg0NtdcxIJN3jPq%2ByPGDMr6d9VfjWBXW7BFP3y1tdfGYsWUC6RCy2IrLOnhQwYX%2B6KdcttF9AYeEQHWJY44L%2FmR7FTXKxXTgEAJVGkvvph1HqZZXugQwb%2FQ5ofL5rrtiaK7XCj&X-Amz-Signature=9f40fea5476add9ddc86b662db3327723ff26202df26c04a29a999e0f54b028c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3PTTVX%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8BEFHQ0IOQk5mhMOSm%2FIyd8ErRAi03DR62cUXPZXUjAiEA8c03gUUUaY5pZ%2FkGJFZxHNdGet7lhldwn24Nzh7X8gYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfyd%2F%2Brol8cL4I35CrcA%2F99Sa%2B24ro9pwRUqv1R2jW8LPQAAfWDenWh7K%2FwnpmyBioXCVPkxjDygI%2F8gFL7Lx%2BG81o79o%2FFSSlnnQvJN3fvUUkQNrTC76jaOVohrAbtaEU0uKVxxrMEku6%2BpH8oltnbbuviFEcOMOgx26Ix4ozEumtRgQ5vRe1h%2FaV4x4A%2BdmJUXHSJxazKZEtwMlG5%2BlKxzqoZzMdiIOELameHA2zERa2O7SsCTfRxqXG9N7CmELUX%2BTdesLOpAhdEmteK26716hcjqSNtgMkdgz56vOrUcMdAhlUO5Tv0Mp2D%2BHgO1C5U%2FIFJy2Tr5p6hnYzxXhk51GTE4t%2Bb884AMAanIpavlqpQ2PqmOi4Ss9WHaVcdCfQkt2y%2BatrjYYfVv12pz%2FCwnTaafWZ31NnLjw1hrzTbLSsXmzgLRfm3GSE3RI2McMfovoklFNZdGWcps6aaOzD4zYt54WQBl%2Fd0TscbIefVZWAZrXVbVj4nB32gWs8qLiRt1I1LmBtyiKtCiqDnc5wciZppSR3uL%2FI2%2FLGFu%2FfcN874AR7l5oZY5%2FvZo04cVKFXg%2B11AO1xz0gqdRCNKhhRUtouF5ECbBJuTW0ruHJaBRWiLfJceJWw54y60M9j20E1zeNV5hQkiEBpMNnW8NIGOqUBZOWssvTzD3nkt972xq49kPznlNqhX3NpXmCEQF0dTTAJMC6LqF0z0px5FtSVJiJ%2BOqpEO0dynQgpDnDhLgSPhJsg0NtdcxIJN3jPq%2ByPGDMr6d9VfjWBXW7BFP3y1tdfGYsWUC6RCy2IrLOnhQwYX%2B6KdcttF9AYeEQHWJY44L%2FmR7FTXKxXTgEAJVGkvvph1HqZZXugQwb%2FQ5ofL5rrtiaK7XCj&X-Amz-Signature=7c770962824a8f0b9050a81483991acaf9391b54f9de56d59eee88227cad25c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3PTTVX%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8BEFHQ0IOQk5mhMOSm%2FIyd8ErRAi03DR62cUXPZXUjAiEA8c03gUUUaY5pZ%2FkGJFZxHNdGet7lhldwn24Nzh7X8gYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfyd%2F%2Brol8cL4I35CrcA%2F99Sa%2B24ro9pwRUqv1R2jW8LPQAAfWDenWh7K%2FwnpmyBioXCVPkxjDygI%2F8gFL7Lx%2BG81o79o%2FFSSlnnQvJN3fvUUkQNrTC76jaOVohrAbtaEU0uKVxxrMEku6%2BpH8oltnbbuviFEcOMOgx26Ix4ozEumtRgQ5vRe1h%2FaV4x4A%2BdmJUXHSJxazKZEtwMlG5%2BlKxzqoZzMdiIOELameHA2zERa2O7SsCTfRxqXG9N7CmELUX%2BTdesLOpAhdEmteK26716hcjqSNtgMkdgz56vOrUcMdAhlUO5Tv0Mp2D%2BHgO1C5U%2FIFJy2Tr5p6hnYzxXhk51GTE4t%2Bb884AMAanIpavlqpQ2PqmOi4Ss9WHaVcdCfQkt2y%2BatrjYYfVv12pz%2FCwnTaafWZ31NnLjw1hrzTbLSsXmzgLRfm3GSE3RI2McMfovoklFNZdGWcps6aaOzD4zYt54WQBl%2Fd0TscbIefVZWAZrXVbVj4nB32gWs8qLiRt1I1LmBtyiKtCiqDnc5wciZppSR3uL%2FI2%2FLGFu%2FfcN874AR7l5oZY5%2FvZo04cVKFXg%2B11AO1xz0gqdRCNKhhRUtouF5ECbBJuTW0ruHJaBRWiLfJceJWw54y60M9j20E1zeNV5hQkiEBpMNnW8NIGOqUBZOWssvTzD3nkt972xq49kPznlNqhX3NpXmCEQF0dTTAJMC6LqF0z0px5FtSVJiJ%2BOqpEO0dynQgpDnDhLgSPhJsg0NtdcxIJN3jPq%2ByPGDMr6d9VfjWBXW7BFP3y1tdfGYsWUC6RCy2IrLOnhQwYX%2B6KdcttF9AYeEQHWJY44L%2FmR7FTXKxXTgEAJVGkvvph1HqZZXugQwb%2FQ5ofL5rrtiaK7XCj&X-Amz-Signature=72216a268157c107038a0c618f7dae5b7fa060617fd9adca10e225bbbfb6b869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
