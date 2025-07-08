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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QATB4AGK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsniOLl0URzOhcdnJCHvlhSTNBtI5BgM1yPCgKBNglPAiBJQwsUmlDdWRRaRO2keixjv8Pt3B24hmSuy7pkUFP9CyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiKs2jo%2B4pKorg20XKtwDYOCZWauvud%2BnJ2PkMc8NWt5iX%2BF%2FwOWThUk0kHlaZP72ddsV9qMjWVqFCgPK1dpT%2FmSiGaO%2B6BFSbZ%2Bs%2B8G34OAPFR1a1Tz%2F%2FIulBnZOk5WGnM1yLNmzS2e2rdgmJEPJaXPWWZTGqa%2FXwSsWAGOQF%2BxE5KVV0qtVj57pJX%2BsLpKxt8SpUNvP5sFLZi%2B8QM6rVsWozCTp6rSAWpVRvvejYnjv1cvDHLZG3pAjDFqPQC68qCgVYMHva3O4oUounUFyWg52aeWraXgsJRqWjRKfsTIz2gsQVBS3%2Fbvn6wXBguISIpiGmvqAv5Xb5G5EZODqXekhHuDsa31Z9yhaNDSYoy1J7UzTxNzzTTDfAgI80ttc4E0Uss3qV1ZnlJ3xfaJg8IYI1ueKpNqHSX2FaiOBHTv%2ByoFv%2BHyxteyFaUo57sCcy2fu1PYpyJHQSRLMdqJbd1GmHUN8AJ%2FLH9K27XIpc9lOya4RdgyVJ1C4WXQ6kKsdc1SU78nkgXeg5ZKdHSGXQ9oglUjoMDVxrJ3kZTWUSKwv6tqAfJvHXIKO7CMUIclmHVWihZFwjgmlzqcWEUFU5%2FUJGiyDIoQ%2BbYdrNbAfDLLnv5xHi8x26leaLc1q1HPrAtPjFohMuPb2sJcwkdi1wwY6pgFbi5c4nTxADsKXOoMRYRyHVQQLxNpSdmuSZAiKAksppz2QEDD2FIfmPNviQUi%2BkacmCvgcWqBpGpIc6EHfgEusPB9QDV3o5zvUBCaVTI9Wz%2FSfJPAIQ9SVDzsTqgMhT%2BE18zTzm9a3gIJmkNts93vx%2BM%2F4jYJyeQA2ybyspP8eRM7RcHLiOVMYOiS8hQ3S5SbZOYt0IlMteDoMzCQ6MOQKGjg2Ep44&X-Amz-Signature=d64cbf5fedad70caea038613e69ee66724f13c28d8987849d0445f22b4526a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QATB4AGK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsniOLl0URzOhcdnJCHvlhSTNBtI5BgM1yPCgKBNglPAiBJQwsUmlDdWRRaRO2keixjv8Pt3B24hmSuy7pkUFP9CyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiKs2jo%2B4pKorg20XKtwDYOCZWauvud%2BnJ2PkMc8NWt5iX%2BF%2FwOWThUk0kHlaZP72ddsV9qMjWVqFCgPK1dpT%2FmSiGaO%2B6BFSbZ%2Bs%2B8G34OAPFR1a1Tz%2F%2FIulBnZOk5WGnM1yLNmzS2e2rdgmJEPJaXPWWZTGqa%2FXwSsWAGOQF%2BxE5KVV0qtVj57pJX%2BsLpKxt8SpUNvP5sFLZi%2B8QM6rVsWozCTp6rSAWpVRvvejYnjv1cvDHLZG3pAjDFqPQC68qCgVYMHva3O4oUounUFyWg52aeWraXgsJRqWjRKfsTIz2gsQVBS3%2Fbvn6wXBguISIpiGmvqAv5Xb5G5EZODqXekhHuDsa31Z9yhaNDSYoy1J7UzTxNzzTTDfAgI80ttc4E0Uss3qV1ZnlJ3xfaJg8IYI1ueKpNqHSX2FaiOBHTv%2ByoFv%2BHyxteyFaUo57sCcy2fu1PYpyJHQSRLMdqJbd1GmHUN8AJ%2FLH9K27XIpc9lOya4RdgyVJ1C4WXQ6kKsdc1SU78nkgXeg5ZKdHSGXQ9oglUjoMDVxrJ3kZTWUSKwv6tqAfJvHXIKO7CMUIclmHVWihZFwjgmlzqcWEUFU5%2FUJGiyDIoQ%2BbYdrNbAfDLLnv5xHi8x26leaLc1q1HPrAtPjFohMuPb2sJcwkdi1wwY6pgFbi5c4nTxADsKXOoMRYRyHVQQLxNpSdmuSZAiKAksppz2QEDD2FIfmPNviQUi%2BkacmCvgcWqBpGpIc6EHfgEusPB9QDV3o5zvUBCaVTI9Wz%2FSfJPAIQ9SVDzsTqgMhT%2BE18zTzm9a3gIJmkNts93vx%2BM%2F4jYJyeQA2ybyspP8eRM7RcHLiOVMYOiS8hQ3S5SbZOYt0IlMteDoMzCQ6MOQKGjg2Ep44&X-Amz-Signature=4d6bd67de0612d8b328114c015a6c1c7e740f67a13310246fe735799365c31a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QATB4AGK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsniOLl0URzOhcdnJCHvlhSTNBtI5BgM1yPCgKBNglPAiBJQwsUmlDdWRRaRO2keixjv8Pt3B24hmSuy7pkUFP9CyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiKs2jo%2B4pKorg20XKtwDYOCZWauvud%2BnJ2PkMc8NWt5iX%2BF%2FwOWThUk0kHlaZP72ddsV9qMjWVqFCgPK1dpT%2FmSiGaO%2B6BFSbZ%2Bs%2B8G34OAPFR1a1Tz%2F%2FIulBnZOk5WGnM1yLNmzS2e2rdgmJEPJaXPWWZTGqa%2FXwSsWAGOQF%2BxE5KVV0qtVj57pJX%2BsLpKxt8SpUNvP5sFLZi%2B8QM6rVsWozCTp6rSAWpVRvvejYnjv1cvDHLZG3pAjDFqPQC68qCgVYMHva3O4oUounUFyWg52aeWraXgsJRqWjRKfsTIz2gsQVBS3%2Fbvn6wXBguISIpiGmvqAv5Xb5G5EZODqXekhHuDsa31Z9yhaNDSYoy1J7UzTxNzzTTDfAgI80ttc4E0Uss3qV1ZnlJ3xfaJg8IYI1ueKpNqHSX2FaiOBHTv%2ByoFv%2BHyxteyFaUo57sCcy2fu1PYpyJHQSRLMdqJbd1GmHUN8AJ%2FLH9K27XIpc9lOya4RdgyVJ1C4WXQ6kKsdc1SU78nkgXeg5ZKdHSGXQ9oglUjoMDVxrJ3kZTWUSKwv6tqAfJvHXIKO7CMUIclmHVWihZFwjgmlzqcWEUFU5%2FUJGiyDIoQ%2BbYdrNbAfDLLnv5xHi8x26leaLc1q1HPrAtPjFohMuPb2sJcwkdi1wwY6pgFbi5c4nTxADsKXOoMRYRyHVQQLxNpSdmuSZAiKAksppz2QEDD2FIfmPNviQUi%2BkacmCvgcWqBpGpIc6EHfgEusPB9QDV3o5zvUBCaVTI9Wz%2FSfJPAIQ9SVDzsTqgMhT%2BE18zTzm9a3gIJmkNts93vx%2BM%2F4jYJyeQA2ybyspP8eRM7RcHLiOVMYOiS8hQ3S5SbZOYt0IlMteDoMzCQ6MOQKGjg2Ep44&X-Amz-Signature=ea9ad96dfbce0873f34477206d1cceb5e98aec78b12db2d7042a469d58417d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QATB4AGK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsniOLl0URzOhcdnJCHvlhSTNBtI5BgM1yPCgKBNglPAiBJQwsUmlDdWRRaRO2keixjv8Pt3B24hmSuy7pkUFP9CyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiKs2jo%2B4pKorg20XKtwDYOCZWauvud%2BnJ2PkMc8NWt5iX%2BF%2FwOWThUk0kHlaZP72ddsV9qMjWVqFCgPK1dpT%2FmSiGaO%2B6BFSbZ%2Bs%2B8G34OAPFR1a1Tz%2F%2FIulBnZOk5WGnM1yLNmzS2e2rdgmJEPJaXPWWZTGqa%2FXwSsWAGOQF%2BxE5KVV0qtVj57pJX%2BsLpKxt8SpUNvP5sFLZi%2B8QM6rVsWozCTp6rSAWpVRvvejYnjv1cvDHLZG3pAjDFqPQC68qCgVYMHva3O4oUounUFyWg52aeWraXgsJRqWjRKfsTIz2gsQVBS3%2Fbvn6wXBguISIpiGmvqAv5Xb5G5EZODqXekhHuDsa31Z9yhaNDSYoy1J7UzTxNzzTTDfAgI80ttc4E0Uss3qV1ZnlJ3xfaJg8IYI1ueKpNqHSX2FaiOBHTv%2ByoFv%2BHyxteyFaUo57sCcy2fu1PYpyJHQSRLMdqJbd1GmHUN8AJ%2FLH9K27XIpc9lOya4RdgyVJ1C4WXQ6kKsdc1SU78nkgXeg5ZKdHSGXQ9oglUjoMDVxrJ3kZTWUSKwv6tqAfJvHXIKO7CMUIclmHVWihZFwjgmlzqcWEUFU5%2FUJGiyDIoQ%2BbYdrNbAfDLLnv5xHi8x26leaLc1q1HPrAtPjFohMuPb2sJcwkdi1wwY6pgFbi5c4nTxADsKXOoMRYRyHVQQLxNpSdmuSZAiKAksppz2QEDD2FIfmPNviQUi%2BkacmCvgcWqBpGpIc6EHfgEusPB9QDV3o5zvUBCaVTI9Wz%2FSfJPAIQ9SVDzsTqgMhT%2BE18zTzm9a3gIJmkNts93vx%2BM%2F4jYJyeQA2ybyspP8eRM7RcHLiOVMYOiS8hQ3S5SbZOYt0IlMteDoMzCQ6MOQKGjg2Ep44&X-Amz-Signature=be55aa7a5694d67705b5f5dd97ce43f5ffdeea142c16d264d17cfd3cfc74c9d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QATB4AGK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsniOLl0URzOhcdnJCHvlhSTNBtI5BgM1yPCgKBNglPAiBJQwsUmlDdWRRaRO2keixjv8Pt3B24hmSuy7pkUFP9CyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiKs2jo%2B4pKorg20XKtwDYOCZWauvud%2BnJ2PkMc8NWt5iX%2BF%2FwOWThUk0kHlaZP72ddsV9qMjWVqFCgPK1dpT%2FmSiGaO%2B6BFSbZ%2Bs%2B8G34OAPFR1a1Tz%2F%2FIulBnZOk5WGnM1yLNmzS2e2rdgmJEPJaXPWWZTGqa%2FXwSsWAGOQF%2BxE5KVV0qtVj57pJX%2BsLpKxt8SpUNvP5sFLZi%2B8QM6rVsWozCTp6rSAWpVRvvejYnjv1cvDHLZG3pAjDFqPQC68qCgVYMHva3O4oUounUFyWg52aeWraXgsJRqWjRKfsTIz2gsQVBS3%2Fbvn6wXBguISIpiGmvqAv5Xb5G5EZODqXekhHuDsa31Z9yhaNDSYoy1J7UzTxNzzTTDfAgI80ttc4E0Uss3qV1ZnlJ3xfaJg8IYI1ueKpNqHSX2FaiOBHTv%2ByoFv%2BHyxteyFaUo57sCcy2fu1PYpyJHQSRLMdqJbd1GmHUN8AJ%2FLH9K27XIpc9lOya4RdgyVJ1C4WXQ6kKsdc1SU78nkgXeg5ZKdHSGXQ9oglUjoMDVxrJ3kZTWUSKwv6tqAfJvHXIKO7CMUIclmHVWihZFwjgmlzqcWEUFU5%2FUJGiyDIoQ%2BbYdrNbAfDLLnv5xHi8x26leaLc1q1HPrAtPjFohMuPb2sJcwkdi1wwY6pgFbi5c4nTxADsKXOoMRYRyHVQQLxNpSdmuSZAiKAksppz2QEDD2FIfmPNviQUi%2BkacmCvgcWqBpGpIc6EHfgEusPB9QDV3o5zvUBCaVTI9Wz%2FSfJPAIQ9SVDzsTqgMhT%2BE18zTzm9a3gIJmkNts93vx%2BM%2F4jYJyeQA2ybyspP8eRM7RcHLiOVMYOiS8hQ3S5SbZOYt0IlMteDoMzCQ6MOQKGjg2Ep44&X-Amz-Signature=b4dd57908b1e923c378041f4b34720db7e4aaf4f585a93ae78bae3099453509b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QATB4AGK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsniOLl0URzOhcdnJCHvlhSTNBtI5BgM1yPCgKBNglPAiBJQwsUmlDdWRRaRO2keixjv8Pt3B24hmSuy7pkUFP9CyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiKs2jo%2B4pKorg20XKtwDYOCZWauvud%2BnJ2PkMc8NWt5iX%2BF%2FwOWThUk0kHlaZP72ddsV9qMjWVqFCgPK1dpT%2FmSiGaO%2B6BFSbZ%2Bs%2B8G34OAPFR1a1Tz%2F%2FIulBnZOk5WGnM1yLNmzS2e2rdgmJEPJaXPWWZTGqa%2FXwSsWAGOQF%2BxE5KVV0qtVj57pJX%2BsLpKxt8SpUNvP5sFLZi%2B8QM6rVsWozCTp6rSAWpVRvvejYnjv1cvDHLZG3pAjDFqPQC68qCgVYMHva3O4oUounUFyWg52aeWraXgsJRqWjRKfsTIz2gsQVBS3%2Fbvn6wXBguISIpiGmvqAv5Xb5G5EZODqXekhHuDsa31Z9yhaNDSYoy1J7UzTxNzzTTDfAgI80ttc4E0Uss3qV1ZnlJ3xfaJg8IYI1ueKpNqHSX2FaiOBHTv%2ByoFv%2BHyxteyFaUo57sCcy2fu1PYpyJHQSRLMdqJbd1GmHUN8AJ%2FLH9K27XIpc9lOya4RdgyVJ1C4WXQ6kKsdc1SU78nkgXeg5ZKdHSGXQ9oglUjoMDVxrJ3kZTWUSKwv6tqAfJvHXIKO7CMUIclmHVWihZFwjgmlzqcWEUFU5%2FUJGiyDIoQ%2BbYdrNbAfDLLnv5xHi8x26leaLc1q1HPrAtPjFohMuPb2sJcwkdi1wwY6pgFbi5c4nTxADsKXOoMRYRyHVQQLxNpSdmuSZAiKAksppz2QEDD2FIfmPNviQUi%2BkacmCvgcWqBpGpIc6EHfgEusPB9QDV3o5zvUBCaVTI9Wz%2FSfJPAIQ9SVDzsTqgMhT%2BE18zTzm9a3gIJmkNts93vx%2BM%2F4jYJyeQA2ybyspP8eRM7RcHLiOVMYOiS8hQ3S5SbZOYt0IlMteDoMzCQ6MOQKGjg2Ep44&X-Amz-Signature=1ccb6443cefbfd3c9057ae23b91bc0432942b88ae275233cbbd05fd7161f84b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QATB4AGK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsniOLl0URzOhcdnJCHvlhSTNBtI5BgM1yPCgKBNglPAiBJQwsUmlDdWRRaRO2keixjv8Pt3B24hmSuy7pkUFP9CyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiKs2jo%2B4pKorg20XKtwDYOCZWauvud%2BnJ2PkMc8NWt5iX%2BF%2FwOWThUk0kHlaZP72ddsV9qMjWVqFCgPK1dpT%2FmSiGaO%2B6BFSbZ%2Bs%2B8G34OAPFR1a1Tz%2F%2FIulBnZOk5WGnM1yLNmzS2e2rdgmJEPJaXPWWZTGqa%2FXwSsWAGOQF%2BxE5KVV0qtVj57pJX%2BsLpKxt8SpUNvP5sFLZi%2B8QM6rVsWozCTp6rSAWpVRvvejYnjv1cvDHLZG3pAjDFqPQC68qCgVYMHva3O4oUounUFyWg52aeWraXgsJRqWjRKfsTIz2gsQVBS3%2Fbvn6wXBguISIpiGmvqAv5Xb5G5EZODqXekhHuDsa31Z9yhaNDSYoy1J7UzTxNzzTTDfAgI80ttc4E0Uss3qV1ZnlJ3xfaJg8IYI1ueKpNqHSX2FaiOBHTv%2ByoFv%2BHyxteyFaUo57sCcy2fu1PYpyJHQSRLMdqJbd1GmHUN8AJ%2FLH9K27XIpc9lOya4RdgyVJ1C4WXQ6kKsdc1SU78nkgXeg5ZKdHSGXQ9oglUjoMDVxrJ3kZTWUSKwv6tqAfJvHXIKO7CMUIclmHVWihZFwjgmlzqcWEUFU5%2FUJGiyDIoQ%2BbYdrNbAfDLLnv5xHi8x26leaLc1q1HPrAtPjFohMuPb2sJcwkdi1wwY6pgFbi5c4nTxADsKXOoMRYRyHVQQLxNpSdmuSZAiKAksppz2QEDD2FIfmPNviQUi%2BkacmCvgcWqBpGpIc6EHfgEusPB9QDV3o5zvUBCaVTI9Wz%2FSfJPAIQ9SVDzsTqgMhT%2BE18zTzm9a3gIJmkNts93vx%2BM%2F4jYJyeQA2ybyspP8eRM7RcHLiOVMYOiS8hQ3S5SbZOYt0IlMteDoMzCQ6MOQKGjg2Ep44&X-Amz-Signature=45e32aff0453f57c65a39cf51b85d0eafd8c7d5fef3016caa0127bda68fc70c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QATB4AGK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsniOLl0URzOhcdnJCHvlhSTNBtI5BgM1yPCgKBNglPAiBJQwsUmlDdWRRaRO2keixjv8Pt3B24hmSuy7pkUFP9CyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiKs2jo%2B4pKorg20XKtwDYOCZWauvud%2BnJ2PkMc8NWt5iX%2BF%2FwOWThUk0kHlaZP72ddsV9qMjWVqFCgPK1dpT%2FmSiGaO%2B6BFSbZ%2Bs%2B8G34OAPFR1a1Tz%2F%2FIulBnZOk5WGnM1yLNmzS2e2rdgmJEPJaXPWWZTGqa%2FXwSsWAGOQF%2BxE5KVV0qtVj57pJX%2BsLpKxt8SpUNvP5sFLZi%2B8QM6rVsWozCTp6rSAWpVRvvejYnjv1cvDHLZG3pAjDFqPQC68qCgVYMHva3O4oUounUFyWg52aeWraXgsJRqWjRKfsTIz2gsQVBS3%2Fbvn6wXBguISIpiGmvqAv5Xb5G5EZODqXekhHuDsa31Z9yhaNDSYoy1J7UzTxNzzTTDfAgI80ttc4E0Uss3qV1ZnlJ3xfaJg8IYI1ueKpNqHSX2FaiOBHTv%2ByoFv%2BHyxteyFaUo57sCcy2fu1PYpyJHQSRLMdqJbd1GmHUN8AJ%2FLH9K27XIpc9lOya4RdgyVJ1C4WXQ6kKsdc1SU78nkgXeg5ZKdHSGXQ9oglUjoMDVxrJ3kZTWUSKwv6tqAfJvHXIKO7CMUIclmHVWihZFwjgmlzqcWEUFU5%2FUJGiyDIoQ%2BbYdrNbAfDLLnv5xHi8x26leaLc1q1HPrAtPjFohMuPb2sJcwkdi1wwY6pgFbi5c4nTxADsKXOoMRYRyHVQQLxNpSdmuSZAiKAksppz2QEDD2FIfmPNviQUi%2BkacmCvgcWqBpGpIc6EHfgEusPB9QDV3o5zvUBCaVTI9Wz%2FSfJPAIQ9SVDzsTqgMhT%2BE18zTzm9a3gIJmkNts93vx%2BM%2F4jYJyeQA2ybyspP8eRM7RcHLiOVMYOiS8hQ3S5SbZOYt0IlMteDoMzCQ6MOQKGjg2Ep44&X-Amz-Signature=21219acac68b13cb77ac3a6359185a78a969b83a30e0e2e14e02b0686001000c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
