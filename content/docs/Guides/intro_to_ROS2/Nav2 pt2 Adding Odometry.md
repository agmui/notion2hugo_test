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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJD5CU2%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvQXWxuffiv83ZVUl5blhroAGNrqSDjdlkgl5SmuqkuAiBSVerC%2BOQCbocP5lPsff0hUZyEJ98MSPqKTz7TQLKVySr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRCr96x88ZiG4Ev6LKtwDYfWopChjzCHbSm9wWzKwFOEcXIDB4d3%2BXlhuOOrABZL9W7l6mRfjRdKukeESgOnnN1d5vABtH2q%2BBFLyU9%2BLknVQCB1%2BFpysa3QFOfDMK4lwxqY3S0a7K%2FOpRZ%2BbXAwMMDrfOnknTMqa6dNlYzGISLKhxxY1UPwMzwJ1KE8Ce0vHb4mMhUWTj2qC8UziaJwXVcaf98iiWLvS7DmjrfURGf7lv7jTqByK2fdgICr6As2lRiIRCB9cWjsyfzdd9XQlDro%2BjSKPSDQ%2FgRnyspztonsRcNABx9EGcZksH9v35w0lSDMfLM%2FEYTiQPYjxXSRr44wvNe21DDRwEci79hVMFRseAafPGk5Nc8s1ou%2Fb7zFxP77yk4%2FHLA6wBENbqEaGqRPCZf%2FUtyLfrMEsIhaT%2F3EX1bQTLTyL0orWhFVkCDQsseinNcQUBFJMpylmRSHBCsqgO9S5wf%2FrrctXw7QNDPXsZN1UHUPcJl0YHR0xIB6%2FjPmFwpx3VTKOlTSSba91Hulo4aAAbGOuL5YEA9TTW7GluuOawZj2Eal4rszidQs%2BQdapV6wo6QLx9pDzvdlf45uEgpv6IJQOHZQSukgCBOkyuSepq%2F6p4703V71MqXg2bpzerg%2FjDV70EtUwtYigyAY6pgHr5JCGhompMPQEYOQPYgbkDPbCVSaKOkcn0H7dP7FyS6lQ0vuPJcjW6pw7SplyLZEFlYLlpDcNB95jc3MzvFB9Tf0zEH%2BVIjt8z1uvZ%2B4HJmlbq7j6Y5eTomsc7FF0BgtJMj1DWeRuZH%2FQGlzEihHNd%2FoBrpfeG29V2qrkH%2BA7yhFiinD5AtXFuzxeHSPyG0lfaKCK8%2FcWqna8fW3LNSrnSuX6gH7Z&X-Amz-Signature=0f52e38fc9418fd46e9cb868797ff186f3e25eb365efa07e716a8794ef54d17f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJD5CU2%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvQXWxuffiv83ZVUl5blhroAGNrqSDjdlkgl5SmuqkuAiBSVerC%2BOQCbocP5lPsff0hUZyEJ98MSPqKTz7TQLKVySr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRCr96x88ZiG4Ev6LKtwDYfWopChjzCHbSm9wWzKwFOEcXIDB4d3%2BXlhuOOrABZL9W7l6mRfjRdKukeESgOnnN1d5vABtH2q%2BBFLyU9%2BLknVQCB1%2BFpysa3QFOfDMK4lwxqY3S0a7K%2FOpRZ%2BbXAwMMDrfOnknTMqa6dNlYzGISLKhxxY1UPwMzwJ1KE8Ce0vHb4mMhUWTj2qC8UziaJwXVcaf98iiWLvS7DmjrfURGf7lv7jTqByK2fdgICr6As2lRiIRCB9cWjsyfzdd9XQlDro%2BjSKPSDQ%2FgRnyspztonsRcNABx9EGcZksH9v35w0lSDMfLM%2FEYTiQPYjxXSRr44wvNe21DDRwEci79hVMFRseAafPGk5Nc8s1ou%2Fb7zFxP77yk4%2FHLA6wBENbqEaGqRPCZf%2FUtyLfrMEsIhaT%2F3EX1bQTLTyL0orWhFVkCDQsseinNcQUBFJMpylmRSHBCsqgO9S5wf%2FrrctXw7QNDPXsZN1UHUPcJl0YHR0xIB6%2FjPmFwpx3VTKOlTSSba91Hulo4aAAbGOuL5YEA9TTW7GluuOawZj2Eal4rszidQs%2BQdapV6wo6QLx9pDzvdlf45uEgpv6IJQOHZQSukgCBOkyuSepq%2F6p4703V71MqXg2bpzerg%2FjDV70EtUwtYigyAY6pgHr5JCGhompMPQEYOQPYgbkDPbCVSaKOkcn0H7dP7FyS6lQ0vuPJcjW6pw7SplyLZEFlYLlpDcNB95jc3MzvFB9Tf0zEH%2BVIjt8z1uvZ%2B4HJmlbq7j6Y5eTomsc7FF0BgtJMj1DWeRuZH%2FQGlzEihHNd%2FoBrpfeG29V2qrkH%2BA7yhFiinD5AtXFuzxeHSPyG0lfaKCK8%2FcWqna8fW3LNSrnSuX6gH7Z&X-Amz-Signature=0d5cac4896d96a52f588671ceb80fb327f864ea32ebcb9f82b6be14dc7b17b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJD5CU2%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvQXWxuffiv83ZVUl5blhroAGNrqSDjdlkgl5SmuqkuAiBSVerC%2BOQCbocP5lPsff0hUZyEJ98MSPqKTz7TQLKVySr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRCr96x88ZiG4Ev6LKtwDYfWopChjzCHbSm9wWzKwFOEcXIDB4d3%2BXlhuOOrABZL9W7l6mRfjRdKukeESgOnnN1d5vABtH2q%2BBFLyU9%2BLknVQCB1%2BFpysa3QFOfDMK4lwxqY3S0a7K%2FOpRZ%2BbXAwMMDrfOnknTMqa6dNlYzGISLKhxxY1UPwMzwJ1KE8Ce0vHb4mMhUWTj2qC8UziaJwXVcaf98iiWLvS7DmjrfURGf7lv7jTqByK2fdgICr6As2lRiIRCB9cWjsyfzdd9XQlDro%2BjSKPSDQ%2FgRnyspztonsRcNABx9EGcZksH9v35w0lSDMfLM%2FEYTiQPYjxXSRr44wvNe21DDRwEci79hVMFRseAafPGk5Nc8s1ou%2Fb7zFxP77yk4%2FHLA6wBENbqEaGqRPCZf%2FUtyLfrMEsIhaT%2F3EX1bQTLTyL0orWhFVkCDQsseinNcQUBFJMpylmRSHBCsqgO9S5wf%2FrrctXw7QNDPXsZN1UHUPcJl0YHR0xIB6%2FjPmFwpx3VTKOlTSSba91Hulo4aAAbGOuL5YEA9TTW7GluuOawZj2Eal4rszidQs%2BQdapV6wo6QLx9pDzvdlf45uEgpv6IJQOHZQSukgCBOkyuSepq%2F6p4703V71MqXg2bpzerg%2FjDV70EtUwtYigyAY6pgHr5JCGhompMPQEYOQPYgbkDPbCVSaKOkcn0H7dP7FyS6lQ0vuPJcjW6pw7SplyLZEFlYLlpDcNB95jc3MzvFB9Tf0zEH%2BVIjt8z1uvZ%2B4HJmlbq7j6Y5eTomsc7FF0BgtJMj1DWeRuZH%2FQGlzEihHNd%2FoBrpfeG29V2qrkH%2BA7yhFiinD5AtXFuzxeHSPyG0lfaKCK8%2FcWqna8fW3LNSrnSuX6gH7Z&X-Amz-Signature=ea90a0f438303c45e0a5e5beb0e2e7940239361c4bd35bf370b84b2f0a16a1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJD5CU2%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvQXWxuffiv83ZVUl5blhroAGNrqSDjdlkgl5SmuqkuAiBSVerC%2BOQCbocP5lPsff0hUZyEJ98MSPqKTz7TQLKVySr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRCr96x88ZiG4Ev6LKtwDYfWopChjzCHbSm9wWzKwFOEcXIDB4d3%2BXlhuOOrABZL9W7l6mRfjRdKukeESgOnnN1d5vABtH2q%2BBFLyU9%2BLknVQCB1%2BFpysa3QFOfDMK4lwxqY3S0a7K%2FOpRZ%2BbXAwMMDrfOnknTMqa6dNlYzGISLKhxxY1UPwMzwJ1KE8Ce0vHb4mMhUWTj2qC8UziaJwXVcaf98iiWLvS7DmjrfURGf7lv7jTqByK2fdgICr6As2lRiIRCB9cWjsyfzdd9XQlDro%2BjSKPSDQ%2FgRnyspztonsRcNABx9EGcZksH9v35w0lSDMfLM%2FEYTiQPYjxXSRr44wvNe21DDRwEci79hVMFRseAafPGk5Nc8s1ou%2Fb7zFxP77yk4%2FHLA6wBENbqEaGqRPCZf%2FUtyLfrMEsIhaT%2F3EX1bQTLTyL0orWhFVkCDQsseinNcQUBFJMpylmRSHBCsqgO9S5wf%2FrrctXw7QNDPXsZN1UHUPcJl0YHR0xIB6%2FjPmFwpx3VTKOlTSSba91Hulo4aAAbGOuL5YEA9TTW7GluuOawZj2Eal4rszidQs%2BQdapV6wo6QLx9pDzvdlf45uEgpv6IJQOHZQSukgCBOkyuSepq%2F6p4703V71MqXg2bpzerg%2FjDV70EtUwtYigyAY6pgHr5JCGhompMPQEYOQPYgbkDPbCVSaKOkcn0H7dP7FyS6lQ0vuPJcjW6pw7SplyLZEFlYLlpDcNB95jc3MzvFB9Tf0zEH%2BVIjt8z1uvZ%2B4HJmlbq7j6Y5eTomsc7FF0BgtJMj1DWeRuZH%2FQGlzEihHNd%2FoBrpfeG29V2qrkH%2BA7yhFiinD5AtXFuzxeHSPyG0lfaKCK8%2FcWqna8fW3LNSrnSuX6gH7Z&X-Amz-Signature=267f4c7c12e7583a9a0121c42af1550a9cf1be8f9c185379c15028d633f82719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJD5CU2%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvQXWxuffiv83ZVUl5blhroAGNrqSDjdlkgl5SmuqkuAiBSVerC%2BOQCbocP5lPsff0hUZyEJ98MSPqKTz7TQLKVySr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRCr96x88ZiG4Ev6LKtwDYfWopChjzCHbSm9wWzKwFOEcXIDB4d3%2BXlhuOOrABZL9W7l6mRfjRdKukeESgOnnN1d5vABtH2q%2BBFLyU9%2BLknVQCB1%2BFpysa3QFOfDMK4lwxqY3S0a7K%2FOpRZ%2BbXAwMMDrfOnknTMqa6dNlYzGISLKhxxY1UPwMzwJ1KE8Ce0vHb4mMhUWTj2qC8UziaJwXVcaf98iiWLvS7DmjrfURGf7lv7jTqByK2fdgICr6As2lRiIRCB9cWjsyfzdd9XQlDro%2BjSKPSDQ%2FgRnyspztonsRcNABx9EGcZksH9v35w0lSDMfLM%2FEYTiQPYjxXSRr44wvNe21DDRwEci79hVMFRseAafPGk5Nc8s1ou%2Fb7zFxP77yk4%2FHLA6wBENbqEaGqRPCZf%2FUtyLfrMEsIhaT%2F3EX1bQTLTyL0orWhFVkCDQsseinNcQUBFJMpylmRSHBCsqgO9S5wf%2FrrctXw7QNDPXsZN1UHUPcJl0YHR0xIB6%2FjPmFwpx3VTKOlTSSba91Hulo4aAAbGOuL5YEA9TTW7GluuOawZj2Eal4rszidQs%2BQdapV6wo6QLx9pDzvdlf45uEgpv6IJQOHZQSukgCBOkyuSepq%2F6p4703V71MqXg2bpzerg%2FjDV70EtUwtYigyAY6pgHr5JCGhompMPQEYOQPYgbkDPbCVSaKOkcn0H7dP7FyS6lQ0vuPJcjW6pw7SplyLZEFlYLlpDcNB95jc3MzvFB9Tf0zEH%2BVIjt8z1uvZ%2B4HJmlbq7j6Y5eTomsc7FF0BgtJMj1DWeRuZH%2FQGlzEihHNd%2FoBrpfeG29V2qrkH%2BA7yhFiinD5AtXFuzxeHSPyG0lfaKCK8%2FcWqna8fW3LNSrnSuX6gH7Z&X-Amz-Signature=46542ca39723930adb49bf898248e476b3ccd48938e6c7ba50f1896d6509b705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJD5CU2%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvQXWxuffiv83ZVUl5blhroAGNrqSDjdlkgl5SmuqkuAiBSVerC%2BOQCbocP5lPsff0hUZyEJ98MSPqKTz7TQLKVySr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRCr96x88ZiG4Ev6LKtwDYfWopChjzCHbSm9wWzKwFOEcXIDB4d3%2BXlhuOOrABZL9W7l6mRfjRdKukeESgOnnN1d5vABtH2q%2BBFLyU9%2BLknVQCB1%2BFpysa3QFOfDMK4lwxqY3S0a7K%2FOpRZ%2BbXAwMMDrfOnknTMqa6dNlYzGISLKhxxY1UPwMzwJ1KE8Ce0vHb4mMhUWTj2qC8UziaJwXVcaf98iiWLvS7DmjrfURGf7lv7jTqByK2fdgICr6As2lRiIRCB9cWjsyfzdd9XQlDro%2BjSKPSDQ%2FgRnyspztonsRcNABx9EGcZksH9v35w0lSDMfLM%2FEYTiQPYjxXSRr44wvNe21DDRwEci79hVMFRseAafPGk5Nc8s1ou%2Fb7zFxP77yk4%2FHLA6wBENbqEaGqRPCZf%2FUtyLfrMEsIhaT%2F3EX1bQTLTyL0orWhFVkCDQsseinNcQUBFJMpylmRSHBCsqgO9S5wf%2FrrctXw7QNDPXsZN1UHUPcJl0YHR0xIB6%2FjPmFwpx3VTKOlTSSba91Hulo4aAAbGOuL5YEA9TTW7GluuOawZj2Eal4rszidQs%2BQdapV6wo6QLx9pDzvdlf45uEgpv6IJQOHZQSukgCBOkyuSepq%2F6p4703V71MqXg2bpzerg%2FjDV70EtUwtYigyAY6pgHr5JCGhompMPQEYOQPYgbkDPbCVSaKOkcn0H7dP7FyS6lQ0vuPJcjW6pw7SplyLZEFlYLlpDcNB95jc3MzvFB9Tf0zEH%2BVIjt8z1uvZ%2B4HJmlbq7j6Y5eTomsc7FF0BgtJMj1DWeRuZH%2FQGlzEihHNd%2FoBrpfeG29V2qrkH%2BA7yhFiinD5AtXFuzxeHSPyG0lfaKCK8%2FcWqna8fW3LNSrnSuX6gH7Z&X-Amz-Signature=08f53e0ef4521e15a03c4b7c581b70e9611f133a4529f16a48459b5b1d7c9d91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJD5CU2%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvQXWxuffiv83ZVUl5blhroAGNrqSDjdlkgl5SmuqkuAiBSVerC%2BOQCbocP5lPsff0hUZyEJ98MSPqKTz7TQLKVySr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRCr96x88ZiG4Ev6LKtwDYfWopChjzCHbSm9wWzKwFOEcXIDB4d3%2BXlhuOOrABZL9W7l6mRfjRdKukeESgOnnN1d5vABtH2q%2BBFLyU9%2BLknVQCB1%2BFpysa3QFOfDMK4lwxqY3S0a7K%2FOpRZ%2BbXAwMMDrfOnknTMqa6dNlYzGISLKhxxY1UPwMzwJ1KE8Ce0vHb4mMhUWTj2qC8UziaJwXVcaf98iiWLvS7DmjrfURGf7lv7jTqByK2fdgICr6As2lRiIRCB9cWjsyfzdd9XQlDro%2BjSKPSDQ%2FgRnyspztonsRcNABx9EGcZksH9v35w0lSDMfLM%2FEYTiQPYjxXSRr44wvNe21DDRwEci79hVMFRseAafPGk5Nc8s1ou%2Fb7zFxP77yk4%2FHLA6wBENbqEaGqRPCZf%2FUtyLfrMEsIhaT%2F3EX1bQTLTyL0orWhFVkCDQsseinNcQUBFJMpylmRSHBCsqgO9S5wf%2FrrctXw7QNDPXsZN1UHUPcJl0YHR0xIB6%2FjPmFwpx3VTKOlTSSba91Hulo4aAAbGOuL5YEA9TTW7GluuOawZj2Eal4rszidQs%2BQdapV6wo6QLx9pDzvdlf45uEgpv6IJQOHZQSukgCBOkyuSepq%2F6p4703V71MqXg2bpzerg%2FjDV70EtUwtYigyAY6pgHr5JCGhompMPQEYOQPYgbkDPbCVSaKOkcn0H7dP7FyS6lQ0vuPJcjW6pw7SplyLZEFlYLlpDcNB95jc3MzvFB9Tf0zEH%2BVIjt8z1uvZ%2B4HJmlbq7j6Y5eTomsc7FF0BgtJMj1DWeRuZH%2FQGlzEihHNd%2FoBrpfeG29V2qrkH%2BA7yhFiinD5AtXFuzxeHSPyG0lfaKCK8%2FcWqna8fW3LNSrnSuX6gH7Z&X-Amz-Signature=cedbcdc88157205bcddd51d2ecb3543140e2d82c28b83567fa437ff40ee252bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJD5CU2%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvQXWxuffiv83ZVUl5blhroAGNrqSDjdlkgl5SmuqkuAiBSVerC%2BOQCbocP5lPsff0hUZyEJ98MSPqKTz7TQLKVySr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRCr96x88ZiG4Ev6LKtwDYfWopChjzCHbSm9wWzKwFOEcXIDB4d3%2BXlhuOOrABZL9W7l6mRfjRdKukeESgOnnN1d5vABtH2q%2BBFLyU9%2BLknVQCB1%2BFpysa3QFOfDMK4lwxqY3S0a7K%2FOpRZ%2BbXAwMMDrfOnknTMqa6dNlYzGISLKhxxY1UPwMzwJ1KE8Ce0vHb4mMhUWTj2qC8UziaJwXVcaf98iiWLvS7DmjrfURGf7lv7jTqByK2fdgICr6As2lRiIRCB9cWjsyfzdd9XQlDro%2BjSKPSDQ%2FgRnyspztonsRcNABx9EGcZksH9v35w0lSDMfLM%2FEYTiQPYjxXSRr44wvNe21DDRwEci79hVMFRseAafPGk5Nc8s1ou%2Fb7zFxP77yk4%2FHLA6wBENbqEaGqRPCZf%2FUtyLfrMEsIhaT%2F3EX1bQTLTyL0orWhFVkCDQsseinNcQUBFJMpylmRSHBCsqgO9S5wf%2FrrctXw7QNDPXsZN1UHUPcJl0YHR0xIB6%2FjPmFwpx3VTKOlTSSba91Hulo4aAAbGOuL5YEA9TTW7GluuOawZj2Eal4rszidQs%2BQdapV6wo6QLx9pDzvdlf45uEgpv6IJQOHZQSukgCBOkyuSepq%2F6p4703V71MqXg2bpzerg%2FjDV70EtUwtYigyAY6pgHr5JCGhompMPQEYOQPYgbkDPbCVSaKOkcn0H7dP7FyS6lQ0vuPJcjW6pw7SplyLZEFlYLlpDcNB95jc3MzvFB9Tf0zEH%2BVIjt8z1uvZ%2B4HJmlbq7j6Y5eTomsc7FF0BgtJMj1DWeRuZH%2FQGlzEihHNd%2FoBrpfeG29V2qrkH%2BA7yhFiinD5AtXFuzxeHSPyG0lfaKCK8%2FcWqna8fW3LNSrnSuX6gH7Z&X-Amz-Signature=2e5a2e0405b834901783efcf41abd82ed80eea51c45e1c5982577cd15de0ff03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJD5CU2%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvQXWxuffiv83ZVUl5blhroAGNrqSDjdlkgl5SmuqkuAiBSVerC%2BOQCbocP5lPsff0hUZyEJ98MSPqKTz7TQLKVySr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRCr96x88ZiG4Ev6LKtwDYfWopChjzCHbSm9wWzKwFOEcXIDB4d3%2BXlhuOOrABZL9W7l6mRfjRdKukeESgOnnN1d5vABtH2q%2BBFLyU9%2BLknVQCB1%2BFpysa3QFOfDMK4lwxqY3S0a7K%2FOpRZ%2BbXAwMMDrfOnknTMqa6dNlYzGISLKhxxY1UPwMzwJ1KE8Ce0vHb4mMhUWTj2qC8UziaJwXVcaf98iiWLvS7DmjrfURGf7lv7jTqByK2fdgICr6As2lRiIRCB9cWjsyfzdd9XQlDro%2BjSKPSDQ%2FgRnyspztonsRcNABx9EGcZksH9v35w0lSDMfLM%2FEYTiQPYjxXSRr44wvNe21DDRwEci79hVMFRseAafPGk5Nc8s1ou%2Fb7zFxP77yk4%2FHLA6wBENbqEaGqRPCZf%2FUtyLfrMEsIhaT%2F3EX1bQTLTyL0orWhFVkCDQsseinNcQUBFJMpylmRSHBCsqgO9S5wf%2FrrctXw7QNDPXsZN1UHUPcJl0YHR0xIB6%2FjPmFwpx3VTKOlTSSba91Hulo4aAAbGOuL5YEA9TTW7GluuOawZj2Eal4rszidQs%2BQdapV6wo6QLx9pDzvdlf45uEgpv6IJQOHZQSukgCBOkyuSepq%2F6p4703V71MqXg2bpzerg%2FjDV70EtUwtYigyAY6pgHr5JCGhompMPQEYOQPYgbkDPbCVSaKOkcn0H7dP7FyS6lQ0vuPJcjW6pw7SplyLZEFlYLlpDcNB95jc3MzvFB9Tf0zEH%2BVIjt8z1uvZ%2B4HJmlbq7j6Y5eTomsc7FF0BgtJMj1DWeRuZH%2FQGlzEihHNd%2FoBrpfeG29V2qrkH%2BA7yhFiinD5AtXFuzxeHSPyG0lfaKCK8%2FcWqna8fW3LNSrnSuX6gH7Z&X-Amz-Signature=d2440c4205b06c4c5392dcb2f48355836554ad00098a156d24d832319807f457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJD5CU2%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvQXWxuffiv83ZVUl5blhroAGNrqSDjdlkgl5SmuqkuAiBSVerC%2BOQCbocP5lPsff0hUZyEJ98MSPqKTz7TQLKVySr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRCr96x88ZiG4Ev6LKtwDYfWopChjzCHbSm9wWzKwFOEcXIDB4d3%2BXlhuOOrABZL9W7l6mRfjRdKukeESgOnnN1d5vABtH2q%2BBFLyU9%2BLknVQCB1%2BFpysa3QFOfDMK4lwxqY3S0a7K%2FOpRZ%2BbXAwMMDrfOnknTMqa6dNlYzGISLKhxxY1UPwMzwJ1KE8Ce0vHb4mMhUWTj2qC8UziaJwXVcaf98iiWLvS7DmjrfURGf7lv7jTqByK2fdgICr6As2lRiIRCB9cWjsyfzdd9XQlDro%2BjSKPSDQ%2FgRnyspztonsRcNABx9EGcZksH9v35w0lSDMfLM%2FEYTiQPYjxXSRr44wvNe21DDRwEci79hVMFRseAafPGk5Nc8s1ou%2Fb7zFxP77yk4%2FHLA6wBENbqEaGqRPCZf%2FUtyLfrMEsIhaT%2F3EX1bQTLTyL0orWhFVkCDQsseinNcQUBFJMpylmRSHBCsqgO9S5wf%2FrrctXw7QNDPXsZN1UHUPcJl0YHR0xIB6%2FjPmFwpx3VTKOlTSSba91Hulo4aAAbGOuL5YEA9TTW7GluuOawZj2Eal4rszidQs%2BQdapV6wo6QLx9pDzvdlf45uEgpv6IJQOHZQSukgCBOkyuSepq%2F6p4703V71MqXg2bpzerg%2FjDV70EtUwtYigyAY6pgHr5JCGhompMPQEYOQPYgbkDPbCVSaKOkcn0H7dP7FyS6lQ0vuPJcjW6pw7SplyLZEFlYLlpDcNB95jc3MzvFB9Tf0zEH%2BVIjt8z1uvZ%2B4HJmlbq7j6Y5eTomsc7FF0BgtJMj1DWeRuZH%2FQGlzEihHNd%2FoBrpfeG29V2qrkH%2BA7yhFiinD5AtXFuzxeHSPyG0lfaKCK8%2FcWqna8fW3LNSrnSuX6gH7Z&X-Amz-Signature=2b465faef9528935c0d449e474f84323f9aef7e20f19afeece5c24c14310090f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MBP5XVR%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICr6RxFvW2QrLCpSa%2BQLhCSJP2Aj4PKvey3%2Byyxs%2FJDXAiB1PVl6NQcC%2B77a1fT0iHuwOtnKwBNprpCr85zSUzqNKyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMYKcZdbe%2FY6F%2FLfBCKtwDgrGWAedRSgT8jQs0JV5y41cSIZpgCeQhd%2BCrdFwaNwrgMlZebmNLjBEPUuENkLe6462OYaRHG1DlgXSWS3ztOLzsjJopbWgaVMEx71CJrzfxDihPCWl%2BJi42%2FKPlqGAxwWcFudnBqbM2HxP7javPOnHQXgiXjpHZ3AfupGVByyjnsYdCDJYrxYRHD61YwhL1cwwtjgIzksloNVCKEAT3ho8sBlM%2FynPAb9N7UDyXEad%2FN91sKZ5aW%2BPQr6UNY1Wou%2F5und0wuccTg0DYsIeoV%2F90p4f%2FYnmEu6X212AgYpcIriqpFT%2BLAuL3ia1KUFk1QfL8pWLbN%2F8eYCLj30Wk0Yu5RZV%2FodDRHeT9s6Nn6J8O3Y2miK%2F0Jyya0uwxe68FyP%2BkSOqwcaVptm0DKzBlqV2CQeSGZaw4OJ8b4d1lywCUqOFQBZBfdkIgQCvZCmewbpm717h47fGBk1JuKgJT7gBCsb%2FdZ7ogjuWUKZ6Obo62%2FYA7MfH1kkUvacMBHAACtA8NYwM113W0B864Wonlbpy%2Ff7OhyqubkMSzzW9huNAUfSvJqc5X1egN7%2BE3uVCALpoYItkEOFz6QoAW5ca55XGKZ8pHaP6E1kyc5OuVurcSPJyYQ1BEez31%2BXgw44igyAY6pgH66uLKA%2F6mN%2B%2BNz2lkPMHHSdK1m5sEdSqeTav40jb3iPAbws%2FN2dLY0nPDfwYUTiznvrNKunH14N%2Bp1uzjsv%2BEc0IFvwbkJ15pPU7wP7SSo%2B4ussq5e%2F1csumgrJLKY8iQcFGoTIlv9vMWzkIVnqR6NuL7G3Z7DjdzD7%2F7tSIuHh3sjqIF83S04pzvrHOMyFHOVg1hbSM4FxeY4I0mQ%2BaQ5rUmcOca&X-Amz-Signature=1e0798b5736f170da62de34b48a3fce5fa2610b2c988ba891602541cef597496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRXPZZC%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF4Uw1Se6zzwdU8b8sPpmFp4AssGCzd2Xu9VqqA3otPAiEArbya0pLfbEltIGsMAtNHd7r9vV4Pd7t0wEWWIevfdvUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDC1S4ZJ0kNdMbVzGDCrcA3QkLqwrLAye1PpdY07W%2FU5G%2BRA3teb0SSj5hkrI6FWMKFpbYV%2FgTEdveqC0XisPJiuGkTHRdsgGUGhMyJJyPIKsxM7maT0j8qY2Q8rR%2BH8BrSoIB2CrTFXMGaZprRSMoPHU%2FwodTYwANibXKoZYtD4mgDgx%2BTvtPF4rtnKAaPn3ddVmeLazFKR2rSgynjUEO9oZJPNg4LjhLMaK30Mi%2FhNT3ZvdIHYoClne%2FqMzQ7BMaSoAwnfIFALJLKdlNhNuih9bGK4Ukhbk8jJzioADKNnqCXMnwwo3z6g3YiYKbClffVbrJrUcwTjIk6xGNVV0cFBPJbfW3UHcdcD4rCAeC8F5%2BsbFS2pG0649K6JJxDy8nyefgPJl78F8CQJeZlgbOZH4Ewvfbk0BXW70jNSk3zdf2mjfvqb5WuaIf91TwGQfSqxftHWNzVPQVSvh9k34EvWeUCTw3V1QYxZK6TY1YrGG41caVfTHOVEE2ehhiHMxzzvw%2BRD22fIvQsVEqrOjzFLzom3JcWe04WfIXMknb1q71Dvf%2Btkb7%2BIuSs64h%2FkqmRslme6XbLM8jHmJ6gDC7aRXbkV3KTkZnLxfXhJzeUg29S8twdKDyDhne12S0hzEeRLm6LIWmCjs7SrvMIWJoMgGOqUB%2FN9D5dru31xjpuCmA%2FGL74AB1P0whM1Jaxd%2BeOYuBdPE95sOgV7AfnE5gmZ4HFd10HR6zhB3%2FVZbqz2pilGLlX0lmx78nq62JOOir1kutaZf9Z1tYnDfmywDSpl%2FG8XbiL%2FIR3cC26YBDsnZVdVIqhFe7TTeH6Gm9Fx48D8DyM0T6Iw4Unb7WDI5VfURJVIuounRXAPVyeiZTS66oTZC0GK4SMDu&X-Amz-Signature=5b098c58f24e5d8ed61fa567d3aec21e3a5bcaf24ecaea83d09c3ee094dfe899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRXPZZC%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF4Uw1Se6zzwdU8b8sPpmFp4AssGCzd2Xu9VqqA3otPAiEArbya0pLfbEltIGsMAtNHd7r9vV4Pd7t0wEWWIevfdvUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDC1S4ZJ0kNdMbVzGDCrcA3QkLqwrLAye1PpdY07W%2FU5G%2BRA3teb0SSj5hkrI6FWMKFpbYV%2FgTEdveqC0XisPJiuGkTHRdsgGUGhMyJJyPIKsxM7maT0j8qY2Q8rR%2BH8BrSoIB2CrTFXMGaZprRSMoPHU%2FwodTYwANibXKoZYtD4mgDgx%2BTvtPF4rtnKAaPn3ddVmeLazFKR2rSgynjUEO9oZJPNg4LjhLMaK30Mi%2FhNT3ZvdIHYoClne%2FqMzQ7BMaSoAwnfIFALJLKdlNhNuih9bGK4Ukhbk8jJzioADKNnqCXMnwwo3z6g3YiYKbClffVbrJrUcwTjIk6xGNVV0cFBPJbfW3UHcdcD4rCAeC8F5%2BsbFS2pG0649K6JJxDy8nyefgPJl78F8CQJeZlgbOZH4Ewvfbk0BXW70jNSk3zdf2mjfvqb5WuaIf91TwGQfSqxftHWNzVPQVSvh9k34EvWeUCTw3V1QYxZK6TY1YrGG41caVfTHOVEE2ehhiHMxzzvw%2BRD22fIvQsVEqrOjzFLzom3JcWe04WfIXMknb1q71Dvf%2Btkb7%2BIuSs64h%2FkqmRslme6XbLM8jHmJ6gDC7aRXbkV3KTkZnLxfXhJzeUg29S8twdKDyDhne12S0hzEeRLm6LIWmCjs7SrvMIWJoMgGOqUB%2FN9D5dru31xjpuCmA%2FGL74AB1P0whM1Jaxd%2BeOYuBdPE95sOgV7AfnE5gmZ4HFd10HR6zhB3%2FVZbqz2pilGLlX0lmx78nq62JOOir1kutaZf9Z1tYnDfmywDSpl%2FG8XbiL%2FIR3cC26YBDsnZVdVIqhFe7TTeH6Gm9Fx48D8DyM0T6Iw4Unb7WDI5VfURJVIuounRXAPVyeiZTS66oTZC0GK4SMDu&X-Amz-Signature=9a2ffec8b748dcba78f8efd924830b35ff1cffa0f924d807e9d67dbc2b34f336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRXPZZC%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF4Uw1Se6zzwdU8b8sPpmFp4AssGCzd2Xu9VqqA3otPAiEArbya0pLfbEltIGsMAtNHd7r9vV4Pd7t0wEWWIevfdvUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDC1S4ZJ0kNdMbVzGDCrcA3QkLqwrLAye1PpdY07W%2FU5G%2BRA3teb0SSj5hkrI6FWMKFpbYV%2FgTEdveqC0XisPJiuGkTHRdsgGUGhMyJJyPIKsxM7maT0j8qY2Q8rR%2BH8BrSoIB2CrTFXMGaZprRSMoPHU%2FwodTYwANibXKoZYtD4mgDgx%2BTvtPF4rtnKAaPn3ddVmeLazFKR2rSgynjUEO9oZJPNg4LjhLMaK30Mi%2FhNT3ZvdIHYoClne%2FqMzQ7BMaSoAwnfIFALJLKdlNhNuih9bGK4Ukhbk8jJzioADKNnqCXMnwwo3z6g3YiYKbClffVbrJrUcwTjIk6xGNVV0cFBPJbfW3UHcdcD4rCAeC8F5%2BsbFS2pG0649K6JJxDy8nyefgPJl78F8CQJeZlgbOZH4Ewvfbk0BXW70jNSk3zdf2mjfvqb5WuaIf91TwGQfSqxftHWNzVPQVSvh9k34EvWeUCTw3V1QYxZK6TY1YrGG41caVfTHOVEE2ehhiHMxzzvw%2BRD22fIvQsVEqrOjzFLzom3JcWe04WfIXMknb1q71Dvf%2Btkb7%2BIuSs64h%2FkqmRslme6XbLM8jHmJ6gDC7aRXbkV3KTkZnLxfXhJzeUg29S8twdKDyDhne12S0hzEeRLm6LIWmCjs7SrvMIWJoMgGOqUB%2FN9D5dru31xjpuCmA%2FGL74AB1P0whM1Jaxd%2BeOYuBdPE95sOgV7AfnE5gmZ4HFd10HR6zhB3%2FVZbqz2pilGLlX0lmx78nq62JOOir1kutaZf9Z1tYnDfmywDSpl%2FG8XbiL%2FIR3cC26YBDsnZVdVIqhFe7TTeH6Gm9Fx48D8DyM0T6Iw4Unb7WDI5VfURJVIuounRXAPVyeiZTS66oTZC0GK4SMDu&X-Amz-Signature=f08adbf7993277915b5d6bba85a7bd92c6158bdc8f8c0fd881bea52e3933de16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRXPZZC%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF4Uw1Se6zzwdU8b8sPpmFp4AssGCzd2Xu9VqqA3otPAiEArbya0pLfbEltIGsMAtNHd7r9vV4Pd7t0wEWWIevfdvUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDC1S4ZJ0kNdMbVzGDCrcA3QkLqwrLAye1PpdY07W%2FU5G%2BRA3teb0SSj5hkrI6FWMKFpbYV%2FgTEdveqC0XisPJiuGkTHRdsgGUGhMyJJyPIKsxM7maT0j8qY2Q8rR%2BH8BrSoIB2CrTFXMGaZprRSMoPHU%2FwodTYwANibXKoZYtD4mgDgx%2BTvtPF4rtnKAaPn3ddVmeLazFKR2rSgynjUEO9oZJPNg4LjhLMaK30Mi%2FhNT3ZvdIHYoClne%2FqMzQ7BMaSoAwnfIFALJLKdlNhNuih9bGK4Ukhbk8jJzioADKNnqCXMnwwo3z6g3YiYKbClffVbrJrUcwTjIk6xGNVV0cFBPJbfW3UHcdcD4rCAeC8F5%2BsbFS2pG0649K6JJxDy8nyefgPJl78F8CQJeZlgbOZH4Ewvfbk0BXW70jNSk3zdf2mjfvqb5WuaIf91TwGQfSqxftHWNzVPQVSvh9k34EvWeUCTw3V1QYxZK6TY1YrGG41caVfTHOVEE2ehhiHMxzzvw%2BRD22fIvQsVEqrOjzFLzom3JcWe04WfIXMknb1q71Dvf%2Btkb7%2BIuSs64h%2FkqmRslme6XbLM8jHmJ6gDC7aRXbkV3KTkZnLxfXhJzeUg29S8twdKDyDhne12S0hzEeRLm6LIWmCjs7SrvMIWJoMgGOqUB%2FN9D5dru31xjpuCmA%2FGL74AB1P0whM1Jaxd%2BeOYuBdPE95sOgV7AfnE5gmZ4HFd10HR6zhB3%2FVZbqz2pilGLlX0lmx78nq62JOOir1kutaZf9Z1tYnDfmywDSpl%2FG8XbiL%2FIR3cC26YBDsnZVdVIqhFe7TTeH6Gm9Fx48D8DyM0T6Iw4Unb7WDI5VfURJVIuounRXAPVyeiZTS66oTZC0GK4SMDu&X-Amz-Signature=32d1fdb9a7a1041b1bd383821723eae50e0e5f0261872fcaa5eb4924c62507f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRXPZZC%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF4Uw1Se6zzwdU8b8sPpmFp4AssGCzd2Xu9VqqA3otPAiEArbya0pLfbEltIGsMAtNHd7r9vV4Pd7t0wEWWIevfdvUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDC1S4ZJ0kNdMbVzGDCrcA3QkLqwrLAye1PpdY07W%2FU5G%2BRA3teb0SSj5hkrI6FWMKFpbYV%2FgTEdveqC0XisPJiuGkTHRdsgGUGhMyJJyPIKsxM7maT0j8qY2Q8rR%2BH8BrSoIB2CrTFXMGaZprRSMoPHU%2FwodTYwANibXKoZYtD4mgDgx%2BTvtPF4rtnKAaPn3ddVmeLazFKR2rSgynjUEO9oZJPNg4LjhLMaK30Mi%2FhNT3ZvdIHYoClne%2FqMzQ7BMaSoAwnfIFALJLKdlNhNuih9bGK4Ukhbk8jJzioADKNnqCXMnwwo3z6g3YiYKbClffVbrJrUcwTjIk6xGNVV0cFBPJbfW3UHcdcD4rCAeC8F5%2BsbFS2pG0649K6JJxDy8nyefgPJl78F8CQJeZlgbOZH4Ewvfbk0BXW70jNSk3zdf2mjfvqb5WuaIf91TwGQfSqxftHWNzVPQVSvh9k34EvWeUCTw3V1QYxZK6TY1YrGG41caVfTHOVEE2ehhiHMxzzvw%2BRD22fIvQsVEqrOjzFLzom3JcWe04WfIXMknb1q71Dvf%2Btkb7%2BIuSs64h%2FkqmRslme6XbLM8jHmJ6gDC7aRXbkV3KTkZnLxfXhJzeUg29S8twdKDyDhne12S0hzEeRLm6LIWmCjs7SrvMIWJoMgGOqUB%2FN9D5dru31xjpuCmA%2FGL74AB1P0whM1Jaxd%2BeOYuBdPE95sOgV7AfnE5gmZ4HFd10HR6zhB3%2FVZbqz2pilGLlX0lmx78nq62JOOir1kutaZf9Z1tYnDfmywDSpl%2FG8XbiL%2FIR3cC26YBDsnZVdVIqhFe7TTeH6Gm9Fx48D8DyM0T6Iw4Unb7WDI5VfURJVIuounRXAPVyeiZTS66oTZC0GK4SMDu&X-Amz-Signature=f88e4f9edb1aa2f3caa4f3576ff86e3c81e2d704dae25419d3a3b9fa0281ddc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRXPZZC%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF4Uw1Se6zzwdU8b8sPpmFp4AssGCzd2Xu9VqqA3otPAiEArbya0pLfbEltIGsMAtNHd7r9vV4Pd7t0wEWWIevfdvUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDC1S4ZJ0kNdMbVzGDCrcA3QkLqwrLAye1PpdY07W%2FU5G%2BRA3teb0SSj5hkrI6FWMKFpbYV%2FgTEdveqC0XisPJiuGkTHRdsgGUGhMyJJyPIKsxM7maT0j8qY2Q8rR%2BH8BrSoIB2CrTFXMGaZprRSMoPHU%2FwodTYwANibXKoZYtD4mgDgx%2BTvtPF4rtnKAaPn3ddVmeLazFKR2rSgynjUEO9oZJPNg4LjhLMaK30Mi%2FhNT3ZvdIHYoClne%2FqMzQ7BMaSoAwnfIFALJLKdlNhNuih9bGK4Ukhbk8jJzioADKNnqCXMnwwo3z6g3YiYKbClffVbrJrUcwTjIk6xGNVV0cFBPJbfW3UHcdcD4rCAeC8F5%2BsbFS2pG0649K6JJxDy8nyefgPJl78F8CQJeZlgbOZH4Ewvfbk0BXW70jNSk3zdf2mjfvqb5WuaIf91TwGQfSqxftHWNzVPQVSvh9k34EvWeUCTw3V1QYxZK6TY1YrGG41caVfTHOVEE2ehhiHMxzzvw%2BRD22fIvQsVEqrOjzFLzom3JcWe04WfIXMknb1q71Dvf%2Btkb7%2BIuSs64h%2FkqmRslme6XbLM8jHmJ6gDC7aRXbkV3KTkZnLxfXhJzeUg29S8twdKDyDhne12S0hzEeRLm6LIWmCjs7SrvMIWJoMgGOqUB%2FN9D5dru31xjpuCmA%2FGL74AB1P0whM1Jaxd%2BeOYuBdPE95sOgV7AfnE5gmZ4HFd10HR6zhB3%2FVZbqz2pilGLlX0lmx78nq62JOOir1kutaZf9Z1tYnDfmywDSpl%2FG8XbiL%2FIR3cC26YBDsnZVdVIqhFe7TTeH6Gm9Fx48D8DyM0T6Iw4Unb7WDI5VfURJVIuounRXAPVyeiZTS66oTZC0GK4SMDu&X-Amz-Signature=65ef6bd2941f18ab1c78d8e83817b7aaaa3b85f599505d35bba1759e6c10b14a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRXPZZC%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF4Uw1Se6zzwdU8b8sPpmFp4AssGCzd2Xu9VqqA3otPAiEArbya0pLfbEltIGsMAtNHd7r9vV4Pd7t0wEWWIevfdvUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDC1S4ZJ0kNdMbVzGDCrcA3QkLqwrLAye1PpdY07W%2FU5G%2BRA3teb0SSj5hkrI6FWMKFpbYV%2FgTEdveqC0XisPJiuGkTHRdsgGUGhMyJJyPIKsxM7maT0j8qY2Q8rR%2BH8BrSoIB2CrTFXMGaZprRSMoPHU%2FwodTYwANibXKoZYtD4mgDgx%2BTvtPF4rtnKAaPn3ddVmeLazFKR2rSgynjUEO9oZJPNg4LjhLMaK30Mi%2FhNT3ZvdIHYoClne%2FqMzQ7BMaSoAwnfIFALJLKdlNhNuih9bGK4Ukhbk8jJzioADKNnqCXMnwwo3z6g3YiYKbClffVbrJrUcwTjIk6xGNVV0cFBPJbfW3UHcdcD4rCAeC8F5%2BsbFS2pG0649K6JJxDy8nyefgPJl78F8CQJeZlgbOZH4Ewvfbk0BXW70jNSk3zdf2mjfvqb5WuaIf91TwGQfSqxftHWNzVPQVSvh9k34EvWeUCTw3V1QYxZK6TY1YrGG41caVfTHOVEE2ehhiHMxzzvw%2BRD22fIvQsVEqrOjzFLzom3JcWe04WfIXMknb1q71Dvf%2Btkb7%2BIuSs64h%2FkqmRslme6XbLM8jHmJ6gDC7aRXbkV3KTkZnLxfXhJzeUg29S8twdKDyDhne12S0hzEeRLm6LIWmCjs7SrvMIWJoMgGOqUB%2FN9D5dru31xjpuCmA%2FGL74AB1P0whM1Jaxd%2BeOYuBdPE95sOgV7AfnE5gmZ4HFd10HR6zhB3%2FVZbqz2pilGLlX0lmx78nq62JOOir1kutaZf9Z1tYnDfmywDSpl%2FG8XbiL%2FIR3cC26YBDsnZVdVIqhFe7TTeH6Gm9Fx48D8DyM0T6Iw4Unb7WDI5VfURJVIuounRXAPVyeiZTS66oTZC0GK4SMDu&X-Amz-Signature=2822b0c72fe39c16148342310a76abc2b507c7ec370e33a11778858e51e4152d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRXPZZC%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF4Uw1Se6zzwdU8b8sPpmFp4AssGCzd2Xu9VqqA3otPAiEArbya0pLfbEltIGsMAtNHd7r9vV4Pd7t0wEWWIevfdvUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDC1S4ZJ0kNdMbVzGDCrcA3QkLqwrLAye1PpdY07W%2FU5G%2BRA3teb0SSj5hkrI6FWMKFpbYV%2FgTEdveqC0XisPJiuGkTHRdsgGUGhMyJJyPIKsxM7maT0j8qY2Q8rR%2BH8BrSoIB2CrTFXMGaZprRSMoPHU%2FwodTYwANibXKoZYtD4mgDgx%2BTvtPF4rtnKAaPn3ddVmeLazFKR2rSgynjUEO9oZJPNg4LjhLMaK30Mi%2FhNT3ZvdIHYoClne%2FqMzQ7BMaSoAwnfIFALJLKdlNhNuih9bGK4Ukhbk8jJzioADKNnqCXMnwwo3z6g3YiYKbClffVbrJrUcwTjIk6xGNVV0cFBPJbfW3UHcdcD4rCAeC8F5%2BsbFS2pG0649K6JJxDy8nyefgPJl78F8CQJeZlgbOZH4Ewvfbk0BXW70jNSk3zdf2mjfvqb5WuaIf91TwGQfSqxftHWNzVPQVSvh9k34EvWeUCTw3V1QYxZK6TY1YrGG41caVfTHOVEE2ehhiHMxzzvw%2BRD22fIvQsVEqrOjzFLzom3JcWe04WfIXMknb1q71Dvf%2Btkb7%2BIuSs64h%2FkqmRslme6XbLM8jHmJ6gDC7aRXbkV3KTkZnLxfXhJzeUg29S8twdKDyDhne12S0hzEeRLm6LIWmCjs7SrvMIWJoMgGOqUB%2FN9D5dru31xjpuCmA%2FGL74AB1P0whM1Jaxd%2BeOYuBdPE95sOgV7AfnE5gmZ4HFd10HR6zhB3%2FVZbqz2pilGLlX0lmx78nq62JOOir1kutaZf9Z1tYnDfmywDSpl%2FG8XbiL%2FIR3cC26YBDsnZVdVIqhFe7TTeH6Gm9Fx48D8DyM0T6Iw4Unb7WDI5VfURJVIuounRXAPVyeiZTS66oTZC0GK4SMDu&X-Amz-Signature=2c5d230295c839575f3d6e23e9a428d5b2e05115157b5d5eea48ba4dfb9d596c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRXPZZC%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF4Uw1Se6zzwdU8b8sPpmFp4AssGCzd2Xu9VqqA3otPAiEArbya0pLfbEltIGsMAtNHd7r9vV4Pd7t0wEWWIevfdvUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDC1S4ZJ0kNdMbVzGDCrcA3QkLqwrLAye1PpdY07W%2FU5G%2BRA3teb0SSj5hkrI6FWMKFpbYV%2FgTEdveqC0XisPJiuGkTHRdsgGUGhMyJJyPIKsxM7maT0j8qY2Q8rR%2BH8BrSoIB2CrTFXMGaZprRSMoPHU%2FwodTYwANibXKoZYtD4mgDgx%2BTvtPF4rtnKAaPn3ddVmeLazFKR2rSgynjUEO9oZJPNg4LjhLMaK30Mi%2FhNT3ZvdIHYoClne%2FqMzQ7BMaSoAwnfIFALJLKdlNhNuih9bGK4Ukhbk8jJzioADKNnqCXMnwwo3z6g3YiYKbClffVbrJrUcwTjIk6xGNVV0cFBPJbfW3UHcdcD4rCAeC8F5%2BsbFS2pG0649K6JJxDy8nyefgPJl78F8CQJeZlgbOZH4Ewvfbk0BXW70jNSk3zdf2mjfvqb5WuaIf91TwGQfSqxftHWNzVPQVSvh9k34EvWeUCTw3V1QYxZK6TY1YrGG41caVfTHOVEE2ehhiHMxzzvw%2BRD22fIvQsVEqrOjzFLzom3JcWe04WfIXMknb1q71Dvf%2Btkb7%2BIuSs64h%2FkqmRslme6XbLM8jHmJ6gDC7aRXbkV3KTkZnLxfXhJzeUg29S8twdKDyDhne12S0hzEeRLm6LIWmCjs7SrvMIWJoMgGOqUB%2FN9D5dru31xjpuCmA%2FGL74AB1P0whM1Jaxd%2BeOYuBdPE95sOgV7AfnE5gmZ4HFd10HR6zhB3%2FVZbqz2pilGLlX0lmx78nq62JOOir1kutaZf9Z1tYnDfmywDSpl%2FG8XbiL%2FIR3cC26YBDsnZVdVIqhFe7TTeH6Gm9Fx48D8DyM0T6Iw4Unb7WDI5VfURJVIuounRXAPVyeiZTS66oTZC0GK4SMDu&X-Amz-Signature=2a576bd8ef7ab846e5b03c4e3a4b81a53e77cfd1d2edb7547b9d2fbd4c9822c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
