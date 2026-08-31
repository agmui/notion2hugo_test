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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OCSIGSC%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiBj4b2saAMpzfpDpzB1U5L90s3UGeJZvNijg6uZYXmAIgJUAjUBrQ8KM7ZGqM6Qf9KwxO1fPRKf0GAOJtYyf%2B1C8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVlhNvyHpx7nXVInCrcA7IlL2LruWKpBrT6U66WQvU6Lh0PwivaJ6JLGFoM27EfeSWyH%2F%2BO7ArhLp4BI%2BYfAAcEpMwRgXpHXchIcNgp5TrvZt5fOdw7KukH%2BLMHvgbfzbmIyCl5R7FokxQkQjXp2zAiXxLMSSk0B6FY1xcoJiv6XyWy2mp5XSyAc7SWBLpn4Vfj8hDq5Zvi5yy4irwE%2Fs%2FnW2HwlJL5IHhXykziIYAj3CaThE8x1wK%2BO17Z2gFpCcN99HVJRBDBRz60EbTCO%2B14J%2FwqV8A%2BiOHh%2FAFPk5fxEMyG2sH0S3dp1cbn6MfRo7A3HoVfc%2FAY3oY%2BTWEjgW9rn%2Bi0pZdcB9wXwLvo8RFTEv2M1e7hqN1govuOmZS8WbswJ4r8ck%2FKTfUWkYoro7J27HtEzDnf7p1wwBU8DzA%2FjoP1OBaXdit4YilZG5tS8KSmi%2FccrhZM2KWH4WkxiY2ASFTvIiM4IXV6aXrUhsiq7kJucVua1y1g62BGZQCsQ8xXr2NPna8PWWeOBbcwXzkwkjN%2BveFteGx09I%2FxajTYkDYt2RyCy%2BIpsjnT9HA%2FjD6jum58DI3hQjZ3QKyxmYKcUJyD5rI5ASPzE0cQcMbLOMpZZIxCa0ayO0Yd3zUt19%2FZ7Bybev%2BG%2Bq5jMIfd09QGOqUBaNABhby%2BtfL2ScCRR6uEyJWt2rji2BMUhHHGGkHhW%2BHgfi7fej41VbJWokaH1DGEzaM1lYFMo3YC%2BUDQenHB%2FyANewZwcsWIZHFKrKqHS%2BGcbEr87On0s9DLmf0KjwwVtVtP8OzOuRf3nDN0d6rV999bie6jz7Kd6KgyzU1Tnm7hiywXany9wZ%2BJt4SCC%2FleiPB68cj0Pa6K7Eb7HPSttazodYSw&X-Amz-Signature=312e5a8abe926ecfaaeb7641e174c8268e42a6e31c2f555c4742c9722956b9c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OCSIGSC%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiBj4b2saAMpzfpDpzB1U5L90s3UGeJZvNijg6uZYXmAIgJUAjUBrQ8KM7ZGqM6Qf9KwxO1fPRKf0GAOJtYyf%2B1C8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVlhNvyHpx7nXVInCrcA7IlL2LruWKpBrT6U66WQvU6Lh0PwivaJ6JLGFoM27EfeSWyH%2F%2BO7ArhLp4BI%2BYfAAcEpMwRgXpHXchIcNgp5TrvZt5fOdw7KukH%2BLMHvgbfzbmIyCl5R7FokxQkQjXp2zAiXxLMSSk0B6FY1xcoJiv6XyWy2mp5XSyAc7SWBLpn4Vfj8hDq5Zvi5yy4irwE%2Fs%2FnW2HwlJL5IHhXykziIYAj3CaThE8x1wK%2BO17Z2gFpCcN99HVJRBDBRz60EbTCO%2B14J%2FwqV8A%2BiOHh%2FAFPk5fxEMyG2sH0S3dp1cbn6MfRo7A3HoVfc%2FAY3oY%2BTWEjgW9rn%2Bi0pZdcB9wXwLvo8RFTEv2M1e7hqN1govuOmZS8WbswJ4r8ck%2FKTfUWkYoro7J27HtEzDnf7p1wwBU8DzA%2FjoP1OBaXdit4YilZG5tS8KSmi%2FccrhZM2KWH4WkxiY2ASFTvIiM4IXV6aXrUhsiq7kJucVua1y1g62BGZQCsQ8xXr2NPna8PWWeOBbcwXzkwkjN%2BveFteGx09I%2FxajTYkDYt2RyCy%2BIpsjnT9HA%2FjD6jum58DI3hQjZ3QKyxmYKcUJyD5rI5ASPzE0cQcMbLOMpZZIxCa0ayO0Yd3zUt19%2FZ7Bybev%2BG%2Bq5jMIfd09QGOqUBaNABhby%2BtfL2ScCRR6uEyJWt2rji2BMUhHHGGkHhW%2BHgfi7fej41VbJWokaH1DGEzaM1lYFMo3YC%2BUDQenHB%2FyANewZwcsWIZHFKrKqHS%2BGcbEr87On0s9DLmf0KjwwVtVtP8OzOuRf3nDN0d6rV999bie6jz7Kd6KgyzU1Tnm7hiywXany9wZ%2BJt4SCC%2FleiPB68cj0Pa6K7Eb7HPSttazodYSw&X-Amz-Signature=ef938349655846f94757ad77e90a8cd01eab58e5ec0251135ddcdb76840596af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OCSIGSC%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiBj4b2saAMpzfpDpzB1U5L90s3UGeJZvNijg6uZYXmAIgJUAjUBrQ8KM7ZGqM6Qf9KwxO1fPRKf0GAOJtYyf%2B1C8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVlhNvyHpx7nXVInCrcA7IlL2LruWKpBrT6U66WQvU6Lh0PwivaJ6JLGFoM27EfeSWyH%2F%2BO7ArhLp4BI%2BYfAAcEpMwRgXpHXchIcNgp5TrvZt5fOdw7KukH%2BLMHvgbfzbmIyCl5R7FokxQkQjXp2zAiXxLMSSk0B6FY1xcoJiv6XyWy2mp5XSyAc7SWBLpn4Vfj8hDq5Zvi5yy4irwE%2Fs%2FnW2HwlJL5IHhXykziIYAj3CaThE8x1wK%2BO17Z2gFpCcN99HVJRBDBRz60EbTCO%2B14J%2FwqV8A%2BiOHh%2FAFPk5fxEMyG2sH0S3dp1cbn6MfRo7A3HoVfc%2FAY3oY%2BTWEjgW9rn%2Bi0pZdcB9wXwLvo8RFTEv2M1e7hqN1govuOmZS8WbswJ4r8ck%2FKTfUWkYoro7J27HtEzDnf7p1wwBU8DzA%2FjoP1OBaXdit4YilZG5tS8KSmi%2FccrhZM2KWH4WkxiY2ASFTvIiM4IXV6aXrUhsiq7kJucVua1y1g62BGZQCsQ8xXr2NPna8PWWeOBbcwXzkwkjN%2BveFteGx09I%2FxajTYkDYt2RyCy%2BIpsjnT9HA%2FjD6jum58DI3hQjZ3QKyxmYKcUJyD5rI5ASPzE0cQcMbLOMpZZIxCa0ayO0Yd3zUt19%2FZ7Bybev%2BG%2Bq5jMIfd09QGOqUBaNABhby%2BtfL2ScCRR6uEyJWt2rji2BMUhHHGGkHhW%2BHgfi7fej41VbJWokaH1DGEzaM1lYFMo3YC%2BUDQenHB%2FyANewZwcsWIZHFKrKqHS%2BGcbEr87On0s9DLmf0KjwwVtVtP8OzOuRf3nDN0d6rV999bie6jz7Kd6KgyzU1Tnm7hiywXany9wZ%2BJt4SCC%2FleiPB68cj0Pa6K7Eb7HPSttazodYSw&X-Amz-Signature=047716859f5c237edc93e93ddd1ea0b143011c4423ed7f3b8a1d6c8c7626b124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OCSIGSC%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiBj4b2saAMpzfpDpzB1U5L90s3UGeJZvNijg6uZYXmAIgJUAjUBrQ8KM7ZGqM6Qf9KwxO1fPRKf0GAOJtYyf%2B1C8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVlhNvyHpx7nXVInCrcA7IlL2LruWKpBrT6U66WQvU6Lh0PwivaJ6JLGFoM27EfeSWyH%2F%2BO7ArhLp4BI%2BYfAAcEpMwRgXpHXchIcNgp5TrvZt5fOdw7KukH%2BLMHvgbfzbmIyCl5R7FokxQkQjXp2zAiXxLMSSk0B6FY1xcoJiv6XyWy2mp5XSyAc7SWBLpn4Vfj8hDq5Zvi5yy4irwE%2Fs%2FnW2HwlJL5IHhXykziIYAj3CaThE8x1wK%2BO17Z2gFpCcN99HVJRBDBRz60EbTCO%2B14J%2FwqV8A%2BiOHh%2FAFPk5fxEMyG2sH0S3dp1cbn6MfRo7A3HoVfc%2FAY3oY%2BTWEjgW9rn%2Bi0pZdcB9wXwLvo8RFTEv2M1e7hqN1govuOmZS8WbswJ4r8ck%2FKTfUWkYoro7J27HtEzDnf7p1wwBU8DzA%2FjoP1OBaXdit4YilZG5tS8KSmi%2FccrhZM2KWH4WkxiY2ASFTvIiM4IXV6aXrUhsiq7kJucVua1y1g62BGZQCsQ8xXr2NPna8PWWeOBbcwXzkwkjN%2BveFteGx09I%2FxajTYkDYt2RyCy%2BIpsjnT9HA%2FjD6jum58DI3hQjZ3QKyxmYKcUJyD5rI5ASPzE0cQcMbLOMpZZIxCa0ayO0Yd3zUt19%2FZ7Bybev%2BG%2Bq5jMIfd09QGOqUBaNABhby%2BtfL2ScCRR6uEyJWt2rji2BMUhHHGGkHhW%2BHgfi7fej41VbJWokaH1DGEzaM1lYFMo3YC%2BUDQenHB%2FyANewZwcsWIZHFKrKqHS%2BGcbEr87On0s9DLmf0KjwwVtVtP8OzOuRf3nDN0d6rV999bie6jz7Kd6KgyzU1Tnm7hiywXany9wZ%2BJt4SCC%2FleiPB68cj0Pa6K7Eb7HPSttazodYSw&X-Amz-Signature=0ab12e1e94a4d15e17379bbff0646f2bc3eeba8b355f4757ba9fe056946c4be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OCSIGSC%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiBj4b2saAMpzfpDpzB1U5L90s3UGeJZvNijg6uZYXmAIgJUAjUBrQ8KM7ZGqM6Qf9KwxO1fPRKf0GAOJtYyf%2B1C8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVlhNvyHpx7nXVInCrcA7IlL2LruWKpBrT6U66WQvU6Lh0PwivaJ6JLGFoM27EfeSWyH%2F%2BO7ArhLp4BI%2BYfAAcEpMwRgXpHXchIcNgp5TrvZt5fOdw7KukH%2BLMHvgbfzbmIyCl5R7FokxQkQjXp2zAiXxLMSSk0B6FY1xcoJiv6XyWy2mp5XSyAc7SWBLpn4Vfj8hDq5Zvi5yy4irwE%2Fs%2FnW2HwlJL5IHhXykziIYAj3CaThE8x1wK%2BO17Z2gFpCcN99HVJRBDBRz60EbTCO%2B14J%2FwqV8A%2BiOHh%2FAFPk5fxEMyG2sH0S3dp1cbn6MfRo7A3HoVfc%2FAY3oY%2BTWEjgW9rn%2Bi0pZdcB9wXwLvo8RFTEv2M1e7hqN1govuOmZS8WbswJ4r8ck%2FKTfUWkYoro7J27HtEzDnf7p1wwBU8DzA%2FjoP1OBaXdit4YilZG5tS8KSmi%2FccrhZM2KWH4WkxiY2ASFTvIiM4IXV6aXrUhsiq7kJucVua1y1g62BGZQCsQ8xXr2NPna8PWWeOBbcwXzkwkjN%2BveFteGx09I%2FxajTYkDYt2RyCy%2BIpsjnT9HA%2FjD6jum58DI3hQjZ3QKyxmYKcUJyD5rI5ASPzE0cQcMbLOMpZZIxCa0ayO0Yd3zUt19%2FZ7Bybev%2BG%2Bq5jMIfd09QGOqUBaNABhby%2BtfL2ScCRR6uEyJWt2rji2BMUhHHGGkHhW%2BHgfi7fej41VbJWokaH1DGEzaM1lYFMo3YC%2BUDQenHB%2FyANewZwcsWIZHFKrKqHS%2BGcbEr87On0s9DLmf0KjwwVtVtP8OzOuRf3nDN0d6rV999bie6jz7Kd6KgyzU1Tnm7hiywXany9wZ%2BJt4SCC%2FleiPB68cj0Pa6K7Eb7HPSttazodYSw&X-Amz-Signature=072d11eb40176551f8e347ab7ee1d3dc1d8a20414830c20dc10df0918629b12e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OCSIGSC%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiBj4b2saAMpzfpDpzB1U5L90s3UGeJZvNijg6uZYXmAIgJUAjUBrQ8KM7ZGqM6Qf9KwxO1fPRKf0GAOJtYyf%2B1C8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVlhNvyHpx7nXVInCrcA7IlL2LruWKpBrT6U66WQvU6Lh0PwivaJ6JLGFoM27EfeSWyH%2F%2BO7ArhLp4BI%2BYfAAcEpMwRgXpHXchIcNgp5TrvZt5fOdw7KukH%2BLMHvgbfzbmIyCl5R7FokxQkQjXp2zAiXxLMSSk0B6FY1xcoJiv6XyWy2mp5XSyAc7SWBLpn4Vfj8hDq5Zvi5yy4irwE%2Fs%2FnW2HwlJL5IHhXykziIYAj3CaThE8x1wK%2BO17Z2gFpCcN99HVJRBDBRz60EbTCO%2B14J%2FwqV8A%2BiOHh%2FAFPk5fxEMyG2sH0S3dp1cbn6MfRo7A3HoVfc%2FAY3oY%2BTWEjgW9rn%2Bi0pZdcB9wXwLvo8RFTEv2M1e7hqN1govuOmZS8WbswJ4r8ck%2FKTfUWkYoro7J27HtEzDnf7p1wwBU8DzA%2FjoP1OBaXdit4YilZG5tS8KSmi%2FccrhZM2KWH4WkxiY2ASFTvIiM4IXV6aXrUhsiq7kJucVua1y1g62BGZQCsQ8xXr2NPna8PWWeOBbcwXzkwkjN%2BveFteGx09I%2FxajTYkDYt2RyCy%2BIpsjnT9HA%2FjD6jum58DI3hQjZ3QKyxmYKcUJyD5rI5ASPzE0cQcMbLOMpZZIxCa0ayO0Yd3zUt19%2FZ7Bybev%2BG%2Bq5jMIfd09QGOqUBaNABhby%2BtfL2ScCRR6uEyJWt2rji2BMUhHHGGkHhW%2BHgfi7fej41VbJWokaH1DGEzaM1lYFMo3YC%2BUDQenHB%2FyANewZwcsWIZHFKrKqHS%2BGcbEr87On0s9DLmf0KjwwVtVtP8OzOuRf3nDN0d6rV999bie6jz7Kd6KgyzU1Tnm7hiywXany9wZ%2BJt4SCC%2FleiPB68cj0Pa6K7Eb7HPSttazodYSw&X-Amz-Signature=2a23f739d136710c721ca9709cde292b3a298d8783d53c39933207e41ce0c91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OCSIGSC%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiBj4b2saAMpzfpDpzB1U5L90s3UGeJZvNijg6uZYXmAIgJUAjUBrQ8KM7ZGqM6Qf9KwxO1fPRKf0GAOJtYyf%2B1C8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVlhNvyHpx7nXVInCrcA7IlL2LruWKpBrT6U66WQvU6Lh0PwivaJ6JLGFoM27EfeSWyH%2F%2BO7ArhLp4BI%2BYfAAcEpMwRgXpHXchIcNgp5TrvZt5fOdw7KukH%2BLMHvgbfzbmIyCl5R7FokxQkQjXp2zAiXxLMSSk0B6FY1xcoJiv6XyWy2mp5XSyAc7SWBLpn4Vfj8hDq5Zvi5yy4irwE%2Fs%2FnW2HwlJL5IHhXykziIYAj3CaThE8x1wK%2BO17Z2gFpCcN99HVJRBDBRz60EbTCO%2B14J%2FwqV8A%2BiOHh%2FAFPk5fxEMyG2sH0S3dp1cbn6MfRo7A3HoVfc%2FAY3oY%2BTWEjgW9rn%2Bi0pZdcB9wXwLvo8RFTEv2M1e7hqN1govuOmZS8WbswJ4r8ck%2FKTfUWkYoro7J27HtEzDnf7p1wwBU8DzA%2FjoP1OBaXdit4YilZG5tS8KSmi%2FccrhZM2KWH4WkxiY2ASFTvIiM4IXV6aXrUhsiq7kJucVua1y1g62BGZQCsQ8xXr2NPna8PWWeOBbcwXzkwkjN%2BveFteGx09I%2FxajTYkDYt2RyCy%2BIpsjnT9HA%2FjD6jum58DI3hQjZ3QKyxmYKcUJyD5rI5ASPzE0cQcMbLOMpZZIxCa0ayO0Yd3zUt19%2FZ7Bybev%2BG%2Bq5jMIfd09QGOqUBaNABhby%2BtfL2ScCRR6uEyJWt2rji2BMUhHHGGkHhW%2BHgfi7fej41VbJWokaH1DGEzaM1lYFMo3YC%2BUDQenHB%2FyANewZwcsWIZHFKrKqHS%2BGcbEr87On0s9DLmf0KjwwVtVtP8OzOuRf3nDN0d6rV999bie6jz7Kd6KgyzU1Tnm7hiywXany9wZ%2BJt4SCC%2FleiPB68cj0Pa6K7Eb7HPSttazodYSw&X-Amz-Signature=82059943c5ff845b292b2ba82bba9cc673146d607e1e58db9feab0c540f24cdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OCSIGSC%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiBj4b2saAMpzfpDpzB1U5L90s3UGeJZvNijg6uZYXmAIgJUAjUBrQ8KM7ZGqM6Qf9KwxO1fPRKf0GAOJtYyf%2B1C8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVlhNvyHpx7nXVInCrcA7IlL2LruWKpBrT6U66WQvU6Lh0PwivaJ6JLGFoM27EfeSWyH%2F%2BO7ArhLp4BI%2BYfAAcEpMwRgXpHXchIcNgp5TrvZt5fOdw7KukH%2BLMHvgbfzbmIyCl5R7FokxQkQjXp2zAiXxLMSSk0B6FY1xcoJiv6XyWy2mp5XSyAc7SWBLpn4Vfj8hDq5Zvi5yy4irwE%2Fs%2FnW2HwlJL5IHhXykziIYAj3CaThE8x1wK%2BO17Z2gFpCcN99HVJRBDBRz60EbTCO%2B14J%2FwqV8A%2BiOHh%2FAFPk5fxEMyG2sH0S3dp1cbn6MfRo7A3HoVfc%2FAY3oY%2BTWEjgW9rn%2Bi0pZdcB9wXwLvo8RFTEv2M1e7hqN1govuOmZS8WbswJ4r8ck%2FKTfUWkYoro7J27HtEzDnf7p1wwBU8DzA%2FjoP1OBaXdit4YilZG5tS8KSmi%2FccrhZM2KWH4WkxiY2ASFTvIiM4IXV6aXrUhsiq7kJucVua1y1g62BGZQCsQ8xXr2NPna8PWWeOBbcwXzkwkjN%2BveFteGx09I%2FxajTYkDYt2RyCy%2BIpsjnT9HA%2FjD6jum58DI3hQjZ3QKyxmYKcUJyD5rI5ASPzE0cQcMbLOMpZZIxCa0ayO0Yd3zUt19%2FZ7Bybev%2BG%2Bq5jMIfd09QGOqUBaNABhby%2BtfL2ScCRR6uEyJWt2rji2BMUhHHGGkHhW%2BHgfi7fej41VbJWokaH1DGEzaM1lYFMo3YC%2BUDQenHB%2FyANewZwcsWIZHFKrKqHS%2BGcbEr87On0s9DLmf0KjwwVtVtP8OzOuRf3nDN0d6rV999bie6jz7Kd6KgyzU1Tnm7hiywXany9wZ%2BJt4SCC%2FleiPB68cj0Pa6K7Eb7HPSttazodYSw&X-Amz-Signature=9a059128d7c9451083f57c38732f6ab62ac24887014883a1ca16c5a3039825cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
