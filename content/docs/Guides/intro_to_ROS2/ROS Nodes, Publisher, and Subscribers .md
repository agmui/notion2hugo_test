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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHIVMW2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx%2BHLwJ2D3KlDcOpfHqd60rtFvIdwjX2p5PWWaU2%2F6VAiEAj5OjLmIo94j2BPgz6SRxB%2B%2FL2KXPSoIsIvMdA7%2BycTcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaFXvcXDnF3YUZDvSrcA5Kxqwj%2FmKTNw%2Bd60kIC%2FhgXt4j93ieB6KrgI2BadujorteZOXI7AH3m%2BrO0vVHvHERQnCJfC2kRxBuLwH7L82dGzEU4vqM3mhfqUqEJ0Ej1KISjMB1%2BYzSKBZBAX7qBHfPormmMAo%2BAsjX4U0Z3zU%2BW3ksICesEQNOHG9Vq3pQKEMvOcYVytv2%2B%2FQnd3aOCJ9R4re3EkIFaxeqvhrfO%2BBBgPWs9JcOK9OriPHPTdfHZQ%2FjT3h%2F%2FPTQbiPrZoENFrx4BPPqNGTNU67Ul7nRLoVVQtZiCkO5nspG5tQDIYHdrYshy55SUknVp998smi5jJOrp%2BMZO0lRJW3OB58AgaIEc2wBfbGbqyFz%2B18SpR%2BlQaOjHVtwwcELd%2FmpINvEdWF8XNKatTC6Y%2BHHkRdH%2B5kvSEZQaiyhbJ0ct%2BS8r3hRfn4s25Ab15gqR7girWA2heudGU8fW%2Fe5DGRI4p2BiQn4f%2BAwfEBzmU%2FyF02uBBLqc0TPj36JLkMg1aKCNXQk%2FqlGoKXaKnkTQUQANpC0Q%2Bq4gjXgcIbIkyixnhsimu6fWNfM%2FAY8xXg35MrVVOnuJxVl8vUsYXz0uDpgOeD0hFHKzNSXOAh0f5%2F5ME4EYRnPKr2fgkK9vdbxDezhJMM2%2BoMIGOqUBqedMkuE%2FBrMvJlu6CAB3ZNzyrCdtp5ErVrQaw81u7t3xCJxowBILVl1vWg23ytJwQ97uW29gZEFEoj2sudAyLB4pzyK52qtdpzoQx4EeJlgDjFpeD557GXt0Hfa0ju3NbXerDC7Nq91wWm0ck%2Bbaen0vtcO8C1XlAkIlHVcqMaEBfrz9Wr15OTmDEtE1h3HNwnOyIzKi14U2I4YGL4kOkv%2BVMSQU&X-Amz-Signature=7600a2bdf479891b2820a03152bc1a991f8772c3c7f6a911dcac8daf489b5d73&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHIVMW2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx%2BHLwJ2D3KlDcOpfHqd60rtFvIdwjX2p5PWWaU2%2F6VAiEAj5OjLmIo94j2BPgz6SRxB%2B%2FL2KXPSoIsIvMdA7%2BycTcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaFXvcXDnF3YUZDvSrcA5Kxqwj%2FmKTNw%2Bd60kIC%2FhgXt4j93ieB6KrgI2BadujorteZOXI7AH3m%2BrO0vVHvHERQnCJfC2kRxBuLwH7L82dGzEU4vqM3mhfqUqEJ0Ej1KISjMB1%2BYzSKBZBAX7qBHfPormmMAo%2BAsjX4U0Z3zU%2BW3ksICesEQNOHG9Vq3pQKEMvOcYVytv2%2B%2FQnd3aOCJ9R4re3EkIFaxeqvhrfO%2BBBgPWs9JcOK9OriPHPTdfHZQ%2FjT3h%2F%2FPTQbiPrZoENFrx4BPPqNGTNU67Ul7nRLoVVQtZiCkO5nspG5tQDIYHdrYshy55SUknVp998smi5jJOrp%2BMZO0lRJW3OB58AgaIEc2wBfbGbqyFz%2B18SpR%2BlQaOjHVtwwcELd%2FmpINvEdWF8XNKatTC6Y%2BHHkRdH%2B5kvSEZQaiyhbJ0ct%2BS8r3hRfn4s25Ab15gqR7girWA2heudGU8fW%2Fe5DGRI4p2BiQn4f%2BAwfEBzmU%2FyF02uBBLqc0TPj36JLkMg1aKCNXQk%2FqlGoKXaKnkTQUQANpC0Q%2Bq4gjXgcIbIkyixnhsimu6fWNfM%2FAY8xXg35MrVVOnuJxVl8vUsYXz0uDpgOeD0hFHKzNSXOAh0f5%2F5ME4EYRnPKr2fgkK9vdbxDezhJMM2%2BoMIGOqUBqedMkuE%2FBrMvJlu6CAB3ZNzyrCdtp5ErVrQaw81u7t3xCJxowBILVl1vWg23ytJwQ97uW29gZEFEoj2sudAyLB4pzyK52qtdpzoQx4EeJlgDjFpeD557GXt0Hfa0ju3NbXerDC7Nq91wWm0ck%2Bbaen0vtcO8C1XlAkIlHVcqMaEBfrz9Wr15OTmDEtE1h3HNwnOyIzKi14U2I4YGL4kOkv%2BVMSQU&X-Amz-Signature=346df080c773628c8184a48e1f0cc8e95e8956a602193ecbcacef8ebde7470ff&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHIVMW2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx%2BHLwJ2D3KlDcOpfHqd60rtFvIdwjX2p5PWWaU2%2F6VAiEAj5OjLmIo94j2BPgz6SRxB%2B%2FL2KXPSoIsIvMdA7%2BycTcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaFXvcXDnF3YUZDvSrcA5Kxqwj%2FmKTNw%2Bd60kIC%2FhgXt4j93ieB6KrgI2BadujorteZOXI7AH3m%2BrO0vVHvHERQnCJfC2kRxBuLwH7L82dGzEU4vqM3mhfqUqEJ0Ej1KISjMB1%2BYzSKBZBAX7qBHfPormmMAo%2BAsjX4U0Z3zU%2BW3ksICesEQNOHG9Vq3pQKEMvOcYVytv2%2B%2FQnd3aOCJ9R4re3EkIFaxeqvhrfO%2BBBgPWs9JcOK9OriPHPTdfHZQ%2FjT3h%2F%2FPTQbiPrZoENFrx4BPPqNGTNU67Ul7nRLoVVQtZiCkO5nspG5tQDIYHdrYshy55SUknVp998smi5jJOrp%2BMZO0lRJW3OB58AgaIEc2wBfbGbqyFz%2B18SpR%2BlQaOjHVtwwcELd%2FmpINvEdWF8XNKatTC6Y%2BHHkRdH%2B5kvSEZQaiyhbJ0ct%2BS8r3hRfn4s25Ab15gqR7girWA2heudGU8fW%2Fe5DGRI4p2BiQn4f%2BAwfEBzmU%2FyF02uBBLqc0TPj36JLkMg1aKCNXQk%2FqlGoKXaKnkTQUQANpC0Q%2Bq4gjXgcIbIkyixnhsimu6fWNfM%2FAY8xXg35MrVVOnuJxVl8vUsYXz0uDpgOeD0hFHKzNSXOAh0f5%2F5ME4EYRnPKr2fgkK9vdbxDezhJMM2%2BoMIGOqUBqedMkuE%2FBrMvJlu6CAB3ZNzyrCdtp5ErVrQaw81u7t3xCJxowBILVl1vWg23ytJwQ97uW29gZEFEoj2sudAyLB4pzyK52qtdpzoQx4EeJlgDjFpeD557GXt0Hfa0ju3NbXerDC7Nq91wWm0ck%2Bbaen0vtcO8C1XlAkIlHVcqMaEBfrz9Wr15OTmDEtE1h3HNwnOyIzKi14U2I4YGL4kOkv%2BVMSQU&X-Amz-Signature=1d34ce1ceaf77a87e46fafc13910a1016aec85786176cbec52380265f8ebe63b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHIVMW2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx%2BHLwJ2D3KlDcOpfHqd60rtFvIdwjX2p5PWWaU2%2F6VAiEAj5OjLmIo94j2BPgz6SRxB%2B%2FL2KXPSoIsIvMdA7%2BycTcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaFXvcXDnF3YUZDvSrcA5Kxqwj%2FmKTNw%2Bd60kIC%2FhgXt4j93ieB6KrgI2BadujorteZOXI7AH3m%2BrO0vVHvHERQnCJfC2kRxBuLwH7L82dGzEU4vqM3mhfqUqEJ0Ej1KISjMB1%2BYzSKBZBAX7qBHfPormmMAo%2BAsjX4U0Z3zU%2BW3ksICesEQNOHG9Vq3pQKEMvOcYVytv2%2B%2FQnd3aOCJ9R4re3EkIFaxeqvhrfO%2BBBgPWs9JcOK9OriPHPTdfHZQ%2FjT3h%2F%2FPTQbiPrZoENFrx4BPPqNGTNU67Ul7nRLoVVQtZiCkO5nspG5tQDIYHdrYshy55SUknVp998smi5jJOrp%2BMZO0lRJW3OB58AgaIEc2wBfbGbqyFz%2B18SpR%2BlQaOjHVtwwcELd%2FmpINvEdWF8XNKatTC6Y%2BHHkRdH%2B5kvSEZQaiyhbJ0ct%2BS8r3hRfn4s25Ab15gqR7girWA2heudGU8fW%2Fe5DGRI4p2BiQn4f%2BAwfEBzmU%2FyF02uBBLqc0TPj36JLkMg1aKCNXQk%2FqlGoKXaKnkTQUQANpC0Q%2Bq4gjXgcIbIkyixnhsimu6fWNfM%2FAY8xXg35MrVVOnuJxVl8vUsYXz0uDpgOeD0hFHKzNSXOAh0f5%2F5ME4EYRnPKr2fgkK9vdbxDezhJMM2%2BoMIGOqUBqedMkuE%2FBrMvJlu6CAB3ZNzyrCdtp5ErVrQaw81u7t3xCJxowBILVl1vWg23ytJwQ97uW29gZEFEoj2sudAyLB4pzyK52qtdpzoQx4EeJlgDjFpeD557GXt0Hfa0ju3NbXerDC7Nq91wWm0ck%2Bbaen0vtcO8C1XlAkIlHVcqMaEBfrz9Wr15OTmDEtE1h3HNwnOyIzKi14U2I4YGL4kOkv%2BVMSQU&X-Amz-Signature=d33dcf902d0c231e61d49e6668ac2bcc0fed5d7c438483441ae8be4c4fc1e8fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHIVMW2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx%2BHLwJ2D3KlDcOpfHqd60rtFvIdwjX2p5PWWaU2%2F6VAiEAj5OjLmIo94j2BPgz6SRxB%2B%2FL2KXPSoIsIvMdA7%2BycTcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaFXvcXDnF3YUZDvSrcA5Kxqwj%2FmKTNw%2Bd60kIC%2FhgXt4j93ieB6KrgI2BadujorteZOXI7AH3m%2BrO0vVHvHERQnCJfC2kRxBuLwH7L82dGzEU4vqM3mhfqUqEJ0Ej1KISjMB1%2BYzSKBZBAX7qBHfPormmMAo%2BAsjX4U0Z3zU%2BW3ksICesEQNOHG9Vq3pQKEMvOcYVytv2%2B%2FQnd3aOCJ9R4re3EkIFaxeqvhrfO%2BBBgPWs9JcOK9OriPHPTdfHZQ%2FjT3h%2F%2FPTQbiPrZoENFrx4BPPqNGTNU67Ul7nRLoVVQtZiCkO5nspG5tQDIYHdrYshy55SUknVp998smi5jJOrp%2BMZO0lRJW3OB58AgaIEc2wBfbGbqyFz%2B18SpR%2BlQaOjHVtwwcELd%2FmpINvEdWF8XNKatTC6Y%2BHHkRdH%2B5kvSEZQaiyhbJ0ct%2BS8r3hRfn4s25Ab15gqR7girWA2heudGU8fW%2Fe5DGRI4p2BiQn4f%2BAwfEBzmU%2FyF02uBBLqc0TPj36JLkMg1aKCNXQk%2FqlGoKXaKnkTQUQANpC0Q%2Bq4gjXgcIbIkyixnhsimu6fWNfM%2FAY8xXg35MrVVOnuJxVl8vUsYXz0uDpgOeD0hFHKzNSXOAh0f5%2F5ME4EYRnPKr2fgkK9vdbxDezhJMM2%2BoMIGOqUBqedMkuE%2FBrMvJlu6CAB3ZNzyrCdtp5ErVrQaw81u7t3xCJxowBILVl1vWg23ytJwQ97uW29gZEFEoj2sudAyLB4pzyK52qtdpzoQx4EeJlgDjFpeD557GXt0Hfa0ju3NbXerDC7Nq91wWm0ck%2Bbaen0vtcO8C1XlAkIlHVcqMaEBfrz9Wr15OTmDEtE1h3HNwnOyIzKi14U2I4YGL4kOkv%2BVMSQU&X-Amz-Signature=f958f86ba895ce0f035d0c9017718bde5ed028de6d052c5295c9e721c0b737c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHIVMW2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx%2BHLwJ2D3KlDcOpfHqd60rtFvIdwjX2p5PWWaU2%2F6VAiEAj5OjLmIo94j2BPgz6SRxB%2B%2FL2KXPSoIsIvMdA7%2BycTcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaFXvcXDnF3YUZDvSrcA5Kxqwj%2FmKTNw%2Bd60kIC%2FhgXt4j93ieB6KrgI2BadujorteZOXI7AH3m%2BrO0vVHvHERQnCJfC2kRxBuLwH7L82dGzEU4vqM3mhfqUqEJ0Ej1KISjMB1%2BYzSKBZBAX7qBHfPormmMAo%2BAsjX4U0Z3zU%2BW3ksICesEQNOHG9Vq3pQKEMvOcYVytv2%2B%2FQnd3aOCJ9R4re3EkIFaxeqvhrfO%2BBBgPWs9JcOK9OriPHPTdfHZQ%2FjT3h%2F%2FPTQbiPrZoENFrx4BPPqNGTNU67Ul7nRLoVVQtZiCkO5nspG5tQDIYHdrYshy55SUknVp998smi5jJOrp%2BMZO0lRJW3OB58AgaIEc2wBfbGbqyFz%2B18SpR%2BlQaOjHVtwwcELd%2FmpINvEdWF8XNKatTC6Y%2BHHkRdH%2B5kvSEZQaiyhbJ0ct%2BS8r3hRfn4s25Ab15gqR7girWA2heudGU8fW%2Fe5DGRI4p2BiQn4f%2BAwfEBzmU%2FyF02uBBLqc0TPj36JLkMg1aKCNXQk%2FqlGoKXaKnkTQUQANpC0Q%2Bq4gjXgcIbIkyixnhsimu6fWNfM%2FAY8xXg35MrVVOnuJxVl8vUsYXz0uDpgOeD0hFHKzNSXOAh0f5%2F5ME4EYRnPKr2fgkK9vdbxDezhJMM2%2BoMIGOqUBqedMkuE%2FBrMvJlu6CAB3ZNzyrCdtp5ErVrQaw81u7t3xCJxowBILVl1vWg23ytJwQ97uW29gZEFEoj2sudAyLB4pzyK52qtdpzoQx4EeJlgDjFpeD557GXt0Hfa0ju3NbXerDC7Nq91wWm0ck%2Bbaen0vtcO8C1XlAkIlHVcqMaEBfrz9Wr15OTmDEtE1h3HNwnOyIzKi14U2I4YGL4kOkv%2BVMSQU&X-Amz-Signature=6246a24a795932c90de7a6947812f4d3f4c939665704cdd0cd0807142c356225&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHIVMW2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx%2BHLwJ2D3KlDcOpfHqd60rtFvIdwjX2p5PWWaU2%2F6VAiEAj5OjLmIo94j2BPgz6SRxB%2B%2FL2KXPSoIsIvMdA7%2BycTcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaFXvcXDnF3YUZDvSrcA5Kxqwj%2FmKTNw%2Bd60kIC%2FhgXt4j93ieB6KrgI2BadujorteZOXI7AH3m%2BrO0vVHvHERQnCJfC2kRxBuLwH7L82dGzEU4vqM3mhfqUqEJ0Ej1KISjMB1%2BYzSKBZBAX7qBHfPormmMAo%2BAsjX4U0Z3zU%2BW3ksICesEQNOHG9Vq3pQKEMvOcYVytv2%2B%2FQnd3aOCJ9R4re3EkIFaxeqvhrfO%2BBBgPWs9JcOK9OriPHPTdfHZQ%2FjT3h%2F%2FPTQbiPrZoENFrx4BPPqNGTNU67Ul7nRLoVVQtZiCkO5nspG5tQDIYHdrYshy55SUknVp998smi5jJOrp%2BMZO0lRJW3OB58AgaIEc2wBfbGbqyFz%2B18SpR%2BlQaOjHVtwwcELd%2FmpINvEdWF8XNKatTC6Y%2BHHkRdH%2B5kvSEZQaiyhbJ0ct%2BS8r3hRfn4s25Ab15gqR7girWA2heudGU8fW%2Fe5DGRI4p2BiQn4f%2BAwfEBzmU%2FyF02uBBLqc0TPj36JLkMg1aKCNXQk%2FqlGoKXaKnkTQUQANpC0Q%2Bq4gjXgcIbIkyixnhsimu6fWNfM%2FAY8xXg35MrVVOnuJxVl8vUsYXz0uDpgOeD0hFHKzNSXOAh0f5%2F5ME4EYRnPKr2fgkK9vdbxDezhJMM2%2BoMIGOqUBqedMkuE%2FBrMvJlu6CAB3ZNzyrCdtp5ErVrQaw81u7t3xCJxowBILVl1vWg23ytJwQ97uW29gZEFEoj2sudAyLB4pzyK52qtdpzoQx4EeJlgDjFpeD557GXt0Hfa0ju3NbXerDC7Nq91wWm0ck%2Bbaen0vtcO8C1XlAkIlHVcqMaEBfrz9Wr15OTmDEtE1h3HNwnOyIzKi14U2I4YGL4kOkv%2BVMSQU&X-Amz-Signature=0e358a2019f36a2b2f0049bbb28e8660310f8fff677fb0c501bc629699809d8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHIVMW2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx%2BHLwJ2D3KlDcOpfHqd60rtFvIdwjX2p5PWWaU2%2F6VAiEAj5OjLmIo94j2BPgz6SRxB%2B%2FL2KXPSoIsIvMdA7%2BycTcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaFXvcXDnF3YUZDvSrcA5Kxqwj%2FmKTNw%2Bd60kIC%2FhgXt4j93ieB6KrgI2BadujorteZOXI7AH3m%2BrO0vVHvHERQnCJfC2kRxBuLwH7L82dGzEU4vqM3mhfqUqEJ0Ej1KISjMB1%2BYzSKBZBAX7qBHfPormmMAo%2BAsjX4U0Z3zU%2BW3ksICesEQNOHG9Vq3pQKEMvOcYVytv2%2B%2FQnd3aOCJ9R4re3EkIFaxeqvhrfO%2BBBgPWs9JcOK9OriPHPTdfHZQ%2FjT3h%2F%2FPTQbiPrZoENFrx4BPPqNGTNU67Ul7nRLoVVQtZiCkO5nspG5tQDIYHdrYshy55SUknVp998smi5jJOrp%2BMZO0lRJW3OB58AgaIEc2wBfbGbqyFz%2B18SpR%2BlQaOjHVtwwcELd%2FmpINvEdWF8XNKatTC6Y%2BHHkRdH%2B5kvSEZQaiyhbJ0ct%2BS8r3hRfn4s25Ab15gqR7girWA2heudGU8fW%2Fe5DGRI4p2BiQn4f%2BAwfEBzmU%2FyF02uBBLqc0TPj36JLkMg1aKCNXQk%2FqlGoKXaKnkTQUQANpC0Q%2Bq4gjXgcIbIkyixnhsimu6fWNfM%2FAY8xXg35MrVVOnuJxVl8vUsYXz0uDpgOeD0hFHKzNSXOAh0f5%2F5ME4EYRnPKr2fgkK9vdbxDezhJMM2%2BoMIGOqUBqedMkuE%2FBrMvJlu6CAB3ZNzyrCdtp5ErVrQaw81u7t3xCJxowBILVl1vWg23ytJwQ97uW29gZEFEoj2sudAyLB4pzyK52qtdpzoQx4EeJlgDjFpeD557GXt0Hfa0ju3NbXerDC7Nq91wWm0ck%2Bbaen0vtcO8C1XlAkIlHVcqMaEBfrz9Wr15OTmDEtE1h3HNwnOyIzKi14U2I4YGL4kOkv%2BVMSQU&X-Amz-Signature=7d956c3125e43a6d182b6eb4badacc65185de877a254956146750a0da849051e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
