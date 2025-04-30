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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHX35QHM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFkywX2WObrKLxcoU8xtcCfiZT4vEn8ousIosSJqd%2FCxAiBylzsibCN90gan1ofoKfkUDx1lH8AT7mN6%2FrdiC8BZkSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDi%2BsP24HaJ7o4GSbKtwDuUX5dh2UFCLUlFSEe3Z3zoqcxJx0LIcVPBOarv54p%2Fb2ZTTnRevYb8KOG%2BP%2B8OFUJ3aL63%2B77SHRNql2IQJO60T7NdlghyewxoBYBY7%2Fp5zjXl1e1FK8yQldJkAjz%2BTpFkgB8G0zqqSW3N3MZGXlgoYjV8SsIyfmLqlO6kZ7yWSKL2qESARkpYwv5zFN7uCopr%2FS7XwNldDEAOZ8KNmlVfKAbZvRvLntYicWMoBQZDM%2B73Vrts5VYWRk4IzkxJIQP0o1FOBUSjff0L5Vp9eRxz%2F9%2FjGOdHscKVegVsy2UMIUnnhzaZbMP%2BsDZgcG3hKGeCheqMXDLk%2BATFPWaaQdbc5rpoZJ9c0gqZPp%2BVK6qwZMQKTprXj%2B%2Fds4K2lBHEQTuw8NMPJtmnvsJvGGyHbkSiSQLcw%2B%2FfmQoxhkTUOse%2Fyia6R6NxDe07H9LJyD21ylgZwa%2FkRbri79OdYy%2FFX9c%2Bt7mJSBXYUuggqY1%2FdJ1DjzPuUYQvmDbINbGf%2B2RU6lFrvNRqz19yyP9ACMJO3M3qQaGdV5ZoFPzhEoiF8v%2BaCedQqQRo0ROfkRkn65%2Bn60O2%2Fml%2FZBpoQKAzjxBMEYo6ueQj8qKSPQcj3yo8Tmvk2MYm1HVimcsaKbPckwz8TIwAY6pgHghxm2tjWfjlS7WL66NhbC0GsbS47ijcgkXErQ5r0oStkBDPHJtH7E6iSIrRm%2BajDUwpdTDZaz5E8Orn4iGsXrG%2FuAG8w9CQB6bvC6Xxg3SFfZX3FIFyH78mksb3LCD4DcUHijmx%2Fkueuas1OsXfJPTQ9QNVl%2BL3f07b6KchS5WBvYQuzgJIdwO0teMVZV0zu61v9VirpN9jhnyzJzteHz0GjSs59v&X-Amz-Signature=edf8de5779601f0425462118660a483d4da3a2c960822e114d71707b0210463b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHX35QHM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFkywX2WObrKLxcoU8xtcCfiZT4vEn8ousIosSJqd%2FCxAiBylzsibCN90gan1ofoKfkUDx1lH8AT7mN6%2FrdiC8BZkSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDi%2BsP24HaJ7o4GSbKtwDuUX5dh2UFCLUlFSEe3Z3zoqcxJx0LIcVPBOarv54p%2Fb2ZTTnRevYb8KOG%2BP%2B8OFUJ3aL63%2B77SHRNql2IQJO60T7NdlghyewxoBYBY7%2Fp5zjXl1e1FK8yQldJkAjz%2BTpFkgB8G0zqqSW3N3MZGXlgoYjV8SsIyfmLqlO6kZ7yWSKL2qESARkpYwv5zFN7uCopr%2FS7XwNldDEAOZ8KNmlVfKAbZvRvLntYicWMoBQZDM%2B73Vrts5VYWRk4IzkxJIQP0o1FOBUSjff0L5Vp9eRxz%2F9%2FjGOdHscKVegVsy2UMIUnnhzaZbMP%2BsDZgcG3hKGeCheqMXDLk%2BATFPWaaQdbc5rpoZJ9c0gqZPp%2BVK6qwZMQKTprXj%2B%2Fds4K2lBHEQTuw8NMPJtmnvsJvGGyHbkSiSQLcw%2B%2FfmQoxhkTUOse%2Fyia6R6NxDe07H9LJyD21ylgZwa%2FkRbri79OdYy%2FFX9c%2Bt7mJSBXYUuggqY1%2FdJ1DjzPuUYQvmDbINbGf%2B2RU6lFrvNRqz19yyP9ACMJO3M3qQaGdV5ZoFPzhEoiF8v%2BaCedQqQRo0ROfkRkn65%2Bn60O2%2Fml%2FZBpoQKAzjxBMEYo6ueQj8qKSPQcj3yo8Tmvk2MYm1HVimcsaKbPckwz8TIwAY6pgHghxm2tjWfjlS7WL66NhbC0GsbS47ijcgkXErQ5r0oStkBDPHJtH7E6iSIrRm%2BajDUwpdTDZaz5E8Orn4iGsXrG%2FuAG8w9CQB6bvC6Xxg3SFfZX3FIFyH78mksb3LCD4DcUHijmx%2Fkueuas1OsXfJPTQ9QNVl%2BL3f07b6KchS5WBvYQuzgJIdwO0teMVZV0zu61v9VirpN9jhnyzJzteHz0GjSs59v&X-Amz-Signature=c13025221ba1bf570880af69ed08f97af6d095a258756062190a4b5176635d95&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHX35QHM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFkywX2WObrKLxcoU8xtcCfiZT4vEn8ousIosSJqd%2FCxAiBylzsibCN90gan1ofoKfkUDx1lH8AT7mN6%2FrdiC8BZkSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDi%2BsP24HaJ7o4GSbKtwDuUX5dh2UFCLUlFSEe3Z3zoqcxJx0LIcVPBOarv54p%2Fb2ZTTnRevYb8KOG%2BP%2B8OFUJ3aL63%2B77SHRNql2IQJO60T7NdlghyewxoBYBY7%2Fp5zjXl1e1FK8yQldJkAjz%2BTpFkgB8G0zqqSW3N3MZGXlgoYjV8SsIyfmLqlO6kZ7yWSKL2qESARkpYwv5zFN7uCopr%2FS7XwNldDEAOZ8KNmlVfKAbZvRvLntYicWMoBQZDM%2B73Vrts5VYWRk4IzkxJIQP0o1FOBUSjff0L5Vp9eRxz%2F9%2FjGOdHscKVegVsy2UMIUnnhzaZbMP%2BsDZgcG3hKGeCheqMXDLk%2BATFPWaaQdbc5rpoZJ9c0gqZPp%2BVK6qwZMQKTprXj%2B%2Fds4K2lBHEQTuw8NMPJtmnvsJvGGyHbkSiSQLcw%2B%2FfmQoxhkTUOse%2Fyia6R6NxDe07H9LJyD21ylgZwa%2FkRbri79OdYy%2FFX9c%2Bt7mJSBXYUuggqY1%2FdJ1DjzPuUYQvmDbINbGf%2B2RU6lFrvNRqz19yyP9ACMJO3M3qQaGdV5ZoFPzhEoiF8v%2BaCedQqQRo0ROfkRkn65%2Bn60O2%2Fml%2FZBpoQKAzjxBMEYo6ueQj8qKSPQcj3yo8Tmvk2MYm1HVimcsaKbPckwz8TIwAY6pgHghxm2tjWfjlS7WL66NhbC0GsbS47ijcgkXErQ5r0oStkBDPHJtH7E6iSIrRm%2BajDUwpdTDZaz5E8Orn4iGsXrG%2FuAG8w9CQB6bvC6Xxg3SFfZX3FIFyH78mksb3LCD4DcUHijmx%2Fkueuas1OsXfJPTQ9QNVl%2BL3f07b6KchS5WBvYQuzgJIdwO0teMVZV0zu61v9VirpN9jhnyzJzteHz0GjSs59v&X-Amz-Signature=9123bcc5fd98402044dd7ef2ecdcd8ca20e79506f54e7656aac677ca5c69f8f1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHX35QHM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFkywX2WObrKLxcoU8xtcCfiZT4vEn8ousIosSJqd%2FCxAiBylzsibCN90gan1ofoKfkUDx1lH8AT7mN6%2FrdiC8BZkSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDi%2BsP24HaJ7o4GSbKtwDuUX5dh2UFCLUlFSEe3Z3zoqcxJx0LIcVPBOarv54p%2Fb2ZTTnRevYb8KOG%2BP%2B8OFUJ3aL63%2B77SHRNql2IQJO60T7NdlghyewxoBYBY7%2Fp5zjXl1e1FK8yQldJkAjz%2BTpFkgB8G0zqqSW3N3MZGXlgoYjV8SsIyfmLqlO6kZ7yWSKL2qESARkpYwv5zFN7uCopr%2FS7XwNldDEAOZ8KNmlVfKAbZvRvLntYicWMoBQZDM%2B73Vrts5VYWRk4IzkxJIQP0o1FOBUSjff0L5Vp9eRxz%2F9%2FjGOdHscKVegVsy2UMIUnnhzaZbMP%2BsDZgcG3hKGeCheqMXDLk%2BATFPWaaQdbc5rpoZJ9c0gqZPp%2BVK6qwZMQKTprXj%2B%2Fds4K2lBHEQTuw8NMPJtmnvsJvGGyHbkSiSQLcw%2B%2FfmQoxhkTUOse%2Fyia6R6NxDe07H9LJyD21ylgZwa%2FkRbri79OdYy%2FFX9c%2Bt7mJSBXYUuggqY1%2FdJ1DjzPuUYQvmDbINbGf%2B2RU6lFrvNRqz19yyP9ACMJO3M3qQaGdV5ZoFPzhEoiF8v%2BaCedQqQRo0ROfkRkn65%2Bn60O2%2Fml%2FZBpoQKAzjxBMEYo6ueQj8qKSPQcj3yo8Tmvk2MYm1HVimcsaKbPckwz8TIwAY6pgHghxm2tjWfjlS7WL66NhbC0GsbS47ijcgkXErQ5r0oStkBDPHJtH7E6iSIrRm%2BajDUwpdTDZaz5E8Orn4iGsXrG%2FuAG8w9CQB6bvC6Xxg3SFfZX3FIFyH78mksb3LCD4DcUHijmx%2Fkueuas1OsXfJPTQ9QNVl%2BL3f07b6KchS5WBvYQuzgJIdwO0teMVZV0zu61v9VirpN9jhnyzJzteHz0GjSs59v&X-Amz-Signature=3cdae3d2a602b4ac86dd4c31cb0c4585d647487f9ab07608cde381a0dded1a15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHX35QHM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFkywX2WObrKLxcoU8xtcCfiZT4vEn8ousIosSJqd%2FCxAiBylzsibCN90gan1ofoKfkUDx1lH8AT7mN6%2FrdiC8BZkSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDi%2BsP24HaJ7o4GSbKtwDuUX5dh2UFCLUlFSEe3Z3zoqcxJx0LIcVPBOarv54p%2Fb2ZTTnRevYb8KOG%2BP%2B8OFUJ3aL63%2B77SHRNql2IQJO60T7NdlghyewxoBYBY7%2Fp5zjXl1e1FK8yQldJkAjz%2BTpFkgB8G0zqqSW3N3MZGXlgoYjV8SsIyfmLqlO6kZ7yWSKL2qESARkpYwv5zFN7uCopr%2FS7XwNldDEAOZ8KNmlVfKAbZvRvLntYicWMoBQZDM%2B73Vrts5VYWRk4IzkxJIQP0o1FOBUSjff0L5Vp9eRxz%2F9%2FjGOdHscKVegVsy2UMIUnnhzaZbMP%2BsDZgcG3hKGeCheqMXDLk%2BATFPWaaQdbc5rpoZJ9c0gqZPp%2BVK6qwZMQKTprXj%2B%2Fds4K2lBHEQTuw8NMPJtmnvsJvGGyHbkSiSQLcw%2B%2FfmQoxhkTUOse%2Fyia6R6NxDe07H9LJyD21ylgZwa%2FkRbri79OdYy%2FFX9c%2Bt7mJSBXYUuggqY1%2FdJ1DjzPuUYQvmDbINbGf%2B2RU6lFrvNRqz19yyP9ACMJO3M3qQaGdV5ZoFPzhEoiF8v%2BaCedQqQRo0ROfkRkn65%2Bn60O2%2Fml%2FZBpoQKAzjxBMEYo6ueQj8qKSPQcj3yo8Tmvk2MYm1HVimcsaKbPckwz8TIwAY6pgHghxm2tjWfjlS7WL66NhbC0GsbS47ijcgkXErQ5r0oStkBDPHJtH7E6iSIrRm%2BajDUwpdTDZaz5E8Orn4iGsXrG%2FuAG8w9CQB6bvC6Xxg3SFfZX3FIFyH78mksb3LCD4DcUHijmx%2Fkueuas1OsXfJPTQ9QNVl%2BL3f07b6KchS5WBvYQuzgJIdwO0teMVZV0zu61v9VirpN9jhnyzJzteHz0GjSs59v&X-Amz-Signature=a5e06f4dc6a18e06ffd73d0ccd1c946a54c962d99b5daf30c17126842ee29efb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHX35QHM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFkywX2WObrKLxcoU8xtcCfiZT4vEn8ousIosSJqd%2FCxAiBylzsibCN90gan1ofoKfkUDx1lH8AT7mN6%2FrdiC8BZkSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDi%2BsP24HaJ7o4GSbKtwDuUX5dh2UFCLUlFSEe3Z3zoqcxJx0LIcVPBOarv54p%2Fb2ZTTnRevYb8KOG%2BP%2B8OFUJ3aL63%2B77SHRNql2IQJO60T7NdlghyewxoBYBY7%2Fp5zjXl1e1FK8yQldJkAjz%2BTpFkgB8G0zqqSW3N3MZGXlgoYjV8SsIyfmLqlO6kZ7yWSKL2qESARkpYwv5zFN7uCopr%2FS7XwNldDEAOZ8KNmlVfKAbZvRvLntYicWMoBQZDM%2B73Vrts5VYWRk4IzkxJIQP0o1FOBUSjff0L5Vp9eRxz%2F9%2FjGOdHscKVegVsy2UMIUnnhzaZbMP%2BsDZgcG3hKGeCheqMXDLk%2BATFPWaaQdbc5rpoZJ9c0gqZPp%2BVK6qwZMQKTprXj%2B%2Fds4K2lBHEQTuw8NMPJtmnvsJvGGyHbkSiSQLcw%2B%2FfmQoxhkTUOse%2Fyia6R6NxDe07H9LJyD21ylgZwa%2FkRbri79OdYy%2FFX9c%2Bt7mJSBXYUuggqY1%2FdJ1DjzPuUYQvmDbINbGf%2B2RU6lFrvNRqz19yyP9ACMJO3M3qQaGdV5ZoFPzhEoiF8v%2BaCedQqQRo0ROfkRkn65%2Bn60O2%2Fml%2FZBpoQKAzjxBMEYo6ueQj8qKSPQcj3yo8Tmvk2MYm1HVimcsaKbPckwz8TIwAY6pgHghxm2tjWfjlS7WL66NhbC0GsbS47ijcgkXErQ5r0oStkBDPHJtH7E6iSIrRm%2BajDUwpdTDZaz5E8Orn4iGsXrG%2FuAG8w9CQB6bvC6Xxg3SFfZX3FIFyH78mksb3LCD4DcUHijmx%2Fkueuas1OsXfJPTQ9QNVl%2BL3f07b6KchS5WBvYQuzgJIdwO0teMVZV0zu61v9VirpN9jhnyzJzteHz0GjSs59v&X-Amz-Signature=0bfc8c96b9a57dbea69fdcf6dabfa999e0238e60d326f4b63dc636ac9e638677&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHX35QHM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFkywX2WObrKLxcoU8xtcCfiZT4vEn8ousIosSJqd%2FCxAiBylzsibCN90gan1ofoKfkUDx1lH8AT7mN6%2FrdiC8BZkSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDi%2BsP24HaJ7o4GSbKtwDuUX5dh2UFCLUlFSEe3Z3zoqcxJx0LIcVPBOarv54p%2Fb2ZTTnRevYb8KOG%2BP%2B8OFUJ3aL63%2B77SHRNql2IQJO60T7NdlghyewxoBYBY7%2Fp5zjXl1e1FK8yQldJkAjz%2BTpFkgB8G0zqqSW3N3MZGXlgoYjV8SsIyfmLqlO6kZ7yWSKL2qESARkpYwv5zFN7uCopr%2FS7XwNldDEAOZ8KNmlVfKAbZvRvLntYicWMoBQZDM%2B73Vrts5VYWRk4IzkxJIQP0o1FOBUSjff0L5Vp9eRxz%2F9%2FjGOdHscKVegVsy2UMIUnnhzaZbMP%2BsDZgcG3hKGeCheqMXDLk%2BATFPWaaQdbc5rpoZJ9c0gqZPp%2BVK6qwZMQKTprXj%2B%2Fds4K2lBHEQTuw8NMPJtmnvsJvGGyHbkSiSQLcw%2B%2FfmQoxhkTUOse%2Fyia6R6NxDe07H9LJyD21ylgZwa%2FkRbri79OdYy%2FFX9c%2Bt7mJSBXYUuggqY1%2FdJ1DjzPuUYQvmDbINbGf%2B2RU6lFrvNRqz19yyP9ACMJO3M3qQaGdV5ZoFPzhEoiF8v%2BaCedQqQRo0ROfkRkn65%2Bn60O2%2Fml%2FZBpoQKAzjxBMEYo6ueQj8qKSPQcj3yo8Tmvk2MYm1HVimcsaKbPckwz8TIwAY6pgHghxm2tjWfjlS7WL66NhbC0GsbS47ijcgkXErQ5r0oStkBDPHJtH7E6iSIrRm%2BajDUwpdTDZaz5E8Orn4iGsXrG%2FuAG8w9CQB6bvC6Xxg3SFfZX3FIFyH78mksb3LCD4DcUHijmx%2Fkueuas1OsXfJPTQ9QNVl%2BL3f07b6KchS5WBvYQuzgJIdwO0teMVZV0zu61v9VirpN9jhnyzJzteHz0GjSs59v&X-Amz-Signature=52a6bf1ca9469782e050f496ba21f3a2307d0be5d280e8080951d191b8e288ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHX35QHM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFkywX2WObrKLxcoU8xtcCfiZT4vEn8ousIosSJqd%2FCxAiBylzsibCN90gan1ofoKfkUDx1lH8AT7mN6%2FrdiC8BZkSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDi%2BsP24HaJ7o4GSbKtwDuUX5dh2UFCLUlFSEe3Z3zoqcxJx0LIcVPBOarv54p%2Fb2ZTTnRevYb8KOG%2BP%2B8OFUJ3aL63%2B77SHRNql2IQJO60T7NdlghyewxoBYBY7%2Fp5zjXl1e1FK8yQldJkAjz%2BTpFkgB8G0zqqSW3N3MZGXlgoYjV8SsIyfmLqlO6kZ7yWSKL2qESARkpYwv5zFN7uCopr%2FS7XwNldDEAOZ8KNmlVfKAbZvRvLntYicWMoBQZDM%2B73Vrts5VYWRk4IzkxJIQP0o1FOBUSjff0L5Vp9eRxz%2F9%2FjGOdHscKVegVsy2UMIUnnhzaZbMP%2BsDZgcG3hKGeCheqMXDLk%2BATFPWaaQdbc5rpoZJ9c0gqZPp%2BVK6qwZMQKTprXj%2B%2Fds4K2lBHEQTuw8NMPJtmnvsJvGGyHbkSiSQLcw%2B%2FfmQoxhkTUOse%2Fyia6R6NxDe07H9LJyD21ylgZwa%2FkRbri79OdYy%2FFX9c%2Bt7mJSBXYUuggqY1%2FdJ1DjzPuUYQvmDbINbGf%2B2RU6lFrvNRqz19yyP9ACMJO3M3qQaGdV5ZoFPzhEoiF8v%2BaCedQqQRo0ROfkRkn65%2Bn60O2%2Fml%2FZBpoQKAzjxBMEYo6ueQj8qKSPQcj3yo8Tmvk2MYm1HVimcsaKbPckwz8TIwAY6pgHghxm2tjWfjlS7WL66NhbC0GsbS47ijcgkXErQ5r0oStkBDPHJtH7E6iSIrRm%2BajDUwpdTDZaz5E8Orn4iGsXrG%2FuAG8w9CQB6bvC6Xxg3SFfZX3FIFyH78mksb3LCD4DcUHijmx%2Fkueuas1OsXfJPTQ9QNVl%2BL3f07b6KchS5WBvYQuzgJIdwO0teMVZV0zu61v9VirpN9jhnyzJzteHz0GjSs59v&X-Amz-Signature=fcef0ab768b3014df4a683485038ba8fa1aade05ee5d66ecc83929b19e930d63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
