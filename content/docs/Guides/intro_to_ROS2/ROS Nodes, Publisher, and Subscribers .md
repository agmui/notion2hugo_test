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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VY5ASCN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIAeyFYMKKKBBw0bUAQ8lHRNX%2Fcy3DvF1Af1M7odxrBszAiBzXnoAYcY1U0yEOFsDeJwrAiq8hFO5fBMMm2G%2BOUvbhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMMLD%2FUHC3JQLKN%2BQsKtwDWCH7mtFGR%2Bs9%2FZggzXcgxBZz6I6nQtUVR5CvRUSzZTscJRhgfy5VxKHSwxxem98gpy%2BdLoxowM2ffHuyFmbBjuqM5IxX7NSALAXhpnpYmP%2B7t2Npm4hnHVHmgFa5cr%2FuIltJHu50NyR6mSzYb2926rgHkEpPiRRtrJj3%2FJpQ2RWWVn83QDwt6lhb0iewnwZvO87%2Bs5ZpvKYuN%2BH0ohcd9kdApMBDnGobdcEUIgKxjki%2BfMkxImnrI92HsUCKdyoOzGtM7kZhJFHB4osMFhdiu0C41TDUvXy%2BX%2F%2BK8GD3cG1UL9l3DGT9CULzitZ0MEQsJTO9A3v7ApfYHXub38auoKq1RnX1DqTqCXryfnSMVRDF8%2BRjMYVEXjPwJNdkfZ219sfIoYDGR%2FRlNUk6ZyEnVr5HpmlzhPsjboOOwdt%2FlRsMCbNnVy7AVL2BTlqtNmNDaM6UzTvPYadUZnIdKBwRyVO9Ap0FYIO8YFjNpMiSp%2F%2BGQjQ1bv0NKjnkS1g%2BIC9vx6rcfJuW7UnWwlg%2BQTDitFowBNSPiMl6zWfRcIg7Qb1RPOFKF%2FToYh2uY8jJ07oNhXjttWHprvY4FdTq3k62G%2FrCilAGAKFj3CHfWaARab1JFuqUZ7f4CTJ4mmkw1LaRvQY6pgEFZQs71FZqT%2Bwdm17SRcPhKmK9qSP9AiKfBC2qraZc5R%2FKG2olK51HOG0WKD75MtcUaeJO5kVP%2Fr9y2V%2BL5myfkbm%2BsdvXYqAJFAK395w3w447qQFBjGHSbyNnN4X6iIhnTwBm9Z%2FUQeU5IYnEw%2BfE7gsL2werCZ02dUiUS9k5k1brPXF3IQhCbsFp3tyNLOq1sSxQKGQYAbcd70serfKVwiTF36Po&X-Amz-Signature=bb31047d6c5ca7ac75524eadcff3692278a2cb26e7f2f69604d950fdc48b8bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VY5ASCN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIAeyFYMKKKBBw0bUAQ8lHRNX%2Fcy3DvF1Af1M7odxrBszAiBzXnoAYcY1U0yEOFsDeJwrAiq8hFO5fBMMm2G%2BOUvbhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMMLD%2FUHC3JQLKN%2BQsKtwDWCH7mtFGR%2Bs9%2FZggzXcgxBZz6I6nQtUVR5CvRUSzZTscJRhgfy5VxKHSwxxem98gpy%2BdLoxowM2ffHuyFmbBjuqM5IxX7NSALAXhpnpYmP%2B7t2Npm4hnHVHmgFa5cr%2FuIltJHu50NyR6mSzYb2926rgHkEpPiRRtrJj3%2FJpQ2RWWVn83QDwt6lhb0iewnwZvO87%2Bs5ZpvKYuN%2BH0ohcd9kdApMBDnGobdcEUIgKxjki%2BfMkxImnrI92HsUCKdyoOzGtM7kZhJFHB4osMFhdiu0C41TDUvXy%2BX%2F%2BK8GD3cG1UL9l3DGT9CULzitZ0MEQsJTO9A3v7ApfYHXub38auoKq1RnX1DqTqCXryfnSMVRDF8%2BRjMYVEXjPwJNdkfZ219sfIoYDGR%2FRlNUk6ZyEnVr5HpmlzhPsjboOOwdt%2FlRsMCbNnVy7AVL2BTlqtNmNDaM6UzTvPYadUZnIdKBwRyVO9Ap0FYIO8YFjNpMiSp%2F%2BGQjQ1bv0NKjnkS1g%2BIC9vx6rcfJuW7UnWwlg%2BQTDitFowBNSPiMl6zWfRcIg7Qb1RPOFKF%2FToYh2uY8jJ07oNhXjttWHprvY4FdTq3k62G%2FrCilAGAKFj3CHfWaARab1JFuqUZ7f4CTJ4mmkw1LaRvQY6pgEFZQs71FZqT%2Bwdm17SRcPhKmK9qSP9AiKfBC2qraZc5R%2FKG2olK51HOG0WKD75MtcUaeJO5kVP%2Fr9y2V%2BL5myfkbm%2BsdvXYqAJFAK395w3w447qQFBjGHSbyNnN4X6iIhnTwBm9Z%2FUQeU5IYnEw%2BfE7gsL2werCZ02dUiUS9k5k1brPXF3IQhCbsFp3tyNLOq1sSxQKGQYAbcd70serfKVwiTF36Po&X-Amz-Signature=d1163d91f330e1cd22e0eea3f462646cd1286cc1b6ff7d1f8620a3aa4ce4d258&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VY5ASCN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIAeyFYMKKKBBw0bUAQ8lHRNX%2Fcy3DvF1Af1M7odxrBszAiBzXnoAYcY1U0yEOFsDeJwrAiq8hFO5fBMMm2G%2BOUvbhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMMLD%2FUHC3JQLKN%2BQsKtwDWCH7mtFGR%2Bs9%2FZggzXcgxBZz6I6nQtUVR5CvRUSzZTscJRhgfy5VxKHSwxxem98gpy%2BdLoxowM2ffHuyFmbBjuqM5IxX7NSALAXhpnpYmP%2B7t2Npm4hnHVHmgFa5cr%2FuIltJHu50NyR6mSzYb2926rgHkEpPiRRtrJj3%2FJpQ2RWWVn83QDwt6lhb0iewnwZvO87%2Bs5ZpvKYuN%2BH0ohcd9kdApMBDnGobdcEUIgKxjki%2BfMkxImnrI92HsUCKdyoOzGtM7kZhJFHB4osMFhdiu0C41TDUvXy%2BX%2F%2BK8GD3cG1UL9l3DGT9CULzitZ0MEQsJTO9A3v7ApfYHXub38auoKq1RnX1DqTqCXryfnSMVRDF8%2BRjMYVEXjPwJNdkfZ219sfIoYDGR%2FRlNUk6ZyEnVr5HpmlzhPsjboOOwdt%2FlRsMCbNnVy7AVL2BTlqtNmNDaM6UzTvPYadUZnIdKBwRyVO9Ap0FYIO8YFjNpMiSp%2F%2BGQjQ1bv0NKjnkS1g%2BIC9vx6rcfJuW7UnWwlg%2BQTDitFowBNSPiMl6zWfRcIg7Qb1RPOFKF%2FToYh2uY8jJ07oNhXjttWHprvY4FdTq3k62G%2FrCilAGAKFj3CHfWaARab1JFuqUZ7f4CTJ4mmkw1LaRvQY6pgEFZQs71FZqT%2Bwdm17SRcPhKmK9qSP9AiKfBC2qraZc5R%2FKG2olK51HOG0WKD75MtcUaeJO5kVP%2Fr9y2V%2BL5myfkbm%2BsdvXYqAJFAK395w3w447qQFBjGHSbyNnN4X6iIhnTwBm9Z%2FUQeU5IYnEw%2BfE7gsL2werCZ02dUiUS9k5k1brPXF3IQhCbsFp3tyNLOq1sSxQKGQYAbcd70serfKVwiTF36Po&X-Amz-Signature=ca98b0420764dc2e2104cf4516a0be631b59e16a2dc11c467c079ae22c74b624&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VY5ASCN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIAeyFYMKKKBBw0bUAQ8lHRNX%2Fcy3DvF1Af1M7odxrBszAiBzXnoAYcY1U0yEOFsDeJwrAiq8hFO5fBMMm2G%2BOUvbhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMMLD%2FUHC3JQLKN%2BQsKtwDWCH7mtFGR%2Bs9%2FZggzXcgxBZz6I6nQtUVR5CvRUSzZTscJRhgfy5VxKHSwxxem98gpy%2BdLoxowM2ffHuyFmbBjuqM5IxX7NSALAXhpnpYmP%2B7t2Npm4hnHVHmgFa5cr%2FuIltJHu50NyR6mSzYb2926rgHkEpPiRRtrJj3%2FJpQ2RWWVn83QDwt6lhb0iewnwZvO87%2Bs5ZpvKYuN%2BH0ohcd9kdApMBDnGobdcEUIgKxjki%2BfMkxImnrI92HsUCKdyoOzGtM7kZhJFHB4osMFhdiu0C41TDUvXy%2BX%2F%2BK8GD3cG1UL9l3DGT9CULzitZ0MEQsJTO9A3v7ApfYHXub38auoKq1RnX1DqTqCXryfnSMVRDF8%2BRjMYVEXjPwJNdkfZ219sfIoYDGR%2FRlNUk6ZyEnVr5HpmlzhPsjboOOwdt%2FlRsMCbNnVy7AVL2BTlqtNmNDaM6UzTvPYadUZnIdKBwRyVO9Ap0FYIO8YFjNpMiSp%2F%2BGQjQ1bv0NKjnkS1g%2BIC9vx6rcfJuW7UnWwlg%2BQTDitFowBNSPiMl6zWfRcIg7Qb1RPOFKF%2FToYh2uY8jJ07oNhXjttWHprvY4FdTq3k62G%2FrCilAGAKFj3CHfWaARab1JFuqUZ7f4CTJ4mmkw1LaRvQY6pgEFZQs71FZqT%2Bwdm17SRcPhKmK9qSP9AiKfBC2qraZc5R%2FKG2olK51HOG0WKD75MtcUaeJO5kVP%2Fr9y2V%2BL5myfkbm%2BsdvXYqAJFAK395w3w447qQFBjGHSbyNnN4X6iIhnTwBm9Z%2FUQeU5IYnEw%2BfE7gsL2werCZ02dUiUS9k5k1brPXF3IQhCbsFp3tyNLOq1sSxQKGQYAbcd70serfKVwiTF36Po&X-Amz-Signature=0326ad5adb1deb8239415fcd79667f746e717ef4d9e0efff3117111ddb34e2dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VY5ASCN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIAeyFYMKKKBBw0bUAQ8lHRNX%2Fcy3DvF1Af1M7odxrBszAiBzXnoAYcY1U0yEOFsDeJwrAiq8hFO5fBMMm2G%2BOUvbhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMMLD%2FUHC3JQLKN%2BQsKtwDWCH7mtFGR%2Bs9%2FZggzXcgxBZz6I6nQtUVR5CvRUSzZTscJRhgfy5VxKHSwxxem98gpy%2BdLoxowM2ffHuyFmbBjuqM5IxX7NSALAXhpnpYmP%2B7t2Npm4hnHVHmgFa5cr%2FuIltJHu50NyR6mSzYb2926rgHkEpPiRRtrJj3%2FJpQ2RWWVn83QDwt6lhb0iewnwZvO87%2Bs5ZpvKYuN%2BH0ohcd9kdApMBDnGobdcEUIgKxjki%2BfMkxImnrI92HsUCKdyoOzGtM7kZhJFHB4osMFhdiu0C41TDUvXy%2BX%2F%2BK8GD3cG1UL9l3DGT9CULzitZ0MEQsJTO9A3v7ApfYHXub38auoKq1RnX1DqTqCXryfnSMVRDF8%2BRjMYVEXjPwJNdkfZ219sfIoYDGR%2FRlNUk6ZyEnVr5HpmlzhPsjboOOwdt%2FlRsMCbNnVy7AVL2BTlqtNmNDaM6UzTvPYadUZnIdKBwRyVO9Ap0FYIO8YFjNpMiSp%2F%2BGQjQ1bv0NKjnkS1g%2BIC9vx6rcfJuW7UnWwlg%2BQTDitFowBNSPiMl6zWfRcIg7Qb1RPOFKF%2FToYh2uY8jJ07oNhXjttWHprvY4FdTq3k62G%2FrCilAGAKFj3CHfWaARab1JFuqUZ7f4CTJ4mmkw1LaRvQY6pgEFZQs71FZqT%2Bwdm17SRcPhKmK9qSP9AiKfBC2qraZc5R%2FKG2olK51HOG0WKD75MtcUaeJO5kVP%2Fr9y2V%2BL5myfkbm%2BsdvXYqAJFAK395w3w447qQFBjGHSbyNnN4X6iIhnTwBm9Z%2FUQeU5IYnEw%2BfE7gsL2werCZ02dUiUS9k5k1brPXF3IQhCbsFp3tyNLOq1sSxQKGQYAbcd70serfKVwiTF36Po&X-Amz-Signature=1c968454699a7147cecca80581245e753182b3aca2a34364a932e7a9e462b46e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VY5ASCN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIAeyFYMKKKBBw0bUAQ8lHRNX%2Fcy3DvF1Af1M7odxrBszAiBzXnoAYcY1U0yEOFsDeJwrAiq8hFO5fBMMm2G%2BOUvbhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMMLD%2FUHC3JQLKN%2BQsKtwDWCH7mtFGR%2Bs9%2FZggzXcgxBZz6I6nQtUVR5CvRUSzZTscJRhgfy5VxKHSwxxem98gpy%2BdLoxowM2ffHuyFmbBjuqM5IxX7NSALAXhpnpYmP%2B7t2Npm4hnHVHmgFa5cr%2FuIltJHu50NyR6mSzYb2926rgHkEpPiRRtrJj3%2FJpQ2RWWVn83QDwt6lhb0iewnwZvO87%2Bs5ZpvKYuN%2BH0ohcd9kdApMBDnGobdcEUIgKxjki%2BfMkxImnrI92HsUCKdyoOzGtM7kZhJFHB4osMFhdiu0C41TDUvXy%2BX%2F%2BK8GD3cG1UL9l3DGT9CULzitZ0MEQsJTO9A3v7ApfYHXub38auoKq1RnX1DqTqCXryfnSMVRDF8%2BRjMYVEXjPwJNdkfZ219sfIoYDGR%2FRlNUk6ZyEnVr5HpmlzhPsjboOOwdt%2FlRsMCbNnVy7AVL2BTlqtNmNDaM6UzTvPYadUZnIdKBwRyVO9Ap0FYIO8YFjNpMiSp%2F%2BGQjQ1bv0NKjnkS1g%2BIC9vx6rcfJuW7UnWwlg%2BQTDitFowBNSPiMl6zWfRcIg7Qb1RPOFKF%2FToYh2uY8jJ07oNhXjttWHprvY4FdTq3k62G%2FrCilAGAKFj3CHfWaARab1JFuqUZ7f4CTJ4mmkw1LaRvQY6pgEFZQs71FZqT%2Bwdm17SRcPhKmK9qSP9AiKfBC2qraZc5R%2FKG2olK51HOG0WKD75MtcUaeJO5kVP%2Fr9y2V%2BL5myfkbm%2BsdvXYqAJFAK395w3w447qQFBjGHSbyNnN4X6iIhnTwBm9Z%2FUQeU5IYnEw%2BfE7gsL2werCZ02dUiUS9k5k1brPXF3IQhCbsFp3tyNLOq1sSxQKGQYAbcd70serfKVwiTF36Po&X-Amz-Signature=f7ef4ee6d315d910b55c0e508fd69950b4fb21e79cf47b955d28258dc193190b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VY5ASCN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIAeyFYMKKKBBw0bUAQ8lHRNX%2Fcy3DvF1Af1M7odxrBszAiBzXnoAYcY1U0yEOFsDeJwrAiq8hFO5fBMMm2G%2BOUvbhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMMLD%2FUHC3JQLKN%2BQsKtwDWCH7mtFGR%2Bs9%2FZggzXcgxBZz6I6nQtUVR5CvRUSzZTscJRhgfy5VxKHSwxxem98gpy%2BdLoxowM2ffHuyFmbBjuqM5IxX7NSALAXhpnpYmP%2B7t2Npm4hnHVHmgFa5cr%2FuIltJHu50NyR6mSzYb2926rgHkEpPiRRtrJj3%2FJpQ2RWWVn83QDwt6lhb0iewnwZvO87%2Bs5ZpvKYuN%2BH0ohcd9kdApMBDnGobdcEUIgKxjki%2BfMkxImnrI92HsUCKdyoOzGtM7kZhJFHB4osMFhdiu0C41TDUvXy%2BX%2F%2BK8GD3cG1UL9l3DGT9CULzitZ0MEQsJTO9A3v7ApfYHXub38auoKq1RnX1DqTqCXryfnSMVRDF8%2BRjMYVEXjPwJNdkfZ219sfIoYDGR%2FRlNUk6ZyEnVr5HpmlzhPsjboOOwdt%2FlRsMCbNnVy7AVL2BTlqtNmNDaM6UzTvPYadUZnIdKBwRyVO9Ap0FYIO8YFjNpMiSp%2F%2BGQjQ1bv0NKjnkS1g%2BIC9vx6rcfJuW7UnWwlg%2BQTDitFowBNSPiMl6zWfRcIg7Qb1RPOFKF%2FToYh2uY8jJ07oNhXjttWHprvY4FdTq3k62G%2FrCilAGAKFj3CHfWaARab1JFuqUZ7f4CTJ4mmkw1LaRvQY6pgEFZQs71FZqT%2Bwdm17SRcPhKmK9qSP9AiKfBC2qraZc5R%2FKG2olK51HOG0WKD75MtcUaeJO5kVP%2Fr9y2V%2BL5myfkbm%2BsdvXYqAJFAK395w3w447qQFBjGHSbyNnN4X6iIhnTwBm9Z%2FUQeU5IYnEw%2BfE7gsL2werCZ02dUiUS9k5k1brPXF3IQhCbsFp3tyNLOq1sSxQKGQYAbcd70serfKVwiTF36Po&X-Amz-Signature=885bfd887b6011ca1e532c6e0dc9bdfa7716b7cd22c2088e1d28dc9fbf72f598&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VY5ASCN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIAeyFYMKKKBBw0bUAQ8lHRNX%2Fcy3DvF1Af1M7odxrBszAiBzXnoAYcY1U0yEOFsDeJwrAiq8hFO5fBMMm2G%2BOUvbhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMMLD%2FUHC3JQLKN%2BQsKtwDWCH7mtFGR%2Bs9%2FZggzXcgxBZz6I6nQtUVR5CvRUSzZTscJRhgfy5VxKHSwxxem98gpy%2BdLoxowM2ffHuyFmbBjuqM5IxX7NSALAXhpnpYmP%2B7t2Npm4hnHVHmgFa5cr%2FuIltJHu50NyR6mSzYb2926rgHkEpPiRRtrJj3%2FJpQ2RWWVn83QDwt6lhb0iewnwZvO87%2Bs5ZpvKYuN%2BH0ohcd9kdApMBDnGobdcEUIgKxjki%2BfMkxImnrI92HsUCKdyoOzGtM7kZhJFHB4osMFhdiu0C41TDUvXy%2BX%2F%2BK8GD3cG1UL9l3DGT9CULzitZ0MEQsJTO9A3v7ApfYHXub38auoKq1RnX1DqTqCXryfnSMVRDF8%2BRjMYVEXjPwJNdkfZ219sfIoYDGR%2FRlNUk6ZyEnVr5HpmlzhPsjboOOwdt%2FlRsMCbNnVy7AVL2BTlqtNmNDaM6UzTvPYadUZnIdKBwRyVO9Ap0FYIO8YFjNpMiSp%2F%2BGQjQ1bv0NKjnkS1g%2BIC9vx6rcfJuW7UnWwlg%2BQTDitFowBNSPiMl6zWfRcIg7Qb1RPOFKF%2FToYh2uY8jJ07oNhXjttWHprvY4FdTq3k62G%2FrCilAGAKFj3CHfWaARab1JFuqUZ7f4CTJ4mmkw1LaRvQY6pgEFZQs71FZqT%2Bwdm17SRcPhKmK9qSP9AiKfBC2qraZc5R%2FKG2olK51HOG0WKD75MtcUaeJO5kVP%2Fr9y2V%2BL5myfkbm%2BsdvXYqAJFAK395w3w447qQFBjGHSbyNnN4X6iIhnTwBm9Z%2FUQeU5IYnEw%2BfE7gsL2werCZ02dUiUS9k5k1brPXF3IQhCbsFp3tyNLOq1sSxQKGQYAbcd70serfKVwiTF36Po&X-Amz-Signature=09067d97b3a8764813e2f78bdb0b9730f11e71567d56a162669f90beefdbaa41&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
