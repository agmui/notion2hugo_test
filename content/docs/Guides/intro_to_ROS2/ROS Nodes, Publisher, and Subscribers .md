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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ILPUWN3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDBUUeA7RfacoVcm5QKVAbegT5zAtN0xmumr3IYcB2OkgIgUvIdQomy5rL8T0cAcmABW4kVa3ZtJnoVleBTz6hO9CYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwQTGxMwLtneL%2FXACrcA4%2Bb%2B5iKfaUoGNfWOTJhQgxCiFEXtZDv99kf3bVqTpWFjf%2FJTakFg%2F83RO4q%2BCG2aaA148moygPcVVykVb2r9z5w7w7bSrZuq1JlPGpJd0U7IO0SsgTwAe02e0lObACS8DW8pmsRMNGNeA5q76GMmMPo9ifXW%2FZVBulmBf47ZEqK1HAoopDOXieIsjZmbmL%2F5lepxEjRMH3%2F%2BKXk6xC1FBEGK7DnRMnJ%2FVitup1HiRmKpu7ZyPo3NoMb5LRGQf0zujBhLpz%2FivYVSKUtQHWR%2BuMatEOuVzTyW%2FICKVj4IvCsADEkmh8i%2BJfsFOA9gnpwhLYAu8u4DDo07euvBTOfAZkR4twfa%2BbF2YiRs4CtLO9fIPMH84Z2XSodtYuSqM2kIRVjUvjCz%2BtjkR4rSv7xBnG5CBCcS0%2F4LHywDzM4QHdi%2FqfB5lkqu9Zc8UGs1lB3RCWBEWchqiv%2Fw%2FzyGqDPvvSajnXb3DQba1Loo6AjLGJBzRAt9ZK3ObRdiAfuyIxoII00%2FcR6xA0S%2BlzipGEd9AughSFtoaDFG%2Flyu%2BvY8FbPQB8dmR7LVPBN79VYQd6GNmiQ9B7lnBLDinZ1ws07ZyBXFyDtkVYfxitZNVWco3FF68FcJXD6cxYzN7hpMMvHz8AGOqUBmdGS0%2BcwoW0nazKwGyhz9skhYOHhYpYR0kiDr%2BlZ7S7%2BRzPqjZ%2B%2BxuctDNPQp7ICpbth9OpOvWqm1XszZPDPIP6vz3tMOPgv%2B3SXpGyAUsmg9sWYA8Mvza%2FuwW7o99jn0xJvmRUD20m8LWBFv8i4a6oKkuV1cEh5opVX81D0CllCQ1B9lqBI9t6sPPjRgVOEdvBXTNJVv%2FBZ1EG1JxBk383UVHYR&X-Amz-Signature=86a786258c412bee6ac27e228b7c595319f26ed371b70bc684578bac0a2757fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ILPUWN3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDBUUeA7RfacoVcm5QKVAbegT5zAtN0xmumr3IYcB2OkgIgUvIdQomy5rL8T0cAcmABW4kVa3ZtJnoVleBTz6hO9CYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwQTGxMwLtneL%2FXACrcA4%2Bb%2B5iKfaUoGNfWOTJhQgxCiFEXtZDv99kf3bVqTpWFjf%2FJTakFg%2F83RO4q%2BCG2aaA148moygPcVVykVb2r9z5w7w7bSrZuq1JlPGpJd0U7IO0SsgTwAe02e0lObACS8DW8pmsRMNGNeA5q76GMmMPo9ifXW%2FZVBulmBf47ZEqK1HAoopDOXieIsjZmbmL%2F5lepxEjRMH3%2F%2BKXk6xC1FBEGK7DnRMnJ%2FVitup1HiRmKpu7ZyPo3NoMb5LRGQf0zujBhLpz%2FivYVSKUtQHWR%2BuMatEOuVzTyW%2FICKVj4IvCsADEkmh8i%2BJfsFOA9gnpwhLYAu8u4DDo07euvBTOfAZkR4twfa%2BbF2YiRs4CtLO9fIPMH84Z2XSodtYuSqM2kIRVjUvjCz%2BtjkR4rSv7xBnG5CBCcS0%2F4LHywDzM4QHdi%2FqfB5lkqu9Zc8UGs1lB3RCWBEWchqiv%2Fw%2FzyGqDPvvSajnXb3DQba1Loo6AjLGJBzRAt9ZK3ObRdiAfuyIxoII00%2FcR6xA0S%2BlzipGEd9AughSFtoaDFG%2Flyu%2BvY8FbPQB8dmR7LVPBN79VYQd6GNmiQ9B7lnBLDinZ1ws07ZyBXFyDtkVYfxitZNVWco3FF68FcJXD6cxYzN7hpMMvHz8AGOqUBmdGS0%2BcwoW0nazKwGyhz9skhYOHhYpYR0kiDr%2BlZ7S7%2BRzPqjZ%2B%2BxuctDNPQp7ICpbth9OpOvWqm1XszZPDPIP6vz3tMOPgv%2B3SXpGyAUsmg9sWYA8Mvza%2FuwW7o99jn0xJvmRUD20m8LWBFv8i4a6oKkuV1cEh5opVX81D0CllCQ1B9lqBI9t6sPPjRgVOEdvBXTNJVv%2FBZ1EG1JxBk383UVHYR&X-Amz-Signature=ddcb0967c70c5c1096e84e7c6b2b251101ce29d059c110f148cea5d77d41d01d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ILPUWN3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDBUUeA7RfacoVcm5QKVAbegT5zAtN0xmumr3IYcB2OkgIgUvIdQomy5rL8T0cAcmABW4kVa3ZtJnoVleBTz6hO9CYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwQTGxMwLtneL%2FXACrcA4%2Bb%2B5iKfaUoGNfWOTJhQgxCiFEXtZDv99kf3bVqTpWFjf%2FJTakFg%2F83RO4q%2BCG2aaA148moygPcVVykVb2r9z5w7w7bSrZuq1JlPGpJd0U7IO0SsgTwAe02e0lObACS8DW8pmsRMNGNeA5q76GMmMPo9ifXW%2FZVBulmBf47ZEqK1HAoopDOXieIsjZmbmL%2F5lepxEjRMH3%2F%2BKXk6xC1FBEGK7DnRMnJ%2FVitup1HiRmKpu7ZyPo3NoMb5LRGQf0zujBhLpz%2FivYVSKUtQHWR%2BuMatEOuVzTyW%2FICKVj4IvCsADEkmh8i%2BJfsFOA9gnpwhLYAu8u4DDo07euvBTOfAZkR4twfa%2BbF2YiRs4CtLO9fIPMH84Z2XSodtYuSqM2kIRVjUvjCz%2BtjkR4rSv7xBnG5CBCcS0%2F4LHywDzM4QHdi%2FqfB5lkqu9Zc8UGs1lB3RCWBEWchqiv%2Fw%2FzyGqDPvvSajnXb3DQba1Loo6AjLGJBzRAt9ZK3ObRdiAfuyIxoII00%2FcR6xA0S%2BlzipGEd9AughSFtoaDFG%2Flyu%2BvY8FbPQB8dmR7LVPBN79VYQd6GNmiQ9B7lnBLDinZ1ws07ZyBXFyDtkVYfxitZNVWco3FF68FcJXD6cxYzN7hpMMvHz8AGOqUBmdGS0%2BcwoW0nazKwGyhz9skhYOHhYpYR0kiDr%2BlZ7S7%2BRzPqjZ%2B%2BxuctDNPQp7ICpbth9OpOvWqm1XszZPDPIP6vz3tMOPgv%2B3SXpGyAUsmg9sWYA8Mvza%2FuwW7o99jn0xJvmRUD20m8LWBFv8i4a6oKkuV1cEh5opVX81D0CllCQ1B9lqBI9t6sPPjRgVOEdvBXTNJVv%2FBZ1EG1JxBk383UVHYR&X-Amz-Signature=501440fc66bfe657152c13fa19558edb72745a0a88cf82fdf4109728b929bfb0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ILPUWN3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDBUUeA7RfacoVcm5QKVAbegT5zAtN0xmumr3IYcB2OkgIgUvIdQomy5rL8T0cAcmABW4kVa3ZtJnoVleBTz6hO9CYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwQTGxMwLtneL%2FXACrcA4%2Bb%2B5iKfaUoGNfWOTJhQgxCiFEXtZDv99kf3bVqTpWFjf%2FJTakFg%2F83RO4q%2BCG2aaA148moygPcVVykVb2r9z5w7w7bSrZuq1JlPGpJd0U7IO0SsgTwAe02e0lObACS8DW8pmsRMNGNeA5q76GMmMPo9ifXW%2FZVBulmBf47ZEqK1HAoopDOXieIsjZmbmL%2F5lepxEjRMH3%2F%2BKXk6xC1FBEGK7DnRMnJ%2FVitup1HiRmKpu7ZyPo3NoMb5LRGQf0zujBhLpz%2FivYVSKUtQHWR%2BuMatEOuVzTyW%2FICKVj4IvCsADEkmh8i%2BJfsFOA9gnpwhLYAu8u4DDo07euvBTOfAZkR4twfa%2BbF2YiRs4CtLO9fIPMH84Z2XSodtYuSqM2kIRVjUvjCz%2BtjkR4rSv7xBnG5CBCcS0%2F4LHywDzM4QHdi%2FqfB5lkqu9Zc8UGs1lB3RCWBEWchqiv%2Fw%2FzyGqDPvvSajnXb3DQba1Loo6AjLGJBzRAt9ZK3ObRdiAfuyIxoII00%2FcR6xA0S%2BlzipGEd9AughSFtoaDFG%2Flyu%2BvY8FbPQB8dmR7LVPBN79VYQd6GNmiQ9B7lnBLDinZ1ws07ZyBXFyDtkVYfxitZNVWco3FF68FcJXD6cxYzN7hpMMvHz8AGOqUBmdGS0%2BcwoW0nazKwGyhz9skhYOHhYpYR0kiDr%2BlZ7S7%2BRzPqjZ%2B%2BxuctDNPQp7ICpbth9OpOvWqm1XszZPDPIP6vz3tMOPgv%2B3SXpGyAUsmg9sWYA8Mvza%2FuwW7o99jn0xJvmRUD20m8LWBFv8i4a6oKkuV1cEh5opVX81D0CllCQ1B9lqBI9t6sPPjRgVOEdvBXTNJVv%2FBZ1EG1JxBk383UVHYR&X-Amz-Signature=4e5a6394eb41927fd2c0951e572c3adfc8a71f6accc50036ed4268e978920942&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ILPUWN3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDBUUeA7RfacoVcm5QKVAbegT5zAtN0xmumr3IYcB2OkgIgUvIdQomy5rL8T0cAcmABW4kVa3ZtJnoVleBTz6hO9CYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwQTGxMwLtneL%2FXACrcA4%2Bb%2B5iKfaUoGNfWOTJhQgxCiFEXtZDv99kf3bVqTpWFjf%2FJTakFg%2F83RO4q%2BCG2aaA148moygPcVVykVb2r9z5w7w7bSrZuq1JlPGpJd0U7IO0SsgTwAe02e0lObACS8DW8pmsRMNGNeA5q76GMmMPo9ifXW%2FZVBulmBf47ZEqK1HAoopDOXieIsjZmbmL%2F5lepxEjRMH3%2F%2BKXk6xC1FBEGK7DnRMnJ%2FVitup1HiRmKpu7ZyPo3NoMb5LRGQf0zujBhLpz%2FivYVSKUtQHWR%2BuMatEOuVzTyW%2FICKVj4IvCsADEkmh8i%2BJfsFOA9gnpwhLYAu8u4DDo07euvBTOfAZkR4twfa%2BbF2YiRs4CtLO9fIPMH84Z2XSodtYuSqM2kIRVjUvjCz%2BtjkR4rSv7xBnG5CBCcS0%2F4LHywDzM4QHdi%2FqfB5lkqu9Zc8UGs1lB3RCWBEWchqiv%2Fw%2FzyGqDPvvSajnXb3DQba1Loo6AjLGJBzRAt9ZK3ObRdiAfuyIxoII00%2FcR6xA0S%2BlzipGEd9AughSFtoaDFG%2Flyu%2BvY8FbPQB8dmR7LVPBN79VYQd6GNmiQ9B7lnBLDinZ1ws07ZyBXFyDtkVYfxitZNVWco3FF68FcJXD6cxYzN7hpMMvHz8AGOqUBmdGS0%2BcwoW0nazKwGyhz9skhYOHhYpYR0kiDr%2BlZ7S7%2BRzPqjZ%2B%2BxuctDNPQp7ICpbth9OpOvWqm1XszZPDPIP6vz3tMOPgv%2B3SXpGyAUsmg9sWYA8Mvza%2FuwW7o99jn0xJvmRUD20m8LWBFv8i4a6oKkuV1cEh5opVX81D0CllCQ1B9lqBI9t6sPPjRgVOEdvBXTNJVv%2FBZ1EG1JxBk383UVHYR&X-Amz-Signature=106ea3ce5d86ff69004fe4ca2b88d2688b417d6aceee136a9d1697c46e9d48f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ILPUWN3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDBUUeA7RfacoVcm5QKVAbegT5zAtN0xmumr3IYcB2OkgIgUvIdQomy5rL8T0cAcmABW4kVa3ZtJnoVleBTz6hO9CYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwQTGxMwLtneL%2FXACrcA4%2Bb%2B5iKfaUoGNfWOTJhQgxCiFEXtZDv99kf3bVqTpWFjf%2FJTakFg%2F83RO4q%2BCG2aaA148moygPcVVykVb2r9z5w7w7bSrZuq1JlPGpJd0U7IO0SsgTwAe02e0lObACS8DW8pmsRMNGNeA5q76GMmMPo9ifXW%2FZVBulmBf47ZEqK1HAoopDOXieIsjZmbmL%2F5lepxEjRMH3%2F%2BKXk6xC1FBEGK7DnRMnJ%2FVitup1HiRmKpu7ZyPo3NoMb5LRGQf0zujBhLpz%2FivYVSKUtQHWR%2BuMatEOuVzTyW%2FICKVj4IvCsADEkmh8i%2BJfsFOA9gnpwhLYAu8u4DDo07euvBTOfAZkR4twfa%2BbF2YiRs4CtLO9fIPMH84Z2XSodtYuSqM2kIRVjUvjCz%2BtjkR4rSv7xBnG5CBCcS0%2F4LHywDzM4QHdi%2FqfB5lkqu9Zc8UGs1lB3RCWBEWchqiv%2Fw%2FzyGqDPvvSajnXb3DQba1Loo6AjLGJBzRAt9ZK3ObRdiAfuyIxoII00%2FcR6xA0S%2BlzipGEd9AughSFtoaDFG%2Flyu%2BvY8FbPQB8dmR7LVPBN79VYQd6GNmiQ9B7lnBLDinZ1ws07ZyBXFyDtkVYfxitZNVWco3FF68FcJXD6cxYzN7hpMMvHz8AGOqUBmdGS0%2BcwoW0nazKwGyhz9skhYOHhYpYR0kiDr%2BlZ7S7%2BRzPqjZ%2B%2BxuctDNPQp7ICpbth9OpOvWqm1XszZPDPIP6vz3tMOPgv%2B3SXpGyAUsmg9sWYA8Mvza%2FuwW7o99jn0xJvmRUD20m8LWBFv8i4a6oKkuV1cEh5opVX81D0CllCQ1B9lqBI9t6sPPjRgVOEdvBXTNJVv%2FBZ1EG1JxBk383UVHYR&X-Amz-Signature=0acbe4d1c48a11b255f081872bc931978a2f62ba44f0503f63ae524cd8f7491b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ILPUWN3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDBUUeA7RfacoVcm5QKVAbegT5zAtN0xmumr3IYcB2OkgIgUvIdQomy5rL8T0cAcmABW4kVa3ZtJnoVleBTz6hO9CYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwQTGxMwLtneL%2FXACrcA4%2Bb%2B5iKfaUoGNfWOTJhQgxCiFEXtZDv99kf3bVqTpWFjf%2FJTakFg%2F83RO4q%2BCG2aaA148moygPcVVykVb2r9z5w7w7bSrZuq1JlPGpJd0U7IO0SsgTwAe02e0lObACS8DW8pmsRMNGNeA5q76GMmMPo9ifXW%2FZVBulmBf47ZEqK1HAoopDOXieIsjZmbmL%2F5lepxEjRMH3%2F%2BKXk6xC1FBEGK7DnRMnJ%2FVitup1HiRmKpu7ZyPo3NoMb5LRGQf0zujBhLpz%2FivYVSKUtQHWR%2BuMatEOuVzTyW%2FICKVj4IvCsADEkmh8i%2BJfsFOA9gnpwhLYAu8u4DDo07euvBTOfAZkR4twfa%2BbF2YiRs4CtLO9fIPMH84Z2XSodtYuSqM2kIRVjUvjCz%2BtjkR4rSv7xBnG5CBCcS0%2F4LHywDzM4QHdi%2FqfB5lkqu9Zc8UGs1lB3RCWBEWchqiv%2Fw%2FzyGqDPvvSajnXb3DQba1Loo6AjLGJBzRAt9ZK3ObRdiAfuyIxoII00%2FcR6xA0S%2BlzipGEd9AughSFtoaDFG%2Flyu%2BvY8FbPQB8dmR7LVPBN79VYQd6GNmiQ9B7lnBLDinZ1ws07ZyBXFyDtkVYfxitZNVWco3FF68FcJXD6cxYzN7hpMMvHz8AGOqUBmdGS0%2BcwoW0nazKwGyhz9skhYOHhYpYR0kiDr%2BlZ7S7%2BRzPqjZ%2B%2BxuctDNPQp7ICpbth9OpOvWqm1XszZPDPIP6vz3tMOPgv%2B3SXpGyAUsmg9sWYA8Mvza%2FuwW7o99jn0xJvmRUD20m8LWBFv8i4a6oKkuV1cEh5opVX81D0CllCQ1B9lqBI9t6sPPjRgVOEdvBXTNJVv%2FBZ1EG1JxBk383UVHYR&X-Amz-Signature=7956924aed58cfffb00564925ceed0f8444d191a649dd0b3ce97f7d3730ece32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ILPUWN3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDBUUeA7RfacoVcm5QKVAbegT5zAtN0xmumr3IYcB2OkgIgUvIdQomy5rL8T0cAcmABW4kVa3ZtJnoVleBTz6hO9CYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwQTGxMwLtneL%2FXACrcA4%2Bb%2B5iKfaUoGNfWOTJhQgxCiFEXtZDv99kf3bVqTpWFjf%2FJTakFg%2F83RO4q%2BCG2aaA148moygPcVVykVb2r9z5w7w7bSrZuq1JlPGpJd0U7IO0SsgTwAe02e0lObACS8DW8pmsRMNGNeA5q76GMmMPo9ifXW%2FZVBulmBf47ZEqK1HAoopDOXieIsjZmbmL%2F5lepxEjRMH3%2F%2BKXk6xC1FBEGK7DnRMnJ%2FVitup1HiRmKpu7ZyPo3NoMb5LRGQf0zujBhLpz%2FivYVSKUtQHWR%2BuMatEOuVzTyW%2FICKVj4IvCsADEkmh8i%2BJfsFOA9gnpwhLYAu8u4DDo07euvBTOfAZkR4twfa%2BbF2YiRs4CtLO9fIPMH84Z2XSodtYuSqM2kIRVjUvjCz%2BtjkR4rSv7xBnG5CBCcS0%2F4LHywDzM4QHdi%2FqfB5lkqu9Zc8UGs1lB3RCWBEWchqiv%2Fw%2FzyGqDPvvSajnXb3DQba1Loo6AjLGJBzRAt9ZK3ObRdiAfuyIxoII00%2FcR6xA0S%2BlzipGEd9AughSFtoaDFG%2Flyu%2BvY8FbPQB8dmR7LVPBN79VYQd6GNmiQ9B7lnBLDinZ1ws07ZyBXFyDtkVYfxitZNVWco3FF68FcJXD6cxYzN7hpMMvHz8AGOqUBmdGS0%2BcwoW0nazKwGyhz9skhYOHhYpYR0kiDr%2BlZ7S7%2BRzPqjZ%2B%2BxuctDNPQp7ICpbth9OpOvWqm1XszZPDPIP6vz3tMOPgv%2B3SXpGyAUsmg9sWYA8Mvza%2FuwW7o99jn0xJvmRUD20m8LWBFv8i4a6oKkuV1cEh5opVX81D0CllCQ1B9lqBI9t6sPPjRgVOEdvBXTNJVv%2FBZ1EG1JxBk383UVHYR&X-Amz-Signature=0e1ba125e651b00a0556a3626ce9b137817aeec1b2094fbafb1b322284fbe87e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
