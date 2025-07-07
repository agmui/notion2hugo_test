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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPPOVFIP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDKsMyx4zBfUb9sov1mCxp55zkpKFBI4rdxdgW1%2FsjGGgIgCxIphPJr2VN3TD7k7piHfML7g5qwAZcB578CwC05yVMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIrrhEUJL14SHKPuJCrcA9xt3udI07031OCDtckamc9sN6wCwsqElYenxmp%2BlV%2FrEJIftCAyIgV77CBuN7emOOyJI%2F0KIimK7CyK3WcE0zolSTgw1n9F5sJ6UYmbjz7%2Bg75WKP%2Fe9CLG4E%2FiC4mtDCfzwZt%2FauQN7HlmUYbzNYckT98am7eUv6AW1pCC3EMyK7FW5tv9YmYYKfhiCu4nSdYFr299LM50DECcEFjq65hUqNbByAIsz%2FBLrX%2FrDV9rPkD6cHVGHiZdQ4PlcQlt4v8b4cUPmQ1qKnF%2BwE5TMdP0zR4CKU5DBSZvXwFwkQ1Amqzlclcxm5jF%2B6RqjDl9r2trKd7ZZaSRGupyu7qJCEVVA55nPygOjNJgpR5VGmhL7zvKyRM4SVcm3rSmLnAiWEsgWPGSWJxPvUkYNmgE0XXgTT7N3IEgoSnX9z2KfWpDtaertK4rQKCxyQRG%2BizXorvyAkzblNBGSMjFVQ6sBtsIFW0H%2Fa%2BD6SSDTnU5NSmI8l4d7alFhqc4Jq0rKSP3zcYkOnGw%2B0VXjNrqZtg5pdInqOIfeD3ubOkDyd0%2FUkCLIzTbvn2tqZODI1r2MjFbmu0XqXIKoJ3tyAnN5gtRFMk1JdTqLKGbh%2FSCi1%2FmIK8LROVpPwiKdB2zQZytMOWurcMGOqUBYj6mycu2D53GpITbvCn3zobJRs0xeKkNMbXnUX%2BfyN6EoWFVktHcNmwVc83HjFKiUgfZfKimB1Z6Pt7tyd2OHfNiojRbOhdosbXOuc%2FBk%2BOY5G3IF0Dmt3wmJRLCHxX9CD0g5QRXCqnFhYhIYCokkqUnQ6WmH8l08k3KjvUsPs2cDatfGjY6ypwuexUzDChpdXz%2BHF2P7S58JjxxdDu2wP9MWUVk&X-Amz-Signature=e9b1abbfec0212f55df6d7b8732822f4a2b042e7c9465d5a3ebf2cb5064c3ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPPOVFIP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDKsMyx4zBfUb9sov1mCxp55zkpKFBI4rdxdgW1%2FsjGGgIgCxIphPJr2VN3TD7k7piHfML7g5qwAZcB578CwC05yVMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIrrhEUJL14SHKPuJCrcA9xt3udI07031OCDtckamc9sN6wCwsqElYenxmp%2BlV%2FrEJIftCAyIgV77CBuN7emOOyJI%2F0KIimK7CyK3WcE0zolSTgw1n9F5sJ6UYmbjz7%2Bg75WKP%2Fe9CLG4E%2FiC4mtDCfzwZt%2FauQN7HlmUYbzNYckT98am7eUv6AW1pCC3EMyK7FW5tv9YmYYKfhiCu4nSdYFr299LM50DECcEFjq65hUqNbByAIsz%2FBLrX%2FrDV9rPkD6cHVGHiZdQ4PlcQlt4v8b4cUPmQ1qKnF%2BwE5TMdP0zR4CKU5DBSZvXwFwkQ1Amqzlclcxm5jF%2B6RqjDl9r2trKd7ZZaSRGupyu7qJCEVVA55nPygOjNJgpR5VGmhL7zvKyRM4SVcm3rSmLnAiWEsgWPGSWJxPvUkYNmgE0XXgTT7N3IEgoSnX9z2KfWpDtaertK4rQKCxyQRG%2BizXorvyAkzblNBGSMjFVQ6sBtsIFW0H%2Fa%2BD6SSDTnU5NSmI8l4d7alFhqc4Jq0rKSP3zcYkOnGw%2B0VXjNrqZtg5pdInqOIfeD3ubOkDyd0%2FUkCLIzTbvn2tqZODI1r2MjFbmu0XqXIKoJ3tyAnN5gtRFMk1JdTqLKGbh%2FSCi1%2FmIK8LROVpPwiKdB2zQZytMOWurcMGOqUBYj6mycu2D53GpITbvCn3zobJRs0xeKkNMbXnUX%2BfyN6EoWFVktHcNmwVc83HjFKiUgfZfKimB1Z6Pt7tyd2OHfNiojRbOhdosbXOuc%2FBk%2BOY5G3IF0Dmt3wmJRLCHxX9CD0g5QRXCqnFhYhIYCokkqUnQ6WmH8l08k3KjvUsPs2cDatfGjY6ypwuexUzDChpdXz%2BHF2P7S58JjxxdDu2wP9MWUVk&X-Amz-Signature=c9b875dff1d7a9ede2e6b261b2c77e1c5a49194297ac960eac112caea284304b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPPOVFIP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDKsMyx4zBfUb9sov1mCxp55zkpKFBI4rdxdgW1%2FsjGGgIgCxIphPJr2VN3TD7k7piHfML7g5qwAZcB578CwC05yVMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIrrhEUJL14SHKPuJCrcA9xt3udI07031OCDtckamc9sN6wCwsqElYenxmp%2BlV%2FrEJIftCAyIgV77CBuN7emOOyJI%2F0KIimK7CyK3WcE0zolSTgw1n9F5sJ6UYmbjz7%2Bg75WKP%2Fe9CLG4E%2FiC4mtDCfzwZt%2FauQN7HlmUYbzNYckT98am7eUv6AW1pCC3EMyK7FW5tv9YmYYKfhiCu4nSdYFr299LM50DECcEFjq65hUqNbByAIsz%2FBLrX%2FrDV9rPkD6cHVGHiZdQ4PlcQlt4v8b4cUPmQ1qKnF%2BwE5TMdP0zR4CKU5DBSZvXwFwkQ1Amqzlclcxm5jF%2B6RqjDl9r2trKd7ZZaSRGupyu7qJCEVVA55nPygOjNJgpR5VGmhL7zvKyRM4SVcm3rSmLnAiWEsgWPGSWJxPvUkYNmgE0XXgTT7N3IEgoSnX9z2KfWpDtaertK4rQKCxyQRG%2BizXorvyAkzblNBGSMjFVQ6sBtsIFW0H%2Fa%2BD6SSDTnU5NSmI8l4d7alFhqc4Jq0rKSP3zcYkOnGw%2B0VXjNrqZtg5pdInqOIfeD3ubOkDyd0%2FUkCLIzTbvn2tqZODI1r2MjFbmu0XqXIKoJ3tyAnN5gtRFMk1JdTqLKGbh%2FSCi1%2FmIK8LROVpPwiKdB2zQZytMOWurcMGOqUBYj6mycu2D53GpITbvCn3zobJRs0xeKkNMbXnUX%2BfyN6EoWFVktHcNmwVc83HjFKiUgfZfKimB1Z6Pt7tyd2OHfNiojRbOhdosbXOuc%2FBk%2BOY5G3IF0Dmt3wmJRLCHxX9CD0g5QRXCqnFhYhIYCokkqUnQ6WmH8l08k3KjvUsPs2cDatfGjY6ypwuexUzDChpdXz%2BHF2P7S58JjxxdDu2wP9MWUVk&X-Amz-Signature=0c5e6056a484a84ad7922c10b2ec98060b350c9af4989a41a711ba511a2ae717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPPOVFIP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDKsMyx4zBfUb9sov1mCxp55zkpKFBI4rdxdgW1%2FsjGGgIgCxIphPJr2VN3TD7k7piHfML7g5qwAZcB578CwC05yVMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIrrhEUJL14SHKPuJCrcA9xt3udI07031OCDtckamc9sN6wCwsqElYenxmp%2BlV%2FrEJIftCAyIgV77CBuN7emOOyJI%2F0KIimK7CyK3WcE0zolSTgw1n9F5sJ6UYmbjz7%2Bg75WKP%2Fe9CLG4E%2FiC4mtDCfzwZt%2FauQN7HlmUYbzNYckT98am7eUv6AW1pCC3EMyK7FW5tv9YmYYKfhiCu4nSdYFr299LM50DECcEFjq65hUqNbByAIsz%2FBLrX%2FrDV9rPkD6cHVGHiZdQ4PlcQlt4v8b4cUPmQ1qKnF%2BwE5TMdP0zR4CKU5DBSZvXwFwkQ1Amqzlclcxm5jF%2B6RqjDl9r2trKd7ZZaSRGupyu7qJCEVVA55nPygOjNJgpR5VGmhL7zvKyRM4SVcm3rSmLnAiWEsgWPGSWJxPvUkYNmgE0XXgTT7N3IEgoSnX9z2KfWpDtaertK4rQKCxyQRG%2BizXorvyAkzblNBGSMjFVQ6sBtsIFW0H%2Fa%2BD6SSDTnU5NSmI8l4d7alFhqc4Jq0rKSP3zcYkOnGw%2B0VXjNrqZtg5pdInqOIfeD3ubOkDyd0%2FUkCLIzTbvn2tqZODI1r2MjFbmu0XqXIKoJ3tyAnN5gtRFMk1JdTqLKGbh%2FSCi1%2FmIK8LROVpPwiKdB2zQZytMOWurcMGOqUBYj6mycu2D53GpITbvCn3zobJRs0xeKkNMbXnUX%2BfyN6EoWFVktHcNmwVc83HjFKiUgfZfKimB1Z6Pt7tyd2OHfNiojRbOhdosbXOuc%2FBk%2BOY5G3IF0Dmt3wmJRLCHxX9CD0g5QRXCqnFhYhIYCokkqUnQ6WmH8l08k3KjvUsPs2cDatfGjY6ypwuexUzDChpdXz%2BHF2P7S58JjxxdDu2wP9MWUVk&X-Amz-Signature=c694ecb086dd47c15028211e335d1b55f82138c59d054bb932ec85268a0a8124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPPOVFIP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDKsMyx4zBfUb9sov1mCxp55zkpKFBI4rdxdgW1%2FsjGGgIgCxIphPJr2VN3TD7k7piHfML7g5qwAZcB578CwC05yVMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIrrhEUJL14SHKPuJCrcA9xt3udI07031OCDtckamc9sN6wCwsqElYenxmp%2BlV%2FrEJIftCAyIgV77CBuN7emOOyJI%2F0KIimK7CyK3WcE0zolSTgw1n9F5sJ6UYmbjz7%2Bg75WKP%2Fe9CLG4E%2FiC4mtDCfzwZt%2FauQN7HlmUYbzNYckT98am7eUv6AW1pCC3EMyK7FW5tv9YmYYKfhiCu4nSdYFr299LM50DECcEFjq65hUqNbByAIsz%2FBLrX%2FrDV9rPkD6cHVGHiZdQ4PlcQlt4v8b4cUPmQ1qKnF%2BwE5TMdP0zR4CKU5DBSZvXwFwkQ1Amqzlclcxm5jF%2B6RqjDl9r2trKd7ZZaSRGupyu7qJCEVVA55nPygOjNJgpR5VGmhL7zvKyRM4SVcm3rSmLnAiWEsgWPGSWJxPvUkYNmgE0XXgTT7N3IEgoSnX9z2KfWpDtaertK4rQKCxyQRG%2BizXorvyAkzblNBGSMjFVQ6sBtsIFW0H%2Fa%2BD6SSDTnU5NSmI8l4d7alFhqc4Jq0rKSP3zcYkOnGw%2B0VXjNrqZtg5pdInqOIfeD3ubOkDyd0%2FUkCLIzTbvn2tqZODI1r2MjFbmu0XqXIKoJ3tyAnN5gtRFMk1JdTqLKGbh%2FSCi1%2FmIK8LROVpPwiKdB2zQZytMOWurcMGOqUBYj6mycu2D53GpITbvCn3zobJRs0xeKkNMbXnUX%2BfyN6EoWFVktHcNmwVc83HjFKiUgfZfKimB1Z6Pt7tyd2OHfNiojRbOhdosbXOuc%2FBk%2BOY5G3IF0Dmt3wmJRLCHxX9CD0g5QRXCqnFhYhIYCokkqUnQ6WmH8l08k3KjvUsPs2cDatfGjY6ypwuexUzDChpdXz%2BHF2P7S58JjxxdDu2wP9MWUVk&X-Amz-Signature=ac42c93f6b9f9341867d0f7f87ce0a8c34328ed4187d4face9a3bc6177ad809e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPPOVFIP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDKsMyx4zBfUb9sov1mCxp55zkpKFBI4rdxdgW1%2FsjGGgIgCxIphPJr2VN3TD7k7piHfML7g5qwAZcB578CwC05yVMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIrrhEUJL14SHKPuJCrcA9xt3udI07031OCDtckamc9sN6wCwsqElYenxmp%2BlV%2FrEJIftCAyIgV77CBuN7emOOyJI%2F0KIimK7CyK3WcE0zolSTgw1n9F5sJ6UYmbjz7%2Bg75WKP%2Fe9CLG4E%2FiC4mtDCfzwZt%2FauQN7HlmUYbzNYckT98am7eUv6AW1pCC3EMyK7FW5tv9YmYYKfhiCu4nSdYFr299LM50DECcEFjq65hUqNbByAIsz%2FBLrX%2FrDV9rPkD6cHVGHiZdQ4PlcQlt4v8b4cUPmQ1qKnF%2BwE5TMdP0zR4CKU5DBSZvXwFwkQ1Amqzlclcxm5jF%2B6RqjDl9r2trKd7ZZaSRGupyu7qJCEVVA55nPygOjNJgpR5VGmhL7zvKyRM4SVcm3rSmLnAiWEsgWPGSWJxPvUkYNmgE0XXgTT7N3IEgoSnX9z2KfWpDtaertK4rQKCxyQRG%2BizXorvyAkzblNBGSMjFVQ6sBtsIFW0H%2Fa%2BD6SSDTnU5NSmI8l4d7alFhqc4Jq0rKSP3zcYkOnGw%2B0VXjNrqZtg5pdInqOIfeD3ubOkDyd0%2FUkCLIzTbvn2tqZODI1r2MjFbmu0XqXIKoJ3tyAnN5gtRFMk1JdTqLKGbh%2FSCi1%2FmIK8LROVpPwiKdB2zQZytMOWurcMGOqUBYj6mycu2D53GpITbvCn3zobJRs0xeKkNMbXnUX%2BfyN6EoWFVktHcNmwVc83HjFKiUgfZfKimB1Z6Pt7tyd2OHfNiojRbOhdosbXOuc%2FBk%2BOY5G3IF0Dmt3wmJRLCHxX9CD0g5QRXCqnFhYhIYCokkqUnQ6WmH8l08k3KjvUsPs2cDatfGjY6ypwuexUzDChpdXz%2BHF2P7S58JjxxdDu2wP9MWUVk&X-Amz-Signature=08c62dcec529698ce5e253cede868c28efbb5dd50a06dc75569efc0573aabc25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPPOVFIP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDKsMyx4zBfUb9sov1mCxp55zkpKFBI4rdxdgW1%2FsjGGgIgCxIphPJr2VN3TD7k7piHfML7g5qwAZcB578CwC05yVMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIrrhEUJL14SHKPuJCrcA9xt3udI07031OCDtckamc9sN6wCwsqElYenxmp%2BlV%2FrEJIftCAyIgV77CBuN7emOOyJI%2F0KIimK7CyK3WcE0zolSTgw1n9F5sJ6UYmbjz7%2Bg75WKP%2Fe9CLG4E%2FiC4mtDCfzwZt%2FauQN7HlmUYbzNYckT98am7eUv6AW1pCC3EMyK7FW5tv9YmYYKfhiCu4nSdYFr299LM50DECcEFjq65hUqNbByAIsz%2FBLrX%2FrDV9rPkD6cHVGHiZdQ4PlcQlt4v8b4cUPmQ1qKnF%2BwE5TMdP0zR4CKU5DBSZvXwFwkQ1Amqzlclcxm5jF%2B6RqjDl9r2trKd7ZZaSRGupyu7qJCEVVA55nPygOjNJgpR5VGmhL7zvKyRM4SVcm3rSmLnAiWEsgWPGSWJxPvUkYNmgE0XXgTT7N3IEgoSnX9z2KfWpDtaertK4rQKCxyQRG%2BizXorvyAkzblNBGSMjFVQ6sBtsIFW0H%2Fa%2BD6SSDTnU5NSmI8l4d7alFhqc4Jq0rKSP3zcYkOnGw%2B0VXjNrqZtg5pdInqOIfeD3ubOkDyd0%2FUkCLIzTbvn2tqZODI1r2MjFbmu0XqXIKoJ3tyAnN5gtRFMk1JdTqLKGbh%2FSCi1%2FmIK8LROVpPwiKdB2zQZytMOWurcMGOqUBYj6mycu2D53GpITbvCn3zobJRs0xeKkNMbXnUX%2BfyN6EoWFVktHcNmwVc83HjFKiUgfZfKimB1Z6Pt7tyd2OHfNiojRbOhdosbXOuc%2FBk%2BOY5G3IF0Dmt3wmJRLCHxX9CD0g5QRXCqnFhYhIYCokkqUnQ6WmH8l08k3KjvUsPs2cDatfGjY6ypwuexUzDChpdXz%2BHF2P7S58JjxxdDu2wP9MWUVk&X-Amz-Signature=532390cb38473040ee4590b2d738ff48b4df5480e3aea9946e1e177726487889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPPOVFIP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDKsMyx4zBfUb9sov1mCxp55zkpKFBI4rdxdgW1%2FsjGGgIgCxIphPJr2VN3TD7k7piHfML7g5qwAZcB578CwC05yVMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIrrhEUJL14SHKPuJCrcA9xt3udI07031OCDtckamc9sN6wCwsqElYenxmp%2BlV%2FrEJIftCAyIgV77CBuN7emOOyJI%2F0KIimK7CyK3WcE0zolSTgw1n9F5sJ6UYmbjz7%2Bg75WKP%2Fe9CLG4E%2FiC4mtDCfzwZt%2FauQN7HlmUYbzNYckT98am7eUv6AW1pCC3EMyK7FW5tv9YmYYKfhiCu4nSdYFr299LM50DECcEFjq65hUqNbByAIsz%2FBLrX%2FrDV9rPkD6cHVGHiZdQ4PlcQlt4v8b4cUPmQ1qKnF%2BwE5TMdP0zR4CKU5DBSZvXwFwkQ1Amqzlclcxm5jF%2B6RqjDl9r2trKd7ZZaSRGupyu7qJCEVVA55nPygOjNJgpR5VGmhL7zvKyRM4SVcm3rSmLnAiWEsgWPGSWJxPvUkYNmgE0XXgTT7N3IEgoSnX9z2KfWpDtaertK4rQKCxyQRG%2BizXorvyAkzblNBGSMjFVQ6sBtsIFW0H%2Fa%2BD6SSDTnU5NSmI8l4d7alFhqc4Jq0rKSP3zcYkOnGw%2B0VXjNrqZtg5pdInqOIfeD3ubOkDyd0%2FUkCLIzTbvn2tqZODI1r2MjFbmu0XqXIKoJ3tyAnN5gtRFMk1JdTqLKGbh%2FSCi1%2FmIK8LROVpPwiKdB2zQZytMOWurcMGOqUBYj6mycu2D53GpITbvCn3zobJRs0xeKkNMbXnUX%2BfyN6EoWFVktHcNmwVc83HjFKiUgfZfKimB1Z6Pt7tyd2OHfNiojRbOhdosbXOuc%2FBk%2BOY5G3IF0Dmt3wmJRLCHxX9CD0g5QRXCqnFhYhIYCokkqUnQ6WmH8l08k3KjvUsPs2cDatfGjY6ypwuexUzDChpdXz%2BHF2P7S58JjxxdDu2wP9MWUVk&X-Amz-Signature=d8226b96878d24fe0688a744cb6190005db4816196fb075a2297822e7a80f1f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
