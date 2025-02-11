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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35KAWYY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHseCiaYzb73dgcQbfYCnBDHuWyM5G5qNjJ8oRImRKKUAiAYjBMdwsxPazoxFXMhcWYYBjj%2B%2F9ItP9nHXF0QetyxzyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxn6whirjI0IKfVi2KtwDqkeDjPANRGEY%2FZm523KbUzKE42o66JlUZcv5b26ffIEjMfww3viJbWHQyHt1uzpqac4NCCcIIJ2BUt%2BFjtJx8RyJRqgGEKigdpcbl0DyCHOYwis1gcEvNuH1uo%2FKxCa8MWnD1cH08vTK9HdsivBg8mdztJFDWV4aMVfxmOV8%2BqEGcSD4vXRatlNAq3y2Lanob76xkK3w8QFLWc3XEVAD%2FqrD%2BZAY6g4hthhurQjgscLMUd0YroM6EjBmquwt9yNfpYarzsSI3u4tmfO2pu6ZNForCtOYvW%2B30mhCYtPr4gAEFIruZYwTl2%2Be119NMs4QPotRBYC6no%2FIUc%2B%2B7wYcySZPng9TLYQ3Nd5jyA17h06ED7a5Y3ZEuCw74s2HZKL0lrYh3vfACjASDSV1CR1kGiP7G8NEX7bbe8itCodylNeUyZFORTyG7DfrYgl1FmOh6IJFqD0sTMDZ4bg5zttBR2wNYdEYGwHnd%2BlHpKyuqf0zclrA3%2FdX8%2F87%2BLvGnSR3aAK2llwNNnRCja5YBEyyC8KHA8Mz2mTCy%2BmjTfAp34sa%2F%2B4ECa%2FkR01Z05xTYdell4A78ksPpZwDCukFYmKQ4xkYTjie4gp2KXICUvJbTElEKwBnU8ihPZueXfYwwrKqvQY6pgGWmYBtPWXl3cd9el5WcAFzsVJjo1lATZxcmX7x93VhEs5puueO0X%2BbPI3qpSOSCQ8OSKlMGs2abYVQSmggvU2BgQj1E38DJD40LFaml58kpcOpq%2FgLYrXYWliki1j%2FJ1zHT5ZGBtE4qy5bziIgHxKilZbm%2FTdCoXq3yg328XyFecO3qAb0wTV670s53JmpOKH9Kn3RYkBShpIwVia7Ggj7EFqfBXT%2F&X-Amz-Signature=aced59cb6e6b534c151f0fd7095eaeef4c55ed8c01418227c225503071698abc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35KAWYY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHseCiaYzb73dgcQbfYCnBDHuWyM5G5qNjJ8oRImRKKUAiAYjBMdwsxPazoxFXMhcWYYBjj%2B%2F9ItP9nHXF0QetyxzyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxn6whirjI0IKfVi2KtwDqkeDjPANRGEY%2FZm523KbUzKE42o66JlUZcv5b26ffIEjMfww3viJbWHQyHt1uzpqac4NCCcIIJ2BUt%2BFjtJx8RyJRqgGEKigdpcbl0DyCHOYwis1gcEvNuH1uo%2FKxCa8MWnD1cH08vTK9HdsivBg8mdztJFDWV4aMVfxmOV8%2BqEGcSD4vXRatlNAq3y2Lanob76xkK3w8QFLWc3XEVAD%2FqrD%2BZAY6g4hthhurQjgscLMUd0YroM6EjBmquwt9yNfpYarzsSI3u4tmfO2pu6ZNForCtOYvW%2B30mhCYtPr4gAEFIruZYwTl2%2Be119NMs4QPotRBYC6no%2FIUc%2B%2B7wYcySZPng9TLYQ3Nd5jyA17h06ED7a5Y3ZEuCw74s2HZKL0lrYh3vfACjASDSV1CR1kGiP7G8NEX7bbe8itCodylNeUyZFORTyG7DfrYgl1FmOh6IJFqD0sTMDZ4bg5zttBR2wNYdEYGwHnd%2BlHpKyuqf0zclrA3%2FdX8%2F87%2BLvGnSR3aAK2llwNNnRCja5YBEyyC8KHA8Mz2mTCy%2BmjTfAp34sa%2F%2B4ECa%2FkR01Z05xTYdell4A78ksPpZwDCukFYmKQ4xkYTjie4gp2KXICUvJbTElEKwBnU8ihPZueXfYwwrKqvQY6pgGWmYBtPWXl3cd9el5WcAFzsVJjo1lATZxcmX7x93VhEs5puueO0X%2BbPI3qpSOSCQ8OSKlMGs2abYVQSmggvU2BgQj1E38DJD40LFaml58kpcOpq%2FgLYrXYWliki1j%2FJ1zHT5ZGBtE4qy5bziIgHxKilZbm%2FTdCoXq3yg328XyFecO3qAb0wTV670s53JmpOKH9Kn3RYkBShpIwVia7Ggj7EFqfBXT%2F&X-Amz-Signature=ca1787cbe5977dd8dd53bc8b09bf04deec0cde332103df4925d908666ec03a85&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35KAWYY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHseCiaYzb73dgcQbfYCnBDHuWyM5G5qNjJ8oRImRKKUAiAYjBMdwsxPazoxFXMhcWYYBjj%2B%2F9ItP9nHXF0QetyxzyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxn6whirjI0IKfVi2KtwDqkeDjPANRGEY%2FZm523KbUzKE42o66JlUZcv5b26ffIEjMfww3viJbWHQyHt1uzpqac4NCCcIIJ2BUt%2BFjtJx8RyJRqgGEKigdpcbl0DyCHOYwis1gcEvNuH1uo%2FKxCa8MWnD1cH08vTK9HdsivBg8mdztJFDWV4aMVfxmOV8%2BqEGcSD4vXRatlNAq3y2Lanob76xkK3w8QFLWc3XEVAD%2FqrD%2BZAY6g4hthhurQjgscLMUd0YroM6EjBmquwt9yNfpYarzsSI3u4tmfO2pu6ZNForCtOYvW%2B30mhCYtPr4gAEFIruZYwTl2%2Be119NMs4QPotRBYC6no%2FIUc%2B%2B7wYcySZPng9TLYQ3Nd5jyA17h06ED7a5Y3ZEuCw74s2HZKL0lrYh3vfACjASDSV1CR1kGiP7G8NEX7bbe8itCodylNeUyZFORTyG7DfrYgl1FmOh6IJFqD0sTMDZ4bg5zttBR2wNYdEYGwHnd%2BlHpKyuqf0zclrA3%2FdX8%2F87%2BLvGnSR3aAK2llwNNnRCja5YBEyyC8KHA8Mz2mTCy%2BmjTfAp34sa%2F%2B4ECa%2FkR01Z05xTYdell4A78ksPpZwDCukFYmKQ4xkYTjie4gp2KXICUvJbTElEKwBnU8ihPZueXfYwwrKqvQY6pgGWmYBtPWXl3cd9el5WcAFzsVJjo1lATZxcmX7x93VhEs5puueO0X%2BbPI3qpSOSCQ8OSKlMGs2abYVQSmggvU2BgQj1E38DJD40LFaml58kpcOpq%2FgLYrXYWliki1j%2FJ1zHT5ZGBtE4qy5bziIgHxKilZbm%2FTdCoXq3yg328XyFecO3qAb0wTV670s53JmpOKH9Kn3RYkBShpIwVia7Ggj7EFqfBXT%2F&X-Amz-Signature=a39d9a3d0827fab709b82fc6b6fb4d519a0804ea85de5b0e2bc6148276efdb8f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35KAWYY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHseCiaYzb73dgcQbfYCnBDHuWyM5G5qNjJ8oRImRKKUAiAYjBMdwsxPazoxFXMhcWYYBjj%2B%2F9ItP9nHXF0QetyxzyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxn6whirjI0IKfVi2KtwDqkeDjPANRGEY%2FZm523KbUzKE42o66JlUZcv5b26ffIEjMfww3viJbWHQyHt1uzpqac4NCCcIIJ2BUt%2BFjtJx8RyJRqgGEKigdpcbl0DyCHOYwis1gcEvNuH1uo%2FKxCa8MWnD1cH08vTK9HdsivBg8mdztJFDWV4aMVfxmOV8%2BqEGcSD4vXRatlNAq3y2Lanob76xkK3w8QFLWc3XEVAD%2FqrD%2BZAY6g4hthhurQjgscLMUd0YroM6EjBmquwt9yNfpYarzsSI3u4tmfO2pu6ZNForCtOYvW%2B30mhCYtPr4gAEFIruZYwTl2%2Be119NMs4QPotRBYC6no%2FIUc%2B%2B7wYcySZPng9TLYQ3Nd5jyA17h06ED7a5Y3ZEuCw74s2HZKL0lrYh3vfACjASDSV1CR1kGiP7G8NEX7bbe8itCodylNeUyZFORTyG7DfrYgl1FmOh6IJFqD0sTMDZ4bg5zttBR2wNYdEYGwHnd%2BlHpKyuqf0zclrA3%2FdX8%2F87%2BLvGnSR3aAK2llwNNnRCja5YBEyyC8KHA8Mz2mTCy%2BmjTfAp34sa%2F%2B4ECa%2FkR01Z05xTYdell4A78ksPpZwDCukFYmKQ4xkYTjie4gp2KXICUvJbTElEKwBnU8ihPZueXfYwwrKqvQY6pgGWmYBtPWXl3cd9el5WcAFzsVJjo1lATZxcmX7x93VhEs5puueO0X%2BbPI3qpSOSCQ8OSKlMGs2abYVQSmggvU2BgQj1E38DJD40LFaml58kpcOpq%2FgLYrXYWliki1j%2FJ1zHT5ZGBtE4qy5bziIgHxKilZbm%2FTdCoXq3yg328XyFecO3qAb0wTV670s53JmpOKH9Kn3RYkBShpIwVia7Ggj7EFqfBXT%2F&X-Amz-Signature=8efa7cde2047e2c492c254c1243aaaefdd3ec4d5733a17963f331ae6a5c72129&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35KAWYY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHseCiaYzb73dgcQbfYCnBDHuWyM5G5qNjJ8oRImRKKUAiAYjBMdwsxPazoxFXMhcWYYBjj%2B%2F9ItP9nHXF0QetyxzyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxn6whirjI0IKfVi2KtwDqkeDjPANRGEY%2FZm523KbUzKE42o66JlUZcv5b26ffIEjMfww3viJbWHQyHt1uzpqac4NCCcIIJ2BUt%2BFjtJx8RyJRqgGEKigdpcbl0DyCHOYwis1gcEvNuH1uo%2FKxCa8MWnD1cH08vTK9HdsivBg8mdztJFDWV4aMVfxmOV8%2BqEGcSD4vXRatlNAq3y2Lanob76xkK3w8QFLWc3XEVAD%2FqrD%2BZAY6g4hthhurQjgscLMUd0YroM6EjBmquwt9yNfpYarzsSI3u4tmfO2pu6ZNForCtOYvW%2B30mhCYtPr4gAEFIruZYwTl2%2Be119NMs4QPotRBYC6no%2FIUc%2B%2B7wYcySZPng9TLYQ3Nd5jyA17h06ED7a5Y3ZEuCw74s2HZKL0lrYh3vfACjASDSV1CR1kGiP7G8NEX7bbe8itCodylNeUyZFORTyG7DfrYgl1FmOh6IJFqD0sTMDZ4bg5zttBR2wNYdEYGwHnd%2BlHpKyuqf0zclrA3%2FdX8%2F87%2BLvGnSR3aAK2llwNNnRCja5YBEyyC8KHA8Mz2mTCy%2BmjTfAp34sa%2F%2B4ECa%2FkR01Z05xTYdell4A78ksPpZwDCukFYmKQ4xkYTjie4gp2KXICUvJbTElEKwBnU8ihPZueXfYwwrKqvQY6pgGWmYBtPWXl3cd9el5WcAFzsVJjo1lATZxcmX7x93VhEs5puueO0X%2BbPI3qpSOSCQ8OSKlMGs2abYVQSmggvU2BgQj1E38DJD40LFaml58kpcOpq%2FgLYrXYWliki1j%2FJ1zHT5ZGBtE4qy5bziIgHxKilZbm%2FTdCoXq3yg328XyFecO3qAb0wTV670s53JmpOKH9Kn3RYkBShpIwVia7Ggj7EFqfBXT%2F&X-Amz-Signature=722b80535af99882bdf9e1bbf18e398c8e64664b6d3ca78ba7e679e0f613b1ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35KAWYY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHseCiaYzb73dgcQbfYCnBDHuWyM5G5qNjJ8oRImRKKUAiAYjBMdwsxPazoxFXMhcWYYBjj%2B%2F9ItP9nHXF0QetyxzyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxn6whirjI0IKfVi2KtwDqkeDjPANRGEY%2FZm523KbUzKE42o66JlUZcv5b26ffIEjMfww3viJbWHQyHt1uzpqac4NCCcIIJ2BUt%2BFjtJx8RyJRqgGEKigdpcbl0DyCHOYwis1gcEvNuH1uo%2FKxCa8MWnD1cH08vTK9HdsivBg8mdztJFDWV4aMVfxmOV8%2BqEGcSD4vXRatlNAq3y2Lanob76xkK3w8QFLWc3XEVAD%2FqrD%2BZAY6g4hthhurQjgscLMUd0YroM6EjBmquwt9yNfpYarzsSI3u4tmfO2pu6ZNForCtOYvW%2B30mhCYtPr4gAEFIruZYwTl2%2Be119NMs4QPotRBYC6no%2FIUc%2B%2B7wYcySZPng9TLYQ3Nd5jyA17h06ED7a5Y3ZEuCw74s2HZKL0lrYh3vfACjASDSV1CR1kGiP7G8NEX7bbe8itCodylNeUyZFORTyG7DfrYgl1FmOh6IJFqD0sTMDZ4bg5zttBR2wNYdEYGwHnd%2BlHpKyuqf0zclrA3%2FdX8%2F87%2BLvGnSR3aAK2llwNNnRCja5YBEyyC8KHA8Mz2mTCy%2BmjTfAp34sa%2F%2B4ECa%2FkR01Z05xTYdell4A78ksPpZwDCukFYmKQ4xkYTjie4gp2KXICUvJbTElEKwBnU8ihPZueXfYwwrKqvQY6pgGWmYBtPWXl3cd9el5WcAFzsVJjo1lATZxcmX7x93VhEs5puueO0X%2BbPI3qpSOSCQ8OSKlMGs2abYVQSmggvU2BgQj1E38DJD40LFaml58kpcOpq%2FgLYrXYWliki1j%2FJ1zHT5ZGBtE4qy5bziIgHxKilZbm%2FTdCoXq3yg328XyFecO3qAb0wTV670s53JmpOKH9Kn3RYkBShpIwVia7Ggj7EFqfBXT%2F&X-Amz-Signature=1ebaf0a7c849d3f3e0b80d35a5455d8261991053a87b60779099bd674c5d2427&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35KAWYY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHseCiaYzb73dgcQbfYCnBDHuWyM5G5qNjJ8oRImRKKUAiAYjBMdwsxPazoxFXMhcWYYBjj%2B%2F9ItP9nHXF0QetyxzyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxn6whirjI0IKfVi2KtwDqkeDjPANRGEY%2FZm523KbUzKE42o66JlUZcv5b26ffIEjMfww3viJbWHQyHt1uzpqac4NCCcIIJ2BUt%2BFjtJx8RyJRqgGEKigdpcbl0DyCHOYwis1gcEvNuH1uo%2FKxCa8MWnD1cH08vTK9HdsivBg8mdztJFDWV4aMVfxmOV8%2BqEGcSD4vXRatlNAq3y2Lanob76xkK3w8QFLWc3XEVAD%2FqrD%2BZAY6g4hthhurQjgscLMUd0YroM6EjBmquwt9yNfpYarzsSI3u4tmfO2pu6ZNForCtOYvW%2B30mhCYtPr4gAEFIruZYwTl2%2Be119NMs4QPotRBYC6no%2FIUc%2B%2B7wYcySZPng9TLYQ3Nd5jyA17h06ED7a5Y3ZEuCw74s2HZKL0lrYh3vfACjASDSV1CR1kGiP7G8NEX7bbe8itCodylNeUyZFORTyG7DfrYgl1FmOh6IJFqD0sTMDZ4bg5zttBR2wNYdEYGwHnd%2BlHpKyuqf0zclrA3%2FdX8%2F87%2BLvGnSR3aAK2llwNNnRCja5YBEyyC8KHA8Mz2mTCy%2BmjTfAp34sa%2F%2B4ECa%2FkR01Z05xTYdell4A78ksPpZwDCukFYmKQ4xkYTjie4gp2KXICUvJbTElEKwBnU8ihPZueXfYwwrKqvQY6pgGWmYBtPWXl3cd9el5WcAFzsVJjo1lATZxcmX7x93VhEs5puueO0X%2BbPI3qpSOSCQ8OSKlMGs2abYVQSmggvU2BgQj1E38DJD40LFaml58kpcOpq%2FgLYrXYWliki1j%2FJ1zHT5ZGBtE4qy5bziIgHxKilZbm%2FTdCoXq3yg328XyFecO3qAb0wTV670s53JmpOKH9Kn3RYkBShpIwVia7Ggj7EFqfBXT%2F&X-Amz-Signature=ba5016d0d39ec31d958a46eb1f2836bcbfe556aa97006dd059ca3bf680c4a157&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35KAWYY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHseCiaYzb73dgcQbfYCnBDHuWyM5G5qNjJ8oRImRKKUAiAYjBMdwsxPazoxFXMhcWYYBjj%2B%2F9ItP9nHXF0QetyxzyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxn6whirjI0IKfVi2KtwDqkeDjPANRGEY%2FZm523KbUzKE42o66JlUZcv5b26ffIEjMfww3viJbWHQyHt1uzpqac4NCCcIIJ2BUt%2BFjtJx8RyJRqgGEKigdpcbl0DyCHOYwis1gcEvNuH1uo%2FKxCa8MWnD1cH08vTK9HdsivBg8mdztJFDWV4aMVfxmOV8%2BqEGcSD4vXRatlNAq3y2Lanob76xkK3w8QFLWc3XEVAD%2FqrD%2BZAY6g4hthhurQjgscLMUd0YroM6EjBmquwt9yNfpYarzsSI3u4tmfO2pu6ZNForCtOYvW%2B30mhCYtPr4gAEFIruZYwTl2%2Be119NMs4QPotRBYC6no%2FIUc%2B%2B7wYcySZPng9TLYQ3Nd5jyA17h06ED7a5Y3ZEuCw74s2HZKL0lrYh3vfACjASDSV1CR1kGiP7G8NEX7bbe8itCodylNeUyZFORTyG7DfrYgl1FmOh6IJFqD0sTMDZ4bg5zttBR2wNYdEYGwHnd%2BlHpKyuqf0zclrA3%2FdX8%2F87%2BLvGnSR3aAK2llwNNnRCja5YBEyyC8KHA8Mz2mTCy%2BmjTfAp34sa%2F%2B4ECa%2FkR01Z05xTYdell4A78ksPpZwDCukFYmKQ4xkYTjie4gp2KXICUvJbTElEKwBnU8ihPZueXfYwwrKqvQY6pgGWmYBtPWXl3cd9el5WcAFzsVJjo1lATZxcmX7x93VhEs5puueO0X%2BbPI3qpSOSCQ8OSKlMGs2abYVQSmggvU2BgQj1E38DJD40LFaml58kpcOpq%2FgLYrXYWliki1j%2FJ1zHT5ZGBtE4qy5bziIgHxKilZbm%2FTdCoXq3yg328XyFecO3qAb0wTV670s53JmpOKH9Kn3RYkBShpIwVia7Ggj7EFqfBXT%2F&X-Amz-Signature=f90c244b7ab81affce2f9a830f03953eeeada26b60f30e47acbc4dfccfa81bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
