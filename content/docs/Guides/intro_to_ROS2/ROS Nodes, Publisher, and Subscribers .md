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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5DBMOT%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICFoEoR0ESp0MNGoFbHi0%2FTawK2WSxf2%2BJVk%2B0x0TaGCAiAY66utk592jwWmj7ZcsoMiHtvkfdoquX0rbNhIjFAZwiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFp43yUZgi%2FhhrITFKtwDyWt%2FKfuDucKR85ZJgr8rY7lj16FnlwJVt%2F7Tb5QCK%2BT6Zkm8iZU2VN1iJujJE3ftn5L6AmOT3DNTFbIrw4Ez0xv%2B60eqmt%2F4%2FyO5c4EQtcah5LKSszO1aun72GVozf0Y4JJhKyu1dEZCvsKQWv%2Bi0QfSN6RZn7lSPV0tDbvgmVONshbhh2bWo7ypMTJ9QBu2QacZKatUVQeTNBH9WWgDLlilQzUpQ6SltDNoDHBDCU5GohgUWMHOcryjwWnr3Z6LGmnW8wA2OjlURhtUbBnoAm%2FEu%2Fjn%2FvaUqUDeN0zw2agGZhRREdxSXQnALlYLb5dBUkEN7tUMtaNq8q7ts3NlmmW5WgQxlGMrH0vAltOMMuiM%2BFIMVplHEaEWAZNPlcKScpbnvcGL3A%2F61GrGVRkQ%2F2aesSymwNzxf033Z3Fh34QLihy5zT%2FfaD5GISVeJSMeEi098XbKwyLCPEAieFwHEnrPTLZJJ7WpRIkWf%2BW6eKlp2INBWBoh4FnRH09qfLMgE0yayexUiuAkkuMH3sdvx5If56d7BgpzVMrDAleUmbfhIga1AlgMwFnKcoHihsrqA2Q59XzK9numX4%2BE9Z5R0bVEDaRsp%2BZlbhJj%2BHx%2Fi0oEBMt2pEazJQ7ZhjQwlrXoyQY6pgF5CvEzec87MvKDEHW2kYFi9vu4RkmfhWN7QaGNghB23FrFLDFOjfWiyXGYtbgT2%2B%2B4TYFwdDFP0yRIFJWH%2BMVU7T2iMmNLGlgzKf2W8wmxiW%2F2rWK4sKJsSS2%2F2IivvrUWtvkH8M8s2HIJqrnX0pzHj1aQd9nf2OH9x59q7R096a5jsja1OCrA%2F5P92QXWUE9%2Fu6f7ZQLxy3QyN7lq6wYZrjPJtWn8&X-Amz-Signature=2f6555d42e30aa7b72f947455621ba0369c90f4b97f30ab31e10d89ccee9fa12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5DBMOT%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICFoEoR0ESp0MNGoFbHi0%2FTawK2WSxf2%2BJVk%2B0x0TaGCAiAY66utk592jwWmj7ZcsoMiHtvkfdoquX0rbNhIjFAZwiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFp43yUZgi%2FhhrITFKtwDyWt%2FKfuDucKR85ZJgr8rY7lj16FnlwJVt%2F7Tb5QCK%2BT6Zkm8iZU2VN1iJujJE3ftn5L6AmOT3DNTFbIrw4Ez0xv%2B60eqmt%2F4%2FyO5c4EQtcah5LKSszO1aun72GVozf0Y4JJhKyu1dEZCvsKQWv%2Bi0QfSN6RZn7lSPV0tDbvgmVONshbhh2bWo7ypMTJ9QBu2QacZKatUVQeTNBH9WWgDLlilQzUpQ6SltDNoDHBDCU5GohgUWMHOcryjwWnr3Z6LGmnW8wA2OjlURhtUbBnoAm%2FEu%2Fjn%2FvaUqUDeN0zw2agGZhRREdxSXQnALlYLb5dBUkEN7tUMtaNq8q7ts3NlmmW5WgQxlGMrH0vAltOMMuiM%2BFIMVplHEaEWAZNPlcKScpbnvcGL3A%2F61GrGVRkQ%2F2aesSymwNzxf033Z3Fh34QLihy5zT%2FfaD5GISVeJSMeEi098XbKwyLCPEAieFwHEnrPTLZJJ7WpRIkWf%2BW6eKlp2INBWBoh4FnRH09qfLMgE0yayexUiuAkkuMH3sdvx5If56d7BgpzVMrDAleUmbfhIga1AlgMwFnKcoHihsrqA2Q59XzK9numX4%2BE9Z5R0bVEDaRsp%2BZlbhJj%2BHx%2Fi0oEBMt2pEazJQ7ZhjQwlrXoyQY6pgF5CvEzec87MvKDEHW2kYFi9vu4RkmfhWN7QaGNghB23FrFLDFOjfWiyXGYtbgT2%2B%2B4TYFwdDFP0yRIFJWH%2BMVU7T2iMmNLGlgzKf2W8wmxiW%2F2rWK4sKJsSS2%2F2IivvrUWtvkH8M8s2HIJqrnX0pzHj1aQd9nf2OH9x59q7R096a5jsja1OCrA%2F5P92QXWUE9%2Fu6f7ZQLxy3QyN7lq6wYZrjPJtWn8&X-Amz-Signature=af9b2f3a88d3ba00e6524b6d3f2bc15d3958e535916650f0be6cffe84e789713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5DBMOT%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICFoEoR0ESp0MNGoFbHi0%2FTawK2WSxf2%2BJVk%2B0x0TaGCAiAY66utk592jwWmj7ZcsoMiHtvkfdoquX0rbNhIjFAZwiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFp43yUZgi%2FhhrITFKtwDyWt%2FKfuDucKR85ZJgr8rY7lj16FnlwJVt%2F7Tb5QCK%2BT6Zkm8iZU2VN1iJujJE3ftn5L6AmOT3DNTFbIrw4Ez0xv%2B60eqmt%2F4%2FyO5c4EQtcah5LKSszO1aun72GVozf0Y4JJhKyu1dEZCvsKQWv%2Bi0QfSN6RZn7lSPV0tDbvgmVONshbhh2bWo7ypMTJ9QBu2QacZKatUVQeTNBH9WWgDLlilQzUpQ6SltDNoDHBDCU5GohgUWMHOcryjwWnr3Z6LGmnW8wA2OjlURhtUbBnoAm%2FEu%2Fjn%2FvaUqUDeN0zw2agGZhRREdxSXQnALlYLb5dBUkEN7tUMtaNq8q7ts3NlmmW5WgQxlGMrH0vAltOMMuiM%2BFIMVplHEaEWAZNPlcKScpbnvcGL3A%2F61GrGVRkQ%2F2aesSymwNzxf033Z3Fh34QLihy5zT%2FfaD5GISVeJSMeEi098XbKwyLCPEAieFwHEnrPTLZJJ7WpRIkWf%2BW6eKlp2INBWBoh4FnRH09qfLMgE0yayexUiuAkkuMH3sdvx5If56d7BgpzVMrDAleUmbfhIga1AlgMwFnKcoHihsrqA2Q59XzK9numX4%2BE9Z5R0bVEDaRsp%2BZlbhJj%2BHx%2Fi0oEBMt2pEazJQ7ZhjQwlrXoyQY6pgF5CvEzec87MvKDEHW2kYFi9vu4RkmfhWN7QaGNghB23FrFLDFOjfWiyXGYtbgT2%2B%2B4TYFwdDFP0yRIFJWH%2BMVU7T2iMmNLGlgzKf2W8wmxiW%2F2rWK4sKJsSS2%2F2IivvrUWtvkH8M8s2HIJqrnX0pzHj1aQd9nf2OH9x59q7R096a5jsja1OCrA%2F5P92QXWUE9%2Fu6f7ZQLxy3QyN7lq6wYZrjPJtWn8&X-Amz-Signature=332b87249943fd5bb7eba6f2aff2096e97dab3275042c105cfcc81703fdbf188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5DBMOT%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICFoEoR0ESp0MNGoFbHi0%2FTawK2WSxf2%2BJVk%2B0x0TaGCAiAY66utk592jwWmj7ZcsoMiHtvkfdoquX0rbNhIjFAZwiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFp43yUZgi%2FhhrITFKtwDyWt%2FKfuDucKR85ZJgr8rY7lj16FnlwJVt%2F7Tb5QCK%2BT6Zkm8iZU2VN1iJujJE3ftn5L6AmOT3DNTFbIrw4Ez0xv%2B60eqmt%2F4%2FyO5c4EQtcah5LKSszO1aun72GVozf0Y4JJhKyu1dEZCvsKQWv%2Bi0QfSN6RZn7lSPV0tDbvgmVONshbhh2bWo7ypMTJ9QBu2QacZKatUVQeTNBH9WWgDLlilQzUpQ6SltDNoDHBDCU5GohgUWMHOcryjwWnr3Z6LGmnW8wA2OjlURhtUbBnoAm%2FEu%2Fjn%2FvaUqUDeN0zw2agGZhRREdxSXQnALlYLb5dBUkEN7tUMtaNq8q7ts3NlmmW5WgQxlGMrH0vAltOMMuiM%2BFIMVplHEaEWAZNPlcKScpbnvcGL3A%2F61GrGVRkQ%2F2aesSymwNzxf033Z3Fh34QLihy5zT%2FfaD5GISVeJSMeEi098XbKwyLCPEAieFwHEnrPTLZJJ7WpRIkWf%2BW6eKlp2INBWBoh4FnRH09qfLMgE0yayexUiuAkkuMH3sdvx5If56d7BgpzVMrDAleUmbfhIga1AlgMwFnKcoHihsrqA2Q59XzK9numX4%2BE9Z5R0bVEDaRsp%2BZlbhJj%2BHx%2Fi0oEBMt2pEazJQ7ZhjQwlrXoyQY6pgF5CvEzec87MvKDEHW2kYFi9vu4RkmfhWN7QaGNghB23FrFLDFOjfWiyXGYtbgT2%2B%2B4TYFwdDFP0yRIFJWH%2BMVU7T2iMmNLGlgzKf2W8wmxiW%2F2rWK4sKJsSS2%2F2IivvrUWtvkH8M8s2HIJqrnX0pzHj1aQd9nf2OH9x59q7R096a5jsja1OCrA%2F5P92QXWUE9%2Fu6f7ZQLxy3QyN7lq6wYZrjPJtWn8&X-Amz-Signature=b9d490c132179a85ddee5888d503a173d02bc3421833ea2ee514a44016deba81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5DBMOT%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICFoEoR0ESp0MNGoFbHi0%2FTawK2WSxf2%2BJVk%2B0x0TaGCAiAY66utk592jwWmj7ZcsoMiHtvkfdoquX0rbNhIjFAZwiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFp43yUZgi%2FhhrITFKtwDyWt%2FKfuDucKR85ZJgr8rY7lj16FnlwJVt%2F7Tb5QCK%2BT6Zkm8iZU2VN1iJujJE3ftn5L6AmOT3DNTFbIrw4Ez0xv%2B60eqmt%2F4%2FyO5c4EQtcah5LKSszO1aun72GVozf0Y4JJhKyu1dEZCvsKQWv%2Bi0QfSN6RZn7lSPV0tDbvgmVONshbhh2bWo7ypMTJ9QBu2QacZKatUVQeTNBH9WWgDLlilQzUpQ6SltDNoDHBDCU5GohgUWMHOcryjwWnr3Z6LGmnW8wA2OjlURhtUbBnoAm%2FEu%2Fjn%2FvaUqUDeN0zw2agGZhRREdxSXQnALlYLb5dBUkEN7tUMtaNq8q7ts3NlmmW5WgQxlGMrH0vAltOMMuiM%2BFIMVplHEaEWAZNPlcKScpbnvcGL3A%2F61GrGVRkQ%2F2aesSymwNzxf033Z3Fh34QLihy5zT%2FfaD5GISVeJSMeEi098XbKwyLCPEAieFwHEnrPTLZJJ7WpRIkWf%2BW6eKlp2INBWBoh4FnRH09qfLMgE0yayexUiuAkkuMH3sdvx5If56d7BgpzVMrDAleUmbfhIga1AlgMwFnKcoHihsrqA2Q59XzK9numX4%2BE9Z5R0bVEDaRsp%2BZlbhJj%2BHx%2Fi0oEBMt2pEazJQ7ZhjQwlrXoyQY6pgF5CvEzec87MvKDEHW2kYFi9vu4RkmfhWN7QaGNghB23FrFLDFOjfWiyXGYtbgT2%2B%2B4TYFwdDFP0yRIFJWH%2BMVU7T2iMmNLGlgzKf2W8wmxiW%2F2rWK4sKJsSS2%2F2IivvrUWtvkH8M8s2HIJqrnX0pzHj1aQd9nf2OH9x59q7R096a5jsja1OCrA%2F5P92QXWUE9%2Fu6f7ZQLxy3QyN7lq6wYZrjPJtWn8&X-Amz-Signature=b9041e3c91528d68e1519cb22fd7c4f0af7d346813701693cd3d93ae2bf6ef17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5DBMOT%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICFoEoR0ESp0MNGoFbHi0%2FTawK2WSxf2%2BJVk%2B0x0TaGCAiAY66utk592jwWmj7ZcsoMiHtvkfdoquX0rbNhIjFAZwiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFp43yUZgi%2FhhrITFKtwDyWt%2FKfuDucKR85ZJgr8rY7lj16FnlwJVt%2F7Tb5QCK%2BT6Zkm8iZU2VN1iJujJE3ftn5L6AmOT3DNTFbIrw4Ez0xv%2B60eqmt%2F4%2FyO5c4EQtcah5LKSszO1aun72GVozf0Y4JJhKyu1dEZCvsKQWv%2Bi0QfSN6RZn7lSPV0tDbvgmVONshbhh2bWo7ypMTJ9QBu2QacZKatUVQeTNBH9WWgDLlilQzUpQ6SltDNoDHBDCU5GohgUWMHOcryjwWnr3Z6LGmnW8wA2OjlURhtUbBnoAm%2FEu%2Fjn%2FvaUqUDeN0zw2agGZhRREdxSXQnALlYLb5dBUkEN7tUMtaNq8q7ts3NlmmW5WgQxlGMrH0vAltOMMuiM%2BFIMVplHEaEWAZNPlcKScpbnvcGL3A%2F61GrGVRkQ%2F2aesSymwNzxf033Z3Fh34QLihy5zT%2FfaD5GISVeJSMeEi098XbKwyLCPEAieFwHEnrPTLZJJ7WpRIkWf%2BW6eKlp2INBWBoh4FnRH09qfLMgE0yayexUiuAkkuMH3sdvx5If56d7BgpzVMrDAleUmbfhIga1AlgMwFnKcoHihsrqA2Q59XzK9numX4%2BE9Z5R0bVEDaRsp%2BZlbhJj%2BHx%2Fi0oEBMt2pEazJQ7ZhjQwlrXoyQY6pgF5CvEzec87MvKDEHW2kYFi9vu4RkmfhWN7QaGNghB23FrFLDFOjfWiyXGYtbgT2%2B%2B4TYFwdDFP0yRIFJWH%2BMVU7T2iMmNLGlgzKf2W8wmxiW%2F2rWK4sKJsSS2%2F2IivvrUWtvkH8M8s2HIJqrnX0pzHj1aQd9nf2OH9x59q7R096a5jsja1OCrA%2F5P92QXWUE9%2Fu6f7ZQLxy3QyN7lq6wYZrjPJtWn8&X-Amz-Signature=669fe221e47b26088a8196a5c4643d74995a6c250c045c915dafcdd9a1b53694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5DBMOT%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICFoEoR0ESp0MNGoFbHi0%2FTawK2WSxf2%2BJVk%2B0x0TaGCAiAY66utk592jwWmj7ZcsoMiHtvkfdoquX0rbNhIjFAZwiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFp43yUZgi%2FhhrITFKtwDyWt%2FKfuDucKR85ZJgr8rY7lj16FnlwJVt%2F7Tb5QCK%2BT6Zkm8iZU2VN1iJujJE3ftn5L6AmOT3DNTFbIrw4Ez0xv%2B60eqmt%2F4%2FyO5c4EQtcah5LKSszO1aun72GVozf0Y4JJhKyu1dEZCvsKQWv%2Bi0QfSN6RZn7lSPV0tDbvgmVONshbhh2bWo7ypMTJ9QBu2QacZKatUVQeTNBH9WWgDLlilQzUpQ6SltDNoDHBDCU5GohgUWMHOcryjwWnr3Z6LGmnW8wA2OjlURhtUbBnoAm%2FEu%2Fjn%2FvaUqUDeN0zw2agGZhRREdxSXQnALlYLb5dBUkEN7tUMtaNq8q7ts3NlmmW5WgQxlGMrH0vAltOMMuiM%2BFIMVplHEaEWAZNPlcKScpbnvcGL3A%2F61GrGVRkQ%2F2aesSymwNzxf033Z3Fh34QLihy5zT%2FfaD5GISVeJSMeEi098XbKwyLCPEAieFwHEnrPTLZJJ7WpRIkWf%2BW6eKlp2INBWBoh4FnRH09qfLMgE0yayexUiuAkkuMH3sdvx5If56d7BgpzVMrDAleUmbfhIga1AlgMwFnKcoHihsrqA2Q59XzK9numX4%2BE9Z5R0bVEDaRsp%2BZlbhJj%2BHx%2Fi0oEBMt2pEazJQ7ZhjQwlrXoyQY6pgF5CvEzec87MvKDEHW2kYFi9vu4RkmfhWN7QaGNghB23FrFLDFOjfWiyXGYtbgT2%2B%2B4TYFwdDFP0yRIFJWH%2BMVU7T2iMmNLGlgzKf2W8wmxiW%2F2rWK4sKJsSS2%2F2IivvrUWtvkH8M8s2HIJqrnX0pzHj1aQd9nf2OH9x59q7R096a5jsja1OCrA%2F5P92QXWUE9%2Fu6f7ZQLxy3QyN7lq6wYZrjPJtWn8&X-Amz-Signature=ade81f1c019fbf3933e3e950ceb4b015699eda68d15c53a5c1c28f08c55b4723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5DBMOT%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICFoEoR0ESp0MNGoFbHi0%2FTawK2WSxf2%2BJVk%2B0x0TaGCAiAY66utk592jwWmj7ZcsoMiHtvkfdoquX0rbNhIjFAZwiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFp43yUZgi%2FhhrITFKtwDyWt%2FKfuDucKR85ZJgr8rY7lj16FnlwJVt%2F7Tb5QCK%2BT6Zkm8iZU2VN1iJujJE3ftn5L6AmOT3DNTFbIrw4Ez0xv%2B60eqmt%2F4%2FyO5c4EQtcah5LKSszO1aun72GVozf0Y4JJhKyu1dEZCvsKQWv%2Bi0QfSN6RZn7lSPV0tDbvgmVONshbhh2bWo7ypMTJ9QBu2QacZKatUVQeTNBH9WWgDLlilQzUpQ6SltDNoDHBDCU5GohgUWMHOcryjwWnr3Z6LGmnW8wA2OjlURhtUbBnoAm%2FEu%2Fjn%2FvaUqUDeN0zw2agGZhRREdxSXQnALlYLb5dBUkEN7tUMtaNq8q7ts3NlmmW5WgQxlGMrH0vAltOMMuiM%2BFIMVplHEaEWAZNPlcKScpbnvcGL3A%2F61GrGVRkQ%2F2aesSymwNzxf033Z3Fh34QLihy5zT%2FfaD5GISVeJSMeEi098XbKwyLCPEAieFwHEnrPTLZJJ7WpRIkWf%2BW6eKlp2INBWBoh4FnRH09qfLMgE0yayexUiuAkkuMH3sdvx5If56d7BgpzVMrDAleUmbfhIga1AlgMwFnKcoHihsrqA2Q59XzK9numX4%2BE9Z5R0bVEDaRsp%2BZlbhJj%2BHx%2Fi0oEBMt2pEazJQ7ZhjQwlrXoyQY6pgF5CvEzec87MvKDEHW2kYFi9vu4RkmfhWN7QaGNghB23FrFLDFOjfWiyXGYtbgT2%2B%2B4TYFwdDFP0yRIFJWH%2BMVU7T2iMmNLGlgzKf2W8wmxiW%2F2rWK4sKJsSS2%2F2IivvrUWtvkH8M8s2HIJqrnX0pzHj1aQd9nf2OH9x59q7R096a5jsja1OCrA%2F5P92QXWUE9%2Fu6f7ZQLxy3QyN7lq6wYZrjPJtWn8&X-Amz-Signature=af0fbdb7e9bf8cd1687efea1639965096119dc41c139b1fa1319796285a52929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
