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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZRJH2S%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl656qAE8RolGurlpD%2FnUjntyBJkMSGMuJ9qNRrlg5YQIgGUfxhfWmZrsjiVefn6%2BR4x1TuVLff8Oe%2BVf007DK1xQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCbyp5vTA2cgKIbECrcA%2F68FJrV3Xeaopp%2Fw3cQHRRyEbV%2B%2F61lDvJH%2B9vE4L5PgOjHlwVFVC3AjbBdofRAZho5fyUj6tsnaqhrff8ArrRUbrNafkxiDzDI59C6CVYOpOATk%2F%2FpcsX%2BcBgKibiUy%2FmQXGXUB8C%2F8wNmVNLssjBjOcaxGy4yfbEilDlRpaNeTIs0Qi1bRm2qMtq6k1wpdt7yKTs%2F8A3JB0uACsncMN4ma9Xki0noWCcxUNWQ9KEjXnb6rX6Jn3a5WNEVVvmEoZkHHdnPFkUxttSuI1hVTu1QleCZZ4IPIb8ptONU2VWGTP3RPWGHbUusx6pCnaz9f2L1a%2FfPkUem6EV2Chogi8%2FX%2BvK9KFwWj2bV7YMcB8LRIffkWdF4fb1cK3ClMA3sgU5b3Z4ZSurS05lkeoKcZpSF6NMcHSjjwWAhw%2FYP26DM906o2YC1oFa2%2Bm%2F32FFny0l2w%2BBh1iMVSgI4IdYH%2Bl09%2F10Bxek7pE%2BeKvc8lxIwJiuwjJFgw9GCCVjux0J7kAu7IHFce3uunK4Q0Ed9CxmQk6TGYBy%2BysLlM5MGPaPT%2FwLc0P1CsFDx1QWIkxq0xR2zCfTJg92GA1rsnuF%2FeYCGzvo8fIbY1l5GZx5Pe6cwO4fm42njxjNUC1VfMIXlrMEGOqUBP5Gk2nR%2FqKIBOaBM765A%2FDRRhANL7lQpGvpVBnhoCYa7Cyulh74xbSKT49I%2F0rjwRfMClJclcrN6yWgGQf8aHOMgweHVxV%2BpSTWcHL5BtHvDnfwC4L4xAiXbg5vTvwpw0W%2FBhuXbWpihki4RgQCTBHEiYzPDiEzhmIoPX7Nd1OQYGmCqHsBMKlKFIW6VbcnlceyBLWlzcDHOVOwUw06ckUMtpPVk&X-Amz-Signature=98fbb530f1e0176f6f5839397ba3b150fac3b2ffd88440277e044c1d40e186f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZRJH2S%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl656qAE8RolGurlpD%2FnUjntyBJkMSGMuJ9qNRrlg5YQIgGUfxhfWmZrsjiVefn6%2BR4x1TuVLff8Oe%2BVf007DK1xQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCbyp5vTA2cgKIbECrcA%2F68FJrV3Xeaopp%2Fw3cQHRRyEbV%2B%2F61lDvJH%2B9vE4L5PgOjHlwVFVC3AjbBdofRAZho5fyUj6tsnaqhrff8ArrRUbrNafkxiDzDI59C6CVYOpOATk%2F%2FpcsX%2BcBgKibiUy%2FmQXGXUB8C%2F8wNmVNLssjBjOcaxGy4yfbEilDlRpaNeTIs0Qi1bRm2qMtq6k1wpdt7yKTs%2F8A3JB0uACsncMN4ma9Xki0noWCcxUNWQ9KEjXnb6rX6Jn3a5WNEVVvmEoZkHHdnPFkUxttSuI1hVTu1QleCZZ4IPIb8ptONU2VWGTP3RPWGHbUusx6pCnaz9f2L1a%2FfPkUem6EV2Chogi8%2FX%2BvK9KFwWj2bV7YMcB8LRIffkWdF4fb1cK3ClMA3sgU5b3Z4ZSurS05lkeoKcZpSF6NMcHSjjwWAhw%2FYP26DM906o2YC1oFa2%2Bm%2F32FFny0l2w%2BBh1iMVSgI4IdYH%2Bl09%2F10Bxek7pE%2BeKvc8lxIwJiuwjJFgw9GCCVjux0J7kAu7IHFce3uunK4Q0Ed9CxmQk6TGYBy%2BysLlM5MGPaPT%2FwLc0P1CsFDx1QWIkxq0xR2zCfTJg92GA1rsnuF%2FeYCGzvo8fIbY1l5GZx5Pe6cwO4fm42njxjNUC1VfMIXlrMEGOqUBP5Gk2nR%2FqKIBOaBM765A%2FDRRhANL7lQpGvpVBnhoCYa7Cyulh74xbSKT49I%2F0rjwRfMClJclcrN6yWgGQf8aHOMgweHVxV%2BpSTWcHL5BtHvDnfwC4L4xAiXbg5vTvwpw0W%2FBhuXbWpihki4RgQCTBHEiYzPDiEzhmIoPX7Nd1OQYGmCqHsBMKlKFIW6VbcnlceyBLWlzcDHOVOwUw06ckUMtpPVk&X-Amz-Signature=b5129794a826ef53e81f2207f891bb165db9152b3ce246e4c6f528e01757e787&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZRJH2S%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl656qAE8RolGurlpD%2FnUjntyBJkMSGMuJ9qNRrlg5YQIgGUfxhfWmZrsjiVefn6%2BR4x1TuVLff8Oe%2BVf007DK1xQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCbyp5vTA2cgKIbECrcA%2F68FJrV3Xeaopp%2Fw3cQHRRyEbV%2B%2F61lDvJH%2B9vE4L5PgOjHlwVFVC3AjbBdofRAZho5fyUj6tsnaqhrff8ArrRUbrNafkxiDzDI59C6CVYOpOATk%2F%2FpcsX%2BcBgKibiUy%2FmQXGXUB8C%2F8wNmVNLssjBjOcaxGy4yfbEilDlRpaNeTIs0Qi1bRm2qMtq6k1wpdt7yKTs%2F8A3JB0uACsncMN4ma9Xki0noWCcxUNWQ9KEjXnb6rX6Jn3a5WNEVVvmEoZkHHdnPFkUxttSuI1hVTu1QleCZZ4IPIb8ptONU2VWGTP3RPWGHbUusx6pCnaz9f2L1a%2FfPkUem6EV2Chogi8%2FX%2BvK9KFwWj2bV7YMcB8LRIffkWdF4fb1cK3ClMA3sgU5b3Z4ZSurS05lkeoKcZpSF6NMcHSjjwWAhw%2FYP26DM906o2YC1oFa2%2Bm%2F32FFny0l2w%2BBh1iMVSgI4IdYH%2Bl09%2F10Bxek7pE%2BeKvc8lxIwJiuwjJFgw9GCCVjux0J7kAu7IHFce3uunK4Q0Ed9CxmQk6TGYBy%2BysLlM5MGPaPT%2FwLc0P1CsFDx1QWIkxq0xR2zCfTJg92GA1rsnuF%2FeYCGzvo8fIbY1l5GZx5Pe6cwO4fm42njxjNUC1VfMIXlrMEGOqUBP5Gk2nR%2FqKIBOaBM765A%2FDRRhANL7lQpGvpVBnhoCYa7Cyulh74xbSKT49I%2F0rjwRfMClJclcrN6yWgGQf8aHOMgweHVxV%2BpSTWcHL5BtHvDnfwC4L4xAiXbg5vTvwpw0W%2FBhuXbWpihki4RgQCTBHEiYzPDiEzhmIoPX7Nd1OQYGmCqHsBMKlKFIW6VbcnlceyBLWlzcDHOVOwUw06ckUMtpPVk&X-Amz-Signature=6121d1a82e00e0f00d1cc07a4db250af538c946995b84d36229d582c0dea6fa9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZRJH2S%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl656qAE8RolGurlpD%2FnUjntyBJkMSGMuJ9qNRrlg5YQIgGUfxhfWmZrsjiVefn6%2BR4x1TuVLff8Oe%2BVf007DK1xQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCbyp5vTA2cgKIbECrcA%2F68FJrV3Xeaopp%2Fw3cQHRRyEbV%2B%2F61lDvJH%2B9vE4L5PgOjHlwVFVC3AjbBdofRAZho5fyUj6tsnaqhrff8ArrRUbrNafkxiDzDI59C6CVYOpOATk%2F%2FpcsX%2BcBgKibiUy%2FmQXGXUB8C%2F8wNmVNLssjBjOcaxGy4yfbEilDlRpaNeTIs0Qi1bRm2qMtq6k1wpdt7yKTs%2F8A3JB0uACsncMN4ma9Xki0noWCcxUNWQ9KEjXnb6rX6Jn3a5WNEVVvmEoZkHHdnPFkUxttSuI1hVTu1QleCZZ4IPIb8ptONU2VWGTP3RPWGHbUusx6pCnaz9f2L1a%2FfPkUem6EV2Chogi8%2FX%2BvK9KFwWj2bV7YMcB8LRIffkWdF4fb1cK3ClMA3sgU5b3Z4ZSurS05lkeoKcZpSF6NMcHSjjwWAhw%2FYP26DM906o2YC1oFa2%2Bm%2F32FFny0l2w%2BBh1iMVSgI4IdYH%2Bl09%2F10Bxek7pE%2BeKvc8lxIwJiuwjJFgw9GCCVjux0J7kAu7IHFce3uunK4Q0Ed9CxmQk6TGYBy%2BysLlM5MGPaPT%2FwLc0P1CsFDx1QWIkxq0xR2zCfTJg92GA1rsnuF%2FeYCGzvo8fIbY1l5GZx5Pe6cwO4fm42njxjNUC1VfMIXlrMEGOqUBP5Gk2nR%2FqKIBOaBM765A%2FDRRhANL7lQpGvpVBnhoCYa7Cyulh74xbSKT49I%2F0rjwRfMClJclcrN6yWgGQf8aHOMgweHVxV%2BpSTWcHL5BtHvDnfwC4L4xAiXbg5vTvwpw0W%2FBhuXbWpihki4RgQCTBHEiYzPDiEzhmIoPX7Nd1OQYGmCqHsBMKlKFIW6VbcnlceyBLWlzcDHOVOwUw06ckUMtpPVk&X-Amz-Signature=267a1e21629a68e797fc351f658d6711a34d0f0e79c08b00c1a34dd56ad7015a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZRJH2S%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl656qAE8RolGurlpD%2FnUjntyBJkMSGMuJ9qNRrlg5YQIgGUfxhfWmZrsjiVefn6%2BR4x1TuVLff8Oe%2BVf007DK1xQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCbyp5vTA2cgKIbECrcA%2F68FJrV3Xeaopp%2Fw3cQHRRyEbV%2B%2F61lDvJH%2B9vE4L5PgOjHlwVFVC3AjbBdofRAZho5fyUj6tsnaqhrff8ArrRUbrNafkxiDzDI59C6CVYOpOATk%2F%2FpcsX%2BcBgKibiUy%2FmQXGXUB8C%2F8wNmVNLssjBjOcaxGy4yfbEilDlRpaNeTIs0Qi1bRm2qMtq6k1wpdt7yKTs%2F8A3JB0uACsncMN4ma9Xki0noWCcxUNWQ9KEjXnb6rX6Jn3a5WNEVVvmEoZkHHdnPFkUxttSuI1hVTu1QleCZZ4IPIb8ptONU2VWGTP3RPWGHbUusx6pCnaz9f2L1a%2FfPkUem6EV2Chogi8%2FX%2BvK9KFwWj2bV7YMcB8LRIffkWdF4fb1cK3ClMA3sgU5b3Z4ZSurS05lkeoKcZpSF6NMcHSjjwWAhw%2FYP26DM906o2YC1oFa2%2Bm%2F32FFny0l2w%2BBh1iMVSgI4IdYH%2Bl09%2F10Bxek7pE%2BeKvc8lxIwJiuwjJFgw9GCCVjux0J7kAu7IHFce3uunK4Q0Ed9CxmQk6TGYBy%2BysLlM5MGPaPT%2FwLc0P1CsFDx1QWIkxq0xR2zCfTJg92GA1rsnuF%2FeYCGzvo8fIbY1l5GZx5Pe6cwO4fm42njxjNUC1VfMIXlrMEGOqUBP5Gk2nR%2FqKIBOaBM765A%2FDRRhANL7lQpGvpVBnhoCYa7Cyulh74xbSKT49I%2F0rjwRfMClJclcrN6yWgGQf8aHOMgweHVxV%2BpSTWcHL5BtHvDnfwC4L4xAiXbg5vTvwpw0W%2FBhuXbWpihki4RgQCTBHEiYzPDiEzhmIoPX7Nd1OQYGmCqHsBMKlKFIW6VbcnlceyBLWlzcDHOVOwUw06ckUMtpPVk&X-Amz-Signature=a5a50e2c54348310270cb4e16c3d0a7318221128435cf9e45d041c33b9e17de8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZRJH2S%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl656qAE8RolGurlpD%2FnUjntyBJkMSGMuJ9qNRrlg5YQIgGUfxhfWmZrsjiVefn6%2BR4x1TuVLff8Oe%2BVf007DK1xQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCbyp5vTA2cgKIbECrcA%2F68FJrV3Xeaopp%2Fw3cQHRRyEbV%2B%2F61lDvJH%2B9vE4L5PgOjHlwVFVC3AjbBdofRAZho5fyUj6tsnaqhrff8ArrRUbrNafkxiDzDI59C6CVYOpOATk%2F%2FpcsX%2BcBgKibiUy%2FmQXGXUB8C%2F8wNmVNLssjBjOcaxGy4yfbEilDlRpaNeTIs0Qi1bRm2qMtq6k1wpdt7yKTs%2F8A3JB0uACsncMN4ma9Xki0noWCcxUNWQ9KEjXnb6rX6Jn3a5WNEVVvmEoZkHHdnPFkUxttSuI1hVTu1QleCZZ4IPIb8ptONU2VWGTP3RPWGHbUusx6pCnaz9f2L1a%2FfPkUem6EV2Chogi8%2FX%2BvK9KFwWj2bV7YMcB8LRIffkWdF4fb1cK3ClMA3sgU5b3Z4ZSurS05lkeoKcZpSF6NMcHSjjwWAhw%2FYP26DM906o2YC1oFa2%2Bm%2F32FFny0l2w%2BBh1iMVSgI4IdYH%2Bl09%2F10Bxek7pE%2BeKvc8lxIwJiuwjJFgw9GCCVjux0J7kAu7IHFce3uunK4Q0Ed9CxmQk6TGYBy%2BysLlM5MGPaPT%2FwLc0P1CsFDx1QWIkxq0xR2zCfTJg92GA1rsnuF%2FeYCGzvo8fIbY1l5GZx5Pe6cwO4fm42njxjNUC1VfMIXlrMEGOqUBP5Gk2nR%2FqKIBOaBM765A%2FDRRhANL7lQpGvpVBnhoCYa7Cyulh74xbSKT49I%2F0rjwRfMClJclcrN6yWgGQf8aHOMgweHVxV%2BpSTWcHL5BtHvDnfwC4L4xAiXbg5vTvwpw0W%2FBhuXbWpihki4RgQCTBHEiYzPDiEzhmIoPX7Nd1OQYGmCqHsBMKlKFIW6VbcnlceyBLWlzcDHOVOwUw06ckUMtpPVk&X-Amz-Signature=44c772aeb245d9fd2639352e13d23efa78aa1392d50e01100ecd337c451b1049&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZRJH2S%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl656qAE8RolGurlpD%2FnUjntyBJkMSGMuJ9qNRrlg5YQIgGUfxhfWmZrsjiVefn6%2BR4x1TuVLff8Oe%2BVf007DK1xQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCbyp5vTA2cgKIbECrcA%2F68FJrV3Xeaopp%2Fw3cQHRRyEbV%2B%2F61lDvJH%2B9vE4L5PgOjHlwVFVC3AjbBdofRAZho5fyUj6tsnaqhrff8ArrRUbrNafkxiDzDI59C6CVYOpOATk%2F%2FpcsX%2BcBgKibiUy%2FmQXGXUB8C%2F8wNmVNLssjBjOcaxGy4yfbEilDlRpaNeTIs0Qi1bRm2qMtq6k1wpdt7yKTs%2F8A3JB0uACsncMN4ma9Xki0noWCcxUNWQ9KEjXnb6rX6Jn3a5WNEVVvmEoZkHHdnPFkUxttSuI1hVTu1QleCZZ4IPIb8ptONU2VWGTP3RPWGHbUusx6pCnaz9f2L1a%2FfPkUem6EV2Chogi8%2FX%2BvK9KFwWj2bV7YMcB8LRIffkWdF4fb1cK3ClMA3sgU5b3Z4ZSurS05lkeoKcZpSF6NMcHSjjwWAhw%2FYP26DM906o2YC1oFa2%2Bm%2F32FFny0l2w%2BBh1iMVSgI4IdYH%2Bl09%2F10Bxek7pE%2BeKvc8lxIwJiuwjJFgw9GCCVjux0J7kAu7IHFce3uunK4Q0Ed9CxmQk6TGYBy%2BysLlM5MGPaPT%2FwLc0P1CsFDx1QWIkxq0xR2zCfTJg92GA1rsnuF%2FeYCGzvo8fIbY1l5GZx5Pe6cwO4fm42njxjNUC1VfMIXlrMEGOqUBP5Gk2nR%2FqKIBOaBM765A%2FDRRhANL7lQpGvpVBnhoCYa7Cyulh74xbSKT49I%2F0rjwRfMClJclcrN6yWgGQf8aHOMgweHVxV%2BpSTWcHL5BtHvDnfwC4L4xAiXbg5vTvwpw0W%2FBhuXbWpihki4RgQCTBHEiYzPDiEzhmIoPX7Nd1OQYGmCqHsBMKlKFIW6VbcnlceyBLWlzcDHOVOwUw06ckUMtpPVk&X-Amz-Signature=921fc839c94d7c0eeeeb683f52bbd57d1080efd0e7987386a973ffb40ed331ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZRJH2S%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl656qAE8RolGurlpD%2FnUjntyBJkMSGMuJ9qNRrlg5YQIgGUfxhfWmZrsjiVefn6%2BR4x1TuVLff8Oe%2BVf007DK1xQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCbyp5vTA2cgKIbECrcA%2F68FJrV3Xeaopp%2Fw3cQHRRyEbV%2B%2F61lDvJH%2B9vE4L5PgOjHlwVFVC3AjbBdofRAZho5fyUj6tsnaqhrff8ArrRUbrNafkxiDzDI59C6CVYOpOATk%2F%2FpcsX%2BcBgKibiUy%2FmQXGXUB8C%2F8wNmVNLssjBjOcaxGy4yfbEilDlRpaNeTIs0Qi1bRm2qMtq6k1wpdt7yKTs%2F8A3JB0uACsncMN4ma9Xki0noWCcxUNWQ9KEjXnb6rX6Jn3a5WNEVVvmEoZkHHdnPFkUxttSuI1hVTu1QleCZZ4IPIb8ptONU2VWGTP3RPWGHbUusx6pCnaz9f2L1a%2FfPkUem6EV2Chogi8%2FX%2BvK9KFwWj2bV7YMcB8LRIffkWdF4fb1cK3ClMA3sgU5b3Z4ZSurS05lkeoKcZpSF6NMcHSjjwWAhw%2FYP26DM906o2YC1oFa2%2Bm%2F32FFny0l2w%2BBh1iMVSgI4IdYH%2Bl09%2F10Bxek7pE%2BeKvc8lxIwJiuwjJFgw9GCCVjux0J7kAu7IHFce3uunK4Q0Ed9CxmQk6TGYBy%2BysLlM5MGPaPT%2FwLc0P1CsFDx1QWIkxq0xR2zCfTJg92GA1rsnuF%2FeYCGzvo8fIbY1l5GZx5Pe6cwO4fm42njxjNUC1VfMIXlrMEGOqUBP5Gk2nR%2FqKIBOaBM765A%2FDRRhANL7lQpGvpVBnhoCYa7Cyulh74xbSKT49I%2F0rjwRfMClJclcrN6yWgGQf8aHOMgweHVxV%2BpSTWcHL5BtHvDnfwC4L4xAiXbg5vTvwpw0W%2FBhuXbWpihki4RgQCTBHEiYzPDiEzhmIoPX7Nd1OQYGmCqHsBMKlKFIW6VbcnlceyBLWlzcDHOVOwUw06ckUMtpPVk&X-Amz-Signature=8e1c4acef926697398dbd6a6457302597eb26aca5e0e0ccc3dd61fdeb01dc5e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
