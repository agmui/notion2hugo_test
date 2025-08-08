---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T632TDCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDIYkRjuy9jTV26lQZIotgoMnMCqLLn0YbDlBRR9z4%2FegIgYUO8mp8HqftCX%2FNzhd2uTZzaZ08qdHUmoBzwJ5vskkQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbyxqxf%2BzH5cgj1pCrcA9Wwof0g4z9sADFbcs1uPykG%2FKaTDt0J7h4qqkYC%2B0JlFKDl8o9%2B%2Frmj74JcQy0nT3M%2FBBxjfkSjW5RCVIjmqa%2FzfzegGHkSZH5xQNczHKvcK5guYduOApy2mITxUvdydUqoJ78Ayk3GBqtcM5fnghrjNrJLtBAuhLDr3%2FKEuEmO5XDEu4xW%2FxCp0cbDrx0yLflE2tkzDWi2ggiqz8Uup5GJpN325yRHagkZXdZV9%2BlSq5IDvBgoNMJHXga%2FCOuphqoAj%2BFPms3TtuZImLJzOnCikUCZfrlN0i%2B07c87SlDATVwGiFvs5zpXuaH%2B%2BkhknxIIYPNYM3E0Ztqd4cNXrPKX0UY%2BN1GtV%2F3rIy0fslB4EMBNXjjQeVAA%2FgB4i8zXANtmZXYGwv5QkX1YOMbfckEo0EPQZiN2zfAQdPk75%2BmuHaeXHmkbdhySxX73AF9ZButdIY1QT7fpQdKp0hH5Nd7iUjFaNvOWWjNCaxQt1nnVaPK0SaJynktuSvXpsCL5vJmtZdNGWfnZ%2B1tD6Ak%2FhyNZwUo%2BzFO7tIMMQ6qW9cumFcHB0ELOQwRbXTzFVkqQOS0kaqJoCYkRJxZ63gvipskBYK%2BBCOVjX5MG%2Bl9bJgO%2FL%2FsbiCWgtIbg3dE6MJX61cQGOqUBbXhtVvGOzN5jcVj1i1LiyBcSa17bS3oE9oi4SI9iyY5apVEdJy2Mntq4ABW6dHJxBfGISRVS5a1F8fGrb3ib3WKnc8UExyhiluz%2FPA0Uwr6Ryy85jl2GTa5SLGONnw%2BN1EfxLMcJ%2FlyExg2m7t4c%2BoT%2FufRuGpzQKu0lpAEaem9Q1yqwcWVpmZoZWQ1ZBpsIx1GIo5ZmjMvl0Kf21IZNZRabQ5nU&X-Amz-Signature=5cda0bb559c269d1611478468d59370163c71427ff337b8c0988dca130edb796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T632TDCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDIYkRjuy9jTV26lQZIotgoMnMCqLLn0YbDlBRR9z4%2FegIgYUO8mp8HqftCX%2FNzhd2uTZzaZ08qdHUmoBzwJ5vskkQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbyxqxf%2BzH5cgj1pCrcA9Wwof0g4z9sADFbcs1uPykG%2FKaTDt0J7h4qqkYC%2B0JlFKDl8o9%2B%2Frmj74JcQy0nT3M%2FBBxjfkSjW5RCVIjmqa%2FzfzegGHkSZH5xQNczHKvcK5guYduOApy2mITxUvdydUqoJ78Ayk3GBqtcM5fnghrjNrJLtBAuhLDr3%2FKEuEmO5XDEu4xW%2FxCp0cbDrx0yLflE2tkzDWi2ggiqz8Uup5GJpN325yRHagkZXdZV9%2BlSq5IDvBgoNMJHXga%2FCOuphqoAj%2BFPms3TtuZImLJzOnCikUCZfrlN0i%2B07c87SlDATVwGiFvs5zpXuaH%2B%2BkhknxIIYPNYM3E0Ztqd4cNXrPKX0UY%2BN1GtV%2F3rIy0fslB4EMBNXjjQeVAA%2FgB4i8zXANtmZXYGwv5QkX1YOMbfckEo0EPQZiN2zfAQdPk75%2BmuHaeXHmkbdhySxX73AF9ZButdIY1QT7fpQdKp0hH5Nd7iUjFaNvOWWjNCaxQt1nnVaPK0SaJynktuSvXpsCL5vJmtZdNGWfnZ%2B1tD6Ak%2FhyNZwUo%2BzFO7tIMMQ6qW9cumFcHB0ELOQwRbXTzFVkqQOS0kaqJoCYkRJxZ63gvipskBYK%2BBCOVjX5MG%2Bl9bJgO%2FL%2FsbiCWgtIbg3dE6MJX61cQGOqUBbXhtVvGOzN5jcVj1i1LiyBcSa17bS3oE9oi4SI9iyY5apVEdJy2Mntq4ABW6dHJxBfGISRVS5a1F8fGrb3ib3WKnc8UExyhiluz%2FPA0Uwr6Ryy85jl2GTa5SLGONnw%2BN1EfxLMcJ%2FlyExg2m7t4c%2BoT%2FufRuGpzQKu0lpAEaem9Q1yqwcWVpmZoZWQ1ZBpsIx1GIo5ZmjMvl0Kf21IZNZRabQ5nU&X-Amz-Signature=c86e56a90095ae9c8d8a1f75c4200878b117891b6e84bd9b00789d022a6a7bc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T632TDCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDIYkRjuy9jTV26lQZIotgoMnMCqLLn0YbDlBRR9z4%2FegIgYUO8mp8HqftCX%2FNzhd2uTZzaZ08qdHUmoBzwJ5vskkQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbyxqxf%2BzH5cgj1pCrcA9Wwof0g4z9sADFbcs1uPykG%2FKaTDt0J7h4qqkYC%2B0JlFKDl8o9%2B%2Frmj74JcQy0nT3M%2FBBxjfkSjW5RCVIjmqa%2FzfzegGHkSZH5xQNczHKvcK5guYduOApy2mITxUvdydUqoJ78Ayk3GBqtcM5fnghrjNrJLtBAuhLDr3%2FKEuEmO5XDEu4xW%2FxCp0cbDrx0yLflE2tkzDWi2ggiqz8Uup5GJpN325yRHagkZXdZV9%2BlSq5IDvBgoNMJHXga%2FCOuphqoAj%2BFPms3TtuZImLJzOnCikUCZfrlN0i%2B07c87SlDATVwGiFvs5zpXuaH%2B%2BkhknxIIYPNYM3E0Ztqd4cNXrPKX0UY%2BN1GtV%2F3rIy0fslB4EMBNXjjQeVAA%2FgB4i8zXANtmZXYGwv5QkX1YOMbfckEo0EPQZiN2zfAQdPk75%2BmuHaeXHmkbdhySxX73AF9ZButdIY1QT7fpQdKp0hH5Nd7iUjFaNvOWWjNCaxQt1nnVaPK0SaJynktuSvXpsCL5vJmtZdNGWfnZ%2B1tD6Ak%2FhyNZwUo%2BzFO7tIMMQ6qW9cumFcHB0ELOQwRbXTzFVkqQOS0kaqJoCYkRJxZ63gvipskBYK%2BBCOVjX5MG%2Bl9bJgO%2FL%2FsbiCWgtIbg3dE6MJX61cQGOqUBbXhtVvGOzN5jcVj1i1LiyBcSa17bS3oE9oi4SI9iyY5apVEdJy2Mntq4ABW6dHJxBfGISRVS5a1F8fGrb3ib3WKnc8UExyhiluz%2FPA0Uwr6Ryy85jl2GTa5SLGONnw%2BN1EfxLMcJ%2FlyExg2m7t4c%2BoT%2FufRuGpzQKu0lpAEaem9Q1yqwcWVpmZoZWQ1ZBpsIx1GIo5ZmjMvl0Kf21IZNZRabQ5nU&X-Amz-Signature=1d9c53128457c4d36b578544109d0b6bfcbc0d72797579c64f9571d641202e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T632TDCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDIYkRjuy9jTV26lQZIotgoMnMCqLLn0YbDlBRR9z4%2FegIgYUO8mp8HqftCX%2FNzhd2uTZzaZ08qdHUmoBzwJ5vskkQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbyxqxf%2BzH5cgj1pCrcA9Wwof0g4z9sADFbcs1uPykG%2FKaTDt0J7h4qqkYC%2B0JlFKDl8o9%2B%2Frmj74JcQy0nT3M%2FBBxjfkSjW5RCVIjmqa%2FzfzegGHkSZH5xQNczHKvcK5guYduOApy2mITxUvdydUqoJ78Ayk3GBqtcM5fnghrjNrJLtBAuhLDr3%2FKEuEmO5XDEu4xW%2FxCp0cbDrx0yLflE2tkzDWi2ggiqz8Uup5GJpN325yRHagkZXdZV9%2BlSq5IDvBgoNMJHXga%2FCOuphqoAj%2BFPms3TtuZImLJzOnCikUCZfrlN0i%2B07c87SlDATVwGiFvs5zpXuaH%2B%2BkhknxIIYPNYM3E0Ztqd4cNXrPKX0UY%2BN1GtV%2F3rIy0fslB4EMBNXjjQeVAA%2FgB4i8zXANtmZXYGwv5QkX1YOMbfckEo0EPQZiN2zfAQdPk75%2BmuHaeXHmkbdhySxX73AF9ZButdIY1QT7fpQdKp0hH5Nd7iUjFaNvOWWjNCaxQt1nnVaPK0SaJynktuSvXpsCL5vJmtZdNGWfnZ%2B1tD6Ak%2FhyNZwUo%2BzFO7tIMMQ6qW9cumFcHB0ELOQwRbXTzFVkqQOS0kaqJoCYkRJxZ63gvipskBYK%2BBCOVjX5MG%2Bl9bJgO%2FL%2FsbiCWgtIbg3dE6MJX61cQGOqUBbXhtVvGOzN5jcVj1i1LiyBcSa17bS3oE9oi4SI9iyY5apVEdJy2Mntq4ABW6dHJxBfGISRVS5a1F8fGrb3ib3WKnc8UExyhiluz%2FPA0Uwr6Ryy85jl2GTa5SLGONnw%2BN1EfxLMcJ%2FlyExg2m7t4c%2BoT%2FufRuGpzQKu0lpAEaem9Q1yqwcWVpmZoZWQ1ZBpsIx1GIo5ZmjMvl0Kf21IZNZRabQ5nU&X-Amz-Signature=81214ff5d0418a699bec70629c94c1fd7ac627ffae85bfd571ae93bd77b7593c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T632TDCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDIYkRjuy9jTV26lQZIotgoMnMCqLLn0YbDlBRR9z4%2FegIgYUO8mp8HqftCX%2FNzhd2uTZzaZ08qdHUmoBzwJ5vskkQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbyxqxf%2BzH5cgj1pCrcA9Wwof0g4z9sADFbcs1uPykG%2FKaTDt0J7h4qqkYC%2B0JlFKDl8o9%2B%2Frmj74JcQy0nT3M%2FBBxjfkSjW5RCVIjmqa%2FzfzegGHkSZH5xQNczHKvcK5guYduOApy2mITxUvdydUqoJ78Ayk3GBqtcM5fnghrjNrJLtBAuhLDr3%2FKEuEmO5XDEu4xW%2FxCp0cbDrx0yLflE2tkzDWi2ggiqz8Uup5GJpN325yRHagkZXdZV9%2BlSq5IDvBgoNMJHXga%2FCOuphqoAj%2BFPms3TtuZImLJzOnCikUCZfrlN0i%2B07c87SlDATVwGiFvs5zpXuaH%2B%2BkhknxIIYPNYM3E0Ztqd4cNXrPKX0UY%2BN1GtV%2F3rIy0fslB4EMBNXjjQeVAA%2FgB4i8zXANtmZXYGwv5QkX1YOMbfckEo0EPQZiN2zfAQdPk75%2BmuHaeXHmkbdhySxX73AF9ZButdIY1QT7fpQdKp0hH5Nd7iUjFaNvOWWjNCaxQt1nnVaPK0SaJynktuSvXpsCL5vJmtZdNGWfnZ%2B1tD6Ak%2FhyNZwUo%2BzFO7tIMMQ6qW9cumFcHB0ELOQwRbXTzFVkqQOS0kaqJoCYkRJxZ63gvipskBYK%2BBCOVjX5MG%2Bl9bJgO%2FL%2FsbiCWgtIbg3dE6MJX61cQGOqUBbXhtVvGOzN5jcVj1i1LiyBcSa17bS3oE9oi4SI9iyY5apVEdJy2Mntq4ABW6dHJxBfGISRVS5a1F8fGrb3ib3WKnc8UExyhiluz%2FPA0Uwr6Ryy85jl2GTa5SLGONnw%2BN1EfxLMcJ%2FlyExg2m7t4c%2BoT%2FufRuGpzQKu0lpAEaem9Q1yqwcWVpmZoZWQ1ZBpsIx1GIo5ZmjMvl0Kf21IZNZRabQ5nU&X-Amz-Signature=b54cc57ce95cac7089cdf9405ded582bed52f433b675c9a72d75ea93aa55972d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T632TDCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDIYkRjuy9jTV26lQZIotgoMnMCqLLn0YbDlBRR9z4%2FegIgYUO8mp8HqftCX%2FNzhd2uTZzaZ08qdHUmoBzwJ5vskkQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbyxqxf%2BzH5cgj1pCrcA9Wwof0g4z9sADFbcs1uPykG%2FKaTDt0J7h4qqkYC%2B0JlFKDl8o9%2B%2Frmj74JcQy0nT3M%2FBBxjfkSjW5RCVIjmqa%2FzfzegGHkSZH5xQNczHKvcK5guYduOApy2mITxUvdydUqoJ78Ayk3GBqtcM5fnghrjNrJLtBAuhLDr3%2FKEuEmO5XDEu4xW%2FxCp0cbDrx0yLflE2tkzDWi2ggiqz8Uup5GJpN325yRHagkZXdZV9%2BlSq5IDvBgoNMJHXga%2FCOuphqoAj%2BFPms3TtuZImLJzOnCikUCZfrlN0i%2B07c87SlDATVwGiFvs5zpXuaH%2B%2BkhknxIIYPNYM3E0Ztqd4cNXrPKX0UY%2BN1GtV%2F3rIy0fslB4EMBNXjjQeVAA%2FgB4i8zXANtmZXYGwv5QkX1YOMbfckEo0EPQZiN2zfAQdPk75%2BmuHaeXHmkbdhySxX73AF9ZButdIY1QT7fpQdKp0hH5Nd7iUjFaNvOWWjNCaxQt1nnVaPK0SaJynktuSvXpsCL5vJmtZdNGWfnZ%2B1tD6Ak%2FhyNZwUo%2BzFO7tIMMQ6qW9cumFcHB0ELOQwRbXTzFVkqQOS0kaqJoCYkRJxZ63gvipskBYK%2BBCOVjX5MG%2Bl9bJgO%2FL%2FsbiCWgtIbg3dE6MJX61cQGOqUBbXhtVvGOzN5jcVj1i1LiyBcSa17bS3oE9oi4SI9iyY5apVEdJy2Mntq4ABW6dHJxBfGISRVS5a1F8fGrb3ib3WKnc8UExyhiluz%2FPA0Uwr6Ryy85jl2GTa5SLGONnw%2BN1EfxLMcJ%2FlyExg2m7t4c%2BoT%2FufRuGpzQKu0lpAEaem9Q1yqwcWVpmZoZWQ1ZBpsIx1GIo5ZmjMvl0Kf21IZNZRabQ5nU&X-Amz-Signature=04dc165c2cecf03031a268614c241ef618446949d05f50bf0f35633e6867ee3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T632TDCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDIYkRjuy9jTV26lQZIotgoMnMCqLLn0YbDlBRR9z4%2FegIgYUO8mp8HqftCX%2FNzhd2uTZzaZ08qdHUmoBzwJ5vskkQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbyxqxf%2BzH5cgj1pCrcA9Wwof0g4z9sADFbcs1uPykG%2FKaTDt0J7h4qqkYC%2B0JlFKDl8o9%2B%2Frmj74JcQy0nT3M%2FBBxjfkSjW5RCVIjmqa%2FzfzegGHkSZH5xQNczHKvcK5guYduOApy2mITxUvdydUqoJ78Ayk3GBqtcM5fnghrjNrJLtBAuhLDr3%2FKEuEmO5XDEu4xW%2FxCp0cbDrx0yLflE2tkzDWi2ggiqz8Uup5GJpN325yRHagkZXdZV9%2BlSq5IDvBgoNMJHXga%2FCOuphqoAj%2BFPms3TtuZImLJzOnCikUCZfrlN0i%2B07c87SlDATVwGiFvs5zpXuaH%2B%2BkhknxIIYPNYM3E0Ztqd4cNXrPKX0UY%2BN1GtV%2F3rIy0fslB4EMBNXjjQeVAA%2FgB4i8zXANtmZXYGwv5QkX1YOMbfckEo0EPQZiN2zfAQdPk75%2BmuHaeXHmkbdhySxX73AF9ZButdIY1QT7fpQdKp0hH5Nd7iUjFaNvOWWjNCaxQt1nnVaPK0SaJynktuSvXpsCL5vJmtZdNGWfnZ%2B1tD6Ak%2FhyNZwUo%2BzFO7tIMMQ6qW9cumFcHB0ELOQwRbXTzFVkqQOS0kaqJoCYkRJxZ63gvipskBYK%2BBCOVjX5MG%2Bl9bJgO%2FL%2FsbiCWgtIbg3dE6MJX61cQGOqUBbXhtVvGOzN5jcVj1i1LiyBcSa17bS3oE9oi4SI9iyY5apVEdJy2Mntq4ABW6dHJxBfGISRVS5a1F8fGrb3ib3WKnc8UExyhiluz%2FPA0Uwr6Ryy85jl2GTa5SLGONnw%2BN1EfxLMcJ%2FlyExg2m7t4c%2BoT%2FufRuGpzQKu0lpAEaem9Q1yqwcWVpmZoZWQ1ZBpsIx1GIo5ZmjMvl0Kf21IZNZRabQ5nU&X-Amz-Signature=55bc8b85295c3b9c15e4686a2cc8208baff2de8842bc0c4386d44c2c03f97ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T632TDCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDIYkRjuy9jTV26lQZIotgoMnMCqLLn0YbDlBRR9z4%2FegIgYUO8mp8HqftCX%2FNzhd2uTZzaZ08qdHUmoBzwJ5vskkQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbyxqxf%2BzH5cgj1pCrcA9Wwof0g4z9sADFbcs1uPykG%2FKaTDt0J7h4qqkYC%2B0JlFKDl8o9%2B%2Frmj74JcQy0nT3M%2FBBxjfkSjW5RCVIjmqa%2FzfzegGHkSZH5xQNczHKvcK5guYduOApy2mITxUvdydUqoJ78Ayk3GBqtcM5fnghrjNrJLtBAuhLDr3%2FKEuEmO5XDEu4xW%2FxCp0cbDrx0yLflE2tkzDWi2ggiqz8Uup5GJpN325yRHagkZXdZV9%2BlSq5IDvBgoNMJHXga%2FCOuphqoAj%2BFPms3TtuZImLJzOnCikUCZfrlN0i%2B07c87SlDATVwGiFvs5zpXuaH%2B%2BkhknxIIYPNYM3E0Ztqd4cNXrPKX0UY%2BN1GtV%2F3rIy0fslB4EMBNXjjQeVAA%2FgB4i8zXANtmZXYGwv5QkX1YOMbfckEo0EPQZiN2zfAQdPk75%2BmuHaeXHmkbdhySxX73AF9ZButdIY1QT7fpQdKp0hH5Nd7iUjFaNvOWWjNCaxQt1nnVaPK0SaJynktuSvXpsCL5vJmtZdNGWfnZ%2B1tD6Ak%2FhyNZwUo%2BzFO7tIMMQ6qW9cumFcHB0ELOQwRbXTzFVkqQOS0kaqJoCYkRJxZ63gvipskBYK%2BBCOVjX5MG%2Bl9bJgO%2FL%2FsbiCWgtIbg3dE6MJX61cQGOqUBbXhtVvGOzN5jcVj1i1LiyBcSa17bS3oE9oi4SI9iyY5apVEdJy2Mntq4ABW6dHJxBfGISRVS5a1F8fGrb3ib3WKnc8UExyhiluz%2FPA0Uwr6Ryy85jl2GTa5SLGONnw%2BN1EfxLMcJ%2FlyExg2m7t4c%2BoT%2FufRuGpzQKu0lpAEaem9Q1yqwcWVpmZoZWQ1ZBpsIx1GIo5ZmjMvl0Kf21IZNZRabQ5nU&X-Amz-Signature=53edebe88a192f34b56e934a25407966be61c4b88c4ad355f75f574c0d61e1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
