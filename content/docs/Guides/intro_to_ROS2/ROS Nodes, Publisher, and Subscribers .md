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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4EBGOHO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAO91ipTdMVYjDGPY3eBUuYhv0GV7D66Erf0MM%2FcJMHgAiEA0X1ytfj%2Fb5EW0vuvAT8VNlZJFBJdogZpumxMzA14Xi8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHYXxh4cqMyZRuLmircAw%2Fer6yRqPzxrclcT7J889qFpd8NAim58NV9cCUEoLdQPwp2fW4ymQ5UACvmrMFErG5L7LGhbl7t9BAiPb8w1o4SqTHAWgooeJzChAjWHW1FLmVuzYfRU5k1o3VU%2F6bVqEn24WdeXviCKbsvYMg7IQdXzZu4h8xKp7wA6NdLhvI%2BZG9QGRKk4Ty7M%2FlA8u265pftzXvTDrWNLxCcdYSh39gKDGpJr9zrLtnevC4yxovnvf6aqmEY1GeVvVkirGuArTdpvVt9UAjWD4M9e6BhJHPeDYFF%2B32OMl7y%2Bcd%2Bc92QXMx5yPsJ3SKhvd3FCC44ajJBzLmOBo817fxlzdcEbe6VW8EA3421%2BxhgNmtbiS6fcbGw6j20buKnet%2FMbUvdnWxA0BmD222i662dUPCbSV9wdFFzwMP2DIZIHftVq2oU%2BhDzHKAiL%2BTElbkOgUkFEv93lO%2BMxkYkNOFXQJK3BGkuPLrCLDgMQ9dk9KpYqUu73YnDRA2%2FOHicqSb1JP%2F6iz8%2FJd%2BWeVZIyweu9w591I4joFmk1zr5KP%2BgvJtS5FetWa%2FqNZmfl5gg9%2Bi4ZL5lTnZQL2GJZZfo%2BnTebhf2SZjjIWuUYPOLB2pCeYTo1T4UFTiV1WI%2Fim6SZDXKMITsh74GOqUBnoEv7Wwl18AehGHQIYPyCFHbEgWBr3OSSzNFvS9VRneN7Hzs6sgfUqkU%2FQyP86Z1YoXmmSsuGu4sQnfLp76jqZUDSlkfay5iIM%2FzkI691chZC0GdcNtcX7pyLRokt3PwKnZH0tlQD1pkegwGX9RnWCNuYBhFadYRy4SVrwEEqRuMgKDVBjBPNnKpYtYE9sR0WUAvesEXHw1SojXV%2FSgq%2Fw0OGBFh&X-Amz-Signature=130573f022689106b27e116c10e44f706f6aebf43594f3821a43776c569e4bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4EBGOHO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAO91ipTdMVYjDGPY3eBUuYhv0GV7D66Erf0MM%2FcJMHgAiEA0X1ytfj%2Fb5EW0vuvAT8VNlZJFBJdogZpumxMzA14Xi8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHYXxh4cqMyZRuLmircAw%2Fer6yRqPzxrclcT7J889qFpd8NAim58NV9cCUEoLdQPwp2fW4ymQ5UACvmrMFErG5L7LGhbl7t9BAiPb8w1o4SqTHAWgooeJzChAjWHW1FLmVuzYfRU5k1o3VU%2F6bVqEn24WdeXviCKbsvYMg7IQdXzZu4h8xKp7wA6NdLhvI%2BZG9QGRKk4Ty7M%2FlA8u265pftzXvTDrWNLxCcdYSh39gKDGpJr9zrLtnevC4yxovnvf6aqmEY1GeVvVkirGuArTdpvVt9UAjWD4M9e6BhJHPeDYFF%2B32OMl7y%2Bcd%2Bc92QXMx5yPsJ3SKhvd3FCC44ajJBzLmOBo817fxlzdcEbe6VW8EA3421%2BxhgNmtbiS6fcbGw6j20buKnet%2FMbUvdnWxA0BmD222i662dUPCbSV9wdFFzwMP2DIZIHftVq2oU%2BhDzHKAiL%2BTElbkOgUkFEv93lO%2BMxkYkNOFXQJK3BGkuPLrCLDgMQ9dk9KpYqUu73YnDRA2%2FOHicqSb1JP%2F6iz8%2FJd%2BWeVZIyweu9w591I4joFmk1zr5KP%2BgvJtS5FetWa%2FqNZmfl5gg9%2Bi4ZL5lTnZQL2GJZZfo%2BnTebhf2SZjjIWuUYPOLB2pCeYTo1T4UFTiV1WI%2Fim6SZDXKMITsh74GOqUBnoEv7Wwl18AehGHQIYPyCFHbEgWBr3OSSzNFvS9VRneN7Hzs6sgfUqkU%2FQyP86Z1YoXmmSsuGu4sQnfLp76jqZUDSlkfay5iIM%2FzkI691chZC0GdcNtcX7pyLRokt3PwKnZH0tlQD1pkegwGX9RnWCNuYBhFadYRy4SVrwEEqRuMgKDVBjBPNnKpYtYE9sR0WUAvesEXHw1SojXV%2FSgq%2Fw0OGBFh&X-Amz-Signature=3384944dbfc4cd763f3d6e2e8187ca9edb98ed6a04c651b0281b67ca9bf3d090&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4EBGOHO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAO91ipTdMVYjDGPY3eBUuYhv0GV7D66Erf0MM%2FcJMHgAiEA0X1ytfj%2Fb5EW0vuvAT8VNlZJFBJdogZpumxMzA14Xi8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHYXxh4cqMyZRuLmircAw%2Fer6yRqPzxrclcT7J889qFpd8NAim58NV9cCUEoLdQPwp2fW4ymQ5UACvmrMFErG5L7LGhbl7t9BAiPb8w1o4SqTHAWgooeJzChAjWHW1FLmVuzYfRU5k1o3VU%2F6bVqEn24WdeXviCKbsvYMg7IQdXzZu4h8xKp7wA6NdLhvI%2BZG9QGRKk4Ty7M%2FlA8u265pftzXvTDrWNLxCcdYSh39gKDGpJr9zrLtnevC4yxovnvf6aqmEY1GeVvVkirGuArTdpvVt9UAjWD4M9e6BhJHPeDYFF%2B32OMl7y%2Bcd%2Bc92QXMx5yPsJ3SKhvd3FCC44ajJBzLmOBo817fxlzdcEbe6VW8EA3421%2BxhgNmtbiS6fcbGw6j20buKnet%2FMbUvdnWxA0BmD222i662dUPCbSV9wdFFzwMP2DIZIHftVq2oU%2BhDzHKAiL%2BTElbkOgUkFEv93lO%2BMxkYkNOFXQJK3BGkuPLrCLDgMQ9dk9KpYqUu73YnDRA2%2FOHicqSb1JP%2F6iz8%2FJd%2BWeVZIyweu9w591I4joFmk1zr5KP%2BgvJtS5FetWa%2FqNZmfl5gg9%2Bi4ZL5lTnZQL2GJZZfo%2BnTebhf2SZjjIWuUYPOLB2pCeYTo1T4UFTiV1WI%2Fim6SZDXKMITsh74GOqUBnoEv7Wwl18AehGHQIYPyCFHbEgWBr3OSSzNFvS9VRneN7Hzs6sgfUqkU%2FQyP86Z1YoXmmSsuGu4sQnfLp76jqZUDSlkfay5iIM%2FzkI691chZC0GdcNtcX7pyLRokt3PwKnZH0tlQD1pkegwGX9RnWCNuYBhFadYRy4SVrwEEqRuMgKDVBjBPNnKpYtYE9sR0WUAvesEXHw1SojXV%2FSgq%2Fw0OGBFh&X-Amz-Signature=9d3d6156336fb17380a2bc3aa8c084cc1a2e5766c68528a2ad1d63934b48cc03&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4EBGOHO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAO91ipTdMVYjDGPY3eBUuYhv0GV7D66Erf0MM%2FcJMHgAiEA0X1ytfj%2Fb5EW0vuvAT8VNlZJFBJdogZpumxMzA14Xi8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHYXxh4cqMyZRuLmircAw%2Fer6yRqPzxrclcT7J889qFpd8NAim58NV9cCUEoLdQPwp2fW4ymQ5UACvmrMFErG5L7LGhbl7t9BAiPb8w1o4SqTHAWgooeJzChAjWHW1FLmVuzYfRU5k1o3VU%2F6bVqEn24WdeXviCKbsvYMg7IQdXzZu4h8xKp7wA6NdLhvI%2BZG9QGRKk4Ty7M%2FlA8u265pftzXvTDrWNLxCcdYSh39gKDGpJr9zrLtnevC4yxovnvf6aqmEY1GeVvVkirGuArTdpvVt9UAjWD4M9e6BhJHPeDYFF%2B32OMl7y%2Bcd%2Bc92QXMx5yPsJ3SKhvd3FCC44ajJBzLmOBo817fxlzdcEbe6VW8EA3421%2BxhgNmtbiS6fcbGw6j20buKnet%2FMbUvdnWxA0BmD222i662dUPCbSV9wdFFzwMP2DIZIHftVq2oU%2BhDzHKAiL%2BTElbkOgUkFEv93lO%2BMxkYkNOFXQJK3BGkuPLrCLDgMQ9dk9KpYqUu73YnDRA2%2FOHicqSb1JP%2F6iz8%2FJd%2BWeVZIyweu9w591I4joFmk1zr5KP%2BgvJtS5FetWa%2FqNZmfl5gg9%2Bi4ZL5lTnZQL2GJZZfo%2BnTebhf2SZjjIWuUYPOLB2pCeYTo1T4UFTiV1WI%2Fim6SZDXKMITsh74GOqUBnoEv7Wwl18AehGHQIYPyCFHbEgWBr3OSSzNFvS9VRneN7Hzs6sgfUqkU%2FQyP86Z1YoXmmSsuGu4sQnfLp76jqZUDSlkfay5iIM%2FzkI691chZC0GdcNtcX7pyLRokt3PwKnZH0tlQD1pkegwGX9RnWCNuYBhFadYRy4SVrwEEqRuMgKDVBjBPNnKpYtYE9sR0WUAvesEXHw1SojXV%2FSgq%2Fw0OGBFh&X-Amz-Signature=6313db98ed7737b127e6d3dbd3656326ecf86293d95e91283ed22d24d7d254f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4EBGOHO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAO91ipTdMVYjDGPY3eBUuYhv0GV7D66Erf0MM%2FcJMHgAiEA0X1ytfj%2Fb5EW0vuvAT8VNlZJFBJdogZpumxMzA14Xi8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHYXxh4cqMyZRuLmircAw%2Fer6yRqPzxrclcT7J889qFpd8NAim58NV9cCUEoLdQPwp2fW4ymQ5UACvmrMFErG5L7LGhbl7t9BAiPb8w1o4SqTHAWgooeJzChAjWHW1FLmVuzYfRU5k1o3VU%2F6bVqEn24WdeXviCKbsvYMg7IQdXzZu4h8xKp7wA6NdLhvI%2BZG9QGRKk4Ty7M%2FlA8u265pftzXvTDrWNLxCcdYSh39gKDGpJr9zrLtnevC4yxovnvf6aqmEY1GeVvVkirGuArTdpvVt9UAjWD4M9e6BhJHPeDYFF%2B32OMl7y%2Bcd%2Bc92QXMx5yPsJ3SKhvd3FCC44ajJBzLmOBo817fxlzdcEbe6VW8EA3421%2BxhgNmtbiS6fcbGw6j20buKnet%2FMbUvdnWxA0BmD222i662dUPCbSV9wdFFzwMP2DIZIHftVq2oU%2BhDzHKAiL%2BTElbkOgUkFEv93lO%2BMxkYkNOFXQJK3BGkuPLrCLDgMQ9dk9KpYqUu73YnDRA2%2FOHicqSb1JP%2F6iz8%2FJd%2BWeVZIyweu9w591I4joFmk1zr5KP%2BgvJtS5FetWa%2FqNZmfl5gg9%2Bi4ZL5lTnZQL2GJZZfo%2BnTebhf2SZjjIWuUYPOLB2pCeYTo1T4UFTiV1WI%2Fim6SZDXKMITsh74GOqUBnoEv7Wwl18AehGHQIYPyCFHbEgWBr3OSSzNFvS9VRneN7Hzs6sgfUqkU%2FQyP86Z1YoXmmSsuGu4sQnfLp76jqZUDSlkfay5iIM%2FzkI691chZC0GdcNtcX7pyLRokt3PwKnZH0tlQD1pkegwGX9RnWCNuYBhFadYRy4SVrwEEqRuMgKDVBjBPNnKpYtYE9sR0WUAvesEXHw1SojXV%2FSgq%2Fw0OGBFh&X-Amz-Signature=68a61d37b13f3b8ee8b6d85bff59f24af5b3874fec38ac2337c17944ae1cfbd2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4EBGOHO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAO91ipTdMVYjDGPY3eBUuYhv0GV7D66Erf0MM%2FcJMHgAiEA0X1ytfj%2Fb5EW0vuvAT8VNlZJFBJdogZpumxMzA14Xi8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHYXxh4cqMyZRuLmircAw%2Fer6yRqPzxrclcT7J889qFpd8NAim58NV9cCUEoLdQPwp2fW4ymQ5UACvmrMFErG5L7LGhbl7t9BAiPb8w1o4SqTHAWgooeJzChAjWHW1FLmVuzYfRU5k1o3VU%2F6bVqEn24WdeXviCKbsvYMg7IQdXzZu4h8xKp7wA6NdLhvI%2BZG9QGRKk4Ty7M%2FlA8u265pftzXvTDrWNLxCcdYSh39gKDGpJr9zrLtnevC4yxovnvf6aqmEY1GeVvVkirGuArTdpvVt9UAjWD4M9e6BhJHPeDYFF%2B32OMl7y%2Bcd%2Bc92QXMx5yPsJ3SKhvd3FCC44ajJBzLmOBo817fxlzdcEbe6VW8EA3421%2BxhgNmtbiS6fcbGw6j20buKnet%2FMbUvdnWxA0BmD222i662dUPCbSV9wdFFzwMP2DIZIHftVq2oU%2BhDzHKAiL%2BTElbkOgUkFEv93lO%2BMxkYkNOFXQJK3BGkuPLrCLDgMQ9dk9KpYqUu73YnDRA2%2FOHicqSb1JP%2F6iz8%2FJd%2BWeVZIyweu9w591I4joFmk1zr5KP%2BgvJtS5FetWa%2FqNZmfl5gg9%2Bi4ZL5lTnZQL2GJZZfo%2BnTebhf2SZjjIWuUYPOLB2pCeYTo1T4UFTiV1WI%2Fim6SZDXKMITsh74GOqUBnoEv7Wwl18AehGHQIYPyCFHbEgWBr3OSSzNFvS9VRneN7Hzs6sgfUqkU%2FQyP86Z1YoXmmSsuGu4sQnfLp76jqZUDSlkfay5iIM%2FzkI691chZC0GdcNtcX7pyLRokt3PwKnZH0tlQD1pkegwGX9RnWCNuYBhFadYRy4SVrwEEqRuMgKDVBjBPNnKpYtYE9sR0WUAvesEXHw1SojXV%2FSgq%2Fw0OGBFh&X-Amz-Signature=7a0b40feebfe16b641f3355c6258b9427cf2f595c8c4f1bed53bda9fec0fa729&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4EBGOHO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAO91ipTdMVYjDGPY3eBUuYhv0GV7D66Erf0MM%2FcJMHgAiEA0X1ytfj%2Fb5EW0vuvAT8VNlZJFBJdogZpumxMzA14Xi8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHYXxh4cqMyZRuLmircAw%2Fer6yRqPzxrclcT7J889qFpd8NAim58NV9cCUEoLdQPwp2fW4ymQ5UACvmrMFErG5L7LGhbl7t9BAiPb8w1o4SqTHAWgooeJzChAjWHW1FLmVuzYfRU5k1o3VU%2F6bVqEn24WdeXviCKbsvYMg7IQdXzZu4h8xKp7wA6NdLhvI%2BZG9QGRKk4Ty7M%2FlA8u265pftzXvTDrWNLxCcdYSh39gKDGpJr9zrLtnevC4yxovnvf6aqmEY1GeVvVkirGuArTdpvVt9UAjWD4M9e6BhJHPeDYFF%2B32OMl7y%2Bcd%2Bc92QXMx5yPsJ3SKhvd3FCC44ajJBzLmOBo817fxlzdcEbe6VW8EA3421%2BxhgNmtbiS6fcbGw6j20buKnet%2FMbUvdnWxA0BmD222i662dUPCbSV9wdFFzwMP2DIZIHftVq2oU%2BhDzHKAiL%2BTElbkOgUkFEv93lO%2BMxkYkNOFXQJK3BGkuPLrCLDgMQ9dk9KpYqUu73YnDRA2%2FOHicqSb1JP%2F6iz8%2FJd%2BWeVZIyweu9w591I4joFmk1zr5KP%2BgvJtS5FetWa%2FqNZmfl5gg9%2Bi4ZL5lTnZQL2GJZZfo%2BnTebhf2SZjjIWuUYPOLB2pCeYTo1T4UFTiV1WI%2Fim6SZDXKMITsh74GOqUBnoEv7Wwl18AehGHQIYPyCFHbEgWBr3OSSzNFvS9VRneN7Hzs6sgfUqkU%2FQyP86Z1YoXmmSsuGu4sQnfLp76jqZUDSlkfay5iIM%2FzkI691chZC0GdcNtcX7pyLRokt3PwKnZH0tlQD1pkegwGX9RnWCNuYBhFadYRy4SVrwEEqRuMgKDVBjBPNnKpYtYE9sR0WUAvesEXHw1SojXV%2FSgq%2Fw0OGBFh&X-Amz-Signature=a5b38a0548a2fdcec2f8fa9642e882f5af15a489f042f870105c1e73339dd936&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4EBGOHO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAO91ipTdMVYjDGPY3eBUuYhv0GV7D66Erf0MM%2FcJMHgAiEA0X1ytfj%2Fb5EW0vuvAT8VNlZJFBJdogZpumxMzA14Xi8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHYXxh4cqMyZRuLmircAw%2Fer6yRqPzxrclcT7J889qFpd8NAim58NV9cCUEoLdQPwp2fW4ymQ5UACvmrMFErG5L7LGhbl7t9BAiPb8w1o4SqTHAWgooeJzChAjWHW1FLmVuzYfRU5k1o3VU%2F6bVqEn24WdeXviCKbsvYMg7IQdXzZu4h8xKp7wA6NdLhvI%2BZG9QGRKk4Ty7M%2FlA8u265pftzXvTDrWNLxCcdYSh39gKDGpJr9zrLtnevC4yxovnvf6aqmEY1GeVvVkirGuArTdpvVt9UAjWD4M9e6BhJHPeDYFF%2B32OMl7y%2Bcd%2Bc92QXMx5yPsJ3SKhvd3FCC44ajJBzLmOBo817fxlzdcEbe6VW8EA3421%2BxhgNmtbiS6fcbGw6j20buKnet%2FMbUvdnWxA0BmD222i662dUPCbSV9wdFFzwMP2DIZIHftVq2oU%2BhDzHKAiL%2BTElbkOgUkFEv93lO%2BMxkYkNOFXQJK3BGkuPLrCLDgMQ9dk9KpYqUu73YnDRA2%2FOHicqSb1JP%2F6iz8%2FJd%2BWeVZIyweu9w591I4joFmk1zr5KP%2BgvJtS5FetWa%2FqNZmfl5gg9%2Bi4ZL5lTnZQL2GJZZfo%2BnTebhf2SZjjIWuUYPOLB2pCeYTo1T4UFTiV1WI%2Fim6SZDXKMITsh74GOqUBnoEv7Wwl18AehGHQIYPyCFHbEgWBr3OSSzNFvS9VRneN7Hzs6sgfUqkU%2FQyP86Z1YoXmmSsuGu4sQnfLp76jqZUDSlkfay5iIM%2FzkI691chZC0GdcNtcX7pyLRokt3PwKnZH0tlQD1pkegwGX9RnWCNuYBhFadYRy4SVrwEEqRuMgKDVBjBPNnKpYtYE9sR0WUAvesEXHw1SojXV%2FSgq%2Fw0OGBFh&X-Amz-Signature=5703219633986b3e4328f2f6359c645061bd1a7d32dd34b03b124fe092f40de8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
