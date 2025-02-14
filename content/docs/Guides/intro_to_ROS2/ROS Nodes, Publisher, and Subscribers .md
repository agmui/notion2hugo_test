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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DUTLPRQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYsBLf7pRggGADjk4Oa0bc60jcguGNaZxJr8TEmZC16QIhALV1tVWPMHkSyhGNgNHTZzm1Xg7P0ll9ndDaNs2ew1TZKv8DCCEQABoMNjM3NDIzMTgzODA1IgxO0cPxQWt9N6qzUP0q3AME8DM%2BtRp0kasQDFpAitSRuZNVxddXW3OrMtdzY7G2rdDc9eYoaIk3wbz6e9ISeeUpzfGQKbNp3jBb6Xx9sSVo11QPopYX%2FIMUO5rIIK3B0u4N01KibF4zI%2Fs4p7%2Fn3vy7cPaktLQMl%2B9uC4mxmnvo7Zb2ky8mhcjx9RrdzEYGvWgbdU%2Fu4ds0YCWb0cw8cSpCdO%2FQ%2BiutmuW1ey1C%2FP6IhdxQDvD65X%2BqOkYFiFmiUBe0UEG0Nm1VydDlAMmwgbYW%2FNiwnb0%2F%2BY9ikp1ZHALb8lQ2%2FbvJzK4Bf9UytmaOJcHyaagvgd3RmyvSYcu6KZRQKo7%2FJ7eVn1sbRHUZexK%2Bb%2BX1YpOHYD%2FlGXNP%2FVISm12tkrPCE42HrEG%2BoY41rmugP54%2BTsoArTGlMGvwutxutlGDD9Zqw%2BlsX9T0HzjZs3PkYfQbK74smik7TYCfZKkxDHOaAEiTTAKVfL%2B%2FF8CQ6BHhEaRplm6Q7c3upI7WWG%2BOu4DzB9VgHIj3BhstEKutfqS3GvUEbND3EU8kV9lBC%2BNRR1aL1%2FjkVxB6snXcLFiT0kYFqZWrPNxvJ%2BPXtAjn4FUZPkA2UIjZs6F4iEKJ1dEOEpHO%2BiXW8Ae7%2F4px6fBUbYgWWMQRrzMrmDD3g7q9BjqkAfCzrF4jnLNHn1AXz0ZELN6yzoPmIoTkC6wrRpGAXaiGhcf4%2BOI5zq8SKOQRpd9GVU%2FlmEy41UKmQ%2BYkHX6MOFpCB4XcUNoRyftX7QzMkZ%2FGifv4IvLfrX2kc%2F1lkFSm9BnkgQu%2BHsxFMjSlHET7xHVRJ4zKA8iwy4iKhkmoZKKzD6yq83Pk9jJfvYGSLrvQte92dV3OsOJiqB5MZeQyFwi5JH64&X-Amz-Signature=9df1fcbdeb01b6f480118a26b96e4c552aba9311abb53ed27c70e42141fe09b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DUTLPRQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYsBLf7pRggGADjk4Oa0bc60jcguGNaZxJr8TEmZC16QIhALV1tVWPMHkSyhGNgNHTZzm1Xg7P0ll9ndDaNs2ew1TZKv8DCCEQABoMNjM3NDIzMTgzODA1IgxO0cPxQWt9N6qzUP0q3AME8DM%2BtRp0kasQDFpAitSRuZNVxddXW3OrMtdzY7G2rdDc9eYoaIk3wbz6e9ISeeUpzfGQKbNp3jBb6Xx9sSVo11QPopYX%2FIMUO5rIIK3B0u4N01KibF4zI%2Fs4p7%2Fn3vy7cPaktLQMl%2B9uC4mxmnvo7Zb2ky8mhcjx9RrdzEYGvWgbdU%2Fu4ds0YCWb0cw8cSpCdO%2FQ%2BiutmuW1ey1C%2FP6IhdxQDvD65X%2BqOkYFiFmiUBe0UEG0Nm1VydDlAMmwgbYW%2FNiwnb0%2F%2BY9ikp1ZHALb8lQ2%2FbvJzK4Bf9UytmaOJcHyaagvgd3RmyvSYcu6KZRQKo7%2FJ7eVn1sbRHUZexK%2Bb%2BX1YpOHYD%2FlGXNP%2FVISm12tkrPCE42HrEG%2BoY41rmugP54%2BTsoArTGlMGvwutxutlGDD9Zqw%2BlsX9T0HzjZs3PkYfQbK74smik7TYCfZKkxDHOaAEiTTAKVfL%2B%2FF8CQ6BHhEaRplm6Q7c3upI7WWG%2BOu4DzB9VgHIj3BhstEKutfqS3GvUEbND3EU8kV9lBC%2BNRR1aL1%2FjkVxB6snXcLFiT0kYFqZWrPNxvJ%2BPXtAjn4FUZPkA2UIjZs6F4iEKJ1dEOEpHO%2BiXW8Ae7%2F4px6fBUbYgWWMQRrzMrmDD3g7q9BjqkAfCzrF4jnLNHn1AXz0ZELN6yzoPmIoTkC6wrRpGAXaiGhcf4%2BOI5zq8SKOQRpd9GVU%2FlmEy41UKmQ%2BYkHX6MOFpCB4XcUNoRyftX7QzMkZ%2FGifv4IvLfrX2kc%2F1lkFSm9BnkgQu%2BHsxFMjSlHET7xHVRJ4zKA8iwy4iKhkmoZKKzD6yq83Pk9jJfvYGSLrvQte92dV3OsOJiqB5MZeQyFwi5JH64&X-Amz-Signature=1bd9355be38824dabf9056411f9e79f5ac9abc5afa4f62a824bacea359080997&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DUTLPRQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYsBLf7pRggGADjk4Oa0bc60jcguGNaZxJr8TEmZC16QIhALV1tVWPMHkSyhGNgNHTZzm1Xg7P0ll9ndDaNs2ew1TZKv8DCCEQABoMNjM3NDIzMTgzODA1IgxO0cPxQWt9N6qzUP0q3AME8DM%2BtRp0kasQDFpAitSRuZNVxddXW3OrMtdzY7G2rdDc9eYoaIk3wbz6e9ISeeUpzfGQKbNp3jBb6Xx9sSVo11QPopYX%2FIMUO5rIIK3B0u4N01KibF4zI%2Fs4p7%2Fn3vy7cPaktLQMl%2B9uC4mxmnvo7Zb2ky8mhcjx9RrdzEYGvWgbdU%2Fu4ds0YCWb0cw8cSpCdO%2FQ%2BiutmuW1ey1C%2FP6IhdxQDvD65X%2BqOkYFiFmiUBe0UEG0Nm1VydDlAMmwgbYW%2FNiwnb0%2F%2BY9ikp1ZHALb8lQ2%2FbvJzK4Bf9UytmaOJcHyaagvgd3RmyvSYcu6KZRQKo7%2FJ7eVn1sbRHUZexK%2Bb%2BX1YpOHYD%2FlGXNP%2FVISm12tkrPCE42HrEG%2BoY41rmugP54%2BTsoArTGlMGvwutxutlGDD9Zqw%2BlsX9T0HzjZs3PkYfQbK74smik7TYCfZKkxDHOaAEiTTAKVfL%2B%2FF8CQ6BHhEaRplm6Q7c3upI7WWG%2BOu4DzB9VgHIj3BhstEKutfqS3GvUEbND3EU8kV9lBC%2BNRR1aL1%2FjkVxB6snXcLFiT0kYFqZWrPNxvJ%2BPXtAjn4FUZPkA2UIjZs6F4iEKJ1dEOEpHO%2BiXW8Ae7%2F4px6fBUbYgWWMQRrzMrmDD3g7q9BjqkAfCzrF4jnLNHn1AXz0ZELN6yzoPmIoTkC6wrRpGAXaiGhcf4%2BOI5zq8SKOQRpd9GVU%2FlmEy41UKmQ%2BYkHX6MOFpCB4XcUNoRyftX7QzMkZ%2FGifv4IvLfrX2kc%2F1lkFSm9BnkgQu%2BHsxFMjSlHET7xHVRJ4zKA8iwy4iKhkmoZKKzD6yq83Pk9jJfvYGSLrvQte92dV3OsOJiqB5MZeQyFwi5JH64&X-Amz-Signature=28a0b30703e5dd1f1ae538b0fb5182e9b412ae8d3c592f3a6caf790d1f266e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DUTLPRQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYsBLf7pRggGADjk4Oa0bc60jcguGNaZxJr8TEmZC16QIhALV1tVWPMHkSyhGNgNHTZzm1Xg7P0ll9ndDaNs2ew1TZKv8DCCEQABoMNjM3NDIzMTgzODA1IgxO0cPxQWt9N6qzUP0q3AME8DM%2BtRp0kasQDFpAitSRuZNVxddXW3OrMtdzY7G2rdDc9eYoaIk3wbz6e9ISeeUpzfGQKbNp3jBb6Xx9sSVo11QPopYX%2FIMUO5rIIK3B0u4N01KibF4zI%2Fs4p7%2Fn3vy7cPaktLQMl%2B9uC4mxmnvo7Zb2ky8mhcjx9RrdzEYGvWgbdU%2Fu4ds0YCWb0cw8cSpCdO%2FQ%2BiutmuW1ey1C%2FP6IhdxQDvD65X%2BqOkYFiFmiUBe0UEG0Nm1VydDlAMmwgbYW%2FNiwnb0%2F%2BY9ikp1ZHALb8lQ2%2FbvJzK4Bf9UytmaOJcHyaagvgd3RmyvSYcu6KZRQKo7%2FJ7eVn1sbRHUZexK%2Bb%2BX1YpOHYD%2FlGXNP%2FVISm12tkrPCE42HrEG%2BoY41rmugP54%2BTsoArTGlMGvwutxutlGDD9Zqw%2BlsX9T0HzjZs3PkYfQbK74smik7TYCfZKkxDHOaAEiTTAKVfL%2B%2FF8CQ6BHhEaRplm6Q7c3upI7WWG%2BOu4DzB9VgHIj3BhstEKutfqS3GvUEbND3EU8kV9lBC%2BNRR1aL1%2FjkVxB6snXcLFiT0kYFqZWrPNxvJ%2BPXtAjn4FUZPkA2UIjZs6F4iEKJ1dEOEpHO%2BiXW8Ae7%2F4px6fBUbYgWWMQRrzMrmDD3g7q9BjqkAfCzrF4jnLNHn1AXz0ZELN6yzoPmIoTkC6wrRpGAXaiGhcf4%2BOI5zq8SKOQRpd9GVU%2FlmEy41UKmQ%2BYkHX6MOFpCB4XcUNoRyftX7QzMkZ%2FGifv4IvLfrX2kc%2F1lkFSm9BnkgQu%2BHsxFMjSlHET7xHVRJ4zKA8iwy4iKhkmoZKKzD6yq83Pk9jJfvYGSLrvQte92dV3OsOJiqB5MZeQyFwi5JH64&X-Amz-Signature=2937b6e91a0610f93252b5a2541c32a8ec1d679d0b9c4001ca2796128c5d6721&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DUTLPRQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYsBLf7pRggGADjk4Oa0bc60jcguGNaZxJr8TEmZC16QIhALV1tVWPMHkSyhGNgNHTZzm1Xg7P0ll9ndDaNs2ew1TZKv8DCCEQABoMNjM3NDIzMTgzODA1IgxO0cPxQWt9N6qzUP0q3AME8DM%2BtRp0kasQDFpAitSRuZNVxddXW3OrMtdzY7G2rdDc9eYoaIk3wbz6e9ISeeUpzfGQKbNp3jBb6Xx9sSVo11QPopYX%2FIMUO5rIIK3B0u4N01KibF4zI%2Fs4p7%2Fn3vy7cPaktLQMl%2B9uC4mxmnvo7Zb2ky8mhcjx9RrdzEYGvWgbdU%2Fu4ds0YCWb0cw8cSpCdO%2FQ%2BiutmuW1ey1C%2FP6IhdxQDvD65X%2BqOkYFiFmiUBe0UEG0Nm1VydDlAMmwgbYW%2FNiwnb0%2F%2BY9ikp1ZHALb8lQ2%2FbvJzK4Bf9UytmaOJcHyaagvgd3RmyvSYcu6KZRQKo7%2FJ7eVn1sbRHUZexK%2Bb%2BX1YpOHYD%2FlGXNP%2FVISm12tkrPCE42HrEG%2BoY41rmugP54%2BTsoArTGlMGvwutxutlGDD9Zqw%2BlsX9T0HzjZs3PkYfQbK74smik7TYCfZKkxDHOaAEiTTAKVfL%2B%2FF8CQ6BHhEaRplm6Q7c3upI7WWG%2BOu4DzB9VgHIj3BhstEKutfqS3GvUEbND3EU8kV9lBC%2BNRR1aL1%2FjkVxB6snXcLFiT0kYFqZWrPNxvJ%2BPXtAjn4FUZPkA2UIjZs6F4iEKJ1dEOEpHO%2BiXW8Ae7%2F4px6fBUbYgWWMQRrzMrmDD3g7q9BjqkAfCzrF4jnLNHn1AXz0ZELN6yzoPmIoTkC6wrRpGAXaiGhcf4%2BOI5zq8SKOQRpd9GVU%2FlmEy41UKmQ%2BYkHX6MOFpCB4XcUNoRyftX7QzMkZ%2FGifv4IvLfrX2kc%2F1lkFSm9BnkgQu%2BHsxFMjSlHET7xHVRJ4zKA8iwy4iKhkmoZKKzD6yq83Pk9jJfvYGSLrvQte92dV3OsOJiqB5MZeQyFwi5JH64&X-Amz-Signature=701dc06d4cf88dc7c3bc6d3cc81dc64fcd649daf5af9d473d0637149a3a3b018&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DUTLPRQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYsBLf7pRggGADjk4Oa0bc60jcguGNaZxJr8TEmZC16QIhALV1tVWPMHkSyhGNgNHTZzm1Xg7P0ll9ndDaNs2ew1TZKv8DCCEQABoMNjM3NDIzMTgzODA1IgxO0cPxQWt9N6qzUP0q3AME8DM%2BtRp0kasQDFpAitSRuZNVxddXW3OrMtdzY7G2rdDc9eYoaIk3wbz6e9ISeeUpzfGQKbNp3jBb6Xx9sSVo11QPopYX%2FIMUO5rIIK3B0u4N01KibF4zI%2Fs4p7%2Fn3vy7cPaktLQMl%2B9uC4mxmnvo7Zb2ky8mhcjx9RrdzEYGvWgbdU%2Fu4ds0YCWb0cw8cSpCdO%2FQ%2BiutmuW1ey1C%2FP6IhdxQDvD65X%2BqOkYFiFmiUBe0UEG0Nm1VydDlAMmwgbYW%2FNiwnb0%2F%2BY9ikp1ZHALb8lQ2%2FbvJzK4Bf9UytmaOJcHyaagvgd3RmyvSYcu6KZRQKo7%2FJ7eVn1sbRHUZexK%2Bb%2BX1YpOHYD%2FlGXNP%2FVISm12tkrPCE42HrEG%2BoY41rmugP54%2BTsoArTGlMGvwutxutlGDD9Zqw%2BlsX9T0HzjZs3PkYfQbK74smik7TYCfZKkxDHOaAEiTTAKVfL%2B%2FF8CQ6BHhEaRplm6Q7c3upI7WWG%2BOu4DzB9VgHIj3BhstEKutfqS3GvUEbND3EU8kV9lBC%2BNRR1aL1%2FjkVxB6snXcLFiT0kYFqZWrPNxvJ%2BPXtAjn4FUZPkA2UIjZs6F4iEKJ1dEOEpHO%2BiXW8Ae7%2F4px6fBUbYgWWMQRrzMrmDD3g7q9BjqkAfCzrF4jnLNHn1AXz0ZELN6yzoPmIoTkC6wrRpGAXaiGhcf4%2BOI5zq8SKOQRpd9GVU%2FlmEy41UKmQ%2BYkHX6MOFpCB4XcUNoRyftX7QzMkZ%2FGifv4IvLfrX2kc%2F1lkFSm9BnkgQu%2BHsxFMjSlHET7xHVRJ4zKA8iwy4iKhkmoZKKzD6yq83Pk9jJfvYGSLrvQte92dV3OsOJiqB5MZeQyFwi5JH64&X-Amz-Signature=f5ca41b4fc9553f0bb1a15b6f8229f5492975ac5395709daf1ae1b009419e2c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DUTLPRQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYsBLf7pRggGADjk4Oa0bc60jcguGNaZxJr8TEmZC16QIhALV1tVWPMHkSyhGNgNHTZzm1Xg7P0ll9ndDaNs2ew1TZKv8DCCEQABoMNjM3NDIzMTgzODA1IgxO0cPxQWt9N6qzUP0q3AME8DM%2BtRp0kasQDFpAitSRuZNVxddXW3OrMtdzY7G2rdDc9eYoaIk3wbz6e9ISeeUpzfGQKbNp3jBb6Xx9sSVo11QPopYX%2FIMUO5rIIK3B0u4N01KibF4zI%2Fs4p7%2Fn3vy7cPaktLQMl%2B9uC4mxmnvo7Zb2ky8mhcjx9RrdzEYGvWgbdU%2Fu4ds0YCWb0cw8cSpCdO%2FQ%2BiutmuW1ey1C%2FP6IhdxQDvD65X%2BqOkYFiFmiUBe0UEG0Nm1VydDlAMmwgbYW%2FNiwnb0%2F%2BY9ikp1ZHALb8lQ2%2FbvJzK4Bf9UytmaOJcHyaagvgd3RmyvSYcu6KZRQKo7%2FJ7eVn1sbRHUZexK%2Bb%2BX1YpOHYD%2FlGXNP%2FVISm12tkrPCE42HrEG%2BoY41rmugP54%2BTsoArTGlMGvwutxutlGDD9Zqw%2BlsX9T0HzjZs3PkYfQbK74smik7TYCfZKkxDHOaAEiTTAKVfL%2B%2FF8CQ6BHhEaRplm6Q7c3upI7WWG%2BOu4DzB9VgHIj3BhstEKutfqS3GvUEbND3EU8kV9lBC%2BNRR1aL1%2FjkVxB6snXcLFiT0kYFqZWrPNxvJ%2BPXtAjn4FUZPkA2UIjZs6F4iEKJ1dEOEpHO%2BiXW8Ae7%2F4px6fBUbYgWWMQRrzMrmDD3g7q9BjqkAfCzrF4jnLNHn1AXz0ZELN6yzoPmIoTkC6wrRpGAXaiGhcf4%2BOI5zq8SKOQRpd9GVU%2FlmEy41UKmQ%2BYkHX6MOFpCB4XcUNoRyftX7QzMkZ%2FGifv4IvLfrX2kc%2F1lkFSm9BnkgQu%2BHsxFMjSlHET7xHVRJ4zKA8iwy4iKhkmoZKKzD6yq83Pk9jJfvYGSLrvQte92dV3OsOJiqB5MZeQyFwi5JH64&X-Amz-Signature=c367f1adff30b6a34a9f9e90d318a54cf4fd5f1a0230ddaab15caaa8e978c4b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DUTLPRQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYsBLf7pRggGADjk4Oa0bc60jcguGNaZxJr8TEmZC16QIhALV1tVWPMHkSyhGNgNHTZzm1Xg7P0ll9ndDaNs2ew1TZKv8DCCEQABoMNjM3NDIzMTgzODA1IgxO0cPxQWt9N6qzUP0q3AME8DM%2BtRp0kasQDFpAitSRuZNVxddXW3OrMtdzY7G2rdDc9eYoaIk3wbz6e9ISeeUpzfGQKbNp3jBb6Xx9sSVo11QPopYX%2FIMUO5rIIK3B0u4N01KibF4zI%2Fs4p7%2Fn3vy7cPaktLQMl%2B9uC4mxmnvo7Zb2ky8mhcjx9RrdzEYGvWgbdU%2Fu4ds0YCWb0cw8cSpCdO%2FQ%2BiutmuW1ey1C%2FP6IhdxQDvD65X%2BqOkYFiFmiUBe0UEG0Nm1VydDlAMmwgbYW%2FNiwnb0%2F%2BY9ikp1ZHALb8lQ2%2FbvJzK4Bf9UytmaOJcHyaagvgd3RmyvSYcu6KZRQKo7%2FJ7eVn1sbRHUZexK%2Bb%2BX1YpOHYD%2FlGXNP%2FVISm12tkrPCE42HrEG%2BoY41rmugP54%2BTsoArTGlMGvwutxutlGDD9Zqw%2BlsX9T0HzjZs3PkYfQbK74smik7TYCfZKkxDHOaAEiTTAKVfL%2B%2FF8CQ6BHhEaRplm6Q7c3upI7WWG%2BOu4DzB9VgHIj3BhstEKutfqS3GvUEbND3EU8kV9lBC%2BNRR1aL1%2FjkVxB6snXcLFiT0kYFqZWrPNxvJ%2BPXtAjn4FUZPkA2UIjZs6F4iEKJ1dEOEpHO%2BiXW8Ae7%2F4px6fBUbYgWWMQRrzMrmDD3g7q9BjqkAfCzrF4jnLNHn1AXz0ZELN6yzoPmIoTkC6wrRpGAXaiGhcf4%2BOI5zq8SKOQRpd9GVU%2FlmEy41UKmQ%2BYkHX6MOFpCB4XcUNoRyftX7QzMkZ%2FGifv4IvLfrX2kc%2F1lkFSm9BnkgQu%2BHsxFMjSlHET7xHVRJ4zKA8iwy4iKhkmoZKKzD6yq83Pk9jJfvYGSLrvQte92dV3OsOJiqB5MZeQyFwi5JH64&X-Amz-Signature=c757eab4b6e8268b5c7063a9bb97c530b63d6e9be89cb87e44a146e9978ef3fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
