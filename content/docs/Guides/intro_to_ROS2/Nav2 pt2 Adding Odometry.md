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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZBF6JU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJVQc%2FWOhchy9BxJQ%2FRYE9Uet%2BvNSzCEvnHXmIqulEEAiAaA7vi6TZVn471sHcexS8CW44Flo3x%2BeGGYrawgmXb1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy0fJl0aCo7h1KEmBKtwDLUjuGgr1JJU%2FlyykY7x7EV27xv6CWXaLPEnKr%2Fyf06cK41V40PkYEk%2F0H5sqlKzQGhmbmJCidLBsQSTUcLUl9nxt%2FC0P36C%2Fo%2Bk%2Ff6xpBQWD8cGrlhN5ucbt0jcaIlTwLUY%2FCFl%2Bi9N7owgu19yobdDcb3KxKB6k7uEDliWvQ%2BqlNOvUUECS2AVFHE%2B4CK0oXMpCabdIM%2B5FmsCtgq0nAwJqCziN%2BM6tKubLXFgBtBeRV5yziQPtM2%2BK4Pc2%2BykhTc4%2BDtgPIJKqgGbI7WN7XxEH3nvFN%2BEXYO%2Fe7JFZ8vBFAe9YyFXAQOAwmVuaF72jPEMEiNckcyq7oYUori4ODYrX0t9eYsteJPlzOZBxI%2BTJe%2BhCffZqfBQh6QWNVrn9X9xHBjx0gt2rFeGUawlb7NId2NS4gGW7dRqCZoRLxjnrpTdihwH1Gq%2BwxyzM9nU4zUZYO3FhfGRVzVEvWtw1umQuwbxaTgd4YRgqCqCZpIOMSdvhjgXsfGJmKxfWDlGI8QOxHxgwTRT0B6A1QHu0E5f0JnkXN1hn1%2BBK4F6eE%2BK%2FPqHW2ncfgJ2X7kSMIKFFtNnmX3wC7Xre1QFnK2No6DnR%2FHvoUUY1F%2BQQ8EgcbfEdsrqTvSK1BJ11Pz8wq7mwzwY6pgEdhYLHiHhcro4U%2B7z213C1YZoJlaV45jKKv%2F5zlca5%2BL%2FuZ2i210xQHuBAE30Y1VZELZmMNrPGI6ueWugQMN0PvdGMYCMtunDVnrJwIyMtDyPGz5VHDGP82mF%2B2VScAQo83HT8O1CXRVG%2Fcq%2Fs6gOyEw7syg6SNVKBZ2yvsKiiFOBIjtyRICG9q0S%2BZ0RuAXxx%2FBnaaY9leBiVI1nD1mFPNR%2Bv1clV&X-Amz-Signature=f765ea920b7be3ec5aed30c438cef8a8623b3855b2db5b7886ddb76745ad956c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZBF6JU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJVQc%2FWOhchy9BxJQ%2FRYE9Uet%2BvNSzCEvnHXmIqulEEAiAaA7vi6TZVn471sHcexS8CW44Flo3x%2BeGGYrawgmXb1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy0fJl0aCo7h1KEmBKtwDLUjuGgr1JJU%2FlyykY7x7EV27xv6CWXaLPEnKr%2Fyf06cK41V40PkYEk%2F0H5sqlKzQGhmbmJCidLBsQSTUcLUl9nxt%2FC0P36C%2Fo%2Bk%2Ff6xpBQWD8cGrlhN5ucbt0jcaIlTwLUY%2FCFl%2Bi9N7owgu19yobdDcb3KxKB6k7uEDliWvQ%2BqlNOvUUECS2AVFHE%2B4CK0oXMpCabdIM%2B5FmsCtgq0nAwJqCziN%2BM6tKubLXFgBtBeRV5yziQPtM2%2BK4Pc2%2BykhTc4%2BDtgPIJKqgGbI7WN7XxEH3nvFN%2BEXYO%2Fe7JFZ8vBFAe9YyFXAQOAwmVuaF72jPEMEiNckcyq7oYUori4ODYrX0t9eYsteJPlzOZBxI%2BTJe%2BhCffZqfBQh6QWNVrn9X9xHBjx0gt2rFeGUawlb7NId2NS4gGW7dRqCZoRLxjnrpTdihwH1Gq%2BwxyzM9nU4zUZYO3FhfGRVzVEvWtw1umQuwbxaTgd4YRgqCqCZpIOMSdvhjgXsfGJmKxfWDlGI8QOxHxgwTRT0B6A1QHu0E5f0JnkXN1hn1%2BBK4F6eE%2BK%2FPqHW2ncfgJ2X7kSMIKFFtNnmX3wC7Xre1QFnK2No6DnR%2FHvoUUY1F%2BQQ8EgcbfEdsrqTvSK1BJ11Pz8wq7mwzwY6pgEdhYLHiHhcro4U%2B7z213C1YZoJlaV45jKKv%2F5zlca5%2BL%2FuZ2i210xQHuBAE30Y1VZELZmMNrPGI6ueWugQMN0PvdGMYCMtunDVnrJwIyMtDyPGz5VHDGP82mF%2B2VScAQo83HT8O1CXRVG%2Fcq%2Fs6gOyEw7syg6SNVKBZ2yvsKiiFOBIjtyRICG9q0S%2BZ0RuAXxx%2FBnaaY9leBiVI1nD1mFPNR%2Bv1clV&X-Amz-Signature=4dc627eb9c6afcacd09d5b96cf30f754b6b958daf3a0296fb8738e57d9ffd4a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZBF6JU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJVQc%2FWOhchy9BxJQ%2FRYE9Uet%2BvNSzCEvnHXmIqulEEAiAaA7vi6TZVn471sHcexS8CW44Flo3x%2BeGGYrawgmXb1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy0fJl0aCo7h1KEmBKtwDLUjuGgr1JJU%2FlyykY7x7EV27xv6CWXaLPEnKr%2Fyf06cK41V40PkYEk%2F0H5sqlKzQGhmbmJCidLBsQSTUcLUl9nxt%2FC0P36C%2Fo%2Bk%2Ff6xpBQWD8cGrlhN5ucbt0jcaIlTwLUY%2FCFl%2Bi9N7owgu19yobdDcb3KxKB6k7uEDliWvQ%2BqlNOvUUECS2AVFHE%2B4CK0oXMpCabdIM%2B5FmsCtgq0nAwJqCziN%2BM6tKubLXFgBtBeRV5yziQPtM2%2BK4Pc2%2BykhTc4%2BDtgPIJKqgGbI7WN7XxEH3nvFN%2BEXYO%2Fe7JFZ8vBFAe9YyFXAQOAwmVuaF72jPEMEiNckcyq7oYUori4ODYrX0t9eYsteJPlzOZBxI%2BTJe%2BhCffZqfBQh6QWNVrn9X9xHBjx0gt2rFeGUawlb7NId2NS4gGW7dRqCZoRLxjnrpTdihwH1Gq%2BwxyzM9nU4zUZYO3FhfGRVzVEvWtw1umQuwbxaTgd4YRgqCqCZpIOMSdvhjgXsfGJmKxfWDlGI8QOxHxgwTRT0B6A1QHu0E5f0JnkXN1hn1%2BBK4F6eE%2BK%2FPqHW2ncfgJ2X7kSMIKFFtNnmX3wC7Xre1QFnK2No6DnR%2FHvoUUY1F%2BQQ8EgcbfEdsrqTvSK1BJ11Pz8wq7mwzwY6pgEdhYLHiHhcro4U%2B7z213C1YZoJlaV45jKKv%2F5zlca5%2BL%2FuZ2i210xQHuBAE30Y1VZELZmMNrPGI6ueWugQMN0PvdGMYCMtunDVnrJwIyMtDyPGz5VHDGP82mF%2B2VScAQo83HT8O1CXRVG%2Fcq%2Fs6gOyEw7syg6SNVKBZ2yvsKiiFOBIjtyRICG9q0S%2BZ0RuAXxx%2FBnaaY9leBiVI1nD1mFPNR%2Bv1clV&X-Amz-Signature=7629fdd29cd5998338053c6ce776561248f125cf6c6dfb63f5c247519fa04ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZBF6JU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJVQc%2FWOhchy9BxJQ%2FRYE9Uet%2BvNSzCEvnHXmIqulEEAiAaA7vi6TZVn471sHcexS8CW44Flo3x%2BeGGYrawgmXb1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy0fJl0aCo7h1KEmBKtwDLUjuGgr1JJU%2FlyykY7x7EV27xv6CWXaLPEnKr%2Fyf06cK41V40PkYEk%2F0H5sqlKzQGhmbmJCidLBsQSTUcLUl9nxt%2FC0P36C%2Fo%2Bk%2Ff6xpBQWD8cGrlhN5ucbt0jcaIlTwLUY%2FCFl%2Bi9N7owgu19yobdDcb3KxKB6k7uEDliWvQ%2BqlNOvUUECS2AVFHE%2B4CK0oXMpCabdIM%2B5FmsCtgq0nAwJqCziN%2BM6tKubLXFgBtBeRV5yziQPtM2%2BK4Pc2%2BykhTc4%2BDtgPIJKqgGbI7WN7XxEH3nvFN%2BEXYO%2Fe7JFZ8vBFAe9YyFXAQOAwmVuaF72jPEMEiNckcyq7oYUori4ODYrX0t9eYsteJPlzOZBxI%2BTJe%2BhCffZqfBQh6QWNVrn9X9xHBjx0gt2rFeGUawlb7NId2NS4gGW7dRqCZoRLxjnrpTdihwH1Gq%2BwxyzM9nU4zUZYO3FhfGRVzVEvWtw1umQuwbxaTgd4YRgqCqCZpIOMSdvhjgXsfGJmKxfWDlGI8QOxHxgwTRT0B6A1QHu0E5f0JnkXN1hn1%2BBK4F6eE%2BK%2FPqHW2ncfgJ2X7kSMIKFFtNnmX3wC7Xre1QFnK2No6DnR%2FHvoUUY1F%2BQQ8EgcbfEdsrqTvSK1BJ11Pz8wq7mwzwY6pgEdhYLHiHhcro4U%2B7z213C1YZoJlaV45jKKv%2F5zlca5%2BL%2FuZ2i210xQHuBAE30Y1VZELZmMNrPGI6ueWugQMN0PvdGMYCMtunDVnrJwIyMtDyPGz5VHDGP82mF%2B2VScAQo83HT8O1CXRVG%2Fcq%2Fs6gOyEw7syg6SNVKBZ2yvsKiiFOBIjtyRICG9q0S%2BZ0RuAXxx%2FBnaaY9leBiVI1nD1mFPNR%2Bv1clV&X-Amz-Signature=ebd453deee494c2c2bb54a5ae610c5733730b8cbe39ae84ab727d1cc1cefd82d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZBF6JU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJVQc%2FWOhchy9BxJQ%2FRYE9Uet%2BvNSzCEvnHXmIqulEEAiAaA7vi6TZVn471sHcexS8CW44Flo3x%2BeGGYrawgmXb1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy0fJl0aCo7h1KEmBKtwDLUjuGgr1JJU%2FlyykY7x7EV27xv6CWXaLPEnKr%2Fyf06cK41V40PkYEk%2F0H5sqlKzQGhmbmJCidLBsQSTUcLUl9nxt%2FC0P36C%2Fo%2Bk%2Ff6xpBQWD8cGrlhN5ucbt0jcaIlTwLUY%2FCFl%2Bi9N7owgu19yobdDcb3KxKB6k7uEDliWvQ%2BqlNOvUUECS2AVFHE%2B4CK0oXMpCabdIM%2B5FmsCtgq0nAwJqCziN%2BM6tKubLXFgBtBeRV5yziQPtM2%2BK4Pc2%2BykhTc4%2BDtgPIJKqgGbI7WN7XxEH3nvFN%2BEXYO%2Fe7JFZ8vBFAe9YyFXAQOAwmVuaF72jPEMEiNckcyq7oYUori4ODYrX0t9eYsteJPlzOZBxI%2BTJe%2BhCffZqfBQh6QWNVrn9X9xHBjx0gt2rFeGUawlb7NId2NS4gGW7dRqCZoRLxjnrpTdihwH1Gq%2BwxyzM9nU4zUZYO3FhfGRVzVEvWtw1umQuwbxaTgd4YRgqCqCZpIOMSdvhjgXsfGJmKxfWDlGI8QOxHxgwTRT0B6A1QHu0E5f0JnkXN1hn1%2BBK4F6eE%2BK%2FPqHW2ncfgJ2X7kSMIKFFtNnmX3wC7Xre1QFnK2No6DnR%2FHvoUUY1F%2BQQ8EgcbfEdsrqTvSK1BJ11Pz8wq7mwzwY6pgEdhYLHiHhcro4U%2B7z213C1YZoJlaV45jKKv%2F5zlca5%2BL%2FuZ2i210xQHuBAE30Y1VZELZmMNrPGI6ueWugQMN0PvdGMYCMtunDVnrJwIyMtDyPGz5VHDGP82mF%2B2VScAQo83HT8O1CXRVG%2Fcq%2Fs6gOyEw7syg6SNVKBZ2yvsKiiFOBIjtyRICG9q0S%2BZ0RuAXxx%2FBnaaY9leBiVI1nD1mFPNR%2Bv1clV&X-Amz-Signature=ad4ffa974d6a29916b23d8cc32a1c5ec24b3e4acdaa61690c7d2f91ebb38a9b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZBF6JU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJVQc%2FWOhchy9BxJQ%2FRYE9Uet%2BvNSzCEvnHXmIqulEEAiAaA7vi6TZVn471sHcexS8CW44Flo3x%2BeGGYrawgmXb1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy0fJl0aCo7h1KEmBKtwDLUjuGgr1JJU%2FlyykY7x7EV27xv6CWXaLPEnKr%2Fyf06cK41V40PkYEk%2F0H5sqlKzQGhmbmJCidLBsQSTUcLUl9nxt%2FC0P36C%2Fo%2Bk%2Ff6xpBQWD8cGrlhN5ucbt0jcaIlTwLUY%2FCFl%2Bi9N7owgu19yobdDcb3KxKB6k7uEDliWvQ%2BqlNOvUUECS2AVFHE%2B4CK0oXMpCabdIM%2B5FmsCtgq0nAwJqCziN%2BM6tKubLXFgBtBeRV5yziQPtM2%2BK4Pc2%2BykhTc4%2BDtgPIJKqgGbI7WN7XxEH3nvFN%2BEXYO%2Fe7JFZ8vBFAe9YyFXAQOAwmVuaF72jPEMEiNckcyq7oYUori4ODYrX0t9eYsteJPlzOZBxI%2BTJe%2BhCffZqfBQh6QWNVrn9X9xHBjx0gt2rFeGUawlb7NId2NS4gGW7dRqCZoRLxjnrpTdihwH1Gq%2BwxyzM9nU4zUZYO3FhfGRVzVEvWtw1umQuwbxaTgd4YRgqCqCZpIOMSdvhjgXsfGJmKxfWDlGI8QOxHxgwTRT0B6A1QHu0E5f0JnkXN1hn1%2BBK4F6eE%2BK%2FPqHW2ncfgJ2X7kSMIKFFtNnmX3wC7Xre1QFnK2No6DnR%2FHvoUUY1F%2BQQ8EgcbfEdsrqTvSK1BJ11Pz8wq7mwzwY6pgEdhYLHiHhcro4U%2B7z213C1YZoJlaV45jKKv%2F5zlca5%2BL%2FuZ2i210xQHuBAE30Y1VZELZmMNrPGI6ueWugQMN0PvdGMYCMtunDVnrJwIyMtDyPGz5VHDGP82mF%2B2VScAQo83HT8O1CXRVG%2Fcq%2Fs6gOyEw7syg6SNVKBZ2yvsKiiFOBIjtyRICG9q0S%2BZ0RuAXxx%2FBnaaY9leBiVI1nD1mFPNR%2Bv1clV&X-Amz-Signature=5a79edd1492666360f98036d49f4cd6903c56bab6e7023ed0ac7b435afb65a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZBF6JU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJVQc%2FWOhchy9BxJQ%2FRYE9Uet%2BvNSzCEvnHXmIqulEEAiAaA7vi6TZVn471sHcexS8CW44Flo3x%2BeGGYrawgmXb1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy0fJl0aCo7h1KEmBKtwDLUjuGgr1JJU%2FlyykY7x7EV27xv6CWXaLPEnKr%2Fyf06cK41V40PkYEk%2F0H5sqlKzQGhmbmJCidLBsQSTUcLUl9nxt%2FC0P36C%2Fo%2Bk%2Ff6xpBQWD8cGrlhN5ucbt0jcaIlTwLUY%2FCFl%2Bi9N7owgu19yobdDcb3KxKB6k7uEDliWvQ%2BqlNOvUUECS2AVFHE%2B4CK0oXMpCabdIM%2B5FmsCtgq0nAwJqCziN%2BM6tKubLXFgBtBeRV5yziQPtM2%2BK4Pc2%2BykhTc4%2BDtgPIJKqgGbI7WN7XxEH3nvFN%2BEXYO%2Fe7JFZ8vBFAe9YyFXAQOAwmVuaF72jPEMEiNckcyq7oYUori4ODYrX0t9eYsteJPlzOZBxI%2BTJe%2BhCffZqfBQh6QWNVrn9X9xHBjx0gt2rFeGUawlb7NId2NS4gGW7dRqCZoRLxjnrpTdihwH1Gq%2BwxyzM9nU4zUZYO3FhfGRVzVEvWtw1umQuwbxaTgd4YRgqCqCZpIOMSdvhjgXsfGJmKxfWDlGI8QOxHxgwTRT0B6A1QHu0E5f0JnkXN1hn1%2BBK4F6eE%2BK%2FPqHW2ncfgJ2X7kSMIKFFtNnmX3wC7Xre1QFnK2No6DnR%2FHvoUUY1F%2BQQ8EgcbfEdsrqTvSK1BJ11Pz8wq7mwzwY6pgEdhYLHiHhcro4U%2B7z213C1YZoJlaV45jKKv%2F5zlca5%2BL%2FuZ2i210xQHuBAE30Y1VZELZmMNrPGI6ueWugQMN0PvdGMYCMtunDVnrJwIyMtDyPGz5VHDGP82mF%2B2VScAQo83HT8O1CXRVG%2Fcq%2Fs6gOyEw7syg6SNVKBZ2yvsKiiFOBIjtyRICG9q0S%2BZ0RuAXxx%2FBnaaY9leBiVI1nD1mFPNR%2Bv1clV&X-Amz-Signature=7ac4672317a6fc729650565c41b53ea022c91eb77f65082c3d2514d976295221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZBF6JU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJVQc%2FWOhchy9BxJQ%2FRYE9Uet%2BvNSzCEvnHXmIqulEEAiAaA7vi6TZVn471sHcexS8CW44Flo3x%2BeGGYrawgmXb1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy0fJl0aCo7h1KEmBKtwDLUjuGgr1JJU%2FlyykY7x7EV27xv6CWXaLPEnKr%2Fyf06cK41V40PkYEk%2F0H5sqlKzQGhmbmJCidLBsQSTUcLUl9nxt%2FC0P36C%2Fo%2Bk%2Ff6xpBQWD8cGrlhN5ucbt0jcaIlTwLUY%2FCFl%2Bi9N7owgu19yobdDcb3KxKB6k7uEDliWvQ%2BqlNOvUUECS2AVFHE%2B4CK0oXMpCabdIM%2B5FmsCtgq0nAwJqCziN%2BM6tKubLXFgBtBeRV5yziQPtM2%2BK4Pc2%2BykhTc4%2BDtgPIJKqgGbI7WN7XxEH3nvFN%2BEXYO%2Fe7JFZ8vBFAe9YyFXAQOAwmVuaF72jPEMEiNckcyq7oYUori4ODYrX0t9eYsteJPlzOZBxI%2BTJe%2BhCffZqfBQh6QWNVrn9X9xHBjx0gt2rFeGUawlb7NId2NS4gGW7dRqCZoRLxjnrpTdihwH1Gq%2BwxyzM9nU4zUZYO3FhfGRVzVEvWtw1umQuwbxaTgd4YRgqCqCZpIOMSdvhjgXsfGJmKxfWDlGI8QOxHxgwTRT0B6A1QHu0E5f0JnkXN1hn1%2BBK4F6eE%2BK%2FPqHW2ncfgJ2X7kSMIKFFtNnmX3wC7Xre1QFnK2No6DnR%2FHvoUUY1F%2BQQ8EgcbfEdsrqTvSK1BJ11Pz8wq7mwzwY6pgEdhYLHiHhcro4U%2B7z213C1YZoJlaV45jKKv%2F5zlca5%2BL%2FuZ2i210xQHuBAE30Y1VZELZmMNrPGI6ueWugQMN0PvdGMYCMtunDVnrJwIyMtDyPGz5VHDGP82mF%2B2VScAQo83HT8O1CXRVG%2Fcq%2Fs6gOyEw7syg6SNVKBZ2yvsKiiFOBIjtyRICG9q0S%2BZ0RuAXxx%2FBnaaY9leBiVI1nD1mFPNR%2Bv1clV&X-Amz-Signature=d66ffb83a3257cdf45d19032babde023990e687ce7c50db00caad52735ff404b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZBF6JU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJVQc%2FWOhchy9BxJQ%2FRYE9Uet%2BvNSzCEvnHXmIqulEEAiAaA7vi6TZVn471sHcexS8CW44Flo3x%2BeGGYrawgmXb1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy0fJl0aCo7h1KEmBKtwDLUjuGgr1JJU%2FlyykY7x7EV27xv6CWXaLPEnKr%2Fyf06cK41V40PkYEk%2F0H5sqlKzQGhmbmJCidLBsQSTUcLUl9nxt%2FC0P36C%2Fo%2Bk%2Ff6xpBQWD8cGrlhN5ucbt0jcaIlTwLUY%2FCFl%2Bi9N7owgu19yobdDcb3KxKB6k7uEDliWvQ%2BqlNOvUUECS2AVFHE%2B4CK0oXMpCabdIM%2B5FmsCtgq0nAwJqCziN%2BM6tKubLXFgBtBeRV5yziQPtM2%2BK4Pc2%2BykhTc4%2BDtgPIJKqgGbI7WN7XxEH3nvFN%2BEXYO%2Fe7JFZ8vBFAe9YyFXAQOAwmVuaF72jPEMEiNckcyq7oYUori4ODYrX0t9eYsteJPlzOZBxI%2BTJe%2BhCffZqfBQh6QWNVrn9X9xHBjx0gt2rFeGUawlb7NId2NS4gGW7dRqCZoRLxjnrpTdihwH1Gq%2BwxyzM9nU4zUZYO3FhfGRVzVEvWtw1umQuwbxaTgd4YRgqCqCZpIOMSdvhjgXsfGJmKxfWDlGI8QOxHxgwTRT0B6A1QHu0E5f0JnkXN1hn1%2BBK4F6eE%2BK%2FPqHW2ncfgJ2X7kSMIKFFtNnmX3wC7Xre1QFnK2No6DnR%2FHvoUUY1F%2BQQ8EgcbfEdsrqTvSK1BJ11Pz8wq7mwzwY6pgEdhYLHiHhcro4U%2B7z213C1YZoJlaV45jKKv%2F5zlca5%2BL%2FuZ2i210xQHuBAE30Y1VZELZmMNrPGI6ueWugQMN0PvdGMYCMtunDVnrJwIyMtDyPGz5VHDGP82mF%2B2VScAQo83HT8O1CXRVG%2Fcq%2Fs6gOyEw7syg6SNVKBZ2yvsKiiFOBIjtyRICG9q0S%2BZ0RuAXxx%2FBnaaY9leBiVI1nD1mFPNR%2Bv1clV&X-Amz-Signature=ae955bb3243734583344078aa58d8d3537a1cb0afdf9d5a6e47b79d6d1c659de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZBF6JU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJVQc%2FWOhchy9BxJQ%2FRYE9Uet%2BvNSzCEvnHXmIqulEEAiAaA7vi6TZVn471sHcexS8CW44Flo3x%2BeGGYrawgmXb1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy0fJl0aCo7h1KEmBKtwDLUjuGgr1JJU%2FlyykY7x7EV27xv6CWXaLPEnKr%2Fyf06cK41V40PkYEk%2F0H5sqlKzQGhmbmJCidLBsQSTUcLUl9nxt%2FC0P36C%2Fo%2Bk%2Ff6xpBQWD8cGrlhN5ucbt0jcaIlTwLUY%2FCFl%2Bi9N7owgu19yobdDcb3KxKB6k7uEDliWvQ%2BqlNOvUUECS2AVFHE%2B4CK0oXMpCabdIM%2B5FmsCtgq0nAwJqCziN%2BM6tKubLXFgBtBeRV5yziQPtM2%2BK4Pc2%2BykhTc4%2BDtgPIJKqgGbI7WN7XxEH3nvFN%2BEXYO%2Fe7JFZ8vBFAe9YyFXAQOAwmVuaF72jPEMEiNckcyq7oYUori4ODYrX0t9eYsteJPlzOZBxI%2BTJe%2BhCffZqfBQh6QWNVrn9X9xHBjx0gt2rFeGUawlb7NId2NS4gGW7dRqCZoRLxjnrpTdihwH1Gq%2BwxyzM9nU4zUZYO3FhfGRVzVEvWtw1umQuwbxaTgd4YRgqCqCZpIOMSdvhjgXsfGJmKxfWDlGI8QOxHxgwTRT0B6A1QHu0E5f0JnkXN1hn1%2BBK4F6eE%2BK%2FPqHW2ncfgJ2X7kSMIKFFtNnmX3wC7Xre1QFnK2No6DnR%2FHvoUUY1F%2BQQ8EgcbfEdsrqTvSK1BJ11Pz8wq7mwzwY6pgEdhYLHiHhcro4U%2B7z213C1YZoJlaV45jKKv%2F5zlca5%2BL%2FuZ2i210xQHuBAE30Y1VZELZmMNrPGI6ueWugQMN0PvdGMYCMtunDVnrJwIyMtDyPGz5VHDGP82mF%2B2VScAQo83HT8O1CXRVG%2Fcq%2Fs6gOyEw7syg6SNVKBZ2yvsKiiFOBIjtyRICG9q0S%2BZ0RuAXxx%2FBnaaY9leBiVI1nD1mFPNR%2Bv1clV&X-Amz-Signature=048e4d785b34a64d4468292ea237d4c30f88d6a74f0e1fe0a7c3db6f148cd2be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D3EN5VM%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHN9981WTB69vZ6lrdoKg1KPu6p7ipBG9Ke2L4yy71YEAiAOJVmnz%2FOViHzWKV089m%2FZLW1xTB9kLyp2X4AHhwj2qyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcTCAX4JRErQl3CVeKtwDtQ2ByQe6ow%2BQVk%2FXubKz9QNFiWqgeRlMB77tuEcbCxKeulEt%2B4vdDaieafg%2BHrkBemuftlvfMqev7nMaVQe1VCsKyJMXkckrrDk2sTDzohvdGGCwnmduSyAtvhqp5kpvZIL6DORADAlKDv651qVzwk8zxE7RnaKFO0IsdjxpSftXqZCXnKKGvz%2Fj5m%2FZSe1v9vHV1MwF3FmuruCDCfn27DBH6HNcwrqts7ulWWVXSVywgt1zrJzn%2Bd23bcN9Mt85nnqfPMTTmjfe%2B5becOFab6urjoU453ZKnt5WyN0i68XjTvK8zCGAY59zi257yz7FDmuiMVaw8x3MgeKFYoSgRgc58afD1Nvbg%2FOj88TaRVT%2BPIrlsGbzcfB%2B3Y%2BuXN9oaL%2BM5YBieZcJNZK2UEhQFRbEkSkGCLjBB64aFJOWwBsImoed8mQSL%2BAPJ%2BtTtFN0eMCRqD7u0312ThmTty03MGancPtBE%2BbthPYjYQ0X9IhaXWV3FSzCLcU6rR4wHEO4hkspK4Jewfv7SnrBvF1KDewFKfQPW9zMMLduTOAFcMNqPawAoj7yyQWnOXNy0A4M2dNIgjbFt1Cm0Cu%2BNeke9NqGrm8LWlOw9A%2BxkpwvE%2FHRa15U8PxCXIHjMwkw1rqwzwY6pgGpwUVByj6SIC6Pf6ILKmEuduZa69VmmFaIT4H3G%2B4sKeMuWRFartG%2Fr0enXlFfLkNW2uWKf0nAaHzjw%2BKd4od1SSNLjP%2Fi%2BFjEZpFvC1ygrfiakdkZG2S2r4amN0KoDrzUxtELV8QoDYJOxk%2BgBmgvxE7sDAbo1tc5jmtd%2B6G21380N6SUWf6Tyy%2FUUxJa9Z79hsUHsqYFS40drsCjzxGPFQJc%2Bq7t&X-Amz-Signature=83c7ff07a82997d747762a4aa13a4e4d88048350959f21954c3ec1c86cdf0dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNK42WKI%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAN6WAtEhfE5Gh8wU3Nj5k%2FfS2Wc8LjDctXzFhQsMieAiEAogRb%2FOZZWDosydn2Ce3TuMM743T16KhquOmMGWEqtTwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtgF8lIFKjk38vW6yrcA0K%2BeBH94%2Bk0GVZrLZTYf0IAMXV1gVRsqoTuCx57TJjU8xVbz9wQWDCbtSRnsoegBr8plPDSd%2ByR29K6SBMPzPJl%2B6AKWT1JfCGOGbEEozRUQuHaVGGpaNgO1qqpECD%2FTXrTPSfHm7FcMAhaaDdiE%2FptDH4KlQNsRDBUCHxVTEp0LYC6drzcD1sR7CEHU%2FcNRwLBQthdXXTr5eGpE4KxANsRAv69D40oiUqEVQQjRZt1pIilrzuQ%2FMXyVVkbD5388UteLWtKes9eIqQ6Qg3BhlIIOgNiAnroJJpCmJkiPz0KH6Gg%2Fnq5zFondZH94MLkZtpHCBNRzsRbVOHZTWhat5exktLVNVJpUcHt7YVqkNObNOl6YDszMSPY5F3o31yybXkkB1fm1G155cGj%2BXIXI5jZNBZJDg484CWBrUjljdQ5LyGmPY6q4AOhoxDU8VbR3mnSOMShXOEIzaI%2BgqxJ%2F%2FyVouL1J03EmdqC0RQcIT8pXppypAN2me1iLQFLiGBD7SXknFXO4MSxhliLX2NEYD2CbclBgN5%2F3k0f2ZYHyRmpHN4O7MomY%2FwIouz4pZzcdc6B8ZeLKqQ561QTeir4mMnL9xn%2BuAUe99imnPCinRrsLrt35jvlJYxP7ssgMPy5sM8GOqUBMXmFQ4f9WJMDyLT5iDQtc3H1Q3Xnze2KLfcsdJhjnqMii1J1DxqNuPlG4pPkQssVG4bBPVjHABb4f23wckYDNVygzw%2Fva6TjWBCCQDq23jxOco%2F%2B5xP%2BiAB39%2BnOkh2YTZFobXGfonw8i%2BvwVBoDHHk9k75uLr1skRIKPQY0dJkkkLgo039zSKtcCTYXcsIvLyFZ06lMKaEgaFzzho3SXJnt6L6R&X-Amz-Signature=3e413f0bb534b1425eee3aec54dbaf073f2ea6b0ac9ce0179d785574ce8f3963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNK42WKI%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAN6WAtEhfE5Gh8wU3Nj5k%2FfS2Wc8LjDctXzFhQsMieAiEAogRb%2FOZZWDosydn2Ce3TuMM743T16KhquOmMGWEqtTwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtgF8lIFKjk38vW6yrcA0K%2BeBH94%2Bk0GVZrLZTYf0IAMXV1gVRsqoTuCx57TJjU8xVbz9wQWDCbtSRnsoegBr8plPDSd%2ByR29K6SBMPzPJl%2B6AKWT1JfCGOGbEEozRUQuHaVGGpaNgO1qqpECD%2FTXrTPSfHm7FcMAhaaDdiE%2FptDH4KlQNsRDBUCHxVTEp0LYC6drzcD1sR7CEHU%2FcNRwLBQthdXXTr5eGpE4KxANsRAv69D40oiUqEVQQjRZt1pIilrzuQ%2FMXyVVkbD5388UteLWtKes9eIqQ6Qg3BhlIIOgNiAnroJJpCmJkiPz0KH6Gg%2Fnq5zFondZH94MLkZtpHCBNRzsRbVOHZTWhat5exktLVNVJpUcHt7YVqkNObNOl6YDszMSPY5F3o31yybXkkB1fm1G155cGj%2BXIXI5jZNBZJDg484CWBrUjljdQ5LyGmPY6q4AOhoxDU8VbR3mnSOMShXOEIzaI%2BgqxJ%2F%2FyVouL1J03EmdqC0RQcIT8pXppypAN2me1iLQFLiGBD7SXknFXO4MSxhliLX2NEYD2CbclBgN5%2F3k0f2ZYHyRmpHN4O7MomY%2FwIouz4pZzcdc6B8ZeLKqQ561QTeir4mMnL9xn%2BuAUe99imnPCinRrsLrt35jvlJYxP7ssgMPy5sM8GOqUBMXmFQ4f9WJMDyLT5iDQtc3H1Q3Xnze2KLfcsdJhjnqMii1J1DxqNuPlG4pPkQssVG4bBPVjHABb4f23wckYDNVygzw%2Fva6TjWBCCQDq23jxOco%2F%2B5xP%2BiAB39%2BnOkh2YTZFobXGfonw8i%2BvwVBoDHHk9k75uLr1skRIKPQY0dJkkkLgo039zSKtcCTYXcsIvLyFZ06lMKaEgaFzzho3SXJnt6L6R&X-Amz-Signature=4a4e3db3369b7bf78ffab17397746a3bd13f4d8daeeb1acbc9170b30865c979a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNK42WKI%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAN6WAtEhfE5Gh8wU3Nj5k%2FfS2Wc8LjDctXzFhQsMieAiEAogRb%2FOZZWDosydn2Ce3TuMM743T16KhquOmMGWEqtTwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtgF8lIFKjk38vW6yrcA0K%2BeBH94%2Bk0GVZrLZTYf0IAMXV1gVRsqoTuCx57TJjU8xVbz9wQWDCbtSRnsoegBr8plPDSd%2ByR29K6SBMPzPJl%2B6AKWT1JfCGOGbEEozRUQuHaVGGpaNgO1qqpECD%2FTXrTPSfHm7FcMAhaaDdiE%2FptDH4KlQNsRDBUCHxVTEp0LYC6drzcD1sR7CEHU%2FcNRwLBQthdXXTr5eGpE4KxANsRAv69D40oiUqEVQQjRZt1pIilrzuQ%2FMXyVVkbD5388UteLWtKes9eIqQ6Qg3BhlIIOgNiAnroJJpCmJkiPz0KH6Gg%2Fnq5zFondZH94MLkZtpHCBNRzsRbVOHZTWhat5exktLVNVJpUcHt7YVqkNObNOl6YDszMSPY5F3o31yybXkkB1fm1G155cGj%2BXIXI5jZNBZJDg484CWBrUjljdQ5LyGmPY6q4AOhoxDU8VbR3mnSOMShXOEIzaI%2BgqxJ%2F%2FyVouL1J03EmdqC0RQcIT8pXppypAN2me1iLQFLiGBD7SXknFXO4MSxhliLX2NEYD2CbclBgN5%2F3k0f2ZYHyRmpHN4O7MomY%2FwIouz4pZzcdc6B8ZeLKqQ561QTeir4mMnL9xn%2BuAUe99imnPCinRrsLrt35jvlJYxP7ssgMPy5sM8GOqUBMXmFQ4f9WJMDyLT5iDQtc3H1Q3Xnze2KLfcsdJhjnqMii1J1DxqNuPlG4pPkQssVG4bBPVjHABb4f23wckYDNVygzw%2Fva6TjWBCCQDq23jxOco%2F%2B5xP%2BiAB39%2BnOkh2YTZFobXGfonw8i%2BvwVBoDHHk9k75uLr1skRIKPQY0dJkkkLgo039zSKtcCTYXcsIvLyFZ06lMKaEgaFzzho3SXJnt6L6R&X-Amz-Signature=0ff3b82052aa08e5a9931f47bb81f5b7c2387ce781db306237f923dd71049da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNK42WKI%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAN6WAtEhfE5Gh8wU3Nj5k%2FfS2Wc8LjDctXzFhQsMieAiEAogRb%2FOZZWDosydn2Ce3TuMM743T16KhquOmMGWEqtTwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtgF8lIFKjk38vW6yrcA0K%2BeBH94%2Bk0GVZrLZTYf0IAMXV1gVRsqoTuCx57TJjU8xVbz9wQWDCbtSRnsoegBr8plPDSd%2ByR29K6SBMPzPJl%2B6AKWT1JfCGOGbEEozRUQuHaVGGpaNgO1qqpECD%2FTXrTPSfHm7FcMAhaaDdiE%2FptDH4KlQNsRDBUCHxVTEp0LYC6drzcD1sR7CEHU%2FcNRwLBQthdXXTr5eGpE4KxANsRAv69D40oiUqEVQQjRZt1pIilrzuQ%2FMXyVVkbD5388UteLWtKes9eIqQ6Qg3BhlIIOgNiAnroJJpCmJkiPz0KH6Gg%2Fnq5zFondZH94MLkZtpHCBNRzsRbVOHZTWhat5exktLVNVJpUcHt7YVqkNObNOl6YDszMSPY5F3o31yybXkkB1fm1G155cGj%2BXIXI5jZNBZJDg484CWBrUjljdQ5LyGmPY6q4AOhoxDU8VbR3mnSOMShXOEIzaI%2BgqxJ%2F%2FyVouL1J03EmdqC0RQcIT8pXppypAN2me1iLQFLiGBD7SXknFXO4MSxhliLX2NEYD2CbclBgN5%2F3k0f2ZYHyRmpHN4O7MomY%2FwIouz4pZzcdc6B8ZeLKqQ561QTeir4mMnL9xn%2BuAUe99imnPCinRrsLrt35jvlJYxP7ssgMPy5sM8GOqUBMXmFQ4f9WJMDyLT5iDQtc3H1Q3Xnze2KLfcsdJhjnqMii1J1DxqNuPlG4pPkQssVG4bBPVjHABb4f23wckYDNVygzw%2Fva6TjWBCCQDq23jxOco%2F%2B5xP%2BiAB39%2BnOkh2YTZFobXGfonw8i%2BvwVBoDHHk9k75uLr1skRIKPQY0dJkkkLgo039zSKtcCTYXcsIvLyFZ06lMKaEgaFzzho3SXJnt6L6R&X-Amz-Signature=d5faad819a38a31a0e7eac8222126ffbbc0f7d1ba82017c26b7f992628e2fd00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNK42WKI%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAN6WAtEhfE5Gh8wU3Nj5k%2FfS2Wc8LjDctXzFhQsMieAiEAogRb%2FOZZWDosydn2Ce3TuMM743T16KhquOmMGWEqtTwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtgF8lIFKjk38vW6yrcA0K%2BeBH94%2Bk0GVZrLZTYf0IAMXV1gVRsqoTuCx57TJjU8xVbz9wQWDCbtSRnsoegBr8plPDSd%2ByR29K6SBMPzPJl%2B6AKWT1JfCGOGbEEozRUQuHaVGGpaNgO1qqpECD%2FTXrTPSfHm7FcMAhaaDdiE%2FptDH4KlQNsRDBUCHxVTEp0LYC6drzcD1sR7CEHU%2FcNRwLBQthdXXTr5eGpE4KxANsRAv69D40oiUqEVQQjRZt1pIilrzuQ%2FMXyVVkbD5388UteLWtKes9eIqQ6Qg3BhlIIOgNiAnroJJpCmJkiPz0KH6Gg%2Fnq5zFondZH94MLkZtpHCBNRzsRbVOHZTWhat5exktLVNVJpUcHt7YVqkNObNOl6YDszMSPY5F3o31yybXkkB1fm1G155cGj%2BXIXI5jZNBZJDg484CWBrUjljdQ5LyGmPY6q4AOhoxDU8VbR3mnSOMShXOEIzaI%2BgqxJ%2F%2FyVouL1J03EmdqC0RQcIT8pXppypAN2me1iLQFLiGBD7SXknFXO4MSxhliLX2NEYD2CbclBgN5%2F3k0f2ZYHyRmpHN4O7MomY%2FwIouz4pZzcdc6B8ZeLKqQ561QTeir4mMnL9xn%2BuAUe99imnPCinRrsLrt35jvlJYxP7ssgMPy5sM8GOqUBMXmFQ4f9WJMDyLT5iDQtc3H1Q3Xnze2KLfcsdJhjnqMii1J1DxqNuPlG4pPkQssVG4bBPVjHABb4f23wckYDNVygzw%2Fva6TjWBCCQDq23jxOco%2F%2B5xP%2BiAB39%2BnOkh2YTZFobXGfonw8i%2BvwVBoDHHk9k75uLr1skRIKPQY0dJkkkLgo039zSKtcCTYXcsIvLyFZ06lMKaEgaFzzho3SXJnt6L6R&X-Amz-Signature=8395c84b3b715597e244e5b7bb4af351f521ff7b5b4dc78ea5aac0bf9d009a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNK42WKI%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAN6WAtEhfE5Gh8wU3Nj5k%2FfS2Wc8LjDctXzFhQsMieAiEAogRb%2FOZZWDosydn2Ce3TuMM743T16KhquOmMGWEqtTwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtgF8lIFKjk38vW6yrcA0K%2BeBH94%2Bk0GVZrLZTYf0IAMXV1gVRsqoTuCx57TJjU8xVbz9wQWDCbtSRnsoegBr8plPDSd%2ByR29K6SBMPzPJl%2B6AKWT1JfCGOGbEEozRUQuHaVGGpaNgO1qqpECD%2FTXrTPSfHm7FcMAhaaDdiE%2FptDH4KlQNsRDBUCHxVTEp0LYC6drzcD1sR7CEHU%2FcNRwLBQthdXXTr5eGpE4KxANsRAv69D40oiUqEVQQjRZt1pIilrzuQ%2FMXyVVkbD5388UteLWtKes9eIqQ6Qg3BhlIIOgNiAnroJJpCmJkiPz0KH6Gg%2Fnq5zFondZH94MLkZtpHCBNRzsRbVOHZTWhat5exktLVNVJpUcHt7YVqkNObNOl6YDszMSPY5F3o31yybXkkB1fm1G155cGj%2BXIXI5jZNBZJDg484CWBrUjljdQ5LyGmPY6q4AOhoxDU8VbR3mnSOMShXOEIzaI%2BgqxJ%2F%2FyVouL1J03EmdqC0RQcIT8pXppypAN2me1iLQFLiGBD7SXknFXO4MSxhliLX2NEYD2CbclBgN5%2F3k0f2ZYHyRmpHN4O7MomY%2FwIouz4pZzcdc6B8ZeLKqQ561QTeir4mMnL9xn%2BuAUe99imnPCinRrsLrt35jvlJYxP7ssgMPy5sM8GOqUBMXmFQ4f9WJMDyLT5iDQtc3H1Q3Xnze2KLfcsdJhjnqMii1J1DxqNuPlG4pPkQssVG4bBPVjHABb4f23wckYDNVygzw%2Fva6TjWBCCQDq23jxOco%2F%2B5xP%2BiAB39%2BnOkh2YTZFobXGfonw8i%2BvwVBoDHHk9k75uLr1skRIKPQY0dJkkkLgo039zSKtcCTYXcsIvLyFZ06lMKaEgaFzzho3SXJnt6L6R&X-Amz-Signature=93a4893817742003d364e45d488c5117f91e745eb3214468ecd571b28cf86dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNK42WKI%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAN6WAtEhfE5Gh8wU3Nj5k%2FfS2Wc8LjDctXzFhQsMieAiEAogRb%2FOZZWDosydn2Ce3TuMM743T16KhquOmMGWEqtTwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtgF8lIFKjk38vW6yrcA0K%2BeBH94%2Bk0GVZrLZTYf0IAMXV1gVRsqoTuCx57TJjU8xVbz9wQWDCbtSRnsoegBr8plPDSd%2ByR29K6SBMPzPJl%2B6AKWT1JfCGOGbEEozRUQuHaVGGpaNgO1qqpECD%2FTXrTPSfHm7FcMAhaaDdiE%2FptDH4KlQNsRDBUCHxVTEp0LYC6drzcD1sR7CEHU%2FcNRwLBQthdXXTr5eGpE4KxANsRAv69D40oiUqEVQQjRZt1pIilrzuQ%2FMXyVVkbD5388UteLWtKes9eIqQ6Qg3BhlIIOgNiAnroJJpCmJkiPz0KH6Gg%2Fnq5zFondZH94MLkZtpHCBNRzsRbVOHZTWhat5exktLVNVJpUcHt7YVqkNObNOl6YDszMSPY5F3o31yybXkkB1fm1G155cGj%2BXIXI5jZNBZJDg484CWBrUjljdQ5LyGmPY6q4AOhoxDU8VbR3mnSOMShXOEIzaI%2BgqxJ%2F%2FyVouL1J03EmdqC0RQcIT8pXppypAN2me1iLQFLiGBD7SXknFXO4MSxhliLX2NEYD2CbclBgN5%2F3k0f2ZYHyRmpHN4O7MomY%2FwIouz4pZzcdc6B8ZeLKqQ561QTeir4mMnL9xn%2BuAUe99imnPCinRrsLrt35jvlJYxP7ssgMPy5sM8GOqUBMXmFQ4f9WJMDyLT5iDQtc3H1Q3Xnze2KLfcsdJhjnqMii1J1DxqNuPlG4pPkQssVG4bBPVjHABb4f23wckYDNVygzw%2Fva6TjWBCCQDq23jxOco%2F%2B5xP%2BiAB39%2BnOkh2YTZFobXGfonw8i%2BvwVBoDHHk9k75uLr1skRIKPQY0dJkkkLgo039zSKtcCTYXcsIvLyFZ06lMKaEgaFzzho3SXJnt6L6R&X-Amz-Signature=e0dd307ec5763b037fc0d7c7b15034ee74d8225873807baad3f58a069bcebb3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNK42WKI%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAN6WAtEhfE5Gh8wU3Nj5k%2FfS2Wc8LjDctXzFhQsMieAiEAogRb%2FOZZWDosydn2Ce3TuMM743T16KhquOmMGWEqtTwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtgF8lIFKjk38vW6yrcA0K%2BeBH94%2Bk0GVZrLZTYf0IAMXV1gVRsqoTuCx57TJjU8xVbz9wQWDCbtSRnsoegBr8plPDSd%2ByR29K6SBMPzPJl%2B6AKWT1JfCGOGbEEozRUQuHaVGGpaNgO1qqpECD%2FTXrTPSfHm7FcMAhaaDdiE%2FptDH4KlQNsRDBUCHxVTEp0LYC6drzcD1sR7CEHU%2FcNRwLBQthdXXTr5eGpE4KxANsRAv69D40oiUqEVQQjRZt1pIilrzuQ%2FMXyVVkbD5388UteLWtKes9eIqQ6Qg3BhlIIOgNiAnroJJpCmJkiPz0KH6Gg%2Fnq5zFondZH94MLkZtpHCBNRzsRbVOHZTWhat5exktLVNVJpUcHt7YVqkNObNOl6YDszMSPY5F3o31yybXkkB1fm1G155cGj%2BXIXI5jZNBZJDg484CWBrUjljdQ5LyGmPY6q4AOhoxDU8VbR3mnSOMShXOEIzaI%2BgqxJ%2F%2FyVouL1J03EmdqC0RQcIT8pXppypAN2me1iLQFLiGBD7SXknFXO4MSxhliLX2NEYD2CbclBgN5%2F3k0f2ZYHyRmpHN4O7MomY%2FwIouz4pZzcdc6B8ZeLKqQ561QTeir4mMnL9xn%2BuAUe99imnPCinRrsLrt35jvlJYxP7ssgMPy5sM8GOqUBMXmFQ4f9WJMDyLT5iDQtc3H1Q3Xnze2KLfcsdJhjnqMii1J1DxqNuPlG4pPkQssVG4bBPVjHABb4f23wckYDNVygzw%2Fva6TjWBCCQDq23jxOco%2F%2B5xP%2BiAB39%2BnOkh2YTZFobXGfonw8i%2BvwVBoDHHk9k75uLr1skRIKPQY0dJkkkLgo039zSKtcCTYXcsIvLyFZ06lMKaEgaFzzho3SXJnt6L6R&X-Amz-Signature=2a8e80697e756ccdd92a4cbbd96eebdc13d471309f75db04c5e8d95d9352ce18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNK42WKI%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAN6WAtEhfE5Gh8wU3Nj5k%2FfS2Wc8LjDctXzFhQsMieAiEAogRb%2FOZZWDosydn2Ce3TuMM743T16KhquOmMGWEqtTwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtgF8lIFKjk38vW6yrcA0K%2BeBH94%2Bk0GVZrLZTYf0IAMXV1gVRsqoTuCx57TJjU8xVbz9wQWDCbtSRnsoegBr8plPDSd%2ByR29K6SBMPzPJl%2B6AKWT1JfCGOGbEEozRUQuHaVGGpaNgO1qqpECD%2FTXrTPSfHm7FcMAhaaDdiE%2FptDH4KlQNsRDBUCHxVTEp0LYC6drzcD1sR7CEHU%2FcNRwLBQthdXXTr5eGpE4KxANsRAv69D40oiUqEVQQjRZt1pIilrzuQ%2FMXyVVkbD5388UteLWtKes9eIqQ6Qg3BhlIIOgNiAnroJJpCmJkiPz0KH6Gg%2Fnq5zFondZH94MLkZtpHCBNRzsRbVOHZTWhat5exktLVNVJpUcHt7YVqkNObNOl6YDszMSPY5F3o31yybXkkB1fm1G155cGj%2BXIXI5jZNBZJDg484CWBrUjljdQ5LyGmPY6q4AOhoxDU8VbR3mnSOMShXOEIzaI%2BgqxJ%2F%2FyVouL1J03EmdqC0RQcIT8pXppypAN2me1iLQFLiGBD7SXknFXO4MSxhliLX2NEYD2CbclBgN5%2F3k0f2ZYHyRmpHN4O7MomY%2FwIouz4pZzcdc6B8ZeLKqQ561QTeir4mMnL9xn%2BuAUe99imnPCinRrsLrt35jvlJYxP7ssgMPy5sM8GOqUBMXmFQ4f9WJMDyLT5iDQtc3H1Q3Xnze2KLfcsdJhjnqMii1J1DxqNuPlG4pPkQssVG4bBPVjHABb4f23wckYDNVygzw%2Fva6TjWBCCQDq23jxOco%2F%2B5xP%2BiAB39%2BnOkh2YTZFobXGfonw8i%2BvwVBoDHHk9k75uLr1skRIKPQY0dJkkkLgo039zSKtcCTYXcsIvLyFZ06lMKaEgaFzzho3SXJnt6L6R&X-Amz-Signature=19bc0df13fa8ad77b353beee51cfae788031f74f316c4078a34f3ae0c7e210e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
