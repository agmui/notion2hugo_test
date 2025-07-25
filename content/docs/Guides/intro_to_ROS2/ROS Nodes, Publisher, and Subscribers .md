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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MK6I6RN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIFZtie6KdXSZ3W81HjdS6tmY2hM9ngp6zd2FGqV%2Fsp%2B6AiBuqrpjQCxDC7rG6dNjMEEPTKLBGyN679KqeKzhjLAOZyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMvmP5RPwZ5bLxmwV6KtwDGSXjcsdj4v%2By13bgrw4TEni3EHml3nw8cpzJVWMjPvHmietBOi5Moa%2F%2BpNs6qWtLxVHW90PVsYvUuhv96HwlBb1c90bAVEEGcsG1snuv4k1Th4NhCI7c0FiAiKn4viKl4f9Brykf%2BBhH%2FZmFswK1fkxiz4VSDF8J6lnQJMs8AjLjh%2BL7LwJM8PFrL8R8aPfLeAe74aKwysJ8gYKBHLFmOi2m2uC9AB8cYNX1k2mrk0Gx5vaaIjeMcdoJ2XKdpIWEejJ4%2FNVlYwbg6aG0mP1nHuheKStn6HFWZo8xUqoqb4Wf%2BOAT1y7pCa5%2FggEcn3Ux%2FhjYPY5h1Iz77oh%2BnUQa6lK3B4RdCSCwUIj5CJtKGJLMi2NJcfjm%2BWQGm4GdRtW6GYyd5PYCVnW5mgNslUHJ1zPL8ebZz8lsPvEztcJ75j08lTObMhnl9DFiEvaobA9JUdkBiWKkT6uuSfIoQiQDM%2FSQI7rlJBIBskev79TaWbs7Q5PkrGN%2Fl8IguzqNe4dGuU3Uh5pmh3pMOpaQA03%2FoeNzqZ8GXsyS6x1rVaymM6rKPs6kU29zD1BOg8Zwovspn38Mc%2Fxf2Hh3mJ2aIrdz%2FX0KMRFcitJmv56ryXjFiapqeZInsB7hZaW2qM8w5oaOxAY6pgHYeCPjey4UBDf2paJA%2B2%2BOPJXD9yXNZVyFUeoBv9ZrQ83veVR1r%2FHY1UB7P6BTZaXOGoWH1CBRQ%2BB%2BEvTIfn%2FcA0IjlV3SCGBZ1W2AjlVCU7eTkvnhkUMa4b1%2Fastahad94L6wjuaHnzQzX6PRSxXYQ5EQRlA%2FzuWnYqjA0IvdlUjGvmJlaHYoZBiqs9n%2F9BsjhS3kMHjAaFnKlQ90srNxvTqA0Sll&X-Amz-Signature=4a16d5bd91f45b75c3c19d84252737ae261bb4be326d85b05cfc2c3439c2a738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MK6I6RN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIFZtie6KdXSZ3W81HjdS6tmY2hM9ngp6zd2FGqV%2Fsp%2B6AiBuqrpjQCxDC7rG6dNjMEEPTKLBGyN679KqeKzhjLAOZyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMvmP5RPwZ5bLxmwV6KtwDGSXjcsdj4v%2By13bgrw4TEni3EHml3nw8cpzJVWMjPvHmietBOi5Moa%2F%2BpNs6qWtLxVHW90PVsYvUuhv96HwlBb1c90bAVEEGcsG1snuv4k1Th4NhCI7c0FiAiKn4viKl4f9Brykf%2BBhH%2FZmFswK1fkxiz4VSDF8J6lnQJMs8AjLjh%2BL7LwJM8PFrL8R8aPfLeAe74aKwysJ8gYKBHLFmOi2m2uC9AB8cYNX1k2mrk0Gx5vaaIjeMcdoJ2XKdpIWEejJ4%2FNVlYwbg6aG0mP1nHuheKStn6HFWZo8xUqoqb4Wf%2BOAT1y7pCa5%2FggEcn3Ux%2FhjYPY5h1Iz77oh%2BnUQa6lK3B4RdCSCwUIj5CJtKGJLMi2NJcfjm%2BWQGm4GdRtW6GYyd5PYCVnW5mgNslUHJ1zPL8ebZz8lsPvEztcJ75j08lTObMhnl9DFiEvaobA9JUdkBiWKkT6uuSfIoQiQDM%2FSQI7rlJBIBskev79TaWbs7Q5PkrGN%2Fl8IguzqNe4dGuU3Uh5pmh3pMOpaQA03%2FoeNzqZ8GXsyS6x1rVaymM6rKPs6kU29zD1BOg8Zwovspn38Mc%2Fxf2Hh3mJ2aIrdz%2FX0KMRFcitJmv56ryXjFiapqeZInsB7hZaW2qM8w5oaOxAY6pgHYeCPjey4UBDf2paJA%2B2%2BOPJXD9yXNZVyFUeoBv9ZrQ83veVR1r%2FHY1UB7P6BTZaXOGoWH1CBRQ%2BB%2BEvTIfn%2FcA0IjlV3SCGBZ1W2AjlVCU7eTkvnhkUMa4b1%2Fastahad94L6wjuaHnzQzX6PRSxXYQ5EQRlA%2FzuWnYqjA0IvdlUjGvmJlaHYoZBiqs9n%2F9BsjhS3kMHjAaFnKlQ90srNxvTqA0Sll&X-Amz-Signature=8ab2aa25eb145d1ff08a4ad8c699aecbc74b9d934ea2e1df207592e35caf158b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MK6I6RN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIFZtie6KdXSZ3W81HjdS6tmY2hM9ngp6zd2FGqV%2Fsp%2B6AiBuqrpjQCxDC7rG6dNjMEEPTKLBGyN679KqeKzhjLAOZyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMvmP5RPwZ5bLxmwV6KtwDGSXjcsdj4v%2By13bgrw4TEni3EHml3nw8cpzJVWMjPvHmietBOi5Moa%2F%2BpNs6qWtLxVHW90PVsYvUuhv96HwlBb1c90bAVEEGcsG1snuv4k1Th4NhCI7c0FiAiKn4viKl4f9Brykf%2BBhH%2FZmFswK1fkxiz4VSDF8J6lnQJMs8AjLjh%2BL7LwJM8PFrL8R8aPfLeAe74aKwysJ8gYKBHLFmOi2m2uC9AB8cYNX1k2mrk0Gx5vaaIjeMcdoJ2XKdpIWEejJ4%2FNVlYwbg6aG0mP1nHuheKStn6HFWZo8xUqoqb4Wf%2BOAT1y7pCa5%2FggEcn3Ux%2FhjYPY5h1Iz77oh%2BnUQa6lK3B4RdCSCwUIj5CJtKGJLMi2NJcfjm%2BWQGm4GdRtW6GYyd5PYCVnW5mgNslUHJ1zPL8ebZz8lsPvEztcJ75j08lTObMhnl9DFiEvaobA9JUdkBiWKkT6uuSfIoQiQDM%2FSQI7rlJBIBskev79TaWbs7Q5PkrGN%2Fl8IguzqNe4dGuU3Uh5pmh3pMOpaQA03%2FoeNzqZ8GXsyS6x1rVaymM6rKPs6kU29zD1BOg8Zwovspn38Mc%2Fxf2Hh3mJ2aIrdz%2FX0KMRFcitJmv56ryXjFiapqeZInsB7hZaW2qM8w5oaOxAY6pgHYeCPjey4UBDf2paJA%2B2%2BOPJXD9yXNZVyFUeoBv9ZrQ83veVR1r%2FHY1UB7P6BTZaXOGoWH1CBRQ%2BB%2BEvTIfn%2FcA0IjlV3SCGBZ1W2AjlVCU7eTkvnhkUMa4b1%2Fastahad94L6wjuaHnzQzX6PRSxXYQ5EQRlA%2FzuWnYqjA0IvdlUjGvmJlaHYoZBiqs9n%2F9BsjhS3kMHjAaFnKlQ90srNxvTqA0Sll&X-Amz-Signature=94fac756739e0088aadef74ce1d790d031c9c10162a16b5991a7c1705014c5d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MK6I6RN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIFZtie6KdXSZ3W81HjdS6tmY2hM9ngp6zd2FGqV%2Fsp%2B6AiBuqrpjQCxDC7rG6dNjMEEPTKLBGyN679KqeKzhjLAOZyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMvmP5RPwZ5bLxmwV6KtwDGSXjcsdj4v%2By13bgrw4TEni3EHml3nw8cpzJVWMjPvHmietBOi5Moa%2F%2BpNs6qWtLxVHW90PVsYvUuhv96HwlBb1c90bAVEEGcsG1snuv4k1Th4NhCI7c0FiAiKn4viKl4f9Brykf%2BBhH%2FZmFswK1fkxiz4VSDF8J6lnQJMs8AjLjh%2BL7LwJM8PFrL8R8aPfLeAe74aKwysJ8gYKBHLFmOi2m2uC9AB8cYNX1k2mrk0Gx5vaaIjeMcdoJ2XKdpIWEejJ4%2FNVlYwbg6aG0mP1nHuheKStn6HFWZo8xUqoqb4Wf%2BOAT1y7pCa5%2FggEcn3Ux%2FhjYPY5h1Iz77oh%2BnUQa6lK3B4RdCSCwUIj5CJtKGJLMi2NJcfjm%2BWQGm4GdRtW6GYyd5PYCVnW5mgNslUHJ1zPL8ebZz8lsPvEztcJ75j08lTObMhnl9DFiEvaobA9JUdkBiWKkT6uuSfIoQiQDM%2FSQI7rlJBIBskev79TaWbs7Q5PkrGN%2Fl8IguzqNe4dGuU3Uh5pmh3pMOpaQA03%2FoeNzqZ8GXsyS6x1rVaymM6rKPs6kU29zD1BOg8Zwovspn38Mc%2Fxf2Hh3mJ2aIrdz%2FX0KMRFcitJmv56ryXjFiapqeZInsB7hZaW2qM8w5oaOxAY6pgHYeCPjey4UBDf2paJA%2B2%2BOPJXD9yXNZVyFUeoBv9ZrQ83veVR1r%2FHY1UB7P6BTZaXOGoWH1CBRQ%2BB%2BEvTIfn%2FcA0IjlV3SCGBZ1W2AjlVCU7eTkvnhkUMa4b1%2Fastahad94L6wjuaHnzQzX6PRSxXYQ5EQRlA%2FzuWnYqjA0IvdlUjGvmJlaHYoZBiqs9n%2F9BsjhS3kMHjAaFnKlQ90srNxvTqA0Sll&X-Amz-Signature=8a21a43cdf480c55cf8a5888606c03fe0ae03df5db300e5c7424629d0fc25395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MK6I6RN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIFZtie6KdXSZ3W81HjdS6tmY2hM9ngp6zd2FGqV%2Fsp%2B6AiBuqrpjQCxDC7rG6dNjMEEPTKLBGyN679KqeKzhjLAOZyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMvmP5RPwZ5bLxmwV6KtwDGSXjcsdj4v%2By13bgrw4TEni3EHml3nw8cpzJVWMjPvHmietBOi5Moa%2F%2BpNs6qWtLxVHW90PVsYvUuhv96HwlBb1c90bAVEEGcsG1snuv4k1Th4NhCI7c0FiAiKn4viKl4f9Brykf%2BBhH%2FZmFswK1fkxiz4VSDF8J6lnQJMs8AjLjh%2BL7LwJM8PFrL8R8aPfLeAe74aKwysJ8gYKBHLFmOi2m2uC9AB8cYNX1k2mrk0Gx5vaaIjeMcdoJ2XKdpIWEejJ4%2FNVlYwbg6aG0mP1nHuheKStn6HFWZo8xUqoqb4Wf%2BOAT1y7pCa5%2FggEcn3Ux%2FhjYPY5h1Iz77oh%2BnUQa6lK3B4RdCSCwUIj5CJtKGJLMi2NJcfjm%2BWQGm4GdRtW6GYyd5PYCVnW5mgNslUHJ1zPL8ebZz8lsPvEztcJ75j08lTObMhnl9DFiEvaobA9JUdkBiWKkT6uuSfIoQiQDM%2FSQI7rlJBIBskev79TaWbs7Q5PkrGN%2Fl8IguzqNe4dGuU3Uh5pmh3pMOpaQA03%2FoeNzqZ8GXsyS6x1rVaymM6rKPs6kU29zD1BOg8Zwovspn38Mc%2Fxf2Hh3mJ2aIrdz%2FX0KMRFcitJmv56ryXjFiapqeZInsB7hZaW2qM8w5oaOxAY6pgHYeCPjey4UBDf2paJA%2B2%2BOPJXD9yXNZVyFUeoBv9ZrQ83veVR1r%2FHY1UB7P6BTZaXOGoWH1CBRQ%2BB%2BEvTIfn%2FcA0IjlV3SCGBZ1W2AjlVCU7eTkvnhkUMa4b1%2Fastahad94L6wjuaHnzQzX6PRSxXYQ5EQRlA%2FzuWnYqjA0IvdlUjGvmJlaHYoZBiqs9n%2F9BsjhS3kMHjAaFnKlQ90srNxvTqA0Sll&X-Amz-Signature=f8cc41965a2ab67953acd6e48d1e91af91c375e47d09a37265668ea8f1179bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MK6I6RN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIFZtie6KdXSZ3W81HjdS6tmY2hM9ngp6zd2FGqV%2Fsp%2B6AiBuqrpjQCxDC7rG6dNjMEEPTKLBGyN679KqeKzhjLAOZyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMvmP5RPwZ5bLxmwV6KtwDGSXjcsdj4v%2By13bgrw4TEni3EHml3nw8cpzJVWMjPvHmietBOi5Moa%2F%2BpNs6qWtLxVHW90PVsYvUuhv96HwlBb1c90bAVEEGcsG1snuv4k1Th4NhCI7c0FiAiKn4viKl4f9Brykf%2BBhH%2FZmFswK1fkxiz4VSDF8J6lnQJMs8AjLjh%2BL7LwJM8PFrL8R8aPfLeAe74aKwysJ8gYKBHLFmOi2m2uC9AB8cYNX1k2mrk0Gx5vaaIjeMcdoJ2XKdpIWEejJ4%2FNVlYwbg6aG0mP1nHuheKStn6HFWZo8xUqoqb4Wf%2BOAT1y7pCa5%2FggEcn3Ux%2FhjYPY5h1Iz77oh%2BnUQa6lK3B4RdCSCwUIj5CJtKGJLMi2NJcfjm%2BWQGm4GdRtW6GYyd5PYCVnW5mgNslUHJ1zPL8ebZz8lsPvEztcJ75j08lTObMhnl9DFiEvaobA9JUdkBiWKkT6uuSfIoQiQDM%2FSQI7rlJBIBskev79TaWbs7Q5PkrGN%2Fl8IguzqNe4dGuU3Uh5pmh3pMOpaQA03%2FoeNzqZ8GXsyS6x1rVaymM6rKPs6kU29zD1BOg8Zwovspn38Mc%2Fxf2Hh3mJ2aIrdz%2FX0KMRFcitJmv56ryXjFiapqeZInsB7hZaW2qM8w5oaOxAY6pgHYeCPjey4UBDf2paJA%2B2%2BOPJXD9yXNZVyFUeoBv9ZrQ83veVR1r%2FHY1UB7P6BTZaXOGoWH1CBRQ%2BB%2BEvTIfn%2FcA0IjlV3SCGBZ1W2AjlVCU7eTkvnhkUMa4b1%2Fastahad94L6wjuaHnzQzX6PRSxXYQ5EQRlA%2FzuWnYqjA0IvdlUjGvmJlaHYoZBiqs9n%2F9BsjhS3kMHjAaFnKlQ90srNxvTqA0Sll&X-Amz-Signature=9c27e79066cedbf1b56b371955e6ad4611e26d321c3fdb78c5f98a0b6f8f3076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MK6I6RN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIFZtie6KdXSZ3W81HjdS6tmY2hM9ngp6zd2FGqV%2Fsp%2B6AiBuqrpjQCxDC7rG6dNjMEEPTKLBGyN679KqeKzhjLAOZyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMvmP5RPwZ5bLxmwV6KtwDGSXjcsdj4v%2By13bgrw4TEni3EHml3nw8cpzJVWMjPvHmietBOi5Moa%2F%2BpNs6qWtLxVHW90PVsYvUuhv96HwlBb1c90bAVEEGcsG1snuv4k1Th4NhCI7c0FiAiKn4viKl4f9Brykf%2BBhH%2FZmFswK1fkxiz4VSDF8J6lnQJMs8AjLjh%2BL7LwJM8PFrL8R8aPfLeAe74aKwysJ8gYKBHLFmOi2m2uC9AB8cYNX1k2mrk0Gx5vaaIjeMcdoJ2XKdpIWEejJ4%2FNVlYwbg6aG0mP1nHuheKStn6HFWZo8xUqoqb4Wf%2BOAT1y7pCa5%2FggEcn3Ux%2FhjYPY5h1Iz77oh%2BnUQa6lK3B4RdCSCwUIj5CJtKGJLMi2NJcfjm%2BWQGm4GdRtW6GYyd5PYCVnW5mgNslUHJ1zPL8ebZz8lsPvEztcJ75j08lTObMhnl9DFiEvaobA9JUdkBiWKkT6uuSfIoQiQDM%2FSQI7rlJBIBskev79TaWbs7Q5PkrGN%2Fl8IguzqNe4dGuU3Uh5pmh3pMOpaQA03%2FoeNzqZ8GXsyS6x1rVaymM6rKPs6kU29zD1BOg8Zwovspn38Mc%2Fxf2Hh3mJ2aIrdz%2FX0KMRFcitJmv56ryXjFiapqeZInsB7hZaW2qM8w5oaOxAY6pgHYeCPjey4UBDf2paJA%2B2%2BOPJXD9yXNZVyFUeoBv9ZrQ83veVR1r%2FHY1UB7P6BTZaXOGoWH1CBRQ%2BB%2BEvTIfn%2FcA0IjlV3SCGBZ1W2AjlVCU7eTkvnhkUMa4b1%2Fastahad94L6wjuaHnzQzX6PRSxXYQ5EQRlA%2FzuWnYqjA0IvdlUjGvmJlaHYoZBiqs9n%2F9BsjhS3kMHjAaFnKlQ90srNxvTqA0Sll&X-Amz-Signature=1d4ce9ed8c51ba9268355e4e74b46118325aa44bc77b387d5572f10b6538ab72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MK6I6RN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIFZtie6KdXSZ3W81HjdS6tmY2hM9ngp6zd2FGqV%2Fsp%2B6AiBuqrpjQCxDC7rG6dNjMEEPTKLBGyN679KqeKzhjLAOZyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMvmP5RPwZ5bLxmwV6KtwDGSXjcsdj4v%2By13bgrw4TEni3EHml3nw8cpzJVWMjPvHmietBOi5Moa%2F%2BpNs6qWtLxVHW90PVsYvUuhv96HwlBb1c90bAVEEGcsG1snuv4k1Th4NhCI7c0FiAiKn4viKl4f9Brykf%2BBhH%2FZmFswK1fkxiz4VSDF8J6lnQJMs8AjLjh%2BL7LwJM8PFrL8R8aPfLeAe74aKwysJ8gYKBHLFmOi2m2uC9AB8cYNX1k2mrk0Gx5vaaIjeMcdoJ2XKdpIWEejJ4%2FNVlYwbg6aG0mP1nHuheKStn6HFWZo8xUqoqb4Wf%2BOAT1y7pCa5%2FggEcn3Ux%2FhjYPY5h1Iz77oh%2BnUQa6lK3B4RdCSCwUIj5CJtKGJLMi2NJcfjm%2BWQGm4GdRtW6GYyd5PYCVnW5mgNslUHJ1zPL8ebZz8lsPvEztcJ75j08lTObMhnl9DFiEvaobA9JUdkBiWKkT6uuSfIoQiQDM%2FSQI7rlJBIBskev79TaWbs7Q5PkrGN%2Fl8IguzqNe4dGuU3Uh5pmh3pMOpaQA03%2FoeNzqZ8GXsyS6x1rVaymM6rKPs6kU29zD1BOg8Zwovspn38Mc%2Fxf2Hh3mJ2aIrdz%2FX0KMRFcitJmv56ryXjFiapqeZInsB7hZaW2qM8w5oaOxAY6pgHYeCPjey4UBDf2paJA%2B2%2BOPJXD9yXNZVyFUeoBv9ZrQ83veVR1r%2FHY1UB7P6BTZaXOGoWH1CBRQ%2BB%2BEvTIfn%2FcA0IjlV3SCGBZ1W2AjlVCU7eTkvnhkUMa4b1%2Fastahad94L6wjuaHnzQzX6PRSxXYQ5EQRlA%2FzuWnYqjA0IvdlUjGvmJlaHYoZBiqs9n%2F9BsjhS3kMHjAaFnKlQ90srNxvTqA0Sll&X-Amz-Signature=2ef50b171683271a800d78ebf9f4e32a1cddaf373d3d6bb307c59d07d03a6e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
