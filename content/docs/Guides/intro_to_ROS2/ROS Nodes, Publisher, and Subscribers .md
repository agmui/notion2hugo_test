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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676JZM5BH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFT0nsvjeH7JdK14tq9EYn4Rr%2FLRa6ZB1gXUCL7D67P4AiATeY1wkAyxd%2FSPoFXaiNBWAEzUQV3iKFLrgt%2Byz0d6XCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMXQ%2FSaE7ZCNLRO4GPKtwDY7lumZEWwAdQmb4L8Uv8cOyEHZ0%2BEP0iBOj1jq6VU%2FI7sGK3korzezjeKxZLzlx3Yqew60DGhEy86xwYWmiX0%2BMzMD%2B2YxbE6TAwvFVVzQMHt36LLrPfxEHYT9mlj4AyxpwvKKWT6ZKapopUEyuEs5s6WrRqyaC9s0FRkgHntDfcVelEKSnzNnKLHQkf91ZwwVvhIMgQ0ddMQWeFq7O1wapw60XecibR72EELl3UOTuJGD5w%2Fyi23OgpV3JUPC7a%2FjPt09IOUo%2BBRRboJgWytVkwdTG%2BqNgSX6fjLgY4E66s4g2UfafskEwpFQBu%2BdGihqLvoAuXKELBGnoKpF5fL0WfkB%2BdOw8XDUr90Sosx1UzrdPf7JhwEj%2BZ7ewJCRxa8FsukkwOsSQh8TWWNCin7wfVw8zm9gwe5%2FInE2F7PwgohWmyzrtAFtfoNf8uVeGYYpA23MMxWsMjIomN5dAVNgdKbyuc9oMJFINv6Z5jvSCd7%2BWHdWK8ewogXzPyZNwPHVThgvirkmKjLLtvIQDLtfM51u8slgWcWwmmh5GmVdu%2B%2BSTdr7VZ9Ag4MyG68Y6MjzFHGBYfMPGcRRSxoYidxylYbg9rVTBZtUUwMGFro3%2BrgcIsAh%2BufU5Y7Hgw%2BID7vQY6pgFVN0EIF1XPitCO3hvN1G1C9HBxqHyKqv%2Bu0u8IEoAZ9J3zfdazOdrZH3E7xwWeMaunNxL%2BFnX%2FyorGMo6zKLxdPCmcQUUCm%2FD9QEuOR6abCPOs%2BcDejLmZHCVP3xB2GNXAHHPJlGgKmTL3et8EZYwRqzW767Jg0JxgggWaIxL2Ida4BzZ0%2F1o6upqtWRrr5KvWHc4NspeWkY0EiEBTP%2BybTcgemlbB&X-Amz-Signature=6847b4370f325b05e3c0cd6f3eef11bdbf337af7a77d9a276f129f3a0304fc51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676JZM5BH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFT0nsvjeH7JdK14tq9EYn4Rr%2FLRa6ZB1gXUCL7D67P4AiATeY1wkAyxd%2FSPoFXaiNBWAEzUQV3iKFLrgt%2Byz0d6XCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMXQ%2FSaE7ZCNLRO4GPKtwDY7lumZEWwAdQmb4L8Uv8cOyEHZ0%2BEP0iBOj1jq6VU%2FI7sGK3korzezjeKxZLzlx3Yqew60DGhEy86xwYWmiX0%2BMzMD%2B2YxbE6TAwvFVVzQMHt36LLrPfxEHYT9mlj4AyxpwvKKWT6ZKapopUEyuEs5s6WrRqyaC9s0FRkgHntDfcVelEKSnzNnKLHQkf91ZwwVvhIMgQ0ddMQWeFq7O1wapw60XecibR72EELl3UOTuJGD5w%2Fyi23OgpV3JUPC7a%2FjPt09IOUo%2BBRRboJgWytVkwdTG%2BqNgSX6fjLgY4E66s4g2UfafskEwpFQBu%2BdGihqLvoAuXKELBGnoKpF5fL0WfkB%2BdOw8XDUr90Sosx1UzrdPf7JhwEj%2BZ7ewJCRxa8FsukkwOsSQh8TWWNCin7wfVw8zm9gwe5%2FInE2F7PwgohWmyzrtAFtfoNf8uVeGYYpA23MMxWsMjIomN5dAVNgdKbyuc9oMJFINv6Z5jvSCd7%2BWHdWK8ewogXzPyZNwPHVThgvirkmKjLLtvIQDLtfM51u8slgWcWwmmh5GmVdu%2B%2BSTdr7VZ9Ag4MyG68Y6MjzFHGBYfMPGcRRSxoYidxylYbg9rVTBZtUUwMGFro3%2BrgcIsAh%2BufU5Y7Hgw%2BID7vQY6pgFVN0EIF1XPitCO3hvN1G1C9HBxqHyKqv%2Bu0u8IEoAZ9J3zfdazOdrZH3E7xwWeMaunNxL%2BFnX%2FyorGMo6zKLxdPCmcQUUCm%2FD9QEuOR6abCPOs%2BcDejLmZHCVP3xB2GNXAHHPJlGgKmTL3et8EZYwRqzW767Jg0JxgggWaIxL2Ida4BzZ0%2F1o6upqtWRrr5KvWHc4NspeWkY0EiEBTP%2BybTcgemlbB&X-Amz-Signature=cf8ded73784a666221d7e93046a56cfdaaff72802f0c804c560c8e0af6c48b9a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676JZM5BH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFT0nsvjeH7JdK14tq9EYn4Rr%2FLRa6ZB1gXUCL7D67P4AiATeY1wkAyxd%2FSPoFXaiNBWAEzUQV3iKFLrgt%2Byz0d6XCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMXQ%2FSaE7ZCNLRO4GPKtwDY7lumZEWwAdQmb4L8Uv8cOyEHZ0%2BEP0iBOj1jq6VU%2FI7sGK3korzezjeKxZLzlx3Yqew60DGhEy86xwYWmiX0%2BMzMD%2B2YxbE6TAwvFVVzQMHt36LLrPfxEHYT9mlj4AyxpwvKKWT6ZKapopUEyuEs5s6WrRqyaC9s0FRkgHntDfcVelEKSnzNnKLHQkf91ZwwVvhIMgQ0ddMQWeFq7O1wapw60XecibR72EELl3UOTuJGD5w%2Fyi23OgpV3JUPC7a%2FjPt09IOUo%2BBRRboJgWytVkwdTG%2BqNgSX6fjLgY4E66s4g2UfafskEwpFQBu%2BdGihqLvoAuXKELBGnoKpF5fL0WfkB%2BdOw8XDUr90Sosx1UzrdPf7JhwEj%2BZ7ewJCRxa8FsukkwOsSQh8TWWNCin7wfVw8zm9gwe5%2FInE2F7PwgohWmyzrtAFtfoNf8uVeGYYpA23MMxWsMjIomN5dAVNgdKbyuc9oMJFINv6Z5jvSCd7%2BWHdWK8ewogXzPyZNwPHVThgvirkmKjLLtvIQDLtfM51u8slgWcWwmmh5GmVdu%2B%2BSTdr7VZ9Ag4MyG68Y6MjzFHGBYfMPGcRRSxoYidxylYbg9rVTBZtUUwMGFro3%2BrgcIsAh%2BufU5Y7Hgw%2BID7vQY6pgFVN0EIF1XPitCO3hvN1G1C9HBxqHyKqv%2Bu0u8IEoAZ9J3zfdazOdrZH3E7xwWeMaunNxL%2BFnX%2FyorGMo6zKLxdPCmcQUUCm%2FD9QEuOR6abCPOs%2BcDejLmZHCVP3xB2GNXAHHPJlGgKmTL3et8EZYwRqzW767Jg0JxgggWaIxL2Ida4BzZ0%2F1o6upqtWRrr5KvWHc4NspeWkY0EiEBTP%2BybTcgemlbB&X-Amz-Signature=fd740d78bdb332b3a2450a6a6786602f7201d93ab37f873893b7b323c0fac31b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676JZM5BH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFT0nsvjeH7JdK14tq9EYn4Rr%2FLRa6ZB1gXUCL7D67P4AiATeY1wkAyxd%2FSPoFXaiNBWAEzUQV3iKFLrgt%2Byz0d6XCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMXQ%2FSaE7ZCNLRO4GPKtwDY7lumZEWwAdQmb4L8Uv8cOyEHZ0%2BEP0iBOj1jq6VU%2FI7sGK3korzezjeKxZLzlx3Yqew60DGhEy86xwYWmiX0%2BMzMD%2B2YxbE6TAwvFVVzQMHt36LLrPfxEHYT9mlj4AyxpwvKKWT6ZKapopUEyuEs5s6WrRqyaC9s0FRkgHntDfcVelEKSnzNnKLHQkf91ZwwVvhIMgQ0ddMQWeFq7O1wapw60XecibR72EELl3UOTuJGD5w%2Fyi23OgpV3JUPC7a%2FjPt09IOUo%2BBRRboJgWytVkwdTG%2BqNgSX6fjLgY4E66s4g2UfafskEwpFQBu%2BdGihqLvoAuXKELBGnoKpF5fL0WfkB%2BdOw8XDUr90Sosx1UzrdPf7JhwEj%2BZ7ewJCRxa8FsukkwOsSQh8TWWNCin7wfVw8zm9gwe5%2FInE2F7PwgohWmyzrtAFtfoNf8uVeGYYpA23MMxWsMjIomN5dAVNgdKbyuc9oMJFINv6Z5jvSCd7%2BWHdWK8ewogXzPyZNwPHVThgvirkmKjLLtvIQDLtfM51u8slgWcWwmmh5GmVdu%2B%2BSTdr7VZ9Ag4MyG68Y6MjzFHGBYfMPGcRRSxoYidxylYbg9rVTBZtUUwMGFro3%2BrgcIsAh%2BufU5Y7Hgw%2BID7vQY6pgFVN0EIF1XPitCO3hvN1G1C9HBxqHyKqv%2Bu0u8IEoAZ9J3zfdazOdrZH3E7xwWeMaunNxL%2BFnX%2FyorGMo6zKLxdPCmcQUUCm%2FD9QEuOR6abCPOs%2BcDejLmZHCVP3xB2GNXAHHPJlGgKmTL3et8EZYwRqzW767Jg0JxgggWaIxL2Ida4BzZ0%2F1o6upqtWRrr5KvWHc4NspeWkY0EiEBTP%2BybTcgemlbB&X-Amz-Signature=c237db0b6641c519225a37cb585ce4e820389a711b87f0ae511d842c590e4f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676JZM5BH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFT0nsvjeH7JdK14tq9EYn4Rr%2FLRa6ZB1gXUCL7D67P4AiATeY1wkAyxd%2FSPoFXaiNBWAEzUQV3iKFLrgt%2Byz0d6XCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMXQ%2FSaE7ZCNLRO4GPKtwDY7lumZEWwAdQmb4L8Uv8cOyEHZ0%2BEP0iBOj1jq6VU%2FI7sGK3korzezjeKxZLzlx3Yqew60DGhEy86xwYWmiX0%2BMzMD%2B2YxbE6TAwvFVVzQMHt36LLrPfxEHYT9mlj4AyxpwvKKWT6ZKapopUEyuEs5s6WrRqyaC9s0FRkgHntDfcVelEKSnzNnKLHQkf91ZwwVvhIMgQ0ddMQWeFq7O1wapw60XecibR72EELl3UOTuJGD5w%2Fyi23OgpV3JUPC7a%2FjPt09IOUo%2BBRRboJgWytVkwdTG%2BqNgSX6fjLgY4E66s4g2UfafskEwpFQBu%2BdGihqLvoAuXKELBGnoKpF5fL0WfkB%2BdOw8XDUr90Sosx1UzrdPf7JhwEj%2BZ7ewJCRxa8FsukkwOsSQh8TWWNCin7wfVw8zm9gwe5%2FInE2F7PwgohWmyzrtAFtfoNf8uVeGYYpA23MMxWsMjIomN5dAVNgdKbyuc9oMJFINv6Z5jvSCd7%2BWHdWK8ewogXzPyZNwPHVThgvirkmKjLLtvIQDLtfM51u8slgWcWwmmh5GmVdu%2B%2BSTdr7VZ9Ag4MyG68Y6MjzFHGBYfMPGcRRSxoYidxylYbg9rVTBZtUUwMGFro3%2BrgcIsAh%2BufU5Y7Hgw%2BID7vQY6pgFVN0EIF1XPitCO3hvN1G1C9HBxqHyKqv%2Bu0u8IEoAZ9J3zfdazOdrZH3E7xwWeMaunNxL%2BFnX%2FyorGMo6zKLxdPCmcQUUCm%2FD9QEuOR6abCPOs%2BcDejLmZHCVP3xB2GNXAHHPJlGgKmTL3et8EZYwRqzW767Jg0JxgggWaIxL2Ida4BzZ0%2F1o6upqtWRrr5KvWHc4NspeWkY0EiEBTP%2BybTcgemlbB&X-Amz-Signature=37b25279d18abd65df8a4dacade0d1feb02e12711c94ad945933da3748e82c6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676JZM5BH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFT0nsvjeH7JdK14tq9EYn4Rr%2FLRa6ZB1gXUCL7D67P4AiATeY1wkAyxd%2FSPoFXaiNBWAEzUQV3iKFLrgt%2Byz0d6XCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMXQ%2FSaE7ZCNLRO4GPKtwDY7lumZEWwAdQmb4L8Uv8cOyEHZ0%2BEP0iBOj1jq6VU%2FI7sGK3korzezjeKxZLzlx3Yqew60DGhEy86xwYWmiX0%2BMzMD%2B2YxbE6TAwvFVVzQMHt36LLrPfxEHYT9mlj4AyxpwvKKWT6ZKapopUEyuEs5s6WrRqyaC9s0FRkgHntDfcVelEKSnzNnKLHQkf91ZwwVvhIMgQ0ddMQWeFq7O1wapw60XecibR72EELl3UOTuJGD5w%2Fyi23OgpV3JUPC7a%2FjPt09IOUo%2BBRRboJgWytVkwdTG%2BqNgSX6fjLgY4E66s4g2UfafskEwpFQBu%2BdGihqLvoAuXKELBGnoKpF5fL0WfkB%2BdOw8XDUr90Sosx1UzrdPf7JhwEj%2BZ7ewJCRxa8FsukkwOsSQh8TWWNCin7wfVw8zm9gwe5%2FInE2F7PwgohWmyzrtAFtfoNf8uVeGYYpA23MMxWsMjIomN5dAVNgdKbyuc9oMJFINv6Z5jvSCd7%2BWHdWK8ewogXzPyZNwPHVThgvirkmKjLLtvIQDLtfM51u8slgWcWwmmh5GmVdu%2B%2BSTdr7VZ9Ag4MyG68Y6MjzFHGBYfMPGcRRSxoYidxylYbg9rVTBZtUUwMGFro3%2BrgcIsAh%2BufU5Y7Hgw%2BID7vQY6pgFVN0EIF1XPitCO3hvN1G1C9HBxqHyKqv%2Bu0u8IEoAZ9J3zfdazOdrZH3E7xwWeMaunNxL%2BFnX%2FyorGMo6zKLxdPCmcQUUCm%2FD9QEuOR6abCPOs%2BcDejLmZHCVP3xB2GNXAHHPJlGgKmTL3et8EZYwRqzW767Jg0JxgggWaIxL2Ida4BzZ0%2F1o6upqtWRrr5KvWHc4NspeWkY0EiEBTP%2BybTcgemlbB&X-Amz-Signature=4571a8ff6e4f112f83a35d02adc5678cf3d44550d12d1e26125f3dc46fbff29f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676JZM5BH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFT0nsvjeH7JdK14tq9EYn4Rr%2FLRa6ZB1gXUCL7D67P4AiATeY1wkAyxd%2FSPoFXaiNBWAEzUQV3iKFLrgt%2Byz0d6XCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMXQ%2FSaE7ZCNLRO4GPKtwDY7lumZEWwAdQmb4L8Uv8cOyEHZ0%2BEP0iBOj1jq6VU%2FI7sGK3korzezjeKxZLzlx3Yqew60DGhEy86xwYWmiX0%2BMzMD%2B2YxbE6TAwvFVVzQMHt36LLrPfxEHYT9mlj4AyxpwvKKWT6ZKapopUEyuEs5s6WrRqyaC9s0FRkgHntDfcVelEKSnzNnKLHQkf91ZwwVvhIMgQ0ddMQWeFq7O1wapw60XecibR72EELl3UOTuJGD5w%2Fyi23OgpV3JUPC7a%2FjPt09IOUo%2BBRRboJgWytVkwdTG%2BqNgSX6fjLgY4E66s4g2UfafskEwpFQBu%2BdGihqLvoAuXKELBGnoKpF5fL0WfkB%2BdOw8XDUr90Sosx1UzrdPf7JhwEj%2BZ7ewJCRxa8FsukkwOsSQh8TWWNCin7wfVw8zm9gwe5%2FInE2F7PwgohWmyzrtAFtfoNf8uVeGYYpA23MMxWsMjIomN5dAVNgdKbyuc9oMJFINv6Z5jvSCd7%2BWHdWK8ewogXzPyZNwPHVThgvirkmKjLLtvIQDLtfM51u8slgWcWwmmh5GmVdu%2B%2BSTdr7VZ9Ag4MyG68Y6MjzFHGBYfMPGcRRSxoYidxylYbg9rVTBZtUUwMGFro3%2BrgcIsAh%2BufU5Y7Hgw%2BID7vQY6pgFVN0EIF1XPitCO3hvN1G1C9HBxqHyKqv%2Bu0u8IEoAZ9J3zfdazOdrZH3E7xwWeMaunNxL%2BFnX%2FyorGMo6zKLxdPCmcQUUCm%2FD9QEuOR6abCPOs%2BcDejLmZHCVP3xB2GNXAHHPJlGgKmTL3et8EZYwRqzW767Jg0JxgggWaIxL2Ida4BzZ0%2F1o6upqtWRrr5KvWHc4NspeWkY0EiEBTP%2BybTcgemlbB&X-Amz-Signature=b8dfe5e2ee1654e48ec6a10ffe212a114228e3d209b97bdbce2677c168eefd95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676JZM5BH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFT0nsvjeH7JdK14tq9EYn4Rr%2FLRa6ZB1gXUCL7D67P4AiATeY1wkAyxd%2FSPoFXaiNBWAEzUQV3iKFLrgt%2Byz0d6XCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMXQ%2FSaE7ZCNLRO4GPKtwDY7lumZEWwAdQmb4L8Uv8cOyEHZ0%2BEP0iBOj1jq6VU%2FI7sGK3korzezjeKxZLzlx3Yqew60DGhEy86xwYWmiX0%2BMzMD%2B2YxbE6TAwvFVVzQMHt36LLrPfxEHYT9mlj4AyxpwvKKWT6ZKapopUEyuEs5s6WrRqyaC9s0FRkgHntDfcVelEKSnzNnKLHQkf91ZwwVvhIMgQ0ddMQWeFq7O1wapw60XecibR72EELl3UOTuJGD5w%2Fyi23OgpV3JUPC7a%2FjPt09IOUo%2BBRRboJgWytVkwdTG%2BqNgSX6fjLgY4E66s4g2UfafskEwpFQBu%2BdGihqLvoAuXKELBGnoKpF5fL0WfkB%2BdOw8XDUr90Sosx1UzrdPf7JhwEj%2BZ7ewJCRxa8FsukkwOsSQh8TWWNCin7wfVw8zm9gwe5%2FInE2F7PwgohWmyzrtAFtfoNf8uVeGYYpA23MMxWsMjIomN5dAVNgdKbyuc9oMJFINv6Z5jvSCd7%2BWHdWK8ewogXzPyZNwPHVThgvirkmKjLLtvIQDLtfM51u8slgWcWwmmh5GmVdu%2B%2BSTdr7VZ9Ag4MyG68Y6MjzFHGBYfMPGcRRSxoYidxylYbg9rVTBZtUUwMGFro3%2BrgcIsAh%2BufU5Y7Hgw%2BID7vQY6pgFVN0EIF1XPitCO3hvN1G1C9HBxqHyKqv%2Bu0u8IEoAZ9J3zfdazOdrZH3E7xwWeMaunNxL%2BFnX%2FyorGMo6zKLxdPCmcQUUCm%2FD9QEuOR6abCPOs%2BcDejLmZHCVP3xB2GNXAHHPJlGgKmTL3et8EZYwRqzW767Jg0JxgggWaIxL2Ida4BzZ0%2F1o6upqtWRrr5KvWHc4NspeWkY0EiEBTP%2BybTcgemlbB&X-Amz-Signature=55f28c4601d1d81b8617f79b14fe8f0e7f93cf053c434e542e7d378345e0d006&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
