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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LN47KRU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3auf%2BYRwmhEZ51N%2B1bGhTwnTLCzeruB6alr%2BVrNgNFAiEArutY%2BabUjjWVz2yalE73lKH2%2BsRAOSa6B8vjc6tHL%2Fkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBkGKQBZqJocsnIqJircAxcZDuZTV712x70eBYOc77t63fgACMA6QLohK0%2FR%2BQ3RZv1mxLzbDfv6tyWiy44e8b9S2S5YKd%2BBEeRj%2FfgymyaC9n00sDW9gT7Z4elWGyBUNcMqg%2FK4l57n9RoqfusfsKD39mt1iN5pG91k0EGpFXOqXVgTRY%2Fg3feeB%2BCLhYi3n3j39CtpRaprJPaE7EwzY0%2FL8c7KM7M%2FEwOxbhQk3MyEMUyQbURe%2FKbOm6kKr60x7%2FTBzA2BjwAuHEUO4GJBbWnj52Zh2MQSa3ddBYVeMZ63RNzq8OzsqQOGoQbrAIDbh7ImNu5KLzr3QwELIVLwOULC%2FuFNSbz8tElGs9Cvrv3sfKE5ctaVBbXvvlMhclCR%2FR6vJucUyNgzImfOY%2BicdciPk0vGrCj3mBsVsEHT%2FRe1Kv8PGmbpA2IL8ZU8t5oS0wDFII05vKyVMySMK%2FQsEVbmMgO8mheVfsyMM0vkbMKoFc4xWDr0I1qMvcU1Nn5BC%2BnFebae1Fqp9%2Bd%2F9vGrpHGbGxMMCHMkzOGx77t2BFczjbRod%2BXg0hsOcm5gr%2B2I9e9e3GilZ9fdF5ian5eZmEvuY%2BbUk%2BrIl%2BG%2BRiOHlQlkUEBEZmWGML%2FqSy8m88yBs%2FD1UqjLlOX6fTUGMLXvmsEGOqUBxQYTneeFptL2iq2TTscOZ%2BdBnOhsdtC3QOAbecNqa%2BZ29M%2B6OgQoSmWIrMhd6faaRyBo4pbwKtpeamTfbtcki2woQpSpfec9eeKc1IaZbsVqz7Zkf9WvJz1O8wkDR%2FfvVlFl2iSJzde%2FBmEKAGIqebxr%2B0fssPe9Y5M7mdcZ7OquX2nbbPxaBcu15vAB%2FIhuAq1zCq5LJyU05%2FyNqa96RTxNDfdO&X-Amz-Signature=da4f210a8b3e01c6cb95408de917a29568b27a064cfe4fbbe03e51c2b95b9c42&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LN47KRU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3auf%2BYRwmhEZ51N%2B1bGhTwnTLCzeruB6alr%2BVrNgNFAiEArutY%2BabUjjWVz2yalE73lKH2%2BsRAOSa6B8vjc6tHL%2Fkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBkGKQBZqJocsnIqJircAxcZDuZTV712x70eBYOc77t63fgACMA6QLohK0%2FR%2BQ3RZv1mxLzbDfv6tyWiy44e8b9S2S5YKd%2BBEeRj%2FfgymyaC9n00sDW9gT7Z4elWGyBUNcMqg%2FK4l57n9RoqfusfsKD39mt1iN5pG91k0EGpFXOqXVgTRY%2Fg3feeB%2BCLhYi3n3j39CtpRaprJPaE7EwzY0%2FL8c7KM7M%2FEwOxbhQk3MyEMUyQbURe%2FKbOm6kKr60x7%2FTBzA2BjwAuHEUO4GJBbWnj52Zh2MQSa3ddBYVeMZ63RNzq8OzsqQOGoQbrAIDbh7ImNu5KLzr3QwELIVLwOULC%2FuFNSbz8tElGs9Cvrv3sfKE5ctaVBbXvvlMhclCR%2FR6vJucUyNgzImfOY%2BicdciPk0vGrCj3mBsVsEHT%2FRe1Kv8PGmbpA2IL8ZU8t5oS0wDFII05vKyVMySMK%2FQsEVbmMgO8mheVfsyMM0vkbMKoFc4xWDr0I1qMvcU1Nn5BC%2BnFebae1Fqp9%2Bd%2F9vGrpHGbGxMMCHMkzOGx77t2BFczjbRod%2BXg0hsOcm5gr%2B2I9e9e3GilZ9fdF5ian5eZmEvuY%2BbUk%2BrIl%2BG%2BRiOHlQlkUEBEZmWGML%2FqSy8m88yBs%2FD1UqjLlOX6fTUGMLXvmsEGOqUBxQYTneeFptL2iq2TTscOZ%2BdBnOhsdtC3QOAbecNqa%2BZ29M%2B6OgQoSmWIrMhd6faaRyBo4pbwKtpeamTfbtcki2woQpSpfec9eeKc1IaZbsVqz7Zkf9WvJz1O8wkDR%2FfvVlFl2iSJzde%2FBmEKAGIqebxr%2B0fssPe9Y5M7mdcZ7OquX2nbbPxaBcu15vAB%2FIhuAq1zCq5LJyU05%2FyNqa96RTxNDfdO&X-Amz-Signature=c174c9581ddfacf38176ce7ad49e2cf1e9fc880030f106234361fd11d851b27f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LN47KRU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3auf%2BYRwmhEZ51N%2B1bGhTwnTLCzeruB6alr%2BVrNgNFAiEArutY%2BabUjjWVz2yalE73lKH2%2BsRAOSa6B8vjc6tHL%2Fkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBkGKQBZqJocsnIqJircAxcZDuZTV712x70eBYOc77t63fgACMA6QLohK0%2FR%2BQ3RZv1mxLzbDfv6tyWiy44e8b9S2S5YKd%2BBEeRj%2FfgymyaC9n00sDW9gT7Z4elWGyBUNcMqg%2FK4l57n9RoqfusfsKD39mt1iN5pG91k0EGpFXOqXVgTRY%2Fg3feeB%2BCLhYi3n3j39CtpRaprJPaE7EwzY0%2FL8c7KM7M%2FEwOxbhQk3MyEMUyQbURe%2FKbOm6kKr60x7%2FTBzA2BjwAuHEUO4GJBbWnj52Zh2MQSa3ddBYVeMZ63RNzq8OzsqQOGoQbrAIDbh7ImNu5KLzr3QwELIVLwOULC%2FuFNSbz8tElGs9Cvrv3sfKE5ctaVBbXvvlMhclCR%2FR6vJucUyNgzImfOY%2BicdciPk0vGrCj3mBsVsEHT%2FRe1Kv8PGmbpA2IL8ZU8t5oS0wDFII05vKyVMySMK%2FQsEVbmMgO8mheVfsyMM0vkbMKoFc4xWDr0I1qMvcU1Nn5BC%2BnFebae1Fqp9%2Bd%2F9vGrpHGbGxMMCHMkzOGx77t2BFczjbRod%2BXg0hsOcm5gr%2B2I9e9e3GilZ9fdF5ian5eZmEvuY%2BbUk%2BrIl%2BG%2BRiOHlQlkUEBEZmWGML%2FqSy8m88yBs%2FD1UqjLlOX6fTUGMLXvmsEGOqUBxQYTneeFptL2iq2TTscOZ%2BdBnOhsdtC3QOAbecNqa%2BZ29M%2B6OgQoSmWIrMhd6faaRyBo4pbwKtpeamTfbtcki2woQpSpfec9eeKc1IaZbsVqz7Zkf9WvJz1O8wkDR%2FfvVlFl2iSJzde%2FBmEKAGIqebxr%2B0fssPe9Y5M7mdcZ7OquX2nbbPxaBcu15vAB%2FIhuAq1zCq5LJyU05%2FyNqa96RTxNDfdO&X-Amz-Signature=0bf0f845591e4d3385d6e4fc25753d90458bdcf242f664e352c6dcbb53a50cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LN47KRU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3auf%2BYRwmhEZ51N%2B1bGhTwnTLCzeruB6alr%2BVrNgNFAiEArutY%2BabUjjWVz2yalE73lKH2%2BsRAOSa6B8vjc6tHL%2Fkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBkGKQBZqJocsnIqJircAxcZDuZTV712x70eBYOc77t63fgACMA6QLohK0%2FR%2BQ3RZv1mxLzbDfv6tyWiy44e8b9S2S5YKd%2BBEeRj%2FfgymyaC9n00sDW9gT7Z4elWGyBUNcMqg%2FK4l57n9RoqfusfsKD39mt1iN5pG91k0EGpFXOqXVgTRY%2Fg3feeB%2BCLhYi3n3j39CtpRaprJPaE7EwzY0%2FL8c7KM7M%2FEwOxbhQk3MyEMUyQbURe%2FKbOm6kKr60x7%2FTBzA2BjwAuHEUO4GJBbWnj52Zh2MQSa3ddBYVeMZ63RNzq8OzsqQOGoQbrAIDbh7ImNu5KLzr3QwELIVLwOULC%2FuFNSbz8tElGs9Cvrv3sfKE5ctaVBbXvvlMhclCR%2FR6vJucUyNgzImfOY%2BicdciPk0vGrCj3mBsVsEHT%2FRe1Kv8PGmbpA2IL8ZU8t5oS0wDFII05vKyVMySMK%2FQsEVbmMgO8mheVfsyMM0vkbMKoFc4xWDr0I1qMvcU1Nn5BC%2BnFebae1Fqp9%2Bd%2F9vGrpHGbGxMMCHMkzOGx77t2BFczjbRod%2BXg0hsOcm5gr%2B2I9e9e3GilZ9fdF5ian5eZmEvuY%2BbUk%2BrIl%2BG%2BRiOHlQlkUEBEZmWGML%2FqSy8m88yBs%2FD1UqjLlOX6fTUGMLXvmsEGOqUBxQYTneeFptL2iq2TTscOZ%2BdBnOhsdtC3QOAbecNqa%2BZ29M%2B6OgQoSmWIrMhd6faaRyBo4pbwKtpeamTfbtcki2woQpSpfec9eeKc1IaZbsVqz7Zkf9WvJz1O8wkDR%2FfvVlFl2iSJzde%2FBmEKAGIqebxr%2B0fssPe9Y5M7mdcZ7OquX2nbbPxaBcu15vAB%2FIhuAq1zCq5LJyU05%2FyNqa96RTxNDfdO&X-Amz-Signature=92d08ad3e1216961171fcfe472fc9d26217c46534ce22f709902b2402036ce00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LN47KRU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3auf%2BYRwmhEZ51N%2B1bGhTwnTLCzeruB6alr%2BVrNgNFAiEArutY%2BabUjjWVz2yalE73lKH2%2BsRAOSa6B8vjc6tHL%2Fkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBkGKQBZqJocsnIqJircAxcZDuZTV712x70eBYOc77t63fgACMA6QLohK0%2FR%2BQ3RZv1mxLzbDfv6tyWiy44e8b9S2S5YKd%2BBEeRj%2FfgymyaC9n00sDW9gT7Z4elWGyBUNcMqg%2FK4l57n9RoqfusfsKD39mt1iN5pG91k0EGpFXOqXVgTRY%2Fg3feeB%2BCLhYi3n3j39CtpRaprJPaE7EwzY0%2FL8c7KM7M%2FEwOxbhQk3MyEMUyQbURe%2FKbOm6kKr60x7%2FTBzA2BjwAuHEUO4GJBbWnj52Zh2MQSa3ddBYVeMZ63RNzq8OzsqQOGoQbrAIDbh7ImNu5KLzr3QwELIVLwOULC%2FuFNSbz8tElGs9Cvrv3sfKE5ctaVBbXvvlMhclCR%2FR6vJucUyNgzImfOY%2BicdciPk0vGrCj3mBsVsEHT%2FRe1Kv8PGmbpA2IL8ZU8t5oS0wDFII05vKyVMySMK%2FQsEVbmMgO8mheVfsyMM0vkbMKoFc4xWDr0I1qMvcU1Nn5BC%2BnFebae1Fqp9%2Bd%2F9vGrpHGbGxMMCHMkzOGx77t2BFczjbRod%2BXg0hsOcm5gr%2B2I9e9e3GilZ9fdF5ian5eZmEvuY%2BbUk%2BrIl%2BG%2BRiOHlQlkUEBEZmWGML%2FqSy8m88yBs%2FD1UqjLlOX6fTUGMLXvmsEGOqUBxQYTneeFptL2iq2TTscOZ%2BdBnOhsdtC3QOAbecNqa%2BZ29M%2B6OgQoSmWIrMhd6faaRyBo4pbwKtpeamTfbtcki2woQpSpfec9eeKc1IaZbsVqz7Zkf9WvJz1O8wkDR%2FfvVlFl2iSJzde%2FBmEKAGIqebxr%2B0fssPe9Y5M7mdcZ7OquX2nbbPxaBcu15vAB%2FIhuAq1zCq5LJyU05%2FyNqa96RTxNDfdO&X-Amz-Signature=cbfdba5a9269f0988a1c6ad2477a25f3fc85dea99f5780877958492a1573726c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LN47KRU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3auf%2BYRwmhEZ51N%2B1bGhTwnTLCzeruB6alr%2BVrNgNFAiEArutY%2BabUjjWVz2yalE73lKH2%2BsRAOSa6B8vjc6tHL%2Fkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBkGKQBZqJocsnIqJircAxcZDuZTV712x70eBYOc77t63fgACMA6QLohK0%2FR%2BQ3RZv1mxLzbDfv6tyWiy44e8b9S2S5YKd%2BBEeRj%2FfgymyaC9n00sDW9gT7Z4elWGyBUNcMqg%2FK4l57n9RoqfusfsKD39mt1iN5pG91k0EGpFXOqXVgTRY%2Fg3feeB%2BCLhYi3n3j39CtpRaprJPaE7EwzY0%2FL8c7KM7M%2FEwOxbhQk3MyEMUyQbURe%2FKbOm6kKr60x7%2FTBzA2BjwAuHEUO4GJBbWnj52Zh2MQSa3ddBYVeMZ63RNzq8OzsqQOGoQbrAIDbh7ImNu5KLzr3QwELIVLwOULC%2FuFNSbz8tElGs9Cvrv3sfKE5ctaVBbXvvlMhclCR%2FR6vJucUyNgzImfOY%2BicdciPk0vGrCj3mBsVsEHT%2FRe1Kv8PGmbpA2IL8ZU8t5oS0wDFII05vKyVMySMK%2FQsEVbmMgO8mheVfsyMM0vkbMKoFc4xWDr0I1qMvcU1Nn5BC%2BnFebae1Fqp9%2Bd%2F9vGrpHGbGxMMCHMkzOGx77t2BFczjbRod%2BXg0hsOcm5gr%2B2I9e9e3GilZ9fdF5ian5eZmEvuY%2BbUk%2BrIl%2BG%2BRiOHlQlkUEBEZmWGML%2FqSy8m88yBs%2FD1UqjLlOX6fTUGMLXvmsEGOqUBxQYTneeFptL2iq2TTscOZ%2BdBnOhsdtC3QOAbecNqa%2BZ29M%2B6OgQoSmWIrMhd6faaRyBo4pbwKtpeamTfbtcki2woQpSpfec9eeKc1IaZbsVqz7Zkf9WvJz1O8wkDR%2FfvVlFl2iSJzde%2FBmEKAGIqebxr%2B0fssPe9Y5M7mdcZ7OquX2nbbPxaBcu15vAB%2FIhuAq1zCq5LJyU05%2FyNqa96RTxNDfdO&X-Amz-Signature=b754665fb1824dd9bfe17842061bdf156946f729b0200395631402fcaaa2c434&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LN47KRU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3auf%2BYRwmhEZ51N%2B1bGhTwnTLCzeruB6alr%2BVrNgNFAiEArutY%2BabUjjWVz2yalE73lKH2%2BsRAOSa6B8vjc6tHL%2Fkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBkGKQBZqJocsnIqJircAxcZDuZTV712x70eBYOc77t63fgACMA6QLohK0%2FR%2BQ3RZv1mxLzbDfv6tyWiy44e8b9S2S5YKd%2BBEeRj%2FfgymyaC9n00sDW9gT7Z4elWGyBUNcMqg%2FK4l57n9RoqfusfsKD39mt1iN5pG91k0EGpFXOqXVgTRY%2Fg3feeB%2BCLhYi3n3j39CtpRaprJPaE7EwzY0%2FL8c7KM7M%2FEwOxbhQk3MyEMUyQbURe%2FKbOm6kKr60x7%2FTBzA2BjwAuHEUO4GJBbWnj52Zh2MQSa3ddBYVeMZ63RNzq8OzsqQOGoQbrAIDbh7ImNu5KLzr3QwELIVLwOULC%2FuFNSbz8tElGs9Cvrv3sfKE5ctaVBbXvvlMhclCR%2FR6vJucUyNgzImfOY%2BicdciPk0vGrCj3mBsVsEHT%2FRe1Kv8PGmbpA2IL8ZU8t5oS0wDFII05vKyVMySMK%2FQsEVbmMgO8mheVfsyMM0vkbMKoFc4xWDr0I1qMvcU1Nn5BC%2BnFebae1Fqp9%2Bd%2F9vGrpHGbGxMMCHMkzOGx77t2BFczjbRod%2BXg0hsOcm5gr%2B2I9e9e3GilZ9fdF5ian5eZmEvuY%2BbUk%2BrIl%2BG%2BRiOHlQlkUEBEZmWGML%2FqSy8m88yBs%2FD1UqjLlOX6fTUGMLXvmsEGOqUBxQYTneeFptL2iq2TTscOZ%2BdBnOhsdtC3QOAbecNqa%2BZ29M%2B6OgQoSmWIrMhd6faaRyBo4pbwKtpeamTfbtcki2woQpSpfec9eeKc1IaZbsVqz7Zkf9WvJz1O8wkDR%2FfvVlFl2iSJzde%2FBmEKAGIqebxr%2B0fssPe9Y5M7mdcZ7OquX2nbbPxaBcu15vAB%2FIhuAq1zCq5LJyU05%2FyNqa96RTxNDfdO&X-Amz-Signature=936c73e98b8e71f2912f9421f9373939c05a6232af3e6dde1e93518ed6f73809&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LN47KRU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3auf%2BYRwmhEZ51N%2B1bGhTwnTLCzeruB6alr%2BVrNgNFAiEArutY%2BabUjjWVz2yalE73lKH2%2BsRAOSa6B8vjc6tHL%2Fkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBkGKQBZqJocsnIqJircAxcZDuZTV712x70eBYOc77t63fgACMA6QLohK0%2FR%2BQ3RZv1mxLzbDfv6tyWiy44e8b9S2S5YKd%2BBEeRj%2FfgymyaC9n00sDW9gT7Z4elWGyBUNcMqg%2FK4l57n9RoqfusfsKD39mt1iN5pG91k0EGpFXOqXVgTRY%2Fg3feeB%2BCLhYi3n3j39CtpRaprJPaE7EwzY0%2FL8c7KM7M%2FEwOxbhQk3MyEMUyQbURe%2FKbOm6kKr60x7%2FTBzA2BjwAuHEUO4GJBbWnj52Zh2MQSa3ddBYVeMZ63RNzq8OzsqQOGoQbrAIDbh7ImNu5KLzr3QwELIVLwOULC%2FuFNSbz8tElGs9Cvrv3sfKE5ctaVBbXvvlMhclCR%2FR6vJucUyNgzImfOY%2BicdciPk0vGrCj3mBsVsEHT%2FRe1Kv8PGmbpA2IL8ZU8t5oS0wDFII05vKyVMySMK%2FQsEVbmMgO8mheVfsyMM0vkbMKoFc4xWDr0I1qMvcU1Nn5BC%2BnFebae1Fqp9%2Bd%2F9vGrpHGbGxMMCHMkzOGx77t2BFczjbRod%2BXg0hsOcm5gr%2B2I9e9e3GilZ9fdF5ian5eZmEvuY%2BbUk%2BrIl%2BG%2BRiOHlQlkUEBEZmWGML%2FqSy8m88yBs%2FD1UqjLlOX6fTUGMLXvmsEGOqUBxQYTneeFptL2iq2TTscOZ%2BdBnOhsdtC3QOAbecNqa%2BZ29M%2B6OgQoSmWIrMhd6faaRyBo4pbwKtpeamTfbtcki2woQpSpfec9eeKc1IaZbsVqz7Zkf9WvJz1O8wkDR%2FfvVlFl2iSJzde%2FBmEKAGIqebxr%2B0fssPe9Y5M7mdcZ7OquX2nbbPxaBcu15vAB%2FIhuAq1zCq5LJyU05%2FyNqa96RTxNDfdO&X-Amz-Signature=3f58d5401cb1c1be52a02260e13b97197fe2c38dfe4a6c723b3e6798f3b4fb43&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
