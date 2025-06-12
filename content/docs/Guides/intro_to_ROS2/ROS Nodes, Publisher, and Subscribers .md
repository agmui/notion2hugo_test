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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SITX3Q5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCFEJRwH4mDeU2qkbd1pwJDfvTOOhZLa8s0Nl2wP7QwzwIgNzeqGG4cdLGLE2wJDMGhdX3rgWlaeK1T8cJjsno5exoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjc6n%2B2sgiahXgJTCrcA8kU8kVd%2BLWubxYd1QRhuoJHw%2BYTqLynSdavrx%2FDZ7o952ptdnL%2FEbgm%2BJqUx5RZEhNvl2hSY%2Fy5qZxcMAvVYlw5NRbzTWLRjP9iLaaSKsx0%2Bkn%2FJX1DQFVcLPtxfwtJBXfyII1zxxILoYPNNTM5wNQZ6WmgikbwuDcv1LRCOP0GUEVIZzIAg1hhiQfCKLynOGK6AuucMy5lVa2I4IAWD6Kz%2B6jq0jwZx%2FiMq7OBkay2KpfhJuOrX6PvP5pqjgdu8fASSqcQYVDSxonkbQ2eqPwLk6jtVL%2B6QGa1MGz3POuDDgw2ZMCcE4r6i86ZDvjWGNKJANr2JUHAOxjH2XbXBCdgKKNqEMLfi1Bi5pBcMbdmsM5Io1vXyfap%2BD8vVRwgUIttpP86SdTL3InISpyhG%2B%2B7XE%2FtePsEprd3TDu%2B6mClJWpNg4Ma2Hzu52f%2Bboq6lZpZaRA%2Fd4BqAa7cW8pDwAYH7yb2PEp77Cnof9l%2Bi1e8ec8iL3FlgEe7b5hICMC1o%2BDuBbOtMdRCzscrAsD3xBjBaLUMNiOggB6Shi%2B87LNv3zE4Rwo8G5qscSMzlJTzYkenWEiIt2Ct%2B1VWoPR30hzTeQOI7VHNXIXNLzOagGn5X7Uf3VdoOx86fhHnMMirq8IGOqUBLkFqOqGbgaa1j2URjsSgccQu2XesFEHpzQbVKNo%2B%2F3C32D%2BoxgLAv1BvJJcDFOVfjpXFfanGGhn3VhxKFpYfYtnQclwkU5eWRSrSxpIHzlWBt2lVvCLWp6T9N037HZUqjhvo1xL6kx769Kcejop2NHuTHfguCAQk%2FQ7%2BWKsCEFW9exZ69RQY2U%2BOeQeW7le%2BOmxlhkwhdbT1n%2BY91y%2FSoKBWQLgi&X-Amz-Signature=9eba398c44482acbdbc8170d89842636dd236154932f74c017e7ab9e500daa51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SITX3Q5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCFEJRwH4mDeU2qkbd1pwJDfvTOOhZLa8s0Nl2wP7QwzwIgNzeqGG4cdLGLE2wJDMGhdX3rgWlaeK1T8cJjsno5exoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjc6n%2B2sgiahXgJTCrcA8kU8kVd%2BLWubxYd1QRhuoJHw%2BYTqLynSdavrx%2FDZ7o952ptdnL%2FEbgm%2BJqUx5RZEhNvl2hSY%2Fy5qZxcMAvVYlw5NRbzTWLRjP9iLaaSKsx0%2Bkn%2FJX1DQFVcLPtxfwtJBXfyII1zxxILoYPNNTM5wNQZ6WmgikbwuDcv1LRCOP0GUEVIZzIAg1hhiQfCKLynOGK6AuucMy5lVa2I4IAWD6Kz%2B6jq0jwZx%2FiMq7OBkay2KpfhJuOrX6PvP5pqjgdu8fASSqcQYVDSxonkbQ2eqPwLk6jtVL%2B6QGa1MGz3POuDDgw2ZMCcE4r6i86ZDvjWGNKJANr2JUHAOxjH2XbXBCdgKKNqEMLfi1Bi5pBcMbdmsM5Io1vXyfap%2BD8vVRwgUIttpP86SdTL3InISpyhG%2B%2B7XE%2FtePsEprd3TDu%2B6mClJWpNg4Ma2Hzu52f%2Bboq6lZpZaRA%2Fd4BqAa7cW8pDwAYH7yb2PEp77Cnof9l%2Bi1e8ec8iL3FlgEe7b5hICMC1o%2BDuBbOtMdRCzscrAsD3xBjBaLUMNiOggB6Shi%2B87LNv3zE4Rwo8G5qscSMzlJTzYkenWEiIt2Ct%2B1VWoPR30hzTeQOI7VHNXIXNLzOagGn5X7Uf3VdoOx86fhHnMMirq8IGOqUBLkFqOqGbgaa1j2URjsSgccQu2XesFEHpzQbVKNo%2B%2F3C32D%2BoxgLAv1BvJJcDFOVfjpXFfanGGhn3VhxKFpYfYtnQclwkU5eWRSrSxpIHzlWBt2lVvCLWp6T9N037HZUqjhvo1xL6kx769Kcejop2NHuTHfguCAQk%2FQ7%2BWKsCEFW9exZ69RQY2U%2BOeQeW7le%2BOmxlhkwhdbT1n%2BY91y%2FSoKBWQLgi&X-Amz-Signature=04348e2718cad37b6d842d063c936fa8f18577bf0244733d2897abc1aca11eba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SITX3Q5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCFEJRwH4mDeU2qkbd1pwJDfvTOOhZLa8s0Nl2wP7QwzwIgNzeqGG4cdLGLE2wJDMGhdX3rgWlaeK1T8cJjsno5exoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjc6n%2B2sgiahXgJTCrcA8kU8kVd%2BLWubxYd1QRhuoJHw%2BYTqLynSdavrx%2FDZ7o952ptdnL%2FEbgm%2BJqUx5RZEhNvl2hSY%2Fy5qZxcMAvVYlw5NRbzTWLRjP9iLaaSKsx0%2Bkn%2FJX1DQFVcLPtxfwtJBXfyII1zxxILoYPNNTM5wNQZ6WmgikbwuDcv1LRCOP0GUEVIZzIAg1hhiQfCKLynOGK6AuucMy5lVa2I4IAWD6Kz%2B6jq0jwZx%2FiMq7OBkay2KpfhJuOrX6PvP5pqjgdu8fASSqcQYVDSxonkbQ2eqPwLk6jtVL%2B6QGa1MGz3POuDDgw2ZMCcE4r6i86ZDvjWGNKJANr2JUHAOxjH2XbXBCdgKKNqEMLfi1Bi5pBcMbdmsM5Io1vXyfap%2BD8vVRwgUIttpP86SdTL3InISpyhG%2B%2B7XE%2FtePsEprd3TDu%2B6mClJWpNg4Ma2Hzu52f%2Bboq6lZpZaRA%2Fd4BqAa7cW8pDwAYH7yb2PEp77Cnof9l%2Bi1e8ec8iL3FlgEe7b5hICMC1o%2BDuBbOtMdRCzscrAsD3xBjBaLUMNiOggB6Shi%2B87LNv3zE4Rwo8G5qscSMzlJTzYkenWEiIt2Ct%2B1VWoPR30hzTeQOI7VHNXIXNLzOagGn5X7Uf3VdoOx86fhHnMMirq8IGOqUBLkFqOqGbgaa1j2URjsSgccQu2XesFEHpzQbVKNo%2B%2F3C32D%2BoxgLAv1BvJJcDFOVfjpXFfanGGhn3VhxKFpYfYtnQclwkU5eWRSrSxpIHzlWBt2lVvCLWp6T9N037HZUqjhvo1xL6kx769Kcejop2NHuTHfguCAQk%2FQ7%2BWKsCEFW9exZ69RQY2U%2BOeQeW7le%2BOmxlhkwhdbT1n%2BY91y%2FSoKBWQLgi&X-Amz-Signature=eb4cdee9ea2f87fdc8c2332c724957ef24dbab690f3afbb0c0545296a711c969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SITX3Q5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCFEJRwH4mDeU2qkbd1pwJDfvTOOhZLa8s0Nl2wP7QwzwIgNzeqGG4cdLGLE2wJDMGhdX3rgWlaeK1T8cJjsno5exoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjc6n%2B2sgiahXgJTCrcA8kU8kVd%2BLWubxYd1QRhuoJHw%2BYTqLynSdavrx%2FDZ7o952ptdnL%2FEbgm%2BJqUx5RZEhNvl2hSY%2Fy5qZxcMAvVYlw5NRbzTWLRjP9iLaaSKsx0%2Bkn%2FJX1DQFVcLPtxfwtJBXfyII1zxxILoYPNNTM5wNQZ6WmgikbwuDcv1LRCOP0GUEVIZzIAg1hhiQfCKLynOGK6AuucMy5lVa2I4IAWD6Kz%2B6jq0jwZx%2FiMq7OBkay2KpfhJuOrX6PvP5pqjgdu8fASSqcQYVDSxonkbQ2eqPwLk6jtVL%2B6QGa1MGz3POuDDgw2ZMCcE4r6i86ZDvjWGNKJANr2JUHAOxjH2XbXBCdgKKNqEMLfi1Bi5pBcMbdmsM5Io1vXyfap%2BD8vVRwgUIttpP86SdTL3InISpyhG%2B%2B7XE%2FtePsEprd3TDu%2B6mClJWpNg4Ma2Hzu52f%2Bboq6lZpZaRA%2Fd4BqAa7cW8pDwAYH7yb2PEp77Cnof9l%2Bi1e8ec8iL3FlgEe7b5hICMC1o%2BDuBbOtMdRCzscrAsD3xBjBaLUMNiOggB6Shi%2B87LNv3zE4Rwo8G5qscSMzlJTzYkenWEiIt2Ct%2B1VWoPR30hzTeQOI7VHNXIXNLzOagGn5X7Uf3VdoOx86fhHnMMirq8IGOqUBLkFqOqGbgaa1j2URjsSgccQu2XesFEHpzQbVKNo%2B%2F3C32D%2BoxgLAv1BvJJcDFOVfjpXFfanGGhn3VhxKFpYfYtnQclwkU5eWRSrSxpIHzlWBt2lVvCLWp6T9N037HZUqjhvo1xL6kx769Kcejop2NHuTHfguCAQk%2FQ7%2BWKsCEFW9exZ69RQY2U%2BOeQeW7le%2BOmxlhkwhdbT1n%2BY91y%2FSoKBWQLgi&X-Amz-Signature=9c0b09558530125775a4585b201c947cda700647f6d80b114047dace1e1bd1da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SITX3Q5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCFEJRwH4mDeU2qkbd1pwJDfvTOOhZLa8s0Nl2wP7QwzwIgNzeqGG4cdLGLE2wJDMGhdX3rgWlaeK1T8cJjsno5exoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjc6n%2B2sgiahXgJTCrcA8kU8kVd%2BLWubxYd1QRhuoJHw%2BYTqLynSdavrx%2FDZ7o952ptdnL%2FEbgm%2BJqUx5RZEhNvl2hSY%2Fy5qZxcMAvVYlw5NRbzTWLRjP9iLaaSKsx0%2Bkn%2FJX1DQFVcLPtxfwtJBXfyII1zxxILoYPNNTM5wNQZ6WmgikbwuDcv1LRCOP0GUEVIZzIAg1hhiQfCKLynOGK6AuucMy5lVa2I4IAWD6Kz%2B6jq0jwZx%2FiMq7OBkay2KpfhJuOrX6PvP5pqjgdu8fASSqcQYVDSxonkbQ2eqPwLk6jtVL%2B6QGa1MGz3POuDDgw2ZMCcE4r6i86ZDvjWGNKJANr2JUHAOxjH2XbXBCdgKKNqEMLfi1Bi5pBcMbdmsM5Io1vXyfap%2BD8vVRwgUIttpP86SdTL3InISpyhG%2B%2B7XE%2FtePsEprd3TDu%2B6mClJWpNg4Ma2Hzu52f%2Bboq6lZpZaRA%2Fd4BqAa7cW8pDwAYH7yb2PEp77Cnof9l%2Bi1e8ec8iL3FlgEe7b5hICMC1o%2BDuBbOtMdRCzscrAsD3xBjBaLUMNiOggB6Shi%2B87LNv3zE4Rwo8G5qscSMzlJTzYkenWEiIt2Ct%2B1VWoPR30hzTeQOI7VHNXIXNLzOagGn5X7Uf3VdoOx86fhHnMMirq8IGOqUBLkFqOqGbgaa1j2URjsSgccQu2XesFEHpzQbVKNo%2B%2F3C32D%2BoxgLAv1BvJJcDFOVfjpXFfanGGhn3VhxKFpYfYtnQclwkU5eWRSrSxpIHzlWBt2lVvCLWp6T9N037HZUqjhvo1xL6kx769Kcejop2NHuTHfguCAQk%2FQ7%2BWKsCEFW9exZ69RQY2U%2BOeQeW7le%2BOmxlhkwhdbT1n%2BY91y%2FSoKBWQLgi&X-Amz-Signature=b3e1744af71e8570deff9d7a6442897081cace60a787f6758f8cbee47a7707ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SITX3Q5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCFEJRwH4mDeU2qkbd1pwJDfvTOOhZLa8s0Nl2wP7QwzwIgNzeqGG4cdLGLE2wJDMGhdX3rgWlaeK1T8cJjsno5exoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjc6n%2B2sgiahXgJTCrcA8kU8kVd%2BLWubxYd1QRhuoJHw%2BYTqLynSdavrx%2FDZ7o952ptdnL%2FEbgm%2BJqUx5RZEhNvl2hSY%2Fy5qZxcMAvVYlw5NRbzTWLRjP9iLaaSKsx0%2Bkn%2FJX1DQFVcLPtxfwtJBXfyII1zxxILoYPNNTM5wNQZ6WmgikbwuDcv1LRCOP0GUEVIZzIAg1hhiQfCKLynOGK6AuucMy5lVa2I4IAWD6Kz%2B6jq0jwZx%2FiMq7OBkay2KpfhJuOrX6PvP5pqjgdu8fASSqcQYVDSxonkbQ2eqPwLk6jtVL%2B6QGa1MGz3POuDDgw2ZMCcE4r6i86ZDvjWGNKJANr2JUHAOxjH2XbXBCdgKKNqEMLfi1Bi5pBcMbdmsM5Io1vXyfap%2BD8vVRwgUIttpP86SdTL3InISpyhG%2B%2B7XE%2FtePsEprd3TDu%2B6mClJWpNg4Ma2Hzu52f%2Bboq6lZpZaRA%2Fd4BqAa7cW8pDwAYH7yb2PEp77Cnof9l%2Bi1e8ec8iL3FlgEe7b5hICMC1o%2BDuBbOtMdRCzscrAsD3xBjBaLUMNiOggB6Shi%2B87LNv3zE4Rwo8G5qscSMzlJTzYkenWEiIt2Ct%2B1VWoPR30hzTeQOI7VHNXIXNLzOagGn5X7Uf3VdoOx86fhHnMMirq8IGOqUBLkFqOqGbgaa1j2URjsSgccQu2XesFEHpzQbVKNo%2B%2F3C32D%2BoxgLAv1BvJJcDFOVfjpXFfanGGhn3VhxKFpYfYtnQclwkU5eWRSrSxpIHzlWBt2lVvCLWp6T9N037HZUqjhvo1xL6kx769Kcejop2NHuTHfguCAQk%2FQ7%2BWKsCEFW9exZ69RQY2U%2BOeQeW7le%2BOmxlhkwhdbT1n%2BY91y%2FSoKBWQLgi&X-Amz-Signature=f6749d4fea759571522122ddb8cecbd478d24625a306f1f09f243128de907c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SITX3Q5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCFEJRwH4mDeU2qkbd1pwJDfvTOOhZLa8s0Nl2wP7QwzwIgNzeqGG4cdLGLE2wJDMGhdX3rgWlaeK1T8cJjsno5exoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjc6n%2B2sgiahXgJTCrcA8kU8kVd%2BLWubxYd1QRhuoJHw%2BYTqLynSdavrx%2FDZ7o952ptdnL%2FEbgm%2BJqUx5RZEhNvl2hSY%2Fy5qZxcMAvVYlw5NRbzTWLRjP9iLaaSKsx0%2Bkn%2FJX1DQFVcLPtxfwtJBXfyII1zxxILoYPNNTM5wNQZ6WmgikbwuDcv1LRCOP0GUEVIZzIAg1hhiQfCKLynOGK6AuucMy5lVa2I4IAWD6Kz%2B6jq0jwZx%2FiMq7OBkay2KpfhJuOrX6PvP5pqjgdu8fASSqcQYVDSxonkbQ2eqPwLk6jtVL%2B6QGa1MGz3POuDDgw2ZMCcE4r6i86ZDvjWGNKJANr2JUHAOxjH2XbXBCdgKKNqEMLfi1Bi5pBcMbdmsM5Io1vXyfap%2BD8vVRwgUIttpP86SdTL3InISpyhG%2B%2B7XE%2FtePsEprd3TDu%2B6mClJWpNg4Ma2Hzu52f%2Bboq6lZpZaRA%2Fd4BqAa7cW8pDwAYH7yb2PEp77Cnof9l%2Bi1e8ec8iL3FlgEe7b5hICMC1o%2BDuBbOtMdRCzscrAsD3xBjBaLUMNiOggB6Shi%2B87LNv3zE4Rwo8G5qscSMzlJTzYkenWEiIt2Ct%2B1VWoPR30hzTeQOI7VHNXIXNLzOagGn5X7Uf3VdoOx86fhHnMMirq8IGOqUBLkFqOqGbgaa1j2URjsSgccQu2XesFEHpzQbVKNo%2B%2F3C32D%2BoxgLAv1BvJJcDFOVfjpXFfanGGhn3VhxKFpYfYtnQclwkU5eWRSrSxpIHzlWBt2lVvCLWp6T9N037HZUqjhvo1xL6kx769Kcejop2NHuTHfguCAQk%2FQ7%2BWKsCEFW9exZ69RQY2U%2BOeQeW7le%2BOmxlhkwhdbT1n%2BY91y%2FSoKBWQLgi&X-Amz-Signature=0e0484b7f0ca8a9c2e4bd7adb1774fed8176abb9770712c1206de6ae25c872f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SITX3Q5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCFEJRwH4mDeU2qkbd1pwJDfvTOOhZLa8s0Nl2wP7QwzwIgNzeqGG4cdLGLE2wJDMGhdX3rgWlaeK1T8cJjsno5exoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjc6n%2B2sgiahXgJTCrcA8kU8kVd%2BLWubxYd1QRhuoJHw%2BYTqLynSdavrx%2FDZ7o952ptdnL%2FEbgm%2BJqUx5RZEhNvl2hSY%2Fy5qZxcMAvVYlw5NRbzTWLRjP9iLaaSKsx0%2Bkn%2FJX1DQFVcLPtxfwtJBXfyII1zxxILoYPNNTM5wNQZ6WmgikbwuDcv1LRCOP0GUEVIZzIAg1hhiQfCKLynOGK6AuucMy5lVa2I4IAWD6Kz%2B6jq0jwZx%2FiMq7OBkay2KpfhJuOrX6PvP5pqjgdu8fASSqcQYVDSxonkbQ2eqPwLk6jtVL%2B6QGa1MGz3POuDDgw2ZMCcE4r6i86ZDvjWGNKJANr2JUHAOxjH2XbXBCdgKKNqEMLfi1Bi5pBcMbdmsM5Io1vXyfap%2BD8vVRwgUIttpP86SdTL3InISpyhG%2B%2B7XE%2FtePsEprd3TDu%2B6mClJWpNg4Ma2Hzu52f%2Bboq6lZpZaRA%2Fd4BqAa7cW8pDwAYH7yb2PEp77Cnof9l%2Bi1e8ec8iL3FlgEe7b5hICMC1o%2BDuBbOtMdRCzscrAsD3xBjBaLUMNiOggB6Shi%2B87LNv3zE4Rwo8G5qscSMzlJTzYkenWEiIt2Ct%2B1VWoPR30hzTeQOI7VHNXIXNLzOagGn5X7Uf3VdoOx86fhHnMMirq8IGOqUBLkFqOqGbgaa1j2URjsSgccQu2XesFEHpzQbVKNo%2B%2F3C32D%2BoxgLAv1BvJJcDFOVfjpXFfanGGhn3VhxKFpYfYtnQclwkU5eWRSrSxpIHzlWBt2lVvCLWp6T9N037HZUqjhvo1xL6kx769Kcejop2NHuTHfguCAQk%2FQ7%2BWKsCEFW9exZ69RQY2U%2BOeQeW7le%2BOmxlhkwhdbT1n%2BY91y%2FSoKBWQLgi&X-Amz-Signature=0db8862494c3303f0b5ba3f2eb1f42737806445f00841386f1b6c1654d411dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
