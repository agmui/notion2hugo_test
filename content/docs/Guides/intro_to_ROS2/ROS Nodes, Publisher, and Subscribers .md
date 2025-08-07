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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65TW4EH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBMvhO5SGcYLwOR%2Fui9nzCpGZqANDbj3RVmZdkVCMBN9AiBWWsKIlbPrLAIu9PeZgxBOC8zcigHHW71wXD3Dco8ZBCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8Rov%2Fw9CASoErqGKtwDq6q4VvbVJibAByX613uU%2BXN%2Fmjrx5y39TI%2BpXtEzPd87kawGSop2ksK0aDVarccGiqwp7F9Hc3anYmwk7lTcAzjz6%2B05xxCLSwMJrtvAzp%2BH0wDXtCKF6Uemq8thKnL5Lbbu3oFEP%2F2d%2FZBaHoaIvfTeH1Uj94l%2BIMNbsOfP2IpWbTdP3cUueTQ%2B%2FKq9SflrN71OgotAScv2SXqKyCenHYV%2BtYF%2B0i4usGAXMlhoiDw2sebu8EmId6Me1P%2FS%2F4pJbuolWoXjURi2Ntz%2BaPukJx6LCZ2I9vieDLmdmvVpoYhstXdsNxZfbTLXWWHaVXwFtnrqfOw9dJQLM2yA2n9t6WR8S%2BpKuTLIMy7Nkrh%2FgZg2cuUxQ1m6rjQS30zQ1flszEgnv4V01vv1tA0d2zIZfKQL2feV6oLFY%2BmvIzDqNPrFk33QKGfq%2FEN3ARBW%2FwmgPYFZaeqjZDrR9NSJK1jKFZVrkWIsOi1NS%2FIIl%2BMdHGRC3vDTjIZ9whFQWBffpXhZSNjp30qkNxVXYWgKjlAHCZIZSrBDVN0cSuM%2BAUGtNa8L8Tx6EQMgsWpN55Vanm8OXTRMvXUaJoeh7RyZn74qgvww4HUin7KcAqsyTWMRrMU93xGKUKSesP1DmHQw24jSxAY6pgH2bYmE3oOYipP%2BfuNTrHP9HnMxEqpCIpLiB8dAvOZtXm%2B5ZWoC%2B5GXGENDRsUcxvS%2F4sJuPb7LjWOBBe9KqTNeL4M51zoBdMLjSegeuuoKM%2FDF17UHQb4sb4%2BEGzMekYxEb8%2BSuNtQEKYpC%2Fd%2FEEBYYu57444LfOcVVivtx%2B0f4hZDGoITkoHzHhvyYV%2FrFVHt7aclY9Xwom49ZIYqdaYHb8%2BUpAmN&X-Amz-Signature=ffd27976bf8c9ae79bf8b42a47554b9e17d71e3735650655d8d9baacd9deccbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65TW4EH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBMvhO5SGcYLwOR%2Fui9nzCpGZqANDbj3RVmZdkVCMBN9AiBWWsKIlbPrLAIu9PeZgxBOC8zcigHHW71wXD3Dco8ZBCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8Rov%2Fw9CASoErqGKtwDq6q4VvbVJibAByX613uU%2BXN%2Fmjrx5y39TI%2BpXtEzPd87kawGSop2ksK0aDVarccGiqwp7F9Hc3anYmwk7lTcAzjz6%2B05xxCLSwMJrtvAzp%2BH0wDXtCKF6Uemq8thKnL5Lbbu3oFEP%2F2d%2FZBaHoaIvfTeH1Uj94l%2BIMNbsOfP2IpWbTdP3cUueTQ%2B%2FKq9SflrN71OgotAScv2SXqKyCenHYV%2BtYF%2B0i4usGAXMlhoiDw2sebu8EmId6Me1P%2FS%2F4pJbuolWoXjURi2Ntz%2BaPukJx6LCZ2I9vieDLmdmvVpoYhstXdsNxZfbTLXWWHaVXwFtnrqfOw9dJQLM2yA2n9t6WR8S%2BpKuTLIMy7Nkrh%2FgZg2cuUxQ1m6rjQS30zQ1flszEgnv4V01vv1tA0d2zIZfKQL2feV6oLFY%2BmvIzDqNPrFk33QKGfq%2FEN3ARBW%2FwmgPYFZaeqjZDrR9NSJK1jKFZVrkWIsOi1NS%2FIIl%2BMdHGRC3vDTjIZ9whFQWBffpXhZSNjp30qkNxVXYWgKjlAHCZIZSrBDVN0cSuM%2BAUGtNa8L8Tx6EQMgsWpN55Vanm8OXTRMvXUaJoeh7RyZn74qgvww4HUin7KcAqsyTWMRrMU93xGKUKSesP1DmHQw24jSxAY6pgH2bYmE3oOYipP%2BfuNTrHP9HnMxEqpCIpLiB8dAvOZtXm%2B5ZWoC%2B5GXGENDRsUcxvS%2F4sJuPb7LjWOBBe9KqTNeL4M51zoBdMLjSegeuuoKM%2FDF17UHQb4sb4%2BEGzMekYxEb8%2BSuNtQEKYpC%2Fd%2FEEBYYu57444LfOcVVivtx%2B0f4hZDGoITkoHzHhvyYV%2FrFVHt7aclY9Xwom49ZIYqdaYHb8%2BUpAmN&X-Amz-Signature=45173b29ab33bc0aeadaf2632389deae09708928e6cddb6387793fb8b312f933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65TW4EH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBMvhO5SGcYLwOR%2Fui9nzCpGZqANDbj3RVmZdkVCMBN9AiBWWsKIlbPrLAIu9PeZgxBOC8zcigHHW71wXD3Dco8ZBCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8Rov%2Fw9CASoErqGKtwDq6q4VvbVJibAByX613uU%2BXN%2Fmjrx5y39TI%2BpXtEzPd87kawGSop2ksK0aDVarccGiqwp7F9Hc3anYmwk7lTcAzjz6%2B05xxCLSwMJrtvAzp%2BH0wDXtCKF6Uemq8thKnL5Lbbu3oFEP%2F2d%2FZBaHoaIvfTeH1Uj94l%2BIMNbsOfP2IpWbTdP3cUueTQ%2B%2FKq9SflrN71OgotAScv2SXqKyCenHYV%2BtYF%2B0i4usGAXMlhoiDw2sebu8EmId6Me1P%2FS%2F4pJbuolWoXjURi2Ntz%2BaPukJx6LCZ2I9vieDLmdmvVpoYhstXdsNxZfbTLXWWHaVXwFtnrqfOw9dJQLM2yA2n9t6WR8S%2BpKuTLIMy7Nkrh%2FgZg2cuUxQ1m6rjQS30zQ1flszEgnv4V01vv1tA0d2zIZfKQL2feV6oLFY%2BmvIzDqNPrFk33QKGfq%2FEN3ARBW%2FwmgPYFZaeqjZDrR9NSJK1jKFZVrkWIsOi1NS%2FIIl%2BMdHGRC3vDTjIZ9whFQWBffpXhZSNjp30qkNxVXYWgKjlAHCZIZSrBDVN0cSuM%2BAUGtNa8L8Tx6EQMgsWpN55Vanm8OXTRMvXUaJoeh7RyZn74qgvww4HUin7KcAqsyTWMRrMU93xGKUKSesP1DmHQw24jSxAY6pgH2bYmE3oOYipP%2BfuNTrHP9HnMxEqpCIpLiB8dAvOZtXm%2B5ZWoC%2B5GXGENDRsUcxvS%2F4sJuPb7LjWOBBe9KqTNeL4M51zoBdMLjSegeuuoKM%2FDF17UHQb4sb4%2BEGzMekYxEb8%2BSuNtQEKYpC%2Fd%2FEEBYYu57444LfOcVVivtx%2B0f4hZDGoITkoHzHhvyYV%2FrFVHt7aclY9Xwom49ZIYqdaYHb8%2BUpAmN&X-Amz-Signature=d66c3742206f919c7c8129dc1466ebe5c3b22960ce2782ba3b2d2094c1cdbb56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65TW4EH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBMvhO5SGcYLwOR%2Fui9nzCpGZqANDbj3RVmZdkVCMBN9AiBWWsKIlbPrLAIu9PeZgxBOC8zcigHHW71wXD3Dco8ZBCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8Rov%2Fw9CASoErqGKtwDq6q4VvbVJibAByX613uU%2BXN%2Fmjrx5y39TI%2BpXtEzPd87kawGSop2ksK0aDVarccGiqwp7F9Hc3anYmwk7lTcAzjz6%2B05xxCLSwMJrtvAzp%2BH0wDXtCKF6Uemq8thKnL5Lbbu3oFEP%2F2d%2FZBaHoaIvfTeH1Uj94l%2BIMNbsOfP2IpWbTdP3cUueTQ%2B%2FKq9SflrN71OgotAScv2SXqKyCenHYV%2BtYF%2B0i4usGAXMlhoiDw2sebu8EmId6Me1P%2FS%2F4pJbuolWoXjURi2Ntz%2BaPukJx6LCZ2I9vieDLmdmvVpoYhstXdsNxZfbTLXWWHaVXwFtnrqfOw9dJQLM2yA2n9t6WR8S%2BpKuTLIMy7Nkrh%2FgZg2cuUxQ1m6rjQS30zQ1flszEgnv4V01vv1tA0d2zIZfKQL2feV6oLFY%2BmvIzDqNPrFk33QKGfq%2FEN3ARBW%2FwmgPYFZaeqjZDrR9NSJK1jKFZVrkWIsOi1NS%2FIIl%2BMdHGRC3vDTjIZ9whFQWBffpXhZSNjp30qkNxVXYWgKjlAHCZIZSrBDVN0cSuM%2BAUGtNa8L8Tx6EQMgsWpN55Vanm8OXTRMvXUaJoeh7RyZn74qgvww4HUin7KcAqsyTWMRrMU93xGKUKSesP1DmHQw24jSxAY6pgH2bYmE3oOYipP%2BfuNTrHP9HnMxEqpCIpLiB8dAvOZtXm%2B5ZWoC%2B5GXGENDRsUcxvS%2F4sJuPb7LjWOBBe9KqTNeL4M51zoBdMLjSegeuuoKM%2FDF17UHQb4sb4%2BEGzMekYxEb8%2BSuNtQEKYpC%2Fd%2FEEBYYu57444LfOcVVivtx%2B0f4hZDGoITkoHzHhvyYV%2FrFVHt7aclY9Xwom49ZIYqdaYHb8%2BUpAmN&X-Amz-Signature=859fc2780f566f0e75f089f5c2ef131aea5ab94152acda50ac2c7c73f608d941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65TW4EH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBMvhO5SGcYLwOR%2Fui9nzCpGZqANDbj3RVmZdkVCMBN9AiBWWsKIlbPrLAIu9PeZgxBOC8zcigHHW71wXD3Dco8ZBCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8Rov%2Fw9CASoErqGKtwDq6q4VvbVJibAByX613uU%2BXN%2Fmjrx5y39TI%2BpXtEzPd87kawGSop2ksK0aDVarccGiqwp7F9Hc3anYmwk7lTcAzjz6%2B05xxCLSwMJrtvAzp%2BH0wDXtCKF6Uemq8thKnL5Lbbu3oFEP%2F2d%2FZBaHoaIvfTeH1Uj94l%2BIMNbsOfP2IpWbTdP3cUueTQ%2B%2FKq9SflrN71OgotAScv2SXqKyCenHYV%2BtYF%2B0i4usGAXMlhoiDw2sebu8EmId6Me1P%2FS%2F4pJbuolWoXjURi2Ntz%2BaPukJx6LCZ2I9vieDLmdmvVpoYhstXdsNxZfbTLXWWHaVXwFtnrqfOw9dJQLM2yA2n9t6WR8S%2BpKuTLIMy7Nkrh%2FgZg2cuUxQ1m6rjQS30zQ1flszEgnv4V01vv1tA0d2zIZfKQL2feV6oLFY%2BmvIzDqNPrFk33QKGfq%2FEN3ARBW%2FwmgPYFZaeqjZDrR9NSJK1jKFZVrkWIsOi1NS%2FIIl%2BMdHGRC3vDTjIZ9whFQWBffpXhZSNjp30qkNxVXYWgKjlAHCZIZSrBDVN0cSuM%2BAUGtNa8L8Tx6EQMgsWpN55Vanm8OXTRMvXUaJoeh7RyZn74qgvww4HUin7KcAqsyTWMRrMU93xGKUKSesP1DmHQw24jSxAY6pgH2bYmE3oOYipP%2BfuNTrHP9HnMxEqpCIpLiB8dAvOZtXm%2B5ZWoC%2B5GXGENDRsUcxvS%2F4sJuPb7LjWOBBe9KqTNeL4M51zoBdMLjSegeuuoKM%2FDF17UHQb4sb4%2BEGzMekYxEb8%2BSuNtQEKYpC%2Fd%2FEEBYYu57444LfOcVVivtx%2B0f4hZDGoITkoHzHhvyYV%2FrFVHt7aclY9Xwom49ZIYqdaYHb8%2BUpAmN&X-Amz-Signature=0585586c9b81b0e0dbb2b43b05e543090c69b93822bff0bc3fbb640b99a7c902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65TW4EH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBMvhO5SGcYLwOR%2Fui9nzCpGZqANDbj3RVmZdkVCMBN9AiBWWsKIlbPrLAIu9PeZgxBOC8zcigHHW71wXD3Dco8ZBCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8Rov%2Fw9CASoErqGKtwDq6q4VvbVJibAByX613uU%2BXN%2Fmjrx5y39TI%2BpXtEzPd87kawGSop2ksK0aDVarccGiqwp7F9Hc3anYmwk7lTcAzjz6%2B05xxCLSwMJrtvAzp%2BH0wDXtCKF6Uemq8thKnL5Lbbu3oFEP%2F2d%2FZBaHoaIvfTeH1Uj94l%2BIMNbsOfP2IpWbTdP3cUueTQ%2B%2FKq9SflrN71OgotAScv2SXqKyCenHYV%2BtYF%2B0i4usGAXMlhoiDw2sebu8EmId6Me1P%2FS%2F4pJbuolWoXjURi2Ntz%2BaPukJx6LCZ2I9vieDLmdmvVpoYhstXdsNxZfbTLXWWHaVXwFtnrqfOw9dJQLM2yA2n9t6WR8S%2BpKuTLIMy7Nkrh%2FgZg2cuUxQ1m6rjQS30zQ1flszEgnv4V01vv1tA0d2zIZfKQL2feV6oLFY%2BmvIzDqNPrFk33QKGfq%2FEN3ARBW%2FwmgPYFZaeqjZDrR9NSJK1jKFZVrkWIsOi1NS%2FIIl%2BMdHGRC3vDTjIZ9whFQWBffpXhZSNjp30qkNxVXYWgKjlAHCZIZSrBDVN0cSuM%2BAUGtNa8L8Tx6EQMgsWpN55Vanm8OXTRMvXUaJoeh7RyZn74qgvww4HUin7KcAqsyTWMRrMU93xGKUKSesP1DmHQw24jSxAY6pgH2bYmE3oOYipP%2BfuNTrHP9HnMxEqpCIpLiB8dAvOZtXm%2B5ZWoC%2B5GXGENDRsUcxvS%2F4sJuPb7LjWOBBe9KqTNeL4M51zoBdMLjSegeuuoKM%2FDF17UHQb4sb4%2BEGzMekYxEb8%2BSuNtQEKYpC%2Fd%2FEEBYYu57444LfOcVVivtx%2B0f4hZDGoITkoHzHhvyYV%2FrFVHt7aclY9Xwom49ZIYqdaYHb8%2BUpAmN&X-Amz-Signature=1bff2c5496e6fc45025d2b252a7d2df70bd6e24585974a9c5da0419d03a8272c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65TW4EH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBMvhO5SGcYLwOR%2Fui9nzCpGZqANDbj3RVmZdkVCMBN9AiBWWsKIlbPrLAIu9PeZgxBOC8zcigHHW71wXD3Dco8ZBCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8Rov%2Fw9CASoErqGKtwDq6q4VvbVJibAByX613uU%2BXN%2Fmjrx5y39TI%2BpXtEzPd87kawGSop2ksK0aDVarccGiqwp7F9Hc3anYmwk7lTcAzjz6%2B05xxCLSwMJrtvAzp%2BH0wDXtCKF6Uemq8thKnL5Lbbu3oFEP%2F2d%2FZBaHoaIvfTeH1Uj94l%2BIMNbsOfP2IpWbTdP3cUueTQ%2B%2FKq9SflrN71OgotAScv2SXqKyCenHYV%2BtYF%2B0i4usGAXMlhoiDw2sebu8EmId6Me1P%2FS%2F4pJbuolWoXjURi2Ntz%2BaPukJx6LCZ2I9vieDLmdmvVpoYhstXdsNxZfbTLXWWHaVXwFtnrqfOw9dJQLM2yA2n9t6WR8S%2BpKuTLIMy7Nkrh%2FgZg2cuUxQ1m6rjQS30zQ1flszEgnv4V01vv1tA0d2zIZfKQL2feV6oLFY%2BmvIzDqNPrFk33QKGfq%2FEN3ARBW%2FwmgPYFZaeqjZDrR9NSJK1jKFZVrkWIsOi1NS%2FIIl%2BMdHGRC3vDTjIZ9whFQWBffpXhZSNjp30qkNxVXYWgKjlAHCZIZSrBDVN0cSuM%2BAUGtNa8L8Tx6EQMgsWpN55Vanm8OXTRMvXUaJoeh7RyZn74qgvww4HUin7KcAqsyTWMRrMU93xGKUKSesP1DmHQw24jSxAY6pgH2bYmE3oOYipP%2BfuNTrHP9HnMxEqpCIpLiB8dAvOZtXm%2B5ZWoC%2B5GXGENDRsUcxvS%2F4sJuPb7LjWOBBe9KqTNeL4M51zoBdMLjSegeuuoKM%2FDF17UHQb4sb4%2BEGzMekYxEb8%2BSuNtQEKYpC%2Fd%2FEEBYYu57444LfOcVVivtx%2B0f4hZDGoITkoHzHhvyYV%2FrFVHt7aclY9Xwom49ZIYqdaYHb8%2BUpAmN&X-Amz-Signature=cea0ea9a4aa034669f9ab803dc419cc7a7bbab26108bca2cfaf9d12df67eb4fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65TW4EH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBMvhO5SGcYLwOR%2Fui9nzCpGZqANDbj3RVmZdkVCMBN9AiBWWsKIlbPrLAIu9PeZgxBOC8zcigHHW71wXD3Dco8ZBCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8Rov%2Fw9CASoErqGKtwDq6q4VvbVJibAByX613uU%2BXN%2Fmjrx5y39TI%2BpXtEzPd87kawGSop2ksK0aDVarccGiqwp7F9Hc3anYmwk7lTcAzjz6%2B05xxCLSwMJrtvAzp%2BH0wDXtCKF6Uemq8thKnL5Lbbu3oFEP%2F2d%2FZBaHoaIvfTeH1Uj94l%2BIMNbsOfP2IpWbTdP3cUueTQ%2B%2FKq9SflrN71OgotAScv2SXqKyCenHYV%2BtYF%2B0i4usGAXMlhoiDw2sebu8EmId6Me1P%2FS%2F4pJbuolWoXjURi2Ntz%2BaPukJx6LCZ2I9vieDLmdmvVpoYhstXdsNxZfbTLXWWHaVXwFtnrqfOw9dJQLM2yA2n9t6WR8S%2BpKuTLIMy7Nkrh%2FgZg2cuUxQ1m6rjQS30zQ1flszEgnv4V01vv1tA0d2zIZfKQL2feV6oLFY%2BmvIzDqNPrFk33QKGfq%2FEN3ARBW%2FwmgPYFZaeqjZDrR9NSJK1jKFZVrkWIsOi1NS%2FIIl%2BMdHGRC3vDTjIZ9whFQWBffpXhZSNjp30qkNxVXYWgKjlAHCZIZSrBDVN0cSuM%2BAUGtNa8L8Tx6EQMgsWpN55Vanm8OXTRMvXUaJoeh7RyZn74qgvww4HUin7KcAqsyTWMRrMU93xGKUKSesP1DmHQw24jSxAY6pgH2bYmE3oOYipP%2BfuNTrHP9HnMxEqpCIpLiB8dAvOZtXm%2B5ZWoC%2B5GXGENDRsUcxvS%2F4sJuPb7LjWOBBe9KqTNeL4M51zoBdMLjSegeuuoKM%2FDF17UHQb4sb4%2BEGzMekYxEb8%2BSuNtQEKYpC%2Fd%2FEEBYYu57444LfOcVVivtx%2B0f4hZDGoITkoHzHhvyYV%2FrFVHt7aclY9Xwom49ZIYqdaYHb8%2BUpAmN&X-Amz-Signature=c2a5bd76c2c3e54d8e45fa93a58d61d300db57eefa5e3d8f2f69b7260eb63a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
