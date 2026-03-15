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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL74NXR%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGETwmyHR8seXPXaZm4%2F3Xo35sSu5gLA5s518B6pOsNtAiEA9dRDKE9w7guMFLYT1brFESsaRH%2BOi4pFudYujPAlnAwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMqn60FjNfzp0CW9ircA2acQfwsfBJ6%2FBkG%2BsuNo%2BfjN%2BAmKgXQzuRPYOJQF9RnVeaeVyGlyV93hG1hbYNXgnVGtUVhnQCBA1Kq8vHpWtq7B62kEIGeh003%2F%2B5UfJ1gNb6LA2ZmFG9a69X7ZHyFIQGbQWw8x%2BeQO1qQtu%2BzwcGWDbpEnqTtvO%2FOGRI286hFwy%2BEIfMqYYr4MO%2FyTgM4K8PX7Ptrai5cCIDcyMa8Yd47iNKat79xkCrQEezrqMnf1XEqq5mLrd04z2k815Pd8XH%2BrLXhXhOcnqrwKuzg8Oo2fEQD5xmTnqHar5uxVnLIGVLL8%2BL11P7RJ8JdDdNrqIMI%2FntqWDFur9ZtDXc%2F1rqm68R1Evp0nBNWsb69VwABFO5I4IaXRE7pCpmLzI1yW5GSrleTVWgP5uUBNwSND%2F2pn%2FNAnhuxXzYlQUFU5OvltVGFoUw5kfKeMScmeSFqXUnePQkgvyMFXJzJuCZC%2F%2Bdk%2F0eu0sjPJVv0OXh3nrIiMOzglmd6A9jexGKOiNINh0DyOEOKK4qpg28ET1y6YeDoEmF9rE44GyFpCfxgMR%2BgQYwl3yChMJUKQhjZplSa%2B1d5vOClHWII4Pe%2BiKjijGj7uc%2FcSJz9Uyrrn18ZerF3tZNHMHV64Rzaaut%2FMK6R2M0GOqUBVCW9Zp%2BJ%2FLipYq4ADwyZvzzYJ6ABHMKg8A%2F2OVdXSOcAuD39zlhbZoEAUtWWnCoNA8Rf%2FvdwA5O0%2Fo1qcGuLNgcnyO4L7%2B3Ntd4%2F%2FtEvHxrQDLQ0NpNs2a8S1jozqlCzKNsLynEpghhM6eENokjmB8S%2FCMzd83dG2wmmZxX1qxO4Z2Q67PHSSSBQKikC735WryGThfEuWI54PHOms5ykTq%2Bykm%2BB&X-Amz-Signature=85acde3a18f3a18c76e18191a601443668233229f06dbaf2f3628feb759465ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL74NXR%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGETwmyHR8seXPXaZm4%2F3Xo35sSu5gLA5s518B6pOsNtAiEA9dRDKE9w7guMFLYT1brFESsaRH%2BOi4pFudYujPAlnAwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMqn60FjNfzp0CW9ircA2acQfwsfBJ6%2FBkG%2BsuNo%2BfjN%2BAmKgXQzuRPYOJQF9RnVeaeVyGlyV93hG1hbYNXgnVGtUVhnQCBA1Kq8vHpWtq7B62kEIGeh003%2F%2B5UfJ1gNb6LA2ZmFG9a69X7ZHyFIQGbQWw8x%2BeQO1qQtu%2BzwcGWDbpEnqTtvO%2FOGRI286hFwy%2BEIfMqYYr4MO%2FyTgM4K8PX7Ptrai5cCIDcyMa8Yd47iNKat79xkCrQEezrqMnf1XEqq5mLrd04z2k815Pd8XH%2BrLXhXhOcnqrwKuzg8Oo2fEQD5xmTnqHar5uxVnLIGVLL8%2BL11P7RJ8JdDdNrqIMI%2FntqWDFur9ZtDXc%2F1rqm68R1Evp0nBNWsb69VwABFO5I4IaXRE7pCpmLzI1yW5GSrleTVWgP5uUBNwSND%2F2pn%2FNAnhuxXzYlQUFU5OvltVGFoUw5kfKeMScmeSFqXUnePQkgvyMFXJzJuCZC%2F%2Bdk%2F0eu0sjPJVv0OXh3nrIiMOzglmd6A9jexGKOiNINh0DyOEOKK4qpg28ET1y6YeDoEmF9rE44GyFpCfxgMR%2BgQYwl3yChMJUKQhjZplSa%2B1d5vOClHWII4Pe%2BiKjijGj7uc%2FcSJz9Uyrrn18ZerF3tZNHMHV64Rzaaut%2FMK6R2M0GOqUBVCW9Zp%2BJ%2FLipYq4ADwyZvzzYJ6ABHMKg8A%2F2OVdXSOcAuD39zlhbZoEAUtWWnCoNA8Rf%2FvdwA5O0%2Fo1qcGuLNgcnyO4L7%2B3Ntd4%2F%2FtEvHxrQDLQ0NpNs2a8S1jozqlCzKNsLynEpghhM6eENokjmB8S%2FCMzd83dG2wmmZxX1qxO4Z2Q67PHSSSBQKikC735WryGThfEuWI54PHOms5ykTq%2Bykm%2BB&X-Amz-Signature=8422d4257222409aa243ba26eaf723ac077dd09489480110ca0389768bbdc578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL74NXR%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGETwmyHR8seXPXaZm4%2F3Xo35sSu5gLA5s518B6pOsNtAiEA9dRDKE9w7guMFLYT1brFESsaRH%2BOi4pFudYujPAlnAwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMqn60FjNfzp0CW9ircA2acQfwsfBJ6%2FBkG%2BsuNo%2BfjN%2BAmKgXQzuRPYOJQF9RnVeaeVyGlyV93hG1hbYNXgnVGtUVhnQCBA1Kq8vHpWtq7B62kEIGeh003%2F%2B5UfJ1gNb6LA2ZmFG9a69X7ZHyFIQGbQWw8x%2BeQO1qQtu%2BzwcGWDbpEnqTtvO%2FOGRI286hFwy%2BEIfMqYYr4MO%2FyTgM4K8PX7Ptrai5cCIDcyMa8Yd47iNKat79xkCrQEezrqMnf1XEqq5mLrd04z2k815Pd8XH%2BrLXhXhOcnqrwKuzg8Oo2fEQD5xmTnqHar5uxVnLIGVLL8%2BL11P7RJ8JdDdNrqIMI%2FntqWDFur9ZtDXc%2F1rqm68R1Evp0nBNWsb69VwABFO5I4IaXRE7pCpmLzI1yW5GSrleTVWgP5uUBNwSND%2F2pn%2FNAnhuxXzYlQUFU5OvltVGFoUw5kfKeMScmeSFqXUnePQkgvyMFXJzJuCZC%2F%2Bdk%2F0eu0sjPJVv0OXh3nrIiMOzglmd6A9jexGKOiNINh0DyOEOKK4qpg28ET1y6YeDoEmF9rE44GyFpCfxgMR%2BgQYwl3yChMJUKQhjZplSa%2B1d5vOClHWII4Pe%2BiKjijGj7uc%2FcSJz9Uyrrn18ZerF3tZNHMHV64Rzaaut%2FMK6R2M0GOqUBVCW9Zp%2BJ%2FLipYq4ADwyZvzzYJ6ABHMKg8A%2F2OVdXSOcAuD39zlhbZoEAUtWWnCoNA8Rf%2FvdwA5O0%2Fo1qcGuLNgcnyO4L7%2B3Ntd4%2F%2FtEvHxrQDLQ0NpNs2a8S1jozqlCzKNsLynEpghhM6eENokjmB8S%2FCMzd83dG2wmmZxX1qxO4Z2Q67PHSSSBQKikC735WryGThfEuWI54PHOms5ykTq%2Bykm%2BB&X-Amz-Signature=00696a515cfb4bde9b55be5352f7ec0328f6b59bb45bca4b1443a0e500fe8745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL74NXR%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGETwmyHR8seXPXaZm4%2F3Xo35sSu5gLA5s518B6pOsNtAiEA9dRDKE9w7guMFLYT1brFESsaRH%2BOi4pFudYujPAlnAwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMqn60FjNfzp0CW9ircA2acQfwsfBJ6%2FBkG%2BsuNo%2BfjN%2BAmKgXQzuRPYOJQF9RnVeaeVyGlyV93hG1hbYNXgnVGtUVhnQCBA1Kq8vHpWtq7B62kEIGeh003%2F%2B5UfJ1gNb6LA2ZmFG9a69X7ZHyFIQGbQWw8x%2BeQO1qQtu%2BzwcGWDbpEnqTtvO%2FOGRI286hFwy%2BEIfMqYYr4MO%2FyTgM4K8PX7Ptrai5cCIDcyMa8Yd47iNKat79xkCrQEezrqMnf1XEqq5mLrd04z2k815Pd8XH%2BrLXhXhOcnqrwKuzg8Oo2fEQD5xmTnqHar5uxVnLIGVLL8%2BL11P7RJ8JdDdNrqIMI%2FntqWDFur9ZtDXc%2F1rqm68R1Evp0nBNWsb69VwABFO5I4IaXRE7pCpmLzI1yW5GSrleTVWgP5uUBNwSND%2F2pn%2FNAnhuxXzYlQUFU5OvltVGFoUw5kfKeMScmeSFqXUnePQkgvyMFXJzJuCZC%2F%2Bdk%2F0eu0sjPJVv0OXh3nrIiMOzglmd6A9jexGKOiNINh0DyOEOKK4qpg28ET1y6YeDoEmF9rE44GyFpCfxgMR%2BgQYwl3yChMJUKQhjZplSa%2B1d5vOClHWII4Pe%2BiKjijGj7uc%2FcSJz9Uyrrn18ZerF3tZNHMHV64Rzaaut%2FMK6R2M0GOqUBVCW9Zp%2BJ%2FLipYq4ADwyZvzzYJ6ABHMKg8A%2F2OVdXSOcAuD39zlhbZoEAUtWWnCoNA8Rf%2FvdwA5O0%2Fo1qcGuLNgcnyO4L7%2B3Ntd4%2F%2FtEvHxrQDLQ0NpNs2a8S1jozqlCzKNsLynEpghhM6eENokjmB8S%2FCMzd83dG2wmmZxX1qxO4Z2Q67PHSSSBQKikC735WryGThfEuWI54PHOms5ykTq%2Bykm%2BB&X-Amz-Signature=ca60121db689d13a881c6d5d1a7b58396ed59d16c4bb1a1e5eb43237ec15fff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL74NXR%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGETwmyHR8seXPXaZm4%2F3Xo35sSu5gLA5s518B6pOsNtAiEA9dRDKE9w7guMFLYT1brFESsaRH%2BOi4pFudYujPAlnAwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMqn60FjNfzp0CW9ircA2acQfwsfBJ6%2FBkG%2BsuNo%2BfjN%2BAmKgXQzuRPYOJQF9RnVeaeVyGlyV93hG1hbYNXgnVGtUVhnQCBA1Kq8vHpWtq7B62kEIGeh003%2F%2B5UfJ1gNb6LA2ZmFG9a69X7ZHyFIQGbQWw8x%2BeQO1qQtu%2BzwcGWDbpEnqTtvO%2FOGRI286hFwy%2BEIfMqYYr4MO%2FyTgM4K8PX7Ptrai5cCIDcyMa8Yd47iNKat79xkCrQEezrqMnf1XEqq5mLrd04z2k815Pd8XH%2BrLXhXhOcnqrwKuzg8Oo2fEQD5xmTnqHar5uxVnLIGVLL8%2BL11P7RJ8JdDdNrqIMI%2FntqWDFur9ZtDXc%2F1rqm68R1Evp0nBNWsb69VwABFO5I4IaXRE7pCpmLzI1yW5GSrleTVWgP5uUBNwSND%2F2pn%2FNAnhuxXzYlQUFU5OvltVGFoUw5kfKeMScmeSFqXUnePQkgvyMFXJzJuCZC%2F%2Bdk%2F0eu0sjPJVv0OXh3nrIiMOzglmd6A9jexGKOiNINh0DyOEOKK4qpg28ET1y6YeDoEmF9rE44GyFpCfxgMR%2BgQYwl3yChMJUKQhjZplSa%2B1d5vOClHWII4Pe%2BiKjijGj7uc%2FcSJz9Uyrrn18ZerF3tZNHMHV64Rzaaut%2FMK6R2M0GOqUBVCW9Zp%2BJ%2FLipYq4ADwyZvzzYJ6ABHMKg8A%2F2OVdXSOcAuD39zlhbZoEAUtWWnCoNA8Rf%2FvdwA5O0%2Fo1qcGuLNgcnyO4L7%2B3Ntd4%2F%2FtEvHxrQDLQ0NpNs2a8S1jozqlCzKNsLynEpghhM6eENokjmB8S%2FCMzd83dG2wmmZxX1qxO4Z2Q67PHSSSBQKikC735WryGThfEuWI54PHOms5ykTq%2Bykm%2BB&X-Amz-Signature=907f8f4ea4c7dc56faed63433bc007234254bba656d0e01cfd460384c0331576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL74NXR%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGETwmyHR8seXPXaZm4%2F3Xo35sSu5gLA5s518B6pOsNtAiEA9dRDKE9w7guMFLYT1brFESsaRH%2BOi4pFudYujPAlnAwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMqn60FjNfzp0CW9ircA2acQfwsfBJ6%2FBkG%2BsuNo%2BfjN%2BAmKgXQzuRPYOJQF9RnVeaeVyGlyV93hG1hbYNXgnVGtUVhnQCBA1Kq8vHpWtq7B62kEIGeh003%2F%2B5UfJ1gNb6LA2ZmFG9a69X7ZHyFIQGbQWw8x%2BeQO1qQtu%2BzwcGWDbpEnqTtvO%2FOGRI286hFwy%2BEIfMqYYr4MO%2FyTgM4K8PX7Ptrai5cCIDcyMa8Yd47iNKat79xkCrQEezrqMnf1XEqq5mLrd04z2k815Pd8XH%2BrLXhXhOcnqrwKuzg8Oo2fEQD5xmTnqHar5uxVnLIGVLL8%2BL11P7RJ8JdDdNrqIMI%2FntqWDFur9ZtDXc%2F1rqm68R1Evp0nBNWsb69VwABFO5I4IaXRE7pCpmLzI1yW5GSrleTVWgP5uUBNwSND%2F2pn%2FNAnhuxXzYlQUFU5OvltVGFoUw5kfKeMScmeSFqXUnePQkgvyMFXJzJuCZC%2F%2Bdk%2F0eu0sjPJVv0OXh3nrIiMOzglmd6A9jexGKOiNINh0DyOEOKK4qpg28ET1y6YeDoEmF9rE44GyFpCfxgMR%2BgQYwl3yChMJUKQhjZplSa%2B1d5vOClHWII4Pe%2BiKjijGj7uc%2FcSJz9Uyrrn18ZerF3tZNHMHV64Rzaaut%2FMK6R2M0GOqUBVCW9Zp%2BJ%2FLipYq4ADwyZvzzYJ6ABHMKg8A%2F2OVdXSOcAuD39zlhbZoEAUtWWnCoNA8Rf%2FvdwA5O0%2Fo1qcGuLNgcnyO4L7%2B3Ntd4%2F%2FtEvHxrQDLQ0NpNs2a8S1jozqlCzKNsLynEpghhM6eENokjmB8S%2FCMzd83dG2wmmZxX1qxO4Z2Q67PHSSSBQKikC735WryGThfEuWI54PHOms5ykTq%2Bykm%2BB&X-Amz-Signature=7cc81bc28bf4e427255a96da0bba662178b3a6529360ccdee8c68c4e34a798a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL74NXR%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGETwmyHR8seXPXaZm4%2F3Xo35sSu5gLA5s518B6pOsNtAiEA9dRDKE9w7guMFLYT1brFESsaRH%2BOi4pFudYujPAlnAwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMqn60FjNfzp0CW9ircA2acQfwsfBJ6%2FBkG%2BsuNo%2BfjN%2BAmKgXQzuRPYOJQF9RnVeaeVyGlyV93hG1hbYNXgnVGtUVhnQCBA1Kq8vHpWtq7B62kEIGeh003%2F%2B5UfJ1gNb6LA2ZmFG9a69X7ZHyFIQGbQWw8x%2BeQO1qQtu%2BzwcGWDbpEnqTtvO%2FOGRI286hFwy%2BEIfMqYYr4MO%2FyTgM4K8PX7Ptrai5cCIDcyMa8Yd47iNKat79xkCrQEezrqMnf1XEqq5mLrd04z2k815Pd8XH%2BrLXhXhOcnqrwKuzg8Oo2fEQD5xmTnqHar5uxVnLIGVLL8%2BL11P7RJ8JdDdNrqIMI%2FntqWDFur9ZtDXc%2F1rqm68R1Evp0nBNWsb69VwABFO5I4IaXRE7pCpmLzI1yW5GSrleTVWgP5uUBNwSND%2F2pn%2FNAnhuxXzYlQUFU5OvltVGFoUw5kfKeMScmeSFqXUnePQkgvyMFXJzJuCZC%2F%2Bdk%2F0eu0sjPJVv0OXh3nrIiMOzglmd6A9jexGKOiNINh0DyOEOKK4qpg28ET1y6YeDoEmF9rE44GyFpCfxgMR%2BgQYwl3yChMJUKQhjZplSa%2B1d5vOClHWII4Pe%2BiKjijGj7uc%2FcSJz9Uyrrn18ZerF3tZNHMHV64Rzaaut%2FMK6R2M0GOqUBVCW9Zp%2BJ%2FLipYq4ADwyZvzzYJ6ABHMKg8A%2F2OVdXSOcAuD39zlhbZoEAUtWWnCoNA8Rf%2FvdwA5O0%2Fo1qcGuLNgcnyO4L7%2B3Ntd4%2F%2FtEvHxrQDLQ0NpNs2a8S1jozqlCzKNsLynEpghhM6eENokjmB8S%2FCMzd83dG2wmmZxX1qxO4Z2Q67PHSSSBQKikC735WryGThfEuWI54PHOms5ykTq%2Bykm%2BB&X-Amz-Signature=e72236a0f76d68706a1cced92d862de44cba16df9e72bcc5cc119916ddf63a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSL74NXR%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGETwmyHR8seXPXaZm4%2F3Xo35sSu5gLA5s518B6pOsNtAiEA9dRDKE9w7guMFLYT1brFESsaRH%2BOi4pFudYujPAlnAwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMqn60FjNfzp0CW9ircA2acQfwsfBJ6%2FBkG%2BsuNo%2BfjN%2BAmKgXQzuRPYOJQF9RnVeaeVyGlyV93hG1hbYNXgnVGtUVhnQCBA1Kq8vHpWtq7B62kEIGeh003%2F%2B5UfJ1gNb6LA2ZmFG9a69X7ZHyFIQGbQWw8x%2BeQO1qQtu%2BzwcGWDbpEnqTtvO%2FOGRI286hFwy%2BEIfMqYYr4MO%2FyTgM4K8PX7Ptrai5cCIDcyMa8Yd47iNKat79xkCrQEezrqMnf1XEqq5mLrd04z2k815Pd8XH%2BrLXhXhOcnqrwKuzg8Oo2fEQD5xmTnqHar5uxVnLIGVLL8%2BL11P7RJ8JdDdNrqIMI%2FntqWDFur9ZtDXc%2F1rqm68R1Evp0nBNWsb69VwABFO5I4IaXRE7pCpmLzI1yW5GSrleTVWgP5uUBNwSND%2F2pn%2FNAnhuxXzYlQUFU5OvltVGFoUw5kfKeMScmeSFqXUnePQkgvyMFXJzJuCZC%2F%2Bdk%2F0eu0sjPJVv0OXh3nrIiMOzglmd6A9jexGKOiNINh0DyOEOKK4qpg28ET1y6YeDoEmF9rE44GyFpCfxgMR%2BgQYwl3yChMJUKQhjZplSa%2B1d5vOClHWII4Pe%2BiKjijGj7uc%2FcSJz9Uyrrn18ZerF3tZNHMHV64Rzaaut%2FMK6R2M0GOqUBVCW9Zp%2BJ%2FLipYq4ADwyZvzzYJ6ABHMKg8A%2F2OVdXSOcAuD39zlhbZoEAUtWWnCoNA8Rf%2FvdwA5O0%2Fo1qcGuLNgcnyO4L7%2B3Ntd4%2F%2FtEvHxrQDLQ0NpNs2a8S1jozqlCzKNsLynEpghhM6eENokjmB8S%2FCMzd83dG2wmmZxX1qxO4Z2Q67PHSSSBQKikC735WryGThfEuWI54PHOms5ykTq%2Bykm%2BB&X-Amz-Signature=7c51eee96598831642e9e4d9c326c3b41a2cbae931ffdfc00d7d4fad56f63210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
