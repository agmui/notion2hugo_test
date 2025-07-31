---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CR5L2Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHl59Ef128blvvKNXTZ9TMschmRwCmFfNPNGcutIvwmYAiEAq8MxmOFGxcOLxZiNqqtuuzmzQlayT0YBjlH2icub2%2FwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmSrvH2D7WjIMBXCSrcA5xTsV%2F1z2XmALXKKTpYklGLH6VpntkT%2BeOVSPkppAigfXnBHXNP81Y0EMTBvEQ%2BNnhylii0KctwBp8QKPHdlT8XV6dXkxReTKn16i8keoakl7wOqndKzRtAwXUZRmm2kZKULIsrwSBRmfkqsea12vAgzPrOVjKiPkCvgYWWd0ZEg8eVIfPnoBMwWevLgQCviTNtZFGtfvYFJV%2FIEYirxYGJDHuyHAXaYEOBud%2B8SUFW2ivhRN9ZfSpqvH1VnJ%2Bkge25gp3cySTpkA9wrWC1VXfhgsq0oYPtC24HOhVdmUQ%2BCF4GfZXRd3IOBxfiAFCh8%2BhrXgbrUllO2WzSsMI8NHfop8Y24j%2BRbrZN%2FgJCMKlYmqTpVj4DxrPlNLzMjQdb8lNM8cZm78Vj%2FANvSGUYLCnKa2xnR7Kh6AUsEQmR%2B7b6dPFl41nhu4HeOj17m0gR2pgz%2BTqAiXA8iUyWOuobV7U3Tah2j8pmvPqeD3DkltCerxulnYVccVfLJ43NRS34WZCPcwf2osVVmrojRyb2QWrsko6M10HP%2FaRg5hpV2jGwlPsf8nBwIy8uxHOT1Wn%2Bhaa1YVA4fKAYycY8A8yCBCzFnMVf6hN3k9N%2FYKgI98MPIqAICsbGMUxViF6tMN3ur8QGOqUBg2iU72x23vNU5fAEI90IhlF2PoBwo1tdb7s7lvbfHOD1oeGAFAKaKoTtLgYUlD9X2J8O6xeriFqACNjPAfe2D5w%2FpM53A7fl%2FHeJtQVkwtz4FXH%2BW0sbr80D05WXSUXsy62Txm%2FzrmKLnhZPatIdkVJVC%2FZUXYZU3oXyJWlP17Bu%2B5Zzh5wBKwlGKIhjbytO4QYo4s%2B%2FZ%2BZhkegiwXdj3mkSAtql&X-Amz-Signature=51d8dc3f0f58713359a7294a30709dffa0803af538454284d8e38635502021a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CR5L2Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHl59Ef128blvvKNXTZ9TMschmRwCmFfNPNGcutIvwmYAiEAq8MxmOFGxcOLxZiNqqtuuzmzQlayT0YBjlH2icub2%2FwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmSrvH2D7WjIMBXCSrcA5xTsV%2F1z2XmALXKKTpYklGLH6VpntkT%2BeOVSPkppAigfXnBHXNP81Y0EMTBvEQ%2BNnhylii0KctwBp8QKPHdlT8XV6dXkxReTKn16i8keoakl7wOqndKzRtAwXUZRmm2kZKULIsrwSBRmfkqsea12vAgzPrOVjKiPkCvgYWWd0ZEg8eVIfPnoBMwWevLgQCviTNtZFGtfvYFJV%2FIEYirxYGJDHuyHAXaYEOBud%2B8SUFW2ivhRN9ZfSpqvH1VnJ%2Bkge25gp3cySTpkA9wrWC1VXfhgsq0oYPtC24HOhVdmUQ%2BCF4GfZXRd3IOBxfiAFCh8%2BhrXgbrUllO2WzSsMI8NHfop8Y24j%2BRbrZN%2FgJCMKlYmqTpVj4DxrPlNLzMjQdb8lNM8cZm78Vj%2FANvSGUYLCnKa2xnR7Kh6AUsEQmR%2B7b6dPFl41nhu4HeOj17m0gR2pgz%2BTqAiXA8iUyWOuobV7U3Tah2j8pmvPqeD3DkltCerxulnYVccVfLJ43NRS34WZCPcwf2osVVmrojRyb2QWrsko6M10HP%2FaRg5hpV2jGwlPsf8nBwIy8uxHOT1Wn%2Bhaa1YVA4fKAYycY8A8yCBCzFnMVf6hN3k9N%2FYKgI98MPIqAICsbGMUxViF6tMN3ur8QGOqUBg2iU72x23vNU5fAEI90IhlF2PoBwo1tdb7s7lvbfHOD1oeGAFAKaKoTtLgYUlD9X2J8O6xeriFqACNjPAfe2D5w%2FpM53A7fl%2FHeJtQVkwtz4FXH%2BW0sbr80D05WXSUXsy62Txm%2FzrmKLnhZPatIdkVJVC%2FZUXYZU3oXyJWlP17Bu%2B5Zzh5wBKwlGKIhjbytO4QYo4s%2B%2FZ%2BZhkegiwXdj3mkSAtql&X-Amz-Signature=6f858d4040d983680d17ed92f293e9db7210a67cd643d969588faacf55623179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CR5L2Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHl59Ef128blvvKNXTZ9TMschmRwCmFfNPNGcutIvwmYAiEAq8MxmOFGxcOLxZiNqqtuuzmzQlayT0YBjlH2icub2%2FwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmSrvH2D7WjIMBXCSrcA5xTsV%2F1z2XmALXKKTpYklGLH6VpntkT%2BeOVSPkppAigfXnBHXNP81Y0EMTBvEQ%2BNnhylii0KctwBp8QKPHdlT8XV6dXkxReTKn16i8keoakl7wOqndKzRtAwXUZRmm2kZKULIsrwSBRmfkqsea12vAgzPrOVjKiPkCvgYWWd0ZEg8eVIfPnoBMwWevLgQCviTNtZFGtfvYFJV%2FIEYirxYGJDHuyHAXaYEOBud%2B8SUFW2ivhRN9ZfSpqvH1VnJ%2Bkge25gp3cySTpkA9wrWC1VXfhgsq0oYPtC24HOhVdmUQ%2BCF4GfZXRd3IOBxfiAFCh8%2BhrXgbrUllO2WzSsMI8NHfop8Y24j%2BRbrZN%2FgJCMKlYmqTpVj4DxrPlNLzMjQdb8lNM8cZm78Vj%2FANvSGUYLCnKa2xnR7Kh6AUsEQmR%2B7b6dPFl41nhu4HeOj17m0gR2pgz%2BTqAiXA8iUyWOuobV7U3Tah2j8pmvPqeD3DkltCerxulnYVccVfLJ43NRS34WZCPcwf2osVVmrojRyb2QWrsko6M10HP%2FaRg5hpV2jGwlPsf8nBwIy8uxHOT1Wn%2Bhaa1YVA4fKAYycY8A8yCBCzFnMVf6hN3k9N%2FYKgI98MPIqAICsbGMUxViF6tMN3ur8QGOqUBg2iU72x23vNU5fAEI90IhlF2PoBwo1tdb7s7lvbfHOD1oeGAFAKaKoTtLgYUlD9X2J8O6xeriFqACNjPAfe2D5w%2FpM53A7fl%2FHeJtQVkwtz4FXH%2BW0sbr80D05WXSUXsy62Txm%2FzrmKLnhZPatIdkVJVC%2FZUXYZU3oXyJWlP17Bu%2B5Zzh5wBKwlGKIhjbytO4QYo4s%2B%2FZ%2BZhkegiwXdj3mkSAtql&X-Amz-Signature=39b8225d949defd00934bd778e8720705610979431b7280152221fece497a571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CR5L2Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHl59Ef128blvvKNXTZ9TMschmRwCmFfNPNGcutIvwmYAiEAq8MxmOFGxcOLxZiNqqtuuzmzQlayT0YBjlH2icub2%2FwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmSrvH2D7WjIMBXCSrcA5xTsV%2F1z2XmALXKKTpYklGLH6VpntkT%2BeOVSPkppAigfXnBHXNP81Y0EMTBvEQ%2BNnhylii0KctwBp8QKPHdlT8XV6dXkxReTKn16i8keoakl7wOqndKzRtAwXUZRmm2kZKULIsrwSBRmfkqsea12vAgzPrOVjKiPkCvgYWWd0ZEg8eVIfPnoBMwWevLgQCviTNtZFGtfvYFJV%2FIEYirxYGJDHuyHAXaYEOBud%2B8SUFW2ivhRN9ZfSpqvH1VnJ%2Bkge25gp3cySTpkA9wrWC1VXfhgsq0oYPtC24HOhVdmUQ%2BCF4GfZXRd3IOBxfiAFCh8%2BhrXgbrUllO2WzSsMI8NHfop8Y24j%2BRbrZN%2FgJCMKlYmqTpVj4DxrPlNLzMjQdb8lNM8cZm78Vj%2FANvSGUYLCnKa2xnR7Kh6AUsEQmR%2B7b6dPFl41nhu4HeOj17m0gR2pgz%2BTqAiXA8iUyWOuobV7U3Tah2j8pmvPqeD3DkltCerxulnYVccVfLJ43NRS34WZCPcwf2osVVmrojRyb2QWrsko6M10HP%2FaRg5hpV2jGwlPsf8nBwIy8uxHOT1Wn%2Bhaa1YVA4fKAYycY8A8yCBCzFnMVf6hN3k9N%2FYKgI98MPIqAICsbGMUxViF6tMN3ur8QGOqUBg2iU72x23vNU5fAEI90IhlF2PoBwo1tdb7s7lvbfHOD1oeGAFAKaKoTtLgYUlD9X2J8O6xeriFqACNjPAfe2D5w%2FpM53A7fl%2FHeJtQVkwtz4FXH%2BW0sbr80D05WXSUXsy62Txm%2FzrmKLnhZPatIdkVJVC%2FZUXYZU3oXyJWlP17Bu%2B5Zzh5wBKwlGKIhjbytO4QYo4s%2B%2FZ%2BZhkegiwXdj3mkSAtql&X-Amz-Signature=9f2950e96a5cd42aec461c96cb68e617ba3e7ae4e27251b58dfcf0269ce577bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CR5L2Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHl59Ef128blvvKNXTZ9TMschmRwCmFfNPNGcutIvwmYAiEAq8MxmOFGxcOLxZiNqqtuuzmzQlayT0YBjlH2icub2%2FwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmSrvH2D7WjIMBXCSrcA5xTsV%2F1z2XmALXKKTpYklGLH6VpntkT%2BeOVSPkppAigfXnBHXNP81Y0EMTBvEQ%2BNnhylii0KctwBp8QKPHdlT8XV6dXkxReTKn16i8keoakl7wOqndKzRtAwXUZRmm2kZKULIsrwSBRmfkqsea12vAgzPrOVjKiPkCvgYWWd0ZEg8eVIfPnoBMwWevLgQCviTNtZFGtfvYFJV%2FIEYirxYGJDHuyHAXaYEOBud%2B8SUFW2ivhRN9ZfSpqvH1VnJ%2Bkge25gp3cySTpkA9wrWC1VXfhgsq0oYPtC24HOhVdmUQ%2BCF4GfZXRd3IOBxfiAFCh8%2BhrXgbrUllO2WzSsMI8NHfop8Y24j%2BRbrZN%2FgJCMKlYmqTpVj4DxrPlNLzMjQdb8lNM8cZm78Vj%2FANvSGUYLCnKa2xnR7Kh6AUsEQmR%2B7b6dPFl41nhu4HeOj17m0gR2pgz%2BTqAiXA8iUyWOuobV7U3Tah2j8pmvPqeD3DkltCerxulnYVccVfLJ43NRS34WZCPcwf2osVVmrojRyb2QWrsko6M10HP%2FaRg5hpV2jGwlPsf8nBwIy8uxHOT1Wn%2Bhaa1YVA4fKAYycY8A8yCBCzFnMVf6hN3k9N%2FYKgI98MPIqAICsbGMUxViF6tMN3ur8QGOqUBg2iU72x23vNU5fAEI90IhlF2PoBwo1tdb7s7lvbfHOD1oeGAFAKaKoTtLgYUlD9X2J8O6xeriFqACNjPAfe2D5w%2FpM53A7fl%2FHeJtQVkwtz4FXH%2BW0sbr80D05WXSUXsy62Txm%2FzrmKLnhZPatIdkVJVC%2FZUXYZU3oXyJWlP17Bu%2B5Zzh5wBKwlGKIhjbytO4QYo4s%2B%2FZ%2BZhkegiwXdj3mkSAtql&X-Amz-Signature=03857ce13ae46e736a1e9fdea1de4187b9924976ccea88545bc21937e7e0f54e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      <summary>How do I get wheel position from a Raspberry Pi or Arduino?</summary>
      TODO:
  </details>

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

