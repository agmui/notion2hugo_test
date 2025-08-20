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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3B6RLOA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDj5KFxjFS89KxvAiY7TSsWvlhAU4tpEwuyJqj0PvO%2FAiA3F8Am%2FWgQBCr4YLL5kUtd4RZVML9W7kmLBVleTfmnGyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTOK%2FO0NWlxMyuAttKtwD3ftubd%2BT%2Bp3peAKVOGkyEU%2BLVdDZv4YGHl9x5rbDjcuaOj%2BFTxmO56hTW6APiZvl3SZjzaHKxtweAT82xRFnLdzu289LtSGYQsmc1IG3vEhi4PrcAjkGJr4fZCJLGYfJ4cFfP3hI7m1Ls7hXAjbjXWsLnU0eaIlq5tcGjTCnNz6rX9qIhgM3NJv%2BK0WHWy6Xa15kwyHuCAwNI2fq86uVAFrL2ZtIunVjT36%2Fph4dWW0qiPMLlPMgQO3N3xWFbYN51K87y8HO1qNCrV6jv5ahIm1HqZbixWOwjck7QSyWDUeQNdfV1gp1KLci7%2FwrSVQ23%2BUUWLLQwN9VtzjIomgk1Vyl4vA0aWGJEfJThIhw5XmVvw4cSJ2ENhT2vjboATqP9lTLtsaiINpmIBM%2B3jFwRGX43pzpwFJfZHmOZcrDHgMA95CKXrHMsWyUiPv1UQZloiSJ%2B8lbHX%2F5InIrUk4idGxOdmcQu65uk%2BdJFvfotrBlNJrBPBHDzzejVOr%2FIfkufNHe6Txhc0GOybmzIPJkMV%2FLUMTO7oRfj%2BDc2jImMLvsT1TkUk0YmxYoMJYkmcR3kcNuZrTNc11Wo1cpcVk0OLJmAzKNk4xFbAvbo9dKgJss1VedaVp5%2FEKP4jww0veVxQY6pgF4%2FVCV%2BL3FXKlXQNXRSQhE4A2vzsx0XAdsJ2SU5UnGPZnNqpTOZo6ElCsQNkEWE6yHSzSmH0kTzXmVnvbBCUghIUs70agtbZYm%2BoOGkKsdXjAkhWb471d9p%2FrxqI6afum8YDxIeHvfQ%2B%2FG7l1yzzy15VYHWCsuHcIJm9K8yYD5SdL3L5YOkN%2BnYZ%2BL9goePZUjv6SaTrAFFXkfLlez%2BgHtxwCyxeez&X-Amz-Signature=c57fe6fbe27002053e4101798a07325ffa0e3677791c19c2e550218cc0082706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3B6RLOA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDj5KFxjFS89KxvAiY7TSsWvlhAU4tpEwuyJqj0PvO%2FAiA3F8Am%2FWgQBCr4YLL5kUtd4RZVML9W7kmLBVleTfmnGyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTOK%2FO0NWlxMyuAttKtwD3ftubd%2BT%2Bp3peAKVOGkyEU%2BLVdDZv4YGHl9x5rbDjcuaOj%2BFTxmO56hTW6APiZvl3SZjzaHKxtweAT82xRFnLdzu289LtSGYQsmc1IG3vEhi4PrcAjkGJr4fZCJLGYfJ4cFfP3hI7m1Ls7hXAjbjXWsLnU0eaIlq5tcGjTCnNz6rX9qIhgM3NJv%2BK0WHWy6Xa15kwyHuCAwNI2fq86uVAFrL2ZtIunVjT36%2Fph4dWW0qiPMLlPMgQO3N3xWFbYN51K87y8HO1qNCrV6jv5ahIm1HqZbixWOwjck7QSyWDUeQNdfV1gp1KLci7%2FwrSVQ23%2BUUWLLQwN9VtzjIomgk1Vyl4vA0aWGJEfJThIhw5XmVvw4cSJ2ENhT2vjboATqP9lTLtsaiINpmIBM%2B3jFwRGX43pzpwFJfZHmOZcrDHgMA95CKXrHMsWyUiPv1UQZloiSJ%2B8lbHX%2F5InIrUk4idGxOdmcQu65uk%2BdJFvfotrBlNJrBPBHDzzejVOr%2FIfkufNHe6Txhc0GOybmzIPJkMV%2FLUMTO7oRfj%2BDc2jImMLvsT1TkUk0YmxYoMJYkmcR3kcNuZrTNc11Wo1cpcVk0OLJmAzKNk4xFbAvbo9dKgJss1VedaVp5%2FEKP4jww0veVxQY6pgF4%2FVCV%2BL3FXKlXQNXRSQhE4A2vzsx0XAdsJ2SU5UnGPZnNqpTOZo6ElCsQNkEWE6yHSzSmH0kTzXmVnvbBCUghIUs70agtbZYm%2BoOGkKsdXjAkhWb471d9p%2FrxqI6afum8YDxIeHvfQ%2B%2FG7l1yzzy15VYHWCsuHcIJm9K8yYD5SdL3L5YOkN%2BnYZ%2BL9goePZUjv6SaTrAFFXkfLlez%2BgHtxwCyxeez&X-Amz-Signature=575816b26da5f61f05296d4b0a87fc7848d90927802d99ee2b1670ffbd1ce1a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3B6RLOA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDj5KFxjFS89KxvAiY7TSsWvlhAU4tpEwuyJqj0PvO%2FAiA3F8Am%2FWgQBCr4YLL5kUtd4RZVML9W7kmLBVleTfmnGyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTOK%2FO0NWlxMyuAttKtwD3ftubd%2BT%2Bp3peAKVOGkyEU%2BLVdDZv4YGHl9x5rbDjcuaOj%2BFTxmO56hTW6APiZvl3SZjzaHKxtweAT82xRFnLdzu289LtSGYQsmc1IG3vEhi4PrcAjkGJr4fZCJLGYfJ4cFfP3hI7m1Ls7hXAjbjXWsLnU0eaIlq5tcGjTCnNz6rX9qIhgM3NJv%2BK0WHWy6Xa15kwyHuCAwNI2fq86uVAFrL2ZtIunVjT36%2Fph4dWW0qiPMLlPMgQO3N3xWFbYN51K87y8HO1qNCrV6jv5ahIm1HqZbixWOwjck7QSyWDUeQNdfV1gp1KLci7%2FwrSVQ23%2BUUWLLQwN9VtzjIomgk1Vyl4vA0aWGJEfJThIhw5XmVvw4cSJ2ENhT2vjboATqP9lTLtsaiINpmIBM%2B3jFwRGX43pzpwFJfZHmOZcrDHgMA95CKXrHMsWyUiPv1UQZloiSJ%2B8lbHX%2F5InIrUk4idGxOdmcQu65uk%2BdJFvfotrBlNJrBPBHDzzejVOr%2FIfkufNHe6Txhc0GOybmzIPJkMV%2FLUMTO7oRfj%2BDc2jImMLvsT1TkUk0YmxYoMJYkmcR3kcNuZrTNc11Wo1cpcVk0OLJmAzKNk4xFbAvbo9dKgJss1VedaVp5%2FEKP4jww0veVxQY6pgF4%2FVCV%2BL3FXKlXQNXRSQhE4A2vzsx0XAdsJ2SU5UnGPZnNqpTOZo6ElCsQNkEWE6yHSzSmH0kTzXmVnvbBCUghIUs70agtbZYm%2BoOGkKsdXjAkhWb471d9p%2FrxqI6afum8YDxIeHvfQ%2B%2FG7l1yzzy15VYHWCsuHcIJm9K8yYD5SdL3L5YOkN%2BnYZ%2BL9goePZUjv6SaTrAFFXkfLlez%2BgHtxwCyxeez&X-Amz-Signature=cd68d21d1d588388b303dab1b79e2f0ad2e6fd3ac3624ed0de92663197915a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3B6RLOA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDj5KFxjFS89KxvAiY7TSsWvlhAU4tpEwuyJqj0PvO%2FAiA3F8Am%2FWgQBCr4YLL5kUtd4RZVML9W7kmLBVleTfmnGyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTOK%2FO0NWlxMyuAttKtwD3ftubd%2BT%2Bp3peAKVOGkyEU%2BLVdDZv4YGHl9x5rbDjcuaOj%2BFTxmO56hTW6APiZvl3SZjzaHKxtweAT82xRFnLdzu289LtSGYQsmc1IG3vEhi4PrcAjkGJr4fZCJLGYfJ4cFfP3hI7m1Ls7hXAjbjXWsLnU0eaIlq5tcGjTCnNz6rX9qIhgM3NJv%2BK0WHWy6Xa15kwyHuCAwNI2fq86uVAFrL2ZtIunVjT36%2Fph4dWW0qiPMLlPMgQO3N3xWFbYN51K87y8HO1qNCrV6jv5ahIm1HqZbixWOwjck7QSyWDUeQNdfV1gp1KLci7%2FwrSVQ23%2BUUWLLQwN9VtzjIomgk1Vyl4vA0aWGJEfJThIhw5XmVvw4cSJ2ENhT2vjboATqP9lTLtsaiINpmIBM%2B3jFwRGX43pzpwFJfZHmOZcrDHgMA95CKXrHMsWyUiPv1UQZloiSJ%2B8lbHX%2F5InIrUk4idGxOdmcQu65uk%2BdJFvfotrBlNJrBPBHDzzejVOr%2FIfkufNHe6Txhc0GOybmzIPJkMV%2FLUMTO7oRfj%2BDc2jImMLvsT1TkUk0YmxYoMJYkmcR3kcNuZrTNc11Wo1cpcVk0OLJmAzKNk4xFbAvbo9dKgJss1VedaVp5%2FEKP4jww0veVxQY6pgF4%2FVCV%2BL3FXKlXQNXRSQhE4A2vzsx0XAdsJ2SU5UnGPZnNqpTOZo6ElCsQNkEWE6yHSzSmH0kTzXmVnvbBCUghIUs70agtbZYm%2BoOGkKsdXjAkhWb471d9p%2FrxqI6afum8YDxIeHvfQ%2B%2FG7l1yzzy15VYHWCsuHcIJm9K8yYD5SdL3L5YOkN%2BnYZ%2BL9goePZUjv6SaTrAFFXkfLlez%2BgHtxwCyxeez&X-Amz-Signature=be69e10305e4b41ed9d840df4251e88d86697b8c067f8c7c52cec740d7d11e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3B6RLOA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDj5KFxjFS89KxvAiY7TSsWvlhAU4tpEwuyJqj0PvO%2FAiA3F8Am%2FWgQBCr4YLL5kUtd4RZVML9W7kmLBVleTfmnGyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTOK%2FO0NWlxMyuAttKtwD3ftubd%2BT%2Bp3peAKVOGkyEU%2BLVdDZv4YGHl9x5rbDjcuaOj%2BFTxmO56hTW6APiZvl3SZjzaHKxtweAT82xRFnLdzu289LtSGYQsmc1IG3vEhi4PrcAjkGJr4fZCJLGYfJ4cFfP3hI7m1Ls7hXAjbjXWsLnU0eaIlq5tcGjTCnNz6rX9qIhgM3NJv%2BK0WHWy6Xa15kwyHuCAwNI2fq86uVAFrL2ZtIunVjT36%2Fph4dWW0qiPMLlPMgQO3N3xWFbYN51K87y8HO1qNCrV6jv5ahIm1HqZbixWOwjck7QSyWDUeQNdfV1gp1KLci7%2FwrSVQ23%2BUUWLLQwN9VtzjIomgk1Vyl4vA0aWGJEfJThIhw5XmVvw4cSJ2ENhT2vjboATqP9lTLtsaiINpmIBM%2B3jFwRGX43pzpwFJfZHmOZcrDHgMA95CKXrHMsWyUiPv1UQZloiSJ%2B8lbHX%2F5InIrUk4idGxOdmcQu65uk%2BdJFvfotrBlNJrBPBHDzzejVOr%2FIfkufNHe6Txhc0GOybmzIPJkMV%2FLUMTO7oRfj%2BDc2jImMLvsT1TkUk0YmxYoMJYkmcR3kcNuZrTNc11Wo1cpcVk0OLJmAzKNk4xFbAvbo9dKgJss1VedaVp5%2FEKP4jww0veVxQY6pgF4%2FVCV%2BL3FXKlXQNXRSQhE4A2vzsx0XAdsJ2SU5UnGPZnNqpTOZo6ElCsQNkEWE6yHSzSmH0kTzXmVnvbBCUghIUs70agtbZYm%2BoOGkKsdXjAkhWb471d9p%2FrxqI6afum8YDxIeHvfQ%2B%2FG7l1yzzy15VYHWCsuHcIJm9K8yYD5SdL3L5YOkN%2BnYZ%2BL9goePZUjv6SaTrAFFXkfLlez%2BgHtxwCyxeez&X-Amz-Signature=0ef12ad0d607910ab8281c72f83a0d98fdd5a6c2c3b65afb002b037dc2981c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3B6RLOA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDj5KFxjFS89KxvAiY7TSsWvlhAU4tpEwuyJqj0PvO%2FAiA3F8Am%2FWgQBCr4YLL5kUtd4RZVML9W7kmLBVleTfmnGyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTOK%2FO0NWlxMyuAttKtwD3ftubd%2BT%2Bp3peAKVOGkyEU%2BLVdDZv4YGHl9x5rbDjcuaOj%2BFTxmO56hTW6APiZvl3SZjzaHKxtweAT82xRFnLdzu289LtSGYQsmc1IG3vEhi4PrcAjkGJr4fZCJLGYfJ4cFfP3hI7m1Ls7hXAjbjXWsLnU0eaIlq5tcGjTCnNz6rX9qIhgM3NJv%2BK0WHWy6Xa15kwyHuCAwNI2fq86uVAFrL2ZtIunVjT36%2Fph4dWW0qiPMLlPMgQO3N3xWFbYN51K87y8HO1qNCrV6jv5ahIm1HqZbixWOwjck7QSyWDUeQNdfV1gp1KLci7%2FwrSVQ23%2BUUWLLQwN9VtzjIomgk1Vyl4vA0aWGJEfJThIhw5XmVvw4cSJ2ENhT2vjboATqP9lTLtsaiINpmIBM%2B3jFwRGX43pzpwFJfZHmOZcrDHgMA95CKXrHMsWyUiPv1UQZloiSJ%2B8lbHX%2F5InIrUk4idGxOdmcQu65uk%2BdJFvfotrBlNJrBPBHDzzejVOr%2FIfkufNHe6Txhc0GOybmzIPJkMV%2FLUMTO7oRfj%2BDc2jImMLvsT1TkUk0YmxYoMJYkmcR3kcNuZrTNc11Wo1cpcVk0OLJmAzKNk4xFbAvbo9dKgJss1VedaVp5%2FEKP4jww0veVxQY6pgF4%2FVCV%2BL3FXKlXQNXRSQhE4A2vzsx0XAdsJ2SU5UnGPZnNqpTOZo6ElCsQNkEWE6yHSzSmH0kTzXmVnvbBCUghIUs70agtbZYm%2BoOGkKsdXjAkhWb471d9p%2FrxqI6afum8YDxIeHvfQ%2B%2FG7l1yzzy15VYHWCsuHcIJm9K8yYD5SdL3L5YOkN%2BnYZ%2BL9goePZUjv6SaTrAFFXkfLlez%2BgHtxwCyxeez&X-Amz-Signature=4f2f48d2d093c23c8f4731a5ef39d3f5686e75a886de26caaa40776f33457e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3B6RLOA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDj5KFxjFS89KxvAiY7TSsWvlhAU4tpEwuyJqj0PvO%2FAiA3F8Am%2FWgQBCr4YLL5kUtd4RZVML9W7kmLBVleTfmnGyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTOK%2FO0NWlxMyuAttKtwD3ftubd%2BT%2Bp3peAKVOGkyEU%2BLVdDZv4YGHl9x5rbDjcuaOj%2BFTxmO56hTW6APiZvl3SZjzaHKxtweAT82xRFnLdzu289LtSGYQsmc1IG3vEhi4PrcAjkGJr4fZCJLGYfJ4cFfP3hI7m1Ls7hXAjbjXWsLnU0eaIlq5tcGjTCnNz6rX9qIhgM3NJv%2BK0WHWy6Xa15kwyHuCAwNI2fq86uVAFrL2ZtIunVjT36%2Fph4dWW0qiPMLlPMgQO3N3xWFbYN51K87y8HO1qNCrV6jv5ahIm1HqZbixWOwjck7QSyWDUeQNdfV1gp1KLci7%2FwrSVQ23%2BUUWLLQwN9VtzjIomgk1Vyl4vA0aWGJEfJThIhw5XmVvw4cSJ2ENhT2vjboATqP9lTLtsaiINpmIBM%2B3jFwRGX43pzpwFJfZHmOZcrDHgMA95CKXrHMsWyUiPv1UQZloiSJ%2B8lbHX%2F5InIrUk4idGxOdmcQu65uk%2BdJFvfotrBlNJrBPBHDzzejVOr%2FIfkufNHe6Txhc0GOybmzIPJkMV%2FLUMTO7oRfj%2BDc2jImMLvsT1TkUk0YmxYoMJYkmcR3kcNuZrTNc11Wo1cpcVk0OLJmAzKNk4xFbAvbo9dKgJss1VedaVp5%2FEKP4jww0veVxQY6pgF4%2FVCV%2BL3FXKlXQNXRSQhE4A2vzsx0XAdsJ2SU5UnGPZnNqpTOZo6ElCsQNkEWE6yHSzSmH0kTzXmVnvbBCUghIUs70agtbZYm%2BoOGkKsdXjAkhWb471d9p%2FrxqI6afum8YDxIeHvfQ%2B%2FG7l1yzzy15VYHWCsuHcIJm9K8yYD5SdL3L5YOkN%2BnYZ%2BL9goePZUjv6SaTrAFFXkfLlez%2BgHtxwCyxeez&X-Amz-Signature=46f42b2766a36bfd09f9d1af30d4f367a120102d60a10e046a11e28defe690db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3B6RLOA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDj5KFxjFS89KxvAiY7TSsWvlhAU4tpEwuyJqj0PvO%2FAiA3F8Am%2FWgQBCr4YLL5kUtd4RZVML9W7kmLBVleTfmnGyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTOK%2FO0NWlxMyuAttKtwD3ftubd%2BT%2Bp3peAKVOGkyEU%2BLVdDZv4YGHl9x5rbDjcuaOj%2BFTxmO56hTW6APiZvl3SZjzaHKxtweAT82xRFnLdzu289LtSGYQsmc1IG3vEhi4PrcAjkGJr4fZCJLGYfJ4cFfP3hI7m1Ls7hXAjbjXWsLnU0eaIlq5tcGjTCnNz6rX9qIhgM3NJv%2BK0WHWy6Xa15kwyHuCAwNI2fq86uVAFrL2ZtIunVjT36%2Fph4dWW0qiPMLlPMgQO3N3xWFbYN51K87y8HO1qNCrV6jv5ahIm1HqZbixWOwjck7QSyWDUeQNdfV1gp1KLci7%2FwrSVQ23%2BUUWLLQwN9VtzjIomgk1Vyl4vA0aWGJEfJThIhw5XmVvw4cSJ2ENhT2vjboATqP9lTLtsaiINpmIBM%2B3jFwRGX43pzpwFJfZHmOZcrDHgMA95CKXrHMsWyUiPv1UQZloiSJ%2B8lbHX%2F5InIrUk4idGxOdmcQu65uk%2BdJFvfotrBlNJrBPBHDzzejVOr%2FIfkufNHe6Txhc0GOybmzIPJkMV%2FLUMTO7oRfj%2BDc2jImMLvsT1TkUk0YmxYoMJYkmcR3kcNuZrTNc11Wo1cpcVk0OLJmAzKNk4xFbAvbo9dKgJss1VedaVp5%2FEKP4jww0veVxQY6pgF4%2FVCV%2BL3FXKlXQNXRSQhE4A2vzsx0XAdsJ2SU5UnGPZnNqpTOZo6ElCsQNkEWE6yHSzSmH0kTzXmVnvbBCUghIUs70agtbZYm%2BoOGkKsdXjAkhWb471d9p%2FrxqI6afum8YDxIeHvfQ%2B%2FG7l1yzzy15VYHWCsuHcIJm9K8yYD5SdL3L5YOkN%2BnYZ%2BL9goePZUjv6SaTrAFFXkfLlez%2BgHtxwCyxeez&X-Amz-Signature=58044e5f6462ab65b87872acb55b968437b854d48b22c8ab0dda299a020c2f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
