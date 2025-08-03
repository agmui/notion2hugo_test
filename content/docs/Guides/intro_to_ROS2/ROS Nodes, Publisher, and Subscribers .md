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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD5QH4W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAquOXrBlB4K1m9boJ7mSxu6TO%2BFjx8ZpFaNtB35qReRAiAdcz6fGjIHvCi1jB5G3a0s%2FfYSvBnO%2FNSZoq9%2Fdnbhmir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM9oTvoZDHClIFZ48jKtwD5moBNRhooRWhi2cpXDeU5s4y6yQrwi5gxy%2Bzckw%2Bt4AzLvZWNDr4VTJb%2BQbwsIp6UMGGcTBP8VzOexVAWHp4FlECYMhi6f4wRIeG01YstwSTuHIoy%2FMbVfI7ipM8hRSc4wIVAjdOzlNf6pYqb65tOcSYqmodcp7%2BfeI%2B0hIQ76AgH8c%2BUMWZhzmrBTBdsyTVvzOOsGkpEfbhf40Rw2H9cv5K3KaqC50T147N3cWePpbrpi%2FQ9EH4AaiWjMi%2B36HFpKKwQN1PxGtqTiG2uBJYSkmOAo1IkAj%2FCRmWrhVW3A1EooFLhfZCzreqpeKPTIVyRXZ7dt9WZkOO9nt7kZalA7Ez0rzghkgghGSnG9Es5j7g6efNWlbg2Hry%2BzF%2F6l6H7PnnLAuLRy8j99p2LUi4bGkH7BwLAqRUiVyw5fbUcF6Pe6FsvZw8O%2BpWogAOp4jhd%2F9EwXFsqmHMu%2ByuaOx5GiwfmcAxu6%2BQChsvpzTz3IEq62W1k6vJZBs%2BnthMCYf6rbSEAPTHBvizKRbD5zezaIA1x3i3U3xYT%2F97HxMGFyDRk7%2F6iXUz0lWhSat92XVZOlBs5MDyIDYU9jd0uHsGfRjZ0oWw9UCJOw9pfqrUaHyrffyCpTrK8lBrKjow4oC6xAY6pgECVO1Cp1FU5MdO8VbxVE1906wK0vyk8wO8IEFTflvnp7EoPuxvDYyAiJ6BrCmYEsrzMkklO6vAP92tvdCUelEtGfWq%2Fh%2FnKzkS6HydMUAPfbUcQwDMQTYx9EB5hujjCCNYp%2BZ%2B8PJHTFmMd1MnIUbBJvGjWTk6PwxbpAIGJSl8lCyvwupUmKW5i%2Fj7hRBmiOCqd3fojxL1%2FCSiMHK5dckUrMG3Phl4&X-Amz-Signature=1af27d02f447234b042c5e109b3e04bb4f4c8a6d41cf3df02f4f33f5630d7864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD5QH4W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAquOXrBlB4K1m9boJ7mSxu6TO%2BFjx8ZpFaNtB35qReRAiAdcz6fGjIHvCi1jB5G3a0s%2FfYSvBnO%2FNSZoq9%2Fdnbhmir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM9oTvoZDHClIFZ48jKtwD5moBNRhooRWhi2cpXDeU5s4y6yQrwi5gxy%2Bzckw%2Bt4AzLvZWNDr4VTJb%2BQbwsIp6UMGGcTBP8VzOexVAWHp4FlECYMhi6f4wRIeG01YstwSTuHIoy%2FMbVfI7ipM8hRSc4wIVAjdOzlNf6pYqb65tOcSYqmodcp7%2BfeI%2B0hIQ76AgH8c%2BUMWZhzmrBTBdsyTVvzOOsGkpEfbhf40Rw2H9cv5K3KaqC50T147N3cWePpbrpi%2FQ9EH4AaiWjMi%2B36HFpKKwQN1PxGtqTiG2uBJYSkmOAo1IkAj%2FCRmWrhVW3A1EooFLhfZCzreqpeKPTIVyRXZ7dt9WZkOO9nt7kZalA7Ez0rzghkgghGSnG9Es5j7g6efNWlbg2Hry%2BzF%2F6l6H7PnnLAuLRy8j99p2LUi4bGkH7BwLAqRUiVyw5fbUcF6Pe6FsvZw8O%2BpWogAOp4jhd%2F9EwXFsqmHMu%2ByuaOx5GiwfmcAxu6%2BQChsvpzTz3IEq62W1k6vJZBs%2BnthMCYf6rbSEAPTHBvizKRbD5zezaIA1x3i3U3xYT%2F97HxMGFyDRk7%2F6iXUz0lWhSat92XVZOlBs5MDyIDYU9jd0uHsGfRjZ0oWw9UCJOw9pfqrUaHyrffyCpTrK8lBrKjow4oC6xAY6pgECVO1Cp1FU5MdO8VbxVE1906wK0vyk8wO8IEFTflvnp7EoPuxvDYyAiJ6BrCmYEsrzMkklO6vAP92tvdCUelEtGfWq%2Fh%2FnKzkS6HydMUAPfbUcQwDMQTYx9EB5hujjCCNYp%2BZ%2B8PJHTFmMd1MnIUbBJvGjWTk6PwxbpAIGJSl8lCyvwupUmKW5i%2Fj7hRBmiOCqd3fojxL1%2FCSiMHK5dckUrMG3Phl4&X-Amz-Signature=350e36fc38c539920e155d9f6e79c89163f35134bb5c0f0902c7ae6b5db770a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD5QH4W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAquOXrBlB4K1m9boJ7mSxu6TO%2BFjx8ZpFaNtB35qReRAiAdcz6fGjIHvCi1jB5G3a0s%2FfYSvBnO%2FNSZoq9%2Fdnbhmir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM9oTvoZDHClIFZ48jKtwD5moBNRhooRWhi2cpXDeU5s4y6yQrwi5gxy%2Bzckw%2Bt4AzLvZWNDr4VTJb%2BQbwsIp6UMGGcTBP8VzOexVAWHp4FlECYMhi6f4wRIeG01YstwSTuHIoy%2FMbVfI7ipM8hRSc4wIVAjdOzlNf6pYqb65tOcSYqmodcp7%2BfeI%2B0hIQ76AgH8c%2BUMWZhzmrBTBdsyTVvzOOsGkpEfbhf40Rw2H9cv5K3KaqC50T147N3cWePpbrpi%2FQ9EH4AaiWjMi%2B36HFpKKwQN1PxGtqTiG2uBJYSkmOAo1IkAj%2FCRmWrhVW3A1EooFLhfZCzreqpeKPTIVyRXZ7dt9WZkOO9nt7kZalA7Ez0rzghkgghGSnG9Es5j7g6efNWlbg2Hry%2BzF%2F6l6H7PnnLAuLRy8j99p2LUi4bGkH7BwLAqRUiVyw5fbUcF6Pe6FsvZw8O%2BpWogAOp4jhd%2F9EwXFsqmHMu%2ByuaOx5GiwfmcAxu6%2BQChsvpzTz3IEq62W1k6vJZBs%2BnthMCYf6rbSEAPTHBvizKRbD5zezaIA1x3i3U3xYT%2F97HxMGFyDRk7%2F6iXUz0lWhSat92XVZOlBs5MDyIDYU9jd0uHsGfRjZ0oWw9UCJOw9pfqrUaHyrffyCpTrK8lBrKjow4oC6xAY6pgECVO1Cp1FU5MdO8VbxVE1906wK0vyk8wO8IEFTflvnp7EoPuxvDYyAiJ6BrCmYEsrzMkklO6vAP92tvdCUelEtGfWq%2Fh%2FnKzkS6HydMUAPfbUcQwDMQTYx9EB5hujjCCNYp%2BZ%2B8PJHTFmMd1MnIUbBJvGjWTk6PwxbpAIGJSl8lCyvwupUmKW5i%2Fj7hRBmiOCqd3fojxL1%2FCSiMHK5dckUrMG3Phl4&X-Amz-Signature=c10aa2a3bcbeb5d0016c6bd743b5a9607fa707d0f5febc769f0705e8aeaa991d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD5QH4W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAquOXrBlB4K1m9boJ7mSxu6TO%2BFjx8ZpFaNtB35qReRAiAdcz6fGjIHvCi1jB5G3a0s%2FfYSvBnO%2FNSZoq9%2Fdnbhmir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM9oTvoZDHClIFZ48jKtwD5moBNRhooRWhi2cpXDeU5s4y6yQrwi5gxy%2Bzckw%2Bt4AzLvZWNDr4VTJb%2BQbwsIp6UMGGcTBP8VzOexVAWHp4FlECYMhi6f4wRIeG01YstwSTuHIoy%2FMbVfI7ipM8hRSc4wIVAjdOzlNf6pYqb65tOcSYqmodcp7%2BfeI%2B0hIQ76AgH8c%2BUMWZhzmrBTBdsyTVvzOOsGkpEfbhf40Rw2H9cv5K3KaqC50T147N3cWePpbrpi%2FQ9EH4AaiWjMi%2B36HFpKKwQN1PxGtqTiG2uBJYSkmOAo1IkAj%2FCRmWrhVW3A1EooFLhfZCzreqpeKPTIVyRXZ7dt9WZkOO9nt7kZalA7Ez0rzghkgghGSnG9Es5j7g6efNWlbg2Hry%2BzF%2F6l6H7PnnLAuLRy8j99p2LUi4bGkH7BwLAqRUiVyw5fbUcF6Pe6FsvZw8O%2BpWogAOp4jhd%2F9EwXFsqmHMu%2ByuaOx5GiwfmcAxu6%2BQChsvpzTz3IEq62W1k6vJZBs%2BnthMCYf6rbSEAPTHBvizKRbD5zezaIA1x3i3U3xYT%2F97HxMGFyDRk7%2F6iXUz0lWhSat92XVZOlBs5MDyIDYU9jd0uHsGfRjZ0oWw9UCJOw9pfqrUaHyrffyCpTrK8lBrKjow4oC6xAY6pgECVO1Cp1FU5MdO8VbxVE1906wK0vyk8wO8IEFTflvnp7EoPuxvDYyAiJ6BrCmYEsrzMkklO6vAP92tvdCUelEtGfWq%2Fh%2FnKzkS6HydMUAPfbUcQwDMQTYx9EB5hujjCCNYp%2BZ%2B8PJHTFmMd1MnIUbBJvGjWTk6PwxbpAIGJSl8lCyvwupUmKW5i%2Fj7hRBmiOCqd3fojxL1%2FCSiMHK5dckUrMG3Phl4&X-Amz-Signature=901b7209e2a79aaaafab2c0ed0eb92d26333d264c67324dede6b83fbdfd3f379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD5QH4W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAquOXrBlB4K1m9boJ7mSxu6TO%2BFjx8ZpFaNtB35qReRAiAdcz6fGjIHvCi1jB5G3a0s%2FfYSvBnO%2FNSZoq9%2Fdnbhmir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM9oTvoZDHClIFZ48jKtwD5moBNRhooRWhi2cpXDeU5s4y6yQrwi5gxy%2Bzckw%2Bt4AzLvZWNDr4VTJb%2BQbwsIp6UMGGcTBP8VzOexVAWHp4FlECYMhi6f4wRIeG01YstwSTuHIoy%2FMbVfI7ipM8hRSc4wIVAjdOzlNf6pYqb65tOcSYqmodcp7%2BfeI%2B0hIQ76AgH8c%2BUMWZhzmrBTBdsyTVvzOOsGkpEfbhf40Rw2H9cv5K3KaqC50T147N3cWePpbrpi%2FQ9EH4AaiWjMi%2B36HFpKKwQN1PxGtqTiG2uBJYSkmOAo1IkAj%2FCRmWrhVW3A1EooFLhfZCzreqpeKPTIVyRXZ7dt9WZkOO9nt7kZalA7Ez0rzghkgghGSnG9Es5j7g6efNWlbg2Hry%2BzF%2F6l6H7PnnLAuLRy8j99p2LUi4bGkH7BwLAqRUiVyw5fbUcF6Pe6FsvZw8O%2BpWogAOp4jhd%2F9EwXFsqmHMu%2ByuaOx5GiwfmcAxu6%2BQChsvpzTz3IEq62W1k6vJZBs%2BnthMCYf6rbSEAPTHBvizKRbD5zezaIA1x3i3U3xYT%2F97HxMGFyDRk7%2F6iXUz0lWhSat92XVZOlBs5MDyIDYU9jd0uHsGfRjZ0oWw9UCJOw9pfqrUaHyrffyCpTrK8lBrKjow4oC6xAY6pgECVO1Cp1FU5MdO8VbxVE1906wK0vyk8wO8IEFTflvnp7EoPuxvDYyAiJ6BrCmYEsrzMkklO6vAP92tvdCUelEtGfWq%2Fh%2FnKzkS6HydMUAPfbUcQwDMQTYx9EB5hujjCCNYp%2BZ%2B8PJHTFmMd1MnIUbBJvGjWTk6PwxbpAIGJSl8lCyvwupUmKW5i%2Fj7hRBmiOCqd3fojxL1%2FCSiMHK5dckUrMG3Phl4&X-Amz-Signature=c7dca6fb9fcd4c68ef4768fd200e36e98f682815af35b179d300678efefcd469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD5QH4W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAquOXrBlB4K1m9boJ7mSxu6TO%2BFjx8ZpFaNtB35qReRAiAdcz6fGjIHvCi1jB5G3a0s%2FfYSvBnO%2FNSZoq9%2Fdnbhmir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM9oTvoZDHClIFZ48jKtwD5moBNRhooRWhi2cpXDeU5s4y6yQrwi5gxy%2Bzckw%2Bt4AzLvZWNDr4VTJb%2BQbwsIp6UMGGcTBP8VzOexVAWHp4FlECYMhi6f4wRIeG01YstwSTuHIoy%2FMbVfI7ipM8hRSc4wIVAjdOzlNf6pYqb65tOcSYqmodcp7%2BfeI%2B0hIQ76AgH8c%2BUMWZhzmrBTBdsyTVvzOOsGkpEfbhf40Rw2H9cv5K3KaqC50T147N3cWePpbrpi%2FQ9EH4AaiWjMi%2B36HFpKKwQN1PxGtqTiG2uBJYSkmOAo1IkAj%2FCRmWrhVW3A1EooFLhfZCzreqpeKPTIVyRXZ7dt9WZkOO9nt7kZalA7Ez0rzghkgghGSnG9Es5j7g6efNWlbg2Hry%2BzF%2F6l6H7PnnLAuLRy8j99p2LUi4bGkH7BwLAqRUiVyw5fbUcF6Pe6FsvZw8O%2BpWogAOp4jhd%2F9EwXFsqmHMu%2ByuaOx5GiwfmcAxu6%2BQChsvpzTz3IEq62W1k6vJZBs%2BnthMCYf6rbSEAPTHBvizKRbD5zezaIA1x3i3U3xYT%2F97HxMGFyDRk7%2F6iXUz0lWhSat92XVZOlBs5MDyIDYU9jd0uHsGfRjZ0oWw9UCJOw9pfqrUaHyrffyCpTrK8lBrKjow4oC6xAY6pgECVO1Cp1FU5MdO8VbxVE1906wK0vyk8wO8IEFTflvnp7EoPuxvDYyAiJ6BrCmYEsrzMkklO6vAP92tvdCUelEtGfWq%2Fh%2FnKzkS6HydMUAPfbUcQwDMQTYx9EB5hujjCCNYp%2BZ%2B8PJHTFmMd1MnIUbBJvGjWTk6PwxbpAIGJSl8lCyvwupUmKW5i%2Fj7hRBmiOCqd3fojxL1%2FCSiMHK5dckUrMG3Phl4&X-Amz-Signature=6030e6180cef904ea3a3342389543ba10bab19ea23208ad61196f783879ec6ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD5QH4W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAquOXrBlB4K1m9boJ7mSxu6TO%2BFjx8ZpFaNtB35qReRAiAdcz6fGjIHvCi1jB5G3a0s%2FfYSvBnO%2FNSZoq9%2Fdnbhmir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM9oTvoZDHClIFZ48jKtwD5moBNRhooRWhi2cpXDeU5s4y6yQrwi5gxy%2Bzckw%2Bt4AzLvZWNDr4VTJb%2BQbwsIp6UMGGcTBP8VzOexVAWHp4FlECYMhi6f4wRIeG01YstwSTuHIoy%2FMbVfI7ipM8hRSc4wIVAjdOzlNf6pYqb65tOcSYqmodcp7%2BfeI%2B0hIQ76AgH8c%2BUMWZhzmrBTBdsyTVvzOOsGkpEfbhf40Rw2H9cv5K3KaqC50T147N3cWePpbrpi%2FQ9EH4AaiWjMi%2B36HFpKKwQN1PxGtqTiG2uBJYSkmOAo1IkAj%2FCRmWrhVW3A1EooFLhfZCzreqpeKPTIVyRXZ7dt9WZkOO9nt7kZalA7Ez0rzghkgghGSnG9Es5j7g6efNWlbg2Hry%2BzF%2F6l6H7PnnLAuLRy8j99p2LUi4bGkH7BwLAqRUiVyw5fbUcF6Pe6FsvZw8O%2BpWogAOp4jhd%2F9EwXFsqmHMu%2ByuaOx5GiwfmcAxu6%2BQChsvpzTz3IEq62W1k6vJZBs%2BnthMCYf6rbSEAPTHBvizKRbD5zezaIA1x3i3U3xYT%2F97HxMGFyDRk7%2F6iXUz0lWhSat92XVZOlBs5MDyIDYU9jd0uHsGfRjZ0oWw9UCJOw9pfqrUaHyrffyCpTrK8lBrKjow4oC6xAY6pgECVO1Cp1FU5MdO8VbxVE1906wK0vyk8wO8IEFTflvnp7EoPuxvDYyAiJ6BrCmYEsrzMkklO6vAP92tvdCUelEtGfWq%2Fh%2FnKzkS6HydMUAPfbUcQwDMQTYx9EB5hujjCCNYp%2BZ%2B8PJHTFmMd1MnIUbBJvGjWTk6PwxbpAIGJSl8lCyvwupUmKW5i%2Fj7hRBmiOCqd3fojxL1%2FCSiMHK5dckUrMG3Phl4&X-Amz-Signature=aed1be3d83db5b2c45e9ddc18e38d93cd83141490d2b448d6bc0d730f2a597d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD5QH4W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAquOXrBlB4K1m9boJ7mSxu6TO%2BFjx8ZpFaNtB35qReRAiAdcz6fGjIHvCi1jB5G3a0s%2FfYSvBnO%2FNSZoq9%2Fdnbhmir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM9oTvoZDHClIFZ48jKtwD5moBNRhooRWhi2cpXDeU5s4y6yQrwi5gxy%2Bzckw%2Bt4AzLvZWNDr4VTJb%2BQbwsIp6UMGGcTBP8VzOexVAWHp4FlECYMhi6f4wRIeG01YstwSTuHIoy%2FMbVfI7ipM8hRSc4wIVAjdOzlNf6pYqb65tOcSYqmodcp7%2BfeI%2B0hIQ76AgH8c%2BUMWZhzmrBTBdsyTVvzOOsGkpEfbhf40Rw2H9cv5K3KaqC50T147N3cWePpbrpi%2FQ9EH4AaiWjMi%2B36HFpKKwQN1PxGtqTiG2uBJYSkmOAo1IkAj%2FCRmWrhVW3A1EooFLhfZCzreqpeKPTIVyRXZ7dt9WZkOO9nt7kZalA7Ez0rzghkgghGSnG9Es5j7g6efNWlbg2Hry%2BzF%2F6l6H7PnnLAuLRy8j99p2LUi4bGkH7BwLAqRUiVyw5fbUcF6Pe6FsvZw8O%2BpWogAOp4jhd%2F9EwXFsqmHMu%2ByuaOx5GiwfmcAxu6%2BQChsvpzTz3IEq62W1k6vJZBs%2BnthMCYf6rbSEAPTHBvizKRbD5zezaIA1x3i3U3xYT%2F97HxMGFyDRk7%2F6iXUz0lWhSat92XVZOlBs5MDyIDYU9jd0uHsGfRjZ0oWw9UCJOw9pfqrUaHyrffyCpTrK8lBrKjow4oC6xAY6pgECVO1Cp1FU5MdO8VbxVE1906wK0vyk8wO8IEFTflvnp7EoPuxvDYyAiJ6BrCmYEsrzMkklO6vAP92tvdCUelEtGfWq%2Fh%2FnKzkS6HydMUAPfbUcQwDMQTYx9EB5hujjCCNYp%2BZ%2B8PJHTFmMd1MnIUbBJvGjWTk6PwxbpAIGJSl8lCyvwupUmKW5i%2Fj7hRBmiOCqd3fojxL1%2FCSiMHK5dckUrMG3Phl4&X-Amz-Signature=0ad60d5a150c131887b60824ae23cce49b6beab61620cd541eee48de497289df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
