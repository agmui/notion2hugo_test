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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTQJQMF%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDKbc9NaBmtQCPOsMEEGTxLt19VmMnaWmXD4LM622Xl8AiB1Op74M5rsfEUJDMe0VfYvJgI6DPJWKsGb4ZtKf1%2BpQir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMavojBlfYRmvbbizxKtwDCRTJHoxtKPbcHBctCaqc%2FDbmkhFU9TU%2B09HswyHoAHsIPKmxslhqx7J%2BGeXMcxv%2BETAHDTBsMI0yoUSBWnoH30A7E1gzmEd3iGKxw7%2BXpoMmDaownAUhi1zhqJWGihE87m8zl8xUELUkARHtQgUUkoyE3zM4XUjYRoCynmlt3NmpfeulhywJz1%2Bl5Q%2BespsGkd2SvgQlhXVflenNvmxhApnVkTKyk3eaCF6sdIl1KPL6t6%2FnrATfyEV%2B%2FQN8AllPSvnKGLm2UBMNdqoQL3M8HlJdTPiLzwdl3WrAGhk6tYnTddipALtyS%2BnN3RNxkwbN0N1rnhJv5LViFm7eF3vWcNI5142P2s2A3bIhfsUOEfiGVJ2x7%2FufTXc22tEnLMabuD%2FB6JraznZodGRwHVs4R76CsmWfhk3hoA6%2BfjreXd6Pn1YqZQvqvk8YmpyFp4Zn4X2JofSGUqImn4R3hcbnqMVMi8Eq50xaPpiyRi7Th56ZIj268TU93YTQLY8fuW7hbmeImCsakYUeja3NxG1UvSvnmQwIa21FzFsQcugNH9rxHoGUuvn%2B5cg6zoXmqL%2BHGn3prB5xR%2Fn7SAYKXv%2FAF8W5TlFBo98RhqBOdtOkX5oIhzWUyMnW%2BkH%2BVqww8fbowgY6pgFA0Yt7OR4nIFVURmv0je8C5gfSCRZ8pJwN7KYWXX3aPrqYjXJmP6T6H%2FN3%2FhXOjiaXSCQ7IbHxDGtsBEOTBEhmGRPnM4Q8Ne0dU9LmNOVOkAp0PQ2LSonNVZQr5sKK2LLBgyJz22JRPe9yKfPrQdGrYaJr9uJVIrktDIOGx9JypD3ffFSIoSuCa1kyVATzhlX6jDc0cH53VSofPC5oRTwxt55bp7lM&X-Amz-Signature=0159c52db32f6f7607018915f5bb620b8f58ba61e045f5bbab56babb070c7e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTQJQMF%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDKbc9NaBmtQCPOsMEEGTxLt19VmMnaWmXD4LM622Xl8AiB1Op74M5rsfEUJDMe0VfYvJgI6DPJWKsGb4ZtKf1%2BpQir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMavojBlfYRmvbbizxKtwDCRTJHoxtKPbcHBctCaqc%2FDbmkhFU9TU%2B09HswyHoAHsIPKmxslhqx7J%2BGeXMcxv%2BETAHDTBsMI0yoUSBWnoH30A7E1gzmEd3iGKxw7%2BXpoMmDaownAUhi1zhqJWGihE87m8zl8xUELUkARHtQgUUkoyE3zM4XUjYRoCynmlt3NmpfeulhywJz1%2Bl5Q%2BespsGkd2SvgQlhXVflenNvmxhApnVkTKyk3eaCF6sdIl1KPL6t6%2FnrATfyEV%2B%2FQN8AllPSvnKGLm2UBMNdqoQL3M8HlJdTPiLzwdl3WrAGhk6tYnTddipALtyS%2BnN3RNxkwbN0N1rnhJv5LViFm7eF3vWcNI5142P2s2A3bIhfsUOEfiGVJ2x7%2FufTXc22tEnLMabuD%2FB6JraznZodGRwHVs4R76CsmWfhk3hoA6%2BfjreXd6Pn1YqZQvqvk8YmpyFp4Zn4X2JofSGUqImn4R3hcbnqMVMi8Eq50xaPpiyRi7Th56ZIj268TU93YTQLY8fuW7hbmeImCsakYUeja3NxG1UvSvnmQwIa21FzFsQcugNH9rxHoGUuvn%2B5cg6zoXmqL%2BHGn3prB5xR%2Fn7SAYKXv%2FAF8W5TlFBo98RhqBOdtOkX5oIhzWUyMnW%2BkH%2BVqww8fbowgY6pgFA0Yt7OR4nIFVURmv0je8C5gfSCRZ8pJwN7KYWXX3aPrqYjXJmP6T6H%2FN3%2FhXOjiaXSCQ7IbHxDGtsBEOTBEhmGRPnM4Q8Ne0dU9LmNOVOkAp0PQ2LSonNVZQr5sKK2LLBgyJz22JRPe9yKfPrQdGrYaJr9uJVIrktDIOGx9JypD3ffFSIoSuCa1kyVATzhlX6jDc0cH53VSofPC5oRTwxt55bp7lM&X-Amz-Signature=ec32011ed47b26bb861e3582745ae7295fc59ac0abe977e760a1679f9be153a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTQJQMF%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDKbc9NaBmtQCPOsMEEGTxLt19VmMnaWmXD4LM622Xl8AiB1Op74M5rsfEUJDMe0VfYvJgI6DPJWKsGb4ZtKf1%2BpQir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMavojBlfYRmvbbizxKtwDCRTJHoxtKPbcHBctCaqc%2FDbmkhFU9TU%2B09HswyHoAHsIPKmxslhqx7J%2BGeXMcxv%2BETAHDTBsMI0yoUSBWnoH30A7E1gzmEd3iGKxw7%2BXpoMmDaownAUhi1zhqJWGihE87m8zl8xUELUkARHtQgUUkoyE3zM4XUjYRoCynmlt3NmpfeulhywJz1%2Bl5Q%2BespsGkd2SvgQlhXVflenNvmxhApnVkTKyk3eaCF6sdIl1KPL6t6%2FnrATfyEV%2B%2FQN8AllPSvnKGLm2UBMNdqoQL3M8HlJdTPiLzwdl3WrAGhk6tYnTddipALtyS%2BnN3RNxkwbN0N1rnhJv5LViFm7eF3vWcNI5142P2s2A3bIhfsUOEfiGVJ2x7%2FufTXc22tEnLMabuD%2FB6JraznZodGRwHVs4R76CsmWfhk3hoA6%2BfjreXd6Pn1YqZQvqvk8YmpyFp4Zn4X2JofSGUqImn4R3hcbnqMVMi8Eq50xaPpiyRi7Th56ZIj268TU93YTQLY8fuW7hbmeImCsakYUeja3NxG1UvSvnmQwIa21FzFsQcugNH9rxHoGUuvn%2B5cg6zoXmqL%2BHGn3prB5xR%2Fn7SAYKXv%2FAF8W5TlFBo98RhqBOdtOkX5oIhzWUyMnW%2BkH%2BVqww8fbowgY6pgFA0Yt7OR4nIFVURmv0je8C5gfSCRZ8pJwN7KYWXX3aPrqYjXJmP6T6H%2FN3%2FhXOjiaXSCQ7IbHxDGtsBEOTBEhmGRPnM4Q8Ne0dU9LmNOVOkAp0PQ2LSonNVZQr5sKK2LLBgyJz22JRPe9yKfPrQdGrYaJr9uJVIrktDIOGx9JypD3ffFSIoSuCa1kyVATzhlX6jDc0cH53VSofPC5oRTwxt55bp7lM&X-Amz-Signature=0edc05f8345842d1f19c75f1edbc32502bd2ca506296aa5aedfe1c5d918a374c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTQJQMF%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDKbc9NaBmtQCPOsMEEGTxLt19VmMnaWmXD4LM622Xl8AiB1Op74M5rsfEUJDMe0VfYvJgI6DPJWKsGb4ZtKf1%2BpQir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMavojBlfYRmvbbizxKtwDCRTJHoxtKPbcHBctCaqc%2FDbmkhFU9TU%2B09HswyHoAHsIPKmxslhqx7J%2BGeXMcxv%2BETAHDTBsMI0yoUSBWnoH30A7E1gzmEd3iGKxw7%2BXpoMmDaownAUhi1zhqJWGihE87m8zl8xUELUkARHtQgUUkoyE3zM4XUjYRoCynmlt3NmpfeulhywJz1%2Bl5Q%2BespsGkd2SvgQlhXVflenNvmxhApnVkTKyk3eaCF6sdIl1KPL6t6%2FnrATfyEV%2B%2FQN8AllPSvnKGLm2UBMNdqoQL3M8HlJdTPiLzwdl3WrAGhk6tYnTddipALtyS%2BnN3RNxkwbN0N1rnhJv5LViFm7eF3vWcNI5142P2s2A3bIhfsUOEfiGVJ2x7%2FufTXc22tEnLMabuD%2FB6JraznZodGRwHVs4R76CsmWfhk3hoA6%2BfjreXd6Pn1YqZQvqvk8YmpyFp4Zn4X2JofSGUqImn4R3hcbnqMVMi8Eq50xaPpiyRi7Th56ZIj268TU93YTQLY8fuW7hbmeImCsakYUeja3NxG1UvSvnmQwIa21FzFsQcugNH9rxHoGUuvn%2B5cg6zoXmqL%2BHGn3prB5xR%2Fn7SAYKXv%2FAF8W5TlFBo98RhqBOdtOkX5oIhzWUyMnW%2BkH%2BVqww8fbowgY6pgFA0Yt7OR4nIFVURmv0je8C5gfSCRZ8pJwN7KYWXX3aPrqYjXJmP6T6H%2FN3%2FhXOjiaXSCQ7IbHxDGtsBEOTBEhmGRPnM4Q8Ne0dU9LmNOVOkAp0PQ2LSonNVZQr5sKK2LLBgyJz22JRPe9yKfPrQdGrYaJr9uJVIrktDIOGx9JypD3ffFSIoSuCa1kyVATzhlX6jDc0cH53VSofPC5oRTwxt55bp7lM&X-Amz-Signature=ce95c8c56aedb8ef53c515c3aa03adf2a09583bd78f46baa1cf79422c1e5ae82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTQJQMF%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDKbc9NaBmtQCPOsMEEGTxLt19VmMnaWmXD4LM622Xl8AiB1Op74M5rsfEUJDMe0VfYvJgI6DPJWKsGb4ZtKf1%2BpQir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMavojBlfYRmvbbizxKtwDCRTJHoxtKPbcHBctCaqc%2FDbmkhFU9TU%2B09HswyHoAHsIPKmxslhqx7J%2BGeXMcxv%2BETAHDTBsMI0yoUSBWnoH30A7E1gzmEd3iGKxw7%2BXpoMmDaownAUhi1zhqJWGihE87m8zl8xUELUkARHtQgUUkoyE3zM4XUjYRoCynmlt3NmpfeulhywJz1%2Bl5Q%2BespsGkd2SvgQlhXVflenNvmxhApnVkTKyk3eaCF6sdIl1KPL6t6%2FnrATfyEV%2B%2FQN8AllPSvnKGLm2UBMNdqoQL3M8HlJdTPiLzwdl3WrAGhk6tYnTddipALtyS%2BnN3RNxkwbN0N1rnhJv5LViFm7eF3vWcNI5142P2s2A3bIhfsUOEfiGVJ2x7%2FufTXc22tEnLMabuD%2FB6JraznZodGRwHVs4R76CsmWfhk3hoA6%2BfjreXd6Pn1YqZQvqvk8YmpyFp4Zn4X2JofSGUqImn4R3hcbnqMVMi8Eq50xaPpiyRi7Th56ZIj268TU93YTQLY8fuW7hbmeImCsakYUeja3NxG1UvSvnmQwIa21FzFsQcugNH9rxHoGUuvn%2B5cg6zoXmqL%2BHGn3prB5xR%2Fn7SAYKXv%2FAF8W5TlFBo98RhqBOdtOkX5oIhzWUyMnW%2BkH%2BVqww8fbowgY6pgFA0Yt7OR4nIFVURmv0je8C5gfSCRZ8pJwN7KYWXX3aPrqYjXJmP6T6H%2FN3%2FhXOjiaXSCQ7IbHxDGtsBEOTBEhmGRPnM4Q8Ne0dU9LmNOVOkAp0PQ2LSonNVZQr5sKK2LLBgyJz22JRPe9yKfPrQdGrYaJr9uJVIrktDIOGx9JypD3ffFSIoSuCa1kyVATzhlX6jDc0cH53VSofPC5oRTwxt55bp7lM&X-Amz-Signature=77e3054b7183e165bb1c4743b8431a4355b096740df127b8bd0accfd31725d8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTQJQMF%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDKbc9NaBmtQCPOsMEEGTxLt19VmMnaWmXD4LM622Xl8AiB1Op74M5rsfEUJDMe0VfYvJgI6DPJWKsGb4ZtKf1%2BpQir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMavojBlfYRmvbbizxKtwDCRTJHoxtKPbcHBctCaqc%2FDbmkhFU9TU%2B09HswyHoAHsIPKmxslhqx7J%2BGeXMcxv%2BETAHDTBsMI0yoUSBWnoH30A7E1gzmEd3iGKxw7%2BXpoMmDaownAUhi1zhqJWGihE87m8zl8xUELUkARHtQgUUkoyE3zM4XUjYRoCynmlt3NmpfeulhywJz1%2Bl5Q%2BespsGkd2SvgQlhXVflenNvmxhApnVkTKyk3eaCF6sdIl1KPL6t6%2FnrATfyEV%2B%2FQN8AllPSvnKGLm2UBMNdqoQL3M8HlJdTPiLzwdl3WrAGhk6tYnTddipALtyS%2BnN3RNxkwbN0N1rnhJv5LViFm7eF3vWcNI5142P2s2A3bIhfsUOEfiGVJ2x7%2FufTXc22tEnLMabuD%2FB6JraznZodGRwHVs4R76CsmWfhk3hoA6%2BfjreXd6Pn1YqZQvqvk8YmpyFp4Zn4X2JofSGUqImn4R3hcbnqMVMi8Eq50xaPpiyRi7Th56ZIj268TU93YTQLY8fuW7hbmeImCsakYUeja3NxG1UvSvnmQwIa21FzFsQcugNH9rxHoGUuvn%2B5cg6zoXmqL%2BHGn3prB5xR%2Fn7SAYKXv%2FAF8W5TlFBo98RhqBOdtOkX5oIhzWUyMnW%2BkH%2BVqww8fbowgY6pgFA0Yt7OR4nIFVURmv0je8C5gfSCRZ8pJwN7KYWXX3aPrqYjXJmP6T6H%2FN3%2FhXOjiaXSCQ7IbHxDGtsBEOTBEhmGRPnM4Q8Ne0dU9LmNOVOkAp0PQ2LSonNVZQr5sKK2LLBgyJz22JRPe9yKfPrQdGrYaJr9uJVIrktDIOGx9JypD3ffFSIoSuCa1kyVATzhlX6jDc0cH53VSofPC5oRTwxt55bp7lM&X-Amz-Signature=ab99d675d97318c7983dfa1df84d0cee90f50dabc117d3614d4d421227001be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTQJQMF%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDKbc9NaBmtQCPOsMEEGTxLt19VmMnaWmXD4LM622Xl8AiB1Op74M5rsfEUJDMe0VfYvJgI6DPJWKsGb4ZtKf1%2BpQir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMavojBlfYRmvbbizxKtwDCRTJHoxtKPbcHBctCaqc%2FDbmkhFU9TU%2B09HswyHoAHsIPKmxslhqx7J%2BGeXMcxv%2BETAHDTBsMI0yoUSBWnoH30A7E1gzmEd3iGKxw7%2BXpoMmDaownAUhi1zhqJWGihE87m8zl8xUELUkARHtQgUUkoyE3zM4XUjYRoCynmlt3NmpfeulhywJz1%2Bl5Q%2BespsGkd2SvgQlhXVflenNvmxhApnVkTKyk3eaCF6sdIl1KPL6t6%2FnrATfyEV%2B%2FQN8AllPSvnKGLm2UBMNdqoQL3M8HlJdTPiLzwdl3WrAGhk6tYnTddipALtyS%2BnN3RNxkwbN0N1rnhJv5LViFm7eF3vWcNI5142P2s2A3bIhfsUOEfiGVJ2x7%2FufTXc22tEnLMabuD%2FB6JraznZodGRwHVs4R76CsmWfhk3hoA6%2BfjreXd6Pn1YqZQvqvk8YmpyFp4Zn4X2JofSGUqImn4R3hcbnqMVMi8Eq50xaPpiyRi7Th56ZIj268TU93YTQLY8fuW7hbmeImCsakYUeja3NxG1UvSvnmQwIa21FzFsQcugNH9rxHoGUuvn%2B5cg6zoXmqL%2BHGn3prB5xR%2Fn7SAYKXv%2FAF8W5TlFBo98RhqBOdtOkX5oIhzWUyMnW%2BkH%2BVqww8fbowgY6pgFA0Yt7OR4nIFVURmv0je8C5gfSCRZ8pJwN7KYWXX3aPrqYjXJmP6T6H%2FN3%2FhXOjiaXSCQ7IbHxDGtsBEOTBEhmGRPnM4Q8Ne0dU9LmNOVOkAp0PQ2LSonNVZQr5sKK2LLBgyJz22JRPe9yKfPrQdGrYaJr9uJVIrktDIOGx9JypD3ffFSIoSuCa1kyVATzhlX6jDc0cH53VSofPC5oRTwxt55bp7lM&X-Amz-Signature=94af5bdfe8132f8abbdd23df4b11477e3a735ec458d9332676e69e1862560df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTQJQMF%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDKbc9NaBmtQCPOsMEEGTxLt19VmMnaWmXD4LM622Xl8AiB1Op74M5rsfEUJDMe0VfYvJgI6DPJWKsGb4ZtKf1%2BpQir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMavojBlfYRmvbbizxKtwDCRTJHoxtKPbcHBctCaqc%2FDbmkhFU9TU%2B09HswyHoAHsIPKmxslhqx7J%2BGeXMcxv%2BETAHDTBsMI0yoUSBWnoH30A7E1gzmEd3iGKxw7%2BXpoMmDaownAUhi1zhqJWGihE87m8zl8xUELUkARHtQgUUkoyE3zM4XUjYRoCynmlt3NmpfeulhywJz1%2Bl5Q%2BespsGkd2SvgQlhXVflenNvmxhApnVkTKyk3eaCF6sdIl1KPL6t6%2FnrATfyEV%2B%2FQN8AllPSvnKGLm2UBMNdqoQL3M8HlJdTPiLzwdl3WrAGhk6tYnTddipALtyS%2BnN3RNxkwbN0N1rnhJv5LViFm7eF3vWcNI5142P2s2A3bIhfsUOEfiGVJ2x7%2FufTXc22tEnLMabuD%2FB6JraznZodGRwHVs4R76CsmWfhk3hoA6%2BfjreXd6Pn1YqZQvqvk8YmpyFp4Zn4X2JofSGUqImn4R3hcbnqMVMi8Eq50xaPpiyRi7Th56ZIj268TU93YTQLY8fuW7hbmeImCsakYUeja3NxG1UvSvnmQwIa21FzFsQcugNH9rxHoGUuvn%2B5cg6zoXmqL%2BHGn3prB5xR%2Fn7SAYKXv%2FAF8W5TlFBo98RhqBOdtOkX5oIhzWUyMnW%2BkH%2BVqww8fbowgY6pgFA0Yt7OR4nIFVURmv0je8C5gfSCRZ8pJwN7KYWXX3aPrqYjXJmP6T6H%2FN3%2FhXOjiaXSCQ7IbHxDGtsBEOTBEhmGRPnM4Q8Ne0dU9LmNOVOkAp0PQ2LSonNVZQr5sKK2LLBgyJz22JRPe9yKfPrQdGrYaJr9uJVIrktDIOGx9JypD3ffFSIoSuCa1kyVATzhlX6jDc0cH53VSofPC5oRTwxt55bp7lM&X-Amz-Signature=976ffaee7d68930d39cac5aa05de5119fa4697bea11db9963a264969a08da1c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
