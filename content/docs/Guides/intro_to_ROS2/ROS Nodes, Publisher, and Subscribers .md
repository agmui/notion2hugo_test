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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWCHPHC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIC%2BHmI5q4PVEHKdMJMBy0PPe5qsxksW9t9a6Qfvz1sXRAiBQJkIwDe9iShdZJ%2F01zbzuw1LdMsSjQ5GfNl3wy%2FqI7iqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN3Oe6knDdFLRZBwQKtwDR9gIfjFzUZ%2Bbjp90KmBmuu3XQcaS8JcO9oD3QTbKMCKwF%2FIw4QEcOHdBUZ8V1XTJQo1foQNHHUVRqgLAttm2nJqtUODcMWoUAiIpdXwmYN7MWFHUb3qK%2BpXBHtdb%2Fp2lkVXmWKvA4dc2kJFYBFghGTJetstlexfRQmmL%2Ba8%2FFaPRDM3Jxq9l%2FyNz6oXKXwUkIxIwWQ8kmYELszl%2FKCVe7CdE1S3zHiqW94kAMdfFirr9mUr%2BbHxqiD9XR5MsKl4DR0ev3cGUUF3G%2FEx8%2FhQEMEaw2mSo2%2FYYilbnRAqGXWWrgLcC907c64FWqLxmi6Z%2BEYPMWDUDdextZX8sYmrjODKGogKe%2FwaUfUmBYFRlLfcECNv2K7MmZIqqPCfDY0NdsBIyEkhi8QmoEmeSCH%2Bp7iC6gL798QqYRzmDcRh0goM0%2B%2B6SgFwd7sJFZYOBW8D2MjAWePyA0O9VV5Nsd4nlDq6LTCSf0yLDSRi73hL4QNtG5VxxUUopcLotYQu7FsIpfmp3Lt6LUC%2FZVNLALn7ZAUuuI4CoJ0zMQoKDaDTq1oaWxtkUQ3GpHZejADHd3r0%2F0VxDrQBSCrgk4DF%2BV13T2IaQZOYnhmc1%2BytvjQMfGgTHsKelx9DD%2F2r%2Fj1Yw%2B7OdxAY6pgEPM4WAkeupk3oNv8dC6k%2FZyijpAUjdd2nAcERq8wgUNw175OPZ2%2FfLkmUrOhiGmPvJvHG0hJH%2Bh%2BkXCAwQSsM%2FcvGP8SBvU2Ru3I%2FphF5rFyU00S%2FwjpQQdQFPtQJ26HF2SwRiCqeb6OPrlVEbf8ZSxkDm%2Fj2aT1M1kM82gHmv8jGtNx9LzKGmOEmi8FAw9eUz5MkzPiws1zEuJaDtdHaOVwH1yajz&X-Amz-Signature=24665ff69ee95bba668a87b071876f573d1b3e33eb71f214050bfe6cabf7cfd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWCHPHC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIC%2BHmI5q4PVEHKdMJMBy0PPe5qsxksW9t9a6Qfvz1sXRAiBQJkIwDe9iShdZJ%2F01zbzuw1LdMsSjQ5GfNl3wy%2FqI7iqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN3Oe6knDdFLRZBwQKtwDR9gIfjFzUZ%2Bbjp90KmBmuu3XQcaS8JcO9oD3QTbKMCKwF%2FIw4QEcOHdBUZ8V1XTJQo1foQNHHUVRqgLAttm2nJqtUODcMWoUAiIpdXwmYN7MWFHUb3qK%2BpXBHtdb%2Fp2lkVXmWKvA4dc2kJFYBFghGTJetstlexfRQmmL%2Ba8%2FFaPRDM3Jxq9l%2FyNz6oXKXwUkIxIwWQ8kmYELszl%2FKCVe7CdE1S3zHiqW94kAMdfFirr9mUr%2BbHxqiD9XR5MsKl4DR0ev3cGUUF3G%2FEx8%2FhQEMEaw2mSo2%2FYYilbnRAqGXWWrgLcC907c64FWqLxmi6Z%2BEYPMWDUDdextZX8sYmrjODKGogKe%2FwaUfUmBYFRlLfcECNv2K7MmZIqqPCfDY0NdsBIyEkhi8QmoEmeSCH%2Bp7iC6gL798QqYRzmDcRh0goM0%2B%2B6SgFwd7sJFZYOBW8D2MjAWePyA0O9VV5Nsd4nlDq6LTCSf0yLDSRi73hL4QNtG5VxxUUopcLotYQu7FsIpfmp3Lt6LUC%2FZVNLALn7ZAUuuI4CoJ0zMQoKDaDTq1oaWxtkUQ3GpHZejADHd3r0%2F0VxDrQBSCrgk4DF%2BV13T2IaQZOYnhmc1%2BytvjQMfGgTHsKelx9DD%2F2r%2Fj1Yw%2B7OdxAY6pgEPM4WAkeupk3oNv8dC6k%2FZyijpAUjdd2nAcERq8wgUNw175OPZ2%2FfLkmUrOhiGmPvJvHG0hJH%2Bh%2BkXCAwQSsM%2FcvGP8SBvU2Ru3I%2FphF5rFyU00S%2FwjpQQdQFPtQJ26HF2SwRiCqeb6OPrlVEbf8ZSxkDm%2Fj2aT1M1kM82gHmv8jGtNx9LzKGmOEmi8FAw9eUz5MkzPiws1zEuJaDtdHaOVwH1yajz&X-Amz-Signature=ba9dca9acdc7b036db305b0f23be71710c107be6adc67ac784bfcbdcea730f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWCHPHC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIC%2BHmI5q4PVEHKdMJMBy0PPe5qsxksW9t9a6Qfvz1sXRAiBQJkIwDe9iShdZJ%2F01zbzuw1LdMsSjQ5GfNl3wy%2FqI7iqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN3Oe6knDdFLRZBwQKtwDR9gIfjFzUZ%2Bbjp90KmBmuu3XQcaS8JcO9oD3QTbKMCKwF%2FIw4QEcOHdBUZ8V1XTJQo1foQNHHUVRqgLAttm2nJqtUODcMWoUAiIpdXwmYN7MWFHUb3qK%2BpXBHtdb%2Fp2lkVXmWKvA4dc2kJFYBFghGTJetstlexfRQmmL%2Ba8%2FFaPRDM3Jxq9l%2FyNz6oXKXwUkIxIwWQ8kmYELszl%2FKCVe7CdE1S3zHiqW94kAMdfFirr9mUr%2BbHxqiD9XR5MsKl4DR0ev3cGUUF3G%2FEx8%2FhQEMEaw2mSo2%2FYYilbnRAqGXWWrgLcC907c64FWqLxmi6Z%2BEYPMWDUDdextZX8sYmrjODKGogKe%2FwaUfUmBYFRlLfcECNv2K7MmZIqqPCfDY0NdsBIyEkhi8QmoEmeSCH%2Bp7iC6gL798QqYRzmDcRh0goM0%2B%2B6SgFwd7sJFZYOBW8D2MjAWePyA0O9VV5Nsd4nlDq6LTCSf0yLDSRi73hL4QNtG5VxxUUopcLotYQu7FsIpfmp3Lt6LUC%2FZVNLALn7ZAUuuI4CoJ0zMQoKDaDTq1oaWxtkUQ3GpHZejADHd3r0%2F0VxDrQBSCrgk4DF%2BV13T2IaQZOYnhmc1%2BytvjQMfGgTHsKelx9DD%2F2r%2Fj1Yw%2B7OdxAY6pgEPM4WAkeupk3oNv8dC6k%2FZyijpAUjdd2nAcERq8wgUNw175OPZ2%2FfLkmUrOhiGmPvJvHG0hJH%2Bh%2BkXCAwQSsM%2FcvGP8SBvU2Ru3I%2FphF5rFyU00S%2FwjpQQdQFPtQJ26HF2SwRiCqeb6OPrlVEbf8ZSxkDm%2Fj2aT1M1kM82gHmv8jGtNx9LzKGmOEmi8FAw9eUz5MkzPiws1zEuJaDtdHaOVwH1yajz&X-Amz-Signature=0ad166882e4e7c9989b16502e709d102f8353916dde0ea47bca6c20ea849c982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWCHPHC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIC%2BHmI5q4PVEHKdMJMBy0PPe5qsxksW9t9a6Qfvz1sXRAiBQJkIwDe9iShdZJ%2F01zbzuw1LdMsSjQ5GfNl3wy%2FqI7iqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN3Oe6knDdFLRZBwQKtwDR9gIfjFzUZ%2Bbjp90KmBmuu3XQcaS8JcO9oD3QTbKMCKwF%2FIw4QEcOHdBUZ8V1XTJQo1foQNHHUVRqgLAttm2nJqtUODcMWoUAiIpdXwmYN7MWFHUb3qK%2BpXBHtdb%2Fp2lkVXmWKvA4dc2kJFYBFghGTJetstlexfRQmmL%2Ba8%2FFaPRDM3Jxq9l%2FyNz6oXKXwUkIxIwWQ8kmYELszl%2FKCVe7CdE1S3zHiqW94kAMdfFirr9mUr%2BbHxqiD9XR5MsKl4DR0ev3cGUUF3G%2FEx8%2FhQEMEaw2mSo2%2FYYilbnRAqGXWWrgLcC907c64FWqLxmi6Z%2BEYPMWDUDdextZX8sYmrjODKGogKe%2FwaUfUmBYFRlLfcECNv2K7MmZIqqPCfDY0NdsBIyEkhi8QmoEmeSCH%2Bp7iC6gL798QqYRzmDcRh0goM0%2B%2B6SgFwd7sJFZYOBW8D2MjAWePyA0O9VV5Nsd4nlDq6LTCSf0yLDSRi73hL4QNtG5VxxUUopcLotYQu7FsIpfmp3Lt6LUC%2FZVNLALn7ZAUuuI4CoJ0zMQoKDaDTq1oaWxtkUQ3GpHZejADHd3r0%2F0VxDrQBSCrgk4DF%2BV13T2IaQZOYnhmc1%2BytvjQMfGgTHsKelx9DD%2F2r%2Fj1Yw%2B7OdxAY6pgEPM4WAkeupk3oNv8dC6k%2FZyijpAUjdd2nAcERq8wgUNw175OPZ2%2FfLkmUrOhiGmPvJvHG0hJH%2Bh%2BkXCAwQSsM%2FcvGP8SBvU2Ru3I%2FphF5rFyU00S%2FwjpQQdQFPtQJ26HF2SwRiCqeb6OPrlVEbf8ZSxkDm%2Fj2aT1M1kM82gHmv8jGtNx9LzKGmOEmi8FAw9eUz5MkzPiws1zEuJaDtdHaOVwH1yajz&X-Amz-Signature=6ed509671e7e2b8e4816af72dc59d2c4e09ebcaaa32118269659e22dcda2b7bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWCHPHC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIC%2BHmI5q4PVEHKdMJMBy0PPe5qsxksW9t9a6Qfvz1sXRAiBQJkIwDe9iShdZJ%2F01zbzuw1LdMsSjQ5GfNl3wy%2FqI7iqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN3Oe6knDdFLRZBwQKtwDR9gIfjFzUZ%2Bbjp90KmBmuu3XQcaS8JcO9oD3QTbKMCKwF%2FIw4QEcOHdBUZ8V1XTJQo1foQNHHUVRqgLAttm2nJqtUODcMWoUAiIpdXwmYN7MWFHUb3qK%2BpXBHtdb%2Fp2lkVXmWKvA4dc2kJFYBFghGTJetstlexfRQmmL%2Ba8%2FFaPRDM3Jxq9l%2FyNz6oXKXwUkIxIwWQ8kmYELszl%2FKCVe7CdE1S3zHiqW94kAMdfFirr9mUr%2BbHxqiD9XR5MsKl4DR0ev3cGUUF3G%2FEx8%2FhQEMEaw2mSo2%2FYYilbnRAqGXWWrgLcC907c64FWqLxmi6Z%2BEYPMWDUDdextZX8sYmrjODKGogKe%2FwaUfUmBYFRlLfcECNv2K7MmZIqqPCfDY0NdsBIyEkhi8QmoEmeSCH%2Bp7iC6gL798QqYRzmDcRh0goM0%2B%2B6SgFwd7sJFZYOBW8D2MjAWePyA0O9VV5Nsd4nlDq6LTCSf0yLDSRi73hL4QNtG5VxxUUopcLotYQu7FsIpfmp3Lt6LUC%2FZVNLALn7ZAUuuI4CoJ0zMQoKDaDTq1oaWxtkUQ3GpHZejADHd3r0%2F0VxDrQBSCrgk4DF%2BV13T2IaQZOYnhmc1%2BytvjQMfGgTHsKelx9DD%2F2r%2Fj1Yw%2B7OdxAY6pgEPM4WAkeupk3oNv8dC6k%2FZyijpAUjdd2nAcERq8wgUNw175OPZ2%2FfLkmUrOhiGmPvJvHG0hJH%2Bh%2BkXCAwQSsM%2FcvGP8SBvU2Ru3I%2FphF5rFyU00S%2FwjpQQdQFPtQJ26HF2SwRiCqeb6OPrlVEbf8ZSxkDm%2Fj2aT1M1kM82gHmv8jGtNx9LzKGmOEmi8FAw9eUz5MkzPiws1zEuJaDtdHaOVwH1yajz&X-Amz-Signature=294bc13f6f954ad3fa7d51058108b3867955c32034779b53e1e7323933f4a95a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWCHPHC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIC%2BHmI5q4PVEHKdMJMBy0PPe5qsxksW9t9a6Qfvz1sXRAiBQJkIwDe9iShdZJ%2F01zbzuw1LdMsSjQ5GfNl3wy%2FqI7iqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN3Oe6knDdFLRZBwQKtwDR9gIfjFzUZ%2Bbjp90KmBmuu3XQcaS8JcO9oD3QTbKMCKwF%2FIw4QEcOHdBUZ8V1XTJQo1foQNHHUVRqgLAttm2nJqtUODcMWoUAiIpdXwmYN7MWFHUb3qK%2BpXBHtdb%2Fp2lkVXmWKvA4dc2kJFYBFghGTJetstlexfRQmmL%2Ba8%2FFaPRDM3Jxq9l%2FyNz6oXKXwUkIxIwWQ8kmYELszl%2FKCVe7CdE1S3zHiqW94kAMdfFirr9mUr%2BbHxqiD9XR5MsKl4DR0ev3cGUUF3G%2FEx8%2FhQEMEaw2mSo2%2FYYilbnRAqGXWWrgLcC907c64FWqLxmi6Z%2BEYPMWDUDdextZX8sYmrjODKGogKe%2FwaUfUmBYFRlLfcECNv2K7MmZIqqPCfDY0NdsBIyEkhi8QmoEmeSCH%2Bp7iC6gL798QqYRzmDcRh0goM0%2B%2B6SgFwd7sJFZYOBW8D2MjAWePyA0O9VV5Nsd4nlDq6LTCSf0yLDSRi73hL4QNtG5VxxUUopcLotYQu7FsIpfmp3Lt6LUC%2FZVNLALn7ZAUuuI4CoJ0zMQoKDaDTq1oaWxtkUQ3GpHZejADHd3r0%2F0VxDrQBSCrgk4DF%2BV13T2IaQZOYnhmc1%2BytvjQMfGgTHsKelx9DD%2F2r%2Fj1Yw%2B7OdxAY6pgEPM4WAkeupk3oNv8dC6k%2FZyijpAUjdd2nAcERq8wgUNw175OPZ2%2FfLkmUrOhiGmPvJvHG0hJH%2Bh%2BkXCAwQSsM%2FcvGP8SBvU2Ru3I%2FphF5rFyU00S%2FwjpQQdQFPtQJ26HF2SwRiCqeb6OPrlVEbf8ZSxkDm%2Fj2aT1M1kM82gHmv8jGtNx9LzKGmOEmi8FAw9eUz5MkzPiws1zEuJaDtdHaOVwH1yajz&X-Amz-Signature=2cfbea13ad9c2576c168994628548a508c38964240eb455718d37e4b818bf352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWCHPHC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIC%2BHmI5q4PVEHKdMJMBy0PPe5qsxksW9t9a6Qfvz1sXRAiBQJkIwDe9iShdZJ%2F01zbzuw1LdMsSjQ5GfNl3wy%2FqI7iqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN3Oe6knDdFLRZBwQKtwDR9gIfjFzUZ%2Bbjp90KmBmuu3XQcaS8JcO9oD3QTbKMCKwF%2FIw4QEcOHdBUZ8V1XTJQo1foQNHHUVRqgLAttm2nJqtUODcMWoUAiIpdXwmYN7MWFHUb3qK%2BpXBHtdb%2Fp2lkVXmWKvA4dc2kJFYBFghGTJetstlexfRQmmL%2Ba8%2FFaPRDM3Jxq9l%2FyNz6oXKXwUkIxIwWQ8kmYELszl%2FKCVe7CdE1S3zHiqW94kAMdfFirr9mUr%2BbHxqiD9XR5MsKl4DR0ev3cGUUF3G%2FEx8%2FhQEMEaw2mSo2%2FYYilbnRAqGXWWrgLcC907c64FWqLxmi6Z%2BEYPMWDUDdextZX8sYmrjODKGogKe%2FwaUfUmBYFRlLfcECNv2K7MmZIqqPCfDY0NdsBIyEkhi8QmoEmeSCH%2Bp7iC6gL798QqYRzmDcRh0goM0%2B%2B6SgFwd7sJFZYOBW8D2MjAWePyA0O9VV5Nsd4nlDq6LTCSf0yLDSRi73hL4QNtG5VxxUUopcLotYQu7FsIpfmp3Lt6LUC%2FZVNLALn7ZAUuuI4CoJ0zMQoKDaDTq1oaWxtkUQ3GpHZejADHd3r0%2F0VxDrQBSCrgk4DF%2BV13T2IaQZOYnhmc1%2BytvjQMfGgTHsKelx9DD%2F2r%2Fj1Yw%2B7OdxAY6pgEPM4WAkeupk3oNv8dC6k%2FZyijpAUjdd2nAcERq8wgUNw175OPZ2%2FfLkmUrOhiGmPvJvHG0hJH%2Bh%2BkXCAwQSsM%2FcvGP8SBvU2Ru3I%2FphF5rFyU00S%2FwjpQQdQFPtQJ26HF2SwRiCqeb6OPrlVEbf8ZSxkDm%2Fj2aT1M1kM82gHmv8jGtNx9LzKGmOEmi8FAw9eUz5MkzPiws1zEuJaDtdHaOVwH1yajz&X-Amz-Signature=62e78781d8e61bfbca66b202cdd17e97b20740c594e4900c58b91c3f5940eabd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWCHPHC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIC%2BHmI5q4PVEHKdMJMBy0PPe5qsxksW9t9a6Qfvz1sXRAiBQJkIwDe9iShdZJ%2F01zbzuw1LdMsSjQ5GfNl3wy%2FqI7iqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN3Oe6knDdFLRZBwQKtwDR9gIfjFzUZ%2Bbjp90KmBmuu3XQcaS8JcO9oD3QTbKMCKwF%2FIw4QEcOHdBUZ8V1XTJQo1foQNHHUVRqgLAttm2nJqtUODcMWoUAiIpdXwmYN7MWFHUb3qK%2BpXBHtdb%2Fp2lkVXmWKvA4dc2kJFYBFghGTJetstlexfRQmmL%2Ba8%2FFaPRDM3Jxq9l%2FyNz6oXKXwUkIxIwWQ8kmYELszl%2FKCVe7CdE1S3zHiqW94kAMdfFirr9mUr%2BbHxqiD9XR5MsKl4DR0ev3cGUUF3G%2FEx8%2FhQEMEaw2mSo2%2FYYilbnRAqGXWWrgLcC907c64FWqLxmi6Z%2BEYPMWDUDdextZX8sYmrjODKGogKe%2FwaUfUmBYFRlLfcECNv2K7MmZIqqPCfDY0NdsBIyEkhi8QmoEmeSCH%2Bp7iC6gL798QqYRzmDcRh0goM0%2B%2B6SgFwd7sJFZYOBW8D2MjAWePyA0O9VV5Nsd4nlDq6LTCSf0yLDSRi73hL4QNtG5VxxUUopcLotYQu7FsIpfmp3Lt6LUC%2FZVNLALn7ZAUuuI4CoJ0zMQoKDaDTq1oaWxtkUQ3GpHZejADHd3r0%2F0VxDrQBSCrgk4DF%2BV13T2IaQZOYnhmc1%2BytvjQMfGgTHsKelx9DD%2F2r%2Fj1Yw%2B7OdxAY6pgEPM4WAkeupk3oNv8dC6k%2FZyijpAUjdd2nAcERq8wgUNw175OPZ2%2FfLkmUrOhiGmPvJvHG0hJH%2Bh%2BkXCAwQSsM%2FcvGP8SBvU2Ru3I%2FphF5rFyU00S%2FwjpQQdQFPtQJ26HF2SwRiCqeb6OPrlVEbf8ZSxkDm%2Fj2aT1M1kM82gHmv8jGtNx9LzKGmOEmi8FAw9eUz5MkzPiws1zEuJaDtdHaOVwH1yajz&X-Amz-Signature=24d3747c6b4daa53a39b43635d76c2ed482a9a69d2855b30289cfaeac2ca101b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
