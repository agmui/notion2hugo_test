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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLFNHEW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDBikEvpvNU%2BU2O%2BGJmluF8TQBegkcFrSLsJuU%2FHaYZSAIgB52kKb9%2Fk9PbVgp9RWdWnmjLleJ0ulSjB3a51EHr%2FxQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1id7183AsF9PhuyircA9QQ6nYz0RmZ1XAEcwtJWwMbLzXeMX2RIzuuTcA%2Bp%2FghhFhyAusfW68uxeF33n5r3UH%2Bk%2BdlNjahtizvKSsYnRyMCGy5udoyjQ7nLMStOmhmUcdQrJ%2FX6VDWYs6wN5jxBBxJ6PzG8laZkgl3%2BdWSvcfr2IbtwlI4f%2Fn00CcmG8leovfUdj0ldgsS6VQWgSGOqYJp6wtbepowsBbRNFpZDfylOompX75sbHYxinDpGJ%2FpofRyEtUM8CVVzbQgBhtwkBjNSOGyxk%2Fo%2Bk3h9CF0Rc9eabvzwsqf0C5wpWdlV7gii6nFHOJYrJcV%2FGG2T7bU7IWMk%2BhJ1%2FVQRsSwlYgDo4qVUk62pmgRfT8WtulVewX9i1JA03T%2Bi4VWaseVwCDCyyTkKSJhXJvPZZBk6X9D9H7rJJxEDiW14ihSo%2F5SGJbwYpCo95vqjU3VhARrJ5XB6EExKmHzZbbBYWAdqBXzgfbn7my77HZ9AwarDAr6SUFetAgPQxSjmJriL2kMe7hgx2aUBYbvJ9K0G629Zd1x13LsaIi48t5sXs7w41ji5dMFwnLn1t5iA8caCMbPnqFZ0f%2BThtmATIVaNebUQqroTvzjP9erucGixW1jiCXJo6hfXcfi8pNraj89Mw7JMN%2Fz3b8GOqUBSdrMnjXJHOwDLFH8GvrUbLNEeCWC4JGxcG00d2hoEKosaSgF0LbbvO2lzYPh1WhVRRlEe0ykCNouwoUu87sGnP6%2FelZftlzECS81Ca53whLpUzXiTewhDLjAwakaqy7xXO%2Bmf4KodiYjO4658IFe2kKlKX9lSzoiQZnzVh0wZuzWHJ7a%2F%2Bc7X3VzlA8hxR8VNnpVJ1A1U8mouibJH7QuSqvyx8mT&X-Amz-Signature=ef0430b53af1f67a7fd917faae0396e6ee02c1f01ee5a427f7633d5cb9a1d78a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLFNHEW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDBikEvpvNU%2BU2O%2BGJmluF8TQBegkcFrSLsJuU%2FHaYZSAIgB52kKb9%2Fk9PbVgp9RWdWnmjLleJ0ulSjB3a51EHr%2FxQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1id7183AsF9PhuyircA9QQ6nYz0RmZ1XAEcwtJWwMbLzXeMX2RIzuuTcA%2Bp%2FghhFhyAusfW68uxeF33n5r3UH%2Bk%2BdlNjahtizvKSsYnRyMCGy5udoyjQ7nLMStOmhmUcdQrJ%2FX6VDWYs6wN5jxBBxJ6PzG8laZkgl3%2BdWSvcfr2IbtwlI4f%2Fn00CcmG8leovfUdj0ldgsS6VQWgSGOqYJp6wtbepowsBbRNFpZDfylOompX75sbHYxinDpGJ%2FpofRyEtUM8CVVzbQgBhtwkBjNSOGyxk%2Fo%2Bk3h9CF0Rc9eabvzwsqf0C5wpWdlV7gii6nFHOJYrJcV%2FGG2T7bU7IWMk%2BhJ1%2FVQRsSwlYgDo4qVUk62pmgRfT8WtulVewX9i1JA03T%2Bi4VWaseVwCDCyyTkKSJhXJvPZZBk6X9D9H7rJJxEDiW14ihSo%2F5SGJbwYpCo95vqjU3VhARrJ5XB6EExKmHzZbbBYWAdqBXzgfbn7my77HZ9AwarDAr6SUFetAgPQxSjmJriL2kMe7hgx2aUBYbvJ9K0G629Zd1x13LsaIi48t5sXs7w41ji5dMFwnLn1t5iA8caCMbPnqFZ0f%2BThtmATIVaNebUQqroTvzjP9erucGixW1jiCXJo6hfXcfi8pNraj89Mw7JMN%2Fz3b8GOqUBSdrMnjXJHOwDLFH8GvrUbLNEeCWC4JGxcG00d2hoEKosaSgF0LbbvO2lzYPh1WhVRRlEe0ykCNouwoUu87sGnP6%2FelZftlzECS81Ca53whLpUzXiTewhDLjAwakaqy7xXO%2Bmf4KodiYjO4658IFe2kKlKX9lSzoiQZnzVh0wZuzWHJ7a%2F%2Bc7X3VzlA8hxR8VNnpVJ1A1U8mouibJH7QuSqvyx8mT&X-Amz-Signature=5b7fbf9c6750a6fd8d6413078b235137c38cfc7a5b6aa3c355176ca5a7f4cd3f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLFNHEW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDBikEvpvNU%2BU2O%2BGJmluF8TQBegkcFrSLsJuU%2FHaYZSAIgB52kKb9%2Fk9PbVgp9RWdWnmjLleJ0ulSjB3a51EHr%2FxQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1id7183AsF9PhuyircA9QQ6nYz0RmZ1XAEcwtJWwMbLzXeMX2RIzuuTcA%2Bp%2FghhFhyAusfW68uxeF33n5r3UH%2Bk%2BdlNjahtizvKSsYnRyMCGy5udoyjQ7nLMStOmhmUcdQrJ%2FX6VDWYs6wN5jxBBxJ6PzG8laZkgl3%2BdWSvcfr2IbtwlI4f%2Fn00CcmG8leovfUdj0ldgsS6VQWgSGOqYJp6wtbepowsBbRNFpZDfylOompX75sbHYxinDpGJ%2FpofRyEtUM8CVVzbQgBhtwkBjNSOGyxk%2Fo%2Bk3h9CF0Rc9eabvzwsqf0C5wpWdlV7gii6nFHOJYrJcV%2FGG2T7bU7IWMk%2BhJ1%2FVQRsSwlYgDo4qVUk62pmgRfT8WtulVewX9i1JA03T%2Bi4VWaseVwCDCyyTkKSJhXJvPZZBk6X9D9H7rJJxEDiW14ihSo%2F5SGJbwYpCo95vqjU3VhARrJ5XB6EExKmHzZbbBYWAdqBXzgfbn7my77HZ9AwarDAr6SUFetAgPQxSjmJriL2kMe7hgx2aUBYbvJ9K0G629Zd1x13LsaIi48t5sXs7w41ji5dMFwnLn1t5iA8caCMbPnqFZ0f%2BThtmATIVaNebUQqroTvzjP9erucGixW1jiCXJo6hfXcfi8pNraj89Mw7JMN%2Fz3b8GOqUBSdrMnjXJHOwDLFH8GvrUbLNEeCWC4JGxcG00d2hoEKosaSgF0LbbvO2lzYPh1WhVRRlEe0ykCNouwoUu87sGnP6%2FelZftlzECS81Ca53whLpUzXiTewhDLjAwakaqy7xXO%2Bmf4KodiYjO4658IFe2kKlKX9lSzoiQZnzVh0wZuzWHJ7a%2F%2Bc7X3VzlA8hxR8VNnpVJ1A1U8mouibJH7QuSqvyx8mT&X-Amz-Signature=f43646a6d5796cd1e20328c5152dd3e177dac4abc395e524cc3cb32ee17a4493&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLFNHEW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDBikEvpvNU%2BU2O%2BGJmluF8TQBegkcFrSLsJuU%2FHaYZSAIgB52kKb9%2Fk9PbVgp9RWdWnmjLleJ0ulSjB3a51EHr%2FxQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1id7183AsF9PhuyircA9QQ6nYz0RmZ1XAEcwtJWwMbLzXeMX2RIzuuTcA%2Bp%2FghhFhyAusfW68uxeF33n5r3UH%2Bk%2BdlNjahtizvKSsYnRyMCGy5udoyjQ7nLMStOmhmUcdQrJ%2FX6VDWYs6wN5jxBBxJ6PzG8laZkgl3%2BdWSvcfr2IbtwlI4f%2Fn00CcmG8leovfUdj0ldgsS6VQWgSGOqYJp6wtbepowsBbRNFpZDfylOompX75sbHYxinDpGJ%2FpofRyEtUM8CVVzbQgBhtwkBjNSOGyxk%2Fo%2Bk3h9CF0Rc9eabvzwsqf0C5wpWdlV7gii6nFHOJYrJcV%2FGG2T7bU7IWMk%2BhJ1%2FVQRsSwlYgDo4qVUk62pmgRfT8WtulVewX9i1JA03T%2Bi4VWaseVwCDCyyTkKSJhXJvPZZBk6X9D9H7rJJxEDiW14ihSo%2F5SGJbwYpCo95vqjU3VhARrJ5XB6EExKmHzZbbBYWAdqBXzgfbn7my77HZ9AwarDAr6SUFetAgPQxSjmJriL2kMe7hgx2aUBYbvJ9K0G629Zd1x13LsaIi48t5sXs7w41ji5dMFwnLn1t5iA8caCMbPnqFZ0f%2BThtmATIVaNebUQqroTvzjP9erucGixW1jiCXJo6hfXcfi8pNraj89Mw7JMN%2Fz3b8GOqUBSdrMnjXJHOwDLFH8GvrUbLNEeCWC4JGxcG00d2hoEKosaSgF0LbbvO2lzYPh1WhVRRlEe0ykCNouwoUu87sGnP6%2FelZftlzECS81Ca53whLpUzXiTewhDLjAwakaqy7xXO%2Bmf4KodiYjO4658IFe2kKlKX9lSzoiQZnzVh0wZuzWHJ7a%2F%2Bc7X3VzlA8hxR8VNnpVJ1A1U8mouibJH7QuSqvyx8mT&X-Amz-Signature=3a01fb148df2ef855cb810955296c5aef1d5ef415f3c4737e76eee88dde2e535&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLFNHEW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDBikEvpvNU%2BU2O%2BGJmluF8TQBegkcFrSLsJuU%2FHaYZSAIgB52kKb9%2Fk9PbVgp9RWdWnmjLleJ0ulSjB3a51EHr%2FxQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1id7183AsF9PhuyircA9QQ6nYz0RmZ1XAEcwtJWwMbLzXeMX2RIzuuTcA%2Bp%2FghhFhyAusfW68uxeF33n5r3UH%2Bk%2BdlNjahtizvKSsYnRyMCGy5udoyjQ7nLMStOmhmUcdQrJ%2FX6VDWYs6wN5jxBBxJ6PzG8laZkgl3%2BdWSvcfr2IbtwlI4f%2Fn00CcmG8leovfUdj0ldgsS6VQWgSGOqYJp6wtbepowsBbRNFpZDfylOompX75sbHYxinDpGJ%2FpofRyEtUM8CVVzbQgBhtwkBjNSOGyxk%2Fo%2Bk3h9CF0Rc9eabvzwsqf0C5wpWdlV7gii6nFHOJYrJcV%2FGG2T7bU7IWMk%2BhJ1%2FVQRsSwlYgDo4qVUk62pmgRfT8WtulVewX9i1JA03T%2Bi4VWaseVwCDCyyTkKSJhXJvPZZBk6X9D9H7rJJxEDiW14ihSo%2F5SGJbwYpCo95vqjU3VhARrJ5XB6EExKmHzZbbBYWAdqBXzgfbn7my77HZ9AwarDAr6SUFetAgPQxSjmJriL2kMe7hgx2aUBYbvJ9K0G629Zd1x13LsaIi48t5sXs7w41ji5dMFwnLn1t5iA8caCMbPnqFZ0f%2BThtmATIVaNebUQqroTvzjP9erucGixW1jiCXJo6hfXcfi8pNraj89Mw7JMN%2Fz3b8GOqUBSdrMnjXJHOwDLFH8GvrUbLNEeCWC4JGxcG00d2hoEKosaSgF0LbbvO2lzYPh1WhVRRlEe0ykCNouwoUu87sGnP6%2FelZftlzECS81Ca53whLpUzXiTewhDLjAwakaqy7xXO%2Bmf4KodiYjO4658IFe2kKlKX9lSzoiQZnzVh0wZuzWHJ7a%2F%2Bc7X3VzlA8hxR8VNnpVJ1A1U8mouibJH7QuSqvyx8mT&X-Amz-Signature=f7cf994a20e2213df1e866ac299147e7e865df9a654f9b31e50e348257e88137&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLFNHEW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDBikEvpvNU%2BU2O%2BGJmluF8TQBegkcFrSLsJuU%2FHaYZSAIgB52kKb9%2Fk9PbVgp9RWdWnmjLleJ0ulSjB3a51EHr%2FxQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1id7183AsF9PhuyircA9QQ6nYz0RmZ1XAEcwtJWwMbLzXeMX2RIzuuTcA%2Bp%2FghhFhyAusfW68uxeF33n5r3UH%2Bk%2BdlNjahtizvKSsYnRyMCGy5udoyjQ7nLMStOmhmUcdQrJ%2FX6VDWYs6wN5jxBBxJ6PzG8laZkgl3%2BdWSvcfr2IbtwlI4f%2Fn00CcmG8leovfUdj0ldgsS6VQWgSGOqYJp6wtbepowsBbRNFpZDfylOompX75sbHYxinDpGJ%2FpofRyEtUM8CVVzbQgBhtwkBjNSOGyxk%2Fo%2Bk3h9CF0Rc9eabvzwsqf0C5wpWdlV7gii6nFHOJYrJcV%2FGG2T7bU7IWMk%2BhJ1%2FVQRsSwlYgDo4qVUk62pmgRfT8WtulVewX9i1JA03T%2Bi4VWaseVwCDCyyTkKSJhXJvPZZBk6X9D9H7rJJxEDiW14ihSo%2F5SGJbwYpCo95vqjU3VhARrJ5XB6EExKmHzZbbBYWAdqBXzgfbn7my77HZ9AwarDAr6SUFetAgPQxSjmJriL2kMe7hgx2aUBYbvJ9K0G629Zd1x13LsaIi48t5sXs7w41ji5dMFwnLn1t5iA8caCMbPnqFZ0f%2BThtmATIVaNebUQqroTvzjP9erucGixW1jiCXJo6hfXcfi8pNraj89Mw7JMN%2Fz3b8GOqUBSdrMnjXJHOwDLFH8GvrUbLNEeCWC4JGxcG00d2hoEKosaSgF0LbbvO2lzYPh1WhVRRlEe0ykCNouwoUu87sGnP6%2FelZftlzECS81Ca53whLpUzXiTewhDLjAwakaqy7xXO%2Bmf4KodiYjO4658IFe2kKlKX9lSzoiQZnzVh0wZuzWHJ7a%2F%2Bc7X3VzlA8hxR8VNnpVJ1A1U8mouibJH7QuSqvyx8mT&X-Amz-Signature=6954001cfafcb922a33eaeac3179d9ccdde699f67060f07462228de1f07fff01&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLFNHEW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDBikEvpvNU%2BU2O%2BGJmluF8TQBegkcFrSLsJuU%2FHaYZSAIgB52kKb9%2Fk9PbVgp9RWdWnmjLleJ0ulSjB3a51EHr%2FxQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1id7183AsF9PhuyircA9QQ6nYz0RmZ1XAEcwtJWwMbLzXeMX2RIzuuTcA%2Bp%2FghhFhyAusfW68uxeF33n5r3UH%2Bk%2BdlNjahtizvKSsYnRyMCGy5udoyjQ7nLMStOmhmUcdQrJ%2FX6VDWYs6wN5jxBBxJ6PzG8laZkgl3%2BdWSvcfr2IbtwlI4f%2Fn00CcmG8leovfUdj0ldgsS6VQWgSGOqYJp6wtbepowsBbRNFpZDfylOompX75sbHYxinDpGJ%2FpofRyEtUM8CVVzbQgBhtwkBjNSOGyxk%2Fo%2Bk3h9CF0Rc9eabvzwsqf0C5wpWdlV7gii6nFHOJYrJcV%2FGG2T7bU7IWMk%2BhJ1%2FVQRsSwlYgDo4qVUk62pmgRfT8WtulVewX9i1JA03T%2Bi4VWaseVwCDCyyTkKSJhXJvPZZBk6X9D9H7rJJxEDiW14ihSo%2F5SGJbwYpCo95vqjU3VhARrJ5XB6EExKmHzZbbBYWAdqBXzgfbn7my77HZ9AwarDAr6SUFetAgPQxSjmJriL2kMe7hgx2aUBYbvJ9K0G629Zd1x13LsaIi48t5sXs7w41ji5dMFwnLn1t5iA8caCMbPnqFZ0f%2BThtmATIVaNebUQqroTvzjP9erucGixW1jiCXJo6hfXcfi8pNraj89Mw7JMN%2Fz3b8GOqUBSdrMnjXJHOwDLFH8GvrUbLNEeCWC4JGxcG00d2hoEKosaSgF0LbbvO2lzYPh1WhVRRlEe0ykCNouwoUu87sGnP6%2FelZftlzECS81Ca53whLpUzXiTewhDLjAwakaqy7xXO%2Bmf4KodiYjO4658IFe2kKlKX9lSzoiQZnzVh0wZuzWHJ7a%2F%2Bc7X3VzlA8hxR8VNnpVJ1A1U8mouibJH7QuSqvyx8mT&X-Amz-Signature=fea77803cff557477bad2ace4c699e8e211fbde88573b0f3c060adbaadf0058f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLFNHEW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDBikEvpvNU%2BU2O%2BGJmluF8TQBegkcFrSLsJuU%2FHaYZSAIgB52kKb9%2Fk9PbVgp9RWdWnmjLleJ0ulSjB3a51EHr%2FxQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1id7183AsF9PhuyircA9QQ6nYz0RmZ1XAEcwtJWwMbLzXeMX2RIzuuTcA%2Bp%2FghhFhyAusfW68uxeF33n5r3UH%2Bk%2BdlNjahtizvKSsYnRyMCGy5udoyjQ7nLMStOmhmUcdQrJ%2FX6VDWYs6wN5jxBBxJ6PzG8laZkgl3%2BdWSvcfr2IbtwlI4f%2Fn00CcmG8leovfUdj0ldgsS6VQWgSGOqYJp6wtbepowsBbRNFpZDfylOompX75sbHYxinDpGJ%2FpofRyEtUM8CVVzbQgBhtwkBjNSOGyxk%2Fo%2Bk3h9CF0Rc9eabvzwsqf0C5wpWdlV7gii6nFHOJYrJcV%2FGG2T7bU7IWMk%2BhJ1%2FVQRsSwlYgDo4qVUk62pmgRfT8WtulVewX9i1JA03T%2Bi4VWaseVwCDCyyTkKSJhXJvPZZBk6X9D9H7rJJxEDiW14ihSo%2F5SGJbwYpCo95vqjU3VhARrJ5XB6EExKmHzZbbBYWAdqBXzgfbn7my77HZ9AwarDAr6SUFetAgPQxSjmJriL2kMe7hgx2aUBYbvJ9K0G629Zd1x13LsaIi48t5sXs7w41ji5dMFwnLn1t5iA8caCMbPnqFZ0f%2BThtmATIVaNebUQqroTvzjP9erucGixW1jiCXJo6hfXcfi8pNraj89Mw7JMN%2Fz3b8GOqUBSdrMnjXJHOwDLFH8GvrUbLNEeCWC4JGxcG00d2hoEKosaSgF0LbbvO2lzYPh1WhVRRlEe0ykCNouwoUu87sGnP6%2FelZftlzECS81Ca53whLpUzXiTewhDLjAwakaqy7xXO%2Bmf4KodiYjO4658IFe2kKlKX9lSzoiQZnzVh0wZuzWHJ7a%2F%2Bc7X3VzlA8hxR8VNnpVJ1A1U8mouibJH7QuSqvyx8mT&X-Amz-Signature=1266d1e62cd5712dc9a13f203cf3df4f87ee455778e833e99f9c88dc1fdc8310&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
