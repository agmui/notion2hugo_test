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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQVCUOO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCgM325ISDYirsr07nxngmnrAGbggCOj6vBggfh%2B1Fd1AIgYGERV7O07WzTi8naxZe43BoIBcnAA3UKcnmq1bUyrb8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDBkGPax2TCsam1I0mSrcA3UrZAHhpR8p9EFys05wcrVRL5LjMAa9hOh9Otlc3cPJmf3WeCHcWHUtCT21fyr8Vq%2FxmoIV4yfl8oT0Zi%2BF40IqvNml9tUDUguNwe7RECpMLQlTkixmLLZ%2BqXUho4rcxM390KIqcQBo%2BYfhCJJSMgBC9r8rcREh87p2d1XOtty0XajmdImYNRN9YlL20xgGVjdqijr4v2aiQm%2BxWVFdweb95WOa8Hyvk5a1PqeLXEwBm%2FESV5mEgrB24%2BZS2O3eBjTCbVo1Ba5hyki7vr%2FE34UoMLkUsVL9%2B4BMDCM%2BzbkRQJIyGYU8NgK%2FpdghDcBab4%2BAZ9Af%2FJmKRTI7KLMG6MmLxJmFWxhRD%2FPowNtR2yDnNG8bgRopeqHCfna6zJ9qfsn%2F%2BpGuZ%2FDsirXx1WZXdNVPR3nMVYwAVoHj%2FfPBrUSBtiz27eXaQRBfmt4l%2BZEu61XD2lQL2VI1R80oyOCKvaoZ8px%2BZNDzRWCuALv27nuupxxmKDnKW%2BlxD9HzZjRtg1f4bJHjI6s7oWJgI61ZA4Wd41dko3D0rTO9xdfCjqDLxtms1sYuU85Pj0KRHOTmUWSKW9tJ8kWX32xQbbnkHxDXdPk14a6NzP6WpUMpbrS6s5kgtM8nus3T0pAeMLecjMQGOqUBbgxm6122Ag1LUnB%2FNYQjbgQdwexBcAN%2FGhNVWlOflEpUSr8oyZ3MKPreXu%2FNGAiRJAYEQ99GWeq1r%2B90AedZlj7uNqsgiiN68njwucLMAxmPHZ44THt%2FjhVUiRnksdGSulOVT3DPW6kS0faqCqIG4P7%2FW8KeQlYVQyZTvuEQ1ZXFAtnkP%2BeJvdYWhtQ49yj8uzCs9t8ZEOXROMxFF2rGtVx2omM0&X-Amz-Signature=255b2208476bdcda0364f81a8024aba0aa5bf50489e13ef26b47a63d6154ba47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQVCUOO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCgM325ISDYirsr07nxngmnrAGbggCOj6vBggfh%2B1Fd1AIgYGERV7O07WzTi8naxZe43BoIBcnAA3UKcnmq1bUyrb8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDBkGPax2TCsam1I0mSrcA3UrZAHhpR8p9EFys05wcrVRL5LjMAa9hOh9Otlc3cPJmf3WeCHcWHUtCT21fyr8Vq%2FxmoIV4yfl8oT0Zi%2BF40IqvNml9tUDUguNwe7RECpMLQlTkixmLLZ%2BqXUho4rcxM390KIqcQBo%2BYfhCJJSMgBC9r8rcREh87p2d1XOtty0XajmdImYNRN9YlL20xgGVjdqijr4v2aiQm%2BxWVFdweb95WOa8Hyvk5a1PqeLXEwBm%2FESV5mEgrB24%2BZS2O3eBjTCbVo1Ba5hyki7vr%2FE34UoMLkUsVL9%2B4BMDCM%2BzbkRQJIyGYU8NgK%2FpdghDcBab4%2BAZ9Af%2FJmKRTI7KLMG6MmLxJmFWxhRD%2FPowNtR2yDnNG8bgRopeqHCfna6zJ9qfsn%2F%2BpGuZ%2FDsirXx1WZXdNVPR3nMVYwAVoHj%2FfPBrUSBtiz27eXaQRBfmt4l%2BZEu61XD2lQL2VI1R80oyOCKvaoZ8px%2BZNDzRWCuALv27nuupxxmKDnKW%2BlxD9HzZjRtg1f4bJHjI6s7oWJgI61ZA4Wd41dko3D0rTO9xdfCjqDLxtms1sYuU85Pj0KRHOTmUWSKW9tJ8kWX32xQbbnkHxDXdPk14a6NzP6WpUMpbrS6s5kgtM8nus3T0pAeMLecjMQGOqUBbgxm6122Ag1LUnB%2FNYQjbgQdwexBcAN%2FGhNVWlOflEpUSr8oyZ3MKPreXu%2FNGAiRJAYEQ99GWeq1r%2B90AedZlj7uNqsgiiN68njwucLMAxmPHZ44THt%2FjhVUiRnksdGSulOVT3DPW6kS0faqCqIG4P7%2FW8KeQlYVQyZTvuEQ1ZXFAtnkP%2BeJvdYWhtQ49yj8uzCs9t8ZEOXROMxFF2rGtVx2omM0&X-Amz-Signature=2e421ed547d43cb811fba828b7ee70eb97fff0d897db178c735304f093d1d4e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQVCUOO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCgM325ISDYirsr07nxngmnrAGbggCOj6vBggfh%2B1Fd1AIgYGERV7O07WzTi8naxZe43BoIBcnAA3UKcnmq1bUyrb8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDBkGPax2TCsam1I0mSrcA3UrZAHhpR8p9EFys05wcrVRL5LjMAa9hOh9Otlc3cPJmf3WeCHcWHUtCT21fyr8Vq%2FxmoIV4yfl8oT0Zi%2BF40IqvNml9tUDUguNwe7RECpMLQlTkixmLLZ%2BqXUho4rcxM390KIqcQBo%2BYfhCJJSMgBC9r8rcREh87p2d1XOtty0XajmdImYNRN9YlL20xgGVjdqijr4v2aiQm%2BxWVFdweb95WOa8Hyvk5a1PqeLXEwBm%2FESV5mEgrB24%2BZS2O3eBjTCbVo1Ba5hyki7vr%2FE34UoMLkUsVL9%2B4BMDCM%2BzbkRQJIyGYU8NgK%2FpdghDcBab4%2BAZ9Af%2FJmKRTI7KLMG6MmLxJmFWxhRD%2FPowNtR2yDnNG8bgRopeqHCfna6zJ9qfsn%2F%2BpGuZ%2FDsirXx1WZXdNVPR3nMVYwAVoHj%2FfPBrUSBtiz27eXaQRBfmt4l%2BZEu61XD2lQL2VI1R80oyOCKvaoZ8px%2BZNDzRWCuALv27nuupxxmKDnKW%2BlxD9HzZjRtg1f4bJHjI6s7oWJgI61ZA4Wd41dko3D0rTO9xdfCjqDLxtms1sYuU85Pj0KRHOTmUWSKW9tJ8kWX32xQbbnkHxDXdPk14a6NzP6WpUMpbrS6s5kgtM8nus3T0pAeMLecjMQGOqUBbgxm6122Ag1LUnB%2FNYQjbgQdwexBcAN%2FGhNVWlOflEpUSr8oyZ3MKPreXu%2FNGAiRJAYEQ99GWeq1r%2B90AedZlj7uNqsgiiN68njwucLMAxmPHZ44THt%2FjhVUiRnksdGSulOVT3DPW6kS0faqCqIG4P7%2FW8KeQlYVQyZTvuEQ1ZXFAtnkP%2BeJvdYWhtQ49yj8uzCs9t8ZEOXROMxFF2rGtVx2omM0&X-Amz-Signature=2986932b4babcc6ee496ac85cb90acacb58d8da4d2d58736cf05fa02cfa9ae18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQVCUOO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCgM325ISDYirsr07nxngmnrAGbggCOj6vBggfh%2B1Fd1AIgYGERV7O07WzTi8naxZe43BoIBcnAA3UKcnmq1bUyrb8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDBkGPax2TCsam1I0mSrcA3UrZAHhpR8p9EFys05wcrVRL5LjMAa9hOh9Otlc3cPJmf3WeCHcWHUtCT21fyr8Vq%2FxmoIV4yfl8oT0Zi%2BF40IqvNml9tUDUguNwe7RECpMLQlTkixmLLZ%2BqXUho4rcxM390KIqcQBo%2BYfhCJJSMgBC9r8rcREh87p2d1XOtty0XajmdImYNRN9YlL20xgGVjdqijr4v2aiQm%2BxWVFdweb95WOa8Hyvk5a1PqeLXEwBm%2FESV5mEgrB24%2BZS2O3eBjTCbVo1Ba5hyki7vr%2FE34UoMLkUsVL9%2B4BMDCM%2BzbkRQJIyGYU8NgK%2FpdghDcBab4%2BAZ9Af%2FJmKRTI7KLMG6MmLxJmFWxhRD%2FPowNtR2yDnNG8bgRopeqHCfna6zJ9qfsn%2F%2BpGuZ%2FDsirXx1WZXdNVPR3nMVYwAVoHj%2FfPBrUSBtiz27eXaQRBfmt4l%2BZEu61XD2lQL2VI1R80oyOCKvaoZ8px%2BZNDzRWCuALv27nuupxxmKDnKW%2BlxD9HzZjRtg1f4bJHjI6s7oWJgI61ZA4Wd41dko3D0rTO9xdfCjqDLxtms1sYuU85Pj0KRHOTmUWSKW9tJ8kWX32xQbbnkHxDXdPk14a6NzP6WpUMpbrS6s5kgtM8nus3T0pAeMLecjMQGOqUBbgxm6122Ag1LUnB%2FNYQjbgQdwexBcAN%2FGhNVWlOflEpUSr8oyZ3MKPreXu%2FNGAiRJAYEQ99GWeq1r%2B90AedZlj7uNqsgiiN68njwucLMAxmPHZ44THt%2FjhVUiRnksdGSulOVT3DPW6kS0faqCqIG4P7%2FW8KeQlYVQyZTvuEQ1ZXFAtnkP%2BeJvdYWhtQ49yj8uzCs9t8ZEOXROMxFF2rGtVx2omM0&X-Amz-Signature=fc6657553cc340cb380e5480669e768af1a37b789aa5dbcdf51a03974ec84f65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQVCUOO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCgM325ISDYirsr07nxngmnrAGbggCOj6vBggfh%2B1Fd1AIgYGERV7O07WzTi8naxZe43BoIBcnAA3UKcnmq1bUyrb8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDBkGPax2TCsam1I0mSrcA3UrZAHhpR8p9EFys05wcrVRL5LjMAa9hOh9Otlc3cPJmf3WeCHcWHUtCT21fyr8Vq%2FxmoIV4yfl8oT0Zi%2BF40IqvNml9tUDUguNwe7RECpMLQlTkixmLLZ%2BqXUho4rcxM390KIqcQBo%2BYfhCJJSMgBC9r8rcREh87p2d1XOtty0XajmdImYNRN9YlL20xgGVjdqijr4v2aiQm%2BxWVFdweb95WOa8Hyvk5a1PqeLXEwBm%2FESV5mEgrB24%2BZS2O3eBjTCbVo1Ba5hyki7vr%2FE34UoMLkUsVL9%2B4BMDCM%2BzbkRQJIyGYU8NgK%2FpdghDcBab4%2BAZ9Af%2FJmKRTI7KLMG6MmLxJmFWxhRD%2FPowNtR2yDnNG8bgRopeqHCfna6zJ9qfsn%2F%2BpGuZ%2FDsirXx1WZXdNVPR3nMVYwAVoHj%2FfPBrUSBtiz27eXaQRBfmt4l%2BZEu61XD2lQL2VI1R80oyOCKvaoZ8px%2BZNDzRWCuALv27nuupxxmKDnKW%2BlxD9HzZjRtg1f4bJHjI6s7oWJgI61ZA4Wd41dko3D0rTO9xdfCjqDLxtms1sYuU85Pj0KRHOTmUWSKW9tJ8kWX32xQbbnkHxDXdPk14a6NzP6WpUMpbrS6s5kgtM8nus3T0pAeMLecjMQGOqUBbgxm6122Ag1LUnB%2FNYQjbgQdwexBcAN%2FGhNVWlOflEpUSr8oyZ3MKPreXu%2FNGAiRJAYEQ99GWeq1r%2B90AedZlj7uNqsgiiN68njwucLMAxmPHZ44THt%2FjhVUiRnksdGSulOVT3DPW6kS0faqCqIG4P7%2FW8KeQlYVQyZTvuEQ1ZXFAtnkP%2BeJvdYWhtQ49yj8uzCs9t8ZEOXROMxFF2rGtVx2omM0&X-Amz-Signature=4ce2b8e29361d34a0aa1dd90004708d707fc42b4fbd4fa2c978c2df211b92992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQVCUOO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCgM325ISDYirsr07nxngmnrAGbggCOj6vBggfh%2B1Fd1AIgYGERV7O07WzTi8naxZe43BoIBcnAA3UKcnmq1bUyrb8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDBkGPax2TCsam1I0mSrcA3UrZAHhpR8p9EFys05wcrVRL5LjMAa9hOh9Otlc3cPJmf3WeCHcWHUtCT21fyr8Vq%2FxmoIV4yfl8oT0Zi%2BF40IqvNml9tUDUguNwe7RECpMLQlTkixmLLZ%2BqXUho4rcxM390KIqcQBo%2BYfhCJJSMgBC9r8rcREh87p2d1XOtty0XajmdImYNRN9YlL20xgGVjdqijr4v2aiQm%2BxWVFdweb95WOa8Hyvk5a1PqeLXEwBm%2FESV5mEgrB24%2BZS2O3eBjTCbVo1Ba5hyki7vr%2FE34UoMLkUsVL9%2B4BMDCM%2BzbkRQJIyGYU8NgK%2FpdghDcBab4%2BAZ9Af%2FJmKRTI7KLMG6MmLxJmFWxhRD%2FPowNtR2yDnNG8bgRopeqHCfna6zJ9qfsn%2F%2BpGuZ%2FDsirXx1WZXdNVPR3nMVYwAVoHj%2FfPBrUSBtiz27eXaQRBfmt4l%2BZEu61XD2lQL2VI1R80oyOCKvaoZ8px%2BZNDzRWCuALv27nuupxxmKDnKW%2BlxD9HzZjRtg1f4bJHjI6s7oWJgI61ZA4Wd41dko3D0rTO9xdfCjqDLxtms1sYuU85Pj0KRHOTmUWSKW9tJ8kWX32xQbbnkHxDXdPk14a6NzP6WpUMpbrS6s5kgtM8nus3T0pAeMLecjMQGOqUBbgxm6122Ag1LUnB%2FNYQjbgQdwexBcAN%2FGhNVWlOflEpUSr8oyZ3MKPreXu%2FNGAiRJAYEQ99GWeq1r%2B90AedZlj7uNqsgiiN68njwucLMAxmPHZ44THt%2FjhVUiRnksdGSulOVT3DPW6kS0faqCqIG4P7%2FW8KeQlYVQyZTvuEQ1ZXFAtnkP%2BeJvdYWhtQ49yj8uzCs9t8ZEOXROMxFF2rGtVx2omM0&X-Amz-Signature=ed2c825ad20f8a953e3702aad2a029988d667edbbb1c999ad0d5dbc011bc7948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQVCUOO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCgM325ISDYirsr07nxngmnrAGbggCOj6vBggfh%2B1Fd1AIgYGERV7O07WzTi8naxZe43BoIBcnAA3UKcnmq1bUyrb8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDBkGPax2TCsam1I0mSrcA3UrZAHhpR8p9EFys05wcrVRL5LjMAa9hOh9Otlc3cPJmf3WeCHcWHUtCT21fyr8Vq%2FxmoIV4yfl8oT0Zi%2BF40IqvNml9tUDUguNwe7RECpMLQlTkixmLLZ%2BqXUho4rcxM390KIqcQBo%2BYfhCJJSMgBC9r8rcREh87p2d1XOtty0XajmdImYNRN9YlL20xgGVjdqijr4v2aiQm%2BxWVFdweb95WOa8Hyvk5a1PqeLXEwBm%2FESV5mEgrB24%2BZS2O3eBjTCbVo1Ba5hyki7vr%2FE34UoMLkUsVL9%2B4BMDCM%2BzbkRQJIyGYU8NgK%2FpdghDcBab4%2BAZ9Af%2FJmKRTI7KLMG6MmLxJmFWxhRD%2FPowNtR2yDnNG8bgRopeqHCfna6zJ9qfsn%2F%2BpGuZ%2FDsirXx1WZXdNVPR3nMVYwAVoHj%2FfPBrUSBtiz27eXaQRBfmt4l%2BZEu61XD2lQL2VI1R80oyOCKvaoZ8px%2BZNDzRWCuALv27nuupxxmKDnKW%2BlxD9HzZjRtg1f4bJHjI6s7oWJgI61ZA4Wd41dko3D0rTO9xdfCjqDLxtms1sYuU85Pj0KRHOTmUWSKW9tJ8kWX32xQbbnkHxDXdPk14a6NzP6WpUMpbrS6s5kgtM8nus3T0pAeMLecjMQGOqUBbgxm6122Ag1LUnB%2FNYQjbgQdwexBcAN%2FGhNVWlOflEpUSr8oyZ3MKPreXu%2FNGAiRJAYEQ99GWeq1r%2B90AedZlj7uNqsgiiN68njwucLMAxmPHZ44THt%2FjhVUiRnksdGSulOVT3DPW6kS0faqCqIG4P7%2FW8KeQlYVQyZTvuEQ1ZXFAtnkP%2BeJvdYWhtQ49yj8uzCs9t8ZEOXROMxFF2rGtVx2omM0&X-Amz-Signature=9490b62ec870adf41ef0066f573dafd6ef425b43ee62a09dfea5b5652533d919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQVCUOO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCgM325ISDYirsr07nxngmnrAGbggCOj6vBggfh%2B1Fd1AIgYGERV7O07WzTi8naxZe43BoIBcnAA3UKcnmq1bUyrb8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDBkGPax2TCsam1I0mSrcA3UrZAHhpR8p9EFys05wcrVRL5LjMAa9hOh9Otlc3cPJmf3WeCHcWHUtCT21fyr8Vq%2FxmoIV4yfl8oT0Zi%2BF40IqvNml9tUDUguNwe7RECpMLQlTkixmLLZ%2BqXUho4rcxM390KIqcQBo%2BYfhCJJSMgBC9r8rcREh87p2d1XOtty0XajmdImYNRN9YlL20xgGVjdqijr4v2aiQm%2BxWVFdweb95WOa8Hyvk5a1PqeLXEwBm%2FESV5mEgrB24%2BZS2O3eBjTCbVo1Ba5hyki7vr%2FE34UoMLkUsVL9%2B4BMDCM%2BzbkRQJIyGYU8NgK%2FpdghDcBab4%2BAZ9Af%2FJmKRTI7KLMG6MmLxJmFWxhRD%2FPowNtR2yDnNG8bgRopeqHCfna6zJ9qfsn%2F%2BpGuZ%2FDsirXx1WZXdNVPR3nMVYwAVoHj%2FfPBrUSBtiz27eXaQRBfmt4l%2BZEu61XD2lQL2VI1R80oyOCKvaoZ8px%2BZNDzRWCuALv27nuupxxmKDnKW%2BlxD9HzZjRtg1f4bJHjI6s7oWJgI61ZA4Wd41dko3D0rTO9xdfCjqDLxtms1sYuU85Pj0KRHOTmUWSKW9tJ8kWX32xQbbnkHxDXdPk14a6NzP6WpUMpbrS6s5kgtM8nus3T0pAeMLecjMQGOqUBbgxm6122Ag1LUnB%2FNYQjbgQdwexBcAN%2FGhNVWlOflEpUSr8oyZ3MKPreXu%2FNGAiRJAYEQ99GWeq1r%2B90AedZlj7uNqsgiiN68njwucLMAxmPHZ44THt%2FjhVUiRnksdGSulOVT3DPW6kS0faqCqIG4P7%2FW8KeQlYVQyZTvuEQ1ZXFAtnkP%2BeJvdYWhtQ49yj8uzCs9t8ZEOXROMxFF2rGtVx2omM0&X-Amz-Signature=773dad550589d59b4609f6fd223be7aba4f1665095ca30a154dc646bb2432c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
