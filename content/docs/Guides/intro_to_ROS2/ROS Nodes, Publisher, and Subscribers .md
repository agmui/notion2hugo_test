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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SUDHAIZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDgs4EuSzGhfpYWEi9xNF%2FA0Q3Ai%2BUk%2FGRLpbnQIrWk2gIhAJGeeqD1H0om0L%2BF9tIT7FQCPizIDhj5qVkDh%2BV8AZEfKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGKapqyKMO6%2BwEe%2BMq3APlwiQ5B3vsagDADTRsClWpXn%2BAd0LmtSWpDBxCUPZx4BVuErDlSif%2FBPzH1h1CGEbmtX8aC9hANPPl3fsqYFIqm6kYBnIwGs5r2kl%2FDCclVG8KuOV90yFuL2KOaktKMSc2Bp%2Fi7jctij%2FCvvCpkpeU5AVDbXWGhlN2S5f2UFg0H7qZKecmBeNMV0fyARsiPe6Ela1VkyFSe47gHfl63h9ptDq1cGEdqT106eipJrjmYeHxQEZEXO1w0OV3GEN4tmnGsnmEuNyBjlrNCubyS3KzG5l0ZDjbnr37XL6KzwDDKZ5Wx7WTwvFUQ%2FTnOU3xzp7BXKWDIpp%2Fo5wjRBGiDVQxeHFmivljcq6tkCbiWIVO7JycxsgmgoOcN5l90mBpYr6eYtYJFvO8Z0HhkKXYpb%2BzS89B3RCe%2BnUdHP3SRbVMKWhzmQrAE7goq4CXqcbwCU3vhKXiEfmH88Xsnnw%2FhtGbVtOsvrQNfchoOCtJ7NCqYCrOqcJcBq%2F1Nf%2FBW4Djhg1QaZqwYp4pXDmV2OH1cL5XXj4Z0c39VfFc%2BS8dQBMPMYhU7IFxhbbiTGbRzxHtXzQXX8ytCxjiAB7nMHVOJn15W54Ju5y9B3Q3%2FtTw6B8ZvSEyqwPD5k7akYvIATDtie6%2FBjqkAaYU%2FgVp%2Bq2rOAq%2FP6EK8fgpJhJaB%2BwgzGZAc2ujaRORBSB7u27U7Pq56G9MpS0ym9076wSAWuUIy0vK8K9K02uhgiXChr5rEmaTky84ahRP6o3aSod%2FttYWkDxTjiVjlgmvWFhWS%2B%2Fne%2Bi78Oxd5%2B2fRZGhsmut2dirgnA99xVEdcfCK3LTIqShRZLT49aptY4a%2FYgpDC4zoVEfVNwWmiWwD9uN&X-Amz-Signature=92a7b0196e5493a6b9fea7f90628f92f21a1af72fa2752af3afd1a25d95e7c61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SUDHAIZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDgs4EuSzGhfpYWEi9xNF%2FA0Q3Ai%2BUk%2FGRLpbnQIrWk2gIhAJGeeqD1H0om0L%2BF9tIT7FQCPizIDhj5qVkDh%2BV8AZEfKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGKapqyKMO6%2BwEe%2BMq3APlwiQ5B3vsagDADTRsClWpXn%2BAd0LmtSWpDBxCUPZx4BVuErDlSif%2FBPzH1h1CGEbmtX8aC9hANPPl3fsqYFIqm6kYBnIwGs5r2kl%2FDCclVG8KuOV90yFuL2KOaktKMSc2Bp%2Fi7jctij%2FCvvCpkpeU5AVDbXWGhlN2S5f2UFg0H7qZKecmBeNMV0fyARsiPe6Ela1VkyFSe47gHfl63h9ptDq1cGEdqT106eipJrjmYeHxQEZEXO1w0OV3GEN4tmnGsnmEuNyBjlrNCubyS3KzG5l0ZDjbnr37XL6KzwDDKZ5Wx7WTwvFUQ%2FTnOU3xzp7BXKWDIpp%2Fo5wjRBGiDVQxeHFmivljcq6tkCbiWIVO7JycxsgmgoOcN5l90mBpYr6eYtYJFvO8Z0HhkKXYpb%2BzS89B3RCe%2BnUdHP3SRbVMKWhzmQrAE7goq4CXqcbwCU3vhKXiEfmH88Xsnnw%2FhtGbVtOsvrQNfchoOCtJ7NCqYCrOqcJcBq%2F1Nf%2FBW4Djhg1QaZqwYp4pXDmV2OH1cL5XXj4Z0c39VfFc%2BS8dQBMPMYhU7IFxhbbiTGbRzxHtXzQXX8ytCxjiAB7nMHVOJn15W54Ju5y9B3Q3%2FtTw6B8ZvSEyqwPD5k7akYvIATDtie6%2FBjqkAaYU%2FgVp%2Bq2rOAq%2FP6EK8fgpJhJaB%2BwgzGZAc2ujaRORBSB7u27U7Pq56G9MpS0ym9076wSAWuUIy0vK8K9K02uhgiXChr5rEmaTky84ahRP6o3aSod%2FttYWkDxTjiVjlgmvWFhWS%2B%2Fne%2Bi78Oxd5%2B2fRZGhsmut2dirgnA99xVEdcfCK3LTIqShRZLT49aptY4a%2FYgpDC4zoVEfVNwWmiWwD9uN&X-Amz-Signature=a1a73d57de5ed0cf72990972f910aabaa09cc48c67d46abd5cf6b3b7af0ffa23&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SUDHAIZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDgs4EuSzGhfpYWEi9xNF%2FA0Q3Ai%2BUk%2FGRLpbnQIrWk2gIhAJGeeqD1H0om0L%2BF9tIT7FQCPizIDhj5qVkDh%2BV8AZEfKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGKapqyKMO6%2BwEe%2BMq3APlwiQ5B3vsagDADTRsClWpXn%2BAd0LmtSWpDBxCUPZx4BVuErDlSif%2FBPzH1h1CGEbmtX8aC9hANPPl3fsqYFIqm6kYBnIwGs5r2kl%2FDCclVG8KuOV90yFuL2KOaktKMSc2Bp%2Fi7jctij%2FCvvCpkpeU5AVDbXWGhlN2S5f2UFg0H7qZKecmBeNMV0fyARsiPe6Ela1VkyFSe47gHfl63h9ptDq1cGEdqT106eipJrjmYeHxQEZEXO1w0OV3GEN4tmnGsnmEuNyBjlrNCubyS3KzG5l0ZDjbnr37XL6KzwDDKZ5Wx7WTwvFUQ%2FTnOU3xzp7BXKWDIpp%2Fo5wjRBGiDVQxeHFmivljcq6tkCbiWIVO7JycxsgmgoOcN5l90mBpYr6eYtYJFvO8Z0HhkKXYpb%2BzS89B3RCe%2BnUdHP3SRbVMKWhzmQrAE7goq4CXqcbwCU3vhKXiEfmH88Xsnnw%2FhtGbVtOsvrQNfchoOCtJ7NCqYCrOqcJcBq%2F1Nf%2FBW4Djhg1QaZqwYp4pXDmV2OH1cL5XXj4Z0c39VfFc%2BS8dQBMPMYhU7IFxhbbiTGbRzxHtXzQXX8ytCxjiAB7nMHVOJn15W54Ju5y9B3Q3%2FtTw6B8ZvSEyqwPD5k7akYvIATDtie6%2FBjqkAaYU%2FgVp%2Bq2rOAq%2FP6EK8fgpJhJaB%2BwgzGZAc2ujaRORBSB7u27U7Pq56G9MpS0ym9076wSAWuUIy0vK8K9K02uhgiXChr5rEmaTky84ahRP6o3aSod%2FttYWkDxTjiVjlgmvWFhWS%2B%2Fne%2Bi78Oxd5%2B2fRZGhsmut2dirgnA99xVEdcfCK3LTIqShRZLT49aptY4a%2FYgpDC4zoVEfVNwWmiWwD9uN&X-Amz-Signature=a8002c2a5d1b8803e63bb59126db44f26c56f241c445eb2fa6aa3b7ec66a73b6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SUDHAIZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDgs4EuSzGhfpYWEi9xNF%2FA0Q3Ai%2BUk%2FGRLpbnQIrWk2gIhAJGeeqD1H0om0L%2BF9tIT7FQCPizIDhj5qVkDh%2BV8AZEfKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGKapqyKMO6%2BwEe%2BMq3APlwiQ5B3vsagDADTRsClWpXn%2BAd0LmtSWpDBxCUPZx4BVuErDlSif%2FBPzH1h1CGEbmtX8aC9hANPPl3fsqYFIqm6kYBnIwGs5r2kl%2FDCclVG8KuOV90yFuL2KOaktKMSc2Bp%2Fi7jctij%2FCvvCpkpeU5AVDbXWGhlN2S5f2UFg0H7qZKecmBeNMV0fyARsiPe6Ela1VkyFSe47gHfl63h9ptDq1cGEdqT106eipJrjmYeHxQEZEXO1w0OV3GEN4tmnGsnmEuNyBjlrNCubyS3KzG5l0ZDjbnr37XL6KzwDDKZ5Wx7WTwvFUQ%2FTnOU3xzp7BXKWDIpp%2Fo5wjRBGiDVQxeHFmivljcq6tkCbiWIVO7JycxsgmgoOcN5l90mBpYr6eYtYJFvO8Z0HhkKXYpb%2BzS89B3RCe%2BnUdHP3SRbVMKWhzmQrAE7goq4CXqcbwCU3vhKXiEfmH88Xsnnw%2FhtGbVtOsvrQNfchoOCtJ7NCqYCrOqcJcBq%2F1Nf%2FBW4Djhg1QaZqwYp4pXDmV2OH1cL5XXj4Z0c39VfFc%2BS8dQBMPMYhU7IFxhbbiTGbRzxHtXzQXX8ytCxjiAB7nMHVOJn15W54Ju5y9B3Q3%2FtTw6B8ZvSEyqwPD5k7akYvIATDtie6%2FBjqkAaYU%2FgVp%2Bq2rOAq%2FP6EK8fgpJhJaB%2BwgzGZAc2ujaRORBSB7u27U7Pq56G9MpS0ym9076wSAWuUIy0vK8K9K02uhgiXChr5rEmaTky84ahRP6o3aSod%2FttYWkDxTjiVjlgmvWFhWS%2B%2Fne%2Bi78Oxd5%2B2fRZGhsmut2dirgnA99xVEdcfCK3LTIqShRZLT49aptY4a%2FYgpDC4zoVEfVNwWmiWwD9uN&X-Amz-Signature=d5b9f9d084c9becd62c3b5d812fd876dc28ab20c258db58767da4de0dd7bf296&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SUDHAIZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDgs4EuSzGhfpYWEi9xNF%2FA0Q3Ai%2BUk%2FGRLpbnQIrWk2gIhAJGeeqD1H0om0L%2BF9tIT7FQCPizIDhj5qVkDh%2BV8AZEfKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGKapqyKMO6%2BwEe%2BMq3APlwiQ5B3vsagDADTRsClWpXn%2BAd0LmtSWpDBxCUPZx4BVuErDlSif%2FBPzH1h1CGEbmtX8aC9hANPPl3fsqYFIqm6kYBnIwGs5r2kl%2FDCclVG8KuOV90yFuL2KOaktKMSc2Bp%2Fi7jctij%2FCvvCpkpeU5AVDbXWGhlN2S5f2UFg0H7qZKecmBeNMV0fyARsiPe6Ela1VkyFSe47gHfl63h9ptDq1cGEdqT106eipJrjmYeHxQEZEXO1w0OV3GEN4tmnGsnmEuNyBjlrNCubyS3KzG5l0ZDjbnr37XL6KzwDDKZ5Wx7WTwvFUQ%2FTnOU3xzp7BXKWDIpp%2Fo5wjRBGiDVQxeHFmivljcq6tkCbiWIVO7JycxsgmgoOcN5l90mBpYr6eYtYJFvO8Z0HhkKXYpb%2BzS89B3RCe%2BnUdHP3SRbVMKWhzmQrAE7goq4CXqcbwCU3vhKXiEfmH88Xsnnw%2FhtGbVtOsvrQNfchoOCtJ7NCqYCrOqcJcBq%2F1Nf%2FBW4Djhg1QaZqwYp4pXDmV2OH1cL5XXj4Z0c39VfFc%2BS8dQBMPMYhU7IFxhbbiTGbRzxHtXzQXX8ytCxjiAB7nMHVOJn15W54Ju5y9B3Q3%2FtTw6B8ZvSEyqwPD5k7akYvIATDtie6%2FBjqkAaYU%2FgVp%2Bq2rOAq%2FP6EK8fgpJhJaB%2BwgzGZAc2ujaRORBSB7u27U7Pq56G9MpS0ym9076wSAWuUIy0vK8K9K02uhgiXChr5rEmaTky84ahRP6o3aSod%2FttYWkDxTjiVjlgmvWFhWS%2B%2Fne%2Bi78Oxd5%2B2fRZGhsmut2dirgnA99xVEdcfCK3LTIqShRZLT49aptY4a%2FYgpDC4zoVEfVNwWmiWwD9uN&X-Amz-Signature=058f7db1c4a168bcda36b6779e6deaa29b9eb07de89ec85c9013652ff1fe71c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SUDHAIZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDgs4EuSzGhfpYWEi9xNF%2FA0Q3Ai%2BUk%2FGRLpbnQIrWk2gIhAJGeeqD1H0om0L%2BF9tIT7FQCPizIDhj5qVkDh%2BV8AZEfKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGKapqyKMO6%2BwEe%2BMq3APlwiQ5B3vsagDADTRsClWpXn%2BAd0LmtSWpDBxCUPZx4BVuErDlSif%2FBPzH1h1CGEbmtX8aC9hANPPl3fsqYFIqm6kYBnIwGs5r2kl%2FDCclVG8KuOV90yFuL2KOaktKMSc2Bp%2Fi7jctij%2FCvvCpkpeU5AVDbXWGhlN2S5f2UFg0H7qZKecmBeNMV0fyARsiPe6Ela1VkyFSe47gHfl63h9ptDq1cGEdqT106eipJrjmYeHxQEZEXO1w0OV3GEN4tmnGsnmEuNyBjlrNCubyS3KzG5l0ZDjbnr37XL6KzwDDKZ5Wx7WTwvFUQ%2FTnOU3xzp7BXKWDIpp%2Fo5wjRBGiDVQxeHFmivljcq6tkCbiWIVO7JycxsgmgoOcN5l90mBpYr6eYtYJFvO8Z0HhkKXYpb%2BzS89B3RCe%2BnUdHP3SRbVMKWhzmQrAE7goq4CXqcbwCU3vhKXiEfmH88Xsnnw%2FhtGbVtOsvrQNfchoOCtJ7NCqYCrOqcJcBq%2F1Nf%2FBW4Djhg1QaZqwYp4pXDmV2OH1cL5XXj4Z0c39VfFc%2BS8dQBMPMYhU7IFxhbbiTGbRzxHtXzQXX8ytCxjiAB7nMHVOJn15W54Ju5y9B3Q3%2FtTw6B8ZvSEyqwPD5k7akYvIATDtie6%2FBjqkAaYU%2FgVp%2Bq2rOAq%2FP6EK8fgpJhJaB%2BwgzGZAc2ujaRORBSB7u27U7Pq56G9MpS0ym9076wSAWuUIy0vK8K9K02uhgiXChr5rEmaTky84ahRP6o3aSod%2FttYWkDxTjiVjlgmvWFhWS%2B%2Fne%2Bi78Oxd5%2B2fRZGhsmut2dirgnA99xVEdcfCK3LTIqShRZLT49aptY4a%2FYgpDC4zoVEfVNwWmiWwD9uN&X-Amz-Signature=b2e4ede86d3431851e3f1df761d7ab221731170c1725930d3ce6264ef1da635c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SUDHAIZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDgs4EuSzGhfpYWEi9xNF%2FA0Q3Ai%2BUk%2FGRLpbnQIrWk2gIhAJGeeqD1H0om0L%2BF9tIT7FQCPizIDhj5qVkDh%2BV8AZEfKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGKapqyKMO6%2BwEe%2BMq3APlwiQ5B3vsagDADTRsClWpXn%2BAd0LmtSWpDBxCUPZx4BVuErDlSif%2FBPzH1h1CGEbmtX8aC9hANPPl3fsqYFIqm6kYBnIwGs5r2kl%2FDCclVG8KuOV90yFuL2KOaktKMSc2Bp%2Fi7jctij%2FCvvCpkpeU5AVDbXWGhlN2S5f2UFg0H7qZKecmBeNMV0fyARsiPe6Ela1VkyFSe47gHfl63h9ptDq1cGEdqT106eipJrjmYeHxQEZEXO1w0OV3GEN4tmnGsnmEuNyBjlrNCubyS3KzG5l0ZDjbnr37XL6KzwDDKZ5Wx7WTwvFUQ%2FTnOU3xzp7BXKWDIpp%2Fo5wjRBGiDVQxeHFmivljcq6tkCbiWIVO7JycxsgmgoOcN5l90mBpYr6eYtYJFvO8Z0HhkKXYpb%2BzS89B3RCe%2BnUdHP3SRbVMKWhzmQrAE7goq4CXqcbwCU3vhKXiEfmH88Xsnnw%2FhtGbVtOsvrQNfchoOCtJ7NCqYCrOqcJcBq%2F1Nf%2FBW4Djhg1QaZqwYp4pXDmV2OH1cL5XXj4Z0c39VfFc%2BS8dQBMPMYhU7IFxhbbiTGbRzxHtXzQXX8ytCxjiAB7nMHVOJn15W54Ju5y9B3Q3%2FtTw6B8ZvSEyqwPD5k7akYvIATDtie6%2FBjqkAaYU%2FgVp%2Bq2rOAq%2FP6EK8fgpJhJaB%2BwgzGZAc2ujaRORBSB7u27U7Pq56G9MpS0ym9076wSAWuUIy0vK8K9K02uhgiXChr5rEmaTky84ahRP6o3aSod%2FttYWkDxTjiVjlgmvWFhWS%2B%2Fne%2Bi78Oxd5%2B2fRZGhsmut2dirgnA99xVEdcfCK3LTIqShRZLT49aptY4a%2FYgpDC4zoVEfVNwWmiWwD9uN&X-Amz-Signature=5504bb1ebe9e53ee242a696d5f503ad37f3c8a24e558021d0365301a4606d7c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SUDHAIZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDgs4EuSzGhfpYWEi9xNF%2FA0Q3Ai%2BUk%2FGRLpbnQIrWk2gIhAJGeeqD1H0om0L%2BF9tIT7FQCPizIDhj5qVkDh%2BV8AZEfKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGKapqyKMO6%2BwEe%2BMq3APlwiQ5B3vsagDADTRsClWpXn%2BAd0LmtSWpDBxCUPZx4BVuErDlSif%2FBPzH1h1CGEbmtX8aC9hANPPl3fsqYFIqm6kYBnIwGs5r2kl%2FDCclVG8KuOV90yFuL2KOaktKMSc2Bp%2Fi7jctij%2FCvvCpkpeU5AVDbXWGhlN2S5f2UFg0H7qZKecmBeNMV0fyARsiPe6Ela1VkyFSe47gHfl63h9ptDq1cGEdqT106eipJrjmYeHxQEZEXO1w0OV3GEN4tmnGsnmEuNyBjlrNCubyS3KzG5l0ZDjbnr37XL6KzwDDKZ5Wx7WTwvFUQ%2FTnOU3xzp7BXKWDIpp%2Fo5wjRBGiDVQxeHFmivljcq6tkCbiWIVO7JycxsgmgoOcN5l90mBpYr6eYtYJFvO8Z0HhkKXYpb%2BzS89B3RCe%2BnUdHP3SRbVMKWhzmQrAE7goq4CXqcbwCU3vhKXiEfmH88Xsnnw%2FhtGbVtOsvrQNfchoOCtJ7NCqYCrOqcJcBq%2F1Nf%2FBW4Djhg1QaZqwYp4pXDmV2OH1cL5XXj4Z0c39VfFc%2BS8dQBMPMYhU7IFxhbbiTGbRzxHtXzQXX8ytCxjiAB7nMHVOJn15W54Ju5y9B3Q3%2FtTw6B8ZvSEyqwPD5k7akYvIATDtie6%2FBjqkAaYU%2FgVp%2Bq2rOAq%2FP6EK8fgpJhJaB%2BwgzGZAc2ujaRORBSB7u27U7Pq56G9MpS0ym9076wSAWuUIy0vK8K9K02uhgiXChr5rEmaTky84ahRP6o3aSod%2FttYWkDxTjiVjlgmvWFhWS%2B%2Fne%2Bi78Oxd5%2B2fRZGhsmut2dirgnA99xVEdcfCK3LTIqShRZLT49aptY4a%2FYgpDC4zoVEfVNwWmiWwD9uN&X-Amz-Signature=08186b041f7266299c3bc786f665a4b98c7de1ac3533814fe3e0f1aaae32e7dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
