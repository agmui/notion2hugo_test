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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVSNGDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGi5JpU%2Bsvsh4ntBe1UYeCgNwYEd4PLXn2aEfUHEPal5AiEAjhnjrrmFI61PBOSw9ezhuYpOnz1q%2B6mMD2EuZ2QlvOsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNbWZ3j9a%2BfGv821RircA93BcSgZC2Y5MunsGSoDGo4bn%2FNPbm16CDl1jmYqHiVhc37c6nbOgoCLOzcunPbNpOi01mgiCh7VBnnjfl%2BN6vcJXnPiFRX7abFU4aeQnxyaW0mnxfcXaVc2akXP%2FMCJ2Xw3sVoYOwEzlY%2BOjq8GLNVP6uyAhxruzunHns5VpUe1gC%2FU4BToLPtlXlkw%2FpmkBD1nIo4ZmZVhi9LicWIRHVHAyLhPD7FzgmsGCmHSlDd5eVmBkyaP9RjMW5c3gIItllbCEKZDLFVRCImup94t%2FSDTRGI8rnnzCtmnG0O4HOrAg%2FPVRDeykW7YpUWvm%2BLH3BAogcRMRgaEIcwsr7VDzCTEg%2BVJ6zGCe0FzWruraoHGWYt%2F3E4TP9JR0yAbanjoFxuzCqXmt4V5%2BqCVTcLzbZ1%2FW8GOPilcRJgnV80NjTjlNqFEWz%2FY1%2BqLshv1fER3NS6LXxEmhWiQIAWIMqSHVroI7dpRcINw8iXOukGCLrQ%2BBwKT9pxX%2BobPhlm4aXvpGgNtqU39mf4zOr2%2BzQ4A6rEFf9GayE1SaIGOA9ZKOVYpEuTPkZUIs%2BPr8ODQMs8SHRcD9Fg%2BSCAyxMqCegROpcA50d%2BuoovdI9mrGttppUsXz8a8PWOLZaWT2hEYMMHj%2F8QGOqUBvDuCniivMAhCYcJ83L1IWw5RiXpJEpr3Iv5mVXd4NQ%2FeRiAW9sECkWLgrbjg54F%2FjicZ%2BPDLES%2FUTH5IB8F2xMhRPPPUte5kGTPWG06sdBMAAFCkUWJYEIGmdV6v99zMyc%2FPNcgxzIgBkUUnT5oPfBbEuoX6asIjZTczVTbJjXxO1RvmPzA8ZffV7WOv1LB8HYM1mIcrpI02iMoUKilZfsy4R%2Fl9&X-Amz-Signature=cb5e7b02cadb6c0d0d939871c069706d0d4626086ab734a77cc7cd023a2a6c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVSNGDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGi5JpU%2Bsvsh4ntBe1UYeCgNwYEd4PLXn2aEfUHEPal5AiEAjhnjrrmFI61PBOSw9ezhuYpOnz1q%2B6mMD2EuZ2QlvOsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNbWZ3j9a%2BfGv821RircA93BcSgZC2Y5MunsGSoDGo4bn%2FNPbm16CDl1jmYqHiVhc37c6nbOgoCLOzcunPbNpOi01mgiCh7VBnnjfl%2BN6vcJXnPiFRX7abFU4aeQnxyaW0mnxfcXaVc2akXP%2FMCJ2Xw3sVoYOwEzlY%2BOjq8GLNVP6uyAhxruzunHns5VpUe1gC%2FU4BToLPtlXlkw%2FpmkBD1nIo4ZmZVhi9LicWIRHVHAyLhPD7FzgmsGCmHSlDd5eVmBkyaP9RjMW5c3gIItllbCEKZDLFVRCImup94t%2FSDTRGI8rnnzCtmnG0O4HOrAg%2FPVRDeykW7YpUWvm%2BLH3BAogcRMRgaEIcwsr7VDzCTEg%2BVJ6zGCe0FzWruraoHGWYt%2F3E4TP9JR0yAbanjoFxuzCqXmt4V5%2BqCVTcLzbZ1%2FW8GOPilcRJgnV80NjTjlNqFEWz%2FY1%2BqLshv1fER3NS6LXxEmhWiQIAWIMqSHVroI7dpRcINw8iXOukGCLrQ%2BBwKT9pxX%2BobPhlm4aXvpGgNtqU39mf4zOr2%2BzQ4A6rEFf9GayE1SaIGOA9ZKOVYpEuTPkZUIs%2BPr8ODQMs8SHRcD9Fg%2BSCAyxMqCegROpcA50d%2BuoovdI9mrGttppUsXz8a8PWOLZaWT2hEYMMHj%2F8QGOqUBvDuCniivMAhCYcJ83L1IWw5RiXpJEpr3Iv5mVXd4NQ%2FeRiAW9sECkWLgrbjg54F%2FjicZ%2BPDLES%2FUTH5IB8F2xMhRPPPUte5kGTPWG06sdBMAAFCkUWJYEIGmdV6v99zMyc%2FPNcgxzIgBkUUnT5oPfBbEuoX6asIjZTczVTbJjXxO1RvmPzA8ZffV7WOv1LB8HYM1mIcrpI02iMoUKilZfsy4R%2Fl9&X-Amz-Signature=cfd3efa2091529ff2ff8f068a4a3b931dd3dce1511bf14ab8d7e679ea25c71d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVSNGDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGi5JpU%2Bsvsh4ntBe1UYeCgNwYEd4PLXn2aEfUHEPal5AiEAjhnjrrmFI61PBOSw9ezhuYpOnz1q%2B6mMD2EuZ2QlvOsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNbWZ3j9a%2BfGv821RircA93BcSgZC2Y5MunsGSoDGo4bn%2FNPbm16CDl1jmYqHiVhc37c6nbOgoCLOzcunPbNpOi01mgiCh7VBnnjfl%2BN6vcJXnPiFRX7abFU4aeQnxyaW0mnxfcXaVc2akXP%2FMCJ2Xw3sVoYOwEzlY%2BOjq8GLNVP6uyAhxruzunHns5VpUe1gC%2FU4BToLPtlXlkw%2FpmkBD1nIo4ZmZVhi9LicWIRHVHAyLhPD7FzgmsGCmHSlDd5eVmBkyaP9RjMW5c3gIItllbCEKZDLFVRCImup94t%2FSDTRGI8rnnzCtmnG0O4HOrAg%2FPVRDeykW7YpUWvm%2BLH3BAogcRMRgaEIcwsr7VDzCTEg%2BVJ6zGCe0FzWruraoHGWYt%2F3E4TP9JR0yAbanjoFxuzCqXmt4V5%2BqCVTcLzbZ1%2FW8GOPilcRJgnV80NjTjlNqFEWz%2FY1%2BqLshv1fER3NS6LXxEmhWiQIAWIMqSHVroI7dpRcINw8iXOukGCLrQ%2BBwKT9pxX%2BobPhlm4aXvpGgNtqU39mf4zOr2%2BzQ4A6rEFf9GayE1SaIGOA9ZKOVYpEuTPkZUIs%2BPr8ODQMs8SHRcD9Fg%2BSCAyxMqCegROpcA50d%2BuoovdI9mrGttppUsXz8a8PWOLZaWT2hEYMMHj%2F8QGOqUBvDuCniivMAhCYcJ83L1IWw5RiXpJEpr3Iv5mVXd4NQ%2FeRiAW9sECkWLgrbjg54F%2FjicZ%2BPDLES%2FUTH5IB8F2xMhRPPPUte5kGTPWG06sdBMAAFCkUWJYEIGmdV6v99zMyc%2FPNcgxzIgBkUUnT5oPfBbEuoX6asIjZTczVTbJjXxO1RvmPzA8ZffV7WOv1LB8HYM1mIcrpI02iMoUKilZfsy4R%2Fl9&X-Amz-Signature=d3b597460fd2c09c97ad974d4019bc02036cf01c8e2ef6dc15f37d55dbb7b98f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVSNGDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGi5JpU%2Bsvsh4ntBe1UYeCgNwYEd4PLXn2aEfUHEPal5AiEAjhnjrrmFI61PBOSw9ezhuYpOnz1q%2B6mMD2EuZ2QlvOsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNbWZ3j9a%2BfGv821RircA93BcSgZC2Y5MunsGSoDGo4bn%2FNPbm16CDl1jmYqHiVhc37c6nbOgoCLOzcunPbNpOi01mgiCh7VBnnjfl%2BN6vcJXnPiFRX7abFU4aeQnxyaW0mnxfcXaVc2akXP%2FMCJ2Xw3sVoYOwEzlY%2BOjq8GLNVP6uyAhxruzunHns5VpUe1gC%2FU4BToLPtlXlkw%2FpmkBD1nIo4ZmZVhi9LicWIRHVHAyLhPD7FzgmsGCmHSlDd5eVmBkyaP9RjMW5c3gIItllbCEKZDLFVRCImup94t%2FSDTRGI8rnnzCtmnG0O4HOrAg%2FPVRDeykW7YpUWvm%2BLH3BAogcRMRgaEIcwsr7VDzCTEg%2BVJ6zGCe0FzWruraoHGWYt%2F3E4TP9JR0yAbanjoFxuzCqXmt4V5%2BqCVTcLzbZ1%2FW8GOPilcRJgnV80NjTjlNqFEWz%2FY1%2BqLshv1fER3NS6LXxEmhWiQIAWIMqSHVroI7dpRcINw8iXOukGCLrQ%2BBwKT9pxX%2BobPhlm4aXvpGgNtqU39mf4zOr2%2BzQ4A6rEFf9GayE1SaIGOA9ZKOVYpEuTPkZUIs%2BPr8ODQMs8SHRcD9Fg%2BSCAyxMqCegROpcA50d%2BuoovdI9mrGttppUsXz8a8PWOLZaWT2hEYMMHj%2F8QGOqUBvDuCniivMAhCYcJ83L1IWw5RiXpJEpr3Iv5mVXd4NQ%2FeRiAW9sECkWLgrbjg54F%2FjicZ%2BPDLES%2FUTH5IB8F2xMhRPPPUte5kGTPWG06sdBMAAFCkUWJYEIGmdV6v99zMyc%2FPNcgxzIgBkUUnT5oPfBbEuoX6asIjZTczVTbJjXxO1RvmPzA8ZffV7WOv1LB8HYM1mIcrpI02iMoUKilZfsy4R%2Fl9&X-Amz-Signature=2a9aef94c425cd4525e4491c5b0990ac170ceb549e83c4508e91e5d39f4b59c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVSNGDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGi5JpU%2Bsvsh4ntBe1UYeCgNwYEd4PLXn2aEfUHEPal5AiEAjhnjrrmFI61PBOSw9ezhuYpOnz1q%2B6mMD2EuZ2QlvOsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNbWZ3j9a%2BfGv821RircA93BcSgZC2Y5MunsGSoDGo4bn%2FNPbm16CDl1jmYqHiVhc37c6nbOgoCLOzcunPbNpOi01mgiCh7VBnnjfl%2BN6vcJXnPiFRX7abFU4aeQnxyaW0mnxfcXaVc2akXP%2FMCJ2Xw3sVoYOwEzlY%2BOjq8GLNVP6uyAhxruzunHns5VpUe1gC%2FU4BToLPtlXlkw%2FpmkBD1nIo4ZmZVhi9LicWIRHVHAyLhPD7FzgmsGCmHSlDd5eVmBkyaP9RjMW5c3gIItllbCEKZDLFVRCImup94t%2FSDTRGI8rnnzCtmnG0O4HOrAg%2FPVRDeykW7YpUWvm%2BLH3BAogcRMRgaEIcwsr7VDzCTEg%2BVJ6zGCe0FzWruraoHGWYt%2F3E4TP9JR0yAbanjoFxuzCqXmt4V5%2BqCVTcLzbZ1%2FW8GOPilcRJgnV80NjTjlNqFEWz%2FY1%2BqLshv1fER3NS6LXxEmhWiQIAWIMqSHVroI7dpRcINw8iXOukGCLrQ%2BBwKT9pxX%2BobPhlm4aXvpGgNtqU39mf4zOr2%2BzQ4A6rEFf9GayE1SaIGOA9ZKOVYpEuTPkZUIs%2BPr8ODQMs8SHRcD9Fg%2BSCAyxMqCegROpcA50d%2BuoovdI9mrGttppUsXz8a8PWOLZaWT2hEYMMHj%2F8QGOqUBvDuCniivMAhCYcJ83L1IWw5RiXpJEpr3Iv5mVXd4NQ%2FeRiAW9sECkWLgrbjg54F%2FjicZ%2BPDLES%2FUTH5IB8F2xMhRPPPUte5kGTPWG06sdBMAAFCkUWJYEIGmdV6v99zMyc%2FPNcgxzIgBkUUnT5oPfBbEuoX6asIjZTczVTbJjXxO1RvmPzA8ZffV7WOv1LB8HYM1mIcrpI02iMoUKilZfsy4R%2Fl9&X-Amz-Signature=80353844165bad837ca9456981fff9ffa07bd457d9b74cd1d9634638f2417718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVSNGDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGi5JpU%2Bsvsh4ntBe1UYeCgNwYEd4PLXn2aEfUHEPal5AiEAjhnjrrmFI61PBOSw9ezhuYpOnz1q%2B6mMD2EuZ2QlvOsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNbWZ3j9a%2BfGv821RircA93BcSgZC2Y5MunsGSoDGo4bn%2FNPbm16CDl1jmYqHiVhc37c6nbOgoCLOzcunPbNpOi01mgiCh7VBnnjfl%2BN6vcJXnPiFRX7abFU4aeQnxyaW0mnxfcXaVc2akXP%2FMCJ2Xw3sVoYOwEzlY%2BOjq8GLNVP6uyAhxruzunHns5VpUe1gC%2FU4BToLPtlXlkw%2FpmkBD1nIo4ZmZVhi9LicWIRHVHAyLhPD7FzgmsGCmHSlDd5eVmBkyaP9RjMW5c3gIItllbCEKZDLFVRCImup94t%2FSDTRGI8rnnzCtmnG0O4HOrAg%2FPVRDeykW7YpUWvm%2BLH3BAogcRMRgaEIcwsr7VDzCTEg%2BVJ6zGCe0FzWruraoHGWYt%2F3E4TP9JR0yAbanjoFxuzCqXmt4V5%2BqCVTcLzbZ1%2FW8GOPilcRJgnV80NjTjlNqFEWz%2FY1%2BqLshv1fER3NS6LXxEmhWiQIAWIMqSHVroI7dpRcINw8iXOukGCLrQ%2BBwKT9pxX%2BobPhlm4aXvpGgNtqU39mf4zOr2%2BzQ4A6rEFf9GayE1SaIGOA9ZKOVYpEuTPkZUIs%2BPr8ODQMs8SHRcD9Fg%2BSCAyxMqCegROpcA50d%2BuoovdI9mrGttppUsXz8a8PWOLZaWT2hEYMMHj%2F8QGOqUBvDuCniivMAhCYcJ83L1IWw5RiXpJEpr3Iv5mVXd4NQ%2FeRiAW9sECkWLgrbjg54F%2FjicZ%2BPDLES%2FUTH5IB8F2xMhRPPPUte5kGTPWG06sdBMAAFCkUWJYEIGmdV6v99zMyc%2FPNcgxzIgBkUUnT5oPfBbEuoX6asIjZTczVTbJjXxO1RvmPzA8ZffV7WOv1LB8HYM1mIcrpI02iMoUKilZfsy4R%2Fl9&X-Amz-Signature=53ae0fb3d200161ce271867f005de162ec6252e8558ba166ca2142e4ce8f4c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVSNGDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGi5JpU%2Bsvsh4ntBe1UYeCgNwYEd4PLXn2aEfUHEPal5AiEAjhnjrrmFI61PBOSw9ezhuYpOnz1q%2B6mMD2EuZ2QlvOsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNbWZ3j9a%2BfGv821RircA93BcSgZC2Y5MunsGSoDGo4bn%2FNPbm16CDl1jmYqHiVhc37c6nbOgoCLOzcunPbNpOi01mgiCh7VBnnjfl%2BN6vcJXnPiFRX7abFU4aeQnxyaW0mnxfcXaVc2akXP%2FMCJ2Xw3sVoYOwEzlY%2BOjq8GLNVP6uyAhxruzunHns5VpUe1gC%2FU4BToLPtlXlkw%2FpmkBD1nIo4ZmZVhi9LicWIRHVHAyLhPD7FzgmsGCmHSlDd5eVmBkyaP9RjMW5c3gIItllbCEKZDLFVRCImup94t%2FSDTRGI8rnnzCtmnG0O4HOrAg%2FPVRDeykW7YpUWvm%2BLH3BAogcRMRgaEIcwsr7VDzCTEg%2BVJ6zGCe0FzWruraoHGWYt%2F3E4TP9JR0yAbanjoFxuzCqXmt4V5%2BqCVTcLzbZ1%2FW8GOPilcRJgnV80NjTjlNqFEWz%2FY1%2BqLshv1fER3NS6LXxEmhWiQIAWIMqSHVroI7dpRcINw8iXOukGCLrQ%2BBwKT9pxX%2BobPhlm4aXvpGgNtqU39mf4zOr2%2BzQ4A6rEFf9GayE1SaIGOA9ZKOVYpEuTPkZUIs%2BPr8ODQMs8SHRcD9Fg%2BSCAyxMqCegROpcA50d%2BuoovdI9mrGttppUsXz8a8PWOLZaWT2hEYMMHj%2F8QGOqUBvDuCniivMAhCYcJ83L1IWw5RiXpJEpr3Iv5mVXd4NQ%2FeRiAW9sECkWLgrbjg54F%2FjicZ%2BPDLES%2FUTH5IB8F2xMhRPPPUte5kGTPWG06sdBMAAFCkUWJYEIGmdV6v99zMyc%2FPNcgxzIgBkUUnT5oPfBbEuoX6asIjZTczVTbJjXxO1RvmPzA8ZffV7WOv1LB8HYM1mIcrpI02iMoUKilZfsy4R%2Fl9&X-Amz-Signature=db9f3cc7e2d3875f271611119718702acb9c844745a69e587d83834e691dd68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVSNGDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGi5JpU%2Bsvsh4ntBe1UYeCgNwYEd4PLXn2aEfUHEPal5AiEAjhnjrrmFI61PBOSw9ezhuYpOnz1q%2B6mMD2EuZ2QlvOsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNbWZ3j9a%2BfGv821RircA93BcSgZC2Y5MunsGSoDGo4bn%2FNPbm16CDl1jmYqHiVhc37c6nbOgoCLOzcunPbNpOi01mgiCh7VBnnjfl%2BN6vcJXnPiFRX7abFU4aeQnxyaW0mnxfcXaVc2akXP%2FMCJ2Xw3sVoYOwEzlY%2BOjq8GLNVP6uyAhxruzunHns5VpUe1gC%2FU4BToLPtlXlkw%2FpmkBD1nIo4ZmZVhi9LicWIRHVHAyLhPD7FzgmsGCmHSlDd5eVmBkyaP9RjMW5c3gIItllbCEKZDLFVRCImup94t%2FSDTRGI8rnnzCtmnG0O4HOrAg%2FPVRDeykW7YpUWvm%2BLH3BAogcRMRgaEIcwsr7VDzCTEg%2BVJ6zGCe0FzWruraoHGWYt%2F3E4TP9JR0yAbanjoFxuzCqXmt4V5%2BqCVTcLzbZ1%2FW8GOPilcRJgnV80NjTjlNqFEWz%2FY1%2BqLshv1fER3NS6LXxEmhWiQIAWIMqSHVroI7dpRcINw8iXOukGCLrQ%2BBwKT9pxX%2BobPhlm4aXvpGgNtqU39mf4zOr2%2BzQ4A6rEFf9GayE1SaIGOA9ZKOVYpEuTPkZUIs%2BPr8ODQMs8SHRcD9Fg%2BSCAyxMqCegROpcA50d%2BuoovdI9mrGttppUsXz8a8PWOLZaWT2hEYMMHj%2F8QGOqUBvDuCniivMAhCYcJ83L1IWw5RiXpJEpr3Iv5mVXd4NQ%2FeRiAW9sECkWLgrbjg54F%2FjicZ%2BPDLES%2FUTH5IB8F2xMhRPPPUte5kGTPWG06sdBMAAFCkUWJYEIGmdV6v99zMyc%2FPNcgxzIgBkUUnT5oPfBbEuoX6asIjZTczVTbJjXxO1RvmPzA8ZffV7WOv1LB8HYM1mIcrpI02iMoUKilZfsy4R%2Fl9&X-Amz-Signature=d72e73bf9ef311f859eedd2ff04adcf5119abaaf7d924ee31357c4a4d3904466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVSNGDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGi5JpU%2Bsvsh4ntBe1UYeCgNwYEd4PLXn2aEfUHEPal5AiEAjhnjrrmFI61PBOSw9ezhuYpOnz1q%2B6mMD2EuZ2QlvOsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNbWZ3j9a%2BfGv821RircA93BcSgZC2Y5MunsGSoDGo4bn%2FNPbm16CDl1jmYqHiVhc37c6nbOgoCLOzcunPbNpOi01mgiCh7VBnnjfl%2BN6vcJXnPiFRX7abFU4aeQnxyaW0mnxfcXaVc2akXP%2FMCJ2Xw3sVoYOwEzlY%2BOjq8GLNVP6uyAhxruzunHns5VpUe1gC%2FU4BToLPtlXlkw%2FpmkBD1nIo4ZmZVhi9LicWIRHVHAyLhPD7FzgmsGCmHSlDd5eVmBkyaP9RjMW5c3gIItllbCEKZDLFVRCImup94t%2FSDTRGI8rnnzCtmnG0O4HOrAg%2FPVRDeykW7YpUWvm%2BLH3BAogcRMRgaEIcwsr7VDzCTEg%2BVJ6zGCe0FzWruraoHGWYt%2F3E4TP9JR0yAbanjoFxuzCqXmt4V5%2BqCVTcLzbZ1%2FW8GOPilcRJgnV80NjTjlNqFEWz%2FY1%2BqLshv1fER3NS6LXxEmhWiQIAWIMqSHVroI7dpRcINw8iXOukGCLrQ%2BBwKT9pxX%2BobPhlm4aXvpGgNtqU39mf4zOr2%2BzQ4A6rEFf9GayE1SaIGOA9ZKOVYpEuTPkZUIs%2BPr8ODQMs8SHRcD9Fg%2BSCAyxMqCegROpcA50d%2BuoovdI9mrGttppUsXz8a8PWOLZaWT2hEYMMHj%2F8QGOqUBvDuCniivMAhCYcJ83L1IWw5RiXpJEpr3Iv5mVXd4NQ%2FeRiAW9sECkWLgrbjg54F%2FjicZ%2BPDLES%2FUTH5IB8F2xMhRPPPUte5kGTPWG06sdBMAAFCkUWJYEIGmdV6v99zMyc%2FPNcgxzIgBkUUnT5oPfBbEuoX6asIjZTczVTbJjXxO1RvmPzA8ZffV7WOv1LB8HYM1mIcrpI02iMoUKilZfsy4R%2Fl9&X-Amz-Signature=79d516edd911d408d2709f6d36115b9e3dde8743991c0596d352546b00f10681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVSNGDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGi5JpU%2Bsvsh4ntBe1UYeCgNwYEd4PLXn2aEfUHEPal5AiEAjhnjrrmFI61PBOSw9ezhuYpOnz1q%2B6mMD2EuZ2QlvOsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNbWZ3j9a%2BfGv821RircA93BcSgZC2Y5MunsGSoDGo4bn%2FNPbm16CDl1jmYqHiVhc37c6nbOgoCLOzcunPbNpOi01mgiCh7VBnnjfl%2BN6vcJXnPiFRX7abFU4aeQnxyaW0mnxfcXaVc2akXP%2FMCJ2Xw3sVoYOwEzlY%2BOjq8GLNVP6uyAhxruzunHns5VpUe1gC%2FU4BToLPtlXlkw%2FpmkBD1nIo4ZmZVhi9LicWIRHVHAyLhPD7FzgmsGCmHSlDd5eVmBkyaP9RjMW5c3gIItllbCEKZDLFVRCImup94t%2FSDTRGI8rnnzCtmnG0O4HOrAg%2FPVRDeykW7YpUWvm%2BLH3BAogcRMRgaEIcwsr7VDzCTEg%2BVJ6zGCe0FzWruraoHGWYt%2F3E4TP9JR0yAbanjoFxuzCqXmt4V5%2BqCVTcLzbZ1%2FW8GOPilcRJgnV80NjTjlNqFEWz%2FY1%2BqLshv1fER3NS6LXxEmhWiQIAWIMqSHVroI7dpRcINw8iXOukGCLrQ%2BBwKT9pxX%2BobPhlm4aXvpGgNtqU39mf4zOr2%2BzQ4A6rEFf9GayE1SaIGOA9ZKOVYpEuTPkZUIs%2BPr8ODQMs8SHRcD9Fg%2BSCAyxMqCegROpcA50d%2BuoovdI9mrGttppUsXz8a8PWOLZaWT2hEYMMHj%2F8QGOqUBvDuCniivMAhCYcJ83L1IWw5RiXpJEpr3Iv5mVXd4NQ%2FeRiAW9sECkWLgrbjg54F%2FjicZ%2BPDLES%2FUTH5IB8F2xMhRPPPUte5kGTPWG06sdBMAAFCkUWJYEIGmdV6v99zMyc%2FPNcgxzIgBkUUnT5oPfBbEuoX6asIjZTczVTbJjXxO1RvmPzA8ZffV7WOv1LB8HYM1mIcrpI02iMoUKilZfsy4R%2Fl9&X-Amz-Signature=da2e61541829f189b320b09ca1e5a5b41ccef91141cf618933318b8a2763efb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOMJT4ZH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICdUFnGgnfKpMAuOn2XpV36oPZqPu2RXyjseDLSdTWsvAiEAq%2F8%2B6oMAbd2ll9taKOb8tN%2Bd7LnCHcjVub0WWwUJQ4Qq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLwCWbZWveH0%2FepThCrcA3lb1HRmmdrnOyOKpg6iacHURVRrrCkTIWssGZrFjRb2jrolfFVywSlB3CLMEznv%2FdjY6gi6XTYDKS%2F9OOKFzrYBOan67egedOekIMIc5Wj57yUZHpdLRG39uknSP6kGqZ3qnvIUoB4jJX3EFi6We2kouFnd3UBsIEiW7kwCpv4zFXPlfUE5adlam6RHSjVD4wmbVm2FkR8MF7Opb9HgC0RVkWr2brGxAHpGc6d5peRCGjJOZl7aRRajHH%2FZjwRsyY7n7Fan6K7WTzTwo8gH1fqq5EQCGxXxOBDL6ZuOJOS7PfOkeY6l8p%2Fw%2Ba%2F4qPFXJYbqpV8SZN7P3qi%2B%2Fs5j2ViN6rg9yvH9p79G5fmLc4tq0ixuiCpxwteI2byPv5Pqsb6kNfd8yDYoVKFH%2F26DFmBmvPypP0QQW5RFtvvpI%2Bm%2F%2BsNMwlJOVUsZKZ4pZGXXjjEmaiPn3aaxV4dfIClcUzvl%2B6QLci3L7%2Fky8KiyLl71ZqBy1z1mmuBeCVi4aSNDtAWDjjPcpw1GAsE1B5jqnDsGCyd1DW%2BtDy4YK%2FCeAX13c6pks52Mg61IBLe5%2FQtBxOc0l7Jr5xvL7%2FPWxK6XvVXrbhtXKaacuRy2nxItVQW9B7d%2FlgDO8VoC4XwoMJ3k%2F8QGOqUBbkCTfAWi6%2BNpKfoyEmnZLvUKdrGH%2BQOGyasVU8qnv6OurJRmKdCDiHT5raAxNZHHTth8MzlP%2B3fI8%2BitpotRZ3A%2Fj%2Fx%2Fzb0Pd7nmiw5AwoJr5EC2hnRpQxP4eJVYliGAG0ABCJ81rwJG2VdAJAYR9kkyATCa3JRCn%2BOJRbFByaBnvOKfl15hT3cjP9gFJYIFAAId08eiL9IAl9UHqlWZqV9zCUSk&X-Amz-Signature=cb4c1c44af788d5e01cbc866cba1e7240270e5e2509ac8d0366b37a119d1162f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVUUO3Z3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCIKhD93HypV%2FfZDZcX4HL%2F4RxYA3sp58rmro9xbNSacAIgLLBHGVNanYIhqZ%2FSMHBW43B71BG93XYveqd%2F7%2FfsiWsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDObBOWFQGE%2B7f1463SrcAyHeHIRjqES5kvHcvDzJRt8Fgh%2F1vJhtZbS25x0iZm653pTJtYmQD7oICP8oVeh5aDXgXg9JT4cA47%2Bz%2FJPhAorndtF%2Bq660765%2Fwgbm6SP6bc6EKTEimkBdQ9qNz21XhZ391FRcskoTtrWkj8I1YdYsgMBKWJoMH1qqvhQyziqegzMGapAhbYPnvzideSd5veXKDNsMTzMOt1IDixLBk8N2neMcSDzJXP6pGGFnu12z%2FhLoiNRzYqi0OjprRZKxrw4AndWEtUjSLkXRYWjAoOhTNSFfkf10GvnrfQLgkx%2FYiDdt9pKTDeCubzAIwRa9Pqejtg0meH7eF%2FAq%2FLl674eHOqacC1ze%2BDj1xh5LOOe8vIujCSsKEV0qpCy%2BW9YqHBmNkUECxXOG49EJjkoAsjd7%2BySQ8Dv2ZEexWDo3vAx3lUYKynBjKMp5d85c3IgcmRtv8Uw69YhHHL5ZXOGdg4QT0mJj2MPAucFgnDCKzS6CD9sU24IlzoHmiAx6YRzNQeqXgcXSsr8kyFJ8gW70jleFv%2FOFT41ts3%2B9fHJH%2FI5n29OFdNI7siz7HbNCaFEZI%2FPZf2UbR8ievy%2BVtbalBlukaAx7up1iwdEDKutern%2FuxRDuT9gJecwoU0%2FdMJLk%2F8QGOqUB5nn4C1UEIxF03upaC3K4oY2c1grfe21H9AM145TM3ayFDOBZxcPd2qTESuMtftDnW9EHe4ZGwidWTjXy4Nqy7zA5oDGmkfz9H8Bigtjs69fDzfD%2B5P3dyjziJ%2BEJdI6OfX8K4LaRnfabLSG3mXE%2Fdk1CjvJ4osyrvKAALD9UPFsSY8Xya8D4VCfOzZdChJu4Hq%2B8jVX149WKwLW8qHYtIXrkisPe&X-Amz-Signature=104fdc94c4f7b07a15d7b16a87a181ef872a3dd5406f4112c45f0ccef9718c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVUUO3Z3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCIKhD93HypV%2FfZDZcX4HL%2F4RxYA3sp58rmro9xbNSacAIgLLBHGVNanYIhqZ%2FSMHBW43B71BG93XYveqd%2F7%2FfsiWsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDObBOWFQGE%2B7f1463SrcAyHeHIRjqES5kvHcvDzJRt8Fgh%2F1vJhtZbS25x0iZm653pTJtYmQD7oICP8oVeh5aDXgXg9JT4cA47%2Bz%2FJPhAorndtF%2Bq660765%2Fwgbm6SP6bc6EKTEimkBdQ9qNz21XhZ391FRcskoTtrWkj8I1YdYsgMBKWJoMH1qqvhQyziqegzMGapAhbYPnvzideSd5veXKDNsMTzMOt1IDixLBk8N2neMcSDzJXP6pGGFnu12z%2FhLoiNRzYqi0OjprRZKxrw4AndWEtUjSLkXRYWjAoOhTNSFfkf10GvnrfQLgkx%2FYiDdt9pKTDeCubzAIwRa9Pqejtg0meH7eF%2FAq%2FLl674eHOqacC1ze%2BDj1xh5LOOe8vIujCSsKEV0qpCy%2BW9YqHBmNkUECxXOG49EJjkoAsjd7%2BySQ8Dv2ZEexWDo3vAx3lUYKynBjKMp5d85c3IgcmRtv8Uw69YhHHL5ZXOGdg4QT0mJj2MPAucFgnDCKzS6CD9sU24IlzoHmiAx6YRzNQeqXgcXSsr8kyFJ8gW70jleFv%2FOFT41ts3%2B9fHJH%2FI5n29OFdNI7siz7HbNCaFEZI%2FPZf2UbR8ievy%2BVtbalBlukaAx7up1iwdEDKutern%2FuxRDuT9gJecwoU0%2FdMJLk%2F8QGOqUB5nn4C1UEIxF03upaC3K4oY2c1grfe21H9AM145TM3ayFDOBZxcPd2qTESuMtftDnW9EHe4ZGwidWTjXy4Nqy7zA5oDGmkfz9H8Bigtjs69fDzfD%2B5P3dyjziJ%2BEJdI6OfX8K4LaRnfabLSG3mXE%2Fdk1CjvJ4osyrvKAALD9UPFsSY8Xya8D4VCfOzZdChJu4Hq%2B8jVX149WKwLW8qHYtIXrkisPe&X-Amz-Signature=39a6d40334e31ab62da9ee9be6499b805a912d0a7e21165dec3074ab5b1a7631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVUUO3Z3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCIKhD93HypV%2FfZDZcX4HL%2F4RxYA3sp58rmro9xbNSacAIgLLBHGVNanYIhqZ%2FSMHBW43B71BG93XYveqd%2F7%2FfsiWsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDObBOWFQGE%2B7f1463SrcAyHeHIRjqES5kvHcvDzJRt8Fgh%2F1vJhtZbS25x0iZm653pTJtYmQD7oICP8oVeh5aDXgXg9JT4cA47%2Bz%2FJPhAorndtF%2Bq660765%2Fwgbm6SP6bc6EKTEimkBdQ9qNz21XhZ391FRcskoTtrWkj8I1YdYsgMBKWJoMH1qqvhQyziqegzMGapAhbYPnvzideSd5veXKDNsMTzMOt1IDixLBk8N2neMcSDzJXP6pGGFnu12z%2FhLoiNRzYqi0OjprRZKxrw4AndWEtUjSLkXRYWjAoOhTNSFfkf10GvnrfQLgkx%2FYiDdt9pKTDeCubzAIwRa9Pqejtg0meH7eF%2FAq%2FLl674eHOqacC1ze%2BDj1xh5LOOe8vIujCSsKEV0qpCy%2BW9YqHBmNkUECxXOG49EJjkoAsjd7%2BySQ8Dv2ZEexWDo3vAx3lUYKynBjKMp5d85c3IgcmRtv8Uw69YhHHL5ZXOGdg4QT0mJj2MPAucFgnDCKzS6CD9sU24IlzoHmiAx6YRzNQeqXgcXSsr8kyFJ8gW70jleFv%2FOFT41ts3%2B9fHJH%2FI5n29OFdNI7siz7HbNCaFEZI%2FPZf2UbR8ievy%2BVtbalBlukaAx7up1iwdEDKutern%2FuxRDuT9gJecwoU0%2FdMJLk%2F8QGOqUB5nn4C1UEIxF03upaC3K4oY2c1grfe21H9AM145TM3ayFDOBZxcPd2qTESuMtftDnW9EHe4ZGwidWTjXy4Nqy7zA5oDGmkfz9H8Bigtjs69fDzfD%2B5P3dyjziJ%2BEJdI6OfX8K4LaRnfabLSG3mXE%2Fdk1CjvJ4osyrvKAALD9UPFsSY8Xya8D4VCfOzZdChJu4Hq%2B8jVX149WKwLW8qHYtIXrkisPe&X-Amz-Signature=fa680461b0a6ec2d56a283ae10a192682da659085de5781f01f713eb3eb0cbc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVUUO3Z3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCIKhD93HypV%2FfZDZcX4HL%2F4RxYA3sp58rmro9xbNSacAIgLLBHGVNanYIhqZ%2FSMHBW43B71BG93XYveqd%2F7%2FfsiWsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDObBOWFQGE%2B7f1463SrcAyHeHIRjqES5kvHcvDzJRt8Fgh%2F1vJhtZbS25x0iZm653pTJtYmQD7oICP8oVeh5aDXgXg9JT4cA47%2Bz%2FJPhAorndtF%2Bq660765%2Fwgbm6SP6bc6EKTEimkBdQ9qNz21XhZ391FRcskoTtrWkj8I1YdYsgMBKWJoMH1qqvhQyziqegzMGapAhbYPnvzideSd5veXKDNsMTzMOt1IDixLBk8N2neMcSDzJXP6pGGFnu12z%2FhLoiNRzYqi0OjprRZKxrw4AndWEtUjSLkXRYWjAoOhTNSFfkf10GvnrfQLgkx%2FYiDdt9pKTDeCubzAIwRa9Pqejtg0meH7eF%2FAq%2FLl674eHOqacC1ze%2BDj1xh5LOOe8vIujCSsKEV0qpCy%2BW9YqHBmNkUECxXOG49EJjkoAsjd7%2BySQ8Dv2ZEexWDo3vAx3lUYKynBjKMp5d85c3IgcmRtv8Uw69YhHHL5ZXOGdg4QT0mJj2MPAucFgnDCKzS6CD9sU24IlzoHmiAx6YRzNQeqXgcXSsr8kyFJ8gW70jleFv%2FOFT41ts3%2B9fHJH%2FI5n29OFdNI7siz7HbNCaFEZI%2FPZf2UbR8ievy%2BVtbalBlukaAx7up1iwdEDKutern%2FuxRDuT9gJecwoU0%2FdMJLk%2F8QGOqUB5nn4C1UEIxF03upaC3K4oY2c1grfe21H9AM145TM3ayFDOBZxcPd2qTESuMtftDnW9EHe4ZGwidWTjXy4Nqy7zA5oDGmkfz9H8Bigtjs69fDzfD%2B5P3dyjziJ%2BEJdI6OfX8K4LaRnfabLSG3mXE%2Fdk1CjvJ4osyrvKAALD9UPFsSY8Xya8D4VCfOzZdChJu4Hq%2B8jVX149WKwLW8qHYtIXrkisPe&X-Amz-Signature=6cdfdabe24b77c9249ff0c576521004e7fd44d8aa43d0bf6aa2c0a46f6b81e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVUUO3Z3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCIKhD93HypV%2FfZDZcX4HL%2F4RxYA3sp58rmro9xbNSacAIgLLBHGVNanYIhqZ%2FSMHBW43B71BG93XYveqd%2F7%2FfsiWsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDObBOWFQGE%2B7f1463SrcAyHeHIRjqES5kvHcvDzJRt8Fgh%2F1vJhtZbS25x0iZm653pTJtYmQD7oICP8oVeh5aDXgXg9JT4cA47%2Bz%2FJPhAorndtF%2Bq660765%2Fwgbm6SP6bc6EKTEimkBdQ9qNz21XhZ391FRcskoTtrWkj8I1YdYsgMBKWJoMH1qqvhQyziqegzMGapAhbYPnvzideSd5veXKDNsMTzMOt1IDixLBk8N2neMcSDzJXP6pGGFnu12z%2FhLoiNRzYqi0OjprRZKxrw4AndWEtUjSLkXRYWjAoOhTNSFfkf10GvnrfQLgkx%2FYiDdt9pKTDeCubzAIwRa9Pqejtg0meH7eF%2FAq%2FLl674eHOqacC1ze%2BDj1xh5LOOe8vIujCSsKEV0qpCy%2BW9YqHBmNkUECxXOG49EJjkoAsjd7%2BySQ8Dv2ZEexWDo3vAx3lUYKynBjKMp5d85c3IgcmRtv8Uw69YhHHL5ZXOGdg4QT0mJj2MPAucFgnDCKzS6CD9sU24IlzoHmiAx6YRzNQeqXgcXSsr8kyFJ8gW70jleFv%2FOFT41ts3%2B9fHJH%2FI5n29OFdNI7siz7HbNCaFEZI%2FPZf2UbR8ievy%2BVtbalBlukaAx7up1iwdEDKutern%2FuxRDuT9gJecwoU0%2FdMJLk%2F8QGOqUB5nn4C1UEIxF03upaC3K4oY2c1grfe21H9AM145TM3ayFDOBZxcPd2qTESuMtftDnW9EHe4ZGwidWTjXy4Nqy7zA5oDGmkfz9H8Bigtjs69fDzfD%2B5P3dyjziJ%2BEJdI6OfX8K4LaRnfabLSG3mXE%2Fdk1CjvJ4osyrvKAALD9UPFsSY8Xya8D4VCfOzZdChJu4Hq%2B8jVX149WKwLW8qHYtIXrkisPe&X-Amz-Signature=88931e2e2c7b9dbfb46d58789d955e2815d58384b5ef53b4ff6c3661313a0c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVUUO3Z3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCIKhD93HypV%2FfZDZcX4HL%2F4RxYA3sp58rmro9xbNSacAIgLLBHGVNanYIhqZ%2FSMHBW43B71BG93XYveqd%2F7%2FfsiWsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDObBOWFQGE%2B7f1463SrcAyHeHIRjqES5kvHcvDzJRt8Fgh%2F1vJhtZbS25x0iZm653pTJtYmQD7oICP8oVeh5aDXgXg9JT4cA47%2Bz%2FJPhAorndtF%2Bq660765%2Fwgbm6SP6bc6EKTEimkBdQ9qNz21XhZ391FRcskoTtrWkj8I1YdYsgMBKWJoMH1qqvhQyziqegzMGapAhbYPnvzideSd5veXKDNsMTzMOt1IDixLBk8N2neMcSDzJXP6pGGFnu12z%2FhLoiNRzYqi0OjprRZKxrw4AndWEtUjSLkXRYWjAoOhTNSFfkf10GvnrfQLgkx%2FYiDdt9pKTDeCubzAIwRa9Pqejtg0meH7eF%2FAq%2FLl674eHOqacC1ze%2BDj1xh5LOOe8vIujCSsKEV0qpCy%2BW9YqHBmNkUECxXOG49EJjkoAsjd7%2BySQ8Dv2ZEexWDo3vAx3lUYKynBjKMp5d85c3IgcmRtv8Uw69YhHHL5ZXOGdg4QT0mJj2MPAucFgnDCKzS6CD9sU24IlzoHmiAx6YRzNQeqXgcXSsr8kyFJ8gW70jleFv%2FOFT41ts3%2B9fHJH%2FI5n29OFdNI7siz7HbNCaFEZI%2FPZf2UbR8ievy%2BVtbalBlukaAx7up1iwdEDKutern%2FuxRDuT9gJecwoU0%2FdMJLk%2F8QGOqUB5nn4C1UEIxF03upaC3K4oY2c1grfe21H9AM145TM3ayFDOBZxcPd2qTESuMtftDnW9EHe4ZGwidWTjXy4Nqy7zA5oDGmkfz9H8Bigtjs69fDzfD%2B5P3dyjziJ%2BEJdI6OfX8K4LaRnfabLSG3mXE%2Fdk1CjvJ4osyrvKAALD9UPFsSY8Xya8D4VCfOzZdChJu4Hq%2B8jVX149WKwLW8qHYtIXrkisPe&X-Amz-Signature=bb25d5918a6e812e8cb2f324d65f1f32755b43b519f01765ba2267dac8a87023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVUUO3Z3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCIKhD93HypV%2FfZDZcX4HL%2F4RxYA3sp58rmro9xbNSacAIgLLBHGVNanYIhqZ%2FSMHBW43B71BG93XYveqd%2F7%2FfsiWsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDObBOWFQGE%2B7f1463SrcAyHeHIRjqES5kvHcvDzJRt8Fgh%2F1vJhtZbS25x0iZm653pTJtYmQD7oICP8oVeh5aDXgXg9JT4cA47%2Bz%2FJPhAorndtF%2Bq660765%2Fwgbm6SP6bc6EKTEimkBdQ9qNz21XhZ391FRcskoTtrWkj8I1YdYsgMBKWJoMH1qqvhQyziqegzMGapAhbYPnvzideSd5veXKDNsMTzMOt1IDixLBk8N2neMcSDzJXP6pGGFnu12z%2FhLoiNRzYqi0OjprRZKxrw4AndWEtUjSLkXRYWjAoOhTNSFfkf10GvnrfQLgkx%2FYiDdt9pKTDeCubzAIwRa9Pqejtg0meH7eF%2FAq%2FLl674eHOqacC1ze%2BDj1xh5LOOe8vIujCSsKEV0qpCy%2BW9YqHBmNkUECxXOG49EJjkoAsjd7%2BySQ8Dv2ZEexWDo3vAx3lUYKynBjKMp5d85c3IgcmRtv8Uw69YhHHL5ZXOGdg4QT0mJj2MPAucFgnDCKzS6CD9sU24IlzoHmiAx6YRzNQeqXgcXSsr8kyFJ8gW70jleFv%2FOFT41ts3%2B9fHJH%2FI5n29OFdNI7siz7HbNCaFEZI%2FPZf2UbR8ievy%2BVtbalBlukaAx7up1iwdEDKutern%2FuxRDuT9gJecwoU0%2FdMJLk%2F8QGOqUB5nn4C1UEIxF03upaC3K4oY2c1grfe21H9AM145TM3ayFDOBZxcPd2qTESuMtftDnW9EHe4ZGwidWTjXy4Nqy7zA5oDGmkfz9H8Bigtjs69fDzfD%2B5P3dyjziJ%2BEJdI6OfX8K4LaRnfabLSG3mXE%2Fdk1CjvJ4osyrvKAALD9UPFsSY8Xya8D4VCfOzZdChJu4Hq%2B8jVX149WKwLW8qHYtIXrkisPe&X-Amz-Signature=a771bae1a5e0127cc59eeb4beaf159f99b3ece66612170a98dbfe10a92141d96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVUUO3Z3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCIKhD93HypV%2FfZDZcX4HL%2F4RxYA3sp58rmro9xbNSacAIgLLBHGVNanYIhqZ%2FSMHBW43B71BG93XYveqd%2F7%2FfsiWsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDObBOWFQGE%2B7f1463SrcAyHeHIRjqES5kvHcvDzJRt8Fgh%2F1vJhtZbS25x0iZm653pTJtYmQD7oICP8oVeh5aDXgXg9JT4cA47%2Bz%2FJPhAorndtF%2Bq660765%2Fwgbm6SP6bc6EKTEimkBdQ9qNz21XhZ391FRcskoTtrWkj8I1YdYsgMBKWJoMH1qqvhQyziqegzMGapAhbYPnvzideSd5veXKDNsMTzMOt1IDixLBk8N2neMcSDzJXP6pGGFnu12z%2FhLoiNRzYqi0OjprRZKxrw4AndWEtUjSLkXRYWjAoOhTNSFfkf10GvnrfQLgkx%2FYiDdt9pKTDeCubzAIwRa9Pqejtg0meH7eF%2FAq%2FLl674eHOqacC1ze%2BDj1xh5LOOe8vIujCSsKEV0qpCy%2BW9YqHBmNkUECxXOG49EJjkoAsjd7%2BySQ8Dv2ZEexWDo3vAx3lUYKynBjKMp5d85c3IgcmRtv8Uw69YhHHL5ZXOGdg4QT0mJj2MPAucFgnDCKzS6CD9sU24IlzoHmiAx6YRzNQeqXgcXSsr8kyFJ8gW70jleFv%2FOFT41ts3%2B9fHJH%2FI5n29OFdNI7siz7HbNCaFEZI%2FPZf2UbR8ievy%2BVtbalBlukaAx7up1iwdEDKutern%2FuxRDuT9gJecwoU0%2FdMJLk%2F8QGOqUB5nn4C1UEIxF03upaC3K4oY2c1grfe21H9AM145TM3ayFDOBZxcPd2qTESuMtftDnW9EHe4ZGwidWTjXy4Nqy7zA5oDGmkfz9H8Bigtjs69fDzfD%2B5P3dyjziJ%2BEJdI6OfX8K4LaRnfabLSG3mXE%2Fdk1CjvJ4osyrvKAALD9UPFsSY8Xya8D4VCfOzZdChJu4Hq%2B8jVX149WKwLW8qHYtIXrkisPe&X-Amz-Signature=387935c4c3d4d722f6034ec82566fa514d09a6a42072e2e77da9494f12a985e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVUUO3Z3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCIKhD93HypV%2FfZDZcX4HL%2F4RxYA3sp58rmro9xbNSacAIgLLBHGVNanYIhqZ%2FSMHBW43B71BG93XYveqd%2F7%2FfsiWsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDObBOWFQGE%2B7f1463SrcAyHeHIRjqES5kvHcvDzJRt8Fgh%2F1vJhtZbS25x0iZm653pTJtYmQD7oICP8oVeh5aDXgXg9JT4cA47%2Bz%2FJPhAorndtF%2Bq660765%2Fwgbm6SP6bc6EKTEimkBdQ9qNz21XhZ391FRcskoTtrWkj8I1YdYsgMBKWJoMH1qqvhQyziqegzMGapAhbYPnvzideSd5veXKDNsMTzMOt1IDixLBk8N2neMcSDzJXP6pGGFnu12z%2FhLoiNRzYqi0OjprRZKxrw4AndWEtUjSLkXRYWjAoOhTNSFfkf10GvnrfQLgkx%2FYiDdt9pKTDeCubzAIwRa9Pqejtg0meH7eF%2FAq%2FLl674eHOqacC1ze%2BDj1xh5LOOe8vIujCSsKEV0qpCy%2BW9YqHBmNkUECxXOG49EJjkoAsjd7%2BySQ8Dv2ZEexWDo3vAx3lUYKynBjKMp5d85c3IgcmRtv8Uw69YhHHL5ZXOGdg4QT0mJj2MPAucFgnDCKzS6CD9sU24IlzoHmiAx6YRzNQeqXgcXSsr8kyFJ8gW70jleFv%2FOFT41ts3%2B9fHJH%2FI5n29OFdNI7siz7HbNCaFEZI%2FPZf2UbR8ievy%2BVtbalBlukaAx7up1iwdEDKutern%2FuxRDuT9gJecwoU0%2FdMJLk%2F8QGOqUB5nn4C1UEIxF03upaC3K4oY2c1grfe21H9AM145TM3ayFDOBZxcPd2qTESuMtftDnW9EHe4ZGwidWTjXy4Nqy7zA5oDGmkfz9H8Bigtjs69fDzfD%2B5P3dyjziJ%2BEJdI6OfX8K4LaRnfabLSG3mXE%2Fdk1CjvJ4osyrvKAALD9UPFsSY8Xya8D4VCfOzZdChJu4Hq%2B8jVX149WKwLW8qHYtIXrkisPe&X-Amz-Signature=ecd9660cc06f746f619002983241fca0e021cdc52d8316157874a4e184e47554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
