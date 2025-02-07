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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6A2FLA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCNsVwCHc7GIkQisbrSq0chmaFnSAKLaPfCnj4i%2FI5UFwIhAJUIfToEnvJdIc%2BbXXLxScci%2FuSHs%2BuSK3xrPezRGzEFKv8DCHYQABoMNjM3NDIzMTgzODA1Igy2Aafv82g2upVZ4x4q3APVLSFKd7ChtKnyfWVOv7oos%2FZjE7X2va%2FVoBri2gJpJmTnFierjAOBWVIshGaUf0VKaslvTa9WUOteFicPCaSd5y9PDkDjl%2BOw7PXcVJvoqQuM0TpsUGTVtgCuRraPX3zy5GnJNAqlWhIQgyG6DfqT%2F0IOvwMJZ%2FHaeYie57iRHhj8tGhrmGolmAomE4RBezV2jnnTKnrd%2FTG3rBvqeHtdNOnvA8eGviwl4LfMvu%2BSY9Ndqur5bMSQR1YME9JXLPT%2BbBiie3N0eQfrCJ7CorZ1CKOpcn0u%2FOhhgkrqHDWP%2F%2F4UpL37ouGiRPsKzXQXD4P5%2Fxk2lM%2B4%2FMuGkifxu%2FntDlLdsODi7rEVXPzjRRhXdYgPBv3kQO4c64EqApe9E2iyiKDl0Sby0uBveenm9SguTlP0dBsyE1g86PSesYnT6pxRVqoCCC8oSEi%2B%2F0I1AdWEnNC7nDb57ocNhdbuKdilXtOyQP3Vm9WBXK1lR5II3mqIVQca3LJyr8MQeq8pqxxUBnN6%2FVGURzZpmvty6e0VRy5skyoFxuR%2F%2BLm5kyVcDAsovlaSveJ4oNFU3VcGQuE83NX9Fm2%2BqRX1DXATauCjaPtuzZl01Y0M20MxmFy%2Fhu8lbr%2FnIbGLIX2eMzDOjJi9BjqkAQndyCX6M1Q5BxbOaHqYKoYxwNAu3XSWIyHaDedG0YSHb2mUt5RbKo6o4rzpm1RfQIrONQsW6O8TJp6SOEwP6BngUO0OnwALsG36wBNVI2Xz94gXa0zZGJYiP8zos3TrMCwwjmAXxeMtDX2nwOpvJRsZBFVix6yW670EsUvziRmnTDqqzzbGPR%2BC74g1hBiKYc4d8CdLwhpn7kqAvo6co2CzrYUN&X-Amz-Signature=3e19be6178682bc18399cca03ecc720fd660168f4acf71a312dcb104561ff9fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6A2FLA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCNsVwCHc7GIkQisbrSq0chmaFnSAKLaPfCnj4i%2FI5UFwIhAJUIfToEnvJdIc%2BbXXLxScci%2FuSHs%2BuSK3xrPezRGzEFKv8DCHYQABoMNjM3NDIzMTgzODA1Igy2Aafv82g2upVZ4x4q3APVLSFKd7ChtKnyfWVOv7oos%2FZjE7X2va%2FVoBri2gJpJmTnFierjAOBWVIshGaUf0VKaslvTa9WUOteFicPCaSd5y9PDkDjl%2BOw7PXcVJvoqQuM0TpsUGTVtgCuRraPX3zy5GnJNAqlWhIQgyG6DfqT%2F0IOvwMJZ%2FHaeYie57iRHhj8tGhrmGolmAomE4RBezV2jnnTKnrd%2FTG3rBvqeHtdNOnvA8eGviwl4LfMvu%2BSY9Ndqur5bMSQR1YME9JXLPT%2BbBiie3N0eQfrCJ7CorZ1CKOpcn0u%2FOhhgkrqHDWP%2F%2F4UpL37ouGiRPsKzXQXD4P5%2Fxk2lM%2B4%2FMuGkifxu%2FntDlLdsODi7rEVXPzjRRhXdYgPBv3kQO4c64EqApe9E2iyiKDl0Sby0uBveenm9SguTlP0dBsyE1g86PSesYnT6pxRVqoCCC8oSEi%2B%2F0I1AdWEnNC7nDb57ocNhdbuKdilXtOyQP3Vm9WBXK1lR5II3mqIVQca3LJyr8MQeq8pqxxUBnN6%2FVGURzZpmvty6e0VRy5skyoFxuR%2F%2BLm5kyVcDAsovlaSveJ4oNFU3VcGQuE83NX9Fm2%2BqRX1DXATauCjaPtuzZl01Y0M20MxmFy%2Fhu8lbr%2FnIbGLIX2eMzDOjJi9BjqkAQndyCX6M1Q5BxbOaHqYKoYxwNAu3XSWIyHaDedG0YSHb2mUt5RbKo6o4rzpm1RfQIrONQsW6O8TJp6SOEwP6BngUO0OnwALsG36wBNVI2Xz94gXa0zZGJYiP8zos3TrMCwwjmAXxeMtDX2nwOpvJRsZBFVix6yW670EsUvziRmnTDqqzzbGPR%2BC74g1hBiKYc4d8CdLwhpn7kqAvo6co2CzrYUN&X-Amz-Signature=5bde2dc8c637845b2c9f37c9fb4f831cb1019aa303f60a3e8052fb8db7f89893&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6A2FLA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCNsVwCHc7GIkQisbrSq0chmaFnSAKLaPfCnj4i%2FI5UFwIhAJUIfToEnvJdIc%2BbXXLxScci%2FuSHs%2BuSK3xrPezRGzEFKv8DCHYQABoMNjM3NDIzMTgzODA1Igy2Aafv82g2upVZ4x4q3APVLSFKd7ChtKnyfWVOv7oos%2FZjE7X2va%2FVoBri2gJpJmTnFierjAOBWVIshGaUf0VKaslvTa9WUOteFicPCaSd5y9PDkDjl%2BOw7PXcVJvoqQuM0TpsUGTVtgCuRraPX3zy5GnJNAqlWhIQgyG6DfqT%2F0IOvwMJZ%2FHaeYie57iRHhj8tGhrmGolmAomE4RBezV2jnnTKnrd%2FTG3rBvqeHtdNOnvA8eGviwl4LfMvu%2BSY9Ndqur5bMSQR1YME9JXLPT%2BbBiie3N0eQfrCJ7CorZ1CKOpcn0u%2FOhhgkrqHDWP%2F%2F4UpL37ouGiRPsKzXQXD4P5%2Fxk2lM%2B4%2FMuGkifxu%2FntDlLdsODi7rEVXPzjRRhXdYgPBv3kQO4c64EqApe9E2iyiKDl0Sby0uBveenm9SguTlP0dBsyE1g86PSesYnT6pxRVqoCCC8oSEi%2B%2F0I1AdWEnNC7nDb57ocNhdbuKdilXtOyQP3Vm9WBXK1lR5II3mqIVQca3LJyr8MQeq8pqxxUBnN6%2FVGURzZpmvty6e0VRy5skyoFxuR%2F%2BLm5kyVcDAsovlaSveJ4oNFU3VcGQuE83NX9Fm2%2BqRX1DXATauCjaPtuzZl01Y0M20MxmFy%2Fhu8lbr%2FnIbGLIX2eMzDOjJi9BjqkAQndyCX6M1Q5BxbOaHqYKoYxwNAu3XSWIyHaDedG0YSHb2mUt5RbKo6o4rzpm1RfQIrONQsW6O8TJp6SOEwP6BngUO0OnwALsG36wBNVI2Xz94gXa0zZGJYiP8zos3TrMCwwjmAXxeMtDX2nwOpvJRsZBFVix6yW670EsUvziRmnTDqqzzbGPR%2BC74g1hBiKYc4d8CdLwhpn7kqAvo6co2CzrYUN&X-Amz-Signature=7243e9763c7ea4d71bbb94b7f20c9a9da9df523722554fc4306a827c70f77e73&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6A2FLA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCNsVwCHc7GIkQisbrSq0chmaFnSAKLaPfCnj4i%2FI5UFwIhAJUIfToEnvJdIc%2BbXXLxScci%2FuSHs%2BuSK3xrPezRGzEFKv8DCHYQABoMNjM3NDIzMTgzODA1Igy2Aafv82g2upVZ4x4q3APVLSFKd7ChtKnyfWVOv7oos%2FZjE7X2va%2FVoBri2gJpJmTnFierjAOBWVIshGaUf0VKaslvTa9WUOteFicPCaSd5y9PDkDjl%2BOw7PXcVJvoqQuM0TpsUGTVtgCuRraPX3zy5GnJNAqlWhIQgyG6DfqT%2F0IOvwMJZ%2FHaeYie57iRHhj8tGhrmGolmAomE4RBezV2jnnTKnrd%2FTG3rBvqeHtdNOnvA8eGviwl4LfMvu%2BSY9Ndqur5bMSQR1YME9JXLPT%2BbBiie3N0eQfrCJ7CorZ1CKOpcn0u%2FOhhgkrqHDWP%2F%2F4UpL37ouGiRPsKzXQXD4P5%2Fxk2lM%2B4%2FMuGkifxu%2FntDlLdsODi7rEVXPzjRRhXdYgPBv3kQO4c64EqApe9E2iyiKDl0Sby0uBveenm9SguTlP0dBsyE1g86PSesYnT6pxRVqoCCC8oSEi%2B%2F0I1AdWEnNC7nDb57ocNhdbuKdilXtOyQP3Vm9WBXK1lR5II3mqIVQca3LJyr8MQeq8pqxxUBnN6%2FVGURzZpmvty6e0VRy5skyoFxuR%2F%2BLm5kyVcDAsovlaSveJ4oNFU3VcGQuE83NX9Fm2%2BqRX1DXATauCjaPtuzZl01Y0M20MxmFy%2Fhu8lbr%2FnIbGLIX2eMzDOjJi9BjqkAQndyCX6M1Q5BxbOaHqYKoYxwNAu3XSWIyHaDedG0YSHb2mUt5RbKo6o4rzpm1RfQIrONQsW6O8TJp6SOEwP6BngUO0OnwALsG36wBNVI2Xz94gXa0zZGJYiP8zos3TrMCwwjmAXxeMtDX2nwOpvJRsZBFVix6yW670EsUvziRmnTDqqzzbGPR%2BC74g1hBiKYc4d8CdLwhpn7kqAvo6co2CzrYUN&X-Amz-Signature=0603b1eaf9a07c958493f96fc593ad81161abc7f03986fb9497e43804f87768e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6A2FLA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCNsVwCHc7GIkQisbrSq0chmaFnSAKLaPfCnj4i%2FI5UFwIhAJUIfToEnvJdIc%2BbXXLxScci%2FuSHs%2BuSK3xrPezRGzEFKv8DCHYQABoMNjM3NDIzMTgzODA1Igy2Aafv82g2upVZ4x4q3APVLSFKd7ChtKnyfWVOv7oos%2FZjE7X2va%2FVoBri2gJpJmTnFierjAOBWVIshGaUf0VKaslvTa9WUOteFicPCaSd5y9PDkDjl%2BOw7PXcVJvoqQuM0TpsUGTVtgCuRraPX3zy5GnJNAqlWhIQgyG6DfqT%2F0IOvwMJZ%2FHaeYie57iRHhj8tGhrmGolmAomE4RBezV2jnnTKnrd%2FTG3rBvqeHtdNOnvA8eGviwl4LfMvu%2BSY9Ndqur5bMSQR1YME9JXLPT%2BbBiie3N0eQfrCJ7CorZ1CKOpcn0u%2FOhhgkrqHDWP%2F%2F4UpL37ouGiRPsKzXQXD4P5%2Fxk2lM%2B4%2FMuGkifxu%2FntDlLdsODi7rEVXPzjRRhXdYgPBv3kQO4c64EqApe9E2iyiKDl0Sby0uBveenm9SguTlP0dBsyE1g86PSesYnT6pxRVqoCCC8oSEi%2B%2F0I1AdWEnNC7nDb57ocNhdbuKdilXtOyQP3Vm9WBXK1lR5II3mqIVQca3LJyr8MQeq8pqxxUBnN6%2FVGURzZpmvty6e0VRy5skyoFxuR%2F%2BLm5kyVcDAsovlaSveJ4oNFU3VcGQuE83NX9Fm2%2BqRX1DXATauCjaPtuzZl01Y0M20MxmFy%2Fhu8lbr%2FnIbGLIX2eMzDOjJi9BjqkAQndyCX6M1Q5BxbOaHqYKoYxwNAu3XSWIyHaDedG0YSHb2mUt5RbKo6o4rzpm1RfQIrONQsW6O8TJp6SOEwP6BngUO0OnwALsG36wBNVI2Xz94gXa0zZGJYiP8zos3TrMCwwjmAXxeMtDX2nwOpvJRsZBFVix6yW670EsUvziRmnTDqqzzbGPR%2BC74g1hBiKYc4d8CdLwhpn7kqAvo6co2CzrYUN&X-Amz-Signature=c33e1034fb41608dd0e590100a9e61ebd8cf955e2782330cfc805af1c024c5bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6A2FLA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCNsVwCHc7GIkQisbrSq0chmaFnSAKLaPfCnj4i%2FI5UFwIhAJUIfToEnvJdIc%2BbXXLxScci%2FuSHs%2BuSK3xrPezRGzEFKv8DCHYQABoMNjM3NDIzMTgzODA1Igy2Aafv82g2upVZ4x4q3APVLSFKd7ChtKnyfWVOv7oos%2FZjE7X2va%2FVoBri2gJpJmTnFierjAOBWVIshGaUf0VKaslvTa9WUOteFicPCaSd5y9PDkDjl%2BOw7PXcVJvoqQuM0TpsUGTVtgCuRraPX3zy5GnJNAqlWhIQgyG6DfqT%2F0IOvwMJZ%2FHaeYie57iRHhj8tGhrmGolmAomE4RBezV2jnnTKnrd%2FTG3rBvqeHtdNOnvA8eGviwl4LfMvu%2BSY9Ndqur5bMSQR1YME9JXLPT%2BbBiie3N0eQfrCJ7CorZ1CKOpcn0u%2FOhhgkrqHDWP%2F%2F4UpL37ouGiRPsKzXQXD4P5%2Fxk2lM%2B4%2FMuGkifxu%2FntDlLdsODi7rEVXPzjRRhXdYgPBv3kQO4c64EqApe9E2iyiKDl0Sby0uBveenm9SguTlP0dBsyE1g86PSesYnT6pxRVqoCCC8oSEi%2B%2F0I1AdWEnNC7nDb57ocNhdbuKdilXtOyQP3Vm9WBXK1lR5II3mqIVQca3LJyr8MQeq8pqxxUBnN6%2FVGURzZpmvty6e0VRy5skyoFxuR%2F%2BLm5kyVcDAsovlaSveJ4oNFU3VcGQuE83NX9Fm2%2BqRX1DXATauCjaPtuzZl01Y0M20MxmFy%2Fhu8lbr%2FnIbGLIX2eMzDOjJi9BjqkAQndyCX6M1Q5BxbOaHqYKoYxwNAu3XSWIyHaDedG0YSHb2mUt5RbKo6o4rzpm1RfQIrONQsW6O8TJp6SOEwP6BngUO0OnwALsG36wBNVI2Xz94gXa0zZGJYiP8zos3TrMCwwjmAXxeMtDX2nwOpvJRsZBFVix6yW670EsUvziRmnTDqqzzbGPR%2BC74g1hBiKYc4d8CdLwhpn7kqAvo6co2CzrYUN&X-Amz-Signature=5ff5f81d5b6a8afda8a3854b4bce3074abbd0fa662e6073d1b5cdc9816a79315&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6A2FLA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCNsVwCHc7GIkQisbrSq0chmaFnSAKLaPfCnj4i%2FI5UFwIhAJUIfToEnvJdIc%2BbXXLxScci%2FuSHs%2BuSK3xrPezRGzEFKv8DCHYQABoMNjM3NDIzMTgzODA1Igy2Aafv82g2upVZ4x4q3APVLSFKd7ChtKnyfWVOv7oos%2FZjE7X2va%2FVoBri2gJpJmTnFierjAOBWVIshGaUf0VKaslvTa9WUOteFicPCaSd5y9PDkDjl%2BOw7PXcVJvoqQuM0TpsUGTVtgCuRraPX3zy5GnJNAqlWhIQgyG6DfqT%2F0IOvwMJZ%2FHaeYie57iRHhj8tGhrmGolmAomE4RBezV2jnnTKnrd%2FTG3rBvqeHtdNOnvA8eGviwl4LfMvu%2BSY9Ndqur5bMSQR1YME9JXLPT%2BbBiie3N0eQfrCJ7CorZ1CKOpcn0u%2FOhhgkrqHDWP%2F%2F4UpL37ouGiRPsKzXQXD4P5%2Fxk2lM%2B4%2FMuGkifxu%2FntDlLdsODi7rEVXPzjRRhXdYgPBv3kQO4c64EqApe9E2iyiKDl0Sby0uBveenm9SguTlP0dBsyE1g86PSesYnT6pxRVqoCCC8oSEi%2B%2F0I1AdWEnNC7nDb57ocNhdbuKdilXtOyQP3Vm9WBXK1lR5II3mqIVQca3LJyr8MQeq8pqxxUBnN6%2FVGURzZpmvty6e0VRy5skyoFxuR%2F%2BLm5kyVcDAsovlaSveJ4oNFU3VcGQuE83NX9Fm2%2BqRX1DXATauCjaPtuzZl01Y0M20MxmFy%2Fhu8lbr%2FnIbGLIX2eMzDOjJi9BjqkAQndyCX6M1Q5BxbOaHqYKoYxwNAu3XSWIyHaDedG0YSHb2mUt5RbKo6o4rzpm1RfQIrONQsW6O8TJp6SOEwP6BngUO0OnwALsG36wBNVI2Xz94gXa0zZGJYiP8zos3TrMCwwjmAXxeMtDX2nwOpvJRsZBFVix6yW670EsUvziRmnTDqqzzbGPR%2BC74g1hBiKYc4d8CdLwhpn7kqAvo6co2CzrYUN&X-Amz-Signature=68f395a7df4ef442a4ccada3329e627d834b92a925eb79ff7b327e44c95a946c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6A2FLA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCNsVwCHc7GIkQisbrSq0chmaFnSAKLaPfCnj4i%2FI5UFwIhAJUIfToEnvJdIc%2BbXXLxScci%2FuSHs%2BuSK3xrPezRGzEFKv8DCHYQABoMNjM3NDIzMTgzODA1Igy2Aafv82g2upVZ4x4q3APVLSFKd7ChtKnyfWVOv7oos%2FZjE7X2va%2FVoBri2gJpJmTnFierjAOBWVIshGaUf0VKaslvTa9WUOteFicPCaSd5y9PDkDjl%2BOw7PXcVJvoqQuM0TpsUGTVtgCuRraPX3zy5GnJNAqlWhIQgyG6DfqT%2F0IOvwMJZ%2FHaeYie57iRHhj8tGhrmGolmAomE4RBezV2jnnTKnrd%2FTG3rBvqeHtdNOnvA8eGviwl4LfMvu%2BSY9Ndqur5bMSQR1YME9JXLPT%2BbBiie3N0eQfrCJ7CorZ1CKOpcn0u%2FOhhgkrqHDWP%2F%2F4UpL37ouGiRPsKzXQXD4P5%2Fxk2lM%2B4%2FMuGkifxu%2FntDlLdsODi7rEVXPzjRRhXdYgPBv3kQO4c64EqApe9E2iyiKDl0Sby0uBveenm9SguTlP0dBsyE1g86PSesYnT6pxRVqoCCC8oSEi%2B%2F0I1AdWEnNC7nDb57ocNhdbuKdilXtOyQP3Vm9WBXK1lR5II3mqIVQca3LJyr8MQeq8pqxxUBnN6%2FVGURzZpmvty6e0VRy5skyoFxuR%2F%2BLm5kyVcDAsovlaSveJ4oNFU3VcGQuE83NX9Fm2%2BqRX1DXATauCjaPtuzZl01Y0M20MxmFy%2Fhu8lbr%2FnIbGLIX2eMzDOjJi9BjqkAQndyCX6M1Q5BxbOaHqYKoYxwNAu3XSWIyHaDedG0YSHb2mUt5RbKo6o4rzpm1RfQIrONQsW6O8TJp6SOEwP6BngUO0OnwALsG36wBNVI2Xz94gXa0zZGJYiP8zos3TrMCwwjmAXxeMtDX2nwOpvJRsZBFVix6yW670EsUvziRmnTDqqzzbGPR%2BC74g1hBiKYc4d8CdLwhpn7kqAvo6co2CzrYUN&X-Amz-Signature=620c309f63a33664dd3d691a7e38c096f33a13feb51e2118687dd93891e81c97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
