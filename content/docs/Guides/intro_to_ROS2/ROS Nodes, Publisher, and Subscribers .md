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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYPJ6BF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC1GLmzdAgHJ%2FzkUneZAFQjiHpFaeM0DPzEJhJKqwBs0wIgDbG7L%2FM0YqvKRh9sWYQ9v2uOXeNxIixaDDGmWT6ovNoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDN3otZy84t1bT1dGdCrcA2gJfOyCWYLT9bCaFUN33r1H%2F0kqY81mZ1lQ5U8B7Hm9O8SvtwPnD7pMAO8ABuHEQLh7fxEQ303RZMzEOVkZ5S%2FG2wlr2hdiNTMBnNJbgxYyzauUZTjhWb%2FWY5k5gI2z6zWJFvAHDlAELVIXwinTTmLZfsL3%2FmQK7yhGlmWZGkaBsusr1isb3B8przo7S9gH5Dbz35nWpz%2Bx3DpwU33%2FWvogRfbRYok%2FMpgAJQ%2FfwiVkHsLYbFx%2Br%2BhFNUF6ZVzFDerYKgL%2BtgUu5%2BXn%2BOVKfzWTE0YdabRsVbiJ%2BDzcZKFgVbp6%2B8baEun0ThrByrLhvth6DRpaVRxpgnHwJXRyXdSCxT8e80qTdyNUj5sm271%2BMBoPWBPXGhvGt48BBXO%2Fmj01kkyZqBuVkKcHuifZUqzhFIoyT%2FMZZV7bh09yOjuyodvvueo4kZqTy6Oc4up%2FBBO0ovSCryAfmgRSzwFfFZ0nvADNCSNfEXH3eVgTZbSYNeRVV7KgV7l4lZ6WCQG89tm9fogbK5MtihvHBEWlQwHh1SbcNT4yIRijAROGDoo%2BTHxyucj%2FJC0KRXTNq0CzsonZxQ8O%2BrAwOy8m6xE5aiaWBnjWBfduX%2Bs8Iq931vHKqj23UDUYPnOgmPxjMJjAhr0GOqUBokj2ioCv2dzUXaOk5cFG%2FLJVmrr%2FMbDDRz3m%2FHF9TWidcBnZpRih9pEa48MnIldqrq94vQhUmzN8CfoRQPfDCdb%2BffWRKYs9X9R5jpxLFwX5r0FHy0asp6ROUQk3AIoqtAz%2Bd3kBMPZd97sYH%2FVurTkeNTKgF%2F1H51oF8WxLiSo8yjGRIYHG%2BvL2ChurffvigEO8UfqYCxlwZchmOzbQP793t6EB&X-Amz-Signature=8aed2db3db5131416b769ac2ff3729896db384644dfd779dfbe8337f7b7ed8d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYPJ6BF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC1GLmzdAgHJ%2FzkUneZAFQjiHpFaeM0DPzEJhJKqwBs0wIgDbG7L%2FM0YqvKRh9sWYQ9v2uOXeNxIixaDDGmWT6ovNoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDN3otZy84t1bT1dGdCrcA2gJfOyCWYLT9bCaFUN33r1H%2F0kqY81mZ1lQ5U8B7Hm9O8SvtwPnD7pMAO8ABuHEQLh7fxEQ303RZMzEOVkZ5S%2FG2wlr2hdiNTMBnNJbgxYyzauUZTjhWb%2FWY5k5gI2z6zWJFvAHDlAELVIXwinTTmLZfsL3%2FmQK7yhGlmWZGkaBsusr1isb3B8przo7S9gH5Dbz35nWpz%2Bx3DpwU33%2FWvogRfbRYok%2FMpgAJQ%2FfwiVkHsLYbFx%2Br%2BhFNUF6ZVzFDerYKgL%2BtgUu5%2BXn%2BOVKfzWTE0YdabRsVbiJ%2BDzcZKFgVbp6%2B8baEun0ThrByrLhvth6DRpaVRxpgnHwJXRyXdSCxT8e80qTdyNUj5sm271%2BMBoPWBPXGhvGt48BBXO%2Fmj01kkyZqBuVkKcHuifZUqzhFIoyT%2FMZZV7bh09yOjuyodvvueo4kZqTy6Oc4up%2FBBO0ovSCryAfmgRSzwFfFZ0nvADNCSNfEXH3eVgTZbSYNeRVV7KgV7l4lZ6WCQG89tm9fogbK5MtihvHBEWlQwHh1SbcNT4yIRijAROGDoo%2BTHxyucj%2FJC0KRXTNq0CzsonZxQ8O%2BrAwOy8m6xE5aiaWBnjWBfduX%2Bs8Iq931vHKqj23UDUYPnOgmPxjMJjAhr0GOqUBokj2ioCv2dzUXaOk5cFG%2FLJVmrr%2FMbDDRz3m%2FHF9TWidcBnZpRih9pEa48MnIldqrq94vQhUmzN8CfoRQPfDCdb%2BffWRKYs9X9R5jpxLFwX5r0FHy0asp6ROUQk3AIoqtAz%2Bd3kBMPZd97sYH%2FVurTkeNTKgF%2F1H51oF8WxLiSo8yjGRIYHG%2BvL2ChurffvigEO8UfqYCxlwZchmOzbQP793t6EB&X-Amz-Signature=6ec77254962b6d524ebb8d59c8bc78c817200d866cd040665462b292a2193834&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYPJ6BF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC1GLmzdAgHJ%2FzkUneZAFQjiHpFaeM0DPzEJhJKqwBs0wIgDbG7L%2FM0YqvKRh9sWYQ9v2uOXeNxIixaDDGmWT6ovNoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDN3otZy84t1bT1dGdCrcA2gJfOyCWYLT9bCaFUN33r1H%2F0kqY81mZ1lQ5U8B7Hm9O8SvtwPnD7pMAO8ABuHEQLh7fxEQ303RZMzEOVkZ5S%2FG2wlr2hdiNTMBnNJbgxYyzauUZTjhWb%2FWY5k5gI2z6zWJFvAHDlAELVIXwinTTmLZfsL3%2FmQK7yhGlmWZGkaBsusr1isb3B8przo7S9gH5Dbz35nWpz%2Bx3DpwU33%2FWvogRfbRYok%2FMpgAJQ%2FfwiVkHsLYbFx%2Br%2BhFNUF6ZVzFDerYKgL%2BtgUu5%2BXn%2BOVKfzWTE0YdabRsVbiJ%2BDzcZKFgVbp6%2B8baEun0ThrByrLhvth6DRpaVRxpgnHwJXRyXdSCxT8e80qTdyNUj5sm271%2BMBoPWBPXGhvGt48BBXO%2Fmj01kkyZqBuVkKcHuifZUqzhFIoyT%2FMZZV7bh09yOjuyodvvueo4kZqTy6Oc4up%2FBBO0ovSCryAfmgRSzwFfFZ0nvADNCSNfEXH3eVgTZbSYNeRVV7KgV7l4lZ6WCQG89tm9fogbK5MtihvHBEWlQwHh1SbcNT4yIRijAROGDoo%2BTHxyucj%2FJC0KRXTNq0CzsonZxQ8O%2BrAwOy8m6xE5aiaWBnjWBfduX%2Bs8Iq931vHKqj23UDUYPnOgmPxjMJjAhr0GOqUBokj2ioCv2dzUXaOk5cFG%2FLJVmrr%2FMbDDRz3m%2FHF9TWidcBnZpRih9pEa48MnIldqrq94vQhUmzN8CfoRQPfDCdb%2BffWRKYs9X9R5jpxLFwX5r0FHy0asp6ROUQk3AIoqtAz%2Bd3kBMPZd97sYH%2FVurTkeNTKgF%2F1H51oF8WxLiSo8yjGRIYHG%2BvL2ChurffvigEO8UfqYCxlwZchmOzbQP793t6EB&X-Amz-Signature=d5f61eed8bf40e12415b2411b20d691bab143860f523bd7fc6c4c0225320a544&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYPJ6BF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC1GLmzdAgHJ%2FzkUneZAFQjiHpFaeM0DPzEJhJKqwBs0wIgDbG7L%2FM0YqvKRh9sWYQ9v2uOXeNxIixaDDGmWT6ovNoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDN3otZy84t1bT1dGdCrcA2gJfOyCWYLT9bCaFUN33r1H%2F0kqY81mZ1lQ5U8B7Hm9O8SvtwPnD7pMAO8ABuHEQLh7fxEQ303RZMzEOVkZ5S%2FG2wlr2hdiNTMBnNJbgxYyzauUZTjhWb%2FWY5k5gI2z6zWJFvAHDlAELVIXwinTTmLZfsL3%2FmQK7yhGlmWZGkaBsusr1isb3B8przo7S9gH5Dbz35nWpz%2Bx3DpwU33%2FWvogRfbRYok%2FMpgAJQ%2FfwiVkHsLYbFx%2Br%2BhFNUF6ZVzFDerYKgL%2BtgUu5%2BXn%2BOVKfzWTE0YdabRsVbiJ%2BDzcZKFgVbp6%2B8baEun0ThrByrLhvth6DRpaVRxpgnHwJXRyXdSCxT8e80qTdyNUj5sm271%2BMBoPWBPXGhvGt48BBXO%2Fmj01kkyZqBuVkKcHuifZUqzhFIoyT%2FMZZV7bh09yOjuyodvvueo4kZqTy6Oc4up%2FBBO0ovSCryAfmgRSzwFfFZ0nvADNCSNfEXH3eVgTZbSYNeRVV7KgV7l4lZ6WCQG89tm9fogbK5MtihvHBEWlQwHh1SbcNT4yIRijAROGDoo%2BTHxyucj%2FJC0KRXTNq0CzsonZxQ8O%2BrAwOy8m6xE5aiaWBnjWBfduX%2Bs8Iq931vHKqj23UDUYPnOgmPxjMJjAhr0GOqUBokj2ioCv2dzUXaOk5cFG%2FLJVmrr%2FMbDDRz3m%2FHF9TWidcBnZpRih9pEa48MnIldqrq94vQhUmzN8CfoRQPfDCdb%2BffWRKYs9X9R5jpxLFwX5r0FHy0asp6ROUQk3AIoqtAz%2Bd3kBMPZd97sYH%2FVurTkeNTKgF%2F1H51oF8WxLiSo8yjGRIYHG%2BvL2ChurffvigEO8UfqYCxlwZchmOzbQP793t6EB&X-Amz-Signature=bcab1daf1455356936ab281f9149a45420e44106896f4ca470c9b3b4bdd227e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYPJ6BF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC1GLmzdAgHJ%2FzkUneZAFQjiHpFaeM0DPzEJhJKqwBs0wIgDbG7L%2FM0YqvKRh9sWYQ9v2uOXeNxIixaDDGmWT6ovNoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDN3otZy84t1bT1dGdCrcA2gJfOyCWYLT9bCaFUN33r1H%2F0kqY81mZ1lQ5U8B7Hm9O8SvtwPnD7pMAO8ABuHEQLh7fxEQ303RZMzEOVkZ5S%2FG2wlr2hdiNTMBnNJbgxYyzauUZTjhWb%2FWY5k5gI2z6zWJFvAHDlAELVIXwinTTmLZfsL3%2FmQK7yhGlmWZGkaBsusr1isb3B8przo7S9gH5Dbz35nWpz%2Bx3DpwU33%2FWvogRfbRYok%2FMpgAJQ%2FfwiVkHsLYbFx%2Br%2BhFNUF6ZVzFDerYKgL%2BtgUu5%2BXn%2BOVKfzWTE0YdabRsVbiJ%2BDzcZKFgVbp6%2B8baEun0ThrByrLhvth6DRpaVRxpgnHwJXRyXdSCxT8e80qTdyNUj5sm271%2BMBoPWBPXGhvGt48BBXO%2Fmj01kkyZqBuVkKcHuifZUqzhFIoyT%2FMZZV7bh09yOjuyodvvueo4kZqTy6Oc4up%2FBBO0ovSCryAfmgRSzwFfFZ0nvADNCSNfEXH3eVgTZbSYNeRVV7KgV7l4lZ6WCQG89tm9fogbK5MtihvHBEWlQwHh1SbcNT4yIRijAROGDoo%2BTHxyucj%2FJC0KRXTNq0CzsonZxQ8O%2BrAwOy8m6xE5aiaWBnjWBfduX%2Bs8Iq931vHKqj23UDUYPnOgmPxjMJjAhr0GOqUBokj2ioCv2dzUXaOk5cFG%2FLJVmrr%2FMbDDRz3m%2FHF9TWidcBnZpRih9pEa48MnIldqrq94vQhUmzN8CfoRQPfDCdb%2BffWRKYs9X9R5jpxLFwX5r0FHy0asp6ROUQk3AIoqtAz%2Bd3kBMPZd97sYH%2FVurTkeNTKgF%2F1H51oF8WxLiSo8yjGRIYHG%2BvL2ChurffvigEO8UfqYCxlwZchmOzbQP793t6EB&X-Amz-Signature=37c038a284656761d965ed4b5c5c922e25ac187012fb203a1134c756ab2cbbda&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYPJ6BF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC1GLmzdAgHJ%2FzkUneZAFQjiHpFaeM0DPzEJhJKqwBs0wIgDbG7L%2FM0YqvKRh9sWYQ9v2uOXeNxIixaDDGmWT6ovNoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDN3otZy84t1bT1dGdCrcA2gJfOyCWYLT9bCaFUN33r1H%2F0kqY81mZ1lQ5U8B7Hm9O8SvtwPnD7pMAO8ABuHEQLh7fxEQ303RZMzEOVkZ5S%2FG2wlr2hdiNTMBnNJbgxYyzauUZTjhWb%2FWY5k5gI2z6zWJFvAHDlAELVIXwinTTmLZfsL3%2FmQK7yhGlmWZGkaBsusr1isb3B8przo7S9gH5Dbz35nWpz%2Bx3DpwU33%2FWvogRfbRYok%2FMpgAJQ%2FfwiVkHsLYbFx%2Br%2BhFNUF6ZVzFDerYKgL%2BtgUu5%2BXn%2BOVKfzWTE0YdabRsVbiJ%2BDzcZKFgVbp6%2B8baEun0ThrByrLhvth6DRpaVRxpgnHwJXRyXdSCxT8e80qTdyNUj5sm271%2BMBoPWBPXGhvGt48BBXO%2Fmj01kkyZqBuVkKcHuifZUqzhFIoyT%2FMZZV7bh09yOjuyodvvueo4kZqTy6Oc4up%2FBBO0ovSCryAfmgRSzwFfFZ0nvADNCSNfEXH3eVgTZbSYNeRVV7KgV7l4lZ6WCQG89tm9fogbK5MtihvHBEWlQwHh1SbcNT4yIRijAROGDoo%2BTHxyucj%2FJC0KRXTNq0CzsonZxQ8O%2BrAwOy8m6xE5aiaWBnjWBfduX%2Bs8Iq931vHKqj23UDUYPnOgmPxjMJjAhr0GOqUBokj2ioCv2dzUXaOk5cFG%2FLJVmrr%2FMbDDRz3m%2FHF9TWidcBnZpRih9pEa48MnIldqrq94vQhUmzN8CfoRQPfDCdb%2BffWRKYs9X9R5jpxLFwX5r0FHy0asp6ROUQk3AIoqtAz%2Bd3kBMPZd97sYH%2FVurTkeNTKgF%2F1H51oF8WxLiSo8yjGRIYHG%2BvL2ChurffvigEO8UfqYCxlwZchmOzbQP793t6EB&X-Amz-Signature=c4cc7a5f41e89d8de217b1651e8ea61395c89eb425cb616680034bb17cd1aab9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYPJ6BF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC1GLmzdAgHJ%2FzkUneZAFQjiHpFaeM0DPzEJhJKqwBs0wIgDbG7L%2FM0YqvKRh9sWYQ9v2uOXeNxIixaDDGmWT6ovNoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDN3otZy84t1bT1dGdCrcA2gJfOyCWYLT9bCaFUN33r1H%2F0kqY81mZ1lQ5U8B7Hm9O8SvtwPnD7pMAO8ABuHEQLh7fxEQ303RZMzEOVkZ5S%2FG2wlr2hdiNTMBnNJbgxYyzauUZTjhWb%2FWY5k5gI2z6zWJFvAHDlAELVIXwinTTmLZfsL3%2FmQK7yhGlmWZGkaBsusr1isb3B8przo7S9gH5Dbz35nWpz%2Bx3DpwU33%2FWvogRfbRYok%2FMpgAJQ%2FfwiVkHsLYbFx%2Br%2BhFNUF6ZVzFDerYKgL%2BtgUu5%2BXn%2BOVKfzWTE0YdabRsVbiJ%2BDzcZKFgVbp6%2B8baEun0ThrByrLhvth6DRpaVRxpgnHwJXRyXdSCxT8e80qTdyNUj5sm271%2BMBoPWBPXGhvGt48BBXO%2Fmj01kkyZqBuVkKcHuifZUqzhFIoyT%2FMZZV7bh09yOjuyodvvueo4kZqTy6Oc4up%2FBBO0ovSCryAfmgRSzwFfFZ0nvADNCSNfEXH3eVgTZbSYNeRVV7KgV7l4lZ6WCQG89tm9fogbK5MtihvHBEWlQwHh1SbcNT4yIRijAROGDoo%2BTHxyucj%2FJC0KRXTNq0CzsonZxQ8O%2BrAwOy8m6xE5aiaWBnjWBfduX%2Bs8Iq931vHKqj23UDUYPnOgmPxjMJjAhr0GOqUBokj2ioCv2dzUXaOk5cFG%2FLJVmrr%2FMbDDRz3m%2FHF9TWidcBnZpRih9pEa48MnIldqrq94vQhUmzN8CfoRQPfDCdb%2BffWRKYs9X9R5jpxLFwX5r0FHy0asp6ROUQk3AIoqtAz%2Bd3kBMPZd97sYH%2FVurTkeNTKgF%2F1H51oF8WxLiSo8yjGRIYHG%2BvL2ChurffvigEO8UfqYCxlwZchmOzbQP793t6EB&X-Amz-Signature=120093f4d1af6376b89218d7d5eda80a295f7b8e59a06607cd25f2fc8b0c42f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYPJ6BF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC1GLmzdAgHJ%2FzkUneZAFQjiHpFaeM0DPzEJhJKqwBs0wIgDbG7L%2FM0YqvKRh9sWYQ9v2uOXeNxIixaDDGmWT6ovNoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDN3otZy84t1bT1dGdCrcA2gJfOyCWYLT9bCaFUN33r1H%2F0kqY81mZ1lQ5U8B7Hm9O8SvtwPnD7pMAO8ABuHEQLh7fxEQ303RZMzEOVkZ5S%2FG2wlr2hdiNTMBnNJbgxYyzauUZTjhWb%2FWY5k5gI2z6zWJFvAHDlAELVIXwinTTmLZfsL3%2FmQK7yhGlmWZGkaBsusr1isb3B8przo7S9gH5Dbz35nWpz%2Bx3DpwU33%2FWvogRfbRYok%2FMpgAJQ%2FfwiVkHsLYbFx%2Br%2BhFNUF6ZVzFDerYKgL%2BtgUu5%2BXn%2BOVKfzWTE0YdabRsVbiJ%2BDzcZKFgVbp6%2B8baEun0ThrByrLhvth6DRpaVRxpgnHwJXRyXdSCxT8e80qTdyNUj5sm271%2BMBoPWBPXGhvGt48BBXO%2Fmj01kkyZqBuVkKcHuifZUqzhFIoyT%2FMZZV7bh09yOjuyodvvueo4kZqTy6Oc4up%2FBBO0ovSCryAfmgRSzwFfFZ0nvADNCSNfEXH3eVgTZbSYNeRVV7KgV7l4lZ6WCQG89tm9fogbK5MtihvHBEWlQwHh1SbcNT4yIRijAROGDoo%2BTHxyucj%2FJC0KRXTNq0CzsonZxQ8O%2BrAwOy8m6xE5aiaWBnjWBfduX%2Bs8Iq931vHKqj23UDUYPnOgmPxjMJjAhr0GOqUBokj2ioCv2dzUXaOk5cFG%2FLJVmrr%2FMbDDRz3m%2FHF9TWidcBnZpRih9pEa48MnIldqrq94vQhUmzN8CfoRQPfDCdb%2BffWRKYs9X9R5jpxLFwX5r0FHy0asp6ROUQk3AIoqtAz%2Bd3kBMPZd97sYH%2FVurTkeNTKgF%2F1H51oF8WxLiSo8yjGRIYHG%2BvL2ChurffvigEO8UfqYCxlwZchmOzbQP793t6EB&X-Amz-Signature=8ef4a67e42f5675f30f0ad6023e78326948a5f6597cb89521d9d707dc288b821&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
