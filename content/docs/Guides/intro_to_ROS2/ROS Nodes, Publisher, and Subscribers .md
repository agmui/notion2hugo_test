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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSVEHS2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQc22Vy08uhJpTHSNndZaxRA6pON6JNOOM3AJU1uAKtAiBJRE4Gutz4I2h0F0dPwKg791WaMkiyzfXOAJA5MA5yFCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfD1ggVE7fZYADxzfKtwDVzBm2dom%2B0WvWoKWcKUwaky7mPSvVIs9%2FIOQD436wUYtkyB4CfR5AbTV6nO2LCDc0Zh5xGL0nGO7Nf4zlRA4c93zrMn%2BeRmrNBMUG5Qwi11RS2U70ITx5wJ%2FRbl2%2BVQs3Og3OtQQDoDT4pKV6HrixWEWMOm1FCbQ2SAhR4QxuvYSDXkVMAQ7JBeDdpcrJKFWEK77I9Mf%2BbqA7bMyia2oKV0t99sQ8%2Bh6PVNUY5%2BinqjgK98kr00sh8qef%2B7snIUyrsnSsVv3osiB2s4FrCbEXSIe%2FWsTJUrm7bgmrdsGiIhEwwPviwwu73sPAhy4Nj7xyzV05bJg2u3IN4LBopHABCPoYAQqVg%2BbcTRd9kKnbX1f4cvR8iLqjFNLp4XGiVYGXWvtilWAzrernVlo89E0suwxoaA9JtMMw6abGivr8lMJNFMCPLUd9pv7GgqsK7EalMY1jD4kzLU6RQenmulhh4zSxgyl37Q17%2BVNv4dUjGCexA4sSnP2l4O%2BrAvZtW1NjaDc0hiAWpHWpPKqYcdUqN0EL%2BUEA0f0H25cKEEufohIgxy9Z%2BXRUnlF7YXDRd8BeHBCbVC2Esla6IWi7HK9qZFaK7ioCf0K3G2TPfxQ%2FSFr2UvkF3yFptOcatwwlID9wgY6pgHukSrg26OPR%2BJz3rdzuCTieSQb6amqO8L0aUqxBHNuS5QywVU6Zx0UB8bks8dZcWBRSGNsJ7PJVFgKDHu4BnLu6n1EXto0uL3EHBWXwId7jBUgRN9dp2nToW5a29NE8TkbEr41w%2FNd0p1vAT4Vfw6%2FTL41%2BDyJqXnSOB0dO6Z2Mr996qdI%2FP0yv9iA2TtFnFG4PtWlmqphYONUzZBWmrw2SloI58F5&X-Amz-Signature=0a0ced144ddb4d54a590d420bd1e3273581c1183e5c8a6772c1c255e9b13443b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSVEHS2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQc22Vy08uhJpTHSNndZaxRA6pON6JNOOM3AJU1uAKtAiBJRE4Gutz4I2h0F0dPwKg791WaMkiyzfXOAJA5MA5yFCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfD1ggVE7fZYADxzfKtwDVzBm2dom%2B0WvWoKWcKUwaky7mPSvVIs9%2FIOQD436wUYtkyB4CfR5AbTV6nO2LCDc0Zh5xGL0nGO7Nf4zlRA4c93zrMn%2BeRmrNBMUG5Qwi11RS2U70ITx5wJ%2FRbl2%2BVQs3Og3OtQQDoDT4pKV6HrixWEWMOm1FCbQ2SAhR4QxuvYSDXkVMAQ7JBeDdpcrJKFWEK77I9Mf%2BbqA7bMyia2oKV0t99sQ8%2Bh6PVNUY5%2BinqjgK98kr00sh8qef%2B7snIUyrsnSsVv3osiB2s4FrCbEXSIe%2FWsTJUrm7bgmrdsGiIhEwwPviwwu73sPAhy4Nj7xyzV05bJg2u3IN4LBopHABCPoYAQqVg%2BbcTRd9kKnbX1f4cvR8iLqjFNLp4XGiVYGXWvtilWAzrernVlo89E0suwxoaA9JtMMw6abGivr8lMJNFMCPLUd9pv7GgqsK7EalMY1jD4kzLU6RQenmulhh4zSxgyl37Q17%2BVNv4dUjGCexA4sSnP2l4O%2BrAvZtW1NjaDc0hiAWpHWpPKqYcdUqN0EL%2BUEA0f0H25cKEEufohIgxy9Z%2BXRUnlF7YXDRd8BeHBCbVC2Esla6IWi7HK9qZFaK7ioCf0K3G2TPfxQ%2FSFr2UvkF3yFptOcatwwlID9wgY6pgHukSrg26OPR%2BJz3rdzuCTieSQb6amqO8L0aUqxBHNuS5QywVU6Zx0UB8bks8dZcWBRSGNsJ7PJVFgKDHu4BnLu6n1EXto0uL3EHBWXwId7jBUgRN9dp2nToW5a29NE8TkbEr41w%2FNd0p1vAT4Vfw6%2FTL41%2BDyJqXnSOB0dO6Z2Mr996qdI%2FP0yv9iA2TtFnFG4PtWlmqphYONUzZBWmrw2SloI58F5&X-Amz-Signature=7796d25ff5859a075180ad9d6ff0e70f2e54ce9e8e4c331f147cb72de7131454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSVEHS2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQc22Vy08uhJpTHSNndZaxRA6pON6JNOOM3AJU1uAKtAiBJRE4Gutz4I2h0F0dPwKg791WaMkiyzfXOAJA5MA5yFCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfD1ggVE7fZYADxzfKtwDVzBm2dom%2B0WvWoKWcKUwaky7mPSvVIs9%2FIOQD436wUYtkyB4CfR5AbTV6nO2LCDc0Zh5xGL0nGO7Nf4zlRA4c93zrMn%2BeRmrNBMUG5Qwi11RS2U70ITx5wJ%2FRbl2%2BVQs3Og3OtQQDoDT4pKV6HrixWEWMOm1FCbQ2SAhR4QxuvYSDXkVMAQ7JBeDdpcrJKFWEK77I9Mf%2BbqA7bMyia2oKV0t99sQ8%2Bh6PVNUY5%2BinqjgK98kr00sh8qef%2B7snIUyrsnSsVv3osiB2s4FrCbEXSIe%2FWsTJUrm7bgmrdsGiIhEwwPviwwu73sPAhy4Nj7xyzV05bJg2u3IN4LBopHABCPoYAQqVg%2BbcTRd9kKnbX1f4cvR8iLqjFNLp4XGiVYGXWvtilWAzrernVlo89E0suwxoaA9JtMMw6abGivr8lMJNFMCPLUd9pv7GgqsK7EalMY1jD4kzLU6RQenmulhh4zSxgyl37Q17%2BVNv4dUjGCexA4sSnP2l4O%2BrAvZtW1NjaDc0hiAWpHWpPKqYcdUqN0EL%2BUEA0f0H25cKEEufohIgxy9Z%2BXRUnlF7YXDRd8BeHBCbVC2Esla6IWi7HK9qZFaK7ioCf0K3G2TPfxQ%2FSFr2UvkF3yFptOcatwwlID9wgY6pgHukSrg26OPR%2BJz3rdzuCTieSQb6amqO8L0aUqxBHNuS5QywVU6Zx0UB8bks8dZcWBRSGNsJ7PJVFgKDHu4BnLu6n1EXto0uL3EHBWXwId7jBUgRN9dp2nToW5a29NE8TkbEr41w%2FNd0p1vAT4Vfw6%2FTL41%2BDyJqXnSOB0dO6Z2Mr996qdI%2FP0yv9iA2TtFnFG4PtWlmqphYONUzZBWmrw2SloI58F5&X-Amz-Signature=453fa01f1b19fcbbf0285ea0597d74279427cb03c736956a9090ba30053e1d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSVEHS2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQc22Vy08uhJpTHSNndZaxRA6pON6JNOOM3AJU1uAKtAiBJRE4Gutz4I2h0F0dPwKg791WaMkiyzfXOAJA5MA5yFCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfD1ggVE7fZYADxzfKtwDVzBm2dom%2B0WvWoKWcKUwaky7mPSvVIs9%2FIOQD436wUYtkyB4CfR5AbTV6nO2LCDc0Zh5xGL0nGO7Nf4zlRA4c93zrMn%2BeRmrNBMUG5Qwi11RS2U70ITx5wJ%2FRbl2%2BVQs3Og3OtQQDoDT4pKV6HrixWEWMOm1FCbQ2SAhR4QxuvYSDXkVMAQ7JBeDdpcrJKFWEK77I9Mf%2BbqA7bMyia2oKV0t99sQ8%2Bh6PVNUY5%2BinqjgK98kr00sh8qef%2B7snIUyrsnSsVv3osiB2s4FrCbEXSIe%2FWsTJUrm7bgmrdsGiIhEwwPviwwu73sPAhy4Nj7xyzV05bJg2u3IN4LBopHABCPoYAQqVg%2BbcTRd9kKnbX1f4cvR8iLqjFNLp4XGiVYGXWvtilWAzrernVlo89E0suwxoaA9JtMMw6abGivr8lMJNFMCPLUd9pv7GgqsK7EalMY1jD4kzLU6RQenmulhh4zSxgyl37Q17%2BVNv4dUjGCexA4sSnP2l4O%2BrAvZtW1NjaDc0hiAWpHWpPKqYcdUqN0EL%2BUEA0f0H25cKEEufohIgxy9Z%2BXRUnlF7YXDRd8BeHBCbVC2Esla6IWi7HK9qZFaK7ioCf0K3G2TPfxQ%2FSFr2UvkF3yFptOcatwwlID9wgY6pgHukSrg26OPR%2BJz3rdzuCTieSQb6amqO8L0aUqxBHNuS5QywVU6Zx0UB8bks8dZcWBRSGNsJ7PJVFgKDHu4BnLu6n1EXto0uL3EHBWXwId7jBUgRN9dp2nToW5a29NE8TkbEr41w%2FNd0p1vAT4Vfw6%2FTL41%2BDyJqXnSOB0dO6Z2Mr996qdI%2FP0yv9iA2TtFnFG4PtWlmqphYONUzZBWmrw2SloI58F5&X-Amz-Signature=546a5e838e8b78f16b1718339f14517070cbbbb01c7ad2d8ad6851d79e6204e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSVEHS2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQc22Vy08uhJpTHSNndZaxRA6pON6JNOOM3AJU1uAKtAiBJRE4Gutz4I2h0F0dPwKg791WaMkiyzfXOAJA5MA5yFCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfD1ggVE7fZYADxzfKtwDVzBm2dom%2B0WvWoKWcKUwaky7mPSvVIs9%2FIOQD436wUYtkyB4CfR5AbTV6nO2LCDc0Zh5xGL0nGO7Nf4zlRA4c93zrMn%2BeRmrNBMUG5Qwi11RS2U70ITx5wJ%2FRbl2%2BVQs3Og3OtQQDoDT4pKV6HrixWEWMOm1FCbQ2SAhR4QxuvYSDXkVMAQ7JBeDdpcrJKFWEK77I9Mf%2BbqA7bMyia2oKV0t99sQ8%2Bh6PVNUY5%2BinqjgK98kr00sh8qef%2B7snIUyrsnSsVv3osiB2s4FrCbEXSIe%2FWsTJUrm7bgmrdsGiIhEwwPviwwu73sPAhy4Nj7xyzV05bJg2u3IN4LBopHABCPoYAQqVg%2BbcTRd9kKnbX1f4cvR8iLqjFNLp4XGiVYGXWvtilWAzrernVlo89E0suwxoaA9JtMMw6abGivr8lMJNFMCPLUd9pv7GgqsK7EalMY1jD4kzLU6RQenmulhh4zSxgyl37Q17%2BVNv4dUjGCexA4sSnP2l4O%2BrAvZtW1NjaDc0hiAWpHWpPKqYcdUqN0EL%2BUEA0f0H25cKEEufohIgxy9Z%2BXRUnlF7YXDRd8BeHBCbVC2Esla6IWi7HK9qZFaK7ioCf0K3G2TPfxQ%2FSFr2UvkF3yFptOcatwwlID9wgY6pgHukSrg26OPR%2BJz3rdzuCTieSQb6amqO8L0aUqxBHNuS5QywVU6Zx0UB8bks8dZcWBRSGNsJ7PJVFgKDHu4BnLu6n1EXto0uL3EHBWXwId7jBUgRN9dp2nToW5a29NE8TkbEr41w%2FNd0p1vAT4Vfw6%2FTL41%2BDyJqXnSOB0dO6Z2Mr996qdI%2FP0yv9iA2TtFnFG4PtWlmqphYONUzZBWmrw2SloI58F5&X-Amz-Signature=e9d55478f704781e3d4dc9febf0a8ecd6096f30f1a2d042adf1643c28d49832a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSVEHS2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQc22Vy08uhJpTHSNndZaxRA6pON6JNOOM3AJU1uAKtAiBJRE4Gutz4I2h0F0dPwKg791WaMkiyzfXOAJA5MA5yFCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfD1ggVE7fZYADxzfKtwDVzBm2dom%2B0WvWoKWcKUwaky7mPSvVIs9%2FIOQD436wUYtkyB4CfR5AbTV6nO2LCDc0Zh5xGL0nGO7Nf4zlRA4c93zrMn%2BeRmrNBMUG5Qwi11RS2U70ITx5wJ%2FRbl2%2BVQs3Og3OtQQDoDT4pKV6HrixWEWMOm1FCbQ2SAhR4QxuvYSDXkVMAQ7JBeDdpcrJKFWEK77I9Mf%2BbqA7bMyia2oKV0t99sQ8%2Bh6PVNUY5%2BinqjgK98kr00sh8qef%2B7snIUyrsnSsVv3osiB2s4FrCbEXSIe%2FWsTJUrm7bgmrdsGiIhEwwPviwwu73sPAhy4Nj7xyzV05bJg2u3IN4LBopHABCPoYAQqVg%2BbcTRd9kKnbX1f4cvR8iLqjFNLp4XGiVYGXWvtilWAzrernVlo89E0suwxoaA9JtMMw6abGivr8lMJNFMCPLUd9pv7GgqsK7EalMY1jD4kzLU6RQenmulhh4zSxgyl37Q17%2BVNv4dUjGCexA4sSnP2l4O%2BrAvZtW1NjaDc0hiAWpHWpPKqYcdUqN0EL%2BUEA0f0H25cKEEufohIgxy9Z%2BXRUnlF7YXDRd8BeHBCbVC2Esla6IWi7HK9qZFaK7ioCf0K3G2TPfxQ%2FSFr2UvkF3yFptOcatwwlID9wgY6pgHukSrg26OPR%2BJz3rdzuCTieSQb6amqO8L0aUqxBHNuS5QywVU6Zx0UB8bks8dZcWBRSGNsJ7PJVFgKDHu4BnLu6n1EXto0uL3EHBWXwId7jBUgRN9dp2nToW5a29NE8TkbEr41w%2FNd0p1vAT4Vfw6%2FTL41%2BDyJqXnSOB0dO6Z2Mr996qdI%2FP0yv9iA2TtFnFG4PtWlmqphYONUzZBWmrw2SloI58F5&X-Amz-Signature=3373da827dddbfe9edeaa1d27c901db315018fc20703f64ba620dfd87983740e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSVEHS2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQc22Vy08uhJpTHSNndZaxRA6pON6JNOOM3AJU1uAKtAiBJRE4Gutz4I2h0F0dPwKg791WaMkiyzfXOAJA5MA5yFCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfD1ggVE7fZYADxzfKtwDVzBm2dom%2B0WvWoKWcKUwaky7mPSvVIs9%2FIOQD436wUYtkyB4CfR5AbTV6nO2LCDc0Zh5xGL0nGO7Nf4zlRA4c93zrMn%2BeRmrNBMUG5Qwi11RS2U70ITx5wJ%2FRbl2%2BVQs3Og3OtQQDoDT4pKV6HrixWEWMOm1FCbQ2SAhR4QxuvYSDXkVMAQ7JBeDdpcrJKFWEK77I9Mf%2BbqA7bMyia2oKV0t99sQ8%2Bh6PVNUY5%2BinqjgK98kr00sh8qef%2B7snIUyrsnSsVv3osiB2s4FrCbEXSIe%2FWsTJUrm7bgmrdsGiIhEwwPviwwu73sPAhy4Nj7xyzV05bJg2u3IN4LBopHABCPoYAQqVg%2BbcTRd9kKnbX1f4cvR8iLqjFNLp4XGiVYGXWvtilWAzrernVlo89E0suwxoaA9JtMMw6abGivr8lMJNFMCPLUd9pv7GgqsK7EalMY1jD4kzLU6RQenmulhh4zSxgyl37Q17%2BVNv4dUjGCexA4sSnP2l4O%2BrAvZtW1NjaDc0hiAWpHWpPKqYcdUqN0EL%2BUEA0f0H25cKEEufohIgxy9Z%2BXRUnlF7YXDRd8BeHBCbVC2Esla6IWi7HK9qZFaK7ioCf0K3G2TPfxQ%2FSFr2UvkF3yFptOcatwwlID9wgY6pgHukSrg26OPR%2BJz3rdzuCTieSQb6amqO8L0aUqxBHNuS5QywVU6Zx0UB8bks8dZcWBRSGNsJ7PJVFgKDHu4BnLu6n1EXto0uL3EHBWXwId7jBUgRN9dp2nToW5a29NE8TkbEr41w%2FNd0p1vAT4Vfw6%2FTL41%2BDyJqXnSOB0dO6Z2Mr996qdI%2FP0yv9iA2TtFnFG4PtWlmqphYONUzZBWmrw2SloI58F5&X-Amz-Signature=77b5da9dc75f6e92f5e2ef77e9cf978aefe486164c10d15f28932d1f14743c83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSVEHS2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQc22Vy08uhJpTHSNndZaxRA6pON6JNOOM3AJU1uAKtAiBJRE4Gutz4I2h0F0dPwKg791WaMkiyzfXOAJA5MA5yFCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfD1ggVE7fZYADxzfKtwDVzBm2dom%2B0WvWoKWcKUwaky7mPSvVIs9%2FIOQD436wUYtkyB4CfR5AbTV6nO2LCDc0Zh5xGL0nGO7Nf4zlRA4c93zrMn%2BeRmrNBMUG5Qwi11RS2U70ITx5wJ%2FRbl2%2BVQs3Og3OtQQDoDT4pKV6HrixWEWMOm1FCbQ2SAhR4QxuvYSDXkVMAQ7JBeDdpcrJKFWEK77I9Mf%2BbqA7bMyia2oKV0t99sQ8%2Bh6PVNUY5%2BinqjgK98kr00sh8qef%2B7snIUyrsnSsVv3osiB2s4FrCbEXSIe%2FWsTJUrm7bgmrdsGiIhEwwPviwwu73sPAhy4Nj7xyzV05bJg2u3IN4LBopHABCPoYAQqVg%2BbcTRd9kKnbX1f4cvR8iLqjFNLp4XGiVYGXWvtilWAzrernVlo89E0suwxoaA9JtMMw6abGivr8lMJNFMCPLUd9pv7GgqsK7EalMY1jD4kzLU6RQenmulhh4zSxgyl37Q17%2BVNv4dUjGCexA4sSnP2l4O%2BrAvZtW1NjaDc0hiAWpHWpPKqYcdUqN0EL%2BUEA0f0H25cKEEufohIgxy9Z%2BXRUnlF7YXDRd8BeHBCbVC2Esla6IWi7HK9qZFaK7ioCf0K3G2TPfxQ%2FSFr2UvkF3yFptOcatwwlID9wgY6pgHukSrg26OPR%2BJz3rdzuCTieSQb6amqO8L0aUqxBHNuS5QywVU6Zx0UB8bks8dZcWBRSGNsJ7PJVFgKDHu4BnLu6n1EXto0uL3EHBWXwId7jBUgRN9dp2nToW5a29NE8TkbEr41w%2FNd0p1vAT4Vfw6%2FTL41%2BDyJqXnSOB0dO6Z2Mr996qdI%2FP0yv9iA2TtFnFG4PtWlmqphYONUzZBWmrw2SloI58F5&X-Amz-Signature=5cba13cf5c042b0c26962e2ba7498ca25f3c545a3f071d7c9f367315b9d9b1bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
