---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-28T21:22:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-28T21:22:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLOEHUVN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBgtiA36FAYx6aeZIFdM8fk%2FyDNUeDzHZldXmsidyIQ0AiAGWNra7l0cCN04O%2Fxw2xJATzlMNWrfL9dSqsXERueAbyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvNpiIrA1ldR7QeijKtwDryQcnUQseEdLbu%2Bi6yPWIK9KYSxGUGjfMJKX%2FLzGkJDxWP1KyRL8iFzCcs0Ieqv7bQjGmuJzwRUKGzN2D6KOqsiMBpZ5U3NwdLDb9Z6sLr83OOjbpX9WtZOviRcZhSTo3%2BoZ1oaE%2F3j6ygksHC0C8GXFSvBMy1YYpUjbp8s6jjDfldO%2BkxcpwxgMudNP6wC2jTQ%2FzQNZcd9G%2FLDXakvQ8Mx5528lZ7F%2BatNuTEw%2F1T3oSCCPq2dJq%2BkVYYc54OAS12vgcLJmr62ExlYhJE0TExxIP9jEzpjyWU6PE6FLn%2BXOT5aZg5SaBgMi8kl0KpsZU8d7cZIjhTtAL7EfByzJyZUbgMYPe1rrjVW1bD9WgUtXvwWnkXqPPoUafWv8YmI%2F408jq8tkj6FvIlHqFMFlstivArCoz5I2Dw%2FPgA5Lj0M7veAWHe%2BwzjoDjnmV0NR3HZy81UrlQqvPL96PXlA6XeucDecAMqtGOrOO7sg3cGzFjg93P7X3IgTJZ8qFuejGMCY1FAop3LjJvl1yvpfguLAdvOh%2FoMDQ12RbvynV3VwcewmEfSpAUXDW2beM1i0ByX85DQB2DgDQXsl23BeH1WTxvuFzHhDgBQTZdPw7prWfApoFecosvG6Y4f0w34OixAY6pgHQjzmw4ZyHJ1XWnyQLVCiwoApyYZLIzjy75q3z3YApNACqBQXaJAVPIgOYiJryGz7ChqXLZuHeOrFQBx4VvCl%2Fn4m7pMsWbnT9QwBgI7ugJJ2GYbwpzMnEf2A%2BVxYYB0cLgLq%2FiyA%2B%2BRHf4n5VzuihF%2BnJzYCxoaIQTCulLR41BPOhlYfx27GcNr2wTKuYUsES3SaEQaXgHLF8Mh%2Fjy3DvxGuJ93Lg&X-Amz-Signature=7d73be8536cf957eab3922ec02969c631ff390d5bbf46a28ad6e3e7411536487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLOEHUVN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBgtiA36FAYx6aeZIFdM8fk%2FyDNUeDzHZldXmsidyIQ0AiAGWNra7l0cCN04O%2Fxw2xJATzlMNWrfL9dSqsXERueAbyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvNpiIrA1ldR7QeijKtwDryQcnUQseEdLbu%2Bi6yPWIK9KYSxGUGjfMJKX%2FLzGkJDxWP1KyRL8iFzCcs0Ieqv7bQjGmuJzwRUKGzN2D6KOqsiMBpZ5U3NwdLDb9Z6sLr83OOjbpX9WtZOviRcZhSTo3%2BoZ1oaE%2F3j6ygksHC0C8GXFSvBMy1YYpUjbp8s6jjDfldO%2BkxcpwxgMudNP6wC2jTQ%2FzQNZcd9G%2FLDXakvQ8Mx5528lZ7F%2BatNuTEw%2F1T3oSCCPq2dJq%2BkVYYc54OAS12vgcLJmr62ExlYhJE0TExxIP9jEzpjyWU6PE6FLn%2BXOT5aZg5SaBgMi8kl0KpsZU8d7cZIjhTtAL7EfByzJyZUbgMYPe1rrjVW1bD9WgUtXvwWnkXqPPoUafWv8YmI%2F408jq8tkj6FvIlHqFMFlstivArCoz5I2Dw%2FPgA5Lj0M7veAWHe%2BwzjoDjnmV0NR3HZy81UrlQqvPL96PXlA6XeucDecAMqtGOrOO7sg3cGzFjg93P7X3IgTJZ8qFuejGMCY1FAop3LjJvl1yvpfguLAdvOh%2FoMDQ12RbvynV3VwcewmEfSpAUXDW2beM1i0ByX85DQB2DgDQXsl23BeH1WTxvuFzHhDgBQTZdPw7prWfApoFecosvG6Y4f0w34OixAY6pgHQjzmw4ZyHJ1XWnyQLVCiwoApyYZLIzjy75q3z3YApNACqBQXaJAVPIgOYiJryGz7ChqXLZuHeOrFQBx4VvCl%2Fn4m7pMsWbnT9QwBgI7ugJJ2GYbwpzMnEf2A%2BVxYYB0cLgLq%2FiyA%2B%2BRHf4n5VzuihF%2BnJzYCxoaIQTCulLR41BPOhlYfx27GcNr2wTKuYUsES3SaEQaXgHLF8Mh%2Fjy3DvxGuJ93Lg&X-Amz-Signature=c294e98e521a29b922661d2602194cf77ca551c49bff399eca996da7d2409c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLOEHUVN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBgtiA36FAYx6aeZIFdM8fk%2FyDNUeDzHZldXmsidyIQ0AiAGWNra7l0cCN04O%2Fxw2xJATzlMNWrfL9dSqsXERueAbyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvNpiIrA1ldR7QeijKtwDryQcnUQseEdLbu%2Bi6yPWIK9KYSxGUGjfMJKX%2FLzGkJDxWP1KyRL8iFzCcs0Ieqv7bQjGmuJzwRUKGzN2D6KOqsiMBpZ5U3NwdLDb9Z6sLr83OOjbpX9WtZOviRcZhSTo3%2BoZ1oaE%2F3j6ygksHC0C8GXFSvBMy1YYpUjbp8s6jjDfldO%2BkxcpwxgMudNP6wC2jTQ%2FzQNZcd9G%2FLDXakvQ8Mx5528lZ7F%2BatNuTEw%2F1T3oSCCPq2dJq%2BkVYYc54OAS12vgcLJmr62ExlYhJE0TExxIP9jEzpjyWU6PE6FLn%2BXOT5aZg5SaBgMi8kl0KpsZU8d7cZIjhTtAL7EfByzJyZUbgMYPe1rrjVW1bD9WgUtXvwWnkXqPPoUafWv8YmI%2F408jq8tkj6FvIlHqFMFlstivArCoz5I2Dw%2FPgA5Lj0M7veAWHe%2BwzjoDjnmV0NR3HZy81UrlQqvPL96PXlA6XeucDecAMqtGOrOO7sg3cGzFjg93P7X3IgTJZ8qFuejGMCY1FAop3LjJvl1yvpfguLAdvOh%2FoMDQ12RbvynV3VwcewmEfSpAUXDW2beM1i0ByX85DQB2DgDQXsl23BeH1WTxvuFzHhDgBQTZdPw7prWfApoFecosvG6Y4f0w34OixAY6pgHQjzmw4ZyHJ1XWnyQLVCiwoApyYZLIzjy75q3z3YApNACqBQXaJAVPIgOYiJryGz7ChqXLZuHeOrFQBx4VvCl%2Fn4m7pMsWbnT9QwBgI7ugJJ2GYbwpzMnEf2A%2BVxYYB0cLgLq%2FiyA%2B%2BRHf4n5VzuihF%2BnJzYCxoaIQTCulLR41BPOhlYfx27GcNr2wTKuYUsES3SaEQaXgHLF8Mh%2Fjy3DvxGuJ93Lg&X-Amz-Signature=af568d2685d28e55495dc3b89f3a5687c326c0d2030757703931ce9e6ce3b717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLOEHUVN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBgtiA36FAYx6aeZIFdM8fk%2FyDNUeDzHZldXmsidyIQ0AiAGWNra7l0cCN04O%2Fxw2xJATzlMNWrfL9dSqsXERueAbyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvNpiIrA1ldR7QeijKtwDryQcnUQseEdLbu%2Bi6yPWIK9KYSxGUGjfMJKX%2FLzGkJDxWP1KyRL8iFzCcs0Ieqv7bQjGmuJzwRUKGzN2D6KOqsiMBpZ5U3NwdLDb9Z6sLr83OOjbpX9WtZOviRcZhSTo3%2BoZ1oaE%2F3j6ygksHC0C8GXFSvBMy1YYpUjbp8s6jjDfldO%2BkxcpwxgMudNP6wC2jTQ%2FzQNZcd9G%2FLDXakvQ8Mx5528lZ7F%2BatNuTEw%2F1T3oSCCPq2dJq%2BkVYYc54OAS12vgcLJmr62ExlYhJE0TExxIP9jEzpjyWU6PE6FLn%2BXOT5aZg5SaBgMi8kl0KpsZU8d7cZIjhTtAL7EfByzJyZUbgMYPe1rrjVW1bD9WgUtXvwWnkXqPPoUafWv8YmI%2F408jq8tkj6FvIlHqFMFlstivArCoz5I2Dw%2FPgA5Lj0M7veAWHe%2BwzjoDjnmV0NR3HZy81UrlQqvPL96PXlA6XeucDecAMqtGOrOO7sg3cGzFjg93P7X3IgTJZ8qFuejGMCY1FAop3LjJvl1yvpfguLAdvOh%2FoMDQ12RbvynV3VwcewmEfSpAUXDW2beM1i0ByX85DQB2DgDQXsl23BeH1WTxvuFzHhDgBQTZdPw7prWfApoFecosvG6Y4f0w34OixAY6pgHQjzmw4ZyHJ1XWnyQLVCiwoApyYZLIzjy75q3z3YApNACqBQXaJAVPIgOYiJryGz7ChqXLZuHeOrFQBx4VvCl%2Fn4m7pMsWbnT9QwBgI7ugJJ2GYbwpzMnEf2A%2BVxYYB0cLgLq%2FiyA%2B%2BRHf4n5VzuihF%2BnJzYCxoaIQTCulLR41BPOhlYfx27GcNr2wTKuYUsES3SaEQaXgHLF8Mh%2Fjy3DvxGuJ93Lg&X-Amz-Signature=b9a4e99cfa0a1ac74c42a0d1463d676bb81d7bd226506aa5ed4bd3deb599a4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLOEHUVN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBgtiA36FAYx6aeZIFdM8fk%2FyDNUeDzHZldXmsidyIQ0AiAGWNra7l0cCN04O%2Fxw2xJATzlMNWrfL9dSqsXERueAbyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvNpiIrA1ldR7QeijKtwDryQcnUQseEdLbu%2Bi6yPWIK9KYSxGUGjfMJKX%2FLzGkJDxWP1KyRL8iFzCcs0Ieqv7bQjGmuJzwRUKGzN2D6KOqsiMBpZ5U3NwdLDb9Z6sLr83OOjbpX9WtZOviRcZhSTo3%2BoZ1oaE%2F3j6ygksHC0C8GXFSvBMy1YYpUjbp8s6jjDfldO%2BkxcpwxgMudNP6wC2jTQ%2FzQNZcd9G%2FLDXakvQ8Mx5528lZ7F%2BatNuTEw%2F1T3oSCCPq2dJq%2BkVYYc54OAS12vgcLJmr62ExlYhJE0TExxIP9jEzpjyWU6PE6FLn%2BXOT5aZg5SaBgMi8kl0KpsZU8d7cZIjhTtAL7EfByzJyZUbgMYPe1rrjVW1bD9WgUtXvwWnkXqPPoUafWv8YmI%2F408jq8tkj6FvIlHqFMFlstivArCoz5I2Dw%2FPgA5Lj0M7veAWHe%2BwzjoDjnmV0NR3HZy81UrlQqvPL96PXlA6XeucDecAMqtGOrOO7sg3cGzFjg93P7X3IgTJZ8qFuejGMCY1FAop3LjJvl1yvpfguLAdvOh%2FoMDQ12RbvynV3VwcewmEfSpAUXDW2beM1i0ByX85DQB2DgDQXsl23BeH1WTxvuFzHhDgBQTZdPw7prWfApoFecosvG6Y4f0w34OixAY6pgHQjzmw4ZyHJ1XWnyQLVCiwoApyYZLIzjy75q3z3YApNACqBQXaJAVPIgOYiJryGz7ChqXLZuHeOrFQBx4VvCl%2Fn4m7pMsWbnT9QwBgI7ugJJ2GYbwpzMnEf2A%2BVxYYB0cLgLq%2FiyA%2B%2BRHf4n5VzuihF%2BnJzYCxoaIQTCulLR41BPOhlYfx27GcNr2wTKuYUsES3SaEQaXgHLF8Mh%2Fjy3DvxGuJ93Lg&X-Amz-Signature=742eafe7891006507fd486244b3a3f54c01a13f197ece04b6c26d35317de2bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLOEHUVN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBgtiA36FAYx6aeZIFdM8fk%2FyDNUeDzHZldXmsidyIQ0AiAGWNra7l0cCN04O%2Fxw2xJATzlMNWrfL9dSqsXERueAbyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvNpiIrA1ldR7QeijKtwDryQcnUQseEdLbu%2Bi6yPWIK9KYSxGUGjfMJKX%2FLzGkJDxWP1KyRL8iFzCcs0Ieqv7bQjGmuJzwRUKGzN2D6KOqsiMBpZ5U3NwdLDb9Z6sLr83OOjbpX9WtZOviRcZhSTo3%2BoZ1oaE%2F3j6ygksHC0C8GXFSvBMy1YYpUjbp8s6jjDfldO%2BkxcpwxgMudNP6wC2jTQ%2FzQNZcd9G%2FLDXakvQ8Mx5528lZ7F%2BatNuTEw%2F1T3oSCCPq2dJq%2BkVYYc54OAS12vgcLJmr62ExlYhJE0TExxIP9jEzpjyWU6PE6FLn%2BXOT5aZg5SaBgMi8kl0KpsZU8d7cZIjhTtAL7EfByzJyZUbgMYPe1rrjVW1bD9WgUtXvwWnkXqPPoUafWv8YmI%2F408jq8tkj6FvIlHqFMFlstivArCoz5I2Dw%2FPgA5Lj0M7veAWHe%2BwzjoDjnmV0NR3HZy81UrlQqvPL96PXlA6XeucDecAMqtGOrOO7sg3cGzFjg93P7X3IgTJZ8qFuejGMCY1FAop3LjJvl1yvpfguLAdvOh%2FoMDQ12RbvynV3VwcewmEfSpAUXDW2beM1i0ByX85DQB2DgDQXsl23BeH1WTxvuFzHhDgBQTZdPw7prWfApoFecosvG6Y4f0w34OixAY6pgHQjzmw4ZyHJ1XWnyQLVCiwoApyYZLIzjy75q3z3YApNACqBQXaJAVPIgOYiJryGz7ChqXLZuHeOrFQBx4VvCl%2Fn4m7pMsWbnT9QwBgI7ugJJ2GYbwpzMnEf2A%2BVxYYB0cLgLq%2FiyA%2B%2BRHf4n5VzuihF%2BnJzYCxoaIQTCulLR41BPOhlYfx27GcNr2wTKuYUsES3SaEQaXgHLF8Mh%2Fjy3DvxGuJ93Lg&X-Amz-Signature=eb6d3806bdb4fefc8b5ef1639ab69b0f210ad107d1167107478a2944f937cc2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLOEHUVN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBgtiA36FAYx6aeZIFdM8fk%2FyDNUeDzHZldXmsidyIQ0AiAGWNra7l0cCN04O%2Fxw2xJATzlMNWrfL9dSqsXERueAbyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvNpiIrA1ldR7QeijKtwDryQcnUQseEdLbu%2Bi6yPWIK9KYSxGUGjfMJKX%2FLzGkJDxWP1KyRL8iFzCcs0Ieqv7bQjGmuJzwRUKGzN2D6KOqsiMBpZ5U3NwdLDb9Z6sLr83OOjbpX9WtZOviRcZhSTo3%2BoZ1oaE%2F3j6ygksHC0C8GXFSvBMy1YYpUjbp8s6jjDfldO%2BkxcpwxgMudNP6wC2jTQ%2FzQNZcd9G%2FLDXakvQ8Mx5528lZ7F%2BatNuTEw%2F1T3oSCCPq2dJq%2BkVYYc54OAS12vgcLJmr62ExlYhJE0TExxIP9jEzpjyWU6PE6FLn%2BXOT5aZg5SaBgMi8kl0KpsZU8d7cZIjhTtAL7EfByzJyZUbgMYPe1rrjVW1bD9WgUtXvwWnkXqPPoUafWv8YmI%2F408jq8tkj6FvIlHqFMFlstivArCoz5I2Dw%2FPgA5Lj0M7veAWHe%2BwzjoDjnmV0NR3HZy81UrlQqvPL96PXlA6XeucDecAMqtGOrOO7sg3cGzFjg93P7X3IgTJZ8qFuejGMCY1FAop3LjJvl1yvpfguLAdvOh%2FoMDQ12RbvynV3VwcewmEfSpAUXDW2beM1i0ByX85DQB2DgDQXsl23BeH1WTxvuFzHhDgBQTZdPw7prWfApoFecosvG6Y4f0w34OixAY6pgHQjzmw4ZyHJ1XWnyQLVCiwoApyYZLIzjy75q3z3YApNACqBQXaJAVPIgOYiJryGz7ChqXLZuHeOrFQBx4VvCl%2Fn4m7pMsWbnT9QwBgI7ugJJ2GYbwpzMnEf2A%2BVxYYB0cLgLq%2FiyA%2B%2BRHf4n5VzuihF%2BnJzYCxoaIQTCulLR41BPOhlYfx27GcNr2wTKuYUsES3SaEQaXgHLF8Mh%2Fjy3DvxGuJ93Lg&X-Amz-Signature=95c5f11e2aad6ce565b53fc9c1ac78c2945b196cab7210fad89262f98bd11f03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLOEHUVN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBgtiA36FAYx6aeZIFdM8fk%2FyDNUeDzHZldXmsidyIQ0AiAGWNra7l0cCN04O%2Fxw2xJATzlMNWrfL9dSqsXERueAbyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvNpiIrA1ldR7QeijKtwDryQcnUQseEdLbu%2Bi6yPWIK9KYSxGUGjfMJKX%2FLzGkJDxWP1KyRL8iFzCcs0Ieqv7bQjGmuJzwRUKGzN2D6KOqsiMBpZ5U3NwdLDb9Z6sLr83OOjbpX9WtZOviRcZhSTo3%2BoZ1oaE%2F3j6ygksHC0C8GXFSvBMy1YYpUjbp8s6jjDfldO%2BkxcpwxgMudNP6wC2jTQ%2FzQNZcd9G%2FLDXakvQ8Mx5528lZ7F%2BatNuTEw%2F1T3oSCCPq2dJq%2BkVYYc54OAS12vgcLJmr62ExlYhJE0TExxIP9jEzpjyWU6PE6FLn%2BXOT5aZg5SaBgMi8kl0KpsZU8d7cZIjhTtAL7EfByzJyZUbgMYPe1rrjVW1bD9WgUtXvwWnkXqPPoUafWv8YmI%2F408jq8tkj6FvIlHqFMFlstivArCoz5I2Dw%2FPgA5Lj0M7veAWHe%2BwzjoDjnmV0NR3HZy81UrlQqvPL96PXlA6XeucDecAMqtGOrOO7sg3cGzFjg93P7X3IgTJZ8qFuejGMCY1FAop3LjJvl1yvpfguLAdvOh%2FoMDQ12RbvynV3VwcewmEfSpAUXDW2beM1i0ByX85DQB2DgDQXsl23BeH1WTxvuFzHhDgBQTZdPw7prWfApoFecosvG6Y4f0w34OixAY6pgHQjzmw4ZyHJ1XWnyQLVCiwoApyYZLIzjy75q3z3YApNACqBQXaJAVPIgOYiJryGz7ChqXLZuHeOrFQBx4VvCl%2Fn4m7pMsWbnT9QwBgI7ugJJ2GYbwpzMnEf2A%2BVxYYB0cLgLq%2FiyA%2B%2BRHf4n5VzuihF%2BnJzYCxoaIQTCulLR41BPOhlYfx27GcNr2wTKuYUsES3SaEQaXgHLF8Mh%2Fjy3DvxGuJ93Lg&X-Amz-Signature=575e2b60eed5500ea604ae5d687253c8d741317b8c58982e51066aaa1a6d40da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLOEHUVN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBgtiA36FAYx6aeZIFdM8fk%2FyDNUeDzHZldXmsidyIQ0AiAGWNra7l0cCN04O%2Fxw2xJATzlMNWrfL9dSqsXERueAbyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvNpiIrA1ldR7QeijKtwDryQcnUQseEdLbu%2Bi6yPWIK9KYSxGUGjfMJKX%2FLzGkJDxWP1KyRL8iFzCcs0Ieqv7bQjGmuJzwRUKGzN2D6KOqsiMBpZ5U3NwdLDb9Z6sLr83OOjbpX9WtZOviRcZhSTo3%2BoZ1oaE%2F3j6ygksHC0C8GXFSvBMy1YYpUjbp8s6jjDfldO%2BkxcpwxgMudNP6wC2jTQ%2FzQNZcd9G%2FLDXakvQ8Mx5528lZ7F%2BatNuTEw%2F1T3oSCCPq2dJq%2BkVYYc54OAS12vgcLJmr62ExlYhJE0TExxIP9jEzpjyWU6PE6FLn%2BXOT5aZg5SaBgMi8kl0KpsZU8d7cZIjhTtAL7EfByzJyZUbgMYPe1rrjVW1bD9WgUtXvwWnkXqPPoUafWv8YmI%2F408jq8tkj6FvIlHqFMFlstivArCoz5I2Dw%2FPgA5Lj0M7veAWHe%2BwzjoDjnmV0NR3HZy81UrlQqvPL96PXlA6XeucDecAMqtGOrOO7sg3cGzFjg93P7X3IgTJZ8qFuejGMCY1FAop3LjJvl1yvpfguLAdvOh%2FoMDQ12RbvynV3VwcewmEfSpAUXDW2beM1i0ByX85DQB2DgDQXsl23BeH1WTxvuFzHhDgBQTZdPw7prWfApoFecosvG6Y4f0w34OixAY6pgHQjzmw4ZyHJ1XWnyQLVCiwoApyYZLIzjy75q3z3YApNACqBQXaJAVPIgOYiJryGz7ChqXLZuHeOrFQBx4VvCl%2Fn4m7pMsWbnT9QwBgI7ugJJ2GYbwpzMnEf2A%2BVxYYB0cLgLq%2FiyA%2B%2BRHf4n5VzuihF%2BnJzYCxoaIQTCulLR41BPOhlYfx27GcNr2wTKuYUsES3SaEQaXgHLF8Mh%2Fjy3DvxGuJ93Lg&X-Amz-Signature=1cc2d1476a9d1fd237b62b54bbc44155ba368acaa62224474f41c46a92db987d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5A6OXM6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCXccox4oy9HiQWJU%2FweVcbbIrP3YHP1ickyVdIKMj6cAIhAPn66YTkoqVMRgvImLAK7TOpH8cQdz0oV7qWlC6hAHtUKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwdy6WyGokZG0NtqvMq3AOUCjbyhcN4ik9CPJMBsro4JLo7sCAVse7berQEe1dI5nexrrZ8AdsAHitAYjfry2gcmof2%2FSOqLRwFjycCXiUo%2BMEuWhLL6xiw4ER1%2FJumJVmw0c8fAsw5FClsUjilCXUcgL9XRqwflj3ipQk8qirQPNK%2FEHW9FXU0ephN9VfnJWHVV6zeW0OMM0MKL3ZuQlV8MbSg6ONgtB4aO61PFKjheZ5iE0zYbH4iXckZLQ61%2FjDr6VgrSyelvCyzCMZfdVzyj%2BgTJRI0UGgVxjiPSpsjxWX8Dodfg%2FWsV1JK03Dz5pQBJYWux%2BvSxOJpe6WLZAEW00vuW%2BfSrYcy42yAsX%2Bil3EYq5NuTJOr4MSk4WEAFgucx1AVe1Q%2BBtt94%2Fyes7%2FoRl%2B0ceHOMzTXXJNWYWh9SsdaRU5dDJU7aDmd2xWiUNRY4wAQ%2BSv6WXDawPpmZp6U6YSo0zffeNZ6wJ12ki2FkCUjZVjf83ph7%2FbuZcWZ4Dye4JEcTYXGsh6WvS4LHTH%2BpiCqjYbieY7ej3Jnje5KpPEzYsb2edq7VNHa5ALgVvgynyE47zk0mjUx%2Fp2m3Jx57Tf3SgtFvk8zLEfAS3mYJsbQI2Nlar1mQuAEn%2BvCLjf1VDG3X234WHRWADDcg6LEBjqkAYrmTF4l%2BN7QlenItya7t6YuQdUgiKY5rvjxp0YKt%2F8yfgP2n3H8c0BxCuJTQPzaHaVewotVhpKKM%2BCm3WHCiQY1EumrinTOHvUoo7P0BIt8%2FzZ2Zi1zEkMd5RTqVvSbLUC7tz2v39RDfI2D8scCgbnUdsXJkd%2FyzSK%2F38e9J4t%2B9RORLpFuOSXs95plI6gFixeoTMt7EaFVcWNYLoqcvvoWLTaF&X-Amz-Signature=96275b5f8c46a3cc259d35dcfb359d45f4adcaeba0769cef1dfc4bb246537d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLOEHUVN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBgtiA36FAYx6aeZIFdM8fk%2FyDNUeDzHZldXmsidyIQ0AiAGWNra7l0cCN04O%2Fxw2xJATzlMNWrfL9dSqsXERueAbyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvNpiIrA1ldR7QeijKtwDryQcnUQseEdLbu%2Bi6yPWIK9KYSxGUGjfMJKX%2FLzGkJDxWP1KyRL8iFzCcs0Ieqv7bQjGmuJzwRUKGzN2D6KOqsiMBpZ5U3NwdLDb9Z6sLr83OOjbpX9WtZOviRcZhSTo3%2BoZ1oaE%2F3j6ygksHC0C8GXFSvBMy1YYpUjbp8s6jjDfldO%2BkxcpwxgMudNP6wC2jTQ%2FzQNZcd9G%2FLDXakvQ8Mx5528lZ7F%2BatNuTEw%2F1T3oSCCPq2dJq%2BkVYYc54OAS12vgcLJmr62ExlYhJE0TExxIP9jEzpjyWU6PE6FLn%2BXOT5aZg5SaBgMi8kl0KpsZU8d7cZIjhTtAL7EfByzJyZUbgMYPe1rrjVW1bD9WgUtXvwWnkXqPPoUafWv8YmI%2F408jq8tkj6FvIlHqFMFlstivArCoz5I2Dw%2FPgA5Lj0M7veAWHe%2BwzjoDjnmV0NR3HZy81UrlQqvPL96PXlA6XeucDecAMqtGOrOO7sg3cGzFjg93P7X3IgTJZ8qFuejGMCY1FAop3LjJvl1yvpfguLAdvOh%2FoMDQ12RbvynV3VwcewmEfSpAUXDW2beM1i0ByX85DQB2DgDQXsl23BeH1WTxvuFzHhDgBQTZdPw7prWfApoFecosvG6Y4f0w34OixAY6pgHQjzmw4ZyHJ1XWnyQLVCiwoApyYZLIzjy75q3z3YApNACqBQXaJAVPIgOYiJryGz7ChqXLZuHeOrFQBx4VvCl%2Fn4m7pMsWbnT9QwBgI7ugJJ2GYbwpzMnEf2A%2BVxYYB0cLgLq%2FiyA%2B%2BRHf4n5VzuihF%2BnJzYCxoaIQTCulLR41BPOhlYfx27GcNr2wTKuYUsES3SaEQaXgHLF8Mh%2Fjy3DvxGuJ93Lg&X-Amz-Signature=7af8060b6799394b3fd2a5c19a2396dccd534c9fe5821590f680306a3c337fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOHS7Y5L%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHi63AMFiXT76GaBtAJwMF%2FHAC%2BEe7DCXnHF4e19dT6gIgDn2I7COlHfwEUOeow36Xwb%2BkgeLvjkj25I7mfLDvi5IqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuGtZcSvS41MDeEVircAx7%2FUYPgnXKcmFdrsGaHQQ2TC7EWkUv%2F8VlkRh7sLv9YTWewJlKTCZG2pZ34cv2zyDLENWurGOomR5Vxjew8lvYPQZLhDN34a6dgBjoc1MMqOr2WDYO%2BEtePhLgd9OU8Ue1UQSPWHEGcAHkc4G55DSUTRSOXXKrgcw69%2B78key1%2FmEdc1pJFanDH3KQHLp8mvDO063NgAcjyUQE0R3UIJZvUAQ0IDNjPDHq9tgS1plnumy5Yb1DctQj5X35kNCNFqXgWpziBEUT1NElXugd0PIcAL6eu%2FLSRozTrl%2Ff8wz3HTJgzQPV5uTEKz3pEyKTcgoxuYymVPzGEUZ3PFLpKCOiV5tBWXuLqRCtLasATcxVDlXnaLU%2FMywyI90prRKYfQcl9B8VKj6foi5a8Of6DGVnmuTUs0FPS6b3%2FFBHBy3tT3GinMSUVud7fsG4900N32cWwIDG0CceHWLJwKh2sg3sor7vft1dO7ff3RIGLU4LrWQ4c2pYgg%2BQrOT%2B1m42Uh8UJ52Vs61dbXqt9ZKCMmk%2FMZwXSZtt%2B%2FW8H50gv3xBOleXKhFhAbxvytu3yDD%2FeeWCI96Mawait%2Fgr4tfmnI%2FXf%2BE93YarMY2FTzmE5hxXQjS5%2FoHW5PqAagi4MMKOCosQGOqUB1U9wZ7EubF6%2FM1B6eKNmmVJqEb1h4UB3d5qGJelrb7dfamm5gXRoUFxPxovQZZHbHWH1%2BTMWva2XDBTTd0cbGj7uMSowkC%2BeuexJQ2FccJ9XB2WcD1QhEJoKjNMG2OvtRLF3Lm5GxKMuF1bt33OA0um0BggCg8wejEClukfme9yOubmdf1Tolom1t12QfLtjm%2B%2FIdWhbJnHk8z6JPRFBwAcZ1OEo&X-Amz-Signature=9fb74c7a9d46ad8897e01cf8b2fdfd49c5718b348b4b72848e50c5cadd41ef4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOHS7Y5L%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHi63AMFiXT76GaBtAJwMF%2FHAC%2BEe7DCXnHF4e19dT6gIgDn2I7COlHfwEUOeow36Xwb%2BkgeLvjkj25I7mfLDvi5IqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuGtZcSvS41MDeEVircAx7%2FUYPgnXKcmFdrsGaHQQ2TC7EWkUv%2F8VlkRh7sLv9YTWewJlKTCZG2pZ34cv2zyDLENWurGOomR5Vxjew8lvYPQZLhDN34a6dgBjoc1MMqOr2WDYO%2BEtePhLgd9OU8Ue1UQSPWHEGcAHkc4G55DSUTRSOXXKrgcw69%2B78key1%2FmEdc1pJFanDH3KQHLp8mvDO063NgAcjyUQE0R3UIJZvUAQ0IDNjPDHq9tgS1plnumy5Yb1DctQj5X35kNCNFqXgWpziBEUT1NElXugd0PIcAL6eu%2FLSRozTrl%2Ff8wz3HTJgzQPV5uTEKz3pEyKTcgoxuYymVPzGEUZ3PFLpKCOiV5tBWXuLqRCtLasATcxVDlXnaLU%2FMywyI90prRKYfQcl9B8VKj6foi5a8Of6DGVnmuTUs0FPS6b3%2FFBHBy3tT3GinMSUVud7fsG4900N32cWwIDG0CceHWLJwKh2sg3sor7vft1dO7ff3RIGLU4LrWQ4c2pYgg%2BQrOT%2B1m42Uh8UJ52Vs61dbXqt9ZKCMmk%2FMZwXSZtt%2B%2FW8H50gv3xBOleXKhFhAbxvytu3yDD%2FeeWCI96Mawait%2Fgr4tfmnI%2FXf%2BE93YarMY2FTzmE5hxXQjS5%2FoHW5PqAagi4MMKOCosQGOqUB1U9wZ7EubF6%2FM1B6eKNmmVJqEb1h4UB3d5qGJelrb7dfamm5gXRoUFxPxovQZZHbHWH1%2BTMWva2XDBTTd0cbGj7uMSowkC%2BeuexJQ2FccJ9XB2WcD1QhEJoKjNMG2OvtRLF3Lm5GxKMuF1bt33OA0um0BggCg8wejEClukfme9yOubmdf1Tolom1t12QfLtjm%2B%2FIdWhbJnHk8z6JPRFBwAcZ1OEo&X-Amz-Signature=a77f017c88f7d7bbd4926d11bee5b3bdaaea2547878b8262afdbddbe594cad09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOHS7Y5L%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHi63AMFiXT76GaBtAJwMF%2FHAC%2BEe7DCXnHF4e19dT6gIgDn2I7COlHfwEUOeow36Xwb%2BkgeLvjkj25I7mfLDvi5IqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuGtZcSvS41MDeEVircAx7%2FUYPgnXKcmFdrsGaHQQ2TC7EWkUv%2F8VlkRh7sLv9YTWewJlKTCZG2pZ34cv2zyDLENWurGOomR5Vxjew8lvYPQZLhDN34a6dgBjoc1MMqOr2WDYO%2BEtePhLgd9OU8Ue1UQSPWHEGcAHkc4G55DSUTRSOXXKrgcw69%2B78key1%2FmEdc1pJFanDH3KQHLp8mvDO063NgAcjyUQE0R3UIJZvUAQ0IDNjPDHq9tgS1plnumy5Yb1DctQj5X35kNCNFqXgWpziBEUT1NElXugd0PIcAL6eu%2FLSRozTrl%2Ff8wz3HTJgzQPV5uTEKz3pEyKTcgoxuYymVPzGEUZ3PFLpKCOiV5tBWXuLqRCtLasATcxVDlXnaLU%2FMywyI90prRKYfQcl9B8VKj6foi5a8Of6DGVnmuTUs0FPS6b3%2FFBHBy3tT3GinMSUVud7fsG4900N32cWwIDG0CceHWLJwKh2sg3sor7vft1dO7ff3RIGLU4LrWQ4c2pYgg%2BQrOT%2B1m42Uh8UJ52Vs61dbXqt9ZKCMmk%2FMZwXSZtt%2B%2FW8H50gv3xBOleXKhFhAbxvytu3yDD%2FeeWCI96Mawait%2Fgr4tfmnI%2FXf%2BE93YarMY2FTzmE5hxXQjS5%2FoHW5PqAagi4MMKOCosQGOqUB1U9wZ7EubF6%2FM1B6eKNmmVJqEb1h4UB3d5qGJelrb7dfamm5gXRoUFxPxovQZZHbHWH1%2BTMWva2XDBTTd0cbGj7uMSowkC%2BeuexJQ2FccJ9XB2WcD1QhEJoKjNMG2OvtRLF3Lm5GxKMuF1bt33OA0um0BggCg8wejEClukfme9yOubmdf1Tolom1t12QfLtjm%2B%2FIdWhbJnHk8z6JPRFBwAcZ1OEo&X-Amz-Signature=f7b32be3ba966b555f87cb99ee3d09a06e275cbbee22dc591ca946f77f6faef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOHS7Y5L%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHi63AMFiXT76GaBtAJwMF%2FHAC%2BEe7DCXnHF4e19dT6gIgDn2I7COlHfwEUOeow36Xwb%2BkgeLvjkj25I7mfLDvi5IqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuGtZcSvS41MDeEVircAx7%2FUYPgnXKcmFdrsGaHQQ2TC7EWkUv%2F8VlkRh7sLv9YTWewJlKTCZG2pZ34cv2zyDLENWurGOomR5Vxjew8lvYPQZLhDN34a6dgBjoc1MMqOr2WDYO%2BEtePhLgd9OU8Ue1UQSPWHEGcAHkc4G55DSUTRSOXXKrgcw69%2B78key1%2FmEdc1pJFanDH3KQHLp8mvDO063NgAcjyUQE0R3UIJZvUAQ0IDNjPDHq9tgS1plnumy5Yb1DctQj5X35kNCNFqXgWpziBEUT1NElXugd0PIcAL6eu%2FLSRozTrl%2Ff8wz3HTJgzQPV5uTEKz3pEyKTcgoxuYymVPzGEUZ3PFLpKCOiV5tBWXuLqRCtLasATcxVDlXnaLU%2FMywyI90prRKYfQcl9B8VKj6foi5a8Of6DGVnmuTUs0FPS6b3%2FFBHBy3tT3GinMSUVud7fsG4900N32cWwIDG0CceHWLJwKh2sg3sor7vft1dO7ff3RIGLU4LrWQ4c2pYgg%2BQrOT%2B1m42Uh8UJ52Vs61dbXqt9ZKCMmk%2FMZwXSZtt%2B%2FW8H50gv3xBOleXKhFhAbxvytu3yDD%2FeeWCI96Mawait%2Fgr4tfmnI%2FXf%2BE93YarMY2FTzmE5hxXQjS5%2FoHW5PqAagi4MMKOCosQGOqUB1U9wZ7EubF6%2FM1B6eKNmmVJqEb1h4UB3d5qGJelrb7dfamm5gXRoUFxPxovQZZHbHWH1%2BTMWva2XDBTTd0cbGj7uMSowkC%2BeuexJQ2FccJ9XB2WcD1QhEJoKjNMG2OvtRLF3Lm5GxKMuF1bt33OA0um0BggCg8wejEClukfme9yOubmdf1Tolom1t12QfLtjm%2B%2FIdWhbJnHk8z6JPRFBwAcZ1OEo&X-Amz-Signature=4d183add6732a053c1eac7b676790842bcb79d277800751736e22f0d215735f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOHS7Y5L%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHi63AMFiXT76GaBtAJwMF%2FHAC%2BEe7DCXnHF4e19dT6gIgDn2I7COlHfwEUOeow36Xwb%2BkgeLvjkj25I7mfLDvi5IqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuGtZcSvS41MDeEVircAx7%2FUYPgnXKcmFdrsGaHQQ2TC7EWkUv%2F8VlkRh7sLv9YTWewJlKTCZG2pZ34cv2zyDLENWurGOomR5Vxjew8lvYPQZLhDN34a6dgBjoc1MMqOr2WDYO%2BEtePhLgd9OU8Ue1UQSPWHEGcAHkc4G55DSUTRSOXXKrgcw69%2B78key1%2FmEdc1pJFanDH3KQHLp8mvDO063NgAcjyUQE0R3UIJZvUAQ0IDNjPDHq9tgS1plnumy5Yb1DctQj5X35kNCNFqXgWpziBEUT1NElXugd0PIcAL6eu%2FLSRozTrl%2Ff8wz3HTJgzQPV5uTEKz3pEyKTcgoxuYymVPzGEUZ3PFLpKCOiV5tBWXuLqRCtLasATcxVDlXnaLU%2FMywyI90prRKYfQcl9B8VKj6foi5a8Of6DGVnmuTUs0FPS6b3%2FFBHBy3tT3GinMSUVud7fsG4900N32cWwIDG0CceHWLJwKh2sg3sor7vft1dO7ff3RIGLU4LrWQ4c2pYgg%2BQrOT%2B1m42Uh8UJ52Vs61dbXqt9ZKCMmk%2FMZwXSZtt%2B%2FW8H50gv3xBOleXKhFhAbxvytu3yDD%2FeeWCI96Mawait%2Fgr4tfmnI%2FXf%2BE93YarMY2FTzmE5hxXQjS5%2FoHW5PqAagi4MMKOCosQGOqUB1U9wZ7EubF6%2FM1B6eKNmmVJqEb1h4UB3d5qGJelrb7dfamm5gXRoUFxPxovQZZHbHWH1%2BTMWva2XDBTTd0cbGj7uMSowkC%2BeuexJQ2FccJ9XB2WcD1QhEJoKjNMG2OvtRLF3Lm5GxKMuF1bt33OA0um0BggCg8wejEClukfme9yOubmdf1Tolom1t12QfLtjm%2B%2FIdWhbJnHk8z6JPRFBwAcZ1OEo&X-Amz-Signature=4d0fb67bb9f09918b7da5dc317b0f734295a3f2355fff4f925a6375361a5272d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOHS7Y5L%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHi63AMFiXT76GaBtAJwMF%2FHAC%2BEe7DCXnHF4e19dT6gIgDn2I7COlHfwEUOeow36Xwb%2BkgeLvjkj25I7mfLDvi5IqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuGtZcSvS41MDeEVircAx7%2FUYPgnXKcmFdrsGaHQQ2TC7EWkUv%2F8VlkRh7sLv9YTWewJlKTCZG2pZ34cv2zyDLENWurGOomR5Vxjew8lvYPQZLhDN34a6dgBjoc1MMqOr2WDYO%2BEtePhLgd9OU8Ue1UQSPWHEGcAHkc4G55DSUTRSOXXKrgcw69%2B78key1%2FmEdc1pJFanDH3KQHLp8mvDO063NgAcjyUQE0R3UIJZvUAQ0IDNjPDHq9tgS1plnumy5Yb1DctQj5X35kNCNFqXgWpziBEUT1NElXugd0PIcAL6eu%2FLSRozTrl%2Ff8wz3HTJgzQPV5uTEKz3pEyKTcgoxuYymVPzGEUZ3PFLpKCOiV5tBWXuLqRCtLasATcxVDlXnaLU%2FMywyI90prRKYfQcl9B8VKj6foi5a8Of6DGVnmuTUs0FPS6b3%2FFBHBy3tT3GinMSUVud7fsG4900N32cWwIDG0CceHWLJwKh2sg3sor7vft1dO7ff3RIGLU4LrWQ4c2pYgg%2BQrOT%2B1m42Uh8UJ52Vs61dbXqt9ZKCMmk%2FMZwXSZtt%2B%2FW8H50gv3xBOleXKhFhAbxvytu3yDD%2FeeWCI96Mawait%2Fgr4tfmnI%2FXf%2BE93YarMY2FTzmE5hxXQjS5%2FoHW5PqAagi4MMKOCosQGOqUB1U9wZ7EubF6%2FM1B6eKNmmVJqEb1h4UB3d5qGJelrb7dfamm5gXRoUFxPxovQZZHbHWH1%2BTMWva2XDBTTd0cbGj7uMSowkC%2BeuexJQ2FccJ9XB2WcD1QhEJoKjNMG2OvtRLF3Lm5GxKMuF1bt33OA0um0BggCg8wejEClukfme9yOubmdf1Tolom1t12QfLtjm%2B%2FIdWhbJnHk8z6JPRFBwAcZ1OEo&X-Amz-Signature=d430f16e7a9b0c09881944e454e09971900f05111886bef94d424ca877c21aa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOHS7Y5L%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHi63AMFiXT76GaBtAJwMF%2FHAC%2BEe7DCXnHF4e19dT6gIgDn2I7COlHfwEUOeow36Xwb%2BkgeLvjkj25I7mfLDvi5IqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuGtZcSvS41MDeEVircAx7%2FUYPgnXKcmFdrsGaHQQ2TC7EWkUv%2F8VlkRh7sLv9YTWewJlKTCZG2pZ34cv2zyDLENWurGOomR5Vxjew8lvYPQZLhDN34a6dgBjoc1MMqOr2WDYO%2BEtePhLgd9OU8Ue1UQSPWHEGcAHkc4G55DSUTRSOXXKrgcw69%2B78key1%2FmEdc1pJFanDH3KQHLp8mvDO063NgAcjyUQE0R3UIJZvUAQ0IDNjPDHq9tgS1plnumy5Yb1DctQj5X35kNCNFqXgWpziBEUT1NElXugd0PIcAL6eu%2FLSRozTrl%2Ff8wz3HTJgzQPV5uTEKz3pEyKTcgoxuYymVPzGEUZ3PFLpKCOiV5tBWXuLqRCtLasATcxVDlXnaLU%2FMywyI90prRKYfQcl9B8VKj6foi5a8Of6DGVnmuTUs0FPS6b3%2FFBHBy3tT3GinMSUVud7fsG4900N32cWwIDG0CceHWLJwKh2sg3sor7vft1dO7ff3RIGLU4LrWQ4c2pYgg%2BQrOT%2B1m42Uh8UJ52Vs61dbXqt9ZKCMmk%2FMZwXSZtt%2B%2FW8H50gv3xBOleXKhFhAbxvytu3yDD%2FeeWCI96Mawait%2Fgr4tfmnI%2FXf%2BE93YarMY2FTzmE5hxXQjS5%2FoHW5PqAagi4MMKOCosQGOqUB1U9wZ7EubF6%2FM1B6eKNmmVJqEb1h4UB3d5qGJelrb7dfamm5gXRoUFxPxovQZZHbHWH1%2BTMWva2XDBTTd0cbGj7uMSowkC%2BeuexJQ2FccJ9XB2WcD1QhEJoKjNMG2OvtRLF3Lm5GxKMuF1bt33OA0um0BggCg8wejEClukfme9yOubmdf1Tolom1t12QfLtjm%2B%2FIdWhbJnHk8z6JPRFBwAcZ1OEo&X-Amz-Signature=039c86c9d193ef75733d0ac6feafa956d042e9eaa372063fad89b7b60a9418de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOHS7Y5L%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHi63AMFiXT76GaBtAJwMF%2FHAC%2BEe7DCXnHF4e19dT6gIgDn2I7COlHfwEUOeow36Xwb%2BkgeLvjkj25I7mfLDvi5IqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuGtZcSvS41MDeEVircAx7%2FUYPgnXKcmFdrsGaHQQ2TC7EWkUv%2F8VlkRh7sLv9YTWewJlKTCZG2pZ34cv2zyDLENWurGOomR5Vxjew8lvYPQZLhDN34a6dgBjoc1MMqOr2WDYO%2BEtePhLgd9OU8Ue1UQSPWHEGcAHkc4G55DSUTRSOXXKrgcw69%2B78key1%2FmEdc1pJFanDH3KQHLp8mvDO063NgAcjyUQE0R3UIJZvUAQ0IDNjPDHq9tgS1plnumy5Yb1DctQj5X35kNCNFqXgWpziBEUT1NElXugd0PIcAL6eu%2FLSRozTrl%2Ff8wz3HTJgzQPV5uTEKz3pEyKTcgoxuYymVPzGEUZ3PFLpKCOiV5tBWXuLqRCtLasATcxVDlXnaLU%2FMywyI90prRKYfQcl9B8VKj6foi5a8Of6DGVnmuTUs0FPS6b3%2FFBHBy3tT3GinMSUVud7fsG4900N32cWwIDG0CceHWLJwKh2sg3sor7vft1dO7ff3RIGLU4LrWQ4c2pYgg%2BQrOT%2B1m42Uh8UJ52Vs61dbXqt9ZKCMmk%2FMZwXSZtt%2B%2FW8H50gv3xBOleXKhFhAbxvytu3yDD%2FeeWCI96Mawait%2Fgr4tfmnI%2FXf%2BE93YarMY2FTzmE5hxXQjS5%2FoHW5PqAagi4MMKOCosQGOqUB1U9wZ7EubF6%2FM1B6eKNmmVJqEb1h4UB3d5qGJelrb7dfamm5gXRoUFxPxovQZZHbHWH1%2BTMWva2XDBTTd0cbGj7uMSowkC%2BeuexJQ2FccJ9XB2WcD1QhEJoKjNMG2OvtRLF3Lm5GxKMuF1bt33OA0um0BggCg8wejEClukfme9yOubmdf1Tolom1t12QfLtjm%2B%2FIdWhbJnHk8z6JPRFBwAcZ1OEo&X-Amz-Signature=aee05c709179614556aaa8557b7a3828fa7e00742027ab4cbbca698f705d03cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
