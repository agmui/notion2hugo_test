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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNA3R2R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDc8hM13qiMSexftQdqxOyHlX8%2BlFAh5TmO7%2FShzt5ShAiEA17rlExnVSKrdWEKNdukF5r669ij%2BvVgw3NbsBn6nwYMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFVriZ6TXj3jigmiCrcAzvZuof2DKzC8aPyF1m6gKKxiNhdjQn0BSDNTOiAZ1d%2BYP2h%2B4eGjLN1eC0PAz%2B92aaYAhVYPFCyPcXEHOa9zr708MtyFlJSsTakMYewuuqYk0kuGogG4%2FhYL7huXdSomQxHM9XQESznXRR9xqKwmDIPVxnNIdrKGdnJjMwL%2F8o866OkXxIZufVMsQN7tKcJbv24h8Kg6eFXmRlM%2BkhXgL4jaLaAiXRB2q020MVKY8M%2F2guudUjS0QWzJ1PzSQi8U%2Bcbw%2FBBCS2LqH1gOYZC27QJj%2BfvTcFmL5HFbOhdSRMqUNhpiN%2BkrEd9EbHuReIdjDfxFeOLw1UUCvqCcZUw7e3Srdddua%2FTTW9hJ0OWF%2BmAwk1NSHK%2FqbDwphYqev5txcd8Ej5bhVBnY9H20oxf7I0rf3XYIul1bzUIUqxBJJ0M%2Fis1l9Ny0WO2cjvC00iGBEsnkx2ThWP8l%2FTsVhbnsxn6Swe4H0qS3X2xZQHX5yfGiWOxn%2B8cuNpqOMZWHip%2BckBaB8Jrj1Hx8Cg%2FTuJ4wvR18LlDdTrv31aCP2%2Bdi5zbgf232t0pdrbTDQQE9wqZ75miHwFhVQccXV5SDlTAAuwGJrcPVvbDb%2BJ43c1%2FfrNUl2w9P3uxCWcFJWyWMMKPnMQGOqUBnvbgMxdONFfS%2BdC1r11ehwoB6y5Mz%2FcxwdgZgU53ocqy4eakAT3cXinxwINwFDwzuvJEcB4QGe%2BPlMI0TEzoZzoFC33Mo3p7Utyuzw0tGO6CTrihJ0vLx%2F%2FJ4S386J0gGFKvP4RvRx4BAZzfDM%2BgejYoIgeYxfUf%2BYvHJp73fS6I2KQ%2FiwTJVN7x%2BEWCniT2bN%2B8vqwZCeBMuSvUXj1el3XMMkyj&X-Amz-Signature=0ed13ea2ebd59e683344219c1a7e2a81ec9de6415e4029ca5929573e8c808b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNA3R2R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDc8hM13qiMSexftQdqxOyHlX8%2BlFAh5TmO7%2FShzt5ShAiEA17rlExnVSKrdWEKNdukF5r669ij%2BvVgw3NbsBn6nwYMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFVriZ6TXj3jigmiCrcAzvZuof2DKzC8aPyF1m6gKKxiNhdjQn0BSDNTOiAZ1d%2BYP2h%2B4eGjLN1eC0PAz%2B92aaYAhVYPFCyPcXEHOa9zr708MtyFlJSsTakMYewuuqYk0kuGogG4%2FhYL7huXdSomQxHM9XQESznXRR9xqKwmDIPVxnNIdrKGdnJjMwL%2F8o866OkXxIZufVMsQN7tKcJbv24h8Kg6eFXmRlM%2BkhXgL4jaLaAiXRB2q020MVKY8M%2F2guudUjS0QWzJ1PzSQi8U%2Bcbw%2FBBCS2LqH1gOYZC27QJj%2BfvTcFmL5HFbOhdSRMqUNhpiN%2BkrEd9EbHuReIdjDfxFeOLw1UUCvqCcZUw7e3Srdddua%2FTTW9hJ0OWF%2BmAwk1NSHK%2FqbDwphYqev5txcd8Ej5bhVBnY9H20oxf7I0rf3XYIul1bzUIUqxBJJ0M%2Fis1l9Ny0WO2cjvC00iGBEsnkx2ThWP8l%2FTsVhbnsxn6Swe4H0qS3X2xZQHX5yfGiWOxn%2B8cuNpqOMZWHip%2BckBaB8Jrj1Hx8Cg%2FTuJ4wvR18LlDdTrv31aCP2%2Bdi5zbgf232t0pdrbTDQQE9wqZ75miHwFhVQccXV5SDlTAAuwGJrcPVvbDb%2BJ43c1%2FfrNUl2w9P3uxCWcFJWyWMMKPnMQGOqUBnvbgMxdONFfS%2BdC1r11ehwoB6y5Mz%2FcxwdgZgU53ocqy4eakAT3cXinxwINwFDwzuvJEcB4QGe%2BPlMI0TEzoZzoFC33Mo3p7Utyuzw0tGO6CTrihJ0vLx%2F%2FJ4S386J0gGFKvP4RvRx4BAZzfDM%2BgejYoIgeYxfUf%2BYvHJp73fS6I2KQ%2FiwTJVN7x%2BEWCniT2bN%2B8vqwZCeBMuSvUXj1el3XMMkyj&X-Amz-Signature=201b7003fca612ca16cb6351daa37fcd75c50ad1925e7b5e6cc8d2dfe39aa5b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNA3R2R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDc8hM13qiMSexftQdqxOyHlX8%2BlFAh5TmO7%2FShzt5ShAiEA17rlExnVSKrdWEKNdukF5r669ij%2BvVgw3NbsBn6nwYMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFVriZ6TXj3jigmiCrcAzvZuof2DKzC8aPyF1m6gKKxiNhdjQn0BSDNTOiAZ1d%2BYP2h%2B4eGjLN1eC0PAz%2B92aaYAhVYPFCyPcXEHOa9zr708MtyFlJSsTakMYewuuqYk0kuGogG4%2FhYL7huXdSomQxHM9XQESznXRR9xqKwmDIPVxnNIdrKGdnJjMwL%2F8o866OkXxIZufVMsQN7tKcJbv24h8Kg6eFXmRlM%2BkhXgL4jaLaAiXRB2q020MVKY8M%2F2guudUjS0QWzJ1PzSQi8U%2Bcbw%2FBBCS2LqH1gOYZC27QJj%2BfvTcFmL5HFbOhdSRMqUNhpiN%2BkrEd9EbHuReIdjDfxFeOLw1UUCvqCcZUw7e3Srdddua%2FTTW9hJ0OWF%2BmAwk1NSHK%2FqbDwphYqev5txcd8Ej5bhVBnY9H20oxf7I0rf3XYIul1bzUIUqxBJJ0M%2Fis1l9Ny0WO2cjvC00iGBEsnkx2ThWP8l%2FTsVhbnsxn6Swe4H0qS3X2xZQHX5yfGiWOxn%2B8cuNpqOMZWHip%2BckBaB8Jrj1Hx8Cg%2FTuJ4wvR18LlDdTrv31aCP2%2Bdi5zbgf232t0pdrbTDQQE9wqZ75miHwFhVQccXV5SDlTAAuwGJrcPVvbDb%2BJ43c1%2FfrNUl2w9P3uxCWcFJWyWMMKPnMQGOqUBnvbgMxdONFfS%2BdC1r11ehwoB6y5Mz%2FcxwdgZgU53ocqy4eakAT3cXinxwINwFDwzuvJEcB4QGe%2BPlMI0TEzoZzoFC33Mo3p7Utyuzw0tGO6CTrihJ0vLx%2F%2FJ4S386J0gGFKvP4RvRx4BAZzfDM%2BgejYoIgeYxfUf%2BYvHJp73fS6I2KQ%2FiwTJVN7x%2BEWCniT2bN%2B8vqwZCeBMuSvUXj1el3XMMkyj&X-Amz-Signature=56c6e0218a27ffa48e922179ac6fc876397a32751f1af5beec6f45ca330911ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNA3R2R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDc8hM13qiMSexftQdqxOyHlX8%2BlFAh5TmO7%2FShzt5ShAiEA17rlExnVSKrdWEKNdukF5r669ij%2BvVgw3NbsBn6nwYMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFVriZ6TXj3jigmiCrcAzvZuof2DKzC8aPyF1m6gKKxiNhdjQn0BSDNTOiAZ1d%2BYP2h%2B4eGjLN1eC0PAz%2B92aaYAhVYPFCyPcXEHOa9zr708MtyFlJSsTakMYewuuqYk0kuGogG4%2FhYL7huXdSomQxHM9XQESznXRR9xqKwmDIPVxnNIdrKGdnJjMwL%2F8o866OkXxIZufVMsQN7tKcJbv24h8Kg6eFXmRlM%2BkhXgL4jaLaAiXRB2q020MVKY8M%2F2guudUjS0QWzJ1PzSQi8U%2Bcbw%2FBBCS2LqH1gOYZC27QJj%2BfvTcFmL5HFbOhdSRMqUNhpiN%2BkrEd9EbHuReIdjDfxFeOLw1UUCvqCcZUw7e3Srdddua%2FTTW9hJ0OWF%2BmAwk1NSHK%2FqbDwphYqev5txcd8Ej5bhVBnY9H20oxf7I0rf3XYIul1bzUIUqxBJJ0M%2Fis1l9Ny0WO2cjvC00iGBEsnkx2ThWP8l%2FTsVhbnsxn6Swe4H0qS3X2xZQHX5yfGiWOxn%2B8cuNpqOMZWHip%2BckBaB8Jrj1Hx8Cg%2FTuJ4wvR18LlDdTrv31aCP2%2Bdi5zbgf232t0pdrbTDQQE9wqZ75miHwFhVQccXV5SDlTAAuwGJrcPVvbDb%2BJ43c1%2FfrNUl2w9P3uxCWcFJWyWMMKPnMQGOqUBnvbgMxdONFfS%2BdC1r11ehwoB6y5Mz%2FcxwdgZgU53ocqy4eakAT3cXinxwINwFDwzuvJEcB4QGe%2BPlMI0TEzoZzoFC33Mo3p7Utyuzw0tGO6CTrihJ0vLx%2F%2FJ4S386J0gGFKvP4RvRx4BAZzfDM%2BgejYoIgeYxfUf%2BYvHJp73fS6I2KQ%2FiwTJVN7x%2BEWCniT2bN%2B8vqwZCeBMuSvUXj1el3XMMkyj&X-Amz-Signature=12daec0509427e6f1adce8913b8ac2fc366b7f79accd44b60144305c1edcb34d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNA3R2R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDc8hM13qiMSexftQdqxOyHlX8%2BlFAh5TmO7%2FShzt5ShAiEA17rlExnVSKrdWEKNdukF5r669ij%2BvVgw3NbsBn6nwYMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFVriZ6TXj3jigmiCrcAzvZuof2DKzC8aPyF1m6gKKxiNhdjQn0BSDNTOiAZ1d%2BYP2h%2B4eGjLN1eC0PAz%2B92aaYAhVYPFCyPcXEHOa9zr708MtyFlJSsTakMYewuuqYk0kuGogG4%2FhYL7huXdSomQxHM9XQESznXRR9xqKwmDIPVxnNIdrKGdnJjMwL%2F8o866OkXxIZufVMsQN7tKcJbv24h8Kg6eFXmRlM%2BkhXgL4jaLaAiXRB2q020MVKY8M%2F2guudUjS0QWzJ1PzSQi8U%2Bcbw%2FBBCS2LqH1gOYZC27QJj%2BfvTcFmL5HFbOhdSRMqUNhpiN%2BkrEd9EbHuReIdjDfxFeOLw1UUCvqCcZUw7e3Srdddua%2FTTW9hJ0OWF%2BmAwk1NSHK%2FqbDwphYqev5txcd8Ej5bhVBnY9H20oxf7I0rf3XYIul1bzUIUqxBJJ0M%2Fis1l9Ny0WO2cjvC00iGBEsnkx2ThWP8l%2FTsVhbnsxn6Swe4H0qS3X2xZQHX5yfGiWOxn%2B8cuNpqOMZWHip%2BckBaB8Jrj1Hx8Cg%2FTuJ4wvR18LlDdTrv31aCP2%2Bdi5zbgf232t0pdrbTDQQE9wqZ75miHwFhVQccXV5SDlTAAuwGJrcPVvbDb%2BJ43c1%2FfrNUl2w9P3uxCWcFJWyWMMKPnMQGOqUBnvbgMxdONFfS%2BdC1r11ehwoB6y5Mz%2FcxwdgZgU53ocqy4eakAT3cXinxwINwFDwzuvJEcB4QGe%2BPlMI0TEzoZzoFC33Mo3p7Utyuzw0tGO6CTrihJ0vLx%2F%2FJ4S386J0gGFKvP4RvRx4BAZzfDM%2BgejYoIgeYxfUf%2BYvHJp73fS6I2KQ%2FiwTJVN7x%2BEWCniT2bN%2B8vqwZCeBMuSvUXj1el3XMMkyj&X-Amz-Signature=b6e7cf183debc897a86212c30ad4b2191c5379b40b0aa5e1b2447c7b70e259d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNA3R2R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDc8hM13qiMSexftQdqxOyHlX8%2BlFAh5TmO7%2FShzt5ShAiEA17rlExnVSKrdWEKNdukF5r669ij%2BvVgw3NbsBn6nwYMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFVriZ6TXj3jigmiCrcAzvZuof2DKzC8aPyF1m6gKKxiNhdjQn0BSDNTOiAZ1d%2BYP2h%2B4eGjLN1eC0PAz%2B92aaYAhVYPFCyPcXEHOa9zr708MtyFlJSsTakMYewuuqYk0kuGogG4%2FhYL7huXdSomQxHM9XQESznXRR9xqKwmDIPVxnNIdrKGdnJjMwL%2F8o866OkXxIZufVMsQN7tKcJbv24h8Kg6eFXmRlM%2BkhXgL4jaLaAiXRB2q020MVKY8M%2F2guudUjS0QWzJ1PzSQi8U%2Bcbw%2FBBCS2LqH1gOYZC27QJj%2BfvTcFmL5HFbOhdSRMqUNhpiN%2BkrEd9EbHuReIdjDfxFeOLw1UUCvqCcZUw7e3Srdddua%2FTTW9hJ0OWF%2BmAwk1NSHK%2FqbDwphYqev5txcd8Ej5bhVBnY9H20oxf7I0rf3XYIul1bzUIUqxBJJ0M%2Fis1l9Ny0WO2cjvC00iGBEsnkx2ThWP8l%2FTsVhbnsxn6Swe4H0qS3X2xZQHX5yfGiWOxn%2B8cuNpqOMZWHip%2BckBaB8Jrj1Hx8Cg%2FTuJ4wvR18LlDdTrv31aCP2%2Bdi5zbgf232t0pdrbTDQQE9wqZ75miHwFhVQccXV5SDlTAAuwGJrcPVvbDb%2BJ43c1%2FfrNUl2w9P3uxCWcFJWyWMMKPnMQGOqUBnvbgMxdONFfS%2BdC1r11ehwoB6y5Mz%2FcxwdgZgU53ocqy4eakAT3cXinxwINwFDwzuvJEcB4QGe%2BPlMI0TEzoZzoFC33Mo3p7Utyuzw0tGO6CTrihJ0vLx%2F%2FJ4S386J0gGFKvP4RvRx4BAZzfDM%2BgejYoIgeYxfUf%2BYvHJp73fS6I2KQ%2FiwTJVN7x%2BEWCniT2bN%2B8vqwZCeBMuSvUXj1el3XMMkyj&X-Amz-Signature=ce975482098bff389f80019b630de45b2e62b9689a1804f1d527cc8903cfc771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNA3R2R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDc8hM13qiMSexftQdqxOyHlX8%2BlFAh5TmO7%2FShzt5ShAiEA17rlExnVSKrdWEKNdukF5r669ij%2BvVgw3NbsBn6nwYMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFVriZ6TXj3jigmiCrcAzvZuof2DKzC8aPyF1m6gKKxiNhdjQn0BSDNTOiAZ1d%2BYP2h%2B4eGjLN1eC0PAz%2B92aaYAhVYPFCyPcXEHOa9zr708MtyFlJSsTakMYewuuqYk0kuGogG4%2FhYL7huXdSomQxHM9XQESznXRR9xqKwmDIPVxnNIdrKGdnJjMwL%2F8o866OkXxIZufVMsQN7tKcJbv24h8Kg6eFXmRlM%2BkhXgL4jaLaAiXRB2q020MVKY8M%2F2guudUjS0QWzJ1PzSQi8U%2Bcbw%2FBBCS2LqH1gOYZC27QJj%2BfvTcFmL5HFbOhdSRMqUNhpiN%2BkrEd9EbHuReIdjDfxFeOLw1UUCvqCcZUw7e3Srdddua%2FTTW9hJ0OWF%2BmAwk1NSHK%2FqbDwphYqev5txcd8Ej5bhVBnY9H20oxf7I0rf3XYIul1bzUIUqxBJJ0M%2Fis1l9Ny0WO2cjvC00iGBEsnkx2ThWP8l%2FTsVhbnsxn6Swe4H0qS3X2xZQHX5yfGiWOxn%2B8cuNpqOMZWHip%2BckBaB8Jrj1Hx8Cg%2FTuJ4wvR18LlDdTrv31aCP2%2Bdi5zbgf232t0pdrbTDQQE9wqZ75miHwFhVQccXV5SDlTAAuwGJrcPVvbDb%2BJ43c1%2FfrNUl2w9P3uxCWcFJWyWMMKPnMQGOqUBnvbgMxdONFfS%2BdC1r11ehwoB6y5Mz%2FcxwdgZgU53ocqy4eakAT3cXinxwINwFDwzuvJEcB4QGe%2BPlMI0TEzoZzoFC33Mo3p7Utyuzw0tGO6CTrihJ0vLx%2F%2FJ4S386J0gGFKvP4RvRx4BAZzfDM%2BgejYoIgeYxfUf%2BYvHJp73fS6I2KQ%2FiwTJVN7x%2BEWCniT2bN%2B8vqwZCeBMuSvUXj1el3XMMkyj&X-Amz-Signature=ac92ccf6488961a8000dc592e20f3e271813fa34e28c945b69bc0e68b2bf8268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNA3R2R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDc8hM13qiMSexftQdqxOyHlX8%2BlFAh5TmO7%2FShzt5ShAiEA17rlExnVSKrdWEKNdukF5r669ij%2BvVgw3NbsBn6nwYMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFVriZ6TXj3jigmiCrcAzvZuof2DKzC8aPyF1m6gKKxiNhdjQn0BSDNTOiAZ1d%2BYP2h%2B4eGjLN1eC0PAz%2B92aaYAhVYPFCyPcXEHOa9zr708MtyFlJSsTakMYewuuqYk0kuGogG4%2FhYL7huXdSomQxHM9XQESznXRR9xqKwmDIPVxnNIdrKGdnJjMwL%2F8o866OkXxIZufVMsQN7tKcJbv24h8Kg6eFXmRlM%2BkhXgL4jaLaAiXRB2q020MVKY8M%2F2guudUjS0QWzJ1PzSQi8U%2Bcbw%2FBBCS2LqH1gOYZC27QJj%2BfvTcFmL5HFbOhdSRMqUNhpiN%2BkrEd9EbHuReIdjDfxFeOLw1UUCvqCcZUw7e3Srdddua%2FTTW9hJ0OWF%2BmAwk1NSHK%2FqbDwphYqev5txcd8Ej5bhVBnY9H20oxf7I0rf3XYIul1bzUIUqxBJJ0M%2Fis1l9Ny0WO2cjvC00iGBEsnkx2ThWP8l%2FTsVhbnsxn6Swe4H0qS3X2xZQHX5yfGiWOxn%2B8cuNpqOMZWHip%2BckBaB8Jrj1Hx8Cg%2FTuJ4wvR18LlDdTrv31aCP2%2Bdi5zbgf232t0pdrbTDQQE9wqZ75miHwFhVQccXV5SDlTAAuwGJrcPVvbDb%2BJ43c1%2FfrNUl2w9P3uxCWcFJWyWMMKPnMQGOqUBnvbgMxdONFfS%2BdC1r11ehwoB6y5Mz%2FcxwdgZgU53ocqy4eakAT3cXinxwINwFDwzuvJEcB4QGe%2BPlMI0TEzoZzoFC33Mo3p7Utyuzw0tGO6CTrihJ0vLx%2F%2FJ4S386J0gGFKvP4RvRx4BAZzfDM%2BgejYoIgeYxfUf%2BYvHJp73fS6I2KQ%2FiwTJVN7x%2BEWCniT2bN%2B8vqwZCeBMuSvUXj1el3XMMkyj&X-Amz-Signature=758a70f7602c2d65a0229ec3655e95cf02bcec7b6adbc5d5db68c59d47348468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNA3R2R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDc8hM13qiMSexftQdqxOyHlX8%2BlFAh5TmO7%2FShzt5ShAiEA17rlExnVSKrdWEKNdukF5r669ij%2BvVgw3NbsBn6nwYMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFVriZ6TXj3jigmiCrcAzvZuof2DKzC8aPyF1m6gKKxiNhdjQn0BSDNTOiAZ1d%2BYP2h%2B4eGjLN1eC0PAz%2B92aaYAhVYPFCyPcXEHOa9zr708MtyFlJSsTakMYewuuqYk0kuGogG4%2FhYL7huXdSomQxHM9XQESznXRR9xqKwmDIPVxnNIdrKGdnJjMwL%2F8o866OkXxIZufVMsQN7tKcJbv24h8Kg6eFXmRlM%2BkhXgL4jaLaAiXRB2q020MVKY8M%2F2guudUjS0QWzJ1PzSQi8U%2Bcbw%2FBBCS2LqH1gOYZC27QJj%2BfvTcFmL5HFbOhdSRMqUNhpiN%2BkrEd9EbHuReIdjDfxFeOLw1UUCvqCcZUw7e3Srdddua%2FTTW9hJ0OWF%2BmAwk1NSHK%2FqbDwphYqev5txcd8Ej5bhVBnY9H20oxf7I0rf3XYIul1bzUIUqxBJJ0M%2Fis1l9Ny0WO2cjvC00iGBEsnkx2ThWP8l%2FTsVhbnsxn6Swe4H0qS3X2xZQHX5yfGiWOxn%2B8cuNpqOMZWHip%2BckBaB8Jrj1Hx8Cg%2FTuJ4wvR18LlDdTrv31aCP2%2Bdi5zbgf232t0pdrbTDQQE9wqZ75miHwFhVQccXV5SDlTAAuwGJrcPVvbDb%2BJ43c1%2FfrNUl2w9P3uxCWcFJWyWMMKPnMQGOqUBnvbgMxdONFfS%2BdC1r11ehwoB6y5Mz%2FcxwdgZgU53ocqy4eakAT3cXinxwINwFDwzuvJEcB4QGe%2BPlMI0TEzoZzoFC33Mo3p7Utyuzw0tGO6CTrihJ0vLx%2F%2FJ4S386J0gGFKvP4RvRx4BAZzfDM%2BgejYoIgeYxfUf%2BYvHJp73fS6I2KQ%2FiwTJVN7x%2BEWCniT2bN%2B8vqwZCeBMuSvUXj1el3XMMkyj&X-Amz-Signature=ab818f21df78e83eb0909747267b09ec618dd668fe5f5c893b0841ce7f3cc204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIZXZKV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDAPN%2FZh1KziZQK8CxMcnr9295F9izKYwM%2B6d%2Fk2mwWHQIhALKZbjTfrQbGQJtDH7N4XSSIfDUTZIs3ZmFMt78I5qFKKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BhK1uLvlTPTNL%2Fb8q3AMmh9p3IJQoHgsCE23C%2FlwFIO6Myu%2FIXRXZWSNXA8w2iuL8y5T6Nuycyz8E52FaoKGjA3oZrptxd62hSYU7%2BtzAvKhimj7FVjHxRAHcJWBFqScJbV%2Frlkdt7wsm2WV1xDxNLgqvzx%2F1k4cYf2%2BPOzLuxACnsgerzju1%2BdAZUSF9R41RTRlO3%2Bh3Oo9Yib6MCkADML5PCOjlsRVNM3kIe4MBXRkiYIJ8nDThJLVUrN434mNiEskBpTJLmgLXzguKln6aT29Z3VBoWptZySCZ1DG2CH%2BeanLZkff8LqhVJZo297gvY7fysyCDIU9BZrZvI9TRDpBkLZCuEDn8WtCSD8J%2FhX8Jysy9ng5ZFDlkmiV3TyIKvpRNJ3at2fIkJdp6X3ryR8WkI4kIOEB73v9UcOUitIb9UIw4Lbg3TeMRuZOtCcfTg8K2I6oiP1hM5s0XYllGPI5RWixTxkIPagyKDD1cYfVFQ4pq4ntgjfbCKgvYVPvAEpHvbPLPrV5P4x7hnnygoVeUfUFqwJfjZKJAMvM3KeG4ByQIeZvKEliw74W6%2Bz0n8Y%2B%2BqHub59KV3XBlQz00U8Re4PW%2BlcYKtJfRuNQWNZRgPRJ8jDpAFhYu%2FncIwu%2FVK%2FQO8Qj8yq177TCJj5zEBjqkAWc5%2FmBeHDRyOnzMeY5ellEIneWMSvPkhkv61dwn4DwQz2Gv8yiAQKGiL%2BMpelHrzDKjWxiTOy3CSuT7fFsJB9tuxaQJ%2FWnDnGbxNy7nqxw%2FEhTVLHI4%2FcsoMzTSH14dgoEVfQRAbG7OQoa0zNOYZts4hg6T5OOagsMK5fSDeAI5dfLENDrArffnENlWIzoDp6Moa0HD4qQBZEgGqStJq0k4HgOF&X-Amz-Signature=6573c881e8778153c0fb715a03697260f01dc2bc4e54c0121016216cccb22951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNA3R2R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDc8hM13qiMSexftQdqxOyHlX8%2BlFAh5TmO7%2FShzt5ShAiEA17rlExnVSKrdWEKNdukF5r669ij%2BvVgw3NbsBn6nwYMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFVriZ6TXj3jigmiCrcAzvZuof2DKzC8aPyF1m6gKKxiNhdjQn0BSDNTOiAZ1d%2BYP2h%2B4eGjLN1eC0PAz%2B92aaYAhVYPFCyPcXEHOa9zr708MtyFlJSsTakMYewuuqYk0kuGogG4%2FhYL7huXdSomQxHM9XQESznXRR9xqKwmDIPVxnNIdrKGdnJjMwL%2F8o866OkXxIZufVMsQN7tKcJbv24h8Kg6eFXmRlM%2BkhXgL4jaLaAiXRB2q020MVKY8M%2F2guudUjS0QWzJ1PzSQi8U%2Bcbw%2FBBCS2LqH1gOYZC27QJj%2BfvTcFmL5HFbOhdSRMqUNhpiN%2BkrEd9EbHuReIdjDfxFeOLw1UUCvqCcZUw7e3Srdddua%2FTTW9hJ0OWF%2BmAwk1NSHK%2FqbDwphYqev5txcd8Ej5bhVBnY9H20oxf7I0rf3XYIul1bzUIUqxBJJ0M%2Fis1l9Ny0WO2cjvC00iGBEsnkx2ThWP8l%2FTsVhbnsxn6Swe4H0qS3X2xZQHX5yfGiWOxn%2B8cuNpqOMZWHip%2BckBaB8Jrj1Hx8Cg%2FTuJ4wvR18LlDdTrv31aCP2%2Bdi5zbgf232t0pdrbTDQQE9wqZ75miHwFhVQccXV5SDlTAAuwGJrcPVvbDb%2BJ43c1%2FfrNUl2w9P3uxCWcFJWyWMMKPnMQGOqUBnvbgMxdONFfS%2BdC1r11ehwoB6y5Mz%2FcxwdgZgU53ocqy4eakAT3cXinxwINwFDwzuvJEcB4QGe%2BPlMI0TEzoZzoFC33Mo3p7Utyuzw0tGO6CTrihJ0vLx%2F%2FJ4S386J0gGFKvP4RvRx4BAZzfDM%2BgejYoIgeYxfUf%2BYvHJp73fS6I2KQ%2FiwTJVN7x%2BEWCniT2bN%2B8vqwZCeBMuSvUXj1el3XMMkyj&X-Amz-Signature=7f9a086b348685748f55e7424cbb63d2155f8a25e09499a54e7dccf4b589b166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626HMHSJT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDuv%2BY5NBsxan89Vsih4tPRmP1fPLujDkY3ndZi%2F8NZ6gIgRrvPGiED7M%2FcxTv2u6a%2FwkBRN9Rvxi7OdM5mKhe2KpkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuHV2kTlBxYhQTU0ircA2kdMw0iZxfkQ5Q%2Fhu7GIU6RCMRHSkVk%2FBKGdHElEjKnGHWuBeAYaoWF0iz%2FPcGy6VAZPrA55t6LtFmONTB7ILN%2BuQbawH1cySUnotFIvixSykBybMSC2xXfN4cpq1%2F45M1IAdIeVL%2ByTQCw7TYUBkGd4pyaQ7z6uiek4wRYFtaDffr99PsdN3dYf1wBAun1Nr1ijfIRGY3A33ibl2hWAfs9hZd5IbApgiPGvwxA3USRRaGu2fEZIpQJxn5QRepdGrB56T20Qjh5UuZ0QKMYjWKAmFBu2qE9eGfqbyp4Dv9jP9wsjtuoSqLoEFM0iey99nIui0OKRWCZ4%2BqvxTbW9YC6i%2FeCIiVSmhcZxeGPryaUl6lzRUqfzEvLvMbrwRl%2FoR49hQYwPZL5ZfUWabGGF%2FxPgipXudwAkeaN8WT4j48iyzMmV2HcsSQekD9z7GD5Ldz5rpRwJzMJoHWntK3qxd1Z0lDhuZDsYj8ofP6TcwsJGbEIt5PCP%2FBoOw93AZ%2BfgR4e9Hd%2FBHnrJ%2BDESciO%2FYbHPBECtz7JE6VygwawUsP54IznEpxZ9asWZmX1ouIxcaHDBdTrLEBCRXFCTDmRNQs0w3oEI5OktpPbA26lOres5uw1QU%2BW3AnexpGmMMqPnMQGOqUB8H%2Fzts0R1Xy30Ciwp8jxEQIcQtCoLgxQArMeQ5k0dM3WPCrlNhnNCAu4lg4%2FXyCwyTX%2BCwj0XplE1SF0W2CWH5U4BzFWg%2BV5WffJEkC2mQQnSXSMmZB4i6u30CUumrPpqn%2FUpSzGtechzbn17PEoeObgQLovb8kdZ3yfzwwHmn6pgudvHYoy%2F6wmwEfEofy5HHKe7p8hVhc4iYRuCbY%2FVNvMfU%2FA&X-Amz-Signature=f7b350a6665bf6137528959810f3139351d75a410f0eb8d0003b129c64aa47ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626HMHSJT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDuv%2BY5NBsxan89Vsih4tPRmP1fPLujDkY3ndZi%2F8NZ6gIgRrvPGiED7M%2FcxTv2u6a%2FwkBRN9Rvxi7OdM5mKhe2KpkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuHV2kTlBxYhQTU0ircA2kdMw0iZxfkQ5Q%2Fhu7GIU6RCMRHSkVk%2FBKGdHElEjKnGHWuBeAYaoWF0iz%2FPcGy6VAZPrA55t6LtFmONTB7ILN%2BuQbawH1cySUnotFIvixSykBybMSC2xXfN4cpq1%2F45M1IAdIeVL%2ByTQCw7TYUBkGd4pyaQ7z6uiek4wRYFtaDffr99PsdN3dYf1wBAun1Nr1ijfIRGY3A33ibl2hWAfs9hZd5IbApgiPGvwxA3USRRaGu2fEZIpQJxn5QRepdGrB56T20Qjh5UuZ0QKMYjWKAmFBu2qE9eGfqbyp4Dv9jP9wsjtuoSqLoEFM0iey99nIui0OKRWCZ4%2BqvxTbW9YC6i%2FeCIiVSmhcZxeGPryaUl6lzRUqfzEvLvMbrwRl%2FoR49hQYwPZL5ZfUWabGGF%2FxPgipXudwAkeaN8WT4j48iyzMmV2HcsSQekD9z7GD5Ldz5rpRwJzMJoHWntK3qxd1Z0lDhuZDsYj8ofP6TcwsJGbEIt5PCP%2FBoOw93AZ%2BfgR4e9Hd%2FBHnrJ%2BDESciO%2FYbHPBECtz7JE6VygwawUsP54IznEpxZ9asWZmX1ouIxcaHDBdTrLEBCRXFCTDmRNQs0w3oEI5OktpPbA26lOres5uw1QU%2BW3AnexpGmMMqPnMQGOqUB8H%2Fzts0R1Xy30Ciwp8jxEQIcQtCoLgxQArMeQ5k0dM3WPCrlNhnNCAu4lg4%2FXyCwyTX%2BCwj0XplE1SF0W2CWH5U4BzFWg%2BV5WffJEkC2mQQnSXSMmZB4i6u30CUumrPpqn%2FUpSzGtechzbn17PEoeObgQLovb8kdZ3yfzwwHmn6pgudvHYoy%2F6wmwEfEofy5HHKe7p8hVhc4iYRuCbY%2FVNvMfU%2FA&X-Amz-Signature=08558f1e0a29f54995e1fd78eb43fb31a7943637622eb6617bb72e10bb6c7863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626HMHSJT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDuv%2BY5NBsxan89Vsih4tPRmP1fPLujDkY3ndZi%2F8NZ6gIgRrvPGiED7M%2FcxTv2u6a%2FwkBRN9Rvxi7OdM5mKhe2KpkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuHV2kTlBxYhQTU0ircA2kdMw0iZxfkQ5Q%2Fhu7GIU6RCMRHSkVk%2FBKGdHElEjKnGHWuBeAYaoWF0iz%2FPcGy6VAZPrA55t6LtFmONTB7ILN%2BuQbawH1cySUnotFIvixSykBybMSC2xXfN4cpq1%2F45M1IAdIeVL%2ByTQCw7TYUBkGd4pyaQ7z6uiek4wRYFtaDffr99PsdN3dYf1wBAun1Nr1ijfIRGY3A33ibl2hWAfs9hZd5IbApgiPGvwxA3USRRaGu2fEZIpQJxn5QRepdGrB56T20Qjh5UuZ0QKMYjWKAmFBu2qE9eGfqbyp4Dv9jP9wsjtuoSqLoEFM0iey99nIui0OKRWCZ4%2BqvxTbW9YC6i%2FeCIiVSmhcZxeGPryaUl6lzRUqfzEvLvMbrwRl%2FoR49hQYwPZL5ZfUWabGGF%2FxPgipXudwAkeaN8WT4j48iyzMmV2HcsSQekD9z7GD5Ldz5rpRwJzMJoHWntK3qxd1Z0lDhuZDsYj8ofP6TcwsJGbEIt5PCP%2FBoOw93AZ%2BfgR4e9Hd%2FBHnrJ%2BDESciO%2FYbHPBECtz7JE6VygwawUsP54IznEpxZ9asWZmX1ouIxcaHDBdTrLEBCRXFCTDmRNQs0w3oEI5OktpPbA26lOres5uw1QU%2BW3AnexpGmMMqPnMQGOqUB8H%2Fzts0R1Xy30Ciwp8jxEQIcQtCoLgxQArMeQ5k0dM3WPCrlNhnNCAu4lg4%2FXyCwyTX%2BCwj0XplE1SF0W2CWH5U4BzFWg%2BV5WffJEkC2mQQnSXSMmZB4i6u30CUumrPpqn%2FUpSzGtechzbn17PEoeObgQLovb8kdZ3yfzwwHmn6pgudvHYoy%2F6wmwEfEofy5HHKe7p8hVhc4iYRuCbY%2FVNvMfU%2FA&X-Amz-Signature=3feee3afe3e057ffdbaa0e99c1a89d14247900d32d38bca47e9b9721ea72c1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626HMHSJT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDuv%2BY5NBsxan89Vsih4tPRmP1fPLujDkY3ndZi%2F8NZ6gIgRrvPGiED7M%2FcxTv2u6a%2FwkBRN9Rvxi7OdM5mKhe2KpkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuHV2kTlBxYhQTU0ircA2kdMw0iZxfkQ5Q%2Fhu7GIU6RCMRHSkVk%2FBKGdHElEjKnGHWuBeAYaoWF0iz%2FPcGy6VAZPrA55t6LtFmONTB7ILN%2BuQbawH1cySUnotFIvixSykBybMSC2xXfN4cpq1%2F45M1IAdIeVL%2ByTQCw7TYUBkGd4pyaQ7z6uiek4wRYFtaDffr99PsdN3dYf1wBAun1Nr1ijfIRGY3A33ibl2hWAfs9hZd5IbApgiPGvwxA3USRRaGu2fEZIpQJxn5QRepdGrB56T20Qjh5UuZ0QKMYjWKAmFBu2qE9eGfqbyp4Dv9jP9wsjtuoSqLoEFM0iey99nIui0OKRWCZ4%2BqvxTbW9YC6i%2FeCIiVSmhcZxeGPryaUl6lzRUqfzEvLvMbrwRl%2FoR49hQYwPZL5ZfUWabGGF%2FxPgipXudwAkeaN8WT4j48iyzMmV2HcsSQekD9z7GD5Ldz5rpRwJzMJoHWntK3qxd1Z0lDhuZDsYj8ofP6TcwsJGbEIt5PCP%2FBoOw93AZ%2BfgR4e9Hd%2FBHnrJ%2BDESciO%2FYbHPBECtz7JE6VygwawUsP54IznEpxZ9asWZmX1ouIxcaHDBdTrLEBCRXFCTDmRNQs0w3oEI5OktpPbA26lOres5uw1QU%2BW3AnexpGmMMqPnMQGOqUB8H%2Fzts0R1Xy30Ciwp8jxEQIcQtCoLgxQArMeQ5k0dM3WPCrlNhnNCAu4lg4%2FXyCwyTX%2BCwj0XplE1SF0W2CWH5U4BzFWg%2BV5WffJEkC2mQQnSXSMmZB4i6u30CUumrPpqn%2FUpSzGtechzbn17PEoeObgQLovb8kdZ3yfzwwHmn6pgudvHYoy%2F6wmwEfEofy5HHKe7p8hVhc4iYRuCbY%2FVNvMfU%2FA&X-Amz-Signature=87bc213b774942344509ae362463f941727390335cc118c892efd415a4bd3337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626HMHSJT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDuv%2BY5NBsxan89Vsih4tPRmP1fPLujDkY3ndZi%2F8NZ6gIgRrvPGiED7M%2FcxTv2u6a%2FwkBRN9Rvxi7OdM5mKhe2KpkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuHV2kTlBxYhQTU0ircA2kdMw0iZxfkQ5Q%2Fhu7GIU6RCMRHSkVk%2FBKGdHElEjKnGHWuBeAYaoWF0iz%2FPcGy6VAZPrA55t6LtFmONTB7ILN%2BuQbawH1cySUnotFIvixSykBybMSC2xXfN4cpq1%2F45M1IAdIeVL%2ByTQCw7TYUBkGd4pyaQ7z6uiek4wRYFtaDffr99PsdN3dYf1wBAun1Nr1ijfIRGY3A33ibl2hWAfs9hZd5IbApgiPGvwxA3USRRaGu2fEZIpQJxn5QRepdGrB56T20Qjh5UuZ0QKMYjWKAmFBu2qE9eGfqbyp4Dv9jP9wsjtuoSqLoEFM0iey99nIui0OKRWCZ4%2BqvxTbW9YC6i%2FeCIiVSmhcZxeGPryaUl6lzRUqfzEvLvMbrwRl%2FoR49hQYwPZL5ZfUWabGGF%2FxPgipXudwAkeaN8WT4j48iyzMmV2HcsSQekD9z7GD5Ldz5rpRwJzMJoHWntK3qxd1Z0lDhuZDsYj8ofP6TcwsJGbEIt5PCP%2FBoOw93AZ%2BfgR4e9Hd%2FBHnrJ%2BDESciO%2FYbHPBECtz7JE6VygwawUsP54IznEpxZ9asWZmX1ouIxcaHDBdTrLEBCRXFCTDmRNQs0w3oEI5OktpPbA26lOres5uw1QU%2BW3AnexpGmMMqPnMQGOqUB8H%2Fzts0R1Xy30Ciwp8jxEQIcQtCoLgxQArMeQ5k0dM3WPCrlNhnNCAu4lg4%2FXyCwyTX%2BCwj0XplE1SF0W2CWH5U4BzFWg%2BV5WffJEkC2mQQnSXSMmZB4i6u30CUumrPpqn%2FUpSzGtechzbn17PEoeObgQLovb8kdZ3yfzwwHmn6pgudvHYoy%2F6wmwEfEofy5HHKe7p8hVhc4iYRuCbY%2FVNvMfU%2FA&X-Amz-Signature=39e57d10bf93687764bc0563d13345e0e9c4cb147aee372b5edca7457a2b019e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626HMHSJT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDuv%2BY5NBsxan89Vsih4tPRmP1fPLujDkY3ndZi%2F8NZ6gIgRrvPGiED7M%2FcxTv2u6a%2FwkBRN9Rvxi7OdM5mKhe2KpkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuHV2kTlBxYhQTU0ircA2kdMw0iZxfkQ5Q%2Fhu7GIU6RCMRHSkVk%2FBKGdHElEjKnGHWuBeAYaoWF0iz%2FPcGy6VAZPrA55t6LtFmONTB7ILN%2BuQbawH1cySUnotFIvixSykBybMSC2xXfN4cpq1%2F45M1IAdIeVL%2ByTQCw7TYUBkGd4pyaQ7z6uiek4wRYFtaDffr99PsdN3dYf1wBAun1Nr1ijfIRGY3A33ibl2hWAfs9hZd5IbApgiPGvwxA3USRRaGu2fEZIpQJxn5QRepdGrB56T20Qjh5UuZ0QKMYjWKAmFBu2qE9eGfqbyp4Dv9jP9wsjtuoSqLoEFM0iey99nIui0OKRWCZ4%2BqvxTbW9YC6i%2FeCIiVSmhcZxeGPryaUl6lzRUqfzEvLvMbrwRl%2FoR49hQYwPZL5ZfUWabGGF%2FxPgipXudwAkeaN8WT4j48iyzMmV2HcsSQekD9z7GD5Ldz5rpRwJzMJoHWntK3qxd1Z0lDhuZDsYj8ofP6TcwsJGbEIt5PCP%2FBoOw93AZ%2BfgR4e9Hd%2FBHnrJ%2BDESciO%2FYbHPBECtz7JE6VygwawUsP54IznEpxZ9asWZmX1ouIxcaHDBdTrLEBCRXFCTDmRNQs0w3oEI5OktpPbA26lOres5uw1QU%2BW3AnexpGmMMqPnMQGOqUB8H%2Fzts0R1Xy30Ciwp8jxEQIcQtCoLgxQArMeQ5k0dM3WPCrlNhnNCAu4lg4%2FXyCwyTX%2BCwj0XplE1SF0W2CWH5U4BzFWg%2BV5WffJEkC2mQQnSXSMmZB4i6u30CUumrPpqn%2FUpSzGtechzbn17PEoeObgQLovb8kdZ3yfzwwHmn6pgudvHYoy%2F6wmwEfEofy5HHKe7p8hVhc4iYRuCbY%2FVNvMfU%2FA&X-Amz-Signature=c4b9b63b557b903dc04e5693a6593e0960add0dc27c7bb12d733b00b986b78f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626HMHSJT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDuv%2BY5NBsxan89Vsih4tPRmP1fPLujDkY3ndZi%2F8NZ6gIgRrvPGiED7M%2FcxTv2u6a%2FwkBRN9Rvxi7OdM5mKhe2KpkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuHV2kTlBxYhQTU0ircA2kdMw0iZxfkQ5Q%2Fhu7GIU6RCMRHSkVk%2FBKGdHElEjKnGHWuBeAYaoWF0iz%2FPcGy6VAZPrA55t6LtFmONTB7ILN%2BuQbawH1cySUnotFIvixSykBybMSC2xXfN4cpq1%2F45M1IAdIeVL%2ByTQCw7TYUBkGd4pyaQ7z6uiek4wRYFtaDffr99PsdN3dYf1wBAun1Nr1ijfIRGY3A33ibl2hWAfs9hZd5IbApgiPGvwxA3USRRaGu2fEZIpQJxn5QRepdGrB56T20Qjh5UuZ0QKMYjWKAmFBu2qE9eGfqbyp4Dv9jP9wsjtuoSqLoEFM0iey99nIui0OKRWCZ4%2BqvxTbW9YC6i%2FeCIiVSmhcZxeGPryaUl6lzRUqfzEvLvMbrwRl%2FoR49hQYwPZL5ZfUWabGGF%2FxPgipXudwAkeaN8WT4j48iyzMmV2HcsSQekD9z7GD5Ldz5rpRwJzMJoHWntK3qxd1Z0lDhuZDsYj8ofP6TcwsJGbEIt5PCP%2FBoOw93AZ%2BfgR4e9Hd%2FBHnrJ%2BDESciO%2FYbHPBECtz7JE6VygwawUsP54IznEpxZ9asWZmX1ouIxcaHDBdTrLEBCRXFCTDmRNQs0w3oEI5OktpPbA26lOres5uw1QU%2BW3AnexpGmMMqPnMQGOqUB8H%2Fzts0R1Xy30Ciwp8jxEQIcQtCoLgxQArMeQ5k0dM3WPCrlNhnNCAu4lg4%2FXyCwyTX%2BCwj0XplE1SF0W2CWH5U4BzFWg%2BV5WffJEkC2mQQnSXSMmZB4i6u30CUumrPpqn%2FUpSzGtechzbn17PEoeObgQLovb8kdZ3yfzwwHmn6pgudvHYoy%2F6wmwEfEofy5HHKe7p8hVhc4iYRuCbY%2FVNvMfU%2FA&X-Amz-Signature=e2957c75580505cf0aa342906831dcfebbdb0155723b24e4405a466fe0a3006c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
