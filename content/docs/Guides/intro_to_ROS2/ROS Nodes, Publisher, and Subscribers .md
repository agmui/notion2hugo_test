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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2AQBECS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIARZ5Q0eTBls3ZvmI9ZTQIu1KV1ztVW2s0ZyRKkusSeIAiBLySrPS%2FKUUPSwLDYtBydhe4upXwgbyp%2BqN3YWYLy9ZSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrq7MNaX25ASyZVUiKtwDOLu%2Fj065koghMc1aVVpQ%2BMdmmsGTCM7vAFgw%2BmAiv8Twkiliy8meh3ww1jVt%2Fjt9Yv%2BlGNcKN4gONytuZorn1%2BdwN4%2BhSrcANdLmnU33%2FUL8EaGuK28yjMbO%2Bd1xi7aWuFXmZWO5FBJDg02JGMly57JawH32STtNKh6Mh8HVwqPxHw6QyAMuILtlQLwAFcLH3H19qET%2B452KPE8b3UOuFGRhvLjdKnHgWBHawmqoYHcJOLxlEeJTUAQ4AQgUxoYsyt6Z5HlnyQ6DY5k0qXpUf%2FTHheiUpDyuWG37vm1RtSOG%2BUnITtPJ9uRFywlvmKCibO3l3Hr%2BTpLbT8CxWFclpb3zH3aE2HLXmdz7folDfXJ34B80%2BM77o1uwbSvZhZn5hmzaYRgZP4LL1BsYi1dInpPyy4kK9dj4filmR%2B587%2BHyS2V5zJIB9tUutefYBeeBb6AGHvVNKohC8QZOsqiVHnBwf3lx6ZsI5tgTR82OfEyyLllZGS%2BSfxE2ydQ9wqnTukm%2FeEgWZozagpRZCdsKAwynWGryAdTbbGEGX6p6XKivWSPlvm977GU1AcdKN1BorfrVea29fEPjZtLppr6Q7%2Fp3lPs8Dly9H20ww0tqPi9p%2FrpLWWUk1QEUhFcw4fDawAY6pgFLvahwVeTpf%2F1oU2zubx2ovhO%2BMzoxmBYtpDWF%2F9Y6Ku%2FN%2Bbq%2BWw%2BMvmPNEc3dH7Ra%2F7fUN7GihfDiL8125QaQh0Fa5HAGTmReAoUkUXAKSrjZYgkX20OoUWSIsRv0xmcd7fbnOjSMgX8LMNf4ighx8SNt8siRsXZkUq9bzOtuwLa95sbN6mY37FE1nOFHsRAHZgq6n82qJkHSATnNjA5pq%2BmgiPUr&X-Amz-Signature=740589c127e9d7669cc206cbc5b34e90fcc73dd9417b8e771ab87b0c0029228d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2AQBECS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIARZ5Q0eTBls3ZvmI9ZTQIu1KV1ztVW2s0ZyRKkusSeIAiBLySrPS%2FKUUPSwLDYtBydhe4upXwgbyp%2BqN3YWYLy9ZSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrq7MNaX25ASyZVUiKtwDOLu%2Fj065koghMc1aVVpQ%2BMdmmsGTCM7vAFgw%2BmAiv8Twkiliy8meh3ww1jVt%2Fjt9Yv%2BlGNcKN4gONytuZorn1%2BdwN4%2BhSrcANdLmnU33%2FUL8EaGuK28yjMbO%2Bd1xi7aWuFXmZWO5FBJDg02JGMly57JawH32STtNKh6Mh8HVwqPxHw6QyAMuILtlQLwAFcLH3H19qET%2B452KPE8b3UOuFGRhvLjdKnHgWBHawmqoYHcJOLxlEeJTUAQ4AQgUxoYsyt6Z5HlnyQ6DY5k0qXpUf%2FTHheiUpDyuWG37vm1RtSOG%2BUnITtPJ9uRFywlvmKCibO3l3Hr%2BTpLbT8CxWFclpb3zH3aE2HLXmdz7folDfXJ34B80%2BM77o1uwbSvZhZn5hmzaYRgZP4LL1BsYi1dInpPyy4kK9dj4filmR%2B587%2BHyS2V5zJIB9tUutefYBeeBb6AGHvVNKohC8QZOsqiVHnBwf3lx6ZsI5tgTR82OfEyyLllZGS%2BSfxE2ydQ9wqnTukm%2FeEgWZozagpRZCdsKAwynWGryAdTbbGEGX6p6XKivWSPlvm977GU1AcdKN1BorfrVea29fEPjZtLppr6Q7%2Fp3lPs8Dly9H20ww0tqPi9p%2FrpLWWUk1QEUhFcw4fDawAY6pgFLvahwVeTpf%2F1oU2zubx2ovhO%2BMzoxmBYtpDWF%2F9Y6Ku%2FN%2Bbq%2BWw%2BMvmPNEc3dH7Ra%2F7fUN7GihfDiL8125QaQh0Fa5HAGTmReAoUkUXAKSrjZYgkX20OoUWSIsRv0xmcd7fbnOjSMgX8LMNf4ighx8SNt8siRsXZkUq9bzOtuwLa95sbN6mY37FE1nOFHsRAHZgq6n82qJkHSATnNjA5pq%2BmgiPUr&X-Amz-Signature=88d7f3db155ad70fb592a729e26c748db3c709a831bf5868d529d6d74fe696cc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2AQBECS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIARZ5Q0eTBls3ZvmI9ZTQIu1KV1ztVW2s0ZyRKkusSeIAiBLySrPS%2FKUUPSwLDYtBydhe4upXwgbyp%2BqN3YWYLy9ZSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrq7MNaX25ASyZVUiKtwDOLu%2Fj065koghMc1aVVpQ%2BMdmmsGTCM7vAFgw%2BmAiv8Twkiliy8meh3ww1jVt%2Fjt9Yv%2BlGNcKN4gONytuZorn1%2BdwN4%2BhSrcANdLmnU33%2FUL8EaGuK28yjMbO%2Bd1xi7aWuFXmZWO5FBJDg02JGMly57JawH32STtNKh6Mh8HVwqPxHw6QyAMuILtlQLwAFcLH3H19qET%2B452KPE8b3UOuFGRhvLjdKnHgWBHawmqoYHcJOLxlEeJTUAQ4AQgUxoYsyt6Z5HlnyQ6DY5k0qXpUf%2FTHheiUpDyuWG37vm1RtSOG%2BUnITtPJ9uRFywlvmKCibO3l3Hr%2BTpLbT8CxWFclpb3zH3aE2HLXmdz7folDfXJ34B80%2BM77o1uwbSvZhZn5hmzaYRgZP4LL1BsYi1dInpPyy4kK9dj4filmR%2B587%2BHyS2V5zJIB9tUutefYBeeBb6AGHvVNKohC8QZOsqiVHnBwf3lx6ZsI5tgTR82OfEyyLllZGS%2BSfxE2ydQ9wqnTukm%2FeEgWZozagpRZCdsKAwynWGryAdTbbGEGX6p6XKivWSPlvm977GU1AcdKN1BorfrVea29fEPjZtLppr6Q7%2Fp3lPs8Dly9H20ww0tqPi9p%2FrpLWWUk1QEUhFcw4fDawAY6pgFLvahwVeTpf%2F1oU2zubx2ovhO%2BMzoxmBYtpDWF%2F9Y6Ku%2FN%2Bbq%2BWw%2BMvmPNEc3dH7Ra%2F7fUN7GihfDiL8125QaQh0Fa5HAGTmReAoUkUXAKSrjZYgkX20OoUWSIsRv0xmcd7fbnOjSMgX8LMNf4ighx8SNt8siRsXZkUq9bzOtuwLa95sbN6mY37FE1nOFHsRAHZgq6n82qJkHSATnNjA5pq%2BmgiPUr&X-Amz-Signature=16a5511c6189ca276afa6fc2495ee9e4792542473e5362ca134cb4fb63e4c952&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2AQBECS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIARZ5Q0eTBls3ZvmI9ZTQIu1KV1ztVW2s0ZyRKkusSeIAiBLySrPS%2FKUUPSwLDYtBydhe4upXwgbyp%2BqN3YWYLy9ZSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrq7MNaX25ASyZVUiKtwDOLu%2Fj065koghMc1aVVpQ%2BMdmmsGTCM7vAFgw%2BmAiv8Twkiliy8meh3ww1jVt%2Fjt9Yv%2BlGNcKN4gONytuZorn1%2BdwN4%2BhSrcANdLmnU33%2FUL8EaGuK28yjMbO%2Bd1xi7aWuFXmZWO5FBJDg02JGMly57JawH32STtNKh6Mh8HVwqPxHw6QyAMuILtlQLwAFcLH3H19qET%2B452KPE8b3UOuFGRhvLjdKnHgWBHawmqoYHcJOLxlEeJTUAQ4AQgUxoYsyt6Z5HlnyQ6DY5k0qXpUf%2FTHheiUpDyuWG37vm1RtSOG%2BUnITtPJ9uRFywlvmKCibO3l3Hr%2BTpLbT8CxWFclpb3zH3aE2HLXmdz7folDfXJ34B80%2BM77o1uwbSvZhZn5hmzaYRgZP4LL1BsYi1dInpPyy4kK9dj4filmR%2B587%2BHyS2V5zJIB9tUutefYBeeBb6AGHvVNKohC8QZOsqiVHnBwf3lx6ZsI5tgTR82OfEyyLllZGS%2BSfxE2ydQ9wqnTukm%2FeEgWZozagpRZCdsKAwynWGryAdTbbGEGX6p6XKivWSPlvm977GU1AcdKN1BorfrVea29fEPjZtLppr6Q7%2Fp3lPs8Dly9H20ww0tqPi9p%2FrpLWWUk1QEUhFcw4fDawAY6pgFLvahwVeTpf%2F1oU2zubx2ovhO%2BMzoxmBYtpDWF%2F9Y6Ku%2FN%2Bbq%2BWw%2BMvmPNEc3dH7Ra%2F7fUN7GihfDiL8125QaQh0Fa5HAGTmReAoUkUXAKSrjZYgkX20OoUWSIsRv0xmcd7fbnOjSMgX8LMNf4ighx8SNt8siRsXZkUq9bzOtuwLa95sbN6mY37FE1nOFHsRAHZgq6n82qJkHSATnNjA5pq%2BmgiPUr&X-Amz-Signature=6079fa21c00916550112dbb7d31dd1662a9085637b6f63e8ecca8d66ccd0fd81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2AQBECS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIARZ5Q0eTBls3ZvmI9ZTQIu1KV1ztVW2s0ZyRKkusSeIAiBLySrPS%2FKUUPSwLDYtBydhe4upXwgbyp%2BqN3YWYLy9ZSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrq7MNaX25ASyZVUiKtwDOLu%2Fj065koghMc1aVVpQ%2BMdmmsGTCM7vAFgw%2BmAiv8Twkiliy8meh3ww1jVt%2Fjt9Yv%2BlGNcKN4gONytuZorn1%2BdwN4%2BhSrcANdLmnU33%2FUL8EaGuK28yjMbO%2Bd1xi7aWuFXmZWO5FBJDg02JGMly57JawH32STtNKh6Mh8HVwqPxHw6QyAMuILtlQLwAFcLH3H19qET%2B452KPE8b3UOuFGRhvLjdKnHgWBHawmqoYHcJOLxlEeJTUAQ4AQgUxoYsyt6Z5HlnyQ6DY5k0qXpUf%2FTHheiUpDyuWG37vm1RtSOG%2BUnITtPJ9uRFywlvmKCibO3l3Hr%2BTpLbT8CxWFclpb3zH3aE2HLXmdz7folDfXJ34B80%2BM77o1uwbSvZhZn5hmzaYRgZP4LL1BsYi1dInpPyy4kK9dj4filmR%2B587%2BHyS2V5zJIB9tUutefYBeeBb6AGHvVNKohC8QZOsqiVHnBwf3lx6ZsI5tgTR82OfEyyLllZGS%2BSfxE2ydQ9wqnTukm%2FeEgWZozagpRZCdsKAwynWGryAdTbbGEGX6p6XKivWSPlvm977GU1AcdKN1BorfrVea29fEPjZtLppr6Q7%2Fp3lPs8Dly9H20ww0tqPi9p%2FrpLWWUk1QEUhFcw4fDawAY6pgFLvahwVeTpf%2F1oU2zubx2ovhO%2BMzoxmBYtpDWF%2F9Y6Ku%2FN%2Bbq%2BWw%2BMvmPNEc3dH7Ra%2F7fUN7GihfDiL8125QaQh0Fa5HAGTmReAoUkUXAKSrjZYgkX20OoUWSIsRv0xmcd7fbnOjSMgX8LMNf4ighx8SNt8siRsXZkUq9bzOtuwLa95sbN6mY37FE1nOFHsRAHZgq6n82qJkHSATnNjA5pq%2BmgiPUr&X-Amz-Signature=6a56a02a9621d138b982c60ed7a4f6e5ca1a1bc4073988c2af025acd377c2bbb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2AQBECS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIARZ5Q0eTBls3ZvmI9ZTQIu1KV1ztVW2s0ZyRKkusSeIAiBLySrPS%2FKUUPSwLDYtBydhe4upXwgbyp%2BqN3YWYLy9ZSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrq7MNaX25ASyZVUiKtwDOLu%2Fj065koghMc1aVVpQ%2BMdmmsGTCM7vAFgw%2BmAiv8Twkiliy8meh3ww1jVt%2Fjt9Yv%2BlGNcKN4gONytuZorn1%2BdwN4%2BhSrcANdLmnU33%2FUL8EaGuK28yjMbO%2Bd1xi7aWuFXmZWO5FBJDg02JGMly57JawH32STtNKh6Mh8HVwqPxHw6QyAMuILtlQLwAFcLH3H19qET%2B452KPE8b3UOuFGRhvLjdKnHgWBHawmqoYHcJOLxlEeJTUAQ4AQgUxoYsyt6Z5HlnyQ6DY5k0qXpUf%2FTHheiUpDyuWG37vm1RtSOG%2BUnITtPJ9uRFywlvmKCibO3l3Hr%2BTpLbT8CxWFclpb3zH3aE2HLXmdz7folDfXJ34B80%2BM77o1uwbSvZhZn5hmzaYRgZP4LL1BsYi1dInpPyy4kK9dj4filmR%2B587%2BHyS2V5zJIB9tUutefYBeeBb6AGHvVNKohC8QZOsqiVHnBwf3lx6ZsI5tgTR82OfEyyLllZGS%2BSfxE2ydQ9wqnTukm%2FeEgWZozagpRZCdsKAwynWGryAdTbbGEGX6p6XKivWSPlvm977GU1AcdKN1BorfrVea29fEPjZtLppr6Q7%2Fp3lPs8Dly9H20ww0tqPi9p%2FrpLWWUk1QEUhFcw4fDawAY6pgFLvahwVeTpf%2F1oU2zubx2ovhO%2BMzoxmBYtpDWF%2F9Y6Ku%2FN%2Bbq%2BWw%2BMvmPNEc3dH7Ra%2F7fUN7GihfDiL8125QaQh0Fa5HAGTmReAoUkUXAKSrjZYgkX20OoUWSIsRv0xmcd7fbnOjSMgX8LMNf4ighx8SNt8siRsXZkUq9bzOtuwLa95sbN6mY37FE1nOFHsRAHZgq6n82qJkHSATnNjA5pq%2BmgiPUr&X-Amz-Signature=7e8dc0b40923b13db4953a5a328702729b68b4baf4421edee5321446b212cbaf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2AQBECS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIARZ5Q0eTBls3ZvmI9ZTQIu1KV1ztVW2s0ZyRKkusSeIAiBLySrPS%2FKUUPSwLDYtBydhe4upXwgbyp%2BqN3YWYLy9ZSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrq7MNaX25ASyZVUiKtwDOLu%2Fj065koghMc1aVVpQ%2BMdmmsGTCM7vAFgw%2BmAiv8Twkiliy8meh3ww1jVt%2Fjt9Yv%2BlGNcKN4gONytuZorn1%2BdwN4%2BhSrcANdLmnU33%2FUL8EaGuK28yjMbO%2Bd1xi7aWuFXmZWO5FBJDg02JGMly57JawH32STtNKh6Mh8HVwqPxHw6QyAMuILtlQLwAFcLH3H19qET%2B452KPE8b3UOuFGRhvLjdKnHgWBHawmqoYHcJOLxlEeJTUAQ4AQgUxoYsyt6Z5HlnyQ6DY5k0qXpUf%2FTHheiUpDyuWG37vm1RtSOG%2BUnITtPJ9uRFywlvmKCibO3l3Hr%2BTpLbT8CxWFclpb3zH3aE2HLXmdz7folDfXJ34B80%2BM77o1uwbSvZhZn5hmzaYRgZP4LL1BsYi1dInpPyy4kK9dj4filmR%2B587%2BHyS2V5zJIB9tUutefYBeeBb6AGHvVNKohC8QZOsqiVHnBwf3lx6ZsI5tgTR82OfEyyLllZGS%2BSfxE2ydQ9wqnTukm%2FeEgWZozagpRZCdsKAwynWGryAdTbbGEGX6p6XKivWSPlvm977GU1AcdKN1BorfrVea29fEPjZtLppr6Q7%2Fp3lPs8Dly9H20ww0tqPi9p%2FrpLWWUk1QEUhFcw4fDawAY6pgFLvahwVeTpf%2F1oU2zubx2ovhO%2BMzoxmBYtpDWF%2F9Y6Ku%2FN%2Bbq%2BWw%2BMvmPNEc3dH7Ra%2F7fUN7GihfDiL8125QaQh0Fa5HAGTmReAoUkUXAKSrjZYgkX20OoUWSIsRv0xmcd7fbnOjSMgX8LMNf4ighx8SNt8siRsXZkUq9bzOtuwLa95sbN6mY37FE1nOFHsRAHZgq6n82qJkHSATnNjA5pq%2BmgiPUr&X-Amz-Signature=9d6b880a2f02bb015460ec5fea64de99f59f33d2b43aa982091dc66fe2bf2f0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2AQBECS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIARZ5Q0eTBls3ZvmI9ZTQIu1KV1ztVW2s0ZyRKkusSeIAiBLySrPS%2FKUUPSwLDYtBydhe4upXwgbyp%2BqN3YWYLy9ZSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrq7MNaX25ASyZVUiKtwDOLu%2Fj065koghMc1aVVpQ%2BMdmmsGTCM7vAFgw%2BmAiv8Twkiliy8meh3ww1jVt%2Fjt9Yv%2BlGNcKN4gONytuZorn1%2BdwN4%2BhSrcANdLmnU33%2FUL8EaGuK28yjMbO%2Bd1xi7aWuFXmZWO5FBJDg02JGMly57JawH32STtNKh6Mh8HVwqPxHw6QyAMuILtlQLwAFcLH3H19qET%2B452KPE8b3UOuFGRhvLjdKnHgWBHawmqoYHcJOLxlEeJTUAQ4AQgUxoYsyt6Z5HlnyQ6DY5k0qXpUf%2FTHheiUpDyuWG37vm1RtSOG%2BUnITtPJ9uRFywlvmKCibO3l3Hr%2BTpLbT8CxWFclpb3zH3aE2HLXmdz7folDfXJ34B80%2BM77o1uwbSvZhZn5hmzaYRgZP4LL1BsYi1dInpPyy4kK9dj4filmR%2B587%2BHyS2V5zJIB9tUutefYBeeBb6AGHvVNKohC8QZOsqiVHnBwf3lx6ZsI5tgTR82OfEyyLllZGS%2BSfxE2ydQ9wqnTukm%2FeEgWZozagpRZCdsKAwynWGryAdTbbGEGX6p6XKivWSPlvm977GU1AcdKN1BorfrVea29fEPjZtLppr6Q7%2Fp3lPs8Dly9H20ww0tqPi9p%2FrpLWWUk1QEUhFcw4fDawAY6pgFLvahwVeTpf%2F1oU2zubx2ovhO%2BMzoxmBYtpDWF%2F9Y6Ku%2FN%2Bbq%2BWw%2BMvmPNEc3dH7Ra%2F7fUN7GihfDiL8125QaQh0Fa5HAGTmReAoUkUXAKSrjZYgkX20OoUWSIsRv0xmcd7fbnOjSMgX8LMNf4ighx8SNt8siRsXZkUq9bzOtuwLa95sbN6mY37FE1nOFHsRAHZgq6n82qJkHSATnNjA5pq%2BmgiPUr&X-Amz-Signature=bbe50c483bc1b343ffd070206a9b51a4670501c4c387478931ed8b7fbea3b371&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
