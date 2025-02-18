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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILSU5LU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCfNLJDnfCkNmf1WQ6lyCMHJv7QVCuSKmY8dXZ0pvvgagIhAP2NfrdLv1FGFDqmg%2FUbIujH%2BI9ur2ARPRvUDoXRYLSLKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO8ZCVXayHbO7qba4q3AN%2B2vmY96zliu8D%2BjiIzhViQd%2BrsmeeMiqieio07X66ee6MmOAvwgU8GdlPY%2FQ%2FWr0tlDEyh0g1QlMq7npkiuexU9P6p%2FDnaQHX%2Bw8fzOdA9Zb31f4AzTHAj9CMmSb1ezMu35%2FCn5Bk4qAPiS5Wr9hTAt8Kd3gHNyMPP7XANUsU3UviP%2FQgOI7jVRy5KyLPZJLFkXlthMuZxDB%2BKXQRJP%2Bxz%2FkV%2BhPJBCedQggwDJOzvVybydY32KivvgSQFwCzN2fwKROD2cnH27nr7TIoxemKS8mOYQhKBeFPUvjsHlyzSU0xYyuhyXQ3SZZ7guUUVyDL1TsfXnkifhGAhA0Up%2B7uSBBGCF3GFD3xtOR1dTqhCuUtES8O5sdN5CA7HqjHmg00UO5hnw0mlXhwpIQwr%2BK3%2F%2B9Awssmtvz3RY%2FojXjQzjLji%2BV1AMYnfjjiU%2FlQ4cMFnPCGtBWHGqnN0yB78p2ZSuDA0Tum4QKF2i96fL%2BLiq7BCvr62A4qs9UlY1w6CFd7z1REnAm7WlbidM1NSzIASQ44Ta%2FSv5HXB6WZ5O8WWP%2BHNckNrtS2vwfuRGPoHJcySjaa9su2Rg0UbpIeY1zHBS96mzaaLvL55kHAWkMzHOtCuE328CH7P0fs6zCAqtC9BjqkAbJf486KupQC0CClnYr6m3vBY1Pi%2F98NfWhH8j1Rs5jz%2F6Xs23ur%2FD3%2BF4qQmWUBI6qYNsVFk61Otv5VsGrQ6SeZYGJGLvDFR1JzbphN9734wvmfQGU3UnbsFlpLIgAR1OjECMgsgQIMjg02q2CyKva0CJI9mNiZ%2BkSwc5mo1GWq3DlmUtr3%2BNPkUj6Xs%2BwH6e0it9ob3cj0U%2BtS711kUWwtFYO7&X-Amz-Signature=5ff7a84288ff1a491ddb5bf2f5e3f24cb82b37bb5a33dbbbe7f29d0ad9cbdac7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILSU5LU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCfNLJDnfCkNmf1WQ6lyCMHJv7QVCuSKmY8dXZ0pvvgagIhAP2NfrdLv1FGFDqmg%2FUbIujH%2BI9ur2ARPRvUDoXRYLSLKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO8ZCVXayHbO7qba4q3AN%2B2vmY96zliu8D%2BjiIzhViQd%2BrsmeeMiqieio07X66ee6MmOAvwgU8GdlPY%2FQ%2FWr0tlDEyh0g1QlMq7npkiuexU9P6p%2FDnaQHX%2Bw8fzOdA9Zb31f4AzTHAj9CMmSb1ezMu35%2FCn5Bk4qAPiS5Wr9hTAt8Kd3gHNyMPP7XANUsU3UviP%2FQgOI7jVRy5KyLPZJLFkXlthMuZxDB%2BKXQRJP%2Bxz%2FkV%2BhPJBCedQggwDJOzvVybydY32KivvgSQFwCzN2fwKROD2cnH27nr7TIoxemKS8mOYQhKBeFPUvjsHlyzSU0xYyuhyXQ3SZZ7guUUVyDL1TsfXnkifhGAhA0Up%2B7uSBBGCF3GFD3xtOR1dTqhCuUtES8O5sdN5CA7HqjHmg00UO5hnw0mlXhwpIQwr%2BK3%2F%2B9Awssmtvz3RY%2FojXjQzjLji%2BV1AMYnfjjiU%2FlQ4cMFnPCGtBWHGqnN0yB78p2ZSuDA0Tum4QKF2i96fL%2BLiq7BCvr62A4qs9UlY1w6CFd7z1REnAm7WlbidM1NSzIASQ44Ta%2FSv5HXB6WZ5O8WWP%2BHNckNrtS2vwfuRGPoHJcySjaa9su2Rg0UbpIeY1zHBS96mzaaLvL55kHAWkMzHOtCuE328CH7P0fs6zCAqtC9BjqkAbJf486KupQC0CClnYr6m3vBY1Pi%2F98NfWhH8j1Rs5jz%2F6Xs23ur%2FD3%2BF4qQmWUBI6qYNsVFk61Otv5VsGrQ6SeZYGJGLvDFR1JzbphN9734wvmfQGU3UnbsFlpLIgAR1OjECMgsgQIMjg02q2CyKva0CJI9mNiZ%2BkSwc5mo1GWq3DlmUtr3%2BNPkUj6Xs%2BwH6e0it9ob3cj0U%2BtS711kUWwtFYO7&X-Amz-Signature=2ceaa02fe2ac92104b6b9f13b2400df149d9b467c25f4d49bb3e23094875a595&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILSU5LU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCfNLJDnfCkNmf1WQ6lyCMHJv7QVCuSKmY8dXZ0pvvgagIhAP2NfrdLv1FGFDqmg%2FUbIujH%2BI9ur2ARPRvUDoXRYLSLKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO8ZCVXayHbO7qba4q3AN%2B2vmY96zliu8D%2BjiIzhViQd%2BrsmeeMiqieio07X66ee6MmOAvwgU8GdlPY%2FQ%2FWr0tlDEyh0g1QlMq7npkiuexU9P6p%2FDnaQHX%2Bw8fzOdA9Zb31f4AzTHAj9CMmSb1ezMu35%2FCn5Bk4qAPiS5Wr9hTAt8Kd3gHNyMPP7XANUsU3UviP%2FQgOI7jVRy5KyLPZJLFkXlthMuZxDB%2BKXQRJP%2Bxz%2FkV%2BhPJBCedQggwDJOzvVybydY32KivvgSQFwCzN2fwKROD2cnH27nr7TIoxemKS8mOYQhKBeFPUvjsHlyzSU0xYyuhyXQ3SZZ7guUUVyDL1TsfXnkifhGAhA0Up%2B7uSBBGCF3GFD3xtOR1dTqhCuUtES8O5sdN5CA7HqjHmg00UO5hnw0mlXhwpIQwr%2BK3%2F%2B9Awssmtvz3RY%2FojXjQzjLji%2BV1AMYnfjjiU%2FlQ4cMFnPCGtBWHGqnN0yB78p2ZSuDA0Tum4QKF2i96fL%2BLiq7BCvr62A4qs9UlY1w6CFd7z1REnAm7WlbidM1NSzIASQ44Ta%2FSv5HXB6WZ5O8WWP%2BHNckNrtS2vwfuRGPoHJcySjaa9su2Rg0UbpIeY1zHBS96mzaaLvL55kHAWkMzHOtCuE328CH7P0fs6zCAqtC9BjqkAbJf486KupQC0CClnYr6m3vBY1Pi%2F98NfWhH8j1Rs5jz%2F6Xs23ur%2FD3%2BF4qQmWUBI6qYNsVFk61Otv5VsGrQ6SeZYGJGLvDFR1JzbphN9734wvmfQGU3UnbsFlpLIgAR1OjECMgsgQIMjg02q2CyKva0CJI9mNiZ%2BkSwc5mo1GWq3DlmUtr3%2BNPkUj6Xs%2BwH6e0it9ob3cj0U%2BtS711kUWwtFYO7&X-Amz-Signature=76b6e2619fd22192b9da5ddfb068dd5c122e3daade13b413435c4aa2cffa1f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILSU5LU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCfNLJDnfCkNmf1WQ6lyCMHJv7QVCuSKmY8dXZ0pvvgagIhAP2NfrdLv1FGFDqmg%2FUbIujH%2BI9ur2ARPRvUDoXRYLSLKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO8ZCVXayHbO7qba4q3AN%2B2vmY96zliu8D%2BjiIzhViQd%2BrsmeeMiqieio07X66ee6MmOAvwgU8GdlPY%2FQ%2FWr0tlDEyh0g1QlMq7npkiuexU9P6p%2FDnaQHX%2Bw8fzOdA9Zb31f4AzTHAj9CMmSb1ezMu35%2FCn5Bk4qAPiS5Wr9hTAt8Kd3gHNyMPP7XANUsU3UviP%2FQgOI7jVRy5KyLPZJLFkXlthMuZxDB%2BKXQRJP%2Bxz%2FkV%2BhPJBCedQggwDJOzvVybydY32KivvgSQFwCzN2fwKROD2cnH27nr7TIoxemKS8mOYQhKBeFPUvjsHlyzSU0xYyuhyXQ3SZZ7guUUVyDL1TsfXnkifhGAhA0Up%2B7uSBBGCF3GFD3xtOR1dTqhCuUtES8O5sdN5CA7HqjHmg00UO5hnw0mlXhwpIQwr%2BK3%2F%2B9Awssmtvz3RY%2FojXjQzjLji%2BV1AMYnfjjiU%2FlQ4cMFnPCGtBWHGqnN0yB78p2ZSuDA0Tum4QKF2i96fL%2BLiq7BCvr62A4qs9UlY1w6CFd7z1REnAm7WlbidM1NSzIASQ44Ta%2FSv5HXB6WZ5O8WWP%2BHNckNrtS2vwfuRGPoHJcySjaa9su2Rg0UbpIeY1zHBS96mzaaLvL55kHAWkMzHOtCuE328CH7P0fs6zCAqtC9BjqkAbJf486KupQC0CClnYr6m3vBY1Pi%2F98NfWhH8j1Rs5jz%2F6Xs23ur%2FD3%2BF4qQmWUBI6qYNsVFk61Otv5VsGrQ6SeZYGJGLvDFR1JzbphN9734wvmfQGU3UnbsFlpLIgAR1OjECMgsgQIMjg02q2CyKva0CJI9mNiZ%2BkSwc5mo1GWq3DlmUtr3%2BNPkUj6Xs%2BwH6e0it9ob3cj0U%2BtS711kUWwtFYO7&X-Amz-Signature=4ff5121d33be17716dd7ca319af67f14cf44f9bfd218c3b4d0ca03aa0a4c1a17&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILSU5LU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCfNLJDnfCkNmf1WQ6lyCMHJv7QVCuSKmY8dXZ0pvvgagIhAP2NfrdLv1FGFDqmg%2FUbIujH%2BI9ur2ARPRvUDoXRYLSLKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO8ZCVXayHbO7qba4q3AN%2B2vmY96zliu8D%2BjiIzhViQd%2BrsmeeMiqieio07X66ee6MmOAvwgU8GdlPY%2FQ%2FWr0tlDEyh0g1QlMq7npkiuexU9P6p%2FDnaQHX%2Bw8fzOdA9Zb31f4AzTHAj9CMmSb1ezMu35%2FCn5Bk4qAPiS5Wr9hTAt8Kd3gHNyMPP7XANUsU3UviP%2FQgOI7jVRy5KyLPZJLFkXlthMuZxDB%2BKXQRJP%2Bxz%2FkV%2BhPJBCedQggwDJOzvVybydY32KivvgSQFwCzN2fwKROD2cnH27nr7TIoxemKS8mOYQhKBeFPUvjsHlyzSU0xYyuhyXQ3SZZ7guUUVyDL1TsfXnkifhGAhA0Up%2B7uSBBGCF3GFD3xtOR1dTqhCuUtES8O5sdN5CA7HqjHmg00UO5hnw0mlXhwpIQwr%2BK3%2F%2B9Awssmtvz3RY%2FojXjQzjLji%2BV1AMYnfjjiU%2FlQ4cMFnPCGtBWHGqnN0yB78p2ZSuDA0Tum4QKF2i96fL%2BLiq7BCvr62A4qs9UlY1w6CFd7z1REnAm7WlbidM1NSzIASQ44Ta%2FSv5HXB6WZ5O8WWP%2BHNckNrtS2vwfuRGPoHJcySjaa9su2Rg0UbpIeY1zHBS96mzaaLvL55kHAWkMzHOtCuE328CH7P0fs6zCAqtC9BjqkAbJf486KupQC0CClnYr6m3vBY1Pi%2F98NfWhH8j1Rs5jz%2F6Xs23ur%2FD3%2BF4qQmWUBI6qYNsVFk61Otv5VsGrQ6SeZYGJGLvDFR1JzbphN9734wvmfQGU3UnbsFlpLIgAR1OjECMgsgQIMjg02q2CyKva0CJI9mNiZ%2BkSwc5mo1GWq3DlmUtr3%2BNPkUj6Xs%2BwH6e0it9ob3cj0U%2BtS711kUWwtFYO7&X-Amz-Signature=82b5e909250173ada934be9c7cef90bad826a71bc666ac487ad61b4ab48c06a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILSU5LU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCfNLJDnfCkNmf1WQ6lyCMHJv7QVCuSKmY8dXZ0pvvgagIhAP2NfrdLv1FGFDqmg%2FUbIujH%2BI9ur2ARPRvUDoXRYLSLKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO8ZCVXayHbO7qba4q3AN%2B2vmY96zliu8D%2BjiIzhViQd%2BrsmeeMiqieio07X66ee6MmOAvwgU8GdlPY%2FQ%2FWr0tlDEyh0g1QlMq7npkiuexU9P6p%2FDnaQHX%2Bw8fzOdA9Zb31f4AzTHAj9CMmSb1ezMu35%2FCn5Bk4qAPiS5Wr9hTAt8Kd3gHNyMPP7XANUsU3UviP%2FQgOI7jVRy5KyLPZJLFkXlthMuZxDB%2BKXQRJP%2Bxz%2FkV%2BhPJBCedQggwDJOzvVybydY32KivvgSQFwCzN2fwKROD2cnH27nr7TIoxemKS8mOYQhKBeFPUvjsHlyzSU0xYyuhyXQ3SZZ7guUUVyDL1TsfXnkifhGAhA0Up%2B7uSBBGCF3GFD3xtOR1dTqhCuUtES8O5sdN5CA7HqjHmg00UO5hnw0mlXhwpIQwr%2BK3%2F%2B9Awssmtvz3RY%2FojXjQzjLji%2BV1AMYnfjjiU%2FlQ4cMFnPCGtBWHGqnN0yB78p2ZSuDA0Tum4QKF2i96fL%2BLiq7BCvr62A4qs9UlY1w6CFd7z1REnAm7WlbidM1NSzIASQ44Ta%2FSv5HXB6WZ5O8WWP%2BHNckNrtS2vwfuRGPoHJcySjaa9su2Rg0UbpIeY1zHBS96mzaaLvL55kHAWkMzHOtCuE328CH7P0fs6zCAqtC9BjqkAbJf486KupQC0CClnYr6m3vBY1Pi%2F98NfWhH8j1Rs5jz%2F6Xs23ur%2FD3%2BF4qQmWUBI6qYNsVFk61Otv5VsGrQ6SeZYGJGLvDFR1JzbphN9734wvmfQGU3UnbsFlpLIgAR1OjECMgsgQIMjg02q2CyKva0CJI9mNiZ%2BkSwc5mo1GWq3DlmUtr3%2BNPkUj6Xs%2BwH6e0it9ob3cj0U%2BtS711kUWwtFYO7&X-Amz-Signature=a2a0366c43b0d24fc996d9f052728f1a7650471f22cd5b3ce042d1419eec346c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILSU5LU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCfNLJDnfCkNmf1WQ6lyCMHJv7QVCuSKmY8dXZ0pvvgagIhAP2NfrdLv1FGFDqmg%2FUbIujH%2BI9ur2ARPRvUDoXRYLSLKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO8ZCVXayHbO7qba4q3AN%2B2vmY96zliu8D%2BjiIzhViQd%2BrsmeeMiqieio07X66ee6MmOAvwgU8GdlPY%2FQ%2FWr0tlDEyh0g1QlMq7npkiuexU9P6p%2FDnaQHX%2Bw8fzOdA9Zb31f4AzTHAj9CMmSb1ezMu35%2FCn5Bk4qAPiS5Wr9hTAt8Kd3gHNyMPP7XANUsU3UviP%2FQgOI7jVRy5KyLPZJLFkXlthMuZxDB%2BKXQRJP%2Bxz%2FkV%2BhPJBCedQggwDJOzvVybydY32KivvgSQFwCzN2fwKROD2cnH27nr7TIoxemKS8mOYQhKBeFPUvjsHlyzSU0xYyuhyXQ3SZZ7guUUVyDL1TsfXnkifhGAhA0Up%2B7uSBBGCF3GFD3xtOR1dTqhCuUtES8O5sdN5CA7HqjHmg00UO5hnw0mlXhwpIQwr%2BK3%2F%2B9Awssmtvz3RY%2FojXjQzjLji%2BV1AMYnfjjiU%2FlQ4cMFnPCGtBWHGqnN0yB78p2ZSuDA0Tum4QKF2i96fL%2BLiq7BCvr62A4qs9UlY1w6CFd7z1REnAm7WlbidM1NSzIASQ44Ta%2FSv5HXB6WZ5O8WWP%2BHNckNrtS2vwfuRGPoHJcySjaa9su2Rg0UbpIeY1zHBS96mzaaLvL55kHAWkMzHOtCuE328CH7P0fs6zCAqtC9BjqkAbJf486KupQC0CClnYr6m3vBY1Pi%2F98NfWhH8j1Rs5jz%2F6Xs23ur%2FD3%2BF4qQmWUBI6qYNsVFk61Otv5VsGrQ6SeZYGJGLvDFR1JzbphN9734wvmfQGU3UnbsFlpLIgAR1OjECMgsgQIMjg02q2CyKva0CJI9mNiZ%2BkSwc5mo1GWq3DlmUtr3%2BNPkUj6Xs%2BwH6e0it9ob3cj0U%2BtS711kUWwtFYO7&X-Amz-Signature=de80339955cc426492471860477b308c533f3978a8000b9f366e8ff3a5c84741&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILSU5LU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCfNLJDnfCkNmf1WQ6lyCMHJv7QVCuSKmY8dXZ0pvvgagIhAP2NfrdLv1FGFDqmg%2FUbIujH%2BI9ur2ARPRvUDoXRYLSLKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO8ZCVXayHbO7qba4q3AN%2B2vmY96zliu8D%2BjiIzhViQd%2BrsmeeMiqieio07X66ee6MmOAvwgU8GdlPY%2FQ%2FWr0tlDEyh0g1QlMq7npkiuexU9P6p%2FDnaQHX%2Bw8fzOdA9Zb31f4AzTHAj9CMmSb1ezMu35%2FCn5Bk4qAPiS5Wr9hTAt8Kd3gHNyMPP7XANUsU3UviP%2FQgOI7jVRy5KyLPZJLFkXlthMuZxDB%2BKXQRJP%2Bxz%2FkV%2BhPJBCedQggwDJOzvVybydY32KivvgSQFwCzN2fwKROD2cnH27nr7TIoxemKS8mOYQhKBeFPUvjsHlyzSU0xYyuhyXQ3SZZ7guUUVyDL1TsfXnkifhGAhA0Up%2B7uSBBGCF3GFD3xtOR1dTqhCuUtES8O5sdN5CA7HqjHmg00UO5hnw0mlXhwpIQwr%2BK3%2F%2B9Awssmtvz3RY%2FojXjQzjLji%2BV1AMYnfjjiU%2FlQ4cMFnPCGtBWHGqnN0yB78p2ZSuDA0Tum4QKF2i96fL%2BLiq7BCvr62A4qs9UlY1w6CFd7z1REnAm7WlbidM1NSzIASQ44Ta%2FSv5HXB6WZ5O8WWP%2BHNckNrtS2vwfuRGPoHJcySjaa9su2Rg0UbpIeY1zHBS96mzaaLvL55kHAWkMzHOtCuE328CH7P0fs6zCAqtC9BjqkAbJf486KupQC0CClnYr6m3vBY1Pi%2F98NfWhH8j1Rs5jz%2F6Xs23ur%2FD3%2BF4qQmWUBI6qYNsVFk61Otv5VsGrQ6SeZYGJGLvDFR1JzbphN9734wvmfQGU3UnbsFlpLIgAR1OjECMgsgQIMjg02q2CyKva0CJI9mNiZ%2BkSwc5mo1GWq3DlmUtr3%2BNPkUj6Xs%2BwH6e0it9ob3cj0U%2BtS711kUWwtFYO7&X-Amz-Signature=77e78725f715347ed3da8ff7a79c927b208549c35476f7e51ef71350d6468790&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
