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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R5P3F7C%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxGGhuo3SrbjlUw930SMH8fQjTGCaLmxCzMxre7mgONwIgMq9lQnt3lIlDvrq29%2FG0xk5yEC9jbmh4GyVBr7Bv3kEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKupZhrdd8%2Bmcn741ircAx4nsN0rwGTldUK2BUknFpmCmbACnFoe1Q8HyKUdwo7vHX96gpMTyMq9F3GT7eZBVsR0vS6VRL1NvgbA4hdEraJWQhQ76jcEqQj5XCgMC1SgRfk9kzEED%2FSdNM5Rq%2BembX%2BA%2FwNP248Q2jYNkQRbPEUOPkqjc2BqOcnMCOlZXj66vesHvVFfIliQDqGN9igtHTrHDiBtQ3R3OgtqrpQ0XvZzNeWmw86xfs6b0%2BS9CGNa5dRFOgUDoSWRpvIQirnxtkUHxELcfHGD6J42%2F6H4h3lByvUEYkBZpT%2BtRkRRY9q9E6p4RcqtdPE3soZtMQ5WKo%2BCN8vgH5CHhU5rQmsz29pr3FVJH8noXdq4iqAIdzu4xcU5M2vdPCcJSaJx%2FrRTZQfmicRWFJqiXrbofBJviVcER3UQhbmzCXPMK87kW3cmXSmF4%2Bxhq5tairo9xMbX6dGAgEoN3bAmZ65xPVteRRUdgpEh7MpotVhFIsVQiDFqyI38dExbaMFs1N4%2Fq6g5G54yTfJ3OIeLkSr8EdfPih06SvJmVj6LbdQj%2FyQS8vv05sGhywJQ4w709cMfHx6sVJ1glc5h9ExskPgeJa1MAi5ISLNqLbM20Eyg5ifrPzgQLHhNGWINtbwU3lzrMIny6MEGOqUBiS4mFqedB11xuBBTf80YaxgQSbkH8FnOKexo7To3TB%2BNa6i1jDHZtqhQ0JuT3W0TKGe3wD6baym2EC5MOQSHr0jvmFCNvVEU369lHAujvqVOEdzhkvQ68KMWPUtsLyhA28g2Rvdqm1IPznoFzP%2FDc16LHSqvOf2AWgLgx0fmkOBvaJ87UzFPMZ4W%2BL0U9ixAqlxDtKJaMfD8ZkuBDBgWzaJyKomc&X-Amz-Signature=3ca4c2ae3c65eb75fbb72056145302a7a3ff5f94cc6d0330e807f35fc8bae4c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R5P3F7C%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxGGhuo3SrbjlUw930SMH8fQjTGCaLmxCzMxre7mgONwIgMq9lQnt3lIlDvrq29%2FG0xk5yEC9jbmh4GyVBr7Bv3kEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKupZhrdd8%2Bmcn741ircAx4nsN0rwGTldUK2BUknFpmCmbACnFoe1Q8HyKUdwo7vHX96gpMTyMq9F3GT7eZBVsR0vS6VRL1NvgbA4hdEraJWQhQ76jcEqQj5XCgMC1SgRfk9kzEED%2FSdNM5Rq%2BembX%2BA%2FwNP248Q2jYNkQRbPEUOPkqjc2BqOcnMCOlZXj66vesHvVFfIliQDqGN9igtHTrHDiBtQ3R3OgtqrpQ0XvZzNeWmw86xfs6b0%2BS9CGNa5dRFOgUDoSWRpvIQirnxtkUHxELcfHGD6J42%2F6H4h3lByvUEYkBZpT%2BtRkRRY9q9E6p4RcqtdPE3soZtMQ5WKo%2BCN8vgH5CHhU5rQmsz29pr3FVJH8noXdq4iqAIdzu4xcU5M2vdPCcJSaJx%2FrRTZQfmicRWFJqiXrbofBJviVcER3UQhbmzCXPMK87kW3cmXSmF4%2Bxhq5tairo9xMbX6dGAgEoN3bAmZ65xPVteRRUdgpEh7MpotVhFIsVQiDFqyI38dExbaMFs1N4%2Fq6g5G54yTfJ3OIeLkSr8EdfPih06SvJmVj6LbdQj%2FyQS8vv05sGhywJQ4w709cMfHx6sVJ1glc5h9ExskPgeJa1MAi5ISLNqLbM20Eyg5ifrPzgQLHhNGWINtbwU3lzrMIny6MEGOqUBiS4mFqedB11xuBBTf80YaxgQSbkH8FnOKexo7To3TB%2BNa6i1jDHZtqhQ0JuT3W0TKGe3wD6baym2EC5MOQSHr0jvmFCNvVEU369lHAujvqVOEdzhkvQ68KMWPUtsLyhA28g2Rvdqm1IPznoFzP%2FDc16LHSqvOf2AWgLgx0fmkOBvaJ87UzFPMZ4W%2BL0U9ixAqlxDtKJaMfD8ZkuBDBgWzaJyKomc&X-Amz-Signature=6eb6c597e8ef1bcae592baab462357f3f01a46718ae4ba44cc8fbe18d2ef24e7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R5P3F7C%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxGGhuo3SrbjlUw930SMH8fQjTGCaLmxCzMxre7mgONwIgMq9lQnt3lIlDvrq29%2FG0xk5yEC9jbmh4GyVBr7Bv3kEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKupZhrdd8%2Bmcn741ircAx4nsN0rwGTldUK2BUknFpmCmbACnFoe1Q8HyKUdwo7vHX96gpMTyMq9F3GT7eZBVsR0vS6VRL1NvgbA4hdEraJWQhQ76jcEqQj5XCgMC1SgRfk9kzEED%2FSdNM5Rq%2BembX%2BA%2FwNP248Q2jYNkQRbPEUOPkqjc2BqOcnMCOlZXj66vesHvVFfIliQDqGN9igtHTrHDiBtQ3R3OgtqrpQ0XvZzNeWmw86xfs6b0%2BS9CGNa5dRFOgUDoSWRpvIQirnxtkUHxELcfHGD6J42%2F6H4h3lByvUEYkBZpT%2BtRkRRY9q9E6p4RcqtdPE3soZtMQ5WKo%2BCN8vgH5CHhU5rQmsz29pr3FVJH8noXdq4iqAIdzu4xcU5M2vdPCcJSaJx%2FrRTZQfmicRWFJqiXrbofBJviVcER3UQhbmzCXPMK87kW3cmXSmF4%2Bxhq5tairo9xMbX6dGAgEoN3bAmZ65xPVteRRUdgpEh7MpotVhFIsVQiDFqyI38dExbaMFs1N4%2Fq6g5G54yTfJ3OIeLkSr8EdfPih06SvJmVj6LbdQj%2FyQS8vv05sGhywJQ4w709cMfHx6sVJ1glc5h9ExskPgeJa1MAi5ISLNqLbM20Eyg5ifrPzgQLHhNGWINtbwU3lzrMIny6MEGOqUBiS4mFqedB11xuBBTf80YaxgQSbkH8FnOKexo7To3TB%2BNa6i1jDHZtqhQ0JuT3W0TKGe3wD6baym2EC5MOQSHr0jvmFCNvVEU369lHAujvqVOEdzhkvQ68KMWPUtsLyhA28g2Rvdqm1IPznoFzP%2FDc16LHSqvOf2AWgLgx0fmkOBvaJ87UzFPMZ4W%2BL0U9ixAqlxDtKJaMfD8ZkuBDBgWzaJyKomc&X-Amz-Signature=082651410e766e6de6b059091a69b99300dec87839e92a171856b0029f5f33e8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R5P3F7C%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxGGhuo3SrbjlUw930SMH8fQjTGCaLmxCzMxre7mgONwIgMq9lQnt3lIlDvrq29%2FG0xk5yEC9jbmh4GyVBr7Bv3kEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKupZhrdd8%2Bmcn741ircAx4nsN0rwGTldUK2BUknFpmCmbACnFoe1Q8HyKUdwo7vHX96gpMTyMq9F3GT7eZBVsR0vS6VRL1NvgbA4hdEraJWQhQ76jcEqQj5XCgMC1SgRfk9kzEED%2FSdNM5Rq%2BembX%2BA%2FwNP248Q2jYNkQRbPEUOPkqjc2BqOcnMCOlZXj66vesHvVFfIliQDqGN9igtHTrHDiBtQ3R3OgtqrpQ0XvZzNeWmw86xfs6b0%2BS9CGNa5dRFOgUDoSWRpvIQirnxtkUHxELcfHGD6J42%2F6H4h3lByvUEYkBZpT%2BtRkRRY9q9E6p4RcqtdPE3soZtMQ5WKo%2BCN8vgH5CHhU5rQmsz29pr3FVJH8noXdq4iqAIdzu4xcU5M2vdPCcJSaJx%2FrRTZQfmicRWFJqiXrbofBJviVcER3UQhbmzCXPMK87kW3cmXSmF4%2Bxhq5tairo9xMbX6dGAgEoN3bAmZ65xPVteRRUdgpEh7MpotVhFIsVQiDFqyI38dExbaMFs1N4%2Fq6g5G54yTfJ3OIeLkSr8EdfPih06SvJmVj6LbdQj%2FyQS8vv05sGhywJQ4w709cMfHx6sVJ1glc5h9ExskPgeJa1MAi5ISLNqLbM20Eyg5ifrPzgQLHhNGWINtbwU3lzrMIny6MEGOqUBiS4mFqedB11xuBBTf80YaxgQSbkH8FnOKexo7To3TB%2BNa6i1jDHZtqhQ0JuT3W0TKGe3wD6baym2EC5MOQSHr0jvmFCNvVEU369lHAujvqVOEdzhkvQ68KMWPUtsLyhA28g2Rvdqm1IPznoFzP%2FDc16LHSqvOf2AWgLgx0fmkOBvaJ87UzFPMZ4W%2BL0U9ixAqlxDtKJaMfD8ZkuBDBgWzaJyKomc&X-Amz-Signature=491b29aa2f88c19174f9e4ed33d2a35ff65bbc3ba0768257e2918f896e22a3e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R5P3F7C%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxGGhuo3SrbjlUw930SMH8fQjTGCaLmxCzMxre7mgONwIgMq9lQnt3lIlDvrq29%2FG0xk5yEC9jbmh4GyVBr7Bv3kEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKupZhrdd8%2Bmcn741ircAx4nsN0rwGTldUK2BUknFpmCmbACnFoe1Q8HyKUdwo7vHX96gpMTyMq9F3GT7eZBVsR0vS6VRL1NvgbA4hdEraJWQhQ76jcEqQj5XCgMC1SgRfk9kzEED%2FSdNM5Rq%2BembX%2BA%2FwNP248Q2jYNkQRbPEUOPkqjc2BqOcnMCOlZXj66vesHvVFfIliQDqGN9igtHTrHDiBtQ3R3OgtqrpQ0XvZzNeWmw86xfs6b0%2BS9CGNa5dRFOgUDoSWRpvIQirnxtkUHxELcfHGD6J42%2F6H4h3lByvUEYkBZpT%2BtRkRRY9q9E6p4RcqtdPE3soZtMQ5WKo%2BCN8vgH5CHhU5rQmsz29pr3FVJH8noXdq4iqAIdzu4xcU5M2vdPCcJSaJx%2FrRTZQfmicRWFJqiXrbofBJviVcER3UQhbmzCXPMK87kW3cmXSmF4%2Bxhq5tairo9xMbX6dGAgEoN3bAmZ65xPVteRRUdgpEh7MpotVhFIsVQiDFqyI38dExbaMFs1N4%2Fq6g5G54yTfJ3OIeLkSr8EdfPih06SvJmVj6LbdQj%2FyQS8vv05sGhywJQ4w709cMfHx6sVJ1glc5h9ExskPgeJa1MAi5ISLNqLbM20Eyg5ifrPzgQLHhNGWINtbwU3lzrMIny6MEGOqUBiS4mFqedB11xuBBTf80YaxgQSbkH8FnOKexo7To3TB%2BNa6i1jDHZtqhQ0JuT3W0TKGe3wD6baym2EC5MOQSHr0jvmFCNvVEU369lHAujvqVOEdzhkvQ68KMWPUtsLyhA28g2Rvdqm1IPznoFzP%2FDc16LHSqvOf2AWgLgx0fmkOBvaJ87UzFPMZ4W%2BL0U9ixAqlxDtKJaMfD8ZkuBDBgWzaJyKomc&X-Amz-Signature=90837c2ab1395d0b34a19715c5644082f7ebbbf7f8aa19f2ab09004abca25964&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R5P3F7C%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxGGhuo3SrbjlUw930SMH8fQjTGCaLmxCzMxre7mgONwIgMq9lQnt3lIlDvrq29%2FG0xk5yEC9jbmh4GyVBr7Bv3kEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKupZhrdd8%2Bmcn741ircAx4nsN0rwGTldUK2BUknFpmCmbACnFoe1Q8HyKUdwo7vHX96gpMTyMq9F3GT7eZBVsR0vS6VRL1NvgbA4hdEraJWQhQ76jcEqQj5XCgMC1SgRfk9kzEED%2FSdNM5Rq%2BembX%2BA%2FwNP248Q2jYNkQRbPEUOPkqjc2BqOcnMCOlZXj66vesHvVFfIliQDqGN9igtHTrHDiBtQ3R3OgtqrpQ0XvZzNeWmw86xfs6b0%2BS9CGNa5dRFOgUDoSWRpvIQirnxtkUHxELcfHGD6J42%2F6H4h3lByvUEYkBZpT%2BtRkRRY9q9E6p4RcqtdPE3soZtMQ5WKo%2BCN8vgH5CHhU5rQmsz29pr3FVJH8noXdq4iqAIdzu4xcU5M2vdPCcJSaJx%2FrRTZQfmicRWFJqiXrbofBJviVcER3UQhbmzCXPMK87kW3cmXSmF4%2Bxhq5tairo9xMbX6dGAgEoN3bAmZ65xPVteRRUdgpEh7MpotVhFIsVQiDFqyI38dExbaMFs1N4%2Fq6g5G54yTfJ3OIeLkSr8EdfPih06SvJmVj6LbdQj%2FyQS8vv05sGhywJQ4w709cMfHx6sVJ1glc5h9ExskPgeJa1MAi5ISLNqLbM20Eyg5ifrPzgQLHhNGWINtbwU3lzrMIny6MEGOqUBiS4mFqedB11xuBBTf80YaxgQSbkH8FnOKexo7To3TB%2BNa6i1jDHZtqhQ0JuT3W0TKGe3wD6baym2EC5MOQSHr0jvmFCNvVEU369lHAujvqVOEdzhkvQ68KMWPUtsLyhA28g2Rvdqm1IPznoFzP%2FDc16LHSqvOf2AWgLgx0fmkOBvaJ87UzFPMZ4W%2BL0U9ixAqlxDtKJaMfD8ZkuBDBgWzaJyKomc&X-Amz-Signature=15b39bdb0049df55fcbc61dcc4db79acd6d6a26d21c30edf532de2a0afd93c61&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R5P3F7C%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxGGhuo3SrbjlUw930SMH8fQjTGCaLmxCzMxre7mgONwIgMq9lQnt3lIlDvrq29%2FG0xk5yEC9jbmh4GyVBr7Bv3kEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKupZhrdd8%2Bmcn741ircAx4nsN0rwGTldUK2BUknFpmCmbACnFoe1Q8HyKUdwo7vHX96gpMTyMq9F3GT7eZBVsR0vS6VRL1NvgbA4hdEraJWQhQ76jcEqQj5XCgMC1SgRfk9kzEED%2FSdNM5Rq%2BembX%2BA%2FwNP248Q2jYNkQRbPEUOPkqjc2BqOcnMCOlZXj66vesHvVFfIliQDqGN9igtHTrHDiBtQ3R3OgtqrpQ0XvZzNeWmw86xfs6b0%2BS9CGNa5dRFOgUDoSWRpvIQirnxtkUHxELcfHGD6J42%2F6H4h3lByvUEYkBZpT%2BtRkRRY9q9E6p4RcqtdPE3soZtMQ5WKo%2BCN8vgH5CHhU5rQmsz29pr3FVJH8noXdq4iqAIdzu4xcU5M2vdPCcJSaJx%2FrRTZQfmicRWFJqiXrbofBJviVcER3UQhbmzCXPMK87kW3cmXSmF4%2Bxhq5tairo9xMbX6dGAgEoN3bAmZ65xPVteRRUdgpEh7MpotVhFIsVQiDFqyI38dExbaMFs1N4%2Fq6g5G54yTfJ3OIeLkSr8EdfPih06SvJmVj6LbdQj%2FyQS8vv05sGhywJQ4w709cMfHx6sVJ1glc5h9ExskPgeJa1MAi5ISLNqLbM20Eyg5ifrPzgQLHhNGWINtbwU3lzrMIny6MEGOqUBiS4mFqedB11xuBBTf80YaxgQSbkH8FnOKexo7To3TB%2BNa6i1jDHZtqhQ0JuT3W0TKGe3wD6baym2EC5MOQSHr0jvmFCNvVEU369lHAujvqVOEdzhkvQ68KMWPUtsLyhA28g2Rvdqm1IPznoFzP%2FDc16LHSqvOf2AWgLgx0fmkOBvaJ87UzFPMZ4W%2BL0U9ixAqlxDtKJaMfD8ZkuBDBgWzaJyKomc&X-Amz-Signature=4c901df56a76a3f5511b121d6acaffb274776402b524344ac88d3dd565d4b654&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R5P3F7C%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxGGhuo3SrbjlUw930SMH8fQjTGCaLmxCzMxre7mgONwIgMq9lQnt3lIlDvrq29%2FG0xk5yEC9jbmh4GyVBr7Bv3kEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKupZhrdd8%2Bmcn741ircAx4nsN0rwGTldUK2BUknFpmCmbACnFoe1Q8HyKUdwo7vHX96gpMTyMq9F3GT7eZBVsR0vS6VRL1NvgbA4hdEraJWQhQ76jcEqQj5XCgMC1SgRfk9kzEED%2FSdNM5Rq%2BembX%2BA%2FwNP248Q2jYNkQRbPEUOPkqjc2BqOcnMCOlZXj66vesHvVFfIliQDqGN9igtHTrHDiBtQ3R3OgtqrpQ0XvZzNeWmw86xfs6b0%2BS9CGNa5dRFOgUDoSWRpvIQirnxtkUHxELcfHGD6J42%2F6H4h3lByvUEYkBZpT%2BtRkRRY9q9E6p4RcqtdPE3soZtMQ5WKo%2BCN8vgH5CHhU5rQmsz29pr3FVJH8noXdq4iqAIdzu4xcU5M2vdPCcJSaJx%2FrRTZQfmicRWFJqiXrbofBJviVcER3UQhbmzCXPMK87kW3cmXSmF4%2Bxhq5tairo9xMbX6dGAgEoN3bAmZ65xPVteRRUdgpEh7MpotVhFIsVQiDFqyI38dExbaMFs1N4%2Fq6g5G54yTfJ3OIeLkSr8EdfPih06SvJmVj6LbdQj%2FyQS8vv05sGhywJQ4w709cMfHx6sVJ1glc5h9ExskPgeJa1MAi5ISLNqLbM20Eyg5ifrPzgQLHhNGWINtbwU3lzrMIny6MEGOqUBiS4mFqedB11xuBBTf80YaxgQSbkH8FnOKexo7To3TB%2BNa6i1jDHZtqhQ0JuT3W0TKGe3wD6baym2EC5MOQSHr0jvmFCNvVEU369lHAujvqVOEdzhkvQ68KMWPUtsLyhA28g2Rvdqm1IPznoFzP%2FDc16LHSqvOf2AWgLgx0fmkOBvaJ87UzFPMZ4W%2BL0U9ixAqlxDtKJaMfD8ZkuBDBgWzaJyKomc&X-Amz-Signature=cb661196351ae4375a77b931f0a742893542650c2b965731a8f1224ce6ea2841&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
