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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMRXBXA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGKIl68cPdyzcq5Z7dwApr2rz3RT9KXyg82OZfWz4357AiEA1XAtVvqQWLP8ahDGlgtevx80Ls1vPPzzwjZ4cAZbjTcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLjGnSDAesyaMETToircA1ze%2BjSEOexzLJzdCJYUlcWMT7GTpuFsR%2Fj49OMBg0qVRobUoAeSZAYRdNfwaF49c%2FRLpIk2hGeWyf8M5tvxOxalpRnD2F9XFiyQ2dMpcyt1e52WHvj7laAv9zquPHcVJI9QZCn4A4p1ptEDEMPR2myrZi8H8IaKNxbf08RI5l1YrMnLZIQilsucYaAz%2BCW1n1AHaAv0xkO07TxbAt4ZAR6aXTRSmJOUKgcHH5K7EOlLJlrOEo8vRpR6mEQDALI8Z4NqPkwZI26axpoY73SXy4GpSnpOvDwyNJZjifIu4rWZ5mmZQkQ6%2B3XowcojClWttsbwW9cVrwxwlIdeeuCkB9vPoiKK%2Bsu06GRSPUiRwFF8anaF%2BW78CThTFWEzrLx5%2B64O5IwOFvpxsg5Or9pJ8vrcU013V2DFq2dv6u3Eib9WP1yRQHNomDiN6blkr%2FhHYrH0mRa59wSp10ogaNfvX6VaoLaVQdpsokuRH75GTc9zXEc76JdPzAwUH1v2bHktSvwwd9FvAIIMnKx5s%2BYs7AnYXStR%2FRi11UUpgNA6RsoP4QgSXrnpAh%2FTL%2B5RHKrgkQhrr0cOpJQa6%2FXr160BFz4NDDDyLe3dIwMXshRq5LSEtEf7uqvy4RqeZ%2FcgMM%2BNosMGOqUBxqWfcSl%2FZ6FcdEQcd2UCv5MDmDtanZVqk4tG81NJ1Fcx7%2FRAh1KsRzhQTnH8A6qp3%2F6HLNPR3W2lQi6KP72TozstkLhI4Q73Ro9rK8hLK4zhibQfLp3eoqRGVIUBxFLPBymfCUt6z%2FdjD7qaSYPGYHwrrhjALsCbHP4t06TvvjyGI8uAht%2FubhgMB8dOzBp2tPu%2FYVlCrFcidqjZDqYcbpNbIQ%2FX&X-Amz-Signature=4b2b89ef7e563dd46858cac29e34bb7d720f4a4b9928049a8b5eabe9008537a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMRXBXA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGKIl68cPdyzcq5Z7dwApr2rz3RT9KXyg82OZfWz4357AiEA1XAtVvqQWLP8ahDGlgtevx80Ls1vPPzzwjZ4cAZbjTcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLjGnSDAesyaMETToircA1ze%2BjSEOexzLJzdCJYUlcWMT7GTpuFsR%2Fj49OMBg0qVRobUoAeSZAYRdNfwaF49c%2FRLpIk2hGeWyf8M5tvxOxalpRnD2F9XFiyQ2dMpcyt1e52WHvj7laAv9zquPHcVJI9QZCn4A4p1ptEDEMPR2myrZi8H8IaKNxbf08RI5l1YrMnLZIQilsucYaAz%2BCW1n1AHaAv0xkO07TxbAt4ZAR6aXTRSmJOUKgcHH5K7EOlLJlrOEo8vRpR6mEQDALI8Z4NqPkwZI26axpoY73SXy4GpSnpOvDwyNJZjifIu4rWZ5mmZQkQ6%2B3XowcojClWttsbwW9cVrwxwlIdeeuCkB9vPoiKK%2Bsu06GRSPUiRwFF8anaF%2BW78CThTFWEzrLx5%2B64O5IwOFvpxsg5Or9pJ8vrcU013V2DFq2dv6u3Eib9WP1yRQHNomDiN6blkr%2FhHYrH0mRa59wSp10ogaNfvX6VaoLaVQdpsokuRH75GTc9zXEc76JdPzAwUH1v2bHktSvwwd9FvAIIMnKx5s%2BYs7AnYXStR%2FRi11UUpgNA6RsoP4QgSXrnpAh%2FTL%2B5RHKrgkQhrr0cOpJQa6%2FXr160BFz4NDDDyLe3dIwMXshRq5LSEtEf7uqvy4RqeZ%2FcgMM%2BNosMGOqUBxqWfcSl%2FZ6FcdEQcd2UCv5MDmDtanZVqk4tG81NJ1Fcx7%2FRAh1KsRzhQTnH8A6qp3%2F6HLNPR3W2lQi6KP72TozstkLhI4Q73Ro9rK8hLK4zhibQfLp3eoqRGVIUBxFLPBymfCUt6z%2FdjD7qaSYPGYHwrrhjALsCbHP4t06TvvjyGI8uAht%2FubhgMB8dOzBp2tPu%2FYVlCrFcidqjZDqYcbpNbIQ%2FX&X-Amz-Signature=656275d73b50861d125fc4a4071c288801fe85d2ab82044502504c9ae9875bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMRXBXA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGKIl68cPdyzcq5Z7dwApr2rz3RT9KXyg82OZfWz4357AiEA1XAtVvqQWLP8ahDGlgtevx80Ls1vPPzzwjZ4cAZbjTcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLjGnSDAesyaMETToircA1ze%2BjSEOexzLJzdCJYUlcWMT7GTpuFsR%2Fj49OMBg0qVRobUoAeSZAYRdNfwaF49c%2FRLpIk2hGeWyf8M5tvxOxalpRnD2F9XFiyQ2dMpcyt1e52WHvj7laAv9zquPHcVJI9QZCn4A4p1ptEDEMPR2myrZi8H8IaKNxbf08RI5l1YrMnLZIQilsucYaAz%2BCW1n1AHaAv0xkO07TxbAt4ZAR6aXTRSmJOUKgcHH5K7EOlLJlrOEo8vRpR6mEQDALI8Z4NqPkwZI26axpoY73SXy4GpSnpOvDwyNJZjifIu4rWZ5mmZQkQ6%2B3XowcojClWttsbwW9cVrwxwlIdeeuCkB9vPoiKK%2Bsu06GRSPUiRwFF8anaF%2BW78CThTFWEzrLx5%2B64O5IwOFvpxsg5Or9pJ8vrcU013V2DFq2dv6u3Eib9WP1yRQHNomDiN6blkr%2FhHYrH0mRa59wSp10ogaNfvX6VaoLaVQdpsokuRH75GTc9zXEc76JdPzAwUH1v2bHktSvwwd9FvAIIMnKx5s%2BYs7AnYXStR%2FRi11UUpgNA6RsoP4QgSXrnpAh%2FTL%2B5RHKrgkQhrr0cOpJQa6%2FXr160BFz4NDDDyLe3dIwMXshRq5LSEtEf7uqvy4RqeZ%2FcgMM%2BNosMGOqUBxqWfcSl%2FZ6FcdEQcd2UCv5MDmDtanZVqk4tG81NJ1Fcx7%2FRAh1KsRzhQTnH8A6qp3%2F6HLNPR3W2lQi6KP72TozstkLhI4Q73Ro9rK8hLK4zhibQfLp3eoqRGVIUBxFLPBymfCUt6z%2FdjD7qaSYPGYHwrrhjALsCbHP4t06TvvjyGI8uAht%2FubhgMB8dOzBp2tPu%2FYVlCrFcidqjZDqYcbpNbIQ%2FX&X-Amz-Signature=5e77a9a453472385ee0a929b95fa01c93315e9760478f5bf14d4b71d07a2f7a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMRXBXA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGKIl68cPdyzcq5Z7dwApr2rz3RT9KXyg82OZfWz4357AiEA1XAtVvqQWLP8ahDGlgtevx80Ls1vPPzzwjZ4cAZbjTcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLjGnSDAesyaMETToircA1ze%2BjSEOexzLJzdCJYUlcWMT7GTpuFsR%2Fj49OMBg0qVRobUoAeSZAYRdNfwaF49c%2FRLpIk2hGeWyf8M5tvxOxalpRnD2F9XFiyQ2dMpcyt1e52WHvj7laAv9zquPHcVJI9QZCn4A4p1ptEDEMPR2myrZi8H8IaKNxbf08RI5l1YrMnLZIQilsucYaAz%2BCW1n1AHaAv0xkO07TxbAt4ZAR6aXTRSmJOUKgcHH5K7EOlLJlrOEo8vRpR6mEQDALI8Z4NqPkwZI26axpoY73SXy4GpSnpOvDwyNJZjifIu4rWZ5mmZQkQ6%2B3XowcojClWttsbwW9cVrwxwlIdeeuCkB9vPoiKK%2Bsu06GRSPUiRwFF8anaF%2BW78CThTFWEzrLx5%2B64O5IwOFvpxsg5Or9pJ8vrcU013V2DFq2dv6u3Eib9WP1yRQHNomDiN6blkr%2FhHYrH0mRa59wSp10ogaNfvX6VaoLaVQdpsokuRH75GTc9zXEc76JdPzAwUH1v2bHktSvwwd9FvAIIMnKx5s%2BYs7AnYXStR%2FRi11UUpgNA6RsoP4QgSXrnpAh%2FTL%2B5RHKrgkQhrr0cOpJQa6%2FXr160BFz4NDDDyLe3dIwMXshRq5LSEtEf7uqvy4RqeZ%2FcgMM%2BNosMGOqUBxqWfcSl%2FZ6FcdEQcd2UCv5MDmDtanZVqk4tG81NJ1Fcx7%2FRAh1KsRzhQTnH8A6qp3%2F6HLNPR3W2lQi6KP72TozstkLhI4Q73Ro9rK8hLK4zhibQfLp3eoqRGVIUBxFLPBymfCUt6z%2FdjD7qaSYPGYHwrrhjALsCbHP4t06TvvjyGI8uAht%2FubhgMB8dOzBp2tPu%2FYVlCrFcidqjZDqYcbpNbIQ%2FX&X-Amz-Signature=2b9ef3fb89f3aa72e5de3c6ef18c20e4baae024933d26265a69d446a0abae135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMRXBXA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGKIl68cPdyzcq5Z7dwApr2rz3RT9KXyg82OZfWz4357AiEA1XAtVvqQWLP8ahDGlgtevx80Ls1vPPzzwjZ4cAZbjTcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLjGnSDAesyaMETToircA1ze%2BjSEOexzLJzdCJYUlcWMT7GTpuFsR%2Fj49OMBg0qVRobUoAeSZAYRdNfwaF49c%2FRLpIk2hGeWyf8M5tvxOxalpRnD2F9XFiyQ2dMpcyt1e52WHvj7laAv9zquPHcVJI9QZCn4A4p1ptEDEMPR2myrZi8H8IaKNxbf08RI5l1YrMnLZIQilsucYaAz%2BCW1n1AHaAv0xkO07TxbAt4ZAR6aXTRSmJOUKgcHH5K7EOlLJlrOEo8vRpR6mEQDALI8Z4NqPkwZI26axpoY73SXy4GpSnpOvDwyNJZjifIu4rWZ5mmZQkQ6%2B3XowcojClWttsbwW9cVrwxwlIdeeuCkB9vPoiKK%2Bsu06GRSPUiRwFF8anaF%2BW78CThTFWEzrLx5%2B64O5IwOFvpxsg5Or9pJ8vrcU013V2DFq2dv6u3Eib9WP1yRQHNomDiN6blkr%2FhHYrH0mRa59wSp10ogaNfvX6VaoLaVQdpsokuRH75GTc9zXEc76JdPzAwUH1v2bHktSvwwd9FvAIIMnKx5s%2BYs7AnYXStR%2FRi11UUpgNA6RsoP4QgSXrnpAh%2FTL%2B5RHKrgkQhrr0cOpJQa6%2FXr160BFz4NDDDyLe3dIwMXshRq5LSEtEf7uqvy4RqeZ%2FcgMM%2BNosMGOqUBxqWfcSl%2FZ6FcdEQcd2UCv5MDmDtanZVqk4tG81NJ1Fcx7%2FRAh1KsRzhQTnH8A6qp3%2F6HLNPR3W2lQi6KP72TozstkLhI4Q73Ro9rK8hLK4zhibQfLp3eoqRGVIUBxFLPBymfCUt6z%2FdjD7qaSYPGYHwrrhjALsCbHP4t06TvvjyGI8uAht%2FubhgMB8dOzBp2tPu%2FYVlCrFcidqjZDqYcbpNbIQ%2FX&X-Amz-Signature=ba31ce47364daeb7eea7f559f398fe338f3eacca0526037a93761febf976a827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMRXBXA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGKIl68cPdyzcq5Z7dwApr2rz3RT9KXyg82OZfWz4357AiEA1XAtVvqQWLP8ahDGlgtevx80Ls1vPPzzwjZ4cAZbjTcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLjGnSDAesyaMETToircA1ze%2BjSEOexzLJzdCJYUlcWMT7GTpuFsR%2Fj49OMBg0qVRobUoAeSZAYRdNfwaF49c%2FRLpIk2hGeWyf8M5tvxOxalpRnD2F9XFiyQ2dMpcyt1e52WHvj7laAv9zquPHcVJI9QZCn4A4p1ptEDEMPR2myrZi8H8IaKNxbf08RI5l1YrMnLZIQilsucYaAz%2BCW1n1AHaAv0xkO07TxbAt4ZAR6aXTRSmJOUKgcHH5K7EOlLJlrOEo8vRpR6mEQDALI8Z4NqPkwZI26axpoY73SXy4GpSnpOvDwyNJZjifIu4rWZ5mmZQkQ6%2B3XowcojClWttsbwW9cVrwxwlIdeeuCkB9vPoiKK%2Bsu06GRSPUiRwFF8anaF%2BW78CThTFWEzrLx5%2B64O5IwOFvpxsg5Or9pJ8vrcU013V2DFq2dv6u3Eib9WP1yRQHNomDiN6blkr%2FhHYrH0mRa59wSp10ogaNfvX6VaoLaVQdpsokuRH75GTc9zXEc76JdPzAwUH1v2bHktSvwwd9FvAIIMnKx5s%2BYs7AnYXStR%2FRi11UUpgNA6RsoP4QgSXrnpAh%2FTL%2B5RHKrgkQhrr0cOpJQa6%2FXr160BFz4NDDDyLe3dIwMXshRq5LSEtEf7uqvy4RqeZ%2FcgMM%2BNosMGOqUBxqWfcSl%2FZ6FcdEQcd2UCv5MDmDtanZVqk4tG81NJ1Fcx7%2FRAh1KsRzhQTnH8A6qp3%2F6HLNPR3W2lQi6KP72TozstkLhI4Q73Ro9rK8hLK4zhibQfLp3eoqRGVIUBxFLPBymfCUt6z%2FdjD7qaSYPGYHwrrhjALsCbHP4t06TvvjyGI8uAht%2FubhgMB8dOzBp2tPu%2FYVlCrFcidqjZDqYcbpNbIQ%2FX&X-Amz-Signature=3d06d117b05f9d70fc1e085f73702d77572a28747f8c52cefe505cf3d1e66e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMRXBXA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGKIl68cPdyzcq5Z7dwApr2rz3RT9KXyg82OZfWz4357AiEA1XAtVvqQWLP8ahDGlgtevx80Ls1vPPzzwjZ4cAZbjTcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLjGnSDAesyaMETToircA1ze%2BjSEOexzLJzdCJYUlcWMT7GTpuFsR%2Fj49OMBg0qVRobUoAeSZAYRdNfwaF49c%2FRLpIk2hGeWyf8M5tvxOxalpRnD2F9XFiyQ2dMpcyt1e52WHvj7laAv9zquPHcVJI9QZCn4A4p1ptEDEMPR2myrZi8H8IaKNxbf08RI5l1YrMnLZIQilsucYaAz%2BCW1n1AHaAv0xkO07TxbAt4ZAR6aXTRSmJOUKgcHH5K7EOlLJlrOEo8vRpR6mEQDALI8Z4NqPkwZI26axpoY73SXy4GpSnpOvDwyNJZjifIu4rWZ5mmZQkQ6%2B3XowcojClWttsbwW9cVrwxwlIdeeuCkB9vPoiKK%2Bsu06GRSPUiRwFF8anaF%2BW78CThTFWEzrLx5%2B64O5IwOFvpxsg5Or9pJ8vrcU013V2DFq2dv6u3Eib9WP1yRQHNomDiN6blkr%2FhHYrH0mRa59wSp10ogaNfvX6VaoLaVQdpsokuRH75GTc9zXEc76JdPzAwUH1v2bHktSvwwd9FvAIIMnKx5s%2BYs7AnYXStR%2FRi11UUpgNA6RsoP4QgSXrnpAh%2FTL%2B5RHKrgkQhrr0cOpJQa6%2FXr160BFz4NDDDyLe3dIwMXshRq5LSEtEf7uqvy4RqeZ%2FcgMM%2BNosMGOqUBxqWfcSl%2FZ6FcdEQcd2UCv5MDmDtanZVqk4tG81NJ1Fcx7%2FRAh1KsRzhQTnH8A6qp3%2F6HLNPR3W2lQi6KP72TozstkLhI4Q73Ro9rK8hLK4zhibQfLp3eoqRGVIUBxFLPBymfCUt6z%2FdjD7qaSYPGYHwrrhjALsCbHP4t06TvvjyGI8uAht%2FubhgMB8dOzBp2tPu%2FYVlCrFcidqjZDqYcbpNbIQ%2FX&X-Amz-Signature=a58cc34fec623be1f4cf4b22b8af2ee606674702174df46d6b0aafcbd9801fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMRXBXA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGKIl68cPdyzcq5Z7dwApr2rz3RT9KXyg82OZfWz4357AiEA1XAtVvqQWLP8ahDGlgtevx80Ls1vPPzzwjZ4cAZbjTcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLjGnSDAesyaMETToircA1ze%2BjSEOexzLJzdCJYUlcWMT7GTpuFsR%2Fj49OMBg0qVRobUoAeSZAYRdNfwaF49c%2FRLpIk2hGeWyf8M5tvxOxalpRnD2F9XFiyQ2dMpcyt1e52WHvj7laAv9zquPHcVJI9QZCn4A4p1ptEDEMPR2myrZi8H8IaKNxbf08RI5l1YrMnLZIQilsucYaAz%2BCW1n1AHaAv0xkO07TxbAt4ZAR6aXTRSmJOUKgcHH5K7EOlLJlrOEo8vRpR6mEQDALI8Z4NqPkwZI26axpoY73SXy4GpSnpOvDwyNJZjifIu4rWZ5mmZQkQ6%2B3XowcojClWttsbwW9cVrwxwlIdeeuCkB9vPoiKK%2Bsu06GRSPUiRwFF8anaF%2BW78CThTFWEzrLx5%2B64O5IwOFvpxsg5Or9pJ8vrcU013V2DFq2dv6u3Eib9WP1yRQHNomDiN6blkr%2FhHYrH0mRa59wSp10ogaNfvX6VaoLaVQdpsokuRH75GTc9zXEc76JdPzAwUH1v2bHktSvwwd9FvAIIMnKx5s%2BYs7AnYXStR%2FRi11UUpgNA6RsoP4QgSXrnpAh%2FTL%2B5RHKrgkQhrr0cOpJQa6%2FXr160BFz4NDDDyLe3dIwMXshRq5LSEtEf7uqvy4RqeZ%2FcgMM%2BNosMGOqUBxqWfcSl%2FZ6FcdEQcd2UCv5MDmDtanZVqk4tG81NJ1Fcx7%2FRAh1KsRzhQTnH8A6qp3%2F6HLNPR3W2lQi6KP72TozstkLhI4Q73Ro9rK8hLK4zhibQfLp3eoqRGVIUBxFLPBymfCUt6z%2FdjD7qaSYPGYHwrrhjALsCbHP4t06TvvjyGI8uAht%2FubhgMB8dOzBp2tPu%2FYVlCrFcidqjZDqYcbpNbIQ%2FX&X-Amz-Signature=38e214142d4854b9ce581a248c011517d4a1f3666deb978646dbfc5a8d3228ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
