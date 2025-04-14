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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LIZ63DZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBKocgj%2FwL1bIjXq%2BuhKfRsH%2FPOWbQjo0bCj4BcM%2FyBAiBvBnmb11zsH2EfUU98yv%2F051Wn9cfc8VklXJ5UW5O6%2Fir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMpKeYSlm3kyQoA%2FfSKtwDSdWx6nSnE75IcMKysFmFQ%2BoEmfZzj9hTbzTncmi1WhEZMoOg7nGpd%2FWJw1xPwIwi%2BYX00vA4nSn6ZVV0dDmw1kXkoNeZPzQe%2FtM9ZBRDTWWNhqbjkWfIy0fM%2B2%2BDl6GFgjmCkUy3KrHyEUqk1ZNW6vCTmyF5R9LI4Sy0DdvSubgEqT0KfC9zij70MmYlBeQYDuNIKExuAvaRKdHejd5kIRBVFD9QkuuOTRo9ULmLx4KvXuqLRF8BqeM%2FB1uKyxF%2FkaGmejP9SlU844zBZdtuBVXKgJ1EFD159WK%2BPFib4ZtIeDX2xYN2d5ivpoRnvykVBromqQVtxEwvFGtasC0d5Qo6nYwlx%2BAi74XWTZDNb2CzdLWOCmyBUjl1XuDV5lBLlh1ssSfVLLKAC2X00nXvhkUgZ4zHo%2B3MVAAmHUTyQNPptB4C4FGnHV9Xc7WRxMlgc6XwtP6kM4CSolrfOUGG6EkM4Iyl2JYTEaomkiGN%2FI6lhHlQGcsFQOmTRYnvigagCmUva%2B2%2FhDgEAbIcQWgstzTn7NIEreUMrSxMcQVFjMGg2s14Uo6FgUEi%2BvQ%2Fm2EkD9GaEyyioklxLQzRPRfUTz1HeoqtfCIyBpJly8RUcRHMeo1SKJyULJIKbQ0wq6bzvwY6pgF%2Bu%2BwhDfbjuqEzni4a5t5a%2ByL2%2BWBHePGnplYC2UUzMJhyfX23QqMANQjOn931tQ%2BQbfpM0Jhvt9zaW45TC%2B1JP7iE3AzPyG4rHo7SfDIFyBStdhxstUejwnFtiA%2B%2FpKwqcgwqDRXWT4hwn5FauSrYynnbsZT%2Bn95B6uoPpMva5IMLPbkyXiVTmX2Hkinn5trgX68BLuBTxVpl%2BsysdSOX0Qf2Eble&X-Amz-Signature=7baf136147cea90759c7355288ae75978241c8a0c4f2ba788855952fae8c784a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LIZ63DZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBKocgj%2FwL1bIjXq%2BuhKfRsH%2FPOWbQjo0bCj4BcM%2FyBAiBvBnmb11zsH2EfUU98yv%2F051Wn9cfc8VklXJ5UW5O6%2Fir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMpKeYSlm3kyQoA%2FfSKtwDSdWx6nSnE75IcMKysFmFQ%2BoEmfZzj9hTbzTncmi1WhEZMoOg7nGpd%2FWJw1xPwIwi%2BYX00vA4nSn6ZVV0dDmw1kXkoNeZPzQe%2FtM9ZBRDTWWNhqbjkWfIy0fM%2B2%2BDl6GFgjmCkUy3KrHyEUqk1ZNW6vCTmyF5R9LI4Sy0DdvSubgEqT0KfC9zij70MmYlBeQYDuNIKExuAvaRKdHejd5kIRBVFD9QkuuOTRo9ULmLx4KvXuqLRF8BqeM%2FB1uKyxF%2FkaGmejP9SlU844zBZdtuBVXKgJ1EFD159WK%2BPFib4ZtIeDX2xYN2d5ivpoRnvykVBromqQVtxEwvFGtasC0d5Qo6nYwlx%2BAi74XWTZDNb2CzdLWOCmyBUjl1XuDV5lBLlh1ssSfVLLKAC2X00nXvhkUgZ4zHo%2B3MVAAmHUTyQNPptB4C4FGnHV9Xc7WRxMlgc6XwtP6kM4CSolrfOUGG6EkM4Iyl2JYTEaomkiGN%2FI6lhHlQGcsFQOmTRYnvigagCmUva%2B2%2FhDgEAbIcQWgstzTn7NIEreUMrSxMcQVFjMGg2s14Uo6FgUEi%2BvQ%2Fm2EkD9GaEyyioklxLQzRPRfUTz1HeoqtfCIyBpJly8RUcRHMeo1SKJyULJIKbQ0wq6bzvwY6pgF%2Bu%2BwhDfbjuqEzni4a5t5a%2ByL2%2BWBHePGnplYC2UUzMJhyfX23QqMANQjOn931tQ%2BQbfpM0Jhvt9zaW45TC%2B1JP7iE3AzPyG4rHo7SfDIFyBStdhxstUejwnFtiA%2B%2FpKwqcgwqDRXWT4hwn5FauSrYynnbsZT%2Bn95B6uoPpMva5IMLPbkyXiVTmX2Hkinn5trgX68BLuBTxVpl%2BsysdSOX0Qf2Eble&X-Amz-Signature=49c5db067e7f5a504f516a89cf6eb127d77cd8e13a2b1195daf0e212c55f4e42&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LIZ63DZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBKocgj%2FwL1bIjXq%2BuhKfRsH%2FPOWbQjo0bCj4BcM%2FyBAiBvBnmb11zsH2EfUU98yv%2F051Wn9cfc8VklXJ5UW5O6%2Fir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMpKeYSlm3kyQoA%2FfSKtwDSdWx6nSnE75IcMKysFmFQ%2BoEmfZzj9hTbzTncmi1WhEZMoOg7nGpd%2FWJw1xPwIwi%2BYX00vA4nSn6ZVV0dDmw1kXkoNeZPzQe%2FtM9ZBRDTWWNhqbjkWfIy0fM%2B2%2BDl6GFgjmCkUy3KrHyEUqk1ZNW6vCTmyF5R9LI4Sy0DdvSubgEqT0KfC9zij70MmYlBeQYDuNIKExuAvaRKdHejd5kIRBVFD9QkuuOTRo9ULmLx4KvXuqLRF8BqeM%2FB1uKyxF%2FkaGmejP9SlU844zBZdtuBVXKgJ1EFD159WK%2BPFib4ZtIeDX2xYN2d5ivpoRnvykVBromqQVtxEwvFGtasC0d5Qo6nYwlx%2BAi74XWTZDNb2CzdLWOCmyBUjl1XuDV5lBLlh1ssSfVLLKAC2X00nXvhkUgZ4zHo%2B3MVAAmHUTyQNPptB4C4FGnHV9Xc7WRxMlgc6XwtP6kM4CSolrfOUGG6EkM4Iyl2JYTEaomkiGN%2FI6lhHlQGcsFQOmTRYnvigagCmUva%2B2%2FhDgEAbIcQWgstzTn7NIEreUMrSxMcQVFjMGg2s14Uo6FgUEi%2BvQ%2Fm2EkD9GaEyyioklxLQzRPRfUTz1HeoqtfCIyBpJly8RUcRHMeo1SKJyULJIKbQ0wq6bzvwY6pgF%2Bu%2BwhDfbjuqEzni4a5t5a%2ByL2%2BWBHePGnplYC2UUzMJhyfX23QqMANQjOn931tQ%2BQbfpM0Jhvt9zaW45TC%2B1JP7iE3AzPyG4rHo7SfDIFyBStdhxstUejwnFtiA%2B%2FpKwqcgwqDRXWT4hwn5FauSrYynnbsZT%2Bn95B6uoPpMva5IMLPbkyXiVTmX2Hkinn5trgX68BLuBTxVpl%2BsysdSOX0Qf2Eble&X-Amz-Signature=7f6fb90cef98987f01687297afff74910a710092298d8418ba95c5757e13d1e0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LIZ63DZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBKocgj%2FwL1bIjXq%2BuhKfRsH%2FPOWbQjo0bCj4BcM%2FyBAiBvBnmb11zsH2EfUU98yv%2F051Wn9cfc8VklXJ5UW5O6%2Fir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMpKeYSlm3kyQoA%2FfSKtwDSdWx6nSnE75IcMKysFmFQ%2BoEmfZzj9hTbzTncmi1WhEZMoOg7nGpd%2FWJw1xPwIwi%2BYX00vA4nSn6ZVV0dDmw1kXkoNeZPzQe%2FtM9ZBRDTWWNhqbjkWfIy0fM%2B2%2BDl6GFgjmCkUy3KrHyEUqk1ZNW6vCTmyF5R9LI4Sy0DdvSubgEqT0KfC9zij70MmYlBeQYDuNIKExuAvaRKdHejd5kIRBVFD9QkuuOTRo9ULmLx4KvXuqLRF8BqeM%2FB1uKyxF%2FkaGmejP9SlU844zBZdtuBVXKgJ1EFD159WK%2BPFib4ZtIeDX2xYN2d5ivpoRnvykVBromqQVtxEwvFGtasC0d5Qo6nYwlx%2BAi74XWTZDNb2CzdLWOCmyBUjl1XuDV5lBLlh1ssSfVLLKAC2X00nXvhkUgZ4zHo%2B3MVAAmHUTyQNPptB4C4FGnHV9Xc7WRxMlgc6XwtP6kM4CSolrfOUGG6EkM4Iyl2JYTEaomkiGN%2FI6lhHlQGcsFQOmTRYnvigagCmUva%2B2%2FhDgEAbIcQWgstzTn7NIEreUMrSxMcQVFjMGg2s14Uo6FgUEi%2BvQ%2Fm2EkD9GaEyyioklxLQzRPRfUTz1HeoqtfCIyBpJly8RUcRHMeo1SKJyULJIKbQ0wq6bzvwY6pgF%2Bu%2BwhDfbjuqEzni4a5t5a%2ByL2%2BWBHePGnplYC2UUzMJhyfX23QqMANQjOn931tQ%2BQbfpM0Jhvt9zaW45TC%2B1JP7iE3AzPyG4rHo7SfDIFyBStdhxstUejwnFtiA%2B%2FpKwqcgwqDRXWT4hwn5FauSrYynnbsZT%2Bn95B6uoPpMva5IMLPbkyXiVTmX2Hkinn5trgX68BLuBTxVpl%2BsysdSOX0Qf2Eble&X-Amz-Signature=85096a32cf07c63fa8839ab9aff85cd042f739e2fa06a8589c45845c4e0f93b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LIZ63DZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBKocgj%2FwL1bIjXq%2BuhKfRsH%2FPOWbQjo0bCj4BcM%2FyBAiBvBnmb11zsH2EfUU98yv%2F051Wn9cfc8VklXJ5UW5O6%2Fir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMpKeYSlm3kyQoA%2FfSKtwDSdWx6nSnE75IcMKysFmFQ%2BoEmfZzj9hTbzTncmi1WhEZMoOg7nGpd%2FWJw1xPwIwi%2BYX00vA4nSn6ZVV0dDmw1kXkoNeZPzQe%2FtM9ZBRDTWWNhqbjkWfIy0fM%2B2%2BDl6GFgjmCkUy3KrHyEUqk1ZNW6vCTmyF5R9LI4Sy0DdvSubgEqT0KfC9zij70MmYlBeQYDuNIKExuAvaRKdHejd5kIRBVFD9QkuuOTRo9ULmLx4KvXuqLRF8BqeM%2FB1uKyxF%2FkaGmejP9SlU844zBZdtuBVXKgJ1EFD159WK%2BPFib4ZtIeDX2xYN2d5ivpoRnvykVBromqQVtxEwvFGtasC0d5Qo6nYwlx%2BAi74XWTZDNb2CzdLWOCmyBUjl1XuDV5lBLlh1ssSfVLLKAC2X00nXvhkUgZ4zHo%2B3MVAAmHUTyQNPptB4C4FGnHV9Xc7WRxMlgc6XwtP6kM4CSolrfOUGG6EkM4Iyl2JYTEaomkiGN%2FI6lhHlQGcsFQOmTRYnvigagCmUva%2B2%2FhDgEAbIcQWgstzTn7NIEreUMrSxMcQVFjMGg2s14Uo6FgUEi%2BvQ%2Fm2EkD9GaEyyioklxLQzRPRfUTz1HeoqtfCIyBpJly8RUcRHMeo1SKJyULJIKbQ0wq6bzvwY6pgF%2Bu%2BwhDfbjuqEzni4a5t5a%2ByL2%2BWBHePGnplYC2UUzMJhyfX23QqMANQjOn931tQ%2BQbfpM0Jhvt9zaW45TC%2B1JP7iE3AzPyG4rHo7SfDIFyBStdhxstUejwnFtiA%2B%2FpKwqcgwqDRXWT4hwn5FauSrYynnbsZT%2Bn95B6uoPpMva5IMLPbkyXiVTmX2Hkinn5trgX68BLuBTxVpl%2BsysdSOX0Qf2Eble&X-Amz-Signature=b90f9557d4a8e9f6a6b7cd2bd23e6b7393a35e3af8dde4504afe21ccf64452c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LIZ63DZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBKocgj%2FwL1bIjXq%2BuhKfRsH%2FPOWbQjo0bCj4BcM%2FyBAiBvBnmb11zsH2EfUU98yv%2F051Wn9cfc8VklXJ5UW5O6%2Fir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMpKeYSlm3kyQoA%2FfSKtwDSdWx6nSnE75IcMKysFmFQ%2BoEmfZzj9hTbzTncmi1WhEZMoOg7nGpd%2FWJw1xPwIwi%2BYX00vA4nSn6ZVV0dDmw1kXkoNeZPzQe%2FtM9ZBRDTWWNhqbjkWfIy0fM%2B2%2BDl6GFgjmCkUy3KrHyEUqk1ZNW6vCTmyF5R9LI4Sy0DdvSubgEqT0KfC9zij70MmYlBeQYDuNIKExuAvaRKdHejd5kIRBVFD9QkuuOTRo9ULmLx4KvXuqLRF8BqeM%2FB1uKyxF%2FkaGmejP9SlU844zBZdtuBVXKgJ1EFD159WK%2BPFib4ZtIeDX2xYN2d5ivpoRnvykVBromqQVtxEwvFGtasC0d5Qo6nYwlx%2BAi74XWTZDNb2CzdLWOCmyBUjl1XuDV5lBLlh1ssSfVLLKAC2X00nXvhkUgZ4zHo%2B3MVAAmHUTyQNPptB4C4FGnHV9Xc7WRxMlgc6XwtP6kM4CSolrfOUGG6EkM4Iyl2JYTEaomkiGN%2FI6lhHlQGcsFQOmTRYnvigagCmUva%2B2%2FhDgEAbIcQWgstzTn7NIEreUMrSxMcQVFjMGg2s14Uo6FgUEi%2BvQ%2Fm2EkD9GaEyyioklxLQzRPRfUTz1HeoqtfCIyBpJly8RUcRHMeo1SKJyULJIKbQ0wq6bzvwY6pgF%2Bu%2BwhDfbjuqEzni4a5t5a%2ByL2%2BWBHePGnplYC2UUzMJhyfX23QqMANQjOn931tQ%2BQbfpM0Jhvt9zaW45TC%2B1JP7iE3AzPyG4rHo7SfDIFyBStdhxstUejwnFtiA%2B%2FpKwqcgwqDRXWT4hwn5FauSrYynnbsZT%2Bn95B6uoPpMva5IMLPbkyXiVTmX2Hkinn5trgX68BLuBTxVpl%2BsysdSOX0Qf2Eble&X-Amz-Signature=17d5ec324040b3a17712887c3ea384180ba0ac62323d87828b4a98d2f2681a41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LIZ63DZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBKocgj%2FwL1bIjXq%2BuhKfRsH%2FPOWbQjo0bCj4BcM%2FyBAiBvBnmb11zsH2EfUU98yv%2F051Wn9cfc8VklXJ5UW5O6%2Fir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMpKeYSlm3kyQoA%2FfSKtwDSdWx6nSnE75IcMKysFmFQ%2BoEmfZzj9hTbzTncmi1WhEZMoOg7nGpd%2FWJw1xPwIwi%2BYX00vA4nSn6ZVV0dDmw1kXkoNeZPzQe%2FtM9ZBRDTWWNhqbjkWfIy0fM%2B2%2BDl6GFgjmCkUy3KrHyEUqk1ZNW6vCTmyF5R9LI4Sy0DdvSubgEqT0KfC9zij70MmYlBeQYDuNIKExuAvaRKdHejd5kIRBVFD9QkuuOTRo9ULmLx4KvXuqLRF8BqeM%2FB1uKyxF%2FkaGmejP9SlU844zBZdtuBVXKgJ1EFD159WK%2BPFib4ZtIeDX2xYN2d5ivpoRnvykVBromqQVtxEwvFGtasC0d5Qo6nYwlx%2BAi74XWTZDNb2CzdLWOCmyBUjl1XuDV5lBLlh1ssSfVLLKAC2X00nXvhkUgZ4zHo%2B3MVAAmHUTyQNPptB4C4FGnHV9Xc7WRxMlgc6XwtP6kM4CSolrfOUGG6EkM4Iyl2JYTEaomkiGN%2FI6lhHlQGcsFQOmTRYnvigagCmUva%2B2%2FhDgEAbIcQWgstzTn7NIEreUMrSxMcQVFjMGg2s14Uo6FgUEi%2BvQ%2Fm2EkD9GaEyyioklxLQzRPRfUTz1HeoqtfCIyBpJly8RUcRHMeo1SKJyULJIKbQ0wq6bzvwY6pgF%2Bu%2BwhDfbjuqEzni4a5t5a%2ByL2%2BWBHePGnplYC2UUzMJhyfX23QqMANQjOn931tQ%2BQbfpM0Jhvt9zaW45TC%2B1JP7iE3AzPyG4rHo7SfDIFyBStdhxstUejwnFtiA%2B%2FpKwqcgwqDRXWT4hwn5FauSrYynnbsZT%2Bn95B6uoPpMva5IMLPbkyXiVTmX2Hkinn5trgX68BLuBTxVpl%2BsysdSOX0Qf2Eble&X-Amz-Signature=8a2db65f03a4150100e56eed7be55c84f5b8d5a1d4db38e49e1cd1e753a6c81f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LIZ63DZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBKocgj%2FwL1bIjXq%2BuhKfRsH%2FPOWbQjo0bCj4BcM%2FyBAiBvBnmb11zsH2EfUU98yv%2F051Wn9cfc8VklXJ5UW5O6%2Fir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMpKeYSlm3kyQoA%2FfSKtwDSdWx6nSnE75IcMKysFmFQ%2BoEmfZzj9hTbzTncmi1WhEZMoOg7nGpd%2FWJw1xPwIwi%2BYX00vA4nSn6ZVV0dDmw1kXkoNeZPzQe%2FtM9ZBRDTWWNhqbjkWfIy0fM%2B2%2BDl6GFgjmCkUy3KrHyEUqk1ZNW6vCTmyF5R9LI4Sy0DdvSubgEqT0KfC9zij70MmYlBeQYDuNIKExuAvaRKdHejd5kIRBVFD9QkuuOTRo9ULmLx4KvXuqLRF8BqeM%2FB1uKyxF%2FkaGmejP9SlU844zBZdtuBVXKgJ1EFD159WK%2BPFib4ZtIeDX2xYN2d5ivpoRnvykVBromqQVtxEwvFGtasC0d5Qo6nYwlx%2BAi74XWTZDNb2CzdLWOCmyBUjl1XuDV5lBLlh1ssSfVLLKAC2X00nXvhkUgZ4zHo%2B3MVAAmHUTyQNPptB4C4FGnHV9Xc7WRxMlgc6XwtP6kM4CSolrfOUGG6EkM4Iyl2JYTEaomkiGN%2FI6lhHlQGcsFQOmTRYnvigagCmUva%2B2%2FhDgEAbIcQWgstzTn7NIEreUMrSxMcQVFjMGg2s14Uo6FgUEi%2BvQ%2Fm2EkD9GaEyyioklxLQzRPRfUTz1HeoqtfCIyBpJly8RUcRHMeo1SKJyULJIKbQ0wq6bzvwY6pgF%2Bu%2BwhDfbjuqEzni4a5t5a%2ByL2%2BWBHePGnplYC2UUzMJhyfX23QqMANQjOn931tQ%2BQbfpM0Jhvt9zaW45TC%2B1JP7iE3AzPyG4rHo7SfDIFyBStdhxstUejwnFtiA%2B%2FpKwqcgwqDRXWT4hwn5FauSrYynnbsZT%2Bn95B6uoPpMva5IMLPbkyXiVTmX2Hkinn5trgX68BLuBTxVpl%2BsysdSOX0Qf2Eble&X-Amz-Signature=235b3225a358d4a3735d8cb05f35fea0aef3c33f2ba32202d14c0b5d0c2e4a31&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
