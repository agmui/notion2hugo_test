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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3Z7LYLM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCID1jM3Kq2rfClmtQxJIgIIeuzB1ckltbHghsftPFOQmqAiEA2WYbjeNQUoiKP%2FieAiDZc6lgVydgl%2BpJb6ld13dJxoYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7JXiAlX4j0nw8j4ircA67XY8OYOFJhQo1fBi6Cq28qEMJ2fpZs4UFIYRkpH8wyQeqZyZXGuLVhLJ8e6ZlIzQGCYoa%2FGbv1GFkxAQg9KoflZr5enZnuJAIgv%2BDx%2FXb0S0Kf4e2vxh%2Bvmb1zjtZvmiZGmnPOvYTQnmcBFhOY6FlP4wPTAHWRNp7T1nORnB1I1Rf1sH7ulsW9Yvwa%2Fj0sIKhWb3QqwwE9ENGHyuLXxBPj68KbxGBY3gTGfeu%2BNSWeBBv2vMnl%2FJWeDVE4fP6boiA8mc0idCDzVSzAnIzL0%2F%2FqPNlMnjLFBplE0zBstJLxlUDS8AtJzxQYkwpOtCjfnAIaqrPjKRctHladZZVQgVGx5J52zTxEqQe8DRBtUAN%2FBWaBA92TZ9TdqVR5ZsvEX56Lqv3TcpQpu%2BwJsJMn1j4Jagim0DHDT1f2%2FhllVyM0QL1h3j2rwwOChR16GEnY7%2BqxA1I%2FLrYfdVah3opnT3E2s0AVUxF85e%2FbuhdRD0HJJPRHXCieYp9TEu70EftEi8zn2dWRJtczm9U548QHR9Mzo3rgyOrkVQN9ywU9KyshcRm0lld6Et0BadsREezHD%2Fm0VHJ1stxItByvLa%2Bf0bEqd5eqG7mK785udCtgb59r6W7L233hN%2BahLev9MIOR0cQGOqUBv%2BBUh9HUbIQs1bPrYuzsqCbkPCO8ocRW5Xz%2FXgVCq6Y7%2FcAg72WXPGYTzanFHt30LR9QDoopZHTLgwvltpk9XQJ%2Fyzg7nLEYfRbTCiyEzMwv5QEBRhpOYKdPuZGmpcQY0Rkxz7oj34L2mkj5an3GoMLj1k4n%2BiDrs%2BrIIiJ02ojZXIf%2FuARNYFzy0Yd8V7gANsLPKxGS7I3%2B%2BACvVYyAjxiuor8i&X-Amz-Signature=f5a3fb31ba5b4c1a806d3d8fe0f8dee7ca0250c5a3e45849a1c6853720bb642b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3Z7LYLM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCID1jM3Kq2rfClmtQxJIgIIeuzB1ckltbHghsftPFOQmqAiEA2WYbjeNQUoiKP%2FieAiDZc6lgVydgl%2BpJb6ld13dJxoYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7JXiAlX4j0nw8j4ircA67XY8OYOFJhQo1fBi6Cq28qEMJ2fpZs4UFIYRkpH8wyQeqZyZXGuLVhLJ8e6ZlIzQGCYoa%2FGbv1GFkxAQg9KoflZr5enZnuJAIgv%2BDx%2FXb0S0Kf4e2vxh%2Bvmb1zjtZvmiZGmnPOvYTQnmcBFhOY6FlP4wPTAHWRNp7T1nORnB1I1Rf1sH7ulsW9Yvwa%2Fj0sIKhWb3QqwwE9ENGHyuLXxBPj68KbxGBY3gTGfeu%2BNSWeBBv2vMnl%2FJWeDVE4fP6boiA8mc0idCDzVSzAnIzL0%2F%2FqPNlMnjLFBplE0zBstJLxlUDS8AtJzxQYkwpOtCjfnAIaqrPjKRctHladZZVQgVGx5J52zTxEqQe8DRBtUAN%2FBWaBA92TZ9TdqVR5ZsvEX56Lqv3TcpQpu%2BwJsJMn1j4Jagim0DHDT1f2%2FhllVyM0QL1h3j2rwwOChR16GEnY7%2BqxA1I%2FLrYfdVah3opnT3E2s0AVUxF85e%2FbuhdRD0HJJPRHXCieYp9TEu70EftEi8zn2dWRJtczm9U548QHR9Mzo3rgyOrkVQN9ywU9KyshcRm0lld6Et0BadsREezHD%2Fm0VHJ1stxItByvLa%2Bf0bEqd5eqG7mK785udCtgb59r6W7L233hN%2BahLev9MIOR0cQGOqUBv%2BBUh9HUbIQs1bPrYuzsqCbkPCO8ocRW5Xz%2FXgVCq6Y7%2FcAg72WXPGYTzanFHt30LR9QDoopZHTLgwvltpk9XQJ%2Fyzg7nLEYfRbTCiyEzMwv5QEBRhpOYKdPuZGmpcQY0Rkxz7oj34L2mkj5an3GoMLj1k4n%2BiDrs%2BrIIiJ02ojZXIf%2FuARNYFzy0Yd8V7gANsLPKxGS7I3%2B%2BACvVYyAjxiuor8i&X-Amz-Signature=94c9449e47994a45c2552aaa60e37e7a604ff221c1696fd37a801afc6560233c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3Z7LYLM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCID1jM3Kq2rfClmtQxJIgIIeuzB1ckltbHghsftPFOQmqAiEA2WYbjeNQUoiKP%2FieAiDZc6lgVydgl%2BpJb6ld13dJxoYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7JXiAlX4j0nw8j4ircA67XY8OYOFJhQo1fBi6Cq28qEMJ2fpZs4UFIYRkpH8wyQeqZyZXGuLVhLJ8e6ZlIzQGCYoa%2FGbv1GFkxAQg9KoflZr5enZnuJAIgv%2BDx%2FXb0S0Kf4e2vxh%2Bvmb1zjtZvmiZGmnPOvYTQnmcBFhOY6FlP4wPTAHWRNp7T1nORnB1I1Rf1sH7ulsW9Yvwa%2Fj0sIKhWb3QqwwE9ENGHyuLXxBPj68KbxGBY3gTGfeu%2BNSWeBBv2vMnl%2FJWeDVE4fP6boiA8mc0idCDzVSzAnIzL0%2F%2FqPNlMnjLFBplE0zBstJLxlUDS8AtJzxQYkwpOtCjfnAIaqrPjKRctHladZZVQgVGx5J52zTxEqQe8DRBtUAN%2FBWaBA92TZ9TdqVR5ZsvEX56Lqv3TcpQpu%2BwJsJMn1j4Jagim0DHDT1f2%2FhllVyM0QL1h3j2rwwOChR16GEnY7%2BqxA1I%2FLrYfdVah3opnT3E2s0AVUxF85e%2FbuhdRD0HJJPRHXCieYp9TEu70EftEi8zn2dWRJtczm9U548QHR9Mzo3rgyOrkVQN9ywU9KyshcRm0lld6Et0BadsREezHD%2Fm0VHJ1stxItByvLa%2Bf0bEqd5eqG7mK785udCtgb59r6W7L233hN%2BahLev9MIOR0cQGOqUBv%2BBUh9HUbIQs1bPrYuzsqCbkPCO8ocRW5Xz%2FXgVCq6Y7%2FcAg72WXPGYTzanFHt30LR9QDoopZHTLgwvltpk9XQJ%2Fyzg7nLEYfRbTCiyEzMwv5QEBRhpOYKdPuZGmpcQY0Rkxz7oj34L2mkj5an3GoMLj1k4n%2BiDrs%2BrIIiJ02ojZXIf%2FuARNYFzy0Yd8V7gANsLPKxGS7I3%2B%2BACvVYyAjxiuor8i&X-Amz-Signature=07b09cfec4c4ee6217ea49269c7bdd61be9b4ffdfb74f43d85043a018827ed44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3Z7LYLM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCID1jM3Kq2rfClmtQxJIgIIeuzB1ckltbHghsftPFOQmqAiEA2WYbjeNQUoiKP%2FieAiDZc6lgVydgl%2BpJb6ld13dJxoYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7JXiAlX4j0nw8j4ircA67XY8OYOFJhQo1fBi6Cq28qEMJ2fpZs4UFIYRkpH8wyQeqZyZXGuLVhLJ8e6ZlIzQGCYoa%2FGbv1GFkxAQg9KoflZr5enZnuJAIgv%2BDx%2FXb0S0Kf4e2vxh%2Bvmb1zjtZvmiZGmnPOvYTQnmcBFhOY6FlP4wPTAHWRNp7T1nORnB1I1Rf1sH7ulsW9Yvwa%2Fj0sIKhWb3QqwwE9ENGHyuLXxBPj68KbxGBY3gTGfeu%2BNSWeBBv2vMnl%2FJWeDVE4fP6boiA8mc0idCDzVSzAnIzL0%2F%2FqPNlMnjLFBplE0zBstJLxlUDS8AtJzxQYkwpOtCjfnAIaqrPjKRctHladZZVQgVGx5J52zTxEqQe8DRBtUAN%2FBWaBA92TZ9TdqVR5ZsvEX56Lqv3TcpQpu%2BwJsJMn1j4Jagim0DHDT1f2%2FhllVyM0QL1h3j2rwwOChR16GEnY7%2BqxA1I%2FLrYfdVah3opnT3E2s0AVUxF85e%2FbuhdRD0HJJPRHXCieYp9TEu70EftEi8zn2dWRJtczm9U548QHR9Mzo3rgyOrkVQN9ywU9KyshcRm0lld6Et0BadsREezHD%2Fm0VHJ1stxItByvLa%2Bf0bEqd5eqG7mK785udCtgb59r6W7L233hN%2BahLev9MIOR0cQGOqUBv%2BBUh9HUbIQs1bPrYuzsqCbkPCO8ocRW5Xz%2FXgVCq6Y7%2FcAg72WXPGYTzanFHt30LR9QDoopZHTLgwvltpk9XQJ%2Fyzg7nLEYfRbTCiyEzMwv5QEBRhpOYKdPuZGmpcQY0Rkxz7oj34L2mkj5an3GoMLj1k4n%2BiDrs%2BrIIiJ02ojZXIf%2FuARNYFzy0Yd8V7gANsLPKxGS7I3%2B%2BACvVYyAjxiuor8i&X-Amz-Signature=f88ea505bfa96fd6a50294d45c51a6380767596561bc1498c8f9c45ac2ed8f83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3Z7LYLM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCID1jM3Kq2rfClmtQxJIgIIeuzB1ckltbHghsftPFOQmqAiEA2WYbjeNQUoiKP%2FieAiDZc6lgVydgl%2BpJb6ld13dJxoYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7JXiAlX4j0nw8j4ircA67XY8OYOFJhQo1fBi6Cq28qEMJ2fpZs4UFIYRkpH8wyQeqZyZXGuLVhLJ8e6ZlIzQGCYoa%2FGbv1GFkxAQg9KoflZr5enZnuJAIgv%2BDx%2FXb0S0Kf4e2vxh%2Bvmb1zjtZvmiZGmnPOvYTQnmcBFhOY6FlP4wPTAHWRNp7T1nORnB1I1Rf1sH7ulsW9Yvwa%2Fj0sIKhWb3QqwwE9ENGHyuLXxBPj68KbxGBY3gTGfeu%2BNSWeBBv2vMnl%2FJWeDVE4fP6boiA8mc0idCDzVSzAnIzL0%2F%2FqPNlMnjLFBplE0zBstJLxlUDS8AtJzxQYkwpOtCjfnAIaqrPjKRctHladZZVQgVGx5J52zTxEqQe8DRBtUAN%2FBWaBA92TZ9TdqVR5ZsvEX56Lqv3TcpQpu%2BwJsJMn1j4Jagim0DHDT1f2%2FhllVyM0QL1h3j2rwwOChR16GEnY7%2BqxA1I%2FLrYfdVah3opnT3E2s0AVUxF85e%2FbuhdRD0HJJPRHXCieYp9TEu70EftEi8zn2dWRJtczm9U548QHR9Mzo3rgyOrkVQN9ywU9KyshcRm0lld6Et0BadsREezHD%2Fm0VHJ1stxItByvLa%2Bf0bEqd5eqG7mK785udCtgb59r6W7L233hN%2BahLev9MIOR0cQGOqUBv%2BBUh9HUbIQs1bPrYuzsqCbkPCO8ocRW5Xz%2FXgVCq6Y7%2FcAg72WXPGYTzanFHt30LR9QDoopZHTLgwvltpk9XQJ%2Fyzg7nLEYfRbTCiyEzMwv5QEBRhpOYKdPuZGmpcQY0Rkxz7oj34L2mkj5an3GoMLj1k4n%2BiDrs%2BrIIiJ02ojZXIf%2FuARNYFzy0Yd8V7gANsLPKxGS7I3%2B%2BACvVYyAjxiuor8i&X-Amz-Signature=303182f0438abff046d6efe8c8c864eb0a4edc34e31ca7d3d73e48e36e33f4e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3Z7LYLM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCID1jM3Kq2rfClmtQxJIgIIeuzB1ckltbHghsftPFOQmqAiEA2WYbjeNQUoiKP%2FieAiDZc6lgVydgl%2BpJb6ld13dJxoYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7JXiAlX4j0nw8j4ircA67XY8OYOFJhQo1fBi6Cq28qEMJ2fpZs4UFIYRkpH8wyQeqZyZXGuLVhLJ8e6ZlIzQGCYoa%2FGbv1GFkxAQg9KoflZr5enZnuJAIgv%2BDx%2FXb0S0Kf4e2vxh%2Bvmb1zjtZvmiZGmnPOvYTQnmcBFhOY6FlP4wPTAHWRNp7T1nORnB1I1Rf1sH7ulsW9Yvwa%2Fj0sIKhWb3QqwwE9ENGHyuLXxBPj68KbxGBY3gTGfeu%2BNSWeBBv2vMnl%2FJWeDVE4fP6boiA8mc0idCDzVSzAnIzL0%2F%2FqPNlMnjLFBplE0zBstJLxlUDS8AtJzxQYkwpOtCjfnAIaqrPjKRctHladZZVQgVGx5J52zTxEqQe8DRBtUAN%2FBWaBA92TZ9TdqVR5ZsvEX56Lqv3TcpQpu%2BwJsJMn1j4Jagim0DHDT1f2%2FhllVyM0QL1h3j2rwwOChR16GEnY7%2BqxA1I%2FLrYfdVah3opnT3E2s0AVUxF85e%2FbuhdRD0HJJPRHXCieYp9TEu70EftEi8zn2dWRJtczm9U548QHR9Mzo3rgyOrkVQN9ywU9KyshcRm0lld6Et0BadsREezHD%2Fm0VHJ1stxItByvLa%2Bf0bEqd5eqG7mK785udCtgb59r6W7L233hN%2BahLev9MIOR0cQGOqUBv%2BBUh9HUbIQs1bPrYuzsqCbkPCO8ocRW5Xz%2FXgVCq6Y7%2FcAg72WXPGYTzanFHt30LR9QDoopZHTLgwvltpk9XQJ%2Fyzg7nLEYfRbTCiyEzMwv5QEBRhpOYKdPuZGmpcQY0Rkxz7oj34L2mkj5an3GoMLj1k4n%2BiDrs%2BrIIiJ02ojZXIf%2FuARNYFzy0Yd8V7gANsLPKxGS7I3%2B%2BACvVYyAjxiuor8i&X-Amz-Signature=df21eeb5fc9ebe5d0de89c48a39685788abcb3fa1718541f9cba2cc571ccd277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3Z7LYLM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCID1jM3Kq2rfClmtQxJIgIIeuzB1ckltbHghsftPFOQmqAiEA2WYbjeNQUoiKP%2FieAiDZc6lgVydgl%2BpJb6ld13dJxoYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7JXiAlX4j0nw8j4ircA67XY8OYOFJhQo1fBi6Cq28qEMJ2fpZs4UFIYRkpH8wyQeqZyZXGuLVhLJ8e6ZlIzQGCYoa%2FGbv1GFkxAQg9KoflZr5enZnuJAIgv%2BDx%2FXb0S0Kf4e2vxh%2Bvmb1zjtZvmiZGmnPOvYTQnmcBFhOY6FlP4wPTAHWRNp7T1nORnB1I1Rf1sH7ulsW9Yvwa%2Fj0sIKhWb3QqwwE9ENGHyuLXxBPj68KbxGBY3gTGfeu%2BNSWeBBv2vMnl%2FJWeDVE4fP6boiA8mc0idCDzVSzAnIzL0%2F%2FqPNlMnjLFBplE0zBstJLxlUDS8AtJzxQYkwpOtCjfnAIaqrPjKRctHladZZVQgVGx5J52zTxEqQe8DRBtUAN%2FBWaBA92TZ9TdqVR5ZsvEX56Lqv3TcpQpu%2BwJsJMn1j4Jagim0DHDT1f2%2FhllVyM0QL1h3j2rwwOChR16GEnY7%2BqxA1I%2FLrYfdVah3opnT3E2s0AVUxF85e%2FbuhdRD0HJJPRHXCieYp9TEu70EftEi8zn2dWRJtczm9U548QHR9Mzo3rgyOrkVQN9ywU9KyshcRm0lld6Et0BadsREezHD%2Fm0VHJ1stxItByvLa%2Bf0bEqd5eqG7mK785udCtgb59r6W7L233hN%2BahLev9MIOR0cQGOqUBv%2BBUh9HUbIQs1bPrYuzsqCbkPCO8ocRW5Xz%2FXgVCq6Y7%2FcAg72WXPGYTzanFHt30LR9QDoopZHTLgwvltpk9XQJ%2Fyzg7nLEYfRbTCiyEzMwv5QEBRhpOYKdPuZGmpcQY0Rkxz7oj34L2mkj5an3GoMLj1k4n%2BiDrs%2BrIIiJ02ojZXIf%2FuARNYFzy0Yd8V7gANsLPKxGS7I3%2B%2BACvVYyAjxiuor8i&X-Amz-Signature=83acc70c769db5f068764ecc70f983432180bdbfb181d2e306461e33509ff0bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3Z7LYLM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCID1jM3Kq2rfClmtQxJIgIIeuzB1ckltbHghsftPFOQmqAiEA2WYbjeNQUoiKP%2FieAiDZc6lgVydgl%2BpJb6ld13dJxoYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7JXiAlX4j0nw8j4ircA67XY8OYOFJhQo1fBi6Cq28qEMJ2fpZs4UFIYRkpH8wyQeqZyZXGuLVhLJ8e6ZlIzQGCYoa%2FGbv1GFkxAQg9KoflZr5enZnuJAIgv%2BDx%2FXb0S0Kf4e2vxh%2Bvmb1zjtZvmiZGmnPOvYTQnmcBFhOY6FlP4wPTAHWRNp7T1nORnB1I1Rf1sH7ulsW9Yvwa%2Fj0sIKhWb3QqwwE9ENGHyuLXxBPj68KbxGBY3gTGfeu%2BNSWeBBv2vMnl%2FJWeDVE4fP6boiA8mc0idCDzVSzAnIzL0%2F%2FqPNlMnjLFBplE0zBstJLxlUDS8AtJzxQYkwpOtCjfnAIaqrPjKRctHladZZVQgVGx5J52zTxEqQe8DRBtUAN%2FBWaBA92TZ9TdqVR5ZsvEX56Lqv3TcpQpu%2BwJsJMn1j4Jagim0DHDT1f2%2FhllVyM0QL1h3j2rwwOChR16GEnY7%2BqxA1I%2FLrYfdVah3opnT3E2s0AVUxF85e%2FbuhdRD0HJJPRHXCieYp9TEu70EftEi8zn2dWRJtczm9U548QHR9Mzo3rgyOrkVQN9ywU9KyshcRm0lld6Et0BadsREezHD%2Fm0VHJ1stxItByvLa%2Bf0bEqd5eqG7mK785udCtgb59r6W7L233hN%2BahLev9MIOR0cQGOqUBv%2BBUh9HUbIQs1bPrYuzsqCbkPCO8ocRW5Xz%2FXgVCq6Y7%2FcAg72WXPGYTzanFHt30LR9QDoopZHTLgwvltpk9XQJ%2Fyzg7nLEYfRbTCiyEzMwv5QEBRhpOYKdPuZGmpcQY0Rkxz7oj34L2mkj5an3GoMLj1k4n%2BiDrs%2BrIIiJ02ojZXIf%2FuARNYFzy0Yd8V7gANsLPKxGS7I3%2B%2BACvVYyAjxiuor8i&X-Amz-Signature=4437a6e7dc63034abdbb65a5fedd4d72e025d8eaeae7e0a37962c0091e6569ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
