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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4E4CMG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAn%2BFMYjERFtH0gGmVqhpwMh0zWVOi7n78B11Kf%2F5UzgAiB9kD2Qt8RAlIH4%2FyimL2Z6zpbNzljzKQq4ReqI9rF0Gyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMgTu4RKNcDf%2Bemc%2B%2FKtwD8RlhOWx1yS3kKaOqaJiMtRuiqJJrijaJsvAYbw%2Fqi3s7md3yMYM9gPAGxj2ek6M9uoleHA1etBRSKFZu5eq1JEnXCVBnkl%2BwdwAKEnvmu3qsd4hCeRzrsb3Zp79qb2ksbTE3V0GKnzwCS6TB0%2F4DkdPyXIcgEg7YbJDSp%2F8ERWX%2BxHTd0lQQL%2BEnBc4cYEAZyqbsXSiONEGZhjuGIU0VIn2oECRNrwR9jGtJbi3ty7xuL1OhhIZ6VOq1u5gXEAWM1S3W1PyugIiewhYKiJ0%2FGuwb1K%2F2j7eVLBXVcqRdlUAN9YrGfsatfQGIF5cp%2FnCWVflfMX4sww%2BDLXDTFuGhlU0dbB6Kcg0TR89hcz2dugmjMvcFlywkz%2F01VYuD8XUdAzuJfNRLPdOoemVH819CXr60Gf22nJLD8tfEGwDayfY0xM4%2BY%2BFAToR7Zn4jvDZ0bCMwZOC2oU48oauuMiYjD76ar9R1CEFcFpNIq7h700uY4pXrv5bFUaAciJr2FQ3DVoX8XMJk6Kww7Pg5zwwSE6SCUHjcAGdTQhmpRgCdFpclZh2fa9cg2L199pe9unsS2jd9MeScdvTlHrfLev%2FHPDUDWKvEhXhb3SGUJynPufenB5yr9h5JlmcrGhEwnbDfvgY6pgFESdhLqQFhR%2Bo5aHFuiZT2AzEwMiC9ePbWrz2Qwt53VEbnsNAq5x53OQfRfsHfsrpoplEf0efsDOgy6WGqmD1x%2Fm8Drp851sT5iX%2FlgVNGIGEO34TEa9%2FfaKMvQQ0T8KWiRyNf6nQO6Jvsc6BA6%2BJfCj7TYPqG1gwmdFy8oIpl3NIlW3C6wVXvkrmX%2B%2BBIMkaB0Ml5cdc2bZka1lbwLvv%2B%2BRU6Lff%2F&X-Amz-Signature=2ce47c8eade7ff87190729bf99e89ae69a1106a28f2fb73dc8d10af793d6c558&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4E4CMG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAn%2BFMYjERFtH0gGmVqhpwMh0zWVOi7n78B11Kf%2F5UzgAiB9kD2Qt8RAlIH4%2FyimL2Z6zpbNzljzKQq4ReqI9rF0Gyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMgTu4RKNcDf%2Bemc%2B%2FKtwD8RlhOWx1yS3kKaOqaJiMtRuiqJJrijaJsvAYbw%2Fqi3s7md3yMYM9gPAGxj2ek6M9uoleHA1etBRSKFZu5eq1JEnXCVBnkl%2BwdwAKEnvmu3qsd4hCeRzrsb3Zp79qb2ksbTE3V0GKnzwCS6TB0%2F4DkdPyXIcgEg7YbJDSp%2F8ERWX%2BxHTd0lQQL%2BEnBc4cYEAZyqbsXSiONEGZhjuGIU0VIn2oECRNrwR9jGtJbi3ty7xuL1OhhIZ6VOq1u5gXEAWM1S3W1PyugIiewhYKiJ0%2FGuwb1K%2F2j7eVLBXVcqRdlUAN9YrGfsatfQGIF5cp%2FnCWVflfMX4sww%2BDLXDTFuGhlU0dbB6Kcg0TR89hcz2dugmjMvcFlywkz%2F01VYuD8XUdAzuJfNRLPdOoemVH819CXr60Gf22nJLD8tfEGwDayfY0xM4%2BY%2BFAToR7Zn4jvDZ0bCMwZOC2oU48oauuMiYjD76ar9R1CEFcFpNIq7h700uY4pXrv5bFUaAciJr2FQ3DVoX8XMJk6Kww7Pg5zwwSE6SCUHjcAGdTQhmpRgCdFpclZh2fa9cg2L199pe9unsS2jd9MeScdvTlHrfLev%2FHPDUDWKvEhXhb3SGUJynPufenB5yr9h5JlmcrGhEwnbDfvgY6pgFESdhLqQFhR%2Bo5aHFuiZT2AzEwMiC9ePbWrz2Qwt53VEbnsNAq5x53OQfRfsHfsrpoplEf0efsDOgy6WGqmD1x%2Fm8Drp851sT5iX%2FlgVNGIGEO34TEa9%2FfaKMvQQ0T8KWiRyNf6nQO6Jvsc6BA6%2BJfCj7TYPqG1gwmdFy8oIpl3NIlW3C6wVXvkrmX%2B%2BBIMkaB0Ml5cdc2bZka1lbwLvv%2B%2BRU6Lff%2F&X-Amz-Signature=f852353e724197f9c7ed4207a4362c2e48692ee80d7c31e42b019d8e62fa7c74&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4E4CMG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAn%2BFMYjERFtH0gGmVqhpwMh0zWVOi7n78B11Kf%2F5UzgAiB9kD2Qt8RAlIH4%2FyimL2Z6zpbNzljzKQq4ReqI9rF0Gyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMgTu4RKNcDf%2Bemc%2B%2FKtwD8RlhOWx1yS3kKaOqaJiMtRuiqJJrijaJsvAYbw%2Fqi3s7md3yMYM9gPAGxj2ek6M9uoleHA1etBRSKFZu5eq1JEnXCVBnkl%2BwdwAKEnvmu3qsd4hCeRzrsb3Zp79qb2ksbTE3V0GKnzwCS6TB0%2F4DkdPyXIcgEg7YbJDSp%2F8ERWX%2BxHTd0lQQL%2BEnBc4cYEAZyqbsXSiONEGZhjuGIU0VIn2oECRNrwR9jGtJbi3ty7xuL1OhhIZ6VOq1u5gXEAWM1S3W1PyugIiewhYKiJ0%2FGuwb1K%2F2j7eVLBXVcqRdlUAN9YrGfsatfQGIF5cp%2FnCWVflfMX4sww%2BDLXDTFuGhlU0dbB6Kcg0TR89hcz2dugmjMvcFlywkz%2F01VYuD8XUdAzuJfNRLPdOoemVH819CXr60Gf22nJLD8tfEGwDayfY0xM4%2BY%2BFAToR7Zn4jvDZ0bCMwZOC2oU48oauuMiYjD76ar9R1CEFcFpNIq7h700uY4pXrv5bFUaAciJr2FQ3DVoX8XMJk6Kww7Pg5zwwSE6SCUHjcAGdTQhmpRgCdFpclZh2fa9cg2L199pe9unsS2jd9MeScdvTlHrfLev%2FHPDUDWKvEhXhb3SGUJynPufenB5yr9h5JlmcrGhEwnbDfvgY6pgFESdhLqQFhR%2Bo5aHFuiZT2AzEwMiC9ePbWrz2Qwt53VEbnsNAq5x53OQfRfsHfsrpoplEf0efsDOgy6WGqmD1x%2Fm8Drp851sT5iX%2FlgVNGIGEO34TEa9%2FfaKMvQQ0T8KWiRyNf6nQO6Jvsc6BA6%2BJfCj7TYPqG1gwmdFy8oIpl3NIlW3C6wVXvkrmX%2B%2BBIMkaB0Ml5cdc2bZka1lbwLvv%2B%2BRU6Lff%2F&X-Amz-Signature=5c313fe33174140ffbe49d780ccde31eaa07f2da797cd996493172e73a2789c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4E4CMG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAn%2BFMYjERFtH0gGmVqhpwMh0zWVOi7n78B11Kf%2F5UzgAiB9kD2Qt8RAlIH4%2FyimL2Z6zpbNzljzKQq4ReqI9rF0Gyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMgTu4RKNcDf%2Bemc%2B%2FKtwD8RlhOWx1yS3kKaOqaJiMtRuiqJJrijaJsvAYbw%2Fqi3s7md3yMYM9gPAGxj2ek6M9uoleHA1etBRSKFZu5eq1JEnXCVBnkl%2BwdwAKEnvmu3qsd4hCeRzrsb3Zp79qb2ksbTE3V0GKnzwCS6TB0%2F4DkdPyXIcgEg7YbJDSp%2F8ERWX%2BxHTd0lQQL%2BEnBc4cYEAZyqbsXSiONEGZhjuGIU0VIn2oECRNrwR9jGtJbi3ty7xuL1OhhIZ6VOq1u5gXEAWM1S3W1PyugIiewhYKiJ0%2FGuwb1K%2F2j7eVLBXVcqRdlUAN9YrGfsatfQGIF5cp%2FnCWVflfMX4sww%2BDLXDTFuGhlU0dbB6Kcg0TR89hcz2dugmjMvcFlywkz%2F01VYuD8XUdAzuJfNRLPdOoemVH819CXr60Gf22nJLD8tfEGwDayfY0xM4%2BY%2BFAToR7Zn4jvDZ0bCMwZOC2oU48oauuMiYjD76ar9R1CEFcFpNIq7h700uY4pXrv5bFUaAciJr2FQ3DVoX8XMJk6Kww7Pg5zwwSE6SCUHjcAGdTQhmpRgCdFpclZh2fa9cg2L199pe9unsS2jd9MeScdvTlHrfLev%2FHPDUDWKvEhXhb3SGUJynPufenB5yr9h5JlmcrGhEwnbDfvgY6pgFESdhLqQFhR%2Bo5aHFuiZT2AzEwMiC9ePbWrz2Qwt53VEbnsNAq5x53OQfRfsHfsrpoplEf0efsDOgy6WGqmD1x%2Fm8Drp851sT5iX%2FlgVNGIGEO34TEa9%2FfaKMvQQ0T8KWiRyNf6nQO6Jvsc6BA6%2BJfCj7TYPqG1gwmdFy8oIpl3NIlW3C6wVXvkrmX%2B%2BBIMkaB0Ml5cdc2bZka1lbwLvv%2B%2BRU6Lff%2F&X-Amz-Signature=03b36749559ad2200c0caed8b8647e2623997df0071fb78dca84cff25df99859&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4E4CMG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAn%2BFMYjERFtH0gGmVqhpwMh0zWVOi7n78B11Kf%2F5UzgAiB9kD2Qt8RAlIH4%2FyimL2Z6zpbNzljzKQq4ReqI9rF0Gyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMgTu4RKNcDf%2Bemc%2B%2FKtwD8RlhOWx1yS3kKaOqaJiMtRuiqJJrijaJsvAYbw%2Fqi3s7md3yMYM9gPAGxj2ek6M9uoleHA1etBRSKFZu5eq1JEnXCVBnkl%2BwdwAKEnvmu3qsd4hCeRzrsb3Zp79qb2ksbTE3V0GKnzwCS6TB0%2F4DkdPyXIcgEg7YbJDSp%2F8ERWX%2BxHTd0lQQL%2BEnBc4cYEAZyqbsXSiONEGZhjuGIU0VIn2oECRNrwR9jGtJbi3ty7xuL1OhhIZ6VOq1u5gXEAWM1S3W1PyugIiewhYKiJ0%2FGuwb1K%2F2j7eVLBXVcqRdlUAN9YrGfsatfQGIF5cp%2FnCWVflfMX4sww%2BDLXDTFuGhlU0dbB6Kcg0TR89hcz2dugmjMvcFlywkz%2F01VYuD8XUdAzuJfNRLPdOoemVH819CXr60Gf22nJLD8tfEGwDayfY0xM4%2BY%2BFAToR7Zn4jvDZ0bCMwZOC2oU48oauuMiYjD76ar9R1CEFcFpNIq7h700uY4pXrv5bFUaAciJr2FQ3DVoX8XMJk6Kww7Pg5zwwSE6SCUHjcAGdTQhmpRgCdFpclZh2fa9cg2L199pe9unsS2jd9MeScdvTlHrfLev%2FHPDUDWKvEhXhb3SGUJynPufenB5yr9h5JlmcrGhEwnbDfvgY6pgFESdhLqQFhR%2Bo5aHFuiZT2AzEwMiC9ePbWrz2Qwt53VEbnsNAq5x53OQfRfsHfsrpoplEf0efsDOgy6WGqmD1x%2Fm8Drp851sT5iX%2FlgVNGIGEO34TEa9%2FfaKMvQQ0T8KWiRyNf6nQO6Jvsc6BA6%2BJfCj7TYPqG1gwmdFy8oIpl3NIlW3C6wVXvkrmX%2B%2BBIMkaB0Ml5cdc2bZka1lbwLvv%2B%2BRU6Lff%2F&X-Amz-Signature=f08850c60eeee95d8583fd78318c9cbe98d28533833f91fa995e907ae4bb2906&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4E4CMG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAn%2BFMYjERFtH0gGmVqhpwMh0zWVOi7n78B11Kf%2F5UzgAiB9kD2Qt8RAlIH4%2FyimL2Z6zpbNzljzKQq4ReqI9rF0Gyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMgTu4RKNcDf%2Bemc%2B%2FKtwD8RlhOWx1yS3kKaOqaJiMtRuiqJJrijaJsvAYbw%2Fqi3s7md3yMYM9gPAGxj2ek6M9uoleHA1etBRSKFZu5eq1JEnXCVBnkl%2BwdwAKEnvmu3qsd4hCeRzrsb3Zp79qb2ksbTE3V0GKnzwCS6TB0%2F4DkdPyXIcgEg7YbJDSp%2F8ERWX%2BxHTd0lQQL%2BEnBc4cYEAZyqbsXSiONEGZhjuGIU0VIn2oECRNrwR9jGtJbi3ty7xuL1OhhIZ6VOq1u5gXEAWM1S3W1PyugIiewhYKiJ0%2FGuwb1K%2F2j7eVLBXVcqRdlUAN9YrGfsatfQGIF5cp%2FnCWVflfMX4sww%2BDLXDTFuGhlU0dbB6Kcg0TR89hcz2dugmjMvcFlywkz%2F01VYuD8XUdAzuJfNRLPdOoemVH819CXr60Gf22nJLD8tfEGwDayfY0xM4%2BY%2BFAToR7Zn4jvDZ0bCMwZOC2oU48oauuMiYjD76ar9R1CEFcFpNIq7h700uY4pXrv5bFUaAciJr2FQ3DVoX8XMJk6Kww7Pg5zwwSE6SCUHjcAGdTQhmpRgCdFpclZh2fa9cg2L199pe9unsS2jd9MeScdvTlHrfLev%2FHPDUDWKvEhXhb3SGUJynPufenB5yr9h5JlmcrGhEwnbDfvgY6pgFESdhLqQFhR%2Bo5aHFuiZT2AzEwMiC9ePbWrz2Qwt53VEbnsNAq5x53OQfRfsHfsrpoplEf0efsDOgy6WGqmD1x%2Fm8Drp851sT5iX%2FlgVNGIGEO34TEa9%2FfaKMvQQ0T8KWiRyNf6nQO6Jvsc6BA6%2BJfCj7TYPqG1gwmdFy8oIpl3NIlW3C6wVXvkrmX%2B%2BBIMkaB0Ml5cdc2bZka1lbwLvv%2B%2BRU6Lff%2F&X-Amz-Signature=62337eaefa554d368cba1d74ad341cdd86864943c69dfe57cb95829200d2d21b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4E4CMG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAn%2BFMYjERFtH0gGmVqhpwMh0zWVOi7n78B11Kf%2F5UzgAiB9kD2Qt8RAlIH4%2FyimL2Z6zpbNzljzKQq4ReqI9rF0Gyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMgTu4RKNcDf%2Bemc%2B%2FKtwD8RlhOWx1yS3kKaOqaJiMtRuiqJJrijaJsvAYbw%2Fqi3s7md3yMYM9gPAGxj2ek6M9uoleHA1etBRSKFZu5eq1JEnXCVBnkl%2BwdwAKEnvmu3qsd4hCeRzrsb3Zp79qb2ksbTE3V0GKnzwCS6TB0%2F4DkdPyXIcgEg7YbJDSp%2F8ERWX%2BxHTd0lQQL%2BEnBc4cYEAZyqbsXSiONEGZhjuGIU0VIn2oECRNrwR9jGtJbi3ty7xuL1OhhIZ6VOq1u5gXEAWM1S3W1PyugIiewhYKiJ0%2FGuwb1K%2F2j7eVLBXVcqRdlUAN9YrGfsatfQGIF5cp%2FnCWVflfMX4sww%2BDLXDTFuGhlU0dbB6Kcg0TR89hcz2dugmjMvcFlywkz%2F01VYuD8XUdAzuJfNRLPdOoemVH819CXr60Gf22nJLD8tfEGwDayfY0xM4%2BY%2BFAToR7Zn4jvDZ0bCMwZOC2oU48oauuMiYjD76ar9R1CEFcFpNIq7h700uY4pXrv5bFUaAciJr2FQ3DVoX8XMJk6Kww7Pg5zwwSE6SCUHjcAGdTQhmpRgCdFpclZh2fa9cg2L199pe9unsS2jd9MeScdvTlHrfLev%2FHPDUDWKvEhXhb3SGUJynPufenB5yr9h5JlmcrGhEwnbDfvgY6pgFESdhLqQFhR%2Bo5aHFuiZT2AzEwMiC9ePbWrz2Qwt53VEbnsNAq5x53OQfRfsHfsrpoplEf0efsDOgy6WGqmD1x%2Fm8Drp851sT5iX%2FlgVNGIGEO34TEa9%2FfaKMvQQ0T8KWiRyNf6nQO6Jvsc6BA6%2BJfCj7TYPqG1gwmdFy8oIpl3NIlW3C6wVXvkrmX%2B%2BBIMkaB0Ml5cdc2bZka1lbwLvv%2B%2BRU6Lff%2F&X-Amz-Signature=00b2343f867656f2a71b021be3f44f388150cdf6f96e647c5f9d75dde4f15868&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4E4CMG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAn%2BFMYjERFtH0gGmVqhpwMh0zWVOi7n78B11Kf%2F5UzgAiB9kD2Qt8RAlIH4%2FyimL2Z6zpbNzljzKQq4ReqI9rF0Gyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMgTu4RKNcDf%2Bemc%2B%2FKtwD8RlhOWx1yS3kKaOqaJiMtRuiqJJrijaJsvAYbw%2Fqi3s7md3yMYM9gPAGxj2ek6M9uoleHA1etBRSKFZu5eq1JEnXCVBnkl%2BwdwAKEnvmu3qsd4hCeRzrsb3Zp79qb2ksbTE3V0GKnzwCS6TB0%2F4DkdPyXIcgEg7YbJDSp%2F8ERWX%2BxHTd0lQQL%2BEnBc4cYEAZyqbsXSiONEGZhjuGIU0VIn2oECRNrwR9jGtJbi3ty7xuL1OhhIZ6VOq1u5gXEAWM1S3W1PyugIiewhYKiJ0%2FGuwb1K%2F2j7eVLBXVcqRdlUAN9YrGfsatfQGIF5cp%2FnCWVflfMX4sww%2BDLXDTFuGhlU0dbB6Kcg0TR89hcz2dugmjMvcFlywkz%2F01VYuD8XUdAzuJfNRLPdOoemVH819CXr60Gf22nJLD8tfEGwDayfY0xM4%2BY%2BFAToR7Zn4jvDZ0bCMwZOC2oU48oauuMiYjD76ar9R1CEFcFpNIq7h700uY4pXrv5bFUaAciJr2FQ3DVoX8XMJk6Kww7Pg5zwwSE6SCUHjcAGdTQhmpRgCdFpclZh2fa9cg2L199pe9unsS2jd9MeScdvTlHrfLev%2FHPDUDWKvEhXhb3SGUJynPufenB5yr9h5JlmcrGhEwnbDfvgY6pgFESdhLqQFhR%2Bo5aHFuiZT2AzEwMiC9ePbWrz2Qwt53VEbnsNAq5x53OQfRfsHfsrpoplEf0efsDOgy6WGqmD1x%2Fm8Drp851sT5iX%2FlgVNGIGEO34TEa9%2FfaKMvQQ0T8KWiRyNf6nQO6Jvsc6BA6%2BJfCj7TYPqG1gwmdFy8oIpl3NIlW3C6wVXvkrmX%2B%2BBIMkaB0Ml5cdc2bZka1lbwLvv%2B%2BRU6Lff%2F&X-Amz-Signature=cf5673a2f39c60dae74827c24e4390e571a43ed988af90eceac336fb41dba0a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
