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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUYVVFN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFIvvMp2svvcEe44NwJ0%2BXJ7niEsWplbZvHU8NgNAVyIAiAbb4%2Brocb4H8Qh%2F%2Fmrj7EcykkUUvUkzt4O3CW2KVKH5Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM8No0wd87lalh8WR8KtwDTM3IUkG8%2FzkLQfKI7Ish9PM%2FZpru%2BMyBxU5jbDsPiB9TFa6d8k3YD59ASzJBv3853Vvt9mFFgF5qqk9db0%2BJnkX7lxM3043G9l7PKBwmzEGpcIDYxz%2BzJhhb9NQFfOvuxbLz3F1WcVIeRxe9Fxx9%2FGDexQGGVy%2BoFJ5B%2B1jZR5KzSAx%2BOs%2FJfv%2BgA0nLoraIXcYx%2F1DRV1%2BUMQJkeVeoSmCauxhKbefGtZjiWZz9DAwXKw9O08M4oear%2FigTz6Nt2zG4G8JNMnadvaizdI8dpciA2KV3xRDpCAZMedxFgN%2BcYFYBn68J5I8vLs4b8A6xjCCZBTSrrjWN1SVKK4E%2BgaeptpV0mft5ryS5nXWLqdFW4w3Wn3XiBBUTqILWzehcxdiR5%2ByIM%2FsjtgTn7W3MOnmCaLVuhR8rIwKVT7mQivpL6LIYX2uP%2B5P6rXf%2BR30eLV%2Fy5aQXuJWUa2HpDnWM1RCUDtJx5iT%2BEIu%2BfXwnqEUlCqGsYDjDUzDOw9uOlXs9sw4WNZ8iHxtiaKx1lIUdfBzxKcI6NXZ9qUrrZUOdQmM%2Bf3PVG0qKuL4O7rBNQv2YJGQvmbPk9F4t466D%2BPDHZ7W4GOE6KAMSJTrF%2BaddfB0G%2Br5rQP0U8uz9%2FGQwlf%2B4wgY6pgF5NquF9VR%2BuUcy%2BrRWW82vGKIjo6aKlmcvrpWKruG%2BwGLsVokcTQaRxDA040nbk9417y29ZTkSI1Fbfm2c5%2B8m33jlL50TW7lPMBUF6%2B3xMeMyD1HwvYy4Ce8kT%2FP2l6cE0pBshB4WZ0Ds00Ug69myWv49LokhFanp0z8bsI4zn5ldeQ7hwqgbD5YYn8e4N%2ByMHN7LYOjoZD6Ocq6HN1I%2BEGvZztCV&X-Amz-Signature=11cdf705abecb03fde58f55d1285bcd712d3250ed56df7cd374e532118309f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUYVVFN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFIvvMp2svvcEe44NwJ0%2BXJ7niEsWplbZvHU8NgNAVyIAiAbb4%2Brocb4H8Qh%2F%2Fmrj7EcykkUUvUkzt4O3CW2KVKH5Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM8No0wd87lalh8WR8KtwDTM3IUkG8%2FzkLQfKI7Ish9PM%2FZpru%2BMyBxU5jbDsPiB9TFa6d8k3YD59ASzJBv3853Vvt9mFFgF5qqk9db0%2BJnkX7lxM3043G9l7PKBwmzEGpcIDYxz%2BzJhhb9NQFfOvuxbLz3F1WcVIeRxe9Fxx9%2FGDexQGGVy%2BoFJ5B%2B1jZR5KzSAx%2BOs%2FJfv%2BgA0nLoraIXcYx%2F1DRV1%2BUMQJkeVeoSmCauxhKbefGtZjiWZz9DAwXKw9O08M4oear%2FigTz6Nt2zG4G8JNMnadvaizdI8dpciA2KV3xRDpCAZMedxFgN%2BcYFYBn68J5I8vLs4b8A6xjCCZBTSrrjWN1SVKK4E%2BgaeptpV0mft5ryS5nXWLqdFW4w3Wn3XiBBUTqILWzehcxdiR5%2ByIM%2FsjtgTn7W3MOnmCaLVuhR8rIwKVT7mQivpL6LIYX2uP%2B5P6rXf%2BR30eLV%2Fy5aQXuJWUa2HpDnWM1RCUDtJx5iT%2BEIu%2BfXwnqEUlCqGsYDjDUzDOw9uOlXs9sw4WNZ8iHxtiaKx1lIUdfBzxKcI6NXZ9qUrrZUOdQmM%2Bf3PVG0qKuL4O7rBNQv2YJGQvmbPk9F4t466D%2BPDHZ7W4GOE6KAMSJTrF%2BaddfB0G%2Br5rQP0U8uz9%2FGQwlf%2B4wgY6pgF5NquF9VR%2BuUcy%2BrRWW82vGKIjo6aKlmcvrpWKruG%2BwGLsVokcTQaRxDA040nbk9417y29ZTkSI1Fbfm2c5%2B8m33jlL50TW7lPMBUF6%2B3xMeMyD1HwvYy4Ce8kT%2FP2l6cE0pBshB4WZ0Ds00Ug69myWv49LokhFanp0z8bsI4zn5ldeQ7hwqgbD5YYn8e4N%2ByMHN7LYOjoZD6Ocq6HN1I%2BEGvZztCV&X-Amz-Signature=6ebcec5e5746e0ed9618474bf834efa98cc7f053c0267c34e818a64e0ad4d2dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUYVVFN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFIvvMp2svvcEe44NwJ0%2BXJ7niEsWplbZvHU8NgNAVyIAiAbb4%2Brocb4H8Qh%2F%2Fmrj7EcykkUUvUkzt4O3CW2KVKH5Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM8No0wd87lalh8WR8KtwDTM3IUkG8%2FzkLQfKI7Ish9PM%2FZpru%2BMyBxU5jbDsPiB9TFa6d8k3YD59ASzJBv3853Vvt9mFFgF5qqk9db0%2BJnkX7lxM3043G9l7PKBwmzEGpcIDYxz%2BzJhhb9NQFfOvuxbLz3F1WcVIeRxe9Fxx9%2FGDexQGGVy%2BoFJ5B%2B1jZR5KzSAx%2BOs%2FJfv%2BgA0nLoraIXcYx%2F1DRV1%2BUMQJkeVeoSmCauxhKbefGtZjiWZz9DAwXKw9O08M4oear%2FigTz6Nt2zG4G8JNMnadvaizdI8dpciA2KV3xRDpCAZMedxFgN%2BcYFYBn68J5I8vLs4b8A6xjCCZBTSrrjWN1SVKK4E%2BgaeptpV0mft5ryS5nXWLqdFW4w3Wn3XiBBUTqILWzehcxdiR5%2ByIM%2FsjtgTn7W3MOnmCaLVuhR8rIwKVT7mQivpL6LIYX2uP%2B5P6rXf%2BR30eLV%2Fy5aQXuJWUa2HpDnWM1RCUDtJx5iT%2BEIu%2BfXwnqEUlCqGsYDjDUzDOw9uOlXs9sw4WNZ8iHxtiaKx1lIUdfBzxKcI6NXZ9qUrrZUOdQmM%2Bf3PVG0qKuL4O7rBNQv2YJGQvmbPk9F4t466D%2BPDHZ7W4GOE6KAMSJTrF%2BaddfB0G%2Br5rQP0U8uz9%2FGQwlf%2B4wgY6pgF5NquF9VR%2BuUcy%2BrRWW82vGKIjo6aKlmcvrpWKruG%2BwGLsVokcTQaRxDA040nbk9417y29ZTkSI1Fbfm2c5%2B8m33jlL50TW7lPMBUF6%2B3xMeMyD1HwvYy4Ce8kT%2FP2l6cE0pBshB4WZ0Ds00Ug69myWv49LokhFanp0z8bsI4zn5ldeQ7hwqgbD5YYn8e4N%2ByMHN7LYOjoZD6Ocq6HN1I%2BEGvZztCV&X-Amz-Signature=d3c9c5de4510cd5f98f8b8863e6f08eb45339045b06d463d37ee2b2896773b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUYVVFN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFIvvMp2svvcEe44NwJ0%2BXJ7niEsWplbZvHU8NgNAVyIAiAbb4%2Brocb4H8Qh%2F%2Fmrj7EcykkUUvUkzt4O3CW2KVKH5Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM8No0wd87lalh8WR8KtwDTM3IUkG8%2FzkLQfKI7Ish9PM%2FZpru%2BMyBxU5jbDsPiB9TFa6d8k3YD59ASzJBv3853Vvt9mFFgF5qqk9db0%2BJnkX7lxM3043G9l7PKBwmzEGpcIDYxz%2BzJhhb9NQFfOvuxbLz3F1WcVIeRxe9Fxx9%2FGDexQGGVy%2BoFJ5B%2B1jZR5KzSAx%2BOs%2FJfv%2BgA0nLoraIXcYx%2F1DRV1%2BUMQJkeVeoSmCauxhKbefGtZjiWZz9DAwXKw9O08M4oear%2FigTz6Nt2zG4G8JNMnadvaizdI8dpciA2KV3xRDpCAZMedxFgN%2BcYFYBn68J5I8vLs4b8A6xjCCZBTSrrjWN1SVKK4E%2BgaeptpV0mft5ryS5nXWLqdFW4w3Wn3XiBBUTqILWzehcxdiR5%2ByIM%2FsjtgTn7W3MOnmCaLVuhR8rIwKVT7mQivpL6LIYX2uP%2B5P6rXf%2BR30eLV%2Fy5aQXuJWUa2HpDnWM1RCUDtJx5iT%2BEIu%2BfXwnqEUlCqGsYDjDUzDOw9uOlXs9sw4WNZ8iHxtiaKx1lIUdfBzxKcI6NXZ9qUrrZUOdQmM%2Bf3PVG0qKuL4O7rBNQv2YJGQvmbPk9F4t466D%2BPDHZ7W4GOE6KAMSJTrF%2BaddfB0G%2Br5rQP0U8uz9%2FGQwlf%2B4wgY6pgF5NquF9VR%2BuUcy%2BrRWW82vGKIjo6aKlmcvrpWKruG%2BwGLsVokcTQaRxDA040nbk9417y29ZTkSI1Fbfm2c5%2B8m33jlL50TW7lPMBUF6%2B3xMeMyD1HwvYy4Ce8kT%2FP2l6cE0pBshB4WZ0Ds00Ug69myWv49LokhFanp0z8bsI4zn5ldeQ7hwqgbD5YYn8e4N%2ByMHN7LYOjoZD6Ocq6HN1I%2BEGvZztCV&X-Amz-Signature=dca612aa934ad52cee9912c9ff9b2d303989c09d26f0fecdf58a7dfd238713b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUYVVFN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFIvvMp2svvcEe44NwJ0%2BXJ7niEsWplbZvHU8NgNAVyIAiAbb4%2Brocb4H8Qh%2F%2Fmrj7EcykkUUvUkzt4O3CW2KVKH5Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM8No0wd87lalh8WR8KtwDTM3IUkG8%2FzkLQfKI7Ish9PM%2FZpru%2BMyBxU5jbDsPiB9TFa6d8k3YD59ASzJBv3853Vvt9mFFgF5qqk9db0%2BJnkX7lxM3043G9l7PKBwmzEGpcIDYxz%2BzJhhb9NQFfOvuxbLz3F1WcVIeRxe9Fxx9%2FGDexQGGVy%2BoFJ5B%2B1jZR5KzSAx%2BOs%2FJfv%2BgA0nLoraIXcYx%2F1DRV1%2BUMQJkeVeoSmCauxhKbefGtZjiWZz9DAwXKw9O08M4oear%2FigTz6Nt2zG4G8JNMnadvaizdI8dpciA2KV3xRDpCAZMedxFgN%2BcYFYBn68J5I8vLs4b8A6xjCCZBTSrrjWN1SVKK4E%2BgaeptpV0mft5ryS5nXWLqdFW4w3Wn3XiBBUTqILWzehcxdiR5%2ByIM%2FsjtgTn7W3MOnmCaLVuhR8rIwKVT7mQivpL6LIYX2uP%2B5P6rXf%2BR30eLV%2Fy5aQXuJWUa2HpDnWM1RCUDtJx5iT%2BEIu%2BfXwnqEUlCqGsYDjDUzDOw9uOlXs9sw4WNZ8iHxtiaKx1lIUdfBzxKcI6NXZ9qUrrZUOdQmM%2Bf3PVG0qKuL4O7rBNQv2YJGQvmbPk9F4t466D%2BPDHZ7W4GOE6KAMSJTrF%2BaddfB0G%2Br5rQP0U8uz9%2FGQwlf%2B4wgY6pgF5NquF9VR%2BuUcy%2BrRWW82vGKIjo6aKlmcvrpWKruG%2BwGLsVokcTQaRxDA040nbk9417y29ZTkSI1Fbfm2c5%2B8m33jlL50TW7lPMBUF6%2B3xMeMyD1HwvYy4Ce8kT%2FP2l6cE0pBshB4WZ0Ds00Ug69myWv49LokhFanp0z8bsI4zn5ldeQ7hwqgbD5YYn8e4N%2ByMHN7LYOjoZD6Ocq6HN1I%2BEGvZztCV&X-Amz-Signature=e46076b2c0a1ba1e729d3cdc006c0500aae795f675104d5e9eb6017062e6dfd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUYVVFN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFIvvMp2svvcEe44NwJ0%2BXJ7niEsWplbZvHU8NgNAVyIAiAbb4%2Brocb4H8Qh%2F%2Fmrj7EcykkUUvUkzt4O3CW2KVKH5Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM8No0wd87lalh8WR8KtwDTM3IUkG8%2FzkLQfKI7Ish9PM%2FZpru%2BMyBxU5jbDsPiB9TFa6d8k3YD59ASzJBv3853Vvt9mFFgF5qqk9db0%2BJnkX7lxM3043G9l7PKBwmzEGpcIDYxz%2BzJhhb9NQFfOvuxbLz3F1WcVIeRxe9Fxx9%2FGDexQGGVy%2BoFJ5B%2B1jZR5KzSAx%2BOs%2FJfv%2BgA0nLoraIXcYx%2F1DRV1%2BUMQJkeVeoSmCauxhKbefGtZjiWZz9DAwXKw9O08M4oear%2FigTz6Nt2zG4G8JNMnadvaizdI8dpciA2KV3xRDpCAZMedxFgN%2BcYFYBn68J5I8vLs4b8A6xjCCZBTSrrjWN1SVKK4E%2BgaeptpV0mft5ryS5nXWLqdFW4w3Wn3XiBBUTqILWzehcxdiR5%2ByIM%2FsjtgTn7W3MOnmCaLVuhR8rIwKVT7mQivpL6LIYX2uP%2B5P6rXf%2BR30eLV%2Fy5aQXuJWUa2HpDnWM1RCUDtJx5iT%2BEIu%2BfXwnqEUlCqGsYDjDUzDOw9uOlXs9sw4WNZ8iHxtiaKx1lIUdfBzxKcI6NXZ9qUrrZUOdQmM%2Bf3PVG0qKuL4O7rBNQv2YJGQvmbPk9F4t466D%2BPDHZ7W4GOE6KAMSJTrF%2BaddfB0G%2Br5rQP0U8uz9%2FGQwlf%2B4wgY6pgF5NquF9VR%2BuUcy%2BrRWW82vGKIjo6aKlmcvrpWKruG%2BwGLsVokcTQaRxDA040nbk9417y29ZTkSI1Fbfm2c5%2B8m33jlL50TW7lPMBUF6%2B3xMeMyD1HwvYy4Ce8kT%2FP2l6cE0pBshB4WZ0Ds00Ug69myWv49LokhFanp0z8bsI4zn5ldeQ7hwqgbD5YYn8e4N%2ByMHN7LYOjoZD6Ocq6HN1I%2BEGvZztCV&X-Amz-Signature=33916fb383e700f61b78c7495b609458e96bf23e16f74936c578b7452a0cdefe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUYVVFN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFIvvMp2svvcEe44NwJ0%2BXJ7niEsWplbZvHU8NgNAVyIAiAbb4%2Brocb4H8Qh%2F%2Fmrj7EcykkUUvUkzt4O3CW2KVKH5Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM8No0wd87lalh8WR8KtwDTM3IUkG8%2FzkLQfKI7Ish9PM%2FZpru%2BMyBxU5jbDsPiB9TFa6d8k3YD59ASzJBv3853Vvt9mFFgF5qqk9db0%2BJnkX7lxM3043G9l7PKBwmzEGpcIDYxz%2BzJhhb9NQFfOvuxbLz3F1WcVIeRxe9Fxx9%2FGDexQGGVy%2BoFJ5B%2B1jZR5KzSAx%2BOs%2FJfv%2BgA0nLoraIXcYx%2F1DRV1%2BUMQJkeVeoSmCauxhKbefGtZjiWZz9DAwXKw9O08M4oear%2FigTz6Nt2zG4G8JNMnadvaizdI8dpciA2KV3xRDpCAZMedxFgN%2BcYFYBn68J5I8vLs4b8A6xjCCZBTSrrjWN1SVKK4E%2BgaeptpV0mft5ryS5nXWLqdFW4w3Wn3XiBBUTqILWzehcxdiR5%2ByIM%2FsjtgTn7W3MOnmCaLVuhR8rIwKVT7mQivpL6LIYX2uP%2B5P6rXf%2BR30eLV%2Fy5aQXuJWUa2HpDnWM1RCUDtJx5iT%2BEIu%2BfXwnqEUlCqGsYDjDUzDOw9uOlXs9sw4WNZ8iHxtiaKx1lIUdfBzxKcI6NXZ9qUrrZUOdQmM%2Bf3PVG0qKuL4O7rBNQv2YJGQvmbPk9F4t466D%2BPDHZ7W4GOE6KAMSJTrF%2BaddfB0G%2Br5rQP0U8uz9%2FGQwlf%2B4wgY6pgF5NquF9VR%2BuUcy%2BrRWW82vGKIjo6aKlmcvrpWKruG%2BwGLsVokcTQaRxDA040nbk9417y29ZTkSI1Fbfm2c5%2B8m33jlL50TW7lPMBUF6%2B3xMeMyD1HwvYy4Ce8kT%2FP2l6cE0pBshB4WZ0Ds00Ug69myWv49LokhFanp0z8bsI4zn5ldeQ7hwqgbD5YYn8e4N%2ByMHN7LYOjoZD6Ocq6HN1I%2BEGvZztCV&X-Amz-Signature=4c37514c152386c7492d6e1f1565d70acd98fa7c70904ec813c4e967fe75c808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUYVVFN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFIvvMp2svvcEe44NwJ0%2BXJ7niEsWplbZvHU8NgNAVyIAiAbb4%2Brocb4H8Qh%2F%2Fmrj7EcykkUUvUkzt4O3CW2KVKH5Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM8No0wd87lalh8WR8KtwDTM3IUkG8%2FzkLQfKI7Ish9PM%2FZpru%2BMyBxU5jbDsPiB9TFa6d8k3YD59ASzJBv3853Vvt9mFFgF5qqk9db0%2BJnkX7lxM3043G9l7PKBwmzEGpcIDYxz%2BzJhhb9NQFfOvuxbLz3F1WcVIeRxe9Fxx9%2FGDexQGGVy%2BoFJ5B%2B1jZR5KzSAx%2BOs%2FJfv%2BgA0nLoraIXcYx%2F1DRV1%2BUMQJkeVeoSmCauxhKbefGtZjiWZz9DAwXKw9O08M4oear%2FigTz6Nt2zG4G8JNMnadvaizdI8dpciA2KV3xRDpCAZMedxFgN%2BcYFYBn68J5I8vLs4b8A6xjCCZBTSrrjWN1SVKK4E%2BgaeptpV0mft5ryS5nXWLqdFW4w3Wn3XiBBUTqILWzehcxdiR5%2ByIM%2FsjtgTn7W3MOnmCaLVuhR8rIwKVT7mQivpL6LIYX2uP%2B5P6rXf%2BR30eLV%2Fy5aQXuJWUa2HpDnWM1RCUDtJx5iT%2BEIu%2BfXwnqEUlCqGsYDjDUzDOw9uOlXs9sw4WNZ8iHxtiaKx1lIUdfBzxKcI6NXZ9qUrrZUOdQmM%2Bf3PVG0qKuL4O7rBNQv2YJGQvmbPk9F4t466D%2BPDHZ7W4GOE6KAMSJTrF%2BaddfB0G%2Br5rQP0U8uz9%2FGQwlf%2B4wgY6pgF5NquF9VR%2BuUcy%2BrRWW82vGKIjo6aKlmcvrpWKruG%2BwGLsVokcTQaRxDA040nbk9417y29ZTkSI1Fbfm2c5%2B8m33jlL50TW7lPMBUF6%2B3xMeMyD1HwvYy4Ce8kT%2FP2l6cE0pBshB4WZ0Ds00Ug69myWv49LokhFanp0z8bsI4zn5ldeQ7hwqgbD5YYn8e4N%2ByMHN7LYOjoZD6Ocq6HN1I%2BEGvZztCV&X-Amz-Signature=37bb93443f30f4277b7907b3dba6de9706532b0f3a822fb6a47510698572deb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
