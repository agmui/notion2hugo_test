---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUNTNTB%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFpYPmzn2JiyZ2U%2BboMb%2FObyGxs7jieiTRyhPJ0qPhAlAiEAmhYLu%2FPBKQ2Ip3lzXD6Kcd8Z3r44Pmr6WVrrUYNgdZwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDE1sYs9jA07drJCs2CrcA%2BkoZ4fddQbOX5H%2Ffb%2BGXcvd9ZE1nfGlcE51GPFmlBJTAredNuk0mPsbxVO0TB7IZQ%2ByjAHkS389gCBHeg2u5LwRgHl9V0lOUmLpFkWKknyxo1GwbqVuzASxSwBbR%2F3%2BudnJ6s3qbX9ZZMp1Orv6AEGWUVmd3aSveHiSAtZAHJFRKZZ52qzK7eP0Q2FYT5IK5tF1752gAS3tsceFNRkWxotqPTtJEu662FaDb7DLF7b56hHaTzQIm9vIp5Rg97U5Ibqesdq6c2kyx55xOiHASoBusZPQSFH9yIz%2FM%2BsnJZMoqGuI%2FNXyLOxKTcoWV3wgd62jwRO7U7lmLqjsJzxTy2cBSMa6%2BVcJTe5f1sS0t2YxbuIOwKnUeeUhsPFHbPgN9%2FfhYOwbI3c9p1vEg6vPRKDLRw13ZlNKYsmXRUJI%2BVfPk4P3TvffoiREUOM3mcLhqdxGa2icx47t53Vvyw0P55%2F%2FBBxwu%2FqOwH%2F99ebp2xIgZLtCzg%2FmN1NyOl%2FaHDXiy6DtlF%2BVz7DRD7boI9yUVUBXdtuNQUVi8p%2FuNA0bU3kuUxNtSy4kpQ%2BimSFjoyCKlq5VY4pV4cMx2ClCCAC8%2Fo6aauShqO36hD9JBUJ6F%2BcW%2Fpu%2F9NA%2BDgyhkc4IMPm5rM4GOqUBYZlNqg%2FSriATjM7KLe1ndqhJwgO8OvJeX9BqQJ4bt4reglL2xTMEZLVOqFA5fTLv8OuWcOCL%2FPQ8NbH72Q2xHGxI968eZ54yfDJBZzW27VhnZ%2Bp1NWb9t%2BMdAp2uYEo3E4UUmQxHz7K4YZTpSbTBB7JAcGb9IV7l%2BLjl2LUp6R7pbInJSJpfEhM16PqFjZT5UDHPUTyGUuXkq%2F0W4s6LXdul6xZ2&X-Amz-Signature=a46483ab960b4c18ea3ff7cc274ef713b2dfa0793c4b2365f7b5fa46344dfcfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUNTNTB%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFpYPmzn2JiyZ2U%2BboMb%2FObyGxs7jieiTRyhPJ0qPhAlAiEAmhYLu%2FPBKQ2Ip3lzXD6Kcd8Z3r44Pmr6WVrrUYNgdZwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDE1sYs9jA07drJCs2CrcA%2BkoZ4fddQbOX5H%2Ffb%2BGXcvd9ZE1nfGlcE51GPFmlBJTAredNuk0mPsbxVO0TB7IZQ%2ByjAHkS389gCBHeg2u5LwRgHl9V0lOUmLpFkWKknyxo1GwbqVuzASxSwBbR%2F3%2BudnJ6s3qbX9ZZMp1Orv6AEGWUVmd3aSveHiSAtZAHJFRKZZ52qzK7eP0Q2FYT5IK5tF1752gAS3tsceFNRkWxotqPTtJEu662FaDb7DLF7b56hHaTzQIm9vIp5Rg97U5Ibqesdq6c2kyx55xOiHASoBusZPQSFH9yIz%2FM%2BsnJZMoqGuI%2FNXyLOxKTcoWV3wgd62jwRO7U7lmLqjsJzxTy2cBSMa6%2BVcJTe5f1sS0t2YxbuIOwKnUeeUhsPFHbPgN9%2FfhYOwbI3c9p1vEg6vPRKDLRw13ZlNKYsmXRUJI%2BVfPk4P3TvffoiREUOM3mcLhqdxGa2icx47t53Vvyw0P55%2F%2FBBxwu%2FqOwH%2F99ebp2xIgZLtCzg%2FmN1NyOl%2FaHDXiy6DtlF%2BVz7DRD7boI9yUVUBXdtuNQUVi8p%2FuNA0bU3kuUxNtSy4kpQ%2BimSFjoyCKlq5VY4pV4cMx2ClCCAC8%2Fo6aauShqO36hD9JBUJ6F%2BcW%2Fpu%2F9NA%2BDgyhkc4IMPm5rM4GOqUBYZlNqg%2FSriATjM7KLe1ndqhJwgO8OvJeX9BqQJ4bt4reglL2xTMEZLVOqFA5fTLv8OuWcOCL%2FPQ8NbH72Q2xHGxI968eZ54yfDJBZzW27VhnZ%2Bp1NWb9t%2BMdAp2uYEo3E4UUmQxHz7K4YZTpSbTBB7JAcGb9IV7l%2BLjl2LUp6R7pbInJSJpfEhM16PqFjZT5UDHPUTyGUuXkq%2F0W4s6LXdul6xZ2&X-Amz-Signature=85ce0ab9d291c956f9878d844b091ae2b510759b857c45273761182161a6d8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUNTNTB%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFpYPmzn2JiyZ2U%2BboMb%2FObyGxs7jieiTRyhPJ0qPhAlAiEAmhYLu%2FPBKQ2Ip3lzXD6Kcd8Z3r44Pmr6WVrrUYNgdZwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDE1sYs9jA07drJCs2CrcA%2BkoZ4fddQbOX5H%2Ffb%2BGXcvd9ZE1nfGlcE51GPFmlBJTAredNuk0mPsbxVO0TB7IZQ%2ByjAHkS389gCBHeg2u5LwRgHl9V0lOUmLpFkWKknyxo1GwbqVuzASxSwBbR%2F3%2BudnJ6s3qbX9ZZMp1Orv6AEGWUVmd3aSveHiSAtZAHJFRKZZ52qzK7eP0Q2FYT5IK5tF1752gAS3tsceFNRkWxotqPTtJEu662FaDb7DLF7b56hHaTzQIm9vIp5Rg97U5Ibqesdq6c2kyx55xOiHASoBusZPQSFH9yIz%2FM%2BsnJZMoqGuI%2FNXyLOxKTcoWV3wgd62jwRO7U7lmLqjsJzxTy2cBSMa6%2BVcJTe5f1sS0t2YxbuIOwKnUeeUhsPFHbPgN9%2FfhYOwbI3c9p1vEg6vPRKDLRw13ZlNKYsmXRUJI%2BVfPk4P3TvffoiREUOM3mcLhqdxGa2icx47t53Vvyw0P55%2F%2FBBxwu%2FqOwH%2F99ebp2xIgZLtCzg%2FmN1NyOl%2FaHDXiy6DtlF%2BVz7DRD7boI9yUVUBXdtuNQUVi8p%2FuNA0bU3kuUxNtSy4kpQ%2BimSFjoyCKlq5VY4pV4cMx2ClCCAC8%2Fo6aauShqO36hD9JBUJ6F%2BcW%2Fpu%2F9NA%2BDgyhkc4IMPm5rM4GOqUBYZlNqg%2FSriATjM7KLe1ndqhJwgO8OvJeX9BqQJ4bt4reglL2xTMEZLVOqFA5fTLv8OuWcOCL%2FPQ8NbH72Q2xHGxI968eZ54yfDJBZzW27VhnZ%2Bp1NWb9t%2BMdAp2uYEo3E4UUmQxHz7K4YZTpSbTBB7JAcGb9IV7l%2BLjl2LUp6R7pbInJSJpfEhM16PqFjZT5UDHPUTyGUuXkq%2F0W4s6LXdul6xZ2&X-Amz-Signature=4c27f21b625e01436c77893df83d9fc1dfa93efd08c1e789a530c3fcd811014f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUNTNTB%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFpYPmzn2JiyZ2U%2BboMb%2FObyGxs7jieiTRyhPJ0qPhAlAiEAmhYLu%2FPBKQ2Ip3lzXD6Kcd8Z3r44Pmr6WVrrUYNgdZwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDE1sYs9jA07drJCs2CrcA%2BkoZ4fddQbOX5H%2Ffb%2BGXcvd9ZE1nfGlcE51GPFmlBJTAredNuk0mPsbxVO0TB7IZQ%2ByjAHkS389gCBHeg2u5LwRgHl9V0lOUmLpFkWKknyxo1GwbqVuzASxSwBbR%2F3%2BudnJ6s3qbX9ZZMp1Orv6AEGWUVmd3aSveHiSAtZAHJFRKZZ52qzK7eP0Q2FYT5IK5tF1752gAS3tsceFNRkWxotqPTtJEu662FaDb7DLF7b56hHaTzQIm9vIp5Rg97U5Ibqesdq6c2kyx55xOiHASoBusZPQSFH9yIz%2FM%2BsnJZMoqGuI%2FNXyLOxKTcoWV3wgd62jwRO7U7lmLqjsJzxTy2cBSMa6%2BVcJTe5f1sS0t2YxbuIOwKnUeeUhsPFHbPgN9%2FfhYOwbI3c9p1vEg6vPRKDLRw13ZlNKYsmXRUJI%2BVfPk4P3TvffoiREUOM3mcLhqdxGa2icx47t53Vvyw0P55%2F%2FBBxwu%2FqOwH%2F99ebp2xIgZLtCzg%2FmN1NyOl%2FaHDXiy6DtlF%2BVz7DRD7boI9yUVUBXdtuNQUVi8p%2FuNA0bU3kuUxNtSy4kpQ%2BimSFjoyCKlq5VY4pV4cMx2ClCCAC8%2Fo6aauShqO36hD9JBUJ6F%2BcW%2Fpu%2F9NA%2BDgyhkc4IMPm5rM4GOqUBYZlNqg%2FSriATjM7KLe1ndqhJwgO8OvJeX9BqQJ4bt4reglL2xTMEZLVOqFA5fTLv8OuWcOCL%2FPQ8NbH72Q2xHGxI968eZ54yfDJBZzW27VhnZ%2Bp1NWb9t%2BMdAp2uYEo3E4UUmQxHz7K4YZTpSbTBB7JAcGb9IV7l%2BLjl2LUp6R7pbInJSJpfEhM16PqFjZT5UDHPUTyGUuXkq%2F0W4s6LXdul6xZ2&X-Amz-Signature=d85502453d90c8a0ad38508bfc080e899372680d789904b684d65ed086cbaed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUNTNTB%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFpYPmzn2JiyZ2U%2BboMb%2FObyGxs7jieiTRyhPJ0qPhAlAiEAmhYLu%2FPBKQ2Ip3lzXD6Kcd8Z3r44Pmr6WVrrUYNgdZwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDE1sYs9jA07drJCs2CrcA%2BkoZ4fddQbOX5H%2Ffb%2BGXcvd9ZE1nfGlcE51GPFmlBJTAredNuk0mPsbxVO0TB7IZQ%2ByjAHkS389gCBHeg2u5LwRgHl9V0lOUmLpFkWKknyxo1GwbqVuzASxSwBbR%2F3%2BudnJ6s3qbX9ZZMp1Orv6AEGWUVmd3aSveHiSAtZAHJFRKZZ52qzK7eP0Q2FYT5IK5tF1752gAS3tsceFNRkWxotqPTtJEu662FaDb7DLF7b56hHaTzQIm9vIp5Rg97U5Ibqesdq6c2kyx55xOiHASoBusZPQSFH9yIz%2FM%2BsnJZMoqGuI%2FNXyLOxKTcoWV3wgd62jwRO7U7lmLqjsJzxTy2cBSMa6%2BVcJTe5f1sS0t2YxbuIOwKnUeeUhsPFHbPgN9%2FfhYOwbI3c9p1vEg6vPRKDLRw13ZlNKYsmXRUJI%2BVfPk4P3TvffoiREUOM3mcLhqdxGa2icx47t53Vvyw0P55%2F%2FBBxwu%2FqOwH%2F99ebp2xIgZLtCzg%2FmN1NyOl%2FaHDXiy6DtlF%2BVz7DRD7boI9yUVUBXdtuNQUVi8p%2FuNA0bU3kuUxNtSy4kpQ%2BimSFjoyCKlq5VY4pV4cMx2ClCCAC8%2Fo6aauShqO36hD9JBUJ6F%2BcW%2Fpu%2F9NA%2BDgyhkc4IMPm5rM4GOqUBYZlNqg%2FSriATjM7KLe1ndqhJwgO8OvJeX9BqQJ4bt4reglL2xTMEZLVOqFA5fTLv8OuWcOCL%2FPQ8NbH72Q2xHGxI968eZ54yfDJBZzW27VhnZ%2Bp1NWb9t%2BMdAp2uYEo3E4UUmQxHz7K4YZTpSbTBB7JAcGb9IV7l%2BLjl2LUp6R7pbInJSJpfEhM16PqFjZT5UDHPUTyGUuXkq%2F0W4s6LXdul6xZ2&X-Amz-Signature=eb7924aa89dcaca942f2a9aa474c9e6a665f6a2fe8f6d87035e4a4f1b1d6b349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUNTNTB%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFpYPmzn2JiyZ2U%2BboMb%2FObyGxs7jieiTRyhPJ0qPhAlAiEAmhYLu%2FPBKQ2Ip3lzXD6Kcd8Z3r44Pmr6WVrrUYNgdZwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDE1sYs9jA07drJCs2CrcA%2BkoZ4fddQbOX5H%2Ffb%2BGXcvd9ZE1nfGlcE51GPFmlBJTAredNuk0mPsbxVO0TB7IZQ%2ByjAHkS389gCBHeg2u5LwRgHl9V0lOUmLpFkWKknyxo1GwbqVuzASxSwBbR%2F3%2BudnJ6s3qbX9ZZMp1Orv6AEGWUVmd3aSveHiSAtZAHJFRKZZ52qzK7eP0Q2FYT5IK5tF1752gAS3tsceFNRkWxotqPTtJEu662FaDb7DLF7b56hHaTzQIm9vIp5Rg97U5Ibqesdq6c2kyx55xOiHASoBusZPQSFH9yIz%2FM%2BsnJZMoqGuI%2FNXyLOxKTcoWV3wgd62jwRO7U7lmLqjsJzxTy2cBSMa6%2BVcJTe5f1sS0t2YxbuIOwKnUeeUhsPFHbPgN9%2FfhYOwbI3c9p1vEg6vPRKDLRw13ZlNKYsmXRUJI%2BVfPk4P3TvffoiREUOM3mcLhqdxGa2icx47t53Vvyw0P55%2F%2FBBxwu%2FqOwH%2F99ebp2xIgZLtCzg%2FmN1NyOl%2FaHDXiy6DtlF%2BVz7DRD7boI9yUVUBXdtuNQUVi8p%2FuNA0bU3kuUxNtSy4kpQ%2BimSFjoyCKlq5VY4pV4cMx2ClCCAC8%2Fo6aauShqO36hD9JBUJ6F%2BcW%2Fpu%2F9NA%2BDgyhkc4IMPm5rM4GOqUBYZlNqg%2FSriATjM7KLe1ndqhJwgO8OvJeX9BqQJ4bt4reglL2xTMEZLVOqFA5fTLv8OuWcOCL%2FPQ8NbH72Q2xHGxI968eZ54yfDJBZzW27VhnZ%2Bp1NWb9t%2BMdAp2uYEo3E4UUmQxHz7K4YZTpSbTBB7JAcGb9IV7l%2BLjl2LUp6R7pbInJSJpfEhM16PqFjZT5UDHPUTyGUuXkq%2F0W4s6LXdul6xZ2&X-Amz-Signature=89d173e0e3cbea41a38879cfda4c724aae25254612635f9370efd75e8e9511d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUNTNTB%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFpYPmzn2JiyZ2U%2BboMb%2FObyGxs7jieiTRyhPJ0qPhAlAiEAmhYLu%2FPBKQ2Ip3lzXD6Kcd8Z3r44Pmr6WVrrUYNgdZwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDE1sYs9jA07drJCs2CrcA%2BkoZ4fddQbOX5H%2Ffb%2BGXcvd9ZE1nfGlcE51GPFmlBJTAredNuk0mPsbxVO0TB7IZQ%2ByjAHkS389gCBHeg2u5LwRgHl9V0lOUmLpFkWKknyxo1GwbqVuzASxSwBbR%2F3%2BudnJ6s3qbX9ZZMp1Orv6AEGWUVmd3aSveHiSAtZAHJFRKZZ52qzK7eP0Q2FYT5IK5tF1752gAS3tsceFNRkWxotqPTtJEu662FaDb7DLF7b56hHaTzQIm9vIp5Rg97U5Ibqesdq6c2kyx55xOiHASoBusZPQSFH9yIz%2FM%2BsnJZMoqGuI%2FNXyLOxKTcoWV3wgd62jwRO7U7lmLqjsJzxTy2cBSMa6%2BVcJTe5f1sS0t2YxbuIOwKnUeeUhsPFHbPgN9%2FfhYOwbI3c9p1vEg6vPRKDLRw13ZlNKYsmXRUJI%2BVfPk4P3TvffoiREUOM3mcLhqdxGa2icx47t53Vvyw0P55%2F%2FBBxwu%2FqOwH%2F99ebp2xIgZLtCzg%2FmN1NyOl%2FaHDXiy6DtlF%2BVz7DRD7boI9yUVUBXdtuNQUVi8p%2FuNA0bU3kuUxNtSy4kpQ%2BimSFjoyCKlq5VY4pV4cMx2ClCCAC8%2Fo6aauShqO36hD9JBUJ6F%2BcW%2Fpu%2F9NA%2BDgyhkc4IMPm5rM4GOqUBYZlNqg%2FSriATjM7KLe1ndqhJwgO8OvJeX9BqQJ4bt4reglL2xTMEZLVOqFA5fTLv8OuWcOCL%2FPQ8NbH72Q2xHGxI968eZ54yfDJBZzW27VhnZ%2Bp1NWb9t%2BMdAp2uYEo3E4UUmQxHz7K4YZTpSbTBB7JAcGb9IV7l%2BLjl2LUp6R7pbInJSJpfEhM16PqFjZT5UDHPUTyGUuXkq%2F0W4s6LXdul6xZ2&X-Amz-Signature=b825f8d3738b7378eeda22d0ee5724b096d36f697482d1e94faae8c4401fd951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUNTNTB%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFpYPmzn2JiyZ2U%2BboMb%2FObyGxs7jieiTRyhPJ0qPhAlAiEAmhYLu%2FPBKQ2Ip3lzXD6Kcd8Z3r44Pmr6WVrrUYNgdZwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDE1sYs9jA07drJCs2CrcA%2BkoZ4fddQbOX5H%2Ffb%2BGXcvd9ZE1nfGlcE51GPFmlBJTAredNuk0mPsbxVO0TB7IZQ%2ByjAHkS389gCBHeg2u5LwRgHl9V0lOUmLpFkWKknyxo1GwbqVuzASxSwBbR%2F3%2BudnJ6s3qbX9ZZMp1Orv6AEGWUVmd3aSveHiSAtZAHJFRKZZ52qzK7eP0Q2FYT5IK5tF1752gAS3tsceFNRkWxotqPTtJEu662FaDb7DLF7b56hHaTzQIm9vIp5Rg97U5Ibqesdq6c2kyx55xOiHASoBusZPQSFH9yIz%2FM%2BsnJZMoqGuI%2FNXyLOxKTcoWV3wgd62jwRO7U7lmLqjsJzxTy2cBSMa6%2BVcJTe5f1sS0t2YxbuIOwKnUeeUhsPFHbPgN9%2FfhYOwbI3c9p1vEg6vPRKDLRw13ZlNKYsmXRUJI%2BVfPk4P3TvffoiREUOM3mcLhqdxGa2icx47t53Vvyw0P55%2F%2FBBxwu%2FqOwH%2F99ebp2xIgZLtCzg%2FmN1NyOl%2FaHDXiy6DtlF%2BVz7DRD7boI9yUVUBXdtuNQUVi8p%2FuNA0bU3kuUxNtSy4kpQ%2BimSFjoyCKlq5VY4pV4cMx2ClCCAC8%2Fo6aauShqO36hD9JBUJ6F%2BcW%2Fpu%2F9NA%2BDgyhkc4IMPm5rM4GOqUBYZlNqg%2FSriATjM7KLe1ndqhJwgO8OvJeX9BqQJ4bt4reglL2xTMEZLVOqFA5fTLv8OuWcOCL%2FPQ8NbH72Q2xHGxI968eZ54yfDJBZzW27VhnZ%2Bp1NWb9t%2BMdAp2uYEo3E4UUmQxHz7K4YZTpSbTBB7JAcGb9IV7l%2BLjl2LUp6R7pbInJSJpfEhM16PqFjZT5UDHPUTyGUuXkq%2F0W4s6LXdul6xZ2&X-Amz-Signature=308d7f476098c2dd7ee8e9ad5309d286025f52f80723ed0f2bddb92121fb5525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
