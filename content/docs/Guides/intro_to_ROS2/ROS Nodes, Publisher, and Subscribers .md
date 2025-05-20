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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623E6BFPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLLIbqLsXvLbZGycOe3nlJLUfvbyJmxuQuypwPd9CmxgIgFoqDFAL2cl5gOGgkfiQPmS1T7aucj8lI%2BKbEn%2B5Dpj4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrROFtcEQflsUT46SrcA8EoD%2FHpFlkifoqVFFIMrLmYx2yflWEwuiRSLgtRUs1bSVlUmt3rcVWRvqDEaG1QG9QKRCpQIQpFn6YAfZOm9NndQK59DIOR7Sl3F0MzlHIzwD%2FCd4RJahhsJqQVCfeBHjWTrAKm9kspFZGy5CoObrRXNDe82sI1fMraUooRkdlnTrgeYrkiClWFjcq4dVLT43aYutHIu%2FDV6WWYwgM%2FsipILoS1rexNmSqDNw83dWWFbCSl45SC%2FtrZp3Nq2dxbWsOQgpc5%2BQGJnl18rnFh9JyxOEfWbrYJs8HQPQfZL8zh6RPwHglx9%2FJLr3kNXCfhK1pVRQn4dPBfeJ6L3fBXOrmTmVx815CDrkN2C2AFK%2B0%2F1eKfef%2BTqTiPRuS8rhTafaI6VsmFc%2FCg1KqgUQP5lDR6v6CSjgvr9q%2BQGbOgYSecbsFCy0CtKmm8bbQrX6dek560i%2FvvHuFRMV50XcfmziH7lmkVaWYI0rihkdoL4mpQ%2FOK8XPuP37ztbh7uAQ0emB978kauBjj6d0kYpHtEHEIlwt%2B3hXuVsEl2LuEByNDZqJz8gRp789fkrVWt2AZ6jawfOe2J6Q7mb4lFhQ3BJIAnyHnLEP6IFuxFRifYfO5A9JjV7YK3kOFTFjamMIT%2BssEGOqUBeLrNFxi0g4SLGXl4rA8%2BLCgkdYhJCIvy1%2BAJfdvttnoYQoXO7ycZM0iYh23tGJ%2BEonMa6Fu%2BK9SfKSRqNPT438gZEshuLQMTV7iuoYT4gCog9Uz%2Ftnl5%2BkT2ln%2B3dnuDAVzwysDi66%2BzUgp8OQOj%2FdGfaZfwa5q6OF8mWM8NupZByNPIA4bESXkqCSJ2Je8VZJW2nkiSIHm7s2n1yq7cjeSfcvY0&X-Amz-Signature=69175fdd7327833431b822715ac1578b9adbb882376d35137c0143f9387a485f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623E6BFPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLLIbqLsXvLbZGycOe3nlJLUfvbyJmxuQuypwPd9CmxgIgFoqDFAL2cl5gOGgkfiQPmS1T7aucj8lI%2BKbEn%2B5Dpj4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrROFtcEQflsUT46SrcA8EoD%2FHpFlkifoqVFFIMrLmYx2yflWEwuiRSLgtRUs1bSVlUmt3rcVWRvqDEaG1QG9QKRCpQIQpFn6YAfZOm9NndQK59DIOR7Sl3F0MzlHIzwD%2FCd4RJahhsJqQVCfeBHjWTrAKm9kspFZGy5CoObrRXNDe82sI1fMraUooRkdlnTrgeYrkiClWFjcq4dVLT43aYutHIu%2FDV6WWYwgM%2FsipILoS1rexNmSqDNw83dWWFbCSl45SC%2FtrZp3Nq2dxbWsOQgpc5%2BQGJnl18rnFh9JyxOEfWbrYJs8HQPQfZL8zh6RPwHglx9%2FJLr3kNXCfhK1pVRQn4dPBfeJ6L3fBXOrmTmVx815CDrkN2C2AFK%2B0%2F1eKfef%2BTqTiPRuS8rhTafaI6VsmFc%2FCg1KqgUQP5lDR6v6CSjgvr9q%2BQGbOgYSecbsFCy0CtKmm8bbQrX6dek560i%2FvvHuFRMV50XcfmziH7lmkVaWYI0rihkdoL4mpQ%2FOK8XPuP37ztbh7uAQ0emB978kauBjj6d0kYpHtEHEIlwt%2B3hXuVsEl2LuEByNDZqJz8gRp789fkrVWt2AZ6jawfOe2J6Q7mb4lFhQ3BJIAnyHnLEP6IFuxFRifYfO5A9JjV7YK3kOFTFjamMIT%2BssEGOqUBeLrNFxi0g4SLGXl4rA8%2BLCgkdYhJCIvy1%2BAJfdvttnoYQoXO7ycZM0iYh23tGJ%2BEonMa6Fu%2BK9SfKSRqNPT438gZEshuLQMTV7iuoYT4gCog9Uz%2Ftnl5%2BkT2ln%2B3dnuDAVzwysDi66%2BzUgp8OQOj%2FdGfaZfwa5q6OF8mWM8NupZByNPIA4bESXkqCSJ2Je8VZJW2nkiSIHm7s2n1yq7cjeSfcvY0&X-Amz-Signature=5667c16f76a1bc0c05d3e44cb34ba37b52f3746dc09888adeb9ba668089aeb49&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623E6BFPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLLIbqLsXvLbZGycOe3nlJLUfvbyJmxuQuypwPd9CmxgIgFoqDFAL2cl5gOGgkfiQPmS1T7aucj8lI%2BKbEn%2B5Dpj4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrROFtcEQflsUT46SrcA8EoD%2FHpFlkifoqVFFIMrLmYx2yflWEwuiRSLgtRUs1bSVlUmt3rcVWRvqDEaG1QG9QKRCpQIQpFn6YAfZOm9NndQK59DIOR7Sl3F0MzlHIzwD%2FCd4RJahhsJqQVCfeBHjWTrAKm9kspFZGy5CoObrRXNDe82sI1fMraUooRkdlnTrgeYrkiClWFjcq4dVLT43aYutHIu%2FDV6WWYwgM%2FsipILoS1rexNmSqDNw83dWWFbCSl45SC%2FtrZp3Nq2dxbWsOQgpc5%2BQGJnl18rnFh9JyxOEfWbrYJs8HQPQfZL8zh6RPwHglx9%2FJLr3kNXCfhK1pVRQn4dPBfeJ6L3fBXOrmTmVx815CDrkN2C2AFK%2B0%2F1eKfef%2BTqTiPRuS8rhTafaI6VsmFc%2FCg1KqgUQP5lDR6v6CSjgvr9q%2BQGbOgYSecbsFCy0CtKmm8bbQrX6dek560i%2FvvHuFRMV50XcfmziH7lmkVaWYI0rihkdoL4mpQ%2FOK8XPuP37ztbh7uAQ0emB978kauBjj6d0kYpHtEHEIlwt%2B3hXuVsEl2LuEByNDZqJz8gRp789fkrVWt2AZ6jawfOe2J6Q7mb4lFhQ3BJIAnyHnLEP6IFuxFRifYfO5A9JjV7YK3kOFTFjamMIT%2BssEGOqUBeLrNFxi0g4SLGXl4rA8%2BLCgkdYhJCIvy1%2BAJfdvttnoYQoXO7ycZM0iYh23tGJ%2BEonMa6Fu%2BK9SfKSRqNPT438gZEshuLQMTV7iuoYT4gCog9Uz%2Ftnl5%2BkT2ln%2B3dnuDAVzwysDi66%2BzUgp8OQOj%2FdGfaZfwa5q6OF8mWM8NupZByNPIA4bESXkqCSJ2Je8VZJW2nkiSIHm7s2n1yq7cjeSfcvY0&X-Amz-Signature=45761375015c0e4135fa2a4edf5ba6af200cd3b1dd48303bbeb9407aba5db3db&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623E6BFPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLLIbqLsXvLbZGycOe3nlJLUfvbyJmxuQuypwPd9CmxgIgFoqDFAL2cl5gOGgkfiQPmS1T7aucj8lI%2BKbEn%2B5Dpj4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrROFtcEQflsUT46SrcA8EoD%2FHpFlkifoqVFFIMrLmYx2yflWEwuiRSLgtRUs1bSVlUmt3rcVWRvqDEaG1QG9QKRCpQIQpFn6YAfZOm9NndQK59DIOR7Sl3F0MzlHIzwD%2FCd4RJahhsJqQVCfeBHjWTrAKm9kspFZGy5CoObrRXNDe82sI1fMraUooRkdlnTrgeYrkiClWFjcq4dVLT43aYutHIu%2FDV6WWYwgM%2FsipILoS1rexNmSqDNw83dWWFbCSl45SC%2FtrZp3Nq2dxbWsOQgpc5%2BQGJnl18rnFh9JyxOEfWbrYJs8HQPQfZL8zh6RPwHglx9%2FJLr3kNXCfhK1pVRQn4dPBfeJ6L3fBXOrmTmVx815CDrkN2C2AFK%2B0%2F1eKfef%2BTqTiPRuS8rhTafaI6VsmFc%2FCg1KqgUQP5lDR6v6CSjgvr9q%2BQGbOgYSecbsFCy0CtKmm8bbQrX6dek560i%2FvvHuFRMV50XcfmziH7lmkVaWYI0rihkdoL4mpQ%2FOK8XPuP37ztbh7uAQ0emB978kauBjj6d0kYpHtEHEIlwt%2B3hXuVsEl2LuEByNDZqJz8gRp789fkrVWt2AZ6jawfOe2J6Q7mb4lFhQ3BJIAnyHnLEP6IFuxFRifYfO5A9JjV7YK3kOFTFjamMIT%2BssEGOqUBeLrNFxi0g4SLGXl4rA8%2BLCgkdYhJCIvy1%2BAJfdvttnoYQoXO7ycZM0iYh23tGJ%2BEonMa6Fu%2BK9SfKSRqNPT438gZEshuLQMTV7iuoYT4gCog9Uz%2Ftnl5%2BkT2ln%2B3dnuDAVzwysDi66%2BzUgp8OQOj%2FdGfaZfwa5q6OF8mWM8NupZByNPIA4bESXkqCSJ2Je8VZJW2nkiSIHm7s2n1yq7cjeSfcvY0&X-Amz-Signature=3d0fa52c49a0dcf8c21ba9c4087e9133d57661e293e027b55c789a9a2c7f0af7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623E6BFPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLLIbqLsXvLbZGycOe3nlJLUfvbyJmxuQuypwPd9CmxgIgFoqDFAL2cl5gOGgkfiQPmS1T7aucj8lI%2BKbEn%2B5Dpj4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrROFtcEQflsUT46SrcA8EoD%2FHpFlkifoqVFFIMrLmYx2yflWEwuiRSLgtRUs1bSVlUmt3rcVWRvqDEaG1QG9QKRCpQIQpFn6YAfZOm9NndQK59DIOR7Sl3F0MzlHIzwD%2FCd4RJahhsJqQVCfeBHjWTrAKm9kspFZGy5CoObrRXNDe82sI1fMraUooRkdlnTrgeYrkiClWFjcq4dVLT43aYutHIu%2FDV6WWYwgM%2FsipILoS1rexNmSqDNw83dWWFbCSl45SC%2FtrZp3Nq2dxbWsOQgpc5%2BQGJnl18rnFh9JyxOEfWbrYJs8HQPQfZL8zh6RPwHglx9%2FJLr3kNXCfhK1pVRQn4dPBfeJ6L3fBXOrmTmVx815CDrkN2C2AFK%2B0%2F1eKfef%2BTqTiPRuS8rhTafaI6VsmFc%2FCg1KqgUQP5lDR6v6CSjgvr9q%2BQGbOgYSecbsFCy0CtKmm8bbQrX6dek560i%2FvvHuFRMV50XcfmziH7lmkVaWYI0rihkdoL4mpQ%2FOK8XPuP37ztbh7uAQ0emB978kauBjj6d0kYpHtEHEIlwt%2B3hXuVsEl2LuEByNDZqJz8gRp789fkrVWt2AZ6jawfOe2J6Q7mb4lFhQ3BJIAnyHnLEP6IFuxFRifYfO5A9JjV7YK3kOFTFjamMIT%2BssEGOqUBeLrNFxi0g4SLGXl4rA8%2BLCgkdYhJCIvy1%2BAJfdvttnoYQoXO7ycZM0iYh23tGJ%2BEonMa6Fu%2BK9SfKSRqNPT438gZEshuLQMTV7iuoYT4gCog9Uz%2Ftnl5%2BkT2ln%2B3dnuDAVzwysDi66%2BzUgp8OQOj%2FdGfaZfwa5q6OF8mWM8NupZByNPIA4bESXkqCSJ2Je8VZJW2nkiSIHm7s2n1yq7cjeSfcvY0&X-Amz-Signature=4f5f2b07a8a5d9d3953d1906f676b3454ce7aef05ea4fec6dfc0cb3436f8aca7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623E6BFPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLLIbqLsXvLbZGycOe3nlJLUfvbyJmxuQuypwPd9CmxgIgFoqDFAL2cl5gOGgkfiQPmS1T7aucj8lI%2BKbEn%2B5Dpj4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrROFtcEQflsUT46SrcA8EoD%2FHpFlkifoqVFFIMrLmYx2yflWEwuiRSLgtRUs1bSVlUmt3rcVWRvqDEaG1QG9QKRCpQIQpFn6YAfZOm9NndQK59DIOR7Sl3F0MzlHIzwD%2FCd4RJahhsJqQVCfeBHjWTrAKm9kspFZGy5CoObrRXNDe82sI1fMraUooRkdlnTrgeYrkiClWFjcq4dVLT43aYutHIu%2FDV6WWYwgM%2FsipILoS1rexNmSqDNw83dWWFbCSl45SC%2FtrZp3Nq2dxbWsOQgpc5%2BQGJnl18rnFh9JyxOEfWbrYJs8HQPQfZL8zh6RPwHglx9%2FJLr3kNXCfhK1pVRQn4dPBfeJ6L3fBXOrmTmVx815CDrkN2C2AFK%2B0%2F1eKfef%2BTqTiPRuS8rhTafaI6VsmFc%2FCg1KqgUQP5lDR6v6CSjgvr9q%2BQGbOgYSecbsFCy0CtKmm8bbQrX6dek560i%2FvvHuFRMV50XcfmziH7lmkVaWYI0rihkdoL4mpQ%2FOK8XPuP37ztbh7uAQ0emB978kauBjj6d0kYpHtEHEIlwt%2B3hXuVsEl2LuEByNDZqJz8gRp789fkrVWt2AZ6jawfOe2J6Q7mb4lFhQ3BJIAnyHnLEP6IFuxFRifYfO5A9JjV7YK3kOFTFjamMIT%2BssEGOqUBeLrNFxi0g4SLGXl4rA8%2BLCgkdYhJCIvy1%2BAJfdvttnoYQoXO7ycZM0iYh23tGJ%2BEonMa6Fu%2BK9SfKSRqNPT438gZEshuLQMTV7iuoYT4gCog9Uz%2Ftnl5%2BkT2ln%2B3dnuDAVzwysDi66%2BzUgp8OQOj%2FdGfaZfwa5q6OF8mWM8NupZByNPIA4bESXkqCSJ2Je8VZJW2nkiSIHm7s2n1yq7cjeSfcvY0&X-Amz-Signature=eb127b4c09a107463b16e2c3cccf00ca3c2c4883423e29a093c564c9edb60804&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623E6BFPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLLIbqLsXvLbZGycOe3nlJLUfvbyJmxuQuypwPd9CmxgIgFoqDFAL2cl5gOGgkfiQPmS1T7aucj8lI%2BKbEn%2B5Dpj4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrROFtcEQflsUT46SrcA8EoD%2FHpFlkifoqVFFIMrLmYx2yflWEwuiRSLgtRUs1bSVlUmt3rcVWRvqDEaG1QG9QKRCpQIQpFn6YAfZOm9NndQK59DIOR7Sl3F0MzlHIzwD%2FCd4RJahhsJqQVCfeBHjWTrAKm9kspFZGy5CoObrRXNDe82sI1fMraUooRkdlnTrgeYrkiClWFjcq4dVLT43aYutHIu%2FDV6WWYwgM%2FsipILoS1rexNmSqDNw83dWWFbCSl45SC%2FtrZp3Nq2dxbWsOQgpc5%2BQGJnl18rnFh9JyxOEfWbrYJs8HQPQfZL8zh6RPwHglx9%2FJLr3kNXCfhK1pVRQn4dPBfeJ6L3fBXOrmTmVx815CDrkN2C2AFK%2B0%2F1eKfef%2BTqTiPRuS8rhTafaI6VsmFc%2FCg1KqgUQP5lDR6v6CSjgvr9q%2BQGbOgYSecbsFCy0CtKmm8bbQrX6dek560i%2FvvHuFRMV50XcfmziH7lmkVaWYI0rihkdoL4mpQ%2FOK8XPuP37ztbh7uAQ0emB978kauBjj6d0kYpHtEHEIlwt%2B3hXuVsEl2LuEByNDZqJz8gRp789fkrVWt2AZ6jawfOe2J6Q7mb4lFhQ3BJIAnyHnLEP6IFuxFRifYfO5A9JjV7YK3kOFTFjamMIT%2BssEGOqUBeLrNFxi0g4SLGXl4rA8%2BLCgkdYhJCIvy1%2BAJfdvttnoYQoXO7ycZM0iYh23tGJ%2BEonMa6Fu%2BK9SfKSRqNPT438gZEshuLQMTV7iuoYT4gCog9Uz%2Ftnl5%2BkT2ln%2B3dnuDAVzwysDi66%2BzUgp8OQOj%2FdGfaZfwa5q6OF8mWM8NupZByNPIA4bESXkqCSJ2Je8VZJW2nkiSIHm7s2n1yq7cjeSfcvY0&X-Amz-Signature=1ab1965d55eb4f3d1bded44f072b3992aad3dfbb80f72854eb3a6a43eb6e93ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623E6BFPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLLIbqLsXvLbZGycOe3nlJLUfvbyJmxuQuypwPd9CmxgIgFoqDFAL2cl5gOGgkfiQPmS1T7aucj8lI%2BKbEn%2B5Dpj4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrROFtcEQflsUT46SrcA8EoD%2FHpFlkifoqVFFIMrLmYx2yflWEwuiRSLgtRUs1bSVlUmt3rcVWRvqDEaG1QG9QKRCpQIQpFn6YAfZOm9NndQK59DIOR7Sl3F0MzlHIzwD%2FCd4RJahhsJqQVCfeBHjWTrAKm9kspFZGy5CoObrRXNDe82sI1fMraUooRkdlnTrgeYrkiClWFjcq4dVLT43aYutHIu%2FDV6WWYwgM%2FsipILoS1rexNmSqDNw83dWWFbCSl45SC%2FtrZp3Nq2dxbWsOQgpc5%2BQGJnl18rnFh9JyxOEfWbrYJs8HQPQfZL8zh6RPwHglx9%2FJLr3kNXCfhK1pVRQn4dPBfeJ6L3fBXOrmTmVx815CDrkN2C2AFK%2B0%2F1eKfef%2BTqTiPRuS8rhTafaI6VsmFc%2FCg1KqgUQP5lDR6v6CSjgvr9q%2BQGbOgYSecbsFCy0CtKmm8bbQrX6dek560i%2FvvHuFRMV50XcfmziH7lmkVaWYI0rihkdoL4mpQ%2FOK8XPuP37ztbh7uAQ0emB978kauBjj6d0kYpHtEHEIlwt%2B3hXuVsEl2LuEByNDZqJz8gRp789fkrVWt2AZ6jawfOe2J6Q7mb4lFhQ3BJIAnyHnLEP6IFuxFRifYfO5A9JjV7YK3kOFTFjamMIT%2BssEGOqUBeLrNFxi0g4SLGXl4rA8%2BLCgkdYhJCIvy1%2BAJfdvttnoYQoXO7ycZM0iYh23tGJ%2BEonMa6Fu%2BK9SfKSRqNPT438gZEshuLQMTV7iuoYT4gCog9Uz%2Ftnl5%2BkT2ln%2B3dnuDAVzwysDi66%2BzUgp8OQOj%2FdGfaZfwa5q6OF8mWM8NupZByNPIA4bESXkqCSJ2Je8VZJW2nkiSIHm7s2n1yq7cjeSfcvY0&X-Amz-Signature=d5de4ef86163169bf0ec367273b315089f06592290aae11c3792f9c431a05551&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
