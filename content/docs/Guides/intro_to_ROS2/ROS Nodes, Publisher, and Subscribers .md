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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4T5JH6O%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvnEANDjoSYWZEB%2BxvqBWIOn3wScmLPgSJNTXx3kRRXwIgPM41tL3flsDBaPtW2fd7oCIL2EkEY9vovGEu4dxwXUwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhX4dt9gNr3fYFMHircA%2Bg9PUu9zz94x2CLn0TfMbdMt%2FD5%2FNDxbUzz06Fm34tduEk%2Bxc0Pu%2B%2F6U0yB6Iqx%2BTb08qHfa%2FCf5XyrkN3ysyytDMx3tik5pqnFf30QtPmrJ5YKhuWJ7RTifRjMBWp0Lfu3aM7nY2ABVcU0SablueEHilfANm6caImN1K3XknxNWz%2BlQ287XXFBGyZaPvCzdRGE8t9hXAqKpWzQSiUKqDiSfk0Mc7Y7OMMQ1wOuBkx5MYv4ElwW3kmVtdYDadR6jFJKcL%2BShzBjgJwL3npHsLZU5THIAG4mvqk74Lm2nNH0P9OpXZ8B%2Fdjr04LiaeRO%2B5sKx3t6MtXq%2BML3ejHWhYhbKjA6LIwoC29n2MVNSX7e%2BEPX4QaJvdWDAPLQ9rFeQUUhCfuuAm0EHjiSWmfdZSl5lbv3DfrueseWdhitGYgyf975ThkhOVd3OLIF0hwF7wHex3OJfIL9y9%2FE0%2BEvFa9Evb%2FAHpDuvzeRoKpPl5y4oTMvLdfMZQYmDlRwOAqEZuKOsBHoqR6eDpSlz3QoSqN09RxTpVB5d6teMmYfiPyztxLDCuh9XPUVVOTPZ6N3eXaVzzHCxxIuwUxeJh%2BxK%2FoYQ49wczt5Y4hgE%2BRQiEzY938i7CiKYOte%2F2C3MP%2Fvp8QGOqUBxb35h2cyZEjT5pW9208m52%2FiU80ciCB0FH0pXbeV1vafnz2Fj8Ebneyg4551BmHRb0QQfSto4H74ZNyP9yAyvdMSEO3%2BM9e9YgGTk3gic1XLh%2Fm%2BmLjepBZMTOewu6bLcdZJLQpD5ykatjFqH6dwTmwezvVifzgJgdJr4t4L9u8pmEVDr5Y%2FOh3%2FcX%2BhOwtwHsi7tE5fVecyR%2FKEVQIachriKTAR&X-Amz-Signature=c13a2c036483e44f72add201d5bbafa936a5bbe70190bef53efc3383012a2719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4T5JH6O%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvnEANDjoSYWZEB%2BxvqBWIOn3wScmLPgSJNTXx3kRRXwIgPM41tL3flsDBaPtW2fd7oCIL2EkEY9vovGEu4dxwXUwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhX4dt9gNr3fYFMHircA%2Bg9PUu9zz94x2CLn0TfMbdMt%2FD5%2FNDxbUzz06Fm34tduEk%2Bxc0Pu%2B%2F6U0yB6Iqx%2BTb08qHfa%2FCf5XyrkN3ysyytDMx3tik5pqnFf30QtPmrJ5YKhuWJ7RTifRjMBWp0Lfu3aM7nY2ABVcU0SablueEHilfANm6caImN1K3XknxNWz%2BlQ287XXFBGyZaPvCzdRGE8t9hXAqKpWzQSiUKqDiSfk0Mc7Y7OMMQ1wOuBkx5MYv4ElwW3kmVtdYDadR6jFJKcL%2BShzBjgJwL3npHsLZU5THIAG4mvqk74Lm2nNH0P9OpXZ8B%2Fdjr04LiaeRO%2B5sKx3t6MtXq%2BML3ejHWhYhbKjA6LIwoC29n2MVNSX7e%2BEPX4QaJvdWDAPLQ9rFeQUUhCfuuAm0EHjiSWmfdZSl5lbv3DfrueseWdhitGYgyf975ThkhOVd3OLIF0hwF7wHex3OJfIL9y9%2FE0%2BEvFa9Evb%2FAHpDuvzeRoKpPl5y4oTMvLdfMZQYmDlRwOAqEZuKOsBHoqR6eDpSlz3QoSqN09RxTpVB5d6teMmYfiPyztxLDCuh9XPUVVOTPZ6N3eXaVzzHCxxIuwUxeJh%2BxK%2FoYQ49wczt5Y4hgE%2BRQiEzY938i7CiKYOte%2F2C3MP%2Fvp8QGOqUBxb35h2cyZEjT5pW9208m52%2FiU80ciCB0FH0pXbeV1vafnz2Fj8Ebneyg4551BmHRb0QQfSto4H74ZNyP9yAyvdMSEO3%2BM9e9YgGTk3gic1XLh%2Fm%2BmLjepBZMTOewu6bLcdZJLQpD5ykatjFqH6dwTmwezvVifzgJgdJr4t4L9u8pmEVDr5Y%2FOh3%2FcX%2BhOwtwHsi7tE5fVecyR%2FKEVQIachriKTAR&X-Amz-Signature=b68c6b1f2e7b45780bb22618a790a4d3d8ddee99b0385bff0ca6335efa27839a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4T5JH6O%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvnEANDjoSYWZEB%2BxvqBWIOn3wScmLPgSJNTXx3kRRXwIgPM41tL3flsDBaPtW2fd7oCIL2EkEY9vovGEu4dxwXUwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhX4dt9gNr3fYFMHircA%2Bg9PUu9zz94x2CLn0TfMbdMt%2FD5%2FNDxbUzz06Fm34tduEk%2Bxc0Pu%2B%2F6U0yB6Iqx%2BTb08qHfa%2FCf5XyrkN3ysyytDMx3tik5pqnFf30QtPmrJ5YKhuWJ7RTifRjMBWp0Lfu3aM7nY2ABVcU0SablueEHilfANm6caImN1K3XknxNWz%2BlQ287XXFBGyZaPvCzdRGE8t9hXAqKpWzQSiUKqDiSfk0Mc7Y7OMMQ1wOuBkx5MYv4ElwW3kmVtdYDadR6jFJKcL%2BShzBjgJwL3npHsLZU5THIAG4mvqk74Lm2nNH0P9OpXZ8B%2Fdjr04LiaeRO%2B5sKx3t6MtXq%2BML3ejHWhYhbKjA6LIwoC29n2MVNSX7e%2BEPX4QaJvdWDAPLQ9rFeQUUhCfuuAm0EHjiSWmfdZSl5lbv3DfrueseWdhitGYgyf975ThkhOVd3OLIF0hwF7wHex3OJfIL9y9%2FE0%2BEvFa9Evb%2FAHpDuvzeRoKpPl5y4oTMvLdfMZQYmDlRwOAqEZuKOsBHoqR6eDpSlz3QoSqN09RxTpVB5d6teMmYfiPyztxLDCuh9XPUVVOTPZ6N3eXaVzzHCxxIuwUxeJh%2BxK%2FoYQ49wczt5Y4hgE%2BRQiEzY938i7CiKYOte%2F2C3MP%2Fvp8QGOqUBxb35h2cyZEjT5pW9208m52%2FiU80ciCB0FH0pXbeV1vafnz2Fj8Ebneyg4551BmHRb0QQfSto4H74ZNyP9yAyvdMSEO3%2BM9e9YgGTk3gic1XLh%2Fm%2BmLjepBZMTOewu6bLcdZJLQpD5ykatjFqH6dwTmwezvVifzgJgdJr4t4L9u8pmEVDr5Y%2FOh3%2FcX%2BhOwtwHsi7tE5fVecyR%2FKEVQIachriKTAR&X-Amz-Signature=15d1e924ccb85bec2061dec6416c6d426d8c36dd4bb6cbddb25d90cb17241f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4T5JH6O%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvnEANDjoSYWZEB%2BxvqBWIOn3wScmLPgSJNTXx3kRRXwIgPM41tL3flsDBaPtW2fd7oCIL2EkEY9vovGEu4dxwXUwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhX4dt9gNr3fYFMHircA%2Bg9PUu9zz94x2CLn0TfMbdMt%2FD5%2FNDxbUzz06Fm34tduEk%2Bxc0Pu%2B%2F6U0yB6Iqx%2BTb08qHfa%2FCf5XyrkN3ysyytDMx3tik5pqnFf30QtPmrJ5YKhuWJ7RTifRjMBWp0Lfu3aM7nY2ABVcU0SablueEHilfANm6caImN1K3XknxNWz%2BlQ287XXFBGyZaPvCzdRGE8t9hXAqKpWzQSiUKqDiSfk0Mc7Y7OMMQ1wOuBkx5MYv4ElwW3kmVtdYDadR6jFJKcL%2BShzBjgJwL3npHsLZU5THIAG4mvqk74Lm2nNH0P9OpXZ8B%2Fdjr04LiaeRO%2B5sKx3t6MtXq%2BML3ejHWhYhbKjA6LIwoC29n2MVNSX7e%2BEPX4QaJvdWDAPLQ9rFeQUUhCfuuAm0EHjiSWmfdZSl5lbv3DfrueseWdhitGYgyf975ThkhOVd3OLIF0hwF7wHex3OJfIL9y9%2FE0%2BEvFa9Evb%2FAHpDuvzeRoKpPl5y4oTMvLdfMZQYmDlRwOAqEZuKOsBHoqR6eDpSlz3QoSqN09RxTpVB5d6teMmYfiPyztxLDCuh9XPUVVOTPZ6N3eXaVzzHCxxIuwUxeJh%2BxK%2FoYQ49wczt5Y4hgE%2BRQiEzY938i7CiKYOte%2F2C3MP%2Fvp8QGOqUBxb35h2cyZEjT5pW9208m52%2FiU80ciCB0FH0pXbeV1vafnz2Fj8Ebneyg4551BmHRb0QQfSto4H74ZNyP9yAyvdMSEO3%2BM9e9YgGTk3gic1XLh%2Fm%2BmLjepBZMTOewu6bLcdZJLQpD5ykatjFqH6dwTmwezvVifzgJgdJr4t4L9u8pmEVDr5Y%2FOh3%2FcX%2BhOwtwHsi7tE5fVecyR%2FKEVQIachriKTAR&X-Amz-Signature=d1125e48016a4511596bbb4b23ce2d8a95af79027a2679c0ea9326733590be38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4T5JH6O%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvnEANDjoSYWZEB%2BxvqBWIOn3wScmLPgSJNTXx3kRRXwIgPM41tL3flsDBaPtW2fd7oCIL2EkEY9vovGEu4dxwXUwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhX4dt9gNr3fYFMHircA%2Bg9PUu9zz94x2CLn0TfMbdMt%2FD5%2FNDxbUzz06Fm34tduEk%2Bxc0Pu%2B%2F6U0yB6Iqx%2BTb08qHfa%2FCf5XyrkN3ysyytDMx3tik5pqnFf30QtPmrJ5YKhuWJ7RTifRjMBWp0Lfu3aM7nY2ABVcU0SablueEHilfANm6caImN1K3XknxNWz%2BlQ287XXFBGyZaPvCzdRGE8t9hXAqKpWzQSiUKqDiSfk0Mc7Y7OMMQ1wOuBkx5MYv4ElwW3kmVtdYDadR6jFJKcL%2BShzBjgJwL3npHsLZU5THIAG4mvqk74Lm2nNH0P9OpXZ8B%2Fdjr04LiaeRO%2B5sKx3t6MtXq%2BML3ejHWhYhbKjA6LIwoC29n2MVNSX7e%2BEPX4QaJvdWDAPLQ9rFeQUUhCfuuAm0EHjiSWmfdZSl5lbv3DfrueseWdhitGYgyf975ThkhOVd3OLIF0hwF7wHex3OJfIL9y9%2FE0%2BEvFa9Evb%2FAHpDuvzeRoKpPl5y4oTMvLdfMZQYmDlRwOAqEZuKOsBHoqR6eDpSlz3QoSqN09RxTpVB5d6teMmYfiPyztxLDCuh9XPUVVOTPZ6N3eXaVzzHCxxIuwUxeJh%2BxK%2FoYQ49wczt5Y4hgE%2BRQiEzY938i7CiKYOte%2F2C3MP%2Fvp8QGOqUBxb35h2cyZEjT5pW9208m52%2FiU80ciCB0FH0pXbeV1vafnz2Fj8Ebneyg4551BmHRb0QQfSto4H74ZNyP9yAyvdMSEO3%2BM9e9YgGTk3gic1XLh%2Fm%2BmLjepBZMTOewu6bLcdZJLQpD5ykatjFqH6dwTmwezvVifzgJgdJr4t4L9u8pmEVDr5Y%2FOh3%2FcX%2BhOwtwHsi7tE5fVecyR%2FKEVQIachriKTAR&X-Amz-Signature=b090b4df85745e98bbebbd2547eb9f2caa7f74e31f9d2d1b08fdf5ac9bcf369a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4T5JH6O%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvnEANDjoSYWZEB%2BxvqBWIOn3wScmLPgSJNTXx3kRRXwIgPM41tL3flsDBaPtW2fd7oCIL2EkEY9vovGEu4dxwXUwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhX4dt9gNr3fYFMHircA%2Bg9PUu9zz94x2CLn0TfMbdMt%2FD5%2FNDxbUzz06Fm34tduEk%2Bxc0Pu%2B%2F6U0yB6Iqx%2BTb08qHfa%2FCf5XyrkN3ysyytDMx3tik5pqnFf30QtPmrJ5YKhuWJ7RTifRjMBWp0Lfu3aM7nY2ABVcU0SablueEHilfANm6caImN1K3XknxNWz%2BlQ287XXFBGyZaPvCzdRGE8t9hXAqKpWzQSiUKqDiSfk0Mc7Y7OMMQ1wOuBkx5MYv4ElwW3kmVtdYDadR6jFJKcL%2BShzBjgJwL3npHsLZU5THIAG4mvqk74Lm2nNH0P9OpXZ8B%2Fdjr04LiaeRO%2B5sKx3t6MtXq%2BML3ejHWhYhbKjA6LIwoC29n2MVNSX7e%2BEPX4QaJvdWDAPLQ9rFeQUUhCfuuAm0EHjiSWmfdZSl5lbv3DfrueseWdhitGYgyf975ThkhOVd3OLIF0hwF7wHex3OJfIL9y9%2FE0%2BEvFa9Evb%2FAHpDuvzeRoKpPl5y4oTMvLdfMZQYmDlRwOAqEZuKOsBHoqR6eDpSlz3QoSqN09RxTpVB5d6teMmYfiPyztxLDCuh9XPUVVOTPZ6N3eXaVzzHCxxIuwUxeJh%2BxK%2FoYQ49wczt5Y4hgE%2BRQiEzY938i7CiKYOte%2F2C3MP%2Fvp8QGOqUBxb35h2cyZEjT5pW9208m52%2FiU80ciCB0FH0pXbeV1vafnz2Fj8Ebneyg4551BmHRb0QQfSto4H74ZNyP9yAyvdMSEO3%2BM9e9YgGTk3gic1XLh%2Fm%2BmLjepBZMTOewu6bLcdZJLQpD5ykatjFqH6dwTmwezvVifzgJgdJr4t4L9u8pmEVDr5Y%2FOh3%2FcX%2BhOwtwHsi7tE5fVecyR%2FKEVQIachriKTAR&X-Amz-Signature=5c0547167da723b61349a88494d44f5e3bf95fcf8024381f7c1f5fbe2bb783cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4T5JH6O%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvnEANDjoSYWZEB%2BxvqBWIOn3wScmLPgSJNTXx3kRRXwIgPM41tL3flsDBaPtW2fd7oCIL2EkEY9vovGEu4dxwXUwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhX4dt9gNr3fYFMHircA%2Bg9PUu9zz94x2CLn0TfMbdMt%2FD5%2FNDxbUzz06Fm34tduEk%2Bxc0Pu%2B%2F6U0yB6Iqx%2BTb08qHfa%2FCf5XyrkN3ysyytDMx3tik5pqnFf30QtPmrJ5YKhuWJ7RTifRjMBWp0Lfu3aM7nY2ABVcU0SablueEHilfANm6caImN1K3XknxNWz%2BlQ287XXFBGyZaPvCzdRGE8t9hXAqKpWzQSiUKqDiSfk0Mc7Y7OMMQ1wOuBkx5MYv4ElwW3kmVtdYDadR6jFJKcL%2BShzBjgJwL3npHsLZU5THIAG4mvqk74Lm2nNH0P9OpXZ8B%2Fdjr04LiaeRO%2B5sKx3t6MtXq%2BML3ejHWhYhbKjA6LIwoC29n2MVNSX7e%2BEPX4QaJvdWDAPLQ9rFeQUUhCfuuAm0EHjiSWmfdZSl5lbv3DfrueseWdhitGYgyf975ThkhOVd3OLIF0hwF7wHex3OJfIL9y9%2FE0%2BEvFa9Evb%2FAHpDuvzeRoKpPl5y4oTMvLdfMZQYmDlRwOAqEZuKOsBHoqR6eDpSlz3QoSqN09RxTpVB5d6teMmYfiPyztxLDCuh9XPUVVOTPZ6N3eXaVzzHCxxIuwUxeJh%2BxK%2FoYQ49wczt5Y4hgE%2BRQiEzY938i7CiKYOte%2F2C3MP%2Fvp8QGOqUBxb35h2cyZEjT5pW9208m52%2FiU80ciCB0FH0pXbeV1vafnz2Fj8Ebneyg4551BmHRb0QQfSto4H74ZNyP9yAyvdMSEO3%2BM9e9YgGTk3gic1XLh%2Fm%2BmLjepBZMTOewu6bLcdZJLQpD5ykatjFqH6dwTmwezvVifzgJgdJr4t4L9u8pmEVDr5Y%2FOh3%2FcX%2BhOwtwHsi7tE5fVecyR%2FKEVQIachriKTAR&X-Amz-Signature=253c79633bcbefde4545a63270fc89cb903a66a8e1a99b75587c102fffc464cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4T5JH6O%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvnEANDjoSYWZEB%2BxvqBWIOn3wScmLPgSJNTXx3kRRXwIgPM41tL3flsDBaPtW2fd7oCIL2EkEY9vovGEu4dxwXUwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhX4dt9gNr3fYFMHircA%2Bg9PUu9zz94x2CLn0TfMbdMt%2FD5%2FNDxbUzz06Fm34tduEk%2Bxc0Pu%2B%2F6U0yB6Iqx%2BTb08qHfa%2FCf5XyrkN3ysyytDMx3tik5pqnFf30QtPmrJ5YKhuWJ7RTifRjMBWp0Lfu3aM7nY2ABVcU0SablueEHilfANm6caImN1K3XknxNWz%2BlQ287XXFBGyZaPvCzdRGE8t9hXAqKpWzQSiUKqDiSfk0Mc7Y7OMMQ1wOuBkx5MYv4ElwW3kmVtdYDadR6jFJKcL%2BShzBjgJwL3npHsLZU5THIAG4mvqk74Lm2nNH0P9OpXZ8B%2Fdjr04LiaeRO%2B5sKx3t6MtXq%2BML3ejHWhYhbKjA6LIwoC29n2MVNSX7e%2BEPX4QaJvdWDAPLQ9rFeQUUhCfuuAm0EHjiSWmfdZSl5lbv3DfrueseWdhitGYgyf975ThkhOVd3OLIF0hwF7wHex3OJfIL9y9%2FE0%2BEvFa9Evb%2FAHpDuvzeRoKpPl5y4oTMvLdfMZQYmDlRwOAqEZuKOsBHoqR6eDpSlz3QoSqN09RxTpVB5d6teMmYfiPyztxLDCuh9XPUVVOTPZ6N3eXaVzzHCxxIuwUxeJh%2BxK%2FoYQ49wczt5Y4hgE%2BRQiEzY938i7CiKYOte%2F2C3MP%2Fvp8QGOqUBxb35h2cyZEjT5pW9208m52%2FiU80ciCB0FH0pXbeV1vafnz2Fj8Ebneyg4551BmHRb0QQfSto4H74ZNyP9yAyvdMSEO3%2BM9e9YgGTk3gic1XLh%2Fm%2BmLjepBZMTOewu6bLcdZJLQpD5ykatjFqH6dwTmwezvVifzgJgdJr4t4L9u8pmEVDr5Y%2FOh3%2FcX%2BhOwtwHsi7tE5fVecyR%2FKEVQIachriKTAR&X-Amz-Signature=3f4b6fce5cf6928698b9ed93876101acaa6fd50fa5d09afa01f565c7138a073f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
