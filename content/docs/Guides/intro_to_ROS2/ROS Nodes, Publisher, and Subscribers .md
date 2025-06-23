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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VQMWTWP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD0YqWwj0ZqIYHZkGIPnhOn4kn0U4M3Y2Ozu8AxPO12pwIgT1XSX1L%2FwORkhFz8LTeTZzGcNGw%2FWPnWCUsd1a27%2F6Yq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJgOkRwAtTEX78%2BtwSrcA%2BTNV71j0Byq403Otxln2dNYxWHDvtTJG24K8syWuMjdO8FuJVy7mG7M2hMwdWYBh3GkWwDQQXu7tCGh2wWteISsfsBox1CAnRHXmO0KjbX7%2BBCibgxGUx8mkX%2BfF1z2L8fvEvg2np1oovhXGxhwcPVhYh1vzkL5vTixVEKaX9dGfo2tiBlxHEOgwgLDBxVacG1%2Bb43mpsxkGz3Sb0O5H%2BIZYdz%2B4ry16K0T7xWYmyJoWxOgxb36dFf9uBK1InM8cFFFd2TbGV%2FUaAND6jxSttsmmuXKrmBd%2BaVBbv9Nf87J6EyuPxbuvBRE2oqw9X8VF8BhiPNdVcWl7iVveNhEhNNYHfFVPgV6esx3OVbLF83GKoe%2FCIPEL7q6iqkVPOW9GhAwP3dXqm5x35xx3hQQH%2ByyjtkQ2CM%2FrmIy7FleXoZpOmcFjz3p2g0v3SPbJ4lbTgesFyvq6AVvyT00Q69MaUnWyJT8H37FIVMARU9xkmOWxfcUbNfWIa6c8W4mhK9etWrBKt3YfnfU98zXDjoqNoLUWNmG5lenYJQIr2QQ7dcKKEXpqTje0GiUM7S%2FfKsVrqMCAd9WElq6M5gpJxHc%2BtrZleQHGoHlOfAr6MGGfF06wufUtGBkH2RWBEqeMLeq5sIGOqUBmbLXdJg3S3FjhgJTCwdvCO4HWFXPEDBq2VOcSMAqeJCSEXpbBqVbTwNFzBueMk%2BOcIy%2Bvv7AaPiFJLsG1Nmsa%2F8M%2Fi5lT78vCmXezJiAZ%2BgCy2rpLhhcxKnKLdJxJID7GEsy2jnhXeOftu8AzmNkQzeZYw3xmpcwSY%2Fgg%2FMpVk0mv3EE8IeRm5xdBH9BwjqNH%2BTnDHi1lFK8enOQYmO2x%2FCpXeEj&X-Amz-Signature=1f95e89886a20d5b132f492ca16d7329ad225418bc80f4c7caac917289e1b611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VQMWTWP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD0YqWwj0ZqIYHZkGIPnhOn4kn0U4M3Y2Ozu8AxPO12pwIgT1XSX1L%2FwORkhFz8LTeTZzGcNGw%2FWPnWCUsd1a27%2F6Yq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJgOkRwAtTEX78%2BtwSrcA%2BTNV71j0Byq403Otxln2dNYxWHDvtTJG24K8syWuMjdO8FuJVy7mG7M2hMwdWYBh3GkWwDQQXu7tCGh2wWteISsfsBox1CAnRHXmO0KjbX7%2BBCibgxGUx8mkX%2BfF1z2L8fvEvg2np1oovhXGxhwcPVhYh1vzkL5vTixVEKaX9dGfo2tiBlxHEOgwgLDBxVacG1%2Bb43mpsxkGz3Sb0O5H%2BIZYdz%2B4ry16K0T7xWYmyJoWxOgxb36dFf9uBK1InM8cFFFd2TbGV%2FUaAND6jxSttsmmuXKrmBd%2BaVBbv9Nf87J6EyuPxbuvBRE2oqw9X8VF8BhiPNdVcWl7iVveNhEhNNYHfFVPgV6esx3OVbLF83GKoe%2FCIPEL7q6iqkVPOW9GhAwP3dXqm5x35xx3hQQH%2ByyjtkQ2CM%2FrmIy7FleXoZpOmcFjz3p2g0v3SPbJ4lbTgesFyvq6AVvyT00Q69MaUnWyJT8H37FIVMARU9xkmOWxfcUbNfWIa6c8W4mhK9etWrBKt3YfnfU98zXDjoqNoLUWNmG5lenYJQIr2QQ7dcKKEXpqTje0GiUM7S%2FfKsVrqMCAd9WElq6M5gpJxHc%2BtrZleQHGoHlOfAr6MGGfF06wufUtGBkH2RWBEqeMLeq5sIGOqUBmbLXdJg3S3FjhgJTCwdvCO4HWFXPEDBq2VOcSMAqeJCSEXpbBqVbTwNFzBueMk%2BOcIy%2Bvv7AaPiFJLsG1Nmsa%2F8M%2Fi5lT78vCmXezJiAZ%2BgCy2rpLhhcxKnKLdJxJID7GEsy2jnhXeOftu8AzmNkQzeZYw3xmpcwSY%2Fgg%2FMpVk0mv3EE8IeRm5xdBH9BwjqNH%2BTnDHi1lFK8enOQYmO2x%2FCpXeEj&X-Amz-Signature=d747b14d83ebc28312154506e12f14f84d08d0fe7ff70f2fbf6d42aa19c14add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VQMWTWP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD0YqWwj0ZqIYHZkGIPnhOn4kn0U4M3Y2Ozu8AxPO12pwIgT1XSX1L%2FwORkhFz8LTeTZzGcNGw%2FWPnWCUsd1a27%2F6Yq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJgOkRwAtTEX78%2BtwSrcA%2BTNV71j0Byq403Otxln2dNYxWHDvtTJG24K8syWuMjdO8FuJVy7mG7M2hMwdWYBh3GkWwDQQXu7tCGh2wWteISsfsBox1CAnRHXmO0KjbX7%2BBCibgxGUx8mkX%2BfF1z2L8fvEvg2np1oovhXGxhwcPVhYh1vzkL5vTixVEKaX9dGfo2tiBlxHEOgwgLDBxVacG1%2Bb43mpsxkGz3Sb0O5H%2BIZYdz%2B4ry16K0T7xWYmyJoWxOgxb36dFf9uBK1InM8cFFFd2TbGV%2FUaAND6jxSttsmmuXKrmBd%2BaVBbv9Nf87J6EyuPxbuvBRE2oqw9X8VF8BhiPNdVcWl7iVveNhEhNNYHfFVPgV6esx3OVbLF83GKoe%2FCIPEL7q6iqkVPOW9GhAwP3dXqm5x35xx3hQQH%2ByyjtkQ2CM%2FrmIy7FleXoZpOmcFjz3p2g0v3SPbJ4lbTgesFyvq6AVvyT00Q69MaUnWyJT8H37FIVMARU9xkmOWxfcUbNfWIa6c8W4mhK9etWrBKt3YfnfU98zXDjoqNoLUWNmG5lenYJQIr2QQ7dcKKEXpqTje0GiUM7S%2FfKsVrqMCAd9WElq6M5gpJxHc%2BtrZleQHGoHlOfAr6MGGfF06wufUtGBkH2RWBEqeMLeq5sIGOqUBmbLXdJg3S3FjhgJTCwdvCO4HWFXPEDBq2VOcSMAqeJCSEXpbBqVbTwNFzBueMk%2BOcIy%2Bvv7AaPiFJLsG1Nmsa%2F8M%2Fi5lT78vCmXezJiAZ%2BgCy2rpLhhcxKnKLdJxJID7GEsy2jnhXeOftu8AzmNkQzeZYw3xmpcwSY%2Fgg%2FMpVk0mv3EE8IeRm5xdBH9BwjqNH%2BTnDHi1lFK8enOQYmO2x%2FCpXeEj&X-Amz-Signature=d26bf6107f6ea66a56592626eea55242bf794c0c3aa8b1aaa679432630946d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VQMWTWP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD0YqWwj0ZqIYHZkGIPnhOn4kn0U4M3Y2Ozu8AxPO12pwIgT1XSX1L%2FwORkhFz8LTeTZzGcNGw%2FWPnWCUsd1a27%2F6Yq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJgOkRwAtTEX78%2BtwSrcA%2BTNV71j0Byq403Otxln2dNYxWHDvtTJG24K8syWuMjdO8FuJVy7mG7M2hMwdWYBh3GkWwDQQXu7tCGh2wWteISsfsBox1CAnRHXmO0KjbX7%2BBCibgxGUx8mkX%2BfF1z2L8fvEvg2np1oovhXGxhwcPVhYh1vzkL5vTixVEKaX9dGfo2tiBlxHEOgwgLDBxVacG1%2Bb43mpsxkGz3Sb0O5H%2BIZYdz%2B4ry16K0T7xWYmyJoWxOgxb36dFf9uBK1InM8cFFFd2TbGV%2FUaAND6jxSttsmmuXKrmBd%2BaVBbv9Nf87J6EyuPxbuvBRE2oqw9X8VF8BhiPNdVcWl7iVveNhEhNNYHfFVPgV6esx3OVbLF83GKoe%2FCIPEL7q6iqkVPOW9GhAwP3dXqm5x35xx3hQQH%2ByyjtkQ2CM%2FrmIy7FleXoZpOmcFjz3p2g0v3SPbJ4lbTgesFyvq6AVvyT00Q69MaUnWyJT8H37FIVMARU9xkmOWxfcUbNfWIa6c8W4mhK9etWrBKt3YfnfU98zXDjoqNoLUWNmG5lenYJQIr2QQ7dcKKEXpqTje0GiUM7S%2FfKsVrqMCAd9WElq6M5gpJxHc%2BtrZleQHGoHlOfAr6MGGfF06wufUtGBkH2RWBEqeMLeq5sIGOqUBmbLXdJg3S3FjhgJTCwdvCO4HWFXPEDBq2VOcSMAqeJCSEXpbBqVbTwNFzBueMk%2BOcIy%2Bvv7AaPiFJLsG1Nmsa%2F8M%2Fi5lT78vCmXezJiAZ%2BgCy2rpLhhcxKnKLdJxJID7GEsy2jnhXeOftu8AzmNkQzeZYw3xmpcwSY%2Fgg%2FMpVk0mv3EE8IeRm5xdBH9BwjqNH%2BTnDHi1lFK8enOQYmO2x%2FCpXeEj&X-Amz-Signature=dda243a5384e7f23845d3437da0bca5b5c9b49c0c6362183b90ea31970ebdcc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VQMWTWP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD0YqWwj0ZqIYHZkGIPnhOn4kn0U4M3Y2Ozu8AxPO12pwIgT1XSX1L%2FwORkhFz8LTeTZzGcNGw%2FWPnWCUsd1a27%2F6Yq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJgOkRwAtTEX78%2BtwSrcA%2BTNV71j0Byq403Otxln2dNYxWHDvtTJG24K8syWuMjdO8FuJVy7mG7M2hMwdWYBh3GkWwDQQXu7tCGh2wWteISsfsBox1CAnRHXmO0KjbX7%2BBCibgxGUx8mkX%2BfF1z2L8fvEvg2np1oovhXGxhwcPVhYh1vzkL5vTixVEKaX9dGfo2tiBlxHEOgwgLDBxVacG1%2Bb43mpsxkGz3Sb0O5H%2BIZYdz%2B4ry16K0T7xWYmyJoWxOgxb36dFf9uBK1InM8cFFFd2TbGV%2FUaAND6jxSttsmmuXKrmBd%2BaVBbv9Nf87J6EyuPxbuvBRE2oqw9X8VF8BhiPNdVcWl7iVveNhEhNNYHfFVPgV6esx3OVbLF83GKoe%2FCIPEL7q6iqkVPOW9GhAwP3dXqm5x35xx3hQQH%2ByyjtkQ2CM%2FrmIy7FleXoZpOmcFjz3p2g0v3SPbJ4lbTgesFyvq6AVvyT00Q69MaUnWyJT8H37FIVMARU9xkmOWxfcUbNfWIa6c8W4mhK9etWrBKt3YfnfU98zXDjoqNoLUWNmG5lenYJQIr2QQ7dcKKEXpqTje0GiUM7S%2FfKsVrqMCAd9WElq6M5gpJxHc%2BtrZleQHGoHlOfAr6MGGfF06wufUtGBkH2RWBEqeMLeq5sIGOqUBmbLXdJg3S3FjhgJTCwdvCO4HWFXPEDBq2VOcSMAqeJCSEXpbBqVbTwNFzBueMk%2BOcIy%2Bvv7AaPiFJLsG1Nmsa%2F8M%2Fi5lT78vCmXezJiAZ%2BgCy2rpLhhcxKnKLdJxJID7GEsy2jnhXeOftu8AzmNkQzeZYw3xmpcwSY%2Fgg%2FMpVk0mv3EE8IeRm5xdBH9BwjqNH%2BTnDHi1lFK8enOQYmO2x%2FCpXeEj&X-Amz-Signature=54d53e40c96d6171fe8511d397c512746eaa758f9e4dd3c7c493e1376a631203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VQMWTWP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD0YqWwj0ZqIYHZkGIPnhOn4kn0U4M3Y2Ozu8AxPO12pwIgT1XSX1L%2FwORkhFz8LTeTZzGcNGw%2FWPnWCUsd1a27%2F6Yq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJgOkRwAtTEX78%2BtwSrcA%2BTNV71j0Byq403Otxln2dNYxWHDvtTJG24K8syWuMjdO8FuJVy7mG7M2hMwdWYBh3GkWwDQQXu7tCGh2wWteISsfsBox1CAnRHXmO0KjbX7%2BBCibgxGUx8mkX%2BfF1z2L8fvEvg2np1oovhXGxhwcPVhYh1vzkL5vTixVEKaX9dGfo2tiBlxHEOgwgLDBxVacG1%2Bb43mpsxkGz3Sb0O5H%2BIZYdz%2B4ry16K0T7xWYmyJoWxOgxb36dFf9uBK1InM8cFFFd2TbGV%2FUaAND6jxSttsmmuXKrmBd%2BaVBbv9Nf87J6EyuPxbuvBRE2oqw9X8VF8BhiPNdVcWl7iVveNhEhNNYHfFVPgV6esx3OVbLF83GKoe%2FCIPEL7q6iqkVPOW9GhAwP3dXqm5x35xx3hQQH%2ByyjtkQ2CM%2FrmIy7FleXoZpOmcFjz3p2g0v3SPbJ4lbTgesFyvq6AVvyT00Q69MaUnWyJT8H37FIVMARU9xkmOWxfcUbNfWIa6c8W4mhK9etWrBKt3YfnfU98zXDjoqNoLUWNmG5lenYJQIr2QQ7dcKKEXpqTje0GiUM7S%2FfKsVrqMCAd9WElq6M5gpJxHc%2BtrZleQHGoHlOfAr6MGGfF06wufUtGBkH2RWBEqeMLeq5sIGOqUBmbLXdJg3S3FjhgJTCwdvCO4HWFXPEDBq2VOcSMAqeJCSEXpbBqVbTwNFzBueMk%2BOcIy%2Bvv7AaPiFJLsG1Nmsa%2F8M%2Fi5lT78vCmXezJiAZ%2BgCy2rpLhhcxKnKLdJxJID7GEsy2jnhXeOftu8AzmNkQzeZYw3xmpcwSY%2Fgg%2FMpVk0mv3EE8IeRm5xdBH9BwjqNH%2BTnDHi1lFK8enOQYmO2x%2FCpXeEj&X-Amz-Signature=674ac30727b96d8a505272a765ec80bce9c550791ff6ae047dcfc7826217109b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VQMWTWP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD0YqWwj0ZqIYHZkGIPnhOn4kn0U4M3Y2Ozu8AxPO12pwIgT1XSX1L%2FwORkhFz8LTeTZzGcNGw%2FWPnWCUsd1a27%2F6Yq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJgOkRwAtTEX78%2BtwSrcA%2BTNV71j0Byq403Otxln2dNYxWHDvtTJG24K8syWuMjdO8FuJVy7mG7M2hMwdWYBh3GkWwDQQXu7tCGh2wWteISsfsBox1CAnRHXmO0KjbX7%2BBCibgxGUx8mkX%2BfF1z2L8fvEvg2np1oovhXGxhwcPVhYh1vzkL5vTixVEKaX9dGfo2tiBlxHEOgwgLDBxVacG1%2Bb43mpsxkGz3Sb0O5H%2BIZYdz%2B4ry16K0T7xWYmyJoWxOgxb36dFf9uBK1InM8cFFFd2TbGV%2FUaAND6jxSttsmmuXKrmBd%2BaVBbv9Nf87J6EyuPxbuvBRE2oqw9X8VF8BhiPNdVcWl7iVveNhEhNNYHfFVPgV6esx3OVbLF83GKoe%2FCIPEL7q6iqkVPOW9GhAwP3dXqm5x35xx3hQQH%2ByyjtkQ2CM%2FrmIy7FleXoZpOmcFjz3p2g0v3SPbJ4lbTgesFyvq6AVvyT00Q69MaUnWyJT8H37FIVMARU9xkmOWxfcUbNfWIa6c8W4mhK9etWrBKt3YfnfU98zXDjoqNoLUWNmG5lenYJQIr2QQ7dcKKEXpqTje0GiUM7S%2FfKsVrqMCAd9WElq6M5gpJxHc%2BtrZleQHGoHlOfAr6MGGfF06wufUtGBkH2RWBEqeMLeq5sIGOqUBmbLXdJg3S3FjhgJTCwdvCO4HWFXPEDBq2VOcSMAqeJCSEXpbBqVbTwNFzBueMk%2BOcIy%2Bvv7AaPiFJLsG1Nmsa%2F8M%2Fi5lT78vCmXezJiAZ%2BgCy2rpLhhcxKnKLdJxJID7GEsy2jnhXeOftu8AzmNkQzeZYw3xmpcwSY%2Fgg%2FMpVk0mv3EE8IeRm5xdBH9BwjqNH%2BTnDHi1lFK8enOQYmO2x%2FCpXeEj&X-Amz-Signature=c6338177a05cee0c34dfe0d1d4b9fd3a6e3cb0abe3961468c572be5d7cfcd1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VQMWTWP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD0YqWwj0ZqIYHZkGIPnhOn4kn0U4M3Y2Ozu8AxPO12pwIgT1XSX1L%2FwORkhFz8LTeTZzGcNGw%2FWPnWCUsd1a27%2F6Yq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJgOkRwAtTEX78%2BtwSrcA%2BTNV71j0Byq403Otxln2dNYxWHDvtTJG24K8syWuMjdO8FuJVy7mG7M2hMwdWYBh3GkWwDQQXu7tCGh2wWteISsfsBox1CAnRHXmO0KjbX7%2BBCibgxGUx8mkX%2BfF1z2L8fvEvg2np1oovhXGxhwcPVhYh1vzkL5vTixVEKaX9dGfo2tiBlxHEOgwgLDBxVacG1%2Bb43mpsxkGz3Sb0O5H%2BIZYdz%2B4ry16K0T7xWYmyJoWxOgxb36dFf9uBK1InM8cFFFd2TbGV%2FUaAND6jxSttsmmuXKrmBd%2BaVBbv9Nf87J6EyuPxbuvBRE2oqw9X8VF8BhiPNdVcWl7iVveNhEhNNYHfFVPgV6esx3OVbLF83GKoe%2FCIPEL7q6iqkVPOW9GhAwP3dXqm5x35xx3hQQH%2ByyjtkQ2CM%2FrmIy7FleXoZpOmcFjz3p2g0v3SPbJ4lbTgesFyvq6AVvyT00Q69MaUnWyJT8H37FIVMARU9xkmOWxfcUbNfWIa6c8W4mhK9etWrBKt3YfnfU98zXDjoqNoLUWNmG5lenYJQIr2QQ7dcKKEXpqTje0GiUM7S%2FfKsVrqMCAd9WElq6M5gpJxHc%2BtrZleQHGoHlOfAr6MGGfF06wufUtGBkH2RWBEqeMLeq5sIGOqUBmbLXdJg3S3FjhgJTCwdvCO4HWFXPEDBq2VOcSMAqeJCSEXpbBqVbTwNFzBueMk%2BOcIy%2Bvv7AaPiFJLsG1Nmsa%2F8M%2Fi5lT78vCmXezJiAZ%2BgCy2rpLhhcxKnKLdJxJID7GEsy2jnhXeOftu8AzmNkQzeZYw3xmpcwSY%2Fgg%2FMpVk0mv3EE8IeRm5xdBH9BwjqNH%2BTnDHi1lFK8enOQYmO2x%2FCpXeEj&X-Amz-Signature=c4873531b5e9eab5b8b4fe062efb001b8b7a0b4d7fe15178cca02e4cef90b190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
