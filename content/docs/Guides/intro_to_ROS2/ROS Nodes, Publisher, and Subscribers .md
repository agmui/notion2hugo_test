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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VUREOQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICSfTV7F%2FxxQ6hxpMiKrnp%2FDBfi%2BiVmikkiTEWPIQ7GdAiAXRGyqhLBVdvK2PymRktvkFuyHQlLgmfu8KSyShGfQ%2FiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa%2FdB7YKsqrZRNtNMKtwDEjMLeM7UG%2BL3Zy4B0zWKA9%2FuDJX3bUEKzJRAQ2%2FtQvzn5KAlpJQM3D8VvT3I4l7hkhMnBPPU0p8cD1xhx%2B8dTBw8SaC1LzEykQuMUZbj7MYHWKxriyg93U30DHXjeco4dVYPkXqhEyOxvSoB%2BTxG07UapF9yYwXd4nhjeVxeaHj7vGp%2BYcr0KjwQA6ruCI7ZCGnpIYFVTYaccHVfBVfqM5Vi48QTf%2FPHXSvrLWyKxFlQDca7OTIs1uVV2iID37yFaKpXd5XQR5vOcu0Bq3GvacK3DGs7XmOOuQspqYu3Ud2h3IsUCWfy9r7HV%2FWw8%2F0hsiKyT93cnOJsuPU6bQaCIjEZ7wy15gaQTMJ2JbjAITmxg1bFkeg2IIQlP%2FPP475lUjsjiFE6gAQzb93qRSg3%2F2pDA%2BGLYGjr%2F33WWHcB8Q7Gho097H%2Fa%2FL5jtw1jSFeMtgYEapCIpqX9v5tod56P%2B%2FsAZnHgN4fugIZfK2dsNpRSOjOWhVej3OmJwdOck9slGKFYp7RIIn%2BbIXxBzFXMS2QBWoMRmCysQwuIS4JR0rpatRYt65ZI%2F4ovqRdaGgjb3DADfKc3Td8rb9U2JZE8LEsWy%2FCtyW3yIaJ1cRHOc1%2FnZ4Ojc%2BbOb%2FKOrbUwmMvSwAY6pgH%2Fh3maaJnknWts9SkicHwcnytxUZAgyrpaDH2YDdBUh9y6mOf%2BM1lN1CoCEyPHwtjCiZwCUbBSUNeXt5AwTCzi1faRkbySlRLPj%2Fyb4QFsHDnN73YHUkxRu16bxDK1AwrufvGgWk%2BVd8H5j8QoHFKXFcX%2BTxLzdYjF5Brh3WJw9zFckWO%2B%2FY3M%2BcqDig2rZfI2MP%2FNz8BoTXIj1lKlvm5iAxaQeTTI&X-Amz-Signature=d1f5e169c8b7fc2c825e2cd85e3ffa8e6ae94a5de0ea3bf8a6da49aa7b581734&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VUREOQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICSfTV7F%2FxxQ6hxpMiKrnp%2FDBfi%2BiVmikkiTEWPIQ7GdAiAXRGyqhLBVdvK2PymRktvkFuyHQlLgmfu8KSyShGfQ%2FiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa%2FdB7YKsqrZRNtNMKtwDEjMLeM7UG%2BL3Zy4B0zWKA9%2FuDJX3bUEKzJRAQ2%2FtQvzn5KAlpJQM3D8VvT3I4l7hkhMnBPPU0p8cD1xhx%2B8dTBw8SaC1LzEykQuMUZbj7MYHWKxriyg93U30DHXjeco4dVYPkXqhEyOxvSoB%2BTxG07UapF9yYwXd4nhjeVxeaHj7vGp%2BYcr0KjwQA6ruCI7ZCGnpIYFVTYaccHVfBVfqM5Vi48QTf%2FPHXSvrLWyKxFlQDca7OTIs1uVV2iID37yFaKpXd5XQR5vOcu0Bq3GvacK3DGs7XmOOuQspqYu3Ud2h3IsUCWfy9r7HV%2FWw8%2F0hsiKyT93cnOJsuPU6bQaCIjEZ7wy15gaQTMJ2JbjAITmxg1bFkeg2IIQlP%2FPP475lUjsjiFE6gAQzb93qRSg3%2F2pDA%2BGLYGjr%2F33WWHcB8Q7Gho097H%2Fa%2FL5jtw1jSFeMtgYEapCIpqX9v5tod56P%2B%2FsAZnHgN4fugIZfK2dsNpRSOjOWhVej3OmJwdOck9slGKFYp7RIIn%2BbIXxBzFXMS2QBWoMRmCysQwuIS4JR0rpatRYt65ZI%2F4ovqRdaGgjb3DADfKc3Td8rb9U2JZE8LEsWy%2FCtyW3yIaJ1cRHOc1%2FnZ4Ojc%2BbOb%2FKOrbUwmMvSwAY6pgH%2Fh3maaJnknWts9SkicHwcnytxUZAgyrpaDH2YDdBUh9y6mOf%2BM1lN1CoCEyPHwtjCiZwCUbBSUNeXt5AwTCzi1faRkbySlRLPj%2Fyb4QFsHDnN73YHUkxRu16bxDK1AwrufvGgWk%2BVd8H5j8QoHFKXFcX%2BTxLzdYjF5Brh3WJw9zFckWO%2B%2FY3M%2BcqDig2rZfI2MP%2FNz8BoTXIj1lKlvm5iAxaQeTTI&X-Amz-Signature=cf9ca42b5f3128f18826c7d71ed2b400f7a2c985f5e2fd58e6063a29c9196d56&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VUREOQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICSfTV7F%2FxxQ6hxpMiKrnp%2FDBfi%2BiVmikkiTEWPIQ7GdAiAXRGyqhLBVdvK2PymRktvkFuyHQlLgmfu8KSyShGfQ%2FiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa%2FdB7YKsqrZRNtNMKtwDEjMLeM7UG%2BL3Zy4B0zWKA9%2FuDJX3bUEKzJRAQ2%2FtQvzn5KAlpJQM3D8VvT3I4l7hkhMnBPPU0p8cD1xhx%2B8dTBw8SaC1LzEykQuMUZbj7MYHWKxriyg93U30DHXjeco4dVYPkXqhEyOxvSoB%2BTxG07UapF9yYwXd4nhjeVxeaHj7vGp%2BYcr0KjwQA6ruCI7ZCGnpIYFVTYaccHVfBVfqM5Vi48QTf%2FPHXSvrLWyKxFlQDca7OTIs1uVV2iID37yFaKpXd5XQR5vOcu0Bq3GvacK3DGs7XmOOuQspqYu3Ud2h3IsUCWfy9r7HV%2FWw8%2F0hsiKyT93cnOJsuPU6bQaCIjEZ7wy15gaQTMJ2JbjAITmxg1bFkeg2IIQlP%2FPP475lUjsjiFE6gAQzb93qRSg3%2F2pDA%2BGLYGjr%2F33WWHcB8Q7Gho097H%2Fa%2FL5jtw1jSFeMtgYEapCIpqX9v5tod56P%2B%2FsAZnHgN4fugIZfK2dsNpRSOjOWhVej3OmJwdOck9slGKFYp7RIIn%2BbIXxBzFXMS2QBWoMRmCysQwuIS4JR0rpatRYt65ZI%2F4ovqRdaGgjb3DADfKc3Td8rb9U2JZE8LEsWy%2FCtyW3yIaJ1cRHOc1%2FnZ4Ojc%2BbOb%2FKOrbUwmMvSwAY6pgH%2Fh3maaJnknWts9SkicHwcnytxUZAgyrpaDH2YDdBUh9y6mOf%2BM1lN1CoCEyPHwtjCiZwCUbBSUNeXt5AwTCzi1faRkbySlRLPj%2Fyb4QFsHDnN73YHUkxRu16bxDK1AwrufvGgWk%2BVd8H5j8QoHFKXFcX%2BTxLzdYjF5Brh3WJw9zFckWO%2B%2FY3M%2BcqDig2rZfI2MP%2FNz8BoTXIj1lKlvm5iAxaQeTTI&X-Amz-Signature=cadb7158b531035cc0984456c80cdc558542bbfdbfd99dca14454b16b644fa13&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VUREOQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICSfTV7F%2FxxQ6hxpMiKrnp%2FDBfi%2BiVmikkiTEWPIQ7GdAiAXRGyqhLBVdvK2PymRktvkFuyHQlLgmfu8KSyShGfQ%2FiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa%2FdB7YKsqrZRNtNMKtwDEjMLeM7UG%2BL3Zy4B0zWKA9%2FuDJX3bUEKzJRAQ2%2FtQvzn5KAlpJQM3D8VvT3I4l7hkhMnBPPU0p8cD1xhx%2B8dTBw8SaC1LzEykQuMUZbj7MYHWKxriyg93U30DHXjeco4dVYPkXqhEyOxvSoB%2BTxG07UapF9yYwXd4nhjeVxeaHj7vGp%2BYcr0KjwQA6ruCI7ZCGnpIYFVTYaccHVfBVfqM5Vi48QTf%2FPHXSvrLWyKxFlQDca7OTIs1uVV2iID37yFaKpXd5XQR5vOcu0Bq3GvacK3DGs7XmOOuQspqYu3Ud2h3IsUCWfy9r7HV%2FWw8%2F0hsiKyT93cnOJsuPU6bQaCIjEZ7wy15gaQTMJ2JbjAITmxg1bFkeg2IIQlP%2FPP475lUjsjiFE6gAQzb93qRSg3%2F2pDA%2BGLYGjr%2F33WWHcB8Q7Gho097H%2Fa%2FL5jtw1jSFeMtgYEapCIpqX9v5tod56P%2B%2FsAZnHgN4fugIZfK2dsNpRSOjOWhVej3OmJwdOck9slGKFYp7RIIn%2BbIXxBzFXMS2QBWoMRmCysQwuIS4JR0rpatRYt65ZI%2F4ovqRdaGgjb3DADfKc3Td8rb9U2JZE8LEsWy%2FCtyW3yIaJ1cRHOc1%2FnZ4Ojc%2BbOb%2FKOrbUwmMvSwAY6pgH%2Fh3maaJnknWts9SkicHwcnytxUZAgyrpaDH2YDdBUh9y6mOf%2BM1lN1CoCEyPHwtjCiZwCUbBSUNeXt5AwTCzi1faRkbySlRLPj%2Fyb4QFsHDnN73YHUkxRu16bxDK1AwrufvGgWk%2BVd8H5j8QoHFKXFcX%2BTxLzdYjF5Brh3WJw9zFckWO%2B%2FY3M%2BcqDig2rZfI2MP%2FNz8BoTXIj1lKlvm5iAxaQeTTI&X-Amz-Signature=c4c083b7271c88dba860c167157c88f49c7c9f5d9ad301ae801a800a1f80fa19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VUREOQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICSfTV7F%2FxxQ6hxpMiKrnp%2FDBfi%2BiVmikkiTEWPIQ7GdAiAXRGyqhLBVdvK2PymRktvkFuyHQlLgmfu8KSyShGfQ%2FiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa%2FdB7YKsqrZRNtNMKtwDEjMLeM7UG%2BL3Zy4B0zWKA9%2FuDJX3bUEKzJRAQ2%2FtQvzn5KAlpJQM3D8VvT3I4l7hkhMnBPPU0p8cD1xhx%2B8dTBw8SaC1LzEykQuMUZbj7MYHWKxriyg93U30DHXjeco4dVYPkXqhEyOxvSoB%2BTxG07UapF9yYwXd4nhjeVxeaHj7vGp%2BYcr0KjwQA6ruCI7ZCGnpIYFVTYaccHVfBVfqM5Vi48QTf%2FPHXSvrLWyKxFlQDca7OTIs1uVV2iID37yFaKpXd5XQR5vOcu0Bq3GvacK3DGs7XmOOuQspqYu3Ud2h3IsUCWfy9r7HV%2FWw8%2F0hsiKyT93cnOJsuPU6bQaCIjEZ7wy15gaQTMJ2JbjAITmxg1bFkeg2IIQlP%2FPP475lUjsjiFE6gAQzb93qRSg3%2F2pDA%2BGLYGjr%2F33WWHcB8Q7Gho097H%2Fa%2FL5jtw1jSFeMtgYEapCIpqX9v5tod56P%2B%2FsAZnHgN4fugIZfK2dsNpRSOjOWhVej3OmJwdOck9slGKFYp7RIIn%2BbIXxBzFXMS2QBWoMRmCysQwuIS4JR0rpatRYt65ZI%2F4ovqRdaGgjb3DADfKc3Td8rb9U2JZE8LEsWy%2FCtyW3yIaJ1cRHOc1%2FnZ4Ojc%2BbOb%2FKOrbUwmMvSwAY6pgH%2Fh3maaJnknWts9SkicHwcnytxUZAgyrpaDH2YDdBUh9y6mOf%2BM1lN1CoCEyPHwtjCiZwCUbBSUNeXt5AwTCzi1faRkbySlRLPj%2Fyb4QFsHDnN73YHUkxRu16bxDK1AwrufvGgWk%2BVd8H5j8QoHFKXFcX%2BTxLzdYjF5Brh3WJw9zFckWO%2B%2FY3M%2BcqDig2rZfI2MP%2FNz8BoTXIj1lKlvm5iAxaQeTTI&X-Amz-Signature=7e3e4b54e308c9e072d5253e352245f493c7d88e79fa152c11194ae3224f3c71&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VUREOQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICSfTV7F%2FxxQ6hxpMiKrnp%2FDBfi%2BiVmikkiTEWPIQ7GdAiAXRGyqhLBVdvK2PymRktvkFuyHQlLgmfu8KSyShGfQ%2FiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa%2FdB7YKsqrZRNtNMKtwDEjMLeM7UG%2BL3Zy4B0zWKA9%2FuDJX3bUEKzJRAQ2%2FtQvzn5KAlpJQM3D8VvT3I4l7hkhMnBPPU0p8cD1xhx%2B8dTBw8SaC1LzEykQuMUZbj7MYHWKxriyg93U30DHXjeco4dVYPkXqhEyOxvSoB%2BTxG07UapF9yYwXd4nhjeVxeaHj7vGp%2BYcr0KjwQA6ruCI7ZCGnpIYFVTYaccHVfBVfqM5Vi48QTf%2FPHXSvrLWyKxFlQDca7OTIs1uVV2iID37yFaKpXd5XQR5vOcu0Bq3GvacK3DGs7XmOOuQspqYu3Ud2h3IsUCWfy9r7HV%2FWw8%2F0hsiKyT93cnOJsuPU6bQaCIjEZ7wy15gaQTMJ2JbjAITmxg1bFkeg2IIQlP%2FPP475lUjsjiFE6gAQzb93qRSg3%2F2pDA%2BGLYGjr%2F33WWHcB8Q7Gho097H%2Fa%2FL5jtw1jSFeMtgYEapCIpqX9v5tod56P%2B%2FsAZnHgN4fugIZfK2dsNpRSOjOWhVej3OmJwdOck9slGKFYp7RIIn%2BbIXxBzFXMS2QBWoMRmCysQwuIS4JR0rpatRYt65ZI%2F4ovqRdaGgjb3DADfKc3Td8rb9U2JZE8LEsWy%2FCtyW3yIaJ1cRHOc1%2FnZ4Ojc%2BbOb%2FKOrbUwmMvSwAY6pgH%2Fh3maaJnknWts9SkicHwcnytxUZAgyrpaDH2YDdBUh9y6mOf%2BM1lN1CoCEyPHwtjCiZwCUbBSUNeXt5AwTCzi1faRkbySlRLPj%2Fyb4QFsHDnN73YHUkxRu16bxDK1AwrufvGgWk%2BVd8H5j8QoHFKXFcX%2BTxLzdYjF5Brh3WJw9zFckWO%2B%2FY3M%2BcqDig2rZfI2MP%2FNz8BoTXIj1lKlvm5iAxaQeTTI&X-Amz-Signature=b6fbf3e8aa6946ca6c396d49392dacaf02156997eba650ffedad328cf5fc33b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VUREOQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICSfTV7F%2FxxQ6hxpMiKrnp%2FDBfi%2BiVmikkiTEWPIQ7GdAiAXRGyqhLBVdvK2PymRktvkFuyHQlLgmfu8KSyShGfQ%2FiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa%2FdB7YKsqrZRNtNMKtwDEjMLeM7UG%2BL3Zy4B0zWKA9%2FuDJX3bUEKzJRAQ2%2FtQvzn5KAlpJQM3D8VvT3I4l7hkhMnBPPU0p8cD1xhx%2B8dTBw8SaC1LzEykQuMUZbj7MYHWKxriyg93U30DHXjeco4dVYPkXqhEyOxvSoB%2BTxG07UapF9yYwXd4nhjeVxeaHj7vGp%2BYcr0KjwQA6ruCI7ZCGnpIYFVTYaccHVfBVfqM5Vi48QTf%2FPHXSvrLWyKxFlQDca7OTIs1uVV2iID37yFaKpXd5XQR5vOcu0Bq3GvacK3DGs7XmOOuQspqYu3Ud2h3IsUCWfy9r7HV%2FWw8%2F0hsiKyT93cnOJsuPU6bQaCIjEZ7wy15gaQTMJ2JbjAITmxg1bFkeg2IIQlP%2FPP475lUjsjiFE6gAQzb93qRSg3%2F2pDA%2BGLYGjr%2F33WWHcB8Q7Gho097H%2Fa%2FL5jtw1jSFeMtgYEapCIpqX9v5tod56P%2B%2FsAZnHgN4fugIZfK2dsNpRSOjOWhVej3OmJwdOck9slGKFYp7RIIn%2BbIXxBzFXMS2QBWoMRmCysQwuIS4JR0rpatRYt65ZI%2F4ovqRdaGgjb3DADfKc3Td8rb9U2JZE8LEsWy%2FCtyW3yIaJ1cRHOc1%2FnZ4Ojc%2BbOb%2FKOrbUwmMvSwAY6pgH%2Fh3maaJnknWts9SkicHwcnytxUZAgyrpaDH2YDdBUh9y6mOf%2BM1lN1CoCEyPHwtjCiZwCUbBSUNeXt5AwTCzi1faRkbySlRLPj%2Fyb4QFsHDnN73YHUkxRu16bxDK1AwrufvGgWk%2BVd8H5j8QoHFKXFcX%2BTxLzdYjF5Brh3WJw9zFckWO%2B%2FY3M%2BcqDig2rZfI2MP%2FNz8BoTXIj1lKlvm5iAxaQeTTI&X-Amz-Signature=ef981d72545f34f6a962714245a2d43916ac51a4b7578e8b347ddbae144d3386&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VUREOQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICSfTV7F%2FxxQ6hxpMiKrnp%2FDBfi%2BiVmikkiTEWPIQ7GdAiAXRGyqhLBVdvK2PymRktvkFuyHQlLgmfu8KSyShGfQ%2FiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa%2FdB7YKsqrZRNtNMKtwDEjMLeM7UG%2BL3Zy4B0zWKA9%2FuDJX3bUEKzJRAQ2%2FtQvzn5KAlpJQM3D8VvT3I4l7hkhMnBPPU0p8cD1xhx%2B8dTBw8SaC1LzEykQuMUZbj7MYHWKxriyg93U30DHXjeco4dVYPkXqhEyOxvSoB%2BTxG07UapF9yYwXd4nhjeVxeaHj7vGp%2BYcr0KjwQA6ruCI7ZCGnpIYFVTYaccHVfBVfqM5Vi48QTf%2FPHXSvrLWyKxFlQDca7OTIs1uVV2iID37yFaKpXd5XQR5vOcu0Bq3GvacK3DGs7XmOOuQspqYu3Ud2h3IsUCWfy9r7HV%2FWw8%2F0hsiKyT93cnOJsuPU6bQaCIjEZ7wy15gaQTMJ2JbjAITmxg1bFkeg2IIQlP%2FPP475lUjsjiFE6gAQzb93qRSg3%2F2pDA%2BGLYGjr%2F33WWHcB8Q7Gho097H%2Fa%2FL5jtw1jSFeMtgYEapCIpqX9v5tod56P%2B%2FsAZnHgN4fugIZfK2dsNpRSOjOWhVej3OmJwdOck9slGKFYp7RIIn%2BbIXxBzFXMS2QBWoMRmCysQwuIS4JR0rpatRYt65ZI%2F4ovqRdaGgjb3DADfKc3Td8rb9U2JZE8LEsWy%2FCtyW3yIaJ1cRHOc1%2FnZ4Ojc%2BbOb%2FKOrbUwmMvSwAY6pgH%2Fh3maaJnknWts9SkicHwcnytxUZAgyrpaDH2YDdBUh9y6mOf%2BM1lN1CoCEyPHwtjCiZwCUbBSUNeXt5AwTCzi1faRkbySlRLPj%2Fyb4QFsHDnN73YHUkxRu16bxDK1AwrufvGgWk%2BVd8H5j8QoHFKXFcX%2BTxLzdYjF5Brh3WJw9zFckWO%2B%2FY3M%2BcqDig2rZfI2MP%2FNz8BoTXIj1lKlvm5iAxaQeTTI&X-Amz-Signature=b03f9ac914b7d8e0f2890ae1b3eec3c6da3c74afa7e32962cdde791bda71b790&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
