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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGXPOHC2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICHbVKWrXkfXjJIG%2FQfh5Q3FZ2dBOhRCFii4Rngc41m7AiEAoyQOpGlLogCbttAkohSFV1j%2FANYufJPcbpH8HlktsJAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOPokG7ppSlb4f4KyrcAzOsAOi1xwtORap46HxJ%2F8Kdxp0yKPiewos7LQPFhk1yGglUYATztasnEAzVXx0vFVZ%2FFVDEarLgNiRbIAEKUsDDDd5fDrqiZagBMIGnX7ZEcfj6mfO4Mk2aOZAHcEqg9FUqho7p%2BKCaJ0qEqyCRVp%2B8kP%2BP7W04K8kFk%2BUcSpLFOKsohdBSFkS2K1RtH2xbU8LHCTJ8vOluFIUzz2X4blOlOdvOMUG95MecQcxLJ6y7LwBRQBNbwFV5FXXPpyD0rY2pQHi41ol6gXPifPfCeXzPBjBjMng8o%2Br0%2BCqNn5nTEhZ3tJ%2FsZ2WpSQx6wP6p17RJAafL1m82X3eHpyFxoKOlaU42qz3EBO8QYhsUXWJK1ax0WczRW0btlV0A0jEr5ne2rX39pVxJyK%2BSqeOGgPb1Kc3HaSnEDgCmtjfgZuz%2FP%2BF6C7VKoCa2ABJhhjPh5fHfy4j84qdk5yhneV%2BABmGicbgWAhBy%2B%2Bgxum6a7auEneV6aKAdwgggoiyxz%2F9kom8k7PpBSZ898s8TsW0Ej2JGrln2YH8jXLZxPT5QCS7vgZk%2BxiJa4h%2Bkk8mHgrX1f3R1MWsIceSzhkJajjeMxC8dRCRkQCKLWZYHwT4sKmgcwI7TmFPrV8ROzMt3MOGS2cQGOqUB2esWLsIjMelJyjsIw2Ozy1d%2B0Q8wtycCzi38QsUCE0IzsUiQBOKSUrx2vPudaBO7n%2FNJpUkfhcXJZrN1xvGBNyvSv1xycBSRJrbvujO%2FK%2B42QifZjb42%2FAI8W16Pt5snhZqNIsFLhFtdSQP3eqvhQWLNJH01x1kKOKoif46ovDBrSFM6tJdg2di5Lp9V5uOoK07bIdI2N0HnbPhTj%2BDmBWsZJpIK&X-Amz-Signature=a94261ba5b6ad31e180dc21af904e6d524a1acfeecdf9442573751c02ad65966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGXPOHC2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICHbVKWrXkfXjJIG%2FQfh5Q3FZ2dBOhRCFii4Rngc41m7AiEAoyQOpGlLogCbttAkohSFV1j%2FANYufJPcbpH8HlktsJAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOPokG7ppSlb4f4KyrcAzOsAOi1xwtORap46HxJ%2F8Kdxp0yKPiewos7LQPFhk1yGglUYATztasnEAzVXx0vFVZ%2FFVDEarLgNiRbIAEKUsDDDd5fDrqiZagBMIGnX7ZEcfj6mfO4Mk2aOZAHcEqg9FUqho7p%2BKCaJ0qEqyCRVp%2B8kP%2BP7W04K8kFk%2BUcSpLFOKsohdBSFkS2K1RtH2xbU8LHCTJ8vOluFIUzz2X4blOlOdvOMUG95MecQcxLJ6y7LwBRQBNbwFV5FXXPpyD0rY2pQHi41ol6gXPifPfCeXzPBjBjMng8o%2Br0%2BCqNn5nTEhZ3tJ%2FsZ2WpSQx6wP6p17RJAafL1m82X3eHpyFxoKOlaU42qz3EBO8QYhsUXWJK1ax0WczRW0btlV0A0jEr5ne2rX39pVxJyK%2BSqeOGgPb1Kc3HaSnEDgCmtjfgZuz%2FP%2BF6C7VKoCa2ABJhhjPh5fHfy4j84qdk5yhneV%2BABmGicbgWAhBy%2B%2Bgxum6a7auEneV6aKAdwgggoiyxz%2F9kom8k7PpBSZ898s8TsW0Ej2JGrln2YH8jXLZxPT5QCS7vgZk%2BxiJa4h%2Bkk8mHgrX1f3R1MWsIceSzhkJajjeMxC8dRCRkQCKLWZYHwT4sKmgcwI7TmFPrV8ROzMt3MOGS2cQGOqUB2esWLsIjMelJyjsIw2Ozy1d%2B0Q8wtycCzi38QsUCE0IzsUiQBOKSUrx2vPudaBO7n%2FNJpUkfhcXJZrN1xvGBNyvSv1xycBSRJrbvujO%2FK%2B42QifZjb42%2FAI8W16Pt5snhZqNIsFLhFtdSQP3eqvhQWLNJH01x1kKOKoif46ovDBrSFM6tJdg2di5Lp9V5uOoK07bIdI2N0HnbPhTj%2BDmBWsZJpIK&X-Amz-Signature=f83a04f1d67cf4e38755686a364a67ca3bda2c7e017441f940cd08dfab9a0fea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGXPOHC2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICHbVKWrXkfXjJIG%2FQfh5Q3FZ2dBOhRCFii4Rngc41m7AiEAoyQOpGlLogCbttAkohSFV1j%2FANYufJPcbpH8HlktsJAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOPokG7ppSlb4f4KyrcAzOsAOi1xwtORap46HxJ%2F8Kdxp0yKPiewos7LQPFhk1yGglUYATztasnEAzVXx0vFVZ%2FFVDEarLgNiRbIAEKUsDDDd5fDrqiZagBMIGnX7ZEcfj6mfO4Mk2aOZAHcEqg9FUqho7p%2BKCaJ0qEqyCRVp%2B8kP%2BP7W04K8kFk%2BUcSpLFOKsohdBSFkS2K1RtH2xbU8LHCTJ8vOluFIUzz2X4blOlOdvOMUG95MecQcxLJ6y7LwBRQBNbwFV5FXXPpyD0rY2pQHi41ol6gXPifPfCeXzPBjBjMng8o%2Br0%2BCqNn5nTEhZ3tJ%2FsZ2WpSQx6wP6p17RJAafL1m82X3eHpyFxoKOlaU42qz3EBO8QYhsUXWJK1ax0WczRW0btlV0A0jEr5ne2rX39pVxJyK%2BSqeOGgPb1Kc3HaSnEDgCmtjfgZuz%2FP%2BF6C7VKoCa2ABJhhjPh5fHfy4j84qdk5yhneV%2BABmGicbgWAhBy%2B%2Bgxum6a7auEneV6aKAdwgggoiyxz%2F9kom8k7PpBSZ898s8TsW0Ej2JGrln2YH8jXLZxPT5QCS7vgZk%2BxiJa4h%2Bkk8mHgrX1f3R1MWsIceSzhkJajjeMxC8dRCRkQCKLWZYHwT4sKmgcwI7TmFPrV8ROzMt3MOGS2cQGOqUB2esWLsIjMelJyjsIw2Ozy1d%2B0Q8wtycCzi38QsUCE0IzsUiQBOKSUrx2vPudaBO7n%2FNJpUkfhcXJZrN1xvGBNyvSv1xycBSRJrbvujO%2FK%2B42QifZjb42%2FAI8W16Pt5snhZqNIsFLhFtdSQP3eqvhQWLNJH01x1kKOKoif46ovDBrSFM6tJdg2di5Lp9V5uOoK07bIdI2N0HnbPhTj%2BDmBWsZJpIK&X-Amz-Signature=39aa80d0b72577430888c38b78ef5dd7039ae0259e6927c8c3c3b49f8f4067d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGXPOHC2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICHbVKWrXkfXjJIG%2FQfh5Q3FZ2dBOhRCFii4Rngc41m7AiEAoyQOpGlLogCbttAkohSFV1j%2FANYufJPcbpH8HlktsJAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOPokG7ppSlb4f4KyrcAzOsAOi1xwtORap46HxJ%2F8Kdxp0yKPiewos7LQPFhk1yGglUYATztasnEAzVXx0vFVZ%2FFVDEarLgNiRbIAEKUsDDDd5fDrqiZagBMIGnX7ZEcfj6mfO4Mk2aOZAHcEqg9FUqho7p%2BKCaJ0qEqyCRVp%2B8kP%2BP7W04K8kFk%2BUcSpLFOKsohdBSFkS2K1RtH2xbU8LHCTJ8vOluFIUzz2X4blOlOdvOMUG95MecQcxLJ6y7LwBRQBNbwFV5FXXPpyD0rY2pQHi41ol6gXPifPfCeXzPBjBjMng8o%2Br0%2BCqNn5nTEhZ3tJ%2FsZ2WpSQx6wP6p17RJAafL1m82X3eHpyFxoKOlaU42qz3EBO8QYhsUXWJK1ax0WczRW0btlV0A0jEr5ne2rX39pVxJyK%2BSqeOGgPb1Kc3HaSnEDgCmtjfgZuz%2FP%2BF6C7VKoCa2ABJhhjPh5fHfy4j84qdk5yhneV%2BABmGicbgWAhBy%2B%2Bgxum6a7auEneV6aKAdwgggoiyxz%2F9kom8k7PpBSZ898s8TsW0Ej2JGrln2YH8jXLZxPT5QCS7vgZk%2BxiJa4h%2Bkk8mHgrX1f3R1MWsIceSzhkJajjeMxC8dRCRkQCKLWZYHwT4sKmgcwI7TmFPrV8ROzMt3MOGS2cQGOqUB2esWLsIjMelJyjsIw2Ozy1d%2B0Q8wtycCzi38QsUCE0IzsUiQBOKSUrx2vPudaBO7n%2FNJpUkfhcXJZrN1xvGBNyvSv1xycBSRJrbvujO%2FK%2B42QifZjb42%2FAI8W16Pt5snhZqNIsFLhFtdSQP3eqvhQWLNJH01x1kKOKoif46ovDBrSFM6tJdg2di5Lp9V5uOoK07bIdI2N0HnbPhTj%2BDmBWsZJpIK&X-Amz-Signature=e3abc742d41144c70206c66619f3c027610812fd8781771308619bc608cc6370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGXPOHC2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICHbVKWrXkfXjJIG%2FQfh5Q3FZ2dBOhRCFii4Rngc41m7AiEAoyQOpGlLogCbttAkohSFV1j%2FANYufJPcbpH8HlktsJAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOPokG7ppSlb4f4KyrcAzOsAOi1xwtORap46HxJ%2F8Kdxp0yKPiewos7LQPFhk1yGglUYATztasnEAzVXx0vFVZ%2FFVDEarLgNiRbIAEKUsDDDd5fDrqiZagBMIGnX7ZEcfj6mfO4Mk2aOZAHcEqg9FUqho7p%2BKCaJ0qEqyCRVp%2B8kP%2BP7W04K8kFk%2BUcSpLFOKsohdBSFkS2K1RtH2xbU8LHCTJ8vOluFIUzz2X4blOlOdvOMUG95MecQcxLJ6y7LwBRQBNbwFV5FXXPpyD0rY2pQHi41ol6gXPifPfCeXzPBjBjMng8o%2Br0%2BCqNn5nTEhZ3tJ%2FsZ2WpSQx6wP6p17RJAafL1m82X3eHpyFxoKOlaU42qz3EBO8QYhsUXWJK1ax0WczRW0btlV0A0jEr5ne2rX39pVxJyK%2BSqeOGgPb1Kc3HaSnEDgCmtjfgZuz%2FP%2BF6C7VKoCa2ABJhhjPh5fHfy4j84qdk5yhneV%2BABmGicbgWAhBy%2B%2Bgxum6a7auEneV6aKAdwgggoiyxz%2F9kom8k7PpBSZ898s8TsW0Ej2JGrln2YH8jXLZxPT5QCS7vgZk%2BxiJa4h%2Bkk8mHgrX1f3R1MWsIceSzhkJajjeMxC8dRCRkQCKLWZYHwT4sKmgcwI7TmFPrV8ROzMt3MOGS2cQGOqUB2esWLsIjMelJyjsIw2Ozy1d%2B0Q8wtycCzi38QsUCE0IzsUiQBOKSUrx2vPudaBO7n%2FNJpUkfhcXJZrN1xvGBNyvSv1xycBSRJrbvujO%2FK%2B42QifZjb42%2FAI8W16Pt5snhZqNIsFLhFtdSQP3eqvhQWLNJH01x1kKOKoif46ovDBrSFM6tJdg2di5Lp9V5uOoK07bIdI2N0HnbPhTj%2BDmBWsZJpIK&X-Amz-Signature=3a1f6e6a9930db26b9e1b41731c0b2af7933540c473e689981b888ab81d8af58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGXPOHC2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICHbVKWrXkfXjJIG%2FQfh5Q3FZ2dBOhRCFii4Rngc41m7AiEAoyQOpGlLogCbttAkohSFV1j%2FANYufJPcbpH8HlktsJAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOPokG7ppSlb4f4KyrcAzOsAOi1xwtORap46HxJ%2F8Kdxp0yKPiewos7LQPFhk1yGglUYATztasnEAzVXx0vFVZ%2FFVDEarLgNiRbIAEKUsDDDd5fDrqiZagBMIGnX7ZEcfj6mfO4Mk2aOZAHcEqg9FUqho7p%2BKCaJ0qEqyCRVp%2B8kP%2BP7W04K8kFk%2BUcSpLFOKsohdBSFkS2K1RtH2xbU8LHCTJ8vOluFIUzz2X4blOlOdvOMUG95MecQcxLJ6y7LwBRQBNbwFV5FXXPpyD0rY2pQHi41ol6gXPifPfCeXzPBjBjMng8o%2Br0%2BCqNn5nTEhZ3tJ%2FsZ2WpSQx6wP6p17RJAafL1m82X3eHpyFxoKOlaU42qz3EBO8QYhsUXWJK1ax0WczRW0btlV0A0jEr5ne2rX39pVxJyK%2BSqeOGgPb1Kc3HaSnEDgCmtjfgZuz%2FP%2BF6C7VKoCa2ABJhhjPh5fHfy4j84qdk5yhneV%2BABmGicbgWAhBy%2B%2Bgxum6a7auEneV6aKAdwgggoiyxz%2F9kom8k7PpBSZ898s8TsW0Ej2JGrln2YH8jXLZxPT5QCS7vgZk%2BxiJa4h%2Bkk8mHgrX1f3R1MWsIceSzhkJajjeMxC8dRCRkQCKLWZYHwT4sKmgcwI7TmFPrV8ROzMt3MOGS2cQGOqUB2esWLsIjMelJyjsIw2Ozy1d%2B0Q8wtycCzi38QsUCE0IzsUiQBOKSUrx2vPudaBO7n%2FNJpUkfhcXJZrN1xvGBNyvSv1xycBSRJrbvujO%2FK%2B42QifZjb42%2FAI8W16Pt5snhZqNIsFLhFtdSQP3eqvhQWLNJH01x1kKOKoif46ovDBrSFM6tJdg2di5Lp9V5uOoK07bIdI2N0HnbPhTj%2BDmBWsZJpIK&X-Amz-Signature=32b75a428b7b237045fd1e8937fa58217df48ffdfd63b9db943e239e55455660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGXPOHC2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICHbVKWrXkfXjJIG%2FQfh5Q3FZ2dBOhRCFii4Rngc41m7AiEAoyQOpGlLogCbttAkohSFV1j%2FANYufJPcbpH8HlktsJAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOPokG7ppSlb4f4KyrcAzOsAOi1xwtORap46HxJ%2F8Kdxp0yKPiewos7LQPFhk1yGglUYATztasnEAzVXx0vFVZ%2FFVDEarLgNiRbIAEKUsDDDd5fDrqiZagBMIGnX7ZEcfj6mfO4Mk2aOZAHcEqg9FUqho7p%2BKCaJ0qEqyCRVp%2B8kP%2BP7W04K8kFk%2BUcSpLFOKsohdBSFkS2K1RtH2xbU8LHCTJ8vOluFIUzz2X4blOlOdvOMUG95MecQcxLJ6y7LwBRQBNbwFV5FXXPpyD0rY2pQHi41ol6gXPifPfCeXzPBjBjMng8o%2Br0%2BCqNn5nTEhZ3tJ%2FsZ2WpSQx6wP6p17RJAafL1m82X3eHpyFxoKOlaU42qz3EBO8QYhsUXWJK1ax0WczRW0btlV0A0jEr5ne2rX39pVxJyK%2BSqeOGgPb1Kc3HaSnEDgCmtjfgZuz%2FP%2BF6C7VKoCa2ABJhhjPh5fHfy4j84qdk5yhneV%2BABmGicbgWAhBy%2B%2Bgxum6a7auEneV6aKAdwgggoiyxz%2F9kom8k7PpBSZ898s8TsW0Ej2JGrln2YH8jXLZxPT5QCS7vgZk%2BxiJa4h%2Bkk8mHgrX1f3R1MWsIceSzhkJajjeMxC8dRCRkQCKLWZYHwT4sKmgcwI7TmFPrV8ROzMt3MOGS2cQGOqUB2esWLsIjMelJyjsIw2Ozy1d%2B0Q8wtycCzi38QsUCE0IzsUiQBOKSUrx2vPudaBO7n%2FNJpUkfhcXJZrN1xvGBNyvSv1xycBSRJrbvujO%2FK%2B42QifZjb42%2FAI8W16Pt5snhZqNIsFLhFtdSQP3eqvhQWLNJH01x1kKOKoif46ovDBrSFM6tJdg2di5Lp9V5uOoK07bIdI2N0HnbPhTj%2BDmBWsZJpIK&X-Amz-Signature=3b10ac14d81c5c66143789948a896e4986b6d19eca61e3d4b517c4f4657918da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGXPOHC2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICHbVKWrXkfXjJIG%2FQfh5Q3FZ2dBOhRCFii4Rngc41m7AiEAoyQOpGlLogCbttAkohSFV1j%2FANYufJPcbpH8HlktsJAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOPokG7ppSlb4f4KyrcAzOsAOi1xwtORap46HxJ%2F8Kdxp0yKPiewos7LQPFhk1yGglUYATztasnEAzVXx0vFVZ%2FFVDEarLgNiRbIAEKUsDDDd5fDrqiZagBMIGnX7ZEcfj6mfO4Mk2aOZAHcEqg9FUqho7p%2BKCaJ0qEqyCRVp%2B8kP%2BP7W04K8kFk%2BUcSpLFOKsohdBSFkS2K1RtH2xbU8LHCTJ8vOluFIUzz2X4blOlOdvOMUG95MecQcxLJ6y7LwBRQBNbwFV5FXXPpyD0rY2pQHi41ol6gXPifPfCeXzPBjBjMng8o%2Br0%2BCqNn5nTEhZ3tJ%2FsZ2WpSQx6wP6p17RJAafL1m82X3eHpyFxoKOlaU42qz3EBO8QYhsUXWJK1ax0WczRW0btlV0A0jEr5ne2rX39pVxJyK%2BSqeOGgPb1Kc3HaSnEDgCmtjfgZuz%2FP%2BF6C7VKoCa2ABJhhjPh5fHfy4j84qdk5yhneV%2BABmGicbgWAhBy%2B%2Bgxum6a7auEneV6aKAdwgggoiyxz%2F9kom8k7PpBSZ898s8TsW0Ej2JGrln2YH8jXLZxPT5QCS7vgZk%2BxiJa4h%2Bkk8mHgrX1f3R1MWsIceSzhkJajjeMxC8dRCRkQCKLWZYHwT4sKmgcwI7TmFPrV8ROzMt3MOGS2cQGOqUB2esWLsIjMelJyjsIw2Ozy1d%2B0Q8wtycCzi38QsUCE0IzsUiQBOKSUrx2vPudaBO7n%2FNJpUkfhcXJZrN1xvGBNyvSv1xycBSRJrbvujO%2FK%2B42QifZjb42%2FAI8W16Pt5snhZqNIsFLhFtdSQP3eqvhQWLNJH01x1kKOKoif46ovDBrSFM6tJdg2di5Lp9V5uOoK07bIdI2N0HnbPhTj%2BDmBWsZJpIK&X-Amz-Signature=f45c1e23954f112e81e193dd5dd9c130a26c8f5b94cb120291cf5a945e893105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGXPOHC2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICHbVKWrXkfXjJIG%2FQfh5Q3FZ2dBOhRCFii4Rngc41m7AiEAoyQOpGlLogCbttAkohSFV1j%2FANYufJPcbpH8HlktsJAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOPokG7ppSlb4f4KyrcAzOsAOi1xwtORap46HxJ%2F8Kdxp0yKPiewos7LQPFhk1yGglUYATztasnEAzVXx0vFVZ%2FFVDEarLgNiRbIAEKUsDDDd5fDrqiZagBMIGnX7ZEcfj6mfO4Mk2aOZAHcEqg9FUqho7p%2BKCaJ0qEqyCRVp%2B8kP%2BP7W04K8kFk%2BUcSpLFOKsohdBSFkS2K1RtH2xbU8LHCTJ8vOluFIUzz2X4blOlOdvOMUG95MecQcxLJ6y7LwBRQBNbwFV5FXXPpyD0rY2pQHi41ol6gXPifPfCeXzPBjBjMng8o%2Br0%2BCqNn5nTEhZ3tJ%2FsZ2WpSQx6wP6p17RJAafL1m82X3eHpyFxoKOlaU42qz3EBO8QYhsUXWJK1ax0WczRW0btlV0A0jEr5ne2rX39pVxJyK%2BSqeOGgPb1Kc3HaSnEDgCmtjfgZuz%2FP%2BF6C7VKoCa2ABJhhjPh5fHfy4j84qdk5yhneV%2BABmGicbgWAhBy%2B%2Bgxum6a7auEneV6aKAdwgggoiyxz%2F9kom8k7PpBSZ898s8TsW0Ej2JGrln2YH8jXLZxPT5QCS7vgZk%2BxiJa4h%2Bkk8mHgrX1f3R1MWsIceSzhkJajjeMxC8dRCRkQCKLWZYHwT4sKmgcwI7TmFPrV8ROzMt3MOGS2cQGOqUB2esWLsIjMelJyjsIw2Ozy1d%2B0Q8wtycCzi38QsUCE0IzsUiQBOKSUrx2vPudaBO7n%2FNJpUkfhcXJZrN1xvGBNyvSv1xycBSRJrbvujO%2FK%2B42QifZjb42%2FAI8W16Pt5snhZqNIsFLhFtdSQP3eqvhQWLNJH01x1kKOKoif46ovDBrSFM6tJdg2di5Lp9V5uOoK07bIdI2N0HnbPhTj%2BDmBWsZJpIK&X-Amz-Signature=7b4a6cae4443d92de4990bf9c998cf890919b133a772b85cf3ec9d79ac80e909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGXPOHC2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICHbVKWrXkfXjJIG%2FQfh5Q3FZ2dBOhRCFii4Rngc41m7AiEAoyQOpGlLogCbttAkohSFV1j%2FANYufJPcbpH8HlktsJAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOPokG7ppSlb4f4KyrcAzOsAOi1xwtORap46HxJ%2F8Kdxp0yKPiewos7LQPFhk1yGglUYATztasnEAzVXx0vFVZ%2FFVDEarLgNiRbIAEKUsDDDd5fDrqiZagBMIGnX7ZEcfj6mfO4Mk2aOZAHcEqg9FUqho7p%2BKCaJ0qEqyCRVp%2B8kP%2BP7W04K8kFk%2BUcSpLFOKsohdBSFkS2K1RtH2xbU8LHCTJ8vOluFIUzz2X4blOlOdvOMUG95MecQcxLJ6y7LwBRQBNbwFV5FXXPpyD0rY2pQHi41ol6gXPifPfCeXzPBjBjMng8o%2Br0%2BCqNn5nTEhZ3tJ%2FsZ2WpSQx6wP6p17RJAafL1m82X3eHpyFxoKOlaU42qz3EBO8QYhsUXWJK1ax0WczRW0btlV0A0jEr5ne2rX39pVxJyK%2BSqeOGgPb1Kc3HaSnEDgCmtjfgZuz%2FP%2BF6C7VKoCa2ABJhhjPh5fHfy4j84qdk5yhneV%2BABmGicbgWAhBy%2B%2Bgxum6a7auEneV6aKAdwgggoiyxz%2F9kom8k7PpBSZ898s8TsW0Ej2JGrln2YH8jXLZxPT5QCS7vgZk%2BxiJa4h%2Bkk8mHgrX1f3R1MWsIceSzhkJajjeMxC8dRCRkQCKLWZYHwT4sKmgcwI7TmFPrV8ROzMt3MOGS2cQGOqUB2esWLsIjMelJyjsIw2Ozy1d%2B0Q8wtycCzi38QsUCE0IzsUiQBOKSUrx2vPudaBO7n%2FNJpUkfhcXJZrN1xvGBNyvSv1xycBSRJrbvujO%2FK%2B42QifZjb42%2FAI8W16Pt5snhZqNIsFLhFtdSQP3eqvhQWLNJH01x1kKOKoif46ovDBrSFM6tJdg2di5Lp9V5uOoK07bIdI2N0HnbPhTj%2BDmBWsZJpIK&X-Amz-Signature=8403b70c9a114cb73f0331f44da2e06ff782cd8cefbe4a440aeb43e4b755023c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKE7EVC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDtrRhxNuITJR9pZ1%2FuZAZpy6ZVt9YrQeKmOgi01VTOGAIgJZavdnOujD3WFk%2BnGYlSO%2B5Cj0K24nCCDRviaE%2Bjv6EqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI4utI02Re833O08ircA7B3QzTdShA0DZScEZEWAxhLh%2Bfr3jxeD0DijX%2FcUGRl8LYcChsjfO9ia8tkqwYGd92KYDi0bbVugvWWzSfxBbpsMUL%2BcYCJbJ6%2BwUraRQrF59nwbBy8dipdjsdBfoLtQI6QQwr%2FTmR9T3QEzT7WQWnxS8Ck6p2zbEJzhZr2cynPKB76CR5S%2ByEgAKIIwD12A3s7z%2BIEycyTMLsIAqw6Cav%2B%2FogHjqZPwSgT0zsUCVC8PRNp%2BAyAqDe%2BBIB9J6%2FUVMtWEcA7fqua303e8vlQEyc7qDv%2FwOA5dby1K3ZEtPCQHG8PcXlSiXTNRC4QA1vwkrfm8FA9X4clbhQVUHETmD1VdYa4%2BhU0kTva%2FCCj5mZf5ukRU3CrZpOMFDm1K%2Fuh13%2FLZ8aKAlG%2Byev1IwnGMHOlzBqabTdNzkZplWfUm2zXdm%2F%2FcjSDFj2HeGiwG2LYjyTVE0ld%2BKvNlrcX78h8tZ49VPvpsMh6SYgwEYHMiNQ6GuhC%2B%2BeSJSwohpcx%2BKH6wTdetkELZsgXN%2FlYdIjKKMPlQVaYF2Sx%2F21opaVnXxQX9ZIImb4plmoa0LjfDxVIdEtBUJA9tISw%2BQzdqpoy%2BtjmOu%2Fz9Do9hHmzeZztAoN4sVif8r7ldMo0%2FmNQMO%2BS2cQGOqUB%2FmdQP1N2vnO2n5jwB7eSuaiFOjKfDrDif7bucqqNXxtsppRRWZJmuxiPAWDx%2BCVfIZcip6jsl4VtEy35MopR3Rhe2fYWbGneDsODwfXMDWiDvsi01YtVx5GrYwlCe82yM0PcmT8ZH6Krl2Us4mr4ajblbzbTP1JuclrXqM8%2Fcu04INtxanwYy09EKp7MOZtzQGq%2FYoXJu0Vph08sn4iBMSSaVgdu&X-Amz-Signature=e29b3e74de9150a8ce52d79416186aabe6fc7c30a4bef6f92b92483e184b9444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCP5S7JL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC1yYKkDijsaKb%2FvfQqIGlhYgeNUkTfdM%2FEHZXIwQFDUAIgWCnCokjjnV2%2BK8oMX7yAhoeIcBGAARc%2FT7e3DBTT2FIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1%2Fn8e3SfchG8ieMCrcA52bqianZ18HhQncDQGUHhKl79QGzYGdR%2F5W1PHOCj7nSt66bY8r54gKJb0wURb356i9%2BmUyHEWxlsGSD%2Brzq9kPPNVJPBT2eSYwT7N3wLcFPCQ9rs8K7bJVm7sI%2FXBSuhHvDgIzjRGPsuukSaffOFmhxL%2FmwkJCfEmPGqbBfjEFXZp3fjdn0W%2FLt1h%2Bk4WT7lcDr3jkn0B0VOcq20YeLTrQ963TTeGiLxIPj05X8MXEKyuzngwokt3s44n4DGZuRIj9vZcq3mmL%2FjAMQPvOQOuionxUx3A8TzraNXtsr1xPEOei%2F4uUIgnmA2L1EiZtV9gBkKLnpfAkxpi66TTluB5nLrfz5nlO3bI%2BqE8%2F5iEq5y8Dfd5OHsYQQmv%2BBE%2FTMY%2BdWcIwFG4vHQwgdHs3JrD3tQrxFc1BS8aljL4qCEg3KUWsTGkLiw8T2O1%2FSRJJITsiZMHG0M5YrZUEEk2G7HJj2Os8YD4KhzEcSWw3FyGctH6F%2BRdb46%2By%2F890%2F8DPIB0nnyeth4K%2BFfNrTPMypdUh1mij5ZkbgsFFoIHp9hZjP3d5m9cwkLcuDNmfh8J5Y7P9DC6sMK25OtbPv0pRlSaIQUwa1ukcvHjyKFFMEcZ4RHUEQVXuE0zQZ85UMNqS2cQGOqUBIKhzFsOYJqOvYq0cv2dJFllYG8YWL8iJbztyFe3NPc7hRyW45TOdzF76XNHuz4NnWRjVTigg%2FFSuqWqQ66e6qFzqk7vPC1Er72q04RIUTjRuzsR04BHBisJs%2BSlVPSFHDURTv7x4kgI7ar%2Bc0dvzdxrMfBhGKylYHUIINrnshG%2FmGf1G8ci9SoMSLxhzJWPH7d73nuaI6WM5ZgVCG2GV8kGG9sOH&X-Amz-Signature=e06c87f45406a638a03aa2470af0dde0bdbee6872a03fe0d8f8fa79838d08899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCP5S7JL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC1yYKkDijsaKb%2FvfQqIGlhYgeNUkTfdM%2FEHZXIwQFDUAIgWCnCokjjnV2%2BK8oMX7yAhoeIcBGAARc%2FT7e3DBTT2FIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1%2Fn8e3SfchG8ieMCrcA52bqianZ18HhQncDQGUHhKl79QGzYGdR%2F5W1PHOCj7nSt66bY8r54gKJb0wURb356i9%2BmUyHEWxlsGSD%2Brzq9kPPNVJPBT2eSYwT7N3wLcFPCQ9rs8K7bJVm7sI%2FXBSuhHvDgIzjRGPsuukSaffOFmhxL%2FmwkJCfEmPGqbBfjEFXZp3fjdn0W%2FLt1h%2Bk4WT7lcDr3jkn0B0VOcq20YeLTrQ963TTeGiLxIPj05X8MXEKyuzngwokt3s44n4DGZuRIj9vZcq3mmL%2FjAMQPvOQOuionxUx3A8TzraNXtsr1xPEOei%2F4uUIgnmA2L1EiZtV9gBkKLnpfAkxpi66TTluB5nLrfz5nlO3bI%2BqE8%2F5iEq5y8Dfd5OHsYQQmv%2BBE%2FTMY%2BdWcIwFG4vHQwgdHs3JrD3tQrxFc1BS8aljL4qCEg3KUWsTGkLiw8T2O1%2FSRJJITsiZMHG0M5YrZUEEk2G7HJj2Os8YD4KhzEcSWw3FyGctH6F%2BRdb46%2By%2F890%2F8DPIB0nnyeth4K%2BFfNrTPMypdUh1mij5ZkbgsFFoIHp9hZjP3d5m9cwkLcuDNmfh8J5Y7P9DC6sMK25OtbPv0pRlSaIQUwa1ukcvHjyKFFMEcZ4RHUEQVXuE0zQZ85UMNqS2cQGOqUBIKhzFsOYJqOvYq0cv2dJFllYG8YWL8iJbztyFe3NPc7hRyW45TOdzF76XNHuz4NnWRjVTigg%2FFSuqWqQ66e6qFzqk7vPC1Er72q04RIUTjRuzsR04BHBisJs%2BSlVPSFHDURTv7x4kgI7ar%2Bc0dvzdxrMfBhGKylYHUIINrnshG%2FmGf1G8ci9SoMSLxhzJWPH7d73nuaI6WM5ZgVCG2GV8kGG9sOH&X-Amz-Signature=2e2ea4b1a200fbe0eeaf0dbf2f3e21d85e8bcab10eb3cd37a00cffa03b1b5295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCP5S7JL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC1yYKkDijsaKb%2FvfQqIGlhYgeNUkTfdM%2FEHZXIwQFDUAIgWCnCokjjnV2%2BK8oMX7yAhoeIcBGAARc%2FT7e3DBTT2FIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1%2Fn8e3SfchG8ieMCrcA52bqianZ18HhQncDQGUHhKl79QGzYGdR%2F5W1PHOCj7nSt66bY8r54gKJb0wURb356i9%2BmUyHEWxlsGSD%2Brzq9kPPNVJPBT2eSYwT7N3wLcFPCQ9rs8K7bJVm7sI%2FXBSuhHvDgIzjRGPsuukSaffOFmhxL%2FmwkJCfEmPGqbBfjEFXZp3fjdn0W%2FLt1h%2Bk4WT7lcDr3jkn0B0VOcq20YeLTrQ963TTeGiLxIPj05X8MXEKyuzngwokt3s44n4DGZuRIj9vZcq3mmL%2FjAMQPvOQOuionxUx3A8TzraNXtsr1xPEOei%2F4uUIgnmA2L1EiZtV9gBkKLnpfAkxpi66TTluB5nLrfz5nlO3bI%2BqE8%2F5iEq5y8Dfd5OHsYQQmv%2BBE%2FTMY%2BdWcIwFG4vHQwgdHs3JrD3tQrxFc1BS8aljL4qCEg3KUWsTGkLiw8T2O1%2FSRJJITsiZMHG0M5YrZUEEk2G7HJj2Os8YD4KhzEcSWw3FyGctH6F%2BRdb46%2By%2F890%2F8DPIB0nnyeth4K%2BFfNrTPMypdUh1mij5ZkbgsFFoIHp9hZjP3d5m9cwkLcuDNmfh8J5Y7P9DC6sMK25OtbPv0pRlSaIQUwa1ukcvHjyKFFMEcZ4RHUEQVXuE0zQZ85UMNqS2cQGOqUBIKhzFsOYJqOvYq0cv2dJFllYG8YWL8iJbztyFe3NPc7hRyW45TOdzF76XNHuz4NnWRjVTigg%2FFSuqWqQ66e6qFzqk7vPC1Er72q04RIUTjRuzsR04BHBisJs%2BSlVPSFHDURTv7x4kgI7ar%2Bc0dvzdxrMfBhGKylYHUIINrnshG%2FmGf1G8ci9SoMSLxhzJWPH7d73nuaI6WM5ZgVCG2GV8kGG9sOH&X-Amz-Signature=936b8c0d4678f4b986269ecd5e24ce42336fcc2dcb358be6aab7e16210e3853f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCP5S7JL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC1yYKkDijsaKb%2FvfQqIGlhYgeNUkTfdM%2FEHZXIwQFDUAIgWCnCokjjnV2%2BK8oMX7yAhoeIcBGAARc%2FT7e3DBTT2FIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1%2Fn8e3SfchG8ieMCrcA52bqianZ18HhQncDQGUHhKl79QGzYGdR%2F5W1PHOCj7nSt66bY8r54gKJb0wURb356i9%2BmUyHEWxlsGSD%2Brzq9kPPNVJPBT2eSYwT7N3wLcFPCQ9rs8K7bJVm7sI%2FXBSuhHvDgIzjRGPsuukSaffOFmhxL%2FmwkJCfEmPGqbBfjEFXZp3fjdn0W%2FLt1h%2Bk4WT7lcDr3jkn0B0VOcq20YeLTrQ963TTeGiLxIPj05X8MXEKyuzngwokt3s44n4DGZuRIj9vZcq3mmL%2FjAMQPvOQOuionxUx3A8TzraNXtsr1xPEOei%2F4uUIgnmA2L1EiZtV9gBkKLnpfAkxpi66TTluB5nLrfz5nlO3bI%2BqE8%2F5iEq5y8Dfd5OHsYQQmv%2BBE%2FTMY%2BdWcIwFG4vHQwgdHs3JrD3tQrxFc1BS8aljL4qCEg3KUWsTGkLiw8T2O1%2FSRJJITsiZMHG0M5YrZUEEk2G7HJj2Os8YD4KhzEcSWw3FyGctH6F%2BRdb46%2By%2F890%2F8DPIB0nnyeth4K%2BFfNrTPMypdUh1mij5ZkbgsFFoIHp9hZjP3d5m9cwkLcuDNmfh8J5Y7P9DC6sMK25OtbPv0pRlSaIQUwa1ukcvHjyKFFMEcZ4RHUEQVXuE0zQZ85UMNqS2cQGOqUBIKhzFsOYJqOvYq0cv2dJFllYG8YWL8iJbztyFe3NPc7hRyW45TOdzF76XNHuz4NnWRjVTigg%2FFSuqWqQ66e6qFzqk7vPC1Er72q04RIUTjRuzsR04BHBisJs%2BSlVPSFHDURTv7x4kgI7ar%2Bc0dvzdxrMfBhGKylYHUIINrnshG%2FmGf1G8ci9SoMSLxhzJWPH7d73nuaI6WM5ZgVCG2GV8kGG9sOH&X-Amz-Signature=3574cfa18cbe1a05cabf0995366f2b46afda2869267e7349223e3c1af71b209a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCP5S7JL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC1yYKkDijsaKb%2FvfQqIGlhYgeNUkTfdM%2FEHZXIwQFDUAIgWCnCokjjnV2%2BK8oMX7yAhoeIcBGAARc%2FT7e3DBTT2FIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1%2Fn8e3SfchG8ieMCrcA52bqianZ18HhQncDQGUHhKl79QGzYGdR%2F5W1PHOCj7nSt66bY8r54gKJb0wURb356i9%2BmUyHEWxlsGSD%2Brzq9kPPNVJPBT2eSYwT7N3wLcFPCQ9rs8K7bJVm7sI%2FXBSuhHvDgIzjRGPsuukSaffOFmhxL%2FmwkJCfEmPGqbBfjEFXZp3fjdn0W%2FLt1h%2Bk4WT7lcDr3jkn0B0VOcq20YeLTrQ963TTeGiLxIPj05X8MXEKyuzngwokt3s44n4DGZuRIj9vZcq3mmL%2FjAMQPvOQOuionxUx3A8TzraNXtsr1xPEOei%2F4uUIgnmA2L1EiZtV9gBkKLnpfAkxpi66TTluB5nLrfz5nlO3bI%2BqE8%2F5iEq5y8Dfd5OHsYQQmv%2BBE%2FTMY%2BdWcIwFG4vHQwgdHs3JrD3tQrxFc1BS8aljL4qCEg3KUWsTGkLiw8T2O1%2FSRJJITsiZMHG0M5YrZUEEk2G7HJj2Os8YD4KhzEcSWw3FyGctH6F%2BRdb46%2By%2F890%2F8DPIB0nnyeth4K%2BFfNrTPMypdUh1mij5ZkbgsFFoIHp9hZjP3d5m9cwkLcuDNmfh8J5Y7P9DC6sMK25OtbPv0pRlSaIQUwa1ukcvHjyKFFMEcZ4RHUEQVXuE0zQZ85UMNqS2cQGOqUBIKhzFsOYJqOvYq0cv2dJFllYG8YWL8iJbztyFe3NPc7hRyW45TOdzF76XNHuz4NnWRjVTigg%2FFSuqWqQ66e6qFzqk7vPC1Er72q04RIUTjRuzsR04BHBisJs%2BSlVPSFHDURTv7x4kgI7ar%2Bc0dvzdxrMfBhGKylYHUIINrnshG%2FmGf1G8ci9SoMSLxhzJWPH7d73nuaI6WM5ZgVCG2GV8kGG9sOH&X-Amz-Signature=bf180bd7777e22d7915128961848760734fb181c9b1edfdb8010815d54e85787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCP5S7JL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC1yYKkDijsaKb%2FvfQqIGlhYgeNUkTfdM%2FEHZXIwQFDUAIgWCnCokjjnV2%2BK8oMX7yAhoeIcBGAARc%2FT7e3DBTT2FIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1%2Fn8e3SfchG8ieMCrcA52bqianZ18HhQncDQGUHhKl79QGzYGdR%2F5W1PHOCj7nSt66bY8r54gKJb0wURb356i9%2BmUyHEWxlsGSD%2Brzq9kPPNVJPBT2eSYwT7N3wLcFPCQ9rs8K7bJVm7sI%2FXBSuhHvDgIzjRGPsuukSaffOFmhxL%2FmwkJCfEmPGqbBfjEFXZp3fjdn0W%2FLt1h%2Bk4WT7lcDr3jkn0B0VOcq20YeLTrQ963TTeGiLxIPj05X8MXEKyuzngwokt3s44n4DGZuRIj9vZcq3mmL%2FjAMQPvOQOuionxUx3A8TzraNXtsr1xPEOei%2F4uUIgnmA2L1EiZtV9gBkKLnpfAkxpi66TTluB5nLrfz5nlO3bI%2BqE8%2F5iEq5y8Dfd5OHsYQQmv%2BBE%2FTMY%2BdWcIwFG4vHQwgdHs3JrD3tQrxFc1BS8aljL4qCEg3KUWsTGkLiw8T2O1%2FSRJJITsiZMHG0M5YrZUEEk2G7HJj2Os8YD4KhzEcSWw3FyGctH6F%2BRdb46%2By%2F890%2F8DPIB0nnyeth4K%2BFfNrTPMypdUh1mij5ZkbgsFFoIHp9hZjP3d5m9cwkLcuDNmfh8J5Y7P9DC6sMK25OtbPv0pRlSaIQUwa1ukcvHjyKFFMEcZ4RHUEQVXuE0zQZ85UMNqS2cQGOqUBIKhzFsOYJqOvYq0cv2dJFllYG8YWL8iJbztyFe3NPc7hRyW45TOdzF76XNHuz4NnWRjVTigg%2FFSuqWqQ66e6qFzqk7vPC1Er72q04RIUTjRuzsR04BHBisJs%2BSlVPSFHDURTv7x4kgI7ar%2Bc0dvzdxrMfBhGKylYHUIINrnshG%2FmGf1G8ci9SoMSLxhzJWPH7d73nuaI6WM5ZgVCG2GV8kGG9sOH&X-Amz-Signature=ba9152fe2ec91287a56098cadb3745f13d653800fc6e4360683d50ba2bc8114f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCP5S7JL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC1yYKkDijsaKb%2FvfQqIGlhYgeNUkTfdM%2FEHZXIwQFDUAIgWCnCokjjnV2%2BK8oMX7yAhoeIcBGAARc%2FT7e3DBTT2FIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1%2Fn8e3SfchG8ieMCrcA52bqianZ18HhQncDQGUHhKl79QGzYGdR%2F5W1PHOCj7nSt66bY8r54gKJb0wURb356i9%2BmUyHEWxlsGSD%2Brzq9kPPNVJPBT2eSYwT7N3wLcFPCQ9rs8K7bJVm7sI%2FXBSuhHvDgIzjRGPsuukSaffOFmhxL%2FmwkJCfEmPGqbBfjEFXZp3fjdn0W%2FLt1h%2Bk4WT7lcDr3jkn0B0VOcq20YeLTrQ963TTeGiLxIPj05X8MXEKyuzngwokt3s44n4DGZuRIj9vZcq3mmL%2FjAMQPvOQOuionxUx3A8TzraNXtsr1xPEOei%2F4uUIgnmA2L1EiZtV9gBkKLnpfAkxpi66TTluB5nLrfz5nlO3bI%2BqE8%2F5iEq5y8Dfd5OHsYQQmv%2BBE%2FTMY%2BdWcIwFG4vHQwgdHs3JrD3tQrxFc1BS8aljL4qCEg3KUWsTGkLiw8T2O1%2FSRJJITsiZMHG0M5YrZUEEk2G7HJj2Os8YD4KhzEcSWw3FyGctH6F%2BRdb46%2By%2F890%2F8DPIB0nnyeth4K%2BFfNrTPMypdUh1mij5ZkbgsFFoIHp9hZjP3d5m9cwkLcuDNmfh8J5Y7P9DC6sMK25OtbPv0pRlSaIQUwa1ukcvHjyKFFMEcZ4RHUEQVXuE0zQZ85UMNqS2cQGOqUBIKhzFsOYJqOvYq0cv2dJFllYG8YWL8iJbztyFe3NPc7hRyW45TOdzF76XNHuz4NnWRjVTigg%2FFSuqWqQ66e6qFzqk7vPC1Er72q04RIUTjRuzsR04BHBisJs%2BSlVPSFHDURTv7x4kgI7ar%2Bc0dvzdxrMfBhGKylYHUIINrnshG%2FmGf1G8ci9SoMSLxhzJWPH7d73nuaI6WM5ZgVCG2GV8kGG9sOH&X-Amz-Signature=f5f52dbeb1ee323457034218815d17e1706ab89bf00c87827ddcb682b32231d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCP5S7JL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC1yYKkDijsaKb%2FvfQqIGlhYgeNUkTfdM%2FEHZXIwQFDUAIgWCnCokjjnV2%2BK8oMX7yAhoeIcBGAARc%2FT7e3DBTT2FIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1%2Fn8e3SfchG8ieMCrcA52bqianZ18HhQncDQGUHhKl79QGzYGdR%2F5W1PHOCj7nSt66bY8r54gKJb0wURb356i9%2BmUyHEWxlsGSD%2Brzq9kPPNVJPBT2eSYwT7N3wLcFPCQ9rs8K7bJVm7sI%2FXBSuhHvDgIzjRGPsuukSaffOFmhxL%2FmwkJCfEmPGqbBfjEFXZp3fjdn0W%2FLt1h%2Bk4WT7lcDr3jkn0B0VOcq20YeLTrQ963TTeGiLxIPj05X8MXEKyuzngwokt3s44n4DGZuRIj9vZcq3mmL%2FjAMQPvOQOuionxUx3A8TzraNXtsr1xPEOei%2F4uUIgnmA2L1EiZtV9gBkKLnpfAkxpi66TTluB5nLrfz5nlO3bI%2BqE8%2F5iEq5y8Dfd5OHsYQQmv%2BBE%2FTMY%2BdWcIwFG4vHQwgdHs3JrD3tQrxFc1BS8aljL4qCEg3KUWsTGkLiw8T2O1%2FSRJJITsiZMHG0M5YrZUEEk2G7HJj2Os8YD4KhzEcSWw3FyGctH6F%2BRdb46%2By%2F890%2F8DPIB0nnyeth4K%2BFfNrTPMypdUh1mij5ZkbgsFFoIHp9hZjP3d5m9cwkLcuDNmfh8J5Y7P9DC6sMK25OtbPv0pRlSaIQUwa1ukcvHjyKFFMEcZ4RHUEQVXuE0zQZ85UMNqS2cQGOqUBIKhzFsOYJqOvYq0cv2dJFllYG8YWL8iJbztyFe3NPc7hRyW45TOdzF76XNHuz4NnWRjVTigg%2FFSuqWqQ66e6qFzqk7vPC1Er72q04RIUTjRuzsR04BHBisJs%2BSlVPSFHDURTv7x4kgI7ar%2Bc0dvzdxrMfBhGKylYHUIINrnshG%2FmGf1G8ci9SoMSLxhzJWPH7d73nuaI6WM5ZgVCG2GV8kGG9sOH&X-Amz-Signature=dd6a2fcb12dfcb362bf7eb1bb7b20f809b342f79b4daede69c4a6fb3abae9ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCP5S7JL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC1yYKkDijsaKb%2FvfQqIGlhYgeNUkTfdM%2FEHZXIwQFDUAIgWCnCokjjnV2%2BK8oMX7yAhoeIcBGAARc%2FT7e3DBTT2FIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1%2Fn8e3SfchG8ieMCrcA52bqianZ18HhQncDQGUHhKl79QGzYGdR%2F5W1PHOCj7nSt66bY8r54gKJb0wURb356i9%2BmUyHEWxlsGSD%2Brzq9kPPNVJPBT2eSYwT7N3wLcFPCQ9rs8K7bJVm7sI%2FXBSuhHvDgIzjRGPsuukSaffOFmhxL%2FmwkJCfEmPGqbBfjEFXZp3fjdn0W%2FLt1h%2Bk4WT7lcDr3jkn0B0VOcq20YeLTrQ963TTeGiLxIPj05X8MXEKyuzngwokt3s44n4DGZuRIj9vZcq3mmL%2FjAMQPvOQOuionxUx3A8TzraNXtsr1xPEOei%2F4uUIgnmA2L1EiZtV9gBkKLnpfAkxpi66TTluB5nLrfz5nlO3bI%2BqE8%2F5iEq5y8Dfd5OHsYQQmv%2BBE%2FTMY%2BdWcIwFG4vHQwgdHs3JrD3tQrxFc1BS8aljL4qCEg3KUWsTGkLiw8T2O1%2FSRJJITsiZMHG0M5YrZUEEk2G7HJj2Os8YD4KhzEcSWw3FyGctH6F%2BRdb46%2By%2F890%2F8DPIB0nnyeth4K%2BFfNrTPMypdUh1mij5ZkbgsFFoIHp9hZjP3d5m9cwkLcuDNmfh8J5Y7P9DC6sMK25OtbPv0pRlSaIQUwa1ukcvHjyKFFMEcZ4RHUEQVXuE0zQZ85UMNqS2cQGOqUBIKhzFsOYJqOvYq0cv2dJFllYG8YWL8iJbztyFe3NPc7hRyW45TOdzF76XNHuz4NnWRjVTigg%2FFSuqWqQ66e6qFzqk7vPC1Er72q04RIUTjRuzsR04BHBisJs%2BSlVPSFHDURTv7x4kgI7ar%2Bc0dvzdxrMfBhGKylYHUIINrnshG%2FmGf1G8ci9SoMSLxhzJWPH7d73nuaI6WM5ZgVCG2GV8kGG9sOH&X-Amz-Signature=14bee9d4aade9d20b24eb67a679e74083a45232552cbac3eb7d5eee2a68ddfdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
