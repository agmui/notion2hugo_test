---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DHND73Z%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCR4txQG1Mnh02oaXXiPv5ejw6Cus7NPzMWrV7jdAqV3AIhAMhISwXn2q8d%2FRtpb8qc%2BtevmNKwv70pd%2BHoFbGhwHMUKv8DCDIQABoMNjM3NDIzMTgzODA1IgzpiGXm0t0rqBMdUWYq3APEJcWFhACHEzxK%2BiCzHs8qfNukyUhgCMqaCXMLnUcg4GucHCOFoGckDq6Sw7YHyToCi0WWPtdxeilCFuhZqw%2BQ9p23CyZD8BPlGngteFw7gTCtkzPot4lDEdO%2BjMQ9COmu9z5cFZ2gdeUb6zWwhoMwfV8KmWyZ4UoeKCgMuuEdXkGmjuLnDmI7qE8IaW8hZ908rRjd0w31QXwwSd9SLBAXla670gpR37M%2Fo1OSDyO026Ckcc1IF0OAM27iI%2B3w3W%2Budd%2BE58UGRDap6x4LT2gSjXOloBpHT2wtwozCj9lrWj0YpJ0lrUF1NbwzYYo0yoWmOXP4Bpb3BBdywl2cEGej5XSVFC76%2BkoS23J49jXONwndmjfDk%2BdnsAIqK2C6f4q2COO%2B8aQyx5skh8BKNhCj1TR9kqzfZeyLnK%2Bc8pFVED6cXxUx5jL06fSMoubHhgUzqxBQQlBX%2FF25KRpynQrEK3Jbul9YKW1BsWJ7h2kU1lTqlP3ZWlHnSexnjR%2Flw454rBTDFTP8b%2BWPE4ifSHMcYcF%2B%2F9hWKZRfKb%2B9rYfPq%2BrRFmxe7mdogRcjLAa6qL%2BRVW3CpHivdpC%2BnKMbWe2qL9H0RqIO3iORX4QjPmpYCtgSVaSz5vba6JvuJjDmsInJBjqkAbc3t42eC8ciuFnZVnnmnX7%2Fn%2FpZuO25arZz2vXx2OkPR5weJPuiJPIrtKuaL8NnLBz6oH3IBEfB0hGl4m%2FgGOY4wyAUXlW96Kqc1twUwAIrDUE8qgW2XBSWNyqdrRP9lNPUW6yfIXr0NdaXDqtJqr9jLdkACiglmVZxzXTlev9x1rg1SXy%2BBRhMb83qDke6gSRLTRKfSk3xPY10jFzmW2bpw9kZ&X-Amz-Signature=af2356a8d69d725b9808294809b344ba02fb269b32c9e8433c01a785e70a1d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DHND73Z%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCR4txQG1Mnh02oaXXiPv5ejw6Cus7NPzMWrV7jdAqV3AIhAMhISwXn2q8d%2FRtpb8qc%2BtevmNKwv70pd%2BHoFbGhwHMUKv8DCDIQABoMNjM3NDIzMTgzODA1IgzpiGXm0t0rqBMdUWYq3APEJcWFhACHEzxK%2BiCzHs8qfNukyUhgCMqaCXMLnUcg4GucHCOFoGckDq6Sw7YHyToCi0WWPtdxeilCFuhZqw%2BQ9p23CyZD8BPlGngteFw7gTCtkzPot4lDEdO%2BjMQ9COmu9z5cFZ2gdeUb6zWwhoMwfV8KmWyZ4UoeKCgMuuEdXkGmjuLnDmI7qE8IaW8hZ908rRjd0w31QXwwSd9SLBAXla670gpR37M%2Fo1OSDyO026Ckcc1IF0OAM27iI%2B3w3W%2Budd%2BE58UGRDap6x4LT2gSjXOloBpHT2wtwozCj9lrWj0YpJ0lrUF1NbwzYYo0yoWmOXP4Bpb3BBdywl2cEGej5XSVFC76%2BkoS23J49jXONwndmjfDk%2BdnsAIqK2C6f4q2COO%2B8aQyx5skh8BKNhCj1TR9kqzfZeyLnK%2Bc8pFVED6cXxUx5jL06fSMoubHhgUzqxBQQlBX%2FF25KRpynQrEK3Jbul9YKW1BsWJ7h2kU1lTqlP3ZWlHnSexnjR%2Flw454rBTDFTP8b%2BWPE4ifSHMcYcF%2B%2F9hWKZRfKb%2B9rYfPq%2BrRFmxe7mdogRcjLAa6qL%2BRVW3CpHivdpC%2BnKMbWe2qL9H0RqIO3iORX4QjPmpYCtgSVaSz5vba6JvuJjDmsInJBjqkAbc3t42eC8ciuFnZVnnmnX7%2Fn%2FpZuO25arZz2vXx2OkPR5weJPuiJPIrtKuaL8NnLBz6oH3IBEfB0hGl4m%2FgGOY4wyAUXlW96Kqc1twUwAIrDUE8qgW2XBSWNyqdrRP9lNPUW6yfIXr0NdaXDqtJqr9jLdkACiglmVZxzXTlev9x1rg1SXy%2BBRhMb83qDke6gSRLTRKfSk3xPY10jFzmW2bpw9kZ&X-Amz-Signature=723f47e258d9592dec7e587311598274d5e02e9436db91e773f3976cddc0e413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DHND73Z%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCR4txQG1Mnh02oaXXiPv5ejw6Cus7NPzMWrV7jdAqV3AIhAMhISwXn2q8d%2FRtpb8qc%2BtevmNKwv70pd%2BHoFbGhwHMUKv8DCDIQABoMNjM3NDIzMTgzODA1IgzpiGXm0t0rqBMdUWYq3APEJcWFhACHEzxK%2BiCzHs8qfNukyUhgCMqaCXMLnUcg4GucHCOFoGckDq6Sw7YHyToCi0WWPtdxeilCFuhZqw%2BQ9p23CyZD8BPlGngteFw7gTCtkzPot4lDEdO%2BjMQ9COmu9z5cFZ2gdeUb6zWwhoMwfV8KmWyZ4UoeKCgMuuEdXkGmjuLnDmI7qE8IaW8hZ908rRjd0w31QXwwSd9SLBAXla670gpR37M%2Fo1OSDyO026Ckcc1IF0OAM27iI%2B3w3W%2Budd%2BE58UGRDap6x4LT2gSjXOloBpHT2wtwozCj9lrWj0YpJ0lrUF1NbwzYYo0yoWmOXP4Bpb3BBdywl2cEGej5XSVFC76%2BkoS23J49jXONwndmjfDk%2BdnsAIqK2C6f4q2COO%2B8aQyx5skh8BKNhCj1TR9kqzfZeyLnK%2Bc8pFVED6cXxUx5jL06fSMoubHhgUzqxBQQlBX%2FF25KRpynQrEK3Jbul9YKW1BsWJ7h2kU1lTqlP3ZWlHnSexnjR%2Flw454rBTDFTP8b%2BWPE4ifSHMcYcF%2B%2F9hWKZRfKb%2B9rYfPq%2BrRFmxe7mdogRcjLAa6qL%2BRVW3CpHivdpC%2BnKMbWe2qL9H0RqIO3iORX4QjPmpYCtgSVaSz5vba6JvuJjDmsInJBjqkAbc3t42eC8ciuFnZVnnmnX7%2Fn%2FpZuO25arZz2vXx2OkPR5weJPuiJPIrtKuaL8NnLBz6oH3IBEfB0hGl4m%2FgGOY4wyAUXlW96Kqc1twUwAIrDUE8qgW2XBSWNyqdrRP9lNPUW6yfIXr0NdaXDqtJqr9jLdkACiglmVZxzXTlev9x1rg1SXy%2BBRhMb83qDke6gSRLTRKfSk3xPY10jFzmW2bpw9kZ&X-Amz-Signature=dd7039230a84a29106ee50fc57c2aa9b4c9bf5578bfd61ffaeed5e8bdd0f6ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DHND73Z%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCR4txQG1Mnh02oaXXiPv5ejw6Cus7NPzMWrV7jdAqV3AIhAMhISwXn2q8d%2FRtpb8qc%2BtevmNKwv70pd%2BHoFbGhwHMUKv8DCDIQABoMNjM3NDIzMTgzODA1IgzpiGXm0t0rqBMdUWYq3APEJcWFhACHEzxK%2BiCzHs8qfNukyUhgCMqaCXMLnUcg4GucHCOFoGckDq6Sw7YHyToCi0WWPtdxeilCFuhZqw%2BQ9p23CyZD8BPlGngteFw7gTCtkzPot4lDEdO%2BjMQ9COmu9z5cFZ2gdeUb6zWwhoMwfV8KmWyZ4UoeKCgMuuEdXkGmjuLnDmI7qE8IaW8hZ908rRjd0w31QXwwSd9SLBAXla670gpR37M%2Fo1OSDyO026Ckcc1IF0OAM27iI%2B3w3W%2Budd%2BE58UGRDap6x4LT2gSjXOloBpHT2wtwozCj9lrWj0YpJ0lrUF1NbwzYYo0yoWmOXP4Bpb3BBdywl2cEGej5XSVFC76%2BkoS23J49jXONwndmjfDk%2BdnsAIqK2C6f4q2COO%2B8aQyx5skh8BKNhCj1TR9kqzfZeyLnK%2Bc8pFVED6cXxUx5jL06fSMoubHhgUzqxBQQlBX%2FF25KRpynQrEK3Jbul9YKW1BsWJ7h2kU1lTqlP3ZWlHnSexnjR%2Flw454rBTDFTP8b%2BWPE4ifSHMcYcF%2B%2F9hWKZRfKb%2B9rYfPq%2BrRFmxe7mdogRcjLAa6qL%2BRVW3CpHivdpC%2BnKMbWe2qL9H0RqIO3iORX4QjPmpYCtgSVaSz5vba6JvuJjDmsInJBjqkAbc3t42eC8ciuFnZVnnmnX7%2Fn%2FpZuO25arZz2vXx2OkPR5weJPuiJPIrtKuaL8NnLBz6oH3IBEfB0hGl4m%2FgGOY4wyAUXlW96Kqc1twUwAIrDUE8qgW2XBSWNyqdrRP9lNPUW6yfIXr0NdaXDqtJqr9jLdkACiglmVZxzXTlev9x1rg1SXy%2BBRhMb83qDke6gSRLTRKfSk3xPY10jFzmW2bpw9kZ&X-Amz-Signature=0376a9a58cf3b6662565525b11e05281a09d276393f26b00cc2b7fdc59a87f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DHND73Z%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCR4txQG1Mnh02oaXXiPv5ejw6Cus7NPzMWrV7jdAqV3AIhAMhISwXn2q8d%2FRtpb8qc%2BtevmNKwv70pd%2BHoFbGhwHMUKv8DCDIQABoMNjM3NDIzMTgzODA1IgzpiGXm0t0rqBMdUWYq3APEJcWFhACHEzxK%2BiCzHs8qfNukyUhgCMqaCXMLnUcg4GucHCOFoGckDq6Sw7YHyToCi0WWPtdxeilCFuhZqw%2BQ9p23CyZD8BPlGngteFw7gTCtkzPot4lDEdO%2BjMQ9COmu9z5cFZ2gdeUb6zWwhoMwfV8KmWyZ4UoeKCgMuuEdXkGmjuLnDmI7qE8IaW8hZ908rRjd0w31QXwwSd9SLBAXla670gpR37M%2Fo1OSDyO026Ckcc1IF0OAM27iI%2B3w3W%2Budd%2BE58UGRDap6x4LT2gSjXOloBpHT2wtwozCj9lrWj0YpJ0lrUF1NbwzYYo0yoWmOXP4Bpb3BBdywl2cEGej5XSVFC76%2BkoS23J49jXONwndmjfDk%2BdnsAIqK2C6f4q2COO%2B8aQyx5skh8BKNhCj1TR9kqzfZeyLnK%2Bc8pFVED6cXxUx5jL06fSMoubHhgUzqxBQQlBX%2FF25KRpynQrEK3Jbul9YKW1BsWJ7h2kU1lTqlP3ZWlHnSexnjR%2Flw454rBTDFTP8b%2BWPE4ifSHMcYcF%2B%2F9hWKZRfKb%2B9rYfPq%2BrRFmxe7mdogRcjLAa6qL%2BRVW3CpHivdpC%2BnKMbWe2qL9H0RqIO3iORX4QjPmpYCtgSVaSz5vba6JvuJjDmsInJBjqkAbc3t42eC8ciuFnZVnnmnX7%2Fn%2FpZuO25arZz2vXx2OkPR5weJPuiJPIrtKuaL8NnLBz6oH3IBEfB0hGl4m%2FgGOY4wyAUXlW96Kqc1twUwAIrDUE8qgW2XBSWNyqdrRP9lNPUW6yfIXr0NdaXDqtJqr9jLdkACiglmVZxzXTlev9x1rg1SXy%2BBRhMb83qDke6gSRLTRKfSk3xPY10jFzmW2bpw9kZ&X-Amz-Signature=58926e9ee4616af93f46c0239ecb44fc540796c773a1702a72f767fe83989af7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DHND73Z%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCR4txQG1Mnh02oaXXiPv5ejw6Cus7NPzMWrV7jdAqV3AIhAMhISwXn2q8d%2FRtpb8qc%2BtevmNKwv70pd%2BHoFbGhwHMUKv8DCDIQABoMNjM3NDIzMTgzODA1IgzpiGXm0t0rqBMdUWYq3APEJcWFhACHEzxK%2BiCzHs8qfNukyUhgCMqaCXMLnUcg4GucHCOFoGckDq6Sw7YHyToCi0WWPtdxeilCFuhZqw%2BQ9p23CyZD8BPlGngteFw7gTCtkzPot4lDEdO%2BjMQ9COmu9z5cFZ2gdeUb6zWwhoMwfV8KmWyZ4UoeKCgMuuEdXkGmjuLnDmI7qE8IaW8hZ908rRjd0w31QXwwSd9SLBAXla670gpR37M%2Fo1OSDyO026Ckcc1IF0OAM27iI%2B3w3W%2Budd%2BE58UGRDap6x4LT2gSjXOloBpHT2wtwozCj9lrWj0YpJ0lrUF1NbwzYYo0yoWmOXP4Bpb3BBdywl2cEGej5XSVFC76%2BkoS23J49jXONwndmjfDk%2BdnsAIqK2C6f4q2COO%2B8aQyx5skh8BKNhCj1TR9kqzfZeyLnK%2Bc8pFVED6cXxUx5jL06fSMoubHhgUzqxBQQlBX%2FF25KRpynQrEK3Jbul9YKW1BsWJ7h2kU1lTqlP3ZWlHnSexnjR%2Flw454rBTDFTP8b%2BWPE4ifSHMcYcF%2B%2F9hWKZRfKb%2B9rYfPq%2BrRFmxe7mdogRcjLAa6qL%2BRVW3CpHivdpC%2BnKMbWe2qL9H0RqIO3iORX4QjPmpYCtgSVaSz5vba6JvuJjDmsInJBjqkAbc3t42eC8ciuFnZVnnmnX7%2Fn%2FpZuO25arZz2vXx2OkPR5weJPuiJPIrtKuaL8NnLBz6oH3IBEfB0hGl4m%2FgGOY4wyAUXlW96Kqc1twUwAIrDUE8qgW2XBSWNyqdrRP9lNPUW6yfIXr0NdaXDqtJqr9jLdkACiglmVZxzXTlev9x1rg1SXy%2BBRhMb83qDke6gSRLTRKfSk3xPY10jFzmW2bpw9kZ&X-Amz-Signature=0eed225e92cbabfe50f75f16814aac5fabfab087bc6f809e91dec546f444c58c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DHND73Z%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCR4txQG1Mnh02oaXXiPv5ejw6Cus7NPzMWrV7jdAqV3AIhAMhISwXn2q8d%2FRtpb8qc%2BtevmNKwv70pd%2BHoFbGhwHMUKv8DCDIQABoMNjM3NDIzMTgzODA1IgzpiGXm0t0rqBMdUWYq3APEJcWFhACHEzxK%2BiCzHs8qfNukyUhgCMqaCXMLnUcg4GucHCOFoGckDq6Sw7YHyToCi0WWPtdxeilCFuhZqw%2BQ9p23CyZD8BPlGngteFw7gTCtkzPot4lDEdO%2BjMQ9COmu9z5cFZ2gdeUb6zWwhoMwfV8KmWyZ4UoeKCgMuuEdXkGmjuLnDmI7qE8IaW8hZ908rRjd0w31QXwwSd9SLBAXla670gpR37M%2Fo1OSDyO026Ckcc1IF0OAM27iI%2B3w3W%2Budd%2BE58UGRDap6x4LT2gSjXOloBpHT2wtwozCj9lrWj0YpJ0lrUF1NbwzYYo0yoWmOXP4Bpb3BBdywl2cEGej5XSVFC76%2BkoS23J49jXONwndmjfDk%2BdnsAIqK2C6f4q2COO%2B8aQyx5skh8BKNhCj1TR9kqzfZeyLnK%2Bc8pFVED6cXxUx5jL06fSMoubHhgUzqxBQQlBX%2FF25KRpynQrEK3Jbul9YKW1BsWJ7h2kU1lTqlP3ZWlHnSexnjR%2Flw454rBTDFTP8b%2BWPE4ifSHMcYcF%2B%2F9hWKZRfKb%2B9rYfPq%2BrRFmxe7mdogRcjLAa6qL%2BRVW3CpHivdpC%2BnKMbWe2qL9H0RqIO3iORX4QjPmpYCtgSVaSz5vba6JvuJjDmsInJBjqkAbc3t42eC8ciuFnZVnnmnX7%2Fn%2FpZuO25arZz2vXx2OkPR5weJPuiJPIrtKuaL8NnLBz6oH3IBEfB0hGl4m%2FgGOY4wyAUXlW96Kqc1twUwAIrDUE8qgW2XBSWNyqdrRP9lNPUW6yfIXr0NdaXDqtJqr9jLdkACiglmVZxzXTlev9x1rg1SXy%2BBRhMb83qDke6gSRLTRKfSk3xPY10jFzmW2bpw9kZ&X-Amz-Signature=b08ae80dd0f1f2e1d78962b305bfe1c6c44bcf6d946e508378c4099f7160df1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DHND73Z%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCR4txQG1Mnh02oaXXiPv5ejw6Cus7NPzMWrV7jdAqV3AIhAMhISwXn2q8d%2FRtpb8qc%2BtevmNKwv70pd%2BHoFbGhwHMUKv8DCDIQABoMNjM3NDIzMTgzODA1IgzpiGXm0t0rqBMdUWYq3APEJcWFhACHEzxK%2BiCzHs8qfNukyUhgCMqaCXMLnUcg4GucHCOFoGckDq6Sw7YHyToCi0WWPtdxeilCFuhZqw%2BQ9p23CyZD8BPlGngteFw7gTCtkzPot4lDEdO%2BjMQ9COmu9z5cFZ2gdeUb6zWwhoMwfV8KmWyZ4UoeKCgMuuEdXkGmjuLnDmI7qE8IaW8hZ908rRjd0w31QXwwSd9SLBAXla670gpR37M%2Fo1OSDyO026Ckcc1IF0OAM27iI%2B3w3W%2Budd%2BE58UGRDap6x4LT2gSjXOloBpHT2wtwozCj9lrWj0YpJ0lrUF1NbwzYYo0yoWmOXP4Bpb3BBdywl2cEGej5XSVFC76%2BkoS23J49jXONwndmjfDk%2BdnsAIqK2C6f4q2COO%2B8aQyx5skh8BKNhCj1TR9kqzfZeyLnK%2Bc8pFVED6cXxUx5jL06fSMoubHhgUzqxBQQlBX%2FF25KRpynQrEK3Jbul9YKW1BsWJ7h2kU1lTqlP3ZWlHnSexnjR%2Flw454rBTDFTP8b%2BWPE4ifSHMcYcF%2B%2F9hWKZRfKb%2B9rYfPq%2BrRFmxe7mdogRcjLAa6qL%2BRVW3CpHivdpC%2BnKMbWe2qL9H0RqIO3iORX4QjPmpYCtgSVaSz5vba6JvuJjDmsInJBjqkAbc3t42eC8ciuFnZVnnmnX7%2Fn%2FpZuO25arZz2vXx2OkPR5weJPuiJPIrtKuaL8NnLBz6oH3IBEfB0hGl4m%2FgGOY4wyAUXlW96Kqc1twUwAIrDUE8qgW2XBSWNyqdrRP9lNPUW6yfIXr0NdaXDqtJqr9jLdkACiglmVZxzXTlev9x1rg1SXy%2BBRhMb83qDke6gSRLTRKfSk3xPY10jFzmW2bpw9kZ&X-Amz-Signature=1f8bcfde9b3f1a298aea464a68adf0e857eb017608f7ea41a36ea18ffe9b21c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
