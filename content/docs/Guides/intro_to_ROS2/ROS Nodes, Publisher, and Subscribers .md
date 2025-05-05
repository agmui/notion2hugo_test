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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS6VFXTK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEDSYZerxro%2BfPLYivUiZpFLRWGmza6DOwjGHBDWwicAiAaCP90DUluzTjwP3YMETRVufAh8STqInXV39TpLR4LDyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMxOufRsdu8dSKxvOhKtwDX%2BT1acLneoEQsACtrp6tMEQkpFdqmrsLWSkSYWkY%2F7n5zfiDLsLKDQN7sHUWQp2gQLVlG4JX54mtXZp%2Bw1z0Zbn%2B%2F0EHMkyhpeabx7vNl73g3SXDgF0oEvzobrN7wuBYebDN06V%2FzJvApXo%2FwX3dStkNIyEWIg3vl33tgRtrP0n1EIa%2FIh7l3s%2B82l1EXoAaaOhXqcrfKS1jIZevTdZDaca%2Bn0tSLsJwv%2BfCzrIcwN4CqOtYYQo0gRPSRGzOgX%2FWbd%2F2GO77RCkcngL0aHolOLLxtfGXV28pJcujAmPI96UbLBe%2BJ%2B2X3ENwszwEBM3zLhNWXMvwR3Lymgbf4uvMeJECGrm1WVGoyYBltOv7Zag3nCrqQeTM22lLV9vtY%2FPDWSUcbEX0kfjTTnJmXhZEny2eM4u5r5eRklg7xCABEGajsIq4Wv2TvMZZJPunpoehqJlPGkU4JZz6gtIoyP%2Bi3uiVtOP%2Bm9VUGNcB5ccsk96bzZlpt48T9J1Vu8wAlA6EJWjyC42Xg4XS6pJLg943fzUs%2Fc5Q%2FOsYznD0RZ414FR4kQPOCn%2FABSqCKujU%2BJrp7eoDJYBnq%2FEPHc6GQL99SH2yGYVK2u%2B66fODf7fAXDwr%2B21D1BmbrrLXbwIw17HkwAY6pgF729nU76LUw8pN85WQ6DO4xd9HcR6WR9NYmxWwBd6974E7kE383dT6o%2FxMy1U4%2BtoI06b1bJG%2BvfPsaexbQbLtuVG1XtXz9RhYMEBI0AnSgLCj3By7MC4EpAr0jI%2FgCZ%2FXHuwHnX3UBxQ%2BEQaXV0MnW2w13DwF7wE7NOaMcL7p7HRB8VVnX3O4N72F9dxwPrxTsZYpGaeG8JSy1fzHl1ShL0P1n1XM&X-Amz-Signature=440b47750216d2c99b7044a4b894d66ee8719e5fa469d1e5edd09b5bf2b2348e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS6VFXTK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEDSYZerxro%2BfPLYivUiZpFLRWGmza6DOwjGHBDWwicAiAaCP90DUluzTjwP3YMETRVufAh8STqInXV39TpLR4LDyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMxOufRsdu8dSKxvOhKtwDX%2BT1acLneoEQsACtrp6tMEQkpFdqmrsLWSkSYWkY%2F7n5zfiDLsLKDQN7sHUWQp2gQLVlG4JX54mtXZp%2Bw1z0Zbn%2B%2F0EHMkyhpeabx7vNl73g3SXDgF0oEvzobrN7wuBYebDN06V%2FzJvApXo%2FwX3dStkNIyEWIg3vl33tgRtrP0n1EIa%2FIh7l3s%2B82l1EXoAaaOhXqcrfKS1jIZevTdZDaca%2Bn0tSLsJwv%2BfCzrIcwN4CqOtYYQo0gRPSRGzOgX%2FWbd%2F2GO77RCkcngL0aHolOLLxtfGXV28pJcujAmPI96UbLBe%2BJ%2B2X3ENwszwEBM3zLhNWXMvwR3Lymgbf4uvMeJECGrm1WVGoyYBltOv7Zag3nCrqQeTM22lLV9vtY%2FPDWSUcbEX0kfjTTnJmXhZEny2eM4u5r5eRklg7xCABEGajsIq4Wv2TvMZZJPunpoehqJlPGkU4JZz6gtIoyP%2Bi3uiVtOP%2Bm9VUGNcB5ccsk96bzZlpt48T9J1Vu8wAlA6EJWjyC42Xg4XS6pJLg943fzUs%2Fc5Q%2FOsYznD0RZ414FR4kQPOCn%2FABSqCKujU%2BJrp7eoDJYBnq%2FEPHc6GQL99SH2yGYVK2u%2B66fODf7fAXDwr%2B21D1BmbrrLXbwIw17HkwAY6pgF729nU76LUw8pN85WQ6DO4xd9HcR6WR9NYmxWwBd6974E7kE383dT6o%2FxMy1U4%2BtoI06b1bJG%2BvfPsaexbQbLtuVG1XtXz9RhYMEBI0AnSgLCj3By7MC4EpAr0jI%2FgCZ%2FXHuwHnX3UBxQ%2BEQaXV0MnW2w13DwF7wE7NOaMcL7p7HRB8VVnX3O4N72F9dxwPrxTsZYpGaeG8JSy1fzHl1ShL0P1n1XM&X-Amz-Signature=998fb86292c041c3940d9d4be6cc64f3e91566e77e60f48eacc5b1972f1d5b51&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS6VFXTK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEDSYZerxro%2BfPLYivUiZpFLRWGmza6DOwjGHBDWwicAiAaCP90DUluzTjwP3YMETRVufAh8STqInXV39TpLR4LDyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMxOufRsdu8dSKxvOhKtwDX%2BT1acLneoEQsACtrp6tMEQkpFdqmrsLWSkSYWkY%2F7n5zfiDLsLKDQN7sHUWQp2gQLVlG4JX54mtXZp%2Bw1z0Zbn%2B%2F0EHMkyhpeabx7vNl73g3SXDgF0oEvzobrN7wuBYebDN06V%2FzJvApXo%2FwX3dStkNIyEWIg3vl33tgRtrP0n1EIa%2FIh7l3s%2B82l1EXoAaaOhXqcrfKS1jIZevTdZDaca%2Bn0tSLsJwv%2BfCzrIcwN4CqOtYYQo0gRPSRGzOgX%2FWbd%2F2GO77RCkcngL0aHolOLLxtfGXV28pJcujAmPI96UbLBe%2BJ%2B2X3ENwszwEBM3zLhNWXMvwR3Lymgbf4uvMeJECGrm1WVGoyYBltOv7Zag3nCrqQeTM22lLV9vtY%2FPDWSUcbEX0kfjTTnJmXhZEny2eM4u5r5eRklg7xCABEGajsIq4Wv2TvMZZJPunpoehqJlPGkU4JZz6gtIoyP%2Bi3uiVtOP%2Bm9VUGNcB5ccsk96bzZlpt48T9J1Vu8wAlA6EJWjyC42Xg4XS6pJLg943fzUs%2Fc5Q%2FOsYznD0RZ414FR4kQPOCn%2FABSqCKujU%2BJrp7eoDJYBnq%2FEPHc6GQL99SH2yGYVK2u%2B66fODf7fAXDwr%2B21D1BmbrrLXbwIw17HkwAY6pgF729nU76LUw8pN85WQ6DO4xd9HcR6WR9NYmxWwBd6974E7kE383dT6o%2FxMy1U4%2BtoI06b1bJG%2BvfPsaexbQbLtuVG1XtXz9RhYMEBI0AnSgLCj3By7MC4EpAr0jI%2FgCZ%2FXHuwHnX3UBxQ%2BEQaXV0MnW2w13DwF7wE7NOaMcL7p7HRB8VVnX3O4N72F9dxwPrxTsZYpGaeG8JSy1fzHl1ShL0P1n1XM&X-Amz-Signature=66bb4dfde29dc5f85a2f6fc9483e2588ed8eb4808cea37bb6cdf1d6898b77771&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS6VFXTK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEDSYZerxro%2BfPLYivUiZpFLRWGmza6DOwjGHBDWwicAiAaCP90DUluzTjwP3YMETRVufAh8STqInXV39TpLR4LDyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMxOufRsdu8dSKxvOhKtwDX%2BT1acLneoEQsACtrp6tMEQkpFdqmrsLWSkSYWkY%2F7n5zfiDLsLKDQN7sHUWQp2gQLVlG4JX54mtXZp%2Bw1z0Zbn%2B%2F0EHMkyhpeabx7vNl73g3SXDgF0oEvzobrN7wuBYebDN06V%2FzJvApXo%2FwX3dStkNIyEWIg3vl33tgRtrP0n1EIa%2FIh7l3s%2B82l1EXoAaaOhXqcrfKS1jIZevTdZDaca%2Bn0tSLsJwv%2BfCzrIcwN4CqOtYYQo0gRPSRGzOgX%2FWbd%2F2GO77RCkcngL0aHolOLLxtfGXV28pJcujAmPI96UbLBe%2BJ%2B2X3ENwszwEBM3zLhNWXMvwR3Lymgbf4uvMeJECGrm1WVGoyYBltOv7Zag3nCrqQeTM22lLV9vtY%2FPDWSUcbEX0kfjTTnJmXhZEny2eM4u5r5eRklg7xCABEGajsIq4Wv2TvMZZJPunpoehqJlPGkU4JZz6gtIoyP%2Bi3uiVtOP%2Bm9VUGNcB5ccsk96bzZlpt48T9J1Vu8wAlA6EJWjyC42Xg4XS6pJLg943fzUs%2Fc5Q%2FOsYznD0RZ414FR4kQPOCn%2FABSqCKujU%2BJrp7eoDJYBnq%2FEPHc6GQL99SH2yGYVK2u%2B66fODf7fAXDwr%2B21D1BmbrrLXbwIw17HkwAY6pgF729nU76LUw8pN85WQ6DO4xd9HcR6WR9NYmxWwBd6974E7kE383dT6o%2FxMy1U4%2BtoI06b1bJG%2BvfPsaexbQbLtuVG1XtXz9RhYMEBI0AnSgLCj3By7MC4EpAr0jI%2FgCZ%2FXHuwHnX3UBxQ%2BEQaXV0MnW2w13DwF7wE7NOaMcL7p7HRB8VVnX3O4N72F9dxwPrxTsZYpGaeG8JSy1fzHl1ShL0P1n1XM&X-Amz-Signature=45c6499743f3c1c5475a5c113f5f33e4b80898b7ab6beb454df58aaf630a81ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS6VFXTK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEDSYZerxro%2BfPLYivUiZpFLRWGmza6DOwjGHBDWwicAiAaCP90DUluzTjwP3YMETRVufAh8STqInXV39TpLR4LDyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMxOufRsdu8dSKxvOhKtwDX%2BT1acLneoEQsACtrp6tMEQkpFdqmrsLWSkSYWkY%2F7n5zfiDLsLKDQN7sHUWQp2gQLVlG4JX54mtXZp%2Bw1z0Zbn%2B%2F0EHMkyhpeabx7vNl73g3SXDgF0oEvzobrN7wuBYebDN06V%2FzJvApXo%2FwX3dStkNIyEWIg3vl33tgRtrP0n1EIa%2FIh7l3s%2B82l1EXoAaaOhXqcrfKS1jIZevTdZDaca%2Bn0tSLsJwv%2BfCzrIcwN4CqOtYYQo0gRPSRGzOgX%2FWbd%2F2GO77RCkcngL0aHolOLLxtfGXV28pJcujAmPI96UbLBe%2BJ%2B2X3ENwszwEBM3zLhNWXMvwR3Lymgbf4uvMeJECGrm1WVGoyYBltOv7Zag3nCrqQeTM22lLV9vtY%2FPDWSUcbEX0kfjTTnJmXhZEny2eM4u5r5eRklg7xCABEGajsIq4Wv2TvMZZJPunpoehqJlPGkU4JZz6gtIoyP%2Bi3uiVtOP%2Bm9VUGNcB5ccsk96bzZlpt48T9J1Vu8wAlA6EJWjyC42Xg4XS6pJLg943fzUs%2Fc5Q%2FOsYznD0RZ414FR4kQPOCn%2FABSqCKujU%2BJrp7eoDJYBnq%2FEPHc6GQL99SH2yGYVK2u%2B66fODf7fAXDwr%2B21D1BmbrrLXbwIw17HkwAY6pgF729nU76LUw8pN85WQ6DO4xd9HcR6WR9NYmxWwBd6974E7kE383dT6o%2FxMy1U4%2BtoI06b1bJG%2BvfPsaexbQbLtuVG1XtXz9RhYMEBI0AnSgLCj3By7MC4EpAr0jI%2FgCZ%2FXHuwHnX3UBxQ%2BEQaXV0MnW2w13DwF7wE7NOaMcL7p7HRB8VVnX3O4N72F9dxwPrxTsZYpGaeG8JSy1fzHl1ShL0P1n1XM&X-Amz-Signature=545868ce838dca99e0749f5efec1121354d74b6aa7c81f17ee04758b5c14c025&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS6VFXTK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEDSYZerxro%2BfPLYivUiZpFLRWGmza6DOwjGHBDWwicAiAaCP90DUluzTjwP3YMETRVufAh8STqInXV39TpLR4LDyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMxOufRsdu8dSKxvOhKtwDX%2BT1acLneoEQsACtrp6tMEQkpFdqmrsLWSkSYWkY%2F7n5zfiDLsLKDQN7sHUWQp2gQLVlG4JX54mtXZp%2Bw1z0Zbn%2B%2F0EHMkyhpeabx7vNl73g3SXDgF0oEvzobrN7wuBYebDN06V%2FzJvApXo%2FwX3dStkNIyEWIg3vl33tgRtrP0n1EIa%2FIh7l3s%2B82l1EXoAaaOhXqcrfKS1jIZevTdZDaca%2Bn0tSLsJwv%2BfCzrIcwN4CqOtYYQo0gRPSRGzOgX%2FWbd%2F2GO77RCkcngL0aHolOLLxtfGXV28pJcujAmPI96UbLBe%2BJ%2B2X3ENwszwEBM3zLhNWXMvwR3Lymgbf4uvMeJECGrm1WVGoyYBltOv7Zag3nCrqQeTM22lLV9vtY%2FPDWSUcbEX0kfjTTnJmXhZEny2eM4u5r5eRklg7xCABEGajsIq4Wv2TvMZZJPunpoehqJlPGkU4JZz6gtIoyP%2Bi3uiVtOP%2Bm9VUGNcB5ccsk96bzZlpt48T9J1Vu8wAlA6EJWjyC42Xg4XS6pJLg943fzUs%2Fc5Q%2FOsYznD0RZ414FR4kQPOCn%2FABSqCKujU%2BJrp7eoDJYBnq%2FEPHc6GQL99SH2yGYVK2u%2B66fODf7fAXDwr%2B21D1BmbrrLXbwIw17HkwAY6pgF729nU76LUw8pN85WQ6DO4xd9HcR6WR9NYmxWwBd6974E7kE383dT6o%2FxMy1U4%2BtoI06b1bJG%2BvfPsaexbQbLtuVG1XtXz9RhYMEBI0AnSgLCj3By7MC4EpAr0jI%2FgCZ%2FXHuwHnX3UBxQ%2BEQaXV0MnW2w13DwF7wE7NOaMcL7p7HRB8VVnX3O4N72F9dxwPrxTsZYpGaeG8JSy1fzHl1ShL0P1n1XM&X-Amz-Signature=1f81142064ead52904dd4d4bf53cf5908820c60365c1c925d2c308a9f4e5edbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS6VFXTK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEDSYZerxro%2BfPLYivUiZpFLRWGmza6DOwjGHBDWwicAiAaCP90DUluzTjwP3YMETRVufAh8STqInXV39TpLR4LDyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMxOufRsdu8dSKxvOhKtwDX%2BT1acLneoEQsACtrp6tMEQkpFdqmrsLWSkSYWkY%2F7n5zfiDLsLKDQN7sHUWQp2gQLVlG4JX54mtXZp%2Bw1z0Zbn%2B%2F0EHMkyhpeabx7vNl73g3SXDgF0oEvzobrN7wuBYebDN06V%2FzJvApXo%2FwX3dStkNIyEWIg3vl33tgRtrP0n1EIa%2FIh7l3s%2B82l1EXoAaaOhXqcrfKS1jIZevTdZDaca%2Bn0tSLsJwv%2BfCzrIcwN4CqOtYYQo0gRPSRGzOgX%2FWbd%2F2GO77RCkcngL0aHolOLLxtfGXV28pJcujAmPI96UbLBe%2BJ%2B2X3ENwszwEBM3zLhNWXMvwR3Lymgbf4uvMeJECGrm1WVGoyYBltOv7Zag3nCrqQeTM22lLV9vtY%2FPDWSUcbEX0kfjTTnJmXhZEny2eM4u5r5eRklg7xCABEGajsIq4Wv2TvMZZJPunpoehqJlPGkU4JZz6gtIoyP%2Bi3uiVtOP%2Bm9VUGNcB5ccsk96bzZlpt48T9J1Vu8wAlA6EJWjyC42Xg4XS6pJLg943fzUs%2Fc5Q%2FOsYznD0RZ414FR4kQPOCn%2FABSqCKujU%2BJrp7eoDJYBnq%2FEPHc6GQL99SH2yGYVK2u%2B66fODf7fAXDwr%2B21D1BmbrrLXbwIw17HkwAY6pgF729nU76LUw8pN85WQ6DO4xd9HcR6WR9NYmxWwBd6974E7kE383dT6o%2FxMy1U4%2BtoI06b1bJG%2BvfPsaexbQbLtuVG1XtXz9RhYMEBI0AnSgLCj3By7MC4EpAr0jI%2FgCZ%2FXHuwHnX3UBxQ%2BEQaXV0MnW2w13DwF7wE7NOaMcL7p7HRB8VVnX3O4N72F9dxwPrxTsZYpGaeG8JSy1fzHl1ShL0P1n1XM&X-Amz-Signature=0e43fc3a8bc0b9a92cbc8d3ac431ccc616463966657ca1e2c3309d4b150c79cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS6VFXTK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEDSYZerxro%2BfPLYivUiZpFLRWGmza6DOwjGHBDWwicAiAaCP90DUluzTjwP3YMETRVufAh8STqInXV39TpLR4LDyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMxOufRsdu8dSKxvOhKtwDX%2BT1acLneoEQsACtrp6tMEQkpFdqmrsLWSkSYWkY%2F7n5zfiDLsLKDQN7sHUWQp2gQLVlG4JX54mtXZp%2Bw1z0Zbn%2B%2F0EHMkyhpeabx7vNl73g3SXDgF0oEvzobrN7wuBYebDN06V%2FzJvApXo%2FwX3dStkNIyEWIg3vl33tgRtrP0n1EIa%2FIh7l3s%2B82l1EXoAaaOhXqcrfKS1jIZevTdZDaca%2Bn0tSLsJwv%2BfCzrIcwN4CqOtYYQo0gRPSRGzOgX%2FWbd%2F2GO77RCkcngL0aHolOLLxtfGXV28pJcujAmPI96UbLBe%2BJ%2B2X3ENwszwEBM3zLhNWXMvwR3Lymgbf4uvMeJECGrm1WVGoyYBltOv7Zag3nCrqQeTM22lLV9vtY%2FPDWSUcbEX0kfjTTnJmXhZEny2eM4u5r5eRklg7xCABEGajsIq4Wv2TvMZZJPunpoehqJlPGkU4JZz6gtIoyP%2Bi3uiVtOP%2Bm9VUGNcB5ccsk96bzZlpt48T9J1Vu8wAlA6EJWjyC42Xg4XS6pJLg943fzUs%2Fc5Q%2FOsYznD0RZ414FR4kQPOCn%2FABSqCKujU%2BJrp7eoDJYBnq%2FEPHc6GQL99SH2yGYVK2u%2B66fODf7fAXDwr%2B21D1BmbrrLXbwIw17HkwAY6pgF729nU76LUw8pN85WQ6DO4xd9HcR6WR9NYmxWwBd6974E7kE383dT6o%2FxMy1U4%2BtoI06b1bJG%2BvfPsaexbQbLtuVG1XtXz9RhYMEBI0AnSgLCj3By7MC4EpAr0jI%2FgCZ%2FXHuwHnX3UBxQ%2BEQaXV0MnW2w13DwF7wE7NOaMcL7p7HRB8VVnX3O4N72F9dxwPrxTsZYpGaeG8JSy1fzHl1ShL0P1n1XM&X-Amz-Signature=a37bbff1ede0df9e8c9088ea58fc789915d05cd3cb740d746cfba8b5c3cf5d9a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
