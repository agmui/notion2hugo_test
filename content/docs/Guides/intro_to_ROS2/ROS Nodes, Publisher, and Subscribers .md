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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYPTIKG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDGmI8O8HI3vMeNp7RsRWZe7MICjCVqzrkJcFsw1BPiLQIgKUMHQSmOsk3Ph5aVggHVzylvd9OJvH5wsjw%2F0S9Uc44q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDg7DpmUZsv6VQ7PVyrcAxtQxeiqURiODH3eCOcYtojZAj25sjwlzpZSvH31DFJWe9C%2ByVPNcfJ49OOZqGxcxb%2F0imBSyCmRgdXwPNpmLYzBkgLty22B2fyN7gfPh1S1vv2v0DTMzYSvWoAzhdmqOheqY%2FSgkMErJ8RZdUytY7xe0I7ex6RSZF8v2UwNb42h%2FamFgcgsDmhwr6moSyIP1x0yPE9Xv4eR4ab52h962hEYjSPYCjeoWRdx0tXaulybYCYrQEPHTGHEW%2B%2BtifXxbconyMB6IAKJcluxdlCyvmKEJX9thQXwxwJmJblJlSQk8J%2FD%2BQ4dNGrJkdDSS42j%2FrYkAYhmyYkk%2FptIU7M90F3LMASxTlvGz63FYAS38Mv24uHlcIn%2By%2FU8ABOzAaVvmmIuq9%2Fg9lSofQMk%2B7NDQ3PLTv%2Fq2hWY9wpQP4VM7TAXYw%2BLlNjC3uVLNGusSdGee%2FI%2BnJdbmJyVaOut1k5aMcESZHGzyaZZVL%2F8XP0y2zQdgQn6IbrjOpUiXFf%2FVDGlUPJkDbZomuSBTYs9Gt5b7gkyWlPZSy4PSRPascYYCNngK5qxZzl2ichW%2B6DKTUMy9vfrlco617RqWqfk6mRuLdyPncQhZXIcD6H2m4mTmtk%2BE44LuJtUJlfafIVnMKnItL4GOqUBd4H9Rg6I0Ct9ZniPQ7dib2i4GAjp%2BOtGdK6vcCMsk63eNARWATjAFPd%2FPbt5ysxr%2BjE%2Fr%2FL6Rrnllyq%2B8Mpyy3Sm0xntnw7JHGJnQM2I6XLIldazlh4eS2r%2B5ZvBCf0uf%2BVp4kiI5e128vc6RaXD%2B%2Fqq0YU%2B6bzyy7qi4sT6WrSaVc8CdD%2FGPOkLX38UiCIaWHSodQ4oim39WQxpgEWQAFJSuxfW&X-Amz-Signature=5efd63842adfbb182d135dffdfe912833cc8fc7d2d4d200b4fad4dbaf0b3940e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYPTIKG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDGmI8O8HI3vMeNp7RsRWZe7MICjCVqzrkJcFsw1BPiLQIgKUMHQSmOsk3Ph5aVggHVzylvd9OJvH5wsjw%2F0S9Uc44q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDg7DpmUZsv6VQ7PVyrcAxtQxeiqURiODH3eCOcYtojZAj25sjwlzpZSvH31DFJWe9C%2ByVPNcfJ49OOZqGxcxb%2F0imBSyCmRgdXwPNpmLYzBkgLty22B2fyN7gfPh1S1vv2v0DTMzYSvWoAzhdmqOheqY%2FSgkMErJ8RZdUytY7xe0I7ex6RSZF8v2UwNb42h%2FamFgcgsDmhwr6moSyIP1x0yPE9Xv4eR4ab52h962hEYjSPYCjeoWRdx0tXaulybYCYrQEPHTGHEW%2B%2BtifXxbconyMB6IAKJcluxdlCyvmKEJX9thQXwxwJmJblJlSQk8J%2FD%2BQ4dNGrJkdDSS42j%2FrYkAYhmyYkk%2FptIU7M90F3LMASxTlvGz63FYAS38Mv24uHlcIn%2By%2FU8ABOzAaVvmmIuq9%2Fg9lSofQMk%2B7NDQ3PLTv%2Fq2hWY9wpQP4VM7TAXYw%2BLlNjC3uVLNGusSdGee%2FI%2BnJdbmJyVaOut1k5aMcESZHGzyaZZVL%2F8XP0y2zQdgQn6IbrjOpUiXFf%2FVDGlUPJkDbZomuSBTYs9Gt5b7gkyWlPZSy4PSRPascYYCNngK5qxZzl2ichW%2B6DKTUMy9vfrlco617RqWqfk6mRuLdyPncQhZXIcD6H2m4mTmtk%2BE44LuJtUJlfafIVnMKnItL4GOqUBd4H9Rg6I0Ct9ZniPQ7dib2i4GAjp%2BOtGdK6vcCMsk63eNARWATjAFPd%2FPbt5ysxr%2BjE%2Fr%2FL6Rrnllyq%2B8Mpyy3Sm0xntnw7JHGJnQM2I6XLIldazlh4eS2r%2B5ZvBCf0uf%2BVp4kiI5e128vc6RaXD%2B%2Fqq0YU%2B6bzyy7qi4sT6WrSaVc8CdD%2FGPOkLX38UiCIaWHSodQ4oim39WQxpgEWQAFJSuxfW&X-Amz-Signature=a6b3cf3a097cce91a4f58175546216255e4d77f385ed807ab93220a0ae41ce49&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYPTIKG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDGmI8O8HI3vMeNp7RsRWZe7MICjCVqzrkJcFsw1BPiLQIgKUMHQSmOsk3Ph5aVggHVzylvd9OJvH5wsjw%2F0S9Uc44q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDg7DpmUZsv6VQ7PVyrcAxtQxeiqURiODH3eCOcYtojZAj25sjwlzpZSvH31DFJWe9C%2ByVPNcfJ49OOZqGxcxb%2F0imBSyCmRgdXwPNpmLYzBkgLty22B2fyN7gfPh1S1vv2v0DTMzYSvWoAzhdmqOheqY%2FSgkMErJ8RZdUytY7xe0I7ex6RSZF8v2UwNb42h%2FamFgcgsDmhwr6moSyIP1x0yPE9Xv4eR4ab52h962hEYjSPYCjeoWRdx0tXaulybYCYrQEPHTGHEW%2B%2BtifXxbconyMB6IAKJcluxdlCyvmKEJX9thQXwxwJmJblJlSQk8J%2FD%2BQ4dNGrJkdDSS42j%2FrYkAYhmyYkk%2FptIU7M90F3LMASxTlvGz63FYAS38Mv24uHlcIn%2By%2FU8ABOzAaVvmmIuq9%2Fg9lSofQMk%2B7NDQ3PLTv%2Fq2hWY9wpQP4VM7TAXYw%2BLlNjC3uVLNGusSdGee%2FI%2BnJdbmJyVaOut1k5aMcESZHGzyaZZVL%2F8XP0y2zQdgQn6IbrjOpUiXFf%2FVDGlUPJkDbZomuSBTYs9Gt5b7gkyWlPZSy4PSRPascYYCNngK5qxZzl2ichW%2B6DKTUMy9vfrlco617RqWqfk6mRuLdyPncQhZXIcD6H2m4mTmtk%2BE44LuJtUJlfafIVnMKnItL4GOqUBd4H9Rg6I0Ct9ZniPQ7dib2i4GAjp%2BOtGdK6vcCMsk63eNARWATjAFPd%2FPbt5ysxr%2BjE%2Fr%2FL6Rrnllyq%2B8Mpyy3Sm0xntnw7JHGJnQM2I6XLIldazlh4eS2r%2B5ZvBCf0uf%2BVp4kiI5e128vc6RaXD%2B%2Fqq0YU%2B6bzyy7qi4sT6WrSaVc8CdD%2FGPOkLX38UiCIaWHSodQ4oim39WQxpgEWQAFJSuxfW&X-Amz-Signature=6fd6fa0890c3bf6e68e065df1b977d2110234d952991f549afd2c3af392e3a12&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYPTIKG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDGmI8O8HI3vMeNp7RsRWZe7MICjCVqzrkJcFsw1BPiLQIgKUMHQSmOsk3Ph5aVggHVzylvd9OJvH5wsjw%2F0S9Uc44q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDg7DpmUZsv6VQ7PVyrcAxtQxeiqURiODH3eCOcYtojZAj25sjwlzpZSvH31DFJWe9C%2ByVPNcfJ49OOZqGxcxb%2F0imBSyCmRgdXwPNpmLYzBkgLty22B2fyN7gfPh1S1vv2v0DTMzYSvWoAzhdmqOheqY%2FSgkMErJ8RZdUytY7xe0I7ex6RSZF8v2UwNb42h%2FamFgcgsDmhwr6moSyIP1x0yPE9Xv4eR4ab52h962hEYjSPYCjeoWRdx0tXaulybYCYrQEPHTGHEW%2B%2BtifXxbconyMB6IAKJcluxdlCyvmKEJX9thQXwxwJmJblJlSQk8J%2FD%2BQ4dNGrJkdDSS42j%2FrYkAYhmyYkk%2FptIU7M90F3LMASxTlvGz63FYAS38Mv24uHlcIn%2By%2FU8ABOzAaVvmmIuq9%2Fg9lSofQMk%2B7NDQ3PLTv%2Fq2hWY9wpQP4VM7TAXYw%2BLlNjC3uVLNGusSdGee%2FI%2BnJdbmJyVaOut1k5aMcESZHGzyaZZVL%2F8XP0y2zQdgQn6IbrjOpUiXFf%2FVDGlUPJkDbZomuSBTYs9Gt5b7gkyWlPZSy4PSRPascYYCNngK5qxZzl2ichW%2B6DKTUMy9vfrlco617RqWqfk6mRuLdyPncQhZXIcD6H2m4mTmtk%2BE44LuJtUJlfafIVnMKnItL4GOqUBd4H9Rg6I0Ct9ZniPQ7dib2i4GAjp%2BOtGdK6vcCMsk63eNARWATjAFPd%2FPbt5ysxr%2BjE%2Fr%2FL6Rrnllyq%2B8Mpyy3Sm0xntnw7JHGJnQM2I6XLIldazlh4eS2r%2B5ZvBCf0uf%2BVp4kiI5e128vc6RaXD%2B%2Fqq0YU%2B6bzyy7qi4sT6WrSaVc8CdD%2FGPOkLX38UiCIaWHSodQ4oim39WQxpgEWQAFJSuxfW&X-Amz-Signature=09a1aae3ab202e98c607a988098ae9e8c1b4aefd5aba52e905be13b149d7a1ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYPTIKG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDGmI8O8HI3vMeNp7RsRWZe7MICjCVqzrkJcFsw1BPiLQIgKUMHQSmOsk3Ph5aVggHVzylvd9OJvH5wsjw%2F0S9Uc44q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDg7DpmUZsv6VQ7PVyrcAxtQxeiqURiODH3eCOcYtojZAj25sjwlzpZSvH31DFJWe9C%2ByVPNcfJ49OOZqGxcxb%2F0imBSyCmRgdXwPNpmLYzBkgLty22B2fyN7gfPh1S1vv2v0DTMzYSvWoAzhdmqOheqY%2FSgkMErJ8RZdUytY7xe0I7ex6RSZF8v2UwNb42h%2FamFgcgsDmhwr6moSyIP1x0yPE9Xv4eR4ab52h962hEYjSPYCjeoWRdx0tXaulybYCYrQEPHTGHEW%2B%2BtifXxbconyMB6IAKJcluxdlCyvmKEJX9thQXwxwJmJblJlSQk8J%2FD%2BQ4dNGrJkdDSS42j%2FrYkAYhmyYkk%2FptIU7M90F3LMASxTlvGz63FYAS38Mv24uHlcIn%2By%2FU8ABOzAaVvmmIuq9%2Fg9lSofQMk%2B7NDQ3PLTv%2Fq2hWY9wpQP4VM7TAXYw%2BLlNjC3uVLNGusSdGee%2FI%2BnJdbmJyVaOut1k5aMcESZHGzyaZZVL%2F8XP0y2zQdgQn6IbrjOpUiXFf%2FVDGlUPJkDbZomuSBTYs9Gt5b7gkyWlPZSy4PSRPascYYCNngK5qxZzl2ichW%2B6DKTUMy9vfrlco617RqWqfk6mRuLdyPncQhZXIcD6H2m4mTmtk%2BE44LuJtUJlfafIVnMKnItL4GOqUBd4H9Rg6I0Ct9ZniPQ7dib2i4GAjp%2BOtGdK6vcCMsk63eNARWATjAFPd%2FPbt5ysxr%2BjE%2Fr%2FL6Rrnllyq%2B8Mpyy3Sm0xntnw7JHGJnQM2I6XLIldazlh4eS2r%2B5ZvBCf0uf%2BVp4kiI5e128vc6RaXD%2B%2Fqq0YU%2B6bzyy7qi4sT6WrSaVc8CdD%2FGPOkLX38UiCIaWHSodQ4oim39WQxpgEWQAFJSuxfW&X-Amz-Signature=56f5808340ba249a0458ac25c8a7fc60f2e7d9743c57c33eb971de4cef95adc7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYPTIKG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDGmI8O8HI3vMeNp7RsRWZe7MICjCVqzrkJcFsw1BPiLQIgKUMHQSmOsk3Ph5aVggHVzylvd9OJvH5wsjw%2F0S9Uc44q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDg7DpmUZsv6VQ7PVyrcAxtQxeiqURiODH3eCOcYtojZAj25sjwlzpZSvH31DFJWe9C%2ByVPNcfJ49OOZqGxcxb%2F0imBSyCmRgdXwPNpmLYzBkgLty22B2fyN7gfPh1S1vv2v0DTMzYSvWoAzhdmqOheqY%2FSgkMErJ8RZdUytY7xe0I7ex6RSZF8v2UwNb42h%2FamFgcgsDmhwr6moSyIP1x0yPE9Xv4eR4ab52h962hEYjSPYCjeoWRdx0tXaulybYCYrQEPHTGHEW%2B%2BtifXxbconyMB6IAKJcluxdlCyvmKEJX9thQXwxwJmJblJlSQk8J%2FD%2BQ4dNGrJkdDSS42j%2FrYkAYhmyYkk%2FptIU7M90F3LMASxTlvGz63FYAS38Mv24uHlcIn%2By%2FU8ABOzAaVvmmIuq9%2Fg9lSofQMk%2B7NDQ3PLTv%2Fq2hWY9wpQP4VM7TAXYw%2BLlNjC3uVLNGusSdGee%2FI%2BnJdbmJyVaOut1k5aMcESZHGzyaZZVL%2F8XP0y2zQdgQn6IbrjOpUiXFf%2FVDGlUPJkDbZomuSBTYs9Gt5b7gkyWlPZSy4PSRPascYYCNngK5qxZzl2ichW%2B6DKTUMy9vfrlco617RqWqfk6mRuLdyPncQhZXIcD6H2m4mTmtk%2BE44LuJtUJlfafIVnMKnItL4GOqUBd4H9Rg6I0Ct9ZniPQ7dib2i4GAjp%2BOtGdK6vcCMsk63eNARWATjAFPd%2FPbt5ysxr%2BjE%2Fr%2FL6Rrnllyq%2B8Mpyy3Sm0xntnw7JHGJnQM2I6XLIldazlh4eS2r%2B5ZvBCf0uf%2BVp4kiI5e128vc6RaXD%2B%2Fqq0YU%2B6bzyy7qi4sT6WrSaVc8CdD%2FGPOkLX38UiCIaWHSodQ4oim39WQxpgEWQAFJSuxfW&X-Amz-Signature=f816b8e3fc1a6b146d328964700068700919eb6f62d30b76234bb4d9ff1702c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYPTIKG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDGmI8O8HI3vMeNp7RsRWZe7MICjCVqzrkJcFsw1BPiLQIgKUMHQSmOsk3Ph5aVggHVzylvd9OJvH5wsjw%2F0S9Uc44q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDg7DpmUZsv6VQ7PVyrcAxtQxeiqURiODH3eCOcYtojZAj25sjwlzpZSvH31DFJWe9C%2ByVPNcfJ49OOZqGxcxb%2F0imBSyCmRgdXwPNpmLYzBkgLty22B2fyN7gfPh1S1vv2v0DTMzYSvWoAzhdmqOheqY%2FSgkMErJ8RZdUytY7xe0I7ex6RSZF8v2UwNb42h%2FamFgcgsDmhwr6moSyIP1x0yPE9Xv4eR4ab52h962hEYjSPYCjeoWRdx0tXaulybYCYrQEPHTGHEW%2B%2BtifXxbconyMB6IAKJcluxdlCyvmKEJX9thQXwxwJmJblJlSQk8J%2FD%2BQ4dNGrJkdDSS42j%2FrYkAYhmyYkk%2FptIU7M90F3LMASxTlvGz63FYAS38Mv24uHlcIn%2By%2FU8ABOzAaVvmmIuq9%2Fg9lSofQMk%2B7NDQ3PLTv%2Fq2hWY9wpQP4VM7TAXYw%2BLlNjC3uVLNGusSdGee%2FI%2BnJdbmJyVaOut1k5aMcESZHGzyaZZVL%2F8XP0y2zQdgQn6IbrjOpUiXFf%2FVDGlUPJkDbZomuSBTYs9Gt5b7gkyWlPZSy4PSRPascYYCNngK5qxZzl2ichW%2B6DKTUMy9vfrlco617RqWqfk6mRuLdyPncQhZXIcD6H2m4mTmtk%2BE44LuJtUJlfafIVnMKnItL4GOqUBd4H9Rg6I0Ct9ZniPQ7dib2i4GAjp%2BOtGdK6vcCMsk63eNARWATjAFPd%2FPbt5ysxr%2BjE%2Fr%2FL6Rrnllyq%2B8Mpyy3Sm0xntnw7JHGJnQM2I6XLIldazlh4eS2r%2B5ZvBCf0uf%2BVp4kiI5e128vc6RaXD%2B%2Fqq0YU%2B6bzyy7qi4sT6WrSaVc8CdD%2FGPOkLX38UiCIaWHSodQ4oim39WQxpgEWQAFJSuxfW&X-Amz-Signature=464f749d57c99fe412419d53e457906e406b0b0614857320671424f580dd25d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYPTIKG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDGmI8O8HI3vMeNp7RsRWZe7MICjCVqzrkJcFsw1BPiLQIgKUMHQSmOsk3Ph5aVggHVzylvd9OJvH5wsjw%2F0S9Uc44q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDg7DpmUZsv6VQ7PVyrcAxtQxeiqURiODH3eCOcYtojZAj25sjwlzpZSvH31DFJWe9C%2ByVPNcfJ49OOZqGxcxb%2F0imBSyCmRgdXwPNpmLYzBkgLty22B2fyN7gfPh1S1vv2v0DTMzYSvWoAzhdmqOheqY%2FSgkMErJ8RZdUytY7xe0I7ex6RSZF8v2UwNb42h%2FamFgcgsDmhwr6moSyIP1x0yPE9Xv4eR4ab52h962hEYjSPYCjeoWRdx0tXaulybYCYrQEPHTGHEW%2B%2BtifXxbconyMB6IAKJcluxdlCyvmKEJX9thQXwxwJmJblJlSQk8J%2FD%2BQ4dNGrJkdDSS42j%2FrYkAYhmyYkk%2FptIU7M90F3LMASxTlvGz63FYAS38Mv24uHlcIn%2By%2FU8ABOzAaVvmmIuq9%2Fg9lSofQMk%2B7NDQ3PLTv%2Fq2hWY9wpQP4VM7TAXYw%2BLlNjC3uVLNGusSdGee%2FI%2BnJdbmJyVaOut1k5aMcESZHGzyaZZVL%2F8XP0y2zQdgQn6IbrjOpUiXFf%2FVDGlUPJkDbZomuSBTYs9Gt5b7gkyWlPZSy4PSRPascYYCNngK5qxZzl2ichW%2B6DKTUMy9vfrlco617RqWqfk6mRuLdyPncQhZXIcD6H2m4mTmtk%2BE44LuJtUJlfafIVnMKnItL4GOqUBd4H9Rg6I0Ct9ZniPQ7dib2i4GAjp%2BOtGdK6vcCMsk63eNARWATjAFPd%2FPbt5ysxr%2BjE%2Fr%2FL6Rrnllyq%2B8Mpyy3Sm0xntnw7JHGJnQM2I6XLIldazlh4eS2r%2B5ZvBCf0uf%2BVp4kiI5e128vc6RaXD%2B%2Fqq0YU%2B6bzyy7qi4sT6WrSaVc8CdD%2FGPOkLX38UiCIaWHSodQ4oim39WQxpgEWQAFJSuxfW&X-Amz-Signature=43e88d25829ab70d6eabdb4c2580a5650a496859721b52179d61ea54217832a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
