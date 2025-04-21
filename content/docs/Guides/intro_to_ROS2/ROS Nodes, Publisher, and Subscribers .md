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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAWH5EO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAge9q9Iwe2rZa9iGnGl6gXZYHGHWZWlp8Gvbx%2FE4DfeAiBKfeQDLex1CQZSk1EE0qRzD54bO3zKGPFGAd82J%2FN%2FPCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv17oelzdirWXNSw1KtwDNkKqWMG5tAjAyqOwmktg8d0DCpDxz%2FVOLYBzgtMnzVtMnd%2Bpjmw11NxNNDwUaDaCJZ6ZWRSwDUlirZR3Oi6JKOUmrEPyYD7cQUIR6EOX4gIDNVvhrqTHdxRg39MLiL%2BKmxLvV1HOHwvhUND6r5qk06YWf0o1ETXH86rdeYe7Z6DtrzA2c959dCVXMZIoQy73VzH99REILD7O3FXilXQfBwVBE%2FebUCi3Vow5IFlGP6QXBK491hZsKsV%2B2Q6SIY2crDOfHD88sc%2F3xa%2BeiD4i7oyOtO6s54SJXlFEgdGroZeUizFL6Fmm6yK%2BNOtXr%2BVnlw94jn%2BgkfGxiy3OJisjhba9VZXFPYLolxC135dszTthcXBRcotAlLL01Ri7hfA6v2LK7nbWaeCXBQ3QCJTkspkklYE%2FMfrB6KGk1rNDFuWgICP9cFCPxN%2BRzsnNs%2BC%2F5Aq8ecW13pWTVY6vGiqpshPBsEW7jbM1YyJeT5x4H%2FUWVv0YamF5jI4e8vPBOFJXEvZvhIP1RhKRFfYCJNGI2liI0%2BZzXwfIx38mVHQJixDfOTgaEvsLu7Qrmw%2Bw7uY9aJeFVN3aBzz8Jaq2aMh6qKV%2FPWjhgg0KG8oeHpS0atLlRPxX44%2B5v7LC8kcw8tKawAY6pgF6rMQ8e5uECh6zzue5W0nVb0S%2F0gpZs3cFh0KPU5yFzeSzPwZL1LtP46F1YigO3jAlODupIcvDbr0t7ema66RevhPOcWgC3W%2BACi83Nu4YXH4rrcMCMCv4O8Ij0WPJ%2F%2BVkWdcP0U%2BKoJWqBFKGq1S2iwQVVhTi9331XGpz7qoPII5Idd5htf%2F%2B4%2FtIaAOx7rmR%2F%2BQCer5EMLEoKG6zUNlXIjDVFZan&X-Amz-Signature=9e70c7e5e1a8bab0db4f2cdc765811ad4d802794068c3e9cef47312448dcd4dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAWH5EO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAge9q9Iwe2rZa9iGnGl6gXZYHGHWZWlp8Gvbx%2FE4DfeAiBKfeQDLex1CQZSk1EE0qRzD54bO3zKGPFGAd82J%2FN%2FPCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv17oelzdirWXNSw1KtwDNkKqWMG5tAjAyqOwmktg8d0DCpDxz%2FVOLYBzgtMnzVtMnd%2Bpjmw11NxNNDwUaDaCJZ6ZWRSwDUlirZR3Oi6JKOUmrEPyYD7cQUIR6EOX4gIDNVvhrqTHdxRg39MLiL%2BKmxLvV1HOHwvhUND6r5qk06YWf0o1ETXH86rdeYe7Z6DtrzA2c959dCVXMZIoQy73VzH99REILD7O3FXilXQfBwVBE%2FebUCi3Vow5IFlGP6QXBK491hZsKsV%2B2Q6SIY2crDOfHD88sc%2F3xa%2BeiD4i7oyOtO6s54SJXlFEgdGroZeUizFL6Fmm6yK%2BNOtXr%2BVnlw94jn%2BgkfGxiy3OJisjhba9VZXFPYLolxC135dszTthcXBRcotAlLL01Ri7hfA6v2LK7nbWaeCXBQ3QCJTkspkklYE%2FMfrB6KGk1rNDFuWgICP9cFCPxN%2BRzsnNs%2BC%2F5Aq8ecW13pWTVY6vGiqpshPBsEW7jbM1YyJeT5x4H%2FUWVv0YamF5jI4e8vPBOFJXEvZvhIP1RhKRFfYCJNGI2liI0%2BZzXwfIx38mVHQJixDfOTgaEvsLu7Qrmw%2Bw7uY9aJeFVN3aBzz8Jaq2aMh6qKV%2FPWjhgg0KG8oeHpS0atLlRPxX44%2B5v7LC8kcw8tKawAY6pgF6rMQ8e5uECh6zzue5W0nVb0S%2F0gpZs3cFh0KPU5yFzeSzPwZL1LtP46F1YigO3jAlODupIcvDbr0t7ema66RevhPOcWgC3W%2BACi83Nu4YXH4rrcMCMCv4O8Ij0WPJ%2F%2BVkWdcP0U%2BKoJWqBFKGq1S2iwQVVhTi9331XGpz7qoPII5Idd5htf%2F%2B4%2FtIaAOx7rmR%2F%2BQCer5EMLEoKG6zUNlXIjDVFZan&X-Amz-Signature=673500160b5652871434316634941951ae76d1881e96d7ffa74eb9703b314d10&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAWH5EO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAge9q9Iwe2rZa9iGnGl6gXZYHGHWZWlp8Gvbx%2FE4DfeAiBKfeQDLex1CQZSk1EE0qRzD54bO3zKGPFGAd82J%2FN%2FPCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv17oelzdirWXNSw1KtwDNkKqWMG5tAjAyqOwmktg8d0DCpDxz%2FVOLYBzgtMnzVtMnd%2Bpjmw11NxNNDwUaDaCJZ6ZWRSwDUlirZR3Oi6JKOUmrEPyYD7cQUIR6EOX4gIDNVvhrqTHdxRg39MLiL%2BKmxLvV1HOHwvhUND6r5qk06YWf0o1ETXH86rdeYe7Z6DtrzA2c959dCVXMZIoQy73VzH99REILD7O3FXilXQfBwVBE%2FebUCi3Vow5IFlGP6QXBK491hZsKsV%2B2Q6SIY2crDOfHD88sc%2F3xa%2BeiD4i7oyOtO6s54SJXlFEgdGroZeUizFL6Fmm6yK%2BNOtXr%2BVnlw94jn%2BgkfGxiy3OJisjhba9VZXFPYLolxC135dszTthcXBRcotAlLL01Ri7hfA6v2LK7nbWaeCXBQ3QCJTkspkklYE%2FMfrB6KGk1rNDFuWgICP9cFCPxN%2BRzsnNs%2BC%2F5Aq8ecW13pWTVY6vGiqpshPBsEW7jbM1YyJeT5x4H%2FUWVv0YamF5jI4e8vPBOFJXEvZvhIP1RhKRFfYCJNGI2liI0%2BZzXwfIx38mVHQJixDfOTgaEvsLu7Qrmw%2Bw7uY9aJeFVN3aBzz8Jaq2aMh6qKV%2FPWjhgg0KG8oeHpS0atLlRPxX44%2B5v7LC8kcw8tKawAY6pgF6rMQ8e5uECh6zzue5W0nVb0S%2F0gpZs3cFh0KPU5yFzeSzPwZL1LtP46F1YigO3jAlODupIcvDbr0t7ema66RevhPOcWgC3W%2BACi83Nu4YXH4rrcMCMCv4O8Ij0WPJ%2F%2BVkWdcP0U%2BKoJWqBFKGq1S2iwQVVhTi9331XGpz7qoPII5Idd5htf%2F%2B4%2FtIaAOx7rmR%2F%2BQCer5EMLEoKG6zUNlXIjDVFZan&X-Amz-Signature=f34fa3802d622925ac11b57399422de8026ae9d8bd0424ce9152655b622ab548&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAWH5EO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAge9q9Iwe2rZa9iGnGl6gXZYHGHWZWlp8Gvbx%2FE4DfeAiBKfeQDLex1CQZSk1EE0qRzD54bO3zKGPFGAd82J%2FN%2FPCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv17oelzdirWXNSw1KtwDNkKqWMG5tAjAyqOwmktg8d0DCpDxz%2FVOLYBzgtMnzVtMnd%2Bpjmw11NxNNDwUaDaCJZ6ZWRSwDUlirZR3Oi6JKOUmrEPyYD7cQUIR6EOX4gIDNVvhrqTHdxRg39MLiL%2BKmxLvV1HOHwvhUND6r5qk06YWf0o1ETXH86rdeYe7Z6DtrzA2c959dCVXMZIoQy73VzH99REILD7O3FXilXQfBwVBE%2FebUCi3Vow5IFlGP6QXBK491hZsKsV%2B2Q6SIY2crDOfHD88sc%2F3xa%2BeiD4i7oyOtO6s54SJXlFEgdGroZeUizFL6Fmm6yK%2BNOtXr%2BVnlw94jn%2BgkfGxiy3OJisjhba9VZXFPYLolxC135dszTthcXBRcotAlLL01Ri7hfA6v2LK7nbWaeCXBQ3QCJTkspkklYE%2FMfrB6KGk1rNDFuWgICP9cFCPxN%2BRzsnNs%2BC%2F5Aq8ecW13pWTVY6vGiqpshPBsEW7jbM1YyJeT5x4H%2FUWVv0YamF5jI4e8vPBOFJXEvZvhIP1RhKRFfYCJNGI2liI0%2BZzXwfIx38mVHQJixDfOTgaEvsLu7Qrmw%2Bw7uY9aJeFVN3aBzz8Jaq2aMh6qKV%2FPWjhgg0KG8oeHpS0atLlRPxX44%2B5v7LC8kcw8tKawAY6pgF6rMQ8e5uECh6zzue5W0nVb0S%2F0gpZs3cFh0KPU5yFzeSzPwZL1LtP46F1YigO3jAlODupIcvDbr0t7ema66RevhPOcWgC3W%2BACi83Nu4YXH4rrcMCMCv4O8Ij0WPJ%2F%2BVkWdcP0U%2BKoJWqBFKGq1S2iwQVVhTi9331XGpz7qoPII5Idd5htf%2F%2B4%2FtIaAOx7rmR%2F%2BQCer5EMLEoKG6zUNlXIjDVFZan&X-Amz-Signature=a315476330b5801eba6656cb0a49a2e49782ae7f41d5243fc85d5fcf9160c667&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAWH5EO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAge9q9Iwe2rZa9iGnGl6gXZYHGHWZWlp8Gvbx%2FE4DfeAiBKfeQDLex1CQZSk1EE0qRzD54bO3zKGPFGAd82J%2FN%2FPCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv17oelzdirWXNSw1KtwDNkKqWMG5tAjAyqOwmktg8d0DCpDxz%2FVOLYBzgtMnzVtMnd%2Bpjmw11NxNNDwUaDaCJZ6ZWRSwDUlirZR3Oi6JKOUmrEPyYD7cQUIR6EOX4gIDNVvhrqTHdxRg39MLiL%2BKmxLvV1HOHwvhUND6r5qk06YWf0o1ETXH86rdeYe7Z6DtrzA2c959dCVXMZIoQy73VzH99REILD7O3FXilXQfBwVBE%2FebUCi3Vow5IFlGP6QXBK491hZsKsV%2B2Q6SIY2crDOfHD88sc%2F3xa%2BeiD4i7oyOtO6s54SJXlFEgdGroZeUizFL6Fmm6yK%2BNOtXr%2BVnlw94jn%2BgkfGxiy3OJisjhba9VZXFPYLolxC135dszTthcXBRcotAlLL01Ri7hfA6v2LK7nbWaeCXBQ3QCJTkspkklYE%2FMfrB6KGk1rNDFuWgICP9cFCPxN%2BRzsnNs%2BC%2F5Aq8ecW13pWTVY6vGiqpshPBsEW7jbM1YyJeT5x4H%2FUWVv0YamF5jI4e8vPBOFJXEvZvhIP1RhKRFfYCJNGI2liI0%2BZzXwfIx38mVHQJixDfOTgaEvsLu7Qrmw%2Bw7uY9aJeFVN3aBzz8Jaq2aMh6qKV%2FPWjhgg0KG8oeHpS0atLlRPxX44%2B5v7LC8kcw8tKawAY6pgF6rMQ8e5uECh6zzue5W0nVb0S%2F0gpZs3cFh0KPU5yFzeSzPwZL1LtP46F1YigO3jAlODupIcvDbr0t7ema66RevhPOcWgC3W%2BACi83Nu4YXH4rrcMCMCv4O8Ij0WPJ%2F%2BVkWdcP0U%2BKoJWqBFKGq1S2iwQVVhTi9331XGpz7qoPII5Idd5htf%2F%2B4%2FtIaAOx7rmR%2F%2BQCer5EMLEoKG6zUNlXIjDVFZan&X-Amz-Signature=0601debfc407680b24fbca8cd67b0948ee83380e0dc35fd539f76c6d62530a69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAWH5EO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAge9q9Iwe2rZa9iGnGl6gXZYHGHWZWlp8Gvbx%2FE4DfeAiBKfeQDLex1CQZSk1EE0qRzD54bO3zKGPFGAd82J%2FN%2FPCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv17oelzdirWXNSw1KtwDNkKqWMG5tAjAyqOwmktg8d0DCpDxz%2FVOLYBzgtMnzVtMnd%2Bpjmw11NxNNDwUaDaCJZ6ZWRSwDUlirZR3Oi6JKOUmrEPyYD7cQUIR6EOX4gIDNVvhrqTHdxRg39MLiL%2BKmxLvV1HOHwvhUND6r5qk06YWf0o1ETXH86rdeYe7Z6DtrzA2c959dCVXMZIoQy73VzH99REILD7O3FXilXQfBwVBE%2FebUCi3Vow5IFlGP6QXBK491hZsKsV%2B2Q6SIY2crDOfHD88sc%2F3xa%2BeiD4i7oyOtO6s54SJXlFEgdGroZeUizFL6Fmm6yK%2BNOtXr%2BVnlw94jn%2BgkfGxiy3OJisjhba9VZXFPYLolxC135dszTthcXBRcotAlLL01Ri7hfA6v2LK7nbWaeCXBQ3QCJTkspkklYE%2FMfrB6KGk1rNDFuWgICP9cFCPxN%2BRzsnNs%2BC%2F5Aq8ecW13pWTVY6vGiqpshPBsEW7jbM1YyJeT5x4H%2FUWVv0YamF5jI4e8vPBOFJXEvZvhIP1RhKRFfYCJNGI2liI0%2BZzXwfIx38mVHQJixDfOTgaEvsLu7Qrmw%2Bw7uY9aJeFVN3aBzz8Jaq2aMh6qKV%2FPWjhgg0KG8oeHpS0atLlRPxX44%2B5v7LC8kcw8tKawAY6pgF6rMQ8e5uECh6zzue5W0nVb0S%2F0gpZs3cFh0KPU5yFzeSzPwZL1LtP46F1YigO3jAlODupIcvDbr0t7ema66RevhPOcWgC3W%2BACi83Nu4YXH4rrcMCMCv4O8Ij0WPJ%2F%2BVkWdcP0U%2BKoJWqBFKGq1S2iwQVVhTi9331XGpz7qoPII5Idd5htf%2F%2B4%2FtIaAOx7rmR%2F%2BQCer5EMLEoKG6zUNlXIjDVFZan&X-Amz-Signature=76a1651065c8225dd07962e6850cfd6c5a99d20da49dc18b9e8b47edcb8c5cfa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAWH5EO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAge9q9Iwe2rZa9iGnGl6gXZYHGHWZWlp8Gvbx%2FE4DfeAiBKfeQDLex1CQZSk1EE0qRzD54bO3zKGPFGAd82J%2FN%2FPCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv17oelzdirWXNSw1KtwDNkKqWMG5tAjAyqOwmktg8d0DCpDxz%2FVOLYBzgtMnzVtMnd%2Bpjmw11NxNNDwUaDaCJZ6ZWRSwDUlirZR3Oi6JKOUmrEPyYD7cQUIR6EOX4gIDNVvhrqTHdxRg39MLiL%2BKmxLvV1HOHwvhUND6r5qk06YWf0o1ETXH86rdeYe7Z6DtrzA2c959dCVXMZIoQy73VzH99REILD7O3FXilXQfBwVBE%2FebUCi3Vow5IFlGP6QXBK491hZsKsV%2B2Q6SIY2crDOfHD88sc%2F3xa%2BeiD4i7oyOtO6s54SJXlFEgdGroZeUizFL6Fmm6yK%2BNOtXr%2BVnlw94jn%2BgkfGxiy3OJisjhba9VZXFPYLolxC135dszTthcXBRcotAlLL01Ri7hfA6v2LK7nbWaeCXBQ3QCJTkspkklYE%2FMfrB6KGk1rNDFuWgICP9cFCPxN%2BRzsnNs%2BC%2F5Aq8ecW13pWTVY6vGiqpshPBsEW7jbM1YyJeT5x4H%2FUWVv0YamF5jI4e8vPBOFJXEvZvhIP1RhKRFfYCJNGI2liI0%2BZzXwfIx38mVHQJixDfOTgaEvsLu7Qrmw%2Bw7uY9aJeFVN3aBzz8Jaq2aMh6qKV%2FPWjhgg0KG8oeHpS0atLlRPxX44%2B5v7LC8kcw8tKawAY6pgF6rMQ8e5uECh6zzue5W0nVb0S%2F0gpZs3cFh0KPU5yFzeSzPwZL1LtP46F1YigO3jAlODupIcvDbr0t7ema66RevhPOcWgC3W%2BACi83Nu4YXH4rrcMCMCv4O8Ij0WPJ%2F%2BVkWdcP0U%2BKoJWqBFKGq1S2iwQVVhTi9331XGpz7qoPII5Idd5htf%2F%2B4%2FtIaAOx7rmR%2F%2BQCer5EMLEoKG6zUNlXIjDVFZan&X-Amz-Signature=f6669353c7d086dc5f6d5f0e077a6a4afc63845696b96da753b1f62317399514&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAWH5EO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAge9q9Iwe2rZa9iGnGl6gXZYHGHWZWlp8Gvbx%2FE4DfeAiBKfeQDLex1CQZSk1EE0qRzD54bO3zKGPFGAd82J%2FN%2FPCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv17oelzdirWXNSw1KtwDNkKqWMG5tAjAyqOwmktg8d0DCpDxz%2FVOLYBzgtMnzVtMnd%2Bpjmw11NxNNDwUaDaCJZ6ZWRSwDUlirZR3Oi6JKOUmrEPyYD7cQUIR6EOX4gIDNVvhrqTHdxRg39MLiL%2BKmxLvV1HOHwvhUND6r5qk06YWf0o1ETXH86rdeYe7Z6DtrzA2c959dCVXMZIoQy73VzH99REILD7O3FXilXQfBwVBE%2FebUCi3Vow5IFlGP6QXBK491hZsKsV%2B2Q6SIY2crDOfHD88sc%2F3xa%2BeiD4i7oyOtO6s54SJXlFEgdGroZeUizFL6Fmm6yK%2BNOtXr%2BVnlw94jn%2BgkfGxiy3OJisjhba9VZXFPYLolxC135dszTthcXBRcotAlLL01Ri7hfA6v2LK7nbWaeCXBQ3QCJTkspkklYE%2FMfrB6KGk1rNDFuWgICP9cFCPxN%2BRzsnNs%2BC%2F5Aq8ecW13pWTVY6vGiqpshPBsEW7jbM1YyJeT5x4H%2FUWVv0YamF5jI4e8vPBOFJXEvZvhIP1RhKRFfYCJNGI2liI0%2BZzXwfIx38mVHQJixDfOTgaEvsLu7Qrmw%2Bw7uY9aJeFVN3aBzz8Jaq2aMh6qKV%2FPWjhgg0KG8oeHpS0atLlRPxX44%2B5v7LC8kcw8tKawAY6pgF6rMQ8e5uECh6zzue5W0nVb0S%2F0gpZs3cFh0KPU5yFzeSzPwZL1LtP46F1YigO3jAlODupIcvDbr0t7ema66RevhPOcWgC3W%2BACi83Nu4YXH4rrcMCMCv4O8Ij0WPJ%2F%2BVkWdcP0U%2BKoJWqBFKGq1S2iwQVVhTi9331XGpz7qoPII5Idd5htf%2F%2B4%2FtIaAOx7rmR%2F%2BQCer5EMLEoKG6zUNlXIjDVFZan&X-Amz-Signature=2471771f3f8dedf811e5fd703bb326779f811a4cf59b587eb3128bf9e525f49a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
