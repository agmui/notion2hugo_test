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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQFIS5S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2F2N6tvw5N7Hm9jHtSW%2BJ5bG1iaBsh2FQXew17X7i%2FrAIhAIlkiYbkxAi2q2Xwr51CkuuMdESdGAvQQREoUUDC2i98Kv8DCFkQABoMNjM3NDIzMTgzODA1IgzEaIcGt85HyNPX8b8q3AP1Uc8ZAG6nL56sT7L14rh1HyVgkJxOsfeVX9%2BrGtX7xbH5VHywofIKfsjA1XZHqxr%2Bxt8c%2F5Pf2zR2bcglh3%2Fzo2lGWdO7k6ymtPXJ9DY85evOCft0epcjrOHzRSnD%2BY%2F%2F3Vfs9cBSM0DXfm5PGfrWZRtiTDbzGmGD0oegifrW9xPKeoGa0XZq9AMEtGJzPrtbvIiuScnbY8TjS9J8FJjtY7V2lkRjB531AsGCIhh%2F%2BQ7DWDBET%2BbndbqfYcAlOBaV31scoa8znJSLPKpcW%2FMcexrFGGU7oi64APNJbHWreyp3DT%2Fw2QYf2s7trjqhJL5b5dZ%2Fkfgg9kF4VGiysSG2IFwXlGmm6mNiKJg3oyQYA4VqAdsiejFZOsRxwvBwK82X8yhIAzhwtlHy08f8g1V2UnitrlqI8un6M972dNZp4qY1%2BL3i%2F%2B95bIbgnPkc%2F1bp4ThvWuoaXNnegSq1EfXXYfVJyngyhMk7%2FqFhM2bnDvibD5YRntsKmr%2BnFfW9q6xZNgR4Vq9fs0uMO%2B7Y488J0GZXg7o0UnWvPipTWOOOXe1edt47985GWN0ZdffcV8ezlxzu6fHu4ock2zhR7DMeLkzKHwlsg9H0lWbuAn7WNKoeZ3HxNTgoRgGUDDCT5q%2B%2BBjqkAfLq%2B8v%2F5CNXTcEpui4xbxM5gc7%2B82EZPb7sWRFJFEQF9HWKwEkzNgAeV8EYXuUGrVhIs7M9sdxCgymjuHRNiq22rU40EAxJcHP01srpnI88WXnhWBAwBLP%2B2ppqkaBs5pjjkSeTjILn3hQET%2BrucgClI8XLb0FghBuF1ZOMm88EKYGHIu7e2nyVJZLk7tbCnZ%2FhPH8%2FmwSoWcjafZQKyz3fVRj6&X-Amz-Signature=3a6f8f30e7b01a1c8c37823c8594d74c2dcea34817620b76b50a072d2019e923&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQFIS5S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2F2N6tvw5N7Hm9jHtSW%2BJ5bG1iaBsh2FQXew17X7i%2FrAIhAIlkiYbkxAi2q2Xwr51CkuuMdESdGAvQQREoUUDC2i98Kv8DCFkQABoMNjM3NDIzMTgzODA1IgzEaIcGt85HyNPX8b8q3AP1Uc8ZAG6nL56sT7L14rh1HyVgkJxOsfeVX9%2BrGtX7xbH5VHywofIKfsjA1XZHqxr%2Bxt8c%2F5Pf2zR2bcglh3%2Fzo2lGWdO7k6ymtPXJ9DY85evOCft0epcjrOHzRSnD%2BY%2F%2F3Vfs9cBSM0DXfm5PGfrWZRtiTDbzGmGD0oegifrW9xPKeoGa0XZq9AMEtGJzPrtbvIiuScnbY8TjS9J8FJjtY7V2lkRjB531AsGCIhh%2F%2BQ7DWDBET%2BbndbqfYcAlOBaV31scoa8znJSLPKpcW%2FMcexrFGGU7oi64APNJbHWreyp3DT%2Fw2QYf2s7trjqhJL5b5dZ%2Fkfgg9kF4VGiysSG2IFwXlGmm6mNiKJg3oyQYA4VqAdsiejFZOsRxwvBwK82X8yhIAzhwtlHy08f8g1V2UnitrlqI8un6M972dNZp4qY1%2BL3i%2F%2B95bIbgnPkc%2F1bp4ThvWuoaXNnegSq1EfXXYfVJyngyhMk7%2FqFhM2bnDvibD5YRntsKmr%2BnFfW9q6xZNgR4Vq9fs0uMO%2B7Y488J0GZXg7o0UnWvPipTWOOOXe1edt47985GWN0ZdffcV8ezlxzu6fHu4ock2zhR7DMeLkzKHwlsg9H0lWbuAn7WNKoeZ3HxNTgoRgGUDDCT5q%2B%2BBjqkAfLq%2B8v%2F5CNXTcEpui4xbxM5gc7%2B82EZPb7sWRFJFEQF9HWKwEkzNgAeV8EYXuUGrVhIs7M9sdxCgymjuHRNiq22rU40EAxJcHP01srpnI88WXnhWBAwBLP%2B2ppqkaBs5pjjkSeTjILn3hQET%2BrucgClI8XLb0FghBuF1ZOMm88EKYGHIu7e2nyVJZLk7tbCnZ%2FhPH8%2FmwSoWcjafZQKyz3fVRj6&X-Amz-Signature=285ef3a9aba4e3b577e74cfa3b1c7533febe89dbc0143120b65dab35cb4c9370&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQFIS5S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2F2N6tvw5N7Hm9jHtSW%2BJ5bG1iaBsh2FQXew17X7i%2FrAIhAIlkiYbkxAi2q2Xwr51CkuuMdESdGAvQQREoUUDC2i98Kv8DCFkQABoMNjM3NDIzMTgzODA1IgzEaIcGt85HyNPX8b8q3AP1Uc8ZAG6nL56sT7L14rh1HyVgkJxOsfeVX9%2BrGtX7xbH5VHywofIKfsjA1XZHqxr%2Bxt8c%2F5Pf2zR2bcglh3%2Fzo2lGWdO7k6ymtPXJ9DY85evOCft0epcjrOHzRSnD%2BY%2F%2F3Vfs9cBSM0DXfm5PGfrWZRtiTDbzGmGD0oegifrW9xPKeoGa0XZq9AMEtGJzPrtbvIiuScnbY8TjS9J8FJjtY7V2lkRjB531AsGCIhh%2F%2BQ7DWDBET%2BbndbqfYcAlOBaV31scoa8znJSLPKpcW%2FMcexrFGGU7oi64APNJbHWreyp3DT%2Fw2QYf2s7trjqhJL5b5dZ%2Fkfgg9kF4VGiysSG2IFwXlGmm6mNiKJg3oyQYA4VqAdsiejFZOsRxwvBwK82X8yhIAzhwtlHy08f8g1V2UnitrlqI8un6M972dNZp4qY1%2BL3i%2F%2B95bIbgnPkc%2F1bp4ThvWuoaXNnegSq1EfXXYfVJyngyhMk7%2FqFhM2bnDvibD5YRntsKmr%2BnFfW9q6xZNgR4Vq9fs0uMO%2B7Y488J0GZXg7o0UnWvPipTWOOOXe1edt47985GWN0ZdffcV8ezlxzu6fHu4ock2zhR7DMeLkzKHwlsg9H0lWbuAn7WNKoeZ3HxNTgoRgGUDDCT5q%2B%2BBjqkAfLq%2B8v%2F5CNXTcEpui4xbxM5gc7%2B82EZPb7sWRFJFEQF9HWKwEkzNgAeV8EYXuUGrVhIs7M9sdxCgymjuHRNiq22rU40EAxJcHP01srpnI88WXnhWBAwBLP%2B2ppqkaBs5pjjkSeTjILn3hQET%2BrucgClI8XLb0FghBuF1ZOMm88EKYGHIu7e2nyVJZLk7tbCnZ%2FhPH8%2FmwSoWcjafZQKyz3fVRj6&X-Amz-Signature=362be9f057d1d0bb6fbedb86bef4b368888403f0f582d35b7548ae255503e840&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQFIS5S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2F2N6tvw5N7Hm9jHtSW%2BJ5bG1iaBsh2FQXew17X7i%2FrAIhAIlkiYbkxAi2q2Xwr51CkuuMdESdGAvQQREoUUDC2i98Kv8DCFkQABoMNjM3NDIzMTgzODA1IgzEaIcGt85HyNPX8b8q3AP1Uc8ZAG6nL56sT7L14rh1HyVgkJxOsfeVX9%2BrGtX7xbH5VHywofIKfsjA1XZHqxr%2Bxt8c%2F5Pf2zR2bcglh3%2Fzo2lGWdO7k6ymtPXJ9DY85evOCft0epcjrOHzRSnD%2BY%2F%2F3Vfs9cBSM0DXfm5PGfrWZRtiTDbzGmGD0oegifrW9xPKeoGa0XZq9AMEtGJzPrtbvIiuScnbY8TjS9J8FJjtY7V2lkRjB531AsGCIhh%2F%2BQ7DWDBET%2BbndbqfYcAlOBaV31scoa8znJSLPKpcW%2FMcexrFGGU7oi64APNJbHWreyp3DT%2Fw2QYf2s7trjqhJL5b5dZ%2Fkfgg9kF4VGiysSG2IFwXlGmm6mNiKJg3oyQYA4VqAdsiejFZOsRxwvBwK82X8yhIAzhwtlHy08f8g1V2UnitrlqI8un6M972dNZp4qY1%2BL3i%2F%2B95bIbgnPkc%2F1bp4ThvWuoaXNnegSq1EfXXYfVJyngyhMk7%2FqFhM2bnDvibD5YRntsKmr%2BnFfW9q6xZNgR4Vq9fs0uMO%2B7Y488J0GZXg7o0UnWvPipTWOOOXe1edt47985GWN0ZdffcV8ezlxzu6fHu4ock2zhR7DMeLkzKHwlsg9H0lWbuAn7WNKoeZ3HxNTgoRgGUDDCT5q%2B%2BBjqkAfLq%2B8v%2F5CNXTcEpui4xbxM5gc7%2B82EZPb7sWRFJFEQF9HWKwEkzNgAeV8EYXuUGrVhIs7M9sdxCgymjuHRNiq22rU40EAxJcHP01srpnI88WXnhWBAwBLP%2B2ppqkaBs5pjjkSeTjILn3hQET%2BrucgClI8XLb0FghBuF1ZOMm88EKYGHIu7e2nyVJZLk7tbCnZ%2FhPH8%2FmwSoWcjafZQKyz3fVRj6&X-Amz-Signature=48e100c3094b44c2d2dcc18474d7eabc76edc5ad81e6c5c5d4161e01e38a5631&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQFIS5S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2F2N6tvw5N7Hm9jHtSW%2BJ5bG1iaBsh2FQXew17X7i%2FrAIhAIlkiYbkxAi2q2Xwr51CkuuMdESdGAvQQREoUUDC2i98Kv8DCFkQABoMNjM3NDIzMTgzODA1IgzEaIcGt85HyNPX8b8q3AP1Uc8ZAG6nL56sT7L14rh1HyVgkJxOsfeVX9%2BrGtX7xbH5VHywofIKfsjA1XZHqxr%2Bxt8c%2F5Pf2zR2bcglh3%2Fzo2lGWdO7k6ymtPXJ9DY85evOCft0epcjrOHzRSnD%2BY%2F%2F3Vfs9cBSM0DXfm5PGfrWZRtiTDbzGmGD0oegifrW9xPKeoGa0XZq9AMEtGJzPrtbvIiuScnbY8TjS9J8FJjtY7V2lkRjB531AsGCIhh%2F%2BQ7DWDBET%2BbndbqfYcAlOBaV31scoa8znJSLPKpcW%2FMcexrFGGU7oi64APNJbHWreyp3DT%2Fw2QYf2s7trjqhJL5b5dZ%2Fkfgg9kF4VGiysSG2IFwXlGmm6mNiKJg3oyQYA4VqAdsiejFZOsRxwvBwK82X8yhIAzhwtlHy08f8g1V2UnitrlqI8un6M972dNZp4qY1%2BL3i%2F%2B95bIbgnPkc%2F1bp4ThvWuoaXNnegSq1EfXXYfVJyngyhMk7%2FqFhM2bnDvibD5YRntsKmr%2BnFfW9q6xZNgR4Vq9fs0uMO%2B7Y488J0GZXg7o0UnWvPipTWOOOXe1edt47985GWN0ZdffcV8ezlxzu6fHu4ock2zhR7DMeLkzKHwlsg9H0lWbuAn7WNKoeZ3HxNTgoRgGUDDCT5q%2B%2BBjqkAfLq%2B8v%2F5CNXTcEpui4xbxM5gc7%2B82EZPb7sWRFJFEQF9HWKwEkzNgAeV8EYXuUGrVhIs7M9sdxCgymjuHRNiq22rU40EAxJcHP01srpnI88WXnhWBAwBLP%2B2ppqkaBs5pjjkSeTjILn3hQET%2BrucgClI8XLb0FghBuF1ZOMm88EKYGHIu7e2nyVJZLk7tbCnZ%2FhPH8%2FmwSoWcjafZQKyz3fVRj6&X-Amz-Signature=0976bb02dc59b9e1b574c0ee3d776967772738161b99ad89cc2daee46c22000b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQFIS5S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2F2N6tvw5N7Hm9jHtSW%2BJ5bG1iaBsh2FQXew17X7i%2FrAIhAIlkiYbkxAi2q2Xwr51CkuuMdESdGAvQQREoUUDC2i98Kv8DCFkQABoMNjM3NDIzMTgzODA1IgzEaIcGt85HyNPX8b8q3AP1Uc8ZAG6nL56sT7L14rh1HyVgkJxOsfeVX9%2BrGtX7xbH5VHywofIKfsjA1XZHqxr%2Bxt8c%2F5Pf2zR2bcglh3%2Fzo2lGWdO7k6ymtPXJ9DY85evOCft0epcjrOHzRSnD%2BY%2F%2F3Vfs9cBSM0DXfm5PGfrWZRtiTDbzGmGD0oegifrW9xPKeoGa0XZq9AMEtGJzPrtbvIiuScnbY8TjS9J8FJjtY7V2lkRjB531AsGCIhh%2F%2BQ7DWDBET%2BbndbqfYcAlOBaV31scoa8znJSLPKpcW%2FMcexrFGGU7oi64APNJbHWreyp3DT%2Fw2QYf2s7trjqhJL5b5dZ%2Fkfgg9kF4VGiysSG2IFwXlGmm6mNiKJg3oyQYA4VqAdsiejFZOsRxwvBwK82X8yhIAzhwtlHy08f8g1V2UnitrlqI8un6M972dNZp4qY1%2BL3i%2F%2B95bIbgnPkc%2F1bp4ThvWuoaXNnegSq1EfXXYfVJyngyhMk7%2FqFhM2bnDvibD5YRntsKmr%2BnFfW9q6xZNgR4Vq9fs0uMO%2B7Y488J0GZXg7o0UnWvPipTWOOOXe1edt47985GWN0ZdffcV8ezlxzu6fHu4ock2zhR7DMeLkzKHwlsg9H0lWbuAn7WNKoeZ3HxNTgoRgGUDDCT5q%2B%2BBjqkAfLq%2B8v%2F5CNXTcEpui4xbxM5gc7%2B82EZPb7sWRFJFEQF9HWKwEkzNgAeV8EYXuUGrVhIs7M9sdxCgymjuHRNiq22rU40EAxJcHP01srpnI88WXnhWBAwBLP%2B2ppqkaBs5pjjkSeTjILn3hQET%2BrucgClI8XLb0FghBuF1ZOMm88EKYGHIu7e2nyVJZLk7tbCnZ%2FhPH8%2FmwSoWcjafZQKyz3fVRj6&X-Amz-Signature=87a24c0c6201094111a8101bb9fa89a447638e6cfff550cd29e8b54c942c0205&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQFIS5S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2F2N6tvw5N7Hm9jHtSW%2BJ5bG1iaBsh2FQXew17X7i%2FrAIhAIlkiYbkxAi2q2Xwr51CkuuMdESdGAvQQREoUUDC2i98Kv8DCFkQABoMNjM3NDIzMTgzODA1IgzEaIcGt85HyNPX8b8q3AP1Uc8ZAG6nL56sT7L14rh1HyVgkJxOsfeVX9%2BrGtX7xbH5VHywofIKfsjA1XZHqxr%2Bxt8c%2F5Pf2zR2bcglh3%2Fzo2lGWdO7k6ymtPXJ9DY85evOCft0epcjrOHzRSnD%2BY%2F%2F3Vfs9cBSM0DXfm5PGfrWZRtiTDbzGmGD0oegifrW9xPKeoGa0XZq9AMEtGJzPrtbvIiuScnbY8TjS9J8FJjtY7V2lkRjB531AsGCIhh%2F%2BQ7DWDBET%2BbndbqfYcAlOBaV31scoa8znJSLPKpcW%2FMcexrFGGU7oi64APNJbHWreyp3DT%2Fw2QYf2s7trjqhJL5b5dZ%2Fkfgg9kF4VGiysSG2IFwXlGmm6mNiKJg3oyQYA4VqAdsiejFZOsRxwvBwK82X8yhIAzhwtlHy08f8g1V2UnitrlqI8un6M972dNZp4qY1%2BL3i%2F%2B95bIbgnPkc%2F1bp4ThvWuoaXNnegSq1EfXXYfVJyngyhMk7%2FqFhM2bnDvibD5YRntsKmr%2BnFfW9q6xZNgR4Vq9fs0uMO%2B7Y488J0GZXg7o0UnWvPipTWOOOXe1edt47985GWN0ZdffcV8ezlxzu6fHu4ock2zhR7DMeLkzKHwlsg9H0lWbuAn7WNKoeZ3HxNTgoRgGUDDCT5q%2B%2BBjqkAfLq%2B8v%2F5CNXTcEpui4xbxM5gc7%2B82EZPb7sWRFJFEQF9HWKwEkzNgAeV8EYXuUGrVhIs7M9sdxCgymjuHRNiq22rU40EAxJcHP01srpnI88WXnhWBAwBLP%2B2ppqkaBs5pjjkSeTjILn3hQET%2BrucgClI8XLb0FghBuF1ZOMm88EKYGHIu7e2nyVJZLk7tbCnZ%2FhPH8%2FmwSoWcjafZQKyz3fVRj6&X-Amz-Signature=daa5b1d0d08beb9958a3451c94cd1741804ca0ce0851e1945a4cf6320eb2cbd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQFIS5S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2F2N6tvw5N7Hm9jHtSW%2BJ5bG1iaBsh2FQXew17X7i%2FrAIhAIlkiYbkxAi2q2Xwr51CkuuMdESdGAvQQREoUUDC2i98Kv8DCFkQABoMNjM3NDIzMTgzODA1IgzEaIcGt85HyNPX8b8q3AP1Uc8ZAG6nL56sT7L14rh1HyVgkJxOsfeVX9%2BrGtX7xbH5VHywofIKfsjA1XZHqxr%2Bxt8c%2F5Pf2zR2bcglh3%2Fzo2lGWdO7k6ymtPXJ9DY85evOCft0epcjrOHzRSnD%2BY%2F%2F3Vfs9cBSM0DXfm5PGfrWZRtiTDbzGmGD0oegifrW9xPKeoGa0XZq9AMEtGJzPrtbvIiuScnbY8TjS9J8FJjtY7V2lkRjB531AsGCIhh%2F%2BQ7DWDBET%2BbndbqfYcAlOBaV31scoa8znJSLPKpcW%2FMcexrFGGU7oi64APNJbHWreyp3DT%2Fw2QYf2s7trjqhJL5b5dZ%2Fkfgg9kF4VGiysSG2IFwXlGmm6mNiKJg3oyQYA4VqAdsiejFZOsRxwvBwK82X8yhIAzhwtlHy08f8g1V2UnitrlqI8un6M972dNZp4qY1%2BL3i%2F%2B95bIbgnPkc%2F1bp4ThvWuoaXNnegSq1EfXXYfVJyngyhMk7%2FqFhM2bnDvibD5YRntsKmr%2BnFfW9q6xZNgR4Vq9fs0uMO%2B7Y488J0GZXg7o0UnWvPipTWOOOXe1edt47985GWN0ZdffcV8ezlxzu6fHu4ock2zhR7DMeLkzKHwlsg9H0lWbuAn7WNKoeZ3HxNTgoRgGUDDCT5q%2B%2BBjqkAfLq%2B8v%2F5CNXTcEpui4xbxM5gc7%2B82EZPb7sWRFJFEQF9HWKwEkzNgAeV8EYXuUGrVhIs7M9sdxCgymjuHRNiq22rU40EAxJcHP01srpnI88WXnhWBAwBLP%2B2ppqkaBs5pjjkSeTjILn3hQET%2BrucgClI8XLb0FghBuF1ZOMm88EKYGHIu7e2nyVJZLk7tbCnZ%2FhPH8%2FmwSoWcjafZQKyz3fVRj6&X-Amz-Signature=fb56a0cdc30637dec91d392d389607155a6320c377b08ee51a8c53c1f9dcf898&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
