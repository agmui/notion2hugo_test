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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ7HPUNS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDleS823%2F%2BNq6PDd30bJhaP3UitDXiUCBx%2BiOxov145FAiAuUdgfc7Mhjrt8JH3Gw01vtMNuwP8aDRGMpOrh8%2BsrSSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMBoUOr6UZsbAUN%2F4UKtwDYZCuR%2BfszRVscZJJ0Pj%2BKtBvgEMiNC18Zabktt%2FTJ1HWoDWYYoULp%2FPvK2vf6h6AAz5mjbxMaram%2BQRYh3kjaH5%2BJJhti%2F73Bn2ET6c8%2BdwFPuIvtdZ7w67XUjXzN30X43n6xFUlYQQa%2B8lJ0qkAl2PKCh5KqLbruypwPAAGlVNuXwNTUFFgWMXrOGrrhV9t55nM56FunUYjyqcZTwiXaWR2CqRWcLubsQvTZt7tavfQ%2B90qqSczqG0%2F92qc7ZpnRav%2FH6LgmDZhcWVL3ZNvXJIhsbWObC%2BmlqHHyc5r9vgYhF7MWxAAaVbgHex8%2BrJ1FNo1wNRnc21uF5gN63OB6n5m2%2FeJX0Mybcep4aK8FrTJmEN11dWQe9IzdGYhVjDehZXA23xa%2FVQEHUO4LSb24hrbtcw4dp1CVhFVMsJKEAf5KFFj30XHjRIHstfZZknUlvz7leEBJ5MeDV3g6RsmiOF6%2FApwXo9KwvDsgVsO0NbZY0PJGl8v9CGig9Jty7lWqvQNMox%2BXTj%2BwZvp3u%2Bx6ybVxk71zi9dRAwT0jraJisVS8%2FCyYf2G27YM9Ah5y7G9QVePPTqDWUafdJir8RuBYvBHqQEWJkqy9T4bR17CJ0eK%2BqdQGJ9xcuvY9Aw65DewQY6pgEqj3Qw1s6NGlXq%2F3BoQ%2BnfplTkkYR8LRKh8jyyo6TCczFcO34lkyutp0BxGKs8ZiX2C35DyownZrCBSBkleRwUYBM5QIi2nPSEamAj6Ow40vPjwuKLvwQLzejODtrqjtnSIC5u9m2HQBwZZu1eQTPmcne6tA83cZTio0enaXCHFTFfeXax8SXWvfKB1vfh2sJZbnFB4Q5SopFzBi7hVqw0vrhdDGqd&X-Amz-Signature=7586a260786a3e17d45a51b68b370ef3c87c3a414f305a32266e3787aad11187&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ7HPUNS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDleS823%2F%2BNq6PDd30bJhaP3UitDXiUCBx%2BiOxov145FAiAuUdgfc7Mhjrt8JH3Gw01vtMNuwP8aDRGMpOrh8%2BsrSSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMBoUOr6UZsbAUN%2F4UKtwDYZCuR%2BfszRVscZJJ0Pj%2BKtBvgEMiNC18Zabktt%2FTJ1HWoDWYYoULp%2FPvK2vf6h6AAz5mjbxMaram%2BQRYh3kjaH5%2BJJhti%2F73Bn2ET6c8%2BdwFPuIvtdZ7w67XUjXzN30X43n6xFUlYQQa%2B8lJ0qkAl2PKCh5KqLbruypwPAAGlVNuXwNTUFFgWMXrOGrrhV9t55nM56FunUYjyqcZTwiXaWR2CqRWcLubsQvTZt7tavfQ%2B90qqSczqG0%2F92qc7ZpnRav%2FH6LgmDZhcWVL3ZNvXJIhsbWObC%2BmlqHHyc5r9vgYhF7MWxAAaVbgHex8%2BrJ1FNo1wNRnc21uF5gN63OB6n5m2%2FeJX0Mybcep4aK8FrTJmEN11dWQe9IzdGYhVjDehZXA23xa%2FVQEHUO4LSb24hrbtcw4dp1CVhFVMsJKEAf5KFFj30XHjRIHstfZZknUlvz7leEBJ5MeDV3g6RsmiOF6%2FApwXo9KwvDsgVsO0NbZY0PJGl8v9CGig9Jty7lWqvQNMox%2BXTj%2BwZvp3u%2Bx6ybVxk71zi9dRAwT0jraJisVS8%2FCyYf2G27YM9Ah5y7G9QVePPTqDWUafdJir8RuBYvBHqQEWJkqy9T4bR17CJ0eK%2BqdQGJ9xcuvY9Aw65DewQY6pgEqj3Qw1s6NGlXq%2F3BoQ%2BnfplTkkYR8LRKh8jyyo6TCczFcO34lkyutp0BxGKs8ZiX2C35DyownZrCBSBkleRwUYBM5QIi2nPSEamAj6Ow40vPjwuKLvwQLzejODtrqjtnSIC5u9m2HQBwZZu1eQTPmcne6tA83cZTio0enaXCHFTFfeXax8SXWvfKB1vfh2sJZbnFB4Q5SopFzBi7hVqw0vrhdDGqd&X-Amz-Signature=bd14565ac74e330e8f482627ff13cfacaad2bf0c54d578a5fffaf22255e377b7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ7HPUNS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDleS823%2F%2BNq6PDd30bJhaP3UitDXiUCBx%2BiOxov145FAiAuUdgfc7Mhjrt8JH3Gw01vtMNuwP8aDRGMpOrh8%2BsrSSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMBoUOr6UZsbAUN%2F4UKtwDYZCuR%2BfszRVscZJJ0Pj%2BKtBvgEMiNC18Zabktt%2FTJ1HWoDWYYoULp%2FPvK2vf6h6AAz5mjbxMaram%2BQRYh3kjaH5%2BJJhti%2F73Bn2ET6c8%2BdwFPuIvtdZ7w67XUjXzN30X43n6xFUlYQQa%2B8lJ0qkAl2PKCh5KqLbruypwPAAGlVNuXwNTUFFgWMXrOGrrhV9t55nM56FunUYjyqcZTwiXaWR2CqRWcLubsQvTZt7tavfQ%2B90qqSczqG0%2F92qc7ZpnRav%2FH6LgmDZhcWVL3ZNvXJIhsbWObC%2BmlqHHyc5r9vgYhF7MWxAAaVbgHex8%2BrJ1FNo1wNRnc21uF5gN63OB6n5m2%2FeJX0Mybcep4aK8FrTJmEN11dWQe9IzdGYhVjDehZXA23xa%2FVQEHUO4LSb24hrbtcw4dp1CVhFVMsJKEAf5KFFj30XHjRIHstfZZknUlvz7leEBJ5MeDV3g6RsmiOF6%2FApwXo9KwvDsgVsO0NbZY0PJGl8v9CGig9Jty7lWqvQNMox%2BXTj%2BwZvp3u%2Bx6ybVxk71zi9dRAwT0jraJisVS8%2FCyYf2G27YM9Ah5y7G9QVePPTqDWUafdJir8RuBYvBHqQEWJkqy9T4bR17CJ0eK%2BqdQGJ9xcuvY9Aw65DewQY6pgEqj3Qw1s6NGlXq%2F3BoQ%2BnfplTkkYR8LRKh8jyyo6TCczFcO34lkyutp0BxGKs8ZiX2C35DyownZrCBSBkleRwUYBM5QIi2nPSEamAj6Ow40vPjwuKLvwQLzejODtrqjtnSIC5u9m2HQBwZZu1eQTPmcne6tA83cZTio0enaXCHFTFfeXax8SXWvfKB1vfh2sJZbnFB4Q5SopFzBi7hVqw0vrhdDGqd&X-Amz-Signature=d1e0ab10295ef741bcd06bfdb41138d2983270b79912a16c3cf7fadb8f53f506&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ7HPUNS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDleS823%2F%2BNq6PDd30bJhaP3UitDXiUCBx%2BiOxov145FAiAuUdgfc7Mhjrt8JH3Gw01vtMNuwP8aDRGMpOrh8%2BsrSSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMBoUOr6UZsbAUN%2F4UKtwDYZCuR%2BfszRVscZJJ0Pj%2BKtBvgEMiNC18Zabktt%2FTJ1HWoDWYYoULp%2FPvK2vf6h6AAz5mjbxMaram%2BQRYh3kjaH5%2BJJhti%2F73Bn2ET6c8%2BdwFPuIvtdZ7w67XUjXzN30X43n6xFUlYQQa%2B8lJ0qkAl2PKCh5KqLbruypwPAAGlVNuXwNTUFFgWMXrOGrrhV9t55nM56FunUYjyqcZTwiXaWR2CqRWcLubsQvTZt7tavfQ%2B90qqSczqG0%2F92qc7ZpnRav%2FH6LgmDZhcWVL3ZNvXJIhsbWObC%2BmlqHHyc5r9vgYhF7MWxAAaVbgHex8%2BrJ1FNo1wNRnc21uF5gN63OB6n5m2%2FeJX0Mybcep4aK8FrTJmEN11dWQe9IzdGYhVjDehZXA23xa%2FVQEHUO4LSb24hrbtcw4dp1CVhFVMsJKEAf5KFFj30XHjRIHstfZZknUlvz7leEBJ5MeDV3g6RsmiOF6%2FApwXo9KwvDsgVsO0NbZY0PJGl8v9CGig9Jty7lWqvQNMox%2BXTj%2BwZvp3u%2Bx6ybVxk71zi9dRAwT0jraJisVS8%2FCyYf2G27YM9Ah5y7G9QVePPTqDWUafdJir8RuBYvBHqQEWJkqy9T4bR17CJ0eK%2BqdQGJ9xcuvY9Aw65DewQY6pgEqj3Qw1s6NGlXq%2F3BoQ%2BnfplTkkYR8LRKh8jyyo6TCczFcO34lkyutp0BxGKs8ZiX2C35DyownZrCBSBkleRwUYBM5QIi2nPSEamAj6Ow40vPjwuKLvwQLzejODtrqjtnSIC5u9m2HQBwZZu1eQTPmcne6tA83cZTio0enaXCHFTFfeXax8SXWvfKB1vfh2sJZbnFB4Q5SopFzBi7hVqw0vrhdDGqd&X-Amz-Signature=415e456391db3be2f315484f1b2919e3894b7bfed3541eb57580308919630211&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ7HPUNS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDleS823%2F%2BNq6PDd30bJhaP3UitDXiUCBx%2BiOxov145FAiAuUdgfc7Mhjrt8JH3Gw01vtMNuwP8aDRGMpOrh8%2BsrSSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMBoUOr6UZsbAUN%2F4UKtwDYZCuR%2BfszRVscZJJ0Pj%2BKtBvgEMiNC18Zabktt%2FTJ1HWoDWYYoULp%2FPvK2vf6h6AAz5mjbxMaram%2BQRYh3kjaH5%2BJJhti%2F73Bn2ET6c8%2BdwFPuIvtdZ7w67XUjXzN30X43n6xFUlYQQa%2B8lJ0qkAl2PKCh5KqLbruypwPAAGlVNuXwNTUFFgWMXrOGrrhV9t55nM56FunUYjyqcZTwiXaWR2CqRWcLubsQvTZt7tavfQ%2B90qqSczqG0%2F92qc7ZpnRav%2FH6LgmDZhcWVL3ZNvXJIhsbWObC%2BmlqHHyc5r9vgYhF7MWxAAaVbgHex8%2BrJ1FNo1wNRnc21uF5gN63OB6n5m2%2FeJX0Mybcep4aK8FrTJmEN11dWQe9IzdGYhVjDehZXA23xa%2FVQEHUO4LSb24hrbtcw4dp1CVhFVMsJKEAf5KFFj30XHjRIHstfZZknUlvz7leEBJ5MeDV3g6RsmiOF6%2FApwXo9KwvDsgVsO0NbZY0PJGl8v9CGig9Jty7lWqvQNMox%2BXTj%2BwZvp3u%2Bx6ybVxk71zi9dRAwT0jraJisVS8%2FCyYf2G27YM9Ah5y7G9QVePPTqDWUafdJir8RuBYvBHqQEWJkqy9T4bR17CJ0eK%2BqdQGJ9xcuvY9Aw65DewQY6pgEqj3Qw1s6NGlXq%2F3BoQ%2BnfplTkkYR8LRKh8jyyo6TCczFcO34lkyutp0BxGKs8ZiX2C35DyownZrCBSBkleRwUYBM5QIi2nPSEamAj6Ow40vPjwuKLvwQLzejODtrqjtnSIC5u9m2HQBwZZu1eQTPmcne6tA83cZTio0enaXCHFTFfeXax8SXWvfKB1vfh2sJZbnFB4Q5SopFzBi7hVqw0vrhdDGqd&X-Amz-Signature=82d55a5a0805a51d3a73f0bbae44164d5bc75fbb5db6394ab7a69ae2a7193ce2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ7HPUNS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDleS823%2F%2BNq6PDd30bJhaP3UitDXiUCBx%2BiOxov145FAiAuUdgfc7Mhjrt8JH3Gw01vtMNuwP8aDRGMpOrh8%2BsrSSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMBoUOr6UZsbAUN%2F4UKtwDYZCuR%2BfszRVscZJJ0Pj%2BKtBvgEMiNC18Zabktt%2FTJ1HWoDWYYoULp%2FPvK2vf6h6AAz5mjbxMaram%2BQRYh3kjaH5%2BJJhti%2F73Bn2ET6c8%2BdwFPuIvtdZ7w67XUjXzN30X43n6xFUlYQQa%2B8lJ0qkAl2PKCh5KqLbruypwPAAGlVNuXwNTUFFgWMXrOGrrhV9t55nM56FunUYjyqcZTwiXaWR2CqRWcLubsQvTZt7tavfQ%2B90qqSczqG0%2F92qc7ZpnRav%2FH6LgmDZhcWVL3ZNvXJIhsbWObC%2BmlqHHyc5r9vgYhF7MWxAAaVbgHex8%2BrJ1FNo1wNRnc21uF5gN63OB6n5m2%2FeJX0Mybcep4aK8FrTJmEN11dWQe9IzdGYhVjDehZXA23xa%2FVQEHUO4LSb24hrbtcw4dp1CVhFVMsJKEAf5KFFj30XHjRIHstfZZknUlvz7leEBJ5MeDV3g6RsmiOF6%2FApwXo9KwvDsgVsO0NbZY0PJGl8v9CGig9Jty7lWqvQNMox%2BXTj%2BwZvp3u%2Bx6ybVxk71zi9dRAwT0jraJisVS8%2FCyYf2G27YM9Ah5y7G9QVePPTqDWUafdJir8RuBYvBHqQEWJkqy9T4bR17CJ0eK%2BqdQGJ9xcuvY9Aw65DewQY6pgEqj3Qw1s6NGlXq%2F3BoQ%2BnfplTkkYR8LRKh8jyyo6TCczFcO34lkyutp0BxGKs8ZiX2C35DyownZrCBSBkleRwUYBM5QIi2nPSEamAj6Ow40vPjwuKLvwQLzejODtrqjtnSIC5u9m2HQBwZZu1eQTPmcne6tA83cZTio0enaXCHFTFfeXax8SXWvfKB1vfh2sJZbnFB4Q5SopFzBi7hVqw0vrhdDGqd&X-Amz-Signature=f63afb3ce378853a9889b60839ae12be930e3cf17c78ead9b9332c8c4fc8361b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ7HPUNS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDleS823%2F%2BNq6PDd30bJhaP3UitDXiUCBx%2BiOxov145FAiAuUdgfc7Mhjrt8JH3Gw01vtMNuwP8aDRGMpOrh8%2BsrSSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMBoUOr6UZsbAUN%2F4UKtwDYZCuR%2BfszRVscZJJ0Pj%2BKtBvgEMiNC18Zabktt%2FTJ1HWoDWYYoULp%2FPvK2vf6h6AAz5mjbxMaram%2BQRYh3kjaH5%2BJJhti%2F73Bn2ET6c8%2BdwFPuIvtdZ7w67XUjXzN30X43n6xFUlYQQa%2B8lJ0qkAl2PKCh5KqLbruypwPAAGlVNuXwNTUFFgWMXrOGrrhV9t55nM56FunUYjyqcZTwiXaWR2CqRWcLubsQvTZt7tavfQ%2B90qqSczqG0%2F92qc7ZpnRav%2FH6LgmDZhcWVL3ZNvXJIhsbWObC%2BmlqHHyc5r9vgYhF7MWxAAaVbgHex8%2BrJ1FNo1wNRnc21uF5gN63OB6n5m2%2FeJX0Mybcep4aK8FrTJmEN11dWQe9IzdGYhVjDehZXA23xa%2FVQEHUO4LSb24hrbtcw4dp1CVhFVMsJKEAf5KFFj30XHjRIHstfZZknUlvz7leEBJ5MeDV3g6RsmiOF6%2FApwXo9KwvDsgVsO0NbZY0PJGl8v9CGig9Jty7lWqvQNMox%2BXTj%2BwZvp3u%2Bx6ybVxk71zi9dRAwT0jraJisVS8%2FCyYf2G27YM9Ah5y7G9QVePPTqDWUafdJir8RuBYvBHqQEWJkqy9T4bR17CJ0eK%2BqdQGJ9xcuvY9Aw65DewQY6pgEqj3Qw1s6NGlXq%2F3BoQ%2BnfplTkkYR8LRKh8jyyo6TCczFcO34lkyutp0BxGKs8ZiX2C35DyownZrCBSBkleRwUYBM5QIi2nPSEamAj6Ow40vPjwuKLvwQLzejODtrqjtnSIC5u9m2HQBwZZu1eQTPmcne6tA83cZTio0enaXCHFTFfeXax8SXWvfKB1vfh2sJZbnFB4Q5SopFzBi7hVqw0vrhdDGqd&X-Amz-Signature=dd6bb80fd9ebe16b262d0d75cb81f740716cdd12d1ed0a6ce8dfd4fc59318c38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ7HPUNS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDleS823%2F%2BNq6PDd30bJhaP3UitDXiUCBx%2BiOxov145FAiAuUdgfc7Mhjrt8JH3Gw01vtMNuwP8aDRGMpOrh8%2BsrSSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMBoUOr6UZsbAUN%2F4UKtwDYZCuR%2BfszRVscZJJ0Pj%2BKtBvgEMiNC18Zabktt%2FTJ1HWoDWYYoULp%2FPvK2vf6h6AAz5mjbxMaram%2BQRYh3kjaH5%2BJJhti%2F73Bn2ET6c8%2BdwFPuIvtdZ7w67XUjXzN30X43n6xFUlYQQa%2B8lJ0qkAl2PKCh5KqLbruypwPAAGlVNuXwNTUFFgWMXrOGrrhV9t55nM56FunUYjyqcZTwiXaWR2CqRWcLubsQvTZt7tavfQ%2B90qqSczqG0%2F92qc7ZpnRav%2FH6LgmDZhcWVL3ZNvXJIhsbWObC%2BmlqHHyc5r9vgYhF7MWxAAaVbgHex8%2BrJ1FNo1wNRnc21uF5gN63OB6n5m2%2FeJX0Mybcep4aK8FrTJmEN11dWQe9IzdGYhVjDehZXA23xa%2FVQEHUO4LSb24hrbtcw4dp1CVhFVMsJKEAf5KFFj30XHjRIHstfZZknUlvz7leEBJ5MeDV3g6RsmiOF6%2FApwXo9KwvDsgVsO0NbZY0PJGl8v9CGig9Jty7lWqvQNMox%2BXTj%2BwZvp3u%2Bx6ybVxk71zi9dRAwT0jraJisVS8%2FCyYf2G27YM9Ah5y7G9QVePPTqDWUafdJir8RuBYvBHqQEWJkqy9T4bR17CJ0eK%2BqdQGJ9xcuvY9Aw65DewQY6pgEqj3Qw1s6NGlXq%2F3BoQ%2BnfplTkkYR8LRKh8jyyo6TCczFcO34lkyutp0BxGKs8ZiX2C35DyownZrCBSBkleRwUYBM5QIi2nPSEamAj6Ow40vPjwuKLvwQLzejODtrqjtnSIC5u9m2HQBwZZu1eQTPmcne6tA83cZTio0enaXCHFTFfeXax8SXWvfKB1vfh2sJZbnFB4Q5SopFzBi7hVqw0vrhdDGqd&X-Amz-Signature=f4b9143e2ccf5046192968ff9ea5a1d59f1de502f700fe9c8426ff412c9e05b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
