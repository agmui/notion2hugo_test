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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A46UAUS%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaUNhPEYOHkuqoqyOFS%2FonxTTOu4K7peTbDRVJpLjVzwIhAMXs1tuJagLBBm5ceOUJq9C0lV9%2BtR5AQowBg23%2Bi%2FG1KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynoW5YLlVXTOzH9Xwq3APAYpUosGWyUIubPKYA5g2acayxLvn%2FkCGzepRtMYdveyrcWEIIfu%2Bo6agj1F%2FuNYN9T3NgMSaK91LWhg6CTs6VGY4QAts3cCE5tXMB43gBZo2Yqt7%2B6P66M3pgyLnnBKxnBZtg4ybaQtXbDvROcTexXP2LluC%2FSu7QiULai%2F5gUsq0TgQtWAJhxIziwX3Z7vj9X%2F8tpmICjdNrQvpbPReCO1jOIRLt1jZRN3abd5H9YkTGRvrse%2By6aOqy9yT4lR2HhRnCYsWi4BNK4R9BuvVxa4nhRdCSeKZG2D2D2bvmyPTwEzNVMlqM8SbarUznYHZcB%2Bn4uRyMgmEH%2FwkcQqQayizEY6p7R3tFGNKawifTodliwTD5lwGOXIP301C%2FZ0zUugVxkwcyCEcQ93FXMTxfrtJl4gTGZfxWkI8sS8hYngLKVOFXi%2FYsnml12%2FHcNqkj7Rv3X%2FD8b8k7hwi3cjNb6eIOAbK7qNNz%2FR1fp1Ouvan6D2KGLU9QL1D0Y3isx5MiCzj6mzRSfjZtMkLu3oFkz2qkBNOJjVC0LGsWH0hdQkQcSdL2tyCflAq1jiWzlPyw9Vc0rzWJM8irY1%2BElbgH1bLicxHJ6DbgNAXzoyghsOZMFOokkvv5JsuRRjDM4OnIBjqkAU5N4lQxyZm70CAdfFRQh4UYr%2BROj6lvs9TENN49IQSxdoXW%2FLPeOVFkWXCVb1%2BvCMzyHSY7vW1mLEHXBFv9JHlwewqyNGA4IwSpz4og7Hc%2BGKdZulyHAMb1%2FZ%2BZp4MKwgcD02BSse9fzUQWgfq5cdWAGQOd3e%2Bbmkc79wNW%2Ff5TBKVDEkNtzmBwP7l%2BxS9FkA2PLpppXSgGF4YZ1UCFuTtp7vT1&X-Amz-Signature=3610c586ccfc5c09ca528e7063c63f15b0bbdce9347f7b7ab3f491cba43315a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A46UAUS%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaUNhPEYOHkuqoqyOFS%2FonxTTOu4K7peTbDRVJpLjVzwIhAMXs1tuJagLBBm5ceOUJq9C0lV9%2BtR5AQowBg23%2Bi%2FG1KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynoW5YLlVXTOzH9Xwq3APAYpUosGWyUIubPKYA5g2acayxLvn%2FkCGzepRtMYdveyrcWEIIfu%2Bo6agj1F%2FuNYN9T3NgMSaK91LWhg6CTs6VGY4QAts3cCE5tXMB43gBZo2Yqt7%2B6P66M3pgyLnnBKxnBZtg4ybaQtXbDvROcTexXP2LluC%2FSu7QiULai%2F5gUsq0TgQtWAJhxIziwX3Z7vj9X%2F8tpmICjdNrQvpbPReCO1jOIRLt1jZRN3abd5H9YkTGRvrse%2By6aOqy9yT4lR2HhRnCYsWi4BNK4R9BuvVxa4nhRdCSeKZG2D2D2bvmyPTwEzNVMlqM8SbarUznYHZcB%2Bn4uRyMgmEH%2FwkcQqQayizEY6p7R3tFGNKawifTodliwTD5lwGOXIP301C%2FZ0zUugVxkwcyCEcQ93FXMTxfrtJl4gTGZfxWkI8sS8hYngLKVOFXi%2FYsnml12%2FHcNqkj7Rv3X%2FD8b8k7hwi3cjNb6eIOAbK7qNNz%2FR1fp1Ouvan6D2KGLU9QL1D0Y3isx5MiCzj6mzRSfjZtMkLu3oFkz2qkBNOJjVC0LGsWH0hdQkQcSdL2tyCflAq1jiWzlPyw9Vc0rzWJM8irY1%2BElbgH1bLicxHJ6DbgNAXzoyghsOZMFOokkvv5JsuRRjDM4OnIBjqkAU5N4lQxyZm70CAdfFRQh4UYr%2BROj6lvs9TENN49IQSxdoXW%2FLPeOVFkWXCVb1%2BvCMzyHSY7vW1mLEHXBFv9JHlwewqyNGA4IwSpz4og7Hc%2BGKdZulyHAMb1%2FZ%2BZp4MKwgcD02BSse9fzUQWgfq5cdWAGQOd3e%2Bbmkc79wNW%2Ff5TBKVDEkNtzmBwP7l%2BxS9FkA2PLpppXSgGF4YZ1UCFuTtp7vT1&X-Amz-Signature=0ef7888af513078ea57082d5e022c01e94bd0c6d63ab5e69231953e6f6539994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A46UAUS%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaUNhPEYOHkuqoqyOFS%2FonxTTOu4K7peTbDRVJpLjVzwIhAMXs1tuJagLBBm5ceOUJq9C0lV9%2BtR5AQowBg23%2Bi%2FG1KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynoW5YLlVXTOzH9Xwq3APAYpUosGWyUIubPKYA5g2acayxLvn%2FkCGzepRtMYdveyrcWEIIfu%2Bo6agj1F%2FuNYN9T3NgMSaK91LWhg6CTs6VGY4QAts3cCE5tXMB43gBZo2Yqt7%2B6P66M3pgyLnnBKxnBZtg4ybaQtXbDvROcTexXP2LluC%2FSu7QiULai%2F5gUsq0TgQtWAJhxIziwX3Z7vj9X%2F8tpmICjdNrQvpbPReCO1jOIRLt1jZRN3abd5H9YkTGRvrse%2By6aOqy9yT4lR2HhRnCYsWi4BNK4R9BuvVxa4nhRdCSeKZG2D2D2bvmyPTwEzNVMlqM8SbarUznYHZcB%2Bn4uRyMgmEH%2FwkcQqQayizEY6p7R3tFGNKawifTodliwTD5lwGOXIP301C%2FZ0zUugVxkwcyCEcQ93FXMTxfrtJl4gTGZfxWkI8sS8hYngLKVOFXi%2FYsnml12%2FHcNqkj7Rv3X%2FD8b8k7hwi3cjNb6eIOAbK7qNNz%2FR1fp1Ouvan6D2KGLU9QL1D0Y3isx5MiCzj6mzRSfjZtMkLu3oFkz2qkBNOJjVC0LGsWH0hdQkQcSdL2tyCflAq1jiWzlPyw9Vc0rzWJM8irY1%2BElbgH1bLicxHJ6DbgNAXzoyghsOZMFOokkvv5JsuRRjDM4OnIBjqkAU5N4lQxyZm70CAdfFRQh4UYr%2BROj6lvs9TENN49IQSxdoXW%2FLPeOVFkWXCVb1%2BvCMzyHSY7vW1mLEHXBFv9JHlwewqyNGA4IwSpz4og7Hc%2BGKdZulyHAMb1%2FZ%2BZp4MKwgcD02BSse9fzUQWgfq5cdWAGQOd3e%2Bbmkc79wNW%2Ff5TBKVDEkNtzmBwP7l%2BxS9FkA2PLpppXSgGF4YZ1UCFuTtp7vT1&X-Amz-Signature=9fda41f2a1dcab02b47b53ed2f1a85e932dc7b09d9d60a52a9cc5bb0d3ecb485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A46UAUS%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaUNhPEYOHkuqoqyOFS%2FonxTTOu4K7peTbDRVJpLjVzwIhAMXs1tuJagLBBm5ceOUJq9C0lV9%2BtR5AQowBg23%2Bi%2FG1KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynoW5YLlVXTOzH9Xwq3APAYpUosGWyUIubPKYA5g2acayxLvn%2FkCGzepRtMYdveyrcWEIIfu%2Bo6agj1F%2FuNYN9T3NgMSaK91LWhg6CTs6VGY4QAts3cCE5tXMB43gBZo2Yqt7%2B6P66M3pgyLnnBKxnBZtg4ybaQtXbDvROcTexXP2LluC%2FSu7QiULai%2F5gUsq0TgQtWAJhxIziwX3Z7vj9X%2F8tpmICjdNrQvpbPReCO1jOIRLt1jZRN3abd5H9YkTGRvrse%2By6aOqy9yT4lR2HhRnCYsWi4BNK4R9BuvVxa4nhRdCSeKZG2D2D2bvmyPTwEzNVMlqM8SbarUznYHZcB%2Bn4uRyMgmEH%2FwkcQqQayizEY6p7R3tFGNKawifTodliwTD5lwGOXIP301C%2FZ0zUugVxkwcyCEcQ93FXMTxfrtJl4gTGZfxWkI8sS8hYngLKVOFXi%2FYsnml12%2FHcNqkj7Rv3X%2FD8b8k7hwi3cjNb6eIOAbK7qNNz%2FR1fp1Ouvan6D2KGLU9QL1D0Y3isx5MiCzj6mzRSfjZtMkLu3oFkz2qkBNOJjVC0LGsWH0hdQkQcSdL2tyCflAq1jiWzlPyw9Vc0rzWJM8irY1%2BElbgH1bLicxHJ6DbgNAXzoyghsOZMFOokkvv5JsuRRjDM4OnIBjqkAU5N4lQxyZm70CAdfFRQh4UYr%2BROj6lvs9TENN49IQSxdoXW%2FLPeOVFkWXCVb1%2BvCMzyHSY7vW1mLEHXBFv9JHlwewqyNGA4IwSpz4og7Hc%2BGKdZulyHAMb1%2FZ%2BZp4MKwgcD02BSse9fzUQWgfq5cdWAGQOd3e%2Bbmkc79wNW%2Ff5TBKVDEkNtzmBwP7l%2BxS9FkA2PLpppXSgGF4YZ1UCFuTtp7vT1&X-Amz-Signature=cf46aa62938ee9dc6b282d15d8ddddfa9275e0ddc7d45e00d1b6353ed608ec58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A46UAUS%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaUNhPEYOHkuqoqyOFS%2FonxTTOu4K7peTbDRVJpLjVzwIhAMXs1tuJagLBBm5ceOUJq9C0lV9%2BtR5AQowBg23%2Bi%2FG1KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynoW5YLlVXTOzH9Xwq3APAYpUosGWyUIubPKYA5g2acayxLvn%2FkCGzepRtMYdveyrcWEIIfu%2Bo6agj1F%2FuNYN9T3NgMSaK91LWhg6CTs6VGY4QAts3cCE5tXMB43gBZo2Yqt7%2B6P66M3pgyLnnBKxnBZtg4ybaQtXbDvROcTexXP2LluC%2FSu7QiULai%2F5gUsq0TgQtWAJhxIziwX3Z7vj9X%2F8tpmICjdNrQvpbPReCO1jOIRLt1jZRN3abd5H9YkTGRvrse%2By6aOqy9yT4lR2HhRnCYsWi4BNK4R9BuvVxa4nhRdCSeKZG2D2D2bvmyPTwEzNVMlqM8SbarUznYHZcB%2Bn4uRyMgmEH%2FwkcQqQayizEY6p7R3tFGNKawifTodliwTD5lwGOXIP301C%2FZ0zUugVxkwcyCEcQ93FXMTxfrtJl4gTGZfxWkI8sS8hYngLKVOFXi%2FYsnml12%2FHcNqkj7Rv3X%2FD8b8k7hwi3cjNb6eIOAbK7qNNz%2FR1fp1Ouvan6D2KGLU9QL1D0Y3isx5MiCzj6mzRSfjZtMkLu3oFkz2qkBNOJjVC0LGsWH0hdQkQcSdL2tyCflAq1jiWzlPyw9Vc0rzWJM8irY1%2BElbgH1bLicxHJ6DbgNAXzoyghsOZMFOokkvv5JsuRRjDM4OnIBjqkAU5N4lQxyZm70CAdfFRQh4UYr%2BROj6lvs9TENN49IQSxdoXW%2FLPeOVFkWXCVb1%2BvCMzyHSY7vW1mLEHXBFv9JHlwewqyNGA4IwSpz4og7Hc%2BGKdZulyHAMb1%2FZ%2BZp4MKwgcD02BSse9fzUQWgfq5cdWAGQOd3e%2Bbmkc79wNW%2Ff5TBKVDEkNtzmBwP7l%2BxS9FkA2PLpppXSgGF4YZ1UCFuTtp7vT1&X-Amz-Signature=270df5970eded13e8aedc96d2d500760e636eb334e304230cc2fabe746d78ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A46UAUS%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaUNhPEYOHkuqoqyOFS%2FonxTTOu4K7peTbDRVJpLjVzwIhAMXs1tuJagLBBm5ceOUJq9C0lV9%2BtR5AQowBg23%2Bi%2FG1KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynoW5YLlVXTOzH9Xwq3APAYpUosGWyUIubPKYA5g2acayxLvn%2FkCGzepRtMYdveyrcWEIIfu%2Bo6agj1F%2FuNYN9T3NgMSaK91LWhg6CTs6VGY4QAts3cCE5tXMB43gBZo2Yqt7%2B6P66M3pgyLnnBKxnBZtg4ybaQtXbDvROcTexXP2LluC%2FSu7QiULai%2F5gUsq0TgQtWAJhxIziwX3Z7vj9X%2F8tpmICjdNrQvpbPReCO1jOIRLt1jZRN3abd5H9YkTGRvrse%2By6aOqy9yT4lR2HhRnCYsWi4BNK4R9BuvVxa4nhRdCSeKZG2D2D2bvmyPTwEzNVMlqM8SbarUznYHZcB%2Bn4uRyMgmEH%2FwkcQqQayizEY6p7R3tFGNKawifTodliwTD5lwGOXIP301C%2FZ0zUugVxkwcyCEcQ93FXMTxfrtJl4gTGZfxWkI8sS8hYngLKVOFXi%2FYsnml12%2FHcNqkj7Rv3X%2FD8b8k7hwi3cjNb6eIOAbK7qNNz%2FR1fp1Ouvan6D2KGLU9QL1D0Y3isx5MiCzj6mzRSfjZtMkLu3oFkz2qkBNOJjVC0LGsWH0hdQkQcSdL2tyCflAq1jiWzlPyw9Vc0rzWJM8irY1%2BElbgH1bLicxHJ6DbgNAXzoyghsOZMFOokkvv5JsuRRjDM4OnIBjqkAU5N4lQxyZm70CAdfFRQh4UYr%2BROj6lvs9TENN49IQSxdoXW%2FLPeOVFkWXCVb1%2BvCMzyHSY7vW1mLEHXBFv9JHlwewqyNGA4IwSpz4og7Hc%2BGKdZulyHAMb1%2FZ%2BZp4MKwgcD02BSse9fzUQWgfq5cdWAGQOd3e%2Bbmkc79wNW%2Ff5TBKVDEkNtzmBwP7l%2BxS9FkA2PLpppXSgGF4YZ1UCFuTtp7vT1&X-Amz-Signature=c2ed0ce65be83a19c4c5142db7ec6d8afd674b380af8831ce4368a4b0f95dc15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A46UAUS%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaUNhPEYOHkuqoqyOFS%2FonxTTOu4K7peTbDRVJpLjVzwIhAMXs1tuJagLBBm5ceOUJq9C0lV9%2BtR5AQowBg23%2Bi%2FG1KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynoW5YLlVXTOzH9Xwq3APAYpUosGWyUIubPKYA5g2acayxLvn%2FkCGzepRtMYdveyrcWEIIfu%2Bo6agj1F%2FuNYN9T3NgMSaK91LWhg6CTs6VGY4QAts3cCE5tXMB43gBZo2Yqt7%2B6P66M3pgyLnnBKxnBZtg4ybaQtXbDvROcTexXP2LluC%2FSu7QiULai%2F5gUsq0TgQtWAJhxIziwX3Z7vj9X%2F8tpmICjdNrQvpbPReCO1jOIRLt1jZRN3abd5H9YkTGRvrse%2By6aOqy9yT4lR2HhRnCYsWi4BNK4R9BuvVxa4nhRdCSeKZG2D2D2bvmyPTwEzNVMlqM8SbarUznYHZcB%2Bn4uRyMgmEH%2FwkcQqQayizEY6p7R3tFGNKawifTodliwTD5lwGOXIP301C%2FZ0zUugVxkwcyCEcQ93FXMTxfrtJl4gTGZfxWkI8sS8hYngLKVOFXi%2FYsnml12%2FHcNqkj7Rv3X%2FD8b8k7hwi3cjNb6eIOAbK7qNNz%2FR1fp1Ouvan6D2KGLU9QL1D0Y3isx5MiCzj6mzRSfjZtMkLu3oFkz2qkBNOJjVC0LGsWH0hdQkQcSdL2tyCflAq1jiWzlPyw9Vc0rzWJM8irY1%2BElbgH1bLicxHJ6DbgNAXzoyghsOZMFOokkvv5JsuRRjDM4OnIBjqkAU5N4lQxyZm70CAdfFRQh4UYr%2BROj6lvs9TENN49IQSxdoXW%2FLPeOVFkWXCVb1%2BvCMzyHSY7vW1mLEHXBFv9JHlwewqyNGA4IwSpz4og7Hc%2BGKdZulyHAMb1%2FZ%2BZp4MKwgcD02BSse9fzUQWgfq5cdWAGQOd3e%2Bbmkc79wNW%2Ff5TBKVDEkNtzmBwP7l%2BxS9FkA2PLpppXSgGF4YZ1UCFuTtp7vT1&X-Amz-Signature=654c83cf8bfccfe3b3bd15121c6d32f5ab6d0dc62bf8ee0256a6b870dd7a7ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A46UAUS%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaUNhPEYOHkuqoqyOFS%2FonxTTOu4K7peTbDRVJpLjVzwIhAMXs1tuJagLBBm5ceOUJq9C0lV9%2BtR5AQowBg23%2Bi%2FG1KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynoW5YLlVXTOzH9Xwq3APAYpUosGWyUIubPKYA5g2acayxLvn%2FkCGzepRtMYdveyrcWEIIfu%2Bo6agj1F%2FuNYN9T3NgMSaK91LWhg6CTs6VGY4QAts3cCE5tXMB43gBZo2Yqt7%2B6P66M3pgyLnnBKxnBZtg4ybaQtXbDvROcTexXP2LluC%2FSu7QiULai%2F5gUsq0TgQtWAJhxIziwX3Z7vj9X%2F8tpmICjdNrQvpbPReCO1jOIRLt1jZRN3abd5H9YkTGRvrse%2By6aOqy9yT4lR2HhRnCYsWi4BNK4R9BuvVxa4nhRdCSeKZG2D2D2bvmyPTwEzNVMlqM8SbarUznYHZcB%2Bn4uRyMgmEH%2FwkcQqQayizEY6p7R3tFGNKawifTodliwTD5lwGOXIP301C%2FZ0zUugVxkwcyCEcQ93FXMTxfrtJl4gTGZfxWkI8sS8hYngLKVOFXi%2FYsnml12%2FHcNqkj7Rv3X%2FD8b8k7hwi3cjNb6eIOAbK7qNNz%2FR1fp1Ouvan6D2KGLU9QL1D0Y3isx5MiCzj6mzRSfjZtMkLu3oFkz2qkBNOJjVC0LGsWH0hdQkQcSdL2tyCflAq1jiWzlPyw9Vc0rzWJM8irY1%2BElbgH1bLicxHJ6DbgNAXzoyghsOZMFOokkvv5JsuRRjDM4OnIBjqkAU5N4lQxyZm70CAdfFRQh4UYr%2BROj6lvs9TENN49IQSxdoXW%2FLPeOVFkWXCVb1%2BvCMzyHSY7vW1mLEHXBFv9JHlwewqyNGA4IwSpz4og7Hc%2BGKdZulyHAMb1%2FZ%2BZp4MKwgcD02BSse9fzUQWgfq5cdWAGQOd3e%2Bbmkc79wNW%2Ff5TBKVDEkNtzmBwP7l%2BxS9FkA2PLpppXSgGF4YZ1UCFuTtp7vT1&X-Amz-Signature=86f7e456a317c49050776da60bb2754b8180c16bdd8bde279fdc3fce036837cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
