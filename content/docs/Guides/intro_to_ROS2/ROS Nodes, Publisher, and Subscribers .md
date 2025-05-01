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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHPK6UBW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIA6n%2Fq2JlujX4dnuJ3opbXgliHZBGIu16X14jAyux7CdAiEA3QdubLSu9vZKvXpul1WOH8rdOQ079mc9V983d560maUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqtMbND%2B1PGp2%2B99CrcA77Ai5%2BWXp7iVX18XmGuR%2FSh18wRjeRUhXdHI%2B53%2FpmoCtL2KD8dHHbim6WMBYTF2k2juUvEzs3Rd%2FjIILDmxDmIwPLfvbzKKJvl%2FClZB%2ByGw6D8cRmZ76m%2FZ%2Fi1O3BOBFLDg7OaQCK3%2F4xIxxKFNUWmlI2rj9rauvJ0j8ZbVllEgpfjEaKYRq1GLRlccgEzbl2%2BOuMkX6hG9FejOLR1gkvrOKdISlwlID%2BRMqrzn0urtEAbItiKtiCyvYEe7ZfrMvT%2B9UluG6LvUQhNCpJJn4YWkZg4%2F8u4qol9rJjV4aj86xpGqD9RUWihdC6eKjTz1ZKZNY5eUvP3UGUd0meVRLXxSK6pNiY3s7scVHZO6yHlmwU9czs8IzfhUsBXQ3A7cVN40K4F4rXakHTw%2B0eA9kLD8cJNzst98aGHaSbTCWRVGhatZ6yy3WSkAE9%2FkFupE8wClqWx7na%2F1jOn2o0IsE3E1FzjDcZ%2FL6shYy68ka7hwTaOzRsPDVPd1wdO6v9j10ZddMI4YcJQNtlFKBjIA1nJW8%2FtoEl7dOVhIaGsHSX6JlhnSeZiDAxBMTuSP3BVrAQ2NNeztOi%2FWPYk5HEbFoPhwuXUjpYUHcX3IJFu8W8nQJoJBKTfXK%2FuwxEUMOugzsAGOqUB%2F2un1jCgug8%2FJSi%2FYEjZIUf0B3x6h0umQv8L1b95LN6y3VNCY6encduTHaD%2BMHLE4iaUpGymPEFg1PrBIjYoOWkHuAvD%2BQ2TUKz225kcGbyvnM1LpbKNcUx7sTsISFEcOVLbYbjLEUfYET6iCrqfzwd2ixoucFnz9NSqI5ZBzQqtOxs%2F1FnEUC3wPjaubMdpKqEAtuc%2FR5JvqXTwCQCRhU3nrBIg&X-Amz-Signature=a1507d338535a88628f8e43c14ef7ba1ba5a763c700ca10a4c0204d41694f135&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHPK6UBW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIA6n%2Fq2JlujX4dnuJ3opbXgliHZBGIu16X14jAyux7CdAiEA3QdubLSu9vZKvXpul1WOH8rdOQ079mc9V983d560maUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqtMbND%2B1PGp2%2B99CrcA77Ai5%2BWXp7iVX18XmGuR%2FSh18wRjeRUhXdHI%2B53%2FpmoCtL2KD8dHHbim6WMBYTF2k2juUvEzs3Rd%2FjIILDmxDmIwPLfvbzKKJvl%2FClZB%2ByGw6D8cRmZ76m%2FZ%2Fi1O3BOBFLDg7OaQCK3%2F4xIxxKFNUWmlI2rj9rauvJ0j8ZbVllEgpfjEaKYRq1GLRlccgEzbl2%2BOuMkX6hG9FejOLR1gkvrOKdISlwlID%2BRMqrzn0urtEAbItiKtiCyvYEe7ZfrMvT%2B9UluG6LvUQhNCpJJn4YWkZg4%2F8u4qol9rJjV4aj86xpGqD9RUWihdC6eKjTz1ZKZNY5eUvP3UGUd0meVRLXxSK6pNiY3s7scVHZO6yHlmwU9czs8IzfhUsBXQ3A7cVN40K4F4rXakHTw%2B0eA9kLD8cJNzst98aGHaSbTCWRVGhatZ6yy3WSkAE9%2FkFupE8wClqWx7na%2F1jOn2o0IsE3E1FzjDcZ%2FL6shYy68ka7hwTaOzRsPDVPd1wdO6v9j10ZddMI4YcJQNtlFKBjIA1nJW8%2FtoEl7dOVhIaGsHSX6JlhnSeZiDAxBMTuSP3BVrAQ2NNeztOi%2FWPYk5HEbFoPhwuXUjpYUHcX3IJFu8W8nQJoJBKTfXK%2FuwxEUMOugzsAGOqUB%2F2un1jCgug8%2FJSi%2FYEjZIUf0B3x6h0umQv8L1b95LN6y3VNCY6encduTHaD%2BMHLE4iaUpGymPEFg1PrBIjYoOWkHuAvD%2BQ2TUKz225kcGbyvnM1LpbKNcUx7sTsISFEcOVLbYbjLEUfYET6iCrqfzwd2ixoucFnz9NSqI5ZBzQqtOxs%2F1FnEUC3wPjaubMdpKqEAtuc%2FR5JvqXTwCQCRhU3nrBIg&X-Amz-Signature=94519aa43790c44360e24f5689c290e9225fafc219edbbae6715b8236d2000ea&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHPK6UBW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIA6n%2Fq2JlujX4dnuJ3opbXgliHZBGIu16X14jAyux7CdAiEA3QdubLSu9vZKvXpul1WOH8rdOQ079mc9V983d560maUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqtMbND%2B1PGp2%2B99CrcA77Ai5%2BWXp7iVX18XmGuR%2FSh18wRjeRUhXdHI%2B53%2FpmoCtL2KD8dHHbim6WMBYTF2k2juUvEzs3Rd%2FjIILDmxDmIwPLfvbzKKJvl%2FClZB%2ByGw6D8cRmZ76m%2FZ%2Fi1O3BOBFLDg7OaQCK3%2F4xIxxKFNUWmlI2rj9rauvJ0j8ZbVllEgpfjEaKYRq1GLRlccgEzbl2%2BOuMkX6hG9FejOLR1gkvrOKdISlwlID%2BRMqrzn0urtEAbItiKtiCyvYEe7ZfrMvT%2B9UluG6LvUQhNCpJJn4YWkZg4%2F8u4qol9rJjV4aj86xpGqD9RUWihdC6eKjTz1ZKZNY5eUvP3UGUd0meVRLXxSK6pNiY3s7scVHZO6yHlmwU9czs8IzfhUsBXQ3A7cVN40K4F4rXakHTw%2B0eA9kLD8cJNzst98aGHaSbTCWRVGhatZ6yy3WSkAE9%2FkFupE8wClqWx7na%2F1jOn2o0IsE3E1FzjDcZ%2FL6shYy68ka7hwTaOzRsPDVPd1wdO6v9j10ZddMI4YcJQNtlFKBjIA1nJW8%2FtoEl7dOVhIaGsHSX6JlhnSeZiDAxBMTuSP3BVrAQ2NNeztOi%2FWPYk5HEbFoPhwuXUjpYUHcX3IJFu8W8nQJoJBKTfXK%2FuwxEUMOugzsAGOqUB%2F2un1jCgug8%2FJSi%2FYEjZIUf0B3x6h0umQv8L1b95LN6y3VNCY6encduTHaD%2BMHLE4iaUpGymPEFg1PrBIjYoOWkHuAvD%2BQ2TUKz225kcGbyvnM1LpbKNcUx7sTsISFEcOVLbYbjLEUfYET6iCrqfzwd2ixoucFnz9NSqI5ZBzQqtOxs%2F1FnEUC3wPjaubMdpKqEAtuc%2FR5JvqXTwCQCRhU3nrBIg&X-Amz-Signature=656e7f3299f5cbebada4b55280b4ad6003b95abcd9ddabbc98fccadaa0ea5c36&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHPK6UBW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIA6n%2Fq2JlujX4dnuJ3opbXgliHZBGIu16X14jAyux7CdAiEA3QdubLSu9vZKvXpul1WOH8rdOQ079mc9V983d560maUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqtMbND%2B1PGp2%2B99CrcA77Ai5%2BWXp7iVX18XmGuR%2FSh18wRjeRUhXdHI%2B53%2FpmoCtL2KD8dHHbim6WMBYTF2k2juUvEzs3Rd%2FjIILDmxDmIwPLfvbzKKJvl%2FClZB%2ByGw6D8cRmZ76m%2FZ%2Fi1O3BOBFLDg7OaQCK3%2F4xIxxKFNUWmlI2rj9rauvJ0j8ZbVllEgpfjEaKYRq1GLRlccgEzbl2%2BOuMkX6hG9FejOLR1gkvrOKdISlwlID%2BRMqrzn0urtEAbItiKtiCyvYEe7ZfrMvT%2B9UluG6LvUQhNCpJJn4YWkZg4%2F8u4qol9rJjV4aj86xpGqD9RUWihdC6eKjTz1ZKZNY5eUvP3UGUd0meVRLXxSK6pNiY3s7scVHZO6yHlmwU9czs8IzfhUsBXQ3A7cVN40K4F4rXakHTw%2B0eA9kLD8cJNzst98aGHaSbTCWRVGhatZ6yy3WSkAE9%2FkFupE8wClqWx7na%2F1jOn2o0IsE3E1FzjDcZ%2FL6shYy68ka7hwTaOzRsPDVPd1wdO6v9j10ZddMI4YcJQNtlFKBjIA1nJW8%2FtoEl7dOVhIaGsHSX6JlhnSeZiDAxBMTuSP3BVrAQ2NNeztOi%2FWPYk5HEbFoPhwuXUjpYUHcX3IJFu8W8nQJoJBKTfXK%2FuwxEUMOugzsAGOqUB%2F2un1jCgug8%2FJSi%2FYEjZIUf0B3x6h0umQv8L1b95LN6y3VNCY6encduTHaD%2BMHLE4iaUpGymPEFg1PrBIjYoOWkHuAvD%2BQ2TUKz225kcGbyvnM1LpbKNcUx7sTsISFEcOVLbYbjLEUfYET6iCrqfzwd2ixoucFnz9NSqI5ZBzQqtOxs%2F1FnEUC3wPjaubMdpKqEAtuc%2FR5JvqXTwCQCRhU3nrBIg&X-Amz-Signature=cad6749213d531b120ab7c840b69bcd18aca003b6e5642b3a53d96962ef70689&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHPK6UBW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIA6n%2Fq2JlujX4dnuJ3opbXgliHZBGIu16X14jAyux7CdAiEA3QdubLSu9vZKvXpul1WOH8rdOQ079mc9V983d560maUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqtMbND%2B1PGp2%2B99CrcA77Ai5%2BWXp7iVX18XmGuR%2FSh18wRjeRUhXdHI%2B53%2FpmoCtL2KD8dHHbim6WMBYTF2k2juUvEzs3Rd%2FjIILDmxDmIwPLfvbzKKJvl%2FClZB%2ByGw6D8cRmZ76m%2FZ%2Fi1O3BOBFLDg7OaQCK3%2F4xIxxKFNUWmlI2rj9rauvJ0j8ZbVllEgpfjEaKYRq1GLRlccgEzbl2%2BOuMkX6hG9FejOLR1gkvrOKdISlwlID%2BRMqrzn0urtEAbItiKtiCyvYEe7ZfrMvT%2B9UluG6LvUQhNCpJJn4YWkZg4%2F8u4qol9rJjV4aj86xpGqD9RUWihdC6eKjTz1ZKZNY5eUvP3UGUd0meVRLXxSK6pNiY3s7scVHZO6yHlmwU9czs8IzfhUsBXQ3A7cVN40K4F4rXakHTw%2B0eA9kLD8cJNzst98aGHaSbTCWRVGhatZ6yy3WSkAE9%2FkFupE8wClqWx7na%2F1jOn2o0IsE3E1FzjDcZ%2FL6shYy68ka7hwTaOzRsPDVPd1wdO6v9j10ZddMI4YcJQNtlFKBjIA1nJW8%2FtoEl7dOVhIaGsHSX6JlhnSeZiDAxBMTuSP3BVrAQ2NNeztOi%2FWPYk5HEbFoPhwuXUjpYUHcX3IJFu8W8nQJoJBKTfXK%2FuwxEUMOugzsAGOqUB%2F2un1jCgug8%2FJSi%2FYEjZIUf0B3x6h0umQv8L1b95LN6y3VNCY6encduTHaD%2BMHLE4iaUpGymPEFg1PrBIjYoOWkHuAvD%2BQ2TUKz225kcGbyvnM1LpbKNcUx7sTsISFEcOVLbYbjLEUfYET6iCrqfzwd2ixoucFnz9NSqI5ZBzQqtOxs%2F1FnEUC3wPjaubMdpKqEAtuc%2FR5JvqXTwCQCRhU3nrBIg&X-Amz-Signature=2bc59b6031ba6c3a19410651d63c5f1bea19dafc89e39a98b770cd72e5d80b34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHPK6UBW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIA6n%2Fq2JlujX4dnuJ3opbXgliHZBGIu16X14jAyux7CdAiEA3QdubLSu9vZKvXpul1WOH8rdOQ079mc9V983d560maUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqtMbND%2B1PGp2%2B99CrcA77Ai5%2BWXp7iVX18XmGuR%2FSh18wRjeRUhXdHI%2B53%2FpmoCtL2KD8dHHbim6WMBYTF2k2juUvEzs3Rd%2FjIILDmxDmIwPLfvbzKKJvl%2FClZB%2ByGw6D8cRmZ76m%2FZ%2Fi1O3BOBFLDg7OaQCK3%2F4xIxxKFNUWmlI2rj9rauvJ0j8ZbVllEgpfjEaKYRq1GLRlccgEzbl2%2BOuMkX6hG9FejOLR1gkvrOKdISlwlID%2BRMqrzn0urtEAbItiKtiCyvYEe7ZfrMvT%2B9UluG6LvUQhNCpJJn4YWkZg4%2F8u4qol9rJjV4aj86xpGqD9RUWihdC6eKjTz1ZKZNY5eUvP3UGUd0meVRLXxSK6pNiY3s7scVHZO6yHlmwU9czs8IzfhUsBXQ3A7cVN40K4F4rXakHTw%2B0eA9kLD8cJNzst98aGHaSbTCWRVGhatZ6yy3WSkAE9%2FkFupE8wClqWx7na%2F1jOn2o0IsE3E1FzjDcZ%2FL6shYy68ka7hwTaOzRsPDVPd1wdO6v9j10ZddMI4YcJQNtlFKBjIA1nJW8%2FtoEl7dOVhIaGsHSX6JlhnSeZiDAxBMTuSP3BVrAQ2NNeztOi%2FWPYk5HEbFoPhwuXUjpYUHcX3IJFu8W8nQJoJBKTfXK%2FuwxEUMOugzsAGOqUB%2F2un1jCgug8%2FJSi%2FYEjZIUf0B3x6h0umQv8L1b95LN6y3VNCY6encduTHaD%2BMHLE4iaUpGymPEFg1PrBIjYoOWkHuAvD%2BQ2TUKz225kcGbyvnM1LpbKNcUx7sTsISFEcOVLbYbjLEUfYET6iCrqfzwd2ixoucFnz9NSqI5ZBzQqtOxs%2F1FnEUC3wPjaubMdpKqEAtuc%2FR5JvqXTwCQCRhU3nrBIg&X-Amz-Signature=33dd1c4e487ffe99e016de4ed45ac04fb5919e8d27a449980cee9bfc6ded2ed2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHPK6UBW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIA6n%2Fq2JlujX4dnuJ3opbXgliHZBGIu16X14jAyux7CdAiEA3QdubLSu9vZKvXpul1WOH8rdOQ079mc9V983d560maUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqtMbND%2B1PGp2%2B99CrcA77Ai5%2BWXp7iVX18XmGuR%2FSh18wRjeRUhXdHI%2B53%2FpmoCtL2KD8dHHbim6WMBYTF2k2juUvEzs3Rd%2FjIILDmxDmIwPLfvbzKKJvl%2FClZB%2ByGw6D8cRmZ76m%2FZ%2Fi1O3BOBFLDg7OaQCK3%2F4xIxxKFNUWmlI2rj9rauvJ0j8ZbVllEgpfjEaKYRq1GLRlccgEzbl2%2BOuMkX6hG9FejOLR1gkvrOKdISlwlID%2BRMqrzn0urtEAbItiKtiCyvYEe7ZfrMvT%2B9UluG6LvUQhNCpJJn4YWkZg4%2F8u4qol9rJjV4aj86xpGqD9RUWihdC6eKjTz1ZKZNY5eUvP3UGUd0meVRLXxSK6pNiY3s7scVHZO6yHlmwU9czs8IzfhUsBXQ3A7cVN40K4F4rXakHTw%2B0eA9kLD8cJNzst98aGHaSbTCWRVGhatZ6yy3WSkAE9%2FkFupE8wClqWx7na%2F1jOn2o0IsE3E1FzjDcZ%2FL6shYy68ka7hwTaOzRsPDVPd1wdO6v9j10ZddMI4YcJQNtlFKBjIA1nJW8%2FtoEl7dOVhIaGsHSX6JlhnSeZiDAxBMTuSP3BVrAQ2NNeztOi%2FWPYk5HEbFoPhwuXUjpYUHcX3IJFu8W8nQJoJBKTfXK%2FuwxEUMOugzsAGOqUB%2F2un1jCgug8%2FJSi%2FYEjZIUf0B3x6h0umQv8L1b95LN6y3VNCY6encduTHaD%2BMHLE4iaUpGymPEFg1PrBIjYoOWkHuAvD%2BQ2TUKz225kcGbyvnM1LpbKNcUx7sTsISFEcOVLbYbjLEUfYET6iCrqfzwd2ixoucFnz9NSqI5ZBzQqtOxs%2F1FnEUC3wPjaubMdpKqEAtuc%2FR5JvqXTwCQCRhU3nrBIg&X-Amz-Signature=3d0e51223d8f664a9217987c96e3d4d504189514c9e1736a523d190e3e000a73&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHPK6UBW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIA6n%2Fq2JlujX4dnuJ3opbXgliHZBGIu16X14jAyux7CdAiEA3QdubLSu9vZKvXpul1WOH8rdOQ079mc9V983d560maUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqtMbND%2B1PGp2%2B99CrcA77Ai5%2BWXp7iVX18XmGuR%2FSh18wRjeRUhXdHI%2B53%2FpmoCtL2KD8dHHbim6WMBYTF2k2juUvEzs3Rd%2FjIILDmxDmIwPLfvbzKKJvl%2FClZB%2ByGw6D8cRmZ76m%2FZ%2Fi1O3BOBFLDg7OaQCK3%2F4xIxxKFNUWmlI2rj9rauvJ0j8ZbVllEgpfjEaKYRq1GLRlccgEzbl2%2BOuMkX6hG9FejOLR1gkvrOKdISlwlID%2BRMqrzn0urtEAbItiKtiCyvYEe7ZfrMvT%2B9UluG6LvUQhNCpJJn4YWkZg4%2F8u4qol9rJjV4aj86xpGqD9RUWihdC6eKjTz1ZKZNY5eUvP3UGUd0meVRLXxSK6pNiY3s7scVHZO6yHlmwU9czs8IzfhUsBXQ3A7cVN40K4F4rXakHTw%2B0eA9kLD8cJNzst98aGHaSbTCWRVGhatZ6yy3WSkAE9%2FkFupE8wClqWx7na%2F1jOn2o0IsE3E1FzjDcZ%2FL6shYy68ka7hwTaOzRsPDVPd1wdO6v9j10ZddMI4YcJQNtlFKBjIA1nJW8%2FtoEl7dOVhIaGsHSX6JlhnSeZiDAxBMTuSP3BVrAQ2NNeztOi%2FWPYk5HEbFoPhwuXUjpYUHcX3IJFu8W8nQJoJBKTfXK%2FuwxEUMOugzsAGOqUB%2F2un1jCgug8%2FJSi%2FYEjZIUf0B3x6h0umQv8L1b95LN6y3VNCY6encduTHaD%2BMHLE4iaUpGymPEFg1PrBIjYoOWkHuAvD%2BQ2TUKz225kcGbyvnM1LpbKNcUx7sTsISFEcOVLbYbjLEUfYET6iCrqfzwd2ixoucFnz9NSqI5ZBzQqtOxs%2F1FnEUC3wPjaubMdpKqEAtuc%2FR5JvqXTwCQCRhU3nrBIg&X-Amz-Signature=14f4ba5f2886e7991e8c1e9b9d086aa5bb407527543b0486d4a76727f0b25867&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
