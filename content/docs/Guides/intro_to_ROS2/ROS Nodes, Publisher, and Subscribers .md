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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3VD5ZC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8OZ1ft95q6HuB7cEYHo6tWGjNo%2Bav3zUInLfwqm3hngIhALeGPE8IpjSKhyUtzhgnxqAEXAZ6mRAbX60EOBlqIRcsKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF6cyQM4JTZQKwHtAq3AOQ%2BUo4YCB5CRJIIX%2FtAy71SI7dyM%2FnfTEerUATanoDt7VCOpOF2hWopLBrrpXR0p%2BpnKqPHztZOHgAWjn2DApMZyRumw406549%2BFggFy44ra5Hs%2F03KtgHhFkGw36UZQtNBOUN9VwAzdKyzVFTep9XJjgsyO8D21A%2BWBU9YJGPa44RvoQFQQ5D5WX0ehrQR7uEtXC8Wsf6C5YpxSPMqGVVe5mDgCG059FbUuriVb%2FJYNfL68PN6C9UabpuLp6eg%2FfWjfJIV1OJZK7YCi7HTz8ZuEHs5GTKrzvMQ9yxmaI0qFuK0MS7aO4LQnYWuYZWilTunqqG3iLFGgVkblmareDxn%2F0SQ3Qv83pRZ%2FQzORQ7HNLBqa1uxgwkpSN1D1i7XaOuulmHAxdsru2ShSRZRGDaxIPJVTVbXvQKTh281IJj8Emx70NcBdRtyvaj%2BVvjFfXfquPDsHmMelL5EWqtbpAlApc5%2B0JWc0pu7t4RSU%2FxI5T96P%2FFD4qw1pZkObuTivoHD5T%2BoIYO9geWwI1n0Z3XZhLQdCHHtXDapv34QUsGf0uAru%2BInMLTBI8GxRVGAy9yY2ovOqZOvRXBT2ZWpNv1uIx8NbwQ7UqdAxumq29DdfDSMq1dlDqSgKPMYTDn%2BJzCBjqkAYXzgocVWaeVGl%2BYpJCr9Er0J%2BBWROQIgCgT46mfhuHNXTtvLpuJpREst9edkiyEa4QFW%2BG%2FW6d8xOG%2FkL6U9EjQ4EuVu85LATdPJE%2BfiEC1IYyNlatr%2BCv98k6quOGMu1z6CMZ%2FVfpF3oFCBPOM656y3ZyXgHI6FqQA1ch8Xsahxfkw%2FJ2Xz7XXpjvWHIdvQuDfh9VmOGYDUkfHwQWT%2BbV7qQXJ&X-Amz-Signature=fdce11d72ec90b2015aee0e1ed84ddcd4b9a70b12bc49fb211d547add661a5d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3VD5ZC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8OZ1ft95q6HuB7cEYHo6tWGjNo%2Bav3zUInLfwqm3hngIhALeGPE8IpjSKhyUtzhgnxqAEXAZ6mRAbX60EOBlqIRcsKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF6cyQM4JTZQKwHtAq3AOQ%2BUo4YCB5CRJIIX%2FtAy71SI7dyM%2FnfTEerUATanoDt7VCOpOF2hWopLBrrpXR0p%2BpnKqPHztZOHgAWjn2DApMZyRumw406549%2BFggFy44ra5Hs%2F03KtgHhFkGw36UZQtNBOUN9VwAzdKyzVFTep9XJjgsyO8D21A%2BWBU9YJGPa44RvoQFQQ5D5WX0ehrQR7uEtXC8Wsf6C5YpxSPMqGVVe5mDgCG059FbUuriVb%2FJYNfL68PN6C9UabpuLp6eg%2FfWjfJIV1OJZK7YCi7HTz8ZuEHs5GTKrzvMQ9yxmaI0qFuK0MS7aO4LQnYWuYZWilTunqqG3iLFGgVkblmareDxn%2F0SQ3Qv83pRZ%2FQzORQ7HNLBqa1uxgwkpSN1D1i7XaOuulmHAxdsru2ShSRZRGDaxIPJVTVbXvQKTh281IJj8Emx70NcBdRtyvaj%2BVvjFfXfquPDsHmMelL5EWqtbpAlApc5%2B0JWc0pu7t4RSU%2FxI5T96P%2FFD4qw1pZkObuTivoHD5T%2BoIYO9geWwI1n0Z3XZhLQdCHHtXDapv34QUsGf0uAru%2BInMLTBI8GxRVGAy9yY2ovOqZOvRXBT2ZWpNv1uIx8NbwQ7UqdAxumq29DdfDSMq1dlDqSgKPMYTDn%2BJzCBjqkAYXzgocVWaeVGl%2BYpJCr9Er0J%2BBWROQIgCgT46mfhuHNXTtvLpuJpREst9edkiyEa4QFW%2BG%2FW6d8xOG%2FkL6U9EjQ4EuVu85LATdPJE%2BfiEC1IYyNlatr%2BCv98k6quOGMu1z6CMZ%2FVfpF3oFCBPOM656y3ZyXgHI6FqQA1ch8Xsahxfkw%2FJ2Xz7XXpjvWHIdvQuDfh9VmOGYDUkfHwQWT%2BbV7qQXJ&X-Amz-Signature=6d0b860d4f6d6d1bc69268d4485296995fdfe3ba5079fd8280a9d2df373d4f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3VD5ZC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8OZ1ft95q6HuB7cEYHo6tWGjNo%2Bav3zUInLfwqm3hngIhALeGPE8IpjSKhyUtzhgnxqAEXAZ6mRAbX60EOBlqIRcsKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF6cyQM4JTZQKwHtAq3AOQ%2BUo4YCB5CRJIIX%2FtAy71SI7dyM%2FnfTEerUATanoDt7VCOpOF2hWopLBrrpXR0p%2BpnKqPHztZOHgAWjn2DApMZyRumw406549%2BFggFy44ra5Hs%2F03KtgHhFkGw36UZQtNBOUN9VwAzdKyzVFTep9XJjgsyO8D21A%2BWBU9YJGPa44RvoQFQQ5D5WX0ehrQR7uEtXC8Wsf6C5YpxSPMqGVVe5mDgCG059FbUuriVb%2FJYNfL68PN6C9UabpuLp6eg%2FfWjfJIV1OJZK7YCi7HTz8ZuEHs5GTKrzvMQ9yxmaI0qFuK0MS7aO4LQnYWuYZWilTunqqG3iLFGgVkblmareDxn%2F0SQ3Qv83pRZ%2FQzORQ7HNLBqa1uxgwkpSN1D1i7XaOuulmHAxdsru2ShSRZRGDaxIPJVTVbXvQKTh281IJj8Emx70NcBdRtyvaj%2BVvjFfXfquPDsHmMelL5EWqtbpAlApc5%2B0JWc0pu7t4RSU%2FxI5T96P%2FFD4qw1pZkObuTivoHD5T%2BoIYO9geWwI1n0Z3XZhLQdCHHtXDapv34QUsGf0uAru%2BInMLTBI8GxRVGAy9yY2ovOqZOvRXBT2ZWpNv1uIx8NbwQ7UqdAxumq29DdfDSMq1dlDqSgKPMYTDn%2BJzCBjqkAYXzgocVWaeVGl%2BYpJCr9Er0J%2BBWROQIgCgT46mfhuHNXTtvLpuJpREst9edkiyEa4QFW%2BG%2FW6d8xOG%2FkL6U9EjQ4EuVu85LATdPJE%2BfiEC1IYyNlatr%2BCv98k6quOGMu1z6CMZ%2FVfpF3oFCBPOM656y3ZyXgHI6FqQA1ch8Xsahxfkw%2FJ2Xz7XXpjvWHIdvQuDfh9VmOGYDUkfHwQWT%2BbV7qQXJ&X-Amz-Signature=1fb3ad51c401c9b380781ff76d805493e245c79f76d41810d6e69af64988ba9b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3VD5ZC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8OZ1ft95q6HuB7cEYHo6tWGjNo%2Bav3zUInLfwqm3hngIhALeGPE8IpjSKhyUtzhgnxqAEXAZ6mRAbX60EOBlqIRcsKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF6cyQM4JTZQKwHtAq3AOQ%2BUo4YCB5CRJIIX%2FtAy71SI7dyM%2FnfTEerUATanoDt7VCOpOF2hWopLBrrpXR0p%2BpnKqPHztZOHgAWjn2DApMZyRumw406549%2BFggFy44ra5Hs%2F03KtgHhFkGw36UZQtNBOUN9VwAzdKyzVFTep9XJjgsyO8D21A%2BWBU9YJGPa44RvoQFQQ5D5WX0ehrQR7uEtXC8Wsf6C5YpxSPMqGVVe5mDgCG059FbUuriVb%2FJYNfL68PN6C9UabpuLp6eg%2FfWjfJIV1OJZK7YCi7HTz8ZuEHs5GTKrzvMQ9yxmaI0qFuK0MS7aO4LQnYWuYZWilTunqqG3iLFGgVkblmareDxn%2F0SQ3Qv83pRZ%2FQzORQ7HNLBqa1uxgwkpSN1D1i7XaOuulmHAxdsru2ShSRZRGDaxIPJVTVbXvQKTh281IJj8Emx70NcBdRtyvaj%2BVvjFfXfquPDsHmMelL5EWqtbpAlApc5%2B0JWc0pu7t4RSU%2FxI5T96P%2FFD4qw1pZkObuTivoHD5T%2BoIYO9geWwI1n0Z3XZhLQdCHHtXDapv34QUsGf0uAru%2BInMLTBI8GxRVGAy9yY2ovOqZOvRXBT2ZWpNv1uIx8NbwQ7UqdAxumq29DdfDSMq1dlDqSgKPMYTDn%2BJzCBjqkAYXzgocVWaeVGl%2BYpJCr9Er0J%2BBWROQIgCgT46mfhuHNXTtvLpuJpREst9edkiyEa4QFW%2BG%2FW6d8xOG%2FkL6U9EjQ4EuVu85LATdPJE%2BfiEC1IYyNlatr%2BCv98k6quOGMu1z6CMZ%2FVfpF3oFCBPOM656y3ZyXgHI6FqQA1ch8Xsahxfkw%2FJ2Xz7XXpjvWHIdvQuDfh9VmOGYDUkfHwQWT%2BbV7qQXJ&X-Amz-Signature=1ebbada461de6e3667fc58453c170275db4d2d30b498b50b1f3b141a5c7be9ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3VD5ZC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8OZ1ft95q6HuB7cEYHo6tWGjNo%2Bav3zUInLfwqm3hngIhALeGPE8IpjSKhyUtzhgnxqAEXAZ6mRAbX60EOBlqIRcsKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF6cyQM4JTZQKwHtAq3AOQ%2BUo4YCB5CRJIIX%2FtAy71SI7dyM%2FnfTEerUATanoDt7VCOpOF2hWopLBrrpXR0p%2BpnKqPHztZOHgAWjn2DApMZyRumw406549%2BFggFy44ra5Hs%2F03KtgHhFkGw36UZQtNBOUN9VwAzdKyzVFTep9XJjgsyO8D21A%2BWBU9YJGPa44RvoQFQQ5D5WX0ehrQR7uEtXC8Wsf6C5YpxSPMqGVVe5mDgCG059FbUuriVb%2FJYNfL68PN6C9UabpuLp6eg%2FfWjfJIV1OJZK7YCi7HTz8ZuEHs5GTKrzvMQ9yxmaI0qFuK0MS7aO4LQnYWuYZWilTunqqG3iLFGgVkblmareDxn%2F0SQ3Qv83pRZ%2FQzORQ7HNLBqa1uxgwkpSN1D1i7XaOuulmHAxdsru2ShSRZRGDaxIPJVTVbXvQKTh281IJj8Emx70NcBdRtyvaj%2BVvjFfXfquPDsHmMelL5EWqtbpAlApc5%2B0JWc0pu7t4RSU%2FxI5T96P%2FFD4qw1pZkObuTivoHD5T%2BoIYO9geWwI1n0Z3XZhLQdCHHtXDapv34QUsGf0uAru%2BInMLTBI8GxRVGAy9yY2ovOqZOvRXBT2ZWpNv1uIx8NbwQ7UqdAxumq29DdfDSMq1dlDqSgKPMYTDn%2BJzCBjqkAYXzgocVWaeVGl%2BYpJCr9Er0J%2BBWROQIgCgT46mfhuHNXTtvLpuJpREst9edkiyEa4QFW%2BG%2FW6d8xOG%2FkL6U9EjQ4EuVu85LATdPJE%2BfiEC1IYyNlatr%2BCv98k6quOGMu1z6CMZ%2FVfpF3oFCBPOM656y3ZyXgHI6FqQA1ch8Xsahxfkw%2FJ2Xz7XXpjvWHIdvQuDfh9VmOGYDUkfHwQWT%2BbV7qQXJ&X-Amz-Signature=50564019cb01dbd7d9165497237d4ae33cf9c9f95cb1b8725ea1e7976fe33b9b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3VD5ZC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8OZ1ft95q6HuB7cEYHo6tWGjNo%2Bav3zUInLfwqm3hngIhALeGPE8IpjSKhyUtzhgnxqAEXAZ6mRAbX60EOBlqIRcsKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF6cyQM4JTZQKwHtAq3AOQ%2BUo4YCB5CRJIIX%2FtAy71SI7dyM%2FnfTEerUATanoDt7VCOpOF2hWopLBrrpXR0p%2BpnKqPHztZOHgAWjn2DApMZyRumw406549%2BFggFy44ra5Hs%2F03KtgHhFkGw36UZQtNBOUN9VwAzdKyzVFTep9XJjgsyO8D21A%2BWBU9YJGPa44RvoQFQQ5D5WX0ehrQR7uEtXC8Wsf6C5YpxSPMqGVVe5mDgCG059FbUuriVb%2FJYNfL68PN6C9UabpuLp6eg%2FfWjfJIV1OJZK7YCi7HTz8ZuEHs5GTKrzvMQ9yxmaI0qFuK0MS7aO4LQnYWuYZWilTunqqG3iLFGgVkblmareDxn%2F0SQ3Qv83pRZ%2FQzORQ7HNLBqa1uxgwkpSN1D1i7XaOuulmHAxdsru2ShSRZRGDaxIPJVTVbXvQKTh281IJj8Emx70NcBdRtyvaj%2BVvjFfXfquPDsHmMelL5EWqtbpAlApc5%2B0JWc0pu7t4RSU%2FxI5T96P%2FFD4qw1pZkObuTivoHD5T%2BoIYO9geWwI1n0Z3XZhLQdCHHtXDapv34QUsGf0uAru%2BInMLTBI8GxRVGAy9yY2ovOqZOvRXBT2ZWpNv1uIx8NbwQ7UqdAxumq29DdfDSMq1dlDqSgKPMYTDn%2BJzCBjqkAYXzgocVWaeVGl%2BYpJCr9Er0J%2BBWROQIgCgT46mfhuHNXTtvLpuJpREst9edkiyEa4QFW%2BG%2FW6d8xOG%2FkL6U9EjQ4EuVu85LATdPJE%2BfiEC1IYyNlatr%2BCv98k6quOGMu1z6CMZ%2FVfpF3oFCBPOM656y3ZyXgHI6FqQA1ch8Xsahxfkw%2FJ2Xz7XXpjvWHIdvQuDfh9VmOGYDUkfHwQWT%2BbV7qQXJ&X-Amz-Signature=9fa76dd8f4c93acc764cb341a27534b564e978cbd5d18ab471d91d21a0d5f85c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3VD5ZC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8OZ1ft95q6HuB7cEYHo6tWGjNo%2Bav3zUInLfwqm3hngIhALeGPE8IpjSKhyUtzhgnxqAEXAZ6mRAbX60EOBlqIRcsKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF6cyQM4JTZQKwHtAq3AOQ%2BUo4YCB5CRJIIX%2FtAy71SI7dyM%2FnfTEerUATanoDt7VCOpOF2hWopLBrrpXR0p%2BpnKqPHztZOHgAWjn2DApMZyRumw406549%2BFggFy44ra5Hs%2F03KtgHhFkGw36UZQtNBOUN9VwAzdKyzVFTep9XJjgsyO8D21A%2BWBU9YJGPa44RvoQFQQ5D5WX0ehrQR7uEtXC8Wsf6C5YpxSPMqGVVe5mDgCG059FbUuriVb%2FJYNfL68PN6C9UabpuLp6eg%2FfWjfJIV1OJZK7YCi7HTz8ZuEHs5GTKrzvMQ9yxmaI0qFuK0MS7aO4LQnYWuYZWilTunqqG3iLFGgVkblmareDxn%2F0SQ3Qv83pRZ%2FQzORQ7HNLBqa1uxgwkpSN1D1i7XaOuulmHAxdsru2ShSRZRGDaxIPJVTVbXvQKTh281IJj8Emx70NcBdRtyvaj%2BVvjFfXfquPDsHmMelL5EWqtbpAlApc5%2B0JWc0pu7t4RSU%2FxI5T96P%2FFD4qw1pZkObuTivoHD5T%2BoIYO9geWwI1n0Z3XZhLQdCHHtXDapv34QUsGf0uAru%2BInMLTBI8GxRVGAy9yY2ovOqZOvRXBT2ZWpNv1uIx8NbwQ7UqdAxumq29DdfDSMq1dlDqSgKPMYTDn%2BJzCBjqkAYXzgocVWaeVGl%2BYpJCr9Er0J%2BBWROQIgCgT46mfhuHNXTtvLpuJpREst9edkiyEa4QFW%2BG%2FW6d8xOG%2FkL6U9EjQ4EuVu85LATdPJE%2BfiEC1IYyNlatr%2BCv98k6quOGMu1z6CMZ%2FVfpF3oFCBPOM656y3ZyXgHI6FqQA1ch8Xsahxfkw%2FJ2Xz7XXpjvWHIdvQuDfh9VmOGYDUkfHwQWT%2BbV7qQXJ&X-Amz-Signature=371e4932575eb50d44d9ad00def8e12b2f6997928bad37c5e8828464fcfd3b93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3VD5ZC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8OZ1ft95q6HuB7cEYHo6tWGjNo%2Bav3zUInLfwqm3hngIhALeGPE8IpjSKhyUtzhgnxqAEXAZ6mRAbX60EOBlqIRcsKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF6cyQM4JTZQKwHtAq3AOQ%2BUo4YCB5CRJIIX%2FtAy71SI7dyM%2FnfTEerUATanoDt7VCOpOF2hWopLBrrpXR0p%2BpnKqPHztZOHgAWjn2DApMZyRumw406549%2BFggFy44ra5Hs%2F03KtgHhFkGw36UZQtNBOUN9VwAzdKyzVFTep9XJjgsyO8D21A%2BWBU9YJGPa44RvoQFQQ5D5WX0ehrQR7uEtXC8Wsf6C5YpxSPMqGVVe5mDgCG059FbUuriVb%2FJYNfL68PN6C9UabpuLp6eg%2FfWjfJIV1OJZK7YCi7HTz8ZuEHs5GTKrzvMQ9yxmaI0qFuK0MS7aO4LQnYWuYZWilTunqqG3iLFGgVkblmareDxn%2F0SQ3Qv83pRZ%2FQzORQ7HNLBqa1uxgwkpSN1D1i7XaOuulmHAxdsru2ShSRZRGDaxIPJVTVbXvQKTh281IJj8Emx70NcBdRtyvaj%2BVvjFfXfquPDsHmMelL5EWqtbpAlApc5%2B0JWc0pu7t4RSU%2FxI5T96P%2FFD4qw1pZkObuTivoHD5T%2BoIYO9geWwI1n0Z3XZhLQdCHHtXDapv34QUsGf0uAru%2BInMLTBI8GxRVGAy9yY2ovOqZOvRXBT2ZWpNv1uIx8NbwQ7UqdAxumq29DdfDSMq1dlDqSgKPMYTDn%2BJzCBjqkAYXzgocVWaeVGl%2BYpJCr9Er0J%2BBWROQIgCgT46mfhuHNXTtvLpuJpREst9edkiyEa4QFW%2BG%2FW6d8xOG%2FkL6U9EjQ4EuVu85LATdPJE%2BfiEC1IYyNlatr%2BCv98k6quOGMu1z6CMZ%2FVfpF3oFCBPOM656y3ZyXgHI6FqQA1ch8Xsahxfkw%2FJ2Xz7XXpjvWHIdvQuDfh9VmOGYDUkfHwQWT%2BbV7qQXJ&X-Amz-Signature=b34bc82cef1a8a67df456b9a07508f5cdb86f1f75e8defcd9eb3b539c8959e2a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
