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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4PUXFI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIF2dxOHminuy%2BD8WXvDe%2BS%2BUdJJGR8w31JLNtJD7VVhVAiBlskfqg2UY1nUHmFyqER%2FEOdhpr3HRtmz3IM9SbQBY9yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMR3PgzkxXHi2m16zDKtwDqAdJqMqAdLtNxQnKbHXHmVUYWeZkNdVZ2BgSS3rLBG%2Ftkkg9QRFq4mqgLFoMpywgx5Xix5YgKBbVWPbb74daR0Ag8PfAtVhR6XIbqAiPRWHC2oDRGP3A4SrPmvdrb81xhwvMpg0QMAlYp5cjQeaTcmOUkwOry3tJxmI%2BgNnHB3K9UAmCSiuBzXlWiqK%2BcNCeIeJglCTavGjDICoCDQzCGws0bVpXvYUQs5GgR9Fcmp2UJuXMcUriloxC9dpCE1xmfKwZn7U2fMU0bHatlBdCqeL%2Boa3%2BYMf4%2FQWiuo3hSOiNxR%2FhZeMKWXOPN4w4g%2BREo6ELGtDNpTfSiAmA6VaHZSjPdpqnczXIa5hGBFk2wK8rkOpgUijYKYFNGbenAWEuhJdhOxbJuJ0JTQZkIAkHNixd4MzlJeXpMJwGqD3p3AhglQ6iOpqmrslxoIm7lFpPLe7e0x%2F%2BJj0Uv4qYD%2F4cFEO2DT4panDqngK2JnPhr%2F9E8tmf1mZ3r5byw4xOobEILw2vaD6qkP78LG4phRvYhZQCyvaBQc8TPpc4XPQOKtsE31annQT5PXKMyYyHkjYsWDugF4CfL5HWp5Tz7yn2eZEvdnTavtxV808wI9QPHpqWZezatLe6VT7auuEwjbmUvQY6pgE%2BzPN80WDnwHWZJyztkg%2BW1ZAln0Ss4Z7Gw0jgklOWfBPjDlJ8Pk%2BuWzUE0KMSU4He4iMYkVFcC3a37h5qC3bBRTAMBz1AytvvQOltmxJ4jbOyLliMu27WPRCFRpa7fRT0BQUevxzs2cmpImrUUp4LuLnPXwcWNByg59NbThk7Jc0mUmrsXRqRYMEOPP%2BIK7dYjzWxNUM2bn1JP%2FcLCTa3NuiqXg4r&X-Amz-Signature=0883b2b838e647ca77c690a9788c0b63eb84836887a462652819701b75047460&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4PUXFI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIF2dxOHminuy%2BD8WXvDe%2BS%2BUdJJGR8w31JLNtJD7VVhVAiBlskfqg2UY1nUHmFyqER%2FEOdhpr3HRtmz3IM9SbQBY9yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMR3PgzkxXHi2m16zDKtwDqAdJqMqAdLtNxQnKbHXHmVUYWeZkNdVZ2BgSS3rLBG%2Ftkkg9QRFq4mqgLFoMpywgx5Xix5YgKBbVWPbb74daR0Ag8PfAtVhR6XIbqAiPRWHC2oDRGP3A4SrPmvdrb81xhwvMpg0QMAlYp5cjQeaTcmOUkwOry3tJxmI%2BgNnHB3K9UAmCSiuBzXlWiqK%2BcNCeIeJglCTavGjDICoCDQzCGws0bVpXvYUQs5GgR9Fcmp2UJuXMcUriloxC9dpCE1xmfKwZn7U2fMU0bHatlBdCqeL%2Boa3%2BYMf4%2FQWiuo3hSOiNxR%2FhZeMKWXOPN4w4g%2BREo6ELGtDNpTfSiAmA6VaHZSjPdpqnczXIa5hGBFk2wK8rkOpgUijYKYFNGbenAWEuhJdhOxbJuJ0JTQZkIAkHNixd4MzlJeXpMJwGqD3p3AhglQ6iOpqmrslxoIm7lFpPLe7e0x%2F%2BJj0Uv4qYD%2F4cFEO2DT4panDqngK2JnPhr%2F9E8tmf1mZ3r5byw4xOobEILw2vaD6qkP78LG4phRvYhZQCyvaBQc8TPpc4XPQOKtsE31annQT5PXKMyYyHkjYsWDugF4CfL5HWp5Tz7yn2eZEvdnTavtxV808wI9QPHpqWZezatLe6VT7auuEwjbmUvQY6pgE%2BzPN80WDnwHWZJyztkg%2BW1ZAln0Ss4Z7Gw0jgklOWfBPjDlJ8Pk%2BuWzUE0KMSU4He4iMYkVFcC3a37h5qC3bBRTAMBz1AytvvQOltmxJ4jbOyLliMu27WPRCFRpa7fRT0BQUevxzs2cmpImrUUp4LuLnPXwcWNByg59NbThk7Jc0mUmrsXRqRYMEOPP%2BIK7dYjzWxNUM2bn1JP%2FcLCTa3NuiqXg4r&X-Amz-Signature=ccfc4d95438e2e181029ef0745de5f0d4b816c17b13c243749e3edfe92d259e1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4PUXFI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIF2dxOHminuy%2BD8WXvDe%2BS%2BUdJJGR8w31JLNtJD7VVhVAiBlskfqg2UY1nUHmFyqER%2FEOdhpr3HRtmz3IM9SbQBY9yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMR3PgzkxXHi2m16zDKtwDqAdJqMqAdLtNxQnKbHXHmVUYWeZkNdVZ2BgSS3rLBG%2Ftkkg9QRFq4mqgLFoMpywgx5Xix5YgKBbVWPbb74daR0Ag8PfAtVhR6XIbqAiPRWHC2oDRGP3A4SrPmvdrb81xhwvMpg0QMAlYp5cjQeaTcmOUkwOry3tJxmI%2BgNnHB3K9UAmCSiuBzXlWiqK%2BcNCeIeJglCTavGjDICoCDQzCGws0bVpXvYUQs5GgR9Fcmp2UJuXMcUriloxC9dpCE1xmfKwZn7U2fMU0bHatlBdCqeL%2Boa3%2BYMf4%2FQWiuo3hSOiNxR%2FhZeMKWXOPN4w4g%2BREo6ELGtDNpTfSiAmA6VaHZSjPdpqnczXIa5hGBFk2wK8rkOpgUijYKYFNGbenAWEuhJdhOxbJuJ0JTQZkIAkHNixd4MzlJeXpMJwGqD3p3AhglQ6iOpqmrslxoIm7lFpPLe7e0x%2F%2BJj0Uv4qYD%2F4cFEO2DT4panDqngK2JnPhr%2F9E8tmf1mZ3r5byw4xOobEILw2vaD6qkP78LG4phRvYhZQCyvaBQc8TPpc4XPQOKtsE31annQT5PXKMyYyHkjYsWDugF4CfL5HWp5Tz7yn2eZEvdnTavtxV808wI9QPHpqWZezatLe6VT7auuEwjbmUvQY6pgE%2BzPN80WDnwHWZJyztkg%2BW1ZAln0Ss4Z7Gw0jgklOWfBPjDlJ8Pk%2BuWzUE0KMSU4He4iMYkVFcC3a37h5qC3bBRTAMBz1AytvvQOltmxJ4jbOyLliMu27WPRCFRpa7fRT0BQUevxzs2cmpImrUUp4LuLnPXwcWNByg59NbThk7Jc0mUmrsXRqRYMEOPP%2BIK7dYjzWxNUM2bn1JP%2FcLCTa3NuiqXg4r&X-Amz-Signature=c58f96ce2c79987c6e376709c91e70df4508c3c94551c1b0c735a9fd405c7d74&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4PUXFI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIF2dxOHminuy%2BD8WXvDe%2BS%2BUdJJGR8w31JLNtJD7VVhVAiBlskfqg2UY1nUHmFyqER%2FEOdhpr3HRtmz3IM9SbQBY9yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMR3PgzkxXHi2m16zDKtwDqAdJqMqAdLtNxQnKbHXHmVUYWeZkNdVZ2BgSS3rLBG%2Ftkkg9QRFq4mqgLFoMpywgx5Xix5YgKBbVWPbb74daR0Ag8PfAtVhR6XIbqAiPRWHC2oDRGP3A4SrPmvdrb81xhwvMpg0QMAlYp5cjQeaTcmOUkwOry3tJxmI%2BgNnHB3K9UAmCSiuBzXlWiqK%2BcNCeIeJglCTavGjDICoCDQzCGws0bVpXvYUQs5GgR9Fcmp2UJuXMcUriloxC9dpCE1xmfKwZn7U2fMU0bHatlBdCqeL%2Boa3%2BYMf4%2FQWiuo3hSOiNxR%2FhZeMKWXOPN4w4g%2BREo6ELGtDNpTfSiAmA6VaHZSjPdpqnczXIa5hGBFk2wK8rkOpgUijYKYFNGbenAWEuhJdhOxbJuJ0JTQZkIAkHNixd4MzlJeXpMJwGqD3p3AhglQ6iOpqmrslxoIm7lFpPLe7e0x%2F%2BJj0Uv4qYD%2F4cFEO2DT4panDqngK2JnPhr%2F9E8tmf1mZ3r5byw4xOobEILw2vaD6qkP78LG4phRvYhZQCyvaBQc8TPpc4XPQOKtsE31annQT5PXKMyYyHkjYsWDugF4CfL5HWp5Tz7yn2eZEvdnTavtxV808wI9QPHpqWZezatLe6VT7auuEwjbmUvQY6pgE%2BzPN80WDnwHWZJyztkg%2BW1ZAln0Ss4Z7Gw0jgklOWfBPjDlJ8Pk%2BuWzUE0KMSU4He4iMYkVFcC3a37h5qC3bBRTAMBz1AytvvQOltmxJ4jbOyLliMu27WPRCFRpa7fRT0BQUevxzs2cmpImrUUp4LuLnPXwcWNByg59NbThk7Jc0mUmrsXRqRYMEOPP%2BIK7dYjzWxNUM2bn1JP%2FcLCTa3NuiqXg4r&X-Amz-Signature=a3271b004745b238c45c313143715f0ca9817a7fcbae6a6020709836b2a3edce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4PUXFI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIF2dxOHminuy%2BD8WXvDe%2BS%2BUdJJGR8w31JLNtJD7VVhVAiBlskfqg2UY1nUHmFyqER%2FEOdhpr3HRtmz3IM9SbQBY9yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMR3PgzkxXHi2m16zDKtwDqAdJqMqAdLtNxQnKbHXHmVUYWeZkNdVZ2BgSS3rLBG%2Ftkkg9QRFq4mqgLFoMpywgx5Xix5YgKBbVWPbb74daR0Ag8PfAtVhR6XIbqAiPRWHC2oDRGP3A4SrPmvdrb81xhwvMpg0QMAlYp5cjQeaTcmOUkwOry3tJxmI%2BgNnHB3K9UAmCSiuBzXlWiqK%2BcNCeIeJglCTavGjDICoCDQzCGws0bVpXvYUQs5GgR9Fcmp2UJuXMcUriloxC9dpCE1xmfKwZn7U2fMU0bHatlBdCqeL%2Boa3%2BYMf4%2FQWiuo3hSOiNxR%2FhZeMKWXOPN4w4g%2BREo6ELGtDNpTfSiAmA6VaHZSjPdpqnczXIa5hGBFk2wK8rkOpgUijYKYFNGbenAWEuhJdhOxbJuJ0JTQZkIAkHNixd4MzlJeXpMJwGqD3p3AhglQ6iOpqmrslxoIm7lFpPLe7e0x%2F%2BJj0Uv4qYD%2F4cFEO2DT4panDqngK2JnPhr%2F9E8tmf1mZ3r5byw4xOobEILw2vaD6qkP78LG4phRvYhZQCyvaBQc8TPpc4XPQOKtsE31annQT5PXKMyYyHkjYsWDugF4CfL5HWp5Tz7yn2eZEvdnTavtxV808wI9QPHpqWZezatLe6VT7auuEwjbmUvQY6pgE%2BzPN80WDnwHWZJyztkg%2BW1ZAln0Ss4Z7Gw0jgklOWfBPjDlJ8Pk%2BuWzUE0KMSU4He4iMYkVFcC3a37h5qC3bBRTAMBz1AytvvQOltmxJ4jbOyLliMu27WPRCFRpa7fRT0BQUevxzs2cmpImrUUp4LuLnPXwcWNByg59NbThk7Jc0mUmrsXRqRYMEOPP%2BIK7dYjzWxNUM2bn1JP%2FcLCTa3NuiqXg4r&X-Amz-Signature=695b0104d57383a07fab14989ffce7eaf234e316f1251ff4a12e2a238b3626b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4PUXFI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIF2dxOHminuy%2BD8WXvDe%2BS%2BUdJJGR8w31JLNtJD7VVhVAiBlskfqg2UY1nUHmFyqER%2FEOdhpr3HRtmz3IM9SbQBY9yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMR3PgzkxXHi2m16zDKtwDqAdJqMqAdLtNxQnKbHXHmVUYWeZkNdVZ2BgSS3rLBG%2Ftkkg9QRFq4mqgLFoMpywgx5Xix5YgKBbVWPbb74daR0Ag8PfAtVhR6XIbqAiPRWHC2oDRGP3A4SrPmvdrb81xhwvMpg0QMAlYp5cjQeaTcmOUkwOry3tJxmI%2BgNnHB3K9UAmCSiuBzXlWiqK%2BcNCeIeJglCTavGjDICoCDQzCGws0bVpXvYUQs5GgR9Fcmp2UJuXMcUriloxC9dpCE1xmfKwZn7U2fMU0bHatlBdCqeL%2Boa3%2BYMf4%2FQWiuo3hSOiNxR%2FhZeMKWXOPN4w4g%2BREo6ELGtDNpTfSiAmA6VaHZSjPdpqnczXIa5hGBFk2wK8rkOpgUijYKYFNGbenAWEuhJdhOxbJuJ0JTQZkIAkHNixd4MzlJeXpMJwGqD3p3AhglQ6iOpqmrslxoIm7lFpPLe7e0x%2F%2BJj0Uv4qYD%2F4cFEO2DT4panDqngK2JnPhr%2F9E8tmf1mZ3r5byw4xOobEILw2vaD6qkP78LG4phRvYhZQCyvaBQc8TPpc4XPQOKtsE31annQT5PXKMyYyHkjYsWDugF4CfL5HWp5Tz7yn2eZEvdnTavtxV808wI9QPHpqWZezatLe6VT7auuEwjbmUvQY6pgE%2BzPN80WDnwHWZJyztkg%2BW1ZAln0Ss4Z7Gw0jgklOWfBPjDlJ8Pk%2BuWzUE0KMSU4He4iMYkVFcC3a37h5qC3bBRTAMBz1AytvvQOltmxJ4jbOyLliMu27WPRCFRpa7fRT0BQUevxzs2cmpImrUUp4LuLnPXwcWNByg59NbThk7Jc0mUmrsXRqRYMEOPP%2BIK7dYjzWxNUM2bn1JP%2FcLCTa3NuiqXg4r&X-Amz-Signature=e8bba99a674fe33646836f51c95449e56dcbd21e0c2efa9a44eb1ef12cb02585&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4PUXFI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIF2dxOHminuy%2BD8WXvDe%2BS%2BUdJJGR8w31JLNtJD7VVhVAiBlskfqg2UY1nUHmFyqER%2FEOdhpr3HRtmz3IM9SbQBY9yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMR3PgzkxXHi2m16zDKtwDqAdJqMqAdLtNxQnKbHXHmVUYWeZkNdVZ2BgSS3rLBG%2Ftkkg9QRFq4mqgLFoMpywgx5Xix5YgKBbVWPbb74daR0Ag8PfAtVhR6XIbqAiPRWHC2oDRGP3A4SrPmvdrb81xhwvMpg0QMAlYp5cjQeaTcmOUkwOry3tJxmI%2BgNnHB3K9UAmCSiuBzXlWiqK%2BcNCeIeJglCTavGjDICoCDQzCGws0bVpXvYUQs5GgR9Fcmp2UJuXMcUriloxC9dpCE1xmfKwZn7U2fMU0bHatlBdCqeL%2Boa3%2BYMf4%2FQWiuo3hSOiNxR%2FhZeMKWXOPN4w4g%2BREo6ELGtDNpTfSiAmA6VaHZSjPdpqnczXIa5hGBFk2wK8rkOpgUijYKYFNGbenAWEuhJdhOxbJuJ0JTQZkIAkHNixd4MzlJeXpMJwGqD3p3AhglQ6iOpqmrslxoIm7lFpPLe7e0x%2F%2BJj0Uv4qYD%2F4cFEO2DT4panDqngK2JnPhr%2F9E8tmf1mZ3r5byw4xOobEILw2vaD6qkP78LG4phRvYhZQCyvaBQc8TPpc4XPQOKtsE31annQT5PXKMyYyHkjYsWDugF4CfL5HWp5Tz7yn2eZEvdnTavtxV808wI9QPHpqWZezatLe6VT7auuEwjbmUvQY6pgE%2BzPN80WDnwHWZJyztkg%2BW1ZAln0Ss4Z7Gw0jgklOWfBPjDlJ8Pk%2BuWzUE0KMSU4He4iMYkVFcC3a37h5qC3bBRTAMBz1AytvvQOltmxJ4jbOyLliMu27WPRCFRpa7fRT0BQUevxzs2cmpImrUUp4LuLnPXwcWNByg59NbThk7Jc0mUmrsXRqRYMEOPP%2BIK7dYjzWxNUM2bn1JP%2FcLCTa3NuiqXg4r&X-Amz-Signature=a2cc0c1db301933247047878e5ffbe50942bdc2fca2cceefb9a2966cddd4d5da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4PUXFI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIF2dxOHminuy%2BD8WXvDe%2BS%2BUdJJGR8w31JLNtJD7VVhVAiBlskfqg2UY1nUHmFyqER%2FEOdhpr3HRtmz3IM9SbQBY9yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMR3PgzkxXHi2m16zDKtwDqAdJqMqAdLtNxQnKbHXHmVUYWeZkNdVZ2BgSS3rLBG%2Ftkkg9QRFq4mqgLFoMpywgx5Xix5YgKBbVWPbb74daR0Ag8PfAtVhR6XIbqAiPRWHC2oDRGP3A4SrPmvdrb81xhwvMpg0QMAlYp5cjQeaTcmOUkwOry3tJxmI%2BgNnHB3K9UAmCSiuBzXlWiqK%2BcNCeIeJglCTavGjDICoCDQzCGws0bVpXvYUQs5GgR9Fcmp2UJuXMcUriloxC9dpCE1xmfKwZn7U2fMU0bHatlBdCqeL%2Boa3%2BYMf4%2FQWiuo3hSOiNxR%2FhZeMKWXOPN4w4g%2BREo6ELGtDNpTfSiAmA6VaHZSjPdpqnczXIa5hGBFk2wK8rkOpgUijYKYFNGbenAWEuhJdhOxbJuJ0JTQZkIAkHNixd4MzlJeXpMJwGqD3p3AhglQ6iOpqmrslxoIm7lFpPLe7e0x%2F%2BJj0Uv4qYD%2F4cFEO2DT4panDqngK2JnPhr%2F9E8tmf1mZ3r5byw4xOobEILw2vaD6qkP78LG4phRvYhZQCyvaBQc8TPpc4XPQOKtsE31annQT5PXKMyYyHkjYsWDugF4CfL5HWp5Tz7yn2eZEvdnTavtxV808wI9QPHpqWZezatLe6VT7auuEwjbmUvQY6pgE%2BzPN80WDnwHWZJyztkg%2BW1ZAln0Ss4Z7Gw0jgklOWfBPjDlJ8Pk%2BuWzUE0KMSU4He4iMYkVFcC3a37h5qC3bBRTAMBz1AytvvQOltmxJ4jbOyLliMu27WPRCFRpa7fRT0BQUevxzs2cmpImrUUp4LuLnPXwcWNByg59NbThk7Jc0mUmrsXRqRYMEOPP%2BIK7dYjzWxNUM2bn1JP%2FcLCTa3NuiqXg4r&X-Amz-Signature=3eb2c656ab3657e7360e5d8e374b8f115b2a417eed2f4bb4a269d2e210b14e93&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
