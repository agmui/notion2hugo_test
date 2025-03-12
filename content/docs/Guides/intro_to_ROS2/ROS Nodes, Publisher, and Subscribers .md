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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSF44ST%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCICi2A16NtlgK%2FCY76CVDMmv9wZbr4dkaZHMHgmDsJoZNAiEAzRl4U4l7f62Uuqseshfuc1otQyRevhErmWP57JKOitAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNykx482fB4ou5OSzSrcA9VRbmbWSqbMtZmlVKiKDGhumx7%2BScPnpuolNIThTJf6qUn%2Fm%2FZyT4fBKXBln%2B4c7FO0pPHGHK821Akzl3lwONcrTXuUXC6ajyiqWyTdWJIk4EVLBUdAvEYfbA6nAvetDETZIWjMjJnRvQfYX%2FE1kNlKgB1NNhHjvW4NRIp5jxNMPxxLBbABJkfMtOgy293T9UJUX0Fwgn5deJpD5%2BBa6ymC%2B09YPqL%2BP0PV2XZnDlMqlU%2BqBrh2Q2u6TsmiIs47LS1ZU4lawp05ZZTUf36Vxfcq0tcPkiJzJNLvQWaJs32cAwezliMW%2BqPTO9wHfRyFCD2%2BkNsVe0ZAYsyGRdAdLxZvqGZg4DDModq243qXPWS3TR5vHk%2Fs5IoBLS9ScbXmEapycWWa6FsLBYoQtZaX2oWJtSlGSoqht%2BpRh6%2Fij9Oru%2BucY3uDdu0kvCEyHBAYCqQgBazVtNqBfLytw4lrvIC%2BvEVSEf1puJoD%2B8rRT5tfz7eV37JTK2HuNa2ZVVqG%2BG9T8askKMzrMrJImdrNsCcOf962GWmzSTjYrbIHHqiJ9HBKxn%2BSkjGm8RjqGRevKyZ0ZR9TnZFfE4dgPN1pCOqO0f5%2BVHHcZnJ0jSfEeNJeLCqobL4whsRkgehMMKqcxb4GOqUBSU%2FdAB8FjGmrFg11s0El3%2FgS6JTYNSRDxUI%2FGSbHrjr8l8K4GPehkJcS9qWbm54KasOnolJLbBzrI1YSmvKPf8EAOvA8MojlBW6ulKOdkx2d3hj5x%2Bkt9w7jJIXcgaB4SPp6%2Bmmb%2FiO0PiT7IcBOLWgPoO66164UZD6IbNdn3T6GSlhwfiRMbJG0%2FhCdS%2Fly87PaK0tULBVGxg2KVfOUD3Zvowew&X-Amz-Signature=e0b207f659d8d8f9cfdac0810e5f7a84982344cbb6c4d3e05a9d8deeb51b2066&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSF44ST%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCICi2A16NtlgK%2FCY76CVDMmv9wZbr4dkaZHMHgmDsJoZNAiEAzRl4U4l7f62Uuqseshfuc1otQyRevhErmWP57JKOitAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNykx482fB4ou5OSzSrcA9VRbmbWSqbMtZmlVKiKDGhumx7%2BScPnpuolNIThTJf6qUn%2Fm%2FZyT4fBKXBln%2B4c7FO0pPHGHK821Akzl3lwONcrTXuUXC6ajyiqWyTdWJIk4EVLBUdAvEYfbA6nAvetDETZIWjMjJnRvQfYX%2FE1kNlKgB1NNhHjvW4NRIp5jxNMPxxLBbABJkfMtOgy293T9UJUX0Fwgn5deJpD5%2BBa6ymC%2B09YPqL%2BP0PV2XZnDlMqlU%2BqBrh2Q2u6TsmiIs47LS1ZU4lawp05ZZTUf36Vxfcq0tcPkiJzJNLvQWaJs32cAwezliMW%2BqPTO9wHfRyFCD2%2BkNsVe0ZAYsyGRdAdLxZvqGZg4DDModq243qXPWS3TR5vHk%2Fs5IoBLS9ScbXmEapycWWa6FsLBYoQtZaX2oWJtSlGSoqht%2BpRh6%2Fij9Oru%2BucY3uDdu0kvCEyHBAYCqQgBazVtNqBfLytw4lrvIC%2BvEVSEf1puJoD%2B8rRT5tfz7eV37JTK2HuNa2ZVVqG%2BG9T8askKMzrMrJImdrNsCcOf962GWmzSTjYrbIHHqiJ9HBKxn%2BSkjGm8RjqGRevKyZ0ZR9TnZFfE4dgPN1pCOqO0f5%2BVHHcZnJ0jSfEeNJeLCqobL4whsRkgehMMKqcxb4GOqUBSU%2FdAB8FjGmrFg11s0El3%2FgS6JTYNSRDxUI%2FGSbHrjr8l8K4GPehkJcS9qWbm54KasOnolJLbBzrI1YSmvKPf8EAOvA8MojlBW6ulKOdkx2d3hj5x%2Bkt9w7jJIXcgaB4SPp6%2Bmmb%2FiO0PiT7IcBOLWgPoO66164UZD6IbNdn3T6GSlhwfiRMbJG0%2FhCdS%2Fly87PaK0tULBVGxg2KVfOUD3Zvowew&X-Amz-Signature=ee4ff12ee80ca4adbc85285befa4da4784a2f99545b6b66c737fa68ea4068501&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSF44ST%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCICi2A16NtlgK%2FCY76CVDMmv9wZbr4dkaZHMHgmDsJoZNAiEAzRl4U4l7f62Uuqseshfuc1otQyRevhErmWP57JKOitAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNykx482fB4ou5OSzSrcA9VRbmbWSqbMtZmlVKiKDGhumx7%2BScPnpuolNIThTJf6qUn%2Fm%2FZyT4fBKXBln%2B4c7FO0pPHGHK821Akzl3lwONcrTXuUXC6ajyiqWyTdWJIk4EVLBUdAvEYfbA6nAvetDETZIWjMjJnRvQfYX%2FE1kNlKgB1NNhHjvW4NRIp5jxNMPxxLBbABJkfMtOgy293T9UJUX0Fwgn5deJpD5%2BBa6ymC%2B09YPqL%2BP0PV2XZnDlMqlU%2BqBrh2Q2u6TsmiIs47LS1ZU4lawp05ZZTUf36Vxfcq0tcPkiJzJNLvQWaJs32cAwezliMW%2BqPTO9wHfRyFCD2%2BkNsVe0ZAYsyGRdAdLxZvqGZg4DDModq243qXPWS3TR5vHk%2Fs5IoBLS9ScbXmEapycWWa6FsLBYoQtZaX2oWJtSlGSoqht%2BpRh6%2Fij9Oru%2BucY3uDdu0kvCEyHBAYCqQgBazVtNqBfLytw4lrvIC%2BvEVSEf1puJoD%2B8rRT5tfz7eV37JTK2HuNa2ZVVqG%2BG9T8askKMzrMrJImdrNsCcOf962GWmzSTjYrbIHHqiJ9HBKxn%2BSkjGm8RjqGRevKyZ0ZR9TnZFfE4dgPN1pCOqO0f5%2BVHHcZnJ0jSfEeNJeLCqobL4whsRkgehMMKqcxb4GOqUBSU%2FdAB8FjGmrFg11s0El3%2FgS6JTYNSRDxUI%2FGSbHrjr8l8K4GPehkJcS9qWbm54KasOnolJLbBzrI1YSmvKPf8EAOvA8MojlBW6ulKOdkx2d3hj5x%2Bkt9w7jJIXcgaB4SPp6%2Bmmb%2FiO0PiT7IcBOLWgPoO66164UZD6IbNdn3T6GSlhwfiRMbJG0%2FhCdS%2Fly87PaK0tULBVGxg2KVfOUD3Zvowew&X-Amz-Signature=06c8ac64b9216ef15d7c29b0d8e5086934d2c4e495a986accc53b15276a37ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSF44ST%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCICi2A16NtlgK%2FCY76CVDMmv9wZbr4dkaZHMHgmDsJoZNAiEAzRl4U4l7f62Uuqseshfuc1otQyRevhErmWP57JKOitAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNykx482fB4ou5OSzSrcA9VRbmbWSqbMtZmlVKiKDGhumx7%2BScPnpuolNIThTJf6qUn%2Fm%2FZyT4fBKXBln%2B4c7FO0pPHGHK821Akzl3lwONcrTXuUXC6ajyiqWyTdWJIk4EVLBUdAvEYfbA6nAvetDETZIWjMjJnRvQfYX%2FE1kNlKgB1NNhHjvW4NRIp5jxNMPxxLBbABJkfMtOgy293T9UJUX0Fwgn5deJpD5%2BBa6ymC%2B09YPqL%2BP0PV2XZnDlMqlU%2BqBrh2Q2u6TsmiIs47LS1ZU4lawp05ZZTUf36Vxfcq0tcPkiJzJNLvQWaJs32cAwezliMW%2BqPTO9wHfRyFCD2%2BkNsVe0ZAYsyGRdAdLxZvqGZg4DDModq243qXPWS3TR5vHk%2Fs5IoBLS9ScbXmEapycWWa6FsLBYoQtZaX2oWJtSlGSoqht%2BpRh6%2Fij9Oru%2BucY3uDdu0kvCEyHBAYCqQgBazVtNqBfLytw4lrvIC%2BvEVSEf1puJoD%2B8rRT5tfz7eV37JTK2HuNa2ZVVqG%2BG9T8askKMzrMrJImdrNsCcOf962GWmzSTjYrbIHHqiJ9HBKxn%2BSkjGm8RjqGRevKyZ0ZR9TnZFfE4dgPN1pCOqO0f5%2BVHHcZnJ0jSfEeNJeLCqobL4whsRkgehMMKqcxb4GOqUBSU%2FdAB8FjGmrFg11s0El3%2FgS6JTYNSRDxUI%2FGSbHrjr8l8K4GPehkJcS9qWbm54KasOnolJLbBzrI1YSmvKPf8EAOvA8MojlBW6ulKOdkx2d3hj5x%2Bkt9w7jJIXcgaB4SPp6%2Bmmb%2FiO0PiT7IcBOLWgPoO66164UZD6IbNdn3T6GSlhwfiRMbJG0%2FhCdS%2Fly87PaK0tULBVGxg2KVfOUD3Zvowew&X-Amz-Signature=17341dfa0511509b87c549cdcc916f95e75cf31ae7f917e1216224e2ae8998ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSF44ST%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCICi2A16NtlgK%2FCY76CVDMmv9wZbr4dkaZHMHgmDsJoZNAiEAzRl4U4l7f62Uuqseshfuc1otQyRevhErmWP57JKOitAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNykx482fB4ou5OSzSrcA9VRbmbWSqbMtZmlVKiKDGhumx7%2BScPnpuolNIThTJf6qUn%2Fm%2FZyT4fBKXBln%2B4c7FO0pPHGHK821Akzl3lwONcrTXuUXC6ajyiqWyTdWJIk4EVLBUdAvEYfbA6nAvetDETZIWjMjJnRvQfYX%2FE1kNlKgB1NNhHjvW4NRIp5jxNMPxxLBbABJkfMtOgy293T9UJUX0Fwgn5deJpD5%2BBa6ymC%2B09YPqL%2BP0PV2XZnDlMqlU%2BqBrh2Q2u6TsmiIs47LS1ZU4lawp05ZZTUf36Vxfcq0tcPkiJzJNLvQWaJs32cAwezliMW%2BqPTO9wHfRyFCD2%2BkNsVe0ZAYsyGRdAdLxZvqGZg4DDModq243qXPWS3TR5vHk%2Fs5IoBLS9ScbXmEapycWWa6FsLBYoQtZaX2oWJtSlGSoqht%2BpRh6%2Fij9Oru%2BucY3uDdu0kvCEyHBAYCqQgBazVtNqBfLytw4lrvIC%2BvEVSEf1puJoD%2B8rRT5tfz7eV37JTK2HuNa2ZVVqG%2BG9T8askKMzrMrJImdrNsCcOf962GWmzSTjYrbIHHqiJ9HBKxn%2BSkjGm8RjqGRevKyZ0ZR9TnZFfE4dgPN1pCOqO0f5%2BVHHcZnJ0jSfEeNJeLCqobL4whsRkgehMMKqcxb4GOqUBSU%2FdAB8FjGmrFg11s0El3%2FgS6JTYNSRDxUI%2FGSbHrjr8l8K4GPehkJcS9qWbm54KasOnolJLbBzrI1YSmvKPf8EAOvA8MojlBW6ulKOdkx2d3hj5x%2Bkt9w7jJIXcgaB4SPp6%2Bmmb%2FiO0PiT7IcBOLWgPoO66164UZD6IbNdn3T6GSlhwfiRMbJG0%2FhCdS%2Fly87PaK0tULBVGxg2KVfOUD3Zvowew&X-Amz-Signature=7565e31fb2339abb94c007e049948069884f3d27098865d852b47839fafd0286&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSF44ST%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCICi2A16NtlgK%2FCY76CVDMmv9wZbr4dkaZHMHgmDsJoZNAiEAzRl4U4l7f62Uuqseshfuc1otQyRevhErmWP57JKOitAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNykx482fB4ou5OSzSrcA9VRbmbWSqbMtZmlVKiKDGhumx7%2BScPnpuolNIThTJf6qUn%2Fm%2FZyT4fBKXBln%2B4c7FO0pPHGHK821Akzl3lwONcrTXuUXC6ajyiqWyTdWJIk4EVLBUdAvEYfbA6nAvetDETZIWjMjJnRvQfYX%2FE1kNlKgB1NNhHjvW4NRIp5jxNMPxxLBbABJkfMtOgy293T9UJUX0Fwgn5deJpD5%2BBa6ymC%2B09YPqL%2BP0PV2XZnDlMqlU%2BqBrh2Q2u6TsmiIs47LS1ZU4lawp05ZZTUf36Vxfcq0tcPkiJzJNLvQWaJs32cAwezliMW%2BqPTO9wHfRyFCD2%2BkNsVe0ZAYsyGRdAdLxZvqGZg4DDModq243qXPWS3TR5vHk%2Fs5IoBLS9ScbXmEapycWWa6FsLBYoQtZaX2oWJtSlGSoqht%2BpRh6%2Fij9Oru%2BucY3uDdu0kvCEyHBAYCqQgBazVtNqBfLytw4lrvIC%2BvEVSEf1puJoD%2B8rRT5tfz7eV37JTK2HuNa2ZVVqG%2BG9T8askKMzrMrJImdrNsCcOf962GWmzSTjYrbIHHqiJ9HBKxn%2BSkjGm8RjqGRevKyZ0ZR9TnZFfE4dgPN1pCOqO0f5%2BVHHcZnJ0jSfEeNJeLCqobL4whsRkgehMMKqcxb4GOqUBSU%2FdAB8FjGmrFg11s0El3%2FgS6JTYNSRDxUI%2FGSbHrjr8l8K4GPehkJcS9qWbm54KasOnolJLbBzrI1YSmvKPf8EAOvA8MojlBW6ulKOdkx2d3hj5x%2Bkt9w7jJIXcgaB4SPp6%2Bmmb%2FiO0PiT7IcBOLWgPoO66164UZD6IbNdn3T6GSlhwfiRMbJG0%2FhCdS%2Fly87PaK0tULBVGxg2KVfOUD3Zvowew&X-Amz-Signature=314fd2c0cfc143fc4bdea9e1be20f9336dec81ed585dfc11b61be08a579dfc27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSF44ST%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCICi2A16NtlgK%2FCY76CVDMmv9wZbr4dkaZHMHgmDsJoZNAiEAzRl4U4l7f62Uuqseshfuc1otQyRevhErmWP57JKOitAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNykx482fB4ou5OSzSrcA9VRbmbWSqbMtZmlVKiKDGhumx7%2BScPnpuolNIThTJf6qUn%2Fm%2FZyT4fBKXBln%2B4c7FO0pPHGHK821Akzl3lwONcrTXuUXC6ajyiqWyTdWJIk4EVLBUdAvEYfbA6nAvetDETZIWjMjJnRvQfYX%2FE1kNlKgB1NNhHjvW4NRIp5jxNMPxxLBbABJkfMtOgy293T9UJUX0Fwgn5deJpD5%2BBa6ymC%2B09YPqL%2BP0PV2XZnDlMqlU%2BqBrh2Q2u6TsmiIs47LS1ZU4lawp05ZZTUf36Vxfcq0tcPkiJzJNLvQWaJs32cAwezliMW%2BqPTO9wHfRyFCD2%2BkNsVe0ZAYsyGRdAdLxZvqGZg4DDModq243qXPWS3TR5vHk%2Fs5IoBLS9ScbXmEapycWWa6FsLBYoQtZaX2oWJtSlGSoqht%2BpRh6%2Fij9Oru%2BucY3uDdu0kvCEyHBAYCqQgBazVtNqBfLytw4lrvIC%2BvEVSEf1puJoD%2B8rRT5tfz7eV37JTK2HuNa2ZVVqG%2BG9T8askKMzrMrJImdrNsCcOf962GWmzSTjYrbIHHqiJ9HBKxn%2BSkjGm8RjqGRevKyZ0ZR9TnZFfE4dgPN1pCOqO0f5%2BVHHcZnJ0jSfEeNJeLCqobL4whsRkgehMMKqcxb4GOqUBSU%2FdAB8FjGmrFg11s0El3%2FgS6JTYNSRDxUI%2FGSbHrjr8l8K4GPehkJcS9qWbm54KasOnolJLbBzrI1YSmvKPf8EAOvA8MojlBW6ulKOdkx2d3hj5x%2Bkt9w7jJIXcgaB4SPp6%2Bmmb%2FiO0PiT7IcBOLWgPoO66164UZD6IbNdn3T6GSlhwfiRMbJG0%2FhCdS%2Fly87PaK0tULBVGxg2KVfOUD3Zvowew&X-Amz-Signature=9b63afa2adcff6cbb622708c3fec562730b029790939d745d459f3f428622f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSF44ST%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCICi2A16NtlgK%2FCY76CVDMmv9wZbr4dkaZHMHgmDsJoZNAiEAzRl4U4l7f62Uuqseshfuc1otQyRevhErmWP57JKOitAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNykx482fB4ou5OSzSrcA9VRbmbWSqbMtZmlVKiKDGhumx7%2BScPnpuolNIThTJf6qUn%2Fm%2FZyT4fBKXBln%2B4c7FO0pPHGHK821Akzl3lwONcrTXuUXC6ajyiqWyTdWJIk4EVLBUdAvEYfbA6nAvetDETZIWjMjJnRvQfYX%2FE1kNlKgB1NNhHjvW4NRIp5jxNMPxxLBbABJkfMtOgy293T9UJUX0Fwgn5deJpD5%2BBa6ymC%2B09YPqL%2BP0PV2XZnDlMqlU%2BqBrh2Q2u6TsmiIs47LS1ZU4lawp05ZZTUf36Vxfcq0tcPkiJzJNLvQWaJs32cAwezliMW%2BqPTO9wHfRyFCD2%2BkNsVe0ZAYsyGRdAdLxZvqGZg4DDModq243qXPWS3TR5vHk%2Fs5IoBLS9ScbXmEapycWWa6FsLBYoQtZaX2oWJtSlGSoqht%2BpRh6%2Fij9Oru%2BucY3uDdu0kvCEyHBAYCqQgBazVtNqBfLytw4lrvIC%2BvEVSEf1puJoD%2B8rRT5tfz7eV37JTK2HuNa2ZVVqG%2BG9T8askKMzrMrJImdrNsCcOf962GWmzSTjYrbIHHqiJ9HBKxn%2BSkjGm8RjqGRevKyZ0ZR9TnZFfE4dgPN1pCOqO0f5%2BVHHcZnJ0jSfEeNJeLCqobL4whsRkgehMMKqcxb4GOqUBSU%2FdAB8FjGmrFg11s0El3%2FgS6JTYNSRDxUI%2FGSbHrjr8l8K4GPehkJcS9qWbm54KasOnolJLbBzrI1YSmvKPf8EAOvA8MojlBW6ulKOdkx2d3hj5x%2Bkt9w7jJIXcgaB4SPp6%2Bmmb%2FiO0PiT7IcBOLWgPoO66164UZD6IbNdn3T6GSlhwfiRMbJG0%2FhCdS%2Fly87PaK0tULBVGxg2KVfOUD3Zvowew&X-Amz-Signature=7e714ad289a51c7d10df8195450617f55f357df0f3fa16bb42c16ae4d041d6de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
