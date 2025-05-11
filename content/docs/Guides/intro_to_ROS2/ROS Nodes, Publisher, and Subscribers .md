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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FYMKOB5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIH0LkIBqbSULahevtRFdynndFVxomVg5QtzSf4QS%2F1KWAiEAiacQRL7GQLsRHa41S0FSFIG9HaIshXRKLeVb02rO3GkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNs5h5L7DSvf29rfKyrcA%2B%2BxbxRatZ%2BzcR5zmh3sfXQUWdngG5thSzM6rB0LyWb37hZ39yOmfWvd%2BDPWyp%2Ft%2FWZIUfp4Pis4JY9PcCODdpKCDlGmgQIJpWmMojDi9ywhfDntWChFrnsvQfW%2FdU4uPgfv70QerMaAh%2FP2BakMyrRV8wtozOtvr86Wa3X%2F541rTK71sQSSZlIBTrHkRoPjo%2B7QSbgpH%2BV4U%2BYnOdqPLe5rnJEf8AGwN1Wxl01DuqReC8gztHoD0Bw%2BRgajH8KagVjrj1s1ygWw%2BAcWdaxW7iIvUmGM8QHPoXSFIqMKYt9rIQihTvuse7H%2BuA9p80xRxQep95qE53zUGzcvU1ArPQ%2FbkIigmjQl%2FUvizSiXcwkQX9CZFTvgT459NXeoZta4tBZVsZARxXb%2ByjfmtVlcY2%2FwornvYLMcvld%2FlJcFv4xmggNS%2B37yP6cOcHq4xkE%2Bzpbe6HZd%2FvnVKw%2Bjx1Q0jYUb94uVJnttkuQSWRhuQ%2B7vJ0KDZIlvn8zLKqvwVnruRGIGEzLoni719CBmqFs%2BgRcFi6p3euHIwvqb9eDkK9ksgCpZ3LEQ%2BKUfeJXg2m8w5jbjYABHULQaFDehIxEkJwokvYTWGO1qCaLN8rww4SBX7WbiQ29eqeTXb2oVMNDDgMEGOqUBBx4KINY2mgduFh1JM3IeTj6ZdSedbOmjWfuZoLQuoPGJ7YcWU%2B3%2BkmqXER3PMGqa9liDT2gnmg0CJp%2BFYAOEoLNEsq0X7vJzh9lYxYtnObveMDFl4V3HQ5uCDwrobojp5ZAssFObYa%2Fy8FLqRfUfGFp5d5RyREAnUUrcHV2H4kpmfHbycTnlC0sDREbFmLfOw5rxFUFuZt0k3WGWcC0jQIjkkoZj&X-Amz-Signature=3897a0f581875f7cad48b2bd2fb5bd0057769250138abb238ea946be5d451e80&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FYMKOB5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIH0LkIBqbSULahevtRFdynndFVxomVg5QtzSf4QS%2F1KWAiEAiacQRL7GQLsRHa41S0FSFIG9HaIshXRKLeVb02rO3GkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNs5h5L7DSvf29rfKyrcA%2B%2BxbxRatZ%2BzcR5zmh3sfXQUWdngG5thSzM6rB0LyWb37hZ39yOmfWvd%2BDPWyp%2Ft%2FWZIUfp4Pis4JY9PcCODdpKCDlGmgQIJpWmMojDi9ywhfDntWChFrnsvQfW%2FdU4uPgfv70QerMaAh%2FP2BakMyrRV8wtozOtvr86Wa3X%2F541rTK71sQSSZlIBTrHkRoPjo%2B7QSbgpH%2BV4U%2BYnOdqPLe5rnJEf8AGwN1Wxl01DuqReC8gztHoD0Bw%2BRgajH8KagVjrj1s1ygWw%2BAcWdaxW7iIvUmGM8QHPoXSFIqMKYt9rIQihTvuse7H%2BuA9p80xRxQep95qE53zUGzcvU1ArPQ%2FbkIigmjQl%2FUvizSiXcwkQX9CZFTvgT459NXeoZta4tBZVsZARxXb%2ByjfmtVlcY2%2FwornvYLMcvld%2FlJcFv4xmggNS%2B37yP6cOcHq4xkE%2Bzpbe6HZd%2FvnVKw%2Bjx1Q0jYUb94uVJnttkuQSWRhuQ%2B7vJ0KDZIlvn8zLKqvwVnruRGIGEzLoni719CBmqFs%2BgRcFi6p3euHIwvqb9eDkK9ksgCpZ3LEQ%2BKUfeJXg2m8w5jbjYABHULQaFDehIxEkJwokvYTWGO1qCaLN8rww4SBX7WbiQ29eqeTXb2oVMNDDgMEGOqUBBx4KINY2mgduFh1JM3IeTj6ZdSedbOmjWfuZoLQuoPGJ7YcWU%2B3%2BkmqXER3PMGqa9liDT2gnmg0CJp%2BFYAOEoLNEsq0X7vJzh9lYxYtnObveMDFl4V3HQ5uCDwrobojp5ZAssFObYa%2Fy8FLqRfUfGFp5d5RyREAnUUrcHV2H4kpmfHbycTnlC0sDREbFmLfOw5rxFUFuZt0k3WGWcC0jQIjkkoZj&X-Amz-Signature=eea735649c028138d3dd6ac603cdba110fb0aaf128f71a60cc3f87fbf08833f5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FYMKOB5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIH0LkIBqbSULahevtRFdynndFVxomVg5QtzSf4QS%2F1KWAiEAiacQRL7GQLsRHa41S0FSFIG9HaIshXRKLeVb02rO3GkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNs5h5L7DSvf29rfKyrcA%2B%2BxbxRatZ%2BzcR5zmh3sfXQUWdngG5thSzM6rB0LyWb37hZ39yOmfWvd%2BDPWyp%2Ft%2FWZIUfp4Pis4JY9PcCODdpKCDlGmgQIJpWmMojDi9ywhfDntWChFrnsvQfW%2FdU4uPgfv70QerMaAh%2FP2BakMyrRV8wtozOtvr86Wa3X%2F541rTK71sQSSZlIBTrHkRoPjo%2B7QSbgpH%2BV4U%2BYnOdqPLe5rnJEf8AGwN1Wxl01DuqReC8gztHoD0Bw%2BRgajH8KagVjrj1s1ygWw%2BAcWdaxW7iIvUmGM8QHPoXSFIqMKYt9rIQihTvuse7H%2BuA9p80xRxQep95qE53zUGzcvU1ArPQ%2FbkIigmjQl%2FUvizSiXcwkQX9CZFTvgT459NXeoZta4tBZVsZARxXb%2ByjfmtVlcY2%2FwornvYLMcvld%2FlJcFv4xmggNS%2B37yP6cOcHq4xkE%2Bzpbe6HZd%2FvnVKw%2Bjx1Q0jYUb94uVJnttkuQSWRhuQ%2B7vJ0KDZIlvn8zLKqvwVnruRGIGEzLoni719CBmqFs%2BgRcFi6p3euHIwvqb9eDkK9ksgCpZ3LEQ%2BKUfeJXg2m8w5jbjYABHULQaFDehIxEkJwokvYTWGO1qCaLN8rww4SBX7WbiQ29eqeTXb2oVMNDDgMEGOqUBBx4KINY2mgduFh1JM3IeTj6ZdSedbOmjWfuZoLQuoPGJ7YcWU%2B3%2BkmqXER3PMGqa9liDT2gnmg0CJp%2BFYAOEoLNEsq0X7vJzh9lYxYtnObveMDFl4V3HQ5uCDwrobojp5ZAssFObYa%2Fy8FLqRfUfGFp5d5RyREAnUUrcHV2H4kpmfHbycTnlC0sDREbFmLfOw5rxFUFuZt0k3WGWcC0jQIjkkoZj&X-Amz-Signature=c4a5d5a5a406c0609506b1531b6af2eb8afdbc5ef4fde72a9446aa77999c58f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FYMKOB5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIH0LkIBqbSULahevtRFdynndFVxomVg5QtzSf4QS%2F1KWAiEAiacQRL7GQLsRHa41S0FSFIG9HaIshXRKLeVb02rO3GkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNs5h5L7DSvf29rfKyrcA%2B%2BxbxRatZ%2BzcR5zmh3sfXQUWdngG5thSzM6rB0LyWb37hZ39yOmfWvd%2BDPWyp%2Ft%2FWZIUfp4Pis4JY9PcCODdpKCDlGmgQIJpWmMojDi9ywhfDntWChFrnsvQfW%2FdU4uPgfv70QerMaAh%2FP2BakMyrRV8wtozOtvr86Wa3X%2F541rTK71sQSSZlIBTrHkRoPjo%2B7QSbgpH%2BV4U%2BYnOdqPLe5rnJEf8AGwN1Wxl01DuqReC8gztHoD0Bw%2BRgajH8KagVjrj1s1ygWw%2BAcWdaxW7iIvUmGM8QHPoXSFIqMKYt9rIQihTvuse7H%2BuA9p80xRxQep95qE53zUGzcvU1ArPQ%2FbkIigmjQl%2FUvizSiXcwkQX9CZFTvgT459NXeoZta4tBZVsZARxXb%2ByjfmtVlcY2%2FwornvYLMcvld%2FlJcFv4xmggNS%2B37yP6cOcHq4xkE%2Bzpbe6HZd%2FvnVKw%2Bjx1Q0jYUb94uVJnttkuQSWRhuQ%2B7vJ0KDZIlvn8zLKqvwVnruRGIGEzLoni719CBmqFs%2BgRcFi6p3euHIwvqb9eDkK9ksgCpZ3LEQ%2BKUfeJXg2m8w5jbjYABHULQaFDehIxEkJwokvYTWGO1qCaLN8rww4SBX7WbiQ29eqeTXb2oVMNDDgMEGOqUBBx4KINY2mgduFh1JM3IeTj6ZdSedbOmjWfuZoLQuoPGJ7YcWU%2B3%2BkmqXER3PMGqa9liDT2gnmg0CJp%2BFYAOEoLNEsq0X7vJzh9lYxYtnObveMDFl4V3HQ5uCDwrobojp5ZAssFObYa%2Fy8FLqRfUfGFp5d5RyREAnUUrcHV2H4kpmfHbycTnlC0sDREbFmLfOw5rxFUFuZt0k3WGWcC0jQIjkkoZj&X-Amz-Signature=5762751703be6f2ad9022fea8a9e45173b319abaef1c9256249586b71411d6de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FYMKOB5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIH0LkIBqbSULahevtRFdynndFVxomVg5QtzSf4QS%2F1KWAiEAiacQRL7GQLsRHa41S0FSFIG9HaIshXRKLeVb02rO3GkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNs5h5L7DSvf29rfKyrcA%2B%2BxbxRatZ%2BzcR5zmh3sfXQUWdngG5thSzM6rB0LyWb37hZ39yOmfWvd%2BDPWyp%2Ft%2FWZIUfp4Pis4JY9PcCODdpKCDlGmgQIJpWmMojDi9ywhfDntWChFrnsvQfW%2FdU4uPgfv70QerMaAh%2FP2BakMyrRV8wtozOtvr86Wa3X%2F541rTK71sQSSZlIBTrHkRoPjo%2B7QSbgpH%2BV4U%2BYnOdqPLe5rnJEf8AGwN1Wxl01DuqReC8gztHoD0Bw%2BRgajH8KagVjrj1s1ygWw%2BAcWdaxW7iIvUmGM8QHPoXSFIqMKYt9rIQihTvuse7H%2BuA9p80xRxQep95qE53zUGzcvU1ArPQ%2FbkIigmjQl%2FUvizSiXcwkQX9CZFTvgT459NXeoZta4tBZVsZARxXb%2ByjfmtVlcY2%2FwornvYLMcvld%2FlJcFv4xmggNS%2B37yP6cOcHq4xkE%2Bzpbe6HZd%2FvnVKw%2Bjx1Q0jYUb94uVJnttkuQSWRhuQ%2B7vJ0KDZIlvn8zLKqvwVnruRGIGEzLoni719CBmqFs%2BgRcFi6p3euHIwvqb9eDkK9ksgCpZ3LEQ%2BKUfeJXg2m8w5jbjYABHULQaFDehIxEkJwokvYTWGO1qCaLN8rww4SBX7WbiQ29eqeTXb2oVMNDDgMEGOqUBBx4KINY2mgduFh1JM3IeTj6ZdSedbOmjWfuZoLQuoPGJ7YcWU%2B3%2BkmqXER3PMGqa9liDT2gnmg0CJp%2BFYAOEoLNEsq0X7vJzh9lYxYtnObveMDFl4V3HQ5uCDwrobojp5ZAssFObYa%2Fy8FLqRfUfGFp5d5RyREAnUUrcHV2H4kpmfHbycTnlC0sDREbFmLfOw5rxFUFuZt0k3WGWcC0jQIjkkoZj&X-Amz-Signature=4f1aca6afad0e60d69f04ce9102a8cea727754e78e77c24772ff778775095e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FYMKOB5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIH0LkIBqbSULahevtRFdynndFVxomVg5QtzSf4QS%2F1KWAiEAiacQRL7GQLsRHa41S0FSFIG9HaIshXRKLeVb02rO3GkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNs5h5L7DSvf29rfKyrcA%2B%2BxbxRatZ%2BzcR5zmh3sfXQUWdngG5thSzM6rB0LyWb37hZ39yOmfWvd%2BDPWyp%2Ft%2FWZIUfp4Pis4JY9PcCODdpKCDlGmgQIJpWmMojDi9ywhfDntWChFrnsvQfW%2FdU4uPgfv70QerMaAh%2FP2BakMyrRV8wtozOtvr86Wa3X%2F541rTK71sQSSZlIBTrHkRoPjo%2B7QSbgpH%2BV4U%2BYnOdqPLe5rnJEf8AGwN1Wxl01DuqReC8gztHoD0Bw%2BRgajH8KagVjrj1s1ygWw%2BAcWdaxW7iIvUmGM8QHPoXSFIqMKYt9rIQihTvuse7H%2BuA9p80xRxQep95qE53zUGzcvU1ArPQ%2FbkIigmjQl%2FUvizSiXcwkQX9CZFTvgT459NXeoZta4tBZVsZARxXb%2ByjfmtVlcY2%2FwornvYLMcvld%2FlJcFv4xmggNS%2B37yP6cOcHq4xkE%2Bzpbe6HZd%2FvnVKw%2Bjx1Q0jYUb94uVJnttkuQSWRhuQ%2B7vJ0KDZIlvn8zLKqvwVnruRGIGEzLoni719CBmqFs%2BgRcFi6p3euHIwvqb9eDkK9ksgCpZ3LEQ%2BKUfeJXg2m8w5jbjYABHULQaFDehIxEkJwokvYTWGO1qCaLN8rww4SBX7WbiQ29eqeTXb2oVMNDDgMEGOqUBBx4KINY2mgduFh1JM3IeTj6ZdSedbOmjWfuZoLQuoPGJ7YcWU%2B3%2BkmqXER3PMGqa9liDT2gnmg0CJp%2BFYAOEoLNEsq0X7vJzh9lYxYtnObveMDFl4V3HQ5uCDwrobojp5ZAssFObYa%2Fy8FLqRfUfGFp5d5RyREAnUUrcHV2H4kpmfHbycTnlC0sDREbFmLfOw5rxFUFuZt0k3WGWcC0jQIjkkoZj&X-Amz-Signature=9dd9131d1086191c391882f1e8a05c54322562e8f86cbbada78d8d70f8e57983&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FYMKOB5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIH0LkIBqbSULahevtRFdynndFVxomVg5QtzSf4QS%2F1KWAiEAiacQRL7GQLsRHa41S0FSFIG9HaIshXRKLeVb02rO3GkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNs5h5L7DSvf29rfKyrcA%2B%2BxbxRatZ%2BzcR5zmh3sfXQUWdngG5thSzM6rB0LyWb37hZ39yOmfWvd%2BDPWyp%2Ft%2FWZIUfp4Pis4JY9PcCODdpKCDlGmgQIJpWmMojDi9ywhfDntWChFrnsvQfW%2FdU4uPgfv70QerMaAh%2FP2BakMyrRV8wtozOtvr86Wa3X%2F541rTK71sQSSZlIBTrHkRoPjo%2B7QSbgpH%2BV4U%2BYnOdqPLe5rnJEf8AGwN1Wxl01DuqReC8gztHoD0Bw%2BRgajH8KagVjrj1s1ygWw%2BAcWdaxW7iIvUmGM8QHPoXSFIqMKYt9rIQihTvuse7H%2BuA9p80xRxQep95qE53zUGzcvU1ArPQ%2FbkIigmjQl%2FUvizSiXcwkQX9CZFTvgT459NXeoZta4tBZVsZARxXb%2ByjfmtVlcY2%2FwornvYLMcvld%2FlJcFv4xmggNS%2B37yP6cOcHq4xkE%2Bzpbe6HZd%2FvnVKw%2Bjx1Q0jYUb94uVJnttkuQSWRhuQ%2B7vJ0KDZIlvn8zLKqvwVnruRGIGEzLoni719CBmqFs%2BgRcFi6p3euHIwvqb9eDkK9ksgCpZ3LEQ%2BKUfeJXg2m8w5jbjYABHULQaFDehIxEkJwokvYTWGO1qCaLN8rww4SBX7WbiQ29eqeTXb2oVMNDDgMEGOqUBBx4KINY2mgduFh1JM3IeTj6ZdSedbOmjWfuZoLQuoPGJ7YcWU%2B3%2BkmqXER3PMGqa9liDT2gnmg0CJp%2BFYAOEoLNEsq0X7vJzh9lYxYtnObveMDFl4V3HQ5uCDwrobojp5ZAssFObYa%2Fy8FLqRfUfGFp5d5RyREAnUUrcHV2H4kpmfHbycTnlC0sDREbFmLfOw5rxFUFuZt0k3WGWcC0jQIjkkoZj&X-Amz-Signature=cc537b26daef0472705dac35e0b3709932632809f36581e2139d3bdba8be522b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FYMKOB5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIH0LkIBqbSULahevtRFdynndFVxomVg5QtzSf4QS%2F1KWAiEAiacQRL7GQLsRHa41S0FSFIG9HaIshXRKLeVb02rO3GkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNs5h5L7DSvf29rfKyrcA%2B%2BxbxRatZ%2BzcR5zmh3sfXQUWdngG5thSzM6rB0LyWb37hZ39yOmfWvd%2BDPWyp%2Ft%2FWZIUfp4Pis4JY9PcCODdpKCDlGmgQIJpWmMojDi9ywhfDntWChFrnsvQfW%2FdU4uPgfv70QerMaAh%2FP2BakMyrRV8wtozOtvr86Wa3X%2F541rTK71sQSSZlIBTrHkRoPjo%2B7QSbgpH%2BV4U%2BYnOdqPLe5rnJEf8AGwN1Wxl01DuqReC8gztHoD0Bw%2BRgajH8KagVjrj1s1ygWw%2BAcWdaxW7iIvUmGM8QHPoXSFIqMKYt9rIQihTvuse7H%2BuA9p80xRxQep95qE53zUGzcvU1ArPQ%2FbkIigmjQl%2FUvizSiXcwkQX9CZFTvgT459NXeoZta4tBZVsZARxXb%2ByjfmtVlcY2%2FwornvYLMcvld%2FlJcFv4xmggNS%2B37yP6cOcHq4xkE%2Bzpbe6HZd%2FvnVKw%2Bjx1Q0jYUb94uVJnttkuQSWRhuQ%2B7vJ0KDZIlvn8zLKqvwVnruRGIGEzLoni719CBmqFs%2BgRcFi6p3euHIwvqb9eDkK9ksgCpZ3LEQ%2BKUfeJXg2m8w5jbjYABHULQaFDehIxEkJwokvYTWGO1qCaLN8rww4SBX7WbiQ29eqeTXb2oVMNDDgMEGOqUBBx4KINY2mgduFh1JM3IeTj6ZdSedbOmjWfuZoLQuoPGJ7YcWU%2B3%2BkmqXER3PMGqa9liDT2gnmg0CJp%2BFYAOEoLNEsq0X7vJzh9lYxYtnObveMDFl4V3HQ5uCDwrobojp5ZAssFObYa%2Fy8FLqRfUfGFp5d5RyREAnUUrcHV2H4kpmfHbycTnlC0sDREbFmLfOw5rxFUFuZt0k3WGWcC0jQIjkkoZj&X-Amz-Signature=d1852676b12274ca0e5e6fbf793e14f9a8083b9f78aac473c94afe2be30f0df9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
