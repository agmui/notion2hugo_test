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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZE7JASE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUDeduXsi%2BEA0hi0YlE7w8YiycmupGI8OttHdH8QuyKAiEAtOo2ngKgSqwAPMQqUTS8TO0sK9PcoIxRPY00loZ93YUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDD3MW3Vc9gVG4gQSzSrcA%2F8ghruh%2BeoLOq04CPXG0nctMEOezqm%2BHanhhEIT51M1skZ4vx1Pjtl4Zhau2f2eAIe31Qw5MZFk%2FbG58dPV0a3m69dYdIjYzjv0WH3aJ7U0fRwoQFFusrl9qbH8gZjPGosKr6eWOT1sDaXb3nUtTbQCDkUirhGt8DTSlChYT6FlYiYqRjLbMr%2FKtq%2Bl7bN3HhXyig3DC1mQT%2BAG2WPVwMrUrjvuTGXSZ0%2BdNNiic3T5405XQm8D%2BYX0TNjf2yHx8C%2F6wTg%2FBCpoaGkaTKnK50cnvb9XPIBpMTSIkBWPGeEd1rY1WOLwSncmEEktsQ0IP1bDpLNnFHDLuDWO78dPgWLZ9jlVjeUKcxKoHky%2FgGfKwG%2BgXWAandBzTDGIKiotkiie10uklzO8A5Wfz9zNpxjHjzYvMKXnub40GjqYPZVuEc0cOZZzPjNNvkpZRUcn01wq2GtVUM9Z20PwRw6lU%2BYeWBgnaOM1uFx9yGfOwvZU8llODe9EvVhlyEz2%2Bmq2Eh4uxZCLLfJgMPc4TtZIXLIImSd5HrF1dQFBrAe4Ah5N5061%2B25u2VaPcS4WZXF%2FzvHmGmdlnR256%2FC%2BJckj6UyxT0%2Fx8jk2yKCZGs3lttIiSC5BJGZ3m4thHvNdMNPcn8EGOqUB5qRpZbyhD2HBnBd0RYIyZaGOYpPk5lfAtal3Ia%2BfbDdzJhPic7ZKsUy6NPf1BsU%2BdjnlMf0F7WusaV58gIiwi8DD%2Bn%2FGKfVBunnD3YjIX%2Fcp%2FiOzUK1PqZvvYpIEfNPiPeEIX9WRkuiMPPAMNX2h2hFYUR3MwLFPKrZsniUoll6WHz3I0N%2FCKI0ax0dJDleaWzzhfKjtMZppbxsDq9kHPBZ%2BaFYK&X-Amz-Signature=9e266f0a800a2edd6edffe9237b2be85d2c7c91ef163c9a0a9b023005947804b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZE7JASE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUDeduXsi%2BEA0hi0YlE7w8YiycmupGI8OttHdH8QuyKAiEAtOo2ngKgSqwAPMQqUTS8TO0sK9PcoIxRPY00loZ93YUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDD3MW3Vc9gVG4gQSzSrcA%2F8ghruh%2BeoLOq04CPXG0nctMEOezqm%2BHanhhEIT51M1skZ4vx1Pjtl4Zhau2f2eAIe31Qw5MZFk%2FbG58dPV0a3m69dYdIjYzjv0WH3aJ7U0fRwoQFFusrl9qbH8gZjPGosKr6eWOT1sDaXb3nUtTbQCDkUirhGt8DTSlChYT6FlYiYqRjLbMr%2FKtq%2Bl7bN3HhXyig3DC1mQT%2BAG2WPVwMrUrjvuTGXSZ0%2BdNNiic3T5405XQm8D%2BYX0TNjf2yHx8C%2F6wTg%2FBCpoaGkaTKnK50cnvb9XPIBpMTSIkBWPGeEd1rY1WOLwSncmEEktsQ0IP1bDpLNnFHDLuDWO78dPgWLZ9jlVjeUKcxKoHky%2FgGfKwG%2BgXWAandBzTDGIKiotkiie10uklzO8A5Wfz9zNpxjHjzYvMKXnub40GjqYPZVuEc0cOZZzPjNNvkpZRUcn01wq2GtVUM9Z20PwRw6lU%2BYeWBgnaOM1uFx9yGfOwvZU8llODe9EvVhlyEz2%2Bmq2Eh4uxZCLLfJgMPc4TtZIXLIImSd5HrF1dQFBrAe4Ah5N5061%2B25u2VaPcS4WZXF%2FzvHmGmdlnR256%2FC%2BJckj6UyxT0%2Fx8jk2yKCZGs3lttIiSC5BJGZ3m4thHvNdMNPcn8EGOqUB5qRpZbyhD2HBnBd0RYIyZaGOYpPk5lfAtal3Ia%2BfbDdzJhPic7ZKsUy6NPf1BsU%2BdjnlMf0F7WusaV58gIiwi8DD%2Bn%2FGKfVBunnD3YjIX%2Fcp%2FiOzUK1PqZvvYpIEfNPiPeEIX9WRkuiMPPAMNX2h2hFYUR3MwLFPKrZsniUoll6WHz3I0N%2FCKI0ax0dJDleaWzzhfKjtMZppbxsDq9kHPBZ%2BaFYK&X-Amz-Signature=932ce071551d230f967d14408455e580e13124a1a590ad35a6e5dd62c9f98f5d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZE7JASE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUDeduXsi%2BEA0hi0YlE7w8YiycmupGI8OttHdH8QuyKAiEAtOo2ngKgSqwAPMQqUTS8TO0sK9PcoIxRPY00loZ93YUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDD3MW3Vc9gVG4gQSzSrcA%2F8ghruh%2BeoLOq04CPXG0nctMEOezqm%2BHanhhEIT51M1skZ4vx1Pjtl4Zhau2f2eAIe31Qw5MZFk%2FbG58dPV0a3m69dYdIjYzjv0WH3aJ7U0fRwoQFFusrl9qbH8gZjPGosKr6eWOT1sDaXb3nUtTbQCDkUirhGt8DTSlChYT6FlYiYqRjLbMr%2FKtq%2Bl7bN3HhXyig3DC1mQT%2BAG2WPVwMrUrjvuTGXSZ0%2BdNNiic3T5405XQm8D%2BYX0TNjf2yHx8C%2F6wTg%2FBCpoaGkaTKnK50cnvb9XPIBpMTSIkBWPGeEd1rY1WOLwSncmEEktsQ0IP1bDpLNnFHDLuDWO78dPgWLZ9jlVjeUKcxKoHky%2FgGfKwG%2BgXWAandBzTDGIKiotkiie10uklzO8A5Wfz9zNpxjHjzYvMKXnub40GjqYPZVuEc0cOZZzPjNNvkpZRUcn01wq2GtVUM9Z20PwRw6lU%2BYeWBgnaOM1uFx9yGfOwvZU8llODe9EvVhlyEz2%2Bmq2Eh4uxZCLLfJgMPc4TtZIXLIImSd5HrF1dQFBrAe4Ah5N5061%2B25u2VaPcS4WZXF%2FzvHmGmdlnR256%2FC%2BJckj6UyxT0%2Fx8jk2yKCZGs3lttIiSC5BJGZ3m4thHvNdMNPcn8EGOqUB5qRpZbyhD2HBnBd0RYIyZaGOYpPk5lfAtal3Ia%2BfbDdzJhPic7ZKsUy6NPf1BsU%2BdjnlMf0F7WusaV58gIiwi8DD%2Bn%2FGKfVBunnD3YjIX%2Fcp%2FiOzUK1PqZvvYpIEfNPiPeEIX9WRkuiMPPAMNX2h2hFYUR3MwLFPKrZsniUoll6WHz3I0N%2FCKI0ax0dJDleaWzzhfKjtMZppbxsDq9kHPBZ%2BaFYK&X-Amz-Signature=3d624011fa45e89a2a7e8257354eb74eca0b5b0d9a6e66bce0b00e1abea54a74&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZE7JASE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUDeduXsi%2BEA0hi0YlE7w8YiycmupGI8OttHdH8QuyKAiEAtOo2ngKgSqwAPMQqUTS8TO0sK9PcoIxRPY00loZ93YUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDD3MW3Vc9gVG4gQSzSrcA%2F8ghruh%2BeoLOq04CPXG0nctMEOezqm%2BHanhhEIT51M1skZ4vx1Pjtl4Zhau2f2eAIe31Qw5MZFk%2FbG58dPV0a3m69dYdIjYzjv0WH3aJ7U0fRwoQFFusrl9qbH8gZjPGosKr6eWOT1sDaXb3nUtTbQCDkUirhGt8DTSlChYT6FlYiYqRjLbMr%2FKtq%2Bl7bN3HhXyig3DC1mQT%2BAG2WPVwMrUrjvuTGXSZ0%2BdNNiic3T5405XQm8D%2BYX0TNjf2yHx8C%2F6wTg%2FBCpoaGkaTKnK50cnvb9XPIBpMTSIkBWPGeEd1rY1WOLwSncmEEktsQ0IP1bDpLNnFHDLuDWO78dPgWLZ9jlVjeUKcxKoHky%2FgGfKwG%2BgXWAandBzTDGIKiotkiie10uklzO8A5Wfz9zNpxjHjzYvMKXnub40GjqYPZVuEc0cOZZzPjNNvkpZRUcn01wq2GtVUM9Z20PwRw6lU%2BYeWBgnaOM1uFx9yGfOwvZU8llODe9EvVhlyEz2%2Bmq2Eh4uxZCLLfJgMPc4TtZIXLIImSd5HrF1dQFBrAe4Ah5N5061%2B25u2VaPcS4WZXF%2FzvHmGmdlnR256%2FC%2BJckj6UyxT0%2Fx8jk2yKCZGs3lttIiSC5BJGZ3m4thHvNdMNPcn8EGOqUB5qRpZbyhD2HBnBd0RYIyZaGOYpPk5lfAtal3Ia%2BfbDdzJhPic7ZKsUy6NPf1BsU%2BdjnlMf0F7WusaV58gIiwi8DD%2Bn%2FGKfVBunnD3YjIX%2Fcp%2FiOzUK1PqZvvYpIEfNPiPeEIX9WRkuiMPPAMNX2h2hFYUR3MwLFPKrZsniUoll6WHz3I0N%2FCKI0ax0dJDleaWzzhfKjtMZppbxsDq9kHPBZ%2BaFYK&X-Amz-Signature=b848fcc32fcf2484700306e97bc59c94da0230defafd21f6776e61dd99cb1435&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZE7JASE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUDeduXsi%2BEA0hi0YlE7w8YiycmupGI8OttHdH8QuyKAiEAtOo2ngKgSqwAPMQqUTS8TO0sK9PcoIxRPY00loZ93YUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDD3MW3Vc9gVG4gQSzSrcA%2F8ghruh%2BeoLOq04CPXG0nctMEOezqm%2BHanhhEIT51M1skZ4vx1Pjtl4Zhau2f2eAIe31Qw5MZFk%2FbG58dPV0a3m69dYdIjYzjv0WH3aJ7U0fRwoQFFusrl9qbH8gZjPGosKr6eWOT1sDaXb3nUtTbQCDkUirhGt8DTSlChYT6FlYiYqRjLbMr%2FKtq%2Bl7bN3HhXyig3DC1mQT%2BAG2WPVwMrUrjvuTGXSZ0%2BdNNiic3T5405XQm8D%2BYX0TNjf2yHx8C%2F6wTg%2FBCpoaGkaTKnK50cnvb9XPIBpMTSIkBWPGeEd1rY1WOLwSncmEEktsQ0IP1bDpLNnFHDLuDWO78dPgWLZ9jlVjeUKcxKoHky%2FgGfKwG%2BgXWAandBzTDGIKiotkiie10uklzO8A5Wfz9zNpxjHjzYvMKXnub40GjqYPZVuEc0cOZZzPjNNvkpZRUcn01wq2GtVUM9Z20PwRw6lU%2BYeWBgnaOM1uFx9yGfOwvZU8llODe9EvVhlyEz2%2Bmq2Eh4uxZCLLfJgMPc4TtZIXLIImSd5HrF1dQFBrAe4Ah5N5061%2B25u2VaPcS4WZXF%2FzvHmGmdlnR256%2FC%2BJckj6UyxT0%2Fx8jk2yKCZGs3lttIiSC5BJGZ3m4thHvNdMNPcn8EGOqUB5qRpZbyhD2HBnBd0RYIyZaGOYpPk5lfAtal3Ia%2BfbDdzJhPic7ZKsUy6NPf1BsU%2BdjnlMf0F7WusaV58gIiwi8DD%2Bn%2FGKfVBunnD3YjIX%2Fcp%2FiOzUK1PqZvvYpIEfNPiPeEIX9WRkuiMPPAMNX2h2hFYUR3MwLFPKrZsniUoll6WHz3I0N%2FCKI0ax0dJDleaWzzhfKjtMZppbxsDq9kHPBZ%2BaFYK&X-Amz-Signature=a392f997d41b1233b6993c27bf8231bc04f0779be63a9ed489fe5512eebd9fa5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZE7JASE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUDeduXsi%2BEA0hi0YlE7w8YiycmupGI8OttHdH8QuyKAiEAtOo2ngKgSqwAPMQqUTS8TO0sK9PcoIxRPY00loZ93YUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDD3MW3Vc9gVG4gQSzSrcA%2F8ghruh%2BeoLOq04CPXG0nctMEOezqm%2BHanhhEIT51M1skZ4vx1Pjtl4Zhau2f2eAIe31Qw5MZFk%2FbG58dPV0a3m69dYdIjYzjv0WH3aJ7U0fRwoQFFusrl9qbH8gZjPGosKr6eWOT1sDaXb3nUtTbQCDkUirhGt8DTSlChYT6FlYiYqRjLbMr%2FKtq%2Bl7bN3HhXyig3DC1mQT%2BAG2WPVwMrUrjvuTGXSZ0%2BdNNiic3T5405XQm8D%2BYX0TNjf2yHx8C%2F6wTg%2FBCpoaGkaTKnK50cnvb9XPIBpMTSIkBWPGeEd1rY1WOLwSncmEEktsQ0IP1bDpLNnFHDLuDWO78dPgWLZ9jlVjeUKcxKoHky%2FgGfKwG%2BgXWAandBzTDGIKiotkiie10uklzO8A5Wfz9zNpxjHjzYvMKXnub40GjqYPZVuEc0cOZZzPjNNvkpZRUcn01wq2GtVUM9Z20PwRw6lU%2BYeWBgnaOM1uFx9yGfOwvZU8llODe9EvVhlyEz2%2Bmq2Eh4uxZCLLfJgMPc4TtZIXLIImSd5HrF1dQFBrAe4Ah5N5061%2B25u2VaPcS4WZXF%2FzvHmGmdlnR256%2FC%2BJckj6UyxT0%2Fx8jk2yKCZGs3lttIiSC5BJGZ3m4thHvNdMNPcn8EGOqUB5qRpZbyhD2HBnBd0RYIyZaGOYpPk5lfAtal3Ia%2BfbDdzJhPic7ZKsUy6NPf1BsU%2BdjnlMf0F7WusaV58gIiwi8DD%2Bn%2FGKfVBunnD3YjIX%2Fcp%2FiOzUK1PqZvvYpIEfNPiPeEIX9WRkuiMPPAMNX2h2hFYUR3MwLFPKrZsniUoll6WHz3I0N%2FCKI0ax0dJDleaWzzhfKjtMZppbxsDq9kHPBZ%2BaFYK&X-Amz-Signature=18675cb52ff54d780dd04adf8ba43a04aad6df9c12446b59c924d1c843d58486&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZE7JASE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUDeduXsi%2BEA0hi0YlE7w8YiycmupGI8OttHdH8QuyKAiEAtOo2ngKgSqwAPMQqUTS8TO0sK9PcoIxRPY00loZ93YUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDD3MW3Vc9gVG4gQSzSrcA%2F8ghruh%2BeoLOq04CPXG0nctMEOezqm%2BHanhhEIT51M1skZ4vx1Pjtl4Zhau2f2eAIe31Qw5MZFk%2FbG58dPV0a3m69dYdIjYzjv0WH3aJ7U0fRwoQFFusrl9qbH8gZjPGosKr6eWOT1sDaXb3nUtTbQCDkUirhGt8DTSlChYT6FlYiYqRjLbMr%2FKtq%2Bl7bN3HhXyig3DC1mQT%2BAG2WPVwMrUrjvuTGXSZ0%2BdNNiic3T5405XQm8D%2BYX0TNjf2yHx8C%2F6wTg%2FBCpoaGkaTKnK50cnvb9XPIBpMTSIkBWPGeEd1rY1WOLwSncmEEktsQ0IP1bDpLNnFHDLuDWO78dPgWLZ9jlVjeUKcxKoHky%2FgGfKwG%2BgXWAandBzTDGIKiotkiie10uklzO8A5Wfz9zNpxjHjzYvMKXnub40GjqYPZVuEc0cOZZzPjNNvkpZRUcn01wq2GtVUM9Z20PwRw6lU%2BYeWBgnaOM1uFx9yGfOwvZU8llODe9EvVhlyEz2%2Bmq2Eh4uxZCLLfJgMPc4TtZIXLIImSd5HrF1dQFBrAe4Ah5N5061%2B25u2VaPcS4WZXF%2FzvHmGmdlnR256%2FC%2BJckj6UyxT0%2Fx8jk2yKCZGs3lttIiSC5BJGZ3m4thHvNdMNPcn8EGOqUB5qRpZbyhD2HBnBd0RYIyZaGOYpPk5lfAtal3Ia%2BfbDdzJhPic7ZKsUy6NPf1BsU%2BdjnlMf0F7WusaV58gIiwi8DD%2Bn%2FGKfVBunnD3YjIX%2Fcp%2FiOzUK1PqZvvYpIEfNPiPeEIX9WRkuiMPPAMNX2h2hFYUR3MwLFPKrZsniUoll6WHz3I0N%2FCKI0ax0dJDleaWzzhfKjtMZppbxsDq9kHPBZ%2BaFYK&X-Amz-Signature=e5d22a10a9f74db73a1b52231a0584449672094cb4a370fc90216987af526522&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZE7JASE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUDeduXsi%2BEA0hi0YlE7w8YiycmupGI8OttHdH8QuyKAiEAtOo2ngKgSqwAPMQqUTS8TO0sK9PcoIxRPY00loZ93YUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDD3MW3Vc9gVG4gQSzSrcA%2F8ghruh%2BeoLOq04CPXG0nctMEOezqm%2BHanhhEIT51M1skZ4vx1Pjtl4Zhau2f2eAIe31Qw5MZFk%2FbG58dPV0a3m69dYdIjYzjv0WH3aJ7U0fRwoQFFusrl9qbH8gZjPGosKr6eWOT1sDaXb3nUtTbQCDkUirhGt8DTSlChYT6FlYiYqRjLbMr%2FKtq%2Bl7bN3HhXyig3DC1mQT%2BAG2WPVwMrUrjvuTGXSZ0%2BdNNiic3T5405XQm8D%2BYX0TNjf2yHx8C%2F6wTg%2FBCpoaGkaTKnK50cnvb9XPIBpMTSIkBWPGeEd1rY1WOLwSncmEEktsQ0IP1bDpLNnFHDLuDWO78dPgWLZ9jlVjeUKcxKoHky%2FgGfKwG%2BgXWAandBzTDGIKiotkiie10uklzO8A5Wfz9zNpxjHjzYvMKXnub40GjqYPZVuEc0cOZZzPjNNvkpZRUcn01wq2GtVUM9Z20PwRw6lU%2BYeWBgnaOM1uFx9yGfOwvZU8llODe9EvVhlyEz2%2Bmq2Eh4uxZCLLfJgMPc4TtZIXLIImSd5HrF1dQFBrAe4Ah5N5061%2B25u2VaPcS4WZXF%2FzvHmGmdlnR256%2FC%2BJckj6UyxT0%2Fx8jk2yKCZGs3lttIiSC5BJGZ3m4thHvNdMNPcn8EGOqUB5qRpZbyhD2HBnBd0RYIyZaGOYpPk5lfAtal3Ia%2BfbDdzJhPic7ZKsUy6NPf1BsU%2BdjnlMf0F7WusaV58gIiwi8DD%2Bn%2FGKfVBunnD3YjIX%2Fcp%2FiOzUK1PqZvvYpIEfNPiPeEIX9WRkuiMPPAMNX2h2hFYUR3MwLFPKrZsniUoll6WHz3I0N%2FCKI0ax0dJDleaWzzhfKjtMZppbxsDq9kHPBZ%2BaFYK&X-Amz-Signature=987f6e1f3111e7c382e2ecb16fd812d6cd9f16da70e4c29de0d213b51cbc62c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
