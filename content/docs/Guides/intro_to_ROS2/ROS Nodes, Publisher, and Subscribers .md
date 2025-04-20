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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMNPTFN5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FR9lzxFawOhTssRkrjI9N%2FPU3t3xa8hdAMn2ng%2BOkQAIgaAFNlS4XwsuI1YOnCogPoHm85p%2FANzwTX6E6HWkYZg4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmvekj1CA%2B%2Fd30xhyrcAwTWmEmLnWggMDAL%2FxaO9ZdgsIK%2F%2Bt6%2BUN9hVgGrerBF2%2B9Kke5j7aFqbPIIuAiR9BVqmHPT7GNrgzvfLMNIALoYZM%2BIvHNexx%2FZ6Io7fXKLOIAr7%2FMgJi3vSOVuUYo%2F%2B0Uon2uOo5Z%2F5Yqgs2AemUYHcyhnoErdGj3DQQE1LkAZJSrr0dWwVCvxpbo7yABeDP9xbu7Evi4tgy3VZ74efzvwzlR8QTZGPpOJV1mI5xUenS%2BvAkjcYQ4%2BhaKeRgIthjrrCodI3kCkx5RNe%2BDTcnmxSFNnfoxOx3EXA5cuaO1FM0qwlOGhWO3xJgoXDRFod8Ve0IRl2cbtCAoOi%2BLbze2Li6KIYA4i4%2FGbQHcfffnBIj%2FAeGf5btDWjmV4pm2lou4BWnDXXTDk9RjiJe4rHfd1kh64PpKwD1yta5X6%2BNPdRehghisZNdQ6KmhxMBhNwWhX8O4eTpJvCbbVdOOPRRXWlmVcu3aBhtPISxkVIsxZoXOulr10qEKZ%2B2W2TGxHODm3NRhftHmE73d6dC0cNXrIu39nEj8XrnxCcL2ymA3rJpZdOr7iOakeYCIfHazAApVJcUR%2Blm4Nb%2BJyp%2BHzQPA6axrsG5lgF%2FmyG0KCFux9xdUk4jG9FOEPKtHwMNyBkcAGOqUB0DJJcc2yD%2BUb5zdoocsmkg59NFRXAX4%2FoHaObPBNYS5pwYk4N5G1RLMwT8OJFh9XmblVIKY8bebo96bXNwbnFDkEpYZ85Ydvmlapoza1n1Y4uMU7kpDh52aShw2KAzu%2BLgsUUGmQrqE0bE9t5h7%2BfqexSOn8yfN5GF3QueWQOL8FB68nWEHFUd%2FqMHUJZu%2B3F6DXsn3ddv4OnAuf12y6wvgVaHNO&X-Amz-Signature=dd88b75680081db30d1bb32d68ad38ad9594a520b1690f12477a4ac63a4e7cde&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMNPTFN5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FR9lzxFawOhTssRkrjI9N%2FPU3t3xa8hdAMn2ng%2BOkQAIgaAFNlS4XwsuI1YOnCogPoHm85p%2FANzwTX6E6HWkYZg4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmvekj1CA%2B%2Fd30xhyrcAwTWmEmLnWggMDAL%2FxaO9ZdgsIK%2F%2Bt6%2BUN9hVgGrerBF2%2B9Kke5j7aFqbPIIuAiR9BVqmHPT7GNrgzvfLMNIALoYZM%2BIvHNexx%2FZ6Io7fXKLOIAr7%2FMgJi3vSOVuUYo%2F%2B0Uon2uOo5Z%2F5Yqgs2AemUYHcyhnoErdGj3DQQE1LkAZJSrr0dWwVCvxpbo7yABeDP9xbu7Evi4tgy3VZ74efzvwzlR8QTZGPpOJV1mI5xUenS%2BvAkjcYQ4%2BhaKeRgIthjrrCodI3kCkx5RNe%2BDTcnmxSFNnfoxOx3EXA5cuaO1FM0qwlOGhWO3xJgoXDRFod8Ve0IRl2cbtCAoOi%2BLbze2Li6KIYA4i4%2FGbQHcfffnBIj%2FAeGf5btDWjmV4pm2lou4BWnDXXTDk9RjiJe4rHfd1kh64PpKwD1yta5X6%2BNPdRehghisZNdQ6KmhxMBhNwWhX8O4eTpJvCbbVdOOPRRXWlmVcu3aBhtPISxkVIsxZoXOulr10qEKZ%2B2W2TGxHODm3NRhftHmE73d6dC0cNXrIu39nEj8XrnxCcL2ymA3rJpZdOr7iOakeYCIfHazAApVJcUR%2Blm4Nb%2BJyp%2BHzQPA6axrsG5lgF%2FmyG0KCFux9xdUk4jG9FOEPKtHwMNyBkcAGOqUB0DJJcc2yD%2BUb5zdoocsmkg59NFRXAX4%2FoHaObPBNYS5pwYk4N5G1RLMwT8OJFh9XmblVIKY8bebo96bXNwbnFDkEpYZ85Ydvmlapoza1n1Y4uMU7kpDh52aShw2KAzu%2BLgsUUGmQrqE0bE9t5h7%2BfqexSOn8yfN5GF3QueWQOL8FB68nWEHFUd%2FqMHUJZu%2B3F6DXsn3ddv4OnAuf12y6wvgVaHNO&X-Amz-Signature=396729847d3f4f64dc58b04fcf4ab9fadf75ebf74a152ba4335dcfe7614313d7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMNPTFN5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FR9lzxFawOhTssRkrjI9N%2FPU3t3xa8hdAMn2ng%2BOkQAIgaAFNlS4XwsuI1YOnCogPoHm85p%2FANzwTX6E6HWkYZg4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmvekj1CA%2B%2Fd30xhyrcAwTWmEmLnWggMDAL%2FxaO9ZdgsIK%2F%2Bt6%2BUN9hVgGrerBF2%2B9Kke5j7aFqbPIIuAiR9BVqmHPT7GNrgzvfLMNIALoYZM%2BIvHNexx%2FZ6Io7fXKLOIAr7%2FMgJi3vSOVuUYo%2F%2B0Uon2uOo5Z%2F5Yqgs2AemUYHcyhnoErdGj3DQQE1LkAZJSrr0dWwVCvxpbo7yABeDP9xbu7Evi4tgy3VZ74efzvwzlR8QTZGPpOJV1mI5xUenS%2BvAkjcYQ4%2BhaKeRgIthjrrCodI3kCkx5RNe%2BDTcnmxSFNnfoxOx3EXA5cuaO1FM0qwlOGhWO3xJgoXDRFod8Ve0IRl2cbtCAoOi%2BLbze2Li6KIYA4i4%2FGbQHcfffnBIj%2FAeGf5btDWjmV4pm2lou4BWnDXXTDk9RjiJe4rHfd1kh64PpKwD1yta5X6%2BNPdRehghisZNdQ6KmhxMBhNwWhX8O4eTpJvCbbVdOOPRRXWlmVcu3aBhtPISxkVIsxZoXOulr10qEKZ%2B2W2TGxHODm3NRhftHmE73d6dC0cNXrIu39nEj8XrnxCcL2ymA3rJpZdOr7iOakeYCIfHazAApVJcUR%2Blm4Nb%2BJyp%2BHzQPA6axrsG5lgF%2FmyG0KCFux9xdUk4jG9FOEPKtHwMNyBkcAGOqUB0DJJcc2yD%2BUb5zdoocsmkg59NFRXAX4%2FoHaObPBNYS5pwYk4N5G1RLMwT8OJFh9XmblVIKY8bebo96bXNwbnFDkEpYZ85Ydvmlapoza1n1Y4uMU7kpDh52aShw2KAzu%2BLgsUUGmQrqE0bE9t5h7%2BfqexSOn8yfN5GF3QueWQOL8FB68nWEHFUd%2FqMHUJZu%2B3F6DXsn3ddv4OnAuf12y6wvgVaHNO&X-Amz-Signature=8ac02887435355e75a8196ff1298ab2cfb772db9362ccb3cecbf1c45f758f26e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMNPTFN5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FR9lzxFawOhTssRkrjI9N%2FPU3t3xa8hdAMn2ng%2BOkQAIgaAFNlS4XwsuI1YOnCogPoHm85p%2FANzwTX6E6HWkYZg4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmvekj1CA%2B%2Fd30xhyrcAwTWmEmLnWggMDAL%2FxaO9ZdgsIK%2F%2Bt6%2BUN9hVgGrerBF2%2B9Kke5j7aFqbPIIuAiR9BVqmHPT7GNrgzvfLMNIALoYZM%2BIvHNexx%2FZ6Io7fXKLOIAr7%2FMgJi3vSOVuUYo%2F%2B0Uon2uOo5Z%2F5Yqgs2AemUYHcyhnoErdGj3DQQE1LkAZJSrr0dWwVCvxpbo7yABeDP9xbu7Evi4tgy3VZ74efzvwzlR8QTZGPpOJV1mI5xUenS%2BvAkjcYQ4%2BhaKeRgIthjrrCodI3kCkx5RNe%2BDTcnmxSFNnfoxOx3EXA5cuaO1FM0qwlOGhWO3xJgoXDRFod8Ve0IRl2cbtCAoOi%2BLbze2Li6KIYA4i4%2FGbQHcfffnBIj%2FAeGf5btDWjmV4pm2lou4BWnDXXTDk9RjiJe4rHfd1kh64PpKwD1yta5X6%2BNPdRehghisZNdQ6KmhxMBhNwWhX8O4eTpJvCbbVdOOPRRXWlmVcu3aBhtPISxkVIsxZoXOulr10qEKZ%2B2W2TGxHODm3NRhftHmE73d6dC0cNXrIu39nEj8XrnxCcL2ymA3rJpZdOr7iOakeYCIfHazAApVJcUR%2Blm4Nb%2BJyp%2BHzQPA6axrsG5lgF%2FmyG0KCFux9xdUk4jG9FOEPKtHwMNyBkcAGOqUB0DJJcc2yD%2BUb5zdoocsmkg59NFRXAX4%2FoHaObPBNYS5pwYk4N5G1RLMwT8OJFh9XmblVIKY8bebo96bXNwbnFDkEpYZ85Ydvmlapoza1n1Y4uMU7kpDh52aShw2KAzu%2BLgsUUGmQrqE0bE9t5h7%2BfqexSOn8yfN5GF3QueWQOL8FB68nWEHFUd%2FqMHUJZu%2B3F6DXsn3ddv4OnAuf12y6wvgVaHNO&X-Amz-Signature=1f99884613746a491e06dd18bbd61ad2b5c0e7242f0de3c02aa85834cd09c5d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMNPTFN5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FR9lzxFawOhTssRkrjI9N%2FPU3t3xa8hdAMn2ng%2BOkQAIgaAFNlS4XwsuI1YOnCogPoHm85p%2FANzwTX6E6HWkYZg4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmvekj1CA%2B%2Fd30xhyrcAwTWmEmLnWggMDAL%2FxaO9ZdgsIK%2F%2Bt6%2BUN9hVgGrerBF2%2B9Kke5j7aFqbPIIuAiR9BVqmHPT7GNrgzvfLMNIALoYZM%2BIvHNexx%2FZ6Io7fXKLOIAr7%2FMgJi3vSOVuUYo%2F%2B0Uon2uOo5Z%2F5Yqgs2AemUYHcyhnoErdGj3DQQE1LkAZJSrr0dWwVCvxpbo7yABeDP9xbu7Evi4tgy3VZ74efzvwzlR8QTZGPpOJV1mI5xUenS%2BvAkjcYQ4%2BhaKeRgIthjrrCodI3kCkx5RNe%2BDTcnmxSFNnfoxOx3EXA5cuaO1FM0qwlOGhWO3xJgoXDRFod8Ve0IRl2cbtCAoOi%2BLbze2Li6KIYA4i4%2FGbQHcfffnBIj%2FAeGf5btDWjmV4pm2lou4BWnDXXTDk9RjiJe4rHfd1kh64PpKwD1yta5X6%2BNPdRehghisZNdQ6KmhxMBhNwWhX8O4eTpJvCbbVdOOPRRXWlmVcu3aBhtPISxkVIsxZoXOulr10qEKZ%2B2W2TGxHODm3NRhftHmE73d6dC0cNXrIu39nEj8XrnxCcL2ymA3rJpZdOr7iOakeYCIfHazAApVJcUR%2Blm4Nb%2BJyp%2BHzQPA6axrsG5lgF%2FmyG0KCFux9xdUk4jG9FOEPKtHwMNyBkcAGOqUB0DJJcc2yD%2BUb5zdoocsmkg59NFRXAX4%2FoHaObPBNYS5pwYk4N5G1RLMwT8OJFh9XmblVIKY8bebo96bXNwbnFDkEpYZ85Ydvmlapoza1n1Y4uMU7kpDh52aShw2KAzu%2BLgsUUGmQrqE0bE9t5h7%2BfqexSOn8yfN5GF3QueWQOL8FB68nWEHFUd%2FqMHUJZu%2B3F6DXsn3ddv4OnAuf12y6wvgVaHNO&X-Amz-Signature=999efbcb39684542f1fb8f91e778cab07473a6d0b5965faf0c91deaa6191754a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMNPTFN5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FR9lzxFawOhTssRkrjI9N%2FPU3t3xa8hdAMn2ng%2BOkQAIgaAFNlS4XwsuI1YOnCogPoHm85p%2FANzwTX6E6HWkYZg4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmvekj1CA%2B%2Fd30xhyrcAwTWmEmLnWggMDAL%2FxaO9ZdgsIK%2F%2Bt6%2BUN9hVgGrerBF2%2B9Kke5j7aFqbPIIuAiR9BVqmHPT7GNrgzvfLMNIALoYZM%2BIvHNexx%2FZ6Io7fXKLOIAr7%2FMgJi3vSOVuUYo%2F%2B0Uon2uOo5Z%2F5Yqgs2AemUYHcyhnoErdGj3DQQE1LkAZJSrr0dWwVCvxpbo7yABeDP9xbu7Evi4tgy3VZ74efzvwzlR8QTZGPpOJV1mI5xUenS%2BvAkjcYQ4%2BhaKeRgIthjrrCodI3kCkx5RNe%2BDTcnmxSFNnfoxOx3EXA5cuaO1FM0qwlOGhWO3xJgoXDRFod8Ve0IRl2cbtCAoOi%2BLbze2Li6KIYA4i4%2FGbQHcfffnBIj%2FAeGf5btDWjmV4pm2lou4BWnDXXTDk9RjiJe4rHfd1kh64PpKwD1yta5X6%2BNPdRehghisZNdQ6KmhxMBhNwWhX8O4eTpJvCbbVdOOPRRXWlmVcu3aBhtPISxkVIsxZoXOulr10qEKZ%2B2W2TGxHODm3NRhftHmE73d6dC0cNXrIu39nEj8XrnxCcL2ymA3rJpZdOr7iOakeYCIfHazAApVJcUR%2Blm4Nb%2BJyp%2BHzQPA6axrsG5lgF%2FmyG0KCFux9xdUk4jG9FOEPKtHwMNyBkcAGOqUB0DJJcc2yD%2BUb5zdoocsmkg59NFRXAX4%2FoHaObPBNYS5pwYk4N5G1RLMwT8OJFh9XmblVIKY8bebo96bXNwbnFDkEpYZ85Ydvmlapoza1n1Y4uMU7kpDh52aShw2KAzu%2BLgsUUGmQrqE0bE9t5h7%2BfqexSOn8yfN5GF3QueWQOL8FB68nWEHFUd%2FqMHUJZu%2B3F6DXsn3ddv4OnAuf12y6wvgVaHNO&X-Amz-Signature=ee913d6643194472d1095f07c4137a975d1fbe93d9e7b5c69a853c8d8b8dfee2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMNPTFN5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FR9lzxFawOhTssRkrjI9N%2FPU3t3xa8hdAMn2ng%2BOkQAIgaAFNlS4XwsuI1YOnCogPoHm85p%2FANzwTX6E6HWkYZg4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmvekj1CA%2B%2Fd30xhyrcAwTWmEmLnWggMDAL%2FxaO9ZdgsIK%2F%2Bt6%2BUN9hVgGrerBF2%2B9Kke5j7aFqbPIIuAiR9BVqmHPT7GNrgzvfLMNIALoYZM%2BIvHNexx%2FZ6Io7fXKLOIAr7%2FMgJi3vSOVuUYo%2F%2B0Uon2uOo5Z%2F5Yqgs2AemUYHcyhnoErdGj3DQQE1LkAZJSrr0dWwVCvxpbo7yABeDP9xbu7Evi4tgy3VZ74efzvwzlR8QTZGPpOJV1mI5xUenS%2BvAkjcYQ4%2BhaKeRgIthjrrCodI3kCkx5RNe%2BDTcnmxSFNnfoxOx3EXA5cuaO1FM0qwlOGhWO3xJgoXDRFod8Ve0IRl2cbtCAoOi%2BLbze2Li6KIYA4i4%2FGbQHcfffnBIj%2FAeGf5btDWjmV4pm2lou4BWnDXXTDk9RjiJe4rHfd1kh64PpKwD1yta5X6%2BNPdRehghisZNdQ6KmhxMBhNwWhX8O4eTpJvCbbVdOOPRRXWlmVcu3aBhtPISxkVIsxZoXOulr10qEKZ%2B2W2TGxHODm3NRhftHmE73d6dC0cNXrIu39nEj8XrnxCcL2ymA3rJpZdOr7iOakeYCIfHazAApVJcUR%2Blm4Nb%2BJyp%2BHzQPA6axrsG5lgF%2FmyG0KCFux9xdUk4jG9FOEPKtHwMNyBkcAGOqUB0DJJcc2yD%2BUb5zdoocsmkg59NFRXAX4%2FoHaObPBNYS5pwYk4N5G1RLMwT8OJFh9XmblVIKY8bebo96bXNwbnFDkEpYZ85Ydvmlapoza1n1Y4uMU7kpDh52aShw2KAzu%2BLgsUUGmQrqE0bE9t5h7%2BfqexSOn8yfN5GF3QueWQOL8FB68nWEHFUd%2FqMHUJZu%2B3F6DXsn3ddv4OnAuf12y6wvgVaHNO&X-Amz-Signature=88d24b8879b4aceb353bca045531402b69bb94c3993bc11a07cdf2b464f787b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMNPTFN5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FR9lzxFawOhTssRkrjI9N%2FPU3t3xa8hdAMn2ng%2BOkQAIgaAFNlS4XwsuI1YOnCogPoHm85p%2FANzwTX6E6HWkYZg4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmvekj1CA%2B%2Fd30xhyrcAwTWmEmLnWggMDAL%2FxaO9ZdgsIK%2F%2Bt6%2BUN9hVgGrerBF2%2B9Kke5j7aFqbPIIuAiR9BVqmHPT7GNrgzvfLMNIALoYZM%2BIvHNexx%2FZ6Io7fXKLOIAr7%2FMgJi3vSOVuUYo%2F%2B0Uon2uOo5Z%2F5Yqgs2AemUYHcyhnoErdGj3DQQE1LkAZJSrr0dWwVCvxpbo7yABeDP9xbu7Evi4tgy3VZ74efzvwzlR8QTZGPpOJV1mI5xUenS%2BvAkjcYQ4%2BhaKeRgIthjrrCodI3kCkx5RNe%2BDTcnmxSFNnfoxOx3EXA5cuaO1FM0qwlOGhWO3xJgoXDRFod8Ve0IRl2cbtCAoOi%2BLbze2Li6KIYA4i4%2FGbQHcfffnBIj%2FAeGf5btDWjmV4pm2lou4BWnDXXTDk9RjiJe4rHfd1kh64PpKwD1yta5X6%2BNPdRehghisZNdQ6KmhxMBhNwWhX8O4eTpJvCbbVdOOPRRXWlmVcu3aBhtPISxkVIsxZoXOulr10qEKZ%2B2W2TGxHODm3NRhftHmE73d6dC0cNXrIu39nEj8XrnxCcL2ymA3rJpZdOr7iOakeYCIfHazAApVJcUR%2Blm4Nb%2BJyp%2BHzQPA6axrsG5lgF%2FmyG0KCFux9xdUk4jG9FOEPKtHwMNyBkcAGOqUB0DJJcc2yD%2BUb5zdoocsmkg59NFRXAX4%2FoHaObPBNYS5pwYk4N5G1RLMwT8OJFh9XmblVIKY8bebo96bXNwbnFDkEpYZ85Ydvmlapoza1n1Y4uMU7kpDh52aShw2KAzu%2BLgsUUGmQrqE0bE9t5h7%2BfqexSOn8yfN5GF3QueWQOL8FB68nWEHFUd%2FqMHUJZu%2B3F6DXsn3ddv4OnAuf12y6wvgVaHNO&X-Amz-Signature=8a3129a21ac5a40a45aadfcbfa6867068109d97dc724baa3fdb6baf6e81f60fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
