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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ABX6UR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIA6Lx%2FW9gZZy2KqHtzqnPWkZz7EmgimIi4zdDk%2BSdJd3AiAIwCiz9GrXn0YgX3hBSC8Ca%2BzrngG5X29fu3a1MyCWXSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMEgWOxx37a8Mb6PSyKtwD6717i9fXzzC1ymPLFjp2Vsi5PH284OQWzT2oaPeRjp4fVAsVdMmM%2FP%2FwqZIyiQ6e1WRIWgVIpeKEEzyX3cJA56%2BnWpSqlMXF8rNwAbwkEq%2BFFkygcaLIjgVNF3FlRjKOjCiuBcKiYFH7rk0tHDpKhE6X2FYj32g78ZFKCenRZQGBt%2BGkS7hvMIX%2FVSV7wvrE7HXD3nFUACcP%2BAEkPbrcAsY97vVptkVRNV9WCUJfkzsJRxSAy5JP5v8lrntB5YYQOrlzCK%2FZ8KPetqMClyfUsoUZCYfCYcvDf1vxc9Otd9tHv3k6G2xG6uiyNLxW76zpAKTcT%2F0Mh3tB%2FdV6Wwg5vJQJyRMs4yz2P%2FlSijvuHhWeoI%2Fv7rpUj3Q5IPQg9bI6t4Mt1RwhpSnFYk5LUlQF4tUkkLH0PSPfc9e%2BAi25iaMONaXNRucdfMAL8lmW0CljXmMUN9VBxBlSIvIFAwGpzn5Q4ZrcjO8zSy%2FLEvI5OvfcPzWRa%2F8ZrmDbAWrQggmf7UbVGjCaXsWtOM5pHpfUSYCvLGWfd9QJhl%2BH96w0%2FkXKFQRc9n0O6Asbe6miOJnPGZH4RbXiaHkiqpeePCBgCpUmciefuFm0uIveo7Wv4X4qI2YkSX6x%2BvtPMNkw5I3BxAY6pgFmfI1vjj1L2ZC0unSY8Ydk2Nq8G5snW34wOZ2GRB%2BXBDJA%2BKsec84DPlXNFlhbwo%2BpHiAYNVGCGybZ39b0lDXmCSgfR3eDsrKfTc%2BXhQ7vw4B0T9sad44iOxETdUElksgVqDDY5Dwa6xDxb2RhmZZNY%2FRS5PwfOdgjPQinHuHGk%2FrKKXM47dyzeP2cJ8fEI346PEj%2FEgwQkwrMFwbbeL8EsmhBs55l&X-Amz-Signature=b8e549dc589c4b5c50ca248dd2008277682afacc93d25809b06a4983dca00884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ABX6UR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIA6Lx%2FW9gZZy2KqHtzqnPWkZz7EmgimIi4zdDk%2BSdJd3AiAIwCiz9GrXn0YgX3hBSC8Ca%2BzrngG5X29fu3a1MyCWXSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMEgWOxx37a8Mb6PSyKtwD6717i9fXzzC1ymPLFjp2Vsi5PH284OQWzT2oaPeRjp4fVAsVdMmM%2FP%2FwqZIyiQ6e1WRIWgVIpeKEEzyX3cJA56%2BnWpSqlMXF8rNwAbwkEq%2BFFkygcaLIjgVNF3FlRjKOjCiuBcKiYFH7rk0tHDpKhE6X2FYj32g78ZFKCenRZQGBt%2BGkS7hvMIX%2FVSV7wvrE7HXD3nFUACcP%2BAEkPbrcAsY97vVptkVRNV9WCUJfkzsJRxSAy5JP5v8lrntB5YYQOrlzCK%2FZ8KPetqMClyfUsoUZCYfCYcvDf1vxc9Otd9tHv3k6G2xG6uiyNLxW76zpAKTcT%2F0Mh3tB%2FdV6Wwg5vJQJyRMs4yz2P%2FlSijvuHhWeoI%2Fv7rpUj3Q5IPQg9bI6t4Mt1RwhpSnFYk5LUlQF4tUkkLH0PSPfc9e%2BAi25iaMONaXNRucdfMAL8lmW0CljXmMUN9VBxBlSIvIFAwGpzn5Q4ZrcjO8zSy%2FLEvI5OvfcPzWRa%2F8ZrmDbAWrQggmf7UbVGjCaXsWtOM5pHpfUSYCvLGWfd9QJhl%2BH96w0%2FkXKFQRc9n0O6Asbe6miOJnPGZH4RbXiaHkiqpeePCBgCpUmciefuFm0uIveo7Wv4X4qI2YkSX6x%2BvtPMNkw5I3BxAY6pgFmfI1vjj1L2ZC0unSY8Ydk2Nq8G5snW34wOZ2GRB%2BXBDJA%2BKsec84DPlXNFlhbwo%2BpHiAYNVGCGybZ39b0lDXmCSgfR3eDsrKfTc%2BXhQ7vw4B0T9sad44iOxETdUElksgVqDDY5Dwa6xDxb2RhmZZNY%2FRS5PwfOdgjPQinHuHGk%2FrKKXM47dyzeP2cJ8fEI346PEj%2FEgwQkwrMFwbbeL8EsmhBs55l&X-Amz-Signature=857e84081bde1a9ef46bd84c4f79736312f49b22b315be9e796b9dd6c6ef7ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ABX6UR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIA6Lx%2FW9gZZy2KqHtzqnPWkZz7EmgimIi4zdDk%2BSdJd3AiAIwCiz9GrXn0YgX3hBSC8Ca%2BzrngG5X29fu3a1MyCWXSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMEgWOxx37a8Mb6PSyKtwD6717i9fXzzC1ymPLFjp2Vsi5PH284OQWzT2oaPeRjp4fVAsVdMmM%2FP%2FwqZIyiQ6e1WRIWgVIpeKEEzyX3cJA56%2BnWpSqlMXF8rNwAbwkEq%2BFFkygcaLIjgVNF3FlRjKOjCiuBcKiYFH7rk0tHDpKhE6X2FYj32g78ZFKCenRZQGBt%2BGkS7hvMIX%2FVSV7wvrE7HXD3nFUACcP%2BAEkPbrcAsY97vVptkVRNV9WCUJfkzsJRxSAy5JP5v8lrntB5YYQOrlzCK%2FZ8KPetqMClyfUsoUZCYfCYcvDf1vxc9Otd9tHv3k6G2xG6uiyNLxW76zpAKTcT%2F0Mh3tB%2FdV6Wwg5vJQJyRMs4yz2P%2FlSijvuHhWeoI%2Fv7rpUj3Q5IPQg9bI6t4Mt1RwhpSnFYk5LUlQF4tUkkLH0PSPfc9e%2BAi25iaMONaXNRucdfMAL8lmW0CljXmMUN9VBxBlSIvIFAwGpzn5Q4ZrcjO8zSy%2FLEvI5OvfcPzWRa%2F8ZrmDbAWrQggmf7UbVGjCaXsWtOM5pHpfUSYCvLGWfd9QJhl%2BH96w0%2FkXKFQRc9n0O6Asbe6miOJnPGZH4RbXiaHkiqpeePCBgCpUmciefuFm0uIveo7Wv4X4qI2YkSX6x%2BvtPMNkw5I3BxAY6pgFmfI1vjj1L2ZC0unSY8Ydk2Nq8G5snW34wOZ2GRB%2BXBDJA%2BKsec84DPlXNFlhbwo%2BpHiAYNVGCGybZ39b0lDXmCSgfR3eDsrKfTc%2BXhQ7vw4B0T9sad44iOxETdUElksgVqDDY5Dwa6xDxb2RhmZZNY%2FRS5PwfOdgjPQinHuHGk%2FrKKXM47dyzeP2cJ8fEI346PEj%2FEgwQkwrMFwbbeL8EsmhBs55l&X-Amz-Signature=07690340ec3c067ac59737fff2c96d5948e3dd012acbbf2379abab055218730b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ABX6UR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIA6Lx%2FW9gZZy2KqHtzqnPWkZz7EmgimIi4zdDk%2BSdJd3AiAIwCiz9GrXn0YgX3hBSC8Ca%2BzrngG5X29fu3a1MyCWXSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMEgWOxx37a8Mb6PSyKtwD6717i9fXzzC1ymPLFjp2Vsi5PH284OQWzT2oaPeRjp4fVAsVdMmM%2FP%2FwqZIyiQ6e1WRIWgVIpeKEEzyX3cJA56%2BnWpSqlMXF8rNwAbwkEq%2BFFkygcaLIjgVNF3FlRjKOjCiuBcKiYFH7rk0tHDpKhE6X2FYj32g78ZFKCenRZQGBt%2BGkS7hvMIX%2FVSV7wvrE7HXD3nFUACcP%2BAEkPbrcAsY97vVptkVRNV9WCUJfkzsJRxSAy5JP5v8lrntB5YYQOrlzCK%2FZ8KPetqMClyfUsoUZCYfCYcvDf1vxc9Otd9tHv3k6G2xG6uiyNLxW76zpAKTcT%2F0Mh3tB%2FdV6Wwg5vJQJyRMs4yz2P%2FlSijvuHhWeoI%2Fv7rpUj3Q5IPQg9bI6t4Mt1RwhpSnFYk5LUlQF4tUkkLH0PSPfc9e%2BAi25iaMONaXNRucdfMAL8lmW0CljXmMUN9VBxBlSIvIFAwGpzn5Q4ZrcjO8zSy%2FLEvI5OvfcPzWRa%2F8ZrmDbAWrQggmf7UbVGjCaXsWtOM5pHpfUSYCvLGWfd9QJhl%2BH96w0%2FkXKFQRc9n0O6Asbe6miOJnPGZH4RbXiaHkiqpeePCBgCpUmciefuFm0uIveo7Wv4X4qI2YkSX6x%2BvtPMNkw5I3BxAY6pgFmfI1vjj1L2ZC0unSY8Ydk2Nq8G5snW34wOZ2GRB%2BXBDJA%2BKsec84DPlXNFlhbwo%2BpHiAYNVGCGybZ39b0lDXmCSgfR3eDsrKfTc%2BXhQ7vw4B0T9sad44iOxETdUElksgVqDDY5Dwa6xDxb2RhmZZNY%2FRS5PwfOdgjPQinHuHGk%2FrKKXM47dyzeP2cJ8fEI346PEj%2FEgwQkwrMFwbbeL8EsmhBs55l&X-Amz-Signature=1ea5accdc83bb438d1b3644d19c382d06d88ab977a5db1721d2ecd4a45f530d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ABX6UR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIA6Lx%2FW9gZZy2KqHtzqnPWkZz7EmgimIi4zdDk%2BSdJd3AiAIwCiz9GrXn0YgX3hBSC8Ca%2BzrngG5X29fu3a1MyCWXSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMEgWOxx37a8Mb6PSyKtwD6717i9fXzzC1ymPLFjp2Vsi5PH284OQWzT2oaPeRjp4fVAsVdMmM%2FP%2FwqZIyiQ6e1WRIWgVIpeKEEzyX3cJA56%2BnWpSqlMXF8rNwAbwkEq%2BFFkygcaLIjgVNF3FlRjKOjCiuBcKiYFH7rk0tHDpKhE6X2FYj32g78ZFKCenRZQGBt%2BGkS7hvMIX%2FVSV7wvrE7HXD3nFUACcP%2BAEkPbrcAsY97vVptkVRNV9WCUJfkzsJRxSAy5JP5v8lrntB5YYQOrlzCK%2FZ8KPetqMClyfUsoUZCYfCYcvDf1vxc9Otd9tHv3k6G2xG6uiyNLxW76zpAKTcT%2F0Mh3tB%2FdV6Wwg5vJQJyRMs4yz2P%2FlSijvuHhWeoI%2Fv7rpUj3Q5IPQg9bI6t4Mt1RwhpSnFYk5LUlQF4tUkkLH0PSPfc9e%2BAi25iaMONaXNRucdfMAL8lmW0CljXmMUN9VBxBlSIvIFAwGpzn5Q4ZrcjO8zSy%2FLEvI5OvfcPzWRa%2F8ZrmDbAWrQggmf7UbVGjCaXsWtOM5pHpfUSYCvLGWfd9QJhl%2BH96w0%2FkXKFQRc9n0O6Asbe6miOJnPGZH4RbXiaHkiqpeePCBgCpUmciefuFm0uIveo7Wv4X4qI2YkSX6x%2BvtPMNkw5I3BxAY6pgFmfI1vjj1L2ZC0unSY8Ydk2Nq8G5snW34wOZ2GRB%2BXBDJA%2BKsec84DPlXNFlhbwo%2BpHiAYNVGCGybZ39b0lDXmCSgfR3eDsrKfTc%2BXhQ7vw4B0T9sad44iOxETdUElksgVqDDY5Dwa6xDxb2RhmZZNY%2FRS5PwfOdgjPQinHuHGk%2FrKKXM47dyzeP2cJ8fEI346PEj%2FEgwQkwrMFwbbeL8EsmhBs55l&X-Amz-Signature=836a62118c8a3d147f19bba531f761fc299694c93ba1516a61b4c3053645895f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ABX6UR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIA6Lx%2FW9gZZy2KqHtzqnPWkZz7EmgimIi4zdDk%2BSdJd3AiAIwCiz9GrXn0YgX3hBSC8Ca%2BzrngG5X29fu3a1MyCWXSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMEgWOxx37a8Mb6PSyKtwD6717i9fXzzC1ymPLFjp2Vsi5PH284OQWzT2oaPeRjp4fVAsVdMmM%2FP%2FwqZIyiQ6e1WRIWgVIpeKEEzyX3cJA56%2BnWpSqlMXF8rNwAbwkEq%2BFFkygcaLIjgVNF3FlRjKOjCiuBcKiYFH7rk0tHDpKhE6X2FYj32g78ZFKCenRZQGBt%2BGkS7hvMIX%2FVSV7wvrE7HXD3nFUACcP%2BAEkPbrcAsY97vVptkVRNV9WCUJfkzsJRxSAy5JP5v8lrntB5YYQOrlzCK%2FZ8KPetqMClyfUsoUZCYfCYcvDf1vxc9Otd9tHv3k6G2xG6uiyNLxW76zpAKTcT%2F0Mh3tB%2FdV6Wwg5vJQJyRMs4yz2P%2FlSijvuHhWeoI%2Fv7rpUj3Q5IPQg9bI6t4Mt1RwhpSnFYk5LUlQF4tUkkLH0PSPfc9e%2BAi25iaMONaXNRucdfMAL8lmW0CljXmMUN9VBxBlSIvIFAwGpzn5Q4ZrcjO8zSy%2FLEvI5OvfcPzWRa%2F8ZrmDbAWrQggmf7UbVGjCaXsWtOM5pHpfUSYCvLGWfd9QJhl%2BH96w0%2FkXKFQRc9n0O6Asbe6miOJnPGZH4RbXiaHkiqpeePCBgCpUmciefuFm0uIveo7Wv4X4qI2YkSX6x%2BvtPMNkw5I3BxAY6pgFmfI1vjj1L2ZC0unSY8Ydk2Nq8G5snW34wOZ2GRB%2BXBDJA%2BKsec84DPlXNFlhbwo%2BpHiAYNVGCGybZ39b0lDXmCSgfR3eDsrKfTc%2BXhQ7vw4B0T9sad44iOxETdUElksgVqDDY5Dwa6xDxb2RhmZZNY%2FRS5PwfOdgjPQinHuHGk%2FrKKXM47dyzeP2cJ8fEI346PEj%2FEgwQkwrMFwbbeL8EsmhBs55l&X-Amz-Signature=320a613ff1575cff338f2adf77749df02b45950e866b5691fb9f65540edc45bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ABX6UR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIA6Lx%2FW9gZZy2KqHtzqnPWkZz7EmgimIi4zdDk%2BSdJd3AiAIwCiz9GrXn0YgX3hBSC8Ca%2BzrngG5X29fu3a1MyCWXSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMEgWOxx37a8Mb6PSyKtwD6717i9fXzzC1ymPLFjp2Vsi5PH284OQWzT2oaPeRjp4fVAsVdMmM%2FP%2FwqZIyiQ6e1WRIWgVIpeKEEzyX3cJA56%2BnWpSqlMXF8rNwAbwkEq%2BFFkygcaLIjgVNF3FlRjKOjCiuBcKiYFH7rk0tHDpKhE6X2FYj32g78ZFKCenRZQGBt%2BGkS7hvMIX%2FVSV7wvrE7HXD3nFUACcP%2BAEkPbrcAsY97vVptkVRNV9WCUJfkzsJRxSAy5JP5v8lrntB5YYQOrlzCK%2FZ8KPetqMClyfUsoUZCYfCYcvDf1vxc9Otd9tHv3k6G2xG6uiyNLxW76zpAKTcT%2F0Mh3tB%2FdV6Wwg5vJQJyRMs4yz2P%2FlSijvuHhWeoI%2Fv7rpUj3Q5IPQg9bI6t4Mt1RwhpSnFYk5LUlQF4tUkkLH0PSPfc9e%2BAi25iaMONaXNRucdfMAL8lmW0CljXmMUN9VBxBlSIvIFAwGpzn5Q4ZrcjO8zSy%2FLEvI5OvfcPzWRa%2F8ZrmDbAWrQggmf7UbVGjCaXsWtOM5pHpfUSYCvLGWfd9QJhl%2BH96w0%2FkXKFQRc9n0O6Asbe6miOJnPGZH4RbXiaHkiqpeePCBgCpUmciefuFm0uIveo7Wv4X4qI2YkSX6x%2BvtPMNkw5I3BxAY6pgFmfI1vjj1L2ZC0unSY8Ydk2Nq8G5snW34wOZ2GRB%2BXBDJA%2BKsec84DPlXNFlhbwo%2BpHiAYNVGCGybZ39b0lDXmCSgfR3eDsrKfTc%2BXhQ7vw4B0T9sad44iOxETdUElksgVqDDY5Dwa6xDxb2RhmZZNY%2FRS5PwfOdgjPQinHuHGk%2FrKKXM47dyzeP2cJ8fEI346PEj%2FEgwQkwrMFwbbeL8EsmhBs55l&X-Amz-Signature=cd9f4e682ad6071aee2ebb1c0f5ad31ad814c0daa9a9be6d94ff39d9e8c7f4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ABX6UR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIA6Lx%2FW9gZZy2KqHtzqnPWkZz7EmgimIi4zdDk%2BSdJd3AiAIwCiz9GrXn0YgX3hBSC8Ca%2BzrngG5X29fu3a1MyCWXSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMEgWOxx37a8Mb6PSyKtwD6717i9fXzzC1ymPLFjp2Vsi5PH284OQWzT2oaPeRjp4fVAsVdMmM%2FP%2FwqZIyiQ6e1WRIWgVIpeKEEzyX3cJA56%2BnWpSqlMXF8rNwAbwkEq%2BFFkygcaLIjgVNF3FlRjKOjCiuBcKiYFH7rk0tHDpKhE6X2FYj32g78ZFKCenRZQGBt%2BGkS7hvMIX%2FVSV7wvrE7HXD3nFUACcP%2BAEkPbrcAsY97vVptkVRNV9WCUJfkzsJRxSAy5JP5v8lrntB5YYQOrlzCK%2FZ8KPetqMClyfUsoUZCYfCYcvDf1vxc9Otd9tHv3k6G2xG6uiyNLxW76zpAKTcT%2F0Mh3tB%2FdV6Wwg5vJQJyRMs4yz2P%2FlSijvuHhWeoI%2Fv7rpUj3Q5IPQg9bI6t4Mt1RwhpSnFYk5LUlQF4tUkkLH0PSPfc9e%2BAi25iaMONaXNRucdfMAL8lmW0CljXmMUN9VBxBlSIvIFAwGpzn5Q4ZrcjO8zSy%2FLEvI5OvfcPzWRa%2F8ZrmDbAWrQggmf7UbVGjCaXsWtOM5pHpfUSYCvLGWfd9QJhl%2BH96w0%2FkXKFQRc9n0O6Asbe6miOJnPGZH4RbXiaHkiqpeePCBgCpUmciefuFm0uIveo7Wv4X4qI2YkSX6x%2BvtPMNkw5I3BxAY6pgFmfI1vjj1L2ZC0unSY8Ydk2Nq8G5snW34wOZ2GRB%2BXBDJA%2BKsec84DPlXNFlhbwo%2BpHiAYNVGCGybZ39b0lDXmCSgfR3eDsrKfTc%2BXhQ7vw4B0T9sad44iOxETdUElksgVqDDY5Dwa6xDxb2RhmZZNY%2FRS5PwfOdgjPQinHuHGk%2FrKKXM47dyzeP2cJ8fEI346PEj%2FEgwQkwrMFwbbeL8EsmhBs55l&X-Amz-Signature=e0e7a20b2f25ad7ddf3e18c4a741ce2bed812c7e4aafa24adba24aeaabd0df92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ABX6UR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIA6Lx%2FW9gZZy2KqHtzqnPWkZz7EmgimIi4zdDk%2BSdJd3AiAIwCiz9GrXn0YgX3hBSC8Ca%2BzrngG5X29fu3a1MyCWXSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMEgWOxx37a8Mb6PSyKtwD6717i9fXzzC1ymPLFjp2Vsi5PH284OQWzT2oaPeRjp4fVAsVdMmM%2FP%2FwqZIyiQ6e1WRIWgVIpeKEEzyX3cJA56%2BnWpSqlMXF8rNwAbwkEq%2BFFkygcaLIjgVNF3FlRjKOjCiuBcKiYFH7rk0tHDpKhE6X2FYj32g78ZFKCenRZQGBt%2BGkS7hvMIX%2FVSV7wvrE7HXD3nFUACcP%2BAEkPbrcAsY97vVptkVRNV9WCUJfkzsJRxSAy5JP5v8lrntB5YYQOrlzCK%2FZ8KPetqMClyfUsoUZCYfCYcvDf1vxc9Otd9tHv3k6G2xG6uiyNLxW76zpAKTcT%2F0Mh3tB%2FdV6Wwg5vJQJyRMs4yz2P%2FlSijvuHhWeoI%2Fv7rpUj3Q5IPQg9bI6t4Mt1RwhpSnFYk5LUlQF4tUkkLH0PSPfc9e%2BAi25iaMONaXNRucdfMAL8lmW0CljXmMUN9VBxBlSIvIFAwGpzn5Q4ZrcjO8zSy%2FLEvI5OvfcPzWRa%2F8ZrmDbAWrQggmf7UbVGjCaXsWtOM5pHpfUSYCvLGWfd9QJhl%2BH96w0%2FkXKFQRc9n0O6Asbe6miOJnPGZH4RbXiaHkiqpeePCBgCpUmciefuFm0uIveo7Wv4X4qI2YkSX6x%2BvtPMNkw5I3BxAY6pgFmfI1vjj1L2ZC0unSY8Ydk2Nq8G5snW34wOZ2GRB%2BXBDJA%2BKsec84DPlXNFlhbwo%2BpHiAYNVGCGybZ39b0lDXmCSgfR3eDsrKfTc%2BXhQ7vw4B0T9sad44iOxETdUElksgVqDDY5Dwa6xDxb2RhmZZNY%2FRS5PwfOdgjPQinHuHGk%2FrKKXM47dyzeP2cJ8fEI346PEj%2FEgwQkwrMFwbbeL8EsmhBs55l&X-Amz-Signature=862d508da24a2a534f4e0a8f99cd1beb721bbf58c3c64ac02a6a7073c151ac4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ABX6UR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIA6Lx%2FW9gZZy2KqHtzqnPWkZz7EmgimIi4zdDk%2BSdJd3AiAIwCiz9GrXn0YgX3hBSC8Ca%2BzrngG5X29fu3a1MyCWXSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMEgWOxx37a8Mb6PSyKtwD6717i9fXzzC1ymPLFjp2Vsi5PH284OQWzT2oaPeRjp4fVAsVdMmM%2FP%2FwqZIyiQ6e1WRIWgVIpeKEEzyX3cJA56%2BnWpSqlMXF8rNwAbwkEq%2BFFkygcaLIjgVNF3FlRjKOjCiuBcKiYFH7rk0tHDpKhE6X2FYj32g78ZFKCenRZQGBt%2BGkS7hvMIX%2FVSV7wvrE7HXD3nFUACcP%2BAEkPbrcAsY97vVptkVRNV9WCUJfkzsJRxSAy5JP5v8lrntB5YYQOrlzCK%2FZ8KPetqMClyfUsoUZCYfCYcvDf1vxc9Otd9tHv3k6G2xG6uiyNLxW76zpAKTcT%2F0Mh3tB%2FdV6Wwg5vJQJyRMs4yz2P%2FlSijvuHhWeoI%2Fv7rpUj3Q5IPQg9bI6t4Mt1RwhpSnFYk5LUlQF4tUkkLH0PSPfc9e%2BAi25iaMONaXNRucdfMAL8lmW0CljXmMUN9VBxBlSIvIFAwGpzn5Q4ZrcjO8zSy%2FLEvI5OvfcPzWRa%2F8ZrmDbAWrQggmf7UbVGjCaXsWtOM5pHpfUSYCvLGWfd9QJhl%2BH96w0%2FkXKFQRc9n0O6Asbe6miOJnPGZH4RbXiaHkiqpeePCBgCpUmciefuFm0uIveo7Wv4X4qI2YkSX6x%2BvtPMNkw5I3BxAY6pgFmfI1vjj1L2ZC0unSY8Ydk2Nq8G5snW34wOZ2GRB%2BXBDJA%2BKsec84DPlXNFlhbwo%2BpHiAYNVGCGybZ39b0lDXmCSgfR3eDsrKfTc%2BXhQ7vw4B0T9sad44iOxETdUElksgVqDDY5Dwa6xDxb2RhmZZNY%2FRS5PwfOdgjPQinHuHGk%2FrKKXM47dyzeP2cJ8fEI346PEj%2FEgwQkwrMFwbbeL8EsmhBs55l&X-Amz-Signature=665a7387bbf2d245870d18a3eed38caf1e778b74c0e4ce63347d1d937b10d1f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPFXJS6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDIQuwv50usULC9ndK27zER9uyxPsdanOXrCSwiq%2BGbdQIgBEy6b3Cdb1g1T41koa1W4sLTfs9rSkSiEYWJYvNSnBAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCupWYp9h41Wn9%2B2YyrcA9Fa8aAf5V3ERNPz9%2BZyGoSfjlbBlL9aqf1IhTOotYaKJ1BpKetaplRtMU2wL%2BohHFOjodCWRAR%2FW6gx4GwjcfkHbMRvvDjOX4GQrtpQn5jpWXWslXIECBaBKKAXCnvPAkvEumDrAykFUMLey0kmBME1O50nhBl5kDN7CMpeYrye3AzKX0ZXmSXM3%2BU0bisC7v1gIohm%2BIKA9n7WCIntk%2FZbEc7gKevblqR7%2B%2BVwhaOF0%2B9j0quVaCbQhNys7Xa4PL3FUOHNsGlfnG%2BBF%2F5GTMz2RVDP3NlRx%2FWXZebkBQHoocKXkKULs9U2sURnLgi%2B159qCrI6kedp%2BJGWTtNlfZSgSMvZr37MFHULcgw1BUg723UgcgO4BcPiMET0oLEKCo6YJ3kOyxRo7FSAtxK6UZL6uU%2FKhDjsZhWzeYMiREcMYkOoBdov2l0fZW3Ml8r6dO01yipM9qQI5D11HSlARIwqIt4gKC%2FF0FZ1TCudTxzRUCH1wwL0WsY7p3K6wMoOLoRqpf6Kg%2FEhDuBqzAV2QIZYzKpMJX%2F%2BW9g40IROTzMgsmoU09u4isChJePSmpBroZXMywnWYHyxDOZJm25y2I%2F%2F3h9EfBj0MX4BtgzoqJ6Off0llMku352UtQStMLONwcQGOqUBBAcjILEMSGqgrJpth7jz2s1BQA3MbokBsK5NmDCmFmjYTnemISsB0sKQCHP%2FyhuI5Om65N%2FWjaAaTYMzZCQKoCR3R2f2cu72imcyTDf5So7CCee9NaRequ5DUYxbK2j%2BRtiQB6oAbMHI7rWQNWugojK50aIwhlCl7%2FWrnCpvkSKP5AGSgNWXYQCbIK7uoaqye79VoNjXMXyojk8r8JaKuHtoeqc2&X-Amz-Signature=9593ab1229718a404bca7cdd421e7e746a6e874b8549a86b85b59605bd078012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQH6TEW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDljIYO%2BSjOuuEFvnPgjm8oygdPOcSEFsDK6hhymx1ITQIgN8H7GGZR9vup75WfT%2BtxSHAvh63bO8xolT632A6pnacq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMuJafW0dZjhcw5tcircA9QioPphwSZImaY6VEHLk846iTtlIS2qsM1M1Uvxu6NEDi3vsYPkv6tDRtk6a4q7UPlo00lINIq7KHjyPHKqKONvgptqsG1ohK2DjRl%2B0bOIm4HexrPpdk0cBdHGKskhFUAJmvbbGCkSpinqpn3xBdEYAR9wmIvF8b%2BtZ%2B2ikTK%2BkhXo3Sx4mpxrarfedGLfGZCfVC0abKhjNypk7PrWTzecBUQkMFMRMhfYERlkLZGB9H4HQDQq9aQzn%2BkYVag%2FEEajLCtchd66zYDAlZfE2ASXB3FvKaZErjx4oNIM6DDZCcZ9qRAqGIuvM7t7n77%2FSfTWxBxb0w2oanRjrGPBOEQ7JxQnVM6dh9hkoGTqPYBgH6TyOFQ%2F9PQocjnyCsbXqShIEQCFh25NMNNYwJRfAh435qpH%2B%2BgB8ZSIkn3wma6G5PXyNmATXYNPgBgi18GSpVqkLZWbPDEEJaWamEimPIV54uXoFuaK4feBPK9%2FHYnuy77LXzR39DkZ7xkCo8zUkjuFk0Rw869JCTc0kk5JTcy%2BdKRIlfk7uLpsRHlm41tQkIRAdT%2FcupSugTnKtDqz1f7NTF3YX33fzitAoYXTJSAahyb%2Fc29m%2BD4Bm8yuPCqi6MU5Xmg0gnYMT6rLMIONwcQGOqUBmg5GgJu5jNe%2FyR4zbNuMTRrXWrfVh58aRM5DFFnewyX4ofiuHvGJH7%2BnT1pHuiW2%2BTqE3%2BZphjltexaHeVZ0Fde7nOMCKvSPBjjpJzBsaGJGKPy5RMd352DnhOtDJOdrR1NyB5SF%2FklDMwJGpusMS9hyZ5vWGKqDsRs4WbuveuasSQE2SnQAYqQFrZeJGsaVn4XPhuoZ54ToAOEQaQe7BFJaOOdX&X-Amz-Signature=1a7dcbfce52f3697590a356bd7782d603f7b64f5a4db22c46c9579846792e2d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQH6TEW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDljIYO%2BSjOuuEFvnPgjm8oygdPOcSEFsDK6hhymx1ITQIgN8H7GGZR9vup75WfT%2BtxSHAvh63bO8xolT632A6pnacq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMuJafW0dZjhcw5tcircA9QioPphwSZImaY6VEHLk846iTtlIS2qsM1M1Uvxu6NEDi3vsYPkv6tDRtk6a4q7UPlo00lINIq7KHjyPHKqKONvgptqsG1ohK2DjRl%2B0bOIm4HexrPpdk0cBdHGKskhFUAJmvbbGCkSpinqpn3xBdEYAR9wmIvF8b%2BtZ%2B2ikTK%2BkhXo3Sx4mpxrarfedGLfGZCfVC0abKhjNypk7PrWTzecBUQkMFMRMhfYERlkLZGB9H4HQDQq9aQzn%2BkYVag%2FEEajLCtchd66zYDAlZfE2ASXB3FvKaZErjx4oNIM6DDZCcZ9qRAqGIuvM7t7n77%2FSfTWxBxb0w2oanRjrGPBOEQ7JxQnVM6dh9hkoGTqPYBgH6TyOFQ%2F9PQocjnyCsbXqShIEQCFh25NMNNYwJRfAh435qpH%2B%2BgB8ZSIkn3wma6G5PXyNmATXYNPgBgi18GSpVqkLZWbPDEEJaWamEimPIV54uXoFuaK4feBPK9%2FHYnuy77LXzR39DkZ7xkCo8zUkjuFk0Rw869JCTc0kk5JTcy%2BdKRIlfk7uLpsRHlm41tQkIRAdT%2FcupSugTnKtDqz1f7NTF3YX33fzitAoYXTJSAahyb%2Fc29m%2BD4Bm8yuPCqi6MU5Xmg0gnYMT6rLMIONwcQGOqUBmg5GgJu5jNe%2FyR4zbNuMTRrXWrfVh58aRM5DFFnewyX4ofiuHvGJH7%2BnT1pHuiW2%2BTqE3%2BZphjltexaHeVZ0Fde7nOMCKvSPBjjpJzBsaGJGKPy5RMd352DnhOtDJOdrR1NyB5SF%2FklDMwJGpusMS9hyZ5vWGKqDsRs4WbuveuasSQE2SnQAYqQFrZeJGsaVn4XPhuoZ54ToAOEQaQe7BFJaOOdX&X-Amz-Signature=2c0e6ae04c3275a975b1b9c437d530d6d3007ffd0bd78a3511d1e88a1432da51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQH6TEW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDljIYO%2BSjOuuEFvnPgjm8oygdPOcSEFsDK6hhymx1ITQIgN8H7GGZR9vup75WfT%2BtxSHAvh63bO8xolT632A6pnacq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMuJafW0dZjhcw5tcircA9QioPphwSZImaY6VEHLk846iTtlIS2qsM1M1Uvxu6NEDi3vsYPkv6tDRtk6a4q7UPlo00lINIq7KHjyPHKqKONvgptqsG1ohK2DjRl%2B0bOIm4HexrPpdk0cBdHGKskhFUAJmvbbGCkSpinqpn3xBdEYAR9wmIvF8b%2BtZ%2B2ikTK%2BkhXo3Sx4mpxrarfedGLfGZCfVC0abKhjNypk7PrWTzecBUQkMFMRMhfYERlkLZGB9H4HQDQq9aQzn%2BkYVag%2FEEajLCtchd66zYDAlZfE2ASXB3FvKaZErjx4oNIM6DDZCcZ9qRAqGIuvM7t7n77%2FSfTWxBxb0w2oanRjrGPBOEQ7JxQnVM6dh9hkoGTqPYBgH6TyOFQ%2F9PQocjnyCsbXqShIEQCFh25NMNNYwJRfAh435qpH%2B%2BgB8ZSIkn3wma6G5PXyNmATXYNPgBgi18GSpVqkLZWbPDEEJaWamEimPIV54uXoFuaK4feBPK9%2FHYnuy77LXzR39DkZ7xkCo8zUkjuFk0Rw869JCTc0kk5JTcy%2BdKRIlfk7uLpsRHlm41tQkIRAdT%2FcupSugTnKtDqz1f7NTF3YX33fzitAoYXTJSAahyb%2Fc29m%2BD4Bm8yuPCqi6MU5Xmg0gnYMT6rLMIONwcQGOqUBmg5GgJu5jNe%2FyR4zbNuMTRrXWrfVh58aRM5DFFnewyX4ofiuHvGJH7%2BnT1pHuiW2%2BTqE3%2BZphjltexaHeVZ0Fde7nOMCKvSPBjjpJzBsaGJGKPy5RMd352DnhOtDJOdrR1NyB5SF%2FklDMwJGpusMS9hyZ5vWGKqDsRs4WbuveuasSQE2SnQAYqQFrZeJGsaVn4XPhuoZ54ToAOEQaQe7BFJaOOdX&X-Amz-Signature=e0ef24a46494a25820362940241656f0e2804b3b876ef7a2e2cd4e517217b0e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQH6TEW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDljIYO%2BSjOuuEFvnPgjm8oygdPOcSEFsDK6hhymx1ITQIgN8H7GGZR9vup75WfT%2BtxSHAvh63bO8xolT632A6pnacq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMuJafW0dZjhcw5tcircA9QioPphwSZImaY6VEHLk846iTtlIS2qsM1M1Uvxu6NEDi3vsYPkv6tDRtk6a4q7UPlo00lINIq7KHjyPHKqKONvgptqsG1ohK2DjRl%2B0bOIm4HexrPpdk0cBdHGKskhFUAJmvbbGCkSpinqpn3xBdEYAR9wmIvF8b%2BtZ%2B2ikTK%2BkhXo3Sx4mpxrarfedGLfGZCfVC0abKhjNypk7PrWTzecBUQkMFMRMhfYERlkLZGB9H4HQDQq9aQzn%2BkYVag%2FEEajLCtchd66zYDAlZfE2ASXB3FvKaZErjx4oNIM6DDZCcZ9qRAqGIuvM7t7n77%2FSfTWxBxb0w2oanRjrGPBOEQ7JxQnVM6dh9hkoGTqPYBgH6TyOFQ%2F9PQocjnyCsbXqShIEQCFh25NMNNYwJRfAh435qpH%2B%2BgB8ZSIkn3wma6G5PXyNmATXYNPgBgi18GSpVqkLZWbPDEEJaWamEimPIV54uXoFuaK4feBPK9%2FHYnuy77LXzR39DkZ7xkCo8zUkjuFk0Rw869JCTc0kk5JTcy%2BdKRIlfk7uLpsRHlm41tQkIRAdT%2FcupSugTnKtDqz1f7NTF3YX33fzitAoYXTJSAahyb%2Fc29m%2BD4Bm8yuPCqi6MU5Xmg0gnYMT6rLMIONwcQGOqUBmg5GgJu5jNe%2FyR4zbNuMTRrXWrfVh58aRM5DFFnewyX4ofiuHvGJH7%2BnT1pHuiW2%2BTqE3%2BZphjltexaHeVZ0Fde7nOMCKvSPBjjpJzBsaGJGKPy5RMd352DnhOtDJOdrR1NyB5SF%2FklDMwJGpusMS9hyZ5vWGKqDsRs4WbuveuasSQE2SnQAYqQFrZeJGsaVn4XPhuoZ54ToAOEQaQe7BFJaOOdX&X-Amz-Signature=fde396b6e765fe4dafcd0e806fcd2672819fcb1753e86e932da9dae49673960f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQH6TEW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDljIYO%2BSjOuuEFvnPgjm8oygdPOcSEFsDK6hhymx1ITQIgN8H7GGZR9vup75WfT%2BtxSHAvh63bO8xolT632A6pnacq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMuJafW0dZjhcw5tcircA9QioPphwSZImaY6VEHLk846iTtlIS2qsM1M1Uvxu6NEDi3vsYPkv6tDRtk6a4q7UPlo00lINIq7KHjyPHKqKONvgptqsG1ohK2DjRl%2B0bOIm4HexrPpdk0cBdHGKskhFUAJmvbbGCkSpinqpn3xBdEYAR9wmIvF8b%2BtZ%2B2ikTK%2BkhXo3Sx4mpxrarfedGLfGZCfVC0abKhjNypk7PrWTzecBUQkMFMRMhfYERlkLZGB9H4HQDQq9aQzn%2BkYVag%2FEEajLCtchd66zYDAlZfE2ASXB3FvKaZErjx4oNIM6DDZCcZ9qRAqGIuvM7t7n77%2FSfTWxBxb0w2oanRjrGPBOEQ7JxQnVM6dh9hkoGTqPYBgH6TyOFQ%2F9PQocjnyCsbXqShIEQCFh25NMNNYwJRfAh435qpH%2B%2BgB8ZSIkn3wma6G5PXyNmATXYNPgBgi18GSpVqkLZWbPDEEJaWamEimPIV54uXoFuaK4feBPK9%2FHYnuy77LXzR39DkZ7xkCo8zUkjuFk0Rw869JCTc0kk5JTcy%2BdKRIlfk7uLpsRHlm41tQkIRAdT%2FcupSugTnKtDqz1f7NTF3YX33fzitAoYXTJSAahyb%2Fc29m%2BD4Bm8yuPCqi6MU5Xmg0gnYMT6rLMIONwcQGOqUBmg5GgJu5jNe%2FyR4zbNuMTRrXWrfVh58aRM5DFFnewyX4ofiuHvGJH7%2BnT1pHuiW2%2BTqE3%2BZphjltexaHeVZ0Fde7nOMCKvSPBjjpJzBsaGJGKPy5RMd352DnhOtDJOdrR1NyB5SF%2FklDMwJGpusMS9hyZ5vWGKqDsRs4WbuveuasSQE2SnQAYqQFrZeJGsaVn4XPhuoZ54ToAOEQaQe7BFJaOOdX&X-Amz-Signature=6d27bdfd792b5796b47f68da33e2bb067087066cb028d46f59d86a38c67bd39e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQH6TEW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDljIYO%2BSjOuuEFvnPgjm8oygdPOcSEFsDK6hhymx1ITQIgN8H7GGZR9vup75WfT%2BtxSHAvh63bO8xolT632A6pnacq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMuJafW0dZjhcw5tcircA9QioPphwSZImaY6VEHLk846iTtlIS2qsM1M1Uvxu6NEDi3vsYPkv6tDRtk6a4q7UPlo00lINIq7KHjyPHKqKONvgptqsG1ohK2DjRl%2B0bOIm4HexrPpdk0cBdHGKskhFUAJmvbbGCkSpinqpn3xBdEYAR9wmIvF8b%2BtZ%2B2ikTK%2BkhXo3Sx4mpxrarfedGLfGZCfVC0abKhjNypk7PrWTzecBUQkMFMRMhfYERlkLZGB9H4HQDQq9aQzn%2BkYVag%2FEEajLCtchd66zYDAlZfE2ASXB3FvKaZErjx4oNIM6DDZCcZ9qRAqGIuvM7t7n77%2FSfTWxBxb0w2oanRjrGPBOEQ7JxQnVM6dh9hkoGTqPYBgH6TyOFQ%2F9PQocjnyCsbXqShIEQCFh25NMNNYwJRfAh435qpH%2B%2BgB8ZSIkn3wma6G5PXyNmATXYNPgBgi18GSpVqkLZWbPDEEJaWamEimPIV54uXoFuaK4feBPK9%2FHYnuy77LXzR39DkZ7xkCo8zUkjuFk0Rw869JCTc0kk5JTcy%2BdKRIlfk7uLpsRHlm41tQkIRAdT%2FcupSugTnKtDqz1f7NTF3YX33fzitAoYXTJSAahyb%2Fc29m%2BD4Bm8yuPCqi6MU5Xmg0gnYMT6rLMIONwcQGOqUBmg5GgJu5jNe%2FyR4zbNuMTRrXWrfVh58aRM5DFFnewyX4ofiuHvGJH7%2BnT1pHuiW2%2BTqE3%2BZphjltexaHeVZ0Fde7nOMCKvSPBjjpJzBsaGJGKPy5RMd352DnhOtDJOdrR1NyB5SF%2FklDMwJGpusMS9hyZ5vWGKqDsRs4WbuveuasSQE2SnQAYqQFrZeJGsaVn4XPhuoZ54ToAOEQaQe7BFJaOOdX&X-Amz-Signature=f32fe5255537e046f9f85d90c5edc28dc80e93dfaf5d8b12a7e66c9501b1f52c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQH6TEW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDljIYO%2BSjOuuEFvnPgjm8oygdPOcSEFsDK6hhymx1ITQIgN8H7GGZR9vup75WfT%2BtxSHAvh63bO8xolT632A6pnacq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMuJafW0dZjhcw5tcircA9QioPphwSZImaY6VEHLk846iTtlIS2qsM1M1Uvxu6NEDi3vsYPkv6tDRtk6a4q7UPlo00lINIq7KHjyPHKqKONvgptqsG1ohK2DjRl%2B0bOIm4HexrPpdk0cBdHGKskhFUAJmvbbGCkSpinqpn3xBdEYAR9wmIvF8b%2BtZ%2B2ikTK%2BkhXo3Sx4mpxrarfedGLfGZCfVC0abKhjNypk7PrWTzecBUQkMFMRMhfYERlkLZGB9H4HQDQq9aQzn%2BkYVag%2FEEajLCtchd66zYDAlZfE2ASXB3FvKaZErjx4oNIM6DDZCcZ9qRAqGIuvM7t7n77%2FSfTWxBxb0w2oanRjrGPBOEQ7JxQnVM6dh9hkoGTqPYBgH6TyOFQ%2F9PQocjnyCsbXqShIEQCFh25NMNNYwJRfAh435qpH%2B%2BgB8ZSIkn3wma6G5PXyNmATXYNPgBgi18GSpVqkLZWbPDEEJaWamEimPIV54uXoFuaK4feBPK9%2FHYnuy77LXzR39DkZ7xkCo8zUkjuFk0Rw869JCTc0kk5JTcy%2BdKRIlfk7uLpsRHlm41tQkIRAdT%2FcupSugTnKtDqz1f7NTF3YX33fzitAoYXTJSAahyb%2Fc29m%2BD4Bm8yuPCqi6MU5Xmg0gnYMT6rLMIONwcQGOqUBmg5GgJu5jNe%2FyR4zbNuMTRrXWrfVh58aRM5DFFnewyX4ofiuHvGJH7%2BnT1pHuiW2%2BTqE3%2BZphjltexaHeVZ0Fde7nOMCKvSPBjjpJzBsaGJGKPy5RMd352DnhOtDJOdrR1NyB5SF%2FklDMwJGpusMS9hyZ5vWGKqDsRs4WbuveuasSQE2SnQAYqQFrZeJGsaVn4XPhuoZ54ToAOEQaQe7BFJaOOdX&X-Amz-Signature=8b924ac871b07cdde77c347eba6f7c9f1fa45cf11ef163723b7cb5a61caf9e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQH6TEW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDljIYO%2BSjOuuEFvnPgjm8oygdPOcSEFsDK6hhymx1ITQIgN8H7GGZR9vup75WfT%2BtxSHAvh63bO8xolT632A6pnacq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMuJafW0dZjhcw5tcircA9QioPphwSZImaY6VEHLk846iTtlIS2qsM1M1Uvxu6NEDi3vsYPkv6tDRtk6a4q7UPlo00lINIq7KHjyPHKqKONvgptqsG1ohK2DjRl%2B0bOIm4HexrPpdk0cBdHGKskhFUAJmvbbGCkSpinqpn3xBdEYAR9wmIvF8b%2BtZ%2B2ikTK%2BkhXo3Sx4mpxrarfedGLfGZCfVC0abKhjNypk7PrWTzecBUQkMFMRMhfYERlkLZGB9H4HQDQq9aQzn%2BkYVag%2FEEajLCtchd66zYDAlZfE2ASXB3FvKaZErjx4oNIM6DDZCcZ9qRAqGIuvM7t7n77%2FSfTWxBxb0w2oanRjrGPBOEQ7JxQnVM6dh9hkoGTqPYBgH6TyOFQ%2F9PQocjnyCsbXqShIEQCFh25NMNNYwJRfAh435qpH%2B%2BgB8ZSIkn3wma6G5PXyNmATXYNPgBgi18GSpVqkLZWbPDEEJaWamEimPIV54uXoFuaK4feBPK9%2FHYnuy77LXzR39DkZ7xkCo8zUkjuFk0Rw869JCTc0kk5JTcy%2BdKRIlfk7uLpsRHlm41tQkIRAdT%2FcupSugTnKtDqz1f7NTF3YX33fzitAoYXTJSAahyb%2Fc29m%2BD4Bm8yuPCqi6MU5Xmg0gnYMT6rLMIONwcQGOqUBmg5GgJu5jNe%2FyR4zbNuMTRrXWrfVh58aRM5DFFnewyX4ofiuHvGJH7%2BnT1pHuiW2%2BTqE3%2BZphjltexaHeVZ0Fde7nOMCKvSPBjjpJzBsaGJGKPy5RMd352DnhOtDJOdrR1NyB5SF%2FklDMwJGpusMS9hyZ5vWGKqDsRs4WbuveuasSQE2SnQAYqQFrZeJGsaVn4XPhuoZ54ToAOEQaQe7BFJaOOdX&X-Amz-Signature=a7a9d04d37261c07ee64e6a1f6646bf2d44d002d5f38c1d6f27b5f22af62ee1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQH6TEW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDljIYO%2BSjOuuEFvnPgjm8oygdPOcSEFsDK6hhymx1ITQIgN8H7GGZR9vup75WfT%2BtxSHAvh63bO8xolT632A6pnacq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMuJafW0dZjhcw5tcircA9QioPphwSZImaY6VEHLk846iTtlIS2qsM1M1Uvxu6NEDi3vsYPkv6tDRtk6a4q7UPlo00lINIq7KHjyPHKqKONvgptqsG1ohK2DjRl%2B0bOIm4HexrPpdk0cBdHGKskhFUAJmvbbGCkSpinqpn3xBdEYAR9wmIvF8b%2BtZ%2B2ikTK%2BkhXo3Sx4mpxrarfedGLfGZCfVC0abKhjNypk7PrWTzecBUQkMFMRMhfYERlkLZGB9H4HQDQq9aQzn%2BkYVag%2FEEajLCtchd66zYDAlZfE2ASXB3FvKaZErjx4oNIM6DDZCcZ9qRAqGIuvM7t7n77%2FSfTWxBxb0w2oanRjrGPBOEQ7JxQnVM6dh9hkoGTqPYBgH6TyOFQ%2F9PQocjnyCsbXqShIEQCFh25NMNNYwJRfAh435qpH%2B%2BgB8ZSIkn3wma6G5PXyNmATXYNPgBgi18GSpVqkLZWbPDEEJaWamEimPIV54uXoFuaK4feBPK9%2FHYnuy77LXzR39DkZ7xkCo8zUkjuFk0Rw869JCTc0kk5JTcy%2BdKRIlfk7uLpsRHlm41tQkIRAdT%2FcupSugTnKtDqz1f7NTF3YX33fzitAoYXTJSAahyb%2Fc29m%2BD4Bm8yuPCqi6MU5Xmg0gnYMT6rLMIONwcQGOqUBmg5GgJu5jNe%2FyR4zbNuMTRrXWrfVh58aRM5DFFnewyX4ofiuHvGJH7%2BnT1pHuiW2%2BTqE3%2BZphjltexaHeVZ0Fde7nOMCKvSPBjjpJzBsaGJGKPy5RMd352DnhOtDJOdrR1NyB5SF%2FklDMwJGpusMS9hyZ5vWGKqDsRs4WbuveuasSQE2SnQAYqQFrZeJGsaVn4XPhuoZ54ToAOEQaQe7BFJaOOdX&X-Amz-Signature=36bbfe3c5f76dd13ea762d26e3af28b84f850050d1d0f655b4ec3929baed5944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
