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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPH7LR5%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDGHX3ZvmAVgyCIa7kOsonMr7fzid1w8VmmPh1Ua946wwIhAPjeZFJsQZ8IJwjMRThrvriqLV27oXkNJSxvOddRVhYGKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMq9vP9Qbs24TU3QMq3ANFaOM4lUuIG6jJ%2BLyDvfkzHhNgTo5MOIVtDZ1cKulf%2BTf9UJCWHdb%2BLs6Q7dMsvBOgeCZKYln0RT5G35XoNCOukWS3wl8d6K7CCV%2F9zGsa9gZMq%2FXhLaNy%2BODIj0TebxdG%2FhDPxqsVIN8bcG1X3wfPil2iizEQj3AS%2FZErojCOW2Oz862lkyylf8992NZgOd1s5oAXZAOp84RgDo9hEtBzXXZ7e1mUESK5mOg3Lbw93W6bk6OEQ%2BDhNRWRr5kMkIGelmWSLZbwIBe4XeflKjeQunYTUbn8Ag3FJUw2rC%2BSGJ2rT7%2B6ZONEhrkiMcx2qlwu4k5eEC9EXLwKoEmwGfYMEsawjElQKAOoe747JGRV%2FKxv1fVtc7a69mDALPrZlEhmnWPAfjY1LcFrMrkNNSKEooQNMpP0zF3keodX0zrRcD2x1pRf9DiZL7RKgCBxP0VhR8ODey2C2Fs6VX51dVMsM%2BJ0q%2FN%2B7YF2zQwfEaPAQe7jj6zq4rzS2Zc8mqu1Gbtdz4SyMbYRNO8Odl8fNyY6GoEOF1rxju00BubaI9YY%2FsLDHpLtdx%2FlWQVoioDPTcGechSAeW8MxgH0qzghIRBiAFtMG0sbCKZtBQsM38W1LnmYhtJoOpD4Of4sJjDo9YrIBjqkAZ8tGGVQiEY9FcLkBD8XBjFbJqbDkxREwLsNmXRqiZ%2Frzv3PHd2XxVYlRCYaKK4jsoa5c6gHByKlchCuDYxKfUsZ%2FK2BEr5OzB%2FWTXTOxxZPveX7KbNhV%2FFVyzHoRvnIK1Ttq7gjx%2BWhDFtKhMyWfLfzPDpjprCsm6zx2xZ6FDNsp1kyAHjLsd82D4e3%2BFnYdSR4vBUkwTA443FrB6S2htF1SThy&X-Amz-Signature=e1320a120a20fc172fce27229c1eb347559161bf2e046d6ee9e711dd35d6133e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
  <summary>{{< markdownify >}}Why not ros2_control?{{< /markdownify >}}</summary>
  
This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.

If you are curious about `ros2_control` Articulate Robotics has a very good guide on it:

