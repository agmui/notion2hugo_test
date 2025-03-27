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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYW5VSUZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgnP8a25VY4HkNiNKs1VXTJ7q%2B0HS2NQKRbjvZCFj45wIgVF%2FuRd19YdMw%2BfCeG6qtHTHgNyXPAy88UgN6ADyCD2Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEtH7yPVfDVLPIyT%2BCrcAzUVpeTKMzqwXE62fr1e0yyXDHqsFtZrGi0v2bNeBR4ZDHgqA4d%2BpAbTYHkEErVFilPzGA1P%2BuF3h2E5j1ObCv67Abudkx18dWuDPVExCqxx3gheLJTSAtxN4kNCYLHUCaPTiRh2CAVBmOY%2FyK%2Btt5kQ6WsrhJq%2FGFW3teWYtgf8%2FU8LGtSJHTgBjh4EnFp7Pd9HuqLK%2B1E6WAe7BfdBRVh62iirOZ%2F%2F%2FJudxAKx%2BysR9MZtm9QtmImUD2MfKjfneKyU7R8vYGIR%2BiJAEXqkNGHWXvlgZ94ORrH1ZdWJrZDswPar6E4bWtaPQ3qfa%2FSiysYiirg3Y6px0f7NaD5uIMYAzWsPazHPJxYOFe9NEfOPCtroWQ9EFaHAfsnoALwSSfCAjqlNnkQHshVYgk%2FvhNIaTYwggDefCzizWOeXsmwR2c9gwffCsmIFTnkNOEMsPvEkNEgnlt4EUl40GCC3qCD4jRsfKoTGZAu3c%2B5OMP5vparU4QmL02ykRr3fjECxseYp5jX3Gh%2FmGaIwGXS0rf%2F%2B4ibySNDZaaWJRvkAhWoASsYBEke9ODeDXoa7EBcDsMC4niM8me5l1lUyVeh%2FwMH3uUM13tvhhVeC7aCx2asO4DOUcKxvinz3bEq9MM3clr8GOqUBcIffv8RNeklj9TOT0%2BrTO37ZY7NGwMnK3sJM04a30KA%2FbAxs0eqhUJugUzQcXMMZ9%2BRfUSvoc7njw1k5iQQ%2BEz%2FOF2f1l5AZLZ2BkloEQ7mzm2Mc7mgFF6dnegIbTHSF3IUggJp1lNBpvZ3tdasVO%2F0NaHaCy4H%2BSqMOjK0toN3YVPCcYYyQR77dI4tRZvKIGVA4lROa5yi%2BOqn2HJ3HmZ4%2FBMr9&X-Amz-Signature=69b5e9dd87c2dce7b61de414aeacfe8921ee1ec10b7a99d0bb07e652e659a69f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYW5VSUZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgnP8a25VY4HkNiNKs1VXTJ7q%2B0HS2NQKRbjvZCFj45wIgVF%2FuRd19YdMw%2BfCeG6qtHTHgNyXPAy88UgN6ADyCD2Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEtH7yPVfDVLPIyT%2BCrcAzUVpeTKMzqwXE62fr1e0yyXDHqsFtZrGi0v2bNeBR4ZDHgqA4d%2BpAbTYHkEErVFilPzGA1P%2BuF3h2E5j1ObCv67Abudkx18dWuDPVExCqxx3gheLJTSAtxN4kNCYLHUCaPTiRh2CAVBmOY%2FyK%2Btt5kQ6WsrhJq%2FGFW3teWYtgf8%2FU8LGtSJHTgBjh4EnFp7Pd9HuqLK%2B1E6WAe7BfdBRVh62iirOZ%2F%2F%2FJudxAKx%2BysR9MZtm9QtmImUD2MfKjfneKyU7R8vYGIR%2BiJAEXqkNGHWXvlgZ94ORrH1ZdWJrZDswPar6E4bWtaPQ3qfa%2FSiysYiirg3Y6px0f7NaD5uIMYAzWsPazHPJxYOFe9NEfOPCtroWQ9EFaHAfsnoALwSSfCAjqlNnkQHshVYgk%2FvhNIaTYwggDefCzizWOeXsmwR2c9gwffCsmIFTnkNOEMsPvEkNEgnlt4EUl40GCC3qCD4jRsfKoTGZAu3c%2B5OMP5vparU4QmL02ykRr3fjECxseYp5jX3Gh%2FmGaIwGXS0rf%2F%2B4ibySNDZaaWJRvkAhWoASsYBEke9ODeDXoa7EBcDsMC4niM8me5l1lUyVeh%2FwMH3uUM13tvhhVeC7aCx2asO4DOUcKxvinz3bEq9MM3clr8GOqUBcIffv8RNeklj9TOT0%2BrTO37ZY7NGwMnK3sJM04a30KA%2FbAxs0eqhUJugUzQcXMMZ9%2BRfUSvoc7njw1k5iQQ%2BEz%2FOF2f1l5AZLZ2BkloEQ7mzm2Mc7mgFF6dnegIbTHSF3IUggJp1lNBpvZ3tdasVO%2F0NaHaCy4H%2BSqMOjK0toN3YVPCcYYyQR77dI4tRZvKIGVA4lROa5yi%2BOqn2HJ3HmZ4%2FBMr9&X-Amz-Signature=3f87258e6a4325d6eedc58b1128a028fae661752bcfd454f5ab03c0ae003303b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYW5VSUZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgnP8a25VY4HkNiNKs1VXTJ7q%2B0HS2NQKRbjvZCFj45wIgVF%2FuRd19YdMw%2BfCeG6qtHTHgNyXPAy88UgN6ADyCD2Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEtH7yPVfDVLPIyT%2BCrcAzUVpeTKMzqwXE62fr1e0yyXDHqsFtZrGi0v2bNeBR4ZDHgqA4d%2BpAbTYHkEErVFilPzGA1P%2BuF3h2E5j1ObCv67Abudkx18dWuDPVExCqxx3gheLJTSAtxN4kNCYLHUCaPTiRh2CAVBmOY%2FyK%2Btt5kQ6WsrhJq%2FGFW3teWYtgf8%2FU8LGtSJHTgBjh4EnFp7Pd9HuqLK%2B1E6WAe7BfdBRVh62iirOZ%2F%2F%2FJudxAKx%2BysR9MZtm9QtmImUD2MfKjfneKyU7R8vYGIR%2BiJAEXqkNGHWXvlgZ94ORrH1ZdWJrZDswPar6E4bWtaPQ3qfa%2FSiysYiirg3Y6px0f7NaD5uIMYAzWsPazHPJxYOFe9NEfOPCtroWQ9EFaHAfsnoALwSSfCAjqlNnkQHshVYgk%2FvhNIaTYwggDefCzizWOeXsmwR2c9gwffCsmIFTnkNOEMsPvEkNEgnlt4EUl40GCC3qCD4jRsfKoTGZAu3c%2B5OMP5vparU4QmL02ykRr3fjECxseYp5jX3Gh%2FmGaIwGXS0rf%2F%2B4ibySNDZaaWJRvkAhWoASsYBEke9ODeDXoa7EBcDsMC4niM8me5l1lUyVeh%2FwMH3uUM13tvhhVeC7aCx2asO4DOUcKxvinz3bEq9MM3clr8GOqUBcIffv8RNeklj9TOT0%2BrTO37ZY7NGwMnK3sJM04a30KA%2FbAxs0eqhUJugUzQcXMMZ9%2BRfUSvoc7njw1k5iQQ%2BEz%2FOF2f1l5AZLZ2BkloEQ7mzm2Mc7mgFF6dnegIbTHSF3IUggJp1lNBpvZ3tdasVO%2F0NaHaCy4H%2BSqMOjK0toN3YVPCcYYyQR77dI4tRZvKIGVA4lROa5yi%2BOqn2HJ3HmZ4%2FBMr9&X-Amz-Signature=e6cc153392e6746321f61004058d95445ef447a03ce144233c62f1f803db0cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYW5VSUZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgnP8a25VY4HkNiNKs1VXTJ7q%2B0HS2NQKRbjvZCFj45wIgVF%2FuRd19YdMw%2BfCeG6qtHTHgNyXPAy88UgN6ADyCD2Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEtH7yPVfDVLPIyT%2BCrcAzUVpeTKMzqwXE62fr1e0yyXDHqsFtZrGi0v2bNeBR4ZDHgqA4d%2BpAbTYHkEErVFilPzGA1P%2BuF3h2E5j1ObCv67Abudkx18dWuDPVExCqxx3gheLJTSAtxN4kNCYLHUCaPTiRh2CAVBmOY%2FyK%2Btt5kQ6WsrhJq%2FGFW3teWYtgf8%2FU8LGtSJHTgBjh4EnFp7Pd9HuqLK%2B1E6WAe7BfdBRVh62iirOZ%2F%2F%2FJudxAKx%2BysR9MZtm9QtmImUD2MfKjfneKyU7R8vYGIR%2BiJAEXqkNGHWXvlgZ94ORrH1ZdWJrZDswPar6E4bWtaPQ3qfa%2FSiysYiirg3Y6px0f7NaD5uIMYAzWsPazHPJxYOFe9NEfOPCtroWQ9EFaHAfsnoALwSSfCAjqlNnkQHshVYgk%2FvhNIaTYwggDefCzizWOeXsmwR2c9gwffCsmIFTnkNOEMsPvEkNEgnlt4EUl40GCC3qCD4jRsfKoTGZAu3c%2B5OMP5vparU4QmL02ykRr3fjECxseYp5jX3Gh%2FmGaIwGXS0rf%2F%2B4ibySNDZaaWJRvkAhWoASsYBEke9ODeDXoa7EBcDsMC4niM8me5l1lUyVeh%2FwMH3uUM13tvhhVeC7aCx2asO4DOUcKxvinz3bEq9MM3clr8GOqUBcIffv8RNeklj9TOT0%2BrTO37ZY7NGwMnK3sJM04a30KA%2FbAxs0eqhUJugUzQcXMMZ9%2BRfUSvoc7njw1k5iQQ%2BEz%2FOF2f1l5AZLZ2BkloEQ7mzm2Mc7mgFF6dnegIbTHSF3IUggJp1lNBpvZ3tdasVO%2F0NaHaCy4H%2BSqMOjK0toN3YVPCcYYyQR77dI4tRZvKIGVA4lROa5yi%2BOqn2HJ3HmZ4%2FBMr9&X-Amz-Signature=3a798c9b1051bb1c4a2e3c7a2a270799531f5f44a43bf75bcc6934c77b3c310e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYW5VSUZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgnP8a25VY4HkNiNKs1VXTJ7q%2B0HS2NQKRbjvZCFj45wIgVF%2FuRd19YdMw%2BfCeG6qtHTHgNyXPAy88UgN6ADyCD2Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEtH7yPVfDVLPIyT%2BCrcAzUVpeTKMzqwXE62fr1e0yyXDHqsFtZrGi0v2bNeBR4ZDHgqA4d%2BpAbTYHkEErVFilPzGA1P%2BuF3h2E5j1ObCv67Abudkx18dWuDPVExCqxx3gheLJTSAtxN4kNCYLHUCaPTiRh2CAVBmOY%2FyK%2Btt5kQ6WsrhJq%2FGFW3teWYtgf8%2FU8LGtSJHTgBjh4EnFp7Pd9HuqLK%2B1E6WAe7BfdBRVh62iirOZ%2F%2F%2FJudxAKx%2BysR9MZtm9QtmImUD2MfKjfneKyU7R8vYGIR%2BiJAEXqkNGHWXvlgZ94ORrH1ZdWJrZDswPar6E4bWtaPQ3qfa%2FSiysYiirg3Y6px0f7NaD5uIMYAzWsPazHPJxYOFe9NEfOPCtroWQ9EFaHAfsnoALwSSfCAjqlNnkQHshVYgk%2FvhNIaTYwggDefCzizWOeXsmwR2c9gwffCsmIFTnkNOEMsPvEkNEgnlt4EUl40GCC3qCD4jRsfKoTGZAu3c%2B5OMP5vparU4QmL02ykRr3fjECxseYp5jX3Gh%2FmGaIwGXS0rf%2F%2B4ibySNDZaaWJRvkAhWoASsYBEke9ODeDXoa7EBcDsMC4niM8me5l1lUyVeh%2FwMH3uUM13tvhhVeC7aCx2asO4DOUcKxvinz3bEq9MM3clr8GOqUBcIffv8RNeklj9TOT0%2BrTO37ZY7NGwMnK3sJM04a30KA%2FbAxs0eqhUJugUzQcXMMZ9%2BRfUSvoc7njw1k5iQQ%2BEz%2FOF2f1l5AZLZ2BkloEQ7mzm2Mc7mgFF6dnegIbTHSF3IUggJp1lNBpvZ3tdasVO%2F0NaHaCy4H%2BSqMOjK0toN3YVPCcYYyQR77dI4tRZvKIGVA4lROa5yi%2BOqn2HJ3HmZ4%2FBMr9&X-Amz-Signature=10b16db74fe2e12eceae34968fffec452a0e6a3532d7e8112cb39d0a7761e8e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYW5VSUZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgnP8a25VY4HkNiNKs1VXTJ7q%2B0HS2NQKRbjvZCFj45wIgVF%2FuRd19YdMw%2BfCeG6qtHTHgNyXPAy88UgN6ADyCD2Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEtH7yPVfDVLPIyT%2BCrcAzUVpeTKMzqwXE62fr1e0yyXDHqsFtZrGi0v2bNeBR4ZDHgqA4d%2BpAbTYHkEErVFilPzGA1P%2BuF3h2E5j1ObCv67Abudkx18dWuDPVExCqxx3gheLJTSAtxN4kNCYLHUCaPTiRh2CAVBmOY%2FyK%2Btt5kQ6WsrhJq%2FGFW3teWYtgf8%2FU8LGtSJHTgBjh4EnFp7Pd9HuqLK%2B1E6WAe7BfdBRVh62iirOZ%2F%2F%2FJudxAKx%2BysR9MZtm9QtmImUD2MfKjfneKyU7R8vYGIR%2BiJAEXqkNGHWXvlgZ94ORrH1ZdWJrZDswPar6E4bWtaPQ3qfa%2FSiysYiirg3Y6px0f7NaD5uIMYAzWsPazHPJxYOFe9NEfOPCtroWQ9EFaHAfsnoALwSSfCAjqlNnkQHshVYgk%2FvhNIaTYwggDefCzizWOeXsmwR2c9gwffCsmIFTnkNOEMsPvEkNEgnlt4EUl40GCC3qCD4jRsfKoTGZAu3c%2B5OMP5vparU4QmL02ykRr3fjECxseYp5jX3Gh%2FmGaIwGXS0rf%2F%2B4ibySNDZaaWJRvkAhWoASsYBEke9ODeDXoa7EBcDsMC4niM8me5l1lUyVeh%2FwMH3uUM13tvhhVeC7aCx2asO4DOUcKxvinz3bEq9MM3clr8GOqUBcIffv8RNeklj9TOT0%2BrTO37ZY7NGwMnK3sJM04a30KA%2FbAxs0eqhUJugUzQcXMMZ9%2BRfUSvoc7njw1k5iQQ%2BEz%2FOF2f1l5AZLZ2BkloEQ7mzm2Mc7mgFF6dnegIbTHSF3IUggJp1lNBpvZ3tdasVO%2F0NaHaCy4H%2BSqMOjK0toN3YVPCcYYyQR77dI4tRZvKIGVA4lROa5yi%2BOqn2HJ3HmZ4%2FBMr9&X-Amz-Signature=475233a5633a451ea63f22e8931c4aa015299a9971e658658d5243b61a897c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYW5VSUZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgnP8a25VY4HkNiNKs1VXTJ7q%2B0HS2NQKRbjvZCFj45wIgVF%2FuRd19YdMw%2BfCeG6qtHTHgNyXPAy88UgN6ADyCD2Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEtH7yPVfDVLPIyT%2BCrcAzUVpeTKMzqwXE62fr1e0yyXDHqsFtZrGi0v2bNeBR4ZDHgqA4d%2BpAbTYHkEErVFilPzGA1P%2BuF3h2E5j1ObCv67Abudkx18dWuDPVExCqxx3gheLJTSAtxN4kNCYLHUCaPTiRh2CAVBmOY%2FyK%2Btt5kQ6WsrhJq%2FGFW3teWYtgf8%2FU8LGtSJHTgBjh4EnFp7Pd9HuqLK%2B1E6WAe7BfdBRVh62iirOZ%2F%2F%2FJudxAKx%2BysR9MZtm9QtmImUD2MfKjfneKyU7R8vYGIR%2BiJAEXqkNGHWXvlgZ94ORrH1ZdWJrZDswPar6E4bWtaPQ3qfa%2FSiysYiirg3Y6px0f7NaD5uIMYAzWsPazHPJxYOFe9NEfOPCtroWQ9EFaHAfsnoALwSSfCAjqlNnkQHshVYgk%2FvhNIaTYwggDefCzizWOeXsmwR2c9gwffCsmIFTnkNOEMsPvEkNEgnlt4EUl40GCC3qCD4jRsfKoTGZAu3c%2B5OMP5vparU4QmL02ykRr3fjECxseYp5jX3Gh%2FmGaIwGXS0rf%2F%2B4ibySNDZaaWJRvkAhWoASsYBEke9ODeDXoa7EBcDsMC4niM8me5l1lUyVeh%2FwMH3uUM13tvhhVeC7aCx2asO4DOUcKxvinz3bEq9MM3clr8GOqUBcIffv8RNeklj9TOT0%2BrTO37ZY7NGwMnK3sJM04a30KA%2FbAxs0eqhUJugUzQcXMMZ9%2BRfUSvoc7njw1k5iQQ%2BEz%2FOF2f1l5AZLZ2BkloEQ7mzm2Mc7mgFF6dnegIbTHSF3IUggJp1lNBpvZ3tdasVO%2F0NaHaCy4H%2BSqMOjK0toN3YVPCcYYyQR77dI4tRZvKIGVA4lROa5yi%2BOqn2HJ3HmZ4%2FBMr9&X-Amz-Signature=cbcaae123cb9b80b534ea8ae8a9c299dcd8e91cf68e695af0e425ff404de6cec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYW5VSUZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgnP8a25VY4HkNiNKs1VXTJ7q%2B0HS2NQKRbjvZCFj45wIgVF%2FuRd19YdMw%2BfCeG6qtHTHgNyXPAy88UgN6ADyCD2Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEtH7yPVfDVLPIyT%2BCrcAzUVpeTKMzqwXE62fr1e0yyXDHqsFtZrGi0v2bNeBR4ZDHgqA4d%2BpAbTYHkEErVFilPzGA1P%2BuF3h2E5j1ObCv67Abudkx18dWuDPVExCqxx3gheLJTSAtxN4kNCYLHUCaPTiRh2CAVBmOY%2FyK%2Btt5kQ6WsrhJq%2FGFW3teWYtgf8%2FU8LGtSJHTgBjh4EnFp7Pd9HuqLK%2B1E6WAe7BfdBRVh62iirOZ%2F%2F%2FJudxAKx%2BysR9MZtm9QtmImUD2MfKjfneKyU7R8vYGIR%2BiJAEXqkNGHWXvlgZ94ORrH1ZdWJrZDswPar6E4bWtaPQ3qfa%2FSiysYiirg3Y6px0f7NaD5uIMYAzWsPazHPJxYOFe9NEfOPCtroWQ9EFaHAfsnoALwSSfCAjqlNnkQHshVYgk%2FvhNIaTYwggDefCzizWOeXsmwR2c9gwffCsmIFTnkNOEMsPvEkNEgnlt4EUl40GCC3qCD4jRsfKoTGZAu3c%2B5OMP5vparU4QmL02ykRr3fjECxseYp5jX3Gh%2FmGaIwGXS0rf%2F%2B4ibySNDZaaWJRvkAhWoASsYBEke9ODeDXoa7EBcDsMC4niM8me5l1lUyVeh%2FwMH3uUM13tvhhVeC7aCx2asO4DOUcKxvinz3bEq9MM3clr8GOqUBcIffv8RNeklj9TOT0%2BrTO37ZY7NGwMnK3sJM04a30KA%2FbAxs0eqhUJugUzQcXMMZ9%2BRfUSvoc7njw1k5iQQ%2BEz%2FOF2f1l5AZLZ2BkloEQ7mzm2Mc7mgFF6dnegIbTHSF3IUggJp1lNBpvZ3tdasVO%2F0NaHaCy4H%2BSqMOjK0toN3YVPCcYYyQR77dI4tRZvKIGVA4lROa5yi%2BOqn2HJ3HmZ4%2FBMr9&X-Amz-Signature=768addd20ad95f1b140e0a3ff0e3227b1e23b4f4d298ab70ff985241e15924ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
