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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VPZ242Y%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg%2F96hDb%2F%2FDPa%2F5jhMFT73xunE2f6LYW8O6zfysnNCxAiAzy6ieNAmCy%2FtDur0EdqHfZmXP1zSBMiK3z4uoeCAXoiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfbeTUdjUEjvZkTyYKtwD8X39RkhfDpth%2ByTVdaJGyBunR6xUmoMslTrptJtMWd9jN6LQYdrsWjuI9pJBTDYSYRBMjAmoXO1w4BNJWh%2BP%2FbBJZrkfOxf7ADepMaMjDfoE%2Bst%2ByUrDUDZ2cANgQo14g8QFsnNrbfptvYYBWV9BLvijalSVyqQ8XcpD6qMD94wcYYuPC2Kk%2F3EbsplDDsN5ZvABvJ3ka59xZqxUA5vuCT2CFzGicMVIXyK8qKSREXGPMcSyB1CPduESwqIB7fTILwL%2F4bKbtx4FB1R1izn3nM13mUvI0WIdESXM3sje3IXceyk%2F5cv3QvbKcQAIjYhjHk90s8Z5%2B3dW2jinxG8FAMgTrw%2BphUSYIE9AhDfHca3H7%2FGyyc64qrSPyDB8KaMqyEIVgDJ9VdXsDiBwG1GysN57YW0aCpzywVIcJucrBOXeEJRpEWFtCyF%2BQJowvQnBvgDJXgFRMaSgt%2BCKq%2FI2OfgytjbRnufTiGHy1IhIau7Tc1EEEzG8ksCC8hHUuYFcprjUGPj8GQF4fKmmGR1MeALQWI7BGbNadOOxNy9im1IxSRUI7pvdINaLN7d6vEFyfxViBvsOrd2v3OUKAFOub%2BSteJc0LCP%2FVjL%2FKguYJzXLxdCqFS8bDB3RpaMwy73pwQY6pgE9kYwybY7s3j76RnzeH1GTwYfM2QBm5Stme7Ze4TiAvEKsfzWfL8N9EfxrK9RHJMTwKH%2FqAXQpLe85SAjuuxVgAgZ52j3nQ9r%2BtzBIWHR1XoB7zNnS1iHHAPz%2Fh48S8GhvTOOaEFZMrBfdlijIcy5JoTRlcQlybUE3OOoCyLW5x5q03IcPPki3M5ms8TD0wCM6aQM997mvujsNAJ%2FwRqOiht5YubwW&X-Amz-Signature=0fee694af6a76e8cbe26b85e3d8419d60c202244c9a78570c8209f400c6994e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VPZ242Y%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg%2F96hDb%2F%2FDPa%2F5jhMFT73xunE2f6LYW8O6zfysnNCxAiAzy6ieNAmCy%2FtDur0EdqHfZmXP1zSBMiK3z4uoeCAXoiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfbeTUdjUEjvZkTyYKtwD8X39RkhfDpth%2ByTVdaJGyBunR6xUmoMslTrptJtMWd9jN6LQYdrsWjuI9pJBTDYSYRBMjAmoXO1w4BNJWh%2BP%2FbBJZrkfOxf7ADepMaMjDfoE%2Bst%2ByUrDUDZ2cANgQo14g8QFsnNrbfptvYYBWV9BLvijalSVyqQ8XcpD6qMD94wcYYuPC2Kk%2F3EbsplDDsN5ZvABvJ3ka59xZqxUA5vuCT2CFzGicMVIXyK8qKSREXGPMcSyB1CPduESwqIB7fTILwL%2F4bKbtx4FB1R1izn3nM13mUvI0WIdESXM3sje3IXceyk%2F5cv3QvbKcQAIjYhjHk90s8Z5%2B3dW2jinxG8FAMgTrw%2BphUSYIE9AhDfHca3H7%2FGyyc64qrSPyDB8KaMqyEIVgDJ9VdXsDiBwG1GysN57YW0aCpzywVIcJucrBOXeEJRpEWFtCyF%2BQJowvQnBvgDJXgFRMaSgt%2BCKq%2FI2OfgytjbRnufTiGHy1IhIau7Tc1EEEzG8ksCC8hHUuYFcprjUGPj8GQF4fKmmGR1MeALQWI7BGbNadOOxNy9im1IxSRUI7pvdINaLN7d6vEFyfxViBvsOrd2v3OUKAFOub%2BSteJc0LCP%2FVjL%2FKguYJzXLxdCqFS8bDB3RpaMwy73pwQY6pgE9kYwybY7s3j76RnzeH1GTwYfM2QBm5Stme7Ze4TiAvEKsfzWfL8N9EfxrK9RHJMTwKH%2FqAXQpLe85SAjuuxVgAgZ52j3nQ9r%2BtzBIWHR1XoB7zNnS1iHHAPz%2Fh48S8GhvTOOaEFZMrBfdlijIcy5JoTRlcQlybUE3OOoCyLW5x5q03IcPPki3M5ms8TD0wCM6aQM997mvujsNAJ%2FwRqOiht5YubwW&X-Amz-Signature=8c41224b8e29b22be928a268dbd942299f9dd4203087a9ae6a79b8f262f0a417&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VPZ242Y%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg%2F96hDb%2F%2FDPa%2F5jhMFT73xunE2f6LYW8O6zfysnNCxAiAzy6ieNAmCy%2FtDur0EdqHfZmXP1zSBMiK3z4uoeCAXoiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfbeTUdjUEjvZkTyYKtwD8X39RkhfDpth%2ByTVdaJGyBunR6xUmoMslTrptJtMWd9jN6LQYdrsWjuI9pJBTDYSYRBMjAmoXO1w4BNJWh%2BP%2FbBJZrkfOxf7ADepMaMjDfoE%2Bst%2ByUrDUDZ2cANgQo14g8QFsnNrbfptvYYBWV9BLvijalSVyqQ8XcpD6qMD94wcYYuPC2Kk%2F3EbsplDDsN5ZvABvJ3ka59xZqxUA5vuCT2CFzGicMVIXyK8qKSREXGPMcSyB1CPduESwqIB7fTILwL%2F4bKbtx4FB1R1izn3nM13mUvI0WIdESXM3sje3IXceyk%2F5cv3QvbKcQAIjYhjHk90s8Z5%2B3dW2jinxG8FAMgTrw%2BphUSYIE9AhDfHca3H7%2FGyyc64qrSPyDB8KaMqyEIVgDJ9VdXsDiBwG1GysN57YW0aCpzywVIcJucrBOXeEJRpEWFtCyF%2BQJowvQnBvgDJXgFRMaSgt%2BCKq%2FI2OfgytjbRnufTiGHy1IhIau7Tc1EEEzG8ksCC8hHUuYFcprjUGPj8GQF4fKmmGR1MeALQWI7BGbNadOOxNy9im1IxSRUI7pvdINaLN7d6vEFyfxViBvsOrd2v3OUKAFOub%2BSteJc0LCP%2FVjL%2FKguYJzXLxdCqFS8bDB3RpaMwy73pwQY6pgE9kYwybY7s3j76RnzeH1GTwYfM2QBm5Stme7Ze4TiAvEKsfzWfL8N9EfxrK9RHJMTwKH%2FqAXQpLe85SAjuuxVgAgZ52j3nQ9r%2BtzBIWHR1XoB7zNnS1iHHAPz%2Fh48S8GhvTOOaEFZMrBfdlijIcy5JoTRlcQlybUE3OOoCyLW5x5q03IcPPki3M5ms8TD0wCM6aQM997mvujsNAJ%2FwRqOiht5YubwW&X-Amz-Signature=267c024db1bfaaf73625f9c704ead98cc3ede384928ca773284970a103b1f776&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VPZ242Y%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg%2F96hDb%2F%2FDPa%2F5jhMFT73xunE2f6LYW8O6zfysnNCxAiAzy6ieNAmCy%2FtDur0EdqHfZmXP1zSBMiK3z4uoeCAXoiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfbeTUdjUEjvZkTyYKtwD8X39RkhfDpth%2ByTVdaJGyBunR6xUmoMslTrptJtMWd9jN6LQYdrsWjuI9pJBTDYSYRBMjAmoXO1w4BNJWh%2BP%2FbBJZrkfOxf7ADepMaMjDfoE%2Bst%2ByUrDUDZ2cANgQo14g8QFsnNrbfptvYYBWV9BLvijalSVyqQ8XcpD6qMD94wcYYuPC2Kk%2F3EbsplDDsN5ZvABvJ3ka59xZqxUA5vuCT2CFzGicMVIXyK8qKSREXGPMcSyB1CPduESwqIB7fTILwL%2F4bKbtx4FB1R1izn3nM13mUvI0WIdESXM3sje3IXceyk%2F5cv3QvbKcQAIjYhjHk90s8Z5%2B3dW2jinxG8FAMgTrw%2BphUSYIE9AhDfHca3H7%2FGyyc64qrSPyDB8KaMqyEIVgDJ9VdXsDiBwG1GysN57YW0aCpzywVIcJucrBOXeEJRpEWFtCyF%2BQJowvQnBvgDJXgFRMaSgt%2BCKq%2FI2OfgytjbRnufTiGHy1IhIau7Tc1EEEzG8ksCC8hHUuYFcprjUGPj8GQF4fKmmGR1MeALQWI7BGbNadOOxNy9im1IxSRUI7pvdINaLN7d6vEFyfxViBvsOrd2v3OUKAFOub%2BSteJc0LCP%2FVjL%2FKguYJzXLxdCqFS8bDB3RpaMwy73pwQY6pgE9kYwybY7s3j76RnzeH1GTwYfM2QBm5Stme7Ze4TiAvEKsfzWfL8N9EfxrK9RHJMTwKH%2FqAXQpLe85SAjuuxVgAgZ52j3nQ9r%2BtzBIWHR1XoB7zNnS1iHHAPz%2Fh48S8GhvTOOaEFZMrBfdlijIcy5JoTRlcQlybUE3OOoCyLW5x5q03IcPPki3M5ms8TD0wCM6aQM997mvujsNAJ%2FwRqOiht5YubwW&X-Amz-Signature=99a3e296db8674caffc5d25226e00383d595a15519de8724e4237ad2f96871b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VPZ242Y%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg%2F96hDb%2F%2FDPa%2F5jhMFT73xunE2f6LYW8O6zfysnNCxAiAzy6ieNAmCy%2FtDur0EdqHfZmXP1zSBMiK3z4uoeCAXoiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfbeTUdjUEjvZkTyYKtwD8X39RkhfDpth%2ByTVdaJGyBunR6xUmoMslTrptJtMWd9jN6LQYdrsWjuI9pJBTDYSYRBMjAmoXO1w4BNJWh%2BP%2FbBJZrkfOxf7ADepMaMjDfoE%2Bst%2ByUrDUDZ2cANgQo14g8QFsnNrbfptvYYBWV9BLvijalSVyqQ8XcpD6qMD94wcYYuPC2Kk%2F3EbsplDDsN5ZvABvJ3ka59xZqxUA5vuCT2CFzGicMVIXyK8qKSREXGPMcSyB1CPduESwqIB7fTILwL%2F4bKbtx4FB1R1izn3nM13mUvI0WIdESXM3sje3IXceyk%2F5cv3QvbKcQAIjYhjHk90s8Z5%2B3dW2jinxG8FAMgTrw%2BphUSYIE9AhDfHca3H7%2FGyyc64qrSPyDB8KaMqyEIVgDJ9VdXsDiBwG1GysN57YW0aCpzywVIcJucrBOXeEJRpEWFtCyF%2BQJowvQnBvgDJXgFRMaSgt%2BCKq%2FI2OfgytjbRnufTiGHy1IhIau7Tc1EEEzG8ksCC8hHUuYFcprjUGPj8GQF4fKmmGR1MeALQWI7BGbNadOOxNy9im1IxSRUI7pvdINaLN7d6vEFyfxViBvsOrd2v3OUKAFOub%2BSteJc0LCP%2FVjL%2FKguYJzXLxdCqFS8bDB3RpaMwy73pwQY6pgE9kYwybY7s3j76RnzeH1GTwYfM2QBm5Stme7Ze4TiAvEKsfzWfL8N9EfxrK9RHJMTwKH%2FqAXQpLe85SAjuuxVgAgZ52j3nQ9r%2BtzBIWHR1XoB7zNnS1iHHAPz%2Fh48S8GhvTOOaEFZMrBfdlijIcy5JoTRlcQlybUE3OOoCyLW5x5q03IcPPki3M5ms8TD0wCM6aQM997mvujsNAJ%2FwRqOiht5YubwW&X-Amz-Signature=7fcc5353b4a20158571b8af4f1508f67fb5b9cca2bd316184be0e6dc2d331dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VPZ242Y%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg%2F96hDb%2F%2FDPa%2F5jhMFT73xunE2f6LYW8O6zfysnNCxAiAzy6ieNAmCy%2FtDur0EdqHfZmXP1zSBMiK3z4uoeCAXoiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfbeTUdjUEjvZkTyYKtwD8X39RkhfDpth%2ByTVdaJGyBunR6xUmoMslTrptJtMWd9jN6LQYdrsWjuI9pJBTDYSYRBMjAmoXO1w4BNJWh%2BP%2FbBJZrkfOxf7ADepMaMjDfoE%2Bst%2ByUrDUDZ2cANgQo14g8QFsnNrbfptvYYBWV9BLvijalSVyqQ8XcpD6qMD94wcYYuPC2Kk%2F3EbsplDDsN5ZvABvJ3ka59xZqxUA5vuCT2CFzGicMVIXyK8qKSREXGPMcSyB1CPduESwqIB7fTILwL%2F4bKbtx4FB1R1izn3nM13mUvI0WIdESXM3sje3IXceyk%2F5cv3QvbKcQAIjYhjHk90s8Z5%2B3dW2jinxG8FAMgTrw%2BphUSYIE9AhDfHca3H7%2FGyyc64qrSPyDB8KaMqyEIVgDJ9VdXsDiBwG1GysN57YW0aCpzywVIcJucrBOXeEJRpEWFtCyF%2BQJowvQnBvgDJXgFRMaSgt%2BCKq%2FI2OfgytjbRnufTiGHy1IhIau7Tc1EEEzG8ksCC8hHUuYFcprjUGPj8GQF4fKmmGR1MeALQWI7BGbNadOOxNy9im1IxSRUI7pvdINaLN7d6vEFyfxViBvsOrd2v3OUKAFOub%2BSteJc0LCP%2FVjL%2FKguYJzXLxdCqFS8bDB3RpaMwy73pwQY6pgE9kYwybY7s3j76RnzeH1GTwYfM2QBm5Stme7Ze4TiAvEKsfzWfL8N9EfxrK9RHJMTwKH%2FqAXQpLe85SAjuuxVgAgZ52j3nQ9r%2BtzBIWHR1XoB7zNnS1iHHAPz%2Fh48S8GhvTOOaEFZMrBfdlijIcy5JoTRlcQlybUE3OOoCyLW5x5q03IcPPki3M5ms8TD0wCM6aQM997mvujsNAJ%2FwRqOiht5YubwW&X-Amz-Signature=368e1fb895017affa70d84222d31f7af480923d75dbbb3f64f4fe2cec2c77692&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VPZ242Y%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg%2F96hDb%2F%2FDPa%2F5jhMFT73xunE2f6LYW8O6zfysnNCxAiAzy6ieNAmCy%2FtDur0EdqHfZmXP1zSBMiK3z4uoeCAXoiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfbeTUdjUEjvZkTyYKtwD8X39RkhfDpth%2ByTVdaJGyBunR6xUmoMslTrptJtMWd9jN6LQYdrsWjuI9pJBTDYSYRBMjAmoXO1w4BNJWh%2BP%2FbBJZrkfOxf7ADepMaMjDfoE%2Bst%2ByUrDUDZ2cANgQo14g8QFsnNrbfptvYYBWV9BLvijalSVyqQ8XcpD6qMD94wcYYuPC2Kk%2F3EbsplDDsN5ZvABvJ3ka59xZqxUA5vuCT2CFzGicMVIXyK8qKSREXGPMcSyB1CPduESwqIB7fTILwL%2F4bKbtx4FB1R1izn3nM13mUvI0WIdESXM3sje3IXceyk%2F5cv3QvbKcQAIjYhjHk90s8Z5%2B3dW2jinxG8FAMgTrw%2BphUSYIE9AhDfHca3H7%2FGyyc64qrSPyDB8KaMqyEIVgDJ9VdXsDiBwG1GysN57YW0aCpzywVIcJucrBOXeEJRpEWFtCyF%2BQJowvQnBvgDJXgFRMaSgt%2BCKq%2FI2OfgytjbRnufTiGHy1IhIau7Tc1EEEzG8ksCC8hHUuYFcprjUGPj8GQF4fKmmGR1MeALQWI7BGbNadOOxNy9im1IxSRUI7pvdINaLN7d6vEFyfxViBvsOrd2v3OUKAFOub%2BSteJc0LCP%2FVjL%2FKguYJzXLxdCqFS8bDB3RpaMwy73pwQY6pgE9kYwybY7s3j76RnzeH1GTwYfM2QBm5Stme7Ze4TiAvEKsfzWfL8N9EfxrK9RHJMTwKH%2FqAXQpLe85SAjuuxVgAgZ52j3nQ9r%2BtzBIWHR1XoB7zNnS1iHHAPz%2Fh48S8GhvTOOaEFZMrBfdlijIcy5JoTRlcQlybUE3OOoCyLW5x5q03IcPPki3M5ms8TD0wCM6aQM997mvujsNAJ%2FwRqOiht5YubwW&X-Amz-Signature=48b644019569f10b90e788c636ba3ea09a84e666b0ed0261ac57de12618dd1b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VPZ242Y%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg%2F96hDb%2F%2FDPa%2F5jhMFT73xunE2f6LYW8O6zfysnNCxAiAzy6ieNAmCy%2FtDur0EdqHfZmXP1zSBMiK3z4uoeCAXoiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfbeTUdjUEjvZkTyYKtwD8X39RkhfDpth%2ByTVdaJGyBunR6xUmoMslTrptJtMWd9jN6LQYdrsWjuI9pJBTDYSYRBMjAmoXO1w4BNJWh%2BP%2FbBJZrkfOxf7ADepMaMjDfoE%2Bst%2ByUrDUDZ2cANgQo14g8QFsnNrbfptvYYBWV9BLvijalSVyqQ8XcpD6qMD94wcYYuPC2Kk%2F3EbsplDDsN5ZvABvJ3ka59xZqxUA5vuCT2CFzGicMVIXyK8qKSREXGPMcSyB1CPduESwqIB7fTILwL%2F4bKbtx4FB1R1izn3nM13mUvI0WIdESXM3sje3IXceyk%2F5cv3QvbKcQAIjYhjHk90s8Z5%2B3dW2jinxG8FAMgTrw%2BphUSYIE9AhDfHca3H7%2FGyyc64qrSPyDB8KaMqyEIVgDJ9VdXsDiBwG1GysN57YW0aCpzywVIcJucrBOXeEJRpEWFtCyF%2BQJowvQnBvgDJXgFRMaSgt%2BCKq%2FI2OfgytjbRnufTiGHy1IhIau7Tc1EEEzG8ksCC8hHUuYFcprjUGPj8GQF4fKmmGR1MeALQWI7BGbNadOOxNy9im1IxSRUI7pvdINaLN7d6vEFyfxViBvsOrd2v3OUKAFOub%2BSteJc0LCP%2FVjL%2FKguYJzXLxdCqFS8bDB3RpaMwy73pwQY6pgE9kYwybY7s3j76RnzeH1GTwYfM2QBm5Stme7Ze4TiAvEKsfzWfL8N9EfxrK9RHJMTwKH%2FqAXQpLe85SAjuuxVgAgZ52j3nQ9r%2BtzBIWHR1XoB7zNnS1iHHAPz%2Fh48S8GhvTOOaEFZMrBfdlijIcy5JoTRlcQlybUE3OOoCyLW5x5q03IcPPki3M5ms8TD0wCM6aQM997mvujsNAJ%2FwRqOiht5YubwW&X-Amz-Signature=9cbf666f2cff8582a4774d4af1dd74860f469fd0cadafb75e89b5caa3ff239c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
