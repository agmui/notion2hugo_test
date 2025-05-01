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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYGOSCSP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIBZW4xuvhSv%2BlsPGGXSE3jRZgQuAjX%2BNKj%2FC5AT1NnPBAiAQF0c%2FtHArfL%2Br%2BEdF6O7FQoaQzRGHe3oyTiaYMX7aqSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKrDezFPZxcFsPOo5KtwDhfEyGdCEz8Ezd%2FtPIUvBocaY6XBPka3%2FxCm7nmMzEn8MfH1Or9Vt5YcTF%2Bwged1aist4qr8u1ULFby%2FSRVUTpcSxFZ3IXrYFwXKKY8txmSY%2BR57kbIQFWK8k8Asn2aPrRUzfvDXv6uNy%2FNs2UXSGDd9lZ7JfkDvwFo4hYd2OeP0iM20WZJlNX3HfNZ42Qchykd60B538BoV63FwIixo%2FNLXF%2FkyKydY2cWSlvanaKaTfg0dBcz2wDkyDAwfOmz5FbRLG8Hu16%2B0hTZe6dgi2bUaevwcf24fIATObTXQmL2%2FvQr5AhieDoVb8bRSBqwTX8pViASFYH6gYbCg6PBTpl0kFhJOVywbL3gRIfQtYBrdHBzpYCxYGvp0zf4Da7mT6GIcevD4TQfZDzO7x0%2BiyZ3xaiVa%2BxfBmtNYJLCwD3QpFebRUS%2FEie84eJE3yPm0VOOycxLdS8z9ZUZXRB6NyhxKKuY61yaUAk%2BZWVKuaatDVo7jFzEu0O6NJcF5h%2FxrXnHU458qTvko0ytIZ9ej8YS9DZsAqjNYpN1Dbp5wci2Sp29n5o90tVGHTYvIF%2FeXa%2BI3EKtkZLXKtvPmG12zAPqHjmPCzmenuau%2B4Y%2FfRajjA0q29PtWue13fOZsw2dnLwAY6pgF8tn4RGZyKA4LkWeWx20A5%2BhbX%2B%2FeTI3Ru11XmBu12%2FYZUEtrBUoSHd7N3XByIJMPh5Gn9%2B3OVhxfAKWuT%2FkLkfeqQlwPpqJwhAkbszbidtvIdXsZp4J0d6ckyG0OIIIRhegb8jd0ZVme19FSOBDmxvlsNKSkLns8qtc1ZLR1tV9D7BxzJJi%2BAolqLCwCIxYf4PRxf%2FC2KNRfp2Zn%2BdNRFwWHtg70n&X-Amz-Signature=903fcbf16c99f68bf624b83222ae9afcf9a15c7d0ba0d40932d121780d17c3f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYGOSCSP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIBZW4xuvhSv%2BlsPGGXSE3jRZgQuAjX%2BNKj%2FC5AT1NnPBAiAQF0c%2FtHArfL%2Br%2BEdF6O7FQoaQzRGHe3oyTiaYMX7aqSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKrDezFPZxcFsPOo5KtwDhfEyGdCEz8Ezd%2FtPIUvBocaY6XBPka3%2FxCm7nmMzEn8MfH1Or9Vt5YcTF%2Bwged1aist4qr8u1ULFby%2FSRVUTpcSxFZ3IXrYFwXKKY8txmSY%2BR57kbIQFWK8k8Asn2aPrRUzfvDXv6uNy%2FNs2UXSGDd9lZ7JfkDvwFo4hYd2OeP0iM20WZJlNX3HfNZ42Qchykd60B538BoV63FwIixo%2FNLXF%2FkyKydY2cWSlvanaKaTfg0dBcz2wDkyDAwfOmz5FbRLG8Hu16%2B0hTZe6dgi2bUaevwcf24fIATObTXQmL2%2FvQr5AhieDoVb8bRSBqwTX8pViASFYH6gYbCg6PBTpl0kFhJOVywbL3gRIfQtYBrdHBzpYCxYGvp0zf4Da7mT6GIcevD4TQfZDzO7x0%2BiyZ3xaiVa%2BxfBmtNYJLCwD3QpFebRUS%2FEie84eJE3yPm0VOOycxLdS8z9ZUZXRB6NyhxKKuY61yaUAk%2BZWVKuaatDVo7jFzEu0O6NJcF5h%2FxrXnHU458qTvko0ytIZ9ej8YS9DZsAqjNYpN1Dbp5wci2Sp29n5o90tVGHTYvIF%2FeXa%2BI3EKtkZLXKtvPmG12zAPqHjmPCzmenuau%2B4Y%2FfRajjA0q29PtWue13fOZsw2dnLwAY6pgF8tn4RGZyKA4LkWeWx20A5%2BhbX%2B%2FeTI3Ru11XmBu12%2FYZUEtrBUoSHd7N3XByIJMPh5Gn9%2B3OVhxfAKWuT%2FkLkfeqQlwPpqJwhAkbszbidtvIdXsZp4J0d6ckyG0OIIIRhegb8jd0ZVme19FSOBDmxvlsNKSkLns8qtc1ZLR1tV9D7BxzJJi%2BAolqLCwCIxYf4PRxf%2FC2KNRfp2Zn%2BdNRFwWHtg70n&X-Amz-Signature=4e6d17ca41f676901be754482aca9ae9db12b01d5bc50e91ac8fcbd8fd49dae3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYGOSCSP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIBZW4xuvhSv%2BlsPGGXSE3jRZgQuAjX%2BNKj%2FC5AT1NnPBAiAQF0c%2FtHArfL%2Br%2BEdF6O7FQoaQzRGHe3oyTiaYMX7aqSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKrDezFPZxcFsPOo5KtwDhfEyGdCEz8Ezd%2FtPIUvBocaY6XBPka3%2FxCm7nmMzEn8MfH1Or9Vt5YcTF%2Bwged1aist4qr8u1ULFby%2FSRVUTpcSxFZ3IXrYFwXKKY8txmSY%2BR57kbIQFWK8k8Asn2aPrRUzfvDXv6uNy%2FNs2UXSGDd9lZ7JfkDvwFo4hYd2OeP0iM20WZJlNX3HfNZ42Qchykd60B538BoV63FwIixo%2FNLXF%2FkyKydY2cWSlvanaKaTfg0dBcz2wDkyDAwfOmz5FbRLG8Hu16%2B0hTZe6dgi2bUaevwcf24fIATObTXQmL2%2FvQr5AhieDoVb8bRSBqwTX8pViASFYH6gYbCg6PBTpl0kFhJOVywbL3gRIfQtYBrdHBzpYCxYGvp0zf4Da7mT6GIcevD4TQfZDzO7x0%2BiyZ3xaiVa%2BxfBmtNYJLCwD3QpFebRUS%2FEie84eJE3yPm0VOOycxLdS8z9ZUZXRB6NyhxKKuY61yaUAk%2BZWVKuaatDVo7jFzEu0O6NJcF5h%2FxrXnHU458qTvko0ytIZ9ej8YS9DZsAqjNYpN1Dbp5wci2Sp29n5o90tVGHTYvIF%2FeXa%2BI3EKtkZLXKtvPmG12zAPqHjmPCzmenuau%2B4Y%2FfRajjA0q29PtWue13fOZsw2dnLwAY6pgF8tn4RGZyKA4LkWeWx20A5%2BhbX%2B%2FeTI3Ru11XmBu12%2FYZUEtrBUoSHd7N3XByIJMPh5Gn9%2B3OVhxfAKWuT%2FkLkfeqQlwPpqJwhAkbszbidtvIdXsZp4J0d6ckyG0OIIIRhegb8jd0ZVme19FSOBDmxvlsNKSkLns8qtc1ZLR1tV9D7BxzJJi%2BAolqLCwCIxYf4PRxf%2FC2KNRfp2Zn%2BdNRFwWHtg70n&X-Amz-Signature=becea6a44052f2a35501abf929ddd53e25339c1c06b4aa8f7a8a24eeebf3d884&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYGOSCSP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIBZW4xuvhSv%2BlsPGGXSE3jRZgQuAjX%2BNKj%2FC5AT1NnPBAiAQF0c%2FtHArfL%2Br%2BEdF6O7FQoaQzRGHe3oyTiaYMX7aqSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKrDezFPZxcFsPOo5KtwDhfEyGdCEz8Ezd%2FtPIUvBocaY6XBPka3%2FxCm7nmMzEn8MfH1Or9Vt5YcTF%2Bwged1aist4qr8u1ULFby%2FSRVUTpcSxFZ3IXrYFwXKKY8txmSY%2BR57kbIQFWK8k8Asn2aPrRUzfvDXv6uNy%2FNs2UXSGDd9lZ7JfkDvwFo4hYd2OeP0iM20WZJlNX3HfNZ42Qchykd60B538BoV63FwIixo%2FNLXF%2FkyKydY2cWSlvanaKaTfg0dBcz2wDkyDAwfOmz5FbRLG8Hu16%2B0hTZe6dgi2bUaevwcf24fIATObTXQmL2%2FvQr5AhieDoVb8bRSBqwTX8pViASFYH6gYbCg6PBTpl0kFhJOVywbL3gRIfQtYBrdHBzpYCxYGvp0zf4Da7mT6GIcevD4TQfZDzO7x0%2BiyZ3xaiVa%2BxfBmtNYJLCwD3QpFebRUS%2FEie84eJE3yPm0VOOycxLdS8z9ZUZXRB6NyhxKKuY61yaUAk%2BZWVKuaatDVo7jFzEu0O6NJcF5h%2FxrXnHU458qTvko0ytIZ9ej8YS9DZsAqjNYpN1Dbp5wci2Sp29n5o90tVGHTYvIF%2FeXa%2BI3EKtkZLXKtvPmG12zAPqHjmPCzmenuau%2B4Y%2FfRajjA0q29PtWue13fOZsw2dnLwAY6pgF8tn4RGZyKA4LkWeWx20A5%2BhbX%2B%2FeTI3Ru11XmBu12%2FYZUEtrBUoSHd7N3XByIJMPh5Gn9%2B3OVhxfAKWuT%2FkLkfeqQlwPpqJwhAkbszbidtvIdXsZp4J0d6ckyG0OIIIRhegb8jd0ZVme19FSOBDmxvlsNKSkLns8qtc1ZLR1tV9D7BxzJJi%2BAolqLCwCIxYf4PRxf%2FC2KNRfp2Zn%2BdNRFwWHtg70n&X-Amz-Signature=e142e36224008449ae69e3d841d360a75a878a0ccf1ca96f2523e8d19c2368a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYGOSCSP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIBZW4xuvhSv%2BlsPGGXSE3jRZgQuAjX%2BNKj%2FC5AT1NnPBAiAQF0c%2FtHArfL%2Br%2BEdF6O7FQoaQzRGHe3oyTiaYMX7aqSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKrDezFPZxcFsPOo5KtwDhfEyGdCEz8Ezd%2FtPIUvBocaY6XBPka3%2FxCm7nmMzEn8MfH1Or9Vt5YcTF%2Bwged1aist4qr8u1ULFby%2FSRVUTpcSxFZ3IXrYFwXKKY8txmSY%2BR57kbIQFWK8k8Asn2aPrRUzfvDXv6uNy%2FNs2UXSGDd9lZ7JfkDvwFo4hYd2OeP0iM20WZJlNX3HfNZ42Qchykd60B538BoV63FwIixo%2FNLXF%2FkyKydY2cWSlvanaKaTfg0dBcz2wDkyDAwfOmz5FbRLG8Hu16%2B0hTZe6dgi2bUaevwcf24fIATObTXQmL2%2FvQr5AhieDoVb8bRSBqwTX8pViASFYH6gYbCg6PBTpl0kFhJOVywbL3gRIfQtYBrdHBzpYCxYGvp0zf4Da7mT6GIcevD4TQfZDzO7x0%2BiyZ3xaiVa%2BxfBmtNYJLCwD3QpFebRUS%2FEie84eJE3yPm0VOOycxLdS8z9ZUZXRB6NyhxKKuY61yaUAk%2BZWVKuaatDVo7jFzEu0O6NJcF5h%2FxrXnHU458qTvko0ytIZ9ej8YS9DZsAqjNYpN1Dbp5wci2Sp29n5o90tVGHTYvIF%2FeXa%2BI3EKtkZLXKtvPmG12zAPqHjmPCzmenuau%2B4Y%2FfRajjA0q29PtWue13fOZsw2dnLwAY6pgF8tn4RGZyKA4LkWeWx20A5%2BhbX%2B%2FeTI3Ru11XmBu12%2FYZUEtrBUoSHd7N3XByIJMPh5Gn9%2B3OVhxfAKWuT%2FkLkfeqQlwPpqJwhAkbszbidtvIdXsZp4J0d6ckyG0OIIIRhegb8jd0ZVme19FSOBDmxvlsNKSkLns8qtc1ZLR1tV9D7BxzJJi%2BAolqLCwCIxYf4PRxf%2FC2KNRfp2Zn%2BdNRFwWHtg70n&X-Amz-Signature=76b6494511b16b4ff11261efbd4add457dd155f9bf73876f76b9f1c4c78fbfe0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYGOSCSP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIBZW4xuvhSv%2BlsPGGXSE3jRZgQuAjX%2BNKj%2FC5AT1NnPBAiAQF0c%2FtHArfL%2Br%2BEdF6O7FQoaQzRGHe3oyTiaYMX7aqSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKrDezFPZxcFsPOo5KtwDhfEyGdCEz8Ezd%2FtPIUvBocaY6XBPka3%2FxCm7nmMzEn8MfH1Or9Vt5YcTF%2Bwged1aist4qr8u1ULFby%2FSRVUTpcSxFZ3IXrYFwXKKY8txmSY%2BR57kbIQFWK8k8Asn2aPrRUzfvDXv6uNy%2FNs2UXSGDd9lZ7JfkDvwFo4hYd2OeP0iM20WZJlNX3HfNZ42Qchykd60B538BoV63FwIixo%2FNLXF%2FkyKydY2cWSlvanaKaTfg0dBcz2wDkyDAwfOmz5FbRLG8Hu16%2B0hTZe6dgi2bUaevwcf24fIATObTXQmL2%2FvQr5AhieDoVb8bRSBqwTX8pViASFYH6gYbCg6PBTpl0kFhJOVywbL3gRIfQtYBrdHBzpYCxYGvp0zf4Da7mT6GIcevD4TQfZDzO7x0%2BiyZ3xaiVa%2BxfBmtNYJLCwD3QpFebRUS%2FEie84eJE3yPm0VOOycxLdS8z9ZUZXRB6NyhxKKuY61yaUAk%2BZWVKuaatDVo7jFzEu0O6NJcF5h%2FxrXnHU458qTvko0ytIZ9ej8YS9DZsAqjNYpN1Dbp5wci2Sp29n5o90tVGHTYvIF%2FeXa%2BI3EKtkZLXKtvPmG12zAPqHjmPCzmenuau%2B4Y%2FfRajjA0q29PtWue13fOZsw2dnLwAY6pgF8tn4RGZyKA4LkWeWx20A5%2BhbX%2B%2FeTI3Ru11XmBu12%2FYZUEtrBUoSHd7N3XByIJMPh5Gn9%2B3OVhxfAKWuT%2FkLkfeqQlwPpqJwhAkbszbidtvIdXsZp4J0d6ckyG0OIIIRhegb8jd0ZVme19FSOBDmxvlsNKSkLns8qtc1ZLR1tV9D7BxzJJi%2BAolqLCwCIxYf4PRxf%2FC2KNRfp2Zn%2BdNRFwWHtg70n&X-Amz-Signature=8058ea347aeb9b81e8074343c9d83c6f4f14e9fde34f1d6685d2e5f972ae1307&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYGOSCSP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIBZW4xuvhSv%2BlsPGGXSE3jRZgQuAjX%2BNKj%2FC5AT1NnPBAiAQF0c%2FtHArfL%2Br%2BEdF6O7FQoaQzRGHe3oyTiaYMX7aqSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKrDezFPZxcFsPOo5KtwDhfEyGdCEz8Ezd%2FtPIUvBocaY6XBPka3%2FxCm7nmMzEn8MfH1Or9Vt5YcTF%2Bwged1aist4qr8u1ULFby%2FSRVUTpcSxFZ3IXrYFwXKKY8txmSY%2BR57kbIQFWK8k8Asn2aPrRUzfvDXv6uNy%2FNs2UXSGDd9lZ7JfkDvwFo4hYd2OeP0iM20WZJlNX3HfNZ42Qchykd60B538BoV63FwIixo%2FNLXF%2FkyKydY2cWSlvanaKaTfg0dBcz2wDkyDAwfOmz5FbRLG8Hu16%2B0hTZe6dgi2bUaevwcf24fIATObTXQmL2%2FvQr5AhieDoVb8bRSBqwTX8pViASFYH6gYbCg6PBTpl0kFhJOVywbL3gRIfQtYBrdHBzpYCxYGvp0zf4Da7mT6GIcevD4TQfZDzO7x0%2BiyZ3xaiVa%2BxfBmtNYJLCwD3QpFebRUS%2FEie84eJE3yPm0VOOycxLdS8z9ZUZXRB6NyhxKKuY61yaUAk%2BZWVKuaatDVo7jFzEu0O6NJcF5h%2FxrXnHU458qTvko0ytIZ9ej8YS9DZsAqjNYpN1Dbp5wci2Sp29n5o90tVGHTYvIF%2FeXa%2BI3EKtkZLXKtvPmG12zAPqHjmPCzmenuau%2B4Y%2FfRajjA0q29PtWue13fOZsw2dnLwAY6pgF8tn4RGZyKA4LkWeWx20A5%2BhbX%2B%2FeTI3Ru11XmBu12%2FYZUEtrBUoSHd7N3XByIJMPh5Gn9%2B3OVhxfAKWuT%2FkLkfeqQlwPpqJwhAkbszbidtvIdXsZp4J0d6ckyG0OIIIRhegb8jd0ZVme19FSOBDmxvlsNKSkLns8qtc1ZLR1tV9D7BxzJJi%2BAolqLCwCIxYf4PRxf%2FC2KNRfp2Zn%2BdNRFwWHtg70n&X-Amz-Signature=9cde22f263192992c374b95eeb99055be462e26e22bb70b45229ff4d283096b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYGOSCSP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIBZW4xuvhSv%2BlsPGGXSE3jRZgQuAjX%2BNKj%2FC5AT1NnPBAiAQF0c%2FtHArfL%2Br%2BEdF6O7FQoaQzRGHe3oyTiaYMX7aqSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKrDezFPZxcFsPOo5KtwDhfEyGdCEz8Ezd%2FtPIUvBocaY6XBPka3%2FxCm7nmMzEn8MfH1Or9Vt5YcTF%2Bwged1aist4qr8u1ULFby%2FSRVUTpcSxFZ3IXrYFwXKKY8txmSY%2BR57kbIQFWK8k8Asn2aPrRUzfvDXv6uNy%2FNs2UXSGDd9lZ7JfkDvwFo4hYd2OeP0iM20WZJlNX3HfNZ42Qchykd60B538BoV63FwIixo%2FNLXF%2FkyKydY2cWSlvanaKaTfg0dBcz2wDkyDAwfOmz5FbRLG8Hu16%2B0hTZe6dgi2bUaevwcf24fIATObTXQmL2%2FvQr5AhieDoVb8bRSBqwTX8pViASFYH6gYbCg6PBTpl0kFhJOVywbL3gRIfQtYBrdHBzpYCxYGvp0zf4Da7mT6GIcevD4TQfZDzO7x0%2BiyZ3xaiVa%2BxfBmtNYJLCwD3QpFebRUS%2FEie84eJE3yPm0VOOycxLdS8z9ZUZXRB6NyhxKKuY61yaUAk%2BZWVKuaatDVo7jFzEu0O6NJcF5h%2FxrXnHU458qTvko0ytIZ9ej8YS9DZsAqjNYpN1Dbp5wci2Sp29n5o90tVGHTYvIF%2FeXa%2BI3EKtkZLXKtvPmG12zAPqHjmPCzmenuau%2B4Y%2FfRajjA0q29PtWue13fOZsw2dnLwAY6pgF8tn4RGZyKA4LkWeWx20A5%2BhbX%2B%2FeTI3Ru11XmBu12%2FYZUEtrBUoSHd7N3XByIJMPh5Gn9%2B3OVhxfAKWuT%2FkLkfeqQlwPpqJwhAkbszbidtvIdXsZp4J0d6ckyG0OIIIRhegb8jd0ZVme19FSOBDmxvlsNKSkLns8qtc1ZLR1tV9D7BxzJJi%2BAolqLCwCIxYf4PRxf%2FC2KNRfp2Zn%2BdNRFwWHtg70n&X-Amz-Signature=215a06991a1f24e0b105d9e361a0067b97d3152dd52994e13c650aeafbad3dcd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
