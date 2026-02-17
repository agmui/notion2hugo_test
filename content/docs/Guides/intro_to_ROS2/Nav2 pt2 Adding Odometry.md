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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNN6YSZ2%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBcKzjgvZvy%2FT%2BBehhy1nvURK80%2FGjFjvgNhIkRr80fUAiBUGOvC%2F%2BhFOoRcMUWQDWDbNeL4Npjsiqwb1GNhvgjsbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWCsv5yjytrDlk%2B8CKtwDj%2F6q8MEVPbNfnnm9xd1m34Wf%2B0rCgi61GJ20hEQUs2Be3%2FF3PLW8qT3LLciOq5p5F9FjcZOlzAGl%2FgweBIUrop%2F0nQpCPbS92O46p5jqFh3RN%2BKmLJhcVJ8R1mqlkk5FTjCR%2Far%2FIjA7kjtpofeA90WAag3GNlz948sRsrXfsdwNCejSqqY0IuzTfWnfhE392GzvJ%2FuT4hIJ0vTRF1TDEg9GQna0gUhfp1c4Klhh3fK%2Bb1SccR3sPIQfQDs8%2Bi0Cek1Or91kMG1c%2BMF7kKMvwt%2F05IjkRpnk2iXvVRbpXow%2F9%2B1tXYzSlCDAYpigw4EG9ktaiHfT5avCT7l4EgBt4QRqvu7nDMGXaN8ASt3Dvwycqq958JYh4fCxa5%2BOWqGPn7N6ecENJfro6rqwlKaxPObmL9WNNUSYPKWOQrxqyQprO4uZ70Z%2FmmsEUJNHDJw3ryomIgfkRzsoYBGZbBxCE0wwHwbyfd5IP1eqUgVAHNkx3c6rcjKhWqgqOP%2FCvslv2jGZpYo%2F35Dfm4kCNdWL5ZZn2mgNGOFvoG0jCoW7J6HsVgf1BnlnB2%2FAMWZYhIBhDe1423kh%2ByCFFx2NLQonAwHAvyQrfWnvb4ZWNyx6p%2F4zX%2BP1xlrM3vqbtoowwJjPzAY6pgEYAeWSepQvOSFuHGwFyytNmnl%2BpIOTmYrZAMg8SzP2MVCqgs%2F7k2J5K2u3doUnrMQElLRcMzVrhf1ERUzi62soQO5vUhmVNxEdOOAehl%2BrQFWjsjh2Uxh%2FAU%2Bx2RAv8ljss%2FiX1M09iDJlUuNPltjzh8R2eDjekR0M6GQIeU9Wt8M5d3S%2BsIJzlSzK1FKdFIFWQrYTgRAr7TOye%2BLPBlaBIwPwbin7&X-Amz-Signature=d211dbf5e73a8a799e8f04c151cd1a96f7e5f90a8e308197f9402eb1aaff3fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNN6YSZ2%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBcKzjgvZvy%2FT%2BBehhy1nvURK80%2FGjFjvgNhIkRr80fUAiBUGOvC%2F%2BhFOoRcMUWQDWDbNeL4Npjsiqwb1GNhvgjsbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWCsv5yjytrDlk%2B8CKtwDj%2F6q8MEVPbNfnnm9xd1m34Wf%2B0rCgi61GJ20hEQUs2Be3%2FF3PLW8qT3LLciOq5p5F9FjcZOlzAGl%2FgweBIUrop%2F0nQpCPbS92O46p5jqFh3RN%2BKmLJhcVJ8R1mqlkk5FTjCR%2Far%2FIjA7kjtpofeA90WAag3GNlz948sRsrXfsdwNCejSqqY0IuzTfWnfhE392GzvJ%2FuT4hIJ0vTRF1TDEg9GQna0gUhfp1c4Klhh3fK%2Bb1SccR3sPIQfQDs8%2Bi0Cek1Or91kMG1c%2BMF7kKMvwt%2F05IjkRpnk2iXvVRbpXow%2F9%2B1tXYzSlCDAYpigw4EG9ktaiHfT5avCT7l4EgBt4QRqvu7nDMGXaN8ASt3Dvwycqq958JYh4fCxa5%2BOWqGPn7N6ecENJfro6rqwlKaxPObmL9WNNUSYPKWOQrxqyQprO4uZ70Z%2FmmsEUJNHDJw3ryomIgfkRzsoYBGZbBxCE0wwHwbyfd5IP1eqUgVAHNkx3c6rcjKhWqgqOP%2FCvslv2jGZpYo%2F35Dfm4kCNdWL5ZZn2mgNGOFvoG0jCoW7J6HsVgf1BnlnB2%2FAMWZYhIBhDe1423kh%2ByCFFx2NLQonAwHAvyQrfWnvb4ZWNyx6p%2F4zX%2BP1xlrM3vqbtoowwJjPzAY6pgEYAeWSepQvOSFuHGwFyytNmnl%2BpIOTmYrZAMg8SzP2MVCqgs%2F7k2J5K2u3doUnrMQElLRcMzVrhf1ERUzi62soQO5vUhmVNxEdOOAehl%2BrQFWjsjh2Uxh%2FAU%2Bx2RAv8ljss%2FiX1M09iDJlUuNPltjzh8R2eDjekR0M6GQIeU9Wt8M5d3S%2BsIJzlSzK1FKdFIFWQrYTgRAr7TOye%2BLPBlaBIwPwbin7&X-Amz-Signature=a297f591b8f75be5c640d1f045b2cbaff61f4fae0e97ab63c34430ad5eeed4e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNN6YSZ2%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBcKzjgvZvy%2FT%2BBehhy1nvURK80%2FGjFjvgNhIkRr80fUAiBUGOvC%2F%2BhFOoRcMUWQDWDbNeL4Npjsiqwb1GNhvgjsbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWCsv5yjytrDlk%2B8CKtwDj%2F6q8MEVPbNfnnm9xd1m34Wf%2B0rCgi61GJ20hEQUs2Be3%2FF3PLW8qT3LLciOq5p5F9FjcZOlzAGl%2FgweBIUrop%2F0nQpCPbS92O46p5jqFh3RN%2BKmLJhcVJ8R1mqlkk5FTjCR%2Far%2FIjA7kjtpofeA90WAag3GNlz948sRsrXfsdwNCejSqqY0IuzTfWnfhE392GzvJ%2FuT4hIJ0vTRF1TDEg9GQna0gUhfp1c4Klhh3fK%2Bb1SccR3sPIQfQDs8%2Bi0Cek1Or91kMG1c%2BMF7kKMvwt%2F05IjkRpnk2iXvVRbpXow%2F9%2B1tXYzSlCDAYpigw4EG9ktaiHfT5avCT7l4EgBt4QRqvu7nDMGXaN8ASt3Dvwycqq958JYh4fCxa5%2BOWqGPn7N6ecENJfro6rqwlKaxPObmL9WNNUSYPKWOQrxqyQprO4uZ70Z%2FmmsEUJNHDJw3ryomIgfkRzsoYBGZbBxCE0wwHwbyfd5IP1eqUgVAHNkx3c6rcjKhWqgqOP%2FCvslv2jGZpYo%2F35Dfm4kCNdWL5ZZn2mgNGOFvoG0jCoW7J6HsVgf1BnlnB2%2FAMWZYhIBhDe1423kh%2ByCFFx2NLQonAwHAvyQrfWnvb4ZWNyx6p%2F4zX%2BP1xlrM3vqbtoowwJjPzAY6pgEYAeWSepQvOSFuHGwFyytNmnl%2BpIOTmYrZAMg8SzP2MVCqgs%2F7k2J5K2u3doUnrMQElLRcMzVrhf1ERUzi62soQO5vUhmVNxEdOOAehl%2BrQFWjsjh2Uxh%2FAU%2Bx2RAv8ljss%2FiX1M09iDJlUuNPltjzh8R2eDjekR0M6GQIeU9Wt8M5d3S%2BsIJzlSzK1FKdFIFWQrYTgRAr7TOye%2BLPBlaBIwPwbin7&X-Amz-Signature=eb2e0b0ae4b81203ee69685765546a54a8ba2855b024d973fc333556d4be4347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNN6YSZ2%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBcKzjgvZvy%2FT%2BBehhy1nvURK80%2FGjFjvgNhIkRr80fUAiBUGOvC%2F%2BhFOoRcMUWQDWDbNeL4Npjsiqwb1GNhvgjsbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWCsv5yjytrDlk%2B8CKtwDj%2F6q8MEVPbNfnnm9xd1m34Wf%2B0rCgi61GJ20hEQUs2Be3%2FF3PLW8qT3LLciOq5p5F9FjcZOlzAGl%2FgweBIUrop%2F0nQpCPbS92O46p5jqFh3RN%2BKmLJhcVJ8R1mqlkk5FTjCR%2Far%2FIjA7kjtpofeA90WAag3GNlz948sRsrXfsdwNCejSqqY0IuzTfWnfhE392GzvJ%2FuT4hIJ0vTRF1TDEg9GQna0gUhfp1c4Klhh3fK%2Bb1SccR3sPIQfQDs8%2Bi0Cek1Or91kMG1c%2BMF7kKMvwt%2F05IjkRpnk2iXvVRbpXow%2F9%2B1tXYzSlCDAYpigw4EG9ktaiHfT5avCT7l4EgBt4QRqvu7nDMGXaN8ASt3Dvwycqq958JYh4fCxa5%2BOWqGPn7N6ecENJfro6rqwlKaxPObmL9WNNUSYPKWOQrxqyQprO4uZ70Z%2FmmsEUJNHDJw3ryomIgfkRzsoYBGZbBxCE0wwHwbyfd5IP1eqUgVAHNkx3c6rcjKhWqgqOP%2FCvslv2jGZpYo%2F35Dfm4kCNdWL5ZZn2mgNGOFvoG0jCoW7J6HsVgf1BnlnB2%2FAMWZYhIBhDe1423kh%2ByCFFx2NLQonAwHAvyQrfWnvb4ZWNyx6p%2F4zX%2BP1xlrM3vqbtoowwJjPzAY6pgEYAeWSepQvOSFuHGwFyytNmnl%2BpIOTmYrZAMg8SzP2MVCqgs%2F7k2J5K2u3doUnrMQElLRcMzVrhf1ERUzi62soQO5vUhmVNxEdOOAehl%2BrQFWjsjh2Uxh%2FAU%2Bx2RAv8ljss%2FiX1M09iDJlUuNPltjzh8R2eDjekR0M6GQIeU9Wt8M5d3S%2BsIJzlSzK1FKdFIFWQrYTgRAr7TOye%2BLPBlaBIwPwbin7&X-Amz-Signature=ee171bb0ee03c40675626fcf8597a734cda2a158646e19434c960d06ed9e05bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNN6YSZ2%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBcKzjgvZvy%2FT%2BBehhy1nvURK80%2FGjFjvgNhIkRr80fUAiBUGOvC%2F%2BhFOoRcMUWQDWDbNeL4Npjsiqwb1GNhvgjsbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWCsv5yjytrDlk%2B8CKtwDj%2F6q8MEVPbNfnnm9xd1m34Wf%2B0rCgi61GJ20hEQUs2Be3%2FF3PLW8qT3LLciOq5p5F9FjcZOlzAGl%2FgweBIUrop%2F0nQpCPbS92O46p5jqFh3RN%2BKmLJhcVJ8R1mqlkk5FTjCR%2Far%2FIjA7kjtpofeA90WAag3GNlz948sRsrXfsdwNCejSqqY0IuzTfWnfhE392GzvJ%2FuT4hIJ0vTRF1TDEg9GQna0gUhfp1c4Klhh3fK%2Bb1SccR3sPIQfQDs8%2Bi0Cek1Or91kMG1c%2BMF7kKMvwt%2F05IjkRpnk2iXvVRbpXow%2F9%2B1tXYzSlCDAYpigw4EG9ktaiHfT5avCT7l4EgBt4QRqvu7nDMGXaN8ASt3Dvwycqq958JYh4fCxa5%2BOWqGPn7N6ecENJfro6rqwlKaxPObmL9WNNUSYPKWOQrxqyQprO4uZ70Z%2FmmsEUJNHDJw3ryomIgfkRzsoYBGZbBxCE0wwHwbyfd5IP1eqUgVAHNkx3c6rcjKhWqgqOP%2FCvslv2jGZpYo%2F35Dfm4kCNdWL5ZZn2mgNGOFvoG0jCoW7J6HsVgf1BnlnB2%2FAMWZYhIBhDe1423kh%2ByCFFx2NLQonAwHAvyQrfWnvb4ZWNyx6p%2F4zX%2BP1xlrM3vqbtoowwJjPzAY6pgEYAeWSepQvOSFuHGwFyytNmnl%2BpIOTmYrZAMg8SzP2MVCqgs%2F7k2J5K2u3doUnrMQElLRcMzVrhf1ERUzi62soQO5vUhmVNxEdOOAehl%2BrQFWjsjh2Uxh%2FAU%2Bx2RAv8ljss%2FiX1M09iDJlUuNPltjzh8R2eDjekR0M6GQIeU9Wt8M5d3S%2BsIJzlSzK1FKdFIFWQrYTgRAr7TOye%2BLPBlaBIwPwbin7&X-Amz-Signature=a927364b211ea300bc3defad5ae31d535c359c600bce375f45ee2d80eda721dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNN6YSZ2%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBcKzjgvZvy%2FT%2BBehhy1nvURK80%2FGjFjvgNhIkRr80fUAiBUGOvC%2F%2BhFOoRcMUWQDWDbNeL4Npjsiqwb1GNhvgjsbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWCsv5yjytrDlk%2B8CKtwDj%2F6q8MEVPbNfnnm9xd1m34Wf%2B0rCgi61GJ20hEQUs2Be3%2FF3PLW8qT3LLciOq5p5F9FjcZOlzAGl%2FgweBIUrop%2F0nQpCPbS92O46p5jqFh3RN%2BKmLJhcVJ8R1mqlkk5FTjCR%2Far%2FIjA7kjtpofeA90WAag3GNlz948sRsrXfsdwNCejSqqY0IuzTfWnfhE392GzvJ%2FuT4hIJ0vTRF1TDEg9GQna0gUhfp1c4Klhh3fK%2Bb1SccR3sPIQfQDs8%2Bi0Cek1Or91kMG1c%2BMF7kKMvwt%2F05IjkRpnk2iXvVRbpXow%2F9%2B1tXYzSlCDAYpigw4EG9ktaiHfT5avCT7l4EgBt4QRqvu7nDMGXaN8ASt3Dvwycqq958JYh4fCxa5%2BOWqGPn7N6ecENJfro6rqwlKaxPObmL9WNNUSYPKWOQrxqyQprO4uZ70Z%2FmmsEUJNHDJw3ryomIgfkRzsoYBGZbBxCE0wwHwbyfd5IP1eqUgVAHNkx3c6rcjKhWqgqOP%2FCvslv2jGZpYo%2F35Dfm4kCNdWL5ZZn2mgNGOFvoG0jCoW7J6HsVgf1BnlnB2%2FAMWZYhIBhDe1423kh%2ByCFFx2NLQonAwHAvyQrfWnvb4ZWNyx6p%2F4zX%2BP1xlrM3vqbtoowwJjPzAY6pgEYAeWSepQvOSFuHGwFyytNmnl%2BpIOTmYrZAMg8SzP2MVCqgs%2F7k2J5K2u3doUnrMQElLRcMzVrhf1ERUzi62soQO5vUhmVNxEdOOAehl%2BrQFWjsjh2Uxh%2FAU%2Bx2RAv8ljss%2FiX1M09iDJlUuNPltjzh8R2eDjekR0M6GQIeU9Wt8M5d3S%2BsIJzlSzK1FKdFIFWQrYTgRAr7TOye%2BLPBlaBIwPwbin7&X-Amz-Signature=46f232eaa89148c65edf5a47a2c8661209df9720f02cf8c1e9ab6fa3b5742db0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNN6YSZ2%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBcKzjgvZvy%2FT%2BBehhy1nvURK80%2FGjFjvgNhIkRr80fUAiBUGOvC%2F%2BhFOoRcMUWQDWDbNeL4Npjsiqwb1GNhvgjsbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWCsv5yjytrDlk%2B8CKtwDj%2F6q8MEVPbNfnnm9xd1m34Wf%2B0rCgi61GJ20hEQUs2Be3%2FF3PLW8qT3LLciOq5p5F9FjcZOlzAGl%2FgweBIUrop%2F0nQpCPbS92O46p5jqFh3RN%2BKmLJhcVJ8R1mqlkk5FTjCR%2Far%2FIjA7kjtpofeA90WAag3GNlz948sRsrXfsdwNCejSqqY0IuzTfWnfhE392GzvJ%2FuT4hIJ0vTRF1TDEg9GQna0gUhfp1c4Klhh3fK%2Bb1SccR3sPIQfQDs8%2Bi0Cek1Or91kMG1c%2BMF7kKMvwt%2F05IjkRpnk2iXvVRbpXow%2F9%2B1tXYzSlCDAYpigw4EG9ktaiHfT5avCT7l4EgBt4QRqvu7nDMGXaN8ASt3Dvwycqq958JYh4fCxa5%2BOWqGPn7N6ecENJfro6rqwlKaxPObmL9WNNUSYPKWOQrxqyQprO4uZ70Z%2FmmsEUJNHDJw3ryomIgfkRzsoYBGZbBxCE0wwHwbyfd5IP1eqUgVAHNkx3c6rcjKhWqgqOP%2FCvslv2jGZpYo%2F35Dfm4kCNdWL5ZZn2mgNGOFvoG0jCoW7J6HsVgf1BnlnB2%2FAMWZYhIBhDe1423kh%2ByCFFx2NLQonAwHAvyQrfWnvb4ZWNyx6p%2F4zX%2BP1xlrM3vqbtoowwJjPzAY6pgEYAeWSepQvOSFuHGwFyytNmnl%2BpIOTmYrZAMg8SzP2MVCqgs%2F7k2J5K2u3doUnrMQElLRcMzVrhf1ERUzi62soQO5vUhmVNxEdOOAehl%2BrQFWjsjh2Uxh%2FAU%2Bx2RAv8ljss%2FiX1M09iDJlUuNPltjzh8R2eDjekR0M6GQIeU9Wt8M5d3S%2BsIJzlSzK1FKdFIFWQrYTgRAr7TOye%2BLPBlaBIwPwbin7&X-Amz-Signature=a9444e3c61183f2f6cf5a1d2832a3272bb831e1752b83c668df54d0e009b18fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNN6YSZ2%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBcKzjgvZvy%2FT%2BBehhy1nvURK80%2FGjFjvgNhIkRr80fUAiBUGOvC%2F%2BhFOoRcMUWQDWDbNeL4Npjsiqwb1GNhvgjsbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWCsv5yjytrDlk%2B8CKtwDj%2F6q8MEVPbNfnnm9xd1m34Wf%2B0rCgi61GJ20hEQUs2Be3%2FF3PLW8qT3LLciOq5p5F9FjcZOlzAGl%2FgweBIUrop%2F0nQpCPbS92O46p5jqFh3RN%2BKmLJhcVJ8R1mqlkk5FTjCR%2Far%2FIjA7kjtpofeA90WAag3GNlz948sRsrXfsdwNCejSqqY0IuzTfWnfhE392GzvJ%2FuT4hIJ0vTRF1TDEg9GQna0gUhfp1c4Klhh3fK%2Bb1SccR3sPIQfQDs8%2Bi0Cek1Or91kMG1c%2BMF7kKMvwt%2F05IjkRpnk2iXvVRbpXow%2F9%2B1tXYzSlCDAYpigw4EG9ktaiHfT5avCT7l4EgBt4QRqvu7nDMGXaN8ASt3Dvwycqq958JYh4fCxa5%2BOWqGPn7N6ecENJfro6rqwlKaxPObmL9WNNUSYPKWOQrxqyQprO4uZ70Z%2FmmsEUJNHDJw3ryomIgfkRzsoYBGZbBxCE0wwHwbyfd5IP1eqUgVAHNkx3c6rcjKhWqgqOP%2FCvslv2jGZpYo%2F35Dfm4kCNdWL5ZZn2mgNGOFvoG0jCoW7J6HsVgf1BnlnB2%2FAMWZYhIBhDe1423kh%2ByCFFx2NLQonAwHAvyQrfWnvb4ZWNyx6p%2F4zX%2BP1xlrM3vqbtoowwJjPzAY6pgEYAeWSepQvOSFuHGwFyytNmnl%2BpIOTmYrZAMg8SzP2MVCqgs%2F7k2J5K2u3doUnrMQElLRcMzVrhf1ERUzi62soQO5vUhmVNxEdOOAehl%2BrQFWjsjh2Uxh%2FAU%2Bx2RAv8ljss%2FiX1M09iDJlUuNPltjzh8R2eDjekR0M6GQIeU9Wt8M5d3S%2BsIJzlSzK1FKdFIFWQrYTgRAr7TOye%2BLPBlaBIwPwbin7&X-Amz-Signature=006930e0b26d745026ffd3a4b1348998e39fdb96e81fbffe0002285983e05084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNN6YSZ2%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBcKzjgvZvy%2FT%2BBehhy1nvURK80%2FGjFjvgNhIkRr80fUAiBUGOvC%2F%2BhFOoRcMUWQDWDbNeL4Npjsiqwb1GNhvgjsbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWCsv5yjytrDlk%2B8CKtwDj%2F6q8MEVPbNfnnm9xd1m34Wf%2B0rCgi61GJ20hEQUs2Be3%2FF3PLW8qT3LLciOq5p5F9FjcZOlzAGl%2FgweBIUrop%2F0nQpCPbS92O46p5jqFh3RN%2BKmLJhcVJ8R1mqlkk5FTjCR%2Far%2FIjA7kjtpofeA90WAag3GNlz948sRsrXfsdwNCejSqqY0IuzTfWnfhE392GzvJ%2FuT4hIJ0vTRF1TDEg9GQna0gUhfp1c4Klhh3fK%2Bb1SccR3sPIQfQDs8%2Bi0Cek1Or91kMG1c%2BMF7kKMvwt%2F05IjkRpnk2iXvVRbpXow%2F9%2B1tXYzSlCDAYpigw4EG9ktaiHfT5avCT7l4EgBt4QRqvu7nDMGXaN8ASt3Dvwycqq958JYh4fCxa5%2BOWqGPn7N6ecENJfro6rqwlKaxPObmL9WNNUSYPKWOQrxqyQprO4uZ70Z%2FmmsEUJNHDJw3ryomIgfkRzsoYBGZbBxCE0wwHwbyfd5IP1eqUgVAHNkx3c6rcjKhWqgqOP%2FCvslv2jGZpYo%2F35Dfm4kCNdWL5ZZn2mgNGOFvoG0jCoW7J6HsVgf1BnlnB2%2FAMWZYhIBhDe1423kh%2ByCFFx2NLQonAwHAvyQrfWnvb4ZWNyx6p%2F4zX%2BP1xlrM3vqbtoowwJjPzAY6pgEYAeWSepQvOSFuHGwFyytNmnl%2BpIOTmYrZAMg8SzP2MVCqgs%2F7k2J5K2u3doUnrMQElLRcMzVrhf1ERUzi62soQO5vUhmVNxEdOOAehl%2BrQFWjsjh2Uxh%2FAU%2Bx2RAv8ljss%2FiX1M09iDJlUuNPltjzh8R2eDjekR0M6GQIeU9Wt8M5d3S%2BsIJzlSzK1FKdFIFWQrYTgRAr7TOye%2BLPBlaBIwPwbin7&X-Amz-Signature=2a7d1c2b43d80e8f6488203b29bda7cb1d97e9e3ff67574de820efa7b3a47f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNN6YSZ2%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBcKzjgvZvy%2FT%2BBehhy1nvURK80%2FGjFjvgNhIkRr80fUAiBUGOvC%2F%2BhFOoRcMUWQDWDbNeL4Npjsiqwb1GNhvgjsbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWCsv5yjytrDlk%2B8CKtwDj%2F6q8MEVPbNfnnm9xd1m34Wf%2B0rCgi61GJ20hEQUs2Be3%2FF3PLW8qT3LLciOq5p5F9FjcZOlzAGl%2FgweBIUrop%2F0nQpCPbS92O46p5jqFh3RN%2BKmLJhcVJ8R1mqlkk5FTjCR%2Far%2FIjA7kjtpofeA90WAag3GNlz948sRsrXfsdwNCejSqqY0IuzTfWnfhE392GzvJ%2FuT4hIJ0vTRF1TDEg9GQna0gUhfp1c4Klhh3fK%2Bb1SccR3sPIQfQDs8%2Bi0Cek1Or91kMG1c%2BMF7kKMvwt%2F05IjkRpnk2iXvVRbpXow%2F9%2B1tXYzSlCDAYpigw4EG9ktaiHfT5avCT7l4EgBt4QRqvu7nDMGXaN8ASt3Dvwycqq958JYh4fCxa5%2BOWqGPn7N6ecENJfro6rqwlKaxPObmL9WNNUSYPKWOQrxqyQprO4uZ70Z%2FmmsEUJNHDJw3ryomIgfkRzsoYBGZbBxCE0wwHwbyfd5IP1eqUgVAHNkx3c6rcjKhWqgqOP%2FCvslv2jGZpYo%2F35Dfm4kCNdWL5ZZn2mgNGOFvoG0jCoW7J6HsVgf1BnlnB2%2FAMWZYhIBhDe1423kh%2ByCFFx2NLQonAwHAvyQrfWnvb4ZWNyx6p%2F4zX%2BP1xlrM3vqbtoowwJjPzAY6pgEYAeWSepQvOSFuHGwFyytNmnl%2BpIOTmYrZAMg8SzP2MVCqgs%2F7k2J5K2u3doUnrMQElLRcMzVrhf1ERUzi62soQO5vUhmVNxEdOOAehl%2BrQFWjsjh2Uxh%2FAU%2Bx2RAv8ljss%2FiX1M09iDJlUuNPltjzh8R2eDjekR0M6GQIeU9Wt8M5d3S%2BsIJzlSzK1FKdFIFWQrYTgRAr7TOye%2BLPBlaBIwPwbin7&X-Amz-Signature=6c54f5ce27a091938d3eba35c362027fd543b373198875a946cc2334fceab65a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAURLEK%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCYeEHBWuCZuAJ4N5F5jwia9jzWJLXO71YqVer1I8oPqwIhAJhGwSZ9VVICUwE%2Bw19%2Bs6qzCPkDPpl1kaNwzM2R3LamKv8DCEMQABoMNjM3NDIzMTgzODA1IgzqhmHJohKH6q0%2FKHoq3AM48z8HZYFjYFReYh8SS906rNA3DMaEhL28oG7c1wCNk3f9v5jzg9%2FBLY0EyX%2BTV7u031krqR6Qj%2F6N2wsbBXEoEClTuO73PegPtFNwyBXy%2F9N1xD%2FjtHcM3RdPv121IqsZk4ag1h8CtZ6RF8hBBwqzE%2B8wQ6JI8QBCgIcX9bGfRV0IYjLOtWnzfP2I%2FDslB%2B4FB24gH7x3xkRO%2BkEas3cEwA%2BKJSd4tD5KWlXVnOg4iYg0OgvbkSq82zvgQXJNm1Zmmr4Ric8PwLxAu66y8aLublfaWCt3M8HFNStb5gvb%2FURtCwio%2BCKPwAGKdoAsUfp%2FkLuUQPryEcjVOydMk0lG%2Bnisw6TpNq8AjBAXBz79OgY%2BbmDhtCOHJdJ4j6e71mugJI9xEu1ZuZGRe3HseDKTxxmjM1zk7M3mscFKS57gQS%2F3gWdiV4JeOgeFj4wJSOoCtqcK4q%2F6qIhfRrw7ie%2FLtZTlwhQ6R19Cz%2FY5HcxQWvsGTy3OwgQpUaFgnHNFRmcxl2p3bAAlxdm1Aw5RBpKzVZgKfVE6nfZLVU4x3N2r7CD2V17VM2ldlsdPUErrsz8tZoIGq42BYlGcp%2FQJRoLoj9prz6vhLBOeluL9sJTHGBCcYBda7cw3a%2FtpVjC8mM%2FMBjqkAcjO4%2FxG6NoXVzEl3QudUx7wA1dWIjw%2FIX2FqQTwFouY1692HO%2BqjMUVgwrffC2sZ7Yr4jaev6PeXgHVv83U%2B8r%2Fjsj7gB0B0aVQPg%2BQXUytG4B9%2Fvc%2B7GUiDj%2BppIygS0ohfBZDL%2B8WU2WR%2FuhWL%2B%2BERkh3ZRyxn%2FCp2MaomDIKS3eFluz7cITtWZpKBlVGOg%2BVKXy2FDoc9nR0McsGgDbirdm2&X-Amz-Signature=449bb1e72d2d71ce06da35b7a11f325506d8f1e3e13557866cba253c93bbdcc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OELFMW7%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDxkyeuhl%2BVbEFfRG2ScPN0f7rcFk8Am4pXFCq3VbXHIQIhALt3Gr%2B91xHAuddunhf625hAlszUn2ufsUyyex1d8SeFKv8DCEMQABoMNjM3NDIzMTgzODA1Igx4rhDU1LtffgNdRLoq3APhkPNurLizQ7A0v9fvoiGSVqquJI1%2Bpi7pKLi%2BGMeM7KspnMmK7t6WQBfi0JQPCw%2Fh%2BUGkbbXbeTSx2SrhOmFFwW2ZsU8xhDUNKqpSuGrvZlgPHzfRKPMsHlCVxTgXv8A5iN62RnHAQmXGQIIq41zfgGCzfxORdsLKfc96IbhLVfYJdq%2BXK97i%2FHh4gnMUrnKsOiDBe8vIMhY2t2A3b9xnG%2FjE4u3q4lAvcwGT99YoaG9AcGCuNQOrjgT07cT5qRTY86Cgr2dJI8ttHvpQrp4Ee4kI9QJohsNk6kJR3mYgiGUo5tWz0MZEa3dshbqyFTmIlZsYJUgpQNzEvOlTDViqdOS1s2QL0N9elXu3wzOv4Fq%2FasYL2beRRtGlujODXaXOrFbY%2FtYG7KVmHE7XpORRmOEVkQc1i3XHItDIHfzAeFlbjLZmwkPDeC5C4ZfHgGTKoZ98S9OmppyCwHfWl%2BVxRUuM61%2FHUKFq%2BpYz9DE9GID12uC8tlq38PuqvG9l8FtfcWs1kQ4pi3xtMwaYplnYb3XGrxYS%2BxsJ8yoTVrCwn7NA4F73QcRGdvoZxnp3MYWLqwjtWXDcLSB%2FigM45A3xE6oGOp6k0pbIn6J4CkydYvN9nLk%2B%2FL%2FkH4AvuDDql8%2FMBjqkAVZnEUqDMY85OAKw2MkyigPpe3MKluJUJvXMRWnnCBztc88b3YvzPpvyqgWgBPA1afYkd4a3DDSEa7RemvBU7qYm%2F%2F9rq0xDrpOQksCZNc2EQX%2FNzWB6Ygkw81OCfmV3DVhWr3HeGThC53BAOEOQAv40TvgDDgLJqpo3vh%2Bbllvhw8WXSyGhVo3KpWcc4dO9L7r2FFmfTcp7ALnvN07P7%2FWJ%2BnVY&X-Amz-Signature=1e838cc8ebff6c9770868f83333e582c224a2b7a2804cdc7252e517c64287da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OELFMW7%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDxkyeuhl%2BVbEFfRG2ScPN0f7rcFk8Am4pXFCq3VbXHIQIhALt3Gr%2B91xHAuddunhf625hAlszUn2ufsUyyex1d8SeFKv8DCEMQABoMNjM3NDIzMTgzODA1Igx4rhDU1LtffgNdRLoq3APhkPNurLizQ7A0v9fvoiGSVqquJI1%2Bpi7pKLi%2BGMeM7KspnMmK7t6WQBfi0JQPCw%2Fh%2BUGkbbXbeTSx2SrhOmFFwW2ZsU8xhDUNKqpSuGrvZlgPHzfRKPMsHlCVxTgXv8A5iN62RnHAQmXGQIIq41zfgGCzfxORdsLKfc96IbhLVfYJdq%2BXK97i%2FHh4gnMUrnKsOiDBe8vIMhY2t2A3b9xnG%2FjE4u3q4lAvcwGT99YoaG9AcGCuNQOrjgT07cT5qRTY86Cgr2dJI8ttHvpQrp4Ee4kI9QJohsNk6kJR3mYgiGUo5tWz0MZEa3dshbqyFTmIlZsYJUgpQNzEvOlTDViqdOS1s2QL0N9elXu3wzOv4Fq%2FasYL2beRRtGlujODXaXOrFbY%2FtYG7KVmHE7XpORRmOEVkQc1i3XHItDIHfzAeFlbjLZmwkPDeC5C4ZfHgGTKoZ98S9OmppyCwHfWl%2BVxRUuM61%2FHUKFq%2BpYz9DE9GID12uC8tlq38PuqvG9l8FtfcWs1kQ4pi3xtMwaYplnYb3XGrxYS%2BxsJ8yoTVrCwn7NA4F73QcRGdvoZxnp3MYWLqwjtWXDcLSB%2FigM45A3xE6oGOp6k0pbIn6J4CkydYvN9nLk%2B%2FL%2FkH4AvuDDql8%2FMBjqkAVZnEUqDMY85OAKw2MkyigPpe3MKluJUJvXMRWnnCBztc88b3YvzPpvyqgWgBPA1afYkd4a3DDSEa7RemvBU7qYm%2F%2F9rq0xDrpOQksCZNc2EQX%2FNzWB6Ygkw81OCfmV3DVhWr3HeGThC53BAOEOQAv40TvgDDgLJqpo3vh%2Bbllvhw8WXSyGhVo3KpWcc4dO9L7r2FFmfTcp7ALnvN07P7%2FWJ%2BnVY&X-Amz-Signature=880c8fd7ddb5492ee77060db93270d67e0b9a216363639075c6d0f4b4b6cf6ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OELFMW7%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDxkyeuhl%2BVbEFfRG2ScPN0f7rcFk8Am4pXFCq3VbXHIQIhALt3Gr%2B91xHAuddunhf625hAlszUn2ufsUyyex1d8SeFKv8DCEMQABoMNjM3NDIzMTgzODA1Igx4rhDU1LtffgNdRLoq3APhkPNurLizQ7A0v9fvoiGSVqquJI1%2Bpi7pKLi%2BGMeM7KspnMmK7t6WQBfi0JQPCw%2Fh%2BUGkbbXbeTSx2SrhOmFFwW2ZsU8xhDUNKqpSuGrvZlgPHzfRKPMsHlCVxTgXv8A5iN62RnHAQmXGQIIq41zfgGCzfxORdsLKfc96IbhLVfYJdq%2BXK97i%2FHh4gnMUrnKsOiDBe8vIMhY2t2A3b9xnG%2FjE4u3q4lAvcwGT99YoaG9AcGCuNQOrjgT07cT5qRTY86Cgr2dJI8ttHvpQrp4Ee4kI9QJohsNk6kJR3mYgiGUo5tWz0MZEa3dshbqyFTmIlZsYJUgpQNzEvOlTDViqdOS1s2QL0N9elXu3wzOv4Fq%2FasYL2beRRtGlujODXaXOrFbY%2FtYG7KVmHE7XpORRmOEVkQc1i3XHItDIHfzAeFlbjLZmwkPDeC5C4ZfHgGTKoZ98S9OmppyCwHfWl%2BVxRUuM61%2FHUKFq%2BpYz9DE9GID12uC8tlq38PuqvG9l8FtfcWs1kQ4pi3xtMwaYplnYb3XGrxYS%2BxsJ8yoTVrCwn7NA4F73QcRGdvoZxnp3MYWLqwjtWXDcLSB%2FigM45A3xE6oGOp6k0pbIn6J4CkydYvN9nLk%2B%2FL%2FkH4AvuDDql8%2FMBjqkAVZnEUqDMY85OAKw2MkyigPpe3MKluJUJvXMRWnnCBztc88b3YvzPpvyqgWgBPA1afYkd4a3DDSEa7RemvBU7qYm%2F%2F9rq0xDrpOQksCZNc2EQX%2FNzWB6Ygkw81OCfmV3DVhWr3HeGThC53BAOEOQAv40TvgDDgLJqpo3vh%2Bbllvhw8WXSyGhVo3KpWcc4dO9L7r2FFmfTcp7ALnvN07P7%2FWJ%2BnVY&X-Amz-Signature=c504b19d8eae2ca9b26bcedf204d590c8565de478cc557d4b885fc6886345928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OELFMW7%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDxkyeuhl%2BVbEFfRG2ScPN0f7rcFk8Am4pXFCq3VbXHIQIhALt3Gr%2B91xHAuddunhf625hAlszUn2ufsUyyex1d8SeFKv8DCEMQABoMNjM3NDIzMTgzODA1Igx4rhDU1LtffgNdRLoq3APhkPNurLizQ7A0v9fvoiGSVqquJI1%2Bpi7pKLi%2BGMeM7KspnMmK7t6WQBfi0JQPCw%2Fh%2BUGkbbXbeTSx2SrhOmFFwW2ZsU8xhDUNKqpSuGrvZlgPHzfRKPMsHlCVxTgXv8A5iN62RnHAQmXGQIIq41zfgGCzfxORdsLKfc96IbhLVfYJdq%2BXK97i%2FHh4gnMUrnKsOiDBe8vIMhY2t2A3b9xnG%2FjE4u3q4lAvcwGT99YoaG9AcGCuNQOrjgT07cT5qRTY86Cgr2dJI8ttHvpQrp4Ee4kI9QJohsNk6kJR3mYgiGUo5tWz0MZEa3dshbqyFTmIlZsYJUgpQNzEvOlTDViqdOS1s2QL0N9elXu3wzOv4Fq%2FasYL2beRRtGlujODXaXOrFbY%2FtYG7KVmHE7XpORRmOEVkQc1i3XHItDIHfzAeFlbjLZmwkPDeC5C4ZfHgGTKoZ98S9OmppyCwHfWl%2BVxRUuM61%2FHUKFq%2BpYz9DE9GID12uC8tlq38PuqvG9l8FtfcWs1kQ4pi3xtMwaYplnYb3XGrxYS%2BxsJ8yoTVrCwn7NA4F73QcRGdvoZxnp3MYWLqwjtWXDcLSB%2FigM45A3xE6oGOp6k0pbIn6J4CkydYvN9nLk%2B%2FL%2FkH4AvuDDql8%2FMBjqkAVZnEUqDMY85OAKw2MkyigPpe3MKluJUJvXMRWnnCBztc88b3YvzPpvyqgWgBPA1afYkd4a3DDSEa7RemvBU7qYm%2F%2F9rq0xDrpOQksCZNc2EQX%2FNzWB6Ygkw81OCfmV3DVhWr3HeGThC53BAOEOQAv40TvgDDgLJqpo3vh%2Bbllvhw8WXSyGhVo3KpWcc4dO9L7r2FFmfTcp7ALnvN07P7%2FWJ%2BnVY&X-Amz-Signature=8985a972637a83364ae7650e726fe4450b6ca42efa203aaba6d6b9060661a357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OELFMW7%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDxkyeuhl%2BVbEFfRG2ScPN0f7rcFk8Am4pXFCq3VbXHIQIhALt3Gr%2B91xHAuddunhf625hAlszUn2ufsUyyex1d8SeFKv8DCEMQABoMNjM3NDIzMTgzODA1Igx4rhDU1LtffgNdRLoq3APhkPNurLizQ7A0v9fvoiGSVqquJI1%2Bpi7pKLi%2BGMeM7KspnMmK7t6WQBfi0JQPCw%2Fh%2BUGkbbXbeTSx2SrhOmFFwW2ZsU8xhDUNKqpSuGrvZlgPHzfRKPMsHlCVxTgXv8A5iN62RnHAQmXGQIIq41zfgGCzfxORdsLKfc96IbhLVfYJdq%2BXK97i%2FHh4gnMUrnKsOiDBe8vIMhY2t2A3b9xnG%2FjE4u3q4lAvcwGT99YoaG9AcGCuNQOrjgT07cT5qRTY86Cgr2dJI8ttHvpQrp4Ee4kI9QJohsNk6kJR3mYgiGUo5tWz0MZEa3dshbqyFTmIlZsYJUgpQNzEvOlTDViqdOS1s2QL0N9elXu3wzOv4Fq%2FasYL2beRRtGlujODXaXOrFbY%2FtYG7KVmHE7XpORRmOEVkQc1i3XHItDIHfzAeFlbjLZmwkPDeC5C4ZfHgGTKoZ98S9OmppyCwHfWl%2BVxRUuM61%2FHUKFq%2BpYz9DE9GID12uC8tlq38PuqvG9l8FtfcWs1kQ4pi3xtMwaYplnYb3XGrxYS%2BxsJ8yoTVrCwn7NA4F73QcRGdvoZxnp3MYWLqwjtWXDcLSB%2FigM45A3xE6oGOp6k0pbIn6J4CkydYvN9nLk%2B%2FL%2FkH4AvuDDql8%2FMBjqkAVZnEUqDMY85OAKw2MkyigPpe3MKluJUJvXMRWnnCBztc88b3YvzPpvyqgWgBPA1afYkd4a3DDSEa7RemvBU7qYm%2F%2F9rq0xDrpOQksCZNc2EQX%2FNzWB6Ygkw81OCfmV3DVhWr3HeGThC53BAOEOQAv40TvgDDgLJqpo3vh%2Bbllvhw8WXSyGhVo3KpWcc4dO9L7r2FFmfTcp7ALnvN07P7%2FWJ%2BnVY&X-Amz-Signature=560d0b3deadedf7af8c6295cfe082db170451c7b47f37ceaaddd5a71cd07bfa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OELFMW7%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDxkyeuhl%2BVbEFfRG2ScPN0f7rcFk8Am4pXFCq3VbXHIQIhALt3Gr%2B91xHAuddunhf625hAlszUn2ufsUyyex1d8SeFKv8DCEMQABoMNjM3NDIzMTgzODA1Igx4rhDU1LtffgNdRLoq3APhkPNurLizQ7A0v9fvoiGSVqquJI1%2Bpi7pKLi%2BGMeM7KspnMmK7t6WQBfi0JQPCw%2Fh%2BUGkbbXbeTSx2SrhOmFFwW2ZsU8xhDUNKqpSuGrvZlgPHzfRKPMsHlCVxTgXv8A5iN62RnHAQmXGQIIq41zfgGCzfxORdsLKfc96IbhLVfYJdq%2BXK97i%2FHh4gnMUrnKsOiDBe8vIMhY2t2A3b9xnG%2FjE4u3q4lAvcwGT99YoaG9AcGCuNQOrjgT07cT5qRTY86Cgr2dJI8ttHvpQrp4Ee4kI9QJohsNk6kJR3mYgiGUo5tWz0MZEa3dshbqyFTmIlZsYJUgpQNzEvOlTDViqdOS1s2QL0N9elXu3wzOv4Fq%2FasYL2beRRtGlujODXaXOrFbY%2FtYG7KVmHE7XpORRmOEVkQc1i3XHItDIHfzAeFlbjLZmwkPDeC5C4ZfHgGTKoZ98S9OmppyCwHfWl%2BVxRUuM61%2FHUKFq%2BpYz9DE9GID12uC8tlq38PuqvG9l8FtfcWs1kQ4pi3xtMwaYplnYb3XGrxYS%2BxsJ8yoTVrCwn7NA4F73QcRGdvoZxnp3MYWLqwjtWXDcLSB%2FigM45A3xE6oGOp6k0pbIn6J4CkydYvN9nLk%2B%2FL%2FkH4AvuDDql8%2FMBjqkAVZnEUqDMY85OAKw2MkyigPpe3MKluJUJvXMRWnnCBztc88b3YvzPpvyqgWgBPA1afYkd4a3DDSEa7RemvBU7qYm%2F%2F9rq0xDrpOQksCZNc2EQX%2FNzWB6Ygkw81OCfmV3DVhWr3HeGThC53BAOEOQAv40TvgDDgLJqpo3vh%2Bbllvhw8WXSyGhVo3KpWcc4dO9L7r2FFmfTcp7ALnvN07P7%2FWJ%2BnVY&X-Amz-Signature=2bd120b89ce854582ecb0369945233b375a4fa7e4d6625e5bb914e52e895afda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OELFMW7%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDxkyeuhl%2BVbEFfRG2ScPN0f7rcFk8Am4pXFCq3VbXHIQIhALt3Gr%2B91xHAuddunhf625hAlszUn2ufsUyyex1d8SeFKv8DCEMQABoMNjM3NDIzMTgzODA1Igx4rhDU1LtffgNdRLoq3APhkPNurLizQ7A0v9fvoiGSVqquJI1%2Bpi7pKLi%2BGMeM7KspnMmK7t6WQBfi0JQPCw%2Fh%2BUGkbbXbeTSx2SrhOmFFwW2ZsU8xhDUNKqpSuGrvZlgPHzfRKPMsHlCVxTgXv8A5iN62RnHAQmXGQIIq41zfgGCzfxORdsLKfc96IbhLVfYJdq%2BXK97i%2FHh4gnMUrnKsOiDBe8vIMhY2t2A3b9xnG%2FjE4u3q4lAvcwGT99YoaG9AcGCuNQOrjgT07cT5qRTY86Cgr2dJI8ttHvpQrp4Ee4kI9QJohsNk6kJR3mYgiGUo5tWz0MZEa3dshbqyFTmIlZsYJUgpQNzEvOlTDViqdOS1s2QL0N9elXu3wzOv4Fq%2FasYL2beRRtGlujODXaXOrFbY%2FtYG7KVmHE7XpORRmOEVkQc1i3XHItDIHfzAeFlbjLZmwkPDeC5C4ZfHgGTKoZ98S9OmppyCwHfWl%2BVxRUuM61%2FHUKFq%2BpYz9DE9GID12uC8tlq38PuqvG9l8FtfcWs1kQ4pi3xtMwaYplnYb3XGrxYS%2BxsJ8yoTVrCwn7NA4F73QcRGdvoZxnp3MYWLqwjtWXDcLSB%2FigM45A3xE6oGOp6k0pbIn6J4CkydYvN9nLk%2B%2FL%2FkH4AvuDDql8%2FMBjqkAVZnEUqDMY85OAKw2MkyigPpe3MKluJUJvXMRWnnCBztc88b3YvzPpvyqgWgBPA1afYkd4a3DDSEa7RemvBU7qYm%2F%2F9rq0xDrpOQksCZNc2EQX%2FNzWB6Ygkw81OCfmV3DVhWr3HeGThC53BAOEOQAv40TvgDDgLJqpo3vh%2Bbllvhw8WXSyGhVo3KpWcc4dO9L7r2FFmfTcp7ALnvN07P7%2FWJ%2BnVY&X-Amz-Signature=561c6ca5cfb613c7b800fe793102d5ce7268b4da3cefc636de6ad7a6b9a196b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OELFMW7%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDxkyeuhl%2BVbEFfRG2ScPN0f7rcFk8Am4pXFCq3VbXHIQIhALt3Gr%2B91xHAuddunhf625hAlszUn2ufsUyyex1d8SeFKv8DCEMQABoMNjM3NDIzMTgzODA1Igx4rhDU1LtffgNdRLoq3APhkPNurLizQ7A0v9fvoiGSVqquJI1%2Bpi7pKLi%2BGMeM7KspnMmK7t6WQBfi0JQPCw%2Fh%2BUGkbbXbeTSx2SrhOmFFwW2ZsU8xhDUNKqpSuGrvZlgPHzfRKPMsHlCVxTgXv8A5iN62RnHAQmXGQIIq41zfgGCzfxORdsLKfc96IbhLVfYJdq%2BXK97i%2FHh4gnMUrnKsOiDBe8vIMhY2t2A3b9xnG%2FjE4u3q4lAvcwGT99YoaG9AcGCuNQOrjgT07cT5qRTY86Cgr2dJI8ttHvpQrp4Ee4kI9QJohsNk6kJR3mYgiGUo5tWz0MZEa3dshbqyFTmIlZsYJUgpQNzEvOlTDViqdOS1s2QL0N9elXu3wzOv4Fq%2FasYL2beRRtGlujODXaXOrFbY%2FtYG7KVmHE7XpORRmOEVkQc1i3XHItDIHfzAeFlbjLZmwkPDeC5C4ZfHgGTKoZ98S9OmppyCwHfWl%2BVxRUuM61%2FHUKFq%2BpYz9DE9GID12uC8tlq38PuqvG9l8FtfcWs1kQ4pi3xtMwaYplnYb3XGrxYS%2BxsJ8yoTVrCwn7NA4F73QcRGdvoZxnp3MYWLqwjtWXDcLSB%2FigM45A3xE6oGOp6k0pbIn6J4CkydYvN9nLk%2B%2FL%2FkH4AvuDDql8%2FMBjqkAVZnEUqDMY85OAKw2MkyigPpe3MKluJUJvXMRWnnCBztc88b3YvzPpvyqgWgBPA1afYkd4a3DDSEa7RemvBU7qYm%2F%2F9rq0xDrpOQksCZNc2EQX%2FNzWB6Ygkw81OCfmV3DVhWr3HeGThC53BAOEOQAv40TvgDDgLJqpo3vh%2Bbllvhw8WXSyGhVo3KpWcc4dO9L7r2FFmfTcp7ALnvN07P7%2FWJ%2BnVY&X-Amz-Signature=3874a01876699eb765aabf9c7dd381ed9d76eefd4e40fc8497f56cfe8aea7bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OELFMW7%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDxkyeuhl%2BVbEFfRG2ScPN0f7rcFk8Am4pXFCq3VbXHIQIhALt3Gr%2B91xHAuddunhf625hAlszUn2ufsUyyex1d8SeFKv8DCEMQABoMNjM3NDIzMTgzODA1Igx4rhDU1LtffgNdRLoq3APhkPNurLizQ7A0v9fvoiGSVqquJI1%2Bpi7pKLi%2BGMeM7KspnMmK7t6WQBfi0JQPCw%2Fh%2BUGkbbXbeTSx2SrhOmFFwW2ZsU8xhDUNKqpSuGrvZlgPHzfRKPMsHlCVxTgXv8A5iN62RnHAQmXGQIIq41zfgGCzfxORdsLKfc96IbhLVfYJdq%2BXK97i%2FHh4gnMUrnKsOiDBe8vIMhY2t2A3b9xnG%2FjE4u3q4lAvcwGT99YoaG9AcGCuNQOrjgT07cT5qRTY86Cgr2dJI8ttHvpQrp4Ee4kI9QJohsNk6kJR3mYgiGUo5tWz0MZEa3dshbqyFTmIlZsYJUgpQNzEvOlTDViqdOS1s2QL0N9elXu3wzOv4Fq%2FasYL2beRRtGlujODXaXOrFbY%2FtYG7KVmHE7XpORRmOEVkQc1i3XHItDIHfzAeFlbjLZmwkPDeC5C4ZfHgGTKoZ98S9OmppyCwHfWl%2BVxRUuM61%2FHUKFq%2BpYz9DE9GID12uC8tlq38PuqvG9l8FtfcWs1kQ4pi3xtMwaYplnYb3XGrxYS%2BxsJ8yoTVrCwn7NA4F73QcRGdvoZxnp3MYWLqwjtWXDcLSB%2FigM45A3xE6oGOp6k0pbIn6J4CkydYvN9nLk%2B%2FL%2FkH4AvuDDql8%2FMBjqkAVZnEUqDMY85OAKw2MkyigPpe3MKluJUJvXMRWnnCBztc88b3YvzPpvyqgWgBPA1afYkd4a3DDSEa7RemvBU7qYm%2F%2F9rq0xDrpOQksCZNc2EQX%2FNzWB6Ygkw81OCfmV3DVhWr3HeGThC53BAOEOQAv40TvgDDgLJqpo3vh%2Bbllvhw8WXSyGhVo3KpWcc4dO9L7r2FFmfTcp7ALnvN07P7%2FWJ%2BnVY&X-Amz-Signature=fa16e7497ed3ebc6f64419569fb9e22a5ac2f4ecb007e6c8e285e88403540de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
