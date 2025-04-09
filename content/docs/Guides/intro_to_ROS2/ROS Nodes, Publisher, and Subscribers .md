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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BWZ4LR%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICk3Gq4Lqf8fdHl3a6EqAE1UyoAe%2FbH1%2BtsH8uILGsUuAiAMMYmKhANqx6ej6qq4wyjuaewgXCAGm%2Fpgo6mhRF93ZSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggSfauVa0ZKiOSVjKtwDpA%2Fb937Kzoyr6weToPO471tvUFaC325ZylxJPAxAstykQ%2BGhk4kvustB5S%2BQWVyuoqxGM4LWvGVe3sIPvqRhNj6yQPI%2FVdanBzWjemPX1hbH2dld2HWs89tT%2Fr9EbBQriNgJDPjSm9HYUxulP8RzONZGbuN5vWJ29Fjf7EPb67UsQQi46f%2Bf13%2BILtSB2YAd4WAHb5RjkoMCm16KxJl2mc8WsbZZD8IgQbqf8ZeT8Ow5m%2By77KO8JRmIquVTU5Azc%2BSr413bi10bwbPg3Cy30%2BO5Es%2BH%2F2Be8U8CbXJYa7a1h0lG71YQIlVy6Rv92B8t7G49gf1NnDb8iuGofKdwLKVjdGjtbC2VB5db9lhgxrec8rNvLrTxJy%2BQ1OLU2MBtHIZAa09ELa9MU2ToeEQs2hyyaQvFY%2BUfTxlEk93LziXFfgRLE0qqZdaVbjI%2B8blkb3t5h85rH0Z6PZGNBivxpqZ4SjDhocEs8IMVYlFIWwA57KraqadR7ZF3wkdKZlmzZh8BNKqEk049yRk%2FWiaC8iXI1JpKx53xvyee2OxzJEyGXLceqo7kXYz1E3JzkC22qQ0CMm8U%2FcEv39nSv2KO7h7pasS31Qp1oA%2B1MZCpnq3hghMaXZ4VeQ21tEQw1L%2FXvwY6pgEbZ1xFwdnv%2F7eTy0KKy%2FBivaFKKg26fgkZQVDSzkQ9tUZXW1%2BMxGvr8EoKeqYnYjbuJ8h%2FTRssLj3yp8juWFUW72RSqWbVg9j5Vn2WPkWi%2BzyzzuFl4F7ORRdNSon7VHWGkZFGy0uQL9JIiZM%2BHLBRXV363D%2FmuLrEUK3oFd3vftCKXTiFaPr033j5oEb0vNUsnobMvYgXT87Fa7X7qtQ4gEIfdGJm&X-Amz-Signature=d74951e2f541e5ef3d0b432c02bf5d0514406241e3c22296610d70b8ffcf9aa5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BWZ4LR%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICk3Gq4Lqf8fdHl3a6EqAE1UyoAe%2FbH1%2BtsH8uILGsUuAiAMMYmKhANqx6ej6qq4wyjuaewgXCAGm%2Fpgo6mhRF93ZSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggSfauVa0ZKiOSVjKtwDpA%2Fb937Kzoyr6weToPO471tvUFaC325ZylxJPAxAstykQ%2BGhk4kvustB5S%2BQWVyuoqxGM4LWvGVe3sIPvqRhNj6yQPI%2FVdanBzWjemPX1hbH2dld2HWs89tT%2Fr9EbBQriNgJDPjSm9HYUxulP8RzONZGbuN5vWJ29Fjf7EPb67UsQQi46f%2Bf13%2BILtSB2YAd4WAHb5RjkoMCm16KxJl2mc8WsbZZD8IgQbqf8ZeT8Ow5m%2By77KO8JRmIquVTU5Azc%2BSr413bi10bwbPg3Cy30%2BO5Es%2BH%2F2Be8U8CbXJYa7a1h0lG71YQIlVy6Rv92B8t7G49gf1NnDb8iuGofKdwLKVjdGjtbC2VB5db9lhgxrec8rNvLrTxJy%2BQ1OLU2MBtHIZAa09ELa9MU2ToeEQs2hyyaQvFY%2BUfTxlEk93LziXFfgRLE0qqZdaVbjI%2B8blkb3t5h85rH0Z6PZGNBivxpqZ4SjDhocEs8IMVYlFIWwA57KraqadR7ZF3wkdKZlmzZh8BNKqEk049yRk%2FWiaC8iXI1JpKx53xvyee2OxzJEyGXLceqo7kXYz1E3JzkC22qQ0CMm8U%2FcEv39nSv2KO7h7pasS31Qp1oA%2B1MZCpnq3hghMaXZ4VeQ21tEQw1L%2FXvwY6pgEbZ1xFwdnv%2F7eTy0KKy%2FBivaFKKg26fgkZQVDSzkQ9tUZXW1%2BMxGvr8EoKeqYnYjbuJ8h%2FTRssLj3yp8juWFUW72RSqWbVg9j5Vn2WPkWi%2BzyzzuFl4F7ORRdNSon7VHWGkZFGy0uQL9JIiZM%2BHLBRXV363D%2FmuLrEUK3oFd3vftCKXTiFaPr033j5oEb0vNUsnobMvYgXT87Fa7X7qtQ4gEIfdGJm&X-Amz-Signature=ef5c1969270e57ad5a9284dbfecdbe16fb87d5a0de24543677d5a25f9c9f9606&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BWZ4LR%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICk3Gq4Lqf8fdHl3a6EqAE1UyoAe%2FbH1%2BtsH8uILGsUuAiAMMYmKhANqx6ej6qq4wyjuaewgXCAGm%2Fpgo6mhRF93ZSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggSfauVa0ZKiOSVjKtwDpA%2Fb937Kzoyr6weToPO471tvUFaC325ZylxJPAxAstykQ%2BGhk4kvustB5S%2BQWVyuoqxGM4LWvGVe3sIPvqRhNj6yQPI%2FVdanBzWjemPX1hbH2dld2HWs89tT%2Fr9EbBQriNgJDPjSm9HYUxulP8RzONZGbuN5vWJ29Fjf7EPb67UsQQi46f%2Bf13%2BILtSB2YAd4WAHb5RjkoMCm16KxJl2mc8WsbZZD8IgQbqf8ZeT8Ow5m%2By77KO8JRmIquVTU5Azc%2BSr413bi10bwbPg3Cy30%2BO5Es%2BH%2F2Be8U8CbXJYa7a1h0lG71YQIlVy6Rv92B8t7G49gf1NnDb8iuGofKdwLKVjdGjtbC2VB5db9lhgxrec8rNvLrTxJy%2BQ1OLU2MBtHIZAa09ELa9MU2ToeEQs2hyyaQvFY%2BUfTxlEk93LziXFfgRLE0qqZdaVbjI%2B8blkb3t5h85rH0Z6PZGNBivxpqZ4SjDhocEs8IMVYlFIWwA57KraqadR7ZF3wkdKZlmzZh8BNKqEk049yRk%2FWiaC8iXI1JpKx53xvyee2OxzJEyGXLceqo7kXYz1E3JzkC22qQ0CMm8U%2FcEv39nSv2KO7h7pasS31Qp1oA%2B1MZCpnq3hghMaXZ4VeQ21tEQw1L%2FXvwY6pgEbZ1xFwdnv%2F7eTy0KKy%2FBivaFKKg26fgkZQVDSzkQ9tUZXW1%2BMxGvr8EoKeqYnYjbuJ8h%2FTRssLj3yp8juWFUW72RSqWbVg9j5Vn2WPkWi%2BzyzzuFl4F7ORRdNSon7VHWGkZFGy0uQL9JIiZM%2BHLBRXV363D%2FmuLrEUK3oFd3vftCKXTiFaPr033j5oEb0vNUsnobMvYgXT87Fa7X7qtQ4gEIfdGJm&X-Amz-Signature=0351ca30ffbdca7edda89383ee5b821d905e3df9b392aacd9c8e1ec86f532203&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BWZ4LR%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICk3Gq4Lqf8fdHl3a6EqAE1UyoAe%2FbH1%2BtsH8uILGsUuAiAMMYmKhANqx6ej6qq4wyjuaewgXCAGm%2Fpgo6mhRF93ZSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggSfauVa0ZKiOSVjKtwDpA%2Fb937Kzoyr6weToPO471tvUFaC325ZylxJPAxAstykQ%2BGhk4kvustB5S%2BQWVyuoqxGM4LWvGVe3sIPvqRhNj6yQPI%2FVdanBzWjemPX1hbH2dld2HWs89tT%2Fr9EbBQriNgJDPjSm9HYUxulP8RzONZGbuN5vWJ29Fjf7EPb67UsQQi46f%2Bf13%2BILtSB2YAd4WAHb5RjkoMCm16KxJl2mc8WsbZZD8IgQbqf8ZeT8Ow5m%2By77KO8JRmIquVTU5Azc%2BSr413bi10bwbPg3Cy30%2BO5Es%2BH%2F2Be8U8CbXJYa7a1h0lG71YQIlVy6Rv92B8t7G49gf1NnDb8iuGofKdwLKVjdGjtbC2VB5db9lhgxrec8rNvLrTxJy%2BQ1OLU2MBtHIZAa09ELa9MU2ToeEQs2hyyaQvFY%2BUfTxlEk93LziXFfgRLE0qqZdaVbjI%2B8blkb3t5h85rH0Z6PZGNBivxpqZ4SjDhocEs8IMVYlFIWwA57KraqadR7ZF3wkdKZlmzZh8BNKqEk049yRk%2FWiaC8iXI1JpKx53xvyee2OxzJEyGXLceqo7kXYz1E3JzkC22qQ0CMm8U%2FcEv39nSv2KO7h7pasS31Qp1oA%2B1MZCpnq3hghMaXZ4VeQ21tEQw1L%2FXvwY6pgEbZ1xFwdnv%2F7eTy0KKy%2FBivaFKKg26fgkZQVDSzkQ9tUZXW1%2BMxGvr8EoKeqYnYjbuJ8h%2FTRssLj3yp8juWFUW72RSqWbVg9j5Vn2WPkWi%2BzyzzuFl4F7ORRdNSon7VHWGkZFGy0uQL9JIiZM%2BHLBRXV363D%2FmuLrEUK3oFd3vftCKXTiFaPr033j5oEb0vNUsnobMvYgXT87Fa7X7qtQ4gEIfdGJm&X-Amz-Signature=9ab8b325c747501a6e90554ed445191a3cb3933ccbd8ab5ad335233593f80146&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BWZ4LR%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICk3Gq4Lqf8fdHl3a6EqAE1UyoAe%2FbH1%2BtsH8uILGsUuAiAMMYmKhANqx6ej6qq4wyjuaewgXCAGm%2Fpgo6mhRF93ZSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggSfauVa0ZKiOSVjKtwDpA%2Fb937Kzoyr6weToPO471tvUFaC325ZylxJPAxAstykQ%2BGhk4kvustB5S%2BQWVyuoqxGM4LWvGVe3sIPvqRhNj6yQPI%2FVdanBzWjemPX1hbH2dld2HWs89tT%2Fr9EbBQriNgJDPjSm9HYUxulP8RzONZGbuN5vWJ29Fjf7EPb67UsQQi46f%2Bf13%2BILtSB2YAd4WAHb5RjkoMCm16KxJl2mc8WsbZZD8IgQbqf8ZeT8Ow5m%2By77KO8JRmIquVTU5Azc%2BSr413bi10bwbPg3Cy30%2BO5Es%2BH%2F2Be8U8CbXJYa7a1h0lG71YQIlVy6Rv92B8t7G49gf1NnDb8iuGofKdwLKVjdGjtbC2VB5db9lhgxrec8rNvLrTxJy%2BQ1OLU2MBtHIZAa09ELa9MU2ToeEQs2hyyaQvFY%2BUfTxlEk93LziXFfgRLE0qqZdaVbjI%2B8blkb3t5h85rH0Z6PZGNBivxpqZ4SjDhocEs8IMVYlFIWwA57KraqadR7ZF3wkdKZlmzZh8BNKqEk049yRk%2FWiaC8iXI1JpKx53xvyee2OxzJEyGXLceqo7kXYz1E3JzkC22qQ0CMm8U%2FcEv39nSv2KO7h7pasS31Qp1oA%2B1MZCpnq3hghMaXZ4VeQ21tEQw1L%2FXvwY6pgEbZ1xFwdnv%2F7eTy0KKy%2FBivaFKKg26fgkZQVDSzkQ9tUZXW1%2BMxGvr8EoKeqYnYjbuJ8h%2FTRssLj3yp8juWFUW72RSqWbVg9j5Vn2WPkWi%2BzyzzuFl4F7ORRdNSon7VHWGkZFGy0uQL9JIiZM%2BHLBRXV363D%2FmuLrEUK3oFd3vftCKXTiFaPr033j5oEb0vNUsnobMvYgXT87Fa7X7qtQ4gEIfdGJm&X-Amz-Signature=6f45c50a91868a2f852f1f636b0f23845d1dbcae15886d75ddbabe8605e17cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BWZ4LR%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICk3Gq4Lqf8fdHl3a6EqAE1UyoAe%2FbH1%2BtsH8uILGsUuAiAMMYmKhANqx6ej6qq4wyjuaewgXCAGm%2Fpgo6mhRF93ZSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggSfauVa0ZKiOSVjKtwDpA%2Fb937Kzoyr6weToPO471tvUFaC325ZylxJPAxAstykQ%2BGhk4kvustB5S%2BQWVyuoqxGM4LWvGVe3sIPvqRhNj6yQPI%2FVdanBzWjemPX1hbH2dld2HWs89tT%2Fr9EbBQriNgJDPjSm9HYUxulP8RzONZGbuN5vWJ29Fjf7EPb67UsQQi46f%2Bf13%2BILtSB2YAd4WAHb5RjkoMCm16KxJl2mc8WsbZZD8IgQbqf8ZeT8Ow5m%2By77KO8JRmIquVTU5Azc%2BSr413bi10bwbPg3Cy30%2BO5Es%2BH%2F2Be8U8CbXJYa7a1h0lG71YQIlVy6Rv92B8t7G49gf1NnDb8iuGofKdwLKVjdGjtbC2VB5db9lhgxrec8rNvLrTxJy%2BQ1OLU2MBtHIZAa09ELa9MU2ToeEQs2hyyaQvFY%2BUfTxlEk93LziXFfgRLE0qqZdaVbjI%2B8blkb3t5h85rH0Z6PZGNBivxpqZ4SjDhocEs8IMVYlFIWwA57KraqadR7ZF3wkdKZlmzZh8BNKqEk049yRk%2FWiaC8iXI1JpKx53xvyee2OxzJEyGXLceqo7kXYz1E3JzkC22qQ0CMm8U%2FcEv39nSv2KO7h7pasS31Qp1oA%2B1MZCpnq3hghMaXZ4VeQ21tEQw1L%2FXvwY6pgEbZ1xFwdnv%2F7eTy0KKy%2FBivaFKKg26fgkZQVDSzkQ9tUZXW1%2BMxGvr8EoKeqYnYjbuJ8h%2FTRssLj3yp8juWFUW72RSqWbVg9j5Vn2WPkWi%2BzyzzuFl4F7ORRdNSon7VHWGkZFGy0uQL9JIiZM%2BHLBRXV363D%2FmuLrEUK3oFd3vftCKXTiFaPr033j5oEb0vNUsnobMvYgXT87Fa7X7qtQ4gEIfdGJm&X-Amz-Signature=06eace7395283b43f70346da11944b0939a1bb801e45983f4ed1815204078065&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BWZ4LR%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICk3Gq4Lqf8fdHl3a6EqAE1UyoAe%2FbH1%2BtsH8uILGsUuAiAMMYmKhANqx6ej6qq4wyjuaewgXCAGm%2Fpgo6mhRF93ZSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggSfauVa0ZKiOSVjKtwDpA%2Fb937Kzoyr6weToPO471tvUFaC325ZylxJPAxAstykQ%2BGhk4kvustB5S%2BQWVyuoqxGM4LWvGVe3sIPvqRhNj6yQPI%2FVdanBzWjemPX1hbH2dld2HWs89tT%2Fr9EbBQriNgJDPjSm9HYUxulP8RzONZGbuN5vWJ29Fjf7EPb67UsQQi46f%2Bf13%2BILtSB2YAd4WAHb5RjkoMCm16KxJl2mc8WsbZZD8IgQbqf8ZeT8Ow5m%2By77KO8JRmIquVTU5Azc%2BSr413bi10bwbPg3Cy30%2BO5Es%2BH%2F2Be8U8CbXJYa7a1h0lG71YQIlVy6Rv92B8t7G49gf1NnDb8iuGofKdwLKVjdGjtbC2VB5db9lhgxrec8rNvLrTxJy%2BQ1OLU2MBtHIZAa09ELa9MU2ToeEQs2hyyaQvFY%2BUfTxlEk93LziXFfgRLE0qqZdaVbjI%2B8blkb3t5h85rH0Z6PZGNBivxpqZ4SjDhocEs8IMVYlFIWwA57KraqadR7ZF3wkdKZlmzZh8BNKqEk049yRk%2FWiaC8iXI1JpKx53xvyee2OxzJEyGXLceqo7kXYz1E3JzkC22qQ0CMm8U%2FcEv39nSv2KO7h7pasS31Qp1oA%2B1MZCpnq3hghMaXZ4VeQ21tEQw1L%2FXvwY6pgEbZ1xFwdnv%2F7eTy0KKy%2FBivaFKKg26fgkZQVDSzkQ9tUZXW1%2BMxGvr8EoKeqYnYjbuJ8h%2FTRssLj3yp8juWFUW72RSqWbVg9j5Vn2WPkWi%2BzyzzuFl4F7ORRdNSon7VHWGkZFGy0uQL9JIiZM%2BHLBRXV363D%2FmuLrEUK3oFd3vftCKXTiFaPr033j5oEb0vNUsnobMvYgXT87Fa7X7qtQ4gEIfdGJm&X-Amz-Signature=c67004343332b1ae271be9022e49a7ff80c80f483d91754e59d054162c6a33de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BWZ4LR%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICk3Gq4Lqf8fdHl3a6EqAE1UyoAe%2FbH1%2BtsH8uILGsUuAiAMMYmKhANqx6ej6qq4wyjuaewgXCAGm%2Fpgo6mhRF93ZSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggSfauVa0ZKiOSVjKtwDpA%2Fb937Kzoyr6weToPO471tvUFaC325ZylxJPAxAstykQ%2BGhk4kvustB5S%2BQWVyuoqxGM4LWvGVe3sIPvqRhNj6yQPI%2FVdanBzWjemPX1hbH2dld2HWs89tT%2Fr9EbBQriNgJDPjSm9HYUxulP8RzONZGbuN5vWJ29Fjf7EPb67UsQQi46f%2Bf13%2BILtSB2YAd4WAHb5RjkoMCm16KxJl2mc8WsbZZD8IgQbqf8ZeT8Ow5m%2By77KO8JRmIquVTU5Azc%2BSr413bi10bwbPg3Cy30%2BO5Es%2BH%2F2Be8U8CbXJYa7a1h0lG71YQIlVy6Rv92B8t7G49gf1NnDb8iuGofKdwLKVjdGjtbC2VB5db9lhgxrec8rNvLrTxJy%2BQ1OLU2MBtHIZAa09ELa9MU2ToeEQs2hyyaQvFY%2BUfTxlEk93LziXFfgRLE0qqZdaVbjI%2B8blkb3t5h85rH0Z6PZGNBivxpqZ4SjDhocEs8IMVYlFIWwA57KraqadR7ZF3wkdKZlmzZh8BNKqEk049yRk%2FWiaC8iXI1JpKx53xvyee2OxzJEyGXLceqo7kXYz1E3JzkC22qQ0CMm8U%2FcEv39nSv2KO7h7pasS31Qp1oA%2B1MZCpnq3hghMaXZ4VeQ21tEQw1L%2FXvwY6pgEbZ1xFwdnv%2F7eTy0KKy%2FBivaFKKg26fgkZQVDSzkQ9tUZXW1%2BMxGvr8EoKeqYnYjbuJ8h%2FTRssLj3yp8juWFUW72RSqWbVg9j5Vn2WPkWi%2BzyzzuFl4F7ORRdNSon7VHWGkZFGy0uQL9JIiZM%2BHLBRXV363D%2FmuLrEUK3oFd3vftCKXTiFaPr033j5oEb0vNUsnobMvYgXT87Fa7X7qtQ4gEIfdGJm&X-Amz-Signature=7b107f7a164ae9a3fa22c51149182a49d8cbeeca169f0e87033671caac13800b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
