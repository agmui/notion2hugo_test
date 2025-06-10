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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXPSSJU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgfr2Y6Ld%2BqIdH87DJQzRME4ghH9jMt2JgHFqA3h8CuAiARx%2F92vaHNxuJNwBlRobyJH%2BdY7l4U4d7PfHYFbLNHHyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZiZjSoS2vIHJELHKtwDhNkve%2FhBBYNnJzpflRi0mhKcSUQ2kk44siaBBvtC%2FFMU5v7doiLJghLWulKoOdvpgcBF5PCqEu9Rf8ZEKvK5xniiIaXi5hPp6HJkvNeVjeruCqhsaBUlb%2BYtYY6sUmw%2FoQb4JZyi4I2SFhO8KVYVzFkD7%2BGrWZ57JaF8q4YYgW2Al8pzsf8xuTV9fdFGKdphBGuMxRNuSKPrjhOs1ijMPiIAqKeCV3V9HAy0G5DKi8%2FnhP3nPtdFQF0E0QfQcYqly5WO69%2F5KTTvEpcDcyHVpmxI5EUDQYnsDkGSqZH%2Fk5WnctFruUe%2F%2FM0F%2FjocFrkLcGgo%2FAWF3wwxquRV%2FrAtT38MbUkZUVBrGyFdKSjNrTKLKT%2BKN87QaVAnR8exxytvYhCu83l0VZaJkpUoCV990CtDsGhI4hzFgV1apjG4NS0O0DUpiTyc5Jd9YYpt4BQoY%2FaF80y1KnRRAs1ky%2B6LIZmW752FSdSP88BbxuNn6G4FWnNzY62cm%2Fjz2jn1b6O%2FOVsGylcqjvoFAnhmhRW3CabJgq6JXfIKdc1bMVA7nxYd%2F3UakRLklUPGMqf8v3GVZNUj%2BgdepebXGxg3oLAs43VQmVOVQk3RRpGCwr3PdPU5hYzLyptlcS%2BVJUMwiIiiwgY6pgE1L3g72Hlp2mR5EgaF4ITlCQnRHxYfsBdtmY3wqX%2FTrAWynsJ24sYsjzcKq73%2Fn4MKnG5knNQwxJRx9hoCUswJ%2BFT%2FvuCdo6CGNP0gto%2FAtHTVCrWaT%2F%2BPgHCLyrB3gTtScUat6M88HYc5IejbkzhcguRrc0r0pXHvKkACs9BIBHwwjJDMlpEtlXjqnQj4rcXBrO8dJxBbQL5Dg9wXf1LFCPiQ6zOk&X-Amz-Signature=ebb83b0f8147d0a9c04167a4d215a845b700142175c26b7484dd422184554436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXPSSJU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgfr2Y6Ld%2BqIdH87DJQzRME4ghH9jMt2JgHFqA3h8CuAiARx%2F92vaHNxuJNwBlRobyJH%2BdY7l4U4d7PfHYFbLNHHyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZiZjSoS2vIHJELHKtwDhNkve%2FhBBYNnJzpflRi0mhKcSUQ2kk44siaBBvtC%2FFMU5v7doiLJghLWulKoOdvpgcBF5PCqEu9Rf8ZEKvK5xniiIaXi5hPp6HJkvNeVjeruCqhsaBUlb%2BYtYY6sUmw%2FoQb4JZyi4I2SFhO8KVYVzFkD7%2BGrWZ57JaF8q4YYgW2Al8pzsf8xuTV9fdFGKdphBGuMxRNuSKPrjhOs1ijMPiIAqKeCV3V9HAy0G5DKi8%2FnhP3nPtdFQF0E0QfQcYqly5WO69%2F5KTTvEpcDcyHVpmxI5EUDQYnsDkGSqZH%2Fk5WnctFruUe%2F%2FM0F%2FjocFrkLcGgo%2FAWF3wwxquRV%2FrAtT38MbUkZUVBrGyFdKSjNrTKLKT%2BKN87QaVAnR8exxytvYhCu83l0VZaJkpUoCV990CtDsGhI4hzFgV1apjG4NS0O0DUpiTyc5Jd9YYpt4BQoY%2FaF80y1KnRRAs1ky%2B6LIZmW752FSdSP88BbxuNn6G4FWnNzY62cm%2Fjz2jn1b6O%2FOVsGylcqjvoFAnhmhRW3CabJgq6JXfIKdc1bMVA7nxYd%2F3UakRLklUPGMqf8v3GVZNUj%2BgdepebXGxg3oLAs43VQmVOVQk3RRpGCwr3PdPU5hYzLyptlcS%2BVJUMwiIiiwgY6pgE1L3g72Hlp2mR5EgaF4ITlCQnRHxYfsBdtmY3wqX%2FTrAWynsJ24sYsjzcKq73%2Fn4MKnG5knNQwxJRx9hoCUswJ%2BFT%2FvuCdo6CGNP0gto%2FAtHTVCrWaT%2F%2BPgHCLyrB3gTtScUat6M88HYc5IejbkzhcguRrc0r0pXHvKkACs9BIBHwwjJDMlpEtlXjqnQj4rcXBrO8dJxBbQL5Dg9wXf1LFCPiQ6zOk&X-Amz-Signature=ca4d402be8288cb2cf195199d8610498c789c7661efc33f8c21afc665359d959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXPSSJU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgfr2Y6Ld%2BqIdH87DJQzRME4ghH9jMt2JgHFqA3h8CuAiARx%2F92vaHNxuJNwBlRobyJH%2BdY7l4U4d7PfHYFbLNHHyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZiZjSoS2vIHJELHKtwDhNkve%2FhBBYNnJzpflRi0mhKcSUQ2kk44siaBBvtC%2FFMU5v7doiLJghLWulKoOdvpgcBF5PCqEu9Rf8ZEKvK5xniiIaXi5hPp6HJkvNeVjeruCqhsaBUlb%2BYtYY6sUmw%2FoQb4JZyi4I2SFhO8KVYVzFkD7%2BGrWZ57JaF8q4YYgW2Al8pzsf8xuTV9fdFGKdphBGuMxRNuSKPrjhOs1ijMPiIAqKeCV3V9HAy0G5DKi8%2FnhP3nPtdFQF0E0QfQcYqly5WO69%2F5KTTvEpcDcyHVpmxI5EUDQYnsDkGSqZH%2Fk5WnctFruUe%2F%2FM0F%2FjocFrkLcGgo%2FAWF3wwxquRV%2FrAtT38MbUkZUVBrGyFdKSjNrTKLKT%2BKN87QaVAnR8exxytvYhCu83l0VZaJkpUoCV990CtDsGhI4hzFgV1apjG4NS0O0DUpiTyc5Jd9YYpt4BQoY%2FaF80y1KnRRAs1ky%2B6LIZmW752FSdSP88BbxuNn6G4FWnNzY62cm%2Fjz2jn1b6O%2FOVsGylcqjvoFAnhmhRW3CabJgq6JXfIKdc1bMVA7nxYd%2F3UakRLklUPGMqf8v3GVZNUj%2BgdepebXGxg3oLAs43VQmVOVQk3RRpGCwr3PdPU5hYzLyptlcS%2BVJUMwiIiiwgY6pgE1L3g72Hlp2mR5EgaF4ITlCQnRHxYfsBdtmY3wqX%2FTrAWynsJ24sYsjzcKq73%2Fn4MKnG5knNQwxJRx9hoCUswJ%2BFT%2FvuCdo6CGNP0gto%2FAtHTVCrWaT%2F%2BPgHCLyrB3gTtScUat6M88HYc5IejbkzhcguRrc0r0pXHvKkACs9BIBHwwjJDMlpEtlXjqnQj4rcXBrO8dJxBbQL5Dg9wXf1LFCPiQ6zOk&X-Amz-Signature=8416fc8f0917f709b949e5e6806d046f2cceec31914aca49a6f18da8bfeb1d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXPSSJU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgfr2Y6Ld%2BqIdH87DJQzRME4ghH9jMt2JgHFqA3h8CuAiARx%2F92vaHNxuJNwBlRobyJH%2BdY7l4U4d7PfHYFbLNHHyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZiZjSoS2vIHJELHKtwDhNkve%2FhBBYNnJzpflRi0mhKcSUQ2kk44siaBBvtC%2FFMU5v7doiLJghLWulKoOdvpgcBF5PCqEu9Rf8ZEKvK5xniiIaXi5hPp6HJkvNeVjeruCqhsaBUlb%2BYtYY6sUmw%2FoQb4JZyi4I2SFhO8KVYVzFkD7%2BGrWZ57JaF8q4YYgW2Al8pzsf8xuTV9fdFGKdphBGuMxRNuSKPrjhOs1ijMPiIAqKeCV3V9HAy0G5DKi8%2FnhP3nPtdFQF0E0QfQcYqly5WO69%2F5KTTvEpcDcyHVpmxI5EUDQYnsDkGSqZH%2Fk5WnctFruUe%2F%2FM0F%2FjocFrkLcGgo%2FAWF3wwxquRV%2FrAtT38MbUkZUVBrGyFdKSjNrTKLKT%2BKN87QaVAnR8exxytvYhCu83l0VZaJkpUoCV990CtDsGhI4hzFgV1apjG4NS0O0DUpiTyc5Jd9YYpt4BQoY%2FaF80y1KnRRAs1ky%2B6LIZmW752FSdSP88BbxuNn6G4FWnNzY62cm%2Fjz2jn1b6O%2FOVsGylcqjvoFAnhmhRW3CabJgq6JXfIKdc1bMVA7nxYd%2F3UakRLklUPGMqf8v3GVZNUj%2BgdepebXGxg3oLAs43VQmVOVQk3RRpGCwr3PdPU5hYzLyptlcS%2BVJUMwiIiiwgY6pgE1L3g72Hlp2mR5EgaF4ITlCQnRHxYfsBdtmY3wqX%2FTrAWynsJ24sYsjzcKq73%2Fn4MKnG5knNQwxJRx9hoCUswJ%2BFT%2FvuCdo6CGNP0gto%2FAtHTVCrWaT%2F%2BPgHCLyrB3gTtScUat6M88HYc5IejbkzhcguRrc0r0pXHvKkACs9BIBHwwjJDMlpEtlXjqnQj4rcXBrO8dJxBbQL5Dg9wXf1LFCPiQ6zOk&X-Amz-Signature=593909acd624e19234eac2b082854dfbd2b822c9f6ae5fb36e332bc86c1fa7a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXPSSJU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgfr2Y6Ld%2BqIdH87DJQzRME4ghH9jMt2JgHFqA3h8CuAiARx%2F92vaHNxuJNwBlRobyJH%2BdY7l4U4d7PfHYFbLNHHyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZiZjSoS2vIHJELHKtwDhNkve%2FhBBYNnJzpflRi0mhKcSUQ2kk44siaBBvtC%2FFMU5v7doiLJghLWulKoOdvpgcBF5PCqEu9Rf8ZEKvK5xniiIaXi5hPp6HJkvNeVjeruCqhsaBUlb%2BYtYY6sUmw%2FoQb4JZyi4I2SFhO8KVYVzFkD7%2BGrWZ57JaF8q4YYgW2Al8pzsf8xuTV9fdFGKdphBGuMxRNuSKPrjhOs1ijMPiIAqKeCV3V9HAy0G5DKi8%2FnhP3nPtdFQF0E0QfQcYqly5WO69%2F5KTTvEpcDcyHVpmxI5EUDQYnsDkGSqZH%2Fk5WnctFruUe%2F%2FM0F%2FjocFrkLcGgo%2FAWF3wwxquRV%2FrAtT38MbUkZUVBrGyFdKSjNrTKLKT%2BKN87QaVAnR8exxytvYhCu83l0VZaJkpUoCV990CtDsGhI4hzFgV1apjG4NS0O0DUpiTyc5Jd9YYpt4BQoY%2FaF80y1KnRRAs1ky%2B6LIZmW752FSdSP88BbxuNn6G4FWnNzY62cm%2Fjz2jn1b6O%2FOVsGylcqjvoFAnhmhRW3CabJgq6JXfIKdc1bMVA7nxYd%2F3UakRLklUPGMqf8v3GVZNUj%2BgdepebXGxg3oLAs43VQmVOVQk3RRpGCwr3PdPU5hYzLyptlcS%2BVJUMwiIiiwgY6pgE1L3g72Hlp2mR5EgaF4ITlCQnRHxYfsBdtmY3wqX%2FTrAWynsJ24sYsjzcKq73%2Fn4MKnG5knNQwxJRx9hoCUswJ%2BFT%2FvuCdo6CGNP0gto%2FAtHTVCrWaT%2F%2BPgHCLyrB3gTtScUat6M88HYc5IejbkzhcguRrc0r0pXHvKkACs9BIBHwwjJDMlpEtlXjqnQj4rcXBrO8dJxBbQL5Dg9wXf1LFCPiQ6zOk&X-Amz-Signature=f6a4cfeffef7076e206c32abddc3deb3e391d44f631cd53207343a3ae64b0a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXPSSJU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgfr2Y6Ld%2BqIdH87DJQzRME4ghH9jMt2JgHFqA3h8CuAiARx%2F92vaHNxuJNwBlRobyJH%2BdY7l4U4d7PfHYFbLNHHyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZiZjSoS2vIHJELHKtwDhNkve%2FhBBYNnJzpflRi0mhKcSUQ2kk44siaBBvtC%2FFMU5v7doiLJghLWulKoOdvpgcBF5PCqEu9Rf8ZEKvK5xniiIaXi5hPp6HJkvNeVjeruCqhsaBUlb%2BYtYY6sUmw%2FoQb4JZyi4I2SFhO8KVYVzFkD7%2BGrWZ57JaF8q4YYgW2Al8pzsf8xuTV9fdFGKdphBGuMxRNuSKPrjhOs1ijMPiIAqKeCV3V9HAy0G5DKi8%2FnhP3nPtdFQF0E0QfQcYqly5WO69%2F5KTTvEpcDcyHVpmxI5EUDQYnsDkGSqZH%2Fk5WnctFruUe%2F%2FM0F%2FjocFrkLcGgo%2FAWF3wwxquRV%2FrAtT38MbUkZUVBrGyFdKSjNrTKLKT%2BKN87QaVAnR8exxytvYhCu83l0VZaJkpUoCV990CtDsGhI4hzFgV1apjG4NS0O0DUpiTyc5Jd9YYpt4BQoY%2FaF80y1KnRRAs1ky%2B6LIZmW752FSdSP88BbxuNn6G4FWnNzY62cm%2Fjz2jn1b6O%2FOVsGylcqjvoFAnhmhRW3CabJgq6JXfIKdc1bMVA7nxYd%2F3UakRLklUPGMqf8v3GVZNUj%2BgdepebXGxg3oLAs43VQmVOVQk3RRpGCwr3PdPU5hYzLyptlcS%2BVJUMwiIiiwgY6pgE1L3g72Hlp2mR5EgaF4ITlCQnRHxYfsBdtmY3wqX%2FTrAWynsJ24sYsjzcKq73%2Fn4MKnG5knNQwxJRx9hoCUswJ%2BFT%2FvuCdo6CGNP0gto%2FAtHTVCrWaT%2F%2BPgHCLyrB3gTtScUat6M88HYc5IejbkzhcguRrc0r0pXHvKkACs9BIBHwwjJDMlpEtlXjqnQj4rcXBrO8dJxBbQL5Dg9wXf1LFCPiQ6zOk&X-Amz-Signature=c04e42133ba5530d735a392a1906b6a69a5a53b9d6781dbcbebc35e23ae7c348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXPSSJU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgfr2Y6Ld%2BqIdH87DJQzRME4ghH9jMt2JgHFqA3h8CuAiARx%2F92vaHNxuJNwBlRobyJH%2BdY7l4U4d7PfHYFbLNHHyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZiZjSoS2vIHJELHKtwDhNkve%2FhBBYNnJzpflRi0mhKcSUQ2kk44siaBBvtC%2FFMU5v7doiLJghLWulKoOdvpgcBF5PCqEu9Rf8ZEKvK5xniiIaXi5hPp6HJkvNeVjeruCqhsaBUlb%2BYtYY6sUmw%2FoQb4JZyi4I2SFhO8KVYVzFkD7%2BGrWZ57JaF8q4YYgW2Al8pzsf8xuTV9fdFGKdphBGuMxRNuSKPrjhOs1ijMPiIAqKeCV3V9HAy0G5DKi8%2FnhP3nPtdFQF0E0QfQcYqly5WO69%2F5KTTvEpcDcyHVpmxI5EUDQYnsDkGSqZH%2Fk5WnctFruUe%2F%2FM0F%2FjocFrkLcGgo%2FAWF3wwxquRV%2FrAtT38MbUkZUVBrGyFdKSjNrTKLKT%2BKN87QaVAnR8exxytvYhCu83l0VZaJkpUoCV990CtDsGhI4hzFgV1apjG4NS0O0DUpiTyc5Jd9YYpt4BQoY%2FaF80y1KnRRAs1ky%2B6LIZmW752FSdSP88BbxuNn6G4FWnNzY62cm%2Fjz2jn1b6O%2FOVsGylcqjvoFAnhmhRW3CabJgq6JXfIKdc1bMVA7nxYd%2F3UakRLklUPGMqf8v3GVZNUj%2BgdepebXGxg3oLAs43VQmVOVQk3RRpGCwr3PdPU5hYzLyptlcS%2BVJUMwiIiiwgY6pgE1L3g72Hlp2mR5EgaF4ITlCQnRHxYfsBdtmY3wqX%2FTrAWynsJ24sYsjzcKq73%2Fn4MKnG5knNQwxJRx9hoCUswJ%2BFT%2FvuCdo6CGNP0gto%2FAtHTVCrWaT%2F%2BPgHCLyrB3gTtScUat6M88HYc5IejbkzhcguRrc0r0pXHvKkACs9BIBHwwjJDMlpEtlXjqnQj4rcXBrO8dJxBbQL5Dg9wXf1LFCPiQ6zOk&X-Amz-Signature=4079eb7e2698bfd814d17db7ff7ca767637d1890db1b7c3d99f618e9d3b571bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXPSSJU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgfr2Y6Ld%2BqIdH87DJQzRME4ghH9jMt2JgHFqA3h8CuAiARx%2F92vaHNxuJNwBlRobyJH%2BdY7l4U4d7PfHYFbLNHHyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZiZjSoS2vIHJELHKtwDhNkve%2FhBBYNnJzpflRi0mhKcSUQ2kk44siaBBvtC%2FFMU5v7doiLJghLWulKoOdvpgcBF5PCqEu9Rf8ZEKvK5xniiIaXi5hPp6HJkvNeVjeruCqhsaBUlb%2BYtYY6sUmw%2FoQb4JZyi4I2SFhO8KVYVzFkD7%2BGrWZ57JaF8q4YYgW2Al8pzsf8xuTV9fdFGKdphBGuMxRNuSKPrjhOs1ijMPiIAqKeCV3V9HAy0G5DKi8%2FnhP3nPtdFQF0E0QfQcYqly5WO69%2F5KTTvEpcDcyHVpmxI5EUDQYnsDkGSqZH%2Fk5WnctFruUe%2F%2FM0F%2FjocFrkLcGgo%2FAWF3wwxquRV%2FrAtT38MbUkZUVBrGyFdKSjNrTKLKT%2BKN87QaVAnR8exxytvYhCu83l0VZaJkpUoCV990CtDsGhI4hzFgV1apjG4NS0O0DUpiTyc5Jd9YYpt4BQoY%2FaF80y1KnRRAs1ky%2B6LIZmW752FSdSP88BbxuNn6G4FWnNzY62cm%2Fjz2jn1b6O%2FOVsGylcqjvoFAnhmhRW3CabJgq6JXfIKdc1bMVA7nxYd%2F3UakRLklUPGMqf8v3GVZNUj%2BgdepebXGxg3oLAs43VQmVOVQk3RRpGCwr3PdPU5hYzLyptlcS%2BVJUMwiIiiwgY6pgE1L3g72Hlp2mR5EgaF4ITlCQnRHxYfsBdtmY3wqX%2FTrAWynsJ24sYsjzcKq73%2Fn4MKnG5knNQwxJRx9hoCUswJ%2BFT%2FvuCdo6CGNP0gto%2FAtHTVCrWaT%2F%2BPgHCLyrB3gTtScUat6M88HYc5IejbkzhcguRrc0r0pXHvKkACs9BIBHwwjJDMlpEtlXjqnQj4rcXBrO8dJxBbQL5Dg9wXf1LFCPiQ6zOk&X-Amz-Signature=c343b11491a0d1fefc16ff34a2b9a67f0b0c7fcb2d5b64872b8a8054bd7af5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
