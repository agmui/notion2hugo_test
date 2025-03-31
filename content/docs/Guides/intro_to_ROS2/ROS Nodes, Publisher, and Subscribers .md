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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YTM3S2V%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIDKCK%2FM%2BhwbZMm9wy%2BpV6E7VC0ZO36u7JkR80CrDDkdyAiBxkc6KUprITMQuI%2FyhaAkJ5O1LhWCoD9goLjSPVSx5OSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHW%2FTYLGwdlTOyCdKtwDMzrm1jiF%2Bo%2B%2FG4mXMqaGof2DRNLbBMCCNMKzh6viyi0ATfReqTaVj5ONm3WVeWOF2xo1twd7Uwe7u0VQfHgTVnsD7Ct%2BnFQZxQPjHZq89xCt3MZvuhNhFlqL94JfN0sWckGYEGnvD174zLBfAN087AQLFPTx4EZL0Y%2BDpuEjlNz6btG7raUFH6JZhtXnExYIgDKvsqSUqq8FgwZqvQZLS0w%2Ft3QEkvh37thvwi0oQUDI7BrWKU75ZCIl%2BmppoR%2B3luaxdI%2BayLdFas0tiBamoILYGqM%2BZhNwqOLLNkIlnsvQbBpjg3bGyixkBumHK4D22S%2BFafglKAa%2FgoEoIoa8JLEaWEbgmRYpHdwij%2B%2FvMWFkPZL6SL2Qe8XESM66cofF9J%2Ft2KxS6FmOiZXt0O2JxP8FZ64DkrNJpCVWApsCcuRAaYbd3U0QJG77NAEAaoUuqzYfOhhIKcllnqqlDiHB11Q1Mb%2BsClSFi9MvjhpRMZJPft4axeR843bFhDUV1pf8OhTUKD1V581SAvEO6b6J2nCxhubNt%2BBugvqR69fh%2BfEhnydu1ES9TU5OyWiMoPXmBFqMJgJ9xPuvTxGmAhtUDaPehVacJ6lfGj1iJgxaDYTyRuP6TlCQRm6JbxkwurirvwY6pgGKf52%2BV6ATwwy7iNaitIVQ60oGHyXVYi74w%2BBNXn6%2FVn%2BkqiytcJzz0joMU9rinlMFzaz8rCFYSRe%2BsAT1zAOEvZvhy7bcMyf9vjYW%2Flsu7gxQ72%2BlA%2FL%2BcrJr%2BNIOuSNkG9YKuHSUR2Qs234saNwMUG75Qs29it7bY0casx%2F%2BpUML7P73SqRphea5qxBkH776VvFIJ6mLN%2Bi84ppuIsj7F%2Fz4KmD7&X-Amz-Signature=b3c9b2452960f01348d8d9e4888ad9fab1f9095ae7a9e906bdfc94fdd03f3fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YTM3S2V%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIDKCK%2FM%2BhwbZMm9wy%2BpV6E7VC0ZO36u7JkR80CrDDkdyAiBxkc6KUprITMQuI%2FyhaAkJ5O1LhWCoD9goLjSPVSx5OSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHW%2FTYLGwdlTOyCdKtwDMzrm1jiF%2Bo%2B%2FG4mXMqaGof2DRNLbBMCCNMKzh6viyi0ATfReqTaVj5ONm3WVeWOF2xo1twd7Uwe7u0VQfHgTVnsD7Ct%2BnFQZxQPjHZq89xCt3MZvuhNhFlqL94JfN0sWckGYEGnvD174zLBfAN087AQLFPTx4EZL0Y%2BDpuEjlNz6btG7raUFH6JZhtXnExYIgDKvsqSUqq8FgwZqvQZLS0w%2Ft3QEkvh37thvwi0oQUDI7BrWKU75ZCIl%2BmppoR%2B3luaxdI%2BayLdFas0tiBamoILYGqM%2BZhNwqOLLNkIlnsvQbBpjg3bGyixkBumHK4D22S%2BFafglKAa%2FgoEoIoa8JLEaWEbgmRYpHdwij%2B%2FvMWFkPZL6SL2Qe8XESM66cofF9J%2Ft2KxS6FmOiZXt0O2JxP8FZ64DkrNJpCVWApsCcuRAaYbd3U0QJG77NAEAaoUuqzYfOhhIKcllnqqlDiHB11Q1Mb%2BsClSFi9MvjhpRMZJPft4axeR843bFhDUV1pf8OhTUKD1V581SAvEO6b6J2nCxhubNt%2BBugvqR69fh%2BfEhnydu1ES9TU5OyWiMoPXmBFqMJgJ9xPuvTxGmAhtUDaPehVacJ6lfGj1iJgxaDYTyRuP6TlCQRm6JbxkwurirvwY6pgGKf52%2BV6ATwwy7iNaitIVQ60oGHyXVYi74w%2BBNXn6%2FVn%2BkqiytcJzz0joMU9rinlMFzaz8rCFYSRe%2BsAT1zAOEvZvhy7bcMyf9vjYW%2Flsu7gxQ72%2BlA%2FL%2BcrJr%2BNIOuSNkG9YKuHSUR2Qs234saNwMUG75Qs29it7bY0casx%2F%2BpUML7P73SqRphea5qxBkH776VvFIJ6mLN%2Bi84ppuIsj7F%2Fz4KmD7&X-Amz-Signature=01fa31c72f66b51754337b0e9f64f18cdce7df6198af5723b09e2453cc919b68&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YTM3S2V%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIDKCK%2FM%2BhwbZMm9wy%2BpV6E7VC0ZO36u7JkR80CrDDkdyAiBxkc6KUprITMQuI%2FyhaAkJ5O1LhWCoD9goLjSPVSx5OSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHW%2FTYLGwdlTOyCdKtwDMzrm1jiF%2Bo%2B%2FG4mXMqaGof2DRNLbBMCCNMKzh6viyi0ATfReqTaVj5ONm3WVeWOF2xo1twd7Uwe7u0VQfHgTVnsD7Ct%2BnFQZxQPjHZq89xCt3MZvuhNhFlqL94JfN0sWckGYEGnvD174zLBfAN087AQLFPTx4EZL0Y%2BDpuEjlNz6btG7raUFH6JZhtXnExYIgDKvsqSUqq8FgwZqvQZLS0w%2Ft3QEkvh37thvwi0oQUDI7BrWKU75ZCIl%2BmppoR%2B3luaxdI%2BayLdFas0tiBamoILYGqM%2BZhNwqOLLNkIlnsvQbBpjg3bGyixkBumHK4D22S%2BFafglKAa%2FgoEoIoa8JLEaWEbgmRYpHdwij%2B%2FvMWFkPZL6SL2Qe8XESM66cofF9J%2Ft2KxS6FmOiZXt0O2JxP8FZ64DkrNJpCVWApsCcuRAaYbd3U0QJG77NAEAaoUuqzYfOhhIKcllnqqlDiHB11Q1Mb%2BsClSFi9MvjhpRMZJPft4axeR843bFhDUV1pf8OhTUKD1V581SAvEO6b6J2nCxhubNt%2BBugvqR69fh%2BfEhnydu1ES9TU5OyWiMoPXmBFqMJgJ9xPuvTxGmAhtUDaPehVacJ6lfGj1iJgxaDYTyRuP6TlCQRm6JbxkwurirvwY6pgGKf52%2BV6ATwwy7iNaitIVQ60oGHyXVYi74w%2BBNXn6%2FVn%2BkqiytcJzz0joMU9rinlMFzaz8rCFYSRe%2BsAT1zAOEvZvhy7bcMyf9vjYW%2Flsu7gxQ72%2BlA%2FL%2BcrJr%2BNIOuSNkG9YKuHSUR2Qs234saNwMUG75Qs29it7bY0casx%2F%2BpUML7P73SqRphea5qxBkH776VvFIJ6mLN%2Bi84ppuIsj7F%2Fz4KmD7&X-Amz-Signature=11f2ea30de03cdb2877ba105fcdb625b3a621c942aa906832b968ac01766aeeb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YTM3S2V%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIDKCK%2FM%2BhwbZMm9wy%2BpV6E7VC0ZO36u7JkR80CrDDkdyAiBxkc6KUprITMQuI%2FyhaAkJ5O1LhWCoD9goLjSPVSx5OSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHW%2FTYLGwdlTOyCdKtwDMzrm1jiF%2Bo%2B%2FG4mXMqaGof2DRNLbBMCCNMKzh6viyi0ATfReqTaVj5ONm3WVeWOF2xo1twd7Uwe7u0VQfHgTVnsD7Ct%2BnFQZxQPjHZq89xCt3MZvuhNhFlqL94JfN0sWckGYEGnvD174zLBfAN087AQLFPTx4EZL0Y%2BDpuEjlNz6btG7raUFH6JZhtXnExYIgDKvsqSUqq8FgwZqvQZLS0w%2Ft3QEkvh37thvwi0oQUDI7BrWKU75ZCIl%2BmppoR%2B3luaxdI%2BayLdFas0tiBamoILYGqM%2BZhNwqOLLNkIlnsvQbBpjg3bGyixkBumHK4D22S%2BFafglKAa%2FgoEoIoa8JLEaWEbgmRYpHdwij%2B%2FvMWFkPZL6SL2Qe8XESM66cofF9J%2Ft2KxS6FmOiZXt0O2JxP8FZ64DkrNJpCVWApsCcuRAaYbd3U0QJG77NAEAaoUuqzYfOhhIKcllnqqlDiHB11Q1Mb%2BsClSFi9MvjhpRMZJPft4axeR843bFhDUV1pf8OhTUKD1V581SAvEO6b6J2nCxhubNt%2BBugvqR69fh%2BfEhnydu1ES9TU5OyWiMoPXmBFqMJgJ9xPuvTxGmAhtUDaPehVacJ6lfGj1iJgxaDYTyRuP6TlCQRm6JbxkwurirvwY6pgGKf52%2BV6ATwwy7iNaitIVQ60oGHyXVYi74w%2BBNXn6%2FVn%2BkqiytcJzz0joMU9rinlMFzaz8rCFYSRe%2BsAT1zAOEvZvhy7bcMyf9vjYW%2Flsu7gxQ72%2BlA%2FL%2BcrJr%2BNIOuSNkG9YKuHSUR2Qs234saNwMUG75Qs29it7bY0casx%2F%2BpUML7P73SqRphea5qxBkH776VvFIJ6mLN%2Bi84ppuIsj7F%2Fz4KmD7&X-Amz-Signature=0a0eca69e777d0c99de1d1da5b400f42df749a8c608b361dfd0602a027cf9d7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YTM3S2V%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIDKCK%2FM%2BhwbZMm9wy%2BpV6E7VC0ZO36u7JkR80CrDDkdyAiBxkc6KUprITMQuI%2FyhaAkJ5O1LhWCoD9goLjSPVSx5OSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHW%2FTYLGwdlTOyCdKtwDMzrm1jiF%2Bo%2B%2FG4mXMqaGof2DRNLbBMCCNMKzh6viyi0ATfReqTaVj5ONm3WVeWOF2xo1twd7Uwe7u0VQfHgTVnsD7Ct%2BnFQZxQPjHZq89xCt3MZvuhNhFlqL94JfN0sWckGYEGnvD174zLBfAN087AQLFPTx4EZL0Y%2BDpuEjlNz6btG7raUFH6JZhtXnExYIgDKvsqSUqq8FgwZqvQZLS0w%2Ft3QEkvh37thvwi0oQUDI7BrWKU75ZCIl%2BmppoR%2B3luaxdI%2BayLdFas0tiBamoILYGqM%2BZhNwqOLLNkIlnsvQbBpjg3bGyixkBumHK4D22S%2BFafglKAa%2FgoEoIoa8JLEaWEbgmRYpHdwij%2B%2FvMWFkPZL6SL2Qe8XESM66cofF9J%2Ft2KxS6FmOiZXt0O2JxP8FZ64DkrNJpCVWApsCcuRAaYbd3U0QJG77NAEAaoUuqzYfOhhIKcllnqqlDiHB11Q1Mb%2BsClSFi9MvjhpRMZJPft4axeR843bFhDUV1pf8OhTUKD1V581SAvEO6b6J2nCxhubNt%2BBugvqR69fh%2BfEhnydu1ES9TU5OyWiMoPXmBFqMJgJ9xPuvTxGmAhtUDaPehVacJ6lfGj1iJgxaDYTyRuP6TlCQRm6JbxkwurirvwY6pgGKf52%2BV6ATwwy7iNaitIVQ60oGHyXVYi74w%2BBNXn6%2FVn%2BkqiytcJzz0joMU9rinlMFzaz8rCFYSRe%2BsAT1zAOEvZvhy7bcMyf9vjYW%2Flsu7gxQ72%2BlA%2FL%2BcrJr%2BNIOuSNkG9YKuHSUR2Qs234saNwMUG75Qs29it7bY0casx%2F%2BpUML7P73SqRphea5qxBkH776VvFIJ6mLN%2Bi84ppuIsj7F%2Fz4KmD7&X-Amz-Signature=9565c6fe484a881e402483476707105d15f38db924669dcfc6bc07bbaec0973f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YTM3S2V%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIDKCK%2FM%2BhwbZMm9wy%2BpV6E7VC0ZO36u7JkR80CrDDkdyAiBxkc6KUprITMQuI%2FyhaAkJ5O1LhWCoD9goLjSPVSx5OSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHW%2FTYLGwdlTOyCdKtwDMzrm1jiF%2Bo%2B%2FG4mXMqaGof2DRNLbBMCCNMKzh6viyi0ATfReqTaVj5ONm3WVeWOF2xo1twd7Uwe7u0VQfHgTVnsD7Ct%2BnFQZxQPjHZq89xCt3MZvuhNhFlqL94JfN0sWckGYEGnvD174zLBfAN087AQLFPTx4EZL0Y%2BDpuEjlNz6btG7raUFH6JZhtXnExYIgDKvsqSUqq8FgwZqvQZLS0w%2Ft3QEkvh37thvwi0oQUDI7BrWKU75ZCIl%2BmppoR%2B3luaxdI%2BayLdFas0tiBamoILYGqM%2BZhNwqOLLNkIlnsvQbBpjg3bGyixkBumHK4D22S%2BFafglKAa%2FgoEoIoa8JLEaWEbgmRYpHdwij%2B%2FvMWFkPZL6SL2Qe8XESM66cofF9J%2Ft2KxS6FmOiZXt0O2JxP8FZ64DkrNJpCVWApsCcuRAaYbd3U0QJG77NAEAaoUuqzYfOhhIKcllnqqlDiHB11Q1Mb%2BsClSFi9MvjhpRMZJPft4axeR843bFhDUV1pf8OhTUKD1V581SAvEO6b6J2nCxhubNt%2BBugvqR69fh%2BfEhnydu1ES9TU5OyWiMoPXmBFqMJgJ9xPuvTxGmAhtUDaPehVacJ6lfGj1iJgxaDYTyRuP6TlCQRm6JbxkwurirvwY6pgGKf52%2BV6ATwwy7iNaitIVQ60oGHyXVYi74w%2BBNXn6%2FVn%2BkqiytcJzz0joMU9rinlMFzaz8rCFYSRe%2BsAT1zAOEvZvhy7bcMyf9vjYW%2Flsu7gxQ72%2BlA%2FL%2BcrJr%2BNIOuSNkG9YKuHSUR2Qs234saNwMUG75Qs29it7bY0casx%2F%2BpUML7P73SqRphea5qxBkH776VvFIJ6mLN%2Bi84ppuIsj7F%2Fz4KmD7&X-Amz-Signature=bac7c69816944524ac688ce24b4785e7ae8b1b3cbac306416607cbe5494262eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YTM3S2V%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIDKCK%2FM%2BhwbZMm9wy%2BpV6E7VC0ZO36u7JkR80CrDDkdyAiBxkc6KUprITMQuI%2FyhaAkJ5O1LhWCoD9goLjSPVSx5OSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHW%2FTYLGwdlTOyCdKtwDMzrm1jiF%2Bo%2B%2FG4mXMqaGof2DRNLbBMCCNMKzh6viyi0ATfReqTaVj5ONm3WVeWOF2xo1twd7Uwe7u0VQfHgTVnsD7Ct%2BnFQZxQPjHZq89xCt3MZvuhNhFlqL94JfN0sWckGYEGnvD174zLBfAN087AQLFPTx4EZL0Y%2BDpuEjlNz6btG7raUFH6JZhtXnExYIgDKvsqSUqq8FgwZqvQZLS0w%2Ft3QEkvh37thvwi0oQUDI7BrWKU75ZCIl%2BmppoR%2B3luaxdI%2BayLdFas0tiBamoILYGqM%2BZhNwqOLLNkIlnsvQbBpjg3bGyixkBumHK4D22S%2BFafglKAa%2FgoEoIoa8JLEaWEbgmRYpHdwij%2B%2FvMWFkPZL6SL2Qe8XESM66cofF9J%2Ft2KxS6FmOiZXt0O2JxP8FZ64DkrNJpCVWApsCcuRAaYbd3U0QJG77NAEAaoUuqzYfOhhIKcllnqqlDiHB11Q1Mb%2BsClSFi9MvjhpRMZJPft4axeR843bFhDUV1pf8OhTUKD1V581SAvEO6b6J2nCxhubNt%2BBugvqR69fh%2BfEhnydu1ES9TU5OyWiMoPXmBFqMJgJ9xPuvTxGmAhtUDaPehVacJ6lfGj1iJgxaDYTyRuP6TlCQRm6JbxkwurirvwY6pgGKf52%2BV6ATwwy7iNaitIVQ60oGHyXVYi74w%2BBNXn6%2FVn%2BkqiytcJzz0joMU9rinlMFzaz8rCFYSRe%2BsAT1zAOEvZvhy7bcMyf9vjYW%2Flsu7gxQ72%2BlA%2FL%2BcrJr%2BNIOuSNkG9YKuHSUR2Qs234saNwMUG75Qs29it7bY0casx%2F%2BpUML7P73SqRphea5qxBkH776VvFIJ6mLN%2Bi84ppuIsj7F%2Fz4KmD7&X-Amz-Signature=666416cc2c90b83edf0ee58cea221f59d9481ad4e2c7a62ed4bb61569cc1ede0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YTM3S2V%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIDKCK%2FM%2BhwbZMm9wy%2BpV6E7VC0ZO36u7JkR80CrDDkdyAiBxkc6KUprITMQuI%2FyhaAkJ5O1LhWCoD9goLjSPVSx5OSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHW%2FTYLGwdlTOyCdKtwDMzrm1jiF%2Bo%2B%2FG4mXMqaGof2DRNLbBMCCNMKzh6viyi0ATfReqTaVj5ONm3WVeWOF2xo1twd7Uwe7u0VQfHgTVnsD7Ct%2BnFQZxQPjHZq89xCt3MZvuhNhFlqL94JfN0sWckGYEGnvD174zLBfAN087AQLFPTx4EZL0Y%2BDpuEjlNz6btG7raUFH6JZhtXnExYIgDKvsqSUqq8FgwZqvQZLS0w%2Ft3QEkvh37thvwi0oQUDI7BrWKU75ZCIl%2BmppoR%2B3luaxdI%2BayLdFas0tiBamoILYGqM%2BZhNwqOLLNkIlnsvQbBpjg3bGyixkBumHK4D22S%2BFafglKAa%2FgoEoIoa8JLEaWEbgmRYpHdwij%2B%2FvMWFkPZL6SL2Qe8XESM66cofF9J%2Ft2KxS6FmOiZXt0O2JxP8FZ64DkrNJpCVWApsCcuRAaYbd3U0QJG77NAEAaoUuqzYfOhhIKcllnqqlDiHB11Q1Mb%2BsClSFi9MvjhpRMZJPft4axeR843bFhDUV1pf8OhTUKD1V581SAvEO6b6J2nCxhubNt%2BBugvqR69fh%2BfEhnydu1ES9TU5OyWiMoPXmBFqMJgJ9xPuvTxGmAhtUDaPehVacJ6lfGj1iJgxaDYTyRuP6TlCQRm6JbxkwurirvwY6pgGKf52%2BV6ATwwy7iNaitIVQ60oGHyXVYi74w%2BBNXn6%2FVn%2BkqiytcJzz0joMU9rinlMFzaz8rCFYSRe%2BsAT1zAOEvZvhy7bcMyf9vjYW%2Flsu7gxQ72%2BlA%2FL%2BcrJr%2BNIOuSNkG9YKuHSUR2Qs234saNwMUG75Qs29it7bY0casx%2F%2BpUML7P73SqRphea5qxBkH776VvFIJ6mLN%2Bi84ppuIsj7F%2Fz4KmD7&X-Amz-Signature=365fca595b1f1c881b91d27220c519d578ced50fe249dbba93c4fd89bf249539&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
