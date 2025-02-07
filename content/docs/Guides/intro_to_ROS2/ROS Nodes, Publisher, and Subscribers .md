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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOXBXOBG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDPL4Vrbjm0XuQnhLx7SMhbIGZEciqe8MD7m4pw5wIzUAIhAPwN%2BDta%2BuIcIvUoQ9je5lKnhEV0d9gcPrVXnf8rqITWKv8DCHsQABoMNjM3NDIzMTgzODA1IgwX%2ByR1NqX5AxMQ14Mq3APKKOMzG5yc8%2F85Codpmyz53drGg7DSFfok5CD%2BCcKufOOX9NhoHn8IBTBh1uJ0h9bI1X1SNDJIBCeGoF24n6N6ssbEKibx8fBLlh14GTpuLVpJy8CzHSsjsVl61S%2FGSdiooQJjAfolnCcrxwheeEUD9%2Fv7ZhBSaJj38Sx3w5d4O9F74BNT2q0s4zKAypMGaXjCf2mE8QaKnsofofiJ22HX%2BJGaJ7V2iI5n90lYbcuhLbrq5vc%2BVt%2FOydg3ahnFuHaqM2iI3Syh1BIVqdD0n9%2FkZHEw%2F7vig3fQk1p8Ae5dmDLOOUE3GxWtzrynWbBijjUm0nDSSw5Ik0bwEks5GR%2BxDzfMUDtg41IcSfgSap0GwOOcSxcECBJ6y%2FbZRgfTLvqGibxzgNbvaVIW0WU5C%2BT7SHjACVEdkVipQcN9iD78iWNVSyvOC7YCkxVUrXtkTLeJxyiSq5r3PZM2ePX%2F10nr31UHntAH6dkxN6GPLDVE7eny4rHYY%2FCItR92jPhI3G3NkP4zzc4D3OVlZxXDfm1%2B%2FSIJM1xnCFVrhOdN90zlYODyueoJttowy3rjTU6A2K%2FbU1TTgaCgBjElsBnjUeeDTh3oC2Rs%2FH4lpumXC5kCAxSNljn32qHCQ5WKtDC6mpm9BjqkAY2y6SXn2BuN%2BLSmIEnbd7KSBgdCu9rAJrBpZhelBCP9icHkXr2w4sExsmy3avVU7mRI%2BiugkH%2FdmLsWkHTBD9eRsZNSD9vqkKcu9a%2FZpLDPZMcx4ab7ZYoIo%2FXKWWa4D6pc7uXf1A%2BgT44xEKzYGPwSRFeExhL%2F%2Fp7ucZbiln6ejyRbYA2Rt0ccj53%2FvcRBqyLRXsQghBEL07GqrSskAnY5wq3y&X-Amz-Signature=fd69774a664b315f3c4ff5e62b82664d7c1ee56f67fdc326a69464b95e89c938&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOXBXOBG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDPL4Vrbjm0XuQnhLx7SMhbIGZEciqe8MD7m4pw5wIzUAIhAPwN%2BDta%2BuIcIvUoQ9je5lKnhEV0d9gcPrVXnf8rqITWKv8DCHsQABoMNjM3NDIzMTgzODA1IgwX%2ByR1NqX5AxMQ14Mq3APKKOMzG5yc8%2F85Codpmyz53drGg7DSFfok5CD%2BCcKufOOX9NhoHn8IBTBh1uJ0h9bI1X1SNDJIBCeGoF24n6N6ssbEKibx8fBLlh14GTpuLVpJy8CzHSsjsVl61S%2FGSdiooQJjAfolnCcrxwheeEUD9%2Fv7ZhBSaJj38Sx3w5d4O9F74BNT2q0s4zKAypMGaXjCf2mE8QaKnsofofiJ22HX%2BJGaJ7V2iI5n90lYbcuhLbrq5vc%2BVt%2FOydg3ahnFuHaqM2iI3Syh1BIVqdD0n9%2FkZHEw%2F7vig3fQk1p8Ae5dmDLOOUE3GxWtzrynWbBijjUm0nDSSw5Ik0bwEks5GR%2BxDzfMUDtg41IcSfgSap0GwOOcSxcECBJ6y%2FbZRgfTLvqGibxzgNbvaVIW0WU5C%2BT7SHjACVEdkVipQcN9iD78iWNVSyvOC7YCkxVUrXtkTLeJxyiSq5r3PZM2ePX%2F10nr31UHntAH6dkxN6GPLDVE7eny4rHYY%2FCItR92jPhI3G3NkP4zzc4D3OVlZxXDfm1%2B%2FSIJM1xnCFVrhOdN90zlYODyueoJttowy3rjTU6A2K%2FbU1TTgaCgBjElsBnjUeeDTh3oC2Rs%2FH4lpumXC5kCAxSNljn32qHCQ5WKtDC6mpm9BjqkAY2y6SXn2BuN%2BLSmIEnbd7KSBgdCu9rAJrBpZhelBCP9icHkXr2w4sExsmy3avVU7mRI%2BiugkH%2FdmLsWkHTBD9eRsZNSD9vqkKcu9a%2FZpLDPZMcx4ab7ZYoIo%2FXKWWa4D6pc7uXf1A%2BgT44xEKzYGPwSRFeExhL%2F%2Fp7ucZbiln6ejyRbYA2Rt0ccj53%2FvcRBqyLRXsQghBEL07GqrSskAnY5wq3y&X-Amz-Signature=2342490930600a5e5a76cd30421068856243aa740e0eeac7b7156873848ead1d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOXBXOBG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDPL4Vrbjm0XuQnhLx7SMhbIGZEciqe8MD7m4pw5wIzUAIhAPwN%2BDta%2BuIcIvUoQ9je5lKnhEV0d9gcPrVXnf8rqITWKv8DCHsQABoMNjM3NDIzMTgzODA1IgwX%2ByR1NqX5AxMQ14Mq3APKKOMzG5yc8%2F85Codpmyz53drGg7DSFfok5CD%2BCcKufOOX9NhoHn8IBTBh1uJ0h9bI1X1SNDJIBCeGoF24n6N6ssbEKibx8fBLlh14GTpuLVpJy8CzHSsjsVl61S%2FGSdiooQJjAfolnCcrxwheeEUD9%2Fv7ZhBSaJj38Sx3w5d4O9F74BNT2q0s4zKAypMGaXjCf2mE8QaKnsofofiJ22HX%2BJGaJ7V2iI5n90lYbcuhLbrq5vc%2BVt%2FOydg3ahnFuHaqM2iI3Syh1BIVqdD0n9%2FkZHEw%2F7vig3fQk1p8Ae5dmDLOOUE3GxWtzrynWbBijjUm0nDSSw5Ik0bwEks5GR%2BxDzfMUDtg41IcSfgSap0GwOOcSxcECBJ6y%2FbZRgfTLvqGibxzgNbvaVIW0WU5C%2BT7SHjACVEdkVipQcN9iD78iWNVSyvOC7YCkxVUrXtkTLeJxyiSq5r3PZM2ePX%2F10nr31UHntAH6dkxN6GPLDVE7eny4rHYY%2FCItR92jPhI3G3NkP4zzc4D3OVlZxXDfm1%2B%2FSIJM1xnCFVrhOdN90zlYODyueoJttowy3rjTU6A2K%2FbU1TTgaCgBjElsBnjUeeDTh3oC2Rs%2FH4lpumXC5kCAxSNljn32qHCQ5WKtDC6mpm9BjqkAY2y6SXn2BuN%2BLSmIEnbd7KSBgdCu9rAJrBpZhelBCP9icHkXr2w4sExsmy3avVU7mRI%2BiugkH%2FdmLsWkHTBD9eRsZNSD9vqkKcu9a%2FZpLDPZMcx4ab7ZYoIo%2FXKWWa4D6pc7uXf1A%2BgT44xEKzYGPwSRFeExhL%2F%2Fp7ucZbiln6ejyRbYA2Rt0ccj53%2FvcRBqyLRXsQghBEL07GqrSskAnY5wq3y&X-Amz-Signature=85e223c7db1d7012ae6e071d68ad7ea2f3d7e7c8fb266658d34861ea7a5eb135&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOXBXOBG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDPL4Vrbjm0XuQnhLx7SMhbIGZEciqe8MD7m4pw5wIzUAIhAPwN%2BDta%2BuIcIvUoQ9je5lKnhEV0d9gcPrVXnf8rqITWKv8DCHsQABoMNjM3NDIzMTgzODA1IgwX%2ByR1NqX5AxMQ14Mq3APKKOMzG5yc8%2F85Codpmyz53drGg7DSFfok5CD%2BCcKufOOX9NhoHn8IBTBh1uJ0h9bI1X1SNDJIBCeGoF24n6N6ssbEKibx8fBLlh14GTpuLVpJy8CzHSsjsVl61S%2FGSdiooQJjAfolnCcrxwheeEUD9%2Fv7ZhBSaJj38Sx3w5d4O9F74BNT2q0s4zKAypMGaXjCf2mE8QaKnsofofiJ22HX%2BJGaJ7V2iI5n90lYbcuhLbrq5vc%2BVt%2FOydg3ahnFuHaqM2iI3Syh1BIVqdD0n9%2FkZHEw%2F7vig3fQk1p8Ae5dmDLOOUE3GxWtzrynWbBijjUm0nDSSw5Ik0bwEks5GR%2BxDzfMUDtg41IcSfgSap0GwOOcSxcECBJ6y%2FbZRgfTLvqGibxzgNbvaVIW0WU5C%2BT7SHjACVEdkVipQcN9iD78iWNVSyvOC7YCkxVUrXtkTLeJxyiSq5r3PZM2ePX%2F10nr31UHntAH6dkxN6GPLDVE7eny4rHYY%2FCItR92jPhI3G3NkP4zzc4D3OVlZxXDfm1%2B%2FSIJM1xnCFVrhOdN90zlYODyueoJttowy3rjTU6A2K%2FbU1TTgaCgBjElsBnjUeeDTh3oC2Rs%2FH4lpumXC5kCAxSNljn32qHCQ5WKtDC6mpm9BjqkAY2y6SXn2BuN%2BLSmIEnbd7KSBgdCu9rAJrBpZhelBCP9icHkXr2w4sExsmy3avVU7mRI%2BiugkH%2FdmLsWkHTBD9eRsZNSD9vqkKcu9a%2FZpLDPZMcx4ab7ZYoIo%2FXKWWa4D6pc7uXf1A%2BgT44xEKzYGPwSRFeExhL%2F%2Fp7ucZbiln6ejyRbYA2Rt0ccj53%2FvcRBqyLRXsQghBEL07GqrSskAnY5wq3y&X-Amz-Signature=c82153bd91dadde655903d5d75472e663c7815d158fee2ca2288720ddda661f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOXBXOBG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDPL4Vrbjm0XuQnhLx7SMhbIGZEciqe8MD7m4pw5wIzUAIhAPwN%2BDta%2BuIcIvUoQ9je5lKnhEV0d9gcPrVXnf8rqITWKv8DCHsQABoMNjM3NDIzMTgzODA1IgwX%2ByR1NqX5AxMQ14Mq3APKKOMzG5yc8%2F85Codpmyz53drGg7DSFfok5CD%2BCcKufOOX9NhoHn8IBTBh1uJ0h9bI1X1SNDJIBCeGoF24n6N6ssbEKibx8fBLlh14GTpuLVpJy8CzHSsjsVl61S%2FGSdiooQJjAfolnCcrxwheeEUD9%2Fv7ZhBSaJj38Sx3w5d4O9F74BNT2q0s4zKAypMGaXjCf2mE8QaKnsofofiJ22HX%2BJGaJ7V2iI5n90lYbcuhLbrq5vc%2BVt%2FOydg3ahnFuHaqM2iI3Syh1BIVqdD0n9%2FkZHEw%2F7vig3fQk1p8Ae5dmDLOOUE3GxWtzrynWbBijjUm0nDSSw5Ik0bwEks5GR%2BxDzfMUDtg41IcSfgSap0GwOOcSxcECBJ6y%2FbZRgfTLvqGibxzgNbvaVIW0WU5C%2BT7SHjACVEdkVipQcN9iD78iWNVSyvOC7YCkxVUrXtkTLeJxyiSq5r3PZM2ePX%2F10nr31UHntAH6dkxN6GPLDVE7eny4rHYY%2FCItR92jPhI3G3NkP4zzc4D3OVlZxXDfm1%2B%2FSIJM1xnCFVrhOdN90zlYODyueoJttowy3rjTU6A2K%2FbU1TTgaCgBjElsBnjUeeDTh3oC2Rs%2FH4lpumXC5kCAxSNljn32qHCQ5WKtDC6mpm9BjqkAY2y6SXn2BuN%2BLSmIEnbd7KSBgdCu9rAJrBpZhelBCP9icHkXr2w4sExsmy3avVU7mRI%2BiugkH%2FdmLsWkHTBD9eRsZNSD9vqkKcu9a%2FZpLDPZMcx4ab7ZYoIo%2FXKWWa4D6pc7uXf1A%2BgT44xEKzYGPwSRFeExhL%2F%2Fp7ucZbiln6ejyRbYA2Rt0ccj53%2FvcRBqyLRXsQghBEL07GqrSskAnY5wq3y&X-Amz-Signature=286a2c4531b04abb47c4b8a1c41ba65c9acc283cae8bbcbcbeec681d044daa77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOXBXOBG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDPL4Vrbjm0XuQnhLx7SMhbIGZEciqe8MD7m4pw5wIzUAIhAPwN%2BDta%2BuIcIvUoQ9je5lKnhEV0d9gcPrVXnf8rqITWKv8DCHsQABoMNjM3NDIzMTgzODA1IgwX%2ByR1NqX5AxMQ14Mq3APKKOMzG5yc8%2F85Codpmyz53drGg7DSFfok5CD%2BCcKufOOX9NhoHn8IBTBh1uJ0h9bI1X1SNDJIBCeGoF24n6N6ssbEKibx8fBLlh14GTpuLVpJy8CzHSsjsVl61S%2FGSdiooQJjAfolnCcrxwheeEUD9%2Fv7ZhBSaJj38Sx3w5d4O9F74BNT2q0s4zKAypMGaXjCf2mE8QaKnsofofiJ22HX%2BJGaJ7V2iI5n90lYbcuhLbrq5vc%2BVt%2FOydg3ahnFuHaqM2iI3Syh1BIVqdD0n9%2FkZHEw%2F7vig3fQk1p8Ae5dmDLOOUE3GxWtzrynWbBijjUm0nDSSw5Ik0bwEks5GR%2BxDzfMUDtg41IcSfgSap0GwOOcSxcECBJ6y%2FbZRgfTLvqGibxzgNbvaVIW0WU5C%2BT7SHjACVEdkVipQcN9iD78iWNVSyvOC7YCkxVUrXtkTLeJxyiSq5r3PZM2ePX%2F10nr31UHntAH6dkxN6GPLDVE7eny4rHYY%2FCItR92jPhI3G3NkP4zzc4D3OVlZxXDfm1%2B%2FSIJM1xnCFVrhOdN90zlYODyueoJttowy3rjTU6A2K%2FbU1TTgaCgBjElsBnjUeeDTh3oC2Rs%2FH4lpumXC5kCAxSNljn32qHCQ5WKtDC6mpm9BjqkAY2y6SXn2BuN%2BLSmIEnbd7KSBgdCu9rAJrBpZhelBCP9icHkXr2w4sExsmy3avVU7mRI%2BiugkH%2FdmLsWkHTBD9eRsZNSD9vqkKcu9a%2FZpLDPZMcx4ab7ZYoIo%2FXKWWa4D6pc7uXf1A%2BgT44xEKzYGPwSRFeExhL%2F%2Fp7ucZbiln6ejyRbYA2Rt0ccj53%2FvcRBqyLRXsQghBEL07GqrSskAnY5wq3y&X-Amz-Signature=3173b3123e8628eefb23e3a7c014d44ef9ef63762688a587d0d7e35373226d88&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOXBXOBG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDPL4Vrbjm0XuQnhLx7SMhbIGZEciqe8MD7m4pw5wIzUAIhAPwN%2BDta%2BuIcIvUoQ9je5lKnhEV0d9gcPrVXnf8rqITWKv8DCHsQABoMNjM3NDIzMTgzODA1IgwX%2ByR1NqX5AxMQ14Mq3APKKOMzG5yc8%2F85Codpmyz53drGg7DSFfok5CD%2BCcKufOOX9NhoHn8IBTBh1uJ0h9bI1X1SNDJIBCeGoF24n6N6ssbEKibx8fBLlh14GTpuLVpJy8CzHSsjsVl61S%2FGSdiooQJjAfolnCcrxwheeEUD9%2Fv7ZhBSaJj38Sx3w5d4O9F74BNT2q0s4zKAypMGaXjCf2mE8QaKnsofofiJ22HX%2BJGaJ7V2iI5n90lYbcuhLbrq5vc%2BVt%2FOydg3ahnFuHaqM2iI3Syh1BIVqdD0n9%2FkZHEw%2F7vig3fQk1p8Ae5dmDLOOUE3GxWtzrynWbBijjUm0nDSSw5Ik0bwEks5GR%2BxDzfMUDtg41IcSfgSap0GwOOcSxcECBJ6y%2FbZRgfTLvqGibxzgNbvaVIW0WU5C%2BT7SHjACVEdkVipQcN9iD78iWNVSyvOC7YCkxVUrXtkTLeJxyiSq5r3PZM2ePX%2F10nr31UHntAH6dkxN6GPLDVE7eny4rHYY%2FCItR92jPhI3G3NkP4zzc4D3OVlZxXDfm1%2B%2FSIJM1xnCFVrhOdN90zlYODyueoJttowy3rjTU6A2K%2FbU1TTgaCgBjElsBnjUeeDTh3oC2Rs%2FH4lpumXC5kCAxSNljn32qHCQ5WKtDC6mpm9BjqkAY2y6SXn2BuN%2BLSmIEnbd7KSBgdCu9rAJrBpZhelBCP9icHkXr2w4sExsmy3avVU7mRI%2BiugkH%2FdmLsWkHTBD9eRsZNSD9vqkKcu9a%2FZpLDPZMcx4ab7ZYoIo%2FXKWWa4D6pc7uXf1A%2BgT44xEKzYGPwSRFeExhL%2F%2Fp7ucZbiln6ejyRbYA2Rt0ccj53%2FvcRBqyLRXsQghBEL07GqrSskAnY5wq3y&X-Amz-Signature=a7c1821a5d576fc9d2fe79cdd97c1f4d2ea1e4d2852f9f988121872a5a999c3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOXBXOBG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDPL4Vrbjm0XuQnhLx7SMhbIGZEciqe8MD7m4pw5wIzUAIhAPwN%2BDta%2BuIcIvUoQ9je5lKnhEV0d9gcPrVXnf8rqITWKv8DCHsQABoMNjM3NDIzMTgzODA1IgwX%2ByR1NqX5AxMQ14Mq3APKKOMzG5yc8%2F85Codpmyz53drGg7DSFfok5CD%2BCcKufOOX9NhoHn8IBTBh1uJ0h9bI1X1SNDJIBCeGoF24n6N6ssbEKibx8fBLlh14GTpuLVpJy8CzHSsjsVl61S%2FGSdiooQJjAfolnCcrxwheeEUD9%2Fv7ZhBSaJj38Sx3w5d4O9F74BNT2q0s4zKAypMGaXjCf2mE8QaKnsofofiJ22HX%2BJGaJ7V2iI5n90lYbcuhLbrq5vc%2BVt%2FOydg3ahnFuHaqM2iI3Syh1BIVqdD0n9%2FkZHEw%2F7vig3fQk1p8Ae5dmDLOOUE3GxWtzrynWbBijjUm0nDSSw5Ik0bwEks5GR%2BxDzfMUDtg41IcSfgSap0GwOOcSxcECBJ6y%2FbZRgfTLvqGibxzgNbvaVIW0WU5C%2BT7SHjACVEdkVipQcN9iD78iWNVSyvOC7YCkxVUrXtkTLeJxyiSq5r3PZM2ePX%2F10nr31UHntAH6dkxN6GPLDVE7eny4rHYY%2FCItR92jPhI3G3NkP4zzc4D3OVlZxXDfm1%2B%2FSIJM1xnCFVrhOdN90zlYODyueoJttowy3rjTU6A2K%2FbU1TTgaCgBjElsBnjUeeDTh3oC2Rs%2FH4lpumXC5kCAxSNljn32qHCQ5WKtDC6mpm9BjqkAY2y6SXn2BuN%2BLSmIEnbd7KSBgdCu9rAJrBpZhelBCP9icHkXr2w4sExsmy3avVU7mRI%2BiugkH%2FdmLsWkHTBD9eRsZNSD9vqkKcu9a%2FZpLDPZMcx4ab7ZYoIo%2FXKWWa4D6pc7uXf1A%2BgT44xEKzYGPwSRFeExhL%2F%2Fp7ucZbiln6ejyRbYA2Rt0ccj53%2FvcRBqyLRXsQghBEL07GqrSskAnY5wq3y&X-Amz-Signature=646a23d758fed73d31837c362f8225d2b14524b46a2d057087f9b0711486e2aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
