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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AP5VSG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDKAjZVWL54CbSZ1NDJw79ZFT%2BCHbdkS6biDmHoHiQhBgIhAPjVJzpOkIiOSke8AjBaKLEukIE0WOxzYAalFc28fGenKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztatpuymOvsYjzbKgq3ANzhHs98fJQMZ76kKDz6N%2FFqDMo4ZAH7OzY862MMKDo40ZJK33jJdnrgznxCEtusFqYHKeeoGskmJ76%2FCYBlQ%2BYE6%2BT5%2FBfErA%2FBl6IFdcd7IdPXIL6iJ1cdi60QT%2BXu513pPBGJ5T8%2FQIHynH5mTrW4kc03VQ9bdXbubL6t5zjwhHA1vNTCNdfXz4SNfA3u%2Bi7lz6H4KeG9%2FqRKQ%2BUMROO6Ukg5Wi66qQqSXJpNc36sCemUVZbV61ePch78CtB6DzALauGID6YxyrUuoxOuzEZBfhnwaMaD%2BzsnQ8aQqW8kK%2FI532lk%2BYDO3JEv2RBUy3GDyUu7bYaC1oWlL%2BamVoXxwEYvYOoYb2GHF6F0jmAy9x8Q4OKNDQAN9czZJLc%2FnsbGbEJK18%2B0vDIbRhJ1V6R2Je4uL1BA4QEA%2F6o%2FUmnAoWfeF%2FDjLRVgdOyiHjM1Hi2xGHMd0yDMf2WaMDXPDprqfx2Gnmb%2BDwv7bciXN5jN53ic1qIj0rQrB8kDdODQbBRU7VuczGmve6XI%2FudexxpITyvBincnB0Rv2MbzmzgR2ZBMR3OzxWTaMD0SygQ0DEa6Au0rw74xfIwOR7cE%2BNeyND0vJZmqS7OIC7FnCK6JtSD%2BbMxGbTz%2B9ByczD%2B4v2%2BBjqkAQIkTxmUKSn93LT%2Fug08rPo4XE5Bop5uUtFXACoYd5RFmwzIwwrLnMoo6MRCJHroj8ExiTRLLnDjkBa0jWwWMwsVTiqQkJK7F9MCAdx%2FoZTdQObWCM1qPX0f777Jpxl8Pl%2FkqMV0oB%2BFAnEGLkRoz3GjoWKxrFoaDL1luen3DQU88K4wwR1Zgfd7F3DiINoqBFJ9n3tluMfGKbs9JJmuTq9xnCKJ&X-Amz-Signature=6a4f18327d24f61fad54571d7d8e797dfa6d7af096dc91d84f57593c74ddddf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AP5VSG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDKAjZVWL54CbSZ1NDJw79ZFT%2BCHbdkS6biDmHoHiQhBgIhAPjVJzpOkIiOSke8AjBaKLEukIE0WOxzYAalFc28fGenKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztatpuymOvsYjzbKgq3ANzhHs98fJQMZ76kKDz6N%2FFqDMo4ZAH7OzY862MMKDo40ZJK33jJdnrgznxCEtusFqYHKeeoGskmJ76%2FCYBlQ%2BYE6%2BT5%2FBfErA%2FBl6IFdcd7IdPXIL6iJ1cdi60QT%2BXu513pPBGJ5T8%2FQIHynH5mTrW4kc03VQ9bdXbubL6t5zjwhHA1vNTCNdfXz4SNfA3u%2Bi7lz6H4KeG9%2FqRKQ%2BUMROO6Ukg5Wi66qQqSXJpNc36sCemUVZbV61ePch78CtB6DzALauGID6YxyrUuoxOuzEZBfhnwaMaD%2BzsnQ8aQqW8kK%2FI532lk%2BYDO3JEv2RBUy3GDyUu7bYaC1oWlL%2BamVoXxwEYvYOoYb2GHF6F0jmAy9x8Q4OKNDQAN9czZJLc%2FnsbGbEJK18%2B0vDIbRhJ1V6R2Je4uL1BA4QEA%2F6o%2FUmnAoWfeF%2FDjLRVgdOyiHjM1Hi2xGHMd0yDMf2WaMDXPDprqfx2Gnmb%2BDwv7bciXN5jN53ic1qIj0rQrB8kDdODQbBRU7VuczGmve6XI%2FudexxpITyvBincnB0Rv2MbzmzgR2ZBMR3OzxWTaMD0SygQ0DEa6Au0rw74xfIwOR7cE%2BNeyND0vJZmqS7OIC7FnCK6JtSD%2BbMxGbTz%2B9ByczD%2B4v2%2BBjqkAQIkTxmUKSn93LT%2Fug08rPo4XE5Bop5uUtFXACoYd5RFmwzIwwrLnMoo6MRCJHroj8ExiTRLLnDjkBa0jWwWMwsVTiqQkJK7F9MCAdx%2FoZTdQObWCM1qPX0f777Jpxl8Pl%2FkqMV0oB%2BFAnEGLkRoz3GjoWKxrFoaDL1luen3DQU88K4wwR1Zgfd7F3DiINoqBFJ9n3tluMfGKbs9JJmuTq9xnCKJ&X-Amz-Signature=1d1ddcfd528f16b89845e53a67317576a216a2c76ea92fe6db2abdd9bec66d88&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AP5VSG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDKAjZVWL54CbSZ1NDJw79ZFT%2BCHbdkS6biDmHoHiQhBgIhAPjVJzpOkIiOSke8AjBaKLEukIE0WOxzYAalFc28fGenKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztatpuymOvsYjzbKgq3ANzhHs98fJQMZ76kKDz6N%2FFqDMo4ZAH7OzY862MMKDo40ZJK33jJdnrgznxCEtusFqYHKeeoGskmJ76%2FCYBlQ%2BYE6%2BT5%2FBfErA%2FBl6IFdcd7IdPXIL6iJ1cdi60QT%2BXu513pPBGJ5T8%2FQIHynH5mTrW4kc03VQ9bdXbubL6t5zjwhHA1vNTCNdfXz4SNfA3u%2Bi7lz6H4KeG9%2FqRKQ%2BUMROO6Ukg5Wi66qQqSXJpNc36sCemUVZbV61ePch78CtB6DzALauGID6YxyrUuoxOuzEZBfhnwaMaD%2BzsnQ8aQqW8kK%2FI532lk%2BYDO3JEv2RBUy3GDyUu7bYaC1oWlL%2BamVoXxwEYvYOoYb2GHF6F0jmAy9x8Q4OKNDQAN9czZJLc%2FnsbGbEJK18%2B0vDIbRhJ1V6R2Je4uL1BA4QEA%2F6o%2FUmnAoWfeF%2FDjLRVgdOyiHjM1Hi2xGHMd0yDMf2WaMDXPDprqfx2Gnmb%2BDwv7bciXN5jN53ic1qIj0rQrB8kDdODQbBRU7VuczGmve6XI%2FudexxpITyvBincnB0Rv2MbzmzgR2ZBMR3OzxWTaMD0SygQ0DEa6Au0rw74xfIwOR7cE%2BNeyND0vJZmqS7OIC7FnCK6JtSD%2BbMxGbTz%2B9ByczD%2B4v2%2BBjqkAQIkTxmUKSn93LT%2Fug08rPo4XE5Bop5uUtFXACoYd5RFmwzIwwrLnMoo6MRCJHroj8ExiTRLLnDjkBa0jWwWMwsVTiqQkJK7F9MCAdx%2FoZTdQObWCM1qPX0f777Jpxl8Pl%2FkqMV0oB%2BFAnEGLkRoz3GjoWKxrFoaDL1luen3DQU88K4wwR1Zgfd7F3DiINoqBFJ9n3tluMfGKbs9JJmuTq9xnCKJ&X-Amz-Signature=ac8eb6d9104bf2ac38a04254d04fd6e93c42648377d00af2552cfad9a00d985c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AP5VSG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDKAjZVWL54CbSZ1NDJw79ZFT%2BCHbdkS6biDmHoHiQhBgIhAPjVJzpOkIiOSke8AjBaKLEukIE0WOxzYAalFc28fGenKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztatpuymOvsYjzbKgq3ANzhHs98fJQMZ76kKDz6N%2FFqDMo4ZAH7OzY862MMKDo40ZJK33jJdnrgznxCEtusFqYHKeeoGskmJ76%2FCYBlQ%2BYE6%2BT5%2FBfErA%2FBl6IFdcd7IdPXIL6iJ1cdi60QT%2BXu513pPBGJ5T8%2FQIHynH5mTrW4kc03VQ9bdXbubL6t5zjwhHA1vNTCNdfXz4SNfA3u%2Bi7lz6H4KeG9%2FqRKQ%2BUMROO6Ukg5Wi66qQqSXJpNc36sCemUVZbV61ePch78CtB6DzALauGID6YxyrUuoxOuzEZBfhnwaMaD%2BzsnQ8aQqW8kK%2FI532lk%2BYDO3JEv2RBUy3GDyUu7bYaC1oWlL%2BamVoXxwEYvYOoYb2GHF6F0jmAy9x8Q4OKNDQAN9czZJLc%2FnsbGbEJK18%2B0vDIbRhJ1V6R2Je4uL1BA4QEA%2F6o%2FUmnAoWfeF%2FDjLRVgdOyiHjM1Hi2xGHMd0yDMf2WaMDXPDprqfx2Gnmb%2BDwv7bciXN5jN53ic1qIj0rQrB8kDdODQbBRU7VuczGmve6XI%2FudexxpITyvBincnB0Rv2MbzmzgR2ZBMR3OzxWTaMD0SygQ0DEa6Au0rw74xfIwOR7cE%2BNeyND0vJZmqS7OIC7FnCK6JtSD%2BbMxGbTz%2B9ByczD%2B4v2%2BBjqkAQIkTxmUKSn93LT%2Fug08rPo4XE5Bop5uUtFXACoYd5RFmwzIwwrLnMoo6MRCJHroj8ExiTRLLnDjkBa0jWwWMwsVTiqQkJK7F9MCAdx%2FoZTdQObWCM1qPX0f777Jpxl8Pl%2FkqMV0oB%2BFAnEGLkRoz3GjoWKxrFoaDL1luen3DQU88K4wwR1Zgfd7F3DiINoqBFJ9n3tluMfGKbs9JJmuTq9xnCKJ&X-Amz-Signature=c6541e91299556e02d89d2deba15be0e5979f589e63f82de87cd0b5b39f3b9cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AP5VSG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDKAjZVWL54CbSZ1NDJw79ZFT%2BCHbdkS6biDmHoHiQhBgIhAPjVJzpOkIiOSke8AjBaKLEukIE0WOxzYAalFc28fGenKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztatpuymOvsYjzbKgq3ANzhHs98fJQMZ76kKDz6N%2FFqDMo4ZAH7OzY862MMKDo40ZJK33jJdnrgznxCEtusFqYHKeeoGskmJ76%2FCYBlQ%2BYE6%2BT5%2FBfErA%2FBl6IFdcd7IdPXIL6iJ1cdi60QT%2BXu513pPBGJ5T8%2FQIHynH5mTrW4kc03VQ9bdXbubL6t5zjwhHA1vNTCNdfXz4SNfA3u%2Bi7lz6H4KeG9%2FqRKQ%2BUMROO6Ukg5Wi66qQqSXJpNc36sCemUVZbV61ePch78CtB6DzALauGID6YxyrUuoxOuzEZBfhnwaMaD%2BzsnQ8aQqW8kK%2FI532lk%2BYDO3JEv2RBUy3GDyUu7bYaC1oWlL%2BamVoXxwEYvYOoYb2GHF6F0jmAy9x8Q4OKNDQAN9czZJLc%2FnsbGbEJK18%2B0vDIbRhJ1V6R2Je4uL1BA4QEA%2F6o%2FUmnAoWfeF%2FDjLRVgdOyiHjM1Hi2xGHMd0yDMf2WaMDXPDprqfx2Gnmb%2BDwv7bciXN5jN53ic1qIj0rQrB8kDdODQbBRU7VuczGmve6XI%2FudexxpITyvBincnB0Rv2MbzmzgR2ZBMR3OzxWTaMD0SygQ0DEa6Au0rw74xfIwOR7cE%2BNeyND0vJZmqS7OIC7FnCK6JtSD%2BbMxGbTz%2B9ByczD%2B4v2%2BBjqkAQIkTxmUKSn93LT%2Fug08rPo4XE5Bop5uUtFXACoYd5RFmwzIwwrLnMoo6MRCJHroj8ExiTRLLnDjkBa0jWwWMwsVTiqQkJK7F9MCAdx%2FoZTdQObWCM1qPX0f777Jpxl8Pl%2FkqMV0oB%2BFAnEGLkRoz3GjoWKxrFoaDL1luen3DQU88K4wwR1Zgfd7F3DiINoqBFJ9n3tluMfGKbs9JJmuTq9xnCKJ&X-Amz-Signature=99cabdc889181bcae698264abea550caa875305cd3270d7c2ff1710aca6b849d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AP5VSG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDKAjZVWL54CbSZ1NDJw79ZFT%2BCHbdkS6biDmHoHiQhBgIhAPjVJzpOkIiOSke8AjBaKLEukIE0WOxzYAalFc28fGenKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztatpuymOvsYjzbKgq3ANzhHs98fJQMZ76kKDz6N%2FFqDMo4ZAH7OzY862MMKDo40ZJK33jJdnrgznxCEtusFqYHKeeoGskmJ76%2FCYBlQ%2BYE6%2BT5%2FBfErA%2FBl6IFdcd7IdPXIL6iJ1cdi60QT%2BXu513pPBGJ5T8%2FQIHynH5mTrW4kc03VQ9bdXbubL6t5zjwhHA1vNTCNdfXz4SNfA3u%2Bi7lz6H4KeG9%2FqRKQ%2BUMROO6Ukg5Wi66qQqSXJpNc36sCemUVZbV61ePch78CtB6DzALauGID6YxyrUuoxOuzEZBfhnwaMaD%2BzsnQ8aQqW8kK%2FI532lk%2BYDO3JEv2RBUy3GDyUu7bYaC1oWlL%2BamVoXxwEYvYOoYb2GHF6F0jmAy9x8Q4OKNDQAN9czZJLc%2FnsbGbEJK18%2B0vDIbRhJ1V6R2Je4uL1BA4QEA%2F6o%2FUmnAoWfeF%2FDjLRVgdOyiHjM1Hi2xGHMd0yDMf2WaMDXPDprqfx2Gnmb%2BDwv7bciXN5jN53ic1qIj0rQrB8kDdODQbBRU7VuczGmve6XI%2FudexxpITyvBincnB0Rv2MbzmzgR2ZBMR3OzxWTaMD0SygQ0DEa6Au0rw74xfIwOR7cE%2BNeyND0vJZmqS7OIC7FnCK6JtSD%2BbMxGbTz%2B9ByczD%2B4v2%2BBjqkAQIkTxmUKSn93LT%2Fug08rPo4XE5Bop5uUtFXACoYd5RFmwzIwwrLnMoo6MRCJHroj8ExiTRLLnDjkBa0jWwWMwsVTiqQkJK7F9MCAdx%2FoZTdQObWCM1qPX0f777Jpxl8Pl%2FkqMV0oB%2BFAnEGLkRoz3GjoWKxrFoaDL1luen3DQU88K4wwR1Zgfd7F3DiINoqBFJ9n3tluMfGKbs9JJmuTq9xnCKJ&X-Amz-Signature=1b005dd60a3cef28717f5cf0fd0fdaab0fb634c889853fa6892f34410b5ad2f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AP5VSG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDKAjZVWL54CbSZ1NDJw79ZFT%2BCHbdkS6biDmHoHiQhBgIhAPjVJzpOkIiOSke8AjBaKLEukIE0WOxzYAalFc28fGenKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztatpuymOvsYjzbKgq3ANzhHs98fJQMZ76kKDz6N%2FFqDMo4ZAH7OzY862MMKDo40ZJK33jJdnrgznxCEtusFqYHKeeoGskmJ76%2FCYBlQ%2BYE6%2BT5%2FBfErA%2FBl6IFdcd7IdPXIL6iJ1cdi60QT%2BXu513pPBGJ5T8%2FQIHynH5mTrW4kc03VQ9bdXbubL6t5zjwhHA1vNTCNdfXz4SNfA3u%2Bi7lz6H4KeG9%2FqRKQ%2BUMROO6Ukg5Wi66qQqSXJpNc36sCemUVZbV61ePch78CtB6DzALauGID6YxyrUuoxOuzEZBfhnwaMaD%2BzsnQ8aQqW8kK%2FI532lk%2BYDO3JEv2RBUy3GDyUu7bYaC1oWlL%2BamVoXxwEYvYOoYb2GHF6F0jmAy9x8Q4OKNDQAN9czZJLc%2FnsbGbEJK18%2B0vDIbRhJ1V6R2Je4uL1BA4QEA%2F6o%2FUmnAoWfeF%2FDjLRVgdOyiHjM1Hi2xGHMd0yDMf2WaMDXPDprqfx2Gnmb%2BDwv7bciXN5jN53ic1qIj0rQrB8kDdODQbBRU7VuczGmve6XI%2FudexxpITyvBincnB0Rv2MbzmzgR2ZBMR3OzxWTaMD0SygQ0DEa6Au0rw74xfIwOR7cE%2BNeyND0vJZmqS7OIC7FnCK6JtSD%2BbMxGbTz%2B9ByczD%2B4v2%2BBjqkAQIkTxmUKSn93LT%2Fug08rPo4XE5Bop5uUtFXACoYd5RFmwzIwwrLnMoo6MRCJHroj8ExiTRLLnDjkBa0jWwWMwsVTiqQkJK7F9MCAdx%2FoZTdQObWCM1qPX0f777Jpxl8Pl%2FkqMV0oB%2BFAnEGLkRoz3GjoWKxrFoaDL1luen3DQU88K4wwR1Zgfd7F3DiINoqBFJ9n3tluMfGKbs9JJmuTq9xnCKJ&X-Amz-Signature=d739f7ba4de71ee4c79302c9c2d8f3d97d0da12440bd2bb4a347e6ac15523b80&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AP5VSG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDKAjZVWL54CbSZ1NDJw79ZFT%2BCHbdkS6biDmHoHiQhBgIhAPjVJzpOkIiOSke8AjBaKLEukIE0WOxzYAalFc28fGenKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztatpuymOvsYjzbKgq3ANzhHs98fJQMZ76kKDz6N%2FFqDMo4ZAH7OzY862MMKDo40ZJK33jJdnrgznxCEtusFqYHKeeoGskmJ76%2FCYBlQ%2BYE6%2BT5%2FBfErA%2FBl6IFdcd7IdPXIL6iJ1cdi60QT%2BXu513pPBGJ5T8%2FQIHynH5mTrW4kc03VQ9bdXbubL6t5zjwhHA1vNTCNdfXz4SNfA3u%2Bi7lz6H4KeG9%2FqRKQ%2BUMROO6Ukg5Wi66qQqSXJpNc36sCemUVZbV61ePch78CtB6DzALauGID6YxyrUuoxOuzEZBfhnwaMaD%2BzsnQ8aQqW8kK%2FI532lk%2BYDO3JEv2RBUy3GDyUu7bYaC1oWlL%2BamVoXxwEYvYOoYb2GHF6F0jmAy9x8Q4OKNDQAN9czZJLc%2FnsbGbEJK18%2B0vDIbRhJ1V6R2Je4uL1BA4QEA%2F6o%2FUmnAoWfeF%2FDjLRVgdOyiHjM1Hi2xGHMd0yDMf2WaMDXPDprqfx2Gnmb%2BDwv7bciXN5jN53ic1qIj0rQrB8kDdODQbBRU7VuczGmve6XI%2FudexxpITyvBincnB0Rv2MbzmzgR2ZBMR3OzxWTaMD0SygQ0DEa6Au0rw74xfIwOR7cE%2BNeyND0vJZmqS7OIC7FnCK6JtSD%2BbMxGbTz%2B9ByczD%2B4v2%2BBjqkAQIkTxmUKSn93LT%2Fug08rPo4XE5Bop5uUtFXACoYd5RFmwzIwwrLnMoo6MRCJHroj8ExiTRLLnDjkBa0jWwWMwsVTiqQkJK7F9MCAdx%2FoZTdQObWCM1qPX0f777Jpxl8Pl%2FkqMV0oB%2BFAnEGLkRoz3GjoWKxrFoaDL1luen3DQU88K4wwR1Zgfd7F3DiINoqBFJ9n3tluMfGKbs9JJmuTq9xnCKJ&X-Amz-Signature=d252f6eede3159acafbefef0ede8910231d929fafa58e467b47d22b401c164bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
