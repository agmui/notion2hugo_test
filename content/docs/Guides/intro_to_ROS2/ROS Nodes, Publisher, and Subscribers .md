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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KYPS7M%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCcyckAWS8FOZ8rqceukkD07%2FS3FoAQIU%2FcUdJoBldVqQIgH0Z2XULLNFuN4mm0uZi1I8uFi0EiqHp4lMEVZPpRoesqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkmj2qjapDfXmZJFyrcAx2JoFzm28Aadwsa3n%2FHie8QEzCVjqytPcpJbXkE8AoNCByHN1PdecFe8e8lFgn52oaEuKwXSJcCN2qGWABjWgE339qTg0h52%2FiH5CxwDW%2FXshkPRTrDqfo3Odt1ft2re1UqWO9GBs3l83RiRt9V%2BIN%2FcDm9ri6whnlK%2FoYRcYdYGhftz26EfPEv52N%2Fs4sVHUUUB1GjlUaQdU9VJFdiEYOerkSN4s0vjvpeDpmG8qRZR4KnI2v0aDbgTcvzTpBOW%2FPqqlCmMt%2Fm2Oob%2Bg%2FqnRhAMSLu9bBHDDSVCcC7Oa0k2%2BkeGIUlMoaPsHG57%2BdqNpuF770MTHCs0JOa7BubwYVfklpU47aFocQpYUsMDd%2FaEpBqvzMetZ8jjtn%2Fk1brKXwoIcU%2FSzmLY8JASgvQbIph4z3kp7UP8v%2BwQOOzyAjIGUgM%2F0KerLvhticzBPdFJxuE9UmvcsoJ7SvV49AjOI3yFndkTyKPfVLrVqSPm30O3bhSUAwkT1j6dbazDRhPbxSH7aCey%2BM89%2FNAaGntgYxZnH5l0UP6fSwskC15x6pkMsN7nEKiTyt99LlZJdWMcLHGMtOAeJ24MyyBmNg51q23EYQKIiWCBUr8TKoD0%2BXcQvrGoZNTddUeWNxxMLzsmcAGOqUBHdX4CfGJ9x2I7bgSnPvhaGJAPsXATQJ%2FMDZRzbHbL9c00nnqL%2B7wuDQI7AdcCgzeXxoKJhwnPphjLnBdIrTKRJZtmX6gDnuQTjgN0dxGoIQpqfS493XOVZZOuioa4%2BogUfjtNy9p2SyaVQUKyrVt5OQJ5FLfxf90%2FAXuDQiJYQVlMDnwLaVI%2FqCwHsjlt3MY%2FBLnawW4OW0KT9K%2FTxpXGx81IhHJ&X-Amz-Signature=b3d6bb0274f4bee9526cff1d80d1320ee721b4ff4e3dccf526c726368559a83c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KYPS7M%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCcyckAWS8FOZ8rqceukkD07%2FS3FoAQIU%2FcUdJoBldVqQIgH0Z2XULLNFuN4mm0uZi1I8uFi0EiqHp4lMEVZPpRoesqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkmj2qjapDfXmZJFyrcAx2JoFzm28Aadwsa3n%2FHie8QEzCVjqytPcpJbXkE8AoNCByHN1PdecFe8e8lFgn52oaEuKwXSJcCN2qGWABjWgE339qTg0h52%2FiH5CxwDW%2FXshkPRTrDqfo3Odt1ft2re1UqWO9GBs3l83RiRt9V%2BIN%2FcDm9ri6whnlK%2FoYRcYdYGhftz26EfPEv52N%2Fs4sVHUUUB1GjlUaQdU9VJFdiEYOerkSN4s0vjvpeDpmG8qRZR4KnI2v0aDbgTcvzTpBOW%2FPqqlCmMt%2Fm2Oob%2Bg%2FqnRhAMSLu9bBHDDSVCcC7Oa0k2%2BkeGIUlMoaPsHG57%2BdqNpuF770MTHCs0JOa7BubwYVfklpU47aFocQpYUsMDd%2FaEpBqvzMetZ8jjtn%2Fk1brKXwoIcU%2FSzmLY8JASgvQbIph4z3kp7UP8v%2BwQOOzyAjIGUgM%2F0KerLvhticzBPdFJxuE9UmvcsoJ7SvV49AjOI3yFndkTyKPfVLrVqSPm30O3bhSUAwkT1j6dbazDRhPbxSH7aCey%2BM89%2FNAaGntgYxZnH5l0UP6fSwskC15x6pkMsN7nEKiTyt99LlZJdWMcLHGMtOAeJ24MyyBmNg51q23EYQKIiWCBUr8TKoD0%2BXcQvrGoZNTddUeWNxxMLzsmcAGOqUBHdX4CfGJ9x2I7bgSnPvhaGJAPsXATQJ%2FMDZRzbHbL9c00nnqL%2B7wuDQI7AdcCgzeXxoKJhwnPphjLnBdIrTKRJZtmX6gDnuQTjgN0dxGoIQpqfS493XOVZZOuioa4%2BogUfjtNy9p2SyaVQUKyrVt5OQJ5FLfxf90%2FAXuDQiJYQVlMDnwLaVI%2FqCwHsjlt3MY%2FBLnawW4OW0KT9K%2FTxpXGx81IhHJ&X-Amz-Signature=75a0ca75b6a81c4324f3ee3833c166c652f229088c06f3ccfdcf414eb9a8f369&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KYPS7M%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCcyckAWS8FOZ8rqceukkD07%2FS3FoAQIU%2FcUdJoBldVqQIgH0Z2XULLNFuN4mm0uZi1I8uFi0EiqHp4lMEVZPpRoesqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkmj2qjapDfXmZJFyrcAx2JoFzm28Aadwsa3n%2FHie8QEzCVjqytPcpJbXkE8AoNCByHN1PdecFe8e8lFgn52oaEuKwXSJcCN2qGWABjWgE339qTg0h52%2FiH5CxwDW%2FXshkPRTrDqfo3Odt1ft2re1UqWO9GBs3l83RiRt9V%2BIN%2FcDm9ri6whnlK%2FoYRcYdYGhftz26EfPEv52N%2Fs4sVHUUUB1GjlUaQdU9VJFdiEYOerkSN4s0vjvpeDpmG8qRZR4KnI2v0aDbgTcvzTpBOW%2FPqqlCmMt%2Fm2Oob%2Bg%2FqnRhAMSLu9bBHDDSVCcC7Oa0k2%2BkeGIUlMoaPsHG57%2BdqNpuF770MTHCs0JOa7BubwYVfklpU47aFocQpYUsMDd%2FaEpBqvzMetZ8jjtn%2Fk1brKXwoIcU%2FSzmLY8JASgvQbIph4z3kp7UP8v%2BwQOOzyAjIGUgM%2F0KerLvhticzBPdFJxuE9UmvcsoJ7SvV49AjOI3yFndkTyKPfVLrVqSPm30O3bhSUAwkT1j6dbazDRhPbxSH7aCey%2BM89%2FNAaGntgYxZnH5l0UP6fSwskC15x6pkMsN7nEKiTyt99LlZJdWMcLHGMtOAeJ24MyyBmNg51q23EYQKIiWCBUr8TKoD0%2BXcQvrGoZNTddUeWNxxMLzsmcAGOqUBHdX4CfGJ9x2I7bgSnPvhaGJAPsXATQJ%2FMDZRzbHbL9c00nnqL%2B7wuDQI7AdcCgzeXxoKJhwnPphjLnBdIrTKRJZtmX6gDnuQTjgN0dxGoIQpqfS493XOVZZOuioa4%2BogUfjtNy9p2SyaVQUKyrVt5OQJ5FLfxf90%2FAXuDQiJYQVlMDnwLaVI%2FqCwHsjlt3MY%2FBLnawW4OW0KT9K%2FTxpXGx81IhHJ&X-Amz-Signature=c04fe3ae40bd7ddf07cd4e4db7000555f61ff927932b2488dfaebea3b04c8cbc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KYPS7M%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCcyckAWS8FOZ8rqceukkD07%2FS3FoAQIU%2FcUdJoBldVqQIgH0Z2XULLNFuN4mm0uZi1I8uFi0EiqHp4lMEVZPpRoesqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkmj2qjapDfXmZJFyrcAx2JoFzm28Aadwsa3n%2FHie8QEzCVjqytPcpJbXkE8AoNCByHN1PdecFe8e8lFgn52oaEuKwXSJcCN2qGWABjWgE339qTg0h52%2FiH5CxwDW%2FXshkPRTrDqfo3Odt1ft2re1UqWO9GBs3l83RiRt9V%2BIN%2FcDm9ri6whnlK%2FoYRcYdYGhftz26EfPEv52N%2Fs4sVHUUUB1GjlUaQdU9VJFdiEYOerkSN4s0vjvpeDpmG8qRZR4KnI2v0aDbgTcvzTpBOW%2FPqqlCmMt%2Fm2Oob%2Bg%2FqnRhAMSLu9bBHDDSVCcC7Oa0k2%2BkeGIUlMoaPsHG57%2BdqNpuF770MTHCs0JOa7BubwYVfklpU47aFocQpYUsMDd%2FaEpBqvzMetZ8jjtn%2Fk1brKXwoIcU%2FSzmLY8JASgvQbIph4z3kp7UP8v%2BwQOOzyAjIGUgM%2F0KerLvhticzBPdFJxuE9UmvcsoJ7SvV49AjOI3yFndkTyKPfVLrVqSPm30O3bhSUAwkT1j6dbazDRhPbxSH7aCey%2BM89%2FNAaGntgYxZnH5l0UP6fSwskC15x6pkMsN7nEKiTyt99LlZJdWMcLHGMtOAeJ24MyyBmNg51q23EYQKIiWCBUr8TKoD0%2BXcQvrGoZNTddUeWNxxMLzsmcAGOqUBHdX4CfGJ9x2I7bgSnPvhaGJAPsXATQJ%2FMDZRzbHbL9c00nnqL%2B7wuDQI7AdcCgzeXxoKJhwnPphjLnBdIrTKRJZtmX6gDnuQTjgN0dxGoIQpqfS493XOVZZOuioa4%2BogUfjtNy9p2SyaVQUKyrVt5OQJ5FLfxf90%2FAXuDQiJYQVlMDnwLaVI%2FqCwHsjlt3MY%2FBLnawW4OW0KT9K%2FTxpXGx81IhHJ&X-Amz-Signature=bf7769bd9745fa42e772d8dbf811b8b0f18c7bb88b44b5c23735bc84fcd5b007&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KYPS7M%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCcyckAWS8FOZ8rqceukkD07%2FS3FoAQIU%2FcUdJoBldVqQIgH0Z2XULLNFuN4mm0uZi1I8uFi0EiqHp4lMEVZPpRoesqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkmj2qjapDfXmZJFyrcAx2JoFzm28Aadwsa3n%2FHie8QEzCVjqytPcpJbXkE8AoNCByHN1PdecFe8e8lFgn52oaEuKwXSJcCN2qGWABjWgE339qTg0h52%2FiH5CxwDW%2FXshkPRTrDqfo3Odt1ft2re1UqWO9GBs3l83RiRt9V%2BIN%2FcDm9ri6whnlK%2FoYRcYdYGhftz26EfPEv52N%2Fs4sVHUUUB1GjlUaQdU9VJFdiEYOerkSN4s0vjvpeDpmG8qRZR4KnI2v0aDbgTcvzTpBOW%2FPqqlCmMt%2Fm2Oob%2Bg%2FqnRhAMSLu9bBHDDSVCcC7Oa0k2%2BkeGIUlMoaPsHG57%2BdqNpuF770MTHCs0JOa7BubwYVfklpU47aFocQpYUsMDd%2FaEpBqvzMetZ8jjtn%2Fk1brKXwoIcU%2FSzmLY8JASgvQbIph4z3kp7UP8v%2BwQOOzyAjIGUgM%2F0KerLvhticzBPdFJxuE9UmvcsoJ7SvV49AjOI3yFndkTyKPfVLrVqSPm30O3bhSUAwkT1j6dbazDRhPbxSH7aCey%2BM89%2FNAaGntgYxZnH5l0UP6fSwskC15x6pkMsN7nEKiTyt99LlZJdWMcLHGMtOAeJ24MyyBmNg51q23EYQKIiWCBUr8TKoD0%2BXcQvrGoZNTddUeWNxxMLzsmcAGOqUBHdX4CfGJ9x2I7bgSnPvhaGJAPsXATQJ%2FMDZRzbHbL9c00nnqL%2B7wuDQI7AdcCgzeXxoKJhwnPphjLnBdIrTKRJZtmX6gDnuQTjgN0dxGoIQpqfS493XOVZZOuioa4%2BogUfjtNy9p2SyaVQUKyrVt5OQJ5FLfxf90%2FAXuDQiJYQVlMDnwLaVI%2FqCwHsjlt3MY%2FBLnawW4OW0KT9K%2FTxpXGx81IhHJ&X-Amz-Signature=e1438dc6b7d975f701468bd48c09fe1497c1a6b02537e3930dc56a4d6e9eb0a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KYPS7M%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCcyckAWS8FOZ8rqceukkD07%2FS3FoAQIU%2FcUdJoBldVqQIgH0Z2XULLNFuN4mm0uZi1I8uFi0EiqHp4lMEVZPpRoesqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkmj2qjapDfXmZJFyrcAx2JoFzm28Aadwsa3n%2FHie8QEzCVjqytPcpJbXkE8AoNCByHN1PdecFe8e8lFgn52oaEuKwXSJcCN2qGWABjWgE339qTg0h52%2FiH5CxwDW%2FXshkPRTrDqfo3Odt1ft2re1UqWO9GBs3l83RiRt9V%2BIN%2FcDm9ri6whnlK%2FoYRcYdYGhftz26EfPEv52N%2Fs4sVHUUUB1GjlUaQdU9VJFdiEYOerkSN4s0vjvpeDpmG8qRZR4KnI2v0aDbgTcvzTpBOW%2FPqqlCmMt%2Fm2Oob%2Bg%2FqnRhAMSLu9bBHDDSVCcC7Oa0k2%2BkeGIUlMoaPsHG57%2BdqNpuF770MTHCs0JOa7BubwYVfklpU47aFocQpYUsMDd%2FaEpBqvzMetZ8jjtn%2Fk1brKXwoIcU%2FSzmLY8JASgvQbIph4z3kp7UP8v%2BwQOOzyAjIGUgM%2F0KerLvhticzBPdFJxuE9UmvcsoJ7SvV49AjOI3yFndkTyKPfVLrVqSPm30O3bhSUAwkT1j6dbazDRhPbxSH7aCey%2BM89%2FNAaGntgYxZnH5l0UP6fSwskC15x6pkMsN7nEKiTyt99LlZJdWMcLHGMtOAeJ24MyyBmNg51q23EYQKIiWCBUr8TKoD0%2BXcQvrGoZNTddUeWNxxMLzsmcAGOqUBHdX4CfGJ9x2I7bgSnPvhaGJAPsXATQJ%2FMDZRzbHbL9c00nnqL%2B7wuDQI7AdcCgzeXxoKJhwnPphjLnBdIrTKRJZtmX6gDnuQTjgN0dxGoIQpqfS493XOVZZOuioa4%2BogUfjtNy9p2SyaVQUKyrVt5OQJ5FLfxf90%2FAXuDQiJYQVlMDnwLaVI%2FqCwHsjlt3MY%2FBLnawW4OW0KT9K%2FTxpXGx81IhHJ&X-Amz-Signature=b27cb343b551ec470f545370af39f63516a4fb73eb9eff3ad8cfe465dda8b49a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KYPS7M%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCcyckAWS8FOZ8rqceukkD07%2FS3FoAQIU%2FcUdJoBldVqQIgH0Z2XULLNFuN4mm0uZi1I8uFi0EiqHp4lMEVZPpRoesqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkmj2qjapDfXmZJFyrcAx2JoFzm28Aadwsa3n%2FHie8QEzCVjqytPcpJbXkE8AoNCByHN1PdecFe8e8lFgn52oaEuKwXSJcCN2qGWABjWgE339qTg0h52%2FiH5CxwDW%2FXshkPRTrDqfo3Odt1ft2re1UqWO9GBs3l83RiRt9V%2BIN%2FcDm9ri6whnlK%2FoYRcYdYGhftz26EfPEv52N%2Fs4sVHUUUB1GjlUaQdU9VJFdiEYOerkSN4s0vjvpeDpmG8qRZR4KnI2v0aDbgTcvzTpBOW%2FPqqlCmMt%2Fm2Oob%2Bg%2FqnRhAMSLu9bBHDDSVCcC7Oa0k2%2BkeGIUlMoaPsHG57%2BdqNpuF770MTHCs0JOa7BubwYVfklpU47aFocQpYUsMDd%2FaEpBqvzMetZ8jjtn%2Fk1brKXwoIcU%2FSzmLY8JASgvQbIph4z3kp7UP8v%2BwQOOzyAjIGUgM%2F0KerLvhticzBPdFJxuE9UmvcsoJ7SvV49AjOI3yFndkTyKPfVLrVqSPm30O3bhSUAwkT1j6dbazDRhPbxSH7aCey%2BM89%2FNAaGntgYxZnH5l0UP6fSwskC15x6pkMsN7nEKiTyt99LlZJdWMcLHGMtOAeJ24MyyBmNg51q23EYQKIiWCBUr8TKoD0%2BXcQvrGoZNTddUeWNxxMLzsmcAGOqUBHdX4CfGJ9x2I7bgSnPvhaGJAPsXATQJ%2FMDZRzbHbL9c00nnqL%2B7wuDQI7AdcCgzeXxoKJhwnPphjLnBdIrTKRJZtmX6gDnuQTjgN0dxGoIQpqfS493XOVZZOuioa4%2BogUfjtNy9p2SyaVQUKyrVt5OQJ5FLfxf90%2FAXuDQiJYQVlMDnwLaVI%2FqCwHsjlt3MY%2FBLnawW4OW0KT9K%2FTxpXGx81IhHJ&X-Amz-Signature=dfe236e67b063a36b5811ef8cae665921b9d2cf069312730a241f2cb79fc89be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KYPS7M%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCcyckAWS8FOZ8rqceukkD07%2FS3FoAQIU%2FcUdJoBldVqQIgH0Z2XULLNFuN4mm0uZi1I8uFi0EiqHp4lMEVZPpRoesqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkmj2qjapDfXmZJFyrcAx2JoFzm28Aadwsa3n%2FHie8QEzCVjqytPcpJbXkE8AoNCByHN1PdecFe8e8lFgn52oaEuKwXSJcCN2qGWABjWgE339qTg0h52%2FiH5CxwDW%2FXshkPRTrDqfo3Odt1ft2re1UqWO9GBs3l83RiRt9V%2BIN%2FcDm9ri6whnlK%2FoYRcYdYGhftz26EfPEv52N%2Fs4sVHUUUB1GjlUaQdU9VJFdiEYOerkSN4s0vjvpeDpmG8qRZR4KnI2v0aDbgTcvzTpBOW%2FPqqlCmMt%2Fm2Oob%2Bg%2FqnRhAMSLu9bBHDDSVCcC7Oa0k2%2BkeGIUlMoaPsHG57%2BdqNpuF770MTHCs0JOa7BubwYVfklpU47aFocQpYUsMDd%2FaEpBqvzMetZ8jjtn%2Fk1brKXwoIcU%2FSzmLY8JASgvQbIph4z3kp7UP8v%2BwQOOzyAjIGUgM%2F0KerLvhticzBPdFJxuE9UmvcsoJ7SvV49AjOI3yFndkTyKPfVLrVqSPm30O3bhSUAwkT1j6dbazDRhPbxSH7aCey%2BM89%2FNAaGntgYxZnH5l0UP6fSwskC15x6pkMsN7nEKiTyt99LlZJdWMcLHGMtOAeJ24MyyBmNg51q23EYQKIiWCBUr8TKoD0%2BXcQvrGoZNTddUeWNxxMLzsmcAGOqUBHdX4CfGJ9x2I7bgSnPvhaGJAPsXATQJ%2FMDZRzbHbL9c00nnqL%2B7wuDQI7AdcCgzeXxoKJhwnPphjLnBdIrTKRJZtmX6gDnuQTjgN0dxGoIQpqfS493XOVZZOuioa4%2BogUfjtNy9p2SyaVQUKyrVt5OQJ5FLfxf90%2FAXuDQiJYQVlMDnwLaVI%2FqCwHsjlt3MY%2FBLnawW4OW0KT9K%2FTxpXGx81IhHJ&X-Amz-Signature=fb65c59cedc4cd786a9ea6ef1825adb5847c7173a292be296954ae42030d148c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
