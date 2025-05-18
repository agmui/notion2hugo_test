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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2T4YUZA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQrwm%2FQc%2BFatCHtWMW6tuI%2BqpqiE7doyJ7EjPM8SDPUAiAf8YvQnEnbWlIJNsSzwePsxHX6rlRIKthkZo1bYuEw9ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMS3Wr%2F5Z9MCnWygt4KtwDVRbihmzjKaRQwDn0ssssAeOw6Ev4oyEVofJk2%2BLkvZtG6JVh5FKPVtdRzptdOhay%2ByDSdsJj17SV9rIxvoXmu0RJUJJKATJLgQww%2Bqe%2B%2FZaeuq68ULpp%2FeGD2OkdErRka5hh8mp4Re%2Fm7m3EMd8jH%2BVxAd06L8pL4RLuKThldR0XK%2FyN8SSGt93LV7feugAMZmLU4fZIdi%2F7lNd1%2BbuI4aoMIiXAoBJflfIr1Z3augS4mavAgl7fHn7BcTYF2ej0OM8yU5X46%2FpB8rd7gSCiQSAhhtTT%2FeHWTz%2Fs6DxiVkG9ntp%2F%2F0Ky%2FmqVGB4aI%2BVHZWVqNuccWUWDPpKgc5MMH4SVwik%2Bi18SacRAC3DugMEBdFzdBO9zUtrJx9yljmiDFBA2k%2F1q%2BFXLYGQSDVJ8LjRn7bwst2cFGqhWmE5GFe7pKG5LpQmFVPkHP5sQbgXFytWs0KG%2FILP7mcUZkMNGmknDhzH9El39LqjGRr%2BXn4EJwVyYFWEqayBO9ZASTrVCTFDG8rWguKLwKZ0HczHoxCk%2FrYY7Y1N9nubbejVTILIORtcaX9CPFuq%2FNUFGlSvM88qU2LHxcrrFSTF4Llx%2FTxEBlDkiuNc%2B4KE3juq8LnjG1wQG5xPutDHmZcwwiOeowQY6pgFjk%2FOojymz97TXFOIBw4N6QHVOCG8Ii54nV3ei5htiDDvC%2BhU0GL%2FMa1KnkviTZl2jISGySgcT1HPcVUdLxHp2qzOte%2BEAWtYlaC2BXFDjvGvpLthFNVcOP%2FyJNrNkafkbJgNEDrWFq088vMgJ%2BCDMkIrkLrRSsTkmef%2Bu%2Fj49WbD5JrbozshwvdkYN1%2Bwrtzo0MWhyR8npjpc9cOSVog3%2Bq1%2BjYmp&X-Amz-Signature=8b9c0fe00da6d905e93125fd24e181d743d30834c68a80c5ecf4905b0d0cfe48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2T4YUZA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQrwm%2FQc%2BFatCHtWMW6tuI%2BqpqiE7doyJ7EjPM8SDPUAiAf8YvQnEnbWlIJNsSzwePsxHX6rlRIKthkZo1bYuEw9ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMS3Wr%2F5Z9MCnWygt4KtwDVRbihmzjKaRQwDn0ssssAeOw6Ev4oyEVofJk2%2BLkvZtG6JVh5FKPVtdRzptdOhay%2ByDSdsJj17SV9rIxvoXmu0RJUJJKATJLgQww%2Bqe%2B%2FZaeuq68ULpp%2FeGD2OkdErRka5hh8mp4Re%2Fm7m3EMd8jH%2BVxAd06L8pL4RLuKThldR0XK%2FyN8SSGt93LV7feugAMZmLU4fZIdi%2F7lNd1%2BbuI4aoMIiXAoBJflfIr1Z3augS4mavAgl7fHn7BcTYF2ej0OM8yU5X46%2FpB8rd7gSCiQSAhhtTT%2FeHWTz%2Fs6DxiVkG9ntp%2F%2F0Ky%2FmqVGB4aI%2BVHZWVqNuccWUWDPpKgc5MMH4SVwik%2Bi18SacRAC3DugMEBdFzdBO9zUtrJx9yljmiDFBA2k%2F1q%2BFXLYGQSDVJ8LjRn7bwst2cFGqhWmE5GFe7pKG5LpQmFVPkHP5sQbgXFytWs0KG%2FILP7mcUZkMNGmknDhzH9El39LqjGRr%2BXn4EJwVyYFWEqayBO9ZASTrVCTFDG8rWguKLwKZ0HczHoxCk%2FrYY7Y1N9nubbejVTILIORtcaX9CPFuq%2FNUFGlSvM88qU2LHxcrrFSTF4Llx%2FTxEBlDkiuNc%2B4KE3juq8LnjG1wQG5xPutDHmZcwwiOeowQY6pgFjk%2FOojymz97TXFOIBw4N6QHVOCG8Ii54nV3ei5htiDDvC%2BhU0GL%2FMa1KnkviTZl2jISGySgcT1HPcVUdLxHp2qzOte%2BEAWtYlaC2BXFDjvGvpLthFNVcOP%2FyJNrNkafkbJgNEDrWFq088vMgJ%2BCDMkIrkLrRSsTkmef%2Bu%2Fj49WbD5JrbozshwvdkYN1%2Bwrtzo0MWhyR8npjpc9cOSVog3%2Bq1%2BjYmp&X-Amz-Signature=e58717cdf3007aaf51f95082319ce715787543f97c7d28d56dae68e5fb7721e4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2T4YUZA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQrwm%2FQc%2BFatCHtWMW6tuI%2BqpqiE7doyJ7EjPM8SDPUAiAf8YvQnEnbWlIJNsSzwePsxHX6rlRIKthkZo1bYuEw9ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMS3Wr%2F5Z9MCnWygt4KtwDVRbihmzjKaRQwDn0ssssAeOw6Ev4oyEVofJk2%2BLkvZtG6JVh5FKPVtdRzptdOhay%2ByDSdsJj17SV9rIxvoXmu0RJUJJKATJLgQww%2Bqe%2B%2FZaeuq68ULpp%2FeGD2OkdErRka5hh8mp4Re%2Fm7m3EMd8jH%2BVxAd06L8pL4RLuKThldR0XK%2FyN8SSGt93LV7feugAMZmLU4fZIdi%2F7lNd1%2BbuI4aoMIiXAoBJflfIr1Z3augS4mavAgl7fHn7BcTYF2ej0OM8yU5X46%2FpB8rd7gSCiQSAhhtTT%2FeHWTz%2Fs6DxiVkG9ntp%2F%2F0Ky%2FmqVGB4aI%2BVHZWVqNuccWUWDPpKgc5MMH4SVwik%2Bi18SacRAC3DugMEBdFzdBO9zUtrJx9yljmiDFBA2k%2F1q%2BFXLYGQSDVJ8LjRn7bwst2cFGqhWmE5GFe7pKG5LpQmFVPkHP5sQbgXFytWs0KG%2FILP7mcUZkMNGmknDhzH9El39LqjGRr%2BXn4EJwVyYFWEqayBO9ZASTrVCTFDG8rWguKLwKZ0HczHoxCk%2FrYY7Y1N9nubbejVTILIORtcaX9CPFuq%2FNUFGlSvM88qU2LHxcrrFSTF4Llx%2FTxEBlDkiuNc%2B4KE3juq8LnjG1wQG5xPutDHmZcwwiOeowQY6pgFjk%2FOojymz97TXFOIBw4N6QHVOCG8Ii54nV3ei5htiDDvC%2BhU0GL%2FMa1KnkviTZl2jISGySgcT1HPcVUdLxHp2qzOte%2BEAWtYlaC2BXFDjvGvpLthFNVcOP%2FyJNrNkafkbJgNEDrWFq088vMgJ%2BCDMkIrkLrRSsTkmef%2Bu%2Fj49WbD5JrbozshwvdkYN1%2Bwrtzo0MWhyR8npjpc9cOSVog3%2Bq1%2BjYmp&X-Amz-Signature=fb8a2a104cd22469bdd425fc58e442c740d793fbe5b20f8da8d3bb25353d5eea&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2T4YUZA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQrwm%2FQc%2BFatCHtWMW6tuI%2BqpqiE7doyJ7EjPM8SDPUAiAf8YvQnEnbWlIJNsSzwePsxHX6rlRIKthkZo1bYuEw9ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMS3Wr%2F5Z9MCnWygt4KtwDVRbihmzjKaRQwDn0ssssAeOw6Ev4oyEVofJk2%2BLkvZtG6JVh5FKPVtdRzptdOhay%2ByDSdsJj17SV9rIxvoXmu0RJUJJKATJLgQww%2Bqe%2B%2FZaeuq68ULpp%2FeGD2OkdErRka5hh8mp4Re%2Fm7m3EMd8jH%2BVxAd06L8pL4RLuKThldR0XK%2FyN8SSGt93LV7feugAMZmLU4fZIdi%2F7lNd1%2BbuI4aoMIiXAoBJflfIr1Z3augS4mavAgl7fHn7BcTYF2ej0OM8yU5X46%2FpB8rd7gSCiQSAhhtTT%2FeHWTz%2Fs6DxiVkG9ntp%2F%2F0Ky%2FmqVGB4aI%2BVHZWVqNuccWUWDPpKgc5MMH4SVwik%2Bi18SacRAC3DugMEBdFzdBO9zUtrJx9yljmiDFBA2k%2F1q%2BFXLYGQSDVJ8LjRn7bwst2cFGqhWmE5GFe7pKG5LpQmFVPkHP5sQbgXFytWs0KG%2FILP7mcUZkMNGmknDhzH9El39LqjGRr%2BXn4EJwVyYFWEqayBO9ZASTrVCTFDG8rWguKLwKZ0HczHoxCk%2FrYY7Y1N9nubbejVTILIORtcaX9CPFuq%2FNUFGlSvM88qU2LHxcrrFSTF4Llx%2FTxEBlDkiuNc%2B4KE3juq8LnjG1wQG5xPutDHmZcwwiOeowQY6pgFjk%2FOojymz97TXFOIBw4N6QHVOCG8Ii54nV3ei5htiDDvC%2BhU0GL%2FMa1KnkviTZl2jISGySgcT1HPcVUdLxHp2qzOte%2BEAWtYlaC2BXFDjvGvpLthFNVcOP%2FyJNrNkafkbJgNEDrWFq088vMgJ%2BCDMkIrkLrRSsTkmef%2Bu%2Fj49WbD5JrbozshwvdkYN1%2Bwrtzo0MWhyR8npjpc9cOSVog3%2Bq1%2BjYmp&X-Amz-Signature=dc1c52877d6dc4565ba1288cb7ec96f243a0ad5c1ea29f8a8144f5c597b07beb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2T4YUZA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQrwm%2FQc%2BFatCHtWMW6tuI%2BqpqiE7doyJ7EjPM8SDPUAiAf8YvQnEnbWlIJNsSzwePsxHX6rlRIKthkZo1bYuEw9ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMS3Wr%2F5Z9MCnWygt4KtwDVRbihmzjKaRQwDn0ssssAeOw6Ev4oyEVofJk2%2BLkvZtG6JVh5FKPVtdRzptdOhay%2ByDSdsJj17SV9rIxvoXmu0RJUJJKATJLgQww%2Bqe%2B%2FZaeuq68ULpp%2FeGD2OkdErRka5hh8mp4Re%2Fm7m3EMd8jH%2BVxAd06L8pL4RLuKThldR0XK%2FyN8SSGt93LV7feugAMZmLU4fZIdi%2F7lNd1%2BbuI4aoMIiXAoBJflfIr1Z3augS4mavAgl7fHn7BcTYF2ej0OM8yU5X46%2FpB8rd7gSCiQSAhhtTT%2FeHWTz%2Fs6DxiVkG9ntp%2F%2F0Ky%2FmqVGB4aI%2BVHZWVqNuccWUWDPpKgc5MMH4SVwik%2Bi18SacRAC3DugMEBdFzdBO9zUtrJx9yljmiDFBA2k%2F1q%2BFXLYGQSDVJ8LjRn7bwst2cFGqhWmE5GFe7pKG5LpQmFVPkHP5sQbgXFytWs0KG%2FILP7mcUZkMNGmknDhzH9El39LqjGRr%2BXn4EJwVyYFWEqayBO9ZASTrVCTFDG8rWguKLwKZ0HczHoxCk%2FrYY7Y1N9nubbejVTILIORtcaX9CPFuq%2FNUFGlSvM88qU2LHxcrrFSTF4Llx%2FTxEBlDkiuNc%2B4KE3juq8LnjG1wQG5xPutDHmZcwwiOeowQY6pgFjk%2FOojymz97TXFOIBw4N6QHVOCG8Ii54nV3ei5htiDDvC%2BhU0GL%2FMa1KnkviTZl2jISGySgcT1HPcVUdLxHp2qzOte%2BEAWtYlaC2BXFDjvGvpLthFNVcOP%2FyJNrNkafkbJgNEDrWFq088vMgJ%2BCDMkIrkLrRSsTkmef%2Bu%2Fj49WbD5JrbozshwvdkYN1%2Bwrtzo0MWhyR8npjpc9cOSVog3%2Bq1%2BjYmp&X-Amz-Signature=5bf33337ce24a52c714497fc3010f5b1240f0da2d23dbc47b71051fa6f6864a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2T4YUZA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQrwm%2FQc%2BFatCHtWMW6tuI%2BqpqiE7doyJ7EjPM8SDPUAiAf8YvQnEnbWlIJNsSzwePsxHX6rlRIKthkZo1bYuEw9ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMS3Wr%2F5Z9MCnWygt4KtwDVRbihmzjKaRQwDn0ssssAeOw6Ev4oyEVofJk2%2BLkvZtG6JVh5FKPVtdRzptdOhay%2ByDSdsJj17SV9rIxvoXmu0RJUJJKATJLgQww%2Bqe%2B%2FZaeuq68ULpp%2FeGD2OkdErRka5hh8mp4Re%2Fm7m3EMd8jH%2BVxAd06L8pL4RLuKThldR0XK%2FyN8SSGt93LV7feugAMZmLU4fZIdi%2F7lNd1%2BbuI4aoMIiXAoBJflfIr1Z3augS4mavAgl7fHn7BcTYF2ej0OM8yU5X46%2FpB8rd7gSCiQSAhhtTT%2FeHWTz%2Fs6DxiVkG9ntp%2F%2F0Ky%2FmqVGB4aI%2BVHZWVqNuccWUWDPpKgc5MMH4SVwik%2Bi18SacRAC3DugMEBdFzdBO9zUtrJx9yljmiDFBA2k%2F1q%2BFXLYGQSDVJ8LjRn7bwst2cFGqhWmE5GFe7pKG5LpQmFVPkHP5sQbgXFytWs0KG%2FILP7mcUZkMNGmknDhzH9El39LqjGRr%2BXn4EJwVyYFWEqayBO9ZASTrVCTFDG8rWguKLwKZ0HczHoxCk%2FrYY7Y1N9nubbejVTILIORtcaX9CPFuq%2FNUFGlSvM88qU2LHxcrrFSTF4Llx%2FTxEBlDkiuNc%2B4KE3juq8LnjG1wQG5xPutDHmZcwwiOeowQY6pgFjk%2FOojymz97TXFOIBw4N6QHVOCG8Ii54nV3ei5htiDDvC%2BhU0GL%2FMa1KnkviTZl2jISGySgcT1HPcVUdLxHp2qzOte%2BEAWtYlaC2BXFDjvGvpLthFNVcOP%2FyJNrNkafkbJgNEDrWFq088vMgJ%2BCDMkIrkLrRSsTkmef%2Bu%2Fj49WbD5JrbozshwvdkYN1%2Bwrtzo0MWhyR8npjpc9cOSVog3%2Bq1%2BjYmp&X-Amz-Signature=e9e37e3b043e18f155be4f51935e4517e0121689aa148411cb88ac04ef2c81e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2T4YUZA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQrwm%2FQc%2BFatCHtWMW6tuI%2BqpqiE7doyJ7EjPM8SDPUAiAf8YvQnEnbWlIJNsSzwePsxHX6rlRIKthkZo1bYuEw9ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMS3Wr%2F5Z9MCnWygt4KtwDVRbihmzjKaRQwDn0ssssAeOw6Ev4oyEVofJk2%2BLkvZtG6JVh5FKPVtdRzptdOhay%2ByDSdsJj17SV9rIxvoXmu0RJUJJKATJLgQww%2Bqe%2B%2FZaeuq68ULpp%2FeGD2OkdErRka5hh8mp4Re%2Fm7m3EMd8jH%2BVxAd06L8pL4RLuKThldR0XK%2FyN8SSGt93LV7feugAMZmLU4fZIdi%2F7lNd1%2BbuI4aoMIiXAoBJflfIr1Z3augS4mavAgl7fHn7BcTYF2ej0OM8yU5X46%2FpB8rd7gSCiQSAhhtTT%2FeHWTz%2Fs6DxiVkG9ntp%2F%2F0Ky%2FmqVGB4aI%2BVHZWVqNuccWUWDPpKgc5MMH4SVwik%2Bi18SacRAC3DugMEBdFzdBO9zUtrJx9yljmiDFBA2k%2F1q%2BFXLYGQSDVJ8LjRn7bwst2cFGqhWmE5GFe7pKG5LpQmFVPkHP5sQbgXFytWs0KG%2FILP7mcUZkMNGmknDhzH9El39LqjGRr%2BXn4EJwVyYFWEqayBO9ZASTrVCTFDG8rWguKLwKZ0HczHoxCk%2FrYY7Y1N9nubbejVTILIORtcaX9CPFuq%2FNUFGlSvM88qU2LHxcrrFSTF4Llx%2FTxEBlDkiuNc%2B4KE3juq8LnjG1wQG5xPutDHmZcwwiOeowQY6pgFjk%2FOojymz97TXFOIBw4N6QHVOCG8Ii54nV3ei5htiDDvC%2BhU0GL%2FMa1KnkviTZl2jISGySgcT1HPcVUdLxHp2qzOte%2BEAWtYlaC2BXFDjvGvpLthFNVcOP%2FyJNrNkafkbJgNEDrWFq088vMgJ%2BCDMkIrkLrRSsTkmef%2Bu%2Fj49WbD5JrbozshwvdkYN1%2Bwrtzo0MWhyR8npjpc9cOSVog3%2Bq1%2BjYmp&X-Amz-Signature=cfbc97fded3ca8666286ffd27f5310357eb71bf054a58352fecfa528d1f48b33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2T4YUZA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQrwm%2FQc%2BFatCHtWMW6tuI%2BqpqiE7doyJ7EjPM8SDPUAiAf8YvQnEnbWlIJNsSzwePsxHX6rlRIKthkZo1bYuEw9ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMS3Wr%2F5Z9MCnWygt4KtwDVRbihmzjKaRQwDn0ssssAeOw6Ev4oyEVofJk2%2BLkvZtG6JVh5FKPVtdRzptdOhay%2ByDSdsJj17SV9rIxvoXmu0RJUJJKATJLgQww%2Bqe%2B%2FZaeuq68ULpp%2FeGD2OkdErRka5hh8mp4Re%2Fm7m3EMd8jH%2BVxAd06L8pL4RLuKThldR0XK%2FyN8SSGt93LV7feugAMZmLU4fZIdi%2F7lNd1%2BbuI4aoMIiXAoBJflfIr1Z3augS4mavAgl7fHn7BcTYF2ej0OM8yU5X46%2FpB8rd7gSCiQSAhhtTT%2FeHWTz%2Fs6DxiVkG9ntp%2F%2F0Ky%2FmqVGB4aI%2BVHZWVqNuccWUWDPpKgc5MMH4SVwik%2Bi18SacRAC3DugMEBdFzdBO9zUtrJx9yljmiDFBA2k%2F1q%2BFXLYGQSDVJ8LjRn7bwst2cFGqhWmE5GFe7pKG5LpQmFVPkHP5sQbgXFytWs0KG%2FILP7mcUZkMNGmknDhzH9El39LqjGRr%2BXn4EJwVyYFWEqayBO9ZASTrVCTFDG8rWguKLwKZ0HczHoxCk%2FrYY7Y1N9nubbejVTILIORtcaX9CPFuq%2FNUFGlSvM88qU2LHxcrrFSTF4Llx%2FTxEBlDkiuNc%2B4KE3juq8LnjG1wQG5xPutDHmZcwwiOeowQY6pgFjk%2FOojymz97TXFOIBw4N6QHVOCG8Ii54nV3ei5htiDDvC%2BhU0GL%2FMa1KnkviTZl2jISGySgcT1HPcVUdLxHp2qzOte%2BEAWtYlaC2BXFDjvGvpLthFNVcOP%2FyJNrNkafkbJgNEDrWFq088vMgJ%2BCDMkIrkLrRSsTkmef%2Bu%2Fj49WbD5JrbozshwvdkYN1%2Bwrtzo0MWhyR8npjpc9cOSVog3%2Bq1%2BjYmp&X-Amz-Signature=e10db17e6e957e9aa8881a6d2b47a82ce88e71d1efa8c1afdf1365b9cd334c95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
