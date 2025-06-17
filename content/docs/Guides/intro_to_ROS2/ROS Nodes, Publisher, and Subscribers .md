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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOEVB2MG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYPMYcqb3nmyFpoxO%2BtG7U2nXfzH0yf%2F4HSxcXmKXTeQIhAJ64PvLhgMGOecMw4qWWW6fQf9%2BJ%2F%2B3GiImmUguWd1cfKv8DCG4QABoMNjM3NDIzMTgzODA1IgzZ8lsoSwkNgoQR3igq3APDRhHNP2%2F369Yhi1nZn7bZq3r4S75Uu3RGupYocQp2CRFUhIZXmtzLP0niNBWeQ0CsmhzYpOF6VZ6i4KyofQEpCt%2FZ%2FeIOEPulVS9DJ2YYufqJBHtVWB%2FNfNgDFGr1JCW5qc4JZYBY7V1Fss11jYFlQB5UHDvqAhDKqxieQ5AzLXYxx8Q6lxp8gf31uCJKgjJVTbvp2pjRHhxY7ubtZA8cQUtNB3W80tA14QtbKXHsu%2FOhml7H0rBLs05vPAHEhXJyirNYx62h%2Fb7nx2t44SJtwCsuAZ0d14I5jfoTVpbgRi1REdqFpU7kT2kS1whwVUSRVvr4v3OGwyU7u0nrbJ3EYnXPNh56m2yFoirzujbD3CTWK5vFoVfvrbohfSZIix0FEqFDxEecFfnr%2F0tDWDIzVJYoiwyI4ztQeux6RLkYHlpFfVNb0BELxAfDpk5H4jrpMqVpzJ5a4xC%2FuWPFxi0fI4uVJj%2Fq4RM3lxO1ONtBPLk4uhLXHBCDDuteB2P1GTstb%2Br42rjMki6MbEQ07aY%2Bf9g0rgPzQ%2FJc7YrDj6ELCMj3mZQ4ohcxfD%2F11S2OQuUEZnrjNUAzmFYjANmfXdQKOoTZEzdz8KMUutTnq9FzUJaphLO6m%2FGwIXzGuTDR7MPCBjqkATVCW%2FLsSpgppwgIH5yMl4xHuLSEKTJ7WkicV51JuZd293Bm6521l2cC2nA4hrppuV5IaT13iugIuh2JRr%2FYUdod%2BuVqNvi8LVpoDnRYkL1MxePhdeVN%2BlAtp3nIRRBanfWvsRYl7C68xqKGdxa0db3r5ySbVHXpMXGgiHRqZO0OYYsJsOg1YFu7CLEjdmR4l6IXyj6L2pFToMOO8cZO5HTAU%2BYn&X-Amz-Signature=064be09f5644ec1e9ad05da4d94a6c708c6d61be8739aeb6628bf36062b5c789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOEVB2MG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYPMYcqb3nmyFpoxO%2BtG7U2nXfzH0yf%2F4HSxcXmKXTeQIhAJ64PvLhgMGOecMw4qWWW6fQf9%2BJ%2F%2B3GiImmUguWd1cfKv8DCG4QABoMNjM3NDIzMTgzODA1IgzZ8lsoSwkNgoQR3igq3APDRhHNP2%2F369Yhi1nZn7bZq3r4S75Uu3RGupYocQp2CRFUhIZXmtzLP0niNBWeQ0CsmhzYpOF6VZ6i4KyofQEpCt%2FZ%2FeIOEPulVS9DJ2YYufqJBHtVWB%2FNfNgDFGr1JCW5qc4JZYBY7V1Fss11jYFlQB5UHDvqAhDKqxieQ5AzLXYxx8Q6lxp8gf31uCJKgjJVTbvp2pjRHhxY7ubtZA8cQUtNB3W80tA14QtbKXHsu%2FOhml7H0rBLs05vPAHEhXJyirNYx62h%2Fb7nx2t44SJtwCsuAZ0d14I5jfoTVpbgRi1REdqFpU7kT2kS1whwVUSRVvr4v3OGwyU7u0nrbJ3EYnXPNh56m2yFoirzujbD3CTWK5vFoVfvrbohfSZIix0FEqFDxEecFfnr%2F0tDWDIzVJYoiwyI4ztQeux6RLkYHlpFfVNb0BELxAfDpk5H4jrpMqVpzJ5a4xC%2FuWPFxi0fI4uVJj%2Fq4RM3lxO1ONtBPLk4uhLXHBCDDuteB2P1GTstb%2Br42rjMki6MbEQ07aY%2Bf9g0rgPzQ%2FJc7YrDj6ELCMj3mZQ4ohcxfD%2F11S2OQuUEZnrjNUAzmFYjANmfXdQKOoTZEzdz8KMUutTnq9FzUJaphLO6m%2FGwIXzGuTDR7MPCBjqkATVCW%2FLsSpgppwgIH5yMl4xHuLSEKTJ7WkicV51JuZd293Bm6521l2cC2nA4hrppuV5IaT13iugIuh2JRr%2FYUdod%2BuVqNvi8LVpoDnRYkL1MxePhdeVN%2BlAtp3nIRRBanfWvsRYl7C68xqKGdxa0db3r5ySbVHXpMXGgiHRqZO0OYYsJsOg1YFu7CLEjdmR4l6IXyj6L2pFToMOO8cZO5HTAU%2BYn&X-Amz-Signature=e4802ec2af64319037d33129bc56b56cae7c13e403c3dd3215521b9b3872d3a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOEVB2MG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYPMYcqb3nmyFpoxO%2BtG7U2nXfzH0yf%2F4HSxcXmKXTeQIhAJ64PvLhgMGOecMw4qWWW6fQf9%2BJ%2F%2B3GiImmUguWd1cfKv8DCG4QABoMNjM3NDIzMTgzODA1IgzZ8lsoSwkNgoQR3igq3APDRhHNP2%2F369Yhi1nZn7bZq3r4S75Uu3RGupYocQp2CRFUhIZXmtzLP0niNBWeQ0CsmhzYpOF6VZ6i4KyofQEpCt%2FZ%2FeIOEPulVS9DJ2YYufqJBHtVWB%2FNfNgDFGr1JCW5qc4JZYBY7V1Fss11jYFlQB5UHDvqAhDKqxieQ5AzLXYxx8Q6lxp8gf31uCJKgjJVTbvp2pjRHhxY7ubtZA8cQUtNB3W80tA14QtbKXHsu%2FOhml7H0rBLs05vPAHEhXJyirNYx62h%2Fb7nx2t44SJtwCsuAZ0d14I5jfoTVpbgRi1REdqFpU7kT2kS1whwVUSRVvr4v3OGwyU7u0nrbJ3EYnXPNh56m2yFoirzujbD3CTWK5vFoVfvrbohfSZIix0FEqFDxEecFfnr%2F0tDWDIzVJYoiwyI4ztQeux6RLkYHlpFfVNb0BELxAfDpk5H4jrpMqVpzJ5a4xC%2FuWPFxi0fI4uVJj%2Fq4RM3lxO1ONtBPLk4uhLXHBCDDuteB2P1GTstb%2Br42rjMki6MbEQ07aY%2Bf9g0rgPzQ%2FJc7YrDj6ELCMj3mZQ4ohcxfD%2F11S2OQuUEZnrjNUAzmFYjANmfXdQKOoTZEzdz8KMUutTnq9FzUJaphLO6m%2FGwIXzGuTDR7MPCBjqkATVCW%2FLsSpgppwgIH5yMl4xHuLSEKTJ7WkicV51JuZd293Bm6521l2cC2nA4hrppuV5IaT13iugIuh2JRr%2FYUdod%2BuVqNvi8LVpoDnRYkL1MxePhdeVN%2BlAtp3nIRRBanfWvsRYl7C68xqKGdxa0db3r5ySbVHXpMXGgiHRqZO0OYYsJsOg1YFu7CLEjdmR4l6IXyj6L2pFToMOO8cZO5HTAU%2BYn&X-Amz-Signature=d6a955a67bff8753053ebf2fd4c1bb6ef3a45ff54849dbec6c08ea879cd59220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOEVB2MG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYPMYcqb3nmyFpoxO%2BtG7U2nXfzH0yf%2F4HSxcXmKXTeQIhAJ64PvLhgMGOecMw4qWWW6fQf9%2BJ%2F%2B3GiImmUguWd1cfKv8DCG4QABoMNjM3NDIzMTgzODA1IgzZ8lsoSwkNgoQR3igq3APDRhHNP2%2F369Yhi1nZn7bZq3r4S75Uu3RGupYocQp2CRFUhIZXmtzLP0niNBWeQ0CsmhzYpOF6VZ6i4KyofQEpCt%2FZ%2FeIOEPulVS9DJ2YYufqJBHtVWB%2FNfNgDFGr1JCW5qc4JZYBY7V1Fss11jYFlQB5UHDvqAhDKqxieQ5AzLXYxx8Q6lxp8gf31uCJKgjJVTbvp2pjRHhxY7ubtZA8cQUtNB3W80tA14QtbKXHsu%2FOhml7H0rBLs05vPAHEhXJyirNYx62h%2Fb7nx2t44SJtwCsuAZ0d14I5jfoTVpbgRi1REdqFpU7kT2kS1whwVUSRVvr4v3OGwyU7u0nrbJ3EYnXPNh56m2yFoirzujbD3CTWK5vFoVfvrbohfSZIix0FEqFDxEecFfnr%2F0tDWDIzVJYoiwyI4ztQeux6RLkYHlpFfVNb0BELxAfDpk5H4jrpMqVpzJ5a4xC%2FuWPFxi0fI4uVJj%2Fq4RM3lxO1ONtBPLk4uhLXHBCDDuteB2P1GTstb%2Br42rjMki6MbEQ07aY%2Bf9g0rgPzQ%2FJc7YrDj6ELCMj3mZQ4ohcxfD%2F11S2OQuUEZnrjNUAzmFYjANmfXdQKOoTZEzdz8KMUutTnq9FzUJaphLO6m%2FGwIXzGuTDR7MPCBjqkATVCW%2FLsSpgppwgIH5yMl4xHuLSEKTJ7WkicV51JuZd293Bm6521l2cC2nA4hrppuV5IaT13iugIuh2JRr%2FYUdod%2BuVqNvi8LVpoDnRYkL1MxePhdeVN%2BlAtp3nIRRBanfWvsRYl7C68xqKGdxa0db3r5ySbVHXpMXGgiHRqZO0OYYsJsOg1YFu7CLEjdmR4l6IXyj6L2pFToMOO8cZO5HTAU%2BYn&X-Amz-Signature=abfb726e09b2284a60e78d43a6adad41b6ba09d98286888503441abdc169c4c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOEVB2MG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYPMYcqb3nmyFpoxO%2BtG7U2nXfzH0yf%2F4HSxcXmKXTeQIhAJ64PvLhgMGOecMw4qWWW6fQf9%2BJ%2F%2B3GiImmUguWd1cfKv8DCG4QABoMNjM3NDIzMTgzODA1IgzZ8lsoSwkNgoQR3igq3APDRhHNP2%2F369Yhi1nZn7bZq3r4S75Uu3RGupYocQp2CRFUhIZXmtzLP0niNBWeQ0CsmhzYpOF6VZ6i4KyofQEpCt%2FZ%2FeIOEPulVS9DJ2YYufqJBHtVWB%2FNfNgDFGr1JCW5qc4JZYBY7V1Fss11jYFlQB5UHDvqAhDKqxieQ5AzLXYxx8Q6lxp8gf31uCJKgjJVTbvp2pjRHhxY7ubtZA8cQUtNB3W80tA14QtbKXHsu%2FOhml7H0rBLs05vPAHEhXJyirNYx62h%2Fb7nx2t44SJtwCsuAZ0d14I5jfoTVpbgRi1REdqFpU7kT2kS1whwVUSRVvr4v3OGwyU7u0nrbJ3EYnXPNh56m2yFoirzujbD3CTWK5vFoVfvrbohfSZIix0FEqFDxEecFfnr%2F0tDWDIzVJYoiwyI4ztQeux6RLkYHlpFfVNb0BELxAfDpk5H4jrpMqVpzJ5a4xC%2FuWPFxi0fI4uVJj%2Fq4RM3lxO1ONtBPLk4uhLXHBCDDuteB2P1GTstb%2Br42rjMki6MbEQ07aY%2Bf9g0rgPzQ%2FJc7YrDj6ELCMj3mZQ4ohcxfD%2F11S2OQuUEZnrjNUAzmFYjANmfXdQKOoTZEzdz8KMUutTnq9FzUJaphLO6m%2FGwIXzGuTDR7MPCBjqkATVCW%2FLsSpgppwgIH5yMl4xHuLSEKTJ7WkicV51JuZd293Bm6521l2cC2nA4hrppuV5IaT13iugIuh2JRr%2FYUdod%2BuVqNvi8LVpoDnRYkL1MxePhdeVN%2BlAtp3nIRRBanfWvsRYl7C68xqKGdxa0db3r5ySbVHXpMXGgiHRqZO0OYYsJsOg1YFu7CLEjdmR4l6IXyj6L2pFToMOO8cZO5HTAU%2BYn&X-Amz-Signature=6ff65bbfef866805dfa112746b4aed937f38af939ab39ef18809cd73fe9f8430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOEVB2MG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYPMYcqb3nmyFpoxO%2BtG7U2nXfzH0yf%2F4HSxcXmKXTeQIhAJ64PvLhgMGOecMw4qWWW6fQf9%2BJ%2F%2B3GiImmUguWd1cfKv8DCG4QABoMNjM3NDIzMTgzODA1IgzZ8lsoSwkNgoQR3igq3APDRhHNP2%2F369Yhi1nZn7bZq3r4S75Uu3RGupYocQp2CRFUhIZXmtzLP0niNBWeQ0CsmhzYpOF6VZ6i4KyofQEpCt%2FZ%2FeIOEPulVS9DJ2YYufqJBHtVWB%2FNfNgDFGr1JCW5qc4JZYBY7V1Fss11jYFlQB5UHDvqAhDKqxieQ5AzLXYxx8Q6lxp8gf31uCJKgjJVTbvp2pjRHhxY7ubtZA8cQUtNB3W80tA14QtbKXHsu%2FOhml7H0rBLs05vPAHEhXJyirNYx62h%2Fb7nx2t44SJtwCsuAZ0d14I5jfoTVpbgRi1REdqFpU7kT2kS1whwVUSRVvr4v3OGwyU7u0nrbJ3EYnXPNh56m2yFoirzujbD3CTWK5vFoVfvrbohfSZIix0FEqFDxEecFfnr%2F0tDWDIzVJYoiwyI4ztQeux6RLkYHlpFfVNb0BELxAfDpk5H4jrpMqVpzJ5a4xC%2FuWPFxi0fI4uVJj%2Fq4RM3lxO1ONtBPLk4uhLXHBCDDuteB2P1GTstb%2Br42rjMki6MbEQ07aY%2Bf9g0rgPzQ%2FJc7YrDj6ELCMj3mZQ4ohcxfD%2F11S2OQuUEZnrjNUAzmFYjANmfXdQKOoTZEzdz8KMUutTnq9FzUJaphLO6m%2FGwIXzGuTDR7MPCBjqkATVCW%2FLsSpgppwgIH5yMl4xHuLSEKTJ7WkicV51JuZd293Bm6521l2cC2nA4hrppuV5IaT13iugIuh2JRr%2FYUdod%2BuVqNvi8LVpoDnRYkL1MxePhdeVN%2BlAtp3nIRRBanfWvsRYl7C68xqKGdxa0db3r5ySbVHXpMXGgiHRqZO0OYYsJsOg1YFu7CLEjdmR4l6IXyj6L2pFToMOO8cZO5HTAU%2BYn&X-Amz-Signature=4bda198a28a330ab2a6062c4457ca018d2220ff18780f6bf6a1f8811caabb262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOEVB2MG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYPMYcqb3nmyFpoxO%2BtG7U2nXfzH0yf%2F4HSxcXmKXTeQIhAJ64PvLhgMGOecMw4qWWW6fQf9%2BJ%2F%2B3GiImmUguWd1cfKv8DCG4QABoMNjM3NDIzMTgzODA1IgzZ8lsoSwkNgoQR3igq3APDRhHNP2%2F369Yhi1nZn7bZq3r4S75Uu3RGupYocQp2CRFUhIZXmtzLP0niNBWeQ0CsmhzYpOF6VZ6i4KyofQEpCt%2FZ%2FeIOEPulVS9DJ2YYufqJBHtVWB%2FNfNgDFGr1JCW5qc4JZYBY7V1Fss11jYFlQB5UHDvqAhDKqxieQ5AzLXYxx8Q6lxp8gf31uCJKgjJVTbvp2pjRHhxY7ubtZA8cQUtNB3W80tA14QtbKXHsu%2FOhml7H0rBLs05vPAHEhXJyirNYx62h%2Fb7nx2t44SJtwCsuAZ0d14I5jfoTVpbgRi1REdqFpU7kT2kS1whwVUSRVvr4v3OGwyU7u0nrbJ3EYnXPNh56m2yFoirzujbD3CTWK5vFoVfvrbohfSZIix0FEqFDxEecFfnr%2F0tDWDIzVJYoiwyI4ztQeux6RLkYHlpFfVNb0BELxAfDpk5H4jrpMqVpzJ5a4xC%2FuWPFxi0fI4uVJj%2Fq4RM3lxO1ONtBPLk4uhLXHBCDDuteB2P1GTstb%2Br42rjMki6MbEQ07aY%2Bf9g0rgPzQ%2FJc7YrDj6ELCMj3mZQ4ohcxfD%2F11S2OQuUEZnrjNUAzmFYjANmfXdQKOoTZEzdz8KMUutTnq9FzUJaphLO6m%2FGwIXzGuTDR7MPCBjqkATVCW%2FLsSpgppwgIH5yMl4xHuLSEKTJ7WkicV51JuZd293Bm6521l2cC2nA4hrppuV5IaT13iugIuh2JRr%2FYUdod%2BuVqNvi8LVpoDnRYkL1MxePhdeVN%2BlAtp3nIRRBanfWvsRYl7C68xqKGdxa0db3r5ySbVHXpMXGgiHRqZO0OYYsJsOg1YFu7CLEjdmR4l6IXyj6L2pFToMOO8cZO5HTAU%2BYn&X-Amz-Signature=9af12dd632881f0a72a68d2ca09f57d71e1ed26839ace5199537611cd76a4f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOEVB2MG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYPMYcqb3nmyFpoxO%2BtG7U2nXfzH0yf%2F4HSxcXmKXTeQIhAJ64PvLhgMGOecMw4qWWW6fQf9%2BJ%2F%2B3GiImmUguWd1cfKv8DCG4QABoMNjM3NDIzMTgzODA1IgzZ8lsoSwkNgoQR3igq3APDRhHNP2%2F369Yhi1nZn7bZq3r4S75Uu3RGupYocQp2CRFUhIZXmtzLP0niNBWeQ0CsmhzYpOF6VZ6i4KyofQEpCt%2FZ%2FeIOEPulVS9DJ2YYufqJBHtVWB%2FNfNgDFGr1JCW5qc4JZYBY7V1Fss11jYFlQB5UHDvqAhDKqxieQ5AzLXYxx8Q6lxp8gf31uCJKgjJVTbvp2pjRHhxY7ubtZA8cQUtNB3W80tA14QtbKXHsu%2FOhml7H0rBLs05vPAHEhXJyirNYx62h%2Fb7nx2t44SJtwCsuAZ0d14I5jfoTVpbgRi1REdqFpU7kT2kS1whwVUSRVvr4v3OGwyU7u0nrbJ3EYnXPNh56m2yFoirzujbD3CTWK5vFoVfvrbohfSZIix0FEqFDxEecFfnr%2F0tDWDIzVJYoiwyI4ztQeux6RLkYHlpFfVNb0BELxAfDpk5H4jrpMqVpzJ5a4xC%2FuWPFxi0fI4uVJj%2Fq4RM3lxO1ONtBPLk4uhLXHBCDDuteB2P1GTstb%2Br42rjMki6MbEQ07aY%2Bf9g0rgPzQ%2FJc7YrDj6ELCMj3mZQ4ohcxfD%2F11S2OQuUEZnrjNUAzmFYjANmfXdQKOoTZEzdz8KMUutTnq9FzUJaphLO6m%2FGwIXzGuTDR7MPCBjqkATVCW%2FLsSpgppwgIH5yMl4xHuLSEKTJ7WkicV51JuZd293Bm6521l2cC2nA4hrppuV5IaT13iugIuh2JRr%2FYUdod%2BuVqNvi8LVpoDnRYkL1MxePhdeVN%2BlAtp3nIRRBanfWvsRYl7C68xqKGdxa0db3r5ySbVHXpMXGgiHRqZO0OYYsJsOg1YFu7CLEjdmR4l6IXyj6L2pFToMOO8cZO5HTAU%2BYn&X-Amz-Signature=dcd6875e6e7b0edf8d411cb41e69f7ff39a0102c07729de70e0019bed341a79e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
