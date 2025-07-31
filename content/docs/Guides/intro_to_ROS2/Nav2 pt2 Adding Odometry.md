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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHGX533%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZdp2gGxJeo3mJbp4Jb0sL0YdyXIX%2BIWlgYJQaMNjZ2gIhAM2MlS5hSBGyswOznM7tNvgbkUoQWhVjrdfCgEtBcay2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7bZMWE%2BYLxdsY0lYq3AP6L4wqY%2F8YWeowcz%2FlHzpbTpkblwksSmHkJzqej27cyyegiFjNO5JnkYQ1tXeid80MaVlgpsreGdctYtJQ4hKeAuLprDSPz0nLx2NRRHbiebzF%2BfHvgOPziOSliKJrGNuZ4UokpwNJ9UZYXYzPm141b6tkV3Z3DYOwqoGDykWWqn67zLiinVH4JNq8U%2BlFBYqAy63SDdwpIxeHcYS63IdnruFOFFXvEgCZrRmm28d1FufMZWN%2B3tVtouxHYCUYUgTF8i1sOTJmvzgeXxqhibCkbwXGjw44EF1CJtBcjVzEIeMFkwf5SqbFROZ896C02Dk2ouxJIOywPDE74MkNbrn6y8cyoaFO9KSA9ZeqsUxCwYoToHuCa8ioSqyzWZ2y2Kro3UE1O0bcUJrWA8W6Jxl%2FOMy6xn5M1SfB5ZOsHCWEfbtV6JuTYeU2xzlzdeQI%2BEezUYe3rqhlV4UJnZ7Z8jBtGQ2LT6BuG4LEdiLRb0qYZcNiu5uvMR%2BPO%2BArYgUoe3rl%2FjsQRyj5QZz5KB%2F%2FzEUu0Dn2%2FcD5EeYF4JJoRSFq0tPCb1IxkwPgup4g2F9VgDwXa9I2nTC%2FRYrQ5s0jNwNdOkdK%2BKd6z4vgBG5eX%2Bkh8zC%2FCUnen8bZ0hD7GDC09qvEBjqkAdREi21KG62Vx7iKnj7ZswrGF7A0rtGNy0wCJzVZ96MBgWwaGmmnmz8YYOsti33Aw5bZ0P52bRi6l11QKYWc4yftFUoFDY2WscX85eA94ltSUKb10tWtkO%2BLKawmY%2BkBywGOeLodhfvDv%2BedSn709I3oSm1xUzz5Tou9VGJYy3A%2BE5DdDLyrcv3uTAXhMIfcPJ%2BHQdK58iHmQpGVnoFziQHcOjVb&X-Amz-Signature=ae94b5cd0259c209529e8711a71283ce560bfaf98d2ac0bad58ed8c0a88f0651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHGX533%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZdp2gGxJeo3mJbp4Jb0sL0YdyXIX%2BIWlgYJQaMNjZ2gIhAM2MlS5hSBGyswOznM7tNvgbkUoQWhVjrdfCgEtBcay2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7bZMWE%2BYLxdsY0lYq3AP6L4wqY%2F8YWeowcz%2FlHzpbTpkblwksSmHkJzqej27cyyegiFjNO5JnkYQ1tXeid80MaVlgpsreGdctYtJQ4hKeAuLprDSPz0nLx2NRRHbiebzF%2BfHvgOPziOSliKJrGNuZ4UokpwNJ9UZYXYzPm141b6tkV3Z3DYOwqoGDykWWqn67zLiinVH4JNq8U%2BlFBYqAy63SDdwpIxeHcYS63IdnruFOFFXvEgCZrRmm28d1FufMZWN%2B3tVtouxHYCUYUgTF8i1sOTJmvzgeXxqhibCkbwXGjw44EF1CJtBcjVzEIeMFkwf5SqbFROZ896C02Dk2ouxJIOywPDE74MkNbrn6y8cyoaFO9KSA9ZeqsUxCwYoToHuCa8ioSqyzWZ2y2Kro3UE1O0bcUJrWA8W6Jxl%2FOMy6xn5M1SfB5ZOsHCWEfbtV6JuTYeU2xzlzdeQI%2BEezUYe3rqhlV4UJnZ7Z8jBtGQ2LT6BuG4LEdiLRb0qYZcNiu5uvMR%2BPO%2BArYgUoe3rl%2FjsQRyj5QZz5KB%2F%2FzEUu0Dn2%2FcD5EeYF4JJoRSFq0tPCb1IxkwPgup4g2F9VgDwXa9I2nTC%2FRYrQ5s0jNwNdOkdK%2BKd6z4vgBG5eX%2Bkh8zC%2FCUnen8bZ0hD7GDC09qvEBjqkAdREi21KG62Vx7iKnj7ZswrGF7A0rtGNy0wCJzVZ96MBgWwaGmmnmz8YYOsti33Aw5bZ0P52bRi6l11QKYWc4yftFUoFDY2WscX85eA94ltSUKb10tWtkO%2BLKawmY%2BkBywGOeLodhfvDv%2BedSn709I3oSm1xUzz5Tou9VGJYy3A%2BE5DdDLyrcv3uTAXhMIfcPJ%2BHQdK58iHmQpGVnoFziQHcOjVb&X-Amz-Signature=d8ce98a3f54909349696d9d2df3be45f9045feb79726e1a0ea5181d46367be8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHGX533%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZdp2gGxJeo3mJbp4Jb0sL0YdyXIX%2BIWlgYJQaMNjZ2gIhAM2MlS5hSBGyswOznM7tNvgbkUoQWhVjrdfCgEtBcay2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7bZMWE%2BYLxdsY0lYq3AP6L4wqY%2F8YWeowcz%2FlHzpbTpkblwksSmHkJzqej27cyyegiFjNO5JnkYQ1tXeid80MaVlgpsreGdctYtJQ4hKeAuLprDSPz0nLx2NRRHbiebzF%2BfHvgOPziOSliKJrGNuZ4UokpwNJ9UZYXYzPm141b6tkV3Z3DYOwqoGDykWWqn67zLiinVH4JNq8U%2BlFBYqAy63SDdwpIxeHcYS63IdnruFOFFXvEgCZrRmm28d1FufMZWN%2B3tVtouxHYCUYUgTF8i1sOTJmvzgeXxqhibCkbwXGjw44EF1CJtBcjVzEIeMFkwf5SqbFROZ896C02Dk2ouxJIOywPDE74MkNbrn6y8cyoaFO9KSA9ZeqsUxCwYoToHuCa8ioSqyzWZ2y2Kro3UE1O0bcUJrWA8W6Jxl%2FOMy6xn5M1SfB5ZOsHCWEfbtV6JuTYeU2xzlzdeQI%2BEezUYe3rqhlV4UJnZ7Z8jBtGQ2LT6BuG4LEdiLRb0qYZcNiu5uvMR%2BPO%2BArYgUoe3rl%2FjsQRyj5QZz5KB%2F%2FzEUu0Dn2%2FcD5EeYF4JJoRSFq0tPCb1IxkwPgup4g2F9VgDwXa9I2nTC%2FRYrQ5s0jNwNdOkdK%2BKd6z4vgBG5eX%2Bkh8zC%2FCUnen8bZ0hD7GDC09qvEBjqkAdREi21KG62Vx7iKnj7ZswrGF7A0rtGNy0wCJzVZ96MBgWwaGmmnmz8YYOsti33Aw5bZ0P52bRi6l11QKYWc4yftFUoFDY2WscX85eA94ltSUKb10tWtkO%2BLKawmY%2BkBywGOeLodhfvDv%2BedSn709I3oSm1xUzz5Tou9VGJYy3A%2BE5DdDLyrcv3uTAXhMIfcPJ%2BHQdK58iHmQpGVnoFziQHcOjVb&X-Amz-Signature=f6a28a1edd2fecc5a74328144b9a11037118652707e08b973fa2399fa5953311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHGX533%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZdp2gGxJeo3mJbp4Jb0sL0YdyXIX%2BIWlgYJQaMNjZ2gIhAM2MlS5hSBGyswOznM7tNvgbkUoQWhVjrdfCgEtBcay2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7bZMWE%2BYLxdsY0lYq3AP6L4wqY%2F8YWeowcz%2FlHzpbTpkblwksSmHkJzqej27cyyegiFjNO5JnkYQ1tXeid80MaVlgpsreGdctYtJQ4hKeAuLprDSPz0nLx2NRRHbiebzF%2BfHvgOPziOSliKJrGNuZ4UokpwNJ9UZYXYzPm141b6tkV3Z3DYOwqoGDykWWqn67zLiinVH4JNq8U%2BlFBYqAy63SDdwpIxeHcYS63IdnruFOFFXvEgCZrRmm28d1FufMZWN%2B3tVtouxHYCUYUgTF8i1sOTJmvzgeXxqhibCkbwXGjw44EF1CJtBcjVzEIeMFkwf5SqbFROZ896C02Dk2ouxJIOywPDE74MkNbrn6y8cyoaFO9KSA9ZeqsUxCwYoToHuCa8ioSqyzWZ2y2Kro3UE1O0bcUJrWA8W6Jxl%2FOMy6xn5M1SfB5ZOsHCWEfbtV6JuTYeU2xzlzdeQI%2BEezUYe3rqhlV4UJnZ7Z8jBtGQ2LT6BuG4LEdiLRb0qYZcNiu5uvMR%2BPO%2BArYgUoe3rl%2FjsQRyj5QZz5KB%2F%2FzEUu0Dn2%2FcD5EeYF4JJoRSFq0tPCb1IxkwPgup4g2F9VgDwXa9I2nTC%2FRYrQ5s0jNwNdOkdK%2BKd6z4vgBG5eX%2Bkh8zC%2FCUnen8bZ0hD7GDC09qvEBjqkAdREi21KG62Vx7iKnj7ZswrGF7A0rtGNy0wCJzVZ96MBgWwaGmmnmz8YYOsti33Aw5bZ0P52bRi6l11QKYWc4yftFUoFDY2WscX85eA94ltSUKb10tWtkO%2BLKawmY%2BkBywGOeLodhfvDv%2BedSn709I3oSm1xUzz5Tou9VGJYy3A%2BE5DdDLyrcv3uTAXhMIfcPJ%2BHQdK58iHmQpGVnoFziQHcOjVb&X-Amz-Signature=b16e8b27a51f642b2c622bb90c2b1288a07d67dbf66b9a5e6ae0fe8e915e0fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHGX533%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZdp2gGxJeo3mJbp4Jb0sL0YdyXIX%2BIWlgYJQaMNjZ2gIhAM2MlS5hSBGyswOznM7tNvgbkUoQWhVjrdfCgEtBcay2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7bZMWE%2BYLxdsY0lYq3AP6L4wqY%2F8YWeowcz%2FlHzpbTpkblwksSmHkJzqej27cyyegiFjNO5JnkYQ1tXeid80MaVlgpsreGdctYtJQ4hKeAuLprDSPz0nLx2NRRHbiebzF%2BfHvgOPziOSliKJrGNuZ4UokpwNJ9UZYXYzPm141b6tkV3Z3DYOwqoGDykWWqn67zLiinVH4JNq8U%2BlFBYqAy63SDdwpIxeHcYS63IdnruFOFFXvEgCZrRmm28d1FufMZWN%2B3tVtouxHYCUYUgTF8i1sOTJmvzgeXxqhibCkbwXGjw44EF1CJtBcjVzEIeMFkwf5SqbFROZ896C02Dk2ouxJIOywPDE74MkNbrn6y8cyoaFO9KSA9ZeqsUxCwYoToHuCa8ioSqyzWZ2y2Kro3UE1O0bcUJrWA8W6Jxl%2FOMy6xn5M1SfB5ZOsHCWEfbtV6JuTYeU2xzlzdeQI%2BEezUYe3rqhlV4UJnZ7Z8jBtGQ2LT6BuG4LEdiLRb0qYZcNiu5uvMR%2BPO%2BArYgUoe3rl%2FjsQRyj5QZz5KB%2F%2FzEUu0Dn2%2FcD5EeYF4JJoRSFq0tPCb1IxkwPgup4g2F9VgDwXa9I2nTC%2FRYrQ5s0jNwNdOkdK%2BKd6z4vgBG5eX%2Bkh8zC%2FCUnen8bZ0hD7GDC09qvEBjqkAdREi21KG62Vx7iKnj7ZswrGF7A0rtGNy0wCJzVZ96MBgWwaGmmnmz8YYOsti33Aw5bZ0P52bRi6l11QKYWc4yftFUoFDY2WscX85eA94ltSUKb10tWtkO%2BLKawmY%2BkBywGOeLodhfvDv%2BedSn709I3oSm1xUzz5Tou9VGJYy3A%2BE5DdDLyrcv3uTAXhMIfcPJ%2BHQdK58iHmQpGVnoFziQHcOjVb&X-Amz-Signature=b699dd83c526473d43fb6def2c6077e8d935b73963b87568ca59c64bef444180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHGX533%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZdp2gGxJeo3mJbp4Jb0sL0YdyXIX%2BIWlgYJQaMNjZ2gIhAM2MlS5hSBGyswOznM7tNvgbkUoQWhVjrdfCgEtBcay2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7bZMWE%2BYLxdsY0lYq3AP6L4wqY%2F8YWeowcz%2FlHzpbTpkblwksSmHkJzqej27cyyegiFjNO5JnkYQ1tXeid80MaVlgpsreGdctYtJQ4hKeAuLprDSPz0nLx2NRRHbiebzF%2BfHvgOPziOSliKJrGNuZ4UokpwNJ9UZYXYzPm141b6tkV3Z3DYOwqoGDykWWqn67zLiinVH4JNq8U%2BlFBYqAy63SDdwpIxeHcYS63IdnruFOFFXvEgCZrRmm28d1FufMZWN%2B3tVtouxHYCUYUgTF8i1sOTJmvzgeXxqhibCkbwXGjw44EF1CJtBcjVzEIeMFkwf5SqbFROZ896C02Dk2ouxJIOywPDE74MkNbrn6y8cyoaFO9KSA9ZeqsUxCwYoToHuCa8ioSqyzWZ2y2Kro3UE1O0bcUJrWA8W6Jxl%2FOMy6xn5M1SfB5ZOsHCWEfbtV6JuTYeU2xzlzdeQI%2BEezUYe3rqhlV4UJnZ7Z8jBtGQ2LT6BuG4LEdiLRb0qYZcNiu5uvMR%2BPO%2BArYgUoe3rl%2FjsQRyj5QZz5KB%2F%2FzEUu0Dn2%2FcD5EeYF4JJoRSFq0tPCb1IxkwPgup4g2F9VgDwXa9I2nTC%2FRYrQ5s0jNwNdOkdK%2BKd6z4vgBG5eX%2Bkh8zC%2FCUnen8bZ0hD7GDC09qvEBjqkAdREi21KG62Vx7iKnj7ZswrGF7A0rtGNy0wCJzVZ96MBgWwaGmmnmz8YYOsti33Aw5bZ0P52bRi6l11QKYWc4yftFUoFDY2WscX85eA94ltSUKb10tWtkO%2BLKawmY%2BkBywGOeLodhfvDv%2BedSn709I3oSm1xUzz5Tou9VGJYy3A%2BE5DdDLyrcv3uTAXhMIfcPJ%2BHQdK58iHmQpGVnoFziQHcOjVb&X-Amz-Signature=479dbfe6dceb010db0c085e655d92c98f8602ea23b7b28eaac53ebf2680ea016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHGX533%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZdp2gGxJeo3mJbp4Jb0sL0YdyXIX%2BIWlgYJQaMNjZ2gIhAM2MlS5hSBGyswOznM7tNvgbkUoQWhVjrdfCgEtBcay2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7bZMWE%2BYLxdsY0lYq3AP6L4wqY%2F8YWeowcz%2FlHzpbTpkblwksSmHkJzqej27cyyegiFjNO5JnkYQ1tXeid80MaVlgpsreGdctYtJQ4hKeAuLprDSPz0nLx2NRRHbiebzF%2BfHvgOPziOSliKJrGNuZ4UokpwNJ9UZYXYzPm141b6tkV3Z3DYOwqoGDykWWqn67zLiinVH4JNq8U%2BlFBYqAy63SDdwpIxeHcYS63IdnruFOFFXvEgCZrRmm28d1FufMZWN%2B3tVtouxHYCUYUgTF8i1sOTJmvzgeXxqhibCkbwXGjw44EF1CJtBcjVzEIeMFkwf5SqbFROZ896C02Dk2ouxJIOywPDE74MkNbrn6y8cyoaFO9KSA9ZeqsUxCwYoToHuCa8ioSqyzWZ2y2Kro3UE1O0bcUJrWA8W6Jxl%2FOMy6xn5M1SfB5ZOsHCWEfbtV6JuTYeU2xzlzdeQI%2BEezUYe3rqhlV4UJnZ7Z8jBtGQ2LT6BuG4LEdiLRb0qYZcNiu5uvMR%2BPO%2BArYgUoe3rl%2FjsQRyj5QZz5KB%2F%2FzEUu0Dn2%2FcD5EeYF4JJoRSFq0tPCb1IxkwPgup4g2F9VgDwXa9I2nTC%2FRYrQ5s0jNwNdOkdK%2BKd6z4vgBG5eX%2Bkh8zC%2FCUnen8bZ0hD7GDC09qvEBjqkAdREi21KG62Vx7iKnj7ZswrGF7A0rtGNy0wCJzVZ96MBgWwaGmmnmz8YYOsti33Aw5bZ0P52bRi6l11QKYWc4yftFUoFDY2WscX85eA94ltSUKb10tWtkO%2BLKawmY%2BkBywGOeLodhfvDv%2BedSn709I3oSm1xUzz5Tou9VGJYy3A%2BE5DdDLyrcv3uTAXhMIfcPJ%2BHQdK58iHmQpGVnoFziQHcOjVb&X-Amz-Signature=029507aae5d1d611d4c6bf0b062899e88f4573ae04edab68db6c27e64e4185fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHGX533%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZdp2gGxJeo3mJbp4Jb0sL0YdyXIX%2BIWlgYJQaMNjZ2gIhAM2MlS5hSBGyswOznM7tNvgbkUoQWhVjrdfCgEtBcay2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7bZMWE%2BYLxdsY0lYq3AP6L4wqY%2F8YWeowcz%2FlHzpbTpkblwksSmHkJzqej27cyyegiFjNO5JnkYQ1tXeid80MaVlgpsreGdctYtJQ4hKeAuLprDSPz0nLx2NRRHbiebzF%2BfHvgOPziOSliKJrGNuZ4UokpwNJ9UZYXYzPm141b6tkV3Z3DYOwqoGDykWWqn67zLiinVH4JNq8U%2BlFBYqAy63SDdwpIxeHcYS63IdnruFOFFXvEgCZrRmm28d1FufMZWN%2B3tVtouxHYCUYUgTF8i1sOTJmvzgeXxqhibCkbwXGjw44EF1CJtBcjVzEIeMFkwf5SqbFROZ896C02Dk2ouxJIOywPDE74MkNbrn6y8cyoaFO9KSA9ZeqsUxCwYoToHuCa8ioSqyzWZ2y2Kro3UE1O0bcUJrWA8W6Jxl%2FOMy6xn5M1SfB5ZOsHCWEfbtV6JuTYeU2xzlzdeQI%2BEezUYe3rqhlV4UJnZ7Z8jBtGQ2LT6BuG4LEdiLRb0qYZcNiu5uvMR%2BPO%2BArYgUoe3rl%2FjsQRyj5QZz5KB%2F%2FzEUu0Dn2%2FcD5EeYF4JJoRSFq0tPCb1IxkwPgup4g2F9VgDwXa9I2nTC%2FRYrQ5s0jNwNdOkdK%2BKd6z4vgBG5eX%2Bkh8zC%2FCUnen8bZ0hD7GDC09qvEBjqkAdREi21KG62Vx7iKnj7ZswrGF7A0rtGNy0wCJzVZ96MBgWwaGmmnmz8YYOsti33Aw5bZ0P52bRi6l11QKYWc4yftFUoFDY2WscX85eA94ltSUKb10tWtkO%2BLKawmY%2BkBywGOeLodhfvDv%2BedSn709I3oSm1xUzz5Tou9VGJYy3A%2BE5DdDLyrcv3uTAXhMIfcPJ%2BHQdK58iHmQpGVnoFziQHcOjVb&X-Amz-Signature=5fd0c07b5f2a64c6703b38ad5b6baf85b4fc15eb2069036a8e7ddc49aa0055e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHGX533%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZdp2gGxJeo3mJbp4Jb0sL0YdyXIX%2BIWlgYJQaMNjZ2gIhAM2MlS5hSBGyswOznM7tNvgbkUoQWhVjrdfCgEtBcay2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7bZMWE%2BYLxdsY0lYq3AP6L4wqY%2F8YWeowcz%2FlHzpbTpkblwksSmHkJzqej27cyyegiFjNO5JnkYQ1tXeid80MaVlgpsreGdctYtJQ4hKeAuLprDSPz0nLx2NRRHbiebzF%2BfHvgOPziOSliKJrGNuZ4UokpwNJ9UZYXYzPm141b6tkV3Z3DYOwqoGDykWWqn67zLiinVH4JNq8U%2BlFBYqAy63SDdwpIxeHcYS63IdnruFOFFXvEgCZrRmm28d1FufMZWN%2B3tVtouxHYCUYUgTF8i1sOTJmvzgeXxqhibCkbwXGjw44EF1CJtBcjVzEIeMFkwf5SqbFROZ896C02Dk2ouxJIOywPDE74MkNbrn6y8cyoaFO9KSA9ZeqsUxCwYoToHuCa8ioSqyzWZ2y2Kro3UE1O0bcUJrWA8W6Jxl%2FOMy6xn5M1SfB5ZOsHCWEfbtV6JuTYeU2xzlzdeQI%2BEezUYe3rqhlV4UJnZ7Z8jBtGQ2LT6BuG4LEdiLRb0qYZcNiu5uvMR%2BPO%2BArYgUoe3rl%2FjsQRyj5QZz5KB%2F%2FzEUu0Dn2%2FcD5EeYF4JJoRSFq0tPCb1IxkwPgup4g2F9VgDwXa9I2nTC%2FRYrQ5s0jNwNdOkdK%2BKd6z4vgBG5eX%2Bkh8zC%2FCUnen8bZ0hD7GDC09qvEBjqkAdREi21KG62Vx7iKnj7ZswrGF7A0rtGNy0wCJzVZ96MBgWwaGmmnmz8YYOsti33Aw5bZ0P52bRi6l11QKYWc4yftFUoFDY2WscX85eA94ltSUKb10tWtkO%2BLKawmY%2BkBywGOeLodhfvDv%2BedSn709I3oSm1xUzz5Tou9VGJYy3A%2BE5DdDLyrcv3uTAXhMIfcPJ%2BHQdK58iHmQpGVnoFziQHcOjVb&X-Amz-Signature=35e48115c68d5e8a854b71ffb8954b3cb57b3be46d5ada52000d864ec0d8117f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LW6IVF%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuGmUqw6UGBjI6eTtBchwPPy8GwG%2FjfJcO%2Fm0PbnFYRQIhAJ%2BA8YZneF9PYAxG%2F8NwEs0ViFi%2B%2FO%2F1l%2FvirhgQXmS8KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyny8m%2FnEwMyHTFqgwq3APGobvFP002AW0MqG1iiV7pz0c4Z%2BeLxt248Msps3WjSaNluVKCYgtEH3MajJa%2FOnujiyDF1KutUmKByCvD12GvYJ4fjOOVgIXBm2SRQTaT0Cy9E7Tw5RJ1YTtWp6NKzzhrgMWeTmNiOV7UDfySjbwzVOnqWb3Sw%2FCA%2FbiIjs0N392kGKld9gVKKqyqEt%2BHIB49sEkvx%2B5qVdCm16XyACnO9ftc4RWAViltvJ7UPY3rn%2FDjbyEcpoOPAYBnSeCxSFuH9%2F15bsE1PGYbYUoJZFzPwhcjgThvR15PRkACLR5eFhoIWQWWcOuzqYaarzCrgr8vbUfwamQKlxOp1ISNuSdcN%2FFwxw2N2NsmjDsm%2B2hFhvdc2OyYZUe94vQIqHsTEsVoaXxJdK%2Fi2Vg4gnK1r4Z3T4ouDY85a1oCP3%2FQLX5LGoYAJftRYcKo38ABUVmX7s5Kka05vVNhEl7DiSXz5km%2BPMYa7OQBumAd89mxP1ATjNLGYkgF8%2Bto9ahgBj6JNkUGUd%2FFhAzBEi%2BnNuPHE8Hk7mOD0euwUSJZ1QWJv4GuxYu%2FvlqHyIABgS5W0dY9pB9AP7P%2BiZW2CKtvLugpgZ6UBNAVlNbHOZ%2FUQkQ9tZ%2FUZCMevfEn1ah8xIjK4jDh9avEBjqkASWUcPSYWBauPp097crjPPHLhW6Tjx1IF%2B5a9rXKptL54PNkP42UATqnEkjgM46%2FxihzHrQGQhNhOJSWtS6crtw%2BXWVVeXpJ1qU8xoR%2FP2nO%2FFsOZWoGYy%2F0TRpv1pZBuMqcwJKwoDnTB3YrtqeLClwImH8Kq8YvIvuji20FZhbKyemr9hQ3zWHb5Gwlgy0Ej4svT1nlc9jb65Vc0HdJCDy2HmCe&X-Amz-Signature=0e204d210f40470329491baaed60528fe4085a80375d01329622a5bd2f6ee16f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHGX533%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZdp2gGxJeo3mJbp4Jb0sL0YdyXIX%2BIWlgYJQaMNjZ2gIhAM2MlS5hSBGyswOznM7tNvgbkUoQWhVjrdfCgEtBcay2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7bZMWE%2BYLxdsY0lYq3AP6L4wqY%2F8YWeowcz%2FlHzpbTpkblwksSmHkJzqej27cyyegiFjNO5JnkYQ1tXeid80MaVlgpsreGdctYtJQ4hKeAuLprDSPz0nLx2NRRHbiebzF%2BfHvgOPziOSliKJrGNuZ4UokpwNJ9UZYXYzPm141b6tkV3Z3DYOwqoGDykWWqn67zLiinVH4JNq8U%2BlFBYqAy63SDdwpIxeHcYS63IdnruFOFFXvEgCZrRmm28d1FufMZWN%2B3tVtouxHYCUYUgTF8i1sOTJmvzgeXxqhibCkbwXGjw44EF1CJtBcjVzEIeMFkwf5SqbFROZ896C02Dk2ouxJIOywPDE74MkNbrn6y8cyoaFO9KSA9ZeqsUxCwYoToHuCa8ioSqyzWZ2y2Kro3UE1O0bcUJrWA8W6Jxl%2FOMy6xn5M1SfB5ZOsHCWEfbtV6JuTYeU2xzlzdeQI%2BEezUYe3rqhlV4UJnZ7Z8jBtGQ2LT6BuG4LEdiLRb0qYZcNiu5uvMR%2BPO%2BArYgUoe3rl%2FjsQRyj5QZz5KB%2F%2FzEUu0Dn2%2FcD5EeYF4JJoRSFq0tPCb1IxkwPgup4g2F9VgDwXa9I2nTC%2FRYrQ5s0jNwNdOkdK%2BKd6z4vgBG5eX%2Bkh8zC%2FCUnen8bZ0hD7GDC09qvEBjqkAdREi21KG62Vx7iKnj7ZswrGF7A0rtGNy0wCJzVZ96MBgWwaGmmnmz8YYOsti33Aw5bZ0P52bRi6l11QKYWc4yftFUoFDY2WscX85eA94ltSUKb10tWtkO%2BLKawmY%2BkBywGOeLodhfvDv%2BedSn709I3oSm1xUzz5Tou9VGJYy3A%2BE5DdDLyrcv3uTAXhMIfcPJ%2BHQdK58iHmQpGVnoFziQHcOjVb&X-Amz-Signature=cbcbc9fb61f5d05a443fdda0a31647fde9732a5e81abef11758c56bcab42ebc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCYXPYU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8uuvbuzPXMDDP0KHN25IKdvqDbyi1QOVsd8WXy4uHUAiEA4dFhoaA%2FNRLl26zjf2M1EVyJM9A4RRyntHyW17CN9ZcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FsAKWAzq4y%2B8LucyrcA8Sns1Dp1J1bvHlkXp9Vdi1%2BO4V6AnqhyVAohUamhxMQ3APqZqyDLCdHTB8Z6QEopy93PTYyaptAfpy5SGNcvk4rszGcYvnNyYbciupAesaqJMkm5lnkO9j7MRFob01%2FZpW%2BSxRDwqPl%2BchLfgrRRWsGLpPGbYC0%2FhrpEDoYAZKgB4WV6jV%2BRivzGdRZtcTOl4l5SqsjmY3T8bBFKYH8Yj8IjhjYtzsM2g%2BCxaEHZ8iTtMepy28TiyBBMLaRNYNHSUfQe1WN%2BrIRspm6d5bW4Q%2F16CnoMm3jQNOWIhXX%2FSbKbzFCWA0JzILWjSSeCZQW6IcQCcn4azljiJXRVm4HdzfdUFpJTn1ycBkKS6U3%2FcKTOWskJzHoBgMaQ6HRDpKuQrjF2M8Ugcj6y19b6u%2FflP4pPUQ3l6Llw2Y1NL6%2Fdih2bZDRRuewbzQbvBRfuy0K%2B2IR361TdQjYK3JJ2IuKHF%2F%2BjpHglKUAy%2Be2Cp08uav8n2vBFXamdsebmmFSeZIIkquBEKo2NF8GhxdkW2wpV0bDhymZ2MyJ7DfvjBOVHijjaetoWq9WaXLAzdnNfrz0zeUT78ohInW1KjgkoNg47QWm%2BR7%2FSNQYWgLpdN%2FhjZqiw%2BEDPAnyJj8iu4tVMKf1q8QGOqUBQc6eolzwEj3Nl7sIKkRRVOWwd9n2Hb5uWW3nHVBf6lGIrN8DNPZM6SY3OprNggA4XN0BDOA4At%2FnlvI%2BSg5W%2F8HRjHaT2kBTOcJA6G8Gn79QRhr6n9LCmlYV05ch%2Fw%2BcrSISe5i%2FhpjFh7Cxa0BekvhOCWrG8qaa6aeSTdbOU3K%2FwuzFqumRFr1sud6jNifEqW2uDHCOhvszrJYoe0lYEV8SWw93&X-Amz-Signature=1a2115a298b93e0476be83a23261057ad444d6157acaf9aa41fdddadaa77e749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCYXPYU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8uuvbuzPXMDDP0KHN25IKdvqDbyi1QOVsd8WXy4uHUAiEA4dFhoaA%2FNRLl26zjf2M1EVyJM9A4RRyntHyW17CN9ZcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FsAKWAzq4y%2B8LucyrcA8Sns1Dp1J1bvHlkXp9Vdi1%2BO4V6AnqhyVAohUamhxMQ3APqZqyDLCdHTB8Z6QEopy93PTYyaptAfpy5SGNcvk4rszGcYvnNyYbciupAesaqJMkm5lnkO9j7MRFob01%2FZpW%2BSxRDwqPl%2BchLfgrRRWsGLpPGbYC0%2FhrpEDoYAZKgB4WV6jV%2BRivzGdRZtcTOl4l5SqsjmY3T8bBFKYH8Yj8IjhjYtzsM2g%2BCxaEHZ8iTtMepy28TiyBBMLaRNYNHSUfQe1WN%2BrIRspm6d5bW4Q%2F16CnoMm3jQNOWIhXX%2FSbKbzFCWA0JzILWjSSeCZQW6IcQCcn4azljiJXRVm4HdzfdUFpJTn1ycBkKS6U3%2FcKTOWskJzHoBgMaQ6HRDpKuQrjF2M8Ugcj6y19b6u%2FflP4pPUQ3l6Llw2Y1NL6%2Fdih2bZDRRuewbzQbvBRfuy0K%2B2IR361TdQjYK3JJ2IuKHF%2F%2BjpHglKUAy%2Be2Cp08uav8n2vBFXamdsebmmFSeZIIkquBEKo2NF8GhxdkW2wpV0bDhymZ2MyJ7DfvjBOVHijjaetoWq9WaXLAzdnNfrz0zeUT78ohInW1KjgkoNg47QWm%2BR7%2FSNQYWgLpdN%2FhjZqiw%2BEDPAnyJj8iu4tVMKf1q8QGOqUBQc6eolzwEj3Nl7sIKkRRVOWwd9n2Hb5uWW3nHVBf6lGIrN8DNPZM6SY3OprNggA4XN0BDOA4At%2FnlvI%2BSg5W%2F8HRjHaT2kBTOcJA6G8Gn79QRhr6n9LCmlYV05ch%2Fw%2BcrSISe5i%2FhpjFh7Cxa0BekvhOCWrG8qaa6aeSTdbOU3K%2FwuzFqumRFr1sud6jNifEqW2uDHCOhvszrJYoe0lYEV8SWw93&X-Amz-Signature=583d03b6a340877ac9d655ef61d19842fe977306d8fadf3a2102443390097020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCYXPYU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8uuvbuzPXMDDP0KHN25IKdvqDbyi1QOVsd8WXy4uHUAiEA4dFhoaA%2FNRLl26zjf2M1EVyJM9A4RRyntHyW17CN9ZcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FsAKWAzq4y%2B8LucyrcA8Sns1Dp1J1bvHlkXp9Vdi1%2BO4V6AnqhyVAohUamhxMQ3APqZqyDLCdHTB8Z6QEopy93PTYyaptAfpy5SGNcvk4rszGcYvnNyYbciupAesaqJMkm5lnkO9j7MRFob01%2FZpW%2BSxRDwqPl%2BchLfgrRRWsGLpPGbYC0%2FhrpEDoYAZKgB4WV6jV%2BRivzGdRZtcTOl4l5SqsjmY3T8bBFKYH8Yj8IjhjYtzsM2g%2BCxaEHZ8iTtMepy28TiyBBMLaRNYNHSUfQe1WN%2BrIRspm6d5bW4Q%2F16CnoMm3jQNOWIhXX%2FSbKbzFCWA0JzILWjSSeCZQW6IcQCcn4azljiJXRVm4HdzfdUFpJTn1ycBkKS6U3%2FcKTOWskJzHoBgMaQ6HRDpKuQrjF2M8Ugcj6y19b6u%2FflP4pPUQ3l6Llw2Y1NL6%2Fdih2bZDRRuewbzQbvBRfuy0K%2B2IR361TdQjYK3JJ2IuKHF%2F%2BjpHglKUAy%2Be2Cp08uav8n2vBFXamdsebmmFSeZIIkquBEKo2NF8GhxdkW2wpV0bDhymZ2MyJ7DfvjBOVHijjaetoWq9WaXLAzdnNfrz0zeUT78ohInW1KjgkoNg47QWm%2BR7%2FSNQYWgLpdN%2FhjZqiw%2BEDPAnyJj8iu4tVMKf1q8QGOqUBQc6eolzwEj3Nl7sIKkRRVOWwd9n2Hb5uWW3nHVBf6lGIrN8DNPZM6SY3OprNggA4XN0BDOA4At%2FnlvI%2BSg5W%2F8HRjHaT2kBTOcJA6G8Gn79QRhr6n9LCmlYV05ch%2Fw%2BcrSISe5i%2FhpjFh7Cxa0BekvhOCWrG8qaa6aeSTdbOU3K%2FwuzFqumRFr1sud6jNifEqW2uDHCOhvszrJYoe0lYEV8SWw93&X-Amz-Signature=ada44dbee956603d90769f61b447d61b973025ad5c4c573bdd71f0ddeb4a601b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCYXPYU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8uuvbuzPXMDDP0KHN25IKdvqDbyi1QOVsd8WXy4uHUAiEA4dFhoaA%2FNRLl26zjf2M1EVyJM9A4RRyntHyW17CN9ZcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FsAKWAzq4y%2B8LucyrcA8Sns1Dp1J1bvHlkXp9Vdi1%2BO4V6AnqhyVAohUamhxMQ3APqZqyDLCdHTB8Z6QEopy93PTYyaptAfpy5SGNcvk4rszGcYvnNyYbciupAesaqJMkm5lnkO9j7MRFob01%2FZpW%2BSxRDwqPl%2BchLfgrRRWsGLpPGbYC0%2FhrpEDoYAZKgB4WV6jV%2BRivzGdRZtcTOl4l5SqsjmY3T8bBFKYH8Yj8IjhjYtzsM2g%2BCxaEHZ8iTtMepy28TiyBBMLaRNYNHSUfQe1WN%2BrIRspm6d5bW4Q%2F16CnoMm3jQNOWIhXX%2FSbKbzFCWA0JzILWjSSeCZQW6IcQCcn4azljiJXRVm4HdzfdUFpJTn1ycBkKS6U3%2FcKTOWskJzHoBgMaQ6HRDpKuQrjF2M8Ugcj6y19b6u%2FflP4pPUQ3l6Llw2Y1NL6%2Fdih2bZDRRuewbzQbvBRfuy0K%2B2IR361TdQjYK3JJ2IuKHF%2F%2BjpHglKUAy%2Be2Cp08uav8n2vBFXamdsebmmFSeZIIkquBEKo2NF8GhxdkW2wpV0bDhymZ2MyJ7DfvjBOVHijjaetoWq9WaXLAzdnNfrz0zeUT78ohInW1KjgkoNg47QWm%2BR7%2FSNQYWgLpdN%2FhjZqiw%2BEDPAnyJj8iu4tVMKf1q8QGOqUBQc6eolzwEj3Nl7sIKkRRVOWwd9n2Hb5uWW3nHVBf6lGIrN8DNPZM6SY3OprNggA4XN0BDOA4At%2FnlvI%2BSg5W%2F8HRjHaT2kBTOcJA6G8Gn79QRhr6n9LCmlYV05ch%2Fw%2BcrSISe5i%2FhpjFh7Cxa0BekvhOCWrG8qaa6aeSTdbOU3K%2FwuzFqumRFr1sud6jNifEqW2uDHCOhvszrJYoe0lYEV8SWw93&X-Amz-Signature=eb23cda99404ccedd7b59d60574000dbe521c5f9345c768f709115c0e8c38273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCYXPYU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8uuvbuzPXMDDP0KHN25IKdvqDbyi1QOVsd8WXy4uHUAiEA4dFhoaA%2FNRLl26zjf2M1EVyJM9A4RRyntHyW17CN9ZcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FsAKWAzq4y%2B8LucyrcA8Sns1Dp1J1bvHlkXp9Vdi1%2BO4V6AnqhyVAohUamhxMQ3APqZqyDLCdHTB8Z6QEopy93PTYyaptAfpy5SGNcvk4rszGcYvnNyYbciupAesaqJMkm5lnkO9j7MRFob01%2FZpW%2BSxRDwqPl%2BchLfgrRRWsGLpPGbYC0%2FhrpEDoYAZKgB4WV6jV%2BRivzGdRZtcTOl4l5SqsjmY3T8bBFKYH8Yj8IjhjYtzsM2g%2BCxaEHZ8iTtMepy28TiyBBMLaRNYNHSUfQe1WN%2BrIRspm6d5bW4Q%2F16CnoMm3jQNOWIhXX%2FSbKbzFCWA0JzILWjSSeCZQW6IcQCcn4azljiJXRVm4HdzfdUFpJTn1ycBkKS6U3%2FcKTOWskJzHoBgMaQ6HRDpKuQrjF2M8Ugcj6y19b6u%2FflP4pPUQ3l6Llw2Y1NL6%2Fdih2bZDRRuewbzQbvBRfuy0K%2B2IR361TdQjYK3JJ2IuKHF%2F%2BjpHglKUAy%2Be2Cp08uav8n2vBFXamdsebmmFSeZIIkquBEKo2NF8GhxdkW2wpV0bDhymZ2MyJ7DfvjBOVHijjaetoWq9WaXLAzdnNfrz0zeUT78ohInW1KjgkoNg47QWm%2BR7%2FSNQYWgLpdN%2FhjZqiw%2BEDPAnyJj8iu4tVMKf1q8QGOqUBQc6eolzwEj3Nl7sIKkRRVOWwd9n2Hb5uWW3nHVBf6lGIrN8DNPZM6SY3OprNggA4XN0BDOA4At%2FnlvI%2BSg5W%2F8HRjHaT2kBTOcJA6G8Gn79QRhr6n9LCmlYV05ch%2Fw%2BcrSISe5i%2FhpjFh7Cxa0BekvhOCWrG8qaa6aeSTdbOU3K%2FwuzFqumRFr1sud6jNifEqW2uDHCOhvszrJYoe0lYEV8SWw93&X-Amz-Signature=eaa9b62a7a4147350a47b2a75e60ddba0c420f1072cec14cee745332828faebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCYXPYU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8uuvbuzPXMDDP0KHN25IKdvqDbyi1QOVsd8WXy4uHUAiEA4dFhoaA%2FNRLl26zjf2M1EVyJM9A4RRyntHyW17CN9ZcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FsAKWAzq4y%2B8LucyrcA8Sns1Dp1J1bvHlkXp9Vdi1%2BO4V6AnqhyVAohUamhxMQ3APqZqyDLCdHTB8Z6QEopy93PTYyaptAfpy5SGNcvk4rszGcYvnNyYbciupAesaqJMkm5lnkO9j7MRFob01%2FZpW%2BSxRDwqPl%2BchLfgrRRWsGLpPGbYC0%2FhrpEDoYAZKgB4WV6jV%2BRivzGdRZtcTOl4l5SqsjmY3T8bBFKYH8Yj8IjhjYtzsM2g%2BCxaEHZ8iTtMepy28TiyBBMLaRNYNHSUfQe1WN%2BrIRspm6d5bW4Q%2F16CnoMm3jQNOWIhXX%2FSbKbzFCWA0JzILWjSSeCZQW6IcQCcn4azljiJXRVm4HdzfdUFpJTn1ycBkKS6U3%2FcKTOWskJzHoBgMaQ6HRDpKuQrjF2M8Ugcj6y19b6u%2FflP4pPUQ3l6Llw2Y1NL6%2Fdih2bZDRRuewbzQbvBRfuy0K%2B2IR361TdQjYK3JJ2IuKHF%2F%2BjpHglKUAy%2Be2Cp08uav8n2vBFXamdsebmmFSeZIIkquBEKo2NF8GhxdkW2wpV0bDhymZ2MyJ7DfvjBOVHijjaetoWq9WaXLAzdnNfrz0zeUT78ohInW1KjgkoNg47QWm%2BR7%2FSNQYWgLpdN%2FhjZqiw%2BEDPAnyJj8iu4tVMKf1q8QGOqUBQc6eolzwEj3Nl7sIKkRRVOWwd9n2Hb5uWW3nHVBf6lGIrN8DNPZM6SY3OprNggA4XN0BDOA4At%2FnlvI%2BSg5W%2F8HRjHaT2kBTOcJA6G8Gn79QRhr6n9LCmlYV05ch%2Fw%2BcrSISe5i%2FhpjFh7Cxa0BekvhOCWrG8qaa6aeSTdbOU3K%2FwuzFqumRFr1sud6jNifEqW2uDHCOhvszrJYoe0lYEV8SWw93&X-Amz-Signature=b34ba83f2a43e8f176e57f357eb45a13102f438a327fcc4e1aca753b77b7012f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCYXPYU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8uuvbuzPXMDDP0KHN25IKdvqDbyi1QOVsd8WXy4uHUAiEA4dFhoaA%2FNRLl26zjf2M1EVyJM9A4RRyntHyW17CN9ZcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FsAKWAzq4y%2B8LucyrcA8Sns1Dp1J1bvHlkXp9Vdi1%2BO4V6AnqhyVAohUamhxMQ3APqZqyDLCdHTB8Z6QEopy93PTYyaptAfpy5SGNcvk4rszGcYvnNyYbciupAesaqJMkm5lnkO9j7MRFob01%2FZpW%2BSxRDwqPl%2BchLfgrRRWsGLpPGbYC0%2FhrpEDoYAZKgB4WV6jV%2BRivzGdRZtcTOl4l5SqsjmY3T8bBFKYH8Yj8IjhjYtzsM2g%2BCxaEHZ8iTtMepy28TiyBBMLaRNYNHSUfQe1WN%2BrIRspm6d5bW4Q%2F16CnoMm3jQNOWIhXX%2FSbKbzFCWA0JzILWjSSeCZQW6IcQCcn4azljiJXRVm4HdzfdUFpJTn1ycBkKS6U3%2FcKTOWskJzHoBgMaQ6HRDpKuQrjF2M8Ugcj6y19b6u%2FflP4pPUQ3l6Llw2Y1NL6%2Fdih2bZDRRuewbzQbvBRfuy0K%2B2IR361TdQjYK3JJ2IuKHF%2F%2BjpHglKUAy%2Be2Cp08uav8n2vBFXamdsebmmFSeZIIkquBEKo2NF8GhxdkW2wpV0bDhymZ2MyJ7DfvjBOVHijjaetoWq9WaXLAzdnNfrz0zeUT78ohInW1KjgkoNg47QWm%2BR7%2FSNQYWgLpdN%2FhjZqiw%2BEDPAnyJj8iu4tVMKf1q8QGOqUBQc6eolzwEj3Nl7sIKkRRVOWwd9n2Hb5uWW3nHVBf6lGIrN8DNPZM6SY3OprNggA4XN0BDOA4At%2FnlvI%2BSg5W%2F8HRjHaT2kBTOcJA6G8Gn79QRhr6n9LCmlYV05ch%2Fw%2BcrSISe5i%2FhpjFh7Cxa0BekvhOCWrG8qaa6aeSTdbOU3K%2FwuzFqumRFr1sud6jNifEqW2uDHCOhvszrJYoe0lYEV8SWw93&X-Amz-Signature=abaec48d2ff72a707efcac5579be932f8e8d8f70750af932ff327a52b04e3695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCYXPYU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8uuvbuzPXMDDP0KHN25IKdvqDbyi1QOVsd8WXy4uHUAiEA4dFhoaA%2FNRLl26zjf2M1EVyJM9A4RRyntHyW17CN9ZcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FsAKWAzq4y%2B8LucyrcA8Sns1Dp1J1bvHlkXp9Vdi1%2BO4V6AnqhyVAohUamhxMQ3APqZqyDLCdHTB8Z6QEopy93PTYyaptAfpy5SGNcvk4rszGcYvnNyYbciupAesaqJMkm5lnkO9j7MRFob01%2FZpW%2BSxRDwqPl%2BchLfgrRRWsGLpPGbYC0%2FhrpEDoYAZKgB4WV6jV%2BRivzGdRZtcTOl4l5SqsjmY3T8bBFKYH8Yj8IjhjYtzsM2g%2BCxaEHZ8iTtMepy28TiyBBMLaRNYNHSUfQe1WN%2BrIRspm6d5bW4Q%2F16CnoMm3jQNOWIhXX%2FSbKbzFCWA0JzILWjSSeCZQW6IcQCcn4azljiJXRVm4HdzfdUFpJTn1ycBkKS6U3%2FcKTOWskJzHoBgMaQ6HRDpKuQrjF2M8Ugcj6y19b6u%2FflP4pPUQ3l6Llw2Y1NL6%2Fdih2bZDRRuewbzQbvBRfuy0K%2B2IR361TdQjYK3JJ2IuKHF%2F%2BjpHglKUAy%2Be2Cp08uav8n2vBFXamdsebmmFSeZIIkquBEKo2NF8GhxdkW2wpV0bDhymZ2MyJ7DfvjBOVHijjaetoWq9WaXLAzdnNfrz0zeUT78ohInW1KjgkoNg47QWm%2BR7%2FSNQYWgLpdN%2FhjZqiw%2BEDPAnyJj8iu4tVMKf1q8QGOqUBQc6eolzwEj3Nl7sIKkRRVOWwd9n2Hb5uWW3nHVBf6lGIrN8DNPZM6SY3OprNggA4XN0BDOA4At%2FnlvI%2BSg5W%2F8HRjHaT2kBTOcJA6G8Gn79QRhr6n9LCmlYV05ch%2Fw%2BcrSISe5i%2FhpjFh7Cxa0BekvhOCWrG8qaa6aeSTdbOU3K%2FwuzFqumRFr1sud6jNifEqW2uDHCOhvszrJYoe0lYEV8SWw93&X-Amz-Signature=53dc6aa25fa798b823379671cea9e514821d46406f623d534cd68b768d73155c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
