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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDZD4EF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4NvcsgXR1%2B9eZF7H3BTbtRzvo%2F%2FEakXQdFRfZnStk7AiEApIARlYMu9SFj1%2FT68T7ccRkRN1r4ncTnxxn6VrJ8OgQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHE4wPTpYaW%2FWwWNircA%2FVvvbRks01S0ZM2%2BlMn2QSJT%2FI53RJ2Ku07WYE9c2YMLh7rjGpZlnDZdvko5d8fc6ojAcAqOm3F%2FWC3hABRNzNJ%2FC2TxwwbJWuXSjQQOHglz%2BlJ6SeVzQKjkUD79%2BTcw%2BovEAFUnqbgNderLJJ9em7IcK4i4tQIvOsAUbAZHitnvnx0K6Lif3dlryycI2y3I4yHJNV0cZ0wlSVrEBjiDWWSZqR3IjbQr%2BVV5xzcDfEF8IMpFPAsmgC1f1UkPaEx05Z8NnL0tt7Qv0BENZC6MEZId48dC3s9Kqb7dWa3ewR4K65mgbz4N8erJJnMGKVYcoEmfbt8ZFRKnrxdUlEu1lzma6DUk1taUEox7DtSPTPKgcs3gSekca7jySQ1ZxVrEdiBKDHzrVP2%2FTVZ1qbyzknrze6zmaTeTvEg2wZhT1Rm2XpikGymfP%2BSHja6oAq1P3PWpYYAeh6ccIE%2FJph1N0Jz4nlSHmL8NxAOr2pVEmLlu1CpN91Piv3PpVqmySZHWwl%2FWFALcXILCRPTp8so5Vc1PZu517Kx9NqqVuF43XwqNtEt2UgWN7AP%2B9ZrUlzDI52grYrzrYFwrLZbuWy6etmATWlXVZ7ZIaJQmFuGikdTocP7lCZoUEoD1WelMNTvusMGOqUBvIZksMhs7w8t3vLZoExsr5qK0ESo%2BOYv6Uj8pXM4ABvBC3MIf5j6UhaeOYjM7IP5jRYwry1esVUZbQeQirVDvk2XsHbn%2F55z4XN25XjBzN3L58COute7w90BaU922B7GaiwjQ3kw0EdL4zaoMJs3MDIzJkftmjzCTtwtw3nOmho7n5JgU%2BNUKv0DtgNYliWo%2FSRqL7Fiwg99pvoPbnoCvFVL7c8W&X-Amz-Signature=d4e8d3284c3542bd37dd639db534b265196f72716ddc7dc9da4ac54b819af4de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDZD4EF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4NvcsgXR1%2B9eZF7H3BTbtRzvo%2F%2FEakXQdFRfZnStk7AiEApIARlYMu9SFj1%2FT68T7ccRkRN1r4ncTnxxn6VrJ8OgQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHE4wPTpYaW%2FWwWNircA%2FVvvbRks01S0ZM2%2BlMn2QSJT%2FI53RJ2Ku07WYE9c2YMLh7rjGpZlnDZdvko5d8fc6ojAcAqOm3F%2FWC3hABRNzNJ%2FC2TxwwbJWuXSjQQOHglz%2BlJ6SeVzQKjkUD79%2BTcw%2BovEAFUnqbgNderLJJ9em7IcK4i4tQIvOsAUbAZHitnvnx0K6Lif3dlryycI2y3I4yHJNV0cZ0wlSVrEBjiDWWSZqR3IjbQr%2BVV5xzcDfEF8IMpFPAsmgC1f1UkPaEx05Z8NnL0tt7Qv0BENZC6MEZId48dC3s9Kqb7dWa3ewR4K65mgbz4N8erJJnMGKVYcoEmfbt8ZFRKnrxdUlEu1lzma6DUk1taUEox7DtSPTPKgcs3gSekca7jySQ1ZxVrEdiBKDHzrVP2%2FTVZ1qbyzknrze6zmaTeTvEg2wZhT1Rm2XpikGymfP%2BSHja6oAq1P3PWpYYAeh6ccIE%2FJph1N0Jz4nlSHmL8NxAOr2pVEmLlu1CpN91Piv3PpVqmySZHWwl%2FWFALcXILCRPTp8so5Vc1PZu517Kx9NqqVuF43XwqNtEt2UgWN7AP%2B9ZrUlzDI52grYrzrYFwrLZbuWy6etmATWlXVZ7ZIaJQmFuGikdTocP7lCZoUEoD1WelMNTvusMGOqUBvIZksMhs7w8t3vLZoExsr5qK0ESo%2BOYv6Uj8pXM4ABvBC3MIf5j6UhaeOYjM7IP5jRYwry1esVUZbQeQirVDvk2XsHbn%2F55z4XN25XjBzN3L58COute7w90BaU922B7GaiwjQ3kw0EdL4zaoMJs3MDIzJkftmjzCTtwtw3nOmho7n5JgU%2BNUKv0DtgNYliWo%2FSRqL7Fiwg99pvoPbnoCvFVL7c8W&X-Amz-Signature=449bcd9ef37c0ad535494510a4549172459094bf44047a589e757c61744b34d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDZD4EF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4NvcsgXR1%2B9eZF7H3BTbtRzvo%2F%2FEakXQdFRfZnStk7AiEApIARlYMu9SFj1%2FT68T7ccRkRN1r4ncTnxxn6VrJ8OgQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHE4wPTpYaW%2FWwWNircA%2FVvvbRks01S0ZM2%2BlMn2QSJT%2FI53RJ2Ku07WYE9c2YMLh7rjGpZlnDZdvko5d8fc6ojAcAqOm3F%2FWC3hABRNzNJ%2FC2TxwwbJWuXSjQQOHglz%2BlJ6SeVzQKjkUD79%2BTcw%2BovEAFUnqbgNderLJJ9em7IcK4i4tQIvOsAUbAZHitnvnx0K6Lif3dlryycI2y3I4yHJNV0cZ0wlSVrEBjiDWWSZqR3IjbQr%2BVV5xzcDfEF8IMpFPAsmgC1f1UkPaEx05Z8NnL0tt7Qv0BENZC6MEZId48dC3s9Kqb7dWa3ewR4K65mgbz4N8erJJnMGKVYcoEmfbt8ZFRKnrxdUlEu1lzma6DUk1taUEox7DtSPTPKgcs3gSekca7jySQ1ZxVrEdiBKDHzrVP2%2FTVZ1qbyzknrze6zmaTeTvEg2wZhT1Rm2XpikGymfP%2BSHja6oAq1P3PWpYYAeh6ccIE%2FJph1N0Jz4nlSHmL8NxAOr2pVEmLlu1CpN91Piv3PpVqmySZHWwl%2FWFALcXILCRPTp8so5Vc1PZu517Kx9NqqVuF43XwqNtEt2UgWN7AP%2B9ZrUlzDI52grYrzrYFwrLZbuWy6etmATWlXVZ7ZIaJQmFuGikdTocP7lCZoUEoD1WelMNTvusMGOqUBvIZksMhs7w8t3vLZoExsr5qK0ESo%2BOYv6Uj8pXM4ABvBC3MIf5j6UhaeOYjM7IP5jRYwry1esVUZbQeQirVDvk2XsHbn%2F55z4XN25XjBzN3L58COute7w90BaU922B7GaiwjQ3kw0EdL4zaoMJs3MDIzJkftmjzCTtwtw3nOmho7n5JgU%2BNUKv0DtgNYliWo%2FSRqL7Fiwg99pvoPbnoCvFVL7c8W&X-Amz-Signature=aa8f4de4b213fd9fa95ba96d8d85a491ab785b108ed2c75a3c589d60c6766f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDZD4EF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4NvcsgXR1%2B9eZF7H3BTbtRzvo%2F%2FEakXQdFRfZnStk7AiEApIARlYMu9SFj1%2FT68T7ccRkRN1r4ncTnxxn6VrJ8OgQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHE4wPTpYaW%2FWwWNircA%2FVvvbRks01S0ZM2%2BlMn2QSJT%2FI53RJ2Ku07WYE9c2YMLh7rjGpZlnDZdvko5d8fc6ojAcAqOm3F%2FWC3hABRNzNJ%2FC2TxwwbJWuXSjQQOHglz%2BlJ6SeVzQKjkUD79%2BTcw%2BovEAFUnqbgNderLJJ9em7IcK4i4tQIvOsAUbAZHitnvnx0K6Lif3dlryycI2y3I4yHJNV0cZ0wlSVrEBjiDWWSZqR3IjbQr%2BVV5xzcDfEF8IMpFPAsmgC1f1UkPaEx05Z8NnL0tt7Qv0BENZC6MEZId48dC3s9Kqb7dWa3ewR4K65mgbz4N8erJJnMGKVYcoEmfbt8ZFRKnrxdUlEu1lzma6DUk1taUEox7DtSPTPKgcs3gSekca7jySQ1ZxVrEdiBKDHzrVP2%2FTVZ1qbyzknrze6zmaTeTvEg2wZhT1Rm2XpikGymfP%2BSHja6oAq1P3PWpYYAeh6ccIE%2FJph1N0Jz4nlSHmL8NxAOr2pVEmLlu1CpN91Piv3PpVqmySZHWwl%2FWFALcXILCRPTp8so5Vc1PZu517Kx9NqqVuF43XwqNtEt2UgWN7AP%2B9ZrUlzDI52grYrzrYFwrLZbuWy6etmATWlXVZ7ZIaJQmFuGikdTocP7lCZoUEoD1WelMNTvusMGOqUBvIZksMhs7w8t3vLZoExsr5qK0ESo%2BOYv6Uj8pXM4ABvBC3MIf5j6UhaeOYjM7IP5jRYwry1esVUZbQeQirVDvk2XsHbn%2F55z4XN25XjBzN3L58COute7w90BaU922B7GaiwjQ3kw0EdL4zaoMJs3MDIzJkftmjzCTtwtw3nOmho7n5JgU%2BNUKv0DtgNYliWo%2FSRqL7Fiwg99pvoPbnoCvFVL7c8W&X-Amz-Signature=94d2d613cb5699d284f6a2c16f505a4688419d52f916431440151f281d2da7a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDZD4EF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4NvcsgXR1%2B9eZF7H3BTbtRzvo%2F%2FEakXQdFRfZnStk7AiEApIARlYMu9SFj1%2FT68T7ccRkRN1r4ncTnxxn6VrJ8OgQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHE4wPTpYaW%2FWwWNircA%2FVvvbRks01S0ZM2%2BlMn2QSJT%2FI53RJ2Ku07WYE9c2YMLh7rjGpZlnDZdvko5d8fc6ojAcAqOm3F%2FWC3hABRNzNJ%2FC2TxwwbJWuXSjQQOHglz%2BlJ6SeVzQKjkUD79%2BTcw%2BovEAFUnqbgNderLJJ9em7IcK4i4tQIvOsAUbAZHitnvnx0K6Lif3dlryycI2y3I4yHJNV0cZ0wlSVrEBjiDWWSZqR3IjbQr%2BVV5xzcDfEF8IMpFPAsmgC1f1UkPaEx05Z8NnL0tt7Qv0BENZC6MEZId48dC3s9Kqb7dWa3ewR4K65mgbz4N8erJJnMGKVYcoEmfbt8ZFRKnrxdUlEu1lzma6DUk1taUEox7DtSPTPKgcs3gSekca7jySQ1ZxVrEdiBKDHzrVP2%2FTVZ1qbyzknrze6zmaTeTvEg2wZhT1Rm2XpikGymfP%2BSHja6oAq1P3PWpYYAeh6ccIE%2FJph1N0Jz4nlSHmL8NxAOr2pVEmLlu1CpN91Piv3PpVqmySZHWwl%2FWFALcXILCRPTp8so5Vc1PZu517Kx9NqqVuF43XwqNtEt2UgWN7AP%2B9ZrUlzDI52grYrzrYFwrLZbuWy6etmATWlXVZ7ZIaJQmFuGikdTocP7lCZoUEoD1WelMNTvusMGOqUBvIZksMhs7w8t3vLZoExsr5qK0ESo%2BOYv6Uj8pXM4ABvBC3MIf5j6UhaeOYjM7IP5jRYwry1esVUZbQeQirVDvk2XsHbn%2F55z4XN25XjBzN3L58COute7w90BaU922B7GaiwjQ3kw0EdL4zaoMJs3MDIzJkftmjzCTtwtw3nOmho7n5JgU%2BNUKv0DtgNYliWo%2FSRqL7Fiwg99pvoPbnoCvFVL7c8W&X-Amz-Signature=895b0edaeca8ac1cf72235bfa588c4ec261468df6214477c6aa3fb55ce3bae1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDZD4EF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4NvcsgXR1%2B9eZF7H3BTbtRzvo%2F%2FEakXQdFRfZnStk7AiEApIARlYMu9SFj1%2FT68T7ccRkRN1r4ncTnxxn6VrJ8OgQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHE4wPTpYaW%2FWwWNircA%2FVvvbRks01S0ZM2%2BlMn2QSJT%2FI53RJ2Ku07WYE9c2YMLh7rjGpZlnDZdvko5d8fc6ojAcAqOm3F%2FWC3hABRNzNJ%2FC2TxwwbJWuXSjQQOHglz%2BlJ6SeVzQKjkUD79%2BTcw%2BovEAFUnqbgNderLJJ9em7IcK4i4tQIvOsAUbAZHitnvnx0K6Lif3dlryycI2y3I4yHJNV0cZ0wlSVrEBjiDWWSZqR3IjbQr%2BVV5xzcDfEF8IMpFPAsmgC1f1UkPaEx05Z8NnL0tt7Qv0BENZC6MEZId48dC3s9Kqb7dWa3ewR4K65mgbz4N8erJJnMGKVYcoEmfbt8ZFRKnrxdUlEu1lzma6DUk1taUEox7DtSPTPKgcs3gSekca7jySQ1ZxVrEdiBKDHzrVP2%2FTVZ1qbyzknrze6zmaTeTvEg2wZhT1Rm2XpikGymfP%2BSHja6oAq1P3PWpYYAeh6ccIE%2FJph1N0Jz4nlSHmL8NxAOr2pVEmLlu1CpN91Piv3PpVqmySZHWwl%2FWFALcXILCRPTp8so5Vc1PZu517Kx9NqqVuF43XwqNtEt2UgWN7AP%2B9ZrUlzDI52grYrzrYFwrLZbuWy6etmATWlXVZ7ZIaJQmFuGikdTocP7lCZoUEoD1WelMNTvusMGOqUBvIZksMhs7w8t3vLZoExsr5qK0ESo%2BOYv6Uj8pXM4ABvBC3MIf5j6UhaeOYjM7IP5jRYwry1esVUZbQeQirVDvk2XsHbn%2F55z4XN25XjBzN3L58COute7w90BaU922B7GaiwjQ3kw0EdL4zaoMJs3MDIzJkftmjzCTtwtw3nOmho7n5JgU%2BNUKv0DtgNYliWo%2FSRqL7Fiwg99pvoPbnoCvFVL7c8W&X-Amz-Signature=93e27dccab7c94ebf2d840f9cd95599dd082ba9bc103a2527e87858a075e9299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDZD4EF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4NvcsgXR1%2B9eZF7H3BTbtRzvo%2F%2FEakXQdFRfZnStk7AiEApIARlYMu9SFj1%2FT68T7ccRkRN1r4ncTnxxn6VrJ8OgQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHE4wPTpYaW%2FWwWNircA%2FVvvbRks01S0ZM2%2BlMn2QSJT%2FI53RJ2Ku07WYE9c2YMLh7rjGpZlnDZdvko5d8fc6ojAcAqOm3F%2FWC3hABRNzNJ%2FC2TxwwbJWuXSjQQOHglz%2BlJ6SeVzQKjkUD79%2BTcw%2BovEAFUnqbgNderLJJ9em7IcK4i4tQIvOsAUbAZHitnvnx0K6Lif3dlryycI2y3I4yHJNV0cZ0wlSVrEBjiDWWSZqR3IjbQr%2BVV5xzcDfEF8IMpFPAsmgC1f1UkPaEx05Z8NnL0tt7Qv0BENZC6MEZId48dC3s9Kqb7dWa3ewR4K65mgbz4N8erJJnMGKVYcoEmfbt8ZFRKnrxdUlEu1lzma6DUk1taUEox7DtSPTPKgcs3gSekca7jySQ1ZxVrEdiBKDHzrVP2%2FTVZ1qbyzknrze6zmaTeTvEg2wZhT1Rm2XpikGymfP%2BSHja6oAq1P3PWpYYAeh6ccIE%2FJph1N0Jz4nlSHmL8NxAOr2pVEmLlu1CpN91Piv3PpVqmySZHWwl%2FWFALcXILCRPTp8so5Vc1PZu517Kx9NqqVuF43XwqNtEt2UgWN7AP%2B9ZrUlzDI52grYrzrYFwrLZbuWy6etmATWlXVZ7ZIaJQmFuGikdTocP7lCZoUEoD1WelMNTvusMGOqUBvIZksMhs7w8t3vLZoExsr5qK0ESo%2BOYv6Uj8pXM4ABvBC3MIf5j6UhaeOYjM7IP5jRYwry1esVUZbQeQirVDvk2XsHbn%2F55z4XN25XjBzN3L58COute7w90BaU922B7GaiwjQ3kw0EdL4zaoMJs3MDIzJkftmjzCTtwtw3nOmho7n5JgU%2BNUKv0DtgNYliWo%2FSRqL7Fiwg99pvoPbnoCvFVL7c8W&X-Amz-Signature=fd80202b439434243f4825ebb63d404ee5757799e448e27a25cefc0bfe5ebc01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDZD4EF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4NvcsgXR1%2B9eZF7H3BTbtRzvo%2F%2FEakXQdFRfZnStk7AiEApIARlYMu9SFj1%2FT68T7ccRkRN1r4ncTnxxn6VrJ8OgQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHE4wPTpYaW%2FWwWNircA%2FVvvbRks01S0ZM2%2BlMn2QSJT%2FI53RJ2Ku07WYE9c2YMLh7rjGpZlnDZdvko5d8fc6ojAcAqOm3F%2FWC3hABRNzNJ%2FC2TxwwbJWuXSjQQOHglz%2BlJ6SeVzQKjkUD79%2BTcw%2BovEAFUnqbgNderLJJ9em7IcK4i4tQIvOsAUbAZHitnvnx0K6Lif3dlryycI2y3I4yHJNV0cZ0wlSVrEBjiDWWSZqR3IjbQr%2BVV5xzcDfEF8IMpFPAsmgC1f1UkPaEx05Z8NnL0tt7Qv0BENZC6MEZId48dC3s9Kqb7dWa3ewR4K65mgbz4N8erJJnMGKVYcoEmfbt8ZFRKnrxdUlEu1lzma6DUk1taUEox7DtSPTPKgcs3gSekca7jySQ1ZxVrEdiBKDHzrVP2%2FTVZ1qbyzknrze6zmaTeTvEg2wZhT1Rm2XpikGymfP%2BSHja6oAq1P3PWpYYAeh6ccIE%2FJph1N0Jz4nlSHmL8NxAOr2pVEmLlu1CpN91Piv3PpVqmySZHWwl%2FWFALcXILCRPTp8so5Vc1PZu517Kx9NqqVuF43XwqNtEt2UgWN7AP%2B9ZrUlzDI52grYrzrYFwrLZbuWy6etmATWlXVZ7ZIaJQmFuGikdTocP7lCZoUEoD1WelMNTvusMGOqUBvIZksMhs7w8t3vLZoExsr5qK0ESo%2BOYv6Uj8pXM4ABvBC3MIf5j6UhaeOYjM7IP5jRYwry1esVUZbQeQirVDvk2XsHbn%2F55z4XN25XjBzN3L58COute7w90BaU922B7GaiwjQ3kw0EdL4zaoMJs3MDIzJkftmjzCTtwtw3nOmho7n5JgU%2BNUKv0DtgNYliWo%2FSRqL7Fiwg99pvoPbnoCvFVL7c8W&X-Amz-Signature=7f3f06d2f908c480efa5176f8752208a7c1c743796d43183b868eece469150af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
