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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQ3RWN2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIA%2FbRaOrF8xhv%2BAXP%2FvE8GRXM2p2MRwqUaYYns%2BUlhTZAiEAyCYw3mmIh6v6b4X95JWRT8XkDkVmHD6%2BVFBnhDqn1AwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjljV8T9bIi1QOrjyrcAwgUcgmmpyGeL6z7Msavgahodp6I39PBCnA%2BVtAmUqklGWBjrB4eoRGzHxCvjB%2F31gGrmTMqPrUE%2BFyJ39snZRrmB%2BzGxsO%2FY02VZR4HlvRPU9tQUsJDzr%2FdGgqOswysIEhIgd6zHFbNNbMYblisMd53QiNxd4ZR%2BQ0qavUNZdSvLiQ2jPWLAeQrggDCvJ%2FE0L4kffYIAeFwmX5TZzJ5o89Rap0wCu5swmwgA6u4C%2BGN4RdKX6IEgiIw0ZhEQWT%2Bgrbj63l120%2BL7bp1gi4jzHU4ovySrzTGdGU5jwF7BCYTUwb6hH8WJEJMLUajQa4MeXtB8dLdAeZeWfhSL85qbkNjngiHjYTBrem8TXQQxJ7OioQEK0w%2FxTd1KrJqaIVpeoELLWm9QRMvCDDewQTiOnV%2BSiRd1RC%2BWWypQAWo82LdFU2g5GWwDxJRTm6MCGKx9gWbdRuVxFUYaEqNkR4lptdE9lgp5vcxncBjhwMf5Rc74y%2BEEGpOPuQAUBURiFiUBCjNSew7STV9OkvJJakkVorulz1ZWY0ngJB2kTmdcgSzyeCQNgjYzE4Hwq4rU4%2FtTSfjBWTtGovOTMqJB9eDLkObQ%2FN57aAqu1SYptaamEDeGQuWNWZefQA6JOSYMNf6uL4GOqUBi%2FuhA8zb5ykVn%2B%2B1PHSImnPiyEKKDi09hvD4rs1lp0nzLsHpPFEItolN9gfoEDacq44NehrzTGcXH%2FqWpA3KfUG43NX%2FoYOwvChWVkGOO13IdEnuC2mXCbGHT6QO62WN3lVthWYegGRgktRCyFKCI0LeEwKUe0NX9l5BuKXrcDsm%2BWaWth7FM3koLqm82tEijHNbIM%2BnXqGxsTobboBdsHNBCTxO&X-Amz-Signature=5bd7f3396a6d90c7f2812519afba14613a80c49d8a7817976c5189827dd2d355&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQ3RWN2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIA%2FbRaOrF8xhv%2BAXP%2FvE8GRXM2p2MRwqUaYYns%2BUlhTZAiEAyCYw3mmIh6v6b4X95JWRT8XkDkVmHD6%2BVFBnhDqn1AwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjljV8T9bIi1QOrjyrcAwgUcgmmpyGeL6z7Msavgahodp6I39PBCnA%2BVtAmUqklGWBjrB4eoRGzHxCvjB%2F31gGrmTMqPrUE%2BFyJ39snZRrmB%2BzGxsO%2FY02VZR4HlvRPU9tQUsJDzr%2FdGgqOswysIEhIgd6zHFbNNbMYblisMd53QiNxd4ZR%2BQ0qavUNZdSvLiQ2jPWLAeQrggDCvJ%2FE0L4kffYIAeFwmX5TZzJ5o89Rap0wCu5swmwgA6u4C%2BGN4RdKX6IEgiIw0ZhEQWT%2Bgrbj63l120%2BL7bp1gi4jzHU4ovySrzTGdGU5jwF7BCYTUwb6hH8WJEJMLUajQa4MeXtB8dLdAeZeWfhSL85qbkNjngiHjYTBrem8TXQQxJ7OioQEK0w%2FxTd1KrJqaIVpeoELLWm9QRMvCDDewQTiOnV%2BSiRd1RC%2BWWypQAWo82LdFU2g5GWwDxJRTm6MCGKx9gWbdRuVxFUYaEqNkR4lptdE9lgp5vcxncBjhwMf5Rc74y%2BEEGpOPuQAUBURiFiUBCjNSew7STV9OkvJJakkVorulz1ZWY0ngJB2kTmdcgSzyeCQNgjYzE4Hwq4rU4%2FtTSfjBWTtGovOTMqJB9eDLkObQ%2FN57aAqu1SYptaamEDeGQuWNWZefQA6JOSYMNf6uL4GOqUBi%2FuhA8zb5ykVn%2B%2B1PHSImnPiyEKKDi09hvD4rs1lp0nzLsHpPFEItolN9gfoEDacq44NehrzTGcXH%2FqWpA3KfUG43NX%2FoYOwvChWVkGOO13IdEnuC2mXCbGHT6QO62WN3lVthWYegGRgktRCyFKCI0LeEwKUe0NX9l5BuKXrcDsm%2BWaWth7FM3koLqm82tEijHNbIM%2BnXqGxsTobboBdsHNBCTxO&X-Amz-Signature=09df127b0abac8fbb61d751e6e36687c0a89291f27bd1b5c88d5b911529c0692&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQ3RWN2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIA%2FbRaOrF8xhv%2BAXP%2FvE8GRXM2p2MRwqUaYYns%2BUlhTZAiEAyCYw3mmIh6v6b4X95JWRT8XkDkVmHD6%2BVFBnhDqn1AwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjljV8T9bIi1QOrjyrcAwgUcgmmpyGeL6z7Msavgahodp6I39PBCnA%2BVtAmUqklGWBjrB4eoRGzHxCvjB%2F31gGrmTMqPrUE%2BFyJ39snZRrmB%2BzGxsO%2FY02VZR4HlvRPU9tQUsJDzr%2FdGgqOswysIEhIgd6zHFbNNbMYblisMd53QiNxd4ZR%2BQ0qavUNZdSvLiQ2jPWLAeQrggDCvJ%2FE0L4kffYIAeFwmX5TZzJ5o89Rap0wCu5swmwgA6u4C%2BGN4RdKX6IEgiIw0ZhEQWT%2Bgrbj63l120%2BL7bp1gi4jzHU4ovySrzTGdGU5jwF7BCYTUwb6hH8WJEJMLUajQa4MeXtB8dLdAeZeWfhSL85qbkNjngiHjYTBrem8TXQQxJ7OioQEK0w%2FxTd1KrJqaIVpeoELLWm9QRMvCDDewQTiOnV%2BSiRd1RC%2BWWypQAWo82LdFU2g5GWwDxJRTm6MCGKx9gWbdRuVxFUYaEqNkR4lptdE9lgp5vcxncBjhwMf5Rc74y%2BEEGpOPuQAUBURiFiUBCjNSew7STV9OkvJJakkVorulz1ZWY0ngJB2kTmdcgSzyeCQNgjYzE4Hwq4rU4%2FtTSfjBWTtGovOTMqJB9eDLkObQ%2FN57aAqu1SYptaamEDeGQuWNWZefQA6JOSYMNf6uL4GOqUBi%2FuhA8zb5ykVn%2B%2B1PHSImnPiyEKKDi09hvD4rs1lp0nzLsHpPFEItolN9gfoEDacq44NehrzTGcXH%2FqWpA3KfUG43NX%2FoYOwvChWVkGOO13IdEnuC2mXCbGHT6QO62WN3lVthWYegGRgktRCyFKCI0LeEwKUe0NX9l5BuKXrcDsm%2BWaWth7FM3koLqm82tEijHNbIM%2BnXqGxsTobboBdsHNBCTxO&X-Amz-Signature=5188c91112806702dae84bb4a5df042c1db5d9f6c3c678eb01003168fb66fc7e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQ3RWN2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIA%2FbRaOrF8xhv%2BAXP%2FvE8GRXM2p2MRwqUaYYns%2BUlhTZAiEAyCYw3mmIh6v6b4X95JWRT8XkDkVmHD6%2BVFBnhDqn1AwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjljV8T9bIi1QOrjyrcAwgUcgmmpyGeL6z7Msavgahodp6I39PBCnA%2BVtAmUqklGWBjrB4eoRGzHxCvjB%2F31gGrmTMqPrUE%2BFyJ39snZRrmB%2BzGxsO%2FY02VZR4HlvRPU9tQUsJDzr%2FdGgqOswysIEhIgd6zHFbNNbMYblisMd53QiNxd4ZR%2BQ0qavUNZdSvLiQ2jPWLAeQrggDCvJ%2FE0L4kffYIAeFwmX5TZzJ5o89Rap0wCu5swmwgA6u4C%2BGN4RdKX6IEgiIw0ZhEQWT%2Bgrbj63l120%2BL7bp1gi4jzHU4ovySrzTGdGU5jwF7BCYTUwb6hH8WJEJMLUajQa4MeXtB8dLdAeZeWfhSL85qbkNjngiHjYTBrem8TXQQxJ7OioQEK0w%2FxTd1KrJqaIVpeoELLWm9QRMvCDDewQTiOnV%2BSiRd1RC%2BWWypQAWo82LdFU2g5GWwDxJRTm6MCGKx9gWbdRuVxFUYaEqNkR4lptdE9lgp5vcxncBjhwMf5Rc74y%2BEEGpOPuQAUBURiFiUBCjNSew7STV9OkvJJakkVorulz1ZWY0ngJB2kTmdcgSzyeCQNgjYzE4Hwq4rU4%2FtTSfjBWTtGovOTMqJB9eDLkObQ%2FN57aAqu1SYptaamEDeGQuWNWZefQA6JOSYMNf6uL4GOqUBi%2FuhA8zb5ykVn%2B%2B1PHSImnPiyEKKDi09hvD4rs1lp0nzLsHpPFEItolN9gfoEDacq44NehrzTGcXH%2FqWpA3KfUG43NX%2FoYOwvChWVkGOO13IdEnuC2mXCbGHT6QO62WN3lVthWYegGRgktRCyFKCI0LeEwKUe0NX9l5BuKXrcDsm%2BWaWth7FM3koLqm82tEijHNbIM%2BnXqGxsTobboBdsHNBCTxO&X-Amz-Signature=2d9d558f5fdca7e7a25c2fc1e7dd7b150a09b141db8288bee257ae401fb64b34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQ3RWN2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIA%2FbRaOrF8xhv%2BAXP%2FvE8GRXM2p2MRwqUaYYns%2BUlhTZAiEAyCYw3mmIh6v6b4X95JWRT8XkDkVmHD6%2BVFBnhDqn1AwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjljV8T9bIi1QOrjyrcAwgUcgmmpyGeL6z7Msavgahodp6I39PBCnA%2BVtAmUqklGWBjrB4eoRGzHxCvjB%2F31gGrmTMqPrUE%2BFyJ39snZRrmB%2BzGxsO%2FY02VZR4HlvRPU9tQUsJDzr%2FdGgqOswysIEhIgd6zHFbNNbMYblisMd53QiNxd4ZR%2BQ0qavUNZdSvLiQ2jPWLAeQrggDCvJ%2FE0L4kffYIAeFwmX5TZzJ5o89Rap0wCu5swmwgA6u4C%2BGN4RdKX6IEgiIw0ZhEQWT%2Bgrbj63l120%2BL7bp1gi4jzHU4ovySrzTGdGU5jwF7BCYTUwb6hH8WJEJMLUajQa4MeXtB8dLdAeZeWfhSL85qbkNjngiHjYTBrem8TXQQxJ7OioQEK0w%2FxTd1KrJqaIVpeoELLWm9QRMvCDDewQTiOnV%2BSiRd1RC%2BWWypQAWo82LdFU2g5GWwDxJRTm6MCGKx9gWbdRuVxFUYaEqNkR4lptdE9lgp5vcxncBjhwMf5Rc74y%2BEEGpOPuQAUBURiFiUBCjNSew7STV9OkvJJakkVorulz1ZWY0ngJB2kTmdcgSzyeCQNgjYzE4Hwq4rU4%2FtTSfjBWTtGovOTMqJB9eDLkObQ%2FN57aAqu1SYptaamEDeGQuWNWZefQA6JOSYMNf6uL4GOqUBi%2FuhA8zb5ykVn%2B%2B1PHSImnPiyEKKDi09hvD4rs1lp0nzLsHpPFEItolN9gfoEDacq44NehrzTGcXH%2FqWpA3KfUG43NX%2FoYOwvChWVkGOO13IdEnuC2mXCbGHT6QO62WN3lVthWYegGRgktRCyFKCI0LeEwKUe0NX9l5BuKXrcDsm%2BWaWth7FM3koLqm82tEijHNbIM%2BnXqGxsTobboBdsHNBCTxO&X-Amz-Signature=2de9d75b26eef7afc454319e13341999f401cd6636a3f89bad65a7420af328c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQ3RWN2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIA%2FbRaOrF8xhv%2BAXP%2FvE8GRXM2p2MRwqUaYYns%2BUlhTZAiEAyCYw3mmIh6v6b4X95JWRT8XkDkVmHD6%2BVFBnhDqn1AwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjljV8T9bIi1QOrjyrcAwgUcgmmpyGeL6z7Msavgahodp6I39PBCnA%2BVtAmUqklGWBjrB4eoRGzHxCvjB%2F31gGrmTMqPrUE%2BFyJ39snZRrmB%2BzGxsO%2FY02VZR4HlvRPU9tQUsJDzr%2FdGgqOswysIEhIgd6zHFbNNbMYblisMd53QiNxd4ZR%2BQ0qavUNZdSvLiQ2jPWLAeQrggDCvJ%2FE0L4kffYIAeFwmX5TZzJ5o89Rap0wCu5swmwgA6u4C%2BGN4RdKX6IEgiIw0ZhEQWT%2Bgrbj63l120%2BL7bp1gi4jzHU4ovySrzTGdGU5jwF7BCYTUwb6hH8WJEJMLUajQa4MeXtB8dLdAeZeWfhSL85qbkNjngiHjYTBrem8TXQQxJ7OioQEK0w%2FxTd1KrJqaIVpeoELLWm9QRMvCDDewQTiOnV%2BSiRd1RC%2BWWypQAWo82LdFU2g5GWwDxJRTm6MCGKx9gWbdRuVxFUYaEqNkR4lptdE9lgp5vcxncBjhwMf5Rc74y%2BEEGpOPuQAUBURiFiUBCjNSew7STV9OkvJJakkVorulz1ZWY0ngJB2kTmdcgSzyeCQNgjYzE4Hwq4rU4%2FtTSfjBWTtGovOTMqJB9eDLkObQ%2FN57aAqu1SYptaamEDeGQuWNWZefQA6JOSYMNf6uL4GOqUBi%2FuhA8zb5ykVn%2B%2B1PHSImnPiyEKKDi09hvD4rs1lp0nzLsHpPFEItolN9gfoEDacq44NehrzTGcXH%2FqWpA3KfUG43NX%2FoYOwvChWVkGOO13IdEnuC2mXCbGHT6QO62WN3lVthWYegGRgktRCyFKCI0LeEwKUe0NX9l5BuKXrcDsm%2BWaWth7FM3koLqm82tEijHNbIM%2BnXqGxsTobboBdsHNBCTxO&X-Amz-Signature=56b8e8894d21b227c67d1dd689b0846c4bcfad0ff1a51ba3ddfb118f030877e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQ3RWN2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIA%2FbRaOrF8xhv%2BAXP%2FvE8GRXM2p2MRwqUaYYns%2BUlhTZAiEAyCYw3mmIh6v6b4X95JWRT8XkDkVmHD6%2BVFBnhDqn1AwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjljV8T9bIi1QOrjyrcAwgUcgmmpyGeL6z7Msavgahodp6I39PBCnA%2BVtAmUqklGWBjrB4eoRGzHxCvjB%2F31gGrmTMqPrUE%2BFyJ39snZRrmB%2BzGxsO%2FY02VZR4HlvRPU9tQUsJDzr%2FdGgqOswysIEhIgd6zHFbNNbMYblisMd53QiNxd4ZR%2BQ0qavUNZdSvLiQ2jPWLAeQrggDCvJ%2FE0L4kffYIAeFwmX5TZzJ5o89Rap0wCu5swmwgA6u4C%2BGN4RdKX6IEgiIw0ZhEQWT%2Bgrbj63l120%2BL7bp1gi4jzHU4ovySrzTGdGU5jwF7BCYTUwb6hH8WJEJMLUajQa4MeXtB8dLdAeZeWfhSL85qbkNjngiHjYTBrem8TXQQxJ7OioQEK0w%2FxTd1KrJqaIVpeoELLWm9QRMvCDDewQTiOnV%2BSiRd1RC%2BWWypQAWo82LdFU2g5GWwDxJRTm6MCGKx9gWbdRuVxFUYaEqNkR4lptdE9lgp5vcxncBjhwMf5Rc74y%2BEEGpOPuQAUBURiFiUBCjNSew7STV9OkvJJakkVorulz1ZWY0ngJB2kTmdcgSzyeCQNgjYzE4Hwq4rU4%2FtTSfjBWTtGovOTMqJB9eDLkObQ%2FN57aAqu1SYptaamEDeGQuWNWZefQA6JOSYMNf6uL4GOqUBi%2FuhA8zb5ykVn%2B%2B1PHSImnPiyEKKDi09hvD4rs1lp0nzLsHpPFEItolN9gfoEDacq44NehrzTGcXH%2FqWpA3KfUG43NX%2FoYOwvChWVkGOO13IdEnuC2mXCbGHT6QO62WN3lVthWYegGRgktRCyFKCI0LeEwKUe0NX9l5BuKXrcDsm%2BWaWth7FM3koLqm82tEijHNbIM%2BnXqGxsTobboBdsHNBCTxO&X-Amz-Signature=6e39da8db15986ff7491d6b04a847435f18117d65000906855de4bca865cd812&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQ3RWN2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIA%2FbRaOrF8xhv%2BAXP%2FvE8GRXM2p2MRwqUaYYns%2BUlhTZAiEAyCYw3mmIh6v6b4X95JWRT8XkDkVmHD6%2BVFBnhDqn1AwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjljV8T9bIi1QOrjyrcAwgUcgmmpyGeL6z7Msavgahodp6I39PBCnA%2BVtAmUqklGWBjrB4eoRGzHxCvjB%2F31gGrmTMqPrUE%2BFyJ39snZRrmB%2BzGxsO%2FY02VZR4HlvRPU9tQUsJDzr%2FdGgqOswysIEhIgd6zHFbNNbMYblisMd53QiNxd4ZR%2BQ0qavUNZdSvLiQ2jPWLAeQrggDCvJ%2FE0L4kffYIAeFwmX5TZzJ5o89Rap0wCu5swmwgA6u4C%2BGN4RdKX6IEgiIw0ZhEQWT%2Bgrbj63l120%2BL7bp1gi4jzHU4ovySrzTGdGU5jwF7BCYTUwb6hH8WJEJMLUajQa4MeXtB8dLdAeZeWfhSL85qbkNjngiHjYTBrem8TXQQxJ7OioQEK0w%2FxTd1KrJqaIVpeoELLWm9QRMvCDDewQTiOnV%2BSiRd1RC%2BWWypQAWo82LdFU2g5GWwDxJRTm6MCGKx9gWbdRuVxFUYaEqNkR4lptdE9lgp5vcxncBjhwMf5Rc74y%2BEEGpOPuQAUBURiFiUBCjNSew7STV9OkvJJakkVorulz1ZWY0ngJB2kTmdcgSzyeCQNgjYzE4Hwq4rU4%2FtTSfjBWTtGovOTMqJB9eDLkObQ%2FN57aAqu1SYptaamEDeGQuWNWZefQA6JOSYMNf6uL4GOqUBi%2FuhA8zb5ykVn%2B%2B1PHSImnPiyEKKDi09hvD4rs1lp0nzLsHpPFEItolN9gfoEDacq44NehrzTGcXH%2FqWpA3KfUG43NX%2FoYOwvChWVkGOO13IdEnuC2mXCbGHT6QO62WN3lVthWYegGRgktRCyFKCI0LeEwKUe0NX9l5BuKXrcDsm%2BWaWth7FM3koLqm82tEijHNbIM%2BnXqGxsTobboBdsHNBCTxO&X-Amz-Signature=055a6dd2dbfd07485d8636c1b669ff1475ff2a536d5503baf68bc488bc7bc739&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
