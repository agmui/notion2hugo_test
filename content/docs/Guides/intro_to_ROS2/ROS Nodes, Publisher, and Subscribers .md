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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSBM5E7C%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FpFojIdDvkaoSFcScw0Yu2%2BC4dwz3GzpsMY3MAgzpUQIhAIUe5%2F5b4dNnStyfEi4lszR9fY4iviL1IvjayQP6eV4uKv8DCDQQABoMNjM3NDIzMTgzODA1IgwG3%2BVDlyK2GXJNlzIq3AOHj6AfFJr99%2FGDLx2GcwKN8V6Y7X3GmI8F88mG3cUnBOUYDjv%2FejJvqmxRt1AD5NekEVg%2Bz%2BX1lJOCFfjBfWmnkarBLLUiwHi04XoKikfpvJ2Q16ztdiuHz%2BJ5MDKq18i86vv6Dx%2FsS%2FcZ30EmVy6dFINTgb6%2FtDEZuYVL3ad2joXdQgLhQUqerQnw1es9lmmpAf2%2FOdkJiZGPWRGYskipAFvd3N%2BZU%2BkzY3a%2FqXP0ZL4a9PBvdEc5g8rBfNYdtUPFycyzixoQQmmxyO2sfc%2BQQLRBu42DU%2FbSR0Z4d95AA22ASa5Ar8%2FmzFV4MyVKWBO2PFSfdO7PNPZmQa2dVIzf2vXQenK5JhPlXSuga6%2BikzxvhDJ2Uec4KlsMuNz9%2F4eExi9jnVQkxdzsPOiY%2BNYWoRF0KeVk3zVLlkMk4K0ZrdClPx9S2EdPD0cOzMfCIumbnn5H1CH6m9xtxOKmzQ7gE3WD%2B0VqBN96hueCFWQEWM3EIHDxD7IJ53PMCeMJwMfRVpCh5k8NSUkQzXrERp7M7Ggt689RBam75UVywXDZNnbwLk%2BZait1ARI89k0zR741ebiAdJZae1a%2BS5AnMzXkP8%2BSp0EUCAzsnFfrN2itLhoS6vu8bZrmy1R9GzCS2b7EBjqkAc4Fje4u0f%2BpGh3yuG4zTl6QtQS%2FzdApKyDCk6GiBosGkTH20lu7XsGVKX8tv9mfSILkCN3Yn3rnMcPP3Ei8wAs%2BB8TnptHPT50f0UxOAD5MxnPplfoYhSeXiO1AAadM7IOeNRA85EOjVI1qpcRjuX0S%2FPbLkCVC4fsc1jIAGY6yTQ2LsXzaK3sYQVyv9Q7MVFAq0ufhCCOsW7xIZSSUhII9diT6&X-Amz-Signature=a9ad576d9660b7eed98af03aaa2b169fb5ae82629031d915bdd98db7cd89d735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSBM5E7C%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FpFojIdDvkaoSFcScw0Yu2%2BC4dwz3GzpsMY3MAgzpUQIhAIUe5%2F5b4dNnStyfEi4lszR9fY4iviL1IvjayQP6eV4uKv8DCDQQABoMNjM3NDIzMTgzODA1IgwG3%2BVDlyK2GXJNlzIq3AOHj6AfFJr99%2FGDLx2GcwKN8V6Y7X3GmI8F88mG3cUnBOUYDjv%2FejJvqmxRt1AD5NekEVg%2Bz%2BX1lJOCFfjBfWmnkarBLLUiwHi04XoKikfpvJ2Q16ztdiuHz%2BJ5MDKq18i86vv6Dx%2FsS%2FcZ30EmVy6dFINTgb6%2FtDEZuYVL3ad2joXdQgLhQUqerQnw1es9lmmpAf2%2FOdkJiZGPWRGYskipAFvd3N%2BZU%2BkzY3a%2FqXP0ZL4a9PBvdEc5g8rBfNYdtUPFycyzixoQQmmxyO2sfc%2BQQLRBu42DU%2FbSR0Z4d95AA22ASa5Ar8%2FmzFV4MyVKWBO2PFSfdO7PNPZmQa2dVIzf2vXQenK5JhPlXSuga6%2BikzxvhDJ2Uec4KlsMuNz9%2F4eExi9jnVQkxdzsPOiY%2BNYWoRF0KeVk3zVLlkMk4K0ZrdClPx9S2EdPD0cOzMfCIumbnn5H1CH6m9xtxOKmzQ7gE3WD%2B0VqBN96hueCFWQEWM3EIHDxD7IJ53PMCeMJwMfRVpCh5k8NSUkQzXrERp7M7Ggt689RBam75UVywXDZNnbwLk%2BZait1ARI89k0zR741ebiAdJZae1a%2BS5AnMzXkP8%2BSp0EUCAzsnFfrN2itLhoS6vu8bZrmy1R9GzCS2b7EBjqkAc4Fje4u0f%2BpGh3yuG4zTl6QtQS%2FzdApKyDCk6GiBosGkTH20lu7XsGVKX8tv9mfSILkCN3Yn3rnMcPP3Ei8wAs%2BB8TnptHPT50f0UxOAD5MxnPplfoYhSeXiO1AAadM7IOeNRA85EOjVI1qpcRjuX0S%2FPbLkCVC4fsc1jIAGY6yTQ2LsXzaK3sYQVyv9Q7MVFAq0ufhCCOsW7xIZSSUhII9diT6&X-Amz-Signature=ab84a9e722684d5ef68afe29c6aaf078b80c26f536128fe8c7d235ad1d8bca88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSBM5E7C%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FpFojIdDvkaoSFcScw0Yu2%2BC4dwz3GzpsMY3MAgzpUQIhAIUe5%2F5b4dNnStyfEi4lszR9fY4iviL1IvjayQP6eV4uKv8DCDQQABoMNjM3NDIzMTgzODA1IgwG3%2BVDlyK2GXJNlzIq3AOHj6AfFJr99%2FGDLx2GcwKN8V6Y7X3GmI8F88mG3cUnBOUYDjv%2FejJvqmxRt1AD5NekEVg%2Bz%2BX1lJOCFfjBfWmnkarBLLUiwHi04XoKikfpvJ2Q16ztdiuHz%2BJ5MDKq18i86vv6Dx%2FsS%2FcZ30EmVy6dFINTgb6%2FtDEZuYVL3ad2joXdQgLhQUqerQnw1es9lmmpAf2%2FOdkJiZGPWRGYskipAFvd3N%2BZU%2BkzY3a%2FqXP0ZL4a9PBvdEc5g8rBfNYdtUPFycyzixoQQmmxyO2sfc%2BQQLRBu42DU%2FbSR0Z4d95AA22ASa5Ar8%2FmzFV4MyVKWBO2PFSfdO7PNPZmQa2dVIzf2vXQenK5JhPlXSuga6%2BikzxvhDJ2Uec4KlsMuNz9%2F4eExi9jnVQkxdzsPOiY%2BNYWoRF0KeVk3zVLlkMk4K0ZrdClPx9S2EdPD0cOzMfCIumbnn5H1CH6m9xtxOKmzQ7gE3WD%2B0VqBN96hueCFWQEWM3EIHDxD7IJ53PMCeMJwMfRVpCh5k8NSUkQzXrERp7M7Ggt689RBam75UVywXDZNnbwLk%2BZait1ARI89k0zR741ebiAdJZae1a%2BS5AnMzXkP8%2BSp0EUCAzsnFfrN2itLhoS6vu8bZrmy1R9GzCS2b7EBjqkAc4Fje4u0f%2BpGh3yuG4zTl6QtQS%2FzdApKyDCk6GiBosGkTH20lu7XsGVKX8tv9mfSILkCN3Yn3rnMcPP3Ei8wAs%2BB8TnptHPT50f0UxOAD5MxnPplfoYhSeXiO1AAadM7IOeNRA85EOjVI1qpcRjuX0S%2FPbLkCVC4fsc1jIAGY6yTQ2LsXzaK3sYQVyv9Q7MVFAq0ufhCCOsW7xIZSSUhII9diT6&X-Amz-Signature=59d459bd7329d1701a0aa56725a1d167581a98b73ce7be7a0b4d6b975d0d9b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSBM5E7C%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FpFojIdDvkaoSFcScw0Yu2%2BC4dwz3GzpsMY3MAgzpUQIhAIUe5%2F5b4dNnStyfEi4lszR9fY4iviL1IvjayQP6eV4uKv8DCDQQABoMNjM3NDIzMTgzODA1IgwG3%2BVDlyK2GXJNlzIq3AOHj6AfFJr99%2FGDLx2GcwKN8V6Y7X3GmI8F88mG3cUnBOUYDjv%2FejJvqmxRt1AD5NekEVg%2Bz%2BX1lJOCFfjBfWmnkarBLLUiwHi04XoKikfpvJ2Q16ztdiuHz%2BJ5MDKq18i86vv6Dx%2FsS%2FcZ30EmVy6dFINTgb6%2FtDEZuYVL3ad2joXdQgLhQUqerQnw1es9lmmpAf2%2FOdkJiZGPWRGYskipAFvd3N%2BZU%2BkzY3a%2FqXP0ZL4a9PBvdEc5g8rBfNYdtUPFycyzixoQQmmxyO2sfc%2BQQLRBu42DU%2FbSR0Z4d95AA22ASa5Ar8%2FmzFV4MyVKWBO2PFSfdO7PNPZmQa2dVIzf2vXQenK5JhPlXSuga6%2BikzxvhDJ2Uec4KlsMuNz9%2F4eExi9jnVQkxdzsPOiY%2BNYWoRF0KeVk3zVLlkMk4K0ZrdClPx9S2EdPD0cOzMfCIumbnn5H1CH6m9xtxOKmzQ7gE3WD%2B0VqBN96hueCFWQEWM3EIHDxD7IJ53PMCeMJwMfRVpCh5k8NSUkQzXrERp7M7Ggt689RBam75UVywXDZNnbwLk%2BZait1ARI89k0zR741ebiAdJZae1a%2BS5AnMzXkP8%2BSp0EUCAzsnFfrN2itLhoS6vu8bZrmy1R9GzCS2b7EBjqkAc4Fje4u0f%2BpGh3yuG4zTl6QtQS%2FzdApKyDCk6GiBosGkTH20lu7XsGVKX8tv9mfSILkCN3Yn3rnMcPP3Ei8wAs%2BB8TnptHPT50f0UxOAD5MxnPplfoYhSeXiO1AAadM7IOeNRA85EOjVI1qpcRjuX0S%2FPbLkCVC4fsc1jIAGY6yTQ2LsXzaK3sYQVyv9Q7MVFAq0ufhCCOsW7xIZSSUhII9diT6&X-Amz-Signature=210e4d07ae69e7ac2d45936501ca4d08d0775b30027840d2e2a83d364966ad66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSBM5E7C%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FpFojIdDvkaoSFcScw0Yu2%2BC4dwz3GzpsMY3MAgzpUQIhAIUe5%2F5b4dNnStyfEi4lszR9fY4iviL1IvjayQP6eV4uKv8DCDQQABoMNjM3NDIzMTgzODA1IgwG3%2BVDlyK2GXJNlzIq3AOHj6AfFJr99%2FGDLx2GcwKN8V6Y7X3GmI8F88mG3cUnBOUYDjv%2FejJvqmxRt1AD5NekEVg%2Bz%2BX1lJOCFfjBfWmnkarBLLUiwHi04XoKikfpvJ2Q16ztdiuHz%2BJ5MDKq18i86vv6Dx%2FsS%2FcZ30EmVy6dFINTgb6%2FtDEZuYVL3ad2joXdQgLhQUqerQnw1es9lmmpAf2%2FOdkJiZGPWRGYskipAFvd3N%2BZU%2BkzY3a%2FqXP0ZL4a9PBvdEc5g8rBfNYdtUPFycyzixoQQmmxyO2sfc%2BQQLRBu42DU%2FbSR0Z4d95AA22ASa5Ar8%2FmzFV4MyVKWBO2PFSfdO7PNPZmQa2dVIzf2vXQenK5JhPlXSuga6%2BikzxvhDJ2Uec4KlsMuNz9%2F4eExi9jnVQkxdzsPOiY%2BNYWoRF0KeVk3zVLlkMk4K0ZrdClPx9S2EdPD0cOzMfCIumbnn5H1CH6m9xtxOKmzQ7gE3WD%2B0VqBN96hueCFWQEWM3EIHDxD7IJ53PMCeMJwMfRVpCh5k8NSUkQzXrERp7M7Ggt689RBam75UVywXDZNnbwLk%2BZait1ARI89k0zR741ebiAdJZae1a%2BS5AnMzXkP8%2BSp0EUCAzsnFfrN2itLhoS6vu8bZrmy1R9GzCS2b7EBjqkAc4Fje4u0f%2BpGh3yuG4zTl6QtQS%2FzdApKyDCk6GiBosGkTH20lu7XsGVKX8tv9mfSILkCN3Yn3rnMcPP3Ei8wAs%2BB8TnptHPT50f0UxOAD5MxnPplfoYhSeXiO1AAadM7IOeNRA85EOjVI1qpcRjuX0S%2FPbLkCVC4fsc1jIAGY6yTQ2LsXzaK3sYQVyv9Q7MVFAq0ufhCCOsW7xIZSSUhII9diT6&X-Amz-Signature=3858c8f5afe4c68d98363a20e1a47f5b0800b99af37a1fbfbfa984587c6ca10d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSBM5E7C%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FpFojIdDvkaoSFcScw0Yu2%2BC4dwz3GzpsMY3MAgzpUQIhAIUe5%2F5b4dNnStyfEi4lszR9fY4iviL1IvjayQP6eV4uKv8DCDQQABoMNjM3NDIzMTgzODA1IgwG3%2BVDlyK2GXJNlzIq3AOHj6AfFJr99%2FGDLx2GcwKN8V6Y7X3GmI8F88mG3cUnBOUYDjv%2FejJvqmxRt1AD5NekEVg%2Bz%2BX1lJOCFfjBfWmnkarBLLUiwHi04XoKikfpvJ2Q16ztdiuHz%2BJ5MDKq18i86vv6Dx%2FsS%2FcZ30EmVy6dFINTgb6%2FtDEZuYVL3ad2joXdQgLhQUqerQnw1es9lmmpAf2%2FOdkJiZGPWRGYskipAFvd3N%2BZU%2BkzY3a%2FqXP0ZL4a9PBvdEc5g8rBfNYdtUPFycyzixoQQmmxyO2sfc%2BQQLRBu42DU%2FbSR0Z4d95AA22ASa5Ar8%2FmzFV4MyVKWBO2PFSfdO7PNPZmQa2dVIzf2vXQenK5JhPlXSuga6%2BikzxvhDJ2Uec4KlsMuNz9%2F4eExi9jnVQkxdzsPOiY%2BNYWoRF0KeVk3zVLlkMk4K0ZrdClPx9S2EdPD0cOzMfCIumbnn5H1CH6m9xtxOKmzQ7gE3WD%2B0VqBN96hueCFWQEWM3EIHDxD7IJ53PMCeMJwMfRVpCh5k8NSUkQzXrERp7M7Ggt689RBam75UVywXDZNnbwLk%2BZait1ARI89k0zR741ebiAdJZae1a%2BS5AnMzXkP8%2BSp0EUCAzsnFfrN2itLhoS6vu8bZrmy1R9GzCS2b7EBjqkAc4Fje4u0f%2BpGh3yuG4zTl6QtQS%2FzdApKyDCk6GiBosGkTH20lu7XsGVKX8tv9mfSILkCN3Yn3rnMcPP3Ei8wAs%2BB8TnptHPT50f0UxOAD5MxnPplfoYhSeXiO1AAadM7IOeNRA85EOjVI1qpcRjuX0S%2FPbLkCVC4fsc1jIAGY6yTQ2LsXzaK3sYQVyv9Q7MVFAq0ufhCCOsW7xIZSSUhII9diT6&X-Amz-Signature=8db4091e67fcc031db0c624a62758655462a71d097bd771dd75f77282b615cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSBM5E7C%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FpFojIdDvkaoSFcScw0Yu2%2BC4dwz3GzpsMY3MAgzpUQIhAIUe5%2F5b4dNnStyfEi4lszR9fY4iviL1IvjayQP6eV4uKv8DCDQQABoMNjM3NDIzMTgzODA1IgwG3%2BVDlyK2GXJNlzIq3AOHj6AfFJr99%2FGDLx2GcwKN8V6Y7X3GmI8F88mG3cUnBOUYDjv%2FejJvqmxRt1AD5NekEVg%2Bz%2BX1lJOCFfjBfWmnkarBLLUiwHi04XoKikfpvJ2Q16ztdiuHz%2BJ5MDKq18i86vv6Dx%2FsS%2FcZ30EmVy6dFINTgb6%2FtDEZuYVL3ad2joXdQgLhQUqerQnw1es9lmmpAf2%2FOdkJiZGPWRGYskipAFvd3N%2BZU%2BkzY3a%2FqXP0ZL4a9PBvdEc5g8rBfNYdtUPFycyzixoQQmmxyO2sfc%2BQQLRBu42DU%2FbSR0Z4d95AA22ASa5Ar8%2FmzFV4MyVKWBO2PFSfdO7PNPZmQa2dVIzf2vXQenK5JhPlXSuga6%2BikzxvhDJ2Uec4KlsMuNz9%2F4eExi9jnVQkxdzsPOiY%2BNYWoRF0KeVk3zVLlkMk4K0ZrdClPx9S2EdPD0cOzMfCIumbnn5H1CH6m9xtxOKmzQ7gE3WD%2B0VqBN96hueCFWQEWM3EIHDxD7IJ53PMCeMJwMfRVpCh5k8NSUkQzXrERp7M7Ggt689RBam75UVywXDZNnbwLk%2BZait1ARI89k0zR741ebiAdJZae1a%2BS5AnMzXkP8%2BSp0EUCAzsnFfrN2itLhoS6vu8bZrmy1R9GzCS2b7EBjqkAc4Fje4u0f%2BpGh3yuG4zTl6QtQS%2FzdApKyDCk6GiBosGkTH20lu7XsGVKX8tv9mfSILkCN3Yn3rnMcPP3Ei8wAs%2BB8TnptHPT50f0UxOAD5MxnPplfoYhSeXiO1AAadM7IOeNRA85EOjVI1qpcRjuX0S%2FPbLkCVC4fsc1jIAGY6yTQ2LsXzaK3sYQVyv9Q7MVFAq0ufhCCOsW7xIZSSUhII9diT6&X-Amz-Signature=9684bb34d23b78d054a54d173c9e17394bb270e3c9030b751beab8d1b4907274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSBM5E7C%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FpFojIdDvkaoSFcScw0Yu2%2BC4dwz3GzpsMY3MAgzpUQIhAIUe5%2F5b4dNnStyfEi4lszR9fY4iviL1IvjayQP6eV4uKv8DCDQQABoMNjM3NDIzMTgzODA1IgwG3%2BVDlyK2GXJNlzIq3AOHj6AfFJr99%2FGDLx2GcwKN8V6Y7X3GmI8F88mG3cUnBOUYDjv%2FejJvqmxRt1AD5NekEVg%2Bz%2BX1lJOCFfjBfWmnkarBLLUiwHi04XoKikfpvJ2Q16ztdiuHz%2BJ5MDKq18i86vv6Dx%2FsS%2FcZ30EmVy6dFINTgb6%2FtDEZuYVL3ad2joXdQgLhQUqerQnw1es9lmmpAf2%2FOdkJiZGPWRGYskipAFvd3N%2BZU%2BkzY3a%2FqXP0ZL4a9PBvdEc5g8rBfNYdtUPFycyzixoQQmmxyO2sfc%2BQQLRBu42DU%2FbSR0Z4d95AA22ASa5Ar8%2FmzFV4MyVKWBO2PFSfdO7PNPZmQa2dVIzf2vXQenK5JhPlXSuga6%2BikzxvhDJ2Uec4KlsMuNz9%2F4eExi9jnVQkxdzsPOiY%2BNYWoRF0KeVk3zVLlkMk4K0ZrdClPx9S2EdPD0cOzMfCIumbnn5H1CH6m9xtxOKmzQ7gE3WD%2B0VqBN96hueCFWQEWM3EIHDxD7IJ53PMCeMJwMfRVpCh5k8NSUkQzXrERp7M7Ggt689RBam75UVywXDZNnbwLk%2BZait1ARI89k0zR741ebiAdJZae1a%2BS5AnMzXkP8%2BSp0EUCAzsnFfrN2itLhoS6vu8bZrmy1R9GzCS2b7EBjqkAc4Fje4u0f%2BpGh3yuG4zTl6QtQS%2FzdApKyDCk6GiBosGkTH20lu7XsGVKX8tv9mfSILkCN3Yn3rnMcPP3Ei8wAs%2BB8TnptHPT50f0UxOAD5MxnPplfoYhSeXiO1AAadM7IOeNRA85EOjVI1qpcRjuX0S%2FPbLkCVC4fsc1jIAGY6yTQ2LsXzaK3sYQVyv9Q7MVFAq0ufhCCOsW7xIZSSUhII9diT6&X-Amz-Signature=6b99eaf31c9214409b538f015ba3d15b4c25d5f0c7d9a5e6cb6cd999fc53fada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
