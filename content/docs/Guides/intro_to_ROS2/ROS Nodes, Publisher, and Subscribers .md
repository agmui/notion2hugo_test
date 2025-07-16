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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA35P6QP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDQUT6VK77jvrGT9gNDOO9dyG1JNPxciaARjjhon5m%2FiAIgHzdUDZ2srQLZDW1jEes2cQ3QGJOy7mzjQhp2QT2thMAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBQCheSeNSyQgYcHySrcA3xtvaqGqyX7iC5Iz2bsIjFvOsfn5um%2F%2BnF54ttz%2Fn%2BRhrQAz8wd8nLLq7H7KGJCWR6GZBJNFP6mYMceSLBJipOHxMCJvo9UdOZCHI5qwRNd1zXKZ7doqvkukOW7HpE6jXpoE%2BM9BLHVCy76a1NZtNf0XnMBk0EaOiiIZPmuir5iXtFZGCjxbawaVZi8uns63TOtzaXFRIfxNjBjj7fCHCcuZTionPTcxLir1vQXlGQsPgLh4REKQUyJlSGsz2a4j5kv1dxNSpVkFNNGh9LhD%2BQMACi6n3EtajNtfsOZqa2X7uy6TWS4d16dP19JU7m9E5mwJJJrLfcJ23pD6V0PS4H90xlveEXhxc9CNEYgPUN1wwrtv5bIk3%2FusJTuQNRatMEX%2B2gWvJ3e4EwHjuK1I%2BXgulvjCgRDMWHTpVLomXPkloa18L6ekMa6%2Bc99NXpdL2hq2LSrzJ%2FUf8HfHQaGYnRYHydvVpFT4wQ41NXeeOYeFx1sCZZps4Mi%2FcK93sUQgU39mkEVnPlrtozcd9ed%2B3oEl9R12U%2BUXK0dWvWX1xvNcW03IRDCcAXLQnIRz0v4CfVXxJTusyO3Jc9Baal97wUx%2BvkoHYe2DbPw5czgyPswfnTcyxK3J0OgM8u1MKWu3MMGOqUB%2BcbjgqNBICiQF0DpKVBY2YgqozbPW4pl6rTHPRBoEGhJlOr1dUkZR7y9HVnNLNm9hab2ZlyfDiA4n5XYTsuR2pF1GUOtXFqNGoGKfrNyOBuDksK%2BvxNIcEX1lj7V03y2uPjuNWW%2F7XkiV9hrQIO1KyGXl%2FPZHn6HR8a6D33rvARtHLVegsfFwkl7Z9xjNRB9hXQMUTAJj%2FJ6EZf%2Fi9tb%2BM1pScwi&X-Amz-Signature=4df4ad143bef26ca4130ae18041c75405839de7cfef9b979217f88d5457e1a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA35P6QP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDQUT6VK77jvrGT9gNDOO9dyG1JNPxciaARjjhon5m%2FiAIgHzdUDZ2srQLZDW1jEes2cQ3QGJOy7mzjQhp2QT2thMAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBQCheSeNSyQgYcHySrcA3xtvaqGqyX7iC5Iz2bsIjFvOsfn5um%2F%2BnF54ttz%2Fn%2BRhrQAz8wd8nLLq7H7KGJCWR6GZBJNFP6mYMceSLBJipOHxMCJvo9UdOZCHI5qwRNd1zXKZ7doqvkukOW7HpE6jXpoE%2BM9BLHVCy76a1NZtNf0XnMBk0EaOiiIZPmuir5iXtFZGCjxbawaVZi8uns63TOtzaXFRIfxNjBjj7fCHCcuZTionPTcxLir1vQXlGQsPgLh4REKQUyJlSGsz2a4j5kv1dxNSpVkFNNGh9LhD%2BQMACi6n3EtajNtfsOZqa2X7uy6TWS4d16dP19JU7m9E5mwJJJrLfcJ23pD6V0PS4H90xlveEXhxc9CNEYgPUN1wwrtv5bIk3%2FusJTuQNRatMEX%2B2gWvJ3e4EwHjuK1I%2BXgulvjCgRDMWHTpVLomXPkloa18L6ekMa6%2Bc99NXpdL2hq2LSrzJ%2FUf8HfHQaGYnRYHydvVpFT4wQ41NXeeOYeFx1sCZZps4Mi%2FcK93sUQgU39mkEVnPlrtozcd9ed%2B3oEl9R12U%2BUXK0dWvWX1xvNcW03IRDCcAXLQnIRz0v4CfVXxJTusyO3Jc9Baal97wUx%2BvkoHYe2DbPw5czgyPswfnTcyxK3J0OgM8u1MKWu3MMGOqUB%2BcbjgqNBICiQF0DpKVBY2YgqozbPW4pl6rTHPRBoEGhJlOr1dUkZR7y9HVnNLNm9hab2ZlyfDiA4n5XYTsuR2pF1GUOtXFqNGoGKfrNyOBuDksK%2BvxNIcEX1lj7V03y2uPjuNWW%2F7XkiV9hrQIO1KyGXl%2FPZHn6HR8a6D33rvARtHLVegsfFwkl7Z9xjNRB9hXQMUTAJj%2FJ6EZf%2Fi9tb%2BM1pScwi&X-Amz-Signature=68ab5a239b89d644f3df76ba407d38ea67b06a0deec4ad59c89b8c9ebfbb3770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA35P6QP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDQUT6VK77jvrGT9gNDOO9dyG1JNPxciaARjjhon5m%2FiAIgHzdUDZ2srQLZDW1jEes2cQ3QGJOy7mzjQhp2QT2thMAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBQCheSeNSyQgYcHySrcA3xtvaqGqyX7iC5Iz2bsIjFvOsfn5um%2F%2BnF54ttz%2Fn%2BRhrQAz8wd8nLLq7H7KGJCWR6GZBJNFP6mYMceSLBJipOHxMCJvo9UdOZCHI5qwRNd1zXKZ7doqvkukOW7HpE6jXpoE%2BM9BLHVCy76a1NZtNf0XnMBk0EaOiiIZPmuir5iXtFZGCjxbawaVZi8uns63TOtzaXFRIfxNjBjj7fCHCcuZTionPTcxLir1vQXlGQsPgLh4REKQUyJlSGsz2a4j5kv1dxNSpVkFNNGh9LhD%2BQMACi6n3EtajNtfsOZqa2X7uy6TWS4d16dP19JU7m9E5mwJJJrLfcJ23pD6V0PS4H90xlveEXhxc9CNEYgPUN1wwrtv5bIk3%2FusJTuQNRatMEX%2B2gWvJ3e4EwHjuK1I%2BXgulvjCgRDMWHTpVLomXPkloa18L6ekMa6%2Bc99NXpdL2hq2LSrzJ%2FUf8HfHQaGYnRYHydvVpFT4wQ41NXeeOYeFx1sCZZps4Mi%2FcK93sUQgU39mkEVnPlrtozcd9ed%2B3oEl9R12U%2BUXK0dWvWX1xvNcW03IRDCcAXLQnIRz0v4CfVXxJTusyO3Jc9Baal97wUx%2BvkoHYe2DbPw5czgyPswfnTcyxK3J0OgM8u1MKWu3MMGOqUB%2BcbjgqNBICiQF0DpKVBY2YgqozbPW4pl6rTHPRBoEGhJlOr1dUkZR7y9HVnNLNm9hab2ZlyfDiA4n5XYTsuR2pF1GUOtXFqNGoGKfrNyOBuDksK%2BvxNIcEX1lj7V03y2uPjuNWW%2F7XkiV9hrQIO1KyGXl%2FPZHn6HR8a6D33rvARtHLVegsfFwkl7Z9xjNRB9hXQMUTAJj%2FJ6EZf%2Fi9tb%2BM1pScwi&X-Amz-Signature=49342eaf2c0e958ebed7ad6c9aa5738c81f702aeecd7ed64027f084408535281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA35P6QP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDQUT6VK77jvrGT9gNDOO9dyG1JNPxciaARjjhon5m%2FiAIgHzdUDZ2srQLZDW1jEes2cQ3QGJOy7mzjQhp2QT2thMAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBQCheSeNSyQgYcHySrcA3xtvaqGqyX7iC5Iz2bsIjFvOsfn5um%2F%2BnF54ttz%2Fn%2BRhrQAz8wd8nLLq7H7KGJCWR6GZBJNFP6mYMceSLBJipOHxMCJvo9UdOZCHI5qwRNd1zXKZ7doqvkukOW7HpE6jXpoE%2BM9BLHVCy76a1NZtNf0XnMBk0EaOiiIZPmuir5iXtFZGCjxbawaVZi8uns63TOtzaXFRIfxNjBjj7fCHCcuZTionPTcxLir1vQXlGQsPgLh4REKQUyJlSGsz2a4j5kv1dxNSpVkFNNGh9LhD%2BQMACi6n3EtajNtfsOZqa2X7uy6TWS4d16dP19JU7m9E5mwJJJrLfcJ23pD6V0PS4H90xlveEXhxc9CNEYgPUN1wwrtv5bIk3%2FusJTuQNRatMEX%2B2gWvJ3e4EwHjuK1I%2BXgulvjCgRDMWHTpVLomXPkloa18L6ekMa6%2Bc99NXpdL2hq2LSrzJ%2FUf8HfHQaGYnRYHydvVpFT4wQ41NXeeOYeFx1sCZZps4Mi%2FcK93sUQgU39mkEVnPlrtozcd9ed%2B3oEl9R12U%2BUXK0dWvWX1xvNcW03IRDCcAXLQnIRz0v4CfVXxJTusyO3Jc9Baal97wUx%2BvkoHYe2DbPw5czgyPswfnTcyxK3J0OgM8u1MKWu3MMGOqUB%2BcbjgqNBICiQF0DpKVBY2YgqozbPW4pl6rTHPRBoEGhJlOr1dUkZR7y9HVnNLNm9hab2ZlyfDiA4n5XYTsuR2pF1GUOtXFqNGoGKfrNyOBuDksK%2BvxNIcEX1lj7V03y2uPjuNWW%2F7XkiV9hrQIO1KyGXl%2FPZHn6HR8a6D33rvARtHLVegsfFwkl7Z9xjNRB9hXQMUTAJj%2FJ6EZf%2Fi9tb%2BM1pScwi&X-Amz-Signature=ac5faeae5f6f87c1a1929577a83f4a82532bae6da3a9efb2fa4b74594d145c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA35P6QP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDQUT6VK77jvrGT9gNDOO9dyG1JNPxciaARjjhon5m%2FiAIgHzdUDZ2srQLZDW1jEes2cQ3QGJOy7mzjQhp2QT2thMAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBQCheSeNSyQgYcHySrcA3xtvaqGqyX7iC5Iz2bsIjFvOsfn5um%2F%2BnF54ttz%2Fn%2BRhrQAz8wd8nLLq7H7KGJCWR6GZBJNFP6mYMceSLBJipOHxMCJvo9UdOZCHI5qwRNd1zXKZ7doqvkukOW7HpE6jXpoE%2BM9BLHVCy76a1NZtNf0XnMBk0EaOiiIZPmuir5iXtFZGCjxbawaVZi8uns63TOtzaXFRIfxNjBjj7fCHCcuZTionPTcxLir1vQXlGQsPgLh4REKQUyJlSGsz2a4j5kv1dxNSpVkFNNGh9LhD%2BQMACi6n3EtajNtfsOZqa2X7uy6TWS4d16dP19JU7m9E5mwJJJrLfcJ23pD6V0PS4H90xlveEXhxc9CNEYgPUN1wwrtv5bIk3%2FusJTuQNRatMEX%2B2gWvJ3e4EwHjuK1I%2BXgulvjCgRDMWHTpVLomXPkloa18L6ekMa6%2Bc99NXpdL2hq2LSrzJ%2FUf8HfHQaGYnRYHydvVpFT4wQ41NXeeOYeFx1sCZZps4Mi%2FcK93sUQgU39mkEVnPlrtozcd9ed%2B3oEl9R12U%2BUXK0dWvWX1xvNcW03IRDCcAXLQnIRz0v4CfVXxJTusyO3Jc9Baal97wUx%2BvkoHYe2DbPw5czgyPswfnTcyxK3J0OgM8u1MKWu3MMGOqUB%2BcbjgqNBICiQF0DpKVBY2YgqozbPW4pl6rTHPRBoEGhJlOr1dUkZR7y9HVnNLNm9hab2ZlyfDiA4n5XYTsuR2pF1GUOtXFqNGoGKfrNyOBuDksK%2BvxNIcEX1lj7V03y2uPjuNWW%2F7XkiV9hrQIO1KyGXl%2FPZHn6HR8a6D33rvARtHLVegsfFwkl7Z9xjNRB9hXQMUTAJj%2FJ6EZf%2Fi9tb%2BM1pScwi&X-Amz-Signature=cfa0575df4495796b521e79de5abd0de2b2653b8b15bc88b1f915d37c93a37dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA35P6QP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDQUT6VK77jvrGT9gNDOO9dyG1JNPxciaARjjhon5m%2FiAIgHzdUDZ2srQLZDW1jEes2cQ3QGJOy7mzjQhp2QT2thMAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBQCheSeNSyQgYcHySrcA3xtvaqGqyX7iC5Iz2bsIjFvOsfn5um%2F%2BnF54ttz%2Fn%2BRhrQAz8wd8nLLq7H7KGJCWR6GZBJNFP6mYMceSLBJipOHxMCJvo9UdOZCHI5qwRNd1zXKZ7doqvkukOW7HpE6jXpoE%2BM9BLHVCy76a1NZtNf0XnMBk0EaOiiIZPmuir5iXtFZGCjxbawaVZi8uns63TOtzaXFRIfxNjBjj7fCHCcuZTionPTcxLir1vQXlGQsPgLh4REKQUyJlSGsz2a4j5kv1dxNSpVkFNNGh9LhD%2BQMACi6n3EtajNtfsOZqa2X7uy6TWS4d16dP19JU7m9E5mwJJJrLfcJ23pD6V0PS4H90xlveEXhxc9CNEYgPUN1wwrtv5bIk3%2FusJTuQNRatMEX%2B2gWvJ3e4EwHjuK1I%2BXgulvjCgRDMWHTpVLomXPkloa18L6ekMa6%2Bc99NXpdL2hq2LSrzJ%2FUf8HfHQaGYnRYHydvVpFT4wQ41NXeeOYeFx1sCZZps4Mi%2FcK93sUQgU39mkEVnPlrtozcd9ed%2B3oEl9R12U%2BUXK0dWvWX1xvNcW03IRDCcAXLQnIRz0v4CfVXxJTusyO3Jc9Baal97wUx%2BvkoHYe2DbPw5czgyPswfnTcyxK3J0OgM8u1MKWu3MMGOqUB%2BcbjgqNBICiQF0DpKVBY2YgqozbPW4pl6rTHPRBoEGhJlOr1dUkZR7y9HVnNLNm9hab2ZlyfDiA4n5XYTsuR2pF1GUOtXFqNGoGKfrNyOBuDksK%2BvxNIcEX1lj7V03y2uPjuNWW%2F7XkiV9hrQIO1KyGXl%2FPZHn6HR8a6D33rvARtHLVegsfFwkl7Z9xjNRB9hXQMUTAJj%2FJ6EZf%2Fi9tb%2BM1pScwi&X-Amz-Signature=578a36f02998d141b3edc33910170ec27222f91d3cd8f0182710ed89e9235e86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA35P6QP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDQUT6VK77jvrGT9gNDOO9dyG1JNPxciaARjjhon5m%2FiAIgHzdUDZ2srQLZDW1jEes2cQ3QGJOy7mzjQhp2QT2thMAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBQCheSeNSyQgYcHySrcA3xtvaqGqyX7iC5Iz2bsIjFvOsfn5um%2F%2BnF54ttz%2Fn%2BRhrQAz8wd8nLLq7H7KGJCWR6GZBJNFP6mYMceSLBJipOHxMCJvo9UdOZCHI5qwRNd1zXKZ7doqvkukOW7HpE6jXpoE%2BM9BLHVCy76a1NZtNf0XnMBk0EaOiiIZPmuir5iXtFZGCjxbawaVZi8uns63TOtzaXFRIfxNjBjj7fCHCcuZTionPTcxLir1vQXlGQsPgLh4REKQUyJlSGsz2a4j5kv1dxNSpVkFNNGh9LhD%2BQMACi6n3EtajNtfsOZqa2X7uy6TWS4d16dP19JU7m9E5mwJJJrLfcJ23pD6V0PS4H90xlveEXhxc9CNEYgPUN1wwrtv5bIk3%2FusJTuQNRatMEX%2B2gWvJ3e4EwHjuK1I%2BXgulvjCgRDMWHTpVLomXPkloa18L6ekMa6%2Bc99NXpdL2hq2LSrzJ%2FUf8HfHQaGYnRYHydvVpFT4wQ41NXeeOYeFx1sCZZps4Mi%2FcK93sUQgU39mkEVnPlrtozcd9ed%2B3oEl9R12U%2BUXK0dWvWX1xvNcW03IRDCcAXLQnIRz0v4CfVXxJTusyO3Jc9Baal97wUx%2BvkoHYe2DbPw5czgyPswfnTcyxK3J0OgM8u1MKWu3MMGOqUB%2BcbjgqNBICiQF0DpKVBY2YgqozbPW4pl6rTHPRBoEGhJlOr1dUkZR7y9HVnNLNm9hab2ZlyfDiA4n5XYTsuR2pF1GUOtXFqNGoGKfrNyOBuDksK%2BvxNIcEX1lj7V03y2uPjuNWW%2F7XkiV9hrQIO1KyGXl%2FPZHn6HR8a6D33rvARtHLVegsfFwkl7Z9xjNRB9hXQMUTAJj%2FJ6EZf%2Fi9tb%2BM1pScwi&X-Amz-Signature=438b8e6be8e2004fbf698a8f29b1c0bc35a9999d22ffb913c65d75d85f20afb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA35P6QP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDQUT6VK77jvrGT9gNDOO9dyG1JNPxciaARjjhon5m%2FiAIgHzdUDZ2srQLZDW1jEes2cQ3QGJOy7mzjQhp2QT2thMAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBQCheSeNSyQgYcHySrcA3xtvaqGqyX7iC5Iz2bsIjFvOsfn5um%2F%2BnF54ttz%2Fn%2BRhrQAz8wd8nLLq7H7KGJCWR6GZBJNFP6mYMceSLBJipOHxMCJvo9UdOZCHI5qwRNd1zXKZ7doqvkukOW7HpE6jXpoE%2BM9BLHVCy76a1NZtNf0XnMBk0EaOiiIZPmuir5iXtFZGCjxbawaVZi8uns63TOtzaXFRIfxNjBjj7fCHCcuZTionPTcxLir1vQXlGQsPgLh4REKQUyJlSGsz2a4j5kv1dxNSpVkFNNGh9LhD%2BQMACi6n3EtajNtfsOZqa2X7uy6TWS4d16dP19JU7m9E5mwJJJrLfcJ23pD6V0PS4H90xlveEXhxc9CNEYgPUN1wwrtv5bIk3%2FusJTuQNRatMEX%2B2gWvJ3e4EwHjuK1I%2BXgulvjCgRDMWHTpVLomXPkloa18L6ekMa6%2Bc99NXpdL2hq2LSrzJ%2FUf8HfHQaGYnRYHydvVpFT4wQ41NXeeOYeFx1sCZZps4Mi%2FcK93sUQgU39mkEVnPlrtozcd9ed%2B3oEl9R12U%2BUXK0dWvWX1xvNcW03IRDCcAXLQnIRz0v4CfVXxJTusyO3Jc9Baal97wUx%2BvkoHYe2DbPw5czgyPswfnTcyxK3J0OgM8u1MKWu3MMGOqUB%2BcbjgqNBICiQF0DpKVBY2YgqozbPW4pl6rTHPRBoEGhJlOr1dUkZR7y9HVnNLNm9hab2ZlyfDiA4n5XYTsuR2pF1GUOtXFqNGoGKfrNyOBuDksK%2BvxNIcEX1lj7V03y2uPjuNWW%2F7XkiV9hrQIO1KyGXl%2FPZHn6HR8a6D33rvARtHLVegsfFwkl7Z9xjNRB9hXQMUTAJj%2FJ6EZf%2Fi9tb%2BM1pScwi&X-Amz-Signature=f212b07ad654f7e59a11daf35db59d963d3c1c8c99e117ce515dbfe6c7a50ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
