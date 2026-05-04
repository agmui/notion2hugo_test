---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OXK7P5Y%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL%2FO6TcPOQGZp%2BY6K%2F8N09Tpv7gdt6DlrWZ1aFvyaNZAiAiPgEmuk08K76MjGdDXTWJMZWrPnD29jeGY1sQbgz9lyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMkwn7O2sdfojEpgqIKtwDPce05B0CEwx2dtASN2rTIunaQrGm8MWm9l0i2CtWk5y9eBek5Z2uRvf5k%2FGcf8w2hBgZhK4ucRqwj3FOFPXdeidJuNFrh36AWDc41UPxA%2B7rcM8gm3HPMDpOYtDSmGSg8D0q8hubBYkw9h%2FNKp89Px0eQnk0Zj81cnU0rAeen2PDHGEwr8K1mb0i16r0u4kqE1GM0BcY%2B1aOQe8ADDfodhwd5MaFVP9OyZyVQNjtH6%2Ff7Oy7tgoGBfNmz%2Fo9Uf4vGedIpdfJjR6gKyLo%2BuqDGtzAm2o%2FjQdGPUu2%2BCTZMhjpVa88t08LzV6AiZGNFT58DTPJD%2F5ZPdpUQN3EBgczsolXfnbsrsEVFg7vGSeyhPW7xmBWN0vC30SpCmlmD8qDBJPL3S%2FuR2pvRTvvqe810XWXwFZkHMZnU74DMJ%2FtjH9ovM7aPJiqlXuO%2BaONS4sQ3QKm%2FRMD6ptpkKFMcjoTOEdJzihFe8%2B4Wmq5zx6%2BLbhUcxA8jpPtNrSuAOZi6wTgJRouO48rITIELcp69YV2wMdstDhB1flPeICRIVYh%2B2x%2Ba6AfeaaDBrIKUTpaaaQXRXxWVPexRQ%2FGJvCLXIxEyC0d9JN1o0Fj0mNci5ScfLwGSjVRCSW5uudKWRMw3PjfzwY6pgELu%2BaYKcbLrbS5yKNxCPcZLN1menwug6G1mOydTcDtMff2c5%2FLL9zjIImw7qp%2BDT6MPk%2Bv%2Bni1vJ8po3nRYw4hUWf6Ad%2FeoFQsVeMP8tejL8R6EwJHzDILthDLSWtWXQjO3WsZEBGMiErr4d3k4UpLf59TNo7h6iH4EHxzomRRboqLae8xC0jEu93gnrk9KlDx8RZk8z5v2WBUVYMQRYnmN0lKpeo3&X-Amz-Signature=7cacfdc3e40d0b41734f64b8fdd027802cc6ce357da99ceaee1eb0281a1d516b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OXK7P5Y%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL%2FO6TcPOQGZp%2BY6K%2F8N09Tpv7gdt6DlrWZ1aFvyaNZAiAiPgEmuk08K76MjGdDXTWJMZWrPnD29jeGY1sQbgz9lyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMkwn7O2sdfojEpgqIKtwDPce05B0CEwx2dtASN2rTIunaQrGm8MWm9l0i2CtWk5y9eBek5Z2uRvf5k%2FGcf8w2hBgZhK4ucRqwj3FOFPXdeidJuNFrh36AWDc41UPxA%2B7rcM8gm3HPMDpOYtDSmGSg8D0q8hubBYkw9h%2FNKp89Px0eQnk0Zj81cnU0rAeen2PDHGEwr8K1mb0i16r0u4kqE1GM0BcY%2B1aOQe8ADDfodhwd5MaFVP9OyZyVQNjtH6%2Ff7Oy7tgoGBfNmz%2Fo9Uf4vGedIpdfJjR6gKyLo%2BuqDGtzAm2o%2FjQdGPUu2%2BCTZMhjpVa88t08LzV6AiZGNFT58DTPJD%2F5ZPdpUQN3EBgczsolXfnbsrsEVFg7vGSeyhPW7xmBWN0vC30SpCmlmD8qDBJPL3S%2FuR2pvRTvvqe810XWXwFZkHMZnU74DMJ%2FtjH9ovM7aPJiqlXuO%2BaONS4sQ3QKm%2FRMD6ptpkKFMcjoTOEdJzihFe8%2B4Wmq5zx6%2BLbhUcxA8jpPtNrSuAOZi6wTgJRouO48rITIELcp69YV2wMdstDhB1flPeICRIVYh%2B2x%2Ba6AfeaaDBrIKUTpaaaQXRXxWVPexRQ%2FGJvCLXIxEyC0d9JN1o0Fj0mNci5ScfLwGSjVRCSW5uudKWRMw3PjfzwY6pgELu%2BaYKcbLrbS5yKNxCPcZLN1menwug6G1mOydTcDtMff2c5%2FLL9zjIImw7qp%2BDT6MPk%2Bv%2Bni1vJ8po3nRYw4hUWf6Ad%2FeoFQsVeMP8tejL8R6EwJHzDILthDLSWtWXQjO3WsZEBGMiErr4d3k4UpLf59TNo7h6iH4EHxzomRRboqLae8xC0jEu93gnrk9KlDx8RZk8z5v2WBUVYMQRYnmN0lKpeo3&X-Amz-Signature=155e07906416b265a42b418aec3bd87b2e736d5277d07649e8f8e70bc87b2867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OXK7P5Y%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL%2FO6TcPOQGZp%2BY6K%2F8N09Tpv7gdt6DlrWZ1aFvyaNZAiAiPgEmuk08K76MjGdDXTWJMZWrPnD29jeGY1sQbgz9lyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMkwn7O2sdfojEpgqIKtwDPce05B0CEwx2dtASN2rTIunaQrGm8MWm9l0i2CtWk5y9eBek5Z2uRvf5k%2FGcf8w2hBgZhK4ucRqwj3FOFPXdeidJuNFrh36AWDc41UPxA%2B7rcM8gm3HPMDpOYtDSmGSg8D0q8hubBYkw9h%2FNKp89Px0eQnk0Zj81cnU0rAeen2PDHGEwr8K1mb0i16r0u4kqE1GM0BcY%2B1aOQe8ADDfodhwd5MaFVP9OyZyVQNjtH6%2Ff7Oy7tgoGBfNmz%2Fo9Uf4vGedIpdfJjR6gKyLo%2BuqDGtzAm2o%2FjQdGPUu2%2BCTZMhjpVa88t08LzV6AiZGNFT58DTPJD%2F5ZPdpUQN3EBgczsolXfnbsrsEVFg7vGSeyhPW7xmBWN0vC30SpCmlmD8qDBJPL3S%2FuR2pvRTvvqe810XWXwFZkHMZnU74DMJ%2FtjH9ovM7aPJiqlXuO%2BaONS4sQ3QKm%2FRMD6ptpkKFMcjoTOEdJzihFe8%2B4Wmq5zx6%2BLbhUcxA8jpPtNrSuAOZi6wTgJRouO48rITIELcp69YV2wMdstDhB1flPeICRIVYh%2B2x%2Ba6AfeaaDBrIKUTpaaaQXRXxWVPexRQ%2FGJvCLXIxEyC0d9JN1o0Fj0mNci5ScfLwGSjVRCSW5uudKWRMw3PjfzwY6pgELu%2BaYKcbLrbS5yKNxCPcZLN1menwug6G1mOydTcDtMff2c5%2FLL9zjIImw7qp%2BDT6MPk%2Bv%2Bni1vJ8po3nRYw4hUWf6Ad%2FeoFQsVeMP8tejL8R6EwJHzDILthDLSWtWXQjO3WsZEBGMiErr4d3k4UpLf59TNo7h6iH4EHxzomRRboqLae8xC0jEu93gnrk9KlDx8RZk8z5v2WBUVYMQRYnmN0lKpeo3&X-Amz-Signature=a7e128970ad2b1ff4bba5cea17a3fcb950ae95e1ae5b4f0c78bb537b1568eb83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OXK7P5Y%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL%2FO6TcPOQGZp%2BY6K%2F8N09Tpv7gdt6DlrWZ1aFvyaNZAiAiPgEmuk08K76MjGdDXTWJMZWrPnD29jeGY1sQbgz9lyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMkwn7O2sdfojEpgqIKtwDPce05B0CEwx2dtASN2rTIunaQrGm8MWm9l0i2CtWk5y9eBek5Z2uRvf5k%2FGcf8w2hBgZhK4ucRqwj3FOFPXdeidJuNFrh36AWDc41UPxA%2B7rcM8gm3HPMDpOYtDSmGSg8D0q8hubBYkw9h%2FNKp89Px0eQnk0Zj81cnU0rAeen2PDHGEwr8K1mb0i16r0u4kqE1GM0BcY%2B1aOQe8ADDfodhwd5MaFVP9OyZyVQNjtH6%2Ff7Oy7tgoGBfNmz%2Fo9Uf4vGedIpdfJjR6gKyLo%2BuqDGtzAm2o%2FjQdGPUu2%2BCTZMhjpVa88t08LzV6AiZGNFT58DTPJD%2F5ZPdpUQN3EBgczsolXfnbsrsEVFg7vGSeyhPW7xmBWN0vC30SpCmlmD8qDBJPL3S%2FuR2pvRTvvqe810XWXwFZkHMZnU74DMJ%2FtjH9ovM7aPJiqlXuO%2BaONS4sQ3QKm%2FRMD6ptpkKFMcjoTOEdJzihFe8%2B4Wmq5zx6%2BLbhUcxA8jpPtNrSuAOZi6wTgJRouO48rITIELcp69YV2wMdstDhB1flPeICRIVYh%2B2x%2Ba6AfeaaDBrIKUTpaaaQXRXxWVPexRQ%2FGJvCLXIxEyC0d9JN1o0Fj0mNci5ScfLwGSjVRCSW5uudKWRMw3PjfzwY6pgELu%2BaYKcbLrbS5yKNxCPcZLN1menwug6G1mOydTcDtMff2c5%2FLL9zjIImw7qp%2BDT6MPk%2Bv%2Bni1vJ8po3nRYw4hUWf6Ad%2FeoFQsVeMP8tejL8R6EwJHzDILthDLSWtWXQjO3WsZEBGMiErr4d3k4UpLf59TNo7h6iH4EHxzomRRboqLae8xC0jEu93gnrk9KlDx8RZk8z5v2WBUVYMQRYnmN0lKpeo3&X-Amz-Signature=eff42b06ca1459dd1c3856abb36487ff1b634edc3afaeb097853036c4e9a3984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OXK7P5Y%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL%2FO6TcPOQGZp%2BY6K%2F8N09Tpv7gdt6DlrWZ1aFvyaNZAiAiPgEmuk08K76MjGdDXTWJMZWrPnD29jeGY1sQbgz9lyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMkwn7O2sdfojEpgqIKtwDPce05B0CEwx2dtASN2rTIunaQrGm8MWm9l0i2CtWk5y9eBek5Z2uRvf5k%2FGcf8w2hBgZhK4ucRqwj3FOFPXdeidJuNFrh36AWDc41UPxA%2B7rcM8gm3HPMDpOYtDSmGSg8D0q8hubBYkw9h%2FNKp89Px0eQnk0Zj81cnU0rAeen2PDHGEwr8K1mb0i16r0u4kqE1GM0BcY%2B1aOQe8ADDfodhwd5MaFVP9OyZyVQNjtH6%2Ff7Oy7tgoGBfNmz%2Fo9Uf4vGedIpdfJjR6gKyLo%2BuqDGtzAm2o%2FjQdGPUu2%2BCTZMhjpVa88t08LzV6AiZGNFT58DTPJD%2F5ZPdpUQN3EBgczsolXfnbsrsEVFg7vGSeyhPW7xmBWN0vC30SpCmlmD8qDBJPL3S%2FuR2pvRTvvqe810XWXwFZkHMZnU74DMJ%2FtjH9ovM7aPJiqlXuO%2BaONS4sQ3QKm%2FRMD6ptpkKFMcjoTOEdJzihFe8%2B4Wmq5zx6%2BLbhUcxA8jpPtNrSuAOZi6wTgJRouO48rITIELcp69YV2wMdstDhB1flPeICRIVYh%2B2x%2Ba6AfeaaDBrIKUTpaaaQXRXxWVPexRQ%2FGJvCLXIxEyC0d9JN1o0Fj0mNci5ScfLwGSjVRCSW5uudKWRMw3PjfzwY6pgELu%2BaYKcbLrbS5yKNxCPcZLN1menwug6G1mOydTcDtMff2c5%2FLL9zjIImw7qp%2BDT6MPk%2Bv%2Bni1vJ8po3nRYw4hUWf6Ad%2FeoFQsVeMP8tejL8R6EwJHzDILthDLSWtWXQjO3WsZEBGMiErr4d3k4UpLf59TNo7h6iH4EHxzomRRboqLae8xC0jEu93gnrk9KlDx8RZk8z5v2WBUVYMQRYnmN0lKpeo3&X-Amz-Signature=0962f07b6b2191f6ebb00175f618b752e8ba609e26ff40885478d22421bc6b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OXK7P5Y%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL%2FO6TcPOQGZp%2BY6K%2F8N09Tpv7gdt6DlrWZ1aFvyaNZAiAiPgEmuk08K76MjGdDXTWJMZWrPnD29jeGY1sQbgz9lyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMkwn7O2sdfojEpgqIKtwDPce05B0CEwx2dtASN2rTIunaQrGm8MWm9l0i2CtWk5y9eBek5Z2uRvf5k%2FGcf8w2hBgZhK4ucRqwj3FOFPXdeidJuNFrh36AWDc41UPxA%2B7rcM8gm3HPMDpOYtDSmGSg8D0q8hubBYkw9h%2FNKp89Px0eQnk0Zj81cnU0rAeen2PDHGEwr8K1mb0i16r0u4kqE1GM0BcY%2B1aOQe8ADDfodhwd5MaFVP9OyZyVQNjtH6%2Ff7Oy7tgoGBfNmz%2Fo9Uf4vGedIpdfJjR6gKyLo%2BuqDGtzAm2o%2FjQdGPUu2%2BCTZMhjpVa88t08LzV6AiZGNFT58DTPJD%2F5ZPdpUQN3EBgczsolXfnbsrsEVFg7vGSeyhPW7xmBWN0vC30SpCmlmD8qDBJPL3S%2FuR2pvRTvvqe810XWXwFZkHMZnU74DMJ%2FtjH9ovM7aPJiqlXuO%2BaONS4sQ3QKm%2FRMD6ptpkKFMcjoTOEdJzihFe8%2B4Wmq5zx6%2BLbhUcxA8jpPtNrSuAOZi6wTgJRouO48rITIELcp69YV2wMdstDhB1flPeICRIVYh%2B2x%2Ba6AfeaaDBrIKUTpaaaQXRXxWVPexRQ%2FGJvCLXIxEyC0d9JN1o0Fj0mNci5ScfLwGSjVRCSW5uudKWRMw3PjfzwY6pgELu%2BaYKcbLrbS5yKNxCPcZLN1menwug6G1mOydTcDtMff2c5%2FLL9zjIImw7qp%2BDT6MPk%2Bv%2Bni1vJ8po3nRYw4hUWf6Ad%2FeoFQsVeMP8tejL8R6EwJHzDILthDLSWtWXQjO3WsZEBGMiErr4d3k4UpLf59TNo7h6iH4EHxzomRRboqLae8xC0jEu93gnrk9KlDx8RZk8z5v2WBUVYMQRYnmN0lKpeo3&X-Amz-Signature=bf92d5361384212764e4c3c5106464ddeb188a3fa7cc100a7fcb45a80c234af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OXK7P5Y%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL%2FO6TcPOQGZp%2BY6K%2F8N09Tpv7gdt6DlrWZ1aFvyaNZAiAiPgEmuk08K76MjGdDXTWJMZWrPnD29jeGY1sQbgz9lyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMkwn7O2sdfojEpgqIKtwDPce05B0CEwx2dtASN2rTIunaQrGm8MWm9l0i2CtWk5y9eBek5Z2uRvf5k%2FGcf8w2hBgZhK4ucRqwj3FOFPXdeidJuNFrh36AWDc41UPxA%2B7rcM8gm3HPMDpOYtDSmGSg8D0q8hubBYkw9h%2FNKp89Px0eQnk0Zj81cnU0rAeen2PDHGEwr8K1mb0i16r0u4kqE1GM0BcY%2B1aOQe8ADDfodhwd5MaFVP9OyZyVQNjtH6%2Ff7Oy7tgoGBfNmz%2Fo9Uf4vGedIpdfJjR6gKyLo%2BuqDGtzAm2o%2FjQdGPUu2%2BCTZMhjpVa88t08LzV6AiZGNFT58DTPJD%2F5ZPdpUQN3EBgczsolXfnbsrsEVFg7vGSeyhPW7xmBWN0vC30SpCmlmD8qDBJPL3S%2FuR2pvRTvvqe810XWXwFZkHMZnU74DMJ%2FtjH9ovM7aPJiqlXuO%2BaONS4sQ3QKm%2FRMD6ptpkKFMcjoTOEdJzihFe8%2B4Wmq5zx6%2BLbhUcxA8jpPtNrSuAOZi6wTgJRouO48rITIELcp69YV2wMdstDhB1flPeICRIVYh%2B2x%2Ba6AfeaaDBrIKUTpaaaQXRXxWVPexRQ%2FGJvCLXIxEyC0d9JN1o0Fj0mNci5ScfLwGSjVRCSW5uudKWRMw3PjfzwY6pgELu%2BaYKcbLrbS5yKNxCPcZLN1menwug6G1mOydTcDtMff2c5%2FLL9zjIImw7qp%2BDT6MPk%2Bv%2Bni1vJ8po3nRYw4hUWf6Ad%2FeoFQsVeMP8tejL8R6EwJHzDILthDLSWtWXQjO3WsZEBGMiErr4d3k4UpLf59TNo7h6iH4EHxzomRRboqLae8xC0jEu93gnrk9KlDx8RZk8z5v2WBUVYMQRYnmN0lKpeo3&X-Amz-Signature=015bf9b044379b6566aa1bac683a0e42347d7dce9fe50d560aa7723e9c16ca13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OXK7P5Y%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL%2FO6TcPOQGZp%2BY6K%2F8N09Tpv7gdt6DlrWZ1aFvyaNZAiAiPgEmuk08K76MjGdDXTWJMZWrPnD29jeGY1sQbgz9lyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMkwn7O2sdfojEpgqIKtwDPce05B0CEwx2dtASN2rTIunaQrGm8MWm9l0i2CtWk5y9eBek5Z2uRvf5k%2FGcf8w2hBgZhK4ucRqwj3FOFPXdeidJuNFrh36AWDc41UPxA%2B7rcM8gm3HPMDpOYtDSmGSg8D0q8hubBYkw9h%2FNKp89Px0eQnk0Zj81cnU0rAeen2PDHGEwr8K1mb0i16r0u4kqE1GM0BcY%2B1aOQe8ADDfodhwd5MaFVP9OyZyVQNjtH6%2Ff7Oy7tgoGBfNmz%2Fo9Uf4vGedIpdfJjR6gKyLo%2BuqDGtzAm2o%2FjQdGPUu2%2BCTZMhjpVa88t08LzV6AiZGNFT58DTPJD%2F5ZPdpUQN3EBgczsolXfnbsrsEVFg7vGSeyhPW7xmBWN0vC30SpCmlmD8qDBJPL3S%2FuR2pvRTvvqe810XWXwFZkHMZnU74DMJ%2FtjH9ovM7aPJiqlXuO%2BaONS4sQ3QKm%2FRMD6ptpkKFMcjoTOEdJzihFe8%2B4Wmq5zx6%2BLbhUcxA8jpPtNrSuAOZi6wTgJRouO48rITIELcp69YV2wMdstDhB1flPeICRIVYh%2B2x%2Ba6AfeaaDBrIKUTpaaaQXRXxWVPexRQ%2FGJvCLXIxEyC0d9JN1o0Fj0mNci5ScfLwGSjVRCSW5uudKWRMw3PjfzwY6pgELu%2BaYKcbLrbS5yKNxCPcZLN1menwug6G1mOydTcDtMff2c5%2FLL9zjIImw7qp%2BDT6MPk%2Bv%2Bni1vJ8po3nRYw4hUWf6Ad%2FeoFQsVeMP8tejL8R6EwJHzDILthDLSWtWXQjO3WsZEBGMiErr4d3k4UpLf59TNo7h6iH4EHxzomRRboqLae8xC0jEu93gnrk9KlDx8RZk8z5v2WBUVYMQRYnmN0lKpeo3&X-Amz-Signature=3c738c098a105ee38d4f806d0fe7dd5e594549c5f8075cf82c810ca6595302be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
