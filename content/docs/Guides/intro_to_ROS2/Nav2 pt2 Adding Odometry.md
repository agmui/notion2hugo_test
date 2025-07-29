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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZMPKAK6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGeYowHNvYp5bsFqle4IoAM11k3n9b2QbteAsltHnGSmAiAGminUvXVIAWC2XX52G73hVJbR4AiYZgDDuGOTqSe5gyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlMaJwXTKr82Pp4MMKtwDvb5fFKuCPeMB39WNINZk606slH4iyxsV3FOF7duQnAhZ5pZu%2Bss0A9R%2F0mtzjSbVRe%2BUbZupJalIBd2%2BbdeTEUljsxxBUx0rfzP7Dlm7d%2Fzt4PLcrj1c0s3T35zUNiS7LC5oTSojIPrgbhliUsW7S1NFvnoq5UUqqppJfZhZbFggWPZziFNeeLEwmJy6bNVM89gzzzvVv9D9BhyQo431qK9lMR32Y%2BYTPCiebVdbNQ2nlDWL8v%2Bmmx7hk2rLU1xozEjwHICFwQvpCnFV8TrxBPqlCJZGOgK66JL%2BnJCb%2FqiaPyehJJqIeke2%2F9%2Fut93Q3luPjmS6dgckDSkEEYsG4q1Qt2Ci%2FwywOgmoeXeiW5kXVQlaAQyQX30Vz6nPwRBGnPgjNq5g%2F6uta1U8K8RjNyvrCRXBUEmMUlGAc9jsSMSooQlOqUySbw0onXzFOL7RhahSdiAQERpB5vnrZFuj63wtzDWf91yyIIP4d7zrpwVdG0t8LKQGoGOqzUQtu7d16JGd1jTK%2Bl69M9Ut0jZwKRcAVsAFJgFPZA%2BbEok%2Fix423Xy2l9n8eZmklrHTZaYVXt19fwHbAZhXdWlIIs%2BTeeFnh4FodOqPIqm%2BBPgw2GYwtNETwiUe%2Be0zp8owlrWhxAY6pgGp%2Fi%2F4VmTq3FryKDKo1%2FQDo0HwhWKvRCtzfIJEOalzPDSpkNQWoGdS3Vvn%2FzNLWjskBOpS9R4%2F2pTnF7uWqmx4FVb12SccvfhBRIkJsWsgYA7C74NsiorrEcMnuGhl%2BsECoxWXpfHuk%2Bj9YeVd%2FSkmseknbr%2FS9ABfJytDyNlAVs8ErX9OubZpWXJFGdBwGCw%2FHlZpT7FT6fbbXCdjqHDqMEhLbgE4&X-Amz-Signature=b86999a84dc07b64d2818abdf562c4662cacb9d377f078b4fe3cdec54399a838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZMPKAK6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGeYowHNvYp5bsFqle4IoAM11k3n9b2QbteAsltHnGSmAiAGminUvXVIAWC2XX52G73hVJbR4AiYZgDDuGOTqSe5gyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlMaJwXTKr82Pp4MMKtwDvb5fFKuCPeMB39WNINZk606slH4iyxsV3FOF7duQnAhZ5pZu%2Bss0A9R%2F0mtzjSbVRe%2BUbZupJalIBd2%2BbdeTEUljsxxBUx0rfzP7Dlm7d%2Fzt4PLcrj1c0s3T35zUNiS7LC5oTSojIPrgbhliUsW7S1NFvnoq5UUqqppJfZhZbFggWPZziFNeeLEwmJy6bNVM89gzzzvVv9D9BhyQo431qK9lMR32Y%2BYTPCiebVdbNQ2nlDWL8v%2Bmmx7hk2rLU1xozEjwHICFwQvpCnFV8TrxBPqlCJZGOgK66JL%2BnJCb%2FqiaPyehJJqIeke2%2F9%2Fut93Q3luPjmS6dgckDSkEEYsG4q1Qt2Ci%2FwywOgmoeXeiW5kXVQlaAQyQX30Vz6nPwRBGnPgjNq5g%2F6uta1U8K8RjNyvrCRXBUEmMUlGAc9jsSMSooQlOqUySbw0onXzFOL7RhahSdiAQERpB5vnrZFuj63wtzDWf91yyIIP4d7zrpwVdG0t8LKQGoGOqzUQtu7d16JGd1jTK%2Bl69M9Ut0jZwKRcAVsAFJgFPZA%2BbEok%2Fix423Xy2l9n8eZmklrHTZaYVXt19fwHbAZhXdWlIIs%2BTeeFnh4FodOqPIqm%2BBPgw2GYwtNETwiUe%2Be0zp8owlrWhxAY6pgGp%2Fi%2F4VmTq3FryKDKo1%2FQDo0HwhWKvRCtzfIJEOalzPDSpkNQWoGdS3Vvn%2FzNLWjskBOpS9R4%2F2pTnF7uWqmx4FVb12SccvfhBRIkJsWsgYA7C74NsiorrEcMnuGhl%2BsECoxWXpfHuk%2Bj9YeVd%2FSkmseknbr%2FS9ABfJytDyNlAVs8ErX9OubZpWXJFGdBwGCw%2FHlZpT7FT6fbbXCdjqHDqMEhLbgE4&X-Amz-Signature=fe3da50bab4cf5c7bb9a8328172cb5ea5fdc715107730f4d873be3d0c4262a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZMPKAK6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGeYowHNvYp5bsFqle4IoAM11k3n9b2QbteAsltHnGSmAiAGminUvXVIAWC2XX52G73hVJbR4AiYZgDDuGOTqSe5gyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlMaJwXTKr82Pp4MMKtwDvb5fFKuCPeMB39WNINZk606slH4iyxsV3FOF7duQnAhZ5pZu%2Bss0A9R%2F0mtzjSbVRe%2BUbZupJalIBd2%2BbdeTEUljsxxBUx0rfzP7Dlm7d%2Fzt4PLcrj1c0s3T35zUNiS7LC5oTSojIPrgbhliUsW7S1NFvnoq5UUqqppJfZhZbFggWPZziFNeeLEwmJy6bNVM89gzzzvVv9D9BhyQo431qK9lMR32Y%2BYTPCiebVdbNQ2nlDWL8v%2Bmmx7hk2rLU1xozEjwHICFwQvpCnFV8TrxBPqlCJZGOgK66JL%2BnJCb%2FqiaPyehJJqIeke2%2F9%2Fut93Q3luPjmS6dgckDSkEEYsG4q1Qt2Ci%2FwywOgmoeXeiW5kXVQlaAQyQX30Vz6nPwRBGnPgjNq5g%2F6uta1U8K8RjNyvrCRXBUEmMUlGAc9jsSMSooQlOqUySbw0onXzFOL7RhahSdiAQERpB5vnrZFuj63wtzDWf91yyIIP4d7zrpwVdG0t8LKQGoGOqzUQtu7d16JGd1jTK%2Bl69M9Ut0jZwKRcAVsAFJgFPZA%2BbEok%2Fix423Xy2l9n8eZmklrHTZaYVXt19fwHbAZhXdWlIIs%2BTeeFnh4FodOqPIqm%2BBPgw2GYwtNETwiUe%2Be0zp8owlrWhxAY6pgGp%2Fi%2F4VmTq3FryKDKo1%2FQDo0HwhWKvRCtzfIJEOalzPDSpkNQWoGdS3Vvn%2FzNLWjskBOpS9R4%2F2pTnF7uWqmx4FVb12SccvfhBRIkJsWsgYA7C74NsiorrEcMnuGhl%2BsECoxWXpfHuk%2Bj9YeVd%2FSkmseknbr%2FS9ABfJytDyNlAVs8ErX9OubZpWXJFGdBwGCw%2FHlZpT7FT6fbbXCdjqHDqMEhLbgE4&X-Amz-Signature=ce6eee0861845ac3ba94efdbf349a0b0558732b3ac8c4b1a50715067f532c637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZMPKAK6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGeYowHNvYp5bsFqle4IoAM11k3n9b2QbteAsltHnGSmAiAGminUvXVIAWC2XX52G73hVJbR4AiYZgDDuGOTqSe5gyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlMaJwXTKr82Pp4MMKtwDvb5fFKuCPeMB39WNINZk606slH4iyxsV3FOF7duQnAhZ5pZu%2Bss0A9R%2F0mtzjSbVRe%2BUbZupJalIBd2%2BbdeTEUljsxxBUx0rfzP7Dlm7d%2Fzt4PLcrj1c0s3T35zUNiS7LC5oTSojIPrgbhliUsW7S1NFvnoq5UUqqppJfZhZbFggWPZziFNeeLEwmJy6bNVM89gzzzvVv9D9BhyQo431qK9lMR32Y%2BYTPCiebVdbNQ2nlDWL8v%2Bmmx7hk2rLU1xozEjwHICFwQvpCnFV8TrxBPqlCJZGOgK66JL%2BnJCb%2FqiaPyehJJqIeke2%2F9%2Fut93Q3luPjmS6dgckDSkEEYsG4q1Qt2Ci%2FwywOgmoeXeiW5kXVQlaAQyQX30Vz6nPwRBGnPgjNq5g%2F6uta1U8K8RjNyvrCRXBUEmMUlGAc9jsSMSooQlOqUySbw0onXzFOL7RhahSdiAQERpB5vnrZFuj63wtzDWf91yyIIP4d7zrpwVdG0t8LKQGoGOqzUQtu7d16JGd1jTK%2Bl69M9Ut0jZwKRcAVsAFJgFPZA%2BbEok%2Fix423Xy2l9n8eZmklrHTZaYVXt19fwHbAZhXdWlIIs%2BTeeFnh4FodOqPIqm%2BBPgw2GYwtNETwiUe%2Be0zp8owlrWhxAY6pgGp%2Fi%2F4VmTq3FryKDKo1%2FQDo0HwhWKvRCtzfIJEOalzPDSpkNQWoGdS3Vvn%2FzNLWjskBOpS9R4%2F2pTnF7uWqmx4FVb12SccvfhBRIkJsWsgYA7C74NsiorrEcMnuGhl%2BsECoxWXpfHuk%2Bj9YeVd%2FSkmseknbr%2FS9ABfJytDyNlAVs8ErX9OubZpWXJFGdBwGCw%2FHlZpT7FT6fbbXCdjqHDqMEhLbgE4&X-Amz-Signature=466d4baad9bb175608f4c318c524aa19400ef3a6bc508093fb601c07e618138e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZMPKAK6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGeYowHNvYp5bsFqle4IoAM11k3n9b2QbteAsltHnGSmAiAGminUvXVIAWC2XX52G73hVJbR4AiYZgDDuGOTqSe5gyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlMaJwXTKr82Pp4MMKtwDvb5fFKuCPeMB39WNINZk606slH4iyxsV3FOF7duQnAhZ5pZu%2Bss0A9R%2F0mtzjSbVRe%2BUbZupJalIBd2%2BbdeTEUljsxxBUx0rfzP7Dlm7d%2Fzt4PLcrj1c0s3T35zUNiS7LC5oTSojIPrgbhliUsW7S1NFvnoq5UUqqppJfZhZbFggWPZziFNeeLEwmJy6bNVM89gzzzvVv9D9BhyQo431qK9lMR32Y%2BYTPCiebVdbNQ2nlDWL8v%2Bmmx7hk2rLU1xozEjwHICFwQvpCnFV8TrxBPqlCJZGOgK66JL%2BnJCb%2FqiaPyehJJqIeke2%2F9%2Fut93Q3luPjmS6dgckDSkEEYsG4q1Qt2Ci%2FwywOgmoeXeiW5kXVQlaAQyQX30Vz6nPwRBGnPgjNq5g%2F6uta1U8K8RjNyvrCRXBUEmMUlGAc9jsSMSooQlOqUySbw0onXzFOL7RhahSdiAQERpB5vnrZFuj63wtzDWf91yyIIP4d7zrpwVdG0t8LKQGoGOqzUQtu7d16JGd1jTK%2Bl69M9Ut0jZwKRcAVsAFJgFPZA%2BbEok%2Fix423Xy2l9n8eZmklrHTZaYVXt19fwHbAZhXdWlIIs%2BTeeFnh4FodOqPIqm%2BBPgw2GYwtNETwiUe%2Be0zp8owlrWhxAY6pgGp%2Fi%2F4VmTq3FryKDKo1%2FQDo0HwhWKvRCtzfIJEOalzPDSpkNQWoGdS3Vvn%2FzNLWjskBOpS9R4%2F2pTnF7uWqmx4FVb12SccvfhBRIkJsWsgYA7C74NsiorrEcMnuGhl%2BsECoxWXpfHuk%2Bj9YeVd%2FSkmseknbr%2FS9ABfJytDyNlAVs8ErX9OubZpWXJFGdBwGCw%2FHlZpT7FT6fbbXCdjqHDqMEhLbgE4&X-Amz-Signature=7a7f433735ef60a7731bf2c818006687684a5289293a73802655005d6423a7c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZMPKAK6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGeYowHNvYp5bsFqle4IoAM11k3n9b2QbteAsltHnGSmAiAGminUvXVIAWC2XX52G73hVJbR4AiYZgDDuGOTqSe5gyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlMaJwXTKr82Pp4MMKtwDvb5fFKuCPeMB39WNINZk606slH4iyxsV3FOF7duQnAhZ5pZu%2Bss0A9R%2F0mtzjSbVRe%2BUbZupJalIBd2%2BbdeTEUljsxxBUx0rfzP7Dlm7d%2Fzt4PLcrj1c0s3T35zUNiS7LC5oTSojIPrgbhliUsW7S1NFvnoq5UUqqppJfZhZbFggWPZziFNeeLEwmJy6bNVM89gzzzvVv9D9BhyQo431qK9lMR32Y%2BYTPCiebVdbNQ2nlDWL8v%2Bmmx7hk2rLU1xozEjwHICFwQvpCnFV8TrxBPqlCJZGOgK66JL%2BnJCb%2FqiaPyehJJqIeke2%2F9%2Fut93Q3luPjmS6dgckDSkEEYsG4q1Qt2Ci%2FwywOgmoeXeiW5kXVQlaAQyQX30Vz6nPwRBGnPgjNq5g%2F6uta1U8K8RjNyvrCRXBUEmMUlGAc9jsSMSooQlOqUySbw0onXzFOL7RhahSdiAQERpB5vnrZFuj63wtzDWf91yyIIP4d7zrpwVdG0t8LKQGoGOqzUQtu7d16JGd1jTK%2Bl69M9Ut0jZwKRcAVsAFJgFPZA%2BbEok%2Fix423Xy2l9n8eZmklrHTZaYVXt19fwHbAZhXdWlIIs%2BTeeFnh4FodOqPIqm%2BBPgw2GYwtNETwiUe%2Be0zp8owlrWhxAY6pgGp%2Fi%2F4VmTq3FryKDKo1%2FQDo0HwhWKvRCtzfIJEOalzPDSpkNQWoGdS3Vvn%2FzNLWjskBOpS9R4%2F2pTnF7uWqmx4FVb12SccvfhBRIkJsWsgYA7C74NsiorrEcMnuGhl%2BsECoxWXpfHuk%2Bj9YeVd%2FSkmseknbr%2FS9ABfJytDyNlAVs8ErX9OubZpWXJFGdBwGCw%2FHlZpT7FT6fbbXCdjqHDqMEhLbgE4&X-Amz-Signature=a4d75127de58ee66bb8326d18410d4f65e2e38f60b2f765b3052d1fe13aa710b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZMPKAK6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGeYowHNvYp5bsFqle4IoAM11k3n9b2QbteAsltHnGSmAiAGminUvXVIAWC2XX52G73hVJbR4AiYZgDDuGOTqSe5gyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlMaJwXTKr82Pp4MMKtwDvb5fFKuCPeMB39WNINZk606slH4iyxsV3FOF7duQnAhZ5pZu%2Bss0A9R%2F0mtzjSbVRe%2BUbZupJalIBd2%2BbdeTEUljsxxBUx0rfzP7Dlm7d%2Fzt4PLcrj1c0s3T35zUNiS7LC5oTSojIPrgbhliUsW7S1NFvnoq5UUqqppJfZhZbFggWPZziFNeeLEwmJy6bNVM89gzzzvVv9D9BhyQo431qK9lMR32Y%2BYTPCiebVdbNQ2nlDWL8v%2Bmmx7hk2rLU1xozEjwHICFwQvpCnFV8TrxBPqlCJZGOgK66JL%2BnJCb%2FqiaPyehJJqIeke2%2F9%2Fut93Q3luPjmS6dgckDSkEEYsG4q1Qt2Ci%2FwywOgmoeXeiW5kXVQlaAQyQX30Vz6nPwRBGnPgjNq5g%2F6uta1U8K8RjNyvrCRXBUEmMUlGAc9jsSMSooQlOqUySbw0onXzFOL7RhahSdiAQERpB5vnrZFuj63wtzDWf91yyIIP4d7zrpwVdG0t8LKQGoGOqzUQtu7d16JGd1jTK%2Bl69M9Ut0jZwKRcAVsAFJgFPZA%2BbEok%2Fix423Xy2l9n8eZmklrHTZaYVXt19fwHbAZhXdWlIIs%2BTeeFnh4FodOqPIqm%2BBPgw2GYwtNETwiUe%2Be0zp8owlrWhxAY6pgGp%2Fi%2F4VmTq3FryKDKo1%2FQDo0HwhWKvRCtzfIJEOalzPDSpkNQWoGdS3Vvn%2FzNLWjskBOpS9R4%2F2pTnF7uWqmx4FVb12SccvfhBRIkJsWsgYA7C74NsiorrEcMnuGhl%2BsECoxWXpfHuk%2Bj9YeVd%2FSkmseknbr%2FS9ABfJytDyNlAVs8ErX9OubZpWXJFGdBwGCw%2FHlZpT7FT6fbbXCdjqHDqMEhLbgE4&X-Amz-Signature=59c3500ba1cab0bd1c071129e4f63a0c24bcec9ac1008a9f352aa26661bdf8b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZMPKAK6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGeYowHNvYp5bsFqle4IoAM11k3n9b2QbteAsltHnGSmAiAGminUvXVIAWC2XX52G73hVJbR4AiYZgDDuGOTqSe5gyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlMaJwXTKr82Pp4MMKtwDvb5fFKuCPeMB39WNINZk606slH4iyxsV3FOF7duQnAhZ5pZu%2Bss0A9R%2F0mtzjSbVRe%2BUbZupJalIBd2%2BbdeTEUljsxxBUx0rfzP7Dlm7d%2Fzt4PLcrj1c0s3T35zUNiS7LC5oTSojIPrgbhliUsW7S1NFvnoq5UUqqppJfZhZbFggWPZziFNeeLEwmJy6bNVM89gzzzvVv9D9BhyQo431qK9lMR32Y%2BYTPCiebVdbNQ2nlDWL8v%2Bmmx7hk2rLU1xozEjwHICFwQvpCnFV8TrxBPqlCJZGOgK66JL%2BnJCb%2FqiaPyehJJqIeke2%2F9%2Fut93Q3luPjmS6dgckDSkEEYsG4q1Qt2Ci%2FwywOgmoeXeiW5kXVQlaAQyQX30Vz6nPwRBGnPgjNq5g%2F6uta1U8K8RjNyvrCRXBUEmMUlGAc9jsSMSooQlOqUySbw0onXzFOL7RhahSdiAQERpB5vnrZFuj63wtzDWf91yyIIP4d7zrpwVdG0t8LKQGoGOqzUQtu7d16JGd1jTK%2Bl69M9Ut0jZwKRcAVsAFJgFPZA%2BbEok%2Fix423Xy2l9n8eZmklrHTZaYVXt19fwHbAZhXdWlIIs%2BTeeFnh4FodOqPIqm%2BBPgw2GYwtNETwiUe%2Be0zp8owlrWhxAY6pgGp%2Fi%2F4VmTq3FryKDKo1%2FQDo0HwhWKvRCtzfIJEOalzPDSpkNQWoGdS3Vvn%2FzNLWjskBOpS9R4%2F2pTnF7uWqmx4FVb12SccvfhBRIkJsWsgYA7C74NsiorrEcMnuGhl%2BsECoxWXpfHuk%2Bj9YeVd%2FSkmseknbr%2FS9ABfJytDyNlAVs8ErX9OubZpWXJFGdBwGCw%2FHlZpT7FT6fbbXCdjqHDqMEhLbgE4&X-Amz-Signature=8ef7dd672be9807fc0579e606ebc826a8f33e81533ff1ca932a512b308220af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZMPKAK6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGeYowHNvYp5bsFqle4IoAM11k3n9b2QbteAsltHnGSmAiAGminUvXVIAWC2XX52G73hVJbR4AiYZgDDuGOTqSe5gyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlMaJwXTKr82Pp4MMKtwDvb5fFKuCPeMB39WNINZk606slH4iyxsV3FOF7duQnAhZ5pZu%2Bss0A9R%2F0mtzjSbVRe%2BUbZupJalIBd2%2BbdeTEUljsxxBUx0rfzP7Dlm7d%2Fzt4PLcrj1c0s3T35zUNiS7LC5oTSojIPrgbhliUsW7S1NFvnoq5UUqqppJfZhZbFggWPZziFNeeLEwmJy6bNVM89gzzzvVv9D9BhyQo431qK9lMR32Y%2BYTPCiebVdbNQ2nlDWL8v%2Bmmx7hk2rLU1xozEjwHICFwQvpCnFV8TrxBPqlCJZGOgK66JL%2BnJCb%2FqiaPyehJJqIeke2%2F9%2Fut93Q3luPjmS6dgckDSkEEYsG4q1Qt2Ci%2FwywOgmoeXeiW5kXVQlaAQyQX30Vz6nPwRBGnPgjNq5g%2F6uta1U8K8RjNyvrCRXBUEmMUlGAc9jsSMSooQlOqUySbw0onXzFOL7RhahSdiAQERpB5vnrZFuj63wtzDWf91yyIIP4d7zrpwVdG0t8LKQGoGOqzUQtu7d16JGd1jTK%2Bl69M9Ut0jZwKRcAVsAFJgFPZA%2BbEok%2Fix423Xy2l9n8eZmklrHTZaYVXt19fwHbAZhXdWlIIs%2BTeeFnh4FodOqPIqm%2BBPgw2GYwtNETwiUe%2Be0zp8owlrWhxAY6pgGp%2Fi%2F4VmTq3FryKDKo1%2FQDo0HwhWKvRCtzfIJEOalzPDSpkNQWoGdS3Vvn%2FzNLWjskBOpS9R4%2F2pTnF7uWqmx4FVb12SccvfhBRIkJsWsgYA7C74NsiorrEcMnuGhl%2BsECoxWXpfHuk%2Bj9YeVd%2FSkmseknbr%2FS9ABfJytDyNlAVs8ErX9OubZpWXJFGdBwGCw%2FHlZpT7FT6fbbXCdjqHDqMEhLbgE4&X-Amz-Signature=9dfa072f0ed93102cd3d76d109848d80952c86a1c189121e1606570aa9db7616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R32F6P7O%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHmSoXir7PjwGz40feQfTSFWWnvy%2FcYQlxGiK6AkVa5CAiEAgWDRDVI%2BoQ6zVkHykBqmOO5YftIgtTuu0kMT8EPlbysqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLe4DkwOuIxgC7%2BsxSrcAwEzB7103WzNShFUMwATAnwLpZMaeXSql8%2FCDFrMzmU0pO1uYV5WIlQvMDZrcpS0RTqB57MvDU5gbkY5IvPZ6Y%2B%2FsCUIy89mSy8HCX%2FgDS0cmCAiJ8EjPBln8agVaMLwlA1XjNr%2FTN20BEEb3SJQwGReZWLrH4Zif21c52i8WMFp%2Fux%2Bn7RAyNgRbtTrIdRtTVsm8sdqqrqiuTjW%2F37Nj%2FUM02KgvYM5Oxw3RF1RBkfAQ64AAoLiUtJDJBacjSjCEUXCs9X87FHRC6SlV2nUbReyk0o8mCggnpUKVKZFieBp4muSH0cnKkYAiVxl84rzlMRt9FLT%2BXdtWNZxWKbFpVnGKBFt3Dw6HDfYCXjJmgOnWs%2FLZ9%2Blnhpv2pZjReGYSdpGogx1fqVtzCMG0WOFqqSaPvsg4MDaAu4S7bWj1fs1FICnQXK%2FjTIDD5hqgPAp3QWK4nvrHXxiO%2FJ%2BjonOhF22o%2FEuBJ388UUWFX2BT6%2F%2FXVN6nkZI2AWPH1Ell04YCklYOIEWOkwx%2BqxWj5KYBIX%2FP0uqdkGfxoeJvvkV1gVqcQfriQn0Jvaic35kYgZJdAue4DZbMveue2Y2MtYRzpAXHdEMwiOSXDyRlLGFJCg649VMpRfZ15kImxgcMN20ocQGOqUB7r9ABvzX%2FTEsDpzyyjBWRtVP9%2FOP97no%2FaVuS2wfah5nyiPYaumOVEuvQO6%2BUKSVjm%2B81foMWSnBUjCtgQ1llaIFgTW3oLwhecjq1tv%2FG4RmA06klSiqnyH8Eu3%2BHqZN753CJN1HVKZsezaE9DPBOCa5xouBccQ%2FoEeHKJPqIy7NHw7zSXwr1%2BufGy3n0fO6N%2BDYnDc3eUb7KRh6wJAWrWjjhC1B&X-Amz-Signature=34e4a922d24f14122101022afa790a2f0f7947fd0a3895a2e001be7b024c2dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZMPKAK6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGeYowHNvYp5bsFqle4IoAM11k3n9b2QbteAsltHnGSmAiAGminUvXVIAWC2XX52G73hVJbR4AiYZgDDuGOTqSe5gyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlMaJwXTKr82Pp4MMKtwDvb5fFKuCPeMB39WNINZk606slH4iyxsV3FOF7duQnAhZ5pZu%2Bss0A9R%2F0mtzjSbVRe%2BUbZupJalIBd2%2BbdeTEUljsxxBUx0rfzP7Dlm7d%2Fzt4PLcrj1c0s3T35zUNiS7LC5oTSojIPrgbhliUsW7S1NFvnoq5UUqqppJfZhZbFggWPZziFNeeLEwmJy6bNVM89gzzzvVv9D9BhyQo431qK9lMR32Y%2BYTPCiebVdbNQ2nlDWL8v%2Bmmx7hk2rLU1xozEjwHICFwQvpCnFV8TrxBPqlCJZGOgK66JL%2BnJCb%2FqiaPyehJJqIeke2%2F9%2Fut93Q3luPjmS6dgckDSkEEYsG4q1Qt2Ci%2FwywOgmoeXeiW5kXVQlaAQyQX30Vz6nPwRBGnPgjNq5g%2F6uta1U8K8RjNyvrCRXBUEmMUlGAc9jsSMSooQlOqUySbw0onXzFOL7RhahSdiAQERpB5vnrZFuj63wtzDWf91yyIIP4d7zrpwVdG0t8LKQGoGOqzUQtu7d16JGd1jTK%2Bl69M9Ut0jZwKRcAVsAFJgFPZA%2BbEok%2Fix423Xy2l9n8eZmklrHTZaYVXt19fwHbAZhXdWlIIs%2BTeeFnh4FodOqPIqm%2BBPgw2GYwtNETwiUe%2Be0zp8owlrWhxAY6pgGp%2Fi%2F4VmTq3FryKDKo1%2FQDo0HwhWKvRCtzfIJEOalzPDSpkNQWoGdS3Vvn%2FzNLWjskBOpS9R4%2F2pTnF7uWqmx4FVb12SccvfhBRIkJsWsgYA7C74NsiorrEcMnuGhl%2BsECoxWXpfHuk%2Bj9YeVd%2FSkmseknbr%2FS9ABfJytDyNlAVs8ErX9OubZpWXJFGdBwGCw%2FHlZpT7FT6fbbXCdjqHDqMEhLbgE4&X-Amz-Signature=409ccf4082e79ef359ca415f1b690bd4b2d7d4e2d4a2f2e109b5a601c38cde53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGSBT53%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDDJl7wqU8IGWP5LWLZgWIcSrxUYoFIHvy70IQBpf7KBAiEAs8uusXlrarjX91%2B8yjCHypT5WGMdIAr8Y0GxwAKnwwsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BUoVPgWMN5VuEDBircA7QQcIpFb74Sq8bF%2Bgd0EuO%2Faokfd583payf%2FYrdbXGTfZCsMFnmXnS56tlH1wio5jMbtGGlwjASfXMAh%2BwFlcRK%2FDuN7PDHlwrf7J7YtvYqkYgM91RhpGo8kuDRxIFHj5nsuZe%2BBAPiGuLJFH9aYEY0s0S5kLBWfPvxihFjTjcW2M7emAl4Yrx43F9Rur%2BMd5O0WAjx0lW2Xh4%2FImDCs5m3Mt%2BtcON55EhFtJRAD%2FkVgEiFgKMB4GeyGqfb8q8GO6gWvwHCtfgqFa90JWua5oVjn5BWvAh7fOyu3cSvUoR5%2FNh1HoW6GH6VhDL50b6kB2xfQVjABFL6P3ZW7zhePxrQc%2Fg8nE%2B5G1bG4DRhRdSNlmILSj1FAvCBN9kRgvdrpII%2BK3RzQiix1xwsNWgRuK%2FPxv3PoRKF9pM5OZ0NIdb%2FVq4UoW2P3Bbv82KJZl4SJTozy27nn%2BI8YsY0HgyoImLWmmxo6usiF4nNQ6oJavCiJj%2B3a2q4%2F%2Fvyl1hlY3KCGs0ffuqB0Dze4rby3qScS4IDRr8j408SbWa%2BuLGYVdNu7%2BmzSmKvWoMQUBM%2FpsMuCOVH3TNsQm3yKqkLllxmBU583JQak2lVOILd1noQDmWPXlGiwAl7NI9oTKUYML21ocQGOqUB%2BmexgJv9dGL2lhr%2BBjHFtGt7ctdPIaponYo4fTFEalda%2BYie1O3MVo6k5hto45ILpiA%2BKAGGDhgkI7osIyeMcELyCA5SVAaBW%2FUOznX373pbbLqjAdbtDuhktPLIlaMH%2BT2MB%2FIcg1d%2BNcgfGSbvljdZE%2Fvrdrt4aCFHWRkKXJ37l4EiamUW%2F6slptX%2B%2BWoSK6V8D%2F96t6oT3g8q4oY1oa1%2FSEdV&X-Amz-Signature=eee082d1e36e3f470a8cade814b285232d5e31b8d36c5fc19d397f53e56a365d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGSBT53%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDDJl7wqU8IGWP5LWLZgWIcSrxUYoFIHvy70IQBpf7KBAiEAs8uusXlrarjX91%2B8yjCHypT5WGMdIAr8Y0GxwAKnwwsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BUoVPgWMN5VuEDBircA7QQcIpFb74Sq8bF%2Bgd0EuO%2Faokfd583payf%2FYrdbXGTfZCsMFnmXnS56tlH1wio5jMbtGGlwjASfXMAh%2BwFlcRK%2FDuN7PDHlwrf7J7YtvYqkYgM91RhpGo8kuDRxIFHj5nsuZe%2BBAPiGuLJFH9aYEY0s0S5kLBWfPvxihFjTjcW2M7emAl4Yrx43F9Rur%2BMd5O0WAjx0lW2Xh4%2FImDCs5m3Mt%2BtcON55EhFtJRAD%2FkVgEiFgKMB4GeyGqfb8q8GO6gWvwHCtfgqFa90JWua5oVjn5BWvAh7fOyu3cSvUoR5%2FNh1HoW6GH6VhDL50b6kB2xfQVjABFL6P3ZW7zhePxrQc%2Fg8nE%2B5G1bG4DRhRdSNlmILSj1FAvCBN9kRgvdrpII%2BK3RzQiix1xwsNWgRuK%2FPxv3PoRKF9pM5OZ0NIdb%2FVq4UoW2P3Bbv82KJZl4SJTozy27nn%2BI8YsY0HgyoImLWmmxo6usiF4nNQ6oJavCiJj%2B3a2q4%2F%2Fvyl1hlY3KCGs0ffuqB0Dze4rby3qScS4IDRr8j408SbWa%2BuLGYVdNu7%2BmzSmKvWoMQUBM%2FpsMuCOVH3TNsQm3yKqkLllxmBU583JQak2lVOILd1noQDmWPXlGiwAl7NI9oTKUYML21ocQGOqUB%2BmexgJv9dGL2lhr%2BBjHFtGt7ctdPIaponYo4fTFEalda%2BYie1O3MVo6k5hto45ILpiA%2BKAGGDhgkI7osIyeMcELyCA5SVAaBW%2FUOznX373pbbLqjAdbtDuhktPLIlaMH%2BT2MB%2FIcg1d%2BNcgfGSbvljdZE%2Fvrdrt4aCFHWRkKXJ37l4EiamUW%2F6slptX%2B%2BWoSK6V8D%2F96t6oT3g8q4oY1oa1%2FSEdV&X-Amz-Signature=20b39047b45ba00742f0637478051eda029eca11496bb4c4a82a476770376533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGSBT53%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDDJl7wqU8IGWP5LWLZgWIcSrxUYoFIHvy70IQBpf7KBAiEAs8uusXlrarjX91%2B8yjCHypT5WGMdIAr8Y0GxwAKnwwsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BUoVPgWMN5VuEDBircA7QQcIpFb74Sq8bF%2Bgd0EuO%2Faokfd583payf%2FYrdbXGTfZCsMFnmXnS56tlH1wio5jMbtGGlwjASfXMAh%2BwFlcRK%2FDuN7PDHlwrf7J7YtvYqkYgM91RhpGo8kuDRxIFHj5nsuZe%2BBAPiGuLJFH9aYEY0s0S5kLBWfPvxihFjTjcW2M7emAl4Yrx43F9Rur%2BMd5O0WAjx0lW2Xh4%2FImDCs5m3Mt%2BtcON55EhFtJRAD%2FkVgEiFgKMB4GeyGqfb8q8GO6gWvwHCtfgqFa90JWua5oVjn5BWvAh7fOyu3cSvUoR5%2FNh1HoW6GH6VhDL50b6kB2xfQVjABFL6P3ZW7zhePxrQc%2Fg8nE%2B5G1bG4DRhRdSNlmILSj1FAvCBN9kRgvdrpII%2BK3RzQiix1xwsNWgRuK%2FPxv3PoRKF9pM5OZ0NIdb%2FVq4UoW2P3Bbv82KJZl4SJTozy27nn%2BI8YsY0HgyoImLWmmxo6usiF4nNQ6oJavCiJj%2B3a2q4%2F%2Fvyl1hlY3KCGs0ffuqB0Dze4rby3qScS4IDRr8j408SbWa%2BuLGYVdNu7%2BmzSmKvWoMQUBM%2FpsMuCOVH3TNsQm3yKqkLllxmBU583JQak2lVOILd1noQDmWPXlGiwAl7NI9oTKUYML21ocQGOqUB%2BmexgJv9dGL2lhr%2BBjHFtGt7ctdPIaponYo4fTFEalda%2BYie1O3MVo6k5hto45ILpiA%2BKAGGDhgkI7osIyeMcELyCA5SVAaBW%2FUOznX373pbbLqjAdbtDuhktPLIlaMH%2BT2MB%2FIcg1d%2BNcgfGSbvljdZE%2Fvrdrt4aCFHWRkKXJ37l4EiamUW%2F6slptX%2B%2BWoSK6V8D%2F96t6oT3g8q4oY1oa1%2FSEdV&X-Amz-Signature=037a4eb0ac44c33c4d745a6c197af5928d8eee749589fd6792e629b055249539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGSBT53%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDDJl7wqU8IGWP5LWLZgWIcSrxUYoFIHvy70IQBpf7KBAiEAs8uusXlrarjX91%2B8yjCHypT5WGMdIAr8Y0GxwAKnwwsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BUoVPgWMN5VuEDBircA7QQcIpFb74Sq8bF%2Bgd0EuO%2Faokfd583payf%2FYrdbXGTfZCsMFnmXnS56tlH1wio5jMbtGGlwjASfXMAh%2BwFlcRK%2FDuN7PDHlwrf7J7YtvYqkYgM91RhpGo8kuDRxIFHj5nsuZe%2BBAPiGuLJFH9aYEY0s0S5kLBWfPvxihFjTjcW2M7emAl4Yrx43F9Rur%2BMd5O0WAjx0lW2Xh4%2FImDCs5m3Mt%2BtcON55EhFtJRAD%2FkVgEiFgKMB4GeyGqfb8q8GO6gWvwHCtfgqFa90JWua5oVjn5BWvAh7fOyu3cSvUoR5%2FNh1HoW6GH6VhDL50b6kB2xfQVjABFL6P3ZW7zhePxrQc%2Fg8nE%2B5G1bG4DRhRdSNlmILSj1FAvCBN9kRgvdrpII%2BK3RzQiix1xwsNWgRuK%2FPxv3PoRKF9pM5OZ0NIdb%2FVq4UoW2P3Bbv82KJZl4SJTozy27nn%2BI8YsY0HgyoImLWmmxo6usiF4nNQ6oJavCiJj%2B3a2q4%2F%2Fvyl1hlY3KCGs0ffuqB0Dze4rby3qScS4IDRr8j408SbWa%2BuLGYVdNu7%2BmzSmKvWoMQUBM%2FpsMuCOVH3TNsQm3yKqkLllxmBU583JQak2lVOILd1noQDmWPXlGiwAl7NI9oTKUYML21ocQGOqUB%2BmexgJv9dGL2lhr%2BBjHFtGt7ctdPIaponYo4fTFEalda%2BYie1O3MVo6k5hto45ILpiA%2BKAGGDhgkI7osIyeMcELyCA5SVAaBW%2FUOznX373pbbLqjAdbtDuhktPLIlaMH%2BT2MB%2FIcg1d%2BNcgfGSbvljdZE%2Fvrdrt4aCFHWRkKXJ37l4EiamUW%2F6slptX%2B%2BWoSK6V8D%2F96t6oT3g8q4oY1oa1%2FSEdV&X-Amz-Signature=b832d808be454443ca6600a9c79edb068d16e19b756b4fdcc9dcfd745dd6baf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGSBT53%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDDJl7wqU8IGWP5LWLZgWIcSrxUYoFIHvy70IQBpf7KBAiEAs8uusXlrarjX91%2B8yjCHypT5WGMdIAr8Y0GxwAKnwwsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BUoVPgWMN5VuEDBircA7QQcIpFb74Sq8bF%2Bgd0EuO%2Faokfd583payf%2FYrdbXGTfZCsMFnmXnS56tlH1wio5jMbtGGlwjASfXMAh%2BwFlcRK%2FDuN7PDHlwrf7J7YtvYqkYgM91RhpGo8kuDRxIFHj5nsuZe%2BBAPiGuLJFH9aYEY0s0S5kLBWfPvxihFjTjcW2M7emAl4Yrx43F9Rur%2BMd5O0WAjx0lW2Xh4%2FImDCs5m3Mt%2BtcON55EhFtJRAD%2FkVgEiFgKMB4GeyGqfb8q8GO6gWvwHCtfgqFa90JWua5oVjn5BWvAh7fOyu3cSvUoR5%2FNh1HoW6GH6VhDL50b6kB2xfQVjABFL6P3ZW7zhePxrQc%2Fg8nE%2B5G1bG4DRhRdSNlmILSj1FAvCBN9kRgvdrpII%2BK3RzQiix1xwsNWgRuK%2FPxv3PoRKF9pM5OZ0NIdb%2FVq4UoW2P3Bbv82KJZl4SJTozy27nn%2BI8YsY0HgyoImLWmmxo6usiF4nNQ6oJavCiJj%2B3a2q4%2F%2Fvyl1hlY3KCGs0ffuqB0Dze4rby3qScS4IDRr8j408SbWa%2BuLGYVdNu7%2BmzSmKvWoMQUBM%2FpsMuCOVH3TNsQm3yKqkLllxmBU583JQak2lVOILd1noQDmWPXlGiwAl7NI9oTKUYML21ocQGOqUB%2BmexgJv9dGL2lhr%2BBjHFtGt7ctdPIaponYo4fTFEalda%2BYie1O3MVo6k5hto45ILpiA%2BKAGGDhgkI7osIyeMcELyCA5SVAaBW%2FUOznX373pbbLqjAdbtDuhktPLIlaMH%2BT2MB%2FIcg1d%2BNcgfGSbvljdZE%2Fvrdrt4aCFHWRkKXJ37l4EiamUW%2F6slptX%2B%2BWoSK6V8D%2F96t6oT3g8q4oY1oa1%2FSEdV&X-Amz-Signature=ea7bb55ad020e1c966c8797ebfec50dc8b758deb2bb29416028cdc080d250ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGSBT53%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDDJl7wqU8IGWP5LWLZgWIcSrxUYoFIHvy70IQBpf7KBAiEAs8uusXlrarjX91%2B8yjCHypT5WGMdIAr8Y0GxwAKnwwsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BUoVPgWMN5VuEDBircA7QQcIpFb74Sq8bF%2Bgd0EuO%2Faokfd583payf%2FYrdbXGTfZCsMFnmXnS56tlH1wio5jMbtGGlwjASfXMAh%2BwFlcRK%2FDuN7PDHlwrf7J7YtvYqkYgM91RhpGo8kuDRxIFHj5nsuZe%2BBAPiGuLJFH9aYEY0s0S5kLBWfPvxihFjTjcW2M7emAl4Yrx43F9Rur%2BMd5O0WAjx0lW2Xh4%2FImDCs5m3Mt%2BtcON55EhFtJRAD%2FkVgEiFgKMB4GeyGqfb8q8GO6gWvwHCtfgqFa90JWua5oVjn5BWvAh7fOyu3cSvUoR5%2FNh1HoW6GH6VhDL50b6kB2xfQVjABFL6P3ZW7zhePxrQc%2Fg8nE%2B5G1bG4DRhRdSNlmILSj1FAvCBN9kRgvdrpII%2BK3RzQiix1xwsNWgRuK%2FPxv3PoRKF9pM5OZ0NIdb%2FVq4UoW2P3Bbv82KJZl4SJTozy27nn%2BI8YsY0HgyoImLWmmxo6usiF4nNQ6oJavCiJj%2B3a2q4%2F%2Fvyl1hlY3KCGs0ffuqB0Dze4rby3qScS4IDRr8j408SbWa%2BuLGYVdNu7%2BmzSmKvWoMQUBM%2FpsMuCOVH3TNsQm3yKqkLllxmBU583JQak2lVOILd1noQDmWPXlGiwAl7NI9oTKUYML21ocQGOqUB%2BmexgJv9dGL2lhr%2BBjHFtGt7ctdPIaponYo4fTFEalda%2BYie1O3MVo6k5hto45ILpiA%2BKAGGDhgkI7osIyeMcELyCA5SVAaBW%2FUOznX373pbbLqjAdbtDuhktPLIlaMH%2BT2MB%2FIcg1d%2BNcgfGSbvljdZE%2Fvrdrt4aCFHWRkKXJ37l4EiamUW%2F6slptX%2B%2BWoSK6V8D%2F96t6oT3g8q4oY1oa1%2FSEdV&X-Amz-Signature=9fe05020bf0a65cd89f14eb66d8d6095bddc36a9342d71655f70f5ba99fa8c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGSBT53%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDDJl7wqU8IGWP5LWLZgWIcSrxUYoFIHvy70IQBpf7KBAiEAs8uusXlrarjX91%2B8yjCHypT5WGMdIAr8Y0GxwAKnwwsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BUoVPgWMN5VuEDBircA7QQcIpFb74Sq8bF%2Bgd0EuO%2Faokfd583payf%2FYrdbXGTfZCsMFnmXnS56tlH1wio5jMbtGGlwjASfXMAh%2BwFlcRK%2FDuN7PDHlwrf7J7YtvYqkYgM91RhpGo8kuDRxIFHj5nsuZe%2BBAPiGuLJFH9aYEY0s0S5kLBWfPvxihFjTjcW2M7emAl4Yrx43F9Rur%2BMd5O0WAjx0lW2Xh4%2FImDCs5m3Mt%2BtcON55EhFtJRAD%2FkVgEiFgKMB4GeyGqfb8q8GO6gWvwHCtfgqFa90JWua5oVjn5BWvAh7fOyu3cSvUoR5%2FNh1HoW6GH6VhDL50b6kB2xfQVjABFL6P3ZW7zhePxrQc%2Fg8nE%2B5G1bG4DRhRdSNlmILSj1FAvCBN9kRgvdrpII%2BK3RzQiix1xwsNWgRuK%2FPxv3PoRKF9pM5OZ0NIdb%2FVq4UoW2P3Bbv82KJZl4SJTozy27nn%2BI8YsY0HgyoImLWmmxo6usiF4nNQ6oJavCiJj%2B3a2q4%2F%2Fvyl1hlY3KCGs0ffuqB0Dze4rby3qScS4IDRr8j408SbWa%2BuLGYVdNu7%2BmzSmKvWoMQUBM%2FpsMuCOVH3TNsQm3yKqkLllxmBU583JQak2lVOILd1noQDmWPXlGiwAl7NI9oTKUYML21ocQGOqUB%2BmexgJv9dGL2lhr%2BBjHFtGt7ctdPIaponYo4fTFEalda%2BYie1O3MVo6k5hto45ILpiA%2BKAGGDhgkI7osIyeMcELyCA5SVAaBW%2FUOznX373pbbLqjAdbtDuhktPLIlaMH%2BT2MB%2FIcg1d%2BNcgfGSbvljdZE%2Fvrdrt4aCFHWRkKXJ37l4EiamUW%2F6slptX%2B%2BWoSK6V8D%2F96t6oT3g8q4oY1oa1%2FSEdV&X-Amz-Signature=493a89a368b9e1df4be5901f05bc5c41ec80e2858e732c2c101fa6d5b3e79a1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGSBT53%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDDJl7wqU8IGWP5LWLZgWIcSrxUYoFIHvy70IQBpf7KBAiEAs8uusXlrarjX91%2B8yjCHypT5WGMdIAr8Y0GxwAKnwwsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BUoVPgWMN5VuEDBircA7QQcIpFb74Sq8bF%2Bgd0EuO%2Faokfd583payf%2FYrdbXGTfZCsMFnmXnS56tlH1wio5jMbtGGlwjASfXMAh%2BwFlcRK%2FDuN7PDHlwrf7J7YtvYqkYgM91RhpGo8kuDRxIFHj5nsuZe%2BBAPiGuLJFH9aYEY0s0S5kLBWfPvxihFjTjcW2M7emAl4Yrx43F9Rur%2BMd5O0WAjx0lW2Xh4%2FImDCs5m3Mt%2BtcON55EhFtJRAD%2FkVgEiFgKMB4GeyGqfb8q8GO6gWvwHCtfgqFa90JWua5oVjn5BWvAh7fOyu3cSvUoR5%2FNh1HoW6GH6VhDL50b6kB2xfQVjABFL6P3ZW7zhePxrQc%2Fg8nE%2B5G1bG4DRhRdSNlmILSj1FAvCBN9kRgvdrpII%2BK3RzQiix1xwsNWgRuK%2FPxv3PoRKF9pM5OZ0NIdb%2FVq4UoW2P3Bbv82KJZl4SJTozy27nn%2BI8YsY0HgyoImLWmmxo6usiF4nNQ6oJavCiJj%2B3a2q4%2F%2Fvyl1hlY3KCGs0ffuqB0Dze4rby3qScS4IDRr8j408SbWa%2BuLGYVdNu7%2BmzSmKvWoMQUBM%2FpsMuCOVH3TNsQm3yKqkLllxmBU583JQak2lVOILd1noQDmWPXlGiwAl7NI9oTKUYML21ocQGOqUB%2BmexgJv9dGL2lhr%2BBjHFtGt7ctdPIaponYo4fTFEalda%2BYie1O3MVo6k5hto45ILpiA%2BKAGGDhgkI7osIyeMcELyCA5SVAaBW%2FUOznX373pbbLqjAdbtDuhktPLIlaMH%2BT2MB%2FIcg1d%2BNcgfGSbvljdZE%2Fvrdrt4aCFHWRkKXJ37l4EiamUW%2F6slptX%2B%2BWoSK6V8D%2F96t6oT3g8q4oY1oa1%2FSEdV&X-Amz-Signature=d767da29d406a99c222d928d3e3f20152a97bdb159398adb3f124365065beb23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
