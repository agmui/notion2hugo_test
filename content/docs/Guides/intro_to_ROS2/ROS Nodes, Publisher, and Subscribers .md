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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2P24EB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBZSRrXrgOShqbAxaCYLDtmlVQ7WslDfPnPSyyCr0xv4AiEA6vTi4s6yyTMcFoLkdQB6MalrBQNzKSbLl57MV17%2BkwAq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDEvxZbriPAGrWNqNMircA8T8TC26ozurDDaOZxmYr3PHIi8cYtc5WIV16gydAg6q276QYkEVOejcaSmiMivv4f%2FV9KuK1kBhRv%2BGft9f2YAsC87hbe%2BuKcGyhGRCxLF%2FxVX%2FAmIkZ%2BvmgoKWz1FllraXZ0jPpC%2Fp9kA0uhApXbqHGPnlE5A4r1Qui3Uo3uFwcm5%2FQTWDYWsOA5dnDQmtctDqhg0pP9E04mFzjZY86PGdXhO54olzCE8RIRUCTK1ynO9rXCNMu8xiTNuxCkPebrg8vhpF%2B9E%2BprHchGxLW%2FliYRfpW9GvK%2FONYBBZAw184xSHDOpSHzsqHt0seBe0wzqSwPPYHtulLHG2Iq64rMqshZddutlFF7zlXfmLrBR09DfJ9haJZBMHZ5aTq7KCKQxS12ScqwjuwDwep5R9aSGlV6bc6sw%2ByCR2%2B6RjqrkchLGG5RMQNy8qslHBic%2FGaBR7%2F6nq5RrqsmG7oQx%2F44ta%2FAkyVomeYpC3WH%2BwmCViHhBnR9HZvCc8rUYxa3ryanRx6yPVZSuv%2B7WqhoeZffQTqQLiji75Of1NDVDaYjaEnFGvQ4AZoAulcD%2FVqBiBdIGgUQGmXYDPNMxFmvd66yUp4E3JuAnc14xKFySKq1dOlziuA98etifC60pMMIOW4sMGOqUBYd55ovdcr6dxXPICBR9JIw83zimAwtFYdAgi4Z3ysOBwMZQ6TjQTjoBb%2F7kdDEuw1K7NYP65QxvpaSIH%2By0NYEo7vxj8Q9%2FgQy0g5HH1S4KKQZ0QjDtWgx90ueFpcGAm9RRWHAGzNE3VF%2FrufTTOzlpShK6CH2jdXWC7z0vlC84%2BwDsOk00cJUDZH6orYlbjlNPPb3YzMW9tJWiT50AakpQLlQMp&X-Amz-Signature=ca463fec1f8ee2a22ed8b3ab8ca9bfaffa2777361e9ec47752b110582eaf604c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2P24EB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBZSRrXrgOShqbAxaCYLDtmlVQ7WslDfPnPSyyCr0xv4AiEA6vTi4s6yyTMcFoLkdQB6MalrBQNzKSbLl57MV17%2BkwAq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDEvxZbriPAGrWNqNMircA8T8TC26ozurDDaOZxmYr3PHIi8cYtc5WIV16gydAg6q276QYkEVOejcaSmiMivv4f%2FV9KuK1kBhRv%2BGft9f2YAsC87hbe%2BuKcGyhGRCxLF%2FxVX%2FAmIkZ%2BvmgoKWz1FllraXZ0jPpC%2Fp9kA0uhApXbqHGPnlE5A4r1Qui3Uo3uFwcm5%2FQTWDYWsOA5dnDQmtctDqhg0pP9E04mFzjZY86PGdXhO54olzCE8RIRUCTK1ynO9rXCNMu8xiTNuxCkPebrg8vhpF%2B9E%2BprHchGxLW%2FliYRfpW9GvK%2FONYBBZAw184xSHDOpSHzsqHt0seBe0wzqSwPPYHtulLHG2Iq64rMqshZddutlFF7zlXfmLrBR09DfJ9haJZBMHZ5aTq7KCKQxS12ScqwjuwDwep5R9aSGlV6bc6sw%2ByCR2%2B6RjqrkchLGG5RMQNy8qslHBic%2FGaBR7%2F6nq5RrqsmG7oQx%2F44ta%2FAkyVomeYpC3WH%2BwmCViHhBnR9HZvCc8rUYxa3ryanRx6yPVZSuv%2B7WqhoeZffQTqQLiji75Of1NDVDaYjaEnFGvQ4AZoAulcD%2FVqBiBdIGgUQGmXYDPNMxFmvd66yUp4E3JuAnc14xKFySKq1dOlziuA98etifC60pMMIOW4sMGOqUBYd55ovdcr6dxXPICBR9JIw83zimAwtFYdAgi4Z3ysOBwMZQ6TjQTjoBb%2F7kdDEuw1K7NYP65QxvpaSIH%2By0NYEo7vxj8Q9%2FgQy0g5HH1S4KKQZ0QjDtWgx90ueFpcGAm9RRWHAGzNE3VF%2FrufTTOzlpShK6CH2jdXWC7z0vlC84%2BwDsOk00cJUDZH6orYlbjlNPPb3YzMW9tJWiT50AakpQLlQMp&X-Amz-Signature=3560fd7cba4f90ea2a14cbe7d9db69bd79f8bdf181dd895f944bf5a2bb2fd97a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2P24EB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBZSRrXrgOShqbAxaCYLDtmlVQ7WslDfPnPSyyCr0xv4AiEA6vTi4s6yyTMcFoLkdQB6MalrBQNzKSbLl57MV17%2BkwAq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDEvxZbriPAGrWNqNMircA8T8TC26ozurDDaOZxmYr3PHIi8cYtc5WIV16gydAg6q276QYkEVOejcaSmiMivv4f%2FV9KuK1kBhRv%2BGft9f2YAsC87hbe%2BuKcGyhGRCxLF%2FxVX%2FAmIkZ%2BvmgoKWz1FllraXZ0jPpC%2Fp9kA0uhApXbqHGPnlE5A4r1Qui3Uo3uFwcm5%2FQTWDYWsOA5dnDQmtctDqhg0pP9E04mFzjZY86PGdXhO54olzCE8RIRUCTK1ynO9rXCNMu8xiTNuxCkPebrg8vhpF%2B9E%2BprHchGxLW%2FliYRfpW9GvK%2FONYBBZAw184xSHDOpSHzsqHt0seBe0wzqSwPPYHtulLHG2Iq64rMqshZddutlFF7zlXfmLrBR09DfJ9haJZBMHZ5aTq7KCKQxS12ScqwjuwDwep5R9aSGlV6bc6sw%2ByCR2%2B6RjqrkchLGG5RMQNy8qslHBic%2FGaBR7%2F6nq5RrqsmG7oQx%2F44ta%2FAkyVomeYpC3WH%2BwmCViHhBnR9HZvCc8rUYxa3ryanRx6yPVZSuv%2B7WqhoeZffQTqQLiji75Of1NDVDaYjaEnFGvQ4AZoAulcD%2FVqBiBdIGgUQGmXYDPNMxFmvd66yUp4E3JuAnc14xKFySKq1dOlziuA98etifC60pMMIOW4sMGOqUBYd55ovdcr6dxXPICBR9JIw83zimAwtFYdAgi4Z3ysOBwMZQ6TjQTjoBb%2F7kdDEuw1K7NYP65QxvpaSIH%2By0NYEo7vxj8Q9%2FgQy0g5HH1S4KKQZ0QjDtWgx90ueFpcGAm9RRWHAGzNE3VF%2FrufTTOzlpShK6CH2jdXWC7z0vlC84%2BwDsOk00cJUDZH6orYlbjlNPPb3YzMW9tJWiT50AakpQLlQMp&X-Amz-Signature=6668239ada3e55ca2788a09ec1922fee77dce5d1976a8a474035903fbd7211a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2P24EB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBZSRrXrgOShqbAxaCYLDtmlVQ7WslDfPnPSyyCr0xv4AiEA6vTi4s6yyTMcFoLkdQB6MalrBQNzKSbLl57MV17%2BkwAq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDEvxZbriPAGrWNqNMircA8T8TC26ozurDDaOZxmYr3PHIi8cYtc5WIV16gydAg6q276QYkEVOejcaSmiMivv4f%2FV9KuK1kBhRv%2BGft9f2YAsC87hbe%2BuKcGyhGRCxLF%2FxVX%2FAmIkZ%2BvmgoKWz1FllraXZ0jPpC%2Fp9kA0uhApXbqHGPnlE5A4r1Qui3Uo3uFwcm5%2FQTWDYWsOA5dnDQmtctDqhg0pP9E04mFzjZY86PGdXhO54olzCE8RIRUCTK1ynO9rXCNMu8xiTNuxCkPebrg8vhpF%2B9E%2BprHchGxLW%2FliYRfpW9GvK%2FONYBBZAw184xSHDOpSHzsqHt0seBe0wzqSwPPYHtulLHG2Iq64rMqshZddutlFF7zlXfmLrBR09DfJ9haJZBMHZ5aTq7KCKQxS12ScqwjuwDwep5R9aSGlV6bc6sw%2ByCR2%2B6RjqrkchLGG5RMQNy8qslHBic%2FGaBR7%2F6nq5RrqsmG7oQx%2F44ta%2FAkyVomeYpC3WH%2BwmCViHhBnR9HZvCc8rUYxa3ryanRx6yPVZSuv%2B7WqhoeZffQTqQLiji75Of1NDVDaYjaEnFGvQ4AZoAulcD%2FVqBiBdIGgUQGmXYDPNMxFmvd66yUp4E3JuAnc14xKFySKq1dOlziuA98etifC60pMMIOW4sMGOqUBYd55ovdcr6dxXPICBR9JIw83zimAwtFYdAgi4Z3ysOBwMZQ6TjQTjoBb%2F7kdDEuw1K7NYP65QxvpaSIH%2By0NYEo7vxj8Q9%2FgQy0g5HH1S4KKQZ0QjDtWgx90ueFpcGAm9RRWHAGzNE3VF%2FrufTTOzlpShK6CH2jdXWC7z0vlC84%2BwDsOk00cJUDZH6orYlbjlNPPb3YzMW9tJWiT50AakpQLlQMp&X-Amz-Signature=6d616459db9be5454ece697a68177c000c68816a3d7d2ac60006302136ab9227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2P24EB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBZSRrXrgOShqbAxaCYLDtmlVQ7WslDfPnPSyyCr0xv4AiEA6vTi4s6yyTMcFoLkdQB6MalrBQNzKSbLl57MV17%2BkwAq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDEvxZbriPAGrWNqNMircA8T8TC26ozurDDaOZxmYr3PHIi8cYtc5WIV16gydAg6q276QYkEVOejcaSmiMivv4f%2FV9KuK1kBhRv%2BGft9f2YAsC87hbe%2BuKcGyhGRCxLF%2FxVX%2FAmIkZ%2BvmgoKWz1FllraXZ0jPpC%2Fp9kA0uhApXbqHGPnlE5A4r1Qui3Uo3uFwcm5%2FQTWDYWsOA5dnDQmtctDqhg0pP9E04mFzjZY86PGdXhO54olzCE8RIRUCTK1ynO9rXCNMu8xiTNuxCkPebrg8vhpF%2B9E%2BprHchGxLW%2FliYRfpW9GvK%2FONYBBZAw184xSHDOpSHzsqHt0seBe0wzqSwPPYHtulLHG2Iq64rMqshZddutlFF7zlXfmLrBR09DfJ9haJZBMHZ5aTq7KCKQxS12ScqwjuwDwep5R9aSGlV6bc6sw%2ByCR2%2B6RjqrkchLGG5RMQNy8qslHBic%2FGaBR7%2F6nq5RrqsmG7oQx%2F44ta%2FAkyVomeYpC3WH%2BwmCViHhBnR9HZvCc8rUYxa3ryanRx6yPVZSuv%2B7WqhoeZffQTqQLiji75Of1NDVDaYjaEnFGvQ4AZoAulcD%2FVqBiBdIGgUQGmXYDPNMxFmvd66yUp4E3JuAnc14xKFySKq1dOlziuA98etifC60pMMIOW4sMGOqUBYd55ovdcr6dxXPICBR9JIw83zimAwtFYdAgi4Z3ysOBwMZQ6TjQTjoBb%2F7kdDEuw1K7NYP65QxvpaSIH%2By0NYEo7vxj8Q9%2FgQy0g5HH1S4KKQZ0QjDtWgx90ueFpcGAm9RRWHAGzNE3VF%2FrufTTOzlpShK6CH2jdXWC7z0vlC84%2BwDsOk00cJUDZH6orYlbjlNPPb3YzMW9tJWiT50AakpQLlQMp&X-Amz-Signature=59c0bed6b98f8169072b9655c7d071ec3cf3eba3ab9c407a93e392c118b43dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2P24EB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBZSRrXrgOShqbAxaCYLDtmlVQ7WslDfPnPSyyCr0xv4AiEA6vTi4s6yyTMcFoLkdQB6MalrBQNzKSbLl57MV17%2BkwAq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDEvxZbriPAGrWNqNMircA8T8TC26ozurDDaOZxmYr3PHIi8cYtc5WIV16gydAg6q276QYkEVOejcaSmiMivv4f%2FV9KuK1kBhRv%2BGft9f2YAsC87hbe%2BuKcGyhGRCxLF%2FxVX%2FAmIkZ%2BvmgoKWz1FllraXZ0jPpC%2Fp9kA0uhApXbqHGPnlE5A4r1Qui3Uo3uFwcm5%2FQTWDYWsOA5dnDQmtctDqhg0pP9E04mFzjZY86PGdXhO54olzCE8RIRUCTK1ynO9rXCNMu8xiTNuxCkPebrg8vhpF%2B9E%2BprHchGxLW%2FliYRfpW9GvK%2FONYBBZAw184xSHDOpSHzsqHt0seBe0wzqSwPPYHtulLHG2Iq64rMqshZddutlFF7zlXfmLrBR09DfJ9haJZBMHZ5aTq7KCKQxS12ScqwjuwDwep5R9aSGlV6bc6sw%2ByCR2%2B6RjqrkchLGG5RMQNy8qslHBic%2FGaBR7%2F6nq5RrqsmG7oQx%2F44ta%2FAkyVomeYpC3WH%2BwmCViHhBnR9HZvCc8rUYxa3ryanRx6yPVZSuv%2B7WqhoeZffQTqQLiji75Of1NDVDaYjaEnFGvQ4AZoAulcD%2FVqBiBdIGgUQGmXYDPNMxFmvd66yUp4E3JuAnc14xKFySKq1dOlziuA98etifC60pMMIOW4sMGOqUBYd55ovdcr6dxXPICBR9JIw83zimAwtFYdAgi4Z3ysOBwMZQ6TjQTjoBb%2F7kdDEuw1K7NYP65QxvpaSIH%2By0NYEo7vxj8Q9%2FgQy0g5HH1S4KKQZ0QjDtWgx90ueFpcGAm9RRWHAGzNE3VF%2FrufTTOzlpShK6CH2jdXWC7z0vlC84%2BwDsOk00cJUDZH6orYlbjlNPPb3YzMW9tJWiT50AakpQLlQMp&X-Amz-Signature=ae81b0bce5faf0f1f219b1e58dbb5046fd1c3196cd5f6821f5e58139e8c05101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2P24EB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBZSRrXrgOShqbAxaCYLDtmlVQ7WslDfPnPSyyCr0xv4AiEA6vTi4s6yyTMcFoLkdQB6MalrBQNzKSbLl57MV17%2BkwAq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDEvxZbriPAGrWNqNMircA8T8TC26ozurDDaOZxmYr3PHIi8cYtc5WIV16gydAg6q276QYkEVOejcaSmiMivv4f%2FV9KuK1kBhRv%2BGft9f2YAsC87hbe%2BuKcGyhGRCxLF%2FxVX%2FAmIkZ%2BvmgoKWz1FllraXZ0jPpC%2Fp9kA0uhApXbqHGPnlE5A4r1Qui3Uo3uFwcm5%2FQTWDYWsOA5dnDQmtctDqhg0pP9E04mFzjZY86PGdXhO54olzCE8RIRUCTK1ynO9rXCNMu8xiTNuxCkPebrg8vhpF%2B9E%2BprHchGxLW%2FliYRfpW9GvK%2FONYBBZAw184xSHDOpSHzsqHt0seBe0wzqSwPPYHtulLHG2Iq64rMqshZddutlFF7zlXfmLrBR09DfJ9haJZBMHZ5aTq7KCKQxS12ScqwjuwDwep5R9aSGlV6bc6sw%2ByCR2%2B6RjqrkchLGG5RMQNy8qslHBic%2FGaBR7%2F6nq5RrqsmG7oQx%2F44ta%2FAkyVomeYpC3WH%2BwmCViHhBnR9HZvCc8rUYxa3ryanRx6yPVZSuv%2B7WqhoeZffQTqQLiji75Of1NDVDaYjaEnFGvQ4AZoAulcD%2FVqBiBdIGgUQGmXYDPNMxFmvd66yUp4E3JuAnc14xKFySKq1dOlziuA98etifC60pMMIOW4sMGOqUBYd55ovdcr6dxXPICBR9JIw83zimAwtFYdAgi4Z3ysOBwMZQ6TjQTjoBb%2F7kdDEuw1K7NYP65QxvpaSIH%2By0NYEo7vxj8Q9%2FgQy0g5HH1S4KKQZ0QjDtWgx90ueFpcGAm9RRWHAGzNE3VF%2FrufTTOzlpShK6CH2jdXWC7z0vlC84%2BwDsOk00cJUDZH6orYlbjlNPPb3YzMW9tJWiT50AakpQLlQMp&X-Amz-Signature=d3ef951b5099977037ab84d66e5b0dc83d016fb789e7b36b4c9da75ca8940ccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2P24EB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBZSRrXrgOShqbAxaCYLDtmlVQ7WslDfPnPSyyCr0xv4AiEA6vTi4s6yyTMcFoLkdQB6MalrBQNzKSbLl57MV17%2BkwAq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDEvxZbriPAGrWNqNMircA8T8TC26ozurDDaOZxmYr3PHIi8cYtc5WIV16gydAg6q276QYkEVOejcaSmiMivv4f%2FV9KuK1kBhRv%2BGft9f2YAsC87hbe%2BuKcGyhGRCxLF%2FxVX%2FAmIkZ%2BvmgoKWz1FllraXZ0jPpC%2Fp9kA0uhApXbqHGPnlE5A4r1Qui3Uo3uFwcm5%2FQTWDYWsOA5dnDQmtctDqhg0pP9E04mFzjZY86PGdXhO54olzCE8RIRUCTK1ynO9rXCNMu8xiTNuxCkPebrg8vhpF%2B9E%2BprHchGxLW%2FliYRfpW9GvK%2FONYBBZAw184xSHDOpSHzsqHt0seBe0wzqSwPPYHtulLHG2Iq64rMqshZddutlFF7zlXfmLrBR09DfJ9haJZBMHZ5aTq7KCKQxS12ScqwjuwDwep5R9aSGlV6bc6sw%2ByCR2%2B6RjqrkchLGG5RMQNy8qslHBic%2FGaBR7%2F6nq5RrqsmG7oQx%2F44ta%2FAkyVomeYpC3WH%2BwmCViHhBnR9HZvCc8rUYxa3ryanRx6yPVZSuv%2B7WqhoeZffQTqQLiji75Of1NDVDaYjaEnFGvQ4AZoAulcD%2FVqBiBdIGgUQGmXYDPNMxFmvd66yUp4E3JuAnc14xKFySKq1dOlziuA98etifC60pMMIOW4sMGOqUBYd55ovdcr6dxXPICBR9JIw83zimAwtFYdAgi4Z3ysOBwMZQ6TjQTjoBb%2F7kdDEuw1K7NYP65QxvpaSIH%2By0NYEo7vxj8Q9%2FgQy0g5HH1S4KKQZ0QjDtWgx90ueFpcGAm9RRWHAGzNE3VF%2FrufTTOzlpShK6CH2jdXWC7z0vlC84%2BwDsOk00cJUDZH6orYlbjlNPPb3YzMW9tJWiT50AakpQLlQMp&X-Amz-Signature=96cecf36062dcf266d519190d8ce9f93ff7af1671e0a1fb7522a89ef44540d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
