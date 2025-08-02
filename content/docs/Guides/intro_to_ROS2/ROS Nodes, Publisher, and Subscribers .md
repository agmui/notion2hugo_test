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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RN7D6L3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAgY99XMnCohMLsh8RS7e66zQbH%2BZ%2BPesbeJKLJ%2ByEMAiEA1NJJV1Y44BtsimAXyhnCi4IM7MXeEsh5uQ6EInuFC4sqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FeoNUrXxhp6yRHoCrcA6bJqnsuHilVi2EDyBq0pohc1ib8xjivTBuz5RgI2mow%2FVDtf1h%2BIZdiylMjCpmejT2GHPGjNaVkuHqx1mzNspHGoSeqovzLTNpYRoW1leSlEmU%2F2ya14pi6ptEg2JZ4EGZjbYGwwYh0Jgqc964Zo4dRfH1wu6qnSp5XbCnJoVrWNVYT2WnDKgpEliyJwiP6jJFVADLuatGJbnCfM51Ov2AQO8xGkWXDu2hUXSXJ4rjP8gs3nq2wo9HfWd%2FTA49m5e7G2iEwg9c1BbQ3NDPhB2n0381TpYShmP42gc9364a6EVVFHJUB5PLW0iKyS7qVQa7pEQx9o1jiQj5E1FVmQ0DHf7pwJTZbdIa9Y8xFIeu3Fs1D%2FprL3Qy6etxhk9HSBFh%2BrUlZFO%2BjYXo%2BCckGIDN8nJWD8vXNxEQMOxC43nJhAXblEyg5czKVAUwZ%2FymACtTcpUjK1Y3ZRh8DkDQujWQoIz2lM%2Fhp1a2gS6XAHLGpAgmYbS3i2cEtJ%2BZu84qrMUQyRg305xCHltjW4q%2FfzH58fercDJSJ%2FZ4L8d1j%2BybbABN7KqWA7oY7EtLL8qDC8i%2BPUXA072K3ZQt4mBmYzxkGWGHq3dfD%2FxBrxwt%2FdQB1krjMeZ6v2yeFB6O7MKmdtsQGOqUBo8B7V5IB56x7PiqsR4dSEv4q4LP6XqF7gDERkdlYaSIebP8OO2E6z1AmVGIZ1HK9EtfeVRWcLYxsTPijavvX65C9CHW6GhlDpOZg%2FsTrNOJBJxHRUBXE1ONBMKwpYfj%2B9HCTw2PKOSWnUrk30jz9AAoIR9x3mJVdT8fIBTZ9UCjUAyWI6%2BH55sYjaJjTOyu%2F7aeMLT2TtQ%2Fwcz5zQS%2BHiG%2Fbc05V&X-Amz-Signature=e2ab67ba91eed1de2e0d807d23e027bf56d962961eb21a8a054d431fcb0ce6aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RN7D6L3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAgY99XMnCohMLsh8RS7e66zQbH%2BZ%2BPesbeJKLJ%2ByEMAiEA1NJJV1Y44BtsimAXyhnCi4IM7MXeEsh5uQ6EInuFC4sqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FeoNUrXxhp6yRHoCrcA6bJqnsuHilVi2EDyBq0pohc1ib8xjivTBuz5RgI2mow%2FVDtf1h%2BIZdiylMjCpmejT2GHPGjNaVkuHqx1mzNspHGoSeqovzLTNpYRoW1leSlEmU%2F2ya14pi6ptEg2JZ4EGZjbYGwwYh0Jgqc964Zo4dRfH1wu6qnSp5XbCnJoVrWNVYT2WnDKgpEliyJwiP6jJFVADLuatGJbnCfM51Ov2AQO8xGkWXDu2hUXSXJ4rjP8gs3nq2wo9HfWd%2FTA49m5e7G2iEwg9c1BbQ3NDPhB2n0381TpYShmP42gc9364a6EVVFHJUB5PLW0iKyS7qVQa7pEQx9o1jiQj5E1FVmQ0DHf7pwJTZbdIa9Y8xFIeu3Fs1D%2FprL3Qy6etxhk9HSBFh%2BrUlZFO%2BjYXo%2BCckGIDN8nJWD8vXNxEQMOxC43nJhAXblEyg5czKVAUwZ%2FymACtTcpUjK1Y3ZRh8DkDQujWQoIz2lM%2Fhp1a2gS6XAHLGpAgmYbS3i2cEtJ%2BZu84qrMUQyRg305xCHltjW4q%2FfzH58fercDJSJ%2FZ4L8d1j%2BybbABN7KqWA7oY7EtLL8qDC8i%2BPUXA072K3ZQt4mBmYzxkGWGHq3dfD%2FxBrxwt%2FdQB1krjMeZ6v2yeFB6O7MKmdtsQGOqUBo8B7V5IB56x7PiqsR4dSEv4q4LP6XqF7gDERkdlYaSIebP8OO2E6z1AmVGIZ1HK9EtfeVRWcLYxsTPijavvX65C9CHW6GhlDpOZg%2FsTrNOJBJxHRUBXE1ONBMKwpYfj%2B9HCTw2PKOSWnUrk30jz9AAoIR9x3mJVdT8fIBTZ9UCjUAyWI6%2BH55sYjaJjTOyu%2F7aeMLT2TtQ%2Fwcz5zQS%2BHiG%2Fbc05V&X-Amz-Signature=e91dae8149d02fcaa8d5bc16c5d67f9f2f49b044ebec2128c479cbb737cd2551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RN7D6L3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAgY99XMnCohMLsh8RS7e66zQbH%2BZ%2BPesbeJKLJ%2ByEMAiEA1NJJV1Y44BtsimAXyhnCi4IM7MXeEsh5uQ6EInuFC4sqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FeoNUrXxhp6yRHoCrcA6bJqnsuHilVi2EDyBq0pohc1ib8xjivTBuz5RgI2mow%2FVDtf1h%2BIZdiylMjCpmejT2GHPGjNaVkuHqx1mzNspHGoSeqovzLTNpYRoW1leSlEmU%2F2ya14pi6ptEg2JZ4EGZjbYGwwYh0Jgqc964Zo4dRfH1wu6qnSp5XbCnJoVrWNVYT2WnDKgpEliyJwiP6jJFVADLuatGJbnCfM51Ov2AQO8xGkWXDu2hUXSXJ4rjP8gs3nq2wo9HfWd%2FTA49m5e7G2iEwg9c1BbQ3NDPhB2n0381TpYShmP42gc9364a6EVVFHJUB5PLW0iKyS7qVQa7pEQx9o1jiQj5E1FVmQ0DHf7pwJTZbdIa9Y8xFIeu3Fs1D%2FprL3Qy6etxhk9HSBFh%2BrUlZFO%2BjYXo%2BCckGIDN8nJWD8vXNxEQMOxC43nJhAXblEyg5czKVAUwZ%2FymACtTcpUjK1Y3ZRh8DkDQujWQoIz2lM%2Fhp1a2gS6XAHLGpAgmYbS3i2cEtJ%2BZu84qrMUQyRg305xCHltjW4q%2FfzH58fercDJSJ%2FZ4L8d1j%2BybbABN7KqWA7oY7EtLL8qDC8i%2BPUXA072K3ZQt4mBmYzxkGWGHq3dfD%2FxBrxwt%2FdQB1krjMeZ6v2yeFB6O7MKmdtsQGOqUBo8B7V5IB56x7PiqsR4dSEv4q4LP6XqF7gDERkdlYaSIebP8OO2E6z1AmVGIZ1HK9EtfeVRWcLYxsTPijavvX65C9CHW6GhlDpOZg%2FsTrNOJBJxHRUBXE1ONBMKwpYfj%2B9HCTw2PKOSWnUrk30jz9AAoIR9x3mJVdT8fIBTZ9UCjUAyWI6%2BH55sYjaJjTOyu%2F7aeMLT2TtQ%2Fwcz5zQS%2BHiG%2Fbc05V&X-Amz-Signature=634aa629b0f60e4af6ff5856b01516579f6172df2346a4237faacbb82588a3cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RN7D6L3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAgY99XMnCohMLsh8RS7e66zQbH%2BZ%2BPesbeJKLJ%2ByEMAiEA1NJJV1Y44BtsimAXyhnCi4IM7MXeEsh5uQ6EInuFC4sqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FeoNUrXxhp6yRHoCrcA6bJqnsuHilVi2EDyBq0pohc1ib8xjivTBuz5RgI2mow%2FVDtf1h%2BIZdiylMjCpmejT2GHPGjNaVkuHqx1mzNspHGoSeqovzLTNpYRoW1leSlEmU%2F2ya14pi6ptEg2JZ4EGZjbYGwwYh0Jgqc964Zo4dRfH1wu6qnSp5XbCnJoVrWNVYT2WnDKgpEliyJwiP6jJFVADLuatGJbnCfM51Ov2AQO8xGkWXDu2hUXSXJ4rjP8gs3nq2wo9HfWd%2FTA49m5e7G2iEwg9c1BbQ3NDPhB2n0381TpYShmP42gc9364a6EVVFHJUB5PLW0iKyS7qVQa7pEQx9o1jiQj5E1FVmQ0DHf7pwJTZbdIa9Y8xFIeu3Fs1D%2FprL3Qy6etxhk9HSBFh%2BrUlZFO%2BjYXo%2BCckGIDN8nJWD8vXNxEQMOxC43nJhAXblEyg5czKVAUwZ%2FymACtTcpUjK1Y3ZRh8DkDQujWQoIz2lM%2Fhp1a2gS6XAHLGpAgmYbS3i2cEtJ%2BZu84qrMUQyRg305xCHltjW4q%2FfzH58fercDJSJ%2FZ4L8d1j%2BybbABN7KqWA7oY7EtLL8qDC8i%2BPUXA072K3ZQt4mBmYzxkGWGHq3dfD%2FxBrxwt%2FdQB1krjMeZ6v2yeFB6O7MKmdtsQGOqUBo8B7V5IB56x7PiqsR4dSEv4q4LP6XqF7gDERkdlYaSIebP8OO2E6z1AmVGIZ1HK9EtfeVRWcLYxsTPijavvX65C9CHW6GhlDpOZg%2FsTrNOJBJxHRUBXE1ONBMKwpYfj%2B9HCTw2PKOSWnUrk30jz9AAoIR9x3mJVdT8fIBTZ9UCjUAyWI6%2BH55sYjaJjTOyu%2F7aeMLT2TtQ%2Fwcz5zQS%2BHiG%2Fbc05V&X-Amz-Signature=d04ea9c2c8a8cbaf615396fbed75b41b14dea2885f0e0c537ee6a5afc7db7713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RN7D6L3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAgY99XMnCohMLsh8RS7e66zQbH%2BZ%2BPesbeJKLJ%2ByEMAiEA1NJJV1Y44BtsimAXyhnCi4IM7MXeEsh5uQ6EInuFC4sqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FeoNUrXxhp6yRHoCrcA6bJqnsuHilVi2EDyBq0pohc1ib8xjivTBuz5RgI2mow%2FVDtf1h%2BIZdiylMjCpmejT2GHPGjNaVkuHqx1mzNspHGoSeqovzLTNpYRoW1leSlEmU%2F2ya14pi6ptEg2JZ4EGZjbYGwwYh0Jgqc964Zo4dRfH1wu6qnSp5XbCnJoVrWNVYT2WnDKgpEliyJwiP6jJFVADLuatGJbnCfM51Ov2AQO8xGkWXDu2hUXSXJ4rjP8gs3nq2wo9HfWd%2FTA49m5e7G2iEwg9c1BbQ3NDPhB2n0381TpYShmP42gc9364a6EVVFHJUB5PLW0iKyS7qVQa7pEQx9o1jiQj5E1FVmQ0DHf7pwJTZbdIa9Y8xFIeu3Fs1D%2FprL3Qy6etxhk9HSBFh%2BrUlZFO%2BjYXo%2BCckGIDN8nJWD8vXNxEQMOxC43nJhAXblEyg5czKVAUwZ%2FymACtTcpUjK1Y3ZRh8DkDQujWQoIz2lM%2Fhp1a2gS6XAHLGpAgmYbS3i2cEtJ%2BZu84qrMUQyRg305xCHltjW4q%2FfzH58fercDJSJ%2FZ4L8d1j%2BybbABN7KqWA7oY7EtLL8qDC8i%2BPUXA072K3ZQt4mBmYzxkGWGHq3dfD%2FxBrxwt%2FdQB1krjMeZ6v2yeFB6O7MKmdtsQGOqUBo8B7V5IB56x7PiqsR4dSEv4q4LP6XqF7gDERkdlYaSIebP8OO2E6z1AmVGIZ1HK9EtfeVRWcLYxsTPijavvX65C9CHW6GhlDpOZg%2FsTrNOJBJxHRUBXE1ONBMKwpYfj%2B9HCTw2PKOSWnUrk30jz9AAoIR9x3mJVdT8fIBTZ9UCjUAyWI6%2BH55sYjaJjTOyu%2F7aeMLT2TtQ%2Fwcz5zQS%2BHiG%2Fbc05V&X-Amz-Signature=fc0af0f2bb8d0baa3924c23bdaaca647ded9a3900072475dd565c79ac997db30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RN7D6L3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAgY99XMnCohMLsh8RS7e66zQbH%2BZ%2BPesbeJKLJ%2ByEMAiEA1NJJV1Y44BtsimAXyhnCi4IM7MXeEsh5uQ6EInuFC4sqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FeoNUrXxhp6yRHoCrcA6bJqnsuHilVi2EDyBq0pohc1ib8xjivTBuz5RgI2mow%2FVDtf1h%2BIZdiylMjCpmejT2GHPGjNaVkuHqx1mzNspHGoSeqovzLTNpYRoW1leSlEmU%2F2ya14pi6ptEg2JZ4EGZjbYGwwYh0Jgqc964Zo4dRfH1wu6qnSp5XbCnJoVrWNVYT2WnDKgpEliyJwiP6jJFVADLuatGJbnCfM51Ov2AQO8xGkWXDu2hUXSXJ4rjP8gs3nq2wo9HfWd%2FTA49m5e7G2iEwg9c1BbQ3NDPhB2n0381TpYShmP42gc9364a6EVVFHJUB5PLW0iKyS7qVQa7pEQx9o1jiQj5E1FVmQ0DHf7pwJTZbdIa9Y8xFIeu3Fs1D%2FprL3Qy6etxhk9HSBFh%2BrUlZFO%2BjYXo%2BCckGIDN8nJWD8vXNxEQMOxC43nJhAXblEyg5czKVAUwZ%2FymACtTcpUjK1Y3ZRh8DkDQujWQoIz2lM%2Fhp1a2gS6XAHLGpAgmYbS3i2cEtJ%2BZu84qrMUQyRg305xCHltjW4q%2FfzH58fercDJSJ%2FZ4L8d1j%2BybbABN7KqWA7oY7EtLL8qDC8i%2BPUXA072K3ZQt4mBmYzxkGWGHq3dfD%2FxBrxwt%2FdQB1krjMeZ6v2yeFB6O7MKmdtsQGOqUBo8B7V5IB56x7PiqsR4dSEv4q4LP6XqF7gDERkdlYaSIebP8OO2E6z1AmVGIZ1HK9EtfeVRWcLYxsTPijavvX65C9CHW6GhlDpOZg%2FsTrNOJBJxHRUBXE1ONBMKwpYfj%2B9HCTw2PKOSWnUrk30jz9AAoIR9x3mJVdT8fIBTZ9UCjUAyWI6%2BH55sYjaJjTOyu%2F7aeMLT2TtQ%2Fwcz5zQS%2BHiG%2Fbc05V&X-Amz-Signature=95f99a8db26c2d3e52a633027576bea80ddd66b507902707d9c7e3ca619da7bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RN7D6L3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAgY99XMnCohMLsh8RS7e66zQbH%2BZ%2BPesbeJKLJ%2ByEMAiEA1NJJV1Y44BtsimAXyhnCi4IM7MXeEsh5uQ6EInuFC4sqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FeoNUrXxhp6yRHoCrcA6bJqnsuHilVi2EDyBq0pohc1ib8xjivTBuz5RgI2mow%2FVDtf1h%2BIZdiylMjCpmejT2GHPGjNaVkuHqx1mzNspHGoSeqovzLTNpYRoW1leSlEmU%2F2ya14pi6ptEg2JZ4EGZjbYGwwYh0Jgqc964Zo4dRfH1wu6qnSp5XbCnJoVrWNVYT2WnDKgpEliyJwiP6jJFVADLuatGJbnCfM51Ov2AQO8xGkWXDu2hUXSXJ4rjP8gs3nq2wo9HfWd%2FTA49m5e7G2iEwg9c1BbQ3NDPhB2n0381TpYShmP42gc9364a6EVVFHJUB5PLW0iKyS7qVQa7pEQx9o1jiQj5E1FVmQ0DHf7pwJTZbdIa9Y8xFIeu3Fs1D%2FprL3Qy6etxhk9HSBFh%2BrUlZFO%2BjYXo%2BCckGIDN8nJWD8vXNxEQMOxC43nJhAXblEyg5czKVAUwZ%2FymACtTcpUjK1Y3ZRh8DkDQujWQoIz2lM%2Fhp1a2gS6XAHLGpAgmYbS3i2cEtJ%2BZu84qrMUQyRg305xCHltjW4q%2FfzH58fercDJSJ%2FZ4L8d1j%2BybbABN7KqWA7oY7EtLL8qDC8i%2BPUXA072K3ZQt4mBmYzxkGWGHq3dfD%2FxBrxwt%2FdQB1krjMeZ6v2yeFB6O7MKmdtsQGOqUBo8B7V5IB56x7PiqsR4dSEv4q4LP6XqF7gDERkdlYaSIebP8OO2E6z1AmVGIZ1HK9EtfeVRWcLYxsTPijavvX65C9CHW6GhlDpOZg%2FsTrNOJBJxHRUBXE1ONBMKwpYfj%2B9HCTw2PKOSWnUrk30jz9AAoIR9x3mJVdT8fIBTZ9UCjUAyWI6%2BH55sYjaJjTOyu%2F7aeMLT2TtQ%2Fwcz5zQS%2BHiG%2Fbc05V&X-Amz-Signature=2c5622c97e47e6768b64e929bd064b46cacc3813a3d87318516366e150f5762e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RN7D6L3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAgY99XMnCohMLsh8RS7e66zQbH%2BZ%2BPesbeJKLJ%2ByEMAiEA1NJJV1Y44BtsimAXyhnCi4IM7MXeEsh5uQ6EInuFC4sqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FeoNUrXxhp6yRHoCrcA6bJqnsuHilVi2EDyBq0pohc1ib8xjivTBuz5RgI2mow%2FVDtf1h%2BIZdiylMjCpmejT2GHPGjNaVkuHqx1mzNspHGoSeqovzLTNpYRoW1leSlEmU%2F2ya14pi6ptEg2JZ4EGZjbYGwwYh0Jgqc964Zo4dRfH1wu6qnSp5XbCnJoVrWNVYT2WnDKgpEliyJwiP6jJFVADLuatGJbnCfM51Ov2AQO8xGkWXDu2hUXSXJ4rjP8gs3nq2wo9HfWd%2FTA49m5e7G2iEwg9c1BbQ3NDPhB2n0381TpYShmP42gc9364a6EVVFHJUB5PLW0iKyS7qVQa7pEQx9o1jiQj5E1FVmQ0DHf7pwJTZbdIa9Y8xFIeu3Fs1D%2FprL3Qy6etxhk9HSBFh%2BrUlZFO%2BjYXo%2BCckGIDN8nJWD8vXNxEQMOxC43nJhAXblEyg5czKVAUwZ%2FymACtTcpUjK1Y3ZRh8DkDQujWQoIz2lM%2Fhp1a2gS6XAHLGpAgmYbS3i2cEtJ%2BZu84qrMUQyRg305xCHltjW4q%2FfzH58fercDJSJ%2FZ4L8d1j%2BybbABN7KqWA7oY7EtLL8qDC8i%2BPUXA072K3ZQt4mBmYzxkGWGHq3dfD%2FxBrxwt%2FdQB1krjMeZ6v2yeFB6O7MKmdtsQGOqUBo8B7V5IB56x7PiqsR4dSEv4q4LP6XqF7gDERkdlYaSIebP8OO2E6z1AmVGIZ1HK9EtfeVRWcLYxsTPijavvX65C9CHW6GhlDpOZg%2FsTrNOJBJxHRUBXE1ONBMKwpYfj%2B9HCTw2PKOSWnUrk30jz9AAoIR9x3mJVdT8fIBTZ9UCjUAyWI6%2BH55sYjaJjTOyu%2F7aeMLT2TtQ%2Fwcz5zQS%2BHiG%2Fbc05V&X-Amz-Signature=940be4507f7ced8c4f63858e431a162aec040e7506a270724a1cb388dd4de2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
