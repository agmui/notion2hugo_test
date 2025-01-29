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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCGHTKIQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMSCC9qX4NHNURWeYv39EgMBiOTi4UrWfU53kHSjZebAiEA9113Ec8RBkBowF5xjpP95stdCq1sLRXgQroRyAhRhQwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd9v7NZiEfCxAR6eircA%2FsiHRYsW1ua9bk%2FKSrK%2FPxPJiSCbcF2aPEZUKp4ChbLIaK7uCBqIUH7XsHoi%2FHbeK6EcaI5D%2FDX6L4y958Ou4fBhJidFDDZJW73%2FdVQZ0e%2BNMpQr%2F7%2FkRSH0kOQqbrtLUmTL6vHh%2FK5zK8xwJD6u0GAVZr9kkSmlzz%2BlReDw4ed2XfkqOwEyvaCIdSpq7hHVd7T5kdOI6yWG17JaS71kYwcXwwVUw%2FfPiksf0lCuFihWrmBVsKfpWwukN%2FzL1C50iKlzXYPaiLJu4BsKozmlrbXbd%2Bd1iSf7Wzy1lOQkioLDeASjCPxv%2FNxpBdllv9EqDwYOS3GDQEhaVMu2MQHHwQ9s8s5Z5B%2BXgFfjsA5U0d5AyfpBW7WE8EGIFM4ew1cZwXSlZ6lJpQB3uhHitF7IdacCMJeGlWcyXJl0WCUqZ%2Ftov%2BB2wtXZsIrZHOkxz6K68EUHz7YPgcYjuXVcdjB%2FAJQs0vTnsVGK%2BnPcBR0Lpuho9gaadUYiAXEeMn1NVoE3hxMVFC9Pq4ld18QmRJaSAY38YAWK8pIa6ruXiAOEwgXerMlBSFnx2j0l1y70ba0BEOtK5ZHh4CaeibKmjDt3kYKXBpaD7wPMIkQMiniET1faGbLJqtNSo9OlyXEMKb26bwGOqUBcvi%2F9IgsuTtZ6UqdxJgq%2BqTSfO04weYDzz7EjJbzXV%2FnBb%2FxJhhcGptlZw8dQn2I%2Bn8wIde6L2lcjUMe4bM1HI%2Be1w9HUY%2FpNPWMgIfn46d1ETiQ7p0G%2Fgo15%2FFLNvEQ6V5zEip%2FTA%2FXiUWMt4wrLEM7lad%2FPvXbN1nvhaTV9RLBZgQ59ogblOXBzd%2FOiG8cq0f0qIdTjKYBOOQgCD0oFd1OfyPX&X-Amz-Signature=b19305fafa85506f1c7952f4475bdd0c02a9f6717ef5e848dfdae5874965cc2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCGHTKIQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMSCC9qX4NHNURWeYv39EgMBiOTi4UrWfU53kHSjZebAiEA9113Ec8RBkBowF5xjpP95stdCq1sLRXgQroRyAhRhQwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd9v7NZiEfCxAR6eircA%2FsiHRYsW1ua9bk%2FKSrK%2FPxPJiSCbcF2aPEZUKp4ChbLIaK7uCBqIUH7XsHoi%2FHbeK6EcaI5D%2FDX6L4y958Ou4fBhJidFDDZJW73%2FdVQZ0e%2BNMpQr%2F7%2FkRSH0kOQqbrtLUmTL6vHh%2FK5zK8xwJD6u0GAVZr9kkSmlzz%2BlReDw4ed2XfkqOwEyvaCIdSpq7hHVd7T5kdOI6yWG17JaS71kYwcXwwVUw%2FfPiksf0lCuFihWrmBVsKfpWwukN%2FzL1C50iKlzXYPaiLJu4BsKozmlrbXbd%2Bd1iSf7Wzy1lOQkioLDeASjCPxv%2FNxpBdllv9EqDwYOS3GDQEhaVMu2MQHHwQ9s8s5Z5B%2BXgFfjsA5U0d5AyfpBW7WE8EGIFM4ew1cZwXSlZ6lJpQB3uhHitF7IdacCMJeGlWcyXJl0WCUqZ%2Ftov%2BB2wtXZsIrZHOkxz6K68EUHz7YPgcYjuXVcdjB%2FAJQs0vTnsVGK%2BnPcBR0Lpuho9gaadUYiAXEeMn1NVoE3hxMVFC9Pq4ld18QmRJaSAY38YAWK8pIa6ruXiAOEwgXerMlBSFnx2j0l1y70ba0BEOtK5ZHh4CaeibKmjDt3kYKXBpaD7wPMIkQMiniET1faGbLJqtNSo9OlyXEMKb26bwGOqUBcvi%2F9IgsuTtZ6UqdxJgq%2BqTSfO04weYDzz7EjJbzXV%2FnBb%2FxJhhcGptlZw8dQn2I%2Bn8wIde6L2lcjUMe4bM1HI%2Be1w9HUY%2FpNPWMgIfn46d1ETiQ7p0G%2Fgo15%2FFLNvEQ6V5zEip%2FTA%2FXiUWMt4wrLEM7lad%2FPvXbN1nvhaTV9RLBZgQ59ogblOXBzd%2FOiG8cq0f0qIdTjKYBOOQgCD0oFd1OfyPX&X-Amz-Signature=17882ff8ed12485d6a560c06ecab3cf61a224b8d45f3244d8f7bfe3eab1754ea&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCGHTKIQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMSCC9qX4NHNURWeYv39EgMBiOTi4UrWfU53kHSjZebAiEA9113Ec8RBkBowF5xjpP95stdCq1sLRXgQroRyAhRhQwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd9v7NZiEfCxAR6eircA%2FsiHRYsW1ua9bk%2FKSrK%2FPxPJiSCbcF2aPEZUKp4ChbLIaK7uCBqIUH7XsHoi%2FHbeK6EcaI5D%2FDX6L4y958Ou4fBhJidFDDZJW73%2FdVQZ0e%2BNMpQr%2F7%2FkRSH0kOQqbrtLUmTL6vHh%2FK5zK8xwJD6u0GAVZr9kkSmlzz%2BlReDw4ed2XfkqOwEyvaCIdSpq7hHVd7T5kdOI6yWG17JaS71kYwcXwwVUw%2FfPiksf0lCuFihWrmBVsKfpWwukN%2FzL1C50iKlzXYPaiLJu4BsKozmlrbXbd%2Bd1iSf7Wzy1lOQkioLDeASjCPxv%2FNxpBdllv9EqDwYOS3GDQEhaVMu2MQHHwQ9s8s5Z5B%2BXgFfjsA5U0d5AyfpBW7WE8EGIFM4ew1cZwXSlZ6lJpQB3uhHitF7IdacCMJeGlWcyXJl0WCUqZ%2Ftov%2BB2wtXZsIrZHOkxz6K68EUHz7YPgcYjuXVcdjB%2FAJQs0vTnsVGK%2BnPcBR0Lpuho9gaadUYiAXEeMn1NVoE3hxMVFC9Pq4ld18QmRJaSAY38YAWK8pIa6ruXiAOEwgXerMlBSFnx2j0l1y70ba0BEOtK5ZHh4CaeibKmjDt3kYKXBpaD7wPMIkQMiniET1faGbLJqtNSo9OlyXEMKb26bwGOqUBcvi%2F9IgsuTtZ6UqdxJgq%2BqTSfO04weYDzz7EjJbzXV%2FnBb%2FxJhhcGptlZw8dQn2I%2Bn8wIde6L2lcjUMe4bM1HI%2Be1w9HUY%2FpNPWMgIfn46d1ETiQ7p0G%2Fgo15%2FFLNvEQ6V5zEip%2FTA%2FXiUWMt4wrLEM7lad%2FPvXbN1nvhaTV9RLBZgQ59ogblOXBzd%2FOiG8cq0f0qIdTjKYBOOQgCD0oFd1OfyPX&X-Amz-Signature=a9e6bf669faeaa7aee03300df6e4cacaeacd3b188ad4411bb176b4cd1df1d514&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCGHTKIQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMSCC9qX4NHNURWeYv39EgMBiOTi4UrWfU53kHSjZebAiEA9113Ec8RBkBowF5xjpP95stdCq1sLRXgQroRyAhRhQwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd9v7NZiEfCxAR6eircA%2FsiHRYsW1ua9bk%2FKSrK%2FPxPJiSCbcF2aPEZUKp4ChbLIaK7uCBqIUH7XsHoi%2FHbeK6EcaI5D%2FDX6L4y958Ou4fBhJidFDDZJW73%2FdVQZ0e%2BNMpQr%2F7%2FkRSH0kOQqbrtLUmTL6vHh%2FK5zK8xwJD6u0GAVZr9kkSmlzz%2BlReDw4ed2XfkqOwEyvaCIdSpq7hHVd7T5kdOI6yWG17JaS71kYwcXwwVUw%2FfPiksf0lCuFihWrmBVsKfpWwukN%2FzL1C50iKlzXYPaiLJu4BsKozmlrbXbd%2Bd1iSf7Wzy1lOQkioLDeASjCPxv%2FNxpBdllv9EqDwYOS3GDQEhaVMu2MQHHwQ9s8s5Z5B%2BXgFfjsA5U0d5AyfpBW7WE8EGIFM4ew1cZwXSlZ6lJpQB3uhHitF7IdacCMJeGlWcyXJl0WCUqZ%2Ftov%2BB2wtXZsIrZHOkxz6K68EUHz7YPgcYjuXVcdjB%2FAJQs0vTnsVGK%2BnPcBR0Lpuho9gaadUYiAXEeMn1NVoE3hxMVFC9Pq4ld18QmRJaSAY38YAWK8pIa6ruXiAOEwgXerMlBSFnx2j0l1y70ba0BEOtK5ZHh4CaeibKmjDt3kYKXBpaD7wPMIkQMiniET1faGbLJqtNSo9OlyXEMKb26bwGOqUBcvi%2F9IgsuTtZ6UqdxJgq%2BqTSfO04weYDzz7EjJbzXV%2FnBb%2FxJhhcGptlZw8dQn2I%2Bn8wIde6L2lcjUMe4bM1HI%2Be1w9HUY%2FpNPWMgIfn46d1ETiQ7p0G%2Fgo15%2FFLNvEQ6V5zEip%2FTA%2FXiUWMt4wrLEM7lad%2FPvXbN1nvhaTV9RLBZgQ59ogblOXBzd%2FOiG8cq0f0qIdTjKYBOOQgCD0oFd1OfyPX&X-Amz-Signature=2461b67195a2d0abf24c3eed4592eee0e91276eda92a702a9d48246a585625e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCGHTKIQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMSCC9qX4NHNURWeYv39EgMBiOTi4UrWfU53kHSjZebAiEA9113Ec8RBkBowF5xjpP95stdCq1sLRXgQroRyAhRhQwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd9v7NZiEfCxAR6eircA%2FsiHRYsW1ua9bk%2FKSrK%2FPxPJiSCbcF2aPEZUKp4ChbLIaK7uCBqIUH7XsHoi%2FHbeK6EcaI5D%2FDX6L4y958Ou4fBhJidFDDZJW73%2FdVQZ0e%2BNMpQr%2F7%2FkRSH0kOQqbrtLUmTL6vHh%2FK5zK8xwJD6u0GAVZr9kkSmlzz%2BlReDw4ed2XfkqOwEyvaCIdSpq7hHVd7T5kdOI6yWG17JaS71kYwcXwwVUw%2FfPiksf0lCuFihWrmBVsKfpWwukN%2FzL1C50iKlzXYPaiLJu4BsKozmlrbXbd%2Bd1iSf7Wzy1lOQkioLDeASjCPxv%2FNxpBdllv9EqDwYOS3GDQEhaVMu2MQHHwQ9s8s5Z5B%2BXgFfjsA5U0d5AyfpBW7WE8EGIFM4ew1cZwXSlZ6lJpQB3uhHitF7IdacCMJeGlWcyXJl0WCUqZ%2Ftov%2BB2wtXZsIrZHOkxz6K68EUHz7YPgcYjuXVcdjB%2FAJQs0vTnsVGK%2BnPcBR0Lpuho9gaadUYiAXEeMn1NVoE3hxMVFC9Pq4ld18QmRJaSAY38YAWK8pIa6ruXiAOEwgXerMlBSFnx2j0l1y70ba0BEOtK5ZHh4CaeibKmjDt3kYKXBpaD7wPMIkQMiniET1faGbLJqtNSo9OlyXEMKb26bwGOqUBcvi%2F9IgsuTtZ6UqdxJgq%2BqTSfO04weYDzz7EjJbzXV%2FnBb%2FxJhhcGptlZw8dQn2I%2Bn8wIde6L2lcjUMe4bM1HI%2Be1w9HUY%2FpNPWMgIfn46d1ETiQ7p0G%2Fgo15%2FFLNvEQ6V5zEip%2FTA%2FXiUWMt4wrLEM7lad%2FPvXbN1nvhaTV9RLBZgQ59ogblOXBzd%2FOiG8cq0f0qIdTjKYBOOQgCD0oFd1OfyPX&X-Amz-Signature=eeff1c6ab86b50973cef749a0c94d13464c0851306d18c228b0f672365b69355&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCGHTKIQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMSCC9qX4NHNURWeYv39EgMBiOTi4UrWfU53kHSjZebAiEA9113Ec8RBkBowF5xjpP95stdCq1sLRXgQroRyAhRhQwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd9v7NZiEfCxAR6eircA%2FsiHRYsW1ua9bk%2FKSrK%2FPxPJiSCbcF2aPEZUKp4ChbLIaK7uCBqIUH7XsHoi%2FHbeK6EcaI5D%2FDX6L4y958Ou4fBhJidFDDZJW73%2FdVQZ0e%2BNMpQr%2F7%2FkRSH0kOQqbrtLUmTL6vHh%2FK5zK8xwJD6u0GAVZr9kkSmlzz%2BlReDw4ed2XfkqOwEyvaCIdSpq7hHVd7T5kdOI6yWG17JaS71kYwcXwwVUw%2FfPiksf0lCuFihWrmBVsKfpWwukN%2FzL1C50iKlzXYPaiLJu4BsKozmlrbXbd%2Bd1iSf7Wzy1lOQkioLDeASjCPxv%2FNxpBdllv9EqDwYOS3GDQEhaVMu2MQHHwQ9s8s5Z5B%2BXgFfjsA5U0d5AyfpBW7WE8EGIFM4ew1cZwXSlZ6lJpQB3uhHitF7IdacCMJeGlWcyXJl0WCUqZ%2Ftov%2BB2wtXZsIrZHOkxz6K68EUHz7YPgcYjuXVcdjB%2FAJQs0vTnsVGK%2BnPcBR0Lpuho9gaadUYiAXEeMn1NVoE3hxMVFC9Pq4ld18QmRJaSAY38YAWK8pIa6ruXiAOEwgXerMlBSFnx2j0l1y70ba0BEOtK5ZHh4CaeibKmjDt3kYKXBpaD7wPMIkQMiniET1faGbLJqtNSo9OlyXEMKb26bwGOqUBcvi%2F9IgsuTtZ6UqdxJgq%2BqTSfO04weYDzz7EjJbzXV%2FnBb%2FxJhhcGptlZw8dQn2I%2Bn8wIde6L2lcjUMe4bM1HI%2Be1w9HUY%2FpNPWMgIfn46d1ETiQ7p0G%2Fgo15%2FFLNvEQ6V5zEip%2FTA%2FXiUWMt4wrLEM7lad%2FPvXbN1nvhaTV9RLBZgQ59ogblOXBzd%2FOiG8cq0f0qIdTjKYBOOQgCD0oFd1OfyPX&X-Amz-Signature=2bd73467623fda4a2f9aaaea11776af0a46f00589559776978496d0939883508&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCGHTKIQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMSCC9qX4NHNURWeYv39EgMBiOTi4UrWfU53kHSjZebAiEA9113Ec8RBkBowF5xjpP95stdCq1sLRXgQroRyAhRhQwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd9v7NZiEfCxAR6eircA%2FsiHRYsW1ua9bk%2FKSrK%2FPxPJiSCbcF2aPEZUKp4ChbLIaK7uCBqIUH7XsHoi%2FHbeK6EcaI5D%2FDX6L4y958Ou4fBhJidFDDZJW73%2FdVQZ0e%2BNMpQr%2F7%2FkRSH0kOQqbrtLUmTL6vHh%2FK5zK8xwJD6u0GAVZr9kkSmlzz%2BlReDw4ed2XfkqOwEyvaCIdSpq7hHVd7T5kdOI6yWG17JaS71kYwcXwwVUw%2FfPiksf0lCuFihWrmBVsKfpWwukN%2FzL1C50iKlzXYPaiLJu4BsKozmlrbXbd%2Bd1iSf7Wzy1lOQkioLDeASjCPxv%2FNxpBdllv9EqDwYOS3GDQEhaVMu2MQHHwQ9s8s5Z5B%2BXgFfjsA5U0d5AyfpBW7WE8EGIFM4ew1cZwXSlZ6lJpQB3uhHitF7IdacCMJeGlWcyXJl0WCUqZ%2Ftov%2BB2wtXZsIrZHOkxz6K68EUHz7YPgcYjuXVcdjB%2FAJQs0vTnsVGK%2BnPcBR0Lpuho9gaadUYiAXEeMn1NVoE3hxMVFC9Pq4ld18QmRJaSAY38YAWK8pIa6ruXiAOEwgXerMlBSFnx2j0l1y70ba0BEOtK5ZHh4CaeibKmjDt3kYKXBpaD7wPMIkQMiniET1faGbLJqtNSo9OlyXEMKb26bwGOqUBcvi%2F9IgsuTtZ6UqdxJgq%2BqTSfO04weYDzz7EjJbzXV%2FnBb%2FxJhhcGptlZw8dQn2I%2Bn8wIde6L2lcjUMe4bM1HI%2Be1w9HUY%2FpNPWMgIfn46d1ETiQ7p0G%2Fgo15%2FFLNvEQ6V5zEip%2FTA%2FXiUWMt4wrLEM7lad%2FPvXbN1nvhaTV9RLBZgQ59ogblOXBzd%2FOiG8cq0f0qIdTjKYBOOQgCD0oFd1OfyPX&X-Amz-Signature=06a4e005673e1e8c3494972c3dfaf4785661ffeafa08a1c0a531bd798551c813&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCGHTKIQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMSCC9qX4NHNURWeYv39EgMBiOTi4UrWfU53kHSjZebAiEA9113Ec8RBkBowF5xjpP95stdCq1sLRXgQroRyAhRhQwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd9v7NZiEfCxAR6eircA%2FsiHRYsW1ua9bk%2FKSrK%2FPxPJiSCbcF2aPEZUKp4ChbLIaK7uCBqIUH7XsHoi%2FHbeK6EcaI5D%2FDX6L4y958Ou4fBhJidFDDZJW73%2FdVQZ0e%2BNMpQr%2F7%2FkRSH0kOQqbrtLUmTL6vHh%2FK5zK8xwJD6u0GAVZr9kkSmlzz%2BlReDw4ed2XfkqOwEyvaCIdSpq7hHVd7T5kdOI6yWG17JaS71kYwcXwwVUw%2FfPiksf0lCuFihWrmBVsKfpWwukN%2FzL1C50iKlzXYPaiLJu4BsKozmlrbXbd%2Bd1iSf7Wzy1lOQkioLDeASjCPxv%2FNxpBdllv9EqDwYOS3GDQEhaVMu2MQHHwQ9s8s5Z5B%2BXgFfjsA5U0d5AyfpBW7WE8EGIFM4ew1cZwXSlZ6lJpQB3uhHitF7IdacCMJeGlWcyXJl0WCUqZ%2Ftov%2BB2wtXZsIrZHOkxz6K68EUHz7YPgcYjuXVcdjB%2FAJQs0vTnsVGK%2BnPcBR0Lpuho9gaadUYiAXEeMn1NVoE3hxMVFC9Pq4ld18QmRJaSAY38YAWK8pIa6ruXiAOEwgXerMlBSFnx2j0l1y70ba0BEOtK5ZHh4CaeibKmjDt3kYKXBpaD7wPMIkQMiniET1faGbLJqtNSo9OlyXEMKb26bwGOqUBcvi%2F9IgsuTtZ6UqdxJgq%2BqTSfO04weYDzz7EjJbzXV%2FnBb%2FxJhhcGptlZw8dQn2I%2Bn8wIde6L2lcjUMe4bM1HI%2Be1w9HUY%2FpNPWMgIfn46d1ETiQ7p0G%2Fgo15%2FFLNvEQ6V5zEip%2FTA%2FXiUWMt4wrLEM7lad%2FPvXbN1nvhaTV9RLBZgQ59ogblOXBzd%2FOiG8cq0f0qIdTjKYBOOQgCD0oFd1OfyPX&X-Amz-Signature=9d3eeae6f2eed971854e98dc0e3548529df5a890dacfd509c019dbaaccfa5c2f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
