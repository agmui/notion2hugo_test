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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOJKWZV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDKhi7VNKeGzX%2BYBQaOEzipnjkjXLKT2NpxGCU5o1IbqAIgK6LCFg%2BN8hJojA7d6qxZhywI9HyegvyhE4T4pxjl4oUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMULV3Zl5V%2BIhqMZtyrcA8wKm4qgx7XWntHHpwmuz%2B%2FdSXefs0a9a%2BajKeMfl06WrcRkI%2FCRMAP7QicPEOAwagGLYsp5aXrPwDrRy7F10GhsxnW%2BQge5qsefaQHEj1P89xttMf%2BfHG3gULglyEkYgM26Ejs232Ypl20VGwwyuG3RTcv%2FstNlCsSBzmOOSo7Pb%2F6ZsSTHpWd5WW7LQmQy3QYkM7XjqTNvnwlROixrJgMV93CbFZ2f%2Bh0iAv5djbjHkcPyLHxQAUHBDryJYThLQK3ErHcOWWh1JxL9BpJoD%2BkDUxBl019aCzkYQxYkuJh5w%2BfOCSA9y3Yk%2BWE8icBEg%2FnSCffvLUxWlP7MqKK6Rr6wyOY%2BLy7BbmBonCqB8SLHi%2BD5quIytxoLA0gIPiwA1hk8PSj6yjINhxXuPOO%2By%2BEKJjKtDYBC8tVAVbTW%2Bqx%2FjlWhno3u3njpgo3AQVfH61ZWzzPgDiC4gcFPedehFZq0SG90bNIE7%2BF1nV2iT6TDil9oK9P7ajz3KD32xULphkHYMrvurA2qt1O%2FVOnWUwBZzqMc2rehDNta8b9jYwhU5%2FNEfuc9NAfKV71TWtMqGrcGgcWEZmohsh1Sv%2B5b70P1cvzLiFHIAXlW9tznWIA0gOjSS2SsW7%2FCtLnBMLTalcAGOqUBS0BDH%2FR6eBb521vjJ7yWN4H1lOBalDHTuAdzcOGxh%2FzecfcdSZh1Arjkz1N4oG1n8sUPNGp%2BPzkGnArnH1ouf0pRlJUQ9ukZ3leXiL879ESNUu1qwilpHNXeLhAf8GjtmZy5hwA%2Bs9fTPsNjZ6pg%2BoYgzAlZiLonIUaudcruS1w6%2Fawdn1ANSRKFn3wFb%2FTxqoLAaCDhyZ5ihq4xbu2ZiQH2959v&X-Amz-Signature=3174788831effa7de1b3c070b9faba04e694173353b404ad859adc95086ddc99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOJKWZV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDKhi7VNKeGzX%2BYBQaOEzipnjkjXLKT2NpxGCU5o1IbqAIgK6LCFg%2BN8hJojA7d6qxZhywI9HyegvyhE4T4pxjl4oUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMULV3Zl5V%2BIhqMZtyrcA8wKm4qgx7XWntHHpwmuz%2B%2FdSXefs0a9a%2BajKeMfl06WrcRkI%2FCRMAP7QicPEOAwagGLYsp5aXrPwDrRy7F10GhsxnW%2BQge5qsefaQHEj1P89xttMf%2BfHG3gULglyEkYgM26Ejs232Ypl20VGwwyuG3RTcv%2FstNlCsSBzmOOSo7Pb%2F6ZsSTHpWd5WW7LQmQy3QYkM7XjqTNvnwlROixrJgMV93CbFZ2f%2Bh0iAv5djbjHkcPyLHxQAUHBDryJYThLQK3ErHcOWWh1JxL9BpJoD%2BkDUxBl019aCzkYQxYkuJh5w%2BfOCSA9y3Yk%2BWE8icBEg%2FnSCffvLUxWlP7MqKK6Rr6wyOY%2BLy7BbmBonCqB8SLHi%2BD5quIytxoLA0gIPiwA1hk8PSj6yjINhxXuPOO%2By%2BEKJjKtDYBC8tVAVbTW%2Bqx%2FjlWhno3u3njpgo3AQVfH61ZWzzPgDiC4gcFPedehFZq0SG90bNIE7%2BF1nV2iT6TDil9oK9P7ajz3KD32xULphkHYMrvurA2qt1O%2FVOnWUwBZzqMc2rehDNta8b9jYwhU5%2FNEfuc9NAfKV71TWtMqGrcGgcWEZmohsh1Sv%2B5b70P1cvzLiFHIAXlW9tznWIA0gOjSS2SsW7%2FCtLnBMLTalcAGOqUBS0BDH%2FR6eBb521vjJ7yWN4H1lOBalDHTuAdzcOGxh%2FzecfcdSZh1Arjkz1N4oG1n8sUPNGp%2BPzkGnArnH1ouf0pRlJUQ9ukZ3leXiL879ESNUu1qwilpHNXeLhAf8GjtmZy5hwA%2Bs9fTPsNjZ6pg%2BoYgzAlZiLonIUaudcruS1w6%2Fawdn1ANSRKFn3wFb%2FTxqoLAaCDhyZ5ihq4xbu2ZiQH2959v&X-Amz-Signature=76a51f3b3bab3bf2147b989c9659d97ff70af1176a0ea3a31370fe2528dd8db4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOJKWZV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDKhi7VNKeGzX%2BYBQaOEzipnjkjXLKT2NpxGCU5o1IbqAIgK6LCFg%2BN8hJojA7d6qxZhywI9HyegvyhE4T4pxjl4oUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMULV3Zl5V%2BIhqMZtyrcA8wKm4qgx7XWntHHpwmuz%2B%2FdSXefs0a9a%2BajKeMfl06WrcRkI%2FCRMAP7QicPEOAwagGLYsp5aXrPwDrRy7F10GhsxnW%2BQge5qsefaQHEj1P89xttMf%2BfHG3gULglyEkYgM26Ejs232Ypl20VGwwyuG3RTcv%2FstNlCsSBzmOOSo7Pb%2F6ZsSTHpWd5WW7LQmQy3QYkM7XjqTNvnwlROixrJgMV93CbFZ2f%2Bh0iAv5djbjHkcPyLHxQAUHBDryJYThLQK3ErHcOWWh1JxL9BpJoD%2BkDUxBl019aCzkYQxYkuJh5w%2BfOCSA9y3Yk%2BWE8icBEg%2FnSCffvLUxWlP7MqKK6Rr6wyOY%2BLy7BbmBonCqB8SLHi%2BD5quIytxoLA0gIPiwA1hk8PSj6yjINhxXuPOO%2By%2BEKJjKtDYBC8tVAVbTW%2Bqx%2FjlWhno3u3njpgo3AQVfH61ZWzzPgDiC4gcFPedehFZq0SG90bNIE7%2BF1nV2iT6TDil9oK9P7ajz3KD32xULphkHYMrvurA2qt1O%2FVOnWUwBZzqMc2rehDNta8b9jYwhU5%2FNEfuc9NAfKV71TWtMqGrcGgcWEZmohsh1Sv%2B5b70P1cvzLiFHIAXlW9tznWIA0gOjSS2SsW7%2FCtLnBMLTalcAGOqUBS0BDH%2FR6eBb521vjJ7yWN4H1lOBalDHTuAdzcOGxh%2FzecfcdSZh1Arjkz1N4oG1n8sUPNGp%2BPzkGnArnH1ouf0pRlJUQ9ukZ3leXiL879ESNUu1qwilpHNXeLhAf8GjtmZy5hwA%2Bs9fTPsNjZ6pg%2BoYgzAlZiLonIUaudcruS1w6%2Fawdn1ANSRKFn3wFb%2FTxqoLAaCDhyZ5ihq4xbu2ZiQH2959v&X-Amz-Signature=37a6e5031f673b5f3533ddcae2f75d25835948c73ea64fec8fdf62a9b3264113&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOJKWZV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDKhi7VNKeGzX%2BYBQaOEzipnjkjXLKT2NpxGCU5o1IbqAIgK6LCFg%2BN8hJojA7d6qxZhywI9HyegvyhE4T4pxjl4oUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMULV3Zl5V%2BIhqMZtyrcA8wKm4qgx7XWntHHpwmuz%2B%2FdSXefs0a9a%2BajKeMfl06WrcRkI%2FCRMAP7QicPEOAwagGLYsp5aXrPwDrRy7F10GhsxnW%2BQge5qsefaQHEj1P89xttMf%2BfHG3gULglyEkYgM26Ejs232Ypl20VGwwyuG3RTcv%2FstNlCsSBzmOOSo7Pb%2F6ZsSTHpWd5WW7LQmQy3QYkM7XjqTNvnwlROixrJgMV93CbFZ2f%2Bh0iAv5djbjHkcPyLHxQAUHBDryJYThLQK3ErHcOWWh1JxL9BpJoD%2BkDUxBl019aCzkYQxYkuJh5w%2BfOCSA9y3Yk%2BWE8icBEg%2FnSCffvLUxWlP7MqKK6Rr6wyOY%2BLy7BbmBonCqB8SLHi%2BD5quIytxoLA0gIPiwA1hk8PSj6yjINhxXuPOO%2By%2BEKJjKtDYBC8tVAVbTW%2Bqx%2FjlWhno3u3njpgo3AQVfH61ZWzzPgDiC4gcFPedehFZq0SG90bNIE7%2BF1nV2iT6TDil9oK9P7ajz3KD32xULphkHYMrvurA2qt1O%2FVOnWUwBZzqMc2rehDNta8b9jYwhU5%2FNEfuc9NAfKV71TWtMqGrcGgcWEZmohsh1Sv%2B5b70P1cvzLiFHIAXlW9tznWIA0gOjSS2SsW7%2FCtLnBMLTalcAGOqUBS0BDH%2FR6eBb521vjJ7yWN4H1lOBalDHTuAdzcOGxh%2FzecfcdSZh1Arjkz1N4oG1n8sUPNGp%2BPzkGnArnH1ouf0pRlJUQ9ukZ3leXiL879ESNUu1qwilpHNXeLhAf8GjtmZy5hwA%2Bs9fTPsNjZ6pg%2BoYgzAlZiLonIUaudcruS1w6%2Fawdn1ANSRKFn3wFb%2FTxqoLAaCDhyZ5ihq4xbu2ZiQH2959v&X-Amz-Signature=c74c7e76de8b73ab11c8a62aeb7d64d64de286d7c133dbc836fc9297d339497e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOJKWZV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDKhi7VNKeGzX%2BYBQaOEzipnjkjXLKT2NpxGCU5o1IbqAIgK6LCFg%2BN8hJojA7d6qxZhywI9HyegvyhE4T4pxjl4oUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMULV3Zl5V%2BIhqMZtyrcA8wKm4qgx7XWntHHpwmuz%2B%2FdSXefs0a9a%2BajKeMfl06WrcRkI%2FCRMAP7QicPEOAwagGLYsp5aXrPwDrRy7F10GhsxnW%2BQge5qsefaQHEj1P89xttMf%2BfHG3gULglyEkYgM26Ejs232Ypl20VGwwyuG3RTcv%2FstNlCsSBzmOOSo7Pb%2F6ZsSTHpWd5WW7LQmQy3QYkM7XjqTNvnwlROixrJgMV93CbFZ2f%2Bh0iAv5djbjHkcPyLHxQAUHBDryJYThLQK3ErHcOWWh1JxL9BpJoD%2BkDUxBl019aCzkYQxYkuJh5w%2BfOCSA9y3Yk%2BWE8icBEg%2FnSCffvLUxWlP7MqKK6Rr6wyOY%2BLy7BbmBonCqB8SLHi%2BD5quIytxoLA0gIPiwA1hk8PSj6yjINhxXuPOO%2By%2BEKJjKtDYBC8tVAVbTW%2Bqx%2FjlWhno3u3njpgo3AQVfH61ZWzzPgDiC4gcFPedehFZq0SG90bNIE7%2BF1nV2iT6TDil9oK9P7ajz3KD32xULphkHYMrvurA2qt1O%2FVOnWUwBZzqMc2rehDNta8b9jYwhU5%2FNEfuc9NAfKV71TWtMqGrcGgcWEZmohsh1Sv%2B5b70P1cvzLiFHIAXlW9tznWIA0gOjSS2SsW7%2FCtLnBMLTalcAGOqUBS0BDH%2FR6eBb521vjJ7yWN4H1lOBalDHTuAdzcOGxh%2FzecfcdSZh1Arjkz1N4oG1n8sUPNGp%2BPzkGnArnH1ouf0pRlJUQ9ukZ3leXiL879ESNUu1qwilpHNXeLhAf8GjtmZy5hwA%2Bs9fTPsNjZ6pg%2BoYgzAlZiLonIUaudcruS1w6%2Fawdn1ANSRKFn3wFb%2FTxqoLAaCDhyZ5ihq4xbu2ZiQH2959v&X-Amz-Signature=e53721ab63f8cdd0e7bdba82a2c8450ecec17517615cc6ef43b9ac9dfd4659bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOJKWZV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDKhi7VNKeGzX%2BYBQaOEzipnjkjXLKT2NpxGCU5o1IbqAIgK6LCFg%2BN8hJojA7d6qxZhywI9HyegvyhE4T4pxjl4oUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMULV3Zl5V%2BIhqMZtyrcA8wKm4qgx7XWntHHpwmuz%2B%2FdSXefs0a9a%2BajKeMfl06WrcRkI%2FCRMAP7QicPEOAwagGLYsp5aXrPwDrRy7F10GhsxnW%2BQge5qsefaQHEj1P89xttMf%2BfHG3gULglyEkYgM26Ejs232Ypl20VGwwyuG3RTcv%2FstNlCsSBzmOOSo7Pb%2F6ZsSTHpWd5WW7LQmQy3QYkM7XjqTNvnwlROixrJgMV93CbFZ2f%2Bh0iAv5djbjHkcPyLHxQAUHBDryJYThLQK3ErHcOWWh1JxL9BpJoD%2BkDUxBl019aCzkYQxYkuJh5w%2BfOCSA9y3Yk%2BWE8icBEg%2FnSCffvLUxWlP7MqKK6Rr6wyOY%2BLy7BbmBonCqB8SLHi%2BD5quIytxoLA0gIPiwA1hk8PSj6yjINhxXuPOO%2By%2BEKJjKtDYBC8tVAVbTW%2Bqx%2FjlWhno3u3njpgo3AQVfH61ZWzzPgDiC4gcFPedehFZq0SG90bNIE7%2BF1nV2iT6TDil9oK9P7ajz3KD32xULphkHYMrvurA2qt1O%2FVOnWUwBZzqMc2rehDNta8b9jYwhU5%2FNEfuc9NAfKV71TWtMqGrcGgcWEZmohsh1Sv%2B5b70P1cvzLiFHIAXlW9tznWIA0gOjSS2SsW7%2FCtLnBMLTalcAGOqUBS0BDH%2FR6eBb521vjJ7yWN4H1lOBalDHTuAdzcOGxh%2FzecfcdSZh1Arjkz1N4oG1n8sUPNGp%2BPzkGnArnH1ouf0pRlJUQ9ukZ3leXiL879ESNUu1qwilpHNXeLhAf8GjtmZy5hwA%2Bs9fTPsNjZ6pg%2BoYgzAlZiLonIUaudcruS1w6%2Fawdn1ANSRKFn3wFb%2FTxqoLAaCDhyZ5ihq4xbu2ZiQH2959v&X-Amz-Signature=5606a7c40444857d18f8e2ef336bdb8985787e3d8077eb7df65bf4b4c780a050&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOJKWZV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDKhi7VNKeGzX%2BYBQaOEzipnjkjXLKT2NpxGCU5o1IbqAIgK6LCFg%2BN8hJojA7d6qxZhywI9HyegvyhE4T4pxjl4oUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMULV3Zl5V%2BIhqMZtyrcA8wKm4qgx7XWntHHpwmuz%2B%2FdSXefs0a9a%2BajKeMfl06WrcRkI%2FCRMAP7QicPEOAwagGLYsp5aXrPwDrRy7F10GhsxnW%2BQge5qsefaQHEj1P89xttMf%2BfHG3gULglyEkYgM26Ejs232Ypl20VGwwyuG3RTcv%2FstNlCsSBzmOOSo7Pb%2F6ZsSTHpWd5WW7LQmQy3QYkM7XjqTNvnwlROixrJgMV93CbFZ2f%2Bh0iAv5djbjHkcPyLHxQAUHBDryJYThLQK3ErHcOWWh1JxL9BpJoD%2BkDUxBl019aCzkYQxYkuJh5w%2BfOCSA9y3Yk%2BWE8icBEg%2FnSCffvLUxWlP7MqKK6Rr6wyOY%2BLy7BbmBonCqB8SLHi%2BD5quIytxoLA0gIPiwA1hk8PSj6yjINhxXuPOO%2By%2BEKJjKtDYBC8tVAVbTW%2Bqx%2FjlWhno3u3njpgo3AQVfH61ZWzzPgDiC4gcFPedehFZq0SG90bNIE7%2BF1nV2iT6TDil9oK9P7ajz3KD32xULphkHYMrvurA2qt1O%2FVOnWUwBZzqMc2rehDNta8b9jYwhU5%2FNEfuc9NAfKV71TWtMqGrcGgcWEZmohsh1Sv%2B5b70P1cvzLiFHIAXlW9tznWIA0gOjSS2SsW7%2FCtLnBMLTalcAGOqUBS0BDH%2FR6eBb521vjJ7yWN4H1lOBalDHTuAdzcOGxh%2FzecfcdSZh1Arjkz1N4oG1n8sUPNGp%2BPzkGnArnH1ouf0pRlJUQ9ukZ3leXiL879ESNUu1qwilpHNXeLhAf8GjtmZy5hwA%2Bs9fTPsNjZ6pg%2BoYgzAlZiLonIUaudcruS1w6%2Fawdn1ANSRKFn3wFb%2FTxqoLAaCDhyZ5ihq4xbu2ZiQH2959v&X-Amz-Signature=85a1d987a3b96c4e8d342cdfd4897ecfd8ea383c33b691b4ba6a714e0ff27765&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOJKWZV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDKhi7VNKeGzX%2BYBQaOEzipnjkjXLKT2NpxGCU5o1IbqAIgK6LCFg%2BN8hJojA7d6qxZhywI9HyegvyhE4T4pxjl4oUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMULV3Zl5V%2BIhqMZtyrcA8wKm4qgx7XWntHHpwmuz%2B%2FdSXefs0a9a%2BajKeMfl06WrcRkI%2FCRMAP7QicPEOAwagGLYsp5aXrPwDrRy7F10GhsxnW%2BQge5qsefaQHEj1P89xttMf%2BfHG3gULglyEkYgM26Ejs232Ypl20VGwwyuG3RTcv%2FstNlCsSBzmOOSo7Pb%2F6ZsSTHpWd5WW7LQmQy3QYkM7XjqTNvnwlROixrJgMV93CbFZ2f%2Bh0iAv5djbjHkcPyLHxQAUHBDryJYThLQK3ErHcOWWh1JxL9BpJoD%2BkDUxBl019aCzkYQxYkuJh5w%2BfOCSA9y3Yk%2BWE8icBEg%2FnSCffvLUxWlP7MqKK6Rr6wyOY%2BLy7BbmBonCqB8SLHi%2BD5quIytxoLA0gIPiwA1hk8PSj6yjINhxXuPOO%2By%2BEKJjKtDYBC8tVAVbTW%2Bqx%2FjlWhno3u3njpgo3AQVfH61ZWzzPgDiC4gcFPedehFZq0SG90bNIE7%2BF1nV2iT6TDil9oK9P7ajz3KD32xULphkHYMrvurA2qt1O%2FVOnWUwBZzqMc2rehDNta8b9jYwhU5%2FNEfuc9NAfKV71TWtMqGrcGgcWEZmohsh1Sv%2B5b70P1cvzLiFHIAXlW9tznWIA0gOjSS2SsW7%2FCtLnBMLTalcAGOqUBS0BDH%2FR6eBb521vjJ7yWN4H1lOBalDHTuAdzcOGxh%2FzecfcdSZh1Arjkz1N4oG1n8sUPNGp%2BPzkGnArnH1ouf0pRlJUQ9ukZ3leXiL879ESNUu1qwilpHNXeLhAf8GjtmZy5hwA%2Bs9fTPsNjZ6pg%2BoYgzAlZiLonIUaudcruS1w6%2Fawdn1ANSRKFn3wFb%2FTxqoLAaCDhyZ5ihq4xbu2ZiQH2959v&X-Amz-Signature=56663a7ca79d739f5a8ee71f2b3fcc4e525abedfc22f4193cbabb4dee0566b11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
