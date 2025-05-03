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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JCJZKGI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCA6mHYRt%2BzeeXPYGM1Cw605AjcuSjODvZ2LcGULmYH%2FAIgA%2Fvi3uSaOVJxFsrYKcOa2RezBIUgnh55VBjIo1Hd6%2BEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNyvTLMoCy6DMjSICrcAwV5Agt0Ie6CoiUYlqvRrwpxA%2Fx3uD7WYu3Dh6Tgu3G1L5Ib2xykwTiB5FeDcaDmceftRTMFtIWjewi2XcUhZPvFODMvxgEsnp3zApOJyyn7rgt2nGaYjE8vbcn4w8rKV7LmnGz5HRIw5tsnGHC0H7ARJ%2BbLAbEdB0abxdsAr86zqkMouV8uDbklCrkkaVtEkqVm9Oj%2F8WryA67FNjCBhhlouUFOFQMd2KbEovps%2BDxUtD%2F1dXaJckreuNzFrjYwoU1gkpQeLkkc%2FpEH5Vu0u6RC1vNulZBwAMUfiTDs72Mr7MP6RqFuCmIOF%2BllrPYddFrcZ3UYfeJGKTgZgaYb%2Fa1JzY%2FEuxkzQANRaH1hNK4sOMrF9dx2JHIZbwQlV97kHgA2lmlbKPsYowJhu654%2BMCNlSJmF8crApL6Ma%2BByv0vCPO7Rc4qRhnAIHoBGwPtRC8ziEM891VbZhzKy0S%2BOiRTsHxWSN5OH61tTXB3Gd%2FY9VPol7IdsOHkIZoMzYQB5NyMu7K35Ujj986%2B%2BnMIijg%2B43ixrmlUafI5eFLpsxzVOdnRl0kEBO83ylf%2FiwC6NHpwr8XwH0VpnEMyMrcPqLEG16uQrZ%2BDQnqUxEwbqSpDjefB7yjVnxHwQdVYMIiB2cAGOqUBEV9%2FaBIvNlxe%2B8SBq6L8JsBtqERfr76Rz27V39HjdXC1KBziVH1fw0RBrJw0dQz2VZnZii%2B5Z%2BxU1sSDEzLAsm9B4ccnHaZfNo0hU9eaxQ4rF1Q7fkGtQXavnSZdu8hcCPDjrdfCpfU8QWJPcQh%2FDTBEUznFRdSpYuXpbNN%2FzTfhLwMCpd%2FnKoInrg9YVDMOj2y1BoyrCAsilMbHKTHqSXm0545U&X-Amz-Signature=0ece3342f7fabb685d99bdc4f7d48e54535f3a7e5981d33da737caa4cf519c93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JCJZKGI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCA6mHYRt%2BzeeXPYGM1Cw605AjcuSjODvZ2LcGULmYH%2FAIgA%2Fvi3uSaOVJxFsrYKcOa2RezBIUgnh55VBjIo1Hd6%2BEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNyvTLMoCy6DMjSICrcAwV5Agt0Ie6CoiUYlqvRrwpxA%2Fx3uD7WYu3Dh6Tgu3G1L5Ib2xykwTiB5FeDcaDmceftRTMFtIWjewi2XcUhZPvFODMvxgEsnp3zApOJyyn7rgt2nGaYjE8vbcn4w8rKV7LmnGz5HRIw5tsnGHC0H7ARJ%2BbLAbEdB0abxdsAr86zqkMouV8uDbklCrkkaVtEkqVm9Oj%2F8WryA67FNjCBhhlouUFOFQMd2KbEovps%2BDxUtD%2F1dXaJckreuNzFrjYwoU1gkpQeLkkc%2FpEH5Vu0u6RC1vNulZBwAMUfiTDs72Mr7MP6RqFuCmIOF%2BllrPYddFrcZ3UYfeJGKTgZgaYb%2Fa1JzY%2FEuxkzQANRaH1hNK4sOMrF9dx2JHIZbwQlV97kHgA2lmlbKPsYowJhu654%2BMCNlSJmF8crApL6Ma%2BByv0vCPO7Rc4qRhnAIHoBGwPtRC8ziEM891VbZhzKy0S%2BOiRTsHxWSN5OH61tTXB3Gd%2FY9VPol7IdsOHkIZoMzYQB5NyMu7K35Ujj986%2B%2BnMIijg%2B43ixrmlUafI5eFLpsxzVOdnRl0kEBO83ylf%2FiwC6NHpwr8XwH0VpnEMyMrcPqLEG16uQrZ%2BDQnqUxEwbqSpDjefB7yjVnxHwQdVYMIiB2cAGOqUBEV9%2FaBIvNlxe%2B8SBq6L8JsBtqERfr76Rz27V39HjdXC1KBziVH1fw0RBrJw0dQz2VZnZii%2B5Z%2BxU1sSDEzLAsm9B4ccnHaZfNo0hU9eaxQ4rF1Q7fkGtQXavnSZdu8hcCPDjrdfCpfU8QWJPcQh%2FDTBEUznFRdSpYuXpbNN%2FzTfhLwMCpd%2FnKoInrg9YVDMOj2y1BoyrCAsilMbHKTHqSXm0545U&X-Amz-Signature=cf640596e90b86fda4b4e394943812745a173a5da2ada7fd2bc7bd6aa3daeb96&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JCJZKGI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCA6mHYRt%2BzeeXPYGM1Cw605AjcuSjODvZ2LcGULmYH%2FAIgA%2Fvi3uSaOVJxFsrYKcOa2RezBIUgnh55VBjIo1Hd6%2BEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNyvTLMoCy6DMjSICrcAwV5Agt0Ie6CoiUYlqvRrwpxA%2Fx3uD7WYu3Dh6Tgu3G1L5Ib2xykwTiB5FeDcaDmceftRTMFtIWjewi2XcUhZPvFODMvxgEsnp3zApOJyyn7rgt2nGaYjE8vbcn4w8rKV7LmnGz5HRIw5tsnGHC0H7ARJ%2BbLAbEdB0abxdsAr86zqkMouV8uDbklCrkkaVtEkqVm9Oj%2F8WryA67FNjCBhhlouUFOFQMd2KbEovps%2BDxUtD%2F1dXaJckreuNzFrjYwoU1gkpQeLkkc%2FpEH5Vu0u6RC1vNulZBwAMUfiTDs72Mr7MP6RqFuCmIOF%2BllrPYddFrcZ3UYfeJGKTgZgaYb%2Fa1JzY%2FEuxkzQANRaH1hNK4sOMrF9dx2JHIZbwQlV97kHgA2lmlbKPsYowJhu654%2BMCNlSJmF8crApL6Ma%2BByv0vCPO7Rc4qRhnAIHoBGwPtRC8ziEM891VbZhzKy0S%2BOiRTsHxWSN5OH61tTXB3Gd%2FY9VPol7IdsOHkIZoMzYQB5NyMu7K35Ujj986%2B%2BnMIijg%2B43ixrmlUafI5eFLpsxzVOdnRl0kEBO83ylf%2FiwC6NHpwr8XwH0VpnEMyMrcPqLEG16uQrZ%2BDQnqUxEwbqSpDjefB7yjVnxHwQdVYMIiB2cAGOqUBEV9%2FaBIvNlxe%2B8SBq6L8JsBtqERfr76Rz27V39HjdXC1KBziVH1fw0RBrJw0dQz2VZnZii%2B5Z%2BxU1sSDEzLAsm9B4ccnHaZfNo0hU9eaxQ4rF1Q7fkGtQXavnSZdu8hcCPDjrdfCpfU8QWJPcQh%2FDTBEUznFRdSpYuXpbNN%2FzTfhLwMCpd%2FnKoInrg9YVDMOj2y1BoyrCAsilMbHKTHqSXm0545U&X-Amz-Signature=b49c116fbeef6472e9303eca003847443da7273959e5603f6f18d66c14f5ea78&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JCJZKGI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCA6mHYRt%2BzeeXPYGM1Cw605AjcuSjODvZ2LcGULmYH%2FAIgA%2Fvi3uSaOVJxFsrYKcOa2RezBIUgnh55VBjIo1Hd6%2BEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNyvTLMoCy6DMjSICrcAwV5Agt0Ie6CoiUYlqvRrwpxA%2Fx3uD7WYu3Dh6Tgu3G1L5Ib2xykwTiB5FeDcaDmceftRTMFtIWjewi2XcUhZPvFODMvxgEsnp3zApOJyyn7rgt2nGaYjE8vbcn4w8rKV7LmnGz5HRIw5tsnGHC0H7ARJ%2BbLAbEdB0abxdsAr86zqkMouV8uDbklCrkkaVtEkqVm9Oj%2F8WryA67FNjCBhhlouUFOFQMd2KbEovps%2BDxUtD%2F1dXaJckreuNzFrjYwoU1gkpQeLkkc%2FpEH5Vu0u6RC1vNulZBwAMUfiTDs72Mr7MP6RqFuCmIOF%2BllrPYddFrcZ3UYfeJGKTgZgaYb%2Fa1JzY%2FEuxkzQANRaH1hNK4sOMrF9dx2JHIZbwQlV97kHgA2lmlbKPsYowJhu654%2BMCNlSJmF8crApL6Ma%2BByv0vCPO7Rc4qRhnAIHoBGwPtRC8ziEM891VbZhzKy0S%2BOiRTsHxWSN5OH61tTXB3Gd%2FY9VPol7IdsOHkIZoMzYQB5NyMu7K35Ujj986%2B%2BnMIijg%2B43ixrmlUafI5eFLpsxzVOdnRl0kEBO83ylf%2FiwC6NHpwr8XwH0VpnEMyMrcPqLEG16uQrZ%2BDQnqUxEwbqSpDjefB7yjVnxHwQdVYMIiB2cAGOqUBEV9%2FaBIvNlxe%2B8SBq6L8JsBtqERfr76Rz27V39HjdXC1KBziVH1fw0RBrJw0dQz2VZnZii%2B5Z%2BxU1sSDEzLAsm9B4ccnHaZfNo0hU9eaxQ4rF1Q7fkGtQXavnSZdu8hcCPDjrdfCpfU8QWJPcQh%2FDTBEUznFRdSpYuXpbNN%2FzTfhLwMCpd%2FnKoInrg9YVDMOj2y1BoyrCAsilMbHKTHqSXm0545U&X-Amz-Signature=9d63d8d70d3fe60f37620cdd5f47f00927b05ee6215bf4fb8276969f639bdf06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JCJZKGI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCA6mHYRt%2BzeeXPYGM1Cw605AjcuSjODvZ2LcGULmYH%2FAIgA%2Fvi3uSaOVJxFsrYKcOa2RezBIUgnh55VBjIo1Hd6%2BEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNyvTLMoCy6DMjSICrcAwV5Agt0Ie6CoiUYlqvRrwpxA%2Fx3uD7WYu3Dh6Tgu3G1L5Ib2xykwTiB5FeDcaDmceftRTMFtIWjewi2XcUhZPvFODMvxgEsnp3zApOJyyn7rgt2nGaYjE8vbcn4w8rKV7LmnGz5HRIw5tsnGHC0H7ARJ%2BbLAbEdB0abxdsAr86zqkMouV8uDbklCrkkaVtEkqVm9Oj%2F8WryA67FNjCBhhlouUFOFQMd2KbEovps%2BDxUtD%2F1dXaJckreuNzFrjYwoU1gkpQeLkkc%2FpEH5Vu0u6RC1vNulZBwAMUfiTDs72Mr7MP6RqFuCmIOF%2BllrPYddFrcZ3UYfeJGKTgZgaYb%2Fa1JzY%2FEuxkzQANRaH1hNK4sOMrF9dx2JHIZbwQlV97kHgA2lmlbKPsYowJhu654%2BMCNlSJmF8crApL6Ma%2BByv0vCPO7Rc4qRhnAIHoBGwPtRC8ziEM891VbZhzKy0S%2BOiRTsHxWSN5OH61tTXB3Gd%2FY9VPol7IdsOHkIZoMzYQB5NyMu7K35Ujj986%2B%2BnMIijg%2B43ixrmlUafI5eFLpsxzVOdnRl0kEBO83ylf%2FiwC6NHpwr8XwH0VpnEMyMrcPqLEG16uQrZ%2BDQnqUxEwbqSpDjefB7yjVnxHwQdVYMIiB2cAGOqUBEV9%2FaBIvNlxe%2B8SBq6L8JsBtqERfr76Rz27V39HjdXC1KBziVH1fw0RBrJw0dQz2VZnZii%2B5Z%2BxU1sSDEzLAsm9B4ccnHaZfNo0hU9eaxQ4rF1Q7fkGtQXavnSZdu8hcCPDjrdfCpfU8QWJPcQh%2FDTBEUznFRdSpYuXpbNN%2FzTfhLwMCpd%2FnKoInrg9YVDMOj2y1BoyrCAsilMbHKTHqSXm0545U&X-Amz-Signature=c7b96285dff30f772c714989169ac3476531a492f4eb4e2774baa46fc84f2096&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JCJZKGI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCA6mHYRt%2BzeeXPYGM1Cw605AjcuSjODvZ2LcGULmYH%2FAIgA%2Fvi3uSaOVJxFsrYKcOa2RezBIUgnh55VBjIo1Hd6%2BEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNyvTLMoCy6DMjSICrcAwV5Agt0Ie6CoiUYlqvRrwpxA%2Fx3uD7WYu3Dh6Tgu3G1L5Ib2xykwTiB5FeDcaDmceftRTMFtIWjewi2XcUhZPvFODMvxgEsnp3zApOJyyn7rgt2nGaYjE8vbcn4w8rKV7LmnGz5HRIw5tsnGHC0H7ARJ%2BbLAbEdB0abxdsAr86zqkMouV8uDbklCrkkaVtEkqVm9Oj%2F8WryA67FNjCBhhlouUFOFQMd2KbEovps%2BDxUtD%2F1dXaJckreuNzFrjYwoU1gkpQeLkkc%2FpEH5Vu0u6RC1vNulZBwAMUfiTDs72Mr7MP6RqFuCmIOF%2BllrPYddFrcZ3UYfeJGKTgZgaYb%2Fa1JzY%2FEuxkzQANRaH1hNK4sOMrF9dx2JHIZbwQlV97kHgA2lmlbKPsYowJhu654%2BMCNlSJmF8crApL6Ma%2BByv0vCPO7Rc4qRhnAIHoBGwPtRC8ziEM891VbZhzKy0S%2BOiRTsHxWSN5OH61tTXB3Gd%2FY9VPol7IdsOHkIZoMzYQB5NyMu7K35Ujj986%2B%2BnMIijg%2B43ixrmlUafI5eFLpsxzVOdnRl0kEBO83ylf%2FiwC6NHpwr8XwH0VpnEMyMrcPqLEG16uQrZ%2BDQnqUxEwbqSpDjefB7yjVnxHwQdVYMIiB2cAGOqUBEV9%2FaBIvNlxe%2B8SBq6L8JsBtqERfr76Rz27V39HjdXC1KBziVH1fw0RBrJw0dQz2VZnZii%2B5Z%2BxU1sSDEzLAsm9B4ccnHaZfNo0hU9eaxQ4rF1Q7fkGtQXavnSZdu8hcCPDjrdfCpfU8QWJPcQh%2FDTBEUznFRdSpYuXpbNN%2FzTfhLwMCpd%2FnKoInrg9YVDMOj2y1BoyrCAsilMbHKTHqSXm0545U&X-Amz-Signature=6e9faf996d7bcb09a739b4efcb9e3034025e3902200f1654c0256bf547dc6282&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JCJZKGI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCA6mHYRt%2BzeeXPYGM1Cw605AjcuSjODvZ2LcGULmYH%2FAIgA%2Fvi3uSaOVJxFsrYKcOa2RezBIUgnh55VBjIo1Hd6%2BEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNyvTLMoCy6DMjSICrcAwV5Agt0Ie6CoiUYlqvRrwpxA%2Fx3uD7WYu3Dh6Tgu3G1L5Ib2xykwTiB5FeDcaDmceftRTMFtIWjewi2XcUhZPvFODMvxgEsnp3zApOJyyn7rgt2nGaYjE8vbcn4w8rKV7LmnGz5HRIw5tsnGHC0H7ARJ%2BbLAbEdB0abxdsAr86zqkMouV8uDbklCrkkaVtEkqVm9Oj%2F8WryA67FNjCBhhlouUFOFQMd2KbEovps%2BDxUtD%2F1dXaJckreuNzFrjYwoU1gkpQeLkkc%2FpEH5Vu0u6RC1vNulZBwAMUfiTDs72Mr7MP6RqFuCmIOF%2BllrPYddFrcZ3UYfeJGKTgZgaYb%2Fa1JzY%2FEuxkzQANRaH1hNK4sOMrF9dx2JHIZbwQlV97kHgA2lmlbKPsYowJhu654%2BMCNlSJmF8crApL6Ma%2BByv0vCPO7Rc4qRhnAIHoBGwPtRC8ziEM891VbZhzKy0S%2BOiRTsHxWSN5OH61tTXB3Gd%2FY9VPol7IdsOHkIZoMzYQB5NyMu7K35Ujj986%2B%2BnMIijg%2B43ixrmlUafI5eFLpsxzVOdnRl0kEBO83ylf%2FiwC6NHpwr8XwH0VpnEMyMrcPqLEG16uQrZ%2BDQnqUxEwbqSpDjefB7yjVnxHwQdVYMIiB2cAGOqUBEV9%2FaBIvNlxe%2B8SBq6L8JsBtqERfr76Rz27V39HjdXC1KBziVH1fw0RBrJw0dQz2VZnZii%2B5Z%2BxU1sSDEzLAsm9B4ccnHaZfNo0hU9eaxQ4rF1Q7fkGtQXavnSZdu8hcCPDjrdfCpfU8QWJPcQh%2FDTBEUznFRdSpYuXpbNN%2FzTfhLwMCpd%2FnKoInrg9YVDMOj2y1BoyrCAsilMbHKTHqSXm0545U&X-Amz-Signature=2bfb701d4022a01d2219952e66331e691c5e126d073302c6067dc1fff184602e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JCJZKGI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCA6mHYRt%2BzeeXPYGM1Cw605AjcuSjODvZ2LcGULmYH%2FAIgA%2Fvi3uSaOVJxFsrYKcOa2RezBIUgnh55VBjIo1Hd6%2BEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNyvTLMoCy6DMjSICrcAwV5Agt0Ie6CoiUYlqvRrwpxA%2Fx3uD7WYu3Dh6Tgu3G1L5Ib2xykwTiB5FeDcaDmceftRTMFtIWjewi2XcUhZPvFODMvxgEsnp3zApOJyyn7rgt2nGaYjE8vbcn4w8rKV7LmnGz5HRIw5tsnGHC0H7ARJ%2BbLAbEdB0abxdsAr86zqkMouV8uDbklCrkkaVtEkqVm9Oj%2F8WryA67FNjCBhhlouUFOFQMd2KbEovps%2BDxUtD%2F1dXaJckreuNzFrjYwoU1gkpQeLkkc%2FpEH5Vu0u6RC1vNulZBwAMUfiTDs72Mr7MP6RqFuCmIOF%2BllrPYddFrcZ3UYfeJGKTgZgaYb%2Fa1JzY%2FEuxkzQANRaH1hNK4sOMrF9dx2JHIZbwQlV97kHgA2lmlbKPsYowJhu654%2BMCNlSJmF8crApL6Ma%2BByv0vCPO7Rc4qRhnAIHoBGwPtRC8ziEM891VbZhzKy0S%2BOiRTsHxWSN5OH61tTXB3Gd%2FY9VPol7IdsOHkIZoMzYQB5NyMu7K35Ujj986%2B%2BnMIijg%2B43ixrmlUafI5eFLpsxzVOdnRl0kEBO83ylf%2FiwC6NHpwr8XwH0VpnEMyMrcPqLEG16uQrZ%2BDQnqUxEwbqSpDjefB7yjVnxHwQdVYMIiB2cAGOqUBEV9%2FaBIvNlxe%2B8SBq6L8JsBtqERfr76Rz27V39HjdXC1KBziVH1fw0RBrJw0dQz2VZnZii%2B5Z%2BxU1sSDEzLAsm9B4ccnHaZfNo0hU9eaxQ4rF1Q7fkGtQXavnSZdu8hcCPDjrdfCpfU8QWJPcQh%2FDTBEUznFRdSpYuXpbNN%2FzTfhLwMCpd%2FnKoInrg9YVDMOj2y1BoyrCAsilMbHKTHqSXm0545U&X-Amz-Signature=4df02a91593bdd37a1dc2cf8587d214f196b132fe0811174e29334f81c35b0a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