[ros2_control guide](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

</details>



{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPH7LR5%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDGHX3ZvmAVgyCIa7kOsonMr7fzid1w8VmmPh1Ua946wwIhAPjeZFJsQZ8IJwjMRThrvriqLV27oXkNJSxvOddRVhYGKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMq9vP9Qbs24TU3QMq3ANFaOM4lUuIG6jJ%2BLyDvfkzHhNgTo5MOIVtDZ1cKulf%2BTf9UJCWHdb%2BLs6Q7dMsvBOgeCZKYln0RT5G35XoNCOukWS3wl8d6K7CCV%2F9zGsa9gZMq%2FXhLaNy%2BODIj0TebxdG%2FhDPxqsVIN8bcG1X3wfPil2iizEQj3AS%2FZErojCOW2Oz862lkyylf8992NZgOd1s5oAXZAOp84RgDo9hEtBzXXZ7e1mUESK5mOg3Lbw93W6bk6OEQ%2BDhNRWRr5kMkIGelmWSLZbwIBe4XeflKjeQunYTUbn8Ag3FJUw2rC%2BSGJ2rT7%2B6ZONEhrkiMcx2qlwu4k5eEC9EXLwKoEmwGfYMEsawjElQKAOoe747JGRV%2FKxv1fVtc7a69mDALPrZlEhmnWPAfjY1LcFrMrkNNSKEooQNMpP0zF3keodX0zrRcD2x1pRf9DiZL7RKgCBxP0VhR8ODey2C2Fs6VX51dVMsM%2BJ0q%2FN%2B7YF2zQwfEaPAQe7jj6zq4rzS2Zc8mqu1Gbtdz4SyMbYRNO8Odl8fNyY6GoEOF1rxju00BubaI9YY%2FsLDHpLtdx%2FlWQVoioDPTcGechSAeW8MxgH0qzghIRBiAFtMG0sbCKZtBQsM38W1LnmYhtJoOpD4Of4sJjDo9YrIBjqkAZ8tGGVQiEY9FcLkBD8XBjFbJqbDkxREwLsNmXRqiZ%2Frzv3PHd2XxVYlRCYaKK4jsoa5c6gHByKlchCuDYxKfUsZ%2FK2BEr5OzB%2FWTXTOxxZPveX7KbNhV%2FFVyzHoRvnIK1Ttq7gjx%2BWhDFtKhMyWfLfzPDpjprCsm6zx2xZ6FDNsp1kyAHjLsd82D4e3%2BFnYdSR4vBUkwTA443FrB6S2htF1SThy&X-Amz-Signature=2e88d0a57a2ad42ff0ebad3bbe1bc3bf4b02fcd72b266e56f612553e8f5bd496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPH7LR5%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDGHX3ZvmAVgyCIa7kOsonMr7fzid1w8VmmPh1Ua946wwIhAPjeZFJsQZ8IJwjMRThrvriqLV27oXkNJSxvOddRVhYGKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMq9vP9Qbs24TU3QMq3ANFaOM4lUuIG6jJ%2BLyDvfkzHhNgTo5MOIVtDZ1cKulf%2BTf9UJCWHdb%2BLs6Q7dMsvBOgeCZKYln0RT5G35XoNCOukWS3wl8d6K7CCV%2F9zGsa9gZMq%2FXhLaNy%2BODIj0TebxdG%2FhDPxqsVIN8bcG1X3wfPil2iizEQj3AS%2FZErojCOW2Oz862lkyylf8992NZgOd1s5oAXZAOp84RgDo9hEtBzXXZ7e1mUESK5mOg3Lbw93W6bk6OEQ%2BDhNRWRr5kMkIGelmWSLZbwIBe4XeflKjeQunYTUbn8Ag3FJUw2rC%2BSGJ2rT7%2B6ZONEhrkiMcx2qlwu4k5eEC9EXLwKoEmwGfYMEsawjElQKAOoe747JGRV%2FKxv1fVtc7a69mDALPrZlEhmnWPAfjY1LcFrMrkNNSKEooQNMpP0zF3keodX0zrRcD2x1pRf9DiZL7RKgCBxP0VhR8ODey2C2Fs6VX51dVMsM%2BJ0q%2FN%2B7YF2zQwfEaPAQe7jj6zq4rzS2Zc8mqu1Gbtdz4SyMbYRNO8Odl8fNyY6GoEOF1rxju00BubaI9YY%2FsLDHpLtdx%2FlWQVoioDPTcGechSAeW8MxgH0qzghIRBiAFtMG0sbCKZtBQsM38W1LnmYhtJoOpD4Of4sJjDo9YrIBjqkAZ8tGGVQiEY9FcLkBD8XBjFbJqbDkxREwLsNmXRqiZ%2Frzv3PHd2XxVYlRCYaKK4jsoa5c6gHByKlchCuDYxKfUsZ%2FK2BEr5OzB%2FWTXTOxxZPveX7KbNhV%2FFVyzHoRvnIK1Ttq7gjx%2BWhDFtKhMyWfLfzPDpjprCsm6zx2xZ6FDNsp1kyAHjLsd82D4e3%2BFnYdSR4vBUkwTA443FrB6S2htF1SThy&X-Amz-Signature=fd0979c801fbafa96a90b3d8e28b6723eb303b84bb2692ed2ab2dd096f72bf3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPH7LR5%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDGHX3ZvmAVgyCIa7kOsonMr7fzid1w8VmmPh1Ua946wwIhAPjeZFJsQZ8IJwjMRThrvriqLV27oXkNJSxvOddRVhYGKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMq9vP9Qbs24TU3QMq3ANFaOM4lUuIG6jJ%2BLyDvfkzHhNgTo5MOIVtDZ1cKulf%2BTf9UJCWHdb%2BLs6Q7dMsvBOgeCZKYln0RT5G35XoNCOukWS3wl8d6K7CCV%2F9zGsa9gZMq%2FXhLaNy%2BODIj0TebxdG%2FhDPxqsVIN8bcG1X3wfPil2iizEQj3AS%2FZErojCOW2Oz862lkyylf8992NZgOd1s5oAXZAOp84RgDo9hEtBzXXZ7e1mUESK5mOg3Lbw93W6bk6OEQ%2BDhNRWRr5kMkIGelmWSLZbwIBe4XeflKjeQunYTUbn8Ag3FJUw2rC%2BSGJ2rT7%2B6ZONEhrkiMcx2qlwu4k5eEC9EXLwKoEmwGfYMEsawjElQKAOoe747JGRV%2FKxv1fVtc7a69mDALPrZlEhmnWPAfjY1LcFrMrkNNSKEooQNMpP0zF3keodX0zrRcD2x1pRf9DiZL7RKgCBxP0VhR8ODey2C2Fs6VX51dVMsM%2BJ0q%2FN%2B7YF2zQwfEaPAQe7jj6zq4rzS2Zc8mqu1Gbtdz4SyMbYRNO8Odl8fNyY6GoEOF1rxju00BubaI9YY%2FsLDHpLtdx%2FlWQVoioDPTcGechSAeW8MxgH0qzghIRBiAFtMG0sbCKZtBQsM38W1LnmYhtJoOpD4Of4sJjDo9YrIBjqkAZ8tGGVQiEY9FcLkBD8XBjFbJqbDkxREwLsNmXRqiZ%2Frzv3PHd2XxVYlRCYaKK4jsoa5c6gHByKlchCuDYxKfUsZ%2FK2BEr5OzB%2FWTXTOxxZPveX7KbNhV%2FFVyzHoRvnIK1Ttq7gjx%2BWhDFtKhMyWfLfzPDpjprCsm6zx2xZ6FDNsp1kyAHjLsd82D4e3%2BFnYdSR4vBUkwTA443FrB6S2htF1SThy&X-Amz-Signature=ce759f94d60fc152943b1461e8fcdde7c01b6198e47e30aa29f01f5d41833305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python "4-4","5-9","14-14","15-15"
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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPH7LR5%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDGHX3ZvmAVgyCIa7kOsonMr7fzid1w8VmmPh1Ua946wwIhAPjeZFJsQZ8IJwjMRThrvriqLV27oXkNJSxvOddRVhYGKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMq9vP9Qbs24TU3QMq3ANFaOM4lUuIG6jJ%2BLyDvfkzHhNgTo5MOIVtDZ1cKulf%2BTf9UJCWHdb%2BLs6Q7dMsvBOgeCZKYln0RT5G35XoNCOukWS3wl8d6K7CCV%2F9zGsa9gZMq%2FXhLaNy%2BODIj0TebxdG%2FhDPxqsVIN8bcG1X3wfPil2iizEQj3AS%2FZErojCOW2Oz862lkyylf8992NZgOd1s5oAXZAOp84RgDo9hEtBzXXZ7e1mUESK5mOg3Lbw93W6bk6OEQ%2BDhNRWRr5kMkIGelmWSLZbwIBe4XeflKjeQunYTUbn8Ag3FJUw2rC%2BSGJ2rT7%2B6ZONEhrkiMcx2qlwu4k5eEC9EXLwKoEmwGfYMEsawjElQKAOoe747JGRV%2FKxv1fVtc7a69mDALPrZlEhmnWPAfjY1LcFrMrkNNSKEooQNMpP0zF3keodX0zrRcD2x1pRf9DiZL7RKgCBxP0VhR8ODey2C2Fs6VX51dVMsM%2BJ0q%2FN%2B7YF2zQwfEaPAQe7jj6zq4rzS2Zc8mqu1Gbtdz4SyMbYRNO8Odl8fNyY6GoEOF1rxju00BubaI9YY%2FsLDHpLtdx%2FlWQVoioDPTcGechSAeW8MxgH0qzghIRBiAFtMG0sbCKZtBQsM38W1LnmYhtJoOpD4Of4sJjDo9YrIBjqkAZ8tGGVQiEY9FcLkBD8XBjFbJqbDkxREwLsNmXRqiZ%2Frzv3PHd2XxVYlRCYaKK4jsoa5c6gHByKlchCuDYxKfUsZ%2FK2BEr5OzB%2FWTXTOxxZPveX7KbNhV%2FFVyzHoRvnIK1Ttq7gjx%2BWhDFtKhMyWfLfzPDpjprCsm6zx2xZ6FDNsp1kyAHjLsd82D4e3%2BFnYdSR4vBUkwTA443FrB6S2htF1SThy&X-Amz-Signature=90d6c2752cc2275241e6fa4d174a53954f91c14367bca75fefba8ce92dec8ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "1-17"

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
  <summary>{{< markdownify >}}**Final code:**{{< /markdownify >}}</summary>
  
```python "15-29"
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

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

<details>
  <summary>{{< markdownify >}}What if I don’t have a robot{{< /markdownify >}}</summary>
  
We can fake the wheel values by doing this

```python "6-7","11-11","12-12","19-20"
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle
    
    # gets called every 0.05 seconds    
    def timer_callback(self):
        new_left_wheel_th = self.left_wheel_th+0.01 # faking wheel position
        new_right_wheel_th = self.right_wheel_th+0.02 # faking wheel position

        current_time = self.get_clock().now().to_msg()
        
        ...
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

This makes it so we just increment the wheel position every period

</details>



## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPH7LR5%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDGHX3ZvmAVgyCIa7kOsonMr7fzid1w8VmmPh1Ua946wwIhAPjeZFJsQZ8IJwjMRThrvriqLV27oXkNJSxvOddRVhYGKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMq9vP9Qbs24TU3QMq3ANFaOM4lUuIG6jJ%2BLyDvfkzHhNgTo5MOIVtDZ1cKulf%2BTf9UJCWHdb%2BLs6Q7dMsvBOgeCZKYln0RT5G35XoNCOukWS3wl8d6K7CCV%2F9zGsa9gZMq%2FXhLaNy%2BODIj0TebxdG%2FhDPxqsVIN8bcG1X3wfPil2iizEQj3AS%2FZErojCOW2Oz862lkyylf8992NZgOd1s5oAXZAOp84RgDo9hEtBzXXZ7e1mUESK5mOg3Lbw93W6bk6OEQ%2BDhNRWRr5kMkIGelmWSLZbwIBe4XeflKjeQunYTUbn8Ag3FJUw2rC%2BSGJ2rT7%2B6ZONEhrkiMcx2qlwu4k5eEC9EXLwKoEmwGfYMEsawjElQKAOoe747JGRV%2FKxv1fVtc7a69mDALPrZlEhmnWPAfjY1LcFrMrkNNSKEooQNMpP0zF3keodX0zrRcD2x1pRf9DiZL7RKgCBxP0VhR8ODey2C2Fs6VX51dVMsM%2BJ0q%2FN%2B7YF2zQwfEaPAQe7jj6zq4rzS2Zc8mqu1Gbtdz4SyMbYRNO8Odl8fNyY6GoEOF1rxju00BubaI9YY%2FsLDHpLtdx%2FlWQVoioDPTcGechSAeW8MxgH0qzghIRBiAFtMG0sbCKZtBQsM38W1LnmYhtJoOpD4Of4sJjDo9YrIBjqkAZ8tGGVQiEY9FcLkBD8XBjFbJqbDkxREwLsNmXRqiZ%2Frzv3PHd2XxVYlRCYaKK4jsoa5c6gHByKlchCuDYxKfUsZ%2FK2BEr5OzB%2FWTXTOxxZPveX7KbNhV%2FFVyzHoRvnIK1Ttq7gjx%2BWhDFtKhMyWfLfzPDpjprCsm6zx2xZ6FDNsp1kyAHjLsd82D4e3%2BFnYdSR4vBUkwTA443FrB6S2htF1SThy&X-Amz-Signature=228f71cd1d9e80231a1ecfc867432d12578b70a6265ce124663575eed45cda10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPH7LR5%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDGHX3ZvmAVgyCIa7kOsonMr7fzid1w8VmmPh1Ua946wwIhAPjeZFJsQZ8IJwjMRThrvriqLV27oXkNJSxvOddRVhYGKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMq9vP9Qbs24TU3QMq3ANFaOM4lUuIG6jJ%2BLyDvfkzHhNgTo5MOIVtDZ1cKulf%2BTf9UJCWHdb%2BLs6Q7dMsvBOgeCZKYln0RT5G35XoNCOukWS3wl8d6K7CCV%2F9zGsa9gZMq%2FXhLaNy%2BODIj0TebxdG%2FhDPxqsVIN8bcG1X3wfPil2iizEQj3AS%2FZErojCOW2Oz862lkyylf8992NZgOd1s5oAXZAOp84RgDo9hEtBzXXZ7e1mUESK5mOg3Lbw93W6bk6OEQ%2BDhNRWRr5kMkIGelmWSLZbwIBe4XeflKjeQunYTUbn8Ag3FJUw2rC%2BSGJ2rT7%2B6ZONEhrkiMcx2qlwu4k5eEC9EXLwKoEmwGfYMEsawjElQKAOoe747JGRV%2FKxv1fVtc7a69mDALPrZlEhmnWPAfjY1LcFrMrkNNSKEooQNMpP0zF3keodX0zrRcD2x1pRf9DiZL7RKgCBxP0VhR8ODey2C2Fs6VX51dVMsM%2BJ0q%2FN%2B7YF2zQwfEaPAQe7jj6zq4rzS2Zc8mqu1Gbtdz4SyMbYRNO8Odl8fNyY6GoEOF1rxju00BubaI9YY%2FsLDHpLtdx%2FlWQVoioDPTcGechSAeW8MxgH0qzghIRBiAFtMG0sbCKZtBQsM38W1LnmYhtJoOpD4Of4sJjDo9YrIBjqkAZ8tGGVQiEY9FcLkBD8XBjFbJqbDkxREwLsNmXRqiZ%2Frzv3PHd2XxVYlRCYaKK4jsoa5c6gHByKlchCuDYxKfUsZ%2FK2BEr5OzB%2FWTXTOxxZPveX7KbNhV%2FFVyzHoRvnIK1Ttq7gjx%2BWhDFtKhMyWfLfzPDpjprCsm6zx2xZ6FDNsp1kyAHjLsd82D4e3%2BFnYdSR4vBUkwTA443FrB6S2htF1SThy&X-Amz-Signature=36e6e899f1a9c089a5c7350b349d2a80e788702c198c508f4a04d84b6d7461fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python "2-2"
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPH7LR5%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDGHX3ZvmAVgyCIa7kOsonMr7fzid1w8VmmPh1Ua946wwIhAPjeZFJsQZ8IJwjMRThrvriqLV27oXkNJSxvOddRVhYGKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMq9vP9Qbs24TU3QMq3ANFaOM4lUuIG6jJ%2BLyDvfkzHhNgTo5MOIVtDZ1cKulf%2BTf9UJCWHdb%2BLs6Q7dMsvBOgeCZKYln0RT5G35XoNCOukWS3wl8d6K7CCV%2F9zGsa9gZMq%2FXhLaNy%2BODIj0TebxdG%2FhDPxqsVIN8bcG1X3wfPil2iizEQj3AS%2FZErojCOW2Oz862lkyylf8992NZgOd1s5oAXZAOp84RgDo9hEtBzXXZ7e1mUESK5mOg3Lbw93W6bk6OEQ%2BDhNRWRr5kMkIGelmWSLZbwIBe4XeflKjeQunYTUbn8Ag3FJUw2rC%2BSGJ2rT7%2B6ZONEhrkiMcx2qlwu4k5eEC9EXLwKoEmwGfYMEsawjElQKAOoe747JGRV%2FKxv1fVtc7a69mDALPrZlEhmnWPAfjY1LcFrMrkNNSKEooQNMpP0zF3keodX0zrRcD2x1pRf9DiZL7RKgCBxP0VhR8ODey2C2Fs6VX51dVMsM%2BJ0q%2FN%2B7YF2zQwfEaPAQe7jj6zq4rzS2Zc8mqu1Gbtdz4SyMbYRNO8Odl8fNyY6GoEOF1rxju00BubaI9YY%2FsLDHpLtdx%2FlWQVoioDPTcGechSAeW8MxgH0qzghIRBiAFtMG0sbCKZtBQsM38W1LnmYhtJoOpD4Of4sJjDo9YrIBjqkAZ8tGGVQiEY9FcLkBD8XBjFbJqbDkxREwLsNmXRqiZ%2Frzv3PHd2XxVYlRCYaKK4jsoa5c6gHByKlchCuDYxKfUsZ%2FK2BEr5OzB%2FWTXTOxxZPveX7KbNhV%2FFVyzHoRvnIK1Ttq7gjx%2BWhDFtKhMyWfLfzPDpjprCsm6zx2xZ6FDNsp1kyAHjLsd82D4e3%2BFnYdSR4vBUkwTA443FrB6S2htF1SThy&X-Amz-Signature=bd1e7d6a8f04d372230be3e33244380df287356970ac264260551ef2a8832da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python "1-2","2-3","4-7","10-11"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPH7LR5%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDGHX3ZvmAVgyCIa7kOsonMr7fzid1w8VmmPh1Ua946wwIhAPjeZFJsQZ8IJwjMRThrvriqLV27oXkNJSxvOddRVhYGKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMq9vP9Qbs24TU3QMq3ANFaOM4lUuIG6jJ%2BLyDvfkzHhNgTo5MOIVtDZ1cKulf%2BTf9UJCWHdb%2BLs6Q7dMsvBOgeCZKYln0RT5G35XoNCOukWS3wl8d6K7CCV%2F9zGsa9gZMq%2FXhLaNy%2BODIj0TebxdG%2FhDPxqsVIN8bcG1X3wfPil2iizEQj3AS%2FZErojCOW2Oz862lkyylf8992NZgOd1s5oAXZAOp84RgDo9hEtBzXXZ7e1mUESK5mOg3Lbw93W6bk6OEQ%2BDhNRWRr5kMkIGelmWSLZbwIBe4XeflKjeQunYTUbn8Ag3FJUw2rC%2BSGJ2rT7%2B6ZONEhrkiMcx2qlwu4k5eEC9EXLwKoEmwGfYMEsawjElQKAOoe747JGRV%2FKxv1fVtc7a69mDALPrZlEhmnWPAfjY1LcFrMrkNNSKEooQNMpP0zF3keodX0zrRcD2x1pRf9DiZL7RKgCBxP0VhR8ODey2C2Fs6VX51dVMsM%2BJ0q%2FN%2B7YF2zQwfEaPAQe7jj6zq4rzS2Zc8mqu1Gbtdz4SyMbYRNO8Odl8fNyY6GoEOF1rxju00BubaI9YY%2FsLDHpLtdx%2FlWQVoioDPTcGechSAeW8MxgH0qzghIRBiAFtMG0sbCKZtBQsM38W1LnmYhtJoOpD4Of4sJjDo9YrIBjqkAZ8tGGVQiEY9FcLkBD8XBjFbJqbDkxREwLsNmXRqiZ%2Frzv3PHd2XxVYlRCYaKK4jsoa5c6gHByKlchCuDYxKfUsZ%2FK2BEr5OzB%2FWTXTOxxZPveX7KbNhV%2FFVyzHoRvnIK1Ttq7gjx%2BWhDFtKhMyWfLfzPDpjprCsm6zx2xZ6FDNsp1kyAHjLsd82D4e3%2BFnYdSR4vBUkwTA443FrB6S2htF1SThy&X-Amz-Signature=a64834edca0f14a3fe49e654f05e4f551ad13b9093d42fe871ed4c1d66bbe569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPH7LR5%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDGHX3ZvmAVgyCIa7kOsonMr7fzid1w8VmmPh1Ua946wwIhAPjeZFJsQZ8IJwjMRThrvriqLV27oXkNJSxvOddRVhYGKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMq9vP9Qbs24TU3QMq3ANFaOM4lUuIG6jJ%2BLyDvfkzHhNgTo5MOIVtDZ1cKulf%2BTf9UJCWHdb%2BLs6Q7dMsvBOgeCZKYln0RT5G35XoNCOukWS3wl8d6K7CCV%2F9zGsa9gZMq%2FXhLaNy%2BODIj0TebxdG%2FhDPxqsVIN8bcG1X3wfPil2iizEQj3AS%2FZErojCOW2Oz862lkyylf8992NZgOd1s5oAXZAOp84RgDo9hEtBzXXZ7e1mUESK5mOg3Lbw93W6bk6OEQ%2BDhNRWRr5kMkIGelmWSLZbwIBe4XeflKjeQunYTUbn8Ag3FJUw2rC%2BSGJ2rT7%2B6ZONEhrkiMcx2qlwu4k5eEC9EXLwKoEmwGfYMEsawjElQKAOoe747JGRV%2FKxv1fVtc7a69mDALPrZlEhmnWPAfjY1LcFrMrkNNSKEooQNMpP0zF3keodX0zrRcD2x1pRf9DiZL7RKgCBxP0VhR8ODey2C2Fs6VX51dVMsM%2BJ0q%2FN%2B7YF2zQwfEaPAQe7jj6zq4rzS2Zc8mqu1Gbtdz4SyMbYRNO8Odl8fNyY6GoEOF1rxju00BubaI9YY%2FsLDHpLtdx%2FlWQVoioDPTcGechSAeW8MxgH0qzghIRBiAFtMG0sbCKZtBQsM38W1LnmYhtJoOpD4Of4sJjDo9YrIBjqkAZ8tGGVQiEY9FcLkBD8XBjFbJqbDkxREwLsNmXRqiZ%2Frzv3PHd2XxVYlRCYaKK4jsoa5c6gHByKlchCuDYxKfUsZ%2FK2BEr5OzB%2FWTXTOxxZPveX7KbNhV%2FFVyzHoRvnIK1Ttq7gjx%2BWhDFtKhMyWfLfzPDpjprCsm6zx2xZ6FDNsp1kyAHjLsd82D4e3%2BFnYdSR4vBUkwTA443FrB6S2htF1SThy&X-Amz-Signature=3a40f0b84434d0181db7ef03b17b7cd4686a7e74abb4b96df721b4d11f8a5dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTGN3EVB%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBgHWz9xyehIzUv4CTZO3xP6grKRxa9O87NuWbfTVpI1AiEAqJ4%2FkxQm5%2BduAw3F5PUmhYQddyY%2FMbuyr0ajQfvwzAYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHV1H%2FLKJbTQ0ThCyrcA281pjn4rV6b2wFthLSezm22t6DB4Mfi63W1n6xKS3x3PH0jmAIUDJEFGMTGaIZO9kKMu0tpXQix8vhJV3UYMSajKeKv4hdRWwAycVJ%2F%2F%2BUCrYJPxKZ%2FpovjSw4%2BPK2UtkvB9C93gBEV69KSpPLia9LC7iQJjuI7%2FleD3YAPU6Vdz3mWYAA02kDrK%2B%2F6u9ZjRgKkOXoJyfVS1p4tVTY0ZPziXvPQofM3pXy%2F74IFII2t4J%2BRdxCS5ZeFJQMXTX9oj5poN6foHIrIrjYqLa82%2FZnTV%2FFeHN9MEsGbnsk%2BWHIxJOZH1WsbBYckFtXIT29J9a0D6ZQgijXsWv5HmHc3aIdy9dG8Pi5x96vLIYiD%2BveXCzT34ZX4YIrGgqD%2BRXXSEZwvJVfQtfOxGGK%2BN3%2B%2Bv%2FWD%2F46qXkaGoH0LAwxWBuHEnFhoIjzgrnZ74%2FTx5O6AfM6pDIYHaol7yV3f8riCVJb62N1WJn6m4HWV%2FQ9MmAk8Ches6ycuC49zYKpWWW0LTl7Km4yVJ92RHFhazj2g7uzEnXW%2FI1%2FEjS06%2FIGNTdx7dKMMibfLjzDfcj%2FK2o2zIZg7TSBNLKL%2FhkDgtq9H2VExt%2BJyIG171e7ogUK9w%2F6T7pdbAR1d7W1aGPPyMKj1isgGOqUBjzuhW5HXTmUlW231S6xeFEtWMUZGsvImrQS167851mGsPIvOldXObJNYYZT3azHWcW3GOD0jJsFkmuzfcLQd6MKdC9zFSkbnoxPVEjQU6Kncf0f5SbXf1kFHcEmw%2B0qoL6cyc%2BVirhJahFScT538pGa1d31r7hNWUJdd6szM0UQpJdiFIkMY8pkOfOgN54%2B68Qci39VvLfRdM9V%2BjNJWkM5zsR2l&X-Amz-Signature=a516eaebb6d5b15e92291cf493e92c95f6a4e4dfbe86c310eef446c04d503e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO:

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

```python "10-11","12-17"
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

```python "9-20","20-23"
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

```python "14-14"
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

```python "6-18","18-19","19-20","20-33"
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCBTS5ZY%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDTjrjuZd211Fc%2Fog9UMsGCWFddYO7GqPesKWrEfUP44AIgaA9RXOYsxa2Ga5cspZ4S4R5OS0Ug%2BJoCJdSgecbWk6gqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNySOngJG7cQFrrIlSrcA8Nshf7kg8vV4J%2FKoKUiT2ZBGTSJxx7mW8CGnhPQd6YAOOj4qj73Omboc1IxeVVIa0UjmrQE0qK2yRshJrRcp5ZKPhr0TAxQy9WshutnCuDjpfUdHRD3pBYBSLRmGAr%2B2TWaNlPDghy7CDzRSPIEjxkRBHm4prI39dEhRTgoV0ZCt4iTw2ItZIcneQH%2FDoM6MsNN5FEdz9a3TktcfZlPahnD01Jy%2F2u3rM5K%2BAqAZbQilWnQvAuIj37LtCjJf6maUGtNddiJI7bOhH8oMa8eOUYPKnfuBaBw0GTDkF5vYUbaVLNQs3Ks%2BkVOHCgF0%2FDqVA%2FWAOMLnJm%2BeECgnllZshwZJ9vy6t%2BC4VYsak6U8Q8yZiSqAX3Z5k88JPm%2BG3eaxNT0XJhN0j8Bg2hMxtOp3F5id0kPMG68yynxzArQYtgt8VdeSVs8aIU%2BQZi3zpPXmI2OPbItTeUSwO3n0LNNjwMQKOrWv7Kex023m8rar24xSyaMUncbg%2FJkw8LM3aKcibHWNYgMyyQEwPJS3BvSVvDenS7apSzQd7t%2FCi6A59Ic5OKd2DG5PaL4zC782T7VwE6N1AW8zz2r6OP3ZwJLjHKCAIYGbjUAF3dYL4grF14YU75%2Ff5%2Fr8YKWz3ufMMX1isgGOqUBXyH8S%2Fy1KrYL1N9Ia7rylvNpaPodfPMnoJ2ICfClI9HNNyrasm888MAxm0oXRi05p0SI2FMhB1aCKLS3EfSv1mm3l8MGUWSKnuzLAIAqtZjeCvlb%2FeaXOKIFSNrT3p2yq5q6noR0wmnAb9VMpefsX3wGLFhtNBnvmDXlXsdPRGESY4%2BZCmoyi7yBHKYZqvEoz84vLTp8fPGATjd5GJ25g%2BOxISo1&X-Amz-Signature=f0d7cbaba96b3b71fd9bf3194e410fe003e5e320bd17dae7d4be8de56c7d8cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCBTS5ZY%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDTjrjuZd211Fc%2Fog9UMsGCWFddYO7GqPesKWrEfUP44AIgaA9RXOYsxa2Ga5cspZ4S4R5OS0Ug%2BJoCJdSgecbWk6gqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNySOngJG7cQFrrIlSrcA8Nshf7kg8vV4J%2FKoKUiT2ZBGTSJxx7mW8CGnhPQd6YAOOj4qj73Omboc1IxeVVIa0UjmrQE0qK2yRshJrRcp5ZKPhr0TAxQy9WshutnCuDjpfUdHRD3pBYBSLRmGAr%2B2TWaNlPDghy7CDzRSPIEjxkRBHm4prI39dEhRTgoV0ZCt4iTw2ItZIcneQH%2FDoM6MsNN5FEdz9a3TktcfZlPahnD01Jy%2F2u3rM5K%2BAqAZbQilWnQvAuIj37LtCjJf6maUGtNddiJI7bOhH8oMa8eOUYPKnfuBaBw0GTDkF5vYUbaVLNQs3Ks%2BkVOHCgF0%2FDqVA%2FWAOMLnJm%2BeECgnllZshwZJ9vy6t%2BC4VYsak6U8Q8yZiSqAX3Z5k88JPm%2BG3eaxNT0XJhN0j8Bg2hMxtOp3F5id0kPMG68yynxzArQYtgt8VdeSVs8aIU%2BQZi3zpPXmI2OPbItTeUSwO3n0LNNjwMQKOrWv7Kex023m8rar24xSyaMUncbg%2FJkw8LM3aKcibHWNYgMyyQEwPJS3BvSVvDenS7apSzQd7t%2FCi6A59Ic5OKd2DG5PaL4zC782T7VwE6N1AW8zz2r6OP3ZwJLjHKCAIYGbjUAF3dYL4grF14YU75%2Ff5%2Fr8YKWz3ufMMX1isgGOqUBXyH8S%2Fy1KrYL1N9Ia7rylvNpaPodfPMnoJ2ICfClI9HNNyrasm888MAxm0oXRi05p0SI2FMhB1aCKLS3EfSv1mm3l8MGUWSKnuzLAIAqtZjeCvlb%2FeaXOKIFSNrT3p2yq5q6noR0wmnAb9VMpefsX3wGLFhtNBnvmDXlXsdPRGESY4%2BZCmoyi7yBHKYZqvEoz84vLTp8fPGATjd5GJ25g%2BOxISo1&X-Amz-Signature=0d88f3da34751102404553b87dd72cec3787c4aa0f1d1f0981a26947b89eb5fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCBTS5ZY%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDTjrjuZd211Fc%2Fog9UMsGCWFddYO7GqPesKWrEfUP44AIgaA9RXOYsxa2Ga5cspZ4S4R5OS0Ug%2BJoCJdSgecbWk6gqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNySOngJG7cQFrrIlSrcA8Nshf7kg8vV4J%2FKoKUiT2ZBGTSJxx7mW8CGnhPQd6YAOOj4qj73Omboc1IxeVVIa0UjmrQE0qK2yRshJrRcp5ZKPhr0TAxQy9WshutnCuDjpfUdHRD3pBYBSLRmGAr%2B2TWaNlPDghy7CDzRSPIEjxkRBHm4prI39dEhRTgoV0ZCt4iTw2ItZIcneQH%2FDoM6MsNN5FEdz9a3TktcfZlPahnD01Jy%2F2u3rM5K%2BAqAZbQilWnQvAuIj37LtCjJf6maUGtNddiJI7bOhH8oMa8eOUYPKnfuBaBw0GTDkF5vYUbaVLNQs3Ks%2BkVOHCgF0%2FDqVA%2FWAOMLnJm%2BeECgnllZshwZJ9vy6t%2BC4VYsak6U8Q8yZiSqAX3Z5k88JPm%2BG3eaxNT0XJhN0j8Bg2hMxtOp3F5id0kPMG68yynxzArQYtgt8VdeSVs8aIU%2BQZi3zpPXmI2OPbItTeUSwO3n0LNNjwMQKOrWv7Kex023m8rar24xSyaMUncbg%2FJkw8LM3aKcibHWNYgMyyQEwPJS3BvSVvDenS7apSzQd7t%2FCi6A59Ic5OKd2DG5PaL4zC782T7VwE6N1AW8zz2r6OP3ZwJLjHKCAIYGbjUAF3dYL4grF14YU75%2Ff5%2Fr8YKWz3ufMMX1isgGOqUBXyH8S%2Fy1KrYL1N9Ia7rylvNpaPodfPMnoJ2ICfClI9HNNyrasm888MAxm0oXRi05p0SI2FMhB1aCKLS3EfSv1mm3l8MGUWSKnuzLAIAqtZjeCvlb%2FeaXOKIFSNrT3p2yq5q6noR0wmnAb9VMpefsX3wGLFhtNBnvmDXlXsdPRGESY4%2BZCmoyi7yBHKYZqvEoz84vLTp8fPGATjd5GJ25g%2BOxISo1&X-Amz-Signature=54bd5e84549648943f97b1659e5f934347a1744c2d6c46bb8de08b2bc270a76b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python "18-18","24-25"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCBTS5ZY%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDTjrjuZd211Fc%2Fog9UMsGCWFddYO7GqPesKWrEfUP44AIgaA9RXOYsxa2Ga5cspZ4S4R5OS0Ug%2BJoCJdSgecbWk6gqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNySOngJG7cQFrrIlSrcA8Nshf7kg8vV4J%2FKoKUiT2ZBGTSJxx7mW8CGnhPQd6YAOOj4qj73Omboc1IxeVVIa0UjmrQE0qK2yRshJrRcp5ZKPhr0TAxQy9WshutnCuDjpfUdHRD3pBYBSLRmGAr%2B2TWaNlPDghy7CDzRSPIEjxkRBHm4prI39dEhRTgoV0ZCt4iTw2ItZIcneQH%2FDoM6MsNN5FEdz9a3TktcfZlPahnD01Jy%2F2u3rM5K%2BAqAZbQilWnQvAuIj37LtCjJf6maUGtNddiJI7bOhH8oMa8eOUYPKnfuBaBw0GTDkF5vYUbaVLNQs3Ks%2BkVOHCgF0%2FDqVA%2FWAOMLnJm%2BeECgnllZshwZJ9vy6t%2BC4VYsak6U8Q8yZiSqAX3Z5k88JPm%2BG3eaxNT0XJhN0j8Bg2hMxtOp3F5id0kPMG68yynxzArQYtgt8VdeSVs8aIU%2BQZi3zpPXmI2OPbItTeUSwO3n0LNNjwMQKOrWv7Kex023m8rar24xSyaMUncbg%2FJkw8LM3aKcibHWNYgMyyQEwPJS3BvSVvDenS7apSzQd7t%2FCi6A59Ic5OKd2DG5PaL4zC782T7VwE6N1AW8zz2r6OP3ZwJLjHKCAIYGbjUAF3dYL4grF14YU75%2Ff5%2Fr8YKWz3ufMMX1isgGOqUBXyH8S%2Fy1KrYL1N9Ia7rylvNpaPodfPMnoJ2ICfClI9HNNyrasm888MAxm0oXRi05p0SI2FMhB1aCKLS3EfSv1mm3l8MGUWSKnuzLAIAqtZjeCvlb%2FeaXOKIFSNrT3p2yq5q6noR0wmnAb9VMpefsX3wGLFhtNBnvmDXlXsdPRGESY4%2BZCmoyi7yBHKYZqvEoz84vLTp8fPGATjd5GJ25g%2BOxISo1&X-Amz-Signature=ea7920ce62301fae3676d43d69b13e212575f4bee7607be623b02d0999d360f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

#### Params:

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCBTS5ZY%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDTjrjuZd211Fc%2Fog9UMsGCWFddYO7GqPesKWrEfUP44AIgaA9RXOYsxa2Ga5cspZ4S4R5OS0Ug%2BJoCJdSgecbWk6gqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNySOngJG7cQFrrIlSrcA8Nshf7kg8vV4J%2FKoKUiT2ZBGTSJxx7mW8CGnhPQd6YAOOj4qj73Omboc1IxeVVIa0UjmrQE0qK2yRshJrRcp5ZKPhr0TAxQy9WshutnCuDjpfUdHRD3pBYBSLRmGAr%2B2TWaNlPDghy7CDzRSPIEjxkRBHm4prI39dEhRTgoV0ZCt4iTw2ItZIcneQH%2FDoM6MsNN5FEdz9a3TktcfZlPahnD01Jy%2F2u3rM5K%2BAqAZbQilWnQvAuIj37LtCjJf6maUGtNddiJI7bOhH8oMa8eOUYPKnfuBaBw0GTDkF5vYUbaVLNQs3Ks%2BkVOHCgF0%2FDqVA%2FWAOMLnJm%2BeECgnllZshwZJ9vy6t%2BC4VYsak6U8Q8yZiSqAX3Z5k88JPm%2BG3eaxNT0XJhN0j8Bg2hMxtOp3F5id0kPMG68yynxzArQYtgt8VdeSVs8aIU%2BQZi3zpPXmI2OPbItTeUSwO3n0LNNjwMQKOrWv7Kex023m8rar24xSyaMUncbg%2FJkw8LM3aKcibHWNYgMyyQEwPJS3BvSVvDenS7apSzQd7t%2FCi6A59Ic5OKd2DG5PaL4zC782T7VwE6N1AW8zz2r6OP3ZwJLjHKCAIYGbjUAF3dYL4grF14YU75%2Ff5%2Fr8YKWz3ufMMX1isgGOqUBXyH8S%2Fy1KrYL1N9Ia7rylvNpaPodfPMnoJ2ICfClI9HNNyrasm888MAxm0oXRi05p0SI2FMhB1aCKLS3EfSv1mm3l8MGUWSKnuzLAIAqtZjeCvlb%2FeaXOKIFSNrT3p2yq5q6noR0wmnAb9VMpefsX3wGLFhtNBnvmDXlXsdPRGESY4%2BZCmoyi7yBHKYZqvEoz84vLTp8fPGATjd5GJ25g%2BOxISo1&X-Amz-Signature=9c30f75a4231f7e923b2e33572bf446a1417de46770072de539f134c7b2f38d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCBTS5ZY%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDTjrjuZd211Fc%2Fog9UMsGCWFddYO7GqPesKWrEfUP44AIgaA9RXOYsxa2Ga5cspZ4S4R5OS0Ug%2BJoCJdSgecbWk6gqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNySOngJG7cQFrrIlSrcA8Nshf7kg8vV4J%2FKoKUiT2ZBGTSJxx7mW8CGnhPQd6YAOOj4qj73Omboc1IxeVVIa0UjmrQE0qK2yRshJrRcp5ZKPhr0TAxQy9WshutnCuDjpfUdHRD3pBYBSLRmGAr%2B2TWaNlPDghy7CDzRSPIEjxkRBHm4prI39dEhRTgoV0ZCt4iTw2ItZIcneQH%2FDoM6MsNN5FEdz9a3TktcfZlPahnD01Jy%2F2u3rM5K%2BAqAZbQilWnQvAuIj37LtCjJf6maUGtNddiJI7bOhH8oMa8eOUYPKnfuBaBw0GTDkF5vYUbaVLNQs3Ks%2BkVOHCgF0%2FDqVA%2FWAOMLnJm%2BeECgnllZshwZJ9vy6t%2BC4VYsak6U8Q8yZiSqAX3Z5k88JPm%2BG3eaxNT0XJhN0j8Bg2hMxtOp3F5id0kPMG68yynxzArQYtgt8VdeSVs8aIU%2BQZi3zpPXmI2OPbItTeUSwO3n0LNNjwMQKOrWv7Kex023m8rar24xSyaMUncbg%2FJkw8LM3aKcibHWNYgMyyQEwPJS3BvSVvDenS7apSzQd7t%2FCi6A59Ic5OKd2DG5PaL4zC782T7VwE6N1AW8zz2r6OP3ZwJLjHKCAIYGbjUAF3dYL4grF14YU75%2Ff5%2Fr8YKWz3ufMMX1isgGOqUBXyH8S%2Fy1KrYL1N9Ia7rylvNpaPodfPMnoJ2ICfClI9HNNyrasm888MAxm0oXRi05p0SI2FMhB1aCKLS3EfSv1mm3l8MGUWSKnuzLAIAqtZjeCvlb%2FeaXOKIFSNrT3p2yq5q6noR0wmnAb9VMpefsX3wGLFhtNBnvmDXlXsdPRGESY4%2BZCmoyi7yBHKYZqvEoz84vLTp8fPGATjd5GJ25g%2BOxISo1&X-Amz-Signature=70627cc4d894adab323380740d6671dbb820d2da3737070db0aaf056af589c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCBTS5ZY%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDTjrjuZd211Fc%2Fog9UMsGCWFddYO7GqPesKWrEfUP44AIgaA9RXOYsxa2Ga5cspZ4S4R5OS0Ug%2BJoCJdSgecbWk6gqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNySOngJG7cQFrrIlSrcA8Nshf7kg8vV4J%2FKoKUiT2ZBGTSJxx7mW8CGnhPQd6YAOOj4qj73Omboc1IxeVVIa0UjmrQE0qK2yRshJrRcp5ZKPhr0TAxQy9WshutnCuDjpfUdHRD3pBYBSLRmGAr%2B2TWaNlPDghy7CDzRSPIEjxkRBHm4prI39dEhRTgoV0ZCt4iTw2ItZIcneQH%2FDoM6MsNN5FEdz9a3TktcfZlPahnD01Jy%2F2u3rM5K%2BAqAZbQilWnQvAuIj37LtCjJf6maUGtNddiJI7bOhH8oMa8eOUYPKnfuBaBw0GTDkF5vYUbaVLNQs3Ks%2BkVOHCgF0%2FDqVA%2FWAOMLnJm%2BeECgnllZshwZJ9vy6t%2BC4VYsak6U8Q8yZiSqAX3Z5k88JPm%2BG3eaxNT0XJhN0j8Bg2hMxtOp3F5id0kPMG68yynxzArQYtgt8VdeSVs8aIU%2BQZi3zpPXmI2OPbItTeUSwO3n0LNNjwMQKOrWv7Kex023m8rar24xSyaMUncbg%2FJkw8LM3aKcibHWNYgMyyQEwPJS3BvSVvDenS7apSzQd7t%2FCi6A59Ic5OKd2DG5PaL4zC782T7VwE6N1AW8zz2r6OP3ZwJLjHKCAIYGbjUAF3dYL4grF14YU75%2Ff5%2Fr8YKWz3ufMMX1isgGOqUBXyH8S%2Fy1KrYL1N9Ia7rylvNpaPodfPMnoJ2ICfClI9HNNyrasm888MAxm0oXRi05p0SI2FMhB1aCKLS3EfSv1mm3l8MGUWSKnuzLAIAqtZjeCvlb%2FeaXOKIFSNrT3p2yq5q6noR0wmnAb9VMpefsX3wGLFhtNBnvmDXlXsdPRGESY4%2BZCmoyi7yBHKYZqvEoz84vLTp8fPGATjd5GJ25g%2BOxISo1&X-Amz-Signature=226ebe3563516bf0c26570cead7201932a60e302bdc3da1eddd016c6c1107b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCBTS5ZY%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDTjrjuZd211Fc%2Fog9UMsGCWFddYO7GqPesKWrEfUP44AIgaA9RXOYsxa2Ga5cspZ4S4R5OS0Ug%2BJoCJdSgecbWk6gqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNySOngJG7cQFrrIlSrcA8Nshf7kg8vV4J%2FKoKUiT2ZBGTSJxx7mW8CGnhPQd6YAOOj4qj73Omboc1IxeVVIa0UjmrQE0qK2yRshJrRcp5ZKPhr0TAxQy9WshutnCuDjpfUdHRD3pBYBSLRmGAr%2B2TWaNlPDghy7CDzRSPIEjxkRBHm4prI39dEhRTgoV0ZCt4iTw2ItZIcneQH%2FDoM6MsNN5FEdz9a3TktcfZlPahnD01Jy%2F2u3rM5K%2BAqAZbQilWnQvAuIj37LtCjJf6maUGtNddiJI7bOhH8oMa8eOUYPKnfuBaBw0GTDkF5vYUbaVLNQs3Ks%2BkVOHCgF0%2FDqVA%2FWAOMLnJm%2BeECgnllZshwZJ9vy6t%2BC4VYsak6U8Q8yZiSqAX3Z5k88JPm%2BG3eaxNT0XJhN0j8Bg2hMxtOp3F5id0kPMG68yynxzArQYtgt8VdeSVs8aIU%2BQZi3zpPXmI2OPbItTeUSwO3n0LNNjwMQKOrWv7Kex023m8rar24xSyaMUncbg%2FJkw8LM3aKcibHWNYgMyyQEwPJS3BvSVvDenS7apSzQd7t%2FCi6A59Ic5OKd2DG5PaL4zC782T7VwE6N1AW8zz2r6OP3ZwJLjHKCAIYGbjUAF3dYL4grF14YU75%2Ff5%2Fr8YKWz3ufMMX1isgGOqUBXyH8S%2Fy1KrYL1N9Ia7rylvNpaPodfPMnoJ2ICfClI9HNNyrasm888MAxm0oXRi05p0SI2FMhB1aCKLS3EfSv1mm3l8MGUWSKnuzLAIAqtZjeCvlb%2FeaXOKIFSNrT3p2yq5q6noR0wmnAb9VMpefsX3wGLFhtNBnvmDXlXsdPRGESY4%2BZCmoyi7yBHKYZqvEoz84vLTp8fPGATjd5GJ25g%2BOxISo1&X-Amz-Signature=4449557518f1054029b0b4a482aa86dba6789037e2222f8ac918549fce441fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCBTS5ZY%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDTjrjuZd211Fc%2Fog9UMsGCWFddYO7GqPesKWrEfUP44AIgaA9RXOYsxa2Ga5cspZ4S4R5OS0Ug%2BJoCJdSgecbWk6gqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNySOngJG7cQFrrIlSrcA8Nshf7kg8vV4J%2FKoKUiT2ZBGTSJxx7mW8CGnhPQd6YAOOj4qj73Omboc1IxeVVIa0UjmrQE0qK2yRshJrRcp5ZKPhr0TAxQy9WshutnCuDjpfUdHRD3pBYBSLRmGAr%2B2TWaNlPDghy7CDzRSPIEjxkRBHm4prI39dEhRTgoV0ZCt4iTw2ItZIcneQH%2FDoM6MsNN5FEdz9a3TktcfZlPahnD01Jy%2F2u3rM5K%2BAqAZbQilWnQvAuIj37LtCjJf6maUGtNddiJI7bOhH8oMa8eOUYPKnfuBaBw0GTDkF5vYUbaVLNQs3Ks%2BkVOHCgF0%2FDqVA%2FWAOMLnJm%2BeECgnllZshwZJ9vy6t%2BC4VYsak6U8Q8yZiSqAX3Z5k88JPm%2BG3eaxNT0XJhN0j8Bg2hMxtOp3F5id0kPMG68yynxzArQYtgt8VdeSVs8aIU%2BQZi3zpPXmI2OPbItTeUSwO3n0LNNjwMQKOrWv7Kex023m8rar24xSyaMUncbg%2FJkw8LM3aKcibHWNYgMyyQEwPJS3BvSVvDenS7apSzQd7t%2FCi6A59Ic5OKd2DG5PaL4zC782T7VwE6N1AW8zz2r6OP3ZwJLjHKCAIYGbjUAF3dYL4grF14YU75%2Ff5%2Fr8YKWz3ufMMX1isgGOqUBXyH8S%2Fy1KrYL1N9Ia7rylvNpaPodfPMnoJ2ICfClI9HNNyrasm888MAxm0oXRi05p0SI2FMhB1aCKLS3EfSv1mm3l8MGUWSKnuzLAIAqtZjeCvlb%2FeaXOKIFSNrT3p2yq5q6noR0wmnAb9VMpefsX3wGLFhtNBnvmDXlXsdPRGESY4%2BZCmoyi7yBHKYZqvEoz84vLTp8fPGATjd5GJ25g%2BOxISo1&X-Amz-Signature=0e9631d994cf106ff863f6b1978c7dc93128f860c3cccc1e5ae6026e664eb660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "10-10","16-27"
       
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
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin


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

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.05 seconds

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # broadcasts the odom tf frame

        # call listener_callback() when /cmd_vel topic recives a msg
        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 
    

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th = self.left_wheel_th+0.01 # reading motor position goes here
        new_right_wheel_th = self.right_wheel_th+0.02 # reading motor position goes here
        
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

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.left_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th) # converts theta to quaternions
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans) # publish transform

        # update left and right wheel positions
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th


    # gets called when /cmd_vel topic recives a msg
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # self.get_logger().info(f'{msg}')


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



For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
