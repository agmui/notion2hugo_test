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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664V75IO4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyGaBbZFCClDnv7FH5TXPzYzR2OitGTfmk5OurXB3eFAiAGXawG85%2BjFSjw6ECpUvdyW4dUXr0NoAEDpJ%2BCEBMYtSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMPSehpjfZmcf9jfUpKtwDE77EGFbbMT8B3dzhOoT0dYGhCCFYkNTh5IMvlZz0JjBATYhYxblX%2FHGckzd7CyeJxYMivwMSUOwR9Q9MTe%2BMbdLu7HpBNSL7DOolYEo8RP%2BFaxoCQ9GarN6jTvCYpExsgYrE0Pnu5w7Xc1ZvjNTceCQGDMNsVb%2FioGrTKRq0HaRNQIgub5M%2FwjCgxhDC2M4KIXhadm4wk2fhjEJZDe82ZOFAvyyCA2Wd7lVJB8DNwxGNl%2FHmwNMwmxXAH%2BULgmnCJnx5lfWO0pHB%2B8X2ewSviV9NnXi5CzELheTyLaW%2F%2F841ipaNcJ5mzuK5nTCMiR8dSkvUHDe2Dn1df7SLhQ0zRY680d0g7ftLExZNkOrOnaK27vsenQ8eHQPUiPlufn62xZkteL77omxI5%2BDESn17ymfJvh%2BnBR7lD58QSoNWdeW57aHSzNb5NkyW1K9q1DzIbEcJGV4Z1rcdH6WGlvPNCWsArjwzF3kBFOpZWGC534%2BR0ypVvGbOcXdz%2F7NsB73l7YdNlGk%2B7VvNWp41VhZ4juEqN9NlBGJxV9CI4TXaBuktaWL71a%2BpgIl8KYudJvUyLAHAkB6z1c7ZV9BMXTkC%2Bjt5LSwdBCTv6kdlkWi5sZtW9vw2oC5G5rczXMwwjsuNvwY6pgGN1TvDZDvEti7t9Apuw7qiMqas5pOiIg%2F7vznhbDfuj6ngG9TX9QElE%2FdkdBGgltKT7B3%2BlD4y8QR9kQb%2FRNkqhCGIA%2BrVByDLTVlLOHnUa8Gx8ptIhiJ1x4CPW4Lu%2FM6gcxt51HSAiOL5lV4k8ya2MnnCG7FoNXUJYN%2BUbCxOgztBJbCxzraD0OnKzVTljBR3gn6aFWRoL5xbtvTnFhIq47gJ9kZI&X-Amz-Signature=58cf8c1a7d1a3fe1132c7755740c6c14804e5cba0f4e117b54bfa61c7cd62069&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664V75IO4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyGaBbZFCClDnv7FH5TXPzYzR2OitGTfmk5OurXB3eFAiAGXawG85%2BjFSjw6ECpUvdyW4dUXr0NoAEDpJ%2BCEBMYtSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMPSehpjfZmcf9jfUpKtwDE77EGFbbMT8B3dzhOoT0dYGhCCFYkNTh5IMvlZz0JjBATYhYxblX%2FHGckzd7CyeJxYMivwMSUOwR9Q9MTe%2BMbdLu7HpBNSL7DOolYEo8RP%2BFaxoCQ9GarN6jTvCYpExsgYrE0Pnu5w7Xc1ZvjNTceCQGDMNsVb%2FioGrTKRq0HaRNQIgub5M%2FwjCgxhDC2M4KIXhadm4wk2fhjEJZDe82ZOFAvyyCA2Wd7lVJB8DNwxGNl%2FHmwNMwmxXAH%2BULgmnCJnx5lfWO0pHB%2B8X2ewSviV9NnXi5CzELheTyLaW%2F%2F841ipaNcJ5mzuK5nTCMiR8dSkvUHDe2Dn1df7SLhQ0zRY680d0g7ftLExZNkOrOnaK27vsenQ8eHQPUiPlufn62xZkteL77omxI5%2BDESn17ymfJvh%2BnBR7lD58QSoNWdeW57aHSzNb5NkyW1K9q1DzIbEcJGV4Z1rcdH6WGlvPNCWsArjwzF3kBFOpZWGC534%2BR0ypVvGbOcXdz%2F7NsB73l7YdNlGk%2B7VvNWp41VhZ4juEqN9NlBGJxV9CI4TXaBuktaWL71a%2BpgIl8KYudJvUyLAHAkB6z1c7ZV9BMXTkC%2Bjt5LSwdBCTv6kdlkWi5sZtW9vw2oC5G5rczXMwwjsuNvwY6pgGN1TvDZDvEti7t9Apuw7qiMqas5pOiIg%2F7vznhbDfuj6ngG9TX9QElE%2FdkdBGgltKT7B3%2BlD4y8QR9kQb%2FRNkqhCGIA%2BrVByDLTVlLOHnUa8Gx8ptIhiJ1x4CPW4Lu%2FM6gcxt51HSAiOL5lV4k8ya2MnnCG7FoNXUJYN%2BUbCxOgztBJbCxzraD0OnKzVTljBR3gn6aFWRoL5xbtvTnFhIq47gJ9kZI&X-Amz-Signature=239fc3410e00466ed0b04d232fe8c60839eacf18d014988bf86370694bf97ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664V75IO4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyGaBbZFCClDnv7FH5TXPzYzR2OitGTfmk5OurXB3eFAiAGXawG85%2BjFSjw6ECpUvdyW4dUXr0NoAEDpJ%2BCEBMYtSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMPSehpjfZmcf9jfUpKtwDE77EGFbbMT8B3dzhOoT0dYGhCCFYkNTh5IMvlZz0JjBATYhYxblX%2FHGckzd7CyeJxYMivwMSUOwR9Q9MTe%2BMbdLu7HpBNSL7DOolYEo8RP%2BFaxoCQ9GarN6jTvCYpExsgYrE0Pnu5w7Xc1ZvjNTceCQGDMNsVb%2FioGrTKRq0HaRNQIgub5M%2FwjCgxhDC2M4KIXhadm4wk2fhjEJZDe82ZOFAvyyCA2Wd7lVJB8DNwxGNl%2FHmwNMwmxXAH%2BULgmnCJnx5lfWO0pHB%2B8X2ewSviV9NnXi5CzELheTyLaW%2F%2F841ipaNcJ5mzuK5nTCMiR8dSkvUHDe2Dn1df7SLhQ0zRY680d0g7ftLExZNkOrOnaK27vsenQ8eHQPUiPlufn62xZkteL77omxI5%2BDESn17ymfJvh%2BnBR7lD58QSoNWdeW57aHSzNb5NkyW1K9q1DzIbEcJGV4Z1rcdH6WGlvPNCWsArjwzF3kBFOpZWGC534%2BR0ypVvGbOcXdz%2F7NsB73l7YdNlGk%2B7VvNWp41VhZ4juEqN9NlBGJxV9CI4TXaBuktaWL71a%2BpgIl8KYudJvUyLAHAkB6z1c7ZV9BMXTkC%2Bjt5LSwdBCTv6kdlkWi5sZtW9vw2oC5G5rczXMwwjsuNvwY6pgGN1TvDZDvEti7t9Apuw7qiMqas5pOiIg%2F7vznhbDfuj6ngG9TX9QElE%2FdkdBGgltKT7B3%2BlD4y8QR9kQb%2FRNkqhCGIA%2BrVByDLTVlLOHnUa8Gx8ptIhiJ1x4CPW4Lu%2FM6gcxt51HSAiOL5lV4k8ya2MnnCG7FoNXUJYN%2BUbCxOgztBJbCxzraD0OnKzVTljBR3gn6aFWRoL5xbtvTnFhIq47gJ9kZI&X-Amz-Signature=bf2f87bb61fdd4316f9fae753e9145e1d04e34995f5b82d7a24aabbb41ae6235&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664V75IO4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyGaBbZFCClDnv7FH5TXPzYzR2OitGTfmk5OurXB3eFAiAGXawG85%2BjFSjw6ECpUvdyW4dUXr0NoAEDpJ%2BCEBMYtSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMPSehpjfZmcf9jfUpKtwDE77EGFbbMT8B3dzhOoT0dYGhCCFYkNTh5IMvlZz0JjBATYhYxblX%2FHGckzd7CyeJxYMivwMSUOwR9Q9MTe%2BMbdLu7HpBNSL7DOolYEo8RP%2BFaxoCQ9GarN6jTvCYpExsgYrE0Pnu5w7Xc1ZvjNTceCQGDMNsVb%2FioGrTKRq0HaRNQIgub5M%2FwjCgxhDC2M4KIXhadm4wk2fhjEJZDe82ZOFAvyyCA2Wd7lVJB8DNwxGNl%2FHmwNMwmxXAH%2BULgmnCJnx5lfWO0pHB%2B8X2ewSviV9NnXi5CzELheTyLaW%2F%2F841ipaNcJ5mzuK5nTCMiR8dSkvUHDe2Dn1df7SLhQ0zRY680d0g7ftLExZNkOrOnaK27vsenQ8eHQPUiPlufn62xZkteL77omxI5%2BDESn17ymfJvh%2BnBR7lD58QSoNWdeW57aHSzNb5NkyW1K9q1DzIbEcJGV4Z1rcdH6WGlvPNCWsArjwzF3kBFOpZWGC534%2BR0ypVvGbOcXdz%2F7NsB73l7YdNlGk%2B7VvNWp41VhZ4juEqN9NlBGJxV9CI4TXaBuktaWL71a%2BpgIl8KYudJvUyLAHAkB6z1c7ZV9BMXTkC%2Bjt5LSwdBCTv6kdlkWi5sZtW9vw2oC5G5rczXMwwjsuNvwY6pgGN1TvDZDvEti7t9Apuw7qiMqas5pOiIg%2F7vznhbDfuj6ngG9TX9QElE%2FdkdBGgltKT7B3%2BlD4y8QR9kQb%2FRNkqhCGIA%2BrVByDLTVlLOHnUa8Gx8ptIhiJ1x4CPW4Lu%2FM6gcxt51HSAiOL5lV4k8ya2MnnCG7FoNXUJYN%2BUbCxOgztBJbCxzraD0OnKzVTljBR3gn6aFWRoL5xbtvTnFhIq47gJ9kZI&X-Amz-Signature=abd063c29918b21d1b770ee9d34f57d3c406d765c54ed3a9ed6ddc7c8342a849&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664V75IO4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyGaBbZFCClDnv7FH5TXPzYzR2OitGTfmk5OurXB3eFAiAGXawG85%2BjFSjw6ECpUvdyW4dUXr0NoAEDpJ%2BCEBMYtSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMPSehpjfZmcf9jfUpKtwDE77EGFbbMT8B3dzhOoT0dYGhCCFYkNTh5IMvlZz0JjBATYhYxblX%2FHGckzd7CyeJxYMivwMSUOwR9Q9MTe%2BMbdLu7HpBNSL7DOolYEo8RP%2BFaxoCQ9GarN6jTvCYpExsgYrE0Pnu5w7Xc1ZvjNTceCQGDMNsVb%2FioGrTKRq0HaRNQIgub5M%2FwjCgxhDC2M4KIXhadm4wk2fhjEJZDe82ZOFAvyyCA2Wd7lVJB8DNwxGNl%2FHmwNMwmxXAH%2BULgmnCJnx5lfWO0pHB%2B8X2ewSviV9NnXi5CzELheTyLaW%2F%2F841ipaNcJ5mzuK5nTCMiR8dSkvUHDe2Dn1df7SLhQ0zRY680d0g7ftLExZNkOrOnaK27vsenQ8eHQPUiPlufn62xZkteL77omxI5%2BDESn17ymfJvh%2BnBR7lD58QSoNWdeW57aHSzNb5NkyW1K9q1DzIbEcJGV4Z1rcdH6WGlvPNCWsArjwzF3kBFOpZWGC534%2BR0ypVvGbOcXdz%2F7NsB73l7YdNlGk%2B7VvNWp41VhZ4juEqN9NlBGJxV9CI4TXaBuktaWL71a%2BpgIl8KYudJvUyLAHAkB6z1c7ZV9BMXTkC%2Bjt5LSwdBCTv6kdlkWi5sZtW9vw2oC5G5rczXMwwjsuNvwY6pgGN1TvDZDvEti7t9Apuw7qiMqas5pOiIg%2F7vznhbDfuj6ngG9TX9QElE%2FdkdBGgltKT7B3%2BlD4y8QR9kQb%2FRNkqhCGIA%2BrVByDLTVlLOHnUa8Gx8ptIhiJ1x4CPW4Lu%2FM6gcxt51HSAiOL5lV4k8ya2MnnCG7FoNXUJYN%2BUbCxOgztBJbCxzraD0OnKzVTljBR3gn6aFWRoL5xbtvTnFhIq47gJ9kZI&X-Amz-Signature=337c4fae638992691812515121d009c7c26c5d3c58332c90801b633ffc821824&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664V75IO4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyGaBbZFCClDnv7FH5TXPzYzR2OitGTfmk5OurXB3eFAiAGXawG85%2BjFSjw6ECpUvdyW4dUXr0NoAEDpJ%2BCEBMYtSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMPSehpjfZmcf9jfUpKtwDE77EGFbbMT8B3dzhOoT0dYGhCCFYkNTh5IMvlZz0JjBATYhYxblX%2FHGckzd7CyeJxYMivwMSUOwR9Q9MTe%2BMbdLu7HpBNSL7DOolYEo8RP%2BFaxoCQ9GarN6jTvCYpExsgYrE0Pnu5w7Xc1ZvjNTceCQGDMNsVb%2FioGrTKRq0HaRNQIgub5M%2FwjCgxhDC2M4KIXhadm4wk2fhjEJZDe82ZOFAvyyCA2Wd7lVJB8DNwxGNl%2FHmwNMwmxXAH%2BULgmnCJnx5lfWO0pHB%2B8X2ewSviV9NnXi5CzELheTyLaW%2F%2F841ipaNcJ5mzuK5nTCMiR8dSkvUHDe2Dn1df7SLhQ0zRY680d0g7ftLExZNkOrOnaK27vsenQ8eHQPUiPlufn62xZkteL77omxI5%2BDESn17ymfJvh%2BnBR7lD58QSoNWdeW57aHSzNb5NkyW1K9q1DzIbEcJGV4Z1rcdH6WGlvPNCWsArjwzF3kBFOpZWGC534%2BR0ypVvGbOcXdz%2F7NsB73l7YdNlGk%2B7VvNWp41VhZ4juEqN9NlBGJxV9CI4TXaBuktaWL71a%2BpgIl8KYudJvUyLAHAkB6z1c7ZV9BMXTkC%2Bjt5LSwdBCTv6kdlkWi5sZtW9vw2oC5G5rczXMwwjsuNvwY6pgGN1TvDZDvEti7t9Apuw7qiMqas5pOiIg%2F7vznhbDfuj6ngG9TX9QElE%2FdkdBGgltKT7B3%2BlD4y8QR9kQb%2FRNkqhCGIA%2BrVByDLTVlLOHnUa8Gx8ptIhiJ1x4CPW4Lu%2FM6gcxt51HSAiOL5lV4k8ya2MnnCG7FoNXUJYN%2BUbCxOgztBJbCxzraD0OnKzVTljBR3gn6aFWRoL5xbtvTnFhIq47gJ9kZI&X-Amz-Signature=290f4578d96ee5422b9ac4ad5345e1f8df110feb1af380eb0d8dbd6219e79d4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664V75IO4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyGaBbZFCClDnv7FH5TXPzYzR2OitGTfmk5OurXB3eFAiAGXawG85%2BjFSjw6ECpUvdyW4dUXr0NoAEDpJ%2BCEBMYtSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMPSehpjfZmcf9jfUpKtwDE77EGFbbMT8B3dzhOoT0dYGhCCFYkNTh5IMvlZz0JjBATYhYxblX%2FHGckzd7CyeJxYMivwMSUOwR9Q9MTe%2BMbdLu7HpBNSL7DOolYEo8RP%2BFaxoCQ9GarN6jTvCYpExsgYrE0Pnu5w7Xc1ZvjNTceCQGDMNsVb%2FioGrTKRq0HaRNQIgub5M%2FwjCgxhDC2M4KIXhadm4wk2fhjEJZDe82ZOFAvyyCA2Wd7lVJB8DNwxGNl%2FHmwNMwmxXAH%2BULgmnCJnx5lfWO0pHB%2B8X2ewSviV9NnXi5CzELheTyLaW%2F%2F841ipaNcJ5mzuK5nTCMiR8dSkvUHDe2Dn1df7SLhQ0zRY680d0g7ftLExZNkOrOnaK27vsenQ8eHQPUiPlufn62xZkteL77omxI5%2BDESn17ymfJvh%2BnBR7lD58QSoNWdeW57aHSzNb5NkyW1K9q1DzIbEcJGV4Z1rcdH6WGlvPNCWsArjwzF3kBFOpZWGC534%2BR0ypVvGbOcXdz%2F7NsB73l7YdNlGk%2B7VvNWp41VhZ4juEqN9NlBGJxV9CI4TXaBuktaWL71a%2BpgIl8KYudJvUyLAHAkB6z1c7ZV9BMXTkC%2Bjt5LSwdBCTv6kdlkWi5sZtW9vw2oC5G5rczXMwwjsuNvwY6pgGN1TvDZDvEti7t9Apuw7qiMqas5pOiIg%2F7vznhbDfuj6ngG9TX9QElE%2FdkdBGgltKT7B3%2BlD4y8QR9kQb%2FRNkqhCGIA%2BrVByDLTVlLOHnUa8Gx8ptIhiJ1x4CPW4Lu%2FM6gcxt51HSAiOL5lV4k8ya2MnnCG7FoNXUJYN%2BUbCxOgztBJbCxzraD0OnKzVTljBR3gn6aFWRoL5xbtvTnFhIq47gJ9kZI&X-Amz-Signature=b8212781fbc6ebc77d9b1839a5eee4144342d569dc3b4f1cc513e221209fd611&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664V75IO4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyGaBbZFCClDnv7FH5TXPzYzR2OitGTfmk5OurXB3eFAiAGXawG85%2BjFSjw6ECpUvdyW4dUXr0NoAEDpJ%2BCEBMYtSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMPSehpjfZmcf9jfUpKtwDE77EGFbbMT8B3dzhOoT0dYGhCCFYkNTh5IMvlZz0JjBATYhYxblX%2FHGckzd7CyeJxYMivwMSUOwR9Q9MTe%2BMbdLu7HpBNSL7DOolYEo8RP%2BFaxoCQ9GarN6jTvCYpExsgYrE0Pnu5w7Xc1ZvjNTceCQGDMNsVb%2FioGrTKRq0HaRNQIgub5M%2FwjCgxhDC2M4KIXhadm4wk2fhjEJZDe82ZOFAvyyCA2Wd7lVJB8DNwxGNl%2FHmwNMwmxXAH%2BULgmnCJnx5lfWO0pHB%2B8X2ewSviV9NnXi5CzELheTyLaW%2F%2F841ipaNcJ5mzuK5nTCMiR8dSkvUHDe2Dn1df7SLhQ0zRY680d0g7ftLExZNkOrOnaK27vsenQ8eHQPUiPlufn62xZkteL77omxI5%2BDESn17ymfJvh%2BnBR7lD58QSoNWdeW57aHSzNb5NkyW1K9q1DzIbEcJGV4Z1rcdH6WGlvPNCWsArjwzF3kBFOpZWGC534%2BR0ypVvGbOcXdz%2F7NsB73l7YdNlGk%2B7VvNWp41VhZ4juEqN9NlBGJxV9CI4TXaBuktaWL71a%2BpgIl8KYudJvUyLAHAkB6z1c7ZV9BMXTkC%2Bjt5LSwdBCTv6kdlkWi5sZtW9vw2oC5G5rczXMwwjsuNvwY6pgGN1TvDZDvEti7t9Apuw7qiMqas5pOiIg%2F7vznhbDfuj6ngG9TX9QElE%2FdkdBGgltKT7B3%2BlD4y8QR9kQb%2FRNkqhCGIA%2BrVByDLTVlLOHnUa8Gx8ptIhiJ1x4CPW4Lu%2FM6gcxt51HSAiOL5lV4k8ya2MnnCG7FoNXUJYN%2BUbCxOgztBJbCxzraD0OnKzVTljBR3gn6aFWRoL5xbtvTnFhIq47gJ9kZI&X-Amz-Signature=19736dd7bfe89d2e6e62ad65e3e69869091f4a4e286b7c1cfe44c7f5b115d4ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
