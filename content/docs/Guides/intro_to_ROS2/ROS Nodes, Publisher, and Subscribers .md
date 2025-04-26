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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBJTAFA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyn%2BsDuUY42bVXAWZ6I10xJa0SEI2p3jE2tvt9bOos1gIgTZg4Vm2FReZdMraLhRNGGQ582IHRsEVaLQFmhhIDKioq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJ8J7EpDra6OSDMR%2ByrcA%2BSeYfeGxThz7Zi3ThrXwD70gp0hcPQgnnLyypN891U%2FYmxWIRs6rpb746c%2FbFvGqs57P53RhYHM2NEcKL8iae3kdHoVJv7lvhYnKZoBMKWUbUGOSU7QpjnrVo2VJLeUfWEZ5qhwpM5lNHLvajnJdhL6tU4OW9i0akUv6bfItQcvP3VQAqBLtkBqZD1in58Ywb1hscVpA%2B6zi2LOYAc0aQBr1syvMs5BvnGMoffISLkJ5vbsr4Gedfh4%2FXBySw9x4PSczARpUXtjC4d2QOCZYUDR4IztdY6OCo36CgoPXrwSIgJV9YYAXmdnfx6PYqbf4nMv6BqC3viy0Eh3KI0HdgVC8ZSq6Wxf7wf%2BJJ%2B9y968B9NwQcelrGLp0uoEdAeLfq8LJ2jDzzUv4zcREEeEV7VSZmbJpbKNLIVgZBGMu8GPMx3D7oOQWHwPwaANNRyVJakOUtEv5wldNlGLEkjBkYyjsTEQ459C9m2uai5yYE80cC1jIc69h2PA60Sev0rA6sVhmNLtDvcE2C3uJ0sd7FhIWWc2zeymTViHbjMjqE1Hm5IlrRm2xErwlJsXZyuvCPA%2BqAQLts2PYDO1V32e9gekdyETXvMmNrX0JgoCcKBbGOO9Os0%2BUBrEQPLrMJWEssAGOqUB1IA72S7T%2FDszs2WjD3RqJWrTOAnSoX4%2BGJDTWYLC%2FNjVQ3FjSjWdyhCIQ%2F8Cuoi%2BvsWuJAjjxxfPUEBvB%2Fqy4ykrnG7XFnmhDtlDhVLOYKpT9ABw8berB%2BsSJfP7tEAcZ8ugU3ugx8CECU2L7YBmrd0zTtGD9YWAradanXWUOBjq6p%2BAJngfUbeiXaCSBMhU0D%2B5Db30GJBIK98qMpynmMWaT%2Bmi&X-Amz-Signature=85031f9c8686300bd5bbca05a7da91e0782d53ca4857c0a60f210e0d15d7f84a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBJTAFA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyn%2BsDuUY42bVXAWZ6I10xJa0SEI2p3jE2tvt9bOos1gIgTZg4Vm2FReZdMraLhRNGGQ582IHRsEVaLQFmhhIDKioq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJ8J7EpDra6OSDMR%2ByrcA%2BSeYfeGxThz7Zi3ThrXwD70gp0hcPQgnnLyypN891U%2FYmxWIRs6rpb746c%2FbFvGqs57P53RhYHM2NEcKL8iae3kdHoVJv7lvhYnKZoBMKWUbUGOSU7QpjnrVo2VJLeUfWEZ5qhwpM5lNHLvajnJdhL6tU4OW9i0akUv6bfItQcvP3VQAqBLtkBqZD1in58Ywb1hscVpA%2B6zi2LOYAc0aQBr1syvMs5BvnGMoffISLkJ5vbsr4Gedfh4%2FXBySw9x4PSczARpUXtjC4d2QOCZYUDR4IztdY6OCo36CgoPXrwSIgJV9YYAXmdnfx6PYqbf4nMv6BqC3viy0Eh3KI0HdgVC8ZSq6Wxf7wf%2BJJ%2B9y968B9NwQcelrGLp0uoEdAeLfq8LJ2jDzzUv4zcREEeEV7VSZmbJpbKNLIVgZBGMu8GPMx3D7oOQWHwPwaANNRyVJakOUtEv5wldNlGLEkjBkYyjsTEQ459C9m2uai5yYE80cC1jIc69h2PA60Sev0rA6sVhmNLtDvcE2C3uJ0sd7FhIWWc2zeymTViHbjMjqE1Hm5IlrRm2xErwlJsXZyuvCPA%2BqAQLts2PYDO1V32e9gekdyETXvMmNrX0JgoCcKBbGOO9Os0%2BUBrEQPLrMJWEssAGOqUB1IA72S7T%2FDszs2WjD3RqJWrTOAnSoX4%2BGJDTWYLC%2FNjVQ3FjSjWdyhCIQ%2F8Cuoi%2BvsWuJAjjxxfPUEBvB%2Fqy4ykrnG7XFnmhDtlDhVLOYKpT9ABw8berB%2BsSJfP7tEAcZ8ugU3ugx8CECU2L7YBmrd0zTtGD9YWAradanXWUOBjq6p%2BAJngfUbeiXaCSBMhU0D%2B5Db30GJBIK98qMpynmMWaT%2Bmi&X-Amz-Signature=6ba9f21f5657d92324fb3bb21ee861b539142edae34ed050e720da6b04bc798b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBJTAFA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyn%2BsDuUY42bVXAWZ6I10xJa0SEI2p3jE2tvt9bOos1gIgTZg4Vm2FReZdMraLhRNGGQ582IHRsEVaLQFmhhIDKioq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJ8J7EpDra6OSDMR%2ByrcA%2BSeYfeGxThz7Zi3ThrXwD70gp0hcPQgnnLyypN891U%2FYmxWIRs6rpb746c%2FbFvGqs57P53RhYHM2NEcKL8iae3kdHoVJv7lvhYnKZoBMKWUbUGOSU7QpjnrVo2VJLeUfWEZ5qhwpM5lNHLvajnJdhL6tU4OW9i0akUv6bfItQcvP3VQAqBLtkBqZD1in58Ywb1hscVpA%2B6zi2LOYAc0aQBr1syvMs5BvnGMoffISLkJ5vbsr4Gedfh4%2FXBySw9x4PSczARpUXtjC4d2QOCZYUDR4IztdY6OCo36CgoPXrwSIgJV9YYAXmdnfx6PYqbf4nMv6BqC3viy0Eh3KI0HdgVC8ZSq6Wxf7wf%2BJJ%2B9y968B9NwQcelrGLp0uoEdAeLfq8LJ2jDzzUv4zcREEeEV7VSZmbJpbKNLIVgZBGMu8GPMx3D7oOQWHwPwaANNRyVJakOUtEv5wldNlGLEkjBkYyjsTEQ459C9m2uai5yYE80cC1jIc69h2PA60Sev0rA6sVhmNLtDvcE2C3uJ0sd7FhIWWc2zeymTViHbjMjqE1Hm5IlrRm2xErwlJsXZyuvCPA%2BqAQLts2PYDO1V32e9gekdyETXvMmNrX0JgoCcKBbGOO9Os0%2BUBrEQPLrMJWEssAGOqUB1IA72S7T%2FDszs2WjD3RqJWrTOAnSoX4%2BGJDTWYLC%2FNjVQ3FjSjWdyhCIQ%2F8Cuoi%2BvsWuJAjjxxfPUEBvB%2Fqy4ykrnG7XFnmhDtlDhVLOYKpT9ABw8berB%2BsSJfP7tEAcZ8ugU3ugx8CECU2L7YBmrd0zTtGD9YWAradanXWUOBjq6p%2BAJngfUbeiXaCSBMhU0D%2B5Db30GJBIK98qMpynmMWaT%2Bmi&X-Amz-Signature=e320aa791853116a0959a806399d0016314b91c731d36859e3ec41972f2caa58&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBJTAFA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyn%2BsDuUY42bVXAWZ6I10xJa0SEI2p3jE2tvt9bOos1gIgTZg4Vm2FReZdMraLhRNGGQ582IHRsEVaLQFmhhIDKioq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJ8J7EpDra6OSDMR%2ByrcA%2BSeYfeGxThz7Zi3ThrXwD70gp0hcPQgnnLyypN891U%2FYmxWIRs6rpb746c%2FbFvGqs57P53RhYHM2NEcKL8iae3kdHoVJv7lvhYnKZoBMKWUbUGOSU7QpjnrVo2VJLeUfWEZ5qhwpM5lNHLvajnJdhL6tU4OW9i0akUv6bfItQcvP3VQAqBLtkBqZD1in58Ywb1hscVpA%2B6zi2LOYAc0aQBr1syvMs5BvnGMoffISLkJ5vbsr4Gedfh4%2FXBySw9x4PSczARpUXtjC4d2QOCZYUDR4IztdY6OCo36CgoPXrwSIgJV9YYAXmdnfx6PYqbf4nMv6BqC3viy0Eh3KI0HdgVC8ZSq6Wxf7wf%2BJJ%2B9y968B9NwQcelrGLp0uoEdAeLfq8LJ2jDzzUv4zcREEeEV7VSZmbJpbKNLIVgZBGMu8GPMx3D7oOQWHwPwaANNRyVJakOUtEv5wldNlGLEkjBkYyjsTEQ459C9m2uai5yYE80cC1jIc69h2PA60Sev0rA6sVhmNLtDvcE2C3uJ0sd7FhIWWc2zeymTViHbjMjqE1Hm5IlrRm2xErwlJsXZyuvCPA%2BqAQLts2PYDO1V32e9gekdyETXvMmNrX0JgoCcKBbGOO9Os0%2BUBrEQPLrMJWEssAGOqUB1IA72S7T%2FDszs2WjD3RqJWrTOAnSoX4%2BGJDTWYLC%2FNjVQ3FjSjWdyhCIQ%2F8Cuoi%2BvsWuJAjjxxfPUEBvB%2Fqy4ykrnG7XFnmhDtlDhVLOYKpT9ABw8berB%2BsSJfP7tEAcZ8ugU3ugx8CECU2L7YBmrd0zTtGD9YWAradanXWUOBjq6p%2BAJngfUbeiXaCSBMhU0D%2B5Db30GJBIK98qMpynmMWaT%2Bmi&X-Amz-Signature=3400d96e5d1edc334073de5a65ae272563f8b5ec6c79820d659349ad429f11a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBJTAFA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyn%2BsDuUY42bVXAWZ6I10xJa0SEI2p3jE2tvt9bOos1gIgTZg4Vm2FReZdMraLhRNGGQ582IHRsEVaLQFmhhIDKioq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJ8J7EpDra6OSDMR%2ByrcA%2BSeYfeGxThz7Zi3ThrXwD70gp0hcPQgnnLyypN891U%2FYmxWIRs6rpb746c%2FbFvGqs57P53RhYHM2NEcKL8iae3kdHoVJv7lvhYnKZoBMKWUbUGOSU7QpjnrVo2VJLeUfWEZ5qhwpM5lNHLvajnJdhL6tU4OW9i0akUv6bfItQcvP3VQAqBLtkBqZD1in58Ywb1hscVpA%2B6zi2LOYAc0aQBr1syvMs5BvnGMoffISLkJ5vbsr4Gedfh4%2FXBySw9x4PSczARpUXtjC4d2QOCZYUDR4IztdY6OCo36CgoPXrwSIgJV9YYAXmdnfx6PYqbf4nMv6BqC3viy0Eh3KI0HdgVC8ZSq6Wxf7wf%2BJJ%2B9y968B9NwQcelrGLp0uoEdAeLfq8LJ2jDzzUv4zcREEeEV7VSZmbJpbKNLIVgZBGMu8GPMx3D7oOQWHwPwaANNRyVJakOUtEv5wldNlGLEkjBkYyjsTEQ459C9m2uai5yYE80cC1jIc69h2PA60Sev0rA6sVhmNLtDvcE2C3uJ0sd7FhIWWc2zeymTViHbjMjqE1Hm5IlrRm2xErwlJsXZyuvCPA%2BqAQLts2PYDO1V32e9gekdyETXvMmNrX0JgoCcKBbGOO9Os0%2BUBrEQPLrMJWEssAGOqUB1IA72S7T%2FDszs2WjD3RqJWrTOAnSoX4%2BGJDTWYLC%2FNjVQ3FjSjWdyhCIQ%2F8Cuoi%2BvsWuJAjjxxfPUEBvB%2Fqy4ykrnG7XFnmhDtlDhVLOYKpT9ABw8berB%2BsSJfP7tEAcZ8ugU3ugx8CECU2L7YBmrd0zTtGD9YWAradanXWUOBjq6p%2BAJngfUbeiXaCSBMhU0D%2B5Db30GJBIK98qMpynmMWaT%2Bmi&X-Amz-Signature=35b2b8e98eed6845d4b81f86916bcbfd725e87a033cb51621dcd43a2e7996b74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBJTAFA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyn%2BsDuUY42bVXAWZ6I10xJa0SEI2p3jE2tvt9bOos1gIgTZg4Vm2FReZdMraLhRNGGQ582IHRsEVaLQFmhhIDKioq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJ8J7EpDra6OSDMR%2ByrcA%2BSeYfeGxThz7Zi3ThrXwD70gp0hcPQgnnLyypN891U%2FYmxWIRs6rpb746c%2FbFvGqs57P53RhYHM2NEcKL8iae3kdHoVJv7lvhYnKZoBMKWUbUGOSU7QpjnrVo2VJLeUfWEZ5qhwpM5lNHLvajnJdhL6tU4OW9i0akUv6bfItQcvP3VQAqBLtkBqZD1in58Ywb1hscVpA%2B6zi2LOYAc0aQBr1syvMs5BvnGMoffISLkJ5vbsr4Gedfh4%2FXBySw9x4PSczARpUXtjC4d2QOCZYUDR4IztdY6OCo36CgoPXrwSIgJV9YYAXmdnfx6PYqbf4nMv6BqC3viy0Eh3KI0HdgVC8ZSq6Wxf7wf%2BJJ%2B9y968B9NwQcelrGLp0uoEdAeLfq8LJ2jDzzUv4zcREEeEV7VSZmbJpbKNLIVgZBGMu8GPMx3D7oOQWHwPwaANNRyVJakOUtEv5wldNlGLEkjBkYyjsTEQ459C9m2uai5yYE80cC1jIc69h2PA60Sev0rA6sVhmNLtDvcE2C3uJ0sd7FhIWWc2zeymTViHbjMjqE1Hm5IlrRm2xErwlJsXZyuvCPA%2BqAQLts2PYDO1V32e9gekdyETXvMmNrX0JgoCcKBbGOO9Os0%2BUBrEQPLrMJWEssAGOqUB1IA72S7T%2FDszs2WjD3RqJWrTOAnSoX4%2BGJDTWYLC%2FNjVQ3FjSjWdyhCIQ%2F8Cuoi%2BvsWuJAjjxxfPUEBvB%2Fqy4ykrnG7XFnmhDtlDhVLOYKpT9ABw8berB%2BsSJfP7tEAcZ8ugU3ugx8CECU2L7YBmrd0zTtGD9YWAradanXWUOBjq6p%2BAJngfUbeiXaCSBMhU0D%2B5Db30GJBIK98qMpynmMWaT%2Bmi&X-Amz-Signature=dc237476af3f8440578e7e85d33f63f2aeddcc280846ec49272e51c6aa6a7d23&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBJTAFA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyn%2BsDuUY42bVXAWZ6I10xJa0SEI2p3jE2tvt9bOos1gIgTZg4Vm2FReZdMraLhRNGGQ582IHRsEVaLQFmhhIDKioq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJ8J7EpDra6OSDMR%2ByrcA%2BSeYfeGxThz7Zi3ThrXwD70gp0hcPQgnnLyypN891U%2FYmxWIRs6rpb746c%2FbFvGqs57P53RhYHM2NEcKL8iae3kdHoVJv7lvhYnKZoBMKWUbUGOSU7QpjnrVo2VJLeUfWEZ5qhwpM5lNHLvajnJdhL6tU4OW9i0akUv6bfItQcvP3VQAqBLtkBqZD1in58Ywb1hscVpA%2B6zi2LOYAc0aQBr1syvMs5BvnGMoffISLkJ5vbsr4Gedfh4%2FXBySw9x4PSczARpUXtjC4d2QOCZYUDR4IztdY6OCo36CgoPXrwSIgJV9YYAXmdnfx6PYqbf4nMv6BqC3viy0Eh3KI0HdgVC8ZSq6Wxf7wf%2BJJ%2B9y968B9NwQcelrGLp0uoEdAeLfq8LJ2jDzzUv4zcREEeEV7VSZmbJpbKNLIVgZBGMu8GPMx3D7oOQWHwPwaANNRyVJakOUtEv5wldNlGLEkjBkYyjsTEQ459C9m2uai5yYE80cC1jIc69h2PA60Sev0rA6sVhmNLtDvcE2C3uJ0sd7FhIWWc2zeymTViHbjMjqE1Hm5IlrRm2xErwlJsXZyuvCPA%2BqAQLts2PYDO1V32e9gekdyETXvMmNrX0JgoCcKBbGOO9Os0%2BUBrEQPLrMJWEssAGOqUB1IA72S7T%2FDszs2WjD3RqJWrTOAnSoX4%2BGJDTWYLC%2FNjVQ3FjSjWdyhCIQ%2F8Cuoi%2BvsWuJAjjxxfPUEBvB%2Fqy4ykrnG7XFnmhDtlDhVLOYKpT9ABw8berB%2BsSJfP7tEAcZ8ugU3ugx8CECU2L7YBmrd0zTtGD9YWAradanXWUOBjq6p%2BAJngfUbeiXaCSBMhU0D%2B5Db30GJBIK98qMpynmMWaT%2Bmi&X-Amz-Signature=63e222cebfce6372c2bb40647ef2dc72a97f26a60db16f367f6db4e0531a08b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBJTAFA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyn%2BsDuUY42bVXAWZ6I10xJa0SEI2p3jE2tvt9bOos1gIgTZg4Vm2FReZdMraLhRNGGQ582IHRsEVaLQFmhhIDKioq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJ8J7EpDra6OSDMR%2ByrcA%2BSeYfeGxThz7Zi3ThrXwD70gp0hcPQgnnLyypN891U%2FYmxWIRs6rpb746c%2FbFvGqs57P53RhYHM2NEcKL8iae3kdHoVJv7lvhYnKZoBMKWUbUGOSU7QpjnrVo2VJLeUfWEZ5qhwpM5lNHLvajnJdhL6tU4OW9i0akUv6bfItQcvP3VQAqBLtkBqZD1in58Ywb1hscVpA%2B6zi2LOYAc0aQBr1syvMs5BvnGMoffISLkJ5vbsr4Gedfh4%2FXBySw9x4PSczARpUXtjC4d2QOCZYUDR4IztdY6OCo36CgoPXrwSIgJV9YYAXmdnfx6PYqbf4nMv6BqC3viy0Eh3KI0HdgVC8ZSq6Wxf7wf%2BJJ%2B9y968B9NwQcelrGLp0uoEdAeLfq8LJ2jDzzUv4zcREEeEV7VSZmbJpbKNLIVgZBGMu8GPMx3D7oOQWHwPwaANNRyVJakOUtEv5wldNlGLEkjBkYyjsTEQ459C9m2uai5yYE80cC1jIc69h2PA60Sev0rA6sVhmNLtDvcE2C3uJ0sd7FhIWWc2zeymTViHbjMjqE1Hm5IlrRm2xErwlJsXZyuvCPA%2BqAQLts2PYDO1V32e9gekdyETXvMmNrX0JgoCcKBbGOO9Os0%2BUBrEQPLrMJWEssAGOqUB1IA72S7T%2FDszs2WjD3RqJWrTOAnSoX4%2BGJDTWYLC%2FNjVQ3FjSjWdyhCIQ%2F8Cuoi%2BvsWuJAjjxxfPUEBvB%2Fqy4ykrnG7XFnmhDtlDhVLOYKpT9ABw8berB%2BsSJfP7tEAcZ8ugU3ugx8CECU2L7YBmrd0zTtGD9YWAradanXWUOBjq6p%2BAJngfUbeiXaCSBMhU0D%2B5Db30GJBIK98qMpynmMWaT%2Bmi&X-Amz-Signature=daa092b624da31381b14032c61065bf68bf36a80aff5b8c5a91e29261facc27c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
