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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZPEZHYN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCG10sXoXcXb387JDrIaQSBl0DT0JwjTCe39QxTgPbqkAIgfv72DND0O9jFU5DzuFxa6cSG9lzGkGFQIqGj20gGhSYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvvv0etD5FMzScV1yrcA%2FlWP8p8qKC2%2BIJVqCkz%2BI%2FvrFpaExf3FqdDtdE2fVeLRgJvoT4MQSEBgwoaTEnSK%2FtihR%2FYB1jb4zQ4rDNknZAFvQh4BaBX2LBpPrw4ud%2BfzN4tPTmVfh3tHkuTY%2FNGzjSyoVBngIR5RdfQSlslEBFTfKmEKELo7S0s4wvJ3vsVbDoMQsu7Po2%2Bpkx2cSMWMfStoWHqtCk9OQfZMBGlLUtB92ZShhiJd9ZUFWCQpCHWGswx038c%2FdkvhjDU5%2FCg5GcVIj2P%2BIQ63CRa%2BYymvwa8wrGa3%2BOgi9rpMGdSExbxmsrdxLsYMpf8LzOUbqCqsrtp8Zge8afU8L4NCbb5ZqhgptjwQGQbElcJQ9tlZnKJeJnpkosHZC5w2QvQQzS46QbIBv56jXGttJpvIWEUf1oEK6yQQwNkepRQEm4gkoZa%2FRg7yzJ7cwe23f%2FuTEoeyf3RbcQB1a9A%2BmHptxATG6BDZZLfJpKroyK5snZWnec7TXvZSAGoMcM5ggAp2HymLG5MVUkyqPXpIBlI6OTCdItJBV3Buvatf3AklxCKIJt4r1H0UCf9VF%2FxwgobbjAymNDZKPKq8k%2B6e4kf%2FjVygZyGz%2BSTtsIpmRyf81KH3e9clRttmH4vg7pc7aynMJjH4cIGOqUBf%2FAWT6YgB%2BndU7t%2B%2FDHQcQPEOGD60SGv%2Bg1akfxxbCmYt58EHQ3jCIK%2Fv52K8QsGL98ifUb5Ql182V0oKfeK%2BvGBm2FMDP7u2znwv%2B%2BvAgzFxuDwL1BFKzZ%2FPIcQ%2BJZ2gRzC2OGGeuR%2BNjscxb5tXo%2BynzXDE5j2quBsdfGEp%2BLAgTeooQ2H3%2FxsOwd24Xl%2BU7Ti1%2FJw4z89QN1RmyMFUJ4GFyl%2B&X-Amz-Signature=4d6f1616dc121bed061ab77a76cdd16a6d59cc00edca8b741e758b97b996df60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZPEZHYN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCG10sXoXcXb387JDrIaQSBl0DT0JwjTCe39QxTgPbqkAIgfv72DND0O9jFU5DzuFxa6cSG9lzGkGFQIqGj20gGhSYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvvv0etD5FMzScV1yrcA%2FlWP8p8qKC2%2BIJVqCkz%2BI%2FvrFpaExf3FqdDtdE2fVeLRgJvoT4MQSEBgwoaTEnSK%2FtihR%2FYB1jb4zQ4rDNknZAFvQh4BaBX2LBpPrw4ud%2BfzN4tPTmVfh3tHkuTY%2FNGzjSyoVBngIR5RdfQSlslEBFTfKmEKELo7S0s4wvJ3vsVbDoMQsu7Po2%2Bpkx2cSMWMfStoWHqtCk9OQfZMBGlLUtB92ZShhiJd9ZUFWCQpCHWGswx038c%2FdkvhjDU5%2FCg5GcVIj2P%2BIQ63CRa%2BYymvwa8wrGa3%2BOgi9rpMGdSExbxmsrdxLsYMpf8LzOUbqCqsrtp8Zge8afU8L4NCbb5ZqhgptjwQGQbElcJQ9tlZnKJeJnpkosHZC5w2QvQQzS46QbIBv56jXGttJpvIWEUf1oEK6yQQwNkepRQEm4gkoZa%2FRg7yzJ7cwe23f%2FuTEoeyf3RbcQB1a9A%2BmHptxATG6BDZZLfJpKroyK5snZWnec7TXvZSAGoMcM5ggAp2HymLG5MVUkyqPXpIBlI6OTCdItJBV3Buvatf3AklxCKIJt4r1H0UCf9VF%2FxwgobbjAymNDZKPKq8k%2B6e4kf%2FjVygZyGz%2BSTtsIpmRyf81KH3e9clRttmH4vg7pc7aynMJjH4cIGOqUBf%2FAWT6YgB%2BndU7t%2B%2FDHQcQPEOGD60SGv%2Bg1akfxxbCmYt58EHQ3jCIK%2Fv52K8QsGL98ifUb5Ql182V0oKfeK%2BvGBm2FMDP7u2znwv%2B%2BvAgzFxuDwL1BFKzZ%2FPIcQ%2BJZ2gRzC2OGGeuR%2BNjscxb5tXo%2BynzXDE5j2quBsdfGEp%2BLAgTeooQ2H3%2FxsOwd24Xl%2BU7Ti1%2FJw4z89QN1RmyMFUJ4GFyl%2B&X-Amz-Signature=e07c6ef250e3e92bd196d57ea11a05496c2677304622a83b4f8d47cc652dcbeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZPEZHYN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCG10sXoXcXb387JDrIaQSBl0DT0JwjTCe39QxTgPbqkAIgfv72DND0O9jFU5DzuFxa6cSG9lzGkGFQIqGj20gGhSYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvvv0etD5FMzScV1yrcA%2FlWP8p8qKC2%2BIJVqCkz%2BI%2FvrFpaExf3FqdDtdE2fVeLRgJvoT4MQSEBgwoaTEnSK%2FtihR%2FYB1jb4zQ4rDNknZAFvQh4BaBX2LBpPrw4ud%2BfzN4tPTmVfh3tHkuTY%2FNGzjSyoVBngIR5RdfQSlslEBFTfKmEKELo7S0s4wvJ3vsVbDoMQsu7Po2%2Bpkx2cSMWMfStoWHqtCk9OQfZMBGlLUtB92ZShhiJd9ZUFWCQpCHWGswx038c%2FdkvhjDU5%2FCg5GcVIj2P%2BIQ63CRa%2BYymvwa8wrGa3%2BOgi9rpMGdSExbxmsrdxLsYMpf8LzOUbqCqsrtp8Zge8afU8L4NCbb5ZqhgptjwQGQbElcJQ9tlZnKJeJnpkosHZC5w2QvQQzS46QbIBv56jXGttJpvIWEUf1oEK6yQQwNkepRQEm4gkoZa%2FRg7yzJ7cwe23f%2FuTEoeyf3RbcQB1a9A%2BmHptxATG6BDZZLfJpKroyK5snZWnec7TXvZSAGoMcM5ggAp2HymLG5MVUkyqPXpIBlI6OTCdItJBV3Buvatf3AklxCKIJt4r1H0UCf9VF%2FxwgobbjAymNDZKPKq8k%2B6e4kf%2FjVygZyGz%2BSTtsIpmRyf81KH3e9clRttmH4vg7pc7aynMJjH4cIGOqUBf%2FAWT6YgB%2BndU7t%2B%2FDHQcQPEOGD60SGv%2Bg1akfxxbCmYt58EHQ3jCIK%2Fv52K8QsGL98ifUb5Ql182V0oKfeK%2BvGBm2FMDP7u2znwv%2B%2BvAgzFxuDwL1BFKzZ%2FPIcQ%2BJZ2gRzC2OGGeuR%2BNjscxb5tXo%2BynzXDE5j2quBsdfGEp%2BLAgTeooQ2H3%2FxsOwd24Xl%2BU7Ti1%2FJw4z89QN1RmyMFUJ4GFyl%2B&X-Amz-Signature=2feace10c40710687d1e0f5c615730b5cbc8b10b410da1386e0d8bc05e948573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZPEZHYN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCG10sXoXcXb387JDrIaQSBl0DT0JwjTCe39QxTgPbqkAIgfv72DND0O9jFU5DzuFxa6cSG9lzGkGFQIqGj20gGhSYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvvv0etD5FMzScV1yrcA%2FlWP8p8qKC2%2BIJVqCkz%2BI%2FvrFpaExf3FqdDtdE2fVeLRgJvoT4MQSEBgwoaTEnSK%2FtihR%2FYB1jb4zQ4rDNknZAFvQh4BaBX2LBpPrw4ud%2BfzN4tPTmVfh3tHkuTY%2FNGzjSyoVBngIR5RdfQSlslEBFTfKmEKELo7S0s4wvJ3vsVbDoMQsu7Po2%2Bpkx2cSMWMfStoWHqtCk9OQfZMBGlLUtB92ZShhiJd9ZUFWCQpCHWGswx038c%2FdkvhjDU5%2FCg5GcVIj2P%2BIQ63CRa%2BYymvwa8wrGa3%2BOgi9rpMGdSExbxmsrdxLsYMpf8LzOUbqCqsrtp8Zge8afU8L4NCbb5ZqhgptjwQGQbElcJQ9tlZnKJeJnpkosHZC5w2QvQQzS46QbIBv56jXGttJpvIWEUf1oEK6yQQwNkepRQEm4gkoZa%2FRg7yzJ7cwe23f%2FuTEoeyf3RbcQB1a9A%2BmHptxATG6BDZZLfJpKroyK5snZWnec7TXvZSAGoMcM5ggAp2HymLG5MVUkyqPXpIBlI6OTCdItJBV3Buvatf3AklxCKIJt4r1H0UCf9VF%2FxwgobbjAymNDZKPKq8k%2B6e4kf%2FjVygZyGz%2BSTtsIpmRyf81KH3e9clRttmH4vg7pc7aynMJjH4cIGOqUBf%2FAWT6YgB%2BndU7t%2B%2FDHQcQPEOGD60SGv%2Bg1akfxxbCmYt58EHQ3jCIK%2Fv52K8QsGL98ifUb5Ql182V0oKfeK%2BvGBm2FMDP7u2znwv%2B%2BvAgzFxuDwL1BFKzZ%2FPIcQ%2BJZ2gRzC2OGGeuR%2BNjscxb5tXo%2BynzXDE5j2quBsdfGEp%2BLAgTeooQ2H3%2FxsOwd24Xl%2BU7Ti1%2FJw4z89QN1RmyMFUJ4GFyl%2B&X-Amz-Signature=a6b0acdf3aaa0f6c3c71c5520a05e35e9df02792d4e0835beed4444539eab0cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZPEZHYN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCG10sXoXcXb387JDrIaQSBl0DT0JwjTCe39QxTgPbqkAIgfv72DND0O9jFU5DzuFxa6cSG9lzGkGFQIqGj20gGhSYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvvv0etD5FMzScV1yrcA%2FlWP8p8qKC2%2BIJVqCkz%2BI%2FvrFpaExf3FqdDtdE2fVeLRgJvoT4MQSEBgwoaTEnSK%2FtihR%2FYB1jb4zQ4rDNknZAFvQh4BaBX2LBpPrw4ud%2BfzN4tPTmVfh3tHkuTY%2FNGzjSyoVBngIR5RdfQSlslEBFTfKmEKELo7S0s4wvJ3vsVbDoMQsu7Po2%2Bpkx2cSMWMfStoWHqtCk9OQfZMBGlLUtB92ZShhiJd9ZUFWCQpCHWGswx038c%2FdkvhjDU5%2FCg5GcVIj2P%2BIQ63CRa%2BYymvwa8wrGa3%2BOgi9rpMGdSExbxmsrdxLsYMpf8LzOUbqCqsrtp8Zge8afU8L4NCbb5ZqhgptjwQGQbElcJQ9tlZnKJeJnpkosHZC5w2QvQQzS46QbIBv56jXGttJpvIWEUf1oEK6yQQwNkepRQEm4gkoZa%2FRg7yzJ7cwe23f%2FuTEoeyf3RbcQB1a9A%2BmHptxATG6BDZZLfJpKroyK5snZWnec7TXvZSAGoMcM5ggAp2HymLG5MVUkyqPXpIBlI6OTCdItJBV3Buvatf3AklxCKIJt4r1H0UCf9VF%2FxwgobbjAymNDZKPKq8k%2B6e4kf%2FjVygZyGz%2BSTtsIpmRyf81KH3e9clRttmH4vg7pc7aynMJjH4cIGOqUBf%2FAWT6YgB%2BndU7t%2B%2FDHQcQPEOGD60SGv%2Bg1akfxxbCmYt58EHQ3jCIK%2Fv52K8QsGL98ifUb5Ql182V0oKfeK%2BvGBm2FMDP7u2znwv%2B%2BvAgzFxuDwL1BFKzZ%2FPIcQ%2BJZ2gRzC2OGGeuR%2BNjscxb5tXo%2BynzXDE5j2quBsdfGEp%2BLAgTeooQ2H3%2FxsOwd24Xl%2BU7Ti1%2FJw4z89QN1RmyMFUJ4GFyl%2B&X-Amz-Signature=31f47d7b74a73fb593fe7e94f249b132f639abace96d20453839a346bba340ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZPEZHYN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCG10sXoXcXb387JDrIaQSBl0DT0JwjTCe39QxTgPbqkAIgfv72DND0O9jFU5DzuFxa6cSG9lzGkGFQIqGj20gGhSYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvvv0etD5FMzScV1yrcA%2FlWP8p8qKC2%2BIJVqCkz%2BI%2FvrFpaExf3FqdDtdE2fVeLRgJvoT4MQSEBgwoaTEnSK%2FtihR%2FYB1jb4zQ4rDNknZAFvQh4BaBX2LBpPrw4ud%2BfzN4tPTmVfh3tHkuTY%2FNGzjSyoVBngIR5RdfQSlslEBFTfKmEKELo7S0s4wvJ3vsVbDoMQsu7Po2%2Bpkx2cSMWMfStoWHqtCk9OQfZMBGlLUtB92ZShhiJd9ZUFWCQpCHWGswx038c%2FdkvhjDU5%2FCg5GcVIj2P%2BIQ63CRa%2BYymvwa8wrGa3%2BOgi9rpMGdSExbxmsrdxLsYMpf8LzOUbqCqsrtp8Zge8afU8L4NCbb5ZqhgptjwQGQbElcJQ9tlZnKJeJnpkosHZC5w2QvQQzS46QbIBv56jXGttJpvIWEUf1oEK6yQQwNkepRQEm4gkoZa%2FRg7yzJ7cwe23f%2FuTEoeyf3RbcQB1a9A%2BmHptxATG6BDZZLfJpKroyK5snZWnec7TXvZSAGoMcM5ggAp2HymLG5MVUkyqPXpIBlI6OTCdItJBV3Buvatf3AklxCKIJt4r1H0UCf9VF%2FxwgobbjAymNDZKPKq8k%2B6e4kf%2FjVygZyGz%2BSTtsIpmRyf81KH3e9clRttmH4vg7pc7aynMJjH4cIGOqUBf%2FAWT6YgB%2BndU7t%2B%2FDHQcQPEOGD60SGv%2Bg1akfxxbCmYt58EHQ3jCIK%2Fv52K8QsGL98ifUb5Ql182V0oKfeK%2BvGBm2FMDP7u2znwv%2B%2BvAgzFxuDwL1BFKzZ%2FPIcQ%2BJZ2gRzC2OGGeuR%2BNjscxb5tXo%2BynzXDE5j2quBsdfGEp%2BLAgTeooQ2H3%2FxsOwd24Xl%2BU7Ti1%2FJw4z89QN1RmyMFUJ4GFyl%2B&X-Amz-Signature=954a79660a82c21970f08836de29d89824a87f6bae143a9482a102c510433e7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZPEZHYN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCG10sXoXcXb387JDrIaQSBl0DT0JwjTCe39QxTgPbqkAIgfv72DND0O9jFU5DzuFxa6cSG9lzGkGFQIqGj20gGhSYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvvv0etD5FMzScV1yrcA%2FlWP8p8qKC2%2BIJVqCkz%2BI%2FvrFpaExf3FqdDtdE2fVeLRgJvoT4MQSEBgwoaTEnSK%2FtihR%2FYB1jb4zQ4rDNknZAFvQh4BaBX2LBpPrw4ud%2BfzN4tPTmVfh3tHkuTY%2FNGzjSyoVBngIR5RdfQSlslEBFTfKmEKELo7S0s4wvJ3vsVbDoMQsu7Po2%2Bpkx2cSMWMfStoWHqtCk9OQfZMBGlLUtB92ZShhiJd9ZUFWCQpCHWGswx038c%2FdkvhjDU5%2FCg5GcVIj2P%2BIQ63CRa%2BYymvwa8wrGa3%2BOgi9rpMGdSExbxmsrdxLsYMpf8LzOUbqCqsrtp8Zge8afU8L4NCbb5ZqhgptjwQGQbElcJQ9tlZnKJeJnpkosHZC5w2QvQQzS46QbIBv56jXGttJpvIWEUf1oEK6yQQwNkepRQEm4gkoZa%2FRg7yzJ7cwe23f%2FuTEoeyf3RbcQB1a9A%2BmHptxATG6BDZZLfJpKroyK5snZWnec7TXvZSAGoMcM5ggAp2HymLG5MVUkyqPXpIBlI6OTCdItJBV3Buvatf3AklxCKIJt4r1H0UCf9VF%2FxwgobbjAymNDZKPKq8k%2B6e4kf%2FjVygZyGz%2BSTtsIpmRyf81KH3e9clRttmH4vg7pc7aynMJjH4cIGOqUBf%2FAWT6YgB%2BndU7t%2B%2FDHQcQPEOGD60SGv%2Bg1akfxxbCmYt58EHQ3jCIK%2Fv52K8QsGL98ifUb5Ql182V0oKfeK%2BvGBm2FMDP7u2znwv%2B%2BvAgzFxuDwL1BFKzZ%2FPIcQ%2BJZ2gRzC2OGGeuR%2BNjscxb5tXo%2BynzXDE5j2quBsdfGEp%2BLAgTeooQ2H3%2FxsOwd24Xl%2BU7Ti1%2FJw4z89QN1RmyMFUJ4GFyl%2B&X-Amz-Signature=356c4701c6a4d878c685d1fa92c85d94a0b4ba4ba0f8bec59acbe97d13090050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZPEZHYN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCG10sXoXcXb387JDrIaQSBl0DT0JwjTCe39QxTgPbqkAIgfv72DND0O9jFU5DzuFxa6cSG9lzGkGFQIqGj20gGhSYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvvv0etD5FMzScV1yrcA%2FlWP8p8qKC2%2BIJVqCkz%2BI%2FvrFpaExf3FqdDtdE2fVeLRgJvoT4MQSEBgwoaTEnSK%2FtihR%2FYB1jb4zQ4rDNknZAFvQh4BaBX2LBpPrw4ud%2BfzN4tPTmVfh3tHkuTY%2FNGzjSyoVBngIR5RdfQSlslEBFTfKmEKELo7S0s4wvJ3vsVbDoMQsu7Po2%2Bpkx2cSMWMfStoWHqtCk9OQfZMBGlLUtB92ZShhiJd9ZUFWCQpCHWGswx038c%2FdkvhjDU5%2FCg5GcVIj2P%2BIQ63CRa%2BYymvwa8wrGa3%2BOgi9rpMGdSExbxmsrdxLsYMpf8LzOUbqCqsrtp8Zge8afU8L4NCbb5ZqhgptjwQGQbElcJQ9tlZnKJeJnpkosHZC5w2QvQQzS46QbIBv56jXGttJpvIWEUf1oEK6yQQwNkepRQEm4gkoZa%2FRg7yzJ7cwe23f%2FuTEoeyf3RbcQB1a9A%2BmHptxATG6BDZZLfJpKroyK5snZWnec7TXvZSAGoMcM5ggAp2HymLG5MVUkyqPXpIBlI6OTCdItJBV3Buvatf3AklxCKIJt4r1H0UCf9VF%2FxwgobbjAymNDZKPKq8k%2B6e4kf%2FjVygZyGz%2BSTtsIpmRyf81KH3e9clRttmH4vg7pc7aynMJjH4cIGOqUBf%2FAWT6YgB%2BndU7t%2B%2FDHQcQPEOGD60SGv%2Bg1akfxxbCmYt58EHQ3jCIK%2Fv52K8QsGL98ifUb5Ql182V0oKfeK%2BvGBm2FMDP7u2znwv%2B%2BvAgzFxuDwL1BFKzZ%2FPIcQ%2BJZ2gRzC2OGGeuR%2BNjscxb5tXo%2BynzXDE5j2quBsdfGEp%2BLAgTeooQ2H3%2FxsOwd24Xl%2BU7Ti1%2FJw4z89QN1RmyMFUJ4GFyl%2B&X-Amz-Signature=702181232357c05797b41b9b46b03e3878740c2ba34e4880aa50963ea91c8254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
