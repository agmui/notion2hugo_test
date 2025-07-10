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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2GYES7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9DOuwFRTvewfL0B%2BuwZZidvgwblFvQne5Y7O9WJGPpAiBGL41PTMWc3gCxf1%2FJZXVvG5h8ib617CD17HZ4IbftliqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzPZvxiAVapo5YYOJKtwD8tx1avpRkkbZT%2BMWs23Uonlt8AALblJi0nvxnhJ5yIGf7PEeciDUiR4IYnerpThvMC3TwshfP8oJxOtMbKvQIFENSM%2FW0ZoUhB5Z0GtY%2B0JOHMG0Sf%2FgreTsXl%2F70b1YkVqDiN44G%2FcbJxCP6aByudNPNHZB%2F%2F5jAIq1b2Nuv4VshVBEmf6qo3N1dkBdJa5CP33YrpjfeV25urCmKX0CjcUkGiEG9FaFX20g%2BGc7QppgY9DuN4UYdNZ8TElFeENs1YOjofIcfYdhi%2FE3qSd%2FL0uQYZ7Uz6fzkg5IPZfzuEnOVyGQJQQ1gxvxXgc99L2DN7rXc8eZ4UmzLtV%2Fcg5e%2BGU35VylzwPzx6elBfeFPiy7FFgQdMM%2F8GVG9WpQzOwzJ6DXIcYy%2BaUCdKb6KiSeR3y415WlpsWKQud38reWpnFhxIO%2BDNqQ%2FAwCI%2F6BQR8tYqHKBvQfOucPhdI27lfp28F764BJx6CnByRYRh2mMbA2ZrPgcowJfWG9BmF7M%2FtWbljqTMUszsdi%2FB5STT8GXhfKHKbLEJvUqJcR9hK1ZnH7ktPXqKNYutBofLAyP0aHCxeHs%2Bma672pO7%2FktBog%2Bcy8b0%2FdqlQnzsOfg%2F0N1yG%2FhDovO1s%2BVrk35h0wu9W9wwY6pgGMlPVCKv3QmCKnTlDOYVtdx1NgdIAJivHfHh9Ws2OI7%2BcMmLLPK8II03lASU7P24kkchHnwCz7QFFfKQYx36xXvsIljmpfHjOf5HAd8MlbVF%2Bybm3qgLU7sD%2F4B3VGyoHDjT2d0qix2b3xa%2BKcb1ywKMtfJb6%2BOpYi5qhrBw5%2FQPUSD2RadyJTI4QJRoAY%2BSseOABcz3POvQtn2UzBRlYUlF81P5ln&X-Amz-Signature=87f77828a49932274bb9839486ef14090a29c316878714b3b2a8f6f1be377b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2GYES7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9DOuwFRTvewfL0B%2BuwZZidvgwblFvQne5Y7O9WJGPpAiBGL41PTMWc3gCxf1%2FJZXVvG5h8ib617CD17HZ4IbftliqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzPZvxiAVapo5YYOJKtwD8tx1avpRkkbZT%2BMWs23Uonlt8AALblJi0nvxnhJ5yIGf7PEeciDUiR4IYnerpThvMC3TwshfP8oJxOtMbKvQIFENSM%2FW0ZoUhB5Z0GtY%2B0JOHMG0Sf%2FgreTsXl%2F70b1YkVqDiN44G%2FcbJxCP6aByudNPNHZB%2F%2F5jAIq1b2Nuv4VshVBEmf6qo3N1dkBdJa5CP33YrpjfeV25urCmKX0CjcUkGiEG9FaFX20g%2BGc7QppgY9DuN4UYdNZ8TElFeENs1YOjofIcfYdhi%2FE3qSd%2FL0uQYZ7Uz6fzkg5IPZfzuEnOVyGQJQQ1gxvxXgc99L2DN7rXc8eZ4UmzLtV%2Fcg5e%2BGU35VylzwPzx6elBfeFPiy7FFgQdMM%2F8GVG9WpQzOwzJ6DXIcYy%2BaUCdKb6KiSeR3y415WlpsWKQud38reWpnFhxIO%2BDNqQ%2FAwCI%2F6BQR8tYqHKBvQfOucPhdI27lfp28F764BJx6CnByRYRh2mMbA2ZrPgcowJfWG9BmF7M%2FtWbljqTMUszsdi%2FB5STT8GXhfKHKbLEJvUqJcR9hK1ZnH7ktPXqKNYutBofLAyP0aHCxeHs%2Bma672pO7%2FktBog%2Bcy8b0%2FdqlQnzsOfg%2F0N1yG%2FhDovO1s%2BVrk35h0wu9W9wwY6pgGMlPVCKv3QmCKnTlDOYVtdx1NgdIAJivHfHh9Ws2OI7%2BcMmLLPK8II03lASU7P24kkchHnwCz7QFFfKQYx36xXvsIljmpfHjOf5HAd8MlbVF%2Bybm3qgLU7sD%2F4B3VGyoHDjT2d0qix2b3xa%2BKcb1ywKMtfJb6%2BOpYi5qhrBw5%2FQPUSD2RadyJTI4QJRoAY%2BSseOABcz3POvQtn2UzBRlYUlF81P5ln&X-Amz-Signature=86ddb8c189d811fc067e9c4599fe03bf3f5f87ee95af193a1a77a6a6412f5bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2GYES7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9DOuwFRTvewfL0B%2BuwZZidvgwblFvQne5Y7O9WJGPpAiBGL41PTMWc3gCxf1%2FJZXVvG5h8ib617CD17HZ4IbftliqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzPZvxiAVapo5YYOJKtwD8tx1avpRkkbZT%2BMWs23Uonlt8AALblJi0nvxnhJ5yIGf7PEeciDUiR4IYnerpThvMC3TwshfP8oJxOtMbKvQIFENSM%2FW0ZoUhB5Z0GtY%2B0JOHMG0Sf%2FgreTsXl%2F70b1YkVqDiN44G%2FcbJxCP6aByudNPNHZB%2F%2F5jAIq1b2Nuv4VshVBEmf6qo3N1dkBdJa5CP33YrpjfeV25urCmKX0CjcUkGiEG9FaFX20g%2BGc7QppgY9DuN4UYdNZ8TElFeENs1YOjofIcfYdhi%2FE3qSd%2FL0uQYZ7Uz6fzkg5IPZfzuEnOVyGQJQQ1gxvxXgc99L2DN7rXc8eZ4UmzLtV%2Fcg5e%2BGU35VylzwPzx6elBfeFPiy7FFgQdMM%2F8GVG9WpQzOwzJ6DXIcYy%2BaUCdKb6KiSeR3y415WlpsWKQud38reWpnFhxIO%2BDNqQ%2FAwCI%2F6BQR8tYqHKBvQfOucPhdI27lfp28F764BJx6CnByRYRh2mMbA2ZrPgcowJfWG9BmF7M%2FtWbljqTMUszsdi%2FB5STT8GXhfKHKbLEJvUqJcR9hK1ZnH7ktPXqKNYutBofLAyP0aHCxeHs%2Bma672pO7%2FktBog%2Bcy8b0%2FdqlQnzsOfg%2F0N1yG%2FhDovO1s%2BVrk35h0wu9W9wwY6pgGMlPVCKv3QmCKnTlDOYVtdx1NgdIAJivHfHh9Ws2OI7%2BcMmLLPK8II03lASU7P24kkchHnwCz7QFFfKQYx36xXvsIljmpfHjOf5HAd8MlbVF%2Bybm3qgLU7sD%2F4B3VGyoHDjT2d0qix2b3xa%2BKcb1ywKMtfJb6%2BOpYi5qhrBw5%2FQPUSD2RadyJTI4QJRoAY%2BSseOABcz3POvQtn2UzBRlYUlF81P5ln&X-Amz-Signature=46c5c8929124619aecb0ac2b5fe264e4cb54258572f29c02652e7afd1cd010e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2GYES7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9DOuwFRTvewfL0B%2BuwZZidvgwblFvQne5Y7O9WJGPpAiBGL41PTMWc3gCxf1%2FJZXVvG5h8ib617CD17HZ4IbftliqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzPZvxiAVapo5YYOJKtwD8tx1avpRkkbZT%2BMWs23Uonlt8AALblJi0nvxnhJ5yIGf7PEeciDUiR4IYnerpThvMC3TwshfP8oJxOtMbKvQIFENSM%2FW0ZoUhB5Z0GtY%2B0JOHMG0Sf%2FgreTsXl%2F70b1YkVqDiN44G%2FcbJxCP6aByudNPNHZB%2F%2F5jAIq1b2Nuv4VshVBEmf6qo3N1dkBdJa5CP33YrpjfeV25urCmKX0CjcUkGiEG9FaFX20g%2BGc7QppgY9DuN4UYdNZ8TElFeENs1YOjofIcfYdhi%2FE3qSd%2FL0uQYZ7Uz6fzkg5IPZfzuEnOVyGQJQQ1gxvxXgc99L2DN7rXc8eZ4UmzLtV%2Fcg5e%2BGU35VylzwPzx6elBfeFPiy7FFgQdMM%2F8GVG9WpQzOwzJ6DXIcYy%2BaUCdKb6KiSeR3y415WlpsWKQud38reWpnFhxIO%2BDNqQ%2FAwCI%2F6BQR8tYqHKBvQfOucPhdI27lfp28F764BJx6CnByRYRh2mMbA2ZrPgcowJfWG9BmF7M%2FtWbljqTMUszsdi%2FB5STT8GXhfKHKbLEJvUqJcR9hK1ZnH7ktPXqKNYutBofLAyP0aHCxeHs%2Bma672pO7%2FktBog%2Bcy8b0%2FdqlQnzsOfg%2F0N1yG%2FhDovO1s%2BVrk35h0wu9W9wwY6pgGMlPVCKv3QmCKnTlDOYVtdx1NgdIAJivHfHh9Ws2OI7%2BcMmLLPK8II03lASU7P24kkchHnwCz7QFFfKQYx36xXvsIljmpfHjOf5HAd8MlbVF%2Bybm3qgLU7sD%2F4B3VGyoHDjT2d0qix2b3xa%2BKcb1ywKMtfJb6%2BOpYi5qhrBw5%2FQPUSD2RadyJTI4QJRoAY%2BSseOABcz3POvQtn2UzBRlYUlF81P5ln&X-Amz-Signature=1eb4c98fe69f2806a2aae24a88ca41969bc7c35fba5e71b63a0a614a7b450a98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2GYES7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9DOuwFRTvewfL0B%2BuwZZidvgwblFvQne5Y7O9WJGPpAiBGL41PTMWc3gCxf1%2FJZXVvG5h8ib617CD17HZ4IbftliqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzPZvxiAVapo5YYOJKtwD8tx1avpRkkbZT%2BMWs23Uonlt8AALblJi0nvxnhJ5yIGf7PEeciDUiR4IYnerpThvMC3TwshfP8oJxOtMbKvQIFENSM%2FW0ZoUhB5Z0GtY%2B0JOHMG0Sf%2FgreTsXl%2F70b1YkVqDiN44G%2FcbJxCP6aByudNPNHZB%2F%2F5jAIq1b2Nuv4VshVBEmf6qo3N1dkBdJa5CP33YrpjfeV25urCmKX0CjcUkGiEG9FaFX20g%2BGc7QppgY9DuN4UYdNZ8TElFeENs1YOjofIcfYdhi%2FE3qSd%2FL0uQYZ7Uz6fzkg5IPZfzuEnOVyGQJQQ1gxvxXgc99L2DN7rXc8eZ4UmzLtV%2Fcg5e%2BGU35VylzwPzx6elBfeFPiy7FFgQdMM%2F8GVG9WpQzOwzJ6DXIcYy%2BaUCdKb6KiSeR3y415WlpsWKQud38reWpnFhxIO%2BDNqQ%2FAwCI%2F6BQR8tYqHKBvQfOucPhdI27lfp28F764BJx6CnByRYRh2mMbA2ZrPgcowJfWG9BmF7M%2FtWbljqTMUszsdi%2FB5STT8GXhfKHKbLEJvUqJcR9hK1ZnH7ktPXqKNYutBofLAyP0aHCxeHs%2Bma672pO7%2FktBog%2Bcy8b0%2FdqlQnzsOfg%2F0N1yG%2FhDovO1s%2BVrk35h0wu9W9wwY6pgGMlPVCKv3QmCKnTlDOYVtdx1NgdIAJivHfHh9Ws2OI7%2BcMmLLPK8II03lASU7P24kkchHnwCz7QFFfKQYx36xXvsIljmpfHjOf5HAd8MlbVF%2Bybm3qgLU7sD%2F4B3VGyoHDjT2d0qix2b3xa%2BKcb1ywKMtfJb6%2BOpYi5qhrBw5%2FQPUSD2RadyJTI4QJRoAY%2BSseOABcz3POvQtn2UzBRlYUlF81P5ln&X-Amz-Signature=cb269eda8a120910f1387ba33876bf4e03dc1d810b5d3bbf9a63207b23dcc1c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2GYES7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9DOuwFRTvewfL0B%2BuwZZidvgwblFvQne5Y7O9WJGPpAiBGL41PTMWc3gCxf1%2FJZXVvG5h8ib617CD17HZ4IbftliqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzPZvxiAVapo5YYOJKtwD8tx1avpRkkbZT%2BMWs23Uonlt8AALblJi0nvxnhJ5yIGf7PEeciDUiR4IYnerpThvMC3TwshfP8oJxOtMbKvQIFENSM%2FW0ZoUhB5Z0GtY%2B0JOHMG0Sf%2FgreTsXl%2F70b1YkVqDiN44G%2FcbJxCP6aByudNPNHZB%2F%2F5jAIq1b2Nuv4VshVBEmf6qo3N1dkBdJa5CP33YrpjfeV25urCmKX0CjcUkGiEG9FaFX20g%2BGc7QppgY9DuN4UYdNZ8TElFeENs1YOjofIcfYdhi%2FE3qSd%2FL0uQYZ7Uz6fzkg5IPZfzuEnOVyGQJQQ1gxvxXgc99L2DN7rXc8eZ4UmzLtV%2Fcg5e%2BGU35VylzwPzx6elBfeFPiy7FFgQdMM%2F8GVG9WpQzOwzJ6DXIcYy%2BaUCdKb6KiSeR3y415WlpsWKQud38reWpnFhxIO%2BDNqQ%2FAwCI%2F6BQR8tYqHKBvQfOucPhdI27lfp28F764BJx6CnByRYRh2mMbA2ZrPgcowJfWG9BmF7M%2FtWbljqTMUszsdi%2FB5STT8GXhfKHKbLEJvUqJcR9hK1ZnH7ktPXqKNYutBofLAyP0aHCxeHs%2Bma672pO7%2FktBog%2Bcy8b0%2FdqlQnzsOfg%2F0N1yG%2FhDovO1s%2BVrk35h0wu9W9wwY6pgGMlPVCKv3QmCKnTlDOYVtdx1NgdIAJivHfHh9Ws2OI7%2BcMmLLPK8II03lASU7P24kkchHnwCz7QFFfKQYx36xXvsIljmpfHjOf5HAd8MlbVF%2Bybm3qgLU7sD%2F4B3VGyoHDjT2d0qix2b3xa%2BKcb1ywKMtfJb6%2BOpYi5qhrBw5%2FQPUSD2RadyJTI4QJRoAY%2BSseOABcz3POvQtn2UzBRlYUlF81P5ln&X-Amz-Signature=b83a0f172a5787d8ae9c28a8bf94479b61cf61fd1dbf6411ab9affb4abe504be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2GYES7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9DOuwFRTvewfL0B%2BuwZZidvgwblFvQne5Y7O9WJGPpAiBGL41PTMWc3gCxf1%2FJZXVvG5h8ib617CD17HZ4IbftliqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzPZvxiAVapo5YYOJKtwD8tx1avpRkkbZT%2BMWs23Uonlt8AALblJi0nvxnhJ5yIGf7PEeciDUiR4IYnerpThvMC3TwshfP8oJxOtMbKvQIFENSM%2FW0ZoUhB5Z0GtY%2B0JOHMG0Sf%2FgreTsXl%2F70b1YkVqDiN44G%2FcbJxCP6aByudNPNHZB%2F%2F5jAIq1b2Nuv4VshVBEmf6qo3N1dkBdJa5CP33YrpjfeV25urCmKX0CjcUkGiEG9FaFX20g%2BGc7QppgY9DuN4UYdNZ8TElFeENs1YOjofIcfYdhi%2FE3qSd%2FL0uQYZ7Uz6fzkg5IPZfzuEnOVyGQJQQ1gxvxXgc99L2DN7rXc8eZ4UmzLtV%2Fcg5e%2BGU35VylzwPzx6elBfeFPiy7FFgQdMM%2F8GVG9WpQzOwzJ6DXIcYy%2BaUCdKb6KiSeR3y415WlpsWKQud38reWpnFhxIO%2BDNqQ%2FAwCI%2F6BQR8tYqHKBvQfOucPhdI27lfp28F764BJx6CnByRYRh2mMbA2ZrPgcowJfWG9BmF7M%2FtWbljqTMUszsdi%2FB5STT8GXhfKHKbLEJvUqJcR9hK1ZnH7ktPXqKNYutBofLAyP0aHCxeHs%2Bma672pO7%2FktBog%2Bcy8b0%2FdqlQnzsOfg%2F0N1yG%2FhDovO1s%2BVrk35h0wu9W9wwY6pgGMlPVCKv3QmCKnTlDOYVtdx1NgdIAJivHfHh9Ws2OI7%2BcMmLLPK8II03lASU7P24kkchHnwCz7QFFfKQYx36xXvsIljmpfHjOf5HAd8MlbVF%2Bybm3qgLU7sD%2F4B3VGyoHDjT2d0qix2b3xa%2BKcb1ywKMtfJb6%2BOpYi5qhrBw5%2FQPUSD2RadyJTI4QJRoAY%2BSseOABcz3POvQtn2UzBRlYUlF81P5ln&X-Amz-Signature=e0c6b5f7e84db03d6c96275a76f84b94860a37c9f9cf2fef937a522cc53c1e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2GYES7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9DOuwFRTvewfL0B%2BuwZZidvgwblFvQne5Y7O9WJGPpAiBGL41PTMWc3gCxf1%2FJZXVvG5h8ib617CD17HZ4IbftliqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzPZvxiAVapo5YYOJKtwD8tx1avpRkkbZT%2BMWs23Uonlt8AALblJi0nvxnhJ5yIGf7PEeciDUiR4IYnerpThvMC3TwshfP8oJxOtMbKvQIFENSM%2FW0ZoUhB5Z0GtY%2B0JOHMG0Sf%2FgreTsXl%2F70b1YkVqDiN44G%2FcbJxCP6aByudNPNHZB%2F%2F5jAIq1b2Nuv4VshVBEmf6qo3N1dkBdJa5CP33YrpjfeV25urCmKX0CjcUkGiEG9FaFX20g%2BGc7QppgY9DuN4UYdNZ8TElFeENs1YOjofIcfYdhi%2FE3qSd%2FL0uQYZ7Uz6fzkg5IPZfzuEnOVyGQJQQ1gxvxXgc99L2DN7rXc8eZ4UmzLtV%2Fcg5e%2BGU35VylzwPzx6elBfeFPiy7FFgQdMM%2F8GVG9WpQzOwzJ6DXIcYy%2BaUCdKb6KiSeR3y415WlpsWKQud38reWpnFhxIO%2BDNqQ%2FAwCI%2F6BQR8tYqHKBvQfOucPhdI27lfp28F764BJx6CnByRYRh2mMbA2ZrPgcowJfWG9BmF7M%2FtWbljqTMUszsdi%2FB5STT8GXhfKHKbLEJvUqJcR9hK1ZnH7ktPXqKNYutBofLAyP0aHCxeHs%2Bma672pO7%2FktBog%2Bcy8b0%2FdqlQnzsOfg%2F0N1yG%2FhDovO1s%2BVrk35h0wu9W9wwY6pgGMlPVCKv3QmCKnTlDOYVtdx1NgdIAJivHfHh9Ws2OI7%2BcMmLLPK8II03lASU7P24kkchHnwCz7QFFfKQYx36xXvsIljmpfHjOf5HAd8MlbVF%2Bybm3qgLU7sD%2F4B3VGyoHDjT2d0qix2b3xa%2BKcb1ywKMtfJb6%2BOpYi5qhrBw5%2FQPUSD2RadyJTI4QJRoAY%2BSseOABcz3POvQtn2UzBRlYUlF81P5ln&X-Amz-Signature=3ca69a63f5265b03916e9c2aafd97680751a558b712e3bfe7da3b0af79bb63a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
