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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RWT3N2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgp%2FlWd1kTFYtRnn6wTV2cpXEyQd0NTSacdnIHU54LhAiAFp1Q5FhVosLUJk7iWz%2FgblebrKrDnci6zd19f%2F2vp7CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwYFZDOP%2BZBOMLqYOKtwDyJXubuNKnv35vxgvKT2bFXP0YVZhFBg6TcAlxITvtLCuMJwZ3uqssL6eOiCzw70m34WSiQEWPS7M%2FmRbL3BF8W%2FBJG7Pj%2BDGwGZ07ppIKrTrm1oWwR%2BdPLBMvP31tQFzy0lkPV3NG9VBVrUYhCbpokB1BxQmx6ePlZ9thI%2BKGGSVO9tPL%2FJsT04ejQTNnuRAH7QFiYJiIvGzXaDwGp4kVMe20YYHO02R8LOQAVp%2F3%2B%2F6BwaOd0FfZgjPJPk4uP8%2BvGbBsgQsmTLZbl092CLa8yuXJEes4mypPJsX2CFVtw9lEplii5Kfx1guA2BckPCCyo8E7Opcu1KyhXIc%2FYW0ZkXcCBh61zPJvaHDq47VyCFCtrys7bEvlU%2Fe20ljb9qDbNeI5JiUzBBj2FiA5bzmHoKtZN6pGh5vXbav02XPLc7BJeHgNNcJfunHq5MEjoBNJAtdO2%2FPPr%2Bj7jz9SgtTcDZ4TcmStAPYKJp5E6sE1hPGauSmiKq6PM8TENXr8U0%2B1qzO5TpiFAdU2pWmbZJT%2B7pwtKdH8nrkANRxTeAce6aRBALgSLWlacpDYvkPrrlklZEBMBJpWJwxrhsoIWoYB85j7iSleOeJVY3I2kWetkiA8YMZX8zwy1TSW%2BUwz8%2FmwQY6pgG0I1C316Jv7orTsYhmyC9jhRey2gVB2ERG0d12FMxUM0ujMPAkEgxJz%2F7%2Fp1vAIUns4eItYrtNjQ8D%2FgTHzEuPpKs6WZ%2F%2BRF85R8xoFo0ybINDnQT8ZwReFoGfr%2BywZmU%2Bmdld81uZZ2RzRJTGOTG5urGM9rk6OgZ0S3txm%2BU5P1gxykK3QD5Dit5htE9Bnr967eE4JToKEOUVCH7evzbz3k%2BATyvS&X-Amz-Signature=f555f3a46a64cd57407cc9fd2f08069e3fd2ef553fef20965520ee383051589b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RWT3N2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgp%2FlWd1kTFYtRnn6wTV2cpXEyQd0NTSacdnIHU54LhAiAFp1Q5FhVosLUJk7iWz%2FgblebrKrDnci6zd19f%2F2vp7CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwYFZDOP%2BZBOMLqYOKtwDyJXubuNKnv35vxgvKT2bFXP0YVZhFBg6TcAlxITvtLCuMJwZ3uqssL6eOiCzw70m34WSiQEWPS7M%2FmRbL3BF8W%2FBJG7Pj%2BDGwGZ07ppIKrTrm1oWwR%2BdPLBMvP31tQFzy0lkPV3NG9VBVrUYhCbpokB1BxQmx6ePlZ9thI%2BKGGSVO9tPL%2FJsT04ejQTNnuRAH7QFiYJiIvGzXaDwGp4kVMe20YYHO02R8LOQAVp%2F3%2B%2F6BwaOd0FfZgjPJPk4uP8%2BvGbBsgQsmTLZbl092CLa8yuXJEes4mypPJsX2CFVtw9lEplii5Kfx1guA2BckPCCyo8E7Opcu1KyhXIc%2FYW0ZkXcCBh61zPJvaHDq47VyCFCtrys7bEvlU%2Fe20ljb9qDbNeI5JiUzBBj2FiA5bzmHoKtZN6pGh5vXbav02XPLc7BJeHgNNcJfunHq5MEjoBNJAtdO2%2FPPr%2Bj7jz9SgtTcDZ4TcmStAPYKJp5E6sE1hPGauSmiKq6PM8TENXr8U0%2B1qzO5TpiFAdU2pWmbZJT%2B7pwtKdH8nrkANRxTeAce6aRBALgSLWlacpDYvkPrrlklZEBMBJpWJwxrhsoIWoYB85j7iSleOeJVY3I2kWetkiA8YMZX8zwy1TSW%2BUwz8%2FmwQY6pgG0I1C316Jv7orTsYhmyC9jhRey2gVB2ERG0d12FMxUM0ujMPAkEgxJz%2F7%2Fp1vAIUns4eItYrtNjQ8D%2FgTHzEuPpKs6WZ%2F%2BRF85R8xoFo0ybINDnQT8ZwReFoGfr%2BywZmU%2Bmdld81uZZ2RzRJTGOTG5urGM9rk6OgZ0S3txm%2BU5P1gxykK3QD5Dit5htE9Bnr967eE4JToKEOUVCH7evzbz3k%2BATyvS&X-Amz-Signature=0f75530092b1742814326122a6fafb6db229baadd29e99a4594f9a908968cc49&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RWT3N2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgp%2FlWd1kTFYtRnn6wTV2cpXEyQd0NTSacdnIHU54LhAiAFp1Q5FhVosLUJk7iWz%2FgblebrKrDnci6zd19f%2F2vp7CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwYFZDOP%2BZBOMLqYOKtwDyJXubuNKnv35vxgvKT2bFXP0YVZhFBg6TcAlxITvtLCuMJwZ3uqssL6eOiCzw70m34WSiQEWPS7M%2FmRbL3BF8W%2FBJG7Pj%2BDGwGZ07ppIKrTrm1oWwR%2BdPLBMvP31tQFzy0lkPV3NG9VBVrUYhCbpokB1BxQmx6ePlZ9thI%2BKGGSVO9tPL%2FJsT04ejQTNnuRAH7QFiYJiIvGzXaDwGp4kVMe20YYHO02R8LOQAVp%2F3%2B%2F6BwaOd0FfZgjPJPk4uP8%2BvGbBsgQsmTLZbl092CLa8yuXJEes4mypPJsX2CFVtw9lEplii5Kfx1guA2BckPCCyo8E7Opcu1KyhXIc%2FYW0ZkXcCBh61zPJvaHDq47VyCFCtrys7bEvlU%2Fe20ljb9qDbNeI5JiUzBBj2FiA5bzmHoKtZN6pGh5vXbav02XPLc7BJeHgNNcJfunHq5MEjoBNJAtdO2%2FPPr%2Bj7jz9SgtTcDZ4TcmStAPYKJp5E6sE1hPGauSmiKq6PM8TENXr8U0%2B1qzO5TpiFAdU2pWmbZJT%2B7pwtKdH8nrkANRxTeAce6aRBALgSLWlacpDYvkPrrlklZEBMBJpWJwxrhsoIWoYB85j7iSleOeJVY3I2kWetkiA8YMZX8zwy1TSW%2BUwz8%2FmwQY6pgG0I1C316Jv7orTsYhmyC9jhRey2gVB2ERG0d12FMxUM0ujMPAkEgxJz%2F7%2Fp1vAIUns4eItYrtNjQ8D%2FgTHzEuPpKs6WZ%2F%2BRF85R8xoFo0ybINDnQT8ZwReFoGfr%2BywZmU%2Bmdld81uZZ2RzRJTGOTG5urGM9rk6OgZ0S3txm%2BU5P1gxykK3QD5Dit5htE9Bnr967eE4JToKEOUVCH7evzbz3k%2BATyvS&X-Amz-Signature=809766d4285151e74021a637272f97172123730a6872e4398dfd4e25631ad3a5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RWT3N2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgp%2FlWd1kTFYtRnn6wTV2cpXEyQd0NTSacdnIHU54LhAiAFp1Q5FhVosLUJk7iWz%2FgblebrKrDnci6zd19f%2F2vp7CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwYFZDOP%2BZBOMLqYOKtwDyJXubuNKnv35vxgvKT2bFXP0YVZhFBg6TcAlxITvtLCuMJwZ3uqssL6eOiCzw70m34WSiQEWPS7M%2FmRbL3BF8W%2FBJG7Pj%2BDGwGZ07ppIKrTrm1oWwR%2BdPLBMvP31tQFzy0lkPV3NG9VBVrUYhCbpokB1BxQmx6ePlZ9thI%2BKGGSVO9tPL%2FJsT04ejQTNnuRAH7QFiYJiIvGzXaDwGp4kVMe20YYHO02R8LOQAVp%2F3%2B%2F6BwaOd0FfZgjPJPk4uP8%2BvGbBsgQsmTLZbl092CLa8yuXJEes4mypPJsX2CFVtw9lEplii5Kfx1guA2BckPCCyo8E7Opcu1KyhXIc%2FYW0ZkXcCBh61zPJvaHDq47VyCFCtrys7bEvlU%2Fe20ljb9qDbNeI5JiUzBBj2FiA5bzmHoKtZN6pGh5vXbav02XPLc7BJeHgNNcJfunHq5MEjoBNJAtdO2%2FPPr%2Bj7jz9SgtTcDZ4TcmStAPYKJp5E6sE1hPGauSmiKq6PM8TENXr8U0%2B1qzO5TpiFAdU2pWmbZJT%2B7pwtKdH8nrkANRxTeAce6aRBALgSLWlacpDYvkPrrlklZEBMBJpWJwxrhsoIWoYB85j7iSleOeJVY3I2kWetkiA8YMZX8zwy1TSW%2BUwz8%2FmwQY6pgG0I1C316Jv7orTsYhmyC9jhRey2gVB2ERG0d12FMxUM0ujMPAkEgxJz%2F7%2Fp1vAIUns4eItYrtNjQ8D%2FgTHzEuPpKs6WZ%2F%2BRF85R8xoFo0ybINDnQT8ZwReFoGfr%2BywZmU%2Bmdld81uZZ2RzRJTGOTG5urGM9rk6OgZ0S3txm%2BU5P1gxykK3QD5Dit5htE9Bnr967eE4JToKEOUVCH7evzbz3k%2BATyvS&X-Amz-Signature=48244e7a6eea9db320cc80386216fda7ba8763842f78e9910861c5a3d6f5533d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RWT3N2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgp%2FlWd1kTFYtRnn6wTV2cpXEyQd0NTSacdnIHU54LhAiAFp1Q5FhVosLUJk7iWz%2FgblebrKrDnci6zd19f%2F2vp7CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwYFZDOP%2BZBOMLqYOKtwDyJXubuNKnv35vxgvKT2bFXP0YVZhFBg6TcAlxITvtLCuMJwZ3uqssL6eOiCzw70m34WSiQEWPS7M%2FmRbL3BF8W%2FBJG7Pj%2BDGwGZ07ppIKrTrm1oWwR%2BdPLBMvP31tQFzy0lkPV3NG9VBVrUYhCbpokB1BxQmx6ePlZ9thI%2BKGGSVO9tPL%2FJsT04ejQTNnuRAH7QFiYJiIvGzXaDwGp4kVMe20YYHO02R8LOQAVp%2F3%2B%2F6BwaOd0FfZgjPJPk4uP8%2BvGbBsgQsmTLZbl092CLa8yuXJEes4mypPJsX2CFVtw9lEplii5Kfx1guA2BckPCCyo8E7Opcu1KyhXIc%2FYW0ZkXcCBh61zPJvaHDq47VyCFCtrys7bEvlU%2Fe20ljb9qDbNeI5JiUzBBj2FiA5bzmHoKtZN6pGh5vXbav02XPLc7BJeHgNNcJfunHq5MEjoBNJAtdO2%2FPPr%2Bj7jz9SgtTcDZ4TcmStAPYKJp5E6sE1hPGauSmiKq6PM8TENXr8U0%2B1qzO5TpiFAdU2pWmbZJT%2B7pwtKdH8nrkANRxTeAce6aRBALgSLWlacpDYvkPrrlklZEBMBJpWJwxrhsoIWoYB85j7iSleOeJVY3I2kWetkiA8YMZX8zwy1TSW%2BUwz8%2FmwQY6pgG0I1C316Jv7orTsYhmyC9jhRey2gVB2ERG0d12FMxUM0ujMPAkEgxJz%2F7%2Fp1vAIUns4eItYrtNjQ8D%2FgTHzEuPpKs6WZ%2F%2BRF85R8xoFo0ybINDnQT8ZwReFoGfr%2BywZmU%2Bmdld81uZZ2RzRJTGOTG5urGM9rk6OgZ0S3txm%2BU5P1gxykK3QD5Dit5htE9Bnr967eE4JToKEOUVCH7evzbz3k%2BATyvS&X-Amz-Signature=6b4d34f6f745c3c7b06c788bc765210a322ea21243ae8990145f5cb1e056808c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RWT3N2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgp%2FlWd1kTFYtRnn6wTV2cpXEyQd0NTSacdnIHU54LhAiAFp1Q5FhVosLUJk7iWz%2FgblebrKrDnci6zd19f%2F2vp7CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwYFZDOP%2BZBOMLqYOKtwDyJXubuNKnv35vxgvKT2bFXP0YVZhFBg6TcAlxITvtLCuMJwZ3uqssL6eOiCzw70m34WSiQEWPS7M%2FmRbL3BF8W%2FBJG7Pj%2BDGwGZ07ppIKrTrm1oWwR%2BdPLBMvP31tQFzy0lkPV3NG9VBVrUYhCbpokB1BxQmx6ePlZ9thI%2BKGGSVO9tPL%2FJsT04ejQTNnuRAH7QFiYJiIvGzXaDwGp4kVMe20YYHO02R8LOQAVp%2F3%2B%2F6BwaOd0FfZgjPJPk4uP8%2BvGbBsgQsmTLZbl092CLa8yuXJEes4mypPJsX2CFVtw9lEplii5Kfx1guA2BckPCCyo8E7Opcu1KyhXIc%2FYW0ZkXcCBh61zPJvaHDq47VyCFCtrys7bEvlU%2Fe20ljb9qDbNeI5JiUzBBj2FiA5bzmHoKtZN6pGh5vXbav02XPLc7BJeHgNNcJfunHq5MEjoBNJAtdO2%2FPPr%2Bj7jz9SgtTcDZ4TcmStAPYKJp5E6sE1hPGauSmiKq6PM8TENXr8U0%2B1qzO5TpiFAdU2pWmbZJT%2B7pwtKdH8nrkANRxTeAce6aRBALgSLWlacpDYvkPrrlklZEBMBJpWJwxrhsoIWoYB85j7iSleOeJVY3I2kWetkiA8YMZX8zwy1TSW%2BUwz8%2FmwQY6pgG0I1C316Jv7orTsYhmyC9jhRey2gVB2ERG0d12FMxUM0ujMPAkEgxJz%2F7%2Fp1vAIUns4eItYrtNjQ8D%2FgTHzEuPpKs6WZ%2F%2BRF85R8xoFo0ybINDnQT8ZwReFoGfr%2BywZmU%2Bmdld81uZZ2RzRJTGOTG5urGM9rk6OgZ0S3txm%2BU5P1gxykK3QD5Dit5htE9Bnr967eE4JToKEOUVCH7evzbz3k%2BATyvS&X-Amz-Signature=09e316da2826e84ebeb9145a1f6fb05780dba0501fe1adeab296f5d1ec6227a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RWT3N2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgp%2FlWd1kTFYtRnn6wTV2cpXEyQd0NTSacdnIHU54LhAiAFp1Q5FhVosLUJk7iWz%2FgblebrKrDnci6zd19f%2F2vp7CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwYFZDOP%2BZBOMLqYOKtwDyJXubuNKnv35vxgvKT2bFXP0YVZhFBg6TcAlxITvtLCuMJwZ3uqssL6eOiCzw70m34WSiQEWPS7M%2FmRbL3BF8W%2FBJG7Pj%2BDGwGZ07ppIKrTrm1oWwR%2BdPLBMvP31tQFzy0lkPV3NG9VBVrUYhCbpokB1BxQmx6ePlZ9thI%2BKGGSVO9tPL%2FJsT04ejQTNnuRAH7QFiYJiIvGzXaDwGp4kVMe20YYHO02R8LOQAVp%2F3%2B%2F6BwaOd0FfZgjPJPk4uP8%2BvGbBsgQsmTLZbl092CLa8yuXJEes4mypPJsX2CFVtw9lEplii5Kfx1guA2BckPCCyo8E7Opcu1KyhXIc%2FYW0ZkXcCBh61zPJvaHDq47VyCFCtrys7bEvlU%2Fe20ljb9qDbNeI5JiUzBBj2FiA5bzmHoKtZN6pGh5vXbav02XPLc7BJeHgNNcJfunHq5MEjoBNJAtdO2%2FPPr%2Bj7jz9SgtTcDZ4TcmStAPYKJp5E6sE1hPGauSmiKq6PM8TENXr8U0%2B1qzO5TpiFAdU2pWmbZJT%2B7pwtKdH8nrkANRxTeAce6aRBALgSLWlacpDYvkPrrlklZEBMBJpWJwxrhsoIWoYB85j7iSleOeJVY3I2kWetkiA8YMZX8zwy1TSW%2BUwz8%2FmwQY6pgG0I1C316Jv7orTsYhmyC9jhRey2gVB2ERG0d12FMxUM0ujMPAkEgxJz%2F7%2Fp1vAIUns4eItYrtNjQ8D%2FgTHzEuPpKs6WZ%2F%2BRF85R8xoFo0ybINDnQT8ZwReFoGfr%2BywZmU%2Bmdld81uZZ2RzRJTGOTG5urGM9rk6OgZ0S3txm%2BU5P1gxykK3QD5Dit5htE9Bnr967eE4JToKEOUVCH7evzbz3k%2BATyvS&X-Amz-Signature=1190c74b15d2229e3cf658c683952bc903a450988749d6d97cb441496357a71d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RWT3N2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgp%2FlWd1kTFYtRnn6wTV2cpXEyQd0NTSacdnIHU54LhAiAFp1Q5FhVosLUJk7iWz%2FgblebrKrDnci6zd19f%2F2vp7CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwYFZDOP%2BZBOMLqYOKtwDyJXubuNKnv35vxgvKT2bFXP0YVZhFBg6TcAlxITvtLCuMJwZ3uqssL6eOiCzw70m34WSiQEWPS7M%2FmRbL3BF8W%2FBJG7Pj%2BDGwGZ07ppIKrTrm1oWwR%2BdPLBMvP31tQFzy0lkPV3NG9VBVrUYhCbpokB1BxQmx6ePlZ9thI%2BKGGSVO9tPL%2FJsT04ejQTNnuRAH7QFiYJiIvGzXaDwGp4kVMe20YYHO02R8LOQAVp%2F3%2B%2F6BwaOd0FfZgjPJPk4uP8%2BvGbBsgQsmTLZbl092CLa8yuXJEes4mypPJsX2CFVtw9lEplii5Kfx1guA2BckPCCyo8E7Opcu1KyhXIc%2FYW0ZkXcCBh61zPJvaHDq47VyCFCtrys7bEvlU%2Fe20ljb9qDbNeI5JiUzBBj2FiA5bzmHoKtZN6pGh5vXbav02XPLc7BJeHgNNcJfunHq5MEjoBNJAtdO2%2FPPr%2Bj7jz9SgtTcDZ4TcmStAPYKJp5E6sE1hPGauSmiKq6PM8TENXr8U0%2B1qzO5TpiFAdU2pWmbZJT%2B7pwtKdH8nrkANRxTeAce6aRBALgSLWlacpDYvkPrrlklZEBMBJpWJwxrhsoIWoYB85j7iSleOeJVY3I2kWetkiA8YMZX8zwy1TSW%2BUwz8%2FmwQY6pgG0I1C316Jv7orTsYhmyC9jhRey2gVB2ERG0d12FMxUM0ujMPAkEgxJz%2F7%2Fp1vAIUns4eItYrtNjQ8D%2FgTHzEuPpKs6WZ%2F%2BRF85R8xoFo0ybINDnQT8ZwReFoGfr%2BywZmU%2Bmdld81uZZ2RzRJTGOTG5urGM9rk6OgZ0S3txm%2BU5P1gxykK3QD5Dit5htE9Bnr967eE4JToKEOUVCH7evzbz3k%2BATyvS&X-Amz-Signature=a99e56036bb91d4e8dd4d4ecb2737c1228062b6ee73686a30b2fc3a8db76b6b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
