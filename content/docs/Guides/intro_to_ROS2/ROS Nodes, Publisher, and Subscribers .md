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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHSQA4K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCMUEQndnhas9IWwGdaSaRjHpnNxwWOXauCWVLw66IzhQIgW6KroJPrlstgubcNJ56sP0TfsK6njEc%2BWJIRC10g57cqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJ%2FLZLPV6nlDgNdSrcA5oz2kFe0KhzhOqfHBWlDFyt1FvH6q0JGpA4dsqB1qM6EF58V0rrTHg81GQ%2F%2FOornX7eS%2BJ2eWz%2Bqz88WJFpXthKkBtPKQJBoYwjqD0u%2FkKPeZe3VUu2uZwypvPDzXeELk%2FsSxR0Q3R9zke7uI1fETOdSJJdVCHTb9ws9BmTazBhxWp2xXctrSnQs%2BQ1HpTN58bAm9dLnDPLUa%2BB5yl75O1235L5diU1ykHxjFkuBsXDS0LDe62GMX9VhyKcMkGT7l5oRidT2yy58Lu4wlUI4%2FUwyzZdARA4HQDQ692SWfEsr1jlUX%2BkdG088X%2BGb%2Fk%2BbpCmpQ4VrTIYuZVZpiB1j7u9lbs5PsSoML7XK96%2B7ksJxuvm7tLJ6oCPE2uBeUvs9rLHBAAaOyUlefQMY4GMsHkDBWQW0nG354DyLTYh2u%2F9YvxZIwNOu7xbn4eKHPHZV2ubFcIrQDUdXc9Uvrq3ndVO2AWw0KE%2FJ41%2BuDW7Nm9PgiNl5bSZG6yeTGtoqzVJIr%2BhOcSfQUuTvr0Lip5X0Z06PrmnkzaIqTb8f72VBJlxpn%2BDQ3mul6nONcmEpXhiK1J78t66aNdbViSVZ0HhbTjobaooZ4p%2B3W%2BqcYPCW2uWb63GICRDQOskCLniMK%2FI0MQGOqUBM%2B7N%2BWyJJLpql0aF80fUDzz%2Boqd8Sg0oudpbQ4%2Baj8tOx4uBjf7eol%2BoYopT9epcaX1AvtI%2F5W9vJz8YrQ0oB%2BSsn34ipDp4P8xNjxGF5%2FcSfGHzSaHhZL1yyd1UhEkvO1k6Z%2Bi2edZhFXdyj51MnFZMzHa1f9YRw%2FcbehqZc3cOIq97gjn8wlf5EEpWaHTyx%2BBsVftkSf6AzSWSNceaLjCtLEWl&X-Amz-Signature=f9a335d70e11b849c8fe3b708e890f608d8e18d9fdc5ca7ed2d27735dadc2a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHSQA4K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCMUEQndnhas9IWwGdaSaRjHpnNxwWOXauCWVLw66IzhQIgW6KroJPrlstgubcNJ56sP0TfsK6njEc%2BWJIRC10g57cqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJ%2FLZLPV6nlDgNdSrcA5oz2kFe0KhzhOqfHBWlDFyt1FvH6q0JGpA4dsqB1qM6EF58V0rrTHg81GQ%2F%2FOornX7eS%2BJ2eWz%2Bqz88WJFpXthKkBtPKQJBoYwjqD0u%2FkKPeZe3VUu2uZwypvPDzXeELk%2FsSxR0Q3R9zke7uI1fETOdSJJdVCHTb9ws9BmTazBhxWp2xXctrSnQs%2BQ1HpTN58bAm9dLnDPLUa%2BB5yl75O1235L5diU1ykHxjFkuBsXDS0LDe62GMX9VhyKcMkGT7l5oRidT2yy58Lu4wlUI4%2FUwyzZdARA4HQDQ692SWfEsr1jlUX%2BkdG088X%2BGb%2Fk%2BbpCmpQ4VrTIYuZVZpiB1j7u9lbs5PsSoML7XK96%2B7ksJxuvm7tLJ6oCPE2uBeUvs9rLHBAAaOyUlefQMY4GMsHkDBWQW0nG354DyLTYh2u%2F9YvxZIwNOu7xbn4eKHPHZV2ubFcIrQDUdXc9Uvrq3ndVO2AWw0KE%2FJ41%2BuDW7Nm9PgiNl5bSZG6yeTGtoqzVJIr%2BhOcSfQUuTvr0Lip5X0Z06PrmnkzaIqTb8f72VBJlxpn%2BDQ3mul6nONcmEpXhiK1J78t66aNdbViSVZ0HhbTjobaooZ4p%2B3W%2BqcYPCW2uWb63GICRDQOskCLniMK%2FI0MQGOqUBM%2B7N%2BWyJJLpql0aF80fUDzz%2Boqd8Sg0oudpbQ4%2Baj8tOx4uBjf7eol%2BoYopT9epcaX1AvtI%2F5W9vJz8YrQ0oB%2BSsn34ipDp4P8xNjxGF5%2FcSfGHzSaHhZL1yyd1UhEkvO1k6Z%2Bi2edZhFXdyj51MnFZMzHa1f9YRw%2FcbehqZc3cOIq97gjn8wlf5EEpWaHTyx%2BBsVftkSf6AzSWSNceaLjCtLEWl&X-Amz-Signature=6954a20bdf1359e6ce4787b995bfab553ac597e1051794e4f7cb0e7ed2f70bd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHSQA4K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCMUEQndnhas9IWwGdaSaRjHpnNxwWOXauCWVLw66IzhQIgW6KroJPrlstgubcNJ56sP0TfsK6njEc%2BWJIRC10g57cqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJ%2FLZLPV6nlDgNdSrcA5oz2kFe0KhzhOqfHBWlDFyt1FvH6q0JGpA4dsqB1qM6EF58V0rrTHg81GQ%2F%2FOornX7eS%2BJ2eWz%2Bqz88WJFpXthKkBtPKQJBoYwjqD0u%2FkKPeZe3VUu2uZwypvPDzXeELk%2FsSxR0Q3R9zke7uI1fETOdSJJdVCHTb9ws9BmTazBhxWp2xXctrSnQs%2BQ1HpTN58bAm9dLnDPLUa%2BB5yl75O1235L5diU1ykHxjFkuBsXDS0LDe62GMX9VhyKcMkGT7l5oRidT2yy58Lu4wlUI4%2FUwyzZdARA4HQDQ692SWfEsr1jlUX%2BkdG088X%2BGb%2Fk%2BbpCmpQ4VrTIYuZVZpiB1j7u9lbs5PsSoML7XK96%2B7ksJxuvm7tLJ6oCPE2uBeUvs9rLHBAAaOyUlefQMY4GMsHkDBWQW0nG354DyLTYh2u%2F9YvxZIwNOu7xbn4eKHPHZV2ubFcIrQDUdXc9Uvrq3ndVO2AWw0KE%2FJ41%2BuDW7Nm9PgiNl5bSZG6yeTGtoqzVJIr%2BhOcSfQUuTvr0Lip5X0Z06PrmnkzaIqTb8f72VBJlxpn%2BDQ3mul6nONcmEpXhiK1J78t66aNdbViSVZ0HhbTjobaooZ4p%2B3W%2BqcYPCW2uWb63GICRDQOskCLniMK%2FI0MQGOqUBM%2B7N%2BWyJJLpql0aF80fUDzz%2Boqd8Sg0oudpbQ4%2Baj8tOx4uBjf7eol%2BoYopT9epcaX1AvtI%2F5W9vJz8YrQ0oB%2BSsn34ipDp4P8xNjxGF5%2FcSfGHzSaHhZL1yyd1UhEkvO1k6Z%2Bi2edZhFXdyj51MnFZMzHa1f9YRw%2FcbehqZc3cOIq97gjn8wlf5EEpWaHTyx%2BBsVftkSf6AzSWSNceaLjCtLEWl&X-Amz-Signature=66c06ed2b8b2c1720089f237c9d889a65923ec64c0c3df89ca2c785dfde3b496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHSQA4K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCMUEQndnhas9IWwGdaSaRjHpnNxwWOXauCWVLw66IzhQIgW6KroJPrlstgubcNJ56sP0TfsK6njEc%2BWJIRC10g57cqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJ%2FLZLPV6nlDgNdSrcA5oz2kFe0KhzhOqfHBWlDFyt1FvH6q0JGpA4dsqB1qM6EF58V0rrTHg81GQ%2F%2FOornX7eS%2BJ2eWz%2Bqz88WJFpXthKkBtPKQJBoYwjqD0u%2FkKPeZe3VUu2uZwypvPDzXeELk%2FsSxR0Q3R9zke7uI1fETOdSJJdVCHTb9ws9BmTazBhxWp2xXctrSnQs%2BQ1HpTN58bAm9dLnDPLUa%2BB5yl75O1235L5diU1ykHxjFkuBsXDS0LDe62GMX9VhyKcMkGT7l5oRidT2yy58Lu4wlUI4%2FUwyzZdARA4HQDQ692SWfEsr1jlUX%2BkdG088X%2BGb%2Fk%2BbpCmpQ4VrTIYuZVZpiB1j7u9lbs5PsSoML7XK96%2B7ksJxuvm7tLJ6oCPE2uBeUvs9rLHBAAaOyUlefQMY4GMsHkDBWQW0nG354DyLTYh2u%2F9YvxZIwNOu7xbn4eKHPHZV2ubFcIrQDUdXc9Uvrq3ndVO2AWw0KE%2FJ41%2BuDW7Nm9PgiNl5bSZG6yeTGtoqzVJIr%2BhOcSfQUuTvr0Lip5X0Z06PrmnkzaIqTb8f72VBJlxpn%2BDQ3mul6nONcmEpXhiK1J78t66aNdbViSVZ0HhbTjobaooZ4p%2B3W%2BqcYPCW2uWb63GICRDQOskCLniMK%2FI0MQGOqUBM%2B7N%2BWyJJLpql0aF80fUDzz%2Boqd8Sg0oudpbQ4%2Baj8tOx4uBjf7eol%2BoYopT9epcaX1AvtI%2F5W9vJz8YrQ0oB%2BSsn34ipDp4P8xNjxGF5%2FcSfGHzSaHhZL1yyd1UhEkvO1k6Z%2Bi2edZhFXdyj51MnFZMzHa1f9YRw%2FcbehqZc3cOIq97gjn8wlf5EEpWaHTyx%2BBsVftkSf6AzSWSNceaLjCtLEWl&X-Amz-Signature=de034957f191079fe3a5ae30faf34dcfeb405267dde9b24d400c3068f057642c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHSQA4K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCMUEQndnhas9IWwGdaSaRjHpnNxwWOXauCWVLw66IzhQIgW6KroJPrlstgubcNJ56sP0TfsK6njEc%2BWJIRC10g57cqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJ%2FLZLPV6nlDgNdSrcA5oz2kFe0KhzhOqfHBWlDFyt1FvH6q0JGpA4dsqB1qM6EF58V0rrTHg81GQ%2F%2FOornX7eS%2BJ2eWz%2Bqz88WJFpXthKkBtPKQJBoYwjqD0u%2FkKPeZe3VUu2uZwypvPDzXeELk%2FsSxR0Q3R9zke7uI1fETOdSJJdVCHTb9ws9BmTazBhxWp2xXctrSnQs%2BQ1HpTN58bAm9dLnDPLUa%2BB5yl75O1235L5diU1ykHxjFkuBsXDS0LDe62GMX9VhyKcMkGT7l5oRidT2yy58Lu4wlUI4%2FUwyzZdARA4HQDQ692SWfEsr1jlUX%2BkdG088X%2BGb%2Fk%2BbpCmpQ4VrTIYuZVZpiB1j7u9lbs5PsSoML7XK96%2B7ksJxuvm7tLJ6oCPE2uBeUvs9rLHBAAaOyUlefQMY4GMsHkDBWQW0nG354DyLTYh2u%2F9YvxZIwNOu7xbn4eKHPHZV2ubFcIrQDUdXc9Uvrq3ndVO2AWw0KE%2FJ41%2BuDW7Nm9PgiNl5bSZG6yeTGtoqzVJIr%2BhOcSfQUuTvr0Lip5X0Z06PrmnkzaIqTb8f72VBJlxpn%2BDQ3mul6nONcmEpXhiK1J78t66aNdbViSVZ0HhbTjobaooZ4p%2B3W%2BqcYPCW2uWb63GICRDQOskCLniMK%2FI0MQGOqUBM%2B7N%2BWyJJLpql0aF80fUDzz%2Boqd8Sg0oudpbQ4%2Baj8tOx4uBjf7eol%2BoYopT9epcaX1AvtI%2F5W9vJz8YrQ0oB%2BSsn34ipDp4P8xNjxGF5%2FcSfGHzSaHhZL1yyd1UhEkvO1k6Z%2Bi2edZhFXdyj51MnFZMzHa1f9YRw%2FcbehqZc3cOIq97gjn8wlf5EEpWaHTyx%2BBsVftkSf6AzSWSNceaLjCtLEWl&X-Amz-Signature=706444ababdd1f4524d505cf9b2d4605d20679609609d2d8ff06a4cc36f06185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHSQA4K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCMUEQndnhas9IWwGdaSaRjHpnNxwWOXauCWVLw66IzhQIgW6KroJPrlstgubcNJ56sP0TfsK6njEc%2BWJIRC10g57cqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJ%2FLZLPV6nlDgNdSrcA5oz2kFe0KhzhOqfHBWlDFyt1FvH6q0JGpA4dsqB1qM6EF58V0rrTHg81GQ%2F%2FOornX7eS%2BJ2eWz%2Bqz88WJFpXthKkBtPKQJBoYwjqD0u%2FkKPeZe3VUu2uZwypvPDzXeELk%2FsSxR0Q3R9zke7uI1fETOdSJJdVCHTb9ws9BmTazBhxWp2xXctrSnQs%2BQ1HpTN58bAm9dLnDPLUa%2BB5yl75O1235L5diU1ykHxjFkuBsXDS0LDe62GMX9VhyKcMkGT7l5oRidT2yy58Lu4wlUI4%2FUwyzZdARA4HQDQ692SWfEsr1jlUX%2BkdG088X%2BGb%2Fk%2BbpCmpQ4VrTIYuZVZpiB1j7u9lbs5PsSoML7XK96%2B7ksJxuvm7tLJ6oCPE2uBeUvs9rLHBAAaOyUlefQMY4GMsHkDBWQW0nG354DyLTYh2u%2F9YvxZIwNOu7xbn4eKHPHZV2ubFcIrQDUdXc9Uvrq3ndVO2AWw0KE%2FJ41%2BuDW7Nm9PgiNl5bSZG6yeTGtoqzVJIr%2BhOcSfQUuTvr0Lip5X0Z06PrmnkzaIqTb8f72VBJlxpn%2BDQ3mul6nONcmEpXhiK1J78t66aNdbViSVZ0HhbTjobaooZ4p%2B3W%2BqcYPCW2uWb63GICRDQOskCLniMK%2FI0MQGOqUBM%2B7N%2BWyJJLpql0aF80fUDzz%2Boqd8Sg0oudpbQ4%2Baj8tOx4uBjf7eol%2BoYopT9epcaX1AvtI%2F5W9vJz8YrQ0oB%2BSsn34ipDp4P8xNjxGF5%2FcSfGHzSaHhZL1yyd1UhEkvO1k6Z%2Bi2edZhFXdyj51MnFZMzHa1f9YRw%2FcbehqZc3cOIq97gjn8wlf5EEpWaHTyx%2BBsVftkSf6AzSWSNceaLjCtLEWl&X-Amz-Signature=86833518213931318a77f44cc1bccdcb71231f0f4e98a88d20c886be5be95f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHSQA4K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCMUEQndnhas9IWwGdaSaRjHpnNxwWOXauCWVLw66IzhQIgW6KroJPrlstgubcNJ56sP0TfsK6njEc%2BWJIRC10g57cqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJ%2FLZLPV6nlDgNdSrcA5oz2kFe0KhzhOqfHBWlDFyt1FvH6q0JGpA4dsqB1qM6EF58V0rrTHg81GQ%2F%2FOornX7eS%2BJ2eWz%2Bqz88WJFpXthKkBtPKQJBoYwjqD0u%2FkKPeZe3VUu2uZwypvPDzXeELk%2FsSxR0Q3R9zke7uI1fETOdSJJdVCHTb9ws9BmTazBhxWp2xXctrSnQs%2BQ1HpTN58bAm9dLnDPLUa%2BB5yl75O1235L5diU1ykHxjFkuBsXDS0LDe62GMX9VhyKcMkGT7l5oRidT2yy58Lu4wlUI4%2FUwyzZdARA4HQDQ692SWfEsr1jlUX%2BkdG088X%2BGb%2Fk%2BbpCmpQ4VrTIYuZVZpiB1j7u9lbs5PsSoML7XK96%2B7ksJxuvm7tLJ6oCPE2uBeUvs9rLHBAAaOyUlefQMY4GMsHkDBWQW0nG354DyLTYh2u%2F9YvxZIwNOu7xbn4eKHPHZV2ubFcIrQDUdXc9Uvrq3ndVO2AWw0KE%2FJ41%2BuDW7Nm9PgiNl5bSZG6yeTGtoqzVJIr%2BhOcSfQUuTvr0Lip5X0Z06PrmnkzaIqTb8f72VBJlxpn%2BDQ3mul6nONcmEpXhiK1J78t66aNdbViSVZ0HhbTjobaooZ4p%2B3W%2BqcYPCW2uWb63GICRDQOskCLniMK%2FI0MQGOqUBM%2B7N%2BWyJJLpql0aF80fUDzz%2Boqd8Sg0oudpbQ4%2Baj8tOx4uBjf7eol%2BoYopT9epcaX1AvtI%2F5W9vJz8YrQ0oB%2BSsn34ipDp4P8xNjxGF5%2FcSfGHzSaHhZL1yyd1UhEkvO1k6Z%2Bi2edZhFXdyj51MnFZMzHa1f9YRw%2FcbehqZc3cOIq97gjn8wlf5EEpWaHTyx%2BBsVftkSf6AzSWSNceaLjCtLEWl&X-Amz-Signature=61d3a5d27a75fefa6b5b2fc45d3bfd04fc5bdd5ac6aa0b05a8233290977a8e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHSQA4K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCMUEQndnhas9IWwGdaSaRjHpnNxwWOXauCWVLw66IzhQIgW6KroJPrlstgubcNJ56sP0TfsK6njEc%2BWJIRC10g57cqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJ%2FLZLPV6nlDgNdSrcA5oz2kFe0KhzhOqfHBWlDFyt1FvH6q0JGpA4dsqB1qM6EF58V0rrTHg81GQ%2F%2FOornX7eS%2BJ2eWz%2Bqz88WJFpXthKkBtPKQJBoYwjqD0u%2FkKPeZe3VUu2uZwypvPDzXeELk%2FsSxR0Q3R9zke7uI1fETOdSJJdVCHTb9ws9BmTazBhxWp2xXctrSnQs%2BQ1HpTN58bAm9dLnDPLUa%2BB5yl75O1235L5diU1ykHxjFkuBsXDS0LDe62GMX9VhyKcMkGT7l5oRidT2yy58Lu4wlUI4%2FUwyzZdARA4HQDQ692SWfEsr1jlUX%2BkdG088X%2BGb%2Fk%2BbpCmpQ4VrTIYuZVZpiB1j7u9lbs5PsSoML7XK96%2B7ksJxuvm7tLJ6oCPE2uBeUvs9rLHBAAaOyUlefQMY4GMsHkDBWQW0nG354DyLTYh2u%2F9YvxZIwNOu7xbn4eKHPHZV2ubFcIrQDUdXc9Uvrq3ndVO2AWw0KE%2FJ41%2BuDW7Nm9PgiNl5bSZG6yeTGtoqzVJIr%2BhOcSfQUuTvr0Lip5X0Z06PrmnkzaIqTb8f72VBJlxpn%2BDQ3mul6nONcmEpXhiK1J78t66aNdbViSVZ0HhbTjobaooZ4p%2B3W%2BqcYPCW2uWb63GICRDQOskCLniMK%2FI0MQGOqUBM%2B7N%2BWyJJLpql0aF80fUDzz%2Boqd8Sg0oudpbQ4%2Baj8tOx4uBjf7eol%2BoYopT9epcaX1AvtI%2F5W9vJz8YrQ0oB%2BSsn34ipDp4P8xNjxGF5%2FcSfGHzSaHhZL1yyd1UhEkvO1k6Z%2Bi2edZhFXdyj51MnFZMzHa1f9YRw%2FcbehqZc3cOIq97gjn8wlf5EEpWaHTyx%2BBsVftkSf6AzSWSNceaLjCtLEWl&X-Amz-Signature=a99a4d4417fbb6be39c83605dafe7567c8f6e60363884909bc6f915da16d641b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
