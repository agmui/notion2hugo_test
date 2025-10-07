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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLETZQF3%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAtQ0BPJSCf727bVoWbUO%2FkiOgzk%2BV6tOvbLdwaQbGIIAiAUVdKxTdSYRu0qJPnKmS04S6wzOJxsr9We9BEEcHrYiyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG9%2BA86%2BIrTfGsQZeKtwDZLlUbL4ZUAExAMSzOYzzxwtkKoTIXXkZR3ED4K5CDnjNDL0wKSKq5mpKuEXYBPoTuuENho8cvIVvAywoo%2FO9MLqnMs6yprk%2FIGjweLvY90%2F3t7vgYMFqRAddEcROm6Jpze98gYQSL%2BA%2BX07Cbht439cNNb8WFr75wRg6JI8JN7NRcZrzjfXr9JDVIQlmw7lmvr6cYrT8vvS%2FkuHoU7Ff%2FDOgljVX64fIMfHlYv7uQ4QWMZlAmkl05ahY3645aRM2z%2Bg%2F1qGzQ3NWAwRCJyMfVvnZlUOkWcHCDWDegj%2BeBnCAfsOKH9%2FeDi%2FeGy2vZIda6ndS%2BG86xiy2XU9zrMcq1QA9tW2uqcoG6oh8r4d8pLS0xA71HcIddgA%2FFReLiUg8HlyKLTjhv6rwhrgJKRf5MSIkcduvQL%2FUi9Gf90PSsr%2FyhGwtokuUHxsYf9yaIX7IlJ58xRcelxQdLtH7%2FSi5hLOhJTEgdXrdiyUdXPmr34KJXbYFV4%2Bqojt9GvmbbrQYwaeM6dnbErHuGD7ze0WK1M8u3s8Erff5sy0q8CDLnhLuYdSl7m%2FcXWimxdA7GxvrIn1jY0ZdzzLKe92ZvtYK8BH7Z3pMc381xr5vtK6exAtiEoaR5j1gnPYO4rowoMqRxwY6pgEszu4dqLUscd2gCOTIqjtRINSKBKLcr4QPnNxf6kTcrqOfpHAtWptl9aqkZc2TmH7nvnMasvlVU2OLtWkOOe%2FlE%2Fcc3smdzSxV0TY6KpeH%2FonSvis3YCDzw1GeZPnMJSKN9Gk3e5O%2BurKOxYK2lL9TcQhWhWEvg5qONXTFtSAkczkCtwgFsrPLSsB3A4v2qdKSxgtRvVXXCxjWGyp0plqxkXy1W7Rx&X-Amz-Signature=82ea2bc97563b47a9d74869dc1fb04fd090c7cf0d3aac55ef72d2bc150665baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLETZQF3%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAtQ0BPJSCf727bVoWbUO%2FkiOgzk%2BV6tOvbLdwaQbGIIAiAUVdKxTdSYRu0qJPnKmS04S6wzOJxsr9We9BEEcHrYiyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG9%2BA86%2BIrTfGsQZeKtwDZLlUbL4ZUAExAMSzOYzzxwtkKoTIXXkZR3ED4K5CDnjNDL0wKSKq5mpKuEXYBPoTuuENho8cvIVvAywoo%2FO9MLqnMs6yprk%2FIGjweLvY90%2F3t7vgYMFqRAddEcROm6Jpze98gYQSL%2BA%2BX07Cbht439cNNb8WFr75wRg6JI8JN7NRcZrzjfXr9JDVIQlmw7lmvr6cYrT8vvS%2FkuHoU7Ff%2FDOgljVX64fIMfHlYv7uQ4QWMZlAmkl05ahY3645aRM2z%2Bg%2F1qGzQ3NWAwRCJyMfVvnZlUOkWcHCDWDegj%2BeBnCAfsOKH9%2FeDi%2FeGy2vZIda6ndS%2BG86xiy2XU9zrMcq1QA9tW2uqcoG6oh8r4d8pLS0xA71HcIddgA%2FFReLiUg8HlyKLTjhv6rwhrgJKRf5MSIkcduvQL%2FUi9Gf90PSsr%2FyhGwtokuUHxsYf9yaIX7IlJ58xRcelxQdLtH7%2FSi5hLOhJTEgdXrdiyUdXPmr34KJXbYFV4%2Bqojt9GvmbbrQYwaeM6dnbErHuGD7ze0WK1M8u3s8Erff5sy0q8CDLnhLuYdSl7m%2FcXWimxdA7GxvrIn1jY0ZdzzLKe92ZvtYK8BH7Z3pMc381xr5vtK6exAtiEoaR5j1gnPYO4rowoMqRxwY6pgEszu4dqLUscd2gCOTIqjtRINSKBKLcr4QPnNxf6kTcrqOfpHAtWptl9aqkZc2TmH7nvnMasvlVU2OLtWkOOe%2FlE%2Fcc3smdzSxV0TY6KpeH%2FonSvis3YCDzw1GeZPnMJSKN9Gk3e5O%2BurKOxYK2lL9TcQhWhWEvg5qONXTFtSAkczkCtwgFsrPLSsB3A4v2qdKSxgtRvVXXCxjWGyp0plqxkXy1W7Rx&X-Amz-Signature=3ffeda04acdd8e7b66156d14ceb07e4c0c844e8f7813c5765bb8ec8731466efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLETZQF3%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAtQ0BPJSCf727bVoWbUO%2FkiOgzk%2BV6tOvbLdwaQbGIIAiAUVdKxTdSYRu0qJPnKmS04S6wzOJxsr9We9BEEcHrYiyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG9%2BA86%2BIrTfGsQZeKtwDZLlUbL4ZUAExAMSzOYzzxwtkKoTIXXkZR3ED4K5CDnjNDL0wKSKq5mpKuEXYBPoTuuENho8cvIVvAywoo%2FO9MLqnMs6yprk%2FIGjweLvY90%2F3t7vgYMFqRAddEcROm6Jpze98gYQSL%2BA%2BX07Cbht439cNNb8WFr75wRg6JI8JN7NRcZrzjfXr9JDVIQlmw7lmvr6cYrT8vvS%2FkuHoU7Ff%2FDOgljVX64fIMfHlYv7uQ4QWMZlAmkl05ahY3645aRM2z%2Bg%2F1qGzQ3NWAwRCJyMfVvnZlUOkWcHCDWDegj%2BeBnCAfsOKH9%2FeDi%2FeGy2vZIda6ndS%2BG86xiy2XU9zrMcq1QA9tW2uqcoG6oh8r4d8pLS0xA71HcIddgA%2FFReLiUg8HlyKLTjhv6rwhrgJKRf5MSIkcduvQL%2FUi9Gf90PSsr%2FyhGwtokuUHxsYf9yaIX7IlJ58xRcelxQdLtH7%2FSi5hLOhJTEgdXrdiyUdXPmr34KJXbYFV4%2Bqojt9GvmbbrQYwaeM6dnbErHuGD7ze0WK1M8u3s8Erff5sy0q8CDLnhLuYdSl7m%2FcXWimxdA7GxvrIn1jY0ZdzzLKe92ZvtYK8BH7Z3pMc381xr5vtK6exAtiEoaR5j1gnPYO4rowoMqRxwY6pgEszu4dqLUscd2gCOTIqjtRINSKBKLcr4QPnNxf6kTcrqOfpHAtWptl9aqkZc2TmH7nvnMasvlVU2OLtWkOOe%2FlE%2Fcc3smdzSxV0TY6KpeH%2FonSvis3YCDzw1GeZPnMJSKN9Gk3e5O%2BurKOxYK2lL9TcQhWhWEvg5qONXTFtSAkczkCtwgFsrPLSsB3A4v2qdKSxgtRvVXXCxjWGyp0plqxkXy1W7Rx&X-Amz-Signature=f6d4c68717094dff28b133fb0286d57f1365c4839779dd992486545b8b5ada52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLETZQF3%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAtQ0BPJSCf727bVoWbUO%2FkiOgzk%2BV6tOvbLdwaQbGIIAiAUVdKxTdSYRu0qJPnKmS04S6wzOJxsr9We9BEEcHrYiyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG9%2BA86%2BIrTfGsQZeKtwDZLlUbL4ZUAExAMSzOYzzxwtkKoTIXXkZR3ED4K5CDnjNDL0wKSKq5mpKuEXYBPoTuuENho8cvIVvAywoo%2FO9MLqnMs6yprk%2FIGjweLvY90%2F3t7vgYMFqRAddEcROm6Jpze98gYQSL%2BA%2BX07Cbht439cNNb8WFr75wRg6JI8JN7NRcZrzjfXr9JDVIQlmw7lmvr6cYrT8vvS%2FkuHoU7Ff%2FDOgljVX64fIMfHlYv7uQ4QWMZlAmkl05ahY3645aRM2z%2Bg%2F1qGzQ3NWAwRCJyMfVvnZlUOkWcHCDWDegj%2BeBnCAfsOKH9%2FeDi%2FeGy2vZIda6ndS%2BG86xiy2XU9zrMcq1QA9tW2uqcoG6oh8r4d8pLS0xA71HcIddgA%2FFReLiUg8HlyKLTjhv6rwhrgJKRf5MSIkcduvQL%2FUi9Gf90PSsr%2FyhGwtokuUHxsYf9yaIX7IlJ58xRcelxQdLtH7%2FSi5hLOhJTEgdXrdiyUdXPmr34KJXbYFV4%2Bqojt9GvmbbrQYwaeM6dnbErHuGD7ze0WK1M8u3s8Erff5sy0q8CDLnhLuYdSl7m%2FcXWimxdA7GxvrIn1jY0ZdzzLKe92ZvtYK8BH7Z3pMc381xr5vtK6exAtiEoaR5j1gnPYO4rowoMqRxwY6pgEszu4dqLUscd2gCOTIqjtRINSKBKLcr4QPnNxf6kTcrqOfpHAtWptl9aqkZc2TmH7nvnMasvlVU2OLtWkOOe%2FlE%2Fcc3smdzSxV0TY6KpeH%2FonSvis3YCDzw1GeZPnMJSKN9Gk3e5O%2BurKOxYK2lL9TcQhWhWEvg5qONXTFtSAkczkCtwgFsrPLSsB3A4v2qdKSxgtRvVXXCxjWGyp0plqxkXy1W7Rx&X-Amz-Signature=74d9dda4c943bf133a08ad1dc0a1119a9fa04ec69128c2a5f745ae980a5ec795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLETZQF3%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAtQ0BPJSCf727bVoWbUO%2FkiOgzk%2BV6tOvbLdwaQbGIIAiAUVdKxTdSYRu0qJPnKmS04S6wzOJxsr9We9BEEcHrYiyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG9%2BA86%2BIrTfGsQZeKtwDZLlUbL4ZUAExAMSzOYzzxwtkKoTIXXkZR3ED4K5CDnjNDL0wKSKq5mpKuEXYBPoTuuENho8cvIVvAywoo%2FO9MLqnMs6yprk%2FIGjweLvY90%2F3t7vgYMFqRAddEcROm6Jpze98gYQSL%2BA%2BX07Cbht439cNNb8WFr75wRg6JI8JN7NRcZrzjfXr9JDVIQlmw7lmvr6cYrT8vvS%2FkuHoU7Ff%2FDOgljVX64fIMfHlYv7uQ4QWMZlAmkl05ahY3645aRM2z%2Bg%2F1qGzQ3NWAwRCJyMfVvnZlUOkWcHCDWDegj%2BeBnCAfsOKH9%2FeDi%2FeGy2vZIda6ndS%2BG86xiy2XU9zrMcq1QA9tW2uqcoG6oh8r4d8pLS0xA71HcIddgA%2FFReLiUg8HlyKLTjhv6rwhrgJKRf5MSIkcduvQL%2FUi9Gf90PSsr%2FyhGwtokuUHxsYf9yaIX7IlJ58xRcelxQdLtH7%2FSi5hLOhJTEgdXrdiyUdXPmr34KJXbYFV4%2Bqojt9GvmbbrQYwaeM6dnbErHuGD7ze0WK1M8u3s8Erff5sy0q8CDLnhLuYdSl7m%2FcXWimxdA7GxvrIn1jY0ZdzzLKe92ZvtYK8BH7Z3pMc381xr5vtK6exAtiEoaR5j1gnPYO4rowoMqRxwY6pgEszu4dqLUscd2gCOTIqjtRINSKBKLcr4QPnNxf6kTcrqOfpHAtWptl9aqkZc2TmH7nvnMasvlVU2OLtWkOOe%2FlE%2Fcc3smdzSxV0TY6KpeH%2FonSvis3YCDzw1GeZPnMJSKN9Gk3e5O%2BurKOxYK2lL9TcQhWhWEvg5qONXTFtSAkczkCtwgFsrPLSsB3A4v2qdKSxgtRvVXXCxjWGyp0plqxkXy1W7Rx&X-Amz-Signature=5131785850ad9f6ac928e8671d50ca81975485e8e6a1938e652a5caa1b6577bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLETZQF3%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAtQ0BPJSCf727bVoWbUO%2FkiOgzk%2BV6tOvbLdwaQbGIIAiAUVdKxTdSYRu0qJPnKmS04S6wzOJxsr9We9BEEcHrYiyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG9%2BA86%2BIrTfGsQZeKtwDZLlUbL4ZUAExAMSzOYzzxwtkKoTIXXkZR3ED4K5CDnjNDL0wKSKq5mpKuEXYBPoTuuENho8cvIVvAywoo%2FO9MLqnMs6yprk%2FIGjweLvY90%2F3t7vgYMFqRAddEcROm6Jpze98gYQSL%2BA%2BX07Cbht439cNNb8WFr75wRg6JI8JN7NRcZrzjfXr9JDVIQlmw7lmvr6cYrT8vvS%2FkuHoU7Ff%2FDOgljVX64fIMfHlYv7uQ4QWMZlAmkl05ahY3645aRM2z%2Bg%2F1qGzQ3NWAwRCJyMfVvnZlUOkWcHCDWDegj%2BeBnCAfsOKH9%2FeDi%2FeGy2vZIda6ndS%2BG86xiy2XU9zrMcq1QA9tW2uqcoG6oh8r4d8pLS0xA71HcIddgA%2FFReLiUg8HlyKLTjhv6rwhrgJKRf5MSIkcduvQL%2FUi9Gf90PSsr%2FyhGwtokuUHxsYf9yaIX7IlJ58xRcelxQdLtH7%2FSi5hLOhJTEgdXrdiyUdXPmr34KJXbYFV4%2Bqojt9GvmbbrQYwaeM6dnbErHuGD7ze0WK1M8u3s8Erff5sy0q8CDLnhLuYdSl7m%2FcXWimxdA7GxvrIn1jY0ZdzzLKe92ZvtYK8BH7Z3pMc381xr5vtK6exAtiEoaR5j1gnPYO4rowoMqRxwY6pgEszu4dqLUscd2gCOTIqjtRINSKBKLcr4QPnNxf6kTcrqOfpHAtWptl9aqkZc2TmH7nvnMasvlVU2OLtWkOOe%2FlE%2Fcc3smdzSxV0TY6KpeH%2FonSvis3YCDzw1GeZPnMJSKN9Gk3e5O%2BurKOxYK2lL9TcQhWhWEvg5qONXTFtSAkczkCtwgFsrPLSsB3A4v2qdKSxgtRvVXXCxjWGyp0plqxkXy1W7Rx&X-Amz-Signature=bd5b35a4691cd8b8399b46e3811873d937076677baf98bab013ce7027b79f5c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLETZQF3%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAtQ0BPJSCf727bVoWbUO%2FkiOgzk%2BV6tOvbLdwaQbGIIAiAUVdKxTdSYRu0qJPnKmS04S6wzOJxsr9We9BEEcHrYiyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG9%2BA86%2BIrTfGsQZeKtwDZLlUbL4ZUAExAMSzOYzzxwtkKoTIXXkZR3ED4K5CDnjNDL0wKSKq5mpKuEXYBPoTuuENho8cvIVvAywoo%2FO9MLqnMs6yprk%2FIGjweLvY90%2F3t7vgYMFqRAddEcROm6Jpze98gYQSL%2BA%2BX07Cbht439cNNb8WFr75wRg6JI8JN7NRcZrzjfXr9JDVIQlmw7lmvr6cYrT8vvS%2FkuHoU7Ff%2FDOgljVX64fIMfHlYv7uQ4QWMZlAmkl05ahY3645aRM2z%2Bg%2F1qGzQ3NWAwRCJyMfVvnZlUOkWcHCDWDegj%2BeBnCAfsOKH9%2FeDi%2FeGy2vZIda6ndS%2BG86xiy2XU9zrMcq1QA9tW2uqcoG6oh8r4d8pLS0xA71HcIddgA%2FFReLiUg8HlyKLTjhv6rwhrgJKRf5MSIkcduvQL%2FUi9Gf90PSsr%2FyhGwtokuUHxsYf9yaIX7IlJ58xRcelxQdLtH7%2FSi5hLOhJTEgdXrdiyUdXPmr34KJXbYFV4%2Bqojt9GvmbbrQYwaeM6dnbErHuGD7ze0WK1M8u3s8Erff5sy0q8CDLnhLuYdSl7m%2FcXWimxdA7GxvrIn1jY0ZdzzLKe92ZvtYK8BH7Z3pMc381xr5vtK6exAtiEoaR5j1gnPYO4rowoMqRxwY6pgEszu4dqLUscd2gCOTIqjtRINSKBKLcr4QPnNxf6kTcrqOfpHAtWptl9aqkZc2TmH7nvnMasvlVU2OLtWkOOe%2FlE%2Fcc3smdzSxV0TY6KpeH%2FonSvis3YCDzw1GeZPnMJSKN9Gk3e5O%2BurKOxYK2lL9TcQhWhWEvg5qONXTFtSAkczkCtwgFsrPLSsB3A4v2qdKSxgtRvVXXCxjWGyp0plqxkXy1W7Rx&X-Amz-Signature=6ce3de9f998205b07ee7b65e97721ca41c33054c583ced0df288c3c11d089003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLETZQF3%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAtQ0BPJSCf727bVoWbUO%2FkiOgzk%2BV6tOvbLdwaQbGIIAiAUVdKxTdSYRu0qJPnKmS04S6wzOJxsr9We9BEEcHrYiyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG9%2BA86%2BIrTfGsQZeKtwDZLlUbL4ZUAExAMSzOYzzxwtkKoTIXXkZR3ED4K5CDnjNDL0wKSKq5mpKuEXYBPoTuuENho8cvIVvAywoo%2FO9MLqnMs6yprk%2FIGjweLvY90%2F3t7vgYMFqRAddEcROm6Jpze98gYQSL%2BA%2BX07Cbht439cNNb8WFr75wRg6JI8JN7NRcZrzjfXr9JDVIQlmw7lmvr6cYrT8vvS%2FkuHoU7Ff%2FDOgljVX64fIMfHlYv7uQ4QWMZlAmkl05ahY3645aRM2z%2Bg%2F1qGzQ3NWAwRCJyMfVvnZlUOkWcHCDWDegj%2BeBnCAfsOKH9%2FeDi%2FeGy2vZIda6ndS%2BG86xiy2XU9zrMcq1QA9tW2uqcoG6oh8r4d8pLS0xA71HcIddgA%2FFReLiUg8HlyKLTjhv6rwhrgJKRf5MSIkcduvQL%2FUi9Gf90PSsr%2FyhGwtokuUHxsYf9yaIX7IlJ58xRcelxQdLtH7%2FSi5hLOhJTEgdXrdiyUdXPmr34KJXbYFV4%2Bqojt9GvmbbrQYwaeM6dnbErHuGD7ze0WK1M8u3s8Erff5sy0q8CDLnhLuYdSl7m%2FcXWimxdA7GxvrIn1jY0ZdzzLKe92ZvtYK8BH7Z3pMc381xr5vtK6exAtiEoaR5j1gnPYO4rowoMqRxwY6pgEszu4dqLUscd2gCOTIqjtRINSKBKLcr4QPnNxf6kTcrqOfpHAtWptl9aqkZc2TmH7nvnMasvlVU2OLtWkOOe%2FlE%2Fcc3smdzSxV0TY6KpeH%2FonSvis3YCDzw1GeZPnMJSKN9Gk3e5O%2BurKOxYK2lL9TcQhWhWEvg5qONXTFtSAkczkCtwgFsrPLSsB3A4v2qdKSxgtRvVXXCxjWGyp0plqxkXy1W7Rx&X-Amz-Signature=af1e4f8c73afa23eabd494fbb0055ffcca71461b964965f22b012df4f7d04fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
