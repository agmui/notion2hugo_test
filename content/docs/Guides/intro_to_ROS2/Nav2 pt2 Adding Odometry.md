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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4M4HY5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEg0ffGSfX53N60ckczshIUnauxl8b9a9Whs%2BE8HEMD5AiEAm7fEqUPGNCriQLrqqcNoKuxGmGHnon2rAMbNeGsQfEcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHXBgErBH%2FgcIIWqiircA%2Fp82NJGyBfQWw3xSo9919oGqlV9OXc%2Flg%2B6Er6vzAWo5ymI2ctzOMiN3fZFRfYQG7dVrzv25dt56O9cl16zdiLpr%2BnRLf290OHdpfAey6vCM0yzCsGxYrOnLPNru8J9sv9Mx0SixpslN%2BW0VmugNBkfat6uephX23UFcG%2FLIeSJiqZmWPR7E7rHElSYsyN9PhdfuQJ%2B8fum0HZGzxMwAa36qjKyTosLB%2BiiMoJGDJYkF9T779aDZ5KrSxwQNSCMf9hY3SDr0UwbAbR1TNWXT278c3MsMDcvMusmGG9mj%2BrbEUZ1mwAtk26H0xbpdYOVu9COfPQq1YISRO4QTz2Qb7huSVgKvUHXdyTN4y2MDpn8C0n%2B1X7E5NI%2Br55QMhGzvfnvJpjN6hRJiEmxnwpxKEfM8pKjAW6La15wtclfdeV4D2cA7myRyrS25m52fNPiJV2n%2BZYMglzinZCtzbLrqYCoHZwzr2gvsqnprYwAhGvuMc9KDAZ%2F4D0DZsNINY2b052g1tcvopcP1C0cE7DXjgxZrHCOoSKvNRz45QMUnTs0NwxaRBvaTbCOE0aNZz%2FMmBpLbjnf1b9bQBTupr7Fic2Zju2h52p%2BdI3axIVooKFwg%2BNBbnjgCy6XtPTzMLfLy8QGOqUB4Zh6JpaubFcN5BfMZXhEtk6LUsWT8pV5I2yh%2FHPIjIjUZZdpJ5VjbPXkmYiVCDff6XPL8tMiDN2VsQr4mgjGkegZliyt82WAOiL8AGWCgNIf53VuAgnZFOeP8C3hbh8%2BgXtYZdOvPg1gxRBEKEsIi2fNKcWMp9jjVOGtwhDgrAf3io833i7OxtlOlw6E1g9V4bnZcdYaQj%2Fiy1kxP7dKGtKR0RMy&X-Amz-Signature=c977670225ace3f45c14a68e6857cfc90c958cd40280b180493d7c4f06dcbf02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4M4HY5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEg0ffGSfX53N60ckczshIUnauxl8b9a9Whs%2BE8HEMD5AiEAm7fEqUPGNCriQLrqqcNoKuxGmGHnon2rAMbNeGsQfEcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHXBgErBH%2FgcIIWqiircA%2Fp82NJGyBfQWw3xSo9919oGqlV9OXc%2Flg%2B6Er6vzAWo5ymI2ctzOMiN3fZFRfYQG7dVrzv25dt56O9cl16zdiLpr%2BnRLf290OHdpfAey6vCM0yzCsGxYrOnLPNru8J9sv9Mx0SixpslN%2BW0VmugNBkfat6uephX23UFcG%2FLIeSJiqZmWPR7E7rHElSYsyN9PhdfuQJ%2B8fum0HZGzxMwAa36qjKyTosLB%2BiiMoJGDJYkF9T779aDZ5KrSxwQNSCMf9hY3SDr0UwbAbR1TNWXT278c3MsMDcvMusmGG9mj%2BrbEUZ1mwAtk26H0xbpdYOVu9COfPQq1YISRO4QTz2Qb7huSVgKvUHXdyTN4y2MDpn8C0n%2B1X7E5NI%2Br55QMhGzvfnvJpjN6hRJiEmxnwpxKEfM8pKjAW6La15wtclfdeV4D2cA7myRyrS25m52fNPiJV2n%2BZYMglzinZCtzbLrqYCoHZwzr2gvsqnprYwAhGvuMc9KDAZ%2F4D0DZsNINY2b052g1tcvopcP1C0cE7DXjgxZrHCOoSKvNRz45QMUnTs0NwxaRBvaTbCOE0aNZz%2FMmBpLbjnf1b9bQBTupr7Fic2Zju2h52p%2BdI3axIVooKFwg%2BNBbnjgCy6XtPTzMLfLy8QGOqUB4Zh6JpaubFcN5BfMZXhEtk6LUsWT8pV5I2yh%2FHPIjIjUZZdpJ5VjbPXkmYiVCDff6XPL8tMiDN2VsQr4mgjGkegZliyt82WAOiL8AGWCgNIf53VuAgnZFOeP8C3hbh8%2BgXtYZdOvPg1gxRBEKEsIi2fNKcWMp9jjVOGtwhDgrAf3io833i7OxtlOlw6E1g9V4bnZcdYaQj%2Fiy1kxP7dKGtKR0RMy&X-Amz-Signature=657cc0122704c135cfb49e072fe0312c947894272e2019034c5fe05e28ce9034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4M4HY5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEg0ffGSfX53N60ckczshIUnauxl8b9a9Whs%2BE8HEMD5AiEAm7fEqUPGNCriQLrqqcNoKuxGmGHnon2rAMbNeGsQfEcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHXBgErBH%2FgcIIWqiircA%2Fp82NJGyBfQWw3xSo9919oGqlV9OXc%2Flg%2B6Er6vzAWo5ymI2ctzOMiN3fZFRfYQG7dVrzv25dt56O9cl16zdiLpr%2BnRLf290OHdpfAey6vCM0yzCsGxYrOnLPNru8J9sv9Mx0SixpslN%2BW0VmugNBkfat6uephX23UFcG%2FLIeSJiqZmWPR7E7rHElSYsyN9PhdfuQJ%2B8fum0HZGzxMwAa36qjKyTosLB%2BiiMoJGDJYkF9T779aDZ5KrSxwQNSCMf9hY3SDr0UwbAbR1TNWXT278c3MsMDcvMusmGG9mj%2BrbEUZ1mwAtk26H0xbpdYOVu9COfPQq1YISRO4QTz2Qb7huSVgKvUHXdyTN4y2MDpn8C0n%2B1X7E5NI%2Br55QMhGzvfnvJpjN6hRJiEmxnwpxKEfM8pKjAW6La15wtclfdeV4D2cA7myRyrS25m52fNPiJV2n%2BZYMglzinZCtzbLrqYCoHZwzr2gvsqnprYwAhGvuMc9KDAZ%2F4D0DZsNINY2b052g1tcvopcP1C0cE7DXjgxZrHCOoSKvNRz45QMUnTs0NwxaRBvaTbCOE0aNZz%2FMmBpLbjnf1b9bQBTupr7Fic2Zju2h52p%2BdI3axIVooKFwg%2BNBbnjgCy6XtPTzMLfLy8QGOqUB4Zh6JpaubFcN5BfMZXhEtk6LUsWT8pV5I2yh%2FHPIjIjUZZdpJ5VjbPXkmYiVCDff6XPL8tMiDN2VsQr4mgjGkegZliyt82WAOiL8AGWCgNIf53VuAgnZFOeP8C3hbh8%2BgXtYZdOvPg1gxRBEKEsIi2fNKcWMp9jjVOGtwhDgrAf3io833i7OxtlOlw6E1g9V4bnZcdYaQj%2Fiy1kxP7dKGtKR0RMy&X-Amz-Signature=cfb6fa600e70d1588838f1e761acfd878af63097904297588de0885c747a29bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4M4HY5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEg0ffGSfX53N60ckczshIUnauxl8b9a9Whs%2BE8HEMD5AiEAm7fEqUPGNCriQLrqqcNoKuxGmGHnon2rAMbNeGsQfEcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHXBgErBH%2FgcIIWqiircA%2Fp82NJGyBfQWw3xSo9919oGqlV9OXc%2Flg%2B6Er6vzAWo5ymI2ctzOMiN3fZFRfYQG7dVrzv25dt56O9cl16zdiLpr%2BnRLf290OHdpfAey6vCM0yzCsGxYrOnLPNru8J9sv9Mx0SixpslN%2BW0VmugNBkfat6uephX23UFcG%2FLIeSJiqZmWPR7E7rHElSYsyN9PhdfuQJ%2B8fum0HZGzxMwAa36qjKyTosLB%2BiiMoJGDJYkF9T779aDZ5KrSxwQNSCMf9hY3SDr0UwbAbR1TNWXT278c3MsMDcvMusmGG9mj%2BrbEUZ1mwAtk26H0xbpdYOVu9COfPQq1YISRO4QTz2Qb7huSVgKvUHXdyTN4y2MDpn8C0n%2B1X7E5NI%2Br55QMhGzvfnvJpjN6hRJiEmxnwpxKEfM8pKjAW6La15wtclfdeV4D2cA7myRyrS25m52fNPiJV2n%2BZYMglzinZCtzbLrqYCoHZwzr2gvsqnprYwAhGvuMc9KDAZ%2F4D0DZsNINY2b052g1tcvopcP1C0cE7DXjgxZrHCOoSKvNRz45QMUnTs0NwxaRBvaTbCOE0aNZz%2FMmBpLbjnf1b9bQBTupr7Fic2Zju2h52p%2BdI3axIVooKFwg%2BNBbnjgCy6XtPTzMLfLy8QGOqUB4Zh6JpaubFcN5BfMZXhEtk6LUsWT8pV5I2yh%2FHPIjIjUZZdpJ5VjbPXkmYiVCDff6XPL8tMiDN2VsQr4mgjGkegZliyt82WAOiL8AGWCgNIf53VuAgnZFOeP8C3hbh8%2BgXtYZdOvPg1gxRBEKEsIi2fNKcWMp9jjVOGtwhDgrAf3io833i7OxtlOlw6E1g9V4bnZcdYaQj%2Fiy1kxP7dKGtKR0RMy&X-Amz-Signature=1458bdaf25ad5345e83809e35e426695d07af1c831e96e77a4b49ca0a4f1a16e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4M4HY5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEg0ffGSfX53N60ckczshIUnauxl8b9a9Whs%2BE8HEMD5AiEAm7fEqUPGNCriQLrqqcNoKuxGmGHnon2rAMbNeGsQfEcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHXBgErBH%2FgcIIWqiircA%2Fp82NJGyBfQWw3xSo9919oGqlV9OXc%2Flg%2B6Er6vzAWo5ymI2ctzOMiN3fZFRfYQG7dVrzv25dt56O9cl16zdiLpr%2BnRLf290OHdpfAey6vCM0yzCsGxYrOnLPNru8J9sv9Mx0SixpslN%2BW0VmugNBkfat6uephX23UFcG%2FLIeSJiqZmWPR7E7rHElSYsyN9PhdfuQJ%2B8fum0HZGzxMwAa36qjKyTosLB%2BiiMoJGDJYkF9T779aDZ5KrSxwQNSCMf9hY3SDr0UwbAbR1TNWXT278c3MsMDcvMusmGG9mj%2BrbEUZ1mwAtk26H0xbpdYOVu9COfPQq1YISRO4QTz2Qb7huSVgKvUHXdyTN4y2MDpn8C0n%2B1X7E5NI%2Br55QMhGzvfnvJpjN6hRJiEmxnwpxKEfM8pKjAW6La15wtclfdeV4D2cA7myRyrS25m52fNPiJV2n%2BZYMglzinZCtzbLrqYCoHZwzr2gvsqnprYwAhGvuMc9KDAZ%2F4D0DZsNINY2b052g1tcvopcP1C0cE7DXjgxZrHCOoSKvNRz45QMUnTs0NwxaRBvaTbCOE0aNZz%2FMmBpLbjnf1b9bQBTupr7Fic2Zju2h52p%2BdI3axIVooKFwg%2BNBbnjgCy6XtPTzMLfLy8QGOqUB4Zh6JpaubFcN5BfMZXhEtk6LUsWT8pV5I2yh%2FHPIjIjUZZdpJ5VjbPXkmYiVCDff6XPL8tMiDN2VsQr4mgjGkegZliyt82WAOiL8AGWCgNIf53VuAgnZFOeP8C3hbh8%2BgXtYZdOvPg1gxRBEKEsIi2fNKcWMp9jjVOGtwhDgrAf3io833i7OxtlOlw6E1g9V4bnZcdYaQj%2Fiy1kxP7dKGtKR0RMy&X-Amz-Signature=73a8beb9a46865195a50f2928e3a376b66fb38e1d1e9a67e4fb6649f582f9c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4M4HY5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEg0ffGSfX53N60ckczshIUnauxl8b9a9Whs%2BE8HEMD5AiEAm7fEqUPGNCriQLrqqcNoKuxGmGHnon2rAMbNeGsQfEcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHXBgErBH%2FgcIIWqiircA%2Fp82NJGyBfQWw3xSo9919oGqlV9OXc%2Flg%2B6Er6vzAWo5ymI2ctzOMiN3fZFRfYQG7dVrzv25dt56O9cl16zdiLpr%2BnRLf290OHdpfAey6vCM0yzCsGxYrOnLPNru8J9sv9Mx0SixpslN%2BW0VmugNBkfat6uephX23UFcG%2FLIeSJiqZmWPR7E7rHElSYsyN9PhdfuQJ%2B8fum0HZGzxMwAa36qjKyTosLB%2BiiMoJGDJYkF9T779aDZ5KrSxwQNSCMf9hY3SDr0UwbAbR1TNWXT278c3MsMDcvMusmGG9mj%2BrbEUZ1mwAtk26H0xbpdYOVu9COfPQq1YISRO4QTz2Qb7huSVgKvUHXdyTN4y2MDpn8C0n%2B1X7E5NI%2Br55QMhGzvfnvJpjN6hRJiEmxnwpxKEfM8pKjAW6La15wtclfdeV4D2cA7myRyrS25m52fNPiJV2n%2BZYMglzinZCtzbLrqYCoHZwzr2gvsqnprYwAhGvuMc9KDAZ%2F4D0DZsNINY2b052g1tcvopcP1C0cE7DXjgxZrHCOoSKvNRz45QMUnTs0NwxaRBvaTbCOE0aNZz%2FMmBpLbjnf1b9bQBTupr7Fic2Zju2h52p%2BdI3axIVooKFwg%2BNBbnjgCy6XtPTzMLfLy8QGOqUB4Zh6JpaubFcN5BfMZXhEtk6LUsWT8pV5I2yh%2FHPIjIjUZZdpJ5VjbPXkmYiVCDff6XPL8tMiDN2VsQr4mgjGkegZliyt82WAOiL8AGWCgNIf53VuAgnZFOeP8C3hbh8%2BgXtYZdOvPg1gxRBEKEsIi2fNKcWMp9jjVOGtwhDgrAf3io833i7OxtlOlw6E1g9V4bnZcdYaQj%2Fiy1kxP7dKGtKR0RMy&X-Amz-Signature=9473071bc714a48f11c41684da2b571c5b77a4f8a31f262e0e7f8ad4db2271f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4M4HY5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEg0ffGSfX53N60ckczshIUnauxl8b9a9Whs%2BE8HEMD5AiEAm7fEqUPGNCriQLrqqcNoKuxGmGHnon2rAMbNeGsQfEcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHXBgErBH%2FgcIIWqiircA%2Fp82NJGyBfQWw3xSo9919oGqlV9OXc%2Flg%2B6Er6vzAWo5ymI2ctzOMiN3fZFRfYQG7dVrzv25dt56O9cl16zdiLpr%2BnRLf290OHdpfAey6vCM0yzCsGxYrOnLPNru8J9sv9Mx0SixpslN%2BW0VmugNBkfat6uephX23UFcG%2FLIeSJiqZmWPR7E7rHElSYsyN9PhdfuQJ%2B8fum0HZGzxMwAa36qjKyTosLB%2BiiMoJGDJYkF9T779aDZ5KrSxwQNSCMf9hY3SDr0UwbAbR1TNWXT278c3MsMDcvMusmGG9mj%2BrbEUZ1mwAtk26H0xbpdYOVu9COfPQq1YISRO4QTz2Qb7huSVgKvUHXdyTN4y2MDpn8C0n%2B1X7E5NI%2Br55QMhGzvfnvJpjN6hRJiEmxnwpxKEfM8pKjAW6La15wtclfdeV4D2cA7myRyrS25m52fNPiJV2n%2BZYMglzinZCtzbLrqYCoHZwzr2gvsqnprYwAhGvuMc9KDAZ%2F4D0DZsNINY2b052g1tcvopcP1C0cE7DXjgxZrHCOoSKvNRz45QMUnTs0NwxaRBvaTbCOE0aNZz%2FMmBpLbjnf1b9bQBTupr7Fic2Zju2h52p%2BdI3axIVooKFwg%2BNBbnjgCy6XtPTzMLfLy8QGOqUB4Zh6JpaubFcN5BfMZXhEtk6LUsWT8pV5I2yh%2FHPIjIjUZZdpJ5VjbPXkmYiVCDff6XPL8tMiDN2VsQr4mgjGkegZliyt82WAOiL8AGWCgNIf53VuAgnZFOeP8C3hbh8%2BgXtYZdOvPg1gxRBEKEsIi2fNKcWMp9jjVOGtwhDgrAf3io833i7OxtlOlw6E1g9V4bnZcdYaQj%2Fiy1kxP7dKGtKR0RMy&X-Amz-Signature=2154207a91475261c57691aa57efbf0b2bb68b6d76ff38d5f76fb7b482363dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4M4HY5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEg0ffGSfX53N60ckczshIUnauxl8b9a9Whs%2BE8HEMD5AiEAm7fEqUPGNCriQLrqqcNoKuxGmGHnon2rAMbNeGsQfEcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHXBgErBH%2FgcIIWqiircA%2Fp82NJGyBfQWw3xSo9919oGqlV9OXc%2Flg%2B6Er6vzAWo5ymI2ctzOMiN3fZFRfYQG7dVrzv25dt56O9cl16zdiLpr%2BnRLf290OHdpfAey6vCM0yzCsGxYrOnLPNru8J9sv9Mx0SixpslN%2BW0VmugNBkfat6uephX23UFcG%2FLIeSJiqZmWPR7E7rHElSYsyN9PhdfuQJ%2B8fum0HZGzxMwAa36qjKyTosLB%2BiiMoJGDJYkF9T779aDZ5KrSxwQNSCMf9hY3SDr0UwbAbR1TNWXT278c3MsMDcvMusmGG9mj%2BrbEUZ1mwAtk26H0xbpdYOVu9COfPQq1YISRO4QTz2Qb7huSVgKvUHXdyTN4y2MDpn8C0n%2B1X7E5NI%2Br55QMhGzvfnvJpjN6hRJiEmxnwpxKEfM8pKjAW6La15wtclfdeV4D2cA7myRyrS25m52fNPiJV2n%2BZYMglzinZCtzbLrqYCoHZwzr2gvsqnprYwAhGvuMc9KDAZ%2F4D0DZsNINY2b052g1tcvopcP1C0cE7DXjgxZrHCOoSKvNRz45QMUnTs0NwxaRBvaTbCOE0aNZz%2FMmBpLbjnf1b9bQBTupr7Fic2Zju2h52p%2BdI3axIVooKFwg%2BNBbnjgCy6XtPTzMLfLy8QGOqUB4Zh6JpaubFcN5BfMZXhEtk6LUsWT8pV5I2yh%2FHPIjIjUZZdpJ5VjbPXkmYiVCDff6XPL8tMiDN2VsQr4mgjGkegZliyt82WAOiL8AGWCgNIf53VuAgnZFOeP8C3hbh8%2BgXtYZdOvPg1gxRBEKEsIi2fNKcWMp9jjVOGtwhDgrAf3io833i7OxtlOlw6E1g9V4bnZcdYaQj%2Fiy1kxP7dKGtKR0RMy&X-Amz-Signature=2f7d5ba6cf2fffb530cd5e5c8b84827d972e504f700f3844eb2dc7a97aa0b233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4M4HY5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEg0ffGSfX53N60ckczshIUnauxl8b9a9Whs%2BE8HEMD5AiEAm7fEqUPGNCriQLrqqcNoKuxGmGHnon2rAMbNeGsQfEcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHXBgErBH%2FgcIIWqiircA%2Fp82NJGyBfQWw3xSo9919oGqlV9OXc%2Flg%2B6Er6vzAWo5ymI2ctzOMiN3fZFRfYQG7dVrzv25dt56O9cl16zdiLpr%2BnRLf290OHdpfAey6vCM0yzCsGxYrOnLPNru8J9sv9Mx0SixpslN%2BW0VmugNBkfat6uephX23UFcG%2FLIeSJiqZmWPR7E7rHElSYsyN9PhdfuQJ%2B8fum0HZGzxMwAa36qjKyTosLB%2BiiMoJGDJYkF9T779aDZ5KrSxwQNSCMf9hY3SDr0UwbAbR1TNWXT278c3MsMDcvMusmGG9mj%2BrbEUZ1mwAtk26H0xbpdYOVu9COfPQq1YISRO4QTz2Qb7huSVgKvUHXdyTN4y2MDpn8C0n%2B1X7E5NI%2Br55QMhGzvfnvJpjN6hRJiEmxnwpxKEfM8pKjAW6La15wtclfdeV4D2cA7myRyrS25m52fNPiJV2n%2BZYMglzinZCtzbLrqYCoHZwzr2gvsqnprYwAhGvuMc9KDAZ%2F4D0DZsNINY2b052g1tcvopcP1C0cE7DXjgxZrHCOoSKvNRz45QMUnTs0NwxaRBvaTbCOE0aNZz%2FMmBpLbjnf1b9bQBTupr7Fic2Zju2h52p%2BdI3axIVooKFwg%2BNBbnjgCy6XtPTzMLfLy8QGOqUB4Zh6JpaubFcN5BfMZXhEtk6LUsWT8pV5I2yh%2FHPIjIjUZZdpJ5VjbPXkmYiVCDff6XPL8tMiDN2VsQr4mgjGkegZliyt82WAOiL8AGWCgNIf53VuAgnZFOeP8C3hbh8%2BgXtYZdOvPg1gxRBEKEsIi2fNKcWMp9jjVOGtwhDgrAf3io833i7OxtlOlw6E1g9V4bnZcdYaQj%2Fiy1kxP7dKGtKR0RMy&X-Amz-Signature=b67317e3d5da2eeb5ec5e0ec0b620ab577c4c1942bab684f7e81ef114f09fc8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4M4HY5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEg0ffGSfX53N60ckczshIUnauxl8b9a9Whs%2BE8HEMD5AiEAm7fEqUPGNCriQLrqqcNoKuxGmGHnon2rAMbNeGsQfEcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHXBgErBH%2FgcIIWqiircA%2Fp82NJGyBfQWw3xSo9919oGqlV9OXc%2Flg%2B6Er6vzAWo5ymI2ctzOMiN3fZFRfYQG7dVrzv25dt56O9cl16zdiLpr%2BnRLf290OHdpfAey6vCM0yzCsGxYrOnLPNru8J9sv9Mx0SixpslN%2BW0VmugNBkfat6uephX23UFcG%2FLIeSJiqZmWPR7E7rHElSYsyN9PhdfuQJ%2B8fum0HZGzxMwAa36qjKyTosLB%2BiiMoJGDJYkF9T779aDZ5KrSxwQNSCMf9hY3SDr0UwbAbR1TNWXT278c3MsMDcvMusmGG9mj%2BrbEUZ1mwAtk26H0xbpdYOVu9COfPQq1YISRO4QTz2Qb7huSVgKvUHXdyTN4y2MDpn8C0n%2B1X7E5NI%2Br55QMhGzvfnvJpjN6hRJiEmxnwpxKEfM8pKjAW6La15wtclfdeV4D2cA7myRyrS25m52fNPiJV2n%2BZYMglzinZCtzbLrqYCoHZwzr2gvsqnprYwAhGvuMc9KDAZ%2F4D0DZsNINY2b052g1tcvopcP1C0cE7DXjgxZrHCOoSKvNRz45QMUnTs0NwxaRBvaTbCOE0aNZz%2FMmBpLbjnf1b9bQBTupr7Fic2Zju2h52p%2BdI3axIVooKFwg%2BNBbnjgCy6XtPTzMLfLy8QGOqUB4Zh6JpaubFcN5BfMZXhEtk6LUsWT8pV5I2yh%2FHPIjIjUZZdpJ5VjbPXkmYiVCDff6XPL8tMiDN2VsQr4mgjGkegZliyt82WAOiL8AGWCgNIf53VuAgnZFOeP8C3hbh8%2BgXtYZdOvPg1gxRBEKEsIi2fNKcWMp9jjVOGtwhDgrAf3io833i7OxtlOlw6E1g9V4bnZcdYaQj%2Fiy1kxP7dKGtKR0RMy&X-Amz-Signature=d9f76608ce2da8d5a8991b7edf029209ddc21b7c31a5cc83e98413727471088d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXDND4WH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCLHB%2FqlBdgwLKlsS1rWJ21H2ZVwllCCkOEN7zlZXb4VQIgewwPLQTgh1SMrfVXrc4WGo18TztnxfmOwhqbhOvvXYIq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBqhvsYXQusCXG9JYSrcA%2FonUPzD%2B6HnGdRRgpecNoYwDSNbfjiGlKoHg8pZMRXBO1DOD2rsAybWkIGCeTscq5gbSzBjhCCanimGJ7A%2FsijyH1qQZe9vFFRWClFeqcd%2Fqq4XwSDN8b8JdsMSyi6RToZoCOJAjPSi6rNP7uEgg%2BOHeHMDuOloIAAbhg0oXCxej%2F3A3IcluS2Rn1Wt4%2FpzTxe4T2jtxGrPK7xvDwRWOLNAyRo1g7X5mEJavfAHjloXpO0ggxjC%2FhKz0PcEES8m%2FtjMfUf8BfdXa0U56WZLUc7drJz6Fyw6PFhkL3HlAZy088rwb2xTgmLWg7khUwvo9DrCLAtUea6i6dK80Z4IVfXVhjstM4hDUQ2lIX4Oxr2DWKI%2FkvdqPoIQbf3aHez9MHnzjbWxuc%2FH55XdCHut8WF%2BdHUVW0UriyhRuQ6qkAcF9TIa2CNwHlNEcGkjVwcBRgxDzXR427%2FW%2BldqRuAC8XIdNZCyLRHODVOyEkw4l7QMhuSUvOF6Z4oOLP8O0NqAgKSSFSSn324Lg%2FmCPw68wMymlywzYyYZTCEFH0W%2FGlXRXeNGV84Q1Ohb9Wag%2FsJ4Q3z1SflNB8gjJE4ODHedShafPnnimzuLfNfspeknalNrtBgk2wYLvof3brkgMKDLy8QGOqUBe%2BmQV6JqYx9eHApSTLw%2ByGhv4bD8ekZiNwaYiokBUHFCuSLaM9wHAaFbVZTeihu2N4P75uKd25TNWuoiL6DVOTCcDohK%2BQs8AotZ4rTKnkr%2B9kb2sXgFxN5ZOZs0Kh8Mi%2FbkUzVCBPE%2B%2BLSe0ldNjO105nuOyTT8zMR1Re%2BCT8v2wh0dnmKVQ%2FIUlXkro%2FH9zOPdXZVwM810aX%2BKtVLy7d7m9zzh&X-Amz-Signature=33da76276213ad6a4c86c88aef73c1d7d9300d6558eea283562e24f531d55467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WTM4EJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEwlHFmjFf8XoSLeQ5V3Uj8rSkNHw3Up7msMoW%2B0YcZiAiEAxzwe5E3cCcvBE71laQbMYNSGqZlQNkJ0Lu4rcfwfHEwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDF1JlYm5Fkcfm25dICrcAyueK6KIEZBaoMthE64ppFjPF7Z2gz0MlnpLCHplI4Sy9V%2FkoJAX1SaIE2ce5mka4b6CMbv%2BftKuAF%2F1dpYiIYJehXwSS09yGqriCyaO24REmdSKG2uMzk%2Bl9ZQ4JqkK0XZjoIjkC8o5yA%2Fr7E0I7tnzdBr8sCPi%2Fuidw%2BBKsnB7YZQJvwcIuIP%2Btj6SQ8JsWpp00lpP%2Bvfh7LqloZkiLctqSPPPAxGofFzSWfxK4CVyzxF4wwrq3N8DVKMEzvYyiGknqenwih%2FQdBvZQC5GfEfgL08aLSyrEJ1Nye%2FnzLQwD5z6ARbN9c3TyqrekORP4oO0cJGK31pv9B%2BWe%2BXlOTHnLzXDlDNu4DUvdM%2B49u6MHHw3HAvIzSm4G%2F9MNKi6pLl9vHM97AihR77%2FMZstL0T6RvT7xyKfNKlkzPu3id9oKb5X50h7YU5A9gv8fMy6P%2FVEEGEi3RMnO78QRkSe%2BDEhicn1fDxSno%2BeAZYpng8VYNe5C86rK4Y4WMF1sZZY26Ck1P2V14NFd6exs%2BP3QfHk4fxA6kWzX3XnO4K5ZR3tJJ9idkq02S524eP9WoUfD5HhNM7Sg132CzM621lav4BOgVjw4A%2BOVzvTp6CmHufPZMq8QkBUPP5FGnNUMLLLy8QGOqUB%2FP3O63T2l3TUpHiEEc2PQo6i7TsiyQVO2hK8qXrXQdnhTMGQwsqOBwemCwAetMa%2FDod2GFAKsLzXe7hAjwWZisDNrglhFyONhwuT5pOBUkk9iasza%2BQJl5dWYSpb%2BiNaYNB%2BN6g6RGWhXYs66YNeDZpAUTlf65K8WvVOER58IG6%2F7FbvT1kO4CcOj9SulnjwikxQzo1tQ8W3JeA1P7tFlC4rjDFR&X-Amz-Signature=412aace859ba0ce107970c8247298738f1e6af2d17c949eef1e26498fcd39b92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WTM4EJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEwlHFmjFf8XoSLeQ5V3Uj8rSkNHw3Up7msMoW%2B0YcZiAiEAxzwe5E3cCcvBE71laQbMYNSGqZlQNkJ0Lu4rcfwfHEwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDF1JlYm5Fkcfm25dICrcAyueK6KIEZBaoMthE64ppFjPF7Z2gz0MlnpLCHplI4Sy9V%2FkoJAX1SaIE2ce5mka4b6CMbv%2BftKuAF%2F1dpYiIYJehXwSS09yGqriCyaO24REmdSKG2uMzk%2Bl9ZQ4JqkK0XZjoIjkC8o5yA%2Fr7E0I7tnzdBr8sCPi%2Fuidw%2BBKsnB7YZQJvwcIuIP%2Btj6SQ8JsWpp00lpP%2Bvfh7LqloZkiLctqSPPPAxGofFzSWfxK4CVyzxF4wwrq3N8DVKMEzvYyiGknqenwih%2FQdBvZQC5GfEfgL08aLSyrEJ1Nye%2FnzLQwD5z6ARbN9c3TyqrekORP4oO0cJGK31pv9B%2BWe%2BXlOTHnLzXDlDNu4DUvdM%2B49u6MHHw3HAvIzSm4G%2F9MNKi6pLl9vHM97AihR77%2FMZstL0T6RvT7xyKfNKlkzPu3id9oKb5X50h7YU5A9gv8fMy6P%2FVEEGEi3RMnO78QRkSe%2BDEhicn1fDxSno%2BeAZYpng8VYNe5C86rK4Y4WMF1sZZY26Ck1P2V14NFd6exs%2BP3QfHk4fxA6kWzX3XnO4K5ZR3tJJ9idkq02S524eP9WoUfD5HhNM7Sg132CzM621lav4BOgVjw4A%2BOVzvTp6CmHufPZMq8QkBUPP5FGnNUMLLLy8QGOqUB%2FP3O63T2l3TUpHiEEc2PQo6i7TsiyQVO2hK8qXrXQdnhTMGQwsqOBwemCwAetMa%2FDod2GFAKsLzXe7hAjwWZisDNrglhFyONhwuT5pOBUkk9iasza%2BQJl5dWYSpb%2BiNaYNB%2BN6g6RGWhXYs66YNeDZpAUTlf65K8WvVOER58IG6%2F7FbvT1kO4CcOj9SulnjwikxQzo1tQ8W3JeA1P7tFlC4rjDFR&X-Amz-Signature=675179889340b938d011735bc224f45b8fa41fbadfdd9c76b8c66b30d32bca98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WTM4EJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEwlHFmjFf8XoSLeQ5V3Uj8rSkNHw3Up7msMoW%2B0YcZiAiEAxzwe5E3cCcvBE71laQbMYNSGqZlQNkJ0Lu4rcfwfHEwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDF1JlYm5Fkcfm25dICrcAyueK6KIEZBaoMthE64ppFjPF7Z2gz0MlnpLCHplI4Sy9V%2FkoJAX1SaIE2ce5mka4b6CMbv%2BftKuAF%2F1dpYiIYJehXwSS09yGqriCyaO24REmdSKG2uMzk%2Bl9ZQ4JqkK0XZjoIjkC8o5yA%2Fr7E0I7tnzdBr8sCPi%2Fuidw%2BBKsnB7YZQJvwcIuIP%2Btj6SQ8JsWpp00lpP%2Bvfh7LqloZkiLctqSPPPAxGofFzSWfxK4CVyzxF4wwrq3N8DVKMEzvYyiGknqenwih%2FQdBvZQC5GfEfgL08aLSyrEJ1Nye%2FnzLQwD5z6ARbN9c3TyqrekORP4oO0cJGK31pv9B%2BWe%2BXlOTHnLzXDlDNu4DUvdM%2B49u6MHHw3HAvIzSm4G%2F9MNKi6pLl9vHM97AihR77%2FMZstL0T6RvT7xyKfNKlkzPu3id9oKb5X50h7YU5A9gv8fMy6P%2FVEEGEi3RMnO78QRkSe%2BDEhicn1fDxSno%2BeAZYpng8VYNe5C86rK4Y4WMF1sZZY26Ck1P2V14NFd6exs%2BP3QfHk4fxA6kWzX3XnO4K5ZR3tJJ9idkq02S524eP9WoUfD5HhNM7Sg132CzM621lav4BOgVjw4A%2BOVzvTp6CmHufPZMq8QkBUPP5FGnNUMLLLy8QGOqUB%2FP3O63T2l3TUpHiEEc2PQo6i7TsiyQVO2hK8qXrXQdnhTMGQwsqOBwemCwAetMa%2FDod2GFAKsLzXe7hAjwWZisDNrglhFyONhwuT5pOBUkk9iasza%2BQJl5dWYSpb%2BiNaYNB%2BN6g6RGWhXYs66YNeDZpAUTlf65K8WvVOER58IG6%2F7FbvT1kO4CcOj9SulnjwikxQzo1tQ8W3JeA1P7tFlC4rjDFR&X-Amz-Signature=7e0211642c770bc19a5c93ff4ee662dba489574cd3873f080fe0a9b4fd9a72f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WTM4EJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEwlHFmjFf8XoSLeQ5V3Uj8rSkNHw3Up7msMoW%2B0YcZiAiEAxzwe5E3cCcvBE71laQbMYNSGqZlQNkJ0Lu4rcfwfHEwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDF1JlYm5Fkcfm25dICrcAyueK6KIEZBaoMthE64ppFjPF7Z2gz0MlnpLCHplI4Sy9V%2FkoJAX1SaIE2ce5mka4b6CMbv%2BftKuAF%2F1dpYiIYJehXwSS09yGqriCyaO24REmdSKG2uMzk%2Bl9ZQ4JqkK0XZjoIjkC8o5yA%2Fr7E0I7tnzdBr8sCPi%2Fuidw%2BBKsnB7YZQJvwcIuIP%2Btj6SQ8JsWpp00lpP%2Bvfh7LqloZkiLctqSPPPAxGofFzSWfxK4CVyzxF4wwrq3N8DVKMEzvYyiGknqenwih%2FQdBvZQC5GfEfgL08aLSyrEJ1Nye%2FnzLQwD5z6ARbN9c3TyqrekORP4oO0cJGK31pv9B%2BWe%2BXlOTHnLzXDlDNu4DUvdM%2B49u6MHHw3HAvIzSm4G%2F9MNKi6pLl9vHM97AihR77%2FMZstL0T6RvT7xyKfNKlkzPu3id9oKb5X50h7YU5A9gv8fMy6P%2FVEEGEi3RMnO78QRkSe%2BDEhicn1fDxSno%2BeAZYpng8VYNe5C86rK4Y4WMF1sZZY26Ck1P2V14NFd6exs%2BP3QfHk4fxA6kWzX3XnO4K5ZR3tJJ9idkq02S524eP9WoUfD5HhNM7Sg132CzM621lav4BOgVjw4A%2BOVzvTp6CmHufPZMq8QkBUPP5FGnNUMLLLy8QGOqUB%2FP3O63T2l3TUpHiEEc2PQo6i7TsiyQVO2hK8qXrXQdnhTMGQwsqOBwemCwAetMa%2FDod2GFAKsLzXe7hAjwWZisDNrglhFyONhwuT5pOBUkk9iasza%2BQJl5dWYSpb%2BiNaYNB%2BN6g6RGWhXYs66YNeDZpAUTlf65K8WvVOER58IG6%2F7FbvT1kO4CcOj9SulnjwikxQzo1tQ8W3JeA1P7tFlC4rjDFR&X-Amz-Signature=df77fa4d9954d990d1953cdaec45164420487473dc38505f575d24d392e9e7a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WTM4EJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEwlHFmjFf8XoSLeQ5V3Uj8rSkNHw3Up7msMoW%2B0YcZiAiEAxzwe5E3cCcvBE71laQbMYNSGqZlQNkJ0Lu4rcfwfHEwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDF1JlYm5Fkcfm25dICrcAyueK6KIEZBaoMthE64ppFjPF7Z2gz0MlnpLCHplI4Sy9V%2FkoJAX1SaIE2ce5mka4b6CMbv%2BftKuAF%2F1dpYiIYJehXwSS09yGqriCyaO24REmdSKG2uMzk%2Bl9ZQ4JqkK0XZjoIjkC8o5yA%2Fr7E0I7tnzdBr8sCPi%2Fuidw%2BBKsnB7YZQJvwcIuIP%2Btj6SQ8JsWpp00lpP%2Bvfh7LqloZkiLctqSPPPAxGofFzSWfxK4CVyzxF4wwrq3N8DVKMEzvYyiGknqenwih%2FQdBvZQC5GfEfgL08aLSyrEJ1Nye%2FnzLQwD5z6ARbN9c3TyqrekORP4oO0cJGK31pv9B%2BWe%2BXlOTHnLzXDlDNu4DUvdM%2B49u6MHHw3HAvIzSm4G%2F9MNKi6pLl9vHM97AihR77%2FMZstL0T6RvT7xyKfNKlkzPu3id9oKb5X50h7YU5A9gv8fMy6P%2FVEEGEi3RMnO78QRkSe%2BDEhicn1fDxSno%2BeAZYpng8VYNe5C86rK4Y4WMF1sZZY26Ck1P2V14NFd6exs%2BP3QfHk4fxA6kWzX3XnO4K5ZR3tJJ9idkq02S524eP9WoUfD5HhNM7Sg132CzM621lav4BOgVjw4A%2BOVzvTp6CmHufPZMq8QkBUPP5FGnNUMLLLy8QGOqUB%2FP3O63T2l3TUpHiEEc2PQo6i7TsiyQVO2hK8qXrXQdnhTMGQwsqOBwemCwAetMa%2FDod2GFAKsLzXe7hAjwWZisDNrglhFyONhwuT5pOBUkk9iasza%2BQJl5dWYSpb%2BiNaYNB%2BN6g6RGWhXYs66YNeDZpAUTlf65K8WvVOER58IG6%2F7FbvT1kO4CcOj9SulnjwikxQzo1tQ8W3JeA1P7tFlC4rjDFR&X-Amz-Signature=92e87cc1af554aea9c59b237768f0fef9b97e1a6ab08e2a53a81eae4610438f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WTM4EJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEwlHFmjFf8XoSLeQ5V3Uj8rSkNHw3Up7msMoW%2B0YcZiAiEAxzwe5E3cCcvBE71laQbMYNSGqZlQNkJ0Lu4rcfwfHEwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDF1JlYm5Fkcfm25dICrcAyueK6KIEZBaoMthE64ppFjPF7Z2gz0MlnpLCHplI4Sy9V%2FkoJAX1SaIE2ce5mka4b6CMbv%2BftKuAF%2F1dpYiIYJehXwSS09yGqriCyaO24REmdSKG2uMzk%2Bl9ZQ4JqkK0XZjoIjkC8o5yA%2Fr7E0I7tnzdBr8sCPi%2Fuidw%2BBKsnB7YZQJvwcIuIP%2Btj6SQ8JsWpp00lpP%2Bvfh7LqloZkiLctqSPPPAxGofFzSWfxK4CVyzxF4wwrq3N8DVKMEzvYyiGknqenwih%2FQdBvZQC5GfEfgL08aLSyrEJ1Nye%2FnzLQwD5z6ARbN9c3TyqrekORP4oO0cJGK31pv9B%2BWe%2BXlOTHnLzXDlDNu4DUvdM%2B49u6MHHw3HAvIzSm4G%2F9MNKi6pLl9vHM97AihR77%2FMZstL0T6RvT7xyKfNKlkzPu3id9oKb5X50h7YU5A9gv8fMy6P%2FVEEGEi3RMnO78QRkSe%2BDEhicn1fDxSno%2BeAZYpng8VYNe5C86rK4Y4WMF1sZZY26Ck1P2V14NFd6exs%2BP3QfHk4fxA6kWzX3XnO4K5ZR3tJJ9idkq02S524eP9WoUfD5HhNM7Sg132CzM621lav4BOgVjw4A%2BOVzvTp6CmHufPZMq8QkBUPP5FGnNUMLLLy8QGOqUB%2FP3O63T2l3TUpHiEEc2PQo6i7TsiyQVO2hK8qXrXQdnhTMGQwsqOBwemCwAetMa%2FDod2GFAKsLzXe7hAjwWZisDNrglhFyONhwuT5pOBUkk9iasza%2BQJl5dWYSpb%2BiNaYNB%2BN6g6RGWhXYs66YNeDZpAUTlf65K8WvVOER58IG6%2F7FbvT1kO4CcOj9SulnjwikxQzo1tQ8W3JeA1P7tFlC4rjDFR&X-Amz-Signature=a18312db50e10f3a24e76e3e14171e78911abfa375eb3d783ea32776b5928422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WTM4EJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEwlHFmjFf8XoSLeQ5V3Uj8rSkNHw3Up7msMoW%2B0YcZiAiEAxzwe5E3cCcvBE71laQbMYNSGqZlQNkJ0Lu4rcfwfHEwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDF1JlYm5Fkcfm25dICrcAyueK6KIEZBaoMthE64ppFjPF7Z2gz0MlnpLCHplI4Sy9V%2FkoJAX1SaIE2ce5mka4b6CMbv%2BftKuAF%2F1dpYiIYJehXwSS09yGqriCyaO24REmdSKG2uMzk%2Bl9ZQ4JqkK0XZjoIjkC8o5yA%2Fr7E0I7tnzdBr8sCPi%2Fuidw%2BBKsnB7YZQJvwcIuIP%2Btj6SQ8JsWpp00lpP%2Bvfh7LqloZkiLctqSPPPAxGofFzSWfxK4CVyzxF4wwrq3N8DVKMEzvYyiGknqenwih%2FQdBvZQC5GfEfgL08aLSyrEJ1Nye%2FnzLQwD5z6ARbN9c3TyqrekORP4oO0cJGK31pv9B%2BWe%2BXlOTHnLzXDlDNu4DUvdM%2B49u6MHHw3HAvIzSm4G%2F9MNKi6pLl9vHM97AihR77%2FMZstL0T6RvT7xyKfNKlkzPu3id9oKb5X50h7YU5A9gv8fMy6P%2FVEEGEi3RMnO78QRkSe%2BDEhicn1fDxSno%2BeAZYpng8VYNe5C86rK4Y4WMF1sZZY26Ck1P2V14NFd6exs%2BP3QfHk4fxA6kWzX3XnO4K5ZR3tJJ9idkq02S524eP9WoUfD5HhNM7Sg132CzM621lav4BOgVjw4A%2BOVzvTp6CmHufPZMq8QkBUPP5FGnNUMLLLy8QGOqUB%2FP3O63T2l3TUpHiEEc2PQo6i7TsiyQVO2hK8qXrXQdnhTMGQwsqOBwemCwAetMa%2FDod2GFAKsLzXe7hAjwWZisDNrglhFyONhwuT5pOBUkk9iasza%2BQJl5dWYSpb%2BiNaYNB%2BN6g6RGWhXYs66YNeDZpAUTlf65K8WvVOER58IG6%2F7FbvT1kO4CcOj9SulnjwikxQzo1tQ8W3JeA1P7tFlC4rjDFR&X-Amz-Signature=95ee44919edfede32eb8a62fedcaeaf98c11e00f8e3f3e30eb8e34ee36ba8f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WTM4EJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEwlHFmjFf8XoSLeQ5V3Uj8rSkNHw3Up7msMoW%2B0YcZiAiEAxzwe5E3cCcvBE71laQbMYNSGqZlQNkJ0Lu4rcfwfHEwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDF1JlYm5Fkcfm25dICrcAyueK6KIEZBaoMthE64ppFjPF7Z2gz0MlnpLCHplI4Sy9V%2FkoJAX1SaIE2ce5mka4b6CMbv%2BftKuAF%2F1dpYiIYJehXwSS09yGqriCyaO24REmdSKG2uMzk%2Bl9ZQ4JqkK0XZjoIjkC8o5yA%2Fr7E0I7tnzdBr8sCPi%2Fuidw%2BBKsnB7YZQJvwcIuIP%2Btj6SQ8JsWpp00lpP%2Bvfh7LqloZkiLctqSPPPAxGofFzSWfxK4CVyzxF4wwrq3N8DVKMEzvYyiGknqenwih%2FQdBvZQC5GfEfgL08aLSyrEJ1Nye%2FnzLQwD5z6ARbN9c3TyqrekORP4oO0cJGK31pv9B%2BWe%2BXlOTHnLzXDlDNu4DUvdM%2B49u6MHHw3HAvIzSm4G%2F9MNKi6pLl9vHM97AihR77%2FMZstL0T6RvT7xyKfNKlkzPu3id9oKb5X50h7YU5A9gv8fMy6P%2FVEEGEi3RMnO78QRkSe%2BDEhicn1fDxSno%2BeAZYpng8VYNe5C86rK4Y4WMF1sZZY26Ck1P2V14NFd6exs%2BP3QfHk4fxA6kWzX3XnO4K5ZR3tJJ9idkq02S524eP9WoUfD5HhNM7Sg132CzM621lav4BOgVjw4A%2BOVzvTp6CmHufPZMq8QkBUPP5FGnNUMLLLy8QGOqUB%2FP3O63T2l3TUpHiEEc2PQo6i7TsiyQVO2hK8qXrXQdnhTMGQwsqOBwemCwAetMa%2FDod2GFAKsLzXe7hAjwWZisDNrglhFyONhwuT5pOBUkk9iasza%2BQJl5dWYSpb%2BiNaYNB%2BN6g6RGWhXYs66YNeDZpAUTlf65K8WvVOER58IG6%2F7FbvT1kO4CcOj9SulnjwikxQzo1tQ8W3JeA1P7tFlC4rjDFR&X-Amz-Signature=9603315a97d0084fc5617d80acb81c85ec0c3c1fc01308d3328795e573b77a1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WTM4EJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEwlHFmjFf8XoSLeQ5V3Uj8rSkNHw3Up7msMoW%2B0YcZiAiEAxzwe5E3cCcvBE71laQbMYNSGqZlQNkJ0Lu4rcfwfHEwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDF1JlYm5Fkcfm25dICrcAyueK6KIEZBaoMthE64ppFjPF7Z2gz0MlnpLCHplI4Sy9V%2FkoJAX1SaIE2ce5mka4b6CMbv%2BftKuAF%2F1dpYiIYJehXwSS09yGqriCyaO24REmdSKG2uMzk%2Bl9ZQ4JqkK0XZjoIjkC8o5yA%2Fr7E0I7tnzdBr8sCPi%2Fuidw%2BBKsnB7YZQJvwcIuIP%2Btj6SQ8JsWpp00lpP%2Bvfh7LqloZkiLctqSPPPAxGofFzSWfxK4CVyzxF4wwrq3N8DVKMEzvYyiGknqenwih%2FQdBvZQC5GfEfgL08aLSyrEJ1Nye%2FnzLQwD5z6ARbN9c3TyqrekORP4oO0cJGK31pv9B%2BWe%2BXlOTHnLzXDlDNu4DUvdM%2B49u6MHHw3HAvIzSm4G%2F9MNKi6pLl9vHM97AihR77%2FMZstL0T6RvT7xyKfNKlkzPu3id9oKb5X50h7YU5A9gv8fMy6P%2FVEEGEi3RMnO78QRkSe%2BDEhicn1fDxSno%2BeAZYpng8VYNe5C86rK4Y4WMF1sZZY26Ck1P2V14NFd6exs%2BP3QfHk4fxA6kWzX3XnO4K5ZR3tJJ9idkq02S524eP9WoUfD5HhNM7Sg132CzM621lav4BOgVjw4A%2BOVzvTp6CmHufPZMq8QkBUPP5FGnNUMLLLy8QGOqUB%2FP3O63T2l3TUpHiEEc2PQo6i7TsiyQVO2hK8qXrXQdnhTMGQwsqOBwemCwAetMa%2FDod2GFAKsLzXe7hAjwWZisDNrglhFyONhwuT5pOBUkk9iasza%2BQJl5dWYSpb%2BiNaYNB%2BN6g6RGWhXYs66YNeDZpAUTlf65K8WvVOER58IG6%2F7FbvT1kO4CcOj9SulnjwikxQzo1tQ8W3JeA1P7tFlC4rjDFR&X-Amz-Signature=8bfaa7119e0a0466206d58175ec7fac8b54f8152c4e8682e699a995508f80890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
