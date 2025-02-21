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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FSJUSXO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF89g8wAW031e5YvIQGxuYWcENM0Hj79AdbeXjHvta%2BhAiBnC07lSDwWsl9DTNSDK100DcxlqkNLEv%2FZX%2Fl2vpYSdSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7gP3slHVypQPMY8EKtwDbfI4nDLW1QhU43i4jTuANa9cT%2FNgvgabLL1N%2F2UQ%2FWcFLIag3smxOYRv6dnB%2FOStdeE520yRoQsAbbDrMJlmRkVL0C%2BQsgOMLunSYYCrzrziu4KB32ojpaPoGXw47xiuBSvjDSMe6AnNZ78qg7Rl2ynQmS4t6eHt%2FCCdA5KBAlQfVdRzD2qHwRMxUMk2cDP9FZtNbCCGNc7z64222X93kg4Oixx%2FnXNkx54bwC67va9fTPYwDX0nIdJBYSlM49lIh001B3yde1F00XYBj489anG7YpvzgDBZz%2BhQyFwWCQkSFsMoR8vY4FQ6o73CNzxNGNuUHKWXhphHQ4EBzLvvy3D9xslO8lHtDCTYJVuFKHVgjivyoszVSYtw1g8eTVJ%2Buoba6XHo4mV6wW%2F1FEKTZMZVg%2FSrvjEwfbuQDsl37aYR2jGvtkCVlMwajTYlcELOiKEDjiFfNbJqx%2BUMaYlymaUYl4wWo9phRRjcufuPzD99hMEGx6kCqVcyMxFtatBq8wHz%2BMLKhDjWJl75TXV9fidve2w568aFnbSYOI1DVQC%2F3gxPud4L4VGdJFwqQaKQA2NJsOYu%2ByHi22CqZtVxr5PkMpZel%2FEJdpVKaDZ%2BIIhMn9mw47y2EuXjMXQwsfvgvQY6pgGSkclas28%2Bhze8f%2FB4pzPckprd5%2Fh47QrRImw%2FakNdTbzNSERKZjs9SwrhVUx6KcU%2F4dUZILIitAsgeaq1oPWio75r62iPhfpokSIPU2vytsSyJEoqIZ5i3LP46kpLvysnivQ%2Ff3uUpp0QYmxlghk0gJVnFl8bQOcHyvAtA2OdINwr8UeSs2ryGvkzQJjw0Zf1UqGfHSMayqbrGKRU3AQkunQNMOxp&X-Amz-Signature=84691bdcdce6e1719bc90bcb0481ed779b465dac4857e599972ff85203c7f6cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FSJUSXO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF89g8wAW031e5YvIQGxuYWcENM0Hj79AdbeXjHvta%2BhAiBnC07lSDwWsl9DTNSDK100DcxlqkNLEv%2FZX%2Fl2vpYSdSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7gP3slHVypQPMY8EKtwDbfI4nDLW1QhU43i4jTuANa9cT%2FNgvgabLL1N%2F2UQ%2FWcFLIag3smxOYRv6dnB%2FOStdeE520yRoQsAbbDrMJlmRkVL0C%2BQsgOMLunSYYCrzrziu4KB32ojpaPoGXw47xiuBSvjDSMe6AnNZ78qg7Rl2ynQmS4t6eHt%2FCCdA5KBAlQfVdRzD2qHwRMxUMk2cDP9FZtNbCCGNc7z64222X93kg4Oixx%2FnXNkx54bwC67va9fTPYwDX0nIdJBYSlM49lIh001B3yde1F00XYBj489anG7YpvzgDBZz%2BhQyFwWCQkSFsMoR8vY4FQ6o73CNzxNGNuUHKWXhphHQ4EBzLvvy3D9xslO8lHtDCTYJVuFKHVgjivyoszVSYtw1g8eTVJ%2Buoba6XHo4mV6wW%2F1FEKTZMZVg%2FSrvjEwfbuQDsl37aYR2jGvtkCVlMwajTYlcELOiKEDjiFfNbJqx%2BUMaYlymaUYl4wWo9phRRjcufuPzD99hMEGx6kCqVcyMxFtatBq8wHz%2BMLKhDjWJl75TXV9fidve2w568aFnbSYOI1DVQC%2F3gxPud4L4VGdJFwqQaKQA2NJsOYu%2ByHi22CqZtVxr5PkMpZel%2FEJdpVKaDZ%2BIIhMn9mw47y2EuXjMXQwsfvgvQY6pgGSkclas28%2Bhze8f%2FB4pzPckprd5%2Fh47QrRImw%2FakNdTbzNSERKZjs9SwrhVUx6KcU%2F4dUZILIitAsgeaq1oPWio75r62iPhfpokSIPU2vytsSyJEoqIZ5i3LP46kpLvysnivQ%2Ff3uUpp0QYmxlghk0gJVnFl8bQOcHyvAtA2OdINwr8UeSs2ryGvkzQJjw0Zf1UqGfHSMayqbrGKRU3AQkunQNMOxp&X-Amz-Signature=2e180e312580eb5f4219325e160c446e6e72dad26b78fab882a85b9397750df4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FSJUSXO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF89g8wAW031e5YvIQGxuYWcENM0Hj79AdbeXjHvta%2BhAiBnC07lSDwWsl9DTNSDK100DcxlqkNLEv%2FZX%2Fl2vpYSdSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7gP3slHVypQPMY8EKtwDbfI4nDLW1QhU43i4jTuANa9cT%2FNgvgabLL1N%2F2UQ%2FWcFLIag3smxOYRv6dnB%2FOStdeE520yRoQsAbbDrMJlmRkVL0C%2BQsgOMLunSYYCrzrziu4KB32ojpaPoGXw47xiuBSvjDSMe6AnNZ78qg7Rl2ynQmS4t6eHt%2FCCdA5KBAlQfVdRzD2qHwRMxUMk2cDP9FZtNbCCGNc7z64222X93kg4Oixx%2FnXNkx54bwC67va9fTPYwDX0nIdJBYSlM49lIh001B3yde1F00XYBj489anG7YpvzgDBZz%2BhQyFwWCQkSFsMoR8vY4FQ6o73CNzxNGNuUHKWXhphHQ4EBzLvvy3D9xslO8lHtDCTYJVuFKHVgjivyoszVSYtw1g8eTVJ%2Buoba6XHo4mV6wW%2F1FEKTZMZVg%2FSrvjEwfbuQDsl37aYR2jGvtkCVlMwajTYlcELOiKEDjiFfNbJqx%2BUMaYlymaUYl4wWo9phRRjcufuPzD99hMEGx6kCqVcyMxFtatBq8wHz%2BMLKhDjWJl75TXV9fidve2w568aFnbSYOI1DVQC%2F3gxPud4L4VGdJFwqQaKQA2NJsOYu%2ByHi22CqZtVxr5PkMpZel%2FEJdpVKaDZ%2BIIhMn9mw47y2EuXjMXQwsfvgvQY6pgGSkclas28%2Bhze8f%2FB4pzPckprd5%2Fh47QrRImw%2FakNdTbzNSERKZjs9SwrhVUx6KcU%2F4dUZILIitAsgeaq1oPWio75r62iPhfpokSIPU2vytsSyJEoqIZ5i3LP46kpLvysnivQ%2Ff3uUpp0QYmxlghk0gJVnFl8bQOcHyvAtA2OdINwr8UeSs2ryGvkzQJjw0Zf1UqGfHSMayqbrGKRU3AQkunQNMOxp&X-Amz-Signature=9b5cda851daf2ea6dc7d46575b482cc456421b517a8d5b252809dd65d8ce130c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FSJUSXO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF89g8wAW031e5YvIQGxuYWcENM0Hj79AdbeXjHvta%2BhAiBnC07lSDwWsl9DTNSDK100DcxlqkNLEv%2FZX%2Fl2vpYSdSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7gP3slHVypQPMY8EKtwDbfI4nDLW1QhU43i4jTuANa9cT%2FNgvgabLL1N%2F2UQ%2FWcFLIag3smxOYRv6dnB%2FOStdeE520yRoQsAbbDrMJlmRkVL0C%2BQsgOMLunSYYCrzrziu4KB32ojpaPoGXw47xiuBSvjDSMe6AnNZ78qg7Rl2ynQmS4t6eHt%2FCCdA5KBAlQfVdRzD2qHwRMxUMk2cDP9FZtNbCCGNc7z64222X93kg4Oixx%2FnXNkx54bwC67va9fTPYwDX0nIdJBYSlM49lIh001B3yde1F00XYBj489anG7YpvzgDBZz%2BhQyFwWCQkSFsMoR8vY4FQ6o73CNzxNGNuUHKWXhphHQ4EBzLvvy3D9xslO8lHtDCTYJVuFKHVgjivyoszVSYtw1g8eTVJ%2Buoba6XHo4mV6wW%2F1FEKTZMZVg%2FSrvjEwfbuQDsl37aYR2jGvtkCVlMwajTYlcELOiKEDjiFfNbJqx%2BUMaYlymaUYl4wWo9phRRjcufuPzD99hMEGx6kCqVcyMxFtatBq8wHz%2BMLKhDjWJl75TXV9fidve2w568aFnbSYOI1DVQC%2F3gxPud4L4VGdJFwqQaKQA2NJsOYu%2ByHi22CqZtVxr5PkMpZel%2FEJdpVKaDZ%2BIIhMn9mw47y2EuXjMXQwsfvgvQY6pgGSkclas28%2Bhze8f%2FB4pzPckprd5%2Fh47QrRImw%2FakNdTbzNSERKZjs9SwrhVUx6KcU%2F4dUZILIitAsgeaq1oPWio75r62iPhfpokSIPU2vytsSyJEoqIZ5i3LP46kpLvysnivQ%2Ff3uUpp0QYmxlghk0gJVnFl8bQOcHyvAtA2OdINwr8UeSs2ryGvkzQJjw0Zf1UqGfHSMayqbrGKRU3AQkunQNMOxp&X-Amz-Signature=7054f8a32e85a280d3bc5146abcdf2abf07a6007731e9a3be1c1ade7c3908c97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FSJUSXO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF89g8wAW031e5YvIQGxuYWcENM0Hj79AdbeXjHvta%2BhAiBnC07lSDwWsl9DTNSDK100DcxlqkNLEv%2FZX%2Fl2vpYSdSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7gP3slHVypQPMY8EKtwDbfI4nDLW1QhU43i4jTuANa9cT%2FNgvgabLL1N%2F2UQ%2FWcFLIag3smxOYRv6dnB%2FOStdeE520yRoQsAbbDrMJlmRkVL0C%2BQsgOMLunSYYCrzrziu4KB32ojpaPoGXw47xiuBSvjDSMe6AnNZ78qg7Rl2ynQmS4t6eHt%2FCCdA5KBAlQfVdRzD2qHwRMxUMk2cDP9FZtNbCCGNc7z64222X93kg4Oixx%2FnXNkx54bwC67va9fTPYwDX0nIdJBYSlM49lIh001B3yde1F00XYBj489anG7YpvzgDBZz%2BhQyFwWCQkSFsMoR8vY4FQ6o73CNzxNGNuUHKWXhphHQ4EBzLvvy3D9xslO8lHtDCTYJVuFKHVgjivyoszVSYtw1g8eTVJ%2Buoba6XHo4mV6wW%2F1FEKTZMZVg%2FSrvjEwfbuQDsl37aYR2jGvtkCVlMwajTYlcELOiKEDjiFfNbJqx%2BUMaYlymaUYl4wWo9phRRjcufuPzD99hMEGx6kCqVcyMxFtatBq8wHz%2BMLKhDjWJl75TXV9fidve2w568aFnbSYOI1DVQC%2F3gxPud4L4VGdJFwqQaKQA2NJsOYu%2ByHi22CqZtVxr5PkMpZel%2FEJdpVKaDZ%2BIIhMn9mw47y2EuXjMXQwsfvgvQY6pgGSkclas28%2Bhze8f%2FB4pzPckprd5%2Fh47QrRImw%2FakNdTbzNSERKZjs9SwrhVUx6KcU%2F4dUZILIitAsgeaq1oPWio75r62iPhfpokSIPU2vytsSyJEoqIZ5i3LP46kpLvysnivQ%2Ff3uUpp0QYmxlghk0gJVnFl8bQOcHyvAtA2OdINwr8UeSs2ryGvkzQJjw0Zf1UqGfHSMayqbrGKRU3AQkunQNMOxp&X-Amz-Signature=0d53f0db39da262c13adfd83ae9ada984e4d688fea963580fd06515a9e530812&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FSJUSXO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF89g8wAW031e5YvIQGxuYWcENM0Hj79AdbeXjHvta%2BhAiBnC07lSDwWsl9DTNSDK100DcxlqkNLEv%2FZX%2Fl2vpYSdSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7gP3slHVypQPMY8EKtwDbfI4nDLW1QhU43i4jTuANa9cT%2FNgvgabLL1N%2F2UQ%2FWcFLIag3smxOYRv6dnB%2FOStdeE520yRoQsAbbDrMJlmRkVL0C%2BQsgOMLunSYYCrzrziu4KB32ojpaPoGXw47xiuBSvjDSMe6AnNZ78qg7Rl2ynQmS4t6eHt%2FCCdA5KBAlQfVdRzD2qHwRMxUMk2cDP9FZtNbCCGNc7z64222X93kg4Oixx%2FnXNkx54bwC67va9fTPYwDX0nIdJBYSlM49lIh001B3yde1F00XYBj489anG7YpvzgDBZz%2BhQyFwWCQkSFsMoR8vY4FQ6o73CNzxNGNuUHKWXhphHQ4EBzLvvy3D9xslO8lHtDCTYJVuFKHVgjivyoszVSYtw1g8eTVJ%2Buoba6XHo4mV6wW%2F1FEKTZMZVg%2FSrvjEwfbuQDsl37aYR2jGvtkCVlMwajTYlcELOiKEDjiFfNbJqx%2BUMaYlymaUYl4wWo9phRRjcufuPzD99hMEGx6kCqVcyMxFtatBq8wHz%2BMLKhDjWJl75TXV9fidve2w568aFnbSYOI1DVQC%2F3gxPud4L4VGdJFwqQaKQA2NJsOYu%2ByHi22CqZtVxr5PkMpZel%2FEJdpVKaDZ%2BIIhMn9mw47y2EuXjMXQwsfvgvQY6pgGSkclas28%2Bhze8f%2FB4pzPckprd5%2Fh47QrRImw%2FakNdTbzNSERKZjs9SwrhVUx6KcU%2F4dUZILIitAsgeaq1oPWio75r62iPhfpokSIPU2vytsSyJEoqIZ5i3LP46kpLvysnivQ%2Ff3uUpp0QYmxlghk0gJVnFl8bQOcHyvAtA2OdINwr8UeSs2ryGvkzQJjw0Zf1UqGfHSMayqbrGKRU3AQkunQNMOxp&X-Amz-Signature=0f725a3603f0646d84c642c9080be206382044ca3196ceabbd9ad76acb10ab1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FSJUSXO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF89g8wAW031e5YvIQGxuYWcENM0Hj79AdbeXjHvta%2BhAiBnC07lSDwWsl9DTNSDK100DcxlqkNLEv%2FZX%2Fl2vpYSdSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7gP3slHVypQPMY8EKtwDbfI4nDLW1QhU43i4jTuANa9cT%2FNgvgabLL1N%2F2UQ%2FWcFLIag3smxOYRv6dnB%2FOStdeE520yRoQsAbbDrMJlmRkVL0C%2BQsgOMLunSYYCrzrziu4KB32ojpaPoGXw47xiuBSvjDSMe6AnNZ78qg7Rl2ynQmS4t6eHt%2FCCdA5KBAlQfVdRzD2qHwRMxUMk2cDP9FZtNbCCGNc7z64222X93kg4Oixx%2FnXNkx54bwC67va9fTPYwDX0nIdJBYSlM49lIh001B3yde1F00XYBj489anG7YpvzgDBZz%2BhQyFwWCQkSFsMoR8vY4FQ6o73CNzxNGNuUHKWXhphHQ4EBzLvvy3D9xslO8lHtDCTYJVuFKHVgjivyoszVSYtw1g8eTVJ%2Buoba6XHo4mV6wW%2F1FEKTZMZVg%2FSrvjEwfbuQDsl37aYR2jGvtkCVlMwajTYlcELOiKEDjiFfNbJqx%2BUMaYlymaUYl4wWo9phRRjcufuPzD99hMEGx6kCqVcyMxFtatBq8wHz%2BMLKhDjWJl75TXV9fidve2w568aFnbSYOI1DVQC%2F3gxPud4L4VGdJFwqQaKQA2NJsOYu%2ByHi22CqZtVxr5PkMpZel%2FEJdpVKaDZ%2BIIhMn9mw47y2EuXjMXQwsfvgvQY6pgGSkclas28%2Bhze8f%2FB4pzPckprd5%2Fh47QrRImw%2FakNdTbzNSERKZjs9SwrhVUx6KcU%2F4dUZILIitAsgeaq1oPWio75r62iPhfpokSIPU2vytsSyJEoqIZ5i3LP46kpLvysnivQ%2Ff3uUpp0QYmxlghk0gJVnFl8bQOcHyvAtA2OdINwr8UeSs2ryGvkzQJjw0Zf1UqGfHSMayqbrGKRU3AQkunQNMOxp&X-Amz-Signature=190c516c60dc70778cc4fffabfd6addd72cca75533d52cf3cc871f5c408f8e56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FSJUSXO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF89g8wAW031e5YvIQGxuYWcENM0Hj79AdbeXjHvta%2BhAiBnC07lSDwWsl9DTNSDK100DcxlqkNLEv%2FZX%2Fl2vpYSdSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7gP3slHVypQPMY8EKtwDbfI4nDLW1QhU43i4jTuANa9cT%2FNgvgabLL1N%2F2UQ%2FWcFLIag3smxOYRv6dnB%2FOStdeE520yRoQsAbbDrMJlmRkVL0C%2BQsgOMLunSYYCrzrziu4KB32ojpaPoGXw47xiuBSvjDSMe6AnNZ78qg7Rl2ynQmS4t6eHt%2FCCdA5KBAlQfVdRzD2qHwRMxUMk2cDP9FZtNbCCGNc7z64222X93kg4Oixx%2FnXNkx54bwC67va9fTPYwDX0nIdJBYSlM49lIh001B3yde1F00XYBj489anG7YpvzgDBZz%2BhQyFwWCQkSFsMoR8vY4FQ6o73CNzxNGNuUHKWXhphHQ4EBzLvvy3D9xslO8lHtDCTYJVuFKHVgjivyoszVSYtw1g8eTVJ%2Buoba6XHo4mV6wW%2F1FEKTZMZVg%2FSrvjEwfbuQDsl37aYR2jGvtkCVlMwajTYlcELOiKEDjiFfNbJqx%2BUMaYlymaUYl4wWo9phRRjcufuPzD99hMEGx6kCqVcyMxFtatBq8wHz%2BMLKhDjWJl75TXV9fidve2w568aFnbSYOI1DVQC%2F3gxPud4L4VGdJFwqQaKQA2NJsOYu%2ByHi22CqZtVxr5PkMpZel%2FEJdpVKaDZ%2BIIhMn9mw47y2EuXjMXQwsfvgvQY6pgGSkclas28%2Bhze8f%2FB4pzPckprd5%2Fh47QrRImw%2FakNdTbzNSERKZjs9SwrhVUx6KcU%2F4dUZILIitAsgeaq1oPWio75r62iPhfpokSIPU2vytsSyJEoqIZ5i3LP46kpLvysnivQ%2Ff3uUpp0QYmxlghk0gJVnFl8bQOcHyvAtA2OdINwr8UeSs2ryGvkzQJjw0Zf1UqGfHSMayqbrGKRU3AQkunQNMOxp&X-Amz-Signature=dd16ffc478456d750fb429b452a51d670baded804a734cdfd4fe0888f5711fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
