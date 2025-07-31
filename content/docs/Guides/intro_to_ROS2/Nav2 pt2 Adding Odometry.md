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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QRLWIV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNjZTEvrh1pfmAx5H0E33JEacQ4HJ3MAy2UyAyq7GPWgIhAOZJgY1%2F%2FE1z%2F%2BcRYThHTcT8bvJT9IP3iyWMe0B6W8DCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYSnyNwjstpEygOmsq3AO9B05VytFhtWduvPAljVp8dIpXcyw04O31RsUk2wYw47Y48pgalU4ucK1sap27CIwbgjBrVyJPTGUoRXOQuNK%2B7DPp1NDrXWT0rzlo3rrYPbVO0qqexkbmwnIazrwDzls7Y6RE2sq5XEHb8JS%2Fn1%2BnIRPoCQCAzviCfWGvNQ2v1qwFwG3a52Gx4sAZQs9aPBHnblhBkWoWhCCMY66OhYsID%2FcOlAbgqi1pvm9M%2FuQVvjqPRHdVDHhkgSZmxUAhyfshXmXUNsEGttHwwD3vHljlffyYZ0mnTWXI%2BWrhwzcmvJlUj2IcF43L7rtixDDaJcfVJtRCT96fiGttAbvLPwAUjCLjIRW3tfEdg8z34mPwYai0XyL50VvRSQwJ6XE%2FEstsdkiUlf8oJKy0TbdC8sL2NV8jzkWb%2FAfVMMEH%2BZL%2B%2FyexBqbplQuJgFZsvBCq2xGtGgue1GW9mIyCPp6EX1%2Fxp466%2BLK71XejytJufADyLiQ%2BXe9%2FQeDIvRaygU17tGCbdqMTB9ZvNnDQQmOJumbuPz1gr3oeWjLvoho%2Fbo0swLAf0QAXXc5YEFmrypCYChUVeCVQR%2Fn5B2M5Syh6%2Bu2xYWGpXd6k%2BDCjEEZ9S25C0RqbF7a8dMC%2FZ2FBMjDR3K7EBjqkATUieGqnT9ehyMvtNH6PXfoVpqdwAaADCpWbXNoYPTNACKurYATUFYsoA9irgaFZ2bTUL7Ni%2B0X25vHqALOaQT9sYhaALnsJwsM9reeJCmdFDnB6rV5zCX13HJg5W32aDXFhAdEea6Pivuh1pp1RXz0FyQn8721TGUl75n1m3eamO6ci%2Bov7UEGVyD%2BNrR8ABNJw3p8b5gobkHXwhcg27PzCS6WA&X-Amz-Signature=bf6ecd766da32d43a1b8a03e1fbdc94d79904ce87a9deb03d47d448fea4e2f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QRLWIV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNjZTEvrh1pfmAx5H0E33JEacQ4HJ3MAy2UyAyq7GPWgIhAOZJgY1%2F%2FE1z%2F%2BcRYThHTcT8bvJT9IP3iyWMe0B6W8DCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYSnyNwjstpEygOmsq3AO9B05VytFhtWduvPAljVp8dIpXcyw04O31RsUk2wYw47Y48pgalU4ucK1sap27CIwbgjBrVyJPTGUoRXOQuNK%2B7DPp1NDrXWT0rzlo3rrYPbVO0qqexkbmwnIazrwDzls7Y6RE2sq5XEHb8JS%2Fn1%2BnIRPoCQCAzviCfWGvNQ2v1qwFwG3a52Gx4sAZQs9aPBHnblhBkWoWhCCMY66OhYsID%2FcOlAbgqi1pvm9M%2FuQVvjqPRHdVDHhkgSZmxUAhyfshXmXUNsEGttHwwD3vHljlffyYZ0mnTWXI%2BWrhwzcmvJlUj2IcF43L7rtixDDaJcfVJtRCT96fiGttAbvLPwAUjCLjIRW3tfEdg8z34mPwYai0XyL50VvRSQwJ6XE%2FEstsdkiUlf8oJKy0TbdC8sL2NV8jzkWb%2FAfVMMEH%2BZL%2B%2FyexBqbplQuJgFZsvBCq2xGtGgue1GW9mIyCPp6EX1%2Fxp466%2BLK71XejytJufADyLiQ%2BXe9%2FQeDIvRaygU17tGCbdqMTB9ZvNnDQQmOJumbuPz1gr3oeWjLvoho%2Fbo0swLAf0QAXXc5YEFmrypCYChUVeCVQR%2Fn5B2M5Syh6%2Bu2xYWGpXd6k%2BDCjEEZ9S25C0RqbF7a8dMC%2FZ2FBMjDR3K7EBjqkATUieGqnT9ehyMvtNH6PXfoVpqdwAaADCpWbXNoYPTNACKurYATUFYsoA9irgaFZ2bTUL7Ni%2B0X25vHqALOaQT9sYhaALnsJwsM9reeJCmdFDnB6rV5zCX13HJg5W32aDXFhAdEea6Pivuh1pp1RXz0FyQn8721TGUl75n1m3eamO6ci%2Bov7UEGVyD%2BNrR8ABNJw3p8b5gobkHXwhcg27PzCS6WA&X-Amz-Signature=579ce20addb981b76f765bd314d01e8921a1f5e38ac21e96da57fa0a3e3591c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QRLWIV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNjZTEvrh1pfmAx5H0E33JEacQ4HJ3MAy2UyAyq7GPWgIhAOZJgY1%2F%2FE1z%2F%2BcRYThHTcT8bvJT9IP3iyWMe0B6W8DCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYSnyNwjstpEygOmsq3AO9B05VytFhtWduvPAljVp8dIpXcyw04O31RsUk2wYw47Y48pgalU4ucK1sap27CIwbgjBrVyJPTGUoRXOQuNK%2B7DPp1NDrXWT0rzlo3rrYPbVO0qqexkbmwnIazrwDzls7Y6RE2sq5XEHb8JS%2Fn1%2BnIRPoCQCAzviCfWGvNQ2v1qwFwG3a52Gx4sAZQs9aPBHnblhBkWoWhCCMY66OhYsID%2FcOlAbgqi1pvm9M%2FuQVvjqPRHdVDHhkgSZmxUAhyfshXmXUNsEGttHwwD3vHljlffyYZ0mnTWXI%2BWrhwzcmvJlUj2IcF43L7rtixDDaJcfVJtRCT96fiGttAbvLPwAUjCLjIRW3tfEdg8z34mPwYai0XyL50VvRSQwJ6XE%2FEstsdkiUlf8oJKy0TbdC8sL2NV8jzkWb%2FAfVMMEH%2BZL%2B%2FyexBqbplQuJgFZsvBCq2xGtGgue1GW9mIyCPp6EX1%2Fxp466%2BLK71XejytJufADyLiQ%2BXe9%2FQeDIvRaygU17tGCbdqMTB9ZvNnDQQmOJumbuPz1gr3oeWjLvoho%2Fbo0swLAf0QAXXc5YEFmrypCYChUVeCVQR%2Fn5B2M5Syh6%2Bu2xYWGpXd6k%2BDCjEEZ9S25C0RqbF7a8dMC%2FZ2FBMjDR3K7EBjqkATUieGqnT9ehyMvtNH6PXfoVpqdwAaADCpWbXNoYPTNACKurYATUFYsoA9irgaFZ2bTUL7Ni%2B0X25vHqALOaQT9sYhaALnsJwsM9reeJCmdFDnB6rV5zCX13HJg5W32aDXFhAdEea6Pivuh1pp1RXz0FyQn8721TGUl75n1m3eamO6ci%2Bov7UEGVyD%2BNrR8ABNJw3p8b5gobkHXwhcg27PzCS6WA&X-Amz-Signature=a7d21690d0a860c82aa2c76093e3c33c4bb6d9ea7b32fc64cbe7a057a1688d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QRLWIV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNjZTEvrh1pfmAx5H0E33JEacQ4HJ3MAy2UyAyq7GPWgIhAOZJgY1%2F%2FE1z%2F%2BcRYThHTcT8bvJT9IP3iyWMe0B6W8DCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYSnyNwjstpEygOmsq3AO9B05VytFhtWduvPAljVp8dIpXcyw04O31RsUk2wYw47Y48pgalU4ucK1sap27CIwbgjBrVyJPTGUoRXOQuNK%2B7DPp1NDrXWT0rzlo3rrYPbVO0qqexkbmwnIazrwDzls7Y6RE2sq5XEHb8JS%2Fn1%2BnIRPoCQCAzviCfWGvNQ2v1qwFwG3a52Gx4sAZQs9aPBHnblhBkWoWhCCMY66OhYsID%2FcOlAbgqi1pvm9M%2FuQVvjqPRHdVDHhkgSZmxUAhyfshXmXUNsEGttHwwD3vHljlffyYZ0mnTWXI%2BWrhwzcmvJlUj2IcF43L7rtixDDaJcfVJtRCT96fiGttAbvLPwAUjCLjIRW3tfEdg8z34mPwYai0XyL50VvRSQwJ6XE%2FEstsdkiUlf8oJKy0TbdC8sL2NV8jzkWb%2FAfVMMEH%2BZL%2B%2FyexBqbplQuJgFZsvBCq2xGtGgue1GW9mIyCPp6EX1%2Fxp466%2BLK71XejytJufADyLiQ%2BXe9%2FQeDIvRaygU17tGCbdqMTB9ZvNnDQQmOJumbuPz1gr3oeWjLvoho%2Fbo0swLAf0QAXXc5YEFmrypCYChUVeCVQR%2Fn5B2M5Syh6%2Bu2xYWGpXd6k%2BDCjEEZ9S25C0RqbF7a8dMC%2FZ2FBMjDR3K7EBjqkATUieGqnT9ehyMvtNH6PXfoVpqdwAaADCpWbXNoYPTNACKurYATUFYsoA9irgaFZ2bTUL7Ni%2B0X25vHqALOaQT9sYhaALnsJwsM9reeJCmdFDnB6rV5zCX13HJg5W32aDXFhAdEea6Pivuh1pp1RXz0FyQn8721TGUl75n1m3eamO6ci%2Bov7UEGVyD%2BNrR8ABNJw3p8b5gobkHXwhcg27PzCS6WA&X-Amz-Signature=d22dedd9012e33cf8b3262b5905590dfa758a9d3b552c3c4d1187b5172615c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QRLWIV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNjZTEvrh1pfmAx5H0E33JEacQ4HJ3MAy2UyAyq7GPWgIhAOZJgY1%2F%2FE1z%2F%2BcRYThHTcT8bvJT9IP3iyWMe0B6W8DCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYSnyNwjstpEygOmsq3AO9B05VytFhtWduvPAljVp8dIpXcyw04O31RsUk2wYw47Y48pgalU4ucK1sap27CIwbgjBrVyJPTGUoRXOQuNK%2B7DPp1NDrXWT0rzlo3rrYPbVO0qqexkbmwnIazrwDzls7Y6RE2sq5XEHb8JS%2Fn1%2BnIRPoCQCAzviCfWGvNQ2v1qwFwG3a52Gx4sAZQs9aPBHnblhBkWoWhCCMY66OhYsID%2FcOlAbgqi1pvm9M%2FuQVvjqPRHdVDHhkgSZmxUAhyfshXmXUNsEGttHwwD3vHljlffyYZ0mnTWXI%2BWrhwzcmvJlUj2IcF43L7rtixDDaJcfVJtRCT96fiGttAbvLPwAUjCLjIRW3tfEdg8z34mPwYai0XyL50VvRSQwJ6XE%2FEstsdkiUlf8oJKy0TbdC8sL2NV8jzkWb%2FAfVMMEH%2BZL%2B%2FyexBqbplQuJgFZsvBCq2xGtGgue1GW9mIyCPp6EX1%2Fxp466%2BLK71XejytJufADyLiQ%2BXe9%2FQeDIvRaygU17tGCbdqMTB9ZvNnDQQmOJumbuPz1gr3oeWjLvoho%2Fbo0swLAf0QAXXc5YEFmrypCYChUVeCVQR%2Fn5B2M5Syh6%2Bu2xYWGpXd6k%2BDCjEEZ9S25C0RqbF7a8dMC%2FZ2FBMjDR3K7EBjqkATUieGqnT9ehyMvtNH6PXfoVpqdwAaADCpWbXNoYPTNACKurYATUFYsoA9irgaFZ2bTUL7Ni%2B0X25vHqALOaQT9sYhaALnsJwsM9reeJCmdFDnB6rV5zCX13HJg5W32aDXFhAdEea6Pivuh1pp1RXz0FyQn8721TGUl75n1m3eamO6ci%2Bov7UEGVyD%2BNrR8ABNJw3p8b5gobkHXwhcg27PzCS6WA&X-Amz-Signature=2c53460fc2b9f403d4228cf6a157bbe2ddb7e9a941fe7356d64f71a6a094c11b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QRLWIV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNjZTEvrh1pfmAx5H0E33JEacQ4HJ3MAy2UyAyq7GPWgIhAOZJgY1%2F%2FE1z%2F%2BcRYThHTcT8bvJT9IP3iyWMe0B6W8DCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYSnyNwjstpEygOmsq3AO9B05VytFhtWduvPAljVp8dIpXcyw04O31RsUk2wYw47Y48pgalU4ucK1sap27CIwbgjBrVyJPTGUoRXOQuNK%2B7DPp1NDrXWT0rzlo3rrYPbVO0qqexkbmwnIazrwDzls7Y6RE2sq5XEHb8JS%2Fn1%2BnIRPoCQCAzviCfWGvNQ2v1qwFwG3a52Gx4sAZQs9aPBHnblhBkWoWhCCMY66OhYsID%2FcOlAbgqi1pvm9M%2FuQVvjqPRHdVDHhkgSZmxUAhyfshXmXUNsEGttHwwD3vHljlffyYZ0mnTWXI%2BWrhwzcmvJlUj2IcF43L7rtixDDaJcfVJtRCT96fiGttAbvLPwAUjCLjIRW3tfEdg8z34mPwYai0XyL50VvRSQwJ6XE%2FEstsdkiUlf8oJKy0TbdC8sL2NV8jzkWb%2FAfVMMEH%2BZL%2B%2FyexBqbplQuJgFZsvBCq2xGtGgue1GW9mIyCPp6EX1%2Fxp466%2BLK71XejytJufADyLiQ%2BXe9%2FQeDIvRaygU17tGCbdqMTB9ZvNnDQQmOJumbuPz1gr3oeWjLvoho%2Fbo0swLAf0QAXXc5YEFmrypCYChUVeCVQR%2Fn5B2M5Syh6%2Bu2xYWGpXd6k%2BDCjEEZ9S25C0RqbF7a8dMC%2FZ2FBMjDR3K7EBjqkATUieGqnT9ehyMvtNH6PXfoVpqdwAaADCpWbXNoYPTNACKurYATUFYsoA9irgaFZ2bTUL7Ni%2B0X25vHqALOaQT9sYhaALnsJwsM9reeJCmdFDnB6rV5zCX13HJg5W32aDXFhAdEea6Pivuh1pp1RXz0FyQn8721TGUl75n1m3eamO6ci%2Bov7UEGVyD%2BNrR8ABNJw3p8b5gobkHXwhcg27PzCS6WA&X-Amz-Signature=e51f84dcd410874a0b6fb434c512342af16603b688027935beb7b3b82b0776f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QRLWIV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNjZTEvrh1pfmAx5H0E33JEacQ4HJ3MAy2UyAyq7GPWgIhAOZJgY1%2F%2FE1z%2F%2BcRYThHTcT8bvJT9IP3iyWMe0B6W8DCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYSnyNwjstpEygOmsq3AO9B05VytFhtWduvPAljVp8dIpXcyw04O31RsUk2wYw47Y48pgalU4ucK1sap27CIwbgjBrVyJPTGUoRXOQuNK%2B7DPp1NDrXWT0rzlo3rrYPbVO0qqexkbmwnIazrwDzls7Y6RE2sq5XEHb8JS%2Fn1%2BnIRPoCQCAzviCfWGvNQ2v1qwFwG3a52Gx4sAZQs9aPBHnblhBkWoWhCCMY66OhYsID%2FcOlAbgqi1pvm9M%2FuQVvjqPRHdVDHhkgSZmxUAhyfshXmXUNsEGttHwwD3vHljlffyYZ0mnTWXI%2BWrhwzcmvJlUj2IcF43L7rtixDDaJcfVJtRCT96fiGttAbvLPwAUjCLjIRW3tfEdg8z34mPwYai0XyL50VvRSQwJ6XE%2FEstsdkiUlf8oJKy0TbdC8sL2NV8jzkWb%2FAfVMMEH%2BZL%2B%2FyexBqbplQuJgFZsvBCq2xGtGgue1GW9mIyCPp6EX1%2Fxp466%2BLK71XejytJufADyLiQ%2BXe9%2FQeDIvRaygU17tGCbdqMTB9ZvNnDQQmOJumbuPz1gr3oeWjLvoho%2Fbo0swLAf0QAXXc5YEFmrypCYChUVeCVQR%2Fn5B2M5Syh6%2Bu2xYWGpXd6k%2BDCjEEZ9S25C0RqbF7a8dMC%2FZ2FBMjDR3K7EBjqkATUieGqnT9ehyMvtNH6PXfoVpqdwAaADCpWbXNoYPTNACKurYATUFYsoA9irgaFZ2bTUL7Ni%2B0X25vHqALOaQT9sYhaALnsJwsM9reeJCmdFDnB6rV5zCX13HJg5W32aDXFhAdEea6Pivuh1pp1RXz0FyQn8721TGUl75n1m3eamO6ci%2Bov7UEGVyD%2BNrR8ABNJw3p8b5gobkHXwhcg27PzCS6WA&X-Amz-Signature=e6992f2ccec55a07056ea4ade259658ae8ddb09e4c95a41ee585231c43f60b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QRLWIV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNjZTEvrh1pfmAx5H0E33JEacQ4HJ3MAy2UyAyq7GPWgIhAOZJgY1%2F%2FE1z%2F%2BcRYThHTcT8bvJT9IP3iyWMe0B6W8DCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYSnyNwjstpEygOmsq3AO9B05VytFhtWduvPAljVp8dIpXcyw04O31RsUk2wYw47Y48pgalU4ucK1sap27CIwbgjBrVyJPTGUoRXOQuNK%2B7DPp1NDrXWT0rzlo3rrYPbVO0qqexkbmwnIazrwDzls7Y6RE2sq5XEHb8JS%2Fn1%2BnIRPoCQCAzviCfWGvNQ2v1qwFwG3a52Gx4sAZQs9aPBHnblhBkWoWhCCMY66OhYsID%2FcOlAbgqi1pvm9M%2FuQVvjqPRHdVDHhkgSZmxUAhyfshXmXUNsEGttHwwD3vHljlffyYZ0mnTWXI%2BWrhwzcmvJlUj2IcF43L7rtixDDaJcfVJtRCT96fiGttAbvLPwAUjCLjIRW3tfEdg8z34mPwYai0XyL50VvRSQwJ6XE%2FEstsdkiUlf8oJKy0TbdC8sL2NV8jzkWb%2FAfVMMEH%2BZL%2B%2FyexBqbplQuJgFZsvBCq2xGtGgue1GW9mIyCPp6EX1%2Fxp466%2BLK71XejytJufADyLiQ%2BXe9%2FQeDIvRaygU17tGCbdqMTB9ZvNnDQQmOJumbuPz1gr3oeWjLvoho%2Fbo0swLAf0QAXXc5YEFmrypCYChUVeCVQR%2Fn5B2M5Syh6%2Bu2xYWGpXd6k%2BDCjEEZ9S25C0RqbF7a8dMC%2FZ2FBMjDR3K7EBjqkATUieGqnT9ehyMvtNH6PXfoVpqdwAaADCpWbXNoYPTNACKurYATUFYsoA9irgaFZ2bTUL7Ni%2B0X25vHqALOaQT9sYhaALnsJwsM9reeJCmdFDnB6rV5zCX13HJg5W32aDXFhAdEea6Pivuh1pp1RXz0FyQn8721TGUl75n1m3eamO6ci%2Bov7UEGVyD%2BNrR8ABNJw3p8b5gobkHXwhcg27PzCS6WA&X-Amz-Signature=69dcea11673dcfe2511a9ac3a8def0fb875c45535c5ac74d72a3a88db2132361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QRLWIV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNjZTEvrh1pfmAx5H0E33JEacQ4HJ3MAy2UyAyq7GPWgIhAOZJgY1%2F%2FE1z%2F%2BcRYThHTcT8bvJT9IP3iyWMe0B6W8DCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYSnyNwjstpEygOmsq3AO9B05VytFhtWduvPAljVp8dIpXcyw04O31RsUk2wYw47Y48pgalU4ucK1sap27CIwbgjBrVyJPTGUoRXOQuNK%2B7DPp1NDrXWT0rzlo3rrYPbVO0qqexkbmwnIazrwDzls7Y6RE2sq5XEHb8JS%2Fn1%2BnIRPoCQCAzviCfWGvNQ2v1qwFwG3a52Gx4sAZQs9aPBHnblhBkWoWhCCMY66OhYsID%2FcOlAbgqi1pvm9M%2FuQVvjqPRHdVDHhkgSZmxUAhyfshXmXUNsEGttHwwD3vHljlffyYZ0mnTWXI%2BWrhwzcmvJlUj2IcF43L7rtixDDaJcfVJtRCT96fiGttAbvLPwAUjCLjIRW3tfEdg8z34mPwYai0XyL50VvRSQwJ6XE%2FEstsdkiUlf8oJKy0TbdC8sL2NV8jzkWb%2FAfVMMEH%2BZL%2B%2FyexBqbplQuJgFZsvBCq2xGtGgue1GW9mIyCPp6EX1%2Fxp466%2BLK71XejytJufADyLiQ%2BXe9%2FQeDIvRaygU17tGCbdqMTB9ZvNnDQQmOJumbuPz1gr3oeWjLvoho%2Fbo0swLAf0QAXXc5YEFmrypCYChUVeCVQR%2Fn5B2M5Syh6%2Bu2xYWGpXd6k%2BDCjEEZ9S25C0RqbF7a8dMC%2FZ2FBMjDR3K7EBjqkATUieGqnT9ehyMvtNH6PXfoVpqdwAaADCpWbXNoYPTNACKurYATUFYsoA9irgaFZ2bTUL7Ni%2B0X25vHqALOaQT9sYhaALnsJwsM9reeJCmdFDnB6rV5zCX13HJg5W32aDXFhAdEea6Pivuh1pp1RXz0FyQn8721TGUl75n1m3eamO6ci%2Bov7UEGVyD%2BNrR8ABNJw3p8b5gobkHXwhcg27PzCS6WA&X-Amz-Signature=bc5bace43c8f20ac24e797f6d5c8021dce858ad21692872b43265c5a93290717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PTPEWTQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkrvlOXNiinMTJQC3PIgDNGXCNPGLg%2F3Egx37K%2BCuBnAiBodUfrGUj%2BY1gPDv%2F6fCjnSdnhCDz9sWr3jk6lSlPPoiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM55zdfgNYJIIsj8j8KtwD9jtabWf9nYPko7ohGSBs8AdYy1GVXCf8S7RcVdkaMUkksFscLY76ZfpxDNz4uBUJj0LNuync5auJGM2%2FxGpKlF1jLQwOKPSsHUg2VWTXaDZ%2Fyl%2Fdips4G1v1yioVBFGB7xfaQiWhQ%2BxYrREfG9tH86f%2BeFGFPEIi8qqz0L1NF5JARlfonVTIrNJ1r8oIk%2BYqwp%2FFTUXbNssm1AkQmuBJohEYrECmKARlCDWr3D8r62SANR096odzRQw34VQLf%2BIM05yzvhH%2FvtJqfEd%2FA95yG45glor10LPZeGncvtBKYKeJS9kQGdGlu8CIw04E%2FHby4oH8syklP%2BqBBV5TjgUsiHiURoR7Xt1I9HtEksWLXDGrXzkWFktpcTyprdNkVymWWF2FLqnwrBuyr8jaD8PWc7EKxiN9XSlRluEcjKt9K6e3x7Xk%2FZC6BhImn24ZNuYs5T%2BcLzxvknB%2B7kpeaf59jaymWaPLopH40abNIm47GSUY0Mt4BeL2YGuwwUe1ieCE54bsz%2BItoHJpe9eQ52zVdvwo954LWVhT4Ei1tRSNejYyuMG244ZyBUZ0K9PPAmhCR3yUzKe9q3RYDApIL1uO%2F9b8VCkjRy3jgaDzgW8GdkMxDwxBA%2FRWicKkMysw%2BduuxAY6pgFMbqO6BP%2FgbJjcax0Ry5X%2BiPuF4yY00kUOBTRf2rdLJfYu29D4dAkji9ZaAsRpCFgbzwMttH1e6xIYiWkkQC1saoDxDdKLcazzyTL6eQUHziWXlbjSzBFJgX4DCP1ATVCmEu1WuvCdxyEhl3n5mLAGhsjoozkmM%2FOhLgQ5cKeDvV0wFcc59DUXTVvwbT1BueoTvmFgq4t0d%2FECc8twejFYdOBxydIg&X-Amz-Signature=ff5140d3001fa8dce6b9172a0bc62548a0e3d47ee0a54dc1200cfccaadba76e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QRLWIV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNjZTEvrh1pfmAx5H0E33JEacQ4HJ3MAy2UyAyq7GPWgIhAOZJgY1%2F%2FE1z%2F%2BcRYThHTcT8bvJT9IP3iyWMe0B6W8DCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYSnyNwjstpEygOmsq3AO9B05VytFhtWduvPAljVp8dIpXcyw04O31RsUk2wYw47Y48pgalU4ucK1sap27CIwbgjBrVyJPTGUoRXOQuNK%2B7DPp1NDrXWT0rzlo3rrYPbVO0qqexkbmwnIazrwDzls7Y6RE2sq5XEHb8JS%2Fn1%2BnIRPoCQCAzviCfWGvNQ2v1qwFwG3a52Gx4sAZQs9aPBHnblhBkWoWhCCMY66OhYsID%2FcOlAbgqi1pvm9M%2FuQVvjqPRHdVDHhkgSZmxUAhyfshXmXUNsEGttHwwD3vHljlffyYZ0mnTWXI%2BWrhwzcmvJlUj2IcF43L7rtixDDaJcfVJtRCT96fiGttAbvLPwAUjCLjIRW3tfEdg8z34mPwYai0XyL50VvRSQwJ6XE%2FEstsdkiUlf8oJKy0TbdC8sL2NV8jzkWb%2FAfVMMEH%2BZL%2B%2FyexBqbplQuJgFZsvBCq2xGtGgue1GW9mIyCPp6EX1%2Fxp466%2BLK71XejytJufADyLiQ%2BXe9%2FQeDIvRaygU17tGCbdqMTB9ZvNnDQQmOJumbuPz1gr3oeWjLvoho%2Fbo0swLAf0QAXXc5YEFmrypCYChUVeCVQR%2Fn5B2M5Syh6%2Bu2xYWGpXd6k%2BDCjEEZ9S25C0RqbF7a8dMC%2FZ2FBMjDR3K7EBjqkATUieGqnT9ehyMvtNH6PXfoVpqdwAaADCpWbXNoYPTNACKurYATUFYsoA9irgaFZ2bTUL7Ni%2B0X25vHqALOaQT9sYhaALnsJwsM9reeJCmdFDnB6rV5zCX13HJg5W32aDXFhAdEea6Pivuh1pp1RXz0FyQn8721TGUl75n1m3eamO6ci%2Bov7UEGVyD%2BNrR8ABNJw3p8b5gobkHXwhcg27PzCS6WA&X-Amz-Signature=d4540feb84f33eb55f2ffcec6f336d8e77ffb1184b3577a58e7bcc89b751d8a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYYJGLD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAN8g3UdZtc9lNqbhYDKDzPCXOIVlSUlZH8wm7VD119uAiEA2dnLEaGjNT5AAfI%2FZPDGBeH91oRB%2FYA0fPDzP8HFrQsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGWZ3dLBrjNAmSXTircA7sTxljpvuYamSr8EJTdHAJDQhkDA4yb4HvvIGmmTriuNCVpMXD036fTMapoSGrhfzrJ%2Fk3%2Fs%2FRi03COcyu%2Foub86qJu0P393Bjd9%2Bphe0RoOn67aEUNd3vNkUr4dpo6hrAC0jW3SH1PtEMpC0pHkPkR5NHLfNGv5m2ZjmHgd2aJe4meO88K1lN40U5%2Br9SQe8nLlMOxhsnSDgfDjlwIA7gzPD1PhmDJIcgrRmdcNR2gq9QsVJt%2BUpwJwwNQtTCoNAVL0iLqXet8WdIBApxVdU4nmPgzYVmey%2FaiV1O%2Fe1JefaeRKcJJSiqq0KPu1eQPo%2BFLrrFZoyey4Wh4QHFLP%2B9ST4PY%2BaXBUwEr4AjmRGyVW%2B8T0SNmdrZgE2MpKlfsoSTqRW6Ie9Nng29ffWAvH6cJldtFbmu2izzCiNzje9M%2B9oK6p%2BoGapa1ndeIZBV2Hw8NqXAD7sapsx2Rrq%2FpPWJQc813XWdsAqXcJDQAlE3icQoGR41p9oZKZ5Jj2eDUPc%2FxB5GqbP1pdHE2zZRKnh7N5CkWEs%2FqCTG84zE0Z1D2M7BYxkQlUD7HKyTgcMeY%2FW7JWzUnlkDV90z7unO2WrlvvU6D3NqgWOAwG%2Fc4KXed94i37BjjxYjUfrNbMIDdrsQGOqUB2SCkr4F9xJdcI22OzVToGi%2F7MxWBzc8827CXfopJ%2F5CpXJwxJtgChkaJjBDYuykOWNEImckVqDt5qPbnkzUon8H5pFWaPH%2Bcv7OjNXiJgeIEMgIObY8WxqdWPX1EAfTMn3ltrZs4NYG81FSjo4A%2Fn%2BRlfXGSsTLVEg4CjzXMw508i%2B4XRVvRjXXxqmJTJ67oVghNOeUGkOYiuzqQ9hOi6zbQCWAb&X-Amz-Signature=4e4ac595d3c6b4b221fd7ada264f5652b9bff43f9597af8605864082ea27e48e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYYJGLD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAN8g3UdZtc9lNqbhYDKDzPCXOIVlSUlZH8wm7VD119uAiEA2dnLEaGjNT5AAfI%2FZPDGBeH91oRB%2FYA0fPDzP8HFrQsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGWZ3dLBrjNAmSXTircA7sTxljpvuYamSr8EJTdHAJDQhkDA4yb4HvvIGmmTriuNCVpMXD036fTMapoSGrhfzrJ%2Fk3%2Fs%2FRi03COcyu%2Foub86qJu0P393Bjd9%2Bphe0RoOn67aEUNd3vNkUr4dpo6hrAC0jW3SH1PtEMpC0pHkPkR5NHLfNGv5m2ZjmHgd2aJe4meO88K1lN40U5%2Br9SQe8nLlMOxhsnSDgfDjlwIA7gzPD1PhmDJIcgrRmdcNR2gq9QsVJt%2BUpwJwwNQtTCoNAVL0iLqXet8WdIBApxVdU4nmPgzYVmey%2FaiV1O%2Fe1JefaeRKcJJSiqq0KPu1eQPo%2BFLrrFZoyey4Wh4QHFLP%2B9ST4PY%2BaXBUwEr4AjmRGyVW%2B8T0SNmdrZgE2MpKlfsoSTqRW6Ie9Nng29ffWAvH6cJldtFbmu2izzCiNzje9M%2B9oK6p%2BoGapa1ndeIZBV2Hw8NqXAD7sapsx2Rrq%2FpPWJQc813XWdsAqXcJDQAlE3icQoGR41p9oZKZ5Jj2eDUPc%2FxB5GqbP1pdHE2zZRKnh7N5CkWEs%2FqCTG84zE0Z1D2M7BYxkQlUD7HKyTgcMeY%2FW7JWzUnlkDV90z7unO2WrlvvU6D3NqgWOAwG%2Fc4KXed94i37BjjxYjUfrNbMIDdrsQGOqUB2SCkr4F9xJdcI22OzVToGi%2F7MxWBzc8827CXfopJ%2F5CpXJwxJtgChkaJjBDYuykOWNEImckVqDt5qPbnkzUon8H5pFWaPH%2Bcv7OjNXiJgeIEMgIObY8WxqdWPX1EAfTMn3ltrZs4NYG81FSjo4A%2Fn%2BRlfXGSsTLVEg4CjzXMw508i%2B4XRVvRjXXxqmJTJ67oVghNOeUGkOYiuzqQ9hOi6zbQCWAb&X-Amz-Signature=cea63a84a75929f37ea5071830de923a8ec7490c227343a52c7a4122ba658396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYYJGLD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAN8g3UdZtc9lNqbhYDKDzPCXOIVlSUlZH8wm7VD119uAiEA2dnLEaGjNT5AAfI%2FZPDGBeH91oRB%2FYA0fPDzP8HFrQsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGWZ3dLBrjNAmSXTircA7sTxljpvuYamSr8EJTdHAJDQhkDA4yb4HvvIGmmTriuNCVpMXD036fTMapoSGrhfzrJ%2Fk3%2Fs%2FRi03COcyu%2Foub86qJu0P393Bjd9%2Bphe0RoOn67aEUNd3vNkUr4dpo6hrAC0jW3SH1PtEMpC0pHkPkR5NHLfNGv5m2ZjmHgd2aJe4meO88K1lN40U5%2Br9SQe8nLlMOxhsnSDgfDjlwIA7gzPD1PhmDJIcgrRmdcNR2gq9QsVJt%2BUpwJwwNQtTCoNAVL0iLqXet8WdIBApxVdU4nmPgzYVmey%2FaiV1O%2Fe1JefaeRKcJJSiqq0KPu1eQPo%2BFLrrFZoyey4Wh4QHFLP%2B9ST4PY%2BaXBUwEr4AjmRGyVW%2B8T0SNmdrZgE2MpKlfsoSTqRW6Ie9Nng29ffWAvH6cJldtFbmu2izzCiNzje9M%2B9oK6p%2BoGapa1ndeIZBV2Hw8NqXAD7sapsx2Rrq%2FpPWJQc813XWdsAqXcJDQAlE3icQoGR41p9oZKZ5Jj2eDUPc%2FxB5GqbP1pdHE2zZRKnh7N5CkWEs%2FqCTG84zE0Z1D2M7BYxkQlUD7HKyTgcMeY%2FW7JWzUnlkDV90z7unO2WrlvvU6D3NqgWOAwG%2Fc4KXed94i37BjjxYjUfrNbMIDdrsQGOqUB2SCkr4F9xJdcI22OzVToGi%2F7MxWBzc8827CXfopJ%2F5CpXJwxJtgChkaJjBDYuykOWNEImckVqDt5qPbnkzUon8H5pFWaPH%2Bcv7OjNXiJgeIEMgIObY8WxqdWPX1EAfTMn3ltrZs4NYG81FSjo4A%2Fn%2BRlfXGSsTLVEg4CjzXMw508i%2B4XRVvRjXXxqmJTJ67oVghNOeUGkOYiuzqQ9hOi6zbQCWAb&X-Amz-Signature=5f35f588e80174c2522bbee190be30c07cf09475fbcbd8f833c6a4d61c265e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYYJGLD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAN8g3UdZtc9lNqbhYDKDzPCXOIVlSUlZH8wm7VD119uAiEA2dnLEaGjNT5AAfI%2FZPDGBeH91oRB%2FYA0fPDzP8HFrQsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGWZ3dLBrjNAmSXTircA7sTxljpvuYamSr8EJTdHAJDQhkDA4yb4HvvIGmmTriuNCVpMXD036fTMapoSGrhfzrJ%2Fk3%2Fs%2FRi03COcyu%2Foub86qJu0P393Bjd9%2Bphe0RoOn67aEUNd3vNkUr4dpo6hrAC0jW3SH1PtEMpC0pHkPkR5NHLfNGv5m2ZjmHgd2aJe4meO88K1lN40U5%2Br9SQe8nLlMOxhsnSDgfDjlwIA7gzPD1PhmDJIcgrRmdcNR2gq9QsVJt%2BUpwJwwNQtTCoNAVL0iLqXet8WdIBApxVdU4nmPgzYVmey%2FaiV1O%2Fe1JefaeRKcJJSiqq0KPu1eQPo%2BFLrrFZoyey4Wh4QHFLP%2B9ST4PY%2BaXBUwEr4AjmRGyVW%2B8T0SNmdrZgE2MpKlfsoSTqRW6Ie9Nng29ffWAvH6cJldtFbmu2izzCiNzje9M%2B9oK6p%2BoGapa1ndeIZBV2Hw8NqXAD7sapsx2Rrq%2FpPWJQc813XWdsAqXcJDQAlE3icQoGR41p9oZKZ5Jj2eDUPc%2FxB5GqbP1pdHE2zZRKnh7N5CkWEs%2FqCTG84zE0Z1D2M7BYxkQlUD7HKyTgcMeY%2FW7JWzUnlkDV90z7unO2WrlvvU6D3NqgWOAwG%2Fc4KXed94i37BjjxYjUfrNbMIDdrsQGOqUB2SCkr4F9xJdcI22OzVToGi%2F7MxWBzc8827CXfopJ%2F5CpXJwxJtgChkaJjBDYuykOWNEImckVqDt5qPbnkzUon8H5pFWaPH%2Bcv7OjNXiJgeIEMgIObY8WxqdWPX1EAfTMn3ltrZs4NYG81FSjo4A%2Fn%2BRlfXGSsTLVEg4CjzXMw508i%2B4XRVvRjXXxqmJTJ67oVghNOeUGkOYiuzqQ9hOi6zbQCWAb&X-Amz-Signature=d36de5bfa4d35301bed4aa87eee796f5c438c237735c8a1b172ae0513aa9f459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYYJGLD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAN8g3UdZtc9lNqbhYDKDzPCXOIVlSUlZH8wm7VD119uAiEA2dnLEaGjNT5AAfI%2FZPDGBeH91oRB%2FYA0fPDzP8HFrQsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGWZ3dLBrjNAmSXTircA7sTxljpvuYamSr8EJTdHAJDQhkDA4yb4HvvIGmmTriuNCVpMXD036fTMapoSGrhfzrJ%2Fk3%2Fs%2FRi03COcyu%2Foub86qJu0P393Bjd9%2Bphe0RoOn67aEUNd3vNkUr4dpo6hrAC0jW3SH1PtEMpC0pHkPkR5NHLfNGv5m2ZjmHgd2aJe4meO88K1lN40U5%2Br9SQe8nLlMOxhsnSDgfDjlwIA7gzPD1PhmDJIcgrRmdcNR2gq9QsVJt%2BUpwJwwNQtTCoNAVL0iLqXet8WdIBApxVdU4nmPgzYVmey%2FaiV1O%2Fe1JefaeRKcJJSiqq0KPu1eQPo%2BFLrrFZoyey4Wh4QHFLP%2B9ST4PY%2BaXBUwEr4AjmRGyVW%2B8T0SNmdrZgE2MpKlfsoSTqRW6Ie9Nng29ffWAvH6cJldtFbmu2izzCiNzje9M%2B9oK6p%2BoGapa1ndeIZBV2Hw8NqXAD7sapsx2Rrq%2FpPWJQc813XWdsAqXcJDQAlE3icQoGR41p9oZKZ5Jj2eDUPc%2FxB5GqbP1pdHE2zZRKnh7N5CkWEs%2FqCTG84zE0Z1D2M7BYxkQlUD7HKyTgcMeY%2FW7JWzUnlkDV90z7unO2WrlvvU6D3NqgWOAwG%2Fc4KXed94i37BjjxYjUfrNbMIDdrsQGOqUB2SCkr4F9xJdcI22OzVToGi%2F7MxWBzc8827CXfopJ%2F5CpXJwxJtgChkaJjBDYuykOWNEImckVqDt5qPbnkzUon8H5pFWaPH%2Bcv7OjNXiJgeIEMgIObY8WxqdWPX1EAfTMn3ltrZs4NYG81FSjo4A%2Fn%2BRlfXGSsTLVEg4CjzXMw508i%2B4XRVvRjXXxqmJTJ67oVghNOeUGkOYiuzqQ9hOi6zbQCWAb&X-Amz-Signature=93cbd0b8efaf90e194fc160c4468662f20e00d3963b5a8f6d446b0a8583923a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYYJGLD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAN8g3UdZtc9lNqbhYDKDzPCXOIVlSUlZH8wm7VD119uAiEA2dnLEaGjNT5AAfI%2FZPDGBeH91oRB%2FYA0fPDzP8HFrQsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGWZ3dLBrjNAmSXTircA7sTxljpvuYamSr8EJTdHAJDQhkDA4yb4HvvIGmmTriuNCVpMXD036fTMapoSGrhfzrJ%2Fk3%2Fs%2FRi03COcyu%2Foub86qJu0P393Bjd9%2Bphe0RoOn67aEUNd3vNkUr4dpo6hrAC0jW3SH1PtEMpC0pHkPkR5NHLfNGv5m2ZjmHgd2aJe4meO88K1lN40U5%2Br9SQe8nLlMOxhsnSDgfDjlwIA7gzPD1PhmDJIcgrRmdcNR2gq9QsVJt%2BUpwJwwNQtTCoNAVL0iLqXet8WdIBApxVdU4nmPgzYVmey%2FaiV1O%2Fe1JefaeRKcJJSiqq0KPu1eQPo%2BFLrrFZoyey4Wh4QHFLP%2B9ST4PY%2BaXBUwEr4AjmRGyVW%2B8T0SNmdrZgE2MpKlfsoSTqRW6Ie9Nng29ffWAvH6cJldtFbmu2izzCiNzje9M%2B9oK6p%2BoGapa1ndeIZBV2Hw8NqXAD7sapsx2Rrq%2FpPWJQc813XWdsAqXcJDQAlE3icQoGR41p9oZKZ5Jj2eDUPc%2FxB5GqbP1pdHE2zZRKnh7N5CkWEs%2FqCTG84zE0Z1D2M7BYxkQlUD7HKyTgcMeY%2FW7JWzUnlkDV90z7unO2WrlvvU6D3NqgWOAwG%2Fc4KXed94i37BjjxYjUfrNbMIDdrsQGOqUB2SCkr4F9xJdcI22OzVToGi%2F7MxWBzc8827CXfopJ%2F5CpXJwxJtgChkaJjBDYuykOWNEImckVqDt5qPbnkzUon8H5pFWaPH%2Bcv7OjNXiJgeIEMgIObY8WxqdWPX1EAfTMn3ltrZs4NYG81FSjo4A%2Fn%2BRlfXGSsTLVEg4CjzXMw508i%2B4XRVvRjXXxqmJTJ67oVghNOeUGkOYiuzqQ9hOi6zbQCWAb&X-Amz-Signature=43422507a5543313bd15367d48401ee7ca1c94fcd4b3c8c4011b73386a338e97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYYJGLD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAN8g3UdZtc9lNqbhYDKDzPCXOIVlSUlZH8wm7VD119uAiEA2dnLEaGjNT5AAfI%2FZPDGBeH91oRB%2FYA0fPDzP8HFrQsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGWZ3dLBrjNAmSXTircA7sTxljpvuYamSr8EJTdHAJDQhkDA4yb4HvvIGmmTriuNCVpMXD036fTMapoSGrhfzrJ%2Fk3%2Fs%2FRi03COcyu%2Foub86qJu0P393Bjd9%2Bphe0RoOn67aEUNd3vNkUr4dpo6hrAC0jW3SH1PtEMpC0pHkPkR5NHLfNGv5m2ZjmHgd2aJe4meO88K1lN40U5%2Br9SQe8nLlMOxhsnSDgfDjlwIA7gzPD1PhmDJIcgrRmdcNR2gq9QsVJt%2BUpwJwwNQtTCoNAVL0iLqXet8WdIBApxVdU4nmPgzYVmey%2FaiV1O%2Fe1JefaeRKcJJSiqq0KPu1eQPo%2BFLrrFZoyey4Wh4QHFLP%2B9ST4PY%2BaXBUwEr4AjmRGyVW%2B8T0SNmdrZgE2MpKlfsoSTqRW6Ie9Nng29ffWAvH6cJldtFbmu2izzCiNzje9M%2B9oK6p%2BoGapa1ndeIZBV2Hw8NqXAD7sapsx2Rrq%2FpPWJQc813XWdsAqXcJDQAlE3icQoGR41p9oZKZ5Jj2eDUPc%2FxB5GqbP1pdHE2zZRKnh7N5CkWEs%2FqCTG84zE0Z1D2M7BYxkQlUD7HKyTgcMeY%2FW7JWzUnlkDV90z7unO2WrlvvU6D3NqgWOAwG%2Fc4KXed94i37BjjxYjUfrNbMIDdrsQGOqUB2SCkr4F9xJdcI22OzVToGi%2F7MxWBzc8827CXfopJ%2F5CpXJwxJtgChkaJjBDYuykOWNEImckVqDt5qPbnkzUon8H5pFWaPH%2Bcv7OjNXiJgeIEMgIObY8WxqdWPX1EAfTMn3ltrZs4NYG81FSjo4A%2Fn%2BRlfXGSsTLVEg4CjzXMw508i%2B4XRVvRjXXxqmJTJ67oVghNOeUGkOYiuzqQ9hOi6zbQCWAb&X-Amz-Signature=c07d2bb46b39a22903f1c87cbbe4680236d555584d95b6310ea01282a2d7dbe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYYJGLD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAN8g3UdZtc9lNqbhYDKDzPCXOIVlSUlZH8wm7VD119uAiEA2dnLEaGjNT5AAfI%2FZPDGBeH91oRB%2FYA0fPDzP8HFrQsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGWZ3dLBrjNAmSXTircA7sTxljpvuYamSr8EJTdHAJDQhkDA4yb4HvvIGmmTriuNCVpMXD036fTMapoSGrhfzrJ%2Fk3%2Fs%2FRi03COcyu%2Foub86qJu0P393Bjd9%2Bphe0RoOn67aEUNd3vNkUr4dpo6hrAC0jW3SH1PtEMpC0pHkPkR5NHLfNGv5m2ZjmHgd2aJe4meO88K1lN40U5%2Br9SQe8nLlMOxhsnSDgfDjlwIA7gzPD1PhmDJIcgrRmdcNR2gq9QsVJt%2BUpwJwwNQtTCoNAVL0iLqXet8WdIBApxVdU4nmPgzYVmey%2FaiV1O%2Fe1JefaeRKcJJSiqq0KPu1eQPo%2BFLrrFZoyey4Wh4QHFLP%2B9ST4PY%2BaXBUwEr4AjmRGyVW%2B8T0SNmdrZgE2MpKlfsoSTqRW6Ie9Nng29ffWAvH6cJldtFbmu2izzCiNzje9M%2B9oK6p%2BoGapa1ndeIZBV2Hw8NqXAD7sapsx2Rrq%2FpPWJQc813XWdsAqXcJDQAlE3icQoGR41p9oZKZ5Jj2eDUPc%2FxB5GqbP1pdHE2zZRKnh7N5CkWEs%2FqCTG84zE0Z1D2M7BYxkQlUD7HKyTgcMeY%2FW7JWzUnlkDV90z7unO2WrlvvU6D3NqgWOAwG%2Fc4KXed94i37BjjxYjUfrNbMIDdrsQGOqUB2SCkr4F9xJdcI22OzVToGi%2F7MxWBzc8827CXfopJ%2F5CpXJwxJtgChkaJjBDYuykOWNEImckVqDt5qPbnkzUon8H5pFWaPH%2Bcv7OjNXiJgeIEMgIObY8WxqdWPX1EAfTMn3ltrZs4NYG81FSjo4A%2Fn%2BRlfXGSsTLVEg4CjzXMw508i%2B4XRVvRjXXxqmJTJ67oVghNOeUGkOYiuzqQ9hOi6zbQCWAb&X-Amz-Signature=a709b2b58e6cc8e81dcdae0ef8f7eb118df0c2e74fce4a1c931f3e7a8d4ba126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
