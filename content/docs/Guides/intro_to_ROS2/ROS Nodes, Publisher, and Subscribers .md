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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJFKQHG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSmMrMiF0oYbwhV2sJJqc8gAIXTd%2Bx6y%2B8x55sZZcSDgIhAKu7ZP50T8UXlLXxGJZ3xoW26OoObDm1Wa5IzL74dTptKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc%2BLTpF%2BJ%2FJvLJ%2FXcq3AO5qi9p44V2hJ58yp0nAZx5aqcf8Lh3rRHnVH%2FpGdW9SOxXdnpRHzl5%2FP3oYI9AZ%2B2QWkP%2FdxtHC7iS5Kl2UGtxDotgaPk2S%2FJsWleUY3flpI8oYIS2gQ%2F9PVHtxBciUATfN3LBDgwq1pkdS4du7qxoE%2F7g%2B8DzfMeGv3xvM1dWm3OUAWcWb9FbJ9eYO95TRYr5qOau8U%2FT2h0KKLnN%2FRApoa9K5cDUe62qJOuq%2BRguTf1uHj18WM5A1XJyAUARBqZd6HCxZHagEgZemWPTgbnOr%2FolU7anj%2FKN7KJp4%2FRlkEYSB3bgZtcl530GtoIaF13DF%2BwS%2FFWR0aeSwbsQsmhfn7QLga7KZe%2B1F7nXpxfoUMxulqOse%2FW6nu1%2F0f%2BLvPkGTkrCAjZ8SRwKJHkNR5kr8AcOhPEm7IykjenWpUJJcx46j%2F5XXFArrckKOiw4DK9FHx6fhSX1rcyRAYryGxgUUDG6AvXjiZOce0H8aNomliT0hsIc5d73ErIkKv25Ow2eWGZ0bRAIkoPVmpCkHbpJPL5L4FxHSPQiPmc3kdqSKO0Jtp%2FTOUkO9syIiy8ljakZX7M%2Fpc4V1lLj9A0qbrQxokNFRXllciLN2loFQoIhJ2orNxxYIdopN1mAVDD2xezDBjqkARFmEogdY6gxORJgnlq0ab2mUv2p1oQXI8pi2HbaOZb3ktYQsh8PRKxP4QHiDPXS%2BbSakoiCNVWndpHYih1iSGJ2fQZDTAssUouNhT5RdgvGODezv7cNQQ34OsqBzjTdG%2BNrWiqwruR5g8ZyUdT8Xr93tTccrqLUi28LAbWfUHemeB0OjVK%2BDa4KNf1ogk4tcw7VfTgk1A2oj9JzhWWQ75aKHAtW&X-Amz-Signature=cb34fc5a69cf1bf407f1e7cc124984d57ae2f1a00395aa40ad3b983821a0d455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJFKQHG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSmMrMiF0oYbwhV2sJJqc8gAIXTd%2Bx6y%2B8x55sZZcSDgIhAKu7ZP50T8UXlLXxGJZ3xoW26OoObDm1Wa5IzL74dTptKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc%2BLTpF%2BJ%2FJvLJ%2FXcq3AO5qi9p44V2hJ58yp0nAZx5aqcf8Lh3rRHnVH%2FpGdW9SOxXdnpRHzl5%2FP3oYI9AZ%2B2QWkP%2FdxtHC7iS5Kl2UGtxDotgaPk2S%2FJsWleUY3flpI8oYIS2gQ%2F9PVHtxBciUATfN3LBDgwq1pkdS4du7qxoE%2F7g%2B8DzfMeGv3xvM1dWm3OUAWcWb9FbJ9eYO95TRYr5qOau8U%2FT2h0KKLnN%2FRApoa9K5cDUe62qJOuq%2BRguTf1uHj18WM5A1XJyAUARBqZd6HCxZHagEgZemWPTgbnOr%2FolU7anj%2FKN7KJp4%2FRlkEYSB3bgZtcl530GtoIaF13DF%2BwS%2FFWR0aeSwbsQsmhfn7QLga7KZe%2B1F7nXpxfoUMxulqOse%2FW6nu1%2F0f%2BLvPkGTkrCAjZ8SRwKJHkNR5kr8AcOhPEm7IykjenWpUJJcx46j%2F5XXFArrckKOiw4DK9FHx6fhSX1rcyRAYryGxgUUDG6AvXjiZOce0H8aNomliT0hsIc5d73ErIkKv25Ow2eWGZ0bRAIkoPVmpCkHbpJPL5L4FxHSPQiPmc3kdqSKO0Jtp%2FTOUkO9syIiy8ljakZX7M%2Fpc4V1lLj9A0qbrQxokNFRXllciLN2loFQoIhJ2orNxxYIdopN1mAVDD2xezDBjqkARFmEogdY6gxORJgnlq0ab2mUv2p1oQXI8pi2HbaOZb3ktYQsh8PRKxP4QHiDPXS%2BbSakoiCNVWndpHYih1iSGJ2fQZDTAssUouNhT5RdgvGODezv7cNQQ34OsqBzjTdG%2BNrWiqwruR5g8ZyUdT8Xr93tTccrqLUi28LAbWfUHemeB0OjVK%2BDa4KNf1ogk4tcw7VfTgk1A2oj9JzhWWQ75aKHAtW&X-Amz-Signature=c90cab1ad41e74720023238a78845caa57f12bb411d12d51c455f45a1941bbcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJFKQHG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSmMrMiF0oYbwhV2sJJqc8gAIXTd%2Bx6y%2B8x55sZZcSDgIhAKu7ZP50T8UXlLXxGJZ3xoW26OoObDm1Wa5IzL74dTptKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc%2BLTpF%2BJ%2FJvLJ%2FXcq3AO5qi9p44V2hJ58yp0nAZx5aqcf8Lh3rRHnVH%2FpGdW9SOxXdnpRHzl5%2FP3oYI9AZ%2B2QWkP%2FdxtHC7iS5Kl2UGtxDotgaPk2S%2FJsWleUY3flpI8oYIS2gQ%2F9PVHtxBciUATfN3LBDgwq1pkdS4du7qxoE%2F7g%2B8DzfMeGv3xvM1dWm3OUAWcWb9FbJ9eYO95TRYr5qOau8U%2FT2h0KKLnN%2FRApoa9K5cDUe62qJOuq%2BRguTf1uHj18WM5A1XJyAUARBqZd6HCxZHagEgZemWPTgbnOr%2FolU7anj%2FKN7KJp4%2FRlkEYSB3bgZtcl530GtoIaF13DF%2BwS%2FFWR0aeSwbsQsmhfn7QLga7KZe%2B1F7nXpxfoUMxulqOse%2FW6nu1%2F0f%2BLvPkGTkrCAjZ8SRwKJHkNR5kr8AcOhPEm7IykjenWpUJJcx46j%2F5XXFArrckKOiw4DK9FHx6fhSX1rcyRAYryGxgUUDG6AvXjiZOce0H8aNomliT0hsIc5d73ErIkKv25Ow2eWGZ0bRAIkoPVmpCkHbpJPL5L4FxHSPQiPmc3kdqSKO0Jtp%2FTOUkO9syIiy8ljakZX7M%2Fpc4V1lLj9A0qbrQxokNFRXllciLN2loFQoIhJ2orNxxYIdopN1mAVDD2xezDBjqkARFmEogdY6gxORJgnlq0ab2mUv2p1oQXI8pi2HbaOZb3ktYQsh8PRKxP4QHiDPXS%2BbSakoiCNVWndpHYih1iSGJ2fQZDTAssUouNhT5RdgvGODezv7cNQQ34OsqBzjTdG%2BNrWiqwruR5g8ZyUdT8Xr93tTccrqLUi28LAbWfUHemeB0OjVK%2BDa4KNf1ogk4tcw7VfTgk1A2oj9JzhWWQ75aKHAtW&X-Amz-Signature=8e904197136a2ad2022d19baa18af5b5d80f80559c5626a25bcd60a4b1c60d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJFKQHG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSmMrMiF0oYbwhV2sJJqc8gAIXTd%2Bx6y%2B8x55sZZcSDgIhAKu7ZP50T8UXlLXxGJZ3xoW26OoObDm1Wa5IzL74dTptKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc%2BLTpF%2BJ%2FJvLJ%2FXcq3AO5qi9p44V2hJ58yp0nAZx5aqcf8Lh3rRHnVH%2FpGdW9SOxXdnpRHzl5%2FP3oYI9AZ%2B2QWkP%2FdxtHC7iS5Kl2UGtxDotgaPk2S%2FJsWleUY3flpI8oYIS2gQ%2F9PVHtxBciUATfN3LBDgwq1pkdS4du7qxoE%2F7g%2B8DzfMeGv3xvM1dWm3OUAWcWb9FbJ9eYO95TRYr5qOau8U%2FT2h0KKLnN%2FRApoa9K5cDUe62qJOuq%2BRguTf1uHj18WM5A1XJyAUARBqZd6HCxZHagEgZemWPTgbnOr%2FolU7anj%2FKN7KJp4%2FRlkEYSB3bgZtcl530GtoIaF13DF%2BwS%2FFWR0aeSwbsQsmhfn7QLga7KZe%2B1F7nXpxfoUMxulqOse%2FW6nu1%2F0f%2BLvPkGTkrCAjZ8SRwKJHkNR5kr8AcOhPEm7IykjenWpUJJcx46j%2F5XXFArrckKOiw4DK9FHx6fhSX1rcyRAYryGxgUUDG6AvXjiZOce0H8aNomliT0hsIc5d73ErIkKv25Ow2eWGZ0bRAIkoPVmpCkHbpJPL5L4FxHSPQiPmc3kdqSKO0Jtp%2FTOUkO9syIiy8ljakZX7M%2Fpc4V1lLj9A0qbrQxokNFRXllciLN2loFQoIhJ2orNxxYIdopN1mAVDD2xezDBjqkARFmEogdY6gxORJgnlq0ab2mUv2p1oQXI8pi2HbaOZb3ktYQsh8PRKxP4QHiDPXS%2BbSakoiCNVWndpHYih1iSGJ2fQZDTAssUouNhT5RdgvGODezv7cNQQ34OsqBzjTdG%2BNrWiqwruR5g8ZyUdT8Xr93tTccrqLUi28LAbWfUHemeB0OjVK%2BDa4KNf1ogk4tcw7VfTgk1A2oj9JzhWWQ75aKHAtW&X-Amz-Signature=51dc3c20049d6c4b63d40bd66aeb581b49607de63db71184014316af1958e39f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJFKQHG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSmMrMiF0oYbwhV2sJJqc8gAIXTd%2Bx6y%2B8x55sZZcSDgIhAKu7ZP50T8UXlLXxGJZ3xoW26OoObDm1Wa5IzL74dTptKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc%2BLTpF%2BJ%2FJvLJ%2FXcq3AO5qi9p44V2hJ58yp0nAZx5aqcf8Lh3rRHnVH%2FpGdW9SOxXdnpRHzl5%2FP3oYI9AZ%2B2QWkP%2FdxtHC7iS5Kl2UGtxDotgaPk2S%2FJsWleUY3flpI8oYIS2gQ%2F9PVHtxBciUATfN3LBDgwq1pkdS4du7qxoE%2F7g%2B8DzfMeGv3xvM1dWm3OUAWcWb9FbJ9eYO95TRYr5qOau8U%2FT2h0KKLnN%2FRApoa9K5cDUe62qJOuq%2BRguTf1uHj18WM5A1XJyAUARBqZd6HCxZHagEgZemWPTgbnOr%2FolU7anj%2FKN7KJp4%2FRlkEYSB3bgZtcl530GtoIaF13DF%2BwS%2FFWR0aeSwbsQsmhfn7QLga7KZe%2B1F7nXpxfoUMxulqOse%2FW6nu1%2F0f%2BLvPkGTkrCAjZ8SRwKJHkNR5kr8AcOhPEm7IykjenWpUJJcx46j%2F5XXFArrckKOiw4DK9FHx6fhSX1rcyRAYryGxgUUDG6AvXjiZOce0H8aNomliT0hsIc5d73ErIkKv25Ow2eWGZ0bRAIkoPVmpCkHbpJPL5L4FxHSPQiPmc3kdqSKO0Jtp%2FTOUkO9syIiy8ljakZX7M%2Fpc4V1lLj9A0qbrQxokNFRXllciLN2loFQoIhJ2orNxxYIdopN1mAVDD2xezDBjqkARFmEogdY6gxORJgnlq0ab2mUv2p1oQXI8pi2HbaOZb3ktYQsh8PRKxP4QHiDPXS%2BbSakoiCNVWndpHYih1iSGJ2fQZDTAssUouNhT5RdgvGODezv7cNQQ34OsqBzjTdG%2BNrWiqwruR5g8ZyUdT8Xr93tTccrqLUi28LAbWfUHemeB0OjVK%2BDa4KNf1ogk4tcw7VfTgk1A2oj9JzhWWQ75aKHAtW&X-Amz-Signature=f263edabc3a86e0323821a68c8fcf76ddb1b463438980e54365ae4b6b77829b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJFKQHG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSmMrMiF0oYbwhV2sJJqc8gAIXTd%2Bx6y%2B8x55sZZcSDgIhAKu7ZP50T8UXlLXxGJZ3xoW26OoObDm1Wa5IzL74dTptKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc%2BLTpF%2BJ%2FJvLJ%2FXcq3AO5qi9p44V2hJ58yp0nAZx5aqcf8Lh3rRHnVH%2FpGdW9SOxXdnpRHzl5%2FP3oYI9AZ%2B2QWkP%2FdxtHC7iS5Kl2UGtxDotgaPk2S%2FJsWleUY3flpI8oYIS2gQ%2F9PVHtxBciUATfN3LBDgwq1pkdS4du7qxoE%2F7g%2B8DzfMeGv3xvM1dWm3OUAWcWb9FbJ9eYO95TRYr5qOau8U%2FT2h0KKLnN%2FRApoa9K5cDUe62qJOuq%2BRguTf1uHj18WM5A1XJyAUARBqZd6HCxZHagEgZemWPTgbnOr%2FolU7anj%2FKN7KJp4%2FRlkEYSB3bgZtcl530GtoIaF13DF%2BwS%2FFWR0aeSwbsQsmhfn7QLga7KZe%2B1F7nXpxfoUMxulqOse%2FW6nu1%2F0f%2BLvPkGTkrCAjZ8SRwKJHkNR5kr8AcOhPEm7IykjenWpUJJcx46j%2F5XXFArrckKOiw4DK9FHx6fhSX1rcyRAYryGxgUUDG6AvXjiZOce0H8aNomliT0hsIc5d73ErIkKv25Ow2eWGZ0bRAIkoPVmpCkHbpJPL5L4FxHSPQiPmc3kdqSKO0Jtp%2FTOUkO9syIiy8ljakZX7M%2Fpc4V1lLj9A0qbrQxokNFRXllciLN2loFQoIhJ2orNxxYIdopN1mAVDD2xezDBjqkARFmEogdY6gxORJgnlq0ab2mUv2p1oQXI8pi2HbaOZb3ktYQsh8PRKxP4QHiDPXS%2BbSakoiCNVWndpHYih1iSGJ2fQZDTAssUouNhT5RdgvGODezv7cNQQ34OsqBzjTdG%2BNrWiqwruR5g8ZyUdT8Xr93tTccrqLUi28LAbWfUHemeB0OjVK%2BDa4KNf1ogk4tcw7VfTgk1A2oj9JzhWWQ75aKHAtW&X-Amz-Signature=0b48f0561fe9652473ca769d03f28170a82f0a0721a8f035504dd8837ef1507d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJFKQHG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSmMrMiF0oYbwhV2sJJqc8gAIXTd%2Bx6y%2B8x55sZZcSDgIhAKu7ZP50T8UXlLXxGJZ3xoW26OoObDm1Wa5IzL74dTptKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc%2BLTpF%2BJ%2FJvLJ%2FXcq3AO5qi9p44V2hJ58yp0nAZx5aqcf8Lh3rRHnVH%2FpGdW9SOxXdnpRHzl5%2FP3oYI9AZ%2B2QWkP%2FdxtHC7iS5Kl2UGtxDotgaPk2S%2FJsWleUY3flpI8oYIS2gQ%2F9PVHtxBciUATfN3LBDgwq1pkdS4du7qxoE%2F7g%2B8DzfMeGv3xvM1dWm3OUAWcWb9FbJ9eYO95TRYr5qOau8U%2FT2h0KKLnN%2FRApoa9K5cDUe62qJOuq%2BRguTf1uHj18WM5A1XJyAUARBqZd6HCxZHagEgZemWPTgbnOr%2FolU7anj%2FKN7KJp4%2FRlkEYSB3bgZtcl530GtoIaF13DF%2BwS%2FFWR0aeSwbsQsmhfn7QLga7KZe%2B1F7nXpxfoUMxulqOse%2FW6nu1%2F0f%2BLvPkGTkrCAjZ8SRwKJHkNR5kr8AcOhPEm7IykjenWpUJJcx46j%2F5XXFArrckKOiw4DK9FHx6fhSX1rcyRAYryGxgUUDG6AvXjiZOce0H8aNomliT0hsIc5d73ErIkKv25Ow2eWGZ0bRAIkoPVmpCkHbpJPL5L4FxHSPQiPmc3kdqSKO0Jtp%2FTOUkO9syIiy8ljakZX7M%2Fpc4V1lLj9A0qbrQxokNFRXllciLN2loFQoIhJ2orNxxYIdopN1mAVDD2xezDBjqkARFmEogdY6gxORJgnlq0ab2mUv2p1oQXI8pi2HbaOZb3ktYQsh8PRKxP4QHiDPXS%2BbSakoiCNVWndpHYih1iSGJ2fQZDTAssUouNhT5RdgvGODezv7cNQQ34OsqBzjTdG%2BNrWiqwruR5g8ZyUdT8Xr93tTccrqLUi28LAbWfUHemeB0OjVK%2BDa4KNf1ogk4tcw7VfTgk1A2oj9JzhWWQ75aKHAtW&X-Amz-Signature=f8a76469434bdcbcb867cfeed8df1e1254fbd8625efad2da60a7d938cb444602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJFKQHG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSmMrMiF0oYbwhV2sJJqc8gAIXTd%2Bx6y%2B8x55sZZcSDgIhAKu7ZP50T8UXlLXxGJZ3xoW26OoObDm1Wa5IzL74dTptKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc%2BLTpF%2BJ%2FJvLJ%2FXcq3AO5qi9p44V2hJ58yp0nAZx5aqcf8Lh3rRHnVH%2FpGdW9SOxXdnpRHzl5%2FP3oYI9AZ%2B2QWkP%2FdxtHC7iS5Kl2UGtxDotgaPk2S%2FJsWleUY3flpI8oYIS2gQ%2F9PVHtxBciUATfN3LBDgwq1pkdS4du7qxoE%2F7g%2B8DzfMeGv3xvM1dWm3OUAWcWb9FbJ9eYO95TRYr5qOau8U%2FT2h0KKLnN%2FRApoa9K5cDUe62qJOuq%2BRguTf1uHj18WM5A1XJyAUARBqZd6HCxZHagEgZemWPTgbnOr%2FolU7anj%2FKN7KJp4%2FRlkEYSB3bgZtcl530GtoIaF13DF%2BwS%2FFWR0aeSwbsQsmhfn7QLga7KZe%2B1F7nXpxfoUMxulqOse%2FW6nu1%2F0f%2BLvPkGTkrCAjZ8SRwKJHkNR5kr8AcOhPEm7IykjenWpUJJcx46j%2F5XXFArrckKOiw4DK9FHx6fhSX1rcyRAYryGxgUUDG6AvXjiZOce0H8aNomliT0hsIc5d73ErIkKv25Ow2eWGZ0bRAIkoPVmpCkHbpJPL5L4FxHSPQiPmc3kdqSKO0Jtp%2FTOUkO9syIiy8ljakZX7M%2Fpc4V1lLj9A0qbrQxokNFRXllciLN2loFQoIhJ2orNxxYIdopN1mAVDD2xezDBjqkARFmEogdY6gxORJgnlq0ab2mUv2p1oQXI8pi2HbaOZb3ktYQsh8PRKxP4QHiDPXS%2BbSakoiCNVWndpHYih1iSGJ2fQZDTAssUouNhT5RdgvGODezv7cNQQ34OsqBzjTdG%2BNrWiqwruR5g8ZyUdT8Xr93tTccrqLUi28LAbWfUHemeB0OjVK%2BDa4KNf1ogk4tcw7VfTgk1A2oj9JzhWWQ75aKHAtW&X-Amz-Signature=07398e18d55c10693554ec7446b1bd9f63fcd10af97b8b7e1b4f7ce7255a7b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
