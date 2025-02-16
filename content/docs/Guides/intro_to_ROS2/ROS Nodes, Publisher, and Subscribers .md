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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQY3UY2R%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCXnV9YBk40g2NUNzTbQNmjhV0BFXf%2FSJ9v%2F6zCl64HJgIgEx0f0RCBVl97CvI7UkE36b760ZA%2BcO48hYNTZ9DwW4cq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIxCpqkQMP3GusLKeyrcA%2BAX5aNgXrnIMX3S3B9idE6c3gB%2Fttb4yz9wiF0kfvY4rQTx8%2BIPgzPA8JCz7oYOf2itAF%2FHBO20hIIUVQ%2BKNve5Dx2ymjYv5mCicB3Cd6yUq8FIyPRExWEqXmvFZQ7MgfuUVb6EPmm17U%2FwU9OFZk9n%2FLfzdgp0Fp5KTdVWMha5e%2FgyeX1J4xq15tFrZWHXx%2FNAl%2FusI4S1w%2FwoOwth3DgFubumfOtOFyx3H8vzRdl%2FZOp9n%2FGbWC2M1qzTfbOjNUdxvmOLaxveDLfrPjA9wQElt6jsGqA58K45Y3m6Pd%2B99UIuFudn%2FKCc3TRBjU5oVhJVdLFkhdbI9Lwh8Gq4AHle%2FU%2FBqeEwCTU3P26gNj9W3m5CC14SgfqRJxJ5owAVO0mTBzThosYwvFf%2BlD%2BlvOTh90Tlo%2Fizo8lWN9%2FCKo0YCYvdEBJ65%2BSoBhKUxYSM%2FUQH14CFUhQZS3Nv3FW7DpgUsvQ%2B1hLQHJmQY3doGm4eQ40RZky7jn9ENIJlOMJgOjVmNuE0smNlT61yzS30ITrcJrmQXMw8taKFxiK%2B7iIxxEKmwR18qQsPEvvWBBhW2%2BWQWLR%2Fo7N0h%2B6GJOcEyVhB2PFcKIxF0vdltF7GWMikxggPTTgw0Unbv7pKMIXByL0GOqUBdPaAY%2FGpRG4gSMwu%2BrQhgnv%2Bla69HHithsPdQzc4mjKYhIEzu2EMMWJlRffSDmkuVFXuOSTRBZ%2Bo7qC5mEiE3C2Bp93YU%2F73LJ3pL9t38JgknmESkLnPbrYZQzk3AxcZVzxMufA9AtCqC9j%2FvhvHufSLstuSDsCrYtFxJzu%2B%2F0GPSW9PxEGyYYGEGPV1Ec8Lzx5n3qWsods4ntejxjNZog5cMorU&X-Amz-Signature=8d74e564e97aaab5e7d3d03484a88a616d44dc1cad299c278f602164b6b8ebd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQY3UY2R%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCXnV9YBk40g2NUNzTbQNmjhV0BFXf%2FSJ9v%2F6zCl64HJgIgEx0f0RCBVl97CvI7UkE36b760ZA%2BcO48hYNTZ9DwW4cq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIxCpqkQMP3GusLKeyrcA%2BAX5aNgXrnIMX3S3B9idE6c3gB%2Fttb4yz9wiF0kfvY4rQTx8%2BIPgzPA8JCz7oYOf2itAF%2FHBO20hIIUVQ%2BKNve5Dx2ymjYv5mCicB3Cd6yUq8FIyPRExWEqXmvFZQ7MgfuUVb6EPmm17U%2FwU9OFZk9n%2FLfzdgp0Fp5KTdVWMha5e%2FgyeX1J4xq15tFrZWHXx%2FNAl%2FusI4S1w%2FwoOwth3DgFubumfOtOFyx3H8vzRdl%2FZOp9n%2FGbWC2M1qzTfbOjNUdxvmOLaxveDLfrPjA9wQElt6jsGqA58K45Y3m6Pd%2B99UIuFudn%2FKCc3TRBjU5oVhJVdLFkhdbI9Lwh8Gq4AHle%2FU%2FBqeEwCTU3P26gNj9W3m5CC14SgfqRJxJ5owAVO0mTBzThosYwvFf%2BlD%2BlvOTh90Tlo%2Fizo8lWN9%2FCKo0YCYvdEBJ65%2BSoBhKUxYSM%2FUQH14CFUhQZS3Nv3FW7DpgUsvQ%2B1hLQHJmQY3doGm4eQ40RZky7jn9ENIJlOMJgOjVmNuE0smNlT61yzS30ITrcJrmQXMw8taKFxiK%2B7iIxxEKmwR18qQsPEvvWBBhW2%2BWQWLR%2Fo7N0h%2B6GJOcEyVhB2PFcKIxF0vdltF7GWMikxggPTTgw0Unbv7pKMIXByL0GOqUBdPaAY%2FGpRG4gSMwu%2BrQhgnv%2Bla69HHithsPdQzc4mjKYhIEzu2EMMWJlRffSDmkuVFXuOSTRBZ%2Bo7qC5mEiE3C2Bp93YU%2F73LJ3pL9t38JgknmESkLnPbrYZQzk3AxcZVzxMufA9AtCqC9j%2FvhvHufSLstuSDsCrYtFxJzu%2B%2F0GPSW9PxEGyYYGEGPV1Ec8Lzx5n3qWsods4ntejxjNZog5cMorU&X-Amz-Signature=79ce86fb15fcdf9caebfe2a52b4d50ff1b1193ba490b181f1a8c65180d44e36e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQY3UY2R%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCXnV9YBk40g2NUNzTbQNmjhV0BFXf%2FSJ9v%2F6zCl64HJgIgEx0f0RCBVl97CvI7UkE36b760ZA%2BcO48hYNTZ9DwW4cq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIxCpqkQMP3GusLKeyrcA%2BAX5aNgXrnIMX3S3B9idE6c3gB%2Fttb4yz9wiF0kfvY4rQTx8%2BIPgzPA8JCz7oYOf2itAF%2FHBO20hIIUVQ%2BKNve5Dx2ymjYv5mCicB3Cd6yUq8FIyPRExWEqXmvFZQ7MgfuUVb6EPmm17U%2FwU9OFZk9n%2FLfzdgp0Fp5KTdVWMha5e%2FgyeX1J4xq15tFrZWHXx%2FNAl%2FusI4S1w%2FwoOwth3DgFubumfOtOFyx3H8vzRdl%2FZOp9n%2FGbWC2M1qzTfbOjNUdxvmOLaxveDLfrPjA9wQElt6jsGqA58K45Y3m6Pd%2B99UIuFudn%2FKCc3TRBjU5oVhJVdLFkhdbI9Lwh8Gq4AHle%2FU%2FBqeEwCTU3P26gNj9W3m5CC14SgfqRJxJ5owAVO0mTBzThosYwvFf%2BlD%2BlvOTh90Tlo%2Fizo8lWN9%2FCKo0YCYvdEBJ65%2BSoBhKUxYSM%2FUQH14CFUhQZS3Nv3FW7DpgUsvQ%2B1hLQHJmQY3doGm4eQ40RZky7jn9ENIJlOMJgOjVmNuE0smNlT61yzS30ITrcJrmQXMw8taKFxiK%2B7iIxxEKmwR18qQsPEvvWBBhW2%2BWQWLR%2Fo7N0h%2B6GJOcEyVhB2PFcKIxF0vdltF7GWMikxggPTTgw0Unbv7pKMIXByL0GOqUBdPaAY%2FGpRG4gSMwu%2BrQhgnv%2Bla69HHithsPdQzc4mjKYhIEzu2EMMWJlRffSDmkuVFXuOSTRBZ%2Bo7qC5mEiE3C2Bp93YU%2F73LJ3pL9t38JgknmESkLnPbrYZQzk3AxcZVzxMufA9AtCqC9j%2FvhvHufSLstuSDsCrYtFxJzu%2B%2F0GPSW9PxEGyYYGEGPV1Ec8Lzx5n3qWsods4ntejxjNZog5cMorU&X-Amz-Signature=e308bece4da6f2ca5d04a3150f96562d8e9bc823e8dba1fe68b37cc7bcebd3ca&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQY3UY2R%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCXnV9YBk40g2NUNzTbQNmjhV0BFXf%2FSJ9v%2F6zCl64HJgIgEx0f0RCBVl97CvI7UkE36b760ZA%2BcO48hYNTZ9DwW4cq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIxCpqkQMP3GusLKeyrcA%2BAX5aNgXrnIMX3S3B9idE6c3gB%2Fttb4yz9wiF0kfvY4rQTx8%2BIPgzPA8JCz7oYOf2itAF%2FHBO20hIIUVQ%2BKNve5Dx2ymjYv5mCicB3Cd6yUq8FIyPRExWEqXmvFZQ7MgfuUVb6EPmm17U%2FwU9OFZk9n%2FLfzdgp0Fp5KTdVWMha5e%2FgyeX1J4xq15tFrZWHXx%2FNAl%2FusI4S1w%2FwoOwth3DgFubumfOtOFyx3H8vzRdl%2FZOp9n%2FGbWC2M1qzTfbOjNUdxvmOLaxveDLfrPjA9wQElt6jsGqA58K45Y3m6Pd%2B99UIuFudn%2FKCc3TRBjU5oVhJVdLFkhdbI9Lwh8Gq4AHle%2FU%2FBqeEwCTU3P26gNj9W3m5CC14SgfqRJxJ5owAVO0mTBzThosYwvFf%2BlD%2BlvOTh90Tlo%2Fizo8lWN9%2FCKo0YCYvdEBJ65%2BSoBhKUxYSM%2FUQH14CFUhQZS3Nv3FW7DpgUsvQ%2B1hLQHJmQY3doGm4eQ40RZky7jn9ENIJlOMJgOjVmNuE0smNlT61yzS30ITrcJrmQXMw8taKFxiK%2B7iIxxEKmwR18qQsPEvvWBBhW2%2BWQWLR%2Fo7N0h%2B6GJOcEyVhB2PFcKIxF0vdltF7GWMikxggPTTgw0Unbv7pKMIXByL0GOqUBdPaAY%2FGpRG4gSMwu%2BrQhgnv%2Bla69HHithsPdQzc4mjKYhIEzu2EMMWJlRffSDmkuVFXuOSTRBZ%2Bo7qC5mEiE3C2Bp93YU%2F73LJ3pL9t38JgknmESkLnPbrYZQzk3AxcZVzxMufA9AtCqC9j%2FvhvHufSLstuSDsCrYtFxJzu%2B%2F0GPSW9PxEGyYYGEGPV1Ec8Lzx5n3qWsods4ntejxjNZog5cMorU&X-Amz-Signature=7f01d1b847b80b997dd154b36855d2e072d2a61cb48af6fa05b4ad981f22dba4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQY3UY2R%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCXnV9YBk40g2NUNzTbQNmjhV0BFXf%2FSJ9v%2F6zCl64HJgIgEx0f0RCBVl97CvI7UkE36b760ZA%2BcO48hYNTZ9DwW4cq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIxCpqkQMP3GusLKeyrcA%2BAX5aNgXrnIMX3S3B9idE6c3gB%2Fttb4yz9wiF0kfvY4rQTx8%2BIPgzPA8JCz7oYOf2itAF%2FHBO20hIIUVQ%2BKNve5Dx2ymjYv5mCicB3Cd6yUq8FIyPRExWEqXmvFZQ7MgfuUVb6EPmm17U%2FwU9OFZk9n%2FLfzdgp0Fp5KTdVWMha5e%2FgyeX1J4xq15tFrZWHXx%2FNAl%2FusI4S1w%2FwoOwth3DgFubumfOtOFyx3H8vzRdl%2FZOp9n%2FGbWC2M1qzTfbOjNUdxvmOLaxveDLfrPjA9wQElt6jsGqA58K45Y3m6Pd%2B99UIuFudn%2FKCc3TRBjU5oVhJVdLFkhdbI9Lwh8Gq4AHle%2FU%2FBqeEwCTU3P26gNj9W3m5CC14SgfqRJxJ5owAVO0mTBzThosYwvFf%2BlD%2BlvOTh90Tlo%2Fizo8lWN9%2FCKo0YCYvdEBJ65%2BSoBhKUxYSM%2FUQH14CFUhQZS3Nv3FW7DpgUsvQ%2B1hLQHJmQY3doGm4eQ40RZky7jn9ENIJlOMJgOjVmNuE0smNlT61yzS30ITrcJrmQXMw8taKFxiK%2B7iIxxEKmwR18qQsPEvvWBBhW2%2BWQWLR%2Fo7N0h%2B6GJOcEyVhB2PFcKIxF0vdltF7GWMikxggPTTgw0Unbv7pKMIXByL0GOqUBdPaAY%2FGpRG4gSMwu%2BrQhgnv%2Bla69HHithsPdQzc4mjKYhIEzu2EMMWJlRffSDmkuVFXuOSTRBZ%2Bo7qC5mEiE3C2Bp93YU%2F73LJ3pL9t38JgknmESkLnPbrYZQzk3AxcZVzxMufA9AtCqC9j%2FvhvHufSLstuSDsCrYtFxJzu%2B%2F0GPSW9PxEGyYYGEGPV1Ec8Lzx5n3qWsods4ntejxjNZog5cMorU&X-Amz-Signature=dbd3cb4e43f8ae2fd54f4f955666baeb60806a25558e61f826749cd56bb28c5f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQY3UY2R%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCXnV9YBk40g2NUNzTbQNmjhV0BFXf%2FSJ9v%2F6zCl64HJgIgEx0f0RCBVl97CvI7UkE36b760ZA%2BcO48hYNTZ9DwW4cq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIxCpqkQMP3GusLKeyrcA%2BAX5aNgXrnIMX3S3B9idE6c3gB%2Fttb4yz9wiF0kfvY4rQTx8%2BIPgzPA8JCz7oYOf2itAF%2FHBO20hIIUVQ%2BKNve5Dx2ymjYv5mCicB3Cd6yUq8FIyPRExWEqXmvFZQ7MgfuUVb6EPmm17U%2FwU9OFZk9n%2FLfzdgp0Fp5KTdVWMha5e%2FgyeX1J4xq15tFrZWHXx%2FNAl%2FusI4S1w%2FwoOwth3DgFubumfOtOFyx3H8vzRdl%2FZOp9n%2FGbWC2M1qzTfbOjNUdxvmOLaxveDLfrPjA9wQElt6jsGqA58K45Y3m6Pd%2B99UIuFudn%2FKCc3TRBjU5oVhJVdLFkhdbI9Lwh8Gq4AHle%2FU%2FBqeEwCTU3P26gNj9W3m5CC14SgfqRJxJ5owAVO0mTBzThosYwvFf%2BlD%2BlvOTh90Tlo%2Fizo8lWN9%2FCKo0YCYvdEBJ65%2BSoBhKUxYSM%2FUQH14CFUhQZS3Nv3FW7DpgUsvQ%2B1hLQHJmQY3doGm4eQ40RZky7jn9ENIJlOMJgOjVmNuE0smNlT61yzS30ITrcJrmQXMw8taKFxiK%2B7iIxxEKmwR18qQsPEvvWBBhW2%2BWQWLR%2Fo7N0h%2B6GJOcEyVhB2PFcKIxF0vdltF7GWMikxggPTTgw0Unbv7pKMIXByL0GOqUBdPaAY%2FGpRG4gSMwu%2BrQhgnv%2Bla69HHithsPdQzc4mjKYhIEzu2EMMWJlRffSDmkuVFXuOSTRBZ%2Bo7qC5mEiE3C2Bp93YU%2F73LJ3pL9t38JgknmESkLnPbrYZQzk3AxcZVzxMufA9AtCqC9j%2FvhvHufSLstuSDsCrYtFxJzu%2B%2F0GPSW9PxEGyYYGEGPV1Ec8Lzx5n3qWsods4ntejxjNZog5cMorU&X-Amz-Signature=21c70c2c68620f52fc9bd74e20c8b01a3a3928c0e0b6204c8d93a9eb1e4ab0c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQY3UY2R%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCXnV9YBk40g2NUNzTbQNmjhV0BFXf%2FSJ9v%2F6zCl64HJgIgEx0f0RCBVl97CvI7UkE36b760ZA%2BcO48hYNTZ9DwW4cq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIxCpqkQMP3GusLKeyrcA%2BAX5aNgXrnIMX3S3B9idE6c3gB%2Fttb4yz9wiF0kfvY4rQTx8%2BIPgzPA8JCz7oYOf2itAF%2FHBO20hIIUVQ%2BKNve5Dx2ymjYv5mCicB3Cd6yUq8FIyPRExWEqXmvFZQ7MgfuUVb6EPmm17U%2FwU9OFZk9n%2FLfzdgp0Fp5KTdVWMha5e%2FgyeX1J4xq15tFrZWHXx%2FNAl%2FusI4S1w%2FwoOwth3DgFubumfOtOFyx3H8vzRdl%2FZOp9n%2FGbWC2M1qzTfbOjNUdxvmOLaxveDLfrPjA9wQElt6jsGqA58K45Y3m6Pd%2B99UIuFudn%2FKCc3TRBjU5oVhJVdLFkhdbI9Lwh8Gq4AHle%2FU%2FBqeEwCTU3P26gNj9W3m5CC14SgfqRJxJ5owAVO0mTBzThosYwvFf%2BlD%2BlvOTh90Tlo%2Fizo8lWN9%2FCKo0YCYvdEBJ65%2BSoBhKUxYSM%2FUQH14CFUhQZS3Nv3FW7DpgUsvQ%2B1hLQHJmQY3doGm4eQ40RZky7jn9ENIJlOMJgOjVmNuE0smNlT61yzS30ITrcJrmQXMw8taKFxiK%2B7iIxxEKmwR18qQsPEvvWBBhW2%2BWQWLR%2Fo7N0h%2B6GJOcEyVhB2PFcKIxF0vdltF7GWMikxggPTTgw0Unbv7pKMIXByL0GOqUBdPaAY%2FGpRG4gSMwu%2BrQhgnv%2Bla69HHithsPdQzc4mjKYhIEzu2EMMWJlRffSDmkuVFXuOSTRBZ%2Bo7qC5mEiE3C2Bp93YU%2F73LJ3pL9t38JgknmESkLnPbrYZQzk3AxcZVzxMufA9AtCqC9j%2FvhvHufSLstuSDsCrYtFxJzu%2B%2F0GPSW9PxEGyYYGEGPV1Ec8Lzx5n3qWsods4ntejxjNZog5cMorU&X-Amz-Signature=e9ebcc9fa7f640695c1063e6d5d6d0598e4548643ac427631893c6402a8bbebd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQY3UY2R%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCXnV9YBk40g2NUNzTbQNmjhV0BFXf%2FSJ9v%2F6zCl64HJgIgEx0f0RCBVl97CvI7UkE36b760ZA%2BcO48hYNTZ9DwW4cq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIxCpqkQMP3GusLKeyrcA%2BAX5aNgXrnIMX3S3B9idE6c3gB%2Fttb4yz9wiF0kfvY4rQTx8%2BIPgzPA8JCz7oYOf2itAF%2FHBO20hIIUVQ%2BKNve5Dx2ymjYv5mCicB3Cd6yUq8FIyPRExWEqXmvFZQ7MgfuUVb6EPmm17U%2FwU9OFZk9n%2FLfzdgp0Fp5KTdVWMha5e%2FgyeX1J4xq15tFrZWHXx%2FNAl%2FusI4S1w%2FwoOwth3DgFubumfOtOFyx3H8vzRdl%2FZOp9n%2FGbWC2M1qzTfbOjNUdxvmOLaxveDLfrPjA9wQElt6jsGqA58K45Y3m6Pd%2B99UIuFudn%2FKCc3TRBjU5oVhJVdLFkhdbI9Lwh8Gq4AHle%2FU%2FBqeEwCTU3P26gNj9W3m5CC14SgfqRJxJ5owAVO0mTBzThosYwvFf%2BlD%2BlvOTh90Tlo%2Fizo8lWN9%2FCKo0YCYvdEBJ65%2BSoBhKUxYSM%2FUQH14CFUhQZS3Nv3FW7DpgUsvQ%2B1hLQHJmQY3doGm4eQ40RZky7jn9ENIJlOMJgOjVmNuE0smNlT61yzS30ITrcJrmQXMw8taKFxiK%2B7iIxxEKmwR18qQsPEvvWBBhW2%2BWQWLR%2Fo7N0h%2B6GJOcEyVhB2PFcKIxF0vdltF7GWMikxggPTTgw0Unbv7pKMIXByL0GOqUBdPaAY%2FGpRG4gSMwu%2BrQhgnv%2Bla69HHithsPdQzc4mjKYhIEzu2EMMWJlRffSDmkuVFXuOSTRBZ%2Bo7qC5mEiE3C2Bp93YU%2F73LJ3pL9t38JgknmESkLnPbrYZQzk3AxcZVzxMufA9AtCqC9j%2FvhvHufSLstuSDsCrYtFxJzu%2B%2F0GPSW9PxEGyYYGEGPV1Ec8Lzx5n3qWsods4ntejxjNZog5cMorU&X-Amz-Signature=a3765374ba1ffdf15bff254b64eab6b6f8f08d712ee37cd73b7b00f862b49641&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
