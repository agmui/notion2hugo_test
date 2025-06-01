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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVP45GN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXnOmi51Q49j0fS2dz0jtmiYE%2FgPUwKCMHNWxQQwP4LAIhAILFKRbXVd8XpHLVaTmrPvXiBw5wmWOKzA0xpwLOc%2FxxKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj8s%2BN13UaHiEWA2gq3ANnqRDK0KEBptEJpYm1mi5ggUSZUoTbmKVSeSFK%2BaLG4V1N0RmLE6U%2BFlVCVBS8X2xDoelXQzDPFxPyO08Z%2BOeEUQXXUU40qbKAmZIklBTvyy2ubopfdGqD%2BbEStFMXGGkF%2B%2FFUhwHU03aHt%2B%2BrcDEyl9%2B3T99jj%2FkBwrKc24YyA2KKZYJNcXpa5XcakDA0qROxpko1N7XAMIdh6%2B9UEBH5Bxp4Le7zBy5z%2FwbAFf708yZH3ej53k5DV22i3CK%2BdH9AbNpJ4s8a%2F2QyX5LiV6dTcv6RXcM894CCbBUmwHmAyAQt%2BgtKGhWiyC0Gc2KAJ3SvwGu%2BMah9yKwgrmEnkAz1vRE0PabKMekRWCmZooOzDVCy9D35BiSda12KNP7jZCgMIt9i2FH%2B2BV6GsfDO94q9qjrqH60rqbaLv3A4JwJEgBkDTeXCNTVS3z9c4P%2BSi48NEIPMlH6zYO2Kv61o9bzKIctI%2FTLDnX11NMrIdxq8NE82NSeCAvOtxKubiBDu%2FImK6%2BZJ0bp9%2FiuHBs9BN6mEKCHq%2BCOAbH44zFAuEZl5qNf1jleK13yO0wjRe7BOHRh6yw20GXG0qPJ36otj%2Bd35vu0j8c7fpApjLKKRfMFJAAznXtphRuoM6t8ZjCzmO7BBjqkARm5JPYM%2FliGt9U%2FxUVsgd9q%2FKr2fiy3VcqVmCT87t3W10P1LA8VH25rbuZVq9Z35mAq3GlRZrC6vRlA1dwsWgtuqnfA58XV0AL48n4U%2BYtk9CBgjzw2NDyWJwon0QSRNaxDNCk2gVl4d7b1USGqlJNBeu8AyYIKUzTWIfjF8ZHf94HXmR1EhoAxYj%2FApRhDc35Tw7oSVBIREL4MM3Jop4JzbO9O&X-Amz-Signature=1ca04c2e9e77f7bdfa1af5e6f0fa31fd7a9ea8e814c0ccc07b603a1d1988c26a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVP45GN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXnOmi51Q49j0fS2dz0jtmiYE%2FgPUwKCMHNWxQQwP4LAIhAILFKRbXVd8XpHLVaTmrPvXiBw5wmWOKzA0xpwLOc%2FxxKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj8s%2BN13UaHiEWA2gq3ANnqRDK0KEBptEJpYm1mi5ggUSZUoTbmKVSeSFK%2BaLG4V1N0RmLE6U%2BFlVCVBS8X2xDoelXQzDPFxPyO08Z%2BOeEUQXXUU40qbKAmZIklBTvyy2ubopfdGqD%2BbEStFMXGGkF%2B%2FFUhwHU03aHt%2B%2BrcDEyl9%2B3T99jj%2FkBwrKc24YyA2KKZYJNcXpa5XcakDA0qROxpko1N7XAMIdh6%2B9UEBH5Bxp4Le7zBy5z%2FwbAFf708yZH3ej53k5DV22i3CK%2BdH9AbNpJ4s8a%2F2QyX5LiV6dTcv6RXcM894CCbBUmwHmAyAQt%2BgtKGhWiyC0Gc2KAJ3SvwGu%2BMah9yKwgrmEnkAz1vRE0PabKMekRWCmZooOzDVCy9D35BiSda12KNP7jZCgMIt9i2FH%2B2BV6GsfDO94q9qjrqH60rqbaLv3A4JwJEgBkDTeXCNTVS3z9c4P%2BSi48NEIPMlH6zYO2Kv61o9bzKIctI%2FTLDnX11NMrIdxq8NE82NSeCAvOtxKubiBDu%2FImK6%2BZJ0bp9%2FiuHBs9BN6mEKCHq%2BCOAbH44zFAuEZl5qNf1jleK13yO0wjRe7BOHRh6yw20GXG0qPJ36otj%2Bd35vu0j8c7fpApjLKKRfMFJAAznXtphRuoM6t8ZjCzmO7BBjqkARm5JPYM%2FliGt9U%2FxUVsgd9q%2FKr2fiy3VcqVmCT87t3W10P1LA8VH25rbuZVq9Z35mAq3GlRZrC6vRlA1dwsWgtuqnfA58XV0AL48n4U%2BYtk9CBgjzw2NDyWJwon0QSRNaxDNCk2gVl4d7b1USGqlJNBeu8AyYIKUzTWIfjF8ZHf94HXmR1EhoAxYj%2FApRhDc35Tw7oSVBIREL4MM3Jop4JzbO9O&X-Amz-Signature=aa6328ab4b02cc8cda4c6e83986f514a4d1d9b235fa97f7fb40cc1d01b8cbd3e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVP45GN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXnOmi51Q49j0fS2dz0jtmiYE%2FgPUwKCMHNWxQQwP4LAIhAILFKRbXVd8XpHLVaTmrPvXiBw5wmWOKzA0xpwLOc%2FxxKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj8s%2BN13UaHiEWA2gq3ANnqRDK0KEBptEJpYm1mi5ggUSZUoTbmKVSeSFK%2BaLG4V1N0RmLE6U%2BFlVCVBS8X2xDoelXQzDPFxPyO08Z%2BOeEUQXXUU40qbKAmZIklBTvyy2ubopfdGqD%2BbEStFMXGGkF%2B%2FFUhwHU03aHt%2B%2BrcDEyl9%2B3T99jj%2FkBwrKc24YyA2KKZYJNcXpa5XcakDA0qROxpko1N7XAMIdh6%2B9UEBH5Bxp4Le7zBy5z%2FwbAFf708yZH3ej53k5DV22i3CK%2BdH9AbNpJ4s8a%2F2QyX5LiV6dTcv6RXcM894CCbBUmwHmAyAQt%2BgtKGhWiyC0Gc2KAJ3SvwGu%2BMah9yKwgrmEnkAz1vRE0PabKMekRWCmZooOzDVCy9D35BiSda12KNP7jZCgMIt9i2FH%2B2BV6GsfDO94q9qjrqH60rqbaLv3A4JwJEgBkDTeXCNTVS3z9c4P%2BSi48NEIPMlH6zYO2Kv61o9bzKIctI%2FTLDnX11NMrIdxq8NE82NSeCAvOtxKubiBDu%2FImK6%2BZJ0bp9%2FiuHBs9BN6mEKCHq%2BCOAbH44zFAuEZl5qNf1jleK13yO0wjRe7BOHRh6yw20GXG0qPJ36otj%2Bd35vu0j8c7fpApjLKKRfMFJAAznXtphRuoM6t8ZjCzmO7BBjqkARm5JPYM%2FliGt9U%2FxUVsgd9q%2FKr2fiy3VcqVmCT87t3W10P1LA8VH25rbuZVq9Z35mAq3GlRZrC6vRlA1dwsWgtuqnfA58XV0AL48n4U%2BYtk9CBgjzw2NDyWJwon0QSRNaxDNCk2gVl4d7b1USGqlJNBeu8AyYIKUzTWIfjF8ZHf94HXmR1EhoAxYj%2FApRhDc35Tw7oSVBIREL4MM3Jop4JzbO9O&X-Amz-Signature=024ccdae23b597559b4c87f365eb4e2c9eeaf6b98a2afd40fc52a34ec6ef1f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVP45GN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXnOmi51Q49j0fS2dz0jtmiYE%2FgPUwKCMHNWxQQwP4LAIhAILFKRbXVd8XpHLVaTmrPvXiBw5wmWOKzA0xpwLOc%2FxxKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj8s%2BN13UaHiEWA2gq3ANnqRDK0KEBptEJpYm1mi5ggUSZUoTbmKVSeSFK%2BaLG4V1N0RmLE6U%2BFlVCVBS8X2xDoelXQzDPFxPyO08Z%2BOeEUQXXUU40qbKAmZIklBTvyy2ubopfdGqD%2BbEStFMXGGkF%2B%2FFUhwHU03aHt%2B%2BrcDEyl9%2B3T99jj%2FkBwrKc24YyA2KKZYJNcXpa5XcakDA0qROxpko1N7XAMIdh6%2B9UEBH5Bxp4Le7zBy5z%2FwbAFf708yZH3ej53k5DV22i3CK%2BdH9AbNpJ4s8a%2F2QyX5LiV6dTcv6RXcM894CCbBUmwHmAyAQt%2BgtKGhWiyC0Gc2KAJ3SvwGu%2BMah9yKwgrmEnkAz1vRE0PabKMekRWCmZooOzDVCy9D35BiSda12KNP7jZCgMIt9i2FH%2B2BV6GsfDO94q9qjrqH60rqbaLv3A4JwJEgBkDTeXCNTVS3z9c4P%2BSi48NEIPMlH6zYO2Kv61o9bzKIctI%2FTLDnX11NMrIdxq8NE82NSeCAvOtxKubiBDu%2FImK6%2BZJ0bp9%2FiuHBs9BN6mEKCHq%2BCOAbH44zFAuEZl5qNf1jleK13yO0wjRe7BOHRh6yw20GXG0qPJ36otj%2Bd35vu0j8c7fpApjLKKRfMFJAAznXtphRuoM6t8ZjCzmO7BBjqkARm5JPYM%2FliGt9U%2FxUVsgd9q%2FKr2fiy3VcqVmCT87t3W10P1LA8VH25rbuZVq9Z35mAq3GlRZrC6vRlA1dwsWgtuqnfA58XV0AL48n4U%2BYtk9CBgjzw2NDyWJwon0QSRNaxDNCk2gVl4d7b1USGqlJNBeu8AyYIKUzTWIfjF8ZHf94HXmR1EhoAxYj%2FApRhDc35Tw7oSVBIREL4MM3Jop4JzbO9O&X-Amz-Signature=3b1686a8b72b350119cc42c6e5db11c8437ecff9be2c2e2ddf08cb59d6137d07&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVP45GN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXnOmi51Q49j0fS2dz0jtmiYE%2FgPUwKCMHNWxQQwP4LAIhAILFKRbXVd8XpHLVaTmrPvXiBw5wmWOKzA0xpwLOc%2FxxKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj8s%2BN13UaHiEWA2gq3ANnqRDK0KEBptEJpYm1mi5ggUSZUoTbmKVSeSFK%2BaLG4V1N0RmLE6U%2BFlVCVBS8X2xDoelXQzDPFxPyO08Z%2BOeEUQXXUU40qbKAmZIklBTvyy2ubopfdGqD%2BbEStFMXGGkF%2B%2FFUhwHU03aHt%2B%2BrcDEyl9%2B3T99jj%2FkBwrKc24YyA2KKZYJNcXpa5XcakDA0qROxpko1N7XAMIdh6%2B9UEBH5Bxp4Le7zBy5z%2FwbAFf708yZH3ej53k5DV22i3CK%2BdH9AbNpJ4s8a%2F2QyX5LiV6dTcv6RXcM894CCbBUmwHmAyAQt%2BgtKGhWiyC0Gc2KAJ3SvwGu%2BMah9yKwgrmEnkAz1vRE0PabKMekRWCmZooOzDVCy9D35BiSda12KNP7jZCgMIt9i2FH%2B2BV6GsfDO94q9qjrqH60rqbaLv3A4JwJEgBkDTeXCNTVS3z9c4P%2BSi48NEIPMlH6zYO2Kv61o9bzKIctI%2FTLDnX11NMrIdxq8NE82NSeCAvOtxKubiBDu%2FImK6%2BZJ0bp9%2FiuHBs9BN6mEKCHq%2BCOAbH44zFAuEZl5qNf1jleK13yO0wjRe7BOHRh6yw20GXG0qPJ36otj%2Bd35vu0j8c7fpApjLKKRfMFJAAznXtphRuoM6t8ZjCzmO7BBjqkARm5JPYM%2FliGt9U%2FxUVsgd9q%2FKr2fiy3VcqVmCT87t3W10P1LA8VH25rbuZVq9Z35mAq3GlRZrC6vRlA1dwsWgtuqnfA58XV0AL48n4U%2BYtk9CBgjzw2NDyWJwon0QSRNaxDNCk2gVl4d7b1USGqlJNBeu8AyYIKUzTWIfjF8ZHf94HXmR1EhoAxYj%2FApRhDc35Tw7oSVBIREL4MM3Jop4JzbO9O&X-Amz-Signature=5f22fce1a7ef96a9072a462d995c68196ff826ce47148ac4aaa09bb0547bc54a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVP45GN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXnOmi51Q49j0fS2dz0jtmiYE%2FgPUwKCMHNWxQQwP4LAIhAILFKRbXVd8XpHLVaTmrPvXiBw5wmWOKzA0xpwLOc%2FxxKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj8s%2BN13UaHiEWA2gq3ANnqRDK0KEBptEJpYm1mi5ggUSZUoTbmKVSeSFK%2BaLG4V1N0RmLE6U%2BFlVCVBS8X2xDoelXQzDPFxPyO08Z%2BOeEUQXXUU40qbKAmZIklBTvyy2ubopfdGqD%2BbEStFMXGGkF%2B%2FFUhwHU03aHt%2B%2BrcDEyl9%2B3T99jj%2FkBwrKc24YyA2KKZYJNcXpa5XcakDA0qROxpko1N7XAMIdh6%2B9UEBH5Bxp4Le7zBy5z%2FwbAFf708yZH3ej53k5DV22i3CK%2BdH9AbNpJ4s8a%2F2QyX5LiV6dTcv6RXcM894CCbBUmwHmAyAQt%2BgtKGhWiyC0Gc2KAJ3SvwGu%2BMah9yKwgrmEnkAz1vRE0PabKMekRWCmZooOzDVCy9D35BiSda12KNP7jZCgMIt9i2FH%2B2BV6GsfDO94q9qjrqH60rqbaLv3A4JwJEgBkDTeXCNTVS3z9c4P%2BSi48NEIPMlH6zYO2Kv61o9bzKIctI%2FTLDnX11NMrIdxq8NE82NSeCAvOtxKubiBDu%2FImK6%2BZJ0bp9%2FiuHBs9BN6mEKCHq%2BCOAbH44zFAuEZl5qNf1jleK13yO0wjRe7BOHRh6yw20GXG0qPJ36otj%2Bd35vu0j8c7fpApjLKKRfMFJAAznXtphRuoM6t8ZjCzmO7BBjqkARm5JPYM%2FliGt9U%2FxUVsgd9q%2FKr2fiy3VcqVmCT87t3W10P1LA8VH25rbuZVq9Z35mAq3GlRZrC6vRlA1dwsWgtuqnfA58XV0AL48n4U%2BYtk9CBgjzw2NDyWJwon0QSRNaxDNCk2gVl4d7b1USGqlJNBeu8AyYIKUzTWIfjF8ZHf94HXmR1EhoAxYj%2FApRhDc35Tw7oSVBIREL4MM3Jop4JzbO9O&X-Amz-Signature=2d5a27299f34685f806268a66717ef05cfb6f431bfedf504594970502a0765b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVP45GN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXnOmi51Q49j0fS2dz0jtmiYE%2FgPUwKCMHNWxQQwP4LAIhAILFKRbXVd8XpHLVaTmrPvXiBw5wmWOKzA0xpwLOc%2FxxKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj8s%2BN13UaHiEWA2gq3ANnqRDK0KEBptEJpYm1mi5ggUSZUoTbmKVSeSFK%2BaLG4V1N0RmLE6U%2BFlVCVBS8X2xDoelXQzDPFxPyO08Z%2BOeEUQXXUU40qbKAmZIklBTvyy2ubopfdGqD%2BbEStFMXGGkF%2B%2FFUhwHU03aHt%2B%2BrcDEyl9%2B3T99jj%2FkBwrKc24YyA2KKZYJNcXpa5XcakDA0qROxpko1N7XAMIdh6%2B9UEBH5Bxp4Le7zBy5z%2FwbAFf708yZH3ej53k5DV22i3CK%2BdH9AbNpJ4s8a%2F2QyX5LiV6dTcv6RXcM894CCbBUmwHmAyAQt%2BgtKGhWiyC0Gc2KAJ3SvwGu%2BMah9yKwgrmEnkAz1vRE0PabKMekRWCmZooOzDVCy9D35BiSda12KNP7jZCgMIt9i2FH%2B2BV6GsfDO94q9qjrqH60rqbaLv3A4JwJEgBkDTeXCNTVS3z9c4P%2BSi48NEIPMlH6zYO2Kv61o9bzKIctI%2FTLDnX11NMrIdxq8NE82NSeCAvOtxKubiBDu%2FImK6%2BZJ0bp9%2FiuHBs9BN6mEKCHq%2BCOAbH44zFAuEZl5qNf1jleK13yO0wjRe7BOHRh6yw20GXG0qPJ36otj%2Bd35vu0j8c7fpApjLKKRfMFJAAznXtphRuoM6t8ZjCzmO7BBjqkARm5JPYM%2FliGt9U%2FxUVsgd9q%2FKr2fiy3VcqVmCT87t3W10P1LA8VH25rbuZVq9Z35mAq3GlRZrC6vRlA1dwsWgtuqnfA58XV0AL48n4U%2BYtk9CBgjzw2NDyWJwon0QSRNaxDNCk2gVl4d7b1USGqlJNBeu8AyYIKUzTWIfjF8ZHf94HXmR1EhoAxYj%2FApRhDc35Tw7oSVBIREL4MM3Jop4JzbO9O&X-Amz-Signature=b8a197531c14c5073b686fc21ec712ec535643a81b926e7f8f8754f713ee157c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVP45GN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXnOmi51Q49j0fS2dz0jtmiYE%2FgPUwKCMHNWxQQwP4LAIhAILFKRbXVd8XpHLVaTmrPvXiBw5wmWOKzA0xpwLOc%2FxxKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj8s%2BN13UaHiEWA2gq3ANnqRDK0KEBptEJpYm1mi5ggUSZUoTbmKVSeSFK%2BaLG4V1N0RmLE6U%2BFlVCVBS8X2xDoelXQzDPFxPyO08Z%2BOeEUQXXUU40qbKAmZIklBTvyy2ubopfdGqD%2BbEStFMXGGkF%2B%2FFUhwHU03aHt%2B%2BrcDEyl9%2B3T99jj%2FkBwrKc24YyA2KKZYJNcXpa5XcakDA0qROxpko1N7XAMIdh6%2B9UEBH5Bxp4Le7zBy5z%2FwbAFf708yZH3ej53k5DV22i3CK%2BdH9AbNpJ4s8a%2F2QyX5LiV6dTcv6RXcM894CCbBUmwHmAyAQt%2BgtKGhWiyC0Gc2KAJ3SvwGu%2BMah9yKwgrmEnkAz1vRE0PabKMekRWCmZooOzDVCy9D35BiSda12KNP7jZCgMIt9i2FH%2B2BV6GsfDO94q9qjrqH60rqbaLv3A4JwJEgBkDTeXCNTVS3z9c4P%2BSi48NEIPMlH6zYO2Kv61o9bzKIctI%2FTLDnX11NMrIdxq8NE82NSeCAvOtxKubiBDu%2FImK6%2BZJ0bp9%2FiuHBs9BN6mEKCHq%2BCOAbH44zFAuEZl5qNf1jleK13yO0wjRe7BOHRh6yw20GXG0qPJ36otj%2Bd35vu0j8c7fpApjLKKRfMFJAAznXtphRuoM6t8ZjCzmO7BBjqkARm5JPYM%2FliGt9U%2FxUVsgd9q%2FKr2fiy3VcqVmCT87t3W10P1LA8VH25rbuZVq9Z35mAq3GlRZrC6vRlA1dwsWgtuqnfA58XV0AL48n4U%2BYtk9CBgjzw2NDyWJwon0QSRNaxDNCk2gVl4d7b1USGqlJNBeu8AyYIKUzTWIfjF8ZHf94HXmR1EhoAxYj%2FApRhDc35Tw7oSVBIREL4MM3Jop4JzbO9O&X-Amz-Signature=ac0c3f58e2c9b16fce13c7f49275d108e413e0a5609875aec2aa575b8a7554bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
