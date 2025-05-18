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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN3RGC4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQcjgxMvbNXxtOjjugLI6282ti3DsoTOOc20pSv2xSqgIgNVDFL6medYTec8A3o5fZuhLGUl7id7ruJa4fxXFEfqQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDF%2FveDkfzK1f1iSNkSrcA0QwtAD5PJwKjxNZyJYXBzFXk%2Fyic25ebD6dVVTO8Lux1i5RVWJ1XHE2o0ZNBrVPX8KQyFdsTQ6x9cZtaAOxh5z6QKJm6HsWTiBJtpx4wYUGoRq7p71teXVuktgvek5xFXXSYIAoZGRvuNnQJI7bnNtE4gchRkpNvp%2FaNmFGREfF05ZEtc%2Bbd51p4BxdyFnEddkU8MiqVSEed%2BNps5sF%2FEcxusYWuD3oi2BMG%2BKkfz0awYgi43YE2%2Bnk%2FTgpTTiJdqIyaGRCDa1H5grBY6ZDDKwLHOwLPtfevvBujeLeXpEN8nMFBRPjGzWNK%2FIG9IJBjk2zZJMY7KeT2Gg8m17frvt9OUPpq98FFsVAGocS0SyRzHb4p9Ah6ka743ajJOzi0JvP1%2F0KE80rvHDbly%2BjjAuvBqVt3RK4U57OeNEOmazghUvMAEitPDqiHz%2Fhj4du32aCgysQWzqBsMj4kPbWje0Yf0UsbuhbisVKMUUU0BJhuwa67Whcu07ZjOrtdAlA4SJbfg1swy3I0j7IO5rCY0wpYauFp9a6F%2BpDT5KaboZqn%2FH2SdJIk%2FE2te%2B82zkB7ebMG5D3wxUFN1FdS8aACA2YBmV4SaUE8TbejYL%2FW%2B2yH478Zo2gqJJz%2FUacMIjnqMEGOqUBT4f1CjRuKdk1vhZdY%2BEU0OxU8iyJoRAp8AwusD2S1uVnhxgPDq%2Fs%2FrBU1WRJ9qqQn4RVpaREHvfM4WF%2F3ce8p%2FDKvXTvNCqKawnr%2FKXZ8kezoMIcLLBVL7zJHtfHviVyyBkWn5i%2FyRqIV7JEmLl7s8CdDb7gQqLEf6PKKAjK2J9cQYist1uD%2FlUNZogpM%2FAivPNw3PVWLTlCymiWdMAqV2qZVnIH&X-Amz-Signature=dc040a1c4751e89341efe091b8001a3b79e97a4773182160f48bb2c68f7d8f29&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN3RGC4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQcjgxMvbNXxtOjjugLI6282ti3DsoTOOc20pSv2xSqgIgNVDFL6medYTec8A3o5fZuhLGUl7id7ruJa4fxXFEfqQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDF%2FveDkfzK1f1iSNkSrcA0QwtAD5PJwKjxNZyJYXBzFXk%2Fyic25ebD6dVVTO8Lux1i5RVWJ1XHE2o0ZNBrVPX8KQyFdsTQ6x9cZtaAOxh5z6QKJm6HsWTiBJtpx4wYUGoRq7p71teXVuktgvek5xFXXSYIAoZGRvuNnQJI7bnNtE4gchRkpNvp%2FaNmFGREfF05ZEtc%2Bbd51p4BxdyFnEddkU8MiqVSEed%2BNps5sF%2FEcxusYWuD3oi2BMG%2BKkfz0awYgi43YE2%2Bnk%2FTgpTTiJdqIyaGRCDa1H5grBY6ZDDKwLHOwLPtfevvBujeLeXpEN8nMFBRPjGzWNK%2FIG9IJBjk2zZJMY7KeT2Gg8m17frvt9OUPpq98FFsVAGocS0SyRzHb4p9Ah6ka743ajJOzi0JvP1%2F0KE80rvHDbly%2BjjAuvBqVt3RK4U57OeNEOmazghUvMAEitPDqiHz%2Fhj4du32aCgysQWzqBsMj4kPbWje0Yf0UsbuhbisVKMUUU0BJhuwa67Whcu07ZjOrtdAlA4SJbfg1swy3I0j7IO5rCY0wpYauFp9a6F%2BpDT5KaboZqn%2FH2SdJIk%2FE2te%2B82zkB7ebMG5D3wxUFN1FdS8aACA2YBmV4SaUE8TbejYL%2FW%2B2yH478Zo2gqJJz%2FUacMIjnqMEGOqUBT4f1CjRuKdk1vhZdY%2BEU0OxU8iyJoRAp8AwusD2S1uVnhxgPDq%2Fs%2FrBU1WRJ9qqQn4RVpaREHvfM4WF%2F3ce8p%2FDKvXTvNCqKawnr%2FKXZ8kezoMIcLLBVL7zJHtfHviVyyBkWn5i%2FyRqIV7JEmLl7s8CdDb7gQqLEf6PKKAjK2J9cQYist1uD%2FlUNZogpM%2FAivPNw3PVWLTlCymiWdMAqV2qZVnIH&X-Amz-Signature=9cd3bf838e0ff8e48bcf7d15fe28ba5b21c3169f818d337c0e8d622e5d03573d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN3RGC4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQcjgxMvbNXxtOjjugLI6282ti3DsoTOOc20pSv2xSqgIgNVDFL6medYTec8A3o5fZuhLGUl7id7ruJa4fxXFEfqQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDF%2FveDkfzK1f1iSNkSrcA0QwtAD5PJwKjxNZyJYXBzFXk%2Fyic25ebD6dVVTO8Lux1i5RVWJ1XHE2o0ZNBrVPX8KQyFdsTQ6x9cZtaAOxh5z6QKJm6HsWTiBJtpx4wYUGoRq7p71teXVuktgvek5xFXXSYIAoZGRvuNnQJI7bnNtE4gchRkpNvp%2FaNmFGREfF05ZEtc%2Bbd51p4BxdyFnEddkU8MiqVSEed%2BNps5sF%2FEcxusYWuD3oi2BMG%2BKkfz0awYgi43YE2%2Bnk%2FTgpTTiJdqIyaGRCDa1H5grBY6ZDDKwLHOwLPtfevvBujeLeXpEN8nMFBRPjGzWNK%2FIG9IJBjk2zZJMY7KeT2Gg8m17frvt9OUPpq98FFsVAGocS0SyRzHb4p9Ah6ka743ajJOzi0JvP1%2F0KE80rvHDbly%2BjjAuvBqVt3RK4U57OeNEOmazghUvMAEitPDqiHz%2Fhj4du32aCgysQWzqBsMj4kPbWje0Yf0UsbuhbisVKMUUU0BJhuwa67Whcu07ZjOrtdAlA4SJbfg1swy3I0j7IO5rCY0wpYauFp9a6F%2BpDT5KaboZqn%2FH2SdJIk%2FE2te%2B82zkB7ebMG5D3wxUFN1FdS8aACA2YBmV4SaUE8TbejYL%2FW%2B2yH478Zo2gqJJz%2FUacMIjnqMEGOqUBT4f1CjRuKdk1vhZdY%2BEU0OxU8iyJoRAp8AwusD2S1uVnhxgPDq%2Fs%2FrBU1WRJ9qqQn4RVpaREHvfM4WF%2F3ce8p%2FDKvXTvNCqKawnr%2FKXZ8kezoMIcLLBVL7zJHtfHviVyyBkWn5i%2FyRqIV7JEmLl7s8CdDb7gQqLEf6PKKAjK2J9cQYist1uD%2FlUNZogpM%2FAivPNw3PVWLTlCymiWdMAqV2qZVnIH&X-Amz-Signature=5cc909e0297f7cb958ae2a8d0f3e016940e3031f533bc556a3da08c9a86553ea&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN3RGC4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQcjgxMvbNXxtOjjugLI6282ti3DsoTOOc20pSv2xSqgIgNVDFL6medYTec8A3o5fZuhLGUl7id7ruJa4fxXFEfqQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDF%2FveDkfzK1f1iSNkSrcA0QwtAD5PJwKjxNZyJYXBzFXk%2Fyic25ebD6dVVTO8Lux1i5RVWJ1XHE2o0ZNBrVPX8KQyFdsTQ6x9cZtaAOxh5z6QKJm6HsWTiBJtpx4wYUGoRq7p71teXVuktgvek5xFXXSYIAoZGRvuNnQJI7bnNtE4gchRkpNvp%2FaNmFGREfF05ZEtc%2Bbd51p4BxdyFnEddkU8MiqVSEed%2BNps5sF%2FEcxusYWuD3oi2BMG%2BKkfz0awYgi43YE2%2Bnk%2FTgpTTiJdqIyaGRCDa1H5grBY6ZDDKwLHOwLPtfevvBujeLeXpEN8nMFBRPjGzWNK%2FIG9IJBjk2zZJMY7KeT2Gg8m17frvt9OUPpq98FFsVAGocS0SyRzHb4p9Ah6ka743ajJOzi0JvP1%2F0KE80rvHDbly%2BjjAuvBqVt3RK4U57OeNEOmazghUvMAEitPDqiHz%2Fhj4du32aCgysQWzqBsMj4kPbWje0Yf0UsbuhbisVKMUUU0BJhuwa67Whcu07ZjOrtdAlA4SJbfg1swy3I0j7IO5rCY0wpYauFp9a6F%2BpDT5KaboZqn%2FH2SdJIk%2FE2te%2B82zkB7ebMG5D3wxUFN1FdS8aACA2YBmV4SaUE8TbejYL%2FW%2B2yH478Zo2gqJJz%2FUacMIjnqMEGOqUBT4f1CjRuKdk1vhZdY%2BEU0OxU8iyJoRAp8AwusD2S1uVnhxgPDq%2Fs%2FrBU1WRJ9qqQn4RVpaREHvfM4WF%2F3ce8p%2FDKvXTvNCqKawnr%2FKXZ8kezoMIcLLBVL7zJHtfHviVyyBkWn5i%2FyRqIV7JEmLl7s8CdDb7gQqLEf6PKKAjK2J9cQYist1uD%2FlUNZogpM%2FAivPNw3PVWLTlCymiWdMAqV2qZVnIH&X-Amz-Signature=2f6eefdba55a0adf64b125d34cba0a63f8a7664d333ceea45794abc012ac4dd9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN3RGC4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQcjgxMvbNXxtOjjugLI6282ti3DsoTOOc20pSv2xSqgIgNVDFL6medYTec8A3o5fZuhLGUl7id7ruJa4fxXFEfqQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDF%2FveDkfzK1f1iSNkSrcA0QwtAD5PJwKjxNZyJYXBzFXk%2Fyic25ebD6dVVTO8Lux1i5RVWJ1XHE2o0ZNBrVPX8KQyFdsTQ6x9cZtaAOxh5z6QKJm6HsWTiBJtpx4wYUGoRq7p71teXVuktgvek5xFXXSYIAoZGRvuNnQJI7bnNtE4gchRkpNvp%2FaNmFGREfF05ZEtc%2Bbd51p4BxdyFnEddkU8MiqVSEed%2BNps5sF%2FEcxusYWuD3oi2BMG%2BKkfz0awYgi43YE2%2Bnk%2FTgpTTiJdqIyaGRCDa1H5grBY6ZDDKwLHOwLPtfevvBujeLeXpEN8nMFBRPjGzWNK%2FIG9IJBjk2zZJMY7KeT2Gg8m17frvt9OUPpq98FFsVAGocS0SyRzHb4p9Ah6ka743ajJOzi0JvP1%2F0KE80rvHDbly%2BjjAuvBqVt3RK4U57OeNEOmazghUvMAEitPDqiHz%2Fhj4du32aCgysQWzqBsMj4kPbWje0Yf0UsbuhbisVKMUUU0BJhuwa67Whcu07ZjOrtdAlA4SJbfg1swy3I0j7IO5rCY0wpYauFp9a6F%2BpDT5KaboZqn%2FH2SdJIk%2FE2te%2B82zkB7ebMG5D3wxUFN1FdS8aACA2YBmV4SaUE8TbejYL%2FW%2B2yH478Zo2gqJJz%2FUacMIjnqMEGOqUBT4f1CjRuKdk1vhZdY%2BEU0OxU8iyJoRAp8AwusD2S1uVnhxgPDq%2Fs%2FrBU1WRJ9qqQn4RVpaREHvfM4WF%2F3ce8p%2FDKvXTvNCqKawnr%2FKXZ8kezoMIcLLBVL7zJHtfHviVyyBkWn5i%2FyRqIV7JEmLl7s8CdDb7gQqLEf6PKKAjK2J9cQYist1uD%2FlUNZogpM%2FAivPNw3PVWLTlCymiWdMAqV2qZVnIH&X-Amz-Signature=7270492403c355c5a1a0be2d1c8a1669d189b16917e3a0e4f43dd862629e1c46&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN3RGC4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQcjgxMvbNXxtOjjugLI6282ti3DsoTOOc20pSv2xSqgIgNVDFL6medYTec8A3o5fZuhLGUl7id7ruJa4fxXFEfqQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDF%2FveDkfzK1f1iSNkSrcA0QwtAD5PJwKjxNZyJYXBzFXk%2Fyic25ebD6dVVTO8Lux1i5RVWJ1XHE2o0ZNBrVPX8KQyFdsTQ6x9cZtaAOxh5z6QKJm6HsWTiBJtpx4wYUGoRq7p71teXVuktgvek5xFXXSYIAoZGRvuNnQJI7bnNtE4gchRkpNvp%2FaNmFGREfF05ZEtc%2Bbd51p4BxdyFnEddkU8MiqVSEed%2BNps5sF%2FEcxusYWuD3oi2BMG%2BKkfz0awYgi43YE2%2Bnk%2FTgpTTiJdqIyaGRCDa1H5grBY6ZDDKwLHOwLPtfevvBujeLeXpEN8nMFBRPjGzWNK%2FIG9IJBjk2zZJMY7KeT2Gg8m17frvt9OUPpq98FFsVAGocS0SyRzHb4p9Ah6ka743ajJOzi0JvP1%2F0KE80rvHDbly%2BjjAuvBqVt3RK4U57OeNEOmazghUvMAEitPDqiHz%2Fhj4du32aCgysQWzqBsMj4kPbWje0Yf0UsbuhbisVKMUUU0BJhuwa67Whcu07ZjOrtdAlA4SJbfg1swy3I0j7IO5rCY0wpYauFp9a6F%2BpDT5KaboZqn%2FH2SdJIk%2FE2te%2B82zkB7ebMG5D3wxUFN1FdS8aACA2YBmV4SaUE8TbejYL%2FW%2B2yH478Zo2gqJJz%2FUacMIjnqMEGOqUBT4f1CjRuKdk1vhZdY%2BEU0OxU8iyJoRAp8AwusD2S1uVnhxgPDq%2Fs%2FrBU1WRJ9qqQn4RVpaREHvfM4WF%2F3ce8p%2FDKvXTvNCqKawnr%2FKXZ8kezoMIcLLBVL7zJHtfHviVyyBkWn5i%2FyRqIV7JEmLl7s8CdDb7gQqLEf6PKKAjK2J9cQYist1uD%2FlUNZogpM%2FAivPNw3PVWLTlCymiWdMAqV2qZVnIH&X-Amz-Signature=d4d737c62eaa99e74b84f530aac119f0976f888fa3912167257b8ecd5c6b0839&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN3RGC4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQcjgxMvbNXxtOjjugLI6282ti3DsoTOOc20pSv2xSqgIgNVDFL6medYTec8A3o5fZuhLGUl7id7ruJa4fxXFEfqQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDF%2FveDkfzK1f1iSNkSrcA0QwtAD5PJwKjxNZyJYXBzFXk%2Fyic25ebD6dVVTO8Lux1i5RVWJ1XHE2o0ZNBrVPX8KQyFdsTQ6x9cZtaAOxh5z6QKJm6HsWTiBJtpx4wYUGoRq7p71teXVuktgvek5xFXXSYIAoZGRvuNnQJI7bnNtE4gchRkpNvp%2FaNmFGREfF05ZEtc%2Bbd51p4BxdyFnEddkU8MiqVSEed%2BNps5sF%2FEcxusYWuD3oi2BMG%2BKkfz0awYgi43YE2%2Bnk%2FTgpTTiJdqIyaGRCDa1H5grBY6ZDDKwLHOwLPtfevvBujeLeXpEN8nMFBRPjGzWNK%2FIG9IJBjk2zZJMY7KeT2Gg8m17frvt9OUPpq98FFsVAGocS0SyRzHb4p9Ah6ka743ajJOzi0JvP1%2F0KE80rvHDbly%2BjjAuvBqVt3RK4U57OeNEOmazghUvMAEitPDqiHz%2Fhj4du32aCgysQWzqBsMj4kPbWje0Yf0UsbuhbisVKMUUU0BJhuwa67Whcu07ZjOrtdAlA4SJbfg1swy3I0j7IO5rCY0wpYauFp9a6F%2BpDT5KaboZqn%2FH2SdJIk%2FE2te%2B82zkB7ebMG5D3wxUFN1FdS8aACA2YBmV4SaUE8TbejYL%2FW%2B2yH478Zo2gqJJz%2FUacMIjnqMEGOqUBT4f1CjRuKdk1vhZdY%2BEU0OxU8iyJoRAp8AwusD2S1uVnhxgPDq%2Fs%2FrBU1WRJ9qqQn4RVpaREHvfM4WF%2F3ce8p%2FDKvXTvNCqKawnr%2FKXZ8kezoMIcLLBVL7zJHtfHviVyyBkWn5i%2FyRqIV7JEmLl7s8CdDb7gQqLEf6PKKAjK2J9cQYist1uD%2FlUNZogpM%2FAivPNw3PVWLTlCymiWdMAqV2qZVnIH&X-Amz-Signature=565702109e90a7803c22c2d7c1fc3e68d5fab249ede63d956191101515644007&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WN3RGC4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQcjgxMvbNXxtOjjugLI6282ti3DsoTOOc20pSv2xSqgIgNVDFL6medYTec8A3o5fZuhLGUl7id7ruJa4fxXFEfqQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDF%2FveDkfzK1f1iSNkSrcA0QwtAD5PJwKjxNZyJYXBzFXk%2Fyic25ebD6dVVTO8Lux1i5RVWJ1XHE2o0ZNBrVPX8KQyFdsTQ6x9cZtaAOxh5z6QKJm6HsWTiBJtpx4wYUGoRq7p71teXVuktgvek5xFXXSYIAoZGRvuNnQJI7bnNtE4gchRkpNvp%2FaNmFGREfF05ZEtc%2Bbd51p4BxdyFnEddkU8MiqVSEed%2BNps5sF%2FEcxusYWuD3oi2BMG%2BKkfz0awYgi43YE2%2Bnk%2FTgpTTiJdqIyaGRCDa1H5grBY6ZDDKwLHOwLPtfevvBujeLeXpEN8nMFBRPjGzWNK%2FIG9IJBjk2zZJMY7KeT2Gg8m17frvt9OUPpq98FFsVAGocS0SyRzHb4p9Ah6ka743ajJOzi0JvP1%2F0KE80rvHDbly%2BjjAuvBqVt3RK4U57OeNEOmazghUvMAEitPDqiHz%2Fhj4du32aCgysQWzqBsMj4kPbWje0Yf0UsbuhbisVKMUUU0BJhuwa67Whcu07ZjOrtdAlA4SJbfg1swy3I0j7IO5rCY0wpYauFp9a6F%2BpDT5KaboZqn%2FH2SdJIk%2FE2te%2B82zkB7ebMG5D3wxUFN1FdS8aACA2YBmV4SaUE8TbejYL%2FW%2B2yH478Zo2gqJJz%2FUacMIjnqMEGOqUBT4f1CjRuKdk1vhZdY%2BEU0OxU8iyJoRAp8AwusD2S1uVnhxgPDq%2Fs%2FrBU1WRJ9qqQn4RVpaREHvfM4WF%2F3ce8p%2FDKvXTvNCqKawnr%2FKXZ8kezoMIcLLBVL7zJHtfHviVyyBkWn5i%2FyRqIV7JEmLl7s8CdDb7gQqLEf6PKKAjK2J9cQYist1uD%2FlUNZogpM%2FAivPNw3PVWLTlCymiWdMAqV2qZVnIH&X-Amz-Signature=645be35b61dabeeb230796ca042f6d6af7dd86f532aa8d28b07b9d7799481bc7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
