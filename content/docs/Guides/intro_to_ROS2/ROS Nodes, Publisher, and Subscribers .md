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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTS7P4DS%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC5MBZlm2bLNEjZNLoIwHhpoGFaRqv4FWPKKXDt%2FlCDYAIhAMyOlRpNbZ4MXz0P4XtFvJRruzVCOJHUvRf56hfY9c8GKv8DCGIQABoMNjM3NDIzMTgzODA1IgzOEOTqk%2BqPizbGvEwq3APtLMxkaxQIyE2fqfQrSxuS2kndvjxKhrEhm8teL%2B3%2FQtnlqhFd%2FFJUvV%2Fr%2BsZVrLTWdLdrDI2n94KsPJH8YItVUyElWiOdVmw%2Fe2%2FAxJN1YqWnjtOrzuMNoPNA%2BqoSfzIzcRNPrUS%2Ffhlrhm1MEb%2FH4dpHZxPEqH1ubG5078s1TvpiQSLRK%2BjkCZwfIzIN8EZSpqvSqdkOgRMSHjuGOXy6%2Fwe6iEqtm3mW6vieMiWaxGeEcBuh9Ln7J6UAqIKImX2AensB0JIQoAsVF2REfWoCTuiRyX9Xj3ipnK8SgwE9LsxZWil4KFPMlJuPcMM6FP6%2F3%2F1mwCqi14pFww86%2FwD09omZBjdH65CySVfjZ3yqHz%2F1XF7YdYAyyPu08EwWm0VOoqrLtnG%2F4VqWixHSaUEyxxGNZvBgjOhsfuKn7aKnyOlAOc6lsAQ9Ai8TzhXfiV%2FOjQhlJderxuzWzERdWZgUJck5118gabftOFEC7mWZmEj35eiF9zbg29mzpUWH3s%2FCImHgPUVT2jQ3Xl0hxDEEdx9cuWxmBj%2FIpJaJLM0jhWQR8ttsDQa4yJulLQPRmR1QYAnb0zkSN3BTBaeawmaKiVRegbZVoOMqzqGmTu044pJ4%2BlJK2SUBRyw%2F9zD4s9%2FDBjqkAb6noSMajmHN9hEh5%2BWmV1A71kH6LXoZp%2BcMP6RMSE7nzCe4sZyAxIUowoq8jvAPF%2B5Xdc7yEIqvOfaJ36KCXZIlcaqNmJUnYrw2olEdFOkQl1N1GFbmeVn0CIO%2FAn00WeAVVKK6ZDDl6DaqJW81dXQbjMItOeP0BJvSeBhvT%2FF9C20oWTBBd1xKFBeCfJkTT3%2FKGoMyf0HihKufnY68birpgnnx&X-Amz-Signature=e6d2ade89b6b516a3eaabb6f942bdf80c7bc3d5b15d2a91b21f654564768e7fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTS7P4DS%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC5MBZlm2bLNEjZNLoIwHhpoGFaRqv4FWPKKXDt%2FlCDYAIhAMyOlRpNbZ4MXz0P4XtFvJRruzVCOJHUvRf56hfY9c8GKv8DCGIQABoMNjM3NDIzMTgzODA1IgzOEOTqk%2BqPizbGvEwq3APtLMxkaxQIyE2fqfQrSxuS2kndvjxKhrEhm8teL%2B3%2FQtnlqhFd%2FFJUvV%2Fr%2BsZVrLTWdLdrDI2n94KsPJH8YItVUyElWiOdVmw%2Fe2%2FAxJN1YqWnjtOrzuMNoPNA%2BqoSfzIzcRNPrUS%2Ffhlrhm1MEb%2FH4dpHZxPEqH1ubG5078s1TvpiQSLRK%2BjkCZwfIzIN8EZSpqvSqdkOgRMSHjuGOXy6%2Fwe6iEqtm3mW6vieMiWaxGeEcBuh9Ln7J6UAqIKImX2AensB0JIQoAsVF2REfWoCTuiRyX9Xj3ipnK8SgwE9LsxZWil4KFPMlJuPcMM6FP6%2F3%2F1mwCqi14pFww86%2FwD09omZBjdH65CySVfjZ3yqHz%2F1XF7YdYAyyPu08EwWm0VOoqrLtnG%2F4VqWixHSaUEyxxGNZvBgjOhsfuKn7aKnyOlAOc6lsAQ9Ai8TzhXfiV%2FOjQhlJderxuzWzERdWZgUJck5118gabftOFEC7mWZmEj35eiF9zbg29mzpUWH3s%2FCImHgPUVT2jQ3Xl0hxDEEdx9cuWxmBj%2FIpJaJLM0jhWQR8ttsDQa4yJulLQPRmR1QYAnb0zkSN3BTBaeawmaKiVRegbZVoOMqzqGmTu044pJ4%2BlJK2SUBRyw%2F9zD4s9%2FDBjqkAb6noSMajmHN9hEh5%2BWmV1A71kH6LXoZp%2BcMP6RMSE7nzCe4sZyAxIUowoq8jvAPF%2B5Xdc7yEIqvOfaJ36KCXZIlcaqNmJUnYrw2olEdFOkQl1N1GFbmeVn0CIO%2FAn00WeAVVKK6ZDDl6DaqJW81dXQbjMItOeP0BJvSeBhvT%2FF9C20oWTBBd1xKFBeCfJkTT3%2FKGoMyf0HihKufnY68birpgnnx&X-Amz-Signature=d9366b42d3167d7f94640b4eee73a59e98e2c2cce8ea7c2a31c3a338c7d87768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTS7P4DS%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC5MBZlm2bLNEjZNLoIwHhpoGFaRqv4FWPKKXDt%2FlCDYAIhAMyOlRpNbZ4MXz0P4XtFvJRruzVCOJHUvRf56hfY9c8GKv8DCGIQABoMNjM3NDIzMTgzODA1IgzOEOTqk%2BqPizbGvEwq3APtLMxkaxQIyE2fqfQrSxuS2kndvjxKhrEhm8teL%2B3%2FQtnlqhFd%2FFJUvV%2Fr%2BsZVrLTWdLdrDI2n94KsPJH8YItVUyElWiOdVmw%2Fe2%2FAxJN1YqWnjtOrzuMNoPNA%2BqoSfzIzcRNPrUS%2Ffhlrhm1MEb%2FH4dpHZxPEqH1ubG5078s1TvpiQSLRK%2BjkCZwfIzIN8EZSpqvSqdkOgRMSHjuGOXy6%2Fwe6iEqtm3mW6vieMiWaxGeEcBuh9Ln7J6UAqIKImX2AensB0JIQoAsVF2REfWoCTuiRyX9Xj3ipnK8SgwE9LsxZWil4KFPMlJuPcMM6FP6%2F3%2F1mwCqi14pFww86%2FwD09omZBjdH65CySVfjZ3yqHz%2F1XF7YdYAyyPu08EwWm0VOoqrLtnG%2F4VqWixHSaUEyxxGNZvBgjOhsfuKn7aKnyOlAOc6lsAQ9Ai8TzhXfiV%2FOjQhlJderxuzWzERdWZgUJck5118gabftOFEC7mWZmEj35eiF9zbg29mzpUWH3s%2FCImHgPUVT2jQ3Xl0hxDEEdx9cuWxmBj%2FIpJaJLM0jhWQR8ttsDQa4yJulLQPRmR1QYAnb0zkSN3BTBaeawmaKiVRegbZVoOMqzqGmTu044pJ4%2BlJK2SUBRyw%2F9zD4s9%2FDBjqkAb6noSMajmHN9hEh5%2BWmV1A71kH6LXoZp%2BcMP6RMSE7nzCe4sZyAxIUowoq8jvAPF%2B5Xdc7yEIqvOfaJ36KCXZIlcaqNmJUnYrw2olEdFOkQl1N1GFbmeVn0CIO%2FAn00WeAVVKK6ZDDl6DaqJW81dXQbjMItOeP0BJvSeBhvT%2FF9C20oWTBBd1xKFBeCfJkTT3%2FKGoMyf0HihKufnY68birpgnnx&X-Amz-Signature=52ba9bdb2bd27ee6993cf8a870b96aca4c3eeceb2e54cdb43edab57cea262539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTS7P4DS%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC5MBZlm2bLNEjZNLoIwHhpoGFaRqv4FWPKKXDt%2FlCDYAIhAMyOlRpNbZ4MXz0P4XtFvJRruzVCOJHUvRf56hfY9c8GKv8DCGIQABoMNjM3NDIzMTgzODA1IgzOEOTqk%2BqPizbGvEwq3APtLMxkaxQIyE2fqfQrSxuS2kndvjxKhrEhm8teL%2B3%2FQtnlqhFd%2FFJUvV%2Fr%2BsZVrLTWdLdrDI2n94KsPJH8YItVUyElWiOdVmw%2Fe2%2FAxJN1YqWnjtOrzuMNoPNA%2BqoSfzIzcRNPrUS%2Ffhlrhm1MEb%2FH4dpHZxPEqH1ubG5078s1TvpiQSLRK%2BjkCZwfIzIN8EZSpqvSqdkOgRMSHjuGOXy6%2Fwe6iEqtm3mW6vieMiWaxGeEcBuh9Ln7J6UAqIKImX2AensB0JIQoAsVF2REfWoCTuiRyX9Xj3ipnK8SgwE9LsxZWil4KFPMlJuPcMM6FP6%2F3%2F1mwCqi14pFww86%2FwD09omZBjdH65CySVfjZ3yqHz%2F1XF7YdYAyyPu08EwWm0VOoqrLtnG%2F4VqWixHSaUEyxxGNZvBgjOhsfuKn7aKnyOlAOc6lsAQ9Ai8TzhXfiV%2FOjQhlJderxuzWzERdWZgUJck5118gabftOFEC7mWZmEj35eiF9zbg29mzpUWH3s%2FCImHgPUVT2jQ3Xl0hxDEEdx9cuWxmBj%2FIpJaJLM0jhWQR8ttsDQa4yJulLQPRmR1QYAnb0zkSN3BTBaeawmaKiVRegbZVoOMqzqGmTu044pJ4%2BlJK2SUBRyw%2F9zD4s9%2FDBjqkAb6noSMajmHN9hEh5%2BWmV1A71kH6LXoZp%2BcMP6RMSE7nzCe4sZyAxIUowoq8jvAPF%2B5Xdc7yEIqvOfaJ36KCXZIlcaqNmJUnYrw2olEdFOkQl1N1GFbmeVn0CIO%2FAn00WeAVVKK6ZDDl6DaqJW81dXQbjMItOeP0BJvSeBhvT%2FF9C20oWTBBd1xKFBeCfJkTT3%2FKGoMyf0HihKufnY68birpgnnx&X-Amz-Signature=33d66af14915353034415a41196de59ff34dbd90c6011870253bd78a29118aba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTS7P4DS%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC5MBZlm2bLNEjZNLoIwHhpoGFaRqv4FWPKKXDt%2FlCDYAIhAMyOlRpNbZ4MXz0P4XtFvJRruzVCOJHUvRf56hfY9c8GKv8DCGIQABoMNjM3NDIzMTgzODA1IgzOEOTqk%2BqPizbGvEwq3APtLMxkaxQIyE2fqfQrSxuS2kndvjxKhrEhm8teL%2B3%2FQtnlqhFd%2FFJUvV%2Fr%2BsZVrLTWdLdrDI2n94KsPJH8YItVUyElWiOdVmw%2Fe2%2FAxJN1YqWnjtOrzuMNoPNA%2BqoSfzIzcRNPrUS%2Ffhlrhm1MEb%2FH4dpHZxPEqH1ubG5078s1TvpiQSLRK%2BjkCZwfIzIN8EZSpqvSqdkOgRMSHjuGOXy6%2Fwe6iEqtm3mW6vieMiWaxGeEcBuh9Ln7J6UAqIKImX2AensB0JIQoAsVF2REfWoCTuiRyX9Xj3ipnK8SgwE9LsxZWil4KFPMlJuPcMM6FP6%2F3%2F1mwCqi14pFww86%2FwD09omZBjdH65CySVfjZ3yqHz%2F1XF7YdYAyyPu08EwWm0VOoqrLtnG%2F4VqWixHSaUEyxxGNZvBgjOhsfuKn7aKnyOlAOc6lsAQ9Ai8TzhXfiV%2FOjQhlJderxuzWzERdWZgUJck5118gabftOFEC7mWZmEj35eiF9zbg29mzpUWH3s%2FCImHgPUVT2jQ3Xl0hxDEEdx9cuWxmBj%2FIpJaJLM0jhWQR8ttsDQa4yJulLQPRmR1QYAnb0zkSN3BTBaeawmaKiVRegbZVoOMqzqGmTu044pJ4%2BlJK2SUBRyw%2F9zD4s9%2FDBjqkAb6noSMajmHN9hEh5%2BWmV1A71kH6LXoZp%2BcMP6RMSE7nzCe4sZyAxIUowoq8jvAPF%2B5Xdc7yEIqvOfaJ36KCXZIlcaqNmJUnYrw2olEdFOkQl1N1GFbmeVn0CIO%2FAn00WeAVVKK6ZDDl6DaqJW81dXQbjMItOeP0BJvSeBhvT%2FF9C20oWTBBd1xKFBeCfJkTT3%2FKGoMyf0HihKufnY68birpgnnx&X-Amz-Signature=443565327dbcc9273367c12d0e678e83b08aa42c033ab482437f1f073ca78368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTS7P4DS%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC5MBZlm2bLNEjZNLoIwHhpoGFaRqv4FWPKKXDt%2FlCDYAIhAMyOlRpNbZ4MXz0P4XtFvJRruzVCOJHUvRf56hfY9c8GKv8DCGIQABoMNjM3NDIzMTgzODA1IgzOEOTqk%2BqPizbGvEwq3APtLMxkaxQIyE2fqfQrSxuS2kndvjxKhrEhm8teL%2B3%2FQtnlqhFd%2FFJUvV%2Fr%2BsZVrLTWdLdrDI2n94KsPJH8YItVUyElWiOdVmw%2Fe2%2FAxJN1YqWnjtOrzuMNoPNA%2BqoSfzIzcRNPrUS%2Ffhlrhm1MEb%2FH4dpHZxPEqH1ubG5078s1TvpiQSLRK%2BjkCZwfIzIN8EZSpqvSqdkOgRMSHjuGOXy6%2Fwe6iEqtm3mW6vieMiWaxGeEcBuh9Ln7J6UAqIKImX2AensB0JIQoAsVF2REfWoCTuiRyX9Xj3ipnK8SgwE9LsxZWil4KFPMlJuPcMM6FP6%2F3%2F1mwCqi14pFww86%2FwD09omZBjdH65CySVfjZ3yqHz%2F1XF7YdYAyyPu08EwWm0VOoqrLtnG%2F4VqWixHSaUEyxxGNZvBgjOhsfuKn7aKnyOlAOc6lsAQ9Ai8TzhXfiV%2FOjQhlJderxuzWzERdWZgUJck5118gabftOFEC7mWZmEj35eiF9zbg29mzpUWH3s%2FCImHgPUVT2jQ3Xl0hxDEEdx9cuWxmBj%2FIpJaJLM0jhWQR8ttsDQa4yJulLQPRmR1QYAnb0zkSN3BTBaeawmaKiVRegbZVoOMqzqGmTu044pJ4%2BlJK2SUBRyw%2F9zD4s9%2FDBjqkAb6noSMajmHN9hEh5%2BWmV1A71kH6LXoZp%2BcMP6RMSE7nzCe4sZyAxIUowoq8jvAPF%2B5Xdc7yEIqvOfaJ36KCXZIlcaqNmJUnYrw2olEdFOkQl1N1GFbmeVn0CIO%2FAn00WeAVVKK6ZDDl6DaqJW81dXQbjMItOeP0BJvSeBhvT%2FF9C20oWTBBd1xKFBeCfJkTT3%2FKGoMyf0HihKufnY68birpgnnx&X-Amz-Signature=b263710441d300f86082b004a7c51f4a45942341059054fbf51475385aaeebbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTS7P4DS%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC5MBZlm2bLNEjZNLoIwHhpoGFaRqv4FWPKKXDt%2FlCDYAIhAMyOlRpNbZ4MXz0P4XtFvJRruzVCOJHUvRf56hfY9c8GKv8DCGIQABoMNjM3NDIzMTgzODA1IgzOEOTqk%2BqPizbGvEwq3APtLMxkaxQIyE2fqfQrSxuS2kndvjxKhrEhm8teL%2B3%2FQtnlqhFd%2FFJUvV%2Fr%2BsZVrLTWdLdrDI2n94KsPJH8YItVUyElWiOdVmw%2Fe2%2FAxJN1YqWnjtOrzuMNoPNA%2BqoSfzIzcRNPrUS%2Ffhlrhm1MEb%2FH4dpHZxPEqH1ubG5078s1TvpiQSLRK%2BjkCZwfIzIN8EZSpqvSqdkOgRMSHjuGOXy6%2Fwe6iEqtm3mW6vieMiWaxGeEcBuh9Ln7J6UAqIKImX2AensB0JIQoAsVF2REfWoCTuiRyX9Xj3ipnK8SgwE9LsxZWil4KFPMlJuPcMM6FP6%2F3%2F1mwCqi14pFww86%2FwD09omZBjdH65CySVfjZ3yqHz%2F1XF7YdYAyyPu08EwWm0VOoqrLtnG%2F4VqWixHSaUEyxxGNZvBgjOhsfuKn7aKnyOlAOc6lsAQ9Ai8TzhXfiV%2FOjQhlJderxuzWzERdWZgUJck5118gabftOFEC7mWZmEj35eiF9zbg29mzpUWH3s%2FCImHgPUVT2jQ3Xl0hxDEEdx9cuWxmBj%2FIpJaJLM0jhWQR8ttsDQa4yJulLQPRmR1QYAnb0zkSN3BTBaeawmaKiVRegbZVoOMqzqGmTu044pJ4%2BlJK2SUBRyw%2F9zD4s9%2FDBjqkAb6noSMajmHN9hEh5%2BWmV1A71kH6LXoZp%2BcMP6RMSE7nzCe4sZyAxIUowoq8jvAPF%2B5Xdc7yEIqvOfaJ36KCXZIlcaqNmJUnYrw2olEdFOkQl1N1GFbmeVn0CIO%2FAn00WeAVVKK6ZDDl6DaqJW81dXQbjMItOeP0BJvSeBhvT%2FF9C20oWTBBd1xKFBeCfJkTT3%2FKGoMyf0HihKufnY68birpgnnx&X-Amz-Signature=029424eaa24d27f47c3645d39b2a36fe23e3a67662d0763bcdabd6f48a9feb4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTS7P4DS%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC5MBZlm2bLNEjZNLoIwHhpoGFaRqv4FWPKKXDt%2FlCDYAIhAMyOlRpNbZ4MXz0P4XtFvJRruzVCOJHUvRf56hfY9c8GKv8DCGIQABoMNjM3NDIzMTgzODA1IgzOEOTqk%2BqPizbGvEwq3APtLMxkaxQIyE2fqfQrSxuS2kndvjxKhrEhm8teL%2B3%2FQtnlqhFd%2FFJUvV%2Fr%2BsZVrLTWdLdrDI2n94KsPJH8YItVUyElWiOdVmw%2Fe2%2FAxJN1YqWnjtOrzuMNoPNA%2BqoSfzIzcRNPrUS%2Ffhlrhm1MEb%2FH4dpHZxPEqH1ubG5078s1TvpiQSLRK%2BjkCZwfIzIN8EZSpqvSqdkOgRMSHjuGOXy6%2Fwe6iEqtm3mW6vieMiWaxGeEcBuh9Ln7J6UAqIKImX2AensB0JIQoAsVF2REfWoCTuiRyX9Xj3ipnK8SgwE9LsxZWil4KFPMlJuPcMM6FP6%2F3%2F1mwCqi14pFww86%2FwD09omZBjdH65CySVfjZ3yqHz%2F1XF7YdYAyyPu08EwWm0VOoqrLtnG%2F4VqWixHSaUEyxxGNZvBgjOhsfuKn7aKnyOlAOc6lsAQ9Ai8TzhXfiV%2FOjQhlJderxuzWzERdWZgUJck5118gabftOFEC7mWZmEj35eiF9zbg29mzpUWH3s%2FCImHgPUVT2jQ3Xl0hxDEEdx9cuWxmBj%2FIpJaJLM0jhWQR8ttsDQa4yJulLQPRmR1QYAnb0zkSN3BTBaeawmaKiVRegbZVoOMqzqGmTu044pJ4%2BlJK2SUBRyw%2F9zD4s9%2FDBjqkAb6noSMajmHN9hEh5%2BWmV1A71kH6LXoZp%2BcMP6RMSE7nzCe4sZyAxIUowoq8jvAPF%2B5Xdc7yEIqvOfaJ36KCXZIlcaqNmJUnYrw2olEdFOkQl1N1GFbmeVn0CIO%2FAn00WeAVVKK6ZDDl6DaqJW81dXQbjMItOeP0BJvSeBhvT%2FF9C20oWTBBd1xKFBeCfJkTT3%2FKGoMyf0HihKufnY68birpgnnx&X-Amz-Signature=c1414177ccb0778fbf42aca342bdc151d7e7167e668bcf5fca518da40495143e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
