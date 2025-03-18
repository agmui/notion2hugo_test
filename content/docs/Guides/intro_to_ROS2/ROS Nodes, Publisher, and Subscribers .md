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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4WMN52%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdydjz0fkeXsxGbBiTaFfSXW0loaZbelZtqiyL6sFMCwIgUPJ5FqIgMHdbym2mrMAkQ9NWUTHEgeSYgwnnSyE7InYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEcz%2FoNax4SY9%2B6BhyrcAxwJ%2Fff9ZUMxjXQdO1hnSPDrFHTCrJwDjHbjMZnYG5VKfklvqJeuajUzSpnuEmtT3%2FO0XpMNtizwhNhMFLQiHN1f9bVp56x1QZ%2F6t8csgnWpHS2EodsLmKJHWIRCVCExJIsh1zYyxqIFTnixhV2P%2B25FhHb8CwnZ9nfXQy8aXpHNAil00A7HsIZCVtu8fpRAziadHq6AOokOAKOWWLTOeh3M5Lg2lSfrQ4vXT8URgC%2Br7IMDZMjcYYgf3vGFRZ%2BVTzxk38fEwBtkVj4HDo3ymZFROamMwrUFiPL3yi5eM01vTYtL9imOC74rcPGgCFggPCUtfnH583EJf4E2oD371KzHHLV5z4u7i4uQ8mlhlNgho5Y39CtO7GkIvyPi4Fghoxo1UMLPXKhTS9cgFOR7akp9Wc09uhLa8bUwe2%2F9HdVzj%2FQOurBogsj%2BYB9wfk4qR5xDHw%2BOuufMr0%2BrJDNLfwpnZlg9aWst3OOTI6VmCdEg8zfCKpYVWx9gVI8RFv8BZdeX%2BX6CpEJn%2F7nAhWFu0woBDhvk0NquK2os8yF38WFwr8GTTU1AcCr3ijWt%2BrjHkbhYdD1Ir2AFL7cyfLOGSyT2HYECtar%2FLsozz%2BFJjZrptkORiX8Gj3MiOC7FMPrJ474GOqUBniX3L%2FmkcdxuWnEQqeZQqtVWj0AuLCJ%2FrwapzOP0%2FInS84z0z2Ekn3IPtN%2BaQX2FmXKYAGiHZedcxoDCb4KMxXXCJkB28A%2B%2BXaQrdsVTYHXNlKB7taE%2BMkErnCWZqCMRdHme0H%2FxKQ4lgwIameczrADw%2FPW52v26tzLxROSy8T80lhz3wCkKF%2BoNQi%2BfN8uzvj9HA639QvbgZmpZaPaRti8913IH&X-Amz-Signature=ebfb579cacc78a3596c58c2b360bbb8bc074fd76a631b685a53512c5c58751e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4WMN52%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdydjz0fkeXsxGbBiTaFfSXW0loaZbelZtqiyL6sFMCwIgUPJ5FqIgMHdbym2mrMAkQ9NWUTHEgeSYgwnnSyE7InYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEcz%2FoNax4SY9%2B6BhyrcAxwJ%2Fff9ZUMxjXQdO1hnSPDrFHTCrJwDjHbjMZnYG5VKfklvqJeuajUzSpnuEmtT3%2FO0XpMNtizwhNhMFLQiHN1f9bVp56x1QZ%2F6t8csgnWpHS2EodsLmKJHWIRCVCExJIsh1zYyxqIFTnixhV2P%2B25FhHb8CwnZ9nfXQy8aXpHNAil00A7HsIZCVtu8fpRAziadHq6AOokOAKOWWLTOeh3M5Lg2lSfrQ4vXT8URgC%2Br7IMDZMjcYYgf3vGFRZ%2BVTzxk38fEwBtkVj4HDo3ymZFROamMwrUFiPL3yi5eM01vTYtL9imOC74rcPGgCFggPCUtfnH583EJf4E2oD371KzHHLV5z4u7i4uQ8mlhlNgho5Y39CtO7GkIvyPi4Fghoxo1UMLPXKhTS9cgFOR7akp9Wc09uhLa8bUwe2%2F9HdVzj%2FQOurBogsj%2BYB9wfk4qR5xDHw%2BOuufMr0%2BrJDNLfwpnZlg9aWst3OOTI6VmCdEg8zfCKpYVWx9gVI8RFv8BZdeX%2BX6CpEJn%2F7nAhWFu0woBDhvk0NquK2os8yF38WFwr8GTTU1AcCr3ijWt%2BrjHkbhYdD1Ir2AFL7cyfLOGSyT2HYECtar%2FLsozz%2BFJjZrptkORiX8Gj3MiOC7FMPrJ474GOqUBniX3L%2FmkcdxuWnEQqeZQqtVWj0AuLCJ%2FrwapzOP0%2FInS84z0z2Ekn3IPtN%2BaQX2FmXKYAGiHZedcxoDCb4KMxXXCJkB28A%2B%2BXaQrdsVTYHXNlKB7taE%2BMkErnCWZqCMRdHme0H%2FxKQ4lgwIameczrADw%2FPW52v26tzLxROSy8T80lhz3wCkKF%2BoNQi%2BfN8uzvj9HA639QvbgZmpZaPaRti8913IH&X-Amz-Signature=79718b3728e7843cd63494297f1ab5c40fc4cfbc0d609973cf29c7927a04f189&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4WMN52%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdydjz0fkeXsxGbBiTaFfSXW0loaZbelZtqiyL6sFMCwIgUPJ5FqIgMHdbym2mrMAkQ9NWUTHEgeSYgwnnSyE7InYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEcz%2FoNax4SY9%2B6BhyrcAxwJ%2Fff9ZUMxjXQdO1hnSPDrFHTCrJwDjHbjMZnYG5VKfklvqJeuajUzSpnuEmtT3%2FO0XpMNtizwhNhMFLQiHN1f9bVp56x1QZ%2F6t8csgnWpHS2EodsLmKJHWIRCVCExJIsh1zYyxqIFTnixhV2P%2B25FhHb8CwnZ9nfXQy8aXpHNAil00A7HsIZCVtu8fpRAziadHq6AOokOAKOWWLTOeh3M5Lg2lSfrQ4vXT8URgC%2Br7IMDZMjcYYgf3vGFRZ%2BVTzxk38fEwBtkVj4HDo3ymZFROamMwrUFiPL3yi5eM01vTYtL9imOC74rcPGgCFggPCUtfnH583EJf4E2oD371KzHHLV5z4u7i4uQ8mlhlNgho5Y39CtO7GkIvyPi4Fghoxo1UMLPXKhTS9cgFOR7akp9Wc09uhLa8bUwe2%2F9HdVzj%2FQOurBogsj%2BYB9wfk4qR5xDHw%2BOuufMr0%2BrJDNLfwpnZlg9aWst3OOTI6VmCdEg8zfCKpYVWx9gVI8RFv8BZdeX%2BX6CpEJn%2F7nAhWFu0woBDhvk0NquK2os8yF38WFwr8GTTU1AcCr3ijWt%2BrjHkbhYdD1Ir2AFL7cyfLOGSyT2HYECtar%2FLsozz%2BFJjZrptkORiX8Gj3MiOC7FMPrJ474GOqUBniX3L%2FmkcdxuWnEQqeZQqtVWj0AuLCJ%2FrwapzOP0%2FInS84z0z2Ekn3IPtN%2BaQX2FmXKYAGiHZedcxoDCb4KMxXXCJkB28A%2B%2BXaQrdsVTYHXNlKB7taE%2BMkErnCWZqCMRdHme0H%2FxKQ4lgwIameczrADw%2FPW52v26tzLxROSy8T80lhz3wCkKF%2BoNQi%2BfN8uzvj9HA639QvbgZmpZaPaRti8913IH&X-Amz-Signature=80c90343bf943baf3999647d33ec10c20308f81daba3d22cb1838c8b6cfc3d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4WMN52%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdydjz0fkeXsxGbBiTaFfSXW0loaZbelZtqiyL6sFMCwIgUPJ5FqIgMHdbym2mrMAkQ9NWUTHEgeSYgwnnSyE7InYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEcz%2FoNax4SY9%2B6BhyrcAxwJ%2Fff9ZUMxjXQdO1hnSPDrFHTCrJwDjHbjMZnYG5VKfklvqJeuajUzSpnuEmtT3%2FO0XpMNtizwhNhMFLQiHN1f9bVp56x1QZ%2F6t8csgnWpHS2EodsLmKJHWIRCVCExJIsh1zYyxqIFTnixhV2P%2B25FhHb8CwnZ9nfXQy8aXpHNAil00A7HsIZCVtu8fpRAziadHq6AOokOAKOWWLTOeh3M5Lg2lSfrQ4vXT8URgC%2Br7IMDZMjcYYgf3vGFRZ%2BVTzxk38fEwBtkVj4HDo3ymZFROamMwrUFiPL3yi5eM01vTYtL9imOC74rcPGgCFggPCUtfnH583EJf4E2oD371KzHHLV5z4u7i4uQ8mlhlNgho5Y39CtO7GkIvyPi4Fghoxo1UMLPXKhTS9cgFOR7akp9Wc09uhLa8bUwe2%2F9HdVzj%2FQOurBogsj%2BYB9wfk4qR5xDHw%2BOuufMr0%2BrJDNLfwpnZlg9aWst3OOTI6VmCdEg8zfCKpYVWx9gVI8RFv8BZdeX%2BX6CpEJn%2F7nAhWFu0woBDhvk0NquK2os8yF38WFwr8GTTU1AcCr3ijWt%2BrjHkbhYdD1Ir2AFL7cyfLOGSyT2HYECtar%2FLsozz%2BFJjZrptkORiX8Gj3MiOC7FMPrJ474GOqUBniX3L%2FmkcdxuWnEQqeZQqtVWj0AuLCJ%2FrwapzOP0%2FInS84z0z2Ekn3IPtN%2BaQX2FmXKYAGiHZedcxoDCb4KMxXXCJkB28A%2B%2BXaQrdsVTYHXNlKB7taE%2BMkErnCWZqCMRdHme0H%2FxKQ4lgwIameczrADw%2FPW52v26tzLxROSy8T80lhz3wCkKF%2BoNQi%2BfN8uzvj9HA639QvbgZmpZaPaRti8913IH&X-Amz-Signature=3254d6042c4a5dee3822e09813065eca15746787f659e33b3ee4e134b7b65549&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4WMN52%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdydjz0fkeXsxGbBiTaFfSXW0loaZbelZtqiyL6sFMCwIgUPJ5FqIgMHdbym2mrMAkQ9NWUTHEgeSYgwnnSyE7InYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEcz%2FoNax4SY9%2B6BhyrcAxwJ%2Fff9ZUMxjXQdO1hnSPDrFHTCrJwDjHbjMZnYG5VKfklvqJeuajUzSpnuEmtT3%2FO0XpMNtizwhNhMFLQiHN1f9bVp56x1QZ%2F6t8csgnWpHS2EodsLmKJHWIRCVCExJIsh1zYyxqIFTnixhV2P%2B25FhHb8CwnZ9nfXQy8aXpHNAil00A7HsIZCVtu8fpRAziadHq6AOokOAKOWWLTOeh3M5Lg2lSfrQ4vXT8URgC%2Br7IMDZMjcYYgf3vGFRZ%2BVTzxk38fEwBtkVj4HDo3ymZFROamMwrUFiPL3yi5eM01vTYtL9imOC74rcPGgCFggPCUtfnH583EJf4E2oD371KzHHLV5z4u7i4uQ8mlhlNgho5Y39CtO7GkIvyPi4Fghoxo1UMLPXKhTS9cgFOR7akp9Wc09uhLa8bUwe2%2F9HdVzj%2FQOurBogsj%2BYB9wfk4qR5xDHw%2BOuufMr0%2BrJDNLfwpnZlg9aWst3OOTI6VmCdEg8zfCKpYVWx9gVI8RFv8BZdeX%2BX6CpEJn%2F7nAhWFu0woBDhvk0NquK2os8yF38WFwr8GTTU1AcCr3ijWt%2BrjHkbhYdD1Ir2AFL7cyfLOGSyT2HYECtar%2FLsozz%2BFJjZrptkORiX8Gj3MiOC7FMPrJ474GOqUBniX3L%2FmkcdxuWnEQqeZQqtVWj0AuLCJ%2FrwapzOP0%2FInS84z0z2Ekn3IPtN%2BaQX2FmXKYAGiHZedcxoDCb4KMxXXCJkB28A%2B%2BXaQrdsVTYHXNlKB7taE%2BMkErnCWZqCMRdHme0H%2FxKQ4lgwIameczrADw%2FPW52v26tzLxROSy8T80lhz3wCkKF%2BoNQi%2BfN8uzvj9HA639QvbgZmpZaPaRti8913IH&X-Amz-Signature=2224a233d3a1ffa90be3db3322807e48c8364be51f62ef59bea7e6801ea1d854&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4WMN52%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdydjz0fkeXsxGbBiTaFfSXW0loaZbelZtqiyL6sFMCwIgUPJ5FqIgMHdbym2mrMAkQ9NWUTHEgeSYgwnnSyE7InYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEcz%2FoNax4SY9%2B6BhyrcAxwJ%2Fff9ZUMxjXQdO1hnSPDrFHTCrJwDjHbjMZnYG5VKfklvqJeuajUzSpnuEmtT3%2FO0XpMNtizwhNhMFLQiHN1f9bVp56x1QZ%2F6t8csgnWpHS2EodsLmKJHWIRCVCExJIsh1zYyxqIFTnixhV2P%2B25FhHb8CwnZ9nfXQy8aXpHNAil00A7HsIZCVtu8fpRAziadHq6AOokOAKOWWLTOeh3M5Lg2lSfrQ4vXT8URgC%2Br7IMDZMjcYYgf3vGFRZ%2BVTzxk38fEwBtkVj4HDo3ymZFROamMwrUFiPL3yi5eM01vTYtL9imOC74rcPGgCFggPCUtfnH583EJf4E2oD371KzHHLV5z4u7i4uQ8mlhlNgho5Y39CtO7GkIvyPi4Fghoxo1UMLPXKhTS9cgFOR7akp9Wc09uhLa8bUwe2%2F9HdVzj%2FQOurBogsj%2BYB9wfk4qR5xDHw%2BOuufMr0%2BrJDNLfwpnZlg9aWst3OOTI6VmCdEg8zfCKpYVWx9gVI8RFv8BZdeX%2BX6CpEJn%2F7nAhWFu0woBDhvk0NquK2os8yF38WFwr8GTTU1AcCr3ijWt%2BrjHkbhYdD1Ir2AFL7cyfLOGSyT2HYECtar%2FLsozz%2BFJjZrptkORiX8Gj3MiOC7FMPrJ474GOqUBniX3L%2FmkcdxuWnEQqeZQqtVWj0AuLCJ%2FrwapzOP0%2FInS84z0z2Ekn3IPtN%2BaQX2FmXKYAGiHZedcxoDCb4KMxXXCJkB28A%2B%2BXaQrdsVTYHXNlKB7taE%2BMkErnCWZqCMRdHme0H%2FxKQ4lgwIameczrADw%2FPW52v26tzLxROSy8T80lhz3wCkKF%2BoNQi%2BfN8uzvj9HA639QvbgZmpZaPaRti8913IH&X-Amz-Signature=baadc071a85a5fc1352c12077fe36536e45b53a6fa119944837ebb20d8257f08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4WMN52%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdydjz0fkeXsxGbBiTaFfSXW0loaZbelZtqiyL6sFMCwIgUPJ5FqIgMHdbym2mrMAkQ9NWUTHEgeSYgwnnSyE7InYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEcz%2FoNax4SY9%2B6BhyrcAxwJ%2Fff9ZUMxjXQdO1hnSPDrFHTCrJwDjHbjMZnYG5VKfklvqJeuajUzSpnuEmtT3%2FO0XpMNtizwhNhMFLQiHN1f9bVp56x1QZ%2F6t8csgnWpHS2EodsLmKJHWIRCVCExJIsh1zYyxqIFTnixhV2P%2B25FhHb8CwnZ9nfXQy8aXpHNAil00A7HsIZCVtu8fpRAziadHq6AOokOAKOWWLTOeh3M5Lg2lSfrQ4vXT8URgC%2Br7IMDZMjcYYgf3vGFRZ%2BVTzxk38fEwBtkVj4HDo3ymZFROamMwrUFiPL3yi5eM01vTYtL9imOC74rcPGgCFggPCUtfnH583EJf4E2oD371KzHHLV5z4u7i4uQ8mlhlNgho5Y39CtO7GkIvyPi4Fghoxo1UMLPXKhTS9cgFOR7akp9Wc09uhLa8bUwe2%2F9HdVzj%2FQOurBogsj%2BYB9wfk4qR5xDHw%2BOuufMr0%2BrJDNLfwpnZlg9aWst3OOTI6VmCdEg8zfCKpYVWx9gVI8RFv8BZdeX%2BX6CpEJn%2F7nAhWFu0woBDhvk0NquK2os8yF38WFwr8GTTU1AcCr3ijWt%2BrjHkbhYdD1Ir2AFL7cyfLOGSyT2HYECtar%2FLsozz%2BFJjZrptkORiX8Gj3MiOC7FMPrJ474GOqUBniX3L%2FmkcdxuWnEQqeZQqtVWj0AuLCJ%2FrwapzOP0%2FInS84z0z2Ekn3IPtN%2BaQX2FmXKYAGiHZedcxoDCb4KMxXXCJkB28A%2B%2BXaQrdsVTYHXNlKB7taE%2BMkErnCWZqCMRdHme0H%2FxKQ4lgwIameczrADw%2FPW52v26tzLxROSy8T80lhz3wCkKF%2BoNQi%2BfN8uzvj9HA639QvbgZmpZaPaRti8913IH&X-Amz-Signature=3e08750474831fdfbdee82da79cc4bf32537c2b9c2dd66eafebcdb50ec3090ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4WMN52%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdydjz0fkeXsxGbBiTaFfSXW0loaZbelZtqiyL6sFMCwIgUPJ5FqIgMHdbym2mrMAkQ9NWUTHEgeSYgwnnSyE7InYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEcz%2FoNax4SY9%2B6BhyrcAxwJ%2Fff9ZUMxjXQdO1hnSPDrFHTCrJwDjHbjMZnYG5VKfklvqJeuajUzSpnuEmtT3%2FO0XpMNtizwhNhMFLQiHN1f9bVp56x1QZ%2F6t8csgnWpHS2EodsLmKJHWIRCVCExJIsh1zYyxqIFTnixhV2P%2B25FhHb8CwnZ9nfXQy8aXpHNAil00A7HsIZCVtu8fpRAziadHq6AOokOAKOWWLTOeh3M5Lg2lSfrQ4vXT8URgC%2Br7IMDZMjcYYgf3vGFRZ%2BVTzxk38fEwBtkVj4HDo3ymZFROamMwrUFiPL3yi5eM01vTYtL9imOC74rcPGgCFggPCUtfnH583EJf4E2oD371KzHHLV5z4u7i4uQ8mlhlNgho5Y39CtO7GkIvyPi4Fghoxo1UMLPXKhTS9cgFOR7akp9Wc09uhLa8bUwe2%2F9HdVzj%2FQOurBogsj%2BYB9wfk4qR5xDHw%2BOuufMr0%2BrJDNLfwpnZlg9aWst3OOTI6VmCdEg8zfCKpYVWx9gVI8RFv8BZdeX%2BX6CpEJn%2F7nAhWFu0woBDhvk0NquK2os8yF38WFwr8GTTU1AcCr3ijWt%2BrjHkbhYdD1Ir2AFL7cyfLOGSyT2HYECtar%2FLsozz%2BFJjZrptkORiX8Gj3MiOC7FMPrJ474GOqUBniX3L%2FmkcdxuWnEQqeZQqtVWj0AuLCJ%2FrwapzOP0%2FInS84z0z2Ekn3IPtN%2BaQX2FmXKYAGiHZedcxoDCb4KMxXXCJkB28A%2B%2BXaQrdsVTYHXNlKB7taE%2BMkErnCWZqCMRdHme0H%2FxKQ4lgwIameczrADw%2FPW52v26tzLxROSy8T80lhz3wCkKF%2BoNQi%2BfN8uzvj9HA639QvbgZmpZaPaRti8913IH&X-Amz-Signature=ada26b438759dfc6741c23ccbabf6deeb91a59782e709d523a24d309de53bce3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
