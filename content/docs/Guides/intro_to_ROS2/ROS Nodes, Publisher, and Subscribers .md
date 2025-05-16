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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCOR7RLF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClf3B%2B1Nf4Lazj1w4%2F5sAA3Y5%2B7HJIuFjOc0Mtj8mkXAiAutIggeEhlIQCciHd2ooyOUPYlzZ8yAJVNWNfVQhjjZSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtwzwAMNmAtCdrLR8KtwD9OUmhRJq1nVGPqICzraYZBQxYk2kZjvim78ictgMWaV69%2BNAyJ0QUYwZzVwRFWBAGc3EWB3e7oxy%2BXU%2B4oxOC4wrFtVNbbl4qlceEDuAJrxRpUD4WmEYU4R%2FsksOR7YdE2IO8s55Km%2Fz8MihkCZmvBSd%2BWbrbfvUZopmg%2FIVkCS%2FOlJTGPbcA%2B4VUK0R3324jqZzjF9U4t4otKrhXP0Qx%2B2HpD6jS%2BCfCp5DilT8PmZS7u9ecQGdeoPv987HP%2B%2BfJd0RwckzxcVX6prGpZ%2F7RHYInUdcNvEQ33vksXP187T6PaRc9koPhRYxg0kAxHzRNZpid7cylWd%2B9JM9XOoc7E9JFFS2Mul5Wye3kw4I0J3Net5Dv6uNITpgVdJYs5%2BzkTKDfUZLBn%2FU%2BfQqDWjq95qAIVGuJAwv2sUTY3%2Fo5glRBFQY%2Br5X5GaK6N4ErXHyd%2BdAreDRvXe4MF0kdTM5yWO4xVR9uGQElKY11aaysARMV2SUVaSYj9DgqOghtYJux9e8VK2SmJAbGhkD1j2umDzfhWNrqji3B809nZ%2Bc8HXh6vhiL%2ByLlYDrk0TqByCXNn7IOOWpnjx6StevlmmAMA4GyvQ%2FErOaOg%2BPX4jSO8Wuam7TvRZTCVTl0bIw2bmbwQY6pgEtC0m7kdema%2BiiG9SAHSw6nvdKFFm6PUWNZTdRMr59d81tFKfnriKGp%2BHw2LzrQ%2Bg7ue3wpF7%2B4V8Qq8iyrq8BglN0yLEb5sbHXgl8CDcPASYZZO%2FKsec6QwMNUeIrhmm1I%2B6SL52ZECdu%2B%2FDJHyNaJuwlggFqZuzDp1OA%2FiANnzF1Jk98p%2BC2A9Px1hv9pWYCc0eq%2FTCZl1XWY0V22MEFJwXNLcDL&X-Amz-Signature=75e7c09708b7d0be6e98a7ffa348c27f586c1174083961045ce161d6f446aac4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCOR7RLF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClf3B%2B1Nf4Lazj1w4%2F5sAA3Y5%2B7HJIuFjOc0Mtj8mkXAiAutIggeEhlIQCciHd2ooyOUPYlzZ8yAJVNWNfVQhjjZSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtwzwAMNmAtCdrLR8KtwD9OUmhRJq1nVGPqICzraYZBQxYk2kZjvim78ictgMWaV69%2BNAyJ0QUYwZzVwRFWBAGc3EWB3e7oxy%2BXU%2B4oxOC4wrFtVNbbl4qlceEDuAJrxRpUD4WmEYU4R%2FsksOR7YdE2IO8s55Km%2Fz8MihkCZmvBSd%2BWbrbfvUZopmg%2FIVkCS%2FOlJTGPbcA%2B4VUK0R3324jqZzjF9U4t4otKrhXP0Qx%2B2HpD6jS%2BCfCp5DilT8PmZS7u9ecQGdeoPv987HP%2B%2BfJd0RwckzxcVX6prGpZ%2F7RHYInUdcNvEQ33vksXP187T6PaRc9koPhRYxg0kAxHzRNZpid7cylWd%2B9JM9XOoc7E9JFFS2Mul5Wye3kw4I0J3Net5Dv6uNITpgVdJYs5%2BzkTKDfUZLBn%2FU%2BfQqDWjq95qAIVGuJAwv2sUTY3%2Fo5glRBFQY%2Br5X5GaK6N4ErXHyd%2BdAreDRvXe4MF0kdTM5yWO4xVR9uGQElKY11aaysARMV2SUVaSYj9DgqOghtYJux9e8VK2SmJAbGhkD1j2umDzfhWNrqji3B809nZ%2Bc8HXh6vhiL%2ByLlYDrk0TqByCXNn7IOOWpnjx6StevlmmAMA4GyvQ%2FErOaOg%2BPX4jSO8Wuam7TvRZTCVTl0bIw2bmbwQY6pgEtC0m7kdema%2BiiG9SAHSw6nvdKFFm6PUWNZTdRMr59d81tFKfnriKGp%2BHw2LzrQ%2Bg7ue3wpF7%2B4V8Qq8iyrq8BglN0yLEb5sbHXgl8CDcPASYZZO%2FKsec6QwMNUeIrhmm1I%2B6SL52ZECdu%2B%2FDJHyNaJuwlggFqZuzDp1OA%2FiANnzF1Jk98p%2BC2A9Px1hv9pWYCc0eq%2FTCZl1XWY0V22MEFJwXNLcDL&X-Amz-Signature=13f4d019086a25d9ba71e4bd9b61e5fce98daf5a6fa8d8d2a89cc22fd9b1c118&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCOR7RLF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClf3B%2B1Nf4Lazj1w4%2F5sAA3Y5%2B7HJIuFjOc0Mtj8mkXAiAutIggeEhlIQCciHd2ooyOUPYlzZ8yAJVNWNfVQhjjZSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtwzwAMNmAtCdrLR8KtwD9OUmhRJq1nVGPqICzraYZBQxYk2kZjvim78ictgMWaV69%2BNAyJ0QUYwZzVwRFWBAGc3EWB3e7oxy%2BXU%2B4oxOC4wrFtVNbbl4qlceEDuAJrxRpUD4WmEYU4R%2FsksOR7YdE2IO8s55Km%2Fz8MihkCZmvBSd%2BWbrbfvUZopmg%2FIVkCS%2FOlJTGPbcA%2B4VUK0R3324jqZzjF9U4t4otKrhXP0Qx%2B2HpD6jS%2BCfCp5DilT8PmZS7u9ecQGdeoPv987HP%2B%2BfJd0RwckzxcVX6prGpZ%2F7RHYInUdcNvEQ33vksXP187T6PaRc9koPhRYxg0kAxHzRNZpid7cylWd%2B9JM9XOoc7E9JFFS2Mul5Wye3kw4I0J3Net5Dv6uNITpgVdJYs5%2BzkTKDfUZLBn%2FU%2BfQqDWjq95qAIVGuJAwv2sUTY3%2Fo5glRBFQY%2Br5X5GaK6N4ErXHyd%2BdAreDRvXe4MF0kdTM5yWO4xVR9uGQElKY11aaysARMV2SUVaSYj9DgqOghtYJux9e8VK2SmJAbGhkD1j2umDzfhWNrqji3B809nZ%2Bc8HXh6vhiL%2ByLlYDrk0TqByCXNn7IOOWpnjx6StevlmmAMA4GyvQ%2FErOaOg%2BPX4jSO8Wuam7TvRZTCVTl0bIw2bmbwQY6pgEtC0m7kdema%2BiiG9SAHSw6nvdKFFm6PUWNZTdRMr59d81tFKfnriKGp%2BHw2LzrQ%2Bg7ue3wpF7%2B4V8Qq8iyrq8BglN0yLEb5sbHXgl8CDcPASYZZO%2FKsec6QwMNUeIrhmm1I%2B6SL52ZECdu%2B%2FDJHyNaJuwlggFqZuzDp1OA%2FiANnzF1Jk98p%2BC2A9Px1hv9pWYCc0eq%2FTCZl1XWY0V22MEFJwXNLcDL&X-Amz-Signature=17972d9b808763d3645eb68a496927cb8067b1f787eb5b9fb1743ae1dbcc23f2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCOR7RLF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClf3B%2B1Nf4Lazj1w4%2F5sAA3Y5%2B7HJIuFjOc0Mtj8mkXAiAutIggeEhlIQCciHd2ooyOUPYlzZ8yAJVNWNfVQhjjZSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtwzwAMNmAtCdrLR8KtwD9OUmhRJq1nVGPqICzraYZBQxYk2kZjvim78ictgMWaV69%2BNAyJ0QUYwZzVwRFWBAGc3EWB3e7oxy%2BXU%2B4oxOC4wrFtVNbbl4qlceEDuAJrxRpUD4WmEYU4R%2FsksOR7YdE2IO8s55Km%2Fz8MihkCZmvBSd%2BWbrbfvUZopmg%2FIVkCS%2FOlJTGPbcA%2B4VUK0R3324jqZzjF9U4t4otKrhXP0Qx%2B2HpD6jS%2BCfCp5DilT8PmZS7u9ecQGdeoPv987HP%2B%2BfJd0RwckzxcVX6prGpZ%2F7RHYInUdcNvEQ33vksXP187T6PaRc9koPhRYxg0kAxHzRNZpid7cylWd%2B9JM9XOoc7E9JFFS2Mul5Wye3kw4I0J3Net5Dv6uNITpgVdJYs5%2BzkTKDfUZLBn%2FU%2BfQqDWjq95qAIVGuJAwv2sUTY3%2Fo5glRBFQY%2Br5X5GaK6N4ErXHyd%2BdAreDRvXe4MF0kdTM5yWO4xVR9uGQElKY11aaysARMV2SUVaSYj9DgqOghtYJux9e8VK2SmJAbGhkD1j2umDzfhWNrqji3B809nZ%2Bc8HXh6vhiL%2ByLlYDrk0TqByCXNn7IOOWpnjx6StevlmmAMA4GyvQ%2FErOaOg%2BPX4jSO8Wuam7TvRZTCVTl0bIw2bmbwQY6pgEtC0m7kdema%2BiiG9SAHSw6nvdKFFm6PUWNZTdRMr59d81tFKfnriKGp%2BHw2LzrQ%2Bg7ue3wpF7%2B4V8Qq8iyrq8BglN0yLEb5sbHXgl8CDcPASYZZO%2FKsec6QwMNUeIrhmm1I%2B6SL52ZECdu%2B%2FDJHyNaJuwlggFqZuzDp1OA%2FiANnzF1Jk98p%2BC2A9Px1hv9pWYCc0eq%2FTCZl1XWY0V22MEFJwXNLcDL&X-Amz-Signature=96b6e26eb36a1d1bed55040fd4131bd2aea45f00b519d18d78603f3bd6a86f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCOR7RLF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClf3B%2B1Nf4Lazj1w4%2F5sAA3Y5%2B7HJIuFjOc0Mtj8mkXAiAutIggeEhlIQCciHd2ooyOUPYlzZ8yAJVNWNfVQhjjZSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtwzwAMNmAtCdrLR8KtwD9OUmhRJq1nVGPqICzraYZBQxYk2kZjvim78ictgMWaV69%2BNAyJ0QUYwZzVwRFWBAGc3EWB3e7oxy%2BXU%2B4oxOC4wrFtVNbbl4qlceEDuAJrxRpUD4WmEYU4R%2FsksOR7YdE2IO8s55Km%2Fz8MihkCZmvBSd%2BWbrbfvUZopmg%2FIVkCS%2FOlJTGPbcA%2B4VUK0R3324jqZzjF9U4t4otKrhXP0Qx%2B2HpD6jS%2BCfCp5DilT8PmZS7u9ecQGdeoPv987HP%2B%2BfJd0RwckzxcVX6prGpZ%2F7RHYInUdcNvEQ33vksXP187T6PaRc9koPhRYxg0kAxHzRNZpid7cylWd%2B9JM9XOoc7E9JFFS2Mul5Wye3kw4I0J3Net5Dv6uNITpgVdJYs5%2BzkTKDfUZLBn%2FU%2BfQqDWjq95qAIVGuJAwv2sUTY3%2Fo5glRBFQY%2Br5X5GaK6N4ErXHyd%2BdAreDRvXe4MF0kdTM5yWO4xVR9uGQElKY11aaysARMV2SUVaSYj9DgqOghtYJux9e8VK2SmJAbGhkD1j2umDzfhWNrqji3B809nZ%2Bc8HXh6vhiL%2ByLlYDrk0TqByCXNn7IOOWpnjx6StevlmmAMA4GyvQ%2FErOaOg%2BPX4jSO8Wuam7TvRZTCVTl0bIw2bmbwQY6pgEtC0m7kdema%2BiiG9SAHSw6nvdKFFm6PUWNZTdRMr59d81tFKfnriKGp%2BHw2LzrQ%2Bg7ue3wpF7%2B4V8Qq8iyrq8BglN0yLEb5sbHXgl8CDcPASYZZO%2FKsec6QwMNUeIrhmm1I%2B6SL52ZECdu%2B%2FDJHyNaJuwlggFqZuzDp1OA%2FiANnzF1Jk98p%2BC2A9Px1hv9pWYCc0eq%2FTCZl1XWY0V22MEFJwXNLcDL&X-Amz-Signature=8b1cd95931c328172391b03029b9f691bf4ccb74668a46e3b40ea3f0777ab47e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCOR7RLF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClf3B%2B1Nf4Lazj1w4%2F5sAA3Y5%2B7HJIuFjOc0Mtj8mkXAiAutIggeEhlIQCciHd2ooyOUPYlzZ8yAJVNWNfVQhjjZSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtwzwAMNmAtCdrLR8KtwD9OUmhRJq1nVGPqICzraYZBQxYk2kZjvim78ictgMWaV69%2BNAyJ0QUYwZzVwRFWBAGc3EWB3e7oxy%2BXU%2B4oxOC4wrFtVNbbl4qlceEDuAJrxRpUD4WmEYU4R%2FsksOR7YdE2IO8s55Km%2Fz8MihkCZmvBSd%2BWbrbfvUZopmg%2FIVkCS%2FOlJTGPbcA%2B4VUK0R3324jqZzjF9U4t4otKrhXP0Qx%2B2HpD6jS%2BCfCp5DilT8PmZS7u9ecQGdeoPv987HP%2B%2BfJd0RwckzxcVX6prGpZ%2F7RHYInUdcNvEQ33vksXP187T6PaRc9koPhRYxg0kAxHzRNZpid7cylWd%2B9JM9XOoc7E9JFFS2Mul5Wye3kw4I0J3Net5Dv6uNITpgVdJYs5%2BzkTKDfUZLBn%2FU%2BfQqDWjq95qAIVGuJAwv2sUTY3%2Fo5glRBFQY%2Br5X5GaK6N4ErXHyd%2BdAreDRvXe4MF0kdTM5yWO4xVR9uGQElKY11aaysARMV2SUVaSYj9DgqOghtYJux9e8VK2SmJAbGhkD1j2umDzfhWNrqji3B809nZ%2Bc8HXh6vhiL%2ByLlYDrk0TqByCXNn7IOOWpnjx6StevlmmAMA4GyvQ%2FErOaOg%2BPX4jSO8Wuam7TvRZTCVTl0bIw2bmbwQY6pgEtC0m7kdema%2BiiG9SAHSw6nvdKFFm6PUWNZTdRMr59d81tFKfnriKGp%2BHw2LzrQ%2Bg7ue3wpF7%2B4V8Qq8iyrq8BglN0yLEb5sbHXgl8CDcPASYZZO%2FKsec6QwMNUeIrhmm1I%2B6SL52ZECdu%2B%2FDJHyNaJuwlggFqZuzDp1OA%2FiANnzF1Jk98p%2BC2A9Px1hv9pWYCc0eq%2FTCZl1XWY0V22MEFJwXNLcDL&X-Amz-Signature=3fd216199e5f2ceba76722a8f997bf72148703efc27980a3dbc741c6f0aa538f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCOR7RLF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClf3B%2B1Nf4Lazj1w4%2F5sAA3Y5%2B7HJIuFjOc0Mtj8mkXAiAutIggeEhlIQCciHd2ooyOUPYlzZ8yAJVNWNfVQhjjZSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtwzwAMNmAtCdrLR8KtwD9OUmhRJq1nVGPqICzraYZBQxYk2kZjvim78ictgMWaV69%2BNAyJ0QUYwZzVwRFWBAGc3EWB3e7oxy%2BXU%2B4oxOC4wrFtVNbbl4qlceEDuAJrxRpUD4WmEYU4R%2FsksOR7YdE2IO8s55Km%2Fz8MihkCZmvBSd%2BWbrbfvUZopmg%2FIVkCS%2FOlJTGPbcA%2B4VUK0R3324jqZzjF9U4t4otKrhXP0Qx%2B2HpD6jS%2BCfCp5DilT8PmZS7u9ecQGdeoPv987HP%2B%2BfJd0RwckzxcVX6prGpZ%2F7RHYInUdcNvEQ33vksXP187T6PaRc9koPhRYxg0kAxHzRNZpid7cylWd%2B9JM9XOoc7E9JFFS2Mul5Wye3kw4I0J3Net5Dv6uNITpgVdJYs5%2BzkTKDfUZLBn%2FU%2BfQqDWjq95qAIVGuJAwv2sUTY3%2Fo5glRBFQY%2Br5X5GaK6N4ErXHyd%2BdAreDRvXe4MF0kdTM5yWO4xVR9uGQElKY11aaysARMV2SUVaSYj9DgqOghtYJux9e8VK2SmJAbGhkD1j2umDzfhWNrqji3B809nZ%2Bc8HXh6vhiL%2ByLlYDrk0TqByCXNn7IOOWpnjx6StevlmmAMA4GyvQ%2FErOaOg%2BPX4jSO8Wuam7TvRZTCVTl0bIw2bmbwQY6pgEtC0m7kdema%2BiiG9SAHSw6nvdKFFm6PUWNZTdRMr59d81tFKfnriKGp%2BHw2LzrQ%2Bg7ue3wpF7%2B4V8Qq8iyrq8BglN0yLEb5sbHXgl8CDcPASYZZO%2FKsec6QwMNUeIrhmm1I%2B6SL52ZECdu%2B%2FDJHyNaJuwlggFqZuzDp1OA%2FiANnzF1Jk98p%2BC2A9Px1hv9pWYCc0eq%2FTCZl1XWY0V22MEFJwXNLcDL&X-Amz-Signature=83feb2d0c0693cd392a236549ff0bdfac2c7d4bb057ac543dd06831db035875b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCOR7RLF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClf3B%2B1Nf4Lazj1w4%2F5sAA3Y5%2B7HJIuFjOc0Mtj8mkXAiAutIggeEhlIQCciHd2ooyOUPYlzZ8yAJVNWNfVQhjjZSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtwzwAMNmAtCdrLR8KtwD9OUmhRJq1nVGPqICzraYZBQxYk2kZjvim78ictgMWaV69%2BNAyJ0QUYwZzVwRFWBAGc3EWB3e7oxy%2BXU%2B4oxOC4wrFtVNbbl4qlceEDuAJrxRpUD4WmEYU4R%2FsksOR7YdE2IO8s55Km%2Fz8MihkCZmvBSd%2BWbrbfvUZopmg%2FIVkCS%2FOlJTGPbcA%2B4VUK0R3324jqZzjF9U4t4otKrhXP0Qx%2B2HpD6jS%2BCfCp5DilT8PmZS7u9ecQGdeoPv987HP%2B%2BfJd0RwckzxcVX6prGpZ%2F7RHYInUdcNvEQ33vksXP187T6PaRc9koPhRYxg0kAxHzRNZpid7cylWd%2B9JM9XOoc7E9JFFS2Mul5Wye3kw4I0J3Net5Dv6uNITpgVdJYs5%2BzkTKDfUZLBn%2FU%2BfQqDWjq95qAIVGuJAwv2sUTY3%2Fo5glRBFQY%2Br5X5GaK6N4ErXHyd%2BdAreDRvXe4MF0kdTM5yWO4xVR9uGQElKY11aaysARMV2SUVaSYj9DgqOghtYJux9e8VK2SmJAbGhkD1j2umDzfhWNrqji3B809nZ%2Bc8HXh6vhiL%2ByLlYDrk0TqByCXNn7IOOWpnjx6StevlmmAMA4GyvQ%2FErOaOg%2BPX4jSO8Wuam7TvRZTCVTl0bIw2bmbwQY6pgEtC0m7kdema%2BiiG9SAHSw6nvdKFFm6PUWNZTdRMr59d81tFKfnriKGp%2BHw2LzrQ%2Bg7ue3wpF7%2B4V8Qq8iyrq8BglN0yLEb5sbHXgl8CDcPASYZZO%2FKsec6QwMNUeIrhmm1I%2B6SL52ZECdu%2B%2FDJHyNaJuwlggFqZuzDp1OA%2FiANnzF1Jk98p%2BC2A9Px1hv9pWYCc0eq%2FTCZl1XWY0V22MEFJwXNLcDL&X-Amz-Signature=3bb2e36ae62336453967ade4586da5b102c831708032b760a6a9a91eb571f6f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
