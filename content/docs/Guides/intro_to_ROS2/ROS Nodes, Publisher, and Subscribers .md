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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVG5P2D%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIuuZ5XcO8eILujx2w3vP3cszW%2FFe3NSi3gx9FHalmAwIgdgoFY11QXXtq69vlEDA8Hx2ZlhCHGxyK5YharqHYjTsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfC1C3tDn0BxjzL9CrcA7vQM5857gi5QIZslcTyn8PG2k75U8O%2BSKaQhfHxO%2Fw%2FZ1Cs5yKn%2BrQDlEqGnEVtAnF4xeNuCwoB3Nk41kXLjfCnq9VxVd6jw5lf9OhJqcbbWy6Mh7F4cLFgS9AASuBDkhPjQFD1qw8ZvKsmYAApljJJjySD0t1gOzdkvCN91eGcyIZl7R9qvFePKqsw9Ouph64Nu%2B%2B4B59MrfHSWl1v4XeVdbn1WfjOo1kgCFR2HzpnMw6I1wlEc0sWyFcLXfuEwA8cx1XvpheKqEgacAiKOn89RDuVgIwGtZtlYnQEUyviREfXr8MBOZco6ca3GUCV13wmV2vb2KnSScQwi4LE%2BhTIGPo1grojUZA9GxR2qmhO%2F6cPalk0fbSqoC%2FGzYjgGiVjhTAIYx9TCiER46Us4ti5fK7tKsUGtWgJu7My1OI2ykhUDwzEDY2PMHID1ebGvzytsQuPAvKOMXF8AY8L2d20jQrqSk%2FyhL8vthLdfPeeKVIlJunyX6aqv%2FrWc0TOnoD4vo8SjfJMNGtqwieqU0dc6To9EM6ovAsp%2BSVH1%2FKHF%2FwUlO%2BKR0w70Jg5j%2B4a6EPaQRjldjT0GlAWLnYDxX4yc57Yu4dsKG1nR1NVdBzJy47jVFFa2F6fbAX4MIOW8cMGOqUB7wvcdO%2BgQXcu8fBunU9oPHFbLmkEIu4uCIR45n%2FaPQiIigvxpQCKGePz9JnkcygaAP4NbX8q1R3b8WEmf2%2BIL%2BmT30AHrf%2BUYs0OIHVlxzIDwn%2B1RVQNn2ZhaveG9LYgR6kUbrSWNoynhbpjBfOsKPPoLb%2FMINDvxilpAC3VobnLaM57CGJcsL%2FtT6HztL77SQFdyKCd2mNn4ItUg8TrLgJa74eo&X-Amz-Signature=6b2e2da1d1828a14fb476a2c15f160ba8bbaad97a08471666246e870b67851e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVG5P2D%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIuuZ5XcO8eILujx2w3vP3cszW%2FFe3NSi3gx9FHalmAwIgdgoFY11QXXtq69vlEDA8Hx2ZlhCHGxyK5YharqHYjTsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfC1C3tDn0BxjzL9CrcA7vQM5857gi5QIZslcTyn8PG2k75U8O%2BSKaQhfHxO%2Fw%2FZ1Cs5yKn%2BrQDlEqGnEVtAnF4xeNuCwoB3Nk41kXLjfCnq9VxVd6jw5lf9OhJqcbbWy6Mh7F4cLFgS9AASuBDkhPjQFD1qw8ZvKsmYAApljJJjySD0t1gOzdkvCN91eGcyIZl7R9qvFePKqsw9Ouph64Nu%2B%2B4B59MrfHSWl1v4XeVdbn1WfjOo1kgCFR2HzpnMw6I1wlEc0sWyFcLXfuEwA8cx1XvpheKqEgacAiKOn89RDuVgIwGtZtlYnQEUyviREfXr8MBOZco6ca3GUCV13wmV2vb2KnSScQwi4LE%2BhTIGPo1grojUZA9GxR2qmhO%2F6cPalk0fbSqoC%2FGzYjgGiVjhTAIYx9TCiER46Us4ti5fK7tKsUGtWgJu7My1OI2ykhUDwzEDY2PMHID1ebGvzytsQuPAvKOMXF8AY8L2d20jQrqSk%2FyhL8vthLdfPeeKVIlJunyX6aqv%2FrWc0TOnoD4vo8SjfJMNGtqwieqU0dc6To9EM6ovAsp%2BSVH1%2FKHF%2FwUlO%2BKR0w70Jg5j%2B4a6EPaQRjldjT0GlAWLnYDxX4yc57Yu4dsKG1nR1NVdBzJy47jVFFa2F6fbAX4MIOW8cMGOqUB7wvcdO%2BgQXcu8fBunU9oPHFbLmkEIu4uCIR45n%2FaPQiIigvxpQCKGePz9JnkcygaAP4NbX8q1R3b8WEmf2%2BIL%2BmT30AHrf%2BUYs0OIHVlxzIDwn%2B1RVQNn2ZhaveG9LYgR6kUbrSWNoynhbpjBfOsKPPoLb%2FMINDvxilpAC3VobnLaM57CGJcsL%2FtT6HztL77SQFdyKCd2mNn4ItUg8TrLgJa74eo&X-Amz-Signature=ef4310e15e3219d6c91c9abcec60e572e1cfba55411b744e07c8d7309e717403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVG5P2D%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIuuZ5XcO8eILujx2w3vP3cszW%2FFe3NSi3gx9FHalmAwIgdgoFY11QXXtq69vlEDA8Hx2ZlhCHGxyK5YharqHYjTsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfC1C3tDn0BxjzL9CrcA7vQM5857gi5QIZslcTyn8PG2k75U8O%2BSKaQhfHxO%2Fw%2FZ1Cs5yKn%2BrQDlEqGnEVtAnF4xeNuCwoB3Nk41kXLjfCnq9VxVd6jw5lf9OhJqcbbWy6Mh7F4cLFgS9AASuBDkhPjQFD1qw8ZvKsmYAApljJJjySD0t1gOzdkvCN91eGcyIZl7R9qvFePKqsw9Ouph64Nu%2B%2B4B59MrfHSWl1v4XeVdbn1WfjOo1kgCFR2HzpnMw6I1wlEc0sWyFcLXfuEwA8cx1XvpheKqEgacAiKOn89RDuVgIwGtZtlYnQEUyviREfXr8MBOZco6ca3GUCV13wmV2vb2KnSScQwi4LE%2BhTIGPo1grojUZA9GxR2qmhO%2F6cPalk0fbSqoC%2FGzYjgGiVjhTAIYx9TCiER46Us4ti5fK7tKsUGtWgJu7My1OI2ykhUDwzEDY2PMHID1ebGvzytsQuPAvKOMXF8AY8L2d20jQrqSk%2FyhL8vthLdfPeeKVIlJunyX6aqv%2FrWc0TOnoD4vo8SjfJMNGtqwieqU0dc6To9EM6ovAsp%2BSVH1%2FKHF%2FwUlO%2BKR0w70Jg5j%2B4a6EPaQRjldjT0GlAWLnYDxX4yc57Yu4dsKG1nR1NVdBzJy47jVFFa2F6fbAX4MIOW8cMGOqUB7wvcdO%2BgQXcu8fBunU9oPHFbLmkEIu4uCIR45n%2FaPQiIigvxpQCKGePz9JnkcygaAP4NbX8q1R3b8WEmf2%2BIL%2BmT30AHrf%2BUYs0OIHVlxzIDwn%2B1RVQNn2ZhaveG9LYgR6kUbrSWNoynhbpjBfOsKPPoLb%2FMINDvxilpAC3VobnLaM57CGJcsL%2FtT6HztL77SQFdyKCd2mNn4ItUg8TrLgJa74eo&X-Amz-Signature=d5b64a4a94a7c208c23f97b2c0cc54fbbc3835efb0f1c94f11951c831e995aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVG5P2D%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIuuZ5XcO8eILujx2w3vP3cszW%2FFe3NSi3gx9FHalmAwIgdgoFY11QXXtq69vlEDA8Hx2ZlhCHGxyK5YharqHYjTsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfC1C3tDn0BxjzL9CrcA7vQM5857gi5QIZslcTyn8PG2k75U8O%2BSKaQhfHxO%2Fw%2FZ1Cs5yKn%2BrQDlEqGnEVtAnF4xeNuCwoB3Nk41kXLjfCnq9VxVd6jw5lf9OhJqcbbWy6Mh7F4cLFgS9AASuBDkhPjQFD1qw8ZvKsmYAApljJJjySD0t1gOzdkvCN91eGcyIZl7R9qvFePKqsw9Ouph64Nu%2B%2B4B59MrfHSWl1v4XeVdbn1WfjOo1kgCFR2HzpnMw6I1wlEc0sWyFcLXfuEwA8cx1XvpheKqEgacAiKOn89RDuVgIwGtZtlYnQEUyviREfXr8MBOZco6ca3GUCV13wmV2vb2KnSScQwi4LE%2BhTIGPo1grojUZA9GxR2qmhO%2F6cPalk0fbSqoC%2FGzYjgGiVjhTAIYx9TCiER46Us4ti5fK7tKsUGtWgJu7My1OI2ykhUDwzEDY2PMHID1ebGvzytsQuPAvKOMXF8AY8L2d20jQrqSk%2FyhL8vthLdfPeeKVIlJunyX6aqv%2FrWc0TOnoD4vo8SjfJMNGtqwieqU0dc6To9EM6ovAsp%2BSVH1%2FKHF%2FwUlO%2BKR0w70Jg5j%2B4a6EPaQRjldjT0GlAWLnYDxX4yc57Yu4dsKG1nR1NVdBzJy47jVFFa2F6fbAX4MIOW8cMGOqUB7wvcdO%2BgQXcu8fBunU9oPHFbLmkEIu4uCIR45n%2FaPQiIigvxpQCKGePz9JnkcygaAP4NbX8q1R3b8WEmf2%2BIL%2BmT30AHrf%2BUYs0OIHVlxzIDwn%2B1RVQNn2ZhaveG9LYgR6kUbrSWNoynhbpjBfOsKPPoLb%2FMINDvxilpAC3VobnLaM57CGJcsL%2FtT6HztL77SQFdyKCd2mNn4ItUg8TrLgJa74eo&X-Amz-Signature=3873b93c246c6ed0750189e4d9d8a5e82aaee1a8dc33ed2503d646b11f7e39fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVG5P2D%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIuuZ5XcO8eILujx2w3vP3cszW%2FFe3NSi3gx9FHalmAwIgdgoFY11QXXtq69vlEDA8Hx2ZlhCHGxyK5YharqHYjTsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfC1C3tDn0BxjzL9CrcA7vQM5857gi5QIZslcTyn8PG2k75U8O%2BSKaQhfHxO%2Fw%2FZ1Cs5yKn%2BrQDlEqGnEVtAnF4xeNuCwoB3Nk41kXLjfCnq9VxVd6jw5lf9OhJqcbbWy6Mh7F4cLFgS9AASuBDkhPjQFD1qw8ZvKsmYAApljJJjySD0t1gOzdkvCN91eGcyIZl7R9qvFePKqsw9Ouph64Nu%2B%2B4B59MrfHSWl1v4XeVdbn1WfjOo1kgCFR2HzpnMw6I1wlEc0sWyFcLXfuEwA8cx1XvpheKqEgacAiKOn89RDuVgIwGtZtlYnQEUyviREfXr8MBOZco6ca3GUCV13wmV2vb2KnSScQwi4LE%2BhTIGPo1grojUZA9GxR2qmhO%2F6cPalk0fbSqoC%2FGzYjgGiVjhTAIYx9TCiER46Us4ti5fK7tKsUGtWgJu7My1OI2ykhUDwzEDY2PMHID1ebGvzytsQuPAvKOMXF8AY8L2d20jQrqSk%2FyhL8vthLdfPeeKVIlJunyX6aqv%2FrWc0TOnoD4vo8SjfJMNGtqwieqU0dc6To9EM6ovAsp%2BSVH1%2FKHF%2FwUlO%2BKR0w70Jg5j%2B4a6EPaQRjldjT0GlAWLnYDxX4yc57Yu4dsKG1nR1NVdBzJy47jVFFa2F6fbAX4MIOW8cMGOqUB7wvcdO%2BgQXcu8fBunU9oPHFbLmkEIu4uCIR45n%2FaPQiIigvxpQCKGePz9JnkcygaAP4NbX8q1R3b8WEmf2%2BIL%2BmT30AHrf%2BUYs0OIHVlxzIDwn%2B1RVQNn2ZhaveG9LYgR6kUbrSWNoynhbpjBfOsKPPoLb%2FMINDvxilpAC3VobnLaM57CGJcsL%2FtT6HztL77SQFdyKCd2mNn4ItUg8TrLgJa74eo&X-Amz-Signature=ce1149bdea4d7f73623967fad77a71ba32f4ee29d84caab04a69ac636f7a455b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVG5P2D%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIuuZ5XcO8eILujx2w3vP3cszW%2FFe3NSi3gx9FHalmAwIgdgoFY11QXXtq69vlEDA8Hx2ZlhCHGxyK5YharqHYjTsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfC1C3tDn0BxjzL9CrcA7vQM5857gi5QIZslcTyn8PG2k75U8O%2BSKaQhfHxO%2Fw%2FZ1Cs5yKn%2BrQDlEqGnEVtAnF4xeNuCwoB3Nk41kXLjfCnq9VxVd6jw5lf9OhJqcbbWy6Mh7F4cLFgS9AASuBDkhPjQFD1qw8ZvKsmYAApljJJjySD0t1gOzdkvCN91eGcyIZl7R9qvFePKqsw9Ouph64Nu%2B%2B4B59MrfHSWl1v4XeVdbn1WfjOo1kgCFR2HzpnMw6I1wlEc0sWyFcLXfuEwA8cx1XvpheKqEgacAiKOn89RDuVgIwGtZtlYnQEUyviREfXr8MBOZco6ca3GUCV13wmV2vb2KnSScQwi4LE%2BhTIGPo1grojUZA9GxR2qmhO%2F6cPalk0fbSqoC%2FGzYjgGiVjhTAIYx9TCiER46Us4ti5fK7tKsUGtWgJu7My1OI2ykhUDwzEDY2PMHID1ebGvzytsQuPAvKOMXF8AY8L2d20jQrqSk%2FyhL8vthLdfPeeKVIlJunyX6aqv%2FrWc0TOnoD4vo8SjfJMNGtqwieqU0dc6To9EM6ovAsp%2BSVH1%2FKHF%2FwUlO%2BKR0w70Jg5j%2B4a6EPaQRjldjT0GlAWLnYDxX4yc57Yu4dsKG1nR1NVdBzJy47jVFFa2F6fbAX4MIOW8cMGOqUB7wvcdO%2BgQXcu8fBunU9oPHFbLmkEIu4uCIR45n%2FaPQiIigvxpQCKGePz9JnkcygaAP4NbX8q1R3b8WEmf2%2BIL%2BmT30AHrf%2BUYs0OIHVlxzIDwn%2B1RVQNn2ZhaveG9LYgR6kUbrSWNoynhbpjBfOsKPPoLb%2FMINDvxilpAC3VobnLaM57CGJcsL%2FtT6HztL77SQFdyKCd2mNn4ItUg8TrLgJa74eo&X-Amz-Signature=d265641e25cfe8d89f3aa776ddc34477327335787353fd8dcac230a2a246ddfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVG5P2D%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIuuZ5XcO8eILujx2w3vP3cszW%2FFe3NSi3gx9FHalmAwIgdgoFY11QXXtq69vlEDA8Hx2ZlhCHGxyK5YharqHYjTsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfC1C3tDn0BxjzL9CrcA7vQM5857gi5QIZslcTyn8PG2k75U8O%2BSKaQhfHxO%2Fw%2FZ1Cs5yKn%2BrQDlEqGnEVtAnF4xeNuCwoB3Nk41kXLjfCnq9VxVd6jw5lf9OhJqcbbWy6Mh7F4cLFgS9AASuBDkhPjQFD1qw8ZvKsmYAApljJJjySD0t1gOzdkvCN91eGcyIZl7R9qvFePKqsw9Ouph64Nu%2B%2B4B59MrfHSWl1v4XeVdbn1WfjOo1kgCFR2HzpnMw6I1wlEc0sWyFcLXfuEwA8cx1XvpheKqEgacAiKOn89RDuVgIwGtZtlYnQEUyviREfXr8MBOZco6ca3GUCV13wmV2vb2KnSScQwi4LE%2BhTIGPo1grojUZA9GxR2qmhO%2F6cPalk0fbSqoC%2FGzYjgGiVjhTAIYx9TCiER46Us4ti5fK7tKsUGtWgJu7My1OI2ykhUDwzEDY2PMHID1ebGvzytsQuPAvKOMXF8AY8L2d20jQrqSk%2FyhL8vthLdfPeeKVIlJunyX6aqv%2FrWc0TOnoD4vo8SjfJMNGtqwieqU0dc6To9EM6ovAsp%2BSVH1%2FKHF%2FwUlO%2BKR0w70Jg5j%2B4a6EPaQRjldjT0GlAWLnYDxX4yc57Yu4dsKG1nR1NVdBzJy47jVFFa2F6fbAX4MIOW8cMGOqUB7wvcdO%2BgQXcu8fBunU9oPHFbLmkEIu4uCIR45n%2FaPQiIigvxpQCKGePz9JnkcygaAP4NbX8q1R3b8WEmf2%2BIL%2BmT30AHrf%2BUYs0OIHVlxzIDwn%2B1RVQNn2ZhaveG9LYgR6kUbrSWNoynhbpjBfOsKPPoLb%2FMINDvxilpAC3VobnLaM57CGJcsL%2FtT6HztL77SQFdyKCd2mNn4ItUg8TrLgJa74eo&X-Amz-Signature=a49307453906b051e184cfeba1080bea1275bc86b928f475971bb1eae93b01b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVG5P2D%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIuuZ5XcO8eILujx2w3vP3cszW%2FFe3NSi3gx9FHalmAwIgdgoFY11QXXtq69vlEDA8Hx2ZlhCHGxyK5YharqHYjTsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfC1C3tDn0BxjzL9CrcA7vQM5857gi5QIZslcTyn8PG2k75U8O%2BSKaQhfHxO%2Fw%2FZ1Cs5yKn%2BrQDlEqGnEVtAnF4xeNuCwoB3Nk41kXLjfCnq9VxVd6jw5lf9OhJqcbbWy6Mh7F4cLFgS9AASuBDkhPjQFD1qw8ZvKsmYAApljJJjySD0t1gOzdkvCN91eGcyIZl7R9qvFePKqsw9Ouph64Nu%2B%2B4B59MrfHSWl1v4XeVdbn1WfjOo1kgCFR2HzpnMw6I1wlEc0sWyFcLXfuEwA8cx1XvpheKqEgacAiKOn89RDuVgIwGtZtlYnQEUyviREfXr8MBOZco6ca3GUCV13wmV2vb2KnSScQwi4LE%2BhTIGPo1grojUZA9GxR2qmhO%2F6cPalk0fbSqoC%2FGzYjgGiVjhTAIYx9TCiER46Us4ti5fK7tKsUGtWgJu7My1OI2ykhUDwzEDY2PMHID1ebGvzytsQuPAvKOMXF8AY8L2d20jQrqSk%2FyhL8vthLdfPeeKVIlJunyX6aqv%2FrWc0TOnoD4vo8SjfJMNGtqwieqU0dc6To9EM6ovAsp%2BSVH1%2FKHF%2FwUlO%2BKR0w70Jg5j%2B4a6EPaQRjldjT0GlAWLnYDxX4yc57Yu4dsKG1nR1NVdBzJy47jVFFa2F6fbAX4MIOW8cMGOqUB7wvcdO%2BgQXcu8fBunU9oPHFbLmkEIu4uCIR45n%2FaPQiIigvxpQCKGePz9JnkcygaAP4NbX8q1R3b8WEmf2%2BIL%2BmT30AHrf%2BUYs0OIHVlxzIDwn%2B1RVQNn2ZhaveG9LYgR6kUbrSWNoynhbpjBfOsKPPoLb%2FMINDvxilpAC3VobnLaM57CGJcsL%2FtT6HztL77SQFdyKCd2mNn4ItUg8TrLgJa74eo&X-Amz-Signature=88d36399fd66d6dacf30c1e55bb81d308ff6ae16ea8e106bb6a5956e826e1f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
