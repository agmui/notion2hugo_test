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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWNZVRB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCFkbcqqidUDg%2FjeZJakmFGF1TTQY1AH51oDpYvuRcVYwIgcCqpzW08prGsNseRaRAExG1MBH41SrB5zxa8eI5CPcEqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIAgiKE%2BwhZSHcIPyrcAz0rq8NgVwjFno0UxieSVQVyHnvFmtsjEWRaC1VhFPMCD5MH6fVi%2BSExVghNFRbP7lxklq5GmQDSNTEPgd%2F4h0DzPE6IiFkbztFAFhioUqPhwsFSZDk9wC0iE5VNWOWgr6ayhkb9701TV7mDdJFrDb%2Fev6sSySnfN%2B19QG7ibLmnxwAZMPdNLcxaImmQ9m05xfG55fwAulfSuYZTCpnMdJCca7AKS%2Bl%2FyqrLz8mWEcpYQVbbDiDoyOjYhTCWnucXtweXKxQqFULx8dmq4Hv%2FOecDyfUiIh3rxLIqIV34244ZPBImy13smMKvnr4A7r3O5Ey%2FjNxrdsYvQJ4fw8go0zJeIUYITSsHd1qkW2z9PSQgzIp0o%2FboHeO2Y11GCxVMjatYLWgEvQI6pczvVgE4jKvUwcj3nK%2FBsAU5vvu9rXFvatq3%2FuKjx4DbJxBzE1F5kd50olC%2Fe2laXeGUyF%2BS%2Ba1129KwqnW%2Fs%2BSPi%2F6EOL96XZdW%2BwBx6TXIabABbPRnFRD3Q6eyiKrwKOFySQq%2FQfhrcKPJ4exoEmzrs6LNJBsLlTbkATmX%2BaTC6z%2BKuXT8u%2FM4xU%2BEim4%2Fq4Nm3xJus%2BSJpoCSw4eu%2FnLDyeGL3eCYqB%2BZR6uJFgr9LKoxMJWx678GOqUBcrK7%2BAe%2Bil6xHxdhdoCxHdIypIvO%2B74Q%2FJXF1UiODXB8n%2BEzpkccfuoYXSp%2FZEKt0nFFmjMRF61O3Doc5OqsyyxPWK42L3HYl80og3ZQfi9qlbOs%2BL5ggcFWatjkqhfEm12l1YLAF%2BKBiRfwezYNSvghUBqKxs5h2WViaGkonMe9ld1nrQ%2B6ObRvU4ZAfZkMIcEhyTmVla2k6S%2BZ%2F7telWMQFlKB&X-Amz-Signature=501c10ed4c1ef81950788d90946d9ec0db2993200b68b7d106429b5567a86949&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWNZVRB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCFkbcqqidUDg%2FjeZJakmFGF1TTQY1AH51oDpYvuRcVYwIgcCqpzW08prGsNseRaRAExG1MBH41SrB5zxa8eI5CPcEqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIAgiKE%2BwhZSHcIPyrcAz0rq8NgVwjFno0UxieSVQVyHnvFmtsjEWRaC1VhFPMCD5MH6fVi%2BSExVghNFRbP7lxklq5GmQDSNTEPgd%2F4h0DzPE6IiFkbztFAFhioUqPhwsFSZDk9wC0iE5VNWOWgr6ayhkb9701TV7mDdJFrDb%2Fev6sSySnfN%2B19QG7ibLmnxwAZMPdNLcxaImmQ9m05xfG55fwAulfSuYZTCpnMdJCca7AKS%2Bl%2FyqrLz8mWEcpYQVbbDiDoyOjYhTCWnucXtweXKxQqFULx8dmq4Hv%2FOecDyfUiIh3rxLIqIV34244ZPBImy13smMKvnr4A7r3O5Ey%2FjNxrdsYvQJ4fw8go0zJeIUYITSsHd1qkW2z9PSQgzIp0o%2FboHeO2Y11GCxVMjatYLWgEvQI6pczvVgE4jKvUwcj3nK%2FBsAU5vvu9rXFvatq3%2FuKjx4DbJxBzE1F5kd50olC%2Fe2laXeGUyF%2BS%2Ba1129KwqnW%2Fs%2BSPi%2F6EOL96XZdW%2BwBx6TXIabABbPRnFRD3Q6eyiKrwKOFySQq%2FQfhrcKPJ4exoEmzrs6LNJBsLlTbkATmX%2BaTC6z%2BKuXT8u%2FM4xU%2BEim4%2Fq4Nm3xJus%2BSJpoCSw4eu%2FnLDyeGL3eCYqB%2BZR6uJFgr9LKoxMJWx678GOqUBcrK7%2BAe%2Bil6xHxdhdoCxHdIypIvO%2B74Q%2FJXF1UiODXB8n%2BEzpkccfuoYXSp%2FZEKt0nFFmjMRF61O3Doc5OqsyyxPWK42L3HYl80og3ZQfi9qlbOs%2BL5ggcFWatjkqhfEm12l1YLAF%2BKBiRfwezYNSvghUBqKxs5h2WViaGkonMe9ld1nrQ%2B6ObRvU4ZAfZkMIcEhyTmVla2k6S%2BZ%2F7telWMQFlKB&X-Amz-Signature=723f43b8ad5ad2fa2ee29391b8222e0a88ce0965137cd2c10a30311bc32f8032&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWNZVRB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCFkbcqqidUDg%2FjeZJakmFGF1TTQY1AH51oDpYvuRcVYwIgcCqpzW08prGsNseRaRAExG1MBH41SrB5zxa8eI5CPcEqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIAgiKE%2BwhZSHcIPyrcAz0rq8NgVwjFno0UxieSVQVyHnvFmtsjEWRaC1VhFPMCD5MH6fVi%2BSExVghNFRbP7lxklq5GmQDSNTEPgd%2F4h0DzPE6IiFkbztFAFhioUqPhwsFSZDk9wC0iE5VNWOWgr6ayhkb9701TV7mDdJFrDb%2Fev6sSySnfN%2B19QG7ibLmnxwAZMPdNLcxaImmQ9m05xfG55fwAulfSuYZTCpnMdJCca7AKS%2Bl%2FyqrLz8mWEcpYQVbbDiDoyOjYhTCWnucXtweXKxQqFULx8dmq4Hv%2FOecDyfUiIh3rxLIqIV34244ZPBImy13smMKvnr4A7r3O5Ey%2FjNxrdsYvQJ4fw8go0zJeIUYITSsHd1qkW2z9PSQgzIp0o%2FboHeO2Y11GCxVMjatYLWgEvQI6pczvVgE4jKvUwcj3nK%2FBsAU5vvu9rXFvatq3%2FuKjx4DbJxBzE1F5kd50olC%2Fe2laXeGUyF%2BS%2Ba1129KwqnW%2Fs%2BSPi%2F6EOL96XZdW%2BwBx6TXIabABbPRnFRD3Q6eyiKrwKOFySQq%2FQfhrcKPJ4exoEmzrs6LNJBsLlTbkATmX%2BaTC6z%2BKuXT8u%2FM4xU%2BEim4%2Fq4Nm3xJus%2BSJpoCSw4eu%2FnLDyeGL3eCYqB%2BZR6uJFgr9LKoxMJWx678GOqUBcrK7%2BAe%2Bil6xHxdhdoCxHdIypIvO%2B74Q%2FJXF1UiODXB8n%2BEzpkccfuoYXSp%2FZEKt0nFFmjMRF61O3Doc5OqsyyxPWK42L3HYl80og3ZQfi9qlbOs%2BL5ggcFWatjkqhfEm12l1YLAF%2BKBiRfwezYNSvghUBqKxs5h2WViaGkonMe9ld1nrQ%2B6ObRvU4ZAfZkMIcEhyTmVla2k6S%2BZ%2F7telWMQFlKB&X-Amz-Signature=d953ec8ab5c4b95d77a4599fc8a59e3c9d08868a0ff53f06566d65d887177852&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWNZVRB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCFkbcqqidUDg%2FjeZJakmFGF1TTQY1AH51oDpYvuRcVYwIgcCqpzW08prGsNseRaRAExG1MBH41SrB5zxa8eI5CPcEqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIAgiKE%2BwhZSHcIPyrcAz0rq8NgVwjFno0UxieSVQVyHnvFmtsjEWRaC1VhFPMCD5MH6fVi%2BSExVghNFRbP7lxklq5GmQDSNTEPgd%2F4h0DzPE6IiFkbztFAFhioUqPhwsFSZDk9wC0iE5VNWOWgr6ayhkb9701TV7mDdJFrDb%2Fev6sSySnfN%2B19QG7ibLmnxwAZMPdNLcxaImmQ9m05xfG55fwAulfSuYZTCpnMdJCca7AKS%2Bl%2FyqrLz8mWEcpYQVbbDiDoyOjYhTCWnucXtweXKxQqFULx8dmq4Hv%2FOecDyfUiIh3rxLIqIV34244ZPBImy13smMKvnr4A7r3O5Ey%2FjNxrdsYvQJ4fw8go0zJeIUYITSsHd1qkW2z9PSQgzIp0o%2FboHeO2Y11GCxVMjatYLWgEvQI6pczvVgE4jKvUwcj3nK%2FBsAU5vvu9rXFvatq3%2FuKjx4DbJxBzE1F5kd50olC%2Fe2laXeGUyF%2BS%2Ba1129KwqnW%2Fs%2BSPi%2F6EOL96XZdW%2BwBx6TXIabABbPRnFRD3Q6eyiKrwKOFySQq%2FQfhrcKPJ4exoEmzrs6LNJBsLlTbkATmX%2BaTC6z%2BKuXT8u%2FM4xU%2BEim4%2Fq4Nm3xJus%2BSJpoCSw4eu%2FnLDyeGL3eCYqB%2BZR6uJFgr9LKoxMJWx678GOqUBcrK7%2BAe%2Bil6xHxdhdoCxHdIypIvO%2B74Q%2FJXF1UiODXB8n%2BEzpkccfuoYXSp%2FZEKt0nFFmjMRF61O3Doc5OqsyyxPWK42L3HYl80og3ZQfi9qlbOs%2BL5ggcFWatjkqhfEm12l1YLAF%2BKBiRfwezYNSvghUBqKxs5h2WViaGkonMe9ld1nrQ%2B6ObRvU4ZAfZkMIcEhyTmVla2k6S%2BZ%2F7telWMQFlKB&X-Amz-Signature=93297995eadae1cb73771f5ac8a5b7f7a0f69834eb0a4a4d3f7205b4da0968ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWNZVRB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCFkbcqqidUDg%2FjeZJakmFGF1TTQY1AH51oDpYvuRcVYwIgcCqpzW08prGsNseRaRAExG1MBH41SrB5zxa8eI5CPcEqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIAgiKE%2BwhZSHcIPyrcAz0rq8NgVwjFno0UxieSVQVyHnvFmtsjEWRaC1VhFPMCD5MH6fVi%2BSExVghNFRbP7lxklq5GmQDSNTEPgd%2F4h0DzPE6IiFkbztFAFhioUqPhwsFSZDk9wC0iE5VNWOWgr6ayhkb9701TV7mDdJFrDb%2Fev6sSySnfN%2B19QG7ibLmnxwAZMPdNLcxaImmQ9m05xfG55fwAulfSuYZTCpnMdJCca7AKS%2Bl%2FyqrLz8mWEcpYQVbbDiDoyOjYhTCWnucXtweXKxQqFULx8dmq4Hv%2FOecDyfUiIh3rxLIqIV34244ZPBImy13smMKvnr4A7r3O5Ey%2FjNxrdsYvQJ4fw8go0zJeIUYITSsHd1qkW2z9PSQgzIp0o%2FboHeO2Y11GCxVMjatYLWgEvQI6pczvVgE4jKvUwcj3nK%2FBsAU5vvu9rXFvatq3%2FuKjx4DbJxBzE1F5kd50olC%2Fe2laXeGUyF%2BS%2Ba1129KwqnW%2Fs%2BSPi%2F6EOL96XZdW%2BwBx6TXIabABbPRnFRD3Q6eyiKrwKOFySQq%2FQfhrcKPJ4exoEmzrs6LNJBsLlTbkATmX%2BaTC6z%2BKuXT8u%2FM4xU%2BEim4%2Fq4Nm3xJus%2BSJpoCSw4eu%2FnLDyeGL3eCYqB%2BZR6uJFgr9LKoxMJWx678GOqUBcrK7%2BAe%2Bil6xHxdhdoCxHdIypIvO%2B74Q%2FJXF1UiODXB8n%2BEzpkccfuoYXSp%2FZEKt0nFFmjMRF61O3Doc5OqsyyxPWK42L3HYl80og3ZQfi9qlbOs%2BL5ggcFWatjkqhfEm12l1YLAF%2BKBiRfwezYNSvghUBqKxs5h2WViaGkonMe9ld1nrQ%2B6ObRvU4ZAfZkMIcEhyTmVla2k6S%2BZ%2F7telWMQFlKB&X-Amz-Signature=5a2e432a6c85585dad0ebbe51e08b973bf30e91501abfa1819fe1cbb9940698b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWNZVRB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCFkbcqqidUDg%2FjeZJakmFGF1TTQY1AH51oDpYvuRcVYwIgcCqpzW08prGsNseRaRAExG1MBH41SrB5zxa8eI5CPcEqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIAgiKE%2BwhZSHcIPyrcAz0rq8NgVwjFno0UxieSVQVyHnvFmtsjEWRaC1VhFPMCD5MH6fVi%2BSExVghNFRbP7lxklq5GmQDSNTEPgd%2F4h0DzPE6IiFkbztFAFhioUqPhwsFSZDk9wC0iE5VNWOWgr6ayhkb9701TV7mDdJFrDb%2Fev6sSySnfN%2B19QG7ibLmnxwAZMPdNLcxaImmQ9m05xfG55fwAulfSuYZTCpnMdJCca7AKS%2Bl%2FyqrLz8mWEcpYQVbbDiDoyOjYhTCWnucXtweXKxQqFULx8dmq4Hv%2FOecDyfUiIh3rxLIqIV34244ZPBImy13smMKvnr4A7r3O5Ey%2FjNxrdsYvQJ4fw8go0zJeIUYITSsHd1qkW2z9PSQgzIp0o%2FboHeO2Y11GCxVMjatYLWgEvQI6pczvVgE4jKvUwcj3nK%2FBsAU5vvu9rXFvatq3%2FuKjx4DbJxBzE1F5kd50olC%2Fe2laXeGUyF%2BS%2Ba1129KwqnW%2Fs%2BSPi%2F6EOL96XZdW%2BwBx6TXIabABbPRnFRD3Q6eyiKrwKOFySQq%2FQfhrcKPJ4exoEmzrs6LNJBsLlTbkATmX%2BaTC6z%2BKuXT8u%2FM4xU%2BEim4%2Fq4Nm3xJus%2BSJpoCSw4eu%2FnLDyeGL3eCYqB%2BZR6uJFgr9LKoxMJWx678GOqUBcrK7%2BAe%2Bil6xHxdhdoCxHdIypIvO%2B74Q%2FJXF1UiODXB8n%2BEzpkccfuoYXSp%2FZEKt0nFFmjMRF61O3Doc5OqsyyxPWK42L3HYl80og3ZQfi9qlbOs%2BL5ggcFWatjkqhfEm12l1YLAF%2BKBiRfwezYNSvghUBqKxs5h2WViaGkonMe9ld1nrQ%2B6ObRvU4ZAfZkMIcEhyTmVla2k6S%2BZ%2F7telWMQFlKB&X-Amz-Signature=83d14669df13dc82e8dd30d2be6dbbe468118535c6bcdb30d574e8477b167b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWNZVRB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCFkbcqqidUDg%2FjeZJakmFGF1TTQY1AH51oDpYvuRcVYwIgcCqpzW08prGsNseRaRAExG1MBH41SrB5zxa8eI5CPcEqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIAgiKE%2BwhZSHcIPyrcAz0rq8NgVwjFno0UxieSVQVyHnvFmtsjEWRaC1VhFPMCD5MH6fVi%2BSExVghNFRbP7lxklq5GmQDSNTEPgd%2F4h0DzPE6IiFkbztFAFhioUqPhwsFSZDk9wC0iE5VNWOWgr6ayhkb9701TV7mDdJFrDb%2Fev6sSySnfN%2B19QG7ibLmnxwAZMPdNLcxaImmQ9m05xfG55fwAulfSuYZTCpnMdJCca7AKS%2Bl%2FyqrLz8mWEcpYQVbbDiDoyOjYhTCWnucXtweXKxQqFULx8dmq4Hv%2FOecDyfUiIh3rxLIqIV34244ZPBImy13smMKvnr4A7r3O5Ey%2FjNxrdsYvQJ4fw8go0zJeIUYITSsHd1qkW2z9PSQgzIp0o%2FboHeO2Y11GCxVMjatYLWgEvQI6pczvVgE4jKvUwcj3nK%2FBsAU5vvu9rXFvatq3%2FuKjx4DbJxBzE1F5kd50olC%2Fe2laXeGUyF%2BS%2Ba1129KwqnW%2Fs%2BSPi%2F6EOL96XZdW%2BwBx6TXIabABbPRnFRD3Q6eyiKrwKOFySQq%2FQfhrcKPJ4exoEmzrs6LNJBsLlTbkATmX%2BaTC6z%2BKuXT8u%2FM4xU%2BEim4%2Fq4Nm3xJus%2BSJpoCSw4eu%2FnLDyeGL3eCYqB%2BZR6uJFgr9LKoxMJWx678GOqUBcrK7%2BAe%2Bil6xHxdhdoCxHdIypIvO%2B74Q%2FJXF1UiODXB8n%2BEzpkccfuoYXSp%2FZEKt0nFFmjMRF61O3Doc5OqsyyxPWK42L3HYl80og3ZQfi9qlbOs%2BL5ggcFWatjkqhfEm12l1YLAF%2BKBiRfwezYNSvghUBqKxs5h2WViaGkonMe9ld1nrQ%2B6ObRvU4ZAfZkMIcEhyTmVla2k6S%2BZ%2F7telWMQFlKB&X-Amz-Signature=6db625378b4faeb5fd63098c5f2d057a93f88d3a677d664d6717aca8b21b5801&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWNZVRB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCFkbcqqidUDg%2FjeZJakmFGF1TTQY1AH51oDpYvuRcVYwIgcCqpzW08prGsNseRaRAExG1MBH41SrB5zxa8eI5CPcEqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIAgiKE%2BwhZSHcIPyrcAz0rq8NgVwjFno0UxieSVQVyHnvFmtsjEWRaC1VhFPMCD5MH6fVi%2BSExVghNFRbP7lxklq5GmQDSNTEPgd%2F4h0DzPE6IiFkbztFAFhioUqPhwsFSZDk9wC0iE5VNWOWgr6ayhkb9701TV7mDdJFrDb%2Fev6sSySnfN%2B19QG7ibLmnxwAZMPdNLcxaImmQ9m05xfG55fwAulfSuYZTCpnMdJCca7AKS%2Bl%2FyqrLz8mWEcpYQVbbDiDoyOjYhTCWnucXtweXKxQqFULx8dmq4Hv%2FOecDyfUiIh3rxLIqIV34244ZPBImy13smMKvnr4A7r3O5Ey%2FjNxrdsYvQJ4fw8go0zJeIUYITSsHd1qkW2z9PSQgzIp0o%2FboHeO2Y11GCxVMjatYLWgEvQI6pczvVgE4jKvUwcj3nK%2FBsAU5vvu9rXFvatq3%2FuKjx4DbJxBzE1F5kd50olC%2Fe2laXeGUyF%2BS%2Ba1129KwqnW%2Fs%2BSPi%2F6EOL96XZdW%2BwBx6TXIabABbPRnFRD3Q6eyiKrwKOFySQq%2FQfhrcKPJ4exoEmzrs6LNJBsLlTbkATmX%2BaTC6z%2BKuXT8u%2FM4xU%2BEim4%2Fq4Nm3xJus%2BSJpoCSw4eu%2FnLDyeGL3eCYqB%2BZR6uJFgr9LKoxMJWx678GOqUBcrK7%2BAe%2Bil6xHxdhdoCxHdIypIvO%2B74Q%2FJXF1UiODXB8n%2BEzpkccfuoYXSp%2FZEKt0nFFmjMRF61O3Doc5OqsyyxPWK42L3HYl80og3ZQfi9qlbOs%2BL5ggcFWatjkqhfEm12l1YLAF%2BKBiRfwezYNSvghUBqKxs5h2WViaGkonMe9ld1nrQ%2B6ObRvU4ZAfZkMIcEhyTmVla2k6S%2BZ%2F7telWMQFlKB&X-Amz-Signature=59171f60b5e6ec5331bd19ab34173417d27ddda759d53eda0b2cd24acb08d593&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
