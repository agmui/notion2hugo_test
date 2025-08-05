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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5YMGIS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD59zHP%2FOJq%2F77Fl8JXdGN16779yM82sn8XXCbpg2%2Fm1AIhAPeu6e14d47Uvr0INgP55PTFtAJY6yX9YsTtPWQUCHrcKv8DCF4QABoMNjM3NDIzMTgzODA1IgzIqh1WkSFHTq1Trboq3AMGK8jYky9KuS9KqdMWXbuz%2BXqKnOKLPhWcH%2FIP0SOuOhUeEniJOjpTmUgOK8aJl2XF5QDRYoZQir0RiBBEVlfUoJV2JeSCo%2FYB88OcgHjk3kzBLmuFW4bM5zuRLTiSPFmw87F7OyGbvdedWuGeK6GjnUs5SSY%2B1fWK2KpiLQcgi8IjbsEI4lo%2BrO70vxtdMD23BvcEm88NjeEq8b0QIpI1Kzg%2FSrmrXkXjW6njcgSaU%2B9gr1tuWvU1CHuiRLT03O%2Bm9pA6RrGHx1c5R%2Fj%2BCI%2FA4BdKTUg2eMnmcEZfSODZj0GAI6mgdJt5By%2FK0KrLqUhY8Lm%2F9obaU0PaIx7aP8boDI0y3cxHocsb1oPjRyCwFHGy7IkSnsgW6LcwiZ0o9S9Hyf%2FZBx3pObuDfgU%2BWjoxVdfysO%2FCIbKbCGl5i%2FcPhNE3yyBGFS9qQigS2hHLYugPzuCiYUc%2BweeTJkkMFYYhM2XWEkaUPVB0ZLbxDeMLPJFaQ%2FXZCWmVcpUTtNAFmfurbZfRi4bLzZop2TYYPme8bTikCVj0VmOsFSD9BwG9I8b7vHR5GVRxRA5tiabYyRLt9KJ1m%2Fuj8yeGIXRtnQy4BiwAdcHhh0MZQbVLWPWc4w%2FmzIJYUhhk0KPl4TC3g8jEBjqkAZOB%2FNJ3uQJRhp0c%2Fp8ts26fH%2BLbAQ9FQf0UGlU%2F%2BNA28n%2FnEBH%2FMuWKm86kjbP0E%2F7rt3SlPzG6Qbr8QynfrIeDSMNrwEGCmfq8IwdIcgQNrrosgZVp4EPjkpgAIWzMrwN%2FXMFS7j5PMsn29va8ZqZEQTxq6Z6YxCijrjcrX%2FPR4d5LzM8YxjC4uZt6o7jOFit1GVWSbbP6D2mpXGC10nvpJWye&X-Amz-Signature=a3121965c9860b08cc65070c7bce46a77cd98561542e0bdafdc50d4490b777a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5YMGIS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD59zHP%2FOJq%2F77Fl8JXdGN16779yM82sn8XXCbpg2%2Fm1AIhAPeu6e14d47Uvr0INgP55PTFtAJY6yX9YsTtPWQUCHrcKv8DCF4QABoMNjM3NDIzMTgzODA1IgzIqh1WkSFHTq1Trboq3AMGK8jYky9KuS9KqdMWXbuz%2BXqKnOKLPhWcH%2FIP0SOuOhUeEniJOjpTmUgOK8aJl2XF5QDRYoZQir0RiBBEVlfUoJV2JeSCo%2FYB88OcgHjk3kzBLmuFW4bM5zuRLTiSPFmw87F7OyGbvdedWuGeK6GjnUs5SSY%2B1fWK2KpiLQcgi8IjbsEI4lo%2BrO70vxtdMD23BvcEm88NjeEq8b0QIpI1Kzg%2FSrmrXkXjW6njcgSaU%2B9gr1tuWvU1CHuiRLT03O%2Bm9pA6RrGHx1c5R%2Fj%2BCI%2FA4BdKTUg2eMnmcEZfSODZj0GAI6mgdJt5By%2FK0KrLqUhY8Lm%2F9obaU0PaIx7aP8boDI0y3cxHocsb1oPjRyCwFHGy7IkSnsgW6LcwiZ0o9S9Hyf%2FZBx3pObuDfgU%2BWjoxVdfysO%2FCIbKbCGl5i%2FcPhNE3yyBGFS9qQigS2hHLYugPzuCiYUc%2BweeTJkkMFYYhM2XWEkaUPVB0ZLbxDeMLPJFaQ%2FXZCWmVcpUTtNAFmfurbZfRi4bLzZop2TYYPme8bTikCVj0VmOsFSD9BwG9I8b7vHR5GVRxRA5tiabYyRLt9KJ1m%2Fuj8yeGIXRtnQy4BiwAdcHhh0MZQbVLWPWc4w%2FmzIJYUhhk0KPl4TC3g8jEBjqkAZOB%2FNJ3uQJRhp0c%2Fp8ts26fH%2BLbAQ9FQf0UGlU%2F%2BNA28n%2FnEBH%2FMuWKm86kjbP0E%2F7rt3SlPzG6Qbr8QynfrIeDSMNrwEGCmfq8IwdIcgQNrrosgZVp4EPjkpgAIWzMrwN%2FXMFS7j5PMsn29va8ZqZEQTxq6Z6YxCijrjcrX%2FPR4d5LzM8YxjC4uZt6o7jOFit1GVWSbbP6D2mpXGC10nvpJWye&X-Amz-Signature=61888deaf1b4d57af5ea863eb7e3dea3fabed6b35583ebea53aa4d188d8c98c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5YMGIS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD59zHP%2FOJq%2F77Fl8JXdGN16779yM82sn8XXCbpg2%2Fm1AIhAPeu6e14d47Uvr0INgP55PTFtAJY6yX9YsTtPWQUCHrcKv8DCF4QABoMNjM3NDIzMTgzODA1IgzIqh1WkSFHTq1Trboq3AMGK8jYky9KuS9KqdMWXbuz%2BXqKnOKLPhWcH%2FIP0SOuOhUeEniJOjpTmUgOK8aJl2XF5QDRYoZQir0RiBBEVlfUoJV2JeSCo%2FYB88OcgHjk3kzBLmuFW4bM5zuRLTiSPFmw87F7OyGbvdedWuGeK6GjnUs5SSY%2B1fWK2KpiLQcgi8IjbsEI4lo%2BrO70vxtdMD23BvcEm88NjeEq8b0QIpI1Kzg%2FSrmrXkXjW6njcgSaU%2B9gr1tuWvU1CHuiRLT03O%2Bm9pA6RrGHx1c5R%2Fj%2BCI%2FA4BdKTUg2eMnmcEZfSODZj0GAI6mgdJt5By%2FK0KrLqUhY8Lm%2F9obaU0PaIx7aP8boDI0y3cxHocsb1oPjRyCwFHGy7IkSnsgW6LcwiZ0o9S9Hyf%2FZBx3pObuDfgU%2BWjoxVdfysO%2FCIbKbCGl5i%2FcPhNE3yyBGFS9qQigS2hHLYugPzuCiYUc%2BweeTJkkMFYYhM2XWEkaUPVB0ZLbxDeMLPJFaQ%2FXZCWmVcpUTtNAFmfurbZfRi4bLzZop2TYYPme8bTikCVj0VmOsFSD9BwG9I8b7vHR5GVRxRA5tiabYyRLt9KJ1m%2Fuj8yeGIXRtnQy4BiwAdcHhh0MZQbVLWPWc4w%2FmzIJYUhhk0KPl4TC3g8jEBjqkAZOB%2FNJ3uQJRhp0c%2Fp8ts26fH%2BLbAQ9FQf0UGlU%2F%2BNA28n%2FnEBH%2FMuWKm86kjbP0E%2F7rt3SlPzG6Qbr8QynfrIeDSMNrwEGCmfq8IwdIcgQNrrosgZVp4EPjkpgAIWzMrwN%2FXMFS7j5PMsn29va8ZqZEQTxq6Z6YxCijrjcrX%2FPR4d5LzM8YxjC4uZt6o7jOFit1GVWSbbP6D2mpXGC10nvpJWye&X-Amz-Signature=3de3b122ca9caa55ae1da89d5c7c9c0b8bc79b0512e9733256fc2fc8c3f8795c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5YMGIS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD59zHP%2FOJq%2F77Fl8JXdGN16779yM82sn8XXCbpg2%2Fm1AIhAPeu6e14d47Uvr0INgP55PTFtAJY6yX9YsTtPWQUCHrcKv8DCF4QABoMNjM3NDIzMTgzODA1IgzIqh1WkSFHTq1Trboq3AMGK8jYky9KuS9KqdMWXbuz%2BXqKnOKLPhWcH%2FIP0SOuOhUeEniJOjpTmUgOK8aJl2XF5QDRYoZQir0RiBBEVlfUoJV2JeSCo%2FYB88OcgHjk3kzBLmuFW4bM5zuRLTiSPFmw87F7OyGbvdedWuGeK6GjnUs5SSY%2B1fWK2KpiLQcgi8IjbsEI4lo%2BrO70vxtdMD23BvcEm88NjeEq8b0QIpI1Kzg%2FSrmrXkXjW6njcgSaU%2B9gr1tuWvU1CHuiRLT03O%2Bm9pA6RrGHx1c5R%2Fj%2BCI%2FA4BdKTUg2eMnmcEZfSODZj0GAI6mgdJt5By%2FK0KrLqUhY8Lm%2F9obaU0PaIx7aP8boDI0y3cxHocsb1oPjRyCwFHGy7IkSnsgW6LcwiZ0o9S9Hyf%2FZBx3pObuDfgU%2BWjoxVdfysO%2FCIbKbCGl5i%2FcPhNE3yyBGFS9qQigS2hHLYugPzuCiYUc%2BweeTJkkMFYYhM2XWEkaUPVB0ZLbxDeMLPJFaQ%2FXZCWmVcpUTtNAFmfurbZfRi4bLzZop2TYYPme8bTikCVj0VmOsFSD9BwG9I8b7vHR5GVRxRA5tiabYyRLt9KJ1m%2Fuj8yeGIXRtnQy4BiwAdcHhh0MZQbVLWPWc4w%2FmzIJYUhhk0KPl4TC3g8jEBjqkAZOB%2FNJ3uQJRhp0c%2Fp8ts26fH%2BLbAQ9FQf0UGlU%2F%2BNA28n%2FnEBH%2FMuWKm86kjbP0E%2F7rt3SlPzG6Qbr8QynfrIeDSMNrwEGCmfq8IwdIcgQNrrosgZVp4EPjkpgAIWzMrwN%2FXMFS7j5PMsn29va8ZqZEQTxq6Z6YxCijrjcrX%2FPR4d5LzM8YxjC4uZt6o7jOFit1GVWSbbP6D2mpXGC10nvpJWye&X-Amz-Signature=d65ef593071194125d12a8c41354ad016ad802029ad5a22946c1c97598ecba86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5YMGIS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD59zHP%2FOJq%2F77Fl8JXdGN16779yM82sn8XXCbpg2%2Fm1AIhAPeu6e14d47Uvr0INgP55PTFtAJY6yX9YsTtPWQUCHrcKv8DCF4QABoMNjM3NDIzMTgzODA1IgzIqh1WkSFHTq1Trboq3AMGK8jYky9KuS9KqdMWXbuz%2BXqKnOKLPhWcH%2FIP0SOuOhUeEniJOjpTmUgOK8aJl2XF5QDRYoZQir0RiBBEVlfUoJV2JeSCo%2FYB88OcgHjk3kzBLmuFW4bM5zuRLTiSPFmw87F7OyGbvdedWuGeK6GjnUs5SSY%2B1fWK2KpiLQcgi8IjbsEI4lo%2BrO70vxtdMD23BvcEm88NjeEq8b0QIpI1Kzg%2FSrmrXkXjW6njcgSaU%2B9gr1tuWvU1CHuiRLT03O%2Bm9pA6RrGHx1c5R%2Fj%2BCI%2FA4BdKTUg2eMnmcEZfSODZj0GAI6mgdJt5By%2FK0KrLqUhY8Lm%2F9obaU0PaIx7aP8boDI0y3cxHocsb1oPjRyCwFHGy7IkSnsgW6LcwiZ0o9S9Hyf%2FZBx3pObuDfgU%2BWjoxVdfysO%2FCIbKbCGl5i%2FcPhNE3yyBGFS9qQigS2hHLYugPzuCiYUc%2BweeTJkkMFYYhM2XWEkaUPVB0ZLbxDeMLPJFaQ%2FXZCWmVcpUTtNAFmfurbZfRi4bLzZop2TYYPme8bTikCVj0VmOsFSD9BwG9I8b7vHR5GVRxRA5tiabYyRLt9KJ1m%2Fuj8yeGIXRtnQy4BiwAdcHhh0MZQbVLWPWc4w%2FmzIJYUhhk0KPl4TC3g8jEBjqkAZOB%2FNJ3uQJRhp0c%2Fp8ts26fH%2BLbAQ9FQf0UGlU%2F%2BNA28n%2FnEBH%2FMuWKm86kjbP0E%2F7rt3SlPzG6Qbr8QynfrIeDSMNrwEGCmfq8IwdIcgQNrrosgZVp4EPjkpgAIWzMrwN%2FXMFS7j5PMsn29va8ZqZEQTxq6Z6YxCijrjcrX%2FPR4d5LzM8YxjC4uZt6o7jOFit1GVWSbbP6D2mpXGC10nvpJWye&X-Amz-Signature=2ae13518b746e762e6fb259cdfe3329f64c5baa3b086e839c0fe5c6b11f8c25b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5YMGIS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD59zHP%2FOJq%2F77Fl8JXdGN16779yM82sn8XXCbpg2%2Fm1AIhAPeu6e14d47Uvr0INgP55PTFtAJY6yX9YsTtPWQUCHrcKv8DCF4QABoMNjM3NDIzMTgzODA1IgzIqh1WkSFHTq1Trboq3AMGK8jYky9KuS9KqdMWXbuz%2BXqKnOKLPhWcH%2FIP0SOuOhUeEniJOjpTmUgOK8aJl2XF5QDRYoZQir0RiBBEVlfUoJV2JeSCo%2FYB88OcgHjk3kzBLmuFW4bM5zuRLTiSPFmw87F7OyGbvdedWuGeK6GjnUs5SSY%2B1fWK2KpiLQcgi8IjbsEI4lo%2BrO70vxtdMD23BvcEm88NjeEq8b0QIpI1Kzg%2FSrmrXkXjW6njcgSaU%2B9gr1tuWvU1CHuiRLT03O%2Bm9pA6RrGHx1c5R%2Fj%2BCI%2FA4BdKTUg2eMnmcEZfSODZj0GAI6mgdJt5By%2FK0KrLqUhY8Lm%2F9obaU0PaIx7aP8boDI0y3cxHocsb1oPjRyCwFHGy7IkSnsgW6LcwiZ0o9S9Hyf%2FZBx3pObuDfgU%2BWjoxVdfysO%2FCIbKbCGl5i%2FcPhNE3yyBGFS9qQigS2hHLYugPzuCiYUc%2BweeTJkkMFYYhM2XWEkaUPVB0ZLbxDeMLPJFaQ%2FXZCWmVcpUTtNAFmfurbZfRi4bLzZop2TYYPme8bTikCVj0VmOsFSD9BwG9I8b7vHR5GVRxRA5tiabYyRLt9KJ1m%2Fuj8yeGIXRtnQy4BiwAdcHhh0MZQbVLWPWc4w%2FmzIJYUhhk0KPl4TC3g8jEBjqkAZOB%2FNJ3uQJRhp0c%2Fp8ts26fH%2BLbAQ9FQf0UGlU%2F%2BNA28n%2FnEBH%2FMuWKm86kjbP0E%2F7rt3SlPzG6Qbr8QynfrIeDSMNrwEGCmfq8IwdIcgQNrrosgZVp4EPjkpgAIWzMrwN%2FXMFS7j5PMsn29va8ZqZEQTxq6Z6YxCijrjcrX%2FPR4d5LzM8YxjC4uZt6o7jOFit1GVWSbbP6D2mpXGC10nvpJWye&X-Amz-Signature=b740da518aa662248047417fa671363050351bef25fbb6b3e51600115dcd166b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5YMGIS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD59zHP%2FOJq%2F77Fl8JXdGN16779yM82sn8XXCbpg2%2Fm1AIhAPeu6e14d47Uvr0INgP55PTFtAJY6yX9YsTtPWQUCHrcKv8DCF4QABoMNjM3NDIzMTgzODA1IgzIqh1WkSFHTq1Trboq3AMGK8jYky9KuS9KqdMWXbuz%2BXqKnOKLPhWcH%2FIP0SOuOhUeEniJOjpTmUgOK8aJl2XF5QDRYoZQir0RiBBEVlfUoJV2JeSCo%2FYB88OcgHjk3kzBLmuFW4bM5zuRLTiSPFmw87F7OyGbvdedWuGeK6GjnUs5SSY%2B1fWK2KpiLQcgi8IjbsEI4lo%2BrO70vxtdMD23BvcEm88NjeEq8b0QIpI1Kzg%2FSrmrXkXjW6njcgSaU%2B9gr1tuWvU1CHuiRLT03O%2Bm9pA6RrGHx1c5R%2Fj%2BCI%2FA4BdKTUg2eMnmcEZfSODZj0GAI6mgdJt5By%2FK0KrLqUhY8Lm%2F9obaU0PaIx7aP8boDI0y3cxHocsb1oPjRyCwFHGy7IkSnsgW6LcwiZ0o9S9Hyf%2FZBx3pObuDfgU%2BWjoxVdfysO%2FCIbKbCGl5i%2FcPhNE3yyBGFS9qQigS2hHLYugPzuCiYUc%2BweeTJkkMFYYhM2XWEkaUPVB0ZLbxDeMLPJFaQ%2FXZCWmVcpUTtNAFmfurbZfRi4bLzZop2TYYPme8bTikCVj0VmOsFSD9BwG9I8b7vHR5GVRxRA5tiabYyRLt9KJ1m%2Fuj8yeGIXRtnQy4BiwAdcHhh0MZQbVLWPWc4w%2FmzIJYUhhk0KPl4TC3g8jEBjqkAZOB%2FNJ3uQJRhp0c%2Fp8ts26fH%2BLbAQ9FQf0UGlU%2F%2BNA28n%2FnEBH%2FMuWKm86kjbP0E%2F7rt3SlPzG6Qbr8QynfrIeDSMNrwEGCmfq8IwdIcgQNrrosgZVp4EPjkpgAIWzMrwN%2FXMFS7j5PMsn29va8ZqZEQTxq6Z6YxCijrjcrX%2FPR4d5LzM8YxjC4uZt6o7jOFit1GVWSbbP6D2mpXGC10nvpJWye&X-Amz-Signature=9fb1ef36a6fd482c487b22820c80b80c7b4a8dd5a6239a6b66b4ec0542fd23d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5YMGIS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD59zHP%2FOJq%2F77Fl8JXdGN16779yM82sn8XXCbpg2%2Fm1AIhAPeu6e14d47Uvr0INgP55PTFtAJY6yX9YsTtPWQUCHrcKv8DCF4QABoMNjM3NDIzMTgzODA1IgzIqh1WkSFHTq1Trboq3AMGK8jYky9KuS9KqdMWXbuz%2BXqKnOKLPhWcH%2FIP0SOuOhUeEniJOjpTmUgOK8aJl2XF5QDRYoZQir0RiBBEVlfUoJV2JeSCo%2FYB88OcgHjk3kzBLmuFW4bM5zuRLTiSPFmw87F7OyGbvdedWuGeK6GjnUs5SSY%2B1fWK2KpiLQcgi8IjbsEI4lo%2BrO70vxtdMD23BvcEm88NjeEq8b0QIpI1Kzg%2FSrmrXkXjW6njcgSaU%2B9gr1tuWvU1CHuiRLT03O%2Bm9pA6RrGHx1c5R%2Fj%2BCI%2FA4BdKTUg2eMnmcEZfSODZj0GAI6mgdJt5By%2FK0KrLqUhY8Lm%2F9obaU0PaIx7aP8boDI0y3cxHocsb1oPjRyCwFHGy7IkSnsgW6LcwiZ0o9S9Hyf%2FZBx3pObuDfgU%2BWjoxVdfysO%2FCIbKbCGl5i%2FcPhNE3yyBGFS9qQigS2hHLYugPzuCiYUc%2BweeTJkkMFYYhM2XWEkaUPVB0ZLbxDeMLPJFaQ%2FXZCWmVcpUTtNAFmfurbZfRi4bLzZop2TYYPme8bTikCVj0VmOsFSD9BwG9I8b7vHR5GVRxRA5tiabYyRLt9KJ1m%2Fuj8yeGIXRtnQy4BiwAdcHhh0MZQbVLWPWc4w%2FmzIJYUhhk0KPl4TC3g8jEBjqkAZOB%2FNJ3uQJRhp0c%2Fp8ts26fH%2BLbAQ9FQf0UGlU%2F%2BNA28n%2FnEBH%2FMuWKm86kjbP0E%2F7rt3SlPzG6Qbr8QynfrIeDSMNrwEGCmfq8IwdIcgQNrrosgZVp4EPjkpgAIWzMrwN%2FXMFS7j5PMsn29va8ZqZEQTxq6Z6YxCijrjcrX%2FPR4d5LzM8YxjC4uZt6o7jOFit1GVWSbbP6D2mpXGC10nvpJWye&X-Amz-Signature=ed13e19495eb2d99900b462cd7fdfc2bbbde4a2abc2af665007dd770c526778d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
