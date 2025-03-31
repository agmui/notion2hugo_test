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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOF34TI5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIChZtWYNkTKkTLT1%2Boou6jC1SOpvVUr7EcOAywX9OQNFAiAEA7iId5feOQVS%2Bd3z0uucRGF4TLFf1BvdgCT8tCMojCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6OO6sRnIZs1PYrlDKtwDc1xxf9u8F5Fyf7KXkWh%2BfGec1LwcybA3fOvj1U%2Bm0nLlQsyHkPXf6pcVaHGw%2FMIAQgIQPt%2BxVSizuOy3rUNB3Fd1BqRHiuDM1tYpGG9OgPD%2FJfiXDs4BXKxlP6MXPtt2fLn2nWozDIi9LL6r1bxnj1TwxQu5GoH3dUR7KP5aZlTHtzu8ISEVqiIqwAuOGzmIRzWu52PDYseJq483uE99%2F1nyuwubZSHO%2BsdXj3%2BaidyxoPpw9CqqArMrhZ3T8LlLlRNMGhUzw2RY%2FomXBFSH6gzXURArOzBnDAjvsWRdpBkDo0hZ6qf5akH8AheVEGE1PUcNCgKf283i492VrS8wC4CUFYCV6%2FszRPB2OIqiCf2vu7Fd5Dys1gmCgrw0s1RGZP8kWFQgy481IBpnJdeqb0dPbWY2%2Fp9QEss08AyPJmZ0f%2Bvp3aelc3jDf36NSvqq7Xacs%2F3jnLvZuPbsDZSOgX0QuIx1lhjtWpNZPqLmSb9aznin8tIKjDtbtJ8vymmy4kRdhDkLkryvN2no418ZG5wDI%2BSX2yJWTwRlD%2FWHtCXBSuA7u1gcWpe%2BpCEFckRzKu80Yr7BCFU%2FkSLyZFI8ueSn6baiLT4ZfG31tK41fDPwDrMwc8aMYXPKJj0wiOWovwY6pgGBHek%2Bem8DN1FSUKKDgK%2F%2BamFYuWInAA4HE1y4INuGOmdp7Jebs4qFq56pLEouk0KbhB0gBWBXNDdTl4zgfwpZN%2B2d%2BeFYLFBLq5D6Cir1tFM92NDU9KdUDR%2BcOOBR8zQfyQD60qU5cCWEsty9iOqRBt68DUQTRW2eciulwByKnLZn3QJDGZxm0%2FpWxtRph6RLKgvUwfxHNNPZkVvkA4WudIz%2B1N3e&X-Amz-Signature=8c9c623816ec2026e89cb74f10641cf8e6cd80039fa17acdb3c4020a233f811a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOF34TI5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIChZtWYNkTKkTLT1%2Boou6jC1SOpvVUr7EcOAywX9OQNFAiAEA7iId5feOQVS%2Bd3z0uucRGF4TLFf1BvdgCT8tCMojCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6OO6sRnIZs1PYrlDKtwDc1xxf9u8F5Fyf7KXkWh%2BfGec1LwcybA3fOvj1U%2Bm0nLlQsyHkPXf6pcVaHGw%2FMIAQgIQPt%2BxVSizuOy3rUNB3Fd1BqRHiuDM1tYpGG9OgPD%2FJfiXDs4BXKxlP6MXPtt2fLn2nWozDIi9LL6r1bxnj1TwxQu5GoH3dUR7KP5aZlTHtzu8ISEVqiIqwAuOGzmIRzWu52PDYseJq483uE99%2F1nyuwubZSHO%2BsdXj3%2BaidyxoPpw9CqqArMrhZ3T8LlLlRNMGhUzw2RY%2FomXBFSH6gzXURArOzBnDAjvsWRdpBkDo0hZ6qf5akH8AheVEGE1PUcNCgKf283i492VrS8wC4CUFYCV6%2FszRPB2OIqiCf2vu7Fd5Dys1gmCgrw0s1RGZP8kWFQgy481IBpnJdeqb0dPbWY2%2Fp9QEss08AyPJmZ0f%2Bvp3aelc3jDf36NSvqq7Xacs%2F3jnLvZuPbsDZSOgX0QuIx1lhjtWpNZPqLmSb9aznin8tIKjDtbtJ8vymmy4kRdhDkLkryvN2no418ZG5wDI%2BSX2yJWTwRlD%2FWHtCXBSuA7u1gcWpe%2BpCEFckRzKu80Yr7BCFU%2FkSLyZFI8ueSn6baiLT4ZfG31tK41fDPwDrMwc8aMYXPKJj0wiOWovwY6pgGBHek%2Bem8DN1FSUKKDgK%2F%2BamFYuWInAA4HE1y4INuGOmdp7Jebs4qFq56pLEouk0KbhB0gBWBXNDdTl4zgfwpZN%2B2d%2BeFYLFBLq5D6Cir1tFM92NDU9KdUDR%2BcOOBR8zQfyQD60qU5cCWEsty9iOqRBt68DUQTRW2eciulwByKnLZn3QJDGZxm0%2FpWxtRph6RLKgvUwfxHNNPZkVvkA4WudIz%2B1N3e&X-Amz-Signature=25bf7dd56df795f8a0380fa167b71dec190c02e9e4c7205d9cf2aca6972cb37e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOF34TI5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIChZtWYNkTKkTLT1%2Boou6jC1SOpvVUr7EcOAywX9OQNFAiAEA7iId5feOQVS%2Bd3z0uucRGF4TLFf1BvdgCT8tCMojCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6OO6sRnIZs1PYrlDKtwDc1xxf9u8F5Fyf7KXkWh%2BfGec1LwcybA3fOvj1U%2Bm0nLlQsyHkPXf6pcVaHGw%2FMIAQgIQPt%2BxVSizuOy3rUNB3Fd1BqRHiuDM1tYpGG9OgPD%2FJfiXDs4BXKxlP6MXPtt2fLn2nWozDIi9LL6r1bxnj1TwxQu5GoH3dUR7KP5aZlTHtzu8ISEVqiIqwAuOGzmIRzWu52PDYseJq483uE99%2F1nyuwubZSHO%2BsdXj3%2BaidyxoPpw9CqqArMrhZ3T8LlLlRNMGhUzw2RY%2FomXBFSH6gzXURArOzBnDAjvsWRdpBkDo0hZ6qf5akH8AheVEGE1PUcNCgKf283i492VrS8wC4CUFYCV6%2FszRPB2OIqiCf2vu7Fd5Dys1gmCgrw0s1RGZP8kWFQgy481IBpnJdeqb0dPbWY2%2Fp9QEss08AyPJmZ0f%2Bvp3aelc3jDf36NSvqq7Xacs%2F3jnLvZuPbsDZSOgX0QuIx1lhjtWpNZPqLmSb9aznin8tIKjDtbtJ8vymmy4kRdhDkLkryvN2no418ZG5wDI%2BSX2yJWTwRlD%2FWHtCXBSuA7u1gcWpe%2BpCEFckRzKu80Yr7BCFU%2FkSLyZFI8ueSn6baiLT4ZfG31tK41fDPwDrMwc8aMYXPKJj0wiOWovwY6pgGBHek%2Bem8DN1FSUKKDgK%2F%2BamFYuWInAA4HE1y4INuGOmdp7Jebs4qFq56pLEouk0KbhB0gBWBXNDdTl4zgfwpZN%2B2d%2BeFYLFBLq5D6Cir1tFM92NDU9KdUDR%2BcOOBR8zQfyQD60qU5cCWEsty9iOqRBt68DUQTRW2eciulwByKnLZn3QJDGZxm0%2FpWxtRph6RLKgvUwfxHNNPZkVvkA4WudIz%2B1N3e&X-Amz-Signature=3f8c981d23d2a13a60c4dcd7556571d09eec3e81edf033e144f7372098dd6edd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOF34TI5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIChZtWYNkTKkTLT1%2Boou6jC1SOpvVUr7EcOAywX9OQNFAiAEA7iId5feOQVS%2Bd3z0uucRGF4TLFf1BvdgCT8tCMojCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6OO6sRnIZs1PYrlDKtwDc1xxf9u8F5Fyf7KXkWh%2BfGec1LwcybA3fOvj1U%2Bm0nLlQsyHkPXf6pcVaHGw%2FMIAQgIQPt%2BxVSizuOy3rUNB3Fd1BqRHiuDM1tYpGG9OgPD%2FJfiXDs4BXKxlP6MXPtt2fLn2nWozDIi9LL6r1bxnj1TwxQu5GoH3dUR7KP5aZlTHtzu8ISEVqiIqwAuOGzmIRzWu52PDYseJq483uE99%2F1nyuwubZSHO%2BsdXj3%2BaidyxoPpw9CqqArMrhZ3T8LlLlRNMGhUzw2RY%2FomXBFSH6gzXURArOzBnDAjvsWRdpBkDo0hZ6qf5akH8AheVEGE1PUcNCgKf283i492VrS8wC4CUFYCV6%2FszRPB2OIqiCf2vu7Fd5Dys1gmCgrw0s1RGZP8kWFQgy481IBpnJdeqb0dPbWY2%2Fp9QEss08AyPJmZ0f%2Bvp3aelc3jDf36NSvqq7Xacs%2F3jnLvZuPbsDZSOgX0QuIx1lhjtWpNZPqLmSb9aznin8tIKjDtbtJ8vymmy4kRdhDkLkryvN2no418ZG5wDI%2BSX2yJWTwRlD%2FWHtCXBSuA7u1gcWpe%2BpCEFckRzKu80Yr7BCFU%2FkSLyZFI8ueSn6baiLT4ZfG31tK41fDPwDrMwc8aMYXPKJj0wiOWovwY6pgGBHek%2Bem8DN1FSUKKDgK%2F%2BamFYuWInAA4HE1y4INuGOmdp7Jebs4qFq56pLEouk0KbhB0gBWBXNDdTl4zgfwpZN%2B2d%2BeFYLFBLq5D6Cir1tFM92NDU9KdUDR%2BcOOBR8zQfyQD60qU5cCWEsty9iOqRBt68DUQTRW2eciulwByKnLZn3QJDGZxm0%2FpWxtRph6RLKgvUwfxHNNPZkVvkA4WudIz%2B1N3e&X-Amz-Signature=809f75f0799ed67527268fe350cec298ca058247aa4c3c771288b5eef516f197&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOF34TI5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIChZtWYNkTKkTLT1%2Boou6jC1SOpvVUr7EcOAywX9OQNFAiAEA7iId5feOQVS%2Bd3z0uucRGF4TLFf1BvdgCT8tCMojCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6OO6sRnIZs1PYrlDKtwDc1xxf9u8F5Fyf7KXkWh%2BfGec1LwcybA3fOvj1U%2Bm0nLlQsyHkPXf6pcVaHGw%2FMIAQgIQPt%2BxVSizuOy3rUNB3Fd1BqRHiuDM1tYpGG9OgPD%2FJfiXDs4BXKxlP6MXPtt2fLn2nWozDIi9LL6r1bxnj1TwxQu5GoH3dUR7KP5aZlTHtzu8ISEVqiIqwAuOGzmIRzWu52PDYseJq483uE99%2F1nyuwubZSHO%2BsdXj3%2BaidyxoPpw9CqqArMrhZ3T8LlLlRNMGhUzw2RY%2FomXBFSH6gzXURArOzBnDAjvsWRdpBkDo0hZ6qf5akH8AheVEGE1PUcNCgKf283i492VrS8wC4CUFYCV6%2FszRPB2OIqiCf2vu7Fd5Dys1gmCgrw0s1RGZP8kWFQgy481IBpnJdeqb0dPbWY2%2Fp9QEss08AyPJmZ0f%2Bvp3aelc3jDf36NSvqq7Xacs%2F3jnLvZuPbsDZSOgX0QuIx1lhjtWpNZPqLmSb9aznin8tIKjDtbtJ8vymmy4kRdhDkLkryvN2no418ZG5wDI%2BSX2yJWTwRlD%2FWHtCXBSuA7u1gcWpe%2BpCEFckRzKu80Yr7BCFU%2FkSLyZFI8ueSn6baiLT4ZfG31tK41fDPwDrMwc8aMYXPKJj0wiOWovwY6pgGBHek%2Bem8DN1FSUKKDgK%2F%2BamFYuWInAA4HE1y4INuGOmdp7Jebs4qFq56pLEouk0KbhB0gBWBXNDdTl4zgfwpZN%2B2d%2BeFYLFBLq5D6Cir1tFM92NDU9KdUDR%2BcOOBR8zQfyQD60qU5cCWEsty9iOqRBt68DUQTRW2eciulwByKnLZn3QJDGZxm0%2FpWxtRph6RLKgvUwfxHNNPZkVvkA4WudIz%2B1N3e&X-Amz-Signature=6bd395d185a970f20d04e99bb813bd8d50530a3d2b89920e75e8f0b03e4b0c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOF34TI5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIChZtWYNkTKkTLT1%2Boou6jC1SOpvVUr7EcOAywX9OQNFAiAEA7iId5feOQVS%2Bd3z0uucRGF4TLFf1BvdgCT8tCMojCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6OO6sRnIZs1PYrlDKtwDc1xxf9u8F5Fyf7KXkWh%2BfGec1LwcybA3fOvj1U%2Bm0nLlQsyHkPXf6pcVaHGw%2FMIAQgIQPt%2BxVSizuOy3rUNB3Fd1BqRHiuDM1tYpGG9OgPD%2FJfiXDs4BXKxlP6MXPtt2fLn2nWozDIi9LL6r1bxnj1TwxQu5GoH3dUR7KP5aZlTHtzu8ISEVqiIqwAuOGzmIRzWu52PDYseJq483uE99%2F1nyuwubZSHO%2BsdXj3%2BaidyxoPpw9CqqArMrhZ3T8LlLlRNMGhUzw2RY%2FomXBFSH6gzXURArOzBnDAjvsWRdpBkDo0hZ6qf5akH8AheVEGE1PUcNCgKf283i492VrS8wC4CUFYCV6%2FszRPB2OIqiCf2vu7Fd5Dys1gmCgrw0s1RGZP8kWFQgy481IBpnJdeqb0dPbWY2%2Fp9QEss08AyPJmZ0f%2Bvp3aelc3jDf36NSvqq7Xacs%2F3jnLvZuPbsDZSOgX0QuIx1lhjtWpNZPqLmSb9aznin8tIKjDtbtJ8vymmy4kRdhDkLkryvN2no418ZG5wDI%2BSX2yJWTwRlD%2FWHtCXBSuA7u1gcWpe%2BpCEFckRzKu80Yr7BCFU%2FkSLyZFI8ueSn6baiLT4ZfG31tK41fDPwDrMwc8aMYXPKJj0wiOWovwY6pgGBHek%2Bem8DN1FSUKKDgK%2F%2BamFYuWInAA4HE1y4INuGOmdp7Jebs4qFq56pLEouk0KbhB0gBWBXNDdTl4zgfwpZN%2B2d%2BeFYLFBLq5D6Cir1tFM92NDU9KdUDR%2BcOOBR8zQfyQD60qU5cCWEsty9iOqRBt68DUQTRW2eciulwByKnLZn3QJDGZxm0%2FpWxtRph6RLKgvUwfxHNNPZkVvkA4WudIz%2B1N3e&X-Amz-Signature=7ac3713af72013e23fb24343bcf08f373bcc990fc4422444339fee5471649ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOF34TI5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIChZtWYNkTKkTLT1%2Boou6jC1SOpvVUr7EcOAywX9OQNFAiAEA7iId5feOQVS%2Bd3z0uucRGF4TLFf1BvdgCT8tCMojCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6OO6sRnIZs1PYrlDKtwDc1xxf9u8F5Fyf7KXkWh%2BfGec1LwcybA3fOvj1U%2Bm0nLlQsyHkPXf6pcVaHGw%2FMIAQgIQPt%2BxVSizuOy3rUNB3Fd1BqRHiuDM1tYpGG9OgPD%2FJfiXDs4BXKxlP6MXPtt2fLn2nWozDIi9LL6r1bxnj1TwxQu5GoH3dUR7KP5aZlTHtzu8ISEVqiIqwAuOGzmIRzWu52PDYseJq483uE99%2F1nyuwubZSHO%2BsdXj3%2BaidyxoPpw9CqqArMrhZ3T8LlLlRNMGhUzw2RY%2FomXBFSH6gzXURArOzBnDAjvsWRdpBkDo0hZ6qf5akH8AheVEGE1PUcNCgKf283i492VrS8wC4CUFYCV6%2FszRPB2OIqiCf2vu7Fd5Dys1gmCgrw0s1RGZP8kWFQgy481IBpnJdeqb0dPbWY2%2Fp9QEss08AyPJmZ0f%2Bvp3aelc3jDf36NSvqq7Xacs%2F3jnLvZuPbsDZSOgX0QuIx1lhjtWpNZPqLmSb9aznin8tIKjDtbtJ8vymmy4kRdhDkLkryvN2no418ZG5wDI%2BSX2yJWTwRlD%2FWHtCXBSuA7u1gcWpe%2BpCEFckRzKu80Yr7BCFU%2FkSLyZFI8ueSn6baiLT4ZfG31tK41fDPwDrMwc8aMYXPKJj0wiOWovwY6pgGBHek%2Bem8DN1FSUKKDgK%2F%2BamFYuWInAA4HE1y4INuGOmdp7Jebs4qFq56pLEouk0KbhB0gBWBXNDdTl4zgfwpZN%2B2d%2BeFYLFBLq5D6Cir1tFM92NDU9KdUDR%2BcOOBR8zQfyQD60qU5cCWEsty9iOqRBt68DUQTRW2eciulwByKnLZn3QJDGZxm0%2FpWxtRph6RLKgvUwfxHNNPZkVvkA4WudIz%2B1N3e&X-Amz-Signature=d1d44077a65cc0572abdbf8f681911d67be9be98f10bb6cf1bacce7c423417b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOF34TI5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIChZtWYNkTKkTLT1%2Boou6jC1SOpvVUr7EcOAywX9OQNFAiAEA7iId5feOQVS%2Bd3z0uucRGF4TLFf1BvdgCT8tCMojCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6OO6sRnIZs1PYrlDKtwDc1xxf9u8F5Fyf7KXkWh%2BfGec1LwcybA3fOvj1U%2Bm0nLlQsyHkPXf6pcVaHGw%2FMIAQgIQPt%2BxVSizuOy3rUNB3Fd1BqRHiuDM1tYpGG9OgPD%2FJfiXDs4BXKxlP6MXPtt2fLn2nWozDIi9LL6r1bxnj1TwxQu5GoH3dUR7KP5aZlTHtzu8ISEVqiIqwAuOGzmIRzWu52PDYseJq483uE99%2F1nyuwubZSHO%2BsdXj3%2BaidyxoPpw9CqqArMrhZ3T8LlLlRNMGhUzw2RY%2FomXBFSH6gzXURArOzBnDAjvsWRdpBkDo0hZ6qf5akH8AheVEGE1PUcNCgKf283i492VrS8wC4CUFYCV6%2FszRPB2OIqiCf2vu7Fd5Dys1gmCgrw0s1RGZP8kWFQgy481IBpnJdeqb0dPbWY2%2Fp9QEss08AyPJmZ0f%2Bvp3aelc3jDf36NSvqq7Xacs%2F3jnLvZuPbsDZSOgX0QuIx1lhjtWpNZPqLmSb9aznin8tIKjDtbtJ8vymmy4kRdhDkLkryvN2no418ZG5wDI%2BSX2yJWTwRlD%2FWHtCXBSuA7u1gcWpe%2BpCEFckRzKu80Yr7BCFU%2FkSLyZFI8ueSn6baiLT4ZfG31tK41fDPwDrMwc8aMYXPKJj0wiOWovwY6pgGBHek%2Bem8DN1FSUKKDgK%2F%2BamFYuWInAA4HE1y4INuGOmdp7Jebs4qFq56pLEouk0KbhB0gBWBXNDdTl4zgfwpZN%2B2d%2BeFYLFBLq5D6Cir1tFM92NDU9KdUDR%2BcOOBR8zQfyQD60qU5cCWEsty9iOqRBt68DUQTRW2eciulwByKnLZn3QJDGZxm0%2FpWxtRph6RLKgvUwfxHNNPZkVvkA4WudIz%2B1N3e&X-Amz-Signature=81f968c251c101077c42adc5991297f765dd1ad4694da3307036c3a6ce0ed938&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
