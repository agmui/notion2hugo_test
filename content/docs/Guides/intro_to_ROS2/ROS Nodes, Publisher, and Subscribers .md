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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ATIJWL%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0lYI3be%2F5FJ6%2FxbuSKwCoO7aGdK%2FWdXaLhqxlicMyBAIhAPuedGXF8DgnxufXWu0kLD6ykLX3Z5nv%2B3DWXdMAwNppKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwckRAOZoODrVPAuz0q3AMu7cDCGSe4tapKPBqG3Ih4yslkkoJZflboZtS1wwlQrz3whErrl3LJsY3ciO%2F58DsvWG9vhhtY7ur%2BjN%2BC11IfeocYoqfJ77WqwQfzjhz28is6WzzJ5nxAamvibh5eFWkrRMUbG2aKrrWUPPoA%2FmC%2BSUrbT1%2FsTofsyi8P3F7UIjN4psldXGlBs1rs2Er0V0dhdJhVq8%2BYdtfQQETo3Wzd9hK5rONo%2B7Vm4jCMZyMyn1RD%2BygExGqAGmicL5wzNJSnOYnXDk7Ux3H1Ah%2BBXQbfYrQ8i7qPOqEI1KflQ71IvO6Z%2Fv%2B8pbczrCXsPQJk9TIzftPijL6p478fjeAPejvPvw%2Bi9tynme7v7R25SL2PESTjqUZQ3C7SVtEIFWICU2%2BeFoaJv3IKex2wo1wqJkfay7bHuh76FZ8NewD95hjThS%2FGe3zmxXmH%2BbGLelFidFUYQBskKPV5vT2BIkyRQW3P6qAox%2FZwsugbR516%2Bp270RBzMcKZMm1qX9amS1sZjy%2BJbinyAzgNpPB1tOTBRideUSq9NGpX1BTnp0jPlpaT8Nm%2BSVSvXgHplgdD%2FwFocipww2FK7Tf9pGMycY7ALSXOFVHfuu3zh8YvUticUPdhykiw%2F0uQikpNyMEW2zDd%2FqfJBjqkAW3tbcldQgyrxhBR5HYLqlHaEWC1UN3GBnTdjFmTZx8TyqPtZiOTNVe1n%2B7YaHtSmgjWMvrFw1uioQEENrAKhWU9X9WX36Cp7Lw5t6YPhm5VJxn8J5hC5XXmA1vOsb48XEsvCPiZQ7jayYSrWzsh2LXz2p%2FfaluqOW5HnJcNHJnoamOmF%2F0l1jv%2BPr1koutMyl0z7plGxqmc2ywGQxW3qxF%2Fu4Cj&X-Amz-Signature=71f53d40eb86b7d79d494d89d2e971d457d641528a740e57e04202208a03a6f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ATIJWL%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0lYI3be%2F5FJ6%2FxbuSKwCoO7aGdK%2FWdXaLhqxlicMyBAIhAPuedGXF8DgnxufXWu0kLD6ykLX3Z5nv%2B3DWXdMAwNppKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwckRAOZoODrVPAuz0q3AMu7cDCGSe4tapKPBqG3Ih4yslkkoJZflboZtS1wwlQrz3whErrl3LJsY3ciO%2F58DsvWG9vhhtY7ur%2BjN%2BC11IfeocYoqfJ77WqwQfzjhz28is6WzzJ5nxAamvibh5eFWkrRMUbG2aKrrWUPPoA%2FmC%2BSUrbT1%2FsTofsyi8P3F7UIjN4psldXGlBs1rs2Er0V0dhdJhVq8%2BYdtfQQETo3Wzd9hK5rONo%2B7Vm4jCMZyMyn1RD%2BygExGqAGmicL5wzNJSnOYnXDk7Ux3H1Ah%2BBXQbfYrQ8i7qPOqEI1KflQ71IvO6Z%2Fv%2B8pbczrCXsPQJk9TIzftPijL6p478fjeAPejvPvw%2Bi9tynme7v7R25SL2PESTjqUZQ3C7SVtEIFWICU2%2BeFoaJv3IKex2wo1wqJkfay7bHuh76FZ8NewD95hjThS%2FGe3zmxXmH%2BbGLelFidFUYQBskKPV5vT2BIkyRQW3P6qAox%2FZwsugbR516%2Bp270RBzMcKZMm1qX9amS1sZjy%2BJbinyAzgNpPB1tOTBRideUSq9NGpX1BTnp0jPlpaT8Nm%2BSVSvXgHplgdD%2FwFocipww2FK7Tf9pGMycY7ALSXOFVHfuu3zh8YvUticUPdhykiw%2F0uQikpNyMEW2zDd%2FqfJBjqkAW3tbcldQgyrxhBR5HYLqlHaEWC1UN3GBnTdjFmTZx8TyqPtZiOTNVe1n%2B7YaHtSmgjWMvrFw1uioQEENrAKhWU9X9WX36Cp7Lw5t6YPhm5VJxn8J5hC5XXmA1vOsb48XEsvCPiZQ7jayYSrWzsh2LXz2p%2FfaluqOW5HnJcNHJnoamOmF%2F0l1jv%2BPr1koutMyl0z7plGxqmc2ywGQxW3qxF%2Fu4Cj&X-Amz-Signature=ccce23eb0d410a08ef3e7b51f38cfc0c8292609d0e0c0b08f90fe6ca02518551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ATIJWL%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0lYI3be%2F5FJ6%2FxbuSKwCoO7aGdK%2FWdXaLhqxlicMyBAIhAPuedGXF8DgnxufXWu0kLD6ykLX3Z5nv%2B3DWXdMAwNppKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwckRAOZoODrVPAuz0q3AMu7cDCGSe4tapKPBqG3Ih4yslkkoJZflboZtS1wwlQrz3whErrl3LJsY3ciO%2F58DsvWG9vhhtY7ur%2BjN%2BC11IfeocYoqfJ77WqwQfzjhz28is6WzzJ5nxAamvibh5eFWkrRMUbG2aKrrWUPPoA%2FmC%2BSUrbT1%2FsTofsyi8P3F7UIjN4psldXGlBs1rs2Er0V0dhdJhVq8%2BYdtfQQETo3Wzd9hK5rONo%2B7Vm4jCMZyMyn1RD%2BygExGqAGmicL5wzNJSnOYnXDk7Ux3H1Ah%2BBXQbfYrQ8i7qPOqEI1KflQ71IvO6Z%2Fv%2B8pbczrCXsPQJk9TIzftPijL6p478fjeAPejvPvw%2Bi9tynme7v7R25SL2PESTjqUZQ3C7SVtEIFWICU2%2BeFoaJv3IKex2wo1wqJkfay7bHuh76FZ8NewD95hjThS%2FGe3zmxXmH%2BbGLelFidFUYQBskKPV5vT2BIkyRQW3P6qAox%2FZwsugbR516%2Bp270RBzMcKZMm1qX9amS1sZjy%2BJbinyAzgNpPB1tOTBRideUSq9NGpX1BTnp0jPlpaT8Nm%2BSVSvXgHplgdD%2FwFocipww2FK7Tf9pGMycY7ALSXOFVHfuu3zh8YvUticUPdhykiw%2F0uQikpNyMEW2zDd%2FqfJBjqkAW3tbcldQgyrxhBR5HYLqlHaEWC1UN3GBnTdjFmTZx8TyqPtZiOTNVe1n%2B7YaHtSmgjWMvrFw1uioQEENrAKhWU9X9WX36Cp7Lw5t6YPhm5VJxn8J5hC5XXmA1vOsb48XEsvCPiZQ7jayYSrWzsh2LXz2p%2FfaluqOW5HnJcNHJnoamOmF%2F0l1jv%2BPr1koutMyl0z7plGxqmc2ywGQxW3qxF%2Fu4Cj&X-Amz-Signature=759f8237a64a7d0c63642eb623cab644ce40e998e75381c59ee5cdf234d8d47c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ATIJWL%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0lYI3be%2F5FJ6%2FxbuSKwCoO7aGdK%2FWdXaLhqxlicMyBAIhAPuedGXF8DgnxufXWu0kLD6ykLX3Z5nv%2B3DWXdMAwNppKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwckRAOZoODrVPAuz0q3AMu7cDCGSe4tapKPBqG3Ih4yslkkoJZflboZtS1wwlQrz3whErrl3LJsY3ciO%2F58DsvWG9vhhtY7ur%2BjN%2BC11IfeocYoqfJ77WqwQfzjhz28is6WzzJ5nxAamvibh5eFWkrRMUbG2aKrrWUPPoA%2FmC%2BSUrbT1%2FsTofsyi8P3F7UIjN4psldXGlBs1rs2Er0V0dhdJhVq8%2BYdtfQQETo3Wzd9hK5rONo%2B7Vm4jCMZyMyn1RD%2BygExGqAGmicL5wzNJSnOYnXDk7Ux3H1Ah%2BBXQbfYrQ8i7qPOqEI1KflQ71IvO6Z%2Fv%2B8pbczrCXsPQJk9TIzftPijL6p478fjeAPejvPvw%2Bi9tynme7v7R25SL2PESTjqUZQ3C7SVtEIFWICU2%2BeFoaJv3IKex2wo1wqJkfay7bHuh76FZ8NewD95hjThS%2FGe3zmxXmH%2BbGLelFidFUYQBskKPV5vT2BIkyRQW3P6qAox%2FZwsugbR516%2Bp270RBzMcKZMm1qX9amS1sZjy%2BJbinyAzgNpPB1tOTBRideUSq9NGpX1BTnp0jPlpaT8Nm%2BSVSvXgHplgdD%2FwFocipww2FK7Tf9pGMycY7ALSXOFVHfuu3zh8YvUticUPdhykiw%2F0uQikpNyMEW2zDd%2FqfJBjqkAW3tbcldQgyrxhBR5HYLqlHaEWC1UN3GBnTdjFmTZx8TyqPtZiOTNVe1n%2B7YaHtSmgjWMvrFw1uioQEENrAKhWU9X9WX36Cp7Lw5t6YPhm5VJxn8J5hC5XXmA1vOsb48XEsvCPiZQ7jayYSrWzsh2LXz2p%2FfaluqOW5HnJcNHJnoamOmF%2F0l1jv%2BPr1koutMyl0z7plGxqmc2ywGQxW3qxF%2Fu4Cj&X-Amz-Signature=2926448150110c36106b0f93e58850c6c1e05ce856c8fdf4bbeb555147862dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ATIJWL%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0lYI3be%2F5FJ6%2FxbuSKwCoO7aGdK%2FWdXaLhqxlicMyBAIhAPuedGXF8DgnxufXWu0kLD6ykLX3Z5nv%2B3DWXdMAwNppKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwckRAOZoODrVPAuz0q3AMu7cDCGSe4tapKPBqG3Ih4yslkkoJZflboZtS1wwlQrz3whErrl3LJsY3ciO%2F58DsvWG9vhhtY7ur%2BjN%2BC11IfeocYoqfJ77WqwQfzjhz28is6WzzJ5nxAamvibh5eFWkrRMUbG2aKrrWUPPoA%2FmC%2BSUrbT1%2FsTofsyi8P3F7UIjN4psldXGlBs1rs2Er0V0dhdJhVq8%2BYdtfQQETo3Wzd9hK5rONo%2B7Vm4jCMZyMyn1RD%2BygExGqAGmicL5wzNJSnOYnXDk7Ux3H1Ah%2BBXQbfYrQ8i7qPOqEI1KflQ71IvO6Z%2Fv%2B8pbczrCXsPQJk9TIzftPijL6p478fjeAPejvPvw%2Bi9tynme7v7R25SL2PESTjqUZQ3C7SVtEIFWICU2%2BeFoaJv3IKex2wo1wqJkfay7bHuh76FZ8NewD95hjThS%2FGe3zmxXmH%2BbGLelFidFUYQBskKPV5vT2BIkyRQW3P6qAox%2FZwsugbR516%2Bp270RBzMcKZMm1qX9amS1sZjy%2BJbinyAzgNpPB1tOTBRideUSq9NGpX1BTnp0jPlpaT8Nm%2BSVSvXgHplgdD%2FwFocipww2FK7Tf9pGMycY7ALSXOFVHfuu3zh8YvUticUPdhykiw%2F0uQikpNyMEW2zDd%2FqfJBjqkAW3tbcldQgyrxhBR5HYLqlHaEWC1UN3GBnTdjFmTZx8TyqPtZiOTNVe1n%2B7YaHtSmgjWMvrFw1uioQEENrAKhWU9X9WX36Cp7Lw5t6YPhm5VJxn8J5hC5XXmA1vOsb48XEsvCPiZQ7jayYSrWzsh2LXz2p%2FfaluqOW5HnJcNHJnoamOmF%2F0l1jv%2BPr1koutMyl0z7plGxqmc2ywGQxW3qxF%2Fu4Cj&X-Amz-Signature=8f7e2add0634cb8224f8dd0e3325414c3a45f473f0e662b13df78c0c0d917e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ATIJWL%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0lYI3be%2F5FJ6%2FxbuSKwCoO7aGdK%2FWdXaLhqxlicMyBAIhAPuedGXF8DgnxufXWu0kLD6ykLX3Z5nv%2B3DWXdMAwNppKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwckRAOZoODrVPAuz0q3AMu7cDCGSe4tapKPBqG3Ih4yslkkoJZflboZtS1wwlQrz3whErrl3LJsY3ciO%2F58DsvWG9vhhtY7ur%2BjN%2BC11IfeocYoqfJ77WqwQfzjhz28is6WzzJ5nxAamvibh5eFWkrRMUbG2aKrrWUPPoA%2FmC%2BSUrbT1%2FsTofsyi8P3F7UIjN4psldXGlBs1rs2Er0V0dhdJhVq8%2BYdtfQQETo3Wzd9hK5rONo%2B7Vm4jCMZyMyn1RD%2BygExGqAGmicL5wzNJSnOYnXDk7Ux3H1Ah%2BBXQbfYrQ8i7qPOqEI1KflQ71IvO6Z%2Fv%2B8pbczrCXsPQJk9TIzftPijL6p478fjeAPejvPvw%2Bi9tynme7v7R25SL2PESTjqUZQ3C7SVtEIFWICU2%2BeFoaJv3IKex2wo1wqJkfay7bHuh76FZ8NewD95hjThS%2FGe3zmxXmH%2BbGLelFidFUYQBskKPV5vT2BIkyRQW3P6qAox%2FZwsugbR516%2Bp270RBzMcKZMm1qX9amS1sZjy%2BJbinyAzgNpPB1tOTBRideUSq9NGpX1BTnp0jPlpaT8Nm%2BSVSvXgHplgdD%2FwFocipww2FK7Tf9pGMycY7ALSXOFVHfuu3zh8YvUticUPdhykiw%2F0uQikpNyMEW2zDd%2FqfJBjqkAW3tbcldQgyrxhBR5HYLqlHaEWC1UN3GBnTdjFmTZx8TyqPtZiOTNVe1n%2B7YaHtSmgjWMvrFw1uioQEENrAKhWU9X9WX36Cp7Lw5t6YPhm5VJxn8J5hC5XXmA1vOsb48XEsvCPiZQ7jayYSrWzsh2LXz2p%2FfaluqOW5HnJcNHJnoamOmF%2F0l1jv%2BPr1koutMyl0z7plGxqmc2ywGQxW3qxF%2Fu4Cj&X-Amz-Signature=b13084cfc737c8e2cc330f3e58839c5949c28502a536e8cfe5cd721be4875fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ATIJWL%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0lYI3be%2F5FJ6%2FxbuSKwCoO7aGdK%2FWdXaLhqxlicMyBAIhAPuedGXF8DgnxufXWu0kLD6ykLX3Z5nv%2B3DWXdMAwNppKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwckRAOZoODrVPAuz0q3AMu7cDCGSe4tapKPBqG3Ih4yslkkoJZflboZtS1wwlQrz3whErrl3LJsY3ciO%2F58DsvWG9vhhtY7ur%2BjN%2BC11IfeocYoqfJ77WqwQfzjhz28is6WzzJ5nxAamvibh5eFWkrRMUbG2aKrrWUPPoA%2FmC%2BSUrbT1%2FsTofsyi8P3F7UIjN4psldXGlBs1rs2Er0V0dhdJhVq8%2BYdtfQQETo3Wzd9hK5rONo%2B7Vm4jCMZyMyn1RD%2BygExGqAGmicL5wzNJSnOYnXDk7Ux3H1Ah%2BBXQbfYrQ8i7qPOqEI1KflQ71IvO6Z%2Fv%2B8pbczrCXsPQJk9TIzftPijL6p478fjeAPejvPvw%2Bi9tynme7v7R25SL2PESTjqUZQ3C7SVtEIFWICU2%2BeFoaJv3IKex2wo1wqJkfay7bHuh76FZ8NewD95hjThS%2FGe3zmxXmH%2BbGLelFidFUYQBskKPV5vT2BIkyRQW3P6qAox%2FZwsugbR516%2Bp270RBzMcKZMm1qX9amS1sZjy%2BJbinyAzgNpPB1tOTBRideUSq9NGpX1BTnp0jPlpaT8Nm%2BSVSvXgHplgdD%2FwFocipww2FK7Tf9pGMycY7ALSXOFVHfuu3zh8YvUticUPdhykiw%2F0uQikpNyMEW2zDd%2FqfJBjqkAW3tbcldQgyrxhBR5HYLqlHaEWC1UN3GBnTdjFmTZx8TyqPtZiOTNVe1n%2B7YaHtSmgjWMvrFw1uioQEENrAKhWU9X9WX36Cp7Lw5t6YPhm5VJxn8J5hC5XXmA1vOsb48XEsvCPiZQ7jayYSrWzsh2LXz2p%2FfaluqOW5HnJcNHJnoamOmF%2F0l1jv%2BPr1koutMyl0z7plGxqmc2ywGQxW3qxF%2Fu4Cj&X-Amz-Signature=765f06ebb5bb3eb44c2b34cd4dcc657166123b5077a7f161ebbe98d628f061aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ATIJWL%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0lYI3be%2F5FJ6%2FxbuSKwCoO7aGdK%2FWdXaLhqxlicMyBAIhAPuedGXF8DgnxufXWu0kLD6ykLX3Z5nv%2B3DWXdMAwNppKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwckRAOZoODrVPAuz0q3AMu7cDCGSe4tapKPBqG3Ih4yslkkoJZflboZtS1wwlQrz3whErrl3LJsY3ciO%2F58DsvWG9vhhtY7ur%2BjN%2BC11IfeocYoqfJ77WqwQfzjhz28is6WzzJ5nxAamvibh5eFWkrRMUbG2aKrrWUPPoA%2FmC%2BSUrbT1%2FsTofsyi8P3F7UIjN4psldXGlBs1rs2Er0V0dhdJhVq8%2BYdtfQQETo3Wzd9hK5rONo%2B7Vm4jCMZyMyn1RD%2BygExGqAGmicL5wzNJSnOYnXDk7Ux3H1Ah%2BBXQbfYrQ8i7qPOqEI1KflQ71IvO6Z%2Fv%2B8pbczrCXsPQJk9TIzftPijL6p478fjeAPejvPvw%2Bi9tynme7v7R25SL2PESTjqUZQ3C7SVtEIFWICU2%2BeFoaJv3IKex2wo1wqJkfay7bHuh76FZ8NewD95hjThS%2FGe3zmxXmH%2BbGLelFidFUYQBskKPV5vT2BIkyRQW3P6qAox%2FZwsugbR516%2Bp270RBzMcKZMm1qX9amS1sZjy%2BJbinyAzgNpPB1tOTBRideUSq9NGpX1BTnp0jPlpaT8Nm%2BSVSvXgHplgdD%2FwFocipww2FK7Tf9pGMycY7ALSXOFVHfuu3zh8YvUticUPdhykiw%2F0uQikpNyMEW2zDd%2FqfJBjqkAW3tbcldQgyrxhBR5HYLqlHaEWC1UN3GBnTdjFmTZx8TyqPtZiOTNVe1n%2B7YaHtSmgjWMvrFw1uioQEENrAKhWU9X9WX36Cp7Lw5t6YPhm5VJxn8J5hC5XXmA1vOsb48XEsvCPiZQ7jayYSrWzsh2LXz2p%2FfaluqOW5HnJcNHJnoamOmF%2F0l1jv%2BPr1koutMyl0z7plGxqmc2ywGQxW3qxF%2Fu4Cj&X-Amz-Signature=abc932e468f1b7414d626f8b34461942bb4629008d99be745e3fcca432509ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
