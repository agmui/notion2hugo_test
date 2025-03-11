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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4H6WA2X%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEUYrj2B9LFS5A1fb1uz21gBWA1QrKAiDAMBIAGmJl3zAiEAoKM3WXoX9NeVXAb75UeII7RGSzW1z3587z1uW07sl0UqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVbYtcgMlIQEfxI5SrcA7Daz1rgU7zCzXs43hPt5ozShDRLCu3IZL0J75I70NIyObzPS7KpGzhrH%2Bc1gZ2k7Ou%2Ba8JmaEFHp5mC5%2BHhcX9mgb9cD1qnXSrsXidCPFGpb9SXSY%2F1EeSvQGZi0Zb%2B180FbPuDHtbE%2BXjcCyutRfjqSt43LI7sg%2FxI37O516dSDLlXjxkoe7wjrdLED0iaPpuUBYPEc29g%2B0JgAtr4Bj78oH9ELL0DnzlZ0jNIOEuDr9txIhbUjQLz6F8HKqL0vlknKH0YL%2FwKUtlNkq17CdO%2BZatlmR8mqvVF%2B6S6xhRTKMfiiOlyDd6zyuNsBCeVgu%2FzN1V71IuFXeDLcUFsGUHwLKOtnbpk6VCI1lUFq1yQqq2CutnLgcUFnSbkPDPkBeHeKUaBqh26RH3JlGfycXlVdPkYEOipW2SmwKhxuTiKSK1Vo%2B7Gdj7C4jRydnOCB50as9j5JpWGn8MY%2BVf8GDUA5nZXG%2FOzn%2BOlMN6xzEAO31%2BeBzk%2ByrdCSRimLnq8%2FU5iNxQUwp6ezkFAGhLBOUtJt8rUaDHf1P9dVUw7GhSrA6RTKwFGwbmTPXjoMUPEBT2jHZPTwmpOYH1Cx4fO%2BMb2BJh3G6oLdp0fiRQyxIXTUVAauwESlqd2gRY8MM7xv74GOqUBt014xyeWWtC1ca5D9lrIcnZHFVCLF0kkUPMha62lCbamDZ%2FZBL3CR8LZwqxbA%2BXvrG0OPG4Ii3L2LvzV8Ymv9hUMGkuuKNNPPNA6eJle%2FZW6G4SB97%2F%2F2AtwUkVawF%2FmLHz%2F3KPwq5SNUcFNhuqgolZX0U2u8ymX%2F08FiS%2FeHYFvQocyIp3ct2wOHkJ1j6%2BzCgH8j3nce%2FUsOjEIkZFTSgShynIe&X-Amz-Signature=7bab7856ba07e725ef99f661601e437416f7cdfd412eb808db9f3644b3a76ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4H6WA2X%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEUYrj2B9LFS5A1fb1uz21gBWA1QrKAiDAMBIAGmJl3zAiEAoKM3WXoX9NeVXAb75UeII7RGSzW1z3587z1uW07sl0UqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVbYtcgMlIQEfxI5SrcA7Daz1rgU7zCzXs43hPt5ozShDRLCu3IZL0J75I70NIyObzPS7KpGzhrH%2Bc1gZ2k7Ou%2Ba8JmaEFHp5mC5%2BHhcX9mgb9cD1qnXSrsXidCPFGpb9SXSY%2F1EeSvQGZi0Zb%2B180FbPuDHtbE%2BXjcCyutRfjqSt43LI7sg%2FxI37O516dSDLlXjxkoe7wjrdLED0iaPpuUBYPEc29g%2B0JgAtr4Bj78oH9ELL0DnzlZ0jNIOEuDr9txIhbUjQLz6F8HKqL0vlknKH0YL%2FwKUtlNkq17CdO%2BZatlmR8mqvVF%2B6S6xhRTKMfiiOlyDd6zyuNsBCeVgu%2FzN1V71IuFXeDLcUFsGUHwLKOtnbpk6VCI1lUFq1yQqq2CutnLgcUFnSbkPDPkBeHeKUaBqh26RH3JlGfycXlVdPkYEOipW2SmwKhxuTiKSK1Vo%2B7Gdj7C4jRydnOCB50as9j5JpWGn8MY%2BVf8GDUA5nZXG%2FOzn%2BOlMN6xzEAO31%2BeBzk%2ByrdCSRimLnq8%2FU5iNxQUwp6ezkFAGhLBOUtJt8rUaDHf1P9dVUw7GhSrA6RTKwFGwbmTPXjoMUPEBT2jHZPTwmpOYH1Cx4fO%2BMb2BJh3G6oLdp0fiRQyxIXTUVAauwESlqd2gRY8MM7xv74GOqUBt014xyeWWtC1ca5D9lrIcnZHFVCLF0kkUPMha62lCbamDZ%2FZBL3CR8LZwqxbA%2BXvrG0OPG4Ii3L2LvzV8Ymv9hUMGkuuKNNPPNA6eJle%2FZW6G4SB97%2F%2F2AtwUkVawF%2FmLHz%2F3KPwq5SNUcFNhuqgolZX0U2u8ymX%2F08FiS%2FeHYFvQocyIp3ct2wOHkJ1j6%2BzCgH8j3nce%2FUsOjEIkZFTSgShynIe&X-Amz-Signature=e8b4db42b8954ebd893051ce822b148d9a01e5684bec2ad0cd79bebe592b8901&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4H6WA2X%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEUYrj2B9LFS5A1fb1uz21gBWA1QrKAiDAMBIAGmJl3zAiEAoKM3WXoX9NeVXAb75UeII7RGSzW1z3587z1uW07sl0UqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVbYtcgMlIQEfxI5SrcA7Daz1rgU7zCzXs43hPt5ozShDRLCu3IZL0J75I70NIyObzPS7KpGzhrH%2Bc1gZ2k7Ou%2Ba8JmaEFHp5mC5%2BHhcX9mgb9cD1qnXSrsXidCPFGpb9SXSY%2F1EeSvQGZi0Zb%2B180FbPuDHtbE%2BXjcCyutRfjqSt43LI7sg%2FxI37O516dSDLlXjxkoe7wjrdLED0iaPpuUBYPEc29g%2B0JgAtr4Bj78oH9ELL0DnzlZ0jNIOEuDr9txIhbUjQLz6F8HKqL0vlknKH0YL%2FwKUtlNkq17CdO%2BZatlmR8mqvVF%2B6S6xhRTKMfiiOlyDd6zyuNsBCeVgu%2FzN1V71IuFXeDLcUFsGUHwLKOtnbpk6VCI1lUFq1yQqq2CutnLgcUFnSbkPDPkBeHeKUaBqh26RH3JlGfycXlVdPkYEOipW2SmwKhxuTiKSK1Vo%2B7Gdj7C4jRydnOCB50as9j5JpWGn8MY%2BVf8GDUA5nZXG%2FOzn%2BOlMN6xzEAO31%2BeBzk%2ByrdCSRimLnq8%2FU5iNxQUwp6ezkFAGhLBOUtJt8rUaDHf1P9dVUw7GhSrA6RTKwFGwbmTPXjoMUPEBT2jHZPTwmpOYH1Cx4fO%2BMb2BJh3G6oLdp0fiRQyxIXTUVAauwESlqd2gRY8MM7xv74GOqUBt014xyeWWtC1ca5D9lrIcnZHFVCLF0kkUPMha62lCbamDZ%2FZBL3CR8LZwqxbA%2BXvrG0OPG4Ii3L2LvzV8Ymv9hUMGkuuKNNPPNA6eJle%2FZW6G4SB97%2F%2F2AtwUkVawF%2FmLHz%2F3KPwq5SNUcFNhuqgolZX0U2u8ymX%2F08FiS%2FeHYFvQocyIp3ct2wOHkJ1j6%2BzCgH8j3nce%2FUsOjEIkZFTSgShynIe&X-Amz-Signature=bd80711dcdd9e0dff759abca3f816076eb6ca14d7c08f140115ced26cf6d01f7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4H6WA2X%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEUYrj2B9LFS5A1fb1uz21gBWA1QrKAiDAMBIAGmJl3zAiEAoKM3WXoX9NeVXAb75UeII7RGSzW1z3587z1uW07sl0UqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVbYtcgMlIQEfxI5SrcA7Daz1rgU7zCzXs43hPt5ozShDRLCu3IZL0J75I70NIyObzPS7KpGzhrH%2Bc1gZ2k7Ou%2Ba8JmaEFHp5mC5%2BHhcX9mgb9cD1qnXSrsXidCPFGpb9SXSY%2F1EeSvQGZi0Zb%2B180FbPuDHtbE%2BXjcCyutRfjqSt43LI7sg%2FxI37O516dSDLlXjxkoe7wjrdLED0iaPpuUBYPEc29g%2B0JgAtr4Bj78oH9ELL0DnzlZ0jNIOEuDr9txIhbUjQLz6F8HKqL0vlknKH0YL%2FwKUtlNkq17CdO%2BZatlmR8mqvVF%2B6S6xhRTKMfiiOlyDd6zyuNsBCeVgu%2FzN1V71IuFXeDLcUFsGUHwLKOtnbpk6VCI1lUFq1yQqq2CutnLgcUFnSbkPDPkBeHeKUaBqh26RH3JlGfycXlVdPkYEOipW2SmwKhxuTiKSK1Vo%2B7Gdj7C4jRydnOCB50as9j5JpWGn8MY%2BVf8GDUA5nZXG%2FOzn%2BOlMN6xzEAO31%2BeBzk%2ByrdCSRimLnq8%2FU5iNxQUwp6ezkFAGhLBOUtJt8rUaDHf1P9dVUw7GhSrA6RTKwFGwbmTPXjoMUPEBT2jHZPTwmpOYH1Cx4fO%2BMb2BJh3G6oLdp0fiRQyxIXTUVAauwESlqd2gRY8MM7xv74GOqUBt014xyeWWtC1ca5D9lrIcnZHFVCLF0kkUPMha62lCbamDZ%2FZBL3CR8LZwqxbA%2BXvrG0OPG4Ii3L2LvzV8Ymv9hUMGkuuKNNPPNA6eJle%2FZW6G4SB97%2F%2F2AtwUkVawF%2FmLHz%2F3KPwq5SNUcFNhuqgolZX0U2u8ymX%2F08FiS%2FeHYFvQocyIp3ct2wOHkJ1j6%2BzCgH8j3nce%2FUsOjEIkZFTSgShynIe&X-Amz-Signature=886d46cf911b0efdc4ad45c6d81220c01abbfd098dc87c788ce311d2e79c4621&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4H6WA2X%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEUYrj2B9LFS5A1fb1uz21gBWA1QrKAiDAMBIAGmJl3zAiEAoKM3WXoX9NeVXAb75UeII7RGSzW1z3587z1uW07sl0UqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVbYtcgMlIQEfxI5SrcA7Daz1rgU7zCzXs43hPt5ozShDRLCu3IZL0J75I70NIyObzPS7KpGzhrH%2Bc1gZ2k7Ou%2Ba8JmaEFHp5mC5%2BHhcX9mgb9cD1qnXSrsXidCPFGpb9SXSY%2F1EeSvQGZi0Zb%2B180FbPuDHtbE%2BXjcCyutRfjqSt43LI7sg%2FxI37O516dSDLlXjxkoe7wjrdLED0iaPpuUBYPEc29g%2B0JgAtr4Bj78oH9ELL0DnzlZ0jNIOEuDr9txIhbUjQLz6F8HKqL0vlknKH0YL%2FwKUtlNkq17CdO%2BZatlmR8mqvVF%2B6S6xhRTKMfiiOlyDd6zyuNsBCeVgu%2FzN1V71IuFXeDLcUFsGUHwLKOtnbpk6VCI1lUFq1yQqq2CutnLgcUFnSbkPDPkBeHeKUaBqh26RH3JlGfycXlVdPkYEOipW2SmwKhxuTiKSK1Vo%2B7Gdj7C4jRydnOCB50as9j5JpWGn8MY%2BVf8GDUA5nZXG%2FOzn%2BOlMN6xzEAO31%2BeBzk%2ByrdCSRimLnq8%2FU5iNxQUwp6ezkFAGhLBOUtJt8rUaDHf1P9dVUw7GhSrA6RTKwFGwbmTPXjoMUPEBT2jHZPTwmpOYH1Cx4fO%2BMb2BJh3G6oLdp0fiRQyxIXTUVAauwESlqd2gRY8MM7xv74GOqUBt014xyeWWtC1ca5D9lrIcnZHFVCLF0kkUPMha62lCbamDZ%2FZBL3CR8LZwqxbA%2BXvrG0OPG4Ii3L2LvzV8Ymv9hUMGkuuKNNPPNA6eJle%2FZW6G4SB97%2F%2F2AtwUkVawF%2FmLHz%2F3KPwq5SNUcFNhuqgolZX0U2u8ymX%2F08FiS%2FeHYFvQocyIp3ct2wOHkJ1j6%2BzCgH8j3nce%2FUsOjEIkZFTSgShynIe&X-Amz-Signature=b1b9fae8f7c1e94039fc9a91d743f0a433b34be4279ac30f7d7bd0597fc3d4bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4H6WA2X%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEUYrj2B9LFS5A1fb1uz21gBWA1QrKAiDAMBIAGmJl3zAiEAoKM3WXoX9NeVXAb75UeII7RGSzW1z3587z1uW07sl0UqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVbYtcgMlIQEfxI5SrcA7Daz1rgU7zCzXs43hPt5ozShDRLCu3IZL0J75I70NIyObzPS7KpGzhrH%2Bc1gZ2k7Ou%2Ba8JmaEFHp5mC5%2BHhcX9mgb9cD1qnXSrsXidCPFGpb9SXSY%2F1EeSvQGZi0Zb%2B180FbPuDHtbE%2BXjcCyutRfjqSt43LI7sg%2FxI37O516dSDLlXjxkoe7wjrdLED0iaPpuUBYPEc29g%2B0JgAtr4Bj78oH9ELL0DnzlZ0jNIOEuDr9txIhbUjQLz6F8HKqL0vlknKH0YL%2FwKUtlNkq17CdO%2BZatlmR8mqvVF%2B6S6xhRTKMfiiOlyDd6zyuNsBCeVgu%2FzN1V71IuFXeDLcUFsGUHwLKOtnbpk6VCI1lUFq1yQqq2CutnLgcUFnSbkPDPkBeHeKUaBqh26RH3JlGfycXlVdPkYEOipW2SmwKhxuTiKSK1Vo%2B7Gdj7C4jRydnOCB50as9j5JpWGn8MY%2BVf8GDUA5nZXG%2FOzn%2BOlMN6xzEAO31%2BeBzk%2ByrdCSRimLnq8%2FU5iNxQUwp6ezkFAGhLBOUtJt8rUaDHf1P9dVUw7GhSrA6RTKwFGwbmTPXjoMUPEBT2jHZPTwmpOYH1Cx4fO%2BMb2BJh3G6oLdp0fiRQyxIXTUVAauwESlqd2gRY8MM7xv74GOqUBt014xyeWWtC1ca5D9lrIcnZHFVCLF0kkUPMha62lCbamDZ%2FZBL3CR8LZwqxbA%2BXvrG0OPG4Ii3L2LvzV8Ymv9hUMGkuuKNNPPNA6eJle%2FZW6G4SB97%2F%2F2AtwUkVawF%2FmLHz%2F3KPwq5SNUcFNhuqgolZX0U2u8ymX%2F08FiS%2FeHYFvQocyIp3ct2wOHkJ1j6%2BzCgH8j3nce%2FUsOjEIkZFTSgShynIe&X-Amz-Signature=46f83e335b4f685119b621a1842ad0a69f932381bc48ae0aee82b2b5fb75ed76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4H6WA2X%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEUYrj2B9LFS5A1fb1uz21gBWA1QrKAiDAMBIAGmJl3zAiEAoKM3WXoX9NeVXAb75UeII7RGSzW1z3587z1uW07sl0UqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVbYtcgMlIQEfxI5SrcA7Daz1rgU7zCzXs43hPt5ozShDRLCu3IZL0J75I70NIyObzPS7KpGzhrH%2Bc1gZ2k7Ou%2Ba8JmaEFHp5mC5%2BHhcX9mgb9cD1qnXSrsXidCPFGpb9SXSY%2F1EeSvQGZi0Zb%2B180FbPuDHtbE%2BXjcCyutRfjqSt43LI7sg%2FxI37O516dSDLlXjxkoe7wjrdLED0iaPpuUBYPEc29g%2B0JgAtr4Bj78oH9ELL0DnzlZ0jNIOEuDr9txIhbUjQLz6F8HKqL0vlknKH0YL%2FwKUtlNkq17CdO%2BZatlmR8mqvVF%2B6S6xhRTKMfiiOlyDd6zyuNsBCeVgu%2FzN1V71IuFXeDLcUFsGUHwLKOtnbpk6VCI1lUFq1yQqq2CutnLgcUFnSbkPDPkBeHeKUaBqh26RH3JlGfycXlVdPkYEOipW2SmwKhxuTiKSK1Vo%2B7Gdj7C4jRydnOCB50as9j5JpWGn8MY%2BVf8GDUA5nZXG%2FOzn%2BOlMN6xzEAO31%2BeBzk%2ByrdCSRimLnq8%2FU5iNxQUwp6ezkFAGhLBOUtJt8rUaDHf1P9dVUw7GhSrA6RTKwFGwbmTPXjoMUPEBT2jHZPTwmpOYH1Cx4fO%2BMb2BJh3G6oLdp0fiRQyxIXTUVAauwESlqd2gRY8MM7xv74GOqUBt014xyeWWtC1ca5D9lrIcnZHFVCLF0kkUPMha62lCbamDZ%2FZBL3CR8LZwqxbA%2BXvrG0OPG4Ii3L2LvzV8Ymv9hUMGkuuKNNPPNA6eJle%2FZW6G4SB97%2F%2F2AtwUkVawF%2FmLHz%2F3KPwq5SNUcFNhuqgolZX0U2u8ymX%2F08FiS%2FeHYFvQocyIp3ct2wOHkJ1j6%2BzCgH8j3nce%2FUsOjEIkZFTSgShynIe&X-Amz-Signature=2ff438c1c81f4d8f6a62481b848adc5acb82ed643020270f12a24088f1157ea3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4H6WA2X%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEUYrj2B9LFS5A1fb1uz21gBWA1QrKAiDAMBIAGmJl3zAiEAoKM3WXoX9NeVXAb75UeII7RGSzW1z3587z1uW07sl0UqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVbYtcgMlIQEfxI5SrcA7Daz1rgU7zCzXs43hPt5ozShDRLCu3IZL0J75I70NIyObzPS7KpGzhrH%2Bc1gZ2k7Ou%2Ba8JmaEFHp5mC5%2BHhcX9mgb9cD1qnXSrsXidCPFGpb9SXSY%2F1EeSvQGZi0Zb%2B180FbPuDHtbE%2BXjcCyutRfjqSt43LI7sg%2FxI37O516dSDLlXjxkoe7wjrdLED0iaPpuUBYPEc29g%2B0JgAtr4Bj78oH9ELL0DnzlZ0jNIOEuDr9txIhbUjQLz6F8HKqL0vlknKH0YL%2FwKUtlNkq17CdO%2BZatlmR8mqvVF%2B6S6xhRTKMfiiOlyDd6zyuNsBCeVgu%2FzN1V71IuFXeDLcUFsGUHwLKOtnbpk6VCI1lUFq1yQqq2CutnLgcUFnSbkPDPkBeHeKUaBqh26RH3JlGfycXlVdPkYEOipW2SmwKhxuTiKSK1Vo%2B7Gdj7C4jRydnOCB50as9j5JpWGn8MY%2BVf8GDUA5nZXG%2FOzn%2BOlMN6xzEAO31%2BeBzk%2ByrdCSRimLnq8%2FU5iNxQUwp6ezkFAGhLBOUtJt8rUaDHf1P9dVUw7GhSrA6RTKwFGwbmTPXjoMUPEBT2jHZPTwmpOYH1Cx4fO%2BMb2BJh3G6oLdp0fiRQyxIXTUVAauwESlqd2gRY8MM7xv74GOqUBt014xyeWWtC1ca5D9lrIcnZHFVCLF0kkUPMha62lCbamDZ%2FZBL3CR8LZwqxbA%2BXvrG0OPG4Ii3L2LvzV8Ymv9hUMGkuuKNNPPNA6eJle%2FZW6G4SB97%2F%2F2AtwUkVawF%2FmLHz%2F3KPwq5SNUcFNhuqgolZX0U2u8ymX%2F08FiS%2FeHYFvQocyIp3ct2wOHkJ1j6%2BzCgH8j3nce%2FUsOjEIkZFTSgShynIe&X-Amz-Signature=4416092968a4f1961a59faaa194bca71bcd12067bded5542bce58c9689f4d7a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
