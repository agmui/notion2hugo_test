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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXDKHLP2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvfWy2BWQhsmJwII%2Flk5PhT%2FNxcWZoaL2OdkvsBJi%2F%2BAiBCN%2FJEYHXcbEhiAfH9heRFW97Tr1PsDEP83Ek%2BwK0%2F0CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0rSWXrJEOigKIVfVKtwDQR5Cn5atBQqNpPyqaHe9eOSod%2BlvQE5meCnZ0ENO4IHsNOxrMdYTBiPqfDF9D6dfPjaTRcgCwz3AiEgJdRgPDmNSbSxlltuUEvpcjOpV87kNX6ckLc2F7sSp3uNY0af6TQSgOouOFIRYaOQbfDsYM6FkyjlROlHkcAbLhBvUAcIf62yDBK30Ux4RoODQIkIsg2xweRhuafPmQ0mLfx8tHO5Q3uzYVK%2FLKa2ZicOXPpZOPyA9dhQt2KLBxctDC4sVj%2BZ1M5MsfOVgFoAh1m6L%2FipMxzalyXQExsLTxURrOs%2BSPRwkh2hBM5n5vCFowwKIERx4NqlOfsBwIK9Qznx1J4CLvnTntfsuDifJ1NDalSJnNjTaNeYUvcjjeD6WcrR7ai3UG%2Bk4%2FT3RA8CId2t9%2BPk632QZgDBvPCIorQKeIXCngnGMh3pO18K0LEA4HhjwLfssiBWQm7BTHE%2BMJFAMUnE%2F7blKcH5kIRqqWRLwefXtuWVcRxxUl63GSFniLQRLnVMBjBK%2BmdCoKnrPmGpo3HMyoV3xxnMwveMdZcxmEE4hfLLze3%2FVxUhCSEWmEM%2FXUfEYAht4%2F1C21%2FwX0D%2FB%2B5i4%2B0ibO7%2FG%2Fh%2F3Udm8Qrwf%2BMS5jlRiwHPuEBgwv%2FiUvgY6pgHLwgKvEdZKfRznVN82wKC5TEQHQ9B%2BfsuH6eJ7weO8OFtv1PYPKqkG8Z6pWgNQg8uwAhkoTP4waad1bLm0d%2Bb%2FEi%2BoDYndpaesCwwBHyTW1kZZtoQDOEBAkbTvOLXUbl2VlqbP8Q7FD1o6kFkrub%2BqHBKTVj1IFHRH6ba9%2FUWEGWmMbsPl%2B1b7hvsXudmkX7hQza13NECxeAV2Xw4JsTRomJGMr1nV&X-Amz-Signature=2eb2a46dc590a52824eb4e071412c8ded3e5a2299604d66c7e9af03e59c3426a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXDKHLP2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvfWy2BWQhsmJwII%2Flk5PhT%2FNxcWZoaL2OdkvsBJi%2F%2BAiBCN%2FJEYHXcbEhiAfH9heRFW97Tr1PsDEP83Ek%2BwK0%2F0CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0rSWXrJEOigKIVfVKtwDQR5Cn5atBQqNpPyqaHe9eOSod%2BlvQE5meCnZ0ENO4IHsNOxrMdYTBiPqfDF9D6dfPjaTRcgCwz3AiEgJdRgPDmNSbSxlltuUEvpcjOpV87kNX6ckLc2F7sSp3uNY0af6TQSgOouOFIRYaOQbfDsYM6FkyjlROlHkcAbLhBvUAcIf62yDBK30Ux4RoODQIkIsg2xweRhuafPmQ0mLfx8tHO5Q3uzYVK%2FLKa2ZicOXPpZOPyA9dhQt2KLBxctDC4sVj%2BZ1M5MsfOVgFoAh1m6L%2FipMxzalyXQExsLTxURrOs%2BSPRwkh2hBM5n5vCFowwKIERx4NqlOfsBwIK9Qznx1J4CLvnTntfsuDifJ1NDalSJnNjTaNeYUvcjjeD6WcrR7ai3UG%2Bk4%2FT3RA8CId2t9%2BPk632QZgDBvPCIorQKeIXCngnGMh3pO18K0LEA4HhjwLfssiBWQm7BTHE%2BMJFAMUnE%2F7blKcH5kIRqqWRLwefXtuWVcRxxUl63GSFniLQRLnVMBjBK%2BmdCoKnrPmGpo3HMyoV3xxnMwveMdZcxmEE4hfLLze3%2FVxUhCSEWmEM%2FXUfEYAht4%2F1C21%2FwX0D%2FB%2B5i4%2B0ibO7%2FG%2Fh%2F3Udm8Qrwf%2BMS5jlRiwHPuEBgwv%2FiUvgY6pgHLwgKvEdZKfRznVN82wKC5TEQHQ9B%2BfsuH6eJ7weO8OFtv1PYPKqkG8Z6pWgNQg8uwAhkoTP4waad1bLm0d%2Bb%2FEi%2BoDYndpaesCwwBHyTW1kZZtoQDOEBAkbTvOLXUbl2VlqbP8Q7FD1o6kFkrub%2BqHBKTVj1IFHRH6ba9%2FUWEGWmMbsPl%2B1b7hvsXudmkX7hQza13NECxeAV2Xw4JsTRomJGMr1nV&X-Amz-Signature=529656383bac357499db21b33cafebf9c862564009657a095e6f3778e6fab70c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXDKHLP2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvfWy2BWQhsmJwII%2Flk5PhT%2FNxcWZoaL2OdkvsBJi%2F%2BAiBCN%2FJEYHXcbEhiAfH9heRFW97Tr1PsDEP83Ek%2BwK0%2F0CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0rSWXrJEOigKIVfVKtwDQR5Cn5atBQqNpPyqaHe9eOSod%2BlvQE5meCnZ0ENO4IHsNOxrMdYTBiPqfDF9D6dfPjaTRcgCwz3AiEgJdRgPDmNSbSxlltuUEvpcjOpV87kNX6ckLc2F7sSp3uNY0af6TQSgOouOFIRYaOQbfDsYM6FkyjlROlHkcAbLhBvUAcIf62yDBK30Ux4RoODQIkIsg2xweRhuafPmQ0mLfx8tHO5Q3uzYVK%2FLKa2ZicOXPpZOPyA9dhQt2KLBxctDC4sVj%2BZ1M5MsfOVgFoAh1m6L%2FipMxzalyXQExsLTxURrOs%2BSPRwkh2hBM5n5vCFowwKIERx4NqlOfsBwIK9Qznx1J4CLvnTntfsuDifJ1NDalSJnNjTaNeYUvcjjeD6WcrR7ai3UG%2Bk4%2FT3RA8CId2t9%2BPk632QZgDBvPCIorQKeIXCngnGMh3pO18K0LEA4HhjwLfssiBWQm7BTHE%2BMJFAMUnE%2F7blKcH5kIRqqWRLwefXtuWVcRxxUl63GSFniLQRLnVMBjBK%2BmdCoKnrPmGpo3HMyoV3xxnMwveMdZcxmEE4hfLLze3%2FVxUhCSEWmEM%2FXUfEYAht4%2F1C21%2FwX0D%2FB%2B5i4%2B0ibO7%2FG%2Fh%2F3Udm8Qrwf%2BMS5jlRiwHPuEBgwv%2FiUvgY6pgHLwgKvEdZKfRznVN82wKC5TEQHQ9B%2BfsuH6eJ7weO8OFtv1PYPKqkG8Z6pWgNQg8uwAhkoTP4waad1bLm0d%2Bb%2FEi%2BoDYndpaesCwwBHyTW1kZZtoQDOEBAkbTvOLXUbl2VlqbP8Q7FD1o6kFkrub%2BqHBKTVj1IFHRH6ba9%2FUWEGWmMbsPl%2B1b7hvsXudmkX7hQza13NECxeAV2Xw4JsTRomJGMr1nV&X-Amz-Signature=2849023f216b38ef82b344a974e466642f0375b449ce8ade73e920adce49aaf6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXDKHLP2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvfWy2BWQhsmJwII%2Flk5PhT%2FNxcWZoaL2OdkvsBJi%2F%2BAiBCN%2FJEYHXcbEhiAfH9heRFW97Tr1PsDEP83Ek%2BwK0%2F0CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0rSWXrJEOigKIVfVKtwDQR5Cn5atBQqNpPyqaHe9eOSod%2BlvQE5meCnZ0ENO4IHsNOxrMdYTBiPqfDF9D6dfPjaTRcgCwz3AiEgJdRgPDmNSbSxlltuUEvpcjOpV87kNX6ckLc2F7sSp3uNY0af6TQSgOouOFIRYaOQbfDsYM6FkyjlROlHkcAbLhBvUAcIf62yDBK30Ux4RoODQIkIsg2xweRhuafPmQ0mLfx8tHO5Q3uzYVK%2FLKa2ZicOXPpZOPyA9dhQt2KLBxctDC4sVj%2BZ1M5MsfOVgFoAh1m6L%2FipMxzalyXQExsLTxURrOs%2BSPRwkh2hBM5n5vCFowwKIERx4NqlOfsBwIK9Qznx1J4CLvnTntfsuDifJ1NDalSJnNjTaNeYUvcjjeD6WcrR7ai3UG%2Bk4%2FT3RA8CId2t9%2BPk632QZgDBvPCIorQKeIXCngnGMh3pO18K0LEA4HhjwLfssiBWQm7BTHE%2BMJFAMUnE%2F7blKcH5kIRqqWRLwefXtuWVcRxxUl63GSFniLQRLnVMBjBK%2BmdCoKnrPmGpo3HMyoV3xxnMwveMdZcxmEE4hfLLze3%2FVxUhCSEWmEM%2FXUfEYAht4%2F1C21%2FwX0D%2FB%2B5i4%2B0ibO7%2FG%2Fh%2F3Udm8Qrwf%2BMS5jlRiwHPuEBgwv%2FiUvgY6pgHLwgKvEdZKfRznVN82wKC5TEQHQ9B%2BfsuH6eJ7weO8OFtv1PYPKqkG8Z6pWgNQg8uwAhkoTP4waad1bLm0d%2Bb%2FEi%2BoDYndpaesCwwBHyTW1kZZtoQDOEBAkbTvOLXUbl2VlqbP8Q7FD1o6kFkrub%2BqHBKTVj1IFHRH6ba9%2FUWEGWmMbsPl%2B1b7hvsXudmkX7hQza13NECxeAV2Xw4JsTRomJGMr1nV&X-Amz-Signature=4fc7975d08353dbcb1dad0d4e8c898848061270cb5fb34ffefd99de3eb579e17&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXDKHLP2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvfWy2BWQhsmJwII%2Flk5PhT%2FNxcWZoaL2OdkvsBJi%2F%2BAiBCN%2FJEYHXcbEhiAfH9heRFW97Tr1PsDEP83Ek%2BwK0%2F0CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0rSWXrJEOigKIVfVKtwDQR5Cn5atBQqNpPyqaHe9eOSod%2BlvQE5meCnZ0ENO4IHsNOxrMdYTBiPqfDF9D6dfPjaTRcgCwz3AiEgJdRgPDmNSbSxlltuUEvpcjOpV87kNX6ckLc2F7sSp3uNY0af6TQSgOouOFIRYaOQbfDsYM6FkyjlROlHkcAbLhBvUAcIf62yDBK30Ux4RoODQIkIsg2xweRhuafPmQ0mLfx8tHO5Q3uzYVK%2FLKa2ZicOXPpZOPyA9dhQt2KLBxctDC4sVj%2BZ1M5MsfOVgFoAh1m6L%2FipMxzalyXQExsLTxURrOs%2BSPRwkh2hBM5n5vCFowwKIERx4NqlOfsBwIK9Qznx1J4CLvnTntfsuDifJ1NDalSJnNjTaNeYUvcjjeD6WcrR7ai3UG%2Bk4%2FT3RA8CId2t9%2BPk632QZgDBvPCIorQKeIXCngnGMh3pO18K0LEA4HhjwLfssiBWQm7BTHE%2BMJFAMUnE%2F7blKcH5kIRqqWRLwefXtuWVcRxxUl63GSFniLQRLnVMBjBK%2BmdCoKnrPmGpo3HMyoV3xxnMwveMdZcxmEE4hfLLze3%2FVxUhCSEWmEM%2FXUfEYAht4%2F1C21%2FwX0D%2FB%2B5i4%2B0ibO7%2FG%2Fh%2F3Udm8Qrwf%2BMS5jlRiwHPuEBgwv%2FiUvgY6pgHLwgKvEdZKfRznVN82wKC5TEQHQ9B%2BfsuH6eJ7weO8OFtv1PYPKqkG8Z6pWgNQg8uwAhkoTP4waad1bLm0d%2Bb%2FEi%2BoDYndpaesCwwBHyTW1kZZtoQDOEBAkbTvOLXUbl2VlqbP8Q7FD1o6kFkrub%2BqHBKTVj1IFHRH6ba9%2FUWEGWmMbsPl%2B1b7hvsXudmkX7hQza13NECxeAV2Xw4JsTRomJGMr1nV&X-Amz-Signature=dc6d9baaba092ecfd36441fc4a6806ea8cb81645c9ab05c0e8779194f0f49f08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXDKHLP2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvfWy2BWQhsmJwII%2Flk5PhT%2FNxcWZoaL2OdkvsBJi%2F%2BAiBCN%2FJEYHXcbEhiAfH9heRFW97Tr1PsDEP83Ek%2BwK0%2F0CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0rSWXrJEOigKIVfVKtwDQR5Cn5atBQqNpPyqaHe9eOSod%2BlvQE5meCnZ0ENO4IHsNOxrMdYTBiPqfDF9D6dfPjaTRcgCwz3AiEgJdRgPDmNSbSxlltuUEvpcjOpV87kNX6ckLc2F7sSp3uNY0af6TQSgOouOFIRYaOQbfDsYM6FkyjlROlHkcAbLhBvUAcIf62yDBK30Ux4RoODQIkIsg2xweRhuafPmQ0mLfx8tHO5Q3uzYVK%2FLKa2ZicOXPpZOPyA9dhQt2KLBxctDC4sVj%2BZ1M5MsfOVgFoAh1m6L%2FipMxzalyXQExsLTxURrOs%2BSPRwkh2hBM5n5vCFowwKIERx4NqlOfsBwIK9Qznx1J4CLvnTntfsuDifJ1NDalSJnNjTaNeYUvcjjeD6WcrR7ai3UG%2Bk4%2FT3RA8CId2t9%2BPk632QZgDBvPCIorQKeIXCngnGMh3pO18K0LEA4HhjwLfssiBWQm7BTHE%2BMJFAMUnE%2F7blKcH5kIRqqWRLwefXtuWVcRxxUl63GSFniLQRLnVMBjBK%2BmdCoKnrPmGpo3HMyoV3xxnMwveMdZcxmEE4hfLLze3%2FVxUhCSEWmEM%2FXUfEYAht4%2F1C21%2FwX0D%2FB%2B5i4%2B0ibO7%2FG%2Fh%2F3Udm8Qrwf%2BMS5jlRiwHPuEBgwv%2FiUvgY6pgHLwgKvEdZKfRznVN82wKC5TEQHQ9B%2BfsuH6eJ7weO8OFtv1PYPKqkG8Z6pWgNQg8uwAhkoTP4waad1bLm0d%2Bb%2FEi%2BoDYndpaesCwwBHyTW1kZZtoQDOEBAkbTvOLXUbl2VlqbP8Q7FD1o6kFkrub%2BqHBKTVj1IFHRH6ba9%2FUWEGWmMbsPl%2B1b7hvsXudmkX7hQza13NECxeAV2Xw4JsTRomJGMr1nV&X-Amz-Signature=dbe10441aa25ce5f988ccbbdd810fe0a9e72261ef026bc58427bbda5297f28b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXDKHLP2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvfWy2BWQhsmJwII%2Flk5PhT%2FNxcWZoaL2OdkvsBJi%2F%2BAiBCN%2FJEYHXcbEhiAfH9heRFW97Tr1PsDEP83Ek%2BwK0%2F0CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0rSWXrJEOigKIVfVKtwDQR5Cn5atBQqNpPyqaHe9eOSod%2BlvQE5meCnZ0ENO4IHsNOxrMdYTBiPqfDF9D6dfPjaTRcgCwz3AiEgJdRgPDmNSbSxlltuUEvpcjOpV87kNX6ckLc2F7sSp3uNY0af6TQSgOouOFIRYaOQbfDsYM6FkyjlROlHkcAbLhBvUAcIf62yDBK30Ux4RoODQIkIsg2xweRhuafPmQ0mLfx8tHO5Q3uzYVK%2FLKa2ZicOXPpZOPyA9dhQt2KLBxctDC4sVj%2BZ1M5MsfOVgFoAh1m6L%2FipMxzalyXQExsLTxURrOs%2BSPRwkh2hBM5n5vCFowwKIERx4NqlOfsBwIK9Qznx1J4CLvnTntfsuDifJ1NDalSJnNjTaNeYUvcjjeD6WcrR7ai3UG%2Bk4%2FT3RA8CId2t9%2BPk632QZgDBvPCIorQKeIXCngnGMh3pO18K0LEA4HhjwLfssiBWQm7BTHE%2BMJFAMUnE%2F7blKcH5kIRqqWRLwefXtuWVcRxxUl63GSFniLQRLnVMBjBK%2BmdCoKnrPmGpo3HMyoV3xxnMwveMdZcxmEE4hfLLze3%2FVxUhCSEWmEM%2FXUfEYAht4%2F1C21%2FwX0D%2FB%2B5i4%2B0ibO7%2FG%2Fh%2F3Udm8Qrwf%2BMS5jlRiwHPuEBgwv%2FiUvgY6pgHLwgKvEdZKfRznVN82wKC5TEQHQ9B%2BfsuH6eJ7weO8OFtv1PYPKqkG8Z6pWgNQg8uwAhkoTP4waad1bLm0d%2Bb%2FEi%2BoDYndpaesCwwBHyTW1kZZtoQDOEBAkbTvOLXUbl2VlqbP8Q7FD1o6kFkrub%2BqHBKTVj1IFHRH6ba9%2FUWEGWmMbsPl%2B1b7hvsXudmkX7hQza13NECxeAV2Xw4JsTRomJGMr1nV&X-Amz-Signature=3571ef533ee3117b29389f0ac8218f4dc854dbb926b74a016ae444f957a4adff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXDKHLP2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvfWy2BWQhsmJwII%2Flk5PhT%2FNxcWZoaL2OdkvsBJi%2F%2BAiBCN%2FJEYHXcbEhiAfH9heRFW97Tr1PsDEP83Ek%2BwK0%2F0CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0rSWXrJEOigKIVfVKtwDQR5Cn5atBQqNpPyqaHe9eOSod%2BlvQE5meCnZ0ENO4IHsNOxrMdYTBiPqfDF9D6dfPjaTRcgCwz3AiEgJdRgPDmNSbSxlltuUEvpcjOpV87kNX6ckLc2F7sSp3uNY0af6TQSgOouOFIRYaOQbfDsYM6FkyjlROlHkcAbLhBvUAcIf62yDBK30Ux4RoODQIkIsg2xweRhuafPmQ0mLfx8tHO5Q3uzYVK%2FLKa2ZicOXPpZOPyA9dhQt2KLBxctDC4sVj%2BZ1M5MsfOVgFoAh1m6L%2FipMxzalyXQExsLTxURrOs%2BSPRwkh2hBM5n5vCFowwKIERx4NqlOfsBwIK9Qznx1J4CLvnTntfsuDifJ1NDalSJnNjTaNeYUvcjjeD6WcrR7ai3UG%2Bk4%2FT3RA8CId2t9%2BPk632QZgDBvPCIorQKeIXCngnGMh3pO18K0LEA4HhjwLfssiBWQm7BTHE%2BMJFAMUnE%2F7blKcH5kIRqqWRLwefXtuWVcRxxUl63GSFniLQRLnVMBjBK%2BmdCoKnrPmGpo3HMyoV3xxnMwveMdZcxmEE4hfLLze3%2FVxUhCSEWmEM%2FXUfEYAht4%2F1C21%2FwX0D%2FB%2B5i4%2B0ibO7%2FG%2Fh%2F3Udm8Qrwf%2BMS5jlRiwHPuEBgwv%2FiUvgY6pgHLwgKvEdZKfRznVN82wKC5TEQHQ9B%2BfsuH6eJ7weO8OFtv1PYPKqkG8Z6pWgNQg8uwAhkoTP4waad1bLm0d%2Bb%2FEi%2BoDYndpaesCwwBHyTW1kZZtoQDOEBAkbTvOLXUbl2VlqbP8Q7FD1o6kFkrub%2BqHBKTVj1IFHRH6ba9%2FUWEGWmMbsPl%2B1b7hvsXudmkX7hQza13NECxeAV2Xw4JsTRomJGMr1nV&X-Amz-Signature=c77f638c642338dbf05a7a8dbdff0dcac18fa81bd963240661c0817d2033dfff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
