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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3UBQC5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGQB%2FM0oKZVDjxH%2F3h4bYx65wK664l9uNYPy%2BJHRwOYIAiEA8WuPMYZftt7DX0SDbt7N522CMexQJFVUlMd5b1pHAoQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOpJR9i7Ipn5sukuSrcA5lJVm%2BPFxUqXeEWJjFm4mmQUbH9lMmgBA4%2Be6cxS%2B6XpA5cxufdjFss6S61%2BClvw3qb2X7IOeP7l4piHsTP8hdZBoZz49lSc4vKJtt7q7BDYH44PdCvo4BIWdgE1UYzgPu%2B%2FNw9Xt1%2BHtZkc7oXtkF%2BpMppSJXG0hmKxCjtExow2wWXWOvgW%2FyGZsTsgU7V7PO3CscOGoYP12sNtlYRWBgFr2Oiye3swokTBdXvH3rsalF1JiU8FRLtsgjyZ1pbw5%2FIDivIz5sYjNQP1R6y8TzeVWiqOEN7lH8wn6zkgL87XCDiQS5Rzx1gxmDMAc2SjtydbyKW0TeSr9A9iyh1sFdXhTDYxgosT1qp%2B4ufZYmK8OpD7tJv2vp%2BmbfmQJnhnIzc0gg6SqWdF%2BflApebthbIfrmUJQZ2r4whG9kXwYMiToFNb3kAwMsak%2B6un1K8cgRHsokaI4AbUfnC9Jc%2FBzs2k1XK4h9d5cD6dFskL2RJPTqwMCRJAHtxf6MuvFa623El5xIBYSoePw4nC%2FuV6kNsd1IAetF3HjsDc386GumjpGAuE9QCQdy3vY7F0oNHg28FocQMiOCZkTbD%2BGLXZ3RQaAq6Gahc1hYjvM52dPcKXaUJJM3LhKxEP9ZOMPqMwcEGOqUBAW36kBVebzqpiUR3Oeu6GsjGcTXWgmlIUEcwMZO3MRvePwp8RmrjAe4BpZm1zk998pGBOMc3C7SedYaZAauXDVTu6XJWQeem0n63Nly%2FfHAD6A16UWpHhAQMmTX5h8iU0xOp2LIc61IKyKMQb9W6XrffJmxNOjD7ohx%2BsrUO5C2W0x1jGbJ5mNP8hd8c689XCrOAOD7alT74koxZcI%2FMOlVwa1qT&X-Amz-Signature=385c4c380b56c836cb6bf7c92760c259728ac4dd61be9474a57014275a31f25d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3UBQC5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGQB%2FM0oKZVDjxH%2F3h4bYx65wK664l9uNYPy%2BJHRwOYIAiEA8WuPMYZftt7DX0SDbt7N522CMexQJFVUlMd5b1pHAoQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOpJR9i7Ipn5sukuSrcA5lJVm%2BPFxUqXeEWJjFm4mmQUbH9lMmgBA4%2Be6cxS%2B6XpA5cxufdjFss6S61%2BClvw3qb2X7IOeP7l4piHsTP8hdZBoZz49lSc4vKJtt7q7BDYH44PdCvo4BIWdgE1UYzgPu%2B%2FNw9Xt1%2BHtZkc7oXtkF%2BpMppSJXG0hmKxCjtExow2wWXWOvgW%2FyGZsTsgU7V7PO3CscOGoYP12sNtlYRWBgFr2Oiye3swokTBdXvH3rsalF1JiU8FRLtsgjyZ1pbw5%2FIDivIz5sYjNQP1R6y8TzeVWiqOEN7lH8wn6zkgL87XCDiQS5Rzx1gxmDMAc2SjtydbyKW0TeSr9A9iyh1sFdXhTDYxgosT1qp%2B4ufZYmK8OpD7tJv2vp%2BmbfmQJnhnIzc0gg6SqWdF%2BflApebthbIfrmUJQZ2r4whG9kXwYMiToFNb3kAwMsak%2B6un1K8cgRHsokaI4AbUfnC9Jc%2FBzs2k1XK4h9d5cD6dFskL2RJPTqwMCRJAHtxf6MuvFa623El5xIBYSoePw4nC%2FuV6kNsd1IAetF3HjsDc386GumjpGAuE9QCQdy3vY7F0oNHg28FocQMiOCZkTbD%2BGLXZ3RQaAq6Gahc1hYjvM52dPcKXaUJJM3LhKxEP9ZOMPqMwcEGOqUBAW36kBVebzqpiUR3Oeu6GsjGcTXWgmlIUEcwMZO3MRvePwp8RmrjAe4BpZm1zk998pGBOMc3C7SedYaZAauXDVTu6XJWQeem0n63Nly%2FfHAD6A16UWpHhAQMmTX5h8iU0xOp2LIc61IKyKMQb9W6XrffJmxNOjD7ohx%2BsrUO5C2W0x1jGbJ5mNP8hd8c689XCrOAOD7alT74koxZcI%2FMOlVwa1qT&X-Amz-Signature=7ed91598866a68ed92b2482f81e9a96c2ee83fe4a9c99752d01e8b34437fc83d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3UBQC5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGQB%2FM0oKZVDjxH%2F3h4bYx65wK664l9uNYPy%2BJHRwOYIAiEA8WuPMYZftt7DX0SDbt7N522CMexQJFVUlMd5b1pHAoQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOpJR9i7Ipn5sukuSrcA5lJVm%2BPFxUqXeEWJjFm4mmQUbH9lMmgBA4%2Be6cxS%2B6XpA5cxufdjFss6S61%2BClvw3qb2X7IOeP7l4piHsTP8hdZBoZz49lSc4vKJtt7q7BDYH44PdCvo4BIWdgE1UYzgPu%2B%2FNw9Xt1%2BHtZkc7oXtkF%2BpMppSJXG0hmKxCjtExow2wWXWOvgW%2FyGZsTsgU7V7PO3CscOGoYP12sNtlYRWBgFr2Oiye3swokTBdXvH3rsalF1JiU8FRLtsgjyZ1pbw5%2FIDivIz5sYjNQP1R6y8TzeVWiqOEN7lH8wn6zkgL87XCDiQS5Rzx1gxmDMAc2SjtydbyKW0TeSr9A9iyh1sFdXhTDYxgosT1qp%2B4ufZYmK8OpD7tJv2vp%2BmbfmQJnhnIzc0gg6SqWdF%2BflApebthbIfrmUJQZ2r4whG9kXwYMiToFNb3kAwMsak%2B6un1K8cgRHsokaI4AbUfnC9Jc%2FBzs2k1XK4h9d5cD6dFskL2RJPTqwMCRJAHtxf6MuvFa623El5xIBYSoePw4nC%2FuV6kNsd1IAetF3HjsDc386GumjpGAuE9QCQdy3vY7F0oNHg28FocQMiOCZkTbD%2BGLXZ3RQaAq6Gahc1hYjvM52dPcKXaUJJM3LhKxEP9ZOMPqMwcEGOqUBAW36kBVebzqpiUR3Oeu6GsjGcTXWgmlIUEcwMZO3MRvePwp8RmrjAe4BpZm1zk998pGBOMc3C7SedYaZAauXDVTu6XJWQeem0n63Nly%2FfHAD6A16UWpHhAQMmTX5h8iU0xOp2LIc61IKyKMQb9W6XrffJmxNOjD7ohx%2BsrUO5C2W0x1jGbJ5mNP8hd8c689XCrOAOD7alT74koxZcI%2FMOlVwa1qT&X-Amz-Signature=0f732c264fd981a873c02bf1bd5d35c5aea33cf8e885133a01fff1003eeb9993&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3UBQC5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGQB%2FM0oKZVDjxH%2F3h4bYx65wK664l9uNYPy%2BJHRwOYIAiEA8WuPMYZftt7DX0SDbt7N522CMexQJFVUlMd5b1pHAoQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOpJR9i7Ipn5sukuSrcA5lJVm%2BPFxUqXeEWJjFm4mmQUbH9lMmgBA4%2Be6cxS%2B6XpA5cxufdjFss6S61%2BClvw3qb2X7IOeP7l4piHsTP8hdZBoZz49lSc4vKJtt7q7BDYH44PdCvo4BIWdgE1UYzgPu%2B%2FNw9Xt1%2BHtZkc7oXtkF%2BpMppSJXG0hmKxCjtExow2wWXWOvgW%2FyGZsTsgU7V7PO3CscOGoYP12sNtlYRWBgFr2Oiye3swokTBdXvH3rsalF1JiU8FRLtsgjyZ1pbw5%2FIDivIz5sYjNQP1R6y8TzeVWiqOEN7lH8wn6zkgL87XCDiQS5Rzx1gxmDMAc2SjtydbyKW0TeSr9A9iyh1sFdXhTDYxgosT1qp%2B4ufZYmK8OpD7tJv2vp%2BmbfmQJnhnIzc0gg6SqWdF%2BflApebthbIfrmUJQZ2r4whG9kXwYMiToFNb3kAwMsak%2B6un1K8cgRHsokaI4AbUfnC9Jc%2FBzs2k1XK4h9d5cD6dFskL2RJPTqwMCRJAHtxf6MuvFa623El5xIBYSoePw4nC%2FuV6kNsd1IAetF3HjsDc386GumjpGAuE9QCQdy3vY7F0oNHg28FocQMiOCZkTbD%2BGLXZ3RQaAq6Gahc1hYjvM52dPcKXaUJJM3LhKxEP9ZOMPqMwcEGOqUBAW36kBVebzqpiUR3Oeu6GsjGcTXWgmlIUEcwMZO3MRvePwp8RmrjAe4BpZm1zk998pGBOMc3C7SedYaZAauXDVTu6XJWQeem0n63Nly%2FfHAD6A16UWpHhAQMmTX5h8iU0xOp2LIc61IKyKMQb9W6XrffJmxNOjD7ohx%2BsrUO5C2W0x1jGbJ5mNP8hd8c689XCrOAOD7alT74koxZcI%2FMOlVwa1qT&X-Amz-Signature=196c9795bc818e5b9eb8d617a953d58739afc68b3af7a9fd00dd6850ae457e7c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3UBQC5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGQB%2FM0oKZVDjxH%2F3h4bYx65wK664l9uNYPy%2BJHRwOYIAiEA8WuPMYZftt7DX0SDbt7N522CMexQJFVUlMd5b1pHAoQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOpJR9i7Ipn5sukuSrcA5lJVm%2BPFxUqXeEWJjFm4mmQUbH9lMmgBA4%2Be6cxS%2B6XpA5cxufdjFss6S61%2BClvw3qb2X7IOeP7l4piHsTP8hdZBoZz49lSc4vKJtt7q7BDYH44PdCvo4BIWdgE1UYzgPu%2B%2FNw9Xt1%2BHtZkc7oXtkF%2BpMppSJXG0hmKxCjtExow2wWXWOvgW%2FyGZsTsgU7V7PO3CscOGoYP12sNtlYRWBgFr2Oiye3swokTBdXvH3rsalF1JiU8FRLtsgjyZ1pbw5%2FIDivIz5sYjNQP1R6y8TzeVWiqOEN7lH8wn6zkgL87XCDiQS5Rzx1gxmDMAc2SjtydbyKW0TeSr9A9iyh1sFdXhTDYxgosT1qp%2B4ufZYmK8OpD7tJv2vp%2BmbfmQJnhnIzc0gg6SqWdF%2BflApebthbIfrmUJQZ2r4whG9kXwYMiToFNb3kAwMsak%2B6un1K8cgRHsokaI4AbUfnC9Jc%2FBzs2k1XK4h9d5cD6dFskL2RJPTqwMCRJAHtxf6MuvFa623El5xIBYSoePw4nC%2FuV6kNsd1IAetF3HjsDc386GumjpGAuE9QCQdy3vY7F0oNHg28FocQMiOCZkTbD%2BGLXZ3RQaAq6Gahc1hYjvM52dPcKXaUJJM3LhKxEP9ZOMPqMwcEGOqUBAW36kBVebzqpiUR3Oeu6GsjGcTXWgmlIUEcwMZO3MRvePwp8RmrjAe4BpZm1zk998pGBOMc3C7SedYaZAauXDVTu6XJWQeem0n63Nly%2FfHAD6A16UWpHhAQMmTX5h8iU0xOp2LIc61IKyKMQb9W6XrffJmxNOjD7ohx%2BsrUO5C2W0x1jGbJ5mNP8hd8c689XCrOAOD7alT74koxZcI%2FMOlVwa1qT&X-Amz-Signature=878ecdad5a52a89b3dd01d199fbd480e059cbe16bf9197913c6bfbead9552f03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3UBQC5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGQB%2FM0oKZVDjxH%2F3h4bYx65wK664l9uNYPy%2BJHRwOYIAiEA8WuPMYZftt7DX0SDbt7N522CMexQJFVUlMd5b1pHAoQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOpJR9i7Ipn5sukuSrcA5lJVm%2BPFxUqXeEWJjFm4mmQUbH9lMmgBA4%2Be6cxS%2B6XpA5cxufdjFss6S61%2BClvw3qb2X7IOeP7l4piHsTP8hdZBoZz49lSc4vKJtt7q7BDYH44PdCvo4BIWdgE1UYzgPu%2B%2FNw9Xt1%2BHtZkc7oXtkF%2BpMppSJXG0hmKxCjtExow2wWXWOvgW%2FyGZsTsgU7V7PO3CscOGoYP12sNtlYRWBgFr2Oiye3swokTBdXvH3rsalF1JiU8FRLtsgjyZ1pbw5%2FIDivIz5sYjNQP1R6y8TzeVWiqOEN7lH8wn6zkgL87XCDiQS5Rzx1gxmDMAc2SjtydbyKW0TeSr9A9iyh1sFdXhTDYxgosT1qp%2B4ufZYmK8OpD7tJv2vp%2BmbfmQJnhnIzc0gg6SqWdF%2BflApebthbIfrmUJQZ2r4whG9kXwYMiToFNb3kAwMsak%2B6un1K8cgRHsokaI4AbUfnC9Jc%2FBzs2k1XK4h9d5cD6dFskL2RJPTqwMCRJAHtxf6MuvFa623El5xIBYSoePw4nC%2FuV6kNsd1IAetF3HjsDc386GumjpGAuE9QCQdy3vY7F0oNHg28FocQMiOCZkTbD%2BGLXZ3RQaAq6Gahc1hYjvM52dPcKXaUJJM3LhKxEP9ZOMPqMwcEGOqUBAW36kBVebzqpiUR3Oeu6GsjGcTXWgmlIUEcwMZO3MRvePwp8RmrjAe4BpZm1zk998pGBOMc3C7SedYaZAauXDVTu6XJWQeem0n63Nly%2FfHAD6A16UWpHhAQMmTX5h8iU0xOp2LIc61IKyKMQb9W6XrffJmxNOjD7ohx%2BsrUO5C2W0x1jGbJ5mNP8hd8c689XCrOAOD7alT74koxZcI%2FMOlVwa1qT&X-Amz-Signature=b4d871fae5045301f67be269eca03c7ff30630cd4dc74f762e1f5b6b937e551b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3UBQC5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGQB%2FM0oKZVDjxH%2F3h4bYx65wK664l9uNYPy%2BJHRwOYIAiEA8WuPMYZftt7DX0SDbt7N522CMexQJFVUlMd5b1pHAoQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOpJR9i7Ipn5sukuSrcA5lJVm%2BPFxUqXeEWJjFm4mmQUbH9lMmgBA4%2Be6cxS%2B6XpA5cxufdjFss6S61%2BClvw3qb2X7IOeP7l4piHsTP8hdZBoZz49lSc4vKJtt7q7BDYH44PdCvo4BIWdgE1UYzgPu%2B%2FNw9Xt1%2BHtZkc7oXtkF%2BpMppSJXG0hmKxCjtExow2wWXWOvgW%2FyGZsTsgU7V7PO3CscOGoYP12sNtlYRWBgFr2Oiye3swokTBdXvH3rsalF1JiU8FRLtsgjyZ1pbw5%2FIDivIz5sYjNQP1R6y8TzeVWiqOEN7lH8wn6zkgL87XCDiQS5Rzx1gxmDMAc2SjtydbyKW0TeSr9A9iyh1sFdXhTDYxgosT1qp%2B4ufZYmK8OpD7tJv2vp%2BmbfmQJnhnIzc0gg6SqWdF%2BflApebthbIfrmUJQZ2r4whG9kXwYMiToFNb3kAwMsak%2B6un1K8cgRHsokaI4AbUfnC9Jc%2FBzs2k1XK4h9d5cD6dFskL2RJPTqwMCRJAHtxf6MuvFa623El5xIBYSoePw4nC%2FuV6kNsd1IAetF3HjsDc386GumjpGAuE9QCQdy3vY7F0oNHg28FocQMiOCZkTbD%2BGLXZ3RQaAq6Gahc1hYjvM52dPcKXaUJJM3LhKxEP9ZOMPqMwcEGOqUBAW36kBVebzqpiUR3Oeu6GsjGcTXWgmlIUEcwMZO3MRvePwp8RmrjAe4BpZm1zk998pGBOMc3C7SedYaZAauXDVTu6XJWQeem0n63Nly%2FfHAD6A16UWpHhAQMmTX5h8iU0xOp2LIc61IKyKMQb9W6XrffJmxNOjD7ohx%2BsrUO5C2W0x1jGbJ5mNP8hd8c689XCrOAOD7alT74koxZcI%2FMOlVwa1qT&X-Amz-Signature=518cd554d7d4e7c1984d54e62f589267f6fa0253c1acee1017196d53b0266569&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3UBQC5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGQB%2FM0oKZVDjxH%2F3h4bYx65wK664l9uNYPy%2BJHRwOYIAiEA8WuPMYZftt7DX0SDbt7N522CMexQJFVUlMd5b1pHAoQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOpJR9i7Ipn5sukuSrcA5lJVm%2BPFxUqXeEWJjFm4mmQUbH9lMmgBA4%2Be6cxS%2B6XpA5cxufdjFss6S61%2BClvw3qb2X7IOeP7l4piHsTP8hdZBoZz49lSc4vKJtt7q7BDYH44PdCvo4BIWdgE1UYzgPu%2B%2FNw9Xt1%2BHtZkc7oXtkF%2BpMppSJXG0hmKxCjtExow2wWXWOvgW%2FyGZsTsgU7V7PO3CscOGoYP12sNtlYRWBgFr2Oiye3swokTBdXvH3rsalF1JiU8FRLtsgjyZ1pbw5%2FIDivIz5sYjNQP1R6y8TzeVWiqOEN7lH8wn6zkgL87XCDiQS5Rzx1gxmDMAc2SjtydbyKW0TeSr9A9iyh1sFdXhTDYxgosT1qp%2B4ufZYmK8OpD7tJv2vp%2BmbfmQJnhnIzc0gg6SqWdF%2BflApebthbIfrmUJQZ2r4whG9kXwYMiToFNb3kAwMsak%2B6un1K8cgRHsokaI4AbUfnC9Jc%2FBzs2k1XK4h9d5cD6dFskL2RJPTqwMCRJAHtxf6MuvFa623El5xIBYSoePw4nC%2FuV6kNsd1IAetF3HjsDc386GumjpGAuE9QCQdy3vY7F0oNHg28FocQMiOCZkTbD%2BGLXZ3RQaAq6Gahc1hYjvM52dPcKXaUJJM3LhKxEP9ZOMPqMwcEGOqUBAW36kBVebzqpiUR3Oeu6GsjGcTXWgmlIUEcwMZO3MRvePwp8RmrjAe4BpZm1zk998pGBOMc3C7SedYaZAauXDVTu6XJWQeem0n63Nly%2FfHAD6A16UWpHhAQMmTX5h8iU0xOp2LIc61IKyKMQb9W6XrffJmxNOjD7ohx%2BsrUO5C2W0x1jGbJ5mNP8hd8c689XCrOAOD7alT74koxZcI%2FMOlVwa1qT&X-Amz-Signature=1e8c1aa816374777cb2926233a7d2d771991b8442cb356623e6bbf6d89f94dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
