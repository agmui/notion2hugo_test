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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSR2ADM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLu8%2F4Gfk7zyXwu2YJDgFYcbR%2Bu03ydO1C1O54woJRFAiEAhOQnH3oke1D%2Bk%2F%2FUJzOjQKxUGQkSBpH1LEj0d1iBOwMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGsZG1Fojdckduw7CrcA2IQ%2BU%2BrogJG0g9%2FXVefF6jQXgNMyy2LPRvXEp%2F0OPyZ59LbpWzJz5GUKv%2Bg1LHO3lEEHpNCL%2B8gqjkMeDMPVLz5rpMRkAGGlG2jHbI5qY4p96EJRabD6xukCu3DiwaPz4CZRX2THUta1C3HCXywVJIQPHspunyTIoj%2FbnnMOeoUP%2FBpWBvmQpBEws7FKk2TZD42VtVZ67unXTxbNwWkZzXziOFSN6L9nxX8LuFcES3aqnc3dkU2KvbglLwrGP7LHyXO8bi5gzFJ29Ewp9%2FAMUrThoAmldeI1EnjBG0APB%2FyjDrPJcJ2LAzXUfQLoYt4jbJPUL452UhIYRixWmP9mXA6b1LRkXOc6jgmi8qttvucNzEYKzV5L8WzGfdqDSmDiU9a2fTjFuje%2BpMcww6eyzZIhfWLHPizblWlXiTehRpBH%2BdW3jtyZN6x%2BEz%2BrirzMbakAx8wsdjDkaLVCmuOUB%2FtL9gDE0pIZSDH2qMBCNKzw%2BtT07i3yGB6eSDNzjATTRHMdkuzFSc%2FRs2UJyxhSpmDkbxgXxmoyc0hwPT9pGnXQ2KwWWOZkpQXiqZuRH73gzu8v1f4zR8tKpH1u%2BEnKVIB9k8ih6A3qbh2esaV8M5KocBRqtN1IZ%2Bph7EwMNLDwsAGOqUBSt6qcZ%2F2dq1mGylrHNk58PDyg8siNKF5hcDNWM7uTk0jaaHq1iIOhEoqr6TB0CLK89U2DTeKGDqWr4O8L2zXzuOivKNGHbDpIGLSn9Q%2F%2FeUJB3fFjQRdl1m%2BOzguVhBlZBKdeGjSu3L7M%2BA5oDEqPnMJ%2BguMqnTHjeqvKPC5KyeqrUvx2zVAs2PhzHlG17ArEsoPhmcgxnYql%2Bfu79IH6%2B9mUxAP&X-Amz-Signature=e4f0dfd2a7b4d8e2f1b26acb04a353d1db6db636af6b08574599cc31282a7650&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSR2ADM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLu8%2F4Gfk7zyXwu2YJDgFYcbR%2Bu03ydO1C1O54woJRFAiEAhOQnH3oke1D%2Bk%2F%2FUJzOjQKxUGQkSBpH1LEj0d1iBOwMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGsZG1Fojdckduw7CrcA2IQ%2BU%2BrogJG0g9%2FXVefF6jQXgNMyy2LPRvXEp%2F0OPyZ59LbpWzJz5GUKv%2Bg1LHO3lEEHpNCL%2B8gqjkMeDMPVLz5rpMRkAGGlG2jHbI5qY4p96EJRabD6xukCu3DiwaPz4CZRX2THUta1C3HCXywVJIQPHspunyTIoj%2FbnnMOeoUP%2FBpWBvmQpBEws7FKk2TZD42VtVZ67unXTxbNwWkZzXziOFSN6L9nxX8LuFcES3aqnc3dkU2KvbglLwrGP7LHyXO8bi5gzFJ29Ewp9%2FAMUrThoAmldeI1EnjBG0APB%2FyjDrPJcJ2LAzXUfQLoYt4jbJPUL452UhIYRixWmP9mXA6b1LRkXOc6jgmi8qttvucNzEYKzV5L8WzGfdqDSmDiU9a2fTjFuje%2BpMcww6eyzZIhfWLHPizblWlXiTehRpBH%2BdW3jtyZN6x%2BEz%2BrirzMbakAx8wsdjDkaLVCmuOUB%2FtL9gDE0pIZSDH2qMBCNKzw%2BtT07i3yGB6eSDNzjATTRHMdkuzFSc%2FRs2UJyxhSpmDkbxgXxmoyc0hwPT9pGnXQ2KwWWOZkpQXiqZuRH73gzu8v1f4zR8tKpH1u%2BEnKVIB9k8ih6A3qbh2esaV8M5KocBRqtN1IZ%2Bph7EwMNLDwsAGOqUBSt6qcZ%2F2dq1mGylrHNk58PDyg8siNKF5hcDNWM7uTk0jaaHq1iIOhEoqr6TB0CLK89U2DTeKGDqWr4O8L2zXzuOivKNGHbDpIGLSn9Q%2F%2FeUJB3fFjQRdl1m%2BOzguVhBlZBKdeGjSu3L7M%2BA5oDEqPnMJ%2BguMqnTHjeqvKPC5KyeqrUvx2zVAs2PhzHlG17ArEsoPhmcgxnYql%2Bfu79IH6%2B9mUxAP&X-Amz-Signature=942fc065818cdb0d0d66e3292a66c1204675c39544ec33d13a04297198de9fa2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSR2ADM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLu8%2F4Gfk7zyXwu2YJDgFYcbR%2Bu03ydO1C1O54woJRFAiEAhOQnH3oke1D%2Bk%2F%2FUJzOjQKxUGQkSBpH1LEj0d1iBOwMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGsZG1Fojdckduw7CrcA2IQ%2BU%2BrogJG0g9%2FXVefF6jQXgNMyy2LPRvXEp%2F0OPyZ59LbpWzJz5GUKv%2Bg1LHO3lEEHpNCL%2B8gqjkMeDMPVLz5rpMRkAGGlG2jHbI5qY4p96EJRabD6xukCu3DiwaPz4CZRX2THUta1C3HCXywVJIQPHspunyTIoj%2FbnnMOeoUP%2FBpWBvmQpBEws7FKk2TZD42VtVZ67unXTxbNwWkZzXziOFSN6L9nxX8LuFcES3aqnc3dkU2KvbglLwrGP7LHyXO8bi5gzFJ29Ewp9%2FAMUrThoAmldeI1EnjBG0APB%2FyjDrPJcJ2LAzXUfQLoYt4jbJPUL452UhIYRixWmP9mXA6b1LRkXOc6jgmi8qttvucNzEYKzV5L8WzGfdqDSmDiU9a2fTjFuje%2BpMcww6eyzZIhfWLHPizblWlXiTehRpBH%2BdW3jtyZN6x%2BEz%2BrirzMbakAx8wsdjDkaLVCmuOUB%2FtL9gDE0pIZSDH2qMBCNKzw%2BtT07i3yGB6eSDNzjATTRHMdkuzFSc%2FRs2UJyxhSpmDkbxgXxmoyc0hwPT9pGnXQ2KwWWOZkpQXiqZuRH73gzu8v1f4zR8tKpH1u%2BEnKVIB9k8ih6A3qbh2esaV8M5KocBRqtN1IZ%2Bph7EwMNLDwsAGOqUBSt6qcZ%2F2dq1mGylrHNk58PDyg8siNKF5hcDNWM7uTk0jaaHq1iIOhEoqr6TB0CLK89U2DTeKGDqWr4O8L2zXzuOivKNGHbDpIGLSn9Q%2F%2FeUJB3fFjQRdl1m%2BOzguVhBlZBKdeGjSu3L7M%2BA5oDEqPnMJ%2BguMqnTHjeqvKPC5KyeqrUvx2zVAs2PhzHlG17ArEsoPhmcgxnYql%2Bfu79IH6%2B9mUxAP&X-Amz-Signature=940bf112f548c8a9af90f9e3c31fbe9181da3a9e6180c4a8dea603d51e48052b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSR2ADM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLu8%2F4Gfk7zyXwu2YJDgFYcbR%2Bu03ydO1C1O54woJRFAiEAhOQnH3oke1D%2Bk%2F%2FUJzOjQKxUGQkSBpH1LEj0d1iBOwMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGsZG1Fojdckduw7CrcA2IQ%2BU%2BrogJG0g9%2FXVefF6jQXgNMyy2LPRvXEp%2F0OPyZ59LbpWzJz5GUKv%2Bg1LHO3lEEHpNCL%2B8gqjkMeDMPVLz5rpMRkAGGlG2jHbI5qY4p96EJRabD6xukCu3DiwaPz4CZRX2THUta1C3HCXywVJIQPHspunyTIoj%2FbnnMOeoUP%2FBpWBvmQpBEws7FKk2TZD42VtVZ67unXTxbNwWkZzXziOFSN6L9nxX8LuFcES3aqnc3dkU2KvbglLwrGP7LHyXO8bi5gzFJ29Ewp9%2FAMUrThoAmldeI1EnjBG0APB%2FyjDrPJcJ2LAzXUfQLoYt4jbJPUL452UhIYRixWmP9mXA6b1LRkXOc6jgmi8qttvucNzEYKzV5L8WzGfdqDSmDiU9a2fTjFuje%2BpMcww6eyzZIhfWLHPizblWlXiTehRpBH%2BdW3jtyZN6x%2BEz%2BrirzMbakAx8wsdjDkaLVCmuOUB%2FtL9gDE0pIZSDH2qMBCNKzw%2BtT07i3yGB6eSDNzjATTRHMdkuzFSc%2FRs2UJyxhSpmDkbxgXxmoyc0hwPT9pGnXQ2KwWWOZkpQXiqZuRH73gzu8v1f4zR8tKpH1u%2BEnKVIB9k8ih6A3qbh2esaV8M5KocBRqtN1IZ%2Bph7EwMNLDwsAGOqUBSt6qcZ%2F2dq1mGylrHNk58PDyg8siNKF5hcDNWM7uTk0jaaHq1iIOhEoqr6TB0CLK89U2DTeKGDqWr4O8L2zXzuOivKNGHbDpIGLSn9Q%2F%2FeUJB3fFjQRdl1m%2BOzguVhBlZBKdeGjSu3L7M%2BA5oDEqPnMJ%2BguMqnTHjeqvKPC5KyeqrUvx2zVAs2PhzHlG17ArEsoPhmcgxnYql%2Bfu79IH6%2B9mUxAP&X-Amz-Signature=b2d75b81d7781462a29f392d30f1c89b81d22a18d1b3c795e49929000f8dbf00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSR2ADM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLu8%2F4Gfk7zyXwu2YJDgFYcbR%2Bu03ydO1C1O54woJRFAiEAhOQnH3oke1D%2Bk%2F%2FUJzOjQKxUGQkSBpH1LEj0d1iBOwMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGsZG1Fojdckduw7CrcA2IQ%2BU%2BrogJG0g9%2FXVefF6jQXgNMyy2LPRvXEp%2F0OPyZ59LbpWzJz5GUKv%2Bg1LHO3lEEHpNCL%2B8gqjkMeDMPVLz5rpMRkAGGlG2jHbI5qY4p96EJRabD6xukCu3DiwaPz4CZRX2THUta1C3HCXywVJIQPHspunyTIoj%2FbnnMOeoUP%2FBpWBvmQpBEws7FKk2TZD42VtVZ67unXTxbNwWkZzXziOFSN6L9nxX8LuFcES3aqnc3dkU2KvbglLwrGP7LHyXO8bi5gzFJ29Ewp9%2FAMUrThoAmldeI1EnjBG0APB%2FyjDrPJcJ2LAzXUfQLoYt4jbJPUL452UhIYRixWmP9mXA6b1LRkXOc6jgmi8qttvucNzEYKzV5L8WzGfdqDSmDiU9a2fTjFuje%2BpMcww6eyzZIhfWLHPizblWlXiTehRpBH%2BdW3jtyZN6x%2BEz%2BrirzMbakAx8wsdjDkaLVCmuOUB%2FtL9gDE0pIZSDH2qMBCNKzw%2BtT07i3yGB6eSDNzjATTRHMdkuzFSc%2FRs2UJyxhSpmDkbxgXxmoyc0hwPT9pGnXQ2KwWWOZkpQXiqZuRH73gzu8v1f4zR8tKpH1u%2BEnKVIB9k8ih6A3qbh2esaV8M5KocBRqtN1IZ%2Bph7EwMNLDwsAGOqUBSt6qcZ%2F2dq1mGylrHNk58PDyg8siNKF5hcDNWM7uTk0jaaHq1iIOhEoqr6TB0CLK89U2DTeKGDqWr4O8L2zXzuOivKNGHbDpIGLSn9Q%2F%2FeUJB3fFjQRdl1m%2BOzguVhBlZBKdeGjSu3L7M%2BA5oDEqPnMJ%2BguMqnTHjeqvKPC5KyeqrUvx2zVAs2PhzHlG17ArEsoPhmcgxnYql%2Bfu79IH6%2B9mUxAP&X-Amz-Signature=13afbe1a2563fa52e1379aaa6b1450705ebafb1f193969fb5438d96d965c9765&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSR2ADM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLu8%2F4Gfk7zyXwu2YJDgFYcbR%2Bu03ydO1C1O54woJRFAiEAhOQnH3oke1D%2Bk%2F%2FUJzOjQKxUGQkSBpH1LEj0d1iBOwMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGsZG1Fojdckduw7CrcA2IQ%2BU%2BrogJG0g9%2FXVefF6jQXgNMyy2LPRvXEp%2F0OPyZ59LbpWzJz5GUKv%2Bg1LHO3lEEHpNCL%2B8gqjkMeDMPVLz5rpMRkAGGlG2jHbI5qY4p96EJRabD6xukCu3DiwaPz4CZRX2THUta1C3HCXywVJIQPHspunyTIoj%2FbnnMOeoUP%2FBpWBvmQpBEws7FKk2TZD42VtVZ67unXTxbNwWkZzXziOFSN6L9nxX8LuFcES3aqnc3dkU2KvbglLwrGP7LHyXO8bi5gzFJ29Ewp9%2FAMUrThoAmldeI1EnjBG0APB%2FyjDrPJcJ2LAzXUfQLoYt4jbJPUL452UhIYRixWmP9mXA6b1LRkXOc6jgmi8qttvucNzEYKzV5L8WzGfdqDSmDiU9a2fTjFuje%2BpMcww6eyzZIhfWLHPizblWlXiTehRpBH%2BdW3jtyZN6x%2BEz%2BrirzMbakAx8wsdjDkaLVCmuOUB%2FtL9gDE0pIZSDH2qMBCNKzw%2BtT07i3yGB6eSDNzjATTRHMdkuzFSc%2FRs2UJyxhSpmDkbxgXxmoyc0hwPT9pGnXQ2KwWWOZkpQXiqZuRH73gzu8v1f4zR8tKpH1u%2BEnKVIB9k8ih6A3qbh2esaV8M5KocBRqtN1IZ%2Bph7EwMNLDwsAGOqUBSt6qcZ%2F2dq1mGylrHNk58PDyg8siNKF5hcDNWM7uTk0jaaHq1iIOhEoqr6TB0CLK89U2DTeKGDqWr4O8L2zXzuOivKNGHbDpIGLSn9Q%2F%2FeUJB3fFjQRdl1m%2BOzguVhBlZBKdeGjSu3L7M%2BA5oDEqPnMJ%2BguMqnTHjeqvKPC5KyeqrUvx2zVAs2PhzHlG17ArEsoPhmcgxnYql%2Bfu79IH6%2B9mUxAP&X-Amz-Signature=4a3ea2078a4b55f6d75daafc2fcc2246c3c7f68ab1216a80cdc46725a9cc0333&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSR2ADM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLu8%2F4Gfk7zyXwu2YJDgFYcbR%2Bu03ydO1C1O54woJRFAiEAhOQnH3oke1D%2Bk%2F%2FUJzOjQKxUGQkSBpH1LEj0d1iBOwMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGsZG1Fojdckduw7CrcA2IQ%2BU%2BrogJG0g9%2FXVefF6jQXgNMyy2LPRvXEp%2F0OPyZ59LbpWzJz5GUKv%2Bg1LHO3lEEHpNCL%2B8gqjkMeDMPVLz5rpMRkAGGlG2jHbI5qY4p96EJRabD6xukCu3DiwaPz4CZRX2THUta1C3HCXywVJIQPHspunyTIoj%2FbnnMOeoUP%2FBpWBvmQpBEws7FKk2TZD42VtVZ67unXTxbNwWkZzXziOFSN6L9nxX8LuFcES3aqnc3dkU2KvbglLwrGP7LHyXO8bi5gzFJ29Ewp9%2FAMUrThoAmldeI1EnjBG0APB%2FyjDrPJcJ2LAzXUfQLoYt4jbJPUL452UhIYRixWmP9mXA6b1LRkXOc6jgmi8qttvucNzEYKzV5L8WzGfdqDSmDiU9a2fTjFuje%2BpMcww6eyzZIhfWLHPizblWlXiTehRpBH%2BdW3jtyZN6x%2BEz%2BrirzMbakAx8wsdjDkaLVCmuOUB%2FtL9gDE0pIZSDH2qMBCNKzw%2BtT07i3yGB6eSDNzjATTRHMdkuzFSc%2FRs2UJyxhSpmDkbxgXxmoyc0hwPT9pGnXQ2KwWWOZkpQXiqZuRH73gzu8v1f4zR8tKpH1u%2BEnKVIB9k8ih6A3qbh2esaV8M5KocBRqtN1IZ%2Bph7EwMNLDwsAGOqUBSt6qcZ%2F2dq1mGylrHNk58PDyg8siNKF5hcDNWM7uTk0jaaHq1iIOhEoqr6TB0CLK89U2DTeKGDqWr4O8L2zXzuOivKNGHbDpIGLSn9Q%2F%2FeUJB3fFjQRdl1m%2BOzguVhBlZBKdeGjSu3L7M%2BA5oDEqPnMJ%2BguMqnTHjeqvKPC5KyeqrUvx2zVAs2PhzHlG17ArEsoPhmcgxnYql%2Bfu79IH6%2B9mUxAP&X-Amz-Signature=cb16e72b7c64dfa69c15df4ce44a4f443f15d38576582bfd53ce0c244f0222b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSR2ADM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLu8%2F4Gfk7zyXwu2YJDgFYcbR%2Bu03ydO1C1O54woJRFAiEAhOQnH3oke1D%2Bk%2F%2FUJzOjQKxUGQkSBpH1LEj0d1iBOwMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGsZG1Fojdckduw7CrcA2IQ%2BU%2BrogJG0g9%2FXVefF6jQXgNMyy2LPRvXEp%2F0OPyZ59LbpWzJz5GUKv%2Bg1LHO3lEEHpNCL%2B8gqjkMeDMPVLz5rpMRkAGGlG2jHbI5qY4p96EJRabD6xukCu3DiwaPz4CZRX2THUta1C3HCXywVJIQPHspunyTIoj%2FbnnMOeoUP%2FBpWBvmQpBEws7FKk2TZD42VtVZ67unXTxbNwWkZzXziOFSN6L9nxX8LuFcES3aqnc3dkU2KvbglLwrGP7LHyXO8bi5gzFJ29Ewp9%2FAMUrThoAmldeI1EnjBG0APB%2FyjDrPJcJ2LAzXUfQLoYt4jbJPUL452UhIYRixWmP9mXA6b1LRkXOc6jgmi8qttvucNzEYKzV5L8WzGfdqDSmDiU9a2fTjFuje%2BpMcww6eyzZIhfWLHPizblWlXiTehRpBH%2BdW3jtyZN6x%2BEz%2BrirzMbakAx8wsdjDkaLVCmuOUB%2FtL9gDE0pIZSDH2qMBCNKzw%2BtT07i3yGB6eSDNzjATTRHMdkuzFSc%2FRs2UJyxhSpmDkbxgXxmoyc0hwPT9pGnXQ2KwWWOZkpQXiqZuRH73gzu8v1f4zR8tKpH1u%2BEnKVIB9k8ih6A3qbh2esaV8M5KocBRqtN1IZ%2Bph7EwMNLDwsAGOqUBSt6qcZ%2F2dq1mGylrHNk58PDyg8siNKF5hcDNWM7uTk0jaaHq1iIOhEoqr6TB0CLK89U2DTeKGDqWr4O8L2zXzuOivKNGHbDpIGLSn9Q%2F%2FeUJB3fFjQRdl1m%2BOzguVhBlZBKdeGjSu3L7M%2BA5oDEqPnMJ%2BguMqnTHjeqvKPC5KyeqrUvx2zVAs2PhzHlG17ArEsoPhmcgxnYql%2Bfu79IH6%2B9mUxAP&X-Amz-Signature=5540c884876e05b812e8f13669ddefb18d09cbb86176191fb2a99ffa60c0af78&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
