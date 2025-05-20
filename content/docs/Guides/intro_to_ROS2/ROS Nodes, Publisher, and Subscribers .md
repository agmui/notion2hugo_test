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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGJ2VQDQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGdtqEG%2FFv5G1sxv4o5%2BlYgmfhQAi2B23StteHPwkL5QIgVJzckU5XFmh3mMlrdExpCGN9dU%2FUOi7JcOgw8ZOKIHoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOClVuy3hOMHP%2FZA4ircA5TrXKg9Gx%2BSwu3j6rADIdVwHUbsQQ2whjOOGJsL%2FLLMXN5WzDxKnmCmq1Vh66avE7rDWZn4Lygw24SH%2BSr5Ft9s85xUav%2BNeR%2F0ngt54M%2BgA8CpFMv9SqExHMfRzwnEZ3z9k%2BgXQdOQHnkxEv5h0vSFQ%2F3%2FHfKTuz9SvsqJvdmkeYuYw00eeIFZIVwRTGRzLsWq4fJ1h4icmN8c%2FykGF07kDrDD5trIgW8V6tamI2XlR%2Fu80Vte2EW3WAtq9occcC4WL%2BTkbLsHfOcMrdQB%2FkUIPJngcR0W4iaHzrg4XeCLa2vToIGVZCmg4uVuo0mJcwL91Q5vEh4l4wonCS5tnL0pq47ldiiJw6AemV4dd6I8H31QmLwKUtE%2F8ExzBznnfuuoFOM4O65eVSMx%2FcoPujFqeLDc%2BMwqtrIkycQI2A8F7OoPcNEHtlzN7Oen0Gc5DuWHIsyRF5Zid095OahkDOCSdakiG6E%2FTBw3UTzJNpa6kplsFM8ZSP4CHYVrPAlPLhoVzDg0XNocAXG2zeqlmJjndYQnK58e%2Fn5LUnhHoqUqc%2BP7ib8LDpDkjgljnd9bzpu9fSFcGtmZrgQp9ZpLvR%2FTqp60LjS9uxT%2ByVKUb6N9zgmRU7TjpiRz6gpRMKbGsMEGOqUB0n9NnRlJ4f24aOjJ6t9xKWArvB0Nu2f1%2B5czCiIMVE1mX6vE20%2BJ2EeEIggQQmSIJO28JkkwcZXAZ5rUUIzP8TxhTsH3rc6U%2BPXOvcrNS4orKmydkmPzboHIYMPJ7%2FWkoGlWM0Zt3hxaiVFAFwvFWy55MSodTKG7NURx%2FNjXbW6BOg18UU6Ngpngd7Kd56PZdFsOLhzEcHKe42Qr4MLxTWqoGUP1&X-Amz-Signature=72f07834656ba351910f057b71bfa9d20851556a641d4d323cfc10b6c28720f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGJ2VQDQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGdtqEG%2FFv5G1sxv4o5%2BlYgmfhQAi2B23StteHPwkL5QIgVJzckU5XFmh3mMlrdExpCGN9dU%2FUOi7JcOgw8ZOKIHoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOClVuy3hOMHP%2FZA4ircA5TrXKg9Gx%2BSwu3j6rADIdVwHUbsQQ2whjOOGJsL%2FLLMXN5WzDxKnmCmq1Vh66avE7rDWZn4Lygw24SH%2BSr5Ft9s85xUav%2BNeR%2F0ngt54M%2BgA8CpFMv9SqExHMfRzwnEZ3z9k%2BgXQdOQHnkxEv5h0vSFQ%2F3%2FHfKTuz9SvsqJvdmkeYuYw00eeIFZIVwRTGRzLsWq4fJ1h4icmN8c%2FykGF07kDrDD5trIgW8V6tamI2XlR%2Fu80Vte2EW3WAtq9occcC4WL%2BTkbLsHfOcMrdQB%2FkUIPJngcR0W4iaHzrg4XeCLa2vToIGVZCmg4uVuo0mJcwL91Q5vEh4l4wonCS5tnL0pq47ldiiJw6AemV4dd6I8H31QmLwKUtE%2F8ExzBznnfuuoFOM4O65eVSMx%2FcoPujFqeLDc%2BMwqtrIkycQI2A8F7OoPcNEHtlzN7Oen0Gc5DuWHIsyRF5Zid095OahkDOCSdakiG6E%2FTBw3UTzJNpa6kplsFM8ZSP4CHYVrPAlPLhoVzDg0XNocAXG2zeqlmJjndYQnK58e%2Fn5LUnhHoqUqc%2BP7ib8LDpDkjgljnd9bzpu9fSFcGtmZrgQp9ZpLvR%2FTqp60LjS9uxT%2ByVKUb6N9zgmRU7TjpiRz6gpRMKbGsMEGOqUB0n9NnRlJ4f24aOjJ6t9xKWArvB0Nu2f1%2B5czCiIMVE1mX6vE20%2BJ2EeEIggQQmSIJO28JkkwcZXAZ5rUUIzP8TxhTsH3rc6U%2BPXOvcrNS4orKmydkmPzboHIYMPJ7%2FWkoGlWM0Zt3hxaiVFAFwvFWy55MSodTKG7NURx%2FNjXbW6BOg18UU6Ngpngd7Kd56PZdFsOLhzEcHKe42Qr4MLxTWqoGUP1&X-Amz-Signature=2dc820ff04b6cba9d4855e866e2fa0a429bb84a47250006f96b2e2c9f71ca813&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGJ2VQDQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGdtqEG%2FFv5G1sxv4o5%2BlYgmfhQAi2B23StteHPwkL5QIgVJzckU5XFmh3mMlrdExpCGN9dU%2FUOi7JcOgw8ZOKIHoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOClVuy3hOMHP%2FZA4ircA5TrXKg9Gx%2BSwu3j6rADIdVwHUbsQQ2whjOOGJsL%2FLLMXN5WzDxKnmCmq1Vh66avE7rDWZn4Lygw24SH%2BSr5Ft9s85xUav%2BNeR%2F0ngt54M%2BgA8CpFMv9SqExHMfRzwnEZ3z9k%2BgXQdOQHnkxEv5h0vSFQ%2F3%2FHfKTuz9SvsqJvdmkeYuYw00eeIFZIVwRTGRzLsWq4fJ1h4icmN8c%2FykGF07kDrDD5trIgW8V6tamI2XlR%2Fu80Vte2EW3WAtq9occcC4WL%2BTkbLsHfOcMrdQB%2FkUIPJngcR0W4iaHzrg4XeCLa2vToIGVZCmg4uVuo0mJcwL91Q5vEh4l4wonCS5tnL0pq47ldiiJw6AemV4dd6I8H31QmLwKUtE%2F8ExzBznnfuuoFOM4O65eVSMx%2FcoPujFqeLDc%2BMwqtrIkycQI2A8F7OoPcNEHtlzN7Oen0Gc5DuWHIsyRF5Zid095OahkDOCSdakiG6E%2FTBw3UTzJNpa6kplsFM8ZSP4CHYVrPAlPLhoVzDg0XNocAXG2zeqlmJjndYQnK58e%2Fn5LUnhHoqUqc%2BP7ib8LDpDkjgljnd9bzpu9fSFcGtmZrgQp9ZpLvR%2FTqp60LjS9uxT%2ByVKUb6N9zgmRU7TjpiRz6gpRMKbGsMEGOqUB0n9NnRlJ4f24aOjJ6t9xKWArvB0Nu2f1%2B5czCiIMVE1mX6vE20%2BJ2EeEIggQQmSIJO28JkkwcZXAZ5rUUIzP8TxhTsH3rc6U%2BPXOvcrNS4orKmydkmPzboHIYMPJ7%2FWkoGlWM0Zt3hxaiVFAFwvFWy55MSodTKG7NURx%2FNjXbW6BOg18UU6Ngpngd7Kd56PZdFsOLhzEcHKe42Qr4MLxTWqoGUP1&X-Amz-Signature=19632f9a02cf562bf51d9a911bfd3b0baedba30a4cef91dbb14aab0abc5e6623&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGJ2VQDQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGdtqEG%2FFv5G1sxv4o5%2BlYgmfhQAi2B23StteHPwkL5QIgVJzckU5XFmh3mMlrdExpCGN9dU%2FUOi7JcOgw8ZOKIHoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOClVuy3hOMHP%2FZA4ircA5TrXKg9Gx%2BSwu3j6rADIdVwHUbsQQ2whjOOGJsL%2FLLMXN5WzDxKnmCmq1Vh66avE7rDWZn4Lygw24SH%2BSr5Ft9s85xUav%2BNeR%2F0ngt54M%2BgA8CpFMv9SqExHMfRzwnEZ3z9k%2BgXQdOQHnkxEv5h0vSFQ%2F3%2FHfKTuz9SvsqJvdmkeYuYw00eeIFZIVwRTGRzLsWq4fJ1h4icmN8c%2FykGF07kDrDD5trIgW8V6tamI2XlR%2Fu80Vte2EW3WAtq9occcC4WL%2BTkbLsHfOcMrdQB%2FkUIPJngcR0W4iaHzrg4XeCLa2vToIGVZCmg4uVuo0mJcwL91Q5vEh4l4wonCS5tnL0pq47ldiiJw6AemV4dd6I8H31QmLwKUtE%2F8ExzBznnfuuoFOM4O65eVSMx%2FcoPujFqeLDc%2BMwqtrIkycQI2A8F7OoPcNEHtlzN7Oen0Gc5DuWHIsyRF5Zid095OahkDOCSdakiG6E%2FTBw3UTzJNpa6kplsFM8ZSP4CHYVrPAlPLhoVzDg0XNocAXG2zeqlmJjndYQnK58e%2Fn5LUnhHoqUqc%2BP7ib8LDpDkjgljnd9bzpu9fSFcGtmZrgQp9ZpLvR%2FTqp60LjS9uxT%2ByVKUb6N9zgmRU7TjpiRz6gpRMKbGsMEGOqUB0n9NnRlJ4f24aOjJ6t9xKWArvB0Nu2f1%2B5czCiIMVE1mX6vE20%2BJ2EeEIggQQmSIJO28JkkwcZXAZ5rUUIzP8TxhTsH3rc6U%2BPXOvcrNS4orKmydkmPzboHIYMPJ7%2FWkoGlWM0Zt3hxaiVFAFwvFWy55MSodTKG7NURx%2FNjXbW6BOg18UU6Ngpngd7Kd56PZdFsOLhzEcHKe42Qr4MLxTWqoGUP1&X-Amz-Signature=08211806ae38007e71d472f5964c99e5bf6f19a446e42bc5f270c037a23631d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGJ2VQDQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGdtqEG%2FFv5G1sxv4o5%2BlYgmfhQAi2B23StteHPwkL5QIgVJzckU5XFmh3mMlrdExpCGN9dU%2FUOi7JcOgw8ZOKIHoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOClVuy3hOMHP%2FZA4ircA5TrXKg9Gx%2BSwu3j6rADIdVwHUbsQQ2whjOOGJsL%2FLLMXN5WzDxKnmCmq1Vh66avE7rDWZn4Lygw24SH%2BSr5Ft9s85xUav%2BNeR%2F0ngt54M%2BgA8CpFMv9SqExHMfRzwnEZ3z9k%2BgXQdOQHnkxEv5h0vSFQ%2F3%2FHfKTuz9SvsqJvdmkeYuYw00eeIFZIVwRTGRzLsWq4fJ1h4icmN8c%2FykGF07kDrDD5trIgW8V6tamI2XlR%2Fu80Vte2EW3WAtq9occcC4WL%2BTkbLsHfOcMrdQB%2FkUIPJngcR0W4iaHzrg4XeCLa2vToIGVZCmg4uVuo0mJcwL91Q5vEh4l4wonCS5tnL0pq47ldiiJw6AemV4dd6I8H31QmLwKUtE%2F8ExzBznnfuuoFOM4O65eVSMx%2FcoPujFqeLDc%2BMwqtrIkycQI2A8F7OoPcNEHtlzN7Oen0Gc5DuWHIsyRF5Zid095OahkDOCSdakiG6E%2FTBw3UTzJNpa6kplsFM8ZSP4CHYVrPAlPLhoVzDg0XNocAXG2zeqlmJjndYQnK58e%2Fn5LUnhHoqUqc%2BP7ib8LDpDkjgljnd9bzpu9fSFcGtmZrgQp9ZpLvR%2FTqp60LjS9uxT%2ByVKUb6N9zgmRU7TjpiRz6gpRMKbGsMEGOqUB0n9NnRlJ4f24aOjJ6t9xKWArvB0Nu2f1%2B5czCiIMVE1mX6vE20%2BJ2EeEIggQQmSIJO28JkkwcZXAZ5rUUIzP8TxhTsH3rc6U%2BPXOvcrNS4orKmydkmPzboHIYMPJ7%2FWkoGlWM0Zt3hxaiVFAFwvFWy55MSodTKG7NURx%2FNjXbW6BOg18UU6Ngpngd7Kd56PZdFsOLhzEcHKe42Qr4MLxTWqoGUP1&X-Amz-Signature=1ad84f42d9eb1a16c32428d6d73da9dd1e0d9529beb60f817f0288080eb3b45a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGJ2VQDQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGdtqEG%2FFv5G1sxv4o5%2BlYgmfhQAi2B23StteHPwkL5QIgVJzckU5XFmh3mMlrdExpCGN9dU%2FUOi7JcOgw8ZOKIHoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOClVuy3hOMHP%2FZA4ircA5TrXKg9Gx%2BSwu3j6rADIdVwHUbsQQ2whjOOGJsL%2FLLMXN5WzDxKnmCmq1Vh66avE7rDWZn4Lygw24SH%2BSr5Ft9s85xUav%2BNeR%2F0ngt54M%2BgA8CpFMv9SqExHMfRzwnEZ3z9k%2BgXQdOQHnkxEv5h0vSFQ%2F3%2FHfKTuz9SvsqJvdmkeYuYw00eeIFZIVwRTGRzLsWq4fJ1h4icmN8c%2FykGF07kDrDD5trIgW8V6tamI2XlR%2Fu80Vte2EW3WAtq9occcC4WL%2BTkbLsHfOcMrdQB%2FkUIPJngcR0W4iaHzrg4XeCLa2vToIGVZCmg4uVuo0mJcwL91Q5vEh4l4wonCS5tnL0pq47ldiiJw6AemV4dd6I8H31QmLwKUtE%2F8ExzBznnfuuoFOM4O65eVSMx%2FcoPujFqeLDc%2BMwqtrIkycQI2A8F7OoPcNEHtlzN7Oen0Gc5DuWHIsyRF5Zid095OahkDOCSdakiG6E%2FTBw3UTzJNpa6kplsFM8ZSP4CHYVrPAlPLhoVzDg0XNocAXG2zeqlmJjndYQnK58e%2Fn5LUnhHoqUqc%2BP7ib8LDpDkjgljnd9bzpu9fSFcGtmZrgQp9ZpLvR%2FTqp60LjS9uxT%2ByVKUb6N9zgmRU7TjpiRz6gpRMKbGsMEGOqUB0n9NnRlJ4f24aOjJ6t9xKWArvB0Nu2f1%2B5czCiIMVE1mX6vE20%2BJ2EeEIggQQmSIJO28JkkwcZXAZ5rUUIzP8TxhTsH3rc6U%2BPXOvcrNS4orKmydkmPzboHIYMPJ7%2FWkoGlWM0Zt3hxaiVFAFwvFWy55MSodTKG7NURx%2FNjXbW6BOg18UU6Ngpngd7Kd56PZdFsOLhzEcHKe42Qr4MLxTWqoGUP1&X-Amz-Signature=cf427e8c314276aea20442f001f1a7e6748cce9c9f9a1797ba4cc60cb8f4760f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGJ2VQDQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGdtqEG%2FFv5G1sxv4o5%2BlYgmfhQAi2B23StteHPwkL5QIgVJzckU5XFmh3mMlrdExpCGN9dU%2FUOi7JcOgw8ZOKIHoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOClVuy3hOMHP%2FZA4ircA5TrXKg9Gx%2BSwu3j6rADIdVwHUbsQQ2whjOOGJsL%2FLLMXN5WzDxKnmCmq1Vh66avE7rDWZn4Lygw24SH%2BSr5Ft9s85xUav%2BNeR%2F0ngt54M%2BgA8CpFMv9SqExHMfRzwnEZ3z9k%2BgXQdOQHnkxEv5h0vSFQ%2F3%2FHfKTuz9SvsqJvdmkeYuYw00eeIFZIVwRTGRzLsWq4fJ1h4icmN8c%2FykGF07kDrDD5trIgW8V6tamI2XlR%2Fu80Vte2EW3WAtq9occcC4WL%2BTkbLsHfOcMrdQB%2FkUIPJngcR0W4iaHzrg4XeCLa2vToIGVZCmg4uVuo0mJcwL91Q5vEh4l4wonCS5tnL0pq47ldiiJw6AemV4dd6I8H31QmLwKUtE%2F8ExzBznnfuuoFOM4O65eVSMx%2FcoPujFqeLDc%2BMwqtrIkycQI2A8F7OoPcNEHtlzN7Oen0Gc5DuWHIsyRF5Zid095OahkDOCSdakiG6E%2FTBw3UTzJNpa6kplsFM8ZSP4CHYVrPAlPLhoVzDg0XNocAXG2zeqlmJjndYQnK58e%2Fn5LUnhHoqUqc%2BP7ib8LDpDkjgljnd9bzpu9fSFcGtmZrgQp9ZpLvR%2FTqp60LjS9uxT%2ByVKUb6N9zgmRU7TjpiRz6gpRMKbGsMEGOqUB0n9NnRlJ4f24aOjJ6t9xKWArvB0Nu2f1%2B5czCiIMVE1mX6vE20%2BJ2EeEIggQQmSIJO28JkkwcZXAZ5rUUIzP8TxhTsH3rc6U%2BPXOvcrNS4orKmydkmPzboHIYMPJ7%2FWkoGlWM0Zt3hxaiVFAFwvFWy55MSodTKG7NURx%2FNjXbW6BOg18UU6Ngpngd7Kd56PZdFsOLhzEcHKe42Qr4MLxTWqoGUP1&X-Amz-Signature=0b1f9e92d167fed2a6008791535117fd69add4c2aa680404148f9e3508d6d850&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGJ2VQDQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGdtqEG%2FFv5G1sxv4o5%2BlYgmfhQAi2B23StteHPwkL5QIgVJzckU5XFmh3mMlrdExpCGN9dU%2FUOi7JcOgw8ZOKIHoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOClVuy3hOMHP%2FZA4ircA5TrXKg9Gx%2BSwu3j6rADIdVwHUbsQQ2whjOOGJsL%2FLLMXN5WzDxKnmCmq1Vh66avE7rDWZn4Lygw24SH%2BSr5Ft9s85xUav%2BNeR%2F0ngt54M%2BgA8CpFMv9SqExHMfRzwnEZ3z9k%2BgXQdOQHnkxEv5h0vSFQ%2F3%2FHfKTuz9SvsqJvdmkeYuYw00eeIFZIVwRTGRzLsWq4fJ1h4icmN8c%2FykGF07kDrDD5trIgW8V6tamI2XlR%2Fu80Vte2EW3WAtq9occcC4WL%2BTkbLsHfOcMrdQB%2FkUIPJngcR0W4iaHzrg4XeCLa2vToIGVZCmg4uVuo0mJcwL91Q5vEh4l4wonCS5tnL0pq47ldiiJw6AemV4dd6I8H31QmLwKUtE%2F8ExzBznnfuuoFOM4O65eVSMx%2FcoPujFqeLDc%2BMwqtrIkycQI2A8F7OoPcNEHtlzN7Oen0Gc5DuWHIsyRF5Zid095OahkDOCSdakiG6E%2FTBw3UTzJNpa6kplsFM8ZSP4CHYVrPAlPLhoVzDg0XNocAXG2zeqlmJjndYQnK58e%2Fn5LUnhHoqUqc%2BP7ib8LDpDkjgljnd9bzpu9fSFcGtmZrgQp9ZpLvR%2FTqp60LjS9uxT%2ByVKUb6N9zgmRU7TjpiRz6gpRMKbGsMEGOqUB0n9NnRlJ4f24aOjJ6t9xKWArvB0Nu2f1%2B5czCiIMVE1mX6vE20%2BJ2EeEIggQQmSIJO28JkkwcZXAZ5rUUIzP8TxhTsH3rc6U%2BPXOvcrNS4orKmydkmPzboHIYMPJ7%2FWkoGlWM0Zt3hxaiVFAFwvFWy55MSodTKG7NURx%2FNjXbW6BOg18UU6Ngpngd7Kd56PZdFsOLhzEcHKe42Qr4MLxTWqoGUP1&X-Amz-Signature=589ec5fdb00e6994b4e0cbb08f5a7f0c5cca7d8d4bafd6e821bca3f02a717199&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
