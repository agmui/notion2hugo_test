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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDKZ7CRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDvgRqmmYq9TN%2F97eVhVdOWGNeS7mZmqrJ7uM%2BKkg3AHAIhAMymJ8T7hQkO0iQMKG0iUUUVP8SFw1NUMjRUev8g4iPvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyagvb6xPCyK9Rw49Yq3AMiNAGx7uxemFCMcMY1dUiLldNyKv7S3NbRRzX2I8XgdgMJMQR29olIhRPaFTTzA%2Bjn%2FRhjB0lHXlXH2d%2FKQo06Rdflv4JT1htKlFsESwhvpWHK1MLMk1tvd4rmfd1cTHqgl8s4LVRcgEfABzGnQ52munoW5cIMzymc4UPj8Ai3b7MyWU9bGov5W4Q0IOrrTKsYfj%2Bj1Uc1RBmK%2F%2B1jc9gSFQouCzTTp5pFbzAfGvvsZE%2Fe27a4PxsB4tRyUz7uv2M7cHcov0Y8FjYqhTVixaPDSgCT6FP3VUS3gLrYvGp4a3krmMfTXimZEBbwenOoRebdJdkJBkO0z96IVlH5izr5Aq94IbX7BWSF634aYfkD4kPMcDPCseFDOhaajdxsKTKn%2FmV%2FrJcnEls9gQpr%2FBMSX%2BYADQVD%2Bv9M5%2FQR0UMKOoAL3EcVzWSqj2d61plyj43TcDC7RYiZs0Rx8lU6YGkSVFpHByNJHo4pCxSCE4DKJIuYDxQi%2B%2BtHDyFStCzQp7bhvA3dXvVuCRWm6asaKwfNnNxFAp3oOvxnJO9hFuEEOU0JtEzGQ33bip24G1vIphOEjfL780XjcYoNv4etbQohZ85PAkhDgNQBwRM%2FDb2mnVulO%2F76WqKd%2BNy9zjDJjZ3EBjqkAcWP%2FXZ88SrIy%2BP8Cl%2FOgNMpt335br1y6rv8q0zvjtMS%2FC1Y3w%2Fpo4i%2B%2BiLLDCfnjohnvTmKaoCpQW7CD%2FwjIy8IDKyl02guVQ%2FOguX7f8qF7uMspahqfrdPir6rbSOKFM7uWAh2023CEgQf0zJO7lj4uwwWfASuRS8LpYHtH5MJCWm9qiAMkTGE%2FOiBenR%2BLOtar9VWYhxmPWfSYju2dgqA8ORr&X-Amz-Signature=38ed453db52e73bc9ec0b635b737deb75a8dcb1f549ec9e3bd2603d4270d7231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDKZ7CRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDvgRqmmYq9TN%2F97eVhVdOWGNeS7mZmqrJ7uM%2BKkg3AHAIhAMymJ8T7hQkO0iQMKG0iUUUVP8SFw1NUMjRUev8g4iPvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyagvb6xPCyK9Rw49Yq3AMiNAGx7uxemFCMcMY1dUiLldNyKv7S3NbRRzX2I8XgdgMJMQR29olIhRPaFTTzA%2Bjn%2FRhjB0lHXlXH2d%2FKQo06Rdflv4JT1htKlFsESwhvpWHK1MLMk1tvd4rmfd1cTHqgl8s4LVRcgEfABzGnQ52munoW5cIMzymc4UPj8Ai3b7MyWU9bGov5W4Q0IOrrTKsYfj%2Bj1Uc1RBmK%2F%2B1jc9gSFQouCzTTp5pFbzAfGvvsZE%2Fe27a4PxsB4tRyUz7uv2M7cHcov0Y8FjYqhTVixaPDSgCT6FP3VUS3gLrYvGp4a3krmMfTXimZEBbwenOoRebdJdkJBkO0z96IVlH5izr5Aq94IbX7BWSF634aYfkD4kPMcDPCseFDOhaajdxsKTKn%2FmV%2FrJcnEls9gQpr%2FBMSX%2BYADQVD%2Bv9M5%2FQR0UMKOoAL3EcVzWSqj2d61plyj43TcDC7RYiZs0Rx8lU6YGkSVFpHByNJHo4pCxSCE4DKJIuYDxQi%2B%2BtHDyFStCzQp7bhvA3dXvVuCRWm6asaKwfNnNxFAp3oOvxnJO9hFuEEOU0JtEzGQ33bip24G1vIphOEjfL780XjcYoNv4etbQohZ85PAkhDgNQBwRM%2FDb2mnVulO%2F76WqKd%2BNy9zjDJjZ3EBjqkAcWP%2FXZ88SrIy%2BP8Cl%2FOgNMpt335br1y6rv8q0zvjtMS%2FC1Y3w%2Fpo4i%2B%2BiLLDCfnjohnvTmKaoCpQW7CD%2FwjIy8IDKyl02guVQ%2FOguX7f8qF7uMspahqfrdPir6rbSOKFM7uWAh2023CEgQf0zJO7lj4uwwWfASuRS8LpYHtH5MJCWm9qiAMkTGE%2FOiBenR%2BLOtar9VWYhxmPWfSYju2dgqA8ORr&X-Amz-Signature=7fa5a07e4dbee2cd1d264142ae9765240db562c6a65349be65741266d707422f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDKZ7CRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDvgRqmmYq9TN%2F97eVhVdOWGNeS7mZmqrJ7uM%2BKkg3AHAIhAMymJ8T7hQkO0iQMKG0iUUUVP8SFw1NUMjRUev8g4iPvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyagvb6xPCyK9Rw49Yq3AMiNAGx7uxemFCMcMY1dUiLldNyKv7S3NbRRzX2I8XgdgMJMQR29olIhRPaFTTzA%2Bjn%2FRhjB0lHXlXH2d%2FKQo06Rdflv4JT1htKlFsESwhvpWHK1MLMk1tvd4rmfd1cTHqgl8s4LVRcgEfABzGnQ52munoW5cIMzymc4UPj8Ai3b7MyWU9bGov5W4Q0IOrrTKsYfj%2Bj1Uc1RBmK%2F%2B1jc9gSFQouCzTTp5pFbzAfGvvsZE%2Fe27a4PxsB4tRyUz7uv2M7cHcov0Y8FjYqhTVixaPDSgCT6FP3VUS3gLrYvGp4a3krmMfTXimZEBbwenOoRebdJdkJBkO0z96IVlH5izr5Aq94IbX7BWSF634aYfkD4kPMcDPCseFDOhaajdxsKTKn%2FmV%2FrJcnEls9gQpr%2FBMSX%2BYADQVD%2Bv9M5%2FQR0UMKOoAL3EcVzWSqj2d61plyj43TcDC7RYiZs0Rx8lU6YGkSVFpHByNJHo4pCxSCE4DKJIuYDxQi%2B%2BtHDyFStCzQp7bhvA3dXvVuCRWm6asaKwfNnNxFAp3oOvxnJO9hFuEEOU0JtEzGQ33bip24G1vIphOEjfL780XjcYoNv4etbQohZ85PAkhDgNQBwRM%2FDb2mnVulO%2F76WqKd%2BNy9zjDJjZ3EBjqkAcWP%2FXZ88SrIy%2BP8Cl%2FOgNMpt335br1y6rv8q0zvjtMS%2FC1Y3w%2Fpo4i%2B%2BiLLDCfnjohnvTmKaoCpQW7CD%2FwjIy8IDKyl02guVQ%2FOguX7f8qF7uMspahqfrdPir6rbSOKFM7uWAh2023CEgQf0zJO7lj4uwwWfASuRS8LpYHtH5MJCWm9qiAMkTGE%2FOiBenR%2BLOtar9VWYhxmPWfSYju2dgqA8ORr&X-Amz-Signature=2b0315862623128a6c84ed3e6d80543b2416e453b5dff83c7365d57cbcfa54ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDKZ7CRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDvgRqmmYq9TN%2F97eVhVdOWGNeS7mZmqrJ7uM%2BKkg3AHAIhAMymJ8T7hQkO0iQMKG0iUUUVP8SFw1NUMjRUev8g4iPvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyagvb6xPCyK9Rw49Yq3AMiNAGx7uxemFCMcMY1dUiLldNyKv7S3NbRRzX2I8XgdgMJMQR29olIhRPaFTTzA%2Bjn%2FRhjB0lHXlXH2d%2FKQo06Rdflv4JT1htKlFsESwhvpWHK1MLMk1tvd4rmfd1cTHqgl8s4LVRcgEfABzGnQ52munoW5cIMzymc4UPj8Ai3b7MyWU9bGov5W4Q0IOrrTKsYfj%2Bj1Uc1RBmK%2F%2B1jc9gSFQouCzTTp5pFbzAfGvvsZE%2Fe27a4PxsB4tRyUz7uv2M7cHcov0Y8FjYqhTVixaPDSgCT6FP3VUS3gLrYvGp4a3krmMfTXimZEBbwenOoRebdJdkJBkO0z96IVlH5izr5Aq94IbX7BWSF634aYfkD4kPMcDPCseFDOhaajdxsKTKn%2FmV%2FrJcnEls9gQpr%2FBMSX%2BYADQVD%2Bv9M5%2FQR0UMKOoAL3EcVzWSqj2d61plyj43TcDC7RYiZs0Rx8lU6YGkSVFpHByNJHo4pCxSCE4DKJIuYDxQi%2B%2BtHDyFStCzQp7bhvA3dXvVuCRWm6asaKwfNnNxFAp3oOvxnJO9hFuEEOU0JtEzGQ33bip24G1vIphOEjfL780XjcYoNv4etbQohZ85PAkhDgNQBwRM%2FDb2mnVulO%2F76WqKd%2BNy9zjDJjZ3EBjqkAcWP%2FXZ88SrIy%2BP8Cl%2FOgNMpt335br1y6rv8q0zvjtMS%2FC1Y3w%2Fpo4i%2B%2BiLLDCfnjohnvTmKaoCpQW7CD%2FwjIy8IDKyl02guVQ%2FOguX7f8qF7uMspahqfrdPir6rbSOKFM7uWAh2023CEgQf0zJO7lj4uwwWfASuRS8LpYHtH5MJCWm9qiAMkTGE%2FOiBenR%2BLOtar9VWYhxmPWfSYju2dgqA8ORr&X-Amz-Signature=410c48e5d98cbb0631d5cd6f04e8c9b69542432becf105f11d8c32966465e2a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDKZ7CRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDvgRqmmYq9TN%2F97eVhVdOWGNeS7mZmqrJ7uM%2BKkg3AHAIhAMymJ8T7hQkO0iQMKG0iUUUVP8SFw1NUMjRUev8g4iPvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyagvb6xPCyK9Rw49Yq3AMiNAGx7uxemFCMcMY1dUiLldNyKv7S3NbRRzX2I8XgdgMJMQR29olIhRPaFTTzA%2Bjn%2FRhjB0lHXlXH2d%2FKQo06Rdflv4JT1htKlFsESwhvpWHK1MLMk1tvd4rmfd1cTHqgl8s4LVRcgEfABzGnQ52munoW5cIMzymc4UPj8Ai3b7MyWU9bGov5W4Q0IOrrTKsYfj%2Bj1Uc1RBmK%2F%2B1jc9gSFQouCzTTp5pFbzAfGvvsZE%2Fe27a4PxsB4tRyUz7uv2M7cHcov0Y8FjYqhTVixaPDSgCT6FP3VUS3gLrYvGp4a3krmMfTXimZEBbwenOoRebdJdkJBkO0z96IVlH5izr5Aq94IbX7BWSF634aYfkD4kPMcDPCseFDOhaajdxsKTKn%2FmV%2FrJcnEls9gQpr%2FBMSX%2BYADQVD%2Bv9M5%2FQR0UMKOoAL3EcVzWSqj2d61plyj43TcDC7RYiZs0Rx8lU6YGkSVFpHByNJHo4pCxSCE4DKJIuYDxQi%2B%2BtHDyFStCzQp7bhvA3dXvVuCRWm6asaKwfNnNxFAp3oOvxnJO9hFuEEOU0JtEzGQ33bip24G1vIphOEjfL780XjcYoNv4etbQohZ85PAkhDgNQBwRM%2FDb2mnVulO%2F76WqKd%2BNy9zjDJjZ3EBjqkAcWP%2FXZ88SrIy%2BP8Cl%2FOgNMpt335br1y6rv8q0zvjtMS%2FC1Y3w%2Fpo4i%2B%2BiLLDCfnjohnvTmKaoCpQW7CD%2FwjIy8IDKyl02guVQ%2FOguX7f8qF7uMspahqfrdPir6rbSOKFM7uWAh2023CEgQf0zJO7lj4uwwWfASuRS8LpYHtH5MJCWm9qiAMkTGE%2FOiBenR%2BLOtar9VWYhxmPWfSYju2dgqA8ORr&X-Amz-Signature=5bf6729ed203d64e82a88e7e146aaa56d9049be13ed3b3b26b72ddbfe09c830b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDKZ7CRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDvgRqmmYq9TN%2F97eVhVdOWGNeS7mZmqrJ7uM%2BKkg3AHAIhAMymJ8T7hQkO0iQMKG0iUUUVP8SFw1NUMjRUev8g4iPvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyagvb6xPCyK9Rw49Yq3AMiNAGx7uxemFCMcMY1dUiLldNyKv7S3NbRRzX2I8XgdgMJMQR29olIhRPaFTTzA%2Bjn%2FRhjB0lHXlXH2d%2FKQo06Rdflv4JT1htKlFsESwhvpWHK1MLMk1tvd4rmfd1cTHqgl8s4LVRcgEfABzGnQ52munoW5cIMzymc4UPj8Ai3b7MyWU9bGov5W4Q0IOrrTKsYfj%2Bj1Uc1RBmK%2F%2B1jc9gSFQouCzTTp5pFbzAfGvvsZE%2Fe27a4PxsB4tRyUz7uv2M7cHcov0Y8FjYqhTVixaPDSgCT6FP3VUS3gLrYvGp4a3krmMfTXimZEBbwenOoRebdJdkJBkO0z96IVlH5izr5Aq94IbX7BWSF634aYfkD4kPMcDPCseFDOhaajdxsKTKn%2FmV%2FrJcnEls9gQpr%2FBMSX%2BYADQVD%2Bv9M5%2FQR0UMKOoAL3EcVzWSqj2d61plyj43TcDC7RYiZs0Rx8lU6YGkSVFpHByNJHo4pCxSCE4DKJIuYDxQi%2B%2BtHDyFStCzQp7bhvA3dXvVuCRWm6asaKwfNnNxFAp3oOvxnJO9hFuEEOU0JtEzGQ33bip24G1vIphOEjfL780XjcYoNv4etbQohZ85PAkhDgNQBwRM%2FDb2mnVulO%2F76WqKd%2BNy9zjDJjZ3EBjqkAcWP%2FXZ88SrIy%2BP8Cl%2FOgNMpt335br1y6rv8q0zvjtMS%2FC1Y3w%2Fpo4i%2B%2BiLLDCfnjohnvTmKaoCpQW7CD%2FwjIy8IDKyl02guVQ%2FOguX7f8qF7uMspahqfrdPir6rbSOKFM7uWAh2023CEgQf0zJO7lj4uwwWfASuRS8LpYHtH5MJCWm9qiAMkTGE%2FOiBenR%2BLOtar9VWYhxmPWfSYju2dgqA8ORr&X-Amz-Signature=b423fd721d4f52963dd675bacc5d33ad1cf1467ddf8ba0163d84ec5c982198ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDKZ7CRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDvgRqmmYq9TN%2F97eVhVdOWGNeS7mZmqrJ7uM%2BKkg3AHAIhAMymJ8T7hQkO0iQMKG0iUUUVP8SFw1NUMjRUev8g4iPvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyagvb6xPCyK9Rw49Yq3AMiNAGx7uxemFCMcMY1dUiLldNyKv7S3NbRRzX2I8XgdgMJMQR29olIhRPaFTTzA%2Bjn%2FRhjB0lHXlXH2d%2FKQo06Rdflv4JT1htKlFsESwhvpWHK1MLMk1tvd4rmfd1cTHqgl8s4LVRcgEfABzGnQ52munoW5cIMzymc4UPj8Ai3b7MyWU9bGov5W4Q0IOrrTKsYfj%2Bj1Uc1RBmK%2F%2B1jc9gSFQouCzTTp5pFbzAfGvvsZE%2Fe27a4PxsB4tRyUz7uv2M7cHcov0Y8FjYqhTVixaPDSgCT6FP3VUS3gLrYvGp4a3krmMfTXimZEBbwenOoRebdJdkJBkO0z96IVlH5izr5Aq94IbX7BWSF634aYfkD4kPMcDPCseFDOhaajdxsKTKn%2FmV%2FrJcnEls9gQpr%2FBMSX%2BYADQVD%2Bv9M5%2FQR0UMKOoAL3EcVzWSqj2d61plyj43TcDC7RYiZs0Rx8lU6YGkSVFpHByNJHo4pCxSCE4DKJIuYDxQi%2B%2BtHDyFStCzQp7bhvA3dXvVuCRWm6asaKwfNnNxFAp3oOvxnJO9hFuEEOU0JtEzGQ33bip24G1vIphOEjfL780XjcYoNv4etbQohZ85PAkhDgNQBwRM%2FDb2mnVulO%2F76WqKd%2BNy9zjDJjZ3EBjqkAcWP%2FXZ88SrIy%2BP8Cl%2FOgNMpt335br1y6rv8q0zvjtMS%2FC1Y3w%2Fpo4i%2B%2BiLLDCfnjohnvTmKaoCpQW7CD%2FwjIy8IDKyl02guVQ%2FOguX7f8qF7uMspahqfrdPir6rbSOKFM7uWAh2023CEgQf0zJO7lj4uwwWfASuRS8LpYHtH5MJCWm9qiAMkTGE%2FOiBenR%2BLOtar9VWYhxmPWfSYju2dgqA8ORr&X-Amz-Signature=9254acef8d10cb0fc1d52499f047d47f8286426ae71e18b9c7495aaccf30eaae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDKZ7CRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDvgRqmmYq9TN%2F97eVhVdOWGNeS7mZmqrJ7uM%2BKkg3AHAIhAMymJ8T7hQkO0iQMKG0iUUUVP8SFw1NUMjRUev8g4iPvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyagvb6xPCyK9Rw49Yq3AMiNAGx7uxemFCMcMY1dUiLldNyKv7S3NbRRzX2I8XgdgMJMQR29olIhRPaFTTzA%2Bjn%2FRhjB0lHXlXH2d%2FKQo06Rdflv4JT1htKlFsESwhvpWHK1MLMk1tvd4rmfd1cTHqgl8s4LVRcgEfABzGnQ52munoW5cIMzymc4UPj8Ai3b7MyWU9bGov5W4Q0IOrrTKsYfj%2Bj1Uc1RBmK%2F%2B1jc9gSFQouCzTTp5pFbzAfGvvsZE%2Fe27a4PxsB4tRyUz7uv2M7cHcov0Y8FjYqhTVixaPDSgCT6FP3VUS3gLrYvGp4a3krmMfTXimZEBbwenOoRebdJdkJBkO0z96IVlH5izr5Aq94IbX7BWSF634aYfkD4kPMcDPCseFDOhaajdxsKTKn%2FmV%2FrJcnEls9gQpr%2FBMSX%2BYADQVD%2Bv9M5%2FQR0UMKOoAL3EcVzWSqj2d61plyj43TcDC7RYiZs0Rx8lU6YGkSVFpHByNJHo4pCxSCE4DKJIuYDxQi%2B%2BtHDyFStCzQp7bhvA3dXvVuCRWm6asaKwfNnNxFAp3oOvxnJO9hFuEEOU0JtEzGQ33bip24G1vIphOEjfL780XjcYoNv4etbQohZ85PAkhDgNQBwRM%2FDb2mnVulO%2F76WqKd%2BNy9zjDJjZ3EBjqkAcWP%2FXZ88SrIy%2BP8Cl%2FOgNMpt335br1y6rv8q0zvjtMS%2FC1Y3w%2Fpo4i%2B%2BiLLDCfnjohnvTmKaoCpQW7CD%2FwjIy8IDKyl02guVQ%2FOguX7f8qF7uMspahqfrdPir6rbSOKFM7uWAh2023CEgQf0zJO7lj4uwwWfASuRS8LpYHtH5MJCWm9qiAMkTGE%2FOiBenR%2BLOtar9VWYhxmPWfSYju2dgqA8ORr&X-Amz-Signature=6c044ed10dd146cc27e45ffcd76605c601d0a90277a9fd62d3431d70ebc9d7b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
