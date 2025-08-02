---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T10:24:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5LAHP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ3ju5ilgeNE1pxJ91BgXICGrfeHmDtejzNfAbJhjY5gIgVqQvRQQ7X%2BA5G8%2BGiRfW1uW9L%2BS9IuDpMkdxCIDw9fIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKKywHSO6f2nybF7%2FSrcA7lhgng9maLyvwCFD9TdPYlhDQo8He4BZsXAIH05EiMxNcYdoqc92i311IPBRvZ7GOIPOzJjuLn6N1gi69cRwCGWZtk4%2Bz4H6d9eCfL8p7Jjt20jdpeVqRrwoFa18QPGgIGSYlaeilML5zZEMItHg4tU%2F2WdfokT0YIYFc5aHLBka3%2ByfJesuP9wuwgIbeO6pEDEPAooUT0IqLg%2F7L7gg8jkp7yP0RaGIQpt0udNG7Lcn6V6WYMwldMHe%2B85oIameC%2BXfv%2FjdaeFok58AHSQ5uYev0rNlhztL5KWjOWWb%2F39SCowdrAHrXW7yBnA13Gnbr9FDvjVMz88mV1KgffSRZKQehjx4SxQAvOF%2Foz0mjwD8Z54j%2FbyG1Jb4HA1EzGIIo6ZMAoX%2BPQ3gG8SY2%2FzK%2F92lE6SjAFcDca2H5QcWxXlD3g3T%2FrMZjoJPWSv%2FGt3eEEgW%2FivrHWPziAMjlzBEGREkY8ebjNPoi87rB5Qxknyr1shn2pg1O2SbJmAc0CY6xlULMEx666cNyje13oYNH%2FDQLh5xkwXsA7Fql6%2FXg5ayg9UCdi%2FSlRhDa8SMkJgka46U%2B2cRg1rRA04C%2FzjG5yZY9S4c04obhESeczOWCTJRcPMo3hv7p%2Fn1FHdMOGAusQGOqUBR5WWGlSI%2B9uK4wEwyLC1Mow64IlEv4xRB8e%2BuXvkFv3%2FalXQyZZCHReCJ9yeDfYsmz%2FodAQNumpa0VKi7COpzfWdGNFBHHxhEvRqNLyS1M%2BTVvcbjFF00bHRqbFGHWfcAYmQa2nIqACi4iiCZdyfuMUl%2Bf8t%2BKkvYSKhTH44k7z8t79%2B11BrMfYHNhX2hbBQMBCh5%2BO%2BPKyADMXeVtZdQcJDIDiQ&X-Amz-Signature=343c8ae0d0611eedade8dcb1208b8cf86f9604ba6bffdb4aa492f658f5e43230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5LAHP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ3ju5ilgeNE1pxJ91BgXICGrfeHmDtejzNfAbJhjY5gIgVqQvRQQ7X%2BA5G8%2BGiRfW1uW9L%2BS9IuDpMkdxCIDw9fIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKKywHSO6f2nybF7%2FSrcA7lhgng9maLyvwCFD9TdPYlhDQo8He4BZsXAIH05EiMxNcYdoqc92i311IPBRvZ7GOIPOzJjuLn6N1gi69cRwCGWZtk4%2Bz4H6d9eCfL8p7Jjt20jdpeVqRrwoFa18QPGgIGSYlaeilML5zZEMItHg4tU%2F2WdfokT0YIYFc5aHLBka3%2ByfJesuP9wuwgIbeO6pEDEPAooUT0IqLg%2F7L7gg8jkp7yP0RaGIQpt0udNG7Lcn6V6WYMwldMHe%2B85oIameC%2BXfv%2FjdaeFok58AHSQ5uYev0rNlhztL5KWjOWWb%2F39SCowdrAHrXW7yBnA13Gnbr9FDvjVMz88mV1KgffSRZKQehjx4SxQAvOF%2Foz0mjwD8Z54j%2FbyG1Jb4HA1EzGIIo6ZMAoX%2BPQ3gG8SY2%2FzK%2F92lE6SjAFcDca2H5QcWxXlD3g3T%2FrMZjoJPWSv%2FGt3eEEgW%2FivrHWPziAMjlzBEGREkY8ebjNPoi87rB5Qxknyr1shn2pg1O2SbJmAc0CY6xlULMEx666cNyje13oYNH%2FDQLh5xkwXsA7Fql6%2FXg5ayg9UCdi%2FSlRhDa8SMkJgka46U%2B2cRg1rRA04C%2FzjG5yZY9S4c04obhESeczOWCTJRcPMo3hv7p%2Fn1FHdMOGAusQGOqUBR5WWGlSI%2B9uK4wEwyLC1Mow64IlEv4xRB8e%2BuXvkFv3%2FalXQyZZCHReCJ9yeDfYsmz%2FodAQNumpa0VKi7COpzfWdGNFBHHxhEvRqNLyS1M%2BTVvcbjFF00bHRqbFGHWfcAYmQa2nIqACi4iiCZdyfuMUl%2Bf8t%2BKkvYSKhTH44k7z8t79%2B11BrMfYHNhX2hbBQMBCh5%2BO%2BPKyADMXeVtZdQcJDIDiQ&X-Amz-Signature=d275f8e8f9e1efda7ebaaaa2db832a741740909fc7ced47fcea6ba640f276778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5LAHP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ3ju5ilgeNE1pxJ91BgXICGrfeHmDtejzNfAbJhjY5gIgVqQvRQQ7X%2BA5G8%2BGiRfW1uW9L%2BS9IuDpMkdxCIDw9fIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKKywHSO6f2nybF7%2FSrcA7lhgng9maLyvwCFD9TdPYlhDQo8He4BZsXAIH05EiMxNcYdoqc92i311IPBRvZ7GOIPOzJjuLn6N1gi69cRwCGWZtk4%2Bz4H6d9eCfL8p7Jjt20jdpeVqRrwoFa18QPGgIGSYlaeilML5zZEMItHg4tU%2F2WdfokT0YIYFc5aHLBka3%2ByfJesuP9wuwgIbeO6pEDEPAooUT0IqLg%2F7L7gg8jkp7yP0RaGIQpt0udNG7Lcn6V6WYMwldMHe%2B85oIameC%2BXfv%2FjdaeFok58AHSQ5uYev0rNlhztL5KWjOWWb%2F39SCowdrAHrXW7yBnA13Gnbr9FDvjVMz88mV1KgffSRZKQehjx4SxQAvOF%2Foz0mjwD8Z54j%2FbyG1Jb4HA1EzGIIo6ZMAoX%2BPQ3gG8SY2%2FzK%2F92lE6SjAFcDca2H5QcWxXlD3g3T%2FrMZjoJPWSv%2FGt3eEEgW%2FivrHWPziAMjlzBEGREkY8ebjNPoi87rB5Qxknyr1shn2pg1O2SbJmAc0CY6xlULMEx666cNyje13oYNH%2FDQLh5xkwXsA7Fql6%2FXg5ayg9UCdi%2FSlRhDa8SMkJgka46U%2B2cRg1rRA04C%2FzjG5yZY9S4c04obhESeczOWCTJRcPMo3hv7p%2Fn1FHdMOGAusQGOqUBR5WWGlSI%2B9uK4wEwyLC1Mow64IlEv4xRB8e%2BuXvkFv3%2FalXQyZZCHReCJ9yeDfYsmz%2FodAQNumpa0VKi7COpzfWdGNFBHHxhEvRqNLyS1M%2BTVvcbjFF00bHRqbFGHWfcAYmQa2nIqACi4iiCZdyfuMUl%2Bf8t%2BKkvYSKhTH44k7z8t79%2B11BrMfYHNhX2hbBQMBCh5%2BO%2BPKyADMXeVtZdQcJDIDiQ&X-Amz-Signature=6d0cc569e92298603bb89b6dd8c1781ca4352b1035c00c34e3f92bd68262bcef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5LAHP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ3ju5ilgeNE1pxJ91BgXICGrfeHmDtejzNfAbJhjY5gIgVqQvRQQ7X%2BA5G8%2BGiRfW1uW9L%2BS9IuDpMkdxCIDw9fIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKKywHSO6f2nybF7%2FSrcA7lhgng9maLyvwCFD9TdPYlhDQo8He4BZsXAIH05EiMxNcYdoqc92i311IPBRvZ7GOIPOzJjuLn6N1gi69cRwCGWZtk4%2Bz4H6d9eCfL8p7Jjt20jdpeVqRrwoFa18QPGgIGSYlaeilML5zZEMItHg4tU%2F2WdfokT0YIYFc5aHLBka3%2ByfJesuP9wuwgIbeO6pEDEPAooUT0IqLg%2F7L7gg8jkp7yP0RaGIQpt0udNG7Lcn6V6WYMwldMHe%2B85oIameC%2BXfv%2FjdaeFok58AHSQ5uYev0rNlhztL5KWjOWWb%2F39SCowdrAHrXW7yBnA13Gnbr9FDvjVMz88mV1KgffSRZKQehjx4SxQAvOF%2Foz0mjwD8Z54j%2FbyG1Jb4HA1EzGIIo6ZMAoX%2BPQ3gG8SY2%2FzK%2F92lE6SjAFcDca2H5QcWxXlD3g3T%2FrMZjoJPWSv%2FGt3eEEgW%2FivrHWPziAMjlzBEGREkY8ebjNPoi87rB5Qxknyr1shn2pg1O2SbJmAc0CY6xlULMEx666cNyje13oYNH%2FDQLh5xkwXsA7Fql6%2FXg5ayg9UCdi%2FSlRhDa8SMkJgka46U%2B2cRg1rRA04C%2FzjG5yZY9S4c04obhESeczOWCTJRcPMo3hv7p%2Fn1FHdMOGAusQGOqUBR5WWGlSI%2B9uK4wEwyLC1Mow64IlEv4xRB8e%2BuXvkFv3%2FalXQyZZCHReCJ9yeDfYsmz%2FodAQNumpa0VKi7COpzfWdGNFBHHxhEvRqNLyS1M%2BTVvcbjFF00bHRqbFGHWfcAYmQa2nIqACi4iiCZdyfuMUl%2Bf8t%2BKkvYSKhTH44k7z8t79%2B11BrMfYHNhX2hbBQMBCh5%2BO%2BPKyADMXeVtZdQcJDIDiQ&X-Amz-Signature=96ab57b5e613ce753801bcc455047939ac241c74b569b7f74cac2db179c44049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5LAHP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ3ju5ilgeNE1pxJ91BgXICGrfeHmDtejzNfAbJhjY5gIgVqQvRQQ7X%2BA5G8%2BGiRfW1uW9L%2BS9IuDpMkdxCIDw9fIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKKywHSO6f2nybF7%2FSrcA7lhgng9maLyvwCFD9TdPYlhDQo8He4BZsXAIH05EiMxNcYdoqc92i311IPBRvZ7GOIPOzJjuLn6N1gi69cRwCGWZtk4%2Bz4H6d9eCfL8p7Jjt20jdpeVqRrwoFa18QPGgIGSYlaeilML5zZEMItHg4tU%2F2WdfokT0YIYFc5aHLBka3%2ByfJesuP9wuwgIbeO6pEDEPAooUT0IqLg%2F7L7gg8jkp7yP0RaGIQpt0udNG7Lcn6V6WYMwldMHe%2B85oIameC%2BXfv%2FjdaeFok58AHSQ5uYev0rNlhztL5KWjOWWb%2F39SCowdrAHrXW7yBnA13Gnbr9FDvjVMz88mV1KgffSRZKQehjx4SxQAvOF%2Foz0mjwD8Z54j%2FbyG1Jb4HA1EzGIIo6ZMAoX%2BPQ3gG8SY2%2FzK%2F92lE6SjAFcDca2H5QcWxXlD3g3T%2FrMZjoJPWSv%2FGt3eEEgW%2FivrHWPziAMjlzBEGREkY8ebjNPoi87rB5Qxknyr1shn2pg1O2SbJmAc0CY6xlULMEx666cNyje13oYNH%2FDQLh5xkwXsA7Fql6%2FXg5ayg9UCdi%2FSlRhDa8SMkJgka46U%2B2cRg1rRA04C%2FzjG5yZY9S4c04obhESeczOWCTJRcPMo3hv7p%2Fn1FHdMOGAusQGOqUBR5WWGlSI%2B9uK4wEwyLC1Mow64IlEv4xRB8e%2BuXvkFv3%2FalXQyZZCHReCJ9yeDfYsmz%2FodAQNumpa0VKi7COpzfWdGNFBHHxhEvRqNLyS1M%2BTVvcbjFF00bHRqbFGHWfcAYmQa2nIqACi4iiCZdyfuMUl%2Bf8t%2BKkvYSKhTH44k7z8t79%2B11BrMfYHNhX2hbBQMBCh5%2BO%2BPKyADMXeVtZdQcJDIDiQ&X-Amz-Signature=b46c0cd0cee456dcfafea77efff85b4c6531815666967d09421a05e40d244f2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      ```python
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5LAHP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ3ju5ilgeNE1pxJ91BgXICGrfeHmDtejzNfAbJhjY5gIgVqQvRQQ7X%2BA5G8%2BGiRfW1uW9L%2BS9IuDpMkdxCIDw9fIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKKywHSO6f2nybF7%2FSrcA7lhgng9maLyvwCFD9TdPYlhDQo8He4BZsXAIH05EiMxNcYdoqc92i311IPBRvZ7GOIPOzJjuLn6N1gi69cRwCGWZtk4%2Bz4H6d9eCfL8p7Jjt20jdpeVqRrwoFa18QPGgIGSYlaeilML5zZEMItHg4tU%2F2WdfokT0YIYFc5aHLBka3%2ByfJesuP9wuwgIbeO6pEDEPAooUT0IqLg%2F7L7gg8jkp7yP0RaGIQpt0udNG7Lcn6V6WYMwldMHe%2B85oIameC%2BXfv%2FjdaeFok58AHSQ5uYev0rNlhztL5KWjOWWb%2F39SCowdrAHrXW7yBnA13Gnbr9FDvjVMz88mV1KgffSRZKQehjx4SxQAvOF%2Foz0mjwD8Z54j%2FbyG1Jb4HA1EzGIIo6ZMAoX%2BPQ3gG8SY2%2FzK%2F92lE6SjAFcDca2H5QcWxXlD3g3T%2FrMZjoJPWSv%2FGt3eEEgW%2FivrHWPziAMjlzBEGREkY8ebjNPoi87rB5Qxknyr1shn2pg1O2SbJmAc0CY6xlULMEx666cNyje13oYNH%2FDQLh5xkwXsA7Fql6%2FXg5ayg9UCdi%2FSlRhDa8SMkJgka46U%2B2cRg1rRA04C%2FzjG5yZY9S4c04obhESeczOWCTJRcPMo3hv7p%2Fn1FHdMOGAusQGOqUBR5WWGlSI%2B9uK4wEwyLC1Mow64IlEv4xRB8e%2BuXvkFv3%2FalXQyZZCHReCJ9yeDfYsmz%2FodAQNumpa0VKi7COpzfWdGNFBHHxhEvRqNLyS1M%2BTVvcbjFF00bHRqbFGHWfcAYmQa2nIqACi4iiCZdyfuMUl%2Bf8t%2BKkvYSKhTH44k7z8t79%2B11BrMfYHNhX2hbBQMBCh5%2BO%2BPKyADMXeVtZdQcJDIDiQ&X-Amz-Signature=0a1d697fff24cb923d72e983c807784c902e9359463b0fb7a6f5a9c4a8c07fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5LAHP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ3ju5ilgeNE1pxJ91BgXICGrfeHmDtejzNfAbJhjY5gIgVqQvRQQ7X%2BA5G8%2BGiRfW1uW9L%2BS9IuDpMkdxCIDw9fIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKKywHSO6f2nybF7%2FSrcA7lhgng9maLyvwCFD9TdPYlhDQo8He4BZsXAIH05EiMxNcYdoqc92i311IPBRvZ7GOIPOzJjuLn6N1gi69cRwCGWZtk4%2Bz4H6d9eCfL8p7Jjt20jdpeVqRrwoFa18QPGgIGSYlaeilML5zZEMItHg4tU%2F2WdfokT0YIYFc5aHLBka3%2ByfJesuP9wuwgIbeO6pEDEPAooUT0IqLg%2F7L7gg8jkp7yP0RaGIQpt0udNG7Lcn6V6WYMwldMHe%2B85oIameC%2BXfv%2FjdaeFok58AHSQ5uYev0rNlhztL5KWjOWWb%2F39SCowdrAHrXW7yBnA13Gnbr9FDvjVMz88mV1KgffSRZKQehjx4SxQAvOF%2Foz0mjwD8Z54j%2FbyG1Jb4HA1EzGIIo6ZMAoX%2BPQ3gG8SY2%2FzK%2F92lE6SjAFcDca2H5QcWxXlD3g3T%2FrMZjoJPWSv%2FGt3eEEgW%2FivrHWPziAMjlzBEGREkY8ebjNPoi87rB5Qxknyr1shn2pg1O2SbJmAc0CY6xlULMEx666cNyje13oYNH%2FDQLh5xkwXsA7Fql6%2FXg5ayg9UCdi%2FSlRhDa8SMkJgka46U%2B2cRg1rRA04C%2FzjG5yZY9S4c04obhESeczOWCTJRcPMo3hv7p%2Fn1FHdMOGAusQGOqUBR5WWGlSI%2B9uK4wEwyLC1Mow64IlEv4xRB8e%2BuXvkFv3%2FalXQyZZCHReCJ9yeDfYsmz%2FodAQNumpa0VKi7COpzfWdGNFBHHxhEvRqNLyS1M%2BTVvcbjFF00bHRqbFGHWfcAYmQa2nIqACi4iiCZdyfuMUl%2Bf8t%2BKkvYSKhTH44k7z8t79%2B11BrMfYHNhX2hbBQMBCh5%2BO%2BPKyADMXeVtZdQcJDIDiQ&X-Amz-Signature=3412bfb7659a496af506452fb41829818fe62cb5771de4aa2d14ba5d4fa46538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5LAHP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ3ju5ilgeNE1pxJ91BgXICGrfeHmDtejzNfAbJhjY5gIgVqQvRQQ7X%2BA5G8%2BGiRfW1uW9L%2BS9IuDpMkdxCIDw9fIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKKywHSO6f2nybF7%2FSrcA7lhgng9maLyvwCFD9TdPYlhDQo8He4BZsXAIH05EiMxNcYdoqc92i311IPBRvZ7GOIPOzJjuLn6N1gi69cRwCGWZtk4%2Bz4H6d9eCfL8p7Jjt20jdpeVqRrwoFa18QPGgIGSYlaeilML5zZEMItHg4tU%2F2WdfokT0YIYFc5aHLBka3%2ByfJesuP9wuwgIbeO6pEDEPAooUT0IqLg%2F7L7gg8jkp7yP0RaGIQpt0udNG7Lcn6V6WYMwldMHe%2B85oIameC%2BXfv%2FjdaeFok58AHSQ5uYev0rNlhztL5KWjOWWb%2F39SCowdrAHrXW7yBnA13Gnbr9FDvjVMz88mV1KgffSRZKQehjx4SxQAvOF%2Foz0mjwD8Z54j%2FbyG1Jb4HA1EzGIIo6ZMAoX%2BPQ3gG8SY2%2FzK%2F92lE6SjAFcDca2H5QcWxXlD3g3T%2FrMZjoJPWSv%2FGt3eEEgW%2FivrHWPziAMjlzBEGREkY8ebjNPoi87rB5Qxknyr1shn2pg1O2SbJmAc0CY6xlULMEx666cNyje13oYNH%2FDQLh5xkwXsA7Fql6%2FXg5ayg9UCdi%2FSlRhDa8SMkJgka46U%2B2cRg1rRA04C%2FzjG5yZY9S4c04obhESeczOWCTJRcPMo3hv7p%2Fn1FHdMOGAusQGOqUBR5WWGlSI%2B9uK4wEwyLC1Mow64IlEv4xRB8e%2BuXvkFv3%2FalXQyZZCHReCJ9yeDfYsmz%2FodAQNumpa0VKi7COpzfWdGNFBHHxhEvRqNLyS1M%2BTVvcbjFF00bHRqbFGHWfcAYmQa2nIqACi4iiCZdyfuMUl%2Bf8t%2BKkvYSKhTH44k7z8t79%2B11BrMfYHNhX2hbBQMBCh5%2BO%2BPKyADMXeVtZdQcJDIDiQ&X-Amz-Signature=066be1b3a725941f5424e94191ce0281ca08d1321b85fa68f51f4475a2df9350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5LAHP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ3ju5ilgeNE1pxJ91BgXICGrfeHmDtejzNfAbJhjY5gIgVqQvRQQ7X%2BA5G8%2BGiRfW1uW9L%2BS9IuDpMkdxCIDw9fIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKKywHSO6f2nybF7%2FSrcA7lhgng9maLyvwCFD9TdPYlhDQo8He4BZsXAIH05EiMxNcYdoqc92i311IPBRvZ7GOIPOzJjuLn6N1gi69cRwCGWZtk4%2Bz4H6d9eCfL8p7Jjt20jdpeVqRrwoFa18QPGgIGSYlaeilML5zZEMItHg4tU%2F2WdfokT0YIYFc5aHLBka3%2ByfJesuP9wuwgIbeO6pEDEPAooUT0IqLg%2F7L7gg8jkp7yP0RaGIQpt0udNG7Lcn6V6WYMwldMHe%2B85oIameC%2BXfv%2FjdaeFok58AHSQ5uYev0rNlhztL5KWjOWWb%2F39SCowdrAHrXW7yBnA13Gnbr9FDvjVMz88mV1KgffSRZKQehjx4SxQAvOF%2Foz0mjwD8Z54j%2FbyG1Jb4HA1EzGIIo6ZMAoX%2BPQ3gG8SY2%2FzK%2F92lE6SjAFcDca2H5QcWxXlD3g3T%2FrMZjoJPWSv%2FGt3eEEgW%2FivrHWPziAMjlzBEGREkY8ebjNPoi87rB5Qxknyr1shn2pg1O2SbJmAc0CY6xlULMEx666cNyje13oYNH%2FDQLh5xkwXsA7Fql6%2FXg5ayg9UCdi%2FSlRhDa8SMkJgka46U%2B2cRg1rRA04C%2FzjG5yZY9S4c04obhESeczOWCTJRcPMo3hv7p%2Fn1FHdMOGAusQGOqUBR5WWGlSI%2B9uK4wEwyLC1Mow64IlEv4xRB8e%2BuXvkFv3%2FalXQyZZCHReCJ9yeDfYsmz%2FodAQNumpa0VKi7COpzfWdGNFBHHxhEvRqNLyS1M%2BTVvcbjFF00bHRqbFGHWfcAYmQa2nIqACi4iiCZdyfuMUl%2Bf8t%2BKkvYSKhTH44k7z8t79%2B11BrMfYHNhX2hbBQMBCh5%2BO%2BPKyADMXeVtZdQcJDIDiQ&X-Amz-Signature=d331c0b81cf00ca80a119d22284eb5859fec0f64b3174c408a2eeb73d95ed398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5LAHP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ3ju5ilgeNE1pxJ91BgXICGrfeHmDtejzNfAbJhjY5gIgVqQvRQQ7X%2BA5G8%2BGiRfW1uW9L%2BS9IuDpMkdxCIDw9fIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKKywHSO6f2nybF7%2FSrcA7lhgng9maLyvwCFD9TdPYlhDQo8He4BZsXAIH05EiMxNcYdoqc92i311IPBRvZ7GOIPOzJjuLn6N1gi69cRwCGWZtk4%2Bz4H6d9eCfL8p7Jjt20jdpeVqRrwoFa18QPGgIGSYlaeilML5zZEMItHg4tU%2F2WdfokT0YIYFc5aHLBka3%2ByfJesuP9wuwgIbeO6pEDEPAooUT0IqLg%2F7L7gg8jkp7yP0RaGIQpt0udNG7Lcn6V6WYMwldMHe%2B85oIameC%2BXfv%2FjdaeFok58AHSQ5uYev0rNlhztL5KWjOWWb%2F39SCowdrAHrXW7yBnA13Gnbr9FDvjVMz88mV1KgffSRZKQehjx4SxQAvOF%2Foz0mjwD8Z54j%2FbyG1Jb4HA1EzGIIo6ZMAoX%2BPQ3gG8SY2%2FzK%2F92lE6SjAFcDca2H5QcWxXlD3g3T%2FrMZjoJPWSv%2FGt3eEEgW%2FivrHWPziAMjlzBEGREkY8ebjNPoi87rB5Qxknyr1shn2pg1O2SbJmAc0CY6xlULMEx666cNyje13oYNH%2FDQLh5xkwXsA7Fql6%2FXg5ayg9UCdi%2FSlRhDa8SMkJgka46U%2B2cRg1rRA04C%2FzjG5yZY9S4c04obhESeczOWCTJRcPMo3hv7p%2Fn1FHdMOGAusQGOqUBR5WWGlSI%2B9uK4wEwyLC1Mow64IlEv4xRB8e%2BuXvkFv3%2FalXQyZZCHReCJ9yeDfYsmz%2FodAQNumpa0VKi7COpzfWdGNFBHHxhEvRqNLyS1M%2BTVvcbjFF00bHRqbFGHWfcAYmQa2nIqACi4iiCZdyfuMUl%2Bf8t%2BKkvYSKhTH44k7z8t79%2B11BrMfYHNhX2hbBQMBCh5%2BO%2BPKyADMXeVtZdQcJDIDiQ&X-Amz-Signature=be19b84f2dc18ba2e65fd61b98bb3a091c95265df40c334df56890b387f875e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKDAV6T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq26zw%2F1vFK2IB98z8jIxr6FqAKizRXTY6ccZ96128aQIgQDayTyHAXg%2Bq9WyUTKeGY9h2Xh%2F1NOczsB1KalWRJ3Mq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDG8KfrOvHezzllzj1ircAyE3oK8x6M66XR5t23Hnzj2rZQBCXm6%2Bg1%2BemdDvQAmnzTFq3Lq6CZT0SpTF7fqlguRDP%2BFMyBSMTN0KL5yne9LqZw05%2BDg7I%2B1qAT7WAwhmmdQtqjtWf0EzIOl5ztYX3AOarAER1dgrLQEZnvGz2eIKzzcIWDufGGdXIzOpTBGBo3rrYnz%2B01o5xLPXcBhoKUBGm1UKbE1ZLu%2FLtPex4uBvcI4wDaSoZOU0D71dRh5gVZ5bWQ5DNxMPnkCWqzbcwaKnaVxJM51N%2FfLOy%2BOZtVV0D9f%2F1J5rqODIesnHVFCtdO2lsJabGqkZU%2Fv2GNmIoG9xoOBUfWLpJUNv9UnnWln8Rw7kGF905FKAS2P%2B2nM6%2BtYzFG0KwPUncHJPaeLmPf75USu5BbNNRAoVBCactSH8Xdvs9tkhQtwtYobd%2FvwMIYVSaoIHEImloGvr77MCAJmkEl9W5XaGUozrkqRSCuW8Qmu4J54UzwTXjPOCYnic6wqa4ZWKlRYedidOSZVqXbanmUoJtigzpnFWu4hy725X281VMsrpE85hPDK8F8Ife3qEzvz5BVXv0dUS%2FpIC7rs8NR3%2F%2BWLCfc9S3RYW%2B4ymrTZGTjUocbPIkzMSbx6MJRuvbvfPoHyvt1lgMPOAusQGOqUBNJaHJLBSSGIMgxtfMxlFpJQkulERng45zJdXXiJW%2F2tjC2LoqhVBqmLm8oGyeEkpuTcrP%2F1dMh0vqB5c8ghEu2fOd2gsBzCmUxo4Jkka%2BGo4x4fd2%2BcuWccsEcoUvbmLa1Se%2FS0jnFsM4EqIKvEniBpCrk3vweymiY2eTTXxDW8%2FGP8xglcJKxCN1Jekld%2B7H%2BtzXk5BF0XR7%2FtSDMJQ3Xy2jIys&X-Amz-Signature=88d1f1d692f6a07d9c321813705189999ff4280d77bb72efd48e7e98f1b89970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5LAHP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ3ju5ilgeNE1pxJ91BgXICGrfeHmDtejzNfAbJhjY5gIgVqQvRQQ7X%2BA5G8%2BGiRfW1uW9L%2BS9IuDpMkdxCIDw9fIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKKywHSO6f2nybF7%2FSrcA7lhgng9maLyvwCFD9TdPYlhDQo8He4BZsXAIH05EiMxNcYdoqc92i311IPBRvZ7GOIPOzJjuLn6N1gi69cRwCGWZtk4%2Bz4H6d9eCfL8p7Jjt20jdpeVqRrwoFa18QPGgIGSYlaeilML5zZEMItHg4tU%2F2WdfokT0YIYFc5aHLBka3%2ByfJesuP9wuwgIbeO6pEDEPAooUT0IqLg%2F7L7gg8jkp7yP0RaGIQpt0udNG7Lcn6V6WYMwldMHe%2B85oIameC%2BXfv%2FjdaeFok58AHSQ5uYev0rNlhztL5KWjOWWb%2F39SCowdrAHrXW7yBnA13Gnbr9FDvjVMz88mV1KgffSRZKQehjx4SxQAvOF%2Foz0mjwD8Z54j%2FbyG1Jb4HA1EzGIIo6ZMAoX%2BPQ3gG8SY2%2FzK%2F92lE6SjAFcDca2H5QcWxXlD3g3T%2FrMZjoJPWSv%2FGt3eEEgW%2FivrHWPziAMjlzBEGREkY8ebjNPoi87rB5Qxknyr1shn2pg1O2SbJmAc0CY6xlULMEx666cNyje13oYNH%2FDQLh5xkwXsA7Fql6%2FXg5ayg9UCdi%2FSlRhDa8SMkJgka46U%2B2cRg1rRA04C%2FzjG5yZY9S4c04obhESeczOWCTJRcPMo3hv7p%2Fn1FHdMOGAusQGOqUBR5WWGlSI%2B9uK4wEwyLC1Mow64IlEv4xRB8e%2BuXvkFv3%2FalXQyZZCHReCJ9yeDfYsmz%2FodAQNumpa0VKi7COpzfWdGNFBHHxhEvRqNLyS1M%2BTVvcbjFF00bHRqbFGHWfcAYmQa2nIqACi4iiCZdyfuMUl%2Bf8t%2BKkvYSKhTH44k7z8t79%2B11BrMfYHNhX2hbBQMBCh5%2BO%2BPKyADMXeVtZdQcJDIDiQ&X-Amz-Signature=bb665257f6a609f9fe0f6c3f6f5ea375dec49a29944abd0256062c6814ecf6fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XEYNHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb8KR%2F%2F1%2BIu8fF%2Bo4cnAdKbmuVMK10DLIbBBjpjAvDOAIhAMLhBQlMNG6qg2zrETZSmPggvmsTptZE%2BP4Ylaf3xtSsKv8DCB4QABoMNjM3NDIzMTgzODA1Igw%2BxHsBzRO%2FLkTPg10q3ANruOIxYEIteSeW0csLB%2FE0QB0A4OfqZUCibPF45p%2BnE%2Bzs7ixfD%2FdYfOTjP8zQDNfFUUcxhGOCvjiTybKy8WelBKZ0ZzuTD7MxYQoBy8wlIwdFHMiJN8GTFGNYGW4l3u3kDabVMYTVQ3UCC95JR%2BK%2F2ik1aLzBfWj9v%2Bqhf8tCsn%2BQrX1GbN4cdKXXO4xtIw1GjLRZmeeVVn90ZKnFJc37kqN2BLb7fhlEBXDdvQ%2FuRCd0XrIkf26PXjz3NpVV1aGPzs%2Fvo9pXuWxurYNq%2B0ccQ1cUzzbnvcrvbbenrkExVspM8uu%2FiyBLjwltj6WxxTAuYxV2ZIpxqv1jHGGAS4%2BserBIeQA%2FRPEIdX3noAaB4ihBIVBDR3flMCepZ7rWeRtqq3TeEbm85PrcNBc0Y7%2BVsATfChcmqG7sUXaaNs%2FRIvX%2F3b9%2FwS%2BrLFzA4HOVrWzocPvFb79aDv5YrmewZxfH4yiI%2BkgHGmWsiqnpfMPlUq091EcGo9qDvcKMT2hgpoL5LfbIchmHevMSVOH0ADJvZJmfMmwI9oFs6NsoWNMmBMcTX5Ygo1P0srBcsbDj7aYnf8MAplgAJj8oVts5L1xkGrlvQy8EuihCjms%2BtsTUCkXVu0uteqHhqu%2F%2BoTDPgLrEBjqkAcDXjj3O5kohTijsLh5hjwyIOkImY3pO4JH8vW%2BHowDIwvWSz%2BE07cBpGlup2zsItNX9sOzUcM0DXeavRjcn2l2zl7KNIcAjG5YKjWopFLXnFsCs%2Ft4aPR2IKQFnsDdVdcsPpE4GaezaCGmfcI6q7YdXbVcQ%2FQoTznH%2BY4Ee1GQaL8dAnVeJv9zebvWLaQ8O%2Bc%2B1sETJGhCb9jUpBJDU6YtP6Fmt&X-Amz-Signature=61a848dd76d021dce3d49a7bbb62b91ae1085947cfb2bcada00ad00e28a7ae6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XEYNHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb8KR%2F%2F1%2BIu8fF%2Bo4cnAdKbmuVMK10DLIbBBjpjAvDOAIhAMLhBQlMNG6qg2zrETZSmPggvmsTptZE%2BP4Ylaf3xtSsKv8DCB4QABoMNjM3NDIzMTgzODA1Igw%2BxHsBzRO%2FLkTPg10q3ANruOIxYEIteSeW0csLB%2FE0QB0A4OfqZUCibPF45p%2BnE%2Bzs7ixfD%2FdYfOTjP8zQDNfFUUcxhGOCvjiTybKy8WelBKZ0ZzuTD7MxYQoBy8wlIwdFHMiJN8GTFGNYGW4l3u3kDabVMYTVQ3UCC95JR%2BK%2F2ik1aLzBfWj9v%2Bqhf8tCsn%2BQrX1GbN4cdKXXO4xtIw1GjLRZmeeVVn90ZKnFJc37kqN2BLb7fhlEBXDdvQ%2FuRCd0XrIkf26PXjz3NpVV1aGPzs%2Fvo9pXuWxurYNq%2B0ccQ1cUzzbnvcrvbbenrkExVspM8uu%2FiyBLjwltj6WxxTAuYxV2ZIpxqv1jHGGAS4%2BserBIeQA%2FRPEIdX3noAaB4ihBIVBDR3flMCepZ7rWeRtqq3TeEbm85PrcNBc0Y7%2BVsATfChcmqG7sUXaaNs%2FRIvX%2F3b9%2FwS%2BrLFzA4HOVrWzocPvFb79aDv5YrmewZxfH4yiI%2BkgHGmWsiqnpfMPlUq091EcGo9qDvcKMT2hgpoL5LfbIchmHevMSVOH0ADJvZJmfMmwI9oFs6NsoWNMmBMcTX5Ygo1P0srBcsbDj7aYnf8MAplgAJj8oVts5L1xkGrlvQy8EuihCjms%2BtsTUCkXVu0uteqHhqu%2F%2BoTDPgLrEBjqkAcDXjj3O5kohTijsLh5hjwyIOkImY3pO4JH8vW%2BHowDIwvWSz%2BE07cBpGlup2zsItNX9sOzUcM0DXeavRjcn2l2zl7KNIcAjG5YKjWopFLXnFsCs%2Ft4aPR2IKQFnsDdVdcsPpE4GaezaCGmfcI6q7YdXbVcQ%2FQoTznH%2BY4Ee1GQaL8dAnVeJv9zebvWLaQ8O%2Bc%2B1sETJGhCb9jUpBJDU6YtP6Fmt&X-Amz-Signature=5bbf2486cd22e839ae3d7fd21429a970fa0f8079d57d43830debc93cbbc18f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XEYNHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb8KR%2F%2F1%2BIu8fF%2Bo4cnAdKbmuVMK10DLIbBBjpjAvDOAIhAMLhBQlMNG6qg2zrETZSmPggvmsTptZE%2BP4Ylaf3xtSsKv8DCB4QABoMNjM3NDIzMTgzODA1Igw%2BxHsBzRO%2FLkTPg10q3ANruOIxYEIteSeW0csLB%2FE0QB0A4OfqZUCibPF45p%2BnE%2Bzs7ixfD%2FdYfOTjP8zQDNfFUUcxhGOCvjiTybKy8WelBKZ0ZzuTD7MxYQoBy8wlIwdFHMiJN8GTFGNYGW4l3u3kDabVMYTVQ3UCC95JR%2BK%2F2ik1aLzBfWj9v%2Bqhf8tCsn%2BQrX1GbN4cdKXXO4xtIw1GjLRZmeeVVn90ZKnFJc37kqN2BLb7fhlEBXDdvQ%2FuRCd0XrIkf26PXjz3NpVV1aGPzs%2Fvo9pXuWxurYNq%2B0ccQ1cUzzbnvcrvbbenrkExVspM8uu%2FiyBLjwltj6WxxTAuYxV2ZIpxqv1jHGGAS4%2BserBIeQA%2FRPEIdX3noAaB4ihBIVBDR3flMCepZ7rWeRtqq3TeEbm85PrcNBc0Y7%2BVsATfChcmqG7sUXaaNs%2FRIvX%2F3b9%2FwS%2BrLFzA4HOVrWzocPvFb79aDv5YrmewZxfH4yiI%2BkgHGmWsiqnpfMPlUq091EcGo9qDvcKMT2hgpoL5LfbIchmHevMSVOH0ADJvZJmfMmwI9oFs6NsoWNMmBMcTX5Ygo1P0srBcsbDj7aYnf8MAplgAJj8oVts5L1xkGrlvQy8EuihCjms%2BtsTUCkXVu0uteqHhqu%2F%2BoTDPgLrEBjqkAcDXjj3O5kohTijsLh5hjwyIOkImY3pO4JH8vW%2BHowDIwvWSz%2BE07cBpGlup2zsItNX9sOzUcM0DXeavRjcn2l2zl7KNIcAjG5YKjWopFLXnFsCs%2Ft4aPR2IKQFnsDdVdcsPpE4GaezaCGmfcI6q7YdXbVcQ%2FQoTznH%2BY4Ee1GQaL8dAnVeJv9zebvWLaQ8O%2Bc%2B1sETJGhCb9jUpBJDU6YtP6Fmt&X-Amz-Signature=4d45951572bdfb5b3709b78951e3e533d4af7d8cba6018be7f91096a6f609bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XEYNHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb8KR%2F%2F1%2BIu8fF%2Bo4cnAdKbmuVMK10DLIbBBjpjAvDOAIhAMLhBQlMNG6qg2zrETZSmPggvmsTptZE%2BP4Ylaf3xtSsKv8DCB4QABoMNjM3NDIzMTgzODA1Igw%2BxHsBzRO%2FLkTPg10q3ANruOIxYEIteSeW0csLB%2FE0QB0A4OfqZUCibPF45p%2BnE%2Bzs7ixfD%2FdYfOTjP8zQDNfFUUcxhGOCvjiTybKy8WelBKZ0ZzuTD7MxYQoBy8wlIwdFHMiJN8GTFGNYGW4l3u3kDabVMYTVQ3UCC95JR%2BK%2F2ik1aLzBfWj9v%2Bqhf8tCsn%2BQrX1GbN4cdKXXO4xtIw1GjLRZmeeVVn90ZKnFJc37kqN2BLb7fhlEBXDdvQ%2FuRCd0XrIkf26PXjz3NpVV1aGPzs%2Fvo9pXuWxurYNq%2B0ccQ1cUzzbnvcrvbbenrkExVspM8uu%2FiyBLjwltj6WxxTAuYxV2ZIpxqv1jHGGAS4%2BserBIeQA%2FRPEIdX3noAaB4ihBIVBDR3flMCepZ7rWeRtqq3TeEbm85PrcNBc0Y7%2BVsATfChcmqG7sUXaaNs%2FRIvX%2F3b9%2FwS%2BrLFzA4HOVrWzocPvFb79aDv5YrmewZxfH4yiI%2BkgHGmWsiqnpfMPlUq091EcGo9qDvcKMT2hgpoL5LfbIchmHevMSVOH0ADJvZJmfMmwI9oFs6NsoWNMmBMcTX5Ygo1P0srBcsbDj7aYnf8MAplgAJj8oVts5L1xkGrlvQy8EuihCjms%2BtsTUCkXVu0uteqHhqu%2F%2BoTDPgLrEBjqkAcDXjj3O5kohTijsLh5hjwyIOkImY3pO4JH8vW%2BHowDIwvWSz%2BE07cBpGlup2zsItNX9sOzUcM0DXeavRjcn2l2zl7KNIcAjG5YKjWopFLXnFsCs%2Ft4aPR2IKQFnsDdVdcsPpE4GaezaCGmfcI6q7YdXbVcQ%2FQoTznH%2BY4Ee1GQaL8dAnVeJv9zebvWLaQ8O%2Bc%2B1sETJGhCb9jUpBJDU6YtP6Fmt&X-Amz-Signature=5030c2c304d8ed78f48da567ee0b1ed148e3ffdc47d1c0f0218eb67268a9f368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XEYNHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb8KR%2F%2F1%2BIu8fF%2Bo4cnAdKbmuVMK10DLIbBBjpjAvDOAIhAMLhBQlMNG6qg2zrETZSmPggvmsTptZE%2BP4Ylaf3xtSsKv8DCB4QABoMNjM3NDIzMTgzODA1Igw%2BxHsBzRO%2FLkTPg10q3ANruOIxYEIteSeW0csLB%2FE0QB0A4OfqZUCibPF45p%2BnE%2Bzs7ixfD%2FdYfOTjP8zQDNfFUUcxhGOCvjiTybKy8WelBKZ0ZzuTD7MxYQoBy8wlIwdFHMiJN8GTFGNYGW4l3u3kDabVMYTVQ3UCC95JR%2BK%2F2ik1aLzBfWj9v%2Bqhf8tCsn%2BQrX1GbN4cdKXXO4xtIw1GjLRZmeeVVn90ZKnFJc37kqN2BLb7fhlEBXDdvQ%2FuRCd0XrIkf26PXjz3NpVV1aGPzs%2Fvo9pXuWxurYNq%2B0ccQ1cUzzbnvcrvbbenrkExVspM8uu%2FiyBLjwltj6WxxTAuYxV2ZIpxqv1jHGGAS4%2BserBIeQA%2FRPEIdX3noAaB4ihBIVBDR3flMCepZ7rWeRtqq3TeEbm85PrcNBc0Y7%2BVsATfChcmqG7sUXaaNs%2FRIvX%2F3b9%2FwS%2BrLFzA4HOVrWzocPvFb79aDv5YrmewZxfH4yiI%2BkgHGmWsiqnpfMPlUq091EcGo9qDvcKMT2hgpoL5LfbIchmHevMSVOH0ADJvZJmfMmwI9oFs6NsoWNMmBMcTX5Ygo1P0srBcsbDj7aYnf8MAplgAJj8oVts5L1xkGrlvQy8EuihCjms%2BtsTUCkXVu0uteqHhqu%2F%2BoTDPgLrEBjqkAcDXjj3O5kohTijsLh5hjwyIOkImY3pO4JH8vW%2BHowDIwvWSz%2BE07cBpGlup2zsItNX9sOzUcM0DXeavRjcn2l2zl7KNIcAjG5YKjWopFLXnFsCs%2Ft4aPR2IKQFnsDdVdcsPpE4GaezaCGmfcI6q7YdXbVcQ%2FQoTznH%2BY4Ee1GQaL8dAnVeJv9zebvWLaQ8O%2Bc%2B1sETJGhCb9jUpBJDU6YtP6Fmt&X-Amz-Signature=7bc7737a73c01298154a6ffd56813383118402beb647e87615e981e5b1d224cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XEYNHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb8KR%2F%2F1%2BIu8fF%2Bo4cnAdKbmuVMK10DLIbBBjpjAvDOAIhAMLhBQlMNG6qg2zrETZSmPggvmsTptZE%2BP4Ylaf3xtSsKv8DCB4QABoMNjM3NDIzMTgzODA1Igw%2BxHsBzRO%2FLkTPg10q3ANruOIxYEIteSeW0csLB%2FE0QB0A4OfqZUCibPF45p%2BnE%2Bzs7ixfD%2FdYfOTjP8zQDNfFUUcxhGOCvjiTybKy8WelBKZ0ZzuTD7MxYQoBy8wlIwdFHMiJN8GTFGNYGW4l3u3kDabVMYTVQ3UCC95JR%2BK%2F2ik1aLzBfWj9v%2Bqhf8tCsn%2BQrX1GbN4cdKXXO4xtIw1GjLRZmeeVVn90ZKnFJc37kqN2BLb7fhlEBXDdvQ%2FuRCd0XrIkf26PXjz3NpVV1aGPzs%2Fvo9pXuWxurYNq%2B0ccQ1cUzzbnvcrvbbenrkExVspM8uu%2FiyBLjwltj6WxxTAuYxV2ZIpxqv1jHGGAS4%2BserBIeQA%2FRPEIdX3noAaB4ihBIVBDR3flMCepZ7rWeRtqq3TeEbm85PrcNBc0Y7%2BVsATfChcmqG7sUXaaNs%2FRIvX%2F3b9%2FwS%2BrLFzA4HOVrWzocPvFb79aDv5YrmewZxfH4yiI%2BkgHGmWsiqnpfMPlUq091EcGo9qDvcKMT2hgpoL5LfbIchmHevMSVOH0ADJvZJmfMmwI9oFs6NsoWNMmBMcTX5Ygo1P0srBcsbDj7aYnf8MAplgAJj8oVts5L1xkGrlvQy8EuihCjms%2BtsTUCkXVu0uteqHhqu%2F%2BoTDPgLrEBjqkAcDXjj3O5kohTijsLh5hjwyIOkImY3pO4JH8vW%2BHowDIwvWSz%2BE07cBpGlup2zsItNX9sOzUcM0DXeavRjcn2l2zl7KNIcAjG5YKjWopFLXnFsCs%2Ft4aPR2IKQFnsDdVdcsPpE4GaezaCGmfcI6q7YdXbVcQ%2FQoTznH%2BY4Ee1GQaL8dAnVeJv9zebvWLaQ8O%2Bc%2B1sETJGhCb9jUpBJDU6YtP6Fmt&X-Amz-Signature=d75695c5c8ac76994d24b54498cd5e53d0531be9860d7f50f1a7f3df795000bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XEYNHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb8KR%2F%2F1%2BIu8fF%2Bo4cnAdKbmuVMK10DLIbBBjpjAvDOAIhAMLhBQlMNG6qg2zrETZSmPggvmsTptZE%2BP4Ylaf3xtSsKv8DCB4QABoMNjM3NDIzMTgzODA1Igw%2BxHsBzRO%2FLkTPg10q3ANruOIxYEIteSeW0csLB%2FE0QB0A4OfqZUCibPF45p%2BnE%2Bzs7ixfD%2FdYfOTjP8zQDNfFUUcxhGOCvjiTybKy8WelBKZ0ZzuTD7MxYQoBy8wlIwdFHMiJN8GTFGNYGW4l3u3kDabVMYTVQ3UCC95JR%2BK%2F2ik1aLzBfWj9v%2Bqhf8tCsn%2BQrX1GbN4cdKXXO4xtIw1GjLRZmeeVVn90ZKnFJc37kqN2BLb7fhlEBXDdvQ%2FuRCd0XrIkf26PXjz3NpVV1aGPzs%2Fvo9pXuWxurYNq%2B0ccQ1cUzzbnvcrvbbenrkExVspM8uu%2FiyBLjwltj6WxxTAuYxV2ZIpxqv1jHGGAS4%2BserBIeQA%2FRPEIdX3noAaB4ihBIVBDR3flMCepZ7rWeRtqq3TeEbm85PrcNBc0Y7%2BVsATfChcmqG7sUXaaNs%2FRIvX%2F3b9%2FwS%2BrLFzA4HOVrWzocPvFb79aDv5YrmewZxfH4yiI%2BkgHGmWsiqnpfMPlUq091EcGo9qDvcKMT2hgpoL5LfbIchmHevMSVOH0ADJvZJmfMmwI9oFs6NsoWNMmBMcTX5Ygo1P0srBcsbDj7aYnf8MAplgAJj8oVts5L1xkGrlvQy8EuihCjms%2BtsTUCkXVu0uteqHhqu%2F%2BoTDPgLrEBjqkAcDXjj3O5kohTijsLh5hjwyIOkImY3pO4JH8vW%2BHowDIwvWSz%2BE07cBpGlup2zsItNX9sOzUcM0DXeavRjcn2l2zl7KNIcAjG5YKjWopFLXnFsCs%2Ft4aPR2IKQFnsDdVdcsPpE4GaezaCGmfcI6q7YdXbVcQ%2FQoTznH%2BY4Ee1GQaL8dAnVeJv9zebvWLaQ8O%2Bc%2B1sETJGhCb9jUpBJDU6YtP6Fmt&X-Amz-Signature=311c50b0b96e6dd7bc295214842d3ec59136201a591f6872026d0d8630337897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XEYNHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb8KR%2F%2F1%2BIu8fF%2Bo4cnAdKbmuVMK10DLIbBBjpjAvDOAIhAMLhBQlMNG6qg2zrETZSmPggvmsTptZE%2BP4Ylaf3xtSsKv8DCB4QABoMNjM3NDIzMTgzODA1Igw%2BxHsBzRO%2FLkTPg10q3ANruOIxYEIteSeW0csLB%2FE0QB0A4OfqZUCibPF45p%2BnE%2Bzs7ixfD%2FdYfOTjP8zQDNfFUUcxhGOCvjiTybKy8WelBKZ0ZzuTD7MxYQoBy8wlIwdFHMiJN8GTFGNYGW4l3u3kDabVMYTVQ3UCC95JR%2BK%2F2ik1aLzBfWj9v%2Bqhf8tCsn%2BQrX1GbN4cdKXXO4xtIw1GjLRZmeeVVn90ZKnFJc37kqN2BLb7fhlEBXDdvQ%2FuRCd0XrIkf26PXjz3NpVV1aGPzs%2Fvo9pXuWxurYNq%2B0ccQ1cUzzbnvcrvbbenrkExVspM8uu%2FiyBLjwltj6WxxTAuYxV2ZIpxqv1jHGGAS4%2BserBIeQA%2FRPEIdX3noAaB4ihBIVBDR3flMCepZ7rWeRtqq3TeEbm85PrcNBc0Y7%2BVsATfChcmqG7sUXaaNs%2FRIvX%2F3b9%2FwS%2BrLFzA4HOVrWzocPvFb79aDv5YrmewZxfH4yiI%2BkgHGmWsiqnpfMPlUq091EcGo9qDvcKMT2hgpoL5LfbIchmHevMSVOH0ADJvZJmfMmwI9oFs6NsoWNMmBMcTX5Ygo1P0srBcsbDj7aYnf8MAplgAJj8oVts5L1xkGrlvQy8EuihCjms%2BtsTUCkXVu0uteqHhqu%2F%2BoTDPgLrEBjqkAcDXjj3O5kohTijsLh5hjwyIOkImY3pO4JH8vW%2BHowDIwvWSz%2BE07cBpGlup2zsItNX9sOzUcM0DXeavRjcn2l2zl7KNIcAjG5YKjWopFLXnFsCs%2Ft4aPR2IKQFnsDdVdcsPpE4GaezaCGmfcI6q7YdXbVcQ%2FQoTznH%2BY4Ee1GQaL8dAnVeJv9zebvWLaQ8O%2Bc%2B1sETJGhCb9jUpBJDU6YtP6Fmt&X-Amz-Signature=614d1319268b5247639e6d72078b78cb6918144fcc1917a0146e868c0546853c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
