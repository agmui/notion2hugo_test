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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOLA66EU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo9Dz3edcM8EQLb3Q3FYU1J2SQoBvXj7Ryeaej2z9XagIhAPFHC8Y16Z1BG9ZIXpZvMrtfVzbWFXBcfFq0ZAK590B%2FKv8DCDAQABoMNjM3NDIzMTgzODA1IgyyDAsM0YcOhbeahaAq3AMw%2FbwNyxmkyYQW21HlPXrT0i1SUBszWGwzUALLpFQnwo%2B6Yo%2FjV%2FW9rDffq7eQPpETBp0SmTaTXHhWKMzNcRTDW1YDuVDYadRlE4OZ9iGZDPqcvaB7JVW3PYvy9oFwUAokBxFe2mN4gMEdTIhAPD6CMLyhYQra7q6Jqs%2F9%2B3jBs4IChESEefSUp0JoHP7cNe2cPAU%2BlokVFOx%2FLV9KWWkt6OmpnaA%2BEYWJnsM%2Bi9nTCb%2Bc6n4QXOUhm5X7PXKjP%2FDu1LwtBn9xxJynixyKJsTpkaKsQZZT2evdvFUJbEoa6JUgHi5SvEH%2FqVBui2a3rsH3bG9QI9RQudyuPHdc6ZmZ5LycdKttz%2BnRjGeF9RzsrDUQjkE%2B2JyI0iXF%2FxeTvZDPlYUos1ESfMNTo%2FQ80%2Fm2EBjqGPaOSQ480zTBFL3W%2BrGo9WCZwqOtjJ0pjkeA2sCobDZ9n%2FYUad%2BphA8sdZlQ4T4GNDWB%2FoQIq2GRBDxb4fJhUzKv3FjtQiuOsNQUaBZc37do2PW1vGKfnF%2BnBmAnzbqOnSOtHtRV9i579BHzEhjCMOX7%2FGrzo0rDYvvZx0Ne4R2NQa0rKS%2BZRLbO1jgRCuVVqybwb5rWhWVIuWraczLPqtwF%2F3YiC2Tg6jCgsePABjqkAZ02a0hHfuKxg5SVnxe8nlhzzdoBuzscl1cZKvex7pDMO%2FOXspJyMTIed8Q7tyMZ64CfaJ4e%2FMmKMvZBz6xhcUXFKmUX0QuRvf8Jd7jsBIvP2mdpqsx759DQ%2F89XcrAgmnhz1ZiN6rvSuKYHzRyNTwiqRsCEw0%2FZeWwtWGcDER%2FijPOTjDiYEZJG0uWP1q7Lg%2BQO2SC9J5XrEcsWEOr9i641mDk0&X-Amz-Signature=12c6a174ab69d9754ecd9aea0b21e75e74032f218478d0f55bdecd0245ff1594&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOLA66EU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo9Dz3edcM8EQLb3Q3FYU1J2SQoBvXj7Ryeaej2z9XagIhAPFHC8Y16Z1BG9ZIXpZvMrtfVzbWFXBcfFq0ZAK590B%2FKv8DCDAQABoMNjM3NDIzMTgzODA1IgyyDAsM0YcOhbeahaAq3AMw%2FbwNyxmkyYQW21HlPXrT0i1SUBszWGwzUALLpFQnwo%2B6Yo%2FjV%2FW9rDffq7eQPpETBp0SmTaTXHhWKMzNcRTDW1YDuVDYadRlE4OZ9iGZDPqcvaB7JVW3PYvy9oFwUAokBxFe2mN4gMEdTIhAPD6CMLyhYQra7q6Jqs%2F9%2B3jBs4IChESEefSUp0JoHP7cNe2cPAU%2BlokVFOx%2FLV9KWWkt6OmpnaA%2BEYWJnsM%2Bi9nTCb%2Bc6n4QXOUhm5X7PXKjP%2FDu1LwtBn9xxJynixyKJsTpkaKsQZZT2evdvFUJbEoa6JUgHi5SvEH%2FqVBui2a3rsH3bG9QI9RQudyuPHdc6ZmZ5LycdKttz%2BnRjGeF9RzsrDUQjkE%2B2JyI0iXF%2FxeTvZDPlYUos1ESfMNTo%2FQ80%2Fm2EBjqGPaOSQ480zTBFL3W%2BrGo9WCZwqOtjJ0pjkeA2sCobDZ9n%2FYUad%2BphA8sdZlQ4T4GNDWB%2FoQIq2GRBDxb4fJhUzKv3FjtQiuOsNQUaBZc37do2PW1vGKfnF%2BnBmAnzbqOnSOtHtRV9i579BHzEhjCMOX7%2FGrzo0rDYvvZx0Ne4R2NQa0rKS%2BZRLbO1jgRCuVVqybwb5rWhWVIuWraczLPqtwF%2F3YiC2Tg6jCgsePABjqkAZ02a0hHfuKxg5SVnxe8nlhzzdoBuzscl1cZKvex7pDMO%2FOXspJyMTIed8Q7tyMZ64CfaJ4e%2FMmKMvZBz6xhcUXFKmUX0QuRvf8Jd7jsBIvP2mdpqsx759DQ%2F89XcrAgmnhz1ZiN6rvSuKYHzRyNTwiqRsCEw0%2FZeWwtWGcDER%2FijPOTjDiYEZJG0uWP1q7Lg%2BQO2SC9J5XrEcsWEOr9i641mDk0&X-Amz-Signature=f65556884af4b8c78e5da68fa9600ed2d128b7dae3360558dbd073bba6de2862&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOLA66EU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo9Dz3edcM8EQLb3Q3FYU1J2SQoBvXj7Ryeaej2z9XagIhAPFHC8Y16Z1BG9ZIXpZvMrtfVzbWFXBcfFq0ZAK590B%2FKv8DCDAQABoMNjM3NDIzMTgzODA1IgyyDAsM0YcOhbeahaAq3AMw%2FbwNyxmkyYQW21HlPXrT0i1SUBszWGwzUALLpFQnwo%2B6Yo%2FjV%2FW9rDffq7eQPpETBp0SmTaTXHhWKMzNcRTDW1YDuVDYadRlE4OZ9iGZDPqcvaB7JVW3PYvy9oFwUAokBxFe2mN4gMEdTIhAPD6CMLyhYQra7q6Jqs%2F9%2B3jBs4IChESEefSUp0JoHP7cNe2cPAU%2BlokVFOx%2FLV9KWWkt6OmpnaA%2BEYWJnsM%2Bi9nTCb%2Bc6n4QXOUhm5X7PXKjP%2FDu1LwtBn9xxJynixyKJsTpkaKsQZZT2evdvFUJbEoa6JUgHi5SvEH%2FqVBui2a3rsH3bG9QI9RQudyuPHdc6ZmZ5LycdKttz%2BnRjGeF9RzsrDUQjkE%2B2JyI0iXF%2FxeTvZDPlYUos1ESfMNTo%2FQ80%2Fm2EBjqGPaOSQ480zTBFL3W%2BrGo9WCZwqOtjJ0pjkeA2sCobDZ9n%2FYUad%2BphA8sdZlQ4T4GNDWB%2FoQIq2GRBDxb4fJhUzKv3FjtQiuOsNQUaBZc37do2PW1vGKfnF%2BnBmAnzbqOnSOtHtRV9i579BHzEhjCMOX7%2FGrzo0rDYvvZx0Ne4R2NQa0rKS%2BZRLbO1jgRCuVVqybwb5rWhWVIuWraczLPqtwF%2F3YiC2Tg6jCgsePABjqkAZ02a0hHfuKxg5SVnxe8nlhzzdoBuzscl1cZKvex7pDMO%2FOXspJyMTIed8Q7tyMZ64CfaJ4e%2FMmKMvZBz6xhcUXFKmUX0QuRvf8Jd7jsBIvP2mdpqsx759DQ%2F89XcrAgmnhz1ZiN6rvSuKYHzRyNTwiqRsCEw0%2FZeWwtWGcDER%2FijPOTjDiYEZJG0uWP1q7Lg%2BQO2SC9J5XrEcsWEOr9i641mDk0&X-Amz-Signature=bd08fb9bcec2ebf48c994b4afb2f18da2c6d4a908848f69240cb60c54d827dac&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOLA66EU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo9Dz3edcM8EQLb3Q3FYU1J2SQoBvXj7Ryeaej2z9XagIhAPFHC8Y16Z1BG9ZIXpZvMrtfVzbWFXBcfFq0ZAK590B%2FKv8DCDAQABoMNjM3NDIzMTgzODA1IgyyDAsM0YcOhbeahaAq3AMw%2FbwNyxmkyYQW21HlPXrT0i1SUBszWGwzUALLpFQnwo%2B6Yo%2FjV%2FW9rDffq7eQPpETBp0SmTaTXHhWKMzNcRTDW1YDuVDYadRlE4OZ9iGZDPqcvaB7JVW3PYvy9oFwUAokBxFe2mN4gMEdTIhAPD6CMLyhYQra7q6Jqs%2F9%2B3jBs4IChESEefSUp0JoHP7cNe2cPAU%2BlokVFOx%2FLV9KWWkt6OmpnaA%2BEYWJnsM%2Bi9nTCb%2Bc6n4QXOUhm5X7PXKjP%2FDu1LwtBn9xxJynixyKJsTpkaKsQZZT2evdvFUJbEoa6JUgHi5SvEH%2FqVBui2a3rsH3bG9QI9RQudyuPHdc6ZmZ5LycdKttz%2BnRjGeF9RzsrDUQjkE%2B2JyI0iXF%2FxeTvZDPlYUos1ESfMNTo%2FQ80%2Fm2EBjqGPaOSQ480zTBFL3W%2BrGo9WCZwqOtjJ0pjkeA2sCobDZ9n%2FYUad%2BphA8sdZlQ4T4GNDWB%2FoQIq2GRBDxb4fJhUzKv3FjtQiuOsNQUaBZc37do2PW1vGKfnF%2BnBmAnzbqOnSOtHtRV9i579BHzEhjCMOX7%2FGrzo0rDYvvZx0Ne4R2NQa0rKS%2BZRLbO1jgRCuVVqybwb5rWhWVIuWraczLPqtwF%2F3YiC2Tg6jCgsePABjqkAZ02a0hHfuKxg5SVnxe8nlhzzdoBuzscl1cZKvex7pDMO%2FOXspJyMTIed8Q7tyMZ64CfaJ4e%2FMmKMvZBz6xhcUXFKmUX0QuRvf8Jd7jsBIvP2mdpqsx759DQ%2F89XcrAgmnhz1ZiN6rvSuKYHzRyNTwiqRsCEw0%2FZeWwtWGcDER%2FijPOTjDiYEZJG0uWP1q7Lg%2BQO2SC9J5XrEcsWEOr9i641mDk0&X-Amz-Signature=694dd4c0fc60f7e1d4f0e64c0a83988f28734f9d1b33f0c83face6bf9c163274&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOLA66EU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo9Dz3edcM8EQLb3Q3FYU1J2SQoBvXj7Ryeaej2z9XagIhAPFHC8Y16Z1BG9ZIXpZvMrtfVzbWFXBcfFq0ZAK590B%2FKv8DCDAQABoMNjM3NDIzMTgzODA1IgyyDAsM0YcOhbeahaAq3AMw%2FbwNyxmkyYQW21HlPXrT0i1SUBszWGwzUALLpFQnwo%2B6Yo%2FjV%2FW9rDffq7eQPpETBp0SmTaTXHhWKMzNcRTDW1YDuVDYadRlE4OZ9iGZDPqcvaB7JVW3PYvy9oFwUAokBxFe2mN4gMEdTIhAPD6CMLyhYQra7q6Jqs%2F9%2B3jBs4IChESEefSUp0JoHP7cNe2cPAU%2BlokVFOx%2FLV9KWWkt6OmpnaA%2BEYWJnsM%2Bi9nTCb%2Bc6n4QXOUhm5X7PXKjP%2FDu1LwtBn9xxJynixyKJsTpkaKsQZZT2evdvFUJbEoa6JUgHi5SvEH%2FqVBui2a3rsH3bG9QI9RQudyuPHdc6ZmZ5LycdKttz%2BnRjGeF9RzsrDUQjkE%2B2JyI0iXF%2FxeTvZDPlYUos1ESfMNTo%2FQ80%2Fm2EBjqGPaOSQ480zTBFL3W%2BrGo9WCZwqOtjJ0pjkeA2sCobDZ9n%2FYUad%2BphA8sdZlQ4T4GNDWB%2FoQIq2GRBDxb4fJhUzKv3FjtQiuOsNQUaBZc37do2PW1vGKfnF%2BnBmAnzbqOnSOtHtRV9i579BHzEhjCMOX7%2FGrzo0rDYvvZx0Ne4R2NQa0rKS%2BZRLbO1jgRCuVVqybwb5rWhWVIuWraczLPqtwF%2F3YiC2Tg6jCgsePABjqkAZ02a0hHfuKxg5SVnxe8nlhzzdoBuzscl1cZKvex7pDMO%2FOXspJyMTIed8Q7tyMZ64CfaJ4e%2FMmKMvZBz6xhcUXFKmUX0QuRvf8Jd7jsBIvP2mdpqsx759DQ%2F89XcrAgmnhz1ZiN6rvSuKYHzRyNTwiqRsCEw0%2FZeWwtWGcDER%2FijPOTjDiYEZJG0uWP1q7Lg%2BQO2SC9J5XrEcsWEOr9i641mDk0&X-Amz-Signature=8c79462f42594981cac058282285c8a592ba9ba03d2856b1af79223ad922745e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOLA66EU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo9Dz3edcM8EQLb3Q3FYU1J2SQoBvXj7Ryeaej2z9XagIhAPFHC8Y16Z1BG9ZIXpZvMrtfVzbWFXBcfFq0ZAK590B%2FKv8DCDAQABoMNjM3NDIzMTgzODA1IgyyDAsM0YcOhbeahaAq3AMw%2FbwNyxmkyYQW21HlPXrT0i1SUBszWGwzUALLpFQnwo%2B6Yo%2FjV%2FW9rDffq7eQPpETBp0SmTaTXHhWKMzNcRTDW1YDuVDYadRlE4OZ9iGZDPqcvaB7JVW3PYvy9oFwUAokBxFe2mN4gMEdTIhAPD6CMLyhYQra7q6Jqs%2F9%2B3jBs4IChESEefSUp0JoHP7cNe2cPAU%2BlokVFOx%2FLV9KWWkt6OmpnaA%2BEYWJnsM%2Bi9nTCb%2Bc6n4QXOUhm5X7PXKjP%2FDu1LwtBn9xxJynixyKJsTpkaKsQZZT2evdvFUJbEoa6JUgHi5SvEH%2FqVBui2a3rsH3bG9QI9RQudyuPHdc6ZmZ5LycdKttz%2BnRjGeF9RzsrDUQjkE%2B2JyI0iXF%2FxeTvZDPlYUos1ESfMNTo%2FQ80%2Fm2EBjqGPaOSQ480zTBFL3W%2BrGo9WCZwqOtjJ0pjkeA2sCobDZ9n%2FYUad%2BphA8sdZlQ4T4GNDWB%2FoQIq2GRBDxb4fJhUzKv3FjtQiuOsNQUaBZc37do2PW1vGKfnF%2BnBmAnzbqOnSOtHtRV9i579BHzEhjCMOX7%2FGrzo0rDYvvZx0Ne4R2NQa0rKS%2BZRLbO1jgRCuVVqybwb5rWhWVIuWraczLPqtwF%2F3YiC2Tg6jCgsePABjqkAZ02a0hHfuKxg5SVnxe8nlhzzdoBuzscl1cZKvex7pDMO%2FOXspJyMTIed8Q7tyMZ64CfaJ4e%2FMmKMvZBz6xhcUXFKmUX0QuRvf8Jd7jsBIvP2mdpqsx759DQ%2F89XcrAgmnhz1ZiN6rvSuKYHzRyNTwiqRsCEw0%2FZeWwtWGcDER%2FijPOTjDiYEZJG0uWP1q7Lg%2BQO2SC9J5XrEcsWEOr9i641mDk0&X-Amz-Signature=c5cd4f4b569a4b2e6fdbc0bcc08eb7dd048672c98e09bc7560a1dd7dbf006011&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOLA66EU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo9Dz3edcM8EQLb3Q3FYU1J2SQoBvXj7Ryeaej2z9XagIhAPFHC8Y16Z1BG9ZIXpZvMrtfVzbWFXBcfFq0ZAK590B%2FKv8DCDAQABoMNjM3NDIzMTgzODA1IgyyDAsM0YcOhbeahaAq3AMw%2FbwNyxmkyYQW21HlPXrT0i1SUBszWGwzUALLpFQnwo%2B6Yo%2FjV%2FW9rDffq7eQPpETBp0SmTaTXHhWKMzNcRTDW1YDuVDYadRlE4OZ9iGZDPqcvaB7JVW3PYvy9oFwUAokBxFe2mN4gMEdTIhAPD6CMLyhYQra7q6Jqs%2F9%2B3jBs4IChESEefSUp0JoHP7cNe2cPAU%2BlokVFOx%2FLV9KWWkt6OmpnaA%2BEYWJnsM%2Bi9nTCb%2Bc6n4QXOUhm5X7PXKjP%2FDu1LwtBn9xxJynixyKJsTpkaKsQZZT2evdvFUJbEoa6JUgHi5SvEH%2FqVBui2a3rsH3bG9QI9RQudyuPHdc6ZmZ5LycdKttz%2BnRjGeF9RzsrDUQjkE%2B2JyI0iXF%2FxeTvZDPlYUos1ESfMNTo%2FQ80%2Fm2EBjqGPaOSQ480zTBFL3W%2BrGo9WCZwqOtjJ0pjkeA2sCobDZ9n%2FYUad%2BphA8sdZlQ4T4GNDWB%2FoQIq2GRBDxb4fJhUzKv3FjtQiuOsNQUaBZc37do2PW1vGKfnF%2BnBmAnzbqOnSOtHtRV9i579BHzEhjCMOX7%2FGrzo0rDYvvZx0Ne4R2NQa0rKS%2BZRLbO1jgRCuVVqybwb5rWhWVIuWraczLPqtwF%2F3YiC2Tg6jCgsePABjqkAZ02a0hHfuKxg5SVnxe8nlhzzdoBuzscl1cZKvex7pDMO%2FOXspJyMTIed8Q7tyMZ64CfaJ4e%2FMmKMvZBz6xhcUXFKmUX0QuRvf8Jd7jsBIvP2mdpqsx759DQ%2F89XcrAgmnhz1ZiN6rvSuKYHzRyNTwiqRsCEw0%2FZeWwtWGcDER%2FijPOTjDiYEZJG0uWP1q7Lg%2BQO2SC9J5XrEcsWEOr9i641mDk0&X-Amz-Signature=be1c42ef9ea6a4f87fd1c867cf1504a17286d90736025a4ab3181b608d318212&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOLA66EU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo9Dz3edcM8EQLb3Q3FYU1J2SQoBvXj7Ryeaej2z9XagIhAPFHC8Y16Z1BG9ZIXpZvMrtfVzbWFXBcfFq0ZAK590B%2FKv8DCDAQABoMNjM3NDIzMTgzODA1IgyyDAsM0YcOhbeahaAq3AMw%2FbwNyxmkyYQW21HlPXrT0i1SUBszWGwzUALLpFQnwo%2B6Yo%2FjV%2FW9rDffq7eQPpETBp0SmTaTXHhWKMzNcRTDW1YDuVDYadRlE4OZ9iGZDPqcvaB7JVW3PYvy9oFwUAokBxFe2mN4gMEdTIhAPD6CMLyhYQra7q6Jqs%2F9%2B3jBs4IChESEefSUp0JoHP7cNe2cPAU%2BlokVFOx%2FLV9KWWkt6OmpnaA%2BEYWJnsM%2Bi9nTCb%2Bc6n4QXOUhm5X7PXKjP%2FDu1LwtBn9xxJynixyKJsTpkaKsQZZT2evdvFUJbEoa6JUgHi5SvEH%2FqVBui2a3rsH3bG9QI9RQudyuPHdc6ZmZ5LycdKttz%2BnRjGeF9RzsrDUQjkE%2B2JyI0iXF%2FxeTvZDPlYUos1ESfMNTo%2FQ80%2Fm2EBjqGPaOSQ480zTBFL3W%2BrGo9WCZwqOtjJ0pjkeA2sCobDZ9n%2FYUad%2BphA8sdZlQ4T4GNDWB%2FoQIq2GRBDxb4fJhUzKv3FjtQiuOsNQUaBZc37do2PW1vGKfnF%2BnBmAnzbqOnSOtHtRV9i579BHzEhjCMOX7%2FGrzo0rDYvvZx0Ne4R2NQa0rKS%2BZRLbO1jgRCuVVqybwb5rWhWVIuWraczLPqtwF%2F3YiC2Tg6jCgsePABjqkAZ02a0hHfuKxg5SVnxe8nlhzzdoBuzscl1cZKvex7pDMO%2FOXspJyMTIed8Q7tyMZ64CfaJ4e%2FMmKMvZBz6xhcUXFKmUX0QuRvf8Jd7jsBIvP2mdpqsx759DQ%2F89XcrAgmnhz1ZiN6rvSuKYHzRyNTwiqRsCEw0%2FZeWwtWGcDER%2FijPOTjDiYEZJG0uWP1q7Lg%2BQO2SC9J5XrEcsWEOr9i641mDk0&X-Amz-Signature=af93b01e5bd7dfc2225ec4675ae560617ea2e2b325b895136b7bf2a965828c10&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
