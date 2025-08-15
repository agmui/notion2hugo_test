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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SPUK35N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDImzpMxQqYc92AsCao1X9gE7jWKuK6aZKLLuMMRC2PeAIgMn2S%2B0FKiwAhxOMtfNuE2xEogDybKKHzlCatsEDv7igq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFXNYjUWkoLIF3oaeircA4TBhbnD%2Frdr%2BZv5qOnh1NRxkrovnYzDkvByp3GWi5TTDPWirZqjVznMeBdMuReKdDJtF22%2F%2BRS7FZdQCla3YT%2B6VZYvk2ZwM%2Bjz%2BQaSN0qw9mxhYotqpjIB95TPB8fft1jo%2F0pdFBD4%2F%2FoZiJw3SfsK%2F5qpc959Q7LbSHIxdcw3r0KvIrt1sJQtqkydGD9uO72is926zt3YBMzIMLTbB3GRr9KWBf36JZnkjDVuHF%2BHq1ljK6uXtIX%2FNHd%2FVcjV1wTztiUSQVzqKPgUtTT6EbAYuaDY2PuY1ThwVDo6wqUrP%2Frf4sld8NXfLnZDlod2Fyz%2FgQSL6xOt4VcA6mR53%2BBVhCADRtNdasvxSefTmjAyR7Zz3N599jwfnM%2BVVmaic%2BEtmmL37dSuyUCLj9vAVHPrJB1SBzey0Di9ccbgAzXUi4qxrU0A3Cj8NMcd%2BT5YsplRltzDFdNgAXucMecGU1XqM3Jd0lar5NwpZzx272Mi0q7r%2FwhrLO2VzuBYkt9UFBjB59iMQjXJpPP4duxIvYnwnB1LuN7A%2Fh3TQEPZbLlKL%2FlAGB4Yxje7atJOfIZrZwIhMhY9AMZfFSpULKO7GdMinmKfND3ykZzNYMo5jWZFgUZy2rm8gDJy0fLOMPii%2BsQGOqUBK6fGm6UuIraI3fZuhcxOQ5UHub9tJs7RzAa3Ih2jap1%2BcKxLIv83Gf5owiSg7T7MSN6ZJErB4WJ2N656SQGpshdvJUB4SpWQY%2FZt9WCkDEzBiA6nJziPDGK9oX7jWncgloCDo8W23gZk6tZKbls3Cz074sc4HMUOjPrg5UfIOhMUEZoLWCEHdBNJ5NwgQ0xN%2BRuF%2FwT9jcFiVG8hrWUH5Svv0xP9&X-Amz-Signature=78358944cfcfa80a2150376e311a9c66707e14e1565c218aae781739147b7430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SPUK35N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDImzpMxQqYc92AsCao1X9gE7jWKuK6aZKLLuMMRC2PeAIgMn2S%2B0FKiwAhxOMtfNuE2xEogDybKKHzlCatsEDv7igq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFXNYjUWkoLIF3oaeircA4TBhbnD%2Frdr%2BZv5qOnh1NRxkrovnYzDkvByp3GWi5TTDPWirZqjVznMeBdMuReKdDJtF22%2F%2BRS7FZdQCla3YT%2B6VZYvk2ZwM%2Bjz%2BQaSN0qw9mxhYotqpjIB95TPB8fft1jo%2F0pdFBD4%2F%2FoZiJw3SfsK%2F5qpc959Q7LbSHIxdcw3r0KvIrt1sJQtqkydGD9uO72is926zt3YBMzIMLTbB3GRr9KWBf36JZnkjDVuHF%2BHq1ljK6uXtIX%2FNHd%2FVcjV1wTztiUSQVzqKPgUtTT6EbAYuaDY2PuY1ThwVDo6wqUrP%2Frf4sld8NXfLnZDlod2Fyz%2FgQSL6xOt4VcA6mR53%2BBVhCADRtNdasvxSefTmjAyR7Zz3N599jwfnM%2BVVmaic%2BEtmmL37dSuyUCLj9vAVHPrJB1SBzey0Di9ccbgAzXUi4qxrU0A3Cj8NMcd%2BT5YsplRltzDFdNgAXucMecGU1XqM3Jd0lar5NwpZzx272Mi0q7r%2FwhrLO2VzuBYkt9UFBjB59iMQjXJpPP4duxIvYnwnB1LuN7A%2Fh3TQEPZbLlKL%2FlAGB4Yxje7atJOfIZrZwIhMhY9AMZfFSpULKO7GdMinmKfND3ykZzNYMo5jWZFgUZy2rm8gDJy0fLOMPii%2BsQGOqUBK6fGm6UuIraI3fZuhcxOQ5UHub9tJs7RzAa3Ih2jap1%2BcKxLIv83Gf5owiSg7T7MSN6ZJErB4WJ2N656SQGpshdvJUB4SpWQY%2FZt9WCkDEzBiA6nJziPDGK9oX7jWncgloCDo8W23gZk6tZKbls3Cz074sc4HMUOjPrg5UfIOhMUEZoLWCEHdBNJ5NwgQ0xN%2BRuF%2FwT9jcFiVG8hrWUH5Svv0xP9&X-Amz-Signature=28d72d8a4af00e6e2d999b4e9a0aeeaaeafe04e10b88691cf17c8fa63148ca12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SPUK35N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDImzpMxQqYc92AsCao1X9gE7jWKuK6aZKLLuMMRC2PeAIgMn2S%2B0FKiwAhxOMtfNuE2xEogDybKKHzlCatsEDv7igq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFXNYjUWkoLIF3oaeircA4TBhbnD%2Frdr%2BZv5qOnh1NRxkrovnYzDkvByp3GWi5TTDPWirZqjVznMeBdMuReKdDJtF22%2F%2BRS7FZdQCla3YT%2B6VZYvk2ZwM%2Bjz%2BQaSN0qw9mxhYotqpjIB95TPB8fft1jo%2F0pdFBD4%2F%2FoZiJw3SfsK%2F5qpc959Q7LbSHIxdcw3r0KvIrt1sJQtqkydGD9uO72is926zt3YBMzIMLTbB3GRr9KWBf36JZnkjDVuHF%2BHq1ljK6uXtIX%2FNHd%2FVcjV1wTztiUSQVzqKPgUtTT6EbAYuaDY2PuY1ThwVDo6wqUrP%2Frf4sld8NXfLnZDlod2Fyz%2FgQSL6xOt4VcA6mR53%2BBVhCADRtNdasvxSefTmjAyR7Zz3N599jwfnM%2BVVmaic%2BEtmmL37dSuyUCLj9vAVHPrJB1SBzey0Di9ccbgAzXUi4qxrU0A3Cj8NMcd%2BT5YsplRltzDFdNgAXucMecGU1XqM3Jd0lar5NwpZzx272Mi0q7r%2FwhrLO2VzuBYkt9UFBjB59iMQjXJpPP4duxIvYnwnB1LuN7A%2Fh3TQEPZbLlKL%2FlAGB4Yxje7atJOfIZrZwIhMhY9AMZfFSpULKO7GdMinmKfND3ykZzNYMo5jWZFgUZy2rm8gDJy0fLOMPii%2BsQGOqUBK6fGm6UuIraI3fZuhcxOQ5UHub9tJs7RzAa3Ih2jap1%2BcKxLIv83Gf5owiSg7T7MSN6ZJErB4WJ2N656SQGpshdvJUB4SpWQY%2FZt9WCkDEzBiA6nJziPDGK9oX7jWncgloCDo8W23gZk6tZKbls3Cz074sc4HMUOjPrg5UfIOhMUEZoLWCEHdBNJ5NwgQ0xN%2BRuF%2FwT9jcFiVG8hrWUH5Svv0xP9&X-Amz-Signature=4b7484e0cb38e1b2f1e0d999b43daae13e4543dab6739e1d2020b6535a5e92d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SPUK35N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDImzpMxQqYc92AsCao1X9gE7jWKuK6aZKLLuMMRC2PeAIgMn2S%2B0FKiwAhxOMtfNuE2xEogDybKKHzlCatsEDv7igq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFXNYjUWkoLIF3oaeircA4TBhbnD%2Frdr%2BZv5qOnh1NRxkrovnYzDkvByp3GWi5TTDPWirZqjVznMeBdMuReKdDJtF22%2F%2BRS7FZdQCla3YT%2B6VZYvk2ZwM%2Bjz%2BQaSN0qw9mxhYotqpjIB95TPB8fft1jo%2F0pdFBD4%2F%2FoZiJw3SfsK%2F5qpc959Q7LbSHIxdcw3r0KvIrt1sJQtqkydGD9uO72is926zt3YBMzIMLTbB3GRr9KWBf36JZnkjDVuHF%2BHq1ljK6uXtIX%2FNHd%2FVcjV1wTztiUSQVzqKPgUtTT6EbAYuaDY2PuY1ThwVDo6wqUrP%2Frf4sld8NXfLnZDlod2Fyz%2FgQSL6xOt4VcA6mR53%2BBVhCADRtNdasvxSefTmjAyR7Zz3N599jwfnM%2BVVmaic%2BEtmmL37dSuyUCLj9vAVHPrJB1SBzey0Di9ccbgAzXUi4qxrU0A3Cj8NMcd%2BT5YsplRltzDFdNgAXucMecGU1XqM3Jd0lar5NwpZzx272Mi0q7r%2FwhrLO2VzuBYkt9UFBjB59iMQjXJpPP4duxIvYnwnB1LuN7A%2Fh3TQEPZbLlKL%2FlAGB4Yxje7atJOfIZrZwIhMhY9AMZfFSpULKO7GdMinmKfND3ykZzNYMo5jWZFgUZy2rm8gDJy0fLOMPii%2BsQGOqUBK6fGm6UuIraI3fZuhcxOQ5UHub9tJs7RzAa3Ih2jap1%2BcKxLIv83Gf5owiSg7T7MSN6ZJErB4WJ2N656SQGpshdvJUB4SpWQY%2FZt9WCkDEzBiA6nJziPDGK9oX7jWncgloCDo8W23gZk6tZKbls3Cz074sc4HMUOjPrg5UfIOhMUEZoLWCEHdBNJ5NwgQ0xN%2BRuF%2FwT9jcFiVG8hrWUH5Svv0xP9&X-Amz-Signature=2189026e3d496fa70cd1372fbfda8575b247b6e237b9596b8a6cc60340075ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SPUK35N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDImzpMxQqYc92AsCao1X9gE7jWKuK6aZKLLuMMRC2PeAIgMn2S%2B0FKiwAhxOMtfNuE2xEogDybKKHzlCatsEDv7igq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFXNYjUWkoLIF3oaeircA4TBhbnD%2Frdr%2BZv5qOnh1NRxkrovnYzDkvByp3GWi5TTDPWirZqjVznMeBdMuReKdDJtF22%2F%2BRS7FZdQCla3YT%2B6VZYvk2ZwM%2Bjz%2BQaSN0qw9mxhYotqpjIB95TPB8fft1jo%2F0pdFBD4%2F%2FoZiJw3SfsK%2F5qpc959Q7LbSHIxdcw3r0KvIrt1sJQtqkydGD9uO72is926zt3YBMzIMLTbB3GRr9KWBf36JZnkjDVuHF%2BHq1ljK6uXtIX%2FNHd%2FVcjV1wTztiUSQVzqKPgUtTT6EbAYuaDY2PuY1ThwVDo6wqUrP%2Frf4sld8NXfLnZDlod2Fyz%2FgQSL6xOt4VcA6mR53%2BBVhCADRtNdasvxSefTmjAyR7Zz3N599jwfnM%2BVVmaic%2BEtmmL37dSuyUCLj9vAVHPrJB1SBzey0Di9ccbgAzXUi4qxrU0A3Cj8NMcd%2BT5YsplRltzDFdNgAXucMecGU1XqM3Jd0lar5NwpZzx272Mi0q7r%2FwhrLO2VzuBYkt9UFBjB59iMQjXJpPP4duxIvYnwnB1LuN7A%2Fh3TQEPZbLlKL%2FlAGB4Yxje7atJOfIZrZwIhMhY9AMZfFSpULKO7GdMinmKfND3ykZzNYMo5jWZFgUZy2rm8gDJy0fLOMPii%2BsQGOqUBK6fGm6UuIraI3fZuhcxOQ5UHub9tJs7RzAa3Ih2jap1%2BcKxLIv83Gf5owiSg7T7MSN6ZJErB4WJ2N656SQGpshdvJUB4SpWQY%2FZt9WCkDEzBiA6nJziPDGK9oX7jWncgloCDo8W23gZk6tZKbls3Cz074sc4HMUOjPrg5UfIOhMUEZoLWCEHdBNJ5NwgQ0xN%2BRuF%2FwT9jcFiVG8hrWUH5Svv0xP9&X-Amz-Signature=cd36fc152fc6ac2893721b4a9f10add978a73d5720857d1abf7a9d8e4365851c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SPUK35N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDImzpMxQqYc92AsCao1X9gE7jWKuK6aZKLLuMMRC2PeAIgMn2S%2B0FKiwAhxOMtfNuE2xEogDybKKHzlCatsEDv7igq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFXNYjUWkoLIF3oaeircA4TBhbnD%2Frdr%2BZv5qOnh1NRxkrovnYzDkvByp3GWi5TTDPWirZqjVznMeBdMuReKdDJtF22%2F%2BRS7FZdQCla3YT%2B6VZYvk2ZwM%2Bjz%2BQaSN0qw9mxhYotqpjIB95TPB8fft1jo%2F0pdFBD4%2F%2FoZiJw3SfsK%2F5qpc959Q7LbSHIxdcw3r0KvIrt1sJQtqkydGD9uO72is926zt3YBMzIMLTbB3GRr9KWBf36JZnkjDVuHF%2BHq1ljK6uXtIX%2FNHd%2FVcjV1wTztiUSQVzqKPgUtTT6EbAYuaDY2PuY1ThwVDo6wqUrP%2Frf4sld8NXfLnZDlod2Fyz%2FgQSL6xOt4VcA6mR53%2BBVhCADRtNdasvxSefTmjAyR7Zz3N599jwfnM%2BVVmaic%2BEtmmL37dSuyUCLj9vAVHPrJB1SBzey0Di9ccbgAzXUi4qxrU0A3Cj8NMcd%2BT5YsplRltzDFdNgAXucMecGU1XqM3Jd0lar5NwpZzx272Mi0q7r%2FwhrLO2VzuBYkt9UFBjB59iMQjXJpPP4duxIvYnwnB1LuN7A%2Fh3TQEPZbLlKL%2FlAGB4Yxje7atJOfIZrZwIhMhY9AMZfFSpULKO7GdMinmKfND3ykZzNYMo5jWZFgUZy2rm8gDJy0fLOMPii%2BsQGOqUBK6fGm6UuIraI3fZuhcxOQ5UHub9tJs7RzAa3Ih2jap1%2BcKxLIv83Gf5owiSg7T7MSN6ZJErB4WJ2N656SQGpshdvJUB4SpWQY%2FZt9WCkDEzBiA6nJziPDGK9oX7jWncgloCDo8W23gZk6tZKbls3Cz074sc4HMUOjPrg5UfIOhMUEZoLWCEHdBNJ5NwgQ0xN%2BRuF%2FwT9jcFiVG8hrWUH5Svv0xP9&X-Amz-Signature=3d28aec891152efe38f0d0a5ecb2e43464868f548dfab266c5bbf3b6a6d09e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SPUK35N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDImzpMxQqYc92AsCao1X9gE7jWKuK6aZKLLuMMRC2PeAIgMn2S%2B0FKiwAhxOMtfNuE2xEogDybKKHzlCatsEDv7igq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFXNYjUWkoLIF3oaeircA4TBhbnD%2Frdr%2BZv5qOnh1NRxkrovnYzDkvByp3GWi5TTDPWirZqjVznMeBdMuReKdDJtF22%2F%2BRS7FZdQCla3YT%2B6VZYvk2ZwM%2Bjz%2BQaSN0qw9mxhYotqpjIB95TPB8fft1jo%2F0pdFBD4%2F%2FoZiJw3SfsK%2F5qpc959Q7LbSHIxdcw3r0KvIrt1sJQtqkydGD9uO72is926zt3YBMzIMLTbB3GRr9KWBf36JZnkjDVuHF%2BHq1ljK6uXtIX%2FNHd%2FVcjV1wTztiUSQVzqKPgUtTT6EbAYuaDY2PuY1ThwVDo6wqUrP%2Frf4sld8NXfLnZDlod2Fyz%2FgQSL6xOt4VcA6mR53%2BBVhCADRtNdasvxSefTmjAyR7Zz3N599jwfnM%2BVVmaic%2BEtmmL37dSuyUCLj9vAVHPrJB1SBzey0Di9ccbgAzXUi4qxrU0A3Cj8NMcd%2BT5YsplRltzDFdNgAXucMecGU1XqM3Jd0lar5NwpZzx272Mi0q7r%2FwhrLO2VzuBYkt9UFBjB59iMQjXJpPP4duxIvYnwnB1LuN7A%2Fh3TQEPZbLlKL%2FlAGB4Yxje7atJOfIZrZwIhMhY9AMZfFSpULKO7GdMinmKfND3ykZzNYMo5jWZFgUZy2rm8gDJy0fLOMPii%2BsQGOqUBK6fGm6UuIraI3fZuhcxOQ5UHub9tJs7RzAa3Ih2jap1%2BcKxLIv83Gf5owiSg7T7MSN6ZJErB4WJ2N656SQGpshdvJUB4SpWQY%2FZt9WCkDEzBiA6nJziPDGK9oX7jWncgloCDo8W23gZk6tZKbls3Cz074sc4HMUOjPrg5UfIOhMUEZoLWCEHdBNJ5NwgQ0xN%2BRuF%2FwT9jcFiVG8hrWUH5Svv0xP9&X-Amz-Signature=ce86518a776f9cff96027bd837074ec043409bcdb8df10e0f74ca5a28c394605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SPUK35N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDImzpMxQqYc92AsCao1X9gE7jWKuK6aZKLLuMMRC2PeAIgMn2S%2B0FKiwAhxOMtfNuE2xEogDybKKHzlCatsEDv7igq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFXNYjUWkoLIF3oaeircA4TBhbnD%2Frdr%2BZv5qOnh1NRxkrovnYzDkvByp3GWi5TTDPWirZqjVznMeBdMuReKdDJtF22%2F%2BRS7FZdQCla3YT%2B6VZYvk2ZwM%2Bjz%2BQaSN0qw9mxhYotqpjIB95TPB8fft1jo%2F0pdFBD4%2F%2FoZiJw3SfsK%2F5qpc959Q7LbSHIxdcw3r0KvIrt1sJQtqkydGD9uO72is926zt3YBMzIMLTbB3GRr9KWBf36JZnkjDVuHF%2BHq1ljK6uXtIX%2FNHd%2FVcjV1wTztiUSQVzqKPgUtTT6EbAYuaDY2PuY1ThwVDo6wqUrP%2Frf4sld8NXfLnZDlod2Fyz%2FgQSL6xOt4VcA6mR53%2BBVhCADRtNdasvxSefTmjAyR7Zz3N599jwfnM%2BVVmaic%2BEtmmL37dSuyUCLj9vAVHPrJB1SBzey0Di9ccbgAzXUi4qxrU0A3Cj8NMcd%2BT5YsplRltzDFdNgAXucMecGU1XqM3Jd0lar5NwpZzx272Mi0q7r%2FwhrLO2VzuBYkt9UFBjB59iMQjXJpPP4duxIvYnwnB1LuN7A%2Fh3TQEPZbLlKL%2FlAGB4Yxje7atJOfIZrZwIhMhY9AMZfFSpULKO7GdMinmKfND3ykZzNYMo5jWZFgUZy2rm8gDJy0fLOMPii%2BsQGOqUBK6fGm6UuIraI3fZuhcxOQ5UHub9tJs7RzAa3Ih2jap1%2BcKxLIv83Gf5owiSg7T7MSN6ZJErB4WJ2N656SQGpshdvJUB4SpWQY%2FZt9WCkDEzBiA6nJziPDGK9oX7jWncgloCDo8W23gZk6tZKbls3Cz074sc4HMUOjPrg5UfIOhMUEZoLWCEHdBNJ5NwgQ0xN%2BRuF%2FwT9jcFiVG8hrWUH5Svv0xP9&X-Amz-Signature=f680645a5253042fe96bfef765bfd844eb4c6b3371a005a0db6296f3c23509c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SPUK35N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDImzpMxQqYc92AsCao1X9gE7jWKuK6aZKLLuMMRC2PeAIgMn2S%2B0FKiwAhxOMtfNuE2xEogDybKKHzlCatsEDv7igq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFXNYjUWkoLIF3oaeircA4TBhbnD%2Frdr%2BZv5qOnh1NRxkrovnYzDkvByp3GWi5TTDPWirZqjVznMeBdMuReKdDJtF22%2F%2BRS7FZdQCla3YT%2B6VZYvk2ZwM%2Bjz%2BQaSN0qw9mxhYotqpjIB95TPB8fft1jo%2F0pdFBD4%2F%2FoZiJw3SfsK%2F5qpc959Q7LbSHIxdcw3r0KvIrt1sJQtqkydGD9uO72is926zt3YBMzIMLTbB3GRr9KWBf36JZnkjDVuHF%2BHq1ljK6uXtIX%2FNHd%2FVcjV1wTztiUSQVzqKPgUtTT6EbAYuaDY2PuY1ThwVDo6wqUrP%2Frf4sld8NXfLnZDlod2Fyz%2FgQSL6xOt4VcA6mR53%2BBVhCADRtNdasvxSefTmjAyR7Zz3N599jwfnM%2BVVmaic%2BEtmmL37dSuyUCLj9vAVHPrJB1SBzey0Di9ccbgAzXUi4qxrU0A3Cj8NMcd%2BT5YsplRltzDFdNgAXucMecGU1XqM3Jd0lar5NwpZzx272Mi0q7r%2FwhrLO2VzuBYkt9UFBjB59iMQjXJpPP4duxIvYnwnB1LuN7A%2Fh3TQEPZbLlKL%2FlAGB4Yxje7atJOfIZrZwIhMhY9AMZfFSpULKO7GdMinmKfND3ykZzNYMo5jWZFgUZy2rm8gDJy0fLOMPii%2BsQGOqUBK6fGm6UuIraI3fZuhcxOQ5UHub9tJs7RzAa3Ih2jap1%2BcKxLIv83Gf5owiSg7T7MSN6ZJErB4WJ2N656SQGpshdvJUB4SpWQY%2FZt9WCkDEzBiA6nJziPDGK9oX7jWncgloCDo8W23gZk6tZKbls3Cz074sc4HMUOjPrg5UfIOhMUEZoLWCEHdBNJ5NwgQ0xN%2BRuF%2FwT9jcFiVG8hrWUH5Svv0xP9&X-Amz-Signature=b38c340402678c13fdaa76630b2423bddabd43f8bdb723008715f9166115349e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SPUK35N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDImzpMxQqYc92AsCao1X9gE7jWKuK6aZKLLuMMRC2PeAIgMn2S%2B0FKiwAhxOMtfNuE2xEogDybKKHzlCatsEDv7igq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFXNYjUWkoLIF3oaeircA4TBhbnD%2Frdr%2BZv5qOnh1NRxkrovnYzDkvByp3GWi5TTDPWirZqjVznMeBdMuReKdDJtF22%2F%2BRS7FZdQCla3YT%2B6VZYvk2ZwM%2Bjz%2BQaSN0qw9mxhYotqpjIB95TPB8fft1jo%2F0pdFBD4%2F%2FoZiJw3SfsK%2F5qpc959Q7LbSHIxdcw3r0KvIrt1sJQtqkydGD9uO72is926zt3YBMzIMLTbB3GRr9KWBf36JZnkjDVuHF%2BHq1ljK6uXtIX%2FNHd%2FVcjV1wTztiUSQVzqKPgUtTT6EbAYuaDY2PuY1ThwVDo6wqUrP%2Frf4sld8NXfLnZDlod2Fyz%2FgQSL6xOt4VcA6mR53%2BBVhCADRtNdasvxSefTmjAyR7Zz3N599jwfnM%2BVVmaic%2BEtmmL37dSuyUCLj9vAVHPrJB1SBzey0Di9ccbgAzXUi4qxrU0A3Cj8NMcd%2BT5YsplRltzDFdNgAXucMecGU1XqM3Jd0lar5NwpZzx272Mi0q7r%2FwhrLO2VzuBYkt9UFBjB59iMQjXJpPP4duxIvYnwnB1LuN7A%2Fh3TQEPZbLlKL%2FlAGB4Yxje7atJOfIZrZwIhMhY9AMZfFSpULKO7GdMinmKfND3ykZzNYMo5jWZFgUZy2rm8gDJy0fLOMPii%2BsQGOqUBK6fGm6UuIraI3fZuhcxOQ5UHub9tJs7RzAa3Ih2jap1%2BcKxLIv83Gf5owiSg7T7MSN6ZJErB4WJ2N656SQGpshdvJUB4SpWQY%2FZt9WCkDEzBiA6nJziPDGK9oX7jWncgloCDo8W23gZk6tZKbls3Cz074sc4HMUOjPrg5UfIOhMUEZoLWCEHdBNJ5NwgQ0xN%2BRuF%2FwT9jcFiVG8hrWUH5Svv0xP9&X-Amz-Signature=0205ace7cb07e3e3b6f87e97843ecde13781f5c9d9d40abe392dd25fa4891833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5TRM3I%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBTcNxtVxOVrX%2Be1UeAnkA6%2FAqBktJBkfqZZuGiQpa4ZAiBs6dhCfsBvb2qEBn709bvrvCC8QWs1cKbIySziqRU2cSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMfUwERa%2BrXV%2BGsDAhKtwDz3akWTTSpqftUpAUm3jOiSpfc3cPEpDZaatL9OvmZKNPd%2BvEsSLmZQoY5VmyLxbzxX700eNYvN1bO1VLliQfbu%2FclCfbX5Kohs1AcRzHWKdWEKlhxZlse08DwH1UAs0HIvL3bG26hIG5VY91ih2jaUT%2BfFCYLFiQcErkq5jf%2BW48fnfa1p9IhR5ziK9uR%2FIPGearW%2Fzanlna1iGOvcxK%2BUrIMKXhynhpdtDv5gj1LM90nrGaFQfupIjwLCquMEd9SZSYrEbTsDIa4sRt9HjBabQ5l2EbnyyboItmEEvfnCAWTbKCdx5RsPU%2Fxjaq8GwaEgZRBK1g4p%2BWqr1XfyhDQ2Gw5DHkoqEOxYcp1%2FHcfJE878lI550URyBnwduXn5%2BfUv93DRDTnKEapCIwxmkshKFktnQ6hSrQ5po8l3RLX5SLcPbQoyg3xuW464bKaQhigV1TrB1zbZwQsb5zVCk9RXsQmoMPppHsLItwYEphzou5IzHbx49uMFRxre1CDMANr4GJFiuvzWCsUmaNwc4YL8T6xwLKQ6IYjhikKxFRE1YCzUXg5Q17e7soVkFD2AmFqqPONw6CMp1HEouQFuFlUL9C6mCrDczXIBs8XN4QZu6KumB9U5%2FR4LGK38EwxqP6xAY6pgFx9yBTuhqwlAu2qCUWmDPDhu%2Bh1%2FvUZ%2Bo8bliY%2BvqBilqe6g8%2BMiuPMbe9XOP%2ByAl%2FD1N0fp32TdEauGAUyvBQppyi5du5Z7DyR5kbFz6Z219ypBO57G1D3NssQrt2DerpTgV8NIQyLrDxKGoCd6lq3WbkXX2zDhBDhro%2FsFh8j2TyjfafrYmHaHnJN4t7hhDPz8HX9tyzUvfhZlNKd5NQQgzum0Xt&X-Amz-Signature=5f56dc6b99b1814eb4c86a39c4ebc1daeb63232085c6404666f771905c654df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJJ5AV7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUir8F0shtvT9b9GmpO%2BIAY6N2NWhO1N5A26q1kVFqRwIgbhwcK9ebwCl%2FOBo2jHIXJw5P2tnu3ZQH3Z0ifcMNVLkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIamvWIklFma7CCS3CrcA9mQomB%2BV9tiXp%2F1wnKsStaxaTAEkSD81ywIvsmsnnKQQXSz7hKrY9%2BqxAKs9EXF2fZi8MD7P2kqnhXBkJqNpdOc9s4NeNyQdTU3j3S%2BAgmIm0M8JT7R5Sl0J2LyoCrDHohmn%2BQWz%2FrFqK9m4vGPEFL9mFph%2BJL9p%2BmGl1mpW0XsFuZ9aUjGIeU3vjwNNAUGkX9TdJVigB9FMACuvdXmfum84t2DJsayXScVgSjGSkgdsVYPYSHQDg60%2Fw9nDV7vegc%2FTIRYBczGcgGSCPcU85Q2prWPO%2F9RcmukrwLHBE%2BWQBRxz6ufuyQblJd%2By2w2lverxd4%2FnGj2z7HHMnaGY1MqCGZUAvDgW%2Fg%2FSHs3rg4dayMSk8odEmU5Pt42QpE2VH5ZRafX%2FhmaCPUuEfA%2F2Yfbgp307E26M0VJ0XglyCEc1nAw2yE88QqBMnkuc0ijar1OMueaG1QQQd3D5OESs7Vm6JOfbdF7A7Ev%2B5OeSZQ9mwrDrTp7r%2B7SQWvPuXmUvqZwS1qn%2B4WHUv7EOXTVEkzTz1vuSkeveRmz5cicKohtDuCXF8QXNtekUSSW4tBJ9MGXOBNO6BuHIJ7qEhInGMD%2BfpyNtCIbVNfUGUR9lu9UIC7KEYjda92x8yzAMPui%2BsQGOqUBLwtu%2BBFyUC1OL%2FmubonG6bC0ng79s6rrQnwlfKx0Llu9vF0nVJto%2FvQVpy2liqQLRP3Ti34gVPfw1JtZ37MupRuXJLAJLfElVfaxEgj74fQhWGxbGbqmB%2BGSMxBvCzPeXP%2B7FbmSu9q%2F4FqhOZ2DpxDB3MkbnLeP1HChQK7MPaRsvFI8JtW1khU3CAJD1adSEL7HRFKBB7SL8UAcWDXB7tzt3VoI&X-Amz-Signature=ff3aad8fa9f1a9b278fe42eb7969e2a26c30e5400814fe6255be0aed94e900eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJJ5AV7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUir8F0shtvT9b9GmpO%2BIAY6N2NWhO1N5A26q1kVFqRwIgbhwcK9ebwCl%2FOBo2jHIXJw5P2tnu3ZQH3Z0ifcMNVLkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIamvWIklFma7CCS3CrcA9mQomB%2BV9tiXp%2F1wnKsStaxaTAEkSD81ywIvsmsnnKQQXSz7hKrY9%2BqxAKs9EXF2fZi8MD7P2kqnhXBkJqNpdOc9s4NeNyQdTU3j3S%2BAgmIm0M8JT7R5Sl0J2LyoCrDHohmn%2BQWz%2FrFqK9m4vGPEFL9mFph%2BJL9p%2BmGl1mpW0XsFuZ9aUjGIeU3vjwNNAUGkX9TdJVigB9FMACuvdXmfum84t2DJsayXScVgSjGSkgdsVYPYSHQDg60%2Fw9nDV7vegc%2FTIRYBczGcgGSCPcU85Q2prWPO%2F9RcmukrwLHBE%2BWQBRxz6ufuyQblJd%2By2w2lverxd4%2FnGj2z7HHMnaGY1MqCGZUAvDgW%2Fg%2FSHs3rg4dayMSk8odEmU5Pt42QpE2VH5ZRafX%2FhmaCPUuEfA%2F2Yfbgp307E26M0VJ0XglyCEc1nAw2yE88QqBMnkuc0ijar1OMueaG1QQQd3D5OESs7Vm6JOfbdF7A7Ev%2B5OeSZQ9mwrDrTp7r%2B7SQWvPuXmUvqZwS1qn%2B4WHUv7EOXTVEkzTz1vuSkeveRmz5cicKohtDuCXF8QXNtekUSSW4tBJ9MGXOBNO6BuHIJ7qEhInGMD%2BfpyNtCIbVNfUGUR9lu9UIC7KEYjda92x8yzAMPui%2BsQGOqUBLwtu%2BBFyUC1OL%2FmubonG6bC0ng79s6rrQnwlfKx0Llu9vF0nVJto%2FvQVpy2liqQLRP3Ti34gVPfw1JtZ37MupRuXJLAJLfElVfaxEgj74fQhWGxbGbqmB%2BGSMxBvCzPeXP%2B7FbmSu9q%2F4FqhOZ2DpxDB3MkbnLeP1HChQK7MPaRsvFI8JtW1khU3CAJD1adSEL7HRFKBB7SL8UAcWDXB7tzt3VoI&X-Amz-Signature=62827a8a2278877a199eff53d45360771c087655695b4e6c163d0912bbf6d137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJJ5AV7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUir8F0shtvT9b9GmpO%2BIAY6N2NWhO1N5A26q1kVFqRwIgbhwcK9ebwCl%2FOBo2jHIXJw5P2tnu3ZQH3Z0ifcMNVLkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIamvWIklFma7CCS3CrcA9mQomB%2BV9tiXp%2F1wnKsStaxaTAEkSD81ywIvsmsnnKQQXSz7hKrY9%2BqxAKs9EXF2fZi8MD7P2kqnhXBkJqNpdOc9s4NeNyQdTU3j3S%2BAgmIm0M8JT7R5Sl0J2LyoCrDHohmn%2BQWz%2FrFqK9m4vGPEFL9mFph%2BJL9p%2BmGl1mpW0XsFuZ9aUjGIeU3vjwNNAUGkX9TdJVigB9FMACuvdXmfum84t2DJsayXScVgSjGSkgdsVYPYSHQDg60%2Fw9nDV7vegc%2FTIRYBczGcgGSCPcU85Q2prWPO%2F9RcmukrwLHBE%2BWQBRxz6ufuyQblJd%2By2w2lverxd4%2FnGj2z7HHMnaGY1MqCGZUAvDgW%2Fg%2FSHs3rg4dayMSk8odEmU5Pt42QpE2VH5ZRafX%2FhmaCPUuEfA%2F2Yfbgp307E26M0VJ0XglyCEc1nAw2yE88QqBMnkuc0ijar1OMueaG1QQQd3D5OESs7Vm6JOfbdF7A7Ev%2B5OeSZQ9mwrDrTp7r%2B7SQWvPuXmUvqZwS1qn%2B4WHUv7EOXTVEkzTz1vuSkeveRmz5cicKohtDuCXF8QXNtekUSSW4tBJ9MGXOBNO6BuHIJ7qEhInGMD%2BfpyNtCIbVNfUGUR9lu9UIC7KEYjda92x8yzAMPui%2BsQGOqUBLwtu%2BBFyUC1OL%2FmubonG6bC0ng79s6rrQnwlfKx0Llu9vF0nVJto%2FvQVpy2liqQLRP3Ti34gVPfw1JtZ37MupRuXJLAJLfElVfaxEgj74fQhWGxbGbqmB%2BGSMxBvCzPeXP%2B7FbmSu9q%2F4FqhOZ2DpxDB3MkbnLeP1HChQK7MPaRsvFI8JtW1khU3CAJD1adSEL7HRFKBB7SL8UAcWDXB7tzt3VoI&X-Amz-Signature=3a5bfd74d3ea72e56e47cf5f66ad410fdc21cbbe805d15def9845c378d90ddb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJJ5AV7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUir8F0shtvT9b9GmpO%2BIAY6N2NWhO1N5A26q1kVFqRwIgbhwcK9ebwCl%2FOBo2jHIXJw5P2tnu3ZQH3Z0ifcMNVLkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIamvWIklFma7CCS3CrcA9mQomB%2BV9tiXp%2F1wnKsStaxaTAEkSD81ywIvsmsnnKQQXSz7hKrY9%2BqxAKs9EXF2fZi8MD7P2kqnhXBkJqNpdOc9s4NeNyQdTU3j3S%2BAgmIm0M8JT7R5Sl0J2LyoCrDHohmn%2BQWz%2FrFqK9m4vGPEFL9mFph%2BJL9p%2BmGl1mpW0XsFuZ9aUjGIeU3vjwNNAUGkX9TdJVigB9FMACuvdXmfum84t2DJsayXScVgSjGSkgdsVYPYSHQDg60%2Fw9nDV7vegc%2FTIRYBczGcgGSCPcU85Q2prWPO%2F9RcmukrwLHBE%2BWQBRxz6ufuyQblJd%2By2w2lverxd4%2FnGj2z7HHMnaGY1MqCGZUAvDgW%2Fg%2FSHs3rg4dayMSk8odEmU5Pt42QpE2VH5ZRafX%2FhmaCPUuEfA%2F2Yfbgp307E26M0VJ0XglyCEc1nAw2yE88QqBMnkuc0ijar1OMueaG1QQQd3D5OESs7Vm6JOfbdF7A7Ev%2B5OeSZQ9mwrDrTp7r%2B7SQWvPuXmUvqZwS1qn%2B4WHUv7EOXTVEkzTz1vuSkeveRmz5cicKohtDuCXF8QXNtekUSSW4tBJ9MGXOBNO6BuHIJ7qEhInGMD%2BfpyNtCIbVNfUGUR9lu9UIC7KEYjda92x8yzAMPui%2BsQGOqUBLwtu%2BBFyUC1OL%2FmubonG6bC0ng79s6rrQnwlfKx0Llu9vF0nVJto%2FvQVpy2liqQLRP3Ti34gVPfw1JtZ37MupRuXJLAJLfElVfaxEgj74fQhWGxbGbqmB%2BGSMxBvCzPeXP%2B7FbmSu9q%2F4FqhOZ2DpxDB3MkbnLeP1HChQK7MPaRsvFI8JtW1khU3CAJD1adSEL7HRFKBB7SL8UAcWDXB7tzt3VoI&X-Amz-Signature=9183d72d5fabd5a7603a5fa315fb1e7bc14d6080ec1a42882ad8fe45811b34a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJJ5AV7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUir8F0shtvT9b9GmpO%2BIAY6N2NWhO1N5A26q1kVFqRwIgbhwcK9ebwCl%2FOBo2jHIXJw5P2tnu3ZQH3Z0ifcMNVLkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIamvWIklFma7CCS3CrcA9mQomB%2BV9tiXp%2F1wnKsStaxaTAEkSD81ywIvsmsnnKQQXSz7hKrY9%2BqxAKs9EXF2fZi8MD7P2kqnhXBkJqNpdOc9s4NeNyQdTU3j3S%2BAgmIm0M8JT7R5Sl0J2LyoCrDHohmn%2BQWz%2FrFqK9m4vGPEFL9mFph%2BJL9p%2BmGl1mpW0XsFuZ9aUjGIeU3vjwNNAUGkX9TdJVigB9FMACuvdXmfum84t2DJsayXScVgSjGSkgdsVYPYSHQDg60%2Fw9nDV7vegc%2FTIRYBczGcgGSCPcU85Q2prWPO%2F9RcmukrwLHBE%2BWQBRxz6ufuyQblJd%2By2w2lverxd4%2FnGj2z7HHMnaGY1MqCGZUAvDgW%2Fg%2FSHs3rg4dayMSk8odEmU5Pt42QpE2VH5ZRafX%2FhmaCPUuEfA%2F2Yfbgp307E26M0VJ0XglyCEc1nAw2yE88QqBMnkuc0ijar1OMueaG1QQQd3D5OESs7Vm6JOfbdF7A7Ev%2B5OeSZQ9mwrDrTp7r%2B7SQWvPuXmUvqZwS1qn%2B4WHUv7EOXTVEkzTz1vuSkeveRmz5cicKohtDuCXF8QXNtekUSSW4tBJ9MGXOBNO6BuHIJ7qEhInGMD%2BfpyNtCIbVNfUGUR9lu9UIC7KEYjda92x8yzAMPui%2BsQGOqUBLwtu%2BBFyUC1OL%2FmubonG6bC0ng79s6rrQnwlfKx0Llu9vF0nVJto%2FvQVpy2liqQLRP3Ti34gVPfw1JtZ37MupRuXJLAJLfElVfaxEgj74fQhWGxbGbqmB%2BGSMxBvCzPeXP%2B7FbmSu9q%2F4FqhOZ2DpxDB3MkbnLeP1HChQK7MPaRsvFI8JtW1khU3CAJD1adSEL7HRFKBB7SL8UAcWDXB7tzt3VoI&X-Amz-Signature=925a728ddbf45d4c40c28ee6ab18d1cda35d4d9f86340f6b832795429417036b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJJ5AV7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUir8F0shtvT9b9GmpO%2BIAY6N2NWhO1N5A26q1kVFqRwIgbhwcK9ebwCl%2FOBo2jHIXJw5P2tnu3ZQH3Z0ifcMNVLkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIamvWIklFma7CCS3CrcA9mQomB%2BV9tiXp%2F1wnKsStaxaTAEkSD81ywIvsmsnnKQQXSz7hKrY9%2BqxAKs9EXF2fZi8MD7P2kqnhXBkJqNpdOc9s4NeNyQdTU3j3S%2BAgmIm0M8JT7R5Sl0J2LyoCrDHohmn%2BQWz%2FrFqK9m4vGPEFL9mFph%2BJL9p%2BmGl1mpW0XsFuZ9aUjGIeU3vjwNNAUGkX9TdJVigB9FMACuvdXmfum84t2DJsayXScVgSjGSkgdsVYPYSHQDg60%2Fw9nDV7vegc%2FTIRYBczGcgGSCPcU85Q2prWPO%2F9RcmukrwLHBE%2BWQBRxz6ufuyQblJd%2By2w2lverxd4%2FnGj2z7HHMnaGY1MqCGZUAvDgW%2Fg%2FSHs3rg4dayMSk8odEmU5Pt42QpE2VH5ZRafX%2FhmaCPUuEfA%2F2Yfbgp307E26M0VJ0XglyCEc1nAw2yE88QqBMnkuc0ijar1OMueaG1QQQd3D5OESs7Vm6JOfbdF7A7Ev%2B5OeSZQ9mwrDrTp7r%2B7SQWvPuXmUvqZwS1qn%2B4WHUv7EOXTVEkzTz1vuSkeveRmz5cicKohtDuCXF8QXNtekUSSW4tBJ9MGXOBNO6BuHIJ7qEhInGMD%2BfpyNtCIbVNfUGUR9lu9UIC7KEYjda92x8yzAMPui%2BsQGOqUBLwtu%2BBFyUC1OL%2FmubonG6bC0ng79s6rrQnwlfKx0Llu9vF0nVJto%2FvQVpy2liqQLRP3Ti34gVPfw1JtZ37MupRuXJLAJLfElVfaxEgj74fQhWGxbGbqmB%2BGSMxBvCzPeXP%2B7FbmSu9q%2F4FqhOZ2DpxDB3MkbnLeP1HChQK7MPaRsvFI8JtW1khU3CAJD1adSEL7HRFKBB7SL8UAcWDXB7tzt3VoI&X-Amz-Signature=8692090bf6b851232ee6b093bc8aa1c37ac49d019f24ba589b874a4820768cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJJ5AV7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUir8F0shtvT9b9GmpO%2BIAY6N2NWhO1N5A26q1kVFqRwIgbhwcK9ebwCl%2FOBo2jHIXJw5P2tnu3ZQH3Z0ifcMNVLkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIamvWIklFma7CCS3CrcA9mQomB%2BV9tiXp%2F1wnKsStaxaTAEkSD81ywIvsmsnnKQQXSz7hKrY9%2BqxAKs9EXF2fZi8MD7P2kqnhXBkJqNpdOc9s4NeNyQdTU3j3S%2BAgmIm0M8JT7R5Sl0J2LyoCrDHohmn%2BQWz%2FrFqK9m4vGPEFL9mFph%2BJL9p%2BmGl1mpW0XsFuZ9aUjGIeU3vjwNNAUGkX9TdJVigB9FMACuvdXmfum84t2DJsayXScVgSjGSkgdsVYPYSHQDg60%2Fw9nDV7vegc%2FTIRYBczGcgGSCPcU85Q2prWPO%2F9RcmukrwLHBE%2BWQBRxz6ufuyQblJd%2By2w2lverxd4%2FnGj2z7HHMnaGY1MqCGZUAvDgW%2Fg%2FSHs3rg4dayMSk8odEmU5Pt42QpE2VH5ZRafX%2FhmaCPUuEfA%2F2Yfbgp307E26M0VJ0XglyCEc1nAw2yE88QqBMnkuc0ijar1OMueaG1QQQd3D5OESs7Vm6JOfbdF7A7Ev%2B5OeSZQ9mwrDrTp7r%2B7SQWvPuXmUvqZwS1qn%2B4WHUv7EOXTVEkzTz1vuSkeveRmz5cicKohtDuCXF8QXNtekUSSW4tBJ9MGXOBNO6BuHIJ7qEhInGMD%2BfpyNtCIbVNfUGUR9lu9UIC7KEYjda92x8yzAMPui%2BsQGOqUBLwtu%2BBFyUC1OL%2FmubonG6bC0ng79s6rrQnwlfKx0Llu9vF0nVJto%2FvQVpy2liqQLRP3Ti34gVPfw1JtZ37MupRuXJLAJLfElVfaxEgj74fQhWGxbGbqmB%2BGSMxBvCzPeXP%2B7FbmSu9q%2F4FqhOZ2DpxDB3MkbnLeP1HChQK7MPaRsvFI8JtW1khU3CAJD1adSEL7HRFKBB7SL8UAcWDXB7tzt3VoI&X-Amz-Signature=1cfc723652b970bb6ab3084fdfa9115b2430329fc52a63dd221c900baa885d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJJ5AV7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUir8F0shtvT9b9GmpO%2BIAY6N2NWhO1N5A26q1kVFqRwIgbhwcK9ebwCl%2FOBo2jHIXJw5P2tnu3ZQH3Z0ifcMNVLkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIamvWIklFma7CCS3CrcA9mQomB%2BV9tiXp%2F1wnKsStaxaTAEkSD81ywIvsmsnnKQQXSz7hKrY9%2BqxAKs9EXF2fZi8MD7P2kqnhXBkJqNpdOc9s4NeNyQdTU3j3S%2BAgmIm0M8JT7R5Sl0J2LyoCrDHohmn%2BQWz%2FrFqK9m4vGPEFL9mFph%2BJL9p%2BmGl1mpW0XsFuZ9aUjGIeU3vjwNNAUGkX9TdJVigB9FMACuvdXmfum84t2DJsayXScVgSjGSkgdsVYPYSHQDg60%2Fw9nDV7vegc%2FTIRYBczGcgGSCPcU85Q2prWPO%2F9RcmukrwLHBE%2BWQBRxz6ufuyQblJd%2By2w2lverxd4%2FnGj2z7HHMnaGY1MqCGZUAvDgW%2Fg%2FSHs3rg4dayMSk8odEmU5Pt42QpE2VH5ZRafX%2FhmaCPUuEfA%2F2Yfbgp307E26M0VJ0XglyCEc1nAw2yE88QqBMnkuc0ijar1OMueaG1QQQd3D5OESs7Vm6JOfbdF7A7Ev%2B5OeSZQ9mwrDrTp7r%2B7SQWvPuXmUvqZwS1qn%2B4WHUv7EOXTVEkzTz1vuSkeveRmz5cicKohtDuCXF8QXNtekUSSW4tBJ9MGXOBNO6BuHIJ7qEhInGMD%2BfpyNtCIbVNfUGUR9lu9UIC7KEYjda92x8yzAMPui%2BsQGOqUBLwtu%2BBFyUC1OL%2FmubonG6bC0ng79s6rrQnwlfKx0Llu9vF0nVJto%2FvQVpy2liqQLRP3Ti34gVPfw1JtZ37MupRuXJLAJLfElVfaxEgj74fQhWGxbGbqmB%2BGSMxBvCzPeXP%2B7FbmSu9q%2F4FqhOZ2DpxDB3MkbnLeP1HChQK7MPaRsvFI8JtW1khU3CAJD1adSEL7HRFKBB7SL8UAcWDXB7tzt3VoI&X-Amz-Signature=2913d64ff2ec114b88399a84ef6dbe902c4dea02af479e625d57986981fc95a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJJ5AV7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUir8F0shtvT9b9GmpO%2BIAY6N2NWhO1N5A26q1kVFqRwIgbhwcK9ebwCl%2FOBo2jHIXJw5P2tnu3ZQH3Z0ifcMNVLkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIamvWIklFma7CCS3CrcA9mQomB%2BV9tiXp%2F1wnKsStaxaTAEkSD81ywIvsmsnnKQQXSz7hKrY9%2BqxAKs9EXF2fZi8MD7P2kqnhXBkJqNpdOc9s4NeNyQdTU3j3S%2BAgmIm0M8JT7R5Sl0J2LyoCrDHohmn%2BQWz%2FrFqK9m4vGPEFL9mFph%2BJL9p%2BmGl1mpW0XsFuZ9aUjGIeU3vjwNNAUGkX9TdJVigB9FMACuvdXmfum84t2DJsayXScVgSjGSkgdsVYPYSHQDg60%2Fw9nDV7vegc%2FTIRYBczGcgGSCPcU85Q2prWPO%2F9RcmukrwLHBE%2BWQBRxz6ufuyQblJd%2By2w2lverxd4%2FnGj2z7HHMnaGY1MqCGZUAvDgW%2Fg%2FSHs3rg4dayMSk8odEmU5Pt42QpE2VH5ZRafX%2FhmaCPUuEfA%2F2Yfbgp307E26M0VJ0XglyCEc1nAw2yE88QqBMnkuc0ijar1OMueaG1QQQd3D5OESs7Vm6JOfbdF7A7Ev%2B5OeSZQ9mwrDrTp7r%2B7SQWvPuXmUvqZwS1qn%2B4WHUv7EOXTVEkzTz1vuSkeveRmz5cicKohtDuCXF8QXNtekUSSW4tBJ9MGXOBNO6BuHIJ7qEhInGMD%2BfpyNtCIbVNfUGUR9lu9UIC7KEYjda92x8yzAMPui%2BsQGOqUBLwtu%2BBFyUC1OL%2FmubonG6bC0ng79s6rrQnwlfKx0Llu9vF0nVJto%2FvQVpy2liqQLRP3Ti34gVPfw1JtZ37MupRuXJLAJLfElVfaxEgj74fQhWGxbGbqmB%2BGSMxBvCzPeXP%2B7FbmSu9q%2F4FqhOZ2DpxDB3MkbnLeP1HChQK7MPaRsvFI8JtW1khU3CAJD1adSEL7HRFKBB7SL8UAcWDXB7tzt3VoI&X-Amz-Signature=79640bd0b00088e765192ef9f62398b2e7f45a6610309f10269ba30daf3a2b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
