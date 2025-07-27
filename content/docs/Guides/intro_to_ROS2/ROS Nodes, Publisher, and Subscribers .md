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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZIZLHNY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGNYSIxcSWDUx0SQtoD9IvXpIn41ef4L5rEe14JXflB3AiB9aTKwkc3H3d4hHoN5wdh2l%2FMwB0LbY65kvvWyhOxiZCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMTsfY8V20b7R%2BHSfeKtwDau8nuMql4cfF8ZC0%2Bxl4wwy5QAijEr44fqVGnCn%2Bk17I7Odp3ILiOvo5kYZJPTT7wSQprWSt9oQ6t%2BkBve2gCeBib%2B1tVLPVSFiGfLf%2FmqrI5XUcKAdzpaDGJH6RbAWYjx9b4zXcltNTjHuTh4ACvVwuTaMAeaFBZv9FlVW%2BhZ4lhLYH0kmTBwzveCc3JhTPzQrmHxpGQ5s6zY1V0WmWA%2BNrPyFef2sgVGBmVz1ydqp2cqmagFRi%2BtcpvZ6DoLotyHbRZuU%2FXfjEgYXOvkzAoMw617a1TQ7LcMAp7EybaxDq%2BMJun%2BRRqgik6g32cLEaf2EkQU%2BrvochomjQFLJAJTOjfmadjBgqma%2FqtotoCKIe3riPZKtBGhE%2FRcuXea532fY16gG%2FIdhXHPUkwv%2B4fOwzlzDRgzFpPL9doUtWal4xw1GyFIBQrgH312d6RPR9xCvsFjosx%2BUieOij8RE%2FH9CTSy5Ez8hAGYD80Bphgn8dzeCEuGctBagZ0cZIpMuuGG%2FOMosZDELpeE3qWL%2Bb2tUg2uIfwozchWbfspW%2FQ4aW%2Bk2763g0lYW6IB2EYU6ecL54DYfq0sHa8OhBd6yO8sezw5twJN%2FWW7bwOxtDu0bh3E30eaVOl8ht%2BSkwx7qWxAY6pgF0OmQcPkSwXrUOFh7vKolRaVLiS6ufX7l9bV8zzGO77YvDnZPaudKWxjt1LG28ORWesPMBxiqQ8O3KO9F4tKDMDE0kEVNx84vBmkAwYTy2whX0KOPEulK9tlwUcK76J%2F3CVFsELZS4N4smkwKsvbJj%2FEJELWaeS%2FEFhpRhvLUxg5Io%2BzkQNoDCowsGxvddYe4cijiK9dKiwWH3km3XLaXs%2FKo4QbbN&X-Amz-Signature=53e0e8d0c008c875f9fc44f078ffcd3750781da19ca2688e237f3d715bff03ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZIZLHNY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGNYSIxcSWDUx0SQtoD9IvXpIn41ef4L5rEe14JXflB3AiB9aTKwkc3H3d4hHoN5wdh2l%2FMwB0LbY65kvvWyhOxiZCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMTsfY8V20b7R%2BHSfeKtwDau8nuMql4cfF8ZC0%2Bxl4wwy5QAijEr44fqVGnCn%2Bk17I7Odp3ILiOvo5kYZJPTT7wSQprWSt9oQ6t%2BkBve2gCeBib%2B1tVLPVSFiGfLf%2FmqrI5XUcKAdzpaDGJH6RbAWYjx9b4zXcltNTjHuTh4ACvVwuTaMAeaFBZv9FlVW%2BhZ4lhLYH0kmTBwzveCc3JhTPzQrmHxpGQ5s6zY1V0WmWA%2BNrPyFef2sgVGBmVz1ydqp2cqmagFRi%2BtcpvZ6DoLotyHbRZuU%2FXfjEgYXOvkzAoMw617a1TQ7LcMAp7EybaxDq%2BMJun%2BRRqgik6g32cLEaf2EkQU%2BrvochomjQFLJAJTOjfmadjBgqma%2FqtotoCKIe3riPZKtBGhE%2FRcuXea532fY16gG%2FIdhXHPUkwv%2B4fOwzlzDRgzFpPL9doUtWal4xw1GyFIBQrgH312d6RPR9xCvsFjosx%2BUieOij8RE%2FH9CTSy5Ez8hAGYD80Bphgn8dzeCEuGctBagZ0cZIpMuuGG%2FOMosZDELpeE3qWL%2Bb2tUg2uIfwozchWbfspW%2FQ4aW%2Bk2763g0lYW6IB2EYU6ecL54DYfq0sHa8OhBd6yO8sezw5twJN%2FWW7bwOxtDu0bh3E30eaVOl8ht%2BSkwx7qWxAY6pgF0OmQcPkSwXrUOFh7vKolRaVLiS6ufX7l9bV8zzGO77YvDnZPaudKWxjt1LG28ORWesPMBxiqQ8O3KO9F4tKDMDE0kEVNx84vBmkAwYTy2whX0KOPEulK9tlwUcK76J%2F3CVFsELZS4N4smkwKsvbJj%2FEJELWaeS%2FEFhpRhvLUxg5Io%2BzkQNoDCowsGxvddYe4cijiK9dKiwWH3km3XLaXs%2FKo4QbbN&X-Amz-Signature=40a92cce684faff4487e754e070a93b644b4598de82e68e6f6981bf318498f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZIZLHNY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGNYSIxcSWDUx0SQtoD9IvXpIn41ef4L5rEe14JXflB3AiB9aTKwkc3H3d4hHoN5wdh2l%2FMwB0LbY65kvvWyhOxiZCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMTsfY8V20b7R%2BHSfeKtwDau8nuMql4cfF8ZC0%2Bxl4wwy5QAijEr44fqVGnCn%2Bk17I7Odp3ILiOvo5kYZJPTT7wSQprWSt9oQ6t%2BkBve2gCeBib%2B1tVLPVSFiGfLf%2FmqrI5XUcKAdzpaDGJH6RbAWYjx9b4zXcltNTjHuTh4ACvVwuTaMAeaFBZv9FlVW%2BhZ4lhLYH0kmTBwzveCc3JhTPzQrmHxpGQ5s6zY1V0WmWA%2BNrPyFef2sgVGBmVz1ydqp2cqmagFRi%2BtcpvZ6DoLotyHbRZuU%2FXfjEgYXOvkzAoMw617a1TQ7LcMAp7EybaxDq%2BMJun%2BRRqgik6g32cLEaf2EkQU%2BrvochomjQFLJAJTOjfmadjBgqma%2FqtotoCKIe3riPZKtBGhE%2FRcuXea532fY16gG%2FIdhXHPUkwv%2B4fOwzlzDRgzFpPL9doUtWal4xw1GyFIBQrgH312d6RPR9xCvsFjosx%2BUieOij8RE%2FH9CTSy5Ez8hAGYD80Bphgn8dzeCEuGctBagZ0cZIpMuuGG%2FOMosZDELpeE3qWL%2Bb2tUg2uIfwozchWbfspW%2FQ4aW%2Bk2763g0lYW6IB2EYU6ecL54DYfq0sHa8OhBd6yO8sezw5twJN%2FWW7bwOxtDu0bh3E30eaVOl8ht%2BSkwx7qWxAY6pgF0OmQcPkSwXrUOFh7vKolRaVLiS6ufX7l9bV8zzGO77YvDnZPaudKWxjt1LG28ORWesPMBxiqQ8O3KO9F4tKDMDE0kEVNx84vBmkAwYTy2whX0KOPEulK9tlwUcK76J%2F3CVFsELZS4N4smkwKsvbJj%2FEJELWaeS%2FEFhpRhvLUxg5Io%2BzkQNoDCowsGxvddYe4cijiK9dKiwWH3km3XLaXs%2FKo4QbbN&X-Amz-Signature=06ef19dab36b4f1148ce83707cd3d1d2ebc9ecc576c57066ab3315a5544c2bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZIZLHNY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGNYSIxcSWDUx0SQtoD9IvXpIn41ef4L5rEe14JXflB3AiB9aTKwkc3H3d4hHoN5wdh2l%2FMwB0LbY65kvvWyhOxiZCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMTsfY8V20b7R%2BHSfeKtwDau8nuMql4cfF8ZC0%2Bxl4wwy5QAijEr44fqVGnCn%2Bk17I7Odp3ILiOvo5kYZJPTT7wSQprWSt9oQ6t%2BkBve2gCeBib%2B1tVLPVSFiGfLf%2FmqrI5XUcKAdzpaDGJH6RbAWYjx9b4zXcltNTjHuTh4ACvVwuTaMAeaFBZv9FlVW%2BhZ4lhLYH0kmTBwzveCc3JhTPzQrmHxpGQ5s6zY1V0WmWA%2BNrPyFef2sgVGBmVz1ydqp2cqmagFRi%2BtcpvZ6DoLotyHbRZuU%2FXfjEgYXOvkzAoMw617a1TQ7LcMAp7EybaxDq%2BMJun%2BRRqgik6g32cLEaf2EkQU%2BrvochomjQFLJAJTOjfmadjBgqma%2FqtotoCKIe3riPZKtBGhE%2FRcuXea532fY16gG%2FIdhXHPUkwv%2B4fOwzlzDRgzFpPL9doUtWal4xw1GyFIBQrgH312d6RPR9xCvsFjosx%2BUieOij8RE%2FH9CTSy5Ez8hAGYD80Bphgn8dzeCEuGctBagZ0cZIpMuuGG%2FOMosZDELpeE3qWL%2Bb2tUg2uIfwozchWbfspW%2FQ4aW%2Bk2763g0lYW6IB2EYU6ecL54DYfq0sHa8OhBd6yO8sezw5twJN%2FWW7bwOxtDu0bh3E30eaVOl8ht%2BSkwx7qWxAY6pgF0OmQcPkSwXrUOFh7vKolRaVLiS6ufX7l9bV8zzGO77YvDnZPaudKWxjt1LG28ORWesPMBxiqQ8O3KO9F4tKDMDE0kEVNx84vBmkAwYTy2whX0KOPEulK9tlwUcK76J%2F3CVFsELZS4N4smkwKsvbJj%2FEJELWaeS%2FEFhpRhvLUxg5Io%2BzkQNoDCowsGxvddYe4cijiK9dKiwWH3km3XLaXs%2FKo4QbbN&X-Amz-Signature=0c0bc75f415c1da0acd073e5df9ab38c3b72a322fd02100bbf891e7e56661172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZIZLHNY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGNYSIxcSWDUx0SQtoD9IvXpIn41ef4L5rEe14JXflB3AiB9aTKwkc3H3d4hHoN5wdh2l%2FMwB0LbY65kvvWyhOxiZCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMTsfY8V20b7R%2BHSfeKtwDau8nuMql4cfF8ZC0%2Bxl4wwy5QAijEr44fqVGnCn%2Bk17I7Odp3ILiOvo5kYZJPTT7wSQprWSt9oQ6t%2BkBve2gCeBib%2B1tVLPVSFiGfLf%2FmqrI5XUcKAdzpaDGJH6RbAWYjx9b4zXcltNTjHuTh4ACvVwuTaMAeaFBZv9FlVW%2BhZ4lhLYH0kmTBwzveCc3JhTPzQrmHxpGQ5s6zY1V0WmWA%2BNrPyFef2sgVGBmVz1ydqp2cqmagFRi%2BtcpvZ6DoLotyHbRZuU%2FXfjEgYXOvkzAoMw617a1TQ7LcMAp7EybaxDq%2BMJun%2BRRqgik6g32cLEaf2EkQU%2BrvochomjQFLJAJTOjfmadjBgqma%2FqtotoCKIe3riPZKtBGhE%2FRcuXea532fY16gG%2FIdhXHPUkwv%2B4fOwzlzDRgzFpPL9doUtWal4xw1GyFIBQrgH312d6RPR9xCvsFjosx%2BUieOij8RE%2FH9CTSy5Ez8hAGYD80Bphgn8dzeCEuGctBagZ0cZIpMuuGG%2FOMosZDELpeE3qWL%2Bb2tUg2uIfwozchWbfspW%2FQ4aW%2Bk2763g0lYW6IB2EYU6ecL54DYfq0sHa8OhBd6yO8sezw5twJN%2FWW7bwOxtDu0bh3E30eaVOl8ht%2BSkwx7qWxAY6pgF0OmQcPkSwXrUOFh7vKolRaVLiS6ufX7l9bV8zzGO77YvDnZPaudKWxjt1LG28ORWesPMBxiqQ8O3KO9F4tKDMDE0kEVNx84vBmkAwYTy2whX0KOPEulK9tlwUcK76J%2F3CVFsELZS4N4smkwKsvbJj%2FEJELWaeS%2FEFhpRhvLUxg5Io%2BzkQNoDCowsGxvddYe4cijiK9dKiwWH3km3XLaXs%2FKo4QbbN&X-Amz-Signature=10f8fe613c834cc7113d1acec9409049d3a6c4eeb5cfdcc76663d3f2f9659592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZIZLHNY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGNYSIxcSWDUx0SQtoD9IvXpIn41ef4L5rEe14JXflB3AiB9aTKwkc3H3d4hHoN5wdh2l%2FMwB0LbY65kvvWyhOxiZCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMTsfY8V20b7R%2BHSfeKtwDau8nuMql4cfF8ZC0%2Bxl4wwy5QAijEr44fqVGnCn%2Bk17I7Odp3ILiOvo5kYZJPTT7wSQprWSt9oQ6t%2BkBve2gCeBib%2B1tVLPVSFiGfLf%2FmqrI5XUcKAdzpaDGJH6RbAWYjx9b4zXcltNTjHuTh4ACvVwuTaMAeaFBZv9FlVW%2BhZ4lhLYH0kmTBwzveCc3JhTPzQrmHxpGQ5s6zY1V0WmWA%2BNrPyFef2sgVGBmVz1ydqp2cqmagFRi%2BtcpvZ6DoLotyHbRZuU%2FXfjEgYXOvkzAoMw617a1TQ7LcMAp7EybaxDq%2BMJun%2BRRqgik6g32cLEaf2EkQU%2BrvochomjQFLJAJTOjfmadjBgqma%2FqtotoCKIe3riPZKtBGhE%2FRcuXea532fY16gG%2FIdhXHPUkwv%2B4fOwzlzDRgzFpPL9doUtWal4xw1GyFIBQrgH312d6RPR9xCvsFjosx%2BUieOij8RE%2FH9CTSy5Ez8hAGYD80Bphgn8dzeCEuGctBagZ0cZIpMuuGG%2FOMosZDELpeE3qWL%2Bb2tUg2uIfwozchWbfspW%2FQ4aW%2Bk2763g0lYW6IB2EYU6ecL54DYfq0sHa8OhBd6yO8sezw5twJN%2FWW7bwOxtDu0bh3E30eaVOl8ht%2BSkwx7qWxAY6pgF0OmQcPkSwXrUOFh7vKolRaVLiS6ufX7l9bV8zzGO77YvDnZPaudKWxjt1LG28ORWesPMBxiqQ8O3KO9F4tKDMDE0kEVNx84vBmkAwYTy2whX0KOPEulK9tlwUcK76J%2F3CVFsELZS4N4smkwKsvbJj%2FEJELWaeS%2FEFhpRhvLUxg5Io%2BzkQNoDCowsGxvddYe4cijiK9dKiwWH3km3XLaXs%2FKo4QbbN&X-Amz-Signature=740ec5ce2c551d899696ed62ab44f31ddcd9a8de9ca3754ed6ed05f16b2073c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZIZLHNY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGNYSIxcSWDUx0SQtoD9IvXpIn41ef4L5rEe14JXflB3AiB9aTKwkc3H3d4hHoN5wdh2l%2FMwB0LbY65kvvWyhOxiZCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMTsfY8V20b7R%2BHSfeKtwDau8nuMql4cfF8ZC0%2Bxl4wwy5QAijEr44fqVGnCn%2Bk17I7Odp3ILiOvo5kYZJPTT7wSQprWSt9oQ6t%2BkBve2gCeBib%2B1tVLPVSFiGfLf%2FmqrI5XUcKAdzpaDGJH6RbAWYjx9b4zXcltNTjHuTh4ACvVwuTaMAeaFBZv9FlVW%2BhZ4lhLYH0kmTBwzveCc3JhTPzQrmHxpGQ5s6zY1V0WmWA%2BNrPyFef2sgVGBmVz1ydqp2cqmagFRi%2BtcpvZ6DoLotyHbRZuU%2FXfjEgYXOvkzAoMw617a1TQ7LcMAp7EybaxDq%2BMJun%2BRRqgik6g32cLEaf2EkQU%2BrvochomjQFLJAJTOjfmadjBgqma%2FqtotoCKIe3riPZKtBGhE%2FRcuXea532fY16gG%2FIdhXHPUkwv%2B4fOwzlzDRgzFpPL9doUtWal4xw1GyFIBQrgH312d6RPR9xCvsFjosx%2BUieOij8RE%2FH9CTSy5Ez8hAGYD80Bphgn8dzeCEuGctBagZ0cZIpMuuGG%2FOMosZDELpeE3qWL%2Bb2tUg2uIfwozchWbfspW%2FQ4aW%2Bk2763g0lYW6IB2EYU6ecL54DYfq0sHa8OhBd6yO8sezw5twJN%2FWW7bwOxtDu0bh3E30eaVOl8ht%2BSkwx7qWxAY6pgF0OmQcPkSwXrUOFh7vKolRaVLiS6ufX7l9bV8zzGO77YvDnZPaudKWxjt1LG28ORWesPMBxiqQ8O3KO9F4tKDMDE0kEVNx84vBmkAwYTy2whX0KOPEulK9tlwUcK76J%2F3CVFsELZS4N4smkwKsvbJj%2FEJELWaeS%2FEFhpRhvLUxg5Io%2BzkQNoDCowsGxvddYe4cijiK9dKiwWH3km3XLaXs%2FKo4QbbN&X-Amz-Signature=16b21c414b867825a9e6411ae1eeb44cfbd40208d04f3e8b447a4dfda4973656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZIZLHNY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGNYSIxcSWDUx0SQtoD9IvXpIn41ef4L5rEe14JXflB3AiB9aTKwkc3H3d4hHoN5wdh2l%2FMwB0LbY65kvvWyhOxiZCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMTsfY8V20b7R%2BHSfeKtwDau8nuMql4cfF8ZC0%2Bxl4wwy5QAijEr44fqVGnCn%2Bk17I7Odp3ILiOvo5kYZJPTT7wSQprWSt9oQ6t%2BkBve2gCeBib%2B1tVLPVSFiGfLf%2FmqrI5XUcKAdzpaDGJH6RbAWYjx9b4zXcltNTjHuTh4ACvVwuTaMAeaFBZv9FlVW%2BhZ4lhLYH0kmTBwzveCc3JhTPzQrmHxpGQ5s6zY1V0WmWA%2BNrPyFef2sgVGBmVz1ydqp2cqmagFRi%2BtcpvZ6DoLotyHbRZuU%2FXfjEgYXOvkzAoMw617a1TQ7LcMAp7EybaxDq%2BMJun%2BRRqgik6g32cLEaf2EkQU%2BrvochomjQFLJAJTOjfmadjBgqma%2FqtotoCKIe3riPZKtBGhE%2FRcuXea532fY16gG%2FIdhXHPUkwv%2B4fOwzlzDRgzFpPL9doUtWal4xw1GyFIBQrgH312d6RPR9xCvsFjosx%2BUieOij8RE%2FH9CTSy5Ez8hAGYD80Bphgn8dzeCEuGctBagZ0cZIpMuuGG%2FOMosZDELpeE3qWL%2Bb2tUg2uIfwozchWbfspW%2FQ4aW%2Bk2763g0lYW6IB2EYU6ecL54DYfq0sHa8OhBd6yO8sezw5twJN%2FWW7bwOxtDu0bh3E30eaVOl8ht%2BSkwx7qWxAY6pgF0OmQcPkSwXrUOFh7vKolRaVLiS6ufX7l9bV8zzGO77YvDnZPaudKWxjt1LG28ORWesPMBxiqQ8O3KO9F4tKDMDE0kEVNx84vBmkAwYTy2whX0KOPEulK9tlwUcK76J%2F3CVFsELZS4N4smkwKsvbJj%2FEJELWaeS%2FEFhpRhvLUxg5Io%2BzkQNoDCowsGxvddYe4cijiK9dKiwWH3km3XLaXs%2FKo4QbbN&X-Amz-Signature=e3ae9eb7daf21c5c63e30791010d1d1a2d9f5811e9e7f334ded9012a5dc7689a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
