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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIRT5WM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9fK9xQQEfpfXG9fVXHneEmtDIIdXsD0Eyd0uzsqEijAiEA64Q%2Fj6pu7duk0Pnc%2FCHdVcYXR3%2BDbIn3NqfoKN5Mz%2FgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTVIWAsME7l657AlSrcA%2BAccxsNd%2FLX%2FGKI6yNjSspk75v95zXTTW69j2ndKDeSC9iOdx2Tp7YjI6XsBZedu%2FWPzmTsHR23QGgCQWUiUfl3CYLnBb0KIJLvP8wI0rgTEA97WoDYxNBwtQD50ylhs%2FpIdTyoFac9VWBG5JW1vMozqDWTZVyUsy5blR1nbtKv4HfNzr7e0tnavZ0H5Bc6Lfyq88wDb3KSMyFMUsfv2%2FCwDPWzV47pRTohgaAUf%2Fac5AzLqziSyPwB8P76Lf35IFHrs7zFTYShAsKhKpb9NcMAIiwh1KBEqwtmR1UthmaS11fbujR3gk5Up9giBwGDuq7zUk%2F1VVA0T8oZQkX5z0guvEfxCGVOP3UNhnFN4exQeXtkVhJ3pfumFxwowJdxFRPvyDImpL%2F%2Bgz%2FeqzDzrW0ohefAscDaE%2FcRlbK2Vt23%2BqoH03OEuklZdzNLF%2F5ciMDVP51dAX5L8JYKGIhaCzkIiSUin%2BN1cJ0OwhnT1WmahBma2SsFWm3zjiiE6zFLX5B2MheGwFmTLmsYrwQDW24T2ZarhFJlShyc%2BDDjnAj%2FwKZe3VziqQ3JSHZhj185%2BLNwkbKqjhQwEjSn6KdHgOJeEKMmVNQofVkM1%2BLE7kltX99K8CuXK8tQPodFMICA38wGOqUB1lFJCWejxv88pb%2B4BR1GPahItfHAcQSP8gLHDeiWvp20zts4DuFdBT1g5Ey8OLwsggWyGPRSZDvJ8pUHhz4TluBJrICocKH7A1eA62w1jD8IhAXYuDglKoxTs%2FoARLq4aNoRLKPZDNZ4UCdmW68nesSu%2Bxkd150CEIKZlPSSQ5pMPNzRHSNJ34fHt2k%2FgoEnv1KIKz9AoiaHd1aeoL0XAbxy%2BRnx&X-Amz-Signature=13c51837bb703cca4c9671dbd9c14ce17729220a2c6e53686015f4270b552138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIRT5WM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9fK9xQQEfpfXG9fVXHneEmtDIIdXsD0Eyd0uzsqEijAiEA64Q%2Fj6pu7duk0Pnc%2FCHdVcYXR3%2BDbIn3NqfoKN5Mz%2FgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTVIWAsME7l657AlSrcA%2BAccxsNd%2FLX%2FGKI6yNjSspk75v95zXTTW69j2ndKDeSC9iOdx2Tp7YjI6XsBZedu%2FWPzmTsHR23QGgCQWUiUfl3CYLnBb0KIJLvP8wI0rgTEA97WoDYxNBwtQD50ylhs%2FpIdTyoFac9VWBG5JW1vMozqDWTZVyUsy5blR1nbtKv4HfNzr7e0tnavZ0H5Bc6Lfyq88wDb3KSMyFMUsfv2%2FCwDPWzV47pRTohgaAUf%2Fac5AzLqziSyPwB8P76Lf35IFHrs7zFTYShAsKhKpb9NcMAIiwh1KBEqwtmR1UthmaS11fbujR3gk5Up9giBwGDuq7zUk%2F1VVA0T8oZQkX5z0guvEfxCGVOP3UNhnFN4exQeXtkVhJ3pfumFxwowJdxFRPvyDImpL%2F%2Bgz%2FeqzDzrW0ohefAscDaE%2FcRlbK2Vt23%2BqoH03OEuklZdzNLF%2F5ciMDVP51dAX5L8JYKGIhaCzkIiSUin%2BN1cJ0OwhnT1WmahBma2SsFWm3zjiiE6zFLX5B2MheGwFmTLmsYrwQDW24T2ZarhFJlShyc%2BDDjnAj%2FwKZe3VziqQ3JSHZhj185%2BLNwkbKqjhQwEjSn6KdHgOJeEKMmVNQofVkM1%2BLE7kltX99K8CuXK8tQPodFMICA38wGOqUB1lFJCWejxv88pb%2B4BR1GPahItfHAcQSP8gLHDeiWvp20zts4DuFdBT1g5Ey8OLwsggWyGPRSZDvJ8pUHhz4TluBJrICocKH7A1eA62w1jD8IhAXYuDglKoxTs%2FoARLq4aNoRLKPZDNZ4UCdmW68nesSu%2Bxkd150CEIKZlPSSQ5pMPNzRHSNJ34fHt2k%2FgoEnv1KIKz9AoiaHd1aeoL0XAbxy%2BRnx&X-Amz-Signature=7bbf6d19085e8dfa898842860d09bac8a605a04853914b69d29df93079d6e55c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIRT5WM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9fK9xQQEfpfXG9fVXHneEmtDIIdXsD0Eyd0uzsqEijAiEA64Q%2Fj6pu7duk0Pnc%2FCHdVcYXR3%2BDbIn3NqfoKN5Mz%2FgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTVIWAsME7l657AlSrcA%2BAccxsNd%2FLX%2FGKI6yNjSspk75v95zXTTW69j2ndKDeSC9iOdx2Tp7YjI6XsBZedu%2FWPzmTsHR23QGgCQWUiUfl3CYLnBb0KIJLvP8wI0rgTEA97WoDYxNBwtQD50ylhs%2FpIdTyoFac9VWBG5JW1vMozqDWTZVyUsy5blR1nbtKv4HfNzr7e0tnavZ0H5Bc6Lfyq88wDb3KSMyFMUsfv2%2FCwDPWzV47pRTohgaAUf%2Fac5AzLqziSyPwB8P76Lf35IFHrs7zFTYShAsKhKpb9NcMAIiwh1KBEqwtmR1UthmaS11fbujR3gk5Up9giBwGDuq7zUk%2F1VVA0T8oZQkX5z0guvEfxCGVOP3UNhnFN4exQeXtkVhJ3pfumFxwowJdxFRPvyDImpL%2F%2Bgz%2FeqzDzrW0ohefAscDaE%2FcRlbK2Vt23%2BqoH03OEuklZdzNLF%2F5ciMDVP51dAX5L8JYKGIhaCzkIiSUin%2BN1cJ0OwhnT1WmahBma2SsFWm3zjiiE6zFLX5B2MheGwFmTLmsYrwQDW24T2ZarhFJlShyc%2BDDjnAj%2FwKZe3VziqQ3JSHZhj185%2BLNwkbKqjhQwEjSn6KdHgOJeEKMmVNQofVkM1%2BLE7kltX99K8CuXK8tQPodFMICA38wGOqUB1lFJCWejxv88pb%2B4BR1GPahItfHAcQSP8gLHDeiWvp20zts4DuFdBT1g5Ey8OLwsggWyGPRSZDvJ8pUHhz4TluBJrICocKH7A1eA62w1jD8IhAXYuDglKoxTs%2FoARLq4aNoRLKPZDNZ4UCdmW68nesSu%2Bxkd150CEIKZlPSSQ5pMPNzRHSNJ34fHt2k%2FgoEnv1KIKz9AoiaHd1aeoL0XAbxy%2BRnx&X-Amz-Signature=a05436d451f8cb616eb55c568d84f78fad73266ff059de6953c946ca46c16e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIRT5WM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9fK9xQQEfpfXG9fVXHneEmtDIIdXsD0Eyd0uzsqEijAiEA64Q%2Fj6pu7duk0Pnc%2FCHdVcYXR3%2BDbIn3NqfoKN5Mz%2FgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTVIWAsME7l657AlSrcA%2BAccxsNd%2FLX%2FGKI6yNjSspk75v95zXTTW69j2ndKDeSC9iOdx2Tp7YjI6XsBZedu%2FWPzmTsHR23QGgCQWUiUfl3CYLnBb0KIJLvP8wI0rgTEA97WoDYxNBwtQD50ylhs%2FpIdTyoFac9VWBG5JW1vMozqDWTZVyUsy5blR1nbtKv4HfNzr7e0tnavZ0H5Bc6Lfyq88wDb3KSMyFMUsfv2%2FCwDPWzV47pRTohgaAUf%2Fac5AzLqziSyPwB8P76Lf35IFHrs7zFTYShAsKhKpb9NcMAIiwh1KBEqwtmR1UthmaS11fbujR3gk5Up9giBwGDuq7zUk%2F1VVA0T8oZQkX5z0guvEfxCGVOP3UNhnFN4exQeXtkVhJ3pfumFxwowJdxFRPvyDImpL%2F%2Bgz%2FeqzDzrW0ohefAscDaE%2FcRlbK2Vt23%2BqoH03OEuklZdzNLF%2F5ciMDVP51dAX5L8JYKGIhaCzkIiSUin%2BN1cJ0OwhnT1WmahBma2SsFWm3zjiiE6zFLX5B2MheGwFmTLmsYrwQDW24T2ZarhFJlShyc%2BDDjnAj%2FwKZe3VziqQ3JSHZhj185%2BLNwkbKqjhQwEjSn6KdHgOJeEKMmVNQofVkM1%2BLE7kltX99K8CuXK8tQPodFMICA38wGOqUB1lFJCWejxv88pb%2B4BR1GPahItfHAcQSP8gLHDeiWvp20zts4DuFdBT1g5Ey8OLwsggWyGPRSZDvJ8pUHhz4TluBJrICocKH7A1eA62w1jD8IhAXYuDglKoxTs%2FoARLq4aNoRLKPZDNZ4UCdmW68nesSu%2Bxkd150CEIKZlPSSQ5pMPNzRHSNJ34fHt2k%2FgoEnv1KIKz9AoiaHd1aeoL0XAbxy%2BRnx&X-Amz-Signature=ee0a60414f2c996e84d3c9855ffc0d4be90bb2dc4add14494c6d2a701666596c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIRT5WM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9fK9xQQEfpfXG9fVXHneEmtDIIdXsD0Eyd0uzsqEijAiEA64Q%2Fj6pu7duk0Pnc%2FCHdVcYXR3%2BDbIn3NqfoKN5Mz%2FgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTVIWAsME7l657AlSrcA%2BAccxsNd%2FLX%2FGKI6yNjSspk75v95zXTTW69j2ndKDeSC9iOdx2Tp7YjI6XsBZedu%2FWPzmTsHR23QGgCQWUiUfl3CYLnBb0KIJLvP8wI0rgTEA97WoDYxNBwtQD50ylhs%2FpIdTyoFac9VWBG5JW1vMozqDWTZVyUsy5blR1nbtKv4HfNzr7e0tnavZ0H5Bc6Lfyq88wDb3KSMyFMUsfv2%2FCwDPWzV47pRTohgaAUf%2Fac5AzLqziSyPwB8P76Lf35IFHrs7zFTYShAsKhKpb9NcMAIiwh1KBEqwtmR1UthmaS11fbujR3gk5Up9giBwGDuq7zUk%2F1VVA0T8oZQkX5z0guvEfxCGVOP3UNhnFN4exQeXtkVhJ3pfumFxwowJdxFRPvyDImpL%2F%2Bgz%2FeqzDzrW0ohefAscDaE%2FcRlbK2Vt23%2BqoH03OEuklZdzNLF%2F5ciMDVP51dAX5L8JYKGIhaCzkIiSUin%2BN1cJ0OwhnT1WmahBma2SsFWm3zjiiE6zFLX5B2MheGwFmTLmsYrwQDW24T2ZarhFJlShyc%2BDDjnAj%2FwKZe3VziqQ3JSHZhj185%2BLNwkbKqjhQwEjSn6KdHgOJeEKMmVNQofVkM1%2BLE7kltX99K8CuXK8tQPodFMICA38wGOqUB1lFJCWejxv88pb%2B4BR1GPahItfHAcQSP8gLHDeiWvp20zts4DuFdBT1g5Ey8OLwsggWyGPRSZDvJ8pUHhz4TluBJrICocKH7A1eA62w1jD8IhAXYuDglKoxTs%2FoARLq4aNoRLKPZDNZ4UCdmW68nesSu%2Bxkd150CEIKZlPSSQ5pMPNzRHSNJ34fHt2k%2FgoEnv1KIKz9AoiaHd1aeoL0XAbxy%2BRnx&X-Amz-Signature=1556d69e8036e88d0a875d65c4767f0e4067b97201f40754ae7005dfd852d0c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIRT5WM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9fK9xQQEfpfXG9fVXHneEmtDIIdXsD0Eyd0uzsqEijAiEA64Q%2Fj6pu7duk0Pnc%2FCHdVcYXR3%2BDbIn3NqfoKN5Mz%2FgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTVIWAsME7l657AlSrcA%2BAccxsNd%2FLX%2FGKI6yNjSspk75v95zXTTW69j2ndKDeSC9iOdx2Tp7YjI6XsBZedu%2FWPzmTsHR23QGgCQWUiUfl3CYLnBb0KIJLvP8wI0rgTEA97WoDYxNBwtQD50ylhs%2FpIdTyoFac9VWBG5JW1vMozqDWTZVyUsy5blR1nbtKv4HfNzr7e0tnavZ0H5Bc6Lfyq88wDb3KSMyFMUsfv2%2FCwDPWzV47pRTohgaAUf%2Fac5AzLqziSyPwB8P76Lf35IFHrs7zFTYShAsKhKpb9NcMAIiwh1KBEqwtmR1UthmaS11fbujR3gk5Up9giBwGDuq7zUk%2F1VVA0T8oZQkX5z0guvEfxCGVOP3UNhnFN4exQeXtkVhJ3pfumFxwowJdxFRPvyDImpL%2F%2Bgz%2FeqzDzrW0ohefAscDaE%2FcRlbK2Vt23%2BqoH03OEuklZdzNLF%2F5ciMDVP51dAX5L8JYKGIhaCzkIiSUin%2BN1cJ0OwhnT1WmahBma2SsFWm3zjiiE6zFLX5B2MheGwFmTLmsYrwQDW24T2ZarhFJlShyc%2BDDjnAj%2FwKZe3VziqQ3JSHZhj185%2BLNwkbKqjhQwEjSn6KdHgOJeEKMmVNQofVkM1%2BLE7kltX99K8CuXK8tQPodFMICA38wGOqUB1lFJCWejxv88pb%2B4BR1GPahItfHAcQSP8gLHDeiWvp20zts4DuFdBT1g5Ey8OLwsggWyGPRSZDvJ8pUHhz4TluBJrICocKH7A1eA62w1jD8IhAXYuDglKoxTs%2FoARLq4aNoRLKPZDNZ4UCdmW68nesSu%2Bxkd150CEIKZlPSSQ5pMPNzRHSNJ34fHt2k%2FgoEnv1KIKz9AoiaHd1aeoL0XAbxy%2BRnx&X-Amz-Signature=6dd674bf626477dd09b35b3dab12255fbb0997e04769d708be3fe78419672229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIRT5WM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9fK9xQQEfpfXG9fVXHneEmtDIIdXsD0Eyd0uzsqEijAiEA64Q%2Fj6pu7duk0Pnc%2FCHdVcYXR3%2BDbIn3NqfoKN5Mz%2FgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTVIWAsME7l657AlSrcA%2BAccxsNd%2FLX%2FGKI6yNjSspk75v95zXTTW69j2ndKDeSC9iOdx2Tp7YjI6XsBZedu%2FWPzmTsHR23QGgCQWUiUfl3CYLnBb0KIJLvP8wI0rgTEA97WoDYxNBwtQD50ylhs%2FpIdTyoFac9VWBG5JW1vMozqDWTZVyUsy5blR1nbtKv4HfNzr7e0tnavZ0H5Bc6Lfyq88wDb3KSMyFMUsfv2%2FCwDPWzV47pRTohgaAUf%2Fac5AzLqziSyPwB8P76Lf35IFHrs7zFTYShAsKhKpb9NcMAIiwh1KBEqwtmR1UthmaS11fbujR3gk5Up9giBwGDuq7zUk%2F1VVA0T8oZQkX5z0guvEfxCGVOP3UNhnFN4exQeXtkVhJ3pfumFxwowJdxFRPvyDImpL%2F%2Bgz%2FeqzDzrW0ohefAscDaE%2FcRlbK2Vt23%2BqoH03OEuklZdzNLF%2F5ciMDVP51dAX5L8JYKGIhaCzkIiSUin%2BN1cJ0OwhnT1WmahBma2SsFWm3zjiiE6zFLX5B2MheGwFmTLmsYrwQDW24T2ZarhFJlShyc%2BDDjnAj%2FwKZe3VziqQ3JSHZhj185%2BLNwkbKqjhQwEjSn6KdHgOJeEKMmVNQofVkM1%2BLE7kltX99K8CuXK8tQPodFMICA38wGOqUB1lFJCWejxv88pb%2B4BR1GPahItfHAcQSP8gLHDeiWvp20zts4DuFdBT1g5Ey8OLwsggWyGPRSZDvJ8pUHhz4TluBJrICocKH7A1eA62w1jD8IhAXYuDglKoxTs%2FoARLq4aNoRLKPZDNZ4UCdmW68nesSu%2Bxkd150CEIKZlPSSQ5pMPNzRHSNJ34fHt2k%2FgoEnv1KIKz9AoiaHd1aeoL0XAbxy%2BRnx&X-Amz-Signature=399af546db4dd4e439533224babc295ef854f1dc12d493c0e7ad8ef0d99867c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIRT5WM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9fK9xQQEfpfXG9fVXHneEmtDIIdXsD0Eyd0uzsqEijAiEA64Q%2Fj6pu7duk0Pnc%2FCHdVcYXR3%2BDbIn3NqfoKN5Mz%2FgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTVIWAsME7l657AlSrcA%2BAccxsNd%2FLX%2FGKI6yNjSspk75v95zXTTW69j2ndKDeSC9iOdx2Tp7YjI6XsBZedu%2FWPzmTsHR23QGgCQWUiUfl3CYLnBb0KIJLvP8wI0rgTEA97WoDYxNBwtQD50ylhs%2FpIdTyoFac9VWBG5JW1vMozqDWTZVyUsy5blR1nbtKv4HfNzr7e0tnavZ0H5Bc6Lfyq88wDb3KSMyFMUsfv2%2FCwDPWzV47pRTohgaAUf%2Fac5AzLqziSyPwB8P76Lf35IFHrs7zFTYShAsKhKpb9NcMAIiwh1KBEqwtmR1UthmaS11fbujR3gk5Up9giBwGDuq7zUk%2F1VVA0T8oZQkX5z0guvEfxCGVOP3UNhnFN4exQeXtkVhJ3pfumFxwowJdxFRPvyDImpL%2F%2Bgz%2FeqzDzrW0ohefAscDaE%2FcRlbK2Vt23%2BqoH03OEuklZdzNLF%2F5ciMDVP51dAX5L8JYKGIhaCzkIiSUin%2BN1cJ0OwhnT1WmahBma2SsFWm3zjiiE6zFLX5B2MheGwFmTLmsYrwQDW24T2ZarhFJlShyc%2BDDjnAj%2FwKZe3VziqQ3JSHZhj185%2BLNwkbKqjhQwEjSn6KdHgOJeEKMmVNQofVkM1%2BLE7kltX99K8CuXK8tQPodFMICA38wGOqUB1lFJCWejxv88pb%2B4BR1GPahItfHAcQSP8gLHDeiWvp20zts4DuFdBT1g5Ey8OLwsggWyGPRSZDvJ8pUHhz4TluBJrICocKH7A1eA62w1jD8IhAXYuDglKoxTs%2FoARLq4aNoRLKPZDNZ4UCdmW68nesSu%2Bxkd150CEIKZlPSSQ5pMPNzRHSNJ34fHt2k%2FgoEnv1KIKz9AoiaHd1aeoL0XAbxy%2BRnx&X-Amz-Signature=8186ed635a9c1f1ae981f002ee5c38521b0275b72c9657e122ca46c4f5b64fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIRT5WM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9fK9xQQEfpfXG9fVXHneEmtDIIdXsD0Eyd0uzsqEijAiEA64Q%2Fj6pu7duk0Pnc%2FCHdVcYXR3%2BDbIn3NqfoKN5Mz%2FgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTVIWAsME7l657AlSrcA%2BAccxsNd%2FLX%2FGKI6yNjSspk75v95zXTTW69j2ndKDeSC9iOdx2Tp7YjI6XsBZedu%2FWPzmTsHR23QGgCQWUiUfl3CYLnBb0KIJLvP8wI0rgTEA97WoDYxNBwtQD50ylhs%2FpIdTyoFac9VWBG5JW1vMozqDWTZVyUsy5blR1nbtKv4HfNzr7e0tnavZ0H5Bc6Lfyq88wDb3KSMyFMUsfv2%2FCwDPWzV47pRTohgaAUf%2Fac5AzLqziSyPwB8P76Lf35IFHrs7zFTYShAsKhKpb9NcMAIiwh1KBEqwtmR1UthmaS11fbujR3gk5Up9giBwGDuq7zUk%2F1VVA0T8oZQkX5z0guvEfxCGVOP3UNhnFN4exQeXtkVhJ3pfumFxwowJdxFRPvyDImpL%2F%2Bgz%2FeqzDzrW0ohefAscDaE%2FcRlbK2Vt23%2BqoH03OEuklZdzNLF%2F5ciMDVP51dAX5L8JYKGIhaCzkIiSUin%2BN1cJ0OwhnT1WmahBma2SsFWm3zjiiE6zFLX5B2MheGwFmTLmsYrwQDW24T2ZarhFJlShyc%2BDDjnAj%2FwKZe3VziqQ3JSHZhj185%2BLNwkbKqjhQwEjSn6KdHgOJeEKMmVNQofVkM1%2BLE7kltX99K8CuXK8tQPodFMICA38wGOqUB1lFJCWejxv88pb%2B4BR1GPahItfHAcQSP8gLHDeiWvp20zts4DuFdBT1g5Ey8OLwsggWyGPRSZDvJ8pUHhz4TluBJrICocKH7A1eA62w1jD8IhAXYuDglKoxTs%2FoARLq4aNoRLKPZDNZ4UCdmW68nesSu%2Bxkd150CEIKZlPSSQ5pMPNzRHSNJ34fHt2k%2FgoEnv1KIKz9AoiaHd1aeoL0XAbxy%2BRnx&X-Amz-Signature=41f6ba3ff5ec38e672bccb964f04a1e73699c38ea21a12b4ff3cfc1e9085face&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIRT5WM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9fK9xQQEfpfXG9fVXHneEmtDIIdXsD0Eyd0uzsqEijAiEA64Q%2Fj6pu7duk0Pnc%2FCHdVcYXR3%2BDbIn3NqfoKN5Mz%2FgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTVIWAsME7l657AlSrcA%2BAccxsNd%2FLX%2FGKI6yNjSspk75v95zXTTW69j2ndKDeSC9iOdx2Tp7YjI6XsBZedu%2FWPzmTsHR23QGgCQWUiUfl3CYLnBb0KIJLvP8wI0rgTEA97WoDYxNBwtQD50ylhs%2FpIdTyoFac9VWBG5JW1vMozqDWTZVyUsy5blR1nbtKv4HfNzr7e0tnavZ0H5Bc6Lfyq88wDb3KSMyFMUsfv2%2FCwDPWzV47pRTohgaAUf%2Fac5AzLqziSyPwB8P76Lf35IFHrs7zFTYShAsKhKpb9NcMAIiwh1KBEqwtmR1UthmaS11fbujR3gk5Up9giBwGDuq7zUk%2F1VVA0T8oZQkX5z0guvEfxCGVOP3UNhnFN4exQeXtkVhJ3pfumFxwowJdxFRPvyDImpL%2F%2Bgz%2FeqzDzrW0ohefAscDaE%2FcRlbK2Vt23%2BqoH03OEuklZdzNLF%2F5ciMDVP51dAX5L8JYKGIhaCzkIiSUin%2BN1cJ0OwhnT1WmahBma2SsFWm3zjiiE6zFLX5B2MheGwFmTLmsYrwQDW24T2ZarhFJlShyc%2BDDjnAj%2FwKZe3VziqQ3JSHZhj185%2BLNwkbKqjhQwEjSn6KdHgOJeEKMmVNQofVkM1%2BLE7kltX99K8CuXK8tQPodFMICA38wGOqUB1lFJCWejxv88pb%2B4BR1GPahItfHAcQSP8gLHDeiWvp20zts4DuFdBT1g5Ey8OLwsggWyGPRSZDvJ8pUHhz4TluBJrICocKH7A1eA62w1jD8IhAXYuDglKoxTs%2FoARLq4aNoRLKPZDNZ4UCdmW68nesSu%2Bxkd150CEIKZlPSSQ5pMPNzRHSNJ34fHt2k%2FgoEnv1KIKz9AoiaHd1aeoL0XAbxy%2BRnx&X-Amz-Signature=3a88af0c8204198e5ad5f65158848eede125eefd165a734bee4a537ccb3af8f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z5S54FX%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsHbHlxtG2NQ0ksHGyGxkuYNVpjOOdPJYVPtR39lfZqAiATmW6NON1e4Agd93JssZOFeA4mUck82RAhpjsRJN2mwiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMokCS87vlq6EF5boBKtwDKgKRISsBcOumWbm%2BYLw2GcWJZqD0Hq949UdkxKUe6eerOCXfexh%2B0FKcwcwubYB0s1R3w5jZMhpp8gF9cEqaBt1WYKoWbsqNthooGm2rbYZBVyNbIHXxmOmc07hK5vI1s1QsGebHSqpZllnmQVo%2FGF%2BNW6%2FPGEyRvXFQBbCtPN0ve700pIXetqt4jpQAMRvOeS6fo3f47f77liAPVb1BR9vIjhxg9RofNV0yGi9bQuaGaOoyEAYDcr2kdBV0DfYd3v1DQrJL9ZMPPFAhJVm63bOXV6DvvjdoGII4AmjXD3Zz%2F3ErimbMSqWVlJd4XW3Vz%2FfKD11v3h7msiR3rJdOWFfRc7VJvdnMpUyPrgjRb8UTPFG1r6A0L7Rq7NW5dX%2Bm5fl8VBHXt%2B4A3etdQpm%2BfNSOSLbSgE9ZB%2FDMO5O1NjE5yfXJ7pn9%2BtdAbo%2BENBEwZLaEPjUuhkJOQDPCUlkmOd71JsapnN%2BsQ6kCarYj17q3q7%2F%2B78RppWQ2Pr05EFVU92OOLax0EWuwDUmRR77HdDvhm3qRwUeQURXXcVsx4hFkN1sphHkqemNp6y0WXqpywlZdadYlg0UiAQE6KL9%2FlCNmXUIVvsfRPzfyM4zbyfD5c5yvonaeeGKviZow5%2BfezAY6pgH4CCQGMyg95U9cN1lmwU8saUHIKc5jaFrygFCz5G46Du1eaYvYd1K3fvTZtR18TVw0cWKQH8L3F4szHVD0G%2FWbqfwW4GdNdVQWPFAr0kmSTukdUpyX1ZSwBH3oacwpSQN68unCW1GuwCoML47wrjdiIhCreNwmZkuBX1vhoylvml3bwZQyw6J4uXWxAyMG0X2OBfC0JW0xD0U66lbQ7%2FVP2agZLRXk&X-Amz-Signature=512b284543326acdeb33fa6271686d27001dd44116e82fa55444408213d32117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYHSF3G%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7y%2BYT787xcSQ7C3Ai3CmEZ1jskcrywpHjX9Kvr2YqXwIgR93AA6Z0MjZSQX8ETbZ6Fpk8Tzk108HrssrrIuXdY34qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrX8lp3LCnK7AEiCyrcAyVm4oFQMs3df1ab6BKUmZB5QImT35TJr7SmJl9RwKf0o0zy3a6UikdYdPgSL%2BO5OahHghDDF8t%2FPXxpUanBXL1iJLaNmJPRDcwmNPypn%2FZPCq0CqDJv0RYtljqJosh3V6A8V3B%2BM9tmGUmbY5lUA1ckPgSxcEiU4PuFa9cMWRy5Y7SflHCJDKMs6XhneLCeK3KhPZAS9ZF8rmCB45cnB%2FOztKP%2B%2FQqOAZqwQGfdhrpd%2FksXpxE7NOlGLcUaBE8OsULNTRnycayBPs9HADmFSMvgok0XZFIUKDRXug1JhTsCXqySzXd9XoPFqYPOtZ0RmgkqPKPQH6Lke%2FLZV2RmqTWixx1XP6%2BtIK0VqYQqvxCdGeHvOTjWMNl%2F5FPtrfVr3b74%2BS3%2FznS6a49w%2BT2iB6IcspD3vq8E%2FdRwmmokGt4OpwQxa6M29AbfwsXcCfOSWoyX7saXHyGsbCt5xW6RtzDfajaN%2B3eHeZGHSRXi5MFxdTOlCEhHVVCHWmR546wcnbVlGnklyylshSQwQLtgydzMxlgR0VlD4GQ5Xu3%2FcFuju8Q6iHw7OFcI2eVqu00VXRIgAhlSTx67sMCWTCQea4dQiyhy7qhW618jVMnuozVmv%2BzHXBSOvRFSpbFcML%2Fo3swGOqUBj312xQq1VTQ3Avbi3QYt0EzFQ%2Fjjk2vJu2CaNifb73fSKFhzq59wsyub7BmjCBqY%2FcXyBh18oEga8yrvx%2BxeSYSj2Pea8hVNXvL5Ruir%2BLaQsYmOmYZ%2BZuh%2BVWpHd2%2BireBiJyxGa1zlze7GiFLePWVXUqmDVPs6ajviyr%2FgJh3LxMYDsTX2f1cBcwwogvL9oXcFtCWPopxYGF9jthwXWWGouhCU&X-Amz-Signature=66d7b37fe5c6e9c051522f5ec578089cef8edee2e0ea3dd3b796572fbe9ae907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYHSF3G%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7y%2BYT787xcSQ7C3Ai3CmEZ1jskcrywpHjX9Kvr2YqXwIgR93AA6Z0MjZSQX8ETbZ6Fpk8Tzk108HrssrrIuXdY34qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrX8lp3LCnK7AEiCyrcAyVm4oFQMs3df1ab6BKUmZB5QImT35TJr7SmJl9RwKf0o0zy3a6UikdYdPgSL%2BO5OahHghDDF8t%2FPXxpUanBXL1iJLaNmJPRDcwmNPypn%2FZPCq0CqDJv0RYtljqJosh3V6A8V3B%2BM9tmGUmbY5lUA1ckPgSxcEiU4PuFa9cMWRy5Y7SflHCJDKMs6XhneLCeK3KhPZAS9ZF8rmCB45cnB%2FOztKP%2B%2FQqOAZqwQGfdhrpd%2FksXpxE7NOlGLcUaBE8OsULNTRnycayBPs9HADmFSMvgok0XZFIUKDRXug1JhTsCXqySzXd9XoPFqYPOtZ0RmgkqPKPQH6Lke%2FLZV2RmqTWixx1XP6%2BtIK0VqYQqvxCdGeHvOTjWMNl%2F5FPtrfVr3b74%2BS3%2FznS6a49w%2BT2iB6IcspD3vq8E%2FdRwmmokGt4OpwQxa6M29AbfwsXcCfOSWoyX7saXHyGsbCt5xW6RtzDfajaN%2B3eHeZGHSRXi5MFxdTOlCEhHVVCHWmR546wcnbVlGnklyylshSQwQLtgydzMxlgR0VlD4GQ5Xu3%2FcFuju8Q6iHw7OFcI2eVqu00VXRIgAhlSTx67sMCWTCQea4dQiyhy7qhW618jVMnuozVmv%2BzHXBSOvRFSpbFcML%2Fo3swGOqUBj312xQq1VTQ3Avbi3QYt0EzFQ%2Fjjk2vJu2CaNifb73fSKFhzq59wsyub7BmjCBqY%2FcXyBh18oEga8yrvx%2BxeSYSj2Pea8hVNXvL5Ruir%2BLaQsYmOmYZ%2BZuh%2BVWpHd2%2BireBiJyxGa1zlze7GiFLePWVXUqmDVPs6ajviyr%2FgJh3LxMYDsTX2f1cBcwwogvL9oXcFtCWPopxYGF9jthwXWWGouhCU&X-Amz-Signature=6a5c55c6a93044d180f595fa588f1c78ac890632a7dc860bd474e07540b0df4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYHSF3G%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7y%2BYT787xcSQ7C3Ai3CmEZ1jskcrywpHjX9Kvr2YqXwIgR93AA6Z0MjZSQX8ETbZ6Fpk8Tzk108HrssrrIuXdY34qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrX8lp3LCnK7AEiCyrcAyVm4oFQMs3df1ab6BKUmZB5QImT35TJr7SmJl9RwKf0o0zy3a6UikdYdPgSL%2BO5OahHghDDF8t%2FPXxpUanBXL1iJLaNmJPRDcwmNPypn%2FZPCq0CqDJv0RYtljqJosh3V6A8V3B%2BM9tmGUmbY5lUA1ckPgSxcEiU4PuFa9cMWRy5Y7SflHCJDKMs6XhneLCeK3KhPZAS9ZF8rmCB45cnB%2FOztKP%2B%2FQqOAZqwQGfdhrpd%2FksXpxE7NOlGLcUaBE8OsULNTRnycayBPs9HADmFSMvgok0XZFIUKDRXug1JhTsCXqySzXd9XoPFqYPOtZ0RmgkqPKPQH6Lke%2FLZV2RmqTWixx1XP6%2BtIK0VqYQqvxCdGeHvOTjWMNl%2F5FPtrfVr3b74%2BS3%2FznS6a49w%2BT2iB6IcspD3vq8E%2FdRwmmokGt4OpwQxa6M29AbfwsXcCfOSWoyX7saXHyGsbCt5xW6RtzDfajaN%2B3eHeZGHSRXi5MFxdTOlCEhHVVCHWmR546wcnbVlGnklyylshSQwQLtgydzMxlgR0VlD4GQ5Xu3%2FcFuju8Q6iHw7OFcI2eVqu00VXRIgAhlSTx67sMCWTCQea4dQiyhy7qhW618jVMnuozVmv%2BzHXBSOvRFSpbFcML%2Fo3swGOqUBj312xQq1VTQ3Avbi3QYt0EzFQ%2Fjjk2vJu2CaNifb73fSKFhzq59wsyub7BmjCBqY%2FcXyBh18oEga8yrvx%2BxeSYSj2Pea8hVNXvL5Ruir%2BLaQsYmOmYZ%2BZuh%2BVWpHd2%2BireBiJyxGa1zlze7GiFLePWVXUqmDVPs6ajviyr%2FgJh3LxMYDsTX2f1cBcwwogvL9oXcFtCWPopxYGF9jthwXWWGouhCU&X-Amz-Signature=27e4dd0a419a01cd1bd4b9152cfc872f0b9f90e61e5a80f99353342250ea3ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYHSF3G%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7y%2BYT787xcSQ7C3Ai3CmEZ1jskcrywpHjX9Kvr2YqXwIgR93AA6Z0MjZSQX8ETbZ6Fpk8Tzk108HrssrrIuXdY34qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrX8lp3LCnK7AEiCyrcAyVm4oFQMs3df1ab6BKUmZB5QImT35TJr7SmJl9RwKf0o0zy3a6UikdYdPgSL%2BO5OahHghDDF8t%2FPXxpUanBXL1iJLaNmJPRDcwmNPypn%2FZPCq0CqDJv0RYtljqJosh3V6A8V3B%2BM9tmGUmbY5lUA1ckPgSxcEiU4PuFa9cMWRy5Y7SflHCJDKMs6XhneLCeK3KhPZAS9ZF8rmCB45cnB%2FOztKP%2B%2FQqOAZqwQGfdhrpd%2FksXpxE7NOlGLcUaBE8OsULNTRnycayBPs9HADmFSMvgok0XZFIUKDRXug1JhTsCXqySzXd9XoPFqYPOtZ0RmgkqPKPQH6Lke%2FLZV2RmqTWixx1XP6%2BtIK0VqYQqvxCdGeHvOTjWMNl%2F5FPtrfVr3b74%2BS3%2FznS6a49w%2BT2iB6IcspD3vq8E%2FdRwmmokGt4OpwQxa6M29AbfwsXcCfOSWoyX7saXHyGsbCt5xW6RtzDfajaN%2B3eHeZGHSRXi5MFxdTOlCEhHVVCHWmR546wcnbVlGnklyylshSQwQLtgydzMxlgR0VlD4GQ5Xu3%2FcFuju8Q6iHw7OFcI2eVqu00VXRIgAhlSTx67sMCWTCQea4dQiyhy7qhW618jVMnuozVmv%2BzHXBSOvRFSpbFcML%2Fo3swGOqUBj312xQq1VTQ3Avbi3QYt0EzFQ%2Fjjk2vJu2CaNifb73fSKFhzq59wsyub7BmjCBqY%2FcXyBh18oEga8yrvx%2BxeSYSj2Pea8hVNXvL5Ruir%2BLaQsYmOmYZ%2BZuh%2BVWpHd2%2BireBiJyxGa1zlze7GiFLePWVXUqmDVPs6ajviyr%2FgJh3LxMYDsTX2f1cBcwwogvL9oXcFtCWPopxYGF9jthwXWWGouhCU&X-Amz-Signature=201a9641878765a28d40f54c937c8074bbf317c50729b10e99ffe6c7c45ac9d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYHSF3G%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7y%2BYT787xcSQ7C3Ai3CmEZ1jskcrywpHjX9Kvr2YqXwIgR93AA6Z0MjZSQX8ETbZ6Fpk8Tzk108HrssrrIuXdY34qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrX8lp3LCnK7AEiCyrcAyVm4oFQMs3df1ab6BKUmZB5QImT35TJr7SmJl9RwKf0o0zy3a6UikdYdPgSL%2BO5OahHghDDF8t%2FPXxpUanBXL1iJLaNmJPRDcwmNPypn%2FZPCq0CqDJv0RYtljqJosh3V6A8V3B%2BM9tmGUmbY5lUA1ckPgSxcEiU4PuFa9cMWRy5Y7SflHCJDKMs6XhneLCeK3KhPZAS9ZF8rmCB45cnB%2FOztKP%2B%2FQqOAZqwQGfdhrpd%2FksXpxE7NOlGLcUaBE8OsULNTRnycayBPs9HADmFSMvgok0XZFIUKDRXug1JhTsCXqySzXd9XoPFqYPOtZ0RmgkqPKPQH6Lke%2FLZV2RmqTWixx1XP6%2BtIK0VqYQqvxCdGeHvOTjWMNl%2F5FPtrfVr3b74%2BS3%2FznS6a49w%2BT2iB6IcspD3vq8E%2FdRwmmokGt4OpwQxa6M29AbfwsXcCfOSWoyX7saXHyGsbCt5xW6RtzDfajaN%2B3eHeZGHSRXi5MFxdTOlCEhHVVCHWmR546wcnbVlGnklyylshSQwQLtgydzMxlgR0VlD4GQ5Xu3%2FcFuju8Q6iHw7OFcI2eVqu00VXRIgAhlSTx67sMCWTCQea4dQiyhy7qhW618jVMnuozVmv%2BzHXBSOvRFSpbFcML%2Fo3swGOqUBj312xQq1VTQ3Avbi3QYt0EzFQ%2Fjjk2vJu2CaNifb73fSKFhzq59wsyub7BmjCBqY%2FcXyBh18oEga8yrvx%2BxeSYSj2Pea8hVNXvL5Ruir%2BLaQsYmOmYZ%2BZuh%2BVWpHd2%2BireBiJyxGa1zlze7GiFLePWVXUqmDVPs6ajviyr%2FgJh3LxMYDsTX2f1cBcwwogvL9oXcFtCWPopxYGF9jthwXWWGouhCU&X-Amz-Signature=ddc53d52304d06ce168fb11cdb0ef9f47bae18b447d9f333722c686f2f0f2e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYHSF3G%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7y%2BYT787xcSQ7C3Ai3CmEZ1jskcrywpHjX9Kvr2YqXwIgR93AA6Z0MjZSQX8ETbZ6Fpk8Tzk108HrssrrIuXdY34qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrX8lp3LCnK7AEiCyrcAyVm4oFQMs3df1ab6BKUmZB5QImT35TJr7SmJl9RwKf0o0zy3a6UikdYdPgSL%2BO5OahHghDDF8t%2FPXxpUanBXL1iJLaNmJPRDcwmNPypn%2FZPCq0CqDJv0RYtljqJosh3V6A8V3B%2BM9tmGUmbY5lUA1ckPgSxcEiU4PuFa9cMWRy5Y7SflHCJDKMs6XhneLCeK3KhPZAS9ZF8rmCB45cnB%2FOztKP%2B%2FQqOAZqwQGfdhrpd%2FksXpxE7NOlGLcUaBE8OsULNTRnycayBPs9HADmFSMvgok0XZFIUKDRXug1JhTsCXqySzXd9XoPFqYPOtZ0RmgkqPKPQH6Lke%2FLZV2RmqTWixx1XP6%2BtIK0VqYQqvxCdGeHvOTjWMNl%2F5FPtrfVr3b74%2BS3%2FznS6a49w%2BT2iB6IcspD3vq8E%2FdRwmmokGt4OpwQxa6M29AbfwsXcCfOSWoyX7saXHyGsbCt5xW6RtzDfajaN%2B3eHeZGHSRXi5MFxdTOlCEhHVVCHWmR546wcnbVlGnklyylshSQwQLtgydzMxlgR0VlD4GQ5Xu3%2FcFuju8Q6iHw7OFcI2eVqu00VXRIgAhlSTx67sMCWTCQea4dQiyhy7qhW618jVMnuozVmv%2BzHXBSOvRFSpbFcML%2Fo3swGOqUBj312xQq1VTQ3Avbi3QYt0EzFQ%2Fjjk2vJu2CaNifb73fSKFhzq59wsyub7BmjCBqY%2FcXyBh18oEga8yrvx%2BxeSYSj2Pea8hVNXvL5Ruir%2BLaQsYmOmYZ%2BZuh%2BVWpHd2%2BireBiJyxGa1zlze7GiFLePWVXUqmDVPs6ajviyr%2FgJh3LxMYDsTX2f1cBcwwogvL9oXcFtCWPopxYGF9jthwXWWGouhCU&X-Amz-Signature=8feb534ae688907e1c1a9ae4d7e6538d8059028c534b3aedff2a78aa0ce4d8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYHSF3G%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7y%2BYT787xcSQ7C3Ai3CmEZ1jskcrywpHjX9Kvr2YqXwIgR93AA6Z0MjZSQX8ETbZ6Fpk8Tzk108HrssrrIuXdY34qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrX8lp3LCnK7AEiCyrcAyVm4oFQMs3df1ab6BKUmZB5QImT35TJr7SmJl9RwKf0o0zy3a6UikdYdPgSL%2BO5OahHghDDF8t%2FPXxpUanBXL1iJLaNmJPRDcwmNPypn%2FZPCq0CqDJv0RYtljqJosh3V6A8V3B%2BM9tmGUmbY5lUA1ckPgSxcEiU4PuFa9cMWRy5Y7SflHCJDKMs6XhneLCeK3KhPZAS9ZF8rmCB45cnB%2FOztKP%2B%2FQqOAZqwQGfdhrpd%2FksXpxE7NOlGLcUaBE8OsULNTRnycayBPs9HADmFSMvgok0XZFIUKDRXug1JhTsCXqySzXd9XoPFqYPOtZ0RmgkqPKPQH6Lke%2FLZV2RmqTWixx1XP6%2BtIK0VqYQqvxCdGeHvOTjWMNl%2F5FPtrfVr3b74%2BS3%2FznS6a49w%2BT2iB6IcspD3vq8E%2FdRwmmokGt4OpwQxa6M29AbfwsXcCfOSWoyX7saXHyGsbCt5xW6RtzDfajaN%2B3eHeZGHSRXi5MFxdTOlCEhHVVCHWmR546wcnbVlGnklyylshSQwQLtgydzMxlgR0VlD4GQ5Xu3%2FcFuju8Q6iHw7OFcI2eVqu00VXRIgAhlSTx67sMCWTCQea4dQiyhy7qhW618jVMnuozVmv%2BzHXBSOvRFSpbFcML%2Fo3swGOqUBj312xQq1VTQ3Avbi3QYt0EzFQ%2Fjjk2vJu2CaNifb73fSKFhzq59wsyub7BmjCBqY%2FcXyBh18oEga8yrvx%2BxeSYSj2Pea8hVNXvL5Ruir%2BLaQsYmOmYZ%2BZuh%2BVWpHd2%2BireBiJyxGa1zlze7GiFLePWVXUqmDVPs6ajviyr%2FgJh3LxMYDsTX2f1cBcwwogvL9oXcFtCWPopxYGF9jthwXWWGouhCU&X-Amz-Signature=564c74a3bb83b5903dacd0be783dec720802dd6e31e9e61998738a6f471ef28f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYHSF3G%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7y%2BYT787xcSQ7C3Ai3CmEZ1jskcrywpHjX9Kvr2YqXwIgR93AA6Z0MjZSQX8ETbZ6Fpk8Tzk108HrssrrIuXdY34qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrX8lp3LCnK7AEiCyrcAyVm4oFQMs3df1ab6BKUmZB5QImT35TJr7SmJl9RwKf0o0zy3a6UikdYdPgSL%2BO5OahHghDDF8t%2FPXxpUanBXL1iJLaNmJPRDcwmNPypn%2FZPCq0CqDJv0RYtljqJosh3V6A8V3B%2BM9tmGUmbY5lUA1ckPgSxcEiU4PuFa9cMWRy5Y7SflHCJDKMs6XhneLCeK3KhPZAS9ZF8rmCB45cnB%2FOztKP%2B%2FQqOAZqwQGfdhrpd%2FksXpxE7NOlGLcUaBE8OsULNTRnycayBPs9HADmFSMvgok0XZFIUKDRXug1JhTsCXqySzXd9XoPFqYPOtZ0RmgkqPKPQH6Lke%2FLZV2RmqTWixx1XP6%2BtIK0VqYQqvxCdGeHvOTjWMNl%2F5FPtrfVr3b74%2BS3%2FznS6a49w%2BT2iB6IcspD3vq8E%2FdRwmmokGt4OpwQxa6M29AbfwsXcCfOSWoyX7saXHyGsbCt5xW6RtzDfajaN%2B3eHeZGHSRXi5MFxdTOlCEhHVVCHWmR546wcnbVlGnklyylshSQwQLtgydzMxlgR0VlD4GQ5Xu3%2FcFuju8Q6iHw7OFcI2eVqu00VXRIgAhlSTx67sMCWTCQea4dQiyhy7qhW618jVMnuozVmv%2BzHXBSOvRFSpbFcML%2Fo3swGOqUBj312xQq1VTQ3Avbi3QYt0EzFQ%2Fjjk2vJu2CaNifb73fSKFhzq59wsyub7BmjCBqY%2FcXyBh18oEga8yrvx%2BxeSYSj2Pea8hVNXvL5Ruir%2BLaQsYmOmYZ%2BZuh%2BVWpHd2%2BireBiJyxGa1zlze7GiFLePWVXUqmDVPs6ajviyr%2FgJh3LxMYDsTX2f1cBcwwogvL9oXcFtCWPopxYGF9jthwXWWGouhCU&X-Amz-Signature=ad3b271a75004b2c44c7e6751fb664c77d26b12186256863bd432b1f951b46dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYHSF3G%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7y%2BYT787xcSQ7C3Ai3CmEZ1jskcrywpHjX9Kvr2YqXwIgR93AA6Z0MjZSQX8ETbZ6Fpk8Tzk108HrssrrIuXdY34qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrX8lp3LCnK7AEiCyrcAyVm4oFQMs3df1ab6BKUmZB5QImT35TJr7SmJl9RwKf0o0zy3a6UikdYdPgSL%2BO5OahHghDDF8t%2FPXxpUanBXL1iJLaNmJPRDcwmNPypn%2FZPCq0CqDJv0RYtljqJosh3V6A8V3B%2BM9tmGUmbY5lUA1ckPgSxcEiU4PuFa9cMWRy5Y7SflHCJDKMs6XhneLCeK3KhPZAS9ZF8rmCB45cnB%2FOztKP%2B%2FQqOAZqwQGfdhrpd%2FksXpxE7NOlGLcUaBE8OsULNTRnycayBPs9HADmFSMvgok0XZFIUKDRXug1JhTsCXqySzXd9XoPFqYPOtZ0RmgkqPKPQH6Lke%2FLZV2RmqTWixx1XP6%2BtIK0VqYQqvxCdGeHvOTjWMNl%2F5FPtrfVr3b74%2BS3%2FznS6a49w%2BT2iB6IcspD3vq8E%2FdRwmmokGt4OpwQxa6M29AbfwsXcCfOSWoyX7saXHyGsbCt5xW6RtzDfajaN%2B3eHeZGHSRXi5MFxdTOlCEhHVVCHWmR546wcnbVlGnklyylshSQwQLtgydzMxlgR0VlD4GQ5Xu3%2FcFuju8Q6iHw7OFcI2eVqu00VXRIgAhlSTx67sMCWTCQea4dQiyhy7qhW618jVMnuozVmv%2BzHXBSOvRFSpbFcML%2Fo3swGOqUBj312xQq1VTQ3Avbi3QYt0EzFQ%2Fjjk2vJu2CaNifb73fSKFhzq59wsyub7BmjCBqY%2FcXyBh18oEga8yrvx%2BxeSYSj2Pea8hVNXvL5Ruir%2BLaQsYmOmYZ%2BZuh%2BVWpHd2%2BireBiJyxGa1zlze7GiFLePWVXUqmDVPs6ajviyr%2FgJh3LxMYDsTX2f1cBcwwogvL9oXcFtCWPopxYGF9jthwXWWGouhCU&X-Amz-Signature=dd4675567e1fad7bd84e5225360d7b0b490ca99aea7d16ad62dbbae9a0c82f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
