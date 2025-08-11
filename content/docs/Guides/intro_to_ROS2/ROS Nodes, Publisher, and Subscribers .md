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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHEIZXZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs6LuBn23AtTgnrGv8KU5vKnYkCTQ5ITvT9YjoQFdr4AiEAsYc1ppI2ag5Dz9x0U6R%2BE2augJGV%2Ffurd4gMeQYnsnUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlRHIf00RbsxSiWKSrcA9HmWRpzFIbapbB%2BwEDtlIXVpyF3POvXvMNt3quePLZ5PEpDDq1isM9feulfDgSRN7z2UuAMjZ%2BlOE9p6BB%2F8EnA6Hox1DeCCyHHcC7AE8jQ6%2FywEYjYk3GxacuxDBKmjZWHoIaAInGUYjzYUR4MRuFAFtaHfvzJ8QidVJhaV3zuAaqPhwFUrKEHousgDgzzLV8WfeJhqKeGxymz2f14YvY8y4s%2FzNqweznGcv%2FbuSDO1SPfelZSavUXPEyR14C4lWfKwe6tN9TO6SV5Kws0x6FoC0KNP8xclY6mboJAbH5JcLHFScOHKqXtT4lz1rVtpd32ozTnfbnnMfc7b6VIr4vFHsNcunzCGg9g6PRqvysDDoMjggRuh60Mr1dkWS%2FOzClmcv8SaeokRRw2yNIcXV2i6rl1DwPUAsKjgFrXfzRxIW%2FkNTy0jaE5YlPF7T%2Fqw90PWSzSYGKxQV8J0MmsAexBppfOK3TlzbqS7QcpPPYGqsMJfTh3zFiv138UZIFQXZkg0Jdw%2BzMJI0MO4xEBGBb7IlUzTnitwsW1DAX25Lz91DPQ4Vw8J%2FiKyfaDPN9FSYMPiEiQSStVThUzFFYOmZlqnJXB6L%2BcXrdEHAXw9rIW62eBV6gZe95rGD%2BwMKCi6MQGOqUBNiRlwr1sl8%2FbEfhEsPtTWxgFBHp7APVCrp%2FQEpu224cz%2FO73TypnmI%2FPQBcxyBU4SF4b4JGzF7%2BfNKN164TpSkRc0eA9AI2Olr%2FqAYpwDMCLOu000mxr29t31g4NX6eUZvVXss3ZOfwns3WvPW2HcmD4JshdT9uOmWN0JjdqEJpoNurgQekGeA10suXBf9ivkOTXdJr5FuugSzXrL1w8H6vXk6Kt&X-Amz-Signature=65a6c27377d126b65599ea6397ec5a829cee3b75de46c8c2b8e6c7ee783a97fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHEIZXZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs6LuBn23AtTgnrGv8KU5vKnYkCTQ5ITvT9YjoQFdr4AiEAsYc1ppI2ag5Dz9x0U6R%2BE2augJGV%2Ffurd4gMeQYnsnUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlRHIf00RbsxSiWKSrcA9HmWRpzFIbapbB%2BwEDtlIXVpyF3POvXvMNt3quePLZ5PEpDDq1isM9feulfDgSRN7z2UuAMjZ%2BlOE9p6BB%2F8EnA6Hox1DeCCyHHcC7AE8jQ6%2FywEYjYk3GxacuxDBKmjZWHoIaAInGUYjzYUR4MRuFAFtaHfvzJ8QidVJhaV3zuAaqPhwFUrKEHousgDgzzLV8WfeJhqKeGxymz2f14YvY8y4s%2FzNqweznGcv%2FbuSDO1SPfelZSavUXPEyR14C4lWfKwe6tN9TO6SV5Kws0x6FoC0KNP8xclY6mboJAbH5JcLHFScOHKqXtT4lz1rVtpd32ozTnfbnnMfc7b6VIr4vFHsNcunzCGg9g6PRqvysDDoMjggRuh60Mr1dkWS%2FOzClmcv8SaeokRRw2yNIcXV2i6rl1DwPUAsKjgFrXfzRxIW%2FkNTy0jaE5YlPF7T%2Fqw90PWSzSYGKxQV8J0MmsAexBppfOK3TlzbqS7QcpPPYGqsMJfTh3zFiv138UZIFQXZkg0Jdw%2BzMJI0MO4xEBGBb7IlUzTnitwsW1DAX25Lz91DPQ4Vw8J%2FiKyfaDPN9FSYMPiEiQSStVThUzFFYOmZlqnJXB6L%2BcXrdEHAXw9rIW62eBV6gZe95rGD%2BwMKCi6MQGOqUBNiRlwr1sl8%2FbEfhEsPtTWxgFBHp7APVCrp%2FQEpu224cz%2FO73TypnmI%2FPQBcxyBU4SF4b4JGzF7%2BfNKN164TpSkRc0eA9AI2Olr%2FqAYpwDMCLOu000mxr29t31g4NX6eUZvVXss3ZOfwns3WvPW2HcmD4JshdT9uOmWN0JjdqEJpoNurgQekGeA10suXBf9ivkOTXdJr5FuugSzXrL1w8H6vXk6Kt&X-Amz-Signature=d0e8a6c8959fc40719c01c5e0c5436983810a340bb38819f494f18e9fbf38053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHEIZXZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs6LuBn23AtTgnrGv8KU5vKnYkCTQ5ITvT9YjoQFdr4AiEAsYc1ppI2ag5Dz9x0U6R%2BE2augJGV%2Ffurd4gMeQYnsnUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlRHIf00RbsxSiWKSrcA9HmWRpzFIbapbB%2BwEDtlIXVpyF3POvXvMNt3quePLZ5PEpDDq1isM9feulfDgSRN7z2UuAMjZ%2BlOE9p6BB%2F8EnA6Hox1DeCCyHHcC7AE8jQ6%2FywEYjYk3GxacuxDBKmjZWHoIaAInGUYjzYUR4MRuFAFtaHfvzJ8QidVJhaV3zuAaqPhwFUrKEHousgDgzzLV8WfeJhqKeGxymz2f14YvY8y4s%2FzNqweznGcv%2FbuSDO1SPfelZSavUXPEyR14C4lWfKwe6tN9TO6SV5Kws0x6FoC0KNP8xclY6mboJAbH5JcLHFScOHKqXtT4lz1rVtpd32ozTnfbnnMfc7b6VIr4vFHsNcunzCGg9g6PRqvysDDoMjggRuh60Mr1dkWS%2FOzClmcv8SaeokRRw2yNIcXV2i6rl1DwPUAsKjgFrXfzRxIW%2FkNTy0jaE5YlPF7T%2Fqw90PWSzSYGKxQV8J0MmsAexBppfOK3TlzbqS7QcpPPYGqsMJfTh3zFiv138UZIFQXZkg0Jdw%2BzMJI0MO4xEBGBb7IlUzTnitwsW1DAX25Lz91DPQ4Vw8J%2FiKyfaDPN9FSYMPiEiQSStVThUzFFYOmZlqnJXB6L%2BcXrdEHAXw9rIW62eBV6gZe95rGD%2BwMKCi6MQGOqUBNiRlwr1sl8%2FbEfhEsPtTWxgFBHp7APVCrp%2FQEpu224cz%2FO73TypnmI%2FPQBcxyBU4SF4b4JGzF7%2BfNKN164TpSkRc0eA9AI2Olr%2FqAYpwDMCLOu000mxr29t31g4NX6eUZvVXss3ZOfwns3WvPW2HcmD4JshdT9uOmWN0JjdqEJpoNurgQekGeA10suXBf9ivkOTXdJr5FuugSzXrL1w8H6vXk6Kt&X-Amz-Signature=1dc913e833f1d436f958dbdf30425ad04e90e7d5548f1a9dfc3f0a91988e1866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHEIZXZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs6LuBn23AtTgnrGv8KU5vKnYkCTQ5ITvT9YjoQFdr4AiEAsYc1ppI2ag5Dz9x0U6R%2BE2augJGV%2Ffurd4gMeQYnsnUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlRHIf00RbsxSiWKSrcA9HmWRpzFIbapbB%2BwEDtlIXVpyF3POvXvMNt3quePLZ5PEpDDq1isM9feulfDgSRN7z2UuAMjZ%2BlOE9p6BB%2F8EnA6Hox1DeCCyHHcC7AE8jQ6%2FywEYjYk3GxacuxDBKmjZWHoIaAInGUYjzYUR4MRuFAFtaHfvzJ8QidVJhaV3zuAaqPhwFUrKEHousgDgzzLV8WfeJhqKeGxymz2f14YvY8y4s%2FzNqweznGcv%2FbuSDO1SPfelZSavUXPEyR14C4lWfKwe6tN9TO6SV5Kws0x6FoC0KNP8xclY6mboJAbH5JcLHFScOHKqXtT4lz1rVtpd32ozTnfbnnMfc7b6VIr4vFHsNcunzCGg9g6PRqvysDDoMjggRuh60Mr1dkWS%2FOzClmcv8SaeokRRw2yNIcXV2i6rl1DwPUAsKjgFrXfzRxIW%2FkNTy0jaE5YlPF7T%2Fqw90PWSzSYGKxQV8J0MmsAexBppfOK3TlzbqS7QcpPPYGqsMJfTh3zFiv138UZIFQXZkg0Jdw%2BzMJI0MO4xEBGBb7IlUzTnitwsW1DAX25Lz91DPQ4Vw8J%2FiKyfaDPN9FSYMPiEiQSStVThUzFFYOmZlqnJXB6L%2BcXrdEHAXw9rIW62eBV6gZe95rGD%2BwMKCi6MQGOqUBNiRlwr1sl8%2FbEfhEsPtTWxgFBHp7APVCrp%2FQEpu224cz%2FO73TypnmI%2FPQBcxyBU4SF4b4JGzF7%2BfNKN164TpSkRc0eA9AI2Olr%2FqAYpwDMCLOu000mxr29t31g4NX6eUZvVXss3ZOfwns3WvPW2HcmD4JshdT9uOmWN0JjdqEJpoNurgQekGeA10suXBf9ivkOTXdJr5FuugSzXrL1w8H6vXk6Kt&X-Amz-Signature=c60e6b9848e6b8d130dd7126664e9e8f0399c37e1b6ead2f8af65d8ae86697b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHEIZXZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs6LuBn23AtTgnrGv8KU5vKnYkCTQ5ITvT9YjoQFdr4AiEAsYc1ppI2ag5Dz9x0U6R%2BE2augJGV%2Ffurd4gMeQYnsnUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlRHIf00RbsxSiWKSrcA9HmWRpzFIbapbB%2BwEDtlIXVpyF3POvXvMNt3quePLZ5PEpDDq1isM9feulfDgSRN7z2UuAMjZ%2BlOE9p6BB%2F8EnA6Hox1DeCCyHHcC7AE8jQ6%2FywEYjYk3GxacuxDBKmjZWHoIaAInGUYjzYUR4MRuFAFtaHfvzJ8QidVJhaV3zuAaqPhwFUrKEHousgDgzzLV8WfeJhqKeGxymz2f14YvY8y4s%2FzNqweznGcv%2FbuSDO1SPfelZSavUXPEyR14C4lWfKwe6tN9TO6SV5Kws0x6FoC0KNP8xclY6mboJAbH5JcLHFScOHKqXtT4lz1rVtpd32ozTnfbnnMfc7b6VIr4vFHsNcunzCGg9g6PRqvysDDoMjggRuh60Mr1dkWS%2FOzClmcv8SaeokRRw2yNIcXV2i6rl1DwPUAsKjgFrXfzRxIW%2FkNTy0jaE5YlPF7T%2Fqw90PWSzSYGKxQV8J0MmsAexBppfOK3TlzbqS7QcpPPYGqsMJfTh3zFiv138UZIFQXZkg0Jdw%2BzMJI0MO4xEBGBb7IlUzTnitwsW1DAX25Lz91DPQ4Vw8J%2FiKyfaDPN9FSYMPiEiQSStVThUzFFYOmZlqnJXB6L%2BcXrdEHAXw9rIW62eBV6gZe95rGD%2BwMKCi6MQGOqUBNiRlwr1sl8%2FbEfhEsPtTWxgFBHp7APVCrp%2FQEpu224cz%2FO73TypnmI%2FPQBcxyBU4SF4b4JGzF7%2BfNKN164TpSkRc0eA9AI2Olr%2FqAYpwDMCLOu000mxr29t31g4NX6eUZvVXss3ZOfwns3WvPW2HcmD4JshdT9uOmWN0JjdqEJpoNurgQekGeA10suXBf9ivkOTXdJr5FuugSzXrL1w8H6vXk6Kt&X-Amz-Signature=239e9e8533a96fee87f6d46b2fdde4cbbf35dd0266ed3ef1b49059531444ead1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHEIZXZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs6LuBn23AtTgnrGv8KU5vKnYkCTQ5ITvT9YjoQFdr4AiEAsYc1ppI2ag5Dz9x0U6R%2BE2augJGV%2Ffurd4gMeQYnsnUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlRHIf00RbsxSiWKSrcA9HmWRpzFIbapbB%2BwEDtlIXVpyF3POvXvMNt3quePLZ5PEpDDq1isM9feulfDgSRN7z2UuAMjZ%2BlOE9p6BB%2F8EnA6Hox1DeCCyHHcC7AE8jQ6%2FywEYjYk3GxacuxDBKmjZWHoIaAInGUYjzYUR4MRuFAFtaHfvzJ8QidVJhaV3zuAaqPhwFUrKEHousgDgzzLV8WfeJhqKeGxymz2f14YvY8y4s%2FzNqweznGcv%2FbuSDO1SPfelZSavUXPEyR14C4lWfKwe6tN9TO6SV5Kws0x6FoC0KNP8xclY6mboJAbH5JcLHFScOHKqXtT4lz1rVtpd32ozTnfbnnMfc7b6VIr4vFHsNcunzCGg9g6PRqvysDDoMjggRuh60Mr1dkWS%2FOzClmcv8SaeokRRw2yNIcXV2i6rl1DwPUAsKjgFrXfzRxIW%2FkNTy0jaE5YlPF7T%2Fqw90PWSzSYGKxQV8J0MmsAexBppfOK3TlzbqS7QcpPPYGqsMJfTh3zFiv138UZIFQXZkg0Jdw%2BzMJI0MO4xEBGBb7IlUzTnitwsW1DAX25Lz91DPQ4Vw8J%2FiKyfaDPN9FSYMPiEiQSStVThUzFFYOmZlqnJXB6L%2BcXrdEHAXw9rIW62eBV6gZe95rGD%2BwMKCi6MQGOqUBNiRlwr1sl8%2FbEfhEsPtTWxgFBHp7APVCrp%2FQEpu224cz%2FO73TypnmI%2FPQBcxyBU4SF4b4JGzF7%2BfNKN164TpSkRc0eA9AI2Olr%2FqAYpwDMCLOu000mxr29t31g4NX6eUZvVXss3ZOfwns3WvPW2HcmD4JshdT9uOmWN0JjdqEJpoNurgQekGeA10suXBf9ivkOTXdJr5FuugSzXrL1w8H6vXk6Kt&X-Amz-Signature=5e69f5c2df14ed977440caeb03b9cb1c560c5ded96cb25e1a8302b3c6f377708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHEIZXZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs6LuBn23AtTgnrGv8KU5vKnYkCTQ5ITvT9YjoQFdr4AiEAsYc1ppI2ag5Dz9x0U6R%2BE2augJGV%2Ffurd4gMeQYnsnUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlRHIf00RbsxSiWKSrcA9HmWRpzFIbapbB%2BwEDtlIXVpyF3POvXvMNt3quePLZ5PEpDDq1isM9feulfDgSRN7z2UuAMjZ%2BlOE9p6BB%2F8EnA6Hox1DeCCyHHcC7AE8jQ6%2FywEYjYk3GxacuxDBKmjZWHoIaAInGUYjzYUR4MRuFAFtaHfvzJ8QidVJhaV3zuAaqPhwFUrKEHousgDgzzLV8WfeJhqKeGxymz2f14YvY8y4s%2FzNqweznGcv%2FbuSDO1SPfelZSavUXPEyR14C4lWfKwe6tN9TO6SV5Kws0x6FoC0KNP8xclY6mboJAbH5JcLHFScOHKqXtT4lz1rVtpd32ozTnfbnnMfc7b6VIr4vFHsNcunzCGg9g6PRqvysDDoMjggRuh60Mr1dkWS%2FOzClmcv8SaeokRRw2yNIcXV2i6rl1DwPUAsKjgFrXfzRxIW%2FkNTy0jaE5YlPF7T%2Fqw90PWSzSYGKxQV8J0MmsAexBppfOK3TlzbqS7QcpPPYGqsMJfTh3zFiv138UZIFQXZkg0Jdw%2BzMJI0MO4xEBGBb7IlUzTnitwsW1DAX25Lz91DPQ4Vw8J%2FiKyfaDPN9FSYMPiEiQSStVThUzFFYOmZlqnJXB6L%2BcXrdEHAXw9rIW62eBV6gZe95rGD%2BwMKCi6MQGOqUBNiRlwr1sl8%2FbEfhEsPtTWxgFBHp7APVCrp%2FQEpu224cz%2FO73TypnmI%2FPQBcxyBU4SF4b4JGzF7%2BfNKN164TpSkRc0eA9AI2Olr%2FqAYpwDMCLOu000mxr29t31g4NX6eUZvVXss3ZOfwns3WvPW2HcmD4JshdT9uOmWN0JjdqEJpoNurgQekGeA10suXBf9ivkOTXdJr5FuugSzXrL1w8H6vXk6Kt&X-Amz-Signature=323e824f9aa16b7369c136790e5783f718a6104b112e94d4bba99e1ae390cd00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHEIZXZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs6LuBn23AtTgnrGv8KU5vKnYkCTQ5ITvT9YjoQFdr4AiEAsYc1ppI2ag5Dz9x0U6R%2BE2augJGV%2Ffurd4gMeQYnsnUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlRHIf00RbsxSiWKSrcA9HmWRpzFIbapbB%2BwEDtlIXVpyF3POvXvMNt3quePLZ5PEpDDq1isM9feulfDgSRN7z2UuAMjZ%2BlOE9p6BB%2F8EnA6Hox1DeCCyHHcC7AE8jQ6%2FywEYjYk3GxacuxDBKmjZWHoIaAInGUYjzYUR4MRuFAFtaHfvzJ8QidVJhaV3zuAaqPhwFUrKEHousgDgzzLV8WfeJhqKeGxymz2f14YvY8y4s%2FzNqweznGcv%2FbuSDO1SPfelZSavUXPEyR14C4lWfKwe6tN9TO6SV5Kws0x6FoC0KNP8xclY6mboJAbH5JcLHFScOHKqXtT4lz1rVtpd32ozTnfbnnMfc7b6VIr4vFHsNcunzCGg9g6PRqvysDDoMjggRuh60Mr1dkWS%2FOzClmcv8SaeokRRw2yNIcXV2i6rl1DwPUAsKjgFrXfzRxIW%2FkNTy0jaE5YlPF7T%2Fqw90PWSzSYGKxQV8J0MmsAexBppfOK3TlzbqS7QcpPPYGqsMJfTh3zFiv138UZIFQXZkg0Jdw%2BzMJI0MO4xEBGBb7IlUzTnitwsW1DAX25Lz91DPQ4Vw8J%2FiKyfaDPN9FSYMPiEiQSStVThUzFFYOmZlqnJXB6L%2BcXrdEHAXw9rIW62eBV6gZe95rGD%2BwMKCi6MQGOqUBNiRlwr1sl8%2FbEfhEsPtTWxgFBHp7APVCrp%2FQEpu224cz%2FO73TypnmI%2FPQBcxyBU4SF4b4JGzF7%2BfNKN164TpSkRc0eA9AI2Olr%2FqAYpwDMCLOu000mxr29t31g4NX6eUZvVXss3ZOfwns3WvPW2HcmD4JshdT9uOmWN0JjdqEJpoNurgQekGeA10suXBf9ivkOTXdJr5FuugSzXrL1w8H6vXk6Kt&X-Amz-Signature=ec5c3e806e97c7298396970e61b873f16520b1fbe7d44354a5126419676c8318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
