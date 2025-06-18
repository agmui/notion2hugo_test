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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF2ZWZ4I%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRTeaLZ0AiKLsreVUAvhBrvPp0gFRr94vvTegASxPPigIhAMXotym9v%2F6OVXcNhWs8QL9F%2F9XJt3RZJwmqUUG3sqZIKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLr1G%2BCric9MGShWMq3AN%2F0jmFKJOIkn2uBn3lH4lvdPLUU%2FEfiVsbISlu9cL3gnSLsO9NJVGilkV%2ByKOZw8W7SdGisha7Pf7VuN1Ssoww6PP6G19W61tilr%2BMpyhfhdN1XP%2Bqw3Xwjn3GHsCW2XH6hJJ66olKgR1n2f1gTGKhwqMfDtb6wOEaIOArN0ukx43fM0YKwcpZMnTQ1v13g2V4lK8246re5sxI2SYCCOiAUnEdNzD%2FRGh8wc0QXSusxlH9Qxtc2kJYpnB2u%2F3ooFJM4Fv0TZYq9gUJqSvhwpyWlfO6B7J6OlkP90dXZEQGgMbnW%2FjAcmd7Xfa7%2B4tWp4CAsBEUADdBf7yo1%2FjDm%2FL5RXb16YbeQaCHS0KIG%2BHphkkoFN9TjriqyxOcMm4PyyaB%2FMpMnDFPLcn%2FxjX8UJ4mGRjpQmwkt%2Fkrk7eiQK7Rb8%2FHkAUxu3LxCQYfqel4hFop8aaycrwzxJHDcJlbOqPBA6iG5lYd48lQvxMyTspM%2FO4FjgxaFWSm%2F6VutJ%2BXKNqjZAabniN%2FG7oJ4NTQLYTuv1nwoT28Q%2BCK9HGHQP9xayIYJWo5hglcNmMDT28LGMeiVY7CzPQyIM7EKWkkvAuOhDhwWdGlXjWsQ0VB6oFU49GUZLEPgfbSet64gjCet8rCBjqkAcLMW4yaphWn1XlykjjcyA%2BVxYpMHIxYKDre%2Fkt3uJZHpnlbtwBwTp0VQy7c5IZ5nbpl1kAat%2BS3eNEjd%2B6bV8MiIHOUp3NIFMM9t8D%2BLFd3bJCYCvmdH3yJECKBteSofK0hxPWkV%2FYLBlsGvaH163IJyhC7WUuOpyE%2BrajeI%2BTikbnO3%2Fb0HzdMZeeL8Zca9s4X6gu3TQE0RgyT%2FLOaZsZqrwW8&X-Amz-Signature=ef8b1abe372e7a938f9817441ebe0efe5d2b38c3ee00db420f464d1410a77dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF2ZWZ4I%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRTeaLZ0AiKLsreVUAvhBrvPp0gFRr94vvTegASxPPigIhAMXotym9v%2F6OVXcNhWs8QL9F%2F9XJt3RZJwmqUUG3sqZIKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLr1G%2BCric9MGShWMq3AN%2F0jmFKJOIkn2uBn3lH4lvdPLUU%2FEfiVsbISlu9cL3gnSLsO9NJVGilkV%2ByKOZw8W7SdGisha7Pf7VuN1Ssoww6PP6G19W61tilr%2BMpyhfhdN1XP%2Bqw3Xwjn3GHsCW2XH6hJJ66olKgR1n2f1gTGKhwqMfDtb6wOEaIOArN0ukx43fM0YKwcpZMnTQ1v13g2V4lK8246re5sxI2SYCCOiAUnEdNzD%2FRGh8wc0QXSusxlH9Qxtc2kJYpnB2u%2F3ooFJM4Fv0TZYq9gUJqSvhwpyWlfO6B7J6OlkP90dXZEQGgMbnW%2FjAcmd7Xfa7%2B4tWp4CAsBEUADdBf7yo1%2FjDm%2FL5RXb16YbeQaCHS0KIG%2BHphkkoFN9TjriqyxOcMm4PyyaB%2FMpMnDFPLcn%2FxjX8UJ4mGRjpQmwkt%2Fkrk7eiQK7Rb8%2FHkAUxu3LxCQYfqel4hFop8aaycrwzxJHDcJlbOqPBA6iG5lYd48lQvxMyTspM%2FO4FjgxaFWSm%2F6VutJ%2BXKNqjZAabniN%2FG7oJ4NTQLYTuv1nwoT28Q%2BCK9HGHQP9xayIYJWo5hglcNmMDT28LGMeiVY7CzPQyIM7EKWkkvAuOhDhwWdGlXjWsQ0VB6oFU49GUZLEPgfbSet64gjCet8rCBjqkAcLMW4yaphWn1XlykjjcyA%2BVxYpMHIxYKDre%2Fkt3uJZHpnlbtwBwTp0VQy7c5IZ5nbpl1kAat%2BS3eNEjd%2B6bV8MiIHOUp3NIFMM9t8D%2BLFd3bJCYCvmdH3yJECKBteSofK0hxPWkV%2FYLBlsGvaH163IJyhC7WUuOpyE%2BrajeI%2BTikbnO3%2Fb0HzdMZeeL8Zca9s4X6gu3TQE0RgyT%2FLOaZsZqrwW8&X-Amz-Signature=c3ca9963c86b6fe49f81af4b41ef101d269538f2d09ba590df6c53c66883d924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF2ZWZ4I%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRTeaLZ0AiKLsreVUAvhBrvPp0gFRr94vvTegASxPPigIhAMXotym9v%2F6OVXcNhWs8QL9F%2F9XJt3RZJwmqUUG3sqZIKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLr1G%2BCric9MGShWMq3AN%2F0jmFKJOIkn2uBn3lH4lvdPLUU%2FEfiVsbISlu9cL3gnSLsO9NJVGilkV%2ByKOZw8W7SdGisha7Pf7VuN1Ssoww6PP6G19W61tilr%2BMpyhfhdN1XP%2Bqw3Xwjn3GHsCW2XH6hJJ66olKgR1n2f1gTGKhwqMfDtb6wOEaIOArN0ukx43fM0YKwcpZMnTQ1v13g2V4lK8246re5sxI2SYCCOiAUnEdNzD%2FRGh8wc0QXSusxlH9Qxtc2kJYpnB2u%2F3ooFJM4Fv0TZYq9gUJqSvhwpyWlfO6B7J6OlkP90dXZEQGgMbnW%2FjAcmd7Xfa7%2B4tWp4CAsBEUADdBf7yo1%2FjDm%2FL5RXb16YbeQaCHS0KIG%2BHphkkoFN9TjriqyxOcMm4PyyaB%2FMpMnDFPLcn%2FxjX8UJ4mGRjpQmwkt%2Fkrk7eiQK7Rb8%2FHkAUxu3LxCQYfqel4hFop8aaycrwzxJHDcJlbOqPBA6iG5lYd48lQvxMyTspM%2FO4FjgxaFWSm%2F6VutJ%2BXKNqjZAabniN%2FG7oJ4NTQLYTuv1nwoT28Q%2BCK9HGHQP9xayIYJWo5hglcNmMDT28LGMeiVY7CzPQyIM7EKWkkvAuOhDhwWdGlXjWsQ0VB6oFU49GUZLEPgfbSet64gjCet8rCBjqkAcLMW4yaphWn1XlykjjcyA%2BVxYpMHIxYKDre%2Fkt3uJZHpnlbtwBwTp0VQy7c5IZ5nbpl1kAat%2BS3eNEjd%2B6bV8MiIHOUp3NIFMM9t8D%2BLFd3bJCYCvmdH3yJECKBteSofK0hxPWkV%2FYLBlsGvaH163IJyhC7WUuOpyE%2BrajeI%2BTikbnO3%2Fb0HzdMZeeL8Zca9s4X6gu3TQE0RgyT%2FLOaZsZqrwW8&X-Amz-Signature=40c7a39127efd680b799e8f041f758672841576f6195859b0898aba3693e4869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF2ZWZ4I%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRTeaLZ0AiKLsreVUAvhBrvPp0gFRr94vvTegASxPPigIhAMXotym9v%2F6OVXcNhWs8QL9F%2F9XJt3RZJwmqUUG3sqZIKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLr1G%2BCric9MGShWMq3AN%2F0jmFKJOIkn2uBn3lH4lvdPLUU%2FEfiVsbISlu9cL3gnSLsO9NJVGilkV%2ByKOZw8W7SdGisha7Pf7VuN1Ssoww6PP6G19W61tilr%2BMpyhfhdN1XP%2Bqw3Xwjn3GHsCW2XH6hJJ66olKgR1n2f1gTGKhwqMfDtb6wOEaIOArN0ukx43fM0YKwcpZMnTQ1v13g2V4lK8246re5sxI2SYCCOiAUnEdNzD%2FRGh8wc0QXSusxlH9Qxtc2kJYpnB2u%2F3ooFJM4Fv0TZYq9gUJqSvhwpyWlfO6B7J6OlkP90dXZEQGgMbnW%2FjAcmd7Xfa7%2B4tWp4CAsBEUADdBf7yo1%2FjDm%2FL5RXb16YbeQaCHS0KIG%2BHphkkoFN9TjriqyxOcMm4PyyaB%2FMpMnDFPLcn%2FxjX8UJ4mGRjpQmwkt%2Fkrk7eiQK7Rb8%2FHkAUxu3LxCQYfqel4hFop8aaycrwzxJHDcJlbOqPBA6iG5lYd48lQvxMyTspM%2FO4FjgxaFWSm%2F6VutJ%2BXKNqjZAabniN%2FG7oJ4NTQLYTuv1nwoT28Q%2BCK9HGHQP9xayIYJWo5hglcNmMDT28LGMeiVY7CzPQyIM7EKWkkvAuOhDhwWdGlXjWsQ0VB6oFU49GUZLEPgfbSet64gjCet8rCBjqkAcLMW4yaphWn1XlykjjcyA%2BVxYpMHIxYKDre%2Fkt3uJZHpnlbtwBwTp0VQy7c5IZ5nbpl1kAat%2BS3eNEjd%2B6bV8MiIHOUp3NIFMM9t8D%2BLFd3bJCYCvmdH3yJECKBteSofK0hxPWkV%2FYLBlsGvaH163IJyhC7WUuOpyE%2BrajeI%2BTikbnO3%2Fb0HzdMZeeL8Zca9s4X6gu3TQE0RgyT%2FLOaZsZqrwW8&X-Amz-Signature=b6f58dc4edd10a5aeb49f8b2565300c7cf0f81e7d54636b597705ec9a412c33a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF2ZWZ4I%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRTeaLZ0AiKLsreVUAvhBrvPp0gFRr94vvTegASxPPigIhAMXotym9v%2F6OVXcNhWs8QL9F%2F9XJt3RZJwmqUUG3sqZIKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLr1G%2BCric9MGShWMq3AN%2F0jmFKJOIkn2uBn3lH4lvdPLUU%2FEfiVsbISlu9cL3gnSLsO9NJVGilkV%2ByKOZw8W7SdGisha7Pf7VuN1Ssoww6PP6G19W61tilr%2BMpyhfhdN1XP%2Bqw3Xwjn3GHsCW2XH6hJJ66olKgR1n2f1gTGKhwqMfDtb6wOEaIOArN0ukx43fM0YKwcpZMnTQ1v13g2V4lK8246re5sxI2SYCCOiAUnEdNzD%2FRGh8wc0QXSusxlH9Qxtc2kJYpnB2u%2F3ooFJM4Fv0TZYq9gUJqSvhwpyWlfO6B7J6OlkP90dXZEQGgMbnW%2FjAcmd7Xfa7%2B4tWp4CAsBEUADdBf7yo1%2FjDm%2FL5RXb16YbeQaCHS0KIG%2BHphkkoFN9TjriqyxOcMm4PyyaB%2FMpMnDFPLcn%2FxjX8UJ4mGRjpQmwkt%2Fkrk7eiQK7Rb8%2FHkAUxu3LxCQYfqel4hFop8aaycrwzxJHDcJlbOqPBA6iG5lYd48lQvxMyTspM%2FO4FjgxaFWSm%2F6VutJ%2BXKNqjZAabniN%2FG7oJ4NTQLYTuv1nwoT28Q%2BCK9HGHQP9xayIYJWo5hglcNmMDT28LGMeiVY7CzPQyIM7EKWkkvAuOhDhwWdGlXjWsQ0VB6oFU49GUZLEPgfbSet64gjCet8rCBjqkAcLMW4yaphWn1XlykjjcyA%2BVxYpMHIxYKDre%2Fkt3uJZHpnlbtwBwTp0VQy7c5IZ5nbpl1kAat%2BS3eNEjd%2B6bV8MiIHOUp3NIFMM9t8D%2BLFd3bJCYCvmdH3yJECKBteSofK0hxPWkV%2FYLBlsGvaH163IJyhC7WUuOpyE%2BrajeI%2BTikbnO3%2Fb0HzdMZeeL8Zca9s4X6gu3TQE0RgyT%2FLOaZsZqrwW8&X-Amz-Signature=52a7852c45b58687cfcdf07e409a622bd3056c62d295e390e63c757e47e45fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF2ZWZ4I%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRTeaLZ0AiKLsreVUAvhBrvPp0gFRr94vvTegASxPPigIhAMXotym9v%2F6OVXcNhWs8QL9F%2F9XJt3RZJwmqUUG3sqZIKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLr1G%2BCric9MGShWMq3AN%2F0jmFKJOIkn2uBn3lH4lvdPLUU%2FEfiVsbISlu9cL3gnSLsO9NJVGilkV%2ByKOZw8W7SdGisha7Pf7VuN1Ssoww6PP6G19W61tilr%2BMpyhfhdN1XP%2Bqw3Xwjn3GHsCW2XH6hJJ66olKgR1n2f1gTGKhwqMfDtb6wOEaIOArN0ukx43fM0YKwcpZMnTQ1v13g2V4lK8246re5sxI2SYCCOiAUnEdNzD%2FRGh8wc0QXSusxlH9Qxtc2kJYpnB2u%2F3ooFJM4Fv0TZYq9gUJqSvhwpyWlfO6B7J6OlkP90dXZEQGgMbnW%2FjAcmd7Xfa7%2B4tWp4CAsBEUADdBf7yo1%2FjDm%2FL5RXb16YbeQaCHS0KIG%2BHphkkoFN9TjriqyxOcMm4PyyaB%2FMpMnDFPLcn%2FxjX8UJ4mGRjpQmwkt%2Fkrk7eiQK7Rb8%2FHkAUxu3LxCQYfqel4hFop8aaycrwzxJHDcJlbOqPBA6iG5lYd48lQvxMyTspM%2FO4FjgxaFWSm%2F6VutJ%2BXKNqjZAabniN%2FG7oJ4NTQLYTuv1nwoT28Q%2BCK9HGHQP9xayIYJWo5hglcNmMDT28LGMeiVY7CzPQyIM7EKWkkvAuOhDhwWdGlXjWsQ0VB6oFU49GUZLEPgfbSet64gjCet8rCBjqkAcLMW4yaphWn1XlykjjcyA%2BVxYpMHIxYKDre%2Fkt3uJZHpnlbtwBwTp0VQy7c5IZ5nbpl1kAat%2BS3eNEjd%2B6bV8MiIHOUp3NIFMM9t8D%2BLFd3bJCYCvmdH3yJECKBteSofK0hxPWkV%2FYLBlsGvaH163IJyhC7WUuOpyE%2BrajeI%2BTikbnO3%2Fb0HzdMZeeL8Zca9s4X6gu3TQE0RgyT%2FLOaZsZqrwW8&X-Amz-Signature=bb61a251270b59a46a45ca2aba2fa79f1f7f996769d4ad5976d288e645cc61ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF2ZWZ4I%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRTeaLZ0AiKLsreVUAvhBrvPp0gFRr94vvTegASxPPigIhAMXotym9v%2F6OVXcNhWs8QL9F%2F9XJt3RZJwmqUUG3sqZIKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLr1G%2BCric9MGShWMq3AN%2F0jmFKJOIkn2uBn3lH4lvdPLUU%2FEfiVsbISlu9cL3gnSLsO9NJVGilkV%2ByKOZw8W7SdGisha7Pf7VuN1Ssoww6PP6G19W61tilr%2BMpyhfhdN1XP%2Bqw3Xwjn3GHsCW2XH6hJJ66olKgR1n2f1gTGKhwqMfDtb6wOEaIOArN0ukx43fM0YKwcpZMnTQ1v13g2V4lK8246re5sxI2SYCCOiAUnEdNzD%2FRGh8wc0QXSusxlH9Qxtc2kJYpnB2u%2F3ooFJM4Fv0TZYq9gUJqSvhwpyWlfO6B7J6OlkP90dXZEQGgMbnW%2FjAcmd7Xfa7%2B4tWp4CAsBEUADdBf7yo1%2FjDm%2FL5RXb16YbeQaCHS0KIG%2BHphkkoFN9TjriqyxOcMm4PyyaB%2FMpMnDFPLcn%2FxjX8UJ4mGRjpQmwkt%2Fkrk7eiQK7Rb8%2FHkAUxu3LxCQYfqel4hFop8aaycrwzxJHDcJlbOqPBA6iG5lYd48lQvxMyTspM%2FO4FjgxaFWSm%2F6VutJ%2BXKNqjZAabniN%2FG7oJ4NTQLYTuv1nwoT28Q%2BCK9HGHQP9xayIYJWo5hglcNmMDT28LGMeiVY7CzPQyIM7EKWkkvAuOhDhwWdGlXjWsQ0VB6oFU49GUZLEPgfbSet64gjCet8rCBjqkAcLMW4yaphWn1XlykjjcyA%2BVxYpMHIxYKDre%2Fkt3uJZHpnlbtwBwTp0VQy7c5IZ5nbpl1kAat%2BS3eNEjd%2B6bV8MiIHOUp3NIFMM9t8D%2BLFd3bJCYCvmdH3yJECKBteSofK0hxPWkV%2FYLBlsGvaH163IJyhC7WUuOpyE%2BrajeI%2BTikbnO3%2Fb0HzdMZeeL8Zca9s4X6gu3TQE0RgyT%2FLOaZsZqrwW8&X-Amz-Signature=79bd60031780db0fa5c60686909df9db20aba65fa58e2e2262cc54a04c0d62d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF2ZWZ4I%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRTeaLZ0AiKLsreVUAvhBrvPp0gFRr94vvTegASxPPigIhAMXotym9v%2F6OVXcNhWs8QL9F%2F9XJt3RZJwmqUUG3sqZIKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLr1G%2BCric9MGShWMq3AN%2F0jmFKJOIkn2uBn3lH4lvdPLUU%2FEfiVsbISlu9cL3gnSLsO9NJVGilkV%2ByKOZw8W7SdGisha7Pf7VuN1Ssoww6PP6G19W61tilr%2BMpyhfhdN1XP%2Bqw3Xwjn3GHsCW2XH6hJJ66olKgR1n2f1gTGKhwqMfDtb6wOEaIOArN0ukx43fM0YKwcpZMnTQ1v13g2V4lK8246re5sxI2SYCCOiAUnEdNzD%2FRGh8wc0QXSusxlH9Qxtc2kJYpnB2u%2F3ooFJM4Fv0TZYq9gUJqSvhwpyWlfO6B7J6OlkP90dXZEQGgMbnW%2FjAcmd7Xfa7%2B4tWp4CAsBEUADdBf7yo1%2FjDm%2FL5RXb16YbeQaCHS0KIG%2BHphkkoFN9TjriqyxOcMm4PyyaB%2FMpMnDFPLcn%2FxjX8UJ4mGRjpQmwkt%2Fkrk7eiQK7Rb8%2FHkAUxu3LxCQYfqel4hFop8aaycrwzxJHDcJlbOqPBA6iG5lYd48lQvxMyTspM%2FO4FjgxaFWSm%2F6VutJ%2BXKNqjZAabniN%2FG7oJ4NTQLYTuv1nwoT28Q%2BCK9HGHQP9xayIYJWo5hglcNmMDT28LGMeiVY7CzPQyIM7EKWkkvAuOhDhwWdGlXjWsQ0VB6oFU49GUZLEPgfbSet64gjCet8rCBjqkAcLMW4yaphWn1XlykjjcyA%2BVxYpMHIxYKDre%2Fkt3uJZHpnlbtwBwTp0VQy7c5IZ5nbpl1kAat%2BS3eNEjd%2B6bV8MiIHOUp3NIFMM9t8D%2BLFd3bJCYCvmdH3yJECKBteSofK0hxPWkV%2FYLBlsGvaH163IJyhC7WUuOpyE%2BrajeI%2BTikbnO3%2Fb0HzdMZeeL8Zca9s4X6gu3TQE0RgyT%2FLOaZsZqrwW8&X-Amz-Signature=e8356f9ad6ec1c8e0732572b93636c407273b6e42fed74ee1830fde2d9bff0ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
