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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W3DY7DF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAycuSth7m9JWbDiNYc%2FCt0nYFhJTCY8hB2VWt6tX6cSAiBLYXZuPcSugwydGoz214eUuJa2Vvt%2FhKj365jiGPunWiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRe6cc5eWboboxnYZKtwDr6pa7MJvKGlBUtArTDwvWPc9DkFWkfSbfeT9t8jKzeofhZufKHgf3S%2FZ2sLkKDVxBcWW46iUXm%2FXsLeL4pvrlfkIzygzXHshoOSx3doArCszbAsrov2cSLqd9%2B1P%2Bg2FMj8NojDIPXHdAy6U9Zu4VnJQLUPHenPRZQtjAISlsHitv9bHVQAZrMhZKvYeGnVs%2FLZ8EhOqg2fwUJhboMW0BCFUPE94Zm01uxZij72a%2Fx1BZMK0MF0mTjkyWmEvDnMPJYSRCM47grhmNEzxHXmzqHQOUmAL5wZRFcPClm6ggoJD1SQZUVuZx5cHyP3CMcuIcb9G6v7QoanERS2menEwxbrGgtfOdK4L2wqgWR%2F973k2CtcUiywujU4RNplsWh8kVh63QMnwN0TgxezqCp%2FJ%2FzqEUjy2RYYWbFhVDxSgVqYaIBOwpatJj%2B6PNhqaCaVheJXNslgxOgAm4JbeM0w5YNVB9VtgVzIuFxUrj2EXAGuO5GyuYf6CA%2BGEwuutkxZFKnj4In6XKB8Gl%2BFQfh0VY4NbpSo%2BWFhUIhN7TmVtjFdEQl26vKrgS9TmIC7%2FgcTJTdmyIDgha4OR9ezpuSjYlx6qfITg%2BvQC%2BbaOnK8Ocitw3A29xWD1%2FbOK9m4w3%2BOyxAY6pgFzKI28I2UH5cSEQgitTUHuBEeP1AF1fixZARThl2KxFB10cPjqOWSy24ivFiykPFvQJzN3d%2Bfk7pt8Xx8JtLPPWa6xHaI6BcN1qIbNmDCSkC%2BO0D2dNH3CZccOhcbpI7giAwprNk7dr89i503HhO7WiPzpneg2tZwx6YxyZ6K6H0Uo4zkC8Vznd5Gob%2Ft5vlprwJaK7rq5iNzYQhvCuIqdHtz22xyC&X-Amz-Signature=46127123d970e8a6bdc7556d784a7cfdcd7ee883f14c943ccedc6a1a9fd784f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W3DY7DF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAycuSth7m9JWbDiNYc%2FCt0nYFhJTCY8hB2VWt6tX6cSAiBLYXZuPcSugwydGoz214eUuJa2Vvt%2FhKj365jiGPunWiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRe6cc5eWboboxnYZKtwDr6pa7MJvKGlBUtArTDwvWPc9DkFWkfSbfeT9t8jKzeofhZufKHgf3S%2FZ2sLkKDVxBcWW46iUXm%2FXsLeL4pvrlfkIzygzXHshoOSx3doArCszbAsrov2cSLqd9%2B1P%2Bg2FMj8NojDIPXHdAy6U9Zu4VnJQLUPHenPRZQtjAISlsHitv9bHVQAZrMhZKvYeGnVs%2FLZ8EhOqg2fwUJhboMW0BCFUPE94Zm01uxZij72a%2Fx1BZMK0MF0mTjkyWmEvDnMPJYSRCM47grhmNEzxHXmzqHQOUmAL5wZRFcPClm6ggoJD1SQZUVuZx5cHyP3CMcuIcb9G6v7QoanERS2menEwxbrGgtfOdK4L2wqgWR%2F973k2CtcUiywujU4RNplsWh8kVh63QMnwN0TgxezqCp%2FJ%2FzqEUjy2RYYWbFhVDxSgVqYaIBOwpatJj%2B6PNhqaCaVheJXNslgxOgAm4JbeM0w5YNVB9VtgVzIuFxUrj2EXAGuO5GyuYf6CA%2BGEwuutkxZFKnj4In6XKB8Gl%2BFQfh0VY4NbpSo%2BWFhUIhN7TmVtjFdEQl26vKrgS9TmIC7%2FgcTJTdmyIDgha4OR9ezpuSjYlx6qfITg%2BvQC%2BbaOnK8Ocitw3A29xWD1%2FbOK9m4w3%2BOyxAY6pgFzKI28I2UH5cSEQgitTUHuBEeP1AF1fixZARThl2KxFB10cPjqOWSy24ivFiykPFvQJzN3d%2Bfk7pt8Xx8JtLPPWa6xHaI6BcN1qIbNmDCSkC%2BO0D2dNH3CZccOhcbpI7giAwprNk7dr89i503HhO7WiPzpneg2tZwx6YxyZ6K6H0Uo4zkC8Vznd5Gob%2Ft5vlprwJaK7rq5iNzYQhvCuIqdHtz22xyC&X-Amz-Signature=62c6e349524507ee60039bce237d482b244d0c237162aa095c537bf3609d956a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W3DY7DF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAycuSth7m9JWbDiNYc%2FCt0nYFhJTCY8hB2VWt6tX6cSAiBLYXZuPcSugwydGoz214eUuJa2Vvt%2FhKj365jiGPunWiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRe6cc5eWboboxnYZKtwDr6pa7MJvKGlBUtArTDwvWPc9DkFWkfSbfeT9t8jKzeofhZufKHgf3S%2FZ2sLkKDVxBcWW46iUXm%2FXsLeL4pvrlfkIzygzXHshoOSx3doArCszbAsrov2cSLqd9%2B1P%2Bg2FMj8NojDIPXHdAy6U9Zu4VnJQLUPHenPRZQtjAISlsHitv9bHVQAZrMhZKvYeGnVs%2FLZ8EhOqg2fwUJhboMW0BCFUPE94Zm01uxZij72a%2Fx1BZMK0MF0mTjkyWmEvDnMPJYSRCM47grhmNEzxHXmzqHQOUmAL5wZRFcPClm6ggoJD1SQZUVuZx5cHyP3CMcuIcb9G6v7QoanERS2menEwxbrGgtfOdK4L2wqgWR%2F973k2CtcUiywujU4RNplsWh8kVh63QMnwN0TgxezqCp%2FJ%2FzqEUjy2RYYWbFhVDxSgVqYaIBOwpatJj%2B6PNhqaCaVheJXNslgxOgAm4JbeM0w5YNVB9VtgVzIuFxUrj2EXAGuO5GyuYf6CA%2BGEwuutkxZFKnj4In6XKB8Gl%2BFQfh0VY4NbpSo%2BWFhUIhN7TmVtjFdEQl26vKrgS9TmIC7%2FgcTJTdmyIDgha4OR9ezpuSjYlx6qfITg%2BvQC%2BbaOnK8Ocitw3A29xWD1%2FbOK9m4w3%2BOyxAY6pgFzKI28I2UH5cSEQgitTUHuBEeP1AF1fixZARThl2KxFB10cPjqOWSy24ivFiykPFvQJzN3d%2Bfk7pt8Xx8JtLPPWa6xHaI6BcN1qIbNmDCSkC%2BO0D2dNH3CZccOhcbpI7giAwprNk7dr89i503HhO7WiPzpneg2tZwx6YxyZ6K6H0Uo4zkC8Vznd5Gob%2Ft5vlprwJaK7rq5iNzYQhvCuIqdHtz22xyC&X-Amz-Signature=5a448b71f59cb991f9e21197971db8c8dafccf1043f9879d101b933dea5cfe2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W3DY7DF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAycuSth7m9JWbDiNYc%2FCt0nYFhJTCY8hB2VWt6tX6cSAiBLYXZuPcSugwydGoz214eUuJa2Vvt%2FhKj365jiGPunWiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRe6cc5eWboboxnYZKtwDr6pa7MJvKGlBUtArTDwvWPc9DkFWkfSbfeT9t8jKzeofhZufKHgf3S%2FZ2sLkKDVxBcWW46iUXm%2FXsLeL4pvrlfkIzygzXHshoOSx3doArCszbAsrov2cSLqd9%2B1P%2Bg2FMj8NojDIPXHdAy6U9Zu4VnJQLUPHenPRZQtjAISlsHitv9bHVQAZrMhZKvYeGnVs%2FLZ8EhOqg2fwUJhboMW0BCFUPE94Zm01uxZij72a%2Fx1BZMK0MF0mTjkyWmEvDnMPJYSRCM47grhmNEzxHXmzqHQOUmAL5wZRFcPClm6ggoJD1SQZUVuZx5cHyP3CMcuIcb9G6v7QoanERS2menEwxbrGgtfOdK4L2wqgWR%2F973k2CtcUiywujU4RNplsWh8kVh63QMnwN0TgxezqCp%2FJ%2FzqEUjy2RYYWbFhVDxSgVqYaIBOwpatJj%2B6PNhqaCaVheJXNslgxOgAm4JbeM0w5YNVB9VtgVzIuFxUrj2EXAGuO5GyuYf6CA%2BGEwuutkxZFKnj4In6XKB8Gl%2BFQfh0VY4NbpSo%2BWFhUIhN7TmVtjFdEQl26vKrgS9TmIC7%2FgcTJTdmyIDgha4OR9ezpuSjYlx6qfITg%2BvQC%2BbaOnK8Ocitw3A29xWD1%2FbOK9m4w3%2BOyxAY6pgFzKI28I2UH5cSEQgitTUHuBEeP1AF1fixZARThl2KxFB10cPjqOWSy24ivFiykPFvQJzN3d%2Bfk7pt8Xx8JtLPPWa6xHaI6BcN1qIbNmDCSkC%2BO0D2dNH3CZccOhcbpI7giAwprNk7dr89i503HhO7WiPzpneg2tZwx6YxyZ6K6H0Uo4zkC8Vznd5Gob%2Ft5vlprwJaK7rq5iNzYQhvCuIqdHtz22xyC&X-Amz-Signature=187faa28f03a3c9cc18b366226f4c3f12de7ad8f7b5245e24890b2978933e5ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W3DY7DF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAycuSth7m9JWbDiNYc%2FCt0nYFhJTCY8hB2VWt6tX6cSAiBLYXZuPcSugwydGoz214eUuJa2Vvt%2FhKj365jiGPunWiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRe6cc5eWboboxnYZKtwDr6pa7MJvKGlBUtArTDwvWPc9DkFWkfSbfeT9t8jKzeofhZufKHgf3S%2FZ2sLkKDVxBcWW46iUXm%2FXsLeL4pvrlfkIzygzXHshoOSx3doArCszbAsrov2cSLqd9%2B1P%2Bg2FMj8NojDIPXHdAy6U9Zu4VnJQLUPHenPRZQtjAISlsHitv9bHVQAZrMhZKvYeGnVs%2FLZ8EhOqg2fwUJhboMW0BCFUPE94Zm01uxZij72a%2Fx1BZMK0MF0mTjkyWmEvDnMPJYSRCM47grhmNEzxHXmzqHQOUmAL5wZRFcPClm6ggoJD1SQZUVuZx5cHyP3CMcuIcb9G6v7QoanERS2menEwxbrGgtfOdK4L2wqgWR%2F973k2CtcUiywujU4RNplsWh8kVh63QMnwN0TgxezqCp%2FJ%2FzqEUjy2RYYWbFhVDxSgVqYaIBOwpatJj%2B6PNhqaCaVheJXNslgxOgAm4JbeM0w5YNVB9VtgVzIuFxUrj2EXAGuO5GyuYf6CA%2BGEwuutkxZFKnj4In6XKB8Gl%2BFQfh0VY4NbpSo%2BWFhUIhN7TmVtjFdEQl26vKrgS9TmIC7%2FgcTJTdmyIDgha4OR9ezpuSjYlx6qfITg%2BvQC%2BbaOnK8Ocitw3A29xWD1%2FbOK9m4w3%2BOyxAY6pgFzKI28I2UH5cSEQgitTUHuBEeP1AF1fixZARThl2KxFB10cPjqOWSy24ivFiykPFvQJzN3d%2Bfk7pt8Xx8JtLPPWa6xHaI6BcN1qIbNmDCSkC%2BO0D2dNH3CZccOhcbpI7giAwprNk7dr89i503HhO7WiPzpneg2tZwx6YxyZ6K6H0Uo4zkC8Vznd5Gob%2Ft5vlprwJaK7rq5iNzYQhvCuIqdHtz22xyC&X-Amz-Signature=57eac0eb5eb3f19301e293986b4caad2f1d136ce213e4642c31cbd5980c595ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W3DY7DF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAycuSth7m9JWbDiNYc%2FCt0nYFhJTCY8hB2VWt6tX6cSAiBLYXZuPcSugwydGoz214eUuJa2Vvt%2FhKj365jiGPunWiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRe6cc5eWboboxnYZKtwDr6pa7MJvKGlBUtArTDwvWPc9DkFWkfSbfeT9t8jKzeofhZufKHgf3S%2FZ2sLkKDVxBcWW46iUXm%2FXsLeL4pvrlfkIzygzXHshoOSx3doArCszbAsrov2cSLqd9%2B1P%2Bg2FMj8NojDIPXHdAy6U9Zu4VnJQLUPHenPRZQtjAISlsHitv9bHVQAZrMhZKvYeGnVs%2FLZ8EhOqg2fwUJhboMW0BCFUPE94Zm01uxZij72a%2Fx1BZMK0MF0mTjkyWmEvDnMPJYSRCM47grhmNEzxHXmzqHQOUmAL5wZRFcPClm6ggoJD1SQZUVuZx5cHyP3CMcuIcb9G6v7QoanERS2menEwxbrGgtfOdK4L2wqgWR%2F973k2CtcUiywujU4RNplsWh8kVh63QMnwN0TgxezqCp%2FJ%2FzqEUjy2RYYWbFhVDxSgVqYaIBOwpatJj%2B6PNhqaCaVheJXNslgxOgAm4JbeM0w5YNVB9VtgVzIuFxUrj2EXAGuO5GyuYf6CA%2BGEwuutkxZFKnj4In6XKB8Gl%2BFQfh0VY4NbpSo%2BWFhUIhN7TmVtjFdEQl26vKrgS9TmIC7%2FgcTJTdmyIDgha4OR9ezpuSjYlx6qfITg%2BvQC%2BbaOnK8Ocitw3A29xWD1%2FbOK9m4w3%2BOyxAY6pgFzKI28I2UH5cSEQgitTUHuBEeP1AF1fixZARThl2KxFB10cPjqOWSy24ivFiykPFvQJzN3d%2Bfk7pt8Xx8JtLPPWa6xHaI6BcN1qIbNmDCSkC%2BO0D2dNH3CZccOhcbpI7giAwprNk7dr89i503HhO7WiPzpneg2tZwx6YxyZ6K6H0Uo4zkC8Vznd5Gob%2Ft5vlprwJaK7rq5iNzYQhvCuIqdHtz22xyC&X-Amz-Signature=9555014c2a18683d679cdef7bf1887df8a76e55eea221ab5a5f9c5cb371fa403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W3DY7DF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAycuSth7m9JWbDiNYc%2FCt0nYFhJTCY8hB2VWt6tX6cSAiBLYXZuPcSugwydGoz214eUuJa2Vvt%2FhKj365jiGPunWiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRe6cc5eWboboxnYZKtwDr6pa7MJvKGlBUtArTDwvWPc9DkFWkfSbfeT9t8jKzeofhZufKHgf3S%2FZ2sLkKDVxBcWW46iUXm%2FXsLeL4pvrlfkIzygzXHshoOSx3doArCszbAsrov2cSLqd9%2B1P%2Bg2FMj8NojDIPXHdAy6U9Zu4VnJQLUPHenPRZQtjAISlsHitv9bHVQAZrMhZKvYeGnVs%2FLZ8EhOqg2fwUJhboMW0BCFUPE94Zm01uxZij72a%2Fx1BZMK0MF0mTjkyWmEvDnMPJYSRCM47grhmNEzxHXmzqHQOUmAL5wZRFcPClm6ggoJD1SQZUVuZx5cHyP3CMcuIcb9G6v7QoanERS2menEwxbrGgtfOdK4L2wqgWR%2F973k2CtcUiywujU4RNplsWh8kVh63QMnwN0TgxezqCp%2FJ%2FzqEUjy2RYYWbFhVDxSgVqYaIBOwpatJj%2B6PNhqaCaVheJXNslgxOgAm4JbeM0w5YNVB9VtgVzIuFxUrj2EXAGuO5GyuYf6CA%2BGEwuutkxZFKnj4In6XKB8Gl%2BFQfh0VY4NbpSo%2BWFhUIhN7TmVtjFdEQl26vKrgS9TmIC7%2FgcTJTdmyIDgha4OR9ezpuSjYlx6qfITg%2BvQC%2BbaOnK8Ocitw3A29xWD1%2FbOK9m4w3%2BOyxAY6pgFzKI28I2UH5cSEQgitTUHuBEeP1AF1fixZARThl2KxFB10cPjqOWSy24ivFiykPFvQJzN3d%2Bfk7pt8Xx8JtLPPWa6xHaI6BcN1qIbNmDCSkC%2BO0D2dNH3CZccOhcbpI7giAwprNk7dr89i503HhO7WiPzpneg2tZwx6YxyZ6K6H0Uo4zkC8Vznd5Gob%2Ft5vlprwJaK7rq5iNzYQhvCuIqdHtz22xyC&X-Amz-Signature=37e596b7f700c8e38b8b03c4eb996c8447e340f8169e6d2179b8c9e1d4b8de58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W3DY7DF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAycuSth7m9JWbDiNYc%2FCt0nYFhJTCY8hB2VWt6tX6cSAiBLYXZuPcSugwydGoz214eUuJa2Vvt%2FhKj365jiGPunWiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRe6cc5eWboboxnYZKtwDr6pa7MJvKGlBUtArTDwvWPc9DkFWkfSbfeT9t8jKzeofhZufKHgf3S%2FZ2sLkKDVxBcWW46iUXm%2FXsLeL4pvrlfkIzygzXHshoOSx3doArCszbAsrov2cSLqd9%2B1P%2Bg2FMj8NojDIPXHdAy6U9Zu4VnJQLUPHenPRZQtjAISlsHitv9bHVQAZrMhZKvYeGnVs%2FLZ8EhOqg2fwUJhboMW0BCFUPE94Zm01uxZij72a%2Fx1BZMK0MF0mTjkyWmEvDnMPJYSRCM47grhmNEzxHXmzqHQOUmAL5wZRFcPClm6ggoJD1SQZUVuZx5cHyP3CMcuIcb9G6v7QoanERS2menEwxbrGgtfOdK4L2wqgWR%2F973k2CtcUiywujU4RNplsWh8kVh63QMnwN0TgxezqCp%2FJ%2FzqEUjy2RYYWbFhVDxSgVqYaIBOwpatJj%2B6PNhqaCaVheJXNslgxOgAm4JbeM0w5YNVB9VtgVzIuFxUrj2EXAGuO5GyuYf6CA%2BGEwuutkxZFKnj4In6XKB8Gl%2BFQfh0VY4NbpSo%2BWFhUIhN7TmVtjFdEQl26vKrgS9TmIC7%2FgcTJTdmyIDgha4OR9ezpuSjYlx6qfITg%2BvQC%2BbaOnK8Ocitw3A29xWD1%2FbOK9m4w3%2BOyxAY6pgFzKI28I2UH5cSEQgitTUHuBEeP1AF1fixZARThl2KxFB10cPjqOWSy24ivFiykPFvQJzN3d%2Bfk7pt8Xx8JtLPPWa6xHaI6BcN1qIbNmDCSkC%2BO0D2dNH3CZccOhcbpI7giAwprNk7dr89i503HhO7WiPzpneg2tZwx6YxyZ6K6H0Uo4zkC8Vznd5Gob%2Ft5vlprwJaK7rq5iNzYQhvCuIqdHtz22xyC&X-Amz-Signature=d3a8ea90d81fcd4fef7e2150dbaef3374376784e215ebda18e0c2883ca498f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
