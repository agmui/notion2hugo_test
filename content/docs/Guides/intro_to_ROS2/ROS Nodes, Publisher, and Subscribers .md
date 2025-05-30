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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ATIJCI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMVBsEvfTQHvRJTF4Y9y2ku6ueQCfYxoIvPnYAxPkzKQIhANP3NTVqa3iPkSr8r9mz%2BXfvLhprW407TRwujcx9ynKbKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkPYmYUq7OOL74MWUq3AOI9TRKV1TauByt5m2Qd3mSHYCBRGlMu733TyWNKNJAR1SJoU2AtZnG3RNjsl9SSep2X%2BgRBDSXNBG2mQ21p2JYOV7t9yaDjmdAuQAjncWDp6fIg%2FYXamCTVLGD11KGuuJoTNuWd0HyhIehXpbomCtIWX0Xi0pkIS8Y%2BntApeyRQ4H2piR6hu1ocytkhSfTSMTg12x2WiHv9ok1kkqmAucHq8%2FWkP0jczxpOMTDTfALZw9yUexCxcB%2BdI7qO1tcY5VkILSaMc1FKh7dOIsZ0bKsH%2FJByCncyWClSTcNNUnU2d2sUhRpOwZkWHkc3Ceu%2Fpty0vcWrcGn9oVkuqr4HdH5LH%2FtVBh8fNSVpz%2BFpEVzitbB4ymxG%2BhsoVt1%2FmqH6oTILDA9%2FjGL410R82fglza0n784vKx3h00H0YJgdzoLLVrQGZUF0gks7omJl1emgL5IRkswyi44ms8SgqYexSmM5dt%2BZ4wTpDwXj0Zzbb%2BiYbEuJygWJMExHeyCYOUVK7icI%2B7ugssnPQ4Y54csxrpXdfuJwgNTwZQjlIU6ioXJh7vuJKzjCoOHzYEkkKvQ9sCagVl8i81hBu9mUn0zJcDG42O5HxsKXMHte%2BaldqfSYQv6Uafol4flEg8SDjDf8ubBBjqkAWMvJgAtlBUibArjROG5xNeUuSC3wPIZAYwwxgHY5TKgY6RMIa7HRyt%2F1h0RoQoh4nSGrhFfKdrCP0aRG7NoVTxDTFVIx8Pjlxy0FbcBsUJxiQDtOwqWx%2B5sOeXeYTEh7tnmc8mukILZKtA92cLiyBR5SQCmsepOEsSyUNramS42amJMd47KIkPYOdlqNI8QQIyQ82SAlulQRkrucgeAmGLLbmox&X-Amz-Signature=4641af3e9d38ab97c6d4b0ae6ed5f5565099aeb03b669fb40876cac702beec38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ATIJCI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMVBsEvfTQHvRJTF4Y9y2ku6ueQCfYxoIvPnYAxPkzKQIhANP3NTVqa3iPkSr8r9mz%2BXfvLhprW407TRwujcx9ynKbKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkPYmYUq7OOL74MWUq3AOI9TRKV1TauByt5m2Qd3mSHYCBRGlMu733TyWNKNJAR1SJoU2AtZnG3RNjsl9SSep2X%2BgRBDSXNBG2mQ21p2JYOV7t9yaDjmdAuQAjncWDp6fIg%2FYXamCTVLGD11KGuuJoTNuWd0HyhIehXpbomCtIWX0Xi0pkIS8Y%2BntApeyRQ4H2piR6hu1ocytkhSfTSMTg12x2WiHv9ok1kkqmAucHq8%2FWkP0jczxpOMTDTfALZw9yUexCxcB%2BdI7qO1tcY5VkILSaMc1FKh7dOIsZ0bKsH%2FJByCncyWClSTcNNUnU2d2sUhRpOwZkWHkc3Ceu%2Fpty0vcWrcGn9oVkuqr4HdH5LH%2FtVBh8fNSVpz%2BFpEVzitbB4ymxG%2BhsoVt1%2FmqH6oTILDA9%2FjGL410R82fglza0n784vKx3h00H0YJgdzoLLVrQGZUF0gks7omJl1emgL5IRkswyi44ms8SgqYexSmM5dt%2BZ4wTpDwXj0Zzbb%2BiYbEuJygWJMExHeyCYOUVK7icI%2B7ugssnPQ4Y54csxrpXdfuJwgNTwZQjlIU6ioXJh7vuJKzjCoOHzYEkkKvQ9sCagVl8i81hBu9mUn0zJcDG42O5HxsKXMHte%2BaldqfSYQv6Uafol4flEg8SDjDf8ubBBjqkAWMvJgAtlBUibArjROG5xNeUuSC3wPIZAYwwxgHY5TKgY6RMIa7HRyt%2F1h0RoQoh4nSGrhFfKdrCP0aRG7NoVTxDTFVIx8Pjlxy0FbcBsUJxiQDtOwqWx%2B5sOeXeYTEh7tnmc8mukILZKtA92cLiyBR5SQCmsepOEsSyUNramS42amJMd47KIkPYOdlqNI8QQIyQ82SAlulQRkrucgeAmGLLbmox&X-Amz-Signature=90acf309f7c6ac5a9acda68339c744c972c7a100aa2d843e51210172957255f2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ATIJCI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMVBsEvfTQHvRJTF4Y9y2ku6ueQCfYxoIvPnYAxPkzKQIhANP3NTVqa3iPkSr8r9mz%2BXfvLhprW407TRwujcx9ynKbKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkPYmYUq7OOL74MWUq3AOI9TRKV1TauByt5m2Qd3mSHYCBRGlMu733TyWNKNJAR1SJoU2AtZnG3RNjsl9SSep2X%2BgRBDSXNBG2mQ21p2JYOV7t9yaDjmdAuQAjncWDp6fIg%2FYXamCTVLGD11KGuuJoTNuWd0HyhIehXpbomCtIWX0Xi0pkIS8Y%2BntApeyRQ4H2piR6hu1ocytkhSfTSMTg12x2WiHv9ok1kkqmAucHq8%2FWkP0jczxpOMTDTfALZw9yUexCxcB%2BdI7qO1tcY5VkILSaMc1FKh7dOIsZ0bKsH%2FJByCncyWClSTcNNUnU2d2sUhRpOwZkWHkc3Ceu%2Fpty0vcWrcGn9oVkuqr4HdH5LH%2FtVBh8fNSVpz%2BFpEVzitbB4ymxG%2BhsoVt1%2FmqH6oTILDA9%2FjGL410R82fglza0n784vKx3h00H0YJgdzoLLVrQGZUF0gks7omJl1emgL5IRkswyi44ms8SgqYexSmM5dt%2BZ4wTpDwXj0Zzbb%2BiYbEuJygWJMExHeyCYOUVK7icI%2B7ugssnPQ4Y54csxrpXdfuJwgNTwZQjlIU6ioXJh7vuJKzjCoOHzYEkkKvQ9sCagVl8i81hBu9mUn0zJcDG42O5HxsKXMHte%2BaldqfSYQv6Uafol4flEg8SDjDf8ubBBjqkAWMvJgAtlBUibArjROG5xNeUuSC3wPIZAYwwxgHY5TKgY6RMIa7HRyt%2F1h0RoQoh4nSGrhFfKdrCP0aRG7NoVTxDTFVIx8Pjlxy0FbcBsUJxiQDtOwqWx%2B5sOeXeYTEh7tnmc8mukILZKtA92cLiyBR5SQCmsepOEsSyUNramS42amJMd47KIkPYOdlqNI8QQIyQ82SAlulQRkrucgeAmGLLbmox&X-Amz-Signature=82da2cee0043384916a3e2f27437864e51231280293ece161a1b115a218a368e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ATIJCI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMVBsEvfTQHvRJTF4Y9y2ku6ueQCfYxoIvPnYAxPkzKQIhANP3NTVqa3iPkSr8r9mz%2BXfvLhprW407TRwujcx9ynKbKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkPYmYUq7OOL74MWUq3AOI9TRKV1TauByt5m2Qd3mSHYCBRGlMu733TyWNKNJAR1SJoU2AtZnG3RNjsl9SSep2X%2BgRBDSXNBG2mQ21p2JYOV7t9yaDjmdAuQAjncWDp6fIg%2FYXamCTVLGD11KGuuJoTNuWd0HyhIehXpbomCtIWX0Xi0pkIS8Y%2BntApeyRQ4H2piR6hu1ocytkhSfTSMTg12x2WiHv9ok1kkqmAucHq8%2FWkP0jczxpOMTDTfALZw9yUexCxcB%2BdI7qO1tcY5VkILSaMc1FKh7dOIsZ0bKsH%2FJByCncyWClSTcNNUnU2d2sUhRpOwZkWHkc3Ceu%2Fpty0vcWrcGn9oVkuqr4HdH5LH%2FtVBh8fNSVpz%2BFpEVzitbB4ymxG%2BhsoVt1%2FmqH6oTILDA9%2FjGL410R82fglza0n784vKx3h00H0YJgdzoLLVrQGZUF0gks7omJl1emgL5IRkswyi44ms8SgqYexSmM5dt%2BZ4wTpDwXj0Zzbb%2BiYbEuJygWJMExHeyCYOUVK7icI%2B7ugssnPQ4Y54csxrpXdfuJwgNTwZQjlIU6ioXJh7vuJKzjCoOHzYEkkKvQ9sCagVl8i81hBu9mUn0zJcDG42O5HxsKXMHte%2BaldqfSYQv6Uafol4flEg8SDjDf8ubBBjqkAWMvJgAtlBUibArjROG5xNeUuSC3wPIZAYwwxgHY5TKgY6RMIa7HRyt%2F1h0RoQoh4nSGrhFfKdrCP0aRG7NoVTxDTFVIx8Pjlxy0FbcBsUJxiQDtOwqWx%2B5sOeXeYTEh7tnmc8mukILZKtA92cLiyBR5SQCmsepOEsSyUNramS42amJMd47KIkPYOdlqNI8QQIyQ82SAlulQRkrucgeAmGLLbmox&X-Amz-Signature=8ec4a6b5df262fb5b157ea906e086445be0d5bb30950e037be412a88e1d2fe9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ATIJCI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMVBsEvfTQHvRJTF4Y9y2ku6ueQCfYxoIvPnYAxPkzKQIhANP3NTVqa3iPkSr8r9mz%2BXfvLhprW407TRwujcx9ynKbKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkPYmYUq7OOL74MWUq3AOI9TRKV1TauByt5m2Qd3mSHYCBRGlMu733TyWNKNJAR1SJoU2AtZnG3RNjsl9SSep2X%2BgRBDSXNBG2mQ21p2JYOV7t9yaDjmdAuQAjncWDp6fIg%2FYXamCTVLGD11KGuuJoTNuWd0HyhIehXpbomCtIWX0Xi0pkIS8Y%2BntApeyRQ4H2piR6hu1ocytkhSfTSMTg12x2WiHv9ok1kkqmAucHq8%2FWkP0jczxpOMTDTfALZw9yUexCxcB%2BdI7qO1tcY5VkILSaMc1FKh7dOIsZ0bKsH%2FJByCncyWClSTcNNUnU2d2sUhRpOwZkWHkc3Ceu%2Fpty0vcWrcGn9oVkuqr4HdH5LH%2FtVBh8fNSVpz%2BFpEVzitbB4ymxG%2BhsoVt1%2FmqH6oTILDA9%2FjGL410R82fglza0n784vKx3h00H0YJgdzoLLVrQGZUF0gks7omJl1emgL5IRkswyi44ms8SgqYexSmM5dt%2BZ4wTpDwXj0Zzbb%2BiYbEuJygWJMExHeyCYOUVK7icI%2B7ugssnPQ4Y54csxrpXdfuJwgNTwZQjlIU6ioXJh7vuJKzjCoOHzYEkkKvQ9sCagVl8i81hBu9mUn0zJcDG42O5HxsKXMHte%2BaldqfSYQv6Uafol4flEg8SDjDf8ubBBjqkAWMvJgAtlBUibArjROG5xNeUuSC3wPIZAYwwxgHY5TKgY6RMIa7HRyt%2F1h0RoQoh4nSGrhFfKdrCP0aRG7NoVTxDTFVIx8Pjlxy0FbcBsUJxiQDtOwqWx%2B5sOeXeYTEh7tnmc8mukILZKtA92cLiyBR5SQCmsepOEsSyUNramS42amJMd47KIkPYOdlqNI8QQIyQ82SAlulQRkrucgeAmGLLbmox&X-Amz-Signature=5fbf95d82a60a1cdf99a6b9364e1bf9f8068bf43cd84161b1e4444fabd90795d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ATIJCI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMVBsEvfTQHvRJTF4Y9y2ku6ueQCfYxoIvPnYAxPkzKQIhANP3NTVqa3iPkSr8r9mz%2BXfvLhprW407TRwujcx9ynKbKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkPYmYUq7OOL74MWUq3AOI9TRKV1TauByt5m2Qd3mSHYCBRGlMu733TyWNKNJAR1SJoU2AtZnG3RNjsl9SSep2X%2BgRBDSXNBG2mQ21p2JYOV7t9yaDjmdAuQAjncWDp6fIg%2FYXamCTVLGD11KGuuJoTNuWd0HyhIehXpbomCtIWX0Xi0pkIS8Y%2BntApeyRQ4H2piR6hu1ocytkhSfTSMTg12x2WiHv9ok1kkqmAucHq8%2FWkP0jczxpOMTDTfALZw9yUexCxcB%2BdI7qO1tcY5VkILSaMc1FKh7dOIsZ0bKsH%2FJByCncyWClSTcNNUnU2d2sUhRpOwZkWHkc3Ceu%2Fpty0vcWrcGn9oVkuqr4HdH5LH%2FtVBh8fNSVpz%2BFpEVzitbB4ymxG%2BhsoVt1%2FmqH6oTILDA9%2FjGL410R82fglza0n784vKx3h00H0YJgdzoLLVrQGZUF0gks7omJl1emgL5IRkswyi44ms8SgqYexSmM5dt%2BZ4wTpDwXj0Zzbb%2BiYbEuJygWJMExHeyCYOUVK7icI%2B7ugssnPQ4Y54csxrpXdfuJwgNTwZQjlIU6ioXJh7vuJKzjCoOHzYEkkKvQ9sCagVl8i81hBu9mUn0zJcDG42O5HxsKXMHte%2BaldqfSYQv6Uafol4flEg8SDjDf8ubBBjqkAWMvJgAtlBUibArjROG5xNeUuSC3wPIZAYwwxgHY5TKgY6RMIa7HRyt%2F1h0RoQoh4nSGrhFfKdrCP0aRG7NoVTxDTFVIx8Pjlxy0FbcBsUJxiQDtOwqWx%2B5sOeXeYTEh7tnmc8mukILZKtA92cLiyBR5SQCmsepOEsSyUNramS42amJMd47KIkPYOdlqNI8QQIyQ82SAlulQRkrucgeAmGLLbmox&X-Amz-Signature=db14c29784094a90ca086df8e77488648fa05696916abb915cb9ec9178e304f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ATIJCI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMVBsEvfTQHvRJTF4Y9y2ku6ueQCfYxoIvPnYAxPkzKQIhANP3NTVqa3iPkSr8r9mz%2BXfvLhprW407TRwujcx9ynKbKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkPYmYUq7OOL74MWUq3AOI9TRKV1TauByt5m2Qd3mSHYCBRGlMu733TyWNKNJAR1SJoU2AtZnG3RNjsl9SSep2X%2BgRBDSXNBG2mQ21p2JYOV7t9yaDjmdAuQAjncWDp6fIg%2FYXamCTVLGD11KGuuJoTNuWd0HyhIehXpbomCtIWX0Xi0pkIS8Y%2BntApeyRQ4H2piR6hu1ocytkhSfTSMTg12x2WiHv9ok1kkqmAucHq8%2FWkP0jczxpOMTDTfALZw9yUexCxcB%2BdI7qO1tcY5VkILSaMc1FKh7dOIsZ0bKsH%2FJByCncyWClSTcNNUnU2d2sUhRpOwZkWHkc3Ceu%2Fpty0vcWrcGn9oVkuqr4HdH5LH%2FtVBh8fNSVpz%2BFpEVzitbB4ymxG%2BhsoVt1%2FmqH6oTILDA9%2FjGL410R82fglza0n784vKx3h00H0YJgdzoLLVrQGZUF0gks7omJl1emgL5IRkswyi44ms8SgqYexSmM5dt%2BZ4wTpDwXj0Zzbb%2BiYbEuJygWJMExHeyCYOUVK7icI%2B7ugssnPQ4Y54csxrpXdfuJwgNTwZQjlIU6ioXJh7vuJKzjCoOHzYEkkKvQ9sCagVl8i81hBu9mUn0zJcDG42O5HxsKXMHte%2BaldqfSYQv6Uafol4flEg8SDjDf8ubBBjqkAWMvJgAtlBUibArjROG5xNeUuSC3wPIZAYwwxgHY5TKgY6RMIa7HRyt%2F1h0RoQoh4nSGrhFfKdrCP0aRG7NoVTxDTFVIx8Pjlxy0FbcBsUJxiQDtOwqWx%2B5sOeXeYTEh7tnmc8mukILZKtA92cLiyBR5SQCmsepOEsSyUNramS42amJMd47KIkPYOdlqNI8QQIyQ82SAlulQRkrucgeAmGLLbmox&X-Amz-Signature=6dea2844e7e7251ac508b04869f87d958051246007cd10d94456777f346423af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ATIJCI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMVBsEvfTQHvRJTF4Y9y2ku6ueQCfYxoIvPnYAxPkzKQIhANP3NTVqa3iPkSr8r9mz%2BXfvLhprW407TRwujcx9ynKbKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkPYmYUq7OOL74MWUq3AOI9TRKV1TauByt5m2Qd3mSHYCBRGlMu733TyWNKNJAR1SJoU2AtZnG3RNjsl9SSep2X%2BgRBDSXNBG2mQ21p2JYOV7t9yaDjmdAuQAjncWDp6fIg%2FYXamCTVLGD11KGuuJoTNuWd0HyhIehXpbomCtIWX0Xi0pkIS8Y%2BntApeyRQ4H2piR6hu1ocytkhSfTSMTg12x2WiHv9ok1kkqmAucHq8%2FWkP0jczxpOMTDTfALZw9yUexCxcB%2BdI7qO1tcY5VkILSaMc1FKh7dOIsZ0bKsH%2FJByCncyWClSTcNNUnU2d2sUhRpOwZkWHkc3Ceu%2Fpty0vcWrcGn9oVkuqr4HdH5LH%2FtVBh8fNSVpz%2BFpEVzitbB4ymxG%2BhsoVt1%2FmqH6oTILDA9%2FjGL410R82fglza0n784vKx3h00H0YJgdzoLLVrQGZUF0gks7omJl1emgL5IRkswyi44ms8SgqYexSmM5dt%2BZ4wTpDwXj0Zzbb%2BiYbEuJygWJMExHeyCYOUVK7icI%2B7ugssnPQ4Y54csxrpXdfuJwgNTwZQjlIU6ioXJh7vuJKzjCoOHzYEkkKvQ9sCagVl8i81hBu9mUn0zJcDG42O5HxsKXMHte%2BaldqfSYQv6Uafol4flEg8SDjDf8ubBBjqkAWMvJgAtlBUibArjROG5xNeUuSC3wPIZAYwwxgHY5TKgY6RMIa7HRyt%2F1h0RoQoh4nSGrhFfKdrCP0aRG7NoVTxDTFVIx8Pjlxy0FbcBsUJxiQDtOwqWx%2B5sOeXeYTEh7tnmc8mukILZKtA92cLiyBR5SQCmsepOEsSyUNramS42amJMd47KIkPYOdlqNI8QQIyQ82SAlulQRkrucgeAmGLLbmox&X-Amz-Signature=8e48a5784d11edf4f54dca6f433ffcb92406639e80b5dddc0686774bf2c6aafb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
