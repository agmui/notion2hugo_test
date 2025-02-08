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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOFMGI6L%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDPXLMv57cYBXQ2ljh4mFYAlpiotmL4ABhBZFmGeyILXAiA01g2gf5x%2B2mC5vOEPTWCN2z%2FZ6YkbWRrxAwamvlVnsSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaN5aAcmpbxsMmcCzKtwDTgc70toUHLFS96pA8z%2By4wzixKfmlTS165BOH5Y3OkLvP8vBvpBQjsgohuTo6cUgsmQKq4x1RDBeIv0DwycA2pTrYNCquuqTxT1NpH2nkstw5bq74UO3%2Fx0LDQ0bYGmfX0kSAWm%2F2tc%2BHR87Se28yx%2FPIjKi%2BLwkQ2%2BfM1BOafiMUew%2FVzSLfrihCIEVWznXZKTac%2FJbyisLb8lSvGIUs6TmxE2YPj5rpUL5ZMZpRWdYN6WbqPjSuMmQY3cqE1zfASMdG7cERpbuD2bIhJlFNmogqX7V4lfUTdZaoJ8n42bqj96H2SL6Dbd9FGR7X2wKhQBjcy9kYv7iUfn7V5ycCPMzUId5SWKXh8ET1PwNibvmOqEp76Z12v%2FFpBiLjYTBrHT%2BvEhJkbM5n5l4pqBcmI2g%2BY0hfen1EOyODLL0bV2fFEj0WWMmT68OCX5lo0OxeeUVpA6O4FSEKjFO0UrfnJruob2LYphJG%2BwV0Ine2oBMtyqtX64OCFMIW%2BG7tOVwmG5HlnSh3euwZSjanoDSESVUOoc1kMK6a62YgVq7MEOgZkFByr79RnmQDwP88lSx1K%2FPOPmVIzZ%2FVmt7jcVjVAGaPLgkHSajlx6NK7Dt53DKWF272j7ExAiGI0Ew9vmavQY6pgEAXxQMhlaDeGjC%2BTm1wMrnrJ0LPKhML1LLUyI1Z4EIyOBBIoIwXUttehdkB%2BJ6jazgk5qZW0wSm9miRbdx1aNzBl4zXo7cfY18CSStDL%2BeOsmXg4Ej7laCaWfGAYmBOjf0sTCA%2BVghZWb4KWSBXm5BkN6uWNAeKwkGdaJOKSHn30IigMpTajQ8JeX9qlTYhDDDRrLCnep6Ri8llNS5W4uQPY7lvTLs&X-Amz-Signature=af6544fded4b1df8507c5a688dabe119a2d37e267a4e6994cc5c9c7ab18417bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOFMGI6L%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDPXLMv57cYBXQ2ljh4mFYAlpiotmL4ABhBZFmGeyILXAiA01g2gf5x%2B2mC5vOEPTWCN2z%2FZ6YkbWRrxAwamvlVnsSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaN5aAcmpbxsMmcCzKtwDTgc70toUHLFS96pA8z%2By4wzixKfmlTS165BOH5Y3OkLvP8vBvpBQjsgohuTo6cUgsmQKq4x1RDBeIv0DwycA2pTrYNCquuqTxT1NpH2nkstw5bq74UO3%2Fx0LDQ0bYGmfX0kSAWm%2F2tc%2BHR87Se28yx%2FPIjKi%2BLwkQ2%2BfM1BOafiMUew%2FVzSLfrihCIEVWznXZKTac%2FJbyisLb8lSvGIUs6TmxE2YPj5rpUL5ZMZpRWdYN6WbqPjSuMmQY3cqE1zfASMdG7cERpbuD2bIhJlFNmogqX7V4lfUTdZaoJ8n42bqj96H2SL6Dbd9FGR7X2wKhQBjcy9kYv7iUfn7V5ycCPMzUId5SWKXh8ET1PwNibvmOqEp76Z12v%2FFpBiLjYTBrHT%2BvEhJkbM5n5l4pqBcmI2g%2BY0hfen1EOyODLL0bV2fFEj0WWMmT68OCX5lo0OxeeUVpA6O4FSEKjFO0UrfnJruob2LYphJG%2BwV0Ine2oBMtyqtX64OCFMIW%2BG7tOVwmG5HlnSh3euwZSjanoDSESVUOoc1kMK6a62YgVq7MEOgZkFByr79RnmQDwP88lSx1K%2FPOPmVIzZ%2FVmt7jcVjVAGaPLgkHSajlx6NK7Dt53DKWF272j7ExAiGI0Ew9vmavQY6pgEAXxQMhlaDeGjC%2BTm1wMrnrJ0LPKhML1LLUyI1Z4EIyOBBIoIwXUttehdkB%2BJ6jazgk5qZW0wSm9miRbdx1aNzBl4zXo7cfY18CSStDL%2BeOsmXg4Ej7laCaWfGAYmBOjf0sTCA%2BVghZWb4KWSBXm5BkN6uWNAeKwkGdaJOKSHn30IigMpTajQ8JeX9qlTYhDDDRrLCnep6Ri8llNS5W4uQPY7lvTLs&X-Amz-Signature=c4483160dabb66d9bc699897313d92f23c64789c0ef316cc491d50439402b663&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOFMGI6L%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDPXLMv57cYBXQ2ljh4mFYAlpiotmL4ABhBZFmGeyILXAiA01g2gf5x%2B2mC5vOEPTWCN2z%2FZ6YkbWRrxAwamvlVnsSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaN5aAcmpbxsMmcCzKtwDTgc70toUHLFS96pA8z%2By4wzixKfmlTS165BOH5Y3OkLvP8vBvpBQjsgohuTo6cUgsmQKq4x1RDBeIv0DwycA2pTrYNCquuqTxT1NpH2nkstw5bq74UO3%2Fx0LDQ0bYGmfX0kSAWm%2F2tc%2BHR87Se28yx%2FPIjKi%2BLwkQ2%2BfM1BOafiMUew%2FVzSLfrihCIEVWznXZKTac%2FJbyisLb8lSvGIUs6TmxE2YPj5rpUL5ZMZpRWdYN6WbqPjSuMmQY3cqE1zfASMdG7cERpbuD2bIhJlFNmogqX7V4lfUTdZaoJ8n42bqj96H2SL6Dbd9FGR7X2wKhQBjcy9kYv7iUfn7V5ycCPMzUId5SWKXh8ET1PwNibvmOqEp76Z12v%2FFpBiLjYTBrHT%2BvEhJkbM5n5l4pqBcmI2g%2BY0hfen1EOyODLL0bV2fFEj0WWMmT68OCX5lo0OxeeUVpA6O4FSEKjFO0UrfnJruob2LYphJG%2BwV0Ine2oBMtyqtX64OCFMIW%2BG7tOVwmG5HlnSh3euwZSjanoDSESVUOoc1kMK6a62YgVq7MEOgZkFByr79RnmQDwP88lSx1K%2FPOPmVIzZ%2FVmt7jcVjVAGaPLgkHSajlx6NK7Dt53DKWF272j7ExAiGI0Ew9vmavQY6pgEAXxQMhlaDeGjC%2BTm1wMrnrJ0LPKhML1LLUyI1Z4EIyOBBIoIwXUttehdkB%2BJ6jazgk5qZW0wSm9miRbdx1aNzBl4zXo7cfY18CSStDL%2BeOsmXg4Ej7laCaWfGAYmBOjf0sTCA%2BVghZWb4KWSBXm5BkN6uWNAeKwkGdaJOKSHn30IigMpTajQ8JeX9qlTYhDDDRrLCnep6Ri8llNS5W4uQPY7lvTLs&X-Amz-Signature=abdb99968bdbbb203742b03590ae0dd893df753e0a7f6258e1b4317118b2bba1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOFMGI6L%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDPXLMv57cYBXQ2ljh4mFYAlpiotmL4ABhBZFmGeyILXAiA01g2gf5x%2B2mC5vOEPTWCN2z%2FZ6YkbWRrxAwamvlVnsSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaN5aAcmpbxsMmcCzKtwDTgc70toUHLFS96pA8z%2By4wzixKfmlTS165BOH5Y3OkLvP8vBvpBQjsgohuTo6cUgsmQKq4x1RDBeIv0DwycA2pTrYNCquuqTxT1NpH2nkstw5bq74UO3%2Fx0LDQ0bYGmfX0kSAWm%2F2tc%2BHR87Se28yx%2FPIjKi%2BLwkQ2%2BfM1BOafiMUew%2FVzSLfrihCIEVWznXZKTac%2FJbyisLb8lSvGIUs6TmxE2YPj5rpUL5ZMZpRWdYN6WbqPjSuMmQY3cqE1zfASMdG7cERpbuD2bIhJlFNmogqX7V4lfUTdZaoJ8n42bqj96H2SL6Dbd9FGR7X2wKhQBjcy9kYv7iUfn7V5ycCPMzUId5SWKXh8ET1PwNibvmOqEp76Z12v%2FFpBiLjYTBrHT%2BvEhJkbM5n5l4pqBcmI2g%2BY0hfen1EOyODLL0bV2fFEj0WWMmT68OCX5lo0OxeeUVpA6O4FSEKjFO0UrfnJruob2LYphJG%2BwV0Ine2oBMtyqtX64OCFMIW%2BG7tOVwmG5HlnSh3euwZSjanoDSESVUOoc1kMK6a62YgVq7MEOgZkFByr79RnmQDwP88lSx1K%2FPOPmVIzZ%2FVmt7jcVjVAGaPLgkHSajlx6NK7Dt53DKWF272j7ExAiGI0Ew9vmavQY6pgEAXxQMhlaDeGjC%2BTm1wMrnrJ0LPKhML1LLUyI1Z4EIyOBBIoIwXUttehdkB%2BJ6jazgk5qZW0wSm9miRbdx1aNzBl4zXo7cfY18CSStDL%2BeOsmXg4Ej7laCaWfGAYmBOjf0sTCA%2BVghZWb4KWSBXm5BkN6uWNAeKwkGdaJOKSHn30IigMpTajQ8JeX9qlTYhDDDRrLCnep6Ri8llNS5W4uQPY7lvTLs&X-Amz-Signature=0985d7ec235cebcb4d521e6f601a77d29919e554c8529bae59649c3937f2c66d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOFMGI6L%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDPXLMv57cYBXQ2ljh4mFYAlpiotmL4ABhBZFmGeyILXAiA01g2gf5x%2B2mC5vOEPTWCN2z%2FZ6YkbWRrxAwamvlVnsSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaN5aAcmpbxsMmcCzKtwDTgc70toUHLFS96pA8z%2By4wzixKfmlTS165BOH5Y3OkLvP8vBvpBQjsgohuTo6cUgsmQKq4x1RDBeIv0DwycA2pTrYNCquuqTxT1NpH2nkstw5bq74UO3%2Fx0LDQ0bYGmfX0kSAWm%2F2tc%2BHR87Se28yx%2FPIjKi%2BLwkQ2%2BfM1BOafiMUew%2FVzSLfrihCIEVWznXZKTac%2FJbyisLb8lSvGIUs6TmxE2YPj5rpUL5ZMZpRWdYN6WbqPjSuMmQY3cqE1zfASMdG7cERpbuD2bIhJlFNmogqX7V4lfUTdZaoJ8n42bqj96H2SL6Dbd9FGR7X2wKhQBjcy9kYv7iUfn7V5ycCPMzUId5SWKXh8ET1PwNibvmOqEp76Z12v%2FFpBiLjYTBrHT%2BvEhJkbM5n5l4pqBcmI2g%2BY0hfen1EOyODLL0bV2fFEj0WWMmT68OCX5lo0OxeeUVpA6O4FSEKjFO0UrfnJruob2LYphJG%2BwV0Ine2oBMtyqtX64OCFMIW%2BG7tOVwmG5HlnSh3euwZSjanoDSESVUOoc1kMK6a62YgVq7MEOgZkFByr79RnmQDwP88lSx1K%2FPOPmVIzZ%2FVmt7jcVjVAGaPLgkHSajlx6NK7Dt53DKWF272j7ExAiGI0Ew9vmavQY6pgEAXxQMhlaDeGjC%2BTm1wMrnrJ0LPKhML1LLUyI1Z4EIyOBBIoIwXUttehdkB%2BJ6jazgk5qZW0wSm9miRbdx1aNzBl4zXo7cfY18CSStDL%2BeOsmXg4Ej7laCaWfGAYmBOjf0sTCA%2BVghZWb4KWSBXm5BkN6uWNAeKwkGdaJOKSHn30IigMpTajQ8JeX9qlTYhDDDRrLCnep6Ri8llNS5W4uQPY7lvTLs&X-Amz-Signature=edd015e9019757fe403e770266b6a1b3866daa730f5cf906f4ceecc091ee3c3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOFMGI6L%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDPXLMv57cYBXQ2ljh4mFYAlpiotmL4ABhBZFmGeyILXAiA01g2gf5x%2B2mC5vOEPTWCN2z%2FZ6YkbWRrxAwamvlVnsSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaN5aAcmpbxsMmcCzKtwDTgc70toUHLFS96pA8z%2By4wzixKfmlTS165BOH5Y3OkLvP8vBvpBQjsgohuTo6cUgsmQKq4x1RDBeIv0DwycA2pTrYNCquuqTxT1NpH2nkstw5bq74UO3%2Fx0LDQ0bYGmfX0kSAWm%2F2tc%2BHR87Se28yx%2FPIjKi%2BLwkQ2%2BfM1BOafiMUew%2FVzSLfrihCIEVWznXZKTac%2FJbyisLb8lSvGIUs6TmxE2YPj5rpUL5ZMZpRWdYN6WbqPjSuMmQY3cqE1zfASMdG7cERpbuD2bIhJlFNmogqX7V4lfUTdZaoJ8n42bqj96H2SL6Dbd9FGR7X2wKhQBjcy9kYv7iUfn7V5ycCPMzUId5SWKXh8ET1PwNibvmOqEp76Z12v%2FFpBiLjYTBrHT%2BvEhJkbM5n5l4pqBcmI2g%2BY0hfen1EOyODLL0bV2fFEj0WWMmT68OCX5lo0OxeeUVpA6O4FSEKjFO0UrfnJruob2LYphJG%2BwV0Ine2oBMtyqtX64OCFMIW%2BG7tOVwmG5HlnSh3euwZSjanoDSESVUOoc1kMK6a62YgVq7MEOgZkFByr79RnmQDwP88lSx1K%2FPOPmVIzZ%2FVmt7jcVjVAGaPLgkHSajlx6NK7Dt53DKWF272j7ExAiGI0Ew9vmavQY6pgEAXxQMhlaDeGjC%2BTm1wMrnrJ0LPKhML1LLUyI1Z4EIyOBBIoIwXUttehdkB%2BJ6jazgk5qZW0wSm9miRbdx1aNzBl4zXo7cfY18CSStDL%2BeOsmXg4Ej7laCaWfGAYmBOjf0sTCA%2BVghZWb4KWSBXm5BkN6uWNAeKwkGdaJOKSHn30IigMpTajQ8JeX9qlTYhDDDRrLCnep6Ri8llNS5W4uQPY7lvTLs&X-Amz-Signature=548471c51afdc041e672bd043fba6e80ea63dc554f711312e2082f78cc87db2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOFMGI6L%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDPXLMv57cYBXQ2ljh4mFYAlpiotmL4ABhBZFmGeyILXAiA01g2gf5x%2B2mC5vOEPTWCN2z%2FZ6YkbWRrxAwamvlVnsSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaN5aAcmpbxsMmcCzKtwDTgc70toUHLFS96pA8z%2By4wzixKfmlTS165BOH5Y3OkLvP8vBvpBQjsgohuTo6cUgsmQKq4x1RDBeIv0DwycA2pTrYNCquuqTxT1NpH2nkstw5bq74UO3%2Fx0LDQ0bYGmfX0kSAWm%2F2tc%2BHR87Se28yx%2FPIjKi%2BLwkQ2%2BfM1BOafiMUew%2FVzSLfrihCIEVWznXZKTac%2FJbyisLb8lSvGIUs6TmxE2YPj5rpUL5ZMZpRWdYN6WbqPjSuMmQY3cqE1zfASMdG7cERpbuD2bIhJlFNmogqX7V4lfUTdZaoJ8n42bqj96H2SL6Dbd9FGR7X2wKhQBjcy9kYv7iUfn7V5ycCPMzUId5SWKXh8ET1PwNibvmOqEp76Z12v%2FFpBiLjYTBrHT%2BvEhJkbM5n5l4pqBcmI2g%2BY0hfen1EOyODLL0bV2fFEj0WWMmT68OCX5lo0OxeeUVpA6O4FSEKjFO0UrfnJruob2LYphJG%2BwV0Ine2oBMtyqtX64OCFMIW%2BG7tOVwmG5HlnSh3euwZSjanoDSESVUOoc1kMK6a62YgVq7MEOgZkFByr79RnmQDwP88lSx1K%2FPOPmVIzZ%2FVmt7jcVjVAGaPLgkHSajlx6NK7Dt53DKWF272j7ExAiGI0Ew9vmavQY6pgEAXxQMhlaDeGjC%2BTm1wMrnrJ0LPKhML1LLUyI1Z4EIyOBBIoIwXUttehdkB%2BJ6jazgk5qZW0wSm9miRbdx1aNzBl4zXo7cfY18CSStDL%2BeOsmXg4Ej7laCaWfGAYmBOjf0sTCA%2BVghZWb4KWSBXm5BkN6uWNAeKwkGdaJOKSHn30IigMpTajQ8JeX9qlTYhDDDRrLCnep6Ri8llNS5W4uQPY7lvTLs&X-Amz-Signature=50c95690304bf8c7a7ac30b7cb753ae35f1810234ca02b1395266caab0dc3d40&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOFMGI6L%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDPXLMv57cYBXQ2ljh4mFYAlpiotmL4ABhBZFmGeyILXAiA01g2gf5x%2B2mC5vOEPTWCN2z%2FZ6YkbWRrxAwamvlVnsSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaN5aAcmpbxsMmcCzKtwDTgc70toUHLFS96pA8z%2By4wzixKfmlTS165BOH5Y3OkLvP8vBvpBQjsgohuTo6cUgsmQKq4x1RDBeIv0DwycA2pTrYNCquuqTxT1NpH2nkstw5bq74UO3%2Fx0LDQ0bYGmfX0kSAWm%2F2tc%2BHR87Se28yx%2FPIjKi%2BLwkQ2%2BfM1BOafiMUew%2FVzSLfrihCIEVWznXZKTac%2FJbyisLb8lSvGIUs6TmxE2YPj5rpUL5ZMZpRWdYN6WbqPjSuMmQY3cqE1zfASMdG7cERpbuD2bIhJlFNmogqX7V4lfUTdZaoJ8n42bqj96H2SL6Dbd9FGR7X2wKhQBjcy9kYv7iUfn7V5ycCPMzUId5SWKXh8ET1PwNibvmOqEp76Z12v%2FFpBiLjYTBrHT%2BvEhJkbM5n5l4pqBcmI2g%2BY0hfen1EOyODLL0bV2fFEj0WWMmT68OCX5lo0OxeeUVpA6O4FSEKjFO0UrfnJruob2LYphJG%2BwV0Ine2oBMtyqtX64OCFMIW%2BG7tOVwmG5HlnSh3euwZSjanoDSESVUOoc1kMK6a62YgVq7MEOgZkFByr79RnmQDwP88lSx1K%2FPOPmVIzZ%2FVmt7jcVjVAGaPLgkHSajlx6NK7Dt53DKWF272j7ExAiGI0Ew9vmavQY6pgEAXxQMhlaDeGjC%2BTm1wMrnrJ0LPKhML1LLUyI1Z4EIyOBBIoIwXUttehdkB%2BJ6jazgk5qZW0wSm9miRbdx1aNzBl4zXo7cfY18CSStDL%2BeOsmXg4Ej7laCaWfGAYmBOjf0sTCA%2BVghZWb4KWSBXm5BkN6uWNAeKwkGdaJOKSHn30IigMpTajQ8JeX9qlTYhDDDRrLCnep6Ri8llNS5W4uQPY7lvTLs&X-Amz-Signature=7aef02ac05fe45ef8c3688b1edf607811412c4de793e3ebb0e060a53c7b1e743&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
