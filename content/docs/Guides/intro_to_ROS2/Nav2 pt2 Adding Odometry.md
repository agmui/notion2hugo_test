---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T23:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T23:53:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O6X2UFX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCgym0XQwi8UbbHoo%2FbS%2FZoddzajeHKoC0rwKOCNTT22QIgftWHunTsBLpDG1DBuNmYfjyE5rNTPUed613hAyJmVx0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCLhLr2Xo6DvGL6VayrcA3e9dzKFkSLurWBwWNDoj7AnL2UAigbu6IWdvAx3YOMM7kaPlXRGvvY6pjMHFE2lpeuS4%2FpAjv7R5HvAfLMMQ0Vb2YeTH4DlpLC3tRa%2Bn8ypJsCFwqc%2FkvEaCDCDjXCoNpIIM%2BcaMlXLfmUQCTBgmv3afxHD9fL8gY1CO8S4MFTw%2BSs0RWKOlnW1LOe54meJNpcgZSYuM4M%2BgryaHN7S1dlf7Uu3op8IIgXLbL9GoZv4fR9dUpyedUEacTzODGBFg0jxYhWzn5vXAa31VfMFOCRS6HkDvDOd8cN8qdav9V%2BGrKEWKM6sI%2BAxiH8lVu7DSP2JmCgCNtrI3mHhh0%2FBhGemS4ncsUzn9aE%2FLCfqXF1a7VfjH6QuJZIWwVE%2B%2FXg09zh77N8Yy1RSVmgOlacWscI40sgbsEEW6i7Q%2BvzCUc7D4CVeEmF%2F2pa047aOvIRjNooLYb2sAFWr%2BBm2jhPDXz%2BfxnkcumrRZGWPhTkQOXkj2A0Y0tODjSTLl468AEGty5nH0cMq8bzDedIq0dQsZSWOfvDHKbeirXFUxUd%2FnAcnDqbCvhUi4UXPBKpFXALwwbFMwJ%2B3m8e02DK4LHIHs2YBXFYdo5soJYJuUFSANvKv6AUpoCcISm4iPxsPMMXfl8QGOqUBqNYKl1mJ2rdvIyuVqhlK0Y0V9mriPclqCO1XYc%2Bco6lC9A1DApWNYFipqW5EEHRet%2FyxdSvGUv2l3hYO%2F3wCDfWNCKGlRPJ6MYH7BAjKJBp5VRJzTLrqBb02WQ3igM3v3UG0R6hYEs4qysE7AsJirqZ5eVVnARozw6NHlyp%2FVEgLGSIJB42TnviuofqcZFIhzeTomBWCG7lZd1jMBbwKUW0linXC&X-Amz-Signature=464810066a1320fa95db8e130eed5c312626d5cc18e10dba9fde034571465c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O6X2UFX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCgym0XQwi8UbbHoo%2FbS%2FZoddzajeHKoC0rwKOCNTT22QIgftWHunTsBLpDG1DBuNmYfjyE5rNTPUed613hAyJmVx0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCLhLr2Xo6DvGL6VayrcA3e9dzKFkSLurWBwWNDoj7AnL2UAigbu6IWdvAx3YOMM7kaPlXRGvvY6pjMHFE2lpeuS4%2FpAjv7R5HvAfLMMQ0Vb2YeTH4DlpLC3tRa%2Bn8ypJsCFwqc%2FkvEaCDCDjXCoNpIIM%2BcaMlXLfmUQCTBgmv3afxHD9fL8gY1CO8S4MFTw%2BSs0RWKOlnW1LOe54meJNpcgZSYuM4M%2BgryaHN7S1dlf7Uu3op8IIgXLbL9GoZv4fR9dUpyedUEacTzODGBFg0jxYhWzn5vXAa31VfMFOCRS6HkDvDOd8cN8qdav9V%2BGrKEWKM6sI%2BAxiH8lVu7DSP2JmCgCNtrI3mHhh0%2FBhGemS4ncsUzn9aE%2FLCfqXF1a7VfjH6QuJZIWwVE%2B%2FXg09zh77N8Yy1RSVmgOlacWscI40sgbsEEW6i7Q%2BvzCUc7D4CVeEmF%2F2pa047aOvIRjNooLYb2sAFWr%2BBm2jhPDXz%2BfxnkcumrRZGWPhTkQOXkj2A0Y0tODjSTLl468AEGty5nH0cMq8bzDedIq0dQsZSWOfvDHKbeirXFUxUd%2FnAcnDqbCvhUi4UXPBKpFXALwwbFMwJ%2B3m8e02DK4LHIHs2YBXFYdo5soJYJuUFSANvKv6AUpoCcISm4iPxsPMMXfl8QGOqUBqNYKl1mJ2rdvIyuVqhlK0Y0V9mriPclqCO1XYc%2Bco6lC9A1DApWNYFipqW5EEHRet%2FyxdSvGUv2l3hYO%2F3wCDfWNCKGlRPJ6MYH7BAjKJBp5VRJzTLrqBb02WQ3igM3v3UG0R6hYEs4qysE7AsJirqZ5eVVnARozw6NHlyp%2FVEgLGSIJB42TnviuofqcZFIhzeTomBWCG7lZd1jMBbwKUW0linXC&X-Amz-Signature=5f103bf8124699fd76fe90163f63d144c3d08f284c7864e54a640d07fd6e277f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O6X2UFX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCgym0XQwi8UbbHoo%2FbS%2FZoddzajeHKoC0rwKOCNTT22QIgftWHunTsBLpDG1DBuNmYfjyE5rNTPUed613hAyJmVx0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCLhLr2Xo6DvGL6VayrcA3e9dzKFkSLurWBwWNDoj7AnL2UAigbu6IWdvAx3YOMM7kaPlXRGvvY6pjMHFE2lpeuS4%2FpAjv7R5HvAfLMMQ0Vb2YeTH4DlpLC3tRa%2Bn8ypJsCFwqc%2FkvEaCDCDjXCoNpIIM%2BcaMlXLfmUQCTBgmv3afxHD9fL8gY1CO8S4MFTw%2BSs0RWKOlnW1LOe54meJNpcgZSYuM4M%2BgryaHN7S1dlf7Uu3op8IIgXLbL9GoZv4fR9dUpyedUEacTzODGBFg0jxYhWzn5vXAa31VfMFOCRS6HkDvDOd8cN8qdav9V%2BGrKEWKM6sI%2BAxiH8lVu7DSP2JmCgCNtrI3mHhh0%2FBhGemS4ncsUzn9aE%2FLCfqXF1a7VfjH6QuJZIWwVE%2B%2FXg09zh77N8Yy1RSVmgOlacWscI40sgbsEEW6i7Q%2BvzCUc7D4CVeEmF%2F2pa047aOvIRjNooLYb2sAFWr%2BBm2jhPDXz%2BfxnkcumrRZGWPhTkQOXkj2A0Y0tODjSTLl468AEGty5nH0cMq8bzDedIq0dQsZSWOfvDHKbeirXFUxUd%2FnAcnDqbCvhUi4UXPBKpFXALwwbFMwJ%2B3m8e02DK4LHIHs2YBXFYdo5soJYJuUFSANvKv6AUpoCcISm4iPxsPMMXfl8QGOqUBqNYKl1mJ2rdvIyuVqhlK0Y0V9mriPclqCO1XYc%2Bco6lC9A1DApWNYFipqW5EEHRet%2FyxdSvGUv2l3hYO%2F3wCDfWNCKGlRPJ6MYH7BAjKJBp5VRJzTLrqBb02WQ3igM3v3UG0R6hYEs4qysE7AsJirqZ5eVVnARozw6NHlyp%2FVEgLGSIJB42TnviuofqcZFIhzeTomBWCG7lZd1jMBbwKUW0linXC&X-Amz-Signature=498924343907ad1c501a5c961a6933f8ed248168dbf6de5016ead5423048ba65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O6X2UFX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCgym0XQwi8UbbHoo%2FbS%2FZoddzajeHKoC0rwKOCNTT22QIgftWHunTsBLpDG1DBuNmYfjyE5rNTPUed613hAyJmVx0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCLhLr2Xo6DvGL6VayrcA3e9dzKFkSLurWBwWNDoj7AnL2UAigbu6IWdvAx3YOMM7kaPlXRGvvY6pjMHFE2lpeuS4%2FpAjv7R5HvAfLMMQ0Vb2YeTH4DlpLC3tRa%2Bn8ypJsCFwqc%2FkvEaCDCDjXCoNpIIM%2BcaMlXLfmUQCTBgmv3afxHD9fL8gY1CO8S4MFTw%2BSs0RWKOlnW1LOe54meJNpcgZSYuM4M%2BgryaHN7S1dlf7Uu3op8IIgXLbL9GoZv4fR9dUpyedUEacTzODGBFg0jxYhWzn5vXAa31VfMFOCRS6HkDvDOd8cN8qdav9V%2BGrKEWKM6sI%2BAxiH8lVu7DSP2JmCgCNtrI3mHhh0%2FBhGemS4ncsUzn9aE%2FLCfqXF1a7VfjH6QuJZIWwVE%2B%2FXg09zh77N8Yy1RSVmgOlacWscI40sgbsEEW6i7Q%2BvzCUc7D4CVeEmF%2F2pa047aOvIRjNooLYb2sAFWr%2BBm2jhPDXz%2BfxnkcumrRZGWPhTkQOXkj2A0Y0tODjSTLl468AEGty5nH0cMq8bzDedIq0dQsZSWOfvDHKbeirXFUxUd%2FnAcnDqbCvhUi4UXPBKpFXALwwbFMwJ%2B3m8e02DK4LHIHs2YBXFYdo5soJYJuUFSANvKv6AUpoCcISm4iPxsPMMXfl8QGOqUBqNYKl1mJ2rdvIyuVqhlK0Y0V9mriPclqCO1XYc%2Bco6lC9A1DApWNYFipqW5EEHRet%2FyxdSvGUv2l3hYO%2F3wCDfWNCKGlRPJ6MYH7BAjKJBp5VRJzTLrqBb02WQ3igM3v3UG0R6hYEs4qysE7AsJirqZ5eVVnARozw6NHlyp%2FVEgLGSIJB42TnviuofqcZFIhzeTomBWCG7lZd1jMBbwKUW0linXC&X-Amz-Signature=423ff5d2dec99ae4666cce2f541d4c04f1d7b23614883c6d36c9f212ab1d0c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too

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
        self.timer = self.create_timer(0.5, self.timer_callback)
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O6X2UFX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCgym0XQwi8UbbHoo%2FbS%2FZoddzajeHKoC0rwKOCNTT22QIgftWHunTsBLpDG1DBuNmYfjyE5rNTPUed613hAyJmVx0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCLhLr2Xo6DvGL6VayrcA3e9dzKFkSLurWBwWNDoj7AnL2UAigbu6IWdvAx3YOMM7kaPlXRGvvY6pjMHFE2lpeuS4%2FpAjv7R5HvAfLMMQ0Vb2YeTH4DlpLC3tRa%2Bn8ypJsCFwqc%2FkvEaCDCDjXCoNpIIM%2BcaMlXLfmUQCTBgmv3afxHD9fL8gY1CO8S4MFTw%2BSs0RWKOlnW1LOe54meJNpcgZSYuM4M%2BgryaHN7S1dlf7Uu3op8IIgXLbL9GoZv4fR9dUpyedUEacTzODGBFg0jxYhWzn5vXAa31VfMFOCRS6HkDvDOd8cN8qdav9V%2BGrKEWKM6sI%2BAxiH8lVu7DSP2JmCgCNtrI3mHhh0%2FBhGemS4ncsUzn9aE%2FLCfqXF1a7VfjH6QuJZIWwVE%2B%2FXg09zh77N8Yy1RSVmgOlacWscI40sgbsEEW6i7Q%2BvzCUc7D4CVeEmF%2F2pa047aOvIRjNooLYb2sAFWr%2BBm2jhPDXz%2BfxnkcumrRZGWPhTkQOXkj2A0Y0tODjSTLl468AEGty5nH0cMq8bzDedIq0dQsZSWOfvDHKbeirXFUxUd%2FnAcnDqbCvhUi4UXPBKpFXALwwbFMwJ%2B3m8e02DK4LHIHs2YBXFYdo5soJYJuUFSANvKv6AUpoCcISm4iPxsPMMXfl8QGOqUBqNYKl1mJ2rdvIyuVqhlK0Y0V9mriPclqCO1XYc%2Bco6lC9A1DApWNYFipqW5EEHRet%2FyxdSvGUv2l3hYO%2F3wCDfWNCKGlRPJ6MYH7BAjKJBp5VRJzTLrqBb02WQ3igM3v3UG0R6hYEs4qysE7AsJirqZ5eVVnARozw6NHlyp%2FVEgLGSIJB42TnviuofqcZFIhzeTomBWCG7lZd1jMBbwKUW0linXC&X-Amz-Signature=8289823ebee06c644d8bcc5658819972b303f7a297bb3b693dbaf855943761e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O6X2UFX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCgym0XQwi8UbbHoo%2FbS%2FZoddzajeHKoC0rwKOCNTT22QIgftWHunTsBLpDG1DBuNmYfjyE5rNTPUed613hAyJmVx0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCLhLr2Xo6DvGL6VayrcA3e9dzKFkSLurWBwWNDoj7AnL2UAigbu6IWdvAx3YOMM7kaPlXRGvvY6pjMHFE2lpeuS4%2FpAjv7R5HvAfLMMQ0Vb2YeTH4DlpLC3tRa%2Bn8ypJsCFwqc%2FkvEaCDCDjXCoNpIIM%2BcaMlXLfmUQCTBgmv3afxHD9fL8gY1CO8S4MFTw%2BSs0RWKOlnW1LOe54meJNpcgZSYuM4M%2BgryaHN7S1dlf7Uu3op8IIgXLbL9GoZv4fR9dUpyedUEacTzODGBFg0jxYhWzn5vXAa31VfMFOCRS6HkDvDOd8cN8qdav9V%2BGrKEWKM6sI%2BAxiH8lVu7DSP2JmCgCNtrI3mHhh0%2FBhGemS4ncsUzn9aE%2FLCfqXF1a7VfjH6QuJZIWwVE%2B%2FXg09zh77N8Yy1RSVmgOlacWscI40sgbsEEW6i7Q%2BvzCUc7D4CVeEmF%2F2pa047aOvIRjNooLYb2sAFWr%2BBm2jhPDXz%2BfxnkcumrRZGWPhTkQOXkj2A0Y0tODjSTLl468AEGty5nH0cMq8bzDedIq0dQsZSWOfvDHKbeirXFUxUd%2FnAcnDqbCvhUi4UXPBKpFXALwwbFMwJ%2B3m8e02DK4LHIHs2YBXFYdo5soJYJuUFSANvKv6AUpoCcISm4iPxsPMMXfl8QGOqUBqNYKl1mJ2rdvIyuVqhlK0Y0V9mriPclqCO1XYc%2Bco6lC9A1DApWNYFipqW5EEHRet%2FyxdSvGUv2l3hYO%2F3wCDfWNCKGlRPJ6MYH7BAjKJBp5VRJzTLrqBb02WQ3igM3v3UG0R6hYEs4qysE7AsJirqZ5eVVnARozw6NHlyp%2FVEgLGSIJB42TnviuofqcZFIhzeTomBWCG7lZd1jMBbwKUW0linXC&X-Amz-Signature=b0a518c03e5e7384e415bdd68ef9254eff2cda511b3f6bbaa3109742bcdacbd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O6X2UFX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCgym0XQwi8UbbHoo%2FbS%2FZoddzajeHKoC0rwKOCNTT22QIgftWHunTsBLpDG1DBuNmYfjyE5rNTPUed613hAyJmVx0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCLhLr2Xo6DvGL6VayrcA3e9dzKFkSLurWBwWNDoj7AnL2UAigbu6IWdvAx3YOMM7kaPlXRGvvY6pjMHFE2lpeuS4%2FpAjv7R5HvAfLMMQ0Vb2YeTH4DlpLC3tRa%2Bn8ypJsCFwqc%2FkvEaCDCDjXCoNpIIM%2BcaMlXLfmUQCTBgmv3afxHD9fL8gY1CO8S4MFTw%2BSs0RWKOlnW1LOe54meJNpcgZSYuM4M%2BgryaHN7S1dlf7Uu3op8IIgXLbL9GoZv4fR9dUpyedUEacTzODGBFg0jxYhWzn5vXAa31VfMFOCRS6HkDvDOd8cN8qdav9V%2BGrKEWKM6sI%2BAxiH8lVu7DSP2JmCgCNtrI3mHhh0%2FBhGemS4ncsUzn9aE%2FLCfqXF1a7VfjH6QuJZIWwVE%2B%2FXg09zh77N8Yy1RSVmgOlacWscI40sgbsEEW6i7Q%2BvzCUc7D4CVeEmF%2F2pa047aOvIRjNooLYb2sAFWr%2BBm2jhPDXz%2BfxnkcumrRZGWPhTkQOXkj2A0Y0tODjSTLl468AEGty5nH0cMq8bzDedIq0dQsZSWOfvDHKbeirXFUxUd%2FnAcnDqbCvhUi4UXPBKpFXALwwbFMwJ%2B3m8e02DK4LHIHs2YBXFYdo5soJYJuUFSANvKv6AUpoCcISm4iPxsPMMXfl8QGOqUBqNYKl1mJ2rdvIyuVqhlK0Y0V9mriPclqCO1XYc%2Bco6lC9A1DApWNYFipqW5EEHRet%2FyxdSvGUv2l3hYO%2F3wCDfWNCKGlRPJ6MYH7BAjKJBp5VRJzTLrqBb02WQ3igM3v3UG0R6hYEs4qysE7AsJirqZ5eVVnARozw6NHlyp%2FVEgLGSIJB42TnviuofqcZFIhzeTomBWCG7lZd1jMBbwKUW0linXC&X-Amz-Signature=48e775b33686f85c399faeb3913f33904455c63e17ea4bb9c4d3445ef77ec1d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O6X2UFX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCgym0XQwi8UbbHoo%2FbS%2FZoddzajeHKoC0rwKOCNTT22QIgftWHunTsBLpDG1DBuNmYfjyE5rNTPUed613hAyJmVx0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCLhLr2Xo6DvGL6VayrcA3e9dzKFkSLurWBwWNDoj7AnL2UAigbu6IWdvAx3YOMM7kaPlXRGvvY6pjMHFE2lpeuS4%2FpAjv7R5HvAfLMMQ0Vb2YeTH4DlpLC3tRa%2Bn8ypJsCFwqc%2FkvEaCDCDjXCoNpIIM%2BcaMlXLfmUQCTBgmv3afxHD9fL8gY1CO8S4MFTw%2BSs0RWKOlnW1LOe54meJNpcgZSYuM4M%2BgryaHN7S1dlf7Uu3op8IIgXLbL9GoZv4fR9dUpyedUEacTzODGBFg0jxYhWzn5vXAa31VfMFOCRS6HkDvDOd8cN8qdav9V%2BGrKEWKM6sI%2BAxiH8lVu7DSP2JmCgCNtrI3mHhh0%2FBhGemS4ncsUzn9aE%2FLCfqXF1a7VfjH6QuJZIWwVE%2B%2FXg09zh77N8Yy1RSVmgOlacWscI40sgbsEEW6i7Q%2BvzCUc7D4CVeEmF%2F2pa047aOvIRjNooLYb2sAFWr%2BBm2jhPDXz%2BfxnkcumrRZGWPhTkQOXkj2A0Y0tODjSTLl468AEGty5nH0cMq8bzDedIq0dQsZSWOfvDHKbeirXFUxUd%2FnAcnDqbCvhUi4UXPBKpFXALwwbFMwJ%2B3m8e02DK4LHIHs2YBXFYdo5soJYJuUFSANvKv6AUpoCcISm4iPxsPMMXfl8QGOqUBqNYKl1mJ2rdvIyuVqhlK0Y0V9mriPclqCO1XYc%2Bco6lC9A1DApWNYFipqW5EEHRet%2FyxdSvGUv2l3hYO%2F3wCDfWNCKGlRPJ6MYH7BAjKJBp5VRJzTLrqBb02WQ3igM3v3UG0R6hYEs4qysE7AsJirqZ5eVVnARozw6NHlyp%2FVEgLGSIJB42TnviuofqcZFIhzeTomBWCG7lZd1jMBbwKUW0linXC&X-Amz-Signature=c9b2d123bd3e26bb91a0146711ef3e1c7a91b40f9a6197a9779e37f06deaec2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O6X2UFX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCgym0XQwi8UbbHoo%2FbS%2FZoddzajeHKoC0rwKOCNTT22QIgftWHunTsBLpDG1DBuNmYfjyE5rNTPUed613hAyJmVx0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCLhLr2Xo6DvGL6VayrcA3e9dzKFkSLurWBwWNDoj7AnL2UAigbu6IWdvAx3YOMM7kaPlXRGvvY6pjMHFE2lpeuS4%2FpAjv7R5HvAfLMMQ0Vb2YeTH4DlpLC3tRa%2Bn8ypJsCFwqc%2FkvEaCDCDjXCoNpIIM%2BcaMlXLfmUQCTBgmv3afxHD9fL8gY1CO8S4MFTw%2BSs0RWKOlnW1LOe54meJNpcgZSYuM4M%2BgryaHN7S1dlf7Uu3op8IIgXLbL9GoZv4fR9dUpyedUEacTzODGBFg0jxYhWzn5vXAa31VfMFOCRS6HkDvDOd8cN8qdav9V%2BGrKEWKM6sI%2BAxiH8lVu7DSP2JmCgCNtrI3mHhh0%2FBhGemS4ncsUzn9aE%2FLCfqXF1a7VfjH6QuJZIWwVE%2B%2FXg09zh77N8Yy1RSVmgOlacWscI40sgbsEEW6i7Q%2BvzCUc7D4CVeEmF%2F2pa047aOvIRjNooLYb2sAFWr%2BBm2jhPDXz%2BfxnkcumrRZGWPhTkQOXkj2A0Y0tODjSTLl468AEGty5nH0cMq8bzDedIq0dQsZSWOfvDHKbeirXFUxUd%2FnAcnDqbCvhUi4UXPBKpFXALwwbFMwJ%2B3m8e02DK4LHIHs2YBXFYdo5soJYJuUFSANvKv6AUpoCcISm4iPxsPMMXfl8QGOqUBqNYKl1mJ2rdvIyuVqhlK0Y0V9mriPclqCO1XYc%2Bco6lC9A1DApWNYFipqW5EEHRet%2FyxdSvGUv2l3hYO%2F3wCDfWNCKGlRPJ6MYH7BAjKJBp5VRJzTLrqBb02WQ3igM3v3UG0R6hYEs4qysE7AsJirqZ5eVVnARozw6NHlyp%2FVEgLGSIJB42TnviuofqcZFIhzeTomBWCG7lZd1jMBbwKUW0linXC&X-Amz-Signature=ca5d558e6b984ebd027969d2bfefc94a11c1654ff5c6c96dc8d8dff4fd0a4bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SBO5FD7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIGBUH7NTSMAWM5VSSSt4LPWHe6LRPBt9qI6DVCvdhYGeAiAvKHjBmekBRUjqrIxKaiwuLiEkK0H4po4Ec8kXtE9R%2FSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMNnrU4qRxebVmIeuHKtwD1yeqEXKhThd3PMvyUSrUQyqTcO1apZbsX56CAGF2H0B39xWWpSlktmw1o8%2B6s5AMVCXpqOP6PfMjwpnRroJBmLsbDqfdQ6PSVXTE%2F0oGXBWgbMRpHq5DvdSmS9XMfFrXOKbhcvdnc2YQNtLxK2%2BXSWSSrSDOALoZTV7BYsfCm3MGTxQkh%2FbtEa7OM4%2BV9KzdebaLsRxeP%2FmQiM5PhT1SBoNENkb81aWMgurrA9P3j65j7vsjdGZvx2UWu4nr%2B1CspfiahOPRGVg99PsY5FKCadJ5M85d%2BUIi0saNqDr7h64XUgW5ZDeflBypCWAcwwQN%2BwpTBQhbL2ym7Q0mRjQ6sFhv%2F4Ik5cxG4joexuyXe6PZrGb1OKnc8j6nG93Mjpq0RMtUbdGMG2lc1C9htRkcLgXMJ%2FIr7Dm3RJ5fm5JUjfDpVD1eN5XReYS%2BEC8afsNKgzfB%2Fib2QPtuPSTdJ2fCn9%2B42cF%2F2XYrblYe0DIr8SeCMglSIwwAaL6647B%2BLflhYQFflUkgOVFOFue0ReYewWEGkQy%2Bm82owqGFaB0nPy0yAbC0FZ3TpR3bcJfVRkvaBX2UmgYdqEcADMn2fd7fMwcIYNkfBi6Rcx3BxpYElRadvXUK3zTKuVsi12owxd%2BXxAY6pgFcLj4Be9B3PFlajVGQi3ZT3hiBVTyyOL8HbBxjescB2gz5Rv%2FquvgjP7WQYsrbMM%2FOBLhph8vzKWtZ93OlJuNI%2BgvmgQnI2LNg%2F323SR6DUEHFE2NqcxHhwKoFgkccab3F8A39laWyGuaeagyt7OAVHRMQ%2F%2BV8jHETh%2FQ7X0SCH27x3TftWSH447n%2FnTwk7lTeOXimDW0Hmhbw%2Fk8jqNkxDgSDZg7x&X-Amz-Signature=ea93d7124b01494ec32126ba07df82758615be032685907bcd707b20a106289f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function

