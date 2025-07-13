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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I2JMC6O%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDx%2F67SNsb3oGRqY5gLlqFFtKcye9lkxMWg36Qi0cG1QIhAN9AQnnCVDIuXNZ4yfzK%2FqogT%2Fr54dFfvvZFNk8QoR6pKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf89rKvV4dtyioRCAq3ANbsZndawpNp%2BUsjgCf4tCPa2AEoL7eg3Qw%2BiEAKsZwwEty8L%2FQOFsD0cY9pwP6Pr1TrJJ0hZLbmwCkEx9456%2B4goBMxnxdR5TEpN1U5Tp%2Bdi2lNl0%2FIBTpynW9wRSXWwglGDbF4Qz5oHzVMYNUaBTNDLItGHlvwTmzlHeCbitJxD3euQFHaj2uMnxMtgtIlJhxXoCk4%2F3rheLUP5BYn8NcJXXptsl%2BulN77MOvwG7Z3H7FK3bEz78vlzn%2B9ORep6gvx%2BOSz1H0ahSzdEhXqfH4%2B3dq3Bq84JKoRFur2ecLH21f0fuR8YaCVMfa9%2FtBsSBiUGQq0Qxm%2FAxHOBEE3V8d0Gyd6xfK2eH3qm0ljlhj0UiU62nVK3vat5GAgp4YnVA8sLX6vovt0hNWYexwI6vaETha69%2FWkBHcw1OVHjMpmNUkpp2mXOWK9sqf6WSNFQrz1OTp%2Fa2RZifnzAZjnzTfj8xfG0uwGvHL16Tyu6OPPtjNNo%2FXgI5BVUiUK7nNOkOVk4eUde8sMSIG0%2FAAI1CScbkHUDc1ENK2ZkFNDZnN43PX%2BKWSq3Z5%2BRRfOQVEWxSMvqX3ImqjGVchQyifNcTdhJGCtKcngmvLEB7uRgPLTXOjJJM%2Bqr6oHfFVIzCxgczDBjqkATdRRDu7X%2FSjgw4AmoD%2B%2FdUKGlKgeHDlQ6NibuyCG79SfWQ8p2y6Vyb36N2%2FHQZ7t7dZPi6Q2CFX7fRNkcECLTjQ8ythsuXd4tq0yrRfL%2Bqpv3MN6g4jvSqu4UsxbgZHftU7bGPVRLk%2FqZxFPJRUqMRpyfbVwubNxhBQGx3IaU%2Be7yghXnbAdOBp9XuWmGTG4cYnHppS5ns75e793pBTnlEesiOJ&X-Amz-Signature=ff9b15ca20ea63534a8df2824ee972d3628fd8e78e0396bfdc6855413c87ccd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I2JMC6O%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDx%2F67SNsb3oGRqY5gLlqFFtKcye9lkxMWg36Qi0cG1QIhAN9AQnnCVDIuXNZ4yfzK%2FqogT%2Fr54dFfvvZFNk8QoR6pKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf89rKvV4dtyioRCAq3ANbsZndawpNp%2BUsjgCf4tCPa2AEoL7eg3Qw%2BiEAKsZwwEty8L%2FQOFsD0cY9pwP6Pr1TrJJ0hZLbmwCkEx9456%2B4goBMxnxdR5TEpN1U5Tp%2Bdi2lNl0%2FIBTpynW9wRSXWwglGDbF4Qz5oHzVMYNUaBTNDLItGHlvwTmzlHeCbitJxD3euQFHaj2uMnxMtgtIlJhxXoCk4%2F3rheLUP5BYn8NcJXXptsl%2BulN77MOvwG7Z3H7FK3bEz78vlzn%2B9ORep6gvx%2BOSz1H0ahSzdEhXqfH4%2B3dq3Bq84JKoRFur2ecLH21f0fuR8YaCVMfa9%2FtBsSBiUGQq0Qxm%2FAxHOBEE3V8d0Gyd6xfK2eH3qm0ljlhj0UiU62nVK3vat5GAgp4YnVA8sLX6vovt0hNWYexwI6vaETha69%2FWkBHcw1OVHjMpmNUkpp2mXOWK9sqf6WSNFQrz1OTp%2Fa2RZifnzAZjnzTfj8xfG0uwGvHL16Tyu6OPPtjNNo%2FXgI5BVUiUK7nNOkOVk4eUde8sMSIG0%2FAAI1CScbkHUDc1ENK2ZkFNDZnN43PX%2BKWSq3Z5%2BRRfOQVEWxSMvqX3ImqjGVchQyifNcTdhJGCtKcngmvLEB7uRgPLTXOjJJM%2Bqr6oHfFVIzCxgczDBjqkATdRRDu7X%2FSjgw4AmoD%2B%2FdUKGlKgeHDlQ6NibuyCG79SfWQ8p2y6Vyb36N2%2FHQZ7t7dZPi6Q2CFX7fRNkcECLTjQ8ythsuXd4tq0yrRfL%2Bqpv3MN6g4jvSqu4UsxbgZHftU7bGPVRLk%2FqZxFPJRUqMRpyfbVwubNxhBQGx3IaU%2Be7yghXnbAdOBp9XuWmGTG4cYnHppS5ns75e793pBTnlEesiOJ&X-Amz-Signature=aee305a44856fc390d85c72bf0689ad241a6ae9e6f2d51dab635b12160fb06dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I2JMC6O%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDx%2F67SNsb3oGRqY5gLlqFFtKcye9lkxMWg36Qi0cG1QIhAN9AQnnCVDIuXNZ4yfzK%2FqogT%2Fr54dFfvvZFNk8QoR6pKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf89rKvV4dtyioRCAq3ANbsZndawpNp%2BUsjgCf4tCPa2AEoL7eg3Qw%2BiEAKsZwwEty8L%2FQOFsD0cY9pwP6Pr1TrJJ0hZLbmwCkEx9456%2B4goBMxnxdR5TEpN1U5Tp%2Bdi2lNl0%2FIBTpynW9wRSXWwglGDbF4Qz5oHzVMYNUaBTNDLItGHlvwTmzlHeCbitJxD3euQFHaj2uMnxMtgtIlJhxXoCk4%2F3rheLUP5BYn8NcJXXptsl%2BulN77MOvwG7Z3H7FK3bEz78vlzn%2B9ORep6gvx%2BOSz1H0ahSzdEhXqfH4%2B3dq3Bq84JKoRFur2ecLH21f0fuR8YaCVMfa9%2FtBsSBiUGQq0Qxm%2FAxHOBEE3V8d0Gyd6xfK2eH3qm0ljlhj0UiU62nVK3vat5GAgp4YnVA8sLX6vovt0hNWYexwI6vaETha69%2FWkBHcw1OVHjMpmNUkpp2mXOWK9sqf6WSNFQrz1OTp%2Fa2RZifnzAZjnzTfj8xfG0uwGvHL16Tyu6OPPtjNNo%2FXgI5BVUiUK7nNOkOVk4eUde8sMSIG0%2FAAI1CScbkHUDc1ENK2ZkFNDZnN43PX%2BKWSq3Z5%2BRRfOQVEWxSMvqX3ImqjGVchQyifNcTdhJGCtKcngmvLEB7uRgPLTXOjJJM%2Bqr6oHfFVIzCxgczDBjqkATdRRDu7X%2FSjgw4AmoD%2B%2FdUKGlKgeHDlQ6NibuyCG79SfWQ8p2y6Vyb36N2%2FHQZ7t7dZPi6Q2CFX7fRNkcECLTjQ8ythsuXd4tq0yrRfL%2Bqpv3MN6g4jvSqu4UsxbgZHftU7bGPVRLk%2FqZxFPJRUqMRpyfbVwubNxhBQGx3IaU%2Be7yghXnbAdOBp9XuWmGTG4cYnHppS5ns75e793pBTnlEesiOJ&X-Amz-Signature=31721c00a5065594c9ce9a24da3d5655d4b0c99f8271fc629dc32879cf5bba4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I2JMC6O%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDx%2F67SNsb3oGRqY5gLlqFFtKcye9lkxMWg36Qi0cG1QIhAN9AQnnCVDIuXNZ4yfzK%2FqogT%2Fr54dFfvvZFNk8QoR6pKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf89rKvV4dtyioRCAq3ANbsZndawpNp%2BUsjgCf4tCPa2AEoL7eg3Qw%2BiEAKsZwwEty8L%2FQOFsD0cY9pwP6Pr1TrJJ0hZLbmwCkEx9456%2B4goBMxnxdR5TEpN1U5Tp%2Bdi2lNl0%2FIBTpynW9wRSXWwglGDbF4Qz5oHzVMYNUaBTNDLItGHlvwTmzlHeCbitJxD3euQFHaj2uMnxMtgtIlJhxXoCk4%2F3rheLUP5BYn8NcJXXptsl%2BulN77MOvwG7Z3H7FK3bEz78vlzn%2B9ORep6gvx%2BOSz1H0ahSzdEhXqfH4%2B3dq3Bq84JKoRFur2ecLH21f0fuR8YaCVMfa9%2FtBsSBiUGQq0Qxm%2FAxHOBEE3V8d0Gyd6xfK2eH3qm0ljlhj0UiU62nVK3vat5GAgp4YnVA8sLX6vovt0hNWYexwI6vaETha69%2FWkBHcw1OVHjMpmNUkpp2mXOWK9sqf6WSNFQrz1OTp%2Fa2RZifnzAZjnzTfj8xfG0uwGvHL16Tyu6OPPtjNNo%2FXgI5BVUiUK7nNOkOVk4eUde8sMSIG0%2FAAI1CScbkHUDc1ENK2ZkFNDZnN43PX%2BKWSq3Z5%2BRRfOQVEWxSMvqX3ImqjGVchQyifNcTdhJGCtKcngmvLEB7uRgPLTXOjJJM%2Bqr6oHfFVIzCxgczDBjqkATdRRDu7X%2FSjgw4AmoD%2B%2FdUKGlKgeHDlQ6NibuyCG79SfWQ8p2y6Vyb36N2%2FHQZ7t7dZPi6Q2CFX7fRNkcECLTjQ8ythsuXd4tq0yrRfL%2Bqpv3MN6g4jvSqu4UsxbgZHftU7bGPVRLk%2FqZxFPJRUqMRpyfbVwubNxhBQGx3IaU%2Be7yghXnbAdOBp9XuWmGTG4cYnHppS5ns75e793pBTnlEesiOJ&X-Amz-Signature=e6587fce1aed3683c390f2d1e054999e21f79f1697493451aa6a47c8b066f820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I2JMC6O%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDx%2F67SNsb3oGRqY5gLlqFFtKcye9lkxMWg36Qi0cG1QIhAN9AQnnCVDIuXNZ4yfzK%2FqogT%2Fr54dFfvvZFNk8QoR6pKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf89rKvV4dtyioRCAq3ANbsZndawpNp%2BUsjgCf4tCPa2AEoL7eg3Qw%2BiEAKsZwwEty8L%2FQOFsD0cY9pwP6Pr1TrJJ0hZLbmwCkEx9456%2B4goBMxnxdR5TEpN1U5Tp%2Bdi2lNl0%2FIBTpynW9wRSXWwglGDbF4Qz5oHzVMYNUaBTNDLItGHlvwTmzlHeCbitJxD3euQFHaj2uMnxMtgtIlJhxXoCk4%2F3rheLUP5BYn8NcJXXptsl%2BulN77MOvwG7Z3H7FK3bEz78vlzn%2B9ORep6gvx%2BOSz1H0ahSzdEhXqfH4%2B3dq3Bq84JKoRFur2ecLH21f0fuR8YaCVMfa9%2FtBsSBiUGQq0Qxm%2FAxHOBEE3V8d0Gyd6xfK2eH3qm0ljlhj0UiU62nVK3vat5GAgp4YnVA8sLX6vovt0hNWYexwI6vaETha69%2FWkBHcw1OVHjMpmNUkpp2mXOWK9sqf6WSNFQrz1OTp%2Fa2RZifnzAZjnzTfj8xfG0uwGvHL16Tyu6OPPtjNNo%2FXgI5BVUiUK7nNOkOVk4eUde8sMSIG0%2FAAI1CScbkHUDc1ENK2ZkFNDZnN43PX%2BKWSq3Z5%2BRRfOQVEWxSMvqX3ImqjGVchQyifNcTdhJGCtKcngmvLEB7uRgPLTXOjJJM%2Bqr6oHfFVIzCxgczDBjqkATdRRDu7X%2FSjgw4AmoD%2B%2FdUKGlKgeHDlQ6NibuyCG79SfWQ8p2y6Vyb36N2%2FHQZ7t7dZPi6Q2CFX7fRNkcECLTjQ8ythsuXd4tq0yrRfL%2Bqpv3MN6g4jvSqu4UsxbgZHftU7bGPVRLk%2FqZxFPJRUqMRpyfbVwubNxhBQGx3IaU%2Be7yghXnbAdOBp9XuWmGTG4cYnHppS5ns75e793pBTnlEesiOJ&X-Amz-Signature=8c14a5f77b6f07de44847b08df2dbc5e01b0957edcf9ac7d7e5984ce9002f926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I2JMC6O%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDx%2F67SNsb3oGRqY5gLlqFFtKcye9lkxMWg36Qi0cG1QIhAN9AQnnCVDIuXNZ4yfzK%2FqogT%2Fr54dFfvvZFNk8QoR6pKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf89rKvV4dtyioRCAq3ANbsZndawpNp%2BUsjgCf4tCPa2AEoL7eg3Qw%2BiEAKsZwwEty8L%2FQOFsD0cY9pwP6Pr1TrJJ0hZLbmwCkEx9456%2B4goBMxnxdR5TEpN1U5Tp%2Bdi2lNl0%2FIBTpynW9wRSXWwglGDbF4Qz5oHzVMYNUaBTNDLItGHlvwTmzlHeCbitJxD3euQFHaj2uMnxMtgtIlJhxXoCk4%2F3rheLUP5BYn8NcJXXptsl%2BulN77MOvwG7Z3H7FK3bEz78vlzn%2B9ORep6gvx%2BOSz1H0ahSzdEhXqfH4%2B3dq3Bq84JKoRFur2ecLH21f0fuR8YaCVMfa9%2FtBsSBiUGQq0Qxm%2FAxHOBEE3V8d0Gyd6xfK2eH3qm0ljlhj0UiU62nVK3vat5GAgp4YnVA8sLX6vovt0hNWYexwI6vaETha69%2FWkBHcw1OVHjMpmNUkpp2mXOWK9sqf6WSNFQrz1OTp%2Fa2RZifnzAZjnzTfj8xfG0uwGvHL16Tyu6OPPtjNNo%2FXgI5BVUiUK7nNOkOVk4eUde8sMSIG0%2FAAI1CScbkHUDc1ENK2ZkFNDZnN43PX%2BKWSq3Z5%2BRRfOQVEWxSMvqX3ImqjGVchQyifNcTdhJGCtKcngmvLEB7uRgPLTXOjJJM%2Bqr6oHfFVIzCxgczDBjqkATdRRDu7X%2FSjgw4AmoD%2B%2FdUKGlKgeHDlQ6NibuyCG79SfWQ8p2y6Vyb36N2%2FHQZ7t7dZPi6Q2CFX7fRNkcECLTjQ8ythsuXd4tq0yrRfL%2Bqpv3MN6g4jvSqu4UsxbgZHftU7bGPVRLk%2FqZxFPJRUqMRpyfbVwubNxhBQGx3IaU%2Be7yghXnbAdOBp9XuWmGTG4cYnHppS5ns75e793pBTnlEesiOJ&X-Amz-Signature=93f9ab663e2ae68c55fa90b43c2a172bf9827631fe2b522d9bef7584ad4be37c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I2JMC6O%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDx%2F67SNsb3oGRqY5gLlqFFtKcye9lkxMWg36Qi0cG1QIhAN9AQnnCVDIuXNZ4yfzK%2FqogT%2Fr54dFfvvZFNk8QoR6pKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf89rKvV4dtyioRCAq3ANbsZndawpNp%2BUsjgCf4tCPa2AEoL7eg3Qw%2BiEAKsZwwEty8L%2FQOFsD0cY9pwP6Pr1TrJJ0hZLbmwCkEx9456%2B4goBMxnxdR5TEpN1U5Tp%2Bdi2lNl0%2FIBTpynW9wRSXWwglGDbF4Qz5oHzVMYNUaBTNDLItGHlvwTmzlHeCbitJxD3euQFHaj2uMnxMtgtIlJhxXoCk4%2F3rheLUP5BYn8NcJXXptsl%2BulN77MOvwG7Z3H7FK3bEz78vlzn%2B9ORep6gvx%2BOSz1H0ahSzdEhXqfH4%2B3dq3Bq84JKoRFur2ecLH21f0fuR8YaCVMfa9%2FtBsSBiUGQq0Qxm%2FAxHOBEE3V8d0Gyd6xfK2eH3qm0ljlhj0UiU62nVK3vat5GAgp4YnVA8sLX6vovt0hNWYexwI6vaETha69%2FWkBHcw1OVHjMpmNUkpp2mXOWK9sqf6WSNFQrz1OTp%2Fa2RZifnzAZjnzTfj8xfG0uwGvHL16Tyu6OPPtjNNo%2FXgI5BVUiUK7nNOkOVk4eUde8sMSIG0%2FAAI1CScbkHUDc1ENK2ZkFNDZnN43PX%2BKWSq3Z5%2BRRfOQVEWxSMvqX3ImqjGVchQyifNcTdhJGCtKcngmvLEB7uRgPLTXOjJJM%2Bqr6oHfFVIzCxgczDBjqkATdRRDu7X%2FSjgw4AmoD%2B%2FdUKGlKgeHDlQ6NibuyCG79SfWQ8p2y6Vyb36N2%2FHQZ7t7dZPi6Q2CFX7fRNkcECLTjQ8ythsuXd4tq0yrRfL%2Bqpv3MN6g4jvSqu4UsxbgZHftU7bGPVRLk%2FqZxFPJRUqMRpyfbVwubNxhBQGx3IaU%2Be7yghXnbAdOBp9XuWmGTG4cYnHppS5ns75e793pBTnlEesiOJ&X-Amz-Signature=3f72fc906e53076388bc7b07fe517670395d198454be0ed80bf856cefeaa5100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I2JMC6O%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDx%2F67SNsb3oGRqY5gLlqFFtKcye9lkxMWg36Qi0cG1QIhAN9AQnnCVDIuXNZ4yfzK%2FqogT%2Fr54dFfvvZFNk8QoR6pKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf89rKvV4dtyioRCAq3ANbsZndawpNp%2BUsjgCf4tCPa2AEoL7eg3Qw%2BiEAKsZwwEty8L%2FQOFsD0cY9pwP6Pr1TrJJ0hZLbmwCkEx9456%2B4goBMxnxdR5TEpN1U5Tp%2Bdi2lNl0%2FIBTpynW9wRSXWwglGDbF4Qz5oHzVMYNUaBTNDLItGHlvwTmzlHeCbitJxD3euQFHaj2uMnxMtgtIlJhxXoCk4%2F3rheLUP5BYn8NcJXXptsl%2BulN77MOvwG7Z3H7FK3bEz78vlzn%2B9ORep6gvx%2BOSz1H0ahSzdEhXqfH4%2B3dq3Bq84JKoRFur2ecLH21f0fuR8YaCVMfa9%2FtBsSBiUGQq0Qxm%2FAxHOBEE3V8d0Gyd6xfK2eH3qm0ljlhj0UiU62nVK3vat5GAgp4YnVA8sLX6vovt0hNWYexwI6vaETha69%2FWkBHcw1OVHjMpmNUkpp2mXOWK9sqf6WSNFQrz1OTp%2Fa2RZifnzAZjnzTfj8xfG0uwGvHL16Tyu6OPPtjNNo%2FXgI5BVUiUK7nNOkOVk4eUde8sMSIG0%2FAAI1CScbkHUDc1ENK2ZkFNDZnN43PX%2BKWSq3Z5%2BRRfOQVEWxSMvqX3ImqjGVchQyifNcTdhJGCtKcngmvLEB7uRgPLTXOjJJM%2Bqr6oHfFVIzCxgczDBjqkATdRRDu7X%2FSjgw4AmoD%2B%2FdUKGlKgeHDlQ6NibuyCG79SfWQ8p2y6Vyb36N2%2FHQZ7t7dZPi6Q2CFX7fRNkcECLTjQ8ythsuXd4tq0yrRfL%2Bqpv3MN6g4jvSqu4UsxbgZHftU7bGPVRLk%2FqZxFPJRUqMRpyfbVwubNxhBQGx3IaU%2Be7yghXnbAdOBp9XuWmGTG4cYnHppS5ns75e793pBTnlEesiOJ&X-Amz-Signature=5e4fd49481be4db543eb2ceb69d6b21cf548b77e3fd3a399b623ce3ce9ac410b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
