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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM62TLMO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4PJHYwpVYGqC69zGgT3MlC2fKtpGJviT%2Bo2go0Vda3AiAGc047hmRfyxzwS6SiD2%2B7IXLYXTQ1BM35jRBuXy%2BV5Cr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMYCPqokFt65SDPpugKtwDcq6nJeM%2BHju2lwBzN7224mzGSMZD388ShQJHUvQapUQMPCCOaa6zEFURYKk8fG%2BLeBKCbhBeuVgG%2Bu0Rc%2FHIxjQqBFZDBfxTyGk1uF8QbnhV1R72NXj3kO8f%2FdxLBW8J1KnXQci3dPwTxVrk%2FaXjuLuZ3pyG52%2BOMv55s55%2BpvSsVxjS6UCg2ClsnINoijY1th6m%2FUeBjrYtWxt4DZ28jbnDvit%2F91S9tt9cDgz0LXxPGZe33hJx6%2FRAgJOzKT3z2UfG6np8datRrC57AZfU7fT3fCyH%2B8Avea35XKhoM%2BSwnzmfGir%2FARaOzxh71pgytC9b0gRLIDIwIOgmHv4%2Fp%2FJs4gyIMVJPrUyNnnK5L4B3m%2FyGfwo3hVlziqUmaHrNn8GjrrVFqNU%2BqQEGTBxnuHwd6F3itzWVXZCF%2BqA3d8%2Byda9Mz%2FUmHH%2FPCGhG4UpWxhQEMnAw5n0Jp7cGn5Y1WboH%2FaK9x4cgVN8nLajaX%2FVVUSalTw4ABirgIKhm0Gsqt4Qrlcc7CdURZB67H98guk6JWLqwXnmw%2F8IQjTEaBgSvmc0652aWSfILRrJ0huEBEfAJc89yEvtQztqQWFg46WfAVufSgawMyJqW5%2F%2B4wgEjpp4crvdmooqZP3sw%2BJ24vQY6pgHf1VCcsQXBB8dyACVMJKj2k%2F4elpgUkZhUMqoB66LFz1jMaciy%2FVsfYwFRCY8Hu4ARdmeSQW3YTGLBHQimDBicvn1Towk8aTuxgBUWzgnxUzbcfK6BIysIl%2FENEAA9cjsprcIkkHXnptfrahYQxJsXCHezWkW2vk9KUckBcbSxSJlkjJYzjC8eJHBQ7QgyhAfipvIwbca5OjsZXVRR0yF2EZjnVYK5&X-Amz-Signature=10be23180fe8b0bb7c79bab44d753a399e2530ca71f01d094eea357a48b76ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM62TLMO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4PJHYwpVYGqC69zGgT3MlC2fKtpGJviT%2Bo2go0Vda3AiAGc047hmRfyxzwS6SiD2%2B7IXLYXTQ1BM35jRBuXy%2BV5Cr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMYCPqokFt65SDPpugKtwDcq6nJeM%2BHju2lwBzN7224mzGSMZD388ShQJHUvQapUQMPCCOaa6zEFURYKk8fG%2BLeBKCbhBeuVgG%2Bu0Rc%2FHIxjQqBFZDBfxTyGk1uF8QbnhV1R72NXj3kO8f%2FdxLBW8J1KnXQci3dPwTxVrk%2FaXjuLuZ3pyG52%2BOMv55s55%2BpvSsVxjS6UCg2ClsnINoijY1th6m%2FUeBjrYtWxt4DZ28jbnDvit%2F91S9tt9cDgz0LXxPGZe33hJx6%2FRAgJOzKT3z2UfG6np8datRrC57AZfU7fT3fCyH%2B8Avea35XKhoM%2BSwnzmfGir%2FARaOzxh71pgytC9b0gRLIDIwIOgmHv4%2Fp%2FJs4gyIMVJPrUyNnnK5L4B3m%2FyGfwo3hVlziqUmaHrNn8GjrrVFqNU%2BqQEGTBxnuHwd6F3itzWVXZCF%2BqA3d8%2Byda9Mz%2FUmHH%2FPCGhG4UpWxhQEMnAw5n0Jp7cGn5Y1WboH%2FaK9x4cgVN8nLajaX%2FVVUSalTw4ABirgIKhm0Gsqt4Qrlcc7CdURZB67H98guk6JWLqwXnmw%2F8IQjTEaBgSvmc0652aWSfILRrJ0huEBEfAJc89yEvtQztqQWFg46WfAVufSgawMyJqW5%2F%2B4wgEjpp4crvdmooqZP3sw%2BJ24vQY6pgHf1VCcsQXBB8dyACVMJKj2k%2F4elpgUkZhUMqoB66LFz1jMaciy%2FVsfYwFRCY8Hu4ARdmeSQW3YTGLBHQimDBicvn1Towk8aTuxgBUWzgnxUzbcfK6BIysIl%2FENEAA9cjsprcIkkHXnptfrahYQxJsXCHezWkW2vk9KUckBcbSxSJlkjJYzjC8eJHBQ7QgyhAfipvIwbca5OjsZXVRR0yF2EZjnVYK5&X-Amz-Signature=0d5b3614479d361094fb947f6941aa4ba283977472f44fc0e57c1dc1a887cf21&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM62TLMO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4PJHYwpVYGqC69zGgT3MlC2fKtpGJviT%2Bo2go0Vda3AiAGc047hmRfyxzwS6SiD2%2B7IXLYXTQ1BM35jRBuXy%2BV5Cr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMYCPqokFt65SDPpugKtwDcq6nJeM%2BHju2lwBzN7224mzGSMZD388ShQJHUvQapUQMPCCOaa6zEFURYKk8fG%2BLeBKCbhBeuVgG%2Bu0Rc%2FHIxjQqBFZDBfxTyGk1uF8QbnhV1R72NXj3kO8f%2FdxLBW8J1KnXQci3dPwTxVrk%2FaXjuLuZ3pyG52%2BOMv55s55%2BpvSsVxjS6UCg2ClsnINoijY1th6m%2FUeBjrYtWxt4DZ28jbnDvit%2F91S9tt9cDgz0LXxPGZe33hJx6%2FRAgJOzKT3z2UfG6np8datRrC57AZfU7fT3fCyH%2B8Avea35XKhoM%2BSwnzmfGir%2FARaOzxh71pgytC9b0gRLIDIwIOgmHv4%2Fp%2FJs4gyIMVJPrUyNnnK5L4B3m%2FyGfwo3hVlziqUmaHrNn8GjrrVFqNU%2BqQEGTBxnuHwd6F3itzWVXZCF%2BqA3d8%2Byda9Mz%2FUmHH%2FPCGhG4UpWxhQEMnAw5n0Jp7cGn5Y1WboH%2FaK9x4cgVN8nLajaX%2FVVUSalTw4ABirgIKhm0Gsqt4Qrlcc7CdURZB67H98guk6JWLqwXnmw%2F8IQjTEaBgSvmc0652aWSfILRrJ0huEBEfAJc89yEvtQztqQWFg46WfAVufSgawMyJqW5%2F%2B4wgEjpp4crvdmooqZP3sw%2BJ24vQY6pgHf1VCcsQXBB8dyACVMJKj2k%2F4elpgUkZhUMqoB66LFz1jMaciy%2FVsfYwFRCY8Hu4ARdmeSQW3YTGLBHQimDBicvn1Towk8aTuxgBUWzgnxUzbcfK6BIysIl%2FENEAA9cjsprcIkkHXnptfrahYQxJsXCHezWkW2vk9KUckBcbSxSJlkjJYzjC8eJHBQ7QgyhAfipvIwbca5OjsZXVRR0yF2EZjnVYK5&X-Amz-Signature=05015faaf8d1ab364632d7afbf409546d3f23f4362b2c0e9cc2545d3e06dcce6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM62TLMO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4PJHYwpVYGqC69zGgT3MlC2fKtpGJviT%2Bo2go0Vda3AiAGc047hmRfyxzwS6SiD2%2B7IXLYXTQ1BM35jRBuXy%2BV5Cr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMYCPqokFt65SDPpugKtwDcq6nJeM%2BHju2lwBzN7224mzGSMZD388ShQJHUvQapUQMPCCOaa6zEFURYKk8fG%2BLeBKCbhBeuVgG%2Bu0Rc%2FHIxjQqBFZDBfxTyGk1uF8QbnhV1R72NXj3kO8f%2FdxLBW8J1KnXQci3dPwTxVrk%2FaXjuLuZ3pyG52%2BOMv55s55%2BpvSsVxjS6UCg2ClsnINoijY1th6m%2FUeBjrYtWxt4DZ28jbnDvit%2F91S9tt9cDgz0LXxPGZe33hJx6%2FRAgJOzKT3z2UfG6np8datRrC57AZfU7fT3fCyH%2B8Avea35XKhoM%2BSwnzmfGir%2FARaOzxh71pgytC9b0gRLIDIwIOgmHv4%2Fp%2FJs4gyIMVJPrUyNnnK5L4B3m%2FyGfwo3hVlziqUmaHrNn8GjrrVFqNU%2BqQEGTBxnuHwd6F3itzWVXZCF%2BqA3d8%2Byda9Mz%2FUmHH%2FPCGhG4UpWxhQEMnAw5n0Jp7cGn5Y1WboH%2FaK9x4cgVN8nLajaX%2FVVUSalTw4ABirgIKhm0Gsqt4Qrlcc7CdURZB67H98guk6JWLqwXnmw%2F8IQjTEaBgSvmc0652aWSfILRrJ0huEBEfAJc89yEvtQztqQWFg46WfAVufSgawMyJqW5%2F%2B4wgEjpp4crvdmooqZP3sw%2BJ24vQY6pgHf1VCcsQXBB8dyACVMJKj2k%2F4elpgUkZhUMqoB66LFz1jMaciy%2FVsfYwFRCY8Hu4ARdmeSQW3YTGLBHQimDBicvn1Towk8aTuxgBUWzgnxUzbcfK6BIysIl%2FENEAA9cjsprcIkkHXnptfrahYQxJsXCHezWkW2vk9KUckBcbSxSJlkjJYzjC8eJHBQ7QgyhAfipvIwbca5OjsZXVRR0yF2EZjnVYK5&X-Amz-Signature=e51862a6e1d3d34e50f1e439914c0d8fcda8ca253098b76c01281e916ef86c22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM62TLMO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4PJHYwpVYGqC69zGgT3MlC2fKtpGJviT%2Bo2go0Vda3AiAGc047hmRfyxzwS6SiD2%2B7IXLYXTQ1BM35jRBuXy%2BV5Cr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMYCPqokFt65SDPpugKtwDcq6nJeM%2BHju2lwBzN7224mzGSMZD388ShQJHUvQapUQMPCCOaa6zEFURYKk8fG%2BLeBKCbhBeuVgG%2Bu0Rc%2FHIxjQqBFZDBfxTyGk1uF8QbnhV1R72NXj3kO8f%2FdxLBW8J1KnXQci3dPwTxVrk%2FaXjuLuZ3pyG52%2BOMv55s55%2BpvSsVxjS6UCg2ClsnINoijY1th6m%2FUeBjrYtWxt4DZ28jbnDvit%2F91S9tt9cDgz0LXxPGZe33hJx6%2FRAgJOzKT3z2UfG6np8datRrC57AZfU7fT3fCyH%2B8Avea35XKhoM%2BSwnzmfGir%2FARaOzxh71pgytC9b0gRLIDIwIOgmHv4%2Fp%2FJs4gyIMVJPrUyNnnK5L4B3m%2FyGfwo3hVlziqUmaHrNn8GjrrVFqNU%2BqQEGTBxnuHwd6F3itzWVXZCF%2BqA3d8%2Byda9Mz%2FUmHH%2FPCGhG4UpWxhQEMnAw5n0Jp7cGn5Y1WboH%2FaK9x4cgVN8nLajaX%2FVVUSalTw4ABirgIKhm0Gsqt4Qrlcc7CdURZB67H98guk6JWLqwXnmw%2F8IQjTEaBgSvmc0652aWSfILRrJ0huEBEfAJc89yEvtQztqQWFg46WfAVufSgawMyJqW5%2F%2B4wgEjpp4crvdmooqZP3sw%2BJ24vQY6pgHf1VCcsQXBB8dyACVMJKj2k%2F4elpgUkZhUMqoB66LFz1jMaciy%2FVsfYwFRCY8Hu4ARdmeSQW3YTGLBHQimDBicvn1Towk8aTuxgBUWzgnxUzbcfK6BIysIl%2FENEAA9cjsprcIkkHXnptfrahYQxJsXCHezWkW2vk9KUckBcbSxSJlkjJYzjC8eJHBQ7QgyhAfipvIwbca5OjsZXVRR0yF2EZjnVYK5&X-Amz-Signature=08a589fd2dfc4653d876a956307c3f5a54597feda5d8226d3a3b98dd1f021d96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM62TLMO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4PJHYwpVYGqC69zGgT3MlC2fKtpGJviT%2Bo2go0Vda3AiAGc047hmRfyxzwS6SiD2%2B7IXLYXTQ1BM35jRBuXy%2BV5Cr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMYCPqokFt65SDPpugKtwDcq6nJeM%2BHju2lwBzN7224mzGSMZD388ShQJHUvQapUQMPCCOaa6zEFURYKk8fG%2BLeBKCbhBeuVgG%2Bu0Rc%2FHIxjQqBFZDBfxTyGk1uF8QbnhV1R72NXj3kO8f%2FdxLBW8J1KnXQci3dPwTxVrk%2FaXjuLuZ3pyG52%2BOMv55s55%2BpvSsVxjS6UCg2ClsnINoijY1th6m%2FUeBjrYtWxt4DZ28jbnDvit%2F91S9tt9cDgz0LXxPGZe33hJx6%2FRAgJOzKT3z2UfG6np8datRrC57AZfU7fT3fCyH%2B8Avea35XKhoM%2BSwnzmfGir%2FARaOzxh71pgytC9b0gRLIDIwIOgmHv4%2Fp%2FJs4gyIMVJPrUyNnnK5L4B3m%2FyGfwo3hVlziqUmaHrNn8GjrrVFqNU%2BqQEGTBxnuHwd6F3itzWVXZCF%2BqA3d8%2Byda9Mz%2FUmHH%2FPCGhG4UpWxhQEMnAw5n0Jp7cGn5Y1WboH%2FaK9x4cgVN8nLajaX%2FVVUSalTw4ABirgIKhm0Gsqt4Qrlcc7CdURZB67H98guk6JWLqwXnmw%2F8IQjTEaBgSvmc0652aWSfILRrJ0huEBEfAJc89yEvtQztqQWFg46WfAVufSgawMyJqW5%2F%2B4wgEjpp4crvdmooqZP3sw%2BJ24vQY6pgHf1VCcsQXBB8dyACVMJKj2k%2F4elpgUkZhUMqoB66LFz1jMaciy%2FVsfYwFRCY8Hu4ARdmeSQW3YTGLBHQimDBicvn1Towk8aTuxgBUWzgnxUzbcfK6BIysIl%2FENEAA9cjsprcIkkHXnptfrahYQxJsXCHezWkW2vk9KUckBcbSxSJlkjJYzjC8eJHBQ7QgyhAfipvIwbca5OjsZXVRR0yF2EZjnVYK5&X-Amz-Signature=d94c282f98143b540cff3c0adaf1f03bf6d4ae3342aab60a92291e2c97c883a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM62TLMO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4PJHYwpVYGqC69zGgT3MlC2fKtpGJviT%2Bo2go0Vda3AiAGc047hmRfyxzwS6SiD2%2B7IXLYXTQ1BM35jRBuXy%2BV5Cr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMYCPqokFt65SDPpugKtwDcq6nJeM%2BHju2lwBzN7224mzGSMZD388ShQJHUvQapUQMPCCOaa6zEFURYKk8fG%2BLeBKCbhBeuVgG%2Bu0Rc%2FHIxjQqBFZDBfxTyGk1uF8QbnhV1R72NXj3kO8f%2FdxLBW8J1KnXQci3dPwTxVrk%2FaXjuLuZ3pyG52%2BOMv55s55%2BpvSsVxjS6UCg2ClsnINoijY1th6m%2FUeBjrYtWxt4DZ28jbnDvit%2F91S9tt9cDgz0LXxPGZe33hJx6%2FRAgJOzKT3z2UfG6np8datRrC57AZfU7fT3fCyH%2B8Avea35XKhoM%2BSwnzmfGir%2FARaOzxh71pgytC9b0gRLIDIwIOgmHv4%2Fp%2FJs4gyIMVJPrUyNnnK5L4B3m%2FyGfwo3hVlziqUmaHrNn8GjrrVFqNU%2BqQEGTBxnuHwd6F3itzWVXZCF%2BqA3d8%2Byda9Mz%2FUmHH%2FPCGhG4UpWxhQEMnAw5n0Jp7cGn5Y1WboH%2FaK9x4cgVN8nLajaX%2FVVUSalTw4ABirgIKhm0Gsqt4Qrlcc7CdURZB67H98guk6JWLqwXnmw%2F8IQjTEaBgSvmc0652aWSfILRrJ0huEBEfAJc89yEvtQztqQWFg46WfAVufSgawMyJqW5%2F%2B4wgEjpp4crvdmooqZP3sw%2BJ24vQY6pgHf1VCcsQXBB8dyACVMJKj2k%2F4elpgUkZhUMqoB66LFz1jMaciy%2FVsfYwFRCY8Hu4ARdmeSQW3YTGLBHQimDBicvn1Towk8aTuxgBUWzgnxUzbcfK6BIysIl%2FENEAA9cjsprcIkkHXnptfrahYQxJsXCHezWkW2vk9KUckBcbSxSJlkjJYzjC8eJHBQ7QgyhAfipvIwbca5OjsZXVRR0yF2EZjnVYK5&X-Amz-Signature=f73c5c604c56a2fa9894cb0ac1a733b58ba3c806f3b5aa3b1bedcebb1a001903&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM62TLMO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4PJHYwpVYGqC69zGgT3MlC2fKtpGJviT%2Bo2go0Vda3AiAGc047hmRfyxzwS6SiD2%2B7IXLYXTQ1BM35jRBuXy%2BV5Cr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMYCPqokFt65SDPpugKtwDcq6nJeM%2BHju2lwBzN7224mzGSMZD388ShQJHUvQapUQMPCCOaa6zEFURYKk8fG%2BLeBKCbhBeuVgG%2Bu0Rc%2FHIxjQqBFZDBfxTyGk1uF8QbnhV1R72NXj3kO8f%2FdxLBW8J1KnXQci3dPwTxVrk%2FaXjuLuZ3pyG52%2BOMv55s55%2BpvSsVxjS6UCg2ClsnINoijY1th6m%2FUeBjrYtWxt4DZ28jbnDvit%2F91S9tt9cDgz0LXxPGZe33hJx6%2FRAgJOzKT3z2UfG6np8datRrC57AZfU7fT3fCyH%2B8Avea35XKhoM%2BSwnzmfGir%2FARaOzxh71pgytC9b0gRLIDIwIOgmHv4%2Fp%2FJs4gyIMVJPrUyNnnK5L4B3m%2FyGfwo3hVlziqUmaHrNn8GjrrVFqNU%2BqQEGTBxnuHwd6F3itzWVXZCF%2BqA3d8%2Byda9Mz%2FUmHH%2FPCGhG4UpWxhQEMnAw5n0Jp7cGn5Y1WboH%2FaK9x4cgVN8nLajaX%2FVVUSalTw4ABirgIKhm0Gsqt4Qrlcc7CdURZB67H98guk6JWLqwXnmw%2F8IQjTEaBgSvmc0652aWSfILRrJ0huEBEfAJc89yEvtQztqQWFg46WfAVufSgawMyJqW5%2F%2B4wgEjpp4crvdmooqZP3sw%2BJ24vQY6pgHf1VCcsQXBB8dyACVMJKj2k%2F4elpgUkZhUMqoB66LFz1jMaciy%2FVsfYwFRCY8Hu4ARdmeSQW3YTGLBHQimDBicvn1Towk8aTuxgBUWzgnxUzbcfK6BIysIl%2FENEAA9cjsprcIkkHXnptfrahYQxJsXCHezWkW2vk9KUckBcbSxSJlkjJYzjC8eJHBQ7QgyhAfipvIwbca5OjsZXVRR0yF2EZjnVYK5&X-Amz-Signature=47558a30f42145c6d13167a47b9a6e31c51767babc624c1c50b1ade5b39ef81a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
