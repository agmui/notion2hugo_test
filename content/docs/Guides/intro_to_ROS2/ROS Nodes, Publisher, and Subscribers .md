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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HDUVEU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDHSAzc26xaZ8k52yWJLCA2GaUJOLRgXxWa%2FOBU3J8OIAIgTAcodsWdGysu1oRAnyd67YqPYEUb7T2AdTHYrDvpSEsqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsvmdqQoaoNTZA5zyrcA1sTDUj7TpXbueWVNmml%2BssSV4wcHEhF0WYkB667iH03qjxTQkst2CY2ZbNcgFiR%2FS7aeZCEWGULH2CHVbFaoNl5szmcfsYKnV%2FC%2B554c05RoROkTQVeP4BqpmTDIKL3J%2BMD4abHWNW2kYMXDl2WCjIukKujoJuIcSV%2B0DRf9XbQ16k6gRnIj3UWH%2FFviCUx%2Fg%2BnJ3PiRdkHxbGkyDBjUD2VbCy08JYtXpKVJCwLVG3nKzeDC1Cssk%2BihppKE8uGqPt5uNaOV7CaJzApbACQfcN9OAFQaj3AY28viYbQccQKxmE2VJKUD3YLZ6qPF%2FN9aVfB5gSzdzjbAzGHix2E3%2BcTXe4zpL7WlaHGMDA2%2BtScA69ECMUd4lb9U8rTw4Kr%2F70DRQRDOQrjObldO6KhPDrJfq8HFiArQMC33A7KJb8ie1jBEnLZST5FfyK6A6mO6Nc3Dn1WghMPZV1nor1wWgeOOiF%2FKw52ePi70taKUVH7vbZPpU%2FuMRAY3XLNzGsRzhxt8XmdpzzFcmozjprEJxSzfrvDc3OP%2F%2Fo%2FdQYQ2cSMqh3%2FbO73C%2BjFFFY9IJLwBhAs0Xn58iKB2gP94Z8x64rNN7rCGdbzxD2WR6ItvpztM0E%2Bs%2BkbwytMQnrEMPiH0cAGOqUBqFIV5pvhxHG7qMsClgDqjx%2FqR5KxtBU5FK0fmCkFe2t2G1AnDcGvn60UOymFolYhA1vaO0WWh%2BqEKxXLxYwKqJpXvkAA8dtJvqXFwmV%2BMEIYQyZUA9d0SH4IfWWD2dJYZOPwaO8JjXylU%2BxnpjItyWJkLy6kPl40kfaeJDll2mWqqPhz%2BXrewcDLPNGyfX5uiy5bgvyN4Hkk9Qhay5Tc3Cm5mOX7&X-Amz-Signature=214f4d0b8b6dc47f83b7302c8737443144f103eb823a6701a71c4e9ccaa41ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HDUVEU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDHSAzc26xaZ8k52yWJLCA2GaUJOLRgXxWa%2FOBU3J8OIAIgTAcodsWdGysu1oRAnyd67YqPYEUb7T2AdTHYrDvpSEsqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsvmdqQoaoNTZA5zyrcA1sTDUj7TpXbueWVNmml%2BssSV4wcHEhF0WYkB667iH03qjxTQkst2CY2ZbNcgFiR%2FS7aeZCEWGULH2CHVbFaoNl5szmcfsYKnV%2FC%2B554c05RoROkTQVeP4BqpmTDIKL3J%2BMD4abHWNW2kYMXDl2WCjIukKujoJuIcSV%2B0DRf9XbQ16k6gRnIj3UWH%2FFviCUx%2Fg%2BnJ3PiRdkHxbGkyDBjUD2VbCy08JYtXpKVJCwLVG3nKzeDC1Cssk%2BihppKE8uGqPt5uNaOV7CaJzApbACQfcN9OAFQaj3AY28viYbQccQKxmE2VJKUD3YLZ6qPF%2FN9aVfB5gSzdzjbAzGHix2E3%2BcTXe4zpL7WlaHGMDA2%2BtScA69ECMUd4lb9U8rTw4Kr%2F70DRQRDOQrjObldO6KhPDrJfq8HFiArQMC33A7KJb8ie1jBEnLZST5FfyK6A6mO6Nc3Dn1WghMPZV1nor1wWgeOOiF%2FKw52ePi70taKUVH7vbZPpU%2FuMRAY3XLNzGsRzhxt8XmdpzzFcmozjprEJxSzfrvDc3OP%2F%2Fo%2FdQYQ2cSMqh3%2FbO73C%2BjFFFY9IJLwBhAs0Xn58iKB2gP94Z8x64rNN7rCGdbzxD2WR6ItvpztM0E%2Bs%2BkbwytMQnrEMPiH0cAGOqUBqFIV5pvhxHG7qMsClgDqjx%2FqR5KxtBU5FK0fmCkFe2t2G1AnDcGvn60UOymFolYhA1vaO0WWh%2BqEKxXLxYwKqJpXvkAA8dtJvqXFwmV%2BMEIYQyZUA9d0SH4IfWWD2dJYZOPwaO8JjXylU%2BxnpjItyWJkLy6kPl40kfaeJDll2mWqqPhz%2BXrewcDLPNGyfX5uiy5bgvyN4Hkk9Qhay5Tc3Cm5mOX7&X-Amz-Signature=3fb0363addfbf5f754004994e43e4dc73bb4ebcbeca0cfc829a5015c87a6a467&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HDUVEU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDHSAzc26xaZ8k52yWJLCA2GaUJOLRgXxWa%2FOBU3J8OIAIgTAcodsWdGysu1oRAnyd67YqPYEUb7T2AdTHYrDvpSEsqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsvmdqQoaoNTZA5zyrcA1sTDUj7TpXbueWVNmml%2BssSV4wcHEhF0WYkB667iH03qjxTQkst2CY2ZbNcgFiR%2FS7aeZCEWGULH2CHVbFaoNl5szmcfsYKnV%2FC%2B554c05RoROkTQVeP4BqpmTDIKL3J%2BMD4abHWNW2kYMXDl2WCjIukKujoJuIcSV%2B0DRf9XbQ16k6gRnIj3UWH%2FFviCUx%2Fg%2BnJ3PiRdkHxbGkyDBjUD2VbCy08JYtXpKVJCwLVG3nKzeDC1Cssk%2BihppKE8uGqPt5uNaOV7CaJzApbACQfcN9OAFQaj3AY28viYbQccQKxmE2VJKUD3YLZ6qPF%2FN9aVfB5gSzdzjbAzGHix2E3%2BcTXe4zpL7WlaHGMDA2%2BtScA69ECMUd4lb9U8rTw4Kr%2F70DRQRDOQrjObldO6KhPDrJfq8HFiArQMC33A7KJb8ie1jBEnLZST5FfyK6A6mO6Nc3Dn1WghMPZV1nor1wWgeOOiF%2FKw52ePi70taKUVH7vbZPpU%2FuMRAY3XLNzGsRzhxt8XmdpzzFcmozjprEJxSzfrvDc3OP%2F%2Fo%2FdQYQ2cSMqh3%2FbO73C%2BjFFFY9IJLwBhAs0Xn58iKB2gP94Z8x64rNN7rCGdbzxD2WR6ItvpztM0E%2Bs%2BkbwytMQnrEMPiH0cAGOqUBqFIV5pvhxHG7qMsClgDqjx%2FqR5KxtBU5FK0fmCkFe2t2G1AnDcGvn60UOymFolYhA1vaO0WWh%2BqEKxXLxYwKqJpXvkAA8dtJvqXFwmV%2BMEIYQyZUA9d0SH4IfWWD2dJYZOPwaO8JjXylU%2BxnpjItyWJkLy6kPl40kfaeJDll2mWqqPhz%2BXrewcDLPNGyfX5uiy5bgvyN4Hkk9Qhay5Tc3Cm5mOX7&X-Amz-Signature=221bb5e9dc511e073973fa02adf002e1f93ca157f23d85149e62aada8bd4c830&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HDUVEU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDHSAzc26xaZ8k52yWJLCA2GaUJOLRgXxWa%2FOBU3J8OIAIgTAcodsWdGysu1oRAnyd67YqPYEUb7T2AdTHYrDvpSEsqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsvmdqQoaoNTZA5zyrcA1sTDUj7TpXbueWVNmml%2BssSV4wcHEhF0WYkB667iH03qjxTQkst2CY2ZbNcgFiR%2FS7aeZCEWGULH2CHVbFaoNl5szmcfsYKnV%2FC%2B554c05RoROkTQVeP4BqpmTDIKL3J%2BMD4abHWNW2kYMXDl2WCjIukKujoJuIcSV%2B0DRf9XbQ16k6gRnIj3UWH%2FFviCUx%2Fg%2BnJ3PiRdkHxbGkyDBjUD2VbCy08JYtXpKVJCwLVG3nKzeDC1Cssk%2BihppKE8uGqPt5uNaOV7CaJzApbACQfcN9OAFQaj3AY28viYbQccQKxmE2VJKUD3YLZ6qPF%2FN9aVfB5gSzdzjbAzGHix2E3%2BcTXe4zpL7WlaHGMDA2%2BtScA69ECMUd4lb9U8rTw4Kr%2F70DRQRDOQrjObldO6KhPDrJfq8HFiArQMC33A7KJb8ie1jBEnLZST5FfyK6A6mO6Nc3Dn1WghMPZV1nor1wWgeOOiF%2FKw52ePi70taKUVH7vbZPpU%2FuMRAY3XLNzGsRzhxt8XmdpzzFcmozjprEJxSzfrvDc3OP%2F%2Fo%2FdQYQ2cSMqh3%2FbO73C%2BjFFFY9IJLwBhAs0Xn58iKB2gP94Z8x64rNN7rCGdbzxD2WR6ItvpztM0E%2Bs%2BkbwytMQnrEMPiH0cAGOqUBqFIV5pvhxHG7qMsClgDqjx%2FqR5KxtBU5FK0fmCkFe2t2G1AnDcGvn60UOymFolYhA1vaO0WWh%2BqEKxXLxYwKqJpXvkAA8dtJvqXFwmV%2BMEIYQyZUA9d0SH4IfWWD2dJYZOPwaO8JjXylU%2BxnpjItyWJkLy6kPl40kfaeJDll2mWqqPhz%2BXrewcDLPNGyfX5uiy5bgvyN4Hkk9Qhay5Tc3Cm5mOX7&X-Amz-Signature=293499de438169dce9c06b15087e782a304428cfb29435239f5784a90a2e5806&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HDUVEU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDHSAzc26xaZ8k52yWJLCA2GaUJOLRgXxWa%2FOBU3J8OIAIgTAcodsWdGysu1oRAnyd67YqPYEUb7T2AdTHYrDvpSEsqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsvmdqQoaoNTZA5zyrcA1sTDUj7TpXbueWVNmml%2BssSV4wcHEhF0WYkB667iH03qjxTQkst2CY2ZbNcgFiR%2FS7aeZCEWGULH2CHVbFaoNl5szmcfsYKnV%2FC%2B554c05RoROkTQVeP4BqpmTDIKL3J%2BMD4abHWNW2kYMXDl2WCjIukKujoJuIcSV%2B0DRf9XbQ16k6gRnIj3UWH%2FFviCUx%2Fg%2BnJ3PiRdkHxbGkyDBjUD2VbCy08JYtXpKVJCwLVG3nKzeDC1Cssk%2BihppKE8uGqPt5uNaOV7CaJzApbACQfcN9OAFQaj3AY28viYbQccQKxmE2VJKUD3YLZ6qPF%2FN9aVfB5gSzdzjbAzGHix2E3%2BcTXe4zpL7WlaHGMDA2%2BtScA69ECMUd4lb9U8rTw4Kr%2F70DRQRDOQrjObldO6KhPDrJfq8HFiArQMC33A7KJb8ie1jBEnLZST5FfyK6A6mO6Nc3Dn1WghMPZV1nor1wWgeOOiF%2FKw52ePi70taKUVH7vbZPpU%2FuMRAY3XLNzGsRzhxt8XmdpzzFcmozjprEJxSzfrvDc3OP%2F%2Fo%2FdQYQ2cSMqh3%2FbO73C%2BjFFFY9IJLwBhAs0Xn58iKB2gP94Z8x64rNN7rCGdbzxD2WR6ItvpztM0E%2Bs%2BkbwytMQnrEMPiH0cAGOqUBqFIV5pvhxHG7qMsClgDqjx%2FqR5KxtBU5FK0fmCkFe2t2G1AnDcGvn60UOymFolYhA1vaO0WWh%2BqEKxXLxYwKqJpXvkAA8dtJvqXFwmV%2BMEIYQyZUA9d0SH4IfWWD2dJYZOPwaO8JjXylU%2BxnpjItyWJkLy6kPl40kfaeJDll2mWqqPhz%2BXrewcDLPNGyfX5uiy5bgvyN4Hkk9Qhay5Tc3Cm5mOX7&X-Amz-Signature=eea43e1a490ec9d73a88cf7fd425f457e3d17533ad63fd71befb48370a06090e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HDUVEU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDHSAzc26xaZ8k52yWJLCA2GaUJOLRgXxWa%2FOBU3J8OIAIgTAcodsWdGysu1oRAnyd67YqPYEUb7T2AdTHYrDvpSEsqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsvmdqQoaoNTZA5zyrcA1sTDUj7TpXbueWVNmml%2BssSV4wcHEhF0WYkB667iH03qjxTQkst2CY2ZbNcgFiR%2FS7aeZCEWGULH2CHVbFaoNl5szmcfsYKnV%2FC%2B554c05RoROkTQVeP4BqpmTDIKL3J%2BMD4abHWNW2kYMXDl2WCjIukKujoJuIcSV%2B0DRf9XbQ16k6gRnIj3UWH%2FFviCUx%2Fg%2BnJ3PiRdkHxbGkyDBjUD2VbCy08JYtXpKVJCwLVG3nKzeDC1Cssk%2BihppKE8uGqPt5uNaOV7CaJzApbACQfcN9OAFQaj3AY28viYbQccQKxmE2VJKUD3YLZ6qPF%2FN9aVfB5gSzdzjbAzGHix2E3%2BcTXe4zpL7WlaHGMDA2%2BtScA69ECMUd4lb9U8rTw4Kr%2F70DRQRDOQrjObldO6KhPDrJfq8HFiArQMC33A7KJb8ie1jBEnLZST5FfyK6A6mO6Nc3Dn1WghMPZV1nor1wWgeOOiF%2FKw52ePi70taKUVH7vbZPpU%2FuMRAY3XLNzGsRzhxt8XmdpzzFcmozjprEJxSzfrvDc3OP%2F%2Fo%2FdQYQ2cSMqh3%2FbO73C%2BjFFFY9IJLwBhAs0Xn58iKB2gP94Z8x64rNN7rCGdbzxD2WR6ItvpztM0E%2Bs%2BkbwytMQnrEMPiH0cAGOqUBqFIV5pvhxHG7qMsClgDqjx%2FqR5KxtBU5FK0fmCkFe2t2G1AnDcGvn60UOymFolYhA1vaO0WWh%2BqEKxXLxYwKqJpXvkAA8dtJvqXFwmV%2BMEIYQyZUA9d0SH4IfWWD2dJYZOPwaO8JjXylU%2BxnpjItyWJkLy6kPl40kfaeJDll2mWqqPhz%2BXrewcDLPNGyfX5uiy5bgvyN4Hkk9Qhay5Tc3Cm5mOX7&X-Amz-Signature=1aa6969a2459ee5fd993d0c73350775077fb9f46fe4a0847b0bd98a50b8384bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HDUVEU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDHSAzc26xaZ8k52yWJLCA2GaUJOLRgXxWa%2FOBU3J8OIAIgTAcodsWdGysu1oRAnyd67YqPYEUb7T2AdTHYrDvpSEsqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsvmdqQoaoNTZA5zyrcA1sTDUj7TpXbueWVNmml%2BssSV4wcHEhF0WYkB667iH03qjxTQkst2CY2ZbNcgFiR%2FS7aeZCEWGULH2CHVbFaoNl5szmcfsYKnV%2FC%2B554c05RoROkTQVeP4BqpmTDIKL3J%2BMD4abHWNW2kYMXDl2WCjIukKujoJuIcSV%2B0DRf9XbQ16k6gRnIj3UWH%2FFviCUx%2Fg%2BnJ3PiRdkHxbGkyDBjUD2VbCy08JYtXpKVJCwLVG3nKzeDC1Cssk%2BihppKE8uGqPt5uNaOV7CaJzApbACQfcN9OAFQaj3AY28viYbQccQKxmE2VJKUD3YLZ6qPF%2FN9aVfB5gSzdzjbAzGHix2E3%2BcTXe4zpL7WlaHGMDA2%2BtScA69ECMUd4lb9U8rTw4Kr%2F70DRQRDOQrjObldO6KhPDrJfq8HFiArQMC33A7KJb8ie1jBEnLZST5FfyK6A6mO6Nc3Dn1WghMPZV1nor1wWgeOOiF%2FKw52ePi70taKUVH7vbZPpU%2FuMRAY3XLNzGsRzhxt8XmdpzzFcmozjprEJxSzfrvDc3OP%2F%2Fo%2FdQYQ2cSMqh3%2FbO73C%2BjFFFY9IJLwBhAs0Xn58iKB2gP94Z8x64rNN7rCGdbzxD2WR6ItvpztM0E%2Bs%2BkbwytMQnrEMPiH0cAGOqUBqFIV5pvhxHG7qMsClgDqjx%2FqR5KxtBU5FK0fmCkFe2t2G1AnDcGvn60UOymFolYhA1vaO0WWh%2BqEKxXLxYwKqJpXvkAA8dtJvqXFwmV%2BMEIYQyZUA9d0SH4IfWWD2dJYZOPwaO8JjXylU%2BxnpjItyWJkLy6kPl40kfaeJDll2mWqqPhz%2BXrewcDLPNGyfX5uiy5bgvyN4Hkk9Qhay5Tc3Cm5mOX7&X-Amz-Signature=11fd8b7c1c601939aeeb0f46ed3f33755b7106fa12b620e20b9d483c703ccd02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HDUVEU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDHSAzc26xaZ8k52yWJLCA2GaUJOLRgXxWa%2FOBU3J8OIAIgTAcodsWdGysu1oRAnyd67YqPYEUb7T2AdTHYrDvpSEsqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsvmdqQoaoNTZA5zyrcA1sTDUj7TpXbueWVNmml%2BssSV4wcHEhF0WYkB667iH03qjxTQkst2CY2ZbNcgFiR%2FS7aeZCEWGULH2CHVbFaoNl5szmcfsYKnV%2FC%2B554c05RoROkTQVeP4BqpmTDIKL3J%2BMD4abHWNW2kYMXDl2WCjIukKujoJuIcSV%2B0DRf9XbQ16k6gRnIj3UWH%2FFviCUx%2Fg%2BnJ3PiRdkHxbGkyDBjUD2VbCy08JYtXpKVJCwLVG3nKzeDC1Cssk%2BihppKE8uGqPt5uNaOV7CaJzApbACQfcN9OAFQaj3AY28viYbQccQKxmE2VJKUD3YLZ6qPF%2FN9aVfB5gSzdzjbAzGHix2E3%2BcTXe4zpL7WlaHGMDA2%2BtScA69ECMUd4lb9U8rTw4Kr%2F70DRQRDOQrjObldO6KhPDrJfq8HFiArQMC33A7KJb8ie1jBEnLZST5FfyK6A6mO6Nc3Dn1WghMPZV1nor1wWgeOOiF%2FKw52ePi70taKUVH7vbZPpU%2FuMRAY3XLNzGsRzhxt8XmdpzzFcmozjprEJxSzfrvDc3OP%2F%2Fo%2FdQYQ2cSMqh3%2FbO73C%2BjFFFY9IJLwBhAs0Xn58iKB2gP94Z8x64rNN7rCGdbzxD2WR6ItvpztM0E%2Bs%2BkbwytMQnrEMPiH0cAGOqUBqFIV5pvhxHG7qMsClgDqjx%2FqR5KxtBU5FK0fmCkFe2t2G1AnDcGvn60UOymFolYhA1vaO0WWh%2BqEKxXLxYwKqJpXvkAA8dtJvqXFwmV%2BMEIYQyZUA9d0SH4IfWWD2dJYZOPwaO8JjXylU%2BxnpjItyWJkLy6kPl40kfaeJDll2mWqqPhz%2BXrewcDLPNGyfX5uiy5bgvyN4Hkk9Qhay5Tc3Cm5mOX7&X-Amz-Signature=fbbf094895c2a98fb0fd9afa7f2af85200622f8e453c37a302fcc4a84454669e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
