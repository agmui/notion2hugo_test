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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWRKPUE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCOd93nNd2R%2BQBg%2FQCxXPKFTKPw%2BG%2FkHA6%2B1DbxumaxDgIgLyjNBCpycP7BPmkPLs%2Bxr3p3cmKJjhmOsipXY0sO3zUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXPmhzAt32eQF1vqircA4Zz8mp8FA4VQI2p%2B1OtZux8GKFMHxjEQ0h166q51q4MhtKcc0VIRW5DWHrVbIlXTExHNWsuKg4NHWffeKbR0ZmFNn35ASDiN%2BBunlkS3BQAqOupIGKuMG8LXSz9GK9kneq3ow0FmWICcn3Z51HzmOnpdUHX9uw05w2z1lV7d2NC0bhC0orMshX9LL%2FY%2FjrP%2FCZut53jpdtT1eD%2BSEvm0AGJOXQhHinLZUvyWSkblX1H8RGTz10RsSwwfcZ%2Flgg9On%2BF35R4pJZtN7BpTNxy0JBelf8ZzV%2FObax%2Bx2uGoPPtPvuq8%2FS1YkQX312DuR7%2Foqg6YLK2MeD6TbQOMPE8n9v%2BLHyhIokUHl%2BEucsIIuSRGkIt4HIQjyQxXTR%2B%2FEpLBmpH%2FTkDsJt%2FK5PFCpqCIxIzPXRc14yhkdG5a2SbDAy7fJKOfRNZt4JJRLzaJLtI27o3y5IFJg%2Bb%2FvJdAJqwpNlxyoZvuYYq0KwYP%2Bjib5LHvEHgTH%2BMdwY7ZiQJHy1gYB9zTRRk3L1do4Dnb%2FvWaCp%2FIyORsaEo%2FyFTpClfThLyl1OYZZcsXeO1K%2FQmgRCNP63poJZ4QeE7yOU5c6Z6gbQRpLDKonyYxm9CZEATxMzd0hfEaQlpsr2Q6dBmMJeOj8EGOqUBwX6LVgFQX1%2Bh7S0V3xYhdicB8gOw5lz5WhjvNpvIWTiULjwLLFrFY0DnJ7Oiyi%2FzLapwuEcmC4BCjqdbhUdin1mdSP%2Fu%2Bp5xakcmSIiJQXSON%2FbFCYk5VK5M6yrWhii1CwF%2BG98QVH3VJjHtB1n6wNJDOFYU5NkqHge3x5bdF8PYKvuqxm3%2FwnfqK8nywwuOhAgpSCqqQvOG7QvJhA3EI4U1RQfQ&X-Amz-Signature=f27268d337fe7670515c17f65195519639c3c3c3084f40ba55b7cde26238ae34&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWRKPUE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCOd93nNd2R%2BQBg%2FQCxXPKFTKPw%2BG%2FkHA6%2B1DbxumaxDgIgLyjNBCpycP7BPmkPLs%2Bxr3p3cmKJjhmOsipXY0sO3zUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXPmhzAt32eQF1vqircA4Zz8mp8FA4VQI2p%2B1OtZux8GKFMHxjEQ0h166q51q4MhtKcc0VIRW5DWHrVbIlXTExHNWsuKg4NHWffeKbR0ZmFNn35ASDiN%2BBunlkS3BQAqOupIGKuMG8LXSz9GK9kneq3ow0FmWICcn3Z51HzmOnpdUHX9uw05w2z1lV7d2NC0bhC0orMshX9LL%2FY%2FjrP%2FCZut53jpdtT1eD%2BSEvm0AGJOXQhHinLZUvyWSkblX1H8RGTz10RsSwwfcZ%2Flgg9On%2BF35R4pJZtN7BpTNxy0JBelf8ZzV%2FObax%2Bx2uGoPPtPvuq8%2FS1YkQX312DuR7%2Foqg6YLK2MeD6TbQOMPE8n9v%2BLHyhIokUHl%2BEucsIIuSRGkIt4HIQjyQxXTR%2B%2FEpLBmpH%2FTkDsJt%2FK5PFCpqCIxIzPXRc14yhkdG5a2SbDAy7fJKOfRNZt4JJRLzaJLtI27o3y5IFJg%2Bb%2FvJdAJqwpNlxyoZvuYYq0KwYP%2Bjib5LHvEHgTH%2BMdwY7ZiQJHy1gYB9zTRRk3L1do4Dnb%2FvWaCp%2FIyORsaEo%2FyFTpClfThLyl1OYZZcsXeO1K%2FQmgRCNP63poJZ4QeE7yOU5c6Z6gbQRpLDKonyYxm9CZEATxMzd0hfEaQlpsr2Q6dBmMJeOj8EGOqUBwX6LVgFQX1%2Bh7S0V3xYhdicB8gOw5lz5WhjvNpvIWTiULjwLLFrFY0DnJ7Oiyi%2FzLapwuEcmC4BCjqdbhUdin1mdSP%2Fu%2Bp5xakcmSIiJQXSON%2FbFCYk5VK5M6yrWhii1CwF%2BG98QVH3VJjHtB1n6wNJDOFYU5NkqHge3x5bdF8PYKvuqxm3%2FwnfqK8nywwuOhAgpSCqqQvOG7QvJhA3EI4U1RQfQ&X-Amz-Signature=b56037a42e572e706b00ba21a80a76fb31f65b196e52ad01cef352d1a8d23f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWRKPUE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCOd93nNd2R%2BQBg%2FQCxXPKFTKPw%2BG%2FkHA6%2B1DbxumaxDgIgLyjNBCpycP7BPmkPLs%2Bxr3p3cmKJjhmOsipXY0sO3zUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXPmhzAt32eQF1vqircA4Zz8mp8FA4VQI2p%2B1OtZux8GKFMHxjEQ0h166q51q4MhtKcc0VIRW5DWHrVbIlXTExHNWsuKg4NHWffeKbR0ZmFNn35ASDiN%2BBunlkS3BQAqOupIGKuMG8LXSz9GK9kneq3ow0FmWICcn3Z51HzmOnpdUHX9uw05w2z1lV7d2NC0bhC0orMshX9LL%2FY%2FjrP%2FCZut53jpdtT1eD%2BSEvm0AGJOXQhHinLZUvyWSkblX1H8RGTz10RsSwwfcZ%2Flgg9On%2BF35R4pJZtN7BpTNxy0JBelf8ZzV%2FObax%2Bx2uGoPPtPvuq8%2FS1YkQX312DuR7%2Foqg6YLK2MeD6TbQOMPE8n9v%2BLHyhIokUHl%2BEucsIIuSRGkIt4HIQjyQxXTR%2B%2FEpLBmpH%2FTkDsJt%2FK5PFCpqCIxIzPXRc14yhkdG5a2SbDAy7fJKOfRNZt4JJRLzaJLtI27o3y5IFJg%2Bb%2FvJdAJqwpNlxyoZvuYYq0KwYP%2Bjib5LHvEHgTH%2BMdwY7ZiQJHy1gYB9zTRRk3L1do4Dnb%2FvWaCp%2FIyORsaEo%2FyFTpClfThLyl1OYZZcsXeO1K%2FQmgRCNP63poJZ4QeE7yOU5c6Z6gbQRpLDKonyYxm9CZEATxMzd0hfEaQlpsr2Q6dBmMJeOj8EGOqUBwX6LVgFQX1%2Bh7S0V3xYhdicB8gOw5lz5WhjvNpvIWTiULjwLLFrFY0DnJ7Oiyi%2FzLapwuEcmC4BCjqdbhUdin1mdSP%2Fu%2Bp5xakcmSIiJQXSON%2FbFCYk5VK5M6yrWhii1CwF%2BG98QVH3VJjHtB1n6wNJDOFYU5NkqHge3x5bdF8PYKvuqxm3%2FwnfqK8nywwuOhAgpSCqqQvOG7QvJhA3EI4U1RQfQ&X-Amz-Signature=e5cd6b06af8449a79901946e112338ad30c8f8396e0dff59f9033a3ce09637ed&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWRKPUE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCOd93nNd2R%2BQBg%2FQCxXPKFTKPw%2BG%2FkHA6%2B1DbxumaxDgIgLyjNBCpycP7BPmkPLs%2Bxr3p3cmKJjhmOsipXY0sO3zUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXPmhzAt32eQF1vqircA4Zz8mp8FA4VQI2p%2B1OtZux8GKFMHxjEQ0h166q51q4MhtKcc0VIRW5DWHrVbIlXTExHNWsuKg4NHWffeKbR0ZmFNn35ASDiN%2BBunlkS3BQAqOupIGKuMG8LXSz9GK9kneq3ow0FmWICcn3Z51HzmOnpdUHX9uw05w2z1lV7d2NC0bhC0orMshX9LL%2FY%2FjrP%2FCZut53jpdtT1eD%2BSEvm0AGJOXQhHinLZUvyWSkblX1H8RGTz10RsSwwfcZ%2Flgg9On%2BF35R4pJZtN7BpTNxy0JBelf8ZzV%2FObax%2Bx2uGoPPtPvuq8%2FS1YkQX312DuR7%2Foqg6YLK2MeD6TbQOMPE8n9v%2BLHyhIokUHl%2BEucsIIuSRGkIt4HIQjyQxXTR%2B%2FEpLBmpH%2FTkDsJt%2FK5PFCpqCIxIzPXRc14yhkdG5a2SbDAy7fJKOfRNZt4JJRLzaJLtI27o3y5IFJg%2Bb%2FvJdAJqwpNlxyoZvuYYq0KwYP%2Bjib5LHvEHgTH%2BMdwY7ZiQJHy1gYB9zTRRk3L1do4Dnb%2FvWaCp%2FIyORsaEo%2FyFTpClfThLyl1OYZZcsXeO1K%2FQmgRCNP63poJZ4QeE7yOU5c6Z6gbQRpLDKonyYxm9CZEATxMzd0hfEaQlpsr2Q6dBmMJeOj8EGOqUBwX6LVgFQX1%2Bh7S0V3xYhdicB8gOw5lz5WhjvNpvIWTiULjwLLFrFY0DnJ7Oiyi%2FzLapwuEcmC4BCjqdbhUdin1mdSP%2Fu%2Bp5xakcmSIiJQXSON%2FbFCYk5VK5M6yrWhii1CwF%2BG98QVH3VJjHtB1n6wNJDOFYU5NkqHge3x5bdF8PYKvuqxm3%2FwnfqK8nywwuOhAgpSCqqQvOG7QvJhA3EI4U1RQfQ&X-Amz-Signature=7ed0837b99e7e2e052e64578757ec10a20dc812cecb5ecbf31ff3956c6c9a896&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWRKPUE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCOd93nNd2R%2BQBg%2FQCxXPKFTKPw%2BG%2FkHA6%2B1DbxumaxDgIgLyjNBCpycP7BPmkPLs%2Bxr3p3cmKJjhmOsipXY0sO3zUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXPmhzAt32eQF1vqircA4Zz8mp8FA4VQI2p%2B1OtZux8GKFMHxjEQ0h166q51q4MhtKcc0VIRW5DWHrVbIlXTExHNWsuKg4NHWffeKbR0ZmFNn35ASDiN%2BBunlkS3BQAqOupIGKuMG8LXSz9GK9kneq3ow0FmWICcn3Z51HzmOnpdUHX9uw05w2z1lV7d2NC0bhC0orMshX9LL%2FY%2FjrP%2FCZut53jpdtT1eD%2BSEvm0AGJOXQhHinLZUvyWSkblX1H8RGTz10RsSwwfcZ%2Flgg9On%2BF35R4pJZtN7BpTNxy0JBelf8ZzV%2FObax%2Bx2uGoPPtPvuq8%2FS1YkQX312DuR7%2Foqg6YLK2MeD6TbQOMPE8n9v%2BLHyhIokUHl%2BEucsIIuSRGkIt4HIQjyQxXTR%2B%2FEpLBmpH%2FTkDsJt%2FK5PFCpqCIxIzPXRc14yhkdG5a2SbDAy7fJKOfRNZt4JJRLzaJLtI27o3y5IFJg%2Bb%2FvJdAJqwpNlxyoZvuYYq0KwYP%2Bjib5LHvEHgTH%2BMdwY7ZiQJHy1gYB9zTRRk3L1do4Dnb%2FvWaCp%2FIyORsaEo%2FyFTpClfThLyl1OYZZcsXeO1K%2FQmgRCNP63poJZ4QeE7yOU5c6Z6gbQRpLDKonyYxm9CZEATxMzd0hfEaQlpsr2Q6dBmMJeOj8EGOqUBwX6LVgFQX1%2Bh7S0V3xYhdicB8gOw5lz5WhjvNpvIWTiULjwLLFrFY0DnJ7Oiyi%2FzLapwuEcmC4BCjqdbhUdin1mdSP%2Fu%2Bp5xakcmSIiJQXSON%2FbFCYk5VK5M6yrWhii1CwF%2BG98QVH3VJjHtB1n6wNJDOFYU5NkqHge3x5bdF8PYKvuqxm3%2FwnfqK8nywwuOhAgpSCqqQvOG7QvJhA3EI4U1RQfQ&X-Amz-Signature=7bf865e69b626138d8aedfa671a97e1a26a300c35bfd32d62a6078c9403d67cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWRKPUE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCOd93nNd2R%2BQBg%2FQCxXPKFTKPw%2BG%2FkHA6%2B1DbxumaxDgIgLyjNBCpycP7BPmkPLs%2Bxr3p3cmKJjhmOsipXY0sO3zUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXPmhzAt32eQF1vqircA4Zz8mp8FA4VQI2p%2B1OtZux8GKFMHxjEQ0h166q51q4MhtKcc0VIRW5DWHrVbIlXTExHNWsuKg4NHWffeKbR0ZmFNn35ASDiN%2BBunlkS3BQAqOupIGKuMG8LXSz9GK9kneq3ow0FmWICcn3Z51HzmOnpdUHX9uw05w2z1lV7d2NC0bhC0orMshX9LL%2FY%2FjrP%2FCZut53jpdtT1eD%2BSEvm0AGJOXQhHinLZUvyWSkblX1H8RGTz10RsSwwfcZ%2Flgg9On%2BF35R4pJZtN7BpTNxy0JBelf8ZzV%2FObax%2Bx2uGoPPtPvuq8%2FS1YkQX312DuR7%2Foqg6YLK2MeD6TbQOMPE8n9v%2BLHyhIokUHl%2BEucsIIuSRGkIt4HIQjyQxXTR%2B%2FEpLBmpH%2FTkDsJt%2FK5PFCpqCIxIzPXRc14yhkdG5a2SbDAy7fJKOfRNZt4JJRLzaJLtI27o3y5IFJg%2Bb%2FvJdAJqwpNlxyoZvuYYq0KwYP%2Bjib5LHvEHgTH%2BMdwY7ZiQJHy1gYB9zTRRk3L1do4Dnb%2FvWaCp%2FIyORsaEo%2FyFTpClfThLyl1OYZZcsXeO1K%2FQmgRCNP63poJZ4QeE7yOU5c6Z6gbQRpLDKonyYxm9CZEATxMzd0hfEaQlpsr2Q6dBmMJeOj8EGOqUBwX6LVgFQX1%2Bh7S0V3xYhdicB8gOw5lz5WhjvNpvIWTiULjwLLFrFY0DnJ7Oiyi%2FzLapwuEcmC4BCjqdbhUdin1mdSP%2Fu%2Bp5xakcmSIiJQXSON%2FbFCYk5VK5M6yrWhii1CwF%2BG98QVH3VJjHtB1n6wNJDOFYU5NkqHge3x5bdF8PYKvuqxm3%2FwnfqK8nywwuOhAgpSCqqQvOG7QvJhA3EI4U1RQfQ&X-Amz-Signature=940279c1c35cbb9d7c683887c3c006ee85c406bbcbea5ff966930beeabeff7d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWRKPUE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCOd93nNd2R%2BQBg%2FQCxXPKFTKPw%2BG%2FkHA6%2B1DbxumaxDgIgLyjNBCpycP7BPmkPLs%2Bxr3p3cmKJjhmOsipXY0sO3zUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXPmhzAt32eQF1vqircA4Zz8mp8FA4VQI2p%2B1OtZux8GKFMHxjEQ0h166q51q4MhtKcc0VIRW5DWHrVbIlXTExHNWsuKg4NHWffeKbR0ZmFNn35ASDiN%2BBunlkS3BQAqOupIGKuMG8LXSz9GK9kneq3ow0FmWICcn3Z51HzmOnpdUHX9uw05w2z1lV7d2NC0bhC0orMshX9LL%2FY%2FjrP%2FCZut53jpdtT1eD%2BSEvm0AGJOXQhHinLZUvyWSkblX1H8RGTz10RsSwwfcZ%2Flgg9On%2BF35R4pJZtN7BpTNxy0JBelf8ZzV%2FObax%2Bx2uGoPPtPvuq8%2FS1YkQX312DuR7%2Foqg6YLK2MeD6TbQOMPE8n9v%2BLHyhIokUHl%2BEucsIIuSRGkIt4HIQjyQxXTR%2B%2FEpLBmpH%2FTkDsJt%2FK5PFCpqCIxIzPXRc14yhkdG5a2SbDAy7fJKOfRNZt4JJRLzaJLtI27o3y5IFJg%2Bb%2FvJdAJqwpNlxyoZvuYYq0KwYP%2Bjib5LHvEHgTH%2BMdwY7ZiQJHy1gYB9zTRRk3L1do4Dnb%2FvWaCp%2FIyORsaEo%2FyFTpClfThLyl1OYZZcsXeO1K%2FQmgRCNP63poJZ4QeE7yOU5c6Z6gbQRpLDKonyYxm9CZEATxMzd0hfEaQlpsr2Q6dBmMJeOj8EGOqUBwX6LVgFQX1%2Bh7S0V3xYhdicB8gOw5lz5WhjvNpvIWTiULjwLLFrFY0DnJ7Oiyi%2FzLapwuEcmC4BCjqdbhUdin1mdSP%2Fu%2Bp5xakcmSIiJQXSON%2FbFCYk5VK5M6yrWhii1CwF%2BG98QVH3VJjHtB1n6wNJDOFYU5NkqHge3x5bdF8PYKvuqxm3%2FwnfqK8nywwuOhAgpSCqqQvOG7QvJhA3EI4U1RQfQ&X-Amz-Signature=d0eca5ffe9bfc08ac94f5595b2b93898fec079479f108893c5a717599d0a4c70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWRKPUE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCOd93nNd2R%2BQBg%2FQCxXPKFTKPw%2BG%2FkHA6%2B1DbxumaxDgIgLyjNBCpycP7BPmkPLs%2Bxr3p3cmKJjhmOsipXY0sO3zUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXPmhzAt32eQF1vqircA4Zz8mp8FA4VQI2p%2B1OtZux8GKFMHxjEQ0h166q51q4MhtKcc0VIRW5DWHrVbIlXTExHNWsuKg4NHWffeKbR0ZmFNn35ASDiN%2BBunlkS3BQAqOupIGKuMG8LXSz9GK9kneq3ow0FmWICcn3Z51HzmOnpdUHX9uw05w2z1lV7d2NC0bhC0orMshX9LL%2FY%2FjrP%2FCZut53jpdtT1eD%2BSEvm0AGJOXQhHinLZUvyWSkblX1H8RGTz10RsSwwfcZ%2Flgg9On%2BF35R4pJZtN7BpTNxy0JBelf8ZzV%2FObax%2Bx2uGoPPtPvuq8%2FS1YkQX312DuR7%2Foqg6YLK2MeD6TbQOMPE8n9v%2BLHyhIokUHl%2BEucsIIuSRGkIt4HIQjyQxXTR%2B%2FEpLBmpH%2FTkDsJt%2FK5PFCpqCIxIzPXRc14yhkdG5a2SbDAy7fJKOfRNZt4JJRLzaJLtI27o3y5IFJg%2Bb%2FvJdAJqwpNlxyoZvuYYq0KwYP%2Bjib5LHvEHgTH%2BMdwY7ZiQJHy1gYB9zTRRk3L1do4Dnb%2FvWaCp%2FIyORsaEo%2FyFTpClfThLyl1OYZZcsXeO1K%2FQmgRCNP63poJZ4QeE7yOU5c6Z6gbQRpLDKonyYxm9CZEATxMzd0hfEaQlpsr2Q6dBmMJeOj8EGOqUBwX6LVgFQX1%2Bh7S0V3xYhdicB8gOw5lz5WhjvNpvIWTiULjwLLFrFY0DnJ7Oiyi%2FzLapwuEcmC4BCjqdbhUdin1mdSP%2Fu%2Bp5xakcmSIiJQXSON%2FbFCYk5VK5M6yrWhii1CwF%2BG98QVH3VJjHtB1n6wNJDOFYU5NkqHge3x5bdF8PYKvuqxm3%2FwnfqK8nywwuOhAgpSCqqQvOG7QvJhA3EI4U1RQfQ&X-Amz-Signature=9902e8a58bb5d4836ae59f836fb951707bbf7a8b59bcae66e2311229f79c1e6e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
