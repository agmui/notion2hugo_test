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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HKLOROL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCcbSMMUt494jkbDNsftJYIfDJuiH9gM0prvV2Ha0q%2FBQIgHwMehncWBQk9bagtp4OGnOw94NhPMIb%2BiYaLfqV633kq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCdJMxYsdXnd0gnoeCrcA9PJkUoEnAX842NzR4MaTh0lRlMGbk8rHH7d%2FUYnqXqCGgx9UyCWAGHdki3L2wSUYJl5sUFyaw5n7fWGwWMVZIei%2BTh3lM2J6YiQvcEWLNoa193214uaCQ0RSwbqsPkBG2tOS1UlqPN7bL0acOtbnXTPbTjIZvGAfzrx1yFThvQQ3hkcKeFyPNp9WviBMoQSfDoyD9oQnELT33A8fyTpuNYpsT2sXSvMNI4B%2Fh4e9VE1jZGhpxOUIDF9IvuamIHeGXoLYa7tV8IOmO7cFStw4KynhA0DI1BfVeKV9HpBdoIdow4ngr0GzF4FqFY18yP68lk6CtStpZSfAHBm421u5XNxcuHM1DBxdEEr1MPyBHhfxAydybvUsvBKv7tg%2FzHqD988yFNfa3iQj8eaUJ7a%2BEGp2dw1q1w8lYlWR0oLebAimo1G9y7d51niJYCxOmcDjkYXATaIa3m8Jrg0wY%2Bk18wKNVgHmYJc65epybI%2Bu8aIngMkvB3u%2FfLmW1GbuGogLzntTwT9nyuDfkw7ak3M0gqAPfHcbpLppR%2FvLS7s%2BmdfUW9wzx9NI6RU5KIwUM6EoJ8eiOVl1e%2BH6kasvrTG4hlI47ABNZ%2B0c0MeQu5Je7sHe9S45FZOKR5SEFXPMOemvMIGOqUBulSWHyrmAYbGmC2FQNFEz1m3ch7JvL0VzT%2B6cLAzK1ViKvKla0E8kTPAJlmxQ3%2BjOcVrHHc%2Bdd%2BLxRy%2BNfIdW44z70YiuSdAAzBax3WBrLnsmuIv9RjpUMu5s%2Bs5PX7M20pza0T%2Bs7o6hMxbSqRFwRSpCYSSyEFrr7vsFyqUzZgR7JeXKM8NhbJ5XlqOnwWUT%2FvFiR7VNNlNN1n8Pg%2F9EQ6Td0hO&X-Amz-Signature=eab8a2ff5862f05e20ec2c07a2236ac94b271d7791555bd671eaf339dbcd6148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HKLOROL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCcbSMMUt494jkbDNsftJYIfDJuiH9gM0prvV2Ha0q%2FBQIgHwMehncWBQk9bagtp4OGnOw94NhPMIb%2BiYaLfqV633kq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCdJMxYsdXnd0gnoeCrcA9PJkUoEnAX842NzR4MaTh0lRlMGbk8rHH7d%2FUYnqXqCGgx9UyCWAGHdki3L2wSUYJl5sUFyaw5n7fWGwWMVZIei%2BTh3lM2J6YiQvcEWLNoa193214uaCQ0RSwbqsPkBG2tOS1UlqPN7bL0acOtbnXTPbTjIZvGAfzrx1yFThvQQ3hkcKeFyPNp9WviBMoQSfDoyD9oQnELT33A8fyTpuNYpsT2sXSvMNI4B%2Fh4e9VE1jZGhpxOUIDF9IvuamIHeGXoLYa7tV8IOmO7cFStw4KynhA0DI1BfVeKV9HpBdoIdow4ngr0GzF4FqFY18yP68lk6CtStpZSfAHBm421u5XNxcuHM1DBxdEEr1MPyBHhfxAydybvUsvBKv7tg%2FzHqD988yFNfa3iQj8eaUJ7a%2BEGp2dw1q1w8lYlWR0oLebAimo1G9y7d51niJYCxOmcDjkYXATaIa3m8Jrg0wY%2Bk18wKNVgHmYJc65epybI%2Bu8aIngMkvB3u%2FfLmW1GbuGogLzntTwT9nyuDfkw7ak3M0gqAPfHcbpLppR%2FvLS7s%2BmdfUW9wzx9NI6RU5KIwUM6EoJ8eiOVl1e%2BH6kasvrTG4hlI47ABNZ%2B0c0MeQu5Je7sHe9S45FZOKR5SEFXPMOemvMIGOqUBulSWHyrmAYbGmC2FQNFEz1m3ch7JvL0VzT%2B6cLAzK1ViKvKla0E8kTPAJlmxQ3%2BjOcVrHHc%2Bdd%2BLxRy%2BNfIdW44z70YiuSdAAzBax3WBrLnsmuIv9RjpUMu5s%2Bs5PX7M20pza0T%2Bs7o6hMxbSqRFwRSpCYSSyEFrr7vsFyqUzZgR7JeXKM8NhbJ5XlqOnwWUT%2FvFiR7VNNlNN1n8Pg%2F9EQ6Td0hO&X-Amz-Signature=9022e9c425696297aa75e936043ba683f791460234b9fd09cc33bdcd23f79241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HKLOROL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCcbSMMUt494jkbDNsftJYIfDJuiH9gM0prvV2Ha0q%2FBQIgHwMehncWBQk9bagtp4OGnOw94NhPMIb%2BiYaLfqV633kq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCdJMxYsdXnd0gnoeCrcA9PJkUoEnAX842NzR4MaTh0lRlMGbk8rHH7d%2FUYnqXqCGgx9UyCWAGHdki3L2wSUYJl5sUFyaw5n7fWGwWMVZIei%2BTh3lM2J6YiQvcEWLNoa193214uaCQ0RSwbqsPkBG2tOS1UlqPN7bL0acOtbnXTPbTjIZvGAfzrx1yFThvQQ3hkcKeFyPNp9WviBMoQSfDoyD9oQnELT33A8fyTpuNYpsT2sXSvMNI4B%2Fh4e9VE1jZGhpxOUIDF9IvuamIHeGXoLYa7tV8IOmO7cFStw4KynhA0DI1BfVeKV9HpBdoIdow4ngr0GzF4FqFY18yP68lk6CtStpZSfAHBm421u5XNxcuHM1DBxdEEr1MPyBHhfxAydybvUsvBKv7tg%2FzHqD988yFNfa3iQj8eaUJ7a%2BEGp2dw1q1w8lYlWR0oLebAimo1G9y7d51niJYCxOmcDjkYXATaIa3m8Jrg0wY%2Bk18wKNVgHmYJc65epybI%2Bu8aIngMkvB3u%2FfLmW1GbuGogLzntTwT9nyuDfkw7ak3M0gqAPfHcbpLppR%2FvLS7s%2BmdfUW9wzx9NI6RU5KIwUM6EoJ8eiOVl1e%2BH6kasvrTG4hlI47ABNZ%2B0c0MeQu5Je7sHe9S45FZOKR5SEFXPMOemvMIGOqUBulSWHyrmAYbGmC2FQNFEz1m3ch7JvL0VzT%2B6cLAzK1ViKvKla0E8kTPAJlmxQ3%2BjOcVrHHc%2Bdd%2BLxRy%2BNfIdW44z70YiuSdAAzBax3WBrLnsmuIv9RjpUMu5s%2Bs5PX7M20pza0T%2Bs7o6hMxbSqRFwRSpCYSSyEFrr7vsFyqUzZgR7JeXKM8NhbJ5XlqOnwWUT%2FvFiR7VNNlNN1n8Pg%2F9EQ6Td0hO&X-Amz-Signature=472daa9f3bffacafb5fbbcb2e9b107dbd2a9d0dea4df3f7bd4ed34d3d9000711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HKLOROL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCcbSMMUt494jkbDNsftJYIfDJuiH9gM0prvV2Ha0q%2FBQIgHwMehncWBQk9bagtp4OGnOw94NhPMIb%2BiYaLfqV633kq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCdJMxYsdXnd0gnoeCrcA9PJkUoEnAX842NzR4MaTh0lRlMGbk8rHH7d%2FUYnqXqCGgx9UyCWAGHdki3L2wSUYJl5sUFyaw5n7fWGwWMVZIei%2BTh3lM2J6YiQvcEWLNoa193214uaCQ0RSwbqsPkBG2tOS1UlqPN7bL0acOtbnXTPbTjIZvGAfzrx1yFThvQQ3hkcKeFyPNp9WviBMoQSfDoyD9oQnELT33A8fyTpuNYpsT2sXSvMNI4B%2Fh4e9VE1jZGhpxOUIDF9IvuamIHeGXoLYa7tV8IOmO7cFStw4KynhA0DI1BfVeKV9HpBdoIdow4ngr0GzF4FqFY18yP68lk6CtStpZSfAHBm421u5XNxcuHM1DBxdEEr1MPyBHhfxAydybvUsvBKv7tg%2FzHqD988yFNfa3iQj8eaUJ7a%2BEGp2dw1q1w8lYlWR0oLebAimo1G9y7d51niJYCxOmcDjkYXATaIa3m8Jrg0wY%2Bk18wKNVgHmYJc65epybI%2Bu8aIngMkvB3u%2FfLmW1GbuGogLzntTwT9nyuDfkw7ak3M0gqAPfHcbpLppR%2FvLS7s%2BmdfUW9wzx9NI6RU5KIwUM6EoJ8eiOVl1e%2BH6kasvrTG4hlI47ABNZ%2B0c0MeQu5Je7sHe9S45FZOKR5SEFXPMOemvMIGOqUBulSWHyrmAYbGmC2FQNFEz1m3ch7JvL0VzT%2B6cLAzK1ViKvKla0E8kTPAJlmxQ3%2BjOcVrHHc%2Bdd%2BLxRy%2BNfIdW44z70YiuSdAAzBax3WBrLnsmuIv9RjpUMu5s%2Bs5PX7M20pza0T%2Bs7o6hMxbSqRFwRSpCYSSyEFrr7vsFyqUzZgR7JeXKM8NhbJ5XlqOnwWUT%2FvFiR7VNNlNN1n8Pg%2F9EQ6Td0hO&X-Amz-Signature=793623945cb5e45587fa3a15e15a7e9b370ccc59638611eb5c93a2ec9f289389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HKLOROL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCcbSMMUt494jkbDNsftJYIfDJuiH9gM0prvV2Ha0q%2FBQIgHwMehncWBQk9bagtp4OGnOw94NhPMIb%2BiYaLfqV633kq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCdJMxYsdXnd0gnoeCrcA9PJkUoEnAX842NzR4MaTh0lRlMGbk8rHH7d%2FUYnqXqCGgx9UyCWAGHdki3L2wSUYJl5sUFyaw5n7fWGwWMVZIei%2BTh3lM2J6YiQvcEWLNoa193214uaCQ0RSwbqsPkBG2tOS1UlqPN7bL0acOtbnXTPbTjIZvGAfzrx1yFThvQQ3hkcKeFyPNp9WviBMoQSfDoyD9oQnELT33A8fyTpuNYpsT2sXSvMNI4B%2Fh4e9VE1jZGhpxOUIDF9IvuamIHeGXoLYa7tV8IOmO7cFStw4KynhA0DI1BfVeKV9HpBdoIdow4ngr0GzF4FqFY18yP68lk6CtStpZSfAHBm421u5XNxcuHM1DBxdEEr1MPyBHhfxAydybvUsvBKv7tg%2FzHqD988yFNfa3iQj8eaUJ7a%2BEGp2dw1q1w8lYlWR0oLebAimo1G9y7d51niJYCxOmcDjkYXATaIa3m8Jrg0wY%2Bk18wKNVgHmYJc65epybI%2Bu8aIngMkvB3u%2FfLmW1GbuGogLzntTwT9nyuDfkw7ak3M0gqAPfHcbpLppR%2FvLS7s%2BmdfUW9wzx9NI6RU5KIwUM6EoJ8eiOVl1e%2BH6kasvrTG4hlI47ABNZ%2B0c0MeQu5Je7sHe9S45FZOKR5SEFXPMOemvMIGOqUBulSWHyrmAYbGmC2FQNFEz1m3ch7JvL0VzT%2B6cLAzK1ViKvKla0E8kTPAJlmxQ3%2BjOcVrHHc%2Bdd%2BLxRy%2BNfIdW44z70YiuSdAAzBax3WBrLnsmuIv9RjpUMu5s%2Bs5PX7M20pza0T%2Bs7o6hMxbSqRFwRSpCYSSyEFrr7vsFyqUzZgR7JeXKM8NhbJ5XlqOnwWUT%2FvFiR7VNNlNN1n8Pg%2F9EQ6Td0hO&X-Amz-Signature=032a3d64d4233907b9c600eaa3fbaeae5da712dabc1cc1c34aa3dfa56915509f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HKLOROL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCcbSMMUt494jkbDNsftJYIfDJuiH9gM0prvV2Ha0q%2FBQIgHwMehncWBQk9bagtp4OGnOw94NhPMIb%2BiYaLfqV633kq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCdJMxYsdXnd0gnoeCrcA9PJkUoEnAX842NzR4MaTh0lRlMGbk8rHH7d%2FUYnqXqCGgx9UyCWAGHdki3L2wSUYJl5sUFyaw5n7fWGwWMVZIei%2BTh3lM2J6YiQvcEWLNoa193214uaCQ0RSwbqsPkBG2tOS1UlqPN7bL0acOtbnXTPbTjIZvGAfzrx1yFThvQQ3hkcKeFyPNp9WviBMoQSfDoyD9oQnELT33A8fyTpuNYpsT2sXSvMNI4B%2Fh4e9VE1jZGhpxOUIDF9IvuamIHeGXoLYa7tV8IOmO7cFStw4KynhA0DI1BfVeKV9HpBdoIdow4ngr0GzF4FqFY18yP68lk6CtStpZSfAHBm421u5XNxcuHM1DBxdEEr1MPyBHhfxAydybvUsvBKv7tg%2FzHqD988yFNfa3iQj8eaUJ7a%2BEGp2dw1q1w8lYlWR0oLebAimo1G9y7d51niJYCxOmcDjkYXATaIa3m8Jrg0wY%2Bk18wKNVgHmYJc65epybI%2Bu8aIngMkvB3u%2FfLmW1GbuGogLzntTwT9nyuDfkw7ak3M0gqAPfHcbpLppR%2FvLS7s%2BmdfUW9wzx9NI6RU5KIwUM6EoJ8eiOVl1e%2BH6kasvrTG4hlI47ABNZ%2B0c0MeQu5Je7sHe9S45FZOKR5SEFXPMOemvMIGOqUBulSWHyrmAYbGmC2FQNFEz1m3ch7JvL0VzT%2B6cLAzK1ViKvKla0E8kTPAJlmxQ3%2BjOcVrHHc%2Bdd%2BLxRy%2BNfIdW44z70YiuSdAAzBax3WBrLnsmuIv9RjpUMu5s%2Bs5PX7M20pza0T%2Bs7o6hMxbSqRFwRSpCYSSyEFrr7vsFyqUzZgR7JeXKM8NhbJ5XlqOnwWUT%2FvFiR7VNNlNN1n8Pg%2F9EQ6Td0hO&X-Amz-Signature=16a1fb1a15efe7c4eb92837b4775d7ab040a1ed38eb3f7e0691c8430c389e8ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HKLOROL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCcbSMMUt494jkbDNsftJYIfDJuiH9gM0prvV2Ha0q%2FBQIgHwMehncWBQk9bagtp4OGnOw94NhPMIb%2BiYaLfqV633kq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCdJMxYsdXnd0gnoeCrcA9PJkUoEnAX842NzR4MaTh0lRlMGbk8rHH7d%2FUYnqXqCGgx9UyCWAGHdki3L2wSUYJl5sUFyaw5n7fWGwWMVZIei%2BTh3lM2J6YiQvcEWLNoa193214uaCQ0RSwbqsPkBG2tOS1UlqPN7bL0acOtbnXTPbTjIZvGAfzrx1yFThvQQ3hkcKeFyPNp9WviBMoQSfDoyD9oQnELT33A8fyTpuNYpsT2sXSvMNI4B%2Fh4e9VE1jZGhpxOUIDF9IvuamIHeGXoLYa7tV8IOmO7cFStw4KynhA0DI1BfVeKV9HpBdoIdow4ngr0GzF4FqFY18yP68lk6CtStpZSfAHBm421u5XNxcuHM1DBxdEEr1MPyBHhfxAydybvUsvBKv7tg%2FzHqD988yFNfa3iQj8eaUJ7a%2BEGp2dw1q1w8lYlWR0oLebAimo1G9y7d51niJYCxOmcDjkYXATaIa3m8Jrg0wY%2Bk18wKNVgHmYJc65epybI%2Bu8aIngMkvB3u%2FfLmW1GbuGogLzntTwT9nyuDfkw7ak3M0gqAPfHcbpLppR%2FvLS7s%2BmdfUW9wzx9NI6RU5KIwUM6EoJ8eiOVl1e%2BH6kasvrTG4hlI47ABNZ%2B0c0MeQu5Je7sHe9S45FZOKR5SEFXPMOemvMIGOqUBulSWHyrmAYbGmC2FQNFEz1m3ch7JvL0VzT%2B6cLAzK1ViKvKla0E8kTPAJlmxQ3%2BjOcVrHHc%2Bdd%2BLxRy%2BNfIdW44z70YiuSdAAzBax3WBrLnsmuIv9RjpUMu5s%2Bs5PX7M20pza0T%2Bs7o6hMxbSqRFwRSpCYSSyEFrr7vsFyqUzZgR7JeXKM8NhbJ5XlqOnwWUT%2FvFiR7VNNlNN1n8Pg%2F9EQ6Td0hO&X-Amz-Signature=f239bc44c75367a3238a17953cc3a7a4e7ed2543ddf094d07359788eea672a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HKLOROL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCcbSMMUt494jkbDNsftJYIfDJuiH9gM0prvV2Ha0q%2FBQIgHwMehncWBQk9bagtp4OGnOw94NhPMIb%2BiYaLfqV633kq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCdJMxYsdXnd0gnoeCrcA9PJkUoEnAX842NzR4MaTh0lRlMGbk8rHH7d%2FUYnqXqCGgx9UyCWAGHdki3L2wSUYJl5sUFyaw5n7fWGwWMVZIei%2BTh3lM2J6YiQvcEWLNoa193214uaCQ0RSwbqsPkBG2tOS1UlqPN7bL0acOtbnXTPbTjIZvGAfzrx1yFThvQQ3hkcKeFyPNp9WviBMoQSfDoyD9oQnELT33A8fyTpuNYpsT2sXSvMNI4B%2Fh4e9VE1jZGhpxOUIDF9IvuamIHeGXoLYa7tV8IOmO7cFStw4KynhA0DI1BfVeKV9HpBdoIdow4ngr0GzF4FqFY18yP68lk6CtStpZSfAHBm421u5XNxcuHM1DBxdEEr1MPyBHhfxAydybvUsvBKv7tg%2FzHqD988yFNfa3iQj8eaUJ7a%2BEGp2dw1q1w8lYlWR0oLebAimo1G9y7d51niJYCxOmcDjkYXATaIa3m8Jrg0wY%2Bk18wKNVgHmYJc65epybI%2Bu8aIngMkvB3u%2FfLmW1GbuGogLzntTwT9nyuDfkw7ak3M0gqAPfHcbpLppR%2FvLS7s%2BmdfUW9wzx9NI6RU5KIwUM6EoJ8eiOVl1e%2BH6kasvrTG4hlI47ABNZ%2B0c0MeQu5Je7sHe9S45FZOKR5SEFXPMOemvMIGOqUBulSWHyrmAYbGmC2FQNFEz1m3ch7JvL0VzT%2B6cLAzK1ViKvKla0E8kTPAJlmxQ3%2BjOcVrHHc%2Bdd%2BLxRy%2BNfIdW44z70YiuSdAAzBax3WBrLnsmuIv9RjpUMu5s%2Bs5PX7M20pza0T%2Bs7o6hMxbSqRFwRSpCYSSyEFrr7vsFyqUzZgR7JeXKM8NhbJ5XlqOnwWUT%2FvFiR7VNNlNN1n8Pg%2F9EQ6Td0hO&X-Amz-Signature=9f73db181c185628c86c99d9d9b872690a75c6f30145f370a532c25a65e143ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
