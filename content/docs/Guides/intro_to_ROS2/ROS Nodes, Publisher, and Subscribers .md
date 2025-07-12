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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L6FJJF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbkx86U593MC4iofq9%2B%2FS4ItbRO7DhWwe4IrWFoqHfQAiA1XpcNwa6Z9dIa8kEcyER8462c54v1d32TML1GZPmO0iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNeHbaTCV%2BWLZyZpKtwDFBkTyCGEHEFkiKLgzpbLnkClQgZ8hMb2z9Y1nHdaSufvZ1LdVMz1DuBLonMhpq0LziT6wWTdnfQdQT61Gg1cGBJINW6cVK4dix%2BL56Ms7OQcRe8XWbb5dFtzsKdaPYTAgR7IzKWP4e3OJ14%2BddldTudWNLDEBSJ6Pa5x9J%2BHo%2BfdgmucEYxBKuoMga9mRbSSAYKN9Z6h2SBGi%2BDqMf%2BgCqV3ZuDRm%2BP2JbJ6oAajdUC3YvdKqjE7UWLHBHyLkQwEcvCEQuhVs6sSdtzk0TzAZztNFaVc6JyNNbArjZ6eECWpXFP5H%2FYvdpslwLI4uprd83SnjRNjxIX1Pm1IwirmzcydinwskXD19ntaUIrwYvZpcXUAxzSQgJGupVWDX26alOWyxPGfiVNZAzKUBPE4TwuPbcvcYP4toU4UVLJqmXM%2Boj06UWAP0sDphXDyx7vS%2BYYNB%2BoX7q2ZwaHCC93HObBIbJhBfdcXyaR8WUyS9y6xY8CVnpznRMSiQ4A3DOnI%2FVgFfQBliqPSMA6esEckgP%2BO80SCW7FozI9AUrh28%2BqhyQd8kqcXk%2BOiYW7oUqkIDkYpkwqcLFxy8Ho2Qo8J05Q2uLcx%2BEMx4N6U%2BdBOiwmyrBdBzwpliwVSgSownrXGwwY6pgHUrcKKZGGubyvP8%2BQZcndkWgflLnziSfAj2zrQ%2BjUZOmAeeZ2%2FbQXKeSDm5CrPjDcoOlLAS1Kj8JuWoiQzgMiSca2GqKRR9ygb8QEVs0a2s0vuPV0V3Kbh%2F62DU5jrt1OwAW6ZZWFJidS8oOPPtJH0hnm0Kw3V2CtszXePMhO9bJ77rY2FsXyXigr2KZi8z56m6Bq8gIPdWYwhDJLWTOXe%2BFpMGBsm&X-Amz-Signature=3a8c4500cb1fdce241359a609e4ea7aac34f2b4c7f1e1c4d67da2b8139a75a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L6FJJF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbkx86U593MC4iofq9%2B%2FS4ItbRO7DhWwe4IrWFoqHfQAiA1XpcNwa6Z9dIa8kEcyER8462c54v1d32TML1GZPmO0iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNeHbaTCV%2BWLZyZpKtwDFBkTyCGEHEFkiKLgzpbLnkClQgZ8hMb2z9Y1nHdaSufvZ1LdVMz1DuBLonMhpq0LziT6wWTdnfQdQT61Gg1cGBJINW6cVK4dix%2BL56Ms7OQcRe8XWbb5dFtzsKdaPYTAgR7IzKWP4e3OJ14%2BddldTudWNLDEBSJ6Pa5x9J%2BHo%2BfdgmucEYxBKuoMga9mRbSSAYKN9Z6h2SBGi%2BDqMf%2BgCqV3ZuDRm%2BP2JbJ6oAajdUC3YvdKqjE7UWLHBHyLkQwEcvCEQuhVs6sSdtzk0TzAZztNFaVc6JyNNbArjZ6eECWpXFP5H%2FYvdpslwLI4uprd83SnjRNjxIX1Pm1IwirmzcydinwskXD19ntaUIrwYvZpcXUAxzSQgJGupVWDX26alOWyxPGfiVNZAzKUBPE4TwuPbcvcYP4toU4UVLJqmXM%2Boj06UWAP0sDphXDyx7vS%2BYYNB%2BoX7q2ZwaHCC93HObBIbJhBfdcXyaR8WUyS9y6xY8CVnpznRMSiQ4A3DOnI%2FVgFfQBliqPSMA6esEckgP%2BO80SCW7FozI9AUrh28%2BqhyQd8kqcXk%2BOiYW7oUqkIDkYpkwqcLFxy8Ho2Qo8J05Q2uLcx%2BEMx4N6U%2BdBOiwmyrBdBzwpliwVSgSownrXGwwY6pgHUrcKKZGGubyvP8%2BQZcndkWgflLnziSfAj2zrQ%2BjUZOmAeeZ2%2FbQXKeSDm5CrPjDcoOlLAS1Kj8JuWoiQzgMiSca2GqKRR9ygb8QEVs0a2s0vuPV0V3Kbh%2F62DU5jrt1OwAW6ZZWFJidS8oOPPtJH0hnm0Kw3V2CtszXePMhO9bJ77rY2FsXyXigr2KZi8z56m6Bq8gIPdWYwhDJLWTOXe%2BFpMGBsm&X-Amz-Signature=973eddd1f18e26f3e829d8d3efe52c5927d251574700368de87efd1f7c0493e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L6FJJF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbkx86U593MC4iofq9%2B%2FS4ItbRO7DhWwe4IrWFoqHfQAiA1XpcNwa6Z9dIa8kEcyER8462c54v1d32TML1GZPmO0iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNeHbaTCV%2BWLZyZpKtwDFBkTyCGEHEFkiKLgzpbLnkClQgZ8hMb2z9Y1nHdaSufvZ1LdVMz1DuBLonMhpq0LziT6wWTdnfQdQT61Gg1cGBJINW6cVK4dix%2BL56Ms7OQcRe8XWbb5dFtzsKdaPYTAgR7IzKWP4e3OJ14%2BddldTudWNLDEBSJ6Pa5x9J%2BHo%2BfdgmucEYxBKuoMga9mRbSSAYKN9Z6h2SBGi%2BDqMf%2BgCqV3ZuDRm%2BP2JbJ6oAajdUC3YvdKqjE7UWLHBHyLkQwEcvCEQuhVs6sSdtzk0TzAZztNFaVc6JyNNbArjZ6eECWpXFP5H%2FYvdpslwLI4uprd83SnjRNjxIX1Pm1IwirmzcydinwskXD19ntaUIrwYvZpcXUAxzSQgJGupVWDX26alOWyxPGfiVNZAzKUBPE4TwuPbcvcYP4toU4UVLJqmXM%2Boj06UWAP0sDphXDyx7vS%2BYYNB%2BoX7q2ZwaHCC93HObBIbJhBfdcXyaR8WUyS9y6xY8CVnpznRMSiQ4A3DOnI%2FVgFfQBliqPSMA6esEckgP%2BO80SCW7FozI9AUrh28%2BqhyQd8kqcXk%2BOiYW7oUqkIDkYpkwqcLFxy8Ho2Qo8J05Q2uLcx%2BEMx4N6U%2BdBOiwmyrBdBzwpliwVSgSownrXGwwY6pgHUrcKKZGGubyvP8%2BQZcndkWgflLnziSfAj2zrQ%2BjUZOmAeeZ2%2FbQXKeSDm5CrPjDcoOlLAS1Kj8JuWoiQzgMiSca2GqKRR9ygb8QEVs0a2s0vuPV0V3Kbh%2F62DU5jrt1OwAW6ZZWFJidS8oOPPtJH0hnm0Kw3V2CtszXePMhO9bJ77rY2FsXyXigr2KZi8z56m6Bq8gIPdWYwhDJLWTOXe%2BFpMGBsm&X-Amz-Signature=25a34f1a5c4752eb4782719a7612e21815a31dc8acb36a760fc8ead9bd9dd111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L6FJJF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbkx86U593MC4iofq9%2B%2FS4ItbRO7DhWwe4IrWFoqHfQAiA1XpcNwa6Z9dIa8kEcyER8462c54v1d32TML1GZPmO0iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNeHbaTCV%2BWLZyZpKtwDFBkTyCGEHEFkiKLgzpbLnkClQgZ8hMb2z9Y1nHdaSufvZ1LdVMz1DuBLonMhpq0LziT6wWTdnfQdQT61Gg1cGBJINW6cVK4dix%2BL56Ms7OQcRe8XWbb5dFtzsKdaPYTAgR7IzKWP4e3OJ14%2BddldTudWNLDEBSJ6Pa5x9J%2BHo%2BfdgmucEYxBKuoMga9mRbSSAYKN9Z6h2SBGi%2BDqMf%2BgCqV3ZuDRm%2BP2JbJ6oAajdUC3YvdKqjE7UWLHBHyLkQwEcvCEQuhVs6sSdtzk0TzAZztNFaVc6JyNNbArjZ6eECWpXFP5H%2FYvdpslwLI4uprd83SnjRNjxIX1Pm1IwirmzcydinwskXD19ntaUIrwYvZpcXUAxzSQgJGupVWDX26alOWyxPGfiVNZAzKUBPE4TwuPbcvcYP4toU4UVLJqmXM%2Boj06UWAP0sDphXDyx7vS%2BYYNB%2BoX7q2ZwaHCC93HObBIbJhBfdcXyaR8WUyS9y6xY8CVnpznRMSiQ4A3DOnI%2FVgFfQBliqPSMA6esEckgP%2BO80SCW7FozI9AUrh28%2BqhyQd8kqcXk%2BOiYW7oUqkIDkYpkwqcLFxy8Ho2Qo8J05Q2uLcx%2BEMx4N6U%2BdBOiwmyrBdBzwpliwVSgSownrXGwwY6pgHUrcKKZGGubyvP8%2BQZcndkWgflLnziSfAj2zrQ%2BjUZOmAeeZ2%2FbQXKeSDm5CrPjDcoOlLAS1Kj8JuWoiQzgMiSca2GqKRR9ygb8QEVs0a2s0vuPV0V3Kbh%2F62DU5jrt1OwAW6ZZWFJidS8oOPPtJH0hnm0Kw3V2CtszXePMhO9bJ77rY2FsXyXigr2KZi8z56m6Bq8gIPdWYwhDJLWTOXe%2BFpMGBsm&X-Amz-Signature=448e3c2d642912e4bdd846d201db43005c756662f88e67712e9638735ca8a6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L6FJJF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbkx86U593MC4iofq9%2B%2FS4ItbRO7DhWwe4IrWFoqHfQAiA1XpcNwa6Z9dIa8kEcyER8462c54v1d32TML1GZPmO0iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNeHbaTCV%2BWLZyZpKtwDFBkTyCGEHEFkiKLgzpbLnkClQgZ8hMb2z9Y1nHdaSufvZ1LdVMz1DuBLonMhpq0LziT6wWTdnfQdQT61Gg1cGBJINW6cVK4dix%2BL56Ms7OQcRe8XWbb5dFtzsKdaPYTAgR7IzKWP4e3OJ14%2BddldTudWNLDEBSJ6Pa5x9J%2BHo%2BfdgmucEYxBKuoMga9mRbSSAYKN9Z6h2SBGi%2BDqMf%2BgCqV3ZuDRm%2BP2JbJ6oAajdUC3YvdKqjE7UWLHBHyLkQwEcvCEQuhVs6sSdtzk0TzAZztNFaVc6JyNNbArjZ6eECWpXFP5H%2FYvdpslwLI4uprd83SnjRNjxIX1Pm1IwirmzcydinwskXD19ntaUIrwYvZpcXUAxzSQgJGupVWDX26alOWyxPGfiVNZAzKUBPE4TwuPbcvcYP4toU4UVLJqmXM%2Boj06UWAP0sDphXDyx7vS%2BYYNB%2BoX7q2ZwaHCC93HObBIbJhBfdcXyaR8WUyS9y6xY8CVnpznRMSiQ4A3DOnI%2FVgFfQBliqPSMA6esEckgP%2BO80SCW7FozI9AUrh28%2BqhyQd8kqcXk%2BOiYW7oUqkIDkYpkwqcLFxy8Ho2Qo8J05Q2uLcx%2BEMx4N6U%2BdBOiwmyrBdBzwpliwVSgSownrXGwwY6pgHUrcKKZGGubyvP8%2BQZcndkWgflLnziSfAj2zrQ%2BjUZOmAeeZ2%2FbQXKeSDm5CrPjDcoOlLAS1Kj8JuWoiQzgMiSca2GqKRR9ygb8QEVs0a2s0vuPV0V3Kbh%2F62DU5jrt1OwAW6ZZWFJidS8oOPPtJH0hnm0Kw3V2CtszXePMhO9bJ77rY2FsXyXigr2KZi8z56m6Bq8gIPdWYwhDJLWTOXe%2BFpMGBsm&X-Amz-Signature=e3065dc65b499a953347b74a02ef818309403cf4664673d199ef97878da33961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L6FJJF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbkx86U593MC4iofq9%2B%2FS4ItbRO7DhWwe4IrWFoqHfQAiA1XpcNwa6Z9dIa8kEcyER8462c54v1d32TML1GZPmO0iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNeHbaTCV%2BWLZyZpKtwDFBkTyCGEHEFkiKLgzpbLnkClQgZ8hMb2z9Y1nHdaSufvZ1LdVMz1DuBLonMhpq0LziT6wWTdnfQdQT61Gg1cGBJINW6cVK4dix%2BL56Ms7OQcRe8XWbb5dFtzsKdaPYTAgR7IzKWP4e3OJ14%2BddldTudWNLDEBSJ6Pa5x9J%2BHo%2BfdgmucEYxBKuoMga9mRbSSAYKN9Z6h2SBGi%2BDqMf%2BgCqV3ZuDRm%2BP2JbJ6oAajdUC3YvdKqjE7UWLHBHyLkQwEcvCEQuhVs6sSdtzk0TzAZztNFaVc6JyNNbArjZ6eECWpXFP5H%2FYvdpslwLI4uprd83SnjRNjxIX1Pm1IwirmzcydinwskXD19ntaUIrwYvZpcXUAxzSQgJGupVWDX26alOWyxPGfiVNZAzKUBPE4TwuPbcvcYP4toU4UVLJqmXM%2Boj06UWAP0sDphXDyx7vS%2BYYNB%2BoX7q2ZwaHCC93HObBIbJhBfdcXyaR8WUyS9y6xY8CVnpznRMSiQ4A3DOnI%2FVgFfQBliqPSMA6esEckgP%2BO80SCW7FozI9AUrh28%2BqhyQd8kqcXk%2BOiYW7oUqkIDkYpkwqcLFxy8Ho2Qo8J05Q2uLcx%2BEMx4N6U%2BdBOiwmyrBdBzwpliwVSgSownrXGwwY6pgHUrcKKZGGubyvP8%2BQZcndkWgflLnziSfAj2zrQ%2BjUZOmAeeZ2%2FbQXKeSDm5CrPjDcoOlLAS1Kj8JuWoiQzgMiSca2GqKRR9ygb8QEVs0a2s0vuPV0V3Kbh%2F62DU5jrt1OwAW6ZZWFJidS8oOPPtJH0hnm0Kw3V2CtszXePMhO9bJ77rY2FsXyXigr2KZi8z56m6Bq8gIPdWYwhDJLWTOXe%2BFpMGBsm&X-Amz-Signature=63d91c12f1e5b7c91bdea824e570e81fa664ac6b9faf55c1a3c71769da6c337f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L6FJJF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbkx86U593MC4iofq9%2B%2FS4ItbRO7DhWwe4IrWFoqHfQAiA1XpcNwa6Z9dIa8kEcyER8462c54v1d32TML1GZPmO0iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNeHbaTCV%2BWLZyZpKtwDFBkTyCGEHEFkiKLgzpbLnkClQgZ8hMb2z9Y1nHdaSufvZ1LdVMz1DuBLonMhpq0LziT6wWTdnfQdQT61Gg1cGBJINW6cVK4dix%2BL56Ms7OQcRe8XWbb5dFtzsKdaPYTAgR7IzKWP4e3OJ14%2BddldTudWNLDEBSJ6Pa5x9J%2BHo%2BfdgmucEYxBKuoMga9mRbSSAYKN9Z6h2SBGi%2BDqMf%2BgCqV3ZuDRm%2BP2JbJ6oAajdUC3YvdKqjE7UWLHBHyLkQwEcvCEQuhVs6sSdtzk0TzAZztNFaVc6JyNNbArjZ6eECWpXFP5H%2FYvdpslwLI4uprd83SnjRNjxIX1Pm1IwirmzcydinwskXD19ntaUIrwYvZpcXUAxzSQgJGupVWDX26alOWyxPGfiVNZAzKUBPE4TwuPbcvcYP4toU4UVLJqmXM%2Boj06UWAP0sDphXDyx7vS%2BYYNB%2BoX7q2ZwaHCC93HObBIbJhBfdcXyaR8WUyS9y6xY8CVnpznRMSiQ4A3DOnI%2FVgFfQBliqPSMA6esEckgP%2BO80SCW7FozI9AUrh28%2BqhyQd8kqcXk%2BOiYW7oUqkIDkYpkwqcLFxy8Ho2Qo8J05Q2uLcx%2BEMx4N6U%2BdBOiwmyrBdBzwpliwVSgSownrXGwwY6pgHUrcKKZGGubyvP8%2BQZcndkWgflLnziSfAj2zrQ%2BjUZOmAeeZ2%2FbQXKeSDm5CrPjDcoOlLAS1Kj8JuWoiQzgMiSca2GqKRR9ygb8QEVs0a2s0vuPV0V3Kbh%2F62DU5jrt1OwAW6ZZWFJidS8oOPPtJH0hnm0Kw3V2CtszXePMhO9bJ77rY2FsXyXigr2KZi8z56m6Bq8gIPdWYwhDJLWTOXe%2BFpMGBsm&X-Amz-Signature=ff645c2757dbab772b4f449e543c1bf7fe266dd4eead5a38f6cb642ec2e86b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L6FJJF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbkx86U593MC4iofq9%2B%2FS4ItbRO7DhWwe4IrWFoqHfQAiA1XpcNwa6Z9dIa8kEcyER8462c54v1d32TML1GZPmO0iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNeHbaTCV%2BWLZyZpKtwDFBkTyCGEHEFkiKLgzpbLnkClQgZ8hMb2z9Y1nHdaSufvZ1LdVMz1DuBLonMhpq0LziT6wWTdnfQdQT61Gg1cGBJINW6cVK4dix%2BL56Ms7OQcRe8XWbb5dFtzsKdaPYTAgR7IzKWP4e3OJ14%2BddldTudWNLDEBSJ6Pa5x9J%2BHo%2BfdgmucEYxBKuoMga9mRbSSAYKN9Z6h2SBGi%2BDqMf%2BgCqV3ZuDRm%2BP2JbJ6oAajdUC3YvdKqjE7UWLHBHyLkQwEcvCEQuhVs6sSdtzk0TzAZztNFaVc6JyNNbArjZ6eECWpXFP5H%2FYvdpslwLI4uprd83SnjRNjxIX1Pm1IwirmzcydinwskXD19ntaUIrwYvZpcXUAxzSQgJGupVWDX26alOWyxPGfiVNZAzKUBPE4TwuPbcvcYP4toU4UVLJqmXM%2Boj06UWAP0sDphXDyx7vS%2BYYNB%2BoX7q2ZwaHCC93HObBIbJhBfdcXyaR8WUyS9y6xY8CVnpznRMSiQ4A3DOnI%2FVgFfQBliqPSMA6esEckgP%2BO80SCW7FozI9AUrh28%2BqhyQd8kqcXk%2BOiYW7oUqkIDkYpkwqcLFxy8Ho2Qo8J05Q2uLcx%2BEMx4N6U%2BdBOiwmyrBdBzwpliwVSgSownrXGwwY6pgHUrcKKZGGubyvP8%2BQZcndkWgflLnziSfAj2zrQ%2BjUZOmAeeZ2%2FbQXKeSDm5CrPjDcoOlLAS1Kj8JuWoiQzgMiSca2GqKRR9ygb8QEVs0a2s0vuPV0V3Kbh%2F62DU5jrt1OwAW6ZZWFJidS8oOPPtJH0hnm0Kw3V2CtszXePMhO9bJ77rY2FsXyXigr2KZi8z56m6Bq8gIPdWYwhDJLWTOXe%2BFpMGBsm&X-Amz-Signature=59c7a8bd51ff053182970cb86bcabd6c9fb2899f2b1251c8fb1d9f38dbd52476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
