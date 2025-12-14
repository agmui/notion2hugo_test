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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RAK7ILU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDvzJlOreyJX5oBmWopOQAssvGJIfbK1QFwsyzeDBp0vAIhAMRgq%2F7zGOkJJiT5ktHE8CHdgvtnhJvlxZg5RR5Y3m%2FAKv8DCCoQABoMNjM3NDIzMTgzODA1Igy%2F9adMNwZ2PCbfmK4q3ANjRm26V%2FHElz5eVvPvVhDX8Sv7U0E81BxusN1fviXXjqKkC4kR5yQLyJ7sJS3MuemtAk2XQKf0Ywpnd%2FE3M7BQh9f9XT56izcY59CPyhC9%2BEcI8IcH9Y5OuCLooCj1yk60m7KN9IObZ29hDwRlcj6kyfSkr54xZsdVFqxRIA1JzTlA02SxJ0zhvmm6t%2F1EHBKAmrOfwSwsSWFtOuprtk3AZHD6E9pp9%2BbkScp78BZN%2FS5m%2BLCpGSsSLdkJPeGPqOpUZbPKfrV%2BhK2Xpaa5NpkH0BUaOe5Cd5kzhNfYv6bfzjLXgkfPYM%2B%2F6yYOI%2FuZvC6Qtr9R5UZrOKjp6%2FpctW3Xs0cMo2FDnKmlA1rK4zt5NxlgUO4KJTodavWBF8CaYs2%2B7RIx8zDJVhJ1xFcH9p341UbgknwuqHHv1pqWmk2UI5cC74lPpq7y09BtOaQb932QDZYA2ht2LEnCBdjSyk6rSMoK%2BCZ%2FAs98Xmyjvkn7fwj2tO6JAF9SSP5SCVPCtyw8vjHiwFXBbVUpIf2%2B9pMPaxYXU10XHzRi1BGyo1aMESyhmFaEUcNA3dTr0PLPSnaWj%2F6X1pPKlCkHWGSoRo0d%2B7Sz%2FH1R3xKiW3VaAsPVGtc%2FL%2F1EwsBvNT6dfzCXl%2FjJBjqkAaR8QBTmomYA3t12nGLPYRBHKrsG7QdcXzoN0um3RpjL35HDi1ls2cLpQCd58agIfbnvjrUAIV%2BxDp4G7p2SmicKI5fRHTcHCXseRybejMukbazwLdaeVN2XvzYTW7x6v0jpfjyF5dWLA%2Bfgtdsot%2Fut0g5402a2y4lK8LLm5YcyP8hMPzG3tpvVG8za05HKRewuyW3CUel05RabPg174zVvFjFC&X-Amz-Signature=a5576d3fe2b2c6c6142cfb617c704554a7c2006c44aedc4f523199377774fa58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RAK7ILU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDvzJlOreyJX5oBmWopOQAssvGJIfbK1QFwsyzeDBp0vAIhAMRgq%2F7zGOkJJiT5ktHE8CHdgvtnhJvlxZg5RR5Y3m%2FAKv8DCCoQABoMNjM3NDIzMTgzODA1Igy%2F9adMNwZ2PCbfmK4q3ANjRm26V%2FHElz5eVvPvVhDX8Sv7U0E81BxusN1fviXXjqKkC4kR5yQLyJ7sJS3MuemtAk2XQKf0Ywpnd%2FE3M7BQh9f9XT56izcY59CPyhC9%2BEcI8IcH9Y5OuCLooCj1yk60m7KN9IObZ29hDwRlcj6kyfSkr54xZsdVFqxRIA1JzTlA02SxJ0zhvmm6t%2F1EHBKAmrOfwSwsSWFtOuprtk3AZHD6E9pp9%2BbkScp78BZN%2FS5m%2BLCpGSsSLdkJPeGPqOpUZbPKfrV%2BhK2Xpaa5NpkH0BUaOe5Cd5kzhNfYv6bfzjLXgkfPYM%2B%2F6yYOI%2FuZvC6Qtr9R5UZrOKjp6%2FpctW3Xs0cMo2FDnKmlA1rK4zt5NxlgUO4KJTodavWBF8CaYs2%2B7RIx8zDJVhJ1xFcH9p341UbgknwuqHHv1pqWmk2UI5cC74lPpq7y09BtOaQb932QDZYA2ht2LEnCBdjSyk6rSMoK%2BCZ%2FAs98Xmyjvkn7fwj2tO6JAF9SSP5SCVPCtyw8vjHiwFXBbVUpIf2%2B9pMPaxYXU10XHzRi1BGyo1aMESyhmFaEUcNA3dTr0PLPSnaWj%2F6X1pPKlCkHWGSoRo0d%2B7Sz%2FH1R3xKiW3VaAsPVGtc%2FL%2F1EwsBvNT6dfzCXl%2FjJBjqkAaR8QBTmomYA3t12nGLPYRBHKrsG7QdcXzoN0um3RpjL35HDi1ls2cLpQCd58agIfbnvjrUAIV%2BxDp4G7p2SmicKI5fRHTcHCXseRybejMukbazwLdaeVN2XvzYTW7x6v0jpfjyF5dWLA%2Bfgtdsot%2Fut0g5402a2y4lK8LLm5YcyP8hMPzG3tpvVG8za05HKRewuyW3CUel05RabPg174zVvFjFC&X-Amz-Signature=14371bcf09861a3afba9f7150fae05b7c3bf5b4431627ad431448ee390511fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RAK7ILU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDvzJlOreyJX5oBmWopOQAssvGJIfbK1QFwsyzeDBp0vAIhAMRgq%2F7zGOkJJiT5ktHE8CHdgvtnhJvlxZg5RR5Y3m%2FAKv8DCCoQABoMNjM3NDIzMTgzODA1Igy%2F9adMNwZ2PCbfmK4q3ANjRm26V%2FHElz5eVvPvVhDX8Sv7U0E81BxusN1fviXXjqKkC4kR5yQLyJ7sJS3MuemtAk2XQKf0Ywpnd%2FE3M7BQh9f9XT56izcY59CPyhC9%2BEcI8IcH9Y5OuCLooCj1yk60m7KN9IObZ29hDwRlcj6kyfSkr54xZsdVFqxRIA1JzTlA02SxJ0zhvmm6t%2F1EHBKAmrOfwSwsSWFtOuprtk3AZHD6E9pp9%2BbkScp78BZN%2FS5m%2BLCpGSsSLdkJPeGPqOpUZbPKfrV%2BhK2Xpaa5NpkH0BUaOe5Cd5kzhNfYv6bfzjLXgkfPYM%2B%2F6yYOI%2FuZvC6Qtr9R5UZrOKjp6%2FpctW3Xs0cMo2FDnKmlA1rK4zt5NxlgUO4KJTodavWBF8CaYs2%2B7RIx8zDJVhJ1xFcH9p341UbgknwuqHHv1pqWmk2UI5cC74lPpq7y09BtOaQb932QDZYA2ht2LEnCBdjSyk6rSMoK%2BCZ%2FAs98Xmyjvkn7fwj2tO6JAF9SSP5SCVPCtyw8vjHiwFXBbVUpIf2%2B9pMPaxYXU10XHzRi1BGyo1aMESyhmFaEUcNA3dTr0PLPSnaWj%2F6X1pPKlCkHWGSoRo0d%2B7Sz%2FH1R3xKiW3VaAsPVGtc%2FL%2F1EwsBvNT6dfzCXl%2FjJBjqkAaR8QBTmomYA3t12nGLPYRBHKrsG7QdcXzoN0um3RpjL35HDi1ls2cLpQCd58agIfbnvjrUAIV%2BxDp4G7p2SmicKI5fRHTcHCXseRybejMukbazwLdaeVN2XvzYTW7x6v0jpfjyF5dWLA%2Bfgtdsot%2Fut0g5402a2y4lK8LLm5YcyP8hMPzG3tpvVG8za05HKRewuyW3CUel05RabPg174zVvFjFC&X-Amz-Signature=b03eff93fd43d0d066676246a7f8f3265d356180a53db57ddd498b6483be33ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RAK7ILU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDvzJlOreyJX5oBmWopOQAssvGJIfbK1QFwsyzeDBp0vAIhAMRgq%2F7zGOkJJiT5ktHE8CHdgvtnhJvlxZg5RR5Y3m%2FAKv8DCCoQABoMNjM3NDIzMTgzODA1Igy%2F9adMNwZ2PCbfmK4q3ANjRm26V%2FHElz5eVvPvVhDX8Sv7U0E81BxusN1fviXXjqKkC4kR5yQLyJ7sJS3MuemtAk2XQKf0Ywpnd%2FE3M7BQh9f9XT56izcY59CPyhC9%2BEcI8IcH9Y5OuCLooCj1yk60m7KN9IObZ29hDwRlcj6kyfSkr54xZsdVFqxRIA1JzTlA02SxJ0zhvmm6t%2F1EHBKAmrOfwSwsSWFtOuprtk3AZHD6E9pp9%2BbkScp78BZN%2FS5m%2BLCpGSsSLdkJPeGPqOpUZbPKfrV%2BhK2Xpaa5NpkH0BUaOe5Cd5kzhNfYv6bfzjLXgkfPYM%2B%2F6yYOI%2FuZvC6Qtr9R5UZrOKjp6%2FpctW3Xs0cMo2FDnKmlA1rK4zt5NxlgUO4KJTodavWBF8CaYs2%2B7RIx8zDJVhJ1xFcH9p341UbgknwuqHHv1pqWmk2UI5cC74lPpq7y09BtOaQb932QDZYA2ht2LEnCBdjSyk6rSMoK%2BCZ%2FAs98Xmyjvkn7fwj2tO6JAF9SSP5SCVPCtyw8vjHiwFXBbVUpIf2%2B9pMPaxYXU10XHzRi1BGyo1aMESyhmFaEUcNA3dTr0PLPSnaWj%2F6X1pPKlCkHWGSoRo0d%2B7Sz%2FH1R3xKiW3VaAsPVGtc%2FL%2F1EwsBvNT6dfzCXl%2FjJBjqkAaR8QBTmomYA3t12nGLPYRBHKrsG7QdcXzoN0um3RpjL35HDi1ls2cLpQCd58agIfbnvjrUAIV%2BxDp4G7p2SmicKI5fRHTcHCXseRybejMukbazwLdaeVN2XvzYTW7x6v0jpfjyF5dWLA%2Bfgtdsot%2Fut0g5402a2y4lK8LLm5YcyP8hMPzG3tpvVG8za05HKRewuyW3CUel05RabPg174zVvFjFC&X-Amz-Signature=d735cccdd9c44b2248b410b12d62ef36c88f4eed9b6851ed7a45b13331c29728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RAK7ILU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDvzJlOreyJX5oBmWopOQAssvGJIfbK1QFwsyzeDBp0vAIhAMRgq%2F7zGOkJJiT5ktHE8CHdgvtnhJvlxZg5RR5Y3m%2FAKv8DCCoQABoMNjM3NDIzMTgzODA1Igy%2F9adMNwZ2PCbfmK4q3ANjRm26V%2FHElz5eVvPvVhDX8Sv7U0E81BxusN1fviXXjqKkC4kR5yQLyJ7sJS3MuemtAk2XQKf0Ywpnd%2FE3M7BQh9f9XT56izcY59CPyhC9%2BEcI8IcH9Y5OuCLooCj1yk60m7KN9IObZ29hDwRlcj6kyfSkr54xZsdVFqxRIA1JzTlA02SxJ0zhvmm6t%2F1EHBKAmrOfwSwsSWFtOuprtk3AZHD6E9pp9%2BbkScp78BZN%2FS5m%2BLCpGSsSLdkJPeGPqOpUZbPKfrV%2BhK2Xpaa5NpkH0BUaOe5Cd5kzhNfYv6bfzjLXgkfPYM%2B%2F6yYOI%2FuZvC6Qtr9R5UZrOKjp6%2FpctW3Xs0cMo2FDnKmlA1rK4zt5NxlgUO4KJTodavWBF8CaYs2%2B7RIx8zDJVhJ1xFcH9p341UbgknwuqHHv1pqWmk2UI5cC74lPpq7y09BtOaQb932QDZYA2ht2LEnCBdjSyk6rSMoK%2BCZ%2FAs98Xmyjvkn7fwj2tO6JAF9SSP5SCVPCtyw8vjHiwFXBbVUpIf2%2B9pMPaxYXU10XHzRi1BGyo1aMESyhmFaEUcNA3dTr0PLPSnaWj%2F6X1pPKlCkHWGSoRo0d%2B7Sz%2FH1R3xKiW3VaAsPVGtc%2FL%2F1EwsBvNT6dfzCXl%2FjJBjqkAaR8QBTmomYA3t12nGLPYRBHKrsG7QdcXzoN0um3RpjL35HDi1ls2cLpQCd58agIfbnvjrUAIV%2BxDp4G7p2SmicKI5fRHTcHCXseRybejMukbazwLdaeVN2XvzYTW7x6v0jpfjyF5dWLA%2Bfgtdsot%2Fut0g5402a2y4lK8LLm5YcyP8hMPzG3tpvVG8za05HKRewuyW3CUel05RabPg174zVvFjFC&X-Amz-Signature=8e8028dcdcc120086a42afc25062f818c8d0ddeeba7a6232643822f076cf1f6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RAK7ILU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDvzJlOreyJX5oBmWopOQAssvGJIfbK1QFwsyzeDBp0vAIhAMRgq%2F7zGOkJJiT5ktHE8CHdgvtnhJvlxZg5RR5Y3m%2FAKv8DCCoQABoMNjM3NDIzMTgzODA1Igy%2F9adMNwZ2PCbfmK4q3ANjRm26V%2FHElz5eVvPvVhDX8Sv7U0E81BxusN1fviXXjqKkC4kR5yQLyJ7sJS3MuemtAk2XQKf0Ywpnd%2FE3M7BQh9f9XT56izcY59CPyhC9%2BEcI8IcH9Y5OuCLooCj1yk60m7KN9IObZ29hDwRlcj6kyfSkr54xZsdVFqxRIA1JzTlA02SxJ0zhvmm6t%2F1EHBKAmrOfwSwsSWFtOuprtk3AZHD6E9pp9%2BbkScp78BZN%2FS5m%2BLCpGSsSLdkJPeGPqOpUZbPKfrV%2BhK2Xpaa5NpkH0BUaOe5Cd5kzhNfYv6bfzjLXgkfPYM%2B%2F6yYOI%2FuZvC6Qtr9R5UZrOKjp6%2FpctW3Xs0cMo2FDnKmlA1rK4zt5NxlgUO4KJTodavWBF8CaYs2%2B7RIx8zDJVhJ1xFcH9p341UbgknwuqHHv1pqWmk2UI5cC74lPpq7y09BtOaQb932QDZYA2ht2LEnCBdjSyk6rSMoK%2BCZ%2FAs98Xmyjvkn7fwj2tO6JAF9SSP5SCVPCtyw8vjHiwFXBbVUpIf2%2B9pMPaxYXU10XHzRi1BGyo1aMESyhmFaEUcNA3dTr0PLPSnaWj%2F6X1pPKlCkHWGSoRo0d%2B7Sz%2FH1R3xKiW3VaAsPVGtc%2FL%2F1EwsBvNT6dfzCXl%2FjJBjqkAaR8QBTmomYA3t12nGLPYRBHKrsG7QdcXzoN0um3RpjL35HDi1ls2cLpQCd58agIfbnvjrUAIV%2BxDp4G7p2SmicKI5fRHTcHCXseRybejMukbazwLdaeVN2XvzYTW7x6v0jpfjyF5dWLA%2Bfgtdsot%2Fut0g5402a2y4lK8LLm5YcyP8hMPzG3tpvVG8za05HKRewuyW3CUel05RabPg174zVvFjFC&X-Amz-Signature=d465e1198833f45ae5c67d082cdf15856c75bd4a4a2c6497d391196e7baf540d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RAK7ILU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDvzJlOreyJX5oBmWopOQAssvGJIfbK1QFwsyzeDBp0vAIhAMRgq%2F7zGOkJJiT5ktHE8CHdgvtnhJvlxZg5RR5Y3m%2FAKv8DCCoQABoMNjM3NDIzMTgzODA1Igy%2F9adMNwZ2PCbfmK4q3ANjRm26V%2FHElz5eVvPvVhDX8Sv7U0E81BxusN1fviXXjqKkC4kR5yQLyJ7sJS3MuemtAk2XQKf0Ywpnd%2FE3M7BQh9f9XT56izcY59CPyhC9%2BEcI8IcH9Y5OuCLooCj1yk60m7KN9IObZ29hDwRlcj6kyfSkr54xZsdVFqxRIA1JzTlA02SxJ0zhvmm6t%2F1EHBKAmrOfwSwsSWFtOuprtk3AZHD6E9pp9%2BbkScp78BZN%2FS5m%2BLCpGSsSLdkJPeGPqOpUZbPKfrV%2BhK2Xpaa5NpkH0BUaOe5Cd5kzhNfYv6bfzjLXgkfPYM%2B%2F6yYOI%2FuZvC6Qtr9R5UZrOKjp6%2FpctW3Xs0cMo2FDnKmlA1rK4zt5NxlgUO4KJTodavWBF8CaYs2%2B7RIx8zDJVhJ1xFcH9p341UbgknwuqHHv1pqWmk2UI5cC74lPpq7y09BtOaQb932QDZYA2ht2LEnCBdjSyk6rSMoK%2BCZ%2FAs98Xmyjvkn7fwj2tO6JAF9SSP5SCVPCtyw8vjHiwFXBbVUpIf2%2B9pMPaxYXU10XHzRi1BGyo1aMESyhmFaEUcNA3dTr0PLPSnaWj%2F6X1pPKlCkHWGSoRo0d%2B7Sz%2FH1R3xKiW3VaAsPVGtc%2FL%2F1EwsBvNT6dfzCXl%2FjJBjqkAaR8QBTmomYA3t12nGLPYRBHKrsG7QdcXzoN0um3RpjL35HDi1ls2cLpQCd58agIfbnvjrUAIV%2BxDp4G7p2SmicKI5fRHTcHCXseRybejMukbazwLdaeVN2XvzYTW7x6v0jpfjyF5dWLA%2Bfgtdsot%2Fut0g5402a2y4lK8LLm5YcyP8hMPzG3tpvVG8za05HKRewuyW3CUel05RabPg174zVvFjFC&X-Amz-Signature=e2fa84bf9c2b0d11ba4d1eb18df4197d8fb81dca5b7902721aa9e4c5ed5f173e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RAK7ILU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDvzJlOreyJX5oBmWopOQAssvGJIfbK1QFwsyzeDBp0vAIhAMRgq%2F7zGOkJJiT5ktHE8CHdgvtnhJvlxZg5RR5Y3m%2FAKv8DCCoQABoMNjM3NDIzMTgzODA1Igy%2F9adMNwZ2PCbfmK4q3ANjRm26V%2FHElz5eVvPvVhDX8Sv7U0E81BxusN1fviXXjqKkC4kR5yQLyJ7sJS3MuemtAk2XQKf0Ywpnd%2FE3M7BQh9f9XT56izcY59CPyhC9%2BEcI8IcH9Y5OuCLooCj1yk60m7KN9IObZ29hDwRlcj6kyfSkr54xZsdVFqxRIA1JzTlA02SxJ0zhvmm6t%2F1EHBKAmrOfwSwsSWFtOuprtk3AZHD6E9pp9%2BbkScp78BZN%2FS5m%2BLCpGSsSLdkJPeGPqOpUZbPKfrV%2BhK2Xpaa5NpkH0BUaOe5Cd5kzhNfYv6bfzjLXgkfPYM%2B%2F6yYOI%2FuZvC6Qtr9R5UZrOKjp6%2FpctW3Xs0cMo2FDnKmlA1rK4zt5NxlgUO4KJTodavWBF8CaYs2%2B7RIx8zDJVhJ1xFcH9p341UbgknwuqHHv1pqWmk2UI5cC74lPpq7y09BtOaQb932QDZYA2ht2LEnCBdjSyk6rSMoK%2BCZ%2FAs98Xmyjvkn7fwj2tO6JAF9SSP5SCVPCtyw8vjHiwFXBbVUpIf2%2B9pMPaxYXU10XHzRi1BGyo1aMESyhmFaEUcNA3dTr0PLPSnaWj%2F6X1pPKlCkHWGSoRo0d%2B7Sz%2FH1R3xKiW3VaAsPVGtc%2FL%2F1EwsBvNT6dfzCXl%2FjJBjqkAaR8QBTmomYA3t12nGLPYRBHKrsG7QdcXzoN0um3RpjL35HDi1ls2cLpQCd58agIfbnvjrUAIV%2BxDp4G7p2SmicKI5fRHTcHCXseRybejMukbazwLdaeVN2XvzYTW7x6v0jpfjyF5dWLA%2Bfgtdsot%2Fut0g5402a2y4lK8LLm5YcyP8hMPzG3tpvVG8za05HKRewuyW3CUel05RabPg174zVvFjFC&X-Amz-Signature=8cac4f1eac4bb9072f4b1bb98371ce0e7d8e34f67505db0667ff3f8b35f42429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
