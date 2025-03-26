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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V6PVFNR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEd2EXKU03LWAmT2cpuPEKRKYS5oTlzhTkb6Dpyp0lIAAiAG5GqjET1WKHVZVOx0JBrmF8gxkcjKnp14BZlxjAUlEyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMk0pbJjJRsFbXbQoAKtwDajymCJ2zrCUrUdaFm%2BKYQPgBf%2FA76bQ2ujuBCFBRWfiMYCUAqH5iQ%2F8m7xzQ%2FoPjLn%2BXrQ6m8oKQ0tTbXMtXxzRuk2UQe6vPQSUNxreZmttPtuc1%2BSb0uw0V13W9t6qnwL72heU%2BD4G3dUQOHWx3YiLtkNpMlVrqVJYyWUDr7k7LIxEBXKvT0RRma2l%2FGOZ3RIzQ2FMMVcfy1pIlDaQ4tlpGqUkVg0nDdaJ0pzgK6zeebR79QCDiRcjf2pYObsi3029%2Fhyw8TyoF2H%2FYliP1panOIsh5JxigEarQOjx0CWzLogN7IicMDmYBZ%2BZe9sj9J16ws%2FglTEyZEqbogFrTFGLDqf9ingQgdZhb%2FLL%2FJtEtw1KKvD51t8phq7hj3ciGmYFxngiv7zQRBvgUq5vVTdZVR3Vp1wbEkvJ07r1bKdghiTssZurw1l3dKNAiR2uOOMOcdM%2BxfGNJJNBeQc1M1ynLdGZijMCyuct5d2k7v7968cmhoCmOxfX5uKtd%2FFgu6lKYc2EiWrcuvJiEArYZjf%2FxkEdwFzf%2FR2Kx8QOzmtCv1YB35fjk%2BFZnY64OJ5BoaVHxfdRx3mplG8MKbzrQAIHZVS1vX21RDgrgf2%2FKbgPA7C%2FHyCbtjTz%2BOYgwiJWRvwY6pgEapuhWsTRTS%2FhPBRdc7H98fGmv53Jk5SCLc3vktfIVRSHkGg%2BHPaZVmdtmGvL4neLzKUmhGqSO6oU5zDTFhDomXIybKYg7sFCLEfj%2BeCmUnhCy7RodpvYrNiwHhAYKBYFtvEuQD8QvFG1w8GuCHzHtSX%2FSA1FtMAOPcnOXxnT9B3TH6a95%2Fvh4WarTxcoXannkP%2FLi1WrClmiYBSJVRuOP4P7J7MLP&X-Amz-Signature=42bdedf99369a2d284cb208750ee29c948482aeccae9849ccc966ef38aa4d180&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V6PVFNR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEd2EXKU03LWAmT2cpuPEKRKYS5oTlzhTkb6Dpyp0lIAAiAG5GqjET1WKHVZVOx0JBrmF8gxkcjKnp14BZlxjAUlEyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMk0pbJjJRsFbXbQoAKtwDajymCJ2zrCUrUdaFm%2BKYQPgBf%2FA76bQ2ujuBCFBRWfiMYCUAqH5iQ%2F8m7xzQ%2FoPjLn%2BXrQ6m8oKQ0tTbXMtXxzRuk2UQe6vPQSUNxreZmttPtuc1%2BSb0uw0V13W9t6qnwL72heU%2BD4G3dUQOHWx3YiLtkNpMlVrqVJYyWUDr7k7LIxEBXKvT0RRma2l%2FGOZ3RIzQ2FMMVcfy1pIlDaQ4tlpGqUkVg0nDdaJ0pzgK6zeebR79QCDiRcjf2pYObsi3029%2Fhyw8TyoF2H%2FYliP1panOIsh5JxigEarQOjx0CWzLogN7IicMDmYBZ%2BZe9sj9J16ws%2FglTEyZEqbogFrTFGLDqf9ingQgdZhb%2FLL%2FJtEtw1KKvD51t8phq7hj3ciGmYFxngiv7zQRBvgUq5vVTdZVR3Vp1wbEkvJ07r1bKdghiTssZurw1l3dKNAiR2uOOMOcdM%2BxfGNJJNBeQc1M1ynLdGZijMCyuct5d2k7v7968cmhoCmOxfX5uKtd%2FFgu6lKYc2EiWrcuvJiEArYZjf%2FxkEdwFzf%2FR2Kx8QOzmtCv1YB35fjk%2BFZnY64OJ5BoaVHxfdRx3mplG8MKbzrQAIHZVS1vX21RDgrgf2%2FKbgPA7C%2FHyCbtjTz%2BOYgwiJWRvwY6pgEapuhWsTRTS%2FhPBRdc7H98fGmv53Jk5SCLc3vktfIVRSHkGg%2BHPaZVmdtmGvL4neLzKUmhGqSO6oU5zDTFhDomXIybKYg7sFCLEfj%2BeCmUnhCy7RodpvYrNiwHhAYKBYFtvEuQD8QvFG1w8GuCHzHtSX%2FSA1FtMAOPcnOXxnT9B3TH6a95%2Fvh4WarTxcoXannkP%2FLi1WrClmiYBSJVRuOP4P7J7MLP&X-Amz-Signature=f6de62d97a0489c501095019d563e6a36a65b2ca92e1eaf62fd6a396b2266727&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V6PVFNR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEd2EXKU03LWAmT2cpuPEKRKYS5oTlzhTkb6Dpyp0lIAAiAG5GqjET1WKHVZVOx0JBrmF8gxkcjKnp14BZlxjAUlEyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMk0pbJjJRsFbXbQoAKtwDajymCJ2zrCUrUdaFm%2BKYQPgBf%2FA76bQ2ujuBCFBRWfiMYCUAqH5iQ%2F8m7xzQ%2FoPjLn%2BXrQ6m8oKQ0tTbXMtXxzRuk2UQe6vPQSUNxreZmttPtuc1%2BSb0uw0V13W9t6qnwL72heU%2BD4G3dUQOHWx3YiLtkNpMlVrqVJYyWUDr7k7LIxEBXKvT0RRma2l%2FGOZ3RIzQ2FMMVcfy1pIlDaQ4tlpGqUkVg0nDdaJ0pzgK6zeebR79QCDiRcjf2pYObsi3029%2Fhyw8TyoF2H%2FYliP1panOIsh5JxigEarQOjx0CWzLogN7IicMDmYBZ%2BZe9sj9J16ws%2FglTEyZEqbogFrTFGLDqf9ingQgdZhb%2FLL%2FJtEtw1KKvD51t8phq7hj3ciGmYFxngiv7zQRBvgUq5vVTdZVR3Vp1wbEkvJ07r1bKdghiTssZurw1l3dKNAiR2uOOMOcdM%2BxfGNJJNBeQc1M1ynLdGZijMCyuct5d2k7v7968cmhoCmOxfX5uKtd%2FFgu6lKYc2EiWrcuvJiEArYZjf%2FxkEdwFzf%2FR2Kx8QOzmtCv1YB35fjk%2BFZnY64OJ5BoaVHxfdRx3mplG8MKbzrQAIHZVS1vX21RDgrgf2%2FKbgPA7C%2FHyCbtjTz%2BOYgwiJWRvwY6pgEapuhWsTRTS%2FhPBRdc7H98fGmv53Jk5SCLc3vktfIVRSHkGg%2BHPaZVmdtmGvL4neLzKUmhGqSO6oU5zDTFhDomXIybKYg7sFCLEfj%2BeCmUnhCy7RodpvYrNiwHhAYKBYFtvEuQD8QvFG1w8GuCHzHtSX%2FSA1FtMAOPcnOXxnT9B3TH6a95%2Fvh4WarTxcoXannkP%2FLi1WrClmiYBSJVRuOP4P7J7MLP&X-Amz-Signature=02d1fae3bdb26addae053e01e0f73a18c319750e4bb74e7b97b814059161a9c6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V6PVFNR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEd2EXKU03LWAmT2cpuPEKRKYS5oTlzhTkb6Dpyp0lIAAiAG5GqjET1WKHVZVOx0JBrmF8gxkcjKnp14BZlxjAUlEyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMk0pbJjJRsFbXbQoAKtwDajymCJ2zrCUrUdaFm%2BKYQPgBf%2FA76bQ2ujuBCFBRWfiMYCUAqH5iQ%2F8m7xzQ%2FoPjLn%2BXrQ6m8oKQ0tTbXMtXxzRuk2UQe6vPQSUNxreZmttPtuc1%2BSb0uw0V13W9t6qnwL72heU%2BD4G3dUQOHWx3YiLtkNpMlVrqVJYyWUDr7k7LIxEBXKvT0RRma2l%2FGOZ3RIzQ2FMMVcfy1pIlDaQ4tlpGqUkVg0nDdaJ0pzgK6zeebR79QCDiRcjf2pYObsi3029%2Fhyw8TyoF2H%2FYliP1panOIsh5JxigEarQOjx0CWzLogN7IicMDmYBZ%2BZe9sj9J16ws%2FglTEyZEqbogFrTFGLDqf9ingQgdZhb%2FLL%2FJtEtw1KKvD51t8phq7hj3ciGmYFxngiv7zQRBvgUq5vVTdZVR3Vp1wbEkvJ07r1bKdghiTssZurw1l3dKNAiR2uOOMOcdM%2BxfGNJJNBeQc1M1ynLdGZijMCyuct5d2k7v7968cmhoCmOxfX5uKtd%2FFgu6lKYc2EiWrcuvJiEArYZjf%2FxkEdwFzf%2FR2Kx8QOzmtCv1YB35fjk%2BFZnY64OJ5BoaVHxfdRx3mplG8MKbzrQAIHZVS1vX21RDgrgf2%2FKbgPA7C%2FHyCbtjTz%2BOYgwiJWRvwY6pgEapuhWsTRTS%2FhPBRdc7H98fGmv53Jk5SCLc3vktfIVRSHkGg%2BHPaZVmdtmGvL4neLzKUmhGqSO6oU5zDTFhDomXIybKYg7sFCLEfj%2BeCmUnhCy7RodpvYrNiwHhAYKBYFtvEuQD8QvFG1w8GuCHzHtSX%2FSA1FtMAOPcnOXxnT9B3TH6a95%2Fvh4WarTxcoXannkP%2FLi1WrClmiYBSJVRuOP4P7J7MLP&X-Amz-Signature=1a1e0e418f3cdd47348cb6b94a78bd78456904ab9653b2dbef498c357218b1e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V6PVFNR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEd2EXKU03LWAmT2cpuPEKRKYS5oTlzhTkb6Dpyp0lIAAiAG5GqjET1WKHVZVOx0JBrmF8gxkcjKnp14BZlxjAUlEyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMk0pbJjJRsFbXbQoAKtwDajymCJ2zrCUrUdaFm%2BKYQPgBf%2FA76bQ2ujuBCFBRWfiMYCUAqH5iQ%2F8m7xzQ%2FoPjLn%2BXrQ6m8oKQ0tTbXMtXxzRuk2UQe6vPQSUNxreZmttPtuc1%2BSb0uw0V13W9t6qnwL72heU%2BD4G3dUQOHWx3YiLtkNpMlVrqVJYyWUDr7k7LIxEBXKvT0RRma2l%2FGOZ3RIzQ2FMMVcfy1pIlDaQ4tlpGqUkVg0nDdaJ0pzgK6zeebR79QCDiRcjf2pYObsi3029%2Fhyw8TyoF2H%2FYliP1panOIsh5JxigEarQOjx0CWzLogN7IicMDmYBZ%2BZe9sj9J16ws%2FglTEyZEqbogFrTFGLDqf9ingQgdZhb%2FLL%2FJtEtw1KKvD51t8phq7hj3ciGmYFxngiv7zQRBvgUq5vVTdZVR3Vp1wbEkvJ07r1bKdghiTssZurw1l3dKNAiR2uOOMOcdM%2BxfGNJJNBeQc1M1ynLdGZijMCyuct5d2k7v7968cmhoCmOxfX5uKtd%2FFgu6lKYc2EiWrcuvJiEArYZjf%2FxkEdwFzf%2FR2Kx8QOzmtCv1YB35fjk%2BFZnY64OJ5BoaVHxfdRx3mplG8MKbzrQAIHZVS1vX21RDgrgf2%2FKbgPA7C%2FHyCbtjTz%2BOYgwiJWRvwY6pgEapuhWsTRTS%2FhPBRdc7H98fGmv53Jk5SCLc3vktfIVRSHkGg%2BHPaZVmdtmGvL4neLzKUmhGqSO6oU5zDTFhDomXIybKYg7sFCLEfj%2BeCmUnhCy7RodpvYrNiwHhAYKBYFtvEuQD8QvFG1w8GuCHzHtSX%2FSA1FtMAOPcnOXxnT9B3TH6a95%2Fvh4WarTxcoXannkP%2FLi1WrClmiYBSJVRuOP4P7J7MLP&X-Amz-Signature=60f9989c64212dc6ec5a6a005a73fa26808c696c25e8924a2da1715750541be8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V6PVFNR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEd2EXKU03LWAmT2cpuPEKRKYS5oTlzhTkb6Dpyp0lIAAiAG5GqjET1WKHVZVOx0JBrmF8gxkcjKnp14BZlxjAUlEyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMk0pbJjJRsFbXbQoAKtwDajymCJ2zrCUrUdaFm%2BKYQPgBf%2FA76bQ2ujuBCFBRWfiMYCUAqH5iQ%2F8m7xzQ%2FoPjLn%2BXrQ6m8oKQ0tTbXMtXxzRuk2UQe6vPQSUNxreZmttPtuc1%2BSb0uw0V13W9t6qnwL72heU%2BD4G3dUQOHWx3YiLtkNpMlVrqVJYyWUDr7k7LIxEBXKvT0RRma2l%2FGOZ3RIzQ2FMMVcfy1pIlDaQ4tlpGqUkVg0nDdaJ0pzgK6zeebR79QCDiRcjf2pYObsi3029%2Fhyw8TyoF2H%2FYliP1panOIsh5JxigEarQOjx0CWzLogN7IicMDmYBZ%2BZe9sj9J16ws%2FglTEyZEqbogFrTFGLDqf9ingQgdZhb%2FLL%2FJtEtw1KKvD51t8phq7hj3ciGmYFxngiv7zQRBvgUq5vVTdZVR3Vp1wbEkvJ07r1bKdghiTssZurw1l3dKNAiR2uOOMOcdM%2BxfGNJJNBeQc1M1ynLdGZijMCyuct5d2k7v7968cmhoCmOxfX5uKtd%2FFgu6lKYc2EiWrcuvJiEArYZjf%2FxkEdwFzf%2FR2Kx8QOzmtCv1YB35fjk%2BFZnY64OJ5BoaVHxfdRx3mplG8MKbzrQAIHZVS1vX21RDgrgf2%2FKbgPA7C%2FHyCbtjTz%2BOYgwiJWRvwY6pgEapuhWsTRTS%2FhPBRdc7H98fGmv53Jk5SCLc3vktfIVRSHkGg%2BHPaZVmdtmGvL4neLzKUmhGqSO6oU5zDTFhDomXIybKYg7sFCLEfj%2BeCmUnhCy7RodpvYrNiwHhAYKBYFtvEuQD8QvFG1w8GuCHzHtSX%2FSA1FtMAOPcnOXxnT9B3TH6a95%2Fvh4WarTxcoXannkP%2FLi1WrClmiYBSJVRuOP4P7J7MLP&X-Amz-Signature=0332854c620aba3cf5128a283c3d493102d1507c278020681f3da302bc95db86&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V6PVFNR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEd2EXKU03LWAmT2cpuPEKRKYS5oTlzhTkb6Dpyp0lIAAiAG5GqjET1WKHVZVOx0JBrmF8gxkcjKnp14BZlxjAUlEyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMk0pbJjJRsFbXbQoAKtwDajymCJ2zrCUrUdaFm%2BKYQPgBf%2FA76bQ2ujuBCFBRWfiMYCUAqH5iQ%2F8m7xzQ%2FoPjLn%2BXrQ6m8oKQ0tTbXMtXxzRuk2UQe6vPQSUNxreZmttPtuc1%2BSb0uw0V13W9t6qnwL72heU%2BD4G3dUQOHWx3YiLtkNpMlVrqVJYyWUDr7k7LIxEBXKvT0RRma2l%2FGOZ3RIzQ2FMMVcfy1pIlDaQ4tlpGqUkVg0nDdaJ0pzgK6zeebR79QCDiRcjf2pYObsi3029%2Fhyw8TyoF2H%2FYliP1panOIsh5JxigEarQOjx0CWzLogN7IicMDmYBZ%2BZe9sj9J16ws%2FglTEyZEqbogFrTFGLDqf9ingQgdZhb%2FLL%2FJtEtw1KKvD51t8phq7hj3ciGmYFxngiv7zQRBvgUq5vVTdZVR3Vp1wbEkvJ07r1bKdghiTssZurw1l3dKNAiR2uOOMOcdM%2BxfGNJJNBeQc1M1ynLdGZijMCyuct5d2k7v7968cmhoCmOxfX5uKtd%2FFgu6lKYc2EiWrcuvJiEArYZjf%2FxkEdwFzf%2FR2Kx8QOzmtCv1YB35fjk%2BFZnY64OJ5BoaVHxfdRx3mplG8MKbzrQAIHZVS1vX21RDgrgf2%2FKbgPA7C%2FHyCbtjTz%2BOYgwiJWRvwY6pgEapuhWsTRTS%2FhPBRdc7H98fGmv53Jk5SCLc3vktfIVRSHkGg%2BHPaZVmdtmGvL4neLzKUmhGqSO6oU5zDTFhDomXIybKYg7sFCLEfj%2BeCmUnhCy7RodpvYrNiwHhAYKBYFtvEuQD8QvFG1w8GuCHzHtSX%2FSA1FtMAOPcnOXxnT9B3TH6a95%2Fvh4WarTxcoXannkP%2FLi1WrClmiYBSJVRuOP4P7J7MLP&X-Amz-Signature=6dae17cf0b42ca9f1127d7162736a5beccc40a8662f9f7c097eb0ca3c6ca8fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V6PVFNR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEd2EXKU03LWAmT2cpuPEKRKYS5oTlzhTkb6Dpyp0lIAAiAG5GqjET1WKHVZVOx0JBrmF8gxkcjKnp14BZlxjAUlEyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMk0pbJjJRsFbXbQoAKtwDajymCJ2zrCUrUdaFm%2BKYQPgBf%2FA76bQ2ujuBCFBRWfiMYCUAqH5iQ%2F8m7xzQ%2FoPjLn%2BXrQ6m8oKQ0tTbXMtXxzRuk2UQe6vPQSUNxreZmttPtuc1%2BSb0uw0V13W9t6qnwL72heU%2BD4G3dUQOHWx3YiLtkNpMlVrqVJYyWUDr7k7LIxEBXKvT0RRma2l%2FGOZ3RIzQ2FMMVcfy1pIlDaQ4tlpGqUkVg0nDdaJ0pzgK6zeebR79QCDiRcjf2pYObsi3029%2Fhyw8TyoF2H%2FYliP1panOIsh5JxigEarQOjx0CWzLogN7IicMDmYBZ%2BZe9sj9J16ws%2FglTEyZEqbogFrTFGLDqf9ingQgdZhb%2FLL%2FJtEtw1KKvD51t8phq7hj3ciGmYFxngiv7zQRBvgUq5vVTdZVR3Vp1wbEkvJ07r1bKdghiTssZurw1l3dKNAiR2uOOMOcdM%2BxfGNJJNBeQc1M1ynLdGZijMCyuct5d2k7v7968cmhoCmOxfX5uKtd%2FFgu6lKYc2EiWrcuvJiEArYZjf%2FxkEdwFzf%2FR2Kx8QOzmtCv1YB35fjk%2BFZnY64OJ5BoaVHxfdRx3mplG8MKbzrQAIHZVS1vX21RDgrgf2%2FKbgPA7C%2FHyCbtjTz%2BOYgwiJWRvwY6pgEapuhWsTRTS%2FhPBRdc7H98fGmv53Jk5SCLc3vktfIVRSHkGg%2BHPaZVmdtmGvL4neLzKUmhGqSO6oU5zDTFhDomXIybKYg7sFCLEfj%2BeCmUnhCy7RodpvYrNiwHhAYKBYFtvEuQD8QvFG1w8GuCHzHtSX%2FSA1FtMAOPcnOXxnT9B3TH6a95%2Fvh4WarTxcoXannkP%2FLi1WrClmiYBSJVRuOP4P7J7MLP&X-Amz-Signature=40858b7bd1018bd4569f418730733343bbddff8c7347663dc8e4d1d2dabca728&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
