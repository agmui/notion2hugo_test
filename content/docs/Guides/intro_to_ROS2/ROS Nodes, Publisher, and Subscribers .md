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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZJW5OC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC%2BE26rpjRIQaSHukWJT17D%2FUptlcaXx1H8wX1rejMxJQIgOVrzXuotacW1ensyYVrxmCjnQNgiBngDe5L3MzGGCx0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLdjusluyc6Zg%2FGJjCrcA37CO1ayGMZki17X%2FFb%2BY5bVVb%2Bz2pt%2BDDujm6LFT8wIlUqIjKN1ZSXm1bxNY%2BzDTsVkypeDZidgJeJj0mgcCoEMXP6tnCjnWRPcu6451Qyzx7KXSLLxWAYRmoNkIP%2FaB%2BlY5FrU9huBoFOKEThldKDeFCht8KBkMJODQV9eS2EApsAb7MGl%2FXDLByQqu6u%2Bu168QSL5mChrH6Hmy7VQh3qHcYNwTle%2F1NFmsST%2FDEM9bu5VcJSL2cFWpTOVuaAsyi060ovTt%2B6Er22za5GoYEub%2B7mJyf14SR1%2BLQoFTYITH%2FKZlzDUFrm3nABEpV4NarxBFc%2F0y1mZlN2RrwFyYZsc20RTYHgVeldlIPUt2UHnWrK2cyHX4VhYL6eo%2FoACh4DI0mnnee73LxpIx0EcvemK8lxsYX5jQYyWSaHK4jYqmyWGltEyh7hgToJzfeXxGCBqyTYApeaD6c9eWTUhNmYE3NaFATUZm84W1nNth8b2a1nNUH4qqv6wHIhp9urx0RIgtshWhmDcmuyRvlqzx%2Beh0NYKmNPiGcvxyuYaAhMMpE9ADYzyxXSmEIYLMkTsUINAJvIE9u50agnNA%2F0XxYnZqq7FMSfPbaJgQWKuodX4fMtfcjyn%2FAUD0v03MMPng70GOqUBajKzuVaCdhSyy6f1UVUUtvg7ZD1nO9M4p%2F3iQSqfbpZs7eQKfvlOIKQAgjGPAyQy4WezqXylTVUDjEskGlu16o%2BdnJa%2BKOv6XxPCNMBGxct0bJUu%2F2%2B5nK48EDlXQ0KRINBY%2B0E4Sjcm8Q2D7eXyV82n%2FUKCdGLWlte76ij3%2FnyZnT%2BhPue%2BiHHn7fHv8rR8l3yGwcjCcXt8uT5otkqH7RX4Az9T&X-Amz-Signature=f7a40cf061ba4f5f1b9c1513d4310f70dc20e02195a82fed3d5abc47ab516729&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZJW5OC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC%2BE26rpjRIQaSHukWJT17D%2FUptlcaXx1H8wX1rejMxJQIgOVrzXuotacW1ensyYVrxmCjnQNgiBngDe5L3MzGGCx0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLdjusluyc6Zg%2FGJjCrcA37CO1ayGMZki17X%2FFb%2BY5bVVb%2Bz2pt%2BDDujm6LFT8wIlUqIjKN1ZSXm1bxNY%2BzDTsVkypeDZidgJeJj0mgcCoEMXP6tnCjnWRPcu6451Qyzx7KXSLLxWAYRmoNkIP%2FaB%2BlY5FrU9huBoFOKEThldKDeFCht8KBkMJODQV9eS2EApsAb7MGl%2FXDLByQqu6u%2Bu168QSL5mChrH6Hmy7VQh3qHcYNwTle%2F1NFmsST%2FDEM9bu5VcJSL2cFWpTOVuaAsyi060ovTt%2B6Er22za5GoYEub%2B7mJyf14SR1%2BLQoFTYITH%2FKZlzDUFrm3nABEpV4NarxBFc%2F0y1mZlN2RrwFyYZsc20RTYHgVeldlIPUt2UHnWrK2cyHX4VhYL6eo%2FoACh4DI0mnnee73LxpIx0EcvemK8lxsYX5jQYyWSaHK4jYqmyWGltEyh7hgToJzfeXxGCBqyTYApeaD6c9eWTUhNmYE3NaFATUZm84W1nNth8b2a1nNUH4qqv6wHIhp9urx0RIgtshWhmDcmuyRvlqzx%2Beh0NYKmNPiGcvxyuYaAhMMpE9ADYzyxXSmEIYLMkTsUINAJvIE9u50agnNA%2F0XxYnZqq7FMSfPbaJgQWKuodX4fMtfcjyn%2FAUD0v03MMPng70GOqUBajKzuVaCdhSyy6f1UVUUtvg7ZD1nO9M4p%2F3iQSqfbpZs7eQKfvlOIKQAgjGPAyQy4WezqXylTVUDjEskGlu16o%2BdnJa%2BKOv6XxPCNMBGxct0bJUu%2F2%2B5nK48EDlXQ0KRINBY%2B0E4Sjcm8Q2D7eXyV82n%2FUKCdGLWlte76ij3%2FnyZnT%2BhPue%2BiHHn7fHv8rR8l3yGwcjCcXt8uT5otkqH7RX4Az9T&X-Amz-Signature=d8e07bbee16c01f6faa10ce7a4e348ce72d84fa4867e7f790b7c6660d38701ba&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZJW5OC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC%2BE26rpjRIQaSHukWJT17D%2FUptlcaXx1H8wX1rejMxJQIgOVrzXuotacW1ensyYVrxmCjnQNgiBngDe5L3MzGGCx0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLdjusluyc6Zg%2FGJjCrcA37CO1ayGMZki17X%2FFb%2BY5bVVb%2Bz2pt%2BDDujm6LFT8wIlUqIjKN1ZSXm1bxNY%2BzDTsVkypeDZidgJeJj0mgcCoEMXP6tnCjnWRPcu6451Qyzx7KXSLLxWAYRmoNkIP%2FaB%2BlY5FrU9huBoFOKEThldKDeFCht8KBkMJODQV9eS2EApsAb7MGl%2FXDLByQqu6u%2Bu168QSL5mChrH6Hmy7VQh3qHcYNwTle%2F1NFmsST%2FDEM9bu5VcJSL2cFWpTOVuaAsyi060ovTt%2B6Er22za5GoYEub%2B7mJyf14SR1%2BLQoFTYITH%2FKZlzDUFrm3nABEpV4NarxBFc%2F0y1mZlN2RrwFyYZsc20RTYHgVeldlIPUt2UHnWrK2cyHX4VhYL6eo%2FoACh4DI0mnnee73LxpIx0EcvemK8lxsYX5jQYyWSaHK4jYqmyWGltEyh7hgToJzfeXxGCBqyTYApeaD6c9eWTUhNmYE3NaFATUZm84W1nNth8b2a1nNUH4qqv6wHIhp9urx0RIgtshWhmDcmuyRvlqzx%2Beh0NYKmNPiGcvxyuYaAhMMpE9ADYzyxXSmEIYLMkTsUINAJvIE9u50agnNA%2F0XxYnZqq7FMSfPbaJgQWKuodX4fMtfcjyn%2FAUD0v03MMPng70GOqUBajKzuVaCdhSyy6f1UVUUtvg7ZD1nO9M4p%2F3iQSqfbpZs7eQKfvlOIKQAgjGPAyQy4WezqXylTVUDjEskGlu16o%2BdnJa%2BKOv6XxPCNMBGxct0bJUu%2F2%2B5nK48EDlXQ0KRINBY%2B0E4Sjcm8Q2D7eXyV82n%2FUKCdGLWlte76ij3%2FnyZnT%2BhPue%2BiHHn7fHv8rR8l3yGwcjCcXt8uT5otkqH7RX4Az9T&X-Amz-Signature=1b78e52c0e02b9b2d67141544a146018db8d6a87c5b587ac820daeb49d7bf754&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZJW5OC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC%2BE26rpjRIQaSHukWJT17D%2FUptlcaXx1H8wX1rejMxJQIgOVrzXuotacW1ensyYVrxmCjnQNgiBngDe5L3MzGGCx0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLdjusluyc6Zg%2FGJjCrcA37CO1ayGMZki17X%2FFb%2BY5bVVb%2Bz2pt%2BDDujm6LFT8wIlUqIjKN1ZSXm1bxNY%2BzDTsVkypeDZidgJeJj0mgcCoEMXP6tnCjnWRPcu6451Qyzx7KXSLLxWAYRmoNkIP%2FaB%2BlY5FrU9huBoFOKEThldKDeFCht8KBkMJODQV9eS2EApsAb7MGl%2FXDLByQqu6u%2Bu168QSL5mChrH6Hmy7VQh3qHcYNwTle%2F1NFmsST%2FDEM9bu5VcJSL2cFWpTOVuaAsyi060ovTt%2B6Er22za5GoYEub%2B7mJyf14SR1%2BLQoFTYITH%2FKZlzDUFrm3nABEpV4NarxBFc%2F0y1mZlN2RrwFyYZsc20RTYHgVeldlIPUt2UHnWrK2cyHX4VhYL6eo%2FoACh4DI0mnnee73LxpIx0EcvemK8lxsYX5jQYyWSaHK4jYqmyWGltEyh7hgToJzfeXxGCBqyTYApeaD6c9eWTUhNmYE3NaFATUZm84W1nNth8b2a1nNUH4qqv6wHIhp9urx0RIgtshWhmDcmuyRvlqzx%2Beh0NYKmNPiGcvxyuYaAhMMpE9ADYzyxXSmEIYLMkTsUINAJvIE9u50agnNA%2F0XxYnZqq7FMSfPbaJgQWKuodX4fMtfcjyn%2FAUD0v03MMPng70GOqUBajKzuVaCdhSyy6f1UVUUtvg7ZD1nO9M4p%2F3iQSqfbpZs7eQKfvlOIKQAgjGPAyQy4WezqXylTVUDjEskGlu16o%2BdnJa%2BKOv6XxPCNMBGxct0bJUu%2F2%2B5nK48EDlXQ0KRINBY%2B0E4Sjcm8Q2D7eXyV82n%2FUKCdGLWlte76ij3%2FnyZnT%2BhPue%2BiHHn7fHv8rR8l3yGwcjCcXt8uT5otkqH7RX4Az9T&X-Amz-Signature=0c1a6dd8b60104c649b2c79b489060642af3daa26a9d03993ae1ebcade050012&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZJW5OC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC%2BE26rpjRIQaSHukWJT17D%2FUptlcaXx1H8wX1rejMxJQIgOVrzXuotacW1ensyYVrxmCjnQNgiBngDe5L3MzGGCx0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLdjusluyc6Zg%2FGJjCrcA37CO1ayGMZki17X%2FFb%2BY5bVVb%2Bz2pt%2BDDujm6LFT8wIlUqIjKN1ZSXm1bxNY%2BzDTsVkypeDZidgJeJj0mgcCoEMXP6tnCjnWRPcu6451Qyzx7KXSLLxWAYRmoNkIP%2FaB%2BlY5FrU9huBoFOKEThldKDeFCht8KBkMJODQV9eS2EApsAb7MGl%2FXDLByQqu6u%2Bu168QSL5mChrH6Hmy7VQh3qHcYNwTle%2F1NFmsST%2FDEM9bu5VcJSL2cFWpTOVuaAsyi060ovTt%2B6Er22za5GoYEub%2B7mJyf14SR1%2BLQoFTYITH%2FKZlzDUFrm3nABEpV4NarxBFc%2F0y1mZlN2RrwFyYZsc20RTYHgVeldlIPUt2UHnWrK2cyHX4VhYL6eo%2FoACh4DI0mnnee73LxpIx0EcvemK8lxsYX5jQYyWSaHK4jYqmyWGltEyh7hgToJzfeXxGCBqyTYApeaD6c9eWTUhNmYE3NaFATUZm84W1nNth8b2a1nNUH4qqv6wHIhp9urx0RIgtshWhmDcmuyRvlqzx%2Beh0NYKmNPiGcvxyuYaAhMMpE9ADYzyxXSmEIYLMkTsUINAJvIE9u50agnNA%2F0XxYnZqq7FMSfPbaJgQWKuodX4fMtfcjyn%2FAUD0v03MMPng70GOqUBajKzuVaCdhSyy6f1UVUUtvg7ZD1nO9M4p%2F3iQSqfbpZs7eQKfvlOIKQAgjGPAyQy4WezqXylTVUDjEskGlu16o%2BdnJa%2BKOv6XxPCNMBGxct0bJUu%2F2%2B5nK48EDlXQ0KRINBY%2B0E4Sjcm8Q2D7eXyV82n%2FUKCdGLWlte76ij3%2FnyZnT%2BhPue%2BiHHn7fHv8rR8l3yGwcjCcXt8uT5otkqH7RX4Az9T&X-Amz-Signature=484a9646a160d68cb131c6d63e6a3c1a1723bcc7b38868225dd5cdcc24063882&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZJW5OC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC%2BE26rpjRIQaSHukWJT17D%2FUptlcaXx1H8wX1rejMxJQIgOVrzXuotacW1ensyYVrxmCjnQNgiBngDe5L3MzGGCx0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLdjusluyc6Zg%2FGJjCrcA37CO1ayGMZki17X%2FFb%2BY5bVVb%2Bz2pt%2BDDujm6LFT8wIlUqIjKN1ZSXm1bxNY%2BzDTsVkypeDZidgJeJj0mgcCoEMXP6tnCjnWRPcu6451Qyzx7KXSLLxWAYRmoNkIP%2FaB%2BlY5FrU9huBoFOKEThldKDeFCht8KBkMJODQV9eS2EApsAb7MGl%2FXDLByQqu6u%2Bu168QSL5mChrH6Hmy7VQh3qHcYNwTle%2F1NFmsST%2FDEM9bu5VcJSL2cFWpTOVuaAsyi060ovTt%2B6Er22za5GoYEub%2B7mJyf14SR1%2BLQoFTYITH%2FKZlzDUFrm3nABEpV4NarxBFc%2F0y1mZlN2RrwFyYZsc20RTYHgVeldlIPUt2UHnWrK2cyHX4VhYL6eo%2FoACh4DI0mnnee73LxpIx0EcvemK8lxsYX5jQYyWSaHK4jYqmyWGltEyh7hgToJzfeXxGCBqyTYApeaD6c9eWTUhNmYE3NaFATUZm84W1nNth8b2a1nNUH4qqv6wHIhp9urx0RIgtshWhmDcmuyRvlqzx%2Beh0NYKmNPiGcvxyuYaAhMMpE9ADYzyxXSmEIYLMkTsUINAJvIE9u50agnNA%2F0XxYnZqq7FMSfPbaJgQWKuodX4fMtfcjyn%2FAUD0v03MMPng70GOqUBajKzuVaCdhSyy6f1UVUUtvg7ZD1nO9M4p%2F3iQSqfbpZs7eQKfvlOIKQAgjGPAyQy4WezqXylTVUDjEskGlu16o%2BdnJa%2BKOv6XxPCNMBGxct0bJUu%2F2%2B5nK48EDlXQ0KRINBY%2B0E4Sjcm8Q2D7eXyV82n%2FUKCdGLWlte76ij3%2FnyZnT%2BhPue%2BiHHn7fHv8rR8l3yGwcjCcXt8uT5otkqH7RX4Az9T&X-Amz-Signature=6e5409bf163204502c58f6f3261455e82f2cb8adf3d5e89038fdd068617f0ff2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZJW5OC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC%2BE26rpjRIQaSHukWJT17D%2FUptlcaXx1H8wX1rejMxJQIgOVrzXuotacW1ensyYVrxmCjnQNgiBngDe5L3MzGGCx0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLdjusluyc6Zg%2FGJjCrcA37CO1ayGMZki17X%2FFb%2BY5bVVb%2Bz2pt%2BDDujm6LFT8wIlUqIjKN1ZSXm1bxNY%2BzDTsVkypeDZidgJeJj0mgcCoEMXP6tnCjnWRPcu6451Qyzx7KXSLLxWAYRmoNkIP%2FaB%2BlY5FrU9huBoFOKEThldKDeFCht8KBkMJODQV9eS2EApsAb7MGl%2FXDLByQqu6u%2Bu168QSL5mChrH6Hmy7VQh3qHcYNwTle%2F1NFmsST%2FDEM9bu5VcJSL2cFWpTOVuaAsyi060ovTt%2B6Er22za5GoYEub%2B7mJyf14SR1%2BLQoFTYITH%2FKZlzDUFrm3nABEpV4NarxBFc%2F0y1mZlN2RrwFyYZsc20RTYHgVeldlIPUt2UHnWrK2cyHX4VhYL6eo%2FoACh4DI0mnnee73LxpIx0EcvemK8lxsYX5jQYyWSaHK4jYqmyWGltEyh7hgToJzfeXxGCBqyTYApeaD6c9eWTUhNmYE3NaFATUZm84W1nNth8b2a1nNUH4qqv6wHIhp9urx0RIgtshWhmDcmuyRvlqzx%2Beh0NYKmNPiGcvxyuYaAhMMpE9ADYzyxXSmEIYLMkTsUINAJvIE9u50agnNA%2F0XxYnZqq7FMSfPbaJgQWKuodX4fMtfcjyn%2FAUD0v03MMPng70GOqUBajKzuVaCdhSyy6f1UVUUtvg7ZD1nO9M4p%2F3iQSqfbpZs7eQKfvlOIKQAgjGPAyQy4WezqXylTVUDjEskGlu16o%2BdnJa%2BKOv6XxPCNMBGxct0bJUu%2F2%2B5nK48EDlXQ0KRINBY%2B0E4Sjcm8Q2D7eXyV82n%2FUKCdGLWlte76ij3%2FnyZnT%2BhPue%2BiHHn7fHv8rR8l3yGwcjCcXt8uT5otkqH7RX4Az9T&X-Amz-Signature=ee9cf988ec30cf11eabb74546ff2f5f18514778290607b075bf536f3ec98cbdf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZJW5OC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC%2BE26rpjRIQaSHukWJT17D%2FUptlcaXx1H8wX1rejMxJQIgOVrzXuotacW1ensyYVrxmCjnQNgiBngDe5L3MzGGCx0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLdjusluyc6Zg%2FGJjCrcA37CO1ayGMZki17X%2FFb%2BY5bVVb%2Bz2pt%2BDDujm6LFT8wIlUqIjKN1ZSXm1bxNY%2BzDTsVkypeDZidgJeJj0mgcCoEMXP6tnCjnWRPcu6451Qyzx7KXSLLxWAYRmoNkIP%2FaB%2BlY5FrU9huBoFOKEThldKDeFCht8KBkMJODQV9eS2EApsAb7MGl%2FXDLByQqu6u%2Bu168QSL5mChrH6Hmy7VQh3qHcYNwTle%2F1NFmsST%2FDEM9bu5VcJSL2cFWpTOVuaAsyi060ovTt%2B6Er22za5GoYEub%2B7mJyf14SR1%2BLQoFTYITH%2FKZlzDUFrm3nABEpV4NarxBFc%2F0y1mZlN2RrwFyYZsc20RTYHgVeldlIPUt2UHnWrK2cyHX4VhYL6eo%2FoACh4DI0mnnee73LxpIx0EcvemK8lxsYX5jQYyWSaHK4jYqmyWGltEyh7hgToJzfeXxGCBqyTYApeaD6c9eWTUhNmYE3NaFATUZm84W1nNth8b2a1nNUH4qqv6wHIhp9urx0RIgtshWhmDcmuyRvlqzx%2Beh0NYKmNPiGcvxyuYaAhMMpE9ADYzyxXSmEIYLMkTsUINAJvIE9u50agnNA%2F0XxYnZqq7FMSfPbaJgQWKuodX4fMtfcjyn%2FAUD0v03MMPng70GOqUBajKzuVaCdhSyy6f1UVUUtvg7ZD1nO9M4p%2F3iQSqfbpZs7eQKfvlOIKQAgjGPAyQy4WezqXylTVUDjEskGlu16o%2BdnJa%2BKOv6XxPCNMBGxct0bJUu%2F2%2B5nK48EDlXQ0KRINBY%2B0E4Sjcm8Q2D7eXyV82n%2FUKCdGLWlte76ij3%2FnyZnT%2BhPue%2BiHHn7fHv8rR8l3yGwcjCcXt8uT5otkqH7RX4Az9T&X-Amz-Signature=cae46a24863864a30351ababb3fe4637925e2c36ba54e7d9e97fca4600d51cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
