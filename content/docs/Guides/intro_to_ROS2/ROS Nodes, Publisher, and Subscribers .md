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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKXPKBKE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC8FjJJpFW979tH4YjIECO0NiDHcbWvGuiK5mAgJkf6gIhAOxxKrk7wNDlYZFzxFZOaOoDWnAYWXXY2dE7TU%2F55juKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2qr8%2Feam34IVCQ8q3AMWXvroXS3Jk%2FDgEyb92PvhFQNXbq0x5vYyIBq6OaKWZERgr1nsNIK3cwjvnINaXyy4WlKa7JgSpy5C4VdHeQRgBY6hCgo%2B7vYiAYnyPivOzKLcR3txXXegDPnMQhTgCIXMmtQUWugT44Q3pO992cVngOa71HuNmrO1H3d3S%2FSCBs4lCEmWtDPuO3i%2BWyN8BxeX6wFPAok%2BDk1lYbjMZF6xycg4f%2BjFfDkrkTRKpsH48owS%2BJiv7AA8%2BFJWtUnmXbApBY6wvVcmIUYtIiJUqRFzzs7ZOFk1ja4rlXOJ2N2t3H5lgrTx1pWG%2B9ZEP1OAYcXZiMR0y6WMLTvAFc9PyJQKDARER9vB%2FdKlASJv9zlKbkhoB9acZIi3WuPGKAscZp1jAAN6pQMHJ9x%2FMTNOC2cBRD8ZoIb07SqUGBs1IaZoRVHuHdC3CSSXwNdqWR3398TdDtEJ%2BJcjNFq2HBx210AD2STqllgUQir5fQGPvRTEkbfkx0%2BHUOztCO%2B03S0SA0GZv%2BBZm10dIo%2BcgzAhMBSAMKPCoq9FYrpAZiJzuq%2FWW2UnBYzfL9B5ztR91sQtlPt7n2wh0Tr8rrUffvKZ46pVlosFf4thlW4I%2BYUmVgAzcb2qNgg7T7153SNPNDCb2LXDBjqkAdl2vxuyZKjXjzSpKkYApqV590bx3SrAHPrhc6gCGFzpd5QsaJMvNO9GJp%2B96eEDIW2r%2FmPwt7Yc89N1ykhkutkpwvYNjFeLWEg2DVL34qAmalQCWLtd8YOgwJjqKhpA6zljvHYeT%2F138yCJ%2FU5ttNm96X85RSYSbKUNsCqO39EPDquctj5oX7v%2Bz1kLpC7OggCt4q1N28SX9CarmnOh3h8zLm1Z&X-Amz-Signature=49fc9ddfe5a5a605f731fe6861c3a072d4de7dbea8014def414162ac95a97b08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKXPKBKE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC8FjJJpFW979tH4YjIECO0NiDHcbWvGuiK5mAgJkf6gIhAOxxKrk7wNDlYZFzxFZOaOoDWnAYWXXY2dE7TU%2F55juKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2qr8%2Feam34IVCQ8q3AMWXvroXS3Jk%2FDgEyb92PvhFQNXbq0x5vYyIBq6OaKWZERgr1nsNIK3cwjvnINaXyy4WlKa7JgSpy5C4VdHeQRgBY6hCgo%2B7vYiAYnyPivOzKLcR3txXXegDPnMQhTgCIXMmtQUWugT44Q3pO992cVngOa71HuNmrO1H3d3S%2FSCBs4lCEmWtDPuO3i%2BWyN8BxeX6wFPAok%2BDk1lYbjMZF6xycg4f%2BjFfDkrkTRKpsH48owS%2BJiv7AA8%2BFJWtUnmXbApBY6wvVcmIUYtIiJUqRFzzs7ZOFk1ja4rlXOJ2N2t3H5lgrTx1pWG%2B9ZEP1OAYcXZiMR0y6WMLTvAFc9PyJQKDARER9vB%2FdKlASJv9zlKbkhoB9acZIi3WuPGKAscZp1jAAN6pQMHJ9x%2FMTNOC2cBRD8ZoIb07SqUGBs1IaZoRVHuHdC3CSSXwNdqWR3398TdDtEJ%2BJcjNFq2HBx210AD2STqllgUQir5fQGPvRTEkbfkx0%2BHUOztCO%2B03S0SA0GZv%2BBZm10dIo%2BcgzAhMBSAMKPCoq9FYrpAZiJzuq%2FWW2UnBYzfL9B5ztR91sQtlPt7n2wh0Tr8rrUffvKZ46pVlosFf4thlW4I%2BYUmVgAzcb2qNgg7T7153SNPNDCb2LXDBjqkAdl2vxuyZKjXjzSpKkYApqV590bx3SrAHPrhc6gCGFzpd5QsaJMvNO9GJp%2B96eEDIW2r%2FmPwt7Yc89N1ykhkutkpwvYNjFeLWEg2DVL34qAmalQCWLtd8YOgwJjqKhpA6zljvHYeT%2F138yCJ%2FU5ttNm96X85RSYSbKUNsCqO39EPDquctj5oX7v%2Bz1kLpC7OggCt4q1N28SX9CarmnOh3h8zLm1Z&X-Amz-Signature=64b513e7d1e095fcebedc38e5fe1da96e5f4442cd4fe7b624b1d6cce7f798f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKXPKBKE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC8FjJJpFW979tH4YjIECO0NiDHcbWvGuiK5mAgJkf6gIhAOxxKrk7wNDlYZFzxFZOaOoDWnAYWXXY2dE7TU%2F55juKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2qr8%2Feam34IVCQ8q3AMWXvroXS3Jk%2FDgEyb92PvhFQNXbq0x5vYyIBq6OaKWZERgr1nsNIK3cwjvnINaXyy4WlKa7JgSpy5C4VdHeQRgBY6hCgo%2B7vYiAYnyPivOzKLcR3txXXegDPnMQhTgCIXMmtQUWugT44Q3pO992cVngOa71HuNmrO1H3d3S%2FSCBs4lCEmWtDPuO3i%2BWyN8BxeX6wFPAok%2BDk1lYbjMZF6xycg4f%2BjFfDkrkTRKpsH48owS%2BJiv7AA8%2BFJWtUnmXbApBY6wvVcmIUYtIiJUqRFzzs7ZOFk1ja4rlXOJ2N2t3H5lgrTx1pWG%2B9ZEP1OAYcXZiMR0y6WMLTvAFc9PyJQKDARER9vB%2FdKlASJv9zlKbkhoB9acZIi3WuPGKAscZp1jAAN6pQMHJ9x%2FMTNOC2cBRD8ZoIb07SqUGBs1IaZoRVHuHdC3CSSXwNdqWR3398TdDtEJ%2BJcjNFq2HBx210AD2STqllgUQir5fQGPvRTEkbfkx0%2BHUOztCO%2B03S0SA0GZv%2BBZm10dIo%2BcgzAhMBSAMKPCoq9FYrpAZiJzuq%2FWW2UnBYzfL9B5ztR91sQtlPt7n2wh0Tr8rrUffvKZ46pVlosFf4thlW4I%2BYUmVgAzcb2qNgg7T7153SNPNDCb2LXDBjqkAdl2vxuyZKjXjzSpKkYApqV590bx3SrAHPrhc6gCGFzpd5QsaJMvNO9GJp%2B96eEDIW2r%2FmPwt7Yc89N1ykhkutkpwvYNjFeLWEg2DVL34qAmalQCWLtd8YOgwJjqKhpA6zljvHYeT%2F138yCJ%2FU5ttNm96X85RSYSbKUNsCqO39EPDquctj5oX7v%2Bz1kLpC7OggCt4q1N28SX9CarmnOh3h8zLm1Z&X-Amz-Signature=856d1112f9194b9cef28b29f5faa0b216bcfe4a7661e71b5e30e7b75a8f5d7c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKXPKBKE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC8FjJJpFW979tH4YjIECO0NiDHcbWvGuiK5mAgJkf6gIhAOxxKrk7wNDlYZFzxFZOaOoDWnAYWXXY2dE7TU%2F55juKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2qr8%2Feam34IVCQ8q3AMWXvroXS3Jk%2FDgEyb92PvhFQNXbq0x5vYyIBq6OaKWZERgr1nsNIK3cwjvnINaXyy4WlKa7JgSpy5C4VdHeQRgBY6hCgo%2B7vYiAYnyPivOzKLcR3txXXegDPnMQhTgCIXMmtQUWugT44Q3pO992cVngOa71HuNmrO1H3d3S%2FSCBs4lCEmWtDPuO3i%2BWyN8BxeX6wFPAok%2BDk1lYbjMZF6xycg4f%2BjFfDkrkTRKpsH48owS%2BJiv7AA8%2BFJWtUnmXbApBY6wvVcmIUYtIiJUqRFzzs7ZOFk1ja4rlXOJ2N2t3H5lgrTx1pWG%2B9ZEP1OAYcXZiMR0y6WMLTvAFc9PyJQKDARER9vB%2FdKlASJv9zlKbkhoB9acZIi3WuPGKAscZp1jAAN6pQMHJ9x%2FMTNOC2cBRD8ZoIb07SqUGBs1IaZoRVHuHdC3CSSXwNdqWR3398TdDtEJ%2BJcjNFq2HBx210AD2STqllgUQir5fQGPvRTEkbfkx0%2BHUOztCO%2B03S0SA0GZv%2BBZm10dIo%2BcgzAhMBSAMKPCoq9FYrpAZiJzuq%2FWW2UnBYzfL9B5ztR91sQtlPt7n2wh0Tr8rrUffvKZ46pVlosFf4thlW4I%2BYUmVgAzcb2qNgg7T7153SNPNDCb2LXDBjqkAdl2vxuyZKjXjzSpKkYApqV590bx3SrAHPrhc6gCGFzpd5QsaJMvNO9GJp%2B96eEDIW2r%2FmPwt7Yc89N1ykhkutkpwvYNjFeLWEg2DVL34qAmalQCWLtd8YOgwJjqKhpA6zljvHYeT%2F138yCJ%2FU5ttNm96X85RSYSbKUNsCqO39EPDquctj5oX7v%2Bz1kLpC7OggCt4q1N28SX9CarmnOh3h8zLm1Z&X-Amz-Signature=029f080c914e496eeac9c65131ddc42d069e850431ca39d55b9d887c8c489be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKXPKBKE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC8FjJJpFW979tH4YjIECO0NiDHcbWvGuiK5mAgJkf6gIhAOxxKrk7wNDlYZFzxFZOaOoDWnAYWXXY2dE7TU%2F55juKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2qr8%2Feam34IVCQ8q3AMWXvroXS3Jk%2FDgEyb92PvhFQNXbq0x5vYyIBq6OaKWZERgr1nsNIK3cwjvnINaXyy4WlKa7JgSpy5C4VdHeQRgBY6hCgo%2B7vYiAYnyPivOzKLcR3txXXegDPnMQhTgCIXMmtQUWugT44Q3pO992cVngOa71HuNmrO1H3d3S%2FSCBs4lCEmWtDPuO3i%2BWyN8BxeX6wFPAok%2BDk1lYbjMZF6xycg4f%2BjFfDkrkTRKpsH48owS%2BJiv7AA8%2BFJWtUnmXbApBY6wvVcmIUYtIiJUqRFzzs7ZOFk1ja4rlXOJ2N2t3H5lgrTx1pWG%2B9ZEP1OAYcXZiMR0y6WMLTvAFc9PyJQKDARER9vB%2FdKlASJv9zlKbkhoB9acZIi3WuPGKAscZp1jAAN6pQMHJ9x%2FMTNOC2cBRD8ZoIb07SqUGBs1IaZoRVHuHdC3CSSXwNdqWR3398TdDtEJ%2BJcjNFq2HBx210AD2STqllgUQir5fQGPvRTEkbfkx0%2BHUOztCO%2B03S0SA0GZv%2BBZm10dIo%2BcgzAhMBSAMKPCoq9FYrpAZiJzuq%2FWW2UnBYzfL9B5ztR91sQtlPt7n2wh0Tr8rrUffvKZ46pVlosFf4thlW4I%2BYUmVgAzcb2qNgg7T7153SNPNDCb2LXDBjqkAdl2vxuyZKjXjzSpKkYApqV590bx3SrAHPrhc6gCGFzpd5QsaJMvNO9GJp%2B96eEDIW2r%2FmPwt7Yc89N1ykhkutkpwvYNjFeLWEg2DVL34qAmalQCWLtd8YOgwJjqKhpA6zljvHYeT%2F138yCJ%2FU5ttNm96X85RSYSbKUNsCqO39EPDquctj5oX7v%2Bz1kLpC7OggCt4q1N28SX9CarmnOh3h8zLm1Z&X-Amz-Signature=7b62072efeed527ea949b7cbae7735f403e7a6261f9b87548290e8c30ca45133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKXPKBKE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC8FjJJpFW979tH4YjIECO0NiDHcbWvGuiK5mAgJkf6gIhAOxxKrk7wNDlYZFzxFZOaOoDWnAYWXXY2dE7TU%2F55juKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2qr8%2Feam34IVCQ8q3AMWXvroXS3Jk%2FDgEyb92PvhFQNXbq0x5vYyIBq6OaKWZERgr1nsNIK3cwjvnINaXyy4WlKa7JgSpy5C4VdHeQRgBY6hCgo%2B7vYiAYnyPivOzKLcR3txXXegDPnMQhTgCIXMmtQUWugT44Q3pO992cVngOa71HuNmrO1H3d3S%2FSCBs4lCEmWtDPuO3i%2BWyN8BxeX6wFPAok%2BDk1lYbjMZF6xycg4f%2BjFfDkrkTRKpsH48owS%2BJiv7AA8%2BFJWtUnmXbApBY6wvVcmIUYtIiJUqRFzzs7ZOFk1ja4rlXOJ2N2t3H5lgrTx1pWG%2B9ZEP1OAYcXZiMR0y6WMLTvAFc9PyJQKDARER9vB%2FdKlASJv9zlKbkhoB9acZIi3WuPGKAscZp1jAAN6pQMHJ9x%2FMTNOC2cBRD8ZoIb07SqUGBs1IaZoRVHuHdC3CSSXwNdqWR3398TdDtEJ%2BJcjNFq2HBx210AD2STqllgUQir5fQGPvRTEkbfkx0%2BHUOztCO%2B03S0SA0GZv%2BBZm10dIo%2BcgzAhMBSAMKPCoq9FYrpAZiJzuq%2FWW2UnBYzfL9B5ztR91sQtlPt7n2wh0Tr8rrUffvKZ46pVlosFf4thlW4I%2BYUmVgAzcb2qNgg7T7153SNPNDCb2LXDBjqkAdl2vxuyZKjXjzSpKkYApqV590bx3SrAHPrhc6gCGFzpd5QsaJMvNO9GJp%2B96eEDIW2r%2FmPwt7Yc89N1ykhkutkpwvYNjFeLWEg2DVL34qAmalQCWLtd8YOgwJjqKhpA6zljvHYeT%2F138yCJ%2FU5ttNm96X85RSYSbKUNsCqO39EPDquctj5oX7v%2Bz1kLpC7OggCt4q1N28SX9CarmnOh3h8zLm1Z&X-Amz-Signature=ecba440e422e5eefac8d6b3061df4341a3be42e2c46d2913d77eca17fd88438e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKXPKBKE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC8FjJJpFW979tH4YjIECO0NiDHcbWvGuiK5mAgJkf6gIhAOxxKrk7wNDlYZFzxFZOaOoDWnAYWXXY2dE7TU%2F55juKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2qr8%2Feam34IVCQ8q3AMWXvroXS3Jk%2FDgEyb92PvhFQNXbq0x5vYyIBq6OaKWZERgr1nsNIK3cwjvnINaXyy4WlKa7JgSpy5C4VdHeQRgBY6hCgo%2B7vYiAYnyPivOzKLcR3txXXegDPnMQhTgCIXMmtQUWugT44Q3pO992cVngOa71HuNmrO1H3d3S%2FSCBs4lCEmWtDPuO3i%2BWyN8BxeX6wFPAok%2BDk1lYbjMZF6xycg4f%2BjFfDkrkTRKpsH48owS%2BJiv7AA8%2BFJWtUnmXbApBY6wvVcmIUYtIiJUqRFzzs7ZOFk1ja4rlXOJ2N2t3H5lgrTx1pWG%2B9ZEP1OAYcXZiMR0y6WMLTvAFc9PyJQKDARER9vB%2FdKlASJv9zlKbkhoB9acZIi3WuPGKAscZp1jAAN6pQMHJ9x%2FMTNOC2cBRD8ZoIb07SqUGBs1IaZoRVHuHdC3CSSXwNdqWR3398TdDtEJ%2BJcjNFq2HBx210AD2STqllgUQir5fQGPvRTEkbfkx0%2BHUOztCO%2B03S0SA0GZv%2BBZm10dIo%2BcgzAhMBSAMKPCoq9FYrpAZiJzuq%2FWW2UnBYzfL9B5ztR91sQtlPt7n2wh0Tr8rrUffvKZ46pVlosFf4thlW4I%2BYUmVgAzcb2qNgg7T7153SNPNDCb2LXDBjqkAdl2vxuyZKjXjzSpKkYApqV590bx3SrAHPrhc6gCGFzpd5QsaJMvNO9GJp%2B96eEDIW2r%2FmPwt7Yc89N1ykhkutkpwvYNjFeLWEg2DVL34qAmalQCWLtd8YOgwJjqKhpA6zljvHYeT%2F138yCJ%2FU5ttNm96X85RSYSbKUNsCqO39EPDquctj5oX7v%2Bz1kLpC7OggCt4q1N28SX9CarmnOh3h8zLm1Z&X-Amz-Signature=cb8846a6ccd2f5168360b6accd97d8d2f3ace0f8a96b97d8e8d39f1cbce878d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKXPKBKE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC8FjJJpFW979tH4YjIECO0NiDHcbWvGuiK5mAgJkf6gIhAOxxKrk7wNDlYZFzxFZOaOoDWnAYWXXY2dE7TU%2F55juKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2qr8%2Feam34IVCQ8q3AMWXvroXS3Jk%2FDgEyb92PvhFQNXbq0x5vYyIBq6OaKWZERgr1nsNIK3cwjvnINaXyy4WlKa7JgSpy5C4VdHeQRgBY6hCgo%2B7vYiAYnyPivOzKLcR3txXXegDPnMQhTgCIXMmtQUWugT44Q3pO992cVngOa71HuNmrO1H3d3S%2FSCBs4lCEmWtDPuO3i%2BWyN8BxeX6wFPAok%2BDk1lYbjMZF6xycg4f%2BjFfDkrkTRKpsH48owS%2BJiv7AA8%2BFJWtUnmXbApBY6wvVcmIUYtIiJUqRFzzs7ZOFk1ja4rlXOJ2N2t3H5lgrTx1pWG%2B9ZEP1OAYcXZiMR0y6WMLTvAFc9PyJQKDARER9vB%2FdKlASJv9zlKbkhoB9acZIi3WuPGKAscZp1jAAN6pQMHJ9x%2FMTNOC2cBRD8ZoIb07SqUGBs1IaZoRVHuHdC3CSSXwNdqWR3398TdDtEJ%2BJcjNFq2HBx210AD2STqllgUQir5fQGPvRTEkbfkx0%2BHUOztCO%2B03S0SA0GZv%2BBZm10dIo%2BcgzAhMBSAMKPCoq9FYrpAZiJzuq%2FWW2UnBYzfL9B5ztR91sQtlPt7n2wh0Tr8rrUffvKZ46pVlosFf4thlW4I%2BYUmVgAzcb2qNgg7T7153SNPNDCb2LXDBjqkAdl2vxuyZKjXjzSpKkYApqV590bx3SrAHPrhc6gCGFzpd5QsaJMvNO9GJp%2B96eEDIW2r%2FmPwt7Yc89N1ykhkutkpwvYNjFeLWEg2DVL34qAmalQCWLtd8YOgwJjqKhpA6zljvHYeT%2F138yCJ%2FU5ttNm96X85RSYSbKUNsCqO39EPDquctj5oX7v%2Bz1kLpC7OggCt4q1N28SX9CarmnOh3h8zLm1Z&X-Amz-Signature=2c309f1b1d1cd14d883e32cae63d03b24cc756b0b7b1ffb7134e676f2d6e1611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
