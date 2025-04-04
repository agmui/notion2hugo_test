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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC4NGLWS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj4yrOBSHgQBwG4SplZo9xridVQyPXjUjhCx%2F7tvj7%2BAIgYXAYodKrQSHDWjb75dGxys1FY%2FjDhUxB4qaRlYHG36cq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHGYJTTEZB8TmVryvyrcAwMoxWxgVN4u2Txm%2BnsOiwcLqwZKusJbOxMD0Wzj%2Ft49lIwWDBez4nt3QgRO4GRIn7JDOwXt1yzmkq%2BwttJjTb1EzGkFH41Fy3q920nK4uolZzIVwGG%2BhsjXE6DCy0yVLx0GgdgZMqrzjbLR0I8KpgRwIjs8L%2FlGHS4UUYsilt3Wu5DF5oqRwH890f11QLcwPV%2BxTX1%2FfX0nyTeH6N2dN6xtfjOLTZ64%2B7L8DycxuktW6hprrX5dIyqChkESRGgs8Vx%2F71P%2BdNVRHxBKyGVqIvaxFj%2BrlqL3rJZof%2Bw5vJr1MMXhFoZhBVtQoOCfNsZaMQL3qBO6RfutyQqZlMUJNjy7gUTqUI86F1bqjuiE4%2FLtobpU9hhuD2pqoV6MxxAZZZgmSd6Bjdvu1moSo43pXckcenPNWM%2F8pX50ctQlHiSi6nkgrhZqbwmIW6NPuG9XnXqJ7kd3sryNA0IPsy0xAdFlCBFvw6SpajS2T17AifdOi9AJs%2BV%2Bia3c5s2MPxxDmc19cAeGj%2BoBaXoPpGA9GwxIC3KAvXRByRqsE4nHlGK6WxNYVDlHwcrMpPisOInjWseceH8pHVHnzgV123p5xewVllX5IhCPG3DscVseQUYFYuCGg3dHNe67HAszMP3jvr8GOqUBvQXR2oFn18122BurJRH3HAvcWXWY8fRzVgxSlvX9I4Heoq7V1sD4V65AuRm0crVDmf%2BxaIeLcJVCjXwL17iF1KD274q4u%2Fe09tQkf97ZVD4jVAIhn5xodr8VE1QcTLtFUYnRCergkC2D0VgJ8RtF2GS%2FHpoyfX3LQkobOXMbM7kUEZt6bnsWlFyBuXWO%2BFw0NzDu%2Bt2UIXU1l%2BfyWhwYnhguK8Fw&X-Amz-Signature=4c8b4e6ede7df6bf7deec91d84fc5f6739d0529a030291b7842ea5cd184938a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC4NGLWS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj4yrOBSHgQBwG4SplZo9xridVQyPXjUjhCx%2F7tvj7%2BAIgYXAYodKrQSHDWjb75dGxys1FY%2FjDhUxB4qaRlYHG36cq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHGYJTTEZB8TmVryvyrcAwMoxWxgVN4u2Txm%2BnsOiwcLqwZKusJbOxMD0Wzj%2Ft49lIwWDBez4nt3QgRO4GRIn7JDOwXt1yzmkq%2BwttJjTb1EzGkFH41Fy3q920nK4uolZzIVwGG%2BhsjXE6DCy0yVLx0GgdgZMqrzjbLR0I8KpgRwIjs8L%2FlGHS4UUYsilt3Wu5DF5oqRwH890f11QLcwPV%2BxTX1%2FfX0nyTeH6N2dN6xtfjOLTZ64%2B7L8DycxuktW6hprrX5dIyqChkESRGgs8Vx%2F71P%2BdNVRHxBKyGVqIvaxFj%2BrlqL3rJZof%2Bw5vJr1MMXhFoZhBVtQoOCfNsZaMQL3qBO6RfutyQqZlMUJNjy7gUTqUI86F1bqjuiE4%2FLtobpU9hhuD2pqoV6MxxAZZZgmSd6Bjdvu1moSo43pXckcenPNWM%2F8pX50ctQlHiSi6nkgrhZqbwmIW6NPuG9XnXqJ7kd3sryNA0IPsy0xAdFlCBFvw6SpajS2T17AifdOi9AJs%2BV%2Bia3c5s2MPxxDmc19cAeGj%2BoBaXoPpGA9GwxIC3KAvXRByRqsE4nHlGK6WxNYVDlHwcrMpPisOInjWseceH8pHVHnzgV123p5xewVllX5IhCPG3DscVseQUYFYuCGg3dHNe67HAszMP3jvr8GOqUBvQXR2oFn18122BurJRH3HAvcWXWY8fRzVgxSlvX9I4Heoq7V1sD4V65AuRm0crVDmf%2BxaIeLcJVCjXwL17iF1KD274q4u%2Fe09tQkf97ZVD4jVAIhn5xodr8VE1QcTLtFUYnRCergkC2D0VgJ8RtF2GS%2FHpoyfX3LQkobOXMbM7kUEZt6bnsWlFyBuXWO%2BFw0NzDu%2Bt2UIXU1l%2BfyWhwYnhguK8Fw&X-Amz-Signature=b05624d00696cd9f0c5643142109d941d95b6ed500a2e44c0b7a0b8726583bbb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC4NGLWS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj4yrOBSHgQBwG4SplZo9xridVQyPXjUjhCx%2F7tvj7%2BAIgYXAYodKrQSHDWjb75dGxys1FY%2FjDhUxB4qaRlYHG36cq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHGYJTTEZB8TmVryvyrcAwMoxWxgVN4u2Txm%2BnsOiwcLqwZKusJbOxMD0Wzj%2Ft49lIwWDBez4nt3QgRO4GRIn7JDOwXt1yzmkq%2BwttJjTb1EzGkFH41Fy3q920nK4uolZzIVwGG%2BhsjXE6DCy0yVLx0GgdgZMqrzjbLR0I8KpgRwIjs8L%2FlGHS4UUYsilt3Wu5DF5oqRwH890f11QLcwPV%2BxTX1%2FfX0nyTeH6N2dN6xtfjOLTZ64%2B7L8DycxuktW6hprrX5dIyqChkESRGgs8Vx%2F71P%2BdNVRHxBKyGVqIvaxFj%2BrlqL3rJZof%2Bw5vJr1MMXhFoZhBVtQoOCfNsZaMQL3qBO6RfutyQqZlMUJNjy7gUTqUI86F1bqjuiE4%2FLtobpU9hhuD2pqoV6MxxAZZZgmSd6Bjdvu1moSo43pXckcenPNWM%2F8pX50ctQlHiSi6nkgrhZqbwmIW6NPuG9XnXqJ7kd3sryNA0IPsy0xAdFlCBFvw6SpajS2T17AifdOi9AJs%2BV%2Bia3c5s2MPxxDmc19cAeGj%2BoBaXoPpGA9GwxIC3KAvXRByRqsE4nHlGK6WxNYVDlHwcrMpPisOInjWseceH8pHVHnzgV123p5xewVllX5IhCPG3DscVseQUYFYuCGg3dHNe67HAszMP3jvr8GOqUBvQXR2oFn18122BurJRH3HAvcWXWY8fRzVgxSlvX9I4Heoq7V1sD4V65AuRm0crVDmf%2BxaIeLcJVCjXwL17iF1KD274q4u%2Fe09tQkf97ZVD4jVAIhn5xodr8VE1QcTLtFUYnRCergkC2D0VgJ8RtF2GS%2FHpoyfX3LQkobOXMbM7kUEZt6bnsWlFyBuXWO%2BFw0NzDu%2Bt2UIXU1l%2BfyWhwYnhguK8Fw&X-Amz-Signature=53fe11e11bf98676f97edd6aeaba573a70d31e0e7c52ed72e35fe568c906e0f3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC4NGLWS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj4yrOBSHgQBwG4SplZo9xridVQyPXjUjhCx%2F7tvj7%2BAIgYXAYodKrQSHDWjb75dGxys1FY%2FjDhUxB4qaRlYHG36cq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHGYJTTEZB8TmVryvyrcAwMoxWxgVN4u2Txm%2BnsOiwcLqwZKusJbOxMD0Wzj%2Ft49lIwWDBez4nt3QgRO4GRIn7JDOwXt1yzmkq%2BwttJjTb1EzGkFH41Fy3q920nK4uolZzIVwGG%2BhsjXE6DCy0yVLx0GgdgZMqrzjbLR0I8KpgRwIjs8L%2FlGHS4UUYsilt3Wu5DF5oqRwH890f11QLcwPV%2BxTX1%2FfX0nyTeH6N2dN6xtfjOLTZ64%2B7L8DycxuktW6hprrX5dIyqChkESRGgs8Vx%2F71P%2BdNVRHxBKyGVqIvaxFj%2BrlqL3rJZof%2Bw5vJr1MMXhFoZhBVtQoOCfNsZaMQL3qBO6RfutyQqZlMUJNjy7gUTqUI86F1bqjuiE4%2FLtobpU9hhuD2pqoV6MxxAZZZgmSd6Bjdvu1moSo43pXckcenPNWM%2F8pX50ctQlHiSi6nkgrhZqbwmIW6NPuG9XnXqJ7kd3sryNA0IPsy0xAdFlCBFvw6SpajS2T17AifdOi9AJs%2BV%2Bia3c5s2MPxxDmc19cAeGj%2BoBaXoPpGA9GwxIC3KAvXRByRqsE4nHlGK6WxNYVDlHwcrMpPisOInjWseceH8pHVHnzgV123p5xewVllX5IhCPG3DscVseQUYFYuCGg3dHNe67HAszMP3jvr8GOqUBvQXR2oFn18122BurJRH3HAvcWXWY8fRzVgxSlvX9I4Heoq7V1sD4V65AuRm0crVDmf%2BxaIeLcJVCjXwL17iF1KD274q4u%2Fe09tQkf97ZVD4jVAIhn5xodr8VE1QcTLtFUYnRCergkC2D0VgJ8RtF2GS%2FHpoyfX3LQkobOXMbM7kUEZt6bnsWlFyBuXWO%2BFw0NzDu%2Bt2UIXU1l%2BfyWhwYnhguK8Fw&X-Amz-Signature=ea3e02a31dd445f1ff7d09e8e366f86482f7c84517f4c8889dfbe827adc7ede8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC4NGLWS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj4yrOBSHgQBwG4SplZo9xridVQyPXjUjhCx%2F7tvj7%2BAIgYXAYodKrQSHDWjb75dGxys1FY%2FjDhUxB4qaRlYHG36cq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHGYJTTEZB8TmVryvyrcAwMoxWxgVN4u2Txm%2BnsOiwcLqwZKusJbOxMD0Wzj%2Ft49lIwWDBez4nt3QgRO4GRIn7JDOwXt1yzmkq%2BwttJjTb1EzGkFH41Fy3q920nK4uolZzIVwGG%2BhsjXE6DCy0yVLx0GgdgZMqrzjbLR0I8KpgRwIjs8L%2FlGHS4UUYsilt3Wu5DF5oqRwH890f11QLcwPV%2BxTX1%2FfX0nyTeH6N2dN6xtfjOLTZ64%2B7L8DycxuktW6hprrX5dIyqChkESRGgs8Vx%2F71P%2BdNVRHxBKyGVqIvaxFj%2BrlqL3rJZof%2Bw5vJr1MMXhFoZhBVtQoOCfNsZaMQL3qBO6RfutyQqZlMUJNjy7gUTqUI86F1bqjuiE4%2FLtobpU9hhuD2pqoV6MxxAZZZgmSd6Bjdvu1moSo43pXckcenPNWM%2F8pX50ctQlHiSi6nkgrhZqbwmIW6NPuG9XnXqJ7kd3sryNA0IPsy0xAdFlCBFvw6SpajS2T17AifdOi9AJs%2BV%2Bia3c5s2MPxxDmc19cAeGj%2BoBaXoPpGA9GwxIC3KAvXRByRqsE4nHlGK6WxNYVDlHwcrMpPisOInjWseceH8pHVHnzgV123p5xewVllX5IhCPG3DscVseQUYFYuCGg3dHNe67HAszMP3jvr8GOqUBvQXR2oFn18122BurJRH3HAvcWXWY8fRzVgxSlvX9I4Heoq7V1sD4V65AuRm0crVDmf%2BxaIeLcJVCjXwL17iF1KD274q4u%2Fe09tQkf97ZVD4jVAIhn5xodr8VE1QcTLtFUYnRCergkC2D0VgJ8RtF2GS%2FHpoyfX3LQkobOXMbM7kUEZt6bnsWlFyBuXWO%2BFw0NzDu%2Bt2UIXU1l%2BfyWhwYnhguK8Fw&X-Amz-Signature=9ba3ddfb4628453b44cc0425cb870ae07c9c3f0acee6688f8e8a80387593d9db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC4NGLWS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj4yrOBSHgQBwG4SplZo9xridVQyPXjUjhCx%2F7tvj7%2BAIgYXAYodKrQSHDWjb75dGxys1FY%2FjDhUxB4qaRlYHG36cq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHGYJTTEZB8TmVryvyrcAwMoxWxgVN4u2Txm%2BnsOiwcLqwZKusJbOxMD0Wzj%2Ft49lIwWDBez4nt3QgRO4GRIn7JDOwXt1yzmkq%2BwttJjTb1EzGkFH41Fy3q920nK4uolZzIVwGG%2BhsjXE6DCy0yVLx0GgdgZMqrzjbLR0I8KpgRwIjs8L%2FlGHS4UUYsilt3Wu5DF5oqRwH890f11QLcwPV%2BxTX1%2FfX0nyTeH6N2dN6xtfjOLTZ64%2B7L8DycxuktW6hprrX5dIyqChkESRGgs8Vx%2F71P%2BdNVRHxBKyGVqIvaxFj%2BrlqL3rJZof%2Bw5vJr1MMXhFoZhBVtQoOCfNsZaMQL3qBO6RfutyQqZlMUJNjy7gUTqUI86F1bqjuiE4%2FLtobpU9hhuD2pqoV6MxxAZZZgmSd6Bjdvu1moSo43pXckcenPNWM%2F8pX50ctQlHiSi6nkgrhZqbwmIW6NPuG9XnXqJ7kd3sryNA0IPsy0xAdFlCBFvw6SpajS2T17AifdOi9AJs%2BV%2Bia3c5s2MPxxDmc19cAeGj%2BoBaXoPpGA9GwxIC3KAvXRByRqsE4nHlGK6WxNYVDlHwcrMpPisOInjWseceH8pHVHnzgV123p5xewVllX5IhCPG3DscVseQUYFYuCGg3dHNe67HAszMP3jvr8GOqUBvQXR2oFn18122BurJRH3HAvcWXWY8fRzVgxSlvX9I4Heoq7V1sD4V65AuRm0crVDmf%2BxaIeLcJVCjXwL17iF1KD274q4u%2Fe09tQkf97ZVD4jVAIhn5xodr8VE1QcTLtFUYnRCergkC2D0VgJ8RtF2GS%2FHpoyfX3LQkobOXMbM7kUEZt6bnsWlFyBuXWO%2BFw0NzDu%2Bt2UIXU1l%2BfyWhwYnhguK8Fw&X-Amz-Signature=a9405b6667ad3a446925904a9c2bbb7927bedca0e5403c44b9fba904f915cbb5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC4NGLWS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj4yrOBSHgQBwG4SplZo9xridVQyPXjUjhCx%2F7tvj7%2BAIgYXAYodKrQSHDWjb75dGxys1FY%2FjDhUxB4qaRlYHG36cq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHGYJTTEZB8TmVryvyrcAwMoxWxgVN4u2Txm%2BnsOiwcLqwZKusJbOxMD0Wzj%2Ft49lIwWDBez4nt3QgRO4GRIn7JDOwXt1yzmkq%2BwttJjTb1EzGkFH41Fy3q920nK4uolZzIVwGG%2BhsjXE6DCy0yVLx0GgdgZMqrzjbLR0I8KpgRwIjs8L%2FlGHS4UUYsilt3Wu5DF5oqRwH890f11QLcwPV%2BxTX1%2FfX0nyTeH6N2dN6xtfjOLTZ64%2B7L8DycxuktW6hprrX5dIyqChkESRGgs8Vx%2F71P%2BdNVRHxBKyGVqIvaxFj%2BrlqL3rJZof%2Bw5vJr1MMXhFoZhBVtQoOCfNsZaMQL3qBO6RfutyQqZlMUJNjy7gUTqUI86F1bqjuiE4%2FLtobpU9hhuD2pqoV6MxxAZZZgmSd6Bjdvu1moSo43pXckcenPNWM%2F8pX50ctQlHiSi6nkgrhZqbwmIW6NPuG9XnXqJ7kd3sryNA0IPsy0xAdFlCBFvw6SpajS2T17AifdOi9AJs%2BV%2Bia3c5s2MPxxDmc19cAeGj%2BoBaXoPpGA9GwxIC3KAvXRByRqsE4nHlGK6WxNYVDlHwcrMpPisOInjWseceH8pHVHnzgV123p5xewVllX5IhCPG3DscVseQUYFYuCGg3dHNe67HAszMP3jvr8GOqUBvQXR2oFn18122BurJRH3HAvcWXWY8fRzVgxSlvX9I4Heoq7V1sD4V65AuRm0crVDmf%2BxaIeLcJVCjXwL17iF1KD274q4u%2Fe09tQkf97ZVD4jVAIhn5xodr8VE1QcTLtFUYnRCergkC2D0VgJ8RtF2GS%2FHpoyfX3LQkobOXMbM7kUEZt6bnsWlFyBuXWO%2BFw0NzDu%2Bt2UIXU1l%2BfyWhwYnhguK8Fw&X-Amz-Signature=bf152275b68458ee22d9bb372aedbe08c535d4f4b042f85faf5122360845cbc9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC4NGLWS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj4yrOBSHgQBwG4SplZo9xridVQyPXjUjhCx%2F7tvj7%2BAIgYXAYodKrQSHDWjb75dGxys1FY%2FjDhUxB4qaRlYHG36cq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHGYJTTEZB8TmVryvyrcAwMoxWxgVN4u2Txm%2BnsOiwcLqwZKusJbOxMD0Wzj%2Ft49lIwWDBez4nt3QgRO4GRIn7JDOwXt1yzmkq%2BwttJjTb1EzGkFH41Fy3q920nK4uolZzIVwGG%2BhsjXE6DCy0yVLx0GgdgZMqrzjbLR0I8KpgRwIjs8L%2FlGHS4UUYsilt3Wu5DF5oqRwH890f11QLcwPV%2BxTX1%2FfX0nyTeH6N2dN6xtfjOLTZ64%2B7L8DycxuktW6hprrX5dIyqChkESRGgs8Vx%2F71P%2BdNVRHxBKyGVqIvaxFj%2BrlqL3rJZof%2Bw5vJr1MMXhFoZhBVtQoOCfNsZaMQL3qBO6RfutyQqZlMUJNjy7gUTqUI86F1bqjuiE4%2FLtobpU9hhuD2pqoV6MxxAZZZgmSd6Bjdvu1moSo43pXckcenPNWM%2F8pX50ctQlHiSi6nkgrhZqbwmIW6NPuG9XnXqJ7kd3sryNA0IPsy0xAdFlCBFvw6SpajS2T17AifdOi9AJs%2BV%2Bia3c5s2MPxxDmc19cAeGj%2BoBaXoPpGA9GwxIC3KAvXRByRqsE4nHlGK6WxNYVDlHwcrMpPisOInjWseceH8pHVHnzgV123p5xewVllX5IhCPG3DscVseQUYFYuCGg3dHNe67HAszMP3jvr8GOqUBvQXR2oFn18122BurJRH3HAvcWXWY8fRzVgxSlvX9I4Heoq7V1sD4V65AuRm0crVDmf%2BxaIeLcJVCjXwL17iF1KD274q4u%2Fe09tQkf97ZVD4jVAIhn5xodr8VE1QcTLtFUYnRCergkC2D0VgJ8RtF2GS%2FHpoyfX3LQkobOXMbM7kUEZt6bnsWlFyBuXWO%2BFw0NzDu%2Bt2UIXU1l%2BfyWhwYnhguK8Fw&X-Amz-Signature=3e4547168c39a484c08974a2a588a9aa53953d7956267318c304af1095aae07c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
