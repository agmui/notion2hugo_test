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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQGVTEMV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuz4OYZYVdjSYlMsuP28CqgDNi4SyG85WBouVVlh9NGAIhAObniC3KyiEaAhYxHxnN6Dj3whbdF6r1ilGkPkiJF4FJKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzgs3GzetrdPaAmgdoq3AM5l2LaKDJ7qbmpaJPDE2ic5mGueZ4PezisUIKQj9pGjQAycvaLpbR5m3G43aH5mKlFyRd81LHhrGxqbo%2FCWaD5Hdt%2FOeIZ1WHAaWTSmu4KUUGu2kst%2FAGDUuHskdadPeb%2F3S7Kv%2B1B6C05x3UjpFLbgrIsaTl7As3dQoYwfIUw1EXH16R%2FMwVWwrQicumEKwpwF%2FCJpPphlf0ITzk0H2fnER9bFLOTkoi1rxDMbPGIVTkq7A5F5Wm46aL3nPZ8pRCwFacaIedxc%2BtRsqp3D9JUxpnRrmy7jghpu8FcfsXUWs6gu7a6RX1nHmJr6PVBhS%2BDaaeTkzYjMgv2QOzygLb9nnW0ND2Ju7nULNKoiSb6LuNqzxa4HrlEhCcjtuiko5btPYp4n6QaUamjOHUNcup2vaA2QDt4BVb0Le4ybc%2FTylZ3mjlLVPQDF9YxtacAvi4XnueQRSIa0FNMDEf%2FxpAVOSx0cZsmYrN%2FS7BQQI43RcZcKJOlgV56OQL%2FMn2pygWqwIttcMgjillIn78vqo07lEhATE0KeXUJFp7nhVU9B6SLoDI1Pr3KF5PZkCTBvNTDCwjzuysQq%2B36fHh1Hlx5YL6lPID%2Buv0NaoBwH66NCfmlzrly3nk%2BC9tg1TCckqe9BjqkAfK3oeLzhbGz60OwAtwSbaTZqCgrFPtwn76kaCjHZt35RV7F7xmU%2BxYVfZdNTIKgvAgu0BL%2BnYjq6C3KNV2tg7rL%2B2Qe3nQqaFm%2BonKXmDZTZSoFPgSjKeqXtzL8AdxZ6louMbFKZybYeGpzw47%2B2QqyX8OTj9Qgpka1DbGgpiF68m6dqGY5dsCZGoGe8tBpfSqJwDJOgj7Wah7PuWcAJXAvYtZ2&X-Amz-Signature=517f31eeb99b9bf743f1569fb89bb52e0339dee3c0dc9a66abae18ea8ffd98dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQGVTEMV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuz4OYZYVdjSYlMsuP28CqgDNi4SyG85WBouVVlh9NGAIhAObniC3KyiEaAhYxHxnN6Dj3whbdF6r1ilGkPkiJF4FJKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzgs3GzetrdPaAmgdoq3AM5l2LaKDJ7qbmpaJPDE2ic5mGueZ4PezisUIKQj9pGjQAycvaLpbR5m3G43aH5mKlFyRd81LHhrGxqbo%2FCWaD5Hdt%2FOeIZ1WHAaWTSmu4KUUGu2kst%2FAGDUuHskdadPeb%2F3S7Kv%2B1B6C05x3UjpFLbgrIsaTl7As3dQoYwfIUw1EXH16R%2FMwVWwrQicumEKwpwF%2FCJpPphlf0ITzk0H2fnER9bFLOTkoi1rxDMbPGIVTkq7A5F5Wm46aL3nPZ8pRCwFacaIedxc%2BtRsqp3D9JUxpnRrmy7jghpu8FcfsXUWs6gu7a6RX1nHmJr6PVBhS%2BDaaeTkzYjMgv2QOzygLb9nnW0ND2Ju7nULNKoiSb6LuNqzxa4HrlEhCcjtuiko5btPYp4n6QaUamjOHUNcup2vaA2QDt4BVb0Le4ybc%2FTylZ3mjlLVPQDF9YxtacAvi4XnueQRSIa0FNMDEf%2FxpAVOSx0cZsmYrN%2FS7BQQI43RcZcKJOlgV56OQL%2FMn2pygWqwIttcMgjillIn78vqo07lEhATE0KeXUJFp7nhVU9B6SLoDI1Pr3KF5PZkCTBvNTDCwjzuysQq%2B36fHh1Hlx5YL6lPID%2Buv0NaoBwH66NCfmlzrly3nk%2BC9tg1TCckqe9BjqkAfK3oeLzhbGz60OwAtwSbaTZqCgrFPtwn76kaCjHZt35RV7F7xmU%2BxYVfZdNTIKgvAgu0BL%2BnYjq6C3KNV2tg7rL%2B2Qe3nQqaFm%2BonKXmDZTZSoFPgSjKeqXtzL8AdxZ6louMbFKZybYeGpzw47%2B2QqyX8OTj9Qgpka1DbGgpiF68m6dqGY5dsCZGoGe8tBpfSqJwDJOgj7Wah7PuWcAJXAvYtZ2&X-Amz-Signature=ddf16980fcf31be0592ef910a23e4d9b0f0b39e6ac43e82aa932f94d46570f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQGVTEMV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuz4OYZYVdjSYlMsuP28CqgDNi4SyG85WBouVVlh9NGAIhAObniC3KyiEaAhYxHxnN6Dj3whbdF6r1ilGkPkiJF4FJKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzgs3GzetrdPaAmgdoq3AM5l2LaKDJ7qbmpaJPDE2ic5mGueZ4PezisUIKQj9pGjQAycvaLpbR5m3G43aH5mKlFyRd81LHhrGxqbo%2FCWaD5Hdt%2FOeIZ1WHAaWTSmu4KUUGu2kst%2FAGDUuHskdadPeb%2F3S7Kv%2B1B6C05x3UjpFLbgrIsaTl7As3dQoYwfIUw1EXH16R%2FMwVWwrQicumEKwpwF%2FCJpPphlf0ITzk0H2fnER9bFLOTkoi1rxDMbPGIVTkq7A5F5Wm46aL3nPZ8pRCwFacaIedxc%2BtRsqp3D9JUxpnRrmy7jghpu8FcfsXUWs6gu7a6RX1nHmJr6PVBhS%2BDaaeTkzYjMgv2QOzygLb9nnW0ND2Ju7nULNKoiSb6LuNqzxa4HrlEhCcjtuiko5btPYp4n6QaUamjOHUNcup2vaA2QDt4BVb0Le4ybc%2FTylZ3mjlLVPQDF9YxtacAvi4XnueQRSIa0FNMDEf%2FxpAVOSx0cZsmYrN%2FS7BQQI43RcZcKJOlgV56OQL%2FMn2pygWqwIttcMgjillIn78vqo07lEhATE0KeXUJFp7nhVU9B6SLoDI1Pr3KF5PZkCTBvNTDCwjzuysQq%2B36fHh1Hlx5YL6lPID%2Buv0NaoBwH66NCfmlzrly3nk%2BC9tg1TCckqe9BjqkAfK3oeLzhbGz60OwAtwSbaTZqCgrFPtwn76kaCjHZt35RV7F7xmU%2BxYVfZdNTIKgvAgu0BL%2BnYjq6C3KNV2tg7rL%2B2Qe3nQqaFm%2BonKXmDZTZSoFPgSjKeqXtzL8AdxZ6louMbFKZybYeGpzw47%2B2QqyX8OTj9Qgpka1DbGgpiF68m6dqGY5dsCZGoGe8tBpfSqJwDJOgj7Wah7PuWcAJXAvYtZ2&X-Amz-Signature=278bb0de01ce9f9853f8e27a535893147327015bda3714a4b30eb633408db3dc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQGVTEMV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuz4OYZYVdjSYlMsuP28CqgDNi4SyG85WBouVVlh9NGAIhAObniC3KyiEaAhYxHxnN6Dj3whbdF6r1ilGkPkiJF4FJKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzgs3GzetrdPaAmgdoq3AM5l2LaKDJ7qbmpaJPDE2ic5mGueZ4PezisUIKQj9pGjQAycvaLpbR5m3G43aH5mKlFyRd81LHhrGxqbo%2FCWaD5Hdt%2FOeIZ1WHAaWTSmu4KUUGu2kst%2FAGDUuHskdadPeb%2F3S7Kv%2B1B6C05x3UjpFLbgrIsaTl7As3dQoYwfIUw1EXH16R%2FMwVWwrQicumEKwpwF%2FCJpPphlf0ITzk0H2fnER9bFLOTkoi1rxDMbPGIVTkq7A5F5Wm46aL3nPZ8pRCwFacaIedxc%2BtRsqp3D9JUxpnRrmy7jghpu8FcfsXUWs6gu7a6RX1nHmJr6PVBhS%2BDaaeTkzYjMgv2QOzygLb9nnW0ND2Ju7nULNKoiSb6LuNqzxa4HrlEhCcjtuiko5btPYp4n6QaUamjOHUNcup2vaA2QDt4BVb0Le4ybc%2FTylZ3mjlLVPQDF9YxtacAvi4XnueQRSIa0FNMDEf%2FxpAVOSx0cZsmYrN%2FS7BQQI43RcZcKJOlgV56OQL%2FMn2pygWqwIttcMgjillIn78vqo07lEhATE0KeXUJFp7nhVU9B6SLoDI1Pr3KF5PZkCTBvNTDCwjzuysQq%2B36fHh1Hlx5YL6lPID%2Buv0NaoBwH66NCfmlzrly3nk%2BC9tg1TCckqe9BjqkAfK3oeLzhbGz60OwAtwSbaTZqCgrFPtwn76kaCjHZt35RV7F7xmU%2BxYVfZdNTIKgvAgu0BL%2BnYjq6C3KNV2tg7rL%2B2Qe3nQqaFm%2BonKXmDZTZSoFPgSjKeqXtzL8AdxZ6louMbFKZybYeGpzw47%2B2QqyX8OTj9Qgpka1DbGgpiF68m6dqGY5dsCZGoGe8tBpfSqJwDJOgj7Wah7PuWcAJXAvYtZ2&X-Amz-Signature=34a3e38c5a1f94dda29c90b340db7463ca0a9fe3ec5cccca3d35313c108625cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQGVTEMV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuz4OYZYVdjSYlMsuP28CqgDNi4SyG85WBouVVlh9NGAIhAObniC3KyiEaAhYxHxnN6Dj3whbdF6r1ilGkPkiJF4FJKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzgs3GzetrdPaAmgdoq3AM5l2LaKDJ7qbmpaJPDE2ic5mGueZ4PezisUIKQj9pGjQAycvaLpbR5m3G43aH5mKlFyRd81LHhrGxqbo%2FCWaD5Hdt%2FOeIZ1WHAaWTSmu4KUUGu2kst%2FAGDUuHskdadPeb%2F3S7Kv%2B1B6C05x3UjpFLbgrIsaTl7As3dQoYwfIUw1EXH16R%2FMwVWwrQicumEKwpwF%2FCJpPphlf0ITzk0H2fnER9bFLOTkoi1rxDMbPGIVTkq7A5F5Wm46aL3nPZ8pRCwFacaIedxc%2BtRsqp3D9JUxpnRrmy7jghpu8FcfsXUWs6gu7a6RX1nHmJr6PVBhS%2BDaaeTkzYjMgv2QOzygLb9nnW0ND2Ju7nULNKoiSb6LuNqzxa4HrlEhCcjtuiko5btPYp4n6QaUamjOHUNcup2vaA2QDt4BVb0Le4ybc%2FTylZ3mjlLVPQDF9YxtacAvi4XnueQRSIa0FNMDEf%2FxpAVOSx0cZsmYrN%2FS7BQQI43RcZcKJOlgV56OQL%2FMn2pygWqwIttcMgjillIn78vqo07lEhATE0KeXUJFp7nhVU9B6SLoDI1Pr3KF5PZkCTBvNTDCwjzuysQq%2B36fHh1Hlx5YL6lPID%2Buv0NaoBwH66NCfmlzrly3nk%2BC9tg1TCckqe9BjqkAfK3oeLzhbGz60OwAtwSbaTZqCgrFPtwn76kaCjHZt35RV7F7xmU%2BxYVfZdNTIKgvAgu0BL%2BnYjq6C3KNV2tg7rL%2B2Qe3nQqaFm%2BonKXmDZTZSoFPgSjKeqXtzL8AdxZ6louMbFKZybYeGpzw47%2B2QqyX8OTj9Qgpka1DbGgpiF68m6dqGY5dsCZGoGe8tBpfSqJwDJOgj7Wah7PuWcAJXAvYtZ2&X-Amz-Signature=2debac0a3cb432be311a2d7118bc965fd7fc3be18a3ad85971ea84c2e37e6a86&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQGVTEMV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuz4OYZYVdjSYlMsuP28CqgDNi4SyG85WBouVVlh9NGAIhAObniC3KyiEaAhYxHxnN6Dj3whbdF6r1ilGkPkiJF4FJKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzgs3GzetrdPaAmgdoq3AM5l2LaKDJ7qbmpaJPDE2ic5mGueZ4PezisUIKQj9pGjQAycvaLpbR5m3G43aH5mKlFyRd81LHhrGxqbo%2FCWaD5Hdt%2FOeIZ1WHAaWTSmu4KUUGu2kst%2FAGDUuHskdadPeb%2F3S7Kv%2B1B6C05x3UjpFLbgrIsaTl7As3dQoYwfIUw1EXH16R%2FMwVWwrQicumEKwpwF%2FCJpPphlf0ITzk0H2fnER9bFLOTkoi1rxDMbPGIVTkq7A5F5Wm46aL3nPZ8pRCwFacaIedxc%2BtRsqp3D9JUxpnRrmy7jghpu8FcfsXUWs6gu7a6RX1nHmJr6PVBhS%2BDaaeTkzYjMgv2QOzygLb9nnW0ND2Ju7nULNKoiSb6LuNqzxa4HrlEhCcjtuiko5btPYp4n6QaUamjOHUNcup2vaA2QDt4BVb0Le4ybc%2FTylZ3mjlLVPQDF9YxtacAvi4XnueQRSIa0FNMDEf%2FxpAVOSx0cZsmYrN%2FS7BQQI43RcZcKJOlgV56OQL%2FMn2pygWqwIttcMgjillIn78vqo07lEhATE0KeXUJFp7nhVU9B6SLoDI1Pr3KF5PZkCTBvNTDCwjzuysQq%2B36fHh1Hlx5YL6lPID%2Buv0NaoBwH66NCfmlzrly3nk%2BC9tg1TCckqe9BjqkAfK3oeLzhbGz60OwAtwSbaTZqCgrFPtwn76kaCjHZt35RV7F7xmU%2BxYVfZdNTIKgvAgu0BL%2BnYjq6C3KNV2tg7rL%2B2Qe3nQqaFm%2BonKXmDZTZSoFPgSjKeqXtzL8AdxZ6louMbFKZybYeGpzw47%2B2QqyX8OTj9Qgpka1DbGgpiF68m6dqGY5dsCZGoGe8tBpfSqJwDJOgj7Wah7PuWcAJXAvYtZ2&X-Amz-Signature=17d1454b4faff2a7da5907423e640f6a403036c0266df77b13efa6ead8c3f329&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQGVTEMV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuz4OYZYVdjSYlMsuP28CqgDNi4SyG85WBouVVlh9NGAIhAObniC3KyiEaAhYxHxnN6Dj3whbdF6r1ilGkPkiJF4FJKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzgs3GzetrdPaAmgdoq3AM5l2LaKDJ7qbmpaJPDE2ic5mGueZ4PezisUIKQj9pGjQAycvaLpbR5m3G43aH5mKlFyRd81LHhrGxqbo%2FCWaD5Hdt%2FOeIZ1WHAaWTSmu4KUUGu2kst%2FAGDUuHskdadPeb%2F3S7Kv%2B1B6C05x3UjpFLbgrIsaTl7As3dQoYwfIUw1EXH16R%2FMwVWwrQicumEKwpwF%2FCJpPphlf0ITzk0H2fnER9bFLOTkoi1rxDMbPGIVTkq7A5F5Wm46aL3nPZ8pRCwFacaIedxc%2BtRsqp3D9JUxpnRrmy7jghpu8FcfsXUWs6gu7a6RX1nHmJr6PVBhS%2BDaaeTkzYjMgv2QOzygLb9nnW0ND2Ju7nULNKoiSb6LuNqzxa4HrlEhCcjtuiko5btPYp4n6QaUamjOHUNcup2vaA2QDt4BVb0Le4ybc%2FTylZ3mjlLVPQDF9YxtacAvi4XnueQRSIa0FNMDEf%2FxpAVOSx0cZsmYrN%2FS7BQQI43RcZcKJOlgV56OQL%2FMn2pygWqwIttcMgjillIn78vqo07lEhATE0KeXUJFp7nhVU9B6SLoDI1Pr3KF5PZkCTBvNTDCwjzuysQq%2B36fHh1Hlx5YL6lPID%2Buv0NaoBwH66NCfmlzrly3nk%2BC9tg1TCckqe9BjqkAfK3oeLzhbGz60OwAtwSbaTZqCgrFPtwn76kaCjHZt35RV7F7xmU%2BxYVfZdNTIKgvAgu0BL%2BnYjq6C3KNV2tg7rL%2B2Qe3nQqaFm%2BonKXmDZTZSoFPgSjKeqXtzL8AdxZ6louMbFKZybYeGpzw47%2B2QqyX8OTj9Qgpka1DbGgpiF68m6dqGY5dsCZGoGe8tBpfSqJwDJOgj7Wah7PuWcAJXAvYtZ2&X-Amz-Signature=e3577607957b98a20998f7b49de23abd5936642521ca91bcc18d4009040326c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQGVTEMV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuz4OYZYVdjSYlMsuP28CqgDNi4SyG85WBouVVlh9NGAIhAObniC3KyiEaAhYxHxnN6Dj3whbdF6r1ilGkPkiJF4FJKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzgs3GzetrdPaAmgdoq3AM5l2LaKDJ7qbmpaJPDE2ic5mGueZ4PezisUIKQj9pGjQAycvaLpbR5m3G43aH5mKlFyRd81LHhrGxqbo%2FCWaD5Hdt%2FOeIZ1WHAaWTSmu4KUUGu2kst%2FAGDUuHskdadPeb%2F3S7Kv%2B1B6C05x3UjpFLbgrIsaTl7As3dQoYwfIUw1EXH16R%2FMwVWwrQicumEKwpwF%2FCJpPphlf0ITzk0H2fnER9bFLOTkoi1rxDMbPGIVTkq7A5F5Wm46aL3nPZ8pRCwFacaIedxc%2BtRsqp3D9JUxpnRrmy7jghpu8FcfsXUWs6gu7a6RX1nHmJr6PVBhS%2BDaaeTkzYjMgv2QOzygLb9nnW0ND2Ju7nULNKoiSb6LuNqzxa4HrlEhCcjtuiko5btPYp4n6QaUamjOHUNcup2vaA2QDt4BVb0Le4ybc%2FTylZ3mjlLVPQDF9YxtacAvi4XnueQRSIa0FNMDEf%2FxpAVOSx0cZsmYrN%2FS7BQQI43RcZcKJOlgV56OQL%2FMn2pygWqwIttcMgjillIn78vqo07lEhATE0KeXUJFp7nhVU9B6SLoDI1Pr3KF5PZkCTBvNTDCwjzuysQq%2B36fHh1Hlx5YL6lPID%2Buv0NaoBwH66NCfmlzrly3nk%2BC9tg1TCckqe9BjqkAfK3oeLzhbGz60OwAtwSbaTZqCgrFPtwn76kaCjHZt35RV7F7xmU%2BxYVfZdNTIKgvAgu0BL%2BnYjq6C3KNV2tg7rL%2B2Qe3nQqaFm%2BonKXmDZTZSoFPgSjKeqXtzL8AdxZ6louMbFKZybYeGpzw47%2B2QqyX8OTj9Qgpka1DbGgpiF68m6dqGY5dsCZGoGe8tBpfSqJwDJOgj7Wah7PuWcAJXAvYtZ2&X-Amz-Signature=1f7b46f82f36b538f6d09daea54b45b4e4c54d1fdb205ff38dda73282c78ff77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
