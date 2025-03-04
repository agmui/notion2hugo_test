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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNONN2J4%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPA53MvsOrQJYLtf%2B8aAz%2BkivuMtauGeRoO1GQGcMHxAiEA0r87ZJldDlQXyEL5F9NM%2B7wwn6kF2yFxswU0SJlAef8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDSZ7oisfSJDgI7bCrcA%2BkP1cCUGIJ%2FWVKWsiJmNoyNtqxTUnKaANLC7r6wYg1dIz2NUBrE1%2Ff%2FuILSRxPKlZ9CY7pddaAq3p6S7riOj0WUipn%2FbZfIE3nroGkblLSqB8%2BXyFQwwakOkHOxSTeuw6eKxTaTHQfCc3%2FuoNd5UECAZTFAqVm46jrKqSjcEP3GzU4SYCYr91DdAhzIDS4I%2F3y9g6GsE8MPPBfogTpE%2BM8T%2BkoO8LdlIdNzRMFrgeegN3aEyN7QsTk5fQFAavEr46j0I0hqbBclrG4K7BJQ0kvBPPIwNG%2FXPQ0sPnUFeHM1H1ZqzIUdzAAYynSGCBjYMGma68mO1IL1T6E%2B6p6MwOYsFhQi%2Bq3kQnM%2BQVx7UfvD0HzN3BU9Y2cCppqJa2SU7l98XIQd%2F%2BptBCi1LdZiJdkx5Lf%2FkcMXet0rOKP00gKHtd%2BlBN3NXQind1XOrLNlE8ye74y6IQ2WdfS9H7xEUqYJE4JkF2JZ53EnI3uI2iz1NK6Btzqk9n2wUhz8wohgSx6Z6kXBFV46oLS4kVu%2FLPMRL7qXrzZjiJkObwf7Tu9DfM4ymf9AE4UCg0njpHnlbZExKseSz5BItXUOa7o2GC6urNjeB5knk4yOMVNdVYl4JP5DxlxIv01d8qKDMN7pm74GOqUB7eKw%2FQa3yByMT%2BHGKi9U1h9jXZUzTlYLryYPSygRnXAHAcD2YMPiOZ5sdVLUHLmdyLCqD7Lhcwf33tBiLEFis4P2tBfTbmpe7wLwkz3bvEkv3pXgrefEE%2B9kTRjS0G%2BbAhZ5SsVkMVkbRw0FWoyeeBIEo2K9TIVaY79Ck64rSvEXpAsMsFAALHEaCEQQXOv1N7lMQU%2B3WyWjfP8MJ0HGZvd8vgfm&X-Amz-Signature=f06fc0718a1d538adf424fa092fedd51d1f417b3b139b32a1a409b8258f2360b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNONN2J4%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPA53MvsOrQJYLtf%2B8aAz%2BkivuMtauGeRoO1GQGcMHxAiEA0r87ZJldDlQXyEL5F9NM%2B7wwn6kF2yFxswU0SJlAef8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDSZ7oisfSJDgI7bCrcA%2BkP1cCUGIJ%2FWVKWsiJmNoyNtqxTUnKaANLC7r6wYg1dIz2NUBrE1%2Ff%2FuILSRxPKlZ9CY7pddaAq3p6S7riOj0WUipn%2FbZfIE3nroGkblLSqB8%2BXyFQwwakOkHOxSTeuw6eKxTaTHQfCc3%2FuoNd5UECAZTFAqVm46jrKqSjcEP3GzU4SYCYr91DdAhzIDS4I%2F3y9g6GsE8MPPBfogTpE%2BM8T%2BkoO8LdlIdNzRMFrgeegN3aEyN7QsTk5fQFAavEr46j0I0hqbBclrG4K7BJQ0kvBPPIwNG%2FXPQ0sPnUFeHM1H1ZqzIUdzAAYynSGCBjYMGma68mO1IL1T6E%2B6p6MwOYsFhQi%2Bq3kQnM%2BQVx7UfvD0HzN3BU9Y2cCppqJa2SU7l98XIQd%2F%2BptBCi1LdZiJdkx5Lf%2FkcMXet0rOKP00gKHtd%2BlBN3NXQind1XOrLNlE8ye74y6IQ2WdfS9H7xEUqYJE4JkF2JZ53EnI3uI2iz1NK6Btzqk9n2wUhz8wohgSx6Z6kXBFV46oLS4kVu%2FLPMRL7qXrzZjiJkObwf7Tu9DfM4ymf9AE4UCg0njpHnlbZExKseSz5BItXUOa7o2GC6urNjeB5knk4yOMVNdVYl4JP5DxlxIv01d8qKDMN7pm74GOqUB7eKw%2FQa3yByMT%2BHGKi9U1h9jXZUzTlYLryYPSygRnXAHAcD2YMPiOZ5sdVLUHLmdyLCqD7Lhcwf33tBiLEFis4P2tBfTbmpe7wLwkz3bvEkv3pXgrefEE%2B9kTRjS0G%2BbAhZ5SsVkMVkbRw0FWoyeeBIEo2K9TIVaY79Ck64rSvEXpAsMsFAALHEaCEQQXOv1N7lMQU%2B3WyWjfP8MJ0HGZvd8vgfm&X-Amz-Signature=20ed345f679d4bd4e8df18a758d8937406da870c93cae9cbfe03aa7953d50315&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNONN2J4%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPA53MvsOrQJYLtf%2B8aAz%2BkivuMtauGeRoO1GQGcMHxAiEA0r87ZJldDlQXyEL5F9NM%2B7wwn6kF2yFxswU0SJlAef8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDSZ7oisfSJDgI7bCrcA%2BkP1cCUGIJ%2FWVKWsiJmNoyNtqxTUnKaANLC7r6wYg1dIz2NUBrE1%2Ff%2FuILSRxPKlZ9CY7pddaAq3p6S7riOj0WUipn%2FbZfIE3nroGkblLSqB8%2BXyFQwwakOkHOxSTeuw6eKxTaTHQfCc3%2FuoNd5UECAZTFAqVm46jrKqSjcEP3GzU4SYCYr91DdAhzIDS4I%2F3y9g6GsE8MPPBfogTpE%2BM8T%2BkoO8LdlIdNzRMFrgeegN3aEyN7QsTk5fQFAavEr46j0I0hqbBclrG4K7BJQ0kvBPPIwNG%2FXPQ0sPnUFeHM1H1ZqzIUdzAAYynSGCBjYMGma68mO1IL1T6E%2B6p6MwOYsFhQi%2Bq3kQnM%2BQVx7UfvD0HzN3BU9Y2cCppqJa2SU7l98XIQd%2F%2BptBCi1LdZiJdkx5Lf%2FkcMXet0rOKP00gKHtd%2BlBN3NXQind1XOrLNlE8ye74y6IQ2WdfS9H7xEUqYJE4JkF2JZ53EnI3uI2iz1NK6Btzqk9n2wUhz8wohgSx6Z6kXBFV46oLS4kVu%2FLPMRL7qXrzZjiJkObwf7Tu9DfM4ymf9AE4UCg0njpHnlbZExKseSz5BItXUOa7o2GC6urNjeB5knk4yOMVNdVYl4JP5DxlxIv01d8qKDMN7pm74GOqUB7eKw%2FQa3yByMT%2BHGKi9U1h9jXZUzTlYLryYPSygRnXAHAcD2YMPiOZ5sdVLUHLmdyLCqD7Lhcwf33tBiLEFis4P2tBfTbmpe7wLwkz3bvEkv3pXgrefEE%2B9kTRjS0G%2BbAhZ5SsVkMVkbRw0FWoyeeBIEo2K9TIVaY79Ck64rSvEXpAsMsFAALHEaCEQQXOv1N7lMQU%2B3WyWjfP8MJ0HGZvd8vgfm&X-Amz-Signature=5c9b38f52a92ba83a0c0aacdb0c1f55032cc1f5b1bfb7ae0f5ebc809abda5c7d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNONN2J4%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPA53MvsOrQJYLtf%2B8aAz%2BkivuMtauGeRoO1GQGcMHxAiEA0r87ZJldDlQXyEL5F9NM%2B7wwn6kF2yFxswU0SJlAef8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDSZ7oisfSJDgI7bCrcA%2BkP1cCUGIJ%2FWVKWsiJmNoyNtqxTUnKaANLC7r6wYg1dIz2NUBrE1%2Ff%2FuILSRxPKlZ9CY7pddaAq3p6S7riOj0WUipn%2FbZfIE3nroGkblLSqB8%2BXyFQwwakOkHOxSTeuw6eKxTaTHQfCc3%2FuoNd5UECAZTFAqVm46jrKqSjcEP3GzU4SYCYr91DdAhzIDS4I%2F3y9g6GsE8MPPBfogTpE%2BM8T%2BkoO8LdlIdNzRMFrgeegN3aEyN7QsTk5fQFAavEr46j0I0hqbBclrG4K7BJQ0kvBPPIwNG%2FXPQ0sPnUFeHM1H1ZqzIUdzAAYynSGCBjYMGma68mO1IL1T6E%2B6p6MwOYsFhQi%2Bq3kQnM%2BQVx7UfvD0HzN3BU9Y2cCppqJa2SU7l98XIQd%2F%2BptBCi1LdZiJdkx5Lf%2FkcMXet0rOKP00gKHtd%2BlBN3NXQind1XOrLNlE8ye74y6IQ2WdfS9H7xEUqYJE4JkF2JZ53EnI3uI2iz1NK6Btzqk9n2wUhz8wohgSx6Z6kXBFV46oLS4kVu%2FLPMRL7qXrzZjiJkObwf7Tu9DfM4ymf9AE4UCg0njpHnlbZExKseSz5BItXUOa7o2GC6urNjeB5knk4yOMVNdVYl4JP5DxlxIv01d8qKDMN7pm74GOqUB7eKw%2FQa3yByMT%2BHGKi9U1h9jXZUzTlYLryYPSygRnXAHAcD2YMPiOZ5sdVLUHLmdyLCqD7Lhcwf33tBiLEFis4P2tBfTbmpe7wLwkz3bvEkv3pXgrefEE%2B9kTRjS0G%2BbAhZ5SsVkMVkbRw0FWoyeeBIEo2K9TIVaY79Ck64rSvEXpAsMsFAALHEaCEQQXOv1N7lMQU%2B3WyWjfP8MJ0HGZvd8vgfm&X-Amz-Signature=cf49807a574d726481fda6b1088b19c00b537734d4a78d4c349a1dcfe7c4c468&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNONN2J4%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPA53MvsOrQJYLtf%2B8aAz%2BkivuMtauGeRoO1GQGcMHxAiEA0r87ZJldDlQXyEL5F9NM%2B7wwn6kF2yFxswU0SJlAef8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDSZ7oisfSJDgI7bCrcA%2BkP1cCUGIJ%2FWVKWsiJmNoyNtqxTUnKaANLC7r6wYg1dIz2NUBrE1%2Ff%2FuILSRxPKlZ9CY7pddaAq3p6S7riOj0WUipn%2FbZfIE3nroGkblLSqB8%2BXyFQwwakOkHOxSTeuw6eKxTaTHQfCc3%2FuoNd5UECAZTFAqVm46jrKqSjcEP3GzU4SYCYr91DdAhzIDS4I%2F3y9g6GsE8MPPBfogTpE%2BM8T%2BkoO8LdlIdNzRMFrgeegN3aEyN7QsTk5fQFAavEr46j0I0hqbBclrG4K7BJQ0kvBPPIwNG%2FXPQ0sPnUFeHM1H1ZqzIUdzAAYynSGCBjYMGma68mO1IL1T6E%2B6p6MwOYsFhQi%2Bq3kQnM%2BQVx7UfvD0HzN3BU9Y2cCppqJa2SU7l98XIQd%2F%2BptBCi1LdZiJdkx5Lf%2FkcMXet0rOKP00gKHtd%2BlBN3NXQind1XOrLNlE8ye74y6IQ2WdfS9H7xEUqYJE4JkF2JZ53EnI3uI2iz1NK6Btzqk9n2wUhz8wohgSx6Z6kXBFV46oLS4kVu%2FLPMRL7qXrzZjiJkObwf7Tu9DfM4ymf9AE4UCg0njpHnlbZExKseSz5BItXUOa7o2GC6urNjeB5knk4yOMVNdVYl4JP5DxlxIv01d8qKDMN7pm74GOqUB7eKw%2FQa3yByMT%2BHGKi9U1h9jXZUzTlYLryYPSygRnXAHAcD2YMPiOZ5sdVLUHLmdyLCqD7Lhcwf33tBiLEFis4P2tBfTbmpe7wLwkz3bvEkv3pXgrefEE%2B9kTRjS0G%2BbAhZ5SsVkMVkbRw0FWoyeeBIEo2K9TIVaY79Ck64rSvEXpAsMsFAALHEaCEQQXOv1N7lMQU%2B3WyWjfP8MJ0HGZvd8vgfm&X-Amz-Signature=7c3a037adc620afa5970c8cda45642544d325c6b9b4addd633f299a555d68136&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNONN2J4%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPA53MvsOrQJYLtf%2B8aAz%2BkivuMtauGeRoO1GQGcMHxAiEA0r87ZJldDlQXyEL5F9NM%2B7wwn6kF2yFxswU0SJlAef8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDSZ7oisfSJDgI7bCrcA%2BkP1cCUGIJ%2FWVKWsiJmNoyNtqxTUnKaANLC7r6wYg1dIz2NUBrE1%2Ff%2FuILSRxPKlZ9CY7pddaAq3p6S7riOj0WUipn%2FbZfIE3nroGkblLSqB8%2BXyFQwwakOkHOxSTeuw6eKxTaTHQfCc3%2FuoNd5UECAZTFAqVm46jrKqSjcEP3GzU4SYCYr91DdAhzIDS4I%2F3y9g6GsE8MPPBfogTpE%2BM8T%2BkoO8LdlIdNzRMFrgeegN3aEyN7QsTk5fQFAavEr46j0I0hqbBclrG4K7BJQ0kvBPPIwNG%2FXPQ0sPnUFeHM1H1ZqzIUdzAAYynSGCBjYMGma68mO1IL1T6E%2B6p6MwOYsFhQi%2Bq3kQnM%2BQVx7UfvD0HzN3BU9Y2cCppqJa2SU7l98XIQd%2F%2BptBCi1LdZiJdkx5Lf%2FkcMXet0rOKP00gKHtd%2BlBN3NXQind1XOrLNlE8ye74y6IQ2WdfS9H7xEUqYJE4JkF2JZ53EnI3uI2iz1NK6Btzqk9n2wUhz8wohgSx6Z6kXBFV46oLS4kVu%2FLPMRL7qXrzZjiJkObwf7Tu9DfM4ymf9AE4UCg0njpHnlbZExKseSz5BItXUOa7o2GC6urNjeB5knk4yOMVNdVYl4JP5DxlxIv01d8qKDMN7pm74GOqUB7eKw%2FQa3yByMT%2BHGKi9U1h9jXZUzTlYLryYPSygRnXAHAcD2YMPiOZ5sdVLUHLmdyLCqD7Lhcwf33tBiLEFis4P2tBfTbmpe7wLwkz3bvEkv3pXgrefEE%2B9kTRjS0G%2BbAhZ5SsVkMVkbRw0FWoyeeBIEo2K9TIVaY79Ck64rSvEXpAsMsFAALHEaCEQQXOv1N7lMQU%2B3WyWjfP8MJ0HGZvd8vgfm&X-Amz-Signature=eabef89ecd101f6771cd7475d53aabb0271dd751d8c008fe0e1a5db27ee05bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNONN2J4%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPA53MvsOrQJYLtf%2B8aAz%2BkivuMtauGeRoO1GQGcMHxAiEA0r87ZJldDlQXyEL5F9NM%2B7wwn6kF2yFxswU0SJlAef8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDSZ7oisfSJDgI7bCrcA%2BkP1cCUGIJ%2FWVKWsiJmNoyNtqxTUnKaANLC7r6wYg1dIz2NUBrE1%2Ff%2FuILSRxPKlZ9CY7pddaAq3p6S7riOj0WUipn%2FbZfIE3nroGkblLSqB8%2BXyFQwwakOkHOxSTeuw6eKxTaTHQfCc3%2FuoNd5UECAZTFAqVm46jrKqSjcEP3GzU4SYCYr91DdAhzIDS4I%2F3y9g6GsE8MPPBfogTpE%2BM8T%2BkoO8LdlIdNzRMFrgeegN3aEyN7QsTk5fQFAavEr46j0I0hqbBclrG4K7BJQ0kvBPPIwNG%2FXPQ0sPnUFeHM1H1ZqzIUdzAAYynSGCBjYMGma68mO1IL1T6E%2B6p6MwOYsFhQi%2Bq3kQnM%2BQVx7UfvD0HzN3BU9Y2cCppqJa2SU7l98XIQd%2F%2BptBCi1LdZiJdkx5Lf%2FkcMXet0rOKP00gKHtd%2BlBN3NXQind1XOrLNlE8ye74y6IQ2WdfS9H7xEUqYJE4JkF2JZ53EnI3uI2iz1NK6Btzqk9n2wUhz8wohgSx6Z6kXBFV46oLS4kVu%2FLPMRL7qXrzZjiJkObwf7Tu9DfM4ymf9AE4UCg0njpHnlbZExKseSz5BItXUOa7o2GC6urNjeB5knk4yOMVNdVYl4JP5DxlxIv01d8qKDMN7pm74GOqUB7eKw%2FQa3yByMT%2BHGKi9U1h9jXZUzTlYLryYPSygRnXAHAcD2YMPiOZ5sdVLUHLmdyLCqD7Lhcwf33tBiLEFis4P2tBfTbmpe7wLwkz3bvEkv3pXgrefEE%2B9kTRjS0G%2BbAhZ5SsVkMVkbRw0FWoyeeBIEo2K9TIVaY79Ck64rSvEXpAsMsFAALHEaCEQQXOv1N7lMQU%2B3WyWjfP8MJ0HGZvd8vgfm&X-Amz-Signature=fcaac82c78dbaa77e071e9267bb86d4f3a68440ef44be7fb9392c9114b91585e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNONN2J4%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPA53MvsOrQJYLtf%2B8aAz%2BkivuMtauGeRoO1GQGcMHxAiEA0r87ZJldDlQXyEL5F9NM%2B7wwn6kF2yFxswU0SJlAef8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDSZ7oisfSJDgI7bCrcA%2BkP1cCUGIJ%2FWVKWsiJmNoyNtqxTUnKaANLC7r6wYg1dIz2NUBrE1%2Ff%2FuILSRxPKlZ9CY7pddaAq3p6S7riOj0WUipn%2FbZfIE3nroGkblLSqB8%2BXyFQwwakOkHOxSTeuw6eKxTaTHQfCc3%2FuoNd5UECAZTFAqVm46jrKqSjcEP3GzU4SYCYr91DdAhzIDS4I%2F3y9g6GsE8MPPBfogTpE%2BM8T%2BkoO8LdlIdNzRMFrgeegN3aEyN7QsTk5fQFAavEr46j0I0hqbBclrG4K7BJQ0kvBPPIwNG%2FXPQ0sPnUFeHM1H1ZqzIUdzAAYynSGCBjYMGma68mO1IL1T6E%2B6p6MwOYsFhQi%2Bq3kQnM%2BQVx7UfvD0HzN3BU9Y2cCppqJa2SU7l98XIQd%2F%2BptBCi1LdZiJdkx5Lf%2FkcMXet0rOKP00gKHtd%2BlBN3NXQind1XOrLNlE8ye74y6IQ2WdfS9H7xEUqYJE4JkF2JZ53EnI3uI2iz1NK6Btzqk9n2wUhz8wohgSx6Z6kXBFV46oLS4kVu%2FLPMRL7qXrzZjiJkObwf7Tu9DfM4ymf9AE4UCg0njpHnlbZExKseSz5BItXUOa7o2GC6urNjeB5knk4yOMVNdVYl4JP5DxlxIv01d8qKDMN7pm74GOqUB7eKw%2FQa3yByMT%2BHGKi9U1h9jXZUzTlYLryYPSygRnXAHAcD2YMPiOZ5sdVLUHLmdyLCqD7Lhcwf33tBiLEFis4P2tBfTbmpe7wLwkz3bvEkv3pXgrefEE%2B9kTRjS0G%2BbAhZ5SsVkMVkbRw0FWoyeeBIEo2K9TIVaY79Ck64rSvEXpAsMsFAALHEaCEQQXOv1N7lMQU%2B3WyWjfP8MJ0HGZvd8vgfm&X-Amz-Signature=07390b2ccfd1ab3b80791da57457ad78a5a3f8c3e80fb89d33e36724cf2c5ce9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
