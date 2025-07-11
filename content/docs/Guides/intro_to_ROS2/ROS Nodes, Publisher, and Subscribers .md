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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q4JUBAW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4WcBDBV1pfHSQDSJZFb8bhs8C4741XzgrlWHySS2y3AiA5YIWHMOcKWh8BGN621o26Z6Iws3XtkmkHCfUdkk%2BWwCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWvGO7pjYdjYshVEKtwD8c%2FsgPT7hRnZkAUIk30SuvmGyjEEj%2Bi6wt8QTRse78cg1ix1t5rXTdDc5odesZ5DBSNGlmR%2FBPJrcz1XE0nipQrbYRZiXb23Pn2e8gvsmzK5S1ezCgDQTXWLvahm1e7cDfvan6v2fm9PfiVGfy5WrmctCWsBW3lIX4ZiVdU9UIDNPz%2FNfEEcWR%2F5HoEr7u%2BkJmiga%2BFiM1GuJ188UK7rjOs1hDPk0FMJCgUaJqWcyAR4BPXLFDJ6gtC%2BTSkkDtKsTDlkILfgUI4buQoYEH%2F4irORFugYiKHssyzPDWFUBUyFPX5tRj%2FC3F%2FYeZyo%2FbH842fkvqQuEozM6I%2FmOE1pDDDhxb8Ja1N4kEkJjEFofzCnLiSRew5hRsb8GCvQg%2BKC4HznH32eBNjlAFzo2%2BiD57nMPcUMpgmKf9Llbqt%2BjHvgrFI5V1AeqeO0GpK13asJmrlplQydAy5zXv4CYXry9qSx5CxZPYseBB%2FWIqI4eX0oIXNxxbFNS6K1n4WlTCYYUfMpEBX5asmFOeo0v%2FJUa%2F9rSjHmn%2BSDQbh2Hs7KdfrVZjv3ILCB4QrNa8CRwnGW%2BcPdKoX%2BYaV6iIliVI%2B3Oh%2FITnboAVZAYDgjCg6xmou8CrtlSOjruB1arD0wlYPGwwY6pgFHMOcqRvbyImHxhfBzU4OvsVsNEHFrw2fm6lSM%2FOo18GGC23OQw92T%2B7OFWz9L1x5l8MpFuPJX6CPaeyp0xVLWdAxc7ARGS7R3JHaQum%2FUwpRDBWTxj82IIFfmyc4ZMczna2ncde%2FSQXH3tSdzLo2q%2Bw%2F7WtNgA6vMHEqRySuY2DWvjxlm89xaaOHrDGTPzqk6olMEaXz8qOE7e%2B3G1bmXNsE2h4gt&X-Amz-Signature=f3f0d340294a566c9e71d67c90ce788b3cd6195421c257eb246af57002d70eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q4JUBAW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4WcBDBV1pfHSQDSJZFb8bhs8C4741XzgrlWHySS2y3AiA5YIWHMOcKWh8BGN621o26Z6Iws3XtkmkHCfUdkk%2BWwCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWvGO7pjYdjYshVEKtwD8c%2FsgPT7hRnZkAUIk30SuvmGyjEEj%2Bi6wt8QTRse78cg1ix1t5rXTdDc5odesZ5DBSNGlmR%2FBPJrcz1XE0nipQrbYRZiXb23Pn2e8gvsmzK5S1ezCgDQTXWLvahm1e7cDfvan6v2fm9PfiVGfy5WrmctCWsBW3lIX4ZiVdU9UIDNPz%2FNfEEcWR%2F5HoEr7u%2BkJmiga%2BFiM1GuJ188UK7rjOs1hDPk0FMJCgUaJqWcyAR4BPXLFDJ6gtC%2BTSkkDtKsTDlkILfgUI4buQoYEH%2F4irORFugYiKHssyzPDWFUBUyFPX5tRj%2FC3F%2FYeZyo%2FbH842fkvqQuEozM6I%2FmOE1pDDDhxb8Ja1N4kEkJjEFofzCnLiSRew5hRsb8GCvQg%2BKC4HznH32eBNjlAFzo2%2BiD57nMPcUMpgmKf9Llbqt%2BjHvgrFI5V1AeqeO0GpK13asJmrlplQydAy5zXv4CYXry9qSx5CxZPYseBB%2FWIqI4eX0oIXNxxbFNS6K1n4WlTCYYUfMpEBX5asmFOeo0v%2FJUa%2F9rSjHmn%2BSDQbh2Hs7KdfrVZjv3ILCB4QrNa8CRwnGW%2BcPdKoX%2BYaV6iIliVI%2B3Oh%2FITnboAVZAYDgjCg6xmou8CrtlSOjruB1arD0wlYPGwwY6pgFHMOcqRvbyImHxhfBzU4OvsVsNEHFrw2fm6lSM%2FOo18GGC23OQw92T%2B7OFWz9L1x5l8MpFuPJX6CPaeyp0xVLWdAxc7ARGS7R3JHaQum%2FUwpRDBWTxj82IIFfmyc4ZMczna2ncde%2FSQXH3tSdzLo2q%2Bw%2F7WtNgA6vMHEqRySuY2DWvjxlm89xaaOHrDGTPzqk6olMEaXz8qOE7e%2B3G1bmXNsE2h4gt&X-Amz-Signature=6a0a48c50f7804b9dd045c850966511ae16738fd15d7b034510ed308bcabc8ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q4JUBAW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4WcBDBV1pfHSQDSJZFb8bhs8C4741XzgrlWHySS2y3AiA5YIWHMOcKWh8BGN621o26Z6Iws3XtkmkHCfUdkk%2BWwCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWvGO7pjYdjYshVEKtwD8c%2FsgPT7hRnZkAUIk30SuvmGyjEEj%2Bi6wt8QTRse78cg1ix1t5rXTdDc5odesZ5DBSNGlmR%2FBPJrcz1XE0nipQrbYRZiXb23Pn2e8gvsmzK5S1ezCgDQTXWLvahm1e7cDfvan6v2fm9PfiVGfy5WrmctCWsBW3lIX4ZiVdU9UIDNPz%2FNfEEcWR%2F5HoEr7u%2BkJmiga%2BFiM1GuJ188UK7rjOs1hDPk0FMJCgUaJqWcyAR4BPXLFDJ6gtC%2BTSkkDtKsTDlkILfgUI4buQoYEH%2F4irORFugYiKHssyzPDWFUBUyFPX5tRj%2FC3F%2FYeZyo%2FbH842fkvqQuEozM6I%2FmOE1pDDDhxb8Ja1N4kEkJjEFofzCnLiSRew5hRsb8GCvQg%2BKC4HznH32eBNjlAFzo2%2BiD57nMPcUMpgmKf9Llbqt%2BjHvgrFI5V1AeqeO0GpK13asJmrlplQydAy5zXv4CYXry9qSx5CxZPYseBB%2FWIqI4eX0oIXNxxbFNS6K1n4WlTCYYUfMpEBX5asmFOeo0v%2FJUa%2F9rSjHmn%2BSDQbh2Hs7KdfrVZjv3ILCB4QrNa8CRwnGW%2BcPdKoX%2BYaV6iIliVI%2B3Oh%2FITnboAVZAYDgjCg6xmou8CrtlSOjruB1arD0wlYPGwwY6pgFHMOcqRvbyImHxhfBzU4OvsVsNEHFrw2fm6lSM%2FOo18GGC23OQw92T%2B7OFWz9L1x5l8MpFuPJX6CPaeyp0xVLWdAxc7ARGS7R3JHaQum%2FUwpRDBWTxj82IIFfmyc4ZMczna2ncde%2FSQXH3tSdzLo2q%2Bw%2F7WtNgA6vMHEqRySuY2DWvjxlm89xaaOHrDGTPzqk6olMEaXz8qOE7e%2B3G1bmXNsE2h4gt&X-Amz-Signature=e96e3d33178f6594f165fb9e8a5946d5813a656dd35c27e065ceaf1df0fd42c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q4JUBAW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4WcBDBV1pfHSQDSJZFb8bhs8C4741XzgrlWHySS2y3AiA5YIWHMOcKWh8BGN621o26Z6Iws3XtkmkHCfUdkk%2BWwCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWvGO7pjYdjYshVEKtwD8c%2FsgPT7hRnZkAUIk30SuvmGyjEEj%2Bi6wt8QTRse78cg1ix1t5rXTdDc5odesZ5DBSNGlmR%2FBPJrcz1XE0nipQrbYRZiXb23Pn2e8gvsmzK5S1ezCgDQTXWLvahm1e7cDfvan6v2fm9PfiVGfy5WrmctCWsBW3lIX4ZiVdU9UIDNPz%2FNfEEcWR%2F5HoEr7u%2BkJmiga%2BFiM1GuJ188UK7rjOs1hDPk0FMJCgUaJqWcyAR4BPXLFDJ6gtC%2BTSkkDtKsTDlkILfgUI4buQoYEH%2F4irORFugYiKHssyzPDWFUBUyFPX5tRj%2FC3F%2FYeZyo%2FbH842fkvqQuEozM6I%2FmOE1pDDDhxb8Ja1N4kEkJjEFofzCnLiSRew5hRsb8GCvQg%2BKC4HznH32eBNjlAFzo2%2BiD57nMPcUMpgmKf9Llbqt%2BjHvgrFI5V1AeqeO0GpK13asJmrlplQydAy5zXv4CYXry9qSx5CxZPYseBB%2FWIqI4eX0oIXNxxbFNS6K1n4WlTCYYUfMpEBX5asmFOeo0v%2FJUa%2F9rSjHmn%2BSDQbh2Hs7KdfrVZjv3ILCB4QrNa8CRwnGW%2BcPdKoX%2BYaV6iIliVI%2B3Oh%2FITnboAVZAYDgjCg6xmou8CrtlSOjruB1arD0wlYPGwwY6pgFHMOcqRvbyImHxhfBzU4OvsVsNEHFrw2fm6lSM%2FOo18GGC23OQw92T%2B7OFWz9L1x5l8MpFuPJX6CPaeyp0xVLWdAxc7ARGS7R3JHaQum%2FUwpRDBWTxj82IIFfmyc4ZMczna2ncde%2FSQXH3tSdzLo2q%2Bw%2F7WtNgA6vMHEqRySuY2DWvjxlm89xaaOHrDGTPzqk6olMEaXz8qOE7e%2B3G1bmXNsE2h4gt&X-Amz-Signature=eb9bbe20685a4edb6b7af607d09991f7a98b598e7cddc28134fde50c5e8958ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q4JUBAW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4WcBDBV1pfHSQDSJZFb8bhs8C4741XzgrlWHySS2y3AiA5YIWHMOcKWh8BGN621o26Z6Iws3XtkmkHCfUdkk%2BWwCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWvGO7pjYdjYshVEKtwD8c%2FsgPT7hRnZkAUIk30SuvmGyjEEj%2Bi6wt8QTRse78cg1ix1t5rXTdDc5odesZ5DBSNGlmR%2FBPJrcz1XE0nipQrbYRZiXb23Pn2e8gvsmzK5S1ezCgDQTXWLvahm1e7cDfvan6v2fm9PfiVGfy5WrmctCWsBW3lIX4ZiVdU9UIDNPz%2FNfEEcWR%2F5HoEr7u%2BkJmiga%2BFiM1GuJ188UK7rjOs1hDPk0FMJCgUaJqWcyAR4BPXLFDJ6gtC%2BTSkkDtKsTDlkILfgUI4buQoYEH%2F4irORFugYiKHssyzPDWFUBUyFPX5tRj%2FC3F%2FYeZyo%2FbH842fkvqQuEozM6I%2FmOE1pDDDhxb8Ja1N4kEkJjEFofzCnLiSRew5hRsb8GCvQg%2BKC4HznH32eBNjlAFzo2%2BiD57nMPcUMpgmKf9Llbqt%2BjHvgrFI5V1AeqeO0GpK13asJmrlplQydAy5zXv4CYXry9qSx5CxZPYseBB%2FWIqI4eX0oIXNxxbFNS6K1n4WlTCYYUfMpEBX5asmFOeo0v%2FJUa%2F9rSjHmn%2BSDQbh2Hs7KdfrVZjv3ILCB4QrNa8CRwnGW%2BcPdKoX%2BYaV6iIliVI%2B3Oh%2FITnboAVZAYDgjCg6xmou8CrtlSOjruB1arD0wlYPGwwY6pgFHMOcqRvbyImHxhfBzU4OvsVsNEHFrw2fm6lSM%2FOo18GGC23OQw92T%2B7OFWz9L1x5l8MpFuPJX6CPaeyp0xVLWdAxc7ARGS7R3JHaQum%2FUwpRDBWTxj82IIFfmyc4ZMczna2ncde%2FSQXH3tSdzLo2q%2Bw%2F7WtNgA6vMHEqRySuY2DWvjxlm89xaaOHrDGTPzqk6olMEaXz8qOE7e%2B3G1bmXNsE2h4gt&X-Amz-Signature=26f8be1b02c0ab1ca1f1705089337e339b8b5df9448fe065293ad0026365d91b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q4JUBAW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4WcBDBV1pfHSQDSJZFb8bhs8C4741XzgrlWHySS2y3AiA5YIWHMOcKWh8BGN621o26Z6Iws3XtkmkHCfUdkk%2BWwCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWvGO7pjYdjYshVEKtwD8c%2FsgPT7hRnZkAUIk30SuvmGyjEEj%2Bi6wt8QTRse78cg1ix1t5rXTdDc5odesZ5DBSNGlmR%2FBPJrcz1XE0nipQrbYRZiXb23Pn2e8gvsmzK5S1ezCgDQTXWLvahm1e7cDfvan6v2fm9PfiVGfy5WrmctCWsBW3lIX4ZiVdU9UIDNPz%2FNfEEcWR%2F5HoEr7u%2BkJmiga%2BFiM1GuJ188UK7rjOs1hDPk0FMJCgUaJqWcyAR4BPXLFDJ6gtC%2BTSkkDtKsTDlkILfgUI4buQoYEH%2F4irORFugYiKHssyzPDWFUBUyFPX5tRj%2FC3F%2FYeZyo%2FbH842fkvqQuEozM6I%2FmOE1pDDDhxb8Ja1N4kEkJjEFofzCnLiSRew5hRsb8GCvQg%2BKC4HznH32eBNjlAFzo2%2BiD57nMPcUMpgmKf9Llbqt%2BjHvgrFI5V1AeqeO0GpK13asJmrlplQydAy5zXv4CYXry9qSx5CxZPYseBB%2FWIqI4eX0oIXNxxbFNS6K1n4WlTCYYUfMpEBX5asmFOeo0v%2FJUa%2F9rSjHmn%2BSDQbh2Hs7KdfrVZjv3ILCB4QrNa8CRwnGW%2BcPdKoX%2BYaV6iIliVI%2B3Oh%2FITnboAVZAYDgjCg6xmou8CrtlSOjruB1arD0wlYPGwwY6pgFHMOcqRvbyImHxhfBzU4OvsVsNEHFrw2fm6lSM%2FOo18GGC23OQw92T%2B7OFWz9L1x5l8MpFuPJX6CPaeyp0xVLWdAxc7ARGS7R3JHaQum%2FUwpRDBWTxj82IIFfmyc4ZMczna2ncde%2FSQXH3tSdzLo2q%2Bw%2F7WtNgA6vMHEqRySuY2DWvjxlm89xaaOHrDGTPzqk6olMEaXz8qOE7e%2B3G1bmXNsE2h4gt&X-Amz-Signature=d0b9c31d0d7e38f8c1bd56f6686d88a83aaaa6d41ad4bdc6c413093ca3329694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q4JUBAW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4WcBDBV1pfHSQDSJZFb8bhs8C4741XzgrlWHySS2y3AiA5YIWHMOcKWh8BGN621o26Z6Iws3XtkmkHCfUdkk%2BWwCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWvGO7pjYdjYshVEKtwD8c%2FsgPT7hRnZkAUIk30SuvmGyjEEj%2Bi6wt8QTRse78cg1ix1t5rXTdDc5odesZ5DBSNGlmR%2FBPJrcz1XE0nipQrbYRZiXb23Pn2e8gvsmzK5S1ezCgDQTXWLvahm1e7cDfvan6v2fm9PfiVGfy5WrmctCWsBW3lIX4ZiVdU9UIDNPz%2FNfEEcWR%2F5HoEr7u%2BkJmiga%2BFiM1GuJ188UK7rjOs1hDPk0FMJCgUaJqWcyAR4BPXLFDJ6gtC%2BTSkkDtKsTDlkILfgUI4buQoYEH%2F4irORFugYiKHssyzPDWFUBUyFPX5tRj%2FC3F%2FYeZyo%2FbH842fkvqQuEozM6I%2FmOE1pDDDhxb8Ja1N4kEkJjEFofzCnLiSRew5hRsb8GCvQg%2BKC4HznH32eBNjlAFzo2%2BiD57nMPcUMpgmKf9Llbqt%2BjHvgrFI5V1AeqeO0GpK13asJmrlplQydAy5zXv4CYXry9qSx5CxZPYseBB%2FWIqI4eX0oIXNxxbFNS6K1n4WlTCYYUfMpEBX5asmFOeo0v%2FJUa%2F9rSjHmn%2BSDQbh2Hs7KdfrVZjv3ILCB4QrNa8CRwnGW%2BcPdKoX%2BYaV6iIliVI%2B3Oh%2FITnboAVZAYDgjCg6xmou8CrtlSOjruB1arD0wlYPGwwY6pgFHMOcqRvbyImHxhfBzU4OvsVsNEHFrw2fm6lSM%2FOo18GGC23OQw92T%2B7OFWz9L1x5l8MpFuPJX6CPaeyp0xVLWdAxc7ARGS7R3JHaQum%2FUwpRDBWTxj82IIFfmyc4ZMczna2ncde%2FSQXH3tSdzLo2q%2Bw%2F7WtNgA6vMHEqRySuY2DWvjxlm89xaaOHrDGTPzqk6olMEaXz8qOE7e%2B3G1bmXNsE2h4gt&X-Amz-Signature=723ac4cf8e40a2de425719f5bf70894a9b4b118ec0342f328a092ed99bf2a722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q4JUBAW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4WcBDBV1pfHSQDSJZFb8bhs8C4741XzgrlWHySS2y3AiA5YIWHMOcKWh8BGN621o26Z6Iws3XtkmkHCfUdkk%2BWwCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWvGO7pjYdjYshVEKtwD8c%2FsgPT7hRnZkAUIk30SuvmGyjEEj%2Bi6wt8QTRse78cg1ix1t5rXTdDc5odesZ5DBSNGlmR%2FBPJrcz1XE0nipQrbYRZiXb23Pn2e8gvsmzK5S1ezCgDQTXWLvahm1e7cDfvan6v2fm9PfiVGfy5WrmctCWsBW3lIX4ZiVdU9UIDNPz%2FNfEEcWR%2F5HoEr7u%2BkJmiga%2BFiM1GuJ188UK7rjOs1hDPk0FMJCgUaJqWcyAR4BPXLFDJ6gtC%2BTSkkDtKsTDlkILfgUI4buQoYEH%2F4irORFugYiKHssyzPDWFUBUyFPX5tRj%2FC3F%2FYeZyo%2FbH842fkvqQuEozM6I%2FmOE1pDDDhxb8Ja1N4kEkJjEFofzCnLiSRew5hRsb8GCvQg%2BKC4HznH32eBNjlAFzo2%2BiD57nMPcUMpgmKf9Llbqt%2BjHvgrFI5V1AeqeO0GpK13asJmrlplQydAy5zXv4CYXry9qSx5CxZPYseBB%2FWIqI4eX0oIXNxxbFNS6K1n4WlTCYYUfMpEBX5asmFOeo0v%2FJUa%2F9rSjHmn%2BSDQbh2Hs7KdfrVZjv3ILCB4QrNa8CRwnGW%2BcPdKoX%2BYaV6iIliVI%2B3Oh%2FITnboAVZAYDgjCg6xmou8CrtlSOjruB1arD0wlYPGwwY6pgFHMOcqRvbyImHxhfBzU4OvsVsNEHFrw2fm6lSM%2FOo18GGC23OQw92T%2B7OFWz9L1x5l8MpFuPJX6CPaeyp0xVLWdAxc7ARGS7R3JHaQum%2FUwpRDBWTxj82IIFfmyc4ZMczna2ncde%2FSQXH3tSdzLo2q%2Bw%2F7WtNgA6vMHEqRySuY2DWvjxlm89xaaOHrDGTPzqk6olMEaXz8qOE7e%2B3G1bmXNsE2h4gt&X-Amz-Signature=f6d19b1c321a833b308c6426bce9efb7173373938cd578683a855d41922b8ce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
