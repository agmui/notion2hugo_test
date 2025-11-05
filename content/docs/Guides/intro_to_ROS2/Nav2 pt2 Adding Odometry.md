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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGBDP6UF%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLLaaS8TVOtT77fufQenNjDY3agGaelE9FWJA8KAHkHAiBJIE8nC2Y6qMRqUmLTgH17EJab4fCC%2Fu1nMpFpXyn%2BZyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMeYbA8fPC9fd77PpoKtwDYUFC76b1NkYuKevrhHpmY7mrUN689ArB7UMuex6%2BCui9D1C2G7sPluPsolBiIdLtGEUPESR7O1ByUdriwWw%2BjIg8bU2okUSBmvUQHlaGzGf%2FmdIl8mNcjOUgZJWNY3M4ent2WVtmGJiU1xiBUySNxgyivd%2FfVLWQuFYvFP1Uy2VIpenOaMS%2F1XJCZiQ9FJdUS9jnjQnbWTvGGhKYhUe3bOW7iLmfJuJAUbOpTMQC63t%2BWeGHn1ZqDffdaCUqz%2FNDvOWXy3qD%2FK1DAEwS2BrJmDwVJYFx6WJsaZPs1s4dYpkbSdNliQWcZRtEQJ49h00GMTsmNqUb3CYTrd95OrzBjLO95cA3sXoZaGXZn3TvAjkR%2Bgiy%2FOMzPXZpjNBpoWsp5md57TiM961qxiBzrzpPQ0kDugVxN%2FKC59oU6Q5bzc9HOMD06kDLo7APz%2Fjkn95utQDiOGZUPH0I%2B0HCjJk%2BCQclqOb6xLdzR8sEclwXJDKtSzitu2a%2BS%2Fp85ryYBGL%2Blm0dnWBtKhEUSlEe%2BqDR%2BggoHXTyb%2F%2FoFZ0Q2LfFiGITv94uu1Jfs4M5p3R7Oihf4CpHsTj1iz389moNm6VeAQUqpoC3268E2ZxcYHu4RWcDxtdKNvFWtmVta%2BQwj92pyAY6pgH0H6zeMeL%2FptfcmgF6IDKSqslOPr8bE09j7KQQfY8DcUNqFHOwoxt8aabC%2FuO1nyGpmOJVtsryNq1HOHZtuVzsoT7dlT0hiuOOzALyY%2FOyXwjyyKlVQH24T%2BqmFLUUg0B41Dxtcuzb4r7qVK1vFvVak8skDmtTcPsm%2FPsgMZJjFcODuyit267SGikgdxN768d0IM0TQSjJwPRd2tJSOsOindEgsUKk&X-Amz-Signature=49418aa7232a98b31eef84833ce859dad7eb3a2fac4e92405d73bc47f4c430ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGBDP6UF%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLLaaS8TVOtT77fufQenNjDY3agGaelE9FWJA8KAHkHAiBJIE8nC2Y6qMRqUmLTgH17EJab4fCC%2Fu1nMpFpXyn%2BZyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMeYbA8fPC9fd77PpoKtwDYUFC76b1NkYuKevrhHpmY7mrUN689ArB7UMuex6%2BCui9D1C2G7sPluPsolBiIdLtGEUPESR7O1ByUdriwWw%2BjIg8bU2okUSBmvUQHlaGzGf%2FmdIl8mNcjOUgZJWNY3M4ent2WVtmGJiU1xiBUySNxgyivd%2FfVLWQuFYvFP1Uy2VIpenOaMS%2F1XJCZiQ9FJdUS9jnjQnbWTvGGhKYhUe3bOW7iLmfJuJAUbOpTMQC63t%2BWeGHn1ZqDffdaCUqz%2FNDvOWXy3qD%2FK1DAEwS2BrJmDwVJYFx6WJsaZPs1s4dYpkbSdNliQWcZRtEQJ49h00GMTsmNqUb3CYTrd95OrzBjLO95cA3sXoZaGXZn3TvAjkR%2Bgiy%2FOMzPXZpjNBpoWsp5md57TiM961qxiBzrzpPQ0kDugVxN%2FKC59oU6Q5bzc9HOMD06kDLo7APz%2Fjkn95utQDiOGZUPH0I%2B0HCjJk%2BCQclqOb6xLdzR8sEclwXJDKtSzitu2a%2BS%2Fp85ryYBGL%2Blm0dnWBtKhEUSlEe%2BqDR%2BggoHXTyb%2F%2FoFZ0Q2LfFiGITv94uu1Jfs4M5p3R7Oihf4CpHsTj1iz389moNm6VeAQUqpoC3268E2ZxcYHu4RWcDxtdKNvFWtmVta%2BQwj92pyAY6pgH0H6zeMeL%2FptfcmgF6IDKSqslOPr8bE09j7KQQfY8DcUNqFHOwoxt8aabC%2FuO1nyGpmOJVtsryNq1HOHZtuVzsoT7dlT0hiuOOzALyY%2FOyXwjyyKlVQH24T%2BqmFLUUg0B41Dxtcuzb4r7qVK1vFvVak8skDmtTcPsm%2FPsgMZJjFcODuyit267SGikgdxN768d0IM0TQSjJwPRd2tJSOsOindEgsUKk&X-Amz-Signature=68ea6830fbea1f914a87a24ef97990eb65adc0ea1362242bee35997c298deabd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGBDP6UF%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLLaaS8TVOtT77fufQenNjDY3agGaelE9FWJA8KAHkHAiBJIE8nC2Y6qMRqUmLTgH17EJab4fCC%2Fu1nMpFpXyn%2BZyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMeYbA8fPC9fd77PpoKtwDYUFC76b1NkYuKevrhHpmY7mrUN689ArB7UMuex6%2BCui9D1C2G7sPluPsolBiIdLtGEUPESR7O1ByUdriwWw%2BjIg8bU2okUSBmvUQHlaGzGf%2FmdIl8mNcjOUgZJWNY3M4ent2WVtmGJiU1xiBUySNxgyivd%2FfVLWQuFYvFP1Uy2VIpenOaMS%2F1XJCZiQ9FJdUS9jnjQnbWTvGGhKYhUe3bOW7iLmfJuJAUbOpTMQC63t%2BWeGHn1ZqDffdaCUqz%2FNDvOWXy3qD%2FK1DAEwS2BrJmDwVJYFx6WJsaZPs1s4dYpkbSdNliQWcZRtEQJ49h00GMTsmNqUb3CYTrd95OrzBjLO95cA3sXoZaGXZn3TvAjkR%2Bgiy%2FOMzPXZpjNBpoWsp5md57TiM961qxiBzrzpPQ0kDugVxN%2FKC59oU6Q5bzc9HOMD06kDLo7APz%2Fjkn95utQDiOGZUPH0I%2B0HCjJk%2BCQclqOb6xLdzR8sEclwXJDKtSzitu2a%2BS%2Fp85ryYBGL%2Blm0dnWBtKhEUSlEe%2BqDR%2BggoHXTyb%2F%2FoFZ0Q2LfFiGITv94uu1Jfs4M5p3R7Oihf4CpHsTj1iz389moNm6VeAQUqpoC3268E2ZxcYHu4RWcDxtdKNvFWtmVta%2BQwj92pyAY6pgH0H6zeMeL%2FptfcmgF6IDKSqslOPr8bE09j7KQQfY8DcUNqFHOwoxt8aabC%2FuO1nyGpmOJVtsryNq1HOHZtuVzsoT7dlT0hiuOOzALyY%2FOyXwjyyKlVQH24T%2BqmFLUUg0B41Dxtcuzb4r7qVK1vFvVak8skDmtTcPsm%2FPsgMZJjFcODuyit267SGikgdxN768d0IM0TQSjJwPRd2tJSOsOindEgsUKk&X-Amz-Signature=cf2c7ceafbddbaf22149baf60218b3627acfcd27c9c29c0eb24f2c302cb8c4bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGBDP6UF%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLLaaS8TVOtT77fufQenNjDY3agGaelE9FWJA8KAHkHAiBJIE8nC2Y6qMRqUmLTgH17EJab4fCC%2Fu1nMpFpXyn%2BZyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMeYbA8fPC9fd77PpoKtwDYUFC76b1NkYuKevrhHpmY7mrUN689ArB7UMuex6%2BCui9D1C2G7sPluPsolBiIdLtGEUPESR7O1ByUdriwWw%2BjIg8bU2okUSBmvUQHlaGzGf%2FmdIl8mNcjOUgZJWNY3M4ent2WVtmGJiU1xiBUySNxgyivd%2FfVLWQuFYvFP1Uy2VIpenOaMS%2F1XJCZiQ9FJdUS9jnjQnbWTvGGhKYhUe3bOW7iLmfJuJAUbOpTMQC63t%2BWeGHn1ZqDffdaCUqz%2FNDvOWXy3qD%2FK1DAEwS2BrJmDwVJYFx6WJsaZPs1s4dYpkbSdNliQWcZRtEQJ49h00GMTsmNqUb3CYTrd95OrzBjLO95cA3sXoZaGXZn3TvAjkR%2Bgiy%2FOMzPXZpjNBpoWsp5md57TiM961qxiBzrzpPQ0kDugVxN%2FKC59oU6Q5bzc9HOMD06kDLo7APz%2Fjkn95utQDiOGZUPH0I%2B0HCjJk%2BCQclqOb6xLdzR8sEclwXJDKtSzitu2a%2BS%2Fp85ryYBGL%2Blm0dnWBtKhEUSlEe%2BqDR%2BggoHXTyb%2F%2FoFZ0Q2LfFiGITv94uu1Jfs4M5p3R7Oihf4CpHsTj1iz389moNm6VeAQUqpoC3268E2ZxcYHu4RWcDxtdKNvFWtmVta%2BQwj92pyAY6pgH0H6zeMeL%2FptfcmgF6IDKSqslOPr8bE09j7KQQfY8DcUNqFHOwoxt8aabC%2FuO1nyGpmOJVtsryNq1HOHZtuVzsoT7dlT0hiuOOzALyY%2FOyXwjyyKlVQH24T%2BqmFLUUg0B41Dxtcuzb4r7qVK1vFvVak8skDmtTcPsm%2FPsgMZJjFcODuyit267SGikgdxN768d0IM0TQSjJwPRd2tJSOsOindEgsUKk&X-Amz-Signature=cb5c3e0a6dd5943441528030f2e0fe8601feca2c69e94b14e24c955d82ca512e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGBDP6UF%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLLaaS8TVOtT77fufQenNjDY3agGaelE9FWJA8KAHkHAiBJIE8nC2Y6qMRqUmLTgH17EJab4fCC%2Fu1nMpFpXyn%2BZyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMeYbA8fPC9fd77PpoKtwDYUFC76b1NkYuKevrhHpmY7mrUN689ArB7UMuex6%2BCui9D1C2G7sPluPsolBiIdLtGEUPESR7O1ByUdriwWw%2BjIg8bU2okUSBmvUQHlaGzGf%2FmdIl8mNcjOUgZJWNY3M4ent2WVtmGJiU1xiBUySNxgyivd%2FfVLWQuFYvFP1Uy2VIpenOaMS%2F1XJCZiQ9FJdUS9jnjQnbWTvGGhKYhUe3bOW7iLmfJuJAUbOpTMQC63t%2BWeGHn1ZqDffdaCUqz%2FNDvOWXy3qD%2FK1DAEwS2BrJmDwVJYFx6WJsaZPs1s4dYpkbSdNliQWcZRtEQJ49h00GMTsmNqUb3CYTrd95OrzBjLO95cA3sXoZaGXZn3TvAjkR%2Bgiy%2FOMzPXZpjNBpoWsp5md57TiM961qxiBzrzpPQ0kDugVxN%2FKC59oU6Q5bzc9HOMD06kDLo7APz%2Fjkn95utQDiOGZUPH0I%2B0HCjJk%2BCQclqOb6xLdzR8sEclwXJDKtSzitu2a%2BS%2Fp85ryYBGL%2Blm0dnWBtKhEUSlEe%2BqDR%2BggoHXTyb%2F%2FoFZ0Q2LfFiGITv94uu1Jfs4M5p3R7Oihf4CpHsTj1iz389moNm6VeAQUqpoC3268E2ZxcYHu4RWcDxtdKNvFWtmVta%2BQwj92pyAY6pgH0H6zeMeL%2FptfcmgF6IDKSqslOPr8bE09j7KQQfY8DcUNqFHOwoxt8aabC%2FuO1nyGpmOJVtsryNq1HOHZtuVzsoT7dlT0hiuOOzALyY%2FOyXwjyyKlVQH24T%2BqmFLUUg0B41Dxtcuzb4r7qVK1vFvVak8skDmtTcPsm%2FPsgMZJjFcODuyit267SGikgdxN768d0IM0TQSjJwPRd2tJSOsOindEgsUKk&X-Amz-Signature=fbfaf581e76a1724df5d6236aa88e4e290557a81cc2702b56f99854c6a6ff5df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGBDP6UF%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLLaaS8TVOtT77fufQenNjDY3agGaelE9FWJA8KAHkHAiBJIE8nC2Y6qMRqUmLTgH17EJab4fCC%2Fu1nMpFpXyn%2BZyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMeYbA8fPC9fd77PpoKtwDYUFC76b1NkYuKevrhHpmY7mrUN689ArB7UMuex6%2BCui9D1C2G7sPluPsolBiIdLtGEUPESR7O1ByUdriwWw%2BjIg8bU2okUSBmvUQHlaGzGf%2FmdIl8mNcjOUgZJWNY3M4ent2WVtmGJiU1xiBUySNxgyivd%2FfVLWQuFYvFP1Uy2VIpenOaMS%2F1XJCZiQ9FJdUS9jnjQnbWTvGGhKYhUe3bOW7iLmfJuJAUbOpTMQC63t%2BWeGHn1ZqDffdaCUqz%2FNDvOWXy3qD%2FK1DAEwS2BrJmDwVJYFx6WJsaZPs1s4dYpkbSdNliQWcZRtEQJ49h00GMTsmNqUb3CYTrd95OrzBjLO95cA3sXoZaGXZn3TvAjkR%2Bgiy%2FOMzPXZpjNBpoWsp5md57TiM961qxiBzrzpPQ0kDugVxN%2FKC59oU6Q5bzc9HOMD06kDLo7APz%2Fjkn95utQDiOGZUPH0I%2B0HCjJk%2BCQclqOb6xLdzR8sEclwXJDKtSzitu2a%2BS%2Fp85ryYBGL%2Blm0dnWBtKhEUSlEe%2BqDR%2BggoHXTyb%2F%2FoFZ0Q2LfFiGITv94uu1Jfs4M5p3R7Oihf4CpHsTj1iz389moNm6VeAQUqpoC3268E2ZxcYHu4RWcDxtdKNvFWtmVta%2BQwj92pyAY6pgH0H6zeMeL%2FptfcmgF6IDKSqslOPr8bE09j7KQQfY8DcUNqFHOwoxt8aabC%2FuO1nyGpmOJVtsryNq1HOHZtuVzsoT7dlT0hiuOOzALyY%2FOyXwjyyKlVQH24T%2BqmFLUUg0B41Dxtcuzb4r7qVK1vFvVak8skDmtTcPsm%2FPsgMZJjFcODuyit267SGikgdxN768d0IM0TQSjJwPRd2tJSOsOindEgsUKk&X-Amz-Signature=ed319fe0d48ef4478bd8bf8c93074d0e746dee3f1c3f0015a10932ee636d85a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGBDP6UF%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLLaaS8TVOtT77fufQenNjDY3agGaelE9FWJA8KAHkHAiBJIE8nC2Y6qMRqUmLTgH17EJab4fCC%2Fu1nMpFpXyn%2BZyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMeYbA8fPC9fd77PpoKtwDYUFC76b1NkYuKevrhHpmY7mrUN689ArB7UMuex6%2BCui9D1C2G7sPluPsolBiIdLtGEUPESR7O1ByUdriwWw%2BjIg8bU2okUSBmvUQHlaGzGf%2FmdIl8mNcjOUgZJWNY3M4ent2WVtmGJiU1xiBUySNxgyivd%2FfVLWQuFYvFP1Uy2VIpenOaMS%2F1XJCZiQ9FJdUS9jnjQnbWTvGGhKYhUe3bOW7iLmfJuJAUbOpTMQC63t%2BWeGHn1ZqDffdaCUqz%2FNDvOWXy3qD%2FK1DAEwS2BrJmDwVJYFx6WJsaZPs1s4dYpkbSdNliQWcZRtEQJ49h00GMTsmNqUb3CYTrd95OrzBjLO95cA3sXoZaGXZn3TvAjkR%2Bgiy%2FOMzPXZpjNBpoWsp5md57TiM961qxiBzrzpPQ0kDugVxN%2FKC59oU6Q5bzc9HOMD06kDLo7APz%2Fjkn95utQDiOGZUPH0I%2B0HCjJk%2BCQclqOb6xLdzR8sEclwXJDKtSzitu2a%2BS%2Fp85ryYBGL%2Blm0dnWBtKhEUSlEe%2BqDR%2BggoHXTyb%2F%2FoFZ0Q2LfFiGITv94uu1Jfs4M5p3R7Oihf4CpHsTj1iz389moNm6VeAQUqpoC3268E2ZxcYHu4RWcDxtdKNvFWtmVta%2BQwj92pyAY6pgH0H6zeMeL%2FptfcmgF6IDKSqslOPr8bE09j7KQQfY8DcUNqFHOwoxt8aabC%2FuO1nyGpmOJVtsryNq1HOHZtuVzsoT7dlT0hiuOOzALyY%2FOyXwjyyKlVQH24T%2BqmFLUUg0B41Dxtcuzb4r7qVK1vFvVak8skDmtTcPsm%2FPsgMZJjFcODuyit267SGikgdxN768d0IM0TQSjJwPRd2tJSOsOindEgsUKk&X-Amz-Signature=b03c472fe3e49542d530beaba5318781cfb0135721d583154b7c392237c915d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGBDP6UF%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLLaaS8TVOtT77fufQenNjDY3agGaelE9FWJA8KAHkHAiBJIE8nC2Y6qMRqUmLTgH17EJab4fCC%2Fu1nMpFpXyn%2BZyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMeYbA8fPC9fd77PpoKtwDYUFC76b1NkYuKevrhHpmY7mrUN689ArB7UMuex6%2BCui9D1C2G7sPluPsolBiIdLtGEUPESR7O1ByUdriwWw%2BjIg8bU2okUSBmvUQHlaGzGf%2FmdIl8mNcjOUgZJWNY3M4ent2WVtmGJiU1xiBUySNxgyivd%2FfVLWQuFYvFP1Uy2VIpenOaMS%2F1XJCZiQ9FJdUS9jnjQnbWTvGGhKYhUe3bOW7iLmfJuJAUbOpTMQC63t%2BWeGHn1ZqDffdaCUqz%2FNDvOWXy3qD%2FK1DAEwS2BrJmDwVJYFx6WJsaZPs1s4dYpkbSdNliQWcZRtEQJ49h00GMTsmNqUb3CYTrd95OrzBjLO95cA3sXoZaGXZn3TvAjkR%2Bgiy%2FOMzPXZpjNBpoWsp5md57TiM961qxiBzrzpPQ0kDugVxN%2FKC59oU6Q5bzc9HOMD06kDLo7APz%2Fjkn95utQDiOGZUPH0I%2B0HCjJk%2BCQclqOb6xLdzR8sEclwXJDKtSzitu2a%2BS%2Fp85ryYBGL%2Blm0dnWBtKhEUSlEe%2BqDR%2BggoHXTyb%2F%2FoFZ0Q2LfFiGITv94uu1Jfs4M5p3R7Oihf4CpHsTj1iz389moNm6VeAQUqpoC3268E2ZxcYHu4RWcDxtdKNvFWtmVta%2BQwj92pyAY6pgH0H6zeMeL%2FptfcmgF6IDKSqslOPr8bE09j7KQQfY8DcUNqFHOwoxt8aabC%2FuO1nyGpmOJVtsryNq1HOHZtuVzsoT7dlT0hiuOOzALyY%2FOyXwjyyKlVQH24T%2BqmFLUUg0B41Dxtcuzb4r7qVK1vFvVak8skDmtTcPsm%2FPsgMZJjFcODuyit267SGikgdxN768d0IM0TQSjJwPRd2tJSOsOindEgsUKk&X-Amz-Signature=746f17547404ce22d3ef5131b5cb708edbee56665899275186418b8193b18fe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGBDP6UF%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLLaaS8TVOtT77fufQenNjDY3agGaelE9FWJA8KAHkHAiBJIE8nC2Y6qMRqUmLTgH17EJab4fCC%2Fu1nMpFpXyn%2BZyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMeYbA8fPC9fd77PpoKtwDYUFC76b1NkYuKevrhHpmY7mrUN689ArB7UMuex6%2BCui9D1C2G7sPluPsolBiIdLtGEUPESR7O1ByUdriwWw%2BjIg8bU2okUSBmvUQHlaGzGf%2FmdIl8mNcjOUgZJWNY3M4ent2WVtmGJiU1xiBUySNxgyivd%2FfVLWQuFYvFP1Uy2VIpenOaMS%2F1XJCZiQ9FJdUS9jnjQnbWTvGGhKYhUe3bOW7iLmfJuJAUbOpTMQC63t%2BWeGHn1ZqDffdaCUqz%2FNDvOWXy3qD%2FK1DAEwS2BrJmDwVJYFx6WJsaZPs1s4dYpkbSdNliQWcZRtEQJ49h00GMTsmNqUb3CYTrd95OrzBjLO95cA3sXoZaGXZn3TvAjkR%2Bgiy%2FOMzPXZpjNBpoWsp5md57TiM961qxiBzrzpPQ0kDugVxN%2FKC59oU6Q5bzc9HOMD06kDLo7APz%2Fjkn95utQDiOGZUPH0I%2B0HCjJk%2BCQclqOb6xLdzR8sEclwXJDKtSzitu2a%2BS%2Fp85ryYBGL%2Blm0dnWBtKhEUSlEe%2BqDR%2BggoHXTyb%2F%2FoFZ0Q2LfFiGITv94uu1Jfs4M5p3R7Oihf4CpHsTj1iz389moNm6VeAQUqpoC3268E2ZxcYHu4RWcDxtdKNvFWtmVta%2BQwj92pyAY6pgH0H6zeMeL%2FptfcmgF6IDKSqslOPr8bE09j7KQQfY8DcUNqFHOwoxt8aabC%2FuO1nyGpmOJVtsryNq1HOHZtuVzsoT7dlT0hiuOOzALyY%2FOyXwjyyKlVQH24T%2BqmFLUUg0B41Dxtcuzb4r7qVK1vFvVak8skDmtTcPsm%2FPsgMZJjFcODuyit267SGikgdxN768d0IM0TQSjJwPRd2tJSOsOindEgsUKk&X-Amz-Signature=b7143cc65b24f675cf96207ad15f38775e2ddc34d208eb069724e5c94122227e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGBDP6UF%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLLaaS8TVOtT77fufQenNjDY3agGaelE9FWJA8KAHkHAiBJIE8nC2Y6qMRqUmLTgH17EJab4fCC%2Fu1nMpFpXyn%2BZyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMeYbA8fPC9fd77PpoKtwDYUFC76b1NkYuKevrhHpmY7mrUN689ArB7UMuex6%2BCui9D1C2G7sPluPsolBiIdLtGEUPESR7O1ByUdriwWw%2BjIg8bU2okUSBmvUQHlaGzGf%2FmdIl8mNcjOUgZJWNY3M4ent2WVtmGJiU1xiBUySNxgyivd%2FfVLWQuFYvFP1Uy2VIpenOaMS%2F1XJCZiQ9FJdUS9jnjQnbWTvGGhKYhUe3bOW7iLmfJuJAUbOpTMQC63t%2BWeGHn1ZqDffdaCUqz%2FNDvOWXy3qD%2FK1DAEwS2BrJmDwVJYFx6WJsaZPs1s4dYpkbSdNliQWcZRtEQJ49h00GMTsmNqUb3CYTrd95OrzBjLO95cA3sXoZaGXZn3TvAjkR%2Bgiy%2FOMzPXZpjNBpoWsp5md57TiM961qxiBzrzpPQ0kDugVxN%2FKC59oU6Q5bzc9HOMD06kDLo7APz%2Fjkn95utQDiOGZUPH0I%2B0HCjJk%2BCQclqOb6xLdzR8sEclwXJDKtSzitu2a%2BS%2Fp85ryYBGL%2Blm0dnWBtKhEUSlEe%2BqDR%2BggoHXTyb%2F%2FoFZ0Q2LfFiGITv94uu1Jfs4M5p3R7Oihf4CpHsTj1iz389moNm6VeAQUqpoC3268E2ZxcYHu4RWcDxtdKNvFWtmVta%2BQwj92pyAY6pgH0H6zeMeL%2FptfcmgF6IDKSqslOPr8bE09j7KQQfY8DcUNqFHOwoxt8aabC%2FuO1nyGpmOJVtsryNq1HOHZtuVzsoT7dlT0hiuOOzALyY%2FOyXwjyyKlVQH24T%2BqmFLUUg0B41Dxtcuzb4r7qVK1vFvVak8skDmtTcPsm%2FPsgMZJjFcODuyit267SGikgdxN768d0IM0TQSjJwPRd2tJSOsOindEgsUKk&X-Amz-Signature=c5a9556a34671f16a39c042431cf51b9a7af2c12bc87370ec1be39c5f4be90c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JGO5AC4%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3fBNg39%2BxebtVqNX%2FPBIBr25RBTlQKA55vxNozzHuCQIgQ7YpYZE4bnAPY6V0zrojnszoi3DHIf1Nj7NGGGw2Z1Mq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKo640YHP%2FDwCDRQiyrcA4Su9OzvOevK4zqX69WxX28GxmlHsga9I%2FZb4iK3I0FsB7DREJcwfZX9wwjNA9OXF87U7QQHb1lLQtwWwSDIIR7jb22oJZZN0XYTR5AaUoGaN%2BPUgSFzNszXoMphzEo8fClsSyWi54cyuGp2X58bOFCAfN%2BcMfWhAynn5S%2Fd1CU5JCvU%2BrqUNfCMC8CrBXGHvTdqMdOnXbVSaN7dtJ7ii2q%2F2o5LTMSaO7N5Ky7kEK%2Bov58SSjYlaqryof%2FK3fJ8OFZ3oIy%2FS3tk%2FFlce8DzNeDHnpucAZL%2FzCgV8%2Fgo%2FIIILMaEbjQ5ri27b%2BqicNqJ49FzgRMGBI6eWBAQh%2FBPUd6m7qL%2BQKzY%2FnlDjSB7u1xmdz2Xi6i4yctsrJbgIsP%2F8AMcIKHaSzBcmSlpcOq8MQ20G1k44ry9K9VZ2oaWsKwjYyY6U%2FxQMN07m3P4ar5BJIvxf7FOYHsLFt2XX4O24SuqJ%2Fn5OJIQ729KTFSsb2yh2ljN9LQN3vD%2FfCODyfGmZ2VQ%2BdpdScT2P%2F7K99IE55YeYFbXrCza7tWZgSTIJwkJpqOeNGIs45nScUUBQazPZ0VLAi%2FC6R9nz3uxWeaZ9FTldZ58teJqQxTqoWac%2F3Cype17CEUt53%2BvFj%2BMMNjdqcgGOqUBoKnQUofcfelMgfCQ5%2Bfue8fM1pWqlBeP5cs7P%2BRKY0x5TLwjCWA9RvwLf59cjFcZffkG6aLIad%2FNLAdRQgwADaFMico2p6zpnF%2FGOS8p%2BkquNwSmtCFGajKKiFHllxN1woR0xt%2B6G6eJZLp7CpI7U0qeF2I3m87f8DzX1baGL7OKfOssw4oOSvrHtLUnLY2z4OGoifxejE4iXSMX77wmYzSFPV%2BC&X-Amz-Signature=1505618abb6ced192eaf8cf86d458d5d52d2e261a378fe8b2be88e34106dc341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TEQT7M%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpSg2AOzQivCd1HieUayYHmXCAWcXZCqCkpBDp2sMC2wIhALNloyKb%2B9SoqD3Bj8BlIYxM%2Ff71NfGQPOgn3FOrPN6nKv8DCH4QABoMNjM3NDIzMTgzODA1Igx%2B4omtTOHOzW2q8MYq3ANEpmAKk1RosdUIvHF1IUFBHabYmUAaJ6Gf86Q194op%2BLIDhR%2FWONLJfLHe%2BdLdKBpaMBKSy6uy%2BWsg3CqGuTl9j05SHUPoCjBv0Oabp1RSyjH8WhWESHPFEu4ZU2u4StT8%2BbKMNT2OW9u2FGJLxLf4B3UkhRNYPZ3BBWsvdwE2RnfkR1D0nKyPlYizBwIHs6v2M%2FxmONSkqvHjDiLpgf961SKf0QsHitI%2Fs2mSrPJffd4lJ3DUsjKoWAZ8bzgeTx6tiaSal%2FV7KqIf%2BJL41nGgLW8MkLWD7GY58wo54ESwAQK0CuBXbPHqqLA9LN47zKJEBc7mcviFreRoOzNxBLvh8GoPZqPtvV61M9qITDh5MBSHfafIr5HrpHdKxrzzhLSZBgweXnqPhEFprX4wqVha8349LgmMX5rWwULig1WYldmjxZLjgfYvctLhDECjgWz%2FlvCBinE%2Buq%2Bf%2BL6v6Xb5PGzakHCtpGktT9S2pEhOuH5GS35L2qfp3Ss26Q8z9xMYTrKEZvey2ePT10dfk1KJRMOjvkmym73MwS0eIluaKJoYSchPoUlbkO2kBKO7W9pPE04NieICiX8ZXJCL2Ify%2BdJaoMmcPxtMC6aycNBx1LR7caeYKzDPcd4NKzC43KnIBjqkAc1xrSPGwTMYVHcdx5522B%2B1CU%2BE8%2FgwAROCyxUxhfARuaE9r3gpo3SMGosKJQqqg7DVGKgnrYppanLmg%2BnnWPW4HpVHk7RewbxahbQe12QnPyaMbQhpgOjRK5dS9VYV8V47dFMtOu1wfP8wgbP2F4PxiB7wgOPWCeEFbdeGyR01nfpICbwd7nAkPqMbXu9Mw3fT38SDKabvxGiqiIy1w7aljQd6&X-Amz-Signature=3437ad1102542f64dc7c8e16fba295bb7141a0ef18c542c55927058d183de14c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TEQT7M%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpSg2AOzQivCd1HieUayYHmXCAWcXZCqCkpBDp2sMC2wIhALNloyKb%2B9SoqD3Bj8BlIYxM%2Ff71NfGQPOgn3FOrPN6nKv8DCH4QABoMNjM3NDIzMTgzODA1Igx%2B4omtTOHOzW2q8MYq3ANEpmAKk1RosdUIvHF1IUFBHabYmUAaJ6Gf86Q194op%2BLIDhR%2FWONLJfLHe%2BdLdKBpaMBKSy6uy%2BWsg3CqGuTl9j05SHUPoCjBv0Oabp1RSyjH8WhWESHPFEu4ZU2u4StT8%2BbKMNT2OW9u2FGJLxLf4B3UkhRNYPZ3BBWsvdwE2RnfkR1D0nKyPlYizBwIHs6v2M%2FxmONSkqvHjDiLpgf961SKf0QsHitI%2Fs2mSrPJffd4lJ3DUsjKoWAZ8bzgeTx6tiaSal%2FV7KqIf%2BJL41nGgLW8MkLWD7GY58wo54ESwAQK0CuBXbPHqqLA9LN47zKJEBc7mcviFreRoOzNxBLvh8GoPZqPtvV61M9qITDh5MBSHfafIr5HrpHdKxrzzhLSZBgweXnqPhEFprX4wqVha8349LgmMX5rWwULig1WYldmjxZLjgfYvctLhDECjgWz%2FlvCBinE%2Buq%2Bf%2BL6v6Xb5PGzakHCtpGktT9S2pEhOuH5GS35L2qfp3Ss26Q8z9xMYTrKEZvey2ePT10dfk1KJRMOjvkmym73MwS0eIluaKJoYSchPoUlbkO2kBKO7W9pPE04NieICiX8ZXJCL2Ify%2BdJaoMmcPxtMC6aycNBx1LR7caeYKzDPcd4NKzC43KnIBjqkAc1xrSPGwTMYVHcdx5522B%2B1CU%2BE8%2FgwAROCyxUxhfARuaE9r3gpo3SMGosKJQqqg7DVGKgnrYppanLmg%2BnnWPW4HpVHk7RewbxahbQe12QnPyaMbQhpgOjRK5dS9VYV8V47dFMtOu1wfP8wgbP2F4PxiB7wgOPWCeEFbdeGyR01nfpICbwd7nAkPqMbXu9Mw3fT38SDKabvxGiqiIy1w7aljQd6&X-Amz-Signature=aeb3915774ed8f689c7394247a911172b37e8182e291c9e46f0f945c6bb1eb32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TEQT7M%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpSg2AOzQivCd1HieUayYHmXCAWcXZCqCkpBDp2sMC2wIhALNloyKb%2B9SoqD3Bj8BlIYxM%2Ff71NfGQPOgn3FOrPN6nKv8DCH4QABoMNjM3NDIzMTgzODA1Igx%2B4omtTOHOzW2q8MYq3ANEpmAKk1RosdUIvHF1IUFBHabYmUAaJ6Gf86Q194op%2BLIDhR%2FWONLJfLHe%2BdLdKBpaMBKSy6uy%2BWsg3CqGuTl9j05SHUPoCjBv0Oabp1RSyjH8WhWESHPFEu4ZU2u4StT8%2BbKMNT2OW9u2FGJLxLf4B3UkhRNYPZ3BBWsvdwE2RnfkR1D0nKyPlYizBwIHs6v2M%2FxmONSkqvHjDiLpgf961SKf0QsHitI%2Fs2mSrPJffd4lJ3DUsjKoWAZ8bzgeTx6tiaSal%2FV7KqIf%2BJL41nGgLW8MkLWD7GY58wo54ESwAQK0CuBXbPHqqLA9LN47zKJEBc7mcviFreRoOzNxBLvh8GoPZqPtvV61M9qITDh5MBSHfafIr5HrpHdKxrzzhLSZBgweXnqPhEFprX4wqVha8349LgmMX5rWwULig1WYldmjxZLjgfYvctLhDECjgWz%2FlvCBinE%2Buq%2Bf%2BL6v6Xb5PGzakHCtpGktT9S2pEhOuH5GS35L2qfp3Ss26Q8z9xMYTrKEZvey2ePT10dfk1KJRMOjvkmym73MwS0eIluaKJoYSchPoUlbkO2kBKO7W9pPE04NieICiX8ZXJCL2Ify%2BdJaoMmcPxtMC6aycNBx1LR7caeYKzDPcd4NKzC43KnIBjqkAc1xrSPGwTMYVHcdx5522B%2B1CU%2BE8%2FgwAROCyxUxhfARuaE9r3gpo3SMGosKJQqqg7DVGKgnrYppanLmg%2BnnWPW4HpVHk7RewbxahbQe12QnPyaMbQhpgOjRK5dS9VYV8V47dFMtOu1wfP8wgbP2F4PxiB7wgOPWCeEFbdeGyR01nfpICbwd7nAkPqMbXu9Mw3fT38SDKabvxGiqiIy1w7aljQd6&X-Amz-Signature=a9ff1d54905f80ca818e28dd96c17aefc2fd42eff6277d0acfb6049063543daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TEQT7M%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpSg2AOzQivCd1HieUayYHmXCAWcXZCqCkpBDp2sMC2wIhALNloyKb%2B9SoqD3Bj8BlIYxM%2Ff71NfGQPOgn3FOrPN6nKv8DCH4QABoMNjM3NDIzMTgzODA1Igx%2B4omtTOHOzW2q8MYq3ANEpmAKk1RosdUIvHF1IUFBHabYmUAaJ6Gf86Q194op%2BLIDhR%2FWONLJfLHe%2BdLdKBpaMBKSy6uy%2BWsg3CqGuTl9j05SHUPoCjBv0Oabp1RSyjH8WhWESHPFEu4ZU2u4StT8%2BbKMNT2OW9u2FGJLxLf4B3UkhRNYPZ3BBWsvdwE2RnfkR1D0nKyPlYizBwIHs6v2M%2FxmONSkqvHjDiLpgf961SKf0QsHitI%2Fs2mSrPJffd4lJ3DUsjKoWAZ8bzgeTx6tiaSal%2FV7KqIf%2BJL41nGgLW8MkLWD7GY58wo54ESwAQK0CuBXbPHqqLA9LN47zKJEBc7mcviFreRoOzNxBLvh8GoPZqPtvV61M9qITDh5MBSHfafIr5HrpHdKxrzzhLSZBgweXnqPhEFprX4wqVha8349LgmMX5rWwULig1WYldmjxZLjgfYvctLhDECjgWz%2FlvCBinE%2Buq%2Bf%2BL6v6Xb5PGzakHCtpGktT9S2pEhOuH5GS35L2qfp3Ss26Q8z9xMYTrKEZvey2ePT10dfk1KJRMOjvkmym73MwS0eIluaKJoYSchPoUlbkO2kBKO7W9pPE04NieICiX8ZXJCL2Ify%2BdJaoMmcPxtMC6aycNBx1LR7caeYKzDPcd4NKzC43KnIBjqkAc1xrSPGwTMYVHcdx5522B%2B1CU%2BE8%2FgwAROCyxUxhfARuaE9r3gpo3SMGosKJQqqg7DVGKgnrYppanLmg%2BnnWPW4HpVHk7RewbxahbQe12QnPyaMbQhpgOjRK5dS9VYV8V47dFMtOu1wfP8wgbP2F4PxiB7wgOPWCeEFbdeGyR01nfpICbwd7nAkPqMbXu9Mw3fT38SDKabvxGiqiIy1w7aljQd6&X-Amz-Signature=990be070a0896dd26be5072847fcbf4db3fc34b48ad208faed10aaa285b043b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TEQT7M%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpSg2AOzQivCd1HieUayYHmXCAWcXZCqCkpBDp2sMC2wIhALNloyKb%2B9SoqD3Bj8BlIYxM%2Ff71NfGQPOgn3FOrPN6nKv8DCH4QABoMNjM3NDIzMTgzODA1Igx%2B4omtTOHOzW2q8MYq3ANEpmAKk1RosdUIvHF1IUFBHabYmUAaJ6Gf86Q194op%2BLIDhR%2FWONLJfLHe%2BdLdKBpaMBKSy6uy%2BWsg3CqGuTl9j05SHUPoCjBv0Oabp1RSyjH8WhWESHPFEu4ZU2u4StT8%2BbKMNT2OW9u2FGJLxLf4B3UkhRNYPZ3BBWsvdwE2RnfkR1D0nKyPlYizBwIHs6v2M%2FxmONSkqvHjDiLpgf961SKf0QsHitI%2Fs2mSrPJffd4lJ3DUsjKoWAZ8bzgeTx6tiaSal%2FV7KqIf%2BJL41nGgLW8MkLWD7GY58wo54ESwAQK0CuBXbPHqqLA9LN47zKJEBc7mcviFreRoOzNxBLvh8GoPZqPtvV61M9qITDh5MBSHfafIr5HrpHdKxrzzhLSZBgweXnqPhEFprX4wqVha8349LgmMX5rWwULig1WYldmjxZLjgfYvctLhDECjgWz%2FlvCBinE%2Buq%2Bf%2BL6v6Xb5PGzakHCtpGktT9S2pEhOuH5GS35L2qfp3Ss26Q8z9xMYTrKEZvey2ePT10dfk1KJRMOjvkmym73MwS0eIluaKJoYSchPoUlbkO2kBKO7W9pPE04NieICiX8ZXJCL2Ify%2BdJaoMmcPxtMC6aycNBx1LR7caeYKzDPcd4NKzC43KnIBjqkAc1xrSPGwTMYVHcdx5522B%2B1CU%2BE8%2FgwAROCyxUxhfARuaE9r3gpo3SMGosKJQqqg7DVGKgnrYppanLmg%2BnnWPW4HpVHk7RewbxahbQe12QnPyaMbQhpgOjRK5dS9VYV8V47dFMtOu1wfP8wgbP2F4PxiB7wgOPWCeEFbdeGyR01nfpICbwd7nAkPqMbXu9Mw3fT38SDKabvxGiqiIy1w7aljQd6&X-Amz-Signature=7f19d782ec6291c686ea3e225ff79d7cf51e43576cf9f60a821ca84986eec669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TEQT7M%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpSg2AOzQivCd1HieUayYHmXCAWcXZCqCkpBDp2sMC2wIhALNloyKb%2B9SoqD3Bj8BlIYxM%2Ff71NfGQPOgn3FOrPN6nKv8DCH4QABoMNjM3NDIzMTgzODA1Igx%2B4omtTOHOzW2q8MYq3ANEpmAKk1RosdUIvHF1IUFBHabYmUAaJ6Gf86Q194op%2BLIDhR%2FWONLJfLHe%2BdLdKBpaMBKSy6uy%2BWsg3CqGuTl9j05SHUPoCjBv0Oabp1RSyjH8WhWESHPFEu4ZU2u4StT8%2BbKMNT2OW9u2FGJLxLf4B3UkhRNYPZ3BBWsvdwE2RnfkR1D0nKyPlYizBwIHs6v2M%2FxmONSkqvHjDiLpgf961SKf0QsHitI%2Fs2mSrPJffd4lJ3DUsjKoWAZ8bzgeTx6tiaSal%2FV7KqIf%2BJL41nGgLW8MkLWD7GY58wo54ESwAQK0CuBXbPHqqLA9LN47zKJEBc7mcviFreRoOzNxBLvh8GoPZqPtvV61M9qITDh5MBSHfafIr5HrpHdKxrzzhLSZBgweXnqPhEFprX4wqVha8349LgmMX5rWwULig1WYldmjxZLjgfYvctLhDECjgWz%2FlvCBinE%2Buq%2Bf%2BL6v6Xb5PGzakHCtpGktT9S2pEhOuH5GS35L2qfp3Ss26Q8z9xMYTrKEZvey2ePT10dfk1KJRMOjvkmym73MwS0eIluaKJoYSchPoUlbkO2kBKO7W9pPE04NieICiX8ZXJCL2Ify%2BdJaoMmcPxtMC6aycNBx1LR7caeYKzDPcd4NKzC43KnIBjqkAc1xrSPGwTMYVHcdx5522B%2B1CU%2BE8%2FgwAROCyxUxhfARuaE9r3gpo3SMGosKJQqqg7DVGKgnrYppanLmg%2BnnWPW4HpVHk7RewbxahbQe12QnPyaMbQhpgOjRK5dS9VYV8V47dFMtOu1wfP8wgbP2F4PxiB7wgOPWCeEFbdeGyR01nfpICbwd7nAkPqMbXu9Mw3fT38SDKabvxGiqiIy1w7aljQd6&X-Amz-Signature=f1c3d67f82c1ad30b2b773e6a98b3bbc30426a4591c74c118ba57be3c0ea8208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TEQT7M%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpSg2AOzQivCd1HieUayYHmXCAWcXZCqCkpBDp2sMC2wIhALNloyKb%2B9SoqD3Bj8BlIYxM%2Ff71NfGQPOgn3FOrPN6nKv8DCH4QABoMNjM3NDIzMTgzODA1Igx%2B4omtTOHOzW2q8MYq3ANEpmAKk1RosdUIvHF1IUFBHabYmUAaJ6Gf86Q194op%2BLIDhR%2FWONLJfLHe%2BdLdKBpaMBKSy6uy%2BWsg3CqGuTl9j05SHUPoCjBv0Oabp1RSyjH8WhWESHPFEu4ZU2u4StT8%2BbKMNT2OW9u2FGJLxLf4B3UkhRNYPZ3BBWsvdwE2RnfkR1D0nKyPlYizBwIHs6v2M%2FxmONSkqvHjDiLpgf961SKf0QsHitI%2Fs2mSrPJffd4lJ3DUsjKoWAZ8bzgeTx6tiaSal%2FV7KqIf%2BJL41nGgLW8MkLWD7GY58wo54ESwAQK0CuBXbPHqqLA9LN47zKJEBc7mcviFreRoOzNxBLvh8GoPZqPtvV61M9qITDh5MBSHfafIr5HrpHdKxrzzhLSZBgweXnqPhEFprX4wqVha8349LgmMX5rWwULig1WYldmjxZLjgfYvctLhDECjgWz%2FlvCBinE%2Buq%2Bf%2BL6v6Xb5PGzakHCtpGktT9S2pEhOuH5GS35L2qfp3Ss26Q8z9xMYTrKEZvey2ePT10dfk1KJRMOjvkmym73MwS0eIluaKJoYSchPoUlbkO2kBKO7W9pPE04NieICiX8ZXJCL2Ify%2BdJaoMmcPxtMC6aycNBx1LR7caeYKzDPcd4NKzC43KnIBjqkAc1xrSPGwTMYVHcdx5522B%2B1CU%2BE8%2FgwAROCyxUxhfARuaE9r3gpo3SMGosKJQqqg7DVGKgnrYppanLmg%2BnnWPW4HpVHk7RewbxahbQe12QnPyaMbQhpgOjRK5dS9VYV8V47dFMtOu1wfP8wgbP2F4PxiB7wgOPWCeEFbdeGyR01nfpICbwd7nAkPqMbXu9Mw3fT38SDKabvxGiqiIy1w7aljQd6&X-Amz-Signature=0fa071322b829a93fa20c1e0c6d25b7264cdd4d8cff0aa19080562a719203216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TEQT7M%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpSg2AOzQivCd1HieUayYHmXCAWcXZCqCkpBDp2sMC2wIhALNloyKb%2B9SoqD3Bj8BlIYxM%2Ff71NfGQPOgn3FOrPN6nKv8DCH4QABoMNjM3NDIzMTgzODA1Igx%2B4omtTOHOzW2q8MYq3ANEpmAKk1RosdUIvHF1IUFBHabYmUAaJ6Gf86Q194op%2BLIDhR%2FWONLJfLHe%2BdLdKBpaMBKSy6uy%2BWsg3CqGuTl9j05SHUPoCjBv0Oabp1RSyjH8WhWESHPFEu4ZU2u4StT8%2BbKMNT2OW9u2FGJLxLf4B3UkhRNYPZ3BBWsvdwE2RnfkR1D0nKyPlYizBwIHs6v2M%2FxmONSkqvHjDiLpgf961SKf0QsHitI%2Fs2mSrPJffd4lJ3DUsjKoWAZ8bzgeTx6tiaSal%2FV7KqIf%2BJL41nGgLW8MkLWD7GY58wo54ESwAQK0CuBXbPHqqLA9LN47zKJEBc7mcviFreRoOzNxBLvh8GoPZqPtvV61M9qITDh5MBSHfafIr5HrpHdKxrzzhLSZBgweXnqPhEFprX4wqVha8349LgmMX5rWwULig1WYldmjxZLjgfYvctLhDECjgWz%2FlvCBinE%2Buq%2Bf%2BL6v6Xb5PGzakHCtpGktT9S2pEhOuH5GS35L2qfp3Ss26Q8z9xMYTrKEZvey2ePT10dfk1KJRMOjvkmym73MwS0eIluaKJoYSchPoUlbkO2kBKO7W9pPE04NieICiX8ZXJCL2Ify%2BdJaoMmcPxtMC6aycNBx1LR7caeYKzDPcd4NKzC43KnIBjqkAc1xrSPGwTMYVHcdx5522B%2B1CU%2BE8%2FgwAROCyxUxhfARuaE9r3gpo3SMGosKJQqqg7DVGKgnrYppanLmg%2BnnWPW4HpVHk7RewbxahbQe12QnPyaMbQhpgOjRK5dS9VYV8V47dFMtOu1wfP8wgbP2F4PxiB7wgOPWCeEFbdeGyR01nfpICbwd7nAkPqMbXu9Mw3fT38SDKabvxGiqiIy1w7aljQd6&X-Amz-Signature=0925c3e45c9794bf2f8b68b9a52384001c1540dcbbd19349ce172afcc040721f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TEQT7M%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpSg2AOzQivCd1HieUayYHmXCAWcXZCqCkpBDp2sMC2wIhALNloyKb%2B9SoqD3Bj8BlIYxM%2Ff71NfGQPOgn3FOrPN6nKv8DCH4QABoMNjM3NDIzMTgzODA1Igx%2B4omtTOHOzW2q8MYq3ANEpmAKk1RosdUIvHF1IUFBHabYmUAaJ6Gf86Q194op%2BLIDhR%2FWONLJfLHe%2BdLdKBpaMBKSy6uy%2BWsg3CqGuTl9j05SHUPoCjBv0Oabp1RSyjH8WhWESHPFEu4ZU2u4StT8%2BbKMNT2OW9u2FGJLxLf4B3UkhRNYPZ3BBWsvdwE2RnfkR1D0nKyPlYizBwIHs6v2M%2FxmONSkqvHjDiLpgf961SKf0QsHitI%2Fs2mSrPJffd4lJ3DUsjKoWAZ8bzgeTx6tiaSal%2FV7KqIf%2BJL41nGgLW8MkLWD7GY58wo54ESwAQK0CuBXbPHqqLA9LN47zKJEBc7mcviFreRoOzNxBLvh8GoPZqPtvV61M9qITDh5MBSHfafIr5HrpHdKxrzzhLSZBgweXnqPhEFprX4wqVha8349LgmMX5rWwULig1WYldmjxZLjgfYvctLhDECjgWz%2FlvCBinE%2Buq%2Bf%2BL6v6Xb5PGzakHCtpGktT9S2pEhOuH5GS35L2qfp3Ss26Q8z9xMYTrKEZvey2ePT10dfk1KJRMOjvkmym73MwS0eIluaKJoYSchPoUlbkO2kBKO7W9pPE04NieICiX8ZXJCL2Ify%2BdJaoMmcPxtMC6aycNBx1LR7caeYKzDPcd4NKzC43KnIBjqkAc1xrSPGwTMYVHcdx5522B%2B1CU%2BE8%2FgwAROCyxUxhfARuaE9r3gpo3SMGosKJQqqg7DVGKgnrYppanLmg%2BnnWPW4HpVHk7RewbxahbQe12QnPyaMbQhpgOjRK5dS9VYV8V47dFMtOu1wfP8wgbP2F4PxiB7wgOPWCeEFbdeGyR01nfpICbwd7nAkPqMbXu9Mw3fT38SDKabvxGiqiIy1w7aljQd6&X-Amz-Signature=db1304b3dcf30bfebbe90d63e7df5ca6a132829c23139788ecae0ba2b8f13291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
