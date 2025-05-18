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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDAO7EG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqe0hwjglathMegGTAAhIB6Qx8wGGOB08ayAHI6EZjPAIhAODW9V9Mzp8kjcLvAN4%2FgeHV2n1fbRUWW03bwhCkYRKnKv8DCHIQABoMNjM3NDIzMTgzODA1IgxwXtObFMXyTJ7TLqcq3AMW8ZbvKrNPjTmOrI38%2FQq45I383tCOWC%2FVYCF4qLhQWTANBmGeBP37tZq0ffekPoYNgn6ou7sZ54dgo3F%2F%2BZStXPoArgdsHW6Sydp5jzVyf4AMJtGDqP0o6YkmX%2Bn3OKV%2BeWzNHjOagRXkoBHQXxjLkkyTOTN5AbGmbMToMPTBZ9OGlVHpi93Lf337tu6IJRHYTKd9tJViRzmNNKcH733GBQ7GC7N2jAjjzcnpwVKou2nnFJJzAgC68x2WdlGXaSDHlQGTRr490RiLDgBVoF4oOALwm%2FZEnYZx5k5Pbe2X0BbKKBJM4By6j4OxCZB%2FL4QX8CdKDw5OvgGmsKlZp%2FlUW0u8vbcpZEtATaDj2eL59c%2BCE4RemBErOWNx%2BxgenB2jzYKW54Z1UdcvI9A2xPF%2F3jb6zs4D%2BHo2un8Yviyzr0YAsYRzSka6s607qAZ4Op60ILYxd6n%2FLtZsgYO%2FjkHeX0%2FenPNPo13JfUAhoYowyDRGJ3Ofm84zzRNI%2BS69%2BODyzW8xUNnmwg5Inad%2BA2F2p%2FxGYxR27rGUiH2LwZK%2BkqOfAwDalaF988NWeO60KiJpB0fXCe54chMMrYcK5ufeqawCad%2BjvCxxeWCezFOs4dIfkf66WqfPNyKBmjD3zKbBBjqkAZ%2FNBasUxZV%2FQI5xbd4B9htUzCn80X%2FnXU1CyySCEHTPqB9826IVF30Ee2YupEq5ycvLgPQsQCK6XwbUhTe5r8%2FxHOjAwDbb%2Bd%2FLiPK5DihDaQDTbR1HMakqJsj%2BWmZbP5rGBwQKwNVbWqyUeSHMIqM%2Bvr7tghFCLZrknbmeRx4pyjKyHabhQXKc6xzC%2B6Dr5dHWIz0DaCv7Ymx5%2FgWt%2BvXv8FWs&X-Amz-Signature=453844d3eb19274b80f012f5b54b6720125a43b5f81a227231950fed104b4178&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDAO7EG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqe0hwjglathMegGTAAhIB6Qx8wGGOB08ayAHI6EZjPAIhAODW9V9Mzp8kjcLvAN4%2FgeHV2n1fbRUWW03bwhCkYRKnKv8DCHIQABoMNjM3NDIzMTgzODA1IgxwXtObFMXyTJ7TLqcq3AMW8ZbvKrNPjTmOrI38%2FQq45I383tCOWC%2FVYCF4qLhQWTANBmGeBP37tZq0ffekPoYNgn6ou7sZ54dgo3F%2F%2BZStXPoArgdsHW6Sydp5jzVyf4AMJtGDqP0o6YkmX%2Bn3OKV%2BeWzNHjOagRXkoBHQXxjLkkyTOTN5AbGmbMToMPTBZ9OGlVHpi93Lf337tu6IJRHYTKd9tJViRzmNNKcH733GBQ7GC7N2jAjjzcnpwVKou2nnFJJzAgC68x2WdlGXaSDHlQGTRr490RiLDgBVoF4oOALwm%2FZEnYZx5k5Pbe2X0BbKKBJM4By6j4OxCZB%2FL4QX8CdKDw5OvgGmsKlZp%2FlUW0u8vbcpZEtATaDj2eL59c%2BCE4RemBErOWNx%2BxgenB2jzYKW54Z1UdcvI9A2xPF%2F3jb6zs4D%2BHo2un8Yviyzr0YAsYRzSka6s607qAZ4Op60ILYxd6n%2FLtZsgYO%2FjkHeX0%2FenPNPo13JfUAhoYowyDRGJ3Ofm84zzRNI%2BS69%2BODyzW8xUNnmwg5Inad%2BA2F2p%2FxGYxR27rGUiH2LwZK%2BkqOfAwDalaF988NWeO60KiJpB0fXCe54chMMrYcK5ufeqawCad%2BjvCxxeWCezFOs4dIfkf66WqfPNyKBmjD3zKbBBjqkAZ%2FNBasUxZV%2FQI5xbd4B9htUzCn80X%2FnXU1CyySCEHTPqB9826IVF30Ee2YupEq5ycvLgPQsQCK6XwbUhTe5r8%2FxHOjAwDbb%2Bd%2FLiPK5DihDaQDTbR1HMakqJsj%2BWmZbP5rGBwQKwNVbWqyUeSHMIqM%2Bvr7tghFCLZrknbmeRx4pyjKyHabhQXKc6xzC%2B6Dr5dHWIz0DaCv7Ymx5%2FgWt%2BvXv8FWs&X-Amz-Signature=f2da33e13788b6c917a6f33f62e8dd02e3a3adda4460c2a23d8b8c6a349b0c68&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDAO7EG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqe0hwjglathMegGTAAhIB6Qx8wGGOB08ayAHI6EZjPAIhAODW9V9Mzp8kjcLvAN4%2FgeHV2n1fbRUWW03bwhCkYRKnKv8DCHIQABoMNjM3NDIzMTgzODA1IgxwXtObFMXyTJ7TLqcq3AMW8ZbvKrNPjTmOrI38%2FQq45I383tCOWC%2FVYCF4qLhQWTANBmGeBP37tZq0ffekPoYNgn6ou7sZ54dgo3F%2F%2BZStXPoArgdsHW6Sydp5jzVyf4AMJtGDqP0o6YkmX%2Bn3OKV%2BeWzNHjOagRXkoBHQXxjLkkyTOTN5AbGmbMToMPTBZ9OGlVHpi93Lf337tu6IJRHYTKd9tJViRzmNNKcH733GBQ7GC7N2jAjjzcnpwVKou2nnFJJzAgC68x2WdlGXaSDHlQGTRr490RiLDgBVoF4oOALwm%2FZEnYZx5k5Pbe2X0BbKKBJM4By6j4OxCZB%2FL4QX8CdKDw5OvgGmsKlZp%2FlUW0u8vbcpZEtATaDj2eL59c%2BCE4RemBErOWNx%2BxgenB2jzYKW54Z1UdcvI9A2xPF%2F3jb6zs4D%2BHo2un8Yviyzr0YAsYRzSka6s607qAZ4Op60ILYxd6n%2FLtZsgYO%2FjkHeX0%2FenPNPo13JfUAhoYowyDRGJ3Ofm84zzRNI%2BS69%2BODyzW8xUNnmwg5Inad%2BA2F2p%2FxGYxR27rGUiH2LwZK%2BkqOfAwDalaF988NWeO60KiJpB0fXCe54chMMrYcK5ufeqawCad%2BjvCxxeWCezFOs4dIfkf66WqfPNyKBmjD3zKbBBjqkAZ%2FNBasUxZV%2FQI5xbd4B9htUzCn80X%2FnXU1CyySCEHTPqB9826IVF30Ee2YupEq5ycvLgPQsQCK6XwbUhTe5r8%2FxHOjAwDbb%2Bd%2FLiPK5DihDaQDTbR1HMakqJsj%2BWmZbP5rGBwQKwNVbWqyUeSHMIqM%2Bvr7tghFCLZrknbmeRx4pyjKyHabhQXKc6xzC%2B6Dr5dHWIz0DaCv7Ymx5%2FgWt%2BvXv8FWs&X-Amz-Signature=14609cc00e41d64c4a797a6dec68e45d19b1de6121e5ba3395a30965191f1b61&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDAO7EG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqe0hwjglathMegGTAAhIB6Qx8wGGOB08ayAHI6EZjPAIhAODW9V9Mzp8kjcLvAN4%2FgeHV2n1fbRUWW03bwhCkYRKnKv8DCHIQABoMNjM3NDIzMTgzODA1IgxwXtObFMXyTJ7TLqcq3AMW8ZbvKrNPjTmOrI38%2FQq45I383tCOWC%2FVYCF4qLhQWTANBmGeBP37tZq0ffekPoYNgn6ou7sZ54dgo3F%2F%2BZStXPoArgdsHW6Sydp5jzVyf4AMJtGDqP0o6YkmX%2Bn3OKV%2BeWzNHjOagRXkoBHQXxjLkkyTOTN5AbGmbMToMPTBZ9OGlVHpi93Lf337tu6IJRHYTKd9tJViRzmNNKcH733GBQ7GC7N2jAjjzcnpwVKou2nnFJJzAgC68x2WdlGXaSDHlQGTRr490RiLDgBVoF4oOALwm%2FZEnYZx5k5Pbe2X0BbKKBJM4By6j4OxCZB%2FL4QX8CdKDw5OvgGmsKlZp%2FlUW0u8vbcpZEtATaDj2eL59c%2BCE4RemBErOWNx%2BxgenB2jzYKW54Z1UdcvI9A2xPF%2F3jb6zs4D%2BHo2un8Yviyzr0YAsYRzSka6s607qAZ4Op60ILYxd6n%2FLtZsgYO%2FjkHeX0%2FenPNPo13JfUAhoYowyDRGJ3Ofm84zzRNI%2BS69%2BODyzW8xUNnmwg5Inad%2BA2F2p%2FxGYxR27rGUiH2LwZK%2BkqOfAwDalaF988NWeO60KiJpB0fXCe54chMMrYcK5ufeqawCad%2BjvCxxeWCezFOs4dIfkf66WqfPNyKBmjD3zKbBBjqkAZ%2FNBasUxZV%2FQI5xbd4B9htUzCn80X%2FnXU1CyySCEHTPqB9826IVF30Ee2YupEq5ycvLgPQsQCK6XwbUhTe5r8%2FxHOjAwDbb%2Bd%2FLiPK5DihDaQDTbR1HMakqJsj%2BWmZbP5rGBwQKwNVbWqyUeSHMIqM%2Bvr7tghFCLZrknbmeRx4pyjKyHabhQXKc6xzC%2B6Dr5dHWIz0DaCv7Ymx5%2FgWt%2BvXv8FWs&X-Amz-Signature=1b51377dca15dc5ec4a2962e2ad89d56f027b98d7ccd8ab890926bb8614e63b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDAO7EG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqe0hwjglathMegGTAAhIB6Qx8wGGOB08ayAHI6EZjPAIhAODW9V9Mzp8kjcLvAN4%2FgeHV2n1fbRUWW03bwhCkYRKnKv8DCHIQABoMNjM3NDIzMTgzODA1IgxwXtObFMXyTJ7TLqcq3AMW8ZbvKrNPjTmOrI38%2FQq45I383tCOWC%2FVYCF4qLhQWTANBmGeBP37tZq0ffekPoYNgn6ou7sZ54dgo3F%2F%2BZStXPoArgdsHW6Sydp5jzVyf4AMJtGDqP0o6YkmX%2Bn3OKV%2BeWzNHjOagRXkoBHQXxjLkkyTOTN5AbGmbMToMPTBZ9OGlVHpi93Lf337tu6IJRHYTKd9tJViRzmNNKcH733GBQ7GC7N2jAjjzcnpwVKou2nnFJJzAgC68x2WdlGXaSDHlQGTRr490RiLDgBVoF4oOALwm%2FZEnYZx5k5Pbe2X0BbKKBJM4By6j4OxCZB%2FL4QX8CdKDw5OvgGmsKlZp%2FlUW0u8vbcpZEtATaDj2eL59c%2BCE4RemBErOWNx%2BxgenB2jzYKW54Z1UdcvI9A2xPF%2F3jb6zs4D%2BHo2un8Yviyzr0YAsYRzSka6s607qAZ4Op60ILYxd6n%2FLtZsgYO%2FjkHeX0%2FenPNPo13JfUAhoYowyDRGJ3Ofm84zzRNI%2BS69%2BODyzW8xUNnmwg5Inad%2BA2F2p%2FxGYxR27rGUiH2LwZK%2BkqOfAwDalaF988NWeO60KiJpB0fXCe54chMMrYcK5ufeqawCad%2BjvCxxeWCezFOs4dIfkf66WqfPNyKBmjD3zKbBBjqkAZ%2FNBasUxZV%2FQI5xbd4B9htUzCn80X%2FnXU1CyySCEHTPqB9826IVF30Ee2YupEq5ycvLgPQsQCK6XwbUhTe5r8%2FxHOjAwDbb%2Bd%2FLiPK5DihDaQDTbR1HMakqJsj%2BWmZbP5rGBwQKwNVbWqyUeSHMIqM%2Bvr7tghFCLZrknbmeRx4pyjKyHabhQXKc6xzC%2B6Dr5dHWIz0DaCv7Ymx5%2FgWt%2BvXv8FWs&X-Amz-Signature=fdc544890f48f3911c736e5845d1cfb7d95d3e198968957e521209d732164707&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDAO7EG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqe0hwjglathMegGTAAhIB6Qx8wGGOB08ayAHI6EZjPAIhAODW9V9Mzp8kjcLvAN4%2FgeHV2n1fbRUWW03bwhCkYRKnKv8DCHIQABoMNjM3NDIzMTgzODA1IgxwXtObFMXyTJ7TLqcq3AMW8ZbvKrNPjTmOrI38%2FQq45I383tCOWC%2FVYCF4qLhQWTANBmGeBP37tZq0ffekPoYNgn6ou7sZ54dgo3F%2F%2BZStXPoArgdsHW6Sydp5jzVyf4AMJtGDqP0o6YkmX%2Bn3OKV%2BeWzNHjOagRXkoBHQXxjLkkyTOTN5AbGmbMToMPTBZ9OGlVHpi93Lf337tu6IJRHYTKd9tJViRzmNNKcH733GBQ7GC7N2jAjjzcnpwVKou2nnFJJzAgC68x2WdlGXaSDHlQGTRr490RiLDgBVoF4oOALwm%2FZEnYZx5k5Pbe2X0BbKKBJM4By6j4OxCZB%2FL4QX8CdKDw5OvgGmsKlZp%2FlUW0u8vbcpZEtATaDj2eL59c%2BCE4RemBErOWNx%2BxgenB2jzYKW54Z1UdcvI9A2xPF%2F3jb6zs4D%2BHo2un8Yviyzr0YAsYRzSka6s607qAZ4Op60ILYxd6n%2FLtZsgYO%2FjkHeX0%2FenPNPo13JfUAhoYowyDRGJ3Ofm84zzRNI%2BS69%2BODyzW8xUNnmwg5Inad%2BA2F2p%2FxGYxR27rGUiH2LwZK%2BkqOfAwDalaF988NWeO60KiJpB0fXCe54chMMrYcK5ufeqawCad%2BjvCxxeWCezFOs4dIfkf66WqfPNyKBmjD3zKbBBjqkAZ%2FNBasUxZV%2FQI5xbd4B9htUzCn80X%2FnXU1CyySCEHTPqB9826IVF30Ee2YupEq5ycvLgPQsQCK6XwbUhTe5r8%2FxHOjAwDbb%2Bd%2FLiPK5DihDaQDTbR1HMakqJsj%2BWmZbP5rGBwQKwNVbWqyUeSHMIqM%2Bvr7tghFCLZrknbmeRx4pyjKyHabhQXKc6xzC%2B6Dr5dHWIz0DaCv7Ymx5%2FgWt%2BvXv8FWs&X-Amz-Signature=692e231f01045db8dd7289110a85f69c59a62c665bda0e65841d50dbc74ff476&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDAO7EG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqe0hwjglathMegGTAAhIB6Qx8wGGOB08ayAHI6EZjPAIhAODW9V9Mzp8kjcLvAN4%2FgeHV2n1fbRUWW03bwhCkYRKnKv8DCHIQABoMNjM3NDIzMTgzODA1IgxwXtObFMXyTJ7TLqcq3AMW8ZbvKrNPjTmOrI38%2FQq45I383tCOWC%2FVYCF4qLhQWTANBmGeBP37tZq0ffekPoYNgn6ou7sZ54dgo3F%2F%2BZStXPoArgdsHW6Sydp5jzVyf4AMJtGDqP0o6YkmX%2Bn3OKV%2BeWzNHjOagRXkoBHQXxjLkkyTOTN5AbGmbMToMPTBZ9OGlVHpi93Lf337tu6IJRHYTKd9tJViRzmNNKcH733GBQ7GC7N2jAjjzcnpwVKou2nnFJJzAgC68x2WdlGXaSDHlQGTRr490RiLDgBVoF4oOALwm%2FZEnYZx5k5Pbe2X0BbKKBJM4By6j4OxCZB%2FL4QX8CdKDw5OvgGmsKlZp%2FlUW0u8vbcpZEtATaDj2eL59c%2BCE4RemBErOWNx%2BxgenB2jzYKW54Z1UdcvI9A2xPF%2F3jb6zs4D%2BHo2un8Yviyzr0YAsYRzSka6s607qAZ4Op60ILYxd6n%2FLtZsgYO%2FjkHeX0%2FenPNPo13JfUAhoYowyDRGJ3Ofm84zzRNI%2BS69%2BODyzW8xUNnmwg5Inad%2BA2F2p%2FxGYxR27rGUiH2LwZK%2BkqOfAwDalaF988NWeO60KiJpB0fXCe54chMMrYcK5ufeqawCad%2BjvCxxeWCezFOs4dIfkf66WqfPNyKBmjD3zKbBBjqkAZ%2FNBasUxZV%2FQI5xbd4B9htUzCn80X%2FnXU1CyySCEHTPqB9826IVF30Ee2YupEq5ycvLgPQsQCK6XwbUhTe5r8%2FxHOjAwDbb%2Bd%2FLiPK5DihDaQDTbR1HMakqJsj%2BWmZbP5rGBwQKwNVbWqyUeSHMIqM%2Bvr7tghFCLZrknbmeRx4pyjKyHabhQXKc6xzC%2B6Dr5dHWIz0DaCv7Ymx5%2FgWt%2BvXv8FWs&X-Amz-Signature=fc38f53abdcfe9404e08089812535cca6a81175b7c5391c1ec75762735a1fbbd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDAO7EG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqe0hwjglathMegGTAAhIB6Qx8wGGOB08ayAHI6EZjPAIhAODW9V9Mzp8kjcLvAN4%2FgeHV2n1fbRUWW03bwhCkYRKnKv8DCHIQABoMNjM3NDIzMTgzODA1IgxwXtObFMXyTJ7TLqcq3AMW8ZbvKrNPjTmOrI38%2FQq45I383tCOWC%2FVYCF4qLhQWTANBmGeBP37tZq0ffekPoYNgn6ou7sZ54dgo3F%2F%2BZStXPoArgdsHW6Sydp5jzVyf4AMJtGDqP0o6YkmX%2Bn3OKV%2BeWzNHjOagRXkoBHQXxjLkkyTOTN5AbGmbMToMPTBZ9OGlVHpi93Lf337tu6IJRHYTKd9tJViRzmNNKcH733GBQ7GC7N2jAjjzcnpwVKou2nnFJJzAgC68x2WdlGXaSDHlQGTRr490RiLDgBVoF4oOALwm%2FZEnYZx5k5Pbe2X0BbKKBJM4By6j4OxCZB%2FL4QX8CdKDw5OvgGmsKlZp%2FlUW0u8vbcpZEtATaDj2eL59c%2BCE4RemBErOWNx%2BxgenB2jzYKW54Z1UdcvI9A2xPF%2F3jb6zs4D%2BHo2un8Yviyzr0YAsYRzSka6s607qAZ4Op60ILYxd6n%2FLtZsgYO%2FjkHeX0%2FenPNPo13JfUAhoYowyDRGJ3Ofm84zzRNI%2BS69%2BODyzW8xUNnmwg5Inad%2BA2F2p%2FxGYxR27rGUiH2LwZK%2BkqOfAwDalaF988NWeO60KiJpB0fXCe54chMMrYcK5ufeqawCad%2BjvCxxeWCezFOs4dIfkf66WqfPNyKBmjD3zKbBBjqkAZ%2FNBasUxZV%2FQI5xbd4B9htUzCn80X%2FnXU1CyySCEHTPqB9826IVF30Ee2YupEq5ycvLgPQsQCK6XwbUhTe5r8%2FxHOjAwDbb%2Bd%2FLiPK5DihDaQDTbR1HMakqJsj%2BWmZbP5rGBwQKwNVbWqyUeSHMIqM%2Bvr7tghFCLZrknbmeRx4pyjKyHabhQXKc6xzC%2B6Dr5dHWIz0DaCv7Ymx5%2FgWt%2BvXv8FWs&X-Amz-Signature=c8ec52f9759e3b9132c37393ed3af62c8dceaa0896d467a8e28572a6e519d597&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
