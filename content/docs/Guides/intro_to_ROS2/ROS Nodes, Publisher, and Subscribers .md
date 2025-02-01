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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54BIT7P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjMtsLAotZnhUhStTfWgLfzNh%2FeUh4u0VER%2BEJwli1nAIhAOZ%2F8i4%2FsFcIbA7%2B2N3ROxbG%2B3SsTeCYp5cxb57zzp%2FZKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWI7NeZ%2Fgs2gaOZzgq3AMaQoGeAD%2BtKf%2F4qFxwmUKc1l0drWy01Z%2FxQMLDz8iVIoJcvx9nLm3Wph7nHuQf7jh5lGKUh%2FAkIXr3U4qeL03fMQR7%2BbbQZMCMk8zx5Wv%2BsAQtzzwYalEZftcMPNpLCKJy9cd8y8l%2BY15PdeweRxLUUCZWOqLzbHoiv%2FTApKnzjEgMkMv2pQhmXI90%2BrJbFVhrHsA7A%2BJmLNgUpRjCRs5TWUEwHtl2flV3c0JA0dnxZWNZyiLz9%2BSHrC%2Bdl44cMHRka2fXhbGvFyD3z8a2hm3GQXYY559wzF8pD02veMWMYHATWSxIkNHfmIopeX%2FB8mF58HmtQUcFJUdwtfgqKYaOOysYbcIqV%2Bh5uvpmJ401sfN8Aa%2FyfOmgXDN7h98VCdk62Vh4oqND2Pj3s5Wrq5t3VOkYfEiOWsLNrtrSgiImwXiz32Mc%2FW%2FCNDAHoRtXz9JWKcLLj%2BY%2FK2OmQq9DZbJAy%2BgM16HI0h%2Bzk3J65l9AoT0xL%2F%2FbCrzYrd3BLq%2BGhLb6H8rD1Nr%2FsU4pUsSND7bhc4T0ESw7IV%2FsieA2Ydk8r34uhqWY1Wo9xgOnBPhBqWLrHhMhXr6edU%2FfxETkHDpXlitVaXu1FYIWgA%2BIJ7O8z7g52LVEOMxXFzn17zDdpfe8BjqkAWfxa2YwdwX%2Bi%2Bd%2FlK0AB2vvHmzRgniPlwauKh89sJov5MmjR%2BZCW65qSaXUu5mfvQqqGfKbiZ3wHAyEimqWMFeK8cjUR8GZR0RB%2FvWnFxVwekegtVCQRo%2BCl20yu%2BDb7ZKdvnbWRPKQ%2FRfppU4orQJgL2CHzNK8rz1rh7%2FEGiWfTdDHfdzEGNPOTSjyJ9bBrK4%2BvVf%2FJ7ZB3exe0MGh%2B07I9nJa&X-Amz-Signature=7b8195ef5b5c34cd4c8712a4b67ade91090895d4689e5381ca774a93814f134c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54BIT7P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjMtsLAotZnhUhStTfWgLfzNh%2FeUh4u0VER%2BEJwli1nAIhAOZ%2F8i4%2FsFcIbA7%2B2N3ROxbG%2B3SsTeCYp5cxb57zzp%2FZKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWI7NeZ%2Fgs2gaOZzgq3AMaQoGeAD%2BtKf%2F4qFxwmUKc1l0drWy01Z%2FxQMLDz8iVIoJcvx9nLm3Wph7nHuQf7jh5lGKUh%2FAkIXr3U4qeL03fMQR7%2BbbQZMCMk8zx5Wv%2BsAQtzzwYalEZftcMPNpLCKJy9cd8y8l%2BY15PdeweRxLUUCZWOqLzbHoiv%2FTApKnzjEgMkMv2pQhmXI90%2BrJbFVhrHsA7A%2BJmLNgUpRjCRs5TWUEwHtl2flV3c0JA0dnxZWNZyiLz9%2BSHrC%2Bdl44cMHRka2fXhbGvFyD3z8a2hm3GQXYY559wzF8pD02veMWMYHATWSxIkNHfmIopeX%2FB8mF58HmtQUcFJUdwtfgqKYaOOysYbcIqV%2Bh5uvpmJ401sfN8Aa%2FyfOmgXDN7h98VCdk62Vh4oqND2Pj3s5Wrq5t3VOkYfEiOWsLNrtrSgiImwXiz32Mc%2FW%2FCNDAHoRtXz9JWKcLLj%2BY%2FK2OmQq9DZbJAy%2BgM16HI0h%2Bzk3J65l9AoT0xL%2F%2FbCrzYrd3BLq%2BGhLb6H8rD1Nr%2FsU4pUsSND7bhc4T0ESw7IV%2FsieA2Ydk8r34uhqWY1Wo9xgOnBPhBqWLrHhMhXr6edU%2FfxETkHDpXlitVaXu1FYIWgA%2BIJ7O8z7g52LVEOMxXFzn17zDdpfe8BjqkAWfxa2YwdwX%2Bi%2Bd%2FlK0AB2vvHmzRgniPlwauKh89sJov5MmjR%2BZCW65qSaXUu5mfvQqqGfKbiZ3wHAyEimqWMFeK8cjUR8GZR0RB%2FvWnFxVwekegtVCQRo%2BCl20yu%2BDb7ZKdvnbWRPKQ%2FRfppU4orQJgL2CHzNK8rz1rh7%2FEGiWfTdDHfdzEGNPOTSjyJ9bBrK4%2BvVf%2FJ7ZB3exe0MGh%2B07I9nJa&X-Amz-Signature=b287ac325d9bea738d5839eae2354ece4aa09850ee31c6b1d38e0947c992d6af&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54BIT7P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjMtsLAotZnhUhStTfWgLfzNh%2FeUh4u0VER%2BEJwli1nAIhAOZ%2F8i4%2FsFcIbA7%2B2N3ROxbG%2B3SsTeCYp5cxb57zzp%2FZKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWI7NeZ%2Fgs2gaOZzgq3AMaQoGeAD%2BtKf%2F4qFxwmUKc1l0drWy01Z%2FxQMLDz8iVIoJcvx9nLm3Wph7nHuQf7jh5lGKUh%2FAkIXr3U4qeL03fMQR7%2BbbQZMCMk8zx5Wv%2BsAQtzzwYalEZftcMPNpLCKJy9cd8y8l%2BY15PdeweRxLUUCZWOqLzbHoiv%2FTApKnzjEgMkMv2pQhmXI90%2BrJbFVhrHsA7A%2BJmLNgUpRjCRs5TWUEwHtl2flV3c0JA0dnxZWNZyiLz9%2BSHrC%2Bdl44cMHRka2fXhbGvFyD3z8a2hm3GQXYY559wzF8pD02veMWMYHATWSxIkNHfmIopeX%2FB8mF58HmtQUcFJUdwtfgqKYaOOysYbcIqV%2Bh5uvpmJ401sfN8Aa%2FyfOmgXDN7h98VCdk62Vh4oqND2Pj3s5Wrq5t3VOkYfEiOWsLNrtrSgiImwXiz32Mc%2FW%2FCNDAHoRtXz9JWKcLLj%2BY%2FK2OmQq9DZbJAy%2BgM16HI0h%2Bzk3J65l9AoT0xL%2F%2FbCrzYrd3BLq%2BGhLb6H8rD1Nr%2FsU4pUsSND7bhc4T0ESw7IV%2FsieA2Ydk8r34uhqWY1Wo9xgOnBPhBqWLrHhMhXr6edU%2FfxETkHDpXlitVaXu1FYIWgA%2BIJ7O8z7g52LVEOMxXFzn17zDdpfe8BjqkAWfxa2YwdwX%2Bi%2Bd%2FlK0AB2vvHmzRgniPlwauKh89sJov5MmjR%2BZCW65qSaXUu5mfvQqqGfKbiZ3wHAyEimqWMFeK8cjUR8GZR0RB%2FvWnFxVwekegtVCQRo%2BCl20yu%2BDb7ZKdvnbWRPKQ%2FRfppU4orQJgL2CHzNK8rz1rh7%2FEGiWfTdDHfdzEGNPOTSjyJ9bBrK4%2BvVf%2FJ7ZB3exe0MGh%2B07I9nJa&X-Amz-Signature=2863162c5f36667ae47979828fa0ee6649d5f21bb12ccc79424e68a6b6bb13e8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54BIT7P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjMtsLAotZnhUhStTfWgLfzNh%2FeUh4u0VER%2BEJwli1nAIhAOZ%2F8i4%2FsFcIbA7%2B2N3ROxbG%2B3SsTeCYp5cxb57zzp%2FZKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWI7NeZ%2Fgs2gaOZzgq3AMaQoGeAD%2BtKf%2F4qFxwmUKc1l0drWy01Z%2FxQMLDz8iVIoJcvx9nLm3Wph7nHuQf7jh5lGKUh%2FAkIXr3U4qeL03fMQR7%2BbbQZMCMk8zx5Wv%2BsAQtzzwYalEZftcMPNpLCKJy9cd8y8l%2BY15PdeweRxLUUCZWOqLzbHoiv%2FTApKnzjEgMkMv2pQhmXI90%2BrJbFVhrHsA7A%2BJmLNgUpRjCRs5TWUEwHtl2flV3c0JA0dnxZWNZyiLz9%2BSHrC%2Bdl44cMHRka2fXhbGvFyD3z8a2hm3GQXYY559wzF8pD02veMWMYHATWSxIkNHfmIopeX%2FB8mF58HmtQUcFJUdwtfgqKYaOOysYbcIqV%2Bh5uvpmJ401sfN8Aa%2FyfOmgXDN7h98VCdk62Vh4oqND2Pj3s5Wrq5t3VOkYfEiOWsLNrtrSgiImwXiz32Mc%2FW%2FCNDAHoRtXz9JWKcLLj%2BY%2FK2OmQq9DZbJAy%2BgM16HI0h%2Bzk3J65l9AoT0xL%2F%2FbCrzYrd3BLq%2BGhLb6H8rD1Nr%2FsU4pUsSND7bhc4T0ESw7IV%2FsieA2Ydk8r34uhqWY1Wo9xgOnBPhBqWLrHhMhXr6edU%2FfxETkHDpXlitVaXu1FYIWgA%2BIJ7O8z7g52LVEOMxXFzn17zDdpfe8BjqkAWfxa2YwdwX%2Bi%2Bd%2FlK0AB2vvHmzRgniPlwauKh89sJov5MmjR%2BZCW65qSaXUu5mfvQqqGfKbiZ3wHAyEimqWMFeK8cjUR8GZR0RB%2FvWnFxVwekegtVCQRo%2BCl20yu%2BDb7ZKdvnbWRPKQ%2FRfppU4orQJgL2CHzNK8rz1rh7%2FEGiWfTdDHfdzEGNPOTSjyJ9bBrK4%2BvVf%2FJ7ZB3exe0MGh%2B07I9nJa&X-Amz-Signature=bb308d8f2054d170c5fdb8253d28e1ac471df360a4b0116f4d1db14e53b347b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54BIT7P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjMtsLAotZnhUhStTfWgLfzNh%2FeUh4u0VER%2BEJwli1nAIhAOZ%2F8i4%2FsFcIbA7%2B2N3ROxbG%2B3SsTeCYp5cxb57zzp%2FZKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWI7NeZ%2Fgs2gaOZzgq3AMaQoGeAD%2BtKf%2F4qFxwmUKc1l0drWy01Z%2FxQMLDz8iVIoJcvx9nLm3Wph7nHuQf7jh5lGKUh%2FAkIXr3U4qeL03fMQR7%2BbbQZMCMk8zx5Wv%2BsAQtzzwYalEZftcMPNpLCKJy9cd8y8l%2BY15PdeweRxLUUCZWOqLzbHoiv%2FTApKnzjEgMkMv2pQhmXI90%2BrJbFVhrHsA7A%2BJmLNgUpRjCRs5TWUEwHtl2flV3c0JA0dnxZWNZyiLz9%2BSHrC%2Bdl44cMHRka2fXhbGvFyD3z8a2hm3GQXYY559wzF8pD02veMWMYHATWSxIkNHfmIopeX%2FB8mF58HmtQUcFJUdwtfgqKYaOOysYbcIqV%2Bh5uvpmJ401sfN8Aa%2FyfOmgXDN7h98VCdk62Vh4oqND2Pj3s5Wrq5t3VOkYfEiOWsLNrtrSgiImwXiz32Mc%2FW%2FCNDAHoRtXz9JWKcLLj%2BY%2FK2OmQq9DZbJAy%2BgM16HI0h%2Bzk3J65l9AoT0xL%2F%2FbCrzYrd3BLq%2BGhLb6H8rD1Nr%2FsU4pUsSND7bhc4T0ESw7IV%2FsieA2Ydk8r34uhqWY1Wo9xgOnBPhBqWLrHhMhXr6edU%2FfxETkHDpXlitVaXu1FYIWgA%2BIJ7O8z7g52LVEOMxXFzn17zDdpfe8BjqkAWfxa2YwdwX%2Bi%2Bd%2FlK0AB2vvHmzRgniPlwauKh89sJov5MmjR%2BZCW65qSaXUu5mfvQqqGfKbiZ3wHAyEimqWMFeK8cjUR8GZR0RB%2FvWnFxVwekegtVCQRo%2BCl20yu%2BDb7ZKdvnbWRPKQ%2FRfppU4orQJgL2CHzNK8rz1rh7%2FEGiWfTdDHfdzEGNPOTSjyJ9bBrK4%2BvVf%2FJ7ZB3exe0MGh%2B07I9nJa&X-Amz-Signature=bab69418e4e5d5bc4a381f15d77626e9df20ee651578dc7b25d252196513252c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54BIT7P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjMtsLAotZnhUhStTfWgLfzNh%2FeUh4u0VER%2BEJwli1nAIhAOZ%2F8i4%2FsFcIbA7%2B2N3ROxbG%2B3SsTeCYp5cxb57zzp%2FZKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWI7NeZ%2Fgs2gaOZzgq3AMaQoGeAD%2BtKf%2F4qFxwmUKc1l0drWy01Z%2FxQMLDz8iVIoJcvx9nLm3Wph7nHuQf7jh5lGKUh%2FAkIXr3U4qeL03fMQR7%2BbbQZMCMk8zx5Wv%2BsAQtzzwYalEZftcMPNpLCKJy9cd8y8l%2BY15PdeweRxLUUCZWOqLzbHoiv%2FTApKnzjEgMkMv2pQhmXI90%2BrJbFVhrHsA7A%2BJmLNgUpRjCRs5TWUEwHtl2flV3c0JA0dnxZWNZyiLz9%2BSHrC%2Bdl44cMHRka2fXhbGvFyD3z8a2hm3GQXYY559wzF8pD02veMWMYHATWSxIkNHfmIopeX%2FB8mF58HmtQUcFJUdwtfgqKYaOOysYbcIqV%2Bh5uvpmJ401sfN8Aa%2FyfOmgXDN7h98VCdk62Vh4oqND2Pj3s5Wrq5t3VOkYfEiOWsLNrtrSgiImwXiz32Mc%2FW%2FCNDAHoRtXz9JWKcLLj%2BY%2FK2OmQq9DZbJAy%2BgM16HI0h%2Bzk3J65l9AoT0xL%2F%2FbCrzYrd3BLq%2BGhLb6H8rD1Nr%2FsU4pUsSND7bhc4T0ESw7IV%2FsieA2Ydk8r34uhqWY1Wo9xgOnBPhBqWLrHhMhXr6edU%2FfxETkHDpXlitVaXu1FYIWgA%2BIJ7O8z7g52LVEOMxXFzn17zDdpfe8BjqkAWfxa2YwdwX%2Bi%2Bd%2FlK0AB2vvHmzRgniPlwauKh89sJov5MmjR%2BZCW65qSaXUu5mfvQqqGfKbiZ3wHAyEimqWMFeK8cjUR8GZR0RB%2FvWnFxVwekegtVCQRo%2BCl20yu%2BDb7ZKdvnbWRPKQ%2FRfppU4orQJgL2CHzNK8rz1rh7%2FEGiWfTdDHfdzEGNPOTSjyJ9bBrK4%2BvVf%2FJ7ZB3exe0MGh%2B07I9nJa&X-Amz-Signature=dc6fbb54866c83666d4e202c8ab21dab3b8acfefec7d6f1075b6d0784281edb0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54BIT7P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjMtsLAotZnhUhStTfWgLfzNh%2FeUh4u0VER%2BEJwli1nAIhAOZ%2F8i4%2FsFcIbA7%2B2N3ROxbG%2B3SsTeCYp5cxb57zzp%2FZKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWI7NeZ%2Fgs2gaOZzgq3AMaQoGeAD%2BtKf%2F4qFxwmUKc1l0drWy01Z%2FxQMLDz8iVIoJcvx9nLm3Wph7nHuQf7jh5lGKUh%2FAkIXr3U4qeL03fMQR7%2BbbQZMCMk8zx5Wv%2BsAQtzzwYalEZftcMPNpLCKJy9cd8y8l%2BY15PdeweRxLUUCZWOqLzbHoiv%2FTApKnzjEgMkMv2pQhmXI90%2BrJbFVhrHsA7A%2BJmLNgUpRjCRs5TWUEwHtl2flV3c0JA0dnxZWNZyiLz9%2BSHrC%2Bdl44cMHRka2fXhbGvFyD3z8a2hm3GQXYY559wzF8pD02veMWMYHATWSxIkNHfmIopeX%2FB8mF58HmtQUcFJUdwtfgqKYaOOysYbcIqV%2Bh5uvpmJ401sfN8Aa%2FyfOmgXDN7h98VCdk62Vh4oqND2Pj3s5Wrq5t3VOkYfEiOWsLNrtrSgiImwXiz32Mc%2FW%2FCNDAHoRtXz9JWKcLLj%2BY%2FK2OmQq9DZbJAy%2BgM16HI0h%2Bzk3J65l9AoT0xL%2F%2FbCrzYrd3BLq%2BGhLb6H8rD1Nr%2FsU4pUsSND7bhc4T0ESw7IV%2FsieA2Ydk8r34uhqWY1Wo9xgOnBPhBqWLrHhMhXr6edU%2FfxETkHDpXlitVaXu1FYIWgA%2BIJ7O8z7g52LVEOMxXFzn17zDdpfe8BjqkAWfxa2YwdwX%2Bi%2Bd%2FlK0AB2vvHmzRgniPlwauKh89sJov5MmjR%2BZCW65qSaXUu5mfvQqqGfKbiZ3wHAyEimqWMFeK8cjUR8GZR0RB%2FvWnFxVwekegtVCQRo%2BCl20yu%2BDb7ZKdvnbWRPKQ%2FRfppU4orQJgL2CHzNK8rz1rh7%2FEGiWfTdDHfdzEGNPOTSjyJ9bBrK4%2BvVf%2FJ7ZB3exe0MGh%2B07I9nJa&X-Amz-Signature=7fb71f68cf8c0adf6e9d59629d4befaa8394cb3ecb21bab38a67d127f0e8c63e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54BIT7P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjMtsLAotZnhUhStTfWgLfzNh%2FeUh4u0VER%2BEJwli1nAIhAOZ%2F8i4%2FsFcIbA7%2B2N3ROxbG%2B3SsTeCYp5cxb57zzp%2FZKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWI7NeZ%2Fgs2gaOZzgq3AMaQoGeAD%2BtKf%2F4qFxwmUKc1l0drWy01Z%2FxQMLDz8iVIoJcvx9nLm3Wph7nHuQf7jh5lGKUh%2FAkIXr3U4qeL03fMQR7%2BbbQZMCMk8zx5Wv%2BsAQtzzwYalEZftcMPNpLCKJy9cd8y8l%2BY15PdeweRxLUUCZWOqLzbHoiv%2FTApKnzjEgMkMv2pQhmXI90%2BrJbFVhrHsA7A%2BJmLNgUpRjCRs5TWUEwHtl2flV3c0JA0dnxZWNZyiLz9%2BSHrC%2Bdl44cMHRka2fXhbGvFyD3z8a2hm3GQXYY559wzF8pD02veMWMYHATWSxIkNHfmIopeX%2FB8mF58HmtQUcFJUdwtfgqKYaOOysYbcIqV%2Bh5uvpmJ401sfN8Aa%2FyfOmgXDN7h98VCdk62Vh4oqND2Pj3s5Wrq5t3VOkYfEiOWsLNrtrSgiImwXiz32Mc%2FW%2FCNDAHoRtXz9JWKcLLj%2BY%2FK2OmQq9DZbJAy%2BgM16HI0h%2Bzk3J65l9AoT0xL%2F%2FbCrzYrd3BLq%2BGhLb6H8rD1Nr%2FsU4pUsSND7bhc4T0ESw7IV%2FsieA2Ydk8r34uhqWY1Wo9xgOnBPhBqWLrHhMhXr6edU%2FfxETkHDpXlitVaXu1FYIWgA%2BIJ7O8z7g52LVEOMxXFzn17zDdpfe8BjqkAWfxa2YwdwX%2Bi%2Bd%2FlK0AB2vvHmzRgniPlwauKh89sJov5MmjR%2BZCW65qSaXUu5mfvQqqGfKbiZ3wHAyEimqWMFeK8cjUR8GZR0RB%2FvWnFxVwekegtVCQRo%2BCl20yu%2BDb7ZKdvnbWRPKQ%2FRfppU4orQJgL2CHzNK8rz1rh7%2FEGiWfTdDHfdzEGNPOTSjyJ9bBrK4%2BvVf%2FJ7ZB3exe0MGh%2B07I9nJa&X-Amz-Signature=65ed9e8176ec8b83d7c5a53e3ca8e9c1f4747d1033fd7c9b0ebf69b3b20f1452&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
