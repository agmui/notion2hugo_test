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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKOQHMT%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFGq3OIP5r0vbJnfngFi6iFzLgWJS0C2opW6C5CavNPdAiEAk4Qoxya3xtf7T7vYDI0P3UayveWhQwiKd08xSeO%2FZJQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBUr64AYFO%2F7pewxQSrcA%2F9yZPI8e4zcWwtf3jMxd9mWb6F0NyvMMeWrqR%2F9FkC%2FWjNsNuZPtNTSw8czMs8%2FGOnWBsE1f9z0sVaniAOtsp%2FDYcM9cWhQdlzObAbr7gz08A7uy%2FhEOEVYQAfiplPGxzuC6VJMF5Trx23sw1R1sRsix%2FmIqrFNth8DuQr74ttgCb9h1sAalixUbYDDl5BEVTmPn1VCGedxME%2Fiwb8ppLGUJk%2FpnzN9jx4oqqiEEX5kYqwWm2kC0MhWlE%2FnBIlMwNJW8L1tGcC0bgC0XO2ryhdZ8xipQdXxxnQOov8lN20xPWdTVZPCiMm7M%2BY4pXVYL9Pads9xSK32BLQ4dp0hTa6zXwDq%2BoQH533KO4Cn4pMgRPJ0d02KpmiDFi0iDPTxyxeeRngOTgaB037EByXDequUDBzuMdrSVScIcRBqK7mNzkypMJDMP%2BXU31h7Lms2k6UzLV5tXxWLG5iUFgUTXwhgxJ%2FPl8XguNQwvvMCPbcUThEJdxE1ql3JkwAtkFKUIaUcg8OQltLd8BfFvlqk%2BBR7Xz2b3sVq%2FxZcrqRPCLlkeKspG%2Bgu2oshbfH0DFEsGCLkBS83JypvzCgIJK14B%2F6CGPAA1es%2Fs%2Fz5CIyPZCoksUfGePi2Q%2FI4KgQcMOz8mL0GOqUB6%2FXSnh2ptSY1n1EUIqhWU5PyIkeNCUc7AKlJXzSmWFalL56sTS08P2zVTSbecdUY%2FF%2Fe0L4Dda9SC0jSGTiT0ya4B2WORcygRIob0T9KpugGm2VvLuPkz4wsbshEcQqBg%2Ftx6OwBCQybWRt3SsmkohSfSELYoCzKN7qic%2Fh2hdCs%2F%2F6BO3SNEO2fwE1oxFIM8JkQVEGTDAIOBsuMS%2FCCa9GG56PR&X-Amz-Signature=bab2536b9313c639347e78ba6c6762fdedaa1d9b704ea3e7cf6d55fe13c2dfad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKOQHMT%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFGq3OIP5r0vbJnfngFi6iFzLgWJS0C2opW6C5CavNPdAiEAk4Qoxya3xtf7T7vYDI0P3UayveWhQwiKd08xSeO%2FZJQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBUr64AYFO%2F7pewxQSrcA%2F9yZPI8e4zcWwtf3jMxd9mWb6F0NyvMMeWrqR%2F9FkC%2FWjNsNuZPtNTSw8czMs8%2FGOnWBsE1f9z0sVaniAOtsp%2FDYcM9cWhQdlzObAbr7gz08A7uy%2FhEOEVYQAfiplPGxzuC6VJMF5Trx23sw1R1sRsix%2FmIqrFNth8DuQr74ttgCb9h1sAalixUbYDDl5BEVTmPn1VCGedxME%2Fiwb8ppLGUJk%2FpnzN9jx4oqqiEEX5kYqwWm2kC0MhWlE%2FnBIlMwNJW8L1tGcC0bgC0XO2ryhdZ8xipQdXxxnQOov8lN20xPWdTVZPCiMm7M%2BY4pXVYL9Pads9xSK32BLQ4dp0hTa6zXwDq%2BoQH533KO4Cn4pMgRPJ0d02KpmiDFi0iDPTxyxeeRngOTgaB037EByXDequUDBzuMdrSVScIcRBqK7mNzkypMJDMP%2BXU31h7Lms2k6UzLV5tXxWLG5iUFgUTXwhgxJ%2FPl8XguNQwvvMCPbcUThEJdxE1ql3JkwAtkFKUIaUcg8OQltLd8BfFvlqk%2BBR7Xz2b3sVq%2FxZcrqRPCLlkeKspG%2Bgu2oshbfH0DFEsGCLkBS83JypvzCgIJK14B%2F6CGPAA1es%2Fs%2Fz5CIyPZCoksUfGePi2Q%2FI4KgQcMOz8mL0GOqUB6%2FXSnh2ptSY1n1EUIqhWU5PyIkeNCUc7AKlJXzSmWFalL56sTS08P2zVTSbecdUY%2FF%2Fe0L4Dda9SC0jSGTiT0ya4B2WORcygRIob0T9KpugGm2VvLuPkz4wsbshEcQqBg%2Ftx6OwBCQybWRt3SsmkohSfSELYoCzKN7qic%2Fh2hdCs%2F%2F6BO3SNEO2fwE1oxFIM8JkQVEGTDAIOBsuMS%2FCCa9GG56PR&X-Amz-Signature=0ae415d1fe7df062ad92c4c65002d7a8f18d965bc1f6ae2ea7e7404fd55ac661&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKOQHMT%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFGq3OIP5r0vbJnfngFi6iFzLgWJS0C2opW6C5CavNPdAiEAk4Qoxya3xtf7T7vYDI0P3UayveWhQwiKd08xSeO%2FZJQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBUr64AYFO%2F7pewxQSrcA%2F9yZPI8e4zcWwtf3jMxd9mWb6F0NyvMMeWrqR%2F9FkC%2FWjNsNuZPtNTSw8czMs8%2FGOnWBsE1f9z0sVaniAOtsp%2FDYcM9cWhQdlzObAbr7gz08A7uy%2FhEOEVYQAfiplPGxzuC6VJMF5Trx23sw1R1sRsix%2FmIqrFNth8DuQr74ttgCb9h1sAalixUbYDDl5BEVTmPn1VCGedxME%2Fiwb8ppLGUJk%2FpnzN9jx4oqqiEEX5kYqwWm2kC0MhWlE%2FnBIlMwNJW8L1tGcC0bgC0XO2ryhdZ8xipQdXxxnQOov8lN20xPWdTVZPCiMm7M%2BY4pXVYL9Pads9xSK32BLQ4dp0hTa6zXwDq%2BoQH533KO4Cn4pMgRPJ0d02KpmiDFi0iDPTxyxeeRngOTgaB037EByXDequUDBzuMdrSVScIcRBqK7mNzkypMJDMP%2BXU31h7Lms2k6UzLV5tXxWLG5iUFgUTXwhgxJ%2FPl8XguNQwvvMCPbcUThEJdxE1ql3JkwAtkFKUIaUcg8OQltLd8BfFvlqk%2BBR7Xz2b3sVq%2FxZcrqRPCLlkeKspG%2Bgu2oshbfH0DFEsGCLkBS83JypvzCgIJK14B%2F6CGPAA1es%2Fs%2Fz5CIyPZCoksUfGePi2Q%2FI4KgQcMOz8mL0GOqUB6%2FXSnh2ptSY1n1EUIqhWU5PyIkeNCUc7AKlJXzSmWFalL56sTS08P2zVTSbecdUY%2FF%2Fe0L4Dda9SC0jSGTiT0ya4B2WORcygRIob0T9KpugGm2VvLuPkz4wsbshEcQqBg%2Ftx6OwBCQybWRt3SsmkohSfSELYoCzKN7qic%2Fh2hdCs%2F%2F6BO3SNEO2fwE1oxFIM8JkQVEGTDAIOBsuMS%2FCCa9GG56PR&X-Amz-Signature=e9e542fc21153da3ec6468b74717296d56ed7eeb0138933780e759191376344b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKOQHMT%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFGq3OIP5r0vbJnfngFi6iFzLgWJS0C2opW6C5CavNPdAiEAk4Qoxya3xtf7T7vYDI0P3UayveWhQwiKd08xSeO%2FZJQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBUr64AYFO%2F7pewxQSrcA%2F9yZPI8e4zcWwtf3jMxd9mWb6F0NyvMMeWrqR%2F9FkC%2FWjNsNuZPtNTSw8czMs8%2FGOnWBsE1f9z0sVaniAOtsp%2FDYcM9cWhQdlzObAbr7gz08A7uy%2FhEOEVYQAfiplPGxzuC6VJMF5Trx23sw1R1sRsix%2FmIqrFNth8DuQr74ttgCb9h1sAalixUbYDDl5BEVTmPn1VCGedxME%2Fiwb8ppLGUJk%2FpnzN9jx4oqqiEEX5kYqwWm2kC0MhWlE%2FnBIlMwNJW8L1tGcC0bgC0XO2ryhdZ8xipQdXxxnQOov8lN20xPWdTVZPCiMm7M%2BY4pXVYL9Pads9xSK32BLQ4dp0hTa6zXwDq%2BoQH533KO4Cn4pMgRPJ0d02KpmiDFi0iDPTxyxeeRngOTgaB037EByXDequUDBzuMdrSVScIcRBqK7mNzkypMJDMP%2BXU31h7Lms2k6UzLV5tXxWLG5iUFgUTXwhgxJ%2FPl8XguNQwvvMCPbcUThEJdxE1ql3JkwAtkFKUIaUcg8OQltLd8BfFvlqk%2BBR7Xz2b3sVq%2FxZcrqRPCLlkeKspG%2Bgu2oshbfH0DFEsGCLkBS83JypvzCgIJK14B%2F6CGPAA1es%2Fs%2Fz5CIyPZCoksUfGePi2Q%2FI4KgQcMOz8mL0GOqUB6%2FXSnh2ptSY1n1EUIqhWU5PyIkeNCUc7AKlJXzSmWFalL56sTS08P2zVTSbecdUY%2FF%2Fe0L4Dda9SC0jSGTiT0ya4B2WORcygRIob0T9KpugGm2VvLuPkz4wsbshEcQqBg%2Ftx6OwBCQybWRt3SsmkohSfSELYoCzKN7qic%2Fh2hdCs%2F%2F6BO3SNEO2fwE1oxFIM8JkQVEGTDAIOBsuMS%2FCCa9GG56PR&X-Amz-Signature=72a38ab338d8af2a5a3444941fa12bac03e3d70dda254462f6b4393a43f5daf9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKOQHMT%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFGq3OIP5r0vbJnfngFi6iFzLgWJS0C2opW6C5CavNPdAiEAk4Qoxya3xtf7T7vYDI0P3UayveWhQwiKd08xSeO%2FZJQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBUr64AYFO%2F7pewxQSrcA%2F9yZPI8e4zcWwtf3jMxd9mWb6F0NyvMMeWrqR%2F9FkC%2FWjNsNuZPtNTSw8czMs8%2FGOnWBsE1f9z0sVaniAOtsp%2FDYcM9cWhQdlzObAbr7gz08A7uy%2FhEOEVYQAfiplPGxzuC6VJMF5Trx23sw1R1sRsix%2FmIqrFNth8DuQr74ttgCb9h1sAalixUbYDDl5BEVTmPn1VCGedxME%2Fiwb8ppLGUJk%2FpnzN9jx4oqqiEEX5kYqwWm2kC0MhWlE%2FnBIlMwNJW8L1tGcC0bgC0XO2ryhdZ8xipQdXxxnQOov8lN20xPWdTVZPCiMm7M%2BY4pXVYL9Pads9xSK32BLQ4dp0hTa6zXwDq%2BoQH533KO4Cn4pMgRPJ0d02KpmiDFi0iDPTxyxeeRngOTgaB037EByXDequUDBzuMdrSVScIcRBqK7mNzkypMJDMP%2BXU31h7Lms2k6UzLV5tXxWLG5iUFgUTXwhgxJ%2FPl8XguNQwvvMCPbcUThEJdxE1ql3JkwAtkFKUIaUcg8OQltLd8BfFvlqk%2BBR7Xz2b3sVq%2FxZcrqRPCLlkeKspG%2Bgu2oshbfH0DFEsGCLkBS83JypvzCgIJK14B%2F6CGPAA1es%2Fs%2Fz5CIyPZCoksUfGePi2Q%2FI4KgQcMOz8mL0GOqUB6%2FXSnh2ptSY1n1EUIqhWU5PyIkeNCUc7AKlJXzSmWFalL56sTS08P2zVTSbecdUY%2FF%2Fe0L4Dda9SC0jSGTiT0ya4B2WORcygRIob0T9KpugGm2VvLuPkz4wsbshEcQqBg%2Ftx6OwBCQybWRt3SsmkohSfSELYoCzKN7qic%2Fh2hdCs%2F%2F6BO3SNEO2fwE1oxFIM8JkQVEGTDAIOBsuMS%2FCCa9GG56PR&X-Amz-Signature=33a8ab40808b5784a3fae5c6327ffb01788fad2197ccc6084b389566dcb8a504&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKOQHMT%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFGq3OIP5r0vbJnfngFi6iFzLgWJS0C2opW6C5CavNPdAiEAk4Qoxya3xtf7T7vYDI0P3UayveWhQwiKd08xSeO%2FZJQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBUr64AYFO%2F7pewxQSrcA%2F9yZPI8e4zcWwtf3jMxd9mWb6F0NyvMMeWrqR%2F9FkC%2FWjNsNuZPtNTSw8czMs8%2FGOnWBsE1f9z0sVaniAOtsp%2FDYcM9cWhQdlzObAbr7gz08A7uy%2FhEOEVYQAfiplPGxzuC6VJMF5Trx23sw1R1sRsix%2FmIqrFNth8DuQr74ttgCb9h1sAalixUbYDDl5BEVTmPn1VCGedxME%2Fiwb8ppLGUJk%2FpnzN9jx4oqqiEEX5kYqwWm2kC0MhWlE%2FnBIlMwNJW8L1tGcC0bgC0XO2ryhdZ8xipQdXxxnQOov8lN20xPWdTVZPCiMm7M%2BY4pXVYL9Pads9xSK32BLQ4dp0hTa6zXwDq%2BoQH533KO4Cn4pMgRPJ0d02KpmiDFi0iDPTxyxeeRngOTgaB037EByXDequUDBzuMdrSVScIcRBqK7mNzkypMJDMP%2BXU31h7Lms2k6UzLV5tXxWLG5iUFgUTXwhgxJ%2FPl8XguNQwvvMCPbcUThEJdxE1ql3JkwAtkFKUIaUcg8OQltLd8BfFvlqk%2BBR7Xz2b3sVq%2FxZcrqRPCLlkeKspG%2Bgu2oshbfH0DFEsGCLkBS83JypvzCgIJK14B%2F6CGPAA1es%2Fs%2Fz5CIyPZCoksUfGePi2Q%2FI4KgQcMOz8mL0GOqUB6%2FXSnh2ptSY1n1EUIqhWU5PyIkeNCUc7AKlJXzSmWFalL56sTS08P2zVTSbecdUY%2FF%2Fe0L4Dda9SC0jSGTiT0ya4B2WORcygRIob0T9KpugGm2VvLuPkz4wsbshEcQqBg%2Ftx6OwBCQybWRt3SsmkohSfSELYoCzKN7qic%2Fh2hdCs%2F%2F6BO3SNEO2fwE1oxFIM8JkQVEGTDAIOBsuMS%2FCCa9GG56PR&X-Amz-Signature=a30e1bd00a6c10cc68ddfbad816d96d0ec66e05976e91650bd90352100f46ae6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKOQHMT%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFGq3OIP5r0vbJnfngFi6iFzLgWJS0C2opW6C5CavNPdAiEAk4Qoxya3xtf7T7vYDI0P3UayveWhQwiKd08xSeO%2FZJQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBUr64AYFO%2F7pewxQSrcA%2F9yZPI8e4zcWwtf3jMxd9mWb6F0NyvMMeWrqR%2F9FkC%2FWjNsNuZPtNTSw8czMs8%2FGOnWBsE1f9z0sVaniAOtsp%2FDYcM9cWhQdlzObAbr7gz08A7uy%2FhEOEVYQAfiplPGxzuC6VJMF5Trx23sw1R1sRsix%2FmIqrFNth8DuQr74ttgCb9h1sAalixUbYDDl5BEVTmPn1VCGedxME%2Fiwb8ppLGUJk%2FpnzN9jx4oqqiEEX5kYqwWm2kC0MhWlE%2FnBIlMwNJW8L1tGcC0bgC0XO2ryhdZ8xipQdXxxnQOov8lN20xPWdTVZPCiMm7M%2BY4pXVYL9Pads9xSK32BLQ4dp0hTa6zXwDq%2BoQH533KO4Cn4pMgRPJ0d02KpmiDFi0iDPTxyxeeRngOTgaB037EByXDequUDBzuMdrSVScIcRBqK7mNzkypMJDMP%2BXU31h7Lms2k6UzLV5tXxWLG5iUFgUTXwhgxJ%2FPl8XguNQwvvMCPbcUThEJdxE1ql3JkwAtkFKUIaUcg8OQltLd8BfFvlqk%2BBR7Xz2b3sVq%2FxZcrqRPCLlkeKspG%2Bgu2oshbfH0DFEsGCLkBS83JypvzCgIJK14B%2F6CGPAA1es%2Fs%2Fz5CIyPZCoksUfGePi2Q%2FI4KgQcMOz8mL0GOqUB6%2FXSnh2ptSY1n1EUIqhWU5PyIkeNCUc7AKlJXzSmWFalL56sTS08P2zVTSbecdUY%2FF%2Fe0L4Dda9SC0jSGTiT0ya4B2WORcygRIob0T9KpugGm2VvLuPkz4wsbshEcQqBg%2Ftx6OwBCQybWRt3SsmkohSfSELYoCzKN7qic%2Fh2hdCs%2F%2F6BO3SNEO2fwE1oxFIM8JkQVEGTDAIOBsuMS%2FCCa9GG56PR&X-Amz-Signature=cba777936abacebcd7ebd5ebc5792e0b7c721f5ba2b5a9bdaf6de180e8fb968e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKOQHMT%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFGq3OIP5r0vbJnfngFi6iFzLgWJS0C2opW6C5CavNPdAiEAk4Qoxya3xtf7T7vYDI0P3UayveWhQwiKd08xSeO%2FZJQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBUr64AYFO%2F7pewxQSrcA%2F9yZPI8e4zcWwtf3jMxd9mWb6F0NyvMMeWrqR%2F9FkC%2FWjNsNuZPtNTSw8czMs8%2FGOnWBsE1f9z0sVaniAOtsp%2FDYcM9cWhQdlzObAbr7gz08A7uy%2FhEOEVYQAfiplPGxzuC6VJMF5Trx23sw1R1sRsix%2FmIqrFNth8DuQr74ttgCb9h1sAalixUbYDDl5BEVTmPn1VCGedxME%2Fiwb8ppLGUJk%2FpnzN9jx4oqqiEEX5kYqwWm2kC0MhWlE%2FnBIlMwNJW8L1tGcC0bgC0XO2ryhdZ8xipQdXxxnQOov8lN20xPWdTVZPCiMm7M%2BY4pXVYL9Pads9xSK32BLQ4dp0hTa6zXwDq%2BoQH533KO4Cn4pMgRPJ0d02KpmiDFi0iDPTxyxeeRngOTgaB037EByXDequUDBzuMdrSVScIcRBqK7mNzkypMJDMP%2BXU31h7Lms2k6UzLV5tXxWLG5iUFgUTXwhgxJ%2FPl8XguNQwvvMCPbcUThEJdxE1ql3JkwAtkFKUIaUcg8OQltLd8BfFvlqk%2BBR7Xz2b3sVq%2FxZcrqRPCLlkeKspG%2Bgu2oshbfH0DFEsGCLkBS83JypvzCgIJK14B%2F6CGPAA1es%2Fs%2Fz5CIyPZCoksUfGePi2Q%2FI4KgQcMOz8mL0GOqUB6%2FXSnh2ptSY1n1EUIqhWU5PyIkeNCUc7AKlJXzSmWFalL56sTS08P2zVTSbecdUY%2FF%2Fe0L4Dda9SC0jSGTiT0ya4B2WORcygRIob0T9KpugGm2VvLuPkz4wsbshEcQqBg%2Ftx6OwBCQybWRt3SsmkohSfSELYoCzKN7qic%2Fh2hdCs%2F%2F6BO3SNEO2fwE1oxFIM8JkQVEGTDAIOBsuMS%2FCCa9GG56PR&X-Amz-Signature=38837763a884e0bffd013789665a0e0ed0800c59615c0e8f5c3d0f34a0b83154&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
