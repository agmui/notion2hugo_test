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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NT3YBAY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7QDDb12ApHs2Y%2FuZi7rP1Ym%2BFEKFxcVNKnfQ5a3BXbAiB%2BPyB0A8AaR6wl%2F6EFElSPsX5pLqYbASmtRIIxxLs41yqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ%2FzxMPZZr817jyvGKtwD%2BnmPKPIqC8wmaFnaqIc4L3SeSWW66w%2FUTn8LkzW2vRFFppcc1t%2ByCQhwCCJw5yY96%2B%2FgJUa967p7GsY8JrdjFrymeIMFzfg7DdgriEiAzWo%2Bju%2FsjxDdson7pXrAfG2jjnQGXk%2FS7rQY7PttssY8c8lOe%2FOobKgtQ7sIVc592gaXBHrTtAs8wop7H0%2BC1O2qoZw%2FIX2gdUCtD2dXTacutlIawmOBPxcdxCQqC0Q8YDQ3gc5twjzhf2Sdv5c7bzcbfFDW0lAlbHj447r6x%2FiOdFGBwsOhRGoOowJKfNep8yGaXA9RoQuZDJrYxptG68E%2Bmu23rYq8HMN1tOTauW4pfBQP8Rg8xRhqr%2B5co%2BGDuLxBNAWYJJFxk7MHm0EJAaXQQoQLhzPMHtIiL0yfIjyxKm5CooRERm%2Fz%2B2Zs1guWmBYFaZy4JqW5A215KzaUg5FZXvaNIjAMM14FBOo1fRb7Va%2Byulxu3g1bnH2iO4EgMUlPpaOAgbW8DPEPEWLBb0atMjhMLKvGp1pZbdlOEOW%2FHGKv5ds1vywe7v5HpDvyFu2VPJhVlqBSqK0Px7nC8oSLyqb6W8Xpvm4qfkqKt6P2kO1zBEz9xDln5gmhOvLkbvULFgWY5M46ZdjQzRcw%2BK61wQY6pgG73xKhaJHExmJJnDuj63thmnvRDCNlILNzxAWA%2BZ6AbYToSafEje3s4mClyeDjGBkCDLJmpXqfa3cEMiebJq73%2BeNdM96amgySMfAPHCTvl5tQPx4eI%2FGW7AqACTnqr015zyPxkXrroGf5cieVcIAsvhzdJJXYaWaon0FL39c%2Bn7EYWDrEnGfCp0oJTKtbtIPg6KMUc%2BBdaQ13wzxwJWjswapWlu3M&X-Amz-Signature=0fa4d3264bd48ee23c1da5ea987793bef855bf51d7f76580a0c32be3ed296e51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NT3YBAY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7QDDb12ApHs2Y%2FuZi7rP1Ym%2BFEKFxcVNKnfQ5a3BXbAiB%2BPyB0A8AaR6wl%2F6EFElSPsX5pLqYbASmtRIIxxLs41yqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ%2FzxMPZZr817jyvGKtwD%2BnmPKPIqC8wmaFnaqIc4L3SeSWW66w%2FUTn8LkzW2vRFFppcc1t%2ByCQhwCCJw5yY96%2B%2FgJUa967p7GsY8JrdjFrymeIMFzfg7DdgriEiAzWo%2Bju%2FsjxDdson7pXrAfG2jjnQGXk%2FS7rQY7PttssY8c8lOe%2FOobKgtQ7sIVc592gaXBHrTtAs8wop7H0%2BC1O2qoZw%2FIX2gdUCtD2dXTacutlIawmOBPxcdxCQqC0Q8YDQ3gc5twjzhf2Sdv5c7bzcbfFDW0lAlbHj447r6x%2FiOdFGBwsOhRGoOowJKfNep8yGaXA9RoQuZDJrYxptG68E%2Bmu23rYq8HMN1tOTauW4pfBQP8Rg8xRhqr%2B5co%2BGDuLxBNAWYJJFxk7MHm0EJAaXQQoQLhzPMHtIiL0yfIjyxKm5CooRERm%2Fz%2B2Zs1guWmBYFaZy4JqW5A215KzaUg5FZXvaNIjAMM14FBOo1fRb7Va%2Byulxu3g1bnH2iO4EgMUlPpaOAgbW8DPEPEWLBb0atMjhMLKvGp1pZbdlOEOW%2FHGKv5ds1vywe7v5HpDvyFu2VPJhVlqBSqK0Px7nC8oSLyqb6W8Xpvm4qfkqKt6P2kO1zBEz9xDln5gmhOvLkbvULFgWY5M46ZdjQzRcw%2BK61wQY6pgG73xKhaJHExmJJnDuj63thmnvRDCNlILNzxAWA%2BZ6AbYToSafEje3s4mClyeDjGBkCDLJmpXqfa3cEMiebJq73%2BeNdM96amgySMfAPHCTvl5tQPx4eI%2FGW7AqACTnqr015zyPxkXrroGf5cieVcIAsvhzdJJXYaWaon0FL39c%2Bn7EYWDrEnGfCp0oJTKtbtIPg6KMUc%2BBdaQ13wzxwJWjswapWlu3M&X-Amz-Signature=08dbde53275e34737c1a7dd00ae5935d92f29719ad4ebe460ecb1eef5f658974&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NT3YBAY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7QDDb12ApHs2Y%2FuZi7rP1Ym%2BFEKFxcVNKnfQ5a3BXbAiB%2BPyB0A8AaR6wl%2F6EFElSPsX5pLqYbASmtRIIxxLs41yqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ%2FzxMPZZr817jyvGKtwD%2BnmPKPIqC8wmaFnaqIc4L3SeSWW66w%2FUTn8LkzW2vRFFppcc1t%2ByCQhwCCJw5yY96%2B%2FgJUa967p7GsY8JrdjFrymeIMFzfg7DdgriEiAzWo%2Bju%2FsjxDdson7pXrAfG2jjnQGXk%2FS7rQY7PttssY8c8lOe%2FOobKgtQ7sIVc592gaXBHrTtAs8wop7H0%2BC1O2qoZw%2FIX2gdUCtD2dXTacutlIawmOBPxcdxCQqC0Q8YDQ3gc5twjzhf2Sdv5c7bzcbfFDW0lAlbHj447r6x%2FiOdFGBwsOhRGoOowJKfNep8yGaXA9RoQuZDJrYxptG68E%2Bmu23rYq8HMN1tOTauW4pfBQP8Rg8xRhqr%2B5co%2BGDuLxBNAWYJJFxk7MHm0EJAaXQQoQLhzPMHtIiL0yfIjyxKm5CooRERm%2Fz%2B2Zs1guWmBYFaZy4JqW5A215KzaUg5FZXvaNIjAMM14FBOo1fRb7Va%2Byulxu3g1bnH2iO4EgMUlPpaOAgbW8DPEPEWLBb0atMjhMLKvGp1pZbdlOEOW%2FHGKv5ds1vywe7v5HpDvyFu2VPJhVlqBSqK0Px7nC8oSLyqb6W8Xpvm4qfkqKt6P2kO1zBEz9xDln5gmhOvLkbvULFgWY5M46ZdjQzRcw%2BK61wQY6pgG73xKhaJHExmJJnDuj63thmnvRDCNlILNzxAWA%2BZ6AbYToSafEje3s4mClyeDjGBkCDLJmpXqfa3cEMiebJq73%2BeNdM96amgySMfAPHCTvl5tQPx4eI%2FGW7AqACTnqr015zyPxkXrroGf5cieVcIAsvhzdJJXYaWaon0FL39c%2Bn7EYWDrEnGfCp0oJTKtbtIPg6KMUc%2BBdaQ13wzxwJWjswapWlu3M&X-Amz-Signature=ccbdce5137a5eb71cb23415bd69a15da51fe745f62ce8dfac83a75ee415a327a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NT3YBAY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7QDDb12ApHs2Y%2FuZi7rP1Ym%2BFEKFxcVNKnfQ5a3BXbAiB%2BPyB0A8AaR6wl%2F6EFElSPsX5pLqYbASmtRIIxxLs41yqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ%2FzxMPZZr817jyvGKtwD%2BnmPKPIqC8wmaFnaqIc4L3SeSWW66w%2FUTn8LkzW2vRFFppcc1t%2ByCQhwCCJw5yY96%2B%2FgJUa967p7GsY8JrdjFrymeIMFzfg7DdgriEiAzWo%2Bju%2FsjxDdson7pXrAfG2jjnQGXk%2FS7rQY7PttssY8c8lOe%2FOobKgtQ7sIVc592gaXBHrTtAs8wop7H0%2BC1O2qoZw%2FIX2gdUCtD2dXTacutlIawmOBPxcdxCQqC0Q8YDQ3gc5twjzhf2Sdv5c7bzcbfFDW0lAlbHj447r6x%2FiOdFGBwsOhRGoOowJKfNep8yGaXA9RoQuZDJrYxptG68E%2Bmu23rYq8HMN1tOTauW4pfBQP8Rg8xRhqr%2B5co%2BGDuLxBNAWYJJFxk7MHm0EJAaXQQoQLhzPMHtIiL0yfIjyxKm5CooRERm%2Fz%2B2Zs1guWmBYFaZy4JqW5A215KzaUg5FZXvaNIjAMM14FBOo1fRb7Va%2Byulxu3g1bnH2iO4EgMUlPpaOAgbW8DPEPEWLBb0atMjhMLKvGp1pZbdlOEOW%2FHGKv5ds1vywe7v5HpDvyFu2VPJhVlqBSqK0Px7nC8oSLyqb6W8Xpvm4qfkqKt6P2kO1zBEz9xDln5gmhOvLkbvULFgWY5M46ZdjQzRcw%2BK61wQY6pgG73xKhaJHExmJJnDuj63thmnvRDCNlILNzxAWA%2BZ6AbYToSafEje3s4mClyeDjGBkCDLJmpXqfa3cEMiebJq73%2BeNdM96amgySMfAPHCTvl5tQPx4eI%2FGW7AqACTnqr015zyPxkXrroGf5cieVcIAsvhzdJJXYaWaon0FL39c%2Bn7EYWDrEnGfCp0oJTKtbtIPg6KMUc%2BBdaQ13wzxwJWjswapWlu3M&X-Amz-Signature=40020ca5caf5e5a4904b87c0e3388fd8080d37619bc2f44884005fd49652cc2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NT3YBAY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7QDDb12ApHs2Y%2FuZi7rP1Ym%2BFEKFxcVNKnfQ5a3BXbAiB%2BPyB0A8AaR6wl%2F6EFElSPsX5pLqYbASmtRIIxxLs41yqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ%2FzxMPZZr817jyvGKtwD%2BnmPKPIqC8wmaFnaqIc4L3SeSWW66w%2FUTn8LkzW2vRFFppcc1t%2ByCQhwCCJw5yY96%2B%2FgJUa967p7GsY8JrdjFrymeIMFzfg7DdgriEiAzWo%2Bju%2FsjxDdson7pXrAfG2jjnQGXk%2FS7rQY7PttssY8c8lOe%2FOobKgtQ7sIVc592gaXBHrTtAs8wop7H0%2BC1O2qoZw%2FIX2gdUCtD2dXTacutlIawmOBPxcdxCQqC0Q8YDQ3gc5twjzhf2Sdv5c7bzcbfFDW0lAlbHj447r6x%2FiOdFGBwsOhRGoOowJKfNep8yGaXA9RoQuZDJrYxptG68E%2Bmu23rYq8HMN1tOTauW4pfBQP8Rg8xRhqr%2B5co%2BGDuLxBNAWYJJFxk7MHm0EJAaXQQoQLhzPMHtIiL0yfIjyxKm5CooRERm%2Fz%2B2Zs1guWmBYFaZy4JqW5A215KzaUg5FZXvaNIjAMM14FBOo1fRb7Va%2Byulxu3g1bnH2iO4EgMUlPpaOAgbW8DPEPEWLBb0atMjhMLKvGp1pZbdlOEOW%2FHGKv5ds1vywe7v5HpDvyFu2VPJhVlqBSqK0Px7nC8oSLyqb6W8Xpvm4qfkqKt6P2kO1zBEz9xDln5gmhOvLkbvULFgWY5M46ZdjQzRcw%2BK61wQY6pgG73xKhaJHExmJJnDuj63thmnvRDCNlILNzxAWA%2BZ6AbYToSafEje3s4mClyeDjGBkCDLJmpXqfa3cEMiebJq73%2BeNdM96amgySMfAPHCTvl5tQPx4eI%2FGW7AqACTnqr015zyPxkXrroGf5cieVcIAsvhzdJJXYaWaon0FL39c%2Bn7EYWDrEnGfCp0oJTKtbtIPg6KMUc%2BBdaQ13wzxwJWjswapWlu3M&X-Amz-Signature=dc2abe814e1daee9e8c57d9583050c6a809bf43942dd403139b0f29ee6a942e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NT3YBAY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7QDDb12ApHs2Y%2FuZi7rP1Ym%2BFEKFxcVNKnfQ5a3BXbAiB%2BPyB0A8AaR6wl%2F6EFElSPsX5pLqYbASmtRIIxxLs41yqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ%2FzxMPZZr817jyvGKtwD%2BnmPKPIqC8wmaFnaqIc4L3SeSWW66w%2FUTn8LkzW2vRFFppcc1t%2ByCQhwCCJw5yY96%2B%2FgJUa967p7GsY8JrdjFrymeIMFzfg7DdgriEiAzWo%2Bju%2FsjxDdson7pXrAfG2jjnQGXk%2FS7rQY7PttssY8c8lOe%2FOobKgtQ7sIVc592gaXBHrTtAs8wop7H0%2BC1O2qoZw%2FIX2gdUCtD2dXTacutlIawmOBPxcdxCQqC0Q8YDQ3gc5twjzhf2Sdv5c7bzcbfFDW0lAlbHj447r6x%2FiOdFGBwsOhRGoOowJKfNep8yGaXA9RoQuZDJrYxptG68E%2Bmu23rYq8HMN1tOTauW4pfBQP8Rg8xRhqr%2B5co%2BGDuLxBNAWYJJFxk7MHm0EJAaXQQoQLhzPMHtIiL0yfIjyxKm5CooRERm%2Fz%2B2Zs1guWmBYFaZy4JqW5A215KzaUg5FZXvaNIjAMM14FBOo1fRb7Va%2Byulxu3g1bnH2iO4EgMUlPpaOAgbW8DPEPEWLBb0atMjhMLKvGp1pZbdlOEOW%2FHGKv5ds1vywe7v5HpDvyFu2VPJhVlqBSqK0Px7nC8oSLyqb6W8Xpvm4qfkqKt6P2kO1zBEz9xDln5gmhOvLkbvULFgWY5M46ZdjQzRcw%2BK61wQY6pgG73xKhaJHExmJJnDuj63thmnvRDCNlILNzxAWA%2BZ6AbYToSafEje3s4mClyeDjGBkCDLJmpXqfa3cEMiebJq73%2BeNdM96amgySMfAPHCTvl5tQPx4eI%2FGW7AqACTnqr015zyPxkXrroGf5cieVcIAsvhzdJJXYaWaon0FL39c%2Bn7EYWDrEnGfCp0oJTKtbtIPg6KMUc%2BBdaQ13wzxwJWjswapWlu3M&X-Amz-Signature=989b078a6b0b99d0d2a8d8d1827b9081ae0fc2b354eecdc1715b0f4b4f9ce954&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NT3YBAY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7QDDb12ApHs2Y%2FuZi7rP1Ym%2BFEKFxcVNKnfQ5a3BXbAiB%2BPyB0A8AaR6wl%2F6EFElSPsX5pLqYbASmtRIIxxLs41yqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ%2FzxMPZZr817jyvGKtwD%2BnmPKPIqC8wmaFnaqIc4L3SeSWW66w%2FUTn8LkzW2vRFFppcc1t%2ByCQhwCCJw5yY96%2B%2FgJUa967p7GsY8JrdjFrymeIMFzfg7DdgriEiAzWo%2Bju%2FsjxDdson7pXrAfG2jjnQGXk%2FS7rQY7PttssY8c8lOe%2FOobKgtQ7sIVc592gaXBHrTtAs8wop7H0%2BC1O2qoZw%2FIX2gdUCtD2dXTacutlIawmOBPxcdxCQqC0Q8YDQ3gc5twjzhf2Sdv5c7bzcbfFDW0lAlbHj447r6x%2FiOdFGBwsOhRGoOowJKfNep8yGaXA9RoQuZDJrYxptG68E%2Bmu23rYq8HMN1tOTauW4pfBQP8Rg8xRhqr%2B5co%2BGDuLxBNAWYJJFxk7MHm0EJAaXQQoQLhzPMHtIiL0yfIjyxKm5CooRERm%2Fz%2B2Zs1guWmBYFaZy4JqW5A215KzaUg5FZXvaNIjAMM14FBOo1fRb7Va%2Byulxu3g1bnH2iO4EgMUlPpaOAgbW8DPEPEWLBb0atMjhMLKvGp1pZbdlOEOW%2FHGKv5ds1vywe7v5HpDvyFu2VPJhVlqBSqK0Px7nC8oSLyqb6W8Xpvm4qfkqKt6P2kO1zBEz9xDln5gmhOvLkbvULFgWY5M46ZdjQzRcw%2BK61wQY6pgG73xKhaJHExmJJnDuj63thmnvRDCNlILNzxAWA%2BZ6AbYToSafEje3s4mClyeDjGBkCDLJmpXqfa3cEMiebJq73%2BeNdM96amgySMfAPHCTvl5tQPx4eI%2FGW7AqACTnqr015zyPxkXrroGf5cieVcIAsvhzdJJXYaWaon0FL39c%2Bn7EYWDrEnGfCp0oJTKtbtIPg6KMUc%2BBdaQ13wzxwJWjswapWlu3M&X-Amz-Signature=e913f577fdd537b1a82a15fe99a4a1a91e950b07a5ffc34ce4d70c75c78e800e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NT3YBAY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7QDDb12ApHs2Y%2FuZi7rP1Ym%2BFEKFxcVNKnfQ5a3BXbAiB%2BPyB0A8AaR6wl%2F6EFElSPsX5pLqYbASmtRIIxxLs41yqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ%2FzxMPZZr817jyvGKtwD%2BnmPKPIqC8wmaFnaqIc4L3SeSWW66w%2FUTn8LkzW2vRFFppcc1t%2ByCQhwCCJw5yY96%2B%2FgJUa967p7GsY8JrdjFrymeIMFzfg7DdgriEiAzWo%2Bju%2FsjxDdson7pXrAfG2jjnQGXk%2FS7rQY7PttssY8c8lOe%2FOobKgtQ7sIVc592gaXBHrTtAs8wop7H0%2BC1O2qoZw%2FIX2gdUCtD2dXTacutlIawmOBPxcdxCQqC0Q8YDQ3gc5twjzhf2Sdv5c7bzcbfFDW0lAlbHj447r6x%2FiOdFGBwsOhRGoOowJKfNep8yGaXA9RoQuZDJrYxptG68E%2Bmu23rYq8HMN1tOTauW4pfBQP8Rg8xRhqr%2B5co%2BGDuLxBNAWYJJFxk7MHm0EJAaXQQoQLhzPMHtIiL0yfIjyxKm5CooRERm%2Fz%2B2Zs1guWmBYFaZy4JqW5A215KzaUg5FZXvaNIjAMM14FBOo1fRb7Va%2Byulxu3g1bnH2iO4EgMUlPpaOAgbW8DPEPEWLBb0atMjhMLKvGp1pZbdlOEOW%2FHGKv5ds1vywe7v5HpDvyFu2VPJhVlqBSqK0Px7nC8oSLyqb6W8Xpvm4qfkqKt6P2kO1zBEz9xDln5gmhOvLkbvULFgWY5M46ZdjQzRcw%2BK61wQY6pgG73xKhaJHExmJJnDuj63thmnvRDCNlILNzxAWA%2BZ6AbYToSafEje3s4mClyeDjGBkCDLJmpXqfa3cEMiebJq73%2BeNdM96amgySMfAPHCTvl5tQPx4eI%2FGW7AqACTnqr015zyPxkXrroGf5cieVcIAsvhzdJJXYaWaon0FL39c%2Bn7EYWDrEnGfCp0oJTKtbtIPg6KMUc%2BBdaQ13wzxwJWjswapWlu3M&X-Amz-Signature=af9af5de051432b1a575b56354d18968d9aa258ae1f1c4d35a1d2ebb21922f91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
