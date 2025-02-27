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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6FQHWK%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDyWBZjKO7EiQc5cC9qHYF9qL5BFGYTu3B2aW770uzzLAIhAPzEgd%2Bldy9oUJsyUiFN2XDzi6wqtudVAwjAYai%2F%2FyycKv8DCGwQABoMNjM3NDIzMTgzODA1IgyeGEMUx6QT4fBJW5gq3APmDggfRvNlUVK8X3GgJGMAedGp%2BHQAYE1ZOzkibNfB2%2F25ohvDSOuIskW2dVFE8WUj8hEKjwd2RueSbURGPKl2rlYeDCfByrAYHAsB9apHpuq8HhasA%2BRITPtBlVW1CaoKP%2FmijSP%2FlxgKkfbKXIZ04QCDouUXcfMAkTPdEAD8BbmyCdXc4fwCs98B%2Fune08Vh9TGU9k5YRvHyjTrx%2FZV2Lc3W4LmKlxDvxsqjyKtsEfeg3%2BtfJjabAzzz%2BubP6uI98Lzvb15DW0upfYVm4K9KO6%2FnjioQM%2BiMu7vy%2BoZchv%2BOKkP8b1G4usNs10K8cG8Gz29ZmhymwtKTRUuny4uZ2905BL70LE88YCRRh2UwilEPudetMJoDtGToTPlJJiSsszwUV6I%2BLJl6ZGyIotWyuWI%2FKcpp1xnN2BV9DxKda3w0iG1meBqpAj0Mb%2FvtapM4hKuET8ggVfxu7Ou%2FETqceXWnBE04bfaQnOI8e0DtV0KFxh8JDCgB0oQuHX1oMD2NvFg%2B%2BjqXFCiB0icoCtYWIoKRAby0kAL8%2FPW8Cc7fssVplYBz7kLzSDWXwiZE6lGDMl6u4I60YaWoGAlhRVts75niaTB7MMETDhH0P2Xr7sUBond6cy9hC3E18zCcsv%2B9BjqkAXaO2ZUaiTMI3hHHiyHwz2F9uFc6dnpS6m6td%2BtzZiZffjd1c1hQ56U0TsOcaXAQ944FMF8It453oFwovG4gqoFzCYnXxOkuRbih8oZbS0iu36ipTsR%2FUwJ9xtfmMrcDjn49o%2BS%2BQqzrx0ql%2Bjug50%2FjxYjGHVKC8yMRfmALETT%2F9yQCwpBc88cbU4DT%2FA63iPgxjEU9Vl0M7nYXpg9uQANhLlvF&X-Amz-Signature=505ab237f8034a0926cd2e3f41a9df27c5936d745b85aed82933c7ecbd64037c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6FQHWK%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDyWBZjKO7EiQc5cC9qHYF9qL5BFGYTu3B2aW770uzzLAIhAPzEgd%2Bldy9oUJsyUiFN2XDzi6wqtudVAwjAYai%2F%2FyycKv8DCGwQABoMNjM3NDIzMTgzODA1IgyeGEMUx6QT4fBJW5gq3APmDggfRvNlUVK8X3GgJGMAedGp%2BHQAYE1ZOzkibNfB2%2F25ohvDSOuIskW2dVFE8WUj8hEKjwd2RueSbURGPKl2rlYeDCfByrAYHAsB9apHpuq8HhasA%2BRITPtBlVW1CaoKP%2FmijSP%2FlxgKkfbKXIZ04QCDouUXcfMAkTPdEAD8BbmyCdXc4fwCs98B%2Fune08Vh9TGU9k5YRvHyjTrx%2FZV2Lc3W4LmKlxDvxsqjyKtsEfeg3%2BtfJjabAzzz%2BubP6uI98Lzvb15DW0upfYVm4K9KO6%2FnjioQM%2BiMu7vy%2BoZchv%2BOKkP8b1G4usNs10K8cG8Gz29ZmhymwtKTRUuny4uZ2905BL70LE88YCRRh2UwilEPudetMJoDtGToTPlJJiSsszwUV6I%2BLJl6ZGyIotWyuWI%2FKcpp1xnN2BV9DxKda3w0iG1meBqpAj0Mb%2FvtapM4hKuET8ggVfxu7Ou%2FETqceXWnBE04bfaQnOI8e0DtV0KFxh8JDCgB0oQuHX1oMD2NvFg%2B%2BjqXFCiB0icoCtYWIoKRAby0kAL8%2FPW8Cc7fssVplYBz7kLzSDWXwiZE6lGDMl6u4I60YaWoGAlhRVts75niaTB7MMETDhH0P2Xr7sUBond6cy9hC3E18zCcsv%2B9BjqkAXaO2ZUaiTMI3hHHiyHwz2F9uFc6dnpS6m6td%2BtzZiZffjd1c1hQ56U0TsOcaXAQ944FMF8It453oFwovG4gqoFzCYnXxOkuRbih8oZbS0iu36ipTsR%2FUwJ9xtfmMrcDjn49o%2BS%2BQqzrx0ql%2Bjug50%2FjxYjGHVKC8yMRfmALETT%2F9yQCwpBc88cbU4DT%2FA63iPgxjEU9Vl0M7nYXpg9uQANhLlvF&X-Amz-Signature=ecf4890ed4fd72032fe5ab9e754bb799493c7ba9e080b9de758ffca3c831e762&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6FQHWK%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDyWBZjKO7EiQc5cC9qHYF9qL5BFGYTu3B2aW770uzzLAIhAPzEgd%2Bldy9oUJsyUiFN2XDzi6wqtudVAwjAYai%2F%2FyycKv8DCGwQABoMNjM3NDIzMTgzODA1IgyeGEMUx6QT4fBJW5gq3APmDggfRvNlUVK8X3GgJGMAedGp%2BHQAYE1ZOzkibNfB2%2F25ohvDSOuIskW2dVFE8WUj8hEKjwd2RueSbURGPKl2rlYeDCfByrAYHAsB9apHpuq8HhasA%2BRITPtBlVW1CaoKP%2FmijSP%2FlxgKkfbKXIZ04QCDouUXcfMAkTPdEAD8BbmyCdXc4fwCs98B%2Fune08Vh9TGU9k5YRvHyjTrx%2FZV2Lc3W4LmKlxDvxsqjyKtsEfeg3%2BtfJjabAzzz%2BubP6uI98Lzvb15DW0upfYVm4K9KO6%2FnjioQM%2BiMu7vy%2BoZchv%2BOKkP8b1G4usNs10K8cG8Gz29ZmhymwtKTRUuny4uZ2905BL70LE88YCRRh2UwilEPudetMJoDtGToTPlJJiSsszwUV6I%2BLJl6ZGyIotWyuWI%2FKcpp1xnN2BV9DxKda3w0iG1meBqpAj0Mb%2FvtapM4hKuET8ggVfxu7Ou%2FETqceXWnBE04bfaQnOI8e0DtV0KFxh8JDCgB0oQuHX1oMD2NvFg%2B%2BjqXFCiB0icoCtYWIoKRAby0kAL8%2FPW8Cc7fssVplYBz7kLzSDWXwiZE6lGDMl6u4I60YaWoGAlhRVts75niaTB7MMETDhH0P2Xr7sUBond6cy9hC3E18zCcsv%2B9BjqkAXaO2ZUaiTMI3hHHiyHwz2F9uFc6dnpS6m6td%2BtzZiZffjd1c1hQ56U0TsOcaXAQ944FMF8It453oFwovG4gqoFzCYnXxOkuRbih8oZbS0iu36ipTsR%2FUwJ9xtfmMrcDjn49o%2BS%2BQqzrx0ql%2Bjug50%2FjxYjGHVKC8yMRfmALETT%2F9yQCwpBc88cbU4DT%2FA63iPgxjEU9Vl0M7nYXpg9uQANhLlvF&X-Amz-Signature=51f61e35cfb5f9c07a6ddb21c951d79712a7039fcaa9ea1c05f4b41a7ee7e32b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6FQHWK%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDyWBZjKO7EiQc5cC9qHYF9qL5BFGYTu3B2aW770uzzLAIhAPzEgd%2Bldy9oUJsyUiFN2XDzi6wqtudVAwjAYai%2F%2FyycKv8DCGwQABoMNjM3NDIzMTgzODA1IgyeGEMUx6QT4fBJW5gq3APmDggfRvNlUVK8X3GgJGMAedGp%2BHQAYE1ZOzkibNfB2%2F25ohvDSOuIskW2dVFE8WUj8hEKjwd2RueSbURGPKl2rlYeDCfByrAYHAsB9apHpuq8HhasA%2BRITPtBlVW1CaoKP%2FmijSP%2FlxgKkfbKXIZ04QCDouUXcfMAkTPdEAD8BbmyCdXc4fwCs98B%2Fune08Vh9TGU9k5YRvHyjTrx%2FZV2Lc3W4LmKlxDvxsqjyKtsEfeg3%2BtfJjabAzzz%2BubP6uI98Lzvb15DW0upfYVm4K9KO6%2FnjioQM%2BiMu7vy%2BoZchv%2BOKkP8b1G4usNs10K8cG8Gz29ZmhymwtKTRUuny4uZ2905BL70LE88YCRRh2UwilEPudetMJoDtGToTPlJJiSsszwUV6I%2BLJl6ZGyIotWyuWI%2FKcpp1xnN2BV9DxKda3w0iG1meBqpAj0Mb%2FvtapM4hKuET8ggVfxu7Ou%2FETqceXWnBE04bfaQnOI8e0DtV0KFxh8JDCgB0oQuHX1oMD2NvFg%2B%2BjqXFCiB0icoCtYWIoKRAby0kAL8%2FPW8Cc7fssVplYBz7kLzSDWXwiZE6lGDMl6u4I60YaWoGAlhRVts75niaTB7MMETDhH0P2Xr7sUBond6cy9hC3E18zCcsv%2B9BjqkAXaO2ZUaiTMI3hHHiyHwz2F9uFc6dnpS6m6td%2BtzZiZffjd1c1hQ56U0TsOcaXAQ944FMF8It453oFwovG4gqoFzCYnXxOkuRbih8oZbS0iu36ipTsR%2FUwJ9xtfmMrcDjn49o%2BS%2BQqzrx0ql%2Bjug50%2FjxYjGHVKC8yMRfmALETT%2F9yQCwpBc88cbU4DT%2FA63iPgxjEU9Vl0M7nYXpg9uQANhLlvF&X-Amz-Signature=0bfee5f3f82f9b60c580bc7f40ea883c34ed825e88812500aa5f13740393a801&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6FQHWK%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDyWBZjKO7EiQc5cC9qHYF9qL5BFGYTu3B2aW770uzzLAIhAPzEgd%2Bldy9oUJsyUiFN2XDzi6wqtudVAwjAYai%2F%2FyycKv8DCGwQABoMNjM3NDIzMTgzODA1IgyeGEMUx6QT4fBJW5gq3APmDggfRvNlUVK8X3GgJGMAedGp%2BHQAYE1ZOzkibNfB2%2F25ohvDSOuIskW2dVFE8WUj8hEKjwd2RueSbURGPKl2rlYeDCfByrAYHAsB9apHpuq8HhasA%2BRITPtBlVW1CaoKP%2FmijSP%2FlxgKkfbKXIZ04QCDouUXcfMAkTPdEAD8BbmyCdXc4fwCs98B%2Fune08Vh9TGU9k5YRvHyjTrx%2FZV2Lc3W4LmKlxDvxsqjyKtsEfeg3%2BtfJjabAzzz%2BubP6uI98Lzvb15DW0upfYVm4K9KO6%2FnjioQM%2BiMu7vy%2BoZchv%2BOKkP8b1G4usNs10K8cG8Gz29ZmhymwtKTRUuny4uZ2905BL70LE88YCRRh2UwilEPudetMJoDtGToTPlJJiSsszwUV6I%2BLJl6ZGyIotWyuWI%2FKcpp1xnN2BV9DxKda3w0iG1meBqpAj0Mb%2FvtapM4hKuET8ggVfxu7Ou%2FETqceXWnBE04bfaQnOI8e0DtV0KFxh8JDCgB0oQuHX1oMD2NvFg%2B%2BjqXFCiB0icoCtYWIoKRAby0kAL8%2FPW8Cc7fssVplYBz7kLzSDWXwiZE6lGDMl6u4I60YaWoGAlhRVts75niaTB7MMETDhH0P2Xr7sUBond6cy9hC3E18zCcsv%2B9BjqkAXaO2ZUaiTMI3hHHiyHwz2F9uFc6dnpS6m6td%2BtzZiZffjd1c1hQ56U0TsOcaXAQ944FMF8It453oFwovG4gqoFzCYnXxOkuRbih8oZbS0iu36ipTsR%2FUwJ9xtfmMrcDjn49o%2BS%2BQqzrx0ql%2Bjug50%2FjxYjGHVKC8yMRfmALETT%2F9yQCwpBc88cbU4DT%2FA63iPgxjEU9Vl0M7nYXpg9uQANhLlvF&X-Amz-Signature=fc565841a548e92a8c2391524d3873415ef4eacf779683923ab7000649c24dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6FQHWK%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDyWBZjKO7EiQc5cC9qHYF9qL5BFGYTu3B2aW770uzzLAIhAPzEgd%2Bldy9oUJsyUiFN2XDzi6wqtudVAwjAYai%2F%2FyycKv8DCGwQABoMNjM3NDIzMTgzODA1IgyeGEMUx6QT4fBJW5gq3APmDggfRvNlUVK8X3GgJGMAedGp%2BHQAYE1ZOzkibNfB2%2F25ohvDSOuIskW2dVFE8WUj8hEKjwd2RueSbURGPKl2rlYeDCfByrAYHAsB9apHpuq8HhasA%2BRITPtBlVW1CaoKP%2FmijSP%2FlxgKkfbKXIZ04QCDouUXcfMAkTPdEAD8BbmyCdXc4fwCs98B%2Fune08Vh9TGU9k5YRvHyjTrx%2FZV2Lc3W4LmKlxDvxsqjyKtsEfeg3%2BtfJjabAzzz%2BubP6uI98Lzvb15DW0upfYVm4K9KO6%2FnjioQM%2BiMu7vy%2BoZchv%2BOKkP8b1G4usNs10K8cG8Gz29ZmhymwtKTRUuny4uZ2905BL70LE88YCRRh2UwilEPudetMJoDtGToTPlJJiSsszwUV6I%2BLJl6ZGyIotWyuWI%2FKcpp1xnN2BV9DxKda3w0iG1meBqpAj0Mb%2FvtapM4hKuET8ggVfxu7Ou%2FETqceXWnBE04bfaQnOI8e0DtV0KFxh8JDCgB0oQuHX1oMD2NvFg%2B%2BjqXFCiB0icoCtYWIoKRAby0kAL8%2FPW8Cc7fssVplYBz7kLzSDWXwiZE6lGDMl6u4I60YaWoGAlhRVts75niaTB7MMETDhH0P2Xr7sUBond6cy9hC3E18zCcsv%2B9BjqkAXaO2ZUaiTMI3hHHiyHwz2F9uFc6dnpS6m6td%2BtzZiZffjd1c1hQ56U0TsOcaXAQ944FMF8It453oFwovG4gqoFzCYnXxOkuRbih8oZbS0iu36ipTsR%2FUwJ9xtfmMrcDjn49o%2BS%2BQqzrx0ql%2Bjug50%2FjxYjGHVKC8yMRfmALETT%2F9yQCwpBc88cbU4DT%2FA63iPgxjEU9Vl0M7nYXpg9uQANhLlvF&X-Amz-Signature=64bb16cad4d51c932a1d1d54be45773dff2563730c5dad894084f2f4cdcd9eed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6FQHWK%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDyWBZjKO7EiQc5cC9qHYF9qL5BFGYTu3B2aW770uzzLAIhAPzEgd%2Bldy9oUJsyUiFN2XDzi6wqtudVAwjAYai%2F%2FyycKv8DCGwQABoMNjM3NDIzMTgzODA1IgyeGEMUx6QT4fBJW5gq3APmDggfRvNlUVK8X3GgJGMAedGp%2BHQAYE1ZOzkibNfB2%2F25ohvDSOuIskW2dVFE8WUj8hEKjwd2RueSbURGPKl2rlYeDCfByrAYHAsB9apHpuq8HhasA%2BRITPtBlVW1CaoKP%2FmijSP%2FlxgKkfbKXIZ04QCDouUXcfMAkTPdEAD8BbmyCdXc4fwCs98B%2Fune08Vh9TGU9k5YRvHyjTrx%2FZV2Lc3W4LmKlxDvxsqjyKtsEfeg3%2BtfJjabAzzz%2BubP6uI98Lzvb15DW0upfYVm4K9KO6%2FnjioQM%2BiMu7vy%2BoZchv%2BOKkP8b1G4usNs10K8cG8Gz29ZmhymwtKTRUuny4uZ2905BL70LE88YCRRh2UwilEPudetMJoDtGToTPlJJiSsszwUV6I%2BLJl6ZGyIotWyuWI%2FKcpp1xnN2BV9DxKda3w0iG1meBqpAj0Mb%2FvtapM4hKuET8ggVfxu7Ou%2FETqceXWnBE04bfaQnOI8e0DtV0KFxh8JDCgB0oQuHX1oMD2NvFg%2B%2BjqXFCiB0icoCtYWIoKRAby0kAL8%2FPW8Cc7fssVplYBz7kLzSDWXwiZE6lGDMl6u4I60YaWoGAlhRVts75niaTB7MMETDhH0P2Xr7sUBond6cy9hC3E18zCcsv%2B9BjqkAXaO2ZUaiTMI3hHHiyHwz2F9uFc6dnpS6m6td%2BtzZiZffjd1c1hQ56U0TsOcaXAQ944FMF8It453oFwovG4gqoFzCYnXxOkuRbih8oZbS0iu36ipTsR%2FUwJ9xtfmMrcDjn49o%2BS%2BQqzrx0ql%2Bjug50%2FjxYjGHVKC8yMRfmALETT%2F9yQCwpBc88cbU4DT%2FA63iPgxjEU9Vl0M7nYXpg9uQANhLlvF&X-Amz-Signature=17e1ab8b5a9c238955771d9a2119f118c3b332f5a07e38c6e3a81b9991ce7cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6FQHWK%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDyWBZjKO7EiQc5cC9qHYF9qL5BFGYTu3B2aW770uzzLAIhAPzEgd%2Bldy9oUJsyUiFN2XDzi6wqtudVAwjAYai%2F%2FyycKv8DCGwQABoMNjM3NDIzMTgzODA1IgyeGEMUx6QT4fBJW5gq3APmDggfRvNlUVK8X3GgJGMAedGp%2BHQAYE1ZOzkibNfB2%2F25ohvDSOuIskW2dVFE8WUj8hEKjwd2RueSbURGPKl2rlYeDCfByrAYHAsB9apHpuq8HhasA%2BRITPtBlVW1CaoKP%2FmijSP%2FlxgKkfbKXIZ04QCDouUXcfMAkTPdEAD8BbmyCdXc4fwCs98B%2Fune08Vh9TGU9k5YRvHyjTrx%2FZV2Lc3W4LmKlxDvxsqjyKtsEfeg3%2BtfJjabAzzz%2BubP6uI98Lzvb15DW0upfYVm4K9KO6%2FnjioQM%2BiMu7vy%2BoZchv%2BOKkP8b1G4usNs10K8cG8Gz29ZmhymwtKTRUuny4uZ2905BL70LE88YCRRh2UwilEPudetMJoDtGToTPlJJiSsszwUV6I%2BLJl6ZGyIotWyuWI%2FKcpp1xnN2BV9DxKda3w0iG1meBqpAj0Mb%2FvtapM4hKuET8ggVfxu7Ou%2FETqceXWnBE04bfaQnOI8e0DtV0KFxh8JDCgB0oQuHX1oMD2NvFg%2B%2BjqXFCiB0icoCtYWIoKRAby0kAL8%2FPW8Cc7fssVplYBz7kLzSDWXwiZE6lGDMl6u4I60YaWoGAlhRVts75niaTB7MMETDhH0P2Xr7sUBond6cy9hC3E18zCcsv%2B9BjqkAXaO2ZUaiTMI3hHHiyHwz2F9uFc6dnpS6m6td%2BtzZiZffjd1c1hQ56U0TsOcaXAQ944FMF8It453oFwovG4gqoFzCYnXxOkuRbih8oZbS0iu36ipTsR%2FUwJ9xtfmMrcDjn49o%2BS%2BQqzrx0ql%2Bjug50%2FjxYjGHVKC8yMRfmALETT%2F9yQCwpBc88cbU4DT%2FA63iPgxjEU9Vl0M7nYXpg9uQANhLlvF&X-Amz-Signature=5881e9e45917d88073e36c3998375d97ee501a6566200d1ed4b4f8b9d05bbe7f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
