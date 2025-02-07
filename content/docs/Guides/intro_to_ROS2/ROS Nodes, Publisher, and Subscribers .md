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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7V7MTDU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIA6%2BqCGCpJmUDFoN3lFyfgF6iIofA3yaEFCKsMCpNGZKAiEAg98Z%2BJI8%2BufrDyweEYttIC9baJzL7O1JRuPI%2BstaTl4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMxu%2B9oLdLjHi16WGSrcAzxrJcawYr7bUGL68oXuluJo9bYH6PRoOr8JUkx8kRciDQMC1fRPs352nRRl39rgkTyQvwxSkBq4TVkN0KL9rul4hAbrFQqc0UwRkskbE2SdhqtofCSdwpzsFUROtmrCaFULkYQhrsW0EDjEI6o50MelkNt9D1LsZQB1TYOu7KP0Tq6B6dW4MZPfCxiydjXBaD%2BlJTld%2Bs6n4OBpCluJmqbSXKxqynTUZK1pn0fyG2XWelX%2B8d1mEgRsCTE%2FTbI%2BrcoKIdoDXd4gnC9vzwZl5spS02xOFVxKsLPlZyfbU1vRLn4frEuvACL4M457CjXaxikrFZXI5UpOe927zgCHIPp0%2B3fyPCXZRwMlTG%2BE2UxeiwoPWcgl4%2FTPNG7Jr5wPqbZTh3ZEJtehzBQFTMC9W5Eq22%2FHhY5pedB4U8ZTycKDbKVWeoZpKN%2BbNyJcN4Gi0yv4VFCjjajBsIuWvG8K24buxuMC9qFF5pd5Ybfhx7nJexTekC6Dsl1TX%2B3pzqi8%2BnSFnPRfcuU6yja33gAF5Xvp%2F68MpqAwlvjD2Nzu7%2FN73KhXbCgQz3c9mC1O5k0%2FCOka6Uo%2F3ZJiNAn4x7O0fhl%2BuPWwowoMHg78ZDlzKEgXgt%2BMjzoI2kkq6ynZMKvflr0GOqUBCD8carVufj7B%2FMzz8Hj4vTDdADZ%2FU%2B4kduqkymohEM%2BskUSnMWuLf%2FzoyCh3oD1qkBnYUYWuns0xORvLTVMQ3pFeEMsJQNhEpZxcSS%2Fo7BARQESZa8lf%2FQanKJsnSEW22SBxS2jWNDdypsNUoqUPIRSA1k4sFZM%2BS57VQaHRdNcZ8a7GcfXZzIh2FYea%2F%2FxRKEWZYwavFAghNdw51b1XcA6dwcfn&X-Amz-Signature=a1688d61abb1d740527db228c385044b8821e1ad0c1958c01e5eedef323102d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7V7MTDU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIA6%2BqCGCpJmUDFoN3lFyfgF6iIofA3yaEFCKsMCpNGZKAiEAg98Z%2BJI8%2BufrDyweEYttIC9baJzL7O1JRuPI%2BstaTl4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMxu%2B9oLdLjHi16WGSrcAzxrJcawYr7bUGL68oXuluJo9bYH6PRoOr8JUkx8kRciDQMC1fRPs352nRRl39rgkTyQvwxSkBq4TVkN0KL9rul4hAbrFQqc0UwRkskbE2SdhqtofCSdwpzsFUROtmrCaFULkYQhrsW0EDjEI6o50MelkNt9D1LsZQB1TYOu7KP0Tq6B6dW4MZPfCxiydjXBaD%2BlJTld%2Bs6n4OBpCluJmqbSXKxqynTUZK1pn0fyG2XWelX%2B8d1mEgRsCTE%2FTbI%2BrcoKIdoDXd4gnC9vzwZl5spS02xOFVxKsLPlZyfbU1vRLn4frEuvACL4M457CjXaxikrFZXI5UpOe927zgCHIPp0%2B3fyPCXZRwMlTG%2BE2UxeiwoPWcgl4%2FTPNG7Jr5wPqbZTh3ZEJtehzBQFTMC9W5Eq22%2FHhY5pedB4U8ZTycKDbKVWeoZpKN%2BbNyJcN4Gi0yv4VFCjjajBsIuWvG8K24buxuMC9qFF5pd5Ybfhx7nJexTekC6Dsl1TX%2B3pzqi8%2BnSFnPRfcuU6yja33gAF5Xvp%2F68MpqAwlvjD2Nzu7%2FN73KhXbCgQz3c9mC1O5k0%2FCOka6Uo%2F3ZJiNAn4x7O0fhl%2BuPWwowoMHg78ZDlzKEgXgt%2BMjzoI2kkq6ynZMKvflr0GOqUBCD8carVufj7B%2FMzz8Hj4vTDdADZ%2FU%2B4kduqkymohEM%2BskUSnMWuLf%2FzoyCh3oD1qkBnYUYWuns0xORvLTVMQ3pFeEMsJQNhEpZxcSS%2Fo7BARQESZa8lf%2FQanKJsnSEW22SBxS2jWNDdypsNUoqUPIRSA1k4sFZM%2BS57VQaHRdNcZ8a7GcfXZzIh2FYea%2F%2FxRKEWZYwavFAghNdw51b1XcA6dwcfn&X-Amz-Signature=ead420a05303a1a3d044d9c00ecc7dbaaa399cc5ab110117189d2a0de8f26bf0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7V7MTDU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIA6%2BqCGCpJmUDFoN3lFyfgF6iIofA3yaEFCKsMCpNGZKAiEAg98Z%2BJI8%2BufrDyweEYttIC9baJzL7O1JRuPI%2BstaTl4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMxu%2B9oLdLjHi16WGSrcAzxrJcawYr7bUGL68oXuluJo9bYH6PRoOr8JUkx8kRciDQMC1fRPs352nRRl39rgkTyQvwxSkBq4TVkN0KL9rul4hAbrFQqc0UwRkskbE2SdhqtofCSdwpzsFUROtmrCaFULkYQhrsW0EDjEI6o50MelkNt9D1LsZQB1TYOu7KP0Tq6B6dW4MZPfCxiydjXBaD%2BlJTld%2Bs6n4OBpCluJmqbSXKxqynTUZK1pn0fyG2XWelX%2B8d1mEgRsCTE%2FTbI%2BrcoKIdoDXd4gnC9vzwZl5spS02xOFVxKsLPlZyfbU1vRLn4frEuvACL4M457CjXaxikrFZXI5UpOe927zgCHIPp0%2B3fyPCXZRwMlTG%2BE2UxeiwoPWcgl4%2FTPNG7Jr5wPqbZTh3ZEJtehzBQFTMC9W5Eq22%2FHhY5pedB4U8ZTycKDbKVWeoZpKN%2BbNyJcN4Gi0yv4VFCjjajBsIuWvG8K24buxuMC9qFF5pd5Ybfhx7nJexTekC6Dsl1TX%2B3pzqi8%2BnSFnPRfcuU6yja33gAF5Xvp%2F68MpqAwlvjD2Nzu7%2FN73KhXbCgQz3c9mC1O5k0%2FCOka6Uo%2F3ZJiNAn4x7O0fhl%2BuPWwowoMHg78ZDlzKEgXgt%2BMjzoI2kkq6ynZMKvflr0GOqUBCD8carVufj7B%2FMzz8Hj4vTDdADZ%2FU%2B4kduqkymohEM%2BskUSnMWuLf%2FzoyCh3oD1qkBnYUYWuns0xORvLTVMQ3pFeEMsJQNhEpZxcSS%2Fo7BARQESZa8lf%2FQanKJsnSEW22SBxS2jWNDdypsNUoqUPIRSA1k4sFZM%2BS57VQaHRdNcZ8a7GcfXZzIh2FYea%2F%2FxRKEWZYwavFAghNdw51b1XcA6dwcfn&X-Amz-Signature=292f2451302d303e75664bdcc970660aac2be3345556bbdf5f177e79cc659e3a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7V7MTDU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIA6%2BqCGCpJmUDFoN3lFyfgF6iIofA3yaEFCKsMCpNGZKAiEAg98Z%2BJI8%2BufrDyweEYttIC9baJzL7O1JRuPI%2BstaTl4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMxu%2B9oLdLjHi16WGSrcAzxrJcawYr7bUGL68oXuluJo9bYH6PRoOr8JUkx8kRciDQMC1fRPs352nRRl39rgkTyQvwxSkBq4TVkN0KL9rul4hAbrFQqc0UwRkskbE2SdhqtofCSdwpzsFUROtmrCaFULkYQhrsW0EDjEI6o50MelkNt9D1LsZQB1TYOu7KP0Tq6B6dW4MZPfCxiydjXBaD%2BlJTld%2Bs6n4OBpCluJmqbSXKxqynTUZK1pn0fyG2XWelX%2B8d1mEgRsCTE%2FTbI%2BrcoKIdoDXd4gnC9vzwZl5spS02xOFVxKsLPlZyfbU1vRLn4frEuvACL4M457CjXaxikrFZXI5UpOe927zgCHIPp0%2B3fyPCXZRwMlTG%2BE2UxeiwoPWcgl4%2FTPNG7Jr5wPqbZTh3ZEJtehzBQFTMC9W5Eq22%2FHhY5pedB4U8ZTycKDbKVWeoZpKN%2BbNyJcN4Gi0yv4VFCjjajBsIuWvG8K24buxuMC9qFF5pd5Ybfhx7nJexTekC6Dsl1TX%2B3pzqi8%2BnSFnPRfcuU6yja33gAF5Xvp%2F68MpqAwlvjD2Nzu7%2FN73KhXbCgQz3c9mC1O5k0%2FCOka6Uo%2F3ZJiNAn4x7O0fhl%2BuPWwowoMHg78ZDlzKEgXgt%2BMjzoI2kkq6ynZMKvflr0GOqUBCD8carVufj7B%2FMzz8Hj4vTDdADZ%2FU%2B4kduqkymohEM%2BskUSnMWuLf%2FzoyCh3oD1qkBnYUYWuns0xORvLTVMQ3pFeEMsJQNhEpZxcSS%2Fo7BARQESZa8lf%2FQanKJsnSEW22SBxS2jWNDdypsNUoqUPIRSA1k4sFZM%2BS57VQaHRdNcZ8a7GcfXZzIh2FYea%2F%2FxRKEWZYwavFAghNdw51b1XcA6dwcfn&X-Amz-Signature=185028dc16b3faf28a1232b19a171765feaac22c0ee95da7b94be879aad0ec7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7V7MTDU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIA6%2BqCGCpJmUDFoN3lFyfgF6iIofA3yaEFCKsMCpNGZKAiEAg98Z%2BJI8%2BufrDyweEYttIC9baJzL7O1JRuPI%2BstaTl4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMxu%2B9oLdLjHi16WGSrcAzxrJcawYr7bUGL68oXuluJo9bYH6PRoOr8JUkx8kRciDQMC1fRPs352nRRl39rgkTyQvwxSkBq4TVkN0KL9rul4hAbrFQqc0UwRkskbE2SdhqtofCSdwpzsFUROtmrCaFULkYQhrsW0EDjEI6o50MelkNt9D1LsZQB1TYOu7KP0Tq6B6dW4MZPfCxiydjXBaD%2BlJTld%2Bs6n4OBpCluJmqbSXKxqynTUZK1pn0fyG2XWelX%2B8d1mEgRsCTE%2FTbI%2BrcoKIdoDXd4gnC9vzwZl5spS02xOFVxKsLPlZyfbU1vRLn4frEuvACL4M457CjXaxikrFZXI5UpOe927zgCHIPp0%2B3fyPCXZRwMlTG%2BE2UxeiwoPWcgl4%2FTPNG7Jr5wPqbZTh3ZEJtehzBQFTMC9W5Eq22%2FHhY5pedB4U8ZTycKDbKVWeoZpKN%2BbNyJcN4Gi0yv4VFCjjajBsIuWvG8K24buxuMC9qFF5pd5Ybfhx7nJexTekC6Dsl1TX%2B3pzqi8%2BnSFnPRfcuU6yja33gAF5Xvp%2F68MpqAwlvjD2Nzu7%2FN73KhXbCgQz3c9mC1O5k0%2FCOka6Uo%2F3ZJiNAn4x7O0fhl%2BuPWwowoMHg78ZDlzKEgXgt%2BMjzoI2kkq6ynZMKvflr0GOqUBCD8carVufj7B%2FMzz8Hj4vTDdADZ%2FU%2B4kduqkymohEM%2BskUSnMWuLf%2FzoyCh3oD1qkBnYUYWuns0xORvLTVMQ3pFeEMsJQNhEpZxcSS%2Fo7BARQESZa8lf%2FQanKJsnSEW22SBxS2jWNDdypsNUoqUPIRSA1k4sFZM%2BS57VQaHRdNcZ8a7GcfXZzIh2FYea%2F%2FxRKEWZYwavFAghNdw51b1XcA6dwcfn&X-Amz-Signature=a8ec5eed35a727458bde83043fb181432ce00cf181ee92f0096298a29082b68c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7V7MTDU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIA6%2BqCGCpJmUDFoN3lFyfgF6iIofA3yaEFCKsMCpNGZKAiEAg98Z%2BJI8%2BufrDyweEYttIC9baJzL7O1JRuPI%2BstaTl4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMxu%2B9oLdLjHi16WGSrcAzxrJcawYr7bUGL68oXuluJo9bYH6PRoOr8JUkx8kRciDQMC1fRPs352nRRl39rgkTyQvwxSkBq4TVkN0KL9rul4hAbrFQqc0UwRkskbE2SdhqtofCSdwpzsFUROtmrCaFULkYQhrsW0EDjEI6o50MelkNt9D1LsZQB1TYOu7KP0Tq6B6dW4MZPfCxiydjXBaD%2BlJTld%2Bs6n4OBpCluJmqbSXKxqynTUZK1pn0fyG2XWelX%2B8d1mEgRsCTE%2FTbI%2BrcoKIdoDXd4gnC9vzwZl5spS02xOFVxKsLPlZyfbU1vRLn4frEuvACL4M457CjXaxikrFZXI5UpOe927zgCHIPp0%2B3fyPCXZRwMlTG%2BE2UxeiwoPWcgl4%2FTPNG7Jr5wPqbZTh3ZEJtehzBQFTMC9W5Eq22%2FHhY5pedB4U8ZTycKDbKVWeoZpKN%2BbNyJcN4Gi0yv4VFCjjajBsIuWvG8K24buxuMC9qFF5pd5Ybfhx7nJexTekC6Dsl1TX%2B3pzqi8%2BnSFnPRfcuU6yja33gAF5Xvp%2F68MpqAwlvjD2Nzu7%2FN73KhXbCgQz3c9mC1O5k0%2FCOka6Uo%2F3ZJiNAn4x7O0fhl%2BuPWwowoMHg78ZDlzKEgXgt%2BMjzoI2kkq6ynZMKvflr0GOqUBCD8carVufj7B%2FMzz8Hj4vTDdADZ%2FU%2B4kduqkymohEM%2BskUSnMWuLf%2FzoyCh3oD1qkBnYUYWuns0xORvLTVMQ3pFeEMsJQNhEpZxcSS%2Fo7BARQESZa8lf%2FQanKJsnSEW22SBxS2jWNDdypsNUoqUPIRSA1k4sFZM%2BS57VQaHRdNcZ8a7GcfXZzIh2FYea%2F%2FxRKEWZYwavFAghNdw51b1XcA6dwcfn&X-Amz-Signature=053595e6e62e6959169141cd44fa445f5a6b1ab03e96ff00783cfc36fe897c81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7V7MTDU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIA6%2BqCGCpJmUDFoN3lFyfgF6iIofA3yaEFCKsMCpNGZKAiEAg98Z%2BJI8%2BufrDyweEYttIC9baJzL7O1JRuPI%2BstaTl4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMxu%2B9oLdLjHi16WGSrcAzxrJcawYr7bUGL68oXuluJo9bYH6PRoOr8JUkx8kRciDQMC1fRPs352nRRl39rgkTyQvwxSkBq4TVkN0KL9rul4hAbrFQqc0UwRkskbE2SdhqtofCSdwpzsFUROtmrCaFULkYQhrsW0EDjEI6o50MelkNt9D1LsZQB1TYOu7KP0Tq6B6dW4MZPfCxiydjXBaD%2BlJTld%2Bs6n4OBpCluJmqbSXKxqynTUZK1pn0fyG2XWelX%2B8d1mEgRsCTE%2FTbI%2BrcoKIdoDXd4gnC9vzwZl5spS02xOFVxKsLPlZyfbU1vRLn4frEuvACL4M457CjXaxikrFZXI5UpOe927zgCHIPp0%2B3fyPCXZRwMlTG%2BE2UxeiwoPWcgl4%2FTPNG7Jr5wPqbZTh3ZEJtehzBQFTMC9W5Eq22%2FHhY5pedB4U8ZTycKDbKVWeoZpKN%2BbNyJcN4Gi0yv4VFCjjajBsIuWvG8K24buxuMC9qFF5pd5Ybfhx7nJexTekC6Dsl1TX%2B3pzqi8%2BnSFnPRfcuU6yja33gAF5Xvp%2F68MpqAwlvjD2Nzu7%2FN73KhXbCgQz3c9mC1O5k0%2FCOka6Uo%2F3ZJiNAn4x7O0fhl%2BuPWwowoMHg78ZDlzKEgXgt%2BMjzoI2kkq6ynZMKvflr0GOqUBCD8carVufj7B%2FMzz8Hj4vTDdADZ%2FU%2B4kduqkymohEM%2BskUSnMWuLf%2FzoyCh3oD1qkBnYUYWuns0xORvLTVMQ3pFeEMsJQNhEpZxcSS%2Fo7BARQESZa8lf%2FQanKJsnSEW22SBxS2jWNDdypsNUoqUPIRSA1k4sFZM%2BS57VQaHRdNcZ8a7GcfXZzIh2FYea%2F%2FxRKEWZYwavFAghNdw51b1XcA6dwcfn&X-Amz-Signature=4ab72bb96f1c3e8cb48050655235cc82fd9cee781624a5ebf49a9a241888a562&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7V7MTDU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIA6%2BqCGCpJmUDFoN3lFyfgF6iIofA3yaEFCKsMCpNGZKAiEAg98Z%2BJI8%2BufrDyweEYttIC9baJzL7O1JRuPI%2BstaTl4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMxu%2B9oLdLjHi16WGSrcAzxrJcawYr7bUGL68oXuluJo9bYH6PRoOr8JUkx8kRciDQMC1fRPs352nRRl39rgkTyQvwxSkBq4TVkN0KL9rul4hAbrFQqc0UwRkskbE2SdhqtofCSdwpzsFUROtmrCaFULkYQhrsW0EDjEI6o50MelkNt9D1LsZQB1TYOu7KP0Tq6B6dW4MZPfCxiydjXBaD%2BlJTld%2Bs6n4OBpCluJmqbSXKxqynTUZK1pn0fyG2XWelX%2B8d1mEgRsCTE%2FTbI%2BrcoKIdoDXd4gnC9vzwZl5spS02xOFVxKsLPlZyfbU1vRLn4frEuvACL4M457CjXaxikrFZXI5UpOe927zgCHIPp0%2B3fyPCXZRwMlTG%2BE2UxeiwoPWcgl4%2FTPNG7Jr5wPqbZTh3ZEJtehzBQFTMC9W5Eq22%2FHhY5pedB4U8ZTycKDbKVWeoZpKN%2BbNyJcN4Gi0yv4VFCjjajBsIuWvG8K24buxuMC9qFF5pd5Ybfhx7nJexTekC6Dsl1TX%2B3pzqi8%2BnSFnPRfcuU6yja33gAF5Xvp%2F68MpqAwlvjD2Nzu7%2FN73KhXbCgQz3c9mC1O5k0%2FCOka6Uo%2F3ZJiNAn4x7O0fhl%2BuPWwowoMHg78ZDlzKEgXgt%2BMjzoI2kkq6ynZMKvflr0GOqUBCD8carVufj7B%2FMzz8Hj4vTDdADZ%2FU%2B4kduqkymohEM%2BskUSnMWuLf%2FzoyCh3oD1qkBnYUYWuns0xORvLTVMQ3pFeEMsJQNhEpZxcSS%2Fo7BARQESZa8lf%2FQanKJsnSEW22SBxS2jWNDdypsNUoqUPIRSA1k4sFZM%2BS57VQaHRdNcZ8a7GcfXZzIh2FYea%2F%2FxRKEWZYwavFAghNdw51b1XcA6dwcfn&X-Amz-Signature=4e2f7c1da83c825992e4bcaceaf034301de75788298fd67375944ff8e087e5ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
