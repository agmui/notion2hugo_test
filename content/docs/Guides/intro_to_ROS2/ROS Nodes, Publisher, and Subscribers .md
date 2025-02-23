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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N42D3P3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBENSLFZkIbWJgaJ%2F2aFw7pxGbBbJDAzrH3tGbTWa%2ByHAiBWdFkJqokGXRvfRcJw6Ad7O4qYp%2Fq8kUmoYZUfos%2BjtyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMImsQtaz2uQJAGRSAKtwDpARmvg9QhYgyyg34yPKRBDWxcqvT0TeOdt%2Bq2Lm9aK1M74LL0LTrNX0%2B%2B%2FUAyUmuoXHLjSKeX%2F%2FNnEssBynf8OZVixonJyOPbUJ8zR1dzsW%2FiNwD7qMiexgIgm3d3E44xxT2Vf%2F6O939V8IKFpPlS8VTGBH1SYfSkAniVVwolcZIFEXtJ%2ByW2KCW8HnQKCAR%2BfGjBo4%2BfWLQ6BNsPsT%2F2DrR6hHMG%2FmCkJodgDlcCSv7HdEZWRjM6DOdXySbLtEdJoJntxAP6kplVfTQVmfBrRMOQuYv2vMAPsMffQNIu4AF3HzzyDpG%2FKUXHXKxnbt5DbC0KWumxn%2Fkc6duJ0x9Nx3Z%2FvOFTJPAEulxre%2B9Uy%2FylE3xI7wz4CN7u1PBE6YgcXcqRMpkHQXwEbhmKjZ395h1uf%2BDgCrLBqsdwGcsfXS04ValjWow8HuW3DxAucPUwR7jPmuByQyxTJZDU216ycucneBDpLPUjLIufIIZzUBJoX%2BIfRRaohdHz2VwlzUsAOs9B9jMWRidrHL%2BFVwQDr6Mp7X%2F8XQBiWdlAWxSfaxYdqqoh93Q1YMhH756ZMcgzdlY5UR4MHXw5l6NXm0eEsA%2BGs6DsiDic5YYXz2HoKWn8Rgq5LhCROSDxAcwz6TpvQY6pgGLCA%2BdU0iAdiOM8iW5tJ7vE9cwgzUeWWJlJox5%2BaDMVje4U8%2BkOcWPkRByiSy%2BFs3KmlnQXTSDcrkAFzhDuzt8CkV64kF0iTYMJQCB5ajA6tUdLtHDFiX2GAlNkpX2HVazo1yxSPKCiWqoEnYSqFS8eULSu3ktsob6phKxFBCw%2BCLoyQ6o4Vy5FO%2FGgyrtEBE1sO8vs2DS4L4Std81sJwKRm6%2F01qb&X-Amz-Signature=e25efddd44e4814207a5c0a3698f9e0092e5bee30cf7424a35587224ca51dd88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N42D3P3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBENSLFZkIbWJgaJ%2F2aFw7pxGbBbJDAzrH3tGbTWa%2ByHAiBWdFkJqokGXRvfRcJw6Ad7O4qYp%2Fq8kUmoYZUfos%2BjtyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMImsQtaz2uQJAGRSAKtwDpARmvg9QhYgyyg34yPKRBDWxcqvT0TeOdt%2Bq2Lm9aK1M74LL0LTrNX0%2B%2B%2FUAyUmuoXHLjSKeX%2F%2FNnEssBynf8OZVixonJyOPbUJ8zR1dzsW%2FiNwD7qMiexgIgm3d3E44xxT2Vf%2F6O939V8IKFpPlS8VTGBH1SYfSkAniVVwolcZIFEXtJ%2ByW2KCW8HnQKCAR%2BfGjBo4%2BfWLQ6BNsPsT%2F2DrR6hHMG%2FmCkJodgDlcCSv7HdEZWRjM6DOdXySbLtEdJoJntxAP6kplVfTQVmfBrRMOQuYv2vMAPsMffQNIu4AF3HzzyDpG%2FKUXHXKxnbt5DbC0KWumxn%2Fkc6duJ0x9Nx3Z%2FvOFTJPAEulxre%2B9Uy%2FylE3xI7wz4CN7u1PBE6YgcXcqRMpkHQXwEbhmKjZ395h1uf%2BDgCrLBqsdwGcsfXS04ValjWow8HuW3DxAucPUwR7jPmuByQyxTJZDU216ycucneBDpLPUjLIufIIZzUBJoX%2BIfRRaohdHz2VwlzUsAOs9B9jMWRidrHL%2BFVwQDr6Mp7X%2F8XQBiWdlAWxSfaxYdqqoh93Q1YMhH756ZMcgzdlY5UR4MHXw5l6NXm0eEsA%2BGs6DsiDic5YYXz2HoKWn8Rgq5LhCROSDxAcwz6TpvQY6pgGLCA%2BdU0iAdiOM8iW5tJ7vE9cwgzUeWWJlJox5%2BaDMVje4U8%2BkOcWPkRByiSy%2BFs3KmlnQXTSDcrkAFzhDuzt8CkV64kF0iTYMJQCB5ajA6tUdLtHDFiX2GAlNkpX2HVazo1yxSPKCiWqoEnYSqFS8eULSu3ktsob6phKxFBCw%2BCLoyQ6o4Vy5FO%2FGgyrtEBE1sO8vs2DS4L4Std81sJwKRm6%2F01qb&X-Amz-Signature=440e1856a2e292389ff10230b741b23b041f949d3297e09a62b92fa4dbcff815&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N42D3P3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBENSLFZkIbWJgaJ%2F2aFw7pxGbBbJDAzrH3tGbTWa%2ByHAiBWdFkJqokGXRvfRcJw6Ad7O4qYp%2Fq8kUmoYZUfos%2BjtyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMImsQtaz2uQJAGRSAKtwDpARmvg9QhYgyyg34yPKRBDWxcqvT0TeOdt%2Bq2Lm9aK1M74LL0LTrNX0%2B%2B%2FUAyUmuoXHLjSKeX%2F%2FNnEssBynf8OZVixonJyOPbUJ8zR1dzsW%2FiNwD7qMiexgIgm3d3E44xxT2Vf%2F6O939V8IKFpPlS8VTGBH1SYfSkAniVVwolcZIFEXtJ%2ByW2KCW8HnQKCAR%2BfGjBo4%2BfWLQ6BNsPsT%2F2DrR6hHMG%2FmCkJodgDlcCSv7HdEZWRjM6DOdXySbLtEdJoJntxAP6kplVfTQVmfBrRMOQuYv2vMAPsMffQNIu4AF3HzzyDpG%2FKUXHXKxnbt5DbC0KWumxn%2Fkc6duJ0x9Nx3Z%2FvOFTJPAEulxre%2B9Uy%2FylE3xI7wz4CN7u1PBE6YgcXcqRMpkHQXwEbhmKjZ395h1uf%2BDgCrLBqsdwGcsfXS04ValjWow8HuW3DxAucPUwR7jPmuByQyxTJZDU216ycucneBDpLPUjLIufIIZzUBJoX%2BIfRRaohdHz2VwlzUsAOs9B9jMWRidrHL%2BFVwQDr6Mp7X%2F8XQBiWdlAWxSfaxYdqqoh93Q1YMhH756ZMcgzdlY5UR4MHXw5l6NXm0eEsA%2BGs6DsiDic5YYXz2HoKWn8Rgq5LhCROSDxAcwz6TpvQY6pgGLCA%2BdU0iAdiOM8iW5tJ7vE9cwgzUeWWJlJox5%2BaDMVje4U8%2BkOcWPkRByiSy%2BFs3KmlnQXTSDcrkAFzhDuzt8CkV64kF0iTYMJQCB5ajA6tUdLtHDFiX2GAlNkpX2HVazo1yxSPKCiWqoEnYSqFS8eULSu3ktsob6phKxFBCw%2BCLoyQ6o4Vy5FO%2FGgyrtEBE1sO8vs2DS4L4Std81sJwKRm6%2F01qb&X-Amz-Signature=b9764971828e49e708c679ce1fbf55c600fcd1b68e8819c98253a503f5f1302a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N42D3P3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBENSLFZkIbWJgaJ%2F2aFw7pxGbBbJDAzrH3tGbTWa%2ByHAiBWdFkJqokGXRvfRcJw6Ad7O4qYp%2Fq8kUmoYZUfos%2BjtyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMImsQtaz2uQJAGRSAKtwDpARmvg9QhYgyyg34yPKRBDWxcqvT0TeOdt%2Bq2Lm9aK1M74LL0LTrNX0%2B%2B%2FUAyUmuoXHLjSKeX%2F%2FNnEssBynf8OZVixonJyOPbUJ8zR1dzsW%2FiNwD7qMiexgIgm3d3E44xxT2Vf%2F6O939V8IKFpPlS8VTGBH1SYfSkAniVVwolcZIFEXtJ%2ByW2KCW8HnQKCAR%2BfGjBo4%2BfWLQ6BNsPsT%2F2DrR6hHMG%2FmCkJodgDlcCSv7HdEZWRjM6DOdXySbLtEdJoJntxAP6kplVfTQVmfBrRMOQuYv2vMAPsMffQNIu4AF3HzzyDpG%2FKUXHXKxnbt5DbC0KWumxn%2Fkc6duJ0x9Nx3Z%2FvOFTJPAEulxre%2B9Uy%2FylE3xI7wz4CN7u1PBE6YgcXcqRMpkHQXwEbhmKjZ395h1uf%2BDgCrLBqsdwGcsfXS04ValjWow8HuW3DxAucPUwR7jPmuByQyxTJZDU216ycucneBDpLPUjLIufIIZzUBJoX%2BIfRRaohdHz2VwlzUsAOs9B9jMWRidrHL%2BFVwQDr6Mp7X%2F8XQBiWdlAWxSfaxYdqqoh93Q1YMhH756ZMcgzdlY5UR4MHXw5l6NXm0eEsA%2BGs6DsiDic5YYXz2HoKWn8Rgq5LhCROSDxAcwz6TpvQY6pgGLCA%2BdU0iAdiOM8iW5tJ7vE9cwgzUeWWJlJox5%2BaDMVje4U8%2BkOcWPkRByiSy%2BFs3KmlnQXTSDcrkAFzhDuzt8CkV64kF0iTYMJQCB5ajA6tUdLtHDFiX2GAlNkpX2HVazo1yxSPKCiWqoEnYSqFS8eULSu3ktsob6phKxFBCw%2BCLoyQ6o4Vy5FO%2FGgyrtEBE1sO8vs2DS4L4Std81sJwKRm6%2F01qb&X-Amz-Signature=3b19280fb8f1ca1cde99ea3619c9578a8e9cf512c78e7b06536f48f4d1c7132d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N42D3P3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBENSLFZkIbWJgaJ%2F2aFw7pxGbBbJDAzrH3tGbTWa%2ByHAiBWdFkJqokGXRvfRcJw6Ad7O4qYp%2Fq8kUmoYZUfos%2BjtyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMImsQtaz2uQJAGRSAKtwDpARmvg9QhYgyyg34yPKRBDWxcqvT0TeOdt%2Bq2Lm9aK1M74LL0LTrNX0%2B%2B%2FUAyUmuoXHLjSKeX%2F%2FNnEssBynf8OZVixonJyOPbUJ8zR1dzsW%2FiNwD7qMiexgIgm3d3E44xxT2Vf%2F6O939V8IKFpPlS8VTGBH1SYfSkAniVVwolcZIFEXtJ%2ByW2KCW8HnQKCAR%2BfGjBo4%2BfWLQ6BNsPsT%2F2DrR6hHMG%2FmCkJodgDlcCSv7HdEZWRjM6DOdXySbLtEdJoJntxAP6kplVfTQVmfBrRMOQuYv2vMAPsMffQNIu4AF3HzzyDpG%2FKUXHXKxnbt5DbC0KWumxn%2Fkc6duJ0x9Nx3Z%2FvOFTJPAEulxre%2B9Uy%2FylE3xI7wz4CN7u1PBE6YgcXcqRMpkHQXwEbhmKjZ395h1uf%2BDgCrLBqsdwGcsfXS04ValjWow8HuW3DxAucPUwR7jPmuByQyxTJZDU216ycucneBDpLPUjLIufIIZzUBJoX%2BIfRRaohdHz2VwlzUsAOs9B9jMWRidrHL%2BFVwQDr6Mp7X%2F8XQBiWdlAWxSfaxYdqqoh93Q1YMhH756ZMcgzdlY5UR4MHXw5l6NXm0eEsA%2BGs6DsiDic5YYXz2HoKWn8Rgq5LhCROSDxAcwz6TpvQY6pgGLCA%2BdU0iAdiOM8iW5tJ7vE9cwgzUeWWJlJox5%2BaDMVje4U8%2BkOcWPkRByiSy%2BFs3KmlnQXTSDcrkAFzhDuzt8CkV64kF0iTYMJQCB5ajA6tUdLtHDFiX2GAlNkpX2HVazo1yxSPKCiWqoEnYSqFS8eULSu3ktsob6phKxFBCw%2BCLoyQ6o4Vy5FO%2FGgyrtEBE1sO8vs2DS4L4Std81sJwKRm6%2F01qb&X-Amz-Signature=51810dff7dbf565f3c3b01bc4d6431bfbbdd12797eb5c4e9934e3e696d1dbb31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N42D3P3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBENSLFZkIbWJgaJ%2F2aFw7pxGbBbJDAzrH3tGbTWa%2ByHAiBWdFkJqokGXRvfRcJw6Ad7O4qYp%2Fq8kUmoYZUfos%2BjtyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMImsQtaz2uQJAGRSAKtwDpARmvg9QhYgyyg34yPKRBDWxcqvT0TeOdt%2Bq2Lm9aK1M74LL0LTrNX0%2B%2B%2FUAyUmuoXHLjSKeX%2F%2FNnEssBynf8OZVixonJyOPbUJ8zR1dzsW%2FiNwD7qMiexgIgm3d3E44xxT2Vf%2F6O939V8IKFpPlS8VTGBH1SYfSkAniVVwolcZIFEXtJ%2ByW2KCW8HnQKCAR%2BfGjBo4%2BfWLQ6BNsPsT%2F2DrR6hHMG%2FmCkJodgDlcCSv7HdEZWRjM6DOdXySbLtEdJoJntxAP6kplVfTQVmfBrRMOQuYv2vMAPsMffQNIu4AF3HzzyDpG%2FKUXHXKxnbt5DbC0KWumxn%2Fkc6duJ0x9Nx3Z%2FvOFTJPAEulxre%2B9Uy%2FylE3xI7wz4CN7u1PBE6YgcXcqRMpkHQXwEbhmKjZ395h1uf%2BDgCrLBqsdwGcsfXS04ValjWow8HuW3DxAucPUwR7jPmuByQyxTJZDU216ycucneBDpLPUjLIufIIZzUBJoX%2BIfRRaohdHz2VwlzUsAOs9B9jMWRidrHL%2BFVwQDr6Mp7X%2F8XQBiWdlAWxSfaxYdqqoh93Q1YMhH756ZMcgzdlY5UR4MHXw5l6NXm0eEsA%2BGs6DsiDic5YYXz2HoKWn8Rgq5LhCROSDxAcwz6TpvQY6pgGLCA%2BdU0iAdiOM8iW5tJ7vE9cwgzUeWWJlJox5%2BaDMVje4U8%2BkOcWPkRByiSy%2BFs3KmlnQXTSDcrkAFzhDuzt8CkV64kF0iTYMJQCB5ajA6tUdLtHDFiX2GAlNkpX2HVazo1yxSPKCiWqoEnYSqFS8eULSu3ktsob6phKxFBCw%2BCLoyQ6o4Vy5FO%2FGgyrtEBE1sO8vs2DS4L4Std81sJwKRm6%2F01qb&X-Amz-Signature=c90a43ae3b8ad6ea9e425a1c97c7c3144de732cd36fda041816f85a8d34a925e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N42D3P3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBENSLFZkIbWJgaJ%2F2aFw7pxGbBbJDAzrH3tGbTWa%2ByHAiBWdFkJqokGXRvfRcJw6Ad7O4qYp%2Fq8kUmoYZUfos%2BjtyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMImsQtaz2uQJAGRSAKtwDpARmvg9QhYgyyg34yPKRBDWxcqvT0TeOdt%2Bq2Lm9aK1M74LL0LTrNX0%2B%2B%2FUAyUmuoXHLjSKeX%2F%2FNnEssBynf8OZVixonJyOPbUJ8zR1dzsW%2FiNwD7qMiexgIgm3d3E44xxT2Vf%2F6O939V8IKFpPlS8VTGBH1SYfSkAniVVwolcZIFEXtJ%2ByW2KCW8HnQKCAR%2BfGjBo4%2BfWLQ6BNsPsT%2F2DrR6hHMG%2FmCkJodgDlcCSv7HdEZWRjM6DOdXySbLtEdJoJntxAP6kplVfTQVmfBrRMOQuYv2vMAPsMffQNIu4AF3HzzyDpG%2FKUXHXKxnbt5DbC0KWumxn%2Fkc6duJ0x9Nx3Z%2FvOFTJPAEulxre%2B9Uy%2FylE3xI7wz4CN7u1PBE6YgcXcqRMpkHQXwEbhmKjZ395h1uf%2BDgCrLBqsdwGcsfXS04ValjWow8HuW3DxAucPUwR7jPmuByQyxTJZDU216ycucneBDpLPUjLIufIIZzUBJoX%2BIfRRaohdHz2VwlzUsAOs9B9jMWRidrHL%2BFVwQDr6Mp7X%2F8XQBiWdlAWxSfaxYdqqoh93Q1YMhH756ZMcgzdlY5UR4MHXw5l6NXm0eEsA%2BGs6DsiDic5YYXz2HoKWn8Rgq5LhCROSDxAcwz6TpvQY6pgGLCA%2BdU0iAdiOM8iW5tJ7vE9cwgzUeWWJlJox5%2BaDMVje4U8%2BkOcWPkRByiSy%2BFs3KmlnQXTSDcrkAFzhDuzt8CkV64kF0iTYMJQCB5ajA6tUdLtHDFiX2GAlNkpX2HVazo1yxSPKCiWqoEnYSqFS8eULSu3ktsob6phKxFBCw%2BCLoyQ6o4Vy5FO%2FGgyrtEBE1sO8vs2DS4L4Std81sJwKRm6%2F01qb&X-Amz-Signature=d449ee743d7fa191ed68bd3f737a624ea9968a537dc385b9c90532d1f2c64a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N42D3P3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBENSLFZkIbWJgaJ%2F2aFw7pxGbBbJDAzrH3tGbTWa%2ByHAiBWdFkJqokGXRvfRcJw6Ad7O4qYp%2Fq8kUmoYZUfos%2BjtyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMImsQtaz2uQJAGRSAKtwDpARmvg9QhYgyyg34yPKRBDWxcqvT0TeOdt%2Bq2Lm9aK1M74LL0LTrNX0%2B%2B%2FUAyUmuoXHLjSKeX%2F%2FNnEssBynf8OZVixonJyOPbUJ8zR1dzsW%2FiNwD7qMiexgIgm3d3E44xxT2Vf%2F6O939V8IKFpPlS8VTGBH1SYfSkAniVVwolcZIFEXtJ%2ByW2KCW8HnQKCAR%2BfGjBo4%2BfWLQ6BNsPsT%2F2DrR6hHMG%2FmCkJodgDlcCSv7HdEZWRjM6DOdXySbLtEdJoJntxAP6kplVfTQVmfBrRMOQuYv2vMAPsMffQNIu4AF3HzzyDpG%2FKUXHXKxnbt5DbC0KWumxn%2Fkc6duJ0x9Nx3Z%2FvOFTJPAEulxre%2B9Uy%2FylE3xI7wz4CN7u1PBE6YgcXcqRMpkHQXwEbhmKjZ395h1uf%2BDgCrLBqsdwGcsfXS04ValjWow8HuW3DxAucPUwR7jPmuByQyxTJZDU216ycucneBDpLPUjLIufIIZzUBJoX%2BIfRRaohdHz2VwlzUsAOs9B9jMWRidrHL%2BFVwQDr6Mp7X%2F8XQBiWdlAWxSfaxYdqqoh93Q1YMhH756ZMcgzdlY5UR4MHXw5l6NXm0eEsA%2BGs6DsiDic5YYXz2HoKWn8Rgq5LhCROSDxAcwz6TpvQY6pgGLCA%2BdU0iAdiOM8iW5tJ7vE9cwgzUeWWJlJox5%2BaDMVje4U8%2BkOcWPkRByiSy%2BFs3KmlnQXTSDcrkAFzhDuzt8CkV64kF0iTYMJQCB5ajA6tUdLtHDFiX2GAlNkpX2HVazo1yxSPKCiWqoEnYSqFS8eULSu3ktsob6phKxFBCw%2BCLoyQ6o4Vy5FO%2FGgyrtEBE1sO8vs2DS4L4Std81sJwKRm6%2F01qb&X-Amz-Signature=4a7175ebbfb4128ed7a71ab889d959aa3fad83268255cb4ca4c8b0a28fdf1048&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
