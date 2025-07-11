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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLREO3X%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr4CeNimAJGEHZHW7qbdeEXcWU07bFO5BU6PijjD0pDgIhAKLoxRLRhkQK29CpnV6JGuW4jGwelxHSdmbb0xkqprpiKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyibL5bdCLfYyrqaPcq3ANSCIy3umaVHsy3y8yrS7cnYRxaGI0JE1Zt%2BbpLzqa1D7GI1yDyf8C8LmJLDIumXWPFQdsWyi45DUMSA1IrvljNCN7%2BMLfZ5vwryD3XhKdodu4jx56hJXwUEYkDBf0SugAIrY92I7L%2BRBfdImIHkmwDlJFjjhJyZDkfAF05J0DZ0vd2L8KKaZIq4IszxX3W0Z32gOTds%2BQnh5Wg9CXdTYnRNSjed3%2FVHtqUd6%2Fc9HgP0Kwfqy9waKfwc%2F40TJp%2BRzE16Wji5Sf1NqEgtqzLt5Hc8lJIE5fLl0xc3LJ22Pc75CsGbACoAz7jbYk4cQlPUfPhzkrQc7a7cScNeAFx8QvGk%2BYaa%2BLacV7Tkgt2n6qpLNkn49QFpcjp0lpTEaVdxdual7B3Gc2g2SMwzliBeCpmdmlSRVbzRT3pDEJ45Dut40xCebzyHOT56NacLnjjNLSWWgMFRiFEKnNb2nRe%2BSemrgntm3ZileuicJqYBfP2LfWh%2BkeN%2FZcofsH6RtP8eGpVm5YDYYEVOLidfcPSi4QFPSwYAWLolq%2Fo%2BL%2BuVGowpD2399akLNSt5CrRbgMs27kP5a2dI29On6D4AW81o%2BlyL9Q6qzTTwe%2F4rUe0EnZHcTn0cwKUCsBqM6hjnDDVqcXDBjqkAV%2FC%2BHIimNYMqR335HjkcOqMqqpGtoFK7CUqhSvVHLgpjEpv6h99bQTL0wyW84wwj0HHrInn3TlL6yOHXr%2BSoIQr%2BqRRTEoML89BoUl5pXfEFxd9bF%2FelJECacSE7JWMPdzZWMbCSl5iBMTl2Ca91IbeSvuA9X6k2ElbX%2F2kXga4gYPCoMK9FNWvO43ReCAggnH8FQEh00k1sDAGWv3KQ8R9uu1n&X-Amz-Signature=244b6865d3526931c2772e0ca21768e8664d4e9d1556cf22200b2bb77590af7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLREO3X%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr4CeNimAJGEHZHW7qbdeEXcWU07bFO5BU6PijjD0pDgIhAKLoxRLRhkQK29CpnV6JGuW4jGwelxHSdmbb0xkqprpiKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyibL5bdCLfYyrqaPcq3ANSCIy3umaVHsy3y8yrS7cnYRxaGI0JE1Zt%2BbpLzqa1D7GI1yDyf8C8LmJLDIumXWPFQdsWyi45DUMSA1IrvljNCN7%2BMLfZ5vwryD3XhKdodu4jx56hJXwUEYkDBf0SugAIrY92I7L%2BRBfdImIHkmwDlJFjjhJyZDkfAF05J0DZ0vd2L8KKaZIq4IszxX3W0Z32gOTds%2BQnh5Wg9CXdTYnRNSjed3%2FVHtqUd6%2Fc9HgP0Kwfqy9waKfwc%2F40TJp%2BRzE16Wji5Sf1NqEgtqzLt5Hc8lJIE5fLl0xc3LJ22Pc75CsGbACoAz7jbYk4cQlPUfPhzkrQc7a7cScNeAFx8QvGk%2BYaa%2BLacV7Tkgt2n6qpLNkn49QFpcjp0lpTEaVdxdual7B3Gc2g2SMwzliBeCpmdmlSRVbzRT3pDEJ45Dut40xCebzyHOT56NacLnjjNLSWWgMFRiFEKnNb2nRe%2BSemrgntm3ZileuicJqYBfP2LfWh%2BkeN%2FZcofsH6RtP8eGpVm5YDYYEVOLidfcPSi4QFPSwYAWLolq%2Fo%2BL%2BuVGowpD2399akLNSt5CrRbgMs27kP5a2dI29On6D4AW81o%2BlyL9Q6qzTTwe%2F4rUe0EnZHcTn0cwKUCsBqM6hjnDDVqcXDBjqkAV%2FC%2BHIimNYMqR335HjkcOqMqqpGtoFK7CUqhSvVHLgpjEpv6h99bQTL0wyW84wwj0HHrInn3TlL6yOHXr%2BSoIQr%2BqRRTEoML89BoUl5pXfEFxd9bF%2FelJECacSE7JWMPdzZWMbCSl5iBMTl2Ca91IbeSvuA9X6k2ElbX%2F2kXga4gYPCoMK9FNWvO43ReCAggnH8FQEh00k1sDAGWv3KQ8R9uu1n&X-Amz-Signature=ce797ae4bb941c82b064f7b7bff5b8d2930f1e42a016202218d008a4cf5af7ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLREO3X%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr4CeNimAJGEHZHW7qbdeEXcWU07bFO5BU6PijjD0pDgIhAKLoxRLRhkQK29CpnV6JGuW4jGwelxHSdmbb0xkqprpiKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyibL5bdCLfYyrqaPcq3ANSCIy3umaVHsy3y8yrS7cnYRxaGI0JE1Zt%2BbpLzqa1D7GI1yDyf8C8LmJLDIumXWPFQdsWyi45DUMSA1IrvljNCN7%2BMLfZ5vwryD3XhKdodu4jx56hJXwUEYkDBf0SugAIrY92I7L%2BRBfdImIHkmwDlJFjjhJyZDkfAF05J0DZ0vd2L8KKaZIq4IszxX3W0Z32gOTds%2BQnh5Wg9CXdTYnRNSjed3%2FVHtqUd6%2Fc9HgP0Kwfqy9waKfwc%2F40TJp%2BRzE16Wji5Sf1NqEgtqzLt5Hc8lJIE5fLl0xc3LJ22Pc75CsGbACoAz7jbYk4cQlPUfPhzkrQc7a7cScNeAFx8QvGk%2BYaa%2BLacV7Tkgt2n6qpLNkn49QFpcjp0lpTEaVdxdual7B3Gc2g2SMwzliBeCpmdmlSRVbzRT3pDEJ45Dut40xCebzyHOT56NacLnjjNLSWWgMFRiFEKnNb2nRe%2BSemrgntm3ZileuicJqYBfP2LfWh%2BkeN%2FZcofsH6RtP8eGpVm5YDYYEVOLidfcPSi4QFPSwYAWLolq%2Fo%2BL%2BuVGowpD2399akLNSt5CrRbgMs27kP5a2dI29On6D4AW81o%2BlyL9Q6qzTTwe%2F4rUe0EnZHcTn0cwKUCsBqM6hjnDDVqcXDBjqkAV%2FC%2BHIimNYMqR335HjkcOqMqqpGtoFK7CUqhSvVHLgpjEpv6h99bQTL0wyW84wwj0HHrInn3TlL6yOHXr%2BSoIQr%2BqRRTEoML89BoUl5pXfEFxd9bF%2FelJECacSE7JWMPdzZWMbCSl5iBMTl2Ca91IbeSvuA9X6k2ElbX%2F2kXga4gYPCoMK9FNWvO43ReCAggnH8FQEh00k1sDAGWv3KQ8R9uu1n&X-Amz-Signature=9285f7d08338a8d557af4ecec2106e197559a3f5b57b818b34bcdd57afeabf13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLREO3X%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr4CeNimAJGEHZHW7qbdeEXcWU07bFO5BU6PijjD0pDgIhAKLoxRLRhkQK29CpnV6JGuW4jGwelxHSdmbb0xkqprpiKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyibL5bdCLfYyrqaPcq3ANSCIy3umaVHsy3y8yrS7cnYRxaGI0JE1Zt%2BbpLzqa1D7GI1yDyf8C8LmJLDIumXWPFQdsWyi45DUMSA1IrvljNCN7%2BMLfZ5vwryD3XhKdodu4jx56hJXwUEYkDBf0SugAIrY92I7L%2BRBfdImIHkmwDlJFjjhJyZDkfAF05J0DZ0vd2L8KKaZIq4IszxX3W0Z32gOTds%2BQnh5Wg9CXdTYnRNSjed3%2FVHtqUd6%2Fc9HgP0Kwfqy9waKfwc%2F40TJp%2BRzE16Wji5Sf1NqEgtqzLt5Hc8lJIE5fLl0xc3LJ22Pc75CsGbACoAz7jbYk4cQlPUfPhzkrQc7a7cScNeAFx8QvGk%2BYaa%2BLacV7Tkgt2n6qpLNkn49QFpcjp0lpTEaVdxdual7B3Gc2g2SMwzliBeCpmdmlSRVbzRT3pDEJ45Dut40xCebzyHOT56NacLnjjNLSWWgMFRiFEKnNb2nRe%2BSemrgntm3ZileuicJqYBfP2LfWh%2BkeN%2FZcofsH6RtP8eGpVm5YDYYEVOLidfcPSi4QFPSwYAWLolq%2Fo%2BL%2BuVGowpD2399akLNSt5CrRbgMs27kP5a2dI29On6D4AW81o%2BlyL9Q6qzTTwe%2F4rUe0EnZHcTn0cwKUCsBqM6hjnDDVqcXDBjqkAV%2FC%2BHIimNYMqR335HjkcOqMqqpGtoFK7CUqhSvVHLgpjEpv6h99bQTL0wyW84wwj0HHrInn3TlL6yOHXr%2BSoIQr%2BqRRTEoML89BoUl5pXfEFxd9bF%2FelJECacSE7JWMPdzZWMbCSl5iBMTl2Ca91IbeSvuA9X6k2ElbX%2F2kXga4gYPCoMK9FNWvO43ReCAggnH8FQEh00k1sDAGWv3KQ8R9uu1n&X-Amz-Signature=48eedbcde12d5f8a57b398f00f2fecdef19c3fb72e2173b991e7588941a34f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLREO3X%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr4CeNimAJGEHZHW7qbdeEXcWU07bFO5BU6PijjD0pDgIhAKLoxRLRhkQK29CpnV6JGuW4jGwelxHSdmbb0xkqprpiKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyibL5bdCLfYyrqaPcq3ANSCIy3umaVHsy3y8yrS7cnYRxaGI0JE1Zt%2BbpLzqa1D7GI1yDyf8C8LmJLDIumXWPFQdsWyi45DUMSA1IrvljNCN7%2BMLfZ5vwryD3XhKdodu4jx56hJXwUEYkDBf0SugAIrY92I7L%2BRBfdImIHkmwDlJFjjhJyZDkfAF05J0DZ0vd2L8KKaZIq4IszxX3W0Z32gOTds%2BQnh5Wg9CXdTYnRNSjed3%2FVHtqUd6%2Fc9HgP0Kwfqy9waKfwc%2F40TJp%2BRzE16Wji5Sf1NqEgtqzLt5Hc8lJIE5fLl0xc3LJ22Pc75CsGbACoAz7jbYk4cQlPUfPhzkrQc7a7cScNeAFx8QvGk%2BYaa%2BLacV7Tkgt2n6qpLNkn49QFpcjp0lpTEaVdxdual7B3Gc2g2SMwzliBeCpmdmlSRVbzRT3pDEJ45Dut40xCebzyHOT56NacLnjjNLSWWgMFRiFEKnNb2nRe%2BSemrgntm3ZileuicJqYBfP2LfWh%2BkeN%2FZcofsH6RtP8eGpVm5YDYYEVOLidfcPSi4QFPSwYAWLolq%2Fo%2BL%2BuVGowpD2399akLNSt5CrRbgMs27kP5a2dI29On6D4AW81o%2BlyL9Q6qzTTwe%2F4rUe0EnZHcTn0cwKUCsBqM6hjnDDVqcXDBjqkAV%2FC%2BHIimNYMqR335HjkcOqMqqpGtoFK7CUqhSvVHLgpjEpv6h99bQTL0wyW84wwj0HHrInn3TlL6yOHXr%2BSoIQr%2BqRRTEoML89BoUl5pXfEFxd9bF%2FelJECacSE7JWMPdzZWMbCSl5iBMTl2Ca91IbeSvuA9X6k2ElbX%2F2kXga4gYPCoMK9FNWvO43ReCAggnH8FQEh00k1sDAGWv3KQ8R9uu1n&X-Amz-Signature=1e20da00206e9acb8d06780ee378ccd316c7580919ae413513d5a46db9ee877e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLREO3X%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr4CeNimAJGEHZHW7qbdeEXcWU07bFO5BU6PijjD0pDgIhAKLoxRLRhkQK29CpnV6JGuW4jGwelxHSdmbb0xkqprpiKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyibL5bdCLfYyrqaPcq3ANSCIy3umaVHsy3y8yrS7cnYRxaGI0JE1Zt%2BbpLzqa1D7GI1yDyf8C8LmJLDIumXWPFQdsWyi45DUMSA1IrvljNCN7%2BMLfZ5vwryD3XhKdodu4jx56hJXwUEYkDBf0SugAIrY92I7L%2BRBfdImIHkmwDlJFjjhJyZDkfAF05J0DZ0vd2L8KKaZIq4IszxX3W0Z32gOTds%2BQnh5Wg9CXdTYnRNSjed3%2FVHtqUd6%2Fc9HgP0Kwfqy9waKfwc%2F40TJp%2BRzE16Wji5Sf1NqEgtqzLt5Hc8lJIE5fLl0xc3LJ22Pc75CsGbACoAz7jbYk4cQlPUfPhzkrQc7a7cScNeAFx8QvGk%2BYaa%2BLacV7Tkgt2n6qpLNkn49QFpcjp0lpTEaVdxdual7B3Gc2g2SMwzliBeCpmdmlSRVbzRT3pDEJ45Dut40xCebzyHOT56NacLnjjNLSWWgMFRiFEKnNb2nRe%2BSemrgntm3ZileuicJqYBfP2LfWh%2BkeN%2FZcofsH6RtP8eGpVm5YDYYEVOLidfcPSi4QFPSwYAWLolq%2Fo%2BL%2BuVGowpD2399akLNSt5CrRbgMs27kP5a2dI29On6D4AW81o%2BlyL9Q6qzTTwe%2F4rUe0EnZHcTn0cwKUCsBqM6hjnDDVqcXDBjqkAV%2FC%2BHIimNYMqR335HjkcOqMqqpGtoFK7CUqhSvVHLgpjEpv6h99bQTL0wyW84wwj0HHrInn3TlL6yOHXr%2BSoIQr%2BqRRTEoML89BoUl5pXfEFxd9bF%2FelJECacSE7JWMPdzZWMbCSl5iBMTl2Ca91IbeSvuA9X6k2ElbX%2F2kXga4gYPCoMK9FNWvO43ReCAggnH8FQEh00k1sDAGWv3KQ8R9uu1n&X-Amz-Signature=b30645a19dfb71ec419428caba8d5a90d24d4de5e50da0ebd6540d8a4681b9c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLREO3X%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr4CeNimAJGEHZHW7qbdeEXcWU07bFO5BU6PijjD0pDgIhAKLoxRLRhkQK29CpnV6JGuW4jGwelxHSdmbb0xkqprpiKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyibL5bdCLfYyrqaPcq3ANSCIy3umaVHsy3y8yrS7cnYRxaGI0JE1Zt%2BbpLzqa1D7GI1yDyf8C8LmJLDIumXWPFQdsWyi45DUMSA1IrvljNCN7%2BMLfZ5vwryD3XhKdodu4jx56hJXwUEYkDBf0SugAIrY92I7L%2BRBfdImIHkmwDlJFjjhJyZDkfAF05J0DZ0vd2L8KKaZIq4IszxX3W0Z32gOTds%2BQnh5Wg9CXdTYnRNSjed3%2FVHtqUd6%2Fc9HgP0Kwfqy9waKfwc%2F40TJp%2BRzE16Wji5Sf1NqEgtqzLt5Hc8lJIE5fLl0xc3LJ22Pc75CsGbACoAz7jbYk4cQlPUfPhzkrQc7a7cScNeAFx8QvGk%2BYaa%2BLacV7Tkgt2n6qpLNkn49QFpcjp0lpTEaVdxdual7B3Gc2g2SMwzliBeCpmdmlSRVbzRT3pDEJ45Dut40xCebzyHOT56NacLnjjNLSWWgMFRiFEKnNb2nRe%2BSemrgntm3ZileuicJqYBfP2LfWh%2BkeN%2FZcofsH6RtP8eGpVm5YDYYEVOLidfcPSi4QFPSwYAWLolq%2Fo%2BL%2BuVGowpD2399akLNSt5CrRbgMs27kP5a2dI29On6D4AW81o%2BlyL9Q6qzTTwe%2F4rUe0EnZHcTn0cwKUCsBqM6hjnDDVqcXDBjqkAV%2FC%2BHIimNYMqR335HjkcOqMqqpGtoFK7CUqhSvVHLgpjEpv6h99bQTL0wyW84wwj0HHrInn3TlL6yOHXr%2BSoIQr%2BqRRTEoML89BoUl5pXfEFxd9bF%2FelJECacSE7JWMPdzZWMbCSl5iBMTl2Ca91IbeSvuA9X6k2ElbX%2F2kXga4gYPCoMK9FNWvO43ReCAggnH8FQEh00k1sDAGWv3KQ8R9uu1n&X-Amz-Signature=e4747dc766a5aa97a900493bdf3051406fd3853d7bcdc6bbbc33f17da82abbf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLREO3X%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr4CeNimAJGEHZHW7qbdeEXcWU07bFO5BU6PijjD0pDgIhAKLoxRLRhkQK29CpnV6JGuW4jGwelxHSdmbb0xkqprpiKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyibL5bdCLfYyrqaPcq3ANSCIy3umaVHsy3y8yrS7cnYRxaGI0JE1Zt%2BbpLzqa1D7GI1yDyf8C8LmJLDIumXWPFQdsWyi45DUMSA1IrvljNCN7%2BMLfZ5vwryD3XhKdodu4jx56hJXwUEYkDBf0SugAIrY92I7L%2BRBfdImIHkmwDlJFjjhJyZDkfAF05J0DZ0vd2L8KKaZIq4IszxX3W0Z32gOTds%2BQnh5Wg9CXdTYnRNSjed3%2FVHtqUd6%2Fc9HgP0Kwfqy9waKfwc%2F40TJp%2BRzE16Wji5Sf1NqEgtqzLt5Hc8lJIE5fLl0xc3LJ22Pc75CsGbACoAz7jbYk4cQlPUfPhzkrQc7a7cScNeAFx8QvGk%2BYaa%2BLacV7Tkgt2n6qpLNkn49QFpcjp0lpTEaVdxdual7B3Gc2g2SMwzliBeCpmdmlSRVbzRT3pDEJ45Dut40xCebzyHOT56NacLnjjNLSWWgMFRiFEKnNb2nRe%2BSemrgntm3ZileuicJqYBfP2LfWh%2BkeN%2FZcofsH6RtP8eGpVm5YDYYEVOLidfcPSi4QFPSwYAWLolq%2Fo%2BL%2BuVGowpD2399akLNSt5CrRbgMs27kP5a2dI29On6D4AW81o%2BlyL9Q6qzTTwe%2F4rUe0EnZHcTn0cwKUCsBqM6hjnDDVqcXDBjqkAV%2FC%2BHIimNYMqR335HjkcOqMqqpGtoFK7CUqhSvVHLgpjEpv6h99bQTL0wyW84wwj0HHrInn3TlL6yOHXr%2BSoIQr%2BqRRTEoML89BoUl5pXfEFxd9bF%2FelJECacSE7JWMPdzZWMbCSl5iBMTl2Ca91IbeSvuA9X6k2ElbX%2F2kXga4gYPCoMK9FNWvO43ReCAggnH8FQEh00k1sDAGWv3KQ8R9uu1n&X-Amz-Signature=f5356b98af337e8c20edd9cf197806bd7efa435f79deae960dfcc934be0076ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
