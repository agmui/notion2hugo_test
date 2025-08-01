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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNZKO3U%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDslDxhkcOuYpC2nEiC5Rp2ENjUI774fGx8Wt0fx1HlPwIge520PMAteMmtRjuNJpZ5na%2FpWTZzU3YojUnzcl3JsTkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTbAVs2xZhNCqwSgCrcA6V3JzqWPYtBpgc800Apw8aWQ0G1b3LZGpAgug8RJVcDfYtAIoXU20LUxhiaq2dU0HYDBGVqA1F1tUwiDSQUAZYQm9KqP8jOzhW96Xr6ls2bzN4dW8APgc9Je7DCQ8nI7B1vJr5%2BI3P8ZDjl5CNIJ5cq4X%2Bsdpn%2B06UNS5fKRTBz4e5ecyWYicZcdc0FM4Zov2LGBRPymdZEQ8bvwFtMOJUfaUJanwgO4fwOyOgUTfoU2hW2uR020VpBtAHh86i%2BiBQL9kdNfIyK3hFWYpsMFS1yncIGLW%2FoQfWk407c2g80DIXOtxiZ%2B6z0m%2BkmO93S7kiI1842r7M2%2BJisIBHu0R4lHeHQJEUuV7grKG16nm9Fr3v8A%2BOhnx7yImY1rSlZIoumRBckMSLgbtzeoS0uo%2Fss%2FtqRcRC7K%2BYO03nO58i6Q%2BebYKGnOxkmjtm%2Bnz%2FyW7XMOWDGuVULoVQrIvwVTeJEWoMAMKrSS3a0zcsU%2By64CtoqnxIy53pER%2F%2F1GdWl7738dQ97UVpzRzEJyK3MG5isH%2FJqeni8tqs4aPmrFdIx75pKtyLqmdHfPP4z6ERD9TrJFSoLZC6FLAh98YgGoiRV%2Fue39DyHpyV%2B3qrVGbKWq1JCsDKMAWu0X%2ByCMI62ssQGOqUB8IvrB9tGixOTvsAHTA3cXKvSm5I8nQB0FcGQ8L12fOAMnJwH%2Fsy0aEPa0Sw%2FFAjakVOkkT8Ee5TbMWQ%2BnxKNX0IPxwpLw9bdMztDjIvBsTYvwk1x0Rp2YDVmi6ZV2qNFRlyKqN3zhlAvRupVZu5M0EUnNEL7TMTeap3i3APG3Kg%2F2lnwRdojmEML3LnIe4W8vkjyzdYDP2m1vsZAXyVNDs%2F9aaPm&X-Amz-Signature=2ff16d360f692e5089e43628ba92f9524307f301fd119ed283cf3d2c080b54a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNZKO3U%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDslDxhkcOuYpC2nEiC5Rp2ENjUI774fGx8Wt0fx1HlPwIge520PMAteMmtRjuNJpZ5na%2FpWTZzU3YojUnzcl3JsTkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTbAVs2xZhNCqwSgCrcA6V3JzqWPYtBpgc800Apw8aWQ0G1b3LZGpAgug8RJVcDfYtAIoXU20LUxhiaq2dU0HYDBGVqA1F1tUwiDSQUAZYQm9KqP8jOzhW96Xr6ls2bzN4dW8APgc9Je7DCQ8nI7B1vJr5%2BI3P8ZDjl5CNIJ5cq4X%2Bsdpn%2B06UNS5fKRTBz4e5ecyWYicZcdc0FM4Zov2LGBRPymdZEQ8bvwFtMOJUfaUJanwgO4fwOyOgUTfoU2hW2uR020VpBtAHh86i%2BiBQL9kdNfIyK3hFWYpsMFS1yncIGLW%2FoQfWk407c2g80DIXOtxiZ%2B6z0m%2BkmO93S7kiI1842r7M2%2BJisIBHu0R4lHeHQJEUuV7grKG16nm9Fr3v8A%2BOhnx7yImY1rSlZIoumRBckMSLgbtzeoS0uo%2Fss%2FtqRcRC7K%2BYO03nO58i6Q%2BebYKGnOxkmjtm%2Bnz%2FyW7XMOWDGuVULoVQrIvwVTeJEWoMAMKrSS3a0zcsU%2By64CtoqnxIy53pER%2F%2F1GdWl7738dQ97UVpzRzEJyK3MG5isH%2FJqeni8tqs4aPmrFdIx75pKtyLqmdHfPP4z6ERD9TrJFSoLZC6FLAh98YgGoiRV%2Fue39DyHpyV%2B3qrVGbKWq1JCsDKMAWu0X%2ByCMI62ssQGOqUB8IvrB9tGixOTvsAHTA3cXKvSm5I8nQB0FcGQ8L12fOAMnJwH%2Fsy0aEPa0Sw%2FFAjakVOkkT8Ee5TbMWQ%2BnxKNX0IPxwpLw9bdMztDjIvBsTYvwk1x0Rp2YDVmi6ZV2qNFRlyKqN3zhlAvRupVZu5M0EUnNEL7TMTeap3i3APG3Kg%2F2lnwRdojmEML3LnIe4W8vkjyzdYDP2m1vsZAXyVNDs%2F9aaPm&X-Amz-Signature=c9ccc2dbdef2a209bd1932ec824be04e6bcd41cda6649ff8a73bf0f0c95a680e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNZKO3U%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDslDxhkcOuYpC2nEiC5Rp2ENjUI774fGx8Wt0fx1HlPwIge520PMAteMmtRjuNJpZ5na%2FpWTZzU3YojUnzcl3JsTkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTbAVs2xZhNCqwSgCrcA6V3JzqWPYtBpgc800Apw8aWQ0G1b3LZGpAgug8RJVcDfYtAIoXU20LUxhiaq2dU0HYDBGVqA1F1tUwiDSQUAZYQm9KqP8jOzhW96Xr6ls2bzN4dW8APgc9Je7DCQ8nI7B1vJr5%2BI3P8ZDjl5CNIJ5cq4X%2Bsdpn%2B06UNS5fKRTBz4e5ecyWYicZcdc0FM4Zov2LGBRPymdZEQ8bvwFtMOJUfaUJanwgO4fwOyOgUTfoU2hW2uR020VpBtAHh86i%2BiBQL9kdNfIyK3hFWYpsMFS1yncIGLW%2FoQfWk407c2g80DIXOtxiZ%2B6z0m%2BkmO93S7kiI1842r7M2%2BJisIBHu0R4lHeHQJEUuV7grKG16nm9Fr3v8A%2BOhnx7yImY1rSlZIoumRBckMSLgbtzeoS0uo%2Fss%2FtqRcRC7K%2BYO03nO58i6Q%2BebYKGnOxkmjtm%2Bnz%2FyW7XMOWDGuVULoVQrIvwVTeJEWoMAMKrSS3a0zcsU%2By64CtoqnxIy53pER%2F%2F1GdWl7738dQ97UVpzRzEJyK3MG5isH%2FJqeni8tqs4aPmrFdIx75pKtyLqmdHfPP4z6ERD9TrJFSoLZC6FLAh98YgGoiRV%2Fue39DyHpyV%2B3qrVGbKWq1JCsDKMAWu0X%2ByCMI62ssQGOqUB8IvrB9tGixOTvsAHTA3cXKvSm5I8nQB0FcGQ8L12fOAMnJwH%2Fsy0aEPa0Sw%2FFAjakVOkkT8Ee5TbMWQ%2BnxKNX0IPxwpLw9bdMztDjIvBsTYvwk1x0Rp2YDVmi6ZV2qNFRlyKqN3zhlAvRupVZu5M0EUnNEL7TMTeap3i3APG3Kg%2F2lnwRdojmEML3LnIe4W8vkjyzdYDP2m1vsZAXyVNDs%2F9aaPm&X-Amz-Signature=989257f9c99c9a1132e68a97c5c423fd586ca243d334eb3133533879712bc071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNZKO3U%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDslDxhkcOuYpC2nEiC5Rp2ENjUI774fGx8Wt0fx1HlPwIge520PMAteMmtRjuNJpZ5na%2FpWTZzU3YojUnzcl3JsTkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTbAVs2xZhNCqwSgCrcA6V3JzqWPYtBpgc800Apw8aWQ0G1b3LZGpAgug8RJVcDfYtAIoXU20LUxhiaq2dU0HYDBGVqA1F1tUwiDSQUAZYQm9KqP8jOzhW96Xr6ls2bzN4dW8APgc9Je7DCQ8nI7B1vJr5%2BI3P8ZDjl5CNIJ5cq4X%2Bsdpn%2B06UNS5fKRTBz4e5ecyWYicZcdc0FM4Zov2LGBRPymdZEQ8bvwFtMOJUfaUJanwgO4fwOyOgUTfoU2hW2uR020VpBtAHh86i%2BiBQL9kdNfIyK3hFWYpsMFS1yncIGLW%2FoQfWk407c2g80DIXOtxiZ%2B6z0m%2BkmO93S7kiI1842r7M2%2BJisIBHu0R4lHeHQJEUuV7grKG16nm9Fr3v8A%2BOhnx7yImY1rSlZIoumRBckMSLgbtzeoS0uo%2Fss%2FtqRcRC7K%2BYO03nO58i6Q%2BebYKGnOxkmjtm%2Bnz%2FyW7XMOWDGuVULoVQrIvwVTeJEWoMAMKrSS3a0zcsU%2By64CtoqnxIy53pER%2F%2F1GdWl7738dQ97UVpzRzEJyK3MG5isH%2FJqeni8tqs4aPmrFdIx75pKtyLqmdHfPP4z6ERD9TrJFSoLZC6FLAh98YgGoiRV%2Fue39DyHpyV%2B3qrVGbKWq1JCsDKMAWu0X%2ByCMI62ssQGOqUB8IvrB9tGixOTvsAHTA3cXKvSm5I8nQB0FcGQ8L12fOAMnJwH%2Fsy0aEPa0Sw%2FFAjakVOkkT8Ee5TbMWQ%2BnxKNX0IPxwpLw9bdMztDjIvBsTYvwk1x0Rp2YDVmi6ZV2qNFRlyKqN3zhlAvRupVZu5M0EUnNEL7TMTeap3i3APG3Kg%2F2lnwRdojmEML3LnIe4W8vkjyzdYDP2m1vsZAXyVNDs%2F9aaPm&X-Amz-Signature=3c06c41434d5fcd65861ace257ac3f64be5dc30bc56bce4c25240bfb2a6d1e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNZKO3U%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDslDxhkcOuYpC2nEiC5Rp2ENjUI774fGx8Wt0fx1HlPwIge520PMAteMmtRjuNJpZ5na%2FpWTZzU3YojUnzcl3JsTkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTbAVs2xZhNCqwSgCrcA6V3JzqWPYtBpgc800Apw8aWQ0G1b3LZGpAgug8RJVcDfYtAIoXU20LUxhiaq2dU0HYDBGVqA1F1tUwiDSQUAZYQm9KqP8jOzhW96Xr6ls2bzN4dW8APgc9Je7DCQ8nI7B1vJr5%2BI3P8ZDjl5CNIJ5cq4X%2Bsdpn%2B06UNS5fKRTBz4e5ecyWYicZcdc0FM4Zov2LGBRPymdZEQ8bvwFtMOJUfaUJanwgO4fwOyOgUTfoU2hW2uR020VpBtAHh86i%2BiBQL9kdNfIyK3hFWYpsMFS1yncIGLW%2FoQfWk407c2g80DIXOtxiZ%2B6z0m%2BkmO93S7kiI1842r7M2%2BJisIBHu0R4lHeHQJEUuV7grKG16nm9Fr3v8A%2BOhnx7yImY1rSlZIoumRBckMSLgbtzeoS0uo%2Fss%2FtqRcRC7K%2BYO03nO58i6Q%2BebYKGnOxkmjtm%2Bnz%2FyW7XMOWDGuVULoVQrIvwVTeJEWoMAMKrSS3a0zcsU%2By64CtoqnxIy53pER%2F%2F1GdWl7738dQ97UVpzRzEJyK3MG5isH%2FJqeni8tqs4aPmrFdIx75pKtyLqmdHfPP4z6ERD9TrJFSoLZC6FLAh98YgGoiRV%2Fue39DyHpyV%2B3qrVGbKWq1JCsDKMAWu0X%2ByCMI62ssQGOqUB8IvrB9tGixOTvsAHTA3cXKvSm5I8nQB0FcGQ8L12fOAMnJwH%2Fsy0aEPa0Sw%2FFAjakVOkkT8Ee5TbMWQ%2BnxKNX0IPxwpLw9bdMztDjIvBsTYvwk1x0Rp2YDVmi6ZV2qNFRlyKqN3zhlAvRupVZu5M0EUnNEL7TMTeap3i3APG3Kg%2F2lnwRdojmEML3LnIe4W8vkjyzdYDP2m1vsZAXyVNDs%2F9aaPm&X-Amz-Signature=754ccc48d82c6f80c832a82f30ce2937963bc09e1c94b6e747a76eeb70e53a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNZKO3U%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDslDxhkcOuYpC2nEiC5Rp2ENjUI774fGx8Wt0fx1HlPwIge520PMAteMmtRjuNJpZ5na%2FpWTZzU3YojUnzcl3JsTkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTbAVs2xZhNCqwSgCrcA6V3JzqWPYtBpgc800Apw8aWQ0G1b3LZGpAgug8RJVcDfYtAIoXU20LUxhiaq2dU0HYDBGVqA1F1tUwiDSQUAZYQm9KqP8jOzhW96Xr6ls2bzN4dW8APgc9Je7DCQ8nI7B1vJr5%2BI3P8ZDjl5CNIJ5cq4X%2Bsdpn%2B06UNS5fKRTBz4e5ecyWYicZcdc0FM4Zov2LGBRPymdZEQ8bvwFtMOJUfaUJanwgO4fwOyOgUTfoU2hW2uR020VpBtAHh86i%2BiBQL9kdNfIyK3hFWYpsMFS1yncIGLW%2FoQfWk407c2g80DIXOtxiZ%2B6z0m%2BkmO93S7kiI1842r7M2%2BJisIBHu0R4lHeHQJEUuV7grKG16nm9Fr3v8A%2BOhnx7yImY1rSlZIoumRBckMSLgbtzeoS0uo%2Fss%2FtqRcRC7K%2BYO03nO58i6Q%2BebYKGnOxkmjtm%2Bnz%2FyW7XMOWDGuVULoVQrIvwVTeJEWoMAMKrSS3a0zcsU%2By64CtoqnxIy53pER%2F%2F1GdWl7738dQ97UVpzRzEJyK3MG5isH%2FJqeni8tqs4aPmrFdIx75pKtyLqmdHfPP4z6ERD9TrJFSoLZC6FLAh98YgGoiRV%2Fue39DyHpyV%2B3qrVGbKWq1JCsDKMAWu0X%2ByCMI62ssQGOqUB8IvrB9tGixOTvsAHTA3cXKvSm5I8nQB0FcGQ8L12fOAMnJwH%2Fsy0aEPa0Sw%2FFAjakVOkkT8Ee5TbMWQ%2BnxKNX0IPxwpLw9bdMztDjIvBsTYvwk1x0Rp2YDVmi6ZV2qNFRlyKqN3zhlAvRupVZu5M0EUnNEL7TMTeap3i3APG3Kg%2F2lnwRdojmEML3LnIe4W8vkjyzdYDP2m1vsZAXyVNDs%2F9aaPm&X-Amz-Signature=3f0a47d0d93a0058fef757b4b2444faaec0986b92f37b6507df47874bb74bc8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNZKO3U%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDslDxhkcOuYpC2nEiC5Rp2ENjUI774fGx8Wt0fx1HlPwIge520PMAteMmtRjuNJpZ5na%2FpWTZzU3YojUnzcl3JsTkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTbAVs2xZhNCqwSgCrcA6V3JzqWPYtBpgc800Apw8aWQ0G1b3LZGpAgug8RJVcDfYtAIoXU20LUxhiaq2dU0HYDBGVqA1F1tUwiDSQUAZYQm9KqP8jOzhW96Xr6ls2bzN4dW8APgc9Je7DCQ8nI7B1vJr5%2BI3P8ZDjl5CNIJ5cq4X%2Bsdpn%2B06UNS5fKRTBz4e5ecyWYicZcdc0FM4Zov2LGBRPymdZEQ8bvwFtMOJUfaUJanwgO4fwOyOgUTfoU2hW2uR020VpBtAHh86i%2BiBQL9kdNfIyK3hFWYpsMFS1yncIGLW%2FoQfWk407c2g80DIXOtxiZ%2B6z0m%2BkmO93S7kiI1842r7M2%2BJisIBHu0R4lHeHQJEUuV7grKG16nm9Fr3v8A%2BOhnx7yImY1rSlZIoumRBckMSLgbtzeoS0uo%2Fss%2FtqRcRC7K%2BYO03nO58i6Q%2BebYKGnOxkmjtm%2Bnz%2FyW7XMOWDGuVULoVQrIvwVTeJEWoMAMKrSS3a0zcsU%2By64CtoqnxIy53pER%2F%2F1GdWl7738dQ97UVpzRzEJyK3MG5isH%2FJqeni8tqs4aPmrFdIx75pKtyLqmdHfPP4z6ERD9TrJFSoLZC6FLAh98YgGoiRV%2Fue39DyHpyV%2B3qrVGbKWq1JCsDKMAWu0X%2ByCMI62ssQGOqUB8IvrB9tGixOTvsAHTA3cXKvSm5I8nQB0FcGQ8L12fOAMnJwH%2Fsy0aEPa0Sw%2FFAjakVOkkT8Ee5TbMWQ%2BnxKNX0IPxwpLw9bdMztDjIvBsTYvwk1x0Rp2YDVmi6ZV2qNFRlyKqN3zhlAvRupVZu5M0EUnNEL7TMTeap3i3APG3Kg%2F2lnwRdojmEML3LnIe4W8vkjyzdYDP2m1vsZAXyVNDs%2F9aaPm&X-Amz-Signature=a9eb918ef27ac94cd0d8f7bff3db5873c98caaa0659a182c621d716bc6c3240f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNZKO3U%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDslDxhkcOuYpC2nEiC5Rp2ENjUI774fGx8Wt0fx1HlPwIge520PMAteMmtRjuNJpZ5na%2FpWTZzU3YojUnzcl3JsTkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTbAVs2xZhNCqwSgCrcA6V3JzqWPYtBpgc800Apw8aWQ0G1b3LZGpAgug8RJVcDfYtAIoXU20LUxhiaq2dU0HYDBGVqA1F1tUwiDSQUAZYQm9KqP8jOzhW96Xr6ls2bzN4dW8APgc9Je7DCQ8nI7B1vJr5%2BI3P8ZDjl5CNIJ5cq4X%2Bsdpn%2B06UNS5fKRTBz4e5ecyWYicZcdc0FM4Zov2LGBRPymdZEQ8bvwFtMOJUfaUJanwgO4fwOyOgUTfoU2hW2uR020VpBtAHh86i%2BiBQL9kdNfIyK3hFWYpsMFS1yncIGLW%2FoQfWk407c2g80DIXOtxiZ%2B6z0m%2BkmO93S7kiI1842r7M2%2BJisIBHu0R4lHeHQJEUuV7grKG16nm9Fr3v8A%2BOhnx7yImY1rSlZIoumRBckMSLgbtzeoS0uo%2Fss%2FtqRcRC7K%2BYO03nO58i6Q%2BebYKGnOxkmjtm%2Bnz%2FyW7XMOWDGuVULoVQrIvwVTeJEWoMAMKrSS3a0zcsU%2By64CtoqnxIy53pER%2F%2F1GdWl7738dQ97UVpzRzEJyK3MG5isH%2FJqeni8tqs4aPmrFdIx75pKtyLqmdHfPP4z6ERD9TrJFSoLZC6FLAh98YgGoiRV%2Fue39DyHpyV%2B3qrVGbKWq1JCsDKMAWu0X%2ByCMI62ssQGOqUB8IvrB9tGixOTvsAHTA3cXKvSm5I8nQB0FcGQ8L12fOAMnJwH%2Fsy0aEPa0Sw%2FFAjakVOkkT8Ee5TbMWQ%2BnxKNX0IPxwpLw9bdMztDjIvBsTYvwk1x0Rp2YDVmi6ZV2qNFRlyKqN3zhlAvRupVZu5M0EUnNEL7TMTeap3i3APG3Kg%2F2lnwRdojmEML3LnIe4W8vkjyzdYDP2m1vsZAXyVNDs%2F9aaPm&X-Amz-Signature=201129ae19e12622d3f38755c4046c245113ced1c97595581733532a520353ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