TODO: if on WSL reference previous WSL guide

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CR5L2Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHl59Ef128blvvKNXTZ9TMschmRwCmFfNPNGcutIvwmYAiEAq8MxmOFGxcOLxZiNqqtuuzmzQlayT0YBjlH2icub2%2FwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmSrvH2D7WjIMBXCSrcA5xTsV%2F1z2XmALXKKTpYklGLH6VpntkT%2BeOVSPkppAigfXnBHXNP81Y0EMTBvEQ%2BNnhylii0KctwBp8QKPHdlT8XV6dXkxReTKn16i8keoakl7wOqndKzRtAwXUZRmm2kZKULIsrwSBRmfkqsea12vAgzPrOVjKiPkCvgYWWd0ZEg8eVIfPnoBMwWevLgQCviTNtZFGtfvYFJV%2FIEYirxYGJDHuyHAXaYEOBud%2B8SUFW2ivhRN9ZfSpqvH1VnJ%2Bkge25gp3cySTpkA9wrWC1VXfhgsq0oYPtC24HOhVdmUQ%2BCF4GfZXRd3IOBxfiAFCh8%2BhrXgbrUllO2WzSsMI8NHfop8Y24j%2BRbrZN%2FgJCMKlYmqTpVj4DxrPlNLzMjQdb8lNM8cZm78Vj%2FANvSGUYLCnKa2xnR7Kh6AUsEQmR%2B7b6dPFl41nhu4HeOj17m0gR2pgz%2BTqAiXA8iUyWOuobV7U3Tah2j8pmvPqeD3DkltCerxulnYVccVfLJ43NRS34WZCPcwf2osVVmrojRyb2QWrsko6M10HP%2FaRg5hpV2jGwlPsf8nBwIy8uxHOT1Wn%2Bhaa1YVA4fKAYycY8A8yCBCzFnMVf6hN3k9N%2FYKgI98MPIqAICsbGMUxViF6tMN3ur8QGOqUBg2iU72x23vNU5fAEI90IhlF2PoBwo1tdb7s7lvbfHOD1oeGAFAKaKoTtLgYUlD9X2J8O6xeriFqACNjPAfe2D5w%2FpM53A7fl%2FHeJtQVkwtz4FXH%2BW0sbr80D05WXSUXsy62Txm%2FzrmKLnhZPatIdkVJVC%2FZUXYZU3oXyJWlP17Bu%2B5Zzh5wBKwlGKIhjbytO4QYo4s%2B%2FZ%2BZhkegiwXdj3mkSAtql&X-Amz-Signature=b450919d388d3cb14cf9edc57119aeaa19086de25e255c89f185397cff7f6da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CR5L2Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHl59Ef128blvvKNXTZ9TMschmRwCmFfNPNGcutIvwmYAiEAq8MxmOFGxcOLxZiNqqtuuzmzQlayT0YBjlH2icub2%2FwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmSrvH2D7WjIMBXCSrcA5xTsV%2F1z2XmALXKKTpYklGLH6VpntkT%2BeOVSPkppAigfXnBHXNP81Y0EMTBvEQ%2BNnhylii0KctwBp8QKPHdlT8XV6dXkxReTKn16i8keoakl7wOqndKzRtAwXUZRmm2kZKULIsrwSBRmfkqsea12vAgzPrOVjKiPkCvgYWWd0ZEg8eVIfPnoBMwWevLgQCviTNtZFGtfvYFJV%2FIEYirxYGJDHuyHAXaYEOBud%2B8SUFW2ivhRN9ZfSpqvH1VnJ%2Bkge25gp3cySTpkA9wrWC1VXfhgsq0oYPtC24HOhVdmUQ%2BCF4GfZXRd3IOBxfiAFCh8%2BhrXgbrUllO2WzSsMI8NHfop8Y24j%2BRbrZN%2FgJCMKlYmqTpVj4DxrPlNLzMjQdb8lNM8cZm78Vj%2FANvSGUYLCnKa2xnR7Kh6AUsEQmR%2B7b6dPFl41nhu4HeOj17m0gR2pgz%2BTqAiXA8iUyWOuobV7U3Tah2j8pmvPqeD3DkltCerxulnYVccVfLJ43NRS34WZCPcwf2osVVmrojRyb2QWrsko6M10HP%2FaRg5hpV2jGwlPsf8nBwIy8uxHOT1Wn%2Bhaa1YVA4fKAYycY8A8yCBCzFnMVf6hN3k9N%2FYKgI98MPIqAICsbGMUxViF6tMN3ur8QGOqUBg2iU72x23vNU5fAEI90IhlF2PoBwo1tdb7s7lvbfHOD1oeGAFAKaKoTtLgYUlD9X2J8O6xeriFqACNjPAfe2D5w%2FpM53A7fl%2FHeJtQVkwtz4FXH%2BW0sbr80D05WXSUXsy62Txm%2FzrmKLnhZPatIdkVJVC%2FZUXYZU3oXyJWlP17Bu%2B5Zzh5wBKwlGKIhjbytO4QYo4s%2B%2FZ%2BZhkegiwXdj3mkSAtql&X-Amz-Signature=92fce5c847a7a6da9178f0765e8e305a861d4d17b773fd309943b556b9e2a070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CR5L2Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHl59Ef128blvvKNXTZ9TMschmRwCmFfNPNGcutIvwmYAiEAq8MxmOFGxcOLxZiNqqtuuzmzQlayT0YBjlH2icub2%2FwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmSrvH2D7WjIMBXCSrcA5xTsV%2F1z2XmALXKKTpYklGLH6VpntkT%2BeOVSPkppAigfXnBHXNP81Y0EMTBvEQ%2BNnhylii0KctwBp8QKPHdlT8XV6dXkxReTKn16i8keoakl7wOqndKzRtAwXUZRmm2kZKULIsrwSBRmfkqsea12vAgzPrOVjKiPkCvgYWWd0ZEg8eVIfPnoBMwWevLgQCviTNtZFGtfvYFJV%2FIEYirxYGJDHuyHAXaYEOBud%2B8SUFW2ivhRN9ZfSpqvH1VnJ%2Bkge25gp3cySTpkA9wrWC1VXfhgsq0oYPtC24HOhVdmUQ%2BCF4GfZXRd3IOBxfiAFCh8%2BhrXgbrUllO2WzSsMI8NHfop8Y24j%2BRbrZN%2FgJCMKlYmqTpVj4DxrPlNLzMjQdb8lNM8cZm78Vj%2FANvSGUYLCnKa2xnR7Kh6AUsEQmR%2B7b6dPFl41nhu4HeOj17m0gR2pgz%2BTqAiXA8iUyWOuobV7U3Tah2j8pmvPqeD3DkltCerxulnYVccVfLJ43NRS34WZCPcwf2osVVmrojRyb2QWrsko6M10HP%2FaRg5hpV2jGwlPsf8nBwIy8uxHOT1Wn%2Bhaa1YVA4fKAYycY8A8yCBCzFnMVf6hN3k9N%2FYKgI98MPIqAICsbGMUxViF6tMN3ur8QGOqUBg2iU72x23vNU5fAEI90IhlF2PoBwo1tdb7s7lvbfHOD1oeGAFAKaKoTtLgYUlD9X2J8O6xeriFqACNjPAfe2D5w%2FpM53A7fl%2FHeJtQVkwtz4FXH%2BW0sbr80D05WXSUXsy62Txm%2FzrmKLnhZPatIdkVJVC%2FZUXYZU3oXyJWlP17Bu%2B5Zzh5wBKwlGKIhjbytO4QYo4s%2B%2FZ%2BZhkegiwXdj3mkSAtql&X-Amz-Signature=0a909f4e6e1affa9ca454e05998fc83694b968c8a5c4daa22f2c881737360996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CR5L2Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHl59Ef128blvvKNXTZ9TMschmRwCmFfNPNGcutIvwmYAiEAq8MxmOFGxcOLxZiNqqtuuzmzQlayT0YBjlH2icub2%2FwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmSrvH2D7WjIMBXCSrcA5xTsV%2F1z2XmALXKKTpYklGLH6VpntkT%2BeOVSPkppAigfXnBHXNP81Y0EMTBvEQ%2BNnhylii0KctwBp8QKPHdlT8XV6dXkxReTKn16i8keoakl7wOqndKzRtAwXUZRmm2kZKULIsrwSBRmfkqsea12vAgzPrOVjKiPkCvgYWWd0ZEg8eVIfPnoBMwWevLgQCviTNtZFGtfvYFJV%2FIEYirxYGJDHuyHAXaYEOBud%2B8SUFW2ivhRN9ZfSpqvH1VnJ%2Bkge25gp3cySTpkA9wrWC1VXfhgsq0oYPtC24HOhVdmUQ%2BCF4GfZXRd3IOBxfiAFCh8%2BhrXgbrUllO2WzSsMI8NHfop8Y24j%2BRbrZN%2FgJCMKlYmqTpVj4DxrPlNLzMjQdb8lNM8cZm78Vj%2FANvSGUYLCnKa2xnR7Kh6AUsEQmR%2B7b6dPFl41nhu4HeOj17m0gR2pgz%2BTqAiXA8iUyWOuobV7U3Tah2j8pmvPqeD3DkltCerxulnYVccVfLJ43NRS34WZCPcwf2osVVmrojRyb2QWrsko6M10HP%2FaRg5hpV2jGwlPsf8nBwIy8uxHOT1Wn%2Bhaa1YVA4fKAYycY8A8yCBCzFnMVf6hN3k9N%2FYKgI98MPIqAICsbGMUxViF6tMN3ur8QGOqUBg2iU72x23vNU5fAEI90IhlF2PoBwo1tdb7s7lvbfHOD1oeGAFAKaKoTtLgYUlD9X2J8O6xeriFqACNjPAfe2D5w%2FpM53A7fl%2FHeJtQVkwtz4FXH%2BW0sbr80D05WXSUXsy62Txm%2FzrmKLnhZPatIdkVJVC%2FZUXYZU3oXyJWlP17Bu%2B5Zzh5wBKwlGKIhjbytO4QYo4s%2B%2FZ%2BZhkegiwXdj3mkSAtql&X-Amz-Signature=e44fcb30a9646544d9ea9f588ef5065ac32cfb8b5ed8df6890183df76be0b7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6MI7EDO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLqQRZJqcBQhkBDUgZAQZfJZIAbmq8ayeMu%2Ff4Vk0bhQIgNj1NyVY5xyqykNdXi3Ahnbzl2WNGcRI4JfZDgNKiMawqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDbO8FXxgxhWZh8dyrcA7TYS8hdlEQR%2BuoSet67ZiHJgqoD0gpIc%2BbaDJYdEo4Lco9c1qCyFoQwO0UiOwr5WC75VDNvoqcM3TIS5pgJYiI8CVWHbbSKbl83Xg04p7%2FrcQVhiirr8oj%2FmMnZtC%2Fadpk3gA9jnH0bHgQ%2BVaCfbMitMgnSakPoSXyOgqg3Slpzwo1Pt9jGHRplOAWu6wuG11eyexWrznW7xZtFQ8ok1%2Bi3BqWJSWbQlbqJYvubMR0OiAXIKzPq9Ez5ol1zJZHhVhM%2FSp3Kjttq47D6Ie6vZdWYlxPbgpasZRp0h%2FnOoBr6sotv17OsL1I4cj%2FqsimsoZbcj2WuRR%2FbpMRncYMXXxwLXTA2a9wm1QGujp2K2cDc2HvoNAeAJFGTgt6i%2BnHH0S41pQwymruFLCJzJbios61rJWA8HAYvZ6Fw0C8stQyBtHqhuVv24uFSbQ6y8jBpfOljeu73Kx5R88xtLMEH9pihTcwXo9DfaQ1PhpXEslptClnnUFNXO%2FtTv9lG7RHuhZqTnhdvaRvhhMlE2JRl62Iov%2Fq%2FNmhpW2ReT3F4bzZ%2BQsjq7PyHIefZwrmXDNXAHk1Df5XlcFQh6KCCMZcjOiyxIG5iS8Aru6YqJThHKunRch1Kz5LXZmGwkn69MK%2Fur8QGOqUBpzTdoSal2FNpRsLokysf8kbl25hs9seTJfo%2BeCs9v0%2BDwOcZRo38XMYLMDMaxh0VHkfsj5%2BD9Y9V%2BeGbxgHEsW%2BUB5UlfzMf%2BDZFHzrMUfwoHLs7%2FWJil3NsS%2Bf3N6Gsw4j7N2ZI9bXjTwHzPXKuI1dt2%2BvMINtB%2B89bbG8Dq5jrFLfz0DJ3t83ibey6Vwhsu%2BdHEV4IwsyboOw9ZQlSwe4t%2FMzB&X-Amz-Signature=e5781ff88c6b0b24b3fdb89f3329db7a794b33f19b69123a2f35a4f4bcef9a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CR5L2Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHl59Ef128blvvKNXTZ9TMschmRwCmFfNPNGcutIvwmYAiEAq8MxmOFGxcOLxZiNqqtuuzmzQlayT0YBjlH2icub2%2FwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmSrvH2D7WjIMBXCSrcA5xTsV%2F1z2XmALXKKTpYklGLH6VpntkT%2BeOVSPkppAigfXnBHXNP81Y0EMTBvEQ%2BNnhylii0KctwBp8QKPHdlT8XV6dXkxReTKn16i8keoakl7wOqndKzRtAwXUZRmm2kZKULIsrwSBRmfkqsea12vAgzPrOVjKiPkCvgYWWd0ZEg8eVIfPnoBMwWevLgQCviTNtZFGtfvYFJV%2FIEYirxYGJDHuyHAXaYEOBud%2B8SUFW2ivhRN9ZfSpqvH1VnJ%2Bkge25gp3cySTpkA9wrWC1VXfhgsq0oYPtC24HOhVdmUQ%2BCF4GfZXRd3IOBxfiAFCh8%2BhrXgbrUllO2WzSsMI8NHfop8Y24j%2BRbrZN%2FgJCMKlYmqTpVj4DxrPlNLzMjQdb8lNM8cZm78Vj%2FANvSGUYLCnKa2xnR7Kh6AUsEQmR%2B7b6dPFl41nhu4HeOj17m0gR2pgz%2BTqAiXA8iUyWOuobV7U3Tah2j8pmvPqeD3DkltCerxulnYVccVfLJ43NRS34WZCPcwf2osVVmrojRyb2QWrsko6M10HP%2FaRg5hpV2jGwlPsf8nBwIy8uxHOT1Wn%2Bhaa1YVA4fKAYycY8A8yCBCzFnMVf6hN3k9N%2FYKgI98MPIqAICsbGMUxViF6tMN3ur8QGOqUBg2iU72x23vNU5fAEI90IhlF2PoBwo1tdb7s7lvbfHOD1oeGAFAKaKoTtLgYUlD9X2J8O6xeriFqACNjPAfe2D5w%2FpM53A7fl%2FHeJtQVkwtz4FXH%2BW0sbr80D05WXSUXsy62Txm%2FzrmKLnhZPatIdkVJVC%2FZUXYZU3oXyJWlP17Bu%2B5Zzh5wBKwlGKIhjbytO4QYo4s%2B%2FZ%2BZhkegiwXdj3mkSAtql&X-Amz-Signature=f07e3fc048e6b939a2455dea36c0d6677848bb0807e8e696224202f048254a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJX32L6D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuPEYoVJ3M6Fj%2BVOiB%2FEPcegIn2iViZC7Hf6qIKNAhgwIgUbuZSpSvjIRIYb0V1uAOh8xxvsQcZX21Np%2B3gtkz52QqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQt0zmAfqDZLMskByrcA2nrFtDCCCwngSvpPtq0%2BSvCy9LaBPBGvumvuNVK98GzHugb3wCoCFA4ate4ZVMYl%2B2r1hEmECETvWventQ63MEE6XGBkaivemnu6%2BtBRfjOF%2FLmydENcaZ9zQE%2BN2gr3cB7XBvcsCVCrSsLYClyHKOvH8NeSjy1L05c5PMXoFU7YhuH0rwg3TRk6cHfZW4YbXFhub8DROCMukT328PgoxBIvelWI8XiiLOCJUlSU3iwCO6gG7HqoEM6tvJsG58vAXYBnpBUa8at4V9Wk%2BeAvngAntyjkwX%2FoYZB55%2BOxvAgwczqNcXyf5PlhZoHG7EKzgbtzQdRT2tW6OnVLQwC4ZX%2FlPGQLejJDUl8oAht0jB7h1hHJuriEeRCPavfnuAWZJH8FBOFo1KbUifCO5b%2FogT5lzN%2BFK501%2F6n9i09neI0DpOJ0G%2BXsTBExIeuch0w7LyyGszw0W8%2B7h5ImRjUrGxxxXnUXpz2R2SQGU1fzUNGgwxJ5Lkqa%2F2h0M%2FWe3yc%2FkmtDveXbzDeZFzxGnAJfzNHgFTGYilsnLxz1OQdCeYGrvbk37WV265GuP27o7u6o4MdAu2%2BxozfCkgxUgQCZ%2FvNiaKrIfT8nezpVscv4NMi1FAPzIxqMX0Wtj3DMODur8QGOqUB%2FOeO8LxH0WNYby28lxPF8hM2vGzDTWObF62QM3V%2FzKck0NQzac5vI8%2FH5fgYbwOcbH1F1drRezXKZvbt0I9tdBBMZK%2FAYLFIqGz6CEzFzsQItdkEKqJ09qoNsQECkTvIcJDu5%2BfOlns60Vi%2FINfOX7xsoAA3pWxFxKt7dU4P2qTToG2Yjzjhz5aNjLYf4ha%2BP1dASH0R2nXclvkx76EbqM4DECZp&X-Amz-Signature=4611c5bbf1c7749b870e8a22b3a7eeb7c9aac6a27a552bc19951166b0056b49c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJX32L6D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuPEYoVJ3M6Fj%2BVOiB%2FEPcegIn2iViZC7Hf6qIKNAhgwIgUbuZSpSvjIRIYb0V1uAOh8xxvsQcZX21Np%2B3gtkz52QqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQt0zmAfqDZLMskByrcA2nrFtDCCCwngSvpPtq0%2BSvCy9LaBPBGvumvuNVK98GzHugb3wCoCFA4ate4ZVMYl%2B2r1hEmECETvWventQ63MEE6XGBkaivemnu6%2BtBRfjOF%2FLmydENcaZ9zQE%2BN2gr3cB7XBvcsCVCrSsLYClyHKOvH8NeSjy1L05c5PMXoFU7YhuH0rwg3TRk6cHfZW4YbXFhub8DROCMukT328PgoxBIvelWI8XiiLOCJUlSU3iwCO6gG7HqoEM6tvJsG58vAXYBnpBUa8at4V9Wk%2BeAvngAntyjkwX%2FoYZB55%2BOxvAgwczqNcXyf5PlhZoHG7EKzgbtzQdRT2tW6OnVLQwC4ZX%2FlPGQLejJDUl8oAht0jB7h1hHJuriEeRCPavfnuAWZJH8FBOFo1KbUifCO5b%2FogT5lzN%2BFK501%2F6n9i09neI0DpOJ0G%2BXsTBExIeuch0w7LyyGszw0W8%2B7h5ImRjUrGxxxXnUXpz2R2SQGU1fzUNGgwxJ5Lkqa%2F2h0M%2FWe3yc%2FkmtDveXbzDeZFzxGnAJfzNHgFTGYilsnLxz1OQdCeYGrvbk37WV265GuP27o7u6o4MdAu2%2BxozfCkgxUgQCZ%2FvNiaKrIfT8nezpVscv4NMi1FAPzIxqMX0Wtj3DMODur8QGOqUB%2FOeO8LxH0WNYby28lxPF8hM2vGzDTWObF62QM3V%2FzKck0NQzac5vI8%2FH5fgYbwOcbH1F1drRezXKZvbt0I9tdBBMZK%2FAYLFIqGz6CEzFzsQItdkEKqJ09qoNsQECkTvIcJDu5%2BfOlns60Vi%2FINfOX7xsoAA3pWxFxKt7dU4P2qTToG2Yjzjhz5aNjLYf4ha%2BP1dASH0R2nXclvkx76EbqM4DECZp&X-Amz-Signature=063ed2bd96b110bed85266c5f3d2baf7046a6d3a79fd5fb75f2a0b6066944b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJX32L6D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuPEYoVJ3M6Fj%2BVOiB%2FEPcegIn2iViZC7Hf6qIKNAhgwIgUbuZSpSvjIRIYb0V1uAOh8xxvsQcZX21Np%2B3gtkz52QqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQt0zmAfqDZLMskByrcA2nrFtDCCCwngSvpPtq0%2BSvCy9LaBPBGvumvuNVK98GzHugb3wCoCFA4ate4ZVMYl%2B2r1hEmECETvWventQ63MEE6XGBkaivemnu6%2BtBRfjOF%2FLmydENcaZ9zQE%2BN2gr3cB7XBvcsCVCrSsLYClyHKOvH8NeSjy1L05c5PMXoFU7YhuH0rwg3TRk6cHfZW4YbXFhub8DROCMukT328PgoxBIvelWI8XiiLOCJUlSU3iwCO6gG7HqoEM6tvJsG58vAXYBnpBUa8at4V9Wk%2BeAvngAntyjkwX%2FoYZB55%2BOxvAgwczqNcXyf5PlhZoHG7EKzgbtzQdRT2tW6OnVLQwC4ZX%2FlPGQLejJDUl8oAht0jB7h1hHJuriEeRCPavfnuAWZJH8FBOFo1KbUifCO5b%2FogT5lzN%2BFK501%2F6n9i09neI0DpOJ0G%2BXsTBExIeuch0w7LyyGszw0W8%2B7h5ImRjUrGxxxXnUXpz2R2SQGU1fzUNGgwxJ5Lkqa%2F2h0M%2FWe3yc%2FkmtDveXbzDeZFzxGnAJfzNHgFTGYilsnLxz1OQdCeYGrvbk37WV265GuP27o7u6o4MdAu2%2BxozfCkgxUgQCZ%2FvNiaKrIfT8nezpVscv4NMi1FAPzIxqMX0Wtj3DMODur8QGOqUB%2FOeO8LxH0WNYby28lxPF8hM2vGzDTWObF62QM3V%2FzKck0NQzac5vI8%2FH5fgYbwOcbH1F1drRezXKZvbt0I9tdBBMZK%2FAYLFIqGz6CEzFzsQItdkEKqJ09qoNsQECkTvIcJDu5%2BfOlns60Vi%2FINfOX7xsoAA3pWxFxKt7dU4P2qTToG2Yjzjhz5aNjLYf4ha%2BP1dASH0R2nXclvkx76EbqM4DECZp&X-Amz-Signature=783f522d77237e8d2280cc75ea3474f832ba0cffcfff1ea56fa348023ca0bd7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJX32L6D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuPEYoVJ3M6Fj%2BVOiB%2FEPcegIn2iViZC7Hf6qIKNAhgwIgUbuZSpSvjIRIYb0V1uAOh8xxvsQcZX21Np%2B3gtkz52QqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQt0zmAfqDZLMskByrcA2nrFtDCCCwngSvpPtq0%2BSvCy9LaBPBGvumvuNVK98GzHugb3wCoCFA4ate4ZVMYl%2B2r1hEmECETvWventQ63MEE6XGBkaivemnu6%2BtBRfjOF%2FLmydENcaZ9zQE%2BN2gr3cB7XBvcsCVCrSsLYClyHKOvH8NeSjy1L05c5PMXoFU7YhuH0rwg3TRk6cHfZW4YbXFhub8DROCMukT328PgoxBIvelWI8XiiLOCJUlSU3iwCO6gG7HqoEM6tvJsG58vAXYBnpBUa8at4V9Wk%2BeAvngAntyjkwX%2FoYZB55%2BOxvAgwczqNcXyf5PlhZoHG7EKzgbtzQdRT2tW6OnVLQwC4ZX%2FlPGQLejJDUl8oAht0jB7h1hHJuriEeRCPavfnuAWZJH8FBOFo1KbUifCO5b%2FogT5lzN%2BFK501%2F6n9i09neI0DpOJ0G%2BXsTBExIeuch0w7LyyGszw0W8%2B7h5ImRjUrGxxxXnUXpz2R2SQGU1fzUNGgwxJ5Lkqa%2F2h0M%2FWe3yc%2FkmtDveXbzDeZFzxGnAJfzNHgFTGYilsnLxz1OQdCeYGrvbk37WV265GuP27o7u6o4MdAu2%2BxozfCkgxUgQCZ%2FvNiaKrIfT8nezpVscv4NMi1FAPzIxqMX0Wtj3DMODur8QGOqUB%2FOeO8LxH0WNYby28lxPF8hM2vGzDTWObF62QM3V%2FzKck0NQzac5vI8%2FH5fgYbwOcbH1F1drRezXKZvbt0I9tdBBMZK%2FAYLFIqGz6CEzFzsQItdkEKqJ09qoNsQECkTvIcJDu5%2BfOlns60Vi%2FINfOX7xsoAA3pWxFxKt7dU4P2qTToG2Yjzjhz5aNjLYf4ha%2BP1dASH0R2nXclvkx76EbqM4DECZp&X-Amz-Signature=dcdfead9aebc48d643880a3ddb06ee67ed56d8a0ec23e7a1c6dc55a604ccb42d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJX32L6D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuPEYoVJ3M6Fj%2BVOiB%2FEPcegIn2iViZC7Hf6qIKNAhgwIgUbuZSpSvjIRIYb0V1uAOh8xxvsQcZX21Np%2B3gtkz52QqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQt0zmAfqDZLMskByrcA2nrFtDCCCwngSvpPtq0%2BSvCy9LaBPBGvumvuNVK98GzHugb3wCoCFA4ate4ZVMYl%2B2r1hEmECETvWventQ63MEE6XGBkaivemnu6%2BtBRfjOF%2FLmydENcaZ9zQE%2BN2gr3cB7XBvcsCVCrSsLYClyHKOvH8NeSjy1L05c5PMXoFU7YhuH0rwg3TRk6cHfZW4YbXFhub8DROCMukT328PgoxBIvelWI8XiiLOCJUlSU3iwCO6gG7HqoEM6tvJsG58vAXYBnpBUa8at4V9Wk%2BeAvngAntyjkwX%2FoYZB55%2BOxvAgwczqNcXyf5PlhZoHG7EKzgbtzQdRT2tW6OnVLQwC4ZX%2FlPGQLejJDUl8oAht0jB7h1hHJuriEeRCPavfnuAWZJH8FBOFo1KbUifCO5b%2FogT5lzN%2BFK501%2F6n9i09neI0DpOJ0G%2BXsTBExIeuch0w7LyyGszw0W8%2B7h5ImRjUrGxxxXnUXpz2R2SQGU1fzUNGgwxJ5Lkqa%2F2h0M%2FWe3yc%2FkmtDveXbzDeZFzxGnAJfzNHgFTGYilsnLxz1OQdCeYGrvbk37WV265GuP27o7u6o4MdAu2%2BxozfCkgxUgQCZ%2FvNiaKrIfT8nezpVscv4NMi1FAPzIxqMX0Wtj3DMODur8QGOqUB%2FOeO8LxH0WNYby28lxPF8hM2vGzDTWObF62QM3V%2FzKck0NQzac5vI8%2FH5fgYbwOcbH1F1drRezXKZvbt0I9tdBBMZK%2FAYLFIqGz6CEzFzsQItdkEKqJ09qoNsQECkTvIcJDu5%2BfOlns60Vi%2FINfOX7xsoAA3pWxFxKt7dU4P2qTToG2Yjzjhz5aNjLYf4ha%2BP1dASH0R2nXclvkx76EbqM4DECZp&X-Amz-Signature=4b09fd5df4446aaec48169a727db6adc4d7e73c3a274e53185fab75773b49e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJX32L6D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuPEYoVJ3M6Fj%2BVOiB%2FEPcegIn2iViZC7Hf6qIKNAhgwIgUbuZSpSvjIRIYb0V1uAOh8xxvsQcZX21Np%2B3gtkz52QqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQt0zmAfqDZLMskByrcA2nrFtDCCCwngSvpPtq0%2BSvCy9LaBPBGvumvuNVK98GzHugb3wCoCFA4ate4ZVMYl%2B2r1hEmECETvWventQ63MEE6XGBkaivemnu6%2BtBRfjOF%2FLmydENcaZ9zQE%2BN2gr3cB7XBvcsCVCrSsLYClyHKOvH8NeSjy1L05c5PMXoFU7YhuH0rwg3TRk6cHfZW4YbXFhub8DROCMukT328PgoxBIvelWI8XiiLOCJUlSU3iwCO6gG7HqoEM6tvJsG58vAXYBnpBUa8at4V9Wk%2BeAvngAntyjkwX%2FoYZB55%2BOxvAgwczqNcXyf5PlhZoHG7EKzgbtzQdRT2tW6OnVLQwC4ZX%2FlPGQLejJDUl8oAht0jB7h1hHJuriEeRCPavfnuAWZJH8FBOFo1KbUifCO5b%2FogT5lzN%2BFK501%2F6n9i09neI0DpOJ0G%2BXsTBExIeuch0w7LyyGszw0W8%2B7h5ImRjUrGxxxXnUXpz2R2SQGU1fzUNGgwxJ5Lkqa%2F2h0M%2FWe3yc%2FkmtDveXbzDeZFzxGnAJfzNHgFTGYilsnLxz1OQdCeYGrvbk37WV265GuP27o7u6o4MdAu2%2BxozfCkgxUgQCZ%2FvNiaKrIfT8nezpVscv4NMi1FAPzIxqMX0Wtj3DMODur8QGOqUB%2FOeO8LxH0WNYby28lxPF8hM2vGzDTWObF62QM3V%2FzKck0NQzac5vI8%2FH5fgYbwOcbH1F1drRezXKZvbt0I9tdBBMZK%2FAYLFIqGz6CEzFzsQItdkEKqJ09qoNsQECkTvIcJDu5%2BfOlns60Vi%2FINfOX7xsoAA3pWxFxKt7dU4P2qTToG2Yjzjhz5aNjLYf4ha%2BP1dASH0R2nXclvkx76EbqM4DECZp&X-Amz-Signature=58a55ff0d8b4d49289cb00e32f12d1d933bc4a15c9e05e92a3cc461dd449b5c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJX32L6D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuPEYoVJ3M6Fj%2BVOiB%2FEPcegIn2iViZC7Hf6qIKNAhgwIgUbuZSpSvjIRIYb0V1uAOh8xxvsQcZX21Np%2B3gtkz52QqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQt0zmAfqDZLMskByrcA2nrFtDCCCwngSvpPtq0%2BSvCy9LaBPBGvumvuNVK98GzHugb3wCoCFA4ate4ZVMYl%2B2r1hEmECETvWventQ63MEE6XGBkaivemnu6%2BtBRfjOF%2FLmydENcaZ9zQE%2BN2gr3cB7XBvcsCVCrSsLYClyHKOvH8NeSjy1L05c5PMXoFU7YhuH0rwg3TRk6cHfZW4YbXFhub8DROCMukT328PgoxBIvelWI8XiiLOCJUlSU3iwCO6gG7HqoEM6tvJsG58vAXYBnpBUa8at4V9Wk%2BeAvngAntyjkwX%2FoYZB55%2BOxvAgwczqNcXyf5PlhZoHG7EKzgbtzQdRT2tW6OnVLQwC4ZX%2FlPGQLejJDUl8oAht0jB7h1hHJuriEeRCPavfnuAWZJH8FBOFo1KbUifCO5b%2FogT5lzN%2BFK501%2F6n9i09neI0DpOJ0G%2BXsTBExIeuch0w7LyyGszw0W8%2B7h5ImRjUrGxxxXnUXpz2R2SQGU1fzUNGgwxJ5Lkqa%2F2h0M%2FWe3yc%2FkmtDveXbzDeZFzxGnAJfzNHgFTGYilsnLxz1OQdCeYGrvbk37WV265GuP27o7u6o4MdAu2%2BxozfCkgxUgQCZ%2FvNiaKrIfT8nezpVscv4NMi1FAPzIxqMX0Wtj3DMODur8QGOqUB%2FOeO8LxH0WNYby28lxPF8hM2vGzDTWObF62QM3V%2FzKck0NQzac5vI8%2FH5fgYbwOcbH1F1drRezXKZvbt0I9tdBBMZK%2FAYLFIqGz6CEzFzsQItdkEKqJ09qoNsQECkTvIcJDu5%2BfOlns60Vi%2FINfOX7xsoAA3pWxFxKt7dU4P2qTToG2Yjzjhz5aNjLYf4ha%2BP1dASH0R2nXclvkx76EbqM4DECZp&X-Amz-Signature=1c249caa824a959b81805e030c6fa5dfe33a46bfb0f985eaa2a8c606cbdef4b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJX32L6D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuPEYoVJ3M6Fj%2BVOiB%2FEPcegIn2iViZC7Hf6qIKNAhgwIgUbuZSpSvjIRIYb0V1uAOh8xxvsQcZX21Np%2B3gtkz52QqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQt0zmAfqDZLMskByrcA2nrFtDCCCwngSvpPtq0%2BSvCy9LaBPBGvumvuNVK98GzHugb3wCoCFA4ate4ZVMYl%2B2r1hEmECETvWventQ63MEE6XGBkaivemnu6%2BtBRfjOF%2FLmydENcaZ9zQE%2BN2gr3cB7XBvcsCVCrSsLYClyHKOvH8NeSjy1L05c5PMXoFU7YhuH0rwg3TRk6cHfZW4YbXFhub8DROCMukT328PgoxBIvelWI8XiiLOCJUlSU3iwCO6gG7HqoEM6tvJsG58vAXYBnpBUa8at4V9Wk%2BeAvngAntyjkwX%2FoYZB55%2BOxvAgwczqNcXyf5PlhZoHG7EKzgbtzQdRT2tW6OnVLQwC4ZX%2FlPGQLejJDUl8oAht0jB7h1hHJuriEeRCPavfnuAWZJH8FBOFo1KbUifCO5b%2FogT5lzN%2BFK501%2F6n9i09neI0DpOJ0G%2BXsTBExIeuch0w7LyyGszw0W8%2B7h5ImRjUrGxxxXnUXpz2R2SQGU1fzUNGgwxJ5Lkqa%2F2h0M%2FWe3yc%2FkmtDveXbzDeZFzxGnAJfzNHgFTGYilsnLxz1OQdCeYGrvbk37WV265GuP27o7u6o4MdAu2%2BxozfCkgxUgQCZ%2FvNiaKrIfT8nezpVscv4NMi1FAPzIxqMX0Wtj3DMODur8QGOqUB%2FOeO8LxH0WNYby28lxPF8hM2vGzDTWObF62QM3V%2FzKck0NQzac5vI8%2FH5fgYbwOcbH1F1drRezXKZvbt0I9tdBBMZK%2FAYLFIqGz6CEzFzsQItdkEKqJ09qoNsQECkTvIcJDu5%2BfOlns60Vi%2FINfOX7xsoAA3pWxFxKt7dU4P2qTToG2Yjzjhz5aNjLYf4ha%2BP1dASH0R2nXclvkx76EbqM4DECZp&X-Amz-Signature=b6234fafed46a3cf6e25d875a680c300e47a08c3900a3d5c1cda29d2daa8fab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk mention + link Robot Localization node
