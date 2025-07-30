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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHZVRKH7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuN1czKweOQ8VtA1mzeQiDzYAlMZhg%2F1qWHbjgY3ODVgIgMn4%2FyysUyuQsXyybyG4yquh0hifxmVV72LQ%2F9HaR4XoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKxtTOJXvC%2FoeSSsSrcAxAQ4JLf5iwUq%2Fhy55CDkv8Xk9F0CvBxBcVvo61peVkXd7xRc0UakwmQ2%2BNQyn0veMd3bLT%2BBOqcpLC1Bf%2BONbT5KUb6keg%2B%2FsSKuuOgiTElD2AwBhCJzJUX7%2Bc97MQeQl0lyZzDR0%2BAHzVIVftZQaGNBm0vI6Vl33TZ8dMdSLBriTnwmmpVFFrPDtKGWxLeGY5zQIdKsNEfui0zoEDhvbJ9NH7RK7e%2FTxy6pkVt1otzL8cqRjZNeVC48qweFJ%2FXqIgtxT94P2dechqruEBnAxNooteT6PzNiLQtCwbOLCsKUAO36FykIpMXM9hp%2Br%2FQwqbiEMZkF%2B270pqPOvTX7xXTcGy98NxJTOO5VZ1SLRcQbjkH4eWR%2FEcs0bcUZ5WbT49UFXW1qt0pqeBfCVHhItn2K%2B6qTPXAMZ6VR%2F2R7i1hgGgaoLNYwxH%2BT%2FqPX6xNkcpC7jQ%2BFm8qEx84ioChSrA8uNUXaFUFZN4seGfY2mow3A6bgiQ2Nk%2FCRv9GDJkpPLMXMXNPQRLFWgfMhhix9YEsi8TPwxrjVyPITPlDtp0a6fgfjo634IAH1YTE%2BxXf%2FVNpKS6v8sHoSrygdiSCSGGK0JW7SkgyaVd7DqoMaYfwn4g7qMp4w%2F9%2BP5ygMO7vp8QGOqUBOxbVlJzuKl8p1Bs5AJUI4C7DF5KkLOmdgBgrH1V8e1pBr5SpRBIzMmD2P6AdwsaHe%2F6MeAxztYYhaBeUQWzB07BjfTT1YJxGeSZNypvBCPJhVE%2FcfVlnl0nE7Im8pu%2B1O1h6HjBu%2BaY%2FgNe3jMROpTlp5to1%2B%2BObPmSJTdM8s6zXQkrRQoBsCReI9tz0yzOrIKttQdHhZBJFuZtY1pgbWwPMe%2FIj&X-Amz-Signature=740f2008f800e99dd5b0b9cfbbf31ce3a2527fa05589a030d04636ab30ab3562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHZVRKH7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuN1czKweOQ8VtA1mzeQiDzYAlMZhg%2F1qWHbjgY3ODVgIgMn4%2FyysUyuQsXyybyG4yquh0hifxmVV72LQ%2F9HaR4XoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKxtTOJXvC%2FoeSSsSrcAxAQ4JLf5iwUq%2Fhy55CDkv8Xk9F0CvBxBcVvo61peVkXd7xRc0UakwmQ2%2BNQyn0veMd3bLT%2BBOqcpLC1Bf%2BONbT5KUb6keg%2B%2FsSKuuOgiTElD2AwBhCJzJUX7%2Bc97MQeQl0lyZzDR0%2BAHzVIVftZQaGNBm0vI6Vl33TZ8dMdSLBriTnwmmpVFFrPDtKGWxLeGY5zQIdKsNEfui0zoEDhvbJ9NH7RK7e%2FTxy6pkVt1otzL8cqRjZNeVC48qweFJ%2FXqIgtxT94P2dechqruEBnAxNooteT6PzNiLQtCwbOLCsKUAO36FykIpMXM9hp%2Br%2FQwqbiEMZkF%2B270pqPOvTX7xXTcGy98NxJTOO5VZ1SLRcQbjkH4eWR%2FEcs0bcUZ5WbT49UFXW1qt0pqeBfCVHhItn2K%2B6qTPXAMZ6VR%2F2R7i1hgGgaoLNYwxH%2BT%2FqPX6xNkcpC7jQ%2BFm8qEx84ioChSrA8uNUXaFUFZN4seGfY2mow3A6bgiQ2Nk%2FCRv9GDJkpPLMXMXNPQRLFWgfMhhix9YEsi8TPwxrjVyPITPlDtp0a6fgfjo634IAH1YTE%2BxXf%2FVNpKS6v8sHoSrygdiSCSGGK0JW7SkgyaVd7DqoMaYfwn4g7qMp4w%2F9%2BP5ygMO7vp8QGOqUBOxbVlJzuKl8p1Bs5AJUI4C7DF5KkLOmdgBgrH1V8e1pBr5SpRBIzMmD2P6AdwsaHe%2F6MeAxztYYhaBeUQWzB07BjfTT1YJxGeSZNypvBCPJhVE%2FcfVlnl0nE7Im8pu%2B1O1h6HjBu%2BaY%2FgNe3jMROpTlp5to1%2B%2BObPmSJTdM8s6zXQkrRQoBsCReI9tz0yzOrIKttQdHhZBJFuZtY1pgbWwPMe%2FIj&X-Amz-Signature=849fce34111863e6cad6ffb0be9a1a0c7a8e29ead3f38abed27889f88173efb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHZVRKH7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuN1czKweOQ8VtA1mzeQiDzYAlMZhg%2F1qWHbjgY3ODVgIgMn4%2FyysUyuQsXyybyG4yquh0hifxmVV72LQ%2F9HaR4XoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKxtTOJXvC%2FoeSSsSrcAxAQ4JLf5iwUq%2Fhy55CDkv8Xk9F0CvBxBcVvo61peVkXd7xRc0UakwmQ2%2BNQyn0veMd3bLT%2BBOqcpLC1Bf%2BONbT5KUb6keg%2B%2FsSKuuOgiTElD2AwBhCJzJUX7%2Bc97MQeQl0lyZzDR0%2BAHzVIVftZQaGNBm0vI6Vl33TZ8dMdSLBriTnwmmpVFFrPDtKGWxLeGY5zQIdKsNEfui0zoEDhvbJ9NH7RK7e%2FTxy6pkVt1otzL8cqRjZNeVC48qweFJ%2FXqIgtxT94P2dechqruEBnAxNooteT6PzNiLQtCwbOLCsKUAO36FykIpMXM9hp%2Br%2FQwqbiEMZkF%2B270pqPOvTX7xXTcGy98NxJTOO5VZ1SLRcQbjkH4eWR%2FEcs0bcUZ5WbT49UFXW1qt0pqeBfCVHhItn2K%2B6qTPXAMZ6VR%2F2R7i1hgGgaoLNYwxH%2BT%2FqPX6xNkcpC7jQ%2BFm8qEx84ioChSrA8uNUXaFUFZN4seGfY2mow3A6bgiQ2Nk%2FCRv9GDJkpPLMXMXNPQRLFWgfMhhix9YEsi8TPwxrjVyPITPlDtp0a6fgfjo634IAH1YTE%2BxXf%2FVNpKS6v8sHoSrygdiSCSGGK0JW7SkgyaVd7DqoMaYfwn4g7qMp4w%2F9%2BP5ygMO7vp8QGOqUBOxbVlJzuKl8p1Bs5AJUI4C7DF5KkLOmdgBgrH1V8e1pBr5SpRBIzMmD2P6AdwsaHe%2F6MeAxztYYhaBeUQWzB07BjfTT1YJxGeSZNypvBCPJhVE%2FcfVlnl0nE7Im8pu%2B1O1h6HjBu%2BaY%2FgNe3jMROpTlp5to1%2B%2BObPmSJTdM8s6zXQkrRQoBsCReI9tz0yzOrIKttQdHhZBJFuZtY1pgbWwPMe%2FIj&X-Amz-Signature=659665def7b71d41cdbd894af62582ed24b9d220ff7dc253a541f8e8359d8f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHZVRKH7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuN1czKweOQ8VtA1mzeQiDzYAlMZhg%2F1qWHbjgY3ODVgIgMn4%2FyysUyuQsXyybyG4yquh0hifxmVV72LQ%2F9HaR4XoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKxtTOJXvC%2FoeSSsSrcAxAQ4JLf5iwUq%2Fhy55CDkv8Xk9F0CvBxBcVvo61peVkXd7xRc0UakwmQ2%2BNQyn0veMd3bLT%2BBOqcpLC1Bf%2BONbT5KUb6keg%2B%2FsSKuuOgiTElD2AwBhCJzJUX7%2Bc97MQeQl0lyZzDR0%2BAHzVIVftZQaGNBm0vI6Vl33TZ8dMdSLBriTnwmmpVFFrPDtKGWxLeGY5zQIdKsNEfui0zoEDhvbJ9NH7RK7e%2FTxy6pkVt1otzL8cqRjZNeVC48qweFJ%2FXqIgtxT94P2dechqruEBnAxNooteT6PzNiLQtCwbOLCsKUAO36FykIpMXM9hp%2Br%2FQwqbiEMZkF%2B270pqPOvTX7xXTcGy98NxJTOO5VZ1SLRcQbjkH4eWR%2FEcs0bcUZ5WbT49UFXW1qt0pqeBfCVHhItn2K%2B6qTPXAMZ6VR%2F2R7i1hgGgaoLNYwxH%2BT%2FqPX6xNkcpC7jQ%2BFm8qEx84ioChSrA8uNUXaFUFZN4seGfY2mow3A6bgiQ2Nk%2FCRv9GDJkpPLMXMXNPQRLFWgfMhhix9YEsi8TPwxrjVyPITPlDtp0a6fgfjo634IAH1YTE%2BxXf%2FVNpKS6v8sHoSrygdiSCSGGK0JW7SkgyaVd7DqoMaYfwn4g7qMp4w%2F9%2BP5ygMO7vp8QGOqUBOxbVlJzuKl8p1Bs5AJUI4C7DF5KkLOmdgBgrH1V8e1pBr5SpRBIzMmD2P6AdwsaHe%2F6MeAxztYYhaBeUQWzB07BjfTT1YJxGeSZNypvBCPJhVE%2FcfVlnl0nE7Im8pu%2B1O1h6HjBu%2BaY%2FgNe3jMROpTlp5to1%2B%2BObPmSJTdM8s6zXQkrRQoBsCReI9tz0yzOrIKttQdHhZBJFuZtY1pgbWwPMe%2FIj&X-Amz-Signature=7d7ba0d2bf4c44ad6605e14abf82a7e64572beec21f2fc059cf27b9791e7ca15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHZVRKH7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuN1czKweOQ8VtA1mzeQiDzYAlMZhg%2F1qWHbjgY3ODVgIgMn4%2FyysUyuQsXyybyG4yquh0hifxmVV72LQ%2F9HaR4XoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKxtTOJXvC%2FoeSSsSrcAxAQ4JLf5iwUq%2Fhy55CDkv8Xk9F0CvBxBcVvo61peVkXd7xRc0UakwmQ2%2BNQyn0veMd3bLT%2BBOqcpLC1Bf%2BONbT5KUb6keg%2B%2FsSKuuOgiTElD2AwBhCJzJUX7%2Bc97MQeQl0lyZzDR0%2BAHzVIVftZQaGNBm0vI6Vl33TZ8dMdSLBriTnwmmpVFFrPDtKGWxLeGY5zQIdKsNEfui0zoEDhvbJ9NH7RK7e%2FTxy6pkVt1otzL8cqRjZNeVC48qweFJ%2FXqIgtxT94P2dechqruEBnAxNooteT6PzNiLQtCwbOLCsKUAO36FykIpMXM9hp%2Br%2FQwqbiEMZkF%2B270pqPOvTX7xXTcGy98NxJTOO5VZ1SLRcQbjkH4eWR%2FEcs0bcUZ5WbT49UFXW1qt0pqeBfCVHhItn2K%2B6qTPXAMZ6VR%2F2R7i1hgGgaoLNYwxH%2BT%2FqPX6xNkcpC7jQ%2BFm8qEx84ioChSrA8uNUXaFUFZN4seGfY2mow3A6bgiQ2Nk%2FCRv9GDJkpPLMXMXNPQRLFWgfMhhix9YEsi8TPwxrjVyPITPlDtp0a6fgfjo634IAH1YTE%2BxXf%2FVNpKS6v8sHoSrygdiSCSGGK0JW7SkgyaVd7DqoMaYfwn4g7qMp4w%2F9%2BP5ygMO7vp8QGOqUBOxbVlJzuKl8p1Bs5AJUI4C7DF5KkLOmdgBgrH1V8e1pBr5SpRBIzMmD2P6AdwsaHe%2F6MeAxztYYhaBeUQWzB07BjfTT1YJxGeSZNypvBCPJhVE%2FcfVlnl0nE7Im8pu%2B1O1h6HjBu%2BaY%2FgNe3jMROpTlp5to1%2B%2BObPmSJTdM8s6zXQkrRQoBsCReI9tz0yzOrIKttQdHhZBJFuZtY1pgbWwPMe%2FIj&X-Amz-Signature=ffc72f0f80e06f68249222923020058fe0362d2544df370800c693b53ddbc7fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHZVRKH7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuN1czKweOQ8VtA1mzeQiDzYAlMZhg%2F1qWHbjgY3ODVgIgMn4%2FyysUyuQsXyybyG4yquh0hifxmVV72LQ%2F9HaR4XoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKxtTOJXvC%2FoeSSsSrcAxAQ4JLf5iwUq%2Fhy55CDkv8Xk9F0CvBxBcVvo61peVkXd7xRc0UakwmQ2%2BNQyn0veMd3bLT%2BBOqcpLC1Bf%2BONbT5KUb6keg%2B%2FsSKuuOgiTElD2AwBhCJzJUX7%2Bc97MQeQl0lyZzDR0%2BAHzVIVftZQaGNBm0vI6Vl33TZ8dMdSLBriTnwmmpVFFrPDtKGWxLeGY5zQIdKsNEfui0zoEDhvbJ9NH7RK7e%2FTxy6pkVt1otzL8cqRjZNeVC48qweFJ%2FXqIgtxT94P2dechqruEBnAxNooteT6PzNiLQtCwbOLCsKUAO36FykIpMXM9hp%2Br%2FQwqbiEMZkF%2B270pqPOvTX7xXTcGy98NxJTOO5VZ1SLRcQbjkH4eWR%2FEcs0bcUZ5WbT49UFXW1qt0pqeBfCVHhItn2K%2B6qTPXAMZ6VR%2F2R7i1hgGgaoLNYwxH%2BT%2FqPX6xNkcpC7jQ%2BFm8qEx84ioChSrA8uNUXaFUFZN4seGfY2mow3A6bgiQ2Nk%2FCRv9GDJkpPLMXMXNPQRLFWgfMhhix9YEsi8TPwxrjVyPITPlDtp0a6fgfjo634IAH1YTE%2BxXf%2FVNpKS6v8sHoSrygdiSCSGGK0JW7SkgyaVd7DqoMaYfwn4g7qMp4w%2F9%2BP5ygMO7vp8QGOqUBOxbVlJzuKl8p1Bs5AJUI4C7DF5KkLOmdgBgrH1V8e1pBr5SpRBIzMmD2P6AdwsaHe%2F6MeAxztYYhaBeUQWzB07BjfTT1YJxGeSZNypvBCPJhVE%2FcfVlnl0nE7Im8pu%2B1O1h6HjBu%2BaY%2FgNe3jMROpTlp5to1%2B%2BObPmSJTdM8s6zXQkrRQoBsCReI9tz0yzOrIKttQdHhZBJFuZtY1pgbWwPMe%2FIj&X-Amz-Signature=0b25bb6bcd91e3d387fcc9727dcf1b69af3b1cb6460cad6d3f61fc202fffd3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHZVRKH7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuN1czKweOQ8VtA1mzeQiDzYAlMZhg%2F1qWHbjgY3ODVgIgMn4%2FyysUyuQsXyybyG4yquh0hifxmVV72LQ%2F9HaR4XoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKxtTOJXvC%2FoeSSsSrcAxAQ4JLf5iwUq%2Fhy55CDkv8Xk9F0CvBxBcVvo61peVkXd7xRc0UakwmQ2%2BNQyn0veMd3bLT%2BBOqcpLC1Bf%2BONbT5KUb6keg%2B%2FsSKuuOgiTElD2AwBhCJzJUX7%2Bc97MQeQl0lyZzDR0%2BAHzVIVftZQaGNBm0vI6Vl33TZ8dMdSLBriTnwmmpVFFrPDtKGWxLeGY5zQIdKsNEfui0zoEDhvbJ9NH7RK7e%2FTxy6pkVt1otzL8cqRjZNeVC48qweFJ%2FXqIgtxT94P2dechqruEBnAxNooteT6PzNiLQtCwbOLCsKUAO36FykIpMXM9hp%2Br%2FQwqbiEMZkF%2B270pqPOvTX7xXTcGy98NxJTOO5VZ1SLRcQbjkH4eWR%2FEcs0bcUZ5WbT49UFXW1qt0pqeBfCVHhItn2K%2B6qTPXAMZ6VR%2F2R7i1hgGgaoLNYwxH%2BT%2FqPX6xNkcpC7jQ%2BFm8qEx84ioChSrA8uNUXaFUFZN4seGfY2mow3A6bgiQ2Nk%2FCRv9GDJkpPLMXMXNPQRLFWgfMhhix9YEsi8TPwxrjVyPITPlDtp0a6fgfjo634IAH1YTE%2BxXf%2FVNpKS6v8sHoSrygdiSCSGGK0JW7SkgyaVd7DqoMaYfwn4g7qMp4w%2F9%2BP5ygMO7vp8QGOqUBOxbVlJzuKl8p1Bs5AJUI4C7DF5KkLOmdgBgrH1V8e1pBr5SpRBIzMmD2P6AdwsaHe%2F6MeAxztYYhaBeUQWzB07BjfTT1YJxGeSZNypvBCPJhVE%2FcfVlnl0nE7Im8pu%2B1O1h6HjBu%2BaY%2FgNe3jMROpTlp5to1%2B%2BObPmSJTdM8s6zXQkrRQoBsCReI9tz0yzOrIKttQdHhZBJFuZtY1pgbWwPMe%2FIj&X-Amz-Signature=e777f04be84196edd19992638a63adc7e2ea4c94ff7722ef8c4d0197033b0222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHZVRKH7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuN1czKweOQ8VtA1mzeQiDzYAlMZhg%2F1qWHbjgY3ODVgIgMn4%2FyysUyuQsXyybyG4yquh0hifxmVV72LQ%2F9HaR4XoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKxtTOJXvC%2FoeSSsSrcAxAQ4JLf5iwUq%2Fhy55CDkv8Xk9F0CvBxBcVvo61peVkXd7xRc0UakwmQ2%2BNQyn0veMd3bLT%2BBOqcpLC1Bf%2BONbT5KUb6keg%2B%2FsSKuuOgiTElD2AwBhCJzJUX7%2Bc97MQeQl0lyZzDR0%2BAHzVIVftZQaGNBm0vI6Vl33TZ8dMdSLBriTnwmmpVFFrPDtKGWxLeGY5zQIdKsNEfui0zoEDhvbJ9NH7RK7e%2FTxy6pkVt1otzL8cqRjZNeVC48qweFJ%2FXqIgtxT94P2dechqruEBnAxNooteT6PzNiLQtCwbOLCsKUAO36FykIpMXM9hp%2Br%2FQwqbiEMZkF%2B270pqPOvTX7xXTcGy98NxJTOO5VZ1SLRcQbjkH4eWR%2FEcs0bcUZ5WbT49UFXW1qt0pqeBfCVHhItn2K%2B6qTPXAMZ6VR%2F2R7i1hgGgaoLNYwxH%2BT%2FqPX6xNkcpC7jQ%2BFm8qEx84ioChSrA8uNUXaFUFZN4seGfY2mow3A6bgiQ2Nk%2FCRv9GDJkpPLMXMXNPQRLFWgfMhhix9YEsi8TPwxrjVyPITPlDtp0a6fgfjo634IAH1YTE%2BxXf%2FVNpKS6v8sHoSrygdiSCSGGK0JW7SkgyaVd7DqoMaYfwn4g7qMp4w%2F9%2BP5ygMO7vp8QGOqUBOxbVlJzuKl8p1Bs5AJUI4C7DF5KkLOmdgBgrH1V8e1pBr5SpRBIzMmD2P6AdwsaHe%2F6MeAxztYYhaBeUQWzB07BjfTT1YJxGeSZNypvBCPJhVE%2FcfVlnl0nE7Im8pu%2B1O1h6HjBu%2BaY%2FgNe3jMROpTlp5to1%2B%2BObPmSJTdM8s6zXQkrRQoBsCReI9tz0yzOrIKttQdHhZBJFuZtY1pgbWwPMe%2FIj&X-Amz-Signature=256b7dd9f84769ffb90a7ae0ac0f66c340e4b8bb1b089bd2c955d9970fcbb723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHZVRKH7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuN1czKweOQ8VtA1mzeQiDzYAlMZhg%2F1qWHbjgY3ODVgIgMn4%2FyysUyuQsXyybyG4yquh0hifxmVV72LQ%2F9HaR4XoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKxtTOJXvC%2FoeSSsSrcAxAQ4JLf5iwUq%2Fhy55CDkv8Xk9F0CvBxBcVvo61peVkXd7xRc0UakwmQ2%2BNQyn0veMd3bLT%2BBOqcpLC1Bf%2BONbT5KUb6keg%2B%2FsSKuuOgiTElD2AwBhCJzJUX7%2Bc97MQeQl0lyZzDR0%2BAHzVIVftZQaGNBm0vI6Vl33TZ8dMdSLBriTnwmmpVFFrPDtKGWxLeGY5zQIdKsNEfui0zoEDhvbJ9NH7RK7e%2FTxy6pkVt1otzL8cqRjZNeVC48qweFJ%2FXqIgtxT94P2dechqruEBnAxNooteT6PzNiLQtCwbOLCsKUAO36FykIpMXM9hp%2Br%2FQwqbiEMZkF%2B270pqPOvTX7xXTcGy98NxJTOO5VZ1SLRcQbjkH4eWR%2FEcs0bcUZ5WbT49UFXW1qt0pqeBfCVHhItn2K%2B6qTPXAMZ6VR%2F2R7i1hgGgaoLNYwxH%2BT%2FqPX6xNkcpC7jQ%2BFm8qEx84ioChSrA8uNUXaFUFZN4seGfY2mow3A6bgiQ2Nk%2FCRv9GDJkpPLMXMXNPQRLFWgfMhhix9YEsi8TPwxrjVyPITPlDtp0a6fgfjo634IAH1YTE%2BxXf%2FVNpKS6v8sHoSrygdiSCSGGK0JW7SkgyaVd7DqoMaYfwn4g7qMp4w%2F9%2BP5ygMO7vp8QGOqUBOxbVlJzuKl8p1Bs5AJUI4C7DF5KkLOmdgBgrH1V8e1pBr5SpRBIzMmD2P6AdwsaHe%2F6MeAxztYYhaBeUQWzB07BjfTT1YJxGeSZNypvBCPJhVE%2FcfVlnl0nE7Im8pu%2B1O1h6HjBu%2BaY%2FgNe3jMROpTlp5to1%2B%2BObPmSJTdM8s6zXQkrRQoBsCReI9tz0yzOrIKttQdHhZBJFuZtY1pgbWwPMe%2FIj&X-Amz-Signature=e71d4e2da26f5b00ce8a254a2d2bd98f30376cf881d25ef9cceeacf742006284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVQVQRX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCpk9PQI0Tm7whuCVElK9xeGMePQUqAq5GyemEMv9QlAIhAIqY5DUgZGfrOXANeUHw9rxFy3Rsp338VNJv374PI7%2F8KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZmKQQPExfE6oCGygq3APknF3KmMeuc8pqvTducaNmBbuPtT6A9I%2FyFvmu9T6B8fFW2D15r1ZU6MTXX%2FAICcjdcyngOtYPA6iVfqnJMc8%2FuXPPv7tGzciUOaDOIars6PqY7fTCDJxI6yZWFboqawXZI78ttv2SRUsjPopcq%2FMEAopylIi7Ag1HmDwXUb%2FDKHm8jo%2BcbtFDHOs3VopLxzImXL3iT9RAPXhNMlE2uRt4Bz9Fy%2BjEiH239ypBh1m6db1nuB%2Bk1Vzy%2BI8lO874GHUc9VydThcNSIqGNAHQ%2BDDUxC8%2B34qew9%2BBrf%2Fmv1r9Jxo2yZGJKS%2FHQoBjhi%2BY%2FNJwf%2FaHK1JzsQN%2FLz2Jduas2jhxeUmT8XsJhtxMcg4fMFQ0dHbTMkThG6SbpgN9kmYY8AEfOq%2FFvJjN18EnYy1YB0BJgmpSq1Kiv84dgN17vrutCKFhDRfs4ohbAIFWMlt1MEubIGu9%2B6AVKhQBGR6DQrcGXbiTVQmDtPqU7bUFYhCrEuKW%2BaVpK%2BLqHEKCWl7mhMUvqIM6BSxL0E%2FgKLDA%2F6aYL%2FJb9CCE6bj%2FC1cUbKjHmf%2BmhYJ435ujjVK7IbiL%2B6SLSbvfMNSJ%2F9FnBsjwCT5UjNr7xVJ%2FkO67LDkLr2YsyFzEhMoy3a313TDS8KfEBjqkAdwJmAcbBxTGDWeDRWby3itObknq%2B8FDhHVlvLhWwSyZcjrV2UQPLVzLoNutdQcfviGNHMsIgswjpo5hSchH4Yg1Q8Qymb25rWomQ1gCU47IaWj3jNDMM03SGtKahlUDaZWTZ3%2FYFb7wBvu1uPl96fIgi8lh0f3sqKqnmsLr0DoQI9j6petsve%2FQXBcV%2FjWTCbO8MO6a1LzrKl0I3krB%2BCPsAwpB&X-Amz-Signature=055f00450a82871effd6a19c6254d33eb52435c0d7269cc82f26614f5c583eb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHZVRKH7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuN1czKweOQ8VtA1mzeQiDzYAlMZhg%2F1qWHbjgY3ODVgIgMn4%2FyysUyuQsXyybyG4yquh0hifxmVV72LQ%2F9HaR4XoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKxtTOJXvC%2FoeSSsSrcAxAQ4JLf5iwUq%2Fhy55CDkv8Xk9F0CvBxBcVvo61peVkXd7xRc0UakwmQ2%2BNQyn0veMd3bLT%2BBOqcpLC1Bf%2BONbT5KUb6keg%2B%2FsSKuuOgiTElD2AwBhCJzJUX7%2Bc97MQeQl0lyZzDR0%2BAHzVIVftZQaGNBm0vI6Vl33TZ8dMdSLBriTnwmmpVFFrPDtKGWxLeGY5zQIdKsNEfui0zoEDhvbJ9NH7RK7e%2FTxy6pkVt1otzL8cqRjZNeVC48qweFJ%2FXqIgtxT94P2dechqruEBnAxNooteT6PzNiLQtCwbOLCsKUAO36FykIpMXM9hp%2Br%2FQwqbiEMZkF%2B270pqPOvTX7xXTcGy98NxJTOO5VZ1SLRcQbjkH4eWR%2FEcs0bcUZ5WbT49UFXW1qt0pqeBfCVHhItn2K%2B6qTPXAMZ6VR%2F2R7i1hgGgaoLNYwxH%2BT%2FqPX6xNkcpC7jQ%2BFm8qEx84ioChSrA8uNUXaFUFZN4seGfY2mow3A6bgiQ2Nk%2FCRv9GDJkpPLMXMXNPQRLFWgfMhhix9YEsi8TPwxrjVyPITPlDtp0a6fgfjo634IAH1YTE%2BxXf%2FVNpKS6v8sHoSrygdiSCSGGK0JW7SkgyaVd7DqoMaYfwn4g7qMp4w%2F9%2BP5ygMO7vp8QGOqUBOxbVlJzuKl8p1Bs5AJUI4C7DF5KkLOmdgBgrH1V8e1pBr5SpRBIzMmD2P6AdwsaHe%2F6MeAxztYYhaBeUQWzB07BjfTT1YJxGeSZNypvBCPJhVE%2FcfVlnl0nE7Im8pu%2B1O1h6HjBu%2BaY%2FgNe3jMROpTlp5to1%2B%2BObPmSJTdM8s6zXQkrRQoBsCReI9tz0yzOrIKttQdHhZBJFuZtY1pgbWwPMe%2FIj&X-Amz-Signature=dba477caf9e4e1f33202692bb172f1ef7feda841fc14e4c84b44be80c05699f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGBCUXZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtt87Ry%2FEsBGfrTByEhh8xWw9vNaipPRI5MpG4V327CwIhAIoW%2BsgQkMwbfLXS%2BNa72QNXwxvpkiySuUJ0DNH%2B48NSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4JepEXHLnwLAfxpUq3AMHtijOuz1D9xqmm7faYMmIp%2F6VvL5Ib9r3DVVR1l1tukQL4xvgNY1wtbNF03H718Q4OnyYE5OFbrdrIqLp3%2FvQ9SZ%2F8K1YIiHAn8lFu8CYC0TLEsthZKpflZ4%2B%2Bw0Z7ctUfHu1s9ObW0iHc5GD5jIRDlL1brepCCKyfbDC3Ya2z82I1TbS0SwPWo6EXc3F7%2FsnkrZuPxKzVz8oOzipClSkpRg%2BkH0ortO55M0PDm1mv7BugeCyofBvKIqgEBV0JOpkO6uPqIU%2FHLb2QQhV%2FKGcm1E0z09VYIT0hk%2FUZmy%2BSGXzn9e0bTvAF%2BAPLxR5HEycIJQNtyvQ8IXoJPFgo%2BPbwDVYQ8haOEROb3zOCOO1DL28DdWvKTXXl5O4VCznqS51mn0I%2FtqQQxzzZhZ1Plp6MBfzRrL%2B3MWOltJvmyZj2LO5ncgX2WK6SrIu1v%2BgtEzS7Gm7qov4bi6Bqcj%2F4U0xGhJwn8IbxmJl8JfQPv40oZTCxrEyU%2FPMVyACKcp7oZ%2BVYpRRwfS77gJjKNbzxhZln47UVaec0%2BCsiQ7loKMaHhdEa%2Bpo3nr6Qp2ExbXFMxXqmASllfkD5PbYOFXSF8vZkIhJ6JzfB%2Fp74QKfFLB6i1r3E3CCS6TBz%2FSAZDCi8KfEBjqkAfHwFHj4sn21PDgC24WHb1Sj%2BFC7UkS3HgSLyIfAzfU5IYuI0i9Qih2QEmIyGXjtpDcUrn9XXJrpY2OerFHk76uGm7PVxJIbiMWnDGthqCaxJA6bScxSQjVBH%2Fhw1LTeC8OwAh%2FzekNU%2FbduB7cKJqSeB%2B4m9BqimqaJsK%2Fya64LjyaKPeQnObhwyVw54MvnV6N5MVOnXmS23uW6mrvTG%2BniT6bI&X-Amz-Signature=680e355988b14dd7f517fe089bfd14f8834d290c7b5c7ad81f4bd6572db1687c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGBCUXZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtt87Ry%2FEsBGfrTByEhh8xWw9vNaipPRI5MpG4V327CwIhAIoW%2BsgQkMwbfLXS%2BNa72QNXwxvpkiySuUJ0DNH%2B48NSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4JepEXHLnwLAfxpUq3AMHtijOuz1D9xqmm7faYMmIp%2F6VvL5Ib9r3DVVR1l1tukQL4xvgNY1wtbNF03H718Q4OnyYE5OFbrdrIqLp3%2FvQ9SZ%2F8K1YIiHAn8lFu8CYC0TLEsthZKpflZ4%2B%2Bw0Z7ctUfHu1s9ObW0iHc5GD5jIRDlL1brepCCKyfbDC3Ya2z82I1TbS0SwPWo6EXc3F7%2FsnkrZuPxKzVz8oOzipClSkpRg%2BkH0ortO55M0PDm1mv7BugeCyofBvKIqgEBV0JOpkO6uPqIU%2FHLb2QQhV%2FKGcm1E0z09VYIT0hk%2FUZmy%2BSGXzn9e0bTvAF%2BAPLxR5HEycIJQNtyvQ8IXoJPFgo%2BPbwDVYQ8haOEROb3zOCOO1DL28DdWvKTXXl5O4VCznqS51mn0I%2FtqQQxzzZhZ1Plp6MBfzRrL%2B3MWOltJvmyZj2LO5ncgX2WK6SrIu1v%2BgtEzS7Gm7qov4bi6Bqcj%2F4U0xGhJwn8IbxmJl8JfQPv40oZTCxrEyU%2FPMVyACKcp7oZ%2BVYpRRwfS77gJjKNbzxhZln47UVaec0%2BCsiQ7loKMaHhdEa%2Bpo3nr6Qp2ExbXFMxXqmASllfkD5PbYOFXSF8vZkIhJ6JzfB%2Fp74QKfFLB6i1r3E3CCS6TBz%2FSAZDCi8KfEBjqkAfHwFHj4sn21PDgC24WHb1Sj%2BFC7UkS3HgSLyIfAzfU5IYuI0i9Qih2QEmIyGXjtpDcUrn9XXJrpY2OerFHk76uGm7PVxJIbiMWnDGthqCaxJA6bScxSQjVBH%2Fhw1LTeC8OwAh%2FzekNU%2FbduB7cKJqSeB%2B4m9BqimqaJsK%2Fya64LjyaKPeQnObhwyVw54MvnV6N5MVOnXmS23uW6mrvTG%2BniT6bI&X-Amz-Signature=a7955deb3cc1952e96260a272389fa0298123f893e9a87b859d76b80acf1d62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGBCUXZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtt87Ry%2FEsBGfrTByEhh8xWw9vNaipPRI5MpG4V327CwIhAIoW%2BsgQkMwbfLXS%2BNa72QNXwxvpkiySuUJ0DNH%2B48NSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4JepEXHLnwLAfxpUq3AMHtijOuz1D9xqmm7faYMmIp%2F6VvL5Ib9r3DVVR1l1tukQL4xvgNY1wtbNF03H718Q4OnyYE5OFbrdrIqLp3%2FvQ9SZ%2F8K1YIiHAn8lFu8CYC0TLEsthZKpflZ4%2B%2Bw0Z7ctUfHu1s9ObW0iHc5GD5jIRDlL1brepCCKyfbDC3Ya2z82I1TbS0SwPWo6EXc3F7%2FsnkrZuPxKzVz8oOzipClSkpRg%2BkH0ortO55M0PDm1mv7BugeCyofBvKIqgEBV0JOpkO6uPqIU%2FHLb2QQhV%2FKGcm1E0z09VYIT0hk%2FUZmy%2BSGXzn9e0bTvAF%2BAPLxR5HEycIJQNtyvQ8IXoJPFgo%2BPbwDVYQ8haOEROb3zOCOO1DL28DdWvKTXXl5O4VCznqS51mn0I%2FtqQQxzzZhZ1Plp6MBfzRrL%2B3MWOltJvmyZj2LO5ncgX2WK6SrIu1v%2BgtEzS7Gm7qov4bi6Bqcj%2F4U0xGhJwn8IbxmJl8JfQPv40oZTCxrEyU%2FPMVyACKcp7oZ%2BVYpRRwfS77gJjKNbzxhZln47UVaec0%2BCsiQ7loKMaHhdEa%2Bpo3nr6Qp2ExbXFMxXqmASllfkD5PbYOFXSF8vZkIhJ6JzfB%2Fp74QKfFLB6i1r3E3CCS6TBz%2FSAZDCi8KfEBjqkAfHwFHj4sn21PDgC24WHb1Sj%2BFC7UkS3HgSLyIfAzfU5IYuI0i9Qih2QEmIyGXjtpDcUrn9XXJrpY2OerFHk76uGm7PVxJIbiMWnDGthqCaxJA6bScxSQjVBH%2Fhw1LTeC8OwAh%2FzekNU%2FbduB7cKJqSeB%2B4m9BqimqaJsK%2Fya64LjyaKPeQnObhwyVw54MvnV6N5MVOnXmS23uW6mrvTG%2BniT6bI&X-Amz-Signature=90f2c867d920bba0f488d35c085c8034b2a080590897d8c83fe2f3720989a98b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGBCUXZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtt87Ry%2FEsBGfrTByEhh8xWw9vNaipPRI5MpG4V327CwIhAIoW%2BsgQkMwbfLXS%2BNa72QNXwxvpkiySuUJ0DNH%2B48NSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4JepEXHLnwLAfxpUq3AMHtijOuz1D9xqmm7faYMmIp%2F6VvL5Ib9r3DVVR1l1tukQL4xvgNY1wtbNF03H718Q4OnyYE5OFbrdrIqLp3%2FvQ9SZ%2F8K1YIiHAn8lFu8CYC0TLEsthZKpflZ4%2B%2Bw0Z7ctUfHu1s9ObW0iHc5GD5jIRDlL1brepCCKyfbDC3Ya2z82I1TbS0SwPWo6EXc3F7%2FsnkrZuPxKzVz8oOzipClSkpRg%2BkH0ortO55M0PDm1mv7BugeCyofBvKIqgEBV0JOpkO6uPqIU%2FHLb2QQhV%2FKGcm1E0z09VYIT0hk%2FUZmy%2BSGXzn9e0bTvAF%2BAPLxR5HEycIJQNtyvQ8IXoJPFgo%2BPbwDVYQ8haOEROb3zOCOO1DL28DdWvKTXXl5O4VCznqS51mn0I%2FtqQQxzzZhZ1Plp6MBfzRrL%2B3MWOltJvmyZj2LO5ncgX2WK6SrIu1v%2BgtEzS7Gm7qov4bi6Bqcj%2F4U0xGhJwn8IbxmJl8JfQPv40oZTCxrEyU%2FPMVyACKcp7oZ%2BVYpRRwfS77gJjKNbzxhZln47UVaec0%2BCsiQ7loKMaHhdEa%2Bpo3nr6Qp2ExbXFMxXqmASllfkD5PbYOFXSF8vZkIhJ6JzfB%2Fp74QKfFLB6i1r3E3CCS6TBz%2FSAZDCi8KfEBjqkAfHwFHj4sn21PDgC24WHb1Sj%2BFC7UkS3HgSLyIfAzfU5IYuI0i9Qih2QEmIyGXjtpDcUrn9XXJrpY2OerFHk76uGm7PVxJIbiMWnDGthqCaxJA6bScxSQjVBH%2Fhw1LTeC8OwAh%2FzekNU%2FbduB7cKJqSeB%2B4m9BqimqaJsK%2Fya64LjyaKPeQnObhwyVw54MvnV6N5MVOnXmS23uW6mrvTG%2BniT6bI&X-Amz-Signature=37125437a5331cc7d8562792b4151822254ec778f76f0a7d1ce9b4c36d00e742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGBCUXZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtt87Ry%2FEsBGfrTByEhh8xWw9vNaipPRI5MpG4V327CwIhAIoW%2BsgQkMwbfLXS%2BNa72QNXwxvpkiySuUJ0DNH%2B48NSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4JepEXHLnwLAfxpUq3AMHtijOuz1D9xqmm7faYMmIp%2F6VvL5Ib9r3DVVR1l1tukQL4xvgNY1wtbNF03H718Q4OnyYE5OFbrdrIqLp3%2FvQ9SZ%2F8K1YIiHAn8lFu8CYC0TLEsthZKpflZ4%2B%2Bw0Z7ctUfHu1s9ObW0iHc5GD5jIRDlL1brepCCKyfbDC3Ya2z82I1TbS0SwPWo6EXc3F7%2FsnkrZuPxKzVz8oOzipClSkpRg%2BkH0ortO55M0PDm1mv7BugeCyofBvKIqgEBV0JOpkO6uPqIU%2FHLb2QQhV%2FKGcm1E0z09VYIT0hk%2FUZmy%2BSGXzn9e0bTvAF%2BAPLxR5HEycIJQNtyvQ8IXoJPFgo%2BPbwDVYQ8haOEROb3zOCOO1DL28DdWvKTXXl5O4VCznqS51mn0I%2FtqQQxzzZhZ1Plp6MBfzRrL%2B3MWOltJvmyZj2LO5ncgX2WK6SrIu1v%2BgtEzS7Gm7qov4bi6Bqcj%2F4U0xGhJwn8IbxmJl8JfQPv40oZTCxrEyU%2FPMVyACKcp7oZ%2BVYpRRwfS77gJjKNbzxhZln47UVaec0%2BCsiQ7loKMaHhdEa%2Bpo3nr6Qp2ExbXFMxXqmASllfkD5PbYOFXSF8vZkIhJ6JzfB%2Fp74QKfFLB6i1r3E3CCS6TBz%2FSAZDCi8KfEBjqkAfHwFHj4sn21PDgC24WHb1Sj%2BFC7UkS3HgSLyIfAzfU5IYuI0i9Qih2QEmIyGXjtpDcUrn9XXJrpY2OerFHk76uGm7PVxJIbiMWnDGthqCaxJA6bScxSQjVBH%2Fhw1LTeC8OwAh%2FzekNU%2FbduB7cKJqSeB%2B4m9BqimqaJsK%2Fya64LjyaKPeQnObhwyVw54MvnV6N5MVOnXmS23uW6mrvTG%2BniT6bI&X-Amz-Signature=b8267315d0cecd54daa03b8180db36e00c6cce47bdc0c117e1a2e183cb0e0d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGBCUXZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtt87Ry%2FEsBGfrTByEhh8xWw9vNaipPRI5MpG4V327CwIhAIoW%2BsgQkMwbfLXS%2BNa72QNXwxvpkiySuUJ0DNH%2B48NSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4JepEXHLnwLAfxpUq3AMHtijOuz1D9xqmm7faYMmIp%2F6VvL5Ib9r3DVVR1l1tukQL4xvgNY1wtbNF03H718Q4OnyYE5OFbrdrIqLp3%2FvQ9SZ%2F8K1YIiHAn8lFu8CYC0TLEsthZKpflZ4%2B%2Bw0Z7ctUfHu1s9ObW0iHc5GD5jIRDlL1brepCCKyfbDC3Ya2z82I1TbS0SwPWo6EXc3F7%2FsnkrZuPxKzVz8oOzipClSkpRg%2BkH0ortO55M0PDm1mv7BugeCyofBvKIqgEBV0JOpkO6uPqIU%2FHLb2QQhV%2FKGcm1E0z09VYIT0hk%2FUZmy%2BSGXzn9e0bTvAF%2BAPLxR5HEycIJQNtyvQ8IXoJPFgo%2BPbwDVYQ8haOEROb3zOCOO1DL28DdWvKTXXl5O4VCznqS51mn0I%2FtqQQxzzZhZ1Plp6MBfzRrL%2B3MWOltJvmyZj2LO5ncgX2WK6SrIu1v%2BgtEzS7Gm7qov4bi6Bqcj%2F4U0xGhJwn8IbxmJl8JfQPv40oZTCxrEyU%2FPMVyACKcp7oZ%2BVYpRRwfS77gJjKNbzxhZln47UVaec0%2BCsiQ7loKMaHhdEa%2Bpo3nr6Qp2ExbXFMxXqmASllfkD5PbYOFXSF8vZkIhJ6JzfB%2Fp74QKfFLB6i1r3E3CCS6TBz%2FSAZDCi8KfEBjqkAfHwFHj4sn21PDgC24WHb1Sj%2BFC7UkS3HgSLyIfAzfU5IYuI0i9Qih2QEmIyGXjtpDcUrn9XXJrpY2OerFHk76uGm7PVxJIbiMWnDGthqCaxJA6bScxSQjVBH%2Fhw1LTeC8OwAh%2FzekNU%2FbduB7cKJqSeB%2B4m9BqimqaJsK%2Fya64LjyaKPeQnObhwyVw54MvnV6N5MVOnXmS23uW6mrvTG%2BniT6bI&X-Amz-Signature=f4f6ebd2af9189fd099c4fa11b75fab238d955c5463040bf8b17178709885261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGBCUXZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtt87Ry%2FEsBGfrTByEhh8xWw9vNaipPRI5MpG4V327CwIhAIoW%2BsgQkMwbfLXS%2BNa72QNXwxvpkiySuUJ0DNH%2B48NSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4JepEXHLnwLAfxpUq3AMHtijOuz1D9xqmm7faYMmIp%2F6VvL5Ib9r3DVVR1l1tukQL4xvgNY1wtbNF03H718Q4OnyYE5OFbrdrIqLp3%2FvQ9SZ%2F8K1YIiHAn8lFu8CYC0TLEsthZKpflZ4%2B%2Bw0Z7ctUfHu1s9ObW0iHc5GD5jIRDlL1brepCCKyfbDC3Ya2z82I1TbS0SwPWo6EXc3F7%2FsnkrZuPxKzVz8oOzipClSkpRg%2BkH0ortO55M0PDm1mv7BugeCyofBvKIqgEBV0JOpkO6uPqIU%2FHLb2QQhV%2FKGcm1E0z09VYIT0hk%2FUZmy%2BSGXzn9e0bTvAF%2BAPLxR5HEycIJQNtyvQ8IXoJPFgo%2BPbwDVYQ8haOEROb3zOCOO1DL28DdWvKTXXl5O4VCznqS51mn0I%2FtqQQxzzZhZ1Plp6MBfzRrL%2B3MWOltJvmyZj2LO5ncgX2WK6SrIu1v%2BgtEzS7Gm7qov4bi6Bqcj%2F4U0xGhJwn8IbxmJl8JfQPv40oZTCxrEyU%2FPMVyACKcp7oZ%2BVYpRRwfS77gJjKNbzxhZln47UVaec0%2BCsiQ7loKMaHhdEa%2Bpo3nr6Qp2ExbXFMxXqmASllfkD5PbYOFXSF8vZkIhJ6JzfB%2Fp74QKfFLB6i1r3E3CCS6TBz%2FSAZDCi8KfEBjqkAfHwFHj4sn21PDgC24WHb1Sj%2BFC7UkS3HgSLyIfAzfU5IYuI0i9Qih2QEmIyGXjtpDcUrn9XXJrpY2OerFHk76uGm7PVxJIbiMWnDGthqCaxJA6bScxSQjVBH%2Fhw1LTeC8OwAh%2FzekNU%2FbduB7cKJqSeB%2B4m9BqimqaJsK%2Fya64LjyaKPeQnObhwyVw54MvnV6N5MVOnXmS23uW6mrvTG%2BniT6bI&X-Amz-Signature=c66aeda9d5d79e3c6347731843bb7d6bfb94ec5b9dda4dd4498af0a57ca210fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGBCUXZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtt87Ry%2FEsBGfrTByEhh8xWw9vNaipPRI5MpG4V327CwIhAIoW%2BsgQkMwbfLXS%2BNa72QNXwxvpkiySuUJ0DNH%2B48NSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4JepEXHLnwLAfxpUq3AMHtijOuz1D9xqmm7faYMmIp%2F6VvL5Ib9r3DVVR1l1tukQL4xvgNY1wtbNF03H718Q4OnyYE5OFbrdrIqLp3%2FvQ9SZ%2F8K1YIiHAn8lFu8CYC0TLEsthZKpflZ4%2B%2Bw0Z7ctUfHu1s9ObW0iHc5GD5jIRDlL1brepCCKyfbDC3Ya2z82I1TbS0SwPWo6EXc3F7%2FsnkrZuPxKzVz8oOzipClSkpRg%2BkH0ortO55M0PDm1mv7BugeCyofBvKIqgEBV0JOpkO6uPqIU%2FHLb2QQhV%2FKGcm1E0z09VYIT0hk%2FUZmy%2BSGXzn9e0bTvAF%2BAPLxR5HEycIJQNtyvQ8IXoJPFgo%2BPbwDVYQ8haOEROb3zOCOO1DL28DdWvKTXXl5O4VCznqS51mn0I%2FtqQQxzzZhZ1Plp6MBfzRrL%2B3MWOltJvmyZj2LO5ncgX2WK6SrIu1v%2BgtEzS7Gm7qov4bi6Bqcj%2F4U0xGhJwn8IbxmJl8JfQPv40oZTCxrEyU%2FPMVyACKcp7oZ%2BVYpRRwfS77gJjKNbzxhZln47UVaec0%2BCsiQ7loKMaHhdEa%2Bpo3nr6Qp2ExbXFMxXqmASllfkD5PbYOFXSF8vZkIhJ6JzfB%2Fp74QKfFLB6i1r3E3CCS6TBz%2FSAZDCi8KfEBjqkAfHwFHj4sn21PDgC24WHb1Sj%2BFC7UkS3HgSLyIfAzfU5IYuI0i9Qih2QEmIyGXjtpDcUrn9XXJrpY2OerFHk76uGm7PVxJIbiMWnDGthqCaxJA6bScxSQjVBH%2Fhw1LTeC8OwAh%2FzekNU%2FbduB7cKJqSeB%2B4m9BqimqaJsK%2Fya64LjyaKPeQnObhwyVw54MvnV6N5MVOnXmS23uW6mrvTG%2BniT6bI&X-Amz-Signature=cd92ec715af4e02ce46992ee251c03a4c30040a6e95af417d0cb31efa5fe5734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
