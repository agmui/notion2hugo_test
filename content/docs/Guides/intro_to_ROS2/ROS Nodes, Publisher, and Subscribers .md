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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MLPLJK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcF7dq0UQiwtQb328ZnWW5Vg5vKnKEuqoBIdcC2e2DFAiAzlTGrOxVqz4LN0zorTx%2Bg7KVP8GTYiExFvosBx1nQYiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMML2ms9M9Z98RoI3jKtwDjjuYuUHIizFHMCCZhjiM2hbeh7mjSSAo1uIJdluJdXBNoFPOKLwL2gP3ptcYZgKgfaDhLgvCFsXAFCh%2FIwY%2FUaWl%2BXXD4DgotGAPbgidbjjFLog0dA2TGJRIQc4A2yautsFo3rRcCX3L6m%2B48a9oums0iuMBxD141wj58XMreYbiHDL3ktKT5FA2ox1jC2XJKw4wKio%2FnpLL9Uh6HQPY%2BGJl6upLf0WgRdyiWxywUAzSuMjP0EJOuT1KfFoyk9wgla73T4Ox9dkE5STAjJmu25rK7ZAB63BTh%2BN4Ik848JzM8taDDovCnszEmko0KZSy6Ac1ubmBYmDF2tou9MFM9%2BCUYubjWOwzNfI3PqXiBXW2w70ATw2OU2Pok80ugJqgX8uSjRo%2BzqkF41GSqGdZ3syOxzuPEszpp0KwO%2F18gpPRoEne6pUBFu5%2BU20A3leJoyMN4A9yCu507Gd5xlbMmK%2FYy7aOmG91GoNOJ6bUUSWiasvrIwlT4z5DRlKLvktP8pXz%2BBI9M2cVM9zEUOsB%2Fc7yrUKlihReCHznm0lTuvc%2BZJ3loQYC7CVc12TMhBCLHRX3XCOZh19NLxTNOidP%2FZ6hFkY5MpFZzave%2Fdu63H%2B0GjdqMUTIb8OZnrAw8vGlxAY6pgFIXrXiQiEIFbjHYLsWQjXhjSgMPpg4Gbtqu7OyGcN2%2FRfUWR2bcxH9NVS4H%2FDQcJlCsiGcZijzyHI9Uh3b%2Fun5zWY%2FF6fLInUyWD66cpeZwV3zR%2B10Rt6N4dEdjsRKhbDxUAD%2FKcP6RgRMO8WnBXoI93IpVS98%2BP7heLSgR%2FUi2ZA6qn%2FxQtctNp2jAtXTbMRipDKZ4Kc6%2BAIzGvlsQdpvFcR%2BmDGP&X-Amz-Signature=416d79f4529aef0d44fb20957cd6ee40ba5be6193072f6ad7f7f54efdbe0846f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MLPLJK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcF7dq0UQiwtQb328ZnWW5Vg5vKnKEuqoBIdcC2e2DFAiAzlTGrOxVqz4LN0zorTx%2Bg7KVP8GTYiExFvosBx1nQYiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMML2ms9M9Z98RoI3jKtwDjjuYuUHIizFHMCCZhjiM2hbeh7mjSSAo1uIJdluJdXBNoFPOKLwL2gP3ptcYZgKgfaDhLgvCFsXAFCh%2FIwY%2FUaWl%2BXXD4DgotGAPbgidbjjFLog0dA2TGJRIQc4A2yautsFo3rRcCX3L6m%2B48a9oums0iuMBxD141wj58XMreYbiHDL3ktKT5FA2ox1jC2XJKw4wKio%2FnpLL9Uh6HQPY%2BGJl6upLf0WgRdyiWxywUAzSuMjP0EJOuT1KfFoyk9wgla73T4Ox9dkE5STAjJmu25rK7ZAB63BTh%2BN4Ik848JzM8taDDovCnszEmko0KZSy6Ac1ubmBYmDF2tou9MFM9%2BCUYubjWOwzNfI3PqXiBXW2w70ATw2OU2Pok80ugJqgX8uSjRo%2BzqkF41GSqGdZ3syOxzuPEszpp0KwO%2F18gpPRoEne6pUBFu5%2BU20A3leJoyMN4A9yCu507Gd5xlbMmK%2FYy7aOmG91GoNOJ6bUUSWiasvrIwlT4z5DRlKLvktP8pXz%2BBI9M2cVM9zEUOsB%2Fc7yrUKlihReCHznm0lTuvc%2BZJ3loQYC7CVc12TMhBCLHRX3XCOZh19NLxTNOidP%2FZ6hFkY5MpFZzave%2Fdu63H%2B0GjdqMUTIb8OZnrAw8vGlxAY6pgFIXrXiQiEIFbjHYLsWQjXhjSgMPpg4Gbtqu7OyGcN2%2FRfUWR2bcxH9NVS4H%2FDQcJlCsiGcZijzyHI9Uh3b%2Fun5zWY%2FF6fLInUyWD66cpeZwV3zR%2B10Rt6N4dEdjsRKhbDxUAD%2FKcP6RgRMO8WnBXoI93IpVS98%2BP7heLSgR%2FUi2ZA6qn%2FxQtctNp2jAtXTbMRipDKZ4Kc6%2BAIzGvlsQdpvFcR%2BmDGP&X-Amz-Signature=ea4a8e8a45151b0ba438b914a873df620d8b0aaffe2483af65397841ca20905b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MLPLJK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcF7dq0UQiwtQb328ZnWW5Vg5vKnKEuqoBIdcC2e2DFAiAzlTGrOxVqz4LN0zorTx%2Bg7KVP8GTYiExFvosBx1nQYiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMML2ms9M9Z98RoI3jKtwDjjuYuUHIizFHMCCZhjiM2hbeh7mjSSAo1uIJdluJdXBNoFPOKLwL2gP3ptcYZgKgfaDhLgvCFsXAFCh%2FIwY%2FUaWl%2BXXD4DgotGAPbgidbjjFLog0dA2TGJRIQc4A2yautsFo3rRcCX3L6m%2B48a9oums0iuMBxD141wj58XMreYbiHDL3ktKT5FA2ox1jC2XJKw4wKio%2FnpLL9Uh6HQPY%2BGJl6upLf0WgRdyiWxywUAzSuMjP0EJOuT1KfFoyk9wgla73T4Ox9dkE5STAjJmu25rK7ZAB63BTh%2BN4Ik848JzM8taDDovCnszEmko0KZSy6Ac1ubmBYmDF2tou9MFM9%2BCUYubjWOwzNfI3PqXiBXW2w70ATw2OU2Pok80ugJqgX8uSjRo%2BzqkF41GSqGdZ3syOxzuPEszpp0KwO%2F18gpPRoEne6pUBFu5%2BU20A3leJoyMN4A9yCu507Gd5xlbMmK%2FYy7aOmG91GoNOJ6bUUSWiasvrIwlT4z5DRlKLvktP8pXz%2BBI9M2cVM9zEUOsB%2Fc7yrUKlihReCHznm0lTuvc%2BZJ3loQYC7CVc12TMhBCLHRX3XCOZh19NLxTNOidP%2FZ6hFkY5MpFZzave%2Fdu63H%2B0GjdqMUTIb8OZnrAw8vGlxAY6pgFIXrXiQiEIFbjHYLsWQjXhjSgMPpg4Gbtqu7OyGcN2%2FRfUWR2bcxH9NVS4H%2FDQcJlCsiGcZijzyHI9Uh3b%2Fun5zWY%2FF6fLInUyWD66cpeZwV3zR%2B10Rt6N4dEdjsRKhbDxUAD%2FKcP6RgRMO8WnBXoI93IpVS98%2BP7heLSgR%2FUi2ZA6qn%2FxQtctNp2jAtXTbMRipDKZ4Kc6%2BAIzGvlsQdpvFcR%2BmDGP&X-Amz-Signature=86c32b5721befffda1673fa77ea9d9a6f1fa2f92ca38c15bb9f7de7110654c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MLPLJK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcF7dq0UQiwtQb328ZnWW5Vg5vKnKEuqoBIdcC2e2DFAiAzlTGrOxVqz4LN0zorTx%2Bg7KVP8GTYiExFvosBx1nQYiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMML2ms9M9Z98RoI3jKtwDjjuYuUHIizFHMCCZhjiM2hbeh7mjSSAo1uIJdluJdXBNoFPOKLwL2gP3ptcYZgKgfaDhLgvCFsXAFCh%2FIwY%2FUaWl%2BXXD4DgotGAPbgidbjjFLog0dA2TGJRIQc4A2yautsFo3rRcCX3L6m%2B48a9oums0iuMBxD141wj58XMreYbiHDL3ktKT5FA2ox1jC2XJKw4wKio%2FnpLL9Uh6HQPY%2BGJl6upLf0WgRdyiWxywUAzSuMjP0EJOuT1KfFoyk9wgla73T4Ox9dkE5STAjJmu25rK7ZAB63BTh%2BN4Ik848JzM8taDDovCnszEmko0KZSy6Ac1ubmBYmDF2tou9MFM9%2BCUYubjWOwzNfI3PqXiBXW2w70ATw2OU2Pok80ugJqgX8uSjRo%2BzqkF41GSqGdZ3syOxzuPEszpp0KwO%2F18gpPRoEne6pUBFu5%2BU20A3leJoyMN4A9yCu507Gd5xlbMmK%2FYy7aOmG91GoNOJ6bUUSWiasvrIwlT4z5DRlKLvktP8pXz%2BBI9M2cVM9zEUOsB%2Fc7yrUKlihReCHznm0lTuvc%2BZJ3loQYC7CVc12TMhBCLHRX3XCOZh19NLxTNOidP%2FZ6hFkY5MpFZzave%2Fdu63H%2B0GjdqMUTIb8OZnrAw8vGlxAY6pgFIXrXiQiEIFbjHYLsWQjXhjSgMPpg4Gbtqu7OyGcN2%2FRfUWR2bcxH9NVS4H%2FDQcJlCsiGcZijzyHI9Uh3b%2Fun5zWY%2FF6fLInUyWD66cpeZwV3zR%2B10Rt6N4dEdjsRKhbDxUAD%2FKcP6RgRMO8WnBXoI93IpVS98%2BP7heLSgR%2FUi2ZA6qn%2FxQtctNp2jAtXTbMRipDKZ4Kc6%2BAIzGvlsQdpvFcR%2BmDGP&X-Amz-Signature=5cc0351edb9f137786ec315baa6a3ca8455f41212ef561c5226b308493f97a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MLPLJK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcF7dq0UQiwtQb328ZnWW5Vg5vKnKEuqoBIdcC2e2DFAiAzlTGrOxVqz4LN0zorTx%2Bg7KVP8GTYiExFvosBx1nQYiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMML2ms9M9Z98RoI3jKtwDjjuYuUHIizFHMCCZhjiM2hbeh7mjSSAo1uIJdluJdXBNoFPOKLwL2gP3ptcYZgKgfaDhLgvCFsXAFCh%2FIwY%2FUaWl%2BXXD4DgotGAPbgidbjjFLog0dA2TGJRIQc4A2yautsFo3rRcCX3L6m%2B48a9oums0iuMBxD141wj58XMreYbiHDL3ktKT5FA2ox1jC2XJKw4wKio%2FnpLL9Uh6HQPY%2BGJl6upLf0WgRdyiWxywUAzSuMjP0EJOuT1KfFoyk9wgla73T4Ox9dkE5STAjJmu25rK7ZAB63BTh%2BN4Ik848JzM8taDDovCnszEmko0KZSy6Ac1ubmBYmDF2tou9MFM9%2BCUYubjWOwzNfI3PqXiBXW2w70ATw2OU2Pok80ugJqgX8uSjRo%2BzqkF41GSqGdZ3syOxzuPEszpp0KwO%2F18gpPRoEne6pUBFu5%2BU20A3leJoyMN4A9yCu507Gd5xlbMmK%2FYy7aOmG91GoNOJ6bUUSWiasvrIwlT4z5DRlKLvktP8pXz%2BBI9M2cVM9zEUOsB%2Fc7yrUKlihReCHznm0lTuvc%2BZJ3loQYC7CVc12TMhBCLHRX3XCOZh19NLxTNOidP%2FZ6hFkY5MpFZzave%2Fdu63H%2B0GjdqMUTIb8OZnrAw8vGlxAY6pgFIXrXiQiEIFbjHYLsWQjXhjSgMPpg4Gbtqu7OyGcN2%2FRfUWR2bcxH9NVS4H%2FDQcJlCsiGcZijzyHI9Uh3b%2Fun5zWY%2FF6fLInUyWD66cpeZwV3zR%2B10Rt6N4dEdjsRKhbDxUAD%2FKcP6RgRMO8WnBXoI93IpVS98%2BP7heLSgR%2FUi2ZA6qn%2FxQtctNp2jAtXTbMRipDKZ4Kc6%2BAIzGvlsQdpvFcR%2BmDGP&X-Amz-Signature=5b0f89a5117190bc0445ce08040f8309a0edb79617f5712c6a1981ff74e76f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MLPLJK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcF7dq0UQiwtQb328ZnWW5Vg5vKnKEuqoBIdcC2e2DFAiAzlTGrOxVqz4LN0zorTx%2Bg7KVP8GTYiExFvosBx1nQYiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMML2ms9M9Z98RoI3jKtwDjjuYuUHIizFHMCCZhjiM2hbeh7mjSSAo1uIJdluJdXBNoFPOKLwL2gP3ptcYZgKgfaDhLgvCFsXAFCh%2FIwY%2FUaWl%2BXXD4DgotGAPbgidbjjFLog0dA2TGJRIQc4A2yautsFo3rRcCX3L6m%2B48a9oums0iuMBxD141wj58XMreYbiHDL3ktKT5FA2ox1jC2XJKw4wKio%2FnpLL9Uh6HQPY%2BGJl6upLf0WgRdyiWxywUAzSuMjP0EJOuT1KfFoyk9wgla73T4Ox9dkE5STAjJmu25rK7ZAB63BTh%2BN4Ik848JzM8taDDovCnszEmko0KZSy6Ac1ubmBYmDF2tou9MFM9%2BCUYubjWOwzNfI3PqXiBXW2w70ATw2OU2Pok80ugJqgX8uSjRo%2BzqkF41GSqGdZ3syOxzuPEszpp0KwO%2F18gpPRoEne6pUBFu5%2BU20A3leJoyMN4A9yCu507Gd5xlbMmK%2FYy7aOmG91GoNOJ6bUUSWiasvrIwlT4z5DRlKLvktP8pXz%2BBI9M2cVM9zEUOsB%2Fc7yrUKlihReCHznm0lTuvc%2BZJ3loQYC7CVc12TMhBCLHRX3XCOZh19NLxTNOidP%2FZ6hFkY5MpFZzave%2Fdu63H%2B0GjdqMUTIb8OZnrAw8vGlxAY6pgFIXrXiQiEIFbjHYLsWQjXhjSgMPpg4Gbtqu7OyGcN2%2FRfUWR2bcxH9NVS4H%2FDQcJlCsiGcZijzyHI9Uh3b%2Fun5zWY%2FF6fLInUyWD66cpeZwV3zR%2B10Rt6N4dEdjsRKhbDxUAD%2FKcP6RgRMO8WnBXoI93IpVS98%2BP7heLSgR%2FUi2ZA6qn%2FxQtctNp2jAtXTbMRipDKZ4Kc6%2BAIzGvlsQdpvFcR%2BmDGP&X-Amz-Signature=8c4e6d1b33329b9083e9b700a2fd11d78be6948b73324447a7bcd5591ab89c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MLPLJK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcF7dq0UQiwtQb328ZnWW5Vg5vKnKEuqoBIdcC2e2DFAiAzlTGrOxVqz4LN0zorTx%2Bg7KVP8GTYiExFvosBx1nQYiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMML2ms9M9Z98RoI3jKtwDjjuYuUHIizFHMCCZhjiM2hbeh7mjSSAo1uIJdluJdXBNoFPOKLwL2gP3ptcYZgKgfaDhLgvCFsXAFCh%2FIwY%2FUaWl%2BXXD4DgotGAPbgidbjjFLog0dA2TGJRIQc4A2yautsFo3rRcCX3L6m%2B48a9oums0iuMBxD141wj58XMreYbiHDL3ktKT5FA2ox1jC2XJKw4wKio%2FnpLL9Uh6HQPY%2BGJl6upLf0WgRdyiWxywUAzSuMjP0EJOuT1KfFoyk9wgla73T4Ox9dkE5STAjJmu25rK7ZAB63BTh%2BN4Ik848JzM8taDDovCnszEmko0KZSy6Ac1ubmBYmDF2tou9MFM9%2BCUYubjWOwzNfI3PqXiBXW2w70ATw2OU2Pok80ugJqgX8uSjRo%2BzqkF41GSqGdZ3syOxzuPEszpp0KwO%2F18gpPRoEne6pUBFu5%2BU20A3leJoyMN4A9yCu507Gd5xlbMmK%2FYy7aOmG91GoNOJ6bUUSWiasvrIwlT4z5DRlKLvktP8pXz%2BBI9M2cVM9zEUOsB%2Fc7yrUKlihReCHznm0lTuvc%2BZJ3loQYC7CVc12TMhBCLHRX3XCOZh19NLxTNOidP%2FZ6hFkY5MpFZzave%2Fdu63H%2B0GjdqMUTIb8OZnrAw8vGlxAY6pgFIXrXiQiEIFbjHYLsWQjXhjSgMPpg4Gbtqu7OyGcN2%2FRfUWR2bcxH9NVS4H%2FDQcJlCsiGcZijzyHI9Uh3b%2Fun5zWY%2FF6fLInUyWD66cpeZwV3zR%2B10Rt6N4dEdjsRKhbDxUAD%2FKcP6RgRMO8WnBXoI93IpVS98%2BP7heLSgR%2FUi2ZA6qn%2FxQtctNp2jAtXTbMRipDKZ4Kc6%2BAIzGvlsQdpvFcR%2BmDGP&X-Amz-Signature=a9a99427717ce2a0b076ab7138d8dc2d9ec58247c724b513756d9cba16ae59fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MLPLJK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcF7dq0UQiwtQb328ZnWW5Vg5vKnKEuqoBIdcC2e2DFAiAzlTGrOxVqz4LN0zorTx%2Bg7KVP8GTYiExFvosBx1nQYiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMML2ms9M9Z98RoI3jKtwDjjuYuUHIizFHMCCZhjiM2hbeh7mjSSAo1uIJdluJdXBNoFPOKLwL2gP3ptcYZgKgfaDhLgvCFsXAFCh%2FIwY%2FUaWl%2BXXD4DgotGAPbgidbjjFLog0dA2TGJRIQc4A2yautsFo3rRcCX3L6m%2B48a9oums0iuMBxD141wj58XMreYbiHDL3ktKT5FA2ox1jC2XJKw4wKio%2FnpLL9Uh6HQPY%2BGJl6upLf0WgRdyiWxywUAzSuMjP0EJOuT1KfFoyk9wgla73T4Ox9dkE5STAjJmu25rK7ZAB63BTh%2BN4Ik848JzM8taDDovCnszEmko0KZSy6Ac1ubmBYmDF2tou9MFM9%2BCUYubjWOwzNfI3PqXiBXW2w70ATw2OU2Pok80ugJqgX8uSjRo%2BzqkF41GSqGdZ3syOxzuPEszpp0KwO%2F18gpPRoEne6pUBFu5%2BU20A3leJoyMN4A9yCu507Gd5xlbMmK%2FYy7aOmG91GoNOJ6bUUSWiasvrIwlT4z5DRlKLvktP8pXz%2BBI9M2cVM9zEUOsB%2Fc7yrUKlihReCHznm0lTuvc%2BZJ3loQYC7CVc12TMhBCLHRX3XCOZh19NLxTNOidP%2FZ6hFkY5MpFZzave%2Fdu63H%2B0GjdqMUTIb8OZnrAw8vGlxAY6pgFIXrXiQiEIFbjHYLsWQjXhjSgMPpg4Gbtqu7OyGcN2%2FRfUWR2bcxH9NVS4H%2FDQcJlCsiGcZijzyHI9Uh3b%2Fun5zWY%2FF6fLInUyWD66cpeZwV3zR%2B10Rt6N4dEdjsRKhbDxUAD%2FKcP6RgRMO8WnBXoI93IpVS98%2BP7heLSgR%2FUi2ZA6qn%2FxQtctNp2jAtXTbMRipDKZ4Kc6%2BAIzGvlsQdpvFcR%2BmDGP&X-Amz-Signature=8b37c875f40180e95ac854487e5c26743747a4a5f65c7a66dacd0a5ef013325e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
