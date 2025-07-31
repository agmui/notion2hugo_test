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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6WSTPE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3lTLZ1k9F9faUbk1BnDhqKTxI%2B2XSEGJv7fYTEf%2B2BAiAdj6X4BBZxKMq%2FKoYYp5NKeXP0XLk2%2BAqUmF2ZP0TUgiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmcp7i7Zz5tXcTKYzKtwDTUH7nQABDY9RFe4Ee%2BO1bV0%2FnjQjQe8Ec0tqytWc9XdmA%2BzrFSRk6AxxYNlEZUavvvTH8YZBtww5k87g5tCfJ5bsJat7tpo8sph%2Bl242CDvbnt1JNgQOiTB8ivtCvBu%2B0Rv6xicEE3pTWaKIorS8vSdH5DJ33YWAKYou1EqJqKdMkV%2BD0s%2FZwF1cWq5zl1lwMl%2F0PRl8QZCU0FbSbB4JnrEpoHnz2cle%2FEXYBanWD9VuQqvYsYhvmqfnJhMNRJG2bpf4sEcd9tf0dq6VJhyZlHmYdnIYHah7dnxT4PaJF1sr8XyyshJl67q7Odu5N3oZRxfOislEvvLmpWySUtNtlYgF9CSPfoGhZg%2FQdRTH%2BryZ0IBvGt87UYAgcSpZ%2BXOrruTXnY5qHTp7d%2BiKtf1bm%2F4Vaj%2BnDPguKUX2qwX1elw8uTAUY0m1q5omgfmeUmX4u8QExn60SHDHWf0og%2BKtqjco5RKm0enMpDoJ1UQL77H%2FxsPmZUk%2FNyyckoXEKzRFMjKNzizmVB2lYRsD4fjXfklJsZF26Ux0tS%2F3ZfyUk%2FSRQUE%2FFj%2FlNR%2BPUFlp5a%2F4GiyGfQcWIKcqgfrrMwhK4wtjrZqIfv9GZJbPT%2Bi69EO7BRt9vaSV%2Fu6xi7Ew7sqrxAY6pgFbkE%2BBhIA9Ym%2B1fXbgFVSoPf%2FJrip0eDlh6Hw6DkgFTSpnrU6OecOI2JsMP6jqT2wkFra%2BiYhBGXya4GMKo2gRoUwJp720oYRX3KkrMwnlQrUVSmFdSZt2iRL4euAts5yb45OairzGFIq%2FU%2FPBkzGUD%2Fq9Iac6AdYnN1PP%2B2VQORDph81pPN7FPxoz7k1NsJwU7BtyXrVQP%2FJZtAm9%2B48s7qWXkZCb&X-Amz-Signature=c9160ddba967f9191c6174a826206e59517dfd0d27b0cb70a101a482063e3878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6WSTPE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3lTLZ1k9F9faUbk1BnDhqKTxI%2B2XSEGJv7fYTEf%2B2BAiAdj6X4BBZxKMq%2FKoYYp5NKeXP0XLk2%2BAqUmF2ZP0TUgiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmcp7i7Zz5tXcTKYzKtwDTUH7nQABDY9RFe4Ee%2BO1bV0%2FnjQjQe8Ec0tqytWc9XdmA%2BzrFSRk6AxxYNlEZUavvvTH8YZBtww5k87g5tCfJ5bsJat7tpo8sph%2Bl242CDvbnt1JNgQOiTB8ivtCvBu%2B0Rv6xicEE3pTWaKIorS8vSdH5DJ33YWAKYou1EqJqKdMkV%2BD0s%2FZwF1cWq5zl1lwMl%2F0PRl8QZCU0FbSbB4JnrEpoHnz2cle%2FEXYBanWD9VuQqvYsYhvmqfnJhMNRJG2bpf4sEcd9tf0dq6VJhyZlHmYdnIYHah7dnxT4PaJF1sr8XyyshJl67q7Odu5N3oZRxfOislEvvLmpWySUtNtlYgF9CSPfoGhZg%2FQdRTH%2BryZ0IBvGt87UYAgcSpZ%2BXOrruTXnY5qHTp7d%2BiKtf1bm%2F4Vaj%2BnDPguKUX2qwX1elw8uTAUY0m1q5omgfmeUmX4u8QExn60SHDHWf0og%2BKtqjco5RKm0enMpDoJ1UQL77H%2FxsPmZUk%2FNyyckoXEKzRFMjKNzizmVB2lYRsD4fjXfklJsZF26Ux0tS%2F3ZfyUk%2FSRQUE%2FFj%2FlNR%2BPUFlp5a%2F4GiyGfQcWIKcqgfrrMwhK4wtjrZqIfv9GZJbPT%2Bi69EO7BRt9vaSV%2Fu6xi7Ew7sqrxAY6pgFbkE%2BBhIA9Ym%2B1fXbgFVSoPf%2FJrip0eDlh6Hw6DkgFTSpnrU6OecOI2JsMP6jqT2wkFra%2BiYhBGXya4GMKo2gRoUwJp720oYRX3KkrMwnlQrUVSmFdSZt2iRL4euAts5yb45OairzGFIq%2FU%2FPBkzGUD%2Fq9Iac6AdYnN1PP%2B2VQORDph81pPN7FPxoz7k1NsJwU7BtyXrVQP%2FJZtAm9%2B48s7qWXkZCb&X-Amz-Signature=59b1e1ba8e7c26c9a0fa7280f2a8dc8ccbf51f3696084df204ed78f93fdbde44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6WSTPE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3lTLZ1k9F9faUbk1BnDhqKTxI%2B2XSEGJv7fYTEf%2B2BAiAdj6X4BBZxKMq%2FKoYYp5NKeXP0XLk2%2BAqUmF2ZP0TUgiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmcp7i7Zz5tXcTKYzKtwDTUH7nQABDY9RFe4Ee%2BO1bV0%2FnjQjQe8Ec0tqytWc9XdmA%2BzrFSRk6AxxYNlEZUavvvTH8YZBtww5k87g5tCfJ5bsJat7tpo8sph%2Bl242CDvbnt1JNgQOiTB8ivtCvBu%2B0Rv6xicEE3pTWaKIorS8vSdH5DJ33YWAKYou1EqJqKdMkV%2BD0s%2FZwF1cWq5zl1lwMl%2F0PRl8QZCU0FbSbB4JnrEpoHnz2cle%2FEXYBanWD9VuQqvYsYhvmqfnJhMNRJG2bpf4sEcd9tf0dq6VJhyZlHmYdnIYHah7dnxT4PaJF1sr8XyyshJl67q7Odu5N3oZRxfOislEvvLmpWySUtNtlYgF9CSPfoGhZg%2FQdRTH%2BryZ0IBvGt87UYAgcSpZ%2BXOrruTXnY5qHTp7d%2BiKtf1bm%2F4Vaj%2BnDPguKUX2qwX1elw8uTAUY0m1q5omgfmeUmX4u8QExn60SHDHWf0og%2BKtqjco5RKm0enMpDoJ1UQL77H%2FxsPmZUk%2FNyyckoXEKzRFMjKNzizmVB2lYRsD4fjXfklJsZF26Ux0tS%2F3ZfyUk%2FSRQUE%2FFj%2FlNR%2BPUFlp5a%2F4GiyGfQcWIKcqgfrrMwhK4wtjrZqIfv9GZJbPT%2Bi69EO7BRt9vaSV%2Fu6xi7Ew7sqrxAY6pgFbkE%2BBhIA9Ym%2B1fXbgFVSoPf%2FJrip0eDlh6Hw6DkgFTSpnrU6OecOI2JsMP6jqT2wkFra%2BiYhBGXya4GMKo2gRoUwJp720oYRX3KkrMwnlQrUVSmFdSZt2iRL4euAts5yb45OairzGFIq%2FU%2FPBkzGUD%2Fq9Iac6AdYnN1PP%2B2VQORDph81pPN7FPxoz7k1NsJwU7BtyXrVQP%2FJZtAm9%2B48s7qWXkZCb&X-Amz-Signature=e8bb283fd9323e7bbde65fffb835a07094015556f0903cdcba39c4ff955f300e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6WSTPE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3lTLZ1k9F9faUbk1BnDhqKTxI%2B2XSEGJv7fYTEf%2B2BAiAdj6X4BBZxKMq%2FKoYYp5NKeXP0XLk2%2BAqUmF2ZP0TUgiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmcp7i7Zz5tXcTKYzKtwDTUH7nQABDY9RFe4Ee%2BO1bV0%2FnjQjQe8Ec0tqytWc9XdmA%2BzrFSRk6AxxYNlEZUavvvTH8YZBtww5k87g5tCfJ5bsJat7tpo8sph%2Bl242CDvbnt1JNgQOiTB8ivtCvBu%2B0Rv6xicEE3pTWaKIorS8vSdH5DJ33YWAKYou1EqJqKdMkV%2BD0s%2FZwF1cWq5zl1lwMl%2F0PRl8QZCU0FbSbB4JnrEpoHnz2cle%2FEXYBanWD9VuQqvYsYhvmqfnJhMNRJG2bpf4sEcd9tf0dq6VJhyZlHmYdnIYHah7dnxT4PaJF1sr8XyyshJl67q7Odu5N3oZRxfOislEvvLmpWySUtNtlYgF9CSPfoGhZg%2FQdRTH%2BryZ0IBvGt87UYAgcSpZ%2BXOrruTXnY5qHTp7d%2BiKtf1bm%2F4Vaj%2BnDPguKUX2qwX1elw8uTAUY0m1q5omgfmeUmX4u8QExn60SHDHWf0og%2BKtqjco5RKm0enMpDoJ1UQL77H%2FxsPmZUk%2FNyyckoXEKzRFMjKNzizmVB2lYRsD4fjXfklJsZF26Ux0tS%2F3ZfyUk%2FSRQUE%2FFj%2FlNR%2BPUFlp5a%2F4GiyGfQcWIKcqgfrrMwhK4wtjrZqIfv9GZJbPT%2Bi69EO7BRt9vaSV%2Fu6xi7Ew7sqrxAY6pgFbkE%2BBhIA9Ym%2B1fXbgFVSoPf%2FJrip0eDlh6Hw6DkgFTSpnrU6OecOI2JsMP6jqT2wkFra%2BiYhBGXya4GMKo2gRoUwJp720oYRX3KkrMwnlQrUVSmFdSZt2iRL4euAts5yb45OairzGFIq%2FU%2FPBkzGUD%2Fq9Iac6AdYnN1PP%2B2VQORDph81pPN7FPxoz7k1NsJwU7BtyXrVQP%2FJZtAm9%2B48s7qWXkZCb&X-Amz-Signature=17284b1078099e6cd8346de7bb0c804e9ebfac758a2813f019b7a7eeadfd4be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6WSTPE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3lTLZ1k9F9faUbk1BnDhqKTxI%2B2XSEGJv7fYTEf%2B2BAiAdj6X4BBZxKMq%2FKoYYp5NKeXP0XLk2%2BAqUmF2ZP0TUgiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmcp7i7Zz5tXcTKYzKtwDTUH7nQABDY9RFe4Ee%2BO1bV0%2FnjQjQe8Ec0tqytWc9XdmA%2BzrFSRk6AxxYNlEZUavvvTH8YZBtww5k87g5tCfJ5bsJat7tpo8sph%2Bl242CDvbnt1JNgQOiTB8ivtCvBu%2B0Rv6xicEE3pTWaKIorS8vSdH5DJ33YWAKYou1EqJqKdMkV%2BD0s%2FZwF1cWq5zl1lwMl%2F0PRl8QZCU0FbSbB4JnrEpoHnz2cle%2FEXYBanWD9VuQqvYsYhvmqfnJhMNRJG2bpf4sEcd9tf0dq6VJhyZlHmYdnIYHah7dnxT4PaJF1sr8XyyshJl67q7Odu5N3oZRxfOislEvvLmpWySUtNtlYgF9CSPfoGhZg%2FQdRTH%2BryZ0IBvGt87UYAgcSpZ%2BXOrruTXnY5qHTp7d%2BiKtf1bm%2F4Vaj%2BnDPguKUX2qwX1elw8uTAUY0m1q5omgfmeUmX4u8QExn60SHDHWf0og%2BKtqjco5RKm0enMpDoJ1UQL77H%2FxsPmZUk%2FNyyckoXEKzRFMjKNzizmVB2lYRsD4fjXfklJsZF26Ux0tS%2F3ZfyUk%2FSRQUE%2FFj%2FlNR%2BPUFlp5a%2F4GiyGfQcWIKcqgfrrMwhK4wtjrZqIfv9GZJbPT%2Bi69EO7BRt9vaSV%2Fu6xi7Ew7sqrxAY6pgFbkE%2BBhIA9Ym%2B1fXbgFVSoPf%2FJrip0eDlh6Hw6DkgFTSpnrU6OecOI2JsMP6jqT2wkFra%2BiYhBGXya4GMKo2gRoUwJp720oYRX3KkrMwnlQrUVSmFdSZt2iRL4euAts5yb45OairzGFIq%2FU%2FPBkzGUD%2Fq9Iac6AdYnN1PP%2B2VQORDph81pPN7FPxoz7k1NsJwU7BtyXrVQP%2FJZtAm9%2B48s7qWXkZCb&X-Amz-Signature=4995a04cf5a29f40c410d462d22fd82d9d21b0df9bcc80aa1e07b90ae1b5d908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6WSTPE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3lTLZ1k9F9faUbk1BnDhqKTxI%2B2XSEGJv7fYTEf%2B2BAiAdj6X4BBZxKMq%2FKoYYp5NKeXP0XLk2%2BAqUmF2ZP0TUgiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmcp7i7Zz5tXcTKYzKtwDTUH7nQABDY9RFe4Ee%2BO1bV0%2FnjQjQe8Ec0tqytWc9XdmA%2BzrFSRk6AxxYNlEZUavvvTH8YZBtww5k87g5tCfJ5bsJat7tpo8sph%2Bl242CDvbnt1JNgQOiTB8ivtCvBu%2B0Rv6xicEE3pTWaKIorS8vSdH5DJ33YWAKYou1EqJqKdMkV%2BD0s%2FZwF1cWq5zl1lwMl%2F0PRl8QZCU0FbSbB4JnrEpoHnz2cle%2FEXYBanWD9VuQqvYsYhvmqfnJhMNRJG2bpf4sEcd9tf0dq6VJhyZlHmYdnIYHah7dnxT4PaJF1sr8XyyshJl67q7Odu5N3oZRxfOislEvvLmpWySUtNtlYgF9CSPfoGhZg%2FQdRTH%2BryZ0IBvGt87UYAgcSpZ%2BXOrruTXnY5qHTp7d%2BiKtf1bm%2F4Vaj%2BnDPguKUX2qwX1elw8uTAUY0m1q5omgfmeUmX4u8QExn60SHDHWf0og%2BKtqjco5RKm0enMpDoJ1UQL77H%2FxsPmZUk%2FNyyckoXEKzRFMjKNzizmVB2lYRsD4fjXfklJsZF26Ux0tS%2F3ZfyUk%2FSRQUE%2FFj%2FlNR%2BPUFlp5a%2F4GiyGfQcWIKcqgfrrMwhK4wtjrZqIfv9GZJbPT%2Bi69EO7BRt9vaSV%2Fu6xi7Ew7sqrxAY6pgFbkE%2BBhIA9Ym%2B1fXbgFVSoPf%2FJrip0eDlh6Hw6DkgFTSpnrU6OecOI2JsMP6jqT2wkFra%2BiYhBGXya4GMKo2gRoUwJp720oYRX3KkrMwnlQrUVSmFdSZt2iRL4euAts5yb45OairzGFIq%2FU%2FPBkzGUD%2Fq9Iac6AdYnN1PP%2B2VQORDph81pPN7FPxoz7k1NsJwU7BtyXrVQP%2FJZtAm9%2B48s7qWXkZCb&X-Amz-Signature=9a344214d3c2520bc49f9e129851058b8a6e137d5b3a68a11862e0504f08b827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6WSTPE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3lTLZ1k9F9faUbk1BnDhqKTxI%2B2XSEGJv7fYTEf%2B2BAiAdj6X4BBZxKMq%2FKoYYp5NKeXP0XLk2%2BAqUmF2ZP0TUgiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmcp7i7Zz5tXcTKYzKtwDTUH7nQABDY9RFe4Ee%2BO1bV0%2FnjQjQe8Ec0tqytWc9XdmA%2BzrFSRk6AxxYNlEZUavvvTH8YZBtww5k87g5tCfJ5bsJat7tpo8sph%2Bl242CDvbnt1JNgQOiTB8ivtCvBu%2B0Rv6xicEE3pTWaKIorS8vSdH5DJ33YWAKYou1EqJqKdMkV%2BD0s%2FZwF1cWq5zl1lwMl%2F0PRl8QZCU0FbSbB4JnrEpoHnz2cle%2FEXYBanWD9VuQqvYsYhvmqfnJhMNRJG2bpf4sEcd9tf0dq6VJhyZlHmYdnIYHah7dnxT4PaJF1sr8XyyshJl67q7Odu5N3oZRxfOislEvvLmpWySUtNtlYgF9CSPfoGhZg%2FQdRTH%2BryZ0IBvGt87UYAgcSpZ%2BXOrruTXnY5qHTp7d%2BiKtf1bm%2F4Vaj%2BnDPguKUX2qwX1elw8uTAUY0m1q5omgfmeUmX4u8QExn60SHDHWf0og%2BKtqjco5RKm0enMpDoJ1UQL77H%2FxsPmZUk%2FNyyckoXEKzRFMjKNzizmVB2lYRsD4fjXfklJsZF26Ux0tS%2F3ZfyUk%2FSRQUE%2FFj%2FlNR%2BPUFlp5a%2F4GiyGfQcWIKcqgfrrMwhK4wtjrZqIfv9GZJbPT%2Bi69EO7BRt9vaSV%2Fu6xi7Ew7sqrxAY6pgFbkE%2BBhIA9Ym%2B1fXbgFVSoPf%2FJrip0eDlh6Hw6DkgFTSpnrU6OecOI2JsMP6jqT2wkFra%2BiYhBGXya4GMKo2gRoUwJp720oYRX3KkrMwnlQrUVSmFdSZt2iRL4euAts5yb45OairzGFIq%2FU%2FPBkzGUD%2Fq9Iac6AdYnN1PP%2B2VQORDph81pPN7FPxoz7k1NsJwU7BtyXrVQP%2FJZtAm9%2B48s7qWXkZCb&X-Amz-Signature=e3b194450af55239dd33fd5eb4fdb4e4a8cbab5f707a88641b8e6822f9441dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6WSTPE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3lTLZ1k9F9faUbk1BnDhqKTxI%2B2XSEGJv7fYTEf%2B2BAiAdj6X4BBZxKMq%2FKoYYp5NKeXP0XLk2%2BAqUmF2ZP0TUgiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmcp7i7Zz5tXcTKYzKtwDTUH7nQABDY9RFe4Ee%2BO1bV0%2FnjQjQe8Ec0tqytWc9XdmA%2BzrFSRk6AxxYNlEZUavvvTH8YZBtww5k87g5tCfJ5bsJat7tpo8sph%2Bl242CDvbnt1JNgQOiTB8ivtCvBu%2B0Rv6xicEE3pTWaKIorS8vSdH5DJ33YWAKYou1EqJqKdMkV%2BD0s%2FZwF1cWq5zl1lwMl%2F0PRl8QZCU0FbSbB4JnrEpoHnz2cle%2FEXYBanWD9VuQqvYsYhvmqfnJhMNRJG2bpf4sEcd9tf0dq6VJhyZlHmYdnIYHah7dnxT4PaJF1sr8XyyshJl67q7Odu5N3oZRxfOislEvvLmpWySUtNtlYgF9CSPfoGhZg%2FQdRTH%2BryZ0IBvGt87UYAgcSpZ%2BXOrruTXnY5qHTp7d%2BiKtf1bm%2F4Vaj%2BnDPguKUX2qwX1elw8uTAUY0m1q5omgfmeUmX4u8QExn60SHDHWf0og%2BKtqjco5RKm0enMpDoJ1UQL77H%2FxsPmZUk%2FNyyckoXEKzRFMjKNzizmVB2lYRsD4fjXfklJsZF26Ux0tS%2F3ZfyUk%2FSRQUE%2FFj%2FlNR%2BPUFlp5a%2F4GiyGfQcWIKcqgfrrMwhK4wtjrZqIfv9GZJbPT%2Bi69EO7BRt9vaSV%2Fu6xi7Ew7sqrxAY6pgFbkE%2BBhIA9Ym%2B1fXbgFVSoPf%2FJrip0eDlh6Hw6DkgFTSpnrU6OecOI2JsMP6jqT2wkFra%2BiYhBGXya4GMKo2gRoUwJp720oYRX3KkrMwnlQrUVSmFdSZt2iRL4euAts5yb45OairzGFIq%2FU%2FPBkzGUD%2Fq9Iac6AdYnN1PP%2B2VQORDph81pPN7FPxoz7k1NsJwU7BtyXrVQP%2FJZtAm9%2B48s7qWXkZCb&X-Amz-Signature=56e2ac544e98fa8b60744eaa21e032f67fb280e1c845102bdd10f8cc4b7edc21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
