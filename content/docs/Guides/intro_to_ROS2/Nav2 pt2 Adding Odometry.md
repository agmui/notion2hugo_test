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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CEOICO%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCUvoVwWs1dUPvyEh9Ze3t2nslvMAGvALi0SBPXIYZyZgIgdxOwZk0UC77rYoJFzkpDrjKcv3Rn7LGtSODvTwW4MS4qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYHK971noH2dTxlRircA21wtUfvSjRS3x9WgJJLKze2UgMbdq18TOqKkcov4t7E3SVKkffO71RyI02b2Nb1MH4bkDJuJjiCaX3xwGQTWvz9ria4jNlK%2FrObgmaiM41slg24upGVRFeRk85xBm0qybJd3XbJkvtK1kElnaHqvnt0DZYIvjvjEGcojOY%2FqUBCfkNthVJhq%2BN1CBEimd05d%2BZsNEDcXyz93GFTrg1st2tNydYyxBgB5m8ZaAUrEFN7TSpnQ2Qf7ccH2dm38Oyl7F%2BLGbUiEYDCr1XoV5o4l0Lws%2BLC%2FY7Xdn%2FP9SEQXPKzWNwwb0MIJuyYJBHjqnf88DGVxZP%2FG0kayrOntHYfhhe%2BONeVu8%2FSImgLMOl5zQM2ShataPKjiX%2Fwo9ra1ReKXPDA3U7D%2B6viXPIbW9yduyste5TYxzK5AzHUcs1zNz4OLgYu9DkwvbgG4I2xYlilAbNvv5vwnfNeN%2B84%2Fk1fD7IHxMgsx0yYw6gfFWZoIb9mgYd4d9raWVZNQI3s7%2BXgaGTK%2F4nM8z%2BA3KiIZCPaIGslF507WzL4oC1L%2BFXGjKkGMDTFkbLT6K8oBmT%2BTPJp%2BekmWAJYkI2Y3mKpaunCl5eTPvtAucTc80oNbeGuNwGUso%2FXRL6rj8FLW%2BskMKq%2F4cYGOqUB0GTgaoc9NtrkDiHdZ6vbmxMh1Ab0rnBCzhzCh%2FnNQMBbwBbxO%2B1rKTS8yRC21d61Rs1g5Z4M94Ocz9Xj0HY%2BTylXfVRjNS9Gz3WfF3%2BXZwDHO8C5l2cEYedvrN6Les8Z0jQAvzgSX%2FfGQgxg2JDEmjrebZZem2WDScBqGc91A9OeclrLvO5pmrx8myESK0uPwx1kD7PR9VzJPSivGEiY75AVXNue&X-Amz-Signature=c7ba15aa77c0e7f8b5541ce22106eb38ca9524b1c1e5786f987806951242eaae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CEOICO%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCUvoVwWs1dUPvyEh9Ze3t2nslvMAGvALi0SBPXIYZyZgIgdxOwZk0UC77rYoJFzkpDrjKcv3Rn7LGtSODvTwW4MS4qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYHK971noH2dTxlRircA21wtUfvSjRS3x9WgJJLKze2UgMbdq18TOqKkcov4t7E3SVKkffO71RyI02b2Nb1MH4bkDJuJjiCaX3xwGQTWvz9ria4jNlK%2FrObgmaiM41slg24upGVRFeRk85xBm0qybJd3XbJkvtK1kElnaHqvnt0DZYIvjvjEGcojOY%2FqUBCfkNthVJhq%2BN1CBEimd05d%2BZsNEDcXyz93GFTrg1st2tNydYyxBgB5m8ZaAUrEFN7TSpnQ2Qf7ccH2dm38Oyl7F%2BLGbUiEYDCr1XoV5o4l0Lws%2BLC%2FY7Xdn%2FP9SEQXPKzWNwwb0MIJuyYJBHjqnf88DGVxZP%2FG0kayrOntHYfhhe%2BONeVu8%2FSImgLMOl5zQM2ShataPKjiX%2Fwo9ra1ReKXPDA3U7D%2B6viXPIbW9yduyste5TYxzK5AzHUcs1zNz4OLgYu9DkwvbgG4I2xYlilAbNvv5vwnfNeN%2B84%2Fk1fD7IHxMgsx0yYw6gfFWZoIb9mgYd4d9raWVZNQI3s7%2BXgaGTK%2F4nM8z%2BA3KiIZCPaIGslF507WzL4oC1L%2BFXGjKkGMDTFkbLT6K8oBmT%2BTPJp%2BekmWAJYkI2Y3mKpaunCl5eTPvtAucTc80oNbeGuNwGUso%2FXRL6rj8FLW%2BskMKq%2F4cYGOqUB0GTgaoc9NtrkDiHdZ6vbmxMh1Ab0rnBCzhzCh%2FnNQMBbwBbxO%2B1rKTS8yRC21d61Rs1g5Z4M94Ocz9Xj0HY%2BTylXfVRjNS9Gz3WfF3%2BXZwDHO8C5l2cEYedvrN6Les8Z0jQAvzgSX%2FfGQgxg2JDEmjrebZZem2WDScBqGc91A9OeclrLvO5pmrx8myESK0uPwx1kD7PR9VzJPSivGEiY75AVXNue&X-Amz-Signature=49cc17416c55fbbfac9e37e7bbd73901dd6e55c0c64e8ec14e9daf8eea304e63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CEOICO%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCUvoVwWs1dUPvyEh9Ze3t2nslvMAGvALi0SBPXIYZyZgIgdxOwZk0UC77rYoJFzkpDrjKcv3Rn7LGtSODvTwW4MS4qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYHK971noH2dTxlRircA21wtUfvSjRS3x9WgJJLKze2UgMbdq18TOqKkcov4t7E3SVKkffO71RyI02b2Nb1MH4bkDJuJjiCaX3xwGQTWvz9ria4jNlK%2FrObgmaiM41slg24upGVRFeRk85xBm0qybJd3XbJkvtK1kElnaHqvnt0DZYIvjvjEGcojOY%2FqUBCfkNthVJhq%2BN1CBEimd05d%2BZsNEDcXyz93GFTrg1st2tNydYyxBgB5m8ZaAUrEFN7TSpnQ2Qf7ccH2dm38Oyl7F%2BLGbUiEYDCr1XoV5o4l0Lws%2BLC%2FY7Xdn%2FP9SEQXPKzWNwwb0MIJuyYJBHjqnf88DGVxZP%2FG0kayrOntHYfhhe%2BONeVu8%2FSImgLMOl5zQM2ShataPKjiX%2Fwo9ra1ReKXPDA3U7D%2B6viXPIbW9yduyste5TYxzK5AzHUcs1zNz4OLgYu9DkwvbgG4I2xYlilAbNvv5vwnfNeN%2B84%2Fk1fD7IHxMgsx0yYw6gfFWZoIb9mgYd4d9raWVZNQI3s7%2BXgaGTK%2F4nM8z%2BA3KiIZCPaIGslF507WzL4oC1L%2BFXGjKkGMDTFkbLT6K8oBmT%2BTPJp%2BekmWAJYkI2Y3mKpaunCl5eTPvtAucTc80oNbeGuNwGUso%2FXRL6rj8FLW%2BskMKq%2F4cYGOqUB0GTgaoc9NtrkDiHdZ6vbmxMh1Ab0rnBCzhzCh%2FnNQMBbwBbxO%2B1rKTS8yRC21d61Rs1g5Z4M94Ocz9Xj0HY%2BTylXfVRjNS9Gz3WfF3%2BXZwDHO8C5l2cEYedvrN6Les8Z0jQAvzgSX%2FfGQgxg2JDEmjrebZZem2WDScBqGc91A9OeclrLvO5pmrx8myESK0uPwx1kD7PR9VzJPSivGEiY75AVXNue&X-Amz-Signature=229d45e2d594460244c7f48d8d647b744cf8c9e42adc7f8c9c157e59fba5dd89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CEOICO%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCUvoVwWs1dUPvyEh9Ze3t2nslvMAGvALi0SBPXIYZyZgIgdxOwZk0UC77rYoJFzkpDrjKcv3Rn7LGtSODvTwW4MS4qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYHK971noH2dTxlRircA21wtUfvSjRS3x9WgJJLKze2UgMbdq18TOqKkcov4t7E3SVKkffO71RyI02b2Nb1MH4bkDJuJjiCaX3xwGQTWvz9ria4jNlK%2FrObgmaiM41slg24upGVRFeRk85xBm0qybJd3XbJkvtK1kElnaHqvnt0DZYIvjvjEGcojOY%2FqUBCfkNthVJhq%2BN1CBEimd05d%2BZsNEDcXyz93GFTrg1st2tNydYyxBgB5m8ZaAUrEFN7TSpnQ2Qf7ccH2dm38Oyl7F%2BLGbUiEYDCr1XoV5o4l0Lws%2BLC%2FY7Xdn%2FP9SEQXPKzWNwwb0MIJuyYJBHjqnf88DGVxZP%2FG0kayrOntHYfhhe%2BONeVu8%2FSImgLMOl5zQM2ShataPKjiX%2Fwo9ra1ReKXPDA3U7D%2B6viXPIbW9yduyste5TYxzK5AzHUcs1zNz4OLgYu9DkwvbgG4I2xYlilAbNvv5vwnfNeN%2B84%2Fk1fD7IHxMgsx0yYw6gfFWZoIb9mgYd4d9raWVZNQI3s7%2BXgaGTK%2F4nM8z%2BA3KiIZCPaIGslF507WzL4oC1L%2BFXGjKkGMDTFkbLT6K8oBmT%2BTPJp%2BekmWAJYkI2Y3mKpaunCl5eTPvtAucTc80oNbeGuNwGUso%2FXRL6rj8FLW%2BskMKq%2F4cYGOqUB0GTgaoc9NtrkDiHdZ6vbmxMh1Ab0rnBCzhzCh%2FnNQMBbwBbxO%2B1rKTS8yRC21d61Rs1g5Z4M94Ocz9Xj0HY%2BTylXfVRjNS9Gz3WfF3%2BXZwDHO8C5l2cEYedvrN6Les8Z0jQAvzgSX%2FfGQgxg2JDEmjrebZZem2WDScBqGc91A9OeclrLvO5pmrx8myESK0uPwx1kD7PR9VzJPSivGEiY75AVXNue&X-Amz-Signature=66268c6ce84739977fd57728378e6d14308098e8e8547759acb4111a0fe93508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CEOICO%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCUvoVwWs1dUPvyEh9Ze3t2nslvMAGvALi0SBPXIYZyZgIgdxOwZk0UC77rYoJFzkpDrjKcv3Rn7LGtSODvTwW4MS4qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYHK971noH2dTxlRircA21wtUfvSjRS3x9WgJJLKze2UgMbdq18TOqKkcov4t7E3SVKkffO71RyI02b2Nb1MH4bkDJuJjiCaX3xwGQTWvz9ria4jNlK%2FrObgmaiM41slg24upGVRFeRk85xBm0qybJd3XbJkvtK1kElnaHqvnt0DZYIvjvjEGcojOY%2FqUBCfkNthVJhq%2BN1CBEimd05d%2BZsNEDcXyz93GFTrg1st2tNydYyxBgB5m8ZaAUrEFN7TSpnQ2Qf7ccH2dm38Oyl7F%2BLGbUiEYDCr1XoV5o4l0Lws%2BLC%2FY7Xdn%2FP9SEQXPKzWNwwb0MIJuyYJBHjqnf88DGVxZP%2FG0kayrOntHYfhhe%2BONeVu8%2FSImgLMOl5zQM2ShataPKjiX%2Fwo9ra1ReKXPDA3U7D%2B6viXPIbW9yduyste5TYxzK5AzHUcs1zNz4OLgYu9DkwvbgG4I2xYlilAbNvv5vwnfNeN%2B84%2Fk1fD7IHxMgsx0yYw6gfFWZoIb9mgYd4d9raWVZNQI3s7%2BXgaGTK%2F4nM8z%2BA3KiIZCPaIGslF507WzL4oC1L%2BFXGjKkGMDTFkbLT6K8oBmT%2BTPJp%2BekmWAJYkI2Y3mKpaunCl5eTPvtAucTc80oNbeGuNwGUso%2FXRL6rj8FLW%2BskMKq%2F4cYGOqUB0GTgaoc9NtrkDiHdZ6vbmxMh1Ab0rnBCzhzCh%2FnNQMBbwBbxO%2B1rKTS8yRC21d61Rs1g5Z4M94Ocz9Xj0HY%2BTylXfVRjNS9Gz3WfF3%2BXZwDHO8C5l2cEYedvrN6Les8Z0jQAvzgSX%2FfGQgxg2JDEmjrebZZem2WDScBqGc91A9OeclrLvO5pmrx8myESK0uPwx1kD7PR9VzJPSivGEiY75AVXNue&X-Amz-Signature=6bd4c711371d0ca52c2e03a19c3eea1d742b1e38b5e7d398a1cb28a6b995935c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CEOICO%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCUvoVwWs1dUPvyEh9Ze3t2nslvMAGvALi0SBPXIYZyZgIgdxOwZk0UC77rYoJFzkpDrjKcv3Rn7LGtSODvTwW4MS4qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYHK971noH2dTxlRircA21wtUfvSjRS3x9WgJJLKze2UgMbdq18TOqKkcov4t7E3SVKkffO71RyI02b2Nb1MH4bkDJuJjiCaX3xwGQTWvz9ria4jNlK%2FrObgmaiM41slg24upGVRFeRk85xBm0qybJd3XbJkvtK1kElnaHqvnt0DZYIvjvjEGcojOY%2FqUBCfkNthVJhq%2BN1CBEimd05d%2BZsNEDcXyz93GFTrg1st2tNydYyxBgB5m8ZaAUrEFN7TSpnQ2Qf7ccH2dm38Oyl7F%2BLGbUiEYDCr1XoV5o4l0Lws%2BLC%2FY7Xdn%2FP9SEQXPKzWNwwb0MIJuyYJBHjqnf88DGVxZP%2FG0kayrOntHYfhhe%2BONeVu8%2FSImgLMOl5zQM2ShataPKjiX%2Fwo9ra1ReKXPDA3U7D%2B6viXPIbW9yduyste5TYxzK5AzHUcs1zNz4OLgYu9DkwvbgG4I2xYlilAbNvv5vwnfNeN%2B84%2Fk1fD7IHxMgsx0yYw6gfFWZoIb9mgYd4d9raWVZNQI3s7%2BXgaGTK%2F4nM8z%2BA3KiIZCPaIGslF507WzL4oC1L%2BFXGjKkGMDTFkbLT6K8oBmT%2BTPJp%2BekmWAJYkI2Y3mKpaunCl5eTPvtAucTc80oNbeGuNwGUso%2FXRL6rj8FLW%2BskMKq%2F4cYGOqUB0GTgaoc9NtrkDiHdZ6vbmxMh1Ab0rnBCzhzCh%2FnNQMBbwBbxO%2B1rKTS8yRC21d61Rs1g5Z4M94Ocz9Xj0HY%2BTylXfVRjNS9Gz3WfF3%2BXZwDHO8C5l2cEYedvrN6Les8Z0jQAvzgSX%2FfGQgxg2JDEmjrebZZem2WDScBqGc91A9OeclrLvO5pmrx8myESK0uPwx1kD7PR9VzJPSivGEiY75AVXNue&X-Amz-Signature=4e766160263304506719ddafe68ccd41c3d5b99e9f3999850ef8bdbfbbf00dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CEOICO%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCUvoVwWs1dUPvyEh9Ze3t2nslvMAGvALi0SBPXIYZyZgIgdxOwZk0UC77rYoJFzkpDrjKcv3Rn7LGtSODvTwW4MS4qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYHK971noH2dTxlRircA21wtUfvSjRS3x9WgJJLKze2UgMbdq18TOqKkcov4t7E3SVKkffO71RyI02b2Nb1MH4bkDJuJjiCaX3xwGQTWvz9ria4jNlK%2FrObgmaiM41slg24upGVRFeRk85xBm0qybJd3XbJkvtK1kElnaHqvnt0DZYIvjvjEGcojOY%2FqUBCfkNthVJhq%2BN1CBEimd05d%2BZsNEDcXyz93GFTrg1st2tNydYyxBgB5m8ZaAUrEFN7TSpnQ2Qf7ccH2dm38Oyl7F%2BLGbUiEYDCr1XoV5o4l0Lws%2BLC%2FY7Xdn%2FP9SEQXPKzWNwwb0MIJuyYJBHjqnf88DGVxZP%2FG0kayrOntHYfhhe%2BONeVu8%2FSImgLMOl5zQM2ShataPKjiX%2Fwo9ra1ReKXPDA3U7D%2B6viXPIbW9yduyste5TYxzK5AzHUcs1zNz4OLgYu9DkwvbgG4I2xYlilAbNvv5vwnfNeN%2B84%2Fk1fD7IHxMgsx0yYw6gfFWZoIb9mgYd4d9raWVZNQI3s7%2BXgaGTK%2F4nM8z%2BA3KiIZCPaIGslF507WzL4oC1L%2BFXGjKkGMDTFkbLT6K8oBmT%2BTPJp%2BekmWAJYkI2Y3mKpaunCl5eTPvtAucTc80oNbeGuNwGUso%2FXRL6rj8FLW%2BskMKq%2F4cYGOqUB0GTgaoc9NtrkDiHdZ6vbmxMh1Ab0rnBCzhzCh%2FnNQMBbwBbxO%2B1rKTS8yRC21d61Rs1g5Z4M94Ocz9Xj0HY%2BTylXfVRjNS9Gz3WfF3%2BXZwDHO8C5l2cEYedvrN6Les8Z0jQAvzgSX%2FfGQgxg2JDEmjrebZZem2WDScBqGc91A9OeclrLvO5pmrx8myESK0uPwx1kD7PR9VzJPSivGEiY75AVXNue&X-Amz-Signature=dad85fe31926ac57767b9de21edcbe69e7505e5e073f2cf045bcd1e6f3aedc05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CEOICO%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCUvoVwWs1dUPvyEh9Ze3t2nslvMAGvALi0SBPXIYZyZgIgdxOwZk0UC77rYoJFzkpDrjKcv3Rn7LGtSODvTwW4MS4qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYHK971noH2dTxlRircA21wtUfvSjRS3x9WgJJLKze2UgMbdq18TOqKkcov4t7E3SVKkffO71RyI02b2Nb1MH4bkDJuJjiCaX3xwGQTWvz9ria4jNlK%2FrObgmaiM41slg24upGVRFeRk85xBm0qybJd3XbJkvtK1kElnaHqvnt0DZYIvjvjEGcojOY%2FqUBCfkNthVJhq%2BN1CBEimd05d%2BZsNEDcXyz93GFTrg1st2tNydYyxBgB5m8ZaAUrEFN7TSpnQ2Qf7ccH2dm38Oyl7F%2BLGbUiEYDCr1XoV5o4l0Lws%2BLC%2FY7Xdn%2FP9SEQXPKzWNwwb0MIJuyYJBHjqnf88DGVxZP%2FG0kayrOntHYfhhe%2BONeVu8%2FSImgLMOl5zQM2ShataPKjiX%2Fwo9ra1ReKXPDA3U7D%2B6viXPIbW9yduyste5TYxzK5AzHUcs1zNz4OLgYu9DkwvbgG4I2xYlilAbNvv5vwnfNeN%2B84%2Fk1fD7IHxMgsx0yYw6gfFWZoIb9mgYd4d9raWVZNQI3s7%2BXgaGTK%2F4nM8z%2BA3KiIZCPaIGslF507WzL4oC1L%2BFXGjKkGMDTFkbLT6K8oBmT%2BTPJp%2BekmWAJYkI2Y3mKpaunCl5eTPvtAucTc80oNbeGuNwGUso%2FXRL6rj8FLW%2BskMKq%2F4cYGOqUB0GTgaoc9NtrkDiHdZ6vbmxMh1Ab0rnBCzhzCh%2FnNQMBbwBbxO%2B1rKTS8yRC21d61Rs1g5Z4M94Ocz9Xj0HY%2BTylXfVRjNS9Gz3WfF3%2BXZwDHO8C5l2cEYedvrN6Les8Z0jQAvzgSX%2FfGQgxg2JDEmjrebZZem2WDScBqGc91A9OeclrLvO5pmrx8myESK0uPwx1kD7PR9VzJPSivGEiY75AVXNue&X-Amz-Signature=83a7fa8b60be1e828aff3e89638520373a7c3778ed5f6090a5d7fd7946629865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CEOICO%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCUvoVwWs1dUPvyEh9Ze3t2nslvMAGvALi0SBPXIYZyZgIgdxOwZk0UC77rYoJFzkpDrjKcv3Rn7LGtSODvTwW4MS4qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYHK971noH2dTxlRircA21wtUfvSjRS3x9WgJJLKze2UgMbdq18TOqKkcov4t7E3SVKkffO71RyI02b2Nb1MH4bkDJuJjiCaX3xwGQTWvz9ria4jNlK%2FrObgmaiM41slg24upGVRFeRk85xBm0qybJd3XbJkvtK1kElnaHqvnt0DZYIvjvjEGcojOY%2FqUBCfkNthVJhq%2BN1CBEimd05d%2BZsNEDcXyz93GFTrg1st2tNydYyxBgB5m8ZaAUrEFN7TSpnQ2Qf7ccH2dm38Oyl7F%2BLGbUiEYDCr1XoV5o4l0Lws%2BLC%2FY7Xdn%2FP9SEQXPKzWNwwb0MIJuyYJBHjqnf88DGVxZP%2FG0kayrOntHYfhhe%2BONeVu8%2FSImgLMOl5zQM2ShataPKjiX%2Fwo9ra1ReKXPDA3U7D%2B6viXPIbW9yduyste5TYxzK5AzHUcs1zNz4OLgYu9DkwvbgG4I2xYlilAbNvv5vwnfNeN%2B84%2Fk1fD7IHxMgsx0yYw6gfFWZoIb9mgYd4d9raWVZNQI3s7%2BXgaGTK%2F4nM8z%2BA3KiIZCPaIGslF507WzL4oC1L%2BFXGjKkGMDTFkbLT6K8oBmT%2BTPJp%2BekmWAJYkI2Y3mKpaunCl5eTPvtAucTc80oNbeGuNwGUso%2FXRL6rj8FLW%2BskMKq%2F4cYGOqUB0GTgaoc9NtrkDiHdZ6vbmxMh1Ab0rnBCzhzCh%2FnNQMBbwBbxO%2B1rKTS8yRC21d61Rs1g5Z4M94Ocz9Xj0HY%2BTylXfVRjNS9Gz3WfF3%2BXZwDHO8C5l2cEYedvrN6Les8Z0jQAvzgSX%2FfGQgxg2JDEmjrebZZem2WDScBqGc91A9OeclrLvO5pmrx8myESK0uPwx1kD7PR9VzJPSivGEiY75AVXNue&X-Amz-Signature=cdefe3810338db761b207b7f429509ef5e48a9d0e3475b1cc28f04a1d9d7a222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CEOICO%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCUvoVwWs1dUPvyEh9Ze3t2nslvMAGvALi0SBPXIYZyZgIgdxOwZk0UC77rYoJFzkpDrjKcv3Rn7LGtSODvTwW4MS4qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYHK971noH2dTxlRircA21wtUfvSjRS3x9WgJJLKze2UgMbdq18TOqKkcov4t7E3SVKkffO71RyI02b2Nb1MH4bkDJuJjiCaX3xwGQTWvz9ria4jNlK%2FrObgmaiM41slg24upGVRFeRk85xBm0qybJd3XbJkvtK1kElnaHqvnt0DZYIvjvjEGcojOY%2FqUBCfkNthVJhq%2BN1CBEimd05d%2BZsNEDcXyz93GFTrg1st2tNydYyxBgB5m8ZaAUrEFN7TSpnQ2Qf7ccH2dm38Oyl7F%2BLGbUiEYDCr1XoV5o4l0Lws%2BLC%2FY7Xdn%2FP9SEQXPKzWNwwb0MIJuyYJBHjqnf88DGVxZP%2FG0kayrOntHYfhhe%2BONeVu8%2FSImgLMOl5zQM2ShataPKjiX%2Fwo9ra1ReKXPDA3U7D%2B6viXPIbW9yduyste5TYxzK5AzHUcs1zNz4OLgYu9DkwvbgG4I2xYlilAbNvv5vwnfNeN%2B84%2Fk1fD7IHxMgsx0yYw6gfFWZoIb9mgYd4d9raWVZNQI3s7%2BXgaGTK%2F4nM8z%2BA3KiIZCPaIGslF507WzL4oC1L%2BFXGjKkGMDTFkbLT6K8oBmT%2BTPJp%2BekmWAJYkI2Y3mKpaunCl5eTPvtAucTc80oNbeGuNwGUso%2FXRL6rj8FLW%2BskMKq%2F4cYGOqUB0GTgaoc9NtrkDiHdZ6vbmxMh1Ab0rnBCzhzCh%2FnNQMBbwBbxO%2B1rKTS8yRC21d61Rs1g5Z4M94Ocz9Xj0HY%2BTylXfVRjNS9Gz3WfF3%2BXZwDHO8C5l2cEYedvrN6Les8Z0jQAvzgSX%2FfGQgxg2JDEmjrebZZem2WDScBqGc91A9OeclrLvO5pmrx8myESK0uPwx1kD7PR9VzJPSivGEiY75AVXNue&X-Amz-Signature=bf0f6062e1c36fbaca16acb40eafcf4c7081959b7d87d5efd3f232466b29cedb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZLP4JIY%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIA4dP1iYmkXaLVXJekJQkQZN4zIatxunTm1auPYcb6GNAiAwGRvCdkRcsKaVNkMhpYlu9stO4EAThoKVzWJEJeSqWSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMToRGByVsPv6HfTnpKtwDN%2BdrMxcA9ASh%2FfbwdTHMJF%2FOE%2B7kAI8k%2FywQGJZzdOY%2BlNVVTRuhCw5kiXm9wFUxKL4e8Raep5pZq05LDeYt4MCcm1xUXyooueAq93BSnT38cKb8TS89%2BM62yk87wJ3GYDBCp0XyuniV1mRvjR6hPIF1DFfM8MBl7I404T10TmChyRv6AxSQUJsMAYCCpKdsxPoGYb8N5sBmAMciiPkosh0IDMQLmpPTgGrSi0FvDkqTWD8cIkc6cqDYvC8LKN2DBW9ABekXH0wIBKVuA2TIvdbbAigoyMjjseyAJatHZHb5SOL8ykaF0AVCmCdiEHuQ9FbVbL5vX7GvsIt1jy8kYd7yPwAHek5N88bRtQzOsT24FtiYf9NnT6NG8ybYVzCVmHQKEiHHabOsT0gTxXK7XGu7%2FQ6ajMqvQRED1EglV9FEb55mqtV84Q5QHq664EcBC0vgNpu2GyOv1vN%2FHXQjSo0XVMVrsjMzlaDF2Yl2BE9gNw%2FcNTbB6JGE5I02LQFv2OmO9t1o1JkXGDoUyPHXpJZtDWxOX%2FSniCAcCIabZCUYlk4bL8X0iSn0jA%2FWo11QykdbOjgx9VBWDMPbHaw9Oc%2FDhsSFk87eBT4uT4DtI0B1YqcoJDRH8V1avEYwlr%2FhxgY6pgF%2BCh2L3tCdCmR%2Bkc3fiSwiJLYLRpBVFefCDjGMYm9CkX%2FxZD6Q7tmx7QKe7drZ1Vwt8y55Vgw4ozXvXkSxYszNcWLbZCzr8eLf6e8QRxNKcmaoupy05MC4BHwZtwzRtBxwixU2HRFws6ZXbRsmTdlyZkU6o6T6yB9niijTrDdgxzUc%2BpcmdLuOVFNOxhXMw%2FfJ4i2laY7v%2Bgh8SxWkDRF7yOjFRrbd&X-Amz-Signature=e8f13a8b28ce87fefb61b2f0f168143a0783c987ce6d247e3c6c2a5c66a4a3cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VETOIZDJ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBS7W8hecGndCGwr%2FAAEpINnKLRdFIb12rInFB6nB5SdAiA6aBPTlODRcCfu3L%2F2o5hPY8YWQGx3jVp1fwfD1HcK1SqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB9G%2FlQKMcmvhqX4CKtwDOaKDJzdpq8sMPrhxoHfRAr7tscpWxVU0%2B1Z0qnxwLT25BxD2PRciLBufJpwGgPy1UFOw92vfP9SNUgE42zGkObLL24OaUMRI5WIjny0j1aU%2F12i4lksrtsCfujAV64YKYTpO%2FP9W1dgLEuQ4pJyaMckhGcUSaHndT%2FuDbU6wrqTbTMVml33%2B95bILS5EtzJsTiDMT4sPOuEz0ddApNP8tm6egJVmhe9bXUM5Y%2F5voYZgOWSGexFferxFEbF7SzleIBjcNAWviI%2F6nJONQ2l3Osm7l3WBfPFcqr8xi8Z4TqwvAYuFpI3bd65d8wf%2B1A2vtfi4eOCu6YjdKb5zbxuj68TkxJhNnCJScugOqOYoxDOT9t5X9te68aoeamBJKBW6GzwjVZqhpAYuQRSdecohxNYCIAoo3MltyJOMm%2F%2FSwoHOvuQSS1aakutmrCNgtZMuDxFbcwqsHf3gO5DwUcksS3YaaJvBmheEnaRKnFTLA%2BZv57e1OM5Uu2wWYRRm3R2o5fnam1ZDqUiA5r44JbDDOvq3NxavEXORRORIPqieaoqLHl7kHbW0Re8JrvyVaDzMS2XI%2B0dMQLQeTvTigtxa9REVYAo2r3o%2BrKEdS8QFqvuFCu375p1QqMHsufswlL%2FhxgY6pgFwkCjy38VKNAFQtBzYaQMVjb4qHAuzzJzFKRzLh%2FSlVnNEKcU4bK6ldRr59J0ueZct59HqoTtFZwcfFRfH87fhF%2Br7G3Y1c4PCBiHSKbpoDKKYBv84%2FMnZfoEcCjlq8KNZEzM8pFGqE8uCYrWrat4a2Uazc0v0AudtbE12ovsYPBIV3XQ30dc6cdQbT3U8Z2FrmxGsTx6%2BdCMMAYmy%2BIxdVR7GfEnk&X-Amz-Signature=d44d86f660cee8b2fd12111aa6ed1ac0d9de2405686f79a624e76db98e75d4a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VETOIZDJ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBS7W8hecGndCGwr%2FAAEpINnKLRdFIb12rInFB6nB5SdAiA6aBPTlODRcCfu3L%2F2o5hPY8YWQGx3jVp1fwfD1HcK1SqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB9G%2FlQKMcmvhqX4CKtwDOaKDJzdpq8sMPrhxoHfRAr7tscpWxVU0%2B1Z0qnxwLT25BxD2PRciLBufJpwGgPy1UFOw92vfP9SNUgE42zGkObLL24OaUMRI5WIjny0j1aU%2F12i4lksrtsCfujAV64YKYTpO%2FP9W1dgLEuQ4pJyaMckhGcUSaHndT%2FuDbU6wrqTbTMVml33%2B95bILS5EtzJsTiDMT4sPOuEz0ddApNP8tm6egJVmhe9bXUM5Y%2F5voYZgOWSGexFferxFEbF7SzleIBjcNAWviI%2F6nJONQ2l3Osm7l3WBfPFcqr8xi8Z4TqwvAYuFpI3bd65d8wf%2B1A2vtfi4eOCu6YjdKb5zbxuj68TkxJhNnCJScugOqOYoxDOT9t5X9te68aoeamBJKBW6GzwjVZqhpAYuQRSdecohxNYCIAoo3MltyJOMm%2F%2FSwoHOvuQSS1aakutmrCNgtZMuDxFbcwqsHf3gO5DwUcksS3YaaJvBmheEnaRKnFTLA%2BZv57e1OM5Uu2wWYRRm3R2o5fnam1ZDqUiA5r44JbDDOvq3NxavEXORRORIPqieaoqLHl7kHbW0Re8JrvyVaDzMS2XI%2B0dMQLQeTvTigtxa9REVYAo2r3o%2BrKEdS8QFqvuFCu375p1QqMHsufswlL%2FhxgY6pgFwkCjy38VKNAFQtBzYaQMVjb4qHAuzzJzFKRzLh%2FSlVnNEKcU4bK6ldRr59J0ueZct59HqoTtFZwcfFRfH87fhF%2Br7G3Y1c4PCBiHSKbpoDKKYBv84%2FMnZfoEcCjlq8KNZEzM8pFGqE8uCYrWrat4a2Uazc0v0AudtbE12ovsYPBIV3XQ30dc6cdQbT3U8Z2FrmxGsTx6%2BdCMMAYmy%2BIxdVR7GfEnk&X-Amz-Signature=2934f1cf37c027c3425e4751b2d23fe0df30bc93fbcf53b0159bc7502c087a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VETOIZDJ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBS7W8hecGndCGwr%2FAAEpINnKLRdFIb12rInFB6nB5SdAiA6aBPTlODRcCfu3L%2F2o5hPY8YWQGx3jVp1fwfD1HcK1SqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB9G%2FlQKMcmvhqX4CKtwDOaKDJzdpq8sMPrhxoHfRAr7tscpWxVU0%2B1Z0qnxwLT25BxD2PRciLBufJpwGgPy1UFOw92vfP9SNUgE42zGkObLL24OaUMRI5WIjny0j1aU%2F12i4lksrtsCfujAV64YKYTpO%2FP9W1dgLEuQ4pJyaMckhGcUSaHndT%2FuDbU6wrqTbTMVml33%2B95bILS5EtzJsTiDMT4sPOuEz0ddApNP8tm6egJVmhe9bXUM5Y%2F5voYZgOWSGexFferxFEbF7SzleIBjcNAWviI%2F6nJONQ2l3Osm7l3WBfPFcqr8xi8Z4TqwvAYuFpI3bd65d8wf%2B1A2vtfi4eOCu6YjdKb5zbxuj68TkxJhNnCJScugOqOYoxDOT9t5X9te68aoeamBJKBW6GzwjVZqhpAYuQRSdecohxNYCIAoo3MltyJOMm%2F%2FSwoHOvuQSS1aakutmrCNgtZMuDxFbcwqsHf3gO5DwUcksS3YaaJvBmheEnaRKnFTLA%2BZv57e1OM5Uu2wWYRRm3R2o5fnam1ZDqUiA5r44JbDDOvq3NxavEXORRORIPqieaoqLHl7kHbW0Re8JrvyVaDzMS2XI%2B0dMQLQeTvTigtxa9REVYAo2r3o%2BrKEdS8QFqvuFCu375p1QqMHsufswlL%2FhxgY6pgFwkCjy38VKNAFQtBzYaQMVjb4qHAuzzJzFKRzLh%2FSlVnNEKcU4bK6ldRr59J0ueZct59HqoTtFZwcfFRfH87fhF%2Br7G3Y1c4PCBiHSKbpoDKKYBv84%2FMnZfoEcCjlq8KNZEzM8pFGqE8uCYrWrat4a2Uazc0v0AudtbE12ovsYPBIV3XQ30dc6cdQbT3U8Z2FrmxGsTx6%2BdCMMAYmy%2BIxdVR7GfEnk&X-Amz-Signature=3595525a984a065cd4e5a5a1739ae2b616e058afcf7030b07fe5a32c6fe78956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VETOIZDJ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBS7W8hecGndCGwr%2FAAEpINnKLRdFIb12rInFB6nB5SdAiA6aBPTlODRcCfu3L%2F2o5hPY8YWQGx3jVp1fwfD1HcK1SqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB9G%2FlQKMcmvhqX4CKtwDOaKDJzdpq8sMPrhxoHfRAr7tscpWxVU0%2B1Z0qnxwLT25BxD2PRciLBufJpwGgPy1UFOw92vfP9SNUgE42zGkObLL24OaUMRI5WIjny0j1aU%2F12i4lksrtsCfujAV64YKYTpO%2FP9W1dgLEuQ4pJyaMckhGcUSaHndT%2FuDbU6wrqTbTMVml33%2B95bILS5EtzJsTiDMT4sPOuEz0ddApNP8tm6egJVmhe9bXUM5Y%2F5voYZgOWSGexFferxFEbF7SzleIBjcNAWviI%2F6nJONQ2l3Osm7l3WBfPFcqr8xi8Z4TqwvAYuFpI3bd65d8wf%2B1A2vtfi4eOCu6YjdKb5zbxuj68TkxJhNnCJScugOqOYoxDOT9t5X9te68aoeamBJKBW6GzwjVZqhpAYuQRSdecohxNYCIAoo3MltyJOMm%2F%2FSwoHOvuQSS1aakutmrCNgtZMuDxFbcwqsHf3gO5DwUcksS3YaaJvBmheEnaRKnFTLA%2BZv57e1OM5Uu2wWYRRm3R2o5fnam1ZDqUiA5r44JbDDOvq3NxavEXORRORIPqieaoqLHl7kHbW0Re8JrvyVaDzMS2XI%2B0dMQLQeTvTigtxa9REVYAo2r3o%2BrKEdS8QFqvuFCu375p1QqMHsufswlL%2FhxgY6pgFwkCjy38VKNAFQtBzYaQMVjb4qHAuzzJzFKRzLh%2FSlVnNEKcU4bK6ldRr59J0ueZct59HqoTtFZwcfFRfH87fhF%2Br7G3Y1c4PCBiHSKbpoDKKYBv84%2FMnZfoEcCjlq8KNZEzM8pFGqE8uCYrWrat4a2Uazc0v0AudtbE12ovsYPBIV3XQ30dc6cdQbT3U8Z2FrmxGsTx6%2BdCMMAYmy%2BIxdVR7GfEnk&X-Amz-Signature=29fb935434ce768a9a6967afd8e72bfdf5f0bd8c6d074423a4cf3d08020f7d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VETOIZDJ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBS7W8hecGndCGwr%2FAAEpINnKLRdFIb12rInFB6nB5SdAiA6aBPTlODRcCfu3L%2F2o5hPY8YWQGx3jVp1fwfD1HcK1SqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB9G%2FlQKMcmvhqX4CKtwDOaKDJzdpq8sMPrhxoHfRAr7tscpWxVU0%2B1Z0qnxwLT25BxD2PRciLBufJpwGgPy1UFOw92vfP9SNUgE42zGkObLL24OaUMRI5WIjny0j1aU%2F12i4lksrtsCfujAV64YKYTpO%2FP9W1dgLEuQ4pJyaMckhGcUSaHndT%2FuDbU6wrqTbTMVml33%2B95bILS5EtzJsTiDMT4sPOuEz0ddApNP8tm6egJVmhe9bXUM5Y%2F5voYZgOWSGexFferxFEbF7SzleIBjcNAWviI%2F6nJONQ2l3Osm7l3WBfPFcqr8xi8Z4TqwvAYuFpI3bd65d8wf%2B1A2vtfi4eOCu6YjdKb5zbxuj68TkxJhNnCJScugOqOYoxDOT9t5X9te68aoeamBJKBW6GzwjVZqhpAYuQRSdecohxNYCIAoo3MltyJOMm%2F%2FSwoHOvuQSS1aakutmrCNgtZMuDxFbcwqsHf3gO5DwUcksS3YaaJvBmheEnaRKnFTLA%2BZv57e1OM5Uu2wWYRRm3R2o5fnam1ZDqUiA5r44JbDDOvq3NxavEXORRORIPqieaoqLHl7kHbW0Re8JrvyVaDzMS2XI%2B0dMQLQeTvTigtxa9REVYAo2r3o%2BrKEdS8QFqvuFCu375p1QqMHsufswlL%2FhxgY6pgFwkCjy38VKNAFQtBzYaQMVjb4qHAuzzJzFKRzLh%2FSlVnNEKcU4bK6ldRr59J0ueZct59HqoTtFZwcfFRfH87fhF%2Br7G3Y1c4PCBiHSKbpoDKKYBv84%2FMnZfoEcCjlq8KNZEzM8pFGqE8uCYrWrat4a2Uazc0v0AudtbE12ovsYPBIV3XQ30dc6cdQbT3U8Z2FrmxGsTx6%2BdCMMAYmy%2BIxdVR7GfEnk&X-Amz-Signature=23f67a3531e2bda5f2d6235a364874a316d5bd77b3b86c5200fcb93ac57d1b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VETOIZDJ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBS7W8hecGndCGwr%2FAAEpINnKLRdFIb12rInFB6nB5SdAiA6aBPTlODRcCfu3L%2F2o5hPY8YWQGx3jVp1fwfD1HcK1SqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB9G%2FlQKMcmvhqX4CKtwDOaKDJzdpq8sMPrhxoHfRAr7tscpWxVU0%2B1Z0qnxwLT25BxD2PRciLBufJpwGgPy1UFOw92vfP9SNUgE42zGkObLL24OaUMRI5WIjny0j1aU%2F12i4lksrtsCfujAV64YKYTpO%2FP9W1dgLEuQ4pJyaMckhGcUSaHndT%2FuDbU6wrqTbTMVml33%2B95bILS5EtzJsTiDMT4sPOuEz0ddApNP8tm6egJVmhe9bXUM5Y%2F5voYZgOWSGexFferxFEbF7SzleIBjcNAWviI%2F6nJONQ2l3Osm7l3WBfPFcqr8xi8Z4TqwvAYuFpI3bd65d8wf%2B1A2vtfi4eOCu6YjdKb5zbxuj68TkxJhNnCJScugOqOYoxDOT9t5X9te68aoeamBJKBW6GzwjVZqhpAYuQRSdecohxNYCIAoo3MltyJOMm%2F%2FSwoHOvuQSS1aakutmrCNgtZMuDxFbcwqsHf3gO5DwUcksS3YaaJvBmheEnaRKnFTLA%2BZv57e1OM5Uu2wWYRRm3R2o5fnam1ZDqUiA5r44JbDDOvq3NxavEXORRORIPqieaoqLHl7kHbW0Re8JrvyVaDzMS2XI%2B0dMQLQeTvTigtxa9REVYAo2r3o%2BrKEdS8QFqvuFCu375p1QqMHsufswlL%2FhxgY6pgFwkCjy38VKNAFQtBzYaQMVjb4qHAuzzJzFKRzLh%2FSlVnNEKcU4bK6ldRr59J0ueZct59HqoTtFZwcfFRfH87fhF%2Br7G3Y1c4PCBiHSKbpoDKKYBv84%2FMnZfoEcCjlq8KNZEzM8pFGqE8uCYrWrat4a2Uazc0v0AudtbE12ovsYPBIV3XQ30dc6cdQbT3U8Z2FrmxGsTx6%2BdCMMAYmy%2BIxdVR7GfEnk&X-Amz-Signature=30fe136f6295f3bd150918abefe76c4c353082ca41e67adb6c23f76af62611c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VETOIZDJ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBS7W8hecGndCGwr%2FAAEpINnKLRdFIb12rInFB6nB5SdAiA6aBPTlODRcCfu3L%2F2o5hPY8YWQGx3jVp1fwfD1HcK1SqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB9G%2FlQKMcmvhqX4CKtwDOaKDJzdpq8sMPrhxoHfRAr7tscpWxVU0%2B1Z0qnxwLT25BxD2PRciLBufJpwGgPy1UFOw92vfP9SNUgE42zGkObLL24OaUMRI5WIjny0j1aU%2F12i4lksrtsCfujAV64YKYTpO%2FP9W1dgLEuQ4pJyaMckhGcUSaHndT%2FuDbU6wrqTbTMVml33%2B95bILS5EtzJsTiDMT4sPOuEz0ddApNP8tm6egJVmhe9bXUM5Y%2F5voYZgOWSGexFferxFEbF7SzleIBjcNAWviI%2F6nJONQ2l3Osm7l3WBfPFcqr8xi8Z4TqwvAYuFpI3bd65d8wf%2B1A2vtfi4eOCu6YjdKb5zbxuj68TkxJhNnCJScugOqOYoxDOT9t5X9te68aoeamBJKBW6GzwjVZqhpAYuQRSdecohxNYCIAoo3MltyJOMm%2F%2FSwoHOvuQSS1aakutmrCNgtZMuDxFbcwqsHf3gO5DwUcksS3YaaJvBmheEnaRKnFTLA%2BZv57e1OM5Uu2wWYRRm3R2o5fnam1ZDqUiA5r44JbDDOvq3NxavEXORRORIPqieaoqLHl7kHbW0Re8JrvyVaDzMS2XI%2B0dMQLQeTvTigtxa9REVYAo2r3o%2BrKEdS8QFqvuFCu375p1QqMHsufswlL%2FhxgY6pgFwkCjy38VKNAFQtBzYaQMVjb4qHAuzzJzFKRzLh%2FSlVnNEKcU4bK6ldRr59J0ueZct59HqoTtFZwcfFRfH87fhF%2Br7G3Y1c4PCBiHSKbpoDKKYBv84%2FMnZfoEcCjlq8KNZEzM8pFGqE8uCYrWrat4a2Uazc0v0AudtbE12ovsYPBIV3XQ30dc6cdQbT3U8Z2FrmxGsTx6%2BdCMMAYmy%2BIxdVR7GfEnk&X-Amz-Signature=ef1ee635d51570aea54d2bb59b7d6b8f572f39852d0e9b725ad0291eb7f33a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VETOIZDJ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBS7W8hecGndCGwr%2FAAEpINnKLRdFIb12rInFB6nB5SdAiA6aBPTlODRcCfu3L%2F2o5hPY8YWQGx3jVp1fwfD1HcK1SqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB9G%2FlQKMcmvhqX4CKtwDOaKDJzdpq8sMPrhxoHfRAr7tscpWxVU0%2B1Z0qnxwLT25BxD2PRciLBufJpwGgPy1UFOw92vfP9SNUgE42zGkObLL24OaUMRI5WIjny0j1aU%2F12i4lksrtsCfujAV64YKYTpO%2FP9W1dgLEuQ4pJyaMckhGcUSaHndT%2FuDbU6wrqTbTMVml33%2B95bILS5EtzJsTiDMT4sPOuEz0ddApNP8tm6egJVmhe9bXUM5Y%2F5voYZgOWSGexFferxFEbF7SzleIBjcNAWviI%2F6nJONQ2l3Osm7l3WBfPFcqr8xi8Z4TqwvAYuFpI3bd65d8wf%2B1A2vtfi4eOCu6YjdKb5zbxuj68TkxJhNnCJScugOqOYoxDOT9t5X9te68aoeamBJKBW6GzwjVZqhpAYuQRSdecohxNYCIAoo3MltyJOMm%2F%2FSwoHOvuQSS1aakutmrCNgtZMuDxFbcwqsHf3gO5DwUcksS3YaaJvBmheEnaRKnFTLA%2BZv57e1OM5Uu2wWYRRm3R2o5fnam1ZDqUiA5r44JbDDOvq3NxavEXORRORIPqieaoqLHl7kHbW0Re8JrvyVaDzMS2XI%2B0dMQLQeTvTigtxa9REVYAo2r3o%2BrKEdS8QFqvuFCu375p1QqMHsufswlL%2FhxgY6pgFwkCjy38VKNAFQtBzYaQMVjb4qHAuzzJzFKRzLh%2FSlVnNEKcU4bK6ldRr59J0ueZct59HqoTtFZwcfFRfH87fhF%2Br7G3Y1c4PCBiHSKbpoDKKYBv84%2FMnZfoEcCjlq8KNZEzM8pFGqE8uCYrWrat4a2Uazc0v0AudtbE12ovsYPBIV3XQ30dc6cdQbT3U8Z2FrmxGsTx6%2BdCMMAYmy%2BIxdVR7GfEnk&X-Amz-Signature=c1e5d42f4e7e83266deb255c4bb2c1c36c79f0efd8d8049ebdfbaa183c7aa49e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VETOIZDJ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBS7W8hecGndCGwr%2FAAEpINnKLRdFIb12rInFB6nB5SdAiA6aBPTlODRcCfu3L%2F2o5hPY8YWQGx3jVp1fwfD1HcK1SqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB9G%2FlQKMcmvhqX4CKtwDOaKDJzdpq8sMPrhxoHfRAr7tscpWxVU0%2B1Z0qnxwLT25BxD2PRciLBufJpwGgPy1UFOw92vfP9SNUgE42zGkObLL24OaUMRI5WIjny0j1aU%2F12i4lksrtsCfujAV64YKYTpO%2FP9W1dgLEuQ4pJyaMckhGcUSaHndT%2FuDbU6wrqTbTMVml33%2B95bILS5EtzJsTiDMT4sPOuEz0ddApNP8tm6egJVmhe9bXUM5Y%2F5voYZgOWSGexFferxFEbF7SzleIBjcNAWviI%2F6nJONQ2l3Osm7l3WBfPFcqr8xi8Z4TqwvAYuFpI3bd65d8wf%2B1A2vtfi4eOCu6YjdKb5zbxuj68TkxJhNnCJScugOqOYoxDOT9t5X9te68aoeamBJKBW6GzwjVZqhpAYuQRSdecohxNYCIAoo3MltyJOMm%2F%2FSwoHOvuQSS1aakutmrCNgtZMuDxFbcwqsHf3gO5DwUcksS3YaaJvBmheEnaRKnFTLA%2BZv57e1OM5Uu2wWYRRm3R2o5fnam1ZDqUiA5r44JbDDOvq3NxavEXORRORIPqieaoqLHl7kHbW0Re8JrvyVaDzMS2XI%2B0dMQLQeTvTigtxa9REVYAo2r3o%2BrKEdS8QFqvuFCu375p1QqMHsufswlL%2FhxgY6pgFwkCjy38VKNAFQtBzYaQMVjb4qHAuzzJzFKRzLh%2FSlVnNEKcU4bK6ldRr59J0ueZct59HqoTtFZwcfFRfH87fhF%2Br7G3Y1c4PCBiHSKbpoDKKYBv84%2FMnZfoEcCjlq8KNZEzM8pFGqE8uCYrWrat4a2Uazc0v0AudtbE12ovsYPBIV3XQ30dc6cdQbT3U8Z2FrmxGsTx6%2BdCMMAYmy%2BIxdVR7GfEnk&X-Amz-Signature=9a24eef192bed2311b607c21b4c0f7debfd90614d13849030977d87e827de491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
