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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QGJ2G4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAmn3dL08hapzo8wR4lFleKJcc7JBFx2kh8I0fTWMLorAiA0Sp4eOfNuKX2wcr%2BWIxpl0ggWo2BtArg9h8FlaYkffyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2FHgpjCfuQFnQAGP5KtwDAbjax4%2BftGpLgFmCeI3cY6lDgxqc4jrRZP48727KUM6W1yrgvYUqlRs%2Br3x%2Fc5OS6fcT9b79Tfca%2FY62on7jBLMc3gbojSlY8RbXL3odX5AJtkHk%2BB%2Br9Ef5ZZjOJox8l2dTuMQxjx3GsJ6AKBvd36YGzQVupKCQM1y4NpuXH1V5S5w6V4UmO9tjA0EFmGhnqQ5S3umu0Kl5CYXq3jFnteRaxbRTljQoTW95M517s6VFRn5%2FB91D119Of6QlqQfmwsiJbuRCm2HjxcQcwvLxGdG%2BxhdHizopEFm6Cwyyo55jtL%2Bgbuwb2tq6foDkb41G4kAQs73zs5IBegvcQ7TZWPzYo1T5JbHsNbanPlEPiMukKvxeKUtXCJzeL%2FKZCwz6gi8iRzvtR8Dxxq4m2N5Cb%2B4CyeVDrS%2Fu2ZpWqF5%2B%2FduTM%2Fa7qchaStxdfuZeVjJ8%2B%2FD9kaNG%2F7ETRBkMsaC2YbLYYmj51oO%2Fx4yWKV3QmBvBaswXA6BtUkgD3D6og5KjUXYgB2tjvyjf92oyEeDXfilfZ0my9b4dImpzzpfhKGk2GgzKNEdAHrBneEt4z1WmjqkG8ochArY%2B%2FymdGoeWfqLmPKXhhZNxzBIEcSDaMwx7f5CGUibRO%2BfWgSsw85fgwwY6pgHBcma%2B%2BBdGeiDq%2FJkeyLoDw7kLz20mMojgNivb4Vv8EI%2BT%2FEFg4dUSKejhS4x5sfpqxRd10Hse4AwD3BbB%2FgxdgmJ0npRXl5gU7AlCndFIP%2BCNgHEjW4vRdeI%2Bq0ryAZGTv7PSXcfpy6h0P9zQb6INdTLbDN2HApCz4ca2PcMKKbIOMQgUWsMuwNTO9pCQcbRxSrcMGS8pTfcB2Pk60UgRonJXuGFf&X-Amz-Signature=ef57dcaca8101607f705b5fdd8ed8f33e3a1f067e946744f5f8662ccbfd43fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QGJ2G4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAmn3dL08hapzo8wR4lFleKJcc7JBFx2kh8I0fTWMLorAiA0Sp4eOfNuKX2wcr%2BWIxpl0ggWo2BtArg9h8FlaYkffyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2FHgpjCfuQFnQAGP5KtwDAbjax4%2BftGpLgFmCeI3cY6lDgxqc4jrRZP48727KUM6W1yrgvYUqlRs%2Br3x%2Fc5OS6fcT9b79Tfca%2FY62on7jBLMc3gbojSlY8RbXL3odX5AJtkHk%2BB%2Br9Ef5ZZjOJox8l2dTuMQxjx3GsJ6AKBvd36YGzQVupKCQM1y4NpuXH1V5S5w6V4UmO9tjA0EFmGhnqQ5S3umu0Kl5CYXq3jFnteRaxbRTljQoTW95M517s6VFRn5%2FB91D119Of6QlqQfmwsiJbuRCm2HjxcQcwvLxGdG%2BxhdHizopEFm6Cwyyo55jtL%2Bgbuwb2tq6foDkb41G4kAQs73zs5IBegvcQ7TZWPzYo1T5JbHsNbanPlEPiMukKvxeKUtXCJzeL%2FKZCwz6gi8iRzvtR8Dxxq4m2N5Cb%2B4CyeVDrS%2Fu2ZpWqF5%2B%2FduTM%2Fa7qchaStxdfuZeVjJ8%2B%2FD9kaNG%2F7ETRBkMsaC2YbLYYmj51oO%2Fx4yWKV3QmBvBaswXA6BtUkgD3D6og5KjUXYgB2tjvyjf92oyEeDXfilfZ0my9b4dImpzzpfhKGk2GgzKNEdAHrBneEt4z1WmjqkG8ochArY%2B%2FymdGoeWfqLmPKXhhZNxzBIEcSDaMwx7f5CGUibRO%2BfWgSsw85fgwwY6pgHBcma%2B%2BBdGeiDq%2FJkeyLoDw7kLz20mMojgNivb4Vv8EI%2BT%2FEFg4dUSKejhS4x5sfpqxRd10Hse4AwD3BbB%2FgxdgmJ0npRXl5gU7AlCndFIP%2BCNgHEjW4vRdeI%2Bq0ryAZGTv7PSXcfpy6h0P9zQb6INdTLbDN2HApCz4ca2PcMKKbIOMQgUWsMuwNTO9pCQcbRxSrcMGS8pTfcB2Pk60UgRonJXuGFf&X-Amz-Signature=9e15b12207834510226ebf58aa32ef86b80fa847d1425fe1ac087c7338d80166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QGJ2G4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAmn3dL08hapzo8wR4lFleKJcc7JBFx2kh8I0fTWMLorAiA0Sp4eOfNuKX2wcr%2BWIxpl0ggWo2BtArg9h8FlaYkffyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2FHgpjCfuQFnQAGP5KtwDAbjax4%2BftGpLgFmCeI3cY6lDgxqc4jrRZP48727KUM6W1yrgvYUqlRs%2Br3x%2Fc5OS6fcT9b79Tfca%2FY62on7jBLMc3gbojSlY8RbXL3odX5AJtkHk%2BB%2Br9Ef5ZZjOJox8l2dTuMQxjx3GsJ6AKBvd36YGzQVupKCQM1y4NpuXH1V5S5w6V4UmO9tjA0EFmGhnqQ5S3umu0Kl5CYXq3jFnteRaxbRTljQoTW95M517s6VFRn5%2FB91D119Of6QlqQfmwsiJbuRCm2HjxcQcwvLxGdG%2BxhdHizopEFm6Cwyyo55jtL%2Bgbuwb2tq6foDkb41G4kAQs73zs5IBegvcQ7TZWPzYo1T5JbHsNbanPlEPiMukKvxeKUtXCJzeL%2FKZCwz6gi8iRzvtR8Dxxq4m2N5Cb%2B4CyeVDrS%2Fu2ZpWqF5%2B%2FduTM%2Fa7qchaStxdfuZeVjJ8%2B%2FD9kaNG%2F7ETRBkMsaC2YbLYYmj51oO%2Fx4yWKV3QmBvBaswXA6BtUkgD3D6og5KjUXYgB2tjvyjf92oyEeDXfilfZ0my9b4dImpzzpfhKGk2GgzKNEdAHrBneEt4z1WmjqkG8ochArY%2B%2FymdGoeWfqLmPKXhhZNxzBIEcSDaMwx7f5CGUibRO%2BfWgSsw85fgwwY6pgHBcma%2B%2BBdGeiDq%2FJkeyLoDw7kLz20mMojgNivb4Vv8EI%2BT%2FEFg4dUSKejhS4x5sfpqxRd10Hse4AwD3BbB%2FgxdgmJ0npRXl5gU7AlCndFIP%2BCNgHEjW4vRdeI%2Bq0ryAZGTv7PSXcfpy6h0P9zQb6INdTLbDN2HApCz4ca2PcMKKbIOMQgUWsMuwNTO9pCQcbRxSrcMGS8pTfcB2Pk60UgRonJXuGFf&X-Amz-Signature=24d74fb138412137a0573b623aeca030aa3a393233c26dd852a439a9f9a368bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QGJ2G4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAmn3dL08hapzo8wR4lFleKJcc7JBFx2kh8I0fTWMLorAiA0Sp4eOfNuKX2wcr%2BWIxpl0ggWo2BtArg9h8FlaYkffyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2FHgpjCfuQFnQAGP5KtwDAbjax4%2BftGpLgFmCeI3cY6lDgxqc4jrRZP48727KUM6W1yrgvYUqlRs%2Br3x%2Fc5OS6fcT9b79Tfca%2FY62on7jBLMc3gbojSlY8RbXL3odX5AJtkHk%2BB%2Br9Ef5ZZjOJox8l2dTuMQxjx3GsJ6AKBvd36YGzQVupKCQM1y4NpuXH1V5S5w6V4UmO9tjA0EFmGhnqQ5S3umu0Kl5CYXq3jFnteRaxbRTljQoTW95M517s6VFRn5%2FB91D119Of6QlqQfmwsiJbuRCm2HjxcQcwvLxGdG%2BxhdHizopEFm6Cwyyo55jtL%2Bgbuwb2tq6foDkb41G4kAQs73zs5IBegvcQ7TZWPzYo1T5JbHsNbanPlEPiMukKvxeKUtXCJzeL%2FKZCwz6gi8iRzvtR8Dxxq4m2N5Cb%2B4CyeVDrS%2Fu2ZpWqF5%2B%2FduTM%2Fa7qchaStxdfuZeVjJ8%2B%2FD9kaNG%2F7ETRBkMsaC2YbLYYmj51oO%2Fx4yWKV3QmBvBaswXA6BtUkgD3D6og5KjUXYgB2tjvyjf92oyEeDXfilfZ0my9b4dImpzzpfhKGk2GgzKNEdAHrBneEt4z1WmjqkG8ochArY%2B%2FymdGoeWfqLmPKXhhZNxzBIEcSDaMwx7f5CGUibRO%2BfWgSsw85fgwwY6pgHBcma%2B%2BBdGeiDq%2FJkeyLoDw7kLz20mMojgNivb4Vv8EI%2BT%2FEFg4dUSKejhS4x5sfpqxRd10Hse4AwD3BbB%2FgxdgmJ0npRXl5gU7AlCndFIP%2BCNgHEjW4vRdeI%2Bq0ryAZGTv7PSXcfpy6h0P9zQb6INdTLbDN2HApCz4ca2PcMKKbIOMQgUWsMuwNTO9pCQcbRxSrcMGS8pTfcB2Pk60UgRonJXuGFf&X-Amz-Signature=58a589c18c6e96aa4ca36cd7601efa5a63022fb4a083ded69af57bbb2959de13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QGJ2G4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAmn3dL08hapzo8wR4lFleKJcc7JBFx2kh8I0fTWMLorAiA0Sp4eOfNuKX2wcr%2BWIxpl0ggWo2BtArg9h8FlaYkffyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2FHgpjCfuQFnQAGP5KtwDAbjax4%2BftGpLgFmCeI3cY6lDgxqc4jrRZP48727KUM6W1yrgvYUqlRs%2Br3x%2Fc5OS6fcT9b79Tfca%2FY62on7jBLMc3gbojSlY8RbXL3odX5AJtkHk%2BB%2Br9Ef5ZZjOJox8l2dTuMQxjx3GsJ6AKBvd36YGzQVupKCQM1y4NpuXH1V5S5w6V4UmO9tjA0EFmGhnqQ5S3umu0Kl5CYXq3jFnteRaxbRTljQoTW95M517s6VFRn5%2FB91D119Of6QlqQfmwsiJbuRCm2HjxcQcwvLxGdG%2BxhdHizopEFm6Cwyyo55jtL%2Bgbuwb2tq6foDkb41G4kAQs73zs5IBegvcQ7TZWPzYo1T5JbHsNbanPlEPiMukKvxeKUtXCJzeL%2FKZCwz6gi8iRzvtR8Dxxq4m2N5Cb%2B4CyeVDrS%2Fu2ZpWqF5%2B%2FduTM%2Fa7qchaStxdfuZeVjJ8%2B%2FD9kaNG%2F7ETRBkMsaC2YbLYYmj51oO%2Fx4yWKV3QmBvBaswXA6BtUkgD3D6og5KjUXYgB2tjvyjf92oyEeDXfilfZ0my9b4dImpzzpfhKGk2GgzKNEdAHrBneEt4z1WmjqkG8ochArY%2B%2FymdGoeWfqLmPKXhhZNxzBIEcSDaMwx7f5CGUibRO%2BfWgSsw85fgwwY6pgHBcma%2B%2BBdGeiDq%2FJkeyLoDw7kLz20mMojgNivb4Vv8EI%2BT%2FEFg4dUSKejhS4x5sfpqxRd10Hse4AwD3BbB%2FgxdgmJ0npRXl5gU7AlCndFIP%2BCNgHEjW4vRdeI%2Bq0ryAZGTv7PSXcfpy6h0P9zQb6INdTLbDN2HApCz4ca2PcMKKbIOMQgUWsMuwNTO9pCQcbRxSrcMGS8pTfcB2Pk60UgRonJXuGFf&X-Amz-Signature=e2448222e2d9e73e52015b40a7c12a6e94138d34ce0c958880ec87c1d3daa30a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QGJ2G4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAmn3dL08hapzo8wR4lFleKJcc7JBFx2kh8I0fTWMLorAiA0Sp4eOfNuKX2wcr%2BWIxpl0ggWo2BtArg9h8FlaYkffyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2FHgpjCfuQFnQAGP5KtwDAbjax4%2BftGpLgFmCeI3cY6lDgxqc4jrRZP48727KUM6W1yrgvYUqlRs%2Br3x%2Fc5OS6fcT9b79Tfca%2FY62on7jBLMc3gbojSlY8RbXL3odX5AJtkHk%2BB%2Br9Ef5ZZjOJox8l2dTuMQxjx3GsJ6AKBvd36YGzQVupKCQM1y4NpuXH1V5S5w6V4UmO9tjA0EFmGhnqQ5S3umu0Kl5CYXq3jFnteRaxbRTljQoTW95M517s6VFRn5%2FB91D119Of6QlqQfmwsiJbuRCm2HjxcQcwvLxGdG%2BxhdHizopEFm6Cwyyo55jtL%2Bgbuwb2tq6foDkb41G4kAQs73zs5IBegvcQ7TZWPzYo1T5JbHsNbanPlEPiMukKvxeKUtXCJzeL%2FKZCwz6gi8iRzvtR8Dxxq4m2N5Cb%2B4CyeVDrS%2Fu2ZpWqF5%2B%2FduTM%2Fa7qchaStxdfuZeVjJ8%2B%2FD9kaNG%2F7ETRBkMsaC2YbLYYmj51oO%2Fx4yWKV3QmBvBaswXA6BtUkgD3D6og5KjUXYgB2tjvyjf92oyEeDXfilfZ0my9b4dImpzzpfhKGk2GgzKNEdAHrBneEt4z1WmjqkG8ochArY%2B%2FymdGoeWfqLmPKXhhZNxzBIEcSDaMwx7f5CGUibRO%2BfWgSsw85fgwwY6pgHBcma%2B%2BBdGeiDq%2FJkeyLoDw7kLz20mMojgNivb4Vv8EI%2BT%2FEFg4dUSKejhS4x5sfpqxRd10Hse4AwD3BbB%2FgxdgmJ0npRXl5gU7AlCndFIP%2BCNgHEjW4vRdeI%2Bq0ryAZGTv7PSXcfpy6h0P9zQb6INdTLbDN2HApCz4ca2PcMKKbIOMQgUWsMuwNTO9pCQcbRxSrcMGS8pTfcB2Pk60UgRonJXuGFf&X-Amz-Signature=8d3099232e09ca1842ad1127a1ba7ef5a86d8cf6e0f84cd422e6eceb5749bfbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QGJ2G4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAmn3dL08hapzo8wR4lFleKJcc7JBFx2kh8I0fTWMLorAiA0Sp4eOfNuKX2wcr%2BWIxpl0ggWo2BtArg9h8FlaYkffyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2FHgpjCfuQFnQAGP5KtwDAbjax4%2BftGpLgFmCeI3cY6lDgxqc4jrRZP48727KUM6W1yrgvYUqlRs%2Br3x%2Fc5OS6fcT9b79Tfca%2FY62on7jBLMc3gbojSlY8RbXL3odX5AJtkHk%2BB%2Br9Ef5ZZjOJox8l2dTuMQxjx3GsJ6AKBvd36YGzQVupKCQM1y4NpuXH1V5S5w6V4UmO9tjA0EFmGhnqQ5S3umu0Kl5CYXq3jFnteRaxbRTljQoTW95M517s6VFRn5%2FB91D119Of6QlqQfmwsiJbuRCm2HjxcQcwvLxGdG%2BxhdHizopEFm6Cwyyo55jtL%2Bgbuwb2tq6foDkb41G4kAQs73zs5IBegvcQ7TZWPzYo1T5JbHsNbanPlEPiMukKvxeKUtXCJzeL%2FKZCwz6gi8iRzvtR8Dxxq4m2N5Cb%2B4CyeVDrS%2Fu2ZpWqF5%2B%2FduTM%2Fa7qchaStxdfuZeVjJ8%2B%2FD9kaNG%2F7ETRBkMsaC2YbLYYmj51oO%2Fx4yWKV3QmBvBaswXA6BtUkgD3D6og5KjUXYgB2tjvyjf92oyEeDXfilfZ0my9b4dImpzzpfhKGk2GgzKNEdAHrBneEt4z1WmjqkG8ochArY%2B%2FymdGoeWfqLmPKXhhZNxzBIEcSDaMwx7f5CGUibRO%2BfWgSsw85fgwwY6pgHBcma%2B%2BBdGeiDq%2FJkeyLoDw7kLz20mMojgNivb4Vv8EI%2BT%2FEFg4dUSKejhS4x5sfpqxRd10Hse4AwD3BbB%2FgxdgmJ0npRXl5gU7AlCndFIP%2BCNgHEjW4vRdeI%2Bq0ryAZGTv7PSXcfpy6h0P9zQb6INdTLbDN2HApCz4ca2PcMKKbIOMQgUWsMuwNTO9pCQcbRxSrcMGS8pTfcB2Pk60UgRonJXuGFf&X-Amz-Signature=beb67af8a924bee7dee5a631c7943d71faf66e24bea7bb426e1963d20174776e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QGJ2G4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAmn3dL08hapzo8wR4lFleKJcc7JBFx2kh8I0fTWMLorAiA0Sp4eOfNuKX2wcr%2BWIxpl0ggWo2BtArg9h8FlaYkffyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2FHgpjCfuQFnQAGP5KtwDAbjax4%2BftGpLgFmCeI3cY6lDgxqc4jrRZP48727KUM6W1yrgvYUqlRs%2Br3x%2Fc5OS6fcT9b79Tfca%2FY62on7jBLMc3gbojSlY8RbXL3odX5AJtkHk%2BB%2Br9Ef5ZZjOJox8l2dTuMQxjx3GsJ6AKBvd36YGzQVupKCQM1y4NpuXH1V5S5w6V4UmO9tjA0EFmGhnqQ5S3umu0Kl5CYXq3jFnteRaxbRTljQoTW95M517s6VFRn5%2FB91D119Of6QlqQfmwsiJbuRCm2HjxcQcwvLxGdG%2BxhdHizopEFm6Cwyyo55jtL%2Bgbuwb2tq6foDkb41G4kAQs73zs5IBegvcQ7TZWPzYo1T5JbHsNbanPlEPiMukKvxeKUtXCJzeL%2FKZCwz6gi8iRzvtR8Dxxq4m2N5Cb%2B4CyeVDrS%2Fu2ZpWqF5%2B%2FduTM%2Fa7qchaStxdfuZeVjJ8%2B%2FD9kaNG%2F7ETRBkMsaC2YbLYYmj51oO%2Fx4yWKV3QmBvBaswXA6BtUkgD3D6og5KjUXYgB2tjvyjf92oyEeDXfilfZ0my9b4dImpzzpfhKGk2GgzKNEdAHrBneEt4z1WmjqkG8ochArY%2B%2FymdGoeWfqLmPKXhhZNxzBIEcSDaMwx7f5CGUibRO%2BfWgSsw85fgwwY6pgHBcma%2B%2BBdGeiDq%2FJkeyLoDw7kLz20mMojgNivb4Vv8EI%2BT%2FEFg4dUSKejhS4x5sfpqxRd10Hse4AwD3BbB%2FgxdgmJ0npRXl5gU7AlCndFIP%2BCNgHEjW4vRdeI%2Bq0ryAZGTv7PSXcfpy6h0P9zQb6INdTLbDN2HApCz4ca2PcMKKbIOMQgUWsMuwNTO9pCQcbRxSrcMGS8pTfcB2Pk60UgRonJXuGFf&X-Amz-Signature=43ffd33e4f81518ea929017acd0cca63f795c62b6f361f69c1ac443e9b3725c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
