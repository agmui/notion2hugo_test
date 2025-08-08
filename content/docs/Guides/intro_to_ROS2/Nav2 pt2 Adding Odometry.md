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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQH5ZOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCpzDGn6G0Yj%2FyD1b37ZUWfICH5WyxsEK7Dkfhkojn%2BbQIhAN5bDgev6sg%2FxNuhNCBH6yaKdkOhppqEvxO2vfU9RoWKKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMGjtoRwvJPy4J7vkq3AMcHc1g7chr1vqQipiTNJyVi7dtwGTdLaEIcAQx%2B2MOwhhMAdNgfAA%2FNnpjZNkk%2BdWQDKwqjnZ5xPDTYi%2Be3d0QIAmUdX2ACruryrhLoTrhaXRU9YVR7DgMjW204bhSfYP2z%2F5yAGlNYmETH8PLta1muXqB7ZC86za%2BVN7gNkcoDdnCK%2BOruzR5c7jTnhh85SWVPQnUsEPjoc3c%2Bnt8kFNJlCoh5GUz3LGkFQOuRw44b%2FM8RIuYp04OSo4yXAgY7%2Fj9cFBWtdee51q0jUHBFoPfQ3sywus9t4ZhtzfFA9jL7UFWpjEPbz87b4tCHD4k5hkgzFtBxEDgGMeChx8uQsRVmNDaAlkJb8%2FJy5zGfAybgpEEs0Z28uDN%2FI8A0Z92aUkDQZCD8M2koGzs97P1qjcn3cUw8B18jY1w3O%2B97YxnMdXmap0DTZAFC8Obymwp1HBhg2luvrSQgucHRfIYX8DUuwEJTL5WxDMeFPXkNtOpVufjWZNZPyWacyB2VWDNMdPWk9KAyqzmL%2Bo5PQ%2Bdg7TW3woDMRq%2BNwxP5Xzhw2oYN33PT30ZFikARJWHL6440skK0Say8OrZEUCshkJOd9ind%2FJSrAAM%2BkbuPOwmJ74fPbqCnIrH8EMAM3dmJTDxrdXEBjqkAfiMhXpK8cQk55h1pg0g8E3QqV5iValN1lwhCenluWbZKEzbbeaKohq3%2FvMNm3PxqsRdv6RmY4991lsgIGtNIG57kpYADisw7MJr0y91SJhewivZ7MPa7dJBWNmekI1%2FhMnTYgskUBmQ0yU%2FnK%2BpZoL1fZY3mcive2avLVm%2Fhui0%2BNXM%2B4jgOP7xv%2BSShGPF5qq3U3fefpzZf7o52GV0Z3zY38jp&X-Amz-Signature=9ddc0bf25e1e1c666e3ea69b49854c9bee31fac61a868d0b4b8b82400ec402fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQH5ZOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCpzDGn6G0Yj%2FyD1b37ZUWfICH5WyxsEK7Dkfhkojn%2BbQIhAN5bDgev6sg%2FxNuhNCBH6yaKdkOhppqEvxO2vfU9RoWKKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMGjtoRwvJPy4J7vkq3AMcHc1g7chr1vqQipiTNJyVi7dtwGTdLaEIcAQx%2B2MOwhhMAdNgfAA%2FNnpjZNkk%2BdWQDKwqjnZ5xPDTYi%2Be3d0QIAmUdX2ACruryrhLoTrhaXRU9YVR7DgMjW204bhSfYP2z%2F5yAGlNYmETH8PLta1muXqB7ZC86za%2BVN7gNkcoDdnCK%2BOruzR5c7jTnhh85SWVPQnUsEPjoc3c%2Bnt8kFNJlCoh5GUz3LGkFQOuRw44b%2FM8RIuYp04OSo4yXAgY7%2Fj9cFBWtdee51q0jUHBFoPfQ3sywus9t4ZhtzfFA9jL7UFWpjEPbz87b4tCHD4k5hkgzFtBxEDgGMeChx8uQsRVmNDaAlkJb8%2FJy5zGfAybgpEEs0Z28uDN%2FI8A0Z92aUkDQZCD8M2koGzs97P1qjcn3cUw8B18jY1w3O%2B97YxnMdXmap0DTZAFC8Obymwp1HBhg2luvrSQgucHRfIYX8DUuwEJTL5WxDMeFPXkNtOpVufjWZNZPyWacyB2VWDNMdPWk9KAyqzmL%2Bo5PQ%2Bdg7TW3woDMRq%2BNwxP5Xzhw2oYN33PT30ZFikARJWHL6440skK0Say8OrZEUCshkJOd9ind%2FJSrAAM%2BkbuPOwmJ74fPbqCnIrH8EMAM3dmJTDxrdXEBjqkAfiMhXpK8cQk55h1pg0g8E3QqV5iValN1lwhCenluWbZKEzbbeaKohq3%2FvMNm3PxqsRdv6RmY4991lsgIGtNIG57kpYADisw7MJr0y91SJhewivZ7MPa7dJBWNmekI1%2FhMnTYgskUBmQ0yU%2FnK%2BpZoL1fZY3mcive2avLVm%2Fhui0%2BNXM%2B4jgOP7xv%2BSShGPF5qq3U3fefpzZf7o52GV0Z3zY38jp&X-Amz-Signature=579f3f983612609418b2db3c24d4abc6a5d0473d013a0e19be66032270991896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQH5ZOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCpzDGn6G0Yj%2FyD1b37ZUWfICH5WyxsEK7Dkfhkojn%2BbQIhAN5bDgev6sg%2FxNuhNCBH6yaKdkOhppqEvxO2vfU9RoWKKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMGjtoRwvJPy4J7vkq3AMcHc1g7chr1vqQipiTNJyVi7dtwGTdLaEIcAQx%2B2MOwhhMAdNgfAA%2FNnpjZNkk%2BdWQDKwqjnZ5xPDTYi%2Be3d0QIAmUdX2ACruryrhLoTrhaXRU9YVR7DgMjW204bhSfYP2z%2F5yAGlNYmETH8PLta1muXqB7ZC86za%2BVN7gNkcoDdnCK%2BOruzR5c7jTnhh85SWVPQnUsEPjoc3c%2Bnt8kFNJlCoh5GUz3LGkFQOuRw44b%2FM8RIuYp04OSo4yXAgY7%2Fj9cFBWtdee51q0jUHBFoPfQ3sywus9t4ZhtzfFA9jL7UFWpjEPbz87b4tCHD4k5hkgzFtBxEDgGMeChx8uQsRVmNDaAlkJb8%2FJy5zGfAybgpEEs0Z28uDN%2FI8A0Z92aUkDQZCD8M2koGzs97P1qjcn3cUw8B18jY1w3O%2B97YxnMdXmap0DTZAFC8Obymwp1HBhg2luvrSQgucHRfIYX8DUuwEJTL5WxDMeFPXkNtOpVufjWZNZPyWacyB2VWDNMdPWk9KAyqzmL%2Bo5PQ%2Bdg7TW3woDMRq%2BNwxP5Xzhw2oYN33PT30ZFikARJWHL6440skK0Say8OrZEUCshkJOd9ind%2FJSrAAM%2BkbuPOwmJ74fPbqCnIrH8EMAM3dmJTDxrdXEBjqkAfiMhXpK8cQk55h1pg0g8E3QqV5iValN1lwhCenluWbZKEzbbeaKohq3%2FvMNm3PxqsRdv6RmY4991lsgIGtNIG57kpYADisw7MJr0y91SJhewivZ7MPa7dJBWNmekI1%2FhMnTYgskUBmQ0yU%2FnK%2BpZoL1fZY3mcive2avLVm%2Fhui0%2BNXM%2B4jgOP7xv%2BSShGPF5qq3U3fefpzZf7o52GV0Z3zY38jp&X-Amz-Signature=7f7fe7b0cb5196c2fcf28ea3997c86271f7613c3b306c3697be23106c6ad83ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQH5ZOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCpzDGn6G0Yj%2FyD1b37ZUWfICH5WyxsEK7Dkfhkojn%2BbQIhAN5bDgev6sg%2FxNuhNCBH6yaKdkOhppqEvxO2vfU9RoWKKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMGjtoRwvJPy4J7vkq3AMcHc1g7chr1vqQipiTNJyVi7dtwGTdLaEIcAQx%2B2MOwhhMAdNgfAA%2FNnpjZNkk%2BdWQDKwqjnZ5xPDTYi%2Be3d0QIAmUdX2ACruryrhLoTrhaXRU9YVR7DgMjW204bhSfYP2z%2F5yAGlNYmETH8PLta1muXqB7ZC86za%2BVN7gNkcoDdnCK%2BOruzR5c7jTnhh85SWVPQnUsEPjoc3c%2Bnt8kFNJlCoh5GUz3LGkFQOuRw44b%2FM8RIuYp04OSo4yXAgY7%2Fj9cFBWtdee51q0jUHBFoPfQ3sywus9t4ZhtzfFA9jL7UFWpjEPbz87b4tCHD4k5hkgzFtBxEDgGMeChx8uQsRVmNDaAlkJb8%2FJy5zGfAybgpEEs0Z28uDN%2FI8A0Z92aUkDQZCD8M2koGzs97P1qjcn3cUw8B18jY1w3O%2B97YxnMdXmap0DTZAFC8Obymwp1HBhg2luvrSQgucHRfIYX8DUuwEJTL5WxDMeFPXkNtOpVufjWZNZPyWacyB2VWDNMdPWk9KAyqzmL%2Bo5PQ%2Bdg7TW3woDMRq%2BNwxP5Xzhw2oYN33PT30ZFikARJWHL6440skK0Say8OrZEUCshkJOd9ind%2FJSrAAM%2BkbuPOwmJ74fPbqCnIrH8EMAM3dmJTDxrdXEBjqkAfiMhXpK8cQk55h1pg0g8E3QqV5iValN1lwhCenluWbZKEzbbeaKohq3%2FvMNm3PxqsRdv6RmY4991lsgIGtNIG57kpYADisw7MJr0y91SJhewivZ7MPa7dJBWNmekI1%2FhMnTYgskUBmQ0yU%2FnK%2BpZoL1fZY3mcive2avLVm%2Fhui0%2BNXM%2B4jgOP7xv%2BSShGPF5qq3U3fefpzZf7o52GV0Z3zY38jp&X-Amz-Signature=8c2bc71be1946cb4c009e5a8290a7c98396901ac46cb52bc3efa761c29c0284c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQH5ZOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCpzDGn6G0Yj%2FyD1b37ZUWfICH5WyxsEK7Dkfhkojn%2BbQIhAN5bDgev6sg%2FxNuhNCBH6yaKdkOhppqEvxO2vfU9RoWKKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMGjtoRwvJPy4J7vkq3AMcHc1g7chr1vqQipiTNJyVi7dtwGTdLaEIcAQx%2B2MOwhhMAdNgfAA%2FNnpjZNkk%2BdWQDKwqjnZ5xPDTYi%2Be3d0QIAmUdX2ACruryrhLoTrhaXRU9YVR7DgMjW204bhSfYP2z%2F5yAGlNYmETH8PLta1muXqB7ZC86za%2BVN7gNkcoDdnCK%2BOruzR5c7jTnhh85SWVPQnUsEPjoc3c%2Bnt8kFNJlCoh5GUz3LGkFQOuRw44b%2FM8RIuYp04OSo4yXAgY7%2Fj9cFBWtdee51q0jUHBFoPfQ3sywus9t4ZhtzfFA9jL7UFWpjEPbz87b4tCHD4k5hkgzFtBxEDgGMeChx8uQsRVmNDaAlkJb8%2FJy5zGfAybgpEEs0Z28uDN%2FI8A0Z92aUkDQZCD8M2koGzs97P1qjcn3cUw8B18jY1w3O%2B97YxnMdXmap0DTZAFC8Obymwp1HBhg2luvrSQgucHRfIYX8DUuwEJTL5WxDMeFPXkNtOpVufjWZNZPyWacyB2VWDNMdPWk9KAyqzmL%2Bo5PQ%2Bdg7TW3woDMRq%2BNwxP5Xzhw2oYN33PT30ZFikARJWHL6440skK0Say8OrZEUCshkJOd9ind%2FJSrAAM%2BkbuPOwmJ74fPbqCnIrH8EMAM3dmJTDxrdXEBjqkAfiMhXpK8cQk55h1pg0g8E3QqV5iValN1lwhCenluWbZKEzbbeaKohq3%2FvMNm3PxqsRdv6RmY4991lsgIGtNIG57kpYADisw7MJr0y91SJhewivZ7MPa7dJBWNmekI1%2FhMnTYgskUBmQ0yU%2FnK%2BpZoL1fZY3mcive2avLVm%2Fhui0%2BNXM%2B4jgOP7xv%2BSShGPF5qq3U3fefpzZf7o52GV0Z3zY38jp&X-Amz-Signature=ba1b406f01dc1d46a69dc74a9e74bc9fa5de7de7be24071f9aec724cb14506e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQH5ZOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCpzDGn6G0Yj%2FyD1b37ZUWfICH5WyxsEK7Dkfhkojn%2BbQIhAN5bDgev6sg%2FxNuhNCBH6yaKdkOhppqEvxO2vfU9RoWKKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMGjtoRwvJPy4J7vkq3AMcHc1g7chr1vqQipiTNJyVi7dtwGTdLaEIcAQx%2B2MOwhhMAdNgfAA%2FNnpjZNkk%2BdWQDKwqjnZ5xPDTYi%2Be3d0QIAmUdX2ACruryrhLoTrhaXRU9YVR7DgMjW204bhSfYP2z%2F5yAGlNYmETH8PLta1muXqB7ZC86za%2BVN7gNkcoDdnCK%2BOruzR5c7jTnhh85SWVPQnUsEPjoc3c%2Bnt8kFNJlCoh5GUz3LGkFQOuRw44b%2FM8RIuYp04OSo4yXAgY7%2Fj9cFBWtdee51q0jUHBFoPfQ3sywus9t4ZhtzfFA9jL7UFWpjEPbz87b4tCHD4k5hkgzFtBxEDgGMeChx8uQsRVmNDaAlkJb8%2FJy5zGfAybgpEEs0Z28uDN%2FI8A0Z92aUkDQZCD8M2koGzs97P1qjcn3cUw8B18jY1w3O%2B97YxnMdXmap0DTZAFC8Obymwp1HBhg2luvrSQgucHRfIYX8DUuwEJTL5WxDMeFPXkNtOpVufjWZNZPyWacyB2VWDNMdPWk9KAyqzmL%2Bo5PQ%2Bdg7TW3woDMRq%2BNwxP5Xzhw2oYN33PT30ZFikARJWHL6440skK0Say8OrZEUCshkJOd9ind%2FJSrAAM%2BkbuPOwmJ74fPbqCnIrH8EMAM3dmJTDxrdXEBjqkAfiMhXpK8cQk55h1pg0g8E3QqV5iValN1lwhCenluWbZKEzbbeaKohq3%2FvMNm3PxqsRdv6RmY4991lsgIGtNIG57kpYADisw7MJr0y91SJhewivZ7MPa7dJBWNmekI1%2FhMnTYgskUBmQ0yU%2FnK%2BpZoL1fZY3mcive2avLVm%2Fhui0%2BNXM%2B4jgOP7xv%2BSShGPF5qq3U3fefpzZf7o52GV0Z3zY38jp&X-Amz-Signature=ae872108ebeac9149e02072ca1b05914a01239911d2998504ced59c646094327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQH5ZOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCpzDGn6G0Yj%2FyD1b37ZUWfICH5WyxsEK7Dkfhkojn%2BbQIhAN5bDgev6sg%2FxNuhNCBH6yaKdkOhppqEvxO2vfU9RoWKKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMGjtoRwvJPy4J7vkq3AMcHc1g7chr1vqQipiTNJyVi7dtwGTdLaEIcAQx%2B2MOwhhMAdNgfAA%2FNnpjZNkk%2BdWQDKwqjnZ5xPDTYi%2Be3d0QIAmUdX2ACruryrhLoTrhaXRU9YVR7DgMjW204bhSfYP2z%2F5yAGlNYmETH8PLta1muXqB7ZC86za%2BVN7gNkcoDdnCK%2BOruzR5c7jTnhh85SWVPQnUsEPjoc3c%2Bnt8kFNJlCoh5GUz3LGkFQOuRw44b%2FM8RIuYp04OSo4yXAgY7%2Fj9cFBWtdee51q0jUHBFoPfQ3sywus9t4ZhtzfFA9jL7UFWpjEPbz87b4tCHD4k5hkgzFtBxEDgGMeChx8uQsRVmNDaAlkJb8%2FJy5zGfAybgpEEs0Z28uDN%2FI8A0Z92aUkDQZCD8M2koGzs97P1qjcn3cUw8B18jY1w3O%2B97YxnMdXmap0DTZAFC8Obymwp1HBhg2luvrSQgucHRfIYX8DUuwEJTL5WxDMeFPXkNtOpVufjWZNZPyWacyB2VWDNMdPWk9KAyqzmL%2Bo5PQ%2Bdg7TW3woDMRq%2BNwxP5Xzhw2oYN33PT30ZFikARJWHL6440skK0Say8OrZEUCshkJOd9ind%2FJSrAAM%2BkbuPOwmJ74fPbqCnIrH8EMAM3dmJTDxrdXEBjqkAfiMhXpK8cQk55h1pg0g8E3QqV5iValN1lwhCenluWbZKEzbbeaKohq3%2FvMNm3PxqsRdv6RmY4991lsgIGtNIG57kpYADisw7MJr0y91SJhewivZ7MPa7dJBWNmekI1%2FhMnTYgskUBmQ0yU%2FnK%2BpZoL1fZY3mcive2avLVm%2Fhui0%2BNXM%2B4jgOP7xv%2BSShGPF5qq3U3fefpzZf7o52GV0Z3zY38jp&X-Amz-Signature=76b49f86ef4df1b1b0a5952fb473b1ac8409815cd4a6df07cfdd08e50eede00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQH5ZOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCpzDGn6G0Yj%2FyD1b37ZUWfICH5WyxsEK7Dkfhkojn%2BbQIhAN5bDgev6sg%2FxNuhNCBH6yaKdkOhppqEvxO2vfU9RoWKKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMGjtoRwvJPy4J7vkq3AMcHc1g7chr1vqQipiTNJyVi7dtwGTdLaEIcAQx%2B2MOwhhMAdNgfAA%2FNnpjZNkk%2BdWQDKwqjnZ5xPDTYi%2Be3d0QIAmUdX2ACruryrhLoTrhaXRU9YVR7DgMjW204bhSfYP2z%2F5yAGlNYmETH8PLta1muXqB7ZC86za%2BVN7gNkcoDdnCK%2BOruzR5c7jTnhh85SWVPQnUsEPjoc3c%2Bnt8kFNJlCoh5GUz3LGkFQOuRw44b%2FM8RIuYp04OSo4yXAgY7%2Fj9cFBWtdee51q0jUHBFoPfQ3sywus9t4ZhtzfFA9jL7UFWpjEPbz87b4tCHD4k5hkgzFtBxEDgGMeChx8uQsRVmNDaAlkJb8%2FJy5zGfAybgpEEs0Z28uDN%2FI8A0Z92aUkDQZCD8M2koGzs97P1qjcn3cUw8B18jY1w3O%2B97YxnMdXmap0DTZAFC8Obymwp1HBhg2luvrSQgucHRfIYX8DUuwEJTL5WxDMeFPXkNtOpVufjWZNZPyWacyB2VWDNMdPWk9KAyqzmL%2Bo5PQ%2Bdg7TW3woDMRq%2BNwxP5Xzhw2oYN33PT30ZFikARJWHL6440skK0Say8OrZEUCshkJOd9ind%2FJSrAAM%2BkbuPOwmJ74fPbqCnIrH8EMAM3dmJTDxrdXEBjqkAfiMhXpK8cQk55h1pg0g8E3QqV5iValN1lwhCenluWbZKEzbbeaKohq3%2FvMNm3PxqsRdv6RmY4991lsgIGtNIG57kpYADisw7MJr0y91SJhewivZ7MPa7dJBWNmekI1%2FhMnTYgskUBmQ0yU%2FnK%2BpZoL1fZY3mcive2avLVm%2Fhui0%2BNXM%2B4jgOP7xv%2BSShGPF5qq3U3fefpzZf7o52GV0Z3zY38jp&X-Amz-Signature=8022f159a3b85c16f1f855671d9708ce22408c58000ea23d9ae3fed79f15ee19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQH5ZOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCpzDGn6G0Yj%2FyD1b37ZUWfICH5WyxsEK7Dkfhkojn%2BbQIhAN5bDgev6sg%2FxNuhNCBH6yaKdkOhppqEvxO2vfU9RoWKKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMGjtoRwvJPy4J7vkq3AMcHc1g7chr1vqQipiTNJyVi7dtwGTdLaEIcAQx%2B2MOwhhMAdNgfAA%2FNnpjZNkk%2BdWQDKwqjnZ5xPDTYi%2Be3d0QIAmUdX2ACruryrhLoTrhaXRU9YVR7DgMjW204bhSfYP2z%2F5yAGlNYmETH8PLta1muXqB7ZC86za%2BVN7gNkcoDdnCK%2BOruzR5c7jTnhh85SWVPQnUsEPjoc3c%2Bnt8kFNJlCoh5GUz3LGkFQOuRw44b%2FM8RIuYp04OSo4yXAgY7%2Fj9cFBWtdee51q0jUHBFoPfQ3sywus9t4ZhtzfFA9jL7UFWpjEPbz87b4tCHD4k5hkgzFtBxEDgGMeChx8uQsRVmNDaAlkJb8%2FJy5zGfAybgpEEs0Z28uDN%2FI8A0Z92aUkDQZCD8M2koGzs97P1qjcn3cUw8B18jY1w3O%2B97YxnMdXmap0DTZAFC8Obymwp1HBhg2luvrSQgucHRfIYX8DUuwEJTL5WxDMeFPXkNtOpVufjWZNZPyWacyB2VWDNMdPWk9KAyqzmL%2Bo5PQ%2Bdg7TW3woDMRq%2BNwxP5Xzhw2oYN33PT30ZFikARJWHL6440skK0Say8OrZEUCshkJOd9ind%2FJSrAAM%2BkbuPOwmJ74fPbqCnIrH8EMAM3dmJTDxrdXEBjqkAfiMhXpK8cQk55h1pg0g8E3QqV5iValN1lwhCenluWbZKEzbbeaKohq3%2FvMNm3PxqsRdv6RmY4991lsgIGtNIG57kpYADisw7MJr0y91SJhewivZ7MPa7dJBWNmekI1%2FhMnTYgskUBmQ0yU%2FnK%2BpZoL1fZY3mcive2avLVm%2Fhui0%2BNXM%2B4jgOP7xv%2BSShGPF5qq3U3fefpzZf7o52GV0Z3zY38jp&X-Amz-Signature=11ae39965c81d15f5f347865cf39a704b3dfcc282f075b6b63c2a941ff7c6666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQH5ZOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCpzDGn6G0Yj%2FyD1b37ZUWfICH5WyxsEK7Dkfhkojn%2BbQIhAN5bDgev6sg%2FxNuhNCBH6yaKdkOhppqEvxO2vfU9RoWKKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMGjtoRwvJPy4J7vkq3AMcHc1g7chr1vqQipiTNJyVi7dtwGTdLaEIcAQx%2B2MOwhhMAdNgfAA%2FNnpjZNkk%2BdWQDKwqjnZ5xPDTYi%2Be3d0QIAmUdX2ACruryrhLoTrhaXRU9YVR7DgMjW204bhSfYP2z%2F5yAGlNYmETH8PLta1muXqB7ZC86za%2BVN7gNkcoDdnCK%2BOruzR5c7jTnhh85SWVPQnUsEPjoc3c%2Bnt8kFNJlCoh5GUz3LGkFQOuRw44b%2FM8RIuYp04OSo4yXAgY7%2Fj9cFBWtdee51q0jUHBFoPfQ3sywus9t4ZhtzfFA9jL7UFWpjEPbz87b4tCHD4k5hkgzFtBxEDgGMeChx8uQsRVmNDaAlkJb8%2FJy5zGfAybgpEEs0Z28uDN%2FI8A0Z92aUkDQZCD8M2koGzs97P1qjcn3cUw8B18jY1w3O%2B97YxnMdXmap0DTZAFC8Obymwp1HBhg2luvrSQgucHRfIYX8DUuwEJTL5WxDMeFPXkNtOpVufjWZNZPyWacyB2VWDNMdPWk9KAyqzmL%2Bo5PQ%2Bdg7TW3woDMRq%2BNwxP5Xzhw2oYN33PT30ZFikARJWHL6440skK0Say8OrZEUCshkJOd9ind%2FJSrAAM%2BkbuPOwmJ74fPbqCnIrH8EMAM3dmJTDxrdXEBjqkAfiMhXpK8cQk55h1pg0g8E3QqV5iValN1lwhCenluWbZKEzbbeaKohq3%2FvMNm3PxqsRdv6RmY4991lsgIGtNIG57kpYADisw7MJr0y91SJhewivZ7MPa7dJBWNmekI1%2FhMnTYgskUBmQ0yU%2FnK%2BpZoL1fZY3mcive2avLVm%2Fhui0%2BNXM%2B4jgOP7xv%2BSShGPF5qq3U3fefpzZf7o52GV0Z3zY38jp&X-Amz-Signature=8ed6b5099ba38cc5e9419f3890f4b5beabecf37797788cae0aa1ace6b57d33a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQNDRCZX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICU0JzO4bWjLI5jZY54IG8bpQ8LI4o16FmS6nkJO8%2FXfAiBBJQwvsfVKZmjLdEDZ0r6fuhe%2Fg%2BfbnwPeKjwTHYj6aCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1IsUwi7nP2thBKXCKtwD2xoJEtAx%2FHLyRWFRS12OR%2BsKWyAiDQm6xvL5HHjW1Cinvc%2BC3SWc5V3rFiIg5cR0dLi9Q%2FJnyZI7HtIRqZKuQ2S50JijNBOeKbNVrSZpklQVEQf2dbD1rq3fmyYscokMTEymsAZ%2Bh%2BhYG6sSRcbl7kFB9yzYQTK0IiQz4Ozi%2B0wUvRHua%2BuC2ecdPils6hX%2F%2BTStqP1mZmxV0qeh%2BPz7e1AmIjG61A0nyaYYQ%2FwVymzSod50FsYcOp%2BYOAaC2qSGV7vXFwls7B5CADRdI15MdBMCeAXlQh78EnTfq%2FLnSvbtoM%2FQYFg07OMXa49%2BoCPimVd6I8fO81zUF6KvBOSkG9JRGXYPojCGeRqtFclfFkS%2F3ndHPKkemHfKibbQD0NFeskoGXTse%2BoxeEzm6sb4GGeGIFNRfJWButI%2BXhlMHatXO8AwDVuQqIelBkDM1amv8j2xPUG3QkI7AcM3V2UpqWkSVstVqj9kzydUHs0FkMPtREL6wcyD5F7nhaZwn6XwJLCCTsJWqwhkgy2bwWzDm7dMaJeajzPhtPYe8kBKuk9nCBhGOFZCGh%2F8fyXL%2Bf5xkN1KblP7dSH0dNxkP6Tk%2BaEjlhzzKCx%2BBfEGuOzSCERJN1Thmb5QXi%2BIFgIwwa7VxAY6pgE3azDMg3eHzqoIx94xlS9YCzACYaUZOm28URWP9fgoS36GP30Q5wKwvBoR5%2B6o694L0jwycbXQpLo2XjDh1oHXFIKBVcdU09Ipe3qdUlZU32LKGDWSOEdU5KumEZOnI1isyXoO8NN1DDrMa6NWs3wP0kJmmYde8NHgnIGU9lAb8AB47mptNkTvbgvQ42VQ1pboUIi1aO%2B9Jc15Vfxsg75dLW1pr9JY&X-Amz-Signature=af38a6022e9766fded1d77b4f4a463eba02e5f07a60990da0ad63562b2163c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMYAWHQ6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICV5Fr08R2mb8htBXtaeOjLxjL6RkTryVv0LJdEqMPl1AiEA7sFZxKziGOePWwB0G1oqIKOjRHhlOfdsfHIjaQhQuZYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcS0dzeGPoMjLx%2FDCrcA%2BxoYUgoEi9v%2BV4GsfmA0g5wnmPlPjWyDmBNJuykXq%2FejMfJEiEZPPEgKphATl1TX767xpyHBbyoIe%2BfFUFLh4pCh11d6OZb17DDx2mDbfiWi3tywGa2EzJ3%2BZVpxbHo4PERWZQRqyLSckoic3nay8EMYBFYO8JIowQt4ZVcMPGr1bwDbJg13UKfEp4RdRL39I7RODIZ98oLyEFkJtpIKL8aYVw3LGvbT4ed11fQf6dG2zXu5K98WTlkqMhkeAXzjAPHfsS4m03UtOShe9lq2lId2zzG7cnL%2BMlhzKTqpZMbCqklIA2Iq%2FYd0vEEqebE0buzIZbFw7wlpwHdQQI9aJg5Z2xqug17sMIutbIwDEDvv%2FLRoccu4hAIJU67MHFdwK26lxLcDCyYpw%2FikT2G%2Borot5saPOYMXeNL44of%2FioJ83yst4n8qI1bAgaOipeny%2BqUMfva%2BfCCHniDZHtONmspMRX9J6p9d4nSDHjL1qP9nvPLL7PzioDtkZCYQYM2va0KOZKlRGnhJ%2B8%2F8ydMWFgS58taU0wLVZCuUTKVWWMkibmZ%2Bow5GlnHUFVa57uXOEhsuSzUoroKkb3S1IBdY0Mww51isslbeCm6RV%2BT0Ubq3H8lLUgAIRVsG7ZWMIGv1cQGOqUBkRombZEf0OnmpJK23FG%2F5OrNYrp3FxlZ3K00SD65tLlWwrwJikA7YW77d3lxfa84SXq1%2BZoBKvIsFIgInYcdPbJt87vLn8I0e3fMMzjT3RPBGwiJtqTTzq6NtmboTiBgbLnAhpGGh7SZRv9UZhPeZjZb%2FgI0xy99dzfROzAiQ7fNmWFUciIV2dBNLWSp4gII3G2tuIOOooTbIpoODFo6ih9wPq1J&X-Amz-Signature=4f3e7dd207ab2d7cb6c1a5211c5ec493352941ac96baa49b1b3ca52fd61a9cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMYAWHQ6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICV5Fr08R2mb8htBXtaeOjLxjL6RkTryVv0LJdEqMPl1AiEA7sFZxKziGOePWwB0G1oqIKOjRHhlOfdsfHIjaQhQuZYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcS0dzeGPoMjLx%2FDCrcA%2BxoYUgoEi9v%2BV4GsfmA0g5wnmPlPjWyDmBNJuykXq%2FejMfJEiEZPPEgKphATl1TX767xpyHBbyoIe%2BfFUFLh4pCh11d6OZb17DDx2mDbfiWi3tywGa2EzJ3%2BZVpxbHo4PERWZQRqyLSckoic3nay8EMYBFYO8JIowQt4ZVcMPGr1bwDbJg13UKfEp4RdRL39I7RODIZ98oLyEFkJtpIKL8aYVw3LGvbT4ed11fQf6dG2zXu5K98WTlkqMhkeAXzjAPHfsS4m03UtOShe9lq2lId2zzG7cnL%2BMlhzKTqpZMbCqklIA2Iq%2FYd0vEEqebE0buzIZbFw7wlpwHdQQI9aJg5Z2xqug17sMIutbIwDEDvv%2FLRoccu4hAIJU67MHFdwK26lxLcDCyYpw%2FikT2G%2Borot5saPOYMXeNL44of%2FioJ83yst4n8qI1bAgaOipeny%2BqUMfva%2BfCCHniDZHtONmspMRX9J6p9d4nSDHjL1qP9nvPLL7PzioDtkZCYQYM2va0KOZKlRGnhJ%2B8%2F8ydMWFgS58taU0wLVZCuUTKVWWMkibmZ%2Bow5GlnHUFVa57uXOEhsuSzUoroKkb3S1IBdY0Mww51isslbeCm6RV%2BT0Ubq3H8lLUgAIRVsG7ZWMIGv1cQGOqUBkRombZEf0OnmpJK23FG%2F5OrNYrp3FxlZ3K00SD65tLlWwrwJikA7YW77d3lxfa84SXq1%2BZoBKvIsFIgInYcdPbJt87vLn8I0e3fMMzjT3RPBGwiJtqTTzq6NtmboTiBgbLnAhpGGh7SZRv9UZhPeZjZb%2FgI0xy99dzfROzAiQ7fNmWFUciIV2dBNLWSp4gII3G2tuIOOooTbIpoODFo6ih9wPq1J&X-Amz-Signature=1a3b728574a3c3be47e67d861e6a53670c7d737c9653cfd50dce9797eb45ce83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMYAWHQ6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICV5Fr08R2mb8htBXtaeOjLxjL6RkTryVv0LJdEqMPl1AiEA7sFZxKziGOePWwB0G1oqIKOjRHhlOfdsfHIjaQhQuZYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcS0dzeGPoMjLx%2FDCrcA%2BxoYUgoEi9v%2BV4GsfmA0g5wnmPlPjWyDmBNJuykXq%2FejMfJEiEZPPEgKphATl1TX767xpyHBbyoIe%2BfFUFLh4pCh11d6OZb17DDx2mDbfiWi3tywGa2EzJ3%2BZVpxbHo4PERWZQRqyLSckoic3nay8EMYBFYO8JIowQt4ZVcMPGr1bwDbJg13UKfEp4RdRL39I7RODIZ98oLyEFkJtpIKL8aYVw3LGvbT4ed11fQf6dG2zXu5K98WTlkqMhkeAXzjAPHfsS4m03UtOShe9lq2lId2zzG7cnL%2BMlhzKTqpZMbCqklIA2Iq%2FYd0vEEqebE0buzIZbFw7wlpwHdQQI9aJg5Z2xqug17sMIutbIwDEDvv%2FLRoccu4hAIJU67MHFdwK26lxLcDCyYpw%2FikT2G%2Borot5saPOYMXeNL44of%2FioJ83yst4n8qI1bAgaOipeny%2BqUMfva%2BfCCHniDZHtONmspMRX9J6p9d4nSDHjL1qP9nvPLL7PzioDtkZCYQYM2va0KOZKlRGnhJ%2B8%2F8ydMWFgS58taU0wLVZCuUTKVWWMkibmZ%2Bow5GlnHUFVa57uXOEhsuSzUoroKkb3S1IBdY0Mww51isslbeCm6RV%2BT0Ubq3H8lLUgAIRVsG7ZWMIGv1cQGOqUBkRombZEf0OnmpJK23FG%2F5OrNYrp3FxlZ3K00SD65tLlWwrwJikA7YW77d3lxfa84SXq1%2BZoBKvIsFIgInYcdPbJt87vLn8I0e3fMMzjT3RPBGwiJtqTTzq6NtmboTiBgbLnAhpGGh7SZRv9UZhPeZjZb%2FgI0xy99dzfROzAiQ7fNmWFUciIV2dBNLWSp4gII3G2tuIOOooTbIpoODFo6ih9wPq1J&X-Amz-Signature=4ca9a1a6d948cb2cf63477ee5b1988104cdf849df3ae9d29b1d4c54422dbc98e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMYAWHQ6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICV5Fr08R2mb8htBXtaeOjLxjL6RkTryVv0LJdEqMPl1AiEA7sFZxKziGOePWwB0G1oqIKOjRHhlOfdsfHIjaQhQuZYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcS0dzeGPoMjLx%2FDCrcA%2BxoYUgoEi9v%2BV4GsfmA0g5wnmPlPjWyDmBNJuykXq%2FejMfJEiEZPPEgKphATl1TX767xpyHBbyoIe%2BfFUFLh4pCh11d6OZb17DDx2mDbfiWi3tywGa2EzJ3%2BZVpxbHo4PERWZQRqyLSckoic3nay8EMYBFYO8JIowQt4ZVcMPGr1bwDbJg13UKfEp4RdRL39I7RODIZ98oLyEFkJtpIKL8aYVw3LGvbT4ed11fQf6dG2zXu5K98WTlkqMhkeAXzjAPHfsS4m03UtOShe9lq2lId2zzG7cnL%2BMlhzKTqpZMbCqklIA2Iq%2FYd0vEEqebE0buzIZbFw7wlpwHdQQI9aJg5Z2xqug17sMIutbIwDEDvv%2FLRoccu4hAIJU67MHFdwK26lxLcDCyYpw%2FikT2G%2Borot5saPOYMXeNL44of%2FioJ83yst4n8qI1bAgaOipeny%2BqUMfva%2BfCCHniDZHtONmspMRX9J6p9d4nSDHjL1qP9nvPLL7PzioDtkZCYQYM2va0KOZKlRGnhJ%2B8%2F8ydMWFgS58taU0wLVZCuUTKVWWMkibmZ%2Bow5GlnHUFVa57uXOEhsuSzUoroKkb3S1IBdY0Mww51isslbeCm6RV%2BT0Ubq3H8lLUgAIRVsG7ZWMIGv1cQGOqUBkRombZEf0OnmpJK23FG%2F5OrNYrp3FxlZ3K00SD65tLlWwrwJikA7YW77d3lxfa84SXq1%2BZoBKvIsFIgInYcdPbJt87vLn8I0e3fMMzjT3RPBGwiJtqTTzq6NtmboTiBgbLnAhpGGh7SZRv9UZhPeZjZb%2FgI0xy99dzfROzAiQ7fNmWFUciIV2dBNLWSp4gII3G2tuIOOooTbIpoODFo6ih9wPq1J&X-Amz-Signature=36a6b6ba7a4d74b8277ce3e4c2144cb87f974abea1f8a7d021e52cf8d6e07b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMYAWHQ6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICV5Fr08R2mb8htBXtaeOjLxjL6RkTryVv0LJdEqMPl1AiEA7sFZxKziGOePWwB0G1oqIKOjRHhlOfdsfHIjaQhQuZYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcS0dzeGPoMjLx%2FDCrcA%2BxoYUgoEi9v%2BV4GsfmA0g5wnmPlPjWyDmBNJuykXq%2FejMfJEiEZPPEgKphATl1TX767xpyHBbyoIe%2BfFUFLh4pCh11d6OZb17DDx2mDbfiWi3tywGa2EzJ3%2BZVpxbHo4PERWZQRqyLSckoic3nay8EMYBFYO8JIowQt4ZVcMPGr1bwDbJg13UKfEp4RdRL39I7RODIZ98oLyEFkJtpIKL8aYVw3LGvbT4ed11fQf6dG2zXu5K98WTlkqMhkeAXzjAPHfsS4m03UtOShe9lq2lId2zzG7cnL%2BMlhzKTqpZMbCqklIA2Iq%2FYd0vEEqebE0buzIZbFw7wlpwHdQQI9aJg5Z2xqug17sMIutbIwDEDvv%2FLRoccu4hAIJU67MHFdwK26lxLcDCyYpw%2FikT2G%2Borot5saPOYMXeNL44of%2FioJ83yst4n8qI1bAgaOipeny%2BqUMfva%2BfCCHniDZHtONmspMRX9J6p9d4nSDHjL1qP9nvPLL7PzioDtkZCYQYM2va0KOZKlRGnhJ%2B8%2F8ydMWFgS58taU0wLVZCuUTKVWWMkibmZ%2Bow5GlnHUFVa57uXOEhsuSzUoroKkb3S1IBdY0Mww51isslbeCm6RV%2BT0Ubq3H8lLUgAIRVsG7ZWMIGv1cQGOqUBkRombZEf0OnmpJK23FG%2F5OrNYrp3FxlZ3K00SD65tLlWwrwJikA7YW77d3lxfa84SXq1%2BZoBKvIsFIgInYcdPbJt87vLn8I0e3fMMzjT3RPBGwiJtqTTzq6NtmboTiBgbLnAhpGGh7SZRv9UZhPeZjZb%2FgI0xy99dzfROzAiQ7fNmWFUciIV2dBNLWSp4gII3G2tuIOOooTbIpoODFo6ih9wPq1J&X-Amz-Signature=a9bcc673f77e2c248f784afcb202d8353a6e38a487d0aa4e7c05a4806132e522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMYAWHQ6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICV5Fr08R2mb8htBXtaeOjLxjL6RkTryVv0LJdEqMPl1AiEA7sFZxKziGOePWwB0G1oqIKOjRHhlOfdsfHIjaQhQuZYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcS0dzeGPoMjLx%2FDCrcA%2BxoYUgoEi9v%2BV4GsfmA0g5wnmPlPjWyDmBNJuykXq%2FejMfJEiEZPPEgKphATl1TX767xpyHBbyoIe%2BfFUFLh4pCh11d6OZb17DDx2mDbfiWi3tywGa2EzJ3%2BZVpxbHo4PERWZQRqyLSckoic3nay8EMYBFYO8JIowQt4ZVcMPGr1bwDbJg13UKfEp4RdRL39I7RODIZ98oLyEFkJtpIKL8aYVw3LGvbT4ed11fQf6dG2zXu5K98WTlkqMhkeAXzjAPHfsS4m03UtOShe9lq2lId2zzG7cnL%2BMlhzKTqpZMbCqklIA2Iq%2FYd0vEEqebE0buzIZbFw7wlpwHdQQI9aJg5Z2xqug17sMIutbIwDEDvv%2FLRoccu4hAIJU67MHFdwK26lxLcDCyYpw%2FikT2G%2Borot5saPOYMXeNL44of%2FioJ83yst4n8qI1bAgaOipeny%2BqUMfva%2BfCCHniDZHtONmspMRX9J6p9d4nSDHjL1qP9nvPLL7PzioDtkZCYQYM2va0KOZKlRGnhJ%2B8%2F8ydMWFgS58taU0wLVZCuUTKVWWMkibmZ%2Bow5GlnHUFVa57uXOEhsuSzUoroKkb3S1IBdY0Mww51isslbeCm6RV%2BT0Ubq3H8lLUgAIRVsG7ZWMIGv1cQGOqUBkRombZEf0OnmpJK23FG%2F5OrNYrp3FxlZ3K00SD65tLlWwrwJikA7YW77d3lxfa84SXq1%2BZoBKvIsFIgInYcdPbJt87vLn8I0e3fMMzjT3RPBGwiJtqTTzq6NtmboTiBgbLnAhpGGh7SZRv9UZhPeZjZb%2FgI0xy99dzfROzAiQ7fNmWFUciIV2dBNLWSp4gII3G2tuIOOooTbIpoODFo6ih9wPq1J&X-Amz-Signature=999b04aa793adaca8ac59c46a16a10fc4620b9bd6e4ff8e5138cee11efdccb40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMYAWHQ6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICV5Fr08R2mb8htBXtaeOjLxjL6RkTryVv0LJdEqMPl1AiEA7sFZxKziGOePWwB0G1oqIKOjRHhlOfdsfHIjaQhQuZYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcS0dzeGPoMjLx%2FDCrcA%2BxoYUgoEi9v%2BV4GsfmA0g5wnmPlPjWyDmBNJuykXq%2FejMfJEiEZPPEgKphATl1TX767xpyHBbyoIe%2BfFUFLh4pCh11d6OZb17DDx2mDbfiWi3tywGa2EzJ3%2BZVpxbHo4PERWZQRqyLSckoic3nay8EMYBFYO8JIowQt4ZVcMPGr1bwDbJg13UKfEp4RdRL39I7RODIZ98oLyEFkJtpIKL8aYVw3LGvbT4ed11fQf6dG2zXu5K98WTlkqMhkeAXzjAPHfsS4m03UtOShe9lq2lId2zzG7cnL%2BMlhzKTqpZMbCqklIA2Iq%2FYd0vEEqebE0buzIZbFw7wlpwHdQQI9aJg5Z2xqug17sMIutbIwDEDvv%2FLRoccu4hAIJU67MHFdwK26lxLcDCyYpw%2FikT2G%2Borot5saPOYMXeNL44of%2FioJ83yst4n8qI1bAgaOipeny%2BqUMfva%2BfCCHniDZHtONmspMRX9J6p9d4nSDHjL1qP9nvPLL7PzioDtkZCYQYM2va0KOZKlRGnhJ%2B8%2F8ydMWFgS58taU0wLVZCuUTKVWWMkibmZ%2Bow5GlnHUFVa57uXOEhsuSzUoroKkb3S1IBdY0Mww51isslbeCm6RV%2BT0Ubq3H8lLUgAIRVsG7ZWMIGv1cQGOqUBkRombZEf0OnmpJK23FG%2F5OrNYrp3FxlZ3K00SD65tLlWwrwJikA7YW77d3lxfa84SXq1%2BZoBKvIsFIgInYcdPbJt87vLn8I0e3fMMzjT3RPBGwiJtqTTzq6NtmboTiBgbLnAhpGGh7SZRv9UZhPeZjZb%2FgI0xy99dzfROzAiQ7fNmWFUciIV2dBNLWSp4gII3G2tuIOOooTbIpoODFo6ih9wPq1J&X-Amz-Signature=5cd8cffc7c29d2ff46cc5f3486cae6a886718456f0300021f8c8d45033c074a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMYAWHQ6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICV5Fr08R2mb8htBXtaeOjLxjL6RkTryVv0LJdEqMPl1AiEA7sFZxKziGOePWwB0G1oqIKOjRHhlOfdsfHIjaQhQuZYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcS0dzeGPoMjLx%2FDCrcA%2BxoYUgoEi9v%2BV4GsfmA0g5wnmPlPjWyDmBNJuykXq%2FejMfJEiEZPPEgKphATl1TX767xpyHBbyoIe%2BfFUFLh4pCh11d6OZb17DDx2mDbfiWi3tywGa2EzJ3%2BZVpxbHo4PERWZQRqyLSckoic3nay8EMYBFYO8JIowQt4ZVcMPGr1bwDbJg13UKfEp4RdRL39I7RODIZ98oLyEFkJtpIKL8aYVw3LGvbT4ed11fQf6dG2zXu5K98WTlkqMhkeAXzjAPHfsS4m03UtOShe9lq2lId2zzG7cnL%2BMlhzKTqpZMbCqklIA2Iq%2FYd0vEEqebE0buzIZbFw7wlpwHdQQI9aJg5Z2xqug17sMIutbIwDEDvv%2FLRoccu4hAIJU67MHFdwK26lxLcDCyYpw%2FikT2G%2Borot5saPOYMXeNL44of%2FioJ83yst4n8qI1bAgaOipeny%2BqUMfva%2BfCCHniDZHtONmspMRX9J6p9d4nSDHjL1qP9nvPLL7PzioDtkZCYQYM2va0KOZKlRGnhJ%2B8%2F8ydMWFgS58taU0wLVZCuUTKVWWMkibmZ%2Bow5GlnHUFVa57uXOEhsuSzUoroKkb3S1IBdY0Mww51isslbeCm6RV%2BT0Ubq3H8lLUgAIRVsG7ZWMIGv1cQGOqUBkRombZEf0OnmpJK23FG%2F5OrNYrp3FxlZ3K00SD65tLlWwrwJikA7YW77d3lxfa84SXq1%2BZoBKvIsFIgInYcdPbJt87vLn8I0e3fMMzjT3RPBGwiJtqTTzq6NtmboTiBgbLnAhpGGh7SZRv9UZhPeZjZb%2FgI0xy99dzfROzAiQ7fNmWFUciIV2dBNLWSp4gII3G2tuIOOooTbIpoODFo6ih9wPq1J&X-Amz-Signature=19e31cb91527cc2f7cf9f7b9d5eef7bb0d62f203b5fa652c304c9869a7b9b113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMYAWHQ6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICV5Fr08R2mb8htBXtaeOjLxjL6RkTryVv0LJdEqMPl1AiEA7sFZxKziGOePWwB0G1oqIKOjRHhlOfdsfHIjaQhQuZYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcS0dzeGPoMjLx%2FDCrcA%2BxoYUgoEi9v%2BV4GsfmA0g5wnmPlPjWyDmBNJuykXq%2FejMfJEiEZPPEgKphATl1TX767xpyHBbyoIe%2BfFUFLh4pCh11d6OZb17DDx2mDbfiWi3tywGa2EzJ3%2BZVpxbHo4PERWZQRqyLSckoic3nay8EMYBFYO8JIowQt4ZVcMPGr1bwDbJg13UKfEp4RdRL39I7RODIZ98oLyEFkJtpIKL8aYVw3LGvbT4ed11fQf6dG2zXu5K98WTlkqMhkeAXzjAPHfsS4m03UtOShe9lq2lId2zzG7cnL%2BMlhzKTqpZMbCqklIA2Iq%2FYd0vEEqebE0buzIZbFw7wlpwHdQQI9aJg5Z2xqug17sMIutbIwDEDvv%2FLRoccu4hAIJU67MHFdwK26lxLcDCyYpw%2FikT2G%2Borot5saPOYMXeNL44of%2FioJ83yst4n8qI1bAgaOipeny%2BqUMfva%2BfCCHniDZHtONmspMRX9J6p9d4nSDHjL1qP9nvPLL7PzioDtkZCYQYM2va0KOZKlRGnhJ%2B8%2F8ydMWFgS58taU0wLVZCuUTKVWWMkibmZ%2Bow5GlnHUFVa57uXOEhsuSzUoroKkb3S1IBdY0Mww51isslbeCm6RV%2BT0Ubq3H8lLUgAIRVsG7ZWMIGv1cQGOqUBkRombZEf0OnmpJK23FG%2F5OrNYrp3FxlZ3K00SD65tLlWwrwJikA7YW77d3lxfa84SXq1%2BZoBKvIsFIgInYcdPbJt87vLn8I0e3fMMzjT3RPBGwiJtqTTzq6NtmboTiBgbLnAhpGGh7SZRv9UZhPeZjZb%2FgI0xy99dzfROzAiQ7fNmWFUciIV2dBNLWSp4gII3G2tuIOOooTbIpoODFo6ih9wPq1J&X-Amz-Signature=66fe25fb65306963a1ad496f8e0a9c926b97eb7b5a85566f28078514c33c68b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
