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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDF6IXIM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjXGfre3SycHF8TLCqaOMoJrUN3ZcWHlUPpOCstRSR3AiEAsDZxu7%2FnRTM%2BN3uoB9hgzMQbP125zxftxrOKboRjP8sq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGvduFn37%2Bex8p27zyrcAydrrqLa%2FPGAHjl%2BRRf0%2FQzEN3pnohIqar3x4olHwRgwmx2VXa%2B0piPYXhRR9cM%2BxhfB%2FeS9ZU6X63pnpT9yw4VyfFfuC3CRDpfF2soCN1nwKCBO0QJi9CHR%2BUCqrpQPSHgHzRvDgYo0JD0u%2Flprz1TZeWvwIdzUbIKx3gRvRdLmRecgTP8VrOlf35RohaZlNNmdTMMDpmS8077CoeEq5G%2FwG7so2PKOZ6DI67GqQRqhAlKAvAQN4HJGgMtLYg%2BRbAi2w31g1kABBmIg2ihgGGFsbscxGrrYSQv2LClqPDuS8VwjpaEl8fdUbhu1oa%2B58l5NnHpfm4Y1fgBSka3ouH5vNlW2jC56N0CTr5jjrgxgBk8n02uBlKyf%2F4rEhsr9gILlbIAARxSZCwxv0xiGHlTfvy%2FkhvqGd6AP8gAiGCYJP%2Fjnla7EAeQhCfovIBf0AitQOPpK7EzIw1R%2BpzidatmDtdb3ckJivDt7VqbsbLAYquxoL3jwRBfBqXHNME4ZTmYf17ISuHQbaaeJz6IrnIwLToGJJLPW4o%2BtyVbhWkLXj1mI8KMcDwaIBS16xG8ReyD4Nn5sIRNFjQHc8CAaN1FE%2Fsz9lkk9LTJNCj7YvzqB2oXB1QT4dc7hpazjMPWWpb4GOqUBcsROs5ng1s5G%2Fennff%2FjkyClDeVN1GEVFSFOdzyv%2BaQyfH0SF20kXp5y%2B0uQ3SS%2FWxyCj1xeIdY2wuhS9Lz3G0B4ec2F1UR4y%2B8h5%2FZRHHw9NwvqFc4hom3z8h4LIo5PkgbiJtfXyyWIU9s5EHgQbPlIdwKwdInCbYIcGIHlOEm2JgEBr%2BSFFMq0RLBFufC20K5WyJwcmkm8IpAKC1ZAaYsaSaVC&X-Amz-Signature=04cba88c2f0a129c1d5cbe91d144a873b7e7bfe8d116baea31736db42b5c500b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDF6IXIM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjXGfre3SycHF8TLCqaOMoJrUN3ZcWHlUPpOCstRSR3AiEAsDZxu7%2FnRTM%2BN3uoB9hgzMQbP125zxftxrOKboRjP8sq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGvduFn37%2Bex8p27zyrcAydrrqLa%2FPGAHjl%2BRRf0%2FQzEN3pnohIqar3x4olHwRgwmx2VXa%2B0piPYXhRR9cM%2BxhfB%2FeS9ZU6X63pnpT9yw4VyfFfuC3CRDpfF2soCN1nwKCBO0QJi9CHR%2BUCqrpQPSHgHzRvDgYo0JD0u%2Flprz1TZeWvwIdzUbIKx3gRvRdLmRecgTP8VrOlf35RohaZlNNmdTMMDpmS8077CoeEq5G%2FwG7so2PKOZ6DI67GqQRqhAlKAvAQN4HJGgMtLYg%2BRbAi2w31g1kABBmIg2ihgGGFsbscxGrrYSQv2LClqPDuS8VwjpaEl8fdUbhu1oa%2B58l5NnHpfm4Y1fgBSka3ouH5vNlW2jC56N0CTr5jjrgxgBk8n02uBlKyf%2F4rEhsr9gILlbIAARxSZCwxv0xiGHlTfvy%2FkhvqGd6AP8gAiGCYJP%2Fjnla7EAeQhCfovIBf0AitQOPpK7EzIw1R%2BpzidatmDtdb3ckJivDt7VqbsbLAYquxoL3jwRBfBqXHNME4ZTmYf17ISuHQbaaeJz6IrnIwLToGJJLPW4o%2BtyVbhWkLXj1mI8KMcDwaIBS16xG8ReyD4Nn5sIRNFjQHc8CAaN1FE%2Fsz9lkk9LTJNCj7YvzqB2oXB1QT4dc7hpazjMPWWpb4GOqUBcsROs5ng1s5G%2Fennff%2FjkyClDeVN1GEVFSFOdzyv%2BaQyfH0SF20kXp5y%2B0uQ3SS%2FWxyCj1xeIdY2wuhS9Lz3G0B4ec2F1UR4y%2B8h5%2FZRHHw9NwvqFc4hom3z8h4LIo5PkgbiJtfXyyWIU9s5EHgQbPlIdwKwdInCbYIcGIHlOEm2JgEBr%2BSFFMq0RLBFufC20K5WyJwcmkm8IpAKC1ZAaYsaSaVC&X-Amz-Signature=e1ded2ddeed2464a4dff1d023268fc84b483c9156fb71fdf298f22a70d9db68a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDF6IXIM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjXGfre3SycHF8TLCqaOMoJrUN3ZcWHlUPpOCstRSR3AiEAsDZxu7%2FnRTM%2BN3uoB9hgzMQbP125zxftxrOKboRjP8sq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGvduFn37%2Bex8p27zyrcAydrrqLa%2FPGAHjl%2BRRf0%2FQzEN3pnohIqar3x4olHwRgwmx2VXa%2B0piPYXhRR9cM%2BxhfB%2FeS9ZU6X63pnpT9yw4VyfFfuC3CRDpfF2soCN1nwKCBO0QJi9CHR%2BUCqrpQPSHgHzRvDgYo0JD0u%2Flprz1TZeWvwIdzUbIKx3gRvRdLmRecgTP8VrOlf35RohaZlNNmdTMMDpmS8077CoeEq5G%2FwG7so2PKOZ6DI67GqQRqhAlKAvAQN4HJGgMtLYg%2BRbAi2w31g1kABBmIg2ihgGGFsbscxGrrYSQv2LClqPDuS8VwjpaEl8fdUbhu1oa%2B58l5NnHpfm4Y1fgBSka3ouH5vNlW2jC56N0CTr5jjrgxgBk8n02uBlKyf%2F4rEhsr9gILlbIAARxSZCwxv0xiGHlTfvy%2FkhvqGd6AP8gAiGCYJP%2Fjnla7EAeQhCfovIBf0AitQOPpK7EzIw1R%2BpzidatmDtdb3ckJivDt7VqbsbLAYquxoL3jwRBfBqXHNME4ZTmYf17ISuHQbaaeJz6IrnIwLToGJJLPW4o%2BtyVbhWkLXj1mI8KMcDwaIBS16xG8ReyD4Nn5sIRNFjQHc8CAaN1FE%2Fsz9lkk9LTJNCj7YvzqB2oXB1QT4dc7hpazjMPWWpb4GOqUBcsROs5ng1s5G%2Fennff%2FjkyClDeVN1GEVFSFOdzyv%2BaQyfH0SF20kXp5y%2B0uQ3SS%2FWxyCj1xeIdY2wuhS9Lz3G0B4ec2F1UR4y%2B8h5%2FZRHHw9NwvqFc4hom3z8h4LIo5PkgbiJtfXyyWIU9s5EHgQbPlIdwKwdInCbYIcGIHlOEm2JgEBr%2BSFFMq0RLBFufC20K5WyJwcmkm8IpAKC1ZAaYsaSaVC&X-Amz-Signature=109a1e227a7038d0c023ac4717123d499513153d6c3c3bf0646bf4171407cc39&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDF6IXIM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjXGfre3SycHF8TLCqaOMoJrUN3ZcWHlUPpOCstRSR3AiEAsDZxu7%2FnRTM%2BN3uoB9hgzMQbP125zxftxrOKboRjP8sq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGvduFn37%2Bex8p27zyrcAydrrqLa%2FPGAHjl%2BRRf0%2FQzEN3pnohIqar3x4olHwRgwmx2VXa%2B0piPYXhRR9cM%2BxhfB%2FeS9ZU6X63pnpT9yw4VyfFfuC3CRDpfF2soCN1nwKCBO0QJi9CHR%2BUCqrpQPSHgHzRvDgYo0JD0u%2Flprz1TZeWvwIdzUbIKx3gRvRdLmRecgTP8VrOlf35RohaZlNNmdTMMDpmS8077CoeEq5G%2FwG7so2PKOZ6DI67GqQRqhAlKAvAQN4HJGgMtLYg%2BRbAi2w31g1kABBmIg2ihgGGFsbscxGrrYSQv2LClqPDuS8VwjpaEl8fdUbhu1oa%2B58l5NnHpfm4Y1fgBSka3ouH5vNlW2jC56N0CTr5jjrgxgBk8n02uBlKyf%2F4rEhsr9gILlbIAARxSZCwxv0xiGHlTfvy%2FkhvqGd6AP8gAiGCYJP%2Fjnla7EAeQhCfovIBf0AitQOPpK7EzIw1R%2BpzidatmDtdb3ckJivDt7VqbsbLAYquxoL3jwRBfBqXHNME4ZTmYf17ISuHQbaaeJz6IrnIwLToGJJLPW4o%2BtyVbhWkLXj1mI8KMcDwaIBS16xG8ReyD4Nn5sIRNFjQHc8CAaN1FE%2Fsz9lkk9LTJNCj7YvzqB2oXB1QT4dc7hpazjMPWWpb4GOqUBcsROs5ng1s5G%2Fennff%2FjkyClDeVN1GEVFSFOdzyv%2BaQyfH0SF20kXp5y%2B0uQ3SS%2FWxyCj1xeIdY2wuhS9Lz3G0B4ec2F1UR4y%2B8h5%2FZRHHw9NwvqFc4hom3z8h4LIo5PkgbiJtfXyyWIU9s5EHgQbPlIdwKwdInCbYIcGIHlOEm2JgEBr%2BSFFMq0RLBFufC20K5WyJwcmkm8IpAKC1ZAaYsaSaVC&X-Amz-Signature=cb9eccf3bc068277e80615b06e952378f3c3c819ba94e66a63e331987b6897dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDF6IXIM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjXGfre3SycHF8TLCqaOMoJrUN3ZcWHlUPpOCstRSR3AiEAsDZxu7%2FnRTM%2BN3uoB9hgzMQbP125zxftxrOKboRjP8sq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGvduFn37%2Bex8p27zyrcAydrrqLa%2FPGAHjl%2BRRf0%2FQzEN3pnohIqar3x4olHwRgwmx2VXa%2B0piPYXhRR9cM%2BxhfB%2FeS9ZU6X63pnpT9yw4VyfFfuC3CRDpfF2soCN1nwKCBO0QJi9CHR%2BUCqrpQPSHgHzRvDgYo0JD0u%2Flprz1TZeWvwIdzUbIKx3gRvRdLmRecgTP8VrOlf35RohaZlNNmdTMMDpmS8077CoeEq5G%2FwG7so2PKOZ6DI67GqQRqhAlKAvAQN4HJGgMtLYg%2BRbAi2w31g1kABBmIg2ihgGGFsbscxGrrYSQv2LClqPDuS8VwjpaEl8fdUbhu1oa%2B58l5NnHpfm4Y1fgBSka3ouH5vNlW2jC56N0CTr5jjrgxgBk8n02uBlKyf%2F4rEhsr9gILlbIAARxSZCwxv0xiGHlTfvy%2FkhvqGd6AP8gAiGCYJP%2Fjnla7EAeQhCfovIBf0AitQOPpK7EzIw1R%2BpzidatmDtdb3ckJivDt7VqbsbLAYquxoL3jwRBfBqXHNME4ZTmYf17ISuHQbaaeJz6IrnIwLToGJJLPW4o%2BtyVbhWkLXj1mI8KMcDwaIBS16xG8ReyD4Nn5sIRNFjQHc8CAaN1FE%2Fsz9lkk9LTJNCj7YvzqB2oXB1QT4dc7hpazjMPWWpb4GOqUBcsROs5ng1s5G%2Fennff%2FjkyClDeVN1GEVFSFOdzyv%2BaQyfH0SF20kXp5y%2B0uQ3SS%2FWxyCj1xeIdY2wuhS9Lz3G0B4ec2F1UR4y%2B8h5%2FZRHHw9NwvqFc4hom3z8h4LIo5PkgbiJtfXyyWIU9s5EHgQbPlIdwKwdInCbYIcGIHlOEm2JgEBr%2BSFFMq0RLBFufC20K5WyJwcmkm8IpAKC1ZAaYsaSaVC&X-Amz-Signature=db5ae1c718cd73d6380281cd942014228a62fbb727e38ff733cb1160c3d93c48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDF6IXIM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjXGfre3SycHF8TLCqaOMoJrUN3ZcWHlUPpOCstRSR3AiEAsDZxu7%2FnRTM%2BN3uoB9hgzMQbP125zxftxrOKboRjP8sq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGvduFn37%2Bex8p27zyrcAydrrqLa%2FPGAHjl%2BRRf0%2FQzEN3pnohIqar3x4olHwRgwmx2VXa%2B0piPYXhRR9cM%2BxhfB%2FeS9ZU6X63pnpT9yw4VyfFfuC3CRDpfF2soCN1nwKCBO0QJi9CHR%2BUCqrpQPSHgHzRvDgYo0JD0u%2Flprz1TZeWvwIdzUbIKx3gRvRdLmRecgTP8VrOlf35RohaZlNNmdTMMDpmS8077CoeEq5G%2FwG7so2PKOZ6DI67GqQRqhAlKAvAQN4HJGgMtLYg%2BRbAi2w31g1kABBmIg2ihgGGFsbscxGrrYSQv2LClqPDuS8VwjpaEl8fdUbhu1oa%2B58l5NnHpfm4Y1fgBSka3ouH5vNlW2jC56N0CTr5jjrgxgBk8n02uBlKyf%2F4rEhsr9gILlbIAARxSZCwxv0xiGHlTfvy%2FkhvqGd6AP8gAiGCYJP%2Fjnla7EAeQhCfovIBf0AitQOPpK7EzIw1R%2BpzidatmDtdb3ckJivDt7VqbsbLAYquxoL3jwRBfBqXHNME4ZTmYf17ISuHQbaaeJz6IrnIwLToGJJLPW4o%2BtyVbhWkLXj1mI8KMcDwaIBS16xG8ReyD4Nn5sIRNFjQHc8CAaN1FE%2Fsz9lkk9LTJNCj7YvzqB2oXB1QT4dc7hpazjMPWWpb4GOqUBcsROs5ng1s5G%2Fennff%2FjkyClDeVN1GEVFSFOdzyv%2BaQyfH0SF20kXp5y%2B0uQ3SS%2FWxyCj1xeIdY2wuhS9Lz3G0B4ec2F1UR4y%2B8h5%2FZRHHw9NwvqFc4hom3z8h4LIo5PkgbiJtfXyyWIU9s5EHgQbPlIdwKwdInCbYIcGIHlOEm2JgEBr%2BSFFMq0RLBFufC20K5WyJwcmkm8IpAKC1ZAaYsaSaVC&X-Amz-Signature=4f5a5c6cded27f1689126642be6ae200112a9bac19c9d75e707f06247bf7095c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDF6IXIM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjXGfre3SycHF8TLCqaOMoJrUN3ZcWHlUPpOCstRSR3AiEAsDZxu7%2FnRTM%2BN3uoB9hgzMQbP125zxftxrOKboRjP8sq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGvduFn37%2Bex8p27zyrcAydrrqLa%2FPGAHjl%2BRRf0%2FQzEN3pnohIqar3x4olHwRgwmx2VXa%2B0piPYXhRR9cM%2BxhfB%2FeS9ZU6X63pnpT9yw4VyfFfuC3CRDpfF2soCN1nwKCBO0QJi9CHR%2BUCqrpQPSHgHzRvDgYo0JD0u%2Flprz1TZeWvwIdzUbIKx3gRvRdLmRecgTP8VrOlf35RohaZlNNmdTMMDpmS8077CoeEq5G%2FwG7so2PKOZ6DI67GqQRqhAlKAvAQN4HJGgMtLYg%2BRbAi2w31g1kABBmIg2ihgGGFsbscxGrrYSQv2LClqPDuS8VwjpaEl8fdUbhu1oa%2B58l5NnHpfm4Y1fgBSka3ouH5vNlW2jC56N0CTr5jjrgxgBk8n02uBlKyf%2F4rEhsr9gILlbIAARxSZCwxv0xiGHlTfvy%2FkhvqGd6AP8gAiGCYJP%2Fjnla7EAeQhCfovIBf0AitQOPpK7EzIw1R%2BpzidatmDtdb3ckJivDt7VqbsbLAYquxoL3jwRBfBqXHNME4ZTmYf17ISuHQbaaeJz6IrnIwLToGJJLPW4o%2BtyVbhWkLXj1mI8KMcDwaIBS16xG8ReyD4Nn5sIRNFjQHc8CAaN1FE%2Fsz9lkk9LTJNCj7YvzqB2oXB1QT4dc7hpazjMPWWpb4GOqUBcsROs5ng1s5G%2Fennff%2FjkyClDeVN1GEVFSFOdzyv%2BaQyfH0SF20kXp5y%2B0uQ3SS%2FWxyCj1xeIdY2wuhS9Lz3G0B4ec2F1UR4y%2B8h5%2FZRHHw9NwvqFc4hom3z8h4LIo5PkgbiJtfXyyWIU9s5EHgQbPlIdwKwdInCbYIcGIHlOEm2JgEBr%2BSFFMq0RLBFufC20K5WyJwcmkm8IpAKC1ZAaYsaSaVC&X-Amz-Signature=8f8e9558285c4296479334fe006b49ef343d564fb83acde18c271c1af3e2a0da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDF6IXIM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjXGfre3SycHF8TLCqaOMoJrUN3ZcWHlUPpOCstRSR3AiEAsDZxu7%2FnRTM%2BN3uoB9hgzMQbP125zxftxrOKboRjP8sq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGvduFn37%2Bex8p27zyrcAydrrqLa%2FPGAHjl%2BRRf0%2FQzEN3pnohIqar3x4olHwRgwmx2VXa%2B0piPYXhRR9cM%2BxhfB%2FeS9ZU6X63pnpT9yw4VyfFfuC3CRDpfF2soCN1nwKCBO0QJi9CHR%2BUCqrpQPSHgHzRvDgYo0JD0u%2Flprz1TZeWvwIdzUbIKx3gRvRdLmRecgTP8VrOlf35RohaZlNNmdTMMDpmS8077CoeEq5G%2FwG7so2PKOZ6DI67GqQRqhAlKAvAQN4HJGgMtLYg%2BRbAi2w31g1kABBmIg2ihgGGFsbscxGrrYSQv2LClqPDuS8VwjpaEl8fdUbhu1oa%2B58l5NnHpfm4Y1fgBSka3ouH5vNlW2jC56N0CTr5jjrgxgBk8n02uBlKyf%2F4rEhsr9gILlbIAARxSZCwxv0xiGHlTfvy%2FkhvqGd6AP8gAiGCYJP%2Fjnla7EAeQhCfovIBf0AitQOPpK7EzIw1R%2BpzidatmDtdb3ckJivDt7VqbsbLAYquxoL3jwRBfBqXHNME4ZTmYf17ISuHQbaaeJz6IrnIwLToGJJLPW4o%2BtyVbhWkLXj1mI8KMcDwaIBS16xG8ReyD4Nn5sIRNFjQHc8CAaN1FE%2Fsz9lkk9LTJNCj7YvzqB2oXB1QT4dc7hpazjMPWWpb4GOqUBcsROs5ng1s5G%2Fennff%2FjkyClDeVN1GEVFSFOdzyv%2BaQyfH0SF20kXp5y%2B0uQ3SS%2FWxyCj1xeIdY2wuhS9Lz3G0B4ec2F1UR4y%2B8h5%2FZRHHw9NwvqFc4hom3z8h4LIo5PkgbiJtfXyyWIU9s5EHgQbPlIdwKwdInCbYIcGIHlOEm2JgEBr%2BSFFMq0RLBFufC20K5WyJwcmkm8IpAKC1ZAaYsaSaVC&X-Amz-Signature=9be0db9e215549f074f9465c0be4230d8377b7fc929e9a14e5fe12cf16cade38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
