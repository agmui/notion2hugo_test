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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3ORL3Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmLG%2FximK%2BwUteq4Yk9PJpB9V6npFdyGRueWGPLAYIfgIhAPZ8GudLHoXXUYOKSApvHzDKktar1fot9QvoUJtwUyIGKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ0Duhgbmmb6OGfTQq3ANpCO%2F%2BM2T8z7Hu%2Bcfa2wW7KxPMYSjhbLHz1kfIrdCqPIj67fSq1oiKyxXep5Jsqebd0nWDtGbkTSNf4eCtthqFC%2BSTWux0JM9mfJpD0Hh4s0j%2BYMgOwXIhhfqvgulRahSez09SrPDpiqS8x3IxLNK%2BgzEVxUEC5Uuuhjr5fnRy80bjy4UqNptkBR%2FNr0B3nQlEc6nDwhGDiiKdkrj%2FdMhSNqiaslNfmVjdfd7LbfwZkT7bHx6Rzcru502g72EoacRGpQAIdow4gQophOyXADd%2Fxf3nKBUQmQXa6ylWVBXMjiclhx3uhP%2Fw7MBeWBaGz2HtzEqvXdmKw4tA8Tp75TW3nU97%2FbRn6f%2BFflcUXqm8WbPTqmrzw0RHK21nf3D%2Fn73TAx2Qw3ssatsujtJiH0C1qbW3cM%2Bf0xTYaFDRyBQGfE%2ButwzupbkM0aI1Xvici1h4u%2FxUFJ33RGSkjFXyt5ZeuTM6GnD5bngyQxhG%2B7qkg%2FJWF4DmziBCpBv%2FQfcnBm1OJ4o3yuzT%2Bd9KzOVShAxRyf%2BRLRFprvbmvoOV3K11LiawZ7ByUrRDDNu48cO6cQMoas2h%2Bt0MQCpVEOSRLq2SzgN5Y21zAvaXfsM2Y1NUqOhCvkMC4iXaLc8xwzCG9qvEBjqkATjFTJEQ6zojJdd0AsP0bH8ZGywurNQFr9cMfkAScEAmOBc2OuhEzdnxcYRK8MKuetHnJLpylOv%2FJ6sA7EI3%2BRS62jFj0aCxkQmqnSXvAVayeav1EXHLt0yeM1VZURmCeBwcPLXchUqL9ngNtq2c8%2FtS8cRpj4liv8RmHQFMc5LH%2BUR53HeGCcqz2yQscxMNjSXkoSnRyAOCq5CAm3e4FAkyKnbL&X-Amz-Signature=697b0b0c99dd6d730cb782ccf5a266d77db0fdcf9f33fea04f2e097b7605c539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3ORL3Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmLG%2FximK%2BwUteq4Yk9PJpB9V6npFdyGRueWGPLAYIfgIhAPZ8GudLHoXXUYOKSApvHzDKktar1fot9QvoUJtwUyIGKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ0Duhgbmmb6OGfTQq3ANpCO%2F%2BM2T8z7Hu%2Bcfa2wW7KxPMYSjhbLHz1kfIrdCqPIj67fSq1oiKyxXep5Jsqebd0nWDtGbkTSNf4eCtthqFC%2BSTWux0JM9mfJpD0Hh4s0j%2BYMgOwXIhhfqvgulRahSez09SrPDpiqS8x3IxLNK%2BgzEVxUEC5Uuuhjr5fnRy80bjy4UqNptkBR%2FNr0B3nQlEc6nDwhGDiiKdkrj%2FdMhSNqiaslNfmVjdfd7LbfwZkT7bHx6Rzcru502g72EoacRGpQAIdow4gQophOyXADd%2Fxf3nKBUQmQXa6ylWVBXMjiclhx3uhP%2Fw7MBeWBaGz2HtzEqvXdmKw4tA8Tp75TW3nU97%2FbRn6f%2BFflcUXqm8WbPTqmrzw0RHK21nf3D%2Fn73TAx2Qw3ssatsujtJiH0C1qbW3cM%2Bf0xTYaFDRyBQGfE%2ButwzupbkM0aI1Xvici1h4u%2FxUFJ33RGSkjFXyt5ZeuTM6GnD5bngyQxhG%2B7qkg%2FJWF4DmziBCpBv%2FQfcnBm1OJ4o3yuzT%2Bd9KzOVShAxRyf%2BRLRFprvbmvoOV3K11LiawZ7ByUrRDDNu48cO6cQMoas2h%2Bt0MQCpVEOSRLq2SzgN5Y21zAvaXfsM2Y1NUqOhCvkMC4iXaLc8xwzCG9qvEBjqkATjFTJEQ6zojJdd0AsP0bH8ZGywurNQFr9cMfkAScEAmOBc2OuhEzdnxcYRK8MKuetHnJLpylOv%2FJ6sA7EI3%2BRS62jFj0aCxkQmqnSXvAVayeav1EXHLt0yeM1VZURmCeBwcPLXchUqL9ngNtq2c8%2FtS8cRpj4liv8RmHQFMc5LH%2BUR53HeGCcqz2yQscxMNjSXkoSnRyAOCq5CAm3e4FAkyKnbL&X-Amz-Signature=e418d7b471105a5e15e9795d48c30375ab9bad536847e2ea3c39da2e4919ec28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3ORL3Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmLG%2FximK%2BwUteq4Yk9PJpB9V6npFdyGRueWGPLAYIfgIhAPZ8GudLHoXXUYOKSApvHzDKktar1fot9QvoUJtwUyIGKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ0Duhgbmmb6OGfTQq3ANpCO%2F%2BM2T8z7Hu%2Bcfa2wW7KxPMYSjhbLHz1kfIrdCqPIj67fSq1oiKyxXep5Jsqebd0nWDtGbkTSNf4eCtthqFC%2BSTWux0JM9mfJpD0Hh4s0j%2BYMgOwXIhhfqvgulRahSez09SrPDpiqS8x3IxLNK%2BgzEVxUEC5Uuuhjr5fnRy80bjy4UqNptkBR%2FNr0B3nQlEc6nDwhGDiiKdkrj%2FdMhSNqiaslNfmVjdfd7LbfwZkT7bHx6Rzcru502g72EoacRGpQAIdow4gQophOyXADd%2Fxf3nKBUQmQXa6ylWVBXMjiclhx3uhP%2Fw7MBeWBaGz2HtzEqvXdmKw4tA8Tp75TW3nU97%2FbRn6f%2BFflcUXqm8WbPTqmrzw0RHK21nf3D%2Fn73TAx2Qw3ssatsujtJiH0C1qbW3cM%2Bf0xTYaFDRyBQGfE%2ButwzupbkM0aI1Xvici1h4u%2FxUFJ33RGSkjFXyt5ZeuTM6GnD5bngyQxhG%2B7qkg%2FJWF4DmziBCpBv%2FQfcnBm1OJ4o3yuzT%2Bd9KzOVShAxRyf%2BRLRFprvbmvoOV3K11LiawZ7ByUrRDDNu48cO6cQMoas2h%2Bt0MQCpVEOSRLq2SzgN5Y21zAvaXfsM2Y1NUqOhCvkMC4iXaLc8xwzCG9qvEBjqkATjFTJEQ6zojJdd0AsP0bH8ZGywurNQFr9cMfkAScEAmOBc2OuhEzdnxcYRK8MKuetHnJLpylOv%2FJ6sA7EI3%2BRS62jFj0aCxkQmqnSXvAVayeav1EXHLt0yeM1VZURmCeBwcPLXchUqL9ngNtq2c8%2FtS8cRpj4liv8RmHQFMc5LH%2BUR53HeGCcqz2yQscxMNjSXkoSnRyAOCq5CAm3e4FAkyKnbL&X-Amz-Signature=cc21516053203dc13b88cf813ca50dc4e237dd4c14a3aa2837275418990c86b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3ORL3Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmLG%2FximK%2BwUteq4Yk9PJpB9V6npFdyGRueWGPLAYIfgIhAPZ8GudLHoXXUYOKSApvHzDKktar1fot9QvoUJtwUyIGKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ0Duhgbmmb6OGfTQq3ANpCO%2F%2BM2T8z7Hu%2Bcfa2wW7KxPMYSjhbLHz1kfIrdCqPIj67fSq1oiKyxXep5Jsqebd0nWDtGbkTSNf4eCtthqFC%2BSTWux0JM9mfJpD0Hh4s0j%2BYMgOwXIhhfqvgulRahSez09SrPDpiqS8x3IxLNK%2BgzEVxUEC5Uuuhjr5fnRy80bjy4UqNptkBR%2FNr0B3nQlEc6nDwhGDiiKdkrj%2FdMhSNqiaslNfmVjdfd7LbfwZkT7bHx6Rzcru502g72EoacRGpQAIdow4gQophOyXADd%2Fxf3nKBUQmQXa6ylWVBXMjiclhx3uhP%2Fw7MBeWBaGz2HtzEqvXdmKw4tA8Tp75TW3nU97%2FbRn6f%2BFflcUXqm8WbPTqmrzw0RHK21nf3D%2Fn73TAx2Qw3ssatsujtJiH0C1qbW3cM%2Bf0xTYaFDRyBQGfE%2ButwzupbkM0aI1Xvici1h4u%2FxUFJ33RGSkjFXyt5ZeuTM6GnD5bngyQxhG%2B7qkg%2FJWF4DmziBCpBv%2FQfcnBm1OJ4o3yuzT%2Bd9KzOVShAxRyf%2BRLRFprvbmvoOV3K11LiawZ7ByUrRDDNu48cO6cQMoas2h%2Bt0MQCpVEOSRLq2SzgN5Y21zAvaXfsM2Y1NUqOhCvkMC4iXaLc8xwzCG9qvEBjqkATjFTJEQ6zojJdd0AsP0bH8ZGywurNQFr9cMfkAScEAmOBc2OuhEzdnxcYRK8MKuetHnJLpylOv%2FJ6sA7EI3%2BRS62jFj0aCxkQmqnSXvAVayeav1EXHLt0yeM1VZURmCeBwcPLXchUqL9ngNtq2c8%2FtS8cRpj4liv8RmHQFMc5LH%2BUR53HeGCcqz2yQscxMNjSXkoSnRyAOCq5CAm3e4FAkyKnbL&X-Amz-Signature=1897503fac3c2fcba9dcb8eae505ab8e716f83aacee84afc9888a0cf071fcbaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3ORL3Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmLG%2FximK%2BwUteq4Yk9PJpB9V6npFdyGRueWGPLAYIfgIhAPZ8GudLHoXXUYOKSApvHzDKktar1fot9QvoUJtwUyIGKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ0Duhgbmmb6OGfTQq3ANpCO%2F%2BM2T8z7Hu%2Bcfa2wW7KxPMYSjhbLHz1kfIrdCqPIj67fSq1oiKyxXep5Jsqebd0nWDtGbkTSNf4eCtthqFC%2BSTWux0JM9mfJpD0Hh4s0j%2BYMgOwXIhhfqvgulRahSez09SrPDpiqS8x3IxLNK%2BgzEVxUEC5Uuuhjr5fnRy80bjy4UqNptkBR%2FNr0B3nQlEc6nDwhGDiiKdkrj%2FdMhSNqiaslNfmVjdfd7LbfwZkT7bHx6Rzcru502g72EoacRGpQAIdow4gQophOyXADd%2Fxf3nKBUQmQXa6ylWVBXMjiclhx3uhP%2Fw7MBeWBaGz2HtzEqvXdmKw4tA8Tp75TW3nU97%2FbRn6f%2BFflcUXqm8WbPTqmrzw0RHK21nf3D%2Fn73TAx2Qw3ssatsujtJiH0C1qbW3cM%2Bf0xTYaFDRyBQGfE%2ButwzupbkM0aI1Xvici1h4u%2FxUFJ33RGSkjFXyt5ZeuTM6GnD5bngyQxhG%2B7qkg%2FJWF4DmziBCpBv%2FQfcnBm1OJ4o3yuzT%2Bd9KzOVShAxRyf%2BRLRFprvbmvoOV3K11LiawZ7ByUrRDDNu48cO6cQMoas2h%2Bt0MQCpVEOSRLq2SzgN5Y21zAvaXfsM2Y1NUqOhCvkMC4iXaLc8xwzCG9qvEBjqkATjFTJEQ6zojJdd0AsP0bH8ZGywurNQFr9cMfkAScEAmOBc2OuhEzdnxcYRK8MKuetHnJLpylOv%2FJ6sA7EI3%2BRS62jFj0aCxkQmqnSXvAVayeav1EXHLt0yeM1VZURmCeBwcPLXchUqL9ngNtq2c8%2FtS8cRpj4liv8RmHQFMc5LH%2BUR53HeGCcqz2yQscxMNjSXkoSnRyAOCq5CAm3e4FAkyKnbL&X-Amz-Signature=81d8d7e7b1cd4fb7d1bc4215a231d0fd8f7d7aa88269e620d860caf68f58f688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3ORL3Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmLG%2FximK%2BwUteq4Yk9PJpB9V6npFdyGRueWGPLAYIfgIhAPZ8GudLHoXXUYOKSApvHzDKktar1fot9QvoUJtwUyIGKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ0Duhgbmmb6OGfTQq3ANpCO%2F%2BM2T8z7Hu%2Bcfa2wW7KxPMYSjhbLHz1kfIrdCqPIj67fSq1oiKyxXep5Jsqebd0nWDtGbkTSNf4eCtthqFC%2BSTWux0JM9mfJpD0Hh4s0j%2BYMgOwXIhhfqvgulRahSez09SrPDpiqS8x3IxLNK%2BgzEVxUEC5Uuuhjr5fnRy80bjy4UqNptkBR%2FNr0B3nQlEc6nDwhGDiiKdkrj%2FdMhSNqiaslNfmVjdfd7LbfwZkT7bHx6Rzcru502g72EoacRGpQAIdow4gQophOyXADd%2Fxf3nKBUQmQXa6ylWVBXMjiclhx3uhP%2Fw7MBeWBaGz2HtzEqvXdmKw4tA8Tp75TW3nU97%2FbRn6f%2BFflcUXqm8WbPTqmrzw0RHK21nf3D%2Fn73TAx2Qw3ssatsujtJiH0C1qbW3cM%2Bf0xTYaFDRyBQGfE%2ButwzupbkM0aI1Xvici1h4u%2FxUFJ33RGSkjFXyt5ZeuTM6GnD5bngyQxhG%2B7qkg%2FJWF4DmziBCpBv%2FQfcnBm1OJ4o3yuzT%2Bd9KzOVShAxRyf%2BRLRFprvbmvoOV3K11LiawZ7ByUrRDDNu48cO6cQMoas2h%2Bt0MQCpVEOSRLq2SzgN5Y21zAvaXfsM2Y1NUqOhCvkMC4iXaLc8xwzCG9qvEBjqkATjFTJEQ6zojJdd0AsP0bH8ZGywurNQFr9cMfkAScEAmOBc2OuhEzdnxcYRK8MKuetHnJLpylOv%2FJ6sA7EI3%2BRS62jFj0aCxkQmqnSXvAVayeav1EXHLt0yeM1VZURmCeBwcPLXchUqL9ngNtq2c8%2FtS8cRpj4liv8RmHQFMc5LH%2BUR53HeGCcqz2yQscxMNjSXkoSnRyAOCq5CAm3e4FAkyKnbL&X-Amz-Signature=cc39dc7dbcfe632d9cca7242b2290f1604258e95cca37b3e1f0640f7b0c309de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3ORL3Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmLG%2FximK%2BwUteq4Yk9PJpB9V6npFdyGRueWGPLAYIfgIhAPZ8GudLHoXXUYOKSApvHzDKktar1fot9QvoUJtwUyIGKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ0Duhgbmmb6OGfTQq3ANpCO%2F%2BM2T8z7Hu%2Bcfa2wW7KxPMYSjhbLHz1kfIrdCqPIj67fSq1oiKyxXep5Jsqebd0nWDtGbkTSNf4eCtthqFC%2BSTWux0JM9mfJpD0Hh4s0j%2BYMgOwXIhhfqvgulRahSez09SrPDpiqS8x3IxLNK%2BgzEVxUEC5Uuuhjr5fnRy80bjy4UqNptkBR%2FNr0B3nQlEc6nDwhGDiiKdkrj%2FdMhSNqiaslNfmVjdfd7LbfwZkT7bHx6Rzcru502g72EoacRGpQAIdow4gQophOyXADd%2Fxf3nKBUQmQXa6ylWVBXMjiclhx3uhP%2Fw7MBeWBaGz2HtzEqvXdmKw4tA8Tp75TW3nU97%2FbRn6f%2BFflcUXqm8WbPTqmrzw0RHK21nf3D%2Fn73TAx2Qw3ssatsujtJiH0C1qbW3cM%2Bf0xTYaFDRyBQGfE%2ButwzupbkM0aI1Xvici1h4u%2FxUFJ33RGSkjFXyt5ZeuTM6GnD5bngyQxhG%2B7qkg%2FJWF4DmziBCpBv%2FQfcnBm1OJ4o3yuzT%2Bd9KzOVShAxRyf%2BRLRFprvbmvoOV3K11LiawZ7ByUrRDDNu48cO6cQMoas2h%2Bt0MQCpVEOSRLq2SzgN5Y21zAvaXfsM2Y1NUqOhCvkMC4iXaLc8xwzCG9qvEBjqkATjFTJEQ6zojJdd0AsP0bH8ZGywurNQFr9cMfkAScEAmOBc2OuhEzdnxcYRK8MKuetHnJLpylOv%2FJ6sA7EI3%2BRS62jFj0aCxkQmqnSXvAVayeav1EXHLt0yeM1VZURmCeBwcPLXchUqL9ngNtq2c8%2FtS8cRpj4liv8RmHQFMc5LH%2BUR53HeGCcqz2yQscxMNjSXkoSnRyAOCq5CAm3e4FAkyKnbL&X-Amz-Signature=5f96a3b608ddcf35800d6c1706f98cada2ed47a91c67e550472539b7027d5637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3ORL3Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmLG%2FximK%2BwUteq4Yk9PJpB9V6npFdyGRueWGPLAYIfgIhAPZ8GudLHoXXUYOKSApvHzDKktar1fot9QvoUJtwUyIGKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ0Duhgbmmb6OGfTQq3ANpCO%2F%2BM2T8z7Hu%2Bcfa2wW7KxPMYSjhbLHz1kfIrdCqPIj67fSq1oiKyxXep5Jsqebd0nWDtGbkTSNf4eCtthqFC%2BSTWux0JM9mfJpD0Hh4s0j%2BYMgOwXIhhfqvgulRahSez09SrPDpiqS8x3IxLNK%2BgzEVxUEC5Uuuhjr5fnRy80bjy4UqNptkBR%2FNr0B3nQlEc6nDwhGDiiKdkrj%2FdMhSNqiaslNfmVjdfd7LbfwZkT7bHx6Rzcru502g72EoacRGpQAIdow4gQophOyXADd%2Fxf3nKBUQmQXa6ylWVBXMjiclhx3uhP%2Fw7MBeWBaGz2HtzEqvXdmKw4tA8Tp75TW3nU97%2FbRn6f%2BFflcUXqm8WbPTqmrzw0RHK21nf3D%2Fn73TAx2Qw3ssatsujtJiH0C1qbW3cM%2Bf0xTYaFDRyBQGfE%2ButwzupbkM0aI1Xvici1h4u%2FxUFJ33RGSkjFXyt5ZeuTM6GnD5bngyQxhG%2B7qkg%2FJWF4DmziBCpBv%2FQfcnBm1OJ4o3yuzT%2Bd9KzOVShAxRyf%2BRLRFprvbmvoOV3K11LiawZ7ByUrRDDNu48cO6cQMoas2h%2Bt0MQCpVEOSRLq2SzgN5Y21zAvaXfsM2Y1NUqOhCvkMC4iXaLc8xwzCG9qvEBjqkATjFTJEQ6zojJdd0AsP0bH8ZGywurNQFr9cMfkAScEAmOBc2OuhEzdnxcYRK8MKuetHnJLpylOv%2FJ6sA7EI3%2BRS62jFj0aCxkQmqnSXvAVayeav1EXHLt0yeM1VZURmCeBwcPLXchUqL9ngNtq2c8%2FtS8cRpj4liv8RmHQFMc5LH%2BUR53HeGCcqz2yQscxMNjSXkoSnRyAOCq5CAm3e4FAkyKnbL&X-Amz-Signature=73e8bc21a58d1efaecb1a70f1e53658e1dd579ebd6e0a8f53932daaf0c422f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
