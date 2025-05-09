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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQQ7BWU%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExYSyjBip97cb3gndmB%2B0m%2BJ1LprxC7Xn3NrtwDmoH0AiEAy%2BronZCnst95F2X74kRXwiJK8oXUr7zMkAqwu9F16tMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKj%2F8PEkySwV4K7jzSrcA6iLkDHdGR3USpFxelZAuX5EVmwSI5ZMfzY%2Bkg%2FWU1wEj0S7BOV4yRVzJaVF41QHiSGdKtutJO1jP8O6tPCyqfbmGmD4x3nyQmTz3Z2a38xyG0J7uFD5qnxNY0Z4wiWijnLVtZ1crsWgZcozqHgDAutySfG3jbJLpfEdf5bWyhuPqOskxvJpBLg8pjc%2ByjO4zZ%2BbHqXVK3FpWl8BnmyXcFhmEpo1sAPqXZMTTuMQav%2Fm9oiMvMI4dIuXTqYMllPugqvd5CgQ3hovhx7INVpFVLIiXmu7%2Bm97ZxDiGSTKciZ0MasUGHxc1Ur6FZMF8fuIESlNq9EZjvWhgHmu8JcMTCCABcepNBp7aYT3%2BP3sKnS%2BZjZ%2BnWyOBv1mJtyyaa9fnNpea5ILWcK9CuV0t7pMeEWtCo%2Bu68f0aVvqmXcjdmP9jBTY%2Bryd71fdQT0%2FLKEg4d0XJ88W54HjU3Pykc031VoQMyj%2BTpSyaMbFSB8O4SWpVqBg9fO3TSPIpSJhqjSknwJgC%2FfWASqY1JjgOVn%2FwRvj8%2BDHK2YST9IEY3bFmWF2VQ8rBhN6vZyoGPUjKzIiuY3bQhaiZzH6RbS4R33ifnEYPyr2ZgUn9fTuK7d%2BpQpzDOsiH78sYyKH4WS1MJzh9sAGOqUBGvWG45LYkjXk3FG%2FwXE97l6AL66Wa7mV9T5lElmL6V3IsE8hvj4Y2TTP%2BcEZSxEg18XOcu5EImk0ePgTPuPxk5aZD6VtTy75aCKIW%2BB8ega8NifkmdnN55jNwJIFhX7VB3cExgTDBP16K%2BRkrdBWgZb5QlmdOnz74sqlUYIOACrQYQcJbxq9w6yop%2B9rsqRj%2FR8DSaxAWDas4CoRdfNGlBFg7QQX&X-Amz-Signature=60c60918ddf719a3386f4c72f9dc5f42f73b37d8f8cb8d40b54434dc3f3fb9fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQQ7BWU%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExYSyjBip97cb3gndmB%2B0m%2BJ1LprxC7Xn3NrtwDmoH0AiEAy%2BronZCnst95F2X74kRXwiJK8oXUr7zMkAqwu9F16tMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKj%2F8PEkySwV4K7jzSrcA6iLkDHdGR3USpFxelZAuX5EVmwSI5ZMfzY%2Bkg%2FWU1wEj0S7BOV4yRVzJaVF41QHiSGdKtutJO1jP8O6tPCyqfbmGmD4x3nyQmTz3Z2a38xyG0J7uFD5qnxNY0Z4wiWijnLVtZ1crsWgZcozqHgDAutySfG3jbJLpfEdf5bWyhuPqOskxvJpBLg8pjc%2ByjO4zZ%2BbHqXVK3FpWl8BnmyXcFhmEpo1sAPqXZMTTuMQav%2Fm9oiMvMI4dIuXTqYMllPugqvd5CgQ3hovhx7INVpFVLIiXmu7%2Bm97ZxDiGSTKciZ0MasUGHxc1Ur6FZMF8fuIESlNq9EZjvWhgHmu8JcMTCCABcepNBp7aYT3%2BP3sKnS%2BZjZ%2BnWyOBv1mJtyyaa9fnNpea5ILWcK9CuV0t7pMeEWtCo%2Bu68f0aVvqmXcjdmP9jBTY%2Bryd71fdQT0%2FLKEg4d0XJ88W54HjU3Pykc031VoQMyj%2BTpSyaMbFSB8O4SWpVqBg9fO3TSPIpSJhqjSknwJgC%2FfWASqY1JjgOVn%2FwRvj8%2BDHK2YST9IEY3bFmWF2VQ8rBhN6vZyoGPUjKzIiuY3bQhaiZzH6RbS4R33ifnEYPyr2ZgUn9fTuK7d%2BpQpzDOsiH78sYyKH4WS1MJzh9sAGOqUBGvWG45LYkjXk3FG%2FwXE97l6AL66Wa7mV9T5lElmL6V3IsE8hvj4Y2TTP%2BcEZSxEg18XOcu5EImk0ePgTPuPxk5aZD6VtTy75aCKIW%2BB8ega8NifkmdnN55jNwJIFhX7VB3cExgTDBP16K%2BRkrdBWgZb5QlmdOnz74sqlUYIOACrQYQcJbxq9w6yop%2B9rsqRj%2FR8DSaxAWDas4CoRdfNGlBFg7QQX&X-Amz-Signature=72ba1e9291aad4eb089cfceec5d575af98e6942639bf55225800558e956e5d40&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQQ7BWU%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExYSyjBip97cb3gndmB%2B0m%2BJ1LprxC7Xn3NrtwDmoH0AiEAy%2BronZCnst95F2X74kRXwiJK8oXUr7zMkAqwu9F16tMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKj%2F8PEkySwV4K7jzSrcA6iLkDHdGR3USpFxelZAuX5EVmwSI5ZMfzY%2Bkg%2FWU1wEj0S7BOV4yRVzJaVF41QHiSGdKtutJO1jP8O6tPCyqfbmGmD4x3nyQmTz3Z2a38xyG0J7uFD5qnxNY0Z4wiWijnLVtZ1crsWgZcozqHgDAutySfG3jbJLpfEdf5bWyhuPqOskxvJpBLg8pjc%2ByjO4zZ%2BbHqXVK3FpWl8BnmyXcFhmEpo1sAPqXZMTTuMQav%2Fm9oiMvMI4dIuXTqYMllPugqvd5CgQ3hovhx7INVpFVLIiXmu7%2Bm97ZxDiGSTKciZ0MasUGHxc1Ur6FZMF8fuIESlNq9EZjvWhgHmu8JcMTCCABcepNBp7aYT3%2BP3sKnS%2BZjZ%2BnWyOBv1mJtyyaa9fnNpea5ILWcK9CuV0t7pMeEWtCo%2Bu68f0aVvqmXcjdmP9jBTY%2Bryd71fdQT0%2FLKEg4d0XJ88W54HjU3Pykc031VoQMyj%2BTpSyaMbFSB8O4SWpVqBg9fO3TSPIpSJhqjSknwJgC%2FfWASqY1JjgOVn%2FwRvj8%2BDHK2YST9IEY3bFmWF2VQ8rBhN6vZyoGPUjKzIiuY3bQhaiZzH6RbS4R33ifnEYPyr2ZgUn9fTuK7d%2BpQpzDOsiH78sYyKH4WS1MJzh9sAGOqUBGvWG45LYkjXk3FG%2FwXE97l6AL66Wa7mV9T5lElmL6V3IsE8hvj4Y2TTP%2BcEZSxEg18XOcu5EImk0ePgTPuPxk5aZD6VtTy75aCKIW%2BB8ega8NifkmdnN55jNwJIFhX7VB3cExgTDBP16K%2BRkrdBWgZb5QlmdOnz74sqlUYIOACrQYQcJbxq9w6yop%2B9rsqRj%2FR8DSaxAWDas4CoRdfNGlBFg7QQX&X-Amz-Signature=dcb35091594e6d558461964a0b91cf6107aacc891049fd2794e53c1cf41b391d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQQ7BWU%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExYSyjBip97cb3gndmB%2B0m%2BJ1LprxC7Xn3NrtwDmoH0AiEAy%2BronZCnst95F2X74kRXwiJK8oXUr7zMkAqwu9F16tMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKj%2F8PEkySwV4K7jzSrcA6iLkDHdGR3USpFxelZAuX5EVmwSI5ZMfzY%2Bkg%2FWU1wEj0S7BOV4yRVzJaVF41QHiSGdKtutJO1jP8O6tPCyqfbmGmD4x3nyQmTz3Z2a38xyG0J7uFD5qnxNY0Z4wiWijnLVtZ1crsWgZcozqHgDAutySfG3jbJLpfEdf5bWyhuPqOskxvJpBLg8pjc%2ByjO4zZ%2BbHqXVK3FpWl8BnmyXcFhmEpo1sAPqXZMTTuMQav%2Fm9oiMvMI4dIuXTqYMllPugqvd5CgQ3hovhx7INVpFVLIiXmu7%2Bm97ZxDiGSTKciZ0MasUGHxc1Ur6FZMF8fuIESlNq9EZjvWhgHmu8JcMTCCABcepNBp7aYT3%2BP3sKnS%2BZjZ%2BnWyOBv1mJtyyaa9fnNpea5ILWcK9CuV0t7pMeEWtCo%2Bu68f0aVvqmXcjdmP9jBTY%2Bryd71fdQT0%2FLKEg4d0XJ88W54HjU3Pykc031VoQMyj%2BTpSyaMbFSB8O4SWpVqBg9fO3TSPIpSJhqjSknwJgC%2FfWASqY1JjgOVn%2FwRvj8%2BDHK2YST9IEY3bFmWF2VQ8rBhN6vZyoGPUjKzIiuY3bQhaiZzH6RbS4R33ifnEYPyr2ZgUn9fTuK7d%2BpQpzDOsiH78sYyKH4WS1MJzh9sAGOqUBGvWG45LYkjXk3FG%2FwXE97l6AL66Wa7mV9T5lElmL6V3IsE8hvj4Y2TTP%2BcEZSxEg18XOcu5EImk0ePgTPuPxk5aZD6VtTy75aCKIW%2BB8ega8NifkmdnN55jNwJIFhX7VB3cExgTDBP16K%2BRkrdBWgZb5QlmdOnz74sqlUYIOACrQYQcJbxq9w6yop%2B9rsqRj%2FR8DSaxAWDas4CoRdfNGlBFg7QQX&X-Amz-Signature=a72fcb427cfd82d882bd4a16069eeee23304b43c1e585f2f741daea350b7abb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQQ7BWU%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExYSyjBip97cb3gndmB%2B0m%2BJ1LprxC7Xn3NrtwDmoH0AiEAy%2BronZCnst95F2X74kRXwiJK8oXUr7zMkAqwu9F16tMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKj%2F8PEkySwV4K7jzSrcA6iLkDHdGR3USpFxelZAuX5EVmwSI5ZMfzY%2Bkg%2FWU1wEj0S7BOV4yRVzJaVF41QHiSGdKtutJO1jP8O6tPCyqfbmGmD4x3nyQmTz3Z2a38xyG0J7uFD5qnxNY0Z4wiWijnLVtZ1crsWgZcozqHgDAutySfG3jbJLpfEdf5bWyhuPqOskxvJpBLg8pjc%2ByjO4zZ%2BbHqXVK3FpWl8BnmyXcFhmEpo1sAPqXZMTTuMQav%2Fm9oiMvMI4dIuXTqYMllPugqvd5CgQ3hovhx7INVpFVLIiXmu7%2Bm97ZxDiGSTKciZ0MasUGHxc1Ur6FZMF8fuIESlNq9EZjvWhgHmu8JcMTCCABcepNBp7aYT3%2BP3sKnS%2BZjZ%2BnWyOBv1mJtyyaa9fnNpea5ILWcK9CuV0t7pMeEWtCo%2Bu68f0aVvqmXcjdmP9jBTY%2Bryd71fdQT0%2FLKEg4d0XJ88W54HjU3Pykc031VoQMyj%2BTpSyaMbFSB8O4SWpVqBg9fO3TSPIpSJhqjSknwJgC%2FfWASqY1JjgOVn%2FwRvj8%2BDHK2YST9IEY3bFmWF2VQ8rBhN6vZyoGPUjKzIiuY3bQhaiZzH6RbS4R33ifnEYPyr2ZgUn9fTuK7d%2BpQpzDOsiH78sYyKH4WS1MJzh9sAGOqUBGvWG45LYkjXk3FG%2FwXE97l6AL66Wa7mV9T5lElmL6V3IsE8hvj4Y2TTP%2BcEZSxEg18XOcu5EImk0ePgTPuPxk5aZD6VtTy75aCKIW%2BB8ega8NifkmdnN55jNwJIFhX7VB3cExgTDBP16K%2BRkrdBWgZb5QlmdOnz74sqlUYIOACrQYQcJbxq9w6yop%2B9rsqRj%2FR8DSaxAWDas4CoRdfNGlBFg7QQX&X-Amz-Signature=a818f2d8576011263223291a433539ef6a98090cf16a81fc3d22baf4ca705f74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQQ7BWU%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExYSyjBip97cb3gndmB%2B0m%2BJ1LprxC7Xn3NrtwDmoH0AiEAy%2BronZCnst95F2X74kRXwiJK8oXUr7zMkAqwu9F16tMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKj%2F8PEkySwV4K7jzSrcA6iLkDHdGR3USpFxelZAuX5EVmwSI5ZMfzY%2Bkg%2FWU1wEj0S7BOV4yRVzJaVF41QHiSGdKtutJO1jP8O6tPCyqfbmGmD4x3nyQmTz3Z2a38xyG0J7uFD5qnxNY0Z4wiWijnLVtZ1crsWgZcozqHgDAutySfG3jbJLpfEdf5bWyhuPqOskxvJpBLg8pjc%2ByjO4zZ%2BbHqXVK3FpWl8BnmyXcFhmEpo1sAPqXZMTTuMQav%2Fm9oiMvMI4dIuXTqYMllPugqvd5CgQ3hovhx7INVpFVLIiXmu7%2Bm97ZxDiGSTKciZ0MasUGHxc1Ur6FZMF8fuIESlNq9EZjvWhgHmu8JcMTCCABcepNBp7aYT3%2BP3sKnS%2BZjZ%2BnWyOBv1mJtyyaa9fnNpea5ILWcK9CuV0t7pMeEWtCo%2Bu68f0aVvqmXcjdmP9jBTY%2Bryd71fdQT0%2FLKEg4d0XJ88W54HjU3Pykc031VoQMyj%2BTpSyaMbFSB8O4SWpVqBg9fO3TSPIpSJhqjSknwJgC%2FfWASqY1JjgOVn%2FwRvj8%2BDHK2YST9IEY3bFmWF2VQ8rBhN6vZyoGPUjKzIiuY3bQhaiZzH6RbS4R33ifnEYPyr2ZgUn9fTuK7d%2BpQpzDOsiH78sYyKH4WS1MJzh9sAGOqUBGvWG45LYkjXk3FG%2FwXE97l6AL66Wa7mV9T5lElmL6V3IsE8hvj4Y2TTP%2BcEZSxEg18XOcu5EImk0ePgTPuPxk5aZD6VtTy75aCKIW%2BB8ega8NifkmdnN55jNwJIFhX7VB3cExgTDBP16K%2BRkrdBWgZb5QlmdOnz74sqlUYIOACrQYQcJbxq9w6yop%2B9rsqRj%2FR8DSaxAWDas4CoRdfNGlBFg7QQX&X-Amz-Signature=558655ccaf05fccd747324fe461b5ffd333faaf9ed4e963ead5c184f1dc688d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQQ7BWU%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExYSyjBip97cb3gndmB%2B0m%2BJ1LprxC7Xn3NrtwDmoH0AiEAy%2BronZCnst95F2X74kRXwiJK8oXUr7zMkAqwu9F16tMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKj%2F8PEkySwV4K7jzSrcA6iLkDHdGR3USpFxelZAuX5EVmwSI5ZMfzY%2Bkg%2FWU1wEj0S7BOV4yRVzJaVF41QHiSGdKtutJO1jP8O6tPCyqfbmGmD4x3nyQmTz3Z2a38xyG0J7uFD5qnxNY0Z4wiWijnLVtZ1crsWgZcozqHgDAutySfG3jbJLpfEdf5bWyhuPqOskxvJpBLg8pjc%2ByjO4zZ%2BbHqXVK3FpWl8BnmyXcFhmEpo1sAPqXZMTTuMQav%2Fm9oiMvMI4dIuXTqYMllPugqvd5CgQ3hovhx7INVpFVLIiXmu7%2Bm97ZxDiGSTKciZ0MasUGHxc1Ur6FZMF8fuIESlNq9EZjvWhgHmu8JcMTCCABcepNBp7aYT3%2BP3sKnS%2BZjZ%2BnWyOBv1mJtyyaa9fnNpea5ILWcK9CuV0t7pMeEWtCo%2Bu68f0aVvqmXcjdmP9jBTY%2Bryd71fdQT0%2FLKEg4d0XJ88W54HjU3Pykc031VoQMyj%2BTpSyaMbFSB8O4SWpVqBg9fO3TSPIpSJhqjSknwJgC%2FfWASqY1JjgOVn%2FwRvj8%2BDHK2YST9IEY3bFmWF2VQ8rBhN6vZyoGPUjKzIiuY3bQhaiZzH6RbS4R33ifnEYPyr2ZgUn9fTuK7d%2BpQpzDOsiH78sYyKH4WS1MJzh9sAGOqUBGvWG45LYkjXk3FG%2FwXE97l6AL66Wa7mV9T5lElmL6V3IsE8hvj4Y2TTP%2BcEZSxEg18XOcu5EImk0ePgTPuPxk5aZD6VtTy75aCKIW%2BB8ega8NifkmdnN55jNwJIFhX7VB3cExgTDBP16K%2BRkrdBWgZb5QlmdOnz74sqlUYIOACrQYQcJbxq9w6yop%2B9rsqRj%2FR8DSaxAWDas4CoRdfNGlBFg7QQX&X-Amz-Signature=fc5d0305869ddda7ca89c9699d99c288a2b6eac883fe7003a334f0e26498bc8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQQ7BWU%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExYSyjBip97cb3gndmB%2B0m%2BJ1LprxC7Xn3NrtwDmoH0AiEAy%2BronZCnst95F2X74kRXwiJK8oXUr7zMkAqwu9F16tMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKj%2F8PEkySwV4K7jzSrcA6iLkDHdGR3USpFxelZAuX5EVmwSI5ZMfzY%2Bkg%2FWU1wEj0S7BOV4yRVzJaVF41QHiSGdKtutJO1jP8O6tPCyqfbmGmD4x3nyQmTz3Z2a38xyG0J7uFD5qnxNY0Z4wiWijnLVtZ1crsWgZcozqHgDAutySfG3jbJLpfEdf5bWyhuPqOskxvJpBLg8pjc%2ByjO4zZ%2BbHqXVK3FpWl8BnmyXcFhmEpo1sAPqXZMTTuMQav%2Fm9oiMvMI4dIuXTqYMllPugqvd5CgQ3hovhx7INVpFVLIiXmu7%2Bm97ZxDiGSTKciZ0MasUGHxc1Ur6FZMF8fuIESlNq9EZjvWhgHmu8JcMTCCABcepNBp7aYT3%2BP3sKnS%2BZjZ%2BnWyOBv1mJtyyaa9fnNpea5ILWcK9CuV0t7pMeEWtCo%2Bu68f0aVvqmXcjdmP9jBTY%2Bryd71fdQT0%2FLKEg4d0XJ88W54HjU3Pykc031VoQMyj%2BTpSyaMbFSB8O4SWpVqBg9fO3TSPIpSJhqjSknwJgC%2FfWASqY1JjgOVn%2FwRvj8%2BDHK2YST9IEY3bFmWF2VQ8rBhN6vZyoGPUjKzIiuY3bQhaiZzH6RbS4R33ifnEYPyr2ZgUn9fTuK7d%2BpQpzDOsiH78sYyKH4WS1MJzh9sAGOqUBGvWG45LYkjXk3FG%2FwXE97l6AL66Wa7mV9T5lElmL6V3IsE8hvj4Y2TTP%2BcEZSxEg18XOcu5EImk0ePgTPuPxk5aZD6VtTy75aCKIW%2BB8ega8NifkmdnN55jNwJIFhX7VB3cExgTDBP16K%2BRkrdBWgZb5QlmdOnz74sqlUYIOACrQYQcJbxq9w6yop%2B9rsqRj%2FR8DSaxAWDas4CoRdfNGlBFg7QQX&X-Amz-Signature=a8df26dada1247673bfadb73fc202dce2d2ca920e9828ca4395728f73f79cab6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
