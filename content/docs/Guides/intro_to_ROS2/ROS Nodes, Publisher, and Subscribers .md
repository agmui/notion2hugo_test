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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LVFCW6W%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIG0x8ox9J2zIeGmcKQD%2BG9Oc4ddMqgubn5Iu1X5wJblvAiEAwPTzoPQ%2F9q6WFNzBa%2FT8bxr2JeMeMPgvC8xA7HkK9TYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNtm4s%2BKvk%2FAUHwzGyrcA2jRbqjQoygMMQGajwAWhkITfhowI%2FP%2BFSWNH%2BKme3cK6xlRPIMcemzPT4GkmM9A61028iLxFSA7hQXoukOTo4%2BcJWKYVBG9YiAy0MY0NMe%2Fn9g8kB3wiEonDdF01ZwK7Nq6lAyYVHxlaC1UF57%2FQw7H5zQFu%2FAK2i32eFJmWZbiz67RoBoq8agbiTxYtpeg%2F3ed2dxb8kscyeLk936%2B%2FX3yaHWRAJ6uhPGnxhX63k%2FAVn5tlMqXx3XknIPam1k3hPe1UER16T9Asr1S1JxW5sSJG%2FbJV%2BcOypzirvHGqyJ0W4lInwyHZxy6OhTNFidLkLTLzADFtcQb6XV7%2BAA658EeCPf8uIHKT9kPH%2BaNOnPdiyP7KUSCGZMsId%2FGSYYVHEamK2YVnT4%2FgRFYUwxRrBVHOnnl%2Bg8JMwM%2BxaNSW2AxVwnmv%2BYQqDTlMG4Id071heYLQhNXtLVIDgz8Mw1XohK2Q%2FziDblXhS5NJy%2F2o2pJIoLSEA%2FT0zFPo6ABGvUOKljkAkmnirviQKZAS8ArFWBch4i%2FDe2rtYoLwr0slOatGln2dPpT%2FlQuoYMAthdQPDK8xv8Cg8J7HcMuStttXRZBwh%2BE0zH9Z61WXMXszM9xrU%2Fwaf2MbkcxUyI6MNCI%2FL0GOqUB5JpZC29Qvpy1lx%2B39z6IAfh6EtSCQ9DRTEh4KXAEqiquKZQ7IAE95iWK%2B%2FaQFZK01xtvqAa22o0SqYCKNQYTdg2MXiaWYJUU7LybRcnNI1B%2BqKDmPX9xtNA3AKWWZYqQVbDyBe2vem41i2V5qomQo3bcmPaGWOje4MgiioBsWZIcbWuG9fXdRew8UESevQTxuPfdjRdP7x5oxkTLXK%2FGfFsqmUHm&X-Amz-Signature=be978910c0117766ef2bf5e7bd8e85fb1f43757de07826374e5f36460f9dd172&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LVFCW6W%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIG0x8ox9J2zIeGmcKQD%2BG9Oc4ddMqgubn5Iu1X5wJblvAiEAwPTzoPQ%2F9q6WFNzBa%2FT8bxr2JeMeMPgvC8xA7HkK9TYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNtm4s%2BKvk%2FAUHwzGyrcA2jRbqjQoygMMQGajwAWhkITfhowI%2FP%2BFSWNH%2BKme3cK6xlRPIMcemzPT4GkmM9A61028iLxFSA7hQXoukOTo4%2BcJWKYVBG9YiAy0MY0NMe%2Fn9g8kB3wiEonDdF01ZwK7Nq6lAyYVHxlaC1UF57%2FQw7H5zQFu%2FAK2i32eFJmWZbiz67RoBoq8agbiTxYtpeg%2F3ed2dxb8kscyeLk936%2B%2FX3yaHWRAJ6uhPGnxhX63k%2FAVn5tlMqXx3XknIPam1k3hPe1UER16T9Asr1S1JxW5sSJG%2FbJV%2BcOypzirvHGqyJ0W4lInwyHZxy6OhTNFidLkLTLzADFtcQb6XV7%2BAA658EeCPf8uIHKT9kPH%2BaNOnPdiyP7KUSCGZMsId%2FGSYYVHEamK2YVnT4%2FgRFYUwxRrBVHOnnl%2Bg8JMwM%2BxaNSW2AxVwnmv%2BYQqDTlMG4Id071heYLQhNXtLVIDgz8Mw1XohK2Q%2FziDblXhS5NJy%2F2o2pJIoLSEA%2FT0zFPo6ABGvUOKljkAkmnirviQKZAS8ArFWBch4i%2FDe2rtYoLwr0slOatGln2dPpT%2FlQuoYMAthdQPDK8xv8Cg8J7HcMuStttXRZBwh%2BE0zH9Z61WXMXszM9xrU%2Fwaf2MbkcxUyI6MNCI%2FL0GOqUB5JpZC29Qvpy1lx%2B39z6IAfh6EtSCQ9DRTEh4KXAEqiquKZQ7IAE95iWK%2B%2FaQFZK01xtvqAa22o0SqYCKNQYTdg2MXiaWYJUU7LybRcnNI1B%2BqKDmPX9xtNA3AKWWZYqQVbDyBe2vem41i2V5qomQo3bcmPaGWOje4MgiioBsWZIcbWuG9fXdRew8UESevQTxuPfdjRdP7x5oxkTLXK%2FGfFsqmUHm&X-Amz-Signature=8a845adee30296ba132ea1ac68f57e6d8575c65692f054b4c44d638901696740&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LVFCW6W%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIG0x8ox9J2zIeGmcKQD%2BG9Oc4ddMqgubn5Iu1X5wJblvAiEAwPTzoPQ%2F9q6WFNzBa%2FT8bxr2JeMeMPgvC8xA7HkK9TYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNtm4s%2BKvk%2FAUHwzGyrcA2jRbqjQoygMMQGajwAWhkITfhowI%2FP%2BFSWNH%2BKme3cK6xlRPIMcemzPT4GkmM9A61028iLxFSA7hQXoukOTo4%2BcJWKYVBG9YiAy0MY0NMe%2Fn9g8kB3wiEonDdF01ZwK7Nq6lAyYVHxlaC1UF57%2FQw7H5zQFu%2FAK2i32eFJmWZbiz67RoBoq8agbiTxYtpeg%2F3ed2dxb8kscyeLk936%2B%2FX3yaHWRAJ6uhPGnxhX63k%2FAVn5tlMqXx3XknIPam1k3hPe1UER16T9Asr1S1JxW5sSJG%2FbJV%2BcOypzirvHGqyJ0W4lInwyHZxy6OhTNFidLkLTLzADFtcQb6XV7%2BAA658EeCPf8uIHKT9kPH%2BaNOnPdiyP7KUSCGZMsId%2FGSYYVHEamK2YVnT4%2FgRFYUwxRrBVHOnnl%2Bg8JMwM%2BxaNSW2AxVwnmv%2BYQqDTlMG4Id071heYLQhNXtLVIDgz8Mw1XohK2Q%2FziDblXhS5NJy%2F2o2pJIoLSEA%2FT0zFPo6ABGvUOKljkAkmnirviQKZAS8ArFWBch4i%2FDe2rtYoLwr0slOatGln2dPpT%2FlQuoYMAthdQPDK8xv8Cg8J7HcMuStttXRZBwh%2BE0zH9Z61WXMXszM9xrU%2Fwaf2MbkcxUyI6MNCI%2FL0GOqUB5JpZC29Qvpy1lx%2B39z6IAfh6EtSCQ9DRTEh4KXAEqiquKZQ7IAE95iWK%2B%2FaQFZK01xtvqAa22o0SqYCKNQYTdg2MXiaWYJUU7LybRcnNI1B%2BqKDmPX9xtNA3AKWWZYqQVbDyBe2vem41i2V5qomQo3bcmPaGWOje4MgiioBsWZIcbWuG9fXdRew8UESevQTxuPfdjRdP7x5oxkTLXK%2FGfFsqmUHm&X-Amz-Signature=53088fa293ad8da87b5eab959c10c0da7990810514a825795651b8b72b78c84c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LVFCW6W%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIG0x8ox9J2zIeGmcKQD%2BG9Oc4ddMqgubn5Iu1X5wJblvAiEAwPTzoPQ%2F9q6WFNzBa%2FT8bxr2JeMeMPgvC8xA7HkK9TYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNtm4s%2BKvk%2FAUHwzGyrcA2jRbqjQoygMMQGajwAWhkITfhowI%2FP%2BFSWNH%2BKme3cK6xlRPIMcemzPT4GkmM9A61028iLxFSA7hQXoukOTo4%2BcJWKYVBG9YiAy0MY0NMe%2Fn9g8kB3wiEonDdF01ZwK7Nq6lAyYVHxlaC1UF57%2FQw7H5zQFu%2FAK2i32eFJmWZbiz67RoBoq8agbiTxYtpeg%2F3ed2dxb8kscyeLk936%2B%2FX3yaHWRAJ6uhPGnxhX63k%2FAVn5tlMqXx3XknIPam1k3hPe1UER16T9Asr1S1JxW5sSJG%2FbJV%2BcOypzirvHGqyJ0W4lInwyHZxy6OhTNFidLkLTLzADFtcQb6XV7%2BAA658EeCPf8uIHKT9kPH%2BaNOnPdiyP7KUSCGZMsId%2FGSYYVHEamK2YVnT4%2FgRFYUwxRrBVHOnnl%2Bg8JMwM%2BxaNSW2AxVwnmv%2BYQqDTlMG4Id071heYLQhNXtLVIDgz8Mw1XohK2Q%2FziDblXhS5NJy%2F2o2pJIoLSEA%2FT0zFPo6ABGvUOKljkAkmnirviQKZAS8ArFWBch4i%2FDe2rtYoLwr0slOatGln2dPpT%2FlQuoYMAthdQPDK8xv8Cg8J7HcMuStttXRZBwh%2BE0zH9Z61WXMXszM9xrU%2Fwaf2MbkcxUyI6MNCI%2FL0GOqUB5JpZC29Qvpy1lx%2B39z6IAfh6EtSCQ9DRTEh4KXAEqiquKZQ7IAE95iWK%2B%2FaQFZK01xtvqAa22o0SqYCKNQYTdg2MXiaWYJUU7LybRcnNI1B%2BqKDmPX9xtNA3AKWWZYqQVbDyBe2vem41i2V5qomQo3bcmPaGWOje4MgiioBsWZIcbWuG9fXdRew8UESevQTxuPfdjRdP7x5oxkTLXK%2FGfFsqmUHm&X-Amz-Signature=9bab6a589715f990ca5e442fde552216166a35f510df5fae052a3d503f578dad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LVFCW6W%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIG0x8ox9J2zIeGmcKQD%2BG9Oc4ddMqgubn5Iu1X5wJblvAiEAwPTzoPQ%2F9q6WFNzBa%2FT8bxr2JeMeMPgvC8xA7HkK9TYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNtm4s%2BKvk%2FAUHwzGyrcA2jRbqjQoygMMQGajwAWhkITfhowI%2FP%2BFSWNH%2BKme3cK6xlRPIMcemzPT4GkmM9A61028iLxFSA7hQXoukOTo4%2BcJWKYVBG9YiAy0MY0NMe%2Fn9g8kB3wiEonDdF01ZwK7Nq6lAyYVHxlaC1UF57%2FQw7H5zQFu%2FAK2i32eFJmWZbiz67RoBoq8agbiTxYtpeg%2F3ed2dxb8kscyeLk936%2B%2FX3yaHWRAJ6uhPGnxhX63k%2FAVn5tlMqXx3XknIPam1k3hPe1UER16T9Asr1S1JxW5sSJG%2FbJV%2BcOypzirvHGqyJ0W4lInwyHZxy6OhTNFidLkLTLzADFtcQb6XV7%2BAA658EeCPf8uIHKT9kPH%2BaNOnPdiyP7KUSCGZMsId%2FGSYYVHEamK2YVnT4%2FgRFYUwxRrBVHOnnl%2Bg8JMwM%2BxaNSW2AxVwnmv%2BYQqDTlMG4Id071heYLQhNXtLVIDgz8Mw1XohK2Q%2FziDblXhS5NJy%2F2o2pJIoLSEA%2FT0zFPo6ABGvUOKljkAkmnirviQKZAS8ArFWBch4i%2FDe2rtYoLwr0slOatGln2dPpT%2FlQuoYMAthdQPDK8xv8Cg8J7HcMuStttXRZBwh%2BE0zH9Z61WXMXszM9xrU%2Fwaf2MbkcxUyI6MNCI%2FL0GOqUB5JpZC29Qvpy1lx%2B39z6IAfh6EtSCQ9DRTEh4KXAEqiquKZQ7IAE95iWK%2B%2FaQFZK01xtvqAa22o0SqYCKNQYTdg2MXiaWYJUU7LybRcnNI1B%2BqKDmPX9xtNA3AKWWZYqQVbDyBe2vem41i2V5qomQo3bcmPaGWOje4MgiioBsWZIcbWuG9fXdRew8UESevQTxuPfdjRdP7x5oxkTLXK%2FGfFsqmUHm&X-Amz-Signature=827fbf11c9b2a32ad5c6746cbd019ca0e37074b53f1407273cdc850b228393e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LVFCW6W%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIG0x8ox9J2zIeGmcKQD%2BG9Oc4ddMqgubn5Iu1X5wJblvAiEAwPTzoPQ%2F9q6WFNzBa%2FT8bxr2JeMeMPgvC8xA7HkK9TYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNtm4s%2BKvk%2FAUHwzGyrcA2jRbqjQoygMMQGajwAWhkITfhowI%2FP%2BFSWNH%2BKme3cK6xlRPIMcemzPT4GkmM9A61028iLxFSA7hQXoukOTo4%2BcJWKYVBG9YiAy0MY0NMe%2Fn9g8kB3wiEonDdF01ZwK7Nq6lAyYVHxlaC1UF57%2FQw7H5zQFu%2FAK2i32eFJmWZbiz67RoBoq8agbiTxYtpeg%2F3ed2dxb8kscyeLk936%2B%2FX3yaHWRAJ6uhPGnxhX63k%2FAVn5tlMqXx3XknIPam1k3hPe1UER16T9Asr1S1JxW5sSJG%2FbJV%2BcOypzirvHGqyJ0W4lInwyHZxy6OhTNFidLkLTLzADFtcQb6XV7%2BAA658EeCPf8uIHKT9kPH%2BaNOnPdiyP7KUSCGZMsId%2FGSYYVHEamK2YVnT4%2FgRFYUwxRrBVHOnnl%2Bg8JMwM%2BxaNSW2AxVwnmv%2BYQqDTlMG4Id071heYLQhNXtLVIDgz8Mw1XohK2Q%2FziDblXhS5NJy%2F2o2pJIoLSEA%2FT0zFPo6ABGvUOKljkAkmnirviQKZAS8ArFWBch4i%2FDe2rtYoLwr0slOatGln2dPpT%2FlQuoYMAthdQPDK8xv8Cg8J7HcMuStttXRZBwh%2BE0zH9Z61WXMXszM9xrU%2Fwaf2MbkcxUyI6MNCI%2FL0GOqUB5JpZC29Qvpy1lx%2B39z6IAfh6EtSCQ9DRTEh4KXAEqiquKZQ7IAE95iWK%2B%2FaQFZK01xtvqAa22o0SqYCKNQYTdg2MXiaWYJUU7LybRcnNI1B%2BqKDmPX9xtNA3AKWWZYqQVbDyBe2vem41i2V5qomQo3bcmPaGWOje4MgiioBsWZIcbWuG9fXdRew8UESevQTxuPfdjRdP7x5oxkTLXK%2FGfFsqmUHm&X-Amz-Signature=08c4a9171ffc828869ce5566a87995bb02c40c9ed3b94cdbdb2ba8af491fecc0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LVFCW6W%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIG0x8ox9J2zIeGmcKQD%2BG9Oc4ddMqgubn5Iu1X5wJblvAiEAwPTzoPQ%2F9q6WFNzBa%2FT8bxr2JeMeMPgvC8xA7HkK9TYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNtm4s%2BKvk%2FAUHwzGyrcA2jRbqjQoygMMQGajwAWhkITfhowI%2FP%2BFSWNH%2BKme3cK6xlRPIMcemzPT4GkmM9A61028iLxFSA7hQXoukOTo4%2BcJWKYVBG9YiAy0MY0NMe%2Fn9g8kB3wiEonDdF01ZwK7Nq6lAyYVHxlaC1UF57%2FQw7H5zQFu%2FAK2i32eFJmWZbiz67RoBoq8agbiTxYtpeg%2F3ed2dxb8kscyeLk936%2B%2FX3yaHWRAJ6uhPGnxhX63k%2FAVn5tlMqXx3XknIPam1k3hPe1UER16T9Asr1S1JxW5sSJG%2FbJV%2BcOypzirvHGqyJ0W4lInwyHZxy6OhTNFidLkLTLzADFtcQb6XV7%2BAA658EeCPf8uIHKT9kPH%2BaNOnPdiyP7KUSCGZMsId%2FGSYYVHEamK2YVnT4%2FgRFYUwxRrBVHOnnl%2Bg8JMwM%2BxaNSW2AxVwnmv%2BYQqDTlMG4Id071heYLQhNXtLVIDgz8Mw1XohK2Q%2FziDblXhS5NJy%2F2o2pJIoLSEA%2FT0zFPo6ABGvUOKljkAkmnirviQKZAS8ArFWBch4i%2FDe2rtYoLwr0slOatGln2dPpT%2FlQuoYMAthdQPDK8xv8Cg8J7HcMuStttXRZBwh%2BE0zH9Z61WXMXszM9xrU%2Fwaf2MbkcxUyI6MNCI%2FL0GOqUB5JpZC29Qvpy1lx%2B39z6IAfh6EtSCQ9DRTEh4KXAEqiquKZQ7IAE95iWK%2B%2FaQFZK01xtvqAa22o0SqYCKNQYTdg2MXiaWYJUU7LybRcnNI1B%2BqKDmPX9xtNA3AKWWZYqQVbDyBe2vem41i2V5qomQo3bcmPaGWOje4MgiioBsWZIcbWuG9fXdRew8UESevQTxuPfdjRdP7x5oxkTLXK%2FGfFsqmUHm&X-Amz-Signature=088d8755a23917c135905f47cff48a354672e5a67e5b68f59956d684b64550bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LVFCW6W%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIG0x8ox9J2zIeGmcKQD%2BG9Oc4ddMqgubn5Iu1X5wJblvAiEAwPTzoPQ%2F9q6WFNzBa%2FT8bxr2JeMeMPgvC8xA7HkK9TYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNtm4s%2BKvk%2FAUHwzGyrcA2jRbqjQoygMMQGajwAWhkITfhowI%2FP%2BFSWNH%2BKme3cK6xlRPIMcemzPT4GkmM9A61028iLxFSA7hQXoukOTo4%2BcJWKYVBG9YiAy0MY0NMe%2Fn9g8kB3wiEonDdF01ZwK7Nq6lAyYVHxlaC1UF57%2FQw7H5zQFu%2FAK2i32eFJmWZbiz67RoBoq8agbiTxYtpeg%2F3ed2dxb8kscyeLk936%2B%2FX3yaHWRAJ6uhPGnxhX63k%2FAVn5tlMqXx3XknIPam1k3hPe1UER16T9Asr1S1JxW5sSJG%2FbJV%2BcOypzirvHGqyJ0W4lInwyHZxy6OhTNFidLkLTLzADFtcQb6XV7%2BAA658EeCPf8uIHKT9kPH%2BaNOnPdiyP7KUSCGZMsId%2FGSYYVHEamK2YVnT4%2FgRFYUwxRrBVHOnnl%2Bg8JMwM%2BxaNSW2AxVwnmv%2BYQqDTlMG4Id071heYLQhNXtLVIDgz8Mw1XohK2Q%2FziDblXhS5NJy%2F2o2pJIoLSEA%2FT0zFPo6ABGvUOKljkAkmnirviQKZAS8ArFWBch4i%2FDe2rtYoLwr0slOatGln2dPpT%2FlQuoYMAthdQPDK8xv8Cg8J7HcMuStttXRZBwh%2BE0zH9Z61WXMXszM9xrU%2Fwaf2MbkcxUyI6MNCI%2FL0GOqUB5JpZC29Qvpy1lx%2B39z6IAfh6EtSCQ9DRTEh4KXAEqiquKZQ7IAE95iWK%2B%2FaQFZK01xtvqAa22o0SqYCKNQYTdg2MXiaWYJUU7LybRcnNI1B%2BqKDmPX9xtNA3AKWWZYqQVbDyBe2vem41i2V5qomQo3bcmPaGWOje4MgiioBsWZIcbWuG9fXdRew8UESevQTxuPfdjRdP7x5oxkTLXK%2FGfFsqmUHm&X-Amz-Signature=a776977c187672a9d2e9ab4b6ab743020b4fd1ad53ca36079ee2e2dbca39df1c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
