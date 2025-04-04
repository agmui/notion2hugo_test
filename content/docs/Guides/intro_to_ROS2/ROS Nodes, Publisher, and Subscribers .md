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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6SSPHJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF47xTnJyTKHF1fkwqqr0yGOoQcKhwHb%2B2ROUMqme%2B4XAiEAq5CslLLua8Pcpx157VdEwUygP1qD5IqZwojnk5fIQIMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDE3PXfWsCob3LMhtKyrcAznUmdXfLEUXppvUmQT3uiUKBEuDOFyBT8xD3NrtvwtkaOLCuyc7kogRuXrxVN8CcxxM1C4lcx7CxKGZEiodr1XiMNO52ofAJT2HCqObQQI%2FmS1Da4xScIB6dIEiEdSvvwwp2atAaob59wtqjEIB9RHzEmYHEoW5AcT0b6qKCExvf4vaGwcxoMaEu4kTS2ienySTj4Hn8vNMrCrCILyfXKDnkYWBgP7t6fQUQGCi0BxaFunpDoy3GYvJI9xxsWif%2BesEnsIO64xy46HvO9eB2e71ncQPD0JKdAq%2BmofOF6L5MhtETRc7cyyfvlIsyVXckoEQyrius4CgPO9zwRnDEdeqW5W7oMaqujx6vFSqLUpWdw8XR0I3cAQkLgwbkqjtnPvmeF1et0Zf9T4U1sdycRsIrcKzLgj0gS7GspVrQMQIVilONjn%2FQMIyREzUh7%2BTh%2B6YO6VdgLIP2l0%2FujlwzPyUf98i62wihDFSBGyl8UC6keyV2LELnjcJLa2xAVTYgr4bDcQjNRHvcOmPMmI6C5UlvlsC5pcf6%2B80qsmIZvWtjhzsb8wnkB6d1Co1h4o%2BmZ20jXNC6gjKEXBsw%2B7keSWO5I1jukVKY0cQyGriFoBJIaMBybP%2F2r3latgtMO%2FuwL8GOqUB0jZ9tqV%2FNBBr3GbUhwN3aF7Acolo3unAgNSHV9xZg0jem%2Bs5DoU14lD7xN%2FESFg%2BkO7KHfrfyNOVjHVXii%2F250WT4HYyNQl7KZeJgTp6hfxeebepWSk1CoBgSjHO455aki5z8vLNMDOEjoxzfvicOYH0AzzV8VY6OWes5L5RaAIXsO1o8glpeR2ryaxABpchdtoXxIKwGKCt25Yo2zZAhVfZ4dAI&X-Amz-Signature=1f0972d8e4aabe683df21b4855dc916b9d89131c85d7d7f4b86a8ecef6d42cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6SSPHJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF47xTnJyTKHF1fkwqqr0yGOoQcKhwHb%2B2ROUMqme%2B4XAiEAq5CslLLua8Pcpx157VdEwUygP1qD5IqZwojnk5fIQIMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDE3PXfWsCob3LMhtKyrcAznUmdXfLEUXppvUmQT3uiUKBEuDOFyBT8xD3NrtvwtkaOLCuyc7kogRuXrxVN8CcxxM1C4lcx7CxKGZEiodr1XiMNO52ofAJT2HCqObQQI%2FmS1Da4xScIB6dIEiEdSvvwwp2atAaob59wtqjEIB9RHzEmYHEoW5AcT0b6qKCExvf4vaGwcxoMaEu4kTS2ienySTj4Hn8vNMrCrCILyfXKDnkYWBgP7t6fQUQGCi0BxaFunpDoy3GYvJI9xxsWif%2BesEnsIO64xy46HvO9eB2e71ncQPD0JKdAq%2BmofOF6L5MhtETRc7cyyfvlIsyVXckoEQyrius4CgPO9zwRnDEdeqW5W7oMaqujx6vFSqLUpWdw8XR0I3cAQkLgwbkqjtnPvmeF1et0Zf9T4U1sdycRsIrcKzLgj0gS7GspVrQMQIVilONjn%2FQMIyREzUh7%2BTh%2B6YO6VdgLIP2l0%2FujlwzPyUf98i62wihDFSBGyl8UC6keyV2LELnjcJLa2xAVTYgr4bDcQjNRHvcOmPMmI6C5UlvlsC5pcf6%2B80qsmIZvWtjhzsb8wnkB6d1Co1h4o%2BmZ20jXNC6gjKEXBsw%2B7keSWO5I1jukVKY0cQyGriFoBJIaMBybP%2F2r3latgtMO%2FuwL8GOqUB0jZ9tqV%2FNBBr3GbUhwN3aF7Acolo3unAgNSHV9xZg0jem%2Bs5DoU14lD7xN%2FESFg%2BkO7KHfrfyNOVjHVXii%2F250WT4HYyNQl7KZeJgTp6hfxeebepWSk1CoBgSjHO455aki5z8vLNMDOEjoxzfvicOYH0AzzV8VY6OWes5L5RaAIXsO1o8glpeR2ryaxABpchdtoXxIKwGKCt25Yo2zZAhVfZ4dAI&X-Amz-Signature=95d9678c0eeb0fcd002474df1b88d8edd191363bf47321ff3a6a809b0fba0bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6SSPHJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF47xTnJyTKHF1fkwqqr0yGOoQcKhwHb%2B2ROUMqme%2B4XAiEAq5CslLLua8Pcpx157VdEwUygP1qD5IqZwojnk5fIQIMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDE3PXfWsCob3LMhtKyrcAznUmdXfLEUXppvUmQT3uiUKBEuDOFyBT8xD3NrtvwtkaOLCuyc7kogRuXrxVN8CcxxM1C4lcx7CxKGZEiodr1XiMNO52ofAJT2HCqObQQI%2FmS1Da4xScIB6dIEiEdSvvwwp2atAaob59wtqjEIB9RHzEmYHEoW5AcT0b6qKCExvf4vaGwcxoMaEu4kTS2ienySTj4Hn8vNMrCrCILyfXKDnkYWBgP7t6fQUQGCi0BxaFunpDoy3GYvJI9xxsWif%2BesEnsIO64xy46HvO9eB2e71ncQPD0JKdAq%2BmofOF6L5MhtETRc7cyyfvlIsyVXckoEQyrius4CgPO9zwRnDEdeqW5W7oMaqujx6vFSqLUpWdw8XR0I3cAQkLgwbkqjtnPvmeF1et0Zf9T4U1sdycRsIrcKzLgj0gS7GspVrQMQIVilONjn%2FQMIyREzUh7%2BTh%2B6YO6VdgLIP2l0%2FujlwzPyUf98i62wihDFSBGyl8UC6keyV2LELnjcJLa2xAVTYgr4bDcQjNRHvcOmPMmI6C5UlvlsC5pcf6%2B80qsmIZvWtjhzsb8wnkB6d1Co1h4o%2BmZ20jXNC6gjKEXBsw%2B7keSWO5I1jukVKY0cQyGriFoBJIaMBybP%2F2r3latgtMO%2FuwL8GOqUB0jZ9tqV%2FNBBr3GbUhwN3aF7Acolo3unAgNSHV9xZg0jem%2Bs5DoU14lD7xN%2FESFg%2BkO7KHfrfyNOVjHVXii%2F250WT4HYyNQl7KZeJgTp6hfxeebepWSk1CoBgSjHO455aki5z8vLNMDOEjoxzfvicOYH0AzzV8VY6OWes5L5RaAIXsO1o8glpeR2ryaxABpchdtoXxIKwGKCt25Yo2zZAhVfZ4dAI&X-Amz-Signature=68aef0559ad58a8f72a13589e9b3d8c7387c399c52b7ffa057ddcffd442a00cd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6SSPHJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF47xTnJyTKHF1fkwqqr0yGOoQcKhwHb%2B2ROUMqme%2B4XAiEAq5CslLLua8Pcpx157VdEwUygP1qD5IqZwojnk5fIQIMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDE3PXfWsCob3LMhtKyrcAznUmdXfLEUXppvUmQT3uiUKBEuDOFyBT8xD3NrtvwtkaOLCuyc7kogRuXrxVN8CcxxM1C4lcx7CxKGZEiodr1XiMNO52ofAJT2HCqObQQI%2FmS1Da4xScIB6dIEiEdSvvwwp2atAaob59wtqjEIB9RHzEmYHEoW5AcT0b6qKCExvf4vaGwcxoMaEu4kTS2ienySTj4Hn8vNMrCrCILyfXKDnkYWBgP7t6fQUQGCi0BxaFunpDoy3GYvJI9xxsWif%2BesEnsIO64xy46HvO9eB2e71ncQPD0JKdAq%2BmofOF6L5MhtETRc7cyyfvlIsyVXckoEQyrius4CgPO9zwRnDEdeqW5W7oMaqujx6vFSqLUpWdw8XR0I3cAQkLgwbkqjtnPvmeF1et0Zf9T4U1sdycRsIrcKzLgj0gS7GspVrQMQIVilONjn%2FQMIyREzUh7%2BTh%2B6YO6VdgLIP2l0%2FujlwzPyUf98i62wihDFSBGyl8UC6keyV2LELnjcJLa2xAVTYgr4bDcQjNRHvcOmPMmI6C5UlvlsC5pcf6%2B80qsmIZvWtjhzsb8wnkB6d1Co1h4o%2BmZ20jXNC6gjKEXBsw%2B7keSWO5I1jukVKY0cQyGriFoBJIaMBybP%2F2r3latgtMO%2FuwL8GOqUB0jZ9tqV%2FNBBr3GbUhwN3aF7Acolo3unAgNSHV9xZg0jem%2Bs5DoU14lD7xN%2FESFg%2BkO7KHfrfyNOVjHVXii%2F250WT4HYyNQl7KZeJgTp6hfxeebepWSk1CoBgSjHO455aki5z8vLNMDOEjoxzfvicOYH0AzzV8VY6OWes5L5RaAIXsO1o8glpeR2ryaxABpchdtoXxIKwGKCt25Yo2zZAhVfZ4dAI&X-Amz-Signature=2a042dc5bce5856c781d1ca34b295c0ad5e7ae57130fbb1d420c13b4250dce47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6SSPHJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF47xTnJyTKHF1fkwqqr0yGOoQcKhwHb%2B2ROUMqme%2B4XAiEAq5CslLLua8Pcpx157VdEwUygP1qD5IqZwojnk5fIQIMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDE3PXfWsCob3LMhtKyrcAznUmdXfLEUXppvUmQT3uiUKBEuDOFyBT8xD3NrtvwtkaOLCuyc7kogRuXrxVN8CcxxM1C4lcx7CxKGZEiodr1XiMNO52ofAJT2HCqObQQI%2FmS1Da4xScIB6dIEiEdSvvwwp2atAaob59wtqjEIB9RHzEmYHEoW5AcT0b6qKCExvf4vaGwcxoMaEu4kTS2ienySTj4Hn8vNMrCrCILyfXKDnkYWBgP7t6fQUQGCi0BxaFunpDoy3GYvJI9xxsWif%2BesEnsIO64xy46HvO9eB2e71ncQPD0JKdAq%2BmofOF6L5MhtETRc7cyyfvlIsyVXckoEQyrius4CgPO9zwRnDEdeqW5W7oMaqujx6vFSqLUpWdw8XR0I3cAQkLgwbkqjtnPvmeF1et0Zf9T4U1sdycRsIrcKzLgj0gS7GspVrQMQIVilONjn%2FQMIyREzUh7%2BTh%2B6YO6VdgLIP2l0%2FujlwzPyUf98i62wihDFSBGyl8UC6keyV2LELnjcJLa2xAVTYgr4bDcQjNRHvcOmPMmI6C5UlvlsC5pcf6%2B80qsmIZvWtjhzsb8wnkB6d1Co1h4o%2BmZ20jXNC6gjKEXBsw%2B7keSWO5I1jukVKY0cQyGriFoBJIaMBybP%2F2r3latgtMO%2FuwL8GOqUB0jZ9tqV%2FNBBr3GbUhwN3aF7Acolo3unAgNSHV9xZg0jem%2Bs5DoU14lD7xN%2FESFg%2BkO7KHfrfyNOVjHVXii%2F250WT4HYyNQl7KZeJgTp6hfxeebepWSk1CoBgSjHO455aki5z8vLNMDOEjoxzfvicOYH0AzzV8VY6OWes5L5RaAIXsO1o8glpeR2ryaxABpchdtoXxIKwGKCt25Yo2zZAhVfZ4dAI&X-Amz-Signature=b047d7877248e514f87b9d4b132d5d6149223a65a7e2ce77ff98fe57241c62e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6SSPHJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF47xTnJyTKHF1fkwqqr0yGOoQcKhwHb%2B2ROUMqme%2B4XAiEAq5CslLLua8Pcpx157VdEwUygP1qD5IqZwojnk5fIQIMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDE3PXfWsCob3LMhtKyrcAznUmdXfLEUXppvUmQT3uiUKBEuDOFyBT8xD3NrtvwtkaOLCuyc7kogRuXrxVN8CcxxM1C4lcx7CxKGZEiodr1XiMNO52ofAJT2HCqObQQI%2FmS1Da4xScIB6dIEiEdSvvwwp2atAaob59wtqjEIB9RHzEmYHEoW5AcT0b6qKCExvf4vaGwcxoMaEu4kTS2ienySTj4Hn8vNMrCrCILyfXKDnkYWBgP7t6fQUQGCi0BxaFunpDoy3GYvJI9xxsWif%2BesEnsIO64xy46HvO9eB2e71ncQPD0JKdAq%2BmofOF6L5MhtETRc7cyyfvlIsyVXckoEQyrius4CgPO9zwRnDEdeqW5W7oMaqujx6vFSqLUpWdw8XR0I3cAQkLgwbkqjtnPvmeF1et0Zf9T4U1sdycRsIrcKzLgj0gS7GspVrQMQIVilONjn%2FQMIyREzUh7%2BTh%2B6YO6VdgLIP2l0%2FujlwzPyUf98i62wihDFSBGyl8UC6keyV2LELnjcJLa2xAVTYgr4bDcQjNRHvcOmPMmI6C5UlvlsC5pcf6%2B80qsmIZvWtjhzsb8wnkB6d1Co1h4o%2BmZ20jXNC6gjKEXBsw%2B7keSWO5I1jukVKY0cQyGriFoBJIaMBybP%2F2r3latgtMO%2FuwL8GOqUB0jZ9tqV%2FNBBr3GbUhwN3aF7Acolo3unAgNSHV9xZg0jem%2Bs5DoU14lD7xN%2FESFg%2BkO7KHfrfyNOVjHVXii%2F250WT4HYyNQl7KZeJgTp6hfxeebepWSk1CoBgSjHO455aki5z8vLNMDOEjoxzfvicOYH0AzzV8VY6OWes5L5RaAIXsO1o8glpeR2ryaxABpchdtoXxIKwGKCt25Yo2zZAhVfZ4dAI&X-Amz-Signature=85ee7955202a4e74bb2a5e80c59a36a67d6b2e8c38a413f0278c6352b4f78f78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6SSPHJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF47xTnJyTKHF1fkwqqr0yGOoQcKhwHb%2B2ROUMqme%2B4XAiEAq5CslLLua8Pcpx157VdEwUygP1qD5IqZwojnk5fIQIMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDE3PXfWsCob3LMhtKyrcAznUmdXfLEUXppvUmQT3uiUKBEuDOFyBT8xD3NrtvwtkaOLCuyc7kogRuXrxVN8CcxxM1C4lcx7CxKGZEiodr1XiMNO52ofAJT2HCqObQQI%2FmS1Da4xScIB6dIEiEdSvvwwp2atAaob59wtqjEIB9RHzEmYHEoW5AcT0b6qKCExvf4vaGwcxoMaEu4kTS2ienySTj4Hn8vNMrCrCILyfXKDnkYWBgP7t6fQUQGCi0BxaFunpDoy3GYvJI9xxsWif%2BesEnsIO64xy46HvO9eB2e71ncQPD0JKdAq%2BmofOF6L5MhtETRc7cyyfvlIsyVXckoEQyrius4CgPO9zwRnDEdeqW5W7oMaqujx6vFSqLUpWdw8XR0I3cAQkLgwbkqjtnPvmeF1et0Zf9T4U1sdycRsIrcKzLgj0gS7GspVrQMQIVilONjn%2FQMIyREzUh7%2BTh%2B6YO6VdgLIP2l0%2FujlwzPyUf98i62wihDFSBGyl8UC6keyV2LELnjcJLa2xAVTYgr4bDcQjNRHvcOmPMmI6C5UlvlsC5pcf6%2B80qsmIZvWtjhzsb8wnkB6d1Co1h4o%2BmZ20jXNC6gjKEXBsw%2B7keSWO5I1jukVKY0cQyGriFoBJIaMBybP%2F2r3latgtMO%2FuwL8GOqUB0jZ9tqV%2FNBBr3GbUhwN3aF7Acolo3unAgNSHV9xZg0jem%2Bs5DoU14lD7xN%2FESFg%2BkO7KHfrfyNOVjHVXii%2F250WT4HYyNQl7KZeJgTp6hfxeebepWSk1CoBgSjHO455aki5z8vLNMDOEjoxzfvicOYH0AzzV8VY6OWes5L5RaAIXsO1o8glpeR2ryaxABpchdtoXxIKwGKCt25Yo2zZAhVfZ4dAI&X-Amz-Signature=13283ec02d9d02e5ab92bb11e18948a2261ba68d456e9262e7be13cbc81af4d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6SSPHJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF47xTnJyTKHF1fkwqqr0yGOoQcKhwHb%2B2ROUMqme%2B4XAiEAq5CslLLua8Pcpx157VdEwUygP1qD5IqZwojnk5fIQIMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDE3PXfWsCob3LMhtKyrcAznUmdXfLEUXppvUmQT3uiUKBEuDOFyBT8xD3NrtvwtkaOLCuyc7kogRuXrxVN8CcxxM1C4lcx7CxKGZEiodr1XiMNO52ofAJT2HCqObQQI%2FmS1Da4xScIB6dIEiEdSvvwwp2atAaob59wtqjEIB9RHzEmYHEoW5AcT0b6qKCExvf4vaGwcxoMaEu4kTS2ienySTj4Hn8vNMrCrCILyfXKDnkYWBgP7t6fQUQGCi0BxaFunpDoy3GYvJI9xxsWif%2BesEnsIO64xy46HvO9eB2e71ncQPD0JKdAq%2BmofOF6L5MhtETRc7cyyfvlIsyVXckoEQyrius4CgPO9zwRnDEdeqW5W7oMaqujx6vFSqLUpWdw8XR0I3cAQkLgwbkqjtnPvmeF1et0Zf9T4U1sdycRsIrcKzLgj0gS7GspVrQMQIVilONjn%2FQMIyREzUh7%2BTh%2B6YO6VdgLIP2l0%2FujlwzPyUf98i62wihDFSBGyl8UC6keyV2LELnjcJLa2xAVTYgr4bDcQjNRHvcOmPMmI6C5UlvlsC5pcf6%2B80qsmIZvWtjhzsb8wnkB6d1Co1h4o%2BmZ20jXNC6gjKEXBsw%2B7keSWO5I1jukVKY0cQyGriFoBJIaMBybP%2F2r3latgtMO%2FuwL8GOqUB0jZ9tqV%2FNBBr3GbUhwN3aF7Acolo3unAgNSHV9xZg0jem%2Bs5DoU14lD7xN%2FESFg%2BkO7KHfrfyNOVjHVXii%2F250WT4HYyNQl7KZeJgTp6hfxeebepWSk1CoBgSjHO455aki5z8vLNMDOEjoxzfvicOYH0AzzV8VY6OWes5L5RaAIXsO1o8glpeR2ryaxABpchdtoXxIKwGKCt25Yo2zZAhVfZ4dAI&X-Amz-Signature=763757846c18a7e19c1512b472c02d45bdee530e662c3a2b8c3bf8dc5d11e1d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
