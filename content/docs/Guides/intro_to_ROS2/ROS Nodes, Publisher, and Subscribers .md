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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZFUVRF%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCHWnYfgkTniIv04LA8TyH%2BP%2BMEqs2852g%2B6SUC3mcg%2BgIhAI7twZboHgmjUutSx921ijHnMoPq1pfUP3ag4l%2BsYggmKv8DCEUQABoMNjM3NDIzMTgzODA1IgyRCB5Xk5E3s3vnANoq3APVXR48X3IwBRCwpTTWRq7JAZOj2tT0XsmyZ3%2FyiQgYbAnXJcghkADVNMxhtzrNvgWHxzcist1i960LGTsAEYQYFHgW5ZD1IegL%2FzFiAJ43KlOURnMJj14sHZoAxsIMP6%2BBSD64SbSqfAj%2F0bX%2B1zBDvqZmCMhJszZd0ZAckYdk2MyjV3uxDz6UJ3%2B9Wsx9dJMdywgH2nWIW4foEdkhQejkDchDqolLKI265x3%2B73LRhQ5YEy%2FC6HMMoPIo3IyOLHVP4RCeUfamTd9oMMUypeI6uMyBsUxo7YOrPTMUXUikvoWOFJV6OdYEcg4oV62OBOkMXwxTboWPYgdoMPEZLiltZzBvYpSgDMM2LwxSW7HfBwvMwaYukYglAF6tK4cRHeeOrcLUrwlHJSwfy81MTyhiIqSqBw%2FowzzYg1aGWML9vMQg3TRhSzUbhrlOaODWkXDK1w9d77YDsvzZIYM9%2B2Zjaieahix7mTo8B9K5mBFvdbVa0eZ0ABF9h47SYKqSB15J0uWE447O%2FfXPhyzmrK4TXofQJlLXjZpDIPwI9KWtbH0%2Fvh%2FXY9xzYOrvm8%2B6YrusBwEf1%2B%2FPlvAYS%2FQvt%2FYSE7Or%2FYwe22eCYt2UFWextBTlUAj%2B3EjftCYKfjCC4LrCBjqkAWEgvcbS19zmZNkCKUjnB5cTlRii%2BCqsj1Abj%2BqWvEM1ZSXm3wE4%2FsJVQuF76mFbURLwxfWV7haj5pDtZm0ITIk8jmz3TmhoxyGRhNgPP1LKDaxwn5Y4uAGU1N5Bg%2BymQi00QfzxQzQcpez8ncxn6kPPEVvimqRtLHnPIm4xhLEqa2ddgJAsJUBqV%2FwP3k%2FfepK3K3ZHu42D42pGmqdeaCAfQkTT&X-Amz-Signature=cebd6efbcb8a8da747acfa4c07c87ba3587e19007beec7e801325ad9f2e0a586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZFUVRF%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCHWnYfgkTniIv04LA8TyH%2BP%2BMEqs2852g%2B6SUC3mcg%2BgIhAI7twZboHgmjUutSx921ijHnMoPq1pfUP3ag4l%2BsYggmKv8DCEUQABoMNjM3NDIzMTgzODA1IgyRCB5Xk5E3s3vnANoq3APVXR48X3IwBRCwpTTWRq7JAZOj2tT0XsmyZ3%2FyiQgYbAnXJcghkADVNMxhtzrNvgWHxzcist1i960LGTsAEYQYFHgW5ZD1IegL%2FzFiAJ43KlOURnMJj14sHZoAxsIMP6%2BBSD64SbSqfAj%2F0bX%2B1zBDvqZmCMhJszZd0ZAckYdk2MyjV3uxDz6UJ3%2B9Wsx9dJMdywgH2nWIW4foEdkhQejkDchDqolLKI265x3%2B73LRhQ5YEy%2FC6HMMoPIo3IyOLHVP4RCeUfamTd9oMMUypeI6uMyBsUxo7YOrPTMUXUikvoWOFJV6OdYEcg4oV62OBOkMXwxTboWPYgdoMPEZLiltZzBvYpSgDMM2LwxSW7HfBwvMwaYukYglAF6tK4cRHeeOrcLUrwlHJSwfy81MTyhiIqSqBw%2FowzzYg1aGWML9vMQg3TRhSzUbhrlOaODWkXDK1w9d77YDsvzZIYM9%2B2Zjaieahix7mTo8B9K5mBFvdbVa0eZ0ABF9h47SYKqSB15J0uWE447O%2FfXPhyzmrK4TXofQJlLXjZpDIPwI9KWtbH0%2Fvh%2FXY9xzYOrvm8%2B6YrusBwEf1%2B%2FPlvAYS%2FQvt%2FYSE7Or%2FYwe22eCYt2UFWextBTlUAj%2B3EjftCYKfjCC4LrCBjqkAWEgvcbS19zmZNkCKUjnB5cTlRii%2BCqsj1Abj%2BqWvEM1ZSXm3wE4%2FsJVQuF76mFbURLwxfWV7haj5pDtZm0ITIk8jmz3TmhoxyGRhNgPP1LKDaxwn5Y4uAGU1N5Bg%2BymQi00QfzxQzQcpez8ncxn6kPPEVvimqRtLHnPIm4xhLEqa2ddgJAsJUBqV%2FwP3k%2FfepK3K3ZHu42D42pGmqdeaCAfQkTT&X-Amz-Signature=5e1506d21318f8b55ce947faed6d20b282adf0ab3f1faa4186ff5e3c365779c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZFUVRF%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCHWnYfgkTniIv04LA8TyH%2BP%2BMEqs2852g%2B6SUC3mcg%2BgIhAI7twZboHgmjUutSx921ijHnMoPq1pfUP3ag4l%2BsYggmKv8DCEUQABoMNjM3NDIzMTgzODA1IgyRCB5Xk5E3s3vnANoq3APVXR48X3IwBRCwpTTWRq7JAZOj2tT0XsmyZ3%2FyiQgYbAnXJcghkADVNMxhtzrNvgWHxzcist1i960LGTsAEYQYFHgW5ZD1IegL%2FzFiAJ43KlOURnMJj14sHZoAxsIMP6%2BBSD64SbSqfAj%2F0bX%2B1zBDvqZmCMhJszZd0ZAckYdk2MyjV3uxDz6UJ3%2B9Wsx9dJMdywgH2nWIW4foEdkhQejkDchDqolLKI265x3%2B73LRhQ5YEy%2FC6HMMoPIo3IyOLHVP4RCeUfamTd9oMMUypeI6uMyBsUxo7YOrPTMUXUikvoWOFJV6OdYEcg4oV62OBOkMXwxTboWPYgdoMPEZLiltZzBvYpSgDMM2LwxSW7HfBwvMwaYukYglAF6tK4cRHeeOrcLUrwlHJSwfy81MTyhiIqSqBw%2FowzzYg1aGWML9vMQg3TRhSzUbhrlOaODWkXDK1w9d77YDsvzZIYM9%2B2Zjaieahix7mTo8B9K5mBFvdbVa0eZ0ABF9h47SYKqSB15J0uWE447O%2FfXPhyzmrK4TXofQJlLXjZpDIPwI9KWtbH0%2Fvh%2FXY9xzYOrvm8%2B6YrusBwEf1%2B%2FPlvAYS%2FQvt%2FYSE7Or%2FYwe22eCYt2UFWextBTlUAj%2B3EjftCYKfjCC4LrCBjqkAWEgvcbS19zmZNkCKUjnB5cTlRii%2BCqsj1Abj%2BqWvEM1ZSXm3wE4%2FsJVQuF76mFbURLwxfWV7haj5pDtZm0ITIk8jmz3TmhoxyGRhNgPP1LKDaxwn5Y4uAGU1N5Bg%2BymQi00QfzxQzQcpez8ncxn6kPPEVvimqRtLHnPIm4xhLEqa2ddgJAsJUBqV%2FwP3k%2FfepK3K3ZHu42D42pGmqdeaCAfQkTT&X-Amz-Signature=84a87676ab5e7323024b983efae193eed8177fe298262dbe92fe6e411f9daa78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZFUVRF%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCHWnYfgkTniIv04LA8TyH%2BP%2BMEqs2852g%2B6SUC3mcg%2BgIhAI7twZboHgmjUutSx921ijHnMoPq1pfUP3ag4l%2BsYggmKv8DCEUQABoMNjM3NDIzMTgzODA1IgyRCB5Xk5E3s3vnANoq3APVXR48X3IwBRCwpTTWRq7JAZOj2tT0XsmyZ3%2FyiQgYbAnXJcghkADVNMxhtzrNvgWHxzcist1i960LGTsAEYQYFHgW5ZD1IegL%2FzFiAJ43KlOURnMJj14sHZoAxsIMP6%2BBSD64SbSqfAj%2F0bX%2B1zBDvqZmCMhJszZd0ZAckYdk2MyjV3uxDz6UJ3%2B9Wsx9dJMdywgH2nWIW4foEdkhQejkDchDqolLKI265x3%2B73LRhQ5YEy%2FC6HMMoPIo3IyOLHVP4RCeUfamTd9oMMUypeI6uMyBsUxo7YOrPTMUXUikvoWOFJV6OdYEcg4oV62OBOkMXwxTboWPYgdoMPEZLiltZzBvYpSgDMM2LwxSW7HfBwvMwaYukYglAF6tK4cRHeeOrcLUrwlHJSwfy81MTyhiIqSqBw%2FowzzYg1aGWML9vMQg3TRhSzUbhrlOaODWkXDK1w9d77YDsvzZIYM9%2B2Zjaieahix7mTo8B9K5mBFvdbVa0eZ0ABF9h47SYKqSB15J0uWE447O%2FfXPhyzmrK4TXofQJlLXjZpDIPwI9KWtbH0%2Fvh%2FXY9xzYOrvm8%2B6YrusBwEf1%2B%2FPlvAYS%2FQvt%2FYSE7Or%2FYwe22eCYt2UFWextBTlUAj%2B3EjftCYKfjCC4LrCBjqkAWEgvcbS19zmZNkCKUjnB5cTlRii%2BCqsj1Abj%2BqWvEM1ZSXm3wE4%2FsJVQuF76mFbURLwxfWV7haj5pDtZm0ITIk8jmz3TmhoxyGRhNgPP1LKDaxwn5Y4uAGU1N5Bg%2BymQi00QfzxQzQcpez8ncxn6kPPEVvimqRtLHnPIm4xhLEqa2ddgJAsJUBqV%2FwP3k%2FfepK3K3ZHu42D42pGmqdeaCAfQkTT&X-Amz-Signature=d521e718fc0b8e78f2396b147cab448aeb8d102b85d681c131507cb5214db834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZFUVRF%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCHWnYfgkTniIv04LA8TyH%2BP%2BMEqs2852g%2B6SUC3mcg%2BgIhAI7twZboHgmjUutSx921ijHnMoPq1pfUP3ag4l%2BsYggmKv8DCEUQABoMNjM3NDIzMTgzODA1IgyRCB5Xk5E3s3vnANoq3APVXR48X3IwBRCwpTTWRq7JAZOj2tT0XsmyZ3%2FyiQgYbAnXJcghkADVNMxhtzrNvgWHxzcist1i960LGTsAEYQYFHgW5ZD1IegL%2FzFiAJ43KlOURnMJj14sHZoAxsIMP6%2BBSD64SbSqfAj%2F0bX%2B1zBDvqZmCMhJszZd0ZAckYdk2MyjV3uxDz6UJ3%2B9Wsx9dJMdywgH2nWIW4foEdkhQejkDchDqolLKI265x3%2B73LRhQ5YEy%2FC6HMMoPIo3IyOLHVP4RCeUfamTd9oMMUypeI6uMyBsUxo7YOrPTMUXUikvoWOFJV6OdYEcg4oV62OBOkMXwxTboWPYgdoMPEZLiltZzBvYpSgDMM2LwxSW7HfBwvMwaYukYglAF6tK4cRHeeOrcLUrwlHJSwfy81MTyhiIqSqBw%2FowzzYg1aGWML9vMQg3TRhSzUbhrlOaODWkXDK1w9d77YDsvzZIYM9%2B2Zjaieahix7mTo8B9K5mBFvdbVa0eZ0ABF9h47SYKqSB15J0uWE447O%2FfXPhyzmrK4TXofQJlLXjZpDIPwI9KWtbH0%2Fvh%2FXY9xzYOrvm8%2B6YrusBwEf1%2B%2FPlvAYS%2FQvt%2FYSE7Or%2FYwe22eCYt2UFWextBTlUAj%2B3EjftCYKfjCC4LrCBjqkAWEgvcbS19zmZNkCKUjnB5cTlRii%2BCqsj1Abj%2BqWvEM1ZSXm3wE4%2FsJVQuF76mFbURLwxfWV7haj5pDtZm0ITIk8jmz3TmhoxyGRhNgPP1LKDaxwn5Y4uAGU1N5Bg%2BymQi00QfzxQzQcpez8ncxn6kPPEVvimqRtLHnPIm4xhLEqa2ddgJAsJUBqV%2FwP3k%2FfepK3K3ZHu42D42pGmqdeaCAfQkTT&X-Amz-Signature=13c492c460df0d48e6ba16343ac448b7f5e44a5ebf79c92a61538f68eaef82a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZFUVRF%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCHWnYfgkTniIv04LA8TyH%2BP%2BMEqs2852g%2B6SUC3mcg%2BgIhAI7twZboHgmjUutSx921ijHnMoPq1pfUP3ag4l%2BsYggmKv8DCEUQABoMNjM3NDIzMTgzODA1IgyRCB5Xk5E3s3vnANoq3APVXR48X3IwBRCwpTTWRq7JAZOj2tT0XsmyZ3%2FyiQgYbAnXJcghkADVNMxhtzrNvgWHxzcist1i960LGTsAEYQYFHgW5ZD1IegL%2FzFiAJ43KlOURnMJj14sHZoAxsIMP6%2BBSD64SbSqfAj%2F0bX%2B1zBDvqZmCMhJszZd0ZAckYdk2MyjV3uxDz6UJ3%2B9Wsx9dJMdywgH2nWIW4foEdkhQejkDchDqolLKI265x3%2B73LRhQ5YEy%2FC6HMMoPIo3IyOLHVP4RCeUfamTd9oMMUypeI6uMyBsUxo7YOrPTMUXUikvoWOFJV6OdYEcg4oV62OBOkMXwxTboWPYgdoMPEZLiltZzBvYpSgDMM2LwxSW7HfBwvMwaYukYglAF6tK4cRHeeOrcLUrwlHJSwfy81MTyhiIqSqBw%2FowzzYg1aGWML9vMQg3TRhSzUbhrlOaODWkXDK1w9d77YDsvzZIYM9%2B2Zjaieahix7mTo8B9K5mBFvdbVa0eZ0ABF9h47SYKqSB15J0uWE447O%2FfXPhyzmrK4TXofQJlLXjZpDIPwI9KWtbH0%2Fvh%2FXY9xzYOrvm8%2B6YrusBwEf1%2B%2FPlvAYS%2FQvt%2FYSE7Or%2FYwe22eCYt2UFWextBTlUAj%2B3EjftCYKfjCC4LrCBjqkAWEgvcbS19zmZNkCKUjnB5cTlRii%2BCqsj1Abj%2BqWvEM1ZSXm3wE4%2FsJVQuF76mFbURLwxfWV7haj5pDtZm0ITIk8jmz3TmhoxyGRhNgPP1LKDaxwn5Y4uAGU1N5Bg%2BymQi00QfzxQzQcpez8ncxn6kPPEVvimqRtLHnPIm4xhLEqa2ddgJAsJUBqV%2FwP3k%2FfepK3K3ZHu42D42pGmqdeaCAfQkTT&X-Amz-Signature=ffda64ca770388ac2d2565bf38f9aa3b132586583ecaa951f4151f57424c949a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZFUVRF%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCHWnYfgkTniIv04LA8TyH%2BP%2BMEqs2852g%2B6SUC3mcg%2BgIhAI7twZboHgmjUutSx921ijHnMoPq1pfUP3ag4l%2BsYggmKv8DCEUQABoMNjM3NDIzMTgzODA1IgyRCB5Xk5E3s3vnANoq3APVXR48X3IwBRCwpTTWRq7JAZOj2tT0XsmyZ3%2FyiQgYbAnXJcghkADVNMxhtzrNvgWHxzcist1i960LGTsAEYQYFHgW5ZD1IegL%2FzFiAJ43KlOURnMJj14sHZoAxsIMP6%2BBSD64SbSqfAj%2F0bX%2B1zBDvqZmCMhJszZd0ZAckYdk2MyjV3uxDz6UJ3%2B9Wsx9dJMdywgH2nWIW4foEdkhQejkDchDqolLKI265x3%2B73LRhQ5YEy%2FC6HMMoPIo3IyOLHVP4RCeUfamTd9oMMUypeI6uMyBsUxo7YOrPTMUXUikvoWOFJV6OdYEcg4oV62OBOkMXwxTboWPYgdoMPEZLiltZzBvYpSgDMM2LwxSW7HfBwvMwaYukYglAF6tK4cRHeeOrcLUrwlHJSwfy81MTyhiIqSqBw%2FowzzYg1aGWML9vMQg3TRhSzUbhrlOaODWkXDK1w9d77YDsvzZIYM9%2B2Zjaieahix7mTo8B9K5mBFvdbVa0eZ0ABF9h47SYKqSB15J0uWE447O%2FfXPhyzmrK4TXofQJlLXjZpDIPwI9KWtbH0%2Fvh%2FXY9xzYOrvm8%2B6YrusBwEf1%2B%2FPlvAYS%2FQvt%2FYSE7Or%2FYwe22eCYt2UFWextBTlUAj%2B3EjftCYKfjCC4LrCBjqkAWEgvcbS19zmZNkCKUjnB5cTlRii%2BCqsj1Abj%2BqWvEM1ZSXm3wE4%2FsJVQuF76mFbURLwxfWV7haj5pDtZm0ITIk8jmz3TmhoxyGRhNgPP1LKDaxwn5Y4uAGU1N5Bg%2BymQi00QfzxQzQcpez8ncxn6kPPEVvimqRtLHnPIm4xhLEqa2ddgJAsJUBqV%2FwP3k%2FfepK3K3ZHu42D42pGmqdeaCAfQkTT&X-Amz-Signature=8c686b5acf73f118272c3177e9d8e4e56fd36384ee326ecd1858e3cd318f0c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZFUVRF%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCHWnYfgkTniIv04LA8TyH%2BP%2BMEqs2852g%2B6SUC3mcg%2BgIhAI7twZboHgmjUutSx921ijHnMoPq1pfUP3ag4l%2BsYggmKv8DCEUQABoMNjM3NDIzMTgzODA1IgyRCB5Xk5E3s3vnANoq3APVXR48X3IwBRCwpTTWRq7JAZOj2tT0XsmyZ3%2FyiQgYbAnXJcghkADVNMxhtzrNvgWHxzcist1i960LGTsAEYQYFHgW5ZD1IegL%2FzFiAJ43KlOURnMJj14sHZoAxsIMP6%2BBSD64SbSqfAj%2F0bX%2B1zBDvqZmCMhJszZd0ZAckYdk2MyjV3uxDz6UJ3%2B9Wsx9dJMdywgH2nWIW4foEdkhQejkDchDqolLKI265x3%2B73LRhQ5YEy%2FC6HMMoPIo3IyOLHVP4RCeUfamTd9oMMUypeI6uMyBsUxo7YOrPTMUXUikvoWOFJV6OdYEcg4oV62OBOkMXwxTboWPYgdoMPEZLiltZzBvYpSgDMM2LwxSW7HfBwvMwaYukYglAF6tK4cRHeeOrcLUrwlHJSwfy81MTyhiIqSqBw%2FowzzYg1aGWML9vMQg3TRhSzUbhrlOaODWkXDK1w9d77YDsvzZIYM9%2B2Zjaieahix7mTo8B9K5mBFvdbVa0eZ0ABF9h47SYKqSB15J0uWE447O%2FfXPhyzmrK4TXofQJlLXjZpDIPwI9KWtbH0%2Fvh%2FXY9xzYOrvm8%2B6YrusBwEf1%2B%2FPlvAYS%2FQvt%2FYSE7Or%2FYwe22eCYt2UFWextBTlUAj%2B3EjftCYKfjCC4LrCBjqkAWEgvcbS19zmZNkCKUjnB5cTlRii%2BCqsj1Abj%2BqWvEM1ZSXm3wE4%2FsJVQuF76mFbURLwxfWV7haj5pDtZm0ITIk8jmz3TmhoxyGRhNgPP1LKDaxwn5Y4uAGU1N5Bg%2BymQi00QfzxQzQcpez8ncxn6kPPEVvimqRtLHnPIm4xhLEqa2ddgJAsJUBqV%2FwP3k%2FfepK3K3ZHu42D42pGmqdeaCAfQkTT&X-Amz-Signature=feeb2db36f62c638344fb617ffc5482f6fb28b00dbf69a959ef00524f8b69d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
