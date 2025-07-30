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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEO2CN2W%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8AV%2FR31k4GUVFd4YpRBKusffJHrRxVd%2BtdwTYM6LieAiEAhfrYQ3waRwy8HptGS8Uh3aWSLREefI2CUALw0ZawUvcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPgYFpNyI0osFhxhyrcAydZVwpzNZoH93qAGlsfDpf6PMxb3BcP9X%2BXy91nJzFoQOl0IlsCCr%2FW4xDnVIm%2FpLqywnhJRtyI3io3QWRq7gRYzS0LesKTecDW7ts52YlRtHVQ3zBG84Ee19cTTP%2BVRv5umIUaVyH3LC9DHhwnSZSgc7l62oQVi5vElaAbHGztOOzUaMLQneIYvUw1Np9aQ5v2Jl1QV0i9d99%2BtX5F%2Br2tD%2BychaH5kzwk9YIF7hxzFmvHgpx%2BgBNa9XIC2BO08mhsvij8GQumZ5aWiB9seRKeo5fRkfiHh9iNgwVmx0hCaryBRRRkeJStO3Jh5zwJK73b5SR5ZOBs1cMLJ%2BHHKWKffXrJ7ezBBxoky%2FZDLwZB7XZ%2FaZugZyIPNb4qD9eg1HXQPwksXL1s36nljHC2o%2B90QSMyh3C52pKOoYSHCAUmoPomsIGkO9hhm1qUvoVdXswbDwoV0F%2BMq%2F%2F5kGPvTOlC0qEkru77ZjDtv08mUUjB02bBks4fygj4a0Jttf%2BQqD2gGJbrWdfUcXJMA1pr2P7AqCyMuv0mtHQuakK18MfoEfPNhnoI8IHKyF0yM3Dssr82nOPBKVQd34nmlop6FPtN4aS4PNOWyHc9x9lYHYq%2By258bZB8RnmOnpk2MNG3pcQGOqUBCsgGnWv%2F8i7lBXEbKeoz0UwcdbadB1BKDV%2FxSgDYXNrzZ4Py%2FZETmuhq%2FtklZNnVgE7SCu9ovRkmmqBAZ8WN3gzxmtjC9j8juCuXosFg0IP9enRhEqWmJQTKpiL5XeuDvW4%2FYaR7e8VkEq1JkwOplsYoqz7dSanRsrZvPlR0qa2jkQXAZGEXOh58WVIukhqW2Dv71oNPrL3iGpH1b3OB0j7XM8Cj&X-Amz-Signature=cd46b6495e229eca377889e3f714aa8115bca13c17efc382c9350d093295e516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEO2CN2W%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8AV%2FR31k4GUVFd4YpRBKusffJHrRxVd%2BtdwTYM6LieAiEAhfrYQ3waRwy8HptGS8Uh3aWSLREefI2CUALw0ZawUvcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPgYFpNyI0osFhxhyrcAydZVwpzNZoH93qAGlsfDpf6PMxb3BcP9X%2BXy91nJzFoQOl0IlsCCr%2FW4xDnVIm%2FpLqywnhJRtyI3io3QWRq7gRYzS0LesKTecDW7ts52YlRtHVQ3zBG84Ee19cTTP%2BVRv5umIUaVyH3LC9DHhwnSZSgc7l62oQVi5vElaAbHGztOOzUaMLQneIYvUw1Np9aQ5v2Jl1QV0i9d99%2BtX5F%2Br2tD%2BychaH5kzwk9YIF7hxzFmvHgpx%2BgBNa9XIC2BO08mhsvij8GQumZ5aWiB9seRKeo5fRkfiHh9iNgwVmx0hCaryBRRRkeJStO3Jh5zwJK73b5SR5ZOBs1cMLJ%2BHHKWKffXrJ7ezBBxoky%2FZDLwZB7XZ%2FaZugZyIPNb4qD9eg1HXQPwksXL1s36nljHC2o%2B90QSMyh3C52pKOoYSHCAUmoPomsIGkO9hhm1qUvoVdXswbDwoV0F%2BMq%2F%2F5kGPvTOlC0qEkru77ZjDtv08mUUjB02bBks4fygj4a0Jttf%2BQqD2gGJbrWdfUcXJMA1pr2P7AqCyMuv0mtHQuakK18MfoEfPNhnoI8IHKyF0yM3Dssr82nOPBKVQd34nmlop6FPtN4aS4PNOWyHc9x9lYHYq%2By258bZB8RnmOnpk2MNG3pcQGOqUBCsgGnWv%2F8i7lBXEbKeoz0UwcdbadB1BKDV%2FxSgDYXNrzZ4Py%2FZETmuhq%2FtklZNnVgE7SCu9ovRkmmqBAZ8WN3gzxmtjC9j8juCuXosFg0IP9enRhEqWmJQTKpiL5XeuDvW4%2FYaR7e8VkEq1JkwOplsYoqz7dSanRsrZvPlR0qa2jkQXAZGEXOh58WVIukhqW2Dv71oNPrL3iGpH1b3OB0j7XM8Cj&X-Amz-Signature=ee18e4a8b1883c85ba4cc8dce71dbae23ad28c7485a10f4dfa3f033f9b286661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEO2CN2W%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8AV%2FR31k4GUVFd4YpRBKusffJHrRxVd%2BtdwTYM6LieAiEAhfrYQ3waRwy8HptGS8Uh3aWSLREefI2CUALw0ZawUvcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPgYFpNyI0osFhxhyrcAydZVwpzNZoH93qAGlsfDpf6PMxb3BcP9X%2BXy91nJzFoQOl0IlsCCr%2FW4xDnVIm%2FpLqywnhJRtyI3io3QWRq7gRYzS0LesKTecDW7ts52YlRtHVQ3zBG84Ee19cTTP%2BVRv5umIUaVyH3LC9DHhwnSZSgc7l62oQVi5vElaAbHGztOOzUaMLQneIYvUw1Np9aQ5v2Jl1QV0i9d99%2BtX5F%2Br2tD%2BychaH5kzwk9YIF7hxzFmvHgpx%2BgBNa9XIC2BO08mhsvij8GQumZ5aWiB9seRKeo5fRkfiHh9iNgwVmx0hCaryBRRRkeJStO3Jh5zwJK73b5SR5ZOBs1cMLJ%2BHHKWKffXrJ7ezBBxoky%2FZDLwZB7XZ%2FaZugZyIPNb4qD9eg1HXQPwksXL1s36nljHC2o%2B90QSMyh3C52pKOoYSHCAUmoPomsIGkO9hhm1qUvoVdXswbDwoV0F%2BMq%2F%2F5kGPvTOlC0qEkru77ZjDtv08mUUjB02bBks4fygj4a0Jttf%2BQqD2gGJbrWdfUcXJMA1pr2P7AqCyMuv0mtHQuakK18MfoEfPNhnoI8IHKyF0yM3Dssr82nOPBKVQd34nmlop6FPtN4aS4PNOWyHc9x9lYHYq%2By258bZB8RnmOnpk2MNG3pcQGOqUBCsgGnWv%2F8i7lBXEbKeoz0UwcdbadB1BKDV%2FxSgDYXNrzZ4Py%2FZETmuhq%2FtklZNnVgE7SCu9ovRkmmqBAZ8WN3gzxmtjC9j8juCuXosFg0IP9enRhEqWmJQTKpiL5XeuDvW4%2FYaR7e8VkEq1JkwOplsYoqz7dSanRsrZvPlR0qa2jkQXAZGEXOh58WVIukhqW2Dv71oNPrL3iGpH1b3OB0j7XM8Cj&X-Amz-Signature=c2761bc8aee1fcc72404825f1448cebcfea88bc1447955b3bbb21952f871cb8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEO2CN2W%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8AV%2FR31k4GUVFd4YpRBKusffJHrRxVd%2BtdwTYM6LieAiEAhfrYQ3waRwy8HptGS8Uh3aWSLREefI2CUALw0ZawUvcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPgYFpNyI0osFhxhyrcAydZVwpzNZoH93qAGlsfDpf6PMxb3BcP9X%2BXy91nJzFoQOl0IlsCCr%2FW4xDnVIm%2FpLqywnhJRtyI3io3QWRq7gRYzS0LesKTecDW7ts52YlRtHVQ3zBG84Ee19cTTP%2BVRv5umIUaVyH3LC9DHhwnSZSgc7l62oQVi5vElaAbHGztOOzUaMLQneIYvUw1Np9aQ5v2Jl1QV0i9d99%2BtX5F%2Br2tD%2BychaH5kzwk9YIF7hxzFmvHgpx%2BgBNa9XIC2BO08mhsvij8GQumZ5aWiB9seRKeo5fRkfiHh9iNgwVmx0hCaryBRRRkeJStO3Jh5zwJK73b5SR5ZOBs1cMLJ%2BHHKWKffXrJ7ezBBxoky%2FZDLwZB7XZ%2FaZugZyIPNb4qD9eg1HXQPwksXL1s36nljHC2o%2B90QSMyh3C52pKOoYSHCAUmoPomsIGkO9hhm1qUvoVdXswbDwoV0F%2BMq%2F%2F5kGPvTOlC0qEkru77ZjDtv08mUUjB02bBks4fygj4a0Jttf%2BQqD2gGJbrWdfUcXJMA1pr2P7AqCyMuv0mtHQuakK18MfoEfPNhnoI8IHKyF0yM3Dssr82nOPBKVQd34nmlop6FPtN4aS4PNOWyHc9x9lYHYq%2By258bZB8RnmOnpk2MNG3pcQGOqUBCsgGnWv%2F8i7lBXEbKeoz0UwcdbadB1BKDV%2FxSgDYXNrzZ4Py%2FZETmuhq%2FtklZNnVgE7SCu9ovRkmmqBAZ8WN3gzxmtjC9j8juCuXosFg0IP9enRhEqWmJQTKpiL5XeuDvW4%2FYaR7e8VkEq1JkwOplsYoqz7dSanRsrZvPlR0qa2jkQXAZGEXOh58WVIukhqW2Dv71oNPrL3iGpH1b3OB0j7XM8Cj&X-Amz-Signature=815b7e133e265adaf9a394d52f078d0b17ab8dc42346dfd5feedf0b906868c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEO2CN2W%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8AV%2FR31k4GUVFd4YpRBKusffJHrRxVd%2BtdwTYM6LieAiEAhfrYQ3waRwy8HptGS8Uh3aWSLREefI2CUALw0ZawUvcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPgYFpNyI0osFhxhyrcAydZVwpzNZoH93qAGlsfDpf6PMxb3BcP9X%2BXy91nJzFoQOl0IlsCCr%2FW4xDnVIm%2FpLqywnhJRtyI3io3QWRq7gRYzS0LesKTecDW7ts52YlRtHVQ3zBG84Ee19cTTP%2BVRv5umIUaVyH3LC9DHhwnSZSgc7l62oQVi5vElaAbHGztOOzUaMLQneIYvUw1Np9aQ5v2Jl1QV0i9d99%2BtX5F%2Br2tD%2BychaH5kzwk9YIF7hxzFmvHgpx%2BgBNa9XIC2BO08mhsvij8GQumZ5aWiB9seRKeo5fRkfiHh9iNgwVmx0hCaryBRRRkeJStO3Jh5zwJK73b5SR5ZOBs1cMLJ%2BHHKWKffXrJ7ezBBxoky%2FZDLwZB7XZ%2FaZugZyIPNb4qD9eg1HXQPwksXL1s36nljHC2o%2B90QSMyh3C52pKOoYSHCAUmoPomsIGkO9hhm1qUvoVdXswbDwoV0F%2BMq%2F%2F5kGPvTOlC0qEkru77ZjDtv08mUUjB02bBks4fygj4a0Jttf%2BQqD2gGJbrWdfUcXJMA1pr2P7AqCyMuv0mtHQuakK18MfoEfPNhnoI8IHKyF0yM3Dssr82nOPBKVQd34nmlop6FPtN4aS4PNOWyHc9x9lYHYq%2By258bZB8RnmOnpk2MNG3pcQGOqUBCsgGnWv%2F8i7lBXEbKeoz0UwcdbadB1BKDV%2FxSgDYXNrzZ4Py%2FZETmuhq%2FtklZNnVgE7SCu9ovRkmmqBAZ8WN3gzxmtjC9j8juCuXosFg0IP9enRhEqWmJQTKpiL5XeuDvW4%2FYaR7e8VkEq1JkwOplsYoqz7dSanRsrZvPlR0qa2jkQXAZGEXOh58WVIukhqW2Dv71oNPrL3iGpH1b3OB0j7XM8Cj&X-Amz-Signature=b7c48170d7d03b7b6c34e84ea9c117b643a52a7ea6d4b6f96420e18e388daaa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEO2CN2W%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8AV%2FR31k4GUVFd4YpRBKusffJHrRxVd%2BtdwTYM6LieAiEAhfrYQ3waRwy8HptGS8Uh3aWSLREefI2CUALw0ZawUvcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPgYFpNyI0osFhxhyrcAydZVwpzNZoH93qAGlsfDpf6PMxb3BcP9X%2BXy91nJzFoQOl0IlsCCr%2FW4xDnVIm%2FpLqywnhJRtyI3io3QWRq7gRYzS0LesKTecDW7ts52YlRtHVQ3zBG84Ee19cTTP%2BVRv5umIUaVyH3LC9DHhwnSZSgc7l62oQVi5vElaAbHGztOOzUaMLQneIYvUw1Np9aQ5v2Jl1QV0i9d99%2BtX5F%2Br2tD%2BychaH5kzwk9YIF7hxzFmvHgpx%2BgBNa9XIC2BO08mhsvij8GQumZ5aWiB9seRKeo5fRkfiHh9iNgwVmx0hCaryBRRRkeJStO3Jh5zwJK73b5SR5ZOBs1cMLJ%2BHHKWKffXrJ7ezBBxoky%2FZDLwZB7XZ%2FaZugZyIPNb4qD9eg1HXQPwksXL1s36nljHC2o%2B90QSMyh3C52pKOoYSHCAUmoPomsIGkO9hhm1qUvoVdXswbDwoV0F%2BMq%2F%2F5kGPvTOlC0qEkru77ZjDtv08mUUjB02bBks4fygj4a0Jttf%2BQqD2gGJbrWdfUcXJMA1pr2P7AqCyMuv0mtHQuakK18MfoEfPNhnoI8IHKyF0yM3Dssr82nOPBKVQd34nmlop6FPtN4aS4PNOWyHc9x9lYHYq%2By258bZB8RnmOnpk2MNG3pcQGOqUBCsgGnWv%2F8i7lBXEbKeoz0UwcdbadB1BKDV%2FxSgDYXNrzZ4Py%2FZETmuhq%2FtklZNnVgE7SCu9ovRkmmqBAZ8WN3gzxmtjC9j8juCuXosFg0IP9enRhEqWmJQTKpiL5XeuDvW4%2FYaR7e8VkEq1JkwOplsYoqz7dSanRsrZvPlR0qa2jkQXAZGEXOh58WVIukhqW2Dv71oNPrL3iGpH1b3OB0j7XM8Cj&X-Amz-Signature=a5834771e1afd0dbb46632fe2b9b5c2ba804c364c485ac185c9472487f5a0bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEO2CN2W%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8AV%2FR31k4GUVFd4YpRBKusffJHrRxVd%2BtdwTYM6LieAiEAhfrYQ3waRwy8HptGS8Uh3aWSLREefI2CUALw0ZawUvcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPgYFpNyI0osFhxhyrcAydZVwpzNZoH93qAGlsfDpf6PMxb3BcP9X%2BXy91nJzFoQOl0IlsCCr%2FW4xDnVIm%2FpLqywnhJRtyI3io3QWRq7gRYzS0LesKTecDW7ts52YlRtHVQ3zBG84Ee19cTTP%2BVRv5umIUaVyH3LC9DHhwnSZSgc7l62oQVi5vElaAbHGztOOzUaMLQneIYvUw1Np9aQ5v2Jl1QV0i9d99%2BtX5F%2Br2tD%2BychaH5kzwk9YIF7hxzFmvHgpx%2BgBNa9XIC2BO08mhsvij8GQumZ5aWiB9seRKeo5fRkfiHh9iNgwVmx0hCaryBRRRkeJStO3Jh5zwJK73b5SR5ZOBs1cMLJ%2BHHKWKffXrJ7ezBBxoky%2FZDLwZB7XZ%2FaZugZyIPNb4qD9eg1HXQPwksXL1s36nljHC2o%2B90QSMyh3C52pKOoYSHCAUmoPomsIGkO9hhm1qUvoVdXswbDwoV0F%2BMq%2F%2F5kGPvTOlC0qEkru77ZjDtv08mUUjB02bBks4fygj4a0Jttf%2BQqD2gGJbrWdfUcXJMA1pr2P7AqCyMuv0mtHQuakK18MfoEfPNhnoI8IHKyF0yM3Dssr82nOPBKVQd34nmlop6FPtN4aS4PNOWyHc9x9lYHYq%2By258bZB8RnmOnpk2MNG3pcQGOqUBCsgGnWv%2F8i7lBXEbKeoz0UwcdbadB1BKDV%2FxSgDYXNrzZ4Py%2FZETmuhq%2FtklZNnVgE7SCu9ovRkmmqBAZ8WN3gzxmtjC9j8juCuXosFg0IP9enRhEqWmJQTKpiL5XeuDvW4%2FYaR7e8VkEq1JkwOplsYoqz7dSanRsrZvPlR0qa2jkQXAZGEXOh58WVIukhqW2Dv71oNPrL3iGpH1b3OB0j7XM8Cj&X-Amz-Signature=d7825887d3acd77c92de27256072164ef72052f63bcc371ea0827f96029eab7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEO2CN2W%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8AV%2FR31k4GUVFd4YpRBKusffJHrRxVd%2BtdwTYM6LieAiEAhfrYQ3waRwy8HptGS8Uh3aWSLREefI2CUALw0ZawUvcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPgYFpNyI0osFhxhyrcAydZVwpzNZoH93qAGlsfDpf6PMxb3BcP9X%2BXy91nJzFoQOl0IlsCCr%2FW4xDnVIm%2FpLqywnhJRtyI3io3QWRq7gRYzS0LesKTecDW7ts52YlRtHVQ3zBG84Ee19cTTP%2BVRv5umIUaVyH3LC9DHhwnSZSgc7l62oQVi5vElaAbHGztOOzUaMLQneIYvUw1Np9aQ5v2Jl1QV0i9d99%2BtX5F%2Br2tD%2BychaH5kzwk9YIF7hxzFmvHgpx%2BgBNa9XIC2BO08mhsvij8GQumZ5aWiB9seRKeo5fRkfiHh9iNgwVmx0hCaryBRRRkeJStO3Jh5zwJK73b5SR5ZOBs1cMLJ%2BHHKWKffXrJ7ezBBxoky%2FZDLwZB7XZ%2FaZugZyIPNb4qD9eg1HXQPwksXL1s36nljHC2o%2B90QSMyh3C52pKOoYSHCAUmoPomsIGkO9hhm1qUvoVdXswbDwoV0F%2BMq%2F%2F5kGPvTOlC0qEkru77ZjDtv08mUUjB02bBks4fygj4a0Jttf%2BQqD2gGJbrWdfUcXJMA1pr2P7AqCyMuv0mtHQuakK18MfoEfPNhnoI8IHKyF0yM3Dssr82nOPBKVQd34nmlop6FPtN4aS4PNOWyHc9x9lYHYq%2By258bZB8RnmOnpk2MNG3pcQGOqUBCsgGnWv%2F8i7lBXEbKeoz0UwcdbadB1BKDV%2FxSgDYXNrzZ4Py%2FZETmuhq%2FtklZNnVgE7SCu9ovRkmmqBAZ8WN3gzxmtjC9j8juCuXosFg0IP9enRhEqWmJQTKpiL5XeuDvW4%2FYaR7e8VkEq1JkwOplsYoqz7dSanRsrZvPlR0qa2jkQXAZGEXOh58WVIukhqW2Dv71oNPrL3iGpH1b3OB0j7XM8Cj&X-Amz-Signature=18fef1dbf2c1105f44328ad995982efaac1ae47884d500c92a6504841c09d8c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
