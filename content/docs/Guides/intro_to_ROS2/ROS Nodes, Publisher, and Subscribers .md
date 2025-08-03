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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTMSYCS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO24hKMxtAyKbWU9SKausAgeg92IeGjzKkums8c3NLtAiEA6dGakxn3PCu7ZhbZOZ7HbU6NPj6swHflqndw4CkBk2Yq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDv1pv4Rtbo%2BIcmhKCrcA%2FzRy5arOs4gmfA9vPfgbrErgyGS4pDbEYpji5kUbZMhBo1kO6%2FoiffUd%2Bq7GgNf3N38EgEC1c1t9TjIovURfwArxWMSOYGmrAQc0%2FUqZW1n4CTxzUlkwf8qpgQHte4q6Xk%2BqxmatBRVLDs6%2FK7YENXUPnbJD9lqfsb4G5WR5pXsCCQrR1MMr5j%2FMJu81h54J6hTDwihNoXXJfjXgcB1XV3%2BE0Sgb0L4YXTiSZyMnXdk2TFgmCyqSXFnAb1r%2FRR9UmvCWoLDG1NqtOwTQxJWwewjZoFEcaAchrUYDrEOXduFIYZzQuQJD7t%2F69R7A0YAezHyUvL6jILnM9seSART21rSEe1nsMyI4Y1JIt2ti3uaL44YnwNzSgVbfDHv4oRNu6WDNIwLXO7m08XQH0TO36E9mI4eqqkQhCF4jEYDgVCp6ciqijTV1W1w7bBdUSzmFd52bBXc9ruUSBtSAGhNO0PnVA2TRt0ggzIruMiDTUB5Zo%2FEyHhhRgIMRu6zolndSUOzWKVvGTI72U3dvH2JxgwVYY4sqbp0bmffJrUwNqS0MnbeR0rEybd8IKILey%2FmQYQCKiNV5ByJs%2BcqMfR6sC6SaD%2FpXlR4uDQDEOcdmcr5cEqH393r54l5PoCLMJzAvMQGOqUBCs%2FeRfmcftQAEAWEfAl15awlGXpM499qbvO6KrqDLNl2iUa931YvrQDQl%2F7TOSwBdgL2OGYMWsLDvLz%2BFn85VylTM1%2BrA8g%2BDs%2FsPn4XRDexvILSROVXdXPcic%2FD%2Fw164FuAJjB9I5%2FP%2FLS03NoQG%2FHiNmxKt5m1WTHTUfNdgE0gZd8MKlnWlrED09pJUU1ghtfJ1hdEpx6rJ1z7Z4EtRPkEn07O&X-Amz-Signature=86b59cf1273e53435233ac4f432fda4507ca59a945cbbde2cfe946a60abc8091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTMSYCS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO24hKMxtAyKbWU9SKausAgeg92IeGjzKkums8c3NLtAiEA6dGakxn3PCu7ZhbZOZ7HbU6NPj6swHflqndw4CkBk2Yq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDv1pv4Rtbo%2BIcmhKCrcA%2FzRy5arOs4gmfA9vPfgbrErgyGS4pDbEYpji5kUbZMhBo1kO6%2FoiffUd%2Bq7GgNf3N38EgEC1c1t9TjIovURfwArxWMSOYGmrAQc0%2FUqZW1n4CTxzUlkwf8qpgQHte4q6Xk%2BqxmatBRVLDs6%2FK7YENXUPnbJD9lqfsb4G5WR5pXsCCQrR1MMr5j%2FMJu81h54J6hTDwihNoXXJfjXgcB1XV3%2BE0Sgb0L4YXTiSZyMnXdk2TFgmCyqSXFnAb1r%2FRR9UmvCWoLDG1NqtOwTQxJWwewjZoFEcaAchrUYDrEOXduFIYZzQuQJD7t%2F69R7A0YAezHyUvL6jILnM9seSART21rSEe1nsMyI4Y1JIt2ti3uaL44YnwNzSgVbfDHv4oRNu6WDNIwLXO7m08XQH0TO36E9mI4eqqkQhCF4jEYDgVCp6ciqijTV1W1w7bBdUSzmFd52bBXc9ruUSBtSAGhNO0PnVA2TRt0ggzIruMiDTUB5Zo%2FEyHhhRgIMRu6zolndSUOzWKVvGTI72U3dvH2JxgwVYY4sqbp0bmffJrUwNqS0MnbeR0rEybd8IKILey%2FmQYQCKiNV5ByJs%2BcqMfR6sC6SaD%2FpXlR4uDQDEOcdmcr5cEqH393r54l5PoCLMJzAvMQGOqUBCs%2FeRfmcftQAEAWEfAl15awlGXpM499qbvO6KrqDLNl2iUa931YvrQDQl%2F7TOSwBdgL2OGYMWsLDvLz%2BFn85VylTM1%2BrA8g%2BDs%2FsPn4XRDexvILSROVXdXPcic%2FD%2Fw164FuAJjB9I5%2FP%2FLS03NoQG%2FHiNmxKt5m1WTHTUfNdgE0gZd8MKlnWlrED09pJUU1ghtfJ1hdEpx6rJ1z7Z4EtRPkEn07O&X-Amz-Signature=cb069fa5e3eff012524ef7bcd0da89ab9c44e23a40aa75cfba49719e668507d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTMSYCS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO24hKMxtAyKbWU9SKausAgeg92IeGjzKkums8c3NLtAiEA6dGakxn3PCu7ZhbZOZ7HbU6NPj6swHflqndw4CkBk2Yq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDv1pv4Rtbo%2BIcmhKCrcA%2FzRy5arOs4gmfA9vPfgbrErgyGS4pDbEYpji5kUbZMhBo1kO6%2FoiffUd%2Bq7GgNf3N38EgEC1c1t9TjIovURfwArxWMSOYGmrAQc0%2FUqZW1n4CTxzUlkwf8qpgQHte4q6Xk%2BqxmatBRVLDs6%2FK7YENXUPnbJD9lqfsb4G5WR5pXsCCQrR1MMr5j%2FMJu81h54J6hTDwihNoXXJfjXgcB1XV3%2BE0Sgb0L4YXTiSZyMnXdk2TFgmCyqSXFnAb1r%2FRR9UmvCWoLDG1NqtOwTQxJWwewjZoFEcaAchrUYDrEOXduFIYZzQuQJD7t%2F69R7A0YAezHyUvL6jILnM9seSART21rSEe1nsMyI4Y1JIt2ti3uaL44YnwNzSgVbfDHv4oRNu6WDNIwLXO7m08XQH0TO36E9mI4eqqkQhCF4jEYDgVCp6ciqijTV1W1w7bBdUSzmFd52bBXc9ruUSBtSAGhNO0PnVA2TRt0ggzIruMiDTUB5Zo%2FEyHhhRgIMRu6zolndSUOzWKVvGTI72U3dvH2JxgwVYY4sqbp0bmffJrUwNqS0MnbeR0rEybd8IKILey%2FmQYQCKiNV5ByJs%2BcqMfR6sC6SaD%2FpXlR4uDQDEOcdmcr5cEqH393r54l5PoCLMJzAvMQGOqUBCs%2FeRfmcftQAEAWEfAl15awlGXpM499qbvO6KrqDLNl2iUa931YvrQDQl%2F7TOSwBdgL2OGYMWsLDvLz%2BFn85VylTM1%2BrA8g%2BDs%2FsPn4XRDexvILSROVXdXPcic%2FD%2Fw164FuAJjB9I5%2FP%2FLS03NoQG%2FHiNmxKt5m1WTHTUfNdgE0gZd8MKlnWlrED09pJUU1ghtfJ1hdEpx6rJ1z7Z4EtRPkEn07O&X-Amz-Signature=2f4017879c6804bbfbf49a82e62f38f063f9e64d76e241f2d54fbb08387d40d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTMSYCS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO24hKMxtAyKbWU9SKausAgeg92IeGjzKkums8c3NLtAiEA6dGakxn3PCu7ZhbZOZ7HbU6NPj6swHflqndw4CkBk2Yq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDv1pv4Rtbo%2BIcmhKCrcA%2FzRy5arOs4gmfA9vPfgbrErgyGS4pDbEYpji5kUbZMhBo1kO6%2FoiffUd%2Bq7GgNf3N38EgEC1c1t9TjIovURfwArxWMSOYGmrAQc0%2FUqZW1n4CTxzUlkwf8qpgQHte4q6Xk%2BqxmatBRVLDs6%2FK7YENXUPnbJD9lqfsb4G5WR5pXsCCQrR1MMr5j%2FMJu81h54J6hTDwihNoXXJfjXgcB1XV3%2BE0Sgb0L4YXTiSZyMnXdk2TFgmCyqSXFnAb1r%2FRR9UmvCWoLDG1NqtOwTQxJWwewjZoFEcaAchrUYDrEOXduFIYZzQuQJD7t%2F69R7A0YAezHyUvL6jILnM9seSART21rSEe1nsMyI4Y1JIt2ti3uaL44YnwNzSgVbfDHv4oRNu6WDNIwLXO7m08XQH0TO36E9mI4eqqkQhCF4jEYDgVCp6ciqijTV1W1w7bBdUSzmFd52bBXc9ruUSBtSAGhNO0PnVA2TRt0ggzIruMiDTUB5Zo%2FEyHhhRgIMRu6zolndSUOzWKVvGTI72U3dvH2JxgwVYY4sqbp0bmffJrUwNqS0MnbeR0rEybd8IKILey%2FmQYQCKiNV5ByJs%2BcqMfR6sC6SaD%2FpXlR4uDQDEOcdmcr5cEqH393r54l5PoCLMJzAvMQGOqUBCs%2FeRfmcftQAEAWEfAl15awlGXpM499qbvO6KrqDLNl2iUa931YvrQDQl%2F7TOSwBdgL2OGYMWsLDvLz%2BFn85VylTM1%2BrA8g%2BDs%2FsPn4XRDexvILSROVXdXPcic%2FD%2Fw164FuAJjB9I5%2FP%2FLS03NoQG%2FHiNmxKt5m1WTHTUfNdgE0gZd8MKlnWlrED09pJUU1ghtfJ1hdEpx6rJ1z7Z4EtRPkEn07O&X-Amz-Signature=13c76797de995a49fcfbe2f172294f4c489cb3de9038dfd7d582e46c794ad3f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTMSYCS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO24hKMxtAyKbWU9SKausAgeg92IeGjzKkums8c3NLtAiEA6dGakxn3PCu7ZhbZOZ7HbU6NPj6swHflqndw4CkBk2Yq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDv1pv4Rtbo%2BIcmhKCrcA%2FzRy5arOs4gmfA9vPfgbrErgyGS4pDbEYpji5kUbZMhBo1kO6%2FoiffUd%2Bq7GgNf3N38EgEC1c1t9TjIovURfwArxWMSOYGmrAQc0%2FUqZW1n4CTxzUlkwf8qpgQHte4q6Xk%2BqxmatBRVLDs6%2FK7YENXUPnbJD9lqfsb4G5WR5pXsCCQrR1MMr5j%2FMJu81h54J6hTDwihNoXXJfjXgcB1XV3%2BE0Sgb0L4YXTiSZyMnXdk2TFgmCyqSXFnAb1r%2FRR9UmvCWoLDG1NqtOwTQxJWwewjZoFEcaAchrUYDrEOXduFIYZzQuQJD7t%2F69R7A0YAezHyUvL6jILnM9seSART21rSEe1nsMyI4Y1JIt2ti3uaL44YnwNzSgVbfDHv4oRNu6WDNIwLXO7m08XQH0TO36E9mI4eqqkQhCF4jEYDgVCp6ciqijTV1W1w7bBdUSzmFd52bBXc9ruUSBtSAGhNO0PnVA2TRt0ggzIruMiDTUB5Zo%2FEyHhhRgIMRu6zolndSUOzWKVvGTI72U3dvH2JxgwVYY4sqbp0bmffJrUwNqS0MnbeR0rEybd8IKILey%2FmQYQCKiNV5ByJs%2BcqMfR6sC6SaD%2FpXlR4uDQDEOcdmcr5cEqH393r54l5PoCLMJzAvMQGOqUBCs%2FeRfmcftQAEAWEfAl15awlGXpM499qbvO6KrqDLNl2iUa931YvrQDQl%2F7TOSwBdgL2OGYMWsLDvLz%2BFn85VylTM1%2BrA8g%2BDs%2FsPn4XRDexvILSROVXdXPcic%2FD%2Fw164FuAJjB9I5%2FP%2FLS03NoQG%2FHiNmxKt5m1WTHTUfNdgE0gZd8MKlnWlrED09pJUU1ghtfJ1hdEpx6rJ1z7Z4EtRPkEn07O&X-Amz-Signature=995bfe49453dfd943b993f6d40a7c7f87cc1cd0c7417e1c1ad5b75337045722c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTMSYCS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO24hKMxtAyKbWU9SKausAgeg92IeGjzKkums8c3NLtAiEA6dGakxn3PCu7ZhbZOZ7HbU6NPj6swHflqndw4CkBk2Yq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDv1pv4Rtbo%2BIcmhKCrcA%2FzRy5arOs4gmfA9vPfgbrErgyGS4pDbEYpji5kUbZMhBo1kO6%2FoiffUd%2Bq7GgNf3N38EgEC1c1t9TjIovURfwArxWMSOYGmrAQc0%2FUqZW1n4CTxzUlkwf8qpgQHte4q6Xk%2BqxmatBRVLDs6%2FK7YENXUPnbJD9lqfsb4G5WR5pXsCCQrR1MMr5j%2FMJu81h54J6hTDwihNoXXJfjXgcB1XV3%2BE0Sgb0L4YXTiSZyMnXdk2TFgmCyqSXFnAb1r%2FRR9UmvCWoLDG1NqtOwTQxJWwewjZoFEcaAchrUYDrEOXduFIYZzQuQJD7t%2F69R7A0YAezHyUvL6jILnM9seSART21rSEe1nsMyI4Y1JIt2ti3uaL44YnwNzSgVbfDHv4oRNu6WDNIwLXO7m08XQH0TO36E9mI4eqqkQhCF4jEYDgVCp6ciqijTV1W1w7bBdUSzmFd52bBXc9ruUSBtSAGhNO0PnVA2TRt0ggzIruMiDTUB5Zo%2FEyHhhRgIMRu6zolndSUOzWKVvGTI72U3dvH2JxgwVYY4sqbp0bmffJrUwNqS0MnbeR0rEybd8IKILey%2FmQYQCKiNV5ByJs%2BcqMfR6sC6SaD%2FpXlR4uDQDEOcdmcr5cEqH393r54l5PoCLMJzAvMQGOqUBCs%2FeRfmcftQAEAWEfAl15awlGXpM499qbvO6KrqDLNl2iUa931YvrQDQl%2F7TOSwBdgL2OGYMWsLDvLz%2BFn85VylTM1%2BrA8g%2BDs%2FsPn4XRDexvILSROVXdXPcic%2FD%2Fw164FuAJjB9I5%2FP%2FLS03NoQG%2FHiNmxKt5m1WTHTUfNdgE0gZd8MKlnWlrED09pJUU1ghtfJ1hdEpx6rJ1z7Z4EtRPkEn07O&X-Amz-Signature=0da29e5aa86863d4a60db021f64443886b90b63fc46e9929afb42137df856e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTMSYCS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO24hKMxtAyKbWU9SKausAgeg92IeGjzKkums8c3NLtAiEA6dGakxn3PCu7ZhbZOZ7HbU6NPj6swHflqndw4CkBk2Yq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDv1pv4Rtbo%2BIcmhKCrcA%2FzRy5arOs4gmfA9vPfgbrErgyGS4pDbEYpji5kUbZMhBo1kO6%2FoiffUd%2Bq7GgNf3N38EgEC1c1t9TjIovURfwArxWMSOYGmrAQc0%2FUqZW1n4CTxzUlkwf8qpgQHte4q6Xk%2BqxmatBRVLDs6%2FK7YENXUPnbJD9lqfsb4G5WR5pXsCCQrR1MMr5j%2FMJu81h54J6hTDwihNoXXJfjXgcB1XV3%2BE0Sgb0L4YXTiSZyMnXdk2TFgmCyqSXFnAb1r%2FRR9UmvCWoLDG1NqtOwTQxJWwewjZoFEcaAchrUYDrEOXduFIYZzQuQJD7t%2F69R7A0YAezHyUvL6jILnM9seSART21rSEe1nsMyI4Y1JIt2ti3uaL44YnwNzSgVbfDHv4oRNu6WDNIwLXO7m08XQH0TO36E9mI4eqqkQhCF4jEYDgVCp6ciqijTV1W1w7bBdUSzmFd52bBXc9ruUSBtSAGhNO0PnVA2TRt0ggzIruMiDTUB5Zo%2FEyHhhRgIMRu6zolndSUOzWKVvGTI72U3dvH2JxgwVYY4sqbp0bmffJrUwNqS0MnbeR0rEybd8IKILey%2FmQYQCKiNV5ByJs%2BcqMfR6sC6SaD%2FpXlR4uDQDEOcdmcr5cEqH393r54l5PoCLMJzAvMQGOqUBCs%2FeRfmcftQAEAWEfAl15awlGXpM499qbvO6KrqDLNl2iUa931YvrQDQl%2F7TOSwBdgL2OGYMWsLDvLz%2BFn85VylTM1%2BrA8g%2BDs%2FsPn4XRDexvILSROVXdXPcic%2FD%2Fw164FuAJjB9I5%2FP%2FLS03NoQG%2FHiNmxKt5m1WTHTUfNdgE0gZd8MKlnWlrED09pJUU1ghtfJ1hdEpx6rJ1z7Z4EtRPkEn07O&X-Amz-Signature=e52101726a6e288484d3dbffa7b054f46efd40ce2bdb7aa03620ad15ede7083a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTMSYCS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO24hKMxtAyKbWU9SKausAgeg92IeGjzKkums8c3NLtAiEA6dGakxn3PCu7ZhbZOZ7HbU6NPj6swHflqndw4CkBk2Yq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDv1pv4Rtbo%2BIcmhKCrcA%2FzRy5arOs4gmfA9vPfgbrErgyGS4pDbEYpji5kUbZMhBo1kO6%2FoiffUd%2Bq7GgNf3N38EgEC1c1t9TjIovURfwArxWMSOYGmrAQc0%2FUqZW1n4CTxzUlkwf8qpgQHte4q6Xk%2BqxmatBRVLDs6%2FK7YENXUPnbJD9lqfsb4G5WR5pXsCCQrR1MMr5j%2FMJu81h54J6hTDwihNoXXJfjXgcB1XV3%2BE0Sgb0L4YXTiSZyMnXdk2TFgmCyqSXFnAb1r%2FRR9UmvCWoLDG1NqtOwTQxJWwewjZoFEcaAchrUYDrEOXduFIYZzQuQJD7t%2F69R7A0YAezHyUvL6jILnM9seSART21rSEe1nsMyI4Y1JIt2ti3uaL44YnwNzSgVbfDHv4oRNu6WDNIwLXO7m08XQH0TO36E9mI4eqqkQhCF4jEYDgVCp6ciqijTV1W1w7bBdUSzmFd52bBXc9ruUSBtSAGhNO0PnVA2TRt0ggzIruMiDTUB5Zo%2FEyHhhRgIMRu6zolndSUOzWKVvGTI72U3dvH2JxgwVYY4sqbp0bmffJrUwNqS0MnbeR0rEybd8IKILey%2FmQYQCKiNV5ByJs%2BcqMfR6sC6SaD%2FpXlR4uDQDEOcdmcr5cEqH393r54l5PoCLMJzAvMQGOqUBCs%2FeRfmcftQAEAWEfAl15awlGXpM499qbvO6KrqDLNl2iUa931YvrQDQl%2F7TOSwBdgL2OGYMWsLDvLz%2BFn85VylTM1%2BrA8g%2BDs%2FsPn4XRDexvILSROVXdXPcic%2FD%2Fw164FuAJjB9I5%2FP%2FLS03NoQG%2FHiNmxKt5m1WTHTUfNdgE0gZd8MKlnWlrED09pJUU1ghtfJ1hdEpx6rJ1z7Z4EtRPkEn07O&X-Amz-Signature=432ba20e60995b97d02799db683bc3d7d1f53fc4e0d22babdd4998ecc368d471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
