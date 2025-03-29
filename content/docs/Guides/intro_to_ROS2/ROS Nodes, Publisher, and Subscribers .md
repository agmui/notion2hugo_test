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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABDFGT6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDYyl9sWzQjElBH47w9TthDFoBS58UQKQvSeFXzoGHbOAIgL44shgMNnCBxRP5gcgdS7tAw1VGagtYgQyNlxAgQEVcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDfnFAmLv%2Bu0yWJ8xSrcA35EuSzynq%2FEV7dqMuvqoj1z8IvHDu3RPoGmFQiDVLJByD8vR%2BnLBNaFB3Y2gNCRgidKlSfZoZxVrrAceS5vlg%2Faws0iZFo3eUOb0nSGE6oZ3%2BkF9ZYT9tKizH%2FQkT04R2Dtk62YOefCrEw2MiMMVtdugL11UVw5l9xkrHMzsEJ0KUJAp4ilsLJlyrNOv43DDQLG70Z9m1uYMFQczy5QmYlIsr32CQ5VVVm3CBKl2aN84r282h6PCtP6nIHaQKpD3RBCndKsQYjrcwgOwz2UcOZ%2BlT5Tqn4v08cbuesRcuREXxuoFwTzs%2Fg7V0F6tE7gD3G%2FKmegq6iZxJt56rdHkwcelvTl7aDkwgEtpr9ZMHCtixzDw1NZkwnhqQ4lx9F%2FrGUsHZJCIsNRJF1oBnQd1hZkPHtIFWywP%2Bzj8jdL0micKFDzDFsNxaH8IEtwfYESsgU%2BAMCH4vLEi8deoFxd0ans0z9W3JdOBwENBpW%2FO20uZwaEFvXjfwA8HPyviUV%2FefYGUDIjISv9s0iEzfc13%2F1WpLEQY%2BFFTes%2BIOUj%2FnWmMumqtjgxBUAf3vcq0XxZ3r6CHJBBUf%2FBR6EXZ7Zds2vDkF0O8yhoofjRmias3gQo7UTh6ELKYsPnko3aMI61n78GOqUBQYpuvQ0hvXuufQfvG%2BOKsocrmlnzESUbBZ%2BO6i6bMOyz%2FNvY72uMuxXMUZ2STIYUksa94JG7WNdO9OQi3UoKuqNlLIVxAuUoxkE1jHne%2BwLEkRW%2BdxVRHLU%2F9n%2FVgvgLFq%2BxxQIk3ypt4ElkRyApQJ%2BJrTWDlZ8%2BJ2S%2B%2F%2F8iJyRxqBEZvy%2FSLyXdIL9ltzoi2HBBGH9SDJZ9IHD4xvRXxDx%2BxPjR&X-Amz-Signature=cd0a07f4742e4a01f1651fb9cc8fabc84bc135c4ca580658858ebfead5b9261d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABDFGT6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDYyl9sWzQjElBH47w9TthDFoBS58UQKQvSeFXzoGHbOAIgL44shgMNnCBxRP5gcgdS7tAw1VGagtYgQyNlxAgQEVcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDfnFAmLv%2Bu0yWJ8xSrcA35EuSzynq%2FEV7dqMuvqoj1z8IvHDu3RPoGmFQiDVLJByD8vR%2BnLBNaFB3Y2gNCRgidKlSfZoZxVrrAceS5vlg%2Faws0iZFo3eUOb0nSGE6oZ3%2BkF9ZYT9tKizH%2FQkT04R2Dtk62YOefCrEw2MiMMVtdugL11UVw5l9xkrHMzsEJ0KUJAp4ilsLJlyrNOv43DDQLG70Z9m1uYMFQczy5QmYlIsr32CQ5VVVm3CBKl2aN84r282h6PCtP6nIHaQKpD3RBCndKsQYjrcwgOwz2UcOZ%2BlT5Tqn4v08cbuesRcuREXxuoFwTzs%2Fg7V0F6tE7gD3G%2FKmegq6iZxJt56rdHkwcelvTl7aDkwgEtpr9ZMHCtixzDw1NZkwnhqQ4lx9F%2FrGUsHZJCIsNRJF1oBnQd1hZkPHtIFWywP%2Bzj8jdL0micKFDzDFsNxaH8IEtwfYESsgU%2BAMCH4vLEi8deoFxd0ans0z9W3JdOBwENBpW%2FO20uZwaEFvXjfwA8HPyviUV%2FefYGUDIjISv9s0iEzfc13%2F1WpLEQY%2BFFTes%2BIOUj%2FnWmMumqtjgxBUAf3vcq0XxZ3r6CHJBBUf%2FBR6EXZ7Zds2vDkF0O8yhoofjRmias3gQo7UTh6ELKYsPnko3aMI61n78GOqUBQYpuvQ0hvXuufQfvG%2BOKsocrmlnzESUbBZ%2BO6i6bMOyz%2FNvY72uMuxXMUZ2STIYUksa94JG7WNdO9OQi3UoKuqNlLIVxAuUoxkE1jHne%2BwLEkRW%2BdxVRHLU%2F9n%2FVgvgLFq%2BxxQIk3ypt4ElkRyApQJ%2BJrTWDlZ8%2BJ2S%2B%2F%2F8iJyRxqBEZvy%2FSLyXdIL9ltzoi2HBBGH9SDJZ9IHD4xvRXxDx%2BxPjR&X-Amz-Signature=d79e873660719a6902a82ca0182e928415670df303bec991a8a83f8271ee2daa&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABDFGT6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDYyl9sWzQjElBH47w9TthDFoBS58UQKQvSeFXzoGHbOAIgL44shgMNnCBxRP5gcgdS7tAw1VGagtYgQyNlxAgQEVcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDfnFAmLv%2Bu0yWJ8xSrcA35EuSzynq%2FEV7dqMuvqoj1z8IvHDu3RPoGmFQiDVLJByD8vR%2BnLBNaFB3Y2gNCRgidKlSfZoZxVrrAceS5vlg%2Faws0iZFo3eUOb0nSGE6oZ3%2BkF9ZYT9tKizH%2FQkT04R2Dtk62YOefCrEw2MiMMVtdugL11UVw5l9xkrHMzsEJ0KUJAp4ilsLJlyrNOv43DDQLG70Z9m1uYMFQczy5QmYlIsr32CQ5VVVm3CBKl2aN84r282h6PCtP6nIHaQKpD3RBCndKsQYjrcwgOwz2UcOZ%2BlT5Tqn4v08cbuesRcuREXxuoFwTzs%2Fg7V0F6tE7gD3G%2FKmegq6iZxJt56rdHkwcelvTl7aDkwgEtpr9ZMHCtixzDw1NZkwnhqQ4lx9F%2FrGUsHZJCIsNRJF1oBnQd1hZkPHtIFWywP%2Bzj8jdL0micKFDzDFsNxaH8IEtwfYESsgU%2BAMCH4vLEi8deoFxd0ans0z9W3JdOBwENBpW%2FO20uZwaEFvXjfwA8HPyviUV%2FefYGUDIjISv9s0iEzfc13%2F1WpLEQY%2BFFTes%2BIOUj%2FnWmMumqtjgxBUAf3vcq0XxZ3r6CHJBBUf%2FBR6EXZ7Zds2vDkF0O8yhoofjRmias3gQo7UTh6ELKYsPnko3aMI61n78GOqUBQYpuvQ0hvXuufQfvG%2BOKsocrmlnzESUbBZ%2BO6i6bMOyz%2FNvY72uMuxXMUZ2STIYUksa94JG7WNdO9OQi3UoKuqNlLIVxAuUoxkE1jHne%2BwLEkRW%2BdxVRHLU%2F9n%2FVgvgLFq%2BxxQIk3ypt4ElkRyApQJ%2BJrTWDlZ8%2BJ2S%2B%2F%2F8iJyRxqBEZvy%2FSLyXdIL9ltzoi2HBBGH9SDJZ9IHD4xvRXxDx%2BxPjR&X-Amz-Signature=14e6e3ef79a6588b8087e729a65f009ef40c59e9b3574f98aac0a3af5b7095af&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABDFGT6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDYyl9sWzQjElBH47w9TthDFoBS58UQKQvSeFXzoGHbOAIgL44shgMNnCBxRP5gcgdS7tAw1VGagtYgQyNlxAgQEVcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDfnFAmLv%2Bu0yWJ8xSrcA35EuSzynq%2FEV7dqMuvqoj1z8IvHDu3RPoGmFQiDVLJByD8vR%2BnLBNaFB3Y2gNCRgidKlSfZoZxVrrAceS5vlg%2Faws0iZFo3eUOb0nSGE6oZ3%2BkF9ZYT9tKizH%2FQkT04R2Dtk62YOefCrEw2MiMMVtdugL11UVw5l9xkrHMzsEJ0KUJAp4ilsLJlyrNOv43DDQLG70Z9m1uYMFQczy5QmYlIsr32CQ5VVVm3CBKl2aN84r282h6PCtP6nIHaQKpD3RBCndKsQYjrcwgOwz2UcOZ%2BlT5Tqn4v08cbuesRcuREXxuoFwTzs%2Fg7V0F6tE7gD3G%2FKmegq6iZxJt56rdHkwcelvTl7aDkwgEtpr9ZMHCtixzDw1NZkwnhqQ4lx9F%2FrGUsHZJCIsNRJF1oBnQd1hZkPHtIFWywP%2Bzj8jdL0micKFDzDFsNxaH8IEtwfYESsgU%2BAMCH4vLEi8deoFxd0ans0z9W3JdOBwENBpW%2FO20uZwaEFvXjfwA8HPyviUV%2FefYGUDIjISv9s0iEzfc13%2F1WpLEQY%2BFFTes%2BIOUj%2FnWmMumqtjgxBUAf3vcq0XxZ3r6CHJBBUf%2FBR6EXZ7Zds2vDkF0O8yhoofjRmias3gQo7UTh6ELKYsPnko3aMI61n78GOqUBQYpuvQ0hvXuufQfvG%2BOKsocrmlnzESUbBZ%2BO6i6bMOyz%2FNvY72uMuxXMUZ2STIYUksa94JG7WNdO9OQi3UoKuqNlLIVxAuUoxkE1jHne%2BwLEkRW%2BdxVRHLU%2F9n%2FVgvgLFq%2BxxQIk3ypt4ElkRyApQJ%2BJrTWDlZ8%2BJ2S%2B%2F%2F8iJyRxqBEZvy%2FSLyXdIL9ltzoi2HBBGH9SDJZ9IHD4xvRXxDx%2BxPjR&X-Amz-Signature=88de366c847e5173d0ceddf7485770ceeae2c332bb1a6ea30d404332e93262f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABDFGT6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDYyl9sWzQjElBH47w9TthDFoBS58UQKQvSeFXzoGHbOAIgL44shgMNnCBxRP5gcgdS7tAw1VGagtYgQyNlxAgQEVcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDfnFAmLv%2Bu0yWJ8xSrcA35EuSzynq%2FEV7dqMuvqoj1z8IvHDu3RPoGmFQiDVLJByD8vR%2BnLBNaFB3Y2gNCRgidKlSfZoZxVrrAceS5vlg%2Faws0iZFo3eUOb0nSGE6oZ3%2BkF9ZYT9tKizH%2FQkT04R2Dtk62YOefCrEw2MiMMVtdugL11UVw5l9xkrHMzsEJ0KUJAp4ilsLJlyrNOv43DDQLG70Z9m1uYMFQczy5QmYlIsr32CQ5VVVm3CBKl2aN84r282h6PCtP6nIHaQKpD3RBCndKsQYjrcwgOwz2UcOZ%2BlT5Tqn4v08cbuesRcuREXxuoFwTzs%2Fg7V0F6tE7gD3G%2FKmegq6iZxJt56rdHkwcelvTl7aDkwgEtpr9ZMHCtixzDw1NZkwnhqQ4lx9F%2FrGUsHZJCIsNRJF1oBnQd1hZkPHtIFWywP%2Bzj8jdL0micKFDzDFsNxaH8IEtwfYESsgU%2BAMCH4vLEi8deoFxd0ans0z9W3JdOBwENBpW%2FO20uZwaEFvXjfwA8HPyviUV%2FefYGUDIjISv9s0iEzfc13%2F1WpLEQY%2BFFTes%2BIOUj%2FnWmMumqtjgxBUAf3vcq0XxZ3r6CHJBBUf%2FBR6EXZ7Zds2vDkF0O8yhoofjRmias3gQo7UTh6ELKYsPnko3aMI61n78GOqUBQYpuvQ0hvXuufQfvG%2BOKsocrmlnzESUbBZ%2BO6i6bMOyz%2FNvY72uMuxXMUZ2STIYUksa94JG7WNdO9OQi3UoKuqNlLIVxAuUoxkE1jHne%2BwLEkRW%2BdxVRHLU%2F9n%2FVgvgLFq%2BxxQIk3ypt4ElkRyApQJ%2BJrTWDlZ8%2BJ2S%2B%2F%2F8iJyRxqBEZvy%2FSLyXdIL9ltzoi2HBBGH9SDJZ9IHD4xvRXxDx%2BxPjR&X-Amz-Signature=58929bffb62b36af7e2135492b86625df94cf11173de7cc838eaeb0827983f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABDFGT6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDYyl9sWzQjElBH47w9TthDFoBS58UQKQvSeFXzoGHbOAIgL44shgMNnCBxRP5gcgdS7tAw1VGagtYgQyNlxAgQEVcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDfnFAmLv%2Bu0yWJ8xSrcA35EuSzynq%2FEV7dqMuvqoj1z8IvHDu3RPoGmFQiDVLJByD8vR%2BnLBNaFB3Y2gNCRgidKlSfZoZxVrrAceS5vlg%2Faws0iZFo3eUOb0nSGE6oZ3%2BkF9ZYT9tKizH%2FQkT04R2Dtk62YOefCrEw2MiMMVtdugL11UVw5l9xkrHMzsEJ0KUJAp4ilsLJlyrNOv43DDQLG70Z9m1uYMFQczy5QmYlIsr32CQ5VVVm3CBKl2aN84r282h6PCtP6nIHaQKpD3RBCndKsQYjrcwgOwz2UcOZ%2BlT5Tqn4v08cbuesRcuREXxuoFwTzs%2Fg7V0F6tE7gD3G%2FKmegq6iZxJt56rdHkwcelvTl7aDkwgEtpr9ZMHCtixzDw1NZkwnhqQ4lx9F%2FrGUsHZJCIsNRJF1oBnQd1hZkPHtIFWywP%2Bzj8jdL0micKFDzDFsNxaH8IEtwfYESsgU%2BAMCH4vLEi8deoFxd0ans0z9W3JdOBwENBpW%2FO20uZwaEFvXjfwA8HPyviUV%2FefYGUDIjISv9s0iEzfc13%2F1WpLEQY%2BFFTes%2BIOUj%2FnWmMumqtjgxBUAf3vcq0XxZ3r6CHJBBUf%2FBR6EXZ7Zds2vDkF0O8yhoofjRmias3gQo7UTh6ELKYsPnko3aMI61n78GOqUBQYpuvQ0hvXuufQfvG%2BOKsocrmlnzESUbBZ%2BO6i6bMOyz%2FNvY72uMuxXMUZ2STIYUksa94JG7WNdO9OQi3UoKuqNlLIVxAuUoxkE1jHne%2BwLEkRW%2BdxVRHLU%2F9n%2FVgvgLFq%2BxxQIk3ypt4ElkRyApQJ%2BJrTWDlZ8%2BJ2S%2B%2F%2F8iJyRxqBEZvy%2FSLyXdIL9ltzoi2HBBGH9SDJZ9IHD4xvRXxDx%2BxPjR&X-Amz-Signature=233e44c18ab66714ffe8a031c03b92fa9b8e52aa2f882e9f4746be9f5feae6d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABDFGT6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDYyl9sWzQjElBH47w9TthDFoBS58UQKQvSeFXzoGHbOAIgL44shgMNnCBxRP5gcgdS7tAw1VGagtYgQyNlxAgQEVcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDfnFAmLv%2Bu0yWJ8xSrcA35EuSzynq%2FEV7dqMuvqoj1z8IvHDu3RPoGmFQiDVLJByD8vR%2BnLBNaFB3Y2gNCRgidKlSfZoZxVrrAceS5vlg%2Faws0iZFo3eUOb0nSGE6oZ3%2BkF9ZYT9tKizH%2FQkT04R2Dtk62YOefCrEw2MiMMVtdugL11UVw5l9xkrHMzsEJ0KUJAp4ilsLJlyrNOv43DDQLG70Z9m1uYMFQczy5QmYlIsr32CQ5VVVm3CBKl2aN84r282h6PCtP6nIHaQKpD3RBCndKsQYjrcwgOwz2UcOZ%2BlT5Tqn4v08cbuesRcuREXxuoFwTzs%2Fg7V0F6tE7gD3G%2FKmegq6iZxJt56rdHkwcelvTl7aDkwgEtpr9ZMHCtixzDw1NZkwnhqQ4lx9F%2FrGUsHZJCIsNRJF1oBnQd1hZkPHtIFWywP%2Bzj8jdL0micKFDzDFsNxaH8IEtwfYESsgU%2BAMCH4vLEi8deoFxd0ans0z9W3JdOBwENBpW%2FO20uZwaEFvXjfwA8HPyviUV%2FefYGUDIjISv9s0iEzfc13%2F1WpLEQY%2BFFTes%2BIOUj%2FnWmMumqtjgxBUAf3vcq0XxZ3r6CHJBBUf%2FBR6EXZ7Zds2vDkF0O8yhoofjRmias3gQo7UTh6ELKYsPnko3aMI61n78GOqUBQYpuvQ0hvXuufQfvG%2BOKsocrmlnzESUbBZ%2BO6i6bMOyz%2FNvY72uMuxXMUZ2STIYUksa94JG7WNdO9OQi3UoKuqNlLIVxAuUoxkE1jHne%2BwLEkRW%2BdxVRHLU%2F9n%2FVgvgLFq%2BxxQIk3ypt4ElkRyApQJ%2BJrTWDlZ8%2BJ2S%2B%2F%2F8iJyRxqBEZvy%2FSLyXdIL9ltzoi2HBBGH9SDJZ9IHD4xvRXxDx%2BxPjR&X-Amz-Signature=a11d227b5c9f6486f7123f5f7734ee19ad3f0d6f49ac82fb3183196f84480800&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABDFGT6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDYyl9sWzQjElBH47w9TthDFoBS58UQKQvSeFXzoGHbOAIgL44shgMNnCBxRP5gcgdS7tAw1VGagtYgQyNlxAgQEVcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDfnFAmLv%2Bu0yWJ8xSrcA35EuSzynq%2FEV7dqMuvqoj1z8IvHDu3RPoGmFQiDVLJByD8vR%2BnLBNaFB3Y2gNCRgidKlSfZoZxVrrAceS5vlg%2Faws0iZFo3eUOb0nSGE6oZ3%2BkF9ZYT9tKizH%2FQkT04R2Dtk62YOefCrEw2MiMMVtdugL11UVw5l9xkrHMzsEJ0KUJAp4ilsLJlyrNOv43DDQLG70Z9m1uYMFQczy5QmYlIsr32CQ5VVVm3CBKl2aN84r282h6PCtP6nIHaQKpD3RBCndKsQYjrcwgOwz2UcOZ%2BlT5Tqn4v08cbuesRcuREXxuoFwTzs%2Fg7V0F6tE7gD3G%2FKmegq6iZxJt56rdHkwcelvTl7aDkwgEtpr9ZMHCtixzDw1NZkwnhqQ4lx9F%2FrGUsHZJCIsNRJF1oBnQd1hZkPHtIFWywP%2Bzj8jdL0micKFDzDFsNxaH8IEtwfYESsgU%2BAMCH4vLEi8deoFxd0ans0z9W3JdOBwENBpW%2FO20uZwaEFvXjfwA8HPyviUV%2FefYGUDIjISv9s0iEzfc13%2F1WpLEQY%2BFFTes%2BIOUj%2FnWmMumqtjgxBUAf3vcq0XxZ3r6CHJBBUf%2FBR6EXZ7Zds2vDkF0O8yhoofjRmias3gQo7UTh6ELKYsPnko3aMI61n78GOqUBQYpuvQ0hvXuufQfvG%2BOKsocrmlnzESUbBZ%2BO6i6bMOyz%2FNvY72uMuxXMUZ2STIYUksa94JG7WNdO9OQi3UoKuqNlLIVxAuUoxkE1jHne%2BwLEkRW%2BdxVRHLU%2F9n%2FVgvgLFq%2BxxQIk3ypt4ElkRyApQJ%2BJrTWDlZ8%2BJ2S%2B%2F%2F8iJyRxqBEZvy%2FSLyXdIL9ltzoi2HBBGH9SDJZ9IHD4xvRXxDx%2BxPjR&X-Amz-Signature=ea6874f063243644642757aa9a557d429427112e64423f1d209a07c15b4eecb3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
