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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO4BNZR6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gP%2BjD6oMpUOxZRlw6HdsgXrf8mihFuVVpVvgNXMqfQIhAKO1PeImWE8n3pzu6gvFC4%2Fm3ADWfbtVYWXM7jyUSHveKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV7jXjVcQl28MAfRUq3AP4kxhDNbP7meclg3%2B5R4%2FQQAVBYlZvVgDv05DRsDYbHE5kI2SiQrEnIn0iNF4AOrvsSW%2FIkGDauIUUqUShTjG1O%2FGNONzT0MCA%2BpYCDS9r%2FPEEDunFICxfpgKGygw6CGq1VO94IJHbMLFY13qyhfchQmZMZAqtN8paaGsJAaZCL%2Bzo9oXkoAD774tJUuy%2FePWPCmyOGtrObGv7mAC7hhjpV6i62lCAZlexciexNLZLMx9aS68EozF%2FS84ZDh%2BtuQ6QIV8T9btSftO%2BfCLoO1UX9ArIV4p3FasVrG60YPTC%2Broai8qT6faghtwTuZ2IKlcgSRzDTEqVBGqPEvSkwTkLjBFvbeG4jGokkryC%2FD0jHZSPt3LaMPtbdo5hQwOv7Fk2MZ%2BF8aYItr5Su6YKPhi8HijjsR1ACHtB1Oo7FdxVOtL%2FVH0AwCMPjhhBKZRfBRqJho4zHCY04sFFl%2FDwuAUXsulDTorm%2BsVDBKTHynTL279OoMM0yOoIGu4uXkMsUU%2FUnQRL3WA3BYrhLOgG%2B1Yx%2BqGbjZ0El9K7VZYwwQ1ipj%2FNJdWDcwQ%2BDxA8vfNzm0ZEGflc6cbuSZgmpEGvLXiRDxe%2FoasY3rSXefjzkIioBoQIEPx21uTAjXPQ6TD0oPvABjqkARJCJxs40lyo%2B9LLvpgBoa5uDyY%2B0idp0GviDljETmQ0T3dWFVEYc%2B1%2BVVkN7JYXxV7lWtJmSOHvVdLXkfFyQ9NFEXzdtJiz9PehXpNlyNjMGY6Kh6tNi6u%2F9Kr1CFkbfYqfTbRE2AY35e%2Bwcy9fsxS9UMzNiitBwNFB7xqayMjWu9hrAzfQ8mfzwlj6NYmak3Q6topETCmi9wiqs6STMeMCT35S&X-Amz-Signature=bcc785f187928df54029421d72c5c5191bfe48815adc78c6750bd0006fba50a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO4BNZR6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gP%2BjD6oMpUOxZRlw6HdsgXrf8mihFuVVpVvgNXMqfQIhAKO1PeImWE8n3pzu6gvFC4%2Fm3ADWfbtVYWXM7jyUSHveKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV7jXjVcQl28MAfRUq3AP4kxhDNbP7meclg3%2B5R4%2FQQAVBYlZvVgDv05DRsDYbHE5kI2SiQrEnIn0iNF4AOrvsSW%2FIkGDauIUUqUShTjG1O%2FGNONzT0MCA%2BpYCDS9r%2FPEEDunFICxfpgKGygw6CGq1VO94IJHbMLFY13qyhfchQmZMZAqtN8paaGsJAaZCL%2Bzo9oXkoAD774tJUuy%2FePWPCmyOGtrObGv7mAC7hhjpV6i62lCAZlexciexNLZLMx9aS68EozF%2FS84ZDh%2BtuQ6QIV8T9btSftO%2BfCLoO1UX9ArIV4p3FasVrG60YPTC%2Broai8qT6faghtwTuZ2IKlcgSRzDTEqVBGqPEvSkwTkLjBFvbeG4jGokkryC%2FD0jHZSPt3LaMPtbdo5hQwOv7Fk2MZ%2BF8aYItr5Su6YKPhi8HijjsR1ACHtB1Oo7FdxVOtL%2FVH0AwCMPjhhBKZRfBRqJho4zHCY04sFFl%2FDwuAUXsulDTorm%2BsVDBKTHynTL279OoMM0yOoIGu4uXkMsUU%2FUnQRL3WA3BYrhLOgG%2B1Yx%2BqGbjZ0El9K7VZYwwQ1ipj%2FNJdWDcwQ%2BDxA8vfNzm0ZEGflc6cbuSZgmpEGvLXiRDxe%2FoasY3rSXefjzkIioBoQIEPx21uTAjXPQ6TD0oPvABjqkARJCJxs40lyo%2B9LLvpgBoa5uDyY%2B0idp0GviDljETmQ0T3dWFVEYc%2B1%2BVVkN7JYXxV7lWtJmSOHvVdLXkfFyQ9NFEXzdtJiz9PehXpNlyNjMGY6Kh6tNi6u%2F9Kr1CFkbfYqfTbRE2AY35e%2Bwcy9fsxS9UMzNiitBwNFB7xqayMjWu9hrAzfQ8mfzwlj6NYmak3Q6topETCmi9wiqs6STMeMCT35S&X-Amz-Signature=a1fbb6972821cbd542b65fa60e0a00fea464dd7387c5d3b5f2044b563707b51d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO4BNZR6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gP%2BjD6oMpUOxZRlw6HdsgXrf8mihFuVVpVvgNXMqfQIhAKO1PeImWE8n3pzu6gvFC4%2Fm3ADWfbtVYWXM7jyUSHveKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV7jXjVcQl28MAfRUq3AP4kxhDNbP7meclg3%2B5R4%2FQQAVBYlZvVgDv05DRsDYbHE5kI2SiQrEnIn0iNF4AOrvsSW%2FIkGDauIUUqUShTjG1O%2FGNONzT0MCA%2BpYCDS9r%2FPEEDunFICxfpgKGygw6CGq1VO94IJHbMLFY13qyhfchQmZMZAqtN8paaGsJAaZCL%2Bzo9oXkoAD774tJUuy%2FePWPCmyOGtrObGv7mAC7hhjpV6i62lCAZlexciexNLZLMx9aS68EozF%2FS84ZDh%2BtuQ6QIV8T9btSftO%2BfCLoO1UX9ArIV4p3FasVrG60YPTC%2Broai8qT6faghtwTuZ2IKlcgSRzDTEqVBGqPEvSkwTkLjBFvbeG4jGokkryC%2FD0jHZSPt3LaMPtbdo5hQwOv7Fk2MZ%2BF8aYItr5Su6YKPhi8HijjsR1ACHtB1Oo7FdxVOtL%2FVH0AwCMPjhhBKZRfBRqJho4zHCY04sFFl%2FDwuAUXsulDTorm%2BsVDBKTHynTL279OoMM0yOoIGu4uXkMsUU%2FUnQRL3WA3BYrhLOgG%2B1Yx%2BqGbjZ0El9K7VZYwwQ1ipj%2FNJdWDcwQ%2BDxA8vfNzm0ZEGflc6cbuSZgmpEGvLXiRDxe%2FoasY3rSXefjzkIioBoQIEPx21uTAjXPQ6TD0oPvABjqkARJCJxs40lyo%2B9LLvpgBoa5uDyY%2B0idp0GviDljETmQ0T3dWFVEYc%2B1%2BVVkN7JYXxV7lWtJmSOHvVdLXkfFyQ9NFEXzdtJiz9PehXpNlyNjMGY6Kh6tNi6u%2F9Kr1CFkbfYqfTbRE2AY35e%2Bwcy9fsxS9UMzNiitBwNFB7xqayMjWu9hrAzfQ8mfzwlj6NYmak3Q6topETCmi9wiqs6STMeMCT35S&X-Amz-Signature=d41197b07ecbc18cdeab1a77fc00f6b26bc33a58db072ceb37ec515a8c949316&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO4BNZR6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gP%2BjD6oMpUOxZRlw6HdsgXrf8mihFuVVpVvgNXMqfQIhAKO1PeImWE8n3pzu6gvFC4%2Fm3ADWfbtVYWXM7jyUSHveKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV7jXjVcQl28MAfRUq3AP4kxhDNbP7meclg3%2B5R4%2FQQAVBYlZvVgDv05DRsDYbHE5kI2SiQrEnIn0iNF4AOrvsSW%2FIkGDauIUUqUShTjG1O%2FGNONzT0MCA%2BpYCDS9r%2FPEEDunFICxfpgKGygw6CGq1VO94IJHbMLFY13qyhfchQmZMZAqtN8paaGsJAaZCL%2Bzo9oXkoAD774tJUuy%2FePWPCmyOGtrObGv7mAC7hhjpV6i62lCAZlexciexNLZLMx9aS68EozF%2FS84ZDh%2BtuQ6QIV8T9btSftO%2BfCLoO1UX9ArIV4p3FasVrG60YPTC%2Broai8qT6faghtwTuZ2IKlcgSRzDTEqVBGqPEvSkwTkLjBFvbeG4jGokkryC%2FD0jHZSPt3LaMPtbdo5hQwOv7Fk2MZ%2BF8aYItr5Su6YKPhi8HijjsR1ACHtB1Oo7FdxVOtL%2FVH0AwCMPjhhBKZRfBRqJho4zHCY04sFFl%2FDwuAUXsulDTorm%2BsVDBKTHynTL279OoMM0yOoIGu4uXkMsUU%2FUnQRL3WA3BYrhLOgG%2B1Yx%2BqGbjZ0El9K7VZYwwQ1ipj%2FNJdWDcwQ%2BDxA8vfNzm0ZEGflc6cbuSZgmpEGvLXiRDxe%2FoasY3rSXefjzkIioBoQIEPx21uTAjXPQ6TD0oPvABjqkARJCJxs40lyo%2B9LLvpgBoa5uDyY%2B0idp0GviDljETmQ0T3dWFVEYc%2B1%2BVVkN7JYXxV7lWtJmSOHvVdLXkfFyQ9NFEXzdtJiz9PehXpNlyNjMGY6Kh6tNi6u%2F9Kr1CFkbfYqfTbRE2AY35e%2Bwcy9fsxS9UMzNiitBwNFB7xqayMjWu9hrAzfQ8mfzwlj6NYmak3Q6topETCmi9wiqs6STMeMCT35S&X-Amz-Signature=5f05440ca643aaee5f0d94caeb3d43b760c32ad54978d9adfd332605ac95d71c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO4BNZR6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gP%2BjD6oMpUOxZRlw6HdsgXrf8mihFuVVpVvgNXMqfQIhAKO1PeImWE8n3pzu6gvFC4%2Fm3ADWfbtVYWXM7jyUSHveKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV7jXjVcQl28MAfRUq3AP4kxhDNbP7meclg3%2B5R4%2FQQAVBYlZvVgDv05DRsDYbHE5kI2SiQrEnIn0iNF4AOrvsSW%2FIkGDauIUUqUShTjG1O%2FGNONzT0MCA%2BpYCDS9r%2FPEEDunFICxfpgKGygw6CGq1VO94IJHbMLFY13qyhfchQmZMZAqtN8paaGsJAaZCL%2Bzo9oXkoAD774tJUuy%2FePWPCmyOGtrObGv7mAC7hhjpV6i62lCAZlexciexNLZLMx9aS68EozF%2FS84ZDh%2BtuQ6QIV8T9btSftO%2BfCLoO1UX9ArIV4p3FasVrG60YPTC%2Broai8qT6faghtwTuZ2IKlcgSRzDTEqVBGqPEvSkwTkLjBFvbeG4jGokkryC%2FD0jHZSPt3LaMPtbdo5hQwOv7Fk2MZ%2BF8aYItr5Su6YKPhi8HijjsR1ACHtB1Oo7FdxVOtL%2FVH0AwCMPjhhBKZRfBRqJho4zHCY04sFFl%2FDwuAUXsulDTorm%2BsVDBKTHynTL279OoMM0yOoIGu4uXkMsUU%2FUnQRL3WA3BYrhLOgG%2B1Yx%2BqGbjZ0El9K7VZYwwQ1ipj%2FNJdWDcwQ%2BDxA8vfNzm0ZEGflc6cbuSZgmpEGvLXiRDxe%2FoasY3rSXefjzkIioBoQIEPx21uTAjXPQ6TD0oPvABjqkARJCJxs40lyo%2B9LLvpgBoa5uDyY%2B0idp0GviDljETmQ0T3dWFVEYc%2B1%2BVVkN7JYXxV7lWtJmSOHvVdLXkfFyQ9NFEXzdtJiz9PehXpNlyNjMGY6Kh6tNi6u%2F9Kr1CFkbfYqfTbRE2AY35e%2Bwcy9fsxS9UMzNiitBwNFB7xqayMjWu9hrAzfQ8mfzwlj6NYmak3Q6topETCmi9wiqs6STMeMCT35S&X-Amz-Signature=131e8d1ef7ee6d54f4a6999d01c7008d51a81449df5c1577ab5a0d8464001880&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO4BNZR6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gP%2BjD6oMpUOxZRlw6HdsgXrf8mihFuVVpVvgNXMqfQIhAKO1PeImWE8n3pzu6gvFC4%2Fm3ADWfbtVYWXM7jyUSHveKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV7jXjVcQl28MAfRUq3AP4kxhDNbP7meclg3%2B5R4%2FQQAVBYlZvVgDv05DRsDYbHE5kI2SiQrEnIn0iNF4AOrvsSW%2FIkGDauIUUqUShTjG1O%2FGNONzT0MCA%2BpYCDS9r%2FPEEDunFICxfpgKGygw6CGq1VO94IJHbMLFY13qyhfchQmZMZAqtN8paaGsJAaZCL%2Bzo9oXkoAD774tJUuy%2FePWPCmyOGtrObGv7mAC7hhjpV6i62lCAZlexciexNLZLMx9aS68EozF%2FS84ZDh%2BtuQ6QIV8T9btSftO%2BfCLoO1UX9ArIV4p3FasVrG60YPTC%2Broai8qT6faghtwTuZ2IKlcgSRzDTEqVBGqPEvSkwTkLjBFvbeG4jGokkryC%2FD0jHZSPt3LaMPtbdo5hQwOv7Fk2MZ%2BF8aYItr5Su6YKPhi8HijjsR1ACHtB1Oo7FdxVOtL%2FVH0AwCMPjhhBKZRfBRqJho4zHCY04sFFl%2FDwuAUXsulDTorm%2BsVDBKTHynTL279OoMM0yOoIGu4uXkMsUU%2FUnQRL3WA3BYrhLOgG%2B1Yx%2BqGbjZ0El9K7VZYwwQ1ipj%2FNJdWDcwQ%2BDxA8vfNzm0ZEGflc6cbuSZgmpEGvLXiRDxe%2FoasY3rSXefjzkIioBoQIEPx21uTAjXPQ6TD0oPvABjqkARJCJxs40lyo%2B9LLvpgBoa5uDyY%2B0idp0GviDljETmQ0T3dWFVEYc%2B1%2BVVkN7JYXxV7lWtJmSOHvVdLXkfFyQ9NFEXzdtJiz9PehXpNlyNjMGY6Kh6tNi6u%2F9Kr1CFkbfYqfTbRE2AY35e%2Bwcy9fsxS9UMzNiitBwNFB7xqayMjWu9hrAzfQ8mfzwlj6NYmak3Q6topETCmi9wiqs6STMeMCT35S&X-Amz-Signature=22602ec01c5e44072203d422b1b9f0d807c7edfb79364c6ec65f668b3015ed87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO4BNZR6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gP%2BjD6oMpUOxZRlw6HdsgXrf8mihFuVVpVvgNXMqfQIhAKO1PeImWE8n3pzu6gvFC4%2Fm3ADWfbtVYWXM7jyUSHveKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV7jXjVcQl28MAfRUq3AP4kxhDNbP7meclg3%2B5R4%2FQQAVBYlZvVgDv05DRsDYbHE5kI2SiQrEnIn0iNF4AOrvsSW%2FIkGDauIUUqUShTjG1O%2FGNONzT0MCA%2BpYCDS9r%2FPEEDunFICxfpgKGygw6CGq1VO94IJHbMLFY13qyhfchQmZMZAqtN8paaGsJAaZCL%2Bzo9oXkoAD774tJUuy%2FePWPCmyOGtrObGv7mAC7hhjpV6i62lCAZlexciexNLZLMx9aS68EozF%2FS84ZDh%2BtuQ6QIV8T9btSftO%2BfCLoO1UX9ArIV4p3FasVrG60YPTC%2Broai8qT6faghtwTuZ2IKlcgSRzDTEqVBGqPEvSkwTkLjBFvbeG4jGokkryC%2FD0jHZSPt3LaMPtbdo5hQwOv7Fk2MZ%2BF8aYItr5Su6YKPhi8HijjsR1ACHtB1Oo7FdxVOtL%2FVH0AwCMPjhhBKZRfBRqJho4zHCY04sFFl%2FDwuAUXsulDTorm%2BsVDBKTHynTL279OoMM0yOoIGu4uXkMsUU%2FUnQRL3WA3BYrhLOgG%2B1Yx%2BqGbjZ0El9K7VZYwwQ1ipj%2FNJdWDcwQ%2BDxA8vfNzm0ZEGflc6cbuSZgmpEGvLXiRDxe%2FoasY3rSXefjzkIioBoQIEPx21uTAjXPQ6TD0oPvABjqkARJCJxs40lyo%2B9LLvpgBoa5uDyY%2B0idp0GviDljETmQ0T3dWFVEYc%2B1%2BVVkN7JYXxV7lWtJmSOHvVdLXkfFyQ9NFEXzdtJiz9PehXpNlyNjMGY6Kh6tNi6u%2F9Kr1CFkbfYqfTbRE2AY35e%2Bwcy9fsxS9UMzNiitBwNFB7xqayMjWu9hrAzfQ8mfzwlj6NYmak3Q6topETCmi9wiqs6STMeMCT35S&X-Amz-Signature=b93aecd872f15778f4dd43cbcf84aac4e7c257d4bba1f09f63cf8041b393b172&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO4BNZR6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gP%2BjD6oMpUOxZRlw6HdsgXrf8mihFuVVpVvgNXMqfQIhAKO1PeImWE8n3pzu6gvFC4%2Fm3ADWfbtVYWXM7jyUSHveKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV7jXjVcQl28MAfRUq3AP4kxhDNbP7meclg3%2B5R4%2FQQAVBYlZvVgDv05DRsDYbHE5kI2SiQrEnIn0iNF4AOrvsSW%2FIkGDauIUUqUShTjG1O%2FGNONzT0MCA%2BpYCDS9r%2FPEEDunFICxfpgKGygw6CGq1VO94IJHbMLFY13qyhfchQmZMZAqtN8paaGsJAaZCL%2Bzo9oXkoAD774tJUuy%2FePWPCmyOGtrObGv7mAC7hhjpV6i62lCAZlexciexNLZLMx9aS68EozF%2FS84ZDh%2BtuQ6QIV8T9btSftO%2BfCLoO1UX9ArIV4p3FasVrG60YPTC%2Broai8qT6faghtwTuZ2IKlcgSRzDTEqVBGqPEvSkwTkLjBFvbeG4jGokkryC%2FD0jHZSPt3LaMPtbdo5hQwOv7Fk2MZ%2BF8aYItr5Su6YKPhi8HijjsR1ACHtB1Oo7FdxVOtL%2FVH0AwCMPjhhBKZRfBRqJho4zHCY04sFFl%2FDwuAUXsulDTorm%2BsVDBKTHynTL279OoMM0yOoIGu4uXkMsUU%2FUnQRL3WA3BYrhLOgG%2B1Yx%2BqGbjZ0El9K7VZYwwQ1ipj%2FNJdWDcwQ%2BDxA8vfNzm0ZEGflc6cbuSZgmpEGvLXiRDxe%2FoasY3rSXefjzkIioBoQIEPx21uTAjXPQ6TD0oPvABjqkARJCJxs40lyo%2B9LLvpgBoa5uDyY%2B0idp0GviDljETmQ0T3dWFVEYc%2B1%2BVVkN7JYXxV7lWtJmSOHvVdLXkfFyQ9NFEXzdtJiz9PehXpNlyNjMGY6Kh6tNi6u%2F9Kr1CFkbfYqfTbRE2AY35e%2Bwcy9fsxS9UMzNiitBwNFB7xqayMjWu9hrAzfQ8mfzwlj6NYmak3Q6topETCmi9wiqs6STMeMCT35S&X-Amz-Signature=e491d24a4f8f61c0139c25dafc412b77d6eb76cf7bae76471026b0187931c429&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
