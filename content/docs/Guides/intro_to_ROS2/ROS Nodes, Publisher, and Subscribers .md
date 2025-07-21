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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7ATCFJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEacOb8xJWP%2BXvOUm6jqokxFc5sqAdfi0Goe0YRrQ53SAiBui%2FpwE%2BEuwPq9GqYp0SuZ9ImULx8ERcedVwjK4MJuLSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT1YaQaVOhIPKy69zKtwDb272i6cjPMox9%2FKb79Iu5BnAfYRbaRAhpeUtdtI9r37g%2BbHheINmodgUkwKFRSwo%2BFRDBXvtwC05Tkf9JEU5LKu6C131DY1WYHRNLb8RjqdsY2Kb%2Bb8%2BKQzqzEDKtrnHo6HHj2%2F%2FT80ibd9xi%2BMaDtfq3WRApo2mTNjvsuw3vizbaeIUhs9LxjVqTIgx2BfuFLAWMqCtKa9u%2BNwxUZbm%2Bk8fSOR7FAcMUEFck5ccHIi85dM5V2tXbBGAirJ0D6KHBv%2FVjZAY315TFvGJDN7f%2FeLqAjYEDZE0Xh9ulLSKlDFOZo8Dy%2Br%2F6aRfADZ5IuAcjDYb%2FgE9PNXBugDd3yy8FU3kCvVLPU%2BhLzV5%2FoIBkzIMkRUrSQbXV7EtoceL7LSS9%2FYEOIVhHNhEWM%2BJgb5MF20BvU8QwV8X%2FkycpoPEdKNQpBb2t1AP1BTsXIkV3dXi5mc0ddcYH1LahLR0e3Xxz8Wx2STlAW1%2F20F6RhhLIpNopDBRbjc%2FERZz0H8TkPHz13QG0hMj9mcqRZ2nqebVNLbDv6rJArL8JXlgMJf8l8uvFtS%2F1iiyQaV5JIPvYnwyczFsyPUTFQr6ENkeBdZOECJJEhOXC8QZVjBpcH6LjVPW%2FFIyNvKLlNh4bKQwkvn4wwY6pgH6hL9xkQXelvKemtRJLjQTCKTLfO8wjWSzYmIWVoSdhurSSca%2B8cujaUv6St%2B3ClGu6EERCjbjnL%2BCAeDVr%2FmVRlxYz4tHj0ss5Ayx0jphiDuO9qbb2yfcpU1cJbLXqSGbZY0jbNAX6%2FHKvmpWyiypKq2o9DcDmkn1wqmXWnzA5jo3chONyaZrGoUWrQ2RuclAuMuoqR0UCRpFrbTQj%2F5peFX5kx%2Fx&X-Amz-Signature=065f19f715daa42e0d54c2a6aedf816de7feee3fa99060d8b3a449f3e27bccaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7ATCFJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEacOb8xJWP%2BXvOUm6jqokxFc5sqAdfi0Goe0YRrQ53SAiBui%2FpwE%2BEuwPq9GqYp0SuZ9ImULx8ERcedVwjK4MJuLSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT1YaQaVOhIPKy69zKtwDb272i6cjPMox9%2FKb79Iu5BnAfYRbaRAhpeUtdtI9r37g%2BbHheINmodgUkwKFRSwo%2BFRDBXvtwC05Tkf9JEU5LKu6C131DY1WYHRNLb8RjqdsY2Kb%2Bb8%2BKQzqzEDKtrnHo6HHj2%2F%2FT80ibd9xi%2BMaDtfq3WRApo2mTNjvsuw3vizbaeIUhs9LxjVqTIgx2BfuFLAWMqCtKa9u%2BNwxUZbm%2Bk8fSOR7FAcMUEFck5ccHIi85dM5V2tXbBGAirJ0D6KHBv%2FVjZAY315TFvGJDN7f%2FeLqAjYEDZE0Xh9ulLSKlDFOZo8Dy%2Br%2F6aRfADZ5IuAcjDYb%2FgE9PNXBugDd3yy8FU3kCvVLPU%2BhLzV5%2FoIBkzIMkRUrSQbXV7EtoceL7LSS9%2FYEOIVhHNhEWM%2BJgb5MF20BvU8QwV8X%2FkycpoPEdKNQpBb2t1AP1BTsXIkV3dXi5mc0ddcYH1LahLR0e3Xxz8Wx2STlAW1%2F20F6RhhLIpNopDBRbjc%2FERZz0H8TkPHz13QG0hMj9mcqRZ2nqebVNLbDv6rJArL8JXlgMJf8l8uvFtS%2F1iiyQaV5JIPvYnwyczFsyPUTFQr6ENkeBdZOECJJEhOXC8QZVjBpcH6LjVPW%2FFIyNvKLlNh4bKQwkvn4wwY6pgH6hL9xkQXelvKemtRJLjQTCKTLfO8wjWSzYmIWVoSdhurSSca%2B8cujaUv6St%2B3ClGu6EERCjbjnL%2BCAeDVr%2FmVRlxYz4tHj0ss5Ayx0jphiDuO9qbb2yfcpU1cJbLXqSGbZY0jbNAX6%2FHKvmpWyiypKq2o9DcDmkn1wqmXWnzA5jo3chONyaZrGoUWrQ2RuclAuMuoqR0UCRpFrbTQj%2F5peFX5kx%2Fx&X-Amz-Signature=b1ad83362375d8203ce75272b620b3ca6e44cb88e4db7c0f77dc1483d4e46f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7ATCFJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEacOb8xJWP%2BXvOUm6jqokxFc5sqAdfi0Goe0YRrQ53SAiBui%2FpwE%2BEuwPq9GqYp0SuZ9ImULx8ERcedVwjK4MJuLSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT1YaQaVOhIPKy69zKtwDb272i6cjPMox9%2FKb79Iu5BnAfYRbaRAhpeUtdtI9r37g%2BbHheINmodgUkwKFRSwo%2BFRDBXvtwC05Tkf9JEU5LKu6C131DY1WYHRNLb8RjqdsY2Kb%2Bb8%2BKQzqzEDKtrnHo6HHj2%2F%2FT80ibd9xi%2BMaDtfq3WRApo2mTNjvsuw3vizbaeIUhs9LxjVqTIgx2BfuFLAWMqCtKa9u%2BNwxUZbm%2Bk8fSOR7FAcMUEFck5ccHIi85dM5V2tXbBGAirJ0D6KHBv%2FVjZAY315TFvGJDN7f%2FeLqAjYEDZE0Xh9ulLSKlDFOZo8Dy%2Br%2F6aRfADZ5IuAcjDYb%2FgE9PNXBugDd3yy8FU3kCvVLPU%2BhLzV5%2FoIBkzIMkRUrSQbXV7EtoceL7LSS9%2FYEOIVhHNhEWM%2BJgb5MF20BvU8QwV8X%2FkycpoPEdKNQpBb2t1AP1BTsXIkV3dXi5mc0ddcYH1LahLR0e3Xxz8Wx2STlAW1%2F20F6RhhLIpNopDBRbjc%2FERZz0H8TkPHz13QG0hMj9mcqRZ2nqebVNLbDv6rJArL8JXlgMJf8l8uvFtS%2F1iiyQaV5JIPvYnwyczFsyPUTFQr6ENkeBdZOECJJEhOXC8QZVjBpcH6LjVPW%2FFIyNvKLlNh4bKQwkvn4wwY6pgH6hL9xkQXelvKemtRJLjQTCKTLfO8wjWSzYmIWVoSdhurSSca%2B8cujaUv6St%2B3ClGu6EERCjbjnL%2BCAeDVr%2FmVRlxYz4tHj0ss5Ayx0jphiDuO9qbb2yfcpU1cJbLXqSGbZY0jbNAX6%2FHKvmpWyiypKq2o9DcDmkn1wqmXWnzA5jo3chONyaZrGoUWrQ2RuclAuMuoqR0UCRpFrbTQj%2F5peFX5kx%2Fx&X-Amz-Signature=0a1686236d5fbbedc2894e5c99ed466b1b0314e0e29ce179060b7ad1efeae96d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7ATCFJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEacOb8xJWP%2BXvOUm6jqokxFc5sqAdfi0Goe0YRrQ53SAiBui%2FpwE%2BEuwPq9GqYp0SuZ9ImULx8ERcedVwjK4MJuLSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT1YaQaVOhIPKy69zKtwDb272i6cjPMox9%2FKb79Iu5BnAfYRbaRAhpeUtdtI9r37g%2BbHheINmodgUkwKFRSwo%2BFRDBXvtwC05Tkf9JEU5LKu6C131DY1WYHRNLb8RjqdsY2Kb%2Bb8%2BKQzqzEDKtrnHo6HHj2%2F%2FT80ibd9xi%2BMaDtfq3WRApo2mTNjvsuw3vizbaeIUhs9LxjVqTIgx2BfuFLAWMqCtKa9u%2BNwxUZbm%2Bk8fSOR7FAcMUEFck5ccHIi85dM5V2tXbBGAirJ0D6KHBv%2FVjZAY315TFvGJDN7f%2FeLqAjYEDZE0Xh9ulLSKlDFOZo8Dy%2Br%2F6aRfADZ5IuAcjDYb%2FgE9PNXBugDd3yy8FU3kCvVLPU%2BhLzV5%2FoIBkzIMkRUrSQbXV7EtoceL7LSS9%2FYEOIVhHNhEWM%2BJgb5MF20BvU8QwV8X%2FkycpoPEdKNQpBb2t1AP1BTsXIkV3dXi5mc0ddcYH1LahLR0e3Xxz8Wx2STlAW1%2F20F6RhhLIpNopDBRbjc%2FERZz0H8TkPHz13QG0hMj9mcqRZ2nqebVNLbDv6rJArL8JXlgMJf8l8uvFtS%2F1iiyQaV5JIPvYnwyczFsyPUTFQr6ENkeBdZOECJJEhOXC8QZVjBpcH6LjVPW%2FFIyNvKLlNh4bKQwkvn4wwY6pgH6hL9xkQXelvKemtRJLjQTCKTLfO8wjWSzYmIWVoSdhurSSca%2B8cujaUv6St%2B3ClGu6EERCjbjnL%2BCAeDVr%2FmVRlxYz4tHj0ss5Ayx0jphiDuO9qbb2yfcpU1cJbLXqSGbZY0jbNAX6%2FHKvmpWyiypKq2o9DcDmkn1wqmXWnzA5jo3chONyaZrGoUWrQ2RuclAuMuoqR0UCRpFrbTQj%2F5peFX5kx%2Fx&X-Amz-Signature=ce0fd2135e08619652214f90b61a36c3fc80538981255ec73c522ecc734574e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7ATCFJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEacOb8xJWP%2BXvOUm6jqokxFc5sqAdfi0Goe0YRrQ53SAiBui%2FpwE%2BEuwPq9GqYp0SuZ9ImULx8ERcedVwjK4MJuLSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT1YaQaVOhIPKy69zKtwDb272i6cjPMox9%2FKb79Iu5BnAfYRbaRAhpeUtdtI9r37g%2BbHheINmodgUkwKFRSwo%2BFRDBXvtwC05Tkf9JEU5LKu6C131DY1WYHRNLb8RjqdsY2Kb%2Bb8%2BKQzqzEDKtrnHo6HHj2%2F%2FT80ibd9xi%2BMaDtfq3WRApo2mTNjvsuw3vizbaeIUhs9LxjVqTIgx2BfuFLAWMqCtKa9u%2BNwxUZbm%2Bk8fSOR7FAcMUEFck5ccHIi85dM5V2tXbBGAirJ0D6KHBv%2FVjZAY315TFvGJDN7f%2FeLqAjYEDZE0Xh9ulLSKlDFOZo8Dy%2Br%2F6aRfADZ5IuAcjDYb%2FgE9PNXBugDd3yy8FU3kCvVLPU%2BhLzV5%2FoIBkzIMkRUrSQbXV7EtoceL7LSS9%2FYEOIVhHNhEWM%2BJgb5MF20BvU8QwV8X%2FkycpoPEdKNQpBb2t1AP1BTsXIkV3dXi5mc0ddcYH1LahLR0e3Xxz8Wx2STlAW1%2F20F6RhhLIpNopDBRbjc%2FERZz0H8TkPHz13QG0hMj9mcqRZ2nqebVNLbDv6rJArL8JXlgMJf8l8uvFtS%2F1iiyQaV5JIPvYnwyczFsyPUTFQr6ENkeBdZOECJJEhOXC8QZVjBpcH6LjVPW%2FFIyNvKLlNh4bKQwkvn4wwY6pgH6hL9xkQXelvKemtRJLjQTCKTLfO8wjWSzYmIWVoSdhurSSca%2B8cujaUv6St%2B3ClGu6EERCjbjnL%2BCAeDVr%2FmVRlxYz4tHj0ss5Ayx0jphiDuO9qbb2yfcpU1cJbLXqSGbZY0jbNAX6%2FHKvmpWyiypKq2o9DcDmkn1wqmXWnzA5jo3chONyaZrGoUWrQ2RuclAuMuoqR0UCRpFrbTQj%2F5peFX5kx%2Fx&X-Amz-Signature=91b95a4e41e70e866271603b3c18c06195e826c813611257c9dfdb119fe07d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7ATCFJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEacOb8xJWP%2BXvOUm6jqokxFc5sqAdfi0Goe0YRrQ53SAiBui%2FpwE%2BEuwPq9GqYp0SuZ9ImULx8ERcedVwjK4MJuLSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT1YaQaVOhIPKy69zKtwDb272i6cjPMox9%2FKb79Iu5BnAfYRbaRAhpeUtdtI9r37g%2BbHheINmodgUkwKFRSwo%2BFRDBXvtwC05Tkf9JEU5LKu6C131DY1WYHRNLb8RjqdsY2Kb%2Bb8%2BKQzqzEDKtrnHo6HHj2%2F%2FT80ibd9xi%2BMaDtfq3WRApo2mTNjvsuw3vizbaeIUhs9LxjVqTIgx2BfuFLAWMqCtKa9u%2BNwxUZbm%2Bk8fSOR7FAcMUEFck5ccHIi85dM5V2tXbBGAirJ0D6KHBv%2FVjZAY315TFvGJDN7f%2FeLqAjYEDZE0Xh9ulLSKlDFOZo8Dy%2Br%2F6aRfADZ5IuAcjDYb%2FgE9PNXBugDd3yy8FU3kCvVLPU%2BhLzV5%2FoIBkzIMkRUrSQbXV7EtoceL7LSS9%2FYEOIVhHNhEWM%2BJgb5MF20BvU8QwV8X%2FkycpoPEdKNQpBb2t1AP1BTsXIkV3dXi5mc0ddcYH1LahLR0e3Xxz8Wx2STlAW1%2F20F6RhhLIpNopDBRbjc%2FERZz0H8TkPHz13QG0hMj9mcqRZ2nqebVNLbDv6rJArL8JXlgMJf8l8uvFtS%2F1iiyQaV5JIPvYnwyczFsyPUTFQr6ENkeBdZOECJJEhOXC8QZVjBpcH6LjVPW%2FFIyNvKLlNh4bKQwkvn4wwY6pgH6hL9xkQXelvKemtRJLjQTCKTLfO8wjWSzYmIWVoSdhurSSca%2B8cujaUv6St%2B3ClGu6EERCjbjnL%2BCAeDVr%2FmVRlxYz4tHj0ss5Ayx0jphiDuO9qbb2yfcpU1cJbLXqSGbZY0jbNAX6%2FHKvmpWyiypKq2o9DcDmkn1wqmXWnzA5jo3chONyaZrGoUWrQ2RuclAuMuoqR0UCRpFrbTQj%2F5peFX5kx%2Fx&X-Amz-Signature=7bcbceef75101a6a8def76f2642781a2559eb8a5a7e347357bd4620bf01085fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7ATCFJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEacOb8xJWP%2BXvOUm6jqokxFc5sqAdfi0Goe0YRrQ53SAiBui%2FpwE%2BEuwPq9GqYp0SuZ9ImULx8ERcedVwjK4MJuLSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT1YaQaVOhIPKy69zKtwDb272i6cjPMox9%2FKb79Iu5BnAfYRbaRAhpeUtdtI9r37g%2BbHheINmodgUkwKFRSwo%2BFRDBXvtwC05Tkf9JEU5LKu6C131DY1WYHRNLb8RjqdsY2Kb%2Bb8%2BKQzqzEDKtrnHo6HHj2%2F%2FT80ibd9xi%2BMaDtfq3WRApo2mTNjvsuw3vizbaeIUhs9LxjVqTIgx2BfuFLAWMqCtKa9u%2BNwxUZbm%2Bk8fSOR7FAcMUEFck5ccHIi85dM5V2tXbBGAirJ0D6KHBv%2FVjZAY315TFvGJDN7f%2FeLqAjYEDZE0Xh9ulLSKlDFOZo8Dy%2Br%2F6aRfADZ5IuAcjDYb%2FgE9PNXBugDd3yy8FU3kCvVLPU%2BhLzV5%2FoIBkzIMkRUrSQbXV7EtoceL7LSS9%2FYEOIVhHNhEWM%2BJgb5MF20BvU8QwV8X%2FkycpoPEdKNQpBb2t1AP1BTsXIkV3dXi5mc0ddcYH1LahLR0e3Xxz8Wx2STlAW1%2F20F6RhhLIpNopDBRbjc%2FERZz0H8TkPHz13QG0hMj9mcqRZ2nqebVNLbDv6rJArL8JXlgMJf8l8uvFtS%2F1iiyQaV5JIPvYnwyczFsyPUTFQr6ENkeBdZOECJJEhOXC8QZVjBpcH6LjVPW%2FFIyNvKLlNh4bKQwkvn4wwY6pgH6hL9xkQXelvKemtRJLjQTCKTLfO8wjWSzYmIWVoSdhurSSca%2B8cujaUv6St%2B3ClGu6EERCjbjnL%2BCAeDVr%2FmVRlxYz4tHj0ss5Ayx0jphiDuO9qbb2yfcpU1cJbLXqSGbZY0jbNAX6%2FHKvmpWyiypKq2o9DcDmkn1wqmXWnzA5jo3chONyaZrGoUWrQ2RuclAuMuoqR0UCRpFrbTQj%2F5peFX5kx%2Fx&X-Amz-Signature=de92be6a99f54131e8d38170f7f6eb80af15383d9f161fcac24241f323775d35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7ATCFJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEacOb8xJWP%2BXvOUm6jqokxFc5sqAdfi0Goe0YRrQ53SAiBui%2FpwE%2BEuwPq9GqYp0SuZ9ImULx8ERcedVwjK4MJuLSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT1YaQaVOhIPKy69zKtwDb272i6cjPMox9%2FKb79Iu5BnAfYRbaRAhpeUtdtI9r37g%2BbHheINmodgUkwKFRSwo%2BFRDBXvtwC05Tkf9JEU5LKu6C131DY1WYHRNLb8RjqdsY2Kb%2Bb8%2BKQzqzEDKtrnHo6HHj2%2F%2FT80ibd9xi%2BMaDtfq3WRApo2mTNjvsuw3vizbaeIUhs9LxjVqTIgx2BfuFLAWMqCtKa9u%2BNwxUZbm%2Bk8fSOR7FAcMUEFck5ccHIi85dM5V2tXbBGAirJ0D6KHBv%2FVjZAY315TFvGJDN7f%2FeLqAjYEDZE0Xh9ulLSKlDFOZo8Dy%2Br%2F6aRfADZ5IuAcjDYb%2FgE9PNXBugDd3yy8FU3kCvVLPU%2BhLzV5%2FoIBkzIMkRUrSQbXV7EtoceL7LSS9%2FYEOIVhHNhEWM%2BJgb5MF20BvU8QwV8X%2FkycpoPEdKNQpBb2t1AP1BTsXIkV3dXi5mc0ddcYH1LahLR0e3Xxz8Wx2STlAW1%2F20F6RhhLIpNopDBRbjc%2FERZz0H8TkPHz13QG0hMj9mcqRZ2nqebVNLbDv6rJArL8JXlgMJf8l8uvFtS%2F1iiyQaV5JIPvYnwyczFsyPUTFQr6ENkeBdZOECJJEhOXC8QZVjBpcH6LjVPW%2FFIyNvKLlNh4bKQwkvn4wwY6pgH6hL9xkQXelvKemtRJLjQTCKTLfO8wjWSzYmIWVoSdhurSSca%2B8cujaUv6St%2B3ClGu6EERCjbjnL%2BCAeDVr%2FmVRlxYz4tHj0ss5Ayx0jphiDuO9qbb2yfcpU1cJbLXqSGbZY0jbNAX6%2FHKvmpWyiypKq2o9DcDmkn1wqmXWnzA5jo3chONyaZrGoUWrQ2RuclAuMuoqR0UCRpFrbTQj%2F5peFX5kx%2Fx&X-Amz-Signature=1b1f972561ac4bfe0d2fa1fd1f947f98fa5fabe2d0c1d458a18a58a1b7f59e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
