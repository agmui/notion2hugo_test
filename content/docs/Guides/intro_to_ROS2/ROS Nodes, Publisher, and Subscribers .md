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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZEH5NA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwzNg9Px%2Fkr7eXFBOgMzkjkQ6NgYlXw4K9eNZpoMOrgwIgG7SNSqn7esZN8Nc3kwbrh0QyLb1EebRe4WSiHrx6kg8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUFb9c9g2iqsAtyTyrcA5K%2BHRzJWOfaQCjGq3FZmDjiuRC8QmybgY%2FxH2C3KkG%2BBUbcJmMLgU1syv8E%2BlpJqhbPTOB%2FVLm%2BJbB8QPUtspH%2FM0QYhyPBbx%2B9qqIgPielnEOhr%2FHeBhYlUxqFkzYM70JDI0ncWS7aTHYUNkpH5UObzI%2FoXbhDtVUYeZv3HcKGuy06N1aJFe925taA%2FNYhFA0zw%2BHWgRcDuoG%2F9124x%2BJuC7jVHS7m2dcPCZ0nO4Q507TEhuqyBzpSsGAbKh0Jwv5FfUlnJ9ml4rJDbshXqQXiH4Jy4XcRKwrjVA%2BJxQ756BgLPAbwCcFc48h3VZurdvhGHTCjk5kBRgcRo5yELqOKODQ9bpHHPb2QeIu%2BevnJqTYwxctibi75wN1w1X%2FKG5W%2F8fm6MmDHoCfjGBZHoBjRZIa0sYPxayCx%2FRV1Yn%2BDFSDAH%2BH4ugi6GGg8Z6TCpOd4906oG%2FbAcT9IgBGDZLMuxdvlW%2B8ta%2FeNpOGrIH69yeV4VOxdN%2FanbQ3U6%2BLHF7085gpv7Wwvqmbd4COB95f9wkTxV3XIB%2BiqNnlH71BjR543upUz8UqeGjuUaAXPHnhI8CDnyCa%2F8QhsRBM62xYkXhiOgebCXIHKlD3WF%2FcM3uHWaqSeJXa94dqVMKmG0L4GOqUBlBpfdv10wxy2n4mGLBvcqShR11o66lZMwBp4koGB%2B7AdjOpdq3vaGvOlJizmY3Pc6WOrXd1TL98GKZjg6JwNemjfRphPah4SRNhepLfJE6mLLz8tAWqdHzKu69EJjtMkncZ%2FOb76rG51s2%2B9aq%2FycCFIsbFi3DiQCOtHwAGDw7acobpkxF2xS3JJBV0yaX%2BuwfDTVxrKwlvUeqmsxAaObYcs1kTo&X-Amz-Signature=d8d12805781fb259ef4ec39058a4dcd69d7bf50540fc1b6c1bc63045a9465b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZEH5NA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwzNg9Px%2Fkr7eXFBOgMzkjkQ6NgYlXw4K9eNZpoMOrgwIgG7SNSqn7esZN8Nc3kwbrh0QyLb1EebRe4WSiHrx6kg8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUFb9c9g2iqsAtyTyrcA5K%2BHRzJWOfaQCjGq3FZmDjiuRC8QmybgY%2FxH2C3KkG%2BBUbcJmMLgU1syv8E%2BlpJqhbPTOB%2FVLm%2BJbB8QPUtspH%2FM0QYhyPBbx%2B9qqIgPielnEOhr%2FHeBhYlUxqFkzYM70JDI0ncWS7aTHYUNkpH5UObzI%2FoXbhDtVUYeZv3HcKGuy06N1aJFe925taA%2FNYhFA0zw%2BHWgRcDuoG%2F9124x%2BJuC7jVHS7m2dcPCZ0nO4Q507TEhuqyBzpSsGAbKh0Jwv5FfUlnJ9ml4rJDbshXqQXiH4Jy4XcRKwrjVA%2BJxQ756BgLPAbwCcFc48h3VZurdvhGHTCjk5kBRgcRo5yELqOKODQ9bpHHPb2QeIu%2BevnJqTYwxctibi75wN1w1X%2FKG5W%2F8fm6MmDHoCfjGBZHoBjRZIa0sYPxayCx%2FRV1Yn%2BDFSDAH%2BH4ugi6GGg8Z6TCpOd4906oG%2FbAcT9IgBGDZLMuxdvlW%2B8ta%2FeNpOGrIH69yeV4VOxdN%2FanbQ3U6%2BLHF7085gpv7Wwvqmbd4COB95f9wkTxV3XIB%2BiqNnlH71BjR543upUz8UqeGjuUaAXPHnhI8CDnyCa%2F8QhsRBM62xYkXhiOgebCXIHKlD3WF%2FcM3uHWaqSeJXa94dqVMKmG0L4GOqUBlBpfdv10wxy2n4mGLBvcqShR11o66lZMwBp4koGB%2B7AdjOpdq3vaGvOlJizmY3Pc6WOrXd1TL98GKZjg6JwNemjfRphPah4SRNhepLfJE6mLLz8tAWqdHzKu69EJjtMkncZ%2FOb76rG51s2%2B9aq%2FycCFIsbFi3DiQCOtHwAGDw7acobpkxF2xS3JJBV0yaX%2BuwfDTVxrKwlvUeqmsxAaObYcs1kTo&X-Amz-Signature=500fc32b229612ee04efb2262b726100d3a25b340e3d6cf39d790923d132b103&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZEH5NA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwzNg9Px%2Fkr7eXFBOgMzkjkQ6NgYlXw4K9eNZpoMOrgwIgG7SNSqn7esZN8Nc3kwbrh0QyLb1EebRe4WSiHrx6kg8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUFb9c9g2iqsAtyTyrcA5K%2BHRzJWOfaQCjGq3FZmDjiuRC8QmybgY%2FxH2C3KkG%2BBUbcJmMLgU1syv8E%2BlpJqhbPTOB%2FVLm%2BJbB8QPUtspH%2FM0QYhyPBbx%2B9qqIgPielnEOhr%2FHeBhYlUxqFkzYM70JDI0ncWS7aTHYUNkpH5UObzI%2FoXbhDtVUYeZv3HcKGuy06N1aJFe925taA%2FNYhFA0zw%2BHWgRcDuoG%2F9124x%2BJuC7jVHS7m2dcPCZ0nO4Q507TEhuqyBzpSsGAbKh0Jwv5FfUlnJ9ml4rJDbshXqQXiH4Jy4XcRKwrjVA%2BJxQ756BgLPAbwCcFc48h3VZurdvhGHTCjk5kBRgcRo5yELqOKODQ9bpHHPb2QeIu%2BevnJqTYwxctibi75wN1w1X%2FKG5W%2F8fm6MmDHoCfjGBZHoBjRZIa0sYPxayCx%2FRV1Yn%2BDFSDAH%2BH4ugi6GGg8Z6TCpOd4906oG%2FbAcT9IgBGDZLMuxdvlW%2B8ta%2FeNpOGrIH69yeV4VOxdN%2FanbQ3U6%2BLHF7085gpv7Wwvqmbd4COB95f9wkTxV3XIB%2BiqNnlH71BjR543upUz8UqeGjuUaAXPHnhI8CDnyCa%2F8QhsRBM62xYkXhiOgebCXIHKlD3WF%2FcM3uHWaqSeJXa94dqVMKmG0L4GOqUBlBpfdv10wxy2n4mGLBvcqShR11o66lZMwBp4koGB%2B7AdjOpdq3vaGvOlJizmY3Pc6WOrXd1TL98GKZjg6JwNemjfRphPah4SRNhepLfJE6mLLz8tAWqdHzKu69EJjtMkncZ%2FOb76rG51s2%2B9aq%2FycCFIsbFi3DiQCOtHwAGDw7acobpkxF2xS3JJBV0yaX%2BuwfDTVxrKwlvUeqmsxAaObYcs1kTo&X-Amz-Signature=f9fd5bc9f38d1ade900c9ee6b7c8dd1fc8ba41d7a95c864a8b7e17c31c9d2524&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZEH5NA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwzNg9Px%2Fkr7eXFBOgMzkjkQ6NgYlXw4K9eNZpoMOrgwIgG7SNSqn7esZN8Nc3kwbrh0QyLb1EebRe4WSiHrx6kg8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUFb9c9g2iqsAtyTyrcA5K%2BHRzJWOfaQCjGq3FZmDjiuRC8QmybgY%2FxH2C3KkG%2BBUbcJmMLgU1syv8E%2BlpJqhbPTOB%2FVLm%2BJbB8QPUtspH%2FM0QYhyPBbx%2B9qqIgPielnEOhr%2FHeBhYlUxqFkzYM70JDI0ncWS7aTHYUNkpH5UObzI%2FoXbhDtVUYeZv3HcKGuy06N1aJFe925taA%2FNYhFA0zw%2BHWgRcDuoG%2F9124x%2BJuC7jVHS7m2dcPCZ0nO4Q507TEhuqyBzpSsGAbKh0Jwv5FfUlnJ9ml4rJDbshXqQXiH4Jy4XcRKwrjVA%2BJxQ756BgLPAbwCcFc48h3VZurdvhGHTCjk5kBRgcRo5yELqOKODQ9bpHHPb2QeIu%2BevnJqTYwxctibi75wN1w1X%2FKG5W%2F8fm6MmDHoCfjGBZHoBjRZIa0sYPxayCx%2FRV1Yn%2BDFSDAH%2BH4ugi6GGg8Z6TCpOd4906oG%2FbAcT9IgBGDZLMuxdvlW%2B8ta%2FeNpOGrIH69yeV4VOxdN%2FanbQ3U6%2BLHF7085gpv7Wwvqmbd4COB95f9wkTxV3XIB%2BiqNnlH71BjR543upUz8UqeGjuUaAXPHnhI8CDnyCa%2F8QhsRBM62xYkXhiOgebCXIHKlD3WF%2FcM3uHWaqSeJXa94dqVMKmG0L4GOqUBlBpfdv10wxy2n4mGLBvcqShR11o66lZMwBp4koGB%2B7AdjOpdq3vaGvOlJizmY3Pc6WOrXd1TL98GKZjg6JwNemjfRphPah4SRNhepLfJE6mLLz8tAWqdHzKu69EJjtMkncZ%2FOb76rG51s2%2B9aq%2FycCFIsbFi3DiQCOtHwAGDw7acobpkxF2xS3JJBV0yaX%2BuwfDTVxrKwlvUeqmsxAaObYcs1kTo&X-Amz-Signature=188bd899549ae417c2c4cd572e6fbad0fca173d6b065d65eb79416a4856c5f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZEH5NA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwzNg9Px%2Fkr7eXFBOgMzkjkQ6NgYlXw4K9eNZpoMOrgwIgG7SNSqn7esZN8Nc3kwbrh0QyLb1EebRe4WSiHrx6kg8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUFb9c9g2iqsAtyTyrcA5K%2BHRzJWOfaQCjGq3FZmDjiuRC8QmybgY%2FxH2C3KkG%2BBUbcJmMLgU1syv8E%2BlpJqhbPTOB%2FVLm%2BJbB8QPUtspH%2FM0QYhyPBbx%2B9qqIgPielnEOhr%2FHeBhYlUxqFkzYM70JDI0ncWS7aTHYUNkpH5UObzI%2FoXbhDtVUYeZv3HcKGuy06N1aJFe925taA%2FNYhFA0zw%2BHWgRcDuoG%2F9124x%2BJuC7jVHS7m2dcPCZ0nO4Q507TEhuqyBzpSsGAbKh0Jwv5FfUlnJ9ml4rJDbshXqQXiH4Jy4XcRKwrjVA%2BJxQ756BgLPAbwCcFc48h3VZurdvhGHTCjk5kBRgcRo5yELqOKODQ9bpHHPb2QeIu%2BevnJqTYwxctibi75wN1w1X%2FKG5W%2F8fm6MmDHoCfjGBZHoBjRZIa0sYPxayCx%2FRV1Yn%2BDFSDAH%2BH4ugi6GGg8Z6TCpOd4906oG%2FbAcT9IgBGDZLMuxdvlW%2B8ta%2FeNpOGrIH69yeV4VOxdN%2FanbQ3U6%2BLHF7085gpv7Wwvqmbd4COB95f9wkTxV3XIB%2BiqNnlH71BjR543upUz8UqeGjuUaAXPHnhI8CDnyCa%2F8QhsRBM62xYkXhiOgebCXIHKlD3WF%2FcM3uHWaqSeJXa94dqVMKmG0L4GOqUBlBpfdv10wxy2n4mGLBvcqShR11o66lZMwBp4koGB%2B7AdjOpdq3vaGvOlJizmY3Pc6WOrXd1TL98GKZjg6JwNemjfRphPah4SRNhepLfJE6mLLz8tAWqdHzKu69EJjtMkncZ%2FOb76rG51s2%2B9aq%2FycCFIsbFi3DiQCOtHwAGDw7acobpkxF2xS3JJBV0yaX%2BuwfDTVxrKwlvUeqmsxAaObYcs1kTo&X-Amz-Signature=75ce3acbd23e5b03e978ed223df158a838b6091fb2fafdf84a386e6bb0435dd2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZEH5NA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwzNg9Px%2Fkr7eXFBOgMzkjkQ6NgYlXw4K9eNZpoMOrgwIgG7SNSqn7esZN8Nc3kwbrh0QyLb1EebRe4WSiHrx6kg8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUFb9c9g2iqsAtyTyrcA5K%2BHRzJWOfaQCjGq3FZmDjiuRC8QmybgY%2FxH2C3KkG%2BBUbcJmMLgU1syv8E%2BlpJqhbPTOB%2FVLm%2BJbB8QPUtspH%2FM0QYhyPBbx%2B9qqIgPielnEOhr%2FHeBhYlUxqFkzYM70JDI0ncWS7aTHYUNkpH5UObzI%2FoXbhDtVUYeZv3HcKGuy06N1aJFe925taA%2FNYhFA0zw%2BHWgRcDuoG%2F9124x%2BJuC7jVHS7m2dcPCZ0nO4Q507TEhuqyBzpSsGAbKh0Jwv5FfUlnJ9ml4rJDbshXqQXiH4Jy4XcRKwrjVA%2BJxQ756BgLPAbwCcFc48h3VZurdvhGHTCjk5kBRgcRo5yELqOKODQ9bpHHPb2QeIu%2BevnJqTYwxctibi75wN1w1X%2FKG5W%2F8fm6MmDHoCfjGBZHoBjRZIa0sYPxayCx%2FRV1Yn%2BDFSDAH%2BH4ugi6GGg8Z6TCpOd4906oG%2FbAcT9IgBGDZLMuxdvlW%2B8ta%2FeNpOGrIH69yeV4VOxdN%2FanbQ3U6%2BLHF7085gpv7Wwvqmbd4COB95f9wkTxV3XIB%2BiqNnlH71BjR543upUz8UqeGjuUaAXPHnhI8CDnyCa%2F8QhsRBM62xYkXhiOgebCXIHKlD3WF%2FcM3uHWaqSeJXa94dqVMKmG0L4GOqUBlBpfdv10wxy2n4mGLBvcqShR11o66lZMwBp4koGB%2B7AdjOpdq3vaGvOlJizmY3Pc6WOrXd1TL98GKZjg6JwNemjfRphPah4SRNhepLfJE6mLLz8tAWqdHzKu69EJjtMkncZ%2FOb76rG51s2%2B9aq%2FycCFIsbFi3DiQCOtHwAGDw7acobpkxF2xS3JJBV0yaX%2BuwfDTVxrKwlvUeqmsxAaObYcs1kTo&X-Amz-Signature=26f3234cb78be9fc7c435fcee7429c8043b3e7dece15456bc1206d0d0d897d1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZEH5NA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwzNg9Px%2Fkr7eXFBOgMzkjkQ6NgYlXw4K9eNZpoMOrgwIgG7SNSqn7esZN8Nc3kwbrh0QyLb1EebRe4WSiHrx6kg8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUFb9c9g2iqsAtyTyrcA5K%2BHRzJWOfaQCjGq3FZmDjiuRC8QmybgY%2FxH2C3KkG%2BBUbcJmMLgU1syv8E%2BlpJqhbPTOB%2FVLm%2BJbB8QPUtspH%2FM0QYhyPBbx%2B9qqIgPielnEOhr%2FHeBhYlUxqFkzYM70JDI0ncWS7aTHYUNkpH5UObzI%2FoXbhDtVUYeZv3HcKGuy06N1aJFe925taA%2FNYhFA0zw%2BHWgRcDuoG%2F9124x%2BJuC7jVHS7m2dcPCZ0nO4Q507TEhuqyBzpSsGAbKh0Jwv5FfUlnJ9ml4rJDbshXqQXiH4Jy4XcRKwrjVA%2BJxQ756BgLPAbwCcFc48h3VZurdvhGHTCjk5kBRgcRo5yELqOKODQ9bpHHPb2QeIu%2BevnJqTYwxctibi75wN1w1X%2FKG5W%2F8fm6MmDHoCfjGBZHoBjRZIa0sYPxayCx%2FRV1Yn%2BDFSDAH%2BH4ugi6GGg8Z6TCpOd4906oG%2FbAcT9IgBGDZLMuxdvlW%2B8ta%2FeNpOGrIH69yeV4VOxdN%2FanbQ3U6%2BLHF7085gpv7Wwvqmbd4COB95f9wkTxV3XIB%2BiqNnlH71BjR543upUz8UqeGjuUaAXPHnhI8CDnyCa%2F8QhsRBM62xYkXhiOgebCXIHKlD3WF%2FcM3uHWaqSeJXa94dqVMKmG0L4GOqUBlBpfdv10wxy2n4mGLBvcqShR11o66lZMwBp4koGB%2B7AdjOpdq3vaGvOlJizmY3Pc6WOrXd1TL98GKZjg6JwNemjfRphPah4SRNhepLfJE6mLLz8tAWqdHzKu69EJjtMkncZ%2FOb76rG51s2%2B9aq%2FycCFIsbFi3DiQCOtHwAGDw7acobpkxF2xS3JJBV0yaX%2BuwfDTVxrKwlvUeqmsxAaObYcs1kTo&X-Amz-Signature=f05b2a41f14168b77d0ec1e52af5271429abd4e6913485d9b73323ab93e19c74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZEH5NA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwzNg9Px%2Fkr7eXFBOgMzkjkQ6NgYlXw4K9eNZpoMOrgwIgG7SNSqn7esZN8Nc3kwbrh0QyLb1EebRe4WSiHrx6kg8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUFb9c9g2iqsAtyTyrcA5K%2BHRzJWOfaQCjGq3FZmDjiuRC8QmybgY%2FxH2C3KkG%2BBUbcJmMLgU1syv8E%2BlpJqhbPTOB%2FVLm%2BJbB8QPUtspH%2FM0QYhyPBbx%2B9qqIgPielnEOhr%2FHeBhYlUxqFkzYM70JDI0ncWS7aTHYUNkpH5UObzI%2FoXbhDtVUYeZv3HcKGuy06N1aJFe925taA%2FNYhFA0zw%2BHWgRcDuoG%2F9124x%2BJuC7jVHS7m2dcPCZ0nO4Q507TEhuqyBzpSsGAbKh0Jwv5FfUlnJ9ml4rJDbshXqQXiH4Jy4XcRKwrjVA%2BJxQ756BgLPAbwCcFc48h3VZurdvhGHTCjk5kBRgcRo5yELqOKODQ9bpHHPb2QeIu%2BevnJqTYwxctibi75wN1w1X%2FKG5W%2F8fm6MmDHoCfjGBZHoBjRZIa0sYPxayCx%2FRV1Yn%2BDFSDAH%2BH4ugi6GGg8Z6TCpOd4906oG%2FbAcT9IgBGDZLMuxdvlW%2B8ta%2FeNpOGrIH69yeV4VOxdN%2FanbQ3U6%2BLHF7085gpv7Wwvqmbd4COB95f9wkTxV3XIB%2BiqNnlH71BjR543upUz8UqeGjuUaAXPHnhI8CDnyCa%2F8QhsRBM62xYkXhiOgebCXIHKlD3WF%2FcM3uHWaqSeJXa94dqVMKmG0L4GOqUBlBpfdv10wxy2n4mGLBvcqShR11o66lZMwBp4koGB%2B7AdjOpdq3vaGvOlJizmY3Pc6WOrXd1TL98GKZjg6JwNemjfRphPah4SRNhepLfJE6mLLz8tAWqdHzKu69EJjtMkncZ%2FOb76rG51s2%2B9aq%2FycCFIsbFi3DiQCOtHwAGDw7acobpkxF2xS3JJBV0yaX%2BuwfDTVxrKwlvUeqmsxAaObYcs1kTo&X-Amz-Signature=d1cc5d2057f075105b6a74d21d83d8ae730c10b879ddce139268012c04c411ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
