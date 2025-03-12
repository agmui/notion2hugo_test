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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUI6Y3C%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGtL3pMwEtP7LG7Pl0MTMk63O0aUrR6wzRJ%2BrUePdD7WAiAxTuIAxwoU6KF0BSEheBF8kOufBvY5r5c2MyvmH6ZFyiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG2sv%2B98grz1KZHVKKtwD53qQ98LKFqZt7klRimtQQGC7zUC%2FjMipDYdCOB07IRdl7SsOtxnXzi7y7Ib%2FkMbjlTVoeRScUqqnD6Ooq6wMfLexy8RYHUIo%2F5DBnJMjogjI%2B%2BIWrygZcCPJSEUBoXWPGCUtAqP19ObaPdtrnfb1ZbWKHR%2F2zg7JjskILKc6p7Yey3uoh7jGiTq5WP99SNCItGbr3VAa%2Bk0Ujh%2BdcbHDog%2BJhThrH7We6F4YOhulZGKo1iPpumUjAV97rF%2Fmhc9ekQqmM8fC93E9VNSJ9XfTCGAOI8tQoBKkEeOswntzZB6QXhVCXJ%2FkTDJl7eaWiEPXaYYF1bBjXapSh0ukBQnLXYMvPHBntifks0sqxXgBYlMJWmIappvrNhwhxI94lh1FeHEpJWg0Q7UcS6KpD7i0NASET2pHx64nApPLF8rlUNo4iIfZUv74rUdmUNJc7%2B4Keeif0wDGqNkQmkJKYJf4jTX2LvnH3cBybiS5XyT%2FUB9BaxRE6ZAAyjFokEhITkUGxKXxR9k2%2BRk5qHgyQ2PNeI8HK6NelW5jvrYPnGvpAWTA8h8r4yga0ZgutVzSECa0AvEAzg1PJqELwb6JUtL1q3Ow4VQ%2BPUdxA7jpSiJlNj6lG%2F%2FDygjTZuTi9Ycwy%2FvDvgY6pgGcovdu3RG3fzyp0%2F0plIFtbeoKaa%2BjyErbAK3O%2BrxxRbCS83P3GQHrYyL4u5C4l9ZTByqME0aWxzVvZbXhoTnAc0PbwvKE1ijw3Ngpo9LcBG%2BjJAvoR%2F7ssPEw6GAZk2mtvv0bd63eUX3WGyvKDSgd0nRZfittPHhp0QWvJnVJNpgqT3QSQDYdFdQU4B3l6uklvK3639Sb8xrJbLCdaSu9Iwc5plvv&X-Amz-Signature=f31bf6108e7941190a29266576fa946d59ea2a26f99b3098be67642ba89e1977&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUI6Y3C%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGtL3pMwEtP7LG7Pl0MTMk63O0aUrR6wzRJ%2BrUePdD7WAiAxTuIAxwoU6KF0BSEheBF8kOufBvY5r5c2MyvmH6ZFyiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG2sv%2B98grz1KZHVKKtwD53qQ98LKFqZt7klRimtQQGC7zUC%2FjMipDYdCOB07IRdl7SsOtxnXzi7y7Ib%2FkMbjlTVoeRScUqqnD6Ooq6wMfLexy8RYHUIo%2F5DBnJMjogjI%2B%2BIWrygZcCPJSEUBoXWPGCUtAqP19ObaPdtrnfb1ZbWKHR%2F2zg7JjskILKc6p7Yey3uoh7jGiTq5WP99SNCItGbr3VAa%2Bk0Ujh%2BdcbHDog%2BJhThrH7We6F4YOhulZGKo1iPpumUjAV97rF%2Fmhc9ekQqmM8fC93E9VNSJ9XfTCGAOI8tQoBKkEeOswntzZB6QXhVCXJ%2FkTDJl7eaWiEPXaYYF1bBjXapSh0ukBQnLXYMvPHBntifks0sqxXgBYlMJWmIappvrNhwhxI94lh1FeHEpJWg0Q7UcS6KpD7i0NASET2pHx64nApPLF8rlUNo4iIfZUv74rUdmUNJc7%2B4Keeif0wDGqNkQmkJKYJf4jTX2LvnH3cBybiS5XyT%2FUB9BaxRE6ZAAyjFokEhITkUGxKXxR9k2%2BRk5qHgyQ2PNeI8HK6NelW5jvrYPnGvpAWTA8h8r4yga0ZgutVzSECa0AvEAzg1PJqELwb6JUtL1q3Ow4VQ%2BPUdxA7jpSiJlNj6lG%2F%2FDygjTZuTi9Ycwy%2FvDvgY6pgGcovdu3RG3fzyp0%2F0plIFtbeoKaa%2BjyErbAK3O%2BrxxRbCS83P3GQHrYyL4u5C4l9ZTByqME0aWxzVvZbXhoTnAc0PbwvKE1ijw3Ngpo9LcBG%2BjJAvoR%2F7ssPEw6GAZk2mtvv0bd63eUX3WGyvKDSgd0nRZfittPHhp0QWvJnVJNpgqT3QSQDYdFdQU4B3l6uklvK3639Sb8xrJbLCdaSu9Iwc5plvv&X-Amz-Signature=8fd5003222bf44b5090230de8fb644d61c32a3d9ee6b9207a858c9f50f4fb1d4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUI6Y3C%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGtL3pMwEtP7LG7Pl0MTMk63O0aUrR6wzRJ%2BrUePdD7WAiAxTuIAxwoU6KF0BSEheBF8kOufBvY5r5c2MyvmH6ZFyiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG2sv%2B98grz1KZHVKKtwD53qQ98LKFqZt7klRimtQQGC7zUC%2FjMipDYdCOB07IRdl7SsOtxnXzi7y7Ib%2FkMbjlTVoeRScUqqnD6Ooq6wMfLexy8RYHUIo%2F5DBnJMjogjI%2B%2BIWrygZcCPJSEUBoXWPGCUtAqP19ObaPdtrnfb1ZbWKHR%2F2zg7JjskILKc6p7Yey3uoh7jGiTq5WP99SNCItGbr3VAa%2Bk0Ujh%2BdcbHDog%2BJhThrH7We6F4YOhulZGKo1iPpumUjAV97rF%2Fmhc9ekQqmM8fC93E9VNSJ9XfTCGAOI8tQoBKkEeOswntzZB6QXhVCXJ%2FkTDJl7eaWiEPXaYYF1bBjXapSh0ukBQnLXYMvPHBntifks0sqxXgBYlMJWmIappvrNhwhxI94lh1FeHEpJWg0Q7UcS6KpD7i0NASET2pHx64nApPLF8rlUNo4iIfZUv74rUdmUNJc7%2B4Keeif0wDGqNkQmkJKYJf4jTX2LvnH3cBybiS5XyT%2FUB9BaxRE6ZAAyjFokEhITkUGxKXxR9k2%2BRk5qHgyQ2PNeI8HK6NelW5jvrYPnGvpAWTA8h8r4yga0ZgutVzSECa0AvEAzg1PJqELwb6JUtL1q3Ow4VQ%2BPUdxA7jpSiJlNj6lG%2F%2FDygjTZuTi9Ycwy%2FvDvgY6pgGcovdu3RG3fzyp0%2F0plIFtbeoKaa%2BjyErbAK3O%2BrxxRbCS83P3GQHrYyL4u5C4l9ZTByqME0aWxzVvZbXhoTnAc0PbwvKE1ijw3Ngpo9LcBG%2BjJAvoR%2F7ssPEw6GAZk2mtvv0bd63eUX3WGyvKDSgd0nRZfittPHhp0QWvJnVJNpgqT3QSQDYdFdQU4B3l6uklvK3639Sb8xrJbLCdaSu9Iwc5plvv&X-Amz-Signature=61bd5dfaf071fe8f58f01fa2861f11fcec572dad9a37ffc276529f58821d0d17&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUI6Y3C%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGtL3pMwEtP7LG7Pl0MTMk63O0aUrR6wzRJ%2BrUePdD7WAiAxTuIAxwoU6KF0BSEheBF8kOufBvY5r5c2MyvmH6ZFyiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG2sv%2B98grz1KZHVKKtwD53qQ98LKFqZt7klRimtQQGC7zUC%2FjMipDYdCOB07IRdl7SsOtxnXzi7y7Ib%2FkMbjlTVoeRScUqqnD6Ooq6wMfLexy8RYHUIo%2F5DBnJMjogjI%2B%2BIWrygZcCPJSEUBoXWPGCUtAqP19ObaPdtrnfb1ZbWKHR%2F2zg7JjskILKc6p7Yey3uoh7jGiTq5WP99SNCItGbr3VAa%2Bk0Ujh%2BdcbHDog%2BJhThrH7We6F4YOhulZGKo1iPpumUjAV97rF%2Fmhc9ekQqmM8fC93E9VNSJ9XfTCGAOI8tQoBKkEeOswntzZB6QXhVCXJ%2FkTDJl7eaWiEPXaYYF1bBjXapSh0ukBQnLXYMvPHBntifks0sqxXgBYlMJWmIappvrNhwhxI94lh1FeHEpJWg0Q7UcS6KpD7i0NASET2pHx64nApPLF8rlUNo4iIfZUv74rUdmUNJc7%2B4Keeif0wDGqNkQmkJKYJf4jTX2LvnH3cBybiS5XyT%2FUB9BaxRE6ZAAyjFokEhITkUGxKXxR9k2%2BRk5qHgyQ2PNeI8HK6NelW5jvrYPnGvpAWTA8h8r4yga0ZgutVzSECa0AvEAzg1PJqELwb6JUtL1q3Ow4VQ%2BPUdxA7jpSiJlNj6lG%2F%2FDygjTZuTi9Ycwy%2FvDvgY6pgGcovdu3RG3fzyp0%2F0plIFtbeoKaa%2BjyErbAK3O%2BrxxRbCS83P3GQHrYyL4u5C4l9ZTByqME0aWxzVvZbXhoTnAc0PbwvKE1ijw3Ngpo9LcBG%2BjJAvoR%2F7ssPEw6GAZk2mtvv0bd63eUX3WGyvKDSgd0nRZfittPHhp0QWvJnVJNpgqT3QSQDYdFdQU4B3l6uklvK3639Sb8xrJbLCdaSu9Iwc5plvv&X-Amz-Signature=f8c7a33e805d6bdc0e457228ece22bafbf005b28971d6a492dd09a9149ac3e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUI6Y3C%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGtL3pMwEtP7LG7Pl0MTMk63O0aUrR6wzRJ%2BrUePdD7WAiAxTuIAxwoU6KF0BSEheBF8kOufBvY5r5c2MyvmH6ZFyiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG2sv%2B98grz1KZHVKKtwD53qQ98LKFqZt7klRimtQQGC7zUC%2FjMipDYdCOB07IRdl7SsOtxnXzi7y7Ib%2FkMbjlTVoeRScUqqnD6Ooq6wMfLexy8RYHUIo%2F5DBnJMjogjI%2B%2BIWrygZcCPJSEUBoXWPGCUtAqP19ObaPdtrnfb1ZbWKHR%2F2zg7JjskILKc6p7Yey3uoh7jGiTq5WP99SNCItGbr3VAa%2Bk0Ujh%2BdcbHDog%2BJhThrH7We6F4YOhulZGKo1iPpumUjAV97rF%2Fmhc9ekQqmM8fC93E9VNSJ9XfTCGAOI8tQoBKkEeOswntzZB6QXhVCXJ%2FkTDJl7eaWiEPXaYYF1bBjXapSh0ukBQnLXYMvPHBntifks0sqxXgBYlMJWmIappvrNhwhxI94lh1FeHEpJWg0Q7UcS6KpD7i0NASET2pHx64nApPLF8rlUNo4iIfZUv74rUdmUNJc7%2B4Keeif0wDGqNkQmkJKYJf4jTX2LvnH3cBybiS5XyT%2FUB9BaxRE6ZAAyjFokEhITkUGxKXxR9k2%2BRk5qHgyQ2PNeI8HK6NelW5jvrYPnGvpAWTA8h8r4yga0ZgutVzSECa0AvEAzg1PJqELwb6JUtL1q3Ow4VQ%2BPUdxA7jpSiJlNj6lG%2F%2FDygjTZuTi9Ycwy%2FvDvgY6pgGcovdu3RG3fzyp0%2F0plIFtbeoKaa%2BjyErbAK3O%2BrxxRbCS83P3GQHrYyL4u5C4l9ZTByqME0aWxzVvZbXhoTnAc0PbwvKE1ijw3Ngpo9LcBG%2BjJAvoR%2F7ssPEw6GAZk2mtvv0bd63eUX3WGyvKDSgd0nRZfittPHhp0QWvJnVJNpgqT3QSQDYdFdQU4B3l6uklvK3639Sb8xrJbLCdaSu9Iwc5plvv&X-Amz-Signature=b4a9ff2065d86147a5180f86b768872e8674afd084409ee6a2ec423906cb81ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUI6Y3C%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGtL3pMwEtP7LG7Pl0MTMk63O0aUrR6wzRJ%2BrUePdD7WAiAxTuIAxwoU6KF0BSEheBF8kOufBvY5r5c2MyvmH6ZFyiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG2sv%2B98grz1KZHVKKtwD53qQ98LKFqZt7klRimtQQGC7zUC%2FjMipDYdCOB07IRdl7SsOtxnXzi7y7Ib%2FkMbjlTVoeRScUqqnD6Ooq6wMfLexy8RYHUIo%2F5DBnJMjogjI%2B%2BIWrygZcCPJSEUBoXWPGCUtAqP19ObaPdtrnfb1ZbWKHR%2F2zg7JjskILKc6p7Yey3uoh7jGiTq5WP99SNCItGbr3VAa%2Bk0Ujh%2BdcbHDog%2BJhThrH7We6F4YOhulZGKo1iPpumUjAV97rF%2Fmhc9ekQqmM8fC93E9VNSJ9XfTCGAOI8tQoBKkEeOswntzZB6QXhVCXJ%2FkTDJl7eaWiEPXaYYF1bBjXapSh0ukBQnLXYMvPHBntifks0sqxXgBYlMJWmIappvrNhwhxI94lh1FeHEpJWg0Q7UcS6KpD7i0NASET2pHx64nApPLF8rlUNo4iIfZUv74rUdmUNJc7%2B4Keeif0wDGqNkQmkJKYJf4jTX2LvnH3cBybiS5XyT%2FUB9BaxRE6ZAAyjFokEhITkUGxKXxR9k2%2BRk5qHgyQ2PNeI8HK6NelW5jvrYPnGvpAWTA8h8r4yga0ZgutVzSECa0AvEAzg1PJqELwb6JUtL1q3Ow4VQ%2BPUdxA7jpSiJlNj6lG%2F%2FDygjTZuTi9Ycwy%2FvDvgY6pgGcovdu3RG3fzyp0%2F0plIFtbeoKaa%2BjyErbAK3O%2BrxxRbCS83P3GQHrYyL4u5C4l9ZTByqME0aWxzVvZbXhoTnAc0PbwvKE1ijw3Ngpo9LcBG%2BjJAvoR%2F7ssPEw6GAZk2mtvv0bd63eUX3WGyvKDSgd0nRZfittPHhp0QWvJnVJNpgqT3QSQDYdFdQU4B3l6uklvK3639Sb8xrJbLCdaSu9Iwc5plvv&X-Amz-Signature=fbbef8d60ad638a9c43131e53bbfd24cb44c690b4f9e84b7edaf56db35ce8327&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUI6Y3C%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGtL3pMwEtP7LG7Pl0MTMk63O0aUrR6wzRJ%2BrUePdD7WAiAxTuIAxwoU6KF0BSEheBF8kOufBvY5r5c2MyvmH6ZFyiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG2sv%2B98grz1KZHVKKtwD53qQ98LKFqZt7klRimtQQGC7zUC%2FjMipDYdCOB07IRdl7SsOtxnXzi7y7Ib%2FkMbjlTVoeRScUqqnD6Ooq6wMfLexy8RYHUIo%2F5DBnJMjogjI%2B%2BIWrygZcCPJSEUBoXWPGCUtAqP19ObaPdtrnfb1ZbWKHR%2F2zg7JjskILKc6p7Yey3uoh7jGiTq5WP99SNCItGbr3VAa%2Bk0Ujh%2BdcbHDog%2BJhThrH7We6F4YOhulZGKo1iPpumUjAV97rF%2Fmhc9ekQqmM8fC93E9VNSJ9XfTCGAOI8tQoBKkEeOswntzZB6QXhVCXJ%2FkTDJl7eaWiEPXaYYF1bBjXapSh0ukBQnLXYMvPHBntifks0sqxXgBYlMJWmIappvrNhwhxI94lh1FeHEpJWg0Q7UcS6KpD7i0NASET2pHx64nApPLF8rlUNo4iIfZUv74rUdmUNJc7%2B4Keeif0wDGqNkQmkJKYJf4jTX2LvnH3cBybiS5XyT%2FUB9BaxRE6ZAAyjFokEhITkUGxKXxR9k2%2BRk5qHgyQ2PNeI8HK6NelW5jvrYPnGvpAWTA8h8r4yga0ZgutVzSECa0AvEAzg1PJqELwb6JUtL1q3Ow4VQ%2BPUdxA7jpSiJlNj6lG%2F%2FDygjTZuTi9Ycwy%2FvDvgY6pgGcovdu3RG3fzyp0%2F0plIFtbeoKaa%2BjyErbAK3O%2BrxxRbCS83P3GQHrYyL4u5C4l9ZTByqME0aWxzVvZbXhoTnAc0PbwvKE1ijw3Ngpo9LcBG%2BjJAvoR%2F7ssPEw6GAZk2mtvv0bd63eUX3WGyvKDSgd0nRZfittPHhp0QWvJnVJNpgqT3QSQDYdFdQU4B3l6uklvK3639Sb8xrJbLCdaSu9Iwc5plvv&X-Amz-Signature=07d2f9129b55a8937e02244197a98f559eabeaf94ac853234772f9a0cfdd7eb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUI6Y3C%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGtL3pMwEtP7LG7Pl0MTMk63O0aUrR6wzRJ%2BrUePdD7WAiAxTuIAxwoU6KF0BSEheBF8kOufBvY5r5c2MyvmH6ZFyiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG2sv%2B98grz1KZHVKKtwD53qQ98LKFqZt7klRimtQQGC7zUC%2FjMipDYdCOB07IRdl7SsOtxnXzi7y7Ib%2FkMbjlTVoeRScUqqnD6Ooq6wMfLexy8RYHUIo%2F5DBnJMjogjI%2B%2BIWrygZcCPJSEUBoXWPGCUtAqP19ObaPdtrnfb1ZbWKHR%2F2zg7JjskILKc6p7Yey3uoh7jGiTq5WP99SNCItGbr3VAa%2Bk0Ujh%2BdcbHDog%2BJhThrH7We6F4YOhulZGKo1iPpumUjAV97rF%2Fmhc9ekQqmM8fC93E9VNSJ9XfTCGAOI8tQoBKkEeOswntzZB6QXhVCXJ%2FkTDJl7eaWiEPXaYYF1bBjXapSh0ukBQnLXYMvPHBntifks0sqxXgBYlMJWmIappvrNhwhxI94lh1FeHEpJWg0Q7UcS6KpD7i0NASET2pHx64nApPLF8rlUNo4iIfZUv74rUdmUNJc7%2B4Keeif0wDGqNkQmkJKYJf4jTX2LvnH3cBybiS5XyT%2FUB9BaxRE6ZAAyjFokEhITkUGxKXxR9k2%2BRk5qHgyQ2PNeI8HK6NelW5jvrYPnGvpAWTA8h8r4yga0ZgutVzSECa0AvEAzg1PJqELwb6JUtL1q3Ow4VQ%2BPUdxA7jpSiJlNj6lG%2F%2FDygjTZuTi9Ycwy%2FvDvgY6pgGcovdu3RG3fzyp0%2F0plIFtbeoKaa%2BjyErbAK3O%2BrxxRbCS83P3GQHrYyL4u5C4l9ZTByqME0aWxzVvZbXhoTnAc0PbwvKE1ijw3Ngpo9LcBG%2BjJAvoR%2F7ssPEw6GAZk2mtvv0bd63eUX3WGyvKDSgd0nRZfittPHhp0QWvJnVJNpgqT3QSQDYdFdQU4B3l6uklvK3639Sb8xrJbLCdaSu9Iwc5plvv&X-Amz-Signature=310a1889a1229cddd47d0d2dc35dd725191ebfe9369441cf0852a6efa6245006&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
