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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OGGIGPE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHjgkMRl6%2BIsY4VFGxyhKfsLiIs66Gx%2BKW61itvCmQGgAiEAy2WYENfph4k0fySNteAGpxnn4E24byOYWCSahq%2BSv%2F0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUZNMs%2FC0rAKZQVZircA9HCf1r%2Bhe0BfRJNolp3pND88fNDtiXxPFAK%2F6EBP4N%2FnxuPUfSEutM27dEP6DTkvKB45fs9R8Ksqb0ruthEzE7W7RrlWM%2FrpdU3r88DLYHy2Uhz%2BL%2FTjM3L5L%2FET5qrL9Zywuw%2BP3Pofb0xfTdUbVoSsjgB1ZHn4Rfa2drFojShwbIBydO0avnQ4%2B1m2XIOPTyx6GXfn49GhfRa5ms9XuR05PsbUAsEm%2BPQKJw9LNuqFk8TqOWNjMFiBMg4HgRu4y1vex%2FaFlFT4DmOg%2FopxKHN856Qc7iMwysF6%2BsmCZVkTW8PpSNQOkPzwz2pwzW9Swl43P7CVUydWIqzYj8Ht54%2BbbTgVfnfln9rWlP2KWX62GLsJcL%2Fr8k4f%2B%2BbNaxpxcJnSEv0RkoFIEi4Qu3k904%2BgUxWwJ5%2F1NF3Q8fKNuaHXSmaAwBg6SrnUeIPHkY56y9i5GIoKTI0IBo8FdyX4QNo0GnXNnHUjnr3PcxOE%2FQLPlTqnodZrXzqjXWsmqxleiDqj81ZPfeOGx29rnj8H3hWDFPH9kI8ICTSLl89623AhPkKde68LzILbelNDqLEYKet5zw%2Brpvw%2BbjYfolNl%2FuNptqUFUde4yjUOmXcX7LNk68Oh69e%2FjiRuikDMPWpvL4GOqUBcYn6mTg5rEdQdmBazNW3wqJSqDmkJrL1fkeALMLdjBUywHTziPIn6TxoAcPl8CiHi7lmN8wAZUEAat4RL7lex2voZ3gJmRGEui9TPcZwJFeJonPDBYgiNueuIxSVsEvHMZ4MRZStJ6Wu6tCexssZtFg9Gzm4uLxVAmuAsCELuHn%2B5%2BWr5W01wjzbwvHlFT8JkRPxrtihRzzmw7RMKEvetE0w6E%2BY&X-Amz-Signature=e4310291c0aab84f291638efefcf6684f12d8e4de4bdb1ee9576d9d6bd4fbf20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OGGIGPE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHjgkMRl6%2BIsY4VFGxyhKfsLiIs66Gx%2BKW61itvCmQGgAiEAy2WYENfph4k0fySNteAGpxnn4E24byOYWCSahq%2BSv%2F0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUZNMs%2FC0rAKZQVZircA9HCf1r%2Bhe0BfRJNolp3pND88fNDtiXxPFAK%2F6EBP4N%2FnxuPUfSEutM27dEP6DTkvKB45fs9R8Ksqb0ruthEzE7W7RrlWM%2FrpdU3r88DLYHy2Uhz%2BL%2FTjM3L5L%2FET5qrL9Zywuw%2BP3Pofb0xfTdUbVoSsjgB1ZHn4Rfa2drFojShwbIBydO0avnQ4%2B1m2XIOPTyx6GXfn49GhfRa5ms9XuR05PsbUAsEm%2BPQKJw9LNuqFk8TqOWNjMFiBMg4HgRu4y1vex%2FaFlFT4DmOg%2FopxKHN856Qc7iMwysF6%2BsmCZVkTW8PpSNQOkPzwz2pwzW9Swl43P7CVUydWIqzYj8Ht54%2BbbTgVfnfln9rWlP2KWX62GLsJcL%2Fr8k4f%2B%2BbNaxpxcJnSEv0RkoFIEi4Qu3k904%2BgUxWwJ5%2F1NF3Q8fKNuaHXSmaAwBg6SrnUeIPHkY56y9i5GIoKTI0IBo8FdyX4QNo0GnXNnHUjnr3PcxOE%2FQLPlTqnodZrXzqjXWsmqxleiDqj81ZPfeOGx29rnj8H3hWDFPH9kI8ICTSLl89623AhPkKde68LzILbelNDqLEYKet5zw%2Brpvw%2BbjYfolNl%2FuNptqUFUde4yjUOmXcX7LNk68Oh69e%2FjiRuikDMPWpvL4GOqUBcYn6mTg5rEdQdmBazNW3wqJSqDmkJrL1fkeALMLdjBUywHTziPIn6TxoAcPl8CiHi7lmN8wAZUEAat4RL7lex2voZ3gJmRGEui9TPcZwJFeJonPDBYgiNueuIxSVsEvHMZ4MRZStJ6Wu6tCexssZtFg9Gzm4uLxVAmuAsCELuHn%2B5%2BWr5W01wjzbwvHlFT8JkRPxrtihRzzmw7RMKEvetE0w6E%2BY&X-Amz-Signature=5b5eb75050814927c2ab3722939e3fe641a60ffa663a3a5670b7f533f6e46ce8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OGGIGPE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHjgkMRl6%2BIsY4VFGxyhKfsLiIs66Gx%2BKW61itvCmQGgAiEAy2WYENfph4k0fySNteAGpxnn4E24byOYWCSahq%2BSv%2F0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUZNMs%2FC0rAKZQVZircA9HCf1r%2Bhe0BfRJNolp3pND88fNDtiXxPFAK%2F6EBP4N%2FnxuPUfSEutM27dEP6DTkvKB45fs9R8Ksqb0ruthEzE7W7RrlWM%2FrpdU3r88DLYHy2Uhz%2BL%2FTjM3L5L%2FET5qrL9Zywuw%2BP3Pofb0xfTdUbVoSsjgB1ZHn4Rfa2drFojShwbIBydO0avnQ4%2B1m2XIOPTyx6GXfn49GhfRa5ms9XuR05PsbUAsEm%2BPQKJw9LNuqFk8TqOWNjMFiBMg4HgRu4y1vex%2FaFlFT4DmOg%2FopxKHN856Qc7iMwysF6%2BsmCZVkTW8PpSNQOkPzwz2pwzW9Swl43P7CVUydWIqzYj8Ht54%2BbbTgVfnfln9rWlP2KWX62GLsJcL%2Fr8k4f%2B%2BbNaxpxcJnSEv0RkoFIEi4Qu3k904%2BgUxWwJ5%2F1NF3Q8fKNuaHXSmaAwBg6SrnUeIPHkY56y9i5GIoKTI0IBo8FdyX4QNo0GnXNnHUjnr3PcxOE%2FQLPlTqnodZrXzqjXWsmqxleiDqj81ZPfeOGx29rnj8H3hWDFPH9kI8ICTSLl89623AhPkKde68LzILbelNDqLEYKet5zw%2Brpvw%2BbjYfolNl%2FuNptqUFUde4yjUOmXcX7LNk68Oh69e%2FjiRuikDMPWpvL4GOqUBcYn6mTg5rEdQdmBazNW3wqJSqDmkJrL1fkeALMLdjBUywHTziPIn6TxoAcPl8CiHi7lmN8wAZUEAat4RL7lex2voZ3gJmRGEui9TPcZwJFeJonPDBYgiNueuIxSVsEvHMZ4MRZStJ6Wu6tCexssZtFg9Gzm4uLxVAmuAsCELuHn%2B5%2BWr5W01wjzbwvHlFT8JkRPxrtihRzzmw7RMKEvetE0w6E%2BY&X-Amz-Signature=407d66668f96c3cf88a4e72ba8ac3ea794db87045cbb07feb661dff9db0a6d10&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OGGIGPE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHjgkMRl6%2BIsY4VFGxyhKfsLiIs66Gx%2BKW61itvCmQGgAiEAy2WYENfph4k0fySNteAGpxnn4E24byOYWCSahq%2BSv%2F0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUZNMs%2FC0rAKZQVZircA9HCf1r%2Bhe0BfRJNolp3pND88fNDtiXxPFAK%2F6EBP4N%2FnxuPUfSEutM27dEP6DTkvKB45fs9R8Ksqb0ruthEzE7W7RrlWM%2FrpdU3r88DLYHy2Uhz%2BL%2FTjM3L5L%2FET5qrL9Zywuw%2BP3Pofb0xfTdUbVoSsjgB1ZHn4Rfa2drFojShwbIBydO0avnQ4%2B1m2XIOPTyx6GXfn49GhfRa5ms9XuR05PsbUAsEm%2BPQKJw9LNuqFk8TqOWNjMFiBMg4HgRu4y1vex%2FaFlFT4DmOg%2FopxKHN856Qc7iMwysF6%2BsmCZVkTW8PpSNQOkPzwz2pwzW9Swl43P7CVUydWIqzYj8Ht54%2BbbTgVfnfln9rWlP2KWX62GLsJcL%2Fr8k4f%2B%2BbNaxpxcJnSEv0RkoFIEi4Qu3k904%2BgUxWwJ5%2F1NF3Q8fKNuaHXSmaAwBg6SrnUeIPHkY56y9i5GIoKTI0IBo8FdyX4QNo0GnXNnHUjnr3PcxOE%2FQLPlTqnodZrXzqjXWsmqxleiDqj81ZPfeOGx29rnj8H3hWDFPH9kI8ICTSLl89623AhPkKde68LzILbelNDqLEYKet5zw%2Brpvw%2BbjYfolNl%2FuNptqUFUde4yjUOmXcX7LNk68Oh69e%2FjiRuikDMPWpvL4GOqUBcYn6mTg5rEdQdmBazNW3wqJSqDmkJrL1fkeALMLdjBUywHTziPIn6TxoAcPl8CiHi7lmN8wAZUEAat4RL7lex2voZ3gJmRGEui9TPcZwJFeJonPDBYgiNueuIxSVsEvHMZ4MRZStJ6Wu6tCexssZtFg9Gzm4uLxVAmuAsCELuHn%2B5%2BWr5W01wjzbwvHlFT8JkRPxrtihRzzmw7RMKEvetE0w6E%2BY&X-Amz-Signature=b1b97cde00bea6416aa3ee48e4a37fa4e763024c2d0d79e843a9e577f520eb3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OGGIGPE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHjgkMRl6%2BIsY4VFGxyhKfsLiIs66Gx%2BKW61itvCmQGgAiEAy2WYENfph4k0fySNteAGpxnn4E24byOYWCSahq%2BSv%2F0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUZNMs%2FC0rAKZQVZircA9HCf1r%2Bhe0BfRJNolp3pND88fNDtiXxPFAK%2F6EBP4N%2FnxuPUfSEutM27dEP6DTkvKB45fs9R8Ksqb0ruthEzE7W7RrlWM%2FrpdU3r88DLYHy2Uhz%2BL%2FTjM3L5L%2FET5qrL9Zywuw%2BP3Pofb0xfTdUbVoSsjgB1ZHn4Rfa2drFojShwbIBydO0avnQ4%2B1m2XIOPTyx6GXfn49GhfRa5ms9XuR05PsbUAsEm%2BPQKJw9LNuqFk8TqOWNjMFiBMg4HgRu4y1vex%2FaFlFT4DmOg%2FopxKHN856Qc7iMwysF6%2BsmCZVkTW8PpSNQOkPzwz2pwzW9Swl43P7CVUydWIqzYj8Ht54%2BbbTgVfnfln9rWlP2KWX62GLsJcL%2Fr8k4f%2B%2BbNaxpxcJnSEv0RkoFIEi4Qu3k904%2BgUxWwJ5%2F1NF3Q8fKNuaHXSmaAwBg6SrnUeIPHkY56y9i5GIoKTI0IBo8FdyX4QNo0GnXNnHUjnr3PcxOE%2FQLPlTqnodZrXzqjXWsmqxleiDqj81ZPfeOGx29rnj8H3hWDFPH9kI8ICTSLl89623AhPkKde68LzILbelNDqLEYKet5zw%2Brpvw%2BbjYfolNl%2FuNptqUFUde4yjUOmXcX7LNk68Oh69e%2FjiRuikDMPWpvL4GOqUBcYn6mTg5rEdQdmBazNW3wqJSqDmkJrL1fkeALMLdjBUywHTziPIn6TxoAcPl8CiHi7lmN8wAZUEAat4RL7lex2voZ3gJmRGEui9TPcZwJFeJonPDBYgiNueuIxSVsEvHMZ4MRZStJ6Wu6tCexssZtFg9Gzm4uLxVAmuAsCELuHn%2B5%2BWr5W01wjzbwvHlFT8JkRPxrtihRzzmw7RMKEvetE0w6E%2BY&X-Amz-Signature=3108551a4ad2296dab9949046845d182e9dd166186fd5c91b71f9fd22f3061e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OGGIGPE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHjgkMRl6%2BIsY4VFGxyhKfsLiIs66Gx%2BKW61itvCmQGgAiEAy2WYENfph4k0fySNteAGpxnn4E24byOYWCSahq%2BSv%2F0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUZNMs%2FC0rAKZQVZircA9HCf1r%2Bhe0BfRJNolp3pND88fNDtiXxPFAK%2F6EBP4N%2FnxuPUfSEutM27dEP6DTkvKB45fs9R8Ksqb0ruthEzE7W7RrlWM%2FrpdU3r88DLYHy2Uhz%2BL%2FTjM3L5L%2FET5qrL9Zywuw%2BP3Pofb0xfTdUbVoSsjgB1ZHn4Rfa2drFojShwbIBydO0avnQ4%2B1m2XIOPTyx6GXfn49GhfRa5ms9XuR05PsbUAsEm%2BPQKJw9LNuqFk8TqOWNjMFiBMg4HgRu4y1vex%2FaFlFT4DmOg%2FopxKHN856Qc7iMwysF6%2BsmCZVkTW8PpSNQOkPzwz2pwzW9Swl43P7CVUydWIqzYj8Ht54%2BbbTgVfnfln9rWlP2KWX62GLsJcL%2Fr8k4f%2B%2BbNaxpxcJnSEv0RkoFIEi4Qu3k904%2BgUxWwJ5%2F1NF3Q8fKNuaHXSmaAwBg6SrnUeIPHkY56y9i5GIoKTI0IBo8FdyX4QNo0GnXNnHUjnr3PcxOE%2FQLPlTqnodZrXzqjXWsmqxleiDqj81ZPfeOGx29rnj8H3hWDFPH9kI8ICTSLl89623AhPkKde68LzILbelNDqLEYKet5zw%2Brpvw%2BbjYfolNl%2FuNptqUFUde4yjUOmXcX7LNk68Oh69e%2FjiRuikDMPWpvL4GOqUBcYn6mTg5rEdQdmBazNW3wqJSqDmkJrL1fkeALMLdjBUywHTziPIn6TxoAcPl8CiHi7lmN8wAZUEAat4RL7lex2voZ3gJmRGEui9TPcZwJFeJonPDBYgiNueuIxSVsEvHMZ4MRZStJ6Wu6tCexssZtFg9Gzm4uLxVAmuAsCELuHn%2B5%2BWr5W01wjzbwvHlFT8JkRPxrtihRzzmw7RMKEvetE0w6E%2BY&X-Amz-Signature=6cde9b7969d4fe65c0ebc31f1f3fca01929507b9bdbc61b68a17f55448937228&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OGGIGPE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHjgkMRl6%2BIsY4VFGxyhKfsLiIs66Gx%2BKW61itvCmQGgAiEAy2WYENfph4k0fySNteAGpxnn4E24byOYWCSahq%2BSv%2F0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUZNMs%2FC0rAKZQVZircA9HCf1r%2Bhe0BfRJNolp3pND88fNDtiXxPFAK%2F6EBP4N%2FnxuPUfSEutM27dEP6DTkvKB45fs9R8Ksqb0ruthEzE7W7RrlWM%2FrpdU3r88DLYHy2Uhz%2BL%2FTjM3L5L%2FET5qrL9Zywuw%2BP3Pofb0xfTdUbVoSsjgB1ZHn4Rfa2drFojShwbIBydO0avnQ4%2B1m2XIOPTyx6GXfn49GhfRa5ms9XuR05PsbUAsEm%2BPQKJw9LNuqFk8TqOWNjMFiBMg4HgRu4y1vex%2FaFlFT4DmOg%2FopxKHN856Qc7iMwysF6%2BsmCZVkTW8PpSNQOkPzwz2pwzW9Swl43P7CVUydWIqzYj8Ht54%2BbbTgVfnfln9rWlP2KWX62GLsJcL%2Fr8k4f%2B%2BbNaxpxcJnSEv0RkoFIEi4Qu3k904%2BgUxWwJ5%2F1NF3Q8fKNuaHXSmaAwBg6SrnUeIPHkY56y9i5GIoKTI0IBo8FdyX4QNo0GnXNnHUjnr3PcxOE%2FQLPlTqnodZrXzqjXWsmqxleiDqj81ZPfeOGx29rnj8H3hWDFPH9kI8ICTSLl89623AhPkKde68LzILbelNDqLEYKet5zw%2Brpvw%2BbjYfolNl%2FuNptqUFUde4yjUOmXcX7LNk68Oh69e%2FjiRuikDMPWpvL4GOqUBcYn6mTg5rEdQdmBazNW3wqJSqDmkJrL1fkeALMLdjBUywHTziPIn6TxoAcPl8CiHi7lmN8wAZUEAat4RL7lex2voZ3gJmRGEui9TPcZwJFeJonPDBYgiNueuIxSVsEvHMZ4MRZStJ6Wu6tCexssZtFg9Gzm4uLxVAmuAsCELuHn%2B5%2BWr5W01wjzbwvHlFT8JkRPxrtihRzzmw7RMKEvetE0w6E%2BY&X-Amz-Signature=66f1e672fe0c86feac87e1f3db1bfe4ce72a80c84e53b687ea4ae26da26fc306&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OGGIGPE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHjgkMRl6%2BIsY4VFGxyhKfsLiIs66Gx%2BKW61itvCmQGgAiEAy2WYENfph4k0fySNteAGpxnn4E24byOYWCSahq%2BSv%2F0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUZNMs%2FC0rAKZQVZircA9HCf1r%2Bhe0BfRJNolp3pND88fNDtiXxPFAK%2F6EBP4N%2FnxuPUfSEutM27dEP6DTkvKB45fs9R8Ksqb0ruthEzE7W7RrlWM%2FrpdU3r88DLYHy2Uhz%2BL%2FTjM3L5L%2FET5qrL9Zywuw%2BP3Pofb0xfTdUbVoSsjgB1ZHn4Rfa2drFojShwbIBydO0avnQ4%2B1m2XIOPTyx6GXfn49GhfRa5ms9XuR05PsbUAsEm%2BPQKJw9LNuqFk8TqOWNjMFiBMg4HgRu4y1vex%2FaFlFT4DmOg%2FopxKHN856Qc7iMwysF6%2BsmCZVkTW8PpSNQOkPzwz2pwzW9Swl43P7CVUydWIqzYj8Ht54%2BbbTgVfnfln9rWlP2KWX62GLsJcL%2Fr8k4f%2B%2BbNaxpxcJnSEv0RkoFIEi4Qu3k904%2BgUxWwJ5%2F1NF3Q8fKNuaHXSmaAwBg6SrnUeIPHkY56y9i5GIoKTI0IBo8FdyX4QNo0GnXNnHUjnr3PcxOE%2FQLPlTqnodZrXzqjXWsmqxleiDqj81ZPfeOGx29rnj8H3hWDFPH9kI8ICTSLl89623AhPkKde68LzILbelNDqLEYKet5zw%2Brpvw%2BbjYfolNl%2FuNptqUFUde4yjUOmXcX7LNk68Oh69e%2FjiRuikDMPWpvL4GOqUBcYn6mTg5rEdQdmBazNW3wqJSqDmkJrL1fkeALMLdjBUywHTziPIn6TxoAcPl8CiHi7lmN8wAZUEAat4RL7lex2voZ3gJmRGEui9TPcZwJFeJonPDBYgiNueuIxSVsEvHMZ4MRZStJ6Wu6tCexssZtFg9Gzm4uLxVAmuAsCELuHn%2B5%2BWr5W01wjzbwvHlFT8JkRPxrtihRzzmw7RMKEvetE0w6E%2BY&X-Amz-Signature=98f4a1317ea1d70085cf790a8656c654696a644165c09ffa4d222311c1dc8cb9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
