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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVR2U4ZP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9q5gJfJYpVN1Y2DPCSJXAOINNsnaLMu6Vp9cK%2Fs07YQIhAJurK77N4hclLJksVjgu3Kzt8Nw1ZZfT5QrDeZkTl4v1KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp1bpknItWYh9siekq3AMY5FyMmQrcGtyHqYKVhJUj0Sv9Ud6aXYhr6hnlYvSHf9iyWkpb9v4fpYujDvOE%2FOCzqurhnNJpJ%2FNAroWKZuaveG56CbVU239pdHg9HJRA4KVZCoyo4vgeztdBe4JOyKXPz9AuJpzv30JHz7m%2BP1XW1BML0ny4GDEqm6D4owUFZOiGAGhRhPyu4i8zMFE15dLOwtn1VkuTMs8mWdzzD2B9t1Ed3AdayCOvQQSQcm1pU9vRBZUBc%2BSQh7yF8BzhKqU6KPbb0rjOKHAnyd5421KAx4Ws4Tph%2BhaankjNDct7Cl1M7hTlMM7Pbu7tR0VZfL3OyE5k0Ez%2BeRcDQnxL6tF1370PJ9%2BcPb1Fj4FTAEdDR4yJlUe6JHqwwHhr%2BMvXBvG1u8SsoXx6v2QNg%2Bn2rabJZzPLziytKa2KUpS%2FTvypkrzvrFHHwDfj%2BL9yw2JRO%2B0A8MCWda%2Bwoc2UFtiOWQp6%2FUoePUJwESDKAjWc80feERrSQCvTZ%2FL952IR%2FumcuG3%2FnCu3NkIp%2F%2F%2FQmanuUhhgE59jr5JFNV6tgc1D121ntSNpJ1GSThYriHAPU0eakA4FdgZYbJVY4%2BHLzPt%2F00u76TlVdQIQVCLi1Qqemolp2%2FTyDKg6zxgdMR6tNDCx3aq9BjqkAUu2BPU2L02fNGpkwQaJ2o7PatmfdAOEqt9lvargE8iDwusQuuPwOkC0TFRuqHkE%2FGlOSSt1kiy0i6Gvk9GuTGzvkh5t50sb0ZYLnrZ9TlIJ8aiO5TSBgdvZySIkhaiIqQryxVNonmRWc%2FKFiyTvX3Dn3%2FAZSKKkf8FhGukA7fUA886Fcu0hTql4zlaMW8Zsos09B9uaqmAFsqQLU4u4%2Fy5bGAoA&X-Amz-Signature=03245beb49b51e29d0dea8a5d1726e3276133f600a4ff08f017c20a28a0e13ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVR2U4ZP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9q5gJfJYpVN1Y2DPCSJXAOINNsnaLMu6Vp9cK%2Fs07YQIhAJurK77N4hclLJksVjgu3Kzt8Nw1ZZfT5QrDeZkTl4v1KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp1bpknItWYh9siekq3AMY5FyMmQrcGtyHqYKVhJUj0Sv9Ud6aXYhr6hnlYvSHf9iyWkpb9v4fpYujDvOE%2FOCzqurhnNJpJ%2FNAroWKZuaveG56CbVU239pdHg9HJRA4KVZCoyo4vgeztdBe4JOyKXPz9AuJpzv30JHz7m%2BP1XW1BML0ny4GDEqm6D4owUFZOiGAGhRhPyu4i8zMFE15dLOwtn1VkuTMs8mWdzzD2B9t1Ed3AdayCOvQQSQcm1pU9vRBZUBc%2BSQh7yF8BzhKqU6KPbb0rjOKHAnyd5421KAx4Ws4Tph%2BhaankjNDct7Cl1M7hTlMM7Pbu7tR0VZfL3OyE5k0Ez%2BeRcDQnxL6tF1370PJ9%2BcPb1Fj4FTAEdDR4yJlUe6JHqwwHhr%2BMvXBvG1u8SsoXx6v2QNg%2Bn2rabJZzPLziytKa2KUpS%2FTvypkrzvrFHHwDfj%2BL9yw2JRO%2B0A8MCWda%2Bwoc2UFtiOWQp6%2FUoePUJwESDKAjWc80feERrSQCvTZ%2FL952IR%2FumcuG3%2FnCu3NkIp%2F%2F%2FQmanuUhhgE59jr5JFNV6tgc1D121ntSNpJ1GSThYriHAPU0eakA4FdgZYbJVY4%2BHLzPt%2F00u76TlVdQIQVCLi1Qqemolp2%2FTyDKg6zxgdMR6tNDCx3aq9BjqkAUu2BPU2L02fNGpkwQaJ2o7PatmfdAOEqt9lvargE8iDwusQuuPwOkC0TFRuqHkE%2FGlOSSt1kiy0i6Gvk9GuTGzvkh5t50sb0ZYLnrZ9TlIJ8aiO5TSBgdvZySIkhaiIqQryxVNonmRWc%2FKFiyTvX3Dn3%2FAZSKKkf8FhGukA7fUA886Fcu0hTql4zlaMW8Zsos09B9uaqmAFsqQLU4u4%2Fy5bGAoA&X-Amz-Signature=b8b14657cbd10a17a2e49d922a7d1d2988c7e796f1f90067ccd14ec471e3ef05&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVR2U4ZP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9q5gJfJYpVN1Y2DPCSJXAOINNsnaLMu6Vp9cK%2Fs07YQIhAJurK77N4hclLJksVjgu3Kzt8Nw1ZZfT5QrDeZkTl4v1KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp1bpknItWYh9siekq3AMY5FyMmQrcGtyHqYKVhJUj0Sv9Ud6aXYhr6hnlYvSHf9iyWkpb9v4fpYujDvOE%2FOCzqurhnNJpJ%2FNAroWKZuaveG56CbVU239pdHg9HJRA4KVZCoyo4vgeztdBe4JOyKXPz9AuJpzv30JHz7m%2BP1XW1BML0ny4GDEqm6D4owUFZOiGAGhRhPyu4i8zMFE15dLOwtn1VkuTMs8mWdzzD2B9t1Ed3AdayCOvQQSQcm1pU9vRBZUBc%2BSQh7yF8BzhKqU6KPbb0rjOKHAnyd5421KAx4Ws4Tph%2BhaankjNDct7Cl1M7hTlMM7Pbu7tR0VZfL3OyE5k0Ez%2BeRcDQnxL6tF1370PJ9%2BcPb1Fj4FTAEdDR4yJlUe6JHqwwHhr%2BMvXBvG1u8SsoXx6v2QNg%2Bn2rabJZzPLziytKa2KUpS%2FTvypkrzvrFHHwDfj%2BL9yw2JRO%2B0A8MCWda%2Bwoc2UFtiOWQp6%2FUoePUJwESDKAjWc80feERrSQCvTZ%2FL952IR%2FumcuG3%2FnCu3NkIp%2F%2F%2FQmanuUhhgE59jr5JFNV6tgc1D121ntSNpJ1GSThYriHAPU0eakA4FdgZYbJVY4%2BHLzPt%2F00u76TlVdQIQVCLi1Qqemolp2%2FTyDKg6zxgdMR6tNDCx3aq9BjqkAUu2BPU2L02fNGpkwQaJ2o7PatmfdAOEqt9lvargE8iDwusQuuPwOkC0TFRuqHkE%2FGlOSSt1kiy0i6Gvk9GuTGzvkh5t50sb0ZYLnrZ9TlIJ8aiO5TSBgdvZySIkhaiIqQryxVNonmRWc%2FKFiyTvX3Dn3%2FAZSKKkf8FhGukA7fUA886Fcu0hTql4zlaMW8Zsos09B9uaqmAFsqQLU4u4%2Fy5bGAoA&X-Amz-Signature=ce5cdd94633f69a26543473ce9d52ef4b4c6b113b9b9da8a10b3f8307a17266a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVR2U4ZP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9q5gJfJYpVN1Y2DPCSJXAOINNsnaLMu6Vp9cK%2Fs07YQIhAJurK77N4hclLJksVjgu3Kzt8Nw1ZZfT5QrDeZkTl4v1KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp1bpknItWYh9siekq3AMY5FyMmQrcGtyHqYKVhJUj0Sv9Ud6aXYhr6hnlYvSHf9iyWkpb9v4fpYujDvOE%2FOCzqurhnNJpJ%2FNAroWKZuaveG56CbVU239pdHg9HJRA4KVZCoyo4vgeztdBe4JOyKXPz9AuJpzv30JHz7m%2BP1XW1BML0ny4GDEqm6D4owUFZOiGAGhRhPyu4i8zMFE15dLOwtn1VkuTMs8mWdzzD2B9t1Ed3AdayCOvQQSQcm1pU9vRBZUBc%2BSQh7yF8BzhKqU6KPbb0rjOKHAnyd5421KAx4Ws4Tph%2BhaankjNDct7Cl1M7hTlMM7Pbu7tR0VZfL3OyE5k0Ez%2BeRcDQnxL6tF1370PJ9%2BcPb1Fj4FTAEdDR4yJlUe6JHqwwHhr%2BMvXBvG1u8SsoXx6v2QNg%2Bn2rabJZzPLziytKa2KUpS%2FTvypkrzvrFHHwDfj%2BL9yw2JRO%2B0A8MCWda%2Bwoc2UFtiOWQp6%2FUoePUJwESDKAjWc80feERrSQCvTZ%2FL952IR%2FumcuG3%2FnCu3NkIp%2F%2F%2FQmanuUhhgE59jr5JFNV6tgc1D121ntSNpJ1GSThYriHAPU0eakA4FdgZYbJVY4%2BHLzPt%2F00u76TlVdQIQVCLi1Qqemolp2%2FTyDKg6zxgdMR6tNDCx3aq9BjqkAUu2BPU2L02fNGpkwQaJ2o7PatmfdAOEqt9lvargE8iDwusQuuPwOkC0TFRuqHkE%2FGlOSSt1kiy0i6Gvk9GuTGzvkh5t50sb0ZYLnrZ9TlIJ8aiO5TSBgdvZySIkhaiIqQryxVNonmRWc%2FKFiyTvX3Dn3%2FAZSKKkf8FhGukA7fUA886Fcu0hTql4zlaMW8Zsos09B9uaqmAFsqQLU4u4%2Fy5bGAoA&X-Amz-Signature=a1a36ed76eefb18237e1353e54e93b5f2372c859f6f158d4e99622048df0a176&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVR2U4ZP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9q5gJfJYpVN1Y2DPCSJXAOINNsnaLMu6Vp9cK%2Fs07YQIhAJurK77N4hclLJksVjgu3Kzt8Nw1ZZfT5QrDeZkTl4v1KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp1bpknItWYh9siekq3AMY5FyMmQrcGtyHqYKVhJUj0Sv9Ud6aXYhr6hnlYvSHf9iyWkpb9v4fpYujDvOE%2FOCzqurhnNJpJ%2FNAroWKZuaveG56CbVU239pdHg9HJRA4KVZCoyo4vgeztdBe4JOyKXPz9AuJpzv30JHz7m%2BP1XW1BML0ny4GDEqm6D4owUFZOiGAGhRhPyu4i8zMFE15dLOwtn1VkuTMs8mWdzzD2B9t1Ed3AdayCOvQQSQcm1pU9vRBZUBc%2BSQh7yF8BzhKqU6KPbb0rjOKHAnyd5421KAx4Ws4Tph%2BhaankjNDct7Cl1M7hTlMM7Pbu7tR0VZfL3OyE5k0Ez%2BeRcDQnxL6tF1370PJ9%2BcPb1Fj4FTAEdDR4yJlUe6JHqwwHhr%2BMvXBvG1u8SsoXx6v2QNg%2Bn2rabJZzPLziytKa2KUpS%2FTvypkrzvrFHHwDfj%2BL9yw2JRO%2B0A8MCWda%2Bwoc2UFtiOWQp6%2FUoePUJwESDKAjWc80feERrSQCvTZ%2FL952IR%2FumcuG3%2FnCu3NkIp%2F%2F%2FQmanuUhhgE59jr5JFNV6tgc1D121ntSNpJ1GSThYriHAPU0eakA4FdgZYbJVY4%2BHLzPt%2F00u76TlVdQIQVCLi1Qqemolp2%2FTyDKg6zxgdMR6tNDCx3aq9BjqkAUu2BPU2L02fNGpkwQaJ2o7PatmfdAOEqt9lvargE8iDwusQuuPwOkC0TFRuqHkE%2FGlOSSt1kiy0i6Gvk9GuTGzvkh5t50sb0ZYLnrZ9TlIJ8aiO5TSBgdvZySIkhaiIqQryxVNonmRWc%2FKFiyTvX3Dn3%2FAZSKKkf8FhGukA7fUA886Fcu0hTql4zlaMW8Zsos09B9uaqmAFsqQLU4u4%2Fy5bGAoA&X-Amz-Signature=6eaafb019c94282cbf5b99de1c64d5a3d350c92a0228ccd79b22bb57929ba070&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVR2U4ZP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9q5gJfJYpVN1Y2DPCSJXAOINNsnaLMu6Vp9cK%2Fs07YQIhAJurK77N4hclLJksVjgu3Kzt8Nw1ZZfT5QrDeZkTl4v1KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp1bpknItWYh9siekq3AMY5FyMmQrcGtyHqYKVhJUj0Sv9Ud6aXYhr6hnlYvSHf9iyWkpb9v4fpYujDvOE%2FOCzqurhnNJpJ%2FNAroWKZuaveG56CbVU239pdHg9HJRA4KVZCoyo4vgeztdBe4JOyKXPz9AuJpzv30JHz7m%2BP1XW1BML0ny4GDEqm6D4owUFZOiGAGhRhPyu4i8zMFE15dLOwtn1VkuTMs8mWdzzD2B9t1Ed3AdayCOvQQSQcm1pU9vRBZUBc%2BSQh7yF8BzhKqU6KPbb0rjOKHAnyd5421KAx4Ws4Tph%2BhaankjNDct7Cl1M7hTlMM7Pbu7tR0VZfL3OyE5k0Ez%2BeRcDQnxL6tF1370PJ9%2BcPb1Fj4FTAEdDR4yJlUe6JHqwwHhr%2BMvXBvG1u8SsoXx6v2QNg%2Bn2rabJZzPLziytKa2KUpS%2FTvypkrzvrFHHwDfj%2BL9yw2JRO%2B0A8MCWda%2Bwoc2UFtiOWQp6%2FUoePUJwESDKAjWc80feERrSQCvTZ%2FL952IR%2FumcuG3%2FnCu3NkIp%2F%2F%2FQmanuUhhgE59jr5JFNV6tgc1D121ntSNpJ1GSThYriHAPU0eakA4FdgZYbJVY4%2BHLzPt%2F00u76TlVdQIQVCLi1Qqemolp2%2FTyDKg6zxgdMR6tNDCx3aq9BjqkAUu2BPU2L02fNGpkwQaJ2o7PatmfdAOEqt9lvargE8iDwusQuuPwOkC0TFRuqHkE%2FGlOSSt1kiy0i6Gvk9GuTGzvkh5t50sb0ZYLnrZ9TlIJ8aiO5TSBgdvZySIkhaiIqQryxVNonmRWc%2FKFiyTvX3Dn3%2FAZSKKkf8FhGukA7fUA886Fcu0hTql4zlaMW8Zsos09B9uaqmAFsqQLU4u4%2Fy5bGAoA&X-Amz-Signature=e5036a461ded2002809f8e34b005fe4ee0ca377e90c44c7fc342bb21b24f614c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVR2U4ZP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9q5gJfJYpVN1Y2DPCSJXAOINNsnaLMu6Vp9cK%2Fs07YQIhAJurK77N4hclLJksVjgu3Kzt8Nw1ZZfT5QrDeZkTl4v1KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp1bpknItWYh9siekq3AMY5FyMmQrcGtyHqYKVhJUj0Sv9Ud6aXYhr6hnlYvSHf9iyWkpb9v4fpYujDvOE%2FOCzqurhnNJpJ%2FNAroWKZuaveG56CbVU239pdHg9HJRA4KVZCoyo4vgeztdBe4JOyKXPz9AuJpzv30JHz7m%2BP1XW1BML0ny4GDEqm6D4owUFZOiGAGhRhPyu4i8zMFE15dLOwtn1VkuTMs8mWdzzD2B9t1Ed3AdayCOvQQSQcm1pU9vRBZUBc%2BSQh7yF8BzhKqU6KPbb0rjOKHAnyd5421KAx4Ws4Tph%2BhaankjNDct7Cl1M7hTlMM7Pbu7tR0VZfL3OyE5k0Ez%2BeRcDQnxL6tF1370PJ9%2BcPb1Fj4FTAEdDR4yJlUe6JHqwwHhr%2BMvXBvG1u8SsoXx6v2QNg%2Bn2rabJZzPLziytKa2KUpS%2FTvypkrzvrFHHwDfj%2BL9yw2JRO%2B0A8MCWda%2Bwoc2UFtiOWQp6%2FUoePUJwESDKAjWc80feERrSQCvTZ%2FL952IR%2FumcuG3%2FnCu3NkIp%2F%2F%2FQmanuUhhgE59jr5JFNV6tgc1D121ntSNpJ1GSThYriHAPU0eakA4FdgZYbJVY4%2BHLzPt%2F00u76TlVdQIQVCLi1Qqemolp2%2FTyDKg6zxgdMR6tNDCx3aq9BjqkAUu2BPU2L02fNGpkwQaJ2o7PatmfdAOEqt9lvargE8iDwusQuuPwOkC0TFRuqHkE%2FGlOSSt1kiy0i6Gvk9GuTGzvkh5t50sb0ZYLnrZ9TlIJ8aiO5TSBgdvZySIkhaiIqQryxVNonmRWc%2FKFiyTvX3Dn3%2FAZSKKkf8FhGukA7fUA886Fcu0hTql4zlaMW8Zsos09B9uaqmAFsqQLU4u4%2Fy5bGAoA&X-Amz-Signature=fc91dc9dda385125dd1c36decf18ea49cfc8049ca0ad0de6a1077f4d67760d38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVR2U4ZP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9q5gJfJYpVN1Y2DPCSJXAOINNsnaLMu6Vp9cK%2Fs07YQIhAJurK77N4hclLJksVjgu3Kzt8Nw1ZZfT5QrDeZkTl4v1KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp1bpknItWYh9siekq3AMY5FyMmQrcGtyHqYKVhJUj0Sv9Ud6aXYhr6hnlYvSHf9iyWkpb9v4fpYujDvOE%2FOCzqurhnNJpJ%2FNAroWKZuaveG56CbVU239pdHg9HJRA4KVZCoyo4vgeztdBe4JOyKXPz9AuJpzv30JHz7m%2BP1XW1BML0ny4GDEqm6D4owUFZOiGAGhRhPyu4i8zMFE15dLOwtn1VkuTMs8mWdzzD2B9t1Ed3AdayCOvQQSQcm1pU9vRBZUBc%2BSQh7yF8BzhKqU6KPbb0rjOKHAnyd5421KAx4Ws4Tph%2BhaankjNDct7Cl1M7hTlMM7Pbu7tR0VZfL3OyE5k0Ez%2BeRcDQnxL6tF1370PJ9%2BcPb1Fj4FTAEdDR4yJlUe6JHqwwHhr%2BMvXBvG1u8SsoXx6v2QNg%2Bn2rabJZzPLziytKa2KUpS%2FTvypkrzvrFHHwDfj%2BL9yw2JRO%2B0A8MCWda%2Bwoc2UFtiOWQp6%2FUoePUJwESDKAjWc80feERrSQCvTZ%2FL952IR%2FumcuG3%2FnCu3NkIp%2F%2F%2FQmanuUhhgE59jr5JFNV6tgc1D121ntSNpJ1GSThYriHAPU0eakA4FdgZYbJVY4%2BHLzPt%2F00u76TlVdQIQVCLi1Qqemolp2%2FTyDKg6zxgdMR6tNDCx3aq9BjqkAUu2BPU2L02fNGpkwQaJ2o7PatmfdAOEqt9lvargE8iDwusQuuPwOkC0TFRuqHkE%2FGlOSSt1kiy0i6Gvk9GuTGzvkh5t50sb0ZYLnrZ9TlIJ8aiO5TSBgdvZySIkhaiIqQryxVNonmRWc%2FKFiyTvX3Dn3%2FAZSKKkf8FhGukA7fUA886Fcu0hTql4zlaMW8Zsos09B9uaqmAFsqQLU4u4%2Fy5bGAoA&X-Amz-Signature=b897a00273b80bcc3da08808af964c5966040be1d9672d5a4702f3a99bb75282&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
