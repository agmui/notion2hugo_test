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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVGX2JMD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDbxVkkohu3T6AmaW5MbgBk9O4c1%2F6AJbZh7LwavKnzLAIgeGb1aCtq4GFo0z54O5Lf8vTcu4eulLHkraqliHdH%2FzAqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdrg9wKL3kuJ1dHTSrcA6IneruyqmHKJDM21efAcoS6rglEq1OXAUIlorLYnGQmdx%2BVx0cIJ%2F2hPYkWfxEeNyogRFpwBJTsaXmBZspF89tJIY1SWNYBwXPlpxpa2PctpxI6AoYaTPu8R51GT64wWs3JP8%2FTIK5wisckRJSGKgSVgszpQAGCDVVGOeMHmrWSZxNO1p32xev7SvHsqKQMMeUGx4RG2%2FugRwOELIGSXVNPG%2BNVAJpPspXKZmqDy0hLLI1iplIfucts2wJHnyRft%2FDBmwZPq6FFwkVvRMLgww7Jl91Ngps%2FEFT7CnN%2B7EMdgtIjKOfSijhOx6KfuW10%2BNNyWpSFyTedxvbyYKwFaXhHnB9z1TZcRmIw5%2Bqc5ScB8Q7laDSKlNIdirlhHGzfczMxzHh8tUfIXa1ZOHomzNDBzS0YAp9ETSUaWPuOpxn4JE%2FF8HUhtWsrhCsa4n%2BtkS84l0v3bY5JaMqPCoGuoEIFLZV8E5r3MfeZlo2l16mg5V2ITJisqceVnhiv8GKC4ToH05WgjZrOjGBjc3uD221%2FUMK6GqTLaYVAP48Hpa8p5Mj56siGkhuECFlWK2IhkoOpFH3c2oKtP4gHMkYhBpIlcX%2FEOi7Pw%2F58TZip0b1eYq6IYdIVCxzY%2B7YQMNuAycAGOqUB1ziRXlmCGKhho%2FXsO7JbSqmW2885oPJfo%2Fyy%2BEOnGroq1lu1sZXnb3oEISPU5yuDtdMe3YPNWOzsUNf5ULhgalF5yRx99uFc6BeE09PjIXhDkk%2BpCLYqhY8yLEMCNVIDMCNHaX5x%2BoRD0QWhKXqqfHWsal%2FKh%2BuifWS6NyM85tDTJASLXi4GgU%2F0S8fulukBdrh0pwVbiLMYnAeg9tV8%2BwnlmO76&X-Amz-Signature=07b439159e87b1fd12f66835293c78017f0ca4275f075dc5823ba80749ef7ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVGX2JMD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDbxVkkohu3T6AmaW5MbgBk9O4c1%2F6AJbZh7LwavKnzLAIgeGb1aCtq4GFo0z54O5Lf8vTcu4eulLHkraqliHdH%2FzAqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdrg9wKL3kuJ1dHTSrcA6IneruyqmHKJDM21efAcoS6rglEq1OXAUIlorLYnGQmdx%2BVx0cIJ%2F2hPYkWfxEeNyogRFpwBJTsaXmBZspF89tJIY1SWNYBwXPlpxpa2PctpxI6AoYaTPu8R51GT64wWs3JP8%2FTIK5wisckRJSGKgSVgszpQAGCDVVGOeMHmrWSZxNO1p32xev7SvHsqKQMMeUGx4RG2%2FugRwOELIGSXVNPG%2BNVAJpPspXKZmqDy0hLLI1iplIfucts2wJHnyRft%2FDBmwZPq6FFwkVvRMLgww7Jl91Ngps%2FEFT7CnN%2B7EMdgtIjKOfSijhOx6KfuW10%2BNNyWpSFyTedxvbyYKwFaXhHnB9z1TZcRmIw5%2Bqc5ScB8Q7laDSKlNIdirlhHGzfczMxzHh8tUfIXa1ZOHomzNDBzS0YAp9ETSUaWPuOpxn4JE%2FF8HUhtWsrhCsa4n%2BtkS84l0v3bY5JaMqPCoGuoEIFLZV8E5r3MfeZlo2l16mg5V2ITJisqceVnhiv8GKC4ToH05WgjZrOjGBjc3uD221%2FUMK6GqTLaYVAP48Hpa8p5Mj56siGkhuECFlWK2IhkoOpFH3c2oKtP4gHMkYhBpIlcX%2FEOi7Pw%2F58TZip0b1eYq6IYdIVCxzY%2B7YQMNuAycAGOqUB1ziRXlmCGKhho%2FXsO7JbSqmW2885oPJfo%2Fyy%2BEOnGroq1lu1sZXnb3oEISPU5yuDtdMe3YPNWOzsUNf5ULhgalF5yRx99uFc6BeE09PjIXhDkk%2BpCLYqhY8yLEMCNVIDMCNHaX5x%2BoRD0QWhKXqqfHWsal%2FKh%2BuifWS6NyM85tDTJASLXi4GgU%2F0S8fulukBdrh0pwVbiLMYnAeg9tV8%2BwnlmO76&X-Amz-Signature=437985850a863d30ea8b3197332a8488012d6627ee575c8a77b4c3972bc6e57d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVGX2JMD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDbxVkkohu3T6AmaW5MbgBk9O4c1%2F6AJbZh7LwavKnzLAIgeGb1aCtq4GFo0z54O5Lf8vTcu4eulLHkraqliHdH%2FzAqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdrg9wKL3kuJ1dHTSrcA6IneruyqmHKJDM21efAcoS6rglEq1OXAUIlorLYnGQmdx%2BVx0cIJ%2F2hPYkWfxEeNyogRFpwBJTsaXmBZspF89tJIY1SWNYBwXPlpxpa2PctpxI6AoYaTPu8R51GT64wWs3JP8%2FTIK5wisckRJSGKgSVgszpQAGCDVVGOeMHmrWSZxNO1p32xev7SvHsqKQMMeUGx4RG2%2FugRwOELIGSXVNPG%2BNVAJpPspXKZmqDy0hLLI1iplIfucts2wJHnyRft%2FDBmwZPq6FFwkVvRMLgww7Jl91Ngps%2FEFT7CnN%2B7EMdgtIjKOfSijhOx6KfuW10%2BNNyWpSFyTedxvbyYKwFaXhHnB9z1TZcRmIw5%2Bqc5ScB8Q7laDSKlNIdirlhHGzfczMxzHh8tUfIXa1ZOHomzNDBzS0YAp9ETSUaWPuOpxn4JE%2FF8HUhtWsrhCsa4n%2BtkS84l0v3bY5JaMqPCoGuoEIFLZV8E5r3MfeZlo2l16mg5V2ITJisqceVnhiv8GKC4ToH05WgjZrOjGBjc3uD221%2FUMK6GqTLaYVAP48Hpa8p5Mj56siGkhuECFlWK2IhkoOpFH3c2oKtP4gHMkYhBpIlcX%2FEOi7Pw%2F58TZip0b1eYq6IYdIVCxzY%2B7YQMNuAycAGOqUB1ziRXlmCGKhho%2FXsO7JbSqmW2885oPJfo%2Fyy%2BEOnGroq1lu1sZXnb3oEISPU5yuDtdMe3YPNWOzsUNf5ULhgalF5yRx99uFc6BeE09PjIXhDkk%2BpCLYqhY8yLEMCNVIDMCNHaX5x%2BoRD0QWhKXqqfHWsal%2FKh%2BuifWS6NyM85tDTJASLXi4GgU%2F0S8fulukBdrh0pwVbiLMYnAeg9tV8%2BwnlmO76&X-Amz-Signature=05bc130311408b223de3478d7a08cfd9c1b67fd36d55da699ff2a1c489d3f1ad&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVGX2JMD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDbxVkkohu3T6AmaW5MbgBk9O4c1%2F6AJbZh7LwavKnzLAIgeGb1aCtq4GFo0z54O5Lf8vTcu4eulLHkraqliHdH%2FzAqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdrg9wKL3kuJ1dHTSrcA6IneruyqmHKJDM21efAcoS6rglEq1OXAUIlorLYnGQmdx%2BVx0cIJ%2F2hPYkWfxEeNyogRFpwBJTsaXmBZspF89tJIY1SWNYBwXPlpxpa2PctpxI6AoYaTPu8R51GT64wWs3JP8%2FTIK5wisckRJSGKgSVgszpQAGCDVVGOeMHmrWSZxNO1p32xev7SvHsqKQMMeUGx4RG2%2FugRwOELIGSXVNPG%2BNVAJpPspXKZmqDy0hLLI1iplIfucts2wJHnyRft%2FDBmwZPq6FFwkVvRMLgww7Jl91Ngps%2FEFT7CnN%2B7EMdgtIjKOfSijhOx6KfuW10%2BNNyWpSFyTedxvbyYKwFaXhHnB9z1TZcRmIw5%2Bqc5ScB8Q7laDSKlNIdirlhHGzfczMxzHh8tUfIXa1ZOHomzNDBzS0YAp9ETSUaWPuOpxn4JE%2FF8HUhtWsrhCsa4n%2BtkS84l0v3bY5JaMqPCoGuoEIFLZV8E5r3MfeZlo2l16mg5V2ITJisqceVnhiv8GKC4ToH05WgjZrOjGBjc3uD221%2FUMK6GqTLaYVAP48Hpa8p5Mj56siGkhuECFlWK2IhkoOpFH3c2oKtP4gHMkYhBpIlcX%2FEOi7Pw%2F58TZip0b1eYq6IYdIVCxzY%2B7YQMNuAycAGOqUB1ziRXlmCGKhho%2FXsO7JbSqmW2885oPJfo%2Fyy%2BEOnGroq1lu1sZXnb3oEISPU5yuDtdMe3YPNWOzsUNf5ULhgalF5yRx99uFc6BeE09PjIXhDkk%2BpCLYqhY8yLEMCNVIDMCNHaX5x%2BoRD0QWhKXqqfHWsal%2FKh%2BuifWS6NyM85tDTJASLXi4GgU%2F0S8fulukBdrh0pwVbiLMYnAeg9tV8%2BwnlmO76&X-Amz-Signature=e3f961cacd7200414bc469cfe067bcc546902427ab871bc500c9a5c92c6fc97c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVGX2JMD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDbxVkkohu3T6AmaW5MbgBk9O4c1%2F6AJbZh7LwavKnzLAIgeGb1aCtq4GFo0z54O5Lf8vTcu4eulLHkraqliHdH%2FzAqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdrg9wKL3kuJ1dHTSrcA6IneruyqmHKJDM21efAcoS6rglEq1OXAUIlorLYnGQmdx%2BVx0cIJ%2F2hPYkWfxEeNyogRFpwBJTsaXmBZspF89tJIY1SWNYBwXPlpxpa2PctpxI6AoYaTPu8R51GT64wWs3JP8%2FTIK5wisckRJSGKgSVgszpQAGCDVVGOeMHmrWSZxNO1p32xev7SvHsqKQMMeUGx4RG2%2FugRwOELIGSXVNPG%2BNVAJpPspXKZmqDy0hLLI1iplIfucts2wJHnyRft%2FDBmwZPq6FFwkVvRMLgww7Jl91Ngps%2FEFT7CnN%2B7EMdgtIjKOfSijhOx6KfuW10%2BNNyWpSFyTedxvbyYKwFaXhHnB9z1TZcRmIw5%2Bqc5ScB8Q7laDSKlNIdirlhHGzfczMxzHh8tUfIXa1ZOHomzNDBzS0YAp9ETSUaWPuOpxn4JE%2FF8HUhtWsrhCsa4n%2BtkS84l0v3bY5JaMqPCoGuoEIFLZV8E5r3MfeZlo2l16mg5V2ITJisqceVnhiv8GKC4ToH05WgjZrOjGBjc3uD221%2FUMK6GqTLaYVAP48Hpa8p5Mj56siGkhuECFlWK2IhkoOpFH3c2oKtP4gHMkYhBpIlcX%2FEOi7Pw%2F58TZip0b1eYq6IYdIVCxzY%2B7YQMNuAycAGOqUB1ziRXlmCGKhho%2FXsO7JbSqmW2885oPJfo%2Fyy%2BEOnGroq1lu1sZXnb3oEISPU5yuDtdMe3YPNWOzsUNf5ULhgalF5yRx99uFc6BeE09PjIXhDkk%2BpCLYqhY8yLEMCNVIDMCNHaX5x%2BoRD0QWhKXqqfHWsal%2FKh%2BuifWS6NyM85tDTJASLXi4GgU%2F0S8fulukBdrh0pwVbiLMYnAeg9tV8%2BwnlmO76&X-Amz-Signature=69856474a9d9bafc989b83efbfe5373312444b9f25e8b7a8ae3e71fe2632eaeb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVGX2JMD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDbxVkkohu3T6AmaW5MbgBk9O4c1%2F6AJbZh7LwavKnzLAIgeGb1aCtq4GFo0z54O5Lf8vTcu4eulLHkraqliHdH%2FzAqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdrg9wKL3kuJ1dHTSrcA6IneruyqmHKJDM21efAcoS6rglEq1OXAUIlorLYnGQmdx%2BVx0cIJ%2F2hPYkWfxEeNyogRFpwBJTsaXmBZspF89tJIY1SWNYBwXPlpxpa2PctpxI6AoYaTPu8R51GT64wWs3JP8%2FTIK5wisckRJSGKgSVgszpQAGCDVVGOeMHmrWSZxNO1p32xev7SvHsqKQMMeUGx4RG2%2FugRwOELIGSXVNPG%2BNVAJpPspXKZmqDy0hLLI1iplIfucts2wJHnyRft%2FDBmwZPq6FFwkVvRMLgww7Jl91Ngps%2FEFT7CnN%2B7EMdgtIjKOfSijhOx6KfuW10%2BNNyWpSFyTedxvbyYKwFaXhHnB9z1TZcRmIw5%2Bqc5ScB8Q7laDSKlNIdirlhHGzfczMxzHh8tUfIXa1ZOHomzNDBzS0YAp9ETSUaWPuOpxn4JE%2FF8HUhtWsrhCsa4n%2BtkS84l0v3bY5JaMqPCoGuoEIFLZV8E5r3MfeZlo2l16mg5V2ITJisqceVnhiv8GKC4ToH05WgjZrOjGBjc3uD221%2FUMK6GqTLaYVAP48Hpa8p5Mj56siGkhuECFlWK2IhkoOpFH3c2oKtP4gHMkYhBpIlcX%2FEOi7Pw%2F58TZip0b1eYq6IYdIVCxzY%2B7YQMNuAycAGOqUB1ziRXlmCGKhho%2FXsO7JbSqmW2885oPJfo%2Fyy%2BEOnGroq1lu1sZXnb3oEISPU5yuDtdMe3YPNWOzsUNf5ULhgalF5yRx99uFc6BeE09PjIXhDkk%2BpCLYqhY8yLEMCNVIDMCNHaX5x%2BoRD0QWhKXqqfHWsal%2FKh%2BuifWS6NyM85tDTJASLXi4GgU%2F0S8fulukBdrh0pwVbiLMYnAeg9tV8%2BwnlmO76&X-Amz-Signature=05d08b1b7587d2153a1da2f0f52ba8467af1485825c8e47a35c33306c8eddfad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVGX2JMD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDbxVkkohu3T6AmaW5MbgBk9O4c1%2F6AJbZh7LwavKnzLAIgeGb1aCtq4GFo0z54O5Lf8vTcu4eulLHkraqliHdH%2FzAqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdrg9wKL3kuJ1dHTSrcA6IneruyqmHKJDM21efAcoS6rglEq1OXAUIlorLYnGQmdx%2BVx0cIJ%2F2hPYkWfxEeNyogRFpwBJTsaXmBZspF89tJIY1SWNYBwXPlpxpa2PctpxI6AoYaTPu8R51GT64wWs3JP8%2FTIK5wisckRJSGKgSVgszpQAGCDVVGOeMHmrWSZxNO1p32xev7SvHsqKQMMeUGx4RG2%2FugRwOELIGSXVNPG%2BNVAJpPspXKZmqDy0hLLI1iplIfucts2wJHnyRft%2FDBmwZPq6FFwkVvRMLgww7Jl91Ngps%2FEFT7CnN%2B7EMdgtIjKOfSijhOx6KfuW10%2BNNyWpSFyTedxvbyYKwFaXhHnB9z1TZcRmIw5%2Bqc5ScB8Q7laDSKlNIdirlhHGzfczMxzHh8tUfIXa1ZOHomzNDBzS0YAp9ETSUaWPuOpxn4JE%2FF8HUhtWsrhCsa4n%2BtkS84l0v3bY5JaMqPCoGuoEIFLZV8E5r3MfeZlo2l16mg5V2ITJisqceVnhiv8GKC4ToH05WgjZrOjGBjc3uD221%2FUMK6GqTLaYVAP48Hpa8p5Mj56siGkhuECFlWK2IhkoOpFH3c2oKtP4gHMkYhBpIlcX%2FEOi7Pw%2F58TZip0b1eYq6IYdIVCxzY%2B7YQMNuAycAGOqUB1ziRXlmCGKhho%2FXsO7JbSqmW2885oPJfo%2Fyy%2BEOnGroq1lu1sZXnb3oEISPU5yuDtdMe3YPNWOzsUNf5ULhgalF5yRx99uFc6BeE09PjIXhDkk%2BpCLYqhY8yLEMCNVIDMCNHaX5x%2BoRD0QWhKXqqfHWsal%2FKh%2BuifWS6NyM85tDTJASLXi4GgU%2F0S8fulukBdrh0pwVbiLMYnAeg9tV8%2BwnlmO76&X-Amz-Signature=58332d2220bd00ac05350083cd1c41e85d2c27741b5437108168f6c7e77cabaa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVGX2JMD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDbxVkkohu3T6AmaW5MbgBk9O4c1%2F6AJbZh7LwavKnzLAIgeGb1aCtq4GFo0z54O5Lf8vTcu4eulLHkraqliHdH%2FzAqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdrg9wKL3kuJ1dHTSrcA6IneruyqmHKJDM21efAcoS6rglEq1OXAUIlorLYnGQmdx%2BVx0cIJ%2F2hPYkWfxEeNyogRFpwBJTsaXmBZspF89tJIY1SWNYBwXPlpxpa2PctpxI6AoYaTPu8R51GT64wWs3JP8%2FTIK5wisckRJSGKgSVgszpQAGCDVVGOeMHmrWSZxNO1p32xev7SvHsqKQMMeUGx4RG2%2FugRwOELIGSXVNPG%2BNVAJpPspXKZmqDy0hLLI1iplIfucts2wJHnyRft%2FDBmwZPq6FFwkVvRMLgww7Jl91Ngps%2FEFT7CnN%2B7EMdgtIjKOfSijhOx6KfuW10%2BNNyWpSFyTedxvbyYKwFaXhHnB9z1TZcRmIw5%2Bqc5ScB8Q7laDSKlNIdirlhHGzfczMxzHh8tUfIXa1ZOHomzNDBzS0YAp9ETSUaWPuOpxn4JE%2FF8HUhtWsrhCsa4n%2BtkS84l0v3bY5JaMqPCoGuoEIFLZV8E5r3MfeZlo2l16mg5V2ITJisqceVnhiv8GKC4ToH05WgjZrOjGBjc3uD221%2FUMK6GqTLaYVAP48Hpa8p5Mj56siGkhuECFlWK2IhkoOpFH3c2oKtP4gHMkYhBpIlcX%2FEOi7Pw%2F58TZip0b1eYq6IYdIVCxzY%2B7YQMNuAycAGOqUB1ziRXlmCGKhho%2FXsO7JbSqmW2885oPJfo%2Fyy%2BEOnGroq1lu1sZXnb3oEISPU5yuDtdMe3YPNWOzsUNf5ULhgalF5yRx99uFc6BeE09PjIXhDkk%2BpCLYqhY8yLEMCNVIDMCNHaX5x%2BoRD0QWhKXqqfHWsal%2FKh%2BuifWS6NyM85tDTJASLXi4GgU%2F0S8fulukBdrh0pwVbiLMYnAeg9tV8%2BwnlmO76&X-Amz-Signature=227e3a2bbec23f46836c15e68cfde0443fe5a12374f00ac37dcd5b5cd57b65d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
