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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZWF5NPI%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFpnbDb26AP5jmqsgBxxmT6fDRWG9xLM9Cq2yUCP9J%2BeAiAhIJ0hYbTOp4uARV97SFEbPdISTu85eDrDqGHrELfpGyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9Gtl1EiHLFDzk0pKtwDycRPS8lTlEb8C1URZ%2B4u0z0nG1MlULC7k8kcyoJbCixe88FgCgkzTRL4mdSBVgw%2B6dSIJSLEsYNB5ph7KCfwkL8Mr%2FA1FPqjunYGmyO1z4wgf0fTIx%2FH8M3Hij1h3hqRy%2Fmv27ObnfqvbslOqpNPEyG8%2B5ueNfEKWWzRVX95aXLm6xbgDhMpDib0XJ0z4EaGqlk%2Ft%2F0jUKZY8MzFdY1otTmXvcPsp0UBuJ0nO0WiKwoRaPbNgpeTCEgT45LDtvodqQHRKGk19F4PrBl1EV1mG4eGbe8rL9sGh4ww4i9i%2FX8TY%2BPJestqebrJBXsKAtliCzjmCRpHSbfvaHibxKWVyyTCVvdxFkHPdF9t50ZHlMykBPohFa7T50WjFz40Ayem%2FM7arndmeThBN00pHIvWQqlUOUmQoJqYMXRTuKJ5KtmLqcn%2B5DkqzFJzXHacUsetBu8BB2Lr1SyOzob4%2BD4WwTBdnpun42GKxfqSyDG3fBMWOZWlxdIjL9n4RpOfcw%2BCyY5v7hz93C2l5sphoP7EaAQ7NgFXvKgcCYCEIFXPJLr6S1hNIAMteIT1VPbWV3fkK%2Fw9vp5HUPgCsVqrwBv6RA7RUhpilAw6%2FEk0Ge05Ik4Q2zR%2FDNbqqfSLPQsw363bxwY6pgEx6PiNsXdRmAqve9D11yM5Du3Xab17OoeMw0c%2B%2BQjIXLr6agkwpKcpH%2BWipY3QDODwDshWl7IwehCb01lOOaIBVquoMKsEUyg9n9IIx7PaTeIAfSXdgeqsyoc4aiVDLKx6ITx6RoafCygAHS5fzrot4fSi999rBGpE7EFkVrCyxcSV6kkc7ur%2FCpgj0w5qYXxHhSLtoS1p6RwP1wz74q9z9qWPOoM3&X-Amz-Signature=2b7465c58c00e10416fed97e5f1f0a7c2dde9abe092fd4bc8736d5bd0ee07a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZWF5NPI%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFpnbDb26AP5jmqsgBxxmT6fDRWG9xLM9Cq2yUCP9J%2BeAiAhIJ0hYbTOp4uARV97SFEbPdISTu85eDrDqGHrELfpGyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9Gtl1EiHLFDzk0pKtwDycRPS8lTlEb8C1URZ%2B4u0z0nG1MlULC7k8kcyoJbCixe88FgCgkzTRL4mdSBVgw%2B6dSIJSLEsYNB5ph7KCfwkL8Mr%2FA1FPqjunYGmyO1z4wgf0fTIx%2FH8M3Hij1h3hqRy%2Fmv27ObnfqvbslOqpNPEyG8%2B5ueNfEKWWzRVX95aXLm6xbgDhMpDib0XJ0z4EaGqlk%2Ft%2F0jUKZY8MzFdY1otTmXvcPsp0UBuJ0nO0WiKwoRaPbNgpeTCEgT45LDtvodqQHRKGk19F4PrBl1EV1mG4eGbe8rL9sGh4ww4i9i%2FX8TY%2BPJestqebrJBXsKAtliCzjmCRpHSbfvaHibxKWVyyTCVvdxFkHPdF9t50ZHlMykBPohFa7T50WjFz40Ayem%2FM7arndmeThBN00pHIvWQqlUOUmQoJqYMXRTuKJ5KtmLqcn%2B5DkqzFJzXHacUsetBu8BB2Lr1SyOzob4%2BD4WwTBdnpun42GKxfqSyDG3fBMWOZWlxdIjL9n4RpOfcw%2BCyY5v7hz93C2l5sphoP7EaAQ7NgFXvKgcCYCEIFXPJLr6S1hNIAMteIT1VPbWV3fkK%2Fw9vp5HUPgCsVqrwBv6RA7RUhpilAw6%2FEk0Ge05Ik4Q2zR%2FDNbqqfSLPQsw363bxwY6pgEx6PiNsXdRmAqve9D11yM5Du3Xab17OoeMw0c%2B%2BQjIXLr6agkwpKcpH%2BWipY3QDODwDshWl7IwehCb01lOOaIBVquoMKsEUyg9n9IIx7PaTeIAfSXdgeqsyoc4aiVDLKx6ITx6RoafCygAHS5fzrot4fSi999rBGpE7EFkVrCyxcSV6kkc7ur%2FCpgj0w5qYXxHhSLtoS1p6RwP1wz74q9z9qWPOoM3&X-Amz-Signature=356fdbae74e7d3b5b216cec5ea1308185b8c57d2b84d01f29c31ebcfa45133e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZWF5NPI%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFpnbDb26AP5jmqsgBxxmT6fDRWG9xLM9Cq2yUCP9J%2BeAiAhIJ0hYbTOp4uARV97SFEbPdISTu85eDrDqGHrELfpGyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9Gtl1EiHLFDzk0pKtwDycRPS8lTlEb8C1URZ%2B4u0z0nG1MlULC7k8kcyoJbCixe88FgCgkzTRL4mdSBVgw%2B6dSIJSLEsYNB5ph7KCfwkL8Mr%2FA1FPqjunYGmyO1z4wgf0fTIx%2FH8M3Hij1h3hqRy%2Fmv27ObnfqvbslOqpNPEyG8%2B5ueNfEKWWzRVX95aXLm6xbgDhMpDib0XJ0z4EaGqlk%2Ft%2F0jUKZY8MzFdY1otTmXvcPsp0UBuJ0nO0WiKwoRaPbNgpeTCEgT45LDtvodqQHRKGk19F4PrBl1EV1mG4eGbe8rL9sGh4ww4i9i%2FX8TY%2BPJestqebrJBXsKAtliCzjmCRpHSbfvaHibxKWVyyTCVvdxFkHPdF9t50ZHlMykBPohFa7T50WjFz40Ayem%2FM7arndmeThBN00pHIvWQqlUOUmQoJqYMXRTuKJ5KtmLqcn%2B5DkqzFJzXHacUsetBu8BB2Lr1SyOzob4%2BD4WwTBdnpun42GKxfqSyDG3fBMWOZWlxdIjL9n4RpOfcw%2BCyY5v7hz93C2l5sphoP7EaAQ7NgFXvKgcCYCEIFXPJLr6S1hNIAMteIT1VPbWV3fkK%2Fw9vp5HUPgCsVqrwBv6RA7RUhpilAw6%2FEk0Ge05Ik4Q2zR%2FDNbqqfSLPQsw363bxwY6pgEx6PiNsXdRmAqve9D11yM5Du3Xab17OoeMw0c%2B%2BQjIXLr6agkwpKcpH%2BWipY3QDODwDshWl7IwehCb01lOOaIBVquoMKsEUyg9n9IIx7PaTeIAfSXdgeqsyoc4aiVDLKx6ITx6RoafCygAHS5fzrot4fSi999rBGpE7EFkVrCyxcSV6kkc7ur%2FCpgj0w5qYXxHhSLtoS1p6RwP1wz74q9z9qWPOoM3&X-Amz-Signature=cb7549138c3ac440c486d602789f5ca3311fe9f33f2a136c97f41b6def5cb04a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZWF5NPI%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFpnbDb26AP5jmqsgBxxmT6fDRWG9xLM9Cq2yUCP9J%2BeAiAhIJ0hYbTOp4uARV97SFEbPdISTu85eDrDqGHrELfpGyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9Gtl1EiHLFDzk0pKtwDycRPS8lTlEb8C1URZ%2B4u0z0nG1MlULC7k8kcyoJbCixe88FgCgkzTRL4mdSBVgw%2B6dSIJSLEsYNB5ph7KCfwkL8Mr%2FA1FPqjunYGmyO1z4wgf0fTIx%2FH8M3Hij1h3hqRy%2Fmv27ObnfqvbslOqpNPEyG8%2B5ueNfEKWWzRVX95aXLm6xbgDhMpDib0XJ0z4EaGqlk%2Ft%2F0jUKZY8MzFdY1otTmXvcPsp0UBuJ0nO0WiKwoRaPbNgpeTCEgT45LDtvodqQHRKGk19F4PrBl1EV1mG4eGbe8rL9sGh4ww4i9i%2FX8TY%2BPJestqebrJBXsKAtliCzjmCRpHSbfvaHibxKWVyyTCVvdxFkHPdF9t50ZHlMykBPohFa7T50WjFz40Ayem%2FM7arndmeThBN00pHIvWQqlUOUmQoJqYMXRTuKJ5KtmLqcn%2B5DkqzFJzXHacUsetBu8BB2Lr1SyOzob4%2BD4WwTBdnpun42GKxfqSyDG3fBMWOZWlxdIjL9n4RpOfcw%2BCyY5v7hz93C2l5sphoP7EaAQ7NgFXvKgcCYCEIFXPJLr6S1hNIAMteIT1VPbWV3fkK%2Fw9vp5HUPgCsVqrwBv6RA7RUhpilAw6%2FEk0Ge05Ik4Q2zR%2FDNbqqfSLPQsw363bxwY6pgEx6PiNsXdRmAqve9D11yM5Du3Xab17OoeMw0c%2B%2BQjIXLr6agkwpKcpH%2BWipY3QDODwDshWl7IwehCb01lOOaIBVquoMKsEUyg9n9IIx7PaTeIAfSXdgeqsyoc4aiVDLKx6ITx6RoafCygAHS5fzrot4fSi999rBGpE7EFkVrCyxcSV6kkc7ur%2FCpgj0w5qYXxHhSLtoS1p6RwP1wz74q9z9qWPOoM3&X-Amz-Signature=1f0009862365c1d8e6dbe3c9a6b5646b2ae7326a278251da197686b9f36307b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZWF5NPI%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFpnbDb26AP5jmqsgBxxmT6fDRWG9xLM9Cq2yUCP9J%2BeAiAhIJ0hYbTOp4uARV97SFEbPdISTu85eDrDqGHrELfpGyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9Gtl1EiHLFDzk0pKtwDycRPS8lTlEb8C1URZ%2B4u0z0nG1MlULC7k8kcyoJbCixe88FgCgkzTRL4mdSBVgw%2B6dSIJSLEsYNB5ph7KCfwkL8Mr%2FA1FPqjunYGmyO1z4wgf0fTIx%2FH8M3Hij1h3hqRy%2Fmv27ObnfqvbslOqpNPEyG8%2B5ueNfEKWWzRVX95aXLm6xbgDhMpDib0XJ0z4EaGqlk%2Ft%2F0jUKZY8MzFdY1otTmXvcPsp0UBuJ0nO0WiKwoRaPbNgpeTCEgT45LDtvodqQHRKGk19F4PrBl1EV1mG4eGbe8rL9sGh4ww4i9i%2FX8TY%2BPJestqebrJBXsKAtliCzjmCRpHSbfvaHibxKWVyyTCVvdxFkHPdF9t50ZHlMykBPohFa7T50WjFz40Ayem%2FM7arndmeThBN00pHIvWQqlUOUmQoJqYMXRTuKJ5KtmLqcn%2B5DkqzFJzXHacUsetBu8BB2Lr1SyOzob4%2BD4WwTBdnpun42GKxfqSyDG3fBMWOZWlxdIjL9n4RpOfcw%2BCyY5v7hz93C2l5sphoP7EaAQ7NgFXvKgcCYCEIFXPJLr6S1hNIAMteIT1VPbWV3fkK%2Fw9vp5HUPgCsVqrwBv6RA7RUhpilAw6%2FEk0Ge05Ik4Q2zR%2FDNbqqfSLPQsw363bxwY6pgEx6PiNsXdRmAqve9D11yM5Du3Xab17OoeMw0c%2B%2BQjIXLr6agkwpKcpH%2BWipY3QDODwDshWl7IwehCb01lOOaIBVquoMKsEUyg9n9IIx7PaTeIAfSXdgeqsyoc4aiVDLKx6ITx6RoafCygAHS5fzrot4fSi999rBGpE7EFkVrCyxcSV6kkc7ur%2FCpgj0w5qYXxHhSLtoS1p6RwP1wz74q9z9qWPOoM3&X-Amz-Signature=28d31129ee67c0cf600934648936068e7d3de1af5a121b5cf7e41063dbbed8b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZWF5NPI%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFpnbDb26AP5jmqsgBxxmT6fDRWG9xLM9Cq2yUCP9J%2BeAiAhIJ0hYbTOp4uARV97SFEbPdISTu85eDrDqGHrELfpGyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9Gtl1EiHLFDzk0pKtwDycRPS8lTlEb8C1URZ%2B4u0z0nG1MlULC7k8kcyoJbCixe88FgCgkzTRL4mdSBVgw%2B6dSIJSLEsYNB5ph7KCfwkL8Mr%2FA1FPqjunYGmyO1z4wgf0fTIx%2FH8M3Hij1h3hqRy%2Fmv27ObnfqvbslOqpNPEyG8%2B5ueNfEKWWzRVX95aXLm6xbgDhMpDib0XJ0z4EaGqlk%2Ft%2F0jUKZY8MzFdY1otTmXvcPsp0UBuJ0nO0WiKwoRaPbNgpeTCEgT45LDtvodqQHRKGk19F4PrBl1EV1mG4eGbe8rL9sGh4ww4i9i%2FX8TY%2BPJestqebrJBXsKAtliCzjmCRpHSbfvaHibxKWVyyTCVvdxFkHPdF9t50ZHlMykBPohFa7T50WjFz40Ayem%2FM7arndmeThBN00pHIvWQqlUOUmQoJqYMXRTuKJ5KtmLqcn%2B5DkqzFJzXHacUsetBu8BB2Lr1SyOzob4%2BD4WwTBdnpun42GKxfqSyDG3fBMWOZWlxdIjL9n4RpOfcw%2BCyY5v7hz93C2l5sphoP7EaAQ7NgFXvKgcCYCEIFXPJLr6S1hNIAMteIT1VPbWV3fkK%2Fw9vp5HUPgCsVqrwBv6RA7RUhpilAw6%2FEk0Ge05Ik4Q2zR%2FDNbqqfSLPQsw363bxwY6pgEx6PiNsXdRmAqve9D11yM5Du3Xab17OoeMw0c%2B%2BQjIXLr6agkwpKcpH%2BWipY3QDODwDshWl7IwehCb01lOOaIBVquoMKsEUyg9n9IIx7PaTeIAfSXdgeqsyoc4aiVDLKx6ITx6RoafCygAHS5fzrot4fSi999rBGpE7EFkVrCyxcSV6kkc7ur%2FCpgj0w5qYXxHhSLtoS1p6RwP1wz74q9z9qWPOoM3&X-Amz-Signature=0d296986696f6b9f0c940be2e2b0194e9d2c01599c290f27b84e3d4bc1fb64ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZWF5NPI%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFpnbDb26AP5jmqsgBxxmT6fDRWG9xLM9Cq2yUCP9J%2BeAiAhIJ0hYbTOp4uARV97SFEbPdISTu85eDrDqGHrELfpGyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9Gtl1EiHLFDzk0pKtwDycRPS8lTlEb8C1URZ%2B4u0z0nG1MlULC7k8kcyoJbCixe88FgCgkzTRL4mdSBVgw%2B6dSIJSLEsYNB5ph7KCfwkL8Mr%2FA1FPqjunYGmyO1z4wgf0fTIx%2FH8M3Hij1h3hqRy%2Fmv27ObnfqvbslOqpNPEyG8%2B5ueNfEKWWzRVX95aXLm6xbgDhMpDib0XJ0z4EaGqlk%2Ft%2F0jUKZY8MzFdY1otTmXvcPsp0UBuJ0nO0WiKwoRaPbNgpeTCEgT45LDtvodqQHRKGk19F4PrBl1EV1mG4eGbe8rL9sGh4ww4i9i%2FX8TY%2BPJestqebrJBXsKAtliCzjmCRpHSbfvaHibxKWVyyTCVvdxFkHPdF9t50ZHlMykBPohFa7T50WjFz40Ayem%2FM7arndmeThBN00pHIvWQqlUOUmQoJqYMXRTuKJ5KtmLqcn%2B5DkqzFJzXHacUsetBu8BB2Lr1SyOzob4%2BD4WwTBdnpun42GKxfqSyDG3fBMWOZWlxdIjL9n4RpOfcw%2BCyY5v7hz93C2l5sphoP7EaAQ7NgFXvKgcCYCEIFXPJLr6S1hNIAMteIT1VPbWV3fkK%2Fw9vp5HUPgCsVqrwBv6RA7RUhpilAw6%2FEk0Ge05Ik4Q2zR%2FDNbqqfSLPQsw363bxwY6pgEx6PiNsXdRmAqve9D11yM5Du3Xab17OoeMw0c%2B%2BQjIXLr6agkwpKcpH%2BWipY3QDODwDshWl7IwehCb01lOOaIBVquoMKsEUyg9n9IIx7PaTeIAfSXdgeqsyoc4aiVDLKx6ITx6RoafCygAHS5fzrot4fSi999rBGpE7EFkVrCyxcSV6kkc7ur%2FCpgj0w5qYXxHhSLtoS1p6RwP1wz74q9z9qWPOoM3&X-Amz-Signature=d9fa7c46dda858ce2b7ae098ad4f19f7a6355646454daa98a655d9a121c07414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZWF5NPI%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFpnbDb26AP5jmqsgBxxmT6fDRWG9xLM9Cq2yUCP9J%2BeAiAhIJ0hYbTOp4uARV97SFEbPdISTu85eDrDqGHrELfpGyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9Gtl1EiHLFDzk0pKtwDycRPS8lTlEb8C1URZ%2B4u0z0nG1MlULC7k8kcyoJbCixe88FgCgkzTRL4mdSBVgw%2B6dSIJSLEsYNB5ph7KCfwkL8Mr%2FA1FPqjunYGmyO1z4wgf0fTIx%2FH8M3Hij1h3hqRy%2Fmv27ObnfqvbslOqpNPEyG8%2B5ueNfEKWWzRVX95aXLm6xbgDhMpDib0XJ0z4EaGqlk%2Ft%2F0jUKZY8MzFdY1otTmXvcPsp0UBuJ0nO0WiKwoRaPbNgpeTCEgT45LDtvodqQHRKGk19F4PrBl1EV1mG4eGbe8rL9sGh4ww4i9i%2FX8TY%2BPJestqebrJBXsKAtliCzjmCRpHSbfvaHibxKWVyyTCVvdxFkHPdF9t50ZHlMykBPohFa7T50WjFz40Ayem%2FM7arndmeThBN00pHIvWQqlUOUmQoJqYMXRTuKJ5KtmLqcn%2B5DkqzFJzXHacUsetBu8BB2Lr1SyOzob4%2BD4WwTBdnpun42GKxfqSyDG3fBMWOZWlxdIjL9n4RpOfcw%2BCyY5v7hz93C2l5sphoP7EaAQ7NgFXvKgcCYCEIFXPJLr6S1hNIAMteIT1VPbWV3fkK%2Fw9vp5HUPgCsVqrwBv6RA7RUhpilAw6%2FEk0Ge05Ik4Q2zR%2FDNbqqfSLPQsw363bxwY6pgEx6PiNsXdRmAqve9D11yM5Du3Xab17OoeMw0c%2B%2BQjIXLr6agkwpKcpH%2BWipY3QDODwDshWl7IwehCb01lOOaIBVquoMKsEUyg9n9IIx7PaTeIAfSXdgeqsyoc4aiVDLKx6ITx6RoafCygAHS5fzrot4fSi999rBGpE7EFkVrCyxcSV6kkc7ur%2FCpgj0w5qYXxHhSLtoS1p6RwP1wz74q9z9qWPOoM3&X-Amz-Signature=711aca691386b3bb7885d33f8d44b77e80a0cb8b6cc75f9c529af73fd92c1734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