This function just takes in:

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

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

## Running code

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

TODO: get screen cap

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O6X2UFX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCgym0XQwi8UbbHoo%2FbS%2FZoddzajeHKoC0rwKOCNTT22QIgftWHunTsBLpDG1DBuNmYfjyE5rNTPUed613hAyJmVx0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCLhLr2Xo6DvGL6VayrcA3e9dzKFkSLurWBwWNDoj7AnL2UAigbu6IWdvAx3YOMM7kaPlXRGvvY6pjMHFE2lpeuS4%2FpAjv7R5HvAfLMMQ0Vb2YeTH4DlpLC3tRa%2Bn8ypJsCFwqc%2FkvEaCDCDjXCoNpIIM%2BcaMlXLfmUQCTBgmv3afxHD9fL8gY1CO8S4MFTw%2BSs0RWKOlnW1LOe54meJNpcgZSYuM4M%2BgryaHN7S1dlf7Uu3op8IIgXLbL9GoZv4fR9dUpyedUEacTzODGBFg0jxYhWzn5vXAa31VfMFOCRS6HkDvDOd8cN8qdav9V%2BGrKEWKM6sI%2BAxiH8lVu7DSP2JmCgCNtrI3mHhh0%2FBhGemS4ncsUzn9aE%2FLCfqXF1a7VfjH6QuJZIWwVE%2B%2FXg09zh77N8Yy1RSVmgOlacWscI40sgbsEEW6i7Q%2BvzCUc7D4CVeEmF%2F2pa047aOvIRjNooLYb2sAFWr%2BBm2jhPDXz%2BfxnkcumrRZGWPhTkQOXkj2A0Y0tODjSTLl468AEGty5nH0cMq8bzDedIq0dQsZSWOfvDHKbeirXFUxUd%2FnAcnDqbCvhUi4UXPBKpFXALwwbFMwJ%2B3m8e02DK4LHIHs2YBXFYdo5soJYJuUFSANvKv6AUpoCcISm4iPxsPMMXfl8QGOqUBqNYKl1mJ2rdvIyuVqhlK0Y0V9mriPclqCO1XYc%2Bco6lC9A1DApWNYFipqW5EEHRet%2FyxdSvGUv2l3hYO%2F3wCDfWNCKGlRPJ6MYH7BAjKJBp5VRJzTLrqBb02WQ3igM3v3UG0R6hYEs4qysE7AsJirqZ5eVVnARozw6NHlyp%2FVEgLGSIJB42TnviuofqcZFIhzeTomBWCG7lZd1jMBbwKUW0linXC&X-Amz-Signature=655c0abf93e773b5cbde4d8f30a44efd6667fce305a73d57b399ac655dac5c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MN52T2R%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIClK%2BH6Ss947PLnQrseBEy59cm1ZfkuJzeRIkUcgCYukAiAU%2B6z%2FKm9n1lmB6KTAcA1MIhCkrO1nNZj4sEQ5gpgaTCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2FIX5tMerGEqSDQT9KtwD%2FRGsoLr%2Bizr9Wl0OThvy%2B0%2BmCSOdjsSSumcktPWB2rXykjFi8m0R%2FEwVVy5uyU92q%2Bw%2FS%2FeFRaBS2WEPTik68500z9o2bi%2B6xy0CdwRVnlJZXoS8O2vQ4M0jy1gjmR%2BB5p3EbVcczaV9sfTN2dh4f2VWNw7Xj1X%2F%2BiK9c44rI44RZm8N%2FL9QsJvP4YaLCjVEMUWZGYofqHJCEagdkfkbHTDeQxlx7Pih2o9ADiZjzOaxMy3u83WT8F1awLwyCtxsQKTwXgLApaOdSj9RsV%2BLNAR9TIv4fe0AhgGucjBrTMHanyxSx99pHERvxvTQt0BH%2BFkKkw7R4Fifx8NL4eL28Jam3hbMXUISqgz8gq1r0TxczJBASfytvFDZgf20pQ171Zko7vttK2NJTbGidMx3aeXtB4vQBifrqh14zdNOeDrQyjaDDRznFSL5a4cfAusH4WADONvwx%2BYbyAhnhTYOLvDyws0q20%2FqI67C8SvFaX6Ij1jXrmmt8Vo7cgwjMWZZUoqjSPofkUVxFHXjpuAdll9WdaqnO3brZ6VhvA1Diqmt0OIU6b%2BrMU1hHPPZPOCEvyXpQJwaMK9CYipMrHzJj3N6euTW8M%2BVHqGeCYFtjpBu2FCm%2BeL8VDbYAL8wuN2XxAY6pgEmjMXhjuQ0J09ixDJKhtPl6a3KiFwkyhSovrLIF9zknLpHYeQUFwrAf6V%2Bb%2BXVZikU8ye2Po%2BNwtoX8LYbSr%2FKNiBhhOkwLCpD%2FbDk%2B0qJJ1KxlaZrlIDGo4EajG8lh60zfD5dCOjWlnDAkzboFCE2jLpdAs1%2FCMCJUeFbWYLegyaiyLiaNAbYPCq1wxSGYnA30ofNrSB5Axt7yz5kDoE6TiN5wqmu&X-Amz-Signature=f6dd56babeab1fa0fa4f230c0d57c85a737eee3e0bfa58cd4d74bd4929bf149a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

        self.subscription = self.create_subscription(Twist, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...


    def listener_callback(self, msg: Twist):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MN52T2R%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIClK%2BH6Ss947PLnQrseBEy59cm1ZfkuJzeRIkUcgCYukAiAU%2B6z%2FKm9n1lmB6KTAcA1MIhCkrO1nNZj4sEQ5gpgaTCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2FIX5tMerGEqSDQT9KtwD%2FRGsoLr%2Bizr9Wl0OThvy%2B0%2BmCSOdjsSSumcktPWB2rXykjFi8m0R%2FEwVVy5uyU92q%2Bw%2FS%2FeFRaBS2WEPTik68500z9o2bi%2B6xy0CdwRVnlJZXoS8O2vQ4M0jy1gjmR%2BB5p3EbVcczaV9sfTN2dh4f2VWNw7Xj1X%2F%2BiK9c44rI44RZm8N%2FL9QsJvP4YaLCjVEMUWZGYofqHJCEagdkfkbHTDeQxlx7Pih2o9ADiZjzOaxMy3u83WT8F1awLwyCtxsQKTwXgLApaOdSj9RsV%2BLNAR9TIv4fe0AhgGucjBrTMHanyxSx99pHERvxvTQt0BH%2BFkKkw7R4Fifx8NL4eL28Jam3hbMXUISqgz8gq1r0TxczJBASfytvFDZgf20pQ171Zko7vttK2NJTbGidMx3aeXtB4vQBifrqh14zdNOeDrQyjaDDRznFSL5a4cfAusH4WADONvwx%2BYbyAhnhTYOLvDyws0q20%2FqI67C8SvFaX6Ij1jXrmmt8Vo7cgwjMWZZUoqjSPofkUVxFHXjpuAdll9WdaqnO3brZ6VhvA1Diqmt0OIU6b%2BrMU1hHPPZPOCEvyXpQJwaMK9CYipMrHzJj3N6euTW8M%2BVHqGeCYFtjpBu2FCm%2BeL8VDbYAL8wuN2XxAY6pgEmjMXhjuQ0J09ixDJKhtPl6a3KiFwkyhSovrLIF9zknLpHYeQUFwrAf6V%2Bb%2BXVZikU8ye2Po%2BNwtoX8LYbSr%2FKNiBhhOkwLCpD%2FbDk%2B0qJJ1KxlaZrlIDGo4EajG8lh60zfD5dCOjWlnDAkzboFCE2jLpdAs1%2FCMCJUeFbWYLegyaiyLiaNAbYPCq1wxSGYnA30ofNrSB5Axt7yz5kDoE6TiN5wqmu&X-Amz-Signature=405984456f8d37521d77fb01d5d16f33f185ca63010e100d80c394dd1c05f766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MN52T2R%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIClK%2BH6Ss947PLnQrseBEy59cm1ZfkuJzeRIkUcgCYukAiAU%2B6z%2FKm9n1lmB6KTAcA1MIhCkrO1nNZj4sEQ5gpgaTCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2FIX5tMerGEqSDQT9KtwD%2FRGsoLr%2Bizr9Wl0OThvy%2B0%2BmCSOdjsSSumcktPWB2rXykjFi8m0R%2FEwVVy5uyU92q%2Bw%2FS%2FeFRaBS2WEPTik68500z9o2bi%2B6xy0CdwRVnlJZXoS8O2vQ4M0jy1gjmR%2BB5p3EbVcczaV9sfTN2dh4f2VWNw7Xj1X%2F%2BiK9c44rI44RZm8N%2FL9QsJvP4YaLCjVEMUWZGYofqHJCEagdkfkbHTDeQxlx7Pih2o9ADiZjzOaxMy3u83WT8F1awLwyCtxsQKTwXgLApaOdSj9RsV%2BLNAR9TIv4fe0AhgGucjBrTMHanyxSx99pHERvxvTQt0BH%2BFkKkw7R4Fifx8NL4eL28Jam3hbMXUISqgz8gq1r0TxczJBASfytvFDZgf20pQ171Zko7vttK2NJTbGidMx3aeXtB4vQBifrqh14zdNOeDrQyjaDDRznFSL5a4cfAusH4WADONvwx%2BYbyAhnhTYOLvDyws0q20%2FqI67C8SvFaX6Ij1jXrmmt8Vo7cgwjMWZZUoqjSPofkUVxFHXjpuAdll9WdaqnO3brZ6VhvA1Diqmt0OIU6b%2BrMU1hHPPZPOCEvyXpQJwaMK9CYipMrHzJj3N6euTW8M%2BVHqGeCYFtjpBu2FCm%2BeL8VDbYAL8wuN2XxAY6pgEmjMXhjuQ0J09ixDJKhtPl6a3KiFwkyhSovrLIF9zknLpHYeQUFwrAf6V%2Bb%2BXVZikU8ye2Po%2BNwtoX8LYbSr%2FKNiBhhOkwLCpD%2FbDk%2B0qJJ1KxlaZrlIDGo4EajG8lh60zfD5dCOjWlnDAkzboFCE2jLpdAs1%2FCMCJUeFbWYLegyaiyLiaNAbYPCq1wxSGYnA30ofNrSB5Axt7yz5kDoE6TiN5wqmu&X-Amz-Signature=07748b3c931f1dfaa1ab130026ac4209db3aaa87636adc7d1ae655ed59e3cc33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MN52T2R%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIClK%2BH6Ss947PLnQrseBEy59cm1ZfkuJzeRIkUcgCYukAiAU%2B6z%2FKm9n1lmB6KTAcA1MIhCkrO1nNZj4sEQ5gpgaTCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2FIX5tMerGEqSDQT9KtwD%2FRGsoLr%2Bizr9Wl0OThvy%2B0%2BmCSOdjsSSumcktPWB2rXykjFi8m0R%2FEwVVy5uyU92q%2Bw%2FS%2FeFRaBS2WEPTik68500z9o2bi%2B6xy0CdwRVnlJZXoS8O2vQ4M0jy1gjmR%2BB5p3EbVcczaV9sfTN2dh4f2VWNw7Xj1X%2F%2BiK9c44rI44RZm8N%2FL9QsJvP4YaLCjVEMUWZGYofqHJCEagdkfkbHTDeQxlx7Pih2o9ADiZjzOaxMy3u83WT8F1awLwyCtxsQKTwXgLApaOdSj9RsV%2BLNAR9TIv4fe0AhgGucjBrTMHanyxSx99pHERvxvTQt0BH%2BFkKkw7R4Fifx8NL4eL28Jam3hbMXUISqgz8gq1r0TxczJBASfytvFDZgf20pQ171Zko7vttK2NJTbGidMx3aeXtB4vQBifrqh14zdNOeDrQyjaDDRznFSL5a4cfAusH4WADONvwx%2BYbyAhnhTYOLvDyws0q20%2FqI67C8SvFaX6Ij1jXrmmt8Vo7cgwjMWZZUoqjSPofkUVxFHXjpuAdll9WdaqnO3brZ6VhvA1Diqmt0OIU6b%2BrMU1hHPPZPOCEvyXpQJwaMK9CYipMrHzJj3N6euTW8M%2BVHqGeCYFtjpBu2FCm%2BeL8VDbYAL8wuN2XxAY6pgEmjMXhjuQ0J09ixDJKhtPl6a3KiFwkyhSovrLIF9zknLpHYeQUFwrAf6V%2Bb%2BXVZikU8ye2Po%2BNwtoX8LYbSr%2FKNiBhhOkwLCpD%2FbDk%2B0qJJ1KxlaZrlIDGo4EajG8lh60zfD5dCOjWlnDAkzboFCE2jLpdAs1%2FCMCJUeFbWYLegyaiyLiaNAbYPCq1wxSGYnA30ofNrSB5Axt7yz5kDoE6TiN5wqmu&X-Amz-Signature=eeada6c76793ac1bf077c83e677622d6c7a2cca628eb47603c4b639dff0da2a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MN52T2R%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIClK%2BH6Ss947PLnQrseBEy59cm1ZfkuJzeRIkUcgCYukAiAU%2B6z%2FKm9n1lmB6KTAcA1MIhCkrO1nNZj4sEQ5gpgaTCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2FIX5tMerGEqSDQT9KtwD%2FRGsoLr%2Bizr9Wl0OThvy%2B0%2BmCSOdjsSSumcktPWB2rXykjFi8m0R%2FEwVVy5uyU92q%2Bw%2FS%2FeFRaBS2WEPTik68500z9o2bi%2B6xy0CdwRVnlJZXoS8O2vQ4M0jy1gjmR%2BB5p3EbVcczaV9sfTN2dh4f2VWNw7Xj1X%2F%2BiK9c44rI44RZm8N%2FL9QsJvP4YaLCjVEMUWZGYofqHJCEagdkfkbHTDeQxlx7Pih2o9ADiZjzOaxMy3u83WT8F1awLwyCtxsQKTwXgLApaOdSj9RsV%2BLNAR9TIv4fe0AhgGucjBrTMHanyxSx99pHERvxvTQt0BH%2BFkKkw7R4Fifx8NL4eL28Jam3hbMXUISqgz8gq1r0TxczJBASfytvFDZgf20pQ171Zko7vttK2NJTbGidMx3aeXtB4vQBifrqh14zdNOeDrQyjaDDRznFSL5a4cfAusH4WADONvwx%2BYbyAhnhTYOLvDyws0q20%2FqI67C8SvFaX6Ij1jXrmmt8Vo7cgwjMWZZUoqjSPofkUVxFHXjpuAdll9WdaqnO3brZ6VhvA1Diqmt0OIU6b%2BrMU1hHPPZPOCEvyXpQJwaMK9CYipMrHzJj3N6euTW8M%2BVHqGeCYFtjpBu2FCm%2BeL8VDbYAL8wuN2XxAY6pgEmjMXhjuQ0J09ixDJKhtPl6a3KiFwkyhSovrLIF9zknLpHYeQUFwrAf6V%2Bb%2BXVZikU8ye2Po%2BNwtoX8LYbSr%2FKNiBhhOkwLCpD%2FbDk%2B0qJJ1KxlaZrlIDGo4EajG8lh60zfD5dCOjWlnDAkzboFCE2jLpdAs1%2FCMCJUeFbWYLegyaiyLiaNAbYPCq1wxSGYnA30ofNrSB5Axt7yz5kDoE6TiN5wqmu&X-Amz-Signature=7d77416e77ba6bfd22d7fab47a4e0931396275c9176a8ee5a620b52fbc8e900d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MN52T2R%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIClK%2BH6Ss947PLnQrseBEy59cm1ZfkuJzeRIkUcgCYukAiAU%2B6z%2FKm9n1lmB6KTAcA1MIhCkrO1nNZj4sEQ5gpgaTCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2FIX5tMerGEqSDQT9KtwD%2FRGsoLr%2Bizr9Wl0OThvy%2B0%2BmCSOdjsSSumcktPWB2rXykjFi8m0R%2FEwVVy5uyU92q%2Bw%2FS%2FeFRaBS2WEPTik68500z9o2bi%2B6xy0CdwRVnlJZXoS8O2vQ4M0jy1gjmR%2BB5p3EbVcczaV9sfTN2dh4f2VWNw7Xj1X%2F%2BiK9c44rI44RZm8N%2FL9QsJvP4YaLCjVEMUWZGYofqHJCEagdkfkbHTDeQxlx7Pih2o9ADiZjzOaxMy3u83WT8F1awLwyCtxsQKTwXgLApaOdSj9RsV%2BLNAR9TIv4fe0AhgGucjBrTMHanyxSx99pHERvxvTQt0BH%2BFkKkw7R4Fifx8NL4eL28Jam3hbMXUISqgz8gq1r0TxczJBASfytvFDZgf20pQ171Zko7vttK2NJTbGidMx3aeXtB4vQBifrqh14zdNOeDrQyjaDDRznFSL5a4cfAusH4WADONvwx%2BYbyAhnhTYOLvDyws0q20%2FqI67C8SvFaX6Ij1jXrmmt8Vo7cgwjMWZZUoqjSPofkUVxFHXjpuAdll9WdaqnO3brZ6VhvA1Diqmt0OIU6b%2BrMU1hHPPZPOCEvyXpQJwaMK9CYipMrHzJj3N6euTW8M%2BVHqGeCYFtjpBu2FCm%2BeL8VDbYAL8wuN2XxAY6pgEmjMXhjuQ0J09ixDJKhtPl6a3KiFwkyhSovrLIF9zknLpHYeQUFwrAf6V%2Bb%2BXVZikU8ye2Po%2BNwtoX8LYbSr%2FKNiBhhOkwLCpD%2FbDk%2B0qJJ1KxlaZrlIDGo4EajG8lh60zfD5dCOjWlnDAkzboFCE2jLpdAs1%2FCMCJUeFbWYLegyaiyLiaNAbYPCq1wxSGYnA30ofNrSB5Axt7yz5kDoE6TiN5wqmu&X-Amz-Signature=48cf9815b0c3859ef5f27d45f24ef1f7f9e1eeff1a907e097a022ad1e3a71b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MN52T2R%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIClK%2BH6Ss947PLnQrseBEy59cm1ZfkuJzeRIkUcgCYukAiAU%2B6z%2FKm9n1lmB6KTAcA1MIhCkrO1nNZj4sEQ5gpgaTCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2FIX5tMerGEqSDQT9KtwD%2FRGsoLr%2Bizr9Wl0OThvy%2B0%2BmCSOdjsSSumcktPWB2rXykjFi8m0R%2FEwVVy5uyU92q%2Bw%2FS%2FeFRaBS2WEPTik68500z9o2bi%2B6xy0CdwRVnlJZXoS8O2vQ4M0jy1gjmR%2BB5p3EbVcczaV9sfTN2dh4f2VWNw7Xj1X%2F%2BiK9c44rI44RZm8N%2FL9QsJvP4YaLCjVEMUWZGYofqHJCEagdkfkbHTDeQxlx7Pih2o9ADiZjzOaxMy3u83WT8F1awLwyCtxsQKTwXgLApaOdSj9RsV%2BLNAR9TIv4fe0AhgGucjBrTMHanyxSx99pHERvxvTQt0BH%2BFkKkw7R4Fifx8NL4eL28Jam3hbMXUISqgz8gq1r0TxczJBASfytvFDZgf20pQ171Zko7vttK2NJTbGidMx3aeXtB4vQBifrqh14zdNOeDrQyjaDDRznFSL5a4cfAusH4WADONvwx%2BYbyAhnhTYOLvDyws0q20%2FqI67C8SvFaX6Ij1jXrmmt8Vo7cgwjMWZZUoqjSPofkUVxFHXjpuAdll9WdaqnO3brZ6VhvA1Diqmt0OIU6b%2BrMU1hHPPZPOCEvyXpQJwaMK9CYipMrHzJj3N6euTW8M%2BVHqGeCYFtjpBu2FCm%2BeL8VDbYAL8wuN2XxAY6pgEmjMXhjuQ0J09ixDJKhtPl6a3KiFwkyhSovrLIF9zknLpHYeQUFwrAf6V%2Bb%2BXVZikU8ye2Po%2BNwtoX8LYbSr%2FKNiBhhOkwLCpD%2FbDk%2B0qJJ1KxlaZrlIDGo4EajG8lh60zfD5dCOjWlnDAkzboFCE2jLpdAs1%2FCMCJUeFbWYLegyaiyLiaNAbYPCq1wxSGYnA30ofNrSB5Axt7yz5kDoE6TiN5wqmu&X-Amz-Signature=03a9aa29e8ea4d88085f55c49d3c92c7f1be721cb9770000fa23a3c2b11c2931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
