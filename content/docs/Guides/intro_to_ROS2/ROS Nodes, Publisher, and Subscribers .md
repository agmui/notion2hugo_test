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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSOTXER%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzCXsqE7B04tGyeJfaAaEbl1Y71ob2HKvSI%2F5nU8jCVAiEAtiVfEX8tlPXOu6W20gb4LPNeaiRLdjG3JnP8yr9ypIwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEv7fwZBNURZXPUJLyrcA%2FB2EbAZRI%2BgpD0Kr0VI%2Bzsxyir%2BoiShIQusRJnGHhXzDS6HcznOiBEieUgP0DUa%2FvcM4tJobjoRjw2xJtrV%2Bk3%2BaMNSAVYTWF8O0OtWthed6OutGXXlD6M35T43q6s3yNiMYSqoxxmEzp5wJ0ZDch9rX%2BcxM7Lt1tTF%2BGj18KifKJ6DK4QQmJSdPumN1ksk5ZSMwhtLRKa%2BSrubq30meWLoeblApfexcoQUxkCbnS8iD3VyTZGfB2APRMHC3L4K70WSOZPKxW0%2FroUDyAAamYgilZCT6o3F43GnCqdr7D9srnsdH%2FUr1hi9iQzfk6NXn6M05hzQqbXCVpOqDHW%2BqI6QYh0kH5iKXFvt3KifN7%2FasP2lQn1d4JczMmR0rXykYy%2BLiIiTc7E1AoF43eqrGy9x611QIWvPKvKc9%2BwnGT%2FoMYrpBfA2jQN6HYjCyzkuVNomaHaGZRR1Gv%2FusKAPZDa4q6YkJGMRalSMAAaW7ksSt5ifK6FwJXpbSN6E2W%2BaO2MC%2BwdIQmwf81QRPFo9jMtK6BPE7slbgFlKq9GeJcaIpn6%2BO7F4xruXsB8WrWijVL%2BRYUpCXO0rW1BaaRbVqcBmpBtSftBBIR3jf6jomAfHq0LtaPr41NN3%2B%2FbMMLCf68cGOqUB14I5HEwo%2Fp7sQTZM%2FaDdm0X1SwwlDNw7NnH4V%2BDfYs%2BRdsrwEsdyBYc1aA90hlFe8cZYBKfsxhBwB%2FeUsgM%2B2HLGh6qQTdPkuGxFqNuNSR2OrS8f4xmNc7J2zBl5vtCzHqhecwkX3nQrV%2ByG9%2BycHVTQS5CUDiEEvHKEdWefpIYhYVRyDIYioVa0wmNX8pqIc%2B%2FPI8icxyQQldKvfkSk42CFxUwR&X-Amz-Signature=026c10252ecd0cb6cc2dba7836eb88df05ba5cf76d2cd9c81af3410495db7a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSOTXER%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzCXsqE7B04tGyeJfaAaEbl1Y71ob2HKvSI%2F5nU8jCVAiEAtiVfEX8tlPXOu6W20gb4LPNeaiRLdjG3JnP8yr9ypIwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEv7fwZBNURZXPUJLyrcA%2FB2EbAZRI%2BgpD0Kr0VI%2Bzsxyir%2BoiShIQusRJnGHhXzDS6HcznOiBEieUgP0DUa%2FvcM4tJobjoRjw2xJtrV%2Bk3%2BaMNSAVYTWF8O0OtWthed6OutGXXlD6M35T43q6s3yNiMYSqoxxmEzp5wJ0ZDch9rX%2BcxM7Lt1tTF%2BGj18KifKJ6DK4QQmJSdPumN1ksk5ZSMwhtLRKa%2BSrubq30meWLoeblApfexcoQUxkCbnS8iD3VyTZGfB2APRMHC3L4K70WSOZPKxW0%2FroUDyAAamYgilZCT6o3F43GnCqdr7D9srnsdH%2FUr1hi9iQzfk6NXn6M05hzQqbXCVpOqDHW%2BqI6QYh0kH5iKXFvt3KifN7%2FasP2lQn1d4JczMmR0rXykYy%2BLiIiTc7E1AoF43eqrGy9x611QIWvPKvKc9%2BwnGT%2FoMYrpBfA2jQN6HYjCyzkuVNomaHaGZRR1Gv%2FusKAPZDa4q6YkJGMRalSMAAaW7ksSt5ifK6FwJXpbSN6E2W%2BaO2MC%2BwdIQmwf81QRPFo9jMtK6BPE7slbgFlKq9GeJcaIpn6%2BO7F4xruXsB8WrWijVL%2BRYUpCXO0rW1BaaRbVqcBmpBtSftBBIR3jf6jomAfHq0LtaPr41NN3%2B%2FbMMLCf68cGOqUB14I5HEwo%2Fp7sQTZM%2FaDdm0X1SwwlDNw7NnH4V%2BDfYs%2BRdsrwEsdyBYc1aA90hlFe8cZYBKfsxhBwB%2FeUsgM%2B2HLGh6qQTdPkuGxFqNuNSR2OrS8f4xmNc7J2zBl5vtCzHqhecwkX3nQrV%2ByG9%2BycHVTQS5CUDiEEvHKEdWefpIYhYVRyDIYioVa0wmNX8pqIc%2B%2FPI8icxyQQldKvfkSk42CFxUwR&X-Amz-Signature=2453b63e31f9f89a9f90482ab7f1698f55aad4c68f88150f0062ec56f5ba710a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSOTXER%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzCXsqE7B04tGyeJfaAaEbl1Y71ob2HKvSI%2F5nU8jCVAiEAtiVfEX8tlPXOu6W20gb4LPNeaiRLdjG3JnP8yr9ypIwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEv7fwZBNURZXPUJLyrcA%2FB2EbAZRI%2BgpD0Kr0VI%2Bzsxyir%2BoiShIQusRJnGHhXzDS6HcznOiBEieUgP0DUa%2FvcM4tJobjoRjw2xJtrV%2Bk3%2BaMNSAVYTWF8O0OtWthed6OutGXXlD6M35T43q6s3yNiMYSqoxxmEzp5wJ0ZDch9rX%2BcxM7Lt1tTF%2BGj18KifKJ6DK4QQmJSdPumN1ksk5ZSMwhtLRKa%2BSrubq30meWLoeblApfexcoQUxkCbnS8iD3VyTZGfB2APRMHC3L4K70WSOZPKxW0%2FroUDyAAamYgilZCT6o3F43GnCqdr7D9srnsdH%2FUr1hi9iQzfk6NXn6M05hzQqbXCVpOqDHW%2BqI6QYh0kH5iKXFvt3KifN7%2FasP2lQn1d4JczMmR0rXykYy%2BLiIiTc7E1AoF43eqrGy9x611QIWvPKvKc9%2BwnGT%2FoMYrpBfA2jQN6HYjCyzkuVNomaHaGZRR1Gv%2FusKAPZDa4q6YkJGMRalSMAAaW7ksSt5ifK6FwJXpbSN6E2W%2BaO2MC%2BwdIQmwf81QRPFo9jMtK6BPE7slbgFlKq9GeJcaIpn6%2BO7F4xruXsB8WrWijVL%2BRYUpCXO0rW1BaaRbVqcBmpBtSftBBIR3jf6jomAfHq0LtaPr41NN3%2B%2FbMMLCf68cGOqUB14I5HEwo%2Fp7sQTZM%2FaDdm0X1SwwlDNw7NnH4V%2BDfYs%2BRdsrwEsdyBYc1aA90hlFe8cZYBKfsxhBwB%2FeUsgM%2B2HLGh6qQTdPkuGxFqNuNSR2OrS8f4xmNc7J2zBl5vtCzHqhecwkX3nQrV%2ByG9%2BycHVTQS5CUDiEEvHKEdWefpIYhYVRyDIYioVa0wmNX8pqIc%2B%2FPI8icxyQQldKvfkSk42CFxUwR&X-Amz-Signature=fa1ba0b1b3905d75b66e49038e8090dee4e34a697ed0a722f5922040136cb131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSOTXER%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzCXsqE7B04tGyeJfaAaEbl1Y71ob2HKvSI%2F5nU8jCVAiEAtiVfEX8tlPXOu6W20gb4LPNeaiRLdjG3JnP8yr9ypIwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEv7fwZBNURZXPUJLyrcA%2FB2EbAZRI%2BgpD0Kr0VI%2Bzsxyir%2BoiShIQusRJnGHhXzDS6HcznOiBEieUgP0DUa%2FvcM4tJobjoRjw2xJtrV%2Bk3%2BaMNSAVYTWF8O0OtWthed6OutGXXlD6M35T43q6s3yNiMYSqoxxmEzp5wJ0ZDch9rX%2BcxM7Lt1tTF%2BGj18KifKJ6DK4QQmJSdPumN1ksk5ZSMwhtLRKa%2BSrubq30meWLoeblApfexcoQUxkCbnS8iD3VyTZGfB2APRMHC3L4K70WSOZPKxW0%2FroUDyAAamYgilZCT6o3F43GnCqdr7D9srnsdH%2FUr1hi9iQzfk6NXn6M05hzQqbXCVpOqDHW%2BqI6QYh0kH5iKXFvt3KifN7%2FasP2lQn1d4JczMmR0rXykYy%2BLiIiTc7E1AoF43eqrGy9x611QIWvPKvKc9%2BwnGT%2FoMYrpBfA2jQN6HYjCyzkuVNomaHaGZRR1Gv%2FusKAPZDa4q6YkJGMRalSMAAaW7ksSt5ifK6FwJXpbSN6E2W%2BaO2MC%2BwdIQmwf81QRPFo9jMtK6BPE7slbgFlKq9GeJcaIpn6%2BO7F4xruXsB8WrWijVL%2BRYUpCXO0rW1BaaRbVqcBmpBtSftBBIR3jf6jomAfHq0LtaPr41NN3%2B%2FbMMLCf68cGOqUB14I5HEwo%2Fp7sQTZM%2FaDdm0X1SwwlDNw7NnH4V%2BDfYs%2BRdsrwEsdyBYc1aA90hlFe8cZYBKfsxhBwB%2FeUsgM%2B2HLGh6qQTdPkuGxFqNuNSR2OrS8f4xmNc7J2zBl5vtCzHqhecwkX3nQrV%2ByG9%2BycHVTQS5CUDiEEvHKEdWefpIYhYVRyDIYioVa0wmNX8pqIc%2B%2FPI8icxyQQldKvfkSk42CFxUwR&X-Amz-Signature=a616edbda8254c2bc205ab2f87e8650cde9fb94c2415218a53c168c946a513c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSOTXER%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzCXsqE7B04tGyeJfaAaEbl1Y71ob2HKvSI%2F5nU8jCVAiEAtiVfEX8tlPXOu6W20gb4LPNeaiRLdjG3JnP8yr9ypIwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEv7fwZBNURZXPUJLyrcA%2FB2EbAZRI%2BgpD0Kr0VI%2Bzsxyir%2BoiShIQusRJnGHhXzDS6HcznOiBEieUgP0DUa%2FvcM4tJobjoRjw2xJtrV%2Bk3%2BaMNSAVYTWF8O0OtWthed6OutGXXlD6M35T43q6s3yNiMYSqoxxmEzp5wJ0ZDch9rX%2BcxM7Lt1tTF%2BGj18KifKJ6DK4QQmJSdPumN1ksk5ZSMwhtLRKa%2BSrubq30meWLoeblApfexcoQUxkCbnS8iD3VyTZGfB2APRMHC3L4K70WSOZPKxW0%2FroUDyAAamYgilZCT6o3F43GnCqdr7D9srnsdH%2FUr1hi9iQzfk6NXn6M05hzQqbXCVpOqDHW%2BqI6QYh0kH5iKXFvt3KifN7%2FasP2lQn1d4JczMmR0rXykYy%2BLiIiTc7E1AoF43eqrGy9x611QIWvPKvKc9%2BwnGT%2FoMYrpBfA2jQN6HYjCyzkuVNomaHaGZRR1Gv%2FusKAPZDa4q6YkJGMRalSMAAaW7ksSt5ifK6FwJXpbSN6E2W%2BaO2MC%2BwdIQmwf81QRPFo9jMtK6BPE7slbgFlKq9GeJcaIpn6%2BO7F4xruXsB8WrWijVL%2BRYUpCXO0rW1BaaRbVqcBmpBtSftBBIR3jf6jomAfHq0LtaPr41NN3%2B%2FbMMLCf68cGOqUB14I5HEwo%2Fp7sQTZM%2FaDdm0X1SwwlDNw7NnH4V%2BDfYs%2BRdsrwEsdyBYc1aA90hlFe8cZYBKfsxhBwB%2FeUsgM%2B2HLGh6qQTdPkuGxFqNuNSR2OrS8f4xmNc7J2zBl5vtCzHqhecwkX3nQrV%2ByG9%2BycHVTQS5CUDiEEvHKEdWefpIYhYVRyDIYioVa0wmNX8pqIc%2B%2FPI8icxyQQldKvfkSk42CFxUwR&X-Amz-Signature=efbaee45ef38493776150c35e7ba6ff4f75cbd0caadc5be6d641de4002f3af55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSOTXER%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzCXsqE7B04tGyeJfaAaEbl1Y71ob2HKvSI%2F5nU8jCVAiEAtiVfEX8tlPXOu6W20gb4LPNeaiRLdjG3JnP8yr9ypIwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEv7fwZBNURZXPUJLyrcA%2FB2EbAZRI%2BgpD0Kr0VI%2Bzsxyir%2BoiShIQusRJnGHhXzDS6HcznOiBEieUgP0DUa%2FvcM4tJobjoRjw2xJtrV%2Bk3%2BaMNSAVYTWF8O0OtWthed6OutGXXlD6M35T43q6s3yNiMYSqoxxmEzp5wJ0ZDch9rX%2BcxM7Lt1tTF%2BGj18KifKJ6DK4QQmJSdPumN1ksk5ZSMwhtLRKa%2BSrubq30meWLoeblApfexcoQUxkCbnS8iD3VyTZGfB2APRMHC3L4K70WSOZPKxW0%2FroUDyAAamYgilZCT6o3F43GnCqdr7D9srnsdH%2FUr1hi9iQzfk6NXn6M05hzQqbXCVpOqDHW%2BqI6QYh0kH5iKXFvt3KifN7%2FasP2lQn1d4JczMmR0rXykYy%2BLiIiTc7E1AoF43eqrGy9x611QIWvPKvKc9%2BwnGT%2FoMYrpBfA2jQN6HYjCyzkuVNomaHaGZRR1Gv%2FusKAPZDa4q6YkJGMRalSMAAaW7ksSt5ifK6FwJXpbSN6E2W%2BaO2MC%2BwdIQmwf81QRPFo9jMtK6BPE7slbgFlKq9GeJcaIpn6%2BO7F4xruXsB8WrWijVL%2BRYUpCXO0rW1BaaRbVqcBmpBtSftBBIR3jf6jomAfHq0LtaPr41NN3%2B%2FbMMLCf68cGOqUB14I5HEwo%2Fp7sQTZM%2FaDdm0X1SwwlDNw7NnH4V%2BDfYs%2BRdsrwEsdyBYc1aA90hlFe8cZYBKfsxhBwB%2FeUsgM%2B2HLGh6qQTdPkuGxFqNuNSR2OrS8f4xmNc7J2zBl5vtCzHqhecwkX3nQrV%2ByG9%2BycHVTQS5CUDiEEvHKEdWefpIYhYVRyDIYioVa0wmNX8pqIc%2B%2FPI8icxyQQldKvfkSk42CFxUwR&X-Amz-Signature=8df150290577b04255839d0f4353adeb9ca6faa26861bcb8faa0e85f45982949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSOTXER%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzCXsqE7B04tGyeJfaAaEbl1Y71ob2HKvSI%2F5nU8jCVAiEAtiVfEX8tlPXOu6W20gb4LPNeaiRLdjG3JnP8yr9ypIwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEv7fwZBNURZXPUJLyrcA%2FB2EbAZRI%2BgpD0Kr0VI%2Bzsxyir%2BoiShIQusRJnGHhXzDS6HcznOiBEieUgP0DUa%2FvcM4tJobjoRjw2xJtrV%2Bk3%2BaMNSAVYTWF8O0OtWthed6OutGXXlD6M35T43q6s3yNiMYSqoxxmEzp5wJ0ZDch9rX%2BcxM7Lt1tTF%2BGj18KifKJ6DK4QQmJSdPumN1ksk5ZSMwhtLRKa%2BSrubq30meWLoeblApfexcoQUxkCbnS8iD3VyTZGfB2APRMHC3L4K70WSOZPKxW0%2FroUDyAAamYgilZCT6o3F43GnCqdr7D9srnsdH%2FUr1hi9iQzfk6NXn6M05hzQqbXCVpOqDHW%2BqI6QYh0kH5iKXFvt3KifN7%2FasP2lQn1d4JczMmR0rXykYy%2BLiIiTc7E1AoF43eqrGy9x611QIWvPKvKc9%2BwnGT%2FoMYrpBfA2jQN6HYjCyzkuVNomaHaGZRR1Gv%2FusKAPZDa4q6YkJGMRalSMAAaW7ksSt5ifK6FwJXpbSN6E2W%2BaO2MC%2BwdIQmwf81QRPFo9jMtK6BPE7slbgFlKq9GeJcaIpn6%2BO7F4xruXsB8WrWijVL%2BRYUpCXO0rW1BaaRbVqcBmpBtSftBBIR3jf6jomAfHq0LtaPr41NN3%2B%2FbMMLCf68cGOqUB14I5HEwo%2Fp7sQTZM%2FaDdm0X1SwwlDNw7NnH4V%2BDfYs%2BRdsrwEsdyBYc1aA90hlFe8cZYBKfsxhBwB%2FeUsgM%2B2HLGh6qQTdPkuGxFqNuNSR2OrS8f4xmNc7J2zBl5vtCzHqhecwkX3nQrV%2ByG9%2BycHVTQS5CUDiEEvHKEdWefpIYhYVRyDIYioVa0wmNX8pqIc%2B%2FPI8icxyQQldKvfkSk42CFxUwR&X-Amz-Signature=e65e16a044f1001b6fc8df9772e7de3efff07fd26cd4231134f6174a1684ae8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSOTXER%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzCXsqE7B04tGyeJfaAaEbl1Y71ob2HKvSI%2F5nU8jCVAiEAtiVfEX8tlPXOu6W20gb4LPNeaiRLdjG3JnP8yr9ypIwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEv7fwZBNURZXPUJLyrcA%2FB2EbAZRI%2BgpD0Kr0VI%2Bzsxyir%2BoiShIQusRJnGHhXzDS6HcznOiBEieUgP0DUa%2FvcM4tJobjoRjw2xJtrV%2Bk3%2BaMNSAVYTWF8O0OtWthed6OutGXXlD6M35T43q6s3yNiMYSqoxxmEzp5wJ0ZDch9rX%2BcxM7Lt1tTF%2BGj18KifKJ6DK4QQmJSdPumN1ksk5ZSMwhtLRKa%2BSrubq30meWLoeblApfexcoQUxkCbnS8iD3VyTZGfB2APRMHC3L4K70WSOZPKxW0%2FroUDyAAamYgilZCT6o3F43GnCqdr7D9srnsdH%2FUr1hi9iQzfk6NXn6M05hzQqbXCVpOqDHW%2BqI6QYh0kH5iKXFvt3KifN7%2FasP2lQn1d4JczMmR0rXykYy%2BLiIiTc7E1AoF43eqrGy9x611QIWvPKvKc9%2BwnGT%2FoMYrpBfA2jQN6HYjCyzkuVNomaHaGZRR1Gv%2FusKAPZDa4q6YkJGMRalSMAAaW7ksSt5ifK6FwJXpbSN6E2W%2BaO2MC%2BwdIQmwf81QRPFo9jMtK6BPE7slbgFlKq9GeJcaIpn6%2BO7F4xruXsB8WrWijVL%2BRYUpCXO0rW1BaaRbVqcBmpBtSftBBIR3jf6jomAfHq0LtaPr41NN3%2B%2FbMMLCf68cGOqUB14I5HEwo%2Fp7sQTZM%2FaDdm0X1SwwlDNw7NnH4V%2BDfYs%2BRdsrwEsdyBYc1aA90hlFe8cZYBKfsxhBwB%2FeUsgM%2B2HLGh6qQTdPkuGxFqNuNSR2OrS8f4xmNc7J2zBl5vtCzHqhecwkX3nQrV%2ByG9%2BycHVTQS5CUDiEEvHKEdWefpIYhYVRyDIYioVa0wmNX8pqIc%2B%2FPI8icxyQQldKvfkSk42CFxUwR&X-Amz-Signature=e0335a5bd4a365db5640ba29bc4c13905739813100c065ef9bf3b2d2d61b09a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
