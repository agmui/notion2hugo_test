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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNDPVOA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0O17R95lFquCWZEJ2mZ7568DG9F3JoGnX%2BWZaawdyvgIgWkzRM3mdLzbOwREnTUeGOJHbvRqQg0u2ka3O6rktjekqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMWo%2FnuMreaq3TeFCrcA0compL%2FNCvcjxj1cc%2FqV0lWxuzAAE9eHxVJxlBwc1fG12JxnLdjSJsMYE7mRy9OQUhHTPyoSKXeT7SeAR7I7rl%2FrC13qDmfASTgl5tbDpUfoTLR2cHl65sLvQzNY1rkH020LPbYmZB0SSUflq61jk%2Fa3dn1vpJ658YoYLMTpi8RWbpOAXWT6vIKpc1QceD2XWTQ1FD7XATB3rKPDEHjf%2BuNJOYDCXKInEWhQHDPTOTzup2X2Im3DgIelgmdYhwZs0pYIaqhO7UhJlfl%2FCFknpmpjlxDZMmf%2BFEtfahSCsMTuTGWgJi1OeNPCL40PikkI2YsnN2ThlTGMjKnFK8Wj9xCHWWzZm0YyTI4JSqZh2DTLmG6r0tRgA5ZWD0stFwUBt195JZibJneM1rNy33L0q0b0c1P6RPMXtCBf%2BPrHiHqVSVIgqyYANwwpLv%2Fj20j8RQ1p9bB1pkgw0JWI8Co4%2FERq0FSqtDnZN46rJbwysjCKm1h5BwSSKe4ADn6rScock%2FLlWyZC%2F3YocaiA0yoBn7%2FGOQIBp9tst1u0hPVuhmq38JNI5zTH30R0Mro3Hbw%2BOVeQ2Fp4FHcQyITY32mQWG%2Fhshuf7gB3ksfyjGkPMNZLRS4g%2FPLEdm8KPfMMMy7yb4GOqUB8Ss0TTvxDvLHWSfoMnct8U%2FpEtI43RGPP1SA3Gc2%2BGGqz5xKztoFd0wAjkXwmnschGAj6aYSMl8wcLM8z7P5xZ2pUJCVCqrUcsfOTqkGzOxeTnX0t8O00kolC%2B97eEBiK8HQ6lO5KFXDNkIXaQeKFnvHOOiKLNrD80rxX7EQnMUaiCI%2FpfsyJv2LJynRhSLZp2zzECyuBDvheNzt6oRCH7SAxKPF&X-Amz-Signature=d958699c58e78ada757597fd2c749a339eac4645f1f4a17526008c893c8f8573&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNDPVOA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0O17R95lFquCWZEJ2mZ7568DG9F3JoGnX%2BWZaawdyvgIgWkzRM3mdLzbOwREnTUeGOJHbvRqQg0u2ka3O6rktjekqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMWo%2FnuMreaq3TeFCrcA0compL%2FNCvcjxj1cc%2FqV0lWxuzAAE9eHxVJxlBwc1fG12JxnLdjSJsMYE7mRy9OQUhHTPyoSKXeT7SeAR7I7rl%2FrC13qDmfASTgl5tbDpUfoTLR2cHl65sLvQzNY1rkH020LPbYmZB0SSUflq61jk%2Fa3dn1vpJ658YoYLMTpi8RWbpOAXWT6vIKpc1QceD2XWTQ1FD7XATB3rKPDEHjf%2BuNJOYDCXKInEWhQHDPTOTzup2X2Im3DgIelgmdYhwZs0pYIaqhO7UhJlfl%2FCFknpmpjlxDZMmf%2BFEtfahSCsMTuTGWgJi1OeNPCL40PikkI2YsnN2ThlTGMjKnFK8Wj9xCHWWzZm0YyTI4JSqZh2DTLmG6r0tRgA5ZWD0stFwUBt195JZibJneM1rNy33L0q0b0c1P6RPMXtCBf%2BPrHiHqVSVIgqyYANwwpLv%2Fj20j8RQ1p9bB1pkgw0JWI8Co4%2FERq0FSqtDnZN46rJbwysjCKm1h5BwSSKe4ADn6rScock%2FLlWyZC%2F3YocaiA0yoBn7%2FGOQIBp9tst1u0hPVuhmq38JNI5zTH30R0Mro3Hbw%2BOVeQ2Fp4FHcQyITY32mQWG%2Fhshuf7gB3ksfyjGkPMNZLRS4g%2FPLEdm8KPfMMMy7yb4GOqUB8Ss0TTvxDvLHWSfoMnct8U%2FpEtI43RGPP1SA3Gc2%2BGGqz5xKztoFd0wAjkXwmnschGAj6aYSMl8wcLM8z7P5xZ2pUJCVCqrUcsfOTqkGzOxeTnX0t8O00kolC%2B97eEBiK8HQ6lO5KFXDNkIXaQeKFnvHOOiKLNrD80rxX7EQnMUaiCI%2FpfsyJv2LJynRhSLZp2zzECyuBDvheNzt6oRCH7SAxKPF&X-Amz-Signature=245d72ec1ca887c3aee34171540297bff6625b482d14fa0b811bd98f6a61a243&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNDPVOA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0O17R95lFquCWZEJ2mZ7568DG9F3JoGnX%2BWZaawdyvgIgWkzRM3mdLzbOwREnTUeGOJHbvRqQg0u2ka3O6rktjekqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMWo%2FnuMreaq3TeFCrcA0compL%2FNCvcjxj1cc%2FqV0lWxuzAAE9eHxVJxlBwc1fG12JxnLdjSJsMYE7mRy9OQUhHTPyoSKXeT7SeAR7I7rl%2FrC13qDmfASTgl5tbDpUfoTLR2cHl65sLvQzNY1rkH020LPbYmZB0SSUflq61jk%2Fa3dn1vpJ658YoYLMTpi8RWbpOAXWT6vIKpc1QceD2XWTQ1FD7XATB3rKPDEHjf%2BuNJOYDCXKInEWhQHDPTOTzup2X2Im3DgIelgmdYhwZs0pYIaqhO7UhJlfl%2FCFknpmpjlxDZMmf%2BFEtfahSCsMTuTGWgJi1OeNPCL40PikkI2YsnN2ThlTGMjKnFK8Wj9xCHWWzZm0YyTI4JSqZh2DTLmG6r0tRgA5ZWD0stFwUBt195JZibJneM1rNy33L0q0b0c1P6RPMXtCBf%2BPrHiHqVSVIgqyYANwwpLv%2Fj20j8RQ1p9bB1pkgw0JWI8Co4%2FERq0FSqtDnZN46rJbwysjCKm1h5BwSSKe4ADn6rScock%2FLlWyZC%2F3YocaiA0yoBn7%2FGOQIBp9tst1u0hPVuhmq38JNI5zTH30R0Mro3Hbw%2BOVeQ2Fp4FHcQyITY32mQWG%2Fhshuf7gB3ksfyjGkPMNZLRS4g%2FPLEdm8KPfMMMy7yb4GOqUB8Ss0TTvxDvLHWSfoMnct8U%2FpEtI43RGPP1SA3Gc2%2BGGqz5xKztoFd0wAjkXwmnschGAj6aYSMl8wcLM8z7P5xZ2pUJCVCqrUcsfOTqkGzOxeTnX0t8O00kolC%2B97eEBiK8HQ6lO5KFXDNkIXaQeKFnvHOOiKLNrD80rxX7EQnMUaiCI%2FpfsyJv2LJynRhSLZp2zzECyuBDvheNzt6oRCH7SAxKPF&X-Amz-Signature=83a6d3b67cd3fb2c008027264fb9acba131c3f1d77093b7a56917c21a9f65656&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNDPVOA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0O17R95lFquCWZEJ2mZ7568DG9F3JoGnX%2BWZaawdyvgIgWkzRM3mdLzbOwREnTUeGOJHbvRqQg0u2ka3O6rktjekqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMWo%2FnuMreaq3TeFCrcA0compL%2FNCvcjxj1cc%2FqV0lWxuzAAE9eHxVJxlBwc1fG12JxnLdjSJsMYE7mRy9OQUhHTPyoSKXeT7SeAR7I7rl%2FrC13qDmfASTgl5tbDpUfoTLR2cHl65sLvQzNY1rkH020LPbYmZB0SSUflq61jk%2Fa3dn1vpJ658YoYLMTpi8RWbpOAXWT6vIKpc1QceD2XWTQ1FD7XATB3rKPDEHjf%2BuNJOYDCXKInEWhQHDPTOTzup2X2Im3DgIelgmdYhwZs0pYIaqhO7UhJlfl%2FCFknpmpjlxDZMmf%2BFEtfahSCsMTuTGWgJi1OeNPCL40PikkI2YsnN2ThlTGMjKnFK8Wj9xCHWWzZm0YyTI4JSqZh2DTLmG6r0tRgA5ZWD0stFwUBt195JZibJneM1rNy33L0q0b0c1P6RPMXtCBf%2BPrHiHqVSVIgqyYANwwpLv%2Fj20j8RQ1p9bB1pkgw0JWI8Co4%2FERq0FSqtDnZN46rJbwysjCKm1h5BwSSKe4ADn6rScock%2FLlWyZC%2F3YocaiA0yoBn7%2FGOQIBp9tst1u0hPVuhmq38JNI5zTH30R0Mro3Hbw%2BOVeQ2Fp4FHcQyITY32mQWG%2Fhshuf7gB3ksfyjGkPMNZLRS4g%2FPLEdm8KPfMMMy7yb4GOqUB8Ss0TTvxDvLHWSfoMnct8U%2FpEtI43RGPP1SA3Gc2%2BGGqz5xKztoFd0wAjkXwmnschGAj6aYSMl8wcLM8z7P5xZ2pUJCVCqrUcsfOTqkGzOxeTnX0t8O00kolC%2B97eEBiK8HQ6lO5KFXDNkIXaQeKFnvHOOiKLNrD80rxX7EQnMUaiCI%2FpfsyJv2LJynRhSLZp2zzECyuBDvheNzt6oRCH7SAxKPF&X-Amz-Signature=b2f97d541f66b41aeb700c1c47b50d017d6e3c862a6a8ce51a298e92d643d4a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNDPVOA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0O17R95lFquCWZEJ2mZ7568DG9F3JoGnX%2BWZaawdyvgIgWkzRM3mdLzbOwREnTUeGOJHbvRqQg0u2ka3O6rktjekqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMWo%2FnuMreaq3TeFCrcA0compL%2FNCvcjxj1cc%2FqV0lWxuzAAE9eHxVJxlBwc1fG12JxnLdjSJsMYE7mRy9OQUhHTPyoSKXeT7SeAR7I7rl%2FrC13qDmfASTgl5tbDpUfoTLR2cHl65sLvQzNY1rkH020LPbYmZB0SSUflq61jk%2Fa3dn1vpJ658YoYLMTpi8RWbpOAXWT6vIKpc1QceD2XWTQ1FD7XATB3rKPDEHjf%2BuNJOYDCXKInEWhQHDPTOTzup2X2Im3DgIelgmdYhwZs0pYIaqhO7UhJlfl%2FCFknpmpjlxDZMmf%2BFEtfahSCsMTuTGWgJi1OeNPCL40PikkI2YsnN2ThlTGMjKnFK8Wj9xCHWWzZm0YyTI4JSqZh2DTLmG6r0tRgA5ZWD0stFwUBt195JZibJneM1rNy33L0q0b0c1P6RPMXtCBf%2BPrHiHqVSVIgqyYANwwpLv%2Fj20j8RQ1p9bB1pkgw0JWI8Co4%2FERq0FSqtDnZN46rJbwysjCKm1h5BwSSKe4ADn6rScock%2FLlWyZC%2F3YocaiA0yoBn7%2FGOQIBp9tst1u0hPVuhmq38JNI5zTH30R0Mro3Hbw%2BOVeQ2Fp4FHcQyITY32mQWG%2Fhshuf7gB3ksfyjGkPMNZLRS4g%2FPLEdm8KPfMMMy7yb4GOqUB8Ss0TTvxDvLHWSfoMnct8U%2FpEtI43RGPP1SA3Gc2%2BGGqz5xKztoFd0wAjkXwmnschGAj6aYSMl8wcLM8z7P5xZ2pUJCVCqrUcsfOTqkGzOxeTnX0t8O00kolC%2B97eEBiK8HQ6lO5KFXDNkIXaQeKFnvHOOiKLNrD80rxX7EQnMUaiCI%2FpfsyJv2LJynRhSLZp2zzECyuBDvheNzt6oRCH7SAxKPF&X-Amz-Signature=2eda04502636f919203f3bb03000ba4c53b0cfaf76145cb4adeabb66821fd0c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNDPVOA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0O17R95lFquCWZEJ2mZ7568DG9F3JoGnX%2BWZaawdyvgIgWkzRM3mdLzbOwREnTUeGOJHbvRqQg0u2ka3O6rktjekqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMWo%2FnuMreaq3TeFCrcA0compL%2FNCvcjxj1cc%2FqV0lWxuzAAE9eHxVJxlBwc1fG12JxnLdjSJsMYE7mRy9OQUhHTPyoSKXeT7SeAR7I7rl%2FrC13qDmfASTgl5tbDpUfoTLR2cHl65sLvQzNY1rkH020LPbYmZB0SSUflq61jk%2Fa3dn1vpJ658YoYLMTpi8RWbpOAXWT6vIKpc1QceD2XWTQ1FD7XATB3rKPDEHjf%2BuNJOYDCXKInEWhQHDPTOTzup2X2Im3DgIelgmdYhwZs0pYIaqhO7UhJlfl%2FCFknpmpjlxDZMmf%2BFEtfahSCsMTuTGWgJi1OeNPCL40PikkI2YsnN2ThlTGMjKnFK8Wj9xCHWWzZm0YyTI4JSqZh2DTLmG6r0tRgA5ZWD0stFwUBt195JZibJneM1rNy33L0q0b0c1P6RPMXtCBf%2BPrHiHqVSVIgqyYANwwpLv%2Fj20j8RQ1p9bB1pkgw0JWI8Co4%2FERq0FSqtDnZN46rJbwysjCKm1h5BwSSKe4ADn6rScock%2FLlWyZC%2F3YocaiA0yoBn7%2FGOQIBp9tst1u0hPVuhmq38JNI5zTH30R0Mro3Hbw%2BOVeQ2Fp4FHcQyITY32mQWG%2Fhshuf7gB3ksfyjGkPMNZLRS4g%2FPLEdm8KPfMMMy7yb4GOqUB8Ss0TTvxDvLHWSfoMnct8U%2FpEtI43RGPP1SA3Gc2%2BGGqz5xKztoFd0wAjkXwmnschGAj6aYSMl8wcLM8z7P5xZ2pUJCVCqrUcsfOTqkGzOxeTnX0t8O00kolC%2B97eEBiK8HQ6lO5KFXDNkIXaQeKFnvHOOiKLNrD80rxX7EQnMUaiCI%2FpfsyJv2LJynRhSLZp2zzECyuBDvheNzt6oRCH7SAxKPF&X-Amz-Signature=5a127fd54f6969a04a2dbb865ad397f2a3b18230526158d0ca0debe785bf07a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNDPVOA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0O17R95lFquCWZEJ2mZ7568DG9F3JoGnX%2BWZaawdyvgIgWkzRM3mdLzbOwREnTUeGOJHbvRqQg0u2ka3O6rktjekqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMWo%2FnuMreaq3TeFCrcA0compL%2FNCvcjxj1cc%2FqV0lWxuzAAE9eHxVJxlBwc1fG12JxnLdjSJsMYE7mRy9OQUhHTPyoSKXeT7SeAR7I7rl%2FrC13qDmfASTgl5tbDpUfoTLR2cHl65sLvQzNY1rkH020LPbYmZB0SSUflq61jk%2Fa3dn1vpJ658YoYLMTpi8RWbpOAXWT6vIKpc1QceD2XWTQ1FD7XATB3rKPDEHjf%2BuNJOYDCXKInEWhQHDPTOTzup2X2Im3DgIelgmdYhwZs0pYIaqhO7UhJlfl%2FCFknpmpjlxDZMmf%2BFEtfahSCsMTuTGWgJi1OeNPCL40PikkI2YsnN2ThlTGMjKnFK8Wj9xCHWWzZm0YyTI4JSqZh2DTLmG6r0tRgA5ZWD0stFwUBt195JZibJneM1rNy33L0q0b0c1P6RPMXtCBf%2BPrHiHqVSVIgqyYANwwpLv%2Fj20j8RQ1p9bB1pkgw0JWI8Co4%2FERq0FSqtDnZN46rJbwysjCKm1h5BwSSKe4ADn6rScock%2FLlWyZC%2F3YocaiA0yoBn7%2FGOQIBp9tst1u0hPVuhmq38JNI5zTH30R0Mro3Hbw%2BOVeQ2Fp4FHcQyITY32mQWG%2Fhshuf7gB3ksfyjGkPMNZLRS4g%2FPLEdm8KPfMMMy7yb4GOqUB8Ss0TTvxDvLHWSfoMnct8U%2FpEtI43RGPP1SA3Gc2%2BGGqz5xKztoFd0wAjkXwmnschGAj6aYSMl8wcLM8z7P5xZ2pUJCVCqrUcsfOTqkGzOxeTnX0t8O00kolC%2B97eEBiK8HQ6lO5KFXDNkIXaQeKFnvHOOiKLNrD80rxX7EQnMUaiCI%2FpfsyJv2LJynRhSLZp2zzECyuBDvheNzt6oRCH7SAxKPF&X-Amz-Signature=0aacbb456d4bf4eb835f739b81322b4d22b6074d6f2c4d3265c675f51668c93a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNDPVOA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0O17R95lFquCWZEJ2mZ7568DG9F3JoGnX%2BWZaawdyvgIgWkzRM3mdLzbOwREnTUeGOJHbvRqQg0u2ka3O6rktjekqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMWo%2FnuMreaq3TeFCrcA0compL%2FNCvcjxj1cc%2FqV0lWxuzAAE9eHxVJxlBwc1fG12JxnLdjSJsMYE7mRy9OQUhHTPyoSKXeT7SeAR7I7rl%2FrC13qDmfASTgl5tbDpUfoTLR2cHl65sLvQzNY1rkH020LPbYmZB0SSUflq61jk%2Fa3dn1vpJ658YoYLMTpi8RWbpOAXWT6vIKpc1QceD2XWTQ1FD7XATB3rKPDEHjf%2BuNJOYDCXKInEWhQHDPTOTzup2X2Im3DgIelgmdYhwZs0pYIaqhO7UhJlfl%2FCFknpmpjlxDZMmf%2BFEtfahSCsMTuTGWgJi1OeNPCL40PikkI2YsnN2ThlTGMjKnFK8Wj9xCHWWzZm0YyTI4JSqZh2DTLmG6r0tRgA5ZWD0stFwUBt195JZibJneM1rNy33L0q0b0c1P6RPMXtCBf%2BPrHiHqVSVIgqyYANwwpLv%2Fj20j8RQ1p9bB1pkgw0JWI8Co4%2FERq0FSqtDnZN46rJbwysjCKm1h5BwSSKe4ADn6rScock%2FLlWyZC%2F3YocaiA0yoBn7%2FGOQIBp9tst1u0hPVuhmq38JNI5zTH30R0Mro3Hbw%2BOVeQ2Fp4FHcQyITY32mQWG%2Fhshuf7gB3ksfyjGkPMNZLRS4g%2FPLEdm8KPfMMMy7yb4GOqUB8Ss0TTvxDvLHWSfoMnct8U%2FpEtI43RGPP1SA3Gc2%2BGGqz5xKztoFd0wAjkXwmnschGAj6aYSMl8wcLM8z7P5xZ2pUJCVCqrUcsfOTqkGzOxeTnX0t8O00kolC%2B97eEBiK8HQ6lO5KFXDNkIXaQeKFnvHOOiKLNrD80rxX7EQnMUaiCI%2FpfsyJv2LJynRhSLZp2zzECyuBDvheNzt6oRCH7SAxKPF&X-Amz-Signature=336ea6db9da7dbe1ffde408ea5c7e8395a5656035554d636452284ebe6e451cf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
