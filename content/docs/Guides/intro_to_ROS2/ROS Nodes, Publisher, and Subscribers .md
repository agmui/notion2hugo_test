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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ELTYGEU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDzTugaaA57i5GAJHY3Apws7%2BqeD3qvD7ityqdlhUOD2AiBoNfhY%2BbGtpCXENp%2BtiN47WClEQTl%2BH6xKd3hvL2dEnCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM88%2Fn2%2BMb6IHX%2Fxr0KtwDcylm0ReFjY19eHnxgzxD3LStF3U2ZbOF65bnuTgcmYSlg00MS98ErEjrDKQPobuXXOshn5uOYrtfskQafuc0ytZqQSD95gOU4qUf7Sro1umgvm3VeRX%2FUFkq6YtYnfyQbT5OaAPeCWBvRyRJNPMc0VzwR3TH5rA%2Btx0wO2Wgh%2BicObzS5%2Bt8cLzA1omfB6vj8Pt4yFn56dHuRc%2FjZNMki248lSPmrXN7HOvUQJVjZvaquUF8NfppVqX6jy1yRfshfG5F7NjVvE09KEBq8QMztJ%2BiSqpU9L5812YyuWQMOWJuSDbjZIVrsCrM5gw%2BjkhhXW4lZTOgIqj%2B1ubFomFtzKYtCQNllG4vJ5HWM13oIrYdH%2BW7agYibChx2RnxJSGM4LfZZqrK1HQ3WG3XcnWuWAXW40YlBRSIegSOubwz0nsXJ2tMFY9qI18aJQY637uKk4d0qPY3yB31LBKTp5WG40RdEayqIiVe5gm5jK6XU7pv2Sy1Q09kdTWYO0%2F8HiupVXrx7MGGkbuUZmJC0KXsNgApWYCxiWL%2Bfq%2BWUedQPZb30fFn9Vn7bL7UuMQl0jRoXaPRJhCff6%2FzN40%2FHxsMv3TftKrKiDvhaKAkC%2FGHpOgNvQp3zzTxx3%2F7kr4w0tOlvwY6pgEsT76LF6QzmhlURykJhZ0noO07dNwbsiSRKVkhAPnPZ0CrW7hQWhuv1u%2FxU39nAHFg9hLO5jbhNQUKI135vVXsxjhi2f%2BInvfUUj8OvK189PP5IcM3PjkUlfixbT8kvshJkt432IkLPbOMuxnEhVP%2BwO5PJpRIx3vgYVA94sjlTyNRWhQZKOhLh2scNwA6HDRQgl3BWNy8Sc0I9LOV6OQt0yG%2F8IS0&X-Amz-Signature=b364ff9c87f844cec2bfbc78fa751af21a06aef3ec7aafa9f672f2e9bcea02c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ELTYGEU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDzTugaaA57i5GAJHY3Apws7%2BqeD3qvD7ityqdlhUOD2AiBoNfhY%2BbGtpCXENp%2BtiN47WClEQTl%2BH6xKd3hvL2dEnCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM88%2Fn2%2BMb6IHX%2Fxr0KtwDcylm0ReFjY19eHnxgzxD3LStF3U2ZbOF65bnuTgcmYSlg00MS98ErEjrDKQPobuXXOshn5uOYrtfskQafuc0ytZqQSD95gOU4qUf7Sro1umgvm3VeRX%2FUFkq6YtYnfyQbT5OaAPeCWBvRyRJNPMc0VzwR3TH5rA%2Btx0wO2Wgh%2BicObzS5%2Bt8cLzA1omfB6vj8Pt4yFn56dHuRc%2FjZNMki248lSPmrXN7HOvUQJVjZvaquUF8NfppVqX6jy1yRfshfG5F7NjVvE09KEBq8QMztJ%2BiSqpU9L5812YyuWQMOWJuSDbjZIVrsCrM5gw%2BjkhhXW4lZTOgIqj%2B1ubFomFtzKYtCQNllG4vJ5HWM13oIrYdH%2BW7agYibChx2RnxJSGM4LfZZqrK1HQ3WG3XcnWuWAXW40YlBRSIegSOubwz0nsXJ2tMFY9qI18aJQY637uKk4d0qPY3yB31LBKTp5WG40RdEayqIiVe5gm5jK6XU7pv2Sy1Q09kdTWYO0%2F8HiupVXrx7MGGkbuUZmJC0KXsNgApWYCxiWL%2Bfq%2BWUedQPZb30fFn9Vn7bL7UuMQl0jRoXaPRJhCff6%2FzN40%2FHxsMv3TftKrKiDvhaKAkC%2FGHpOgNvQp3zzTxx3%2F7kr4w0tOlvwY6pgEsT76LF6QzmhlURykJhZ0noO07dNwbsiSRKVkhAPnPZ0CrW7hQWhuv1u%2FxU39nAHFg9hLO5jbhNQUKI135vVXsxjhi2f%2BInvfUUj8OvK189PP5IcM3PjkUlfixbT8kvshJkt432IkLPbOMuxnEhVP%2BwO5PJpRIx3vgYVA94sjlTyNRWhQZKOhLh2scNwA6HDRQgl3BWNy8Sc0I9LOV6OQt0yG%2F8IS0&X-Amz-Signature=433da84ac5f19729b336b67c5718061e95a49f9089cbeb51917a6968b9f5566b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ELTYGEU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDzTugaaA57i5GAJHY3Apws7%2BqeD3qvD7ityqdlhUOD2AiBoNfhY%2BbGtpCXENp%2BtiN47WClEQTl%2BH6xKd3hvL2dEnCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM88%2Fn2%2BMb6IHX%2Fxr0KtwDcylm0ReFjY19eHnxgzxD3LStF3U2ZbOF65bnuTgcmYSlg00MS98ErEjrDKQPobuXXOshn5uOYrtfskQafuc0ytZqQSD95gOU4qUf7Sro1umgvm3VeRX%2FUFkq6YtYnfyQbT5OaAPeCWBvRyRJNPMc0VzwR3TH5rA%2Btx0wO2Wgh%2BicObzS5%2Bt8cLzA1omfB6vj8Pt4yFn56dHuRc%2FjZNMki248lSPmrXN7HOvUQJVjZvaquUF8NfppVqX6jy1yRfshfG5F7NjVvE09KEBq8QMztJ%2BiSqpU9L5812YyuWQMOWJuSDbjZIVrsCrM5gw%2BjkhhXW4lZTOgIqj%2B1ubFomFtzKYtCQNllG4vJ5HWM13oIrYdH%2BW7agYibChx2RnxJSGM4LfZZqrK1HQ3WG3XcnWuWAXW40YlBRSIegSOubwz0nsXJ2tMFY9qI18aJQY637uKk4d0qPY3yB31LBKTp5WG40RdEayqIiVe5gm5jK6XU7pv2Sy1Q09kdTWYO0%2F8HiupVXrx7MGGkbuUZmJC0KXsNgApWYCxiWL%2Bfq%2BWUedQPZb30fFn9Vn7bL7UuMQl0jRoXaPRJhCff6%2FzN40%2FHxsMv3TftKrKiDvhaKAkC%2FGHpOgNvQp3zzTxx3%2F7kr4w0tOlvwY6pgEsT76LF6QzmhlURykJhZ0noO07dNwbsiSRKVkhAPnPZ0CrW7hQWhuv1u%2FxU39nAHFg9hLO5jbhNQUKI135vVXsxjhi2f%2BInvfUUj8OvK189PP5IcM3PjkUlfixbT8kvshJkt432IkLPbOMuxnEhVP%2BwO5PJpRIx3vgYVA94sjlTyNRWhQZKOhLh2scNwA6HDRQgl3BWNy8Sc0I9LOV6OQt0yG%2F8IS0&X-Amz-Signature=6383ecda37ea0fe5ddbdb00e0d8ee890a9e7cf7719432901f22cb41ed499b562&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ELTYGEU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDzTugaaA57i5GAJHY3Apws7%2BqeD3qvD7ityqdlhUOD2AiBoNfhY%2BbGtpCXENp%2BtiN47WClEQTl%2BH6xKd3hvL2dEnCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM88%2Fn2%2BMb6IHX%2Fxr0KtwDcylm0ReFjY19eHnxgzxD3LStF3U2ZbOF65bnuTgcmYSlg00MS98ErEjrDKQPobuXXOshn5uOYrtfskQafuc0ytZqQSD95gOU4qUf7Sro1umgvm3VeRX%2FUFkq6YtYnfyQbT5OaAPeCWBvRyRJNPMc0VzwR3TH5rA%2Btx0wO2Wgh%2BicObzS5%2Bt8cLzA1omfB6vj8Pt4yFn56dHuRc%2FjZNMki248lSPmrXN7HOvUQJVjZvaquUF8NfppVqX6jy1yRfshfG5F7NjVvE09KEBq8QMztJ%2BiSqpU9L5812YyuWQMOWJuSDbjZIVrsCrM5gw%2BjkhhXW4lZTOgIqj%2B1ubFomFtzKYtCQNllG4vJ5HWM13oIrYdH%2BW7agYibChx2RnxJSGM4LfZZqrK1HQ3WG3XcnWuWAXW40YlBRSIegSOubwz0nsXJ2tMFY9qI18aJQY637uKk4d0qPY3yB31LBKTp5WG40RdEayqIiVe5gm5jK6XU7pv2Sy1Q09kdTWYO0%2F8HiupVXrx7MGGkbuUZmJC0KXsNgApWYCxiWL%2Bfq%2BWUedQPZb30fFn9Vn7bL7UuMQl0jRoXaPRJhCff6%2FzN40%2FHxsMv3TftKrKiDvhaKAkC%2FGHpOgNvQp3zzTxx3%2F7kr4w0tOlvwY6pgEsT76LF6QzmhlURykJhZ0noO07dNwbsiSRKVkhAPnPZ0CrW7hQWhuv1u%2FxU39nAHFg9hLO5jbhNQUKI135vVXsxjhi2f%2BInvfUUj8OvK189PP5IcM3PjkUlfixbT8kvshJkt432IkLPbOMuxnEhVP%2BwO5PJpRIx3vgYVA94sjlTyNRWhQZKOhLh2scNwA6HDRQgl3BWNy8Sc0I9LOV6OQt0yG%2F8IS0&X-Amz-Signature=3ff5bbe788d41a57bd6f9252728a2fef722b1fe49794e2b25ee54fe7e87fc9ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ELTYGEU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDzTugaaA57i5GAJHY3Apws7%2BqeD3qvD7ityqdlhUOD2AiBoNfhY%2BbGtpCXENp%2BtiN47WClEQTl%2BH6xKd3hvL2dEnCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM88%2Fn2%2BMb6IHX%2Fxr0KtwDcylm0ReFjY19eHnxgzxD3LStF3U2ZbOF65bnuTgcmYSlg00MS98ErEjrDKQPobuXXOshn5uOYrtfskQafuc0ytZqQSD95gOU4qUf7Sro1umgvm3VeRX%2FUFkq6YtYnfyQbT5OaAPeCWBvRyRJNPMc0VzwR3TH5rA%2Btx0wO2Wgh%2BicObzS5%2Bt8cLzA1omfB6vj8Pt4yFn56dHuRc%2FjZNMki248lSPmrXN7HOvUQJVjZvaquUF8NfppVqX6jy1yRfshfG5F7NjVvE09KEBq8QMztJ%2BiSqpU9L5812YyuWQMOWJuSDbjZIVrsCrM5gw%2BjkhhXW4lZTOgIqj%2B1ubFomFtzKYtCQNllG4vJ5HWM13oIrYdH%2BW7agYibChx2RnxJSGM4LfZZqrK1HQ3WG3XcnWuWAXW40YlBRSIegSOubwz0nsXJ2tMFY9qI18aJQY637uKk4d0qPY3yB31LBKTp5WG40RdEayqIiVe5gm5jK6XU7pv2Sy1Q09kdTWYO0%2F8HiupVXrx7MGGkbuUZmJC0KXsNgApWYCxiWL%2Bfq%2BWUedQPZb30fFn9Vn7bL7UuMQl0jRoXaPRJhCff6%2FzN40%2FHxsMv3TftKrKiDvhaKAkC%2FGHpOgNvQp3zzTxx3%2F7kr4w0tOlvwY6pgEsT76LF6QzmhlURykJhZ0noO07dNwbsiSRKVkhAPnPZ0CrW7hQWhuv1u%2FxU39nAHFg9hLO5jbhNQUKI135vVXsxjhi2f%2BInvfUUj8OvK189PP5IcM3PjkUlfixbT8kvshJkt432IkLPbOMuxnEhVP%2BwO5PJpRIx3vgYVA94sjlTyNRWhQZKOhLh2scNwA6HDRQgl3BWNy8Sc0I9LOV6OQt0yG%2F8IS0&X-Amz-Signature=a4338ee62ce65c2b02fcf0ea5819a7c3ba1adac638b460d156fad1df2225889f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ELTYGEU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDzTugaaA57i5GAJHY3Apws7%2BqeD3qvD7ityqdlhUOD2AiBoNfhY%2BbGtpCXENp%2BtiN47WClEQTl%2BH6xKd3hvL2dEnCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM88%2Fn2%2BMb6IHX%2Fxr0KtwDcylm0ReFjY19eHnxgzxD3LStF3U2ZbOF65bnuTgcmYSlg00MS98ErEjrDKQPobuXXOshn5uOYrtfskQafuc0ytZqQSD95gOU4qUf7Sro1umgvm3VeRX%2FUFkq6YtYnfyQbT5OaAPeCWBvRyRJNPMc0VzwR3TH5rA%2Btx0wO2Wgh%2BicObzS5%2Bt8cLzA1omfB6vj8Pt4yFn56dHuRc%2FjZNMki248lSPmrXN7HOvUQJVjZvaquUF8NfppVqX6jy1yRfshfG5F7NjVvE09KEBq8QMztJ%2BiSqpU9L5812YyuWQMOWJuSDbjZIVrsCrM5gw%2BjkhhXW4lZTOgIqj%2B1ubFomFtzKYtCQNllG4vJ5HWM13oIrYdH%2BW7agYibChx2RnxJSGM4LfZZqrK1HQ3WG3XcnWuWAXW40YlBRSIegSOubwz0nsXJ2tMFY9qI18aJQY637uKk4d0qPY3yB31LBKTp5WG40RdEayqIiVe5gm5jK6XU7pv2Sy1Q09kdTWYO0%2F8HiupVXrx7MGGkbuUZmJC0KXsNgApWYCxiWL%2Bfq%2BWUedQPZb30fFn9Vn7bL7UuMQl0jRoXaPRJhCff6%2FzN40%2FHxsMv3TftKrKiDvhaKAkC%2FGHpOgNvQp3zzTxx3%2F7kr4w0tOlvwY6pgEsT76LF6QzmhlURykJhZ0noO07dNwbsiSRKVkhAPnPZ0CrW7hQWhuv1u%2FxU39nAHFg9hLO5jbhNQUKI135vVXsxjhi2f%2BInvfUUj8OvK189PP5IcM3PjkUlfixbT8kvshJkt432IkLPbOMuxnEhVP%2BwO5PJpRIx3vgYVA94sjlTyNRWhQZKOhLh2scNwA6HDRQgl3BWNy8Sc0I9LOV6OQt0yG%2F8IS0&X-Amz-Signature=9e67ac9ecf2606597471ee05e02950199a84f9aeec6d11a6f49a01777d60bc34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ELTYGEU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDzTugaaA57i5GAJHY3Apws7%2BqeD3qvD7ityqdlhUOD2AiBoNfhY%2BbGtpCXENp%2BtiN47WClEQTl%2BH6xKd3hvL2dEnCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM88%2Fn2%2BMb6IHX%2Fxr0KtwDcylm0ReFjY19eHnxgzxD3LStF3U2ZbOF65bnuTgcmYSlg00MS98ErEjrDKQPobuXXOshn5uOYrtfskQafuc0ytZqQSD95gOU4qUf7Sro1umgvm3VeRX%2FUFkq6YtYnfyQbT5OaAPeCWBvRyRJNPMc0VzwR3TH5rA%2Btx0wO2Wgh%2BicObzS5%2Bt8cLzA1omfB6vj8Pt4yFn56dHuRc%2FjZNMki248lSPmrXN7HOvUQJVjZvaquUF8NfppVqX6jy1yRfshfG5F7NjVvE09KEBq8QMztJ%2BiSqpU9L5812YyuWQMOWJuSDbjZIVrsCrM5gw%2BjkhhXW4lZTOgIqj%2B1ubFomFtzKYtCQNllG4vJ5HWM13oIrYdH%2BW7agYibChx2RnxJSGM4LfZZqrK1HQ3WG3XcnWuWAXW40YlBRSIegSOubwz0nsXJ2tMFY9qI18aJQY637uKk4d0qPY3yB31LBKTp5WG40RdEayqIiVe5gm5jK6XU7pv2Sy1Q09kdTWYO0%2F8HiupVXrx7MGGkbuUZmJC0KXsNgApWYCxiWL%2Bfq%2BWUedQPZb30fFn9Vn7bL7UuMQl0jRoXaPRJhCff6%2FzN40%2FHxsMv3TftKrKiDvhaKAkC%2FGHpOgNvQp3zzTxx3%2F7kr4w0tOlvwY6pgEsT76LF6QzmhlURykJhZ0noO07dNwbsiSRKVkhAPnPZ0CrW7hQWhuv1u%2FxU39nAHFg9hLO5jbhNQUKI135vVXsxjhi2f%2BInvfUUj8OvK189PP5IcM3PjkUlfixbT8kvshJkt432IkLPbOMuxnEhVP%2BwO5PJpRIx3vgYVA94sjlTyNRWhQZKOhLh2scNwA6HDRQgl3BWNy8Sc0I9LOV6OQt0yG%2F8IS0&X-Amz-Signature=15c9d846052fccdfe0fd7853864f1f752429826f772c5814f881d6d0b25fe17e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ELTYGEU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDzTugaaA57i5GAJHY3Apws7%2BqeD3qvD7ityqdlhUOD2AiBoNfhY%2BbGtpCXENp%2BtiN47WClEQTl%2BH6xKd3hvL2dEnCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM88%2Fn2%2BMb6IHX%2Fxr0KtwDcylm0ReFjY19eHnxgzxD3LStF3U2ZbOF65bnuTgcmYSlg00MS98ErEjrDKQPobuXXOshn5uOYrtfskQafuc0ytZqQSD95gOU4qUf7Sro1umgvm3VeRX%2FUFkq6YtYnfyQbT5OaAPeCWBvRyRJNPMc0VzwR3TH5rA%2Btx0wO2Wgh%2BicObzS5%2Bt8cLzA1omfB6vj8Pt4yFn56dHuRc%2FjZNMki248lSPmrXN7HOvUQJVjZvaquUF8NfppVqX6jy1yRfshfG5F7NjVvE09KEBq8QMztJ%2BiSqpU9L5812YyuWQMOWJuSDbjZIVrsCrM5gw%2BjkhhXW4lZTOgIqj%2B1ubFomFtzKYtCQNllG4vJ5HWM13oIrYdH%2BW7agYibChx2RnxJSGM4LfZZqrK1HQ3WG3XcnWuWAXW40YlBRSIegSOubwz0nsXJ2tMFY9qI18aJQY637uKk4d0qPY3yB31LBKTp5WG40RdEayqIiVe5gm5jK6XU7pv2Sy1Q09kdTWYO0%2F8HiupVXrx7MGGkbuUZmJC0KXsNgApWYCxiWL%2Bfq%2BWUedQPZb30fFn9Vn7bL7UuMQl0jRoXaPRJhCff6%2FzN40%2FHxsMv3TftKrKiDvhaKAkC%2FGHpOgNvQp3zzTxx3%2F7kr4w0tOlvwY6pgEsT76LF6QzmhlURykJhZ0noO07dNwbsiSRKVkhAPnPZ0CrW7hQWhuv1u%2FxU39nAHFg9hLO5jbhNQUKI135vVXsxjhi2f%2BInvfUUj8OvK189PP5IcM3PjkUlfixbT8kvshJkt432IkLPbOMuxnEhVP%2BwO5PJpRIx3vgYVA94sjlTyNRWhQZKOhLh2scNwA6HDRQgl3BWNy8Sc0I9LOV6OQt0yG%2F8IS0&X-Amz-Signature=28827bab91644e0cc275864cfdf5479f0fdcf11747458e1527f495a331b3bda9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
