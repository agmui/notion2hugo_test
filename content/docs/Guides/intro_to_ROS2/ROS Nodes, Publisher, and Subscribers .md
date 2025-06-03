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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNAICPFG%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICQXSjdMzqExc3BRdxFGbd8a%2BXFJ48Q6wUx06mjY0VmlAiBIwszqV7BUA6wMJUfKUvmORArsTvEE7wauzBxolGTIdir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMTepUsUbmsZIng3oXKtwDtUduFHyAnlXI6xm2iYJmVQZXGX69f%2BvBvoRo3xzucmMdN%2Bb3HJFZsoUO%2BP3gfd5Q49gZ54wsoMGnKAv8BbAfkgFmGFWfobveFnjLnXIRtCZoBt6sQZlvba36MpnIpUgkT1LfWJlSIjQWotvByVwRdr5uqWmSRDvlaD0oFUlDuAp10f2lq66C5nrzNQQnCeLo%2BSQj5%2F7mY4ScuR3qzBZVLbVbxVw%2FmgrPrXL7U25eFCFp2NYRWOezyvlonzzL8rkjUis9hliTbdgb0W4JFCVriaue%2BU4Hg8Y%2BHjvev19inAcFCs0hTD82YwT00T0mvUl%2Fkwqv8u4dgZd6%2FxWajV7WwhHtpmz4zu0hHxw4RAQSzXOBjzJwDIB4py%2FDIp20yjQ24pF0r8LQzdUau1Xi4IpzIc2fdwE2unOGKa3CCyBjXHcUc%2FBZxPqc%2F7cQLAUHJGz4fjn%2BQZ4T86b2w8Zs8DFitzm0iTb7Qdz8ekSRtrE%2Bmf1Cwz4VwEFtQruT62%2BJbYQ9H%2BGMRNxb5R9fFZ7gNOjoUmY3cju4syONPNBcddrScz%2B6zLLss4IlqNo3AuVRTo2Xg14JS3zgeLFy3FEJr0p1vmCttEK%2F2a9JJLprJHqH%2F1FqWJZ4kh1UJuKt7e0wjsX6wQY6pgEfW8CxHJU1VEVB%2B%2Bw9yMPqchbR5XngwZWKzLlCkPtyELqqqUpeYm8c1Qz1BrWVIT7FqFr7eZvbkjeqaxgR6T5inNkswtXSeLJQnqtbSEE3ngCV5qIVx0e0i1AjeNzkr11jN2fWChBXdn1AYpVM%2B2ztOdTuqnfxZHj5SIhuJwDtZUCa9nXpnx%2FgXToXo4QP9VKd%2BsO%2FdY28S4M23OV1S9rYQuGTG5fd&X-Amz-Signature=2980af38381b369e05ff2f2f37fc94493d32606633847973b192e12c7c4dcbcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNAICPFG%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICQXSjdMzqExc3BRdxFGbd8a%2BXFJ48Q6wUx06mjY0VmlAiBIwszqV7BUA6wMJUfKUvmORArsTvEE7wauzBxolGTIdir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMTepUsUbmsZIng3oXKtwDtUduFHyAnlXI6xm2iYJmVQZXGX69f%2BvBvoRo3xzucmMdN%2Bb3HJFZsoUO%2BP3gfd5Q49gZ54wsoMGnKAv8BbAfkgFmGFWfobveFnjLnXIRtCZoBt6sQZlvba36MpnIpUgkT1LfWJlSIjQWotvByVwRdr5uqWmSRDvlaD0oFUlDuAp10f2lq66C5nrzNQQnCeLo%2BSQj5%2F7mY4ScuR3qzBZVLbVbxVw%2FmgrPrXL7U25eFCFp2NYRWOezyvlonzzL8rkjUis9hliTbdgb0W4JFCVriaue%2BU4Hg8Y%2BHjvev19inAcFCs0hTD82YwT00T0mvUl%2Fkwqv8u4dgZd6%2FxWajV7WwhHtpmz4zu0hHxw4RAQSzXOBjzJwDIB4py%2FDIp20yjQ24pF0r8LQzdUau1Xi4IpzIc2fdwE2unOGKa3CCyBjXHcUc%2FBZxPqc%2F7cQLAUHJGz4fjn%2BQZ4T86b2w8Zs8DFitzm0iTb7Qdz8ekSRtrE%2Bmf1Cwz4VwEFtQruT62%2BJbYQ9H%2BGMRNxb5R9fFZ7gNOjoUmY3cju4syONPNBcddrScz%2B6zLLss4IlqNo3AuVRTo2Xg14JS3zgeLFy3FEJr0p1vmCttEK%2F2a9JJLprJHqH%2F1FqWJZ4kh1UJuKt7e0wjsX6wQY6pgEfW8CxHJU1VEVB%2B%2Bw9yMPqchbR5XngwZWKzLlCkPtyELqqqUpeYm8c1Qz1BrWVIT7FqFr7eZvbkjeqaxgR6T5inNkswtXSeLJQnqtbSEE3ngCV5qIVx0e0i1AjeNzkr11jN2fWChBXdn1AYpVM%2B2ztOdTuqnfxZHj5SIhuJwDtZUCa9nXpnx%2FgXToXo4QP9VKd%2BsO%2FdY28S4M23OV1S9rYQuGTG5fd&X-Amz-Signature=670fdbd6092bbedd86eaaa737407e187bc68f7c9dd2ffca38442458fcc934057&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNAICPFG%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICQXSjdMzqExc3BRdxFGbd8a%2BXFJ48Q6wUx06mjY0VmlAiBIwszqV7BUA6wMJUfKUvmORArsTvEE7wauzBxolGTIdir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMTepUsUbmsZIng3oXKtwDtUduFHyAnlXI6xm2iYJmVQZXGX69f%2BvBvoRo3xzucmMdN%2Bb3HJFZsoUO%2BP3gfd5Q49gZ54wsoMGnKAv8BbAfkgFmGFWfobveFnjLnXIRtCZoBt6sQZlvba36MpnIpUgkT1LfWJlSIjQWotvByVwRdr5uqWmSRDvlaD0oFUlDuAp10f2lq66C5nrzNQQnCeLo%2BSQj5%2F7mY4ScuR3qzBZVLbVbxVw%2FmgrPrXL7U25eFCFp2NYRWOezyvlonzzL8rkjUis9hliTbdgb0W4JFCVriaue%2BU4Hg8Y%2BHjvev19inAcFCs0hTD82YwT00T0mvUl%2Fkwqv8u4dgZd6%2FxWajV7WwhHtpmz4zu0hHxw4RAQSzXOBjzJwDIB4py%2FDIp20yjQ24pF0r8LQzdUau1Xi4IpzIc2fdwE2unOGKa3CCyBjXHcUc%2FBZxPqc%2F7cQLAUHJGz4fjn%2BQZ4T86b2w8Zs8DFitzm0iTb7Qdz8ekSRtrE%2Bmf1Cwz4VwEFtQruT62%2BJbYQ9H%2BGMRNxb5R9fFZ7gNOjoUmY3cju4syONPNBcddrScz%2B6zLLss4IlqNo3AuVRTo2Xg14JS3zgeLFy3FEJr0p1vmCttEK%2F2a9JJLprJHqH%2F1FqWJZ4kh1UJuKt7e0wjsX6wQY6pgEfW8CxHJU1VEVB%2B%2Bw9yMPqchbR5XngwZWKzLlCkPtyELqqqUpeYm8c1Qz1BrWVIT7FqFr7eZvbkjeqaxgR6T5inNkswtXSeLJQnqtbSEE3ngCV5qIVx0e0i1AjeNzkr11jN2fWChBXdn1AYpVM%2B2ztOdTuqnfxZHj5SIhuJwDtZUCa9nXpnx%2FgXToXo4QP9VKd%2BsO%2FdY28S4M23OV1S9rYQuGTG5fd&X-Amz-Signature=9151bf08a751393e106471edb1e22d338394d240e5f976c4156010cdec47c576&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNAICPFG%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICQXSjdMzqExc3BRdxFGbd8a%2BXFJ48Q6wUx06mjY0VmlAiBIwszqV7BUA6wMJUfKUvmORArsTvEE7wauzBxolGTIdir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMTepUsUbmsZIng3oXKtwDtUduFHyAnlXI6xm2iYJmVQZXGX69f%2BvBvoRo3xzucmMdN%2Bb3HJFZsoUO%2BP3gfd5Q49gZ54wsoMGnKAv8BbAfkgFmGFWfobveFnjLnXIRtCZoBt6sQZlvba36MpnIpUgkT1LfWJlSIjQWotvByVwRdr5uqWmSRDvlaD0oFUlDuAp10f2lq66C5nrzNQQnCeLo%2BSQj5%2F7mY4ScuR3qzBZVLbVbxVw%2FmgrPrXL7U25eFCFp2NYRWOezyvlonzzL8rkjUis9hliTbdgb0W4JFCVriaue%2BU4Hg8Y%2BHjvev19inAcFCs0hTD82YwT00T0mvUl%2Fkwqv8u4dgZd6%2FxWajV7WwhHtpmz4zu0hHxw4RAQSzXOBjzJwDIB4py%2FDIp20yjQ24pF0r8LQzdUau1Xi4IpzIc2fdwE2unOGKa3CCyBjXHcUc%2FBZxPqc%2F7cQLAUHJGz4fjn%2BQZ4T86b2w8Zs8DFitzm0iTb7Qdz8ekSRtrE%2Bmf1Cwz4VwEFtQruT62%2BJbYQ9H%2BGMRNxb5R9fFZ7gNOjoUmY3cju4syONPNBcddrScz%2B6zLLss4IlqNo3AuVRTo2Xg14JS3zgeLFy3FEJr0p1vmCttEK%2F2a9JJLprJHqH%2F1FqWJZ4kh1UJuKt7e0wjsX6wQY6pgEfW8CxHJU1VEVB%2B%2Bw9yMPqchbR5XngwZWKzLlCkPtyELqqqUpeYm8c1Qz1BrWVIT7FqFr7eZvbkjeqaxgR6T5inNkswtXSeLJQnqtbSEE3ngCV5qIVx0e0i1AjeNzkr11jN2fWChBXdn1AYpVM%2B2ztOdTuqnfxZHj5SIhuJwDtZUCa9nXpnx%2FgXToXo4QP9VKd%2BsO%2FdY28S4M23OV1S9rYQuGTG5fd&X-Amz-Signature=9738fdd38d6c68684dab3d879fc5541d28c3a4efc82ac6a4133507143b7db148&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNAICPFG%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICQXSjdMzqExc3BRdxFGbd8a%2BXFJ48Q6wUx06mjY0VmlAiBIwszqV7BUA6wMJUfKUvmORArsTvEE7wauzBxolGTIdir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMTepUsUbmsZIng3oXKtwDtUduFHyAnlXI6xm2iYJmVQZXGX69f%2BvBvoRo3xzucmMdN%2Bb3HJFZsoUO%2BP3gfd5Q49gZ54wsoMGnKAv8BbAfkgFmGFWfobveFnjLnXIRtCZoBt6sQZlvba36MpnIpUgkT1LfWJlSIjQWotvByVwRdr5uqWmSRDvlaD0oFUlDuAp10f2lq66C5nrzNQQnCeLo%2BSQj5%2F7mY4ScuR3qzBZVLbVbxVw%2FmgrPrXL7U25eFCFp2NYRWOezyvlonzzL8rkjUis9hliTbdgb0W4JFCVriaue%2BU4Hg8Y%2BHjvev19inAcFCs0hTD82YwT00T0mvUl%2Fkwqv8u4dgZd6%2FxWajV7WwhHtpmz4zu0hHxw4RAQSzXOBjzJwDIB4py%2FDIp20yjQ24pF0r8LQzdUau1Xi4IpzIc2fdwE2unOGKa3CCyBjXHcUc%2FBZxPqc%2F7cQLAUHJGz4fjn%2BQZ4T86b2w8Zs8DFitzm0iTb7Qdz8ekSRtrE%2Bmf1Cwz4VwEFtQruT62%2BJbYQ9H%2BGMRNxb5R9fFZ7gNOjoUmY3cju4syONPNBcddrScz%2B6zLLss4IlqNo3AuVRTo2Xg14JS3zgeLFy3FEJr0p1vmCttEK%2F2a9JJLprJHqH%2F1FqWJZ4kh1UJuKt7e0wjsX6wQY6pgEfW8CxHJU1VEVB%2B%2Bw9yMPqchbR5XngwZWKzLlCkPtyELqqqUpeYm8c1Qz1BrWVIT7FqFr7eZvbkjeqaxgR6T5inNkswtXSeLJQnqtbSEE3ngCV5qIVx0e0i1AjeNzkr11jN2fWChBXdn1AYpVM%2B2ztOdTuqnfxZHj5SIhuJwDtZUCa9nXpnx%2FgXToXo4QP9VKd%2BsO%2FdY28S4M23OV1S9rYQuGTG5fd&X-Amz-Signature=f46ac3616c46532dc72fd44c23c041f4d51ebf6c5166c35c3389a89c12bb907a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNAICPFG%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICQXSjdMzqExc3BRdxFGbd8a%2BXFJ48Q6wUx06mjY0VmlAiBIwszqV7BUA6wMJUfKUvmORArsTvEE7wauzBxolGTIdir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMTepUsUbmsZIng3oXKtwDtUduFHyAnlXI6xm2iYJmVQZXGX69f%2BvBvoRo3xzucmMdN%2Bb3HJFZsoUO%2BP3gfd5Q49gZ54wsoMGnKAv8BbAfkgFmGFWfobveFnjLnXIRtCZoBt6sQZlvba36MpnIpUgkT1LfWJlSIjQWotvByVwRdr5uqWmSRDvlaD0oFUlDuAp10f2lq66C5nrzNQQnCeLo%2BSQj5%2F7mY4ScuR3qzBZVLbVbxVw%2FmgrPrXL7U25eFCFp2NYRWOezyvlonzzL8rkjUis9hliTbdgb0W4JFCVriaue%2BU4Hg8Y%2BHjvev19inAcFCs0hTD82YwT00T0mvUl%2Fkwqv8u4dgZd6%2FxWajV7WwhHtpmz4zu0hHxw4RAQSzXOBjzJwDIB4py%2FDIp20yjQ24pF0r8LQzdUau1Xi4IpzIc2fdwE2unOGKa3CCyBjXHcUc%2FBZxPqc%2F7cQLAUHJGz4fjn%2BQZ4T86b2w8Zs8DFitzm0iTb7Qdz8ekSRtrE%2Bmf1Cwz4VwEFtQruT62%2BJbYQ9H%2BGMRNxb5R9fFZ7gNOjoUmY3cju4syONPNBcddrScz%2B6zLLss4IlqNo3AuVRTo2Xg14JS3zgeLFy3FEJr0p1vmCttEK%2F2a9JJLprJHqH%2F1FqWJZ4kh1UJuKt7e0wjsX6wQY6pgEfW8CxHJU1VEVB%2B%2Bw9yMPqchbR5XngwZWKzLlCkPtyELqqqUpeYm8c1Qz1BrWVIT7FqFr7eZvbkjeqaxgR6T5inNkswtXSeLJQnqtbSEE3ngCV5qIVx0e0i1AjeNzkr11jN2fWChBXdn1AYpVM%2B2ztOdTuqnfxZHj5SIhuJwDtZUCa9nXpnx%2FgXToXo4QP9VKd%2BsO%2FdY28S4M23OV1S9rYQuGTG5fd&X-Amz-Signature=64df08495a1f7cdf8856df626a9a8630746eea2589375cbe790a03fdd2fbb8a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNAICPFG%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICQXSjdMzqExc3BRdxFGbd8a%2BXFJ48Q6wUx06mjY0VmlAiBIwszqV7BUA6wMJUfKUvmORArsTvEE7wauzBxolGTIdir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMTepUsUbmsZIng3oXKtwDtUduFHyAnlXI6xm2iYJmVQZXGX69f%2BvBvoRo3xzucmMdN%2Bb3HJFZsoUO%2BP3gfd5Q49gZ54wsoMGnKAv8BbAfkgFmGFWfobveFnjLnXIRtCZoBt6sQZlvba36MpnIpUgkT1LfWJlSIjQWotvByVwRdr5uqWmSRDvlaD0oFUlDuAp10f2lq66C5nrzNQQnCeLo%2BSQj5%2F7mY4ScuR3qzBZVLbVbxVw%2FmgrPrXL7U25eFCFp2NYRWOezyvlonzzL8rkjUis9hliTbdgb0W4JFCVriaue%2BU4Hg8Y%2BHjvev19inAcFCs0hTD82YwT00T0mvUl%2Fkwqv8u4dgZd6%2FxWajV7WwhHtpmz4zu0hHxw4RAQSzXOBjzJwDIB4py%2FDIp20yjQ24pF0r8LQzdUau1Xi4IpzIc2fdwE2unOGKa3CCyBjXHcUc%2FBZxPqc%2F7cQLAUHJGz4fjn%2BQZ4T86b2w8Zs8DFitzm0iTb7Qdz8ekSRtrE%2Bmf1Cwz4VwEFtQruT62%2BJbYQ9H%2BGMRNxb5R9fFZ7gNOjoUmY3cju4syONPNBcddrScz%2B6zLLss4IlqNo3AuVRTo2Xg14JS3zgeLFy3FEJr0p1vmCttEK%2F2a9JJLprJHqH%2F1FqWJZ4kh1UJuKt7e0wjsX6wQY6pgEfW8CxHJU1VEVB%2B%2Bw9yMPqchbR5XngwZWKzLlCkPtyELqqqUpeYm8c1Qz1BrWVIT7FqFr7eZvbkjeqaxgR6T5inNkswtXSeLJQnqtbSEE3ngCV5qIVx0e0i1AjeNzkr11jN2fWChBXdn1AYpVM%2B2ztOdTuqnfxZHj5SIhuJwDtZUCa9nXpnx%2FgXToXo4QP9VKd%2BsO%2FdY28S4M23OV1S9rYQuGTG5fd&X-Amz-Signature=9efcf7de4f08c3795a580d627c6a58e9463d5368015ee378eb1478f9ca206a29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNAICPFG%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICQXSjdMzqExc3BRdxFGbd8a%2BXFJ48Q6wUx06mjY0VmlAiBIwszqV7BUA6wMJUfKUvmORArsTvEE7wauzBxolGTIdir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMTepUsUbmsZIng3oXKtwDtUduFHyAnlXI6xm2iYJmVQZXGX69f%2BvBvoRo3xzucmMdN%2Bb3HJFZsoUO%2BP3gfd5Q49gZ54wsoMGnKAv8BbAfkgFmGFWfobveFnjLnXIRtCZoBt6sQZlvba36MpnIpUgkT1LfWJlSIjQWotvByVwRdr5uqWmSRDvlaD0oFUlDuAp10f2lq66C5nrzNQQnCeLo%2BSQj5%2F7mY4ScuR3qzBZVLbVbxVw%2FmgrPrXL7U25eFCFp2NYRWOezyvlonzzL8rkjUis9hliTbdgb0W4JFCVriaue%2BU4Hg8Y%2BHjvev19inAcFCs0hTD82YwT00T0mvUl%2Fkwqv8u4dgZd6%2FxWajV7WwhHtpmz4zu0hHxw4RAQSzXOBjzJwDIB4py%2FDIp20yjQ24pF0r8LQzdUau1Xi4IpzIc2fdwE2unOGKa3CCyBjXHcUc%2FBZxPqc%2F7cQLAUHJGz4fjn%2BQZ4T86b2w8Zs8DFitzm0iTb7Qdz8ekSRtrE%2Bmf1Cwz4VwEFtQruT62%2BJbYQ9H%2BGMRNxb5R9fFZ7gNOjoUmY3cju4syONPNBcddrScz%2B6zLLss4IlqNo3AuVRTo2Xg14JS3zgeLFy3FEJr0p1vmCttEK%2F2a9JJLprJHqH%2F1FqWJZ4kh1UJuKt7e0wjsX6wQY6pgEfW8CxHJU1VEVB%2B%2Bw9yMPqchbR5XngwZWKzLlCkPtyELqqqUpeYm8c1Qz1BrWVIT7FqFr7eZvbkjeqaxgR6T5inNkswtXSeLJQnqtbSEE3ngCV5qIVx0e0i1AjeNzkr11jN2fWChBXdn1AYpVM%2B2ztOdTuqnfxZHj5SIhuJwDtZUCa9nXpnx%2FgXToXo4QP9VKd%2BsO%2FdY28S4M23OV1S9rYQuGTG5fd&X-Amz-Signature=d3c56573d0b1ed05051b69a2a7a7f29549bd3165e6652e78f4a5f059b39c068a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
