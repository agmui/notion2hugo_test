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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUBTTRT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtp3BouXWv1PGO8CrExSVz%2FjLGaD%2FiWC%2FnHQqyQVAgpAiEAlj44SLpbFE1M1stMxj3ZN6AP%2FQO%2FuXAFb8a%2FQxad3woqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbM9UvWnlqF5yuNNSrcA91bfkmvn33gX04es9QUc43ijXJJWPERCCV0RMPc%2Ft7BMAjibjYNRHeFUZeXa8cfXa7%2BoivSFezbPwU%2BKZxJII22DeWIgVPSU1n0aXgYVBGPIbEYREM%2FFwWlcy71JRFKuzLsqmf01Kp2w0sGwouBvk2XfxIMlD53AWyxAzoqhj8LNgZWw2i3PKPzJ8RswKYcFhzWn02wzXshzB67msYXd3az8oJd%2BiMCVsiGR4ImUSMvSti0Pdt6%2F4XhgzSqS68rrFF15S1cXDopYjRyZ9Oz0MCrUOf9J3VhMGLMUE3Bp76yJotozhLD%2BFdYB74vmv6ynMPB7SmHHAj8DFkMp4hFs%2FXSRDUpw5%2B5jvMvtpU2hAzcQr7uFZcdSfWyNhMa8D7HNPFcHwaETfztycxM%2Bv3fpX%2FkHP%2BFqCxNjywhy9%2B%2BswlIcpZJDdQPuGzUSkFLWCgkohc35U%2FIwO6fcCe70nDcrsx7OJOh%2FlXV7UvxIcdXvewf%2BUHYytndircPE%2Fo1VW2oaR%2F27v6fZvhIX7%2Fu%2FXNn58%2Fnd9szRkwCNjwwGHDCqbVh7pLpyRgDRP2NYn%2FxY1AjarziaLAy5xPxBNk82SFFi1BvI212e9C7F9NiHyGZLtlCRG9aAxoj2d7FzjPuMPWh0sIGOqUBW3DhIO%2FVkyBDG%2Fm%2BDKrNo6eF%2FZioFAvEuwnXuwzHkp7DB5lxoYvXWz%2FgVMzUFTO7lRLRg55uAdakQHCKMp9MbZkVV%2BpfCuMEOn27WoNYWMX2QEm0n9OmAIFTY8k5BM3qZiIlXMInyaPGMTNG0nuNrgJh37rX3YTbyBuN8Gc3tE%2FwVrRCfqAUEPTSCOLvZmcoY1VsU1w%2FumWdl8njbUhNlvZsgHr6&X-Amz-Signature=9e6766f5f5c49cb29c7f77344528b4a06ab37ae8a390b8e8a1718275a01c1cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUBTTRT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtp3BouXWv1PGO8CrExSVz%2FjLGaD%2FiWC%2FnHQqyQVAgpAiEAlj44SLpbFE1M1stMxj3ZN6AP%2FQO%2FuXAFb8a%2FQxad3woqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbM9UvWnlqF5yuNNSrcA91bfkmvn33gX04es9QUc43ijXJJWPERCCV0RMPc%2Ft7BMAjibjYNRHeFUZeXa8cfXa7%2BoivSFezbPwU%2BKZxJII22DeWIgVPSU1n0aXgYVBGPIbEYREM%2FFwWlcy71JRFKuzLsqmf01Kp2w0sGwouBvk2XfxIMlD53AWyxAzoqhj8LNgZWw2i3PKPzJ8RswKYcFhzWn02wzXshzB67msYXd3az8oJd%2BiMCVsiGR4ImUSMvSti0Pdt6%2F4XhgzSqS68rrFF15S1cXDopYjRyZ9Oz0MCrUOf9J3VhMGLMUE3Bp76yJotozhLD%2BFdYB74vmv6ynMPB7SmHHAj8DFkMp4hFs%2FXSRDUpw5%2B5jvMvtpU2hAzcQr7uFZcdSfWyNhMa8D7HNPFcHwaETfztycxM%2Bv3fpX%2FkHP%2BFqCxNjywhy9%2B%2BswlIcpZJDdQPuGzUSkFLWCgkohc35U%2FIwO6fcCe70nDcrsx7OJOh%2FlXV7UvxIcdXvewf%2BUHYytndircPE%2Fo1VW2oaR%2F27v6fZvhIX7%2Fu%2FXNn58%2Fnd9szRkwCNjwwGHDCqbVh7pLpyRgDRP2NYn%2FxY1AjarziaLAy5xPxBNk82SFFi1BvI212e9C7F9NiHyGZLtlCRG9aAxoj2d7FzjPuMPWh0sIGOqUBW3DhIO%2FVkyBDG%2Fm%2BDKrNo6eF%2FZioFAvEuwnXuwzHkp7DB5lxoYvXWz%2FgVMzUFTO7lRLRg55uAdakQHCKMp9MbZkVV%2BpfCuMEOn27WoNYWMX2QEm0n9OmAIFTY8k5BM3qZiIlXMInyaPGMTNG0nuNrgJh37rX3YTbyBuN8Gc3tE%2FwVrRCfqAUEPTSCOLvZmcoY1VsU1w%2FumWdl8njbUhNlvZsgHr6&X-Amz-Signature=0031a03db27e59b584afdabcd453c58984cb1a15a6c65e82f193ea96cc4feb77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUBTTRT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtp3BouXWv1PGO8CrExSVz%2FjLGaD%2FiWC%2FnHQqyQVAgpAiEAlj44SLpbFE1M1stMxj3ZN6AP%2FQO%2FuXAFb8a%2FQxad3woqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbM9UvWnlqF5yuNNSrcA91bfkmvn33gX04es9QUc43ijXJJWPERCCV0RMPc%2Ft7BMAjibjYNRHeFUZeXa8cfXa7%2BoivSFezbPwU%2BKZxJII22DeWIgVPSU1n0aXgYVBGPIbEYREM%2FFwWlcy71JRFKuzLsqmf01Kp2w0sGwouBvk2XfxIMlD53AWyxAzoqhj8LNgZWw2i3PKPzJ8RswKYcFhzWn02wzXshzB67msYXd3az8oJd%2BiMCVsiGR4ImUSMvSti0Pdt6%2F4XhgzSqS68rrFF15S1cXDopYjRyZ9Oz0MCrUOf9J3VhMGLMUE3Bp76yJotozhLD%2BFdYB74vmv6ynMPB7SmHHAj8DFkMp4hFs%2FXSRDUpw5%2B5jvMvtpU2hAzcQr7uFZcdSfWyNhMa8D7HNPFcHwaETfztycxM%2Bv3fpX%2FkHP%2BFqCxNjywhy9%2B%2BswlIcpZJDdQPuGzUSkFLWCgkohc35U%2FIwO6fcCe70nDcrsx7OJOh%2FlXV7UvxIcdXvewf%2BUHYytndircPE%2Fo1VW2oaR%2F27v6fZvhIX7%2Fu%2FXNn58%2Fnd9szRkwCNjwwGHDCqbVh7pLpyRgDRP2NYn%2FxY1AjarziaLAy5xPxBNk82SFFi1BvI212e9C7F9NiHyGZLtlCRG9aAxoj2d7FzjPuMPWh0sIGOqUBW3DhIO%2FVkyBDG%2Fm%2BDKrNo6eF%2FZioFAvEuwnXuwzHkp7DB5lxoYvXWz%2FgVMzUFTO7lRLRg55uAdakQHCKMp9MbZkVV%2BpfCuMEOn27WoNYWMX2QEm0n9OmAIFTY8k5BM3qZiIlXMInyaPGMTNG0nuNrgJh37rX3YTbyBuN8Gc3tE%2FwVrRCfqAUEPTSCOLvZmcoY1VsU1w%2FumWdl8njbUhNlvZsgHr6&X-Amz-Signature=c807734f9cb98a9ab28e592a0c04df5663a991a2b481b7c6facc26b318cf1116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUBTTRT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtp3BouXWv1PGO8CrExSVz%2FjLGaD%2FiWC%2FnHQqyQVAgpAiEAlj44SLpbFE1M1stMxj3ZN6AP%2FQO%2FuXAFb8a%2FQxad3woqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbM9UvWnlqF5yuNNSrcA91bfkmvn33gX04es9QUc43ijXJJWPERCCV0RMPc%2Ft7BMAjibjYNRHeFUZeXa8cfXa7%2BoivSFezbPwU%2BKZxJII22DeWIgVPSU1n0aXgYVBGPIbEYREM%2FFwWlcy71JRFKuzLsqmf01Kp2w0sGwouBvk2XfxIMlD53AWyxAzoqhj8LNgZWw2i3PKPzJ8RswKYcFhzWn02wzXshzB67msYXd3az8oJd%2BiMCVsiGR4ImUSMvSti0Pdt6%2F4XhgzSqS68rrFF15S1cXDopYjRyZ9Oz0MCrUOf9J3VhMGLMUE3Bp76yJotozhLD%2BFdYB74vmv6ynMPB7SmHHAj8DFkMp4hFs%2FXSRDUpw5%2B5jvMvtpU2hAzcQr7uFZcdSfWyNhMa8D7HNPFcHwaETfztycxM%2Bv3fpX%2FkHP%2BFqCxNjywhy9%2B%2BswlIcpZJDdQPuGzUSkFLWCgkohc35U%2FIwO6fcCe70nDcrsx7OJOh%2FlXV7UvxIcdXvewf%2BUHYytndircPE%2Fo1VW2oaR%2F27v6fZvhIX7%2Fu%2FXNn58%2Fnd9szRkwCNjwwGHDCqbVh7pLpyRgDRP2NYn%2FxY1AjarziaLAy5xPxBNk82SFFi1BvI212e9C7F9NiHyGZLtlCRG9aAxoj2d7FzjPuMPWh0sIGOqUBW3DhIO%2FVkyBDG%2Fm%2BDKrNo6eF%2FZioFAvEuwnXuwzHkp7DB5lxoYvXWz%2FgVMzUFTO7lRLRg55uAdakQHCKMp9MbZkVV%2BpfCuMEOn27WoNYWMX2QEm0n9OmAIFTY8k5BM3qZiIlXMInyaPGMTNG0nuNrgJh37rX3YTbyBuN8Gc3tE%2FwVrRCfqAUEPTSCOLvZmcoY1VsU1w%2FumWdl8njbUhNlvZsgHr6&X-Amz-Signature=7eccf3de77871b27451ec14d27cb89240dc4a9a7cd13eb08329ca580a1ebf87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUBTTRT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtp3BouXWv1PGO8CrExSVz%2FjLGaD%2FiWC%2FnHQqyQVAgpAiEAlj44SLpbFE1M1stMxj3ZN6AP%2FQO%2FuXAFb8a%2FQxad3woqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbM9UvWnlqF5yuNNSrcA91bfkmvn33gX04es9QUc43ijXJJWPERCCV0RMPc%2Ft7BMAjibjYNRHeFUZeXa8cfXa7%2BoivSFezbPwU%2BKZxJII22DeWIgVPSU1n0aXgYVBGPIbEYREM%2FFwWlcy71JRFKuzLsqmf01Kp2w0sGwouBvk2XfxIMlD53AWyxAzoqhj8LNgZWw2i3PKPzJ8RswKYcFhzWn02wzXshzB67msYXd3az8oJd%2BiMCVsiGR4ImUSMvSti0Pdt6%2F4XhgzSqS68rrFF15S1cXDopYjRyZ9Oz0MCrUOf9J3VhMGLMUE3Bp76yJotozhLD%2BFdYB74vmv6ynMPB7SmHHAj8DFkMp4hFs%2FXSRDUpw5%2B5jvMvtpU2hAzcQr7uFZcdSfWyNhMa8D7HNPFcHwaETfztycxM%2Bv3fpX%2FkHP%2BFqCxNjywhy9%2B%2BswlIcpZJDdQPuGzUSkFLWCgkohc35U%2FIwO6fcCe70nDcrsx7OJOh%2FlXV7UvxIcdXvewf%2BUHYytndircPE%2Fo1VW2oaR%2F27v6fZvhIX7%2Fu%2FXNn58%2Fnd9szRkwCNjwwGHDCqbVh7pLpyRgDRP2NYn%2FxY1AjarziaLAy5xPxBNk82SFFi1BvI212e9C7F9NiHyGZLtlCRG9aAxoj2d7FzjPuMPWh0sIGOqUBW3DhIO%2FVkyBDG%2Fm%2BDKrNo6eF%2FZioFAvEuwnXuwzHkp7DB5lxoYvXWz%2FgVMzUFTO7lRLRg55uAdakQHCKMp9MbZkVV%2BpfCuMEOn27WoNYWMX2QEm0n9OmAIFTY8k5BM3qZiIlXMInyaPGMTNG0nuNrgJh37rX3YTbyBuN8Gc3tE%2FwVrRCfqAUEPTSCOLvZmcoY1VsU1w%2FumWdl8njbUhNlvZsgHr6&X-Amz-Signature=b9559cb1a9e1c2d5c47bb1010c7a84469f087698ae7f789001472caf411ca1fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUBTTRT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtp3BouXWv1PGO8CrExSVz%2FjLGaD%2FiWC%2FnHQqyQVAgpAiEAlj44SLpbFE1M1stMxj3ZN6AP%2FQO%2FuXAFb8a%2FQxad3woqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbM9UvWnlqF5yuNNSrcA91bfkmvn33gX04es9QUc43ijXJJWPERCCV0RMPc%2Ft7BMAjibjYNRHeFUZeXa8cfXa7%2BoivSFezbPwU%2BKZxJII22DeWIgVPSU1n0aXgYVBGPIbEYREM%2FFwWlcy71JRFKuzLsqmf01Kp2w0sGwouBvk2XfxIMlD53AWyxAzoqhj8LNgZWw2i3PKPzJ8RswKYcFhzWn02wzXshzB67msYXd3az8oJd%2BiMCVsiGR4ImUSMvSti0Pdt6%2F4XhgzSqS68rrFF15S1cXDopYjRyZ9Oz0MCrUOf9J3VhMGLMUE3Bp76yJotozhLD%2BFdYB74vmv6ynMPB7SmHHAj8DFkMp4hFs%2FXSRDUpw5%2B5jvMvtpU2hAzcQr7uFZcdSfWyNhMa8D7HNPFcHwaETfztycxM%2Bv3fpX%2FkHP%2BFqCxNjywhy9%2B%2BswlIcpZJDdQPuGzUSkFLWCgkohc35U%2FIwO6fcCe70nDcrsx7OJOh%2FlXV7UvxIcdXvewf%2BUHYytndircPE%2Fo1VW2oaR%2F27v6fZvhIX7%2Fu%2FXNn58%2Fnd9szRkwCNjwwGHDCqbVh7pLpyRgDRP2NYn%2FxY1AjarziaLAy5xPxBNk82SFFi1BvI212e9C7F9NiHyGZLtlCRG9aAxoj2d7FzjPuMPWh0sIGOqUBW3DhIO%2FVkyBDG%2Fm%2BDKrNo6eF%2FZioFAvEuwnXuwzHkp7DB5lxoYvXWz%2FgVMzUFTO7lRLRg55uAdakQHCKMp9MbZkVV%2BpfCuMEOn27WoNYWMX2QEm0n9OmAIFTY8k5BM3qZiIlXMInyaPGMTNG0nuNrgJh37rX3YTbyBuN8Gc3tE%2FwVrRCfqAUEPTSCOLvZmcoY1VsU1w%2FumWdl8njbUhNlvZsgHr6&X-Amz-Signature=42554146b74e0f4bad4271f588c805e83f4de25b6211e8bdc0a1539e8275c1ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUBTTRT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtp3BouXWv1PGO8CrExSVz%2FjLGaD%2FiWC%2FnHQqyQVAgpAiEAlj44SLpbFE1M1stMxj3ZN6AP%2FQO%2FuXAFb8a%2FQxad3woqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbM9UvWnlqF5yuNNSrcA91bfkmvn33gX04es9QUc43ijXJJWPERCCV0RMPc%2Ft7BMAjibjYNRHeFUZeXa8cfXa7%2BoivSFezbPwU%2BKZxJII22DeWIgVPSU1n0aXgYVBGPIbEYREM%2FFwWlcy71JRFKuzLsqmf01Kp2w0sGwouBvk2XfxIMlD53AWyxAzoqhj8LNgZWw2i3PKPzJ8RswKYcFhzWn02wzXshzB67msYXd3az8oJd%2BiMCVsiGR4ImUSMvSti0Pdt6%2F4XhgzSqS68rrFF15S1cXDopYjRyZ9Oz0MCrUOf9J3VhMGLMUE3Bp76yJotozhLD%2BFdYB74vmv6ynMPB7SmHHAj8DFkMp4hFs%2FXSRDUpw5%2B5jvMvtpU2hAzcQr7uFZcdSfWyNhMa8D7HNPFcHwaETfztycxM%2Bv3fpX%2FkHP%2BFqCxNjywhy9%2B%2BswlIcpZJDdQPuGzUSkFLWCgkohc35U%2FIwO6fcCe70nDcrsx7OJOh%2FlXV7UvxIcdXvewf%2BUHYytndircPE%2Fo1VW2oaR%2F27v6fZvhIX7%2Fu%2FXNn58%2Fnd9szRkwCNjwwGHDCqbVh7pLpyRgDRP2NYn%2FxY1AjarziaLAy5xPxBNk82SFFi1BvI212e9C7F9NiHyGZLtlCRG9aAxoj2d7FzjPuMPWh0sIGOqUBW3DhIO%2FVkyBDG%2Fm%2BDKrNo6eF%2FZioFAvEuwnXuwzHkp7DB5lxoYvXWz%2FgVMzUFTO7lRLRg55uAdakQHCKMp9MbZkVV%2BpfCuMEOn27WoNYWMX2QEm0n9OmAIFTY8k5BM3qZiIlXMInyaPGMTNG0nuNrgJh37rX3YTbyBuN8Gc3tE%2FwVrRCfqAUEPTSCOLvZmcoY1VsU1w%2FumWdl8njbUhNlvZsgHr6&X-Amz-Signature=a35203d251b9d6e1da13ba8bbd88d401b4c26c5d1da05efe552674c1e3a5c127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUBTTRT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtp3BouXWv1PGO8CrExSVz%2FjLGaD%2FiWC%2FnHQqyQVAgpAiEAlj44SLpbFE1M1stMxj3ZN6AP%2FQO%2FuXAFb8a%2FQxad3woqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbM9UvWnlqF5yuNNSrcA91bfkmvn33gX04es9QUc43ijXJJWPERCCV0RMPc%2Ft7BMAjibjYNRHeFUZeXa8cfXa7%2BoivSFezbPwU%2BKZxJII22DeWIgVPSU1n0aXgYVBGPIbEYREM%2FFwWlcy71JRFKuzLsqmf01Kp2w0sGwouBvk2XfxIMlD53AWyxAzoqhj8LNgZWw2i3PKPzJ8RswKYcFhzWn02wzXshzB67msYXd3az8oJd%2BiMCVsiGR4ImUSMvSti0Pdt6%2F4XhgzSqS68rrFF15S1cXDopYjRyZ9Oz0MCrUOf9J3VhMGLMUE3Bp76yJotozhLD%2BFdYB74vmv6ynMPB7SmHHAj8DFkMp4hFs%2FXSRDUpw5%2B5jvMvtpU2hAzcQr7uFZcdSfWyNhMa8D7HNPFcHwaETfztycxM%2Bv3fpX%2FkHP%2BFqCxNjywhy9%2B%2BswlIcpZJDdQPuGzUSkFLWCgkohc35U%2FIwO6fcCe70nDcrsx7OJOh%2FlXV7UvxIcdXvewf%2BUHYytndircPE%2Fo1VW2oaR%2F27v6fZvhIX7%2Fu%2FXNn58%2Fnd9szRkwCNjwwGHDCqbVh7pLpyRgDRP2NYn%2FxY1AjarziaLAy5xPxBNk82SFFi1BvI212e9C7F9NiHyGZLtlCRG9aAxoj2d7FzjPuMPWh0sIGOqUBW3DhIO%2FVkyBDG%2Fm%2BDKrNo6eF%2FZioFAvEuwnXuwzHkp7DB5lxoYvXWz%2FgVMzUFTO7lRLRg55uAdakQHCKMp9MbZkVV%2BpfCuMEOn27WoNYWMX2QEm0n9OmAIFTY8k5BM3qZiIlXMInyaPGMTNG0nuNrgJh37rX3YTbyBuN8Gc3tE%2FwVrRCfqAUEPTSCOLvZmcoY1VsU1w%2FumWdl8njbUhNlvZsgHr6&X-Amz-Signature=c660f6742dafe212b5ce6d3e11ab16fff2e49aff4fa73cf50cc51569fac348c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
