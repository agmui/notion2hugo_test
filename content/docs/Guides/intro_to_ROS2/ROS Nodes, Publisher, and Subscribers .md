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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB6STW4G%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCLA%2Fj0wyOJZ5kMrBBe4ID32g%2B4V%2Fup%2Bu7uz%2BmtorfzfgIhAKSibPI4ReuK%2FdAkrukixh%2BVWupLG8mj0CkAY8kvzUrCKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykO8DUpx6Du3YE5Lkq3ANyb1zopevI%2FG5uOh2dd82Hr%2B4jHBAJXY8Ac5n5Pashesl4Nw5IiwjE97hPdpe%2B1VJbq%2Fq%2B5rWWl8HtB0Jssd6n%2BijNKfsiACsMQpANJP3o3Jlb6mcnNuFSeAAeVmSod%2FzdHn3ZG6taGiaTO54Qg0hvl1hKoTWQDj6g1ydnDmjcpOM3ahyIv0ELtN8SVkd8uIY2Kq2gSfzZs%2FWtouAsemVQqLiEdXq6zpydUv0w%2B2xR7jAMNt2%2FxeYrKIkRxvmNzyyfRNqTHOs96y9%2F70UstGyrbJn0kqWhsROBKpQlQbWYGNldh4WEmaeoaINZ%2FWoiNFvj0GkDb8A3n28Lki7y0zqL8pwZemjJkhNK5VQtP9FneVNEJTgjlQlvCOi691gppMQU6Dx69JiVab%2BpO%2FKfwUN2PjlKoP0ccVOonDRAttgAeuhPtfpH7l0FAXsGxMK6mrHqIpsf%2BxyjqY0HLqx7YdP9b%2BSZB7xZsYb4ILAGkWTyPWxsCdKtIrMARQr17pFmA5xGZ8uimRjv0tovpYP08t%2Bkq6Nqk6MOR7ua2lvS79cDQRnvXbLnu00iucmD4%2BYoRWY0sC4%2FWxUE565byF4k60CUK6DiEV%2Fo%2FSGPeRb%2BpwFPPXF19oXVlGx86KjvHDClk9%2FCBjqkAVs1czUuOIAkXFNKhr73lD7p5SBEfiikwXkcMJDPGGDlGLzLHKC3Ic4iwTut4iNpowVw9VNZhQKaYQYVMqXPLZZzpcgvYzCtDJA1GdLEXYCT6r47YxdDPgieyGOUai%2FuqNnYHkzNaOq%2B8qoPZ%2BiLw3dG8qu7kzdU5YIwm5APpe0PivytnqDCsUDGLK0dbTqxAVOopRNk3cq7gdD2igQQolqlwTVj&X-Amz-Signature=b1f4f29d016148156f35423db8fc44d32fcc10e6b5492614370e01db609da8c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB6STW4G%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCLA%2Fj0wyOJZ5kMrBBe4ID32g%2B4V%2Fup%2Bu7uz%2BmtorfzfgIhAKSibPI4ReuK%2FdAkrukixh%2BVWupLG8mj0CkAY8kvzUrCKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykO8DUpx6Du3YE5Lkq3ANyb1zopevI%2FG5uOh2dd82Hr%2B4jHBAJXY8Ac5n5Pashesl4Nw5IiwjE97hPdpe%2B1VJbq%2Fq%2B5rWWl8HtB0Jssd6n%2BijNKfsiACsMQpANJP3o3Jlb6mcnNuFSeAAeVmSod%2FzdHn3ZG6taGiaTO54Qg0hvl1hKoTWQDj6g1ydnDmjcpOM3ahyIv0ELtN8SVkd8uIY2Kq2gSfzZs%2FWtouAsemVQqLiEdXq6zpydUv0w%2B2xR7jAMNt2%2FxeYrKIkRxvmNzyyfRNqTHOs96y9%2F70UstGyrbJn0kqWhsROBKpQlQbWYGNldh4WEmaeoaINZ%2FWoiNFvj0GkDb8A3n28Lki7y0zqL8pwZemjJkhNK5VQtP9FneVNEJTgjlQlvCOi691gppMQU6Dx69JiVab%2BpO%2FKfwUN2PjlKoP0ccVOonDRAttgAeuhPtfpH7l0FAXsGxMK6mrHqIpsf%2BxyjqY0HLqx7YdP9b%2BSZB7xZsYb4ILAGkWTyPWxsCdKtIrMARQr17pFmA5xGZ8uimRjv0tovpYP08t%2Bkq6Nqk6MOR7ua2lvS79cDQRnvXbLnu00iucmD4%2BYoRWY0sC4%2FWxUE565byF4k60CUK6DiEV%2Fo%2FSGPeRb%2BpwFPPXF19oXVlGx86KjvHDClk9%2FCBjqkAVs1czUuOIAkXFNKhr73lD7p5SBEfiikwXkcMJDPGGDlGLzLHKC3Ic4iwTut4iNpowVw9VNZhQKaYQYVMqXPLZZzpcgvYzCtDJA1GdLEXYCT6r47YxdDPgieyGOUai%2FuqNnYHkzNaOq%2B8qoPZ%2BiLw3dG8qu7kzdU5YIwm5APpe0PivytnqDCsUDGLK0dbTqxAVOopRNk3cq7gdD2igQQolqlwTVj&X-Amz-Signature=0ab67b5c55f284a1cc5eb4010f7715777e42d0b393c360454ca1ae9f6fb16080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB6STW4G%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCLA%2Fj0wyOJZ5kMrBBe4ID32g%2B4V%2Fup%2Bu7uz%2BmtorfzfgIhAKSibPI4ReuK%2FdAkrukixh%2BVWupLG8mj0CkAY8kvzUrCKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykO8DUpx6Du3YE5Lkq3ANyb1zopevI%2FG5uOh2dd82Hr%2B4jHBAJXY8Ac5n5Pashesl4Nw5IiwjE97hPdpe%2B1VJbq%2Fq%2B5rWWl8HtB0Jssd6n%2BijNKfsiACsMQpANJP3o3Jlb6mcnNuFSeAAeVmSod%2FzdHn3ZG6taGiaTO54Qg0hvl1hKoTWQDj6g1ydnDmjcpOM3ahyIv0ELtN8SVkd8uIY2Kq2gSfzZs%2FWtouAsemVQqLiEdXq6zpydUv0w%2B2xR7jAMNt2%2FxeYrKIkRxvmNzyyfRNqTHOs96y9%2F70UstGyrbJn0kqWhsROBKpQlQbWYGNldh4WEmaeoaINZ%2FWoiNFvj0GkDb8A3n28Lki7y0zqL8pwZemjJkhNK5VQtP9FneVNEJTgjlQlvCOi691gppMQU6Dx69JiVab%2BpO%2FKfwUN2PjlKoP0ccVOonDRAttgAeuhPtfpH7l0FAXsGxMK6mrHqIpsf%2BxyjqY0HLqx7YdP9b%2BSZB7xZsYb4ILAGkWTyPWxsCdKtIrMARQr17pFmA5xGZ8uimRjv0tovpYP08t%2Bkq6Nqk6MOR7ua2lvS79cDQRnvXbLnu00iucmD4%2BYoRWY0sC4%2FWxUE565byF4k60CUK6DiEV%2Fo%2FSGPeRb%2BpwFPPXF19oXVlGx86KjvHDClk9%2FCBjqkAVs1czUuOIAkXFNKhr73lD7p5SBEfiikwXkcMJDPGGDlGLzLHKC3Ic4iwTut4iNpowVw9VNZhQKaYQYVMqXPLZZzpcgvYzCtDJA1GdLEXYCT6r47YxdDPgieyGOUai%2FuqNnYHkzNaOq%2B8qoPZ%2BiLw3dG8qu7kzdU5YIwm5APpe0PivytnqDCsUDGLK0dbTqxAVOopRNk3cq7gdD2igQQolqlwTVj&X-Amz-Signature=0b9972ba30268d3e1ce0443077275c6a14aa6ee19c185cf942e8b51ee3fb9ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB6STW4G%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCLA%2Fj0wyOJZ5kMrBBe4ID32g%2B4V%2Fup%2Bu7uz%2BmtorfzfgIhAKSibPI4ReuK%2FdAkrukixh%2BVWupLG8mj0CkAY8kvzUrCKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykO8DUpx6Du3YE5Lkq3ANyb1zopevI%2FG5uOh2dd82Hr%2B4jHBAJXY8Ac5n5Pashesl4Nw5IiwjE97hPdpe%2B1VJbq%2Fq%2B5rWWl8HtB0Jssd6n%2BijNKfsiACsMQpANJP3o3Jlb6mcnNuFSeAAeVmSod%2FzdHn3ZG6taGiaTO54Qg0hvl1hKoTWQDj6g1ydnDmjcpOM3ahyIv0ELtN8SVkd8uIY2Kq2gSfzZs%2FWtouAsemVQqLiEdXq6zpydUv0w%2B2xR7jAMNt2%2FxeYrKIkRxvmNzyyfRNqTHOs96y9%2F70UstGyrbJn0kqWhsROBKpQlQbWYGNldh4WEmaeoaINZ%2FWoiNFvj0GkDb8A3n28Lki7y0zqL8pwZemjJkhNK5VQtP9FneVNEJTgjlQlvCOi691gppMQU6Dx69JiVab%2BpO%2FKfwUN2PjlKoP0ccVOonDRAttgAeuhPtfpH7l0FAXsGxMK6mrHqIpsf%2BxyjqY0HLqx7YdP9b%2BSZB7xZsYb4ILAGkWTyPWxsCdKtIrMARQr17pFmA5xGZ8uimRjv0tovpYP08t%2Bkq6Nqk6MOR7ua2lvS79cDQRnvXbLnu00iucmD4%2BYoRWY0sC4%2FWxUE565byF4k60CUK6DiEV%2Fo%2FSGPeRb%2BpwFPPXF19oXVlGx86KjvHDClk9%2FCBjqkAVs1czUuOIAkXFNKhr73lD7p5SBEfiikwXkcMJDPGGDlGLzLHKC3Ic4iwTut4iNpowVw9VNZhQKaYQYVMqXPLZZzpcgvYzCtDJA1GdLEXYCT6r47YxdDPgieyGOUai%2FuqNnYHkzNaOq%2B8qoPZ%2BiLw3dG8qu7kzdU5YIwm5APpe0PivytnqDCsUDGLK0dbTqxAVOopRNk3cq7gdD2igQQolqlwTVj&X-Amz-Signature=07ed8991c728b533983b3cee1272a1f250ff23c0c1e9baf052aa9e1c06eb8a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB6STW4G%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCLA%2Fj0wyOJZ5kMrBBe4ID32g%2B4V%2Fup%2Bu7uz%2BmtorfzfgIhAKSibPI4ReuK%2FdAkrukixh%2BVWupLG8mj0CkAY8kvzUrCKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykO8DUpx6Du3YE5Lkq3ANyb1zopevI%2FG5uOh2dd82Hr%2B4jHBAJXY8Ac5n5Pashesl4Nw5IiwjE97hPdpe%2B1VJbq%2Fq%2B5rWWl8HtB0Jssd6n%2BijNKfsiACsMQpANJP3o3Jlb6mcnNuFSeAAeVmSod%2FzdHn3ZG6taGiaTO54Qg0hvl1hKoTWQDj6g1ydnDmjcpOM3ahyIv0ELtN8SVkd8uIY2Kq2gSfzZs%2FWtouAsemVQqLiEdXq6zpydUv0w%2B2xR7jAMNt2%2FxeYrKIkRxvmNzyyfRNqTHOs96y9%2F70UstGyrbJn0kqWhsROBKpQlQbWYGNldh4WEmaeoaINZ%2FWoiNFvj0GkDb8A3n28Lki7y0zqL8pwZemjJkhNK5VQtP9FneVNEJTgjlQlvCOi691gppMQU6Dx69JiVab%2BpO%2FKfwUN2PjlKoP0ccVOonDRAttgAeuhPtfpH7l0FAXsGxMK6mrHqIpsf%2BxyjqY0HLqx7YdP9b%2BSZB7xZsYb4ILAGkWTyPWxsCdKtIrMARQr17pFmA5xGZ8uimRjv0tovpYP08t%2Bkq6Nqk6MOR7ua2lvS79cDQRnvXbLnu00iucmD4%2BYoRWY0sC4%2FWxUE565byF4k60CUK6DiEV%2Fo%2FSGPeRb%2BpwFPPXF19oXVlGx86KjvHDClk9%2FCBjqkAVs1czUuOIAkXFNKhr73lD7p5SBEfiikwXkcMJDPGGDlGLzLHKC3Ic4iwTut4iNpowVw9VNZhQKaYQYVMqXPLZZzpcgvYzCtDJA1GdLEXYCT6r47YxdDPgieyGOUai%2FuqNnYHkzNaOq%2B8qoPZ%2BiLw3dG8qu7kzdU5YIwm5APpe0PivytnqDCsUDGLK0dbTqxAVOopRNk3cq7gdD2igQQolqlwTVj&X-Amz-Signature=83882f48cab2cd49281848506478a7dbb81bc53a747a414d838d7b92a20e5993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB6STW4G%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCLA%2Fj0wyOJZ5kMrBBe4ID32g%2B4V%2Fup%2Bu7uz%2BmtorfzfgIhAKSibPI4ReuK%2FdAkrukixh%2BVWupLG8mj0CkAY8kvzUrCKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykO8DUpx6Du3YE5Lkq3ANyb1zopevI%2FG5uOh2dd82Hr%2B4jHBAJXY8Ac5n5Pashesl4Nw5IiwjE97hPdpe%2B1VJbq%2Fq%2B5rWWl8HtB0Jssd6n%2BijNKfsiACsMQpANJP3o3Jlb6mcnNuFSeAAeVmSod%2FzdHn3ZG6taGiaTO54Qg0hvl1hKoTWQDj6g1ydnDmjcpOM3ahyIv0ELtN8SVkd8uIY2Kq2gSfzZs%2FWtouAsemVQqLiEdXq6zpydUv0w%2B2xR7jAMNt2%2FxeYrKIkRxvmNzyyfRNqTHOs96y9%2F70UstGyrbJn0kqWhsROBKpQlQbWYGNldh4WEmaeoaINZ%2FWoiNFvj0GkDb8A3n28Lki7y0zqL8pwZemjJkhNK5VQtP9FneVNEJTgjlQlvCOi691gppMQU6Dx69JiVab%2BpO%2FKfwUN2PjlKoP0ccVOonDRAttgAeuhPtfpH7l0FAXsGxMK6mrHqIpsf%2BxyjqY0HLqx7YdP9b%2BSZB7xZsYb4ILAGkWTyPWxsCdKtIrMARQr17pFmA5xGZ8uimRjv0tovpYP08t%2Bkq6Nqk6MOR7ua2lvS79cDQRnvXbLnu00iucmD4%2BYoRWY0sC4%2FWxUE565byF4k60CUK6DiEV%2Fo%2FSGPeRb%2BpwFPPXF19oXVlGx86KjvHDClk9%2FCBjqkAVs1czUuOIAkXFNKhr73lD7p5SBEfiikwXkcMJDPGGDlGLzLHKC3Ic4iwTut4iNpowVw9VNZhQKaYQYVMqXPLZZzpcgvYzCtDJA1GdLEXYCT6r47YxdDPgieyGOUai%2FuqNnYHkzNaOq%2B8qoPZ%2BiLw3dG8qu7kzdU5YIwm5APpe0PivytnqDCsUDGLK0dbTqxAVOopRNk3cq7gdD2igQQolqlwTVj&X-Amz-Signature=9b18073ad4f7f0a8500c48ce154676b4d772874fa53a9b99f8db7bed91701ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB6STW4G%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCLA%2Fj0wyOJZ5kMrBBe4ID32g%2B4V%2Fup%2Bu7uz%2BmtorfzfgIhAKSibPI4ReuK%2FdAkrukixh%2BVWupLG8mj0CkAY8kvzUrCKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykO8DUpx6Du3YE5Lkq3ANyb1zopevI%2FG5uOh2dd82Hr%2B4jHBAJXY8Ac5n5Pashesl4Nw5IiwjE97hPdpe%2B1VJbq%2Fq%2B5rWWl8HtB0Jssd6n%2BijNKfsiACsMQpANJP3o3Jlb6mcnNuFSeAAeVmSod%2FzdHn3ZG6taGiaTO54Qg0hvl1hKoTWQDj6g1ydnDmjcpOM3ahyIv0ELtN8SVkd8uIY2Kq2gSfzZs%2FWtouAsemVQqLiEdXq6zpydUv0w%2B2xR7jAMNt2%2FxeYrKIkRxvmNzyyfRNqTHOs96y9%2F70UstGyrbJn0kqWhsROBKpQlQbWYGNldh4WEmaeoaINZ%2FWoiNFvj0GkDb8A3n28Lki7y0zqL8pwZemjJkhNK5VQtP9FneVNEJTgjlQlvCOi691gppMQU6Dx69JiVab%2BpO%2FKfwUN2PjlKoP0ccVOonDRAttgAeuhPtfpH7l0FAXsGxMK6mrHqIpsf%2BxyjqY0HLqx7YdP9b%2BSZB7xZsYb4ILAGkWTyPWxsCdKtIrMARQr17pFmA5xGZ8uimRjv0tovpYP08t%2Bkq6Nqk6MOR7ua2lvS79cDQRnvXbLnu00iucmD4%2BYoRWY0sC4%2FWxUE565byF4k60CUK6DiEV%2Fo%2FSGPeRb%2BpwFPPXF19oXVlGx86KjvHDClk9%2FCBjqkAVs1czUuOIAkXFNKhr73lD7p5SBEfiikwXkcMJDPGGDlGLzLHKC3Ic4iwTut4iNpowVw9VNZhQKaYQYVMqXPLZZzpcgvYzCtDJA1GdLEXYCT6r47YxdDPgieyGOUai%2FuqNnYHkzNaOq%2B8qoPZ%2BiLw3dG8qu7kzdU5YIwm5APpe0PivytnqDCsUDGLK0dbTqxAVOopRNk3cq7gdD2igQQolqlwTVj&X-Amz-Signature=8ac3dbdfc3fae48161099e97b87a1401d2a1eb32f0bf5c56487cf3d3073af324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB6STW4G%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCLA%2Fj0wyOJZ5kMrBBe4ID32g%2B4V%2Fup%2Bu7uz%2BmtorfzfgIhAKSibPI4ReuK%2FdAkrukixh%2BVWupLG8mj0CkAY8kvzUrCKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykO8DUpx6Du3YE5Lkq3ANyb1zopevI%2FG5uOh2dd82Hr%2B4jHBAJXY8Ac5n5Pashesl4Nw5IiwjE97hPdpe%2B1VJbq%2Fq%2B5rWWl8HtB0Jssd6n%2BijNKfsiACsMQpANJP3o3Jlb6mcnNuFSeAAeVmSod%2FzdHn3ZG6taGiaTO54Qg0hvl1hKoTWQDj6g1ydnDmjcpOM3ahyIv0ELtN8SVkd8uIY2Kq2gSfzZs%2FWtouAsemVQqLiEdXq6zpydUv0w%2B2xR7jAMNt2%2FxeYrKIkRxvmNzyyfRNqTHOs96y9%2F70UstGyrbJn0kqWhsROBKpQlQbWYGNldh4WEmaeoaINZ%2FWoiNFvj0GkDb8A3n28Lki7y0zqL8pwZemjJkhNK5VQtP9FneVNEJTgjlQlvCOi691gppMQU6Dx69JiVab%2BpO%2FKfwUN2PjlKoP0ccVOonDRAttgAeuhPtfpH7l0FAXsGxMK6mrHqIpsf%2BxyjqY0HLqx7YdP9b%2BSZB7xZsYb4ILAGkWTyPWxsCdKtIrMARQr17pFmA5xGZ8uimRjv0tovpYP08t%2Bkq6Nqk6MOR7ua2lvS79cDQRnvXbLnu00iucmD4%2BYoRWY0sC4%2FWxUE565byF4k60CUK6DiEV%2Fo%2FSGPeRb%2BpwFPPXF19oXVlGx86KjvHDClk9%2FCBjqkAVs1czUuOIAkXFNKhr73lD7p5SBEfiikwXkcMJDPGGDlGLzLHKC3Ic4iwTut4iNpowVw9VNZhQKaYQYVMqXPLZZzpcgvYzCtDJA1GdLEXYCT6r47YxdDPgieyGOUai%2FuqNnYHkzNaOq%2B8qoPZ%2BiLw3dG8qu7kzdU5YIwm5APpe0PivytnqDCsUDGLK0dbTqxAVOopRNk3cq7gdD2igQQolqlwTVj&X-Amz-Signature=bc26199e0f8b0139009201cc2baa611a4fbaa4e32b2763cdabdc881376fbf42e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
