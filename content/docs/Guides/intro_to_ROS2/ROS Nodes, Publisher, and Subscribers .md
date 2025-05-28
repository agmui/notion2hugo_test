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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6JAQWI%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhaqK%2FnKQk9QUV5kRNI8ksfk%2BbW0YyVjWbMp%2FdLiI%2BJAiA9lIiGJopv4CqGxY1C6evZLpau2FwfddlFLdlASt1ENCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMbRVkXyKo8eZU39FPKtwDvxskQrUWdEuNAyMw7U45VdBQ086OGfYSjgOO7ty7OON8VV%2Fcb%2F8tCtZ1baIsG3u8JlCOchr9qsIi0K213SUlaJxdzZ3iSKI%2BeRUsCLFyghEJRk%2BBMjlfOcOMsamnPII5T9N%2B83e%2B%2FLTNyQjpLlgZpWe2hUJYScQhuI9PzBVT%2BYosRAyWBwDZiugVTJW8JnkvskCqeY%2FjJomeYFgw5MKcKx9Q8OM7SmM%2FMDetSAewVDu1cEbbOG3B5uaXnidnZPq%2FIHd5QWmDXUbp2yxKbBqtQSxTPdUIsZqv%2Be5JPI6uciVEQXkUaqSL9Z6y6pajzFB%2FF6kpRoAVnd%2BAAj5xnuUC%2Bunl2ilRZoXx0qHaU%2Bd0RT2dTiP3f%2FeJXWINtHuedMD9k2LJbfaB3YDxAqnPVN6HyVIlkwvaRr%2BbQHlz59IhfCsHL9VM4EXCeRcdRquvXNWuDp6mCv6hTmUCbZ5%2BKVeCr2EkPXJp0p6g%2FuroSvZdGyGhy0LSTPrRt5lhk3O%2FfLDKG0k8Cr%2Fe3fM8Sj7KWwYi1R00i3fXfKEiQRWQiShSjbhqCFFk040KjxCaC3caZMTjhPsGf2aMpDILIw0fkA9XHqUksCLU7EvupyfRZFWtTECkXoN3yyGj%2BGIJUTkwx47dwQY6pgEQiJitOiP2lJ0XBFxAanyuAfjRACmD%2Fqjaeb7ZdPqhAv8G9S%2B%2FJxH1M0aH0f50mpzGKE8RUi6KkR6pJtew6%2F9GpPXFRQJAgjoLo6SGDTlsAakI9FO4DJOeVWGDxBGqIDK%2FKoauMxTq%2FsQKTNf9idzN6xRHgGXSl1fX1RLgPSacEJGUYvfS1iHd%2B587enSTMNnKqLcriPD%2FNKldXhlkFgtHeMgqcUE7&X-Amz-Signature=ffe5f7a3db7a27f92de4f5ad17cbcba1bc9ce422fc48a6d00791f6735cf8d635&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6JAQWI%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhaqK%2FnKQk9QUV5kRNI8ksfk%2BbW0YyVjWbMp%2FdLiI%2BJAiA9lIiGJopv4CqGxY1C6evZLpau2FwfddlFLdlASt1ENCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMbRVkXyKo8eZU39FPKtwDvxskQrUWdEuNAyMw7U45VdBQ086OGfYSjgOO7ty7OON8VV%2Fcb%2F8tCtZ1baIsG3u8JlCOchr9qsIi0K213SUlaJxdzZ3iSKI%2BeRUsCLFyghEJRk%2BBMjlfOcOMsamnPII5T9N%2B83e%2B%2FLTNyQjpLlgZpWe2hUJYScQhuI9PzBVT%2BYosRAyWBwDZiugVTJW8JnkvskCqeY%2FjJomeYFgw5MKcKx9Q8OM7SmM%2FMDetSAewVDu1cEbbOG3B5uaXnidnZPq%2FIHd5QWmDXUbp2yxKbBqtQSxTPdUIsZqv%2Be5JPI6uciVEQXkUaqSL9Z6y6pajzFB%2FF6kpRoAVnd%2BAAj5xnuUC%2Bunl2ilRZoXx0qHaU%2Bd0RT2dTiP3f%2FeJXWINtHuedMD9k2LJbfaB3YDxAqnPVN6HyVIlkwvaRr%2BbQHlz59IhfCsHL9VM4EXCeRcdRquvXNWuDp6mCv6hTmUCbZ5%2BKVeCr2EkPXJp0p6g%2FuroSvZdGyGhy0LSTPrRt5lhk3O%2FfLDKG0k8Cr%2Fe3fM8Sj7KWwYi1R00i3fXfKEiQRWQiShSjbhqCFFk040KjxCaC3caZMTjhPsGf2aMpDILIw0fkA9XHqUksCLU7EvupyfRZFWtTECkXoN3yyGj%2BGIJUTkwx47dwQY6pgEQiJitOiP2lJ0XBFxAanyuAfjRACmD%2Fqjaeb7ZdPqhAv8G9S%2B%2FJxH1M0aH0f50mpzGKE8RUi6KkR6pJtew6%2F9GpPXFRQJAgjoLo6SGDTlsAakI9FO4DJOeVWGDxBGqIDK%2FKoauMxTq%2FsQKTNf9idzN6xRHgGXSl1fX1RLgPSacEJGUYvfS1iHd%2B587enSTMNnKqLcriPD%2FNKldXhlkFgtHeMgqcUE7&X-Amz-Signature=cd0a77b46969bc272d703c7e0b8bb12585569a5804263586582085586ae8f7ea&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6JAQWI%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhaqK%2FnKQk9QUV5kRNI8ksfk%2BbW0YyVjWbMp%2FdLiI%2BJAiA9lIiGJopv4CqGxY1C6evZLpau2FwfddlFLdlASt1ENCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMbRVkXyKo8eZU39FPKtwDvxskQrUWdEuNAyMw7U45VdBQ086OGfYSjgOO7ty7OON8VV%2Fcb%2F8tCtZ1baIsG3u8JlCOchr9qsIi0K213SUlaJxdzZ3iSKI%2BeRUsCLFyghEJRk%2BBMjlfOcOMsamnPII5T9N%2B83e%2B%2FLTNyQjpLlgZpWe2hUJYScQhuI9PzBVT%2BYosRAyWBwDZiugVTJW8JnkvskCqeY%2FjJomeYFgw5MKcKx9Q8OM7SmM%2FMDetSAewVDu1cEbbOG3B5uaXnidnZPq%2FIHd5QWmDXUbp2yxKbBqtQSxTPdUIsZqv%2Be5JPI6uciVEQXkUaqSL9Z6y6pajzFB%2FF6kpRoAVnd%2BAAj5xnuUC%2Bunl2ilRZoXx0qHaU%2Bd0RT2dTiP3f%2FeJXWINtHuedMD9k2LJbfaB3YDxAqnPVN6HyVIlkwvaRr%2BbQHlz59IhfCsHL9VM4EXCeRcdRquvXNWuDp6mCv6hTmUCbZ5%2BKVeCr2EkPXJp0p6g%2FuroSvZdGyGhy0LSTPrRt5lhk3O%2FfLDKG0k8Cr%2Fe3fM8Sj7KWwYi1R00i3fXfKEiQRWQiShSjbhqCFFk040KjxCaC3caZMTjhPsGf2aMpDILIw0fkA9XHqUksCLU7EvupyfRZFWtTECkXoN3yyGj%2BGIJUTkwx47dwQY6pgEQiJitOiP2lJ0XBFxAanyuAfjRACmD%2Fqjaeb7ZdPqhAv8G9S%2B%2FJxH1M0aH0f50mpzGKE8RUi6KkR6pJtew6%2F9GpPXFRQJAgjoLo6SGDTlsAakI9FO4DJOeVWGDxBGqIDK%2FKoauMxTq%2FsQKTNf9idzN6xRHgGXSl1fX1RLgPSacEJGUYvfS1iHd%2B587enSTMNnKqLcriPD%2FNKldXhlkFgtHeMgqcUE7&X-Amz-Signature=4f2a9fe3fab10fd4b7806d397e2d73f842ca6913d9fd854bd01306cc0995bfc8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6JAQWI%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhaqK%2FnKQk9QUV5kRNI8ksfk%2BbW0YyVjWbMp%2FdLiI%2BJAiA9lIiGJopv4CqGxY1C6evZLpau2FwfddlFLdlASt1ENCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMbRVkXyKo8eZU39FPKtwDvxskQrUWdEuNAyMw7U45VdBQ086OGfYSjgOO7ty7OON8VV%2Fcb%2F8tCtZ1baIsG3u8JlCOchr9qsIi0K213SUlaJxdzZ3iSKI%2BeRUsCLFyghEJRk%2BBMjlfOcOMsamnPII5T9N%2B83e%2B%2FLTNyQjpLlgZpWe2hUJYScQhuI9PzBVT%2BYosRAyWBwDZiugVTJW8JnkvskCqeY%2FjJomeYFgw5MKcKx9Q8OM7SmM%2FMDetSAewVDu1cEbbOG3B5uaXnidnZPq%2FIHd5QWmDXUbp2yxKbBqtQSxTPdUIsZqv%2Be5JPI6uciVEQXkUaqSL9Z6y6pajzFB%2FF6kpRoAVnd%2BAAj5xnuUC%2Bunl2ilRZoXx0qHaU%2Bd0RT2dTiP3f%2FeJXWINtHuedMD9k2LJbfaB3YDxAqnPVN6HyVIlkwvaRr%2BbQHlz59IhfCsHL9VM4EXCeRcdRquvXNWuDp6mCv6hTmUCbZ5%2BKVeCr2EkPXJp0p6g%2FuroSvZdGyGhy0LSTPrRt5lhk3O%2FfLDKG0k8Cr%2Fe3fM8Sj7KWwYi1R00i3fXfKEiQRWQiShSjbhqCFFk040KjxCaC3caZMTjhPsGf2aMpDILIw0fkA9XHqUksCLU7EvupyfRZFWtTECkXoN3yyGj%2BGIJUTkwx47dwQY6pgEQiJitOiP2lJ0XBFxAanyuAfjRACmD%2Fqjaeb7ZdPqhAv8G9S%2B%2FJxH1M0aH0f50mpzGKE8RUi6KkR6pJtew6%2F9GpPXFRQJAgjoLo6SGDTlsAakI9FO4DJOeVWGDxBGqIDK%2FKoauMxTq%2FsQKTNf9idzN6xRHgGXSl1fX1RLgPSacEJGUYvfS1iHd%2B587enSTMNnKqLcriPD%2FNKldXhlkFgtHeMgqcUE7&X-Amz-Signature=6d56fcf215f473fc073b1bf0cbe0b3a306dda93d4ab11e52020fcd01e9e46170&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6JAQWI%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhaqK%2FnKQk9QUV5kRNI8ksfk%2BbW0YyVjWbMp%2FdLiI%2BJAiA9lIiGJopv4CqGxY1C6evZLpau2FwfddlFLdlASt1ENCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMbRVkXyKo8eZU39FPKtwDvxskQrUWdEuNAyMw7U45VdBQ086OGfYSjgOO7ty7OON8VV%2Fcb%2F8tCtZ1baIsG3u8JlCOchr9qsIi0K213SUlaJxdzZ3iSKI%2BeRUsCLFyghEJRk%2BBMjlfOcOMsamnPII5T9N%2B83e%2B%2FLTNyQjpLlgZpWe2hUJYScQhuI9PzBVT%2BYosRAyWBwDZiugVTJW8JnkvskCqeY%2FjJomeYFgw5MKcKx9Q8OM7SmM%2FMDetSAewVDu1cEbbOG3B5uaXnidnZPq%2FIHd5QWmDXUbp2yxKbBqtQSxTPdUIsZqv%2Be5JPI6uciVEQXkUaqSL9Z6y6pajzFB%2FF6kpRoAVnd%2BAAj5xnuUC%2Bunl2ilRZoXx0qHaU%2Bd0RT2dTiP3f%2FeJXWINtHuedMD9k2LJbfaB3YDxAqnPVN6HyVIlkwvaRr%2BbQHlz59IhfCsHL9VM4EXCeRcdRquvXNWuDp6mCv6hTmUCbZ5%2BKVeCr2EkPXJp0p6g%2FuroSvZdGyGhy0LSTPrRt5lhk3O%2FfLDKG0k8Cr%2Fe3fM8Sj7KWwYi1R00i3fXfKEiQRWQiShSjbhqCFFk040KjxCaC3caZMTjhPsGf2aMpDILIw0fkA9XHqUksCLU7EvupyfRZFWtTECkXoN3yyGj%2BGIJUTkwx47dwQY6pgEQiJitOiP2lJ0XBFxAanyuAfjRACmD%2Fqjaeb7ZdPqhAv8G9S%2B%2FJxH1M0aH0f50mpzGKE8RUi6KkR6pJtew6%2F9GpPXFRQJAgjoLo6SGDTlsAakI9FO4DJOeVWGDxBGqIDK%2FKoauMxTq%2FsQKTNf9idzN6xRHgGXSl1fX1RLgPSacEJGUYvfS1iHd%2B587enSTMNnKqLcriPD%2FNKldXhlkFgtHeMgqcUE7&X-Amz-Signature=8f14db2c4ef591423ac9775b53fc9fd0f458dd0855138a7052f2722082cd6a38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6JAQWI%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhaqK%2FnKQk9QUV5kRNI8ksfk%2BbW0YyVjWbMp%2FdLiI%2BJAiA9lIiGJopv4CqGxY1C6evZLpau2FwfddlFLdlASt1ENCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMbRVkXyKo8eZU39FPKtwDvxskQrUWdEuNAyMw7U45VdBQ086OGfYSjgOO7ty7OON8VV%2Fcb%2F8tCtZ1baIsG3u8JlCOchr9qsIi0K213SUlaJxdzZ3iSKI%2BeRUsCLFyghEJRk%2BBMjlfOcOMsamnPII5T9N%2B83e%2B%2FLTNyQjpLlgZpWe2hUJYScQhuI9PzBVT%2BYosRAyWBwDZiugVTJW8JnkvskCqeY%2FjJomeYFgw5MKcKx9Q8OM7SmM%2FMDetSAewVDu1cEbbOG3B5uaXnidnZPq%2FIHd5QWmDXUbp2yxKbBqtQSxTPdUIsZqv%2Be5JPI6uciVEQXkUaqSL9Z6y6pajzFB%2FF6kpRoAVnd%2BAAj5xnuUC%2Bunl2ilRZoXx0qHaU%2Bd0RT2dTiP3f%2FeJXWINtHuedMD9k2LJbfaB3YDxAqnPVN6HyVIlkwvaRr%2BbQHlz59IhfCsHL9VM4EXCeRcdRquvXNWuDp6mCv6hTmUCbZ5%2BKVeCr2EkPXJp0p6g%2FuroSvZdGyGhy0LSTPrRt5lhk3O%2FfLDKG0k8Cr%2Fe3fM8Sj7KWwYi1R00i3fXfKEiQRWQiShSjbhqCFFk040KjxCaC3caZMTjhPsGf2aMpDILIw0fkA9XHqUksCLU7EvupyfRZFWtTECkXoN3yyGj%2BGIJUTkwx47dwQY6pgEQiJitOiP2lJ0XBFxAanyuAfjRACmD%2Fqjaeb7ZdPqhAv8G9S%2B%2FJxH1M0aH0f50mpzGKE8RUi6KkR6pJtew6%2F9GpPXFRQJAgjoLo6SGDTlsAakI9FO4DJOeVWGDxBGqIDK%2FKoauMxTq%2FsQKTNf9idzN6xRHgGXSl1fX1RLgPSacEJGUYvfS1iHd%2B587enSTMNnKqLcriPD%2FNKldXhlkFgtHeMgqcUE7&X-Amz-Signature=18f28ac869327c261785a352bb26d48effd8cfb9c7c17662473c67980e18a087&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6JAQWI%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhaqK%2FnKQk9QUV5kRNI8ksfk%2BbW0YyVjWbMp%2FdLiI%2BJAiA9lIiGJopv4CqGxY1C6evZLpau2FwfddlFLdlASt1ENCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMbRVkXyKo8eZU39FPKtwDvxskQrUWdEuNAyMw7U45VdBQ086OGfYSjgOO7ty7OON8VV%2Fcb%2F8tCtZ1baIsG3u8JlCOchr9qsIi0K213SUlaJxdzZ3iSKI%2BeRUsCLFyghEJRk%2BBMjlfOcOMsamnPII5T9N%2B83e%2B%2FLTNyQjpLlgZpWe2hUJYScQhuI9PzBVT%2BYosRAyWBwDZiugVTJW8JnkvskCqeY%2FjJomeYFgw5MKcKx9Q8OM7SmM%2FMDetSAewVDu1cEbbOG3B5uaXnidnZPq%2FIHd5QWmDXUbp2yxKbBqtQSxTPdUIsZqv%2Be5JPI6uciVEQXkUaqSL9Z6y6pajzFB%2FF6kpRoAVnd%2BAAj5xnuUC%2Bunl2ilRZoXx0qHaU%2Bd0RT2dTiP3f%2FeJXWINtHuedMD9k2LJbfaB3YDxAqnPVN6HyVIlkwvaRr%2BbQHlz59IhfCsHL9VM4EXCeRcdRquvXNWuDp6mCv6hTmUCbZ5%2BKVeCr2EkPXJp0p6g%2FuroSvZdGyGhy0LSTPrRt5lhk3O%2FfLDKG0k8Cr%2Fe3fM8Sj7KWwYi1R00i3fXfKEiQRWQiShSjbhqCFFk040KjxCaC3caZMTjhPsGf2aMpDILIw0fkA9XHqUksCLU7EvupyfRZFWtTECkXoN3yyGj%2BGIJUTkwx47dwQY6pgEQiJitOiP2lJ0XBFxAanyuAfjRACmD%2Fqjaeb7ZdPqhAv8G9S%2B%2FJxH1M0aH0f50mpzGKE8RUi6KkR6pJtew6%2F9GpPXFRQJAgjoLo6SGDTlsAakI9FO4DJOeVWGDxBGqIDK%2FKoauMxTq%2FsQKTNf9idzN6xRHgGXSl1fX1RLgPSacEJGUYvfS1iHd%2B587enSTMNnKqLcriPD%2FNKldXhlkFgtHeMgqcUE7&X-Amz-Signature=9ad3e456ef9213555eb7c5195543ef1a211784c02ed437eb2e6f94eaeff25087&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6JAQWI%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhaqK%2FnKQk9QUV5kRNI8ksfk%2BbW0YyVjWbMp%2FdLiI%2BJAiA9lIiGJopv4CqGxY1C6evZLpau2FwfddlFLdlASt1ENCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMbRVkXyKo8eZU39FPKtwDvxskQrUWdEuNAyMw7U45VdBQ086OGfYSjgOO7ty7OON8VV%2Fcb%2F8tCtZ1baIsG3u8JlCOchr9qsIi0K213SUlaJxdzZ3iSKI%2BeRUsCLFyghEJRk%2BBMjlfOcOMsamnPII5T9N%2B83e%2B%2FLTNyQjpLlgZpWe2hUJYScQhuI9PzBVT%2BYosRAyWBwDZiugVTJW8JnkvskCqeY%2FjJomeYFgw5MKcKx9Q8OM7SmM%2FMDetSAewVDu1cEbbOG3B5uaXnidnZPq%2FIHd5QWmDXUbp2yxKbBqtQSxTPdUIsZqv%2Be5JPI6uciVEQXkUaqSL9Z6y6pajzFB%2FF6kpRoAVnd%2BAAj5xnuUC%2Bunl2ilRZoXx0qHaU%2Bd0RT2dTiP3f%2FeJXWINtHuedMD9k2LJbfaB3YDxAqnPVN6HyVIlkwvaRr%2BbQHlz59IhfCsHL9VM4EXCeRcdRquvXNWuDp6mCv6hTmUCbZ5%2BKVeCr2EkPXJp0p6g%2FuroSvZdGyGhy0LSTPrRt5lhk3O%2FfLDKG0k8Cr%2Fe3fM8Sj7KWwYi1R00i3fXfKEiQRWQiShSjbhqCFFk040KjxCaC3caZMTjhPsGf2aMpDILIw0fkA9XHqUksCLU7EvupyfRZFWtTECkXoN3yyGj%2BGIJUTkwx47dwQY6pgEQiJitOiP2lJ0XBFxAanyuAfjRACmD%2Fqjaeb7ZdPqhAv8G9S%2B%2FJxH1M0aH0f50mpzGKE8RUi6KkR6pJtew6%2F9GpPXFRQJAgjoLo6SGDTlsAakI9FO4DJOeVWGDxBGqIDK%2FKoauMxTq%2FsQKTNf9idzN6xRHgGXSl1fX1RLgPSacEJGUYvfS1iHd%2B587enSTMNnKqLcriPD%2FNKldXhlkFgtHeMgqcUE7&X-Amz-Signature=1eed84cdc1b3baad7b6e47bff74d7570c5107b54faa07d56c1c73d9fb33a0a41&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
