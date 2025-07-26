---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-01-28T20:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 142
toc: false
icon: ""
---

The basic building blocks of ROS are nodes. (referred to as ROS Nodes)

Here is a more in-depth description if interested: [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/ready-for-ros/ros-overview#2-nodes)

Think of them as online accounts where any node can publish posts to some topic and any account can subscribe to any topic to receive updates on new posts.

![Topic-SinglePublisherandSingleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-SinglePublisherandSingleSubscriber.gif)

![Topic-MultiplePublisherandMultipleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-MultiplePublisherandMultipleSubscriber.gif)

Let's create a basic example of one publisher node and one subscriber node.

All the publisher will do is send the message `Hello World` over and over again to a topic and the subscriber node will listen to the topic and print out the result.

# Publisher

create a file called `publisher.py` 

inside import the `ROS` libraries:

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

Then create a class called `MinimalPublisher` and have it extend the `Node` class we imported.

Then in the constructor, we first run the parent class’s constructor, `Node`, with:

The string we pass in is the name of the node

```python
        super().__init__("minimal_publisher")
```

Then we create a publisher object and a timer object:

```python
        self.publisher_ = self.create_publisher(String, "my_topic", 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
```

The publisher object is what actually sends the message `"Hello World"` to the topic `my_topic` it takes in the message type, the topic to publish to, and its QoS profile (don't worry about this).

The timer object is to call the function `timer_callback` every 0.5 seconds.

Now let us create the function `timer_callback` and have it send `"Hello World"`

```python
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = "Hello World"                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info("Publishing: " + msg.data)   # print msg
```

We first create a `msg` object and fill it with the string `"Hello World"`

Then we actually publish the `msg` with `self.publisher_.publish(msg)`

finally we printout `self.get_logger().info("Publishing: " + msg.data)`

To run the node go outside of the class and add the following

```python
def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()

# makes it so that it only runs the main function
# when the file is being called directly
if __name__ == '__main__': 
    main()
```

## Solution

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

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

run with: `python3 publisher.py` in the terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBG7364F%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHRR4cJ%2FG%2BGJRaaJvpETvjHIr1QXjny9xfI0lXvCiuJfAiEA1yzwV0WM5mlU9mld5Io2u8Bhp8AdrYx3zVxGzTi2TzQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDI5921eGbZ%2BlTNfdLircA2tDBSbc9lNWKIKAG0snGnWnjlNLnrfdHT2KTDvGOrwUBSC8xPABPP2i8oyUHjo42C7VFFiNVKWarV9a2IyPVrrtyLfabxfl62YXKCYnkXntUu0Mj8P8ZnusB08thfee1Xw3cWq8HOQ3hxhRaxbxRgqkbS%2Fy2bR3nX%2BwfMvrTW4YszmwrUt8EQWs2DmPEJnwi1JZmhjAZq5iG6TGmOU0XxpYlHcQDjq1Wt1MapVcwOJJosHL9aH6THuhQdSUU%2Fe9XyYPtp25CbLNRsUg4nj%2FYNl%2BmCEPUGPTKtEpf5B5o6giKzujpmsQ1Osw8Lssx8AY6O514TtiM%2F2Auy70MEmTGjcHzYplcYcsqZ0jT2tl0CZMayRAavt4Un%2FCtHAhkE1kKOqWUgq187hDPPc0vkHCM75cPe0TwK%2BX2QBwdD21UBJhw%2BECxG9mGrwjETeV46pJetb7FKd8Vedk70pe7j082yAs0hNhwpg0yCxli7eb0EUWTM1NT%2F9jLYPh6OcMPkvtyB9i8no2Tp6H0KrT98EGc%2FVpXAnlrr3CZszNsllTZmMUIYPY1%2BhrPauwMeDkpIsUKJeBXfC61k5UxDQ%2BTRq7YhY68Qz6%2FMDPtcFhFmK7%2FIVJUAqLHsBPI%2BO8xqk4MJfBk8QGOqUBGNYw4za2FYKlzUWD4hmN8X9djiidpS2W%2FCvR0mvFvbnIpS2NPvEUFMuNspooM%2FW19ITyEw48XCN5Ir0E592bDz6ttMHow44vQT5AIsIB2PFiNZsLsFq60A7XnSXo%2BOnRUdksAlIu%2FS5SplJE0yoec5axP7AYtPqWTOtlEa9gQOGoKnn7FBKndzf%2BjrAgkrjsdr3tkOhypB4VG08zDajRBa3VspEg&X-Amz-Signature=593019abfd4f339d070c22ba8a144e3dfe9e46110954799cb7b692308cf48f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To stop the programs do `ctrl+c`

# Subscribers

create a file called `subscriber.py` and paste the following

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(String, 'my_topic', self.listener_callback, 10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main():
    rclpy.init()                                # initializes the rclpy library

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Then while running `python3` [`publisher.py`](http://publisher.py/)open a new terminal and run: `python3 subscriber.py` 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBG7364F%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHRR4cJ%2FG%2BGJRaaJvpETvjHIr1QXjny9xfI0lXvCiuJfAiEA1yzwV0WM5mlU9mld5Io2u8Bhp8AdrYx3zVxGzTi2TzQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDI5921eGbZ%2BlTNfdLircA2tDBSbc9lNWKIKAG0snGnWnjlNLnrfdHT2KTDvGOrwUBSC8xPABPP2i8oyUHjo42C7VFFiNVKWarV9a2IyPVrrtyLfabxfl62YXKCYnkXntUu0Mj8P8ZnusB08thfee1Xw3cWq8HOQ3hxhRaxbxRgqkbS%2Fy2bR3nX%2BwfMvrTW4YszmwrUt8EQWs2DmPEJnwi1JZmhjAZq5iG6TGmOU0XxpYlHcQDjq1Wt1MapVcwOJJosHL9aH6THuhQdSUU%2Fe9XyYPtp25CbLNRsUg4nj%2FYNl%2BmCEPUGPTKtEpf5B5o6giKzujpmsQ1Osw8Lssx8AY6O514TtiM%2F2Auy70MEmTGjcHzYplcYcsqZ0jT2tl0CZMayRAavt4Un%2FCtHAhkE1kKOqWUgq187hDPPc0vkHCM75cPe0TwK%2BX2QBwdD21UBJhw%2BECxG9mGrwjETeV46pJetb7FKd8Vedk70pe7j082yAs0hNhwpg0yCxli7eb0EUWTM1NT%2F9jLYPh6OcMPkvtyB9i8no2Tp6H0KrT98EGc%2FVpXAnlrr3CZszNsllTZmMUIYPY1%2BhrPauwMeDkpIsUKJeBXfC61k5UxDQ%2BTRq7YhY68Qz6%2FMDPtcFhFmK7%2FIVJUAqLHsBPI%2BO8xqk4MJfBk8QGOqUBGNYw4za2FYKlzUWD4hmN8X9djiidpS2W%2FCvR0mvFvbnIpS2NPvEUFMuNspooM%2FW19ITyEw48XCN5Ir0E592bDz6ttMHow44vQT5AIsIB2PFiNZsLsFq60A7XnSXo%2BOnRUdksAlIu%2FS5SplJE0yoec5axP7AYtPqWTOtlEa9gQOGoKnn7FBKndzf%2BjrAgkrjsdr3tkOhypB4VG08zDajRBa3VspEg&X-Amz-Signature=e94d23b63346c8fa0c710b1296863920ae4f3ed079f141f008edf90503fafeaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBG7364F%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHRR4cJ%2FG%2BGJRaaJvpETvjHIr1QXjny9xfI0lXvCiuJfAiEA1yzwV0WM5mlU9mld5Io2u8Bhp8AdrYx3zVxGzTi2TzQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDI5921eGbZ%2BlTNfdLircA2tDBSbc9lNWKIKAG0snGnWnjlNLnrfdHT2KTDvGOrwUBSC8xPABPP2i8oyUHjo42C7VFFiNVKWarV9a2IyPVrrtyLfabxfl62YXKCYnkXntUu0Mj8P8ZnusB08thfee1Xw3cWq8HOQ3hxhRaxbxRgqkbS%2Fy2bR3nX%2BwfMvrTW4YszmwrUt8EQWs2DmPEJnwi1JZmhjAZq5iG6TGmOU0XxpYlHcQDjq1Wt1MapVcwOJJosHL9aH6THuhQdSUU%2Fe9XyYPtp25CbLNRsUg4nj%2FYNl%2BmCEPUGPTKtEpf5B5o6giKzujpmsQ1Osw8Lssx8AY6O514TtiM%2F2Auy70MEmTGjcHzYplcYcsqZ0jT2tl0CZMayRAavt4Un%2FCtHAhkE1kKOqWUgq187hDPPc0vkHCM75cPe0TwK%2BX2QBwdD21UBJhw%2BECxG9mGrwjETeV46pJetb7FKd8Vedk70pe7j082yAs0hNhwpg0yCxli7eb0EUWTM1NT%2F9jLYPh6OcMPkvtyB9i8no2Tp6H0KrT98EGc%2FVpXAnlrr3CZszNsllTZmMUIYPY1%2BhrPauwMeDkpIsUKJeBXfC61k5UxDQ%2BTRq7YhY68Qz6%2FMDPtcFhFmK7%2FIVJUAqLHsBPI%2BO8xqk4MJfBk8QGOqUBGNYw4za2FYKlzUWD4hmN8X9djiidpS2W%2FCvR0mvFvbnIpS2NPvEUFMuNspooM%2FW19ITyEw48XCN5Ir0E592bDz6ttMHow44vQT5AIsIB2PFiNZsLsFq60A7XnSXo%2BOnRUdksAlIu%2FS5SplJE0yoec5axP7AYtPqWTOtlEa9gQOGoKnn7FBKndzf%2BjrAgkrjsdr3tkOhypB4VG08zDajRBa3VspEg&X-Amz-Signature=8fa8c22ee929ed4c6dba6293fd80333f6011ddbc17a4ac5655b1815a1ad49661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBG7364F%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHRR4cJ%2FG%2BGJRaaJvpETvjHIr1QXjny9xfI0lXvCiuJfAiEA1yzwV0WM5mlU9mld5Io2u8Bhp8AdrYx3zVxGzTi2TzQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDI5921eGbZ%2BlTNfdLircA2tDBSbc9lNWKIKAG0snGnWnjlNLnrfdHT2KTDvGOrwUBSC8xPABPP2i8oyUHjo42C7VFFiNVKWarV9a2IyPVrrtyLfabxfl62YXKCYnkXntUu0Mj8P8ZnusB08thfee1Xw3cWq8HOQ3hxhRaxbxRgqkbS%2Fy2bR3nX%2BwfMvrTW4YszmwrUt8EQWs2DmPEJnwi1JZmhjAZq5iG6TGmOU0XxpYlHcQDjq1Wt1MapVcwOJJosHL9aH6THuhQdSUU%2Fe9XyYPtp25CbLNRsUg4nj%2FYNl%2BmCEPUGPTKtEpf5B5o6giKzujpmsQ1Osw8Lssx8AY6O514TtiM%2F2Auy70MEmTGjcHzYplcYcsqZ0jT2tl0CZMayRAavt4Un%2FCtHAhkE1kKOqWUgq187hDPPc0vkHCM75cPe0TwK%2BX2QBwdD21UBJhw%2BECxG9mGrwjETeV46pJetb7FKd8Vedk70pe7j082yAs0hNhwpg0yCxli7eb0EUWTM1NT%2F9jLYPh6OcMPkvtyB9i8no2Tp6H0KrT98EGc%2FVpXAnlrr3CZszNsllTZmMUIYPY1%2BhrPauwMeDkpIsUKJeBXfC61k5UxDQ%2BTRq7YhY68Qz6%2FMDPtcFhFmK7%2FIVJUAqLHsBPI%2BO8xqk4MJfBk8QGOqUBGNYw4za2FYKlzUWD4hmN8X9djiidpS2W%2FCvR0mvFvbnIpS2NPvEUFMuNspooM%2FW19ITyEw48XCN5Ir0E592bDz6ttMHow44vQT5AIsIB2PFiNZsLsFq60A7XnSXo%2BOnRUdksAlIu%2FS5SplJE0yoec5axP7AYtPqWTOtlEa9gQOGoKnn7FBKndzf%2BjrAgkrjsdr3tkOhypB4VG08zDajRBa3VspEg&X-Amz-Signature=983f82c71855f7128beb5691b569bb65b5f29a4cdcd0a3fb0933e8ab60e99fb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBG7364F%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHRR4cJ%2FG%2BGJRaaJvpETvjHIr1QXjny9xfI0lXvCiuJfAiEA1yzwV0WM5mlU9mld5Io2u8Bhp8AdrYx3zVxGzTi2TzQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDI5921eGbZ%2BlTNfdLircA2tDBSbc9lNWKIKAG0snGnWnjlNLnrfdHT2KTDvGOrwUBSC8xPABPP2i8oyUHjo42C7VFFiNVKWarV9a2IyPVrrtyLfabxfl62YXKCYnkXntUu0Mj8P8ZnusB08thfee1Xw3cWq8HOQ3hxhRaxbxRgqkbS%2Fy2bR3nX%2BwfMvrTW4YszmwrUt8EQWs2DmPEJnwi1JZmhjAZq5iG6TGmOU0XxpYlHcQDjq1Wt1MapVcwOJJosHL9aH6THuhQdSUU%2Fe9XyYPtp25CbLNRsUg4nj%2FYNl%2BmCEPUGPTKtEpf5B5o6giKzujpmsQ1Osw8Lssx8AY6O514TtiM%2F2Auy70MEmTGjcHzYplcYcsqZ0jT2tl0CZMayRAavt4Un%2FCtHAhkE1kKOqWUgq187hDPPc0vkHCM75cPe0TwK%2BX2QBwdD21UBJhw%2BECxG9mGrwjETeV46pJetb7FKd8Vedk70pe7j082yAs0hNhwpg0yCxli7eb0EUWTM1NT%2F9jLYPh6OcMPkvtyB9i8no2Tp6H0KrT98EGc%2FVpXAnlrr3CZszNsllTZmMUIYPY1%2BhrPauwMeDkpIsUKJeBXfC61k5UxDQ%2BTRq7YhY68Qz6%2FMDPtcFhFmK7%2FIVJUAqLHsBPI%2BO8xqk4MJfBk8QGOqUBGNYw4za2FYKlzUWD4hmN8X9djiidpS2W%2FCvR0mvFvbnIpS2NPvEUFMuNspooM%2FW19ITyEw48XCN5Ir0E592bDz6ttMHow44vQT5AIsIB2PFiNZsLsFq60A7XnSXo%2BOnRUdksAlIu%2FS5SplJE0yoec5axP7AYtPqWTOtlEa9gQOGoKnn7FBKndzf%2BjrAgkrjsdr3tkOhypB4VG08zDajRBa3VspEg&X-Amz-Signature=112795b77c471ac5abf542fe23e7f431b4a788a22a692dba4174be48870353aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBG7364F%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHRR4cJ%2FG%2BGJRaaJvpETvjHIr1QXjny9xfI0lXvCiuJfAiEA1yzwV0WM5mlU9mld5Io2u8Bhp8AdrYx3zVxGzTi2TzQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDI5921eGbZ%2BlTNfdLircA2tDBSbc9lNWKIKAG0snGnWnjlNLnrfdHT2KTDvGOrwUBSC8xPABPP2i8oyUHjo42C7VFFiNVKWarV9a2IyPVrrtyLfabxfl62YXKCYnkXntUu0Mj8P8ZnusB08thfee1Xw3cWq8HOQ3hxhRaxbxRgqkbS%2Fy2bR3nX%2BwfMvrTW4YszmwrUt8EQWs2DmPEJnwi1JZmhjAZq5iG6TGmOU0XxpYlHcQDjq1Wt1MapVcwOJJosHL9aH6THuhQdSUU%2Fe9XyYPtp25CbLNRsUg4nj%2FYNl%2BmCEPUGPTKtEpf5B5o6giKzujpmsQ1Osw8Lssx8AY6O514TtiM%2F2Auy70MEmTGjcHzYplcYcsqZ0jT2tl0CZMayRAavt4Un%2FCtHAhkE1kKOqWUgq187hDPPc0vkHCM75cPe0TwK%2BX2QBwdD21UBJhw%2BECxG9mGrwjETeV46pJetb7FKd8Vedk70pe7j082yAs0hNhwpg0yCxli7eb0EUWTM1NT%2F9jLYPh6OcMPkvtyB9i8no2Tp6H0KrT98EGc%2FVpXAnlrr3CZszNsllTZmMUIYPY1%2BhrPauwMeDkpIsUKJeBXfC61k5UxDQ%2BTRq7YhY68Qz6%2FMDPtcFhFmK7%2FIVJUAqLHsBPI%2BO8xqk4MJfBk8QGOqUBGNYw4za2FYKlzUWD4hmN8X9djiidpS2W%2FCvR0mvFvbnIpS2NPvEUFMuNspooM%2FW19ITyEw48XCN5Ir0E592bDz6ttMHow44vQT5AIsIB2PFiNZsLsFq60A7XnSXo%2BOnRUdksAlIu%2FS5SplJE0yoec5axP7AYtPqWTOtlEa9gQOGoKnn7FBKndzf%2BjrAgkrjsdr3tkOhypB4VG08zDajRBa3VspEg&X-Amz-Signature=f1ef94d3ca20f061528ae4eb3ed2ef74c872eaf9da8267a121cd90c4648afcca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBG7364F%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHRR4cJ%2FG%2BGJRaaJvpETvjHIr1QXjny9xfI0lXvCiuJfAiEA1yzwV0WM5mlU9mld5Io2u8Bhp8AdrYx3zVxGzTi2TzQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDI5921eGbZ%2BlTNfdLircA2tDBSbc9lNWKIKAG0snGnWnjlNLnrfdHT2KTDvGOrwUBSC8xPABPP2i8oyUHjo42C7VFFiNVKWarV9a2IyPVrrtyLfabxfl62YXKCYnkXntUu0Mj8P8ZnusB08thfee1Xw3cWq8HOQ3hxhRaxbxRgqkbS%2Fy2bR3nX%2BwfMvrTW4YszmwrUt8EQWs2DmPEJnwi1JZmhjAZq5iG6TGmOU0XxpYlHcQDjq1Wt1MapVcwOJJosHL9aH6THuhQdSUU%2Fe9XyYPtp25CbLNRsUg4nj%2FYNl%2BmCEPUGPTKtEpf5B5o6giKzujpmsQ1Osw8Lssx8AY6O514TtiM%2F2Auy70MEmTGjcHzYplcYcsqZ0jT2tl0CZMayRAavt4Un%2FCtHAhkE1kKOqWUgq187hDPPc0vkHCM75cPe0TwK%2BX2QBwdD21UBJhw%2BECxG9mGrwjETeV46pJetb7FKd8Vedk70pe7j082yAs0hNhwpg0yCxli7eb0EUWTM1NT%2F9jLYPh6OcMPkvtyB9i8no2Tp6H0KrT98EGc%2FVpXAnlrr3CZszNsllTZmMUIYPY1%2BhrPauwMeDkpIsUKJeBXfC61k5UxDQ%2BTRq7YhY68Qz6%2FMDPtcFhFmK7%2FIVJUAqLHsBPI%2BO8xqk4MJfBk8QGOqUBGNYw4za2FYKlzUWD4hmN8X9djiidpS2W%2FCvR0mvFvbnIpS2NPvEUFMuNspooM%2FW19ITyEw48XCN5Ir0E592bDz6ttMHow44vQT5AIsIB2PFiNZsLsFq60A7XnSXo%2BOnRUdksAlIu%2FS5SplJE0yoec5axP7AYtPqWTOtlEa9gQOGoKnn7FBKndzf%2BjrAgkrjsdr3tkOhypB4VG08zDajRBa3VspEg&X-Amz-Signature=534a719be6abf0f36e9d7480a849118946c36041751c42381ef9ae074e722ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBG7364F%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHRR4cJ%2FG%2BGJRaaJvpETvjHIr1QXjny9xfI0lXvCiuJfAiEA1yzwV0WM5mlU9mld5Io2u8Bhp8AdrYx3zVxGzTi2TzQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDI5921eGbZ%2BlTNfdLircA2tDBSbc9lNWKIKAG0snGnWnjlNLnrfdHT2KTDvGOrwUBSC8xPABPP2i8oyUHjo42C7VFFiNVKWarV9a2IyPVrrtyLfabxfl62YXKCYnkXntUu0Mj8P8ZnusB08thfee1Xw3cWq8HOQ3hxhRaxbxRgqkbS%2Fy2bR3nX%2BwfMvrTW4YszmwrUt8EQWs2DmPEJnwi1JZmhjAZq5iG6TGmOU0XxpYlHcQDjq1Wt1MapVcwOJJosHL9aH6THuhQdSUU%2Fe9XyYPtp25CbLNRsUg4nj%2FYNl%2BmCEPUGPTKtEpf5B5o6giKzujpmsQ1Osw8Lssx8AY6O514TtiM%2F2Auy70MEmTGjcHzYplcYcsqZ0jT2tl0CZMayRAavt4Un%2FCtHAhkE1kKOqWUgq187hDPPc0vkHCM75cPe0TwK%2BX2QBwdD21UBJhw%2BECxG9mGrwjETeV46pJetb7FKd8Vedk70pe7j082yAs0hNhwpg0yCxli7eb0EUWTM1NT%2F9jLYPh6OcMPkvtyB9i8no2Tp6H0KrT98EGc%2FVpXAnlrr3CZszNsllTZmMUIYPY1%2BhrPauwMeDkpIsUKJeBXfC61k5UxDQ%2BTRq7YhY68Qz6%2FMDPtcFhFmK7%2FIVJUAqLHsBPI%2BO8xqk4MJfBk8QGOqUBGNYw4za2FYKlzUWD4hmN8X9djiidpS2W%2FCvR0mvFvbnIpS2NPvEUFMuNspooM%2FW19ITyEw48XCN5Ir0E592bDz6ttMHow44vQT5AIsIB2PFiNZsLsFq60A7XnSXo%2BOnRUdksAlIu%2FS5SplJE0yoec5axP7AYtPqWTOtlEa9gQOGoKnn7FBKndzf%2BjrAgkrjsdr3tkOhypB4VG08zDajRBa3VspEg&X-Amz-Signature=20121b21fd7722c47df2b3c71b1e95d216b4892fae9cde6a4f0c4cf1f1928424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
