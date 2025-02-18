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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5W2QCM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC3g3Yt6QCW%2BDPwu3cEZk1CLa4pMQWZmdfRdRAOiu38dAIhAP4A%2BGNBV3c1Rg3lASAo9PGHjBsz8kUp%2BFGxF65WOUgRKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeNluq9pbm%2BWafWkgq3APAaJuAXcpiU8U5XsmmkII7fsJSQxki1MN9MKUxTez80Y%2BkhFATsoKGEcS4XPYQxDj3wjIfQcLHa5bXgjO6n4qpjtS23ZET%2FaP3ChocpGfOhvIqRBW1I%2BGowaaI88wRLiW0kQ21Qi6m4Cgw%2BEEwF5ETOguzR%2F9p9oKQVaQvCbtrv%2FBazx6d5yRJTMTfxJ%2FrdY3Yzfx8KWmH1E0SnEUnFr62tJmcCzIbngUz7PZTjocHizkPWfsqe9GvwMUn1v2iYv%2F7ayBwE%2BQNJ0S7e%2FRAp001Hg9jsgQGaEnpN8d4aDZy0%2FOyKZVcfxTzD21m2LdOuO0hHGLxEcghdKNFzLUyG4mzsf6u4%2B7mPW92sfiadCbs%2FNaV20jrRsdtkyz1BAMHchUPquUQRTGAcmgTiyaxWCE9UbB%2B9m%2FwONA%2BO3F1iqD63%2BLvhq95XGxBmRkvByRpqjAuTNW4A3PBIz0s1KWqiKxZP1fCxnDMlEcYu15u4ENbXLmD%2FuLlZSn7SQEqLW4h6ks%2Ft2NYsc1NapKE%2B8TY1fJvJuTdGUJ3NsjwRa4YedHSlN10h%2B4E6vLlYGWEZO9Am6xB%2FheZcicVxkJ5%2F4p4PWuiXu%2FY5Ygs9idp3iUrKi%2FDYdlXEGC7M2t6MBjIxjCp%2FtK9BjqkAcAChnhMTnBeJbTtjp5qdkvME%2FGw8dn8UlUeso3n4hVX7QGwMfuqQhHz6i9N%2BLZ0ogkwNmQpO3r2QmC7%2FnLA4gKnZ1A%2BNA8ojAkin1T%2BtrP71My%2BO8j3ULGdcAa02RGAZ8pnI3U0pbEqiAN%2BdcFmtkCLxi2ZtNBTS0rkhTlWdlvSwq1pXNswQ5iG4a2NadchaUjNDOzUfdsXX93QmQ7bZI21UGcr&X-Amz-Signature=9e9730ac541aaeef8ee3896242e6bd3918c6a2d7b3245e5777de9bbd997aafb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5W2QCM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC3g3Yt6QCW%2BDPwu3cEZk1CLa4pMQWZmdfRdRAOiu38dAIhAP4A%2BGNBV3c1Rg3lASAo9PGHjBsz8kUp%2BFGxF65WOUgRKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeNluq9pbm%2BWafWkgq3APAaJuAXcpiU8U5XsmmkII7fsJSQxki1MN9MKUxTez80Y%2BkhFATsoKGEcS4XPYQxDj3wjIfQcLHa5bXgjO6n4qpjtS23ZET%2FaP3ChocpGfOhvIqRBW1I%2BGowaaI88wRLiW0kQ21Qi6m4Cgw%2BEEwF5ETOguzR%2F9p9oKQVaQvCbtrv%2FBazx6d5yRJTMTfxJ%2FrdY3Yzfx8KWmH1E0SnEUnFr62tJmcCzIbngUz7PZTjocHizkPWfsqe9GvwMUn1v2iYv%2F7ayBwE%2BQNJ0S7e%2FRAp001Hg9jsgQGaEnpN8d4aDZy0%2FOyKZVcfxTzD21m2LdOuO0hHGLxEcghdKNFzLUyG4mzsf6u4%2B7mPW92sfiadCbs%2FNaV20jrRsdtkyz1BAMHchUPquUQRTGAcmgTiyaxWCE9UbB%2B9m%2FwONA%2BO3F1iqD63%2BLvhq95XGxBmRkvByRpqjAuTNW4A3PBIz0s1KWqiKxZP1fCxnDMlEcYu15u4ENbXLmD%2FuLlZSn7SQEqLW4h6ks%2Ft2NYsc1NapKE%2B8TY1fJvJuTdGUJ3NsjwRa4YedHSlN10h%2B4E6vLlYGWEZO9Am6xB%2FheZcicVxkJ5%2F4p4PWuiXu%2FY5Ygs9idp3iUrKi%2FDYdlXEGC7M2t6MBjIxjCp%2FtK9BjqkAcAChnhMTnBeJbTtjp5qdkvME%2FGw8dn8UlUeso3n4hVX7QGwMfuqQhHz6i9N%2BLZ0ogkwNmQpO3r2QmC7%2FnLA4gKnZ1A%2BNA8ojAkin1T%2BtrP71My%2BO8j3ULGdcAa02RGAZ8pnI3U0pbEqiAN%2BdcFmtkCLxi2ZtNBTS0rkhTlWdlvSwq1pXNswQ5iG4a2NadchaUjNDOzUfdsXX93QmQ7bZI21UGcr&X-Amz-Signature=d533847b3d04a888f02492f3718dcbd3051e2b0f433fc1f35813ef4b2364afea&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5W2QCM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC3g3Yt6QCW%2BDPwu3cEZk1CLa4pMQWZmdfRdRAOiu38dAIhAP4A%2BGNBV3c1Rg3lASAo9PGHjBsz8kUp%2BFGxF65WOUgRKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeNluq9pbm%2BWafWkgq3APAaJuAXcpiU8U5XsmmkII7fsJSQxki1MN9MKUxTez80Y%2BkhFATsoKGEcS4XPYQxDj3wjIfQcLHa5bXgjO6n4qpjtS23ZET%2FaP3ChocpGfOhvIqRBW1I%2BGowaaI88wRLiW0kQ21Qi6m4Cgw%2BEEwF5ETOguzR%2F9p9oKQVaQvCbtrv%2FBazx6d5yRJTMTfxJ%2FrdY3Yzfx8KWmH1E0SnEUnFr62tJmcCzIbngUz7PZTjocHizkPWfsqe9GvwMUn1v2iYv%2F7ayBwE%2BQNJ0S7e%2FRAp001Hg9jsgQGaEnpN8d4aDZy0%2FOyKZVcfxTzD21m2LdOuO0hHGLxEcghdKNFzLUyG4mzsf6u4%2B7mPW92sfiadCbs%2FNaV20jrRsdtkyz1BAMHchUPquUQRTGAcmgTiyaxWCE9UbB%2B9m%2FwONA%2BO3F1iqD63%2BLvhq95XGxBmRkvByRpqjAuTNW4A3PBIz0s1KWqiKxZP1fCxnDMlEcYu15u4ENbXLmD%2FuLlZSn7SQEqLW4h6ks%2Ft2NYsc1NapKE%2B8TY1fJvJuTdGUJ3NsjwRa4YedHSlN10h%2B4E6vLlYGWEZO9Am6xB%2FheZcicVxkJ5%2F4p4PWuiXu%2FY5Ygs9idp3iUrKi%2FDYdlXEGC7M2t6MBjIxjCp%2FtK9BjqkAcAChnhMTnBeJbTtjp5qdkvME%2FGw8dn8UlUeso3n4hVX7QGwMfuqQhHz6i9N%2BLZ0ogkwNmQpO3r2QmC7%2FnLA4gKnZ1A%2BNA8ojAkin1T%2BtrP71My%2BO8j3ULGdcAa02RGAZ8pnI3U0pbEqiAN%2BdcFmtkCLxi2ZtNBTS0rkhTlWdlvSwq1pXNswQ5iG4a2NadchaUjNDOzUfdsXX93QmQ7bZI21UGcr&X-Amz-Signature=293c45b25088924a3802c4d158db804cc2889d0928654b25c9d856ae4a01b891&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5W2QCM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC3g3Yt6QCW%2BDPwu3cEZk1CLa4pMQWZmdfRdRAOiu38dAIhAP4A%2BGNBV3c1Rg3lASAo9PGHjBsz8kUp%2BFGxF65WOUgRKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeNluq9pbm%2BWafWkgq3APAaJuAXcpiU8U5XsmmkII7fsJSQxki1MN9MKUxTez80Y%2BkhFATsoKGEcS4XPYQxDj3wjIfQcLHa5bXgjO6n4qpjtS23ZET%2FaP3ChocpGfOhvIqRBW1I%2BGowaaI88wRLiW0kQ21Qi6m4Cgw%2BEEwF5ETOguzR%2F9p9oKQVaQvCbtrv%2FBazx6d5yRJTMTfxJ%2FrdY3Yzfx8KWmH1E0SnEUnFr62tJmcCzIbngUz7PZTjocHizkPWfsqe9GvwMUn1v2iYv%2F7ayBwE%2BQNJ0S7e%2FRAp001Hg9jsgQGaEnpN8d4aDZy0%2FOyKZVcfxTzD21m2LdOuO0hHGLxEcghdKNFzLUyG4mzsf6u4%2B7mPW92sfiadCbs%2FNaV20jrRsdtkyz1BAMHchUPquUQRTGAcmgTiyaxWCE9UbB%2B9m%2FwONA%2BO3F1iqD63%2BLvhq95XGxBmRkvByRpqjAuTNW4A3PBIz0s1KWqiKxZP1fCxnDMlEcYu15u4ENbXLmD%2FuLlZSn7SQEqLW4h6ks%2Ft2NYsc1NapKE%2B8TY1fJvJuTdGUJ3NsjwRa4YedHSlN10h%2B4E6vLlYGWEZO9Am6xB%2FheZcicVxkJ5%2F4p4PWuiXu%2FY5Ygs9idp3iUrKi%2FDYdlXEGC7M2t6MBjIxjCp%2FtK9BjqkAcAChnhMTnBeJbTtjp5qdkvME%2FGw8dn8UlUeso3n4hVX7QGwMfuqQhHz6i9N%2BLZ0ogkwNmQpO3r2QmC7%2FnLA4gKnZ1A%2BNA8ojAkin1T%2BtrP71My%2BO8j3ULGdcAa02RGAZ8pnI3U0pbEqiAN%2BdcFmtkCLxi2ZtNBTS0rkhTlWdlvSwq1pXNswQ5iG4a2NadchaUjNDOzUfdsXX93QmQ7bZI21UGcr&X-Amz-Signature=ee7fe50dabc26d5ea2e0bc75b1cea8470a115e1ccbdf37a7ac484ae319782cb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5W2QCM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC3g3Yt6QCW%2BDPwu3cEZk1CLa4pMQWZmdfRdRAOiu38dAIhAP4A%2BGNBV3c1Rg3lASAo9PGHjBsz8kUp%2BFGxF65WOUgRKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeNluq9pbm%2BWafWkgq3APAaJuAXcpiU8U5XsmmkII7fsJSQxki1MN9MKUxTez80Y%2BkhFATsoKGEcS4XPYQxDj3wjIfQcLHa5bXgjO6n4qpjtS23ZET%2FaP3ChocpGfOhvIqRBW1I%2BGowaaI88wRLiW0kQ21Qi6m4Cgw%2BEEwF5ETOguzR%2F9p9oKQVaQvCbtrv%2FBazx6d5yRJTMTfxJ%2FrdY3Yzfx8KWmH1E0SnEUnFr62tJmcCzIbngUz7PZTjocHizkPWfsqe9GvwMUn1v2iYv%2F7ayBwE%2BQNJ0S7e%2FRAp001Hg9jsgQGaEnpN8d4aDZy0%2FOyKZVcfxTzD21m2LdOuO0hHGLxEcghdKNFzLUyG4mzsf6u4%2B7mPW92sfiadCbs%2FNaV20jrRsdtkyz1BAMHchUPquUQRTGAcmgTiyaxWCE9UbB%2B9m%2FwONA%2BO3F1iqD63%2BLvhq95XGxBmRkvByRpqjAuTNW4A3PBIz0s1KWqiKxZP1fCxnDMlEcYu15u4ENbXLmD%2FuLlZSn7SQEqLW4h6ks%2Ft2NYsc1NapKE%2B8TY1fJvJuTdGUJ3NsjwRa4YedHSlN10h%2B4E6vLlYGWEZO9Am6xB%2FheZcicVxkJ5%2F4p4PWuiXu%2FY5Ygs9idp3iUrKi%2FDYdlXEGC7M2t6MBjIxjCp%2FtK9BjqkAcAChnhMTnBeJbTtjp5qdkvME%2FGw8dn8UlUeso3n4hVX7QGwMfuqQhHz6i9N%2BLZ0ogkwNmQpO3r2QmC7%2FnLA4gKnZ1A%2BNA8ojAkin1T%2BtrP71My%2BO8j3ULGdcAa02RGAZ8pnI3U0pbEqiAN%2BdcFmtkCLxi2ZtNBTS0rkhTlWdlvSwq1pXNswQ5iG4a2NadchaUjNDOzUfdsXX93QmQ7bZI21UGcr&X-Amz-Signature=127fbfd1e6ab45fbe9239b83312de0636e2f54d9291687467e56c7302939e7ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5W2QCM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC3g3Yt6QCW%2BDPwu3cEZk1CLa4pMQWZmdfRdRAOiu38dAIhAP4A%2BGNBV3c1Rg3lASAo9PGHjBsz8kUp%2BFGxF65WOUgRKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeNluq9pbm%2BWafWkgq3APAaJuAXcpiU8U5XsmmkII7fsJSQxki1MN9MKUxTez80Y%2BkhFATsoKGEcS4XPYQxDj3wjIfQcLHa5bXgjO6n4qpjtS23ZET%2FaP3ChocpGfOhvIqRBW1I%2BGowaaI88wRLiW0kQ21Qi6m4Cgw%2BEEwF5ETOguzR%2F9p9oKQVaQvCbtrv%2FBazx6d5yRJTMTfxJ%2FrdY3Yzfx8KWmH1E0SnEUnFr62tJmcCzIbngUz7PZTjocHizkPWfsqe9GvwMUn1v2iYv%2F7ayBwE%2BQNJ0S7e%2FRAp001Hg9jsgQGaEnpN8d4aDZy0%2FOyKZVcfxTzD21m2LdOuO0hHGLxEcghdKNFzLUyG4mzsf6u4%2B7mPW92sfiadCbs%2FNaV20jrRsdtkyz1BAMHchUPquUQRTGAcmgTiyaxWCE9UbB%2B9m%2FwONA%2BO3F1iqD63%2BLvhq95XGxBmRkvByRpqjAuTNW4A3PBIz0s1KWqiKxZP1fCxnDMlEcYu15u4ENbXLmD%2FuLlZSn7SQEqLW4h6ks%2Ft2NYsc1NapKE%2B8TY1fJvJuTdGUJ3NsjwRa4YedHSlN10h%2B4E6vLlYGWEZO9Am6xB%2FheZcicVxkJ5%2F4p4PWuiXu%2FY5Ygs9idp3iUrKi%2FDYdlXEGC7M2t6MBjIxjCp%2FtK9BjqkAcAChnhMTnBeJbTtjp5qdkvME%2FGw8dn8UlUeso3n4hVX7QGwMfuqQhHz6i9N%2BLZ0ogkwNmQpO3r2QmC7%2FnLA4gKnZ1A%2BNA8ojAkin1T%2BtrP71My%2BO8j3ULGdcAa02RGAZ8pnI3U0pbEqiAN%2BdcFmtkCLxi2ZtNBTS0rkhTlWdlvSwq1pXNswQ5iG4a2NadchaUjNDOzUfdsXX93QmQ7bZI21UGcr&X-Amz-Signature=ca8402cb2c8c6b4a61a821ee1cdcb195d2f27be7d7451d7f887bd1bf75ca32c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5W2QCM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC3g3Yt6QCW%2BDPwu3cEZk1CLa4pMQWZmdfRdRAOiu38dAIhAP4A%2BGNBV3c1Rg3lASAo9PGHjBsz8kUp%2BFGxF65WOUgRKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeNluq9pbm%2BWafWkgq3APAaJuAXcpiU8U5XsmmkII7fsJSQxki1MN9MKUxTez80Y%2BkhFATsoKGEcS4XPYQxDj3wjIfQcLHa5bXgjO6n4qpjtS23ZET%2FaP3ChocpGfOhvIqRBW1I%2BGowaaI88wRLiW0kQ21Qi6m4Cgw%2BEEwF5ETOguzR%2F9p9oKQVaQvCbtrv%2FBazx6d5yRJTMTfxJ%2FrdY3Yzfx8KWmH1E0SnEUnFr62tJmcCzIbngUz7PZTjocHizkPWfsqe9GvwMUn1v2iYv%2F7ayBwE%2BQNJ0S7e%2FRAp001Hg9jsgQGaEnpN8d4aDZy0%2FOyKZVcfxTzD21m2LdOuO0hHGLxEcghdKNFzLUyG4mzsf6u4%2B7mPW92sfiadCbs%2FNaV20jrRsdtkyz1BAMHchUPquUQRTGAcmgTiyaxWCE9UbB%2B9m%2FwONA%2BO3F1iqD63%2BLvhq95XGxBmRkvByRpqjAuTNW4A3PBIz0s1KWqiKxZP1fCxnDMlEcYu15u4ENbXLmD%2FuLlZSn7SQEqLW4h6ks%2Ft2NYsc1NapKE%2B8TY1fJvJuTdGUJ3NsjwRa4YedHSlN10h%2B4E6vLlYGWEZO9Am6xB%2FheZcicVxkJ5%2F4p4PWuiXu%2FY5Ygs9idp3iUrKi%2FDYdlXEGC7M2t6MBjIxjCp%2FtK9BjqkAcAChnhMTnBeJbTtjp5qdkvME%2FGw8dn8UlUeso3n4hVX7QGwMfuqQhHz6i9N%2BLZ0ogkwNmQpO3r2QmC7%2FnLA4gKnZ1A%2BNA8ojAkin1T%2BtrP71My%2BO8j3ULGdcAa02RGAZ8pnI3U0pbEqiAN%2BdcFmtkCLxi2ZtNBTS0rkhTlWdlvSwq1pXNswQ5iG4a2NadchaUjNDOzUfdsXX93QmQ7bZI21UGcr&X-Amz-Signature=d5e3614f67b9f7657f512ebdf7099f5643777d32697d24d53d4b22441a60298a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5W2QCM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC3g3Yt6QCW%2BDPwu3cEZk1CLa4pMQWZmdfRdRAOiu38dAIhAP4A%2BGNBV3c1Rg3lASAo9PGHjBsz8kUp%2BFGxF65WOUgRKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeNluq9pbm%2BWafWkgq3APAaJuAXcpiU8U5XsmmkII7fsJSQxki1MN9MKUxTez80Y%2BkhFATsoKGEcS4XPYQxDj3wjIfQcLHa5bXgjO6n4qpjtS23ZET%2FaP3ChocpGfOhvIqRBW1I%2BGowaaI88wRLiW0kQ21Qi6m4Cgw%2BEEwF5ETOguzR%2F9p9oKQVaQvCbtrv%2FBazx6d5yRJTMTfxJ%2FrdY3Yzfx8KWmH1E0SnEUnFr62tJmcCzIbngUz7PZTjocHizkPWfsqe9GvwMUn1v2iYv%2F7ayBwE%2BQNJ0S7e%2FRAp001Hg9jsgQGaEnpN8d4aDZy0%2FOyKZVcfxTzD21m2LdOuO0hHGLxEcghdKNFzLUyG4mzsf6u4%2B7mPW92sfiadCbs%2FNaV20jrRsdtkyz1BAMHchUPquUQRTGAcmgTiyaxWCE9UbB%2B9m%2FwONA%2BO3F1iqD63%2BLvhq95XGxBmRkvByRpqjAuTNW4A3PBIz0s1KWqiKxZP1fCxnDMlEcYu15u4ENbXLmD%2FuLlZSn7SQEqLW4h6ks%2Ft2NYsc1NapKE%2B8TY1fJvJuTdGUJ3NsjwRa4YedHSlN10h%2B4E6vLlYGWEZO9Am6xB%2FheZcicVxkJ5%2F4p4PWuiXu%2FY5Ygs9idp3iUrKi%2FDYdlXEGC7M2t6MBjIxjCp%2FtK9BjqkAcAChnhMTnBeJbTtjp5qdkvME%2FGw8dn8UlUeso3n4hVX7QGwMfuqQhHz6i9N%2BLZ0ogkwNmQpO3r2QmC7%2FnLA4gKnZ1A%2BNA8ojAkin1T%2BtrP71My%2BO8j3ULGdcAa02RGAZ8pnI3U0pbEqiAN%2BdcFmtkCLxi2ZtNBTS0rkhTlWdlvSwq1pXNswQ5iG4a2NadchaUjNDOzUfdsXX93QmQ7bZI21UGcr&X-Amz-Signature=75018fd4737bbeb72a453db636273c5484713ad98421b2135d7117ee530a68ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
