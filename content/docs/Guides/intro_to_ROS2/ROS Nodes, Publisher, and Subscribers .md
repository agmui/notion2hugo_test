---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYXOGFD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCcEH0K8yimQu1wzKhjMsuXssEYOXkot46nQVF8rdkW1gIhAPyHxxBCpJMxXyw8S3WDsTTrBOJiCRB2WTQ2SGLhZZ0%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9tBodGIyOnNQkGpgq3APlkUk8vCnooC2ecxgoxvdW8buV1pqMOX%2FeWrweJ0r3NKkgBU7a7TuHh2B3OqBli81jviicOgoNla7eOP3i4xjUY2hvKpe46W%2BbjlBNApM0zTmmGyU1IGXHqeBdobJO666zfzemLrmZAInxyCWgp3O3RhecP81Cs3P7dAxhI4CzUdpTI7i7eIMISQ3a4sQSXD6mUzhsQ%2FeiThmqGWjNx7o81%2F980CX9bV9ldeQi9Nk8yKjZl83qCKLq%2BGRCy3CJ8fmKKcqbAkhuBuwiq6mf7l6Mt9LDIc2MU5DdfCHP9x5GGPDRO%2BI2h4DGQ%2BVk9t7jradeShpwrjHQ4HFIdqYORIoxCKsTbeEfSQpbMlGyyEnyG4wPI4Uwv524KVf7bWaisgDWTZ2JTmmefix2pv6XavpBrG%2BA%2FAVKjuYfxBIzy1GwRSBWPgIc8%2FVkPqBxfCLIANB%2F3KybK9iM1bsDP9uFcIsqkTDMhYUEsydHlMv7A7To6DJw7MtK4%2FzmUGhLbi18t2tF8UQBw%2FUkuuK5ec20EEWVD%2FktJ7p7iiF3jrosiSvz5SgtQDkPDMRj0YaGbOEzgaefpy4CE%2Bg4nvyALq3HQHVezRcW1X1ZLbE8AX9AY5qzWLuluPrZ8Wc3xMFMHTDb0K3JBjqkARzBJy8PBahNCYyol5r6EroO12O1ncSsQQjDGD2n4aUQP5GdiLygGbPImMJa8MAYoil2mH38F5OdNel0m2LdjLuDbK4aFJc4nvgBOH31qGSu%2FEGbr1Oa7P8x1BJobodvCflJkWSQS1r4v8%2FS9ehmaJhPgg74X6VxE5jGjz59h6F0teGKNR6teKWl1Hihxw4Fq8hwxFzji03yB68tggpX%2FOVvALwp&X-Amz-Signature=7afc5e5802a357134d1c43fd60da04894b48b255dbf6a48bf5cf720e67bd9ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYXOGFD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCcEH0K8yimQu1wzKhjMsuXssEYOXkot46nQVF8rdkW1gIhAPyHxxBCpJMxXyw8S3WDsTTrBOJiCRB2WTQ2SGLhZZ0%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9tBodGIyOnNQkGpgq3APlkUk8vCnooC2ecxgoxvdW8buV1pqMOX%2FeWrweJ0r3NKkgBU7a7TuHh2B3OqBli81jviicOgoNla7eOP3i4xjUY2hvKpe46W%2BbjlBNApM0zTmmGyU1IGXHqeBdobJO666zfzemLrmZAInxyCWgp3O3RhecP81Cs3P7dAxhI4CzUdpTI7i7eIMISQ3a4sQSXD6mUzhsQ%2FeiThmqGWjNx7o81%2F980CX9bV9ldeQi9Nk8yKjZl83qCKLq%2BGRCy3CJ8fmKKcqbAkhuBuwiq6mf7l6Mt9LDIc2MU5DdfCHP9x5GGPDRO%2BI2h4DGQ%2BVk9t7jradeShpwrjHQ4HFIdqYORIoxCKsTbeEfSQpbMlGyyEnyG4wPI4Uwv524KVf7bWaisgDWTZ2JTmmefix2pv6XavpBrG%2BA%2FAVKjuYfxBIzy1GwRSBWPgIc8%2FVkPqBxfCLIANB%2F3KybK9iM1bsDP9uFcIsqkTDMhYUEsydHlMv7A7To6DJw7MtK4%2FzmUGhLbi18t2tF8UQBw%2FUkuuK5ec20EEWVD%2FktJ7p7iiF3jrosiSvz5SgtQDkPDMRj0YaGbOEzgaefpy4CE%2Bg4nvyALq3HQHVezRcW1X1ZLbE8AX9AY5qzWLuluPrZ8Wc3xMFMHTDb0K3JBjqkARzBJy8PBahNCYyol5r6EroO12O1ncSsQQjDGD2n4aUQP5GdiLygGbPImMJa8MAYoil2mH38F5OdNel0m2LdjLuDbK4aFJc4nvgBOH31qGSu%2FEGbr1Oa7P8x1BJobodvCflJkWSQS1r4v8%2FS9ehmaJhPgg74X6VxE5jGjz59h6F0teGKNR6teKWl1Hihxw4Fq8hwxFzji03yB68tggpX%2FOVvALwp&X-Amz-Signature=9a842b5dd32d18b6f982f90fee87c2ceee476a2787ddd89770538b0b4908b051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYXOGFD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCcEH0K8yimQu1wzKhjMsuXssEYOXkot46nQVF8rdkW1gIhAPyHxxBCpJMxXyw8S3WDsTTrBOJiCRB2WTQ2SGLhZZ0%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9tBodGIyOnNQkGpgq3APlkUk8vCnooC2ecxgoxvdW8buV1pqMOX%2FeWrweJ0r3NKkgBU7a7TuHh2B3OqBli81jviicOgoNla7eOP3i4xjUY2hvKpe46W%2BbjlBNApM0zTmmGyU1IGXHqeBdobJO666zfzemLrmZAInxyCWgp3O3RhecP81Cs3P7dAxhI4CzUdpTI7i7eIMISQ3a4sQSXD6mUzhsQ%2FeiThmqGWjNx7o81%2F980CX9bV9ldeQi9Nk8yKjZl83qCKLq%2BGRCy3CJ8fmKKcqbAkhuBuwiq6mf7l6Mt9LDIc2MU5DdfCHP9x5GGPDRO%2BI2h4DGQ%2BVk9t7jradeShpwrjHQ4HFIdqYORIoxCKsTbeEfSQpbMlGyyEnyG4wPI4Uwv524KVf7bWaisgDWTZ2JTmmefix2pv6XavpBrG%2BA%2FAVKjuYfxBIzy1GwRSBWPgIc8%2FVkPqBxfCLIANB%2F3KybK9iM1bsDP9uFcIsqkTDMhYUEsydHlMv7A7To6DJw7MtK4%2FzmUGhLbi18t2tF8UQBw%2FUkuuK5ec20EEWVD%2FktJ7p7iiF3jrosiSvz5SgtQDkPDMRj0YaGbOEzgaefpy4CE%2Bg4nvyALq3HQHVezRcW1X1ZLbE8AX9AY5qzWLuluPrZ8Wc3xMFMHTDb0K3JBjqkARzBJy8PBahNCYyol5r6EroO12O1ncSsQQjDGD2n4aUQP5GdiLygGbPImMJa8MAYoil2mH38F5OdNel0m2LdjLuDbK4aFJc4nvgBOH31qGSu%2FEGbr1Oa7P8x1BJobodvCflJkWSQS1r4v8%2FS9ehmaJhPgg74X6VxE5jGjz59h6F0teGKNR6teKWl1Hihxw4Fq8hwxFzji03yB68tggpX%2FOVvALwp&X-Amz-Signature=5a0bba261f9d64aa42f68c4edf35d909134c4d14e79d8a933b2bbdf2c99df0bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYXOGFD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCcEH0K8yimQu1wzKhjMsuXssEYOXkot46nQVF8rdkW1gIhAPyHxxBCpJMxXyw8S3WDsTTrBOJiCRB2WTQ2SGLhZZ0%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9tBodGIyOnNQkGpgq3APlkUk8vCnooC2ecxgoxvdW8buV1pqMOX%2FeWrweJ0r3NKkgBU7a7TuHh2B3OqBli81jviicOgoNla7eOP3i4xjUY2hvKpe46W%2BbjlBNApM0zTmmGyU1IGXHqeBdobJO666zfzemLrmZAInxyCWgp3O3RhecP81Cs3P7dAxhI4CzUdpTI7i7eIMISQ3a4sQSXD6mUzhsQ%2FeiThmqGWjNx7o81%2F980CX9bV9ldeQi9Nk8yKjZl83qCKLq%2BGRCy3CJ8fmKKcqbAkhuBuwiq6mf7l6Mt9LDIc2MU5DdfCHP9x5GGPDRO%2BI2h4DGQ%2BVk9t7jradeShpwrjHQ4HFIdqYORIoxCKsTbeEfSQpbMlGyyEnyG4wPI4Uwv524KVf7bWaisgDWTZ2JTmmefix2pv6XavpBrG%2BA%2FAVKjuYfxBIzy1GwRSBWPgIc8%2FVkPqBxfCLIANB%2F3KybK9iM1bsDP9uFcIsqkTDMhYUEsydHlMv7A7To6DJw7MtK4%2FzmUGhLbi18t2tF8UQBw%2FUkuuK5ec20EEWVD%2FktJ7p7iiF3jrosiSvz5SgtQDkPDMRj0YaGbOEzgaefpy4CE%2Bg4nvyALq3HQHVezRcW1X1ZLbE8AX9AY5qzWLuluPrZ8Wc3xMFMHTDb0K3JBjqkARzBJy8PBahNCYyol5r6EroO12O1ncSsQQjDGD2n4aUQP5GdiLygGbPImMJa8MAYoil2mH38F5OdNel0m2LdjLuDbK4aFJc4nvgBOH31qGSu%2FEGbr1Oa7P8x1BJobodvCflJkWSQS1r4v8%2FS9ehmaJhPgg74X6VxE5jGjz59h6F0teGKNR6teKWl1Hihxw4Fq8hwxFzji03yB68tggpX%2FOVvALwp&X-Amz-Signature=43cd587fc2602b2e3f0d8187eb98c807cdf2097f77a1d34cc5922ffb8c8283d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYXOGFD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCcEH0K8yimQu1wzKhjMsuXssEYOXkot46nQVF8rdkW1gIhAPyHxxBCpJMxXyw8S3WDsTTrBOJiCRB2WTQ2SGLhZZ0%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9tBodGIyOnNQkGpgq3APlkUk8vCnooC2ecxgoxvdW8buV1pqMOX%2FeWrweJ0r3NKkgBU7a7TuHh2B3OqBli81jviicOgoNla7eOP3i4xjUY2hvKpe46W%2BbjlBNApM0zTmmGyU1IGXHqeBdobJO666zfzemLrmZAInxyCWgp3O3RhecP81Cs3P7dAxhI4CzUdpTI7i7eIMISQ3a4sQSXD6mUzhsQ%2FeiThmqGWjNx7o81%2F980CX9bV9ldeQi9Nk8yKjZl83qCKLq%2BGRCy3CJ8fmKKcqbAkhuBuwiq6mf7l6Mt9LDIc2MU5DdfCHP9x5GGPDRO%2BI2h4DGQ%2BVk9t7jradeShpwrjHQ4HFIdqYORIoxCKsTbeEfSQpbMlGyyEnyG4wPI4Uwv524KVf7bWaisgDWTZ2JTmmefix2pv6XavpBrG%2BA%2FAVKjuYfxBIzy1GwRSBWPgIc8%2FVkPqBxfCLIANB%2F3KybK9iM1bsDP9uFcIsqkTDMhYUEsydHlMv7A7To6DJw7MtK4%2FzmUGhLbi18t2tF8UQBw%2FUkuuK5ec20EEWVD%2FktJ7p7iiF3jrosiSvz5SgtQDkPDMRj0YaGbOEzgaefpy4CE%2Bg4nvyALq3HQHVezRcW1X1ZLbE8AX9AY5qzWLuluPrZ8Wc3xMFMHTDb0K3JBjqkARzBJy8PBahNCYyol5r6EroO12O1ncSsQQjDGD2n4aUQP5GdiLygGbPImMJa8MAYoil2mH38F5OdNel0m2LdjLuDbK4aFJc4nvgBOH31qGSu%2FEGbr1Oa7P8x1BJobodvCflJkWSQS1r4v8%2FS9ehmaJhPgg74X6VxE5jGjz59h6F0teGKNR6teKWl1Hihxw4Fq8hwxFzji03yB68tggpX%2FOVvALwp&X-Amz-Signature=663614df7347a21586fed30dc498bf02f4771c67cb5317a152eea8f96210830d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYXOGFD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCcEH0K8yimQu1wzKhjMsuXssEYOXkot46nQVF8rdkW1gIhAPyHxxBCpJMxXyw8S3WDsTTrBOJiCRB2WTQ2SGLhZZ0%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9tBodGIyOnNQkGpgq3APlkUk8vCnooC2ecxgoxvdW8buV1pqMOX%2FeWrweJ0r3NKkgBU7a7TuHh2B3OqBli81jviicOgoNla7eOP3i4xjUY2hvKpe46W%2BbjlBNApM0zTmmGyU1IGXHqeBdobJO666zfzemLrmZAInxyCWgp3O3RhecP81Cs3P7dAxhI4CzUdpTI7i7eIMISQ3a4sQSXD6mUzhsQ%2FeiThmqGWjNx7o81%2F980CX9bV9ldeQi9Nk8yKjZl83qCKLq%2BGRCy3CJ8fmKKcqbAkhuBuwiq6mf7l6Mt9LDIc2MU5DdfCHP9x5GGPDRO%2BI2h4DGQ%2BVk9t7jradeShpwrjHQ4HFIdqYORIoxCKsTbeEfSQpbMlGyyEnyG4wPI4Uwv524KVf7bWaisgDWTZ2JTmmefix2pv6XavpBrG%2BA%2FAVKjuYfxBIzy1GwRSBWPgIc8%2FVkPqBxfCLIANB%2F3KybK9iM1bsDP9uFcIsqkTDMhYUEsydHlMv7A7To6DJw7MtK4%2FzmUGhLbi18t2tF8UQBw%2FUkuuK5ec20EEWVD%2FktJ7p7iiF3jrosiSvz5SgtQDkPDMRj0YaGbOEzgaefpy4CE%2Bg4nvyALq3HQHVezRcW1X1ZLbE8AX9AY5qzWLuluPrZ8Wc3xMFMHTDb0K3JBjqkARzBJy8PBahNCYyol5r6EroO12O1ncSsQQjDGD2n4aUQP5GdiLygGbPImMJa8MAYoil2mH38F5OdNel0m2LdjLuDbK4aFJc4nvgBOH31qGSu%2FEGbr1Oa7P8x1BJobodvCflJkWSQS1r4v8%2FS9ehmaJhPgg74X6VxE5jGjz59h6F0teGKNR6teKWl1Hihxw4Fq8hwxFzji03yB68tggpX%2FOVvALwp&X-Amz-Signature=88848169d43aa22a95b04eb3e4a3ff154c9befbdf1d5a7b8c37ca013d24128ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYXOGFD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCcEH0K8yimQu1wzKhjMsuXssEYOXkot46nQVF8rdkW1gIhAPyHxxBCpJMxXyw8S3WDsTTrBOJiCRB2WTQ2SGLhZZ0%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9tBodGIyOnNQkGpgq3APlkUk8vCnooC2ecxgoxvdW8buV1pqMOX%2FeWrweJ0r3NKkgBU7a7TuHh2B3OqBli81jviicOgoNla7eOP3i4xjUY2hvKpe46W%2BbjlBNApM0zTmmGyU1IGXHqeBdobJO666zfzemLrmZAInxyCWgp3O3RhecP81Cs3P7dAxhI4CzUdpTI7i7eIMISQ3a4sQSXD6mUzhsQ%2FeiThmqGWjNx7o81%2F980CX9bV9ldeQi9Nk8yKjZl83qCKLq%2BGRCy3CJ8fmKKcqbAkhuBuwiq6mf7l6Mt9LDIc2MU5DdfCHP9x5GGPDRO%2BI2h4DGQ%2BVk9t7jradeShpwrjHQ4HFIdqYORIoxCKsTbeEfSQpbMlGyyEnyG4wPI4Uwv524KVf7bWaisgDWTZ2JTmmefix2pv6XavpBrG%2BA%2FAVKjuYfxBIzy1GwRSBWPgIc8%2FVkPqBxfCLIANB%2F3KybK9iM1bsDP9uFcIsqkTDMhYUEsydHlMv7A7To6DJw7MtK4%2FzmUGhLbi18t2tF8UQBw%2FUkuuK5ec20EEWVD%2FktJ7p7iiF3jrosiSvz5SgtQDkPDMRj0YaGbOEzgaefpy4CE%2Bg4nvyALq3HQHVezRcW1X1ZLbE8AX9AY5qzWLuluPrZ8Wc3xMFMHTDb0K3JBjqkARzBJy8PBahNCYyol5r6EroO12O1ncSsQQjDGD2n4aUQP5GdiLygGbPImMJa8MAYoil2mH38F5OdNel0m2LdjLuDbK4aFJc4nvgBOH31qGSu%2FEGbr1Oa7P8x1BJobodvCflJkWSQS1r4v8%2FS9ehmaJhPgg74X6VxE5jGjz59h6F0teGKNR6teKWl1Hihxw4Fq8hwxFzji03yB68tggpX%2FOVvALwp&X-Amz-Signature=596961fbfdc0e20f2a82273bd03d7d677c75f1c8d07ca0f63ece29c8eb82a22d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYXOGFD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCcEH0K8yimQu1wzKhjMsuXssEYOXkot46nQVF8rdkW1gIhAPyHxxBCpJMxXyw8S3WDsTTrBOJiCRB2WTQ2SGLhZZ0%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9tBodGIyOnNQkGpgq3APlkUk8vCnooC2ecxgoxvdW8buV1pqMOX%2FeWrweJ0r3NKkgBU7a7TuHh2B3OqBli81jviicOgoNla7eOP3i4xjUY2hvKpe46W%2BbjlBNApM0zTmmGyU1IGXHqeBdobJO666zfzemLrmZAInxyCWgp3O3RhecP81Cs3P7dAxhI4CzUdpTI7i7eIMISQ3a4sQSXD6mUzhsQ%2FeiThmqGWjNx7o81%2F980CX9bV9ldeQi9Nk8yKjZl83qCKLq%2BGRCy3CJ8fmKKcqbAkhuBuwiq6mf7l6Mt9LDIc2MU5DdfCHP9x5GGPDRO%2BI2h4DGQ%2BVk9t7jradeShpwrjHQ4HFIdqYORIoxCKsTbeEfSQpbMlGyyEnyG4wPI4Uwv524KVf7bWaisgDWTZ2JTmmefix2pv6XavpBrG%2BA%2FAVKjuYfxBIzy1GwRSBWPgIc8%2FVkPqBxfCLIANB%2F3KybK9iM1bsDP9uFcIsqkTDMhYUEsydHlMv7A7To6DJw7MtK4%2FzmUGhLbi18t2tF8UQBw%2FUkuuK5ec20EEWVD%2FktJ7p7iiF3jrosiSvz5SgtQDkPDMRj0YaGbOEzgaefpy4CE%2Bg4nvyALq3HQHVezRcW1X1ZLbE8AX9AY5qzWLuluPrZ8Wc3xMFMHTDb0K3JBjqkARzBJy8PBahNCYyol5r6EroO12O1ncSsQQjDGD2n4aUQP5GdiLygGbPImMJa8MAYoil2mH38F5OdNel0m2LdjLuDbK4aFJc4nvgBOH31qGSu%2FEGbr1Oa7P8x1BJobodvCflJkWSQS1r4v8%2FS9ehmaJhPgg74X6VxE5jGjz59h6F0teGKNR6teKWl1Hihxw4Fq8hwxFzji03yB68tggpX%2FOVvALwp&X-Amz-Signature=535f6b4e3e51a4169ec3c5b331f482a93634abb29ecf31ab47775b8e91416c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
