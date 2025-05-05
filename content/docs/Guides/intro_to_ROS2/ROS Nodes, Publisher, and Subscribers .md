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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5YOAES%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCntpnt0JYeUo4Wznoym1uF2XxsTlaqPOwLsqdJr0kapQIgYvBR86ztK5744sJfQR%2BL3Ec9x26qXJ0%2BXo9DwiIGQmkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLXznvfideKQSVv0JircAy8VpVNqQsGT7GvEswPhsSaqKjUEQ0PHXNTCPQW%2BjeCrMGWA6KzcB2R%2BckszO%2BEiS0i57U18gkcUdi4mV1y0EnUQtJW38%2Fsio3VKl7Gec81UyVtNXvAcSxi1KN4xfTsPbDolE66HxKoGfPAoyCXSnNDQ9T6TDi8uVHT7Q42mV9O8x8wHVcMnKKACkQqTZtGeN6sPqFRuEwKEvcSu0wXqwqO%2FTA64%2BFGJjymnpA2qbaJqvZgYkSttC1%2FG0RqbfzxnZEpfNLiSKK6IjF6rYcUBWBxdamvQwSSrgmFnU0gB9PcYOzBo6lmdbWez1oz75xg%2FGmxaXwnv%2BBWgs3JgQEVW%2B8U%2Foe7%2F3eAinoJYnxJU95WGLDZ70EXJFof82B6xk%2F%2B7b48TW4ZiE0Ql382mEusi2ZpnxnGXcd6MI67C%2F%2BLKM7j5gvxtO2W1q8hivVKVqbKr7rLAyWJQXxmpYVwZdOmJOwrWrM0l7h8GUzeAAQCOKY2lwD1yIkoNltmKV9iHkIkXGu20B7BO26bsu0H2gfXiCYmcvIjsEifeaQmpRfzUUhcVaXe7Y9FKfFFDt3gM9XUSh5UPXX%2FIQmSrB5d2FRrcFXOkz3iwRp5KPL5cZrr1O%2FucRVh3PSqVrQawzAjqMO2a4cAGOqUB37aeOC4lfzYCpyUNPFzYi9seUSf3wVJBaXk8fUd7jxFt5fSv%2BRZ7fuvcSxZjhSCSZQX7AgNTW4f7RXA9liLVMpzi5%2FyuWSKGIORNQQbpkQvtlmyO26BvIzu2sR6W1CkuIW6JW%2BLieaQqm7lxekyPW4m%2F0Nion%2F8xgf6cZvYvTuY08YF%2FBQrvAkUco0kFQoqFy5WwNfV7fLomH3owY006sdd9KIo8&X-Amz-Signature=6617883c33e05b2e3c3cce6e36b307582e584a26a4e2299ff2cc1b3c96296685&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5YOAES%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCntpnt0JYeUo4Wznoym1uF2XxsTlaqPOwLsqdJr0kapQIgYvBR86ztK5744sJfQR%2BL3Ec9x26qXJ0%2BXo9DwiIGQmkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLXznvfideKQSVv0JircAy8VpVNqQsGT7GvEswPhsSaqKjUEQ0PHXNTCPQW%2BjeCrMGWA6KzcB2R%2BckszO%2BEiS0i57U18gkcUdi4mV1y0EnUQtJW38%2Fsio3VKl7Gec81UyVtNXvAcSxi1KN4xfTsPbDolE66HxKoGfPAoyCXSnNDQ9T6TDi8uVHT7Q42mV9O8x8wHVcMnKKACkQqTZtGeN6sPqFRuEwKEvcSu0wXqwqO%2FTA64%2BFGJjymnpA2qbaJqvZgYkSttC1%2FG0RqbfzxnZEpfNLiSKK6IjF6rYcUBWBxdamvQwSSrgmFnU0gB9PcYOzBo6lmdbWez1oz75xg%2FGmxaXwnv%2BBWgs3JgQEVW%2B8U%2Foe7%2F3eAinoJYnxJU95WGLDZ70EXJFof82B6xk%2F%2B7b48TW4ZiE0Ql382mEusi2ZpnxnGXcd6MI67C%2F%2BLKM7j5gvxtO2W1q8hivVKVqbKr7rLAyWJQXxmpYVwZdOmJOwrWrM0l7h8GUzeAAQCOKY2lwD1yIkoNltmKV9iHkIkXGu20B7BO26bsu0H2gfXiCYmcvIjsEifeaQmpRfzUUhcVaXe7Y9FKfFFDt3gM9XUSh5UPXX%2FIQmSrB5d2FRrcFXOkz3iwRp5KPL5cZrr1O%2FucRVh3PSqVrQawzAjqMO2a4cAGOqUB37aeOC4lfzYCpyUNPFzYi9seUSf3wVJBaXk8fUd7jxFt5fSv%2BRZ7fuvcSxZjhSCSZQX7AgNTW4f7RXA9liLVMpzi5%2FyuWSKGIORNQQbpkQvtlmyO26BvIzu2sR6W1CkuIW6JW%2BLieaQqm7lxekyPW4m%2F0Nion%2F8xgf6cZvYvTuY08YF%2FBQrvAkUco0kFQoqFy5WwNfV7fLomH3owY006sdd9KIo8&X-Amz-Signature=245eb4a30ef1159811fbc7fc392ce2868c70b66760ace1587eddd73e15363960&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5YOAES%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCntpnt0JYeUo4Wznoym1uF2XxsTlaqPOwLsqdJr0kapQIgYvBR86ztK5744sJfQR%2BL3Ec9x26qXJ0%2BXo9DwiIGQmkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLXznvfideKQSVv0JircAy8VpVNqQsGT7GvEswPhsSaqKjUEQ0PHXNTCPQW%2BjeCrMGWA6KzcB2R%2BckszO%2BEiS0i57U18gkcUdi4mV1y0EnUQtJW38%2Fsio3VKl7Gec81UyVtNXvAcSxi1KN4xfTsPbDolE66HxKoGfPAoyCXSnNDQ9T6TDi8uVHT7Q42mV9O8x8wHVcMnKKACkQqTZtGeN6sPqFRuEwKEvcSu0wXqwqO%2FTA64%2BFGJjymnpA2qbaJqvZgYkSttC1%2FG0RqbfzxnZEpfNLiSKK6IjF6rYcUBWBxdamvQwSSrgmFnU0gB9PcYOzBo6lmdbWez1oz75xg%2FGmxaXwnv%2BBWgs3JgQEVW%2B8U%2Foe7%2F3eAinoJYnxJU95WGLDZ70EXJFof82B6xk%2F%2B7b48TW4ZiE0Ql382mEusi2ZpnxnGXcd6MI67C%2F%2BLKM7j5gvxtO2W1q8hivVKVqbKr7rLAyWJQXxmpYVwZdOmJOwrWrM0l7h8GUzeAAQCOKY2lwD1yIkoNltmKV9iHkIkXGu20B7BO26bsu0H2gfXiCYmcvIjsEifeaQmpRfzUUhcVaXe7Y9FKfFFDt3gM9XUSh5UPXX%2FIQmSrB5d2FRrcFXOkz3iwRp5KPL5cZrr1O%2FucRVh3PSqVrQawzAjqMO2a4cAGOqUB37aeOC4lfzYCpyUNPFzYi9seUSf3wVJBaXk8fUd7jxFt5fSv%2BRZ7fuvcSxZjhSCSZQX7AgNTW4f7RXA9liLVMpzi5%2FyuWSKGIORNQQbpkQvtlmyO26BvIzu2sR6W1CkuIW6JW%2BLieaQqm7lxekyPW4m%2F0Nion%2F8xgf6cZvYvTuY08YF%2FBQrvAkUco0kFQoqFy5WwNfV7fLomH3owY006sdd9KIo8&X-Amz-Signature=b2bb55936ae2b122add2090f0ca7f20a2604de1cbf835b7a3391c05ee5261528&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5YOAES%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCntpnt0JYeUo4Wznoym1uF2XxsTlaqPOwLsqdJr0kapQIgYvBR86ztK5744sJfQR%2BL3Ec9x26qXJ0%2BXo9DwiIGQmkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLXznvfideKQSVv0JircAy8VpVNqQsGT7GvEswPhsSaqKjUEQ0PHXNTCPQW%2BjeCrMGWA6KzcB2R%2BckszO%2BEiS0i57U18gkcUdi4mV1y0EnUQtJW38%2Fsio3VKl7Gec81UyVtNXvAcSxi1KN4xfTsPbDolE66HxKoGfPAoyCXSnNDQ9T6TDi8uVHT7Q42mV9O8x8wHVcMnKKACkQqTZtGeN6sPqFRuEwKEvcSu0wXqwqO%2FTA64%2BFGJjymnpA2qbaJqvZgYkSttC1%2FG0RqbfzxnZEpfNLiSKK6IjF6rYcUBWBxdamvQwSSrgmFnU0gB9PcYOzBo6lmdbWez1oz75xg%2FGmxaXwnv%2BBWgs3JgQEVW%2B8U%2Foe7%2F3eAinoJYnxJU95WGLDZ70EXJFof82B6xk%2F%2B7b48TW4ZiE0Ql382mEusi2ZpnxnGXcd6MI67C%2F%2BLKM7j5gvxtO2W1q8hivVKVqbKr7rLAyWJQXxmpYVwZdOmJOwrWrM0l7h8GUzeAAQCOKY2lwD1yIkoNltmKV9iHkIkXGu20B7BO26bsu0H2gfXiCYmcvIjsEifeaQmpRfzUUhcVaXe7Y9FKfFFDt3gM9XUSh5UPXX%2FIQmSrB5d2FRrcFXOkz3iwRp5KPL5cZrr1O%2FucRVh3PSqVrQawzAjqMO2a4cAGOqUB37aeOC4lfzYCpyUNPFzYi9seUSf3wVJBaXk8fUd7jxFt5fSv%2BRZ7fuvcSxZjhSCSZQX7AgNTW4f7RXA9liLVMpzi5%2FyuWSKGIORNQQbpkQvtlmyO26BvIzu2sR6W1CkuIW6JW%2BLieaQqm7lxekyPW4m%2F0Nion%2F8xgf6cZvYvTuY08YF%2FBQrvAkUco0kFQoqFy5WwNfV7fLomH3owY006sdd9KIo8&X-Amz-Signature=9d8e8f0cc3f2d39c3ba2d2b99d9d67e8dd17856265d595f3b37d63595c87dc69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5YOAES%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCntpnt0JYeUo4Wznoym1uF2XxsTlaqPOwLsqdJr0kapQIgYvBR86ztK5744sJfQR%2BL3Ec9x26qXJ0%2BXo9DwiIGQmkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLXznvfideKQSVv0JircAy8VpVNqQsGT7GvEswPhsSaqKjUEQ0PHXNTCPQW%2BjeCrMGWA6KzcB2R%2BckszO%2BEiS0i57U18gkcUdi4mV1y0EnUQtJW38%2Fsio3VKl7Gec81UyVtNXvAcSxi1KN4xfTsPbDolE66HxKoGfPAoyCXSnNDQ9T6TDi8uVHT7Q42mV9O8x8wHVcMnKKACkQqTZtGeN6sPqFRuEwKEvcSu0wXqwqO%2FTA64%2BFGJjymnpA2qbaJqvZgYkSttC1%2FG0RqbfzxnZEpfNLiSKK6IjF6rYcUBWBxdamvQwSSrgmFnU0gB9PcYOzBo6lmdbWez1oz75xg%2FGmxaXwnv%2BBWgs3JgQEVW%2B8U%2Foe7%2F3eAinoJYnxJU95WGLDZ70EXJFof82B6xk%2F%2B7b48TW4ZiE0Ql382mEusi2ZpnxnGXcd6MI67C%2F%2BLKM7j5gvxtO2W1q8hivVKVqbKr7rLAyWJQXxmpYVwZdOmJOwrWrM0l7h8GUzeAAQCOKY2lwD1yIkoNltmKV9iHkIkXGu20B7BO26bsu0H2gfXiCYmcvIjsEifeaQmpRfzUUhcVaXe7Y9FKfFFDt3gM9XUSh5UPXX%2FIQmSrB5d2FRrcFXOkz3iwRp5KPL5cZrr1O%2FucRVh3PSqVrQawzAjqMO2a4cAGOqUB37aeOC4lfzYCpyUNPFzYi9seUSf3wVJBaXk8fUd7jxFt5fSv%2BRZ7fuvcSxZjhSCSZQX7AgNTW4f7RXA9liLVMpzi5%2FyuWSKGIORNQQbpkQvtlmyO26BvIzu2sR6W1CkuIW6JW%2BLieaQqm7lxekyPW4m%2F0Nion%2F8xgf6cZvYvTuY08YF%2FBQrvAkUco0kFQoqFy5WwNfV7fLomH3owY006sdd9KIo8&X-Amz-Signature=4854f2c572e11bba111bed06975269af0a8afd6441e01b9b6dfb237158756b05&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5YOAES%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCntpnt0JYeUo4Wznoym1uF2XxsTlaqPOwLsqdJr0kapQIgYvBR86ztK5744sJfQR%2BL3Ec9x26qXJ0%2BXo9DwiIGQmkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLXznvfideKQSVv0JircAy8VpVNqQsGT7GvEswPhsSaqKjUEQ0PHXNTCPQW%2BjeCrMGWA6KzcB2R%2BckszO%2BEiS0i57U18gkcUdi4mV1y0EnUQtJW38%2Fsio3VKl7Gec81UyVtNXvAcSxi1KN4xfTsPbDolE66HxKoGfPAoyCXSnNDQ9T6TDi8uVHT7Q42mV9O8x8wHVcMnKKACkQqTZtGeN6sPqFRuEwKEvcSu0wXqwqO%2FTA64%2BFGJjymnpA2qbaJqvZgYkSttC1%2FG0RqbfzxnZEpfNLiSKK6IjF6rYcUBWBxdamvQwSSrgmFnU0gB9PcYOzBo6lmdbWez1oz75xg%2FGmxaXwnv%2BBWgs3JgQEVW%2B8U%2Foe7%2F3eAinoJYnxJU95WGLDZ70EXJFof82B6xk%2F%2B7b48TW4ZiE0Ql382mEusi2ZpnxnGXcd6MI67C%2F%2BLKM7j5gvxtO2W1q8hivVKVqbKr7rLAyWJQXxmpYVwZdOmJOwrWrM0l7h8GUzeAAQCOKY2lwD1yIkoNltmKV9iHkIkXGu20B7BO26bsu0H2gfXiCYmcvIjsEifeaQmpRfzUUhcVaXe7Y9FKfFFDt3gM9XUSh5UPXX%2FIQmSrB5d2FRrcFXOkz3iwRp5KPL5cZrr1O%2FucRVh3PSqVrQawzAjqMO2a4cAGOqUB37aeOC4lfzYCpyUNPFzYi9seUSf3wVJBaXk8fUd7jxFt5fSv%2BRZ7fuvcSxZjhSCSZQX7AgNTW4f7RXA9liLVMpzi5%2FyuWSKGIORNQQbpkQvtlmyO26BvIzu2sR6W1CkuIW6JW%2BLieaQqm7lxekyPW4m%2F0Nion%2F8xgf6cZvYvTuY08YF%2FBQrvAkUco0kFQoqFy5WwNfV7fLomH3owY006sdd9KIo8&X-Amz-Signature=7756ab5a98614955fcf8e48ee60904b10720b09d703441ac165700f7d9cf4b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5YOAES%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCntpnt0JYeUo4Wznoym1uF2XxsTlaqPOwLsqdJr0kapQIgYvBR86ztK5744sJfQR%2BL3Ec9x26qXJ0%2BXo9DwiIGQmkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLXznvfideKQSVv0JircAy8VpVNqQsGT7GvEswPhsSaqKjUEQ0PHXNTCPQW%2BjeCrMGWA6KzcB2R%2BckszO%2BEiS0i57U18gkcUdi4mV1y0EnUQtJW38%2Fsio3VKl7Gec81UyVtNXvAcSxi1KN4xfTsPbDolE66HxKoGfPAoyCXSnNDQ9T6TDi8uVHT7Q42mV9O8x8wHVcMnKKACkQqTZtGeN6sPqFRuEwKEvcSu0wXqwqO%2FTA64%2BFGJjymnpA2qbaJqvZgYkSttC1%2FG0RqbfzxnZEpfNLiSKK6IjF6rYcUBWBxdamvQwSSrgmFnU0gB9PcYOzBo6lmdbWez1oz75xg%2FGmxaXwnv%2BBWgs3JgQEVW%2B8U%2Foe7%2F3eAinoJYnxJU95WGLDZ70EXJFof82B6xk%2F%2B7b48TW4ZiE0Ql382mEusi2ZpnxnGXcd6MI67C%2F%2BLKM7j5gvxtO2W1q8hivVKVqbKr7rLAyWJQXxmpYVwZdOmJOwrWrM0l7h8GUzeAAQCOKY2lwD1yIkoNltmKV9iHkIkXGu20B7BO26bsu0H2gfXiCYmcvIjsEifeaQmpRfzUUhcVaXe7Y9FKfFFDt3gM9XUSh5UPXX%2FIQmSrB5d2FRrcFXOkz3iwRp5KPL5cZrr1O%2FucRVh3PSqVrQawzAjqMO2a4cAGOqUB37aeOC4lfzYCpyUNPFzYi9seUSf3wVJBaXk8fUd7jxFt5fSv%2BRZ7fuvcSxZjhSCSZQX7AgNTW4f7RXA9liLVMpzi5%2FyuWSKGIORNQQbpkQvtlmyO26BvIzu2sR6W1CkuIW6JW%2BLieaQqm7lxekyPW4m%2F0Nion%2F8xgf6cZvYvTuY08YF%2FBQrvAkUco0kFQoqFy5WwNfV7fLomH3owY006sdd9KIo8&X-Amz-Signature=a1ecc2edf8e21582340028d17f60d3ea21e5a2ce11ad0c8aac4b7818349dcd7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5YOAES%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCntpnt0JYeUo4Wznoym1uF2XxsTlaqPOwLsqdJr0kapQIgYvBR86ztK5744sJfQR%2BL3Ec9x26qXJ0%2BXo9DwiIGQmkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLXznvfideKQSVv0JircAy8VpVNqQsGT7GvEswPhsSaqKjUEQ0PHXNTCPQW%2BjeCrMGWA6KzcB2R%2BckszO%2BEiS0i57U18gkcUdi4mV1y0EnUQtJW38%2Fsio3VKl7Gec81UyVtNXvAcSxi1KN4xfTsPbDolE66HxKoGfPAoyCXSnNDQ9T6TDi8uVHT7Q42mV9O8x8wHVcMnKKACkQqTZtGeN6sPqFRuEwKEvcSu0wXqwqO%2FTA64%2BFGJjymnpA2qbaJqvZgYkSttC1%2FG0RqbfzxnZEpfNLiSKK6IjF6rYcUBWBxdamvQwSSrgmFnU0gB9PcYOzBo6lmdbWez1oz75xg%2FGmxaXwnv%2BBWgs3JgQEVW%2B8U%2Foe7%2F3eAinoJYnxJU95WGLDZ70EXJFof82B6xk%2F%2B7b48TW4ZiE0Ql382mEusi2ZpnxnGXcd6MI67C%2F%2BLKM7j5gvxtO2W1q8hivVKVqbKr7rLAyWJQXxmpYVwZdOmJOwrWrM0l7h8GUzeAAQCOKY2lwD1yIkoNltmKV9iHkIkXGu20B7BO26bsu0H2gfXiCYmcvIjsEifeaQmpRfzUUhcVaXe7Y9FKfFFDt3gM9XUSh5UPXX%2FIQmSrB5d2FRrcFXOkz3iwRp5KPL5cZrr1O%2FucRVh3PSqVrQawzAjqMO2a4cAGOqUB37aeOC4lfzYCpyUNPFzYi9seUSf3wVJBaXk8fUd7jxFt5fSv%2BRZ7fuvcSxZjhSCSZQX7AgNTW4f7RXA9liLVMpzi5%2FyuWSKGIORNQQbpkQvtlmyO26BvIzu2sR6W1CkuIW6JW%2BLieaQqm7lxekyPW4m%2F0Nion%2F8xgf6cZvYvTuY08YF%2FBQrvAkUco0kFQoqFy5WwNfV7fLomH3owY006sdd9KIo8&X-Amz-Signature=578b829e85bfb70a3a1e298e717afc90792cdbe384a36c9645631d393a87fc88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
