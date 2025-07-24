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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6235US%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC0Ow2LM9cmodJGNzQZnA9u3opE5auUvImtPqSyPsgpugIgeZvHU%2F3wa15A0e1Cw1I0%2FPqfhkP2GNVcV9hHku2HWNYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGgpYg%2FrFOkoSRYQMCrcA0guJFsttgM4zLr311PBOuvdF9wro39k%2FiuhVAUkRYAHgq%2BEH%2FM6e1JMyYLpnkmCOddMK1kmLzzPj5zIPIU1Gtdcy6Cjf0kb1OOZ20UYKBkEnsPNbXBK3d3rP8yvV4252lxNJKPxJ0W7l2vp4wLcOVz4ujxG1vTD47ozDbaPHbTuPFHfqwFL0DE0vS%2Fv6V3Vb%2FSjzRjdCfcAsjKLnjcU3Lsuy6peHWloHo7%2BLAEukmn6x1Gbw2gpuuGhvItKXP2Lr9kpFsM6DxMpRM75Uzs4Zkv4pClqGGgvEvvjGh4Ow9Pkjh%2FKQwZAv3NC7NSkeLma7a1HMgIdVVe9XmhAyoD0OmpfYgV%2FovVr7dG%2FNoGHugM9NGkXIROTMnBBE8jC%2FVzrk5wo11ZJ66FIv8URsbczjWpsiiS5i3%2F0WSKsdI10FrYdUgVL5phBNPZQ29NzaMn0u8vZZEfwClA6fRNQNSx4CsKLK8prhC0SYQaoAY2k%2Bd0R5Oy59tmrB9aYDLWjaU%2BvXLhPfXC5iwJZD95zASIeQSE1CdhCVWMCZaYyaq4oXsO2m4KQWXzqZY%2FucbcFaTKmvRyEGF1srKiUFRzlhzFhUjTB02A4jOo0e2nw%2BWOm7JDvKPVKUg4MIvIQfGCiMPHZiMQGOqUBtI5HNWesdIzppsYN0enMyylIIC5Q0N66418XXaSjQ3xPM1mR8dto4xyZtoVokDTNAGj4HbEDOye3vzQ%2BHFy83M6C7e9uXfd%2Fd0A7BFuq4hwIakG8LikS0PqYrTpkTxLiVDJhSpjjxRJO5Ny%2BOtdVwAh8nWyOWax%2Fl9YmeEBg0TLka9XIOSGpOZ9lqMDAPUfn42zwzuWvvG9dKgDBEnveHxfU9yXN&X-Amz-Signature=bd492539c3f6a0a6d8ec9c4289362c5f92a6048cd91fbc51be7ecd40f08465d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6235US%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC0Ow2LM9cmodJGNzQZnA9u3opE5auUvImtPqSyPsgpugIgeZvHU%2F3wa15A0e1Cw1I0%2FPqfhkP2GNVcV9hHku2HWNYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGgpYg%2FrFOkoSRYQMCrcA0guJFsttgM4zLr311PBOuvdF9wro39k%2FiuhVAUkRYAHgq%2BEH%2FM6e1JMyYLpnkmCOddMK1kmLzzPj5zIPIU1Gtdcy6Cjf0kb1OOZ20UYKBkEnsPNbXBK3d3rP8yvV4252lxNJKPxJ0W7l2vp4wLcOVz4ujxG1vTD47ozDbaPHbTuPFHfqwFL0DE0vS%2Fv6V3Vb%2FSjzRjdCfcAsjKLnjcU3Lsuy6peHWloHo7%2BLAEukmn6x1Gbw2gpuuGhvItKXP2Lr9kpFsM6DxMpRM75Uzs4Zkv4pClqGGgvEvvjGh4Ow9Pkjh%2FKQwZAv3NC7NSkeLma7a1HMgIdVVe9XmhAyoD0OmpfYgV%2FovVr7dG%2FNoGHugM9NGkXIROTMnBBE8jC%2FVzrk5wo11ZJ66FIv8URsbczjWpsiiS5i3%2F0WSKsdI10FrYdUgVL5phBNPZQ29NzaMn0u8vZZEfwClA6fRNQNSx4CsKLK8prhC0SYQaoAY2k%2Bd0R5Oy59tmrB9aYDLWjaU%2BvXLhPfXC5iwJZD95zASIeQSE1CdhCVWMCZaYyaq4oXsO2m4KQWXzqZY%2FucbcFaTKmvRyEGF1srKiUFRzlhzFhUjTB02A4jOo0e2nw%2BWOm7JDvKPVKUg4MIvIQfGCiMPHZiMQGOqUBtI5HNWesdIzppsYN0enMyylIIC5Q0N66418XXaSjQ3xPM1mR8dto4xyZtoVokDTNAGj4HbEDOye3vzQ%2BHFy83M6C7e9uXfd%2Fd0A7BFuq4hwIakG8LikS0PqYrTpkTxLiVDJhSpjjxRJO5Ny%2BOtdVwAh8nWyOWax%2Fl9YmeEBg0TLka9XIOSGpOZ9lqMDAPUfn42zwzuWvvG9dKgDBEnveHxfU9yXN&X-Amz-Signature=c6266d744866ade0fdbf2f5827d86a2ab21d90e359c26035580e500567eeb436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6235US%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC0Ow2LM9cmodJGNzQZnA9u3opE5auUvImtPqSyPsgpugIgeZvHU%2F3wa15A0e1Cw1I0%2FPqfhkP2GNVcV9hHku2HWNYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGgpYg%2FrFOkoSRYQMCrcA0guJFsttgM4zLr311PBOuvdF9wro39k%2FiuhVAUkRYAHgq%2BEH%2FM6e1JMyYLpnkmCOddMK1kmLzzPj5zIPIU1Gtdcy6Cjf0kb1OOZ20UYKBkEnsPNbXBK3d3rP8yvV4252lxNJKPxJ0W7l2vp4wLcOVz4ujxG1vTD47ozDbaPHbTuPFHfqwFL0DE0vS%2Fv6V3Vb%2FSjzRjdCfcAsjKLnjcU3Lsuy6peHWloHo7%2BLAEukmn6x1Gbw2gpuuGhvItKXP2Lr9kpFsM6DxMpRM75Uzs4Zkv4pClqGGgvEvvjGh4Ow9Pkjh%2FKQwZAv3NC7NSkeLma7a1HMgIdVVe9XmhAyoD0OmpfYgV%2FovVr7dG%2FNoGHugM9NGkXIROTMnBBE8jC%2FVzrk5wo11ZJ66FIv8URsbczjWpsiiS5i3%2F0WSKsdI10FrYdUgVL5phBNPZQ29NzaMn0u8vZZEfwClA6fRNQNSx4CsKLK8prhC0SYQaoAY2k%2Bd0R5Oy59tmrB9aYDLWjaU%2BvXLhPfXC5iwJZD95zASIeQSE1CdhCVWMCZaYyaq4oXsO2m4KQWXzqZY%2FucbcFaTKmvRyEGF1srKiUFRzlhzFhUjTB02A4jOo0e2nw%2BWOm7JDvKPVKUg4MIvIQfGCiMPHZiMQGOqUBtI5HNWesdIzppsYN0enMyylIIC5Q0N66418XXaSjQ3xPM1mR8dto4xyZtoVokDTNAGj4HbEDOye3vzQ%2BHFy83M6C7e9uXfd%2Fd0A7BFuq4hwIakG8LikS0PqYrTpkTxLiVDJhSpjjxRJO5Ny%2BOtdVwAh8nWyOWax%2Fl9YmeEBg0TLka9XIOSGpOZ9lqMDAPUfn42zwzuWvvG9dKgDBEnveHxfU9yXN&X-Amz-Signature=74a1fc8a88d713b9f5ed296c131414c34f24b57eafc0eff112a50b39d0c38603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6235US%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC0Ow2LM9cmodJGNzQZnA9u3opE5auUvImtPqSyPsgpugIgeZvHU%2F3wa15A0e1Cw1I0%2FPqfhkP2GNVcV9hHku2HWNYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGgpYg%2FrFOkoSRYQMCrcA0guJFsttgM4zLr311PBOuvdF9wro39k%2FiuhVAUkRYAHgq%2BEH%2FM6e1JMyYLpnkmCOddMK1kmLzzPj5zIPIU1Gtdcy6Cjf0kb1OOZ20UYKBkEnsPNbXBK3d3rP8yvV4252lxNJKPxJ0W7l2vp4wLcOVz4ujxG1vTD47ozDbaPHbTuPFHfqwFL0DE0vS%2Fv6V3Vb%2FSjzRjdCfcAsjKLnjcU3Lsuy6peHWloHo7%2BLAEukmn6x1Gbw2gpuuGhvItKXP2Lr9kpFsM6DxMpRM75Uzs4Zkv4pClqGGgvEvvjGh4Ow9Pkjh%2FKQwZAv3NC7NSkeLma7a1HMgIdVVe9XmhAyoD0OmpfYgV%2FovVr7dG%2FNoGHugM9NGkXIROTMnBBE8jC%2FVzrk5wo11ZJ66FIv8URsbczjWpsiiS5i3%2F0WSKsdI10FrYdUgVL5phBNPZQ29NzaMn0u8vZZEfwClA6fRNQNSx4CsKLK8prhC0SYQaoAY2k%2Bd0R5Oy59tmrB9aYDLWjaU%2BvXLhPfXC5iwJZD95zASIeQSE1CdhCVWMCZaYyaq4oXsO2m4KQWXzqZY%2FucbcFaTKmvRyEGF1srKiUFRzlhzFhUjTB02A4jOo0e2nw%2BWOm7JDvKPVKUg4MIvIQfGCiMPHZiMQGOqUBtI5HNWesdIzppsYN0enMyylIIC5Q0N66418XXaSjQ3xPM1mR8dto4xyZtoVokDTNAGj4HbEDOye3vzQ%2BHFy83M6C7e9uXfd%2Fd0A7BFuq4hwIakG8LikS0PqYrTpkTxLiVDJhSpjjxRJO5Ny%2BOtdVwAh8nWyOWax%2Fl9YmeEBg0TLka9XIOSGpOZ9lqMDAPUfn42zwzuWvvG9dKgDBEnveHxfU9yXN&X-Amz-Signature=5116ccc4419b6b3f5cd87d0223a1b919913d02aa0f0c7eb4d4c059984d6ca3e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6235US%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC0Ow2LM9cmodJGNzQZnA9u3opE5auUvImtPqSyPsgpugIgeZvHU%2F3wa15A0e1Cw1I0%2FPqfhkP2GNVcV9hHku2HWNYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGgpYg%2FrFOkoSRYQMCrcA0guJFsttgM4zLr311PBOuvdF9wro39k%2FiuhVAUkRYAHgq%2BEH%2FM6e1JMyYLpnkmCOddMK1kmLzzPj5zIPIU1Gtdcy6Cjf0kb1OOZ20UYKBkEnsPNbXBK3d3rP8yvV4252lxNJKPxJ0W7l2vp4wLcOVz4ujxG1vTD47ozDbaPHbTuPFHfqwFL0DE0vS%2Fv6V3Vb%2FSjzRjdCfcAsjKLnjcU3Lsuy6peHWloHo7%2BLAEukmn6x1Gbw2gpuuGhvItKXP2Lr9kpFsM6DxMpRM75Uzs4Zkv4pClqGGgvEvvjGh4Ow9Pkjh%2FKQwZAv3NC7NSkeLma7a1HMgIdVVe9XmhAyoD0OmpfYgV%2FovVr7dG%2FNoGHugM9NGkXIROTMnBBE8jC%2FVzrk5wo11ZJ66FIv8URsbczjWpsiiS5i3%2F0WSKsdI10FrYdUgVL5phBNPZQ29NzaMn0u8vZZEfwClA6fRNQNSx4CsKLK8prhC0SYQaoAY2k%2Bd0R5Oy59tmrB9aYDLWjaU%2BvXLhPfXC5iwJZD95zASIeQSE1CdhCVWMCZaYyaq4oXsO2m4KQWXzqZY%2FucbcFaTKmvRyEGF1srKiUFRzlhzFhUjTB02A4jOo0e2nw%2BWOm7JDvKPVKUg4MIvIQfGCiMPHZiMQGOqUBtI5HNWesdIzppsYN0enMyylIIC5Q0N66418XXaSjQ3xPM1mR8dto4xyZtoVokDTNAGj4HbEDOye3vzQ%2BHFy83M6C7e9uXfd%2Fd0A7BFuq4hwIakG8LikS0PqYrTpkTxLiVDJhSpjjxRJO5Ny%2BOtdVwAh8nWyOWax%2Fl9YmeEBg0TLka9XIOSGpOZ9lqMDAPUfn42zwzuWvvG9dKgDBEnveHxfU9yXN&X-Amz-Signature=3c318d757a58cbc80ee63f2d540ff49f9e644a26e88134dfd7ce66a31c07ebdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6235US%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC0Ow2LM9cmodJGNzQZnA9u3opE5auUvImtPqSyPsgpugIgeZvHU%2F3wa15A0e1Cw1I0%2FPqfhkP2GNVcV9hHku2HWNYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGgpYg%2FrFOkoSRYQMCrcA0guJFsttgM4zLr311PBOuvdF9wro39k%2FiuhVAUkRYAHgq%2BEH%2FM6e1JMyYLpnkmCOddMK1kmLzzPj5zIPIU1Gtdcy6Cjf0kb1OOZ20UYKBkEnsPNbXBK3d3rP8yvV4252lxNJKPxJ0W7l2vp4wLcOVz4ujxG1vTD47ozDbaPHbTuPFHfqwFL0DE0vS%2Fv6V3Vb%2FSjzRjdCfcAsjKLnjcU3Lsuy6peHWloHo7%2BLAEukmn6x1Gbw2gpuuGhvItKXP2Lr9kpFsM6DxMpRM75Uzs4Zkv4pClqGGgvEvvjGh4Ow9Pkjh%2FKQwZAv3NC7NSkeLma7a1HMgIdVVe9XmhAyoD0OmpfYgV%2FovVr7dG%2FNoGHugM9NGkXIROTMnBBE8jC%2FVzrk5wo11ZJ66FIv8URsbczjWpsiiS5i3%2F0WSKsdI10FrYdUgVL5phBNPZQ29NzaMn0u8vZZEfwClA6fRNQNSx4CsKLK8prhC0SYQaoAY2k%2Bd0R5Oy59tmrB9aYDLWjaU%2BvXLhPfXC5iwJZD95zASIeQSE1CdhCVWMCZaYyaq4oXsO2m4KQWXzqZY%2FucbcFaTKmvRyEGF1srKiUFRzlhzFhUjTB02A4jOo0e2nw%2BWOm7JDvKPVKUg4MIvIQfGCiMPHZiMQGOqUBtI5HNWesdIzppsYN0enMyylIIC5Q0N66418XXaSjQ3xPM1mR8dto4xyZtoVokDTNAGj4HbEDOye3vzQ%2BHFy83M6C7e9uXfd%2Fd0A7BFuq4hwIakG8LikS0PqYrTpkTxLiVDJhSpjjxRJO5Ny%2BOtdVwAh8nWyOWax%2Fl9YmeEBg0TLka9XIOSGpOZ9lqMDAPUfn42zwzuWvvG9dKgDBEnveHxfU9yXN&X-Amz-Signature=b71720cddef9e20c2fdafec59257196553c1e07fd145552e077258e4149611fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6235US%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC0Ow2LM9cmodJGNzQZnA9u3opE5auUvImtPqSyPsgpugIgeZvHU%2F3wa15A0e1Cw1I0%2FPqfhkP2GNVcV9hHku2HWNYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGgpYg%2FrFOkoSRYQMCrcA0guJFsttgM4zLr311PBOuvdF9wro39k%2FiuhVAUkRYAHgq%2BEH%2FM6e1JMyYLpnkmCOddMK1kmLzzPj5zIPIU1Gtdcy6Cjf0kb1OOZ20UYKBkEnsPNbXBK3d3rP8yvV4252lxNJKPxJ0W7l2vp4wLcOVz4ujxG1vTD47ozDbaPHbTuPFHfqwFL0DE0vS%2Fv6V3Vb%2FSjzRjdCfcAsjKLnjcU3Lsuy6peHWloHo7%2BLAEukmn6x1Gbw2gpuuGhvItKXP2Lr9kpFsM6DxMpRM75Uzs4Zkv4pClqGGgvEvvjGh4Ow9Pkjh%2FKQwZAv3NC7NSkeLma7a1HMgIdVVe9XmhAyoD0OmpfYgV%2FovVr7dG%2FNoGHugM9NGkXIROTMnBBE8jC%2FVzrk5wo11ZJ66FIv8URsbczjWpsiiS5i3%2F0WSKsdI10FrYdUgVL5phBNPZQ29NzaMn0u8vZZEfwClA6fRNQNSx4CsKLK8prhC0SYQaoAY2k%2Bd0R5Oy59tmrB9aYDLWjaU%2BvXLhPfXC5iwJZD95zASIeQSE1CdhCVWMCZaYyaq4oXsO2m4KQWXzqZY%2FucbcFaTKmvRyEGF1srKiUFRzlhzFhUjTB02A4jOo0e2nw%2BWOm7JDvKPVKUg4MIvIQfGCiMPHZiMQGOqUBtI5HNWesdIzppsYN0enMyylIIC5Q0N66418XXaSjQ3xPM1mR8dto4xyZtoVokDTNAGj4HbEDOye3vzQ%2BHFy83M6C7e9uXfd%2Fd0A7BFuq4hwIakG8LikS0PqYrTpkTxLiVDJhSpjjxRJO5Ny%2BOtdVwAh8nWyOWax%2Fl9YmeEBg0TLka9XIOSGpOZ9lqMDAPUfn42zwzuWvvG9dKgDBEnveHxfU9yXN&X-Amz-Signature=19077f36df6ae39daedad66d309a3c6f5ede6dc18c34e0ac97a741558dfc775e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6235US%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC0Ow2LM9cmodJGNzQZnA9u3opE5auUvImtPqSyPsgpugIgeZvHU%2F3wa15A0e1Cw1I0%2FPqfhkP2GNVcV9hHku2HWNYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGgpYg%2FrFOkoSRYQMCrcA0guJFsttgM4zLr311PBOuvdF9wro39k%2FiuhVAUkRYAHgq%2BEH%2FM6e1JMyYLpnkmCOddMK1kmLzzPj5zIPIU1Gtdcy6Cjf0kb1OOZ20UYKBkEnsPNbXBK3d3rP8yvV4252lxNJKPxJ0W7l2vp4wLcOVz4ujxG1vTD47ozDbaPHbTuPFHfqwFL0DE0vS%2Fv6V3Vb%2FSjzRjdCfcAsjKLnjcU3Lsuy6peHWloHo7%2BLAEukmn6x1Gbw2gpuuGhvItKXP2Lr9kpFsM6DxMpRM75Uzs4Zkv4pClqGGgvEvvjGh4Ow9Pkjh%2FKQwZAv3NC7NSkeLma7a1HMgIdVVe9XmhAyoD0OmpfYgV%2FovVr7dG%2FNoGHugM9NGkXIROTMnBBE8jC%2FVzrk5wo11ZJ66FIv8URsbczjWpsiiS5i3%2F0WSKsdI10FrYdUgVL5phBNPZQ29NzaMn0u8vZZEfwClA6fRNQNSx4CsKLK8prhC0SYQaoAY2k%2Bd0R5Oy59tmrB9aYDLWjaU%2BvXLhPfXC5iwJZD95zASIeQSE1CdhCVWMCZaYyaq4oXsO2m4KQWXzqZY%2FucbcFaTKmvRyEGF1srKiUFRzlhzFhUjTB02A4jOo0e2nw%2BWOm7JDvKPVKUg4MIvIQfGCiMPHZiMQGOqUBtI5HNWesdIzppsYN0enMyylIIC5Q0N66418XXaSjQ3xPM1mR8dto4xyZtoVokDTNAGj4HbEDOye3vzQ%2BHFy83M6C7e9uXfd%2Fd0A7BFuq4hwIakG8LikS0PqYrTpkTxLiVDJhSpjjxRJO5Ny%2BOtdVwAh8nWyOWax%2Fl9YmeEBg0TLka9XIOSGpOZ9lqMDAPUfn42zwzuWvvG9dKgDBEnveHxfU9yXN&X-Amz-Signature=fe9341efe71cef7bd1b85c7e92fac98605a29e44aa4070e4e9c89554b1ea08d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
