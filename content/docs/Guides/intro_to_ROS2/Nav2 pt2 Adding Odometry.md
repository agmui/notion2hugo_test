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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMPCPD5R%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCDPqy5UR4C7gbRO5ywS3AWCZvKlTGyZLLL4prpBh%2FSOgIgUWhKWTr5cjWAdUt5easDGVnmx1s0rL8BuYv%2B8UtKfmcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOKMk1AWJqX7L%2Bvf4CrcAzMCC4OLFwHGaTHbWm7rQTsntq3GH3WST6T%2F5w50vRrysBxTS6XrTsSp06OHWcr2l9TkzVCms%2BIGD8IvQjkUAInPCAyaQMwbfnt21WvvP%2FnoqncVHcGAomWr8LkOR3x1GVH%2BYmpvXr%2BMP0yP9jumsdBdbpIf9XTlbPKacFJY9sLvmT63%2Fq28kWb7z6eCGVTjCTZV3D5Y4UAHUOIb3%2BwhvtgSOUQ2SVFmiNGsrx94ZcWa6qPTDr9Zhwub0B5MHyjOBQ%2Bnfl9JofMSKKOJ1Yxu1CouHszZXh7uEPbIk9ZhUld3fytgj6zK2XYPmI2wGAasIMWgpq%2Fs1iFjOt%2BS4nX4lsy3q2Upl4hLUo4O1b1xws2wYK9kDXzYW5kw1bcdkUWhoLCA6UzPzT2UoEkgBMH7S9%2BPU6bfrHGwp59A5eltAo1RnwsHEo2ZGHkrYwy4lRuL1sITXoXWLNtwT7QfKQkZPrvfvo1vX06yViAhhZlQddu%2B7sfnZguKHdaE3vsb%2Ffz92aEeGO7ANQ%2FF4nCdaJ9dwRcXNo22U%2BsCzDCfPQ%2BMNL77siFYMFis%2Bv%2FWC6gga8yC6%2BMXRbQzGS2iraRju%2FKqWWR6DPDgjj%2BiMtDWlsia6YMmO%2FxQJ7RqJoo4L%2BJbMK%2BWzMQGOqUBEdNejlHGWmBji59oycSlPY4glBOQPPlezkGRgdtwzGhh0xDDblZioHMx%2Fg1WLRAw%2Fly%2B%2B4C2p45BrxXitDthTglZ%2FDvPdd%2BW%2FL9aP6jVqs4fbL5aKAaoerhOPrYWzHwxQGFjr8UoiVeawnO9HG4TCaG9MRvbCv8lYFKDDMVCbHJaW8kWdPg7zZcHAY2j0L4OKG88zzmdZpn53roQbNWJMZEU31FH&X-Amz-Signature=e9a3db84729c649ffddbc0750e8a44c957d4ef729cb66f8845474194eea61906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMPCPD5R%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCDPqy5UR4C7gbRO5ywS3AWCZvKlTGyZLLL4prpBh%2FSOgIgUWhKWTr5cjWAdUt5easDGVnmx1s0rL8BuYv%2B8UtKfmcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOKMk1AWJqX7L%2Bvf4CrcAzMCC4OLFwHGaTHbWm7rQTsntq3GH3WST6T%2F5w50vRrysBxTS6XrTsSp06OHWcr2l9TkzVCms%2BIGD8IvQjkUAInPCAyaQMwbfnt21WvvP%2FnoqncVHcGAomWr8LkOR3x1GVH%2BYmpvXr%2BMP0yP9jumsdBdbpIf9XTlbPKacFJY9sLvmT63%2Fq28kWb7z6eCGVTjCTZV3D5Y4UAHUOIb3%2BwhvtgSOUQ2SVFmiNGsrx94ZcWa6qPTDr9Zhwub0B5MHyjOBQ%2Bnfl9JofMSKKOJ1Yxu1CouHszZXh7uEPbIk9ZhUld3fytgj6zK2XYPmI2wGAasIMWgpq%2Fs1iFjOt%2BS4nX4lsy3q2Upl4hLUo4O1b1xws2wYK9kDXzYW5kw1bcdkUWhoLCA6UzPzT2UoEkgBMH7S9%2BPU6bfrHGwp59A5eltAo1RnwsHEo2ZGHkrYwy4lRuL1sITXoXWLNtwT7QfKQkZPrvfvo1vX06yViAhhZlQddu%2B7sfnZguKHdaE3vsb%2Ffz92aEeGO7ANQ%2FF4nCdaJ9dwRcXNo22U%2BsCzDCfPQ%2BMNL77siFYMFis%2Bv%2FWC6gga8yC6%2BMXRbQzGS2iraRju%2FKqWWR6DPDgjj%2BiMtDWlsia6YMmO%2FxQJ7RqJoo4L%2BJbMK%2BWzMQGOqUBEdNejlHGWmBji59oycSlPY4glBOQPPlezkGRgdtwzGhh0xDDblZioHMx%2Fg1WLRAw%2Fly%2B%2B4C2p45BrxXitDthTglZ%2FDvPdd%2BW%2FL9aP6jVqs4fbL5aKAaoerhOPrYWzHwxQGFjr8UoiVeawnO9HG4TCaG9MRvbCv8lYFKDDMVCbHJaW8kWdPg7zZcHAY2j0L4OKG88zzmdZpn53roQbNWJMZEU31FH&X-Amz-Signature=6b62dc88d1122fce9c710c1787ba37f4d0912b0845a32729a2733fb872690ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMPCPD5R%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCDPqy5UR4C7gbRO5ywS3AWCZvKlTGyZLLL4prpBh%2FSOgIgUWhKWTr5cjWAdUt5easDGVnmx1s0rL8BuYv%2B8UtKfmcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOKMk1AWJqX7L%2Bvf4CrcAzMCC4OLFwHGaTHbWm7rQTsntq3GH3WST6T%2F5w50vRrysBxTS6XrTsSp06OHWcr2l9TkzVCms%2BIGD8IvQjkUAInPCAyaQMwbfnt21WvvP%2FnoqncVHcGAomWr8LkOR3x1GVH%2BYmpvXr%2BMP0yP9jumsdBdbpIf9XTlbPKacFJY9sLvmT63%2Fq28kWb7z6eCGVTjCTZV3D5Y4UAHUOIb3%2BwhvtgSOUQ2SVFmiNGsrx94ZcWa6qPTDr9Zhwub0B5MHyjOBQ%2Bnfl9JofMSKKOJ1Yxu1CouHszZXh7uEPbIk9ZhUld3fytgj6zK2XYPmI2wGAasIMWgpq%2Fs1iFjOt%2BS4nX4lsy3q2Upl4hLUo4O1b1xws2wYK9kDXzYW5kw1bcdkUWhoLCA6UzPzT2UoEkgBMH7S9%2BPU6bfrHGwp59A5eltAo1RnwsHEo2ZGHkrYwy4lRuL1sITXoXWLNtwT7QfKQkZPrvfvo1vX06yViAhhZlQddu%2B7sfnZguKHdaE3vsb%2Ffz92aEeGO7ANQ%2FF4nCdaJ9dwRcXNo22U%2BsCzDCfPQ%2BMNL77siFYMFis%2Bv%2FWC6gga8yC6%2BMXRbQzGS2iraRju%2FKqWWR6DPDgjj%2BiMtDWlsia6YMmO%2FxQJ7RqJoo4L%2BJbMK%2BWzMQGOqUBEdNejlHGWmBji59oycSlPY4glBOQPPlezkGRgdtwzGhh0xDDblZioHMx%2Fg1WLRAw%2Fly%2B%2B4C2p45BrxXitDthTglZ%2FDvPdd%2BW%2FL9aP6jVqs4fbL5aKAaoerhOPrYWzHwxQGFjr8UoiVeawnO9HG4TCaG9MRvbCv8lYFKDDMVCbHJaW8kWdPg7zZcHAY2j0L4OKG88zzmdZpn53roQbNWJMZEU31FH&X-Amz-Signature=a967279560be3e960f8db3fe593d53659d087fcc878636369fb405b0f5b4ca66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMPCPD5R%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCDPqy5UR4C7gbRO5ywS3AWCZvKlTGyZLLL4prpBh%2FSOgIgUWhKWTr5cjWAdUt5easDGVnmx1s0rL8BuYv%2B8UtKfmcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOKMk1AWJqX7L%2Bvf4CrcAzMCC4OLFwHGaTHbWm7rQTsntq3GH3WST6T%2F5w50vRrysBxTS6XrTsSp06OHWcr2l9TkzVCms%2BIGD8IvQjkUAInPCAyaQMwbfnt21WvvP%2FnoqncVHcGAomWr8LkOR3x1GVH%2BYmpvXr%2BMP0yP9jumsdBdbpIf9XTlbPKacFJY9sLvmT63%2Fq28kWb7z6eCGVTjCTZV3D5Y4UAHUOIb3%2BwhvtgSOUQ2SVFmiNGsrx94ZcWa6qPTDr9Zhwub0B5MHyjOBQ%2Bnfl9JofMSKKOJ1Yxu1CouHszZXh7uEPbIk9ZhUld3fytgj6zK2XYPmI2wGAasIMWgpq%2Fs1iFjOt%2BS4nX4lsy3q2Upl4hLUo4O1b1xws2wYK9kDXzYW5kw1bcdkUWhoLCA6UzPzT2UoEkgBMH7S9%2BPU6bfrHGwp59A5eltAo1RnwsHEo2ZGHkrYwy4lRuL1sITXoXWLNtwT7QfKQkZPrvfvo1vX06yViAhhZlQddu%2B7sfnZguKHdaE3vsb%2Ffz92aEeGO7ANQ%2FF4nCdaJ9dwRcXNo22U%2BsCzDCfPQ%2BMNL77siFYMFis%2Bv%2FWC6gga8yC6%2BMXRbQzGS2iraRju%2FKqWWR6DPDgjj%2BiMtDWlsia6YMmO%2FxQJ7RqJoo4L%2BJbMK%2BWzMQGOqUBEdNejlHGWmBji59oycSlPY4glBOQPPlezkGRgdtwzGhh0xDDblZioHMx%2Fg1WLRAw%2Fly%2B%2B4C2p45BrxXitDthTglZ%2FDvPdd%2BW%2FL9aP6jVqs4fbL5aKAaoerhOPrYWzHwxQGFjr8UoiVeawnO9HG4TCaG9MRvbCv8lYFKDDMVCbHJaW8kWdPg7zZcHAY2j0L4OKG88zzmdZpn53roQbNWJMZEU31FH&X-Amz-Signature=5ab5a01f1516067f150fc734399da3dda639bf3680503de53cf4afcaf8231900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMPCPD5R%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCDPqy5UR4C7gbRO5ywS3AWCZvKlTGyZLLL4prpBh%2FSOgIgUWhKWTr5cjWAdUt5easDGVnmx1s0rL8BuYv%2B8UtKfmcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOKMk1AWJqX7L%2Bvf4CrcAzMCC4OLFwHGaTHbWm7rQTsntq3GH3WST6T%2F5w50vRrysBxTS6XrTsSp06OHWcr2l9TkzVCms%2BIGD8IvQjkUAInPCAyaQMwbfnt21WvvP%2FnoqncVHcGAomWr8LkOR3x1GVH%2BYmpvXr%2BMP0yP9jumsdBdbpIf9XTlbPKacFJY9sLvmT63%2Fq28kWb7z6eCGVTjCTZV3D5Y4UAHUOIb3%2BwhvtgSOUQ2SVFmiNGsrx94ZcWa6qPTDr9Zhwub0B5MHyjOBQ%2Bnfl9JofMSKKOJ1Yxu1CouHszZXh7uEPbIk9ZhUld3fytgj6zK2XYPmI2wGAasIMWgpq%2Fs1iFjOt%2BS4nX4lsy3q2Upl4hLUo4O1b1xws2wYK9kDXzYW5kw1bcdkUWhoLCA6UzPzT2UoEkgBMH7S9%2BPU6bfrHGwp59A5eltAo1RnwsHEo2ZGHkrYwy4lRuL1sITXoXWLNtwT7QfKQkZPrvfvo1vX06yViAhhZlQddu%2B7sfnZguKHdaE3vsb%2Ffz92aEeGO7ANQ%2FF4nCdaJ9dwRcXNo22U%2BsCzDCfPQ%2BMNL77siFYMFis%2Bv%2FWC6gga8yC6%2BMXRbQzGS2iraRju%2FKqWWR6DPDgjj%2BiMtDWlsia6YMmO%2FxQJ7RqJoo4L%2BJbMK%2BWzMQGOqUBEdNejlHGWmBji59oycSlPY4glBOQPPlezkGRgdtwzGhh0xDDblZioHMx%2Fg1WLRAw%2Fly%2B%2B4C2p45BrxXitDthTglZ%2FDvPdd%2BW%2FL9aP6jVqs4fbL5aKAaoerhOPrYWzHwxQGFjr8UoiVeawnO9HG4TCaG9MRvbCv8lYFKDDMVCbHJaW8kWdPg7zZcHAY2j0L4OKG88zzmdZpn53roQbNWJMZEU31FH&X-Amz-Signature=f1ab05414ee37e1f6ba29d985fb45c7de8221de346586a249485f09c53702610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMPCPD5R%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCDPqy5UR4C7gbRO5ywS3AWCZvKlTGyZLLL4prpBh%2FSOgIgUWhKWTr5cjWAdUt5easDGVnmx1s0rL8BuYv%2B8UtKfmcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOKMk1AWJqX7L%2Bvf4CrcAzMCC4OLFwHGaTHbWm7rQTsntq3GH3WST6T%2F5w50vRrysBxTS6XrTsSp06OHWcr2l9TkzVCms%2BIGD8IvQjkUAInPCAyaQMwbfnt21WvvP%2FnoqncVHcGAomWr8LkOR3x1GVH%2BYmpvXr%2BMP0yP9jumsdBdbpIf9XTlbPKacFJY9sLvmT63%2Fq28kWb7z6eCGVTjCTZV3D5Y4UAHUOIb3%2BwhvtgSOUQ2SVFmiNGsrx94ZcWa6qPTDr9Zhwub0B5MHyjOBQ%2Bnfl9JofMSKKOJ1Yxu1CouHszZXh7uEPbIk9ZhUld3fytgj6zK2XYPmI2wGAasIMWgpq%2Fs1iFjOt%2BS4nX4lsy3q2Upl4hLUo4O1b1xws2wYK9kDXzYW5kw1bcdkUWhoLCA6UzPzT2UoEkgBMH7S9%2BPU6bfrHGwp59A5eltAo1RnwsHEo2ZGHkrYwy4lRuL1sITXoXWLNtwT7QfKQkZPrvfvo1vX06yViAhhZlQddu%2B7sfnZguKHdaE3vsb%2Ffz92aEeGO7ANQ%2FF4nCdaJ9dwRcXNo22U%2BsCzDCfPQ%2BMNL77siFYMFis%2Bv%2FWC6gga8yC6%2BMXRbQzGS2iraRju%2FKqWWR6DPDgjj%2BiMtDWlsia6YMmO%2FxQJ7RqJoo4L%2BJbMK%2BWzMQGOqUBEdNejlHGWmBji59oycSlPY4glBOQPPlezkGRgdtwzGhh0xDDblZioHMx%2Fg1WLRAw%2Fly%2B%2B4C2p45BrxXitDthTglZ%2FDvPdd%2BW%2FL9aP6jVqs4fbL5aKAaoerhOPrYWzHwxQGFjr8UoiVeawnO9HG4TCaG9MRvbCv8lYFKDDMVCbHJaW8kWdPg7zZcHAY2j0L4OKG88zzmdZpn53roQbNWJMZEU31FH&X-Amz-Signature=d81df9c4c669d1815763ebfd36d0ed762748d4d44b5ee829cda991f9c49f03e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMPCPD5R%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCDPqy5UR4C7gbRO5ywS3AWCZvKlTGyZLLL4prpBh%2FSOgIgUWhKWTr5cjWAdUt5easDGVnmx1s0rL8BuYv%2B8UtKfmcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOKMk1AWJqX7L%2Bvf4CrcAzMCC4OLFwHGaTHbWm7rQTsntq3GH3WST6T%2F5w50vRrysBxTS6XrTsSp06OHWcr2l9TkzVCms%2BIGD8IvQjkUAInPCAyaQMwbfnt21WvvP%2FnoqncVHcGAomWr8LkOR3x1GVH%2BYmpvXr%2BMP0yP9jumsdBdbpIf9XTlbPKacFJY9sLvmT63%2Fq28kWb7z6eCGVTjCTZV3D5Y4UAHUOIb3%2BwhvtgSOUQ2SVFmiNGsrx94ZcWa6qPTDr9Zhwub0B5MHyjOBQ%2Bnfl9JofMSKKOJ1Yxu1CouHszZXh7uEPbIk9ZhUld3fytgj6zK2XYPmI2wGAasIMWgpq%2Fs1iFjOt%2BS4nX4lsy3q2Upl4hLUo4O1b1xws2wYK9kDXzYW5kw1bcdkUWhoLCA6UzPzT2UoEkgBMH7S9%2BPU6bfrHGwp59A5eltAo1RnwsHEo2ZGHkrYwy4lRuL1sITXoXWLNtwT7QfKQkZPrvfvo1vX06yViAhhZlQddu%2B7sfnZguKHdaE3vsb%2Ffz92aEeGO7ANQ%2FF4nCdaJ9dwRcXNo22U%2BsCzDCfPQ%2BMNL77siFYMFis%2Bv%2FWC6gga8yC6%2BMXRbQzGS2iraRju%2FKqWWR6DPDgjj%2BiMtDWlsia6YMmO%2FxQJ7RqJoo4L%2BJbMK%2BWzMQGOqUBEdNejlHGWmBji59oycSlPY4glBOQPPlezkGRgdtwzGhh0xDDblZioHMx%2Fg1WLRAw%2Fly%2B%2B4C2p45BrxXitDthTglZ%2FDvPdd%2BW%2FL9aP6jVqs4fbL5aKAaoerhOPrYWzHwxQGFjr8UoiVeawnO9HG4TCaG9MRvbCv8lYFKDDMVCbHJaW8kWdPg7zZcHAY2j0L4OKG88zzmdZpn53roQbNWJMZEU31FH&X-Amz-Signature=180222b304ca7d3c93c4c6b258929e970e5581d313278d88e1270ea344403a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMPCPD5R%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCDPqy5UR4C7gbRO5ywS3AWCZvKlTGyZLLL4prpBh%2FSOgIgUWhKWTr5cjWAdUt5easDGVnmx1s0rL8BuYv%2B8UtKfmcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOKMk1AWJqX7L%2Bvf4CrcAzMCC4OLFwHGaTHbWm7rQTsntq3GH3WST6T%2F5w50vRrysBxTS6XrTsSp06OHWcr2l9TkzVCms%2BIGD8IvQjkUAInPCAyaQMwbfnt21WvvP%2FnoqncVHcGAomWr8LkOR3x1GVH%2BYmpvXr%2BMP0yP9jumsdBdbpIf9XTlbPKacFJY9sLvmT63%2Fq28kWb7z6eCGVTjCTZV3D5Y4UAHUOIb3%2BwhvtgSOUQ2SVFmiNGsrx94ZcWa6qPTDr9Zhwub0B5MHyjOBQ%2Bnfl9JofMSKKOJ1Yxu1CouHszZXh7uEPbIk9ZhUld3fytgj6zK2XYPmI2wGAasIMWgpq%2Fs1iFjOt%2BS4nX4lsy3q2Upl4hLUo4O1b1xws2wYK9kDXzYW5kw1bcdkUWhoLCA6UzPzT2UoEkgBMH7S9%2BPU6bfrHGwp59A5eltAo1RnwsHEo2ZGHkrYwy4lRuL1sITXoXWLNtwT7QfKQkZPrvfvo1vX06yViAhhZlQddu%2B7sfnZguKHdaE3vsb%2Ffz92aEeGO7ANQ%2FF4nCdaJ9dwRcXNo22U%2BsCzDCfPQ%2BMNL77siFYMFis%2Bv%2FWC6gga8yC6%2BMXRbQzGS2iraRju%2FKqWWR6DPDgjj%2BiMtDWlsia6YMmO%2FxQJ7RqJoo4L%2BJbMK%2BWzMQGOqUBEdNejlHGWmBji59oycSlPY4glBOQPPlezkGRgdtwzGhh0xDDblZioHMx%2Fg1WLRAw%2Fly%2B%2B4C2p45BrxXitDthTglZ%2FDvPdd%2BW%2FL9aP6jVqs4fbL5aKAaoerhOPrYWzHwxQGFjr8UoiVeawnO9HG4TCaG9MRvbCv8lYFKDDMVCbHJaW8kWdPg7zZcHAY2j0L4OKG88zzmdZpn53roQbNWJMZEU31FH&X-Amz-Signature=f529f96a35214e7fe95cd9815b8f12505dd43dc65c6871423aae452503ac1d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMPCPD5R%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCDPqy5UR4C7gbRO5ywS3AWCZvKlTGyZLLL4prpBh%2FSOgIgUWhKWTr5cjWAdUt5easDGVnmx1s0rL8BuYv%2B8UtKfmcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOKMk1AWJqX7L%2Bvf4CrcAzMCC4OLFwHGaTHbWm7rQTsntq3GH3WST6T%2F5w50vRrysBxTS6XrTsSp06OHWcr2l9TkzVCms%2BIGD8IvQjkUAInPCAyaQMwbfnt21WvvP%2FnoqncVHcGAomWr8LkOR3x1GVH%2BYmpvXr%2BMP0yP9jumsdBdbpIf9XTlbPKacFJY9sLvmT63%2Fq28kWb7z6eCGVTjCTZV3D5Y4UAHUOIb3%2BwhvtgSOUQ2SVFmiNGsrx94ZcWa6qPTDr9Zhwub0B5MHyjOBQ%2Bnfl9JofMSKKOJ1Yxu1CouHszZXh7uEPbIk9ZhUld3fytgj6zK2XYPmI2wGAasIMWgpq%2Fs1iFjOt%2BS4nX4lsy3q2Upl4hLUo4O1b1xws2wYK9kDXzYW5kw1bcdkUWhoLCA6UzPzT2UoEkgBMH7S9%2BPU6bfrHGwp59A5eltAo1RnwsHEo2ZGHkrYwy4lRuL1sITXoXWLNtwT7QfKQkZPrvfvo1vX06yViAhhZlQddu%2B7sfnZguKHdaE3vsb%2Ffz92aEeGO7ANQ%2FF4nCdaJ9dwRcXNo22U%2BsCzDCfPQ%2BMNL77siFYMFis%2Bv%2FWC6gga8yC6%2BMXRbQzGS2iraRju%2FKqWWR6DPDgjj%2BiMtDWlsia6YMmO%2FxQJ7RqJoo4L%2BJbMK%2BWzMQGOqUBEdNejlHGWmBji59oycSlPY4glBOQPPlezkGRgdtwzGhh0xDDblZioHMx%2Fg1WLRAw%2Fly%2B%2B4C2p45BrxXitDthTglZ%2FDvPdd%2BW%2FL9aP6jVqs4fbL5aKAaoerhOPrYWzHwxQGFjr8UoiVeawnO9HG4TCaG9MRvbCv8lYFKDDMVCbHJaW8kWdPg7zZcHAY2j0L4OKG88zzmdZpn53roQbNWJMZEU31FH&X-Amz-Signature=4a70328d879a32ee59295655d79342cb9b8379c37b622d21d2e5d244f3299402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMPCPD5R%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCDPqy5UR4C7gbRO5ywS3AWCZvKlTGyZLLL4prpBh%2FSOgIgUWhKWTr5cjWAdUt5easDGVnmx1s0rL8BuYv%2B8UtKfmcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOKMk1AWJqX7L%2Bvf4CrcAzMCC4OLFwHGaTHbWm7rQTsntq3GH3WST6T%2F5w50vRrysBxTS6XrTsSp06OHWcr2l9TkzVCms%2BIGD8IvQjkUAInPCAyaQMwbfnt21WvvP%2FnoqncVHcGAomWr8LkOR3x1GVH%2BYmpvXr%2BMP0yP9jumsdBdbpIf9XTlbPKacFJY9sLvmT63%2Fq28kWb7z6eCGVTjCTZV3D5Y4UAHUOIb3%2BwhvtgSOUQ2SVFmiNGsrx94ZcWa6qPTDr9Zhwub0B5MHyjOBQ%2Bnfl9JofMSKKOJ1Yxu1CouHszZXh7uEPbIk9ZhUld3fytgj6zK2XYPmI2wGAasIMWgpq%2Fs1iFjOt%2BS4nX4lsy3q2Upl4hLUo4O1b1xws2wYK9kDXzYW5kw1bcdkUWhoLCA6UzPzT2UoEkgBMH7S9%2BPU6bfrHGwp59A5eltAo1RnwsHEo2ZGHkrYwy4lRuL1sITXoXWLNtwT7QfKQkZPrvfvo1vX06yViAhhZlQddu%2B7sfnZguKHdaE3vsb%2Ffz92aEeGO7ANQ%2FF4nCdaJ9dwRcXNo22U%2BsCzDCfPQ%2BMNL77siFYMFis%2Bv%2FWC6gga8yC6%2BMXRbQzGS2iraRju%2FKqWWR6DPDgjj%2BiMtDWlsia6YMmO%2FxQJ7RqJoo4L%2BJbMK%2BWzMQGOqUBEdNejlHGWmBji59oycSlPY4glBOQPPlezkGRgdtwzGhh0xDDblZioHMx%2Fg1WLRAw%2Fly%2B%2B4C2p45BrxXitDthTglZ%2FDvPdd%2BW%2FL9aP6jVqs4fbL5aKAaoerhOPrYWzHwxQGFjr8UoiVeawnO9HG4TCaG9MRvbCv8lYFKDDMVCbHJaW8kWdPg7zZcHAY2j0L4OKG88zzmdZpn53roQbNWJMZEU31FH&X-Amz-Signature=d19a8709d79f77973afb30d2fd811cc0f502cbe7cc2dcd0cd99dff959fc749f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6HZRNTE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEAsbKGUFY%2FUeCXBW1kb2OAIpfJ4pKfuwr0mKCFb9JQwAiEA829%2Bn4WWs3HiIgKa7Gd71GncHBnSro5uIA9VxdAMEbYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDA9It%2Fyg9bYYjXWEWCrcA3ACdBtRbIcDXmkqvLWxpvJQ8LaQWvqHVZpYgk%2BAB6tvCROvauq495SvjE26qoromqiuiVigkkv3Jib6jf5bcICQofbTr76PkpMgmbLKzU5kxkfBx3o5%2Bimsyjz3CmUjLU9yIfjaS56lcKUfRrtwYNyNGQBHAdXs3VYTLMcQNo%2F2cqyTuVWQ438uoFsCRpQvcwxX3CEpPa2DwTGOkiSnVcYixNclaopVkg2JZ8STMF5m3dMwKy35ctxvlhf6nI8FMBG8Qx5xUirBGFxOfRdXoVU%2FGPYD3aKfMuo%2FqQ7sP8gNA8qP1XIvkVi4MrUW9xrb5vLZrImv0U3FIF8xz16%2FCuvM2UaMJKy2xvuy05fz%2FC9K%2Bg24xQfSyPysGiAGauFrp%2BDZb44agfP8MEIxt%2BMyxGDzNvwlorp9W1UCvWKxzr2pZ%2FAYO8HA6W0aueKS3xoDvdouTRIDFandbMKvWAo%2BRGcq8cMiYH7gMOHshOcKLegShl4poMqML%2F2j7u1VPMKrMr%2BGFtcb%2FzJqp%2BUNIyqyuto3t10ZuqBQuVciBZg%2FmIfDfucLXB3gptwBKTBoyjnFm9wq8Zk93PH2DCaCfXgVCx1MeD%2Br6NngXjsCBkN%2BPY%2Fgo%2BGJ3L6T7JnEfVXRMPeXzMQGOqUB%2BC3UfkqGYD6dn%2BWJfEwEslGMvXOqykG91E%2FLWtXSqjq0kt3ri9Js2gw1O4mceXsFMRWSIUFBS7ar30gwNGlhrTvEWjgxk4HVZTBBO6FZN23g2Jy7XZ5KnqWjO1tp1o6JoVjU8LQECf3jpI0ZutpijXLbFl%2F9NBn4deWvcQV2CyYxTbp443Qvsi3LDlZSk60oJLadGKdsIqgCEq2%2Fh90YFxPUrF%2BL&X-Amz-Signature=41cd7f64e30f06c9604b613434e24159c37459469587b78acb95c96da93c37b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILWUSRD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCdotWRn6Bwji%2Fucl4O5NQRIgg%2B4iO%2FoC84Ew5hAEV6dQIgMiMVf%2F%2FKweCNWOIgky34YaTVA4L84oFiZo1WQbliTFcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDC8Qzfsko79F0IbXJircAyWQB%2Bgtqeh0A8Hv6e5Gftw8TBv1jSH5L4cjrU6yHBG1817jXPq9VTljRJhLwqxiJiWn%2FGbS1JzwUTqgMIyUAycE98zAAB17qujaUA%2Bj2W0seebMrObwEl3VcyLIuyKmohcFNyX3jYenQyKw81cYXtI1DvuO3vxxtAT6b2TXHA4Y0CkKf5L8otJyhbL8sKGnai676MC%2FxvuEyEsz9ZS1xJ4mcUDfRC%2B5XQVXVPn1sWH1%2FJCV60SRMsGd4frk0q%2BJGnJDfmeM6Jz4oLRdagHeoh957yjATI13%2FSb7cM9xR%2BoYl23EC3jnoyOhqea4tSL1rhUzetc6AbvjhnT0IqFL9A%2Btb8hZJqMqthqE%2Fl7F1cjOC9MxfVVn%2BHpn4xW4mjD80ZgWpmVXUM9ScBBvQDcpQhiJt4uhiFAnU2sudCtubRC4Y5rymXD8YGNFkh2r3pgNTCO9gneOxTmQdqxmDkmHEFwTiQvvbTClcYUcn%2FoUJWFtZBNB2eJRnAE3r8S8hYmQoLUT%2F9ZVMsFKILYu9UBjvc7TTCA%2B7qUNp6F8KlQYTLRg5ah1bW50yY4uU5I47Gft%2BDnNRVloCQJXdQvW99qqMpabp%2FDHBQIFZZM1bpnefQjmr9U6RLkBfrnHAHH8MIGXzMQGOqUBHeJVrMDX4K1h45vFaXTk7dusG6TS8eda3y0%2F%2FWMC3qRGLQJxRH%2FoKYa7PqRWvazmWzk%2BCZp9yXkLhvSi1W7j4YBeXWBssLVgLC%2FmK3PoL4FnerYfI2ViwiXIcMcHBljRJDDvNnE%2Fn7%2FCX69evrSW7kls6asfVaK9TstT59WP30xGv5fqbL94sKBn4vc6qFU6NLq0rGBnkpWLIhHeNEL3EZvkE3fs&X-Amz-Signature=001893bdef04547047dbeaf4904e28700047e4323b1f6335a6afcc55e2811ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILWUSRD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCdotWRn6Bwji%2Fucl4O5NQRIgg%2B4iO%2FoC84Ew5hAEV6dQIgMiMVf%2F%2FKweCNWOIgky34YaTVA4L84oFiZo1WQbliTFcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDC8Qzfsko79F0IbXJircAyWQB%2Bgtqeh0A8Hv6e5Gftw8TBv1jSH5L4cjrU6yHBG1817jXPq9VTljRJhLwqxiJiWn%2FGbS1JzwUTqgMIyUAycE98zAAB17qujaUA%2Bj2W0seebMrObwEl3VcyLIuyKmohcFNyX3jYenQyKw81cYXtI1DvuO3vxxtAT6b2TXHA4Y0CkKf5L8otJyhbL8sKGnai676MC%2FxvuEyEsz9ZS1xJ4mcUDfRC%2B5XQVXVPn1sWH1%2FJCV60SRMsGd4frk0q%2BJGnJDfmeM6Jz4oLRdagHeoh957yjATI13%2FSb7cM9xR%2BoYl23EC3jnoyOhqea4tSL1rhUzetc6AbvjhnT0IqFL9A%2Btb8hZJqMqthqE%2Fl7F1cjOC9MxfVVn%2BHpn4xW4mjD80ZgWpmVXUM9ScBBvQDcpQhiJt4uhiFAnU2sudCtubRC4Y5rymXD8YGNFkh2r3pgNTCO9gneOxTmQdqxmDkmHEFwTiQvvbTClcYUcn%2FoUJWFtZBNB2eJRnAE3r8S8hYmQoLUT%2F9ZVMsFKILYu9UBjvc7TTCA%2B7qUNp6F8KlQYTLRg5ah1bW50yY4uU5I47Gft%2BDnNRVloCQJXdQvW99qqMpabp%2FDHBQIFZZM1bpnefQjmr9U6RLkBfrnHAHH8MIGXzMQGOqUBHeJVrMDX4K1h45vFaXTk7dusG6TS8eda3y0%2F%2FWMC3qRGLQJxRH%2FoKYa7PqRWvazmWzk%2BCZp9yXkLhvSi1W7j4YBeXWBssLVgLC%2FmK3PoL4FnerYfI2ViwiXIcMcHBljRJDDvNnE%2Fn7%2FCX69evrSW7kls6asfVaK9TstT59WP30xGv5fqbL94sKBn4vc6qFU6NLq0rGBnkpWLIhHeNEL3EZvkE3fs&X-Amz-Signature=539d4d0900841833fb2dcdce351151b850f17948552ff18f9be2e2aabe4c20d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILWUSRD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCdotWRn6Bwji%2Fucl4O5NQRIgg%2B4iO%2FoC84Ew5hAEV6dQIgMiMVf%2F%2FKweCNWOIgky34YaTVA4L84oFiZo1WQbliTFcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDC8Qzfsko79F0IbXJircAyWQB%2Bgtqeh0A8Hv6e5Gftw8TBv1jSH5L4cjrU6yHBG1817jXPq9VTljRJhLwqxiJiWn%2FGbS1JzwUTqgMIyUAycE98zAAB17qujaUA%2Bj2W0seebMrObwEl3VcyLIuyKmohcFNyX3jYenQyKw81cYXtI1DvuO3vxxtAT6b2TXHA4Y0CkKf5L8otJyhbL8sKGnai676MC%2FxvuEyEsz9ZS1xJ4mcUDfRC%2B5XQVXVPn1sWH1%2FJCV60SRMsGd4frk0q%2BJGnJDfmeM6Jz4oLRdagHeoh957yjATI13%2FSb7cM9xR%2BoYl23EC3jnoyOhqea4tSL1rhUzetc6AbvjhnT0IqFL9A%2Btb8hZJqMqthqE%2Fl7F1cjOC9MxfVVn%2BHpn4xW4mjD80ZgWpmVXUM9ScBBvQDcpQhiJt4uhiFAnU2sudCtubRC4Y5rymXD8YGNFkh2r3pgNTCO9gneOxTmQdqxmDkmHEFwTiQvvbTClcYUcn%2FoUJWFtZBNB2eJRnAE3r8S8hYmQoLUT%2F9ZVMsFKILYu9UBjvc7TTCA%2B7qUNp6F8KlQYTLRg5ah1bW50yY4uU5I47Gft%2BDnNRVloCQJXdQvW99qqMpabp%2FDHBQIFZZM1bpnefQjmr9U6RLkBfrnHAHH8MIGXzMQGOqUBHeJVrMDX4K1h45vFaXTk7dusG6TS8eda3y0%2F%2FWMC3qRGLQJxRH%2FoKYa7PqRWvazmWzk%2BCZp9yXkLhvSi1W7j4YBeXWBssLVgLC%2FmK3PoL4FnerYfI2ViwiXIcMcHBljRJDDvNnE%2Fn7%2FCX69evrSW7kls6asfVaK9TstT59WP30xGv5fqbL94sKBn4vc6qFU6NLq0rGBnkpWLIhHeNEL3EZvkE3fs&X-Amz-Signature=984dd68d4e2fed749ca7b1c9a4ffd195580f0049ed550bac2115c04178beed76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILWUSRD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCdotWRn6Bwji%2Fucl4O5NQRIgg%2B4iO%2FoC84Ew5hAEV6dQIgMiMVf%2F%2FKweCNWOIgky34YaTVA4L84oFiZo1WQbliTFcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDC8Qzfsko79F0IbXJircAyWQB%2Bgtqeh0A8Hv6e5Gftw8TBv1jSH5L4cjrU6yHBG1817jXPq9VTljRJhLwqxiJiWn%2FGbS1JzwUTqgMIyUAycE98zAAB17qujaUA%2Bj2W0seebMrObwEl3VcyLIuyKmohcFNyX3jYenQyKw81cYXtI1DvuO3vxxtAT6b2TXHA4Y0CkKf5L8otJyhbL8sKGnai676MC%2FxvuEyEsz9ZS1xJ4mcUDfRC%2B5XQVXVPn1sWH1%2FJCV60SRMsGd4frk0q%2BJGnJDfmeM6Jz4oLRdagHeoh957yjATI13%2FSb7cM9xR%2BoYl23EC3jnoyOhqea4tSL1rhUzetc6AbvjhnT0IqFL9A%2Btb8hZJqMqthqE%2Fl7F1cjOC9MxfVVn%2BHpn4xW4mjD80ZgWpmVXUM9ScBBvQDcpQhiJt4uhiFAnU2sudCtubRC4Y5rymXD8YGNFkh2r3pgNTCO9gneOxTmQdqxmDkmHEFwTiQvvbTClcYUcn%2FoUJWFtZBNB2eJRnAE3r8S8hYmQoLUT%2F9ZVMsFKILYu9UBjvc7TTCA%2B7qUNp6F8KlQYTLRg5ah1bW50yY4uU5I47Gft%2BDnNRVloCQJXdQvW99qqMpabp%2FDHBQIFZZM1bpnefQjmr9U6RLkBfrnHAHH8MIGXzMQGOqUBHeJVrMDX4K1h45vFaXTk7dusG6TS8eda3y0%2F%2FWMC3qRGLQJxRH%2FoKYa7PqRWvazmWzk%2BCZp9yXkLhvSi1W7j4YBeXWBssLVgLC%2FmK3PoL4FnerYfI2ViwiXIcMcHBljRJDDvNnE%2Fn7%2FCX69evrSW7kls6asfVaK9TstT59WP30xGv5fqbL94sKBn4vc6qFU6NLq0rGBnkpWLIhHeNEL3EZvkE3fs&X-Amz-Signature=86688efd4d5fe28926a006dbeb532d12a45af7cd57962bb9cff10482a76b34fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILWUSRD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCdotWRn6Bwji%2Fucl4O5NQRIgg%2B4iO%2FoC84Ew5hAEV6dQIgMiMVf%2F%2FKweCNWOIgky34YaTVA4L84oFiZo1WQbliTFcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDC8Qzfsko79F0IbXJircAyWQB%2Bgtqeh0A8Hv6e5Gftw8TBv1jSH5L4cjrU6yHBG1817jXPq9VTljRJhLwqxiJiWn%2FGbS1JzwUTqgMIyUAycE98zAAB17qujaUA%2Bj2W0seebMrObwEl3VcyLIuyKmohcFNyX3jYenQyKw81cYXtI1DvuO3vxxtAT6b2TXHA4Y0CkKf5L8otJyhbL8sKGnai676MC%2FxvuEyEsz9ZS1xJ4mcUDfRC%2B5XQVXVPn1sWH1%2FJCV60SRMsGd4frk0q%2BJGnJDfmeM6Jz4oLRdagHeoh957yjATI13%2FSb7cM9xR%2BoYl23EC3jnoyOhqea4tSL1rhUzetc6AbvjhnT0IqFL9A%2Btb8hZJqMqthqE%2Fl7F1cjOC9MxfVVn%2BHpn4xW4mjD80ZgWpmVXUM9ScBBvQDcpQhiJt4uhiFAnU2sudCtubRC4Y5rymXD8YGNFkh2r3pgNTCO9gneOxTmQdqxmDkmHEFwTiQvvbTClcYUcn%2FoUJWFtZBNB2eJRnAE3r8S8hYmQoLUT%2F9ZVMsFKILYu9UBjvc7TTCA%2B7qUNp6F8KlQYTLRg5ah1bW50yY4uU5I47Gft%2BDnNRVloCQJXdQvW99qqMpabp%2FDHBQIFZZM1bpnefQjmr9U6RLkBfrnHAHH8MIGXzMQGOqUBHeJVrMDX4K1h45vFaXTk7dusG6TS8eda3y0%2F%2FWMC3qRGLQJxRH%2FoKYa7PqRWvazmWzk%2BCZp9yXkLhvSi1W7j4YBeXWBssLVgLC%2FmK3PoL4FnerYfI2ViwiXIcMcHBljRJDDvNnE%2Fn7%2FCX69evrSW7kls6asfVaK9TstT59WP30xGv5fqbL94sKBn4vc6qFU6NLq0rGBnkpWLIhHeNEL3EZvkE3fs&X-Amz-Signature=481e927fa62e9dc3868ed9c0ed510b60325ccbb26cfb24a3e6c2031211551afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILWUSRD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCdotWRn6Bwji%2Fucl4O5NQRIgg%2B4iO%2FoC84Ew5hAEV6dQIgMiMVf%2F%2FKweCNWOIgky34YaTVA4L84oFiZo1WQbliTFcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDC8Qzfsko79F0IbXJircAyWQB%2Bgtqeh0A8Hv6e5Gftw8TBv1jSH5L4cjrU6yHBG1817jXPq9VTljRJhLwqxiJiWn%2FGbS1JzwUTqgMIyUAycE98zAAB17qujaUA%2Bj2W0seebMrObwEl3VcyLIuyKmohcFNyX3jYenQyKw81cYXtI1DvuO3vxxtAT6b2TXHA4Y0CkKf5L8otJyhbL8sKGnai676MC%2FxvuEyEsz9ZS1xJ4mcUDfRC%2B5XQVXVPn1sWH1%2FJCV60SRMsGd4frk0q%2BJGnJDfmeM6Jz4oLRdagHeoh957yjATI13%2FSb7cM9xR%2BoYl23EC3jnoyOhqea4tSL1rhUzetc6AbvjhnT0IqFL9A%2Btb8hZJqMqthqE%2Fl7F1cjOC9MxfVVn%2BHpn4xW4mjD80ZgWpmVXUM9ScBBvQDcpQhiJt4uhiFAnU2sudCtubRC4Y5rymXD8YGNFkh2r3pgNTCO9gneOxTmQdqxmDkmHEFwTiQvvbTClcYUcn%2FoUJWFtZBNB2eJRnAE3r8S8hYmQoLUT%2F9ZVMsFKILYu9UBjvc7TTCA%2B7qUNp6F8KlQYTLRg5ah1bW50yY4uU5I47Gft%2BDnNRVloCQJXdQvW99qqMpabp%2FDHBQIFZZM1bpnefQjmr9U6RLkBfrnHAHH8MIGXzMQGOqUBHeJVrMDX4K1h45vFaXTk7dusG6TS8eda3y0%2F%2FWMC3qRGLQJxRH%2FoKYa7PqRWvazmWzk%2BCZp9yXkLhvSi1W7j4YBeXWBssLVgLC%2FmK3PoL4FnerYfI2ViwiXIcMcHBljRJDDvNnE%2Fn7%2FCX69evrSW7kls6asfVaK9TstT59WP30xGv5fqbL94sKBn4vc6qFU6NLq0rGBnkpWLIhHeNEL3EZvkE3fs&X-Amz-Signature=1c117a1b1f3d3809884f4a7df6c752cefa897923890b8f56f0385d46de0a37f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILWUSRD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCdotWRn6Bwji%2Fucl4O5NQRIgg%2B4iO%2FoC84Ew5hAEV6dQIgMiMVf%2F%2FKweCNWOIgky34YaTVA4L84oFiZo1WQbliTFcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDC8Qzfsko79F0IbXJircAyWQB%2Bgtqeh0A8Hv6e5Gftw8TBv1jSH5L4cjrU6yHBG1817jXPq9VTljRJhLwqxiJiWn%2FGbS1JzwUTqgMIyUAycE98zAAB17qujaUA%2Bj2W0seebMrObwEl3VcyLIuyKmohcFNyX3jYenQyKw81cYXtI1DvuO3vxxtAT6b2TXHA4Y0CkKf5L8otJyhbL8sKGnai676MC%2FxvuEyEsz9ZS1xJ4mcUDfRC%2B5XQVXVPn1sWH1%2FJCV60SRMsGd4frk0q%2BJGnJDfmeM6Jz4oLRdagHeoh957yjATI13%2FSb7cM9xR%2BoYl23EC3jnoyOhqea4tSL1rhUzetc6AbvjhnT0IqFL9A%2Btb8hZJqMqthqE%2Fl7F1cjOC9MxfVVn%2BHpn4xW4mjD80ZgWpmVXUM9ScBBvQDcpQhiJt4uhiFAnU2sudCtubRC4Y5rymXD8YGNFkh2r3pgNTCO9gneOxTmQdqxmDkmHEFwTiQvvbTClcYUcn%2FoUJWFtZBNB2eJRnAE3r8S8hYmQoLUT%2F9ZVMsFKILYu9UBjvc7TTCA%2B7qUNp6F8KlQYTLRg5ah1bW50yY4uU5I47Gft%2BDnNRVloCQJXdQvW99qqMpabp%2FDHBQIFZZM1bpnefQjmr9U6RLkBfrnHAHH8MIGXzMQGOqUBHeJVrMDX4K1h45vFaXTk7dusG6TS8eda3y0%2F%2FWMC3qRGLQJxRH%2FoKYa7PqRWvazmWzk%2BCZp9yXkLhvSi1W7j4YBeXWBssLVgLC%2FmK3PoL4FnerYfI2ViwiXIcMcHBljRJDDvNnE%2Fn7%2FCX69evrSW7kls6asfVaK9TstT59WP30xGv5fqbL94sKBn4vc6qFU6NLq0rGBnkpWLIhHeNEL3EZvkE3fs&X-Amz-Signature=c1877c2365374e7a69a62280e908ef5642e43b24a78bb1bc4d7598677912784e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILWUSRD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCdotWRn6Bwji%2Fucl4O5NQRIgg%2B4iO%2FoC84Ew5hAEV6dQIgMiMVf%2F%2FKweCNWOIgky34YaTVA4L84oFiZo1WQbliTFcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDC8Qzfsko79F0IbXJircAyWQB%2Bgtqeh0A8Hv6e5Gftw8TBv1jSH5L4cjrU6yHBG1817jXPq9VTljRJhLwqxiJiWn%2FGbS1JzwUTqgMIyUAycE98zAAB17qujaUA%2Bj2W0seebMrObwEl3VcyLIuyKmohcFNyX3jYenQyKw81cYXtI1DvuO3vxxtAT6b2TXHA4Y0CkKf5L8otJyhbL8sKGnai676MC%2FxvuEyEsz9ZS1xJ4mcUDfRC%2B5XQVXVPn1sWH1%2FJCV60SRMsGd4frk0q%2BJGnJDfmeM6Jz4oLRdagHeoh957yjATI13%2FSb7cM9xR%2BoYl23EC3jnoyOhqea4tSL1rhUzetc6AbvjhnT0IqFL9A%2Btb8hZJqMqthqE%2Fl7F1cjOC9MxfVVn%2BHpn4xW4mjD80ZgWpmVXUM9ScBBvQDcpQhiJt4uhiFAnU2sudCtubRC4Y5rymXD8YGNFkh2r3pgNTCO9gneOxTmQdqxmDkmHEFwTiQvvbTClcYUcn%2FoUJWFtZBNB2eJRnAE3r8S8hYmQoLUT%2F9ZVMsFKILYu9UBjvc7TTCA%2B7qUNp6F8KlQYTLRg5ah1bW50yY4uU5I47Gft%2BDnNRVloCQJXdQvW99qqMpabp%2FDHBQIFZZM1bpnefQjmr9U6RLkBfrnHAHH8MIGXzMQGOqUBHeJVrMDX4K1h45vFaXTk7dusG6TS8eda3y0%2F%2FWMC3qRGLQJxRH%2FoKYa7PqRWvazmWzk%2BCZp9yXkLhvSi1W7j4YBeXWBssLVgLC%2FmK3PoL4FnerYfI2ViwiXIcMcHBljRJDDvNnE%2Fn7%2FCX69evrSW7kls6asfVaK9TstT59WP30xGv5fqbL94sKBn4vc6qFU6NLq0rGBnkpWLIhHeNEL3EZvkE3fs&X-Amz-Signature=161aa9e458a775e16dd357cd70c98699a9e11c7ce7e6463f97f8678a08076d86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILWUSRD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCdotWRn6Bwji%2Fucl4O5NQRIgg%2B4iO%2FoC84Ew5hAEV6dQIgMiMVf%2F%2FKweCNWOIgky34YaTVA4L84oFiZo1WQbliTFcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDC8Qzfsko79F0IbXJircAyWQB%2Bgtqeh0A8Hv6e5Gftw8TBv1jSH5L4cjrU6yHBG1817jXPq9VTljRJhLwqxiJiWn%2FGbS1JzwUTqgMIyUAycE98zAAB17qujaUA%2Bj2W0seebMrObwEl3VcyLIuyKmohcFNyX3jYenQyKw81cYXtI1DvuO3vxxtAT6b2TXHA4Y0CkKf5L8otJyhbL8sKGnai676MC%2FxvuEyEsz9ZS1xJ4mcUDfRC%2B5XQVXVPn1sWH1%2FJCV60SRMsGd4frk0q%2BJGnJDfmeM6Jz4oLRdagHeoh957yjATI13%2FSb7cM9xR%2BoYl23EC3jnoyOhqea4tSL1rhUzetc6AbvjhnT0IqFL9A%2Btb8hZJqMqthqE%2Fl7F1cjOC9MxfVVn%2BHpn4xW4mjD80ZgWpmVXUM9ScBBvQDcpQhiJt4uhiFAnU2sudCtubRC4Y5rymXD8YGNFkh2r3pgNTCO9gneOxTmQdqxmDkmHEFwTiQvvbTClcYUcn%2FoUJWFtZBNB2eJRnAE3r8S8hYmQoLUT%2F9ZVMsFKILYu9UBjvc7TTCA%2B7qUNp6F8KlQYTLRg5ah1bW50yY4uU5I47Gft%2BDnNRVloCQJXdQvW99qqMpabp%2FDHBQIFZZM1bpnefQjmr9U6RLkBfrnHAHH8MIGXzMQGOqUBHeJVrMDX4K1h45vFaXTk7dusG6TS8eda3y0%2F%2FWMC3qRGLQJxRH%2FoKYa7PqRWvazmWzk%2BCZp9yXkLhvSi1W7j4YBeXWBssLVgLC%2FmK3PoL4FnerYfI2ViwiXIcMcHBljRJDDvNnE%2Fn7%2FCX69evrSW7kls6asfVaK9TstT59WP30xGv5fqbL94sKBn4vc6qFU6NLq0rGBnkpWLIhHeNEL3EZvkE3fs&X-Amz-Signature=be6e64e058ac696361b36d4aaf7e94e3acd8d77706212a6a0ff59077ee3c4230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
