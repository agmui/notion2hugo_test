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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZ5X4AL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2B2PaadCyR5NsejOKp9g5F3XIEA0lky5ecCe7ToX%2FhywIhAIKifjSQPanmxks4Z%2F5FTZgpIv0uUdrwQ%2F6BfcQS6eg%2BKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Hk28bAeer5xYc3Iq3AMrqQlBYWRKyIEtxgIaTyF9cqQfC6cBPi%2B14mAOrJqlIZoWRZwhO53gaxfYMUwTojNXwR5T1rFrw%2FYzoy%2BkY18wDaiUDRw9jO9W9f4m3RE6PDmLjbQlBxCKPfi33cOtZy%2F%2BrgFqxhx1wVNpA8q4J60UJPwZ5p3Yqg%2BjrZ8NQC4JpBpaoH6duIUaGwA%2BQZhQ6byiPRSsdORSKbmj4hXFbbqWjm%2Bunfm2ksFZgCBqoAenUEx73TQIwPsMIgh96k%2FTVNanMrTyx4jeog80bGEJp4j2o3TLgH1%2FBbtOp%2B%2BKG3ApHzQLzH1GcDA5IxtRapdB8SRqY%2BxrF5toQYmigNOpaGC4ts8FfyeX9ERqFt%2FDq7mfmcFRPh8Fn%2BiB5xfqtua4Ev%2F1ujbTj5T9txkjMca%2BhPKmySftzqg9vT1jE7IUFrhZXRTvS8F02XFrwJtN4mOHZPazfczmuKFsFAv5LdfQijfTI4Xnj11jhZGFMqJK8HNy1YEM9Df1deln0Gb3MDnKbDNVSsn3NXK2BARV1Zv%2B4jbJrm%2FT2oTXq7Fs8P%2B%2FTeHbgPA4zrsHwAahpJri8Dw831J7PLwsUjBYTwR131KhkdWspof2uhIYf1BsVuJHw5kosyISrSFodjE%2FMzhghTCKqonBBjqkAeNWp%2B2kH%2BjHoix3Oc9DC3rkkqpCgpTnQZ2q%2FxS7NGdyUKkwd4j8TEEnAEgTW1qltwYQ0JiQBW7T8mjHWTNjFbn837lfpj3DxHSoDl%2B9FgzIUgEzdvHi3vNyPPMUPLkPsiH8KnxhaTumaOSdecVNH%2F6ME0N69V9WF4g0wGfbUhzzLAnEopr0fU2JtVk8Hr2t4hrby3ioMnu7AYYZD1pH03K0vpsW&X-Amz-Signature=ddffaa5cca50ca106c2cef085759371b027f45eb7b89b211acde7f6b11a5f7cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZ5X4AL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2B2PaadCyR5NsejOKp9g5F3XIEA0lky5ecCe7ToX%2FhywIhAIKifjSQPanmxks4Z%2F5FTZgpIv0uUdrwQ%2F6BfcQS6eg%2BKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Hk28bAeer5xYc3Iq3AMrqQlBYWRKyIEtxgIaTyF9cqQfC6cBPi%2B14mAOrJqlIZoWRZwhO53gaxfYMUwTojNXwR5T1rFrw%2FYzoy%2BkY18wDaiUDRw9jO9W9f4m3RE6PDmLjbQlBxCKPfi33cOtZy%2F%2BrgFqxhx1wVNpA8q4J60UJPwZ5p3Yqg%2BjrZ8NQC4JpBpaoH6duIUaGwA%2BQZhQ6byiPRSsdORSKbmj4hXFbbqWjm%2Bunfm2ksFZgCBqoAenUEx73TQIwPsMIgh96k%2FTVNanMrTyx4jeog80bGEJp4j2o3TLgH1%2FBbtOp%2B%2BKG3ApHzQLzH1GcDA5IxtRapdB8SRqY%2BxrF5toQYmigNOpaGC4ts8FfyeX9ERqFt%2FDq7mfmcFRPh8Fn%2BiB5xfqtua4Ev%2F1ujbTj5T9txkjMca%2BhPKmySftzqg9vT1jE7IUFrhZXRTvS8F02XFrwJtN4mOHZPazfczmuKFsFAv5LdfQijfTI4Xnj11jhZGFMqJK8HNy1YEM9Df1deln0Gb3MDnKbDNVSsn3NXK2BARV1Zv%2B4jbJrm%2FT2oTXq7Fs8P%2B%2FTeHbgPA4zrsHwAahpJri8Dw831J7PLwsUjBYTwR131KhkdWspof2uhIYf1BsVuJHw5kosyISrSFodjE%2FMzhghTCKqonBBjqkAeNWp%2B2kH%2BjHoix3Oc9DC3rkkqpCgpTnQZ2q%2FxS7NGdyUKkwd4j8TEEnAEgTW1qltwYQ0JiQBW7T8mjHWTNjFbn837lfpj3DxHSoDl%2B9FgzIUgEzdvHi3vNyPPMUPLkPsiH8KnxhaTumaOSdecVNH%2F6ME0N69V9WF4g0wGfbUhzzLAnEopr0fU2JtVk8Hr2t4hrby3ioMnu7AYYZD1pH03K0vpsW&X-Amz-Signature=92a86a7dd1fd855fb4c1e99d029c1dc8174a350025a08d9885b465a33c7a0f06&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZ5X4AL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2B2PaadCyR5NsejOKp9g5F3XIEA0lky5ecCe7ToX%2FhywIhAIKifjSQPanmxks4Z%2F5FTZgpIv0uUdrwQ%2F6BfcQS6eg%2BKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Hk28bAeer5xYc3Iq3AMrqQlBYWRKyIEtxgIaTyF9cqQfC6cBPi%2B14mAOrJqlIZoWRZwhO53gaxfYMUwTojNXwR5T1rFrw%2FYzoy%2BkY18wDaiUDRw9jO9W9f4m3RE6PDmLjbQlBxCKPfi33cOtZy%2F%2BrgFqxhx1wVNpA8q4J60UJPwZ5p3Yqg%2BjrZ8NQC4JpBpaoH6duIUaGwA%2BQZhQ6byiPRSsdORSKbmj4hXFbbqWjm%2Bunfm2ksFZgCBqoAenUEx73TQIwPsMIgh96k%2FTVNanMrTyx4jeog80bGEJp4j2o3TLgH1%2FBbtOp%2B%2BKG3ApHzQLzH1GcDA5IxtRapdB8SRqY%2BxrF5toQYmigNOpaGC4ts8FfyeX9ERqFt%2FDq7mfmcFRPh8Fn%2BiB5xfqtua4Ev%2F1ujbTj5T9txkjMca%2BhPKmySftzqg9vT1jE7IUFrhZXRTvS8F02XFrwJtN4mOHZPazfczmuKFsFAv5LdfQijfTI4Xnj11jhZGFMqJK8HNy1YEM9Df1deln0Gb3MDnKbDNVSsn3NXK2BARV1Zv%2B4jbJrm%2FT2oTXq7Fs8P%2B%2FTeHbgPA4zrsHwAahpJri8Dw831J7PLwsUjBYTwR131KhkdWspof2uhIYf1BsVuJHw5kosyISrSFodjE%2FMzhghTCKqonBBjqkAeNWp%2B2kH%2BjHoix3Oc9DC3rkkqpCgpTnQZ2q%2FxS7NGdyUKkwd4j8TEEnAEgTW1qltwYQ0JiQBW7T8mjHWTNjFbn837lfpj3DxHSoDl%2B9FgzIUgEzdvHi3vNyPPMUPLkPsiH8KnxhaTumaOSdecVNH%2F6ME0N69V9WF4g0wGfbUhzzLAnEopr0fU2JtVk8Hr2t4hrby3ioMnu7AYYZD1pH03K0vpsW&X-Amz-Signature=0fcd82781f75d6c5fbbe02ac85ba9c9ad17c530134a601bc05207f28551882ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZ5X4AL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2B2PaadCyR5NsejOKp9g5F3XIEA0lky5ecCe7ToX%2FhywIhAIKifjSQPanmxks4Z%2F5FTZgpIv0uUdrwQ%2F6BfcQS6eg%2BKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Hk28bAeer5xYc3Iq3AMrqQlBYWRKyIEtxgIaTyF9cqQfC6cBPi%2B14mAOrJqlIZoWRZwhO53gaxfYMUwTojNXwR5T1rFrw%2FYzoy%2BkY18wDaiUDRw9jO9W9f4m3RE6PDmLjbQlBxCKPfi33cOtZy%2F%2BrgFqxhx1wVNpA8q4J60UJPwZ5p3Yqg%2BjrZ8NQC4JpBpaoH6duIUaGwA%2BQZhQ6byiPRSsdORSKbmj4hXFbbqWjm%2Bunfm2ksFZgCBqoAenUEx73TQIwPsMIgh96k%2FTVNanMrTyx4jeog80bGEJp4j2o3TLgH1%2FBbtOp%2B%2BKG3ApHzQLzH1GcDA5IxtRapdB8SRqY%2BxrF5toQYmigNOpaGC4ts8FfyeX9ERqFt%2FDq7mfmcFRPh8Fn%2BiB5xfqtua4Ev%2F1ujbTj5T9txkjMca%2BhPKmySftzqg9vT1jE7IUFrhZXRTvS8F02XFrwJtN4mOHZPazfczmuKFsFAv5LdfQijfTI4Xnj11jhZGFMqJK8HNy1YEM9Df1deln0Gb3MDnKbDNVSsn3NXK2BARV1Zv%2B4jbJrm%2FT2oTXq7Fs8P%2B%2FTeHbgPA4zrsHwAahpJri8Dw831J7PLwsUjBYTwR131KhkdWspof2uhIYf1BsVuJHw5kosyISrSFodjE%2FMzhghTCKqonBBjqkAeNWp%2B2kH%2BjHoix3Oc9DC3rkkqpCgpTnQZ2q%2FxS7NGdyUKkwd4j8TEEnAEgTW1qltwYQ0JiQBW7T8mjHWTNjFbn837lfpj3DxHSoDl%2B9FgzIUgEzdvHi3vNyPPMUPLkPsiH8KnxhaTumaOSdecVNH%2F6ME0N69V9WF4g0wGfbUhzzLAnEopr0fU2JtVk8Hr2t4hrby3ioMnu7AYYZD1pH03K0vpsW&X-Amz-Signature=20a4516c2e12bfe755f51d216c0c7c35e6f6c73bd38376b861af2e09f7a960e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZ5X4AL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2B2PaadCyR5NsejOKp9g5F3XIEA0lky5ecCe7ToX%2FhywIhAIKifjSQPanmxks4Z%2F5FTZgpIv0uUdrwQ%2F6BfcQS6eg%2BKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Hk28bAeer5xYc3Iq3AMrqQlBYWRKyIEtxgIaTyF9cqQfC6cBPi%2B14mAOrJqlIZoWRZwhO53gaxfYMUwTojNXwR5T1rFrw%2FYzoy%2BkY18wDaiUDRw9jO9W9f4m3RE6PDmLjbQlBxCKPfi33cOtZy%2F%2BrgFqxhx1wVNpA8q4J60UJPwZ5p3Yqg%2BjrZ8NQC4JpBpaoH6duIUaGwA%2BQZhQ6byiPRSsdORSKbmj4hXFbbqWjm%2Bunfm2ksFZgCBqoAenUEx73TQIwPsMIgh96k%2FTVNanMrTyx4jeog80bGEJp4j2o3TLgH1%2FBbtOp%2B%2BKG3ApHzQLzH1GcDA5IxtRapdB8SRqY%2BxrF5toQYmigNOpaGC4ts8FfyeX9ERqFt%2FDq7mfmcFRPh8Fn%2BiB5xfqtua4Ev%2F1ujbTj5T9txkjMca%2BhPKmySftzqg9vT1jE7IUFrhZXRTvS8F02XFrwJtN4mOHZPazfczmuKFsFAv5LdfQijfTI4Xnj11jhZGFMqJK8HNy1YEM9Df1deln0Gb3MDnKbDNVSsn3NXK2BARV1Zv%2B4jbJrm%2FT2oTXq7Fs8P%2B%2FTeHbgPA4zrsHwAahpJri8Dw831J7PLwsUjBYTwR131KhkdWspof2uhIYf1BsVuJHw5kosyISrSFodjE%2FMzhghTCKqonBBjqkAeNWp%2B2kH%2BjHoix3Oc9DC3rkkqpCgpTnQZ2q%2FxS7NGdyUKkwd4j8TEEnAEgTW1qltwYQ0JiQBW7T8mjHWTNjFbn837lfpj3DxHSoDl%2B9FgzIUgEzdvHi3vNyPPMUPLkPsiH8KnxhaTumaOSdecVNH%2F6ME0N69V9WF4g0wGfbUhzzLAnEopr0fU2JtVk8Hr2t4hrby3ioMnu7AYYZD1pH03K0vpsW&X-Amz-Signature=5bf88ffd5966cd81ef31da50493423ac2f5abbbf5878ca1b6692626d816d13ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZ5X4AL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2B2PaadCyR5NsejOKp9g5F3XIEA0lky5ecCe7ToX%2FhywIhAIKifjSQPanmxks4Z%2F5FTZgpIv0uUdrwQ%2F6BfcQS6eg%2BKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Hk28bAeer5xYc3Iq3AMrqQlBYWRKyIEtxgIaTyF9cqQfC6cBPi%2B14mAOrJqlIZoWRZwhO53gaxfYMUwTojNXwR5T1rFrw%2FYzoy%2BkY18wDaiUDRw9jO9W9f4m3RE6PDmLjbQlBxCKPfi33cOtZy%2F%2BrgFqxhx1wVNpA8q4J60UJPwZ5p3Yqg%2BjrZ8NQC4JpBpaoH6duIUaGwA%2BQZhQ6byiPRSsdORSKbmj4hXFbbqWjm%2Bunfm2ksFZgCBqoAenUEx73TQIwPsMIgh96k%2FTVNanMrTyx4jeog80bGEJp4j2o3TLgH1%2FBbtOp%2B%2BKG3ApHzQLzH1GcDA5IxtRapdB8SRqY%2BxrF5toQYmigNOpaGC4ts8FfyeX9ERqFt%2FDq7mfmcFRPh8Fn%2BiB5xfqtua4Ev%2F1ujbTj5T9txkjMca%2BhPKmySftzqg9vT1jE7IUFrhZXRTvS8F02XFrwJtN4mOHZPazfczmuKFsFAv5LdfQijfTI4Xnj11jhZGFMqJK8HNy1YEM9Df1deln0Gb3MDnKbDNVSsn3NXK2BARV1Zv%2B4jbJrm%2FT2oTXq7Fs8P%2B%2FTeHbgPA4zrsHwAahpJri8Dw831J7PLwsUjBYTwR131KhkdWspof2uhIYf1BsVuJHw5kosyISrSFodjE%2FMzhghTCKqonBBjqkAeNWp%2B2kH%2BjHoix3Oc9DC3rkkqpCgpTnQZ2q%2FxS7NGdyUKkwd4j8TEEnAEgTW1qltwYQ0JiQBW7T8mjHWTNjFbn837lfpj3DxHSoDl%2B9FgzIUgEzdvHi3vNyPPMUPLkPsiH8KnxhaTumaOSdecVNH%2F6ME0N69V9WF4g0wGfbUhzzLAnEopr0fU2JtVk8Hr2t4hrby3ioMnu7AYYZD1pH03K0vpsW&X-Amz-Signature=a32f8179f269e32666da3c5103e8242bb43f72f6ade5a4bec77de93bfab783f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZ5X4AL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2B2PaadCyR5NsejOKp9g5F3XIEA0lky5ecCe7ToX%2FhywIhAIKifjSQPanmxks4Z%2F5FTZgpIv0uUdrwQ%2F6BfcQS6eg%2BKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Hk28bAeer5xYc3Iq3AMrqQlBYWRKyIEtxgIaTyF9cqQfC6cBPi%2B14mAOrJqlIZoWRZwhO53gaxfYMUwTojNXwR5T1rFrw%2FYzoy%2BkY18wDaiUDRw9jO9W9f4m3RE6PDmLjbQlBxCKPfi33cOtZy%2F%2BrgFqxhx1wVNpA8q4J60UJPwZ5p3Yqg%2BjrZ8NQC4JpBpaoH6duIUaGwA%2BQZhQ6byiPRSsdORSKbmj4hXFbbqWjm%2Bunfm2ksFZgCBqoAenUEx73TQIwPsMIgh96k%2FTVNanMrTyx4jeog80bGEJp4j2o3TLgH1%2FBbtOp%2B%2BKG3ApHzQLzH1GcDA5IxtRapdB8SRqY%2BxrF5toQYmigNOpaGC4ts8FfyeX9ERqFt%2FDq7mfmcFRPh8Fn%2BiB5xfqtua4Ev%2F1ujbTj5T9txkjMca%2BhPKmySftzqg9vT1jE7IUFrhZXRTvS8F02XFrwJtN4mOHZPazfczmuKFsFAv5LdfQijfTI4Xnj11jhZGFMqJK8HNy1YEM9Df1deln0Gb3MDnKbDNVSsn3NXK2BARV1Zv%2B4jbJrm%2FT2oTXq7Fs8P%2B%2FTeHbgPA4zrsHwAahpJri8Dw831J7PLwsUjBYTwR131KhkdWspof2uhIYf1BsVuJHw5kosyISrSFodjE%2FMzhghTCKqonBBjqkAeNWp%2B2kH%2BjHoix3Oc9DC3rkkqpCgpTnQZ2q%2FxS7NGdyUKkwd4j8TEEnAEgTW1qltwYQ0JiQBW7T8mjHWTNjFbn837lfpj3DxHSoDl%2B9FgzIUgEzdvHi3vNyPPMUPLkPsiH8KnxhaTumaOSdecVNH%2F6ME0N69V9WF4g0wGfbUhzzLAnEopr0fU2JtVk8Hr2t4hrby3ioMnu7AYYZD1pH03K0vpsW&X-Amz-Signature=ebcaa540fbc751da5c5fb5ca9c534c93f4c966128f891b9e8b7fa26887373424&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZ5X4AL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2B2PaadCyR5NsejOKp9g5F3XIEA0lky5ecCe7ToX%2FhywIhAIKifjSQPanmxks4Z%2F5FTZgpIv0uUdrwQ%2F6BfcQS6eg%2BKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Hk28bAeer5xYc3Iq3AMrqQlBYWRKyIEtxgIaTyF9cqQfC6cBPi%2B14mAOrJqlIZoWRZwhO53gaxfYMUwTojNXwR5T1rFrw%2FYzoy%2BkY18wDaiUDRw9jO9W9f4m3RE6PDmLjbQlBxCKPfi33cOtZy%2F%2BrgFqxhx1wVNpA8q4J60UJPwZ5p3Yqg%2BjrZ8NQC4JpBpaoH6duIUaGwA%2BQZhQ6byiPRSsdORSKbmj4hXFbbqWjm%2Bunfm2ksFZgCBqoAenUEx73TQIwPsMIgh96k%2FTVNanMrTyx4jeog80bGEJp4j2o3TLgH1%2FBbtOp%2B%2BKG3ApHzQLzH1GcDA5IxtRapdB8SRqY%2BxrF5toQYmigNOpaGC4ts8FfyeX9ERqFt%2FDq7mfmcFRPh8Fn%2BiB5xfqtua4Ev%2F1ujbTj5T9txkjMca%2BhPKmySftzqg9vT1jE7IUFrhZXRTvS8F02XFrwJtN4mOHZPazfczmuKFsFAv5LdfQijfTI4Xnj11jhZGFMqJK8HNy1YEM9Df1deln0Gb3MDnKbDNVSsn3NXK2BARV1Zv%2B4jbJrm%2FT2oTXq7Fs8P%2B%2FTeHbgPA4zrsHwAahpJri8Dw831J7PLwsUjBYTwR131KhkdWspof2uhIYf1BsVuJHw5kosyISrSFodjE%2FMzhghTCKqonBBjqkAeNWp%2B2kH%2BjHoix3Oc9DC3rkkqpCgpTnQZ2q%2FxS7NGdyUKkwd4j8TEEnAEgTW1qltwYQ0JiQBW7T8mjHWTNjFbn837lfpj3DxHSoDl%2B9FgzIUgEzdvHi3vNyPPMUPLkPsiH8KnxhaTumaOSdecVNH%2F6ME0N69V9WF4g0wGfbUhzzLAnEopr0fU2JtVk8Hr2t4hrby3ioMnu7AYYZD1pH03K0vpsW&X-Amz-Signature=961a77923ba4889be1bfbd2827c86b35c8e3335e64edb36f0ae9ab56f1b4d55d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
