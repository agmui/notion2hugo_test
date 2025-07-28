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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653M36TRP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHzdTnL3nHNI%2BsztB8ILrxhIRcJGFfBWVZvOk%2FG29SjDAiEAwqTmuBegq15fqUfxlm53hv1r2qLE%2BXnIxmUBtIGTePAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIy%2BV2afYYpw%2F%2FQhircA5CpE2JlNB73qIwx4e4iGZ%2BzjnkgRG7vIeMoyTxZo3ZwRbky4k1mKQhzADASLrP3Z18GrZ7GTgBJ8jqVLtZ6m3GCkPhWbZFr73gjbmuaTY8t1S16GVDDHKXJdS0owLkuK81AgK4cuouuH1EOKn9JLRr6nY3mZbs72Ky0Z8kWapHSnX1sMEItdoGJDF0Bg6UgvyEWvqdeeSthjMoh7Dow6TvRCjEPIfgcksHVyfSVMKOQfOlhG45QXNinxwDIfh5VV3S7fPF5R%2FQLuR3C5A2DnrCx9sGVCJblxkt2qqET5TJmT1emLqNL0TwyvnlBKVNbdh0WyUM%2FBOppVnWQGfa5YvGkqZbVsL20x%2BSY%2BxoHB%2FjM9No9ryIblix9VgsYBdagcylmUF75x9j7l%2F367n%2Bk3eq%2FRsAPk8pfoz7QCq%2F3j6hpQZxsTFBusF1kAH4xsGhOCjodCphXIMoHKLFCPHA%2Fd136%2F30dMeP7kN%2B5supIq1dmHN1BtwziNDV15D1HfiIsOC15uLcDjaUrwsgIRRUGykfxiZDvDjzdsdQ%2FV4uI0GLQwS7NWYVIC87PVra4%2FI00ijzobV2OB6KeaST2TPwgGJMn%2B1GAmxvFFeGXqDZVjCL36xndCMx%2BUEcLnj05MLrXncQGOqUBOEPMoaLMaOnlJGhZRIVL13T93lWGU4%2BOGsAu3uv2aAY0f1ta2CMLV5rbxPNiWrSijoKvB1v3%2FhMba5JQBnl2vEWn0JHQ7O7VS2wzHPwhQ%2BxP5aOJ4ddItLsszDLPYpQmSJhOzTbBugLKYs2onQDa4QjD41Ynh48YoMSweagt8ZnOwNCv9zbZS%2FlG87go6X6noxEX0zIL2cAmAT%2BZEMYtS9R6xdDQ&X-Amz-Signature=3c4de11bec58f4ed6caf7f3b1935c2f3de66aa1357f2d9cb96c97e1880967d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653M36TRP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHzdTnL3nHNI%2BsztB8ILrxhIRcJGFfBWVZvOk%2FG29SjDAiEAwqTmuBegq15fqUfxlm53hv1r2qLE%2BXnIxmUBtIGTePAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIy%2BV2afYYpw%2F%2FQhircA5CpE2JlNB73qIwx4e4iGZ%2BzjnkgRG7vIeMoyTxZo3ZwRbky4k1mKQhzADASLrP3Z18GrZ7GTgBJ8jqVLtZ6m3GCkPhWbZFr73gjbmuaTY8t1S16GVDDHKXJdS0owLkuK81AgK4cuouuH1EOKn9JLRr6nY3mZbs72Ky0Z8kWapHSnX1sMEItdoGJDF0Bg6UgvyEWvqdeeSthjMoh7Dow6TvRCjEPIfgcksHVyfSVMKOQfOlhG45QXNinxwDIfh5VV3S7fPF5R%2FQLuR3C5A2DnrCx9sGVCJblxkt2qqET5TJmT1emLqNL0TwyvnlBKVNbdh0WyUM%2FBOppVnWQGfa5YvGkqZbVsL20x%2BSY%2BxoHB%2FjM9No9ryIblix9VgsYBdagcylmUF75x9j7l%2F367n%2Bk3eq%2FRsAPk8pfoz7QCq%2F3j6hpQZxsTFBusF1kAH4xsGhOCjodCphXIMoHKLFCPHA%2Fd136%2F30dMeP7kN%2B5supIq1dmHN1BtwziNDV15D1HfiIsOC15uLcDjaUrwsgIRRUGykfxiZDvDjzdsdQ%2FV4uI0GLQwS7NWYVIC87PVra4%2FI00ijzobV2OB6KeaST2TPwgGJMn%2B1GAmxvFFeGXqDZVjCL36xndCMx%2BUEcLnj05MLrXncQGOqUBOEPMoaLMaOnlJGhZRIVL13T93lWGU4%2BOGsAu3uv2aAY0f1ta2CMLV5rbxPNiWrSijoKvB1v3%2FhMba5JQBnl2vEWn0JHQ7O7VS2wzHPwhQ%2BxP5aOJ4ddItLsszDLPYpQmSJhOzTbBugLKYs2onQDa4QjD41Ynh48YoMSweagt8ZnOwNCv9zbZS%2FlG87go6X6noxEX0zIL2cAmAT%2BZEMYtS9R6xdDQ&X-Amz-Signature=7cab1f438ab6b9b0e3df4694a82cb1162fa7ce7e0803d94d613d66b07a0c257c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653M36TRP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHzdTnL3nHNI%2BsztB8ILrxhIRcJGFfBWVZvOk%2FG29SjDAiEAwqTmuBegq15fqUfxlm53hv1r2qLE%2BXnIxmUBtIGTePAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIy%2BV2afYYpw%2F%2FQhircA5CpE2JlNB73qIwx4e4iGZ%2BzjnkgRG7vIeMoyTxZo3ZwRbky4k1mKQhzADASLrP3Z18GrZ7GTgBJ8jqVLtZ6m3GCkPhWbZFr73gjbmuaTY8t1S16GVDDHKXJdS0owLkuK81AgK4cuouuH1EOKn9JLRr6nY3mZbs72Ky0Z8kWapHSnX1sMEItdoGJDF0Bg6UgvyEWvqdeeSthjMoh7Dow6TvRCjEPIfgcksHVyfSVMKOQfOlhG45QXNinxwDIfh5VV3S7fPF5R%2FQLuR3C5A2DnrCx9sGVCJblxkt2qqET5TJmT1emLqNL0TwyvnlBKVNbdh0WyUM%2FBOppVnWQGfa5YvGkqZbVsL20x%2BSY%2BxoHB%2FjM9No9ryIblix9VgsYBdagcylmUF75x9j7l%2F367n%2Bk3eq%2FRsAPk8pfoz7QCq%2F3j6hpQZxsTFBusF1kAH4xsGhOCjodCphXIMoHKLFCPHA%2Fd136%2F30dMeP7kN%2B5supIq1dmHN1BtwziNDV15D1HfiIsOC15uLcDjaUrwsgIRRUGykfxiZDvDjzdsdQ%2FV4uI0GLQwS7NWYVIC87PVra4%2FI00ijzobV2OB6KeaST2TPwgGJMn%2B1GAmxvFFeGXqDZVjCL36xndCMx%2BUEcLnj05MLrXncQGOqUBOEPMoaLMaOnlJGhZRIVL13T93lWGU4%2BOGsAu3uv2aAY0f1ta2CMLV5rbxPNiWrSijoKvB1v3%2FhMba5JQBnl2vEWn0JHQ7O7VS2wzHPwhQ%2BxP5aOJ4ddItLsszDLPYpQmSJhOzTbBugLKYs2onQDa4QjD41Ynh48YoMSweagt8ZnOwNCv9zbZS%2FlG87go6X6noxEX0zIL2cAmAT%2BZEMYtS9R6xdDQ&X-Amz-Signature=71309cae2d5ff0a658dfa04dcc9d05f7be592f18dc63c168edadb8a34be07a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653M36TRP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHzdTnL3nHNI%2BsztB8ILrxhIRcJGFfBWVZvOk%2FG29SjDAiEAwqTmuBegq15fqUfxlm53hv1r2qLE%2BXnIxmUBtIGTePAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIy%2BV2afYYpw%2F%2FQhircA5CpE2JlNB73qIwx4e4iGZ%2BzjnkgRG7vIeMoyTxZo3ZwRbky4k1mKQhzADASLrP3Z18GrZ7GTgBJ8jqVLtZ6m3GCkPhWbZFr73gjbmuaTY8t1S16GVDDHKXJdS0owLkuK81AgK4cuouuH1EOKn9JLRr6nY3mZbs72Ky0Z8kWapHSnX1sMEItdoGJDF0Bg6UgvyEWvqdeeSthjMoh7Dow6TvRCjEPIfgcksHVyfSVMKOQfOlhG45QXNinxwDIfh5VV3S7fPF5R%2FQLuR3C5A2DnrCx9sGVCJblxkt2qqET5TJmT1emLqNL0TwyvnlBKVNbdh0WyUM%2FBOppVnWQGfa5YvGkqZbVsL20x%2BSY%2BxoHB%2FjM9No9ryIblix9VgsYBdagcylmUF75x9j7l%2F367n%2Bk3eq%2FRsAPk8pfoz7QCq%2F3j6hpQZxsTFBusF1kAH4xsGhOCjodCphXIMoHKLFCPHA%2Fd136%2F30dMeP7kN%2B5supIq1dmHN1BtwziNDV15D1HfiIsOC15uLcDjaUrwsgIRRUGykfxiZDvDjzdsdQ%2FV4uI0GLQwS7NWYVIC87PVra4%2FI00ijzobV2OB6KeaST2TPwgGJMn%2B1GAmxvFFeGXqDZVjCL36xndCMx%2BUEcLnj05MLrXncQGOqUBOEPMoaLMaOnlJGhZRIVL13T93lWGU4%2BOGsAu3uv2aAY0f1ta2CMLV5rbxPNiWrSijoKvB1v3%2FhMba5JQBnl2vEWn0JHQ7O7VS2wzHPwhQ%2BxP5aOJ4ddItLsszDLPYpQmSJhOzTbBugLKYs2onQDa4QjD41Ynh48YoMSweagt8ZnOwNCv9zbZS%2FlG87go6X6noxEX0zIL2cAmAT%2BZEMYtS9R6xdDQ&X-Amz-Signature=7a79f895a4456618ae196ce5c9609609605b7605937e161affd7fec740d86c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653M36TRP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHzdTnL3nHNI%2BsztB8ILrxhIRcJGFfBWVZvOk%2FG29SjDAiEAwqTmuBegq15fqUfxlm53hv1r2qLE%2BXnIxmUBtIGTePAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIy%2BV2afYYpw%2F%2FQhircA5CpE2JlNB73qIwx4e4iGZ%2BzjnkgRG7vIeMoyTxZo3ZwRbky4k1mKQhzADASLrP3Z18GrZ7GTgBJ8jqVLtZ6m3GCkPhWbZFr73gjbmuaTY8t1S16GVDDHKXJdS0owLkuK81AgK4cuouuH1EOKn9JLRr6nY3mZbs72Ky0Z8kWapHSnX1sMEItdoGJDF0Bg6UgvyEWvqdeeSthjMoh7Dow6TvRCjEPIfgcksHVyfSVMKOQfOlhG45QXNinxwDIfh5VV3S7fPF5R%2FQLuR3C5A2DnrCx9sGVCJblxkt2qqET5TJmT1emLqNL0TwyvnlBKVNbdh0WyUM%2FBOppVnWQGfa5YvGkqZbVsL20x%2BSY%2BxoHB%2FjM9No9ryIblix9VgsYBdagcylmUF75x9j7l%2F367n%2Bk3eq%2FRsAPk8pfoz7QCq%2F3j6hpQZxsTFBusF1kAH4xsGhOCjodCphXIMoHKLFCPHA%2Fd136%2F30dMeP7kN%2B5supIq1dmHN1BtwziNDV15D1HfiIsOC15uLcDjaUrwsgIRRUGykfxiZDvDjzdsdQ%2FV4uI0GLQwS7NWYVIC87PVra4%2FI00ijzobV2OB6KeaST2TPwgGJMn%2B1GAmxvFFeGXqDZVjCL36xndCMx%2BUEcLnj05MLrXncQGOqUBOEPMoaLMaOnlJGhZRIVL13T93lWGU4%2BOGsAu3uv2aAY0f1ta2CMLV5rbxPNiWrSijoKvB1v3%2FhMba5JQBnl2vEWn0JHQ7O7VS2wzHPwhQ%2BxP5aOJ4ddItLsszDLPYpQmSJhOzTbBugLKYs2onQDa4QjD41Ynh48YoMSweagt8ZnOwNCv9zbZS%2FlG87go6X6noxEX0zIL2cAmAT%2BZEMYtS9R6xdDQ&X-Amz-Signature=ae2a30f3def75abdb09852f95d0b1d50f636b1dbefbf45e9845f987aa95e4e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653M36TRP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHzdTnL3nHNI%2BsztB8ILrxhIRcJGFfBWVZvOk%2FG29SjDAiEAwqTmuBegq15fqUfxlm53hv1r2qLE%2BXnIxmUBtIGTePAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIy%2BV2afYYpw%2F%2FQhircA5CpE2JlNB73qIwx4e4iGZ%2BzjnkgRG7vIeMoyTxZo3ZwRbky4k1mKQhzADASLrP3Z18GrZ7GTgBJ8jqVLtZ6m3GCkPhWbZFr73gjbmuaTY8t1S16GVDDHKXJdS0owLkuK81AgK4cuouuH1EOKn9JLRr6nY3mZbs72Ky0Z8kWapHSnX1sMEItdoGJDF0Bg6UgvyEWvqdeeSthjMoh7Dow6TvRCjEPIfgcksHVyfSVMKOQfOlhG45QXNinxwDIfh5VV3S7fPF5R%2FQLuR3C5A2DnrCx9sGVCJblxkt2qqET5TJmT1emLqNL0TwyvnlBKVNbdh0WyUM%2FBOppVnWQGfa5YvGkqZbVsL20x%2BSY%2BxoHB%2FjM9No9ryIblix9VgsYBdagcylmUF75x9j7l%2F367n%2Bk3eq%2FRsAPk8pfoz7QCq%2F3j6hpQZxsTFBusF1kAH4xsGhOCjodCphXIMoHKLFCPHA%2Fd136%2F30dMeP7kN%2B5supIq1dmHN1BtwziNDV15D1HfiIsOC15uLcDjaUrwsgIRRUGykfxiZDvDjzdsdQ%2FV4uI0GLQwS7NWYVIC87PVra4%2FI00ijzobV2OB6KeaST2TPwgGJMn%2B1GAmxvFFeGXqDZVjCL36xndCMx%2BUEcLnj05MLrXncQGOqUBOEPMoaLMaOnlJGhZRIVL13T93lWGU4%2BOGsAu3uv2aAY0f1ta2CMLV5rbxPNiWrSijoKvB1v3%2FhMba5JQBnl2vEWn0JHQ7O7VS2wzHPwhQ%2BxP5aOJ4ddItLsszDLPYpQmSJhOzTbBugLKYs2onQDa4QjD41Ynh48YoMSweagt8ZnOwNCv9zbZS%2FlG87go6X6noxEX0zIL2cAmAT%2BZEMYtS9R6xdDQ&X-Amz-Signature=f8163aeb64035b28cee2e59c3a2479c5b1def08e39971dc0e0ac278b57252690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653M36TRP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHzdTnL3nHNI%2BsztB8ILrxhIRcJGFfBWVZvOk%2FG29SjDAiEAwqTmuBegq15fqUfxlm53hv1r2qLE%2BXnIxmUBtIGTePAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIy%2BV2afYYpw%2F%2FQhircA5CpE2JlNB73qIwx4e4iGZ%2BzjnkgRG7vIeMoyTxZo3ZwRbky4k1mKQhzADASLrP3Z18GrZ7GTgBJ8jqVLtZ6m3GCkPhWbZFr73gjbmuaTY8t1S16GVDDHKXJdS0owLkuK81AgK4cuouuH1EOKn9JLRr6nY3mZbs72Ky0Z8kWapHSnX1sMEItdoGJDF0Bg6UgvyEWvqdeeSthjMoh7Dow6TvRCjEPIfgcksHVyfSVMKOQfOlhG45QXNinxwDIfh5VV3S7fPF5R%2FQLuR3C5A2DnrCx9sGVCJblxkt2qqET5TJmT1emLqNL0TwyvnlBKVNbdh0WyUM%2FBOppVnWQGfa5YvGkqZbVsL20x%2BSY%2BxoHB%2FjM9No9ryIblix9VgsYBdagcylmUF75x9j7l%2F367n%2Bk3eq%2FRsAPk8pfoz7QCq%2F3j6hpQZxsTFBusF1kAH4xsGhOCjodCphXIMoHKLFCPHA%2Fd136%2F30dMeP7kN%2B5supIq1dmHN1BtwziNDV15D1HfiIsOC15uLcDjaUrwsgIRRUGykfxiZDvDjzdsdQ%2FV4uI0GLQwS7NWYVIC87PVra4%2FI00ijzobV2OB6KeaST2TPwgGJMn%2B1GAmxvFFeGXqDZVjCL36xndCMx%2BUEcLnj05MLrXncQGOqUBOEPMoaLMaOnlJGhZRIVL13T93lWGU4%2BOGsAu3uv2aAY0f1ta2CMLV5rbxPNiWrSijoKvB1v3%2FhMba5JQBnl2vEWn0JHQ7O7VS2wzHPwhQ%2BxP5aOJ4ddItLsszDLPYpQmSJhOzTbBugLKYs2onQDa4QjD41Ynh48YoMSweagt8ZnOwNCv9zbZS%2FlG87go6X6noxEX0zIL2cAmAT%2BZEMYtS9R6xdDQ&X-Amz-Signature=8401be31d1d4a003bb3699def630d7a3c8ac1887e4831119fb02686314b977ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653M36TRP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHzdTnL3nHNI%2BsztB8ILrxhIRcJGFfBWVZvOk%2FG29SjDAiEAwqTmuBegq15fqUfxlm53hv1r2qLE%2BXnIxmUBtIGTePAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIy%2BV2afYYpw%2F%2FQhircA5CpE2JlNB73qIwx4e4iGZ%2BzjnkgRG7vIeMoyTxZo3ZwRbky4k1mKQhzADASLrP3Z18GrZ7GTgBJ8jqVLtZ6m3GCkPhWbZFr73gjbmuaTY8t1S16GVDDHKXJdS0owLkuK81AgK4cuouuH1EOKn9JLRr6nY3mZbs72Ky0Z8kWapHSnX1sMEItdoGJDF0Bg6UgvyEWvqdeeSthjMoh7Dow6TvRCjEPIfgcksHVyfSVMKOQfOlhG45QXNinxwDIfh5VV3S7fPF5R%2FQLuR3C5A2DnrCx9sGVCJblxkt2qqET5TJmT1emLqNL0TwyvnlBKVNbdh0WyUM%2FBOppVnWQGfa5YvGkqZbVsL20x%2BSY%2BxoHB%2FjM9No9ryIblix9VgsYBdagcylmUF75x9j7l%2F367n%2Bk3eq%2FRsAPk8pfoz7QCq%2F3j6hpQZxsTFBusF1kAH4xsGhOCjodCphXIMoHKLFCPHA%2Fd136%2F30dMeP7kN%2B5supIq1dmHN1BtwziNDV15D1HfiIsOC15uLcDjaUrwsgIRRUGykfxiZDvDjzdsdQ%2FV4uI0GLQwS7NWYVIC87PVra4%2FI00ijzobV2OB6KeaST2TPwgGJMn%2B1GAmxvFFeGXqDZVjCL36xndCMx%2BUEcLnj05MLrXncQGOqUBOEPMoaLMaOnlJGhZRIVL13T93lWGU4%2BOGsAu3uv2aAY0f1ta2CMLV5rbxPNiWrSijoKvB1v3%2FhMba5JQBnl2vEWn0JHQ7O7VS2wzHPwhQ%2BxP5aOJ4ddItLsszDLPYpQmSJhOzTbBugLKYs2onQDa4QjD41Ynh48YoMSweagt8ZnOwNCv9zbZS%2FlG87go6X6noxEX0zIL2cAmAT%2BZEMYtS9R6xdDQ&X-Amz-Signature=6e56206e3ea66bf0ad4fcf5a17f5c5cb115c2b2e2dffcdc0ff87111cfe436dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
