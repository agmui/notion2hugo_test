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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDN6ABT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMnAGWBzEy2560JUTA8%2BG8w3D4zPj52IHOpwrAcRWtZAIhAOEBv7dIsXR0ebS%2BLicLJTlkXeiPWpYNs8azfUEJAcsOKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiFDFdK9zCV3bLSQsq3AP38DRPGH3TTBmkWEA28S83MzCXpUK8FL2ajhWzhJXw7l8HtXKiw%2FmqLASOERjBL5LJV%2F8mkpYUnk7oW1lkjA5NKSL30UAD2g6icyuTrbsE4tnT1YXHJLtWtBluwOxxqQV4Q4krRjA3xFG2XNh2x4j3PYxzgpcSz6Kg4%2BKzHakzBk4EaZCednx6r3j2fvfW3xZEXLhDma10eAf8QXnBE1SVXdjkEc3fhKzWqcilhNu32SXu6BPeoGWtdEqhonn6E7T%2BEI%2Bp5FOpatB7ONVg5KfOQwwA34HgYM8IehVbBeWPywFP6zx3mxa4MS1ipPm6HcdSNHrjzhMK3EIvwVAhHi0SClSqAOG682P2fHmJmJOJ1GvU52%2FnMqBPq%2B4vPj7V2Jw%2FoUGxHaw8nD5CtfytZZUHTnYgsIUF2PL2A68SmbOoIUJq2dGfRUVHFQ6lo2fnQBfK%2BmdexVEmezVphM0jl8RrbNq2DcrAa%2BDZBsFypM0iqJUJbcr1vLUVFS4%2BgCEbRq5CfpbI8Kr%2BRToLf40VTwr5Xj55W3EwRwKSmaUC4OYbp7G3DWcPYAyDhdLSUjU2gjCdz%2FFgAt4kb%2F7AzxWftORWZZMg8sa2vc9C0Mh5OANrRtxvHGMwj82PFXDZzzDCrLDBBjqkAd7I%2Fw%2FzLKGNMkNMtncnVDiystRsUWVcaWrljOZQwAY%2Bu3PGaD2zT3yzX%2B0zdcGirI7AK9M46TR6h0XNNmR%2BgxCnwkND7qArQ51Vt2cH0boKcU6z4VlOjZYJ8ezq3e1vYDfgqzlgQ93tvWWVOhDktlsGCfc9llKzSsSYaDwCi9zcbHHt72oW%2FU2mxbA1lpVzZQKoO5%2B5kI00M7Mkv1VRQFaQTkFm&X-Amz-Signature=1c34687a9ad3732c42d029f4e86d50cfeb5920da4d53ee9a385df143e1ad680c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDN6ABT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMnAGWBzEy2560JUTA8%2BG8w3D4zPj52IHOpwrAcRWtZAIhAOEBv7dIsXR0ebS%2BLicLJTlkXeiPWpYNs8azfUEJAcsOKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiFDFdK9zCV3bLSQsq3AP38DRPGH3TTBmkWEA28S83MzCXpUK8FL2ajhWzhJXw7l8HtXKiw%2FmqLASOERjBL5LJV%2F8mkpYUnk7oW1lkjA5NKSL30UAD2g6icyuTrbsE4tnT1YXHJLtWtBluwOxxqQV4Q4krRjA3xFG2XNh2x4j3PYxzgpcSz6Kg4%2BKzHakzBk4EaZCednx6r3j2fvfW3xZEXLhDma10eAf8QXnBE1SVXdjkEc3fhKzWqcilhNu32SXu6BPeoGWtdEqhonn6E7T%2BEI%2Bp5FOpatB7ONVg5KfOQwwA34HgYM8IehVbBeWPywFP6zx3mxa4MS1ipPm6HcdSNHrjzhMK3EIvwVAhHi0SClSqAOG682P2fHmJmJOJ1GvU52%2FnMqBPq%2B4vPj7V2Jw%2FoUGxHaw8nD5CtfytZZUHTnYgsIUF2PL2A68SmbOoIUJq2dGfRUVHFQ6lo2fnQBfK%2BmdexVEmezVphM0jl8RrbNq2DcrAa%2BDZBsFypM0iqJUJbcr1vLUVFS4%2BgCEbRq5CfpbI8Kr%2BRToLf40VTwr5Xj55W3EwRwKSmaUC4OYbp7G3DWcPYAyDhdLSUjU2gjCdz%2FFgAt4kb%2F7AzxWftORWZZMg8sa2vc9C0Mh5OANrRtxvHGMwj82PFXDZzzDCrLDBBjqkAd7I%2Fw%2FzLKGNMkNMtncnVDiystRsUWVcaWrljOZQwAY%2Bu3PGaD2zT3yzX%2B0zdcGirI7AK9M46TR6h0XNNmR%2BgxCnwkND7qArQ51Vt2cH0boKcU6z4VlOjZYJ8ezq3e1vYDfgqzlgQ93tvWWVOhDktlsGCfc9llKzSsSYaDwCi9zcbHHt72oW%2FU2mxbA1lpVzZQKoO5%2B5kI00M7Mkv1VRQFaQTkFm&X-Amz-Signature=193e1dbeef7386007f2f1f13ca1e832288bd8bd3219db760622f4ba4573e5ac8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDN6ABT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMnAGWBzEy2560JUTA8%2BG8w3D4zPj52IHOpwrAcRWtZAIhAOEBv7dIsXR0ebS%2BLicLJTlkXeiPWpYNs8azfUEJAcsOKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiFDFdK9zCV3bLSQsq3AP38DRPGH3TTBmkWEA28S83MzCXpUK8FL2ajhWzhJXw7l8HtXKiw%2FmqLASOERjBL5LJV%2F8mkpYUnk7oW1lkjA5NKSL30UAD2g6icyuTrbsE4tnT1YXHJLtWtBluwOxxqQV4Q4krRjA3xFG2XNh2x4j3PYxzgpcSz6Kg4%2BKzHakzBk4EaZCednx6r3j2fvfW3xZEXLhDma10eAf8QXnBE1SVXdjkEc3fhKzWqcilhNu32SXu6BPeoGWtdEqhonn6E7T%2BEI%2Bp5FOpatB7ONVg5KfOQwwA34HgYM8IehVbBeWPywFP6zx3mxa4MS1ipPm6HcdSNHrjzhMK3EIvwVAhHi0SClSqAOG682P2fHmJmJOJ1GvU52%2FnMqBPq%2B4vPj7V2Jw%2FoUGxHaw8nD5CtfytZZUHTnYgsIUF2PL2A68SmbOoIUJq2dGfRUVHFQ6lo2fnQBfK%2BmdexVEmezVphM0jl8RrbNq2DcrAa%2BDZBsFypM0iqJUJbcr1vLUVFS4%2BgCEbRq5CfpbI8Kr%2BRToLf40VTwr5Xj55W3EwRwKSmaUC4OYbp7G3DWcPYAyDhdLSUjU2gjCdz%2FFgAt4kb%2F7AzxWftORWZZMg8sa2vc9C0Mh5OANrRtxvHGMwj82PFXDZzzDCrLDBBjqkAd7I%2Fw%2FzLKGNMkNMtncnVDiystRsUWVcaWrljOZQwAY%2Bu3PGaD2zT3yzX%2B0zdcGirI7AK9M46TR6h0XNNmR%2BgxCnwkND7qArQ51Vt2cH0boKcU6z4VlOjZYJ8ezq3e1vYDfgqzlgQ93tvWWVOhDktlsGCfc9llKzSsSYaDwCi9zcbHHt72oW%2FU2mxbA1lpVzZQKoO5%2B5kI00M7Mkv1VRQFaQTkFm&X-Amz-Signature=17d752f8ad60cfe4a3ac75940d7b2d25895c8c77394f6eb78759235700f08577&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDN6ABT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMnAGWBzEy2560JUTA8%2BG8w3D4zPj52IHOpwrAcRWtZAIhAOEBv7dIsXR0ebS%2BLicLJTlkXeiPWpYNs8azfUEJAcsOKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiFDFdK9zCV3bLSQsq3AP38DRPGH3TTBmkWEA28S83MzCXpUK8FL2ajhWzhJXw7l8HtXKiw%2FmqLASOERjBL5LJV%2F8mkpYUnk7oW1lkjA5NKSL30UAD2g6icyuTrbsE4tnT1YXHJLtWtBluwOxxqQV4Q4krRjA3xFG2XNh2x4j3PYxzgpcSz6Kg4%2BKzHakzBk4EaZCednx6r3j2fvfW3xZEXLhDma10eAf8QXnBE1SVXdjkEc3fhKzWqcilhNu32SXu6BPeoGWtdEqhonn6E7T%2BEI%2Bp5FOpatB7ONVg5KfOQwwA34HgYM8IehVbBeWPywFP6zx3mxa4MS1ipPm6HcdSNHrjzhMK3EIvwVAhHi0SClSqAOG682P2fHmJmJOJ1GvU52%2FnMqBPq%2B4vPj7V2Jw%2FoUGxHaw8nD5CtfytZZUHTnYgsIUF2PL2A68SmbOoIUJq2dGfRUVHFQ6lo2fnQBfK%2BmdexVEmezVphM0jl8RrbNq2DcrAa%2BDZBsFypM0iqJUJbcr1vLUVFS4%2BgCEbRq5CfpbI8Kr%2BRToLf40VTwr5Xj55W3EwRwKSmaUC4OYbp7G3DWcPYAyDhdLSUjU2gjCdz%2FFgAt4kb%2F7AzxWftORWZZMg8sa2vc9C0Mh5OANrRtxvHGMwj82PFXDZzzDCrLDBBjqkAd7I%2Fw%2FzLKGNMkNMtncnVDiystRsUWVcaWrljOZQwAY%2Bu3PGaD2zT3yzX%2B0zdcGirI7AK9M46TR6h0XNNmR%2BgxCnwkND7qArQ51Vt2cH0boKcU6z4VlOjZYJ8ezq3e1vYDfgqzlgQ93tvWWVOhDktlsGCfc9llKzSsSYaDwCi9zcbHHt72oW%2FU2mxbA1lpVzZQKoO5%2B5kI00M7Mkv1VRQFaQTkFm&X-Amz-Signature=7dd7a8beea36ce9c38bf9ab9067d72bbe1144662f6af363ef14c73ebf65ddeb1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDN6ABT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMnAGWBzEy2560JUTA8%2BG8w3D4zPj52IHOpwrAcRWtZAIhAOEBv7dIsXR0ebS%2BLicLJTlkXeiPWpYNs8azfUEJAcsOKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiFDFdK9zCV3bLSQsq3AP38DRPGH3TTBmkWEA28S83MzCXpUK8FL2ajhWzhJXw7l8HtXKiw%2FmqLASOERjBL5LJV%2F8mkpYUnk7oW1lkjA5NKSL30UAD2g6icyuTrbsE4tnT1YXHJLtWtBluwOxxqQV4Q4krRjA3xFG2XNh2x4j3PYxzgpcSz6Kg4%2BKzHakzBk4EaZCednx6r3j2fvfW3xZEXLhDma10eAf8QXnBE1SVXdjkEc3fhKzWqcilhNu32SXu6BPeoGWtdEqhonn6E7T%2BEI%2Bp5FOpatB7ONVg5KfOQwwA34HgYM8IehVbBeWPywFP6zx3mxa4MS1ipPm6HcdSNHrjzhMK3EIvwVAhHi0SClSqAOG682P2fHmJmJOJ1GvU52%2FnMqBPq%2B4vPj7V2Jw%2FoUGxHaw8nD5CtfytZZUHTnYgsIUF2PL2A68SmbOoIUJq2dGfRUVHFQ6lo2fnQBfK%2BmdexVEmezVphM0jl8RrbNq2DcrAa%2BDZBsFypM0iqJUJbcr1vLUVFS4%2BgCEbRq5CfpbI8Kr%2BRToLf40VTwr5Xj55W3EwRwKSmaUC4OYbp7G3DWcPYAyDhdLSUjU2gjCdz%2FFgAt4kb%2F7AzxWftORWZZMg8sa2vc9C0Mh5OANrRtxvHGMwj82PFXDZzzDCrLDBBjqkAd7I%2Fw%2FzLKGNMkNMtncnVDiystRsUWVcaWrljOZQwAY%2Bu3PGaD2zT3yzX%2B0zdcGirI7AK9M46TR6h0XNNmR%2BgxCnwkND7qArQ51Vt2cH0boKcU6z4VlOjZYJ8ezq3e1vYDfgqzlgQ93tvWWVOhDktlsGCfc9llKzSsSYaDwCi9zcbHHt72oW%2FU2mxbA1lpVzZQKoO5%2B5kI00M7Mkv1VRQFaQTkFm&X-Amz-Signature=58c6e95a40e2978e68d78b1024bbda5a37d0cf79aa5f3d4e0de7eecfa52a335a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDN6ABT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMnAGWBzEy2560JUTA8%2BG8w3D4zPj52IHOpwrAcRWtZAIhAOEBv7dIsXR0ebS%2BLicLJTlkXeiPWpYNs8azfUEJAcsOKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiFDFdK9zCV3bLSQsq3AP38DRPGH3TTBmkWEA28S83MzCXpUK8FL2ajhWzhJXw7l8HtXKiw%2FmqLASOERjBL5LJV%2F8mkpYUnk7oW1lkjA5NKSL30UAD2g6icyuTrbsE4tnT1YXHJLtWtBluwOxxqQV4Q4krRjA3xFG2XNh2x4j3PYxzgpcSz6Kg4%2BKzHakzBk4EaZCednx6r3j2fvfW3xZEXLhDma10eAf8QXnBE1SVXdjkEc3fhKzWqcilhNu32SXu6BPeoGWtdEqhonn6E7T%2BEI%2Bp5FOpatB7ONVg5KfOQwwA34HgYM8IehVbBeWPywFP6zx3mxa4MS1ipPm6HcdSNHrjzhMK3EIvwVAhHi0SClSqAOG682P2fHmJmJOJ1GvU52%2FnMqBPq%2B4vPj7V2Jw%2FoUGxHaw8nD5CtfytZZUHTnYgsIUF2PL2A68SmbOoIUJq2dGfRUVHFQ6lo2fnQBfK%2BmdexVEmezVphM0jl8RrbNq2DcrAa%2BDZBsFypM0iqJUJbcr1vLUVFS4%2BgCEbRq5CfpbI8Kr%2BRToLf40VTwr5Xj55W3EwRwKSmaUC4OYbp7G3DWcPYAyDhdLSUjU2gjCdz%2FFgAt4kb%2F7AzxWftORWZZMg8sa2vc9C0Mh5OANrRtxvHGMwj82PFXDZzzDCrLDBBjqkAd7I%2Fw%2FzLKGNMkNMtncnVDiystRsUWVcaWrljOZQwAY%2Bu3PGaD2zT3yzX%2B0zdcGirI7AK9M46TR6h0XNNmR%2BgxCnwkND7qArQ51Vt2cH0boKcU6z4VlOjZYJ8ezq3e1vYDfgqzlgQ93tvWWVOhDktlsGCfc9llKzSsSYaDwCi9zcbHHt72oW%2FU2mxbA1lpVzZQKoO5%2B5kI00M7Mkv1VRQFaQTkFm&X-Amz-Signature=0026c17b101353a666381a24bfaf4552fe461980004f26e0371608055adaaf97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDN6ABT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMnAGWBzEy2560JUTA8%2BG8w3D4zPj52IHOpwrAcRWtZAIhAOEBv7dIsXR0ebS%2BLicLJTlkXeiPWpYNs8azfUEJAcsOKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiFDFdK9zCV3bLSQsq3AP38DRPGH3TTBmkWEA28S83MzCXpUK8FL2ajhWzhJXw7l8HtXKiw%2FmqLASOERjBL5LJV%2F8mkpYUnk7oW1lkjA5NKSL30UAD2g6icyuTrbsE4tnT1YXHJLtWtBluwOxxqQV4Q4krRjA3xFG2XNh2x4j3PYxzgpcSz6Kg4%2BKzHakzBk4EaZCednx6r3j2fvfW3xZEXLhDma10eAf8QXnBE1SVXdjkEc3fhKzWqcilhNu32SXu6BPeoGWtdEqhonn6E7T%2BEI%2Bp5FOpatB7ONVg5KfOQwwA34HgYM8IehVbBeWPywFP6zx3mxa4MS1ipPm6HcdSNHrjzhMK3EIvwVAhHi0SClSqAOG682P2fHmJmJOJ1GvU52%2FnMqBPq%2B4vPj7V2Jw%2FoUGxHaw8nD5CtfytZZUHTnYgsIUF2PL2A68SmbOoIUJq2dGfRUVHFQ6lo2fnQBfK%2BmdexVEmezVphM0jl8RrbNq2DcrAa%2BDZBsFypM0iqJUJbcr1vLUVFS4%2BgCEbRq5CfpbI8Kr%2BRToLf40VTwr5Xj55W3EwRwKSmaUC4OYbp7G3DWcPYAyDhdLSUjU2gjCdz%2FFgAt4kb%2F7AzxWftORWZZMg8sa2vc9C0Mh5OANrRtxvHGMwj82PFXDZzzDCrLDBBjqkAd7I%2Fw%2FzLKGNMkNMtncnVDiystRsUWVcaWrljOZQwAY%2Bu3PGaD2zT3yzX%2B0zdcGirI7AK9M46TR6h0XNNmR%2BgxCnwkND7qArQ51Vt2cH0boKcU6z4VlOjZYJ8ezq3e1vYDfgqzlgQ93tvWWVOhDktlsGCfc9llKzSsSYaDwCi9zcbHHt72oW%2FU2mxbA1lpVzZQKoO5%2B5kI00M7Mkv1VRQFaQTkFm&X-Amz-Signature=943c5ba91dc19ed2af1b92ef365924609ff6f03d3095e3b57f2d1d10a4d9b08e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDN6ABT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMnAGWBzEy2560JUTA8%2BG8w3D4zPj52IHOpwrAcRWtZAIhAOEBv7dIsXR0ebS%2BLicLJTlkXeiPWpYNs8azfUEJAcsOKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiFDFdK9zCV3bLSQsq3AP38DRPGH3TTBmkWEA28S83MzCXpUK8FL2ajhWzhJXw7l8HtXKiw%2FmqLASOERjBL5LJV%2F8mkpYUnk7oW1lkjA5NKSL30UAD2g6icyuTrbsE4tnT1YXHJLtWtBluwOxxqQV4Q4krRjA3xFG2XNh2x4j3PYxzgpcSz6Kg4%2BKzHakzBk4EaZCednx6r3j2fvfW3xZEXLhDma10eAf8QXnBE1SVXdjkEc3fhKzWqcilhNu32SXu6BPeoGWtdEqhonn6E7T%2BEI%2Bp5FOpatB7ONVg5KfOQwwA34HgYM8IehVbBeWPywFP6zx3mxa4MS1ipPm6HcdSNHrjzhMK3EIvwVAhHi0SClSqAOG682P2fHmJmJOJ1GvU52%2FnMqBPq%2B4vPj7V2Jw%2FoUGxHaw8nD5CtfytZZUHTnYgsIUF2PL2A68SmbOoIUJq2dGfRUVHFQ6lo2fnQBfK%2BmdexVEmezVphM0jl8RrbNq2DcrAa%2BDZBsFypM0iqJUJbcr1vLUVFS4%2BgCEbRq5CfpbI8Kr%2BRToLf40VTwr5Xj55W3EwRwKSmaUC4OYbp7G3DWcPYAyDhdLSUjU2gjCdz%2FFgAt4kb%2F7AzxWftORWZZMg8sa2vc9C0Mh5OANrRtxvHGMwj82PFXDZzzDCrLDBBjqkAd7I%2Fw%2FzLKGNMkNMtncnVDiystRsUWVcaWrljOZQwAY%2Bu3PGaD2zT3yzX%2B0zdcGirI7AK9M46TR6h0XNNmR%2BgxCnwkND7qArQ51Vt2cH0boKcU6z4VlOjZYJ8ezq3e1vYDfgqzlgQ93tvWWVOhDktlsGCfc9llKzSsSYaDwCi9zcbHHt72oW%2FU2mxbA1lpVzZQKoO5%2B5kI00M7Mkv1VRQFaQTkFm&X-Amz-Signature=3c1cc2035d0afe0747ed524140fe87848dd814cc9dee4a1a078ec291825ec10f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
