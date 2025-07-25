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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPA6AMRX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDnLEOfTZCVcdNqTmpX9uoH6AqDA7XkxPCIgzlZtXpGHwIhAP%2BUTiNcwHUjZU043KrW0tKvEdW26u0f7o10esUuubBnKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFiEHW7mQSQVpPXksq3AOj3PI8xSJhOT9rCpS0Q4CL539vd7YQWYFJgI3QpCmMOdhB%2FoV121v%2BDocedSYx2ahmZt25mqDKFLGS54j%2B2fbNQDmwqD8LcM9iYGXNoHUUNfqpYwRX4Unc%2B72zvU5Om2bcbf9aQQPZZRUlCvCAJz0YPXJD0rImeGWvERcT6mki%2B9E51snAadp5LdPYKliCGQrJ3UF%2F5TL7SHWzipRDU3KChKw3Cfb%2FxkPz8wlS%2BX3ar8FfmwojJ0GMm6ERVn6xZi6N6%2BQSCtMonU1mxWhypxfJOsG1rORamgv%2BpZqQHkWJcPje%2BdXkPEhqkwPzMgkHUWh18htghdFARZYOP043VqZM%2BrnhWZcn7%2BCE%2FH8FGHRWtut1FaaAXQGpAXHxLf8exxiZ%2FCROhY%2BJoGV7%2BTrwhy7ys1bBkf2t8P0bIyUTwUeeevmkPMK4Odlw6jQLWU6KD9uItYd%2BhehMVmCM3LCz6djwe8P5WgykjsYIn9ozlTE4abB7uowQWX0toSRiLkeMsUura%2BgPeAvfHAhu1Uf89%2Fif1FjQ%2FLU%2BrNPcA25S1%2B62KIk8TNTmVWEBnVm%2BR4v55PEO7GWEVA8sXVfli76LNQlnybrBkT1D2Gn3iCGy%2FLdWerXp4J1QyrAjZ1mJ5TDL0Y%2FEBjqkAe%2FPafG3dshNRSBLIrUOxe%2BP%2FCkm3vWM2GtbEbL%2FlQxsO%2Be5pUsiYDcQezlWjsOax3WdYjTLZ93jtjuLfpQ9RU0Ff%2FEjzYW3XM6BkT8bhSYgr2s5CFhrIKDivZYG5bm7rP6Om%2Fk1G8gNxxdXt2auxyUdRXjwVk86hrWQkl8g%2BmNrzeiY1I4vUT%2FHTbdkfoZpnlHkylVDBjxFMmHAAGy5ffNyY%2FVz&X-Amz-Signature=337d6307b3a7f0318d6a7993f020421ffd83135eca54b9575b99a252555e104e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPA6AMRX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDnLEOfTZCVcdNqTmpX9uoH6AqDA7XkxPCIgzlZtXpGHwIhAP%2BUTiNcwHUjZU043KrW0tKvEdW26u0f7o10esUuubBnKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFiEHW7mQSQVpPXksq3AOj3PI8xSJhOT9rCpS0Q4CL539vd7YQWYFJgI3QpCmMOdhB%2FoV121v%2BDocedSYx2ahmZt25mqDKFLGS54j%2B2fbNQDmwqD8LcM9iYGXNoHUUNfqpYwRX4Unc%2B72zvU5Om2bcbf9aQQPZZRUlCvCAJz0YPXJD0rImeGWvERcT6mki%2B9E51snAadp5LdPYKliCGQrJ3UF%2F5TL7SHWzipRDU3KChKw3Cfb%2FxkPz8wlS%2BX3ar8FfmwojJ0GMm6ERVn6xZi6N6%2BQSCtMonU1mxWhypxfJOsG1rORamgv%2BpZqQHkWJcPje%2BdXkPEhqkwPzMgkHUWh18htghdFARZYOP043VqZM%2BrnhWZcn7%2BCE%2FH8FGHRWtut1FaaAXQGpAXHxLf8exxiZ%2FCROhY%2BJoGV7%2BTrwhy7ys1bBkf2t8P0bIyUTwUeeevmkPMK4Odlw6jQLWU6KD9uItYd%2BhehMVmCM3LCz6djwe8P5WgykjsYIn9ozlTE4abB7uowQWX0toSRiLkeMsUura%2BgPeAvfHAhu1Uf89%2Fif1FjQ%2FLU%2BrNPcA25S1%2B62KIk8TNTmVWEBnVm%2BR4v55PEO7GWEVA8sXVfli76LNQlnybrBkT1D2Gn3iCGy%2FLdWerXp4J1QyrAjZ1mJ5TDL0Y%2FEBjqkAe%2FPafG3dshNRSBLIrUOxe%2BP%2FCkm3vWM2GtbEbL%2FlQxsO%2Be5pUsiYDcQezlWjsOax3WdYjTLZ93jtjuLfpQ9RU0Ff%2FEjzYW3XM6BkT8bhSYgr2s5CFhrIKDivZYG5bm7rP6Om%2Fk1G8gNxxdXt2auxyUdRXjwVk86hrWQkl8g%2BmNrzeiY1I4vUT%2FHTbdkfoZpnlHkylVDBjxFMmHAAGy5ffNyY%2FVz&X-Amz-Signature=2de05bf4f700ebe1a98a6b2cd733fefa56b2a0cbbb63708113ee88904272f747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPA6AMRX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDnLEOfTZCVcdNqTmpX9uoH6AqDA7XkxPCIgzlZtXpGHwIhAP%2BUTiNcwHUjZU043KrW0tKvEdW26u0f7o10esUuubBnKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFiEHW7mQSQVpPXksq3AOj3PI8xSJhOT9rCpS0Q4CL539vd7YQWYFJgI3QpCmMOdhB%2FoV121v%2BDocedSYx2ahmZt25mqDKFLGS54j%2B2fbNQDmwqD8LcM9iYGXNoHUUNfqpYwRX4Unc%2B72zvU5Om2bcbf9aQQPZZRUlCvCAJz0YPXJD0rImeGWvERcT6mki%2B9E51snAadp5LdPYKliCGQrJ3UF%2F5TL7SHWzipRDU3KChKw3Cfb%2FxkPz8wlS%2BX3ar8FfmwojJ0GMm6ERVn6xZi6N6%2BQSCtMonU1mxWhypxfJOsG1rORamgv%2BpZqQHkWJcPje%2BdXkPEhqkwPzMgkHUWh18htghdFARZYOP043VqZM%2BrnhWZcn7%2BCE%2FH8FGHRWtut1FaaAXQGpAXHxLf8exxiZ%2FCROhY%2BJoGV7%2BTrwhy7ys1bBkf2t8P0bIyUTwUeeevmkPMK4Odlw6jQLWU6KD9uItYd%2BhehMVmCM3LCz6djwe8P5WgykjsYIn9ozlTE4abB7uowQWX0toSRiLkeMsUura%2BgPeAvfHAhu1Uf89%2Fif1FjQ%2FLU%2BrNPcA25S1%2B62KIk8TNTmVWEBnVm%2BR4v55PEO7GWEVA8sXVfli76LNQlnybrBkT1D2Gn3iCGy%2FLdWerXp4J1QyrAjZ1mJ5TDL0Y%2FEBjqkAe%2FPafG3dshNRSBLIrUOxe%2BP%2FCkm3vWM2GtbEbL%2FlQxsO%2Be5pUsiYDcQezlWjsOax3WdYjTLZ93jtjuLfpQ9RU0Ff%2FEjzYW3XM6BkT8bhSYgr2s5CFhrIKDivZYG5bm7rP6Om%2Fk1G8gNxxdXt2auxyUdRXjwVk86hrWQkl8g%2BmNrzeiY1I4vUT%2FHTbdkfoZpnlHkylVDBjxFMmHAAGy5ffNyY%2FVz&X-Amz-Signature=f2e9c81f63505b5022d0b26dc81adc9db06f0f4956ce7dabd40cbbed2eea9e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPA6AMRX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDnLEOfTZCVcdNqTmpX9uoH6AqDA7XkxPCIgzlZtXpGHwIhAP%2BUTiNcwHUjZU043KrW0tKvEdW26u0f7o10esUuubBnKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFiEHW7mQSQVpPXksq3AOj3PI8xSJhOT9rCpS0Q4CL539vd7YQWYFJgI3QpCmMOdhB%2FoV121v%2BDocedSYx2ahmZt25mqDKFLGS54j%2B2fbNQDmwqD8LcM9iYGXNoHUUNfqpYwRX4Unc%2B72zvU5Om2bcbf9aQQPZZRUlCvCAJz0YPXJD0rImeGWvERcT6mki%2B9E51snAadp5LdPYKliCGQrJ3UF%2F5TL7SHWzipRDU3KChKw3Cfb%2FxkPz8wlS%2BX3ar8FfmwojJ0GMm6ERVn6xZi6N6%2BQSCtMonU1mxWhypxfJOsG1rORamgv%2BpZqQHkWJcPje%2BdXkPEhqkwPzMgkHUWh18htghdFARZYOP043VqZM%2BrnhWZcn7%2BCE%2FH8FGHRWtut1FaaAXQGpAXHxLf8exxiZ%2FCROhY%2BJoGV7%2BTrwhy7ys1bBkf2t8P0bIyUTwUeeevmkPMK4Odlw6jQLWU6KD9uItYd%2BhehMVmCM3LCz6djwe8P5WgykjsYIn9ozlTE4abB7uowQWX0toSRiLkeMsUura%2BgPeAvfHAhu1Uf89%2Fif1FjQ%2FLU%2BrNPcA25S1%2B62KIk8TNTmVWEBnVm%2BR4v55PEO7GWEVA8sXVfli76LNQlnybrBkT1D2Gn3iCGy%2FLdWerXp4J1QyrAjZ1mJ5TDL0Y%2FEBjqkAe%2FPafG3dshNRSBLIrUOxe%2BP%2FCkm3vWM2GtbEbL%2FlQxsO%2Be5pUsiYDcQezlWjsOax3WdYjTLZ93jtjuLfpQ9RU0Ff%2FEjzYW3XM6BkT8bhSYgr2s5CFhrIKDivZYG5bm7rP6Om%2Fk1G8gNxxdXt2auxyUdRXjwVk86hrWQkl8g%2BmNrzeiY1I4vUT%2FHTbdkfoZpnlHkylVDBjxFMmHAAGy5ffNyY%2FVz&X-Amz-Signature=dca9ab01c6159bb06178faa7409a2a8a259e60335da1ede4744929015531bfef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPA6AMRX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDnLEOfTZCVcdNqTmpX9uoH6AqDA7XkxPCIgzlZtXpGHwIhAP%2BUTiNcwHUjZU043KrW0tKvEdW26u0f7o10esUuubBnKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFiEHW7mQSQVpPXksq3AOj3PI8xSJhOT9rCpS0Q4CL539vd7YQWYFJgI3QpCmMOdhB%2FoV121v%2BDocedSYx2ahmZt25mqDKFLGS54j%2B2fbNQDmwqD8LcM9iYGXNoHUUNfqpYwRX4Unc%2B72zvU5Om2bcbf9aQQPZZRUlCvCAJz0YPXJD0rImeGWvERcT6mki%2B9E51snAadp5LdPYKliCGQrJ3UF%2F5TL7SHWzipRDU3KChKw3Cfb%2FxkPz8wlS%2BX3ar8FfmwojJ0GMm6ERVn6xZi6N6%2BQSCtMonU1mxWhypxfJOsG1rORamgv%2BpZqQHkWJcPje%2BdXkPEhqkwPzMgkHUWh18htghdFARZYOP043VqZM%2BrnhWZcn7%2BCE%2FH8FGHRWtut1FaaAXQGpAXHxLf8exxiZ%2FCROhY%2BJoGV7%2BTrwhy7ys1bBkf2t8P0bIyUTwUeeevmkPMK4Odlw6jQLWU6KD9uItYd%2BhehMVmCM3LCz6djwe8P5WgykjsYIn9ozlTE4abB7uowQWX0toSRiLkeMsUura%2BgPeAvfHAhu1Uf89%2Fif1FjQ%2FLU%2BrNPcA25S1%2B62KIk8TNTmVWEBnVm%2BR4v55PEO7GWEVA8sXVfli76LNQlnybrBkT1D2Gn3iCGy%2FLdWerXp4J1QyrAjZ1mJ5TDL0Y%2FEBjqkAe%2FPafG3dshNRSBLIrUOxe%2BP%2FCkm3vWM2GtbEbL%2FlQxsO%2Be5pUsiYDcQezlWjsOax3WdYjTLZ93jtjuLfpQ9RU0Ff%2FEjzYW3XM6BkT8bhSYgr2s5CFhrIKDivZYG5bm7rP6Om%2Fk1G8gNxxdXt2auxyUdRXjwVk86hrWQkl8g%2BmNrzeiY1I4vUT%2FHTbdkfoZpnlHkylVDBjxFMmHAAGy5ffNyY%2FVz&X-Amz-Signature=9b1771302cad1b87f319edd3663af6f530bfb47b5f149df01fc2e1b27680d625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPA6AMRX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDnLEOfTZCVcdNqTmpX9uoH6AqDA7XkxPCIgzlZtXpGHwIhAP%2BUTiNcwHUjZU043KrW0tKvEdW26u0f7o10esUuubBnKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFiEHW7mQSQVpPXksq3AOj3PI8xSJhOT9rCpS0Q4CL539vd7YQWYFJgI3QpCmMOdhB%2FoV121v%2BDocedSYx2ahmZt25mqDKFLGS54j%2B2fbNQDmwqD8LcM9iYGXNoHUUNfqpYwRX4Unc%2B72zvU5Om2bcbf9aQQPZZRUlCvCAJz0YPXJD0rImeGWvERcT6mki%2B9E51snAadp5LdPYKliCGQrJ3UF%2F5TL7SHWzipRDU3KChKw3Cfb%2FxkPz8wlS%2BX3ar8FfmwojJ0GMm6ERVn6xZi6N6%2BQSCtMonU1mxWhypxfJOsG1rORamgv%2BpZqQHkWJcPje%2BdXkPEhqkwPzMgkHUWh18htghdFARZYOP043VqZM%2BrnhWZcn7%2BCE%2FH8FGHRWtut1FaaAXQGpAXHxLf8exxiZ%2FCROhY%2BJoGV7%2BTrwhy7ys1bBkf2t8P0bIyUTwUeeevmkPMK4Odlw6jQLWU6KD9uItYd%2BhehMVmCM3LCz6djwe8P5WgykjsYIn9ozlTE4abB7uowQWX0toSRiLkeMsUura%2BgPeAvfHAhu1Uf89%2Fif1FjQ%2FLU%2BrNPcA25S1%2B62KIk8TNTmVWEBnVm%2BR4v55PEO7GWEVA8sXVfli76LNQlnybrBkT1D2Gn3iCGy%2FLdWerXp4J1QyrAjZ1mJ5TDL0Y%2FEBjqkAe%2FPafG3dshNRSBLIrUOxe%2BP%2FCkm3vWM2GtbEbL%2FlQxsO%2Be5pUsiYDcQezlWjsOax3WdYjTLZ93jtjuLfpQ9RU0Ff%2FEjzYW3XM6BkT8bhSYgr2s5CFhrIKDivZYG5bm7rP6Om%2Fk1G8gNxxdXt2auxyUdRXjwVk86hrWQkl8g%2BmNrzeiY1I4vUT%2FHTbdkfoZpnlHkylVDBjxFMmHAAGy5ffNyY%2FVz&X-Amz-Signature=e3935a8e4d6afc6236d31812fc8b123d3a99224f4b309accb2c64a060dda2aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPA6AMRX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDnLEOfTZCVcdNqTmpX9uoH6AqDA7XkxPCIgzlZtXpGHwIhAP%2BUTiNcwHUjZU043KrW0tKvEdW26u0f7o10esUuubBnKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFiEHW7mQSQVpPXksq3AOj3PI8xSJhOT9rCpS0Q4CL539vd7YQWYFJgI3QpCmMOdhB%2FoV121v%2BDocedSYx2ahmZt25mqDKFLGS54j%2B2fbNQDmwqD8LcM9iYGXNoHUUNfqpYwRX4Unc%2B72zvU5Om2bcbf9aQQPZZRUlCvCAJz0YPXJD0rImeGWvERcT6mki%2B9E51snAadp5LdPYKliCGQrJ3UF%2F5TL7SHWzipRDU3KChKw3Cfb%2FxkPz8wlS%2BX3ar8FfmwojJ0GMm6ERVn6xZi6N6%2BQSCtMonU1mxWhypxfJOsG1rORamgv%2BpZqQHkWJcPje%2BdXkPEhqkwPzMgkHUWh18htghdFARZYOP043VqZM%2BrnhWZcn7%2BCE%2FH8FGHRWtut1FaaAXQGpAXHxLf8exxiZ%2FCROhY%2BJoGV7%2BTrwhy7ys1bBkf2t8P0bIyUTwUeeevmkPMK4Odlw6jQLWU6KD9uItYd%2BhehMVmCM3LCz6djwe8P5WgykjsYIn9ozlTE4abB7uowQWX0toSRiLkeMsUura%2BgPeAvfHAhu1Uf89%2Fif1FjQ%2FLU%2BrNPcA25S1%2B62KIk8TNTmVWEBnVm%2BR4v55PEO7GWEVA8sXVfli76LNQlnybrBkT1D2Gn3iCGy%2FLdWerXp4J1QyrAjZ1mJ5TDL0Y%2FEBjqkAe%2FPafG3dshNRSBLIrUOxe%2BP%2FCkm3vWM2GtbEbL%2FlQxsO%2Be5pUsiYDcQezlWjsOax3WdYjTLZ93jtjuLfpQ9RU0Ff%2FEjzYW3XM6BkT8bhSYgr2s5CFhrIKDivZYG5bm7rP6Om%2Fk1G8gNxxdXt2auxyUdRXjwVk86hrWQkl8g%2BmNrzeiY1I4vUT%2FHTbdkfoZpnlHkylVDBjxFMmHAAGy5ffNyY%2FVz&X-Amz-Signature=21fe53ac2bc2130d1bf3128f97f654fec7666e9c488cc3301c0697289ab9d471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPA6AMRX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDnLEOfTZCVcdNqTmpX9uoH6AqDA7XkxPCIgzlZtXpGHwIhAP%2BUTiNcwHUjZU043KrW0tKvEdW26u0f7o10esUuubBnKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFiEHW7mQSQVpPXksq3AOj3PI8xSJhOT9rCpS0Q4CL539vd7YQWYFJgI3QpCmMOdhB%2FoV121v%2BDocedSYx2ahmZt25mqDKFLGS54j%2B2fbNQDmwqD8LcM9iYGXNoHUUNfqpYwRX4Unc%2B72zvU5Om2bcbf9aQQPZZRUlCvCAJz0YPXJD0rImeGWvERcT6mki%2B9E51snAadp5LdPYKliCGQrJ3UF%2F5TL7SHWzipRDU3KChKw3Cfb%2FxkPz8wlS%2BX3ar8FfmwojJ0GMm6ERVn6xZi6N6%2BQSCtMonU1mxWhypxfJOsG1rORamgv%2BpZqQHkWJcPje%2BdXkPEhqkwPzMgkHUWh18htghdFARZYOP043VqZM%2BrnhWZcn7%2BCE%2FH8FGHRWtut1FaaAXQGpAXHxLf8exxiZ%2FCROhY%2BJoGV7%2BTrwhy7ys1bBkf2t8P0bIyUTwUeeevmkPMK4Odlw6jQLWU6KD9uItYd%2BhehMVmCM3LCz6djwe8P5WgykjsYIn9ozlTE4abB7uowQWX0toSRiLkeMsUura%2BgPeAvfHAhu1Uf89%2Fif1FjQ%2FLU%2BrNPcA25S1%2B62KIk8TNTmVWEBnVm%2BR4v55PEO7GWEVA8sXVfli76LNQlnybrBkT1D2Gn3iCGy%2FLdWerXp4J1QyrAjZ1mJ5TDL0Y%2FEBjqkAe%2FPafG3dshNRSBLIrUOxe%2BP%2FCkm3vWM2GtbEbL%2FlQxsO%2Be5pUsiYDcQezlWjsOax3WdYjTLZ93jtjuLfpQ9RU0Ff%2FEjzYW3XM6BkT8bhSYgr2s5CFhrIKDivZYG5bm7rP6Om%2Fk1G8gNxxdXt2auxyUdRXjwVk86hrWQkl8g%2BmNrzeiY1I4vUT%2FHTbdkfoZpnlHkylVDBjxFMmHAAGy5ffNyY%2FVz&X-Amz-Signature=3e288dc22bab16a4e6b0c7adaaac9b50b52cc1676a51428091eb4c3b250c7bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPA6AMRX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDnLEOfTZCVcdNqTmpX9uoH6AqDA7XkxPCIgzlZtXpGHwIhAP%2BUTiNcwHUjZU043KrW0tKvEdW26u0f7o10esUuubBnKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFiEHW7mQSQVpPXksq3AOj3PI8xSJhOT9rCpS0Q4CL539vd7YQWYFJgI3QpCmMOdhB%2FoV121v%2BDocedSYx2ahmZt25mqDKFLGS54j%2B2fbNQDmwqD8LcM9iYGXNoHUUNfqpYwRX4Unc%2B72zvU5Om2bcbf9aQQPZZRUlCvCAJz0YPXJD0rImeGWvERcT6mki%2B9E51snAadp5LdPYKliCGQrJ3UF%2F5TL7SHWzipRDU3KChKw3Cfb%2FxkPz8wlS%2BX3ar8FfmwojJ0GMm6ERVn6xZi6N6%2BQSCtMonU1mxWhypxfJOsG1rORamgv%2BpZqQHkWJcPje%2BdXkPEhqkwPzMgkHUWh18htghdFARZYOP043VqZM%2BrnhWZcn7%2BCE%2FH8FGHRWtut1FaaAXQGpAXHxLf8exxiZ%2FCROhY%2BJoGV7%2BTrwhy7ys1bBkf2t8P0bIyUTwUeeevmkPMK4Odlw6jQLWU6KD9uItYd%2BhehMVmCM3LCz6djwe8P5WgykjsYIn9ozlTE4abB7uowQWX0toSRiLkeMsUura%2BgPeAvfHAhu1Uf89%2Fif1FjQ%2FLU%2BrNPcA25S1%2B62KIk8TNTmVWEBnVm%2BR4v55PEO7GWEVA8sXVfli76LNQlnybrBkT1D2Gn3iCGy%2FLdWerXp4J1QyrAjZ1mJ5TDL0Y%2FEBjqkAe%2FPafG3dshNRSBLIrUOxe%2BP%2FCkm3vWM2GtbEbL%2FlQxsO%2Be5pUsiYDcQezlWjsOax3WdYjTLZ93jtjuLfpQ9RU0Ff%2FEjzYW3XM6BkT8bhSYgr2s5CFhrIKDivZYG5bm7rP6Om%2Fk1G8gNxxdXt2auxyUdRXjwVk86hrWQkl8g%2BmNrzeiY1I4vUT%2FHTbdkfoZpnlHkylVDBjxFMmHAAGy5ffNyY%2FVz&X-Amz-Signature=a93cd3b0cf7dc0cdebc3402394395d1381f769316859f8c37f1f556246ab8f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JHEGFYT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIENsBxvETRroac%2B5YaIPu6lxjO7snXffIKLY%2BXonnjMuAiEAxXzCCgLaUUFan6VZW4orYFvFZwKQcwZWV9lpYAgw5dkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDBFevr4dgoP0besaKircAwJGgYRHKt4ASiK0ovSwX%2FW2tJxv%2F6VR8UYILoIa8XcnwtlRuTPiktRIHUuccWsAmNVEYTwFOxjOykrEls9V4pnKFyRxeWjH9IDCudfPVkXAuZfrM7cOc6DBojdwLmZ3wkg670GwdbY%2BM7NnsKuyTjP8NSGJgkSwy7zafYficpTro%2Fp9KvhNmUxqO7Oa14dl%2FVyLiGBBW2iXQ%2BIPjsS2tNZia%2BYdL77TzsniW8oRPyOGpov%2B3AiJ9dh%2B7YYlCfIvmMG%2FU%2Ftk4O8%2Bi2JYPPa7ulcbhPHqVXrIS1wwD0rRMzz2n%2BcA9jNtXJ51HvrCLlZkKaiR0MtrTrBpJIFdEJvtAoaIbP8ixJ2Xpb0ooviVZDsKbTQGZWTipMEmxHki7r5Df4CFoPmdTBCcbLb3p%2F6YKbWRFZg4AOZ%2BOwjDoi2GI9hBdQyP%2BMaMSDa5rf4nRPEmbxYYPJCGy%2B4dsB5OCEjwIc6auzcGHv%2B65%2Bi5anZjzj4C1O4gq4H4YvOAUF0ZWIQuZQCLbTF%2FvQ%2FebiKtkZhBRwUz3SCsHIJB5JzemZ%2BaCSprdpXdmDL6VObZgeHV9wmV3mUSvrkNALmzGrRut4kXoGsW37GCY6VB774sHw34kad%2Fb3mpRUGhL88m2tGLMJPRj8QGOqUBdPDDngqY5y8Hvnvf6EGf0PaIKDMjIm4BINafJCTjrLDnMsbGvOcUE%2BJXKiehcnnpO9EVU2A1aK7HPAX96kSu6i6IlRFxZuvlqqi0i7uPPhIEsIRltNA%2FZHzehdM0E1govM%2FVbOzCXL2Mc4vdPArh2o1PlZVvUx3JqI%2FrP0FWuM3InsvOjOZjlZqD0GMThIYa9Gi8aH6WMbO3CvYn8WF%2FxzN%2F7g%2Fa&X-Amz-Signature=2a295e7be1d593862b1415bb1cb35ecfd2d2b7631f725c0c003182b31ecf6a95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPA6AMRX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDnLEOfTZCVcdNqTmpX9uoH6AqDA7XkxPCIgzlZtXpGHwIhAP%2BUTiNcwHUjZU043KrW0tKvEdW26u0f7o10esUuubBnKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFiEHW7mQSQVpPXksq3AOj3PI8xSJhOT9rCpS0Q4CL539vd7YQWYFJgI3QpCmMOdhB%2FoV121v%2BDocedSYx2ahmZt25mqDKFLGS54j%2B2fbNQDmwqD8LcM9iYGXNoHUUNfqpYwRX4Unc%2B72zvU5Om2bcbf9aQQPZZRUlCvCAJz0YPXJD0rImeGWvERcT6mki%2B9E51snAadp5LdPYKliCGQrJ3UF%2F5TL7SHWzipRDU3KChKw3Cfb%2FxkPz8wlS%2BX3ar8FfmwojJ0GMm6ERVn6xZi6N6%2BQSCtMonU1mxWhypxfJOsG1rORamgv%2BpZqQHkWJcPje%2BdXkPEhqkwPzMgkHUWh18htghdFARZYOP043VqZM%2BrnhWZcn7%2BCE%2FH8FGHRWtut1FaaAXQGpAXHxLf8exxiZ%2FCROhY%2BJoGV7%2BTrwhy7ys1bBkf2t8P0bIyUTwUeeevmkPMK4Odlw6jQLWU6KD9uItYd%2BhehMVmCM3LCz6djwe8P5WgykjsYIn9ozlTE4abB7uowQWX0toSRiLkeMsUura%2BgPeAvfHAhu1Uf89%2Fif1FjQ%2FLU%2BrNPcA25S1%2B62KIk8TNTmVWEBnVm%2BR4v55PEO7GWEVA8sXVfli76LNQlnybrBkT1D2Gn3iCGy%2FLdWerXp4J1QyrAjZ1mJ5TDL0Y%2FEBjqkAe%2FPafG3dshNRSBLIrUOxe%2BP%2FCkm3vWM2GtbEbL%2FlQxsO%2Be5pUsiYDcQezlWjsOax3WdYjTLZ93jtjuLfpQ9RU0Ff%2FEjzYW3XM6BkT8bhSYgr2s5CFhrIKDivZYG5bm7rP6Om%2Fk1G8gNxxdXt2auxyUdRXjwVk86hrWQkl8g%2BmNrzeiY1I4vUT%2FHTbdkfoZpnlHkylVDBjxFMmHAAGy5ffNyY%2FVz&X-Amz-Signature=3a2e983c5b043d5d8acd626779ce0daa23177301ffde3c735d2df3f85a0d0bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHPMXU2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCYrBAcvOyd86Rz4GcSxYD6KmtPB6c%2FbwuGbvUWEeToHgIhAMuJXLWkcBDMg0a1rZLuBLqd8wzDJ0nNmGF2VuVVQep3Kv8DCE4QABoMNjM3NDIzMTgzODA1IgzlCf9y4HwMpZo32QQq3AO5p3g4EILVzOq47v1lVl32D0uLJL7UK4%2Fr5FHXjP%2Bl%2F2znp7PxuNwaRDr3GA%2F6hFz4W%2B1uN%2BRPyCH4Ue25Ls1%2BUGfJsUaxPQBUYo1vefL5Y1qwB1dksyQmjuR84PEwnPxrfFIeUcN7RshxxoDobrczenSn4%2BbFWlC89tEyT2IAgCO0%2F%2FA%2FX69x9cDHpCIfBxxHdIUQFvX3GLjDyXJaYZLCEDSbQPdqNNiPpzamKJ0GNFXjvQyccNnpLnR1oMOLATjd4vLq8PVWpV%2F7TXiIAT89SBLVE541v6YSi1nje8cXlGiiKUP8aSlX9pWQcCLuRH9QWPE0iQTlaZ6tcTGB%2F1GQqau2GeZweSGZmnKaxOlBB%2B2ueVC6gCWLW1BGHQJBq7OFO%2Bk2THrm9H5PcynA2TBQS%2FsWlQTbIOZK3urYjQU5jthFihMzDkv3AIEzfesK8Nj63ROnuNxrzQKTlaPoTU4KbqORnb9dgNcw0l66e1RqEcU%2FPB0a4vOv44NJ7TWIq4OP8YL6%2BYKv60oDolnXhpNnFySKMWEs2%2FH3VQvWcklefssJfDc0%2B5NcdjiW%2FiEtci8cRsX8r4PcmCf5Jw9eAUoCJv7EjlCnEXA0YJh7EYF2RSUKwWRiZSCu8ygGiDDs0I%2FEBjqkAZqbqYkxWbi7lBwwprtcDhLpYDH%2B2eNUyzGrnhnptIMTDHluF2wsiE3PuML0%2FhOcLNuW%2FkFO88UNK%2BWq6rLpD878F7aGpm9GyD%2FwqBK44jaah0kh4%2FYqdLKRaTJjcwyVYxLo8BoXzXiBuZmhM3CwpsFAZAEOQShjzjwoA0oStC4Ss5221OkWU%2FjnyZ%2FBfKdLebLFiSzWVDlEjryd1Rbukdb59MaG&X-Amz-Signature=9ef2600ab65d71de2a78634063be58f9af3ba7f8b4d8f841766cb873374c61d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHPMXU2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCYrBAcvOyd86Rz4GcSxYD6KmtPB6c%2FbwuGbvUWEeToHgIhAMuJXLWkcBDMg0a1rZLuBLqd8wzDJ0nNmGF2VuVVQep3Kv8DCE4QABoMNjM3NDIzMTgzODA1IgzlCf9y4HwMpZo32QQq3AO5p3g4EILVzOq47v1lVl32D0uLJL7UK4%2Fr5FHXjP%2Bl%2F2znp7PxuNwaRDr3GA%2F6hFz4W%2B1uN%2BRPyCH4Ue25Ls1%2BUGfJsUaxPQBUYo1vefL5Y1qwB1dksyQmjuR84PEwnPxrfFIeUcN7RshxxoDobrczenSn4%2BbFWlC89tEyT2IAgCO0%2F%2FA%2FX69x9cDHpCIfBxxHdIUQFvX3GLjDyXJaYZLCEDSbQPdqNNiPpzamKJ0GNFXjvQyccNnpLnR1oMOLATjd4vLq8PVWpV%2F7TXiIAT89SBLVE541v6YSi1nje8cXlGiiKUP8aSlX9pWQcCLuRH9QWPE0iQTlaZ6tcTGB%2F1GQqau2GeZweSGZmnKaxOlBB%2B2ueVC6gCWLW1BGHQJBq7OFO%2Bk2THrm9H5PcynA2TBQS%2FsWlQTbIOZK3urYjQU5jthFihMzDkv3AIEzfesK8Nj63ROnuNxrzQKTlaPoTU4KbqORnb9dgNcw0l66e1RqEcU%2FPB0a4vOv44NJ7TWIq4OP8YL6%2BYKv60oDolnXhpNnFySKMWEs2%2FH3VQvWcklefssJfDc0%2B5NcdjiW%2FiEtci8cRsX8r4PcmCf5Jw9eAUoCJv7EjlCnEXA0YJh7EYF2RSUKwWRiZSCu8ygGiDDs0I%2FEBjqkAZqbqYkxWbi7lBwwprtcDhLpYDH%2B2eNUyzGrnhnptIMTDHluF2wsiE3PuML0%2FhOcLNuW%2FkFO88UNK%2BWq6rLpD878F7aGpm9GyD%2FwqBK44jaah0kh4%2FYqdLKRaTJjcwyVYxLo8BoXzXiBuZmhM3CwpsFAZAEOQShjzjwoA0oStC4Ss5221OkWU%2FjnyZ%2FBfKdLebLFiSzWVDlEjryd1Rbukdb59MaG&X-Amz-Signature=b0245f89dacbcd069dce8457dd57482a8fb2d9911a6bc5fda8129dd294b64f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHPMXU2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCYrBAcvOyd86Rz4GcSxYD6KmtPB6c%2FbwuGbvUWEeToHgIhAMuJXLWkcBDMg0a1rZLuBLqd8wzDJ0nNmGF2VuVVQep3Kv8DCE4QABoMNjM3NDIzMTgzODA1IgzlCf9y4HwMpZo32QQq3AO5p3g4EILVzOq47v1lVl32D0uLJL7UK4%2Fr5FHXjP%2Bl%2F2znp7PxuNwaRDr3GA%2F6hFz4W%2B1uN%2BRPyCH4Ue25Ls1%2BUGfJsUaxPQBUYo1vefL5Y1qwB1dksyQmjuR84PEwnPxrfFIeUcN7RshxxoDobrczenSn4%2BbFWlC89tEyT2IAgCO0%2F%2FA%2FX69x9cDHpCIfBxxHdIUQFvX3GLjDyXJaYZLCEDSbQPdqNNiPpzamKJ0GNFXjvQyccNnpLnR1oMOLATjd4vLq8PVWpV%2F7TXiIAT89SBLVE541v6YSi1nje8cXlGiiKUP8aSlX9pWQcCLuRH9QWPE0iQTlaZ6tcTGB%2F1GQqau2GeZweSGZmnKaxOlBB%2B2ueVC6gCWLW1BGHQJBq7OFO%2Bk2THrm9H5PcynA2TBQS%2FsWlQTbIOZK3urYjQU5jthFihMzDkv3AIEzfesK8Nj63ROnuNxrzQKTlaPoTU4KbqORnb9dgNcw0l66e1RqEcU%2FPB0a4vOv44NJ7TWIq4OP8YL6%2BYKv60oDolnXhpNnFySKMWEs2%2FH3VQvWcklefssJfDc0%2B5NcdjiW%2FiEtci8cRsX8r4PcmCf5Jw9eAUoCJv7EjlCnEXA0YJh7EYF2RSUKwWRiZSCu8ygGiDDs0I%2FEBjqkAZqbqYkxWbi7lBwwprtcDhLpYDH%2B2eNUyzGrnhnptIMTDHluF2wsiE3PuML0%2FhOcLNuW%2FkFO88UNK%2BWq6rLpD878F7aGpm9GyD%2FwqBK44jaah0kh4%2FYqdLKRaTJjcwyVYxLo8BoXzXiBuZmhM3CwpsFAZAEOQShjzjwoA0oStC4Ss5221OkWU%2FjnyZ%2FBfKdLebLFiSzWVDlEjryd1Rbukdb59MaG&X-Amz-Signature=33b0656391172fa3190b74e26feaf46a15bd4bc141119a576d1f561469315cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHPMXU2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCYrBAcvOyd86Rz4GcSxYD6KmtPB6c%2FbwuGbvUWEeToHgIhAMuJXLWkcBDMg0a1rZLuBLqd8wzDJ0nNmGF2VuVVQep3Kv8DCE4QABoMNjM3NDIzMTgzODA1IgzlCf9y4HwMpZo32QQq3AO5p3g4EILVzOq47v1lVl32D0uLJL7UK4%2Fr5FHXjP%2Bl%2F2znp7PxuNwaRDr3GA%2F6hFz4W%2B1uN%2BRPyCH4Ue25Ls1%2BUGfJsUaxPQBUYo1vefL5Y1qwB1dksyQmjuR84PEwnPxrfFIeUcN7RshxxoDobrczenSn4%2BbFWlC89tEyT2IAgCO0%2F%2FA%2FX69x9cDHpCIfBxxHdIUQFvX3GLjDyXJaYZLCEDSbQPdqNNiPpzamKJ0GNFXjvQyccNnpLnR1oMOLATjd4vLq8PVWpV%2F7TXiIAT89SBLVE541v6YSi1nje8cXlGiiKUP8aSlX9pWQcCLuRH9QWPE0iQTlaZ6tcTGB%2F1GQqau2GeZweSGZmnKaxOlBB%2B2ueVC6gCWLW1BGHQJBq7OFO%2Bk2THrm9H5PcynA2TBQS%2FsWlQTbIOZK3urYjQU5jthFihMzDkv3AIEzfesK8Nj63ROnuNxrzQKTlaPoTU4KbqORnb9dgNcw0l66e1RqEcU%2FPB0a4vOv44NJ7TWIq4OP8YL6%2BYKv60oDolnXhpNnFySKMWEs2%2FH3VQvWcklefssJfDc0%2B5NcdjiW%2FiEtci8cRsX8r4PcmCf5Jw9eAUoCJv7EjlCnEXA0YJh7EYF2RSUKwWRiZSCu8ygGiDDs0I%2FEBjqkAZqbqYkxWbi7lBwwprtcDhLpYDH%2B2eNUyzGrnhnptIMTDHluF2wsiE3PuML0%2FhOcLNuW%2FkFO88UNK%2BWq6rLpD878F7aGpm9GyD%2FwqBK44jaah0kh4%2FYqdLKRaTJjcwyVYxLo8BoXzXiBuZmhM3CwpsFAZAEOQShjzjwoA0oStC4Ss5221OkWU%2FjnyZ%2FBfKdLebLFiSzWVDlEjryd1Rbukdb59MaG&X-Amz-Signature=0e9da0bdba4dc9ee11d666a32e67c8c81107e6e09777ad5ba76b35edd88231a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHPMXU2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCYrBAcvOyd86Rz4GcSxYD6KmtPB6c%2FbwuGbvUWEeToHgIhAMuJXLWkcBDMg0a1rZLuBLqd8wzDJ0nNmGF2VuVVQep3Kv8DCE4QABoMNjM3NDIzMTgzODA1IgzlCf9y4HwMpZo32QQq3AO5p3g4EILVzOq47v1lVl32D0uLJL7UK4%2Fr5FHXjP%2Bl%2F2znp7PxuNwaRDr3GA%2F6hFz4W%2B1uN%2BRPyCH4Ue25Ls1%2BUGfJsUaxPQBUYo1vefL5Y1qwB1dksyQmjuR84PEwnPxrfFIeUcN7RshxxoDobrczenSn4%2BbFWlC89tEyT2IAgCO0%2F%2FA%2FX69x9cDHpCIfBxxHdIUQFvX3GLjDyXJaYZLCEDSbQPdqNNiPpzamKJ0GNFXjvQyccNnpLnR1oMOLATjd4vLq8PVWpV%2F7TXiIAT89SBLVE541v6YSi1nje8cXlGiiKUP8aSlX9pWQcCLuRH9QWPE0iQTlaZ6tcTGB%2F1GQqau2GeZweSGZmnKaxOlBB%2B2ueVC6gCWLW1BGHQJBq7OFO%2Bk2THrm9H5PcynA2TBQS%2FsWlQTbIOZK3urYjQU5jthFihMzDkv3AIEzfesK8Nj63ROnuNxrzQKTlaPoTU4KbqORnb9dgNcw0l66e1RqEcU%2FPB0a4vOv44NJ7TWIq4OP8YL6%2BYKv60oDolnXhpNnFySKMWEs2%2FH3VQvWcklefssJfDc0%2B5NcdjiW%2FiEtci8cRsX8r4PcmCf5Jw9eAUoCJv7EjlCnEXA0YJh7EYF2RSUKwWRiZSCu8ygGiDDs0I%2FEBjqkAZqbqYkxWbi7lBwwprtcDhLpYDH%2B2eNUyzGrnhnptIMTDHluF2wsiE3PuML0%2FhOcLNuW%2FkFO88UNK%2BWq6rLpD878F7aGpm9GyD%2FwqBK44jaah0kh4%2FYqdLKRaTJjcwyVYxLo8BoXzXiBuZmhM3CwpsFAZAEOQShjzjwoA0oStC4Ss5221OkWU%2FjnyZ%2FBfKdLebLFiSzWVDlEjryd1Rbukdb59MaG&X-Amz-Signature=9a9a341275ac4ad369cd548f7b4afd829719d98c8324174fe9404897df989f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHPMXU2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCYrBAcvOyd86Rz4GcSxYD6KmtPB6c%2FbwuGbvUWEeToHgIhAMuJXLWkcBDMg0a1rZLuBLqd8wzDJ0nNmGF2VuVVQep3Kv8DCE4QABoMNjM3NDIzMTgzODA1IgzlCf9y4HwMpZo32QQq3AO5p3g4EILVzOq47v1lVl32D0uLJL7UK4%2Fr5FHXjP%2Bl%2F2znp7PxuNwaRDr3GA%2F6hFz4W%2B1uN%2BRPyCH4Ue25Ls1%2BUGfJsUaxPQBUYo1vefL5Y1qwB1dksyQmjuR84PEwnPxrfFIeUcN7RshxxoDobrczenSn4%2BbFWlC89tEyT2IAgCO0%2F%2FA%2FX69x9cDHpCIfBxxHdIUQFvX3GLjDyXJaYZLCEDSbQPdqNNiPpzamKJ0GNFXjvQyccNnpLnR1oMOLATjd4vLq8PVWpV%2F7TXiIAT89SBLVE541v6YSi1nje8cXlGiiKUP8aSlX9pWQcCLuRH9QWPE0iQTlaZ6tcTGB%2F1GQqau2GeZweSGZmnKaxOlBB%2B2ueVC6gCWLW1BGHQJBq7OFO%2Bk2THrm9H5PcynA2TBQS%2FsWlQTbIOZK3urYjQU5jthFihMzDkv3AIEzfesK8Nj63ROnuNxrzQKTlaPoTU4KbqORnb9dgNcw0l66e1RqEcU%2FPB0a4vOv44NJ7TWIq4OP8YL6%2BYKv60oDolnXhpNnFySKMWEs2%2FH3VQvWcklefssJfDc0%2B5NcdjiW%2FiEtci8cRsX8r4PcmCf5Jw9eAUoCJv7EjlCnEXA0YJh7EYF2RSUKwWRiZSCu8ygGiDDs0I%2FEBjqkAZqbqYkxWbi7lBwwprtcDhLpYDH%2B2eNUyzGrnhnptIMTDHluF2wsiE3PuML0%2FhOcLNuW%2FkFO88UNK%2BWq6rLpD878F7aGpm9GyD%2FwqBK44jaah0kh4%2FYqdLKRaTJjcwyVYxLo8BoXzXiBuZmhM3CwpsFAZAEOQShjzjwoA0oStC4Ss5221OkWU%2FjnyZ%2FBfKdLebLFiSzWVDlEjryd1Rbukdb59MaG&X-Amz-Signature=6b2ab5eb2f398d971da87530f8ae90416b7b9317189c9a8d32b0a0d54cbb21af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHPMXU2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCYrBAcvOyd86Rz4GcSxYD6KmtPB6c%2FbwuGbvUWEeToHgIhAMuJXLWkcBDMg0a1rZLuBLqd8wzDJ0nNmGF2VuVVQep3Kv8DCE4QABoMNjM3NDIzMTgzODA1IgzlCf9y4HwMpZo32QQq3AO5p3g4EILVzOq47v1lVl32D0uLJL7UK4%2Fr5FHXjP%2Bl%2F2znp7PxuNwaRDr3GA%2F6hFz4W%2B1uN%2BRPyCH4Ue25Ls1%2BUGfJsUaxPQBUYo1vefL5Y1qwB1dksyQmjuR84PEwnPxrfFIeUcN7RshxxoDobrczenSn4%2BbFWlC89tEyT2IAgCO0%2F%2FA%2FX69x9cDHpCIfBxxHdIUQFvX3GLjDyXJaYZLCEDSbQPdqNNiPpzamKJ0GNFXjvQyccNnpLnR1oMOLATjd4vLq8PVWpV%2F7TXiIAT89SBLVE541v6YSi1nje8cXlGiiKUP8aSlX9pWQcCLuRH9QWPE0iQTlaZ6tcTGB%2F1GQqau2GeZweSGZmnKaxOlBB%2B2ueVC6gCWLW1BGHQJBq7OFO%2Bk2THrm9H5PcynA2TBQS%2FsWlQTbIOZK3urYjQU5jthFihMzDkv3AIEzfesK8Nj63ROnuNxrzQKTlaPoTU4KbqORnb9dgNcw0l66e1RqEcU%2FPB0a4vOv44NJ7TWIq4OP8YL6%2BYKv60oDolnXhpNnFySKMWEs2%2FH3VQvWcklefssJfDc0%2B5NcdjiW%2FiEtci8cRsX8r4PcmCf5Jw9eAUoCJv7EjlCnEXA0YJh7EYF2RSUKwWRiZSCu8ygGiDDs0I%2FEBjqkAZqbqYkxWbi7lBwwprtcDhLpYDH%2B2eNUyzGrnhnptIMTDHluF2wsiE3PuML0%2FhOcLNuW%2FkFO88UNK%2BWq6rLpD878F7aGpm9GyD%2FwqBK44jaah0kh4%2FYqdLKRaTJjcwyVYxLo8BoXzXiBuZmhM3CwpsFAZAEOQShjzjwoA0oStC4Ss5221OkWU%2FjnyZ%2FBfKdLebLFiSzWVDlEjryd1Rbukdb59MaG&X-Amz-Signature=a9719fc50bae56d6a0dba52d1767fd9c01f4087933449306e1b0b5d568710c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
