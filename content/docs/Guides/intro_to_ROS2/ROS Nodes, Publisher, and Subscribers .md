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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZKYKNI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDy10uP37sDLNaxPM5aegxMR5rNaaQeOvjqPTHuqrx%2BDAiAKvLeJRGPF4GkI5Z5U5eYynKJ6qYBkuMXZ2D44bgeAXir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMgtiJf4MqQ9RcXl%2BZKtwDxLu12zvo93uUjoW3aSUkcw66xumCg08VoC5fhU7DDrkxHSgI%2BUR9Yo3UJyKixyJEvmMN%2B7cuPEfGmqAW98Z%2BjSoE1FS8LNE1ybbIOmKXxoQMwiP5sJ%2FrVKVvwzXG72qqLhDKcoloUgkeTVJp%2FHOrEDdKGglR130wMrXlSqwjgVVSb1xahgvbbAMGIJoChQdTWlyWLp%2BOxcf4noiepdglQs0nXIPSRiN%2Fl7s9D5%2Bf33h0XRBznU7t5mzhZdmvIOXiLgg4CoQCF2C6JWpBcya10z4DAyq%2Bn%2FOzTDNNMCpK1O7qMgn5vD%2BTMMLC9%2F98LrgFkGPcX6M3YMrG37DYtSDWHX6TIhg%2B3CIrraV%2BLMzY0tOBwFxk5Tff%2FGYK59rFmd4y3AUxxT1%2FG%2FavlKAN11TrIMQZe3oPs49ZulypE%2FGMtvWxChWfLJ8M6L3FWDihrNLffE0KfXpDAAr%2FXJwMejasNG1fAvingGCmdhyq5QZWdPgBY0WR%2Fb2zELhOQ8b2tudqN7M0vIu0Qsmyt5ii%2BHVmsrDN%2FrXCABDgBgaD7yi5nDKJdwUviPnzioEUfjP4TwT3Mngu7TTMjVRgGBcj80f94tZwc4pvZBnODHicZNTlk87t0G1nKS8aau4rTgow%2BIX9wQY6pgEzHc3HD1nRBpzl6ZnjLUiyBWQ3jAVKKL%2BbdgCpQYHH9cad5HUlz%2BRsbs2sFZx1SXcN3qyzjpXwt3yu5Opsy8XxSQgdxx4MvXhFDJXOuPuAbn%2BdVrwsyI0uN%2B8SFPCZCvW2dWSgf5me88JIiUzbkLYWSSDA3VHmTOWlUCiBotjlE%2BbM27qfy25Ofz5x1yrRUIvCa9Vqu8TkIwuTByfygIPAiFtUizEw&X-Amz-Signature=c88044bc3144b9b1255817eabdf096c1a37257a61c9aa5fe8770feffaa850de1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZKYKNI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDy10uP37sDLNaxPM5aegxMR5rNaaQeOvjqPTHuqrx%2BDAiAKvLeJRGPF4GkI5Z5U5eYynKJ6qYBkuMXZ2D44bgeAXir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMgtiJf4MqQ9RcXl%2BZKtwDxLu12zvo93uUjoW3aSUkcw66xumCg08VoC5fhU7DDrkxHSgI%2BUR9Yo3UJyKixyJEvmMN%2B7cuPEfGmqAW98Z%2BjSoE1FS8LNE1ybbIOmKXxoQMwiP5sJ%2FrVKVvwzXG72qqLhDKcoloUgkeTVJp%2FHOrEDdKGglR130wMrXlSqwjgVVSb1xahgvbbAMGIJoChQdTWlyWLp%2BOxcf4noiepdglQs0nXIPSRiN%2Fl7s9D5%2Bf33h0XRBznU7t5mzhZdmvIOXiLgg4CoQCF2C6JWpBcya10z4DAyq%2Bn%2FOzTDNNMCpK1O7qMgn5vD%2BTMMLC9%2F98LrgFkGPcX6M3YMrG37DYtSDWHX6TIhg%2B3CIrraV%2BLMzY0tOBwFxk5Tff%2FGYK59rFmd4y3AUxxT1%2FG%2FavlKAN11TrIMQZe3oPs49ZulypE%2FGMtvWxChWfLJ8M6L3FWDihrNLffE0KfXpDAAr%2FXJwMejasNG1fAvingGCmdhyq5QZWdPgBY0WR%2Fb2zELhOQ8b2tudqN7M0vIu0Qsmyt5ii%2BHVmsrDN%2FrXCABDgBgaD7yi5nDKJdwUviPnzioEUfjP4TwT3Mngu7TTMjVRgGBcj80f94tZwc4pvZBnODHicZNTlk87t0G1nKS8aau4rTgow%2BIX9wQY6pgEzHc3HD1nRBpzl6ZnjLUiyBWQ3jAVKKL%2BbdgCpQYHH9cad5HUlz%2BRsbs2sFZx1SXcN3qyzjpXwt3yu5Opsy8XxSQgdxx4MvXhFDJXOuPuAbn%2BdVrwsyI0uN%2B8SFPCZCvW2dWSgf5me88JIiUzbkLYWSSDA3VHmTOWlUCiBotjlE%2BbM27qfy25Ofz5x1yrRUIvCa9Vqu8TkIwuTByfygIPAiFtUizEw&X-Amz-Signature=43d7a80fb3c5cfaf7c875e0df9ad55450dbe17d0cd281a02f5b4c5118ef62c3a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZKYKNI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDy10uP37sDLNaxPM5aegxMR5rNaaQeOvjqPTHuqrx%2BDAiAKvLeJRGPF4GkI5Z5U5eYynKJ6qYBkuMXZ2D44bgeAXir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMgtiJf4MqQ9RcXl%2BZKtwDxLu12zvo93uUjoW3aSUkcw66xumCg08VoC5fhU7DDrkxHSgI%2BUR9Yo3UJyKixyJEvmMN%2B7cuPEfGmqAW98Z%2BjSoE1FS8LNE1ybbIOmKXxoQMwiP5sJ%2FrVKVvwzXG72qqLhDKcoloUgkeTVJp%2FHOrEDdKGglR130wMrXlSqwjgVVSb1xahgvbbAMGIJoChQdTWlyWLp%2BOxcf4noiepdglQs0nXIPSRiN%2Fl7s9D5%2Bf33h0XRBznU7t5mzhZdmvIOXiLgg4CoQCF2C6JWpBcya10z4DAyq%2Bn%2FOzTDNNMCpK1O7qMgn5vD%2BTMMLC9%2F98LrgFkGPcX6M3YMrG37DYtSDWHX6TIhg%2B3CIrraV%2BLMzY0tOBwFxk5Tff%2FGYK59rFmd4y3AUxxT1%2FG%2FavlKAN11TrIMQZe3oPs49ZulypE%2FGMtvWxChWfLJ8M6L3FWDihrNLffE0KfXpDAAr%2FXJwMejasNG1fAvingGCmdhyq5QZWdPgBY0WR%2Fb2zELhOQ8b2tudqN7M0vIu0Qsmyt5ii%2BHVmsrDN%2FrXCABDgBgaD7yi5nDKJdwUviPnzioEUfjP4TwT3Mngu7TTMjVRgGBcj80f94tZwc4pvZBnODHicZNTlk87t0G1nKS8aau4rTgow%2BIX9wQY6pgEzHc3HD1nRBpzl6ZnjLUiyBWQ3jAVKKL%2BbdgCpQYHH9cad5HUlz%2BRsbs2sFZx1SXcN3qyzjpXwt3yu5Opsy8XxSQgdxx4MvXhFDJXOuPuAbn%2BdVrwsyI0uN%2B8SFPCZCvW2dWSgf5me88JIiUzbkLYWSSDA3VHmTOWlUCiBotjlE%2BbM27qfy25Ofz5x1yrRUIvCa9Vqu8TkIwuTByfygIPAiFtUizEw&X-Amz-Signature=f770be6060a54b1b7418febb129ab6a7b05479da6f82c72ad2263ae38252402b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZKYKNI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDy10uP37sDLNaxPM5aegxMR5rNaaQeOvjqPTHuqrx%2BDAiAKvLeJRGPF4GkI5Z5U5eYynKJ6qYBkuMXZ2D44bgeAXir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMgtiJf4MqQ9RcXl%2BZKtwDxLu12zvo93uUjoW3aSUkcw66xumCg08VoC5fhU7DDrkxHSgI%2BUR9Yo3UJyKixyJEvmMN%2B7cuPEfGmqAW98Z%2BjSoE1FS8LNE1ybbIOmKXxoQMwiP5sJ%2FrVKVvwzXG72qqLhDKcoloUgkeTVJp%2FHOrEDdKGglR130wMrXlSqwjgVVSb1xahgvbbAMGIJoChQdTWlyWLp%2BOxcf4noiepdglQs0nXIPSRiN%2Fl7s9D5%2Bf33h0XRBznU7t5mzhZdmvIOXiLgg4CoQCF2C6JWpBcya10z4DAyq%2Bn%2FOzTDNNMCpK1O7qMgn5vD%2BTMMLC9%2F98LrgFkGPcX6M3YMrG37DYtSDWHX6TIhg%2B3CIrraV%2BLMzY0tOBwFxk5Tff%2FGYK59rFmd4y3AUxxT1%2FG%2FavlKAN11TrIMQZe3oPs49ZulypE%2FGMtvWxChWfLJ8M6L3FWDihrNLffE0KfXpDAAr%2FXJwMejasNG1fAvingGCmdhyq5QZWdPgBY0WR%2Fb2zELhOQ8b2tudqN7M0vIu0Qsmyt5ii%2BHVmsrDN%2FrXCABDgBgaD7yi5nDKJdwUviPnzioEUfjP4TwT3Mngu7TTMjVRgGBcj80f94tZwc4pvZBnODHicZNTlk87t0G1nKS8aau4rTgow%2BIX9wQY6pgEzHc3HD1nRBpzl6ZnjLUiyBWQ3jAVKKL%2BbdgCpQYHH9cad5HUlz%2BRsbs2sFZx1SXcN3qyzjpXwt3yu5Opsy8XxSQgdxx4MvXhFDJXOuPuAbn%2BdVrwsyI0uN%2B8SFPCZCvW2dWSgf5me88JIiUzbkLYWSSDA3VHmTOWlUCiBotjlE%2BbM27qfy25Ofz5x1yrRUIvCa9Vqu8TkIwuTByfygIPAiFtUizEw&X-Amz-Signature=3943554f58b42f2df7ff89a239eb87f9544f0dc7c3b3346061424059ce293143&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZKYKNI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDy10uP37sDLNaxPM5aegxMR5rNaaQeOvjqPTHuqrx%2BDAiAKvLeJRGPF4GkI5Z5U5eYynKJ6qYBkuMXZ2D44bgeAXir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMgtiJf4MqQ9RcXl%2BZKtwDxLu12zvo93uUjoW3aSUkcw66xumCg08VoC5fhU7DDrkxHSgI%2BUR9Yo3UJyKixyJEvmMN%2B7cuPEfGmqAW98Z%2BjSoE1FS8LNE1ybbIOmKXxoQMwiP5sJ%2FrVKVvwzXG72qqLhDKcoloUgkeTVJp%2FHOrEDdKGglR130wMrXlSqwjgVVSb1xahgvbbAMGIJoChQdTWlyWLp%2BOxcf4noiepdglQs0nXIPSRiN%2Fl7s9D5%2Bf33h0XRBznU7t5mzhZdmvIOXiLgg4CoQCF2C6JWpBcya10z4DAyq%2Bn%2FOzTDNNMCpK1O7qMgn5vD%2BTMMLC9%2F98LrgFkGPcX6M3YMrG37DYtSDWHX6TIhg%2B3CIrraV%2BLMzY0tOBwFxk5Tff%2FGYK59rFmd4y3AUxxT1%2FG%2FavlKAN11TrIMQZe3oPs49ZulypE%2FGMtvWxChWfLJ8M6L3FWDihrNLffE0KfXpDAAr%2FXJwMejasNG1fAvingGCmdhyq5QZWdPgBY0WR%2Fb2zELhOQ8b2tudqN7M0vIu0Qsmyt5ii%2BHVmsrDN%2FrXCABDgBgaD7yi5nDKJdwUviPnzioEUfjP4TwT3Mngu7TTMjVRgGBcj80f94tZwc4pvZBnODHicZNTlk87t0G1nKS8aau4rTgow%2BIX9wQY6pgEzHc3HD1nRBpzl6ZnjLUiyBWQ3jAVKKL%2BbdgCpQYHH9cad5HUlz%2BRsbs2sFZx1SXcN3qyzjpXwt3yu5Opsy8XxSQgdxx4MvXhFDJXOuPuAbn%2BdVrwsyI0uN%2B8SFPCZCvW2dWSgf5me88JIiUzbkLYWSSDA3VHmTOWlUCiBotjlE%2BbM27qfy25Ofz5x1yrRUIvCa9Vqu8TkIwuTByfygIPAiFtUizEw&X-Amz-Signature=98797e493f153518476f5fd070b72db471e477e128d8cc67b306cca38044f40d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZKYKNI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDy10uP37sDLNaxPM5aegxMR5rNaaQeOvjqPTHuqrx%2BDAiAKvLeJRGPF4GkI5Z5U5eYynKJ6qYBkuMXZ2D44bgeAXir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMgtiJf4MqQ9RcXl%2BZKtwDxLu12zvo93uUjoW3aSUkcw66xumCg08VoC5fhU7DDrkxHSgI%2BUR9Yo3UJyKixyJEvmMN%2B7cuPEfGmqAW98Z%2BjSoE1FS8LNE1ybbIOmKXxoQMwiP5sJ%2FrVKVvwzXG72qqLhDKcoloUgkeTVJp%2FHOrEDdKGglR130wMrXlSqwjgVVSb1xahgvbbAMGIJoChQdTWlyWLp%2BOxcf4noiepdglQs0nXIPSRiN%2Fl7s9D5%2Bf33h0XRBznU7t5mzhZdmvIOXiLgg4CoQCF2C6JWpBcya10z4DAyq%2Bn%2FOzTDNNMCpK1O7qMgn5vD%2BTMMLC9%2F98LrgFkGPcX6M3YMrG37DYtSDWHX6TIhg%2B3CIrraV%2BLMzY0tOBwFxk5Tff%2FGYK59rFmd4y3AUxxT1%2FG%2FavlKAN11TrIMQZe3oPs49ZulypE%2FGMtvWxChWfLJ8M6L3FWDihrNLffE0KfXpDAAr%2FXJwMejasNG1fAvingGCmdhyq5QZWdPgBY0WR%2Fb2zELhOQ8b2tudqN7M0vIu0Qsmyt5ii%2BHVmsrDN%2FrXCABDgBgaD7yi5nDKJdwUviPnzioEUfjP4TwT3Mngu7TTMjVRgGBcj80f94tZwc4pvZBnODHicZNTlk87t0G1nKS8aau4rTgow%2BIX9wQY6pgEzHc3HD1nRBpzl6ZnjLUiyBWQ3jAVKKL%2BbdgCpQYHH9cad5HUlz%2BRsbs2sFZx1SXcN3qyzjpXwt3yu5Opsy8XxSQgdxx4MvXhFDJXOuPuAbn%2BdVrwsyI0uN%2B8SFPCZCvW2dWSgf5me88JIiUzbkLYWSSDA3VHmTOWlUCiBotjlE%2BbM27qfy25Ofz5x1yrRUIvCa9Vqu8TkIwuTByfygIPAiFtUizEw&X-Amz-Signature=7729361a14eaef50a50166754e9ff4522d6f51964a087246030519d7330681be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZKYKNI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDy10uP37sDLNaxPM5aegxMR5rNaaQeOvjqPTHuqrx%2BDAiAKvLeJRGPF4GkI5Z5U5eYynKJ6qYBkuMXZ2D44bgeAXir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMgtiJf4MqQ9RcXl%2BZKtwDxLu12zvo93uUjoW3aSUkcw66xumCg08VoC5fhU7DDrkxHSgI%2BUR9Yo3UJyKixyJEvmMN%2B7cuPEfGmqAW98Z%2BjSoE1FS8LNE1ybbIOmKXxoQMwiP5sJ%2FrVKVvwzXG72qqLhDKcoloUgkeTVJp%2FHOrEDdKGglR130wMrXlSqwjgVVSb1xahgvbbAMGIJoChQdTWlyWLp%2BOxcf4noiepdglQs0nXIPSRiN%2Fl7s9D5%2Bf33h0XRBznU7t5mzhZdmvIOXiLgg4CoQCF2C6JWpBcya10z4DAyq%2Bn%2FOzTDNNMCpK1O7qMgn5vD%2BTMMLC9%2F98LrgFkGPcX6M3YMrG37DYtSDWHX6TIhg%2B3CIrraV%2BLMzY0tOBwFxk5Tff%2FGYK59rFmd4y3AUxxT1%2FG%2FavlKAN11TrIMQZe3oPs49ZulypE%2FGMtvWxChWfLJ8M6L3FWDihrNLffE0KfXpDAAr%2FXJwMejasNG1fAvingGCmdhyq5QZWdPgBY0WR%2Fb2zELhOQ8b2tudqN7M0vIu0Qsmyt5ii%2BHVmsrDN%2FrXCABDgBgaD7yi5nDKJdwUviPnzioEUfjP4TwT3Mngu7TTMjVRgGBcj80f94tZwc4pvZBnODHicZNTlk87t0G1nKS8aau4rTgow%2BIX9wQY6pgEzHc3HD1nRBpzl6ZnjLUiyBWQ3jAVKKL%2BbdgCpQYHH9cad5HUlz%2BRsbs2sFZx1SXcN3qyzjpXwt3yu5Opsy8XxSQgdxx4MvXhFDJXOuPuAbn%2BdVrwsyI0uN%2B8SFPCZCvW2dWSgf5me88JIiUzbkLYWSSDA3VHmTOWlUCiBotjlE%2BbM27qfy25Ofz5x1yrRUIvCa9Vqu8TkIwuTByfygIPAiFtUizEw&X-Amz-Signature=36f704a25c7563ffcd1c4dc6a72b92247d77a55e03320530cc00a786deb0b3f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZKYKNI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDy10uP37sDLNaxPM5aegxMR5rNaaQeOvjqPTHuqrx%2BDAiAKvLeJRGPF4GkI5Z5U5eYynKJ6qYBkuMXZ2D44bgeAXir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMgtiJf4MqQ9RcXl%2BZKtwDxLu12zvo93uUjoW3aSUkcw66xumCg08VoC5fhU7DDrkxHSgI%2BUR9Yo3UJyKixyJEvmMN%2B7cuPEfGmqAW98Z%2BjSoE1FS8LNE1ybbIOmKXxoQMwiP5sJ%2FrVKVvwzXG72qqLhDKcoloUgkeTVJp%2FHOrEDdKGglR130wMrXlSqwjgVVSb1xahgvbbAMGIJoChQdTWlyWLp%2BOxcf4noiepdglQs0nXIPSRiN%2Fl7s9D5%2Bf33h0XRBznU7t5mzhZdmvIOXiLgg4CoQCF2C6JWpBcya10z4DAyq%2Bn%2FOzTDNNMCpK1O7qMgn5vD%2BTMMLC9%2F98LrgFkGPcX6M3YMrG37DYtSDWHX6TIhg%2B3CIrraV%2BLMzY0tOBwFxk5Tff%2FGYK59rFmd4y3AUxxT1%2FG%2FavlKAN11TrIMQZe3oPs49ZulypE%2FGMtvWxChWfLJ8M6L3FWDihrNLffE0KfXpDAAr%2FXJwMejasNG1fAvingGCmdhyq5QZWdPgBY0WR%2Fb2zELhOQ8b2tudqN7M0vIu0Qsmyt5ii%2BHVmsrDN%2FrXCABDgBgaD7yi5nDKJdwUviPnzioEUfjP4TwT3Mngu7TTMjVRgGBcj80f94tZwc4pvZBnODHicZNTlk87t0G1nKS8aau4rTgow%2BIX9wQY6pgEzHc3HD1nRBpzl6ZnjLUiyBWQ3jAVKKL%2BbdgCpQYHH9cad5HUlz%2BRsbs2sFZx1SXcN3qyzjpXwt3yu5Opsy8XxSQgdxx4MvXhFDJXOuPuAbn%2BdVrwsyI0uN%2B8SFPCZCvW2dWSgf5me88JIiUzbkLYWSSDA3VHmTOWlUCiBotjlE%2BbM27qfy25Ofz5x1yrRUIvCa9Vqu8TkIwuTByfygIPAiFtUizEw&X-Amz-Signature=6de4f89d2dd659ec6964bfc9e91f959441dc93129f91a405004b26c4c331be16&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
