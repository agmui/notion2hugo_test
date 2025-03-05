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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS4ELKU6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbLdez7KVs2LAFIaCUriOU5L4K3OgZa0%2B71KRnz3mLzAiAg1cqcKZczKZbsvGFwOQx1Eb%2BzJ9vYecC9GlaTy1QZSSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbSKU7yZ5smqafT2RKtwDhg1EqKuWV%2FY0fMhORaU1gXK2IL0er0wtnZferFX9PQok1t1yIgDKgEEil4QOmHy6qIR%2FNyWG2sHE3T5X8D6IndVi118AwRordBybLDziBbcOJbrpK2VfX6t3lcFoVGdMMvCWb8sa3iT7Hmj4e%2FE8ZS1J8ls8Cw1f5kb84LqcgwTtB8CYhF9zPuwvn%2FywbKaSAqWAfhWCNW%2BPcXD2M%2BxnpzPUcN45lfz1pGWORsFbV8DhIHp5JiBeNHc5GZBqKFYP%2Bid7eaH0wHxZVjvJ6jkwJkyXyVY4zwBJ0u2JWC4JxxuizalGo9QzQn77fA8Vdmy%2FzoCsBQuaIJOkWDiLCc646YUXmN7ycSmIiFM%2F3q%2BSzsY1NFuzMiS7t%2Bjw15WhDqBVL4iPmsyForPJW0Xsy47j4n%2FTLupazevb3msIiELy30iQAXMzr4vyxUT1LbHBwHUoO5l63o%2BAcmY9Y%2FsiEL5D0f%2FoRdHyjRMv4vFhaU%2FU0rPwF4%2Fdi%2BLi0W3UE0UU3wmhKRYUKyEEl1tCroaYeGpd2PehoUMpR2FBRGCCq1VumF%2FKEfu0WXqR7U64nNzFLmrmPNs1swKz4I51TScEM8qyI5yHxHnIyI8a8Aq1r7cQyAXiPQNWl31Jpic4qaswnqmfvgY6pgEPoRITXzmJgQy2UM8Z7eNfTjawyGf1x5APWQYxb2AuD9y%2BPbRlv0z7k%2BrJu21KjWio%2FEuHCCYzpHP9FxFaepyCRBfqNpHqr%2FhFxZZg8Q84LOxhQS9U8rNJ0%2BRNpYL%2BdkuvbeanENRw95zdgJg6RqAhEeey12Sx1bowYgjO416Y31hHNj0a9atTGxyeKYwKmCHAXV9VzkKL5n31EiWvTFDvuCdk98ha&X-Amz-Signature=48202757768e62fc593dac850ca46a8f2389a32ab9fe178ddb1f41688f64dd3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS4ELKU6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbLdez7KVs2LAFIaCUriOU5L4K3OgZa0%2B71KRnz3mLzAiAg1cqcKZczKZbsvGFwOQx1Eb%2BzJ9vYecC9GlaTy1QZSSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbSKU7yZ5smqafT2RKtwDhg1EqKuWV%2FY0fMhORaU1gXK2IL0er0wtnZferFX9PQok1t1yIgDKgEEil4QOmHy6qIR%2FNyWG2sHE3T5X8D6IndVi118AwRordBybLDziBbcOJbrpK2VfX6t3lcFoVGdMMvCWb8sa3iT7Hmj4e%2FE8ZS1J8ls8Cw1f5kb84LqcgwTtB8CYhF9zPuwvn%2FywbKaSAqWAfhWCNW%2BPcXD2M%2BxnpzPUcN45lfz1pGWORsFbV8DhIHp5JiBeNHc5GZBqKFYP%2Bid7eaH0wHxZVjvJ6jkwJkyXyVY4zwBJ0u2JWC4JxxuizalGo9QzQn77fA8Vdmy%2FzoCsBQuaIJOkWDiLCc646YUXmN7ycSmIiFM%2F3q%2BSzsY1NFuzMiS7t%2Bjw15WhDqBVL4iPmsyForPJW0Xsy47j4n%2FTLupazevb3msIiELy30iQAXMzr4vyxUT1LbHBwHUoO5l63o%2BAcmY9Y%2FsiEL5D0f%2FoRdHyjRMv4vFhaU%2FU0rPwF4%2Fdi%2BLi0W3UE0UU3wmhKRYUKyEEl1tCroaYeGpd2PehoUMpR2FBRGCCq1VumF%2FKEfu0WXqR7U64nNzFLmrmPNs1swKz4I51TScEM8qyI5yHxHnIyI8a8Aq1r7cQyAXiPQNWl31Jpic4qaswnqmfvgY6pgEPoRITXzmJgQy2UM8Z7eNfTjawyGf1x5APWQYxb2AuD9y%2BPbRlv0z7k%2BrJu21KjWio%2FEuHCCYzpHP9FxFaepyCRBfqNpHqr%2FhFxZZg8Q84LOxhQS9U8rNJ0%2BRNpYL%2BdkuvbeanENRw95zdgJg6RqAhEeey12Sx1bowYgjO416Y31hHNj0a9atTGxyeKYwKmCHAXV9VzkKL5n31EiWvTFDvuCdk98ha&X-Amz-Signature=8f16a078553fd7093217aca10452d948e9128f7bfebb9706954d0bcdb931eec1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS4ELKU6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbLdez7KVs2LAFIaCUriOU5L4K3OgZa0%2B71KRnz3mLzAiAg1cqcKZczKZbsvGFwOQx1Eb%2BzJ9vYecC9GlaTy1QZSSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbSKU7yZ5smqafT2RKtwDhg1EqKuWV%2FY0fMhORaU1gXK2IL0er0wtnZferFX9PQok1t1yIgDKgEEil4QOmHy6qIR%2FNyWG2sHE3T5X8D6IndVi118AwRordBybLDziBbcOJbrpK2VfX6t3lcFoVGdMMvCWb8sa3iT7Hmj4e%2FE8ZS1J8ls8Cw1f5kb84LqcgwTtB8CYhF9zPuwvn%2FywbKaSAqWAfhWCNW%2BPcXD2M%2BxnpzPUcN45lfz1pGWORsFbV8DhIHp5JiBeNHc5GZBqKFYP%2Bid7eaH0wHxZVjvJ6jkwJkyXyVY4zwBJ0u2JWC4JxxuizalGo9QzQn77fA8Vdmy%2FzoCsBQuaIJOkWDiLCc646YUXmN7ycSmIiFM%2F3q%2BSzsY1NFuzMiS7t%2Bjw15WhDqBVL4iPmsyForPJW0Xsy47j4n%2FTLupazevb3msIiELy30iQAXMzr4vyxUT1LbHBwHUoO5l63o%2BAcmY9Y%2FsiEL5D0f%2FoRdHyjRMv4vFhaU%2FU0rPwF4%2Fdi%2BLi0W3UE0UU3wmhKRYUKyEEl1tCroaYeGpd2PehoUMpR2FBRGCCq1VumF%2FKEfu0WXqR7U64nNzFLmrmPNs1swKz4I51TScEM8qyI5yHxHnIyI8a8Aq1r7cQyAXiPQNWl31Jpic4qaswnqmfvgY6pgEPoRITXzmJgQy2UM8Z7eNfTjawyGf1x5APWQYxb2AuD9y%2BPbRlv0z7k%2BrJu21KjWio%2FEuHCCYzpHP9FxFaepyCRBfqNpHqr%2FhFxZZg8Q84LOxhQS9U8rNJ0%2BRNpYL%2BdkuvbeanENRw95zdgJg6RqAhEeey12Sx1bowYgjO416Y31hHNj0a9atTGxyeKYwKmCHAXV9VzkKL5n31EiWvTFDvuCdk98ha&X-Amz-Signature=4b549541524bdc2ea18a91db3459f679719dd4079b951fcde684fae37943e750&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS4ELKU6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbLdez7KVs2LAFIaCUriOU5L4K3OgZa0%2B71KRnz3mLzAiAg1cqcKZczKZbsvGFwOQx1Eb%2BzJ9vYecC9GlaTy1QZSSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbSKU7yZ5smqafT2RKtwDhg1EqKuWV%2FY0fMhORaU1gXK2IL0er0wtnZferFX9PQok1t1yIgDKgEEil4QOmHy6qIR%2FNyWG2sHE3T5X8D6IndVi118AwRordBybLDziBbcOJbrpK2VfX6t3lcFoVGdMMvCWb8sa3iT7Hmj4e%2FE8ZS1J8ls8Cw1f5kb84LqcgwTtB8CYhF9zPuwvn%2FywbKaSAqWAfhWCNW%2BPcXD2M%2BxnpzPUcN45lfz1pGWORsFbV8DhIHp5JiBeNHc5GZBqKFYP%2Bid7eaH0wHxZVjvJ6jkwJkyXyVY4zwBJ0u2JWC4JxxuizalGo9QzQn77fA8Vdmy%2FzoCsBQuaIJOkWDiLCc646YUXmN7ycSmIiFM%2F3q%2BSzsY1NFuzMiS7t%2Bjw15WhDqBVL4iPmsyForPJW0Xsy47j4n%2FTLupazevb3msIiELy30iQAXMzr4vyxUT1LbHBwHUoO5l63o%2BAcmY9Y%2FsiEL5D0f%2FoRdHyjRMv4vFhaU%2FU0rPwF4%2Fdi%2BLi0W3UE0UU3wmhKRYUKyEEl1tCroaYeGpd2PehoUMpR2FBRGCCq1VumF%2FKEfu0WXqR7U64nNzFLmrmPNs1swKz4I51TScEM8qyI5yHxHnIyI8a8Aq1r7cQyAXiPQNWl31Jpic4qaswnqmfvgY6pgEPoRITXzmJgQy2UM8Z7eNfTjawyGf1x5APWQYxb2AuD9y%2BPbRlv0z7k%2BrJu21KjWio%2FEuHCCYzpHP9FxFaepyCRBfqNpHqr%2FhFxZZg8Q84LOxhQS9U8rNJ0%2BRNpYL%2BdkuvbeanENRw95zdgJg6RqAhEeey12Sx1bowYgjO416Y31hHNj0a9atTGxyeKYwKmCHAXV9VzkKL5n31EiWvTFDvuCdk98ha&X-Amz-Signature=eed0ad9d3a0786c040fec4f33dfc5201d4c6436e52c55fb613b81f0523e4d1eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS4ELKU6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbLdez7KVs2LAFIaCUriOU5L4K3OgZa0%2B71KRnz3mLzAiAg1cqcKZczKZbsvGFwOQx1Eb%2BzJ9vYecC9GlaTy1QZSSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbSKU7yZ5smqafT2RKtwDhg1EqKuWV%2FY0fMhORaU1gXK2IL0er0wtnZferFX9PQok1t1yIgDKgEEil4QOmHy6qIR%2FNyWG2sHE3T5X8D6IndVi118AwRordBybLDziBbcOJbrpK2VfX6t3lcFoVGdMMvCWb8sa3iT7Hmj4e%2FE8ZS1J8ls8Cw1f5kb84LqcgwTtB8CYhF9zPuwvn%2FywbKaSAqWAfhWCNW%2BPcXD2M%2BxnpzPUcN45lfz1pGWORsFbV8DhIHp5JiBeNHc5GZBqKFYP%2Bid7eaH0wHxZVjvJ6jkwJkyXyVY4zwBJ0u2JWC4JxxuizalGo9QzQn77fA8Vdmy%2FzoCsBQuaIJOkWDiLCc646YUXmN7ycSmIiFM%2F3q%2BSzsY1NFuzMiS7t%2Bjw15WhDqBVL4iPmsyForPJW0Xsy47j4n%2FTLupazevb3msIiELy30iQAXMzr4vyxUT1LbHBwHUoO5l63o%2BAcmY9Y%2FsiEL5D0f%2FoRdHyjRMv4vFhaU%2FU0rPwF4%2Fdi%2BLi0W3UE0UU3wmhKRYUKyEEl1tCroaYeGpd2PehoUMpR2FBRGCCq1VumF%2FKEfu0WXqR7U64nNzFLmrmPNs1swKz4I51TScEM8qyI5yHxHnIyI8a8Aq1r7cQyAXiPQNWl31Jpic4qaswnqmfvgY6pgEPoRITXzmJgQy2UM8Z7eNfTjawyGf1x5APWQYxb2AuD9y%2BPbRlv0z7k%2BrJu21KjWio%2FEuHCCYzpHP9FxFaepyCRBfqNpHqr%2FhFxZZg8Q84LOxhQS9U8rNJ0%2BRNpYL%2BdkuvbeanENRw95zdgJg6RqAhEeey12Sx1bowYgjO416Y31hHNj0a9atTGxyeKYwKmCHAXV9VzkKL5n31EiWvTFDvuCdk98ha&X-Amz-Signature=f711401c67b6581efd934955a055572a10cdafb538d37ac474dad13504383445&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS4ELKU6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbLdez7KVs2LAFIaCUriOU5L4K3OgZa0%2B71KRnz3mLzAiAg1cqcKZczKZbsvGFwOQx1Eb%2BzJ9vYecC9GlaTy1QZSSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbSKU7yZ5smqafT2RKtwDhg1EqKuWV%2FY0fMhORaU1gXK2IL0er0wtnZferFX9PQok1t1yIgDKgEEil4QOmHy6qIR%2FNyWG2sHE3T5X8D6IndVi118AwRordBybLDziBbcOJbrpK2VfX6t3lcFoVGdMMvCWb8sa3iT7Hmj4e%2FE8ZS1J8ls8Cw1f5kb84LqcgwTtB8CYhF9zPuwvn%2FywbKaSAqWAfhWCNW%2BPcXD2M%2BxnpzPUcN45lfz1pGWORsFbV8DhIHp5JiBeNHc5GZBqKFYP%2Bid7eaH0wHxZVjvJ6jkwJkyXyVY4zwBJ0u2JWC4JxxuizalGo9QzQn77fA8Vdmy%2FzoCsBQuaIJOkWDiLCc646YUXmN7ycSmIiFM%2F3q%2BSzsY1NFuzMiS7t%2Bjw15WhDqBVL4iPmsyForPJW0Xsy47j4n%2FTLupazevb3msIiELy30iQAXMzr4vyxUT1LbHBwHUoO5l63o%2BAcmY9Y%2FsiEL5D0f%2FoRdHyjRMv4vFhaU%2FU0rPwF4%2Fdi%2BLi0W3UE0UU3wmhKRYUKyEEl1tCroaYeGpd2PehoUMpR2FBRGCCq1VumF%2FKEfu0WXqR7U64nNzFLmrmPNs1swKz4I51TScEM8qyI5yHxHnIyI8a8Aq1r7cQyAXiPQNWl31Jpic4qaswnqmfvgY6pgEPoRITXzmJgQy2UM8Z7eNfTjawyGf1x5APWQYxb2AuD9y%2BPbRlv0z7k%2BrJu21KjWio%2FEuHCCYzpHP9FxFaepyCRBfqNpHqr%2FhFxZZg8Q84LOxhQS9U8rNJ0%2BRNpYL%2BdkuvbeanENRw95zdgJg6RqAhEeey12Sx1bowYgjO416Y31hHNj0a9atTGxyeKYwKmCHAXV9VzkKL5n31EiWvTFDvuCdk98ha&X-Amz-Signature=8d75d28a58d4ae9a1400f102235ecaf613a34713766fe4cb3f5d01e7a17ca539&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS4ELKU6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbLdez7KVs2LAFIaCUriOU5L4K3OgZa0%2B71KRnz3mLzAiAg1cqcKZczKZbsvGFwOQx1Eb%2BzJ9vYecC9GlaTy1QZSSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbSKU7yZ5smqafT2RKtwDhg1EqKuWV%2FY0fMhORaU1gXK2IL0er0wtnZferFX9PQok1t1yIgDKgEEil4QOmHy6qIR%2FNyWG2sHE3T5X8D6IndVi118AwRordBybLDziBbcOJbrpK2VfX6t3lcFoVGdMMvCWb8sa3iT7Hmj4e%2FE8ZS1J8ls8Cw1f5kb84LqcgwTtB8CYhF9zPuwvn%2FywbKaSAqWAfhWCNW%2BPcXD2M%2BxnpzPUcN45lfz1pGWORsFbV8DhIHp5JiBeNHc5GZBqKFYP%2Bid7eaH0wHxZVjvJ6jkwJkyXyVY4zwBJ0u2JWC4JxxuizalGo9QzQn77fA8Vdmy%2FzoCsBQuaIJOkWDiLCc646YUXmN7ycSmIiFM%2F3q%2BSzsY1NFuzMiS7t%2Bjw15WhDqBVL4iPmsyForPJW0Xsy47j4n%2FTLupazevb3msIiELy30iQAXMzr4vyxUT1LbHBwHUoO5l63o%2BAcmY9Y%2FsiEL5D0f%2FoRdHyjRMv4vFhaU%2FU0rPwF4%2Fdi%2BLi0W3UE0UU3wmhKRYUKyEEl1tCroaYeGpd2PehoUMpR2FBRGCCq1VumF%2FKEfu0WXqR7U64nNzFLmrmPNs1swKz4I51TScEM8qyI5yHxHnIyI8a8Aq1r7cQyAXiPQNWl31Jpic4qaswnqmfvgY6pgEPoRITXzmJgQy2UM8Z7eNfTjawyGf1x5APWQYxb2AuD9y%2BPbRlv0z7k%2BrJu21KjWio%2FEuHCCYzpHP9FxFaepyCRBfqNpHqr%2FhFxZZg8Q84LOxhQS9U8rNJ0%2BRNpYL%2BdkuvbeanENRw95zdgJg6RqAhEeey12Sx1bowYgjO416Y31hHNj0a9atTGxyeKYwKmCHAXV9VzkKL5n31EiWvTFDvuCdk98ha&X-Amz-Signature=a3ec9f8e7a3cc65d8c192c69807468b3950c1e5ac6ec73106a584c27bb0d724c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS4ELKU6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbLdez7KVs2LAFIaCUriOU5L4K3OgZa0%2B71KRnz3mLzAiAg1cqcKZczKZbsvGFwOQx1Eb%2BzJ9vYecC9GlaTy1QZSSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbSKU7yZ5smqafT2RKtwDhg1EqKuWV%2FY0fMhORaU1gXK2IL0er0wtnZferFX9PQok1t1yIgDKgEEil4QOmHy6qIR%2FNyWG2sHE3T5X8D6IndVi118AwRordBybLDziBbcOJbrpK2VfX6t3lcFoVGdMMvCWb8sa3iT7Hmj4e%2FE8ZS1J8ls8Cw1f5kb84LqcgwTtB8CYhF9zPuwvn%2FywbKaSAqWAfhWCNW%2BPcXD2M%2BxnpzPUcN45lfz1pGWORsFbV8DhIHp5JiBeNHc5GZBqKFYP%2Bid7eaH0wHxZVjvJ6jkwJkyXyVY4zwBJ0u2JWC4JxxuizalGo9QzQn77fA8Vdmy%2FzoCsBQuaIJOkWDiLCc646YUXmN7ycSmIiFM%2F3q%2BSzsY1NFuzMiS7t%2Bjw15WhDqBVL4iPmsyForPJW0Xsy47j4n%2FTLupazevb3msIiELy30iQAXMzr4vyxUT1LbHBwHUoO5l63o%2BAcmY9Y%2FsiEL5D0f%2FoRdHyjRMv4vFhaU%2FU0rPwF4%2Fdi%2BLi0W3UE0UU3wmhKRYUKyEEl1tCroaYeGpd2PehoUMpR2FBRGCCq1VumF%2FKEfu0WXqR7U64nNzFLmrmPNs1swKz4I51TScEM8qyI5yHxHnIyI8a8Aq1r7cQyAXiPQNWl31Jpic4qaswnqmfvgY6pgEPoRITXzmJgQy2UM8Z7eNfTjawyGf1x5APWQYxb2AuD9y%2BPbRlv0z7k%2BrJu21KjWio%2FEuHCCYzpHP9FxFaepyCRBfqNpHqr%2FhFxZZg8Q84LOxhQS9U8rNJ0%2BRNpYL%2BdkuvbeanENRw95zdgJg6RqAhEeey12Sx1bowYgjO416Y31hHNj0a9atTGxyeKYwKmCHAXV9VzkKL5n31EiWvTFDvuCdk98ha&X-Amz-Signature=e44a11036fe6f8e0cb6793a05bbe2d96f3293a5498f2de8c4f4ba049d89a2a55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
