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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARERGA3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEg0BBe%2F3md4ml6ILsQ5GhXN%2BHnt5keLZH6KuROnZdONAiEArG9Q7MirkIbClRLXFie4Z2%2Bfvab32aRXePXj%2FWwfhsgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDF9RanOHKydrLIIruCrcA8EmXc5wfD4HS1HUZ8AJHgwKzn89T5%2BKOK%2BjjeAYh3YKCko9C3os0eO68agks0d%2BqaevN5zTG3DLh9F4IUfx39imE00veVa3dJj0sFLHdlJECIn24kc2G5%2F%2FzWv3A5yPUVI2Q76ltpHrWsIjkTRIji5w%2FbWSOsK9OrK7gMM%2F%2BnXd039JzaA4mvXdOIZ3kqN%2BsxqKkSFwAGJkLeHnfFMgkbwE0I%2FYszK9MmfRpvBuPwT3TwMMBLns6AuDT2XNKYs5%2BL%2BzsMedJmzCMJbJPPemvp1vEbxnrSH5C%2FcdmfSjYyCwxF9X2jwstCL9FtyrSYmZNZMi%2FOFx6o837o57eN00H5c1FkHa48tH2AeKvfi7Bk2WsPzasm0fy70aWEhNOix4qpvR32UNMrNpPt%2B9AMxkBaM8myLMUcIYlODkRA01KFGWRag1C3XLCIHc7lCAfMGGwh61xaUXSMMOq9c7Pp7xW%2FDJEtcgStoWykewurcRkTKHOtAqP5oVcm%2B0RmFg7ic3DlcbcWoTu2%2FjGs8W0AVkCZOUVAW4FBpwCPNue1D2CgmCQurnZwKh%2FFrXipa97k9zwQioP0CDmTxAAdW2kJBPWU4qTYZ%2F%2B7T80W3j4bYYUjK6RvF1Bjjz%2BS1bNJpAMIjK%2B8QGOqUBPhRMrFVVUsmefLrpP4J3SfPV7T9lprzNzbATD3hfIPnbEAeV6KvnhrFrZegrifwMTsclqPToPuwy3Kguk4zKGpUGOYIuiJvNprXyrfzGeuEyukiQNJRVcrm71kdgMXFh18LHuNhE1Qpd3pxIfzIR46tHGqMujh5wbFFpsQjdhNZ29Z2TavWrEajLA%2BIM1TbK4UuCIZa8OmwpYtpkJroitAMiQa6Z&X-Amz-Signature=da2acd3ea566daefbfe2774289e869482fe6d8b3dce84a92fe554bbbaa2eb7fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARERGA3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEg0BBe%2F3md4ml6ILsQ5GhXN%2BHnt5keLZH6KuROnZdONAiEArG9Q7MirkIbClRLXFie4Z2%2Bfvab32aRXePXj%2FWwfhsgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDF9RanOHKydrLIIruCrcA8EmXc5wfD4HS1HUZ8AJHgwKzn89T5%2BKOK%2BjjeAYh3YKCko9C3os0eO68agks0d%2BqaevN5zTG3DLh9F4IUfx39imE00veVa3dJj0sFLHdlJECIn24kc2G5%2F%2FzWv3A5yPUVI2Q76ltpHrWsIjkTRIji5w%2FbWSOsK9OrK7gMM%2F%2BnXd039JzaA4mvXdOIZ3kqN%2BsxqKkSFwAGJkLeHnfFMgkbwE0I%2FYszK9MmfRpvBuPwT3TwMMBLns6AuDT2XNKYs5%2BL%2BzsMedJmzCMJbJPPemvp1vEbxnrSH5C%2FcdmfSjYyCwxF9X2jwstCL9FtyrSYmZNZMi%2FOFx6o837o57eN00H5c1FkHa48tH2AeKvfi7Bk2WsPzasm0fy70aWEhNOix4qpvR32UNMrNpPt%2B9AMxkBaM8myLMUcIYlODkRA01KFGWRag1C3XLCIHc7lCAfMGGwh61xaUXSMMOq9c7Pp7xW%2FDJEtcgStoWykewurcRkTKHOtAqP5oVcm%2B0RmFg7ic3DlcbcWoTu2%2FjGs8W0AVkCZOUVAW4FBpwCPNue1D2CgmCQurnZwKh%2FFrXipa97k9zwQioP0CDmTxAAdW2kJBPWU4qTYZ%2F%2B7T80W3j4bYYUjK6RvF1Bjjz%2BS1bNJpAMIjK%2B8QGOqUBPhRMrFVVUsmefLrpP4J3SfPV7T9lprzNzbATD3hfIPnbEAeV6KvnhrFrZegrifwMTsclqPToPuwy3Kguk4zKGpUGOYIuiJvNprXyrfzGeuEyukiQNJRVcrm71kdgMXFh18LHuNhE1Qpd3pxIfzIR46tHGqMujh5wbFFpsQjdhNZ29Z2TavWrEajLA%2BIM1TbK4UuCIZa8OmwpYtpkJroitAMiQa6Z&X-Amz-Signature=35a16184dee0198c1d21094981b9c1c8bb3d96aaaec218ec3720ed204eef29ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARERGA3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEg0BBe%2F3md4ml6ILsQ5GhXN%2BHnt5keLZH6KuROnZdONAiEArG9Q7MirkIbClRLXFie4Z2%2Bfvab32aRXePXj%2FWwfhsgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDF9RanOHKydrLIIruCrcA8EmXc5wfD4HS1HUZ8AJHgwKzn89T5%2BKOK%2BjjeAYh3YKCko9C3os0eO68agks0d%2BqaevN5zTG3DLh9F4IUfx39imE00veVa3dJj0sFLHdlJECIn24kc2G5%2F%2FzWv3A5yPUVI2Q76ltpHrWsIjkTRIji5w%2FbWSOsK9OrK7gMM%2F%2BnXd039JzaA4mvXdOIZ3kqN%2BsxqKkSFwAGJkLeHnfFMgkbwE0I%2FYszK9MmfRpvBuPwT3TwMMBLns6AuDT2XNKYs5%2BL%2BzsMedJmzCMJbJPPemvp1vEbxnrSH5C%2FcdmfSjYyCwxF9X2jwstCL9FtyrSYmZNZMi%2FOFx6o837o57eN00H5c1FkHa48tH2AeKvfi7Bk2WsPzasm0fy70aWEhNOix4qpvR32UNMrNpPt%2B9AMxkBaM8myLMUcIYlODkRA01KFGWRag1C3XLCIHc7lCAfMGGwh61xaUXSMMOq9c7Pp7xW%2FDJEtcgStoWykewurcRkTKHOtAqP5oVcm%2B0RmFg7ic3DlcbcWoTu2%2FjGs8W0AVkCZOUVAW4FBpwCPNue1D2CgmCQurnZwKh%2FFrXipa97k9zwQioP0CDmTxAAdW2kJBPWU4qTYZ%2F%2B7T80W3j4bYYUjK6RvF1Bjjz%2BS1bNJpAMIjK%2B8QGOqUBPhRMrFVVUsmefLrpP4J3SfPV7T9lprzNzbATD3hfIPnbEAeV6KvnhrFrZegrifwMTsclqPToPuwy3Kguk4zKGpUGOYIuiJvNprXyrfzGeuEyukiQNJRVcrm71kdgMXFh18LHuNhE1Qpd3pxIfzIR46tHGqMujh5wbFFpsQjdhNZ29Z2TavWrEajLA%2BIM1TbK4UuCIZa8OmwpYtpkJroitAMiQa6Z&X-Amz-Signature=c747030c2ec676f9fbdab6928c2680a64756982e99d1d2ab2acfde39d9c4865b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARERGA3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEg0BBe%2F3md4ml6ILsQ5GhXN%2BHnt5keLZH6KuROnZdONAiEArG9Q7MirkIbClRLXFie4Z2%2Bfvab32aRXePXj%2FWwfhsgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDF9RanOHKydrLIIruCrcA8EmXc5wfD4HS1HUZ8AJHgwKzn89T5%2BKOK%2BjjeAYh3YKCko9C3os0eO68agks0d%2BqaevN5zTG3DLh9F4IUfx39imE00veVa3dJj0sFLHdlJECIn24kc2G5%2F%2FzWv3A5yPUVI2Q76ltpHrWsIjkTRIji5w%2FbWSOsK9OrK7gMM%2F%2BnXd039JzaA4mvXdOIZ3kqN%2BsxqKkSFwAGJkLeHnfFMgkbwE0I%2FYszK9MmfRpvBuPwT3TwMMBLns6AuDT2XNKYs5%2BL%2BzsMedJmzCMJbJPPemvp1vEbxnrSH5C%2FcdmfSjYyCwxF9X2jwstCL9FtyrSYmZNZMi%2FOFx6o837o57eN00H5c1FkHa48tH2AeKvfi7Bk2WsPzasm0fy70aWEhNOix4qpvR32UNMrNpPt%2B9AMxkBaM8myLMUcIYlODkRA01KFGWRag1C3XLCIHc7lCAfMGGwh61xaUXSMMOq9c7Pp7xW%2FDJEtcgStoWykewurcRkTKHOtAqP5oVcm%2B0RmFg7ic3DlcbcWoTu2%2FjGs8W0AVkCZOUVAW4FBpwCPNue1D2CgmCQurnZwKh%2FFrXipa97k9zwQioP0CDmTxAAdW2kJBPWU4qTYZ%2F%2B7T80W3j4bYYUjK6RvF1Bjjz%2BS1bNJpAMIjK%2B8QGOqUBPhRMrFVVUsmefLrpP4J3SfPV7T9lprzNzbATD3hfIPnbEAeV6KvnhrFrZegrifwMTsclqPToPuwy3Kguk4zKGpUGOYIuiJvNprXyrfzGeuEyukiQNJRVcrm71kdgMXFh18LHuNhE1Qpd3pxIfzIR46tHGqMujh5wbFFpsQjdhNZ29Z2TavWrEajLA%2BIM1TbK4UuCIZa8OmwpYtpkJroitAMiQa6Z&X-Amz-Signature=b3b0d4a574fe7eeb7018924baba78c9b6887439289e362de3e0b89fa5883aaab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARERGA3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEg0BBe%2F3md4ml6ILsQ5GhXN%2BHnt5keLZH6KuROnZdONAiEArG9Q7MirkIbClRLXFie4Z2%2Bfvab32aRXePXj%2FWwfhsgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDF9RanOHKydrLIIruCrcA8EmXc5wfD4HS1HUZ8AJHgwKzn89T5%2BKOK%2BjjeAYh3YKCko9C3os0eO68agks0d%2BqaevN5zTG3DLh9F4IUfx39imE00veVa3dJj0sFLHdlJECIn24kc2G5%2F%2FzWv3A5yPUVI2Q76ltpHrWsIjkTRIji5w%2FbWSOsK9OrK7gMM%2F%2BnXd039JzaA4mvXdOIZ3kqN%2BsxqKkSFwAGJkLeHnfFMgkbwE0I%2FYszK9MmfRpvBuPwT3TwMMBLns6AuDT2XNKYs5%2BL%2BzsMedJmzCMJbJPPemvp1vEbxnrSH5C%2FcdmfSjYyCwxF9X2jwstCL9FtyrSYmZNZMi%2FOFx6o837o57eN00H5c1FkHa48tH2AeKvfi7Bk2WsPzasm0fy70aWEhNOix4qpvR32UNMrNpPt%2B9AMxkBaM8myLMUcIYlODkRA01KFGWRag1C3XLCIHc7lCAfMGGwh61xaUXSMMOq9c7Pp7xW%2FDJEtcgStoWykewurcRkTKHOtAqP5oVcm%2B0RmFg7ic3DlcbcWoTu2%2FjGs8W0AVkCZOUVAW4FBpwCPNue1D2CgmCQurnZwKh%2FFrXipa97k9zwQioP0CDmTxAAdW2kJBPWU4qTYZ%2F%2B7T80W3j4bYYUjK6RvF1Bjjz%2BS1bNJpAMIjK%2B8QGOqUBPhRMrFVVUsmefLrpP4J3SfPV7T9lprzNzbATD3hfIPnbEAeV6KvnhrFrZegrifwMTsclqPToPuwy3Kguk4zKGpUGOYIuiJvNprXyrfzGeuEyukiQNJRVcrm71kdgMXFh18LHuNhE1Qpd3pxIfzIR46tHGqMujh5wbFFpsQjdhNZ29Z2TavWrEajLA%2BIM1TbK4UuCIZa8OmwpYtpkJroitAMiQa6Z&X-Amz-Signature=d8be31bf5910a5d4d72d6eb634e57133cc95a95c7466c85082650f3b414f7da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARERGA3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEg0BBe%2F3md4ml6ILsQ5GhXN%2BHnt5keLZH6KuROnZdONAiEArG9Q7MirkIbClRLXFie4Z2%2Bfvab32aRXePXj%2FWwfhsgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDF9RanOHKydrLIIruCrcA8EmXc5wfD4HS1HUZ8AJHgwKzn89T5%2BKOK%2BjjeAYh3YKCko9C3os0eO68agks0d%2BqaevN5zTG3DLh9F4IUfx39imE00veVa3dJj0sFLHdlJECIn24kc2G5%2F%2FzWv3A5yPUVI2Q76ltpHrWsIjkTRIji5w%2FbWSOsK9OrK7gMM%2F%2BnXd039JzaA4mvXdOIZ3kqN%2BsxqKkSFwAGJkLeHnfFMgkbwE0I%2FYszK9MmfRpvBuPwT3TwMMBLns6AuDT2XNKYs5%2BL%2BzsMedJmzCMJbJPPemvp1vEbxnrSH5C%2FcdmfSjYyCwxF9X2jwstCL9FtyrSYmZNZMi%2FOFx6o837o57eN00H5c1FkHa48tH2AeKvfi7Bk2WsPzasm0fy70aWEhNOix4qpvR32UNMrNpPt%2B9AMxkBaM8myLMUcIYlODkRA01KFGWRag1C3XLCIHc7lCAfMGGwh61xaUXSMMOq9c7Pp7xW%2FDJEtcgStoWykewurcRkTKHOtAqP5oVcm%2B0RmFg7ic3DlcbcWoTu2%2FjGs8W0AVkCZOUVAW4FBpwCPNue1D2CgmCQurnZwKh%2FFrXipa97k9zwQioP0CDmTxAAdW2kJBPWU4qTYZ%2F%2B7T80W3j4bYYUjK6RvF1Bjjz%2BS1bNJpAMIjK%2B8QGOqUBPhRMrFVVUsmefLrpP4J3SfPV7T9lprzNzbATD3hfIPnbEAeV6KvnhrFrZegrifwMTsclqPToPuwy3Kguk4zKGpUGOYIuiJvNprXyrfzGeuEyukiQNJRVcrm71kdgMXFh18LHuNhE1Qpd3pxIfzIR46tHGqMujh5wbFFpsQjdhNZ29Z2TavWrEajLA%2BIM1TbK4UuCIZa8OmwpYtpkJroitAMiQa6Z&X-Amz-Signature=356874d9c84fdd63dbebef9b48f92db15209056e8c7129b7fc93d3ed812b4ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARERGA3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEg0BBe%2F3md4ml6ILsQ5GhXN%2BHnt5keLZH6KuROnZdONAiEArG9Q7MirkIbClRLXFie4Z2%2Bfvab32aRXePXj%2FWwfhsgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDF9RanOHKydrLIIruCrcA8EmXc5wfD4HS1HUZ8AJHgwKzn89T5%2BKOK%2BjjeAYh3YKCko9C3os0eO68agks0d%2BqaevN5zTG3DLh9F4IUfx39imE00veVa3dJj0sFLHdlJECIn24kc2G5%2F%2FzWv3A5yPUVI2Q76ltpHrWsIjkTRIji5w%2FbWSOsK9OrK7gMM%2F%2BnXd039JzaA4mvXdOIZ3kqN%2BsxqKkSFwAGJkLeHnfFMgkbwE0I%2FYszK9MmfRpvBuPwT3TwMMBLns6AuDT2XNKYs5%2BL%2BzsMedJmzCMJbJPPemvp1vEbxnrSH5C%2FcdmfSjYyCwxF9X2jwstCL9FtyrSYmZNZMi%2FOFx6o837o57eN00H5c1FkHa48tH2AeKvfi7Bk2WsPzasm0fy70aWEhNOix4qpvR32UNMrNpPt%2B9AMxkBaM8myLMUcIYlODkRA01KFGWRag1C3XLCIHc7lCAfMGGwh61xaUXSMMOq9c7Pp7xW%2FDJEtcgStoWykewurcRkTKHOtAqP5oVcm%2B0RmFg7ic3DlcbcWoTu2%2FjGs8W0AVkCZOUVAW4FBpwCPNue1D2CgmCQurnZwKh%2FFrXipa97k9zwQioP0CDmTxAAdW2kJBPWU4qTYZ%2F%2B7T80W3j4bYYUjK6RvF1Bjjz%2BS1bNJpAMIjK%2B8QGOqUBPhRMrFVVUsmefLrpP4J3SfPV7T9lprzNzbATD3hfIPnbEAeV6KvnhrFrZegrifwMTsclqPToPuwy3Kguk4zKGpUGOYIuiJvNprXyrfzGeuEyukiQNJRVcrm71kdgMXFh18LHuNhE1Qpd3pxIfzIR46tHGqMujh5wbFFpsQjdhNZ29Z2TavWrEajLA%2BIM1TbK4UuCIZa8OmwpYtpkJroitAMiQa6Z&X-Amz-Signature=166f355277828b1455c79486eddc6df686f06bfa8db6ac610ebe7c3e7590e2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARERGA3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEg0BBe%2F3md4ml6ILsQ5GhXN%2BHnt5keLZH6KuROnZdONAiEArG9Q7MirkIbClRLXFie4Z2%2Bfvab32aRXePXj%2FWwfhsgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDF9RanOHKydrLIIruCrcA8EmXc5wfD4HS1HUZ8AJHgwKzn89T5%2BKOK%2BjjeAYh3YKCko9C3os0eO68agks0d%2BqaevN5zTG3DLh9F4IUfx39imE00veVa3dJj0sFLHdlJECIn24kc2G5%2F%2FzWv3A5yPUVI2Q76ltpHrWsIjkTRIji5w%2FbWSOsK9OrK7gMM%2F%2BnXd039JzaA4mvXdOIZ3kqN%2BsxqKkSFwAGJkLeHnfFMgkbwE0I%2FYszK9MmfRpvBuPwT3TwMMBLns6AuDT2XNKYs5%2BL%2BzsMedJmzCMJbJPPemvp1vEbxnrSH5C%2FcdmfSjYyCwxF9X2jwstCL9FtyrSYmZNZMi%2FOFx6o837o57eN00H5c1FkHa48tH2AeKvfi7Bk2WsPzasm0fy70aWEhNOix4qpvR32UNMrNpPt%2B9AMxkBaM8myLMUcIYlODkRA01KFGWRag1C3XLCIHc7lCAfMGGwh61xaUXSMMOq9c7Pp7xW%2FDJEtcgStoWykewurcRkTKHOtAqP5oVcm%2B0RmFg7ic3DlcbcWoTu2%2FjGs8W0AVkCZOUVAW4FBpwCPNue1D2CgmCQurnZwKh%2FFrXipa97k9zwQioP0CDmTxAAdW2kJBPWU4qTYZ%2F%2B7T80W3j4bYYUjK6RvF1Bjjz%2BS1bNJpAMIjK%2B8QGOqUBPhRMrFVVUsmefLrpP4J3SfPV7T9lprzNzbATD3hfIPnbEAeV6KvnhrFrZegrifwMTsclqPToPuwy3Kguk4zKGpUGOYIuiJvNprXyrfzGeuEyukiQNJRVcrm71kdgMXFh18LHuNhE1Qpd3pxIfzIR46tHGqMujh5wbFFpsQjdhNZ29Z2TavWrEajLA%2BIM1TbK4UuCIZa8OmwpYtpkJroitAMiQa6Z&X-Amz-Signature=7c364ec171a9c2142511a896c25fa687fda3e550930924237578de559a34c4fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARERGA3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEg0BBe%2F3md4ml6ILsQ5GhXN%2BHnt5keLZH6KuROnZdONAiEArG9Q7MirkIbClRLXFie4Z2%2Bfvab32aRXePXj%2FWwfhsgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDF9RanOHKydrLIIruCrcA8EmXc5wfD4HS1HUZ8AJHgwKzn89T5%2BKOK%2BjjeAYh3YKCko9C3os0eO68agks0d%2BqaevN5zTG3DLh9F4IUfx39imE00veVa3dJj0sFLHdlJECIn24kc2G5%2F%2FzWv3A5yPUVI2Q76ltpHrWsIjkTRIji5w%2FbWSOsK9OrK7gMM%2F%2BnXd039JzaA4mvXdOIZ3kqN%2BsxqKkSFwAGJkLeHnfFMgkbwE0I%2FYszK9MmfRpvBuPwT3TwMMBLns6AuDT2XNKYs5%2BL%2BzsMedJmzCMJbJPPemvp1vEbxnrSH5C%2FcdmfSjYyCwxF9X2jwstCL9FtyrSYmZNZMi%2FOFx6o837o57eN00H5c1FkHa48tH2AeKvfi7Bk2WsPzasm0fy70aWEhNOix4qpvR32UNMrNpPt%2B9AMxkBaM8myLMUcIYlODkRA01KFGWRag1C3XLCIHc7lCAfMGGwh61xaUXSMMOq9c7Pp7xW%2FDJEtcgStoWykewurcRkTKHOtAqP5oVcm%2B0RmFg7ic3DlcbcWoTu2%2FjGs8W0AVkCZOUVAW4FBpwCPNue1D2CgmCQurnZwKh%2FFrXipa97k9zwQioP0CDmTxAAdW2kJBPWU4qTYZ%2F%2B7T80W3j4bYYUjK6RvF1Bjjz%2BS1bNJpAMIjK%2B8QGOqUBPhRMrFVVUsmefLrpP4J3SfPV7T9lprzNzbATD3hfIPnbEAeV6KvnhrFrZegrifwMTsclqPToPuwy3Kguk4zKGpUGOYIuiJvNprXyrfzGeuEyukiQNJRVcrm71kdgMXFh18LHuNhE1Qpd3pxIfzIR46tHGqMujh5wbFFpsQjdhNZ29Z2TavWrEajLA%2BIM1TbK4UuCIZa8OmwpYtpkJroitAMiQa6Z&X-Amz-Signature=d4eaa6a68bd32afef374e5c627957b8bb7c6caddedf92749a261503abce628c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARERGA3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEg0BBe%2F3md4ml6ILsQ5GhXN%2BHnt5keLZH6KuROnZdONAiEArG9Q7MirkIbClRLXFie4Z2%2Bfvab32aRXePXj%2FWwfhsgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDF9RanOHKydrLIIruCrcA8EmXc5wfD4HS1HUZ8AJHgwKzn89T5%2BKOK%2BjjeAYh3YKCko9C3os0eO68agks0d%2BqaevN5zTG3DLh9F4IUfx39imE00veVa3dJj0sFLHdlJECIn24kc2G5%2F%2FzWv3A5yPUVI2Q76ltpHrWsIjkTRIji5w%2FbWSOsK9OrK7gMM%2F%2BnXd039JzaA4mvXdOIZ3kqN%2BsxqKkSFwAGJkLeHnfFMgkbwE0I%2FYszK9MmfRpvBuPwT3TwMMBLns6AuDT2XNKYs5%2BL%2BzsMedJmzCMJbJPPemvp1vEbxnrSH5C%2FcdmfSjYyCwxF9X2jwstCL9FtyrSYmZNZMi%2FOFx6o837o57eN00H5c1FkHa48tH2AeKvfi7Bk2WsPzasm0fy70aWEhNOix4qpvR32UNMrNpPt%2B9AMxkBaM8myLMUcIYlODkRA01KFGWRag1C3XLCIHc7lCAfMGGwh61xaUXSMMOq9c7Pp7xW%2FDJEtcgStoWykewurcRkTKHOtAqP5oVcm%2B0RmFg7ic3DlcbcWoTu2%2FjGs8W0AVkCZOUVAW4FBpwCPNue1D2CgmCQurnZwKh%2FFrXipa97k9zwQioP0CDmTxAAdW2kJBPWU4qTYZ%2F%2B7T80W3j4bYYUjK6RvF1Bjjz%2BS1bNJpAMIjK%2B8QGOqUBPhRMrFVVUsmefLrpP4J3SfPV7T9lprzNzbATD3hfIPnbEAeV6KvnhrFrZegrifwMTsclqPToPuwy3Kguk4zKGpUGOYIuiJvNprXyrfzGeuEyukiQNJRVcrm71kdgMXFh18LHuNhE1Qpd3pxIfzIR46tHGqMujh5wbFFpsQjdhNZ29Z2TavWrEajLA%2BIM1TbK4UuCIZa8OmwpYtpkJroitAMiQa6Z&X-Amz-Signature=645b387b5facc9e988f5ef36ce03af4a025347e80a5516cf6d47cb4f33d8fd22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUD6HXD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIALBk8LzINYArC4eQ3MivPAKAn3hWSExB7d3x9bcmfp9AiEAkVFVbjt%2FKJs8A3r%2Ba1UfBJJGycvN4DMfWNXadq1stsYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKv%2BUUZVVxvczhFJmircA4JggXSLlE5E4XfZOGTmMbtmQBIUBOB%2F7saT%2B%2B%2BM%2BvC%2F0KZmllINrRjjjlCAzV4YRRSqN17F3JO8znqPcf8RIf3%2FM8%2FKOPrSYKq75ksmUfdIA1lThQnGfZaoCnwI%2FYrmKGS20ufzWeROzrhYtt6XUjtqJXF%2FESUu2gWWfYiv%2B%2FGFJlHRkTcOHgs%2Bmo7nSdb0mfG3KQEvI4KuTOdLUBta9o%2BQRL0cMcWT0YahPZ8pKtBnTiDfWsoLj6o2PORi8%2BXIUdfpK2L35LU0Tgn%2BpPIF6HI2ToPNZPmFaY7TEL%2BYMDl4W3lADakTpf%2BbAJSh4wCEo7Lc1hfNskyfYkRkay2xQjq9jkwia4woc%2FP0PNUDMfXh1cWpbUi80dD%2B0CelIB1w%2FjyE2yxUJHl2kP9VtH2bK8malhgpHTlEgOBg16c8NT%2BQjTNJ6lOFMpL9JfZGl6ZsOIdw1dTiBXScLmtDdNoQC0Ml00SwfNeshevzH8cZqMGnQn21ZAYgG5D3ORFgVOUFbezREI98XyaYBjFXi2Atk31BQkWKl7lSPABL%2FvlcXdEeXCi3uHlc5FyAAMF%2FaTlCry8FqckSqYKGJidt9pFAUl1WLKTcv4eO38EL0XpAncZPPMlIxz8rO4zOxxe2MJvK%2B8QGOqUBCmbmpvxpp%2BBm64O52nGB8qVC%2B4HsrAlIokuMvoNMSJhUf5tlk8Jd36o%2FfsnfEx1qgONW6OpNuVNz%2BC1lopRnIyVFM5aOnzbB7x8Pw7CxlxDmfBCheGywstYK6uDQPeCRRWOad0Y2cpQ9YyBdQYq83Zq0vC6FvHtUTtNEcW3ButK2JPkXIQZoVvLSQrut1zkCpQq9XPogl2v10Pql5PP12pBqJ7Cj&X-Amz-Signature=a728557964ff031ec535a6a704f0754dc3b5656da0bcf3c45d4c1aee1b473ebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUNGBE7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2BrmPqODL4uW8kPvenJy1AGb9N9scAMYTKYTAJzfmzoAIgLLlFiE7P%2BqPFivrIDLQccPVBjKKTnnkrSXoX8SnV4OYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIMffQDADtIrweOcHyrcAzH8dzMfOlN%2FJfcT3%2F8Q3Orr6YfjvjmE1%2F%2BhoeJvl6VWtZ8h6U6hNTjhmgoiPyiMS14P2jtqksT4iajkPqLraQzfyniU0WHG6qDVGFOzfGnZd2l9LN0GWW6sdN1IuTK9NhHaJ8PvfC12UsQDNx3wseAjvs2RFkZ1hq6ivS1DPy8%2FnZRqu8k8ZaJKF6swuWffBQ5wuWEd9mrIwZJ9zWjcqt5LlJn4B9oqoH9OpY8KWslf3tiVocgBfhkIVeDPNrYDH6BzDl%2BUXzL%2FIko%2FMJaqD5PgNw%2BHbc12VeZ7LQK9AJKb%2FC5xNfMZ3nBtKHft9bUU7iZ3Wht6EZV2srEtc89DtW8LQLldbWgNtgHA%2F%2FrN9Bidrd8dtObnvmITO2W8MCdTPeg%2BRN01%2FqAXWmt3WHMg8sqIB%2FzUx8eMelgcmZfL7wq%2F9J9qhGjqc2K1Bu2ckzXA6Maup2HB2uzvLORD66DgFJVMRS%2FAci0SGw8NSPDaIkMmojKDG2F1qkeusteloK9K6zauyflcqSCYzt7IogmBkTnWV98s8K%2Bg324SazefXiNK%2FB9ChwS1r9%2BaS%2FS2kJRN8lTesu3h8FRxDwjrL58l85%2FkSbp5kIGS2V3OudLOqMCa1vP0yL2%2BMd2DipekMLzK%2B8QGOqUBkQ1XtCtW0s5VfZbvX0YsZJ89Q%2BH5xuKES9nAq9iB90CdYoJ0caCDtNDsEYxQpE7n6SEwyM6BWn50Gts0HKyemOhrKyEV5rv8Y2MnScZC8xsNxRRiXglVwzmOJVDLPWjUX7BM%2BW66WBsmgjeQG9mf1wkN15FEHQvK7VZWM00rpBSc3pCfiFz%2Fkw93%2B57sppau4G%2BIRxh%2FfwYp5wL4aaEPpkkXTYW5&X-Amz-Signature=842f80c722ef6705b72a6aa516661740c69841bd36a78471299f4adab2636eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUNGBE7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2BrmPqODL4uW8kPvenJy1AGb9N9scAMYTKYTAJzfmzoAIgLLlFiE7P%2BqPFivrIDLQccPVBjKKTnnkrSXoX8SnV4OYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIMffQDADtIrweOcHyrcAzH8dzMfOlN%2FJfcT3%2F8Q3Orr6YfjvjmE1%2F%2BhoeJvl6VWtZ8h6U6hNTjhmgoiPyiMS14P2jtqksT4iajkPqLraQzfyniU0WHG6qDVGFOzfGnZd2l9LN0GWW6sdN1IuTK9NhHaJ8PvfC12UsQDNx3wseAjvs2RFkZ1hq6ivS1DPy8%2FnZRqu8k8ZaJKF6swuWffBQ5wuWEd9mrIwZJ9zWjcqt5LlJn4B9oqoH9OpY8KWslf3tiVocgBfhkIVeDPNrYDH6BzDl%2BUXzL%2FIko%2FMJaqD5PgNw%2BHbc12VeZ7LQK9AJKb%2FC5xNfMZ3nBtKHft9bUU7iZ3Wht6EZV2srEtc89DtW8LQLldbWgNtgHA%2F%2FrN9Bidrd8dtObnvmITO2W8MCdTPeg%2BRN01%2FqAXWmt3WHMg8sqIB%2FzUx8eMelgcmZfL7wq%2F9J9qhGjqc2K1Bu2ckzXA6Maup2HB2uzvLORD66DgFJVMRS%2FAci0SGw8NSPDaIkMmojKDG2F1qkeusteloK9K6zauyflcqSCYzt7IogmBkTnWV98s8K%2Bg324SazefXiNK%2FB9ChwS1r9%2BaS%2FS2kJRN8lTesu3h8FRxDwjrL58l85%2FkSbp5kIGS2V3OudLOqMCa1vP0yL2%2BMd2DipekMLzK%2B8QGOqUBkQ1XtCtW0s5VfZbvX0YsZJ89Q%2BH5xuKES9nAq9iB90CdYoJ0caCDtNDsEYxQpE7n6SEwyM6BWn50Gts0HKyemOhrKyEV5rv8Y2MnScZC8xsNxRRiXglVwzmOJVDLPWjUX7BM%2BW66WBsmgjeQG9mf1wkN15FEHQvK7VZWM00rpBSc3pCfiFz%2Fkw93%2B57sppau4G%2BIRxh%2FfwYp5wL4aaEPpkkXTYW5&X-Amz-Signature=0f41a29950c3f5dfa5c9439f6921554a9f140881ef1361066d33e52cbf1090b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUNGBE7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2BrmPqODL4uW8kPvenJy1AGb9N9scAMYTKYTAJzfmzoAIgLLlFiE7P%2BqPFivrIDLQccPVBjKKTnnkrSXoX8SnV4OYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIMffQDADtIrweOcHyrcAzH8dzMfOlN%2FJfcT3%2F8Q3Orr6YfjvjmE1%2F%2BhoeJvl6VWtZ8h6U6hNTjhmgoiPyiMS14P2jtqksT4iajkPqLraQzfyniU0WHG6qDVGFOzfGnZd2l9LN0GWW6sdN1IuTK9NhHaJ8PvfC12UsQDNx3wseAjvs2RFkZ1hq6ivS1DPy8%2FnZRqu8k8ZaJKF6swuWffBQ5wuWEd9mrIwZJ9zWjcqt5LlJn4B9oqoH9OpY8KWslf3tiVocgBfhkIVeDPNrYDH6BzDl%2BUXzL%2FIko%2FMJaqD5PgNw%2BHbc12VeZ7LQK9AJKb%2FC5xNfMZ3nBtKHft9bUU7iZ3Wht6EZV2srEtc89DtW8LQLldbWgNtgHA%2F%2FrN9Bidrd8dtObnvmITO2W8MCdTPeg%2BRN01%2FqAXWmt3WHMg8sqIB%2FzUx8eMelgcmZfL7wq%2F9J9qhGjqc2K1Bu2ckzXA6Maup2HB2uzvLORD66DgFJVMRS%2FAci0SGw8NSPDaIkMmojKDG2F1qkeusteloK9K6zauyflcqSCYzt7IogmBkTnWV98s8K%2Bg324SazefXiNK%2FB9ChwS1r9%2BaS%2FS2kJRN8lTesu3h8FRxDwjrL58l85%2FkSbp5kIGS2V3OudLOqMCa1vP0yL2%2BMd2DipekMLzK%2B8QGOqUBkQ1XtCtW0s5VfZbvX0YsZJ89Q%2BH5xuKES9nAq9iB90CdYoJ0caCDtNDsEYxQpE7n6SEwyM6BWn50Gts0HKyemOhrKyEV5rv8Y2MnScZC8xsNxRRiXglVwzmOJVDLPWjUX7BM%2BW66WBsmgjeQG9mf1wkN15FEHQvK7VZWM00rpBSc3pCfiFz%2Fkw93%2B57sppau4G%2BIRxh%2FfwYp5wL4aaEPpkkXTYW5&X-Amz-Signature=e014f474025b2687f9849c1fc9ecb57b4b438ab142fbf58c6b30aaf3b125f2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUNGBE7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2BrmPqODL4uW8kPvenJy1AGb9N9scAMYTKYTAJzfmzoAIgLLlFiE7P%2BqPFivrIDLQccPVBjKKTnnkrSXoX8SnV4OYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIMffQDADtIrweOcHyrcAzH8dzMfOlN%2FJfcT3%2F8Q3Orr6YfjvjmE1%2F%2BhoeJvl6VWtZ8h6U6hNTjhmgoiPyiMS14P2jtqksT4iajkPqLraQzfyniU0WHG6qDVGFOzfGnZd2l9LN0GWW6sdN1IuTK9NhHaJ8PvfC12UsQDNx3wseAjvs2RFkZ1hq6ivS1DPy8%2FnZRqu8k8ZaJKF6swuWffBQ5wuWEd9mrIwZJ9zWjcqt5LlJn4B9oqoH9OpY8KWslf3tiVocgBfhkIVeDPNrYDH6BzDl%2BUXzL%2FIko%2FMJaqD5PgNw%2BHbc12VeZ7LQK9AJKb%2FC5xNfMZ3nBtKHft9bUU7iZ3Wht6EZV2srEtc89DtW8LQLldbWgNtgHA%2F%2FrN9Bidrd8dtObnvmITO2W8MCdTPeg%2BRN01%2FqAXWmt3WHMg8sqIB%2FzUx8eMelgcmZfL7wq%2F9J9qhGjqc2K1Bu2ckzXA6Maup2HB2uzvLORD66DgFJVMRS%2FAci0SGw8NSPDaIkMmojKDG2F1qkeusteloK9K6zauyflcqSCYzt7IogmBkTnWV98s8K%2Bg324SazefXiNK%2FB9ChwS1r9%2BaS%2FS2kJRN8lTesu3h8FRxDwjrL58l85%2FkSbp5kIGS2V3OudLOqMCa1vP0yL2%2BMd2DipekMLzK%2B8QGOqUBkQ1XtCtW0s5VfZbvX0YsZJ89Q%2BH5xuKES9nAq9iB90CdYoJ0caCDtNDsEYxQpE7n6SEwyM6BWn50Gts0HKyemOhrKyEV5rv8Y2MnScZC8xsNxRRiXglVwzmOJVDLPWjUX7BM%2BW66WBsmgjeQG9mf1wkN15FEHQvK7VZWM00rpBSc3pCfiFz%2Fkw93%2B57sppau4G%2BIRxh%2FfwYp5wL4aaEPpkkXTYW5&X-Amz-Signature=bdcfc0e0a5cfe381a6fbb932fd04c91da634a1c390a64a4eeac016d2196dd30a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUNGBE7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2BrmPqODL4uW8kPvenJy1AGb9N9scAMYTKYTAJzfmzoAIgLLlFiE7P%2BqPFivrIDLQccPVBjKKTnnkrSXoX8SnV4OYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIMffQDADtIrweOcHyrcAzH8dzMfOlN%2FJfcT3%2F8Q3Orr6YfjvjmE1%2F%2BhoeJvl6VWtZ8h6U6hNTjhmgoiPyiMS14P2jtqksT4iajkPqLraQzfyniU0WHG6qDVGFOzfGnZd2l9LN0GWW6sdN1IuTK9NhHaJ8PvfC12UsQDNx3wseAjvs2RFkZ1hq6ivS1DPy8%2FnZRqu8k8ZaJKF6swuWffBQ5wuWEd9mrIwZJ9zWjcqt5LlJn4B9oqoH9OpY8KWslf3tiVocgBfhkIVeDPNrYDH6BzDl%2BUXzL%2FIko%2FMJaqD5PgNw%2BHbc12VeZ7LQK9AJKb%2FC5xNfMZ3nBtKHft9bUU7iZ3Wht6EZV2srEtc89DtW8LQLldbWgNtgHA%2F%2FrN9Bidrd8dtObnvmITO2W8MCdTPeg%2BRN01%2FqAXWmt3WHMg8sqIB%2FzUx8eMelgcmZfL7wq%2F9J9qhGjqc2K1Bu2ckzXA6Maup2HB2uzvLORD66DgFJVMRS%2FAci0SGw8NSPDaIkMmojKDG2F1qkeusteloK9K6zauyflcqSCYzt7IogmBkTnWV98s8K%2Bg324SazefXiNK%2FB9ChwS1r9%2BaS%2FS2kJRN8lTesu3h8FRxDwjrL58l85%2FkSbp5kIGS2V3OudLOqMCa1vP0yL2%2BMd2DipekMLzK%2B8QGOqUBkQ1XtCtW0s5VfZbvX0YsZJ89Q%2BH5xuKES9nAq9iB90CdYoJ0caCDtNDsEYxQpE7n6SEwyM6BWn50Gts0HKyemOhrKyEV5rv8Y2MnScZC8xsNxRRiXglVwzmOJVDLPWjUX7BM%2BW66WBsmgjeQG9mf1wkN15FEHQvK7VZWM00rpBSc3pCfiFz%2Fkw93%2B57sppau4G%2BIRxh%2FfwYp5wL4aaEPpkkXTYW5&X-Amz-Signature=431565711ce1bbb302b726b8941e3a2decd099572915ea70435aec4b5d66bc42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUNGBE7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2BrmPqODL4uW8kPvenJy1AGb9N9scAMYTKYTAJzfmzoAIgLLlFiE7P%2BqPFivrIDLQccPVBjKKTnnkrSXoX8SnV4OYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIMffQDADtIrweOcHyrcAzH8dzMfOlN%2FJfcT3%2F8Q3Orr6YfjvjmE1%2F%2BhoeJvl6VWtZ8h6U6hNTjhmgoiPyiMS14P2jtqksT4iajkPqLraQzfyniU0WHG6qDVGFOzfGnZd2l9LN0GWW6sdN1IuTK9NhHaJ8PvfC12UsQDNx3wseAjvs2RFkZ1hq6ivS1DPy8%2FnZRqu8k8ZaJKF6swuWffBQ5wuWEd9mrIwZJ9zWjcqt5LlJn4B9oqoH9OpY8KWslf3tiVocgBfhkIVeDPNrYDH6BzDl%2BUXzL%2FIko%2FMJaqD5PgNw%2BHbc12VeZ7LQK9AJKb%2FC5xNfMZ3nBtKHft9bUU7iZ3Wht6EZV2srEtc89DtW8LQLldbWgNtgHA%2F%2FrN9Bidrd8dtObnvmITO2W8MCdTPeg%2BRN01%2FqAXWmt3WHMg8sqIB%2FzUx8eMelgcmZfL7wq%2F9J9qhGjqc2K1Bu2ckzXA6Maup2HB2uzvLORD66DgFJVMRS%2FAci0SGw8NSPDaIkMmojKDG2F1qkeusteloK9K6zauyflcqSCYzt7IogmBkTnWV98s8K%2Bg324SazefXiNK%2FB9ChwS1r9%2BaS%2FS2kJRN8lTesu3h8FRxDwjrL58l85%2FkSbp5kIGS2V3OudLOqMCa1vP0yL2%2BMd2DipekMLzK%2B8QGOqUBkQ1XtCtW0s5VfZbvX0YsZJ89Q%2BH5xuKES9nAq9iB90CdYoJ0caCDtNDsEYxQpE7n6SEwyM6BWn50Gts0HKyemOhrKyEV5rv8Y2MnScZC8xsNxRRiXglVwzmOJVDLPWjUX7BM%2BW66WBsmgjeQG9mf1wkN15FEHQvK7VZWM00rpBSc3pCfiFz%2Fkw93%2B57sppau4G%2BIRxh%2FfwYp5wL4aaEPpkkXTYW5&X-Amz-Signature=9a88bb2069847fa2f9cffe6960ed2e2ee19b687d8012f725e0a62bb2864352c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUNGBE7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2BrmPqODL4uW8kPvenJy1AGb9N9scAMYTKYTAJzfmzoAIgLLlFiE7P%2BqPFivrIDLQccPVBjKKTnnkrSXoX8SnV4OYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIMffQDADtIrweOcHyrcAzH8dzMfOlN%2FJfcT3%2F8Q3Orr6YfjvjmE1%2F%2BhoeJvl6VWtZ8h6U6hNTjhmgoiPyiMS14P2jtqksT4iajkPqLraQzfyniU0WHG6qDVGFOzfGnZd2l9LN0GWW6sdN1IuTK9NhHaJ8PvfC12UsQDNx3wseAjvs2RFkZ1hq6ivS1DPy8%2FnZRqu8k8ZaJKF6swuWffBQ5wuWEd9mrIwZJ9zWjcqt5LlJn4B9oqoH9OpY8KWslf3tiVocgBfhkIVeDPNrYDH6BzDl%2BUXzL%2FIko%2FMJaqD5PgNw%2BHbc12VeZ7LQK9AJKb%2FC5xNfMZ3nBtKHft9bUU7iZ3Wht6EZV2srEtc89DtW8LQLldbWgNtgHA%2F%2FrN9Bidrd8dtObnvmITO2W8MCdTPeg%2BRN01%2FqAXWmt3WHMg8sqIB%2FzUx8eMelgcmZfL7wq%2F9J9qhGjqc2K1Bu2ckzXA6Maup2HB2uzvLORD66DgFJVMRS%2FAci0SGw8NSPDaIkMmojKDG2F1qkeusteloK9K6zauyflcqSCYzt7IogmBkTnWV98s8K%2Bg324SazefXiNK%2FB9ChwS1r9%2BaS%2FS2kJRN8lTesu3h8FRxDwjrL58l85%2FkSbp5kIGS2V3OudLOqMCa1vP0yL2%2BMd2DipekMLzK%2B8QGOqUBkQ1XtCtW0s5VfZbvX0YsZJ89Q%2BH5xuKES9nAq9iB90CdYoJ0caCDtNDsEYxQpE7n6SEwyM6BWn50Gts0HKyemOhrKyEV5rv8Y2MnScZC8xsNxRRiXglVwzmOJVDLPWjUX7BM%2BW66WBsmgjeQG9mf1wkN15FEHQvK7VZWM00rpBSc3pCfiFz%2Fkw93%2B57sppau4G%2BIRxh%2FfwYp5wL4aaEPpkkXTYW5&X-Amz-Signature=07b188b9e3e47202afd98161bd2e81dd6eb0fe27f81fc33380519826bd1d4a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUNGBE7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2BrmPqODL4uW8kPvenJy1AGb9N9scAMYTKYTAJzfmzoAIgLLlFiE7P%2BqPFivrIDLQccPVBjKKTnnkrSXoX8SnV4OYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIMffQDADtIrweOcHyrcAzH8dzMfOlN%2FJfcT3%2F8Q3Orr6YfjvjmE1%2F%2BhoeJvl6VWtZ8h6U6hNTjhmgoiPyiMS14P2jtqksT4iajkPqLraQzfyniU0WHG6qDVGFOzfGnZd2l9LN0GWW6sdN1IuTK9NhHaJ8PvfC12UsQDNx3wseAjvs2RFkZ1hq6ivS1DPy8%2FnZRqu8k8ZaJKF6swuWffBQ5wuWEd9mrIwZJ9zWjcqt5LlJn4B9oqoH9OpY8KWslf3tiVocgBfhkIVeDPNrYDH6BzDl%2BUXzL%2FIko%2FMJaqD5PgNw%2BHbc12VeZ7LQK9AJKb%2FC5xNfMZ3nBtKHft9bUU7iZ3Wht6EZV2srEtc89DtW8LQLldbWgNtgHA%2F%2FrN9Bidrd8dtObnvmITO2W8MCdTPeg%2BRN01%2FqAXWmt3WHMg8sqIB%2FzUx8eMelgcmZfL7wq%2F9J9qhGjqc2K1Bu2ckzXA6Maup2HB2uzvLORD66DgFJVMRS%2FAci0SGw8NSPDaIkMmojKDG2F1qkeusteloK9K6zauyflcqSCYzt7IogmBkTnWV98s8K%2Bg324SazefXiNK%2FB9ChwS1r9%2BaS%2FS2kJRN8lTesu3h8FRxDwjrL58l85%2FkSbp5kIGS2V3OudLOqMCa1vP0yL2%2BMd2DipekMLzK%2B8QGOqUBkQ1XtCtW0s5VfZbvX0YsZJ89Q%2BH5xuKES9nAq9iB90CdYoJ0caCDtNDsEYxQpE7n6SEwyM6BWn50Gts0HKyemOhrKyEV5rv8Y2MnScZC8xsNxRRiXglVwzmOJVDLPWjUX7BM%2BW66WBsmgjeQG9mf1wkN15FEHQvK7VZWM00rpBSc3pCfiFz%2Fkw93%2B57sppau4G%2BIRxh%2FfwYp5wL4aaEPpkkXTYW5&X-Amz-Signature=eeb037a4c7576b9d118b1b131326b6bd9a38dcca63fa8b1da46c40395c8f53df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUNGBE7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2BrmPqODL4uW8kPvenJy1AGb9N9scAMYTKYTAJzfmzoAIgLLlFiE7P%2BqPFivrIDLQccPVBjKKTnnkrSXoX8SnV4OYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIMffQDADtIrweOcHyrcAzH8dzMfOlN%2FJfcT3%2F8Q3Orr6YfjvjmE1%2F%2BhoeJvl6VWtZ8h6U6hNTjhmgoiPyiMS14P2jtqksT4iajkPqLraQzfyniU0WHG6qDVGFOzfGnZd2l9LN0GWW6sdN1IuTK9NhHaJ8PvfC12UsQDNx3wseAjvs2RFkZ1hq6ivS1DPy8%2FnZRqu8k8ZaJKF6swuWffBQ5wuWEd9mrIwZJ9zWjcqt5LlJn4B9oqoH9OpY8KWslf3tiVocgBfhkIVeDPNrYDH6BzDl%2BUXzL%2FIko%2FMJaqD5PgNw%2BHbc12VeZ7LQK9AJKb%2FC5xNfMZ3nBtKHft9bUU7iZ3Wht6EZV2srEtc89DtW8LQLldbWgNtgHA%2F%2FrN9Bidrd8dtObnvmITO2W8MCdTPeg%2BRN01%2FqAXWmt3WHMg8sqIB%2FzUx8eMelgcmZfL7wq%2F9J9qhGjqc2K1Bu2ckzXA6Maup2HB2uzvLORD66DgFJVMRS%2FAci0SGw8NSPDaIkMmojKDG2F1qkeusteloK9K6zauyflcqSCYzt7IogmBkTnWV98s8K%2Bg324SazefXiNK%2FB9ChwS1r9%2BaS%2FS2kJRN8lTesu3h8FRxDwjrL58l85%2FkSbp5kIGS2V3OudLOqMCa1vP0yL2%2BMd2DipekMLzK%2B8QGOqUBkQ1XtCtW0s5VfZbvX0YsZJ89Q%2BH5xuKES9nAq9iB90CdYoJ0caCDtNDsEYxQpE7n6SEwyM6BWn50Gts0HKyemOhrKyEV5rv8Y2MnScZC8xsNxRRiXglVwzmOJVDLPWjUX7BM%2BW66WBsmgjeQG9mf1wkN15FEHQvK7VZWM00rpBSc3pCfiFz%2Fkw93%2B57sppau4G%2BIRxh%2FfwYp5wL4aaEPpkkXTYW5&X-Amz-Signature=a82e43d70eb2fb5ce5db056df91f0907ea7c592bdaff7c6369fb30718761a5dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
