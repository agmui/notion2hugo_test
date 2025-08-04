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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662URTQAQU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAIkopVudpoX3YFHABYpXvfuxG%2BQk3r%2FymOTLwe0vtWwAiA3KofYffODY12F8PbNnSNuAP3c4YnyxX0Q85r1DjgWyyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMWoq7mydV6BAspuV7KtwD1kGk0hsIVowfSG88XnGBjtCLvwqynAeg03Rim5HkYeu7sm2edMCXphp4xoZjQZSDsf1P3cSW8CuMxnpM1%2FOMeGX6r2M%2F%2BbhqAsRhz7uJnaaAxiKTm3ZtXvelnN01XZXNbIuqgWppdac%2BCYSUFzKoZf%2FMpVQ%2BNwrP4zC%2FyjOzBVPr%2FPabOepdJy%2F%2FiFmBUeS6N2geAPkYoXc%2BV2yE%2FqxFSLXQxETLsVpqZcqR1Bafx2ug9R0hvA5NcSstmhLlSxQPVEgfYko%2BvpyVpCKZFtXqmq6xgau6AZtE3WUGtoptcK6AAAajjLB3mgmxZ4KWqllhbs5C7jcD%2B3HKM8SPIJy9gjn%2F7LBioLaiqDhE3HfrQsYZGyWgXZy4jQTVED4sv9daddxQ5cvlBQgD67zcaFBd5m5%2FCbs1BIkClyuenYdb3o4cNv%2BHdcebtoPq6rHAjyckzcfYL8qb5xrVWzMkhbFdQatLUKtqhnsAueC%2Fv538Y5JqzLXW4E6XQ4tR7DFjcopsZF6uj71Gn3Tn%2BHbHPeIL5aeWkL8lt%2BuwT82mx1WTzmBOjFIS3LQ0YaxOdycwvEy07nD8jr1CqnA49G4vScdnL503BFT9HDLFCAE1cdLr8PU7AXe%2FJOPOkHt%2B2XUwxc7DxAY6pgG3nsUnlXyzkqYNQMGo9BfNyh5V4Zr20VmZnIGmcICoReamw7as%2FmQAQWIXUyoJK7vfGRQEiOiAkdPyQuyE82i0qH5ArX5vsdpo8FvKVJAloyrocPWGB31IacXFY44m2fWZuWZmcQoDPy8cOfYsVE0aBltRlGE25BPcHated8vfD8JWJMUYOKVC18faDCU18vGjPdSaHkrAcLpq27vToUTiG%2BooZSo6&X-Amz-Signature=47bbc55b7159cdd04b53d2e08331de8da66dfd97c758b3bd799dc5a249ee335f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662URTQAQU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAIkopVudpoX3YFHABYpXvfuxG%2BQk3r%2FymOTLwe0vtWwAiA3KofYffODY12F8PbNnSNuAP3c4YnyxX0Q85r1DjgWyyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMWoq7mydV6BAspuV7KtwD1kGk0hsIVowfSG88XnGBjtCLvwqynAeg03Rim5HkYeu7sm2edMCXphp4xoZjQZSDsf1P3cSW8CuMxnpM1%2FOMeGX6r2M%2F%2BbhqAsRhz7uJnaaAxiKTm3ZtXvelnN01XZXNbIuqgWppdac%2BCYSUFzKoZf%2FMpVQ%2BNwrP4zC%2FyjOzBVPr%2FPabOepdJy%2F%2FiFmBUeS6N2geAPkYoXc%2BV2yE%2FqxFSLXQxETLsVpqZcqR1Bafx2ug9R0hvA5NcSstmhLlSxQPVEgfYko%2BvpyVpCKZFtXqmq6xgau6AZtE3WUGtoptcK6AAAajjLB3mgmxZ4KWqllhbs5C7jcD%2B3HKM8SPIJy9gjn%2F7LBioLaiqDhE3HfrQsYZGyWgXZy4jQTVED4sv9daddxQ5cvlBQgD67zcaFBd5m5%2FCbs1BIkClyuenYdb3o4cNv%2BHdcebtoPq6rHAjyckzcfYL8qb5xrVWzMkhbFdQatLUKtqhnsAueC%2Fv538Y5JqzLXW4E6XQ4tR7DFjcopsZF6uj71Gn3Tn%2BHbHPeIL5aeWkL8lt%2BuwT82mx1WTzmBOjFIS3LQ0YaxOdycwvEy07nD8jr1CqnA49G4vScdnL503BFT9HDLFCAE1cdLr8PU7AXe%2FJOPOkHt%2B2XUwxc7DxAY6pgG3nsUnlXyzkqYNQMGo9BfNyh5V4Zr20VmZnIGmcICoReamw7as%2FmQAQWIXUyoJK7vfGRQEiOiAkdPyQuyE82i0qH5ArX5vsdpo8FvKVJAloyrocPWGB31IacXFY44m2fWZuWZmcQoDPy8cOfYsVE0aBltRlGE25BPcHated8vfD8JWJMUYOKVC18faDCU18vGjPdSaHkrAcLpq27vToUTiG%2BooZSo6&X-Amz-Signature=9fe27c59376965ad8d072a35446e3364f3b6867141bc2fc0f748de9ef3899309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662URTQAQU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAIkopVudpoX3YFHABYpXvfuxG%2BQk3r%2FymOTLwe0vtWwAiA3KofYffODY12F8PbNnSNuAP3c4YnyxX0Q85r1DjgWyyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMWoq7mydV6BAspuV7KtwD1kGk0hsIVowfSG88XnGBjtCLvwqynAeg03Rim5HkYeu7sm2edMCXphp4xoZjQZSDsf1P3cSW8CuMxnpM1%2FOMeGX6r2M%2F%2BbhqAsRhz7uJnaaAxiKTm3ZtXvelnN01XZXNbIuqgWppdac%2BCYSUFzKoZf%2FMpVQ%2BNwrP4zC%2FyjOzBVPr%2FPabOepdJy%2F%2FiFmBUeS6N2geAPkYoXc%2BV2yE%2FqxFSLXQxETLsVpqZcqR1Bafx2ug9R0hvA5NcSstmhLlSxQPVEgfYko%2BvpyVpCKZFtXqmq6xgau6AZtE3WUGtoptcK6AAAajjLB3mgmxZ4KWqllhbs5C7jcD%2B3HKM8SPIJy9gjn%2F7LBioLaiqDhE3HfrQsYZGyWgXZy4jQTVED4sv9daddxQ5cvlBQgD67zcaFBd5m5%2FCbs1BIkClyuenYdb3o4cNv%2BHdcebtoPq6rHAjyckzcfYL8qb5xrVWzMkhbFdQatLUKtqhnsAueC%2Fv538Y5JqzLXW4E6XQ4tR7DFjcopsZF6uj71Gn3Tn%2BHbHPeIL5aeWkL8lt%2BuwT82mx1WTzmBOjFIS3LQ0YaxOdycwvEy07nD8jr1CqnA49G4vScdnL503BFT9HDLFCAE1cdLr8PU7AXe%2FJOPOkHt%2B2XUwxc7DxAY6pgG3nsUnlXyzkqYNQMGo9BfNyh5V4Zr20VmZnIGmcICoReamw7as%2FmQAQWIXUyoJK7vfGRQEiOiAkdPyQuyE82i0qH5ArX5vsdpo8FvKVJAloyrocPWGB31IacXFY44m2fWZuWZmcQoDPy8cOfYsVE0aBltRlGE25BPcHated8vfD8JWJMUYOKVC18faDCU18vGjPdSaHkrAcLpq27vToUTiG%2BooZSo6&X-Amz-Signature=42caef9f2edf3f6640e6c7b782f42283dc1935e84b3d4c3ca16230cfadf57cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662URTQAQU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAIkopVudpoX3YFHABYpXvfuxG%2BQk3r%2FymOTLwe0vtWwAiA3KofYffODY12F8PbNnSNuAP3c4YnyxX0Q85r1DjgWyyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMWoq7mydV6BAspuV7KtwD1kGk0hsIVowfSG88XnGBjtCLvwqynAeg03Rim5HkYeu7sm2edMCXphp4xoZjQZSDsf1P3cSW8CuMxnpM1%2FOMeGX6r2M%2F%2BbhqAsRhz7uJnaaAxiKTm3ZtXvelnN01XZXNbIuqgWppdac%2BCYSUFzKoZf%2FMpVQ%2BNwrP4zC%2FyjOzBVPr%2FPabOepdJy%2F%2FiFmBUeS6N2geAPkYoXc%2BV2yE%2FqxFSLXQxETLsVpqZcqR1Bafx2ug9R0hvA5NcSstmhLlSxQPVEgfYko%2BvpyVpCKZFtXqmq6xgau6AZtE3WUGtoptcK6AAAajjLB3mgmxZ4KWqllhbs5C7jcD%2B3HKM8SPIJy9gjn%2F7LBioLaiqDhE3HfrQsYZGyWgXZy4jQTVED4sv9daddxQ5cvlBQgD67zcaFBd5m5%2FCbs1BIkClyuenYdb3o4cNv%2BHdcebtoPq6rHAjyckzcfYL8qb5xrVWzMkhbFdQatLUKtqhnsAueC%2Fv538Y5JqzLXW4E6XQ4tR7DFjcopsZF6uj71Gn3Tn%2BHbHPeIL5aeWkL8lt%2BuwT82mx1WTzmBOjFIS3LQ0YaxOdycwvEy07nD8jr1CqnA49G4vScdnL503BFT9HDLFCAE1cdLr8PU7AXe%2FJOPOkHt%2B2XUwxc7DxAY6pgG3nsUnlXyzkqYNQMGo9BfNyh5V4Zr20VmZnIGmcICoReamw7as%2FmQAQWIXUyoJK7vfGRQEiOiAkdPyQuyE82i0qH5ArX5vsdpo8FvKVJAloyrocPWGB31IacXFY44m2fWZuWZmcQoDPy8cOfYsVE0aBltRlGE25BPcHated8vfD8JWJMUYOKVC18faDCU18vGjPdSaHkrAcLpq27vToUTiG%2BooZSo6&X-Amz-Signature=8c7b9d0565850873c5e5fb49636fa62c55f7d0f79164da86112f14c8b561d7df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662URTQAQU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAIkopVudpoX3YFHABYpXvfuxG%2BQk3r%2FymOTLwe0vtWwAiA3KofYffODY12F8PbNnSNuAP3c4YnyxX0Q85r1DjgWyyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMWoq7mydV6BAspuV7KtwD1kGk0hsIVowfSG88XnGBjtCLvwqynAeg03Rim5HkYeu7sm2edMCXphp4xoZjQZSDsf1P3cSW8CuMxnpM1%2FOMeGX6r2M%2F%2BbhqAsRhz7uJnaaAxiKTm3ZtXvelnN01XZXNbIuqgWppdac%2BCYSUFzKoZf%2FMpVQ%2BNwrP4zC%2FyjOzBVPr%2FPabOepdJy%2F%2FiFmBUeS6N2geAPkYoXc%2BV2yE%2FqxFSLXQxETLsVpqZcqR1Bafx2ug9R0hvA5NcSstmhLlSxQPVEgfYko%2BvpyVpCKZFtXqmq6xgau6AZtE3WUGtoptcK6AAAajjLB3mgmxZ4KWqllhbs5C7jcD%2B3HKM8SPIJy9gjn%2F7LBioLaiqDhE3HfrQsYZGyWgXZy4jQTVED4sv9daddxQ5cvlBQgD67zcaFBd5m5%2FCbs1BIkClyuenYdb3o4cNv%2BHdcebtoPq6rHAjyckzcfYL8qb5xrVWzMkhbFdQatLUKtqhnsAueC%2Fv538Y5JqzLXW4E6XQ4tR7DFjcopsZF6uj71Gn3Tn%2BHbHPeIL5aeWkL8lt%2BuwT82mx1WTzmBOjFIS3LQ0YaxOdycwvEy07nD8jr1CqnA49G4vScdnL503BFT9HDLFCAE1cdLr8PU7AXe%2FJOPOkHt%2B2XUwxc7DxAY6pgG3nsUnlXyzkqYNQMGo9BfNyh5V4Zr20VmZnIGmcICoReamw7as%2FmQAQWIXUyoJK7vfGRQEiOiAkdPyQuyE82i0qH5ArX5vsdpo8FvKVJAloyrocPWGB31IacXFY44m2fWZuWZmcQoDPy8cOfYsVE0aBltRlGE25BPcHated8vfD8JWJMUYOKVC18faDCU18vGjPdSaHkrAcLpq27vToUTiG%2BooZSo6&X-Amz-Signature=bf2d53e59b913377499c7a9802f57a8eba3acbeaee5cc3cc59b6d1810c00be47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662URTQAQU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAIkopVudpoX3YFHABYpXvfuxG%2BQk3r%2FymOTLwe0vtWwAiA3KofYffODY12F8PbNnSNuAP3c4YnyxX0Q85r1DjgWyyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMWoq7mydV6BAspuV7KtwD1kGk0hsIVowfSG88XnGBjtCLvwqynAeg03Rim5HkYeu7sm2edMCXphp4xoZjQZSDsf1P3cSW8CuMxnpM1%2FOMeGX6r2M%2F%2BbhqAsRhz7uJnaaAxiKTm3ZtXvelnN01XZXNbIuqgWppdac%2BCYSUFzKoZf%2FMpVQ%2BNwrP4zC%2FyjOzBVPr%2FPabOepdJy%2F%2FiFmBUeS6N2geAPkYoXc%2BV2yE%2FqxFSLXQxETLsVpqZcqR1Bafx2ug9R0hvA5NcSstmhLlSxQPVEgfYko%2BvpyVpCKZFtXqmq6xgau6AZtE3WUGtoptcK6AAAajjLB3mgmxZ4KWqllhbs5C7jcD%2B3HKM8SPIJy9gjn%2F7LBioLaiqDhE3HfrQsYZGyWgXZy4jQTVED4sv9daddxQ5cvlBQgD67zcaFBd5m5%2FCbs1BIkClyuenYdb3o4cNv%2BHdcebtoPq6rHAjyckzcfYL8qb5xrVWzMkhbFdQatLUKtqhnsAueC%2Fv538Y5JqzLXW4E6XQ4tR7DFjcopsZF6uj71Gn3Tn%2BHbHPeIL5aeWkL8lt%2BuwT82mx1WTzmBOjFIS3LQ0YaxOdycwvEy07nD8jr1CqnA49G4vScdnL503BFT9HDLFCAE1cdLr8PU7AXe%2FJOPOkHt%2B2XUwxc7DxAY6pgG3nsUnlXyzkqYNQMGo9BfNyh5V4Zr20VmZnIGmcICoReamw7as%2FmQAQWIXUyoJK7vfGRQEiOiAkdPyQuyE82i0qH5ArX5vsdpo8FvKVJAloyrocPWGB31IacXFY44m2fWZuWZmcQoDPy8cOfYsVE0aBltRlGE25BPcHated8vfD8JWJMUYOKVC18faDCU18vGjPdSaHkrAcLpq27vToUTiG%2BooZSo6&X-Amz-Signature=aef94c6a3f83e8acad5871d9d9cc96e60fb9723f5fe935ab7f136365f787bdeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662URTQAQU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAIkopVudpoX3YFHABYpXvfuxG%2BQk3r%2FymOTLwe0vtWwAiA3KofYffODY12F8PbNnSNuAP3c4YnyxX0Q85r1DjgWyyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMWoq7mydV6BAspuV7KtwD1kGk0hsIVowfSG88XnGBjtCLvwqynAeg03Rim5HkYeu7sm2edMCXphp4xoZjQZSDsf1P3cSW8CuMxnpM1%2FOMeGX6r2M%2F%2BbhqAsRhz7uJnaaAxiKTm3ZtXvelnN01XZXNbIuqgWppdac%2BCYSUFzKoZf%2FMpVQ%2BNwrP4zC%2FyjOzBVPr%2FPabOepdJy%2F%2FiFmBUeS6N2geAPkYoXc%2BV2yE%2FqxFSLXQxETLsVpqZcqR1Bafx2ug9R0hvA5NcSstmhLlSxQPVEgfYko%2BvpyVpCKZFtXqmq6xgau6AZtE3WUGtoptcK6AAAajjLB3mgmxZ4KWqllhbs5C7jcD%2B3HKM8SPIJy9gjn%2F7LBioLaiqDhE3HfrQsYZGyWgXZy4jQTVED4sv9daddxQ5cvlBQgD67zcaFBd5m5%2FCbs1BIkClyuenYdb3o4cNv%2BHdcebtoPq6rHAjyckzcfYL8qb5xrVWzMkhbFdQatLUKtqhnsAueC%2Fv538Y5JqzLXW4E6XQ4tR7DFjcopsZF6uj71Gn3Tn%2BHbHPeIL5aeWkL8lt%2BuwT82mx1WTzmBOjFIS3LQ0YaxOdycwvEy07nD8jr1CqnA49G4vScdnL503BFT9HDLFCAE1cdLr8PU7AXe%2FJOPOkHt%2B2XUwxc7DxAY6pgG3nsUnlXyzkqYNQMGo9BfNyh5V4Zr20VmZnIGmcICoReamw7as%2FmQAQWIXUyoJK7vfGRQEiOiAkdPyQuyE82i0qH5ArX5vsdpo8FvKVJAloyrocPWGB31IacXFY44m2fWZuWZmcQoDPy8cOfYsVE0aBltRlGE25BPcHated8vfD8JWJMUYOKVC18faDCU18vGjPdSaHkrAcLpq27vToUTiG%2BooZSo6&X-Amz-Signature=ffd92d237033613ced0080eb734f202b44239b9e4ec86631774d59a773597fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662URTQAQU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAIkopVudpoX3YFHABYpXvfuxG%2BQk3r%2FymOTLwe0vtWwAiA3KofYffODY12F8PbNnSNuAP3c4YnyxX0Q85r1DjgWyyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMWoq7mydV6BAspuV7KtwD1kGk0hsIVowfSG88XnGBjtCLvwqynAeg03Rim5HkYeu7sm2edMCXphp4xoZjQZSDsf1P3cSW8CuMxnpM1%2FOMeGX6r2M%2F%2BbhqAsRhz7uJnaaAxiKTm3ZtXvelnN01XZXNbIuqgWppdac%2BCYSUFzKoZf%2FMpVQ%2BNwrP4zC%2FyjOzBVPr%2FPabOepdJy%2F%2FiFmBUeS6N2geAPkYoXc%2BV2yE%2FqxFSLXQxETLsVpqZcqR1Bafx2ug9R0hvA5NcSstmhLlSxQPVEgfYko%2BvpyVpCKZFtXqmq6xgau6AZtE3WUGtoptcK6AAAajjLB3mgmxZ4KWqllhbs5C7jcD%2B3HKM8SPIJy9gjn%2F7LBioLaiqDhE3HfrQsYZGyWgXZy4jQTVED4sv9daddxQ5cvlBQgD67zcaFBd5m5%2FCbs1BIkClyuenYdb3o4cNv%2BHdcebtoPq6rHAjyckzcfYL8qb5xrVWzMkhbFdQatLUKtqhnsAueC%2Fv538Y5JqzLXW4E6XQ4tR7DFjcopsZF6uj71Gn3Tn%2BHbHPeIL5aeWkL8lt%2BuwT82mx1WTzmBOjFIS3LQ0YaxOdycwvEy07nD8jr1CqnA49G4vScdnL503BFT9HDLFCAE1cdLr8PU7AXe%2FJOPOkHt%2B2XUwxc7DxAY6pgG3nsUnlXyzkqYNQMGo9BfNyh5V4Zr20VmZnIGmcICoReamw7as%2FmQAQWIXUyoJK7vfGRQEiOiAkdPyQuyE82i0qH5ArX5vsdpo8FvKVJAloyrocPWGB31IacXFY44m2fWZuWZmcQoDPy8cOfYsVE0aBltRlGE25BPcHated8vfD8JWJMUYOKVC18faDCU18vGjPdSaHkrAcLpq27vToUTiG%2BooZSo6&X-Amz-Signature=bcad2a4b32361a5b7d82555b5ffc409ae2c52407b5f46c1bc044b1864112bd7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662URTQAQU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAIkopVudpoX3YFHABYpXvfuxG%2BQk3r%2FymOTLwe0vtWwAiA3KofYffODY12F8PbNnSNuAP3c4YnyxX0Q85r1DjgWyyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMWoq7mydV6BAspuV7KtwD1kGk0hsIVowfSG88XnGBjtCLvwqynAeg03Rim5HkYeu7sm2edMCXphp4xoZjQZSDsf1P3cSW8CuMxnpM1%2FOMeGX6r2M%2F%2BbhqAsRhz7uJnaaAxiKTm3ZtXvelnN01XZXNbIuqgWppdac%2BCYSUFzKoZf%2FMpVQ%2BNwrP4zC%2FyjOzBVPr%2FPabOepdJy%2F%2FiFmBUeS6N2geAPkYoXc%2BV2yE%2FqxFSLXQxETLsVpqZcqR1Bafx2ug9R0hvA5NcSstmhLlSxQPVEgfYko%2BvpyVpCKZFtXqmq6xgau6AZtE3WUGtoptcK6AAAajjLB3mgmxZ4KWqllhbs5C7jcD%2B3HKM8SPIJy9gjn%2F7LBioLaiqDhE3HfrQsYZGyWgXZy4jQTVED4sv9daddxQ5cvlBQgD67zcaFBd5m5%2FCbs1BIkClyuenYdb3o4cNv%2BHdcebtoPq6rHAjyckzcfYL8qb5xrVWzMkhbFdQatLUKtqhnsAueC%2Fv538Y5JqzLXW4E6XQ4tR7DFjcopsZF6uj71Gn3Tn%2BHbHPeIL5aeWkL8lt%2BuwT82mx1WTzmBOjFIS3LQ0YaxOdycwvEy07nD8jr1CqnA49G4vScdnL503BFT9HDLFCAE1cdLr8PU7AXe%2FJOPOkHt%2B2XUwxc7DxAY6pgG3nsUnlXyzkqYNQMGo9BfNyh5V4Zr20VmZnIGmcICoReamw7as%2FmQAQWIXUyoJK7vfGRQEiOiAkdPyQuyE82i0qH5ArX5vsdpo8FvKVJAloyrocPWGB31IacXFY44m2fWZuWZmcQoDPy8cOfYsVE0aBltRlGE25BPcHated8vfD8JWJMUYOKVC18faDCU18vGjPdSaHkrAcLpq27vToUTiG%2BooZSo6&X-Amz-Signature=13b34ff1cb6c2dfa0e957d715afe6b40c428375cb313228492c2b97aee75fd36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662URTQAQU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAIkopVudpoX3YFHABYpXvfuxG%2BQk3r%2FymOTLwe0vtWwAiA3KofYffODY12F8PbNnSNuAP3c4YnyxX0Q85r1DjgWyyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMWoq7mydV6BAspuV7KtwD1kGk0hsIVowfSG88XnGBjtCLvwqynAeg03Rim5HkYeu7sm2edMCXphp4xoZjQZSDsf1P3cSW8CuMxnpM1%2FOMeGX6r2M%2F%2BbhqAsRhz7uJnaaAxiKTm3ZtXvelnN01XZXNbIuqgWppdac%2BCYSUFzKoZf%2FMpVQ%2BNwrP4zC%2FyjOzBVPr%2FPabOepdJy%2F%2FiFmBUeS6N2geAPkYoXc%2BV2yE%2FqxFSLXQxETLsVpqZcqR1Bafx2ug9R0hvA5NcSstmhLlSxQPVEgfYko%2BvpyVpCKZFtXqmq6xgau6AZtE3WUGtoptcK6AAAajjLB3mgmxZ4KWqllhbs5C7jcD%2B3HKM8SPIJy9gjn%2F7LBioLaiqDhE3HfrQsYZGyWgXZy4jQTVED4sv9daddxQ5cvlBQgD67zcaFBd5m5%2FCbs1BIkClyuenYdb3o4cNv%2BHdcebtoPq6rHAjyckzcfYL8qb5xrVWzMkhbFdQatLUKtqhnsAueC%2Fv538Y5JqzLXW4E6XQ4tR7DFjcopsZF6uj71Gn3Tn%2BHbHPeIL5aeWkL8lt%2BuwT82mx1WTzmBOjFIS3LQ0YaxOdycwvEy07nD8jr1CqnA49G4vScdnL503BFT9HDLFCAE1cdLr8PU7AXe%2FJOPOkHt%2B2XUwxc7DxAY6pgG3nsUnlXyzkqYNQMGo9BfNyh5V4Zr20VmZnIGmcICoReamw7as%2FmQAQWIXUyoJK7vfGRQEiOiAkdPyQuyE82i0qH5ArX5vsdpo8FvKVJAloyrocPWGB31IacXFY44m2fWZuWZmcQoDPy8cOfYsVE0aBltRlGE25BPcHated8vfD8JWJMUYOKVC18faDCU18vGjPdSaHkrAcLpq27vToUTiG%2BooZSo6&X-Amz-Signature=5814ae57111bbf83a084b69482d484aa5eeb02a8c5958f62c99edd40d2f8031e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXKIHRVP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCOKKztChEn2m1ys8Lyh6w7YKnqr3WDXf1h%2FlUB55OC6AIhAOTAHDLGGzYRa8v1J2JugGf9eiFADmX%2FLrF9c9utHwUFKv8DCEoQABoMNjM3NDIzMTgzODA1Igw0tYUzNSOZ6vuPmwwq3AMTt0lpBFd%2FftEw%2F8Gyw8%2BDMu1LcKRHiXtREAK14eB8HLJ%2B4%2F02HO7fLOhCVlRycaXkd0kzQxChPc0Fy0Y0RYuC3puWFJGA3E4epwuexIusm0UUK9vT1FXhB1tlzJrIx%2FUkQeL0%2FJVOE2hHJu2rTUd5mFQGbjLwHSR5nQE0zrbPSCDiE1IoRlLtjJlzGqJedWqZ958B0AP5Lz6rUDr%2BKdouigi30Pp3CwY8Xi0I8wWVh%2BaJHMBMMv9jMjSnSV2VZm6x4sddDJjlds%2FHZxH13swV5zphd8r78f8VceyuL00FzuycS8%2BlfIFz4XtfBsJoss4g%2FiXHhjxlfKfwvP0inlzyUHrfbpofwtXEW1%2Btz7kGJfTCsmby2umUiWo97yjc4t5QG1ESzSaslDsDR4Dpro%2FOHqJ0pCh9o7CURHZU5999vAk0fmdVJS86FBslu%2F2fyfAFS71mb8UEEZInkqand0FUiT7%2FXZgKt5B5yWx0KjhC4A3vnudTJC3mOp9InOcImY1OrgyXwWfSSlusYHNWPXCYKV2c8Tkh8ARhIItBYIxwPxh10KyFjkyuF3fRieWIRsCcB6WwVAviVsQPXAsNdmED4kz0KeS%2BCyfGxKbPijuP%2F2NM7UjZW11NBR%2F9czCbz8PEBjqkAUqCVwK6V%2B5vH8R3IqZEFTb9v261zUW18%2F03ZriEg%2B%2FpfE0Uo8fLALpeLv1jeQNbI7sXQpeqmCcWqa%2Fagm2gRAuQHTS%2FsnscIsblZORD25aHRf0eh2efhwPY3rhipGmS7LdAJ0MvkFboKrowTPoRp2%2BkJREptqG%2FBxgvAZ9wVEDMeE9Eaq2GiHcUpS5ERtnymU6%2B2lIhY3fPTK5ra8caciIZu9P4&X-Amz-Signature=7380691f3369ce76d739576fbfeb08e5f5c887179c35e0cf63aecd44f13d9a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HZ4Y2E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCYBv9pnebGpBW%2BP3PvUxrEZQu4efjBFv9ksd9NbiSrpwIhAOeqNCKpGqlccRURwgpgaX2%2BL26tF2Gne0v3%2BMKxnS2zKv8DCEoQABoMNjM3NDIzMTgzODA1Igxn%2BgX1WoLW7zYYHrkq3AMuY8eXMHLOpFLWex%2FtTcOp7dkXKuPMnbiyxUqbJiKYo%2BXaEz6wah2JnphSmr2UChozQWGl02%2BK2S%2FTQo954bYnoOk%2BsIt1fPrQD3kfW6N2J%2FNloOUkYLxLjFb1vZbJSZ%2FY0QAlqI2T%2F02OOoFtL7fyAwARSZIMuyCNHuEpouux1uUPpSAJ4SlPN%2By2e7GkvJd1yA5JbspP3FJrnWtErFL7N8YV7jKcMEXktSeib8U8dpgaf0TbYeFTlLraYpFu949YmSOG0HPLiEneMI8W%2FREXBcueB0FWUlXsDI1UwuUNXaAODyQkfrrjvEZBpxURU865GdezENc4vo1L4XFKMkK83Fa9iUohmUSS1aPfkFtbCZe%2BDeLilD4MBXkg%2B9qp1h83q0QLCvAcpap2iPHfih2XVRsmucN%2FW%2F9O4tgIOuoNZ8qryfZNX62dqfXzeBo1iZNq4hH1wmn0yhYh6w%2BUapUkmAA1lQRuFmbuLdsRblyRd%2FdzOEj4g3WCzkDTOMeoMbiWW9OcaLPpChsQuvEDt28OEuVKyxocoMqTAOOEjXj8WhzYc8MCHYJcDtnmZwfDlfF7cbXk1veLUnv6E3Kk5qQfzqUYs%2BXI%2F4wLXiMBR0Rw3uGqflMLTaEFKqA0BDDDzsPEBjqkAeJO1K3ejCEYhCPjyYshZsJ%2F8ROZvwtbhqKSjSrDVMafEQiyykEjY%2FVDzmlUxKIVE6zG7x1Pfk4xLRxUgQQycoaR9ogZgGuweSJPJFTn3paNUfVmp5ChVG2xmilLQd5ak4Obomj%2FznaTCsZ5DSz%2B8DsMtkK29euPJDVV3Syp4nGizCsodBt3u%2BMDMElGUny5w%2FVnnxF0cEZhnaZYxIpMA1y89wee&X-Amz-Signature=ba842b3bc4cbc94a11e86af6d6e8036ab2f5646dd3e644360bd38f0fb5a5543f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HZ4Y2E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCYBv9pnebGpBW%2BP3PvUxrEZQu4efjBFv9ksd9NbiSrpwIhAOeqNCKpGqlccRURwgpgaX2%2BL26tF2Gne0v3%2BMKxnS2zKv8DCEoQABoMNjM3NDIzMTgzODA1Igxn%2BgX1WoLW7zYYHrkq3AMuY8eXMHLOpFLWex%2FtTcOp7dkXKuPMnbiyxUqbJiKYo%2BXaEz6wah2JnphSmr2UChozQWGl02%2BK2S%2FTQo954bYnoOk%2BsIt1fPrQD3kfW6N2J%2FNloOUkYLxLjFb1vZbJSZ%2FY0QAlqI2T%2F02OOoFtL7fyAwARSZIMuyCNHuEpouux1uUPpSAJ4SlPN%2By2e7GkvJd1yA5JbspP3FJrnWtErFL7N8YV7jKcMEXktSeib8U8dpgaf0TbYeFTlLraYpFu949YmSOG0HPLiEneMI8W%2FREXBcueB0FWUlXsDI1UwuUNXaAODyQkfrrjvEZBpxURU865GdezENc4vo1L4XFKMkK83Fa9iUohmUSS1aPfkFtbCZe%2BDeLilD4MBXkg%2B9qp1h83q0QLCvAcpap2iPHfih2XVRsmucN%2FW%2F9O4tgIOuoNZ8qryfZNX62dqfXzeBo1iZNq4hH1wmn0yhYh6w%2BUapUkmAA1lQRuFmbuLdsRblyRd%2FdzOEj4g3WCzkDTOMeoMbiWW9OcaLPpChsQuvEDt28OEuVKyxocoMqTAOOEjXj8WhzYc8MCHYJcDtnmZwfDlfF7cbXk1veLUnv6E3Kk5qQfzqUYs%2BXI%2F4wLXiMBR0Rw3uGqflMLTaEFKqA0BDDDzsPEBjqkAeJO1K3ejCEYhCPjyYshZsJ%2F8ROZvwtbhqKSjSrDVMafEQiyykEjY%2FVDzmlUxKIVE6zG7x1Pfk4xLRxUgQQycoaR9ogZgGuweSJPJFTn3paNUfVmp5ChVG2xmilLQd5ak4Obomj%2FznaTCsZ5DSz%2B8DsMtkK29euPJDVV3Syp4nGizCsodBt3u%2BMDMElGUny5w%2FVnnxF0cEZhnaZYxIpMA1y89wee&X-Amz-Signature=c911926eb899db25f3c5c5230e97f0514c880b3dc2fa1136bf00bf76b259beab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HZ4Y2E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCYBv9pnebGpBW%2BP3PvUxrEZQu4efjBFv9ksd9NbiSrpwIhAOeqNCKpGqlccRURwgpgaX2%2BL26tF2Gne0v3%2BMKxnS2zKv8DCEoQABoMNjM3NDIzMTgzODA1Igxn%2BgX1WoLW7zYYHrkq3AMuY8eXMHLOpFLWex%2FtTcOp7dkXKuPMnbiyxUqbJiKYo%2BXaEz6wah2JnphSmr2UChozQWGl02%2BK2S%2FTQo954bYnoOk%2BsIt1fPrQD3kfW6N2J%2FNloOUkYLxLjFb1vZbJSZ%2FY0QAlqI2T%2F02OOoFtL7fyAwARSZIMuyCNHuEpouux1uUPpSAJ4SlPN%2By2e7GkvJd1yA5JbspP3FJrnWtErFL7N8YV7jKcMEXktSeib8U8dpgaf0TbYeFTlLraYpFu949YmSOG0HPLiEneMI8W%2FREXBcueB0FWUlXsDI1UwuUNXaAODyQkfrrjvEZBpxURU865GdezENc4vo1L4XFKMkK83Fa9iUohmUSS1aPfkFtbCZe%2BDeLilD4MBXkg%2B9qp1h83q0QLCvAcpap2iPHfih2XVRsmucN%2FW%2F9O4tgIOuoNZ8qryfZNX62dqfXzeBo1iZNq4hH1wmn0yhYh6w%2BUapUkmAA1lQRuFmbuLdsRblyRd%2FdzOEj4g3WCzkDTOMeoMbiWW9OcaLPpChsQuvEDt28OEuVKyxocoMqTAOOEjXj8WhzYc8MCHYJcDtnmZwfDlfF7cbXk1veLUnv6E3Kk5qQfzqUYs%2BXI%2F4wLXiMBR0Rw3uGqflMLTaEFKqA0BDDDzsPEBjqkAeJO1K3ejCEYhCPjyYshZsJ%2F8ROZvwtbhqKSjSrDVMafEQiyykEjY%2FVDzmlUxKIVE6zG7x1Pfk4xLRxUgQQycoaR9ogZgGuweSJPJFTn3paNUfVmp5ChVG2xmilLQd5ak4Obomj%2FznaTCsZ5DSz%2B8DsMtkK29euPJDVV3Syp4nGizCsodBt3u%2BMDMElGUny5w%2FVnnxF0cEZhnaZYxIpMA1y89wee&X-Amz-Signature=c0caaaf74748dde3774fcf131b76f840f2b733a15f880919f7b0e3a1cd7f2d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HZ4Y2E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCYBv9pnebGpBW%2BP3PvUxrEZQu4efjBFv9ksd9NbiSrpwIhAOeqNCKpGqlccRURwgpgaX2%2BL26tF2Gne0v3%2BMKxnS2zKv8DCEoQABoMNjM3NDIzMTgzODA1Igxn%2BgX1WoLW7zYYHrkq3AMuY8eXMHLOpFLWex%2FtTcOp7dkXKuPMnbiyxUqbJiKYo%2BXaEz6wah2JnphSmr2UChozQWGl02%2BK2S%2FTQo954bYnoOk%2BsIt1fPrQD3kfW6N2J%2FNloOUkYLxLjFb1vZbJSZ%2FY0QAlqI2T%2F02OOoFtL7fyAwARSZIMuyCNHuEpouux1uUPpSAJ4SlPN%2By2e7GkvJd1yA5JbspP3FJrnWtErFL7N8YV7jKcMEXktSeib8U8dpgaf0TbYeFTlLraYpFu949YmSOG0HPLiEneMI8W%2FREXBcueB0FWUlXsDI1UwuUNXaAODyQkfrrjvEZBpxURU865GdezENc4vo1L4XFKMkK83Fa9iUohmUSS1aPfkFtbCZe%2BDeLilD4MBXkg%2B9qp1h83q0QLCvAcpap2iPHfih2XVRsmucN%2FW%2F9O4tgIOuoNZ8qryfZNX62dqfXzeBo1iZNq4hH1wmn0yhYh6w%2BUapUkmAA1lQRuFmbuLdsRblyRd%2FdzOEj4g3WCzkDTOMeoMbiWW9OcaLPpChsQuvEDt28OEuVKyxocoMqTAOOEjXj8WhzYc8MCHYJcDtnmZwfDlfF7cbXk1veLUnv6E3Kk5qQfzqUYs%2BXI%2F4wLXiMBR0Rw3uGqflMLTaEFKqA0BDDDzsPEBjqkAeJO1K3ejCEYhCPjyYshZsJ%2F8ROZvwtbhqKSjSrDVMafEQiyykEjY%2FVDzmlUxKIVE6zG7x1Pfk4xLRxUgQQycoaR9ogZgGuweSJPJFTn3paNUfVmp5ChVG2xmilLQd5ak4Obomj%2FznaTCsZ5DSz%2B8DsMtkK29euPJDVV3Syp4nGizCsodBt3u%2BMDMElGUny5w%2FVnnxF0cEZhnaZYxIpMA1y89wee&X-Amz-Signature=c3bcbb70e2972f7ea13707ee1278dfc65e7f7902f0aa2bc924e6e7e84c394d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HZ4Y2E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCYBv9pnebGpBW%2BP3PvUxrEZQu4efjBFv9ksd9NbiSrpwIhAOeqNCKpGqlccRURwgpgaX2%2BL26tF2Gne0v3%2BMKxnS2zKv8DCEoQABoMNjM3NDIzMTgzODA1Igxn%2BgX1WoLW7zYYHrkq3AMuY8eXMHLOpFLWex%2FtTcOp7dkXKuPMnbiyxUqbJiKYo%2BXaEz6wah2JnphSmr2UChozQWGl02%2BK2S%2FTQo954bYnoOk%2BsIt1fPrQD3kfW6N2J%2FNloOUkYLxLjFb1vZbJSZ%2FY0QAlqI2T%2F02OOoFtL7fyAwARSZIMuyCNHuEpouux1uUPpSAJ4SlPN%2By2e7GkvJd1yA5JbspP3FJrnWtErFL7N8YV7jKcMEXktSeib8U8dpgaf0TbYeFTlLraYpFu949YmSOG0HPLiEneMI8W%2FREXBcueB0FWUlXsDI1UwuUNXaAODyQkfrrjvEZBpxURU865GdezENc4vo1L4XFKMkK83Fa9iUohmUSS1aPfkFtbCZe%2BDeLilD4MBXkg%2B9qp1h83q0QLCvAcpap2iPHfih2XVRsmucN%2FW%2F9O4tgIOuoNZ8qryfZNX62dqfXzeBo1iZNq4hH1wmn0yhYh6w%2BUapUkmAA1lQRuFmbuLdsRblyRd%2FdzOEj4g3WCzkDTOMeoMbiWW9OcaLPpChsQuvEDt28OEuVKyxocoMqTAOOEjXj8WhzYc8MCHYJcDtnmZwfDlfF7cbXk1veLUnv6E3Kk5qQfzqUYs%2BXI%2F4wLXiMBR0Rw3uGqflMLTaEFKqA0BDDDzsPEBjqkAeJO1K3ejCEYhCPjyYshZsJ%2F8ROZvwtbhqKSjSrDVMafEQiyykEjY%2FVDzmlUxKIVE6zG7x1Pfk4xLRxUgQQycoaR9ogZgGuweSJPJFTn3paNUfVmp5ChVG2xmilLQd5ak4Obomj%2FznaTCsZ5DSz%2B8DsMtkK29euPJDVV3Syp4nGizCsodBt3u%2BMDMElGUny5w%2FVnnxF0cEZhnaZYxIpMA1y89wee&X-Amz-Signature=cc74e61c678ae19c8a2836f71237cb9ffe446f7b596d0a1d6fe833c8690dae91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HZ4Y2E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCYBv9pnebGpBW%2BP3PvUxrEZQu4efjBFv9ksd9NbiSrpwIhAOeqNCKpGqlccRURwgpgaX2%2BL26tF2Gne0v3%2BMKxnS2zKv8DCEoQABoMNjM3NDIzMTgzODA1Igxn%2BgX1WoLW7zYYHrkq3AMuY8eXMHLOpFLWex%2FtTcOp7dkXKuPMnbiyxUqbJiKYo%2BXaEz6wah2JnphSmr2UChozQWGl02%2BK2S%2FTQo954bYnoOk%2BsIt1fPrQD3kfW6N2J%2FNloOUkYLxLjFb1vZbJSZ%2FY0QAlqI2T%2F02OOoFtL7fyAwARSZIMuyCNHuEpouux1uUPpSAJ4SlPN%2By2e7GkvJd1yA5JbspP3FJrnWtErFL7N8YV7jKcMEXktSeib8U8dpgaf0TbYeFTlLraYpFu949YmSOG0HPLiEneMI8W%2FREXBcueB0FWUlXsDI1UwuUNXaAODyQkfrrjvEZBpxURU865GdezENc4vo1L4XFKMkK83Fa9iUohmUSS1aPfkFtbCZe%2BDeLilD4MBXkg%2B9qp1h83q0QLCvAcpap2iPHfih2XVRsmucN%2FW%2F9O4tgIOuoNZ8qryfZNX62dqfXzeBo1iZNq4hH1wmn0yhYh6w%2BUapUkmAA1lQRuFmbuLdsRblyRd%2FdzOEj4g3WCzkDTOMeoMbiWW9OcaLPpChsQuvEDt28OEuVKyxocoMqTAOOEjXj8WhzYc8MCHYJcDtnmZwfDlfF7cbXk1veLUnv6E3Kk5qQfzqUYs%2BXI%2F4wLXiMBR0Rw3uGqflMLTaEFKqA0BDDDzsPEBjqkAeJO1K3ejCEYhCPjyYshZsJ%2F8ROZvwtbhqKSjSrDVMafEQiyykEjY%2FVDzmlUxKIVE6zG7x1Pfk4xLRxUgQQycoaR9ogZgGuweSJPJFTn3paNUfVmp5ChVG2xmilLQd5ak4Obomj%2FznaTCsZ5DSz%2B8DsMtkK29euPJDVV3Syp4nGizCsodBt3u%2BMDMElGUny5w%2FVnnxF0cEZhnaZYxIpMA1y89wee&X-Amz-Signature=a2a218e872c16c05a7c7d3d039f019c8c68066bab6b692a1e1be820939c1a851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HZ4Y2E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCYBv9pnebGpBW%2BP3PvUxrEZQu4efjBFv9ksd9NbiSrpwIhAOeqNCKpGqlccRURwgpgaX2%2BL26tF2Gne0v3%2BMKxnS2zKv8DCEoQABoMNjM3NDIzMTgzODA1Igxn%2BgX1WoLW7zYYHrkq3AMuY8eXMHLOpFLWex%2FtTcOp7dkXKuPMnbiyxUqbJiKYo%2BXaEz6wah2JnphSmr2UChozQWGl02%2BK2S%2FTQo954bYnoOk%2BsIt1fPrQD3kfW6N2J%2FNloOUkYLxLjFb1vZbJSZ%2FY0QAlqI2T%2F02OOoFtL7fyAwARSZIMuyCNHuEpouux1uUPpSAJ4SlPN%2By2e7GkvJd1yA5JbspP3FJrnWtErFL7N8YV7jKcMEXktSeib8U8dpgaf0TbYeFTlLraYpFu949YmSOG0HPLiEneMI8W%2FREXBcueB0FWUlXsDI1UwuUNXaAODyQkfrrjvEZBpxURU865GdezENc4vo1L4XFKMkK83Fa9iUohmUSS1aPfkFtbCZe%2BDeLilD4MBXkg%2B9qp1h83q0QLCvAcpap2iPHfih2XVRsmucN%2FW%2F9O4tgIOuoNZ8qryfZNX62dqfXzeBo1iZNq4hH1wmn0yhYh6w%2BUapUkmAA1lQRuFmbuLdsRblyRd%2FdzOEj4g3WCzkDTOMeoMbiWW9OcaLPpChsQuvEDt28OEuVKyxocoMqTAOOEjXj8WhzYc8MCHYJcDtnmZwfDlfF7cbXk1veLUnv6E3Kk5qQfzqUYs%2BXI%2F4wLXiMBR0Rw3uGqflMLTaEFKqA0BDDDzsPEBjqkAeJO1K3ejCEYhCPjyYshZsJ%2F8ROZvwtbhqKSjSrDVMafEQiyykEjY%2FVDzmlUxKIVE6zG7x1Pfk4xLRxUgQQycoaR9ogZgGuweSJPJFTn3paNUfVmp5ChVG2xmilLQd5ak4Obomj%2FznaTCsZ5DSz%2B8DsMtkK29euPJDVV3Syp4nGizCsodBt3u%2BMDMElGUny5w%2FVnnxF0cEZhnaZYxIpMA1y89wee&X-Amz-Signature=820fffae877cf05efd3c056a724e6c0f075245988baea0fc4910a6d414207a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HZ4Y2E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCYBv9pnebGpBW%2BP3PvUxrEZQu4efjBFv9ksd9NbiSrpwIhAOeqNCKpGqlccRURwgpgaX2%2BL26tF2Gne0v3%2BMKxnS2zKv8DCEoQABoMNjM3NDIzMTgzODA1Igxn%2BgX1WoLW7zYYHrkq3AMuY8eXMHLOpFLWex%2FtTcOp7dkXKuPMnbiyxUqbJiKYo%2BXaEz6wah2JnphSmr2UChozQWGl02%2BK2S%2FTQo954bYnoOk%2BsIt1fPrQD3kfW6N2J%2FNloOUkYLxLjFb1vZbJSZ%2FY0QAlqI2T%2F02OOoFtL7fyAwARSZIMuyCNHuEpouux1uUPpSAJ4SlPN%2By2e7GkvJd1yA5JbspP3FJrnWtErFL7N8YV7jKcMEXktSeib8U8dpgaf0TbYeFTlLraYpFu949YmSOG0HPLiEneMI8W%2FREXBcueB0FWUlXsDI1UwuUNXaAODyQkfrrjvEZBpxURU865GdezENc4vo1L4XFKMkK83Fa9iUohmUSS1aPfkFtbCZe%2BDeLilD4MBXkg%2B9qp1h83q0QLCvAcpap2iPHfih2XVRsmucN%2FW%2F9O4tgIOuoNZ8qryfZNX62dqfXzeBo1iZNq4hH1wmn0yhYh6w%2BUapUkmAA1lQRuFmbuLdsRblyRd%2FdzOEj4g3WCzkDTOMeoMbiWW9OcaLPpChsQuvEDt28OEuVKyxocoMqTAOOEjXj8WhzYc8MCHYJcDtnmZwfDlfF7cbXk1veLUnv6E3Kk5qQfzqUYs%2BXI%2F4wLXiMBR0Rw3uGqflMLTaEFKqA0BDDDzsPEBjqkAeJO1K3ejCEYhCPjyYshZsJ%2F8ROZvwtbhqKSjSrDVMafEQiyykEjY%2FVDzmlUxKIVE6zG7x1Pfk4xLRxUgQQycoaR9ogZgGuweSJPJFTn3paNUfVmp5ChVG2xmilLQd5ak4Obomj%2FznaTCsZ5DSz%2B8DsMtkK29euPJDVV3Syp4nGizCsodBt3u%2BMDMElGUny5w%2FVnnxF0cEZhnaZYxIpMA1y89wee&X-Amz-Signature=fd51dd67dd22fc3d5a0e95af75ff77f3f5375a56de981067322d3dc4fd5eb349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HZ4Y2E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCYBv9pnebGpBW%2BP3PvUxrEZQu4efjBFv9ksd9NbiSrpwIhAOeqNCKpGqlccRURwgpgaX2%2BL26tF2Gne0v3%2BMKxnS2zKv8DCEoQABoMNjM3NDIzMTgzODA1Igxn%2BgX1WoLW7zYYHrkq3AMuY8eXMHLOpFLWex%2FtTcOp7dkXKuPMnbiyxUqbJiKYo%2BXaEz6wah2JnphSmr2UChozQWGl02%2BK2S%2FTQo954bYnoOk%2BsIt1fPrQD3kfW6N2J%2FNloOUkYLxLjFb1vZbJSZ%2FY0QAlqI2T%2F02OOoFtL7fyAwARSZIMuyCNHuEpouux1uUPpSAJ4SlPN%2By2e7GkvJd1yA5JbspP3FJrnWtErFL7N8YV7jKcMEXktSeib8U8dpgaf0TbYeFTlLraYpFu949YmSOG0HPLiEneMI8W%2FREXBcueB0FWUlXsDI1UwuUNXaAODyQkfrrjvEZBpxURU865GdezENc4vo1L4XFKMkK83Fa9iUohmUSS1aPfkFtbCZe%2BDeLilD4MBXkg%2B9qp1h83q0QLCvAcpap2iPHfih2XVRsmucN%2FW%2F9O4tgIOuoNZ8qryfZNX62dqfXzeBo1iZNq4hH1wmn0yhYh6w%2BUapUkmAA1lQRuFmbuLdsRblyRd%2FdzOEj4g3WCzkDTOMeoMbiWW9OcaLPpChsQuvEDt28OEuVKyxocoMqTAOOEjXj8WhzYc8MCHYJcDtnmZwfDlfF7cbXk1veLUnv6E3Kk5qQfzqUYs%2BXI%2F4wLXiMBR0Rw3uGqflMLTaEFKqA0BDDDzsPEBjqkAeJO1K3ejCEYhCPjyYshZsJ%2F8ROZvwtbhqKSjSrDVMafEQiyykEjY%2FVDzmlUxKIVE6zG7x1Pfk4xLRxUgQQycoaR9ogZgGuweSJPJFTn3paNUfVmp5ChVG2xmilLQd5ak4Obomj%2FznaTCsZ5DSz%2B8DsMtkK29euPJDVV3Syp4nGizCsodBt3u%2BMDMElGUny5w%2FVnnxF0cEZhnaZYxIpMA1y89wee&X-Amz-Signature=0b7479fca5623a3a2b798f492414d9f0c1e450c9447e79c40781684b0ad1b653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
