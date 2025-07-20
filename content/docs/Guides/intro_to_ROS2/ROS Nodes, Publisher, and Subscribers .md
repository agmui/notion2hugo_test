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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQFRR2J%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0m%2BQsMdhWk%2F3ud6jr5X3U7lVh5OdLQ0MmjdnAFTZUOAIhAJd8KcgdUxClrYSYYMvJLqzHi40CrZMbLUqOrUFxtJqzKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0MMKwitWaqPmQF%2FQq3AOSWVYJkKjnNheaUVddsHFa3%2B3pVEnxwwyzUW4cac3%2B3KR5PjFKLEo3dd%2FknUdiwUbGiDEdIFCMVe5CW%2BkSgn2rBnc4%2BIgfatPd3w%2FUMANOCF4HWqaeg7gI6Pir%2Bo9%2FWIfiB6%2BrqYtqQdo%2BMDd4WPNroh26nRnYlAhPbTj4xY7Y8YYk%2BIvu7qN6iwhv3oRxggDAWsZuhSpOMyRKRDeEAxQoHvdNkj58rv8bFx7ug8u78exNGS7T2nNOu24XF%2FRvkVjTYUl69iIaQRnYPwIKdTN1niB8YZV%2Bf9BmC3ffeEZJSHqClhqb4kK3poZ5gs7iZCpnPR%2F3K86XPOBKBo8HlrnYzINp2urEDlrSPWDNpqIUDt4nJaoZvLWi2uIiDUH8sZX52QYS%2BBXzNDg0GMQyLsyLRuL3prynZNp8XgqTc6%2BId2PFYgSKmO1sJSRN4Busu7QoVcrB7%2BbO4LTXwwZ4gtIARRsKmpYwF44IdeyfrAa93IZ%2FiEw7%2FBgzZeDh2jvcwMcnGALi6Qgm6PNezOEvvF1JusQSgN29GzVOMx13A%2BOPhvTDZNofMdH%2BL7cwjTnfC%2BFWCrd6m2hyJNFv6Iod28OxCMZ93ieQ77y0BzOCjfIzEofmq1mkOfsajpgmpjDQt%2FLDBjqkAQvBnEIsClv7RWleefnoFmDHZmTUvsjPa3I1iQKMTE7e5PiiZqO0JSyElc3jAww2B73fr2SlU%2BRd2CG10HX0YYejnYUUKpTa6o1UyWQ2pEigglWLeTxwmSZqoBwgbskPp2wkppLDR%2FfE7l3vLG%2B%2Bfjf6tYa9hFmFzfF%2FzQDxK9CjN4DKAoWvAavHUJVJ4k5D7XXfEoRqpIMhM5he7dvbpUCt2FWe&X-Amz-Signature=cf7aa17d118986b48afb26a4cf9bf7e09c85e2c1534a1d96fc0717e30d09fe6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQFRR2J%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0m%2BQsMdhWk%2F3ud6jr5X3U7lVh5OdLQ0MmjdnAFTZUOAIhAJd8KcgdUxClrYSYYMvJLqzHi40CrZMbLUqOrUFxtJqzKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0MMKwitWaqPmQF%2FQq3AOSWVYJkKjnNheaUVddsHFa3%2B3pVEnxwwyzUW4cac3%2B3KR5PjFKLEo3dd%2FknUdiwUbGiDEdIFCMVe5CW%2BkSgn2rBnc4%2BIgfatPd3w%2FUMANOCF4HWqaeg7gI6Pir%2Bo9%2FWIfiB6%2BrqYtqQdo%2BMDd4WPNroh26nRnYlAhPbTj4xY7Y8YYk%2BIvu7qN6iwhv3oRxggDAWsZuhSpOMyRKRDeEAxQoHvdNkj58rv8bFx7ug8u78exNGS7T2nNOu24XF%2FRvkVjTYUl69iIaQRnYPwIKdTN1niB8YZV%2Bf9BmC3ffeEZJSHqClhqb4kK3poZ5gs7iZCpnPR%2F3K86XPOBKBo8HlrnYzINp2urEDlrSPWDNpqIUDt4nJaoZvLWi2uIiDUH8sZX52QYS%2BBXzNDg0GMQyLsyLRuL3prynZNp8XgqTc6%2BId2PFYgSKmO1sJSRN4Busu7QoVcrB7%2BbO4LTXwwZ4gtIARRsKmpYwF44IdeyfrAa93IZ%2FiEw7%2FBgzZeDh2jvcwMcnGALi6Qgm6PNezOEvvF1JusQSgN29GzVOMx13A%2BOPhvTDZNofMdH%2BL7cwjTnfC%2BFWCrd6m2hyJNFv6Iod28OxCMZ93ieQ77y0BzOCjfIzEofmq1mkOfsajpgmpjDQt%2FLDBjqkAQvBnEIsClv7RWleefnoFmDHZmTUvsjPa3I1iQKMTE7e5PiiZqO0JSyElc3jAww2B73fr2SlU%2BRd2CG10HX0YYejnYUUKpTa6o1UyWQ2pEigglWLeTxwmSZqoBwgbskPp2wkppLDR%2FfE7l3vLG%2B%2Bfjf6tYa9hFmFzfF%2FzQDxK9CjN4DKAoWvAavHUJVJ4k5D7XXfEoRqpIMhM5he7dvbpUCt2FWe&X-Amz-Signature=c49d310883dfcca37ead82e16e1348e00c89c2e4559380ae00c9aedbd21f411b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQFRR2J%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0m%2BQsMdhWk%2F3ud6jr5X3U7lVh5OdLQ0MmjdnAFTZUOAIhAJd8KcgdUxClrYSYYMvJLqzHi40CrZMbLUqOrUFxtJqzKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0MMKwitWaqPmQF%2FQq3AOSWVYJkKjnNheaUVddsHFa3%2B3pVEnxwwyzUW4cac3%2B3KR5PjFKLEo3dd%2FknUdiwUbGiDEdIFCMVe5CW%2BkSgn2rBnc4%2BIgfatPd3w%2FUMANOCF4HWqaeg7gI6Pir%2Bo9%2FWIfiB6%2BrqYtqQdo%2BMDd4WPNroh26nRnYlAhPbTj4xY7Y8YYk%2BIvu7qN6iwhv3oRxggDAWsZuhSpOMyRKRDeEAxQoHvdNkj58rv8bFx7ug8u78exNGS7T2nNOu24XF%2FRvkVjTYUl69iIaQRnYPwIKdTN1niB8YZV%2Bf9BmC3ffeEZJSHqClhqb4kK3poZ5gs7iZCpnPR%2F3K86XPOBKBo8HlrnYzINp2urEDlrSPWDNpqIUDt4nJaoZvLWi2uIiDUH8sZX52QYS%2BBXzNDg0GMQyLsyLRuL3prynZNp8XgqTc6%2BId2PFYgSKmO1sJSRN4Busu7QoVcrB7%2BbO4LTXwwZ4gtIARRsKmpYwF44IdeyfrAa93IZ%2FiEw7%2FBgzZeDh2jvcwMcnGALi6Qgm6PNezOEvvF1JusQSgN29GzVOMx13A%2BOPhvTDZNofMdH%2BL7cwjTnfC%2BFWCrd6m2hyJNFv6Iod28OxCMZ93ieQ77y0BzOCjfIzEofmq1mkOfsajpgmpjDQt%2FLDBjqkAQvBnEIsClv7RWleefnoFmDHZmTUvsjPa3I1iQKMTE7e5PiiZqO0JSyElc3jAww2B73fr2SlU%2BRd2CG10HX0YYejnYUUKpTa6o1UyWQ2pEigglWLeTxwmSZqoBwgbskPp2wkppLDR%2FfE7l3vLG%2B%2Bfjf6tYa9hFmFzfF%2FzQDxK9CjN4DKAoWvAavHUJVJ4k5D7XXfEoRqpIMhM5he7dvbpUCt2FWe&X-Amz-Signature=90cb170d84921968b020578f6bb81d93ab783a19fab8a4b5edc09c9447cedbe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQFRR2J%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0m%2BQsMdhWk%2F3ud6jr5X3U7lVh5OdLQ0MmjdnAFTZUOAIhAJd8KcgdUxClrYSYYMvJLqzHi40CrZMbLUqOrUFxtJqzKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0MMKwitWaqPmQF%2FQq3AOSWVYJkKjnNheaUVddsHFa3%2B3pVEnxwwyzUW4cac3%2B3KR5PjFKLEo3dd%2FknUdiwUbGiDEdIFCMVe5CW%2BkSgn2rBnc4%2BIgfatPd3w%2FUMANOCF4HWqaeg7gI6Pir%2Bo9%2FWIfiB6%2BrqYtqQdo%2BMDd4WPNroh26nRnYlAhPbTj4xY7Y8YYk%2BIvu7qN6iwhv3oRxggDAWsZuhSpOMyRKRDeEAxQoHvdNkj58rv8bFx7ug8u78exNGS7T2nNOu24XF%2FRvkVjTYUl69iIaQRnYPwIKdTN1niB8YZV%2Bf9BmC3ffeEZJSHqClhqb4kK3poZ5gs7iZCpnPR%2F3K86XPOBKBo8HlrnYzINp2urEDlrSPWDNpqIUDt4nJaoZvLWi2uIiDUH8sZX52QYS%2BBXzNDg0GMQyLsyLRuL3prynZNp8XgqTc6%2BId2PFYgSKmO1sJSRN4Busu7QoVcrB7%2BbO4LTXwwZ4gtIARRsKmpYwF44IdeyfrAa93IZ%2FiEw7%2FBgzZeDh2jvcwMcnGALi6Qgm6PNezOEvvF1JusQSgN29GzVOMx13A%2BOPhvTDZNofMdH%2BL7cwjTnfC%2BFWCrd6m2hyJNFv6Iod28OxCMZ93ieQ77y0BzOCjfIzEofmq1mkOfsajpgmpjDQt%2FLDBjqkAQvBnEIsClv7RWleefnoFmDHZmTUvsjPa3I1iQKMTE7e5PiiZqO0JSyElc3jAww2B73fr2SlU%2BRd2CG10HX0YYejnYUUKpTa6o1UyWQ2pEigglWLeTxwmSZqoBwgbskPp2wkppLDR%2FfE7l3vLG%2B%2Bfjf6tYa9hFmFzfF%2FzQDxK9CjN4DKAoWvAavHUJVJ4k5D7XXfEoRqpIMhM5he7dvbpUCt2FWe&X-Amz-Signature=1e308c15de635ee2f8e49f51fa09917c0b1c0a6c2df6d748af9a20c58c3d9119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQFRR2J%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0m%2BQsMdhWk%2F3ud6jr5X3U7lVh5OdLQ0MmjdnAFTZUOAIhAJd8KcgdUxClrYSYYMvJLqzHi40CrZMbLUqOrUFxtJqzKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0MMKwitWaqPmQF%2FQq3AOSWVYJkKjnNheaUVddsHFa3%2B3pVEnxwwyzUW4cac3%2B3KR5PjFKLEo3dd%2FknUdiwUbGiDEdIFCMVe5CW%2BkSgn2rBnc4%2BIgfatPd3w%2FUMANOCF4HWqaeg7gI6Pir%2Bo9%2FWIfiB6%2BrqYtqQdo%2BMDd4WPNroh26nRnYlAhPbTj4xY7Y8YYk%2BIvu7qN6iwhv3oRxggDAWsZuhSpOMyRKRDeEAxQoHvdNkj58rv8bFx7ug8u78exNGS7T2nNOu24XF%2FRvkVjTYUl69iIaQRnYPwIKdTN1niB8YZV%2Bf9BmC3ffeEZJSHqClhqb4kK3poZ5gs7iZCpnPR%2F3K86XPOBKBo8HlrnYzINp2urEDlrSPWDNpqIUDt4nJaoZvLWi2uIiDUH8sZX52QYS%2BBXzNDg0GMQyLsyLRuL3prynZNp8XgqTc6%2BId2PFYgSKmO1sJSRN4Busu7QoVcrB7%2BbO4LTXwwZ4gtIARRsKmpYwF44IdeyfrAa93IZ%2FiEw7%2FBgzZeDh2jvcwMcnGALi6Qgm6PNezOEvvF1JusQSgN29GzVOMx13A%2BOPhvTDZNofMdH%2BL7cwjTnfC%2BFWCrd6m2hyJNFv6Iod28OxCMZ93ieQ77y0BzOCjfIzEofmq1mkOfsajpgmpjDQt%2FLDBjqkAQvBnEIsClv7RWleefnoFmDHZmTUvsjPa3I1iQKMTE7e5PiiZqO0JSyElc3jAww2B73fr2SlU%2BRd2CG10HX0YYejnYUUKpTa6o1UyWQ2pEigglWLeTxwmSZqoBwgbskPp2wkppLDR%2FfE7l3vLG%2B%2Bfjf6tYa9hFmFzfF%2FzQDxK9CjN4DKAoWvAavHUJVJ4k5D7XXfEoRqpIMhM5he7dvbpUCt2FWe&X-Amz-Signature=82f4ac3ab9953ff690dd89defbe739cf1a8c856fcaca391021edc7cc0686a7aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQFRR2J%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0m%2BQsMdhWk%2F3ud6jr5X3U7lVh5OdLQ0MmjdnAFTZUOAIhAJd8KcgdUxClrYSYYMvJLqzHi40CrZMbLUqOrUFxtJqzKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0MMKwitWaqPmQF%2FQq3AOSWVYJkKjnNheaUVddsHFa3%2B3pVEnxwwyzUW4cac3%2B3KR5PjFKLEo3dd%2FknUdiwUbGiDEdIFCMVe5CW%2BkSgn2rBnc4%2BIgfatPd3w%2FUMANOCF4HWqaeg7gI6Pir%2Bo9%2FWIfiB6%2BrqYtqQdo%2BMDd4WPNroh26nRnYlAhPbTj4xY7Y8YYk%2BIvu7qN6iwhv3oRxggDAWsZuhSpOMyRKRDeEAxQoHvdNkj58rv8bFx7ug8u78exNGS7T2nNOu24XF%2FRvkVjTYUl69iIaQRnYPwIKdTN1niB8YZV%2Bf9BmC3ffeEZJSHqClhqb4kK3poZ5gs7iZCpnPR%2F3K86XPOBKBo8HlrnYzINp2urEDlrSPWDNpqIUDt4nJaoZvLWi2uIiDUH8sZX52QYS%2BBXzNDg0GMQyLsyLRuL3prynZNp8XgqTc6%2BId2PFYgSKmO1sJSRN4Busu7QoVcrB7%2BbO4LTXwwZ4gtIARRsKmpYwF44IdeyfrAa93IZ%2FiEw7%2FBgzZeDh2jvcwMcnGALi6Qgm6PNezOEvvF1JusQSgN29GzVOMx13A%2BOPhvTDZNofMdH%2BL7cwjTnfC%2BFWCrd6m2hyJNFv6Iod28OxCMZ93ieQ77y0BzOCjfIzEofmq1mkOfsajpgmpjDQt%2FLDBjqkAQvBnEIsClv7RWleefnoFmDHZmTUvsjPa3I1iQKMTE7e5PiiZqO0JSyElc3jAww2B73fr2SlU%2BRd2CG10HX0YYejnYUUKpTa6o1UyWQ2pEigglWLeTxwmSZqoBwgbskPp2wkppLDR%2FfE7l3vLG%2B%2Bfjf6tYa9hFmFzfF%2FzQDxK9CjN4DKAoWvAavHUJVJ4k5D7XXfEoRqpIMhM5he7dvbpUCt2FWe&X-Amz-Signature=5239ed315bd39b366fc88d0fc799a19cfc5143000a5d0db8a0452f3186246130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQFRR2J%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0m%2BQsMdhWk%2F3ud6jr5X3U7lVh5OdLQ0MmjdnAFTZUOAIhAJd8KcgdUxClrYSYYMvJLqzHi40CrZMbLUqOrUFxtJqzKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0MMKwitWaqPmQF%2FQq3AOSWVYJkKjnNheaUVddsHFa3%2B3pVEnxwwyzUW4cac3%2B3KR5PjFKLEo3dd%2FknUdiwUbGiDEdIFCMVe5CW%2BkSgn2rBnc4%2BIgfatPd3w%2FUMANOCF4HWqaeg7gI6Pir%2Bo9%2FWIfiB6%2BrqYtqQdo%2BMDd4WPNroh26nRnYlAhPbTj4xY7Y8YYk%2BIvu7qN6iwhv3oRxggDAWsZuhSpOMyRKRDeEAxQoHvdNkj58rv8bFx7ug8u78exNGS7T2nNOu24XF%2FRvkVjTYUl69iIaQRnYPwIKdTN1niB8YZV%2Bf9BmC3ffeEZJSHqClhqb4kK3poZ5gs7iZCpnPR%2F3K86XPOBKBo8HlrnYzINp2urEDlrSPWDNpqIUDt4nJaoZvLWi2uIiDUH8sZX52QYS%2BBXzNDg0GMQyLsyLRuL3prynZNp8XgqTc6%2BId2PFYgSKmO1sJSRN4Busu7QoVcrB7%2BbO4LTXwwZ4gtIARRsKmpYwF44IdeyfrAa93IZ%2FiEw7%2FBgzZeDh2jvcwMcnGALi6Qgm6PNezOEvvF1JusQSgN29GzVOMx13A%2BOPhvTDZNofMdH%2BL7cwjTnfC%2BFWCrd6m2hyJNFv6Iod28OxCMZ93ieQ77y0BzOCjfIzEofmq1mkOfsajpgmpjDQt%2FLDBjqkAQvBnEIsClv7RWleefnoFmDHZmTUvsjPa3I1iQKMTE7e5PiiZqO0JSyElc3jAww2B73fr2SlU%2BRd2CG10HX0YYejnYUUKpTa6o1UyWQ2pEigglWLeTxwmSZqoBwgbskPp2wkppLDR%2FfE7l3vLG%2B%2Bfjf6tYa9hFmFzfF%2FzQDxK9CjN4DKAoWvAavHUJVJ4k5D7XXfEoRqpIMhM5he7dvbpUCt2FWe&X-Amz-Signature=2c0b22e920933e24fc08df4489f1bd12368cc8b0c0db943142ca8ae20b26811a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQFRR2J%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0m%2BQsMdhWk%2F3ud6jr5X3U7lVh5OdLQ0MmjdnAFTZUOAIhAJd8KcgdUxClrYSYYMvJLqzHi40CrZMbLUqOrUFxtJqzKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0MMKwitWaqPmQF%2FQq3AOSWVYJkKjnNheaUVddsHFa3%2B3pVEnxwwyzUW4cac3%2B3KR5PjFKLEo3dd%2FknUdiwUbGiDEdIFCMVe5CW%2BkSgn2rBnc4%2BIgfatPd3w%2FUMANOCF4HWqaeg7gI6Pir%2Bo9%2FWIfiB6%2BrqYtqQdo%2BMDd4WPNroh26nRnYlAhPbTj4xY7Y8YYk%2BIvu7qN6iwhv3oRxggDAWsZuhSpOMyRKRDeEAxQoHvdNkj58rv8bFx7ug8u78exNGS7T2nNOu24XF%2FRvkVjTYUl69iIaQRnYPwIKdTN1niB8YZV%2Bf9BmC3ffeEZJSHqClhqb4kK3poZ5gs7iZCpnPR%2F3K86XPOBKBo8HlrnYzINp2urEDlrSPWDNpqIUDt4nJaoZvLWi2uIiDUH8sZX52QYS%2BBXzNDg0GMQyLsyLRuL3prynZNp8XgqTc6%2BId2PFYgSKmO1sJSRN4Busu7QoVcrB7%2BbO4LTXwwZ4gtIARRsKmpYwF44IdeyfrAa93IZ%2FiEw7%2FBgzZeDh2jvcwMcnGALi6Qgm6PNezOEvvF1JusQSgN29GzVOMx13A%2BOPhvTDZNofMdH%2BL7cwjTnfC%2BFWCrd6m2hyJNFv6Iod28OxCMZ93ieQ77y0BzOCjfIzEofmq1mkOfsajpgmpjDQt%2FLDBjqkAQvBnEIsClv7RWleefnoFmDHZmTUvsjPa3I1iQKMTE7e5PiiZqO0JSyElc3jAww2B73fr2SlU%2BRd2CG10HX0YYejnYUUKpTa6o1UyWQ2pEigglWLeTxwmSZqoBwgbskPp2wkppLDR%2FfE7l3vLG%2B%2Bfjf6tYa9hFmFzfF%2FzQDxK9CjN4DKAoWvAavHUJVJ4k5D7XXfEoRqpIMhM5he7dvbpUCt2FWe&X-Amz-Signature=e59df549203010c77e1c157d5b006f37c47d9c91d61608293a62a102780e78b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
