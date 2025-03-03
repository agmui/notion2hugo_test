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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNOCHCLV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAshTkHeXNxfr8kJiw7LRCWyciqMvcrchSNWJkUw7aVAiAUDOXrEmyW6Vfa%2F%2BFT6HYKGK5M5HxBg6nlrFznxRvLGiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhoDi9Greshft%2B1jKtwD3P7cz8kbsLjsQcNP318ZYzknPFa6srkX6RkuN%2BD7tvj3cl4%2BeZsKQaRoJj4WBTAuwfAO1cTOPgE4v4m62MgBQWVN9MtF9SCfFvoVj1a%2BGhXdcFLcCnfLrrlvHowqrbvMun11X2gnyjBLGJRB8KGB1AdhFykVALHMw1grOJ4tJzdHUkk3RpUSF7qN7ySdbiQk1aUvFOMJnccJAVnQ%2F1Vr%2F5MfM6%2F9B9gnbpMRpSzHFW69To9%2BRPrslgPYk5VwgvP0AM3c6B5J7wOL4rQ%2F0zGiG4kWbBP%2FhV1bz2nlKdKKmOwHMAf1EYC7Fc4XLTT%2B%2FevWYsyBlVWvETvCIEK7dMkv8NTP2tG9qxd1BIvpyqF8Gfo4ED6ZEzY9C%2BO2qprdH7Z%2BluyctfEdU4Q%2BM5Y8b3L6Bcc%2Fmn9j1x0cj2NnILrz1k%2FcQfHDcjfmjRlFqixIoQyghlZeYsyN33lsoY%2FCh7JjPfSZn8yJ5uCMcTP5yTLdTf1QOQrOyh01HT1gwTbCKCiXcKkE4T214nx8qK0L4n0o0xZoGUIQwnAGXwjH8bGy2IHcGUU4Cdt2AG4F44Af8jO8WFx%2BoRWK1%2FLyrBWs4eQGRNWk84D1JBOV9bA6DlkGWwC3ukMH%2FkNaoItwzI8w9JmYvgY6pgENCx7yYlYqPSZ7Syt84xKR6pyE6HheaByME7oVyTvbv4maECWZjHleqRdwgPwGsc%2B88Txi2Fs2kqEOauuDj0Ec3AJTqfvAB%2FKcdCsjPGKGpwxoKLpgV1hSEVuPK6%2FiyM17IpauBfAsNUdnbYPIFhlcT3NkV4Hyd7EqWcUAZ3hjW5hG2yLPS46KMOJ563GNXXWT5bSl0X563kC6eYQvUBOUEuXAZzbU&X-Amz-Signature=6e7d28185eebb098a0462730a0e823a8a386524d59f4bb541bd1aefdba7a8b10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNOCHCLV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAshTkHeXNxfr8kJiw7LRCWyciqMvcrchSNWJkUw7aVAiAUDOXrEmyW6Vfa%2F%2BFT6HYKGK5M5HxBg6nlrFznxRvLGiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhoDi9Greshft%2B1jKtwD3P7cz8kbsLjsQcNP318ZYzknPFa6srkX6RkuN%2BD7tvj3cl4%2BeZsKQaRoJj4WBTAuwfAO1cTOPgE4v4m62MgBQWVN9MtF9SCfFvoVj1a%2BGhXdcFLcCnfLrrlvHowqrbvMun11X2gnyjBLGJRB8KGB1AdhFykVALHMw1grOJ4tJzdHUkk3RpUSF7qN7ySdbiQk1aUvFOMJnccJAVnQ%2F1Vr%2F5MfM6%2F9B9gnbpMRpSzHFW69To9%2BRPrslgPYk5VwgvP0AM3c6B5J7wOL4rQ%2F0zGiG4kWbBP%2FhV1bz2nlKdKKmOwHMAf1EYC7Fc4XLTT%2B%2FevWYsyBlVWvETvCIEK7dMkv8NTP2tG9qxd1BIvpyqF8Gfo4ED6ZEzY9C%2BO2qprdH7Z%2BluyctfEdU4Q%2BM5Y8b3L6Bcc%2Fmn9j1x0cj2NnILrz1k%2FcQfHDcjfmjRlFqixIoQyghlZeYsyN33lsoY%2FCh7JjPfSZn8yJ5uCMcTP5yTLdTf1QOQrOyh01HT1gwTbCKCiXcKkE4T214nx8qK0L4n0o0xZoGUIQwnAGXwjH8bGy2IHcGUU4Cdt2AG4F44Af8jO8WFx%2BoRWK1%2FLyrBWs4eQGRNWk84D1JBOV9bA6DlkGWwC3ukMH%2FkNaoItwzI8w9JmYvgY6pgENCx7yYlYqPSZ7Syt84xKR6pyE6HheaByME7oVyTvbv4maECWZjHleqRdwgPwGsc%2B88Txi2Fs2kqEOauuDj0Ec3AJTqfvAB%2FKcdCsjPGKGpwxoKLpgV1hSEVuPK6%2FiyM17IpauBfAsNUdnbYPIFhlcT3NkV4Hyd7EqWcUAZ3hjW5hG2yLPS46KMOJ563GNXXWT5bSl0X563kC6eYQvUBOUEuXAZzbU&X-Amz-Signature=05679c32e2c4693e036471cdf0dd677ff5d5374307fa2f5f13bce53d0d22d0f9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNOCHCLV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAshTkHeXNxfr8kJiw7LRCWyciqMvcrchSNWJkUw7aVAiAUDOXrEmyW6Vfa%2F%2BFT6HYKGK5M5HxBg6nlrFznxRvLGiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhoDi9Greshft%2B1jKtwD3P7cz8kbsLjsQcNP318ZYzknPFa6srkX6RkuN%2BD7tvj3cl4%2BeZsKQaRoJj4WBTAuwfAO1cTOPgE4v4m62MgBQWVN9MtF9SCfFvoVj1a%2BGhXdcFLcCnfLrrlvHowqrbvMun11X2gnyjBLGJRB8KGB1AdhFykVALHMw1grOJ4tJzdHUkk3RpUSF7qN7ySdbiQk1aUvFOMJnccJAVnQ%2F1Vr%2F5MfM6%2F9B9gnbpMRpSzHFW69To9%2BRPrslgPYk5VwgvP0AM3c6B5J7wOL4rQ%2F0zGiG4kWbBP%2FhV1bz2nlKdKKmOwHMAf1EYC7Fc4XLTT%2B%2FevWYsyBlVWvETvCIEK7dMkv8NTP2tG9qxd1BIvpyqF8Gfo4ED6ZEzY9C%2BO2qprdH7Z%2BluyctfEdU4Q%2BM5Y8b3L6Bcc%2Fmn9j1x0cj2NnILrz1k%2FcQfHDcjfmjRlFqixIoQyghlZeYsyN33lsoY%2FCh7JjPfSZn8yJ5uCMcTP5yTLdTf1QOQrOyh01HT1gwTbCKCiXcKkE4T214nx8qK0L4n0o0xZoGUIQwnAGXwjH8bGy2IHcGUU4Cdt2AG4F44Af8jO8WFx%2BoRWK1%2FLyrBWs4eQGRNWk84D1JBOV9bA6DlkGWwC3ukMH%2FkNaoItwzI8w9JmYvgY6pgENCx7yYlYqPSZ7Syt84xKR6pyE6HheaByME7oVyTvbv4maECWZjHleqRdwgPwGsc%2B88Txi2Fs2kqEOauuDj0Ec3AJTqfvAB%2FKcdCsjPGKGpwxoKLpgV1hSEVuPK6%2FiyM17IpauBfAsNUdnbYPIFhlcT3NkV4Hyd7EqWcUAZ3hjW5hG2yLPS46KMOJ563GNXXWT5bSl0X563kC6eYQvUBOUEuXAZzbU&X-Amz-Signature=4e2eadbdb769ffd69033314de9e85c845f7299c3268fc453a638a387b083d2d9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNOCHCLV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAshTkHeXNxfr8kJiw7LRCWyciqMvcrchSNWJkUw7aVAiAUDOXrEmyW6Vfa%2F%2BFT6HYKGK5M5HxBg6nlrFznxRvLGiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhoDi9Greshft%2B1jKtwD3P7cz8kbsLjsQcNP318ZYzknPFa6srkX6RkuN%2BD7tvj3cl4%2BeZsKQaRoJj4WBTAuwfAO1cTOPgE4v4m62MgBQWVN9MtF9SCfFvoVj1a%2BGhXdcFLcCnfLrrlvHowqrbvMun11X2gnyjBLGJRB8KGB1AdhFykVALHMw1grOJ4tJzdHUkk3RpUSF7qN7ySdbiQk1aUvFOMJnccJAVnQ%2F1Vr%2F5MfM6%2F9B9gnbpMRpSzHFW69To9%2BRPrslgPYk5VwgvP0AM3c6B5J7wOL4rQ%2F0zGiG4kWbBP%2FhV1bz2nlKdKKmOwHMAf1EYC7Fc4XLTT%2B%2FevWYsyBlVWvETvCIEK7dMkv8NTP2tG9qxd1BIvpyqF8Gfo4ED6ZEzY9C%2BO2qprdH7Z%2BluyctfEdU4Q%2BM5Y8b3L6Bcc%2Fmn9j1x0cj2NnILrz1k%2FcQfHDcjfmjRlFqixIoQyghlZeYsyN33lsoY%2FCh7JjPfSZn8yJ5uCMcTP5yTLdTf1QOQrOyh01HT1gwTbCKCiXcKkE4T214nx8qK0L4n0o0xZoGUIQwnAGXwjH8bGy2IHcGUU4Cdt2AG4F44Af8jO8WFx%2BoRWK1%2FLyrBWs4eQGRNWk84D1JBOV9bA6DlkGWwC3ukMH%2FkNaoItwzI8w9JmYvgY6pgENCx7yYlYqPSZ7Syt84xKR6pyE6HheaByME7oVyTvbv4maECWZjHleqRdwgPwGsc%2B88Txi2Fs2kqEOauuDj0Ec3AJTqfvAB%2FKcdCsjPGKGpwxoKLpgV1hSEVuPK6%2FiyM17IpauBfAsNUdnbYPIFhlcT3NkV4Hyd7EqWcUAZ3hjW5hG2yLPS46KMOJ563GNXXWT5bSl0X563kC6eYQvUBOUEuXAZzbU&X-Amz-Signature=9473648b5ad1dd3fb89f6edc7b5260baf97f5332afa0b7b421dc8f116d60d951&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNOCHCLV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAshTkHeXNxfr8kJiw7LRCWyciqMvcrchSNWJkUw7aVAiAUDOXrEmyW6Vfa%2F%2BFT6HYKGK5M5HxBg6nlrFznxRvLGiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhoDi9Greshft%2B1jKtwD3P7cz8kbsLjsQcNP318ZYzknPFa6srkX6RkuN%2BD7tvj3cl4%2BeZsKQaRoJj4WBTAuwfAO1cTOPgE4v4m62MgBQWVN9MtF9SCfFvoVj1a%2BGhXdcFLcCnfLrrlvHowqrbvMun11X2gnyjBLGJRB8KGB1AdhFykVALHMw1grOJ4tJzdHUkk3RpUSF7qN7ySdbiQk1aUvFOMJnccJAVnQ%2F1Vr%2F5MfM6%2F9B9gnbpMRpSzHFW69To9%2BRPrslgPYk5VwgvP0AM3c6B5J7wOL4rQ%2F0zGiG4kWbBP%2FhV1bz2nlKdKKmOwHMAf1EYC7Fc4XLTT%2B%2FevWYsyBlVWvETvCIEK7dMkv8NTP2tG9qxd1BIvpyqF8Gfo4ED6ZEzY9C%2BO2qprdH7Z%2BluyctfEdU4Q%2BM5Y8b3L6Bcc%2Fmn9j1x0cj2NnILrz1k%2FcQfHDcjfmjRlFqixIoQyghlZeYsyN33lsoY%2FCh7JjPfSZn8yJ5uCMcTP5yTLdTf1QOQrOyh01HT1gwTbCKCiXcKkE4T214nx8qK0L4n0o0xZoGUIQwnAGXwjH8bGy2IHcGUU4Cdt2AG4F44Af8jO8WFx%2BoRWK1%2FLyrBWs4eQGRNWk84D1JBOV9bA6DlkGWwC3ukMH%2FkNaoItwzI8w9JmYvgY6pgENCx7yYlYqPSZ7Syt84xKR6pyE6HheaByME7oVyTvbv4maECWZjHleqRdwgPwGsc%2B88Txi2Fs2kqEOauuDj0Ec3AJTqfvAB%2FKcdCsjPGKGpwxoKLpgV1hSEVuPK6%2FiyM17IpauBfAsNUdnbYPIFhlcT3NkV4Hyd7EqWcUAZ3hjW5hG2yLPS46KMOJ563GNXXWT5bSl0X563kC6eYQvUBOUEuXAZzbU&X-Amz-Signature=46c595c77f088cdcb7805733ce181f74ce50ec886b92b5ced43851f39d2c5d96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNOCHCLV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAshTkHeXNxfr8kJiw7LRCWyciqMvcrchSNWJkUw7aVAiAUDOXrEmyW6Vfa%2F%2BFT6HYKGK5M5HxBg6nlrFznxRvLGiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhoDi9Greshft%2B1jKtwD3P7cz8kbsLjsQcNP318ZYzknPFa6srkX6RkuN%2BD7tvj3cl4%2BeZsKQaRoJj4WBTAuwfAO1cTOPgE4v4m62MgBQWVN9MtF9SCfFvoVj1a%2BGhXdcFLcCnfLrrlvHowqrbvMun11X2gnyjBLGJRB8KGB1AdhFykVALHMw1grOJ4tJzdHUkk3RpUSF7qN7ySdbiQk1aUvFOMJnccJAVnQ%2F1Vr%2F5MfM6%2F9B9gnbpMRpSzHFW69To9%2BRPrslgPYk5VwgvP0AM3c6B5J7wOL4rQ%2F0zGiG4kWbBP%2FhV1bz2nlKdKKmOwHMAf1EYC7Fc4XLTT%2B%2FevWYsyBlVWvETvCIEK7dMkv8NTP2tG9qxd1BIvpyqF8Gfo4ED6ZEzY9C%2BO2qprdH7Z%2BluyctfEdU4Q%2BM5Y8b3L6Bcc%2Fmn9j1x0cj2NnILrz1k%2FcQfHDcjfmjRlFqixIoQyghlZeYsyN33lsoY%2FCh7JjPfSZn8yJ5uCMcTP5yTLdTf1QOQrOyh01HT1gwTbCKCiXcKkE4T214nx8qK0L4n0o0xZoGUIQwnAGXwjH8bGy2IHcGUU4Cdt2AG4F44Af8jO8WFx%2BoRWK1%2FLyrBWs4eQGRNWk84D1JBOV9bA6DlkGWwC3ukMH%2FkNaoItwzI8w9JmYvgY6pgENCx7yYlYqPSZ7Syt84xKR6pyE6HheaByME7oVyTvbv4maECWZjHleqRdwgPwGsc%2B88Txi2Fs2kqEOauuDj0Ec3AJTqfvAB%2FKcdCsjPGKGpwxoKLpgV1hSEVuPK6%2FiyM17IpauBfAsNUdnbYPIFhlcT3NkV4Hyd7EqWcUAZ3hjW5hG2yLPS46KMOJ563GNXXWT5bSl0X563kC6eYQvUBOUEuXAZzbU&X-Amz-Signature=686f07ee900c18aa835192653f031860ffeb2d3ec98baef9174b576c2937e674&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNOCHCLV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAshTkHeXNxfr8kJiw7LRCWyciqMvcrchSNWJkUw7aVAiAUDOXrEmyW6Vfa%2F%2BFT6HYKGK5M5HxBg6nlrFznxRvLGiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhoDi9Greshft%2B1jKtwD3P7cz8kbsLjsQcNP318ZYzknPFa6srkX6RkuN%2BD7tvj3cl4%2BeZsKQaRoJj4WBTAuwfAO1cTOPgE4v4m62MgBQWVN9MtF9SCfFvoVj1a%2BGhXdcFLcCnfLrrlvHowqrbvMun11X2gnyjBLGJRB8KGB1AdhFykVALHMw1grOJ4tJzdHUkk3RpUSF7qN7ySdbiQk1aUvFOMJnccJAVnQ%2F1Vr%2F5MfM6%2F9B9gnbpMRpSzHFW69To9%2BRPrslgPYk5VwgvP0AM3c6B5J7wOL4rQ%2F0zGiG4kWbBP%2FhV1bz2nlKdKKmOwHMAf1EYC7Fc4XLTT%2B%2FevWYsyBlVWvETvCIEK7dMkv8NTP2tG9qxd1BIvpyqF8Gfo4ED6ZEzY9C%2BO2qprdH7Z%2BluyctfEdU4Q%2BM5Y8b3L6Bcc%2Fmn9j1x0cj2NnILrz1k%2FcQfHDcjfmjRlFqixIoQyghlZeYsyN33lsoY%2FCh7JjPfSZn8yJ5uCMcTP5yTLdTf1QOQrOyh01HT1gwTbCKCiXcKkE4T214nx8qK0L4n0o0xZoGUIQwnAGXwjH8bGy2IHcGUU4Cdt2AG4F44Af8jO8WFx%2BoRWK1%2FLyrBWs4eQGRNWk84D1JBOV9bA6DlkGWwC3ukMH%2FkNaoItwzI8w9JmYvgY6pgENCx7yYlYqPSZ7Syt84xKR6pyE6HheaByME7oVyTvbv4maECWZjHleqRdwgPwGsc%2B88Txi2Fs2kqEOauuDj0Ec3AJTqfvAB%2FKcdCsjPGKGpwxoKLpgV1hSEVuPK6%2FiyM17IpauBfAsNUdnbYPIFhlcT3NkV4Hyd7EqWcUAZ3hjW5hG2yLPS46KMOJ563GNXXWT5bSl0X563kC6eYQvUBOUEuXAZzbU&X-Amz-Signature=fbe2bb63d186827ffade76ff7b3efd1f8551f3f3e7e65b4be8af5536a8e46a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNOCHCLV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAshTkHeXNxfr8kJiw7LRCWyciqMvcrchSNWJkUw7aVAiAUDOXrEmyW6Vfa%2F%2BFT6HYKGK5M5HxBg6nlrFznxRvLGiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhoDi9Greshft%2B1jKtwD3P7cz8kbsLjsQcNP318ZYzknPFa6srkX6RkuN%2BD7tvj3cl4%2BeZsKQaRoJj4WBTAuwfAO1cTOPgE4v4m62MgBQWVN9MtF9SCfFvoVj1a%2BGhXdcFLcCnfLrrlvHowqrbvMun11X2gnyjBLGJRB8KGB1AdhFykVALHMw1grOJ4tJzdHUkk3RpUSF7qN7ySdbiQk1aUvFOMJnccJAVnQ%2F1Vr%2F5MfM6%2F9B9gnbpMRpSzHFW69To9%2BRPrslgPYk5VwgvP0AM3c6B5J7wOL4rQ%2F0zGiG4kWbBP%2FhV1bz2nlKdKKmOwHMAf1EYC7Fc4XLTT%2B%2FevWYsyBlVWvETvCIEK7dMkv8NTP2tG9qxd1BIvpyqF8Gfo4ED6ZEzY9C%2BO2qprdH7Z%2BluyctfEdU4Q%2BM5Y8b3L6Bcc%2Fmn9j1x0cj2NnILrz1k%2FcQfHDcjfmjRlFqixIoQyghlZeYsyN33lsoY%2FCh7JjPfSZn8yJ5uCMcTP5yTLdTf1QOQrOyh01HT1gwTbCKCiXcKkE4T214nx8qK0L4n0o0xZoGUIQwnAGXwjH8bGy2IHcGUU4Cdt2AG4F44Af8jO8WFx%2BoRWK1%2FLyrBWs4eQGRNWk84D1JBOV9bA6DlkGWwC3ukMH%2FkNaoItwzI8w9JmYvgY6pgENCx7yYlYqPSZ7Syt84xKR6pyE6HheaByME7oVyTvbv4maECWZjHleqRdwgPwGsc%2B88Txi2Fs2kqEOauuDj0Ec3AJTqfvAB%2FKcdCsjPGKGpwxoKLpgV1hSEVuPK6%2FiyM17IpauBfAsNUdnbYPIFhlcT3NkV4Hyd7EqWcUAZ3hjW5hG2yLPS46KMOJ563GNXXWT5bSl0X563kC6eYQvUBOUEuXAZzbU&X-Amz-Signature=b9e952d45f6179a26f839d53ffdf702e25e0a41f6fcbf15cbb8a7454c7be8617&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
