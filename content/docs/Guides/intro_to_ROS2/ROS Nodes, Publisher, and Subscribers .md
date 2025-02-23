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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMXMA7CS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6w9hOqtJtwJ11r2dexvC2R%2FJcTx8LEQzkjzvInbVQfAiEA5OWjvIcY0AZpgG4G%2BdGJCOlHiDqL9QRNZsDaA6kNTqEq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDIlZHOMu91ZhBZ8RfCrcAyBtFXY0tHMHghn0jAbT%2Fd8EcVs2tZz0bDalFrkhc1brw2RmRh0N3Sy1psSlVgomPwkrPLE8c7m8y4elqv4%2F7RzCud%2BimWFtzWn9r3sckz%2F4roePG6h%2Bd8vmnt3iwfI7%2B1NJ2H59MNaj8IgzgMs4e7gbWNPQIQgAB7h2WUPqx3JCql%2FW8wcLsdX%2FUYKMPUEPpbO6Wx4b%2BzDwMPIwKjXOQMLjkj3oQGQqCdCcn2pJFkOqQRVRUtP8XqsECUZby%2FTVRNyUYxlLRkh7lkvMPaTx8zv2WbdplZsxe5t69Y71tuAWy6bfuc3sZAAMhVClbCK2tKFXs5Xk9KCgvmz7XF9OOV4CJsKiY39Pq920UvFGgf3aA6pKmjHnLFt2p6Y3wNCJsVSS3YWQqYwqkvXnZ6Y46V6LqfrpQh%2BRnU7TqmulWJ9bvp2eWf29fJD8qDNvsqThKbSa3%2F2kXfklziVtoYu%2FLpA8hFHlIMjQdBrkwWExWswz4fqY%2BlIKb2zWxkCqEZMJ2IFM5IaaRXK36MuaqqjoKmZIe%2Ff6dg56m36XALjA4VDp4bahhgEswzpfiUxpuhF%2B9TLjpbRIyRzVbNYQ7l1SmfZyBgO153qZSJbhBbNHKannKv01d6hAlLx3cOfTMMjW670GOqUBz3PTx0E2EzVqv%2B%2FM3EDcC8rVQ%2FVK8ENf0G%2FsscAtFAmBkldWhpA7ALrJFOxSJxy3KjbQXXqghdSpxCcIIULht5ON4GHW8%2BsMaMkhsnsRYomUCcTeUPZHa2vo1uFCT8a1s0Vd9R6tAg%2FyqGlBtX%2BhDZd%2BgL%2Fxc9rPfeNoCpzXTkZBxi4pyv0Cj0KXdMu27YmDJfvzHEOfxZpQIkVQzYPy8SE5L6Pz&X-Amz-Signature=f876e5295b3402cd065cb00741b2f9da6be5b1f5ae3b6b929781c932ef9de872&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMXMA7CS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6w9hOqtJtwJ11r2dexvC2R%2FJcTx8LEQzkjzvInbVQfAiEA5OWjvIcY0AZpgG4G%2BdGJCOlHiDqL9QRNZsDaA6kNTqEq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDIlZHOMu91ZhBZ8RfCrcAyBtFXY0tHMHghn0jAbT%2Fd8EcVs2tZz0bDalFrkhc1brw2RmRh0N3Sy1psSlVgomPwkrPLE8c7m8y4elqv4%2F7RzCud%2BimWFtzWn9r3sckz%2F4roePG6h%2Bd8vmnt3iwfI7%2B1NJ2H59MNaj8IgzgMs4e7gbWNPQIQgAB7h2WUPqx3JCql%2FW8wcLsdX%2FUYKMPUEPpbO6Wx4b%2BzDwMPIwKjXOQMLjkj3oQGQqCdCcn2pJFkOqQRVRUtP8XqsECUZby%2FTVRNyUYxlLRkh7lkvMPaTx8zv2WbdplZsxe5t69Y71tuAWy6bfuc3sZAAMhVClbCK2tKFXs5Xk9KCgvmz7XF9OOV4CJsKiY39Pq920UvFGgf3aA6pKmjHnLFt2p6Y3wNCJsVSS3YWQqYwqkvXnZ6Y46V6LqfrpQh%2BRnU7TqmulWJ9bvp2eWf29fJD8qDNvsqThKbSa3%2F2kXfklziVtoYu%2FLpA8hFHlIMjQdBrkwWExWswz4fqY%2BlIKb2zWxkCqEZMJ2IFM5IaaRXK36MuaqqjoKmZIe%2Ff6dg56m36XALjA4VDp4bahhgEswzpfiUxpuhF%2B9TLjpbRIyRzVbNYQ7l1SmfZyBgO153qZSJbhBbNHKannKv01d6hAlLx3cOfTMMjW670GOqUBz3PTx0E2EzVqv%2B%2FM3EDcC8rVQ%2FVK8ENf0G%2FsscAtFAmBkldWhpA7ALrJFOxSJxy3KjbQXXqghdSpxCcIIULht5ON4GHW8%2BsMaMkhsnsRYomUCcTeUPZHa2vo1uFCT8a1s0Vd9R6tAg%2FyqGlBtX%2BhDZd%2BgL%2Fxc9rPfeNoCpzXTkZBxi4pyv0Cj0KXdMu27YmDJfvzHEOfxZpQIkVQzYPy8SE5L6Pz&X-Amz-Signature=9a7ba14626353e72802abfc567a3c11b119e95a1d5bea05d93bdaf12308db327&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMXMA7CS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6w9hOqtJtwJ11r2dexvC2R%2FJcTx8LEQzkjzvInbVQfAiEA5OWjvIcY0AZpgG4G%2BdGJCOlHiDqL9QRNZsDaA6kNTqEq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDIlZHOMu91ZhBZ8RfCrcAyBtFXY0tHMHghn0jAbT%2Fd8EcVs2tZz0bDalFrkhc1brw2RmRh0N3Sy1psSlVgomPwkrPLE8c7m8y4elqv4%2F7RzCud%2BimWFtzWn9r3sckz%2F4roePG6h%2Bd8vmnt3iwfI7%2B1NJ2H59MNaj8IgzgMs4e7gbWNPQIQgAB7h2WUPqx3JCql%2FW8wcLsdX%2FUYKMPUEPpbO6Wx4b%2BzDwMPIwKjXOQMLjkj3oQGQqCdCcn2pJFkOqQRVRUtP8XqsECUZby%2FTVRNyUYxlLRkh7lkvMPaTx8zv2WbdplZsxe5t69Y71tuAWy6bfuc3sZAAMhVClbCK2tKFXs5Xk9KCgvmz7XF9OOV4CJsKiY39Pq920UvFGgf3aA6pKmjHnLFt2p6Y3wNCJsVSS3YWQqYwqkvXnZ6Y46V6LqfrpQh%2BRnU7TqmulWJ9bvp2eWf29fJD8qDNvsqThKbSa3%2F2kXfklziVtoYu%2FLpA8hFHlIMjQdBrkwWExWswz4fqY%2BlIKb2zWxkCqEZMJ2IFM5IaaRXK36MuaqqjoKmZIe%2Ff6dg56m36XALjA4VDp4bahhgEswzpfiUxpuhF%2B9TLjpbRIyRzVbNYQ7l1SmfZyBgO153qZSJbhBbNHKannKv01d6hAlLx3cOfTMMjW670GOqUBz3PTx0E2EzVqv%2B%2FM3EDcC8rVQ%2FVK8ENf0G%2FsscAtFAmBkldWhpA7ALrJFOxSJxy3KjbQXXqghdSpxCcIIULht5ON4GHW8%2BsMaMkhsnsRYomUCcTeUPZHa2vo1uFCT8a1s0Vd9R6tAg%2FyqGlBtX%2BhDZd%2BgL%2Fxc9rPfeNoCpzXTkZBxi4pyv0Cj0KXdMu27YmDJfvzHEOfxZpQIkVQzYPy8SE5L6Pz&X-Amz-Signature=a84ca76399356b316728cfb3a29e2154127c0d75fb4efc8e311dcf3ef1e999b5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMXMA7CS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6w9hOqtJtwJ11r2dexvC2R%2FJcTx8LEQzkjzvInbVQfAiEA5OWjvIcY0AZpgG4G%2BdGJCOlHiDqL9QRNZsDaA6kNTqEq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDIlZHOMu91ZhBZ8RfCrcAyBtFXY0tHMHghn0jAbT%2Fd8EcVs2tZz0bDalFrkhc1brw2RmRh0N3Sy1psSlVgomPwkrPLE8c7m8y4elqv4%2F7RzCud%2BimWFtzWn9r3sckz%2F4roePG6h%2Bd8vmnt3iwfI7%2B1NJ2H59MNaj8IgzgMs4e7gbWNPQIQgAB7h2WUPqx3JCql%2FW8wcLsdX%2FUYKMPUEPpbO6Wx4b%2BzDwMPIwKjXOQMLjkj3oQGQqCdCcn2pJFkOqQRVRUtP8XqsECUZby%2FTVRNyUYxlLRkh7lkvMPaTx8zv2WbdplZsxe5t69Y71tuAWy6bfuc3sZAAMhVClbCK2tKFXs5Xk9KCgvmz7XF9OOV4CJsKiY39Pq920UvFGgf3aA6pKmjHnLFt2p6Y3wNCJsVSS3YWQqYwqkvXnZ6Y46V6LqfrpQh%2BRnU7TqmulWJ9bvp2eWf29fJD8qDNvsqThKbSa3%2F2kXfklziVtoYu%2FLpA8hFHlIMjQdBrkwWExWswz4fqY%2BlIKb2zWxkCqEZMJ2IFM5IaaRXK36MuaqqjoKmZIe%2Ff6dg56m36XALjA4VDp4bahhgEswzpfiUxpuhF%2B9TLjpbRIyRzVbNYQ7l1SmfZyBgO153qZSJbhBbNHKannKv01d6hAlLx3cOfTMMjW670GOqUBz3PTx0E2EzVqv%2B%2FM3EDcC8rVQ%2FVK8ENf0G%2FsscAtFAmBkldWhpA7ALrJFOxSJxy3KjbQXXqghdSpxCcIIULht5ON4GHW8%2BsMaMkhsnsRYomUCcTeUPZHa2vo1uFCT8a1s0Vd9R6tAg%2FyqGlBtX%2BhDZd%2BgL%2Fxc9rPfeNoCpzXTkZBxi4pyv0Cj0KXdMu27YmDJfvzHEOfxZpQIkVQzYPy8SE5L6Pz&X-Amz-Signature=0c57a520afc987f4526789ed020ff9849fdf9eeace20003fbcce9f0ee3611aed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMXMA7CS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6w9hOqtJtwJ11r2dexvC2R%2FJcTx8LEQzkjzvInbVQfAiEA5OWjvIcY0AZpgG4G%2BdGJCOlHiDqL9QRNZsDaA6kNTqEq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDIlZHOMu91ZhBZ8RfCrcAyBtFXY0tHMHghn0jAbT%2Fd8EcVs2tZz0bDalFrkhc1brw2RmRh0N3Sy1psSlVgomPwkrPLE8c7m8y4elqv4%2F7RzCud%2BimWFtzWn9r3sckz%2F4roePG6h%2Bd8vmnt3iwfI7%2B1NJ2H59MNaj8IgzgMs4e7gbWNPQIQgAB7h2WUPqx3JCql%2FW8wcLsdX%2FUYKMPUEPpbO6Wx4b%2BzDwMPIwKjXOQMLjkj3oQGQqCdCcn2pJFkOqQRVRUtP8XqsECUZby%2FTVRNyUYxlLRkh7lkvMPaTx8zv2WbdplZsxe5t69Y71tuAWy6bfuc3sZAAMhVClbCK2tKFXs5Xk9KCgvmz7XF9OOV4CJsKiY39Pq920UvFGgf3aA6pKmjHnLFt2p6Y3wNCJsVSS3YWQqYwqkvXnZ6Y46V6LqfrpQh%2BRnU7TqmulWJ9bvp2eWf29fJD8qDNvsqThKbSa3%2F2kXfklziVtoYu%2FLpA8hFHlIMjQdBrkwWExWswz4fqY%2BlIKb2zWxkCqEZMJ2IFM5IaaRXK36MuaqqjoKmZIe%2Ff6dg56m36XALjA4VDp4bahhgEswzpfiUxpuhF%2B9TLjpbRIyRzVbNYQ7l1SmfZyBgO153qZSJbhBbNHKannKv01d6hAlLx3cOfTMMjW670GOqUBz3PTx0E2EzVqv%2B%2FM3EDcC8rVQ%2FVK8ENf0G%2FsscAtFAmBkldWhpA7ALrJFOxSJxy3KjbQXXqghdSpxCcIIULht5ON4GHW8%2BsMaMkhsnsRYomUCcTeUPZHa2vo1uFCT8a1s0Vd9R6tAg%2FyqGlBtX%2BhDZd%2BgL%2Fxc9rPfeNoCpzXTkZBxi4pyv0Cj0KXdMu27YmDJfvzHEOfxZpQIkVQzYPy8SE5L6Pz&X-Amz-Signature=d99755b6bb7910f15cbc2b930f8ac25b00710ba9248664f5e5ccebe001b51a2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMXMA7CS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6w9hOqtJtwJ11r2dexvC2R%2FJcTx8LEQzkjzvInbVQfAiEA5OWjvIcY0AZpgG4G%2BdGJCOlHiDqL9QRNZsDaA6kNTqEq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDIlZHOMu91ZhBZ8RfCrcAyBtFXY0tHMHghn0jAbT%2Fd8EcVs2tZz0bDalFrkhc1brw2RmRh0N3Sy1psSlVgomPwkrPLE8c7m8y4elqv4%2F7RzCud%2BimWFtzWn9r3sckz%2F4roePG6h%2Bd8vmnt3iwfI7%2B1NJ2H59MNaj8IgzgMs4e7gbWNPQIQgAB7h2WUPqx3JCql%2FW8wcLsdX%2FUYKMPUEPpbO6Wx4b%2BzDwMPIwKjXOQMLjkj3oQGQqCdCcn2pJFkOqQRVRUtP8XqsECUZby%2FTVRNyUYxlLRkh7lkvMPaTx8zv2WbdplZsxe5t69Y71tuAWy6bfuc3sZAAMhVClbCK2tKFXs5Xk9KCgvmz7XF9OOV4CJsKiY39Pq920UvFGgf3aA6pKmjHnLFt2p6Y3wNCJsVSS3YWQqYwqkvXnZ6Y46V6LqfrpQh%2BRnU7TqmulWJ9bvp2eWf29fJD8qDNvsqThKbSa3%2F2kXfklziVtoYu%2FLpA8hFHlIMjQdBrkwWExWswz4fqY%2BlIKb2zWxkCqEZMJ2IFM5IaaRXK36MuaqqjoKmZIe%2Ff6dg56m36XALjA4VDp4bahhgEswzpfiUxpuhF%2B9TLjpbRIyRzVbNYQ7l1SmfZyBgO153qZSJbhBbNHKannKv01d6hAlLx3cOfTMMjW670GOqUBz3PTx0E2EzVqv%2B%2FM3EDcC8rVQ%2FVK8ENf0G%2FsscAtFAmBkldWhpA7ALrJFOxSJxy3KjbQXXqghdSpxCcIIULht5ON4GHW8%2BsMaMkhsnsRYomUCcTeUPZHa2vo1uFCT8a1s0Vd9R6tAg%2FyqGlBtX%2BhDZd%2BgL%2Fxc9rPfeNoCpzXTkZBxi4pyv0Cj0KXdMu27YmDJfvzHEOfxZpQIkVQzYPy8SE5L6Pz&X-Amz-Signature=ecbd28b9837d926fde09890138989f1b847f60254aabb452a0821f9e2f9914a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMXMA7CS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6w9hOqtJtwJ11r2dexvC2R%2FJcTx8LEQzkjzvInbVQfAiEA5OWjvIcY0AZpgG4G%2BdGJCOlHiDqL9QRNZsDaA6kNTqEq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDIlZHOMu91ZhBZ8RfCrcAyBtFXY0tHMHghn0jAbT%2Fd8EcVs2tZz0bDalFrkhc1brw2RmRh0N3Sy1psSlVgomPwkrPLE8c7m8y4elqv4%2F7RzCud%2BimWFtzWn9r3sckz%2F4roePG6h%2Bd8vmnt3iwfI7%2B1NJ2H59MNaj8IgzgMs4e7gbWNPQIQgAB7h2WUPqx3JCql%2FW8wcLsdX%2FUYKMPUEPpbO6Wx4b%2BzDwMPIwKjXOQMLjkj3oQGQqCdCcn2pJFkOqQRVRUtP8XqsECUZby%2FTVRNyUYxlLRkh7lkvMPaTx8zv2WbdplZsxe5t69Y71tuAWy6bfuc3sZAAMhVClbCK2tKFXs5Xk9KCgvmz7XF9OOV4CJsKiY39Pq920UvFGgf3aA6pKmjHnLFt2p6Y3wNCJsVSS3YWQqYwqkvXnZ6Y46V6LqfrpQh%2BRnU7TqmulWJ9bvp2eWf29fJD8qDNvsqThKbSa3%2F2kXfklziVtoYu%2FLpA8hFHlIMjQdBrkwWExWswz4fqY%2BlIKb2zWxkCqEZMJ2IFM5IaaRXK36MuaqqjoKmZIe%2Ff6dg56m36XALjA4VDp4bahhgEswzpfiUxpuhF%2B9TLjpbRIyRzVbNYQ7l1SmfZyBgO153qZSJbhBbNHKannKv01d6hAlLx3cOfTMMjW670GOqUBz3PTx0E2EzVqv%2B%2FM3EDcC8rVQ%2FVK8ENf0G%2FsscAtFAmBkldWhpA7ALrJFOxSJxy3KjbQXXqghdSpxCcIIULht5ON4GHW8%2BsMaMkhsnsRYomUCcTeUPZHa2vo1uFCT8a1s0Vd9R6tAg%2FyqGlBtX%2BhDZd%2BgL%2Fxc9rPfeNoCpzXTkZBxi4pyv0Cj0KXdMu27YmDJfvzHEOfxZpQIkVQzYPy8SE5L6Pz&X-Amz-Signature=86923883854c0e149c2b2c53e2b4fc3eac42830ce6bacfb7b8da02f4705274b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMXMA7CS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6w9hOqtJtwJ11r2dexvC2R%2FJcTx8LEQzkjzvInbVQfAiEA5OWjvIcY0AZpgG4G%2BdGJCOlHiDqL9QRNZsDaA6kNTqEq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDIlZHOMu91ZhBZ8RfCrcAyBtFXY0tHMHghn0jAbT%2Fd8EcVs2tZz0bDalFrkhc1brw2RmRh0N3Sy1psSlVgomPwkrPLE8c7m8y4elqv4%2F7RzCud%2BimWFtzWn9r3sckz%2F4roePG6h%2Bd8vmnt3iwfI7%2B1NJ2H59MNaj8IgzgMs4e7gbWNPQIQgAB7h2WUPqx3JCql%2FW8wcLsdX%2FUYKMPUEPpbO6Wx4b%2BzDwMPIwKjXOQMLjkj3oQGQqCdCcn2pJFkOqQRVRUtP8XqsECUZby%2FTVRNyUYxlLRkh7lkvMPaTx8zv2WbdplZsxe5t69Y71tuAWy6bfuc3sZAAMhVClbCK2tKFXs5Xk9KCgvmz7XF9OOV4CJsKiY39Pq920UvFGgf3aA6pKmjHnLFt2p6Y3wNCJsVSS3YWQqYwqkvXnZ6Y46V6LqfrpQh%2BRnU7TqmulWJ9bvp2eWf29fJD8qDNvsqThKbSa3%2F2kXfklziVtoYu%2FLpA8hFHlIMjQdBrkwWExWswz4fqY%2BlIKb2zWxkCqEZMJ2IFM5IaaRXK36MuaqqjoKmZIe%2Ff6dg56m36XALjA4VDp4bahhgEswzpfiUxpuhF%2B9TLjpbRIyRzVbNYQ7l1SmfZyBgO153qZSJbhBbNHKannKv01d6hAlLx3cOfTMMjW670GOqUBz3PTx0E2EzVqv%2B%2FM3EDcC8rVQ%2FVK8ENf0G%2FsscAtFAmBkldWhpA7ALrJFOxSJxy3KjbQXXqghdSpxCcIIULht5ON4GHW8%2BsMaMkhsnsRYomUCcTeUPZHa2vo1uFCT8a1s0Vd9R6tAg%2FyqGlBtX%2BhDZd%2BgL%2Fxc9rPfeNoCpzXTkZBxi4pyv0Cj0KXdMu27YmDJfvzHEOfxZpQIkVQzYPy8SE5L6Pz&X-Amz-Signature=a6eff294549c5223ce91d0a6d78acbaf800b145d1b22a51d376bb82fdb7a7275&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
