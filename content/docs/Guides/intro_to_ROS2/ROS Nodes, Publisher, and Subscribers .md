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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZN735A4%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaAfMM%2FBei14sd8UBW2kIIu13OVNPXLREAnPWSj%2BjN5AiA5Iu5vmQd8mwkIga7Z3ILz02x0wDvoxJfDg5Sc6R086SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyIkQGvQNl6wEr0%2BJKtwDRUMrWIv57JdcwUaYlEpmxCPCNih89pHwsUFaG0RaM8az2kPtXw703H3qPOWl3q8xZ%2BZPXD%2BrLPo%2FSIGm8rouKBEqVd1hmeYA6uFKMsbZKhaC7cw7%2FjkY60t0KCW3Mw8yAofQPA23QzV9lDJIvd5dS12hcNfaYHXEWWomhQdoh8jVB9DrXy%2BeK53On65hQLme8QM5HEvwYpXGkQw94KfAkeagR2d0jElt5R%2BDATm79bjLG5CZg7tM4NgTis8w5qrkkyu7lrQtCbOm2UNHmAzqc3bpw30dOPX4NgCg7lTXnQTSe6JsQkpw689RcrvhF%2BeFjq8%2F1Wg9OvXSLJOqcwO9E4hyfeyaaVv8W%2BV2QyvbbxLUVeArfmoWBZbyGRY54LIfUsj2lj5%2F0kZ9QfxNUI4r37pR2lNgpWEJEawy44IMOc86%2FB2aQ7%2BOBUehCuWE2CZvTc5C0foU4KTfZ2cXfri7iwMQowmC5b6iler8kj5yhP%2Bomlmwv79ibp2hIeIai5326UPSsGkgQR9AE6bUKFj%2F3CeXwXT8OtYNf%2FxKiG7xrxzeNFtpIoHzcs%2BhTLFY3zLXA4qytsimrOiJ4EBAz%2BMrh6HxB6t5sWkwY3avr64zh%2BFfAmKBEGONP9UfwtAwlp%2B9xgY6pgEIVzlX7P6EPBLwGIg6f5IlHd03HZcKtTrGrvcH2%2BIZRO3n4ODDyaRd6MyYHqavHaahPc0MoFo3ThDIFPBV0pMxX766YMQOctYLaCmwEW2LgIOoLKNI673FQ6ySIonNpcxWyqbv3jeGyNiM%2BNLJUiCwk6rWsi9OLqt9dQwm2159NPeVZWuwLMJWWyZFAgqLMDNA4AHXq%2B%2Fm%2B6WiF0lGDuigyYxLrymq&X-Amz-Signature=f3b4d4ef7d8c8c13cde749ff7ae28c0da54b82ed0590f8e8b7e690cb0f35abc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZN735A4%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaAfMM%2FBei14sd8UBW2kIIu13OVNPXLREAnPWSj%2BjN5AiA5Iu5vmQd8mwkIga7Z3ILz02x0wDvoxJfDg5Sc6R086SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyIkQGvQNl6wEr0%2BJKtwDRUMrWIv57JdcwUaYlEpmxCPCNih89pHwsUFaG0RaM8az2kPtXw703H3qPOWl3q8xZ%2BZPXD%2BrLPo%2FSIGm8rouKBEqVd1hmeYA6uFKMsbZKhaC7cw7%2FjkY60t0KCW3Mw8yAofQPA23QzV9lDJIvd5dS12hcNfaYHXEWWomhQdoh8jVB9DrXy%2BeK53On65hQLme8QM5HEvwYpXGkQw94KfAkeagR2d0jElt5R%2BDATm79bjLG5CZg7tM4NgTis8w5qrkkyu7lrQtCbOm2UNHmAzqc3bpw30dOPX4NgCg7lTXnQTSe6JsQkpw689RcrvhF%2BeFjq8%2F1Wg9OvXSLJOqcwO9E4hyfeyaaVv8W%2BV2QyvbbxLUVeArfmoWBZbyGRY54LIfUsj2lj5%2F0kZ9QfxNUI4r37pR2lNgpWEJEawy44IMOc86%2FB2aQ7%2BOBUehCuWE2CZvTc5C0foU4KTfZ2cXfri7iwMQowmC5b6iler8kj5yhP%2Bomlmwv79ibp2hIeIai5326UPSsGkgQR9AE6bUKFj%2F3CeXwXT8OtYNf%2FxKiG7xrxzeNFtpIoHzcs%2BhTLFY3zLXA4qytsimrOiJ4EBAz%2BMrh6HxB6t5sWkwY3avr64zh%2BFfAmKBEGONP9UfwtAwlp%2B9xgY6pgEIVzlX7P6EPBLwGIg6f5IlHd03HZcKtTrGrvcH2%2BIZRO3n4ODDyaRd6MyYHqavHaahPc0MoFo3ThDIFPBV0pMxX766YMQOctYLaCmwEW2LgIOoLKNI673FQ6ySIonNpcxWyqbv3jeGyNiM%2BNLJUiCwk6rWsi9OLqt9dQwm2159NPeVZWuwLMJWWyZFAgqLMDNA4AHXq%2B%2Fm%2B6WiF0lGDuigyYxLrymq&X-Amz-Signature=c6f2084bfda596d8b35111d7bec6cda20d956d3fac9ecd132075f51ae52662c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZN735A4%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaAfMM%2FBei14sd8UBW2kIIu13OVNPXLREAnPWSj%2BjN5AiA5Iu5vmQd8mwkIga7Z3ILz02x0wDvoxJfDg5Sc6R086SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyIkQGvQNl6wEr0%2BJKtwDRUMrWIv57JdcwUaYlEpmxCPCNih89pHwsUFaG0RaM8az2kPtXw703H3qPOWl3q8xZ%2BZPXD%2BrLPo%2FSIGm8rouKBEqVd1hmeYA6uFKMsbZKhaC7cw7%2FjkY60t0KCW3Mw8yAofQPA23QzV9lDJIvd5dS12hcNfaYHXEWWomhQdoh8jVB9DrXy%2BeK53On65hQLme8QM5HEvwYpXGkQw94KfAkeagR2d0jElt5R%2BDATm79bjLG5CZg7tM4NgTis8w5qrkkyu7lrQtCbOm2UNHmAzqc3bpw30dOPX4NgCg7lTXnQTSe6JsQkpw689RcrvhF%2BeFjq8%2F1Wg9OvXSLJOqcwO9E4hyfeyaaVv8W%2BV2QyvbbxLUVeArfmoWBZbyGRY54LIfUsj2lj5%2F0kZ9QfxNUI4r37pR2lNgpWEJEawy44IMOc86%2FB2aQ7%2BOBUehCuWE2CZvTc5C0foU4KTfZ2cXfri7iwMQowmC5b6iler8kj5yhP%2Bomlmwv79ibp2hIeIai5326UPSsGkgQR9AE6bUKFj%2F3CeXwXT8OtYNf%2FxKiG7xrxzeNFtpIoHzcs%2BhTLFY3zLXA4qytsimrOiJ4EBAz%2BMrh6HxB6t5sWkwY3avr64zh%2BFfAmKBEGONP9UfwtAwlp%2B9xgY6pgEIVzlX7P6EPBLwGIg6f5IlHd03HZcKtTrGrvcH2%2BIZRO3n4ODDyaRd6MyYHqavHaahPc0MoFo3ThDIFPBV0pMxX766YMQOctYLaCmwEW2LgIOoLKNI673FQ6ySIonNpcxWyqbv3jeGyNiM%2BNLJUiCwk6rWsi9OLqt9dQwm2159NPeVZWuwLMJWWyZFAgqLMDNA4AHXq%2B%2Fm%2B6WiF0lGDuigyYxLrymq&X-Amz-Signature=fcecc5c7f10649de2fdc4ce60df9642f9953bd0b99d27f02a612bad984de9a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZN735A4%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaAfMM%2FBei14sd8UBW2kIIu13OVNPXLREAnPWSj%2BjN5AiA5Iu5vmQd8mwkIga7Z3ILz02x0wDvoxJfDg5Sc6R086SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyIkQGvQNl6wEr0%2BJKtwDRUMrWIv57JdcwUaYlEpmxCPCNih89pHwsUFaG0RaM8az2kPtXw703H3qPOWl3q8xZ%2BZPXD%2BrLPo%2FSIGm8rouKBEqVd1hmeYA6uFKMsbZKhaC7cw7%2FjkY60t0KCW3Mw8yAofQPA23QzV9lDJIvd5dS12hcNfaYHXEWWomhQdoh8jVB9DrXy%2BeK53On65hQLme8QM5HEvwYpXGkQw94KfAkeagR2d0jElt5R%2BDATm79bjLG5CZg7tM4NgTis8w5qrkkyu7lrQtCbOm2UNHmAzqc3bpw30dOPX4NgCg7lTXnQTSe6JsQkpw689RcrvhF%2BeFjq8%2F1Wg9OvXSLJOqcwO9E4hyfeyaaVv8W%2BV2QyvbbxLUVeArfmoWBZbyGRY54LIfUsj2lj5%2F0kZ9QfxNUI4r37pR2lNgpWEJEawy44IMOc86%2FB2aQ7%2BOBUehCuWE2CZvTc5C0foU4KTfZ2cXfri7iwMQowmC5b6iler8kj5yhP%2Bomlmwv79ibp2hIeIai5326UPSsGkgQR9AE6bUKFj%2F3CeXwXT8OtYNf%2FxKiG7xrxzeNFtpIoHzcs%2BhTLFY3zLXA4qytsimrOiJ4EBAz%2BMrh6HxB6t5sWkwY3avr64zh%2BFfAmKBEGONP9UfwtAwlp%2B9xgY6pgEIVzlX7P6EPBLwGIg6f5IlHd03HZcKtTrGrvcH2%2BIZRO3n4ODDyaRd6MyYHqavHaahPc0MoFo3ThDIFPBV0pMxX766YMQOctYLaCmwEW2LgIOoLKNI673FQ6ySIonNpcxWyqbv3jeGyNiM%2BNLJUiCwk6rWsi9OLqt9dQwm2159NPeVZWuwLMJWWyZFAgqLMDNA4AHXq%2B%2Fm%2B6WiF0lGDuigyYxLrymq&X-Amz-Signature=46047a39a610ef7ced4eb2e5e251570ac5c5187351743af9fb20932144b9fb32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZN735A4%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaAfMM%2FBei14sd8UBW2kIIu13OVNPXLREAnPWSj%2BjN5AiA5Iu5vmQd8mwkIga7Z3ILz02x0wDvoxJfDg5Sc6R086SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyIkQGvQNl6wEr0%2BJKtwDRUMrWIv57JdcwUaYlEpmxCPCNih89pHwsUFaG0RaM8az2kPtXw703H3qPOWl3q8xZ%2BZPXD%2BrLPo%2FSIGm8rouKBEqVd1hmeYA6uFKMsbZKhaC7cw7%2FjkY60t0KCW3Mw8yAofQPA23QzV9lDJIvd5dS12hcNfaYHXEWWomhQdoh8jVB9DrXy%2BeK53On65hQLme8QM5HEvwYpXGkQw94KfAkeagR2d0jElt5R%2BDATm79bjLG5CZg7tM4NgTis8w5qrkkyu7lrQtCbOm2UNHmAzqc3bpw30dOPX4NgCg7lTXnQTSe6JsQkpw689RcrvhF%2BeFjq8%2F1Wg9OvXSLJOqcwO9E4hyfeyaaVv8W%2BV2QyvbbxLUVeArfmoWBZbyGRY54LIfUsj2lj5%2F0kZ9QfxNUI4r37pR2lNgpWEJEawy44IMOc86%2FB2aQ7%2BOBUehCuWE2CZvTc5C0foU4KTfZ2cXfri7iwMQowmC5b6iler8kj5yhP%2Bomlmwv79ibp2hIeIai5326UPSsGkgQR9AE6bUKFj%2F3CeXwXT8OtYNf%2FxKiG7xrxzeNFtpIoHzcs%2BhTLFY3zLXA4qytsimrOiJ4EBAz%2BMrh6HxB6t5sWkwY3avr64zh%2BFfAmKBEGONP9UfwtAwlp%2B9xgY6pgEIVzlX7P6EPBLwGIg6f5IlHd03HZcKtTrGrvcH2%2BIZRO3n4ODDyaRd6MyYHqavHaahPc0MoFo3ThDIFPBV0pMxX766YMQOctYLaCmwEW2LgIOoLKNI673FQ6ySIonNpcxWyqbv3jeGyNiM%2BNLJUiCwk6rWsi9OLqt9dQwm2159NPeVZWuwLMJWWyZFAgqLMDNA4AHXq%2B%2Fm%2B6WiF0lGDuigyYxLrymq&X-Amz-Signature=9009c9d0d1969b9c6810281d6b708f0acf929d7e9cba92e435a54b3449fc24ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZN735A4%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaAfMM%2FBei14sd8UBW2kIIu13OVNPXLREAnPWSj%2BjN5AiA5Iu5vmQd8mwkIga7Z3ILz02x0wDvoxJfDg5Sc6R086SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyIkQGvQNl6wEr0%2BJKtwDRUMrWIv57JdcwUaYlEpmxCPCNih89pHwsUFaG0RaM8az2kPtXw703H3qPOWl3q8xZ%2BZPXD%2BrLPo%2FSIGm8rouKBEqVd1hmeYA6uFKMsbZKhaC7cw7%2FjkY60t0KCW3Mw8yAofQPA23QzV9lDJIvd5dS12hcNfaYHXEWWomhQdoh8jVB9DrXy%2BeK53On65hQLme8QM5HEvwYpXGkQw94KfAkeagR2d0jElt5R%2BDATm79bjLG5CZg7tM4NgTis8w5qrkkyu7lrQtCbOm2UNHmAzqc3bpw30dOPX4NgCg7lTXnQTSe6JsQkpw689RcrvhF%2BeFjq8%2F1Wg9OvXSLJOqcwO9E4hyfeyaaVv8W%2BV2QyvbbxLUVeArfmoWBZbyGRY54LIfUsj2lj5%2F0kZ9QfxNUI4r37pR2lNgpWEJEawy44IMOc86%2FB2aQ7%2BOBUehCuWE2CZvTc5C0foU4KTfZ2cXfri7iwMQowmC5b6iler8kj5yhP%2Bomlmwv79ibp2hIeIai5326UPSsGkgQR9AE6bUKFj%2F3CeXwXT8OtYNf%2FxKiG7xrxzeNFtpIoHzcs%2BhTLFY3zLXA4qytsimrOiJ4EBAz%2BMrh6HxB6t5sWkwY3avr64zh%2BFfAmKBEGONP9UfwtAwlp%2B9xgY6pgEIVzlX7P6EPBLwGIg6f5IlHd03HZcKtTrGrvcH2%2BIZRO3n4ODDyaRd6MyYHqavHaahPc0MoFo3ThDIFPBV0pMxX766YMQOctYLaCmwEW2LgIOoLKNI673FQ6ySIonNpcxWyqbv3jeGyNiM%2BNLJUiCwk6rWsi9OLqt9dQwm2159NPeVZWuwLMJWWyZFAgqLMDNA4AHXq%2B%2Fm%2B6WiF0lGDuigyYxLrymq&X-Amz-Signature=6330a86dc715c6c956800726eab7d6c2946a5aa04da0169da84f508ebcf71cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZN735A4%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaAfMM%2FBei14sd8UBW2kIIu13OVNPXLREAnPWSj%2BjN5AiA5Iu5vmQd8mwkIga7Z3ILz02x0wDvoxJfDg5Sc6R086SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyIkQGvQNl6wEr0%2BJKtwDRUMrWIv57JdcwUaYlEpmxCPCNih89pHwsUFaG0RaM8az2kPtXw703H3qPOWl3q8xZ%2BZPXD%2BrLPo%2FSIGm8rouKBEqVd1hmeYA6uFKMsbZKhaC7cw7%2FjkY60t0KCW3Mw8yAofQPA23QzV9lDJIvd5dS12hcNfaYHXEWWomhQdoh8jVB9DrXy%2BeK53On65hQLme8QM5HEvwYpXGkQw94KfAkeagR2d0jElt5R%2BDATm79bjLG5CZg7tM4NgTis8w5qrkkyu7lrQtCbOm2UNHmAzqc3bpw30dOPX4NgCg7lTXnQTSe6JsQkpw689RcrvhF%2BeFjq8%2F1Wg9OvXSLJOqcwO9E4hyfeyaaVv8W%2BV2QyvbbxLUVeArfmoWBZbyGRY54LIfUsj2lj5%2F0kZ9QfxNUI4r37pR2lNgpWEJEawy44IMOc86%2FB2aQ7%2BOBUehCuWE2CZvTc5C0foU4KTfZ2cXfri7iwMQowmC5b6iler8kj5yhP%2Bomlmwv79ibp2hIeIai5326UPSsGkgQR9AE6bUKFj%2F3CeXwXT8OtYNf%2FxKiG7xrxzeNFtpIoHzcs%2BhTLFY3zLXA4qytsimrOiJ4EBAz%2BMrh6HxB6t5sWkwY3avr64zh%2BFfAmKBEGONP9UfwtAwlp%2B9xgY6pgEIVzlX7P6EPBLwGIg6f5IlHd03HZcKtTrGrvcH2%2BIZRO3n4ODDyaRd6MyYHqavHaahPc0MoFo3ThDIFPBV0pMxX766YMQOctYLaCmwEW2LgIOoLKNI673FQ6ySIonNpcxWyqbv3jeGyNiM%2BNLJUiCwk6rWsi9OLqt9dQwm2159NPeVZWuwLMJWWyZFAgqLMDNA4AHXq%2B%2Fm%2B6WiF0lGDuigyYxLrymq&X-Amz-Signature=302a3f75cf9360ea074ff0e82d94d8819bc1fd2e89337600c2261e0867f78e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZN735A4%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaAfMM%2FBei14sd8UBW2kIIu13OVNPXLREAnPWSj%2BjN5AiA5Iu5vmQd8mwkIga7Z3ILz02x0wDvoxJfDg5Sc6R086SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyIkQGvQNl6wEr0%2BJKtwDRUMrWIv57JdcwUaYlEpmxCPCNih89pHwsUFaG0RaM8az2kPtXw703H3qPOWl3q8xZ%2BZPXD%2BrLPo%2FSIGm8rouKBEqVd1hmeYA6uFKMsbZKhaC7cw7%2FjkY60t0KCW3Mw8yAofQPA23QzV9lDJIvd5dS12hcNfaYHXEWWomhQdoh8jVB9DrXy%2BeK53On65hQLme8QM5HEvwYpXGkQw94KfAkeagR2d0jElt5R%2BDATm79bjLG5CZg7tM4NgTis8w5qrkkyu7lrQtCbOm2UNHmAzqc3bpw30dOPX4NgCg7lTXnQTSe6JsQkpw689RcrvhF%2BeFjq8%2F1Wg9OvXSLJOqcwO9E4hyfeyaaVv8W%2BV2QyvbbxLUVeArfmoWBZbyGRY54LIfUsj2lj5%2F0kZ9QfxNUI4r37pR2lNgpWEJEawy44IMOc86%2FB2aQ7%2BOBUehCuWE2CZvTc5C0foU4KTfZ2cXfri7iwMQowmC5b6iler8kj5yhP%2Bomlmwv79ibp2hIeIai5326UPSsGkgQR9AE6bUKFj%2F3CeXwXT8OtYNf%2FxKiG7xrxzeNFtpIoHzcs%2BhTLFY3zLXA4qytsimrOiJ4EBAz%2BMrh6HxB6t5sWkwY3avr64zh%2BFfAmKBEGONP9UfwtAwlp%2B9xgY6pgEIVzlX7P6EPBLwGIg6f5IlHd03HZcKtTrGrvcH2%2BIZRO3n4ODDyaRd6MyYHqavHaahPc0MoFo3ThDIFPBV0pMxX766YMQOctYLaCmwEW2LgIOoLKNI673FQ6ySIonNpcxWyqbv3jeGyNiM%2BNLJUiCwk6rWsi9OLqt9dQwm2159NPeVZWuwLMJWWyZFAgqLMDNA4AHXq%2B%2Fm%2B6WiF0lGDuigyYxLrymq&X-Amz-Signature=a9107e6e43f66bc2bf0ea83af646709e227c028199ecbb7fdefbb1fadbe7d1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
