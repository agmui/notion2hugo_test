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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NO4JOS6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmlFReoWRbbz2vi1WRhBVnt0sKXHETCi5uFL3JGOVAwIhAJPEiI1og9pvQXXcXRsuEsMgbkjTh7wqEJpsuVD1Jjm2KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxclH6qGSaQm0dJonQq3ANLUrHe7CczhWd4tXhfxS4AcLJf2rKuoFuJcP5jOyNcT6lqtmlFeMXwIkjz57zEzDoV9WDxBxUwZerN4ojSQZbNqx6SdgXMZ5WQuuDYL6Y%2Fmt%2Ful9Cpv52M3LIz142F74Wy%2B3h3Bc7EBQh3mnt21H1rJkZkjHSCsPt8a0BFlnr6hhjYLlOBSg0krYHTrDqRnU82W7xUE9kNDCFS3vT4NApU5IkBCp8g6K5afi%2FG1W1JmoX0%2FvTdGBnKDZ31zOCzwY0dLlzwC2RZZzKeVSGsW2KSX4RTcp2BEOmS0RXpohIOvv%2B39mVBiRjnBBfYsfgQJSZ4d0eA0ciRnVR9PnP0Ie%2FseKQhOvoOnl2KfAXXtmNH6zyIKYdiE0xPtjxKAnWeoqpUsFCfyPRTGbN3dOoPZgj4QH2egtL8sGHROqeXD%2F%2FNe7Ica0mpF6eKQgXPSOG8YKdPh8Rb9p8NtTD%2FTGHpZoSd3Km0diL9YUBrLjmymG8OmA2GIYa9wqcQDkaYHYGdpqFFtkMxiMdH84LDLsf1y%2Bu0NGoAEYLm904BMz17luKGXGMdN6iAt4yX5UDCCJ8D6GSw1c2%2FyjWQNm73yIFWnonX8cOaHlb0%2FCXGoMtpLw%2BbR5UjUd%2Bnw1xk%2Bt5PTTCfudC%2BBjqkAf9BAMv9uffbn5p8CTl9pNuit2I%2FcUKNVaFrzE8G3vzrOrwTUpGAnON%2B6pkioivktwurNHSKGinazOtixmD3aWb%2Ff%2BiRWome73vJ40PUk%2BcuFP4kRNuGnsOWdEwq0O38u%2BFnLEVkTTVX3kc5r7FFigzxVXeMgZ7CELruLWZxSb0rLLHXSniWJfL9BcoklEfp%2BwImngnJLqQRynxEMifMZuJcKTFC&X-Amz-Signature=19153635408986ed2c98e02eaca86a65bfee286d53088820e2d7e87ab60c5637&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NO4JOS6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmlFReoWRbbz2vi1WRhBVnt0sKXHETCi5uFL3JGOVAwIhAJPEiI1og9pvQXXcXRsuEsMgbkjTh7wqEJpsuVD1Jjm2KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxclH6qGSaQm0dJonQq3ANLUrHe7CczhWd4tXhfxS4AcLJf2rKuoFuJcP5jOyNcT6lqtmlFeMXwIkjz57zEzDoV9WDxBxUwZerN4ojSQZbNqx6SdgXMZ5WQuuDYL6Y%2Fmt%2Ful9Cpv52M3LIz142F74Wy%2B3h3Bc7EBQh3mnt21H1rJkZkjHSCsPt8a0BFlnr6hhjYLlOBSg0krYHTrDqRnU82W7xUE9kNDCFS3vT4NApU5IkBCp8g6K5afi%2FG1W1JmoX0%2FvTdGBnKDZ31zOCzwY0dLlzwC2RZZzKeVSGsW2KSX4RTcp2BEOmS0RXpohIOvv%2B39mVBiRjnBBfYsfgQJSZ4d0eA0ciRnVR9PnP0Ie%2FseKQhOvoOnl2KfAXXtmNH6zyIKYdiE0xPtjxKAnWeoqpUsFCfyPRTGbN3dOoPZgj4QH2egtL8sGHROqeXD%2F%2FNe7Ica0mpF6eKQgXPSOG8YKdPh8Rb9p8NtTD%2FTGHpZoSd3Km0diL9YUBrLjmymG8OmA2GIYa9wqcQDkaYHYGdpqFFtkMxiMdH84LDLsf1y%2Bu0NGoAEYLm904BMz17luKGXGMdN6iAt4yX5UDCCJ8D6GSw1c2%2FyjWQNm73yIFWnonX8cOaHlb0%2FCXGoMtpLw%2BbR5UjUd%2Bnw1xk%2Bt5PTTCfudC%2BBjqkAf9BAMv9uffbn5p8CTl9pNuit2I%2FcUKNVaFrzE8G3vzrOrwTUpGAnON%2B6pkioivktwurNHSKGinazOtixmD3aWb%2Ff%2BiRWome73vJ40PUk%2BcuFP4kRNuGnsOWdEwq0O38u%2BFnLEVkTTVX3kc5r7FFigzxVXeMgZ7CELruLWZxSb0rLLHXSniWJfL9BcoklEfp%2BwImngnJLqQRynxEMifMZuJcKTFC&X-Amz-Signature=087853292b99fc35fad36029d56d55e648d6b00762286ba8635ae9654d3b1808&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NO4JOS6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmlFReoWRbbz2vi1WRhBVnt0sKXHETCi5uFL3JGOVAwIhAJPEiI1og9pvQXXcXRsuEsMgbkjTh7wqEJpsuVD1Jjm2KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxclH6qGSaQm0dJonQq3ANLUrHe7CczhWd4tXhfxS4AcLJf2rKuoFuJcP5jOyNcT6lqtmlFeMXwIkjz57zEzDoV9WDxBxUwZerN4ojSQZbNqx6SdgXMZ5WQuuDYL6Y%2Fmt%2Ful9Cpv52M3LIz142F74Wy%2B3h3Bc7EBQh3mnt21H1rJkZkjHSCsPt8a0BFlnr6hhjYLlOBSg0krYHTrDqRnU82W7xUE9kNDCFS3vT4NApU5IkBCp8g6K5afi%2FG1W1JmoX0%2FvTdGBnKDZ31zOCzwY0dLlzwC2RZZzKeVSGsW2KSX4RTcp2BEOmS0RXpohIOvv%2B39mVBiRjnBBfYsfgQJSZ4d0eA0ciRnVR9PnP0Ie%2FseKQhOvoOnl2KfAXXtmNH6zyIKYdiE0xPtjxKAnWeoqpUsFCfyPRTGbN3dOoPZgj4QH2egtL8sGHROqeXD%2F%2FNe7Ica0mpF6eKQgXPSOG8YKdPh8Rb9p8NtTD%2FTGHpZoSd3Km0diL9YUBrLjmymG8OmA2GIYa9wqcQDkaYHYGdpqFFtkMxiMdH84LDLsf1y%2Bu0NGoAEYLm904BMz17luKGXGMdN6iAt4yX5UDCCJ8D6GSw1c2%2FyjWQNm73yIFWnonX8cOaHlb0%2FCXGoMtpLw%2BbR5UjUd%2Bnw1xk%2Bt5PTTCfudC%2BBjqkAf9BAMv9uffbn5p8CTl9pNuit2I%2FcUKNVaFrzE8G3vzrOrwTUpGAnON%2B6pkioivktwurNHSKGinazOtixmD3aWb%2Ff%2BiRWome73vJ40PUk%2BcuFP4kRNuGnsOWdEwq0O38u%2BFnLEVkTTVX3kc5r7FFigzxVXeMgZ7CELruLWZxSb0rLLHXSniWJfL9BcoklEfp%2BwImngnJLqQRynxEMifMZuJcKTFC&X-Amz-Signature=f607a28a2d959d5eb0f6826db714ec8078b4d178f92214c05c84c012232c7918&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NO4JOS6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmlFReoWRbbz2vi1WRhBVnt0sKXHETCi5uFL3JGOVAwIhAJPEiI1og9pvQXXcXRsuEsMgbkjTh7wqEJpsuVD1Jjm2KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxclH6qGSaQm0dJonQq3ANLUrHe7CczhWd4tXhfxS4AcLJf2rKuoFuJcP5jOyNcT6lqtmlFeMXwIkjz57zEzDoV9WDxBxUwZerN4ojSQZbNqx6SdgXMZ5WQuuDYL6Y%2Fmt%2Ful9Cpv52M3LIz142F74Wy%2B3h3Bc7EBQh3mnt21H1rJkZkjHSCsPt8a0BFlnr6hhjYLlOBSg0krYHTrDqRnU82W7xUE9kNDCFS3vT4NApU5IkBCp8g6K5afi%2FG1W1JmoX0%2FvTdGBnKDZ31zOCzwY0dLlzwC2RZZzKeVSGsW2KSX4RTcp2BEOmS0RXpohIOvv%2B39mVBiRjnBBfYsfgQJSZ4d0eA0ciRnVR9PnP0Ie%2FseKQhOvoOnl2KfAXXtmNH6zyIKYdiE0xPtjxKAnWeoqpUsFCfyPRTGbN3dOoPZgj4QH2egtL8sGHROqeXD%2F%2FNe7Ica0mpF6eKQgXPSOG8YKdPh8Rb9p8NtTD%2FTGHpZoSd3Km0diL9YUBrLjmymG8OmA2GIYa9wqcQDkaYHYGdpqFFtkMxiMdH84LDLsf1y%2Bu0NGoAEYLm904BMz17luKGXGMdN6iAt4yX5UDCCJ8D6GSw1c2%2FyjWQNm73yIFWnonX8cOaHlb0%2FCXGoMtpLw%2BbR5UjUd%2Bnw1xk%2Bt5PTTCfudC%2BBjqkAf9BAMv9uffbn5p8CTl9pNuit2I%2FcUKNVaFrzE8G3vzrOrwTUpGAnON%2B6pkioivktwurNHSKGinazOtixmD3aWb%2Ff%2BiRWome73vJ40PUk%2BcuFP4kRNuGnsOWdEwq0O38u%2BFnLEVkTTVX3kc5r7FFigzxVXeMgZ7CELruLWZxSb0rLLHXSniWJfL9BcoklEfp%2BwImngnJLqQRynxEMifMZuJcKTFC&X-Amz-Signature=69382feb00642ee981d6322e7f4c3c7c5815ef4bfc3806062d27df560de35b94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NO4JOS6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmlFReoWRbbz2vi1WRhBVnt0sKXHETCi5uFL3JGOVAwIhAJPEiI1og9pvQXXcXRsuEsMgbkjTh7wqEJpsuVD1Jjm2KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxclH6qGSaQm0dJonQq3ANLUrHe7CczhWd4tXhfxS4AcLJf2rKuoFuJcP5jOyNcT6lqtmlFeMXwIkjz57zEzDoV9WDxBxUwZerN4ojSQZbNqx6SdgXMZ5WQuuDYL6Y%2Fmt%2Ful9Cpv52M3LIz142F74Wy%2B3h3Bc7EBQh3mnt21H1rJkZkjHSCsPt8a0BFlnr6hhjYLlOBSg0krYHTrDqRnU82W7xUE9kNDCFS3vT4NApU5IkBCp8g6K5afi%2FG1W1JmoX0%2FvTdGBnKDZ31zOCzwY0dLlzwC2RZZzKeVSGsW2KSX4RTcp2BEOmS0RXpohIOvv%2B39mVBiRjnBBfYsfgQJSZ4d0eA0ciRnVR9PnP0Ie%2FseKQhOvoOnl2KfAXXtmNH6zyIKYdiE0xPtjxKAnWeoqpUsFCfyPRTGbN3dOoPZgj4QH2egtL8sGHROqeXD%2F%2FNe7Ica0mpF6eKQgXPSOG8YKdPh8Rb9p8NtTD%2FTGHpZoSd3Km0diL9YUBrLjmymG8OmA2GIYa9wqcQDkaYHYGdpqFFtkMxiMdH84LDLsf1y%2Bu0NGoAEYLm904BMz17luKGXGMdN6iAt4yX5UDCCJ8D6GSw1c2%2FyjWQNm73yIFWnonX8cOaHlb0%2FCXGoMtpLw%2BbR5UjUd%2Bnw1xk%2Bt5PTTCfudC%2BBjqkAf9BAMv9uffbn5p8CTl9pNuit2I%2FcUKNVaFrzE8G3vzrOrwTUpGAnON%2B6pkioivktwurNHSKGinazOtixmD3aWb%2Ff%2BiRWome73vJ40PUk%2BcuFP4kRNuGnsOWdEwq0O38u%2BFnLEVkTTVX3kc5r7FFigzxVXeMgZ7CELruLWZxSb0rLLHXSniWJfL9BcoklEfp%2BwImngnJLqQRynxEMifMZuJcKTFC&X-Amz-Signature=902bb576ca07ec9cccd4aff62991b02963df791ae0c1d85ac1b378a547a3aaac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NO4JOS6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmlFReoWRbbz2vi1WRhBVnt0sKXHETCi5uFL3JGOVAwIhAJPEiI1og9pvQXXcXRsuEsMgbkjTh7wqEJpsuVD1Jjm2KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxclH6qGSaQm0dJonQq3ANLUrHe7CczhWd4tXhfxS4AcLJf2rKuoFuJcP5jOyNcT6lqtmlFeMXwIkjz57zEzDoV9WDxBxUwZerN4ojSQZbNqx6SdgXMZ5WQuuDYL6Y%2Fmt%2Ful9Cpv52M3LIz142F74Wy%2B3h3Bc7EBQh3mnt21H1rJkZkjHSCsPt8a0BFlnr6hhjYLlOBSg0krYHTrDqRnU82W7xUE9kNDCFS3vT4NApU5IkBCp8g6K5afi%2FG1W1JmoX0%2FvTdGBnKDZ31zOCzwY0dLlzwC2RZZzKeVSGsW2KSX4RTcp2BEOmS0RXpohIOvv%2B39mVBiRjnBBfYsfgQJSZ4d0eA0ciRnVR9PnP0Ie%2FseKQhOvoOnl2KfAXXtmNH6zyIKYdiE0xPtjxKAnWeoqpUsFCfyPRTGbN3dOoPZgj4QH2egtL8sGHROqeXD%2F%2FNe7Ica0mpF6eKQgXPSOG8YKdPh8Rb9p8NtTD%2FTGHpZoSd3Km0diL9YUBrLjmymG8OmA2GIYa9wqcQDkaYHYGdpqFFtkMxiMdH84LDLsf1y%2Bu0NGoAEYLm904BMz17luKGXGMdN6iAt4yX5UDCCJ8D6GSw1c2%2FyjWQNm73yIFWnonX8cOaHlb0%2FCXGoMtpLw%2BbR5UjUd%2Bnw1xk%2Bt5PTTCfudC%2BBjqkAf9BAMv9uffbn5p8CTl9pNuit2I%2FcUKNVaFrzE8G3vzrOrwTUpGAnON%2B6pkioivktwurNHSKGinazOtixmD3aWb%2Ff%2BiRWome73vJ40PUk%2BcuFP4kRNuGnsOWdEwq0O38u%2BFnLEVkTTVX3kc5r7FFigzxVXeMgZ7CELruLWZxSb0rLLHXSniWJfL9BcoklEfp%2BwImngnJLqQRynxEMifMZuJcKTFC&X-Amz-Signature=d6d8808dbc2b3c336f783ab5c752116ffcee2c426f94b9d88d60363a53b63485&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NO4JOS6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmlFReoWRbbz2vi1WRhBVnt0sKXHETCi5uFL3JGOVAwIhAJPEiI1og9pvQXXcXRsuEsMgbkjTh7wqEJpsuVD1Jjm2KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxclH6qGSaQm0dJonQq3ANLUrHe7CczhWd4tXhfxS4AcLJf2rKuoFuJcP5jOyNcT6lqtmlFeMXwIkjz57zEzDoV9WDxBxUwZerN4ojSQZbNqx6SdgXMZ5WQuuDYL6Y%2Fmt%2Ful9Cpv52M3LIz142F74Wy%2B3h3Bc7EBQh3mnt21H1rJkZkjHSCsPt8a0BFlnr6hhjYLlOBSg0krYHTrDqRnU82W7xUE9kNDCFS3vT4NApU5IkBCp8g6K5afi%2FG1W1JmoX0%2FvTdGBnKDZ31zOCzwY0dLlzwC2RZZzKeVSGsW2KSX4RTcp2BEOmS0RXpohIOvv%2B39mVBiRjnBBfYsfgQJSZ4d0eA0ciRnVR9PnP0Ie%2FseKQhOvoOnl2KfAXXtmNH6zyIKYdiE0xPtjxKAnWeoqpUsFCfyPRTGbN3dOoPZgj4QH2egtL8sGHROqeXD%2F%2FNe7Ica0mpF6eKQgXPSOG8YKdPh8Rb9p8NtTD%2FTGHpZoSd3Km0diL9YUBrLjmymG8OmA2GIYa9wqcQDkaYHYGdpqFFtkMxiMdH84LDLsf1y%2Bu0NGoAEYLm904BMz17luKGXGMdN6iAt4yX5UDCCJ8D6GSw1c2%2FyjWQNm73yIFWnonX8cOaHlb0%2FCXGoMtpLw%2BbR5UjUd%2Bnw1xk%2Bt5PTTCfudC%2BBjqkAf9BAMv9uffbn5p8CTl9pNuit2I%2FcUKNVaFrzE8G3vzrOrwTUpGAnON%2B6pkioivktwurNHSKGinazOtixmD3aWb%2Ff%2BiRWome73vJ40PUk%2BcuFP4kRNuGnsOWdEwq0O38u%2BFnLEVkTTVX3kc5r7FFigzxVXeMgZ7CELruLWZxSb0rLLHXSniWJfL9BcoklEfp%2BwImngnJLqQRynxEMifMZuJcKTFC&X-Amz-Signature=24e6855f6e09c04778baca02c3796913b5001d98cc76735aaf1f9311a6718f0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NO4JOS6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmlFReoWRbbz2vi1WRhBVnt0sKXHETCi5uFL3JGOVAwIhAJPEiI1og9pvQXXcXRsuEsMgbkjTh7wqEJpsuVD1Jjm2KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxclH6qGSaQm0dJonQq3ANLUrHe7CczhWd4tXhfxS4AcLJf2rKuoFuJcP5jOyNcT6lqtmlFeMXwIkjz57zEzDoV9WDxBxUwZerN4ojSQZbNqx6SdgXMZ5WQuuDYL6Y%2Fmt%2Ful9Cpv52M3LIz142F74Wy%2B3h3Bc7EBQh3mnt21H1rJkZkjHSCsPt8a0BFlnr6hhjYLlOBSg0krYHTrDqRnU82W7xUE9kNDCFS3vT4NApU5IkBCp8g6K5afi%2FG1W1JmoX0%2FvTdGBnKDZ31zOCzwY0dLlzwC2RZZzKeVSGsW2KSX4RTcp2BEOmS0RXpohIOvv%2B39mVBiRjnBBfYsfgQJSZ4d0eA0ciRnVR9PnP0Ie%2FseKQhOvoOnl2KfAXXtmNH6zyIKYdiE0xPtjxKAnWeoqpUsFCfyPRTGbN3dOoPZgj4QH2egtL8sGHROqeXD%2F%2FNe7Ica0mpF6eKQgXPSOG8YKdPh8Rb9p8NtTD%2FTGHpZoSd3Km0diL9YUBrLjmymG8OmA2GIYa9wqcQDkaYHYGdpqFFtkMxiMdH84LDLsf1y%2Bu0NGoAEYLm904BMz17luKGXGMdN6iAt4yX5UDCCJ8D6GSw1c2%2FyjWQNm73yIFWnonX8cOaHlb0%2FCXGoMtpLw%2BbR5UjUd%2Bnw1xk%2Bt5PTTCfudC%2BBjqkAf9BAMv9uffbn5p8CTl9pNuit2I%2FcUKNVaFrzE8G3vzrOrwTUpGAnON%2B6pkioivktwurNHSKGinazOtixmD3aWb%2Ff%2BiRWome73vJ40PUk%2BcuFP4kRNuGnsOWdEwq0O38u%2BFnLEVkTTVX3kc5r7FFigzxVXeMgZ7CELruLWZxSb0rLLHXSniWJfL9BcoklEfp%2BwImngnJLqQRynxEMifMZuJcKTFC&X-Amz-Signature=c05f2f62f3cb54bb3d6f33464c19567b7e43ba15b88fefd52158bf72188d56cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
