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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NIP4YO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANPGMJn5b%2BltCB2NRvPWn1V8F%2B%2BE2SKlcxHguQv9xWBAiEA0XpcLMW4NMbfsEZSwXUJHB4SlBjNfHin0MhpOWOkokgqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2wh7ziPUMkow1tJyrcAyMF2ZOiPaX6B8Drbm%2B4qoOE6zi561l%2Fn54CRa7%2F8fljGI0Fwh3FVwTNj1UPPgY1hmpyA4jxU9JTsGglhcwBzFBxLn97x87zN6Nj3JxsqxvHOVa561yxgSD0YAo7lHrgZ7diUVjBadjS1XxEFKWVBN8eU%2Bz4G2uYXhdheC6iAKqTCm%2Bm%2FnmtBYQuYYhoPPW24DH5bD9JnlNfexlvaGemUcQdNGMR1O7QtHaTOnAqw9fWE4414mglbYGjdT25Nvtb%2BAbsn1xoC1BDzRpe54arDhC5jTyrOUxUJcY0A8vInlgnPC%2BaaMJzEZLI%2BVBIfk3uNnto2fKUzg78aaBIzoKAzu7gHBZHzBkxctglJH8djQcc6jE6lPEwnJv2vY0pA4I6uxe5l%2FaVT2mXfvqpuyZq8g3MaxdPu%2FIurXGTzAKi0Cx4mv6WnN1mZPa6nX663NxMvMDWKow%2F%2F4rjNpoGXXmUwwJodB7WsHbXMswf7awScIZR%2FvQk%2FxjMbE%2FMzRQxlkWC1Sa19ZA8JPSy2DvDu%2B2C6GhPyraphlzaDv0MaUCGFLwmaQkyii98r7BIa9zBY4CestpSkkJXP6IXrD3kpeGe9vP8xcm1UXyslBVlbazhfkgj8IugBjNT6cYK%2B9FdMPudksMGOqUBKPPK7eVXRsanmuuOviL4gIIPDcgBiApXu0DcpeqnWFh4wf4TBSXl6Lu8QS7%2BKYbN%2FXLTgYO9mOrZFvGEzkasRWS3CBpFK9muf9InuBEqZS%2FYFdgLpjL02ghJ0mlJ4z2i%2FtBQwsekwA509Osl1uQtFHLQUHbfqHbPucsdZbqLHflFWvWbRWwacjtvBiG7Q4%2BnatJmwsQAc%2FEzjD3u%2BANCF2oh6NJd&X-Amz-Signature=d75d7bbca40794b972172fc021b4b57bcb61a0d72c41d6deca414fc48958728c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NIP4YO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANPGMJn5b%2BltCB2NRvPWn1V8F%2B%2BE2SKlcxHguQv9xWBAiEA0XpcLMW4NMbfsEZSwXUJHB4SlBjNfHin0MhpOWOkokgqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2wh7ziPUMkow1tJyrcAyMF2ZOiPaX6B8Drbm%2B4qoOE6zi561l%2Fn54CRa7%2F8fljGI0Fwh3FVwTNj1UPPgY1hmpyA4jxU9JTsGglhcwBzFBxLn97x87zN6Nj3JxsqxvHOVa561yxgSD0YAo7lHrgZ7diUVjBadjS1XxEFKWVBN8eU%2Bz4G2uYXhdheC6iAKqTCm%2Bm%2FnmtBYQuYYhoPPW24DH5bD9JnlNfexlvaGemUcQdNGMR1O7QtHaTOnAqw9fWE4414mglbYGjdT25Nvtb%2BAbsn1xoC1BDzRpe54arDhC5jTyrOUxUJcY0A8vInlgnPC%2BaaMJzEZLI%2BVBIfk3uNnto2fKUzg78aaBIzoKAzu7gHBZHzBkxctglJH8djQcc6jE6lPEwnJv2vY0pA4I6uxe5l%2FaVT2mXfvqpuyZq8g3MaxdPu%2FIurXGTzAKi0Cx4mv6WnN1mZPa6nX663NxMvMDWKow%2F%2F4rjNpoGXXmUwwJodB7WsHbXMswf7awScIZR%2FvQk%2FxjMbE%2FMzRQxlkWC1Sa19ZA8JPSy2DvDu%2B2C6GhPyraphlzaDv0MaUCGFLwmaQkyii98r7BIa9zBY4CestpSkkJXP6IXrD3kpeGe9vP8xcm1UXyslBVlbazhfkgj8IugBjNT6cYK%2B9FdMPudksMGOqUBKPPK7eVXRsanmuuOviL4gIIPDcgBiApXu0DcpeqnWFh4wf4TBSXl6Lu8QS7%2BKYbN%2FXLTgYO9mOrZFvGEzkasRWS3CBpFK9muf9InuBEqZS%2FYFdgLpjL02ghJ0mlJ4z2i%2FtBQwsekwA509Osl1uQtFHLQUHbfqHbPucsdZbqLHflFWvWbRWwacjtvBiG7Q4%2BnatJmwsQAc%2FEzjD3u%2BANCF2oh6NJd&X-Amz-Signature=b6edcfa4123e45d6b0cf10a720ba6df99efbacd38f783c1479da5063404384ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NIP4YO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANPGMJn5b%2BltCB2NRvPWn1V8F%2B%2BE2SKlcxHguQv9xWBAiEA0XpcLMW4NMbfsEZSwXUJHB4SlBjNfHin0MhpOWOkokgqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2wh7ziPUMkow1tJyrcAyMF2ZOiPaX6B8Drbm%2B4qoOE6zi561l%2Fn54CRa7%2F8fljGI0Fwh3FVwTNj1UPPgY1hmpyA4jxU9JTsGglhcwBzFBxLn97x87zN6Nj3JxsqxvHOVa561yxgSD0YAo7lHrgZ7diUVjBadjS1XxEFKWVBN8eU%2Bz4G2uYXhdheC6iAKqTCm%2Bm%2FnmtBYQuYYhoPPW24DH5bD9JnlNfexlvaGemUcQdNGMR1O7QtHaTOnAqw9fWE4414mglbYGjdT25Nvtb%2BAbsn1xoC1BDzRpe54arDhC5jTyrOUxUJcY0A8vInlgnPC%2BaaMJzEZLI%2BVBIfk3uNnto2fKUzg78aaBIzoKAzu7gHBZHzBkxctglJH8djQcc6jE6lPEwnJv2vY0pA4I6uxe5l%2FaVT2mXfvqpuyZq8g3MaxdPu%2FIurXGTzAKi0Cx4mv6WnN1mZPa6nX663NxMvMDWKow%2F%2F4rjNpoGXXmUwwJodB7WsHbXMswf7awScIZR%2FvQk%2FxjMbE%2FMzRQxlkWC1Sa19ZA8JPSy2DvDu%2B2C6GhPyraphlzaDv0MaUCGFLwmaQkyii98r7BIa9zBY4CestpSkkJXP6IXrD3kpeGe9vP8xcm1UXyslBVlbazhfkgj8IugBjNT6cYK%2B9FdMPudksMGOqUBKPPK7eVXRsanmuuOviL4gIIPDcgBiApXu0DcpeqnWFh4wf4TBSXl6Lu8QS7%2BKYbN%2FXLTgYO9mOrZFvGEzkasRWS3CBpFK9muf9InuBEqZS%2FYFdgLpjL02ghJ0mlJ4z2i%2FtBQwsekwA509Osl1uQtFHLQUHbfqHbPucsdZbqLHflFWvWbRWwacjtvBiG7Q4%2BnatJmwsQAc%2FEzjD3u%2BANCF2oh6NJd&X-Amz-Signature=8d02c168b6dbfc3c9abed28ff782ebce788548b0575d6d96e49990d04b76db6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NIP4YO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANPGMJn5b%2BltCB2NRvPWn1V8F%2B%2BE2SKlcxHguQv9xWBAiEA0XpcLMW4NMbfsEZSwXUJHB4SlBjNfHin0MhpOWOkokgqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2wh7ziPUMkow1tJyrcAyMF2ZOiPaX6B8Drbm%2B4qoOE6zi561l%2Fn54CRa7%2F8fljGI0Fwh3FVwTNj1UPPgY1hmpyA4jxU9JTsGglhcwBzFBxLn97x87zN6Nj3JxsqxvHOVa561yxgSD0YAo7lHrgZ7diUVjBadjS1XxEFKWVBN8eU%2Bz4G2uYXhdheC6iAKqTCm%2Bm%2FnmtBYQuYYhoPPW24DH5bD9JnlNfexlvaGemUcQdNGMR1O7QtHaTOnAqw9fWE4414mglbYGjdT25Nvtb%2BAbsn1xoC1BDzRpe54arDhC5jTyrOUxUJcY0A8vInlgnPC%2BaaMJzEZLI%2BVBIfk3uNnto2fKUzg78aaBIzoKAzu7gHBZHzBkxctglJH8djQcc6jE6lPEwnJv2vY0pA4I6uxe5l%2FaVT2mXfvqpuyZq8g3MaxdPu%2FIurXGTzAKi0Cx4mv6WnN1mZPa6nX663NxMvMDWKow%2F%2F4rjNpoGXXmUwwJodB7WsHbXMswf7awScIZR%2FvQk%2FxjMbE%2FMzRQxlkWC1Sa19ZA8JPSy2DvDu%2B2C6GhPyraphlzaDv0MaUCGFLwmaQkyii98r7BIa9zBY4CestpSkkJXP6IXrD3kpeGe9vP8xcm1UXyslBVlbazhfkgj8IugBjNT6cYK%2B9FdMPudksMGOqUBKPPK7eVXRsanmuuOviL4gIIPDcgBiApXu0DcpeqnWFh4wf4TBSXl6Lu8QS7%2BKYbN%2FXLTgYO9mOrZFvGEzkasRWS3CBpFK9muf9InuBEqZS%2FYFdgLpjL02ghJ0mlJ4z2i%2FtBQwsekwA509Osl1uQtFHLQUHbfqHbPucsdZbqLHflFWvWbRWwacjtvBiG7Q4%2BnatJmwsQAc%2FEzjD3u%2BANCF2oh6NJd&X-Amz-Signature=77cabd6fd59eb0d3a7cd7f37a0516567913ed9203124885ce7a40efe2f0392cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NIP4YO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANPGMJn5b%2BltCB2NRvPWn1V8F%2B%2BE2SKlcxHguQv9xWBAiEA0XpcLMW4NMbfsEZSwXUJHB4SlBjNfHin0MhpOWOkokgqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2wh7ziPUMkow1tJyrcAyMF2ZOiPaX6B8Drbm%2B4qoOE6zi561l%2Fn54CRa7%2F8fljGI0Fwh3FVwTNj1UPPgY1hmpyA4jxU9JTsGglhcwBzFBxLn97x87zN6Nj3JxsqxvHOVa561yxgSD0YAo7lHrgZ7diUVjBadjS1XxEFKWVBN8eU%2Bz4G2uYXhdheC6iAKqTCm%2Bm%2FnmtBYQuYYhoPPW24DH5bD9JnlNfexlvaGemUcQdNGMR1O7QtHaTOnAqw9fWE4414mglbYGjdT25Nvtb%2BAbsn1xoC1BDzRpe54arDhC5jTyrOUxUJcY0A8vInlgnPC%2BaaMJzEZLI%2BVBIfk3uNnto2fKUzg78aaBIzoKAzu7gHBZHzBkxctglJH8djQcc6jE6lPEwnJv2vY0pA4I6uxe5l%2FaVT2mXfvqpuyZq8g3MaxdPu%2FIurXGTzAKi0Cx4mv6WnN1mZPa6nX663NxMvMDWKow%2F%2F4rjNpoGXXmUwwJodB7WsHbXMswf7awScIZR%2FvQk%2FxjMbE%2FMzRQxlkWC1Sa19ZA8JPSy2DvDu%2B2C6GhPyraphlzaDv0MaUCGFLwmaQkyii98r7BIa9zBY4CestpSkkJXP6IXrD3kpeGe9vP8xcm1UXyslBVlbazhfkgj8IugBjNT6cYK%2B9FdMPudksMGOqUBKPPK7eVXRsanmuuOviL4gIIPDcgBiApXu0DcpeqnWFh4wf4TBSXl6Lu8QS7%2BKYbN%2FXLTgYO9mOrZFvGEzkasRWS3CBpFK9muf9InuBEqZS%2FYFdgLpjL02ghJ0mlJ4z2i%2FtBQwsekwA509Osl1uQtFHLQUHbfqHbPucsdZbqLHflFWvWbRWwacjtvBiG7Q4%2BnatJmwsQAc%2FEzjD3u%2BANCF2oh6NJd&X-Amz-Signature=9830a8814cd21c08a1a10bb19ddfadf85f7f669f3b35a19862c59cc491b954cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NIP4YO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANPGMJn5b%2BltCB2NRvPWn1V8F%2B%2BE2SKlcxHguQv9xWBAiEA0XpcLMW4NMbfsEZSwXUJHB4SlBjNfHin0MhpOWOkokgqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2wh7ziPUMkow1tJyrcAyMF2ZOiPaX6B8Drbm%2B4qoOE6zi561l%2Fn54CRa7%2F8fljGI0Fwh3FVwTNj1UPPgY1hmpyA4jxU9JTsGglhcwBzFBxLn97x87zN6Nj3JxsqxvHOVa561yxgSD0YAo7lHrgZ7diUVjBadjS1XxEFKWVBN8eU%2Bz4G2uYXhdheC6iAKqTCm%2Bm%2FnmtBYQuYYhoPPW24DH5bD9JnlNfexlvaGemUcQdNGMR1O7QtHaTOnAqw9fWE4414mglbYGjdT25Nvtb%2BAbsn1xoC1BDzRpe54arDhC5jTyrOUxUJcY0A8vInlgnPC%2BaaMJzEZLI%2BVBIfk3uNnto2fKUzg78aaBIzoKAzu7gHBZHzBkxctglJH8djQcc6jE6lPEwnJv2vY0pA4I6uxe5l%2FaVT2mXfvqpuyZq8g3MaxdPu%2FIurXGTzAKi0Cx4mv6WnN1mZPa6nX663NxMvMDWKow%2F%2F4rjNpoGXXmUwwJodB7WsHbXMswf7awScIZR%2FvQk%2FxjMbE%2FMzRQxlkWC1Sa19ZA8JPSy2DvDu%2B2C6GhPyraphlzaDv0MaUCGFLwmaQkyii98r7BIa9zBY4CestpSkkJXP6IXrD3kpeGe9vP8xcm1UXyslBVlbazhfkgj8IugBjNT6cYK%2B9FdMPudksMGOqUBKPPK7eVXRsanmuuOviL4gIIPDcgBiApXu0DcpeqnWFh4wf4TBSXl6Lu8QS7%2BKYbN%2FXLTgYO9mOrZFvGEzkasRWS3CBpFK9muf9InuBEqZS%2FYFdgLpjL02ghJ0mlJ4z2i%2FtBQwsekwA509Osl1uQtFHLQUHbfqHbPucsdZbqLHflFWvWbRWwacjtvBiG7Q4%2BnatJmwsQAc%2FEzjD3u%2BANCF2oh6NJd&X-Amz-Signature=a62fe4ea3c0bb72fbe341ce31ada2852ae51f709976098f8749c4bdac3098aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NIP4YO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANPGMJn5b%2BltCB2NRvPWn1V8F%2B%2BE2SKlcxHguQv9xWBAiEA0XpcLMW4NMbfsEZSwXUJHB4SlBjNfHin0MhpOWOkokgqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2wh7ziPUMkow1tJyrcAyMF2ZOiPaX6B8Drbm%2B4qoOE6zi561l%2Fn54CRa7%2F8fljGI0Fwh3FVwTNj1UPPgY1hmpyA4jxU9JTsGglhcwBzFBxLn97x87zN6Nj3JxsqxvHOVa561yxgSD0YAo7lHrgZ7diUVjBadjS1XxEFKWVBN8eU%2Bz4G2uYXhdheC6iAKqTCm%2Bm%2FnmtBYQuYYhoPPW24DH5bD9JnlNfexlvaGemUcQdNGMR1O7QtHaTOnAqw9fWE4414mglbYGjdT25Nvtb%2BAbsn1xoC1BDzRpe54arDhC5jTyrOUxUJcY0A8vInlgnPC%2BaaMJzEZLI%2BVBIfk3uNnto2fKUzg78aaBIzoKAzu7gHBZHzBkxctglJH8djQcc6jE6lPEwnJv2vY0pA4I6uxe5l%2FaVT2mXfvqpuyZq8g3MaxdPu%2FIurXGTzAKi0Cx4mv6WnN1mZPa6nX663NxMvMDWKow%2F%2F4rjNpoGXXmUwwJodB7WsHbXMswf7awScIZR%2FvQk%2FxjMbE%2FMzRQxlkWC1Sa19ZA8JPSy2DvDu%2B2C6GhPyraphlzaDv0MaUCGFLwmaQkyii98r7BIa9zBY4CestpSkkJXP6IXrD3kpeGe9vP8xcm1UXyslBVlbazhfkgj8IugBjNT6cYK%2B9FdMPudksMGOqUBKPPK7eVXRsanmuuOviL4gIIPDcgBiApXu0DcpeqnWFh4wf4TBSXl6Lu8QS7%2BKYbN%2FXLTgYO9mOrZFvGEzkasRWS3CBpFK9muf9InuBEqZS%2FYFdgLpjL02ghJ0mlJ4z2i%2FtBQwsekwA509Osl1uQtFHLQUHbfqHbPucsdZbqLHflFWvWbRWwacjtvBiG7Q4%2BnatJmwsQAc%2FEzjD3u%2BANCF2oh6NJd&X-Amz-Signature=ac6aa1919a67d19fe65950ab078f2b22234ddb09f9a336c7da381aac6e617d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NIP4YO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANPGMJn5b%2BltCB2NRvPWn1V8F%2B%2BE2SKlcxHguQv9xWBAiEA0XpcLMW4NMbfsEZSwXUJHB4SlBjNfHin0MhpOWOkokgqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2wh7ziPUMkow1tJyrcAyMF2ZOiPaX6B8Drbm%2B4qoOE6zi561l%2Fn54CRa7%2F8fljGI0Fwh3FVwTNj1UPPgY1hmpyA4jxU9JTsGglhcwBzFBxLn97x87zN6Nj3JxsqxvHOVa561yxgSD0YAo7lHrgZ7diUVjBadjS1XxEFKWVBN8eU%2Bz4G2uYXhdheC6iAKqTCm%2Bm%2FnmtBYQuYYhoPPW24DH5bD9JnlNfexlvaGemUcQdNGMR1O7QtHaTOnAqw9fWE4414mglbYGjdT25Nvtb%2BAbsn1xoC1BDzRpe54arDhC5jTyrOUxUJcY0A8vInlgnPC%2BaaMJzEZLI%2BVBIfk3uNnto2fKUzg78aaBIzoKAzu7gHBZHzBkxctglJH8djQcc6jE6lPEwnJv2vY0pA4I6uxe5l%2FaVT2mXfvqpuyZq8g3MaxdPu%2FIurXGTzAKi0Cx4mv6WnN1mZPa6nX663NxMvMDWKow%2F%2F4rjNpoGXXmUwwJodB7WsHbXMswf7awScIZR%2FvQk%2FxjMbE%2FMzRQxlkWC1Sa19ZA8JPSy2DvDu%2B2C6GhPyraphlzaDv0MaUCGFLwmaQkyii98r7BIa9zBY4CestpSkkJXP6IXrD3kpeGe9vP8xcm1UXyslBVlbazhfkgj8IugBjNT6cYK%2B9FdMPudksMGOqUBKPPK7eVXRsanmuuOviL4gIIPDcgBiApXu0DcpeqnWFh4wf4TBSXl6Lu8QS7%2BKYbN%2FXLTgYO9mOrZFvGEzkasRWS3CBpFK9muf9InuBEqZS%2FYFdgLpjL02ghJ0mlJ4z2i%2FtBQwsekwA509Osl1uQtFHLQUHbfqHbPucsdZbqLHflFWvWbRWwacjtvBiG7Q4%2BnatJmwsQAc%2FEzjD3u%2BANCF2oh6NJd&X-Amz-Signature=3ba6af014efcc96ab1cbd07877b8b220ebb946d9057bd75b2f8ca32a1622cfe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
