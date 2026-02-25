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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPFAFD63%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCiLqZTWbOnJxxpw%2FsInHM4oR5jsHaMq4uNLOFW55XjFgIhAPlUzTr13y6r5ejOwNQaFbGgS9whwYVmIDK45RnNEUFAKv8DCAIQABoMNjM3NDIzMTgzODA1IgzjiWnW17whfU4O%2BXEq3ANp5KH1fT6HTB0B%2B9TbRec9HjGHr7jeFQHUthFG4OikuLyivIkMdRCMZF54fLkSK1NJrkTX2fKYn4Q8mNPyTkSnRURkAJKMyX%2Bh9FObHI1YG3EnnwOpRoBfn49VTDvHM0EsjFNzKAG62jLCkt6l3W1xbLZ%2BDpKXSiUmoHTn1fn2O84OFSw8B%2FAAASpSvfckXtCd8KUgTQ%2Bj9sJ2mgalT7YfDd2b0xUN%2BTpojbO4uy31dFDhj0K3dqzZCpp35eDK9qSj7EtUcU8Oi4gBdmUg%2Fwmi%2FkkJwPKE03Beq1i0gwJONy%2BHXMYExczFguOVx4W6WGS5oHIyd2q43EuOqMxjAYdG6G4Z5OuDP5e7sLQmiFnGP4YmY01u5Vq943%2BQ4Ph5Ox%2Fl%2FrqHu2mWwPUzfvF6ahu9VaFC4M17Hm6l8Icj7rmXWRnsVv2AWoDA9KccC%2BHFQoo9L5EB345ikWlEdjr8DFhcDW9Aa24ZI6F9XFwYISjyfJ6onxW9FDuPmfNLH311jQf7cHBWbTZnFXC0lBTpZNHKzLfMH5dtNH4LMJK5mjPxOffRn0YV2GRRkogmhhFJVThjLg4NRyaoX2BvYSMHc%2FD7De9YS9gCMJZvH68%2BOc3WsG9z5EzWZnWR61YgvDD%2Bg%2FnMBjqkAb4QDdynhrenSUVxg%2Fanr5b1BvR8b4bLHIdREweultAddYcZFIzkY5p78ZWe5SP0F88PH6YQKCN%2B7Xln9Lt3ch7MzREGheTfZHfca0CqJ7IE%2FEUCoBJW7Jp4%2BcUpYt9fgIDAheEGk20fZArihTNgrVwyyU%2BIPgZe8wPU4rGwn2qN3jfKdujBwwl5g%2FDpXhD1WIU0uqK3mGea7w5Dx1TJww%2F1rZKE&X-Amz-Signature=d2a8336e46f8f2722ac4c192290c93596c8211782efa5adad7e2dd9ff23dda4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPFAFD63%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCiLqZTWbOnJxxpw%2FsInHM4oR5jsHaMq4uNLOFW55XjFgIhAPlUzTr13y6r5ejOwNQaFbGgS9whwYVmIDK45RnNEUFAKv8DCAIQABoMNjM3NDIzMTgzODA1IgzjiWnW17whfU4O%2BXEq3ANp5KH1fT6HTB0B%2B9TbRec9HjGHr7jeFQHUthFG4OikuLyivIkMdRCMZF54fLkSK1NJrkTX2fKYn4Q8mNPyTkSnRURkAJKMyX%2Bh9FObHI1YG3EnnwOpRoBfn49VTDvHM0EsjFNzKAG62jLCkt6l3W1xbLZ%2BDpKXSiUmoHTn1fn2O84OFSw8B%2FAAASpSvfckXtCd8KUgTQ%2Bj9sJ2mgalT7YfDd2b0xUN%2BTpojbO4uy31dFDhj0K3dqzZCpp35eDK9qSj7EtUcU8Oi4gBdmUg%2Fwmi%2FkkJwPKE03Beq1i0gwJONy%2BHXMYExczFguOVx4W6WGS5oHIyd2q43EuOqMxjAYdG6G4Z5OuDP5e7sLQmiFnGP4YmY01u5Vq943%2BQ4Ph5Ox%2Fl%2FrqHu2mWwPUzfvF6ahu9VaFC4M17Hm6l8Icj7rmXWRnsVv2AWoDA9KccC%2BHFQoo9L5EB345ikWlEdjr8DFhcDW9Aa24ZI6F9XFwYISjyfJ6onxW9FDuPmfNLH311jQf7cHBWbTZnFXC0lBTpZNHKzLfMH5dtNH4LMJK5mjPxOffRn0YV2GRRkogmhhFJVThjLg4NRyaoX2BvYSMHc%2FD7De9YS9gCMJZvH68%2BOc3WsG9z5EzWZnWR61YgvDD%2Bg%2FnMBjqkAb4QDdynhrenSUVxg%2Fanr5b1BvR8b4bLHIdREweultAddYcZFIzkY5p78ZWe5SP0F88PH6YQKCN%2B7Xln9Lt3ch7MzREGheTfZHfca0CqJ7IE%2FEUCoBJW7Jp4%2BcUpYt9fgIDAheEGk20fZArihTNgrVwyyU%2BIPgZe8wPU4rGwn2qN3jfKdujBwwl5g%2FDpXhD1WIU0uqK3mGea7w5Dx1TJww%2F1rZKE&X-Amz-Signature=c3e4e95af6d1b93d3493b1215ddb53ea6e30ce21fe51627b928d59e5ea281cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPFAFD63%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCiLqZTWbOnJxxpw%2FsInHM4oR5jsHaMq4uNLOFW55XjFgIhAPlUzTr13y6r5ejOwNQaFbGgS9whwYVmIDK45RnNEUFAKv8DCAIQABoMNjM3NDIzMTgzODA1IgzjiWnW17whfU4O%2BXEq3ANp5KH1fT6HTB0B%2B9TbRec9HjGHr7jeFQHUthFG4OikuLyivIkMdRCMZF54fLkSK1NJrkTX2fKYn4Q8mNPyTkSnRURkAJKMyX%2Bh9FObHI1YG3EnnwOpRoBfn49VTDvHM0EsjFNzKAG62jLCkt6l3W1xbLZ%2BDpKXSiUmoHTn1fn2O84OFSw8B%2FAAASpSvfckXtCd8KUgTQ%2Bj9sJ2mgalT7YfDd2b0xUN%2BTpojbO4uy31dFDhj0K3dqzZCpp35eDK9qSj7EtUcU8Oi4gBdmUg%2Fwmi%2FkkJwPKE03Beq1i0gwJONy%2BHXMYExczFguOVx4W6WGS5oHIyd2q43EuOqMxjAYdG6G4Z5OuDP5e7sLQmiFnGP4YmY01u5Vq943%2BQ4Ph5Ox%2Fl%2FrqHu2mWwPUzfvF6ahu9VaFC4M17Hm6l8Icj7rmXWRnsVv2AWoDA9KccC%2BHFQoo9L5EB345ikWlEdjr8DFhcDW9Aa24ZI6F9XFwYISjyfJ6onxW9FDuPmfNLH311jQf7cHBWbTZnFXC0lBTpZNHKzLfMH5dtNH4LMJK5mjPxOffRn0YV2GRRkogmhhFJVThjLg4NRyaoX2BvYSMHc%2FD7De9YS9gCMJZvH68%2BOc3WsG9z5EzWZnWR61YgvDD%2Bg%2FnMBjqkAb4QDdynhrenSUVxg%2Fanr5b1BvR8b4bLHIdREweultAddYcZFIzkY5p78ZWe5SP0F88PH6YQKCN%2B7Xln9Lt3ch7MzREGheTfZHfca0CqJ7IE%2FEUCoBJW7Jp4%2BcUpYt9fgIDAheEGk20fZArihTNgrVwyyU%2BIPgZe8wPU4rGwn2qN3jfKdujBwwl5g%2FDpXhD1WIU0uqK3mGea7w5Dx1TJww%2F1rZKE&X-Amz-Signature=15e60a1e65a700f40d7ec3a797ffdb025e1288d99b3644b7dfc65811391db4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPFAFD63%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCiLqZTWbOnJxxpw%2FsInHM4oR5jsHaMq4uNLOFW55XjFgIhAPlUzTr13y6r5ejOwNQaFbGgS9whwYVmIDK45RnNEUFAKv8DCAIQABoMNjM3NDIzMTgzODA1IgzjiWnW17whfU4O%2BXEq3ANp5KH1fT6HTB0B%2B9TbRec9HjGHr7jeFQHUthFG4OikuLyivIkMdRCMZF54fLkSK1NJrkTX2fKYn4Q8mNPyTkSnRURkAJKMyX%2Bh9FObHI1YG3EnnwOpRoBfn49VTDvHM0EsjFNzKAG62jLCkt6l3W1xbLZ%2BDpKXSiUmoHTn1fn2O84OFSw8B%2FAAASpSvfckXtCd8KUgTQ%2Bj9sJ2mgalT7YfDd2b0xUN%2BTpojbO4uy31dFDhj0K3dqzZCpp35eDK9qSj7EtUcU8Oi4gBdmUg%2Fwmi%2FkkJwPKE03Beq1i0gwJONy%2BHXMYExczFguOVx4W6WGS5oHIyd2q43EuOqMxjAYdG6G4Z5OuDP5e7sLQmiFnGP4YmY01u5Vq943%2BQ4Ph5Ox%2Fl%2FrqHu2mWwPUzfvF6ahu9VaFC4M17Hm6l8Icj7rmXWRnsVv2AWoDA9KccC%2BHFQoo9L5EB345ikWlEdjr8DFhcDW9Aa24ZI6F9XFwYISjyfJ6onxW9FDuPmfNLH311jQf7cHBWbTZnFXC0lBTpZNHKzLfMH5dtNH4LMJK5mjPxOffRn0YV2GRRkogmhhFJVThjLg4NRyaoX2BvYSMHc%2FD7De9YS9gCMJZvH68%2BOc3WsG9z5EzWZnWR61YgvDD%2Bg%2FnMBjqkAb4QDdynhrenSUVxg%2Fanr5b1BvR8b4bLHIdREweultAddYcZFIzkY5p78ZWe5SP0F88PH6YQKCN%2B7Xln9Lt3ch7MzREGheTfZHfca0CqJ7IE%2FEUCoBJW7Jp4%2BcUpYt9fgIDAheEGk20fZArihTNgrVwyyU%2BIPgZe8wPU4rGwn2qN3jfKdujBwwl5g%2FDpXhD1WIU0uqK3mGea7w5Dx1TJww%2F1rZKE&X-Amz-Signature=0c88201dc83c58ed183c623c9803df8fd63dbe007febfd86eb8c68ccc47cd9c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPFAFD63%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCiLqZTWbOnJxxpw%2FsInHM4oR5jsHaMq4uNLOFW55XjFgIhAPlUzTr13y6r5ejOwNQaFbGgS9whwYVmIDK45RnNEUFAKv8DCAIQABoMNjM3NDIzMTgzODA1IgzjiWnW17whfU4O%2BXEq3ANp5KH1fT6HTB0B%2B9TbRec9HjGHr7jeFQHUthFG4OikuLyivIkMdRCMZF54fLkSK1NJrkTX2fKYn4Q8mNPyTkSnRURkAJKMyX%2Bh9FObHI1YG3EnnwOpRoBfn49VTDvHM0EsjFNzKAG62jLCkt6l3W1xbLZ%2BDpKXSiUmoHTn1fn2O84OFSw8B%2FAAASpSvfckXtCd8KUgTQ%2Bj9sJ2mgalT7YfDd2b0xUN%2BTpojbO4uy31dFDhj0K3dqzZCpp35eDK9qSj7EtUcU8Oi4gBdmUg%2Fwmi%2FkkJwPKE03Beq1i0gwJONy%2BHXMYExczFguOVx4W6WGS5oHIyd2q43EuOqMxjAYdG6G4Z5OuDP5e7sLQmiFnGP4YmY01u5Vq943%2BQ4Ph5Ox%2Fl%2FrqHu2mWwPUzfvF6ahu9VaFC4M17Hm6l8Icj7rmXWRnsVv2AWoDA9KccC%2BHFQoo9L5EB345ikWlEdjr8DFhcDW9Aa24ZI6F9XFwYISjyfJ6onxW9FDuPmfNLH311jQf7cHBWbTZnFXC0lBTpZNHKzLfMH5dtNH4LMJK5mjPxOffRn0YV2GRRkogmhhFJVThjLg4NRyaoX2BvYSMHc%2FD7De9YS9gCMJZvH68%2BOc3WsG9z5EzWZnWR61YgvDD%2Bg%2FnMBjqkAb4QDdynhrenSUVxg%2Fanr5b1BvR8b4bLHIdREweultAddYcZFIzkY5p78ZWe5SP0F88PH6YQKCN%2B7Xln9Lt3ch7MzREGheTfZHfca0CqJ7IE%2FEUCoBJW7Jp4%2BcUpYt9fgIDAheEGk20fZArihTNgrVwyyU%2BIPgZe8wPU4rGwn2qN3jfKdujBwwl5g%2FDpXhD1WIU0uqK3mGea7w5Dx1TJww%2F1rZKE&X-Amz-Signature=77536d4ade2edebb76c43021c3bbbcf5b68872f741b36616ea6d0caac5dbc417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPFAFD63%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCiLqZTWbOnJxxpw%2FsInHM4oR5jsHaMq4uNLOFW55XjFgIhAPlUzTr13y6r5ejOwNQaFbGgS9whwYVmIDK45RnNEUFAKv8DCAIQABoMNjM3NDIzMTgzODA1IgzjiWnW17whfU4O%2BXEq3ANp5KH1fT6HTB0B%2B9TbRec9HjGHr7jeFQHUthFG4OikuLyivIkMdRCMZF54fLkSK1NJrkTX2fKYn4Q8mNPyTkSnRURkAJKMyX%2Bh9FObHI1YG3EnnwOpRoBfn49VTDvHM0EsjFNzKAG62jLCkt6l3W1xbLZ%2BDpKXSiUmoHTn1fn2O84OFSw8B%2FAAASpSvfckXtCd8KUgTQ%2Bj9sJ2mgalT7YfDd2b0xUN%2BTpojbO4uy31dFDhj0K3dqzZCpp35eDK9qSj7EtUcU8Oi4gBdmUg%2Fwmi%2FkkJwPKE03Beq1i0gwJONy%2BHXMYExczFguOVx4W6WGS5oHIyd2q43EuOqMxjAYdG6G4Z5OuDP5e7sLQmiFnGP4YmY01u5Vq943%2BQ4Ph5Ox%2Fl%2FrqHu2mWwPUzfvF6ahu9VaFC4M17Hm6l8Icj7rmXWRnsVv2AWoDA9KccC%2BHFQoo9L5EB345ikWlEdjr8DFhcDW9Aa24ZI6F9XFwYISjyfJ6onxW9FDuPmfNLH311jQf7cHBWbTZnFXC0lBTpZNHKzLfMH5dtNH4LMJK5mjPxOffRn0YV2GRRkogmhhFJVThjLg4NRyaoX2BvYSMHc%2FD7De9YS9gCMJZvH68%2BOc3WsG9z5EzWZnWR61YgvDD%2Bg%2FnMBjqkAb4QDdynhrenSUVxg%2Fanr5b1BvR8b4bLHIdREweultAddYcZFIzkY5p78ZWe5SP0F88PH6YQKCN%2B7Xln9Lt3ch7MzREGheTfZHfca0CqJ7IE%2FEUCoBJW7Jp4%2BcUpYt9fgIDAheEGk20fZArihTNgrVwyyU%2BIPgZe8wPU4rGwn2qN3jfKdujBwwl5g%2FDpXhD1WIU0uqK3mGea7w5Dx1TJww%2F1rZKE&X-Amz-Signature=8df43da997447f178e6330525d62d97d61629fe876c18f6fb2c8201d4461a909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPFAFD63%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCiLqZTWbOnJxxpw%2FsInHM4oR5jsHaMq4uNLOFW55XjFgIhAPlUzTr13y6r5ejOwNQaFbGgS9whwYVmIDK45RnNEUFAKv8DCAIQABoMNjM3NDIzMTgzODA1IgzjiWnW17whfU4O%2BXEq3ANp5KH1fT6HTB0B%2B9TbRec9HjGHr7jeFQHUthFG4OikuLyivIkMdRCMZF54fLkSK1NJrkTX2fKYn4Q8mNPyTkSnRURkAJKMyX%2Bh9FObHI1YG3EnnwOpRoBfn49VTDvHM0EsjFNzKAG62jLCkt6l3W1xbLZ%2BDpKXSiUmoHTn1fn2O84OFSw8B%2FAAASpSvfckXtCd8KUgTQ%2Bj9sJ2mgalT7YfDd2b0xUN%2BTpojbO4uy31dFDhj0K3dqzZCpp35eDK9qSj7EtUcU8Oi4gBdmUg%2Fwmi%2FkkJwPKE03Beq1i0gwJONy%2BHXMYExczFguOVx4W6WGS5oHIyd2q43EuOqMxjAYdG6G4Z5OuDP5e7sLQmiFnGP4YmY01u5Vq943%2BQ4Ph5Ox%2Fl%2FrqHu2mWwPUzfvF6ahu9VaFC4M17Hm6l8Icj7rmXWRnsVv2AWoDA9KccC%2BHFQoo9L5EB345ikWlEdjr8DFhcDW9Aa24ZI6F9XFwYISjyfJ6onxW9FDuPmfNLH311jQf7cHBWbTZnFXC0lBTpZNHKzLfMH5dtNH4LMJK5mjPxOffRn0YV2GRRkogmhhFJVThjLg4NRyaoX2BvYSMHc%2FD7De9YS9gCMJZvH68%2BOc3WsG9z5EzWZnWR61YgvDD%2Bg%2FnMBjqkAb4QDdynhrenSUVxg%2Fanr5b1BvR8b4bLHIdREweultAddYcZFIzkY5p78ZWe5SP0F88PH6YQKCN%2B7Xln9Lt3ch7MzREGheTfZHfca0CqJ7IE%2FEUCoBJW7Jp4%2BcUpYt9fgIDAheEGk20fZArihTNgrVwyyU%2BIPgZe8wPU4rGwn2qN3jfKdujBwwl5g%2FDpXhD1WIU0uqK3mGea7w5Dx1TJww%2F1rZKE&X-Amz-Signature=d2faf878fe91a1e46268aa533db23bbea7cecb4197b1c58a0dc163e3d8ec316f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPFAFD63%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCiLqZTWbOnJxxpw%2FsInHM4oR5jsHaMq4uNLOFW55XjFgIhAPlUzTr13y6r5ejOwNQaFbGgS9whwYVmIDK45RnNEUFAKv8DCAIQABoMNjM3NDIzMTgzODA1IgzjiWnW17whfU4O%2BXEq3ANp5KH1fT6HTB0B%2B9TbRec9HjGHr7jeFQHUthFG4OikuLyivIkMdRCMZF54fLkSK1NJrkTX2fKYn4Q8mNPyTkSnRURkAJKMyX%2Bh9FObHI1YG3EnnwOpRoBfn49VTDvHM0EsjFNzKAG62jLCkt6l3W1xbLZ%2BDpKXSiUmoHTn1fn2O84OFSw8B%2FAAASpSvfckXtCd8KUgTQ%2Bj9sJ2mgalT7YfDd2b0xUN%2BTpojbO4uy31dFDhj0K3dqzZCpp35eDK9qSj7EtUcU8Oi4gBdmUg%2Fwmi%2FkkJwPKE03Beq1i0gwJONy%2BHXMYExczFguOVx4W6WGS5oHIyd2q43EuOqMxjAYdG6G4Z5OuDP5e7sLQmiFnGP4YmY01u5Vq943%2BQ4Ph5Ox%2Fl%2FrqHu2mWwPUzfvF6ahu9VaFC4M17Hm6l8Icj7rmXWRnsVv2AWoDA9KccC%2BHFQoo9L5EB345ikWlEdjr8DFhcDW9Aa24ZI6F9XFwYISjyfJ6onxW9FDuPmfNLH311jQf7cHBWbTZnFXC0lBTpZNHKzLfMH5dtNH4LMJK5mjPxOffRn0YV2GRRkogmhhFJVThjLg4NRyaoX2BvYSMHc%2FD7De9YS9gCMJZvH68%2BOc3WsG9z5EzWZnWR61YgvDD%2Bg%2FnMBjqkAb4QDdynhrenSUVxg%2Fanr5b1BvR8b4bLHIdREweultAddYcZFIzkY5p78ZWe5SP0F88PH6YQKCN%2B7Xln9Lt3ch7MzREGheTfZHfca0CqJ7IE%2FEUCoBJW7Jp4%2BcUpYt9fgIDAheEGk20fZArihTNgrVwyyU%2BIPgZe8wPU4rGwn2qN3jfKdujBwwl5g%2FDpXhD1WIU0uqK3mGea7w5Dx1TJww%2F1rZKE&X-Amz-Signature=efffa94e6b804dceb97dd8573144889cb786d13f61d0311325834faa49570341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
