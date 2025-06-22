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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2WSWV4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2%2F3NCFgHyKdwDTlz55%2FgnplQId2ZeEEdLFvX3%2BdBH7wIhAO8vidQWx2XXBmlLDl6f4bB1F4SHWOPYmopjmJRzbbuiKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywe4F4nnRt0sSf98Yq3AOZc17MXECwl9Wwr%2B%2FXg1HXwI6QUt7eqp2YYKrk0%2B5dlZCp6tKc147SX4mJjGnt0IoKxQ8YxC%2FpbKCeeqvbbhpGXhhy8TNZmW72VN92UyYZ3HdysDjD5pT1SPAdqEhi0WeSVjuGGLcoQgTSe4m%2F3nIrHDtJMZKiwRau57EIrrKnDouC7oUvBPN%2B7npi3rjuc77YcvRRP%2B7w3q1fFClygg9eNJA8tDBulkPchApTN%2FoaS7GMBCMAPY%2BAVqUEBtqm0%2BQiFDcJiAVDZNa3WW34xx20Kn0dbB9XIllIIIKZ0TvpQ9T772rtjpaO0xhZK7P8YMwSypDGEb8FFbWxyKJHof%2FeGH8Xmi1ZhCvCxDyNKHr9i7xPp60H67QtwDmFWynVZsZvg1h6jPFxVEIuwhJXIj2IQ5dka3gSkQRYkNia6mbZdVkmKBSqnSLqR%2FUg8FiLDij43UNrgmD5jyETuFuIwG1JjOomFfL%2F%2BaIE1n1P8VkAGyZLLDYVkhm%2ByJpaicXsHPLfO8Wrpc4TKUS%2BKGthxcSgUcmeRemliW2Ua1GhHqSu89%2BkNetCgjHwcAmcMmHbAYO%2BbP7aNAOKYqbQu9rZckTzduXLxJ%2FkxBVefDoIDhuC6wB91C3gHqISeGhmojC2rd7CBjqkAbN1wh8kM5Ms6lfGpNd%2Fwtgz%2FaKSCL8ME%2BmMO0k00r%2FdNqf0lljkBY9LiLQ0dwIu3fybjl5Xelv4hAXQnYMpu0beT3LNr7orHvzWROSwBxbVVvtxEk9Zqj9WQCchzV3OOY9m7UTmuavADZsNwUtvhkA%2FidvYEsAKhZA5yndDaqCq30ibb6JrvNwhOywKpUeSruVQGWsIeD0U0j3a47dEIBzAJyJe&X-Amz-Signature=235f98a0e88da5fecb263b05d0f163f220fb9983eafc28de95fe5520d5e323b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2WSWV4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2%2F3NCFgHyKdwDTlz55%2FgnplQId2ZeEEdLFvX3%2BdBH7wIhAO8vidQWx2XXBmlLDl6f4bB1F4SHWOPYmopjmJRzbbuiKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywe4F4nnRt0sSf98Yq3AOZc17MXECwl9Wwr%2B%2FXg1HXwI6QUt7eqp2YYKrk0%2B5dlZCp6tKc147SX4mJjGnt0IoKxQ8YxC%2FpbKCeeqvbbhpGXhhy8TNZmW72VN92UyYZ3HdysDjD5pT1SPAdqEhi0WeSVjuGGLcoQgTSe4m%2F3nIrHDtJMZKiwRau57EIrrKnDouC7oUvBPN%2B7npi3rjuc77YcvRRP%2B7w3q1fFClygg9eNJA8tDBulkPchApTN%2FoaS7GMBCMAPY%2BAVqUEBtqm0%2BQiFDcJiAVDZNa3WW34xx20Kn0dbB9XIllIIIKZ0TvpQ9T772rtjpaO0xhZK7P8YMwSypDGEb8FFbWxyKJHof%2FeGH8Xmi1ZhCvCxDyNKHr9i7xPp60H67QtwDmFWynVZsZvg1h6jPFxVEIuwhJXIj2IQ5dka3gSkQRYkNia6mbZdVkmKBSqnSLqR%2FUg8FiLDij43UNrgmD5jyETuFuIwG1JjOomFfL%2F%2BaIE1n1P8VkAGyZLLDYVkhm%2ByJpaicXsHPLfO8Wrpc4TKUS%2BKGthxcSgUcmeRemliW2Ua1GhHqSu89%2BkNetCgjHwcAmcMmHbAYO%2BbP7aNAOKYqbQu9rZckTzduXLxJ%2FkxBVefDoIDhuC6wB91C3gHqISeGhmojC2rd7CBjqkAbN1wh8kM5Ms6lfGpNd%2Fwtgz%2FaKSCL8ME%2BmMO0k00r%2FdNqf0lljkBY9LiLQ0dwIu3fybjl5Xelv4hAXQnYMpu0beT3LNr7orHvzWROSwBxbVVvtxEk9Zqj9WQCchzV3OOY9m7UTmuavADZsNwUtvhkA%2FidvYEsAKhZA5yndDaqCq30ibb6JrvNwhOywKpUeSruVQGWsIeD0U0j3a47dEIBzAJyJe&X-Amz-Signature=fab054fa28f8c1955c6bf26ab0c0568479b8b1c45f5835eada5239d82a1e73c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2WSWV4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2%2F3NCFgHyKdwDTlz55%2FgnplQId2ZeEEdLFvX3%2BdBH7wIhAO8vidQWx2XXBmlLDl6f4bB1F4SHWOPYmopjmJRzbbuiKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywe4F4nnRt0sSf98Yq3AOZc17MXECwl9Wwr%2B%2FXg1HXwI6QUt7eqp2YYKrk0%2B5dlZCp6tKc147SX4mJjGnt0IoKxQ8YxC%2FpbKCeeqvbbhpGXhhy8TNZmW72VN92UyYZ3HdysDjD5pT1SPAdqEhi0WeSVjuGGLcoQgTSe4m%2F3nIrHDtJMZKiwRau57EIrrKnDouC7oUvBPN%2B7npi3rjuc77YcvRRP%2B7w3q1fFClygg9eNJA8tDBulkPchApTN%2FoaS7GMBCMAPY%2BAVqUEBtqm0%2BQiFDcJiAVDZNa3WW34xx20Kn0dbB9XIllIIIKZ0TvpQ9T772rtjpaO0xhZK7P8YMwSypDGEb8FFbWxyKJHof%2FeGH8Xmi1ZhCvCxDyNKHr9i7xPp60H67QtwDmFWynVZsZvg1h6jPFxVEIuwhJXIj2IQ5dka3gSkQRYkNia6mbZdVkmKBSqnSLqR%2FUg8FiLDij43UNrgmD5jyETuFuIwG1JjOomFfL%2F%2BaIE1n1P8VkAGyZLLDYVkhm%2ByJpaicXsHPLfO8Wrpc4TKUS%2BKGthxcSgUcmeRemliW2Ua1GhHqSu89%2BkNetCgjHwcAmcMmHbAYO%2BbP7aNAOKYqbQu9rZckTzduXLxJ%2FkxBVefDoIDhuC6wB91C3gHqISeGhmojC2rd7CBjqkAbN1wh8kM5Ms6lfGpNd%2Fwtgz%2FaKSCL8ME%2BmMO0k00r%2FdNqf0lljkBY9LiLQ0dwIu3fybjl5Xelv4hAXQnYMpu0beT3LNr7orHvzWROSwBxbVVvtxEk9Zqj9WQCchzV3OOY9m7UTmuavADZsNwUtvhkA%2FidvYEsAKhZA5yndDaqCq30ibb6JrvNwhOywKpUeSruVQGWsIeD0U0j3a47dEIBzAJyJe&X-Amz-Signature=90ebea49587d46ca88360976c5603ea7395264603b2cf97dfa6417d09f785173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2WSWV4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2%2F3NCFgHyKdwDTlz55%2FgnplQId2ZeEEdLFvX3%2BdBH7wIhAO8vidQWx2XXBmlLDl6f4bB1F4SHWOPYmopjmJRzbbuiKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywe4F4nnRt0sSf98Yq3AOZc17MXECwl9Wwr%2B%2FXg1HXwI6QUt7eqp2YYKrk0%2B5dlZCp6tKc147SX4mJjGnt0IoKxQ8YxC%2FpbKCeeqvbbhpGXhhy8TNZmW72VN92UyYZ3HdysDjD5pT1SPAdqEhi0WeSVjuGGLcoQgTSe4m%2F3nIrHDtJMZKiwRau57EIrrKnDouC7oUvBPN%2B7npi3rjuc77YcvRRP%2B7w3q1fFClygg9eNJA8tDBulkPchApTN%2FoaS7GMBCMAPY%2BAVqUEBtqm0%2BQiFDcJiAVDZNa3WW34xx20Kn0dbB9XIllIIIKZ0TvpQ9T772rtjpaO0xhZK7P8YMwSypDGEb8FFbWxyKJHof%2FeGH8Xmi1ZhCvCxDyNKHr9i7xPp60H67QtwDmFWynVZsZvg1h6jPFxVEIuwhJXIj2IQ5dka3gSkQRYkNia6mbZdVkmKBSqnSLqR%2FUg8FiLDij43UNrgmD5jyETuFuIwG1JjOomFfL%2F%2BaIE1n1P8VkAGyZLLDYVkhm%2ByJpaicXsHPLfO8Wrpc4TKUS%2BKGthxcSgUcmeRemliW2Ua1GhHqSu89%2BkNetCgjHwcAmcMmHbAYO%2BbP7aNAOKYqbQu9rZckTzduXLxJ%2FkxBVefDoIDhuC6wB91C3gHqISeGhmojC2rd7CBjqkAbN1wh8kM5Ms6lfGpNd%2Fwtgz%2FaKSCL8ME%2BmMO0k00r%2FdNqf0lljkBY9LiLQ0dwIu3fybjl5Xelv4hAXQnYMpu0beT3LNr7orHvzWROSwBxbVVvtxEk9Zqj9WQCchzV3OOY9m7UTmuavADZsNwUtvhkA%2FidvYEsAKhZA5yndDaqCq30ibb6JrvNwhOywKpUeSruVQGWsIeD0U0j3a47dEIBzAJyJe&X-Amz-Signature=c6490f56ff17a3a22cd2aea40c8de87b6d1c910da1b1da065561ec3f8e11f28b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2WSWV4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2%2F3NCFgHyKdwDTlz55%2FgnplQId2ZeEEdLFvX3%2BdBH7wIhAO8vidQWx2XXBmlLDl6f4bB1F4SHWOPYmopjmJRzbbuiKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywe4F4nnRt0sSf98Yq3AOZc17MXECwl9Wwr%2B%2FXg1HXwI6QUt7eqp2YYKrk0%2B5dlZCp6tKc147SX4mJjGnt0IoKxQ8YxC%2FpbKCeeqvbbhpGXhhy8TNZmW72VN92UyYZ3HdysDjD5pT1SPAdqEhi0WeSVjuGGLcoQgTSe4m%2F3nIrHDtJMZKiwRau57EIrrKnDouC7oUvBPN%2B7npi3rjuc77YcvRRP%2B7w3q1fFClygg9eNJA8tDBulkPchApTN%2FoaS7GMBCMAPY%2BAVqUEBtqm0%2BQiFDcJiAVDZNa3WW34xx20Kn0dbB9XIllIIIKZ0TvpQ9T772rtjpaO0xhZK7P8YMwSypDGEb8FFbWxyKJHof%2FeGH8Xmi1ZhCvCxDyNKHr9i7xPp60H67QtwDmFWynVZsZvg1h6jPFxVEIuwhJXIj2IQ5dka3gSkQRYkNia6mbZdVkmKBSqnSLqR%2FUg8FiLDij43UNrgmD5jyETuFuIwG1JjOomFfL%2F%2BaIE1n1P8VkAGyZLLDYVkhm%2ByJpaicXsHPLfO8Wrpc4TKUS%2BKGthxcSgUcmeRemliW2Ua1GhHqSu89%2BkNetCgjHwcAmcMmHbAYO%2BbP7aNAOKYqbQu9rZckTzduXLxJ%2FkxBVefDoIDhuC6wB91C3gHqISeGhmojC2rd7CBjqkAbN1wh8kM5Ms6lfGpNd%2Fwtgz%2FaKSCL8ME%2BmMO0k00r%2FdNqf0lljkBY9LiLQ0dwIu3fybjl5Xelv4hAXQnYMpu0beT3LNr7orHvzWROSwBxbVVvtxEk9Zqj9WQCchzV3OOY9m7UTmuavADZsNwUtvhkA%2FidvYEsAKhZA5yndDaqCq30ibb6JrvNwhOywKpUeSruVQGWsIeD0U0j3a47dEIBzAJyJe&X-Amz-Signature=49544e48159344e4301895bc973455a86dc3751db5576b0f81f2af5a9f8c551f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2WSWV4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2%2F3NCFgHyKdwDTlz55%2FgnplQId2ZeEEdLFvX3%2BdBH7wIhAO8vidQWx2XXBmlLDl6f4bB1F4SHWOPYmopjmJRzbbuiKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywe4F4nnRt0sSf98Yq3AOZc17MXECwl9Wwr%2B%2FXg1HXwI6QUt7eqp2YYKrk0%2B5dlZCp6tKc147SX4mJjGnt0IoKxQ8YxC%2FpbKCeeqvbbhpGXhhy8TNZmW72VN92UyYZ3HdysDjD5pT1SPAdqEhi0WeSVjuGGLcoQgTSe4m%2F3nIrHDtJMZKiwRau57EIrrKnDouC7oUvBPN%2B7npi3rjuc77YcvRRP%2B7w3q1fFClygg9eNJA8tDBulkPchApTN%2FoaS7GMBCMAPY%2BAVqUEBtqm0%2BQiFDcJiAVDZNa3WW34xx20Kn0dbB9XIllIIIKZ0TvpQ9T772rtjpaO0xhZK7P8YMwSypDGEb8FFbWxyKJHof%2FeGH8Xmi1ZhCvCxDyNKHr9i7xPp60H67QtwDmFWynVZsZvg1h6jPFxVEIuwhJXIj2IQ5dka3gSkQRYkNia6mbZdVkmKBSqnSLqR%2FUg8FiLDij43UNrgmD5jyETuFuIwG1JjOomFfL%2F%2BaIE1n1P8VkAGyZLLDYVkhm%2ByJpaicXsHPLfO8Wrpc4TKUS%2BKGthxcSgUcmeRemliW2Ua1GhHqSu89%2BkNetCgjHwcAmcMmHbAYO%2BbP7aNAOKYqbQu9rZckTzduXLxJ%2FkxBVefDoIDhuC6wB91C3gHqISeGhmojC2rd7CBjqkAbN1wh8kM5Ms6lfGpNd%2Fwtgz%2FaKSCL8ME%2BmMO0k00r%2FdNqf0lljkBY9LiLQ0dwIu3fybjl5Xelv4hAXQnYMpu0beT3LNr7orHvzWROSwBxbVVvtxEk9Zqj9WQCchzV3OOY9m7UTmuavADZsNwUtvhkA%2FidvYEsAKhZA5yndDaqCq30ibb6JrvNwhOywKpUeSruVQGWsIeD0U0j3a47dEIBzAJyJe&X-Amz-Signature=f6afe021f68bcf472a6a5ac926eb18a5ec8d0410be5d82f6dd80d367951b8ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2WSWV4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2%2F3NCFgHyKdwDTlz55%2FgnplQId2ZeEEdLFvX3%2BdBH7wIhAO8vidQWx2XXBmlLDl6f4bB1F4SHWOPYmopjmJRzbbuiKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywe4F4nnRt0sSf98Yq3AOZc17MXECwl9Wwr%2B%2FXg1HXwI6QUt7eqp2YYKrk0%2B5dlZCp6tKc147SX4mJjGnt0IoKxQ8YxC%2FpbKCeeqvbbhpGXhhy8TNZmW72VN92UyYZ3HdysDjD5pT1SPAdqEhi0WeSVjuGGLcoQgTSe4m%2F3nIrHDtJMZKiwRau57EIrrKnDouC7oUvBPN%2B7npi3rjuc77YcvRRP%2B7w3q1fFClygg9eNJA8tDBulkPchApTN%2FoaS7GMBCMAPY%2BAVqUEBtqm0%2BQiFDcJiAVDZNa3WW34xx20Kn0dbB9XIllIIIKZ0TvpQ9T772rtjpaO0xhZK7P8YMwSypDGEb8FFbWxyKJHof%2FeGH8Xmi1ZhCvCxDyNKHr9i7xPp60H67QtwDmFWynVZsZvg1h6jPFxVEIuwhJXIj2IQ5dka3gSkQRYkNia6mbZdVkmKBSqnSLqR%2FUg8FiLDij43UNrgmD5jyETuFuIwG1JjOomFfL%2F%2BaIE1n1P8VkAGyZLLDYVkhm%2ByJpaicXsHPLfO8Wrpc4TKUS%2BKGthxcSgUcmeRemliW2Ua1GhHqSu89%2BkNetCgjHwcAmcMmHbAYO%2BbP7aNAOKYqbQu9rZckTzduXLxJ%2FkxBVefDoIDhuC6wB91C3gHqISeGhmojC2rd7CBjqkAbN1wh8kM5Ms6lfGpNd%2Fwtgz%2FaKSCL8ME%2BmMO0k00r%2FdNqf0lljkBY9LiLQ0dwIu3fybjl5Xelv4hAXQnYMpu0beT3LNr7orHvzWROSwBxbVVvtxEk9Zqj9WQCchzV3OOY9m7UTmuavADZsNwUtvhkA%2FidvYEsAKhZA5yndDaqCq30ibb6JrvNwhOywKpUeSruVQGWsIeD0U0j3a47dEIBzAJyJe&X-Amz-Signature=8f707858ba39baa0362598ecc73d7e378fb6d6ce2df3baa4b443a2072762a49e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2WSWV4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2%2F3NCFgHyKdwDTlz55%2FgnplQId2ZeEEdLFvX3%2BdBH7wIhAO8vidQWx2XXBmlLDl6f4bB1F4SHWOPYmopjmJRzbbuiKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywe4F4nnRt0sSf98Yq3AOZc17MXECwl9Wwr%2B%2FXg1HXwI6QUt7eqp2YYKrk0%2B5dlZCp6tKc147SX4mJjGnt0IoKxQ8YxC%2FpbKCeeqvbbhpGXhhy8TNZmW72VN92UyYZ3HdysDjD5pT1SPAdqEhi0WeSVjuGGLcoQgTSe4m%2F3nIrHDtJMZKiwRau57EIrrKnDouC7oUvBPN%2B7npi3rjuc77YcvRRP%2B7w3q1fFClygg9eNJA8tDBulkPchApTN%2FoaS7GMBCMAPY%2BAVqUEBtqm0%2BQiFDcJiAVDZNa3WW34xx20Kn0dbB9XIllIIIKZ0TvpQ9T772rtjpaO0xhZK7P8YMwSypDGEb8FFbWxyKJHof%2FeGH8Xmi1ZhCvCxDyNKHr9i7xPp60H67QtwDmFWynVZsZvg1h6jPFxVEIuwhJXIj2IQ5dka3gSkQRYkNia6mbZdVkmKBSqnSLqR%2FUg8FiLDij43UNrgmD5jyETuFuIwG1JjOomFfL%2F%2BaIE1n1P8VkAGyZLLDYVkhm%2ByJpaicXsHPLfO8Wrpc4TKUS%2BKGthxcSgUcmeRemliW2Ua1GhHqSu89%2BkNetCgjHwcAmcMmHbAYO%2BbP7aNAOKYqbQu9rZckTzduXLxJ%2FkxBVefDoIDhuC6wB91C3gHqISeGhmojC2rd7CBjqkAbN1wh8kM5Ms6lfGpNd%2Fwtgz%2FaKSCL8ME%2BmMO0k00r%2FdNqf0lljkBY9LiLQ0dwIu3fybjl5Xelv4hAXQnYMpu0beT3LNr7orHvzWROSwBxbVVvtxEk9Zqj9WQCchzV3OOY9m7UTmuavADZsNwUtvhkA%2FidvYEsAKhZA5yndDaqCq30ibb6JrvNwhOywKpUeSruVQGWsIeD0U0j3a47dEIBzAJyJe&X-Amz-Signature=aaa7c2c79ac0300eebfa4988a589f1440160613b6beb838040280fe75b397d0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
