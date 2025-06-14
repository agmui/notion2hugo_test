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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RGN6P3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICZC7Nq5OAAcjIe72vvhzVrl3MudgnUWcorbhLnsMy95AiAOOcjgnPCRfkRLrGaLyBDGjFiyXFQuiEaD8NpLlnKJdir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMK90bqJ1E002WJcBVKtwDi5g3MXJVjEQnVdpYyEHe4%2BQEL%2B4KPLoxYyJ31Jsx5Q%2FCExcUXEt95QmnhN81oLsRJZn5CV%2FCd%2B%2FcG1IXiS%2BrUijao0l6xB4mywT1r3ZfVpx1izjL7m4Ya0TDg5z4lX531SgJ1J6JGERbAF4fUJf0732XFuRlcMErLfa1ddZhLbIvOlF6AFsB%2B6q8qPSREFGTWLYM35gXsZJ3wQsF0u6CGYINmVlDXSzTncq0Mlc4ylv%2F3bwooMDnmtnJcGI6y4uEdEYiPbDgehbhtLVEWpWmU3K7K%2FuKWxNo%2FEVbIWTfoIiGsKtE7kyjtKPv2oJOAB%2FnVlazCy3wd93bBb5gik2gu5nozT6bMBd4qbd%2B5Fr5Xsk%2F9I0PxuzfiR3vL63NA29fC%2BPECo0gbOiCecwlqjqdaTZMvXkBVXfZ8YEDoSw9XPaS4Tn5%2BPnMcSzyIbm8aIz7yUmp9SgsB9p78V%2FzzOklW0POVKzmSSqASVGzHx%2FySw9zBM6XqWX8INxOnAeCte21kIh2y5cPzl2G6letDkmR%2FRqVben2cv25SU9%2Fqt871x0ycJoq1VxBug0fv1muBXjzw8QrNCGGlWBK2n%2BLjI1Y7Ryqb%2BvPcqOL82B1DLI5eLP9zzWUmxd8H3mt9Aowz7y0wgY6pgE3AgkG9kbjQxxfFrl4khVfLqLaw2d7Bw1ujwMqUnUTmz%2FsM%2BVCzGATWQDrI4NfY4i3o1qfMzWzzkm8FwAAp%2B9mm5SOcLG0jDBCyL%2FEztKTKX%2B6BaLYQdWBYaIaEuyt2yws%2FSxkLolycsFOq0c%2BxMSoQQVK5osKJjIqpMmvJPxWbERaQhH7sS0V%2FzZFuhR7tmRVw0d%2FAzMJ%2FGdwrSd%2F5Of0dwyYjqSH&X-Amz-Signature=c8bcbfd38091b7d1080d2a83ce60a27f363f62860447f031f1ba392668f8ea5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RGN6P3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICZC7Nq5OAAcjIe72vvhzVrl3MudgnUWcorbhLnsMy95AiAOOcjgnPCRfkRLrGaLyBDGjFiyXFQuiEaD8NpLlnKJdir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMK90bqJ1E002WJcBVKtwDi5g3MXJVjEQnVdpYyEHe4%2BQEL%2B4KPLoxYyJ31Jsx5Q%2FCExcUXEt95QmnhN81oLsRJZn5CV%2FCd%2B%2FcG1IXiS%2BrUijao0l6xB4mywT1r3ZfVpx1izjL7m4Ya0TDg5z4lX531SgJ1J6JGERbAF4fUJf0732XFuRlcMErLfa1ddZhLbIvOlF6AFsB%2B6q8qPSREFGTWLYM35gXsZJ3wQsF0u6CGYINmVlDXSzTncq0Mlc4ylv%2F3bwooMDnmtnJcGI6y4uEdEYiPbDgehbhtLVEWpWmU3K7K%2FuKWxNo%2FEVbIWTfoIiGsKtE7kyjtKPv2oJOAB%2FnVlazCy3wd93bBb5gik2gu5nozT6bMBd4qbd%2B5Fr5Xsk%2F9I0PxuzfiR3vL63NA29fC%2BPECo0gbOiCecwlqjqdaTZMvXkBVXfZ8YEDoSw9XPaS4Tn5%2BPnMcSzyIbm8aIz7yUmp9SgsB9p78V%2FzzOklW0POVKzmSSqASVGzHx%2FySw9zBM6XqWX8INxOnAeCte21kIh2y5cPzl2G6letDkmR%2FRqVben2cv25SU9%2Fqt871x0ycJoq1VxBug0fv1muBXjzw8QrNCGGlWBK2n%2BLjI1Y7Ryqb%2BvPcqOL82B1DLI5eLP9zzWUmxd8H3mt9Aowz7y0wgY6pgE3AgkG9kbjQxxfFrl4khVfLqLaw2d7Bw1ujwMqUnUTmz%2FsM%2BVCzGATWQDrI4NfY4i3o1qfMzWzzkm8FwAAp%2B9mm5SOcLG0jDBCyL%2FEztKTKX%2B6BaLYQdWBYaIaEuyt2yws%2FSxkLolycsFOq0c%2BxMSoQQVK5osKJjIqpMmvJPxWbERaQhH7sS0V%2FzZFuhR7tmRVw0d%2FAzMJ%2FGdwrSd%2F5Of0dwyYjqSH&X-Amz-Signature=3607123e7e4012799556b0f1a349b424f744fc262999b49029b247a1c1b6bb6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RGN6P3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICZC7Nq5OAAcjIe72vvhzVrl3MudgnUWcorbhLnsMy95AiAOOcjgnPCRfkRLrGaLyBDGjFiyXFQuiEaD8NpLlnKJdir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMK90bqJ1E002WJcBVKtwDi5g3MXJVjEQnVdpYyEHe4%2BQEL%2B4KPLoxYyJ31Jsx5Q%2FCExcUXEt95QmnhN81oLsRJZn5CV%2FCd%2B%2FcG1IXiS%2BrUijao0l6xB4mywT1r3ZfVpx1izjL7m4Ya0TDg5z4lX531SgJ1J6JGERbAF4fUJf0732XFuRlcMErLfa1ddZhLbIvOlF6AFsB%2B6q8qPSREFGTWLYM35gXsZJ3wQsF0u6CGYINmVlDXSzTncq0Mlc4ylv%2F3bwooMDnmtnJcGI6y4uEdEYiPbDgehbhtLVEWpWmU3K7K%2FuKWxNo%2FEVbIWTfoIiGsKtE7kyjtKPv2oJOAB%2FnVlazCy3wd93bBb5gik2gu5nozT6bMBd4qbd%2B5Fr5Xsk%2F9I0PxuzfiR3vL63NA29fC%2BPECo0gbOiCecwlqjqdaTZMvXkBVXfZ8YEDoSw9XPaS4Tn5%2BPnMcSzyIbm8aIz7yUmp9SgsB9p78V%2FzzOklW0POVKzmSSqASVGzHx%2FySw9zBM6XqWX8INxOnAeCte21kIh2y5cPzl2G6letDkmR%2FRqVben2cv25SU9%2Fqt871x0ycJoq1VxBug0fv1muBXjzw8QrNCGGlWBK2n%2BLjI1Y7Ryqb%2BvPcqOL82B1DLI5eLP9zzWUmxd8H3mt9Aowz7y0wgY6pgE3AgkG9kbjQxxfFrl4khVfLqLaw2d7Bw1ujwMqUnUTmz%2FsM%2BVCzGATWQDrI4NfY4i3o1qfMzWzzkm8FwAAp%2B9mm5SOcLG0jDBCyL%2FEztKTKX%2B6BaLYQdWBYaIaEuyt2yws%2FSxkLolycsFOq0c%2BxMSoQQVK5osKJjIqpMmvJPxWbERaQhH7sS0V%2FzZFuhR7tmRVw0d%2FAzMJ%2FGdwrSd%2F5Of0dwyYjqSH&X-Amz-Signature=5caf74a02249b236d3f7ef6893c68ea9b2ec3fe0ab545ebd901c16f002c6751d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RGN6P3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICZC7Nq5OAAcjIe72vvhzVrl3MudgnUWcorbhLnsMy95AiAOOcjgnPCRfkRLrGaLyBDGjFiyXFQuiEaD8NpLlnKJdir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMK90bqJ1E002WJcBVKtwDi5g3MXJVjEQnVdpYyEHe4%2BQEL%2B4KPLoxYyJ31Jsx5Q%2FCExcUXEt95QmnhN81oLsRJZn5CV%2FCd%2B%2FcG1IXiS%2BrUijao0l6xB4mywT1r3ZfVpx1izjL7m4Ya0TDg5z4lX531SgJ1J6JGERbAF4fUJf0732XFuRlcMErLfa1ddZhLbIvOlF6AFsB%2B6q8qPSREFGTWLYM35gXsZJ3wQsF0u6CGYINmVlDXSzTncq0Mlc4ylv%2F3bwooMDnmtnJcGI6y4uEdEYiPbDgehbhtLVEWpWmU3K7K%2FuKWxNo%2FEVbIWTfoIiGsKtE7kyjtKPv2oJOAB%2FnVlazCy3wd93bBb5gik2gu5nozT6bMBd4qbd%2B5Fr5Xsk%2F9I0PxuzfiR3vL63NA29fC%2BPECo0gbOiCecwlqjqdaTZMvXkBVXfZ8YEDoSw9XPaS4Tn5%2BPnMcSzyIbm8aIz7yUmp9SgsB9p78V%2FzzOklW0POVKzmSSqASVGzHx%2FySw9zBM6XqWX8INxOnAeCte21kIh2y5cPzl2G6letDkmR%2FRqVben2cv25SU9%2Fqt871x0ycJoq1VxBug0fv1muBXjzw8QrNCGGlWBK2n%2BLjI1Y7Ryqb%2BvPcqOL82B1DLI5eLP9zzWUmxd8H3mt9Aowz7y0wgY6pgE3AgkG9kbjQxxfFrl4khVfLqLaw2d7Bw1ujwMqUnUTmz%2FsM%2BVCzGATWQDrI4NfY4i3o1qfMzWzzkm8FwAAp%2B9mm5SOcLG0jDBCyL%2FEztKTKX%2B6BaLYQdWBYaIaEuyt2yws%2FSxkLolycsFOq0c%2BxMSoQQVK5osKJjIqpMmvJPxWbERaQhH7sS0V%2FzZFuhR7tmRVw0d%2FAzMJ%2FGdwrSd%2F5Of0dwyYjqSH&X-Amz-Signature=ffd5840733d0299223076573de65d7fae68e9d283394c126380d7ef7f602ec36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RGN6P3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICZC7Nq5OAAcjIe72vvhzVrl3MudgnUWcorbhLnsMy95AiAOOcjgnPCRfkRLrGaLyBDGjFiyXFQuiEaD8NpLlnKJdir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMK90bqJ1E002WJcBVKtwDi5g3MXJVjEQnVdpYyEHe4%2BQEL%2B4KPLoxYyJ31Jsx5Q%2FCExcUXEt95QmnhN81oLsRJZn5CV%2FCd%2B%2FcG1IXiS%2BrUijao0l6xB4mywT1r3ZfVpx1izjL7m4Ya0TDg5z4lX531SgJ1J6JGERbAF4fUJf0732XFuRlcMErLfa1ddZhLbIvOlF6AFsB%2B6q8qPSREFGTWLYM35gXsZJ3wQsF0u6CGYINmVlDXSzTncq0Mlc4ylv%2F3bwooMDnmtnJcGI6y4uEdEYiPbDgehbhtLVEWpWmU3K7K%2FuKWxNo%2FEVbIWTfoIiGsKtE7kyjtKPv2oJOAB%2FnVlazCy3wd93bBb5gik2gu5nozT6bMBd4qbd%2B5Fr5Xsk%2F9I0PxuzfiR3vL63NA29fC%2BPECo0gbOiCecwlqjqdaTZMvXkBVXfZ8YEDoSw9XPaS4Tn5%2BPnMcSzyIbm8aIz7yUmp9SgsB9p78V%2FzzOklW0POVKzmSSqASVGzHx%2FySw9zBM6XqWX8INxOnAeCte21kIh2y5cPzl2G6letDkmR%2FRqVben2cv25SU9%2Fqt871x0ycJoq1VxBug0fv1muBXjzw8QrNCGGlWBK2n%2BLjI1Y7Ryqb%2BvPcqOL82B1DLI5eLP9zzWUmxd8H3mt9Aowz7y0wgY6pgE3AgkG9kbjQxxfFrl4khVfLqLaw2d7Bw1ujwMqUnUTmz%2FsM%2BVCzGATWQDrI4NfY4i3o1qfMzWzzkm8FwAAp%2B9mm5SOcLG0jDBCyL%2FEztKTKX%2B6BaLYQdWBYaIaEuyt2yws%2FSxkLolycsFOq0c%2BxMSoQQVK5osKJjIqpMmvJPxWbERaQhH7sS0V%2FzZFuhR7tmRVw0d%2FAzMJ%2FGdwrSd%2F5Of0dwyYjqSH&X-Amz-Signature=325c1e63f20b8662f7c9f5d8476f8e67d993a08f7b02461ed9f748d38515df99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RGN6P3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICZC7Nq5OAAcjIe72vvhzVrl3MudgnUWcorbhLnsMy95AiAOOcjgnPCRfkRLrGaLyBDGjFiyXFQuiEaD8NpLlnKJdir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMK90bqJ1E002WJcBVKtwDi5g3MXJVjEQnVdpYyEHe4%2BQEL%2B4KPLoxYyJ31Jsx5Q%2FCExcUXEt95QmnhN81oLsRJZn5CV%2FCd%2B%2FcG1IXiS%2BrUijao0l6xB4mywT1r3ZfVpx1izjL7m4Ya0TDg5z4lX531SgJ1J6JGERbAF4fUJf0732XFuRlcMErLfa1ddZhLbIvOlF6AFsB%2B6q8qPSREFGTWLYM35gXsZJ3wQsF0u6CGYINmVlDXSzTncq0Mlc4ylv%2F3bwooMDnmtnJcGI6y4uEdEYiPbDgehbhtLVEWpWmU3K7K%2FuKWxNo%2FEVbIWTfoIiGsKtE7kyjtKPv2oJOAB%2FnVlazCy3wd93bBb5gik2gu5nozT6bMBd4qbd%2B5Fr5Xsk%2F9I0PxuzfiR3vL63NA29fC%2BPECo0gbOiCecwlqjqdaTZMvXkBVXfZ8YEDoSw9XPaS4Tn5%2BPnMcSzyIbm8aIz7yUmp9SgsB9p78V%2FzzOklW0POVKzmSSqASVGzHx%2FySw9zBM6XqWX8INxOnAeCte21kIh2y5cPzl2G6letDkmR%2FRqVben2cv25SU9%2Fqt871x0ycJoq1VxBug0fv1muBXjzw8QrNCGGlWBK2n%2BLjI1Y7Ryqb%2BvPcqOL82B1DLI5eLP9zzWUmxd8H3mt9Aowz7y0wgY6pgE3AgkG9kbjQxxfFrl4khVfLqLaw2d7Bw1ujwMqUnUTmz%2FsM%2BVCzGATWQDrI4NfY4i3o1qfMzWzzkm8FwAAp%2B9mm5SOcLG0jDBCyL%2FEztKTKX%2B6BaLYQdWBYaIaEuyt2yws%2FSxkLolycsFOq0c%2BxMSoQQVK5osKJjIqpMmvJPxWbERaQhH7sS0V%2FzZFuhR7tmRVw0d%2FAzMJ%2FGdwrSd%2F5Of0dwyYjqSH&X-Amz-Signature=d89fb6fa7d7d76a67bffa1e8dca4ee5d6204d7cc808d8b7c9b3647c2e5992bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RGN6P3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICZC7Nq5OAAcjIe72vvhzVrl3MudgnUWcorbhLnsMy95AiAOOcjgnPCRfkRLrGaLyBDGjFiyXFQuiEaD8NpLlnKJdir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMK90bqJ1E002WJcBVKtwDi5g3MXJVjEQnVdpYyEHe4%2BQEL%2B4KPLoxYyJ31Jsx5Q%2FCExcUXEt95QmnhN81oLsRJZn5CV%2FCd%2B%2FcG1IXiS%2BrUijao0l6xB4mywT1r3ZfVpx1izjL7m4Ya0TDg5z4lX531SgJ1J6JGERbAF4fUJf0732XFuRlcMErLfa1ddZhLbIvOlF6AFsB%2B6q8qPSREFGTWLYM35gXsZJ3wQsF0u6CGYINmVlDXSzTncq0Mlc4ylv%2F3bwooMDnmtnJcGI6y4uEdEYiPbDgehbhtLVEWpWmU3K7K%2FuKWxNo%2FEVbIWTfoIiGsKtE7kyjtKPv2oJOAB%2FnVlazCy3wd93bBb5gik2gu5nozT6bMBd4qbd%2B5Fr5Xsk%2F9I0PxuzfiR3vL63NA29fC%2BPECo0gbOiCecwlqjqdaTZMvXkBVXfZ8YEDoSw9XPaS4Tn5%2BPnMcSzyIbm8aIz7yUmp9SgsB9p78V%2FzzOklW0POVKzmSSqASVGzHx%2FySw9zBM6XqWX8INxOnAeCte21kIh2y5cPzl2G6letDkmR%2FRqVben2cv25SU9%2Fqt871x0ycJoq1VxBug0fv1muBXjzw8QrNCGGlWBK2n%2BLjI1Y7Ryqb%2BvPcqOL82B1DLI5eLP9zzWUmxd8H3mt9Aowz7y0wgY6pgE3AgkG9kbjQxxfFrl4khVfLqLaw2d7Bw1ujwMqUnUTmz%2FsM%2BVCzGATWQDrI4NfY4i3o1qfMzWzzkm8FwAAp%2B9mm5SOcLG0jDBCyL%2FEztKTKX%2B6BaLYQdWBYaIaEuyt2yws%2FSxkLolycsFOq0c%2BxMSoQQVK5osKJjIqpMmvJPxWbERaQhH7sS0V%2FzZFuhR7tmRVw0d%2FAzMJ%2FGdwrSd%2F5Of0dwyYjqSH&X-Amz-Signature=41d62dd41686d2d9ab70318cfce98711215b9e2b02d13f93e66ba60c3678f551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RGN6P3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICZC7Nq5OAAcjIe72vvhzVrl3MudgnUWcorbhLnsMy95AiAOOcjgnPCRfkRLrGaLyBDGjFiyXFQuiEaD8NpLlnKJdir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMK90bqJ1E002WJcBVKtwDi5g3MXJVjEQnVdpYyEHe4%2BQEL%2B4KPLoxYyJ31Jsx5Q%2FCExcUXEt95QmnhN81oLsRJZn5CV%2FCd%2B%2FcG1IXiS%2BrUijao0l6xB4mywT1r3ZfVpx1izjL7m4Ya0TDg5z4lX531SgJ1J6JGERbAF4fUJf0732XFuRlcMErLfa1ddZhLbIvOlF6AFsB%2B6q8qPSREFGTWLYM35gXsZJ3wQsF0u6CGYINmVlDXSzTncq0Mlc4ylv%2F3bwooMDnmtnJcGI6y4uEdEYiPbDgehbhtLVEWpWmU3K7K%2FuKWxNo%2FEVbIWTfoIiGsKtE7kyjtKPv2oJOAB%2FnVlazCy3wd93bBb5gik2gu5nozT6bMBd4qbd%2B5Fr5Xsk%2F9I0PxuzfiR3vL63NA29fC%2BPECo0gbOiCecwlqjqdaTZMvXkBVXfZ8YEDoSw9XPaS4Tn5%2BPnMcSzyIbm8aIz7yUmp9SgsB9p78V%2FzzOklW0POVKzmSSqASVGzHx%2FySw9zBM6XqWX8INxOnAeCte21kIh2y5cPzl2G6letDkmR%2FRqVben2cv25SU9%2Fqt871x0ycJoq1VxBug0fv1muBXjzw8QrNCGGlWBK2n%2BLjI1Y7Ryqb%2BvPcqOL82B1DLI5eLP9zzWUmxd8H3mt9Aowz7y0wgY6pgE3AgkG9kbjQxxfFrl4khVfLqLaw2d7Bw1ujwMqUnUTmz%2FsM%2BVCzGATWQDrI4NfY4i3o1qfMzWzzkm8FwAAp%2B9mm5SOcLG0jDBCyL%2FEztKTKX%2B6BaLYQdWBYaIaEuyt2yws%2FSxkLolycsFOq0c%2BxMSoQQVK5osKJjIqpMmvJPxWbERaQhH7sS0V%2FzZFuhR7tmRVw0d%2FAzMJ%2FGdwrSd%2F5Of0dwyYjqSH&X-Amz-Signature=ae93f27d085b3bab4b654af6ec4703fb204f6e45d3db77c96b9b715d0596c76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
