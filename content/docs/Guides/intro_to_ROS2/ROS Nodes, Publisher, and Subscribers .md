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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6QTYUL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1lG62zv2yVC2qXP9mVmIfJrK9qC7ebuVuF1vHWZSIQIhAKudL7iBmjl452BLmkk40Q3Vwn5cjLs%2FrKLPs%2FOFys%2BxKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT1pUwGANMJ6Itb6Uq3ANIJfSMjBeG6ZIIdGtpD3cQZoozO8%2FFuc6UR%2F95gF2c0MatYE9133EHJYaO5QiGwOtcrXKSgi7WXXgpmYkCpmEH9MYXlQEU9R9B3sHZnymSbAbFb0%2FKEqe5BInMC9w7XPPzhIaVyFPeqiMWL%2BkdVVJz5IvXXV7kXPAxhdZzqvwrIycFvmU8th0gT24q5GFXXu%2FYASJtdDNI21xSb2nLk3v23YubiI29JqRH3tZqpqSslfy5p5i%2BBZc1H8JqthXUyfkJa0jabO40H4rScsSTVmjS9cRTPCWhOwUPPBj7mFIGjIw%2BVvS6QWp0LaZxC6rl1%2Bh48VJ%2FhQLNKzrnu8dIUuYJvAzWsv%2BRw2ZErh83kUOgiujl2QBb4SmcWy4nzTmiI%2FmJatOO3V8r%2BiklGA5DbzyT6dBiUy%2BRbM6eJNKS2bL8LBGdxAdDqMoyyMe6QUEMEy8sg%2FHlPFENvoKKhAfhGS2TWDNpodJC3Ni28Xu%2BqXTp%2F3fKg2X9X%2F3X9hgZ7bw2QwWYg2G05GApuHgejIXM5IzeQbChfgiAocyqQWY1LKgFNpdjwabSu%2Bs%2B8PfoaiIEVqzBhPOdRBozdMrSDpGLKqmyqcZiEVg3bIBwwNU%2BK%2BB1ukfHp3GZ65iADmpTijDhoPu8BjqkAZLdoz%2BjOyQMn2a501X6c9nJ4DZOsk6zkjkFfinMspxWK8LGHzjwdng1lFQWCvm2Sz7SYCw3fhRu7aQWmPjQAWuf3Qc6LSXj%2FnpaeYtpTGnEJt%2FkK4o%2BhONaFgf%2BnreyKHr1Ih50eeEgQQ%2F7j5TP3GBGx7ioKpsmTNtx%2FZ5o6D1JbK7yUO6B3t9un%2BHAsH0rTjQAVD86H8DpQnCnFy9JQbLQbnHG&X-Amz-Signature=0ed0678a904b2e106227fdf3800e224a060ac767f7ced70b6522d51392a26487&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6QTYUL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1lG62zv2yVC2qXP9mVmIfJrK9qC7ebuVuF1vHWZSIQIhAKudL7iBmjl452BLmkk40Q3Vwn5cjLs%2FrKLPs%2FOFys%2BxKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT1pUwGANMJ6Itb6Uq3ANIJfSMjBeG6ZIIdGtpD3cQZoozO8%2FFuc6UR%2F95gF2c0MatYE9133EHJYaO5QiGwOtcrXKSgi7WXXgpmYkCpmEH9MYXlQEU9R9B3sHZnymSbAbFb0%2FKEqe5BInMC9w7XPPzhIaVyFPeqiMWL%2BkdVVJz5IvXXV7kXPAxhdZzqvwrIycFvmU8th0gT24q5GFXXu%2FYASJtdDNI21xSb2nLk3v23YubiI29JqRH3tZqpqSslfy5p5i%2BBZc1H8JqthXUyfkJa0jabO40H4rScsSTVmjS9cRTPCWhOwUPPBj7mFIGjIw%2BVvS6QWp0LaZxC6rl1%2Bh48VJ%2FhQLNKzrnu8dIUuYJvAzWsv%2BRw2ZErh83kUOgiujl2QBb4SmcWy4nzTmiI%2FmJatOO3V8r%2BiklGA5DbzyT6dBiUy%2BRbM6eJNKS2bL8LBGdxAdDqMoyyMe6QUEMEy8sg%2FHlPFENvoKKhAfhGS2TWDNpodJC3Ni28Xu%2BqXTp%2F3fKg2X9X%2F3X9hgZ7bw2QwWYg2G05GApuHgejIXM5IzeQbChfgiAocyqQWY1LKgFNpdjwabSu%2Bs%2B8PfoaiIEVqzBhPOdRBozdMrSDpGLKqmyqcZiEVg3bIBwwNU%2BK%2BB1ukfHp3GZ65iADmpTijDhoPu8BjqkAZLdoz%2BjOyQMn2a501X6c9nJ4DZOsk6zkjkFfinMspxWK8LGHzjwdng1lFQWCvm2Sz7SYCw3fhRu7aQWmPjQAWuf3Qc6LSXj%2FnpaeYtpTGnEJt%2FkK4o%2BhONaFgf%2BnreyKHr1Ih50eeEgQQ%2F7j5TP3GBGx7ioKpsmTNtx%2FZ5o6D1JbK7yUO6B3t9un%2BHAsH0rTjQAVD86H8DpQnCnFy9JQbLQbnHG&X-Amz-Signature=0c3f9a6fa66262f486482a7a6e20969d27a686bba1472baf6031ee41db6b20e0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6QTYUL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1lG62zv2yVC2qXP9mVmIfJrK9qC7ebuVuF1vHWZSIQIhAKudL7iBmjl452BLmkk40Q3Vwn5cjLs%2FrKLPs%2FOFys%2BxKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT1pUwGANMJ6Itb6Uq3ANIJfSMjBeG6ZIIdGtpD3cQZoozO8%2FFuc6UR%2F95gF2c0MatYE9133EHJYaO5QiGwOtcrXKSgi7WXXgpmYkCpmEH9MYXlQEU9R9B3sHZnymSbAbFb0%2FKEqe5BInMC9w7XPPzhIaVyFPeqiMWL%2BkdVVJz5IvXXV7kXPAxhdZzqvwrIycFvmU8th0gT24q5GFXXu%2FYASJtdDNI21xSb2nLk3v23YubiI29JqRH3tZqpqSslfy5p5i%2BBZc1H8JqthXUyfkJa0jabO40H4rScsSTVmjS9cRTPCWhOwUPPBj7mFIGjIw%2BVvS6QWp0LaZxC6rl1%2Bh48VJ%2FhQLNKzrnu8dIUuYJvAzWsv%2BRw2ZErh83kUOgiujl2QBb4SmcWy4nzTmiI%2FmJatOO3V8r%2BiklGA5DbzyT6dBiUy%2BRbM6eJNKS2bL8LBGdxAdDqMoyyMe6QUEMEy8sg%2FHlPFENvoKKhAfhGS2TWDNpodJC3Ni28Xu%2BqXTp%2F3fKg2X9X%2F3X9hgZ7bw2QwWYg2G05GApuHgejIXM5IzeQbChfgiAocyqQWY1LKgFNpdjwabSu%2Bs%2B8PfoaiIEVqzBhPOdRBozdMrSDpGLKqmyqcZiEVg3bIBwwNU%2BK%2BB1ukfHp3GZ65iADmpTijDhoPu8BjqkAZLdoz%2BjOyQMn2a501X6c9nJ4DZOsk6zkjkFfinMspxWK8LGHzjwdng1lFQWCvm2Sz7SYCw3fhRu7aQWmPjQAWuf3Qc6LSXj%2FnpaeYtpTGnEJt%2FkK4o%2BhONaFgf%2BnreyKHr1Ih50eeEgQQ%2F7j5TP3GBGx7ioKpsmTNtx%2FZ5o6D1JbK7yUO6B3t9un%2BHAsH0rTjQAVD86H8DpQnCnFy9JQbLQbnHG&X-Amz-Signature=12865f40d9bedbc469892e0c925ea4b4ac94a211ae6c383ca5c055f3f73ccfb6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6QTYUL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1lG62zv2yVC2qXP9mVmIfJrK9qC7ebuVuF1vHWZSIQIhAKudL7iBmjl452BLmkk40Q3Vwn5cjLs%2FrKLPs%2FOFys%2BxKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT1pUwGANMJ6Itb6Uq3ANIJfSMjBeG6ZIIdGtpD3cQZoozO8%2FFuc6UR%2F95gF2c0MatYE9133EHJYaO5QiGwOtcrXKSgi7WXXgpmYkCpmEH9MYXlQEU9R9B3sHZnymSbAbFb0%2FKEqe5BInMC9w7XPPzhIaVyFPeqiMWL%2BkdVVJz5IvXXV7kXPAxhdZzqvwrIycFvmU8th0gT24q5GFXXu%2FYASJtdDNI21xSb2nLk3v23YubiI29JqRH3tZqpqSslfy5p5i%2BBZc1H8JqthXUyfkJa0jabO40H4rScsSTVmjS9cRTPCWhOwUPPBj7mFIGjIw%2BVvS6QWp0LaZxC6rl1%2Bh48VJ%2FhQLNKzrnu8dIUuYJvAzWsv%2BRw2ZErh83kUOgiujl2QBb4SmcWy4nzTmiI%2FmJatOO3V8r%2BiklGA5DbzyT6dBiUy%2BRbM6eJNKS2bL8LBGdxAdDqMoyyMe6QUEMEy8sg%2FHlPFENvoKKhAfhGS2TWDNpodJC3Ni28Xu%2BqXTp%2F3fKg2X9X%2F3X9hgZ7bw2QwWYg2G05GApuHgejIXM5IzeQbChfgiAocyqQWY1LKgFNpdjwabSu%2Bs%2B8PfoaiIEVqzBhPOdRBozdMrSDpGLKqmyqcZiEVg3bIBwwNU%2BK%2BB1ukfHp3GZ65iADmpTijDhoPu8BjqkAZLdoz%2BjOyQMn2a501X6c9nJ4DZOsk6zkjkFfinMspxWK8LGHzjwdng1lFQWCvm2Sz7SYCw3fhRu7aQWmPjQAWuf3Qc6LSXj%2FnpaeYtpTGnEJt%2FkK4o%2BhONaFgf%2BnreyKHr1Ih50eeEgQQ%2F7j5TP3GBGx7ioKpsmTNtx%2FZ5o6D1JbK7yUO6B3t9un%2BHAsH0rTjQAVD86H8DpQnCnFy9JQbLQbnHG&X-Amz-Signature=978eefe5ea842d378db1f5b40215fd2e0fb52addaafb88cab29a616e8ab4bbf8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6QTYUL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1lG62zv2yVC2qXP9mVmIfJrK9qC7ebuVuF1vHWZSIQIhAKudL7iBmjl452BLmkk40Q3Vwn5cjLs%2FrKLPs%2FOFys%2BxKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT1pUwGANMJ6Itb6Uq3ANIJfSMjBeG6ZIIdGtpD3cQZoozO8%2FFuc6UR%2F95gF2c0MatYE9133EHJYaO5QiGwOtcrXKSgi7WXXgpmYkCpmEH9MYXlQEU9R9B3sHZnymSbAbFb0%2FKEqe5BInMC9w7XPPzhIaVyFPeqiMWL%2BkdVVJz5IvXXV7kXPAxhdZzqvwrIycFvmU8th0gT24q5GFXXu%2FYASJtdDNI21xSb2nLk3v23YubiI29JqRH3tZqpqSslfy5p5i%2BBZc1H8JqthXUyfkJa0jabO40H4rScsSTVmjS9cRTPCWhOwUPPBj7mFIGjIw%2BVvS6QWp0LaZxC6rl1%2Bh48VJ%2FhQLNKzrnu8dIUuYJvAzWsv%2BRw2ZErh83kUOgiujl2QBb4SmcWy4nzTmiI%2FmJatOO3V8r%2BiklGA5DbzyT6dBiUy%2BRbM6eJNKS2bL8LBGdxAdDqMoyyMe6QUEMEy8sg%2FHlPFENvoKKhAfhGS2TWDNpodJC3Ni28Xu%2BqXTp%2F3fKg2X9X%2F3X9hgZ7bw2QwWYg2G05GApuHgejIXM5IzeQbChfgiAocyqQWY1LKgFNpdjwabSu%2Bs%2B8PfoaiIEVqzBhPOdRBozdMrSDpGLKqmyqcZiEVg3bIBwwNU%2BK%2BB1ukfHp3GZ65iADmpTijDhoPu8BjqkAZLdoz%2BjOyQMn2a501X6c9nJ4DZOsk6zkjkFfinMspxWK8LGHzjwdng1lFQWCvm2Sz7SYCw3fhRu7aQWmPjQAWuf3Qc6LSXj%2FnpaeYtpTGnEJt%2FkK4o%2BhONaFgf%2BnreyKHr1Ih50eeEgQQ%2F7j5TP3GBGx7ioKpsmTNtx%2FZ5o6D1JbK7yUO6B3t9un%2BHAsH0rTjQAVD86H8DpQnCnFy9JQbLQbnHG&X-Amz-Signature=e33aa73662709ecc633c2ab12f3c7a56f2e64fa6ba6df2b5de997a7bca9e133d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6QTYUL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1lG62zv2yVC2qXP9mVmIfJrK9qC7ebuVuF1vHWZSIQIhAKudL7iBmjl452BLmkk40Q3Vwn5cjLs%2FrKLPs%2FOFys%2BxKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT1pUwGANMJ6Itb6Uq3ANIJfSMjBeG6ZIIdGtpD3cQZoozO8%2FFuc6UR%2F95gF2c0MatYE9133EHJYaO5QiGwOtcrXKSgi7WXXgpmYkCpmEH9MYXlQEU9R9B3sHZnymSbAbFb0%2FKEqe5BInMC9w7XPPzhIaVyFPeqiMWL%2BkdVVJz5IvXXV7kXPAxhdZzqvwrIycFvmU8th0gT24q5GFXXu%2FYASJtdDNI21xSb2nLk3v23YubiI29JqRH3tZqpqSslfy5p5i%2BBZc1H8JqthXUyfkJa0jabO40H4rScsSTVmjS9cRTPCWhOwUPPBj7mFIGjIw%2BVvS6QWp0LaZxC6rl1%2Bh48VJ%2FhQLNKzrnu8dIUuYJvAzWsv%2BRw2ZErh83kUOgiujl2QBb4SmcWy4nzTmiI%2FmJatOO3V8r%2BiklGA5DbzyT6dBiUy%2BRbM6eJNKS2bL8LBGdxAdDqMoyyMe6QUEMEy8sg%2FHlPFENvoKKhAfhGS2TWDNpodJC3Ni28Xu%2BqXTp%2F3fKg2X9X%2F3X9hgZ7bw2QwWYg2G05GApuHgejIXM5IzeQbChfgiAocyqQWY1LKgFNpdjwabSu%2Bs%2B8PfoaiIEVqzBhPOdRBozdMrSDpGLKqmyqcZiEVg3bIBwwNU%2BK%2BB1ukfHp3GZ65iADmpTijDhoPu8BjqkAZLdoz%2BjOyQMn2a501X6c9nJ4DZOsk6zkjkFfinMspxWK8LGHzjwdng1lFQWCvm2Sz7SYCw3fhRu7aQWmPjQAWuf3Qc6LSXj%2FnpaeYtpTGnEJt%2FkK4o%2BhONaFgf%2BnreyKHr1Ih50eeEgQQ%2F7j5TP3GBGx7ioKpsmTNtx%2FZ5o6D1JbK7yUO6B3t9un%2BHAsH0rTjQAVD86H8DpQnCnFy9JQbLQbnHG&X-Amz-Signature=accaea25b7e135bb1c80145f1679559d67cdff8a89c8ac4fcd0c2cba25ef315b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6QTYUL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1lG62zv2yVC2qXP9mVmIfJrK9qC7ebuVuF1vHWZSIQIhAKudL7iBmjl452BLmkk40Q3Vwn5cjLs%2FrKLPs%2FOFys%2BxKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT1pUwGANMJ6Itb6Uq3ANIJfSMjBeG6ZIIdGtpD3cQZoozO8%2FFuc6UR%2F95gF2c0MatYE9133EHJYaO5QiGwOtcrXKSgi7WXXgpmYkCpmEH9MYXlQEU9R9B3sHZnymSbAbFb0%2FKEqe5BInMC9w7XPPzhIaVyFPeqiMWL%2BkdVVJz5IvXXV7kXPAxhdZzqvwrIycFvmU8th0gT24q5GFXXu%2FYASJtdDNI21xSb2nLk3v23YubiI29JqRH3tZqpqSslfy5p5i%2BBZc1H8JqthXUyfkJa0jabO40H4rScsSTVmjS9cRTPCWhOwUPPBj7mFIGjIw%2BVvS6QWp0LaZxC6rl1%2Bh48VJ%2FhQLNKzrnu8dIUuYJvAzWsv%2BRw2ZErh83kUOgiujl2QBb4SmcWy4nzTmiI%2FmJatOO3V8r%2BiklGA5DbzyT6dBiUy%2BRbM6eJNKS2bL8LBGdxAdDqMoyyMe6QUEMEy8sg%2FHlPFENvoKKhAfhGS2TWDNpodJC3Ni28Xu%2BqXTp%2F3fKg2X9X%2F3X9hgZ7bw2QwWYg2G05GApuHgejIXM5IzeQbChfgiAocyqQWY1LKgFNpdjwabSu%2Bs%2B8PfoaiIEVqzBhPOdRBozdMrSDpGLKqmyqcZiEVg3bIBwwNU%2BK%2BB1ukfHp3GZ65iADmpTijDhoPu8BjqkAZLdoz%2BjOyQMn2a501X6c9nJ4DZOsk6zkjkFfinMspxWK8LGHzjwdng1lFQWCvm2Sz7SYCw3fhRu7aQWmPjQAWuf3Qc6LSXj%2FnpaeYtpTGnEJt%2FkK4o%2BhONaFgf%2BnreyKHr1Ih50eeEgQQ%2F7j5TP3GBGx7ioKpsmTNtx%2FZ5o6D1JbK7yUO6B3t9un%2BHAsH0rTjQAVD86H8DpQnCnFy9JQbLQbnHG&X-Amz-Signature=dd53831b2cba2facbb0060396b4fb35fcb6d9d0e3092d0eea3f1cd664b325dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6QTYUL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1lG62zv2yVC2qXP9mVmIfJrK9qC7ebuVuF1vHWZSIQIhAKudL7iBmjl452BLmkk40Q3Vwn5cjLs%2FrKLPs%2FOFys%2BxKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT1pUwGANMJ6Itb6Uq3ANIJfSMjBeG6ZIIdGtpD3cQZoozO8%2FFuc6UR%2F95gF2c0MatYE9133EHJYaO5QiGwOtcrXKSgi7WXXgpmYkCpmEH9MYXlQEU9R9B3sHZnymSbAbFb0%2FKEqe5BInMC9w7XPPzhIaVyFPeqiMWL%2BkdVVJz5IvXXV7kXPAxhdZzqvwrIycFvmU8th0gT24q5GFXXu%2FYASJtdDNI21xSb2nLk3v23YubiI29JqRH3tZqpqSslfy5p5i%2BBZc1H8JqthXUyfkJa0jabO40H4rScsSTVmjS9cRTPCWhOwUPPBj7mFIGjIw%2BVvS6QWp0LaZxC6rl1%2Bh48VJ%2FhQLNKzrnu8dIUuYJvAzWsv%2BRw2ZErh83kUOgiujl2QBb4SmcWy4nzTmiI%2FmJatOO3V8r%2BiklGA5DbzyT6dBiUy%2BRbM6eJNKS2bL8LBGdxAdDqMoyyMe6QUEMEy8sg%2FHlPFENvoKKhAfhGS2TWDNpodJC3Ni28Xu%2BqXTp%2F3fKg2X9X%2F3X9hgZ7bw2QwWYg2G05GApuHgejIXM5IzeQbChfgiAocyqQWY1LKgFNpdjwabSu%2Bs%2B8PfoaiIEVqzBhPOdRBozdMrSDpGLKqmyqcZiEVg3bIBwwNU%2BK%2BB1ukfHp3GZ65iADmpTijDhoPu8BjqkAZLdoz%2BjOyQMn2a501X6c9nJ4DZOsk6zkjkFfinMspxWK8LGHzjwdng1lFQWCvm2Sz7SYCw3fhRu7aQWmPjQAWuf3Qc6LSXj%2FnpaeYtpTGnEJt%2FkK4o%2BhONaFgf%2BnreyKHr1Ih50eeEgQQ%2F7j5TP3GBGx7ioKpsmTNtx%2FZ5o6D1JbK7yUO6B3t9un%2BHAsH0rTjQAVD86H8DpQnCnFy9JQbLQbnHG&X-Amz-Signature=660821b024348a62197ee7f358f5adc8bc3de0d4108d267e6d99994081d12313&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
