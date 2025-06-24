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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5J2Q4SD%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHKwMzZEZgxehd5eSApNvvSgxOB3jPtiD58KRoDVNmG2AiA9GrUfflu7j2E0lFqXARTBunnUiMJ5Y26U5vd3eTK13yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM4%2BRzDsZqxKgStN5NKtwDD4Nif0n2wFjKIdLaod1LzyEj3g0y%2F4ziiMPxb9I5MuqxMa789flsv4lF%2F5DBgVTd0wgP6wdmnc9wUmx%2FQ9ZwyLzA860k36fHmegq2AkgNkJ0hU8SMO4wZDKqu7L3mQeQSLf44a8ecjo5d%2FkYw68f%2BW223etUUrSnJj59OCE0aqVc9FuYdAvztIBXpEXBEaFxWZDL%2FZXNH9%2BWjvxExHU01eZn1XFXNnseCinqaV6CtfwOF5ltOuAZT406GRdcSsxwvT%2B9jeUTEwnVYwmGZlR1QBTxkwF8xUo%2FTnZVfdlW1XGAh7W7ssyQ95krNb3gcASdb%2BAAa2nVBMj4EAwrp%2FRK63SlqgbhGnM0al%2BRUcJ1wC0lkf3VENj5ahQbnFZz6En6teBqVYhLeo%2FFuLAvTE%2Fix3ZIjtmNl2bZiVuUmhZeBxZEvZ13M3wupSGz4HlRlmCmWK%2FAzyFAOCIHLZvnb7ykDEPEMtmWFezX2FzodUeLTR1QIy1BFhyr3aLyYGU2JhecKH4rY5stc17kEP8ARzIcMq%2Ffq3pu59oswkH6szdKkKk3%2B%2BXXL8WH1KfHlfteWSXAzvlcO2rShkhgt5d5qUb7dHkgpkHmbRuCkpJl2iuQtF9Ajq0pYCuJ%2B5jy%2FoIw15DrwgY6pgG21bZWpL7ry3OaEVmQqLHJTVLJ%2BfJu5QT7lVEaUcu1rdXRGtEbC75BzmWAZiXJ5cYmom%2FWbaHY0%2F2x2HVhM%2FJr4YgO%2BegNReTICE7gzCH%2Bt9us3pu9NqhoGxk8hpdB8XxZRR4ZI60jjYnoVZEo5ZdbrP7CqrZGdbZh7Du8zwaQSBxogz5H8%2BfsexTpWwn7VOBV1K3Qp2%2FF9JgwpQGNzi87dxoc3KEK&X-Amz-Signature=d10e7845d6244c2c0f9ccd6ffdfe104d76af958296292eb7897b6ea06de18731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5J2Q4SD%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHKwMzZEZgxehd5eSApNvvSgxOB3jPtiD58KRoDVNmG2AiA9GrUfflu7j2E0lFqXARTBunnUiMJ5Y26U5vd3eTK13yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM4%2BRzDsZqxKgStN5NKtwDD4Nif0n2wFjKIdLaod1LzyEj3g0y%2F4ziiMPxb9I5MuqxMa789flsv4lF%2F5DBgVTd0wgP6wdmnc9wUmx%2FQ9ZwyLzA860k36fHmegq2AkgNkJ0hU8SMO4wZDKqu7L3mQeQSLf44a8ecjo5d%2FkYw68f%2BW223etUUrSnJj59OCE0aqVc9FuYdAvztIBXpEXBEaFxWZDL%2FZXNH9%2BWjvxExHU01eZn1XFXNnseCinqaV6CtfwOF5ltOuAZT406GRdcSsxwvT%2B9jeUTEwnVYwmGZlR1QBTxkwF8xUo%2FTnZVfdlW1XGAh7W7ssyQ95krNb3gcASdb%2BAAa2nVBMj4EAwrp%2FRK63SlqgbhGnM0al%2BRUcJ1wC0lkf3VENj5ahQbnFZz6En6teBqVYhLeo%2FFuLAvTE%2Fix3ZIjtmNl2bZiVuUmhZeBxZEvZ13M3wupSGz4HlRlmCmWK%2FAzyFAOCIHLZvnb7ykDEPEMtmWFezX2FzodUeLTR1QIy1BFhyr3aLyYGU2JhecKH4rY5stc17kEP8ARzIcMq%2Ffq3pu59oswkH6szdKkKk3%2B%2BXXL8WH1KfHlfteWSXAzvlcO2rShkhgt5d5qUb7dHkgpkHmbRuCkpJl2iuQtF9Ajq0pYCuJ%2B5jy%2FoIw15DrwgY6pgG21bZWpL7ry3OaEVmQqLHJTVLJ%2BfJu5QT7lVEaUcu1rdXRGtEbC75BzmWAZiXJ5cYmom%2FWbaHY0%2F2x2HVhM%2FJr4YgO%2BegNReTICE7gzCH%2Bt9us3pu9NqhoGxk8hpdB8XxZRR4ZI60jjYnoVZEo5ZdbrP7CqrZGdbZh7Du8zwaQSBxogz5H8%2BfsexTpWwn7VOBV1K3Qp2%2FF9JgwpQGNzi87dxoc3KEK&X-Amz-Signature=1677a90ec9001c9bc018b08215e69d9f4a0e49a6fd7b88bffd856aef36deb7bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5J2Q4SD%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHKwMzZEZgxehd5eSApNvvSgxOB3jPtiD58KRoDVNmG2AiA9GrUfflu7j2E0lFqXARTBunnUiMJ5Y26U5vd3eTK13yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM4%2BRzDsZqxKgStN5NKtwDD4Nif0n2wFjKIdLaod1LzyEj3g0y%2F4ziiMPxb9I5MuqxMa789flsv4lF%2F5DBgVTd0wgP6wdmnc9wUmx%2FQ9ZwyLzA860k36fHmegq2AkgNkJ0hU8SMO4wZDKqu7L3mQeQSLf44a8ecjo5d%2FkYw68f%2BW223etUUrSnJj59OCE0aqVc9FuYdAvztIBXpEXBEaFxWZDL%2FZXNH9%2BWjvxExHU01eZn1XFXNnseCinqaV6CtfwOF5ltOuAZT406GRdcSsxwvT%2B9jeUTEwnVYwmGZlR1QBTxkwF8xUo%2FTnZVfdlW1XGAh7W7ssyQ95krNb3gcASdb%2BAAa2nVBMj4EAwrp%2FRK63SlqgbhGnM0al%2BRUcJ1wC0lkf3VENj5ahQbnFZz6En6teBqVYhLeo%2FFuLAvTE%2Fix3ZIjtmNl2bZiVuUmhZeBxZEvZ13M3wupSGz4HlRlmCmWK%2FAzyFAOCIHLZvnb7ykDEPEMtmWFezX2FzodUeLTR1QIy1BFhyr3aLyYGU2JhecKH4rY5stc17kEP8ARzIcMq%2Ffq3pu59oswkH6szdKkKk3%2B%2BXXL8WH1KfHlfteWSXAzvlcO2rShkhgt5d5qUb7dHkgpkHmbRuCkpJl2iuQtF9Ajq0pYCuJ%2B5jy%2FoIw15DrwgY6pgG21bZWpL7ry3OaEVmQqLHJTVLJ%2BfJu5QT7lVEaUcu1rdXRGtEbC75BzmWAZiXJ5cYmom%2FWbaHY0%2F2x2HVhM%2FJr4YgO%2BegNReTICE7gzCH%2Bt9us3pu9NqhoGxk8hpdB8XxZRR4ZI60jjYnoVZEo5ZdbrP7CqrZGdbZh7Du8zwaQSBxogz5H8%2BfsexTpWwn7VOBV1K3Qp2%2FF9JgwpQGNzi87dxoc3KEK&X-Amz-Signature=c896de1c21f1a60236bb455bef141ee1152f99e8ca4bb4eab401505d170d63c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5J2Q4SD%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHKwMzZEZgxehd5eSApNvvSgxOB3jPtiD58KRoDVNmG2AiA9GrUfflu7j2E0lFqXARTBunnUiMJ5Y26U5vd3eTK13yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM4%2BRzDsZqxKgStN5NKtwDD4Nif0n2wFjKIdLaod1LzyEj3g0y%2F4ziiMPxb9I5MuqxMa789flsv4lF%2F5DBgVTd0wgP6wdmnc9wUmx%2FQ9ZwyLzA860k36fHmegq2AkgNkJ0hU8SMO4wZDKqu7L3mQeQSLf44a8ecjo5d%2FkYw68f%2BW223etUUrSnJj59OCE0aqVc9FuYdAvztIBXpEXBEaFxWZDL%2FZXNH9%2BWjvxExHU01eZn1XFXNnseCinqaV6CtfwOF5ltOuAZT406GRdcSsxwvT%2B9jeUTEwnVYwmGZlR1QBTxkwF8xUo%2FTnZVfdlW1XGAh7W7ssyQ95krNb3gcASdb%2BAAa2nVBMj4EAwrp%2FRK63SlqgbhGnM0al%2BRUcJ1wC0lkf3VENj5ahQbnFZz6En6teBqVYhLeo%2FFuLAvTE%2Fix3ZIjtmNl2bZiVuUmhZeBxZEvZ13M3wupSGz4HlRlmCmWK%2FAzyFAOCIHLZvnb7ykDEPEMtmWFezX2FzodUeLTR1QIy1BFhyr3aLyYGU2JhecKH4rY5stc17kEP8ARzIcMq%2Ffq3pu59oswkH6szdKkKk3%2B%2BXXL8WH1KfHlfteWSXAzvlcO2rShkhgt5d5qUb7dHkgpkHmbRuCkpJl2iuQtF9Ajq0pYCuJ%2B5jy%2FoIw15DrwgY6pgG21bZWpL7ry3OaEVmQqLHJTVLJ%2BfJu5QT7lVEaUcu1rdXRGtEbC75BzmWAZiXJ5cYmom%2FWbaHY0%2F2x2HVhM%2FJr4YgO%2BegNReTICE7gzCH%2Bt9us3pu9NqhoGxk8hpdB8XxZRR4ZI60jjYnoVZEo5ZdbrP7CqrZGdbZh7Du8zwaQSBxogz5H8%2BfsexTpWwn7VOBV1K3Qp2%2FF9JgwpQGNzi87dxoc3KEK&X-Amz-Signature=1d1e9f5833e85ba7f07bffc3cafa4365b611faaefecf5e04f3c8037747ced481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5J2Q4SD%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHKwMzZEZgxehd5eSApNvvSgxOB3jPtiD58KRoDVNmG2AiA9GrUfflu7j2E0lFqXARTBunnUiMJ5Y26U5vd3eTK13yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM4%2BRzDsZqxKgStN5NKtwDD4Nif0n2wFjKIdLaod1LzyEj3g0y%2F4ziiMPxb9I5MuqxMa789flsv4lF%2F5DBgVTd0wgP6wdmnc9wUmx%2FQ9ZwyLzA860k36fHmegq2AkgNkJ0hU8SMO4wZDKqu7L3mQeQSLf44a8ecjo5d%2FkYw68f%2BW223etUUrSnJj59OCE0aqVc9FuYdAvztIBXpEXBEaFxWZDL%2FZXNH9%2BWjvxExHU01eZn1XFXNnseCinqaV6CtfwOF5ltOuAZT406GRdcSsxwvT%2B9jeUTEwnVYwmGZlR1QBTxkwF8xUo%2FTnZVfdlW1XGAh7W7ssyQ95krNb3gcASdb%2BAAa2nVBMj4EAwrp%2FRK63SlqgbhGnM0al%2BRUcJ1wC0lkf3VENj5ahQbnFZz6En6teBqVYhLeo%2FFuLAvTE%2Fix3ZIjtmNl2bZiVuUmhZeBxZEvZ13M3wupSGz4HlRlmCmWK%2FAzyFAOCIHLZvnb7ykDEPEMtmWFezX2FzodUeLTR1QIy1BFhyr3aLyYGU2JhecKH4rY5stc17kEP8ARzIcMq%2Ffq3pu59oswkH6szdKkKk3%2B%2BXXL8WH1KfHlfteWSXAzvlcO2rShkhgt5d5qUb7dHkgpkHmbRuCkpJl2iuQtF9Ajq0pYCuJ%2B5jy%2FoIw15DrwgY6pgG21bZWpL7ry3OaEVmQqLHJTVLJ%2BfJu5QT7lVEaUcu1rdXRGtEbC75BzmWAZiXJ5cYmom%2FWbaHY0%2F2x2HVhM%2FJr4YgO%2BegNReTICE7gzCH%2Bt9us3pu9NqhoGxk8hpdB8XxZRR4ZI60jjYnoVZEo5ZdbrP7CqrZGdbZh7Du8zwaQSBxogz5H8%2BfsexTpWwn7VOBV1K3Qp2%2FF9JgwpQGNzi87dxoc3KEK&X-Amz-Signature=efe7efb9b93c63f7d442ef60eb06137c650410b8bb4606ce36c6ceced9469083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5J2Q4SD%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHKwMzZEZgxehd5eSApNvvSgxOB3jPtiD58KRoDVNmG2AiA9GrUfflu7j2E0lFqXARTBunnUiMJ5Y26U5vd3eTK13yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM4%2BRzDsZqxKgStN5NKtwDD4Nif0n2wFjKIdLaod1LzyEj3g0y%2F4ziiMPxb9I5MuqxMa789flsv4lF%2F5DBgVTd0wgP6wdmnc9wUmx%2FQ9ZwyLzA860k36fHmegq2AkgNkJ0hU8SMO4wZDKqu7L3mQeQSLf44a8ecjo5d%2FkYw68f%2BW223etUUrSnJj59OCE0aqVc9FuYdAvztIBXpEXBEaFxWZDL%2FZXNH9%2BWjvxExHU01eZn1XFXNnseCinqaV6CtfwOF5ltOuAZT406GRdcSsxwvT%2B9jeUTEwnVYwmGZlR1QBTxkwF8xUo%2FTnZVfdlW1XGAh7W7ssyQ95krNb3gcASdb%2BAAa2nVBMj4EAwrp%2FRK63SlqgbhGnM0al%2BRUcJ1wC0lkf3VENj5ahQbnFZz6En6teBqVYhLeo%2FFuLAvTE%2Fix3ZIjtmNl2bZiVuUmhZeBxZEvZ13M3wupSGz4HlRlmCmWK%2FAzyFAOCIHLZvnb7ykDEPEMtmWFezX2FzodUeLTR1QIy1BFhyr3aLyYGU2JhecKH4rY5stc17kEP8ARzIcMq%2Ffq3pu59oswkH6szdKkKk3%2B%2BXXL8WH1KfHlfteWSXAzvlcO2rShkhgt5d5qUb7dHkgpkHmbRuCkpJl2iuQtF9Ajq0pYCuJ%2B5jy%2FoIw15DrwgY6pgG21bZWpL7ry3OaEVmQqLHJTVLJ%2BfJu5QT7lVEaUcu1rdXRGtEbC75BzmWAZiXJ5cYmom%2FWbaHY0%2F2x2HVhM%2FJr4YgO%2BegNReTICE7gzCH%2Bt9us3pu9NqhoGxk8hpdB8XxZRR4ZI60jjYnoVZEo5ZdbrP7CqrZGdbZh7Du8zwaQSBxogz5H8%2BfsexTpWwn7VOBV1K3Qp2%2FF9JgwpQGNzi87dxoc3KEK&X-Amz-Signature=be917a5409904ddb2326c26368fd9512f2e098ab0a51fe81625ec022d77046f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5J2Q4SD%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHKwMzZEZgxehd5eSApNvvSgxOB3jPtiD58KRoDVNmG2AiA9GrUfflu7j2E0lFqXARTBunnUiMJ5Y26U5vd3eTK13yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM4%2BRzDsZqxKgStN5NKtwDD4Nif0n2wFjKIdLaod1LzyEj3g0y%2F4ziiMPxb9I5MuqxMa789flsv4lF%2F5DBgVTd0wgP6wdmnc9wUmx%2FQ9ZwyLzA860k36fHmegq2AkgNkJ0hU8SMO4wZDKqu7L3mQeQSLf44a8ecjo5d%2FkYw68f%2BW223etUUrSnJj59OCE0aqVc9FuYdAvztIBXpEXBEaFxWZDL%2FZXNH9%2BWjvxExHU01eZn1XFXNnseCinqaV6CtfwOF5ltOuAZT406GRdcSsxwvT%2B9jeUTEwnVYwmGZlR1QBTxkwF8xUo%2FTnZVfdlW1XGAh7W7ssyQ95krNb3gcASdb%2BAAa2nVBMj4EAwrp%2FRK63SlqgbhGnM0al%2BRUcJ1wC0lkf3VENj5ahQbnFZz6En6teBqVYhLeo%2FFuLAvTE%2Fix3ZIjtmNl2bZiVuUmhZeBxZEvZ13M3wupSGz4HlRlmCmWK%2FAzyFAOCIHLZvnb7ykDEPEMtmWFezX2FzodUeLTR1QIy1BFhyr3aLyYGU2JhecKH4rY5stc17kEP8ARzIcMq%2Ffq3pu59oswkH6szdKkKk3%2B%2BXXL8WH1KfHlfteWSXAzvlcO2rShkhgt5d5qUb7dHkgpkHmbRuCkpJl2iuQtF9Ajq0pYCuJ%2B5jy%2FoIw15DrwgY6pgG21bZWpL7ry3OaEVmQqLHJTVLJ%2BfJu5QT7lVEaUcu1rdXRGtEbC75BzmWAZiXJ5cYmom%2FWbaHY0%2F2x2HVhM%2FJr4YgO%2BegNReTICE7gzCH%2Bt9us3pu9NqhoGxk8hpdB8XxZRR4ZI60jjYnoVZEo5ZdbrP7CqrZGdbZh7Du8zwaQSBxogz5H8%2BfsexTpWwn7VOBV1K3Qp2%2FF9JgwpQGNzi87dxoc3KEK&X-Amz-Signature=56bdf3fbfb092a40bc9e0944ab5cafa65ea2e4aa05ac7641766c5f4f8183ad4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5J2Q4SD%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHKwMzZEZgxehd5eSApNvvSgxOB3jPtiD58KRoDVNmG2AiA9GrUfflu7j2E0lFqXARTBunnUiMJ5Y26U5vd3eTK13yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM4%2BRzDsZqxKgStN5NKtwDD4Nif0n2wFjKIdLaod1LzyEj3g0y%2F4ziiMPxb9I5MuqxMa789flsv4lF%2F5DBgVTd0wgP6wdmnc9wUmx%2FQ9ZwyLzA860k36fHmegq2AkgNkJ0hU8SMO4wZDKqu7L3mQeQSLf44a8ecjo5d%2FkYw68f%2BW223etUUrSnJj59OCE0aqVc9FuYdAvztIBXpEXBEaFxWZDL%2FZXNH9%2BWjvxExHU01eZn1XFXNnseCinqaV6CtfwOF5ltOuAZT406GRdcSsxwvT%2B9jeUTEwnVYwmGZlR1QBTxkwF8xUo%2FTnZVfdlW1XGAh7W7ssyQ95krNb3gcASdb%2BAAa2nVBMj4EAwrp%2FRK63SlqgbhGnM0al%2BRUcJ1wC0lkf3VENj5ahQbnFZz6En6teBqVYhLeo%2FFuLAvTE%2Fix3ZIjtmNl2bZiVuUmhZeBxZEvZ13M3wupSGz4HlRlmCmWK%2FAzyFAOCIHLZvnb7ykDEPEMtmWFezX2FzodUeLTR1QIy1BFhyr3aLyYGU2JhecKH4rY5stc17kEP8ARzIcMq%2Ffq3pu59oswkH6szdKkKk3%2B%2BXXL8WH1KfHlfteWSXAzvlcO2rShkhgt5d5qUb7dHkgpkHmbRuCkpJl2iuQtF9Ajq0pYCuJ%2B5jy%2FoIw15DrwgY6pgG21bZWpL7ry3OaEVmQqLHJTVLJ%2BfJu5QT7lVEaUcu1rdXRGtEbC75BzmWAZiXJ5cYmom%2FWbaHY0%2F2x2HVhM%2FJr4YgO%2BegNReTICE7gzCH%2Bt9us3pu9NqhoGxk8hpdB8XxZRR4ZI60jjYnoVZEo5ZdbrP7CqrZGdbZh7Du8zwaQSBxogz5H8%2BfsexTpWwn7VOBV1K3Qp2%2FF9JgwpQGNzi87dxoc3KEK&X-Amz-Signature=554e9196809731870e8043c2e4152d1273e28cf48d93314f4c5e07f184e66c6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
