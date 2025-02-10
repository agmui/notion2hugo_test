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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CM2C456%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9IqYIk4A4dUTeRl5cZ6ma4YL1zSzytdFCM0hXxdSORwIhAJSmMbCREhX5NMKr3QmYLBxl3izqDksPHyWW5n1vrtQFKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWr7SwFrFW1%2Fi3SEEq3AOvD0HVcvnfYP8jx8fLs8LrV%2BWC3Vz4Y%2BeUvKeA9RY49ICiaDmDXkAKRmKWq9JkZHidLJsL6wPJIlfAB0ZkOlTwdvv19hUgr6M4akqBVFE9WLDU%2BUPfQiHC59u3kT%2BGhVPpPfKp43VmhFIQUesVtFRJ%2FY3pmo2NkWJUeOhysVuDkoAhdMKDWHe9d4kfU5hgS9Yyvpj2VhuwMBK2%2F49dv15kY%2FqLfdSJg2%2F3Fxi5HXiUgNaPP8ei9Be9L%2B9nTXN3WdgCTudJAAQIrJGCw81Sb4QlXJ3SCJvn%2BkyI33A%2BPo9mKRzBbTist%2FKb6zFHlA1cLmmhRny5Aminhd0Nf2Zmvq%2FkJBVeAiOyGlmQ9KfEfWObPT1%2FsTCNgyDjfbJ8aBtxqjrszBnpRCah6YE3HspWPW3wb0IW%2FaibnI%2FriDPewFkQ5fqk2FdCK48wDtxf8GU2knaeF%2F7ghUzyNAlDCfcmM128q%2Blg7jnTYTDWDM45PvS1EUMohKsqthOTtQWsqgVzyOF54otu9H97ll7HYVZXBcJZvOFMcNrRXpIyLhA2z4lcoALN02PF%2FT%2FFkcRIxsj02WGXjbn55V606Gf7gN3z%2FcOeETLQhr0b29O6Q%2Br03kXalqQEmTmQPXo4hkNBEzDUl6m9BjqkAdwxSn05ZdflvS3IAGjvbnFycGnyGR9PoJNmNgUvMrUR69AWPH%2B39PeYCb4pTL1bYvJ7n1OSPDopq0tLKzJC%2BOke2chB6nRvsp8oJpxMgphlJTVmXNpSO%2FtvzUqpN4Jivmh1dRuGo1adRW3TSdDsAIz%2BvLjCRwlf7txJZ4TSCaz7XKI%2FAuTNqm4J6MBq6ZBr%2BzmGmmNb2%2BldsZu%2B1IhQZYI8nDGV&X-Amz-Signature=154549265245be8dc966c47850869d1786f27eb64b077f3f1ba287fc63b2516f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CM2C456%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9IqYIk4A4dUTeRl5cZ6ma4YL1zSzytdFCM0hXxdSORwIhAJSmMbCREhX5NMKr3QmYLBxl3izqDksPHyWW5n1vrtQFKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWr7SwFrFW1%2Fi3SEEq3AOvD0HVcvnfYP8jx8fLs8LrV%2BWC3Vz4Y%2BeUvKeA9RY49ICiaDmDXkAKRmKWq9JkZHidLJsL6wPJIlfAB0ZkOlTwdvv19hUgr6M4akqBVFE9WLDU%2BUPfQiHC59u3kT%2BGhVPpPfKp43VmhFIQUesVtFRJ%2FY3pmo2NkWJUeOhysVuDkoAhdMKDWHe9d4kfU5hgS9Yyvpj2VhuwMBK2%2F49dv15kY%2FqLfdSJg2%2F3Fxi5HXiUgNaPP8ei9Be9L%2B9nTXN3WdgCTudJAAQIrJGCw81Sb4QlXJ3SCJvn%2BkyI33A%2BPo9mKRzBbTist%2FKb6zFHlA1cLmmhRny5Aminhd0Nf2Zmvq%2FkJBVeAiOyGlmQ9KfEfWObPT1%2FsTCNgyDjfbJ8aBtxqjrszBnpRCah6YE3HspWPW3wb0IW%2FaibnI%2FriDPewFkQ5fqk2FdCK48wDtxf8GU2knaeF%2F7ghUzyNAlDCfcmM128q%2Blg7jnTYTDWDM45PvS1EUMohKsqthOTtQWsqgVzyOF54otu9H97ll7HYVZXBcJZvOFMcNrRXpIyLhA2z4lcoALN02PF%2FT%2FFkcRIxsj02WGXjbn55V606Gf7gN3z%2FcOeETLQhr0b29O6Q%2Br03kXalqQEmTmQPXo4hkNBEzDUl6m9BjqkAdwxSn05ZdflvS3IAGjvbnFycGnyGR9PoJNmNgUvMrUR69AWPH%2B39PeYCb4pTL1bYvJ7n1OSPDopq0tLKzJC%2BOke2chB6nRvsp8oJpxMgphlJTVmXNpSO%2FtvzUqpN4Jivmh1dRuGo1adRW3TSdDsAIz%2BvLjCRwlf7txJZ4TSCaz7XKI%2FAuTNqm4J6MBq6ZBr%2BzmGmmNb2%2BldsZu%2B1IhQZYI8nDGV&X-Amz-Signature=434b6b5f955837ae8def2c25430985d10a2a73d032477824faa2292e3bf0ddf7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CM2C456%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9IqYIk4A4dUTeRl5cZ6ma4YL1zSzytdFCM0hXxdSORwIhAJSmMbCREhX5NMKr3QmYLBxl3izqDksPHyWW5n1vrtQFKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWr7SwFrFW1%2Fi3SEEq3AOvD0HVcvnfYP8jx8fLs8LrV%2BWC3Vz4Y%2BeUvKeA9RY49ICiaDmDXkAKRmKWq9JkZHidLJsL6wPJIlfAB0ZkOlTwdvv19hUgr6M4akqBVFE9WLDU%2BUPfQiHC59u3kT%2BGhVPpPfKp43VmhFIQUesVtFRJ%2FY3pmo2NkWJUeOhysVuDkoAhdMKDWHe9d4kfU5hgS9Yyvpj2VhuwMBK2%2F49dv15kY%2FqLfdSJg2%2F3Fxi5HXiUgNaPP8ei9Be9L%2B9nTXN3WdgCTudJAAQIrJGCw81Sb4QlXJ3SCJvn%2BkyI33A%2BPo9mKRzBbTist%2FKb6zFHlA1cLmmhRny5Aminhd0Nf2Zmvq%2FkJBVeAiOyGlmQ9KfEfWObPT1%2FsTCNgyDjfbJ8aBtxqjrszBnpRCah6YE3HspWPW3wb0IW%2FaibnI%2FriDPewFkQ5fqk2FdCK48wDtxf8GU2knaeF%2F7ghUzyNAlDCfcmM128q%2Blg7jnTYTDWDM45PvS1EUMohKsqthOTtQWsqgVzyOF54otu9H97ll7HYVZXBcJZvOFMcNrRXpIyLhA2z4lcoALN02PF%2FT%2FFkcRIxsj02WGXjbn55V606Gf7gN3z%2FcOeETLQhr0b29O6Q%2Br03kXalqQEmTmQPXo4hkNBEzDUl6m9BjqkAdwxSn05ZdflvS3IAGjvbnFycGnyGR9PoJNmNgUvMrUR69AWPH%2B39PeYCb4pTL1bYvJ7n1OSPDopq0tLKzJC%2BOke2chB6nRvsp8oJpxMgphlJTVmXNpSO%2FtvzUqpN4Jivmh1dRuGo1adRW3TSdDsAIz%2BvLjCRwlf7txJZ4TSCaz7XKI%2FAuTNqm4J6MBq6ZBr%2BzmGmmNb2%2BldsZu%2B1IhQZYI8nDGV&X-Amz-Signature=d472eadc6044b93bb74986eda721fcdf4e4f8fa99426e1fe5b8759fc986792c9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CM2C456%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9IqYIk4A4dUTeRl5cZ6ma4YL1zSzytdFCM0hXxdSORwIhAJSmMbCREhX5NMKr3QmYLBxl3izqDksPHyWW5n1vrtQFKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWr7SwFrFW1%2Fi3SEEq3AOvD0HVcvnfYP8jx8fLs8LrV%2BWC3Vz4Y%2BeUvKeA9RY49ICiaDmDXkAKRmKWq9JkZHidLJsL6wPJIlfAB0ZkOlTwdvv19hUgr6M4akqBVFE9WLDU%2BUPfQiHC59u3kT%2BGhVPpPfKp43VmhFIQUesVtFRJ%2FY3pmo2NkWJUeOhysVuDkoAhdMKDWHe9d4kfU5hgS9Yyvpj2VhuwMBK2%2F49dv15kY%2FqLfdSJg2%2F3Fxi5HXiUgNaPP8ei9Be9L%2B9nTXN3WdgCTudJAAQIrJGCw81Sb4QlXJ3SCJvn%2BkyI33A%2BPo9mKRzBbTist%2FKb6zFHlA1cLmmhRny5Aminhd0Nf2Zmvq%2FkJBVeAiOyGlmQ9KfEfWObPT1%2FsTCNgyDjfbJ8aBtxqjrszBnpRCah6YE3HspWPW3wb0IW%2FaibnI%2FriDPewFkQ5fqk2FdCK48wDtxf8GU2knaeF%2F7ghUzyNAlDCfcmM128q%2Blg7jnTYTDWDM45PvS1EUMohKsqthOTtQWsqgVzyOF54otu9H97ll7HYVZXBcJZvOFMcNrRXpIyLhA2z4lcoALN02PF%2FT%2FFkcRIxsj02WGXjbn55V606Gf7gN3z%2FcOeETLQhr0b29O6Q%2Br03kXalqQEmTmQPXo4hkNBEzDUl6m9BjqkAdwxSn05ZdflvS3IAGjvbnFycGnyGR9PoJNmNgUvMrUR69AWPH%2B39PeYCb4pTL1bYvJ7n1OSPDopq0tLKzJC%2BOke2chB6nRvsp8oJpxMgphlJTVmXNpSO%2FtvzUqpN4Jivmh1dRuGo1adRW3TSdDsAIz%2BvLjCRwlf7txJZ4TSCaz7XKI%2FAuTNqm4J6MBq6ZBr%2BzmGmmNb2%2BldsZu%2B1IhQZYI8nDGV&X-Amz-Signature=41a5b6c7e8966276a7a40522213105221a9d6565f6d8e8cd15266391b30fa378&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CM2C456%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9IqYIk4A4dUTeRl5cZ6ma4YL1zSzytdFCM0hXxdSORwIhAJSmMbCREhX5NMKr3QmYLBxl3izqDksPHyWW5n1vrtQFKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWr7SwFrFW1%2Fi3SEEq3AOvD0HVcvnfYP8jx8fLs8LrV%2BWC3Vz4Y%2BeUvKeA9RY49ICiaDmDXkAKRmKWq9JkZHidLJsL6wPJIlfAB0ZkOlTwdvv19hUgr6M4akqBVFE9WLDU%2BUPfQiHC59u3kT%2BGhVPpPfKp43VmhFIQUesVtFRJ%2FY3pmo2NkWJUeOhysVuDkoAhdMKDWHe9d4kfU5hgS9Yyvpj2VhuwMBK2%2F49dv15kY%2FqLfdSJg2%2F3Fxi5HXiUgNaPP8ei9Be9L%2B9nTXN3WdgCTudJAAQIrJGCw81Sb4QlXJ3SCJvn%2BkyI33A%2BPo9mKRzBbTist%2FKb6zFHlA1cLmmhRny5Aminhd0Nf2Zmvq%2FkJBVeAiOyGlmQ9KfEfWObPT1%2FsTCNgyDjfbJ8aBtxqjrszBnpRCah6YE3HspWPW3wb0IW%2FaibnI%2FriDPewFkQ5fqk2FdCK48wDtxf8GU2knaeF%2F7ghUzyNAlDCfcmM128q%2Blg7jnTYTDWDM45PvS1EUMohKsqthOTtQWsqgVzyOF54otu9H97ll7HYVZXBcJZvOFMcNrRXpIyLhA2z4lcoALN02PF%2FT%2FFkcRIxsj02WGXjbn55V606Gf7gN3z%2FcOeETLQhr0b29O6Q%2Br03kXalqQEmTmQPXo4hkNBEzDUl6m9BjqkAdwxSn05ZdflvS3IAGjvbnFycGnyGR9PoJNmNgUvMrUR69AWPH%2B39PeYCb4pTL1bYvJ7n1OSPDopq0tLKzJC%2BOke2chB6nRvsp8oJpxMgphlJTVmXNpSO%2FtvzUqpN4Jivmh1dRuGo1adRW3TSdDsAIz%2BvLjCRwlf7txJZ4TSCaz7XKI%2FAuTNqm4J6MBq6ZBr%2BzmGmmNb2%2BldsZu%2B1IhQZYI8nDGV&X-Amz-Signature=0545013e30f70bb10492640c3a4d08c0dea24744ccbe2392e3a55669060971ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CM2C456%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9IqYIk4A4dUTeRl5cZ6ma4YL1zSzytdFCM0hXxdSORwIhAJSmMbCREhX5NMKr3QmYLBxl3izqDksPHyWW5n1vrtQFKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWr7SwFrFW1%2Fi3SEEq3AOvD0HVcvnfYP8jx8fLs8LrV%2BWC3Vz4Y%2BeUvKeA9RY49ICiaDmDXkAKRmKWq9JkZHidLJsL6wPJIlfAB0ZkOlTwdvv19hUgr6M4akqBVFE9WLDU%2BUPfQiHC59u3kT%2BGhVPpPfKp43VmhFIQUesVtFRJ%2FY3pmo2NkWJUeOhysVuDkoAhdMKDWHe9d4kfU5hgS9Yyvpj2VhuwMBK2%2F49dv15kY%2FqLfdSJg2%2F3Fxi5HXiUgNaPP8ei9Be9L%2B9nTXN3WdgCTudJAAQIrJGCw81Sb4QlXJ3SCJvn%2BkyI33A%2BPo9mKRzBbTist%2FKb6zFHlA1cLmmhRny5Aminhd0Nf2Zmvq%2FkJBVeAiOyGlmQ9KfEfWObPT1%2FsTCNgyDjfbJ8aBtxqjrszBnpRCah6YE3HspWPW3wb0IW%2FaibnI%2FriDPewFkQ5fqk2FdCK48wDtxf8GU2knaeF%2F7ghUzyNAlDCfcmM128q%2Blg7jnTYTDWDM45PvS1EUMohKsqthOTtQWsqgVzyOF54otu9H97ll7HYVZXBcJZvOFMcNrRXpIyLhA2z4lcoALN02PF%2FT%2FFkcRIxsj02WGXjbn55V606Gf7gN3z%2FcOeETLQhr0b29O6Q%2Br03kXalqQEmTmQPXo4hkNBEzDUl6m9BjqkAdwxSn05ZdflvS3IAGjvbnFycGnyGR9PoJNmNgUvMrUR69AWPH%2B39PeYCb4pTL1bYvJ7n1OSPDopq0tLKzJC%2BOke2chB6nRvsp8oJpxMgphlJTVmXNpSO%2FtvzUqpN4Jivmh1dRuGo1adRW3TSdDsAIz%2BvLjCRwlf7txJZ4TSCaz7XKI%2FAuTNqm4J6MBq6ZBr%2BzmGmmNb2%2BldsZu%2B1IhQZYI8nDGV&X-Amz-Signature=9845ecde98fbdff70fca5176692164c888299ed1652522dac68ead20c27d409f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CM2C456%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9IqYIk4A4dUTeRl5cZ6ma4YL1zSzytdFCM0hXxdSORwIhAJSmMbCREhX5NMKr3QmYLBxl3izqDksPHyWW5n1vrtQFKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWr7SwFrFW1%2Fi3SEEq3AOvD0HVcvnfYP8jx8fLs8LrV%2BWC3Vz4Y%2BeUvKeA9RY49ICiaDmDXkAKRmKWq9JkZHidLJsL6wPJIlfAB0ZkOlTwdvv19hUgr6M4akqBVFE9WLDU%2BUPfQiHC59u3kT%2BGhVPpPfKp43VmhFIQUesVtFRJ%2FY3pmo2NkWJUeOhysVuDkoAhdMKDWHe9d4kfU5hgS9Yyvpj2VhuwMBK2%2F49dv15kY%2FqLfdSJg2%2F3Fxi5HXiUgNaPP8ei9Be9L%2B9nTXN3WdgCTudJAAQIrJGCw81Sb4QlXJ3SCJvn%2BkyI33A%2BPo9mKRzBbTist%2FKb6zFHlA1cLmmhRny5Aminhd0Nf2Zmvq%2FkJBVeAiOyGlmQ9KfEfWObPT1%2FsTCNgyDjfbJ8aBtxqjrszBnpRCah6YE3HspWPW3wb0IW%2FaibnI%2FriDPewFkQ5fqk2FdCK48wDtxf8GU2knaeF%2F7ghUzyNAlDCfcmM128q%2Blg7jnTYTDWDM45PvS1EUMohKsqthOTtQWsqgVzyOF54otu9H97ll7HYVZXBcJZvOFMcNrRXpIyLhA2z4lcoALN02PF%2FT%2FFkcRIxsj02WGXjbn55V606Gf7gN3z%2FcOeETLQhr0b29O6Q%2Br03kXalqQEmTmQPXo4hkNBEzDUl6m9BjqkAdwxSn05ZdflvS3IAGjvbnFycGnyGR9PoJNmNgUvMrUR69AWPH%2B39PeYCb4pTL1bYvJ7n1OSPDopq0tLKzJC%2BOke2chB6nRvsp8oJpxMgphlJTVmXNpSO%2FtvzUqpN4Jivmh1dRuGo1adRW3TSdDsAIz%2BvLjCRwlf7txJZ4TSCaz7XKI%2FAuTNqm4J6MBq6ZBr%2BzmGmmNb2%2BldsZu%2B1IhQZYI8nDGV&X-Amz-Signature=ba3b644245101c13dd1ab5d5f4b1a7688a5fd8878c8a669c472e13664ebca780&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CM2C456%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9IqYIk4A4dUTeRl5cZ6ma4YL1zSzytdFCM0hXxdSORwIhAJSmMbCREhX5NMKr3QmYLBxl3izqDksPHyWW5n1vrtQFKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWr7SwFrFW1%2Fi3SEEq3AOvD0HVcvnfYP8jx8fLs8LrV%2BWC3Vz4Y%2BeUvKeA9RY49ICiaDmDXkAKRmKWq9JkZHidLJsL6wPJIlfAB0ZkOlTwdvv19hUgr6M4akqBVFE9WLDU%2BUPfQiHC59u3kT%2BGhVPpPfKp43VmhFIQUesVtFRJ%2FY3pmo2NkWJUeOhysVuDkoAhdMKDWHe9d4kfU5hgS9Yyvpj2VhuwMBK2%2F49dv15kY%2FqLfdSJg2%2F3Fxi5HXiUgNaPP8ei9Be9L%2B9nTXN3WdgCTudJAAQIrJGCw81Sb4QlXJ3SCJvn%2BkyI33A%2BPo9mKRzBbTist%2FKb6zFHlA1cLmmhRny5Aminhd0Nf2Zmvq%2FkJBVeAiOyGlmQ9KfEfWObPT1%2FsTCNgyDjfbJ8aBtxqjrszBnpRCah6YE3HspWPW3wb0IW%2FaibnI%2FriDPewFkQ5fqk2FdCK48wDtxf8GU2knaeF%2F7ghUzyNAlDCfcmM128q%2Blg7jnTYTDWDM45PvS1EUMohKsqthOTtQWsqgVzyOF54otu9H97ll7HYVZXBcJZvOFMcNrRXpIyLhA2z4lcoALN02PF%2FT%2FFkcRIxsj02WGXjbn55V606Gf7gN3z%2FcOeETLQhr0b29O6Q%2Br03kXalqQEmTmQPXo4hkNBEzDUl6m9BjqkAdwxSn05ZdflvS3IAGjvbnFycGnyGR9PoJNmNgUvMrUR69AWPH%2B39PeYCb4pTL1bYvJ7n1OSPDopq0tLKzJC%2BOke2chB6nRvsp8oJpxMgphlJTVmXNpSO%2FtvzUqpN4Jivmh1dRuGo1adRW3TSdDsAIz%2BvLjCRwlf7txJZ4TSCaz7XKI%2FAuTNqm4J6MBq6ZBr%2BzmGmmNb2%2BldsZu%2B1IhQZYI8nDGV&X-Amz-Signature=94abc4ea9ada9fd60913880b2b8bc2b1fac10d10ed8417bdf0813a9935db7136&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
