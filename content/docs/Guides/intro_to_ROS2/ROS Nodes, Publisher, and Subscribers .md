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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7VFNBJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCexaaGGurtR472Pv0Pxn0PftBJD9AGpeUnf%2BEiSY23xAIgaoQfKJvIfs2EOtqvv4nIWykYWVG7z%2FAb4kuHXYG23Msq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKFkBRFWKnYr8qLNASrcA4Lrrhch7qEA0ZikTfsXzR0YmRYnqITz8qdsFWkpz9QTVl%2Bzt3BUJMGUmSMp8MqpNpv3%2BhJhQaVF8vLh14%2BqI1%2BFu04Lds42txV7W5azO6N4jgTk5QJ1yPzXUDR3N6ttPUuF1NyvgAYqx6af%2FsnWnDP6UMT%2BTOEFsE3x4kukaMr%2Fm3H%2FGrP2xUxWqbi%2F52R7caSvMZy4%2B3tzvwOOeo88AAaMf4ih4%2BrRu7aA1lR7N5eTLjWM5GMDMgVS2ApTmtaMWGqyHSfEZDOIHt0h3qlYJkzs7ndsEqUSQ8mVjvykuYhqFK1ghMTnQZ4h1N0IaDRfPIU%2FwzD09DnzURdkjkOuNTQGlYBtF1izEOwMvV1PT7Te9I38HQR6lxeaRMpb8caya%2BUBHU5Sun1Mg1%2Bc9U2n00UGOu05D7VsLhcL3wldIMbrYRlnyJnK6JgNH2chTw5gCkJ%2BumXNpIlo%2F8JyQ4wp6ykAmA3hxeBK8bD9MFY%2B6tY%2B0lpnVQv2spx2i%2FprTxEGZZqPW1Bm1%2F0Np0XLFo1OfZPVAowKi7F37bgN4DE3pTz%2BOUfb2bdumdWnmjMhandpdJJXWeS01xo4vtvv7VQLQsn0SdzPdlOn53yQqU%2Fmst3Y7YpJsUoynqyk0OupMLPUicQGOqUBkcHY6HarzacwO9WOxRdBiRmxkmNwqHwfMKuhbGekSDD%2FYmsaq%2FLVdGPleDDlGxDryU8h%2BP8Tpgb4tNafU%2FSTfMLm57fyVp8hoHCXcFR34vuREKeTgc2C043HyL7aY8HLTRkTeGTRSQZl1ge71pP6Iyhb2B8Y%2BtNs%2BnCKDCM%2FaRb71T33UU%2FOXgTghN2hr9wDknSvuYdBPDmov82RdcPTXjjxHDe6&X-Amz-Signature=3eaeaa2d0190bc9c4879836a6320b4b47f6932a8f20e321c90f39f7189de6c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7VFNBJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCexaaGGurtR472Pv0Pxn0PftBJD9AGpeUnf%2BEiSY23xAIgaoQfKJvIfs2EOtqvv4nIWykYWVG7z%2FAb4kuHXYG23Msq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKFkBRFWKnYr8qLNASrcA4Lrrhch7qEA0ZikTfsXzR0YmRYnqITz8qdsFWkpz9QTVl%2Bzt3BUJMGUmSMp8MqpNpv3%2BhJhQaVF8vLh14%2BqI1%2BFu04Lds42txV7W5azO6N4jgTk5QJ1yPzXUDR3N6ttPUuF1NyvgAYqx6af%2FsnWnDP6UMT%2BTOEFsE3x4kukaMr%2Fm3H%2FGrP2xUxWqbi%2F52R7caSvMZy4%2B3tzvwOOeo88AAaMf4ih4%2BrRu7aA1lR7N5eTLjWM5GMDMgVS2ApTmtaMWGqyHSfEZDOIHt0h3qlYJkzs7ndsEqUSQ8mVjvykuYhqFK1ghMTnQZ4h1N0IaDRfPIU%2FwzD09DnzURdkjkOuNTQGlYBtF1izEOwMvV1PT7Te9I38HQR6lxeaRMpb8caya%2BUBHU5Sun1Mg1%2Bc9U2n00UGOu05D7VsLhcL3wldIMbrYRlnyJnK6JgNH2chTw5gCkJ%2BumXNpIlo%2F8JyQ4wp6ykAmA3hxeBK8bD9MFY%2B6tY%2B0lpnVQv2spx2i%2FprTxEGZZqPW1Bm1%2F0Np0XLFo1OfZPVAowKi7F37bgN4DE3pTz%2BOUfb2bdumdWnmjMhandpdJJXWeS01xo4vtvv7VQLQsn0SdzPdlOn53yQqU%2Fmst3Y7YpJsUoynqyk0OupMLPUicQGOqUBkcHY6HarzacwO9WOxRdBiRmxkmNwqHwfMKuhbGekSDD%2FYmsaq%2FLVdGPleDDlGxDryU8h%2BP8Tpgb4tNafU%2FSTfMLm57fyVp8hoHCXcFR34vuREKeTgc2C043HyL7aY8HLTRkTeGTRSQZl1ge71pP6Iyhb2B8Y%2BtNs%2BnCKDCM%2FaRb71T33UU%2FOXgTghN2hr9wDknSvuYdBPDmov82RdcPTXjjxHDe6&X-Amz-Signature=49d6cd1571d9a8da04af5cb84418ac020d3f67a76ac31a42cabc61f415baf8e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7VFNBJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCexaaGGurtR472Pv0Pxn0PftBJD9AGpeUnf%2BEiSY23xAIgaoQfKJvIfs2EOtqvv4nIWykYWVG7z%2FAb4kuHXYG23Msq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKFkBRFWKnYr8qLNASrcA4Lrrhch7qEA0ZikTfsXzR0YmRYnqITz8qdsFWkpz9QTVl%2Bzt3BUJMGUmSMp8MqpNpv3%2BhJhQaVF8vLh14%2BqI1%2BFu04Lds42txV7W5azO6N4jgTk5QJ1yPzXUDR3N6ttPUuF1NyvgAYqx6af%2FsnWnDP6UMT%2BTOEFsE3x4kukaMr%2Fm3H%2FGrP2xUxWqbi%2F52R7caSvMZy4%2B3tzvwOOeo88AAaMf4ih4%2BrRu7aA1lR7N5eTLjWM5GMDMgVS2ApTmtaMWGqyHSfEZDOIHt0h3qlYJkzs7ndsEqUSQ8mVjvykuYhqFK1ghMTnQZ4h1N0IaDRfPIU%2FwzD09DnzURdkjkOuNTQGlYBtF1izEOwMvV1PT7Te9I38HQR6lxeaRMpb8caya%2BUBHU5Sun1Mg1%2Bc9U2n00UGOu05D7VsLhcL3wldIMbrYRlnyJnK6JgNH2chTw5gCkJ%2BumXNpIlo%2F8JyQ4wp6ykAmA3hxeBK8bD9MFY%2B6tY%2B0lpnVQv2spx2i%2FprTxEGZZqPW1Bm1%2F0Np0XLFo1OfZPVAowKi7F37bgN4DE3pTz%2BOUfb2bdumdWnmjMhandpdJJXWeS01xo4vtvv7VQLQsn0SdzPdlOn53yQqU%2Fmst3Y7YpJsUoynqyk0OupMLPUicQGOqUBkcHY6HarzacwO9WOxRdBiRmxkmNwqHwfMKuhbGekSDD%2FYmsaq%2FLVdGPleDDlGxDryU8h%2BP8Tpgb4tNafU%2FSTfMLm57fyVp8hoHCXcFR34vuREKeTgc2C043HyL7aY8HLTRkTeGTRSQZl1ge71pP6Iyhb2B8Y%2BtNs%2BnCKDCM%2FaRb71T33UU%2FOXgTghN2hr9wDknSvuYdBPDmov82RdcPTXjjxHDe6&X-Amz-Signature=241a3a852c1324365e83761656f0bb1df7d9df6e90efcbd26456e52993ca570a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7VFNBJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCexaaGGurtR472Pv0Pxn0PftBJD9AGpeUnf%2BEiSY23xAIgaoQfKJvIfs2EOtqvv4nIWykYWVG7z%2FAb4kuHXYG23Msq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKFkBRFWKnYr8qLNASrcA4Lrrhch7qEA0ZikTfsXzR0YmRYnqITz8qdsFWkpz9QTVl%2Bzt3BUJMGUmSMp8MqpNpv3%2BhJhQaVF8vLh14%2BqI1%2BFu04Lds42txV7W5azO6N4jgTk5QJ1yPzXUDR3N6ttPUuF1NyvgAYqx6af%2FsnWnDP6UMT%2BTOEFsE3x4kukaMr%2Fm3H%2FGrP2xUxWqbi%2F52R7caSvMZy4%2B3tzvwOOeo88AAaMf4ih4%2BrRu7aA1lR7N5eTLjWM5GMDMgVS2ApTmtaMWGqyHSfEZDOIHt0h3qlYJkzs7ndsEqUSQ8mVjvykuYhqFK1ghMTnQZ4h1N0IaDRfPIU%2FwzD09DnzURdkjkOuNTQGlYBtF1izEOwMvV1PT7Te9I38HQR6lxeaRMpb8caya%2BUBHU5Sun1Mg1%2Bc9U2n00UGOu05D7VsLhcL3wldIMbrYRlnyJnK6JgNH2chTw5gCkJ%2BumXNpIlo%2F8JyQ4wp6ykAmA3hxeBK8bD9MFY%2B6tY%2B0lpnVQv2spx2i%2FprTxEGZZqPW1Bm1%2F0Np0XLFo1OfZPVAowKi7F37bgN4DE3pTz%2BOUfb2bdumdWnmjMhandpdJJXWeS01xo4vtvv7VQLQsn0SdzPdlOn53yQqU%2Fmst3Y7YpJsUoynqyk0OupMLPUicQGOqUBkcHY6HarzacwO9WOxRdBiRmxkmNwqHwfMKuhbGekSDD%2FYmsaq%2FLVdGPleDDlGxDryU8h%2BP8Tpgb4tNafU%2FSTfMLm57fyVp8hoHCXcFR34vuREKeTgc2C043HyL7aY8HLTRkTeGTRSQZl1ge71pP6Iyhb2B8Y%2BtNs%2BnCKDCM%2FaRb71T33UU%2FOXgTghN2hr9wDknSvuYdBPDmov82RdcPTXjjxHDe6&X-Amz-Signature=e14f1b868a6dbf35b2cc61d850725ad05e828f4eaf15cf9e0b26c503e69cf722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7VFNBJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCexaaGGurtR472Pv0Pxn0PftBJD9AGpeUnf%2BEiSY23xAIgaoQfKJvIfs2EOtqvv4nIWykYWVG7z%2FAb4kuHXYG23Msq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKFkBRFWKnYr8qLNASrcA4Lrrhch7qEA0ZikTfsXzR0YmRYnqITz8qdsFWkpz9QTVl%2Bzt3BUJMGUmSMp8MqpNpv3%2BhJhQaVF8vLh14%2BqI1%2BFu04Lds42txV7W5azO6N4jgTk5QJ1yPzXUDR3N6ttPUuF1NyvgAYqx6af%2FsnWnDP6UMT%2BTOEFsE3x4kukaMr%2Fm3H%2FGrP2xUxWqbi%2F52R7caSvMZy4%2B3tzvwOOeo88AAaMf4ih4%2BrRu7aA1lR7N5eTLjWM5GMDMgVS2ApTmtaMWGqyHSfEZDOIHt0h3qlYJkzs7ndsEqUSQ8mVjvykuYhqFK1ghMTnQZ4h1N0IaDRfPIU%2FwzD09DnzURdkjkOuNTQGlYBtF1izEOwMvV1PT7Te9I38HQR6lxeaRMpb8caya%2BUBHU5Sun1Mg1%2Bc9U2n00UGOu05D7VsLhcL3wldIMbrYRlnyJnK6JgNH2chTw5gCkJ%2BumXNpIlo%2F8JyQ4wp6ykAmA3hxeBK8bD9MFY%2B6tY%2B0lpnVQv2spx2i%2FprTxEGZZqPW1Bm1%2F0Np0XLFo1OfZPVAowKi7F37bgN4DE3pTz%2BOUfb2bdumdWnmjMhandpdJJXWeS01xo4vtvv7VQLQsn0SdzPdlOn53yQqU%2Fmst3Y7YpJsUoynqyk0OupMLPUicQGOqUBkcHY6HarzacwO9WOxRdBiRmxkmNwqHwfMKuhbGekSDD%2FYmsaq%2FLVdGPleDDlGxDryU8h%2BP8Tpgb4tNafU%2FSTfMLm57fyVp8hoHCXcFR34vuREKeTgc2C043HyL7aY8HLTRkTeGTRSQZl1ge71pP6Iyhb2B8Y%2BtNs%2BnCKDCM%2FaRb71T33UU%2FOXgTghN2hr9wDknSvuYdBPDmov82RdcPTXjjxHDe6&X-Amz-Signature=d1668dfe197999da86ffdeb88de45ea45ef66791c366101fcd0f64cbc3293d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7VFNBJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCexaaGGurtR472Pv0Pxn0PftBJD9AGpeUnf%2BEiSY23xAIgaoQfKJvIfs2EOtqvv4nIWykYWVG7z%2FAb4kuHXYG23Msq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKFkBRFWKnYr8qLNASrcA4Lrrhch7qEA0ZikTfsXzR0YmRYnqITz8qdsFWkpz9QTVl%2Bzt3BUJMGUmSMp8MqpNpv3%2BhJhQaVF8vLh14%2BqI1%2BFu04Lds42txV7W5azO6N4jgTk5QJ1yPzXUDR3N6ttPUuF1NyvgAYqx6af%2FsnWnDP6UMT%2BTOEFsE3x4kukaMr%2Fm3H%2FGrP2xUxWqbi%2F52R7caSvMZy4%2B3tzvwOOeo88AAaMf4ih4%2BrRu7aA1lR7N5eTLjWM5GMDMgVS2ApTmtaMWGqyHSfEZDOIHt0h3qlYJkzs7ndsEqUSQ8mVjvykuYhqFK1ghMTnQZ4h1N0IaDRfPIU%2FwzD09DnzURdkjkOuNTQGlYBtF1izEOwMvV1PT7Te9I38HQR6lxeaRMpb8caya%2BUBHU5Sun1Mg1%2Bc9U2n00UGOu05D7VsLhcL3wldIMbrYRlnyJnK6JgNH2chTw5gCkJ%2BumXNpIlo%2F8JyQ4wp6ykAmA3hxeBK8bD9MFY%2B6tY%2B0lpnVQv2spx2i%2FprTxEGZZqPW1Bm1%2F0Np0XLFo1OfZPVAowKi7F37bgN4DE3pTz%2BOUfb2bdumdWnmjMhandpdJJXWeS01xo4vtvv7VQLQsn0SdzPdlOn53yQqU%2Fmst3Y7YpJsUoynqyk0OupMLPUicQGOqUBkcHY6HarzacwO9WOxRdBiRmxkmNwqHwfMKuhbGekSDD%2FYmsaq%2FLVdGPleDDlGxDryU8h%2BP8Tpgb4tNafU%2FSTfMLm57fyVp8hoHCXcFR34vuREKeTgc2C043HyL7aY8HLTRkTeGTRSQZl1ge71pP6Iyhb2B8Y%2BtNs%2BnCKDCM%2FaRb71T33UU%2FOXgTghN2hr9wDknSvuYdBPDmov82RdcPTXjjxHDe6&X-Amz-Signature=2fc95fb18bb6dbd1750b378364a917bd4ca340de78eb7f5eed03f0e543d0a162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7VFNBJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCexaaGGurtR472Pv0Pxn0PftBJD9AGpeUnf%2BEiSY23xAIgaoQfKJvIfs2EOtqvv4nIWykYWVG7z%2FAb4kuHXYG23Msq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKFkBRFWKnYr8qLNASrcA4Lrrhch7qEA0ZikTfsXzR0YmRYnqITz8qdsFWkpz9QTVl%2Bzt3BUJMGUmSMp8MqpNpv3%2BhJhQaVF8vLh14%2BqI1%2BFu04Lds42txV7W5azO6N4jgTk5QJ1yPzXUDR3N6ttPUuF1NyvgAYqx6af%2FsnWnDP6UMT%2BTOEFsE3x4kukaMr%2Fm3H%2FGrP2xUxWqbi%2F52R7caSvMZy4%2B3tzvwOOeo88AAaMf4ih4%2BrRu7aA1lR7N5eTLjWM5GMDMgVS2ApTmtaMWGqyHSfEZDOIHt0h3qlYJkzs7ndsEqUSQ8mVjvykuYhqFK1ghMTnQZ4h1N0IaDRfPIU%2FwzD09DnzURdkjkOuNTQGlYBtF1izEOwMvV1PT7Te9I38HQR6lxeaRMpb8caya%2BUBHU5Sun1Mg1%2Bc9U2n00UGOu05D7VsLhcL3wldIMbrYRlnyJnK6JgNH2chTw5gCkJ%2BumXNpIlo%2F8JyQ4wp6ykAmA3hxeBK8bD9MFY%2B6tY%2B0lpnVQv2spx2i%2FprTxEGZZqPW1Bm1%2F0Np0XLFo1OfZPVAowKi7F37bgN4DE3pTz%2BOUfb2bdumdWnmjMhandpdJJXWeS01xo4vtvv7VQLQsn0SdzPdlOn53yQqU%2Fmst3Y7YpJsUoynqyk0OupMLPUicQGOqUBkcHY6HarzacwO9WOxRdBiRmxkmNwqHwfMKuhbGekSDD%2FYmsaq%2FLVdGPleDDlGxDryU8h%2BP8Tpgb4tNafU%2FSTfMLm57fyVp8hoHCXcFR34vuREKeTgc2C043HyL7aY8HLTRkTeGTRSQZl1ge71pP6Iyhb2B8Y%2BtNs%2BnCKDCM%2FaRb71T33UU%2FOXgTghN2hr9wDknSvuYdBPDmov82RdcPTXjjxHDe6&X-Amz-Signature=8d4d0781a57ee99dee7e6aa3dbcbb92bc1c863201d262c62aafc67f1c762664a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7VFNBJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCexaaGGurtR472Pv0Pxn0PftBJD9AGpeUnf%2BEiSY23xAIgaoQfKJvIfs2EOtqvv4nIWykYWVG7z%2FAb4kuHXYG23Msq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKFkBRFWKnYr8qLNASrcA4Lrrhch7qEA0ZikTfsXzR0YmRYnqITz8qdsFWkpz9QTVl%2Bzt3BUJMGUmSMp8MqpNpv3%2BhJhQaVF8vLh14%2BqI1%2BFu04Lds42txV7W5azO6N4jgTk5QJ1yPzXUDR3N6ttPUuF1NyvgAYqx6af%2FsnWnDP6UMT%2BTOEFsE3x4kukaMr%2Fm3H%2FGrP2xUxWqbi%2F52R7caSvMZy4%2B3tzvwOOeo88AAaMf4ih4%2BrRu7aA1lR7N5eTLjWM5GMDMgVS2ApTmtaMWGqyHSfEZDOIHt0h3qlYJkzs7ndsEqUSQ8mVjvykuYhqFK1ghMTnQZ4h1N0IaDRfPIU%2FwzD09DnzURdkjkOuNTQGlYBtF1izEOwMvV1PT7Te9I38HQR6lxeaRMpb8caya%2BUBHU5Sun1Mg1%2Bc9U2n00UGOu05D7VsLhcL3wldIMbrYRlnyJnK6JgNH2chTw5gCkJ%2BumXNpIlo%2F8JyQ4wp6ykAmA3hxeBK8bD9MFY%2B6tY%2B0lpnVQv2spx2i%2FprTxEGZZqPW1Bm1%2F0Np0XLFo1OfZPVAowKi7F37bgN4DE3pTz%2BOUfb2bdumdWnmjMhandpdJJXWeS01xo4vtvv7VQLQsn0SdzPdlOn53yQqU%2Fmst3Y7YpJsUoynqyk0OupMLPUicQGOqUBkcHY6HarzacwO9WOxRdBiRmxkmNwqHwfMKuhbGekSDD%2FYmsaq%2FLVdGPleDDlGxDryU8h%2BP8Tpgb4tNafU%2FSTfMLm57fyVp8hoHCXcFR34vuREKeTgc2C043HyL7aY8HLTRkTeGTRSQZl1ge71pP6Iyhb2B8Y%2BtNs%2BnCKDCM%2FaRb71T33UU%2FOXgTghN2hr9wDknSvuYdBPDmov82RdcPTXjjxHDe6&X-Amz-Signature=af66249ad6d768d9e77b338e5e5c395eef5ee21f0b790b1fa4c5c251ea1e78fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
