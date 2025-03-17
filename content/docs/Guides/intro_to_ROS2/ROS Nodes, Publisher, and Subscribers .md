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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VECEJYH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTqqGjJ62ZynIOJpzC%2BBp6sU2%2FDSTXLn1HbgtdEVJKjQIgReV6mTxqnbTKmJkPpfo9nvWtn8lGh3hCLAe569GlMHUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOynfiarSXZuQEvVxircA1fdq4r098F1Z7%2F%2FKazJEvOdeDLg8AA44bpOuXLkOiL2hzKWYkxsBRN6CDXrI2igEt4AhWfYLU99d9jb72KEiPFUYnU7sib6bdqlNOKpoJzlj1v5lFj22ImsEnSZ9pHFJ4FSNKIMdnPmaC%2BdtLfuYlNmpGMGAB0qeZmYIO%2B0B5U3l2ApqaELuRofjm0Npbev%2FrzT%2F9rPlvgkGmVQk3xjl%2F8badO7bek5fV%2FS8UPNTe2uRL54CzpscC8RxPz163yYClOwJfwz8PXxh%2FCRy%2BfiKxU72icdTIHvT6Wyp0aZjCb450y3kSft%2BlKTDUSaIuFR4xXiG0MtEpkdhHzDVl%2F6sKk3u2b%2FxbDM42WDPjuFU5KExhWDKFkLVoViHG9lO6DzMyYr4TYJIpBWFIt8GS37r2lh%2B7zImbe9fruABSZcXfggyKqysc%2Fn7imsejrjM17uN%2BcEBUZJsJupZxGqba3bVyj8HZ1X85xd11zjLz8%2ByC%2FS3GsGfCBlLGOFg5PEi32P%2Bh9TZHzO6CHds%2BFIKvmDIvfJuxqyBmAb5hOQ%2Fh4soIxiQemJgxbummNzuiMNCybNLi5IWrLMoMJfinhbKSAoOd4%2B9SzR1GnY%2F24qDrSp66Etx5yV77gXL5twQGnSMPbs374GOqUBA0a2A8cJOIdHOM6vddWUNsAMe%2FUJRDphu2zejHHE8rulgi5HVrUKTP%2BqTkAGAXdWPbKZYL1ClrH%2FBAxLX1knZwoNdO3GR22kjpqDVjE5gneAf3fevhvYUw36roMxJ4FvVVPuchoPmyRlIJe%2BBDwXicmk5Pb5ytGEyJ7LlzzVLoxC9RVkF9clRLv6AwumEHih6UBD3Uw1yAQUDTLFCsg97GkC%2Bn00&X-Amz-Signature=56084d2d9640fe3e7144da37b46e38b1f01f4af5d7f5792f9efda58a966fbda7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VECEJYH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTqqGjJ62ZynIOJpzC%2BBp6sU2%2FDSTXLn1HbgtdEVJKjQIgReV6mTxqnbTKmJkPpfo9nvWtn8lGh3hCLAe569GlMHUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOynfiarSXZuQEvVxircA1fdq4r098F1Z7%2F%2FKazJEvOdeDLg8AA44bpOuXLkOiL2hzKWYkxsBRN6CDXrI2igEt4AhWfYLU99d9jb72KEiPFUYnU7sib6bdqlNOKpoJzlj1v5lFj22ImsEnSZ9pHFJ4FSNKIMdnPmaC%2BdtLfuYlNmpGMGAB0qeZmYIO%2B0B5U3l2ApqaELuRofjm0Npbev%2FrzT%2F9rPlvgkGmVQk3xjl%2F8badO7bek5fV%2FS8UPNTe2uRL54CzpscC8RxPz163yYClOwJfwz8PXxh%2FCRy%2BfiKxU72icdTIHvT6Wyp0aZjCb450y3kSft%2BlKTDUSaIuFR4xXiG0MtEpkdhHzDVl%2F6sKk3u2b%2FxbDM42WDPjuFU5KExhWDKFkLVoViHG9lO6DzMyYr4TYJIpBWFIt8GS37r2lh%2B7zImbe9fruABSZcXfggyKqysc%2Fn7imsejrjM17uN%2BcEBUZJsJupZxGqba3bVyj8HZ1X85xd11zjLz8%2ByC%2FS3GsGfCBlLGOFg5PEi32P%2Bh9TZHzO6CHds%2BFIKvmDIvfJuxqyBmAb5hOQ%2Fh4soIxiQemJgxbummNzuiMNCybNLi5IWrLMoMJfinhbKSAoOd4%2B9SzR1GnY%2F24qDrSp66Etx5yV77gXL5twQGnSMPbs374GOqUBA0a2A8cJOIdHOM6vddWUNsAMe%2FUJRDphu2zejHHE8rulgi5HVrUKTP%2BqTkAGAXdWPbKZYL1ClrH%2FBAxLX1knZwoNdO3GR22kjpqDVjE5gneAf3fevhvYUw36roMxJ4FvVVPuchoPmyRlIJe%2BBDwXicmk5Pb5ytGEyJ7LlzzVLoxC9RVkF9clRLv6AwumEHih6UBD3Uw1yAQUDTLFCsg97GkC%2Bn00&X-Amz-Signature=c9aa0c5f89c25f3acb1b0d6d6dc8ec28bd25f6c86e84f71156573b6cf2ed6996&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VECEJYH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTqqGjJ62ZynIOJpzC%2BBp6sU2%2FDSTXLn1HbgtdEVJKjQIgReV6mTxqnbTKmJkPpfo9nvWtn8lGh3hCLAe569GlMHUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOynfiarSXZuQEvVxircA1fdq4r098F1Z7%2F%2FKazJEvOdeDLg8AA44bpOuXLkOiL2hzKWYkxsBRN6CDXrI2igEt4AhWfYLU99d9jb72KEiPFUYnU7sib6bdqlNOKpoJzlj1v5lFj22ImsEnSZ9pHFJ4FSNKIMdnPmaC%2BdtLfuYlNmpGMGAB0qeZmYIO%2B0B5U3l2ApqaELuRofjm0Npbev%2FrzT%2F9rPlvgkGmVQk3xjl%2F8badO7bek5fV%2FS8UPNTe2uRL54CzpscC8RxPz163yYClOwJfwz8PXxh%2FCRy%2BfiKxU72icdTIHvT6Wyp0aZjCb450y3kSft%2BlKTDUSaIuFR4xXiG0MtEpkdhHzDVl%2F6sKk3u2b%2FxbDM42WDPjuFU5KExhWDKFkLVoViHG9lO6DzMyYr4TYJIpBWFIt8GS37r2lh%2B7zImbe9fruABSZcXfggyKqysc%2Fn7imsejrjM17uN%2BcEBUZJsJupZxGqba3bVyj8HZ1X85xd11zjLz8%2ByC%2FS3GsGfCBlLGOFg5PEi32P%2Bh9TZHzO6CHds%2BFIKvmDIvfJuxqyBmAb5hOQ%2Fh4soIxiQemJgxbummNzuiMNCybNLi5IWrLMoMJfinhbKSAoOd4%2B9SzR1GnY%2F24qDrSp66Etx5yV77gXL5twQGnSMPbs374GOqUBA0a2A8cJOIdHOM6vddWUNsAMe%2FUJRDphu2zejHHE8rulgi5HVrUKTP%2BqTkAGAXdWPbKZYL1ClrH%2FBAxLX1knZwoNdO3GR22kjpqDVjE5gneAf3fevhvYUw36roMxJ4FvVVPuchoPmyRlIJe%2BBDwXicmk5Pb5ytGEyJ7LlzzVLoxC9RVkF9clRLv6AwumEHih6UBD3Uw1yAQUDTLFCsg97GkC%2Bn00&X-Amz-Signature=c4ec5003838e0da929264f5b9105bcd811d2e64be8c713af6440f34f723a21bc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VECEJYH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTqqGjJ62ZynIOJpzC%2BBp6sU2%2FDSTXLn1HbgtdEVJKjQIgReV6mTxqnbTKmJkPpfo9nvWtn8lGh3hCLAe569GlMHUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOynfiarSXZuQEvVxircA1fdq4r098F1Z7%2F%2FKazJEvOdeDLg8AA44bpOuXLkOiL2hzKWYkxsBRN6CDXrI2igEt4AhWfYLU99d9jb72KEiPFUYnU7sib6bdqlNOKpoJzlj1v5lFj22ImsEnSZ9pHFJ4FSNKIMdnPmaC%2BdtLfuYlNmpGMGAB0qeZmYIO%2B0B5U3l2ApqaELuRofjm0Npbev%2FrzT%2F9rPlvgkGmVQk3xjl%2F8badO7bek5fV%2FS8UPNTe2uRL54CzpscC8RxPz163yYClOwJfwz8PXxh%2FCRy%2BfiKxU72icdTIHvT6Wyp0aZjCb450y3kSft%2BlKTDUSaIuFR4xXiG0MtEpkdhHzDVl%2F6sKk3u2b%2FxbDM42WDPjuFU5KExhWDKFkLVoViHG9lO6DzMyYr4TYJIpBWFIt8GS37r2lh%2B7zImbe9fruABSZcXfggyKqysc%2Fn7imsejrjM17uN%2BcEBUZJsJupZxGqba3bVyj8HZ1X85xd11zjLz8%2ByC%2FS3GsGfCBlLGOFg5PEi32P%2Bh9TZHzO6CHds%2BFIKvmDIvfJuxqyBmAb5hOQ%2Fh4soIxiQemJgxbummNzuiMNCybNLi5IWrLMoMJfinhbKSAoOd4%2B9SzR1GnY%2F24qDrSp66Etx5yV77gXL5twQGnSMPbs374GOqUBA0a2A8cJOIdHOM6vddWUNsAMe%2FUJRDphu2zejHHE8rulgi5HVrUKTP%2BqTkAGAXdWPbKZYL1ClrH%2FBAxLX1knZwoNdO3GR22kjpqDVjE5gneAf3fevhvYUw36roMxJ4FvVVPuchoPmyRlIJe%2BBDwXicmk5Pb5ytGEyJ7LlzzVLoxC9RVkF9clRLv6AwumEHih6UBD3Uw1yAQUDTLFCsg97GkC%2Bn00&X-Amz-Signature=3ec7a63b2594aa675b2c33c33b963676d6ba7d0f40276b5f63161fe47e1e8891&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VECEJYH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTqqGjJ62ZynIOJpzC%2BBp6sU2%2FDSTXLn1HbgtdEVJKjQIgReV6mTxqnbTKmJkPpfo9nvWtn8lGh3hCLAe569GlMHUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOynfiarSXZuQEvVxircA1fdq4r098F1Z7%2F%2FKazJEvOdeDLg8AA44bpOuXLkOiL2hzKWYkxsBRN6CDXrI2igEt4AhWfYLU99d9jb72KEiPFUYnU7sib6bdqlNOKpoJzlj1v5lFj22ImsEnSZ9pHFJ4FSNKIMdnPmaC%2BdtLfuYlNmpGMGAB0qeZmYIO%2B0B5U3l2ApqaELuRofjm0Npbev%2FrzT%2F9rPlvgkGmVQk3xjl%2F8badO7bek5fV%2FS8UPNTe2uRL54CzpscC8RxPz163yYClOwJfwz8PXxh%2FCRy%2BfiKxU72icdTIHvT6Wyp0aZjCb450y3kSft%2BlKTDUSaIuFR4xXiG0MtEpkdhHzDVl%2F6sKk3u2b%2FxbDM42WDPjuFU5KExhWDKFkLVoViHG9lO6DzMyYr4TYJIpBWFIt8GS37r2lh%2B7zImbe9fruABSZcXfggyKqysc%2Fn7imsejrjM17uN%2BcEBUZJsJupZxGqba3bVyj8HZ1X85xd11zjLz8%2ByC%2FS3GsGfCBlLGOFg5PEi32P%2Bh9TZHzO6CHds%2BFIKvmDIvfJuxqyBmAb5hOQ%2Fh4soIxiQemJgxbummNzuiMNCybNLi5IWrLMoMJfinhbKSAoOd4%2B9SzR1GnY%2F24qDrSp66Etx5yV77gXL5twQGnSMPbs374GOqUBA0a2A8cJOIdHOM6vddWUNsAMe%2FUJRDphu2zejHHE8rulgi5HVrUKTP%2BqTkAGAXdWPbKZYL1ClrH%2FBAxLX1knZwoNdO3GR22kjpqDVjE5gneAf3fevhvYUw36roMxJ4FvVVPuchoPmyRlIJe%2BBDwXicmk5Pb5ytGEyJ7LlzzVLoxC9RVkF9clRLv6AwumEHih6UBD3Uw1yAQUDTLFCsg97GkC%2Bn00&X-Amz-Signature=b581d2fe963e939e52df87fc9e0ccb3c5a6490925e0ca09309658610897d00f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VECEJYH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTqqGjJ62ZynIOJpzC%2BBp6sU2%2FDSTXLn1HbgtdEVJKjQIgReV6mTxqnbTKmJkPpfo9nvWtn8lGh3hCLAe569GlMHUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOynfiarSXZuQEvVxircA1fdq4r098F1Z7%2F%2FKazJEvOdeDLg8AA44bpOuXLkOiL2hzKWYkxsBRN6CDXrI2igEt4AhWfYLU99d9jb72KEiPFUYnU7sib6bdqlNOKpoJzlj1v5lFj22ImsEnSZ9pHFJ4FSNKIMdnPmaC%2BdtLfuYlNmpGMGAB0qeZmYIO%2B0B5U3l2ApqaELuRofjm0Npbev%2FrzT%2F9rPlvgkGmVQk3xjl%2F8badO7bek5fV%2FS8UPNTe2uRL54CzpscC8RxPz163yYClOwJfwz8PXxh%2FCRy%2BfiKxU72icdTIHvT6Wyp0aZjCb450y3kSft%2BlKTDUSaIuFR4xXiG0MtEpkdhHzDVl%2F6sKk3u2b%2FxbDM42WDPjuFU5KExhWDKFkLVoViHG9lO6DzMyYr4TYJIpBWFIt8GS37r2lh%2B7zImbe9fruABSZcXfggyKqysc%2Fn7imsejrjM17uN%2BcEBUZJsJupZxGqba3bVyj8HZ1X85xd11zjLz8%2ByC%2FS3GsGfCBlLGOFg5PEi32P%2Bh9TZHzO6CHds%2BFIKvmDIvfJuxqyBmAb5hOQ%2Fh4soIxiQemJgxbummNzuiMNCybNLi5IWrLMoMJfinhbKSAoOd4%2B9SzR1GnY%2F24qDrSp66Etx5yV77gXL5twQGnSMPbs374GOqUBA0a2A8cJOIdHOM6vddWUNsAMe%2FUJRDphu2zejHHE8rulgi5HVrUKTP%2BqTkAGAXdWPbKZYL1ClrH%2FBAxLX1knZwoNdO3GR22kjpqDVjE5gneAf3fevhvYUw36roMxJ4FvVVPuchoPmyRlIJe%2BBDwXicmk5Pb5ytGEyJ7LlzzVLoxC9RVkF9clRLv6AwumEHih6UBD3Uw1yAQUDTLFCsg97GkC%2Bn00&X-Amz-Signature=919a0c31bfb195bf170a05583e86a4ed9a79d0729ff15013de452ff78792ef8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VECEJYH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTqqGjJ62ZynIOJpzC%2BBp6sU2%2FDSTXLn1HbgtdEVJKjQIgReV6mTxqnbTKmJkPpfo9nvWtn8lGh3hCLAe569GlMHUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOynfiarSXZuQEvVxircA1fdq4r098F1Z7%2F%2FKazJEvOdeDLg8AA44bpOuXLkOiL2hzKWYkxsBRN6CDXrI2igEt4AhWfYLU99d9jb72KEiPFUYnU7sib6bdqlNOKpoJzlj1v5lFj22ImsEnSZ9pHFJ4FSNKIMdnPmaC%2BdtLfuYlNmpGMGAB0qeZmYIO%2B0B5U3l2ApqaELuRofjm0Npbev%2FrzT%2F9rPlvgkGmVQk3xjl%2F8badO7bek5fV%2FS8UPNTe2uRL54CzpscC8RxPz163yYClOwJfwz8PXxh%2FCRy%2BfiKxU72icdTIHvT6Wyp0aZjCb450y3kSft%2BlKTDUSaIuFR4xXiG0MtEpkdhHzDVl%2F6sKk3u2b%2FxbDM42WDPjuFU5KExhWDKFkLVoViHG9lO6DzMyYr4TYJIpBWFIt8GS37r2lh%2B7zImbe9fruABSZcXfggyKqysc%2Fn7imsejrjM17uN%2BcEBUZJsJupZxGqba3bVyj8HZ1X85xd11zjLz8%2ByC%2FS3GsGfCBlLGOFg5PEi32P%2Bh9TZHzO6CHds%2BFIKvmDIvfJuxqyBmAb5hOQ%2Fh4soIxiQemJgxbummNzuiMNCybNLi5IWrLMoMJfinhbKSAoOd4%2B9SzR1GnY%2F24qDrSp66Etx5yV77gXL5twQGnSMPbs374GOqUBA0a2A8cJOIdHOM6vddWUNsAMe%2FUJRDphu2zejHHE8rulgi5HVrUKTP%2BqTkAGAXdWPbKZYL1ClrH%2FBAxLX1knZwoNdO3GR22kjpqDVjE5gneAf3fevhvYUw36roMxJ4FvVVPuchoPmyRlIJe%2BBDwXicmk5Pb5ytGEyJ7LlzzVLoxC9RVkF9clRLv6AwumEHih6UBD3Uw1yAQUDTLFCsg97GkC%2Bn00&X-Amz-Signature=0d7229fe228f1834ada206bded3cb75abb1baf7d2d47b1b9c63ee2ff0e54510b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VECEJYH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTqqGjJ62ZynIOJpzC%2BBp6sU2%2FDSTXLn1HbgtdEVJKjQIgReV6mTxqnbTKmJkPpfo9nvWtn8lGh3hCLAe569GlMHUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOynfiarSXZuQEvVxircA1fdq4r098F1Z7%2F%2FKazJEvOdeDLg8AA44bpOuXLkOiL2hzKWYkxsBRN6CDXrI2igEt4AhWfYLU99d9jb72KEiPFUYnU7sib6bdqlNOKpoJzlj1v5lFj22ImsEnSZ9pHFJ4FSNKIMdnPmaC%2BdtLfuYlNmpGMGAB0qeZmYIO%2B0B5U3l2ApqaELuRofjm0Npbev%2FrzT%2F9rPlvgkGmVQk3xjl%2F8badO7bek5fV%2FS8UPNTe2uRL54CzpscC8RxPz163yYClOwJfwz8PXxh%2FCRy%2BfiKxU72icdTIHvT6Wyp0aZjCb450y3kSft%2BlKTDUSaIuFR4xXiG0MtEpkdhHzDVl%2F6sKk3u2b%2FxbDM42WDPjuFU5KExhWDKFkLVoViHG9lO6DzMyYr4TYJIpBWFIt8GS37r2lh%2B7zImbe9fruABSZcXfggyKqysc%2Fn7imsejrjM17uN%2BcEBUZJsJupZxGqba3bVyj8HZ1X85xd11zjLz8%2ByC%2FS3GsGfCBlLGOFg5PEi32P%2Bh9TZHzO6CHds%2BFIKvmDIvfJuxqyBmAb5hOQ%2Fh4soIxiQemJgxbummNzuiMNCybNLi5IWrLMoMJfinhbKSAoOd4%2B9SzR1GnY%2F24qDrSp66Etx5yV77gXL5twQGnSMPbs374GOqUBA0a2A8cJOIdHOM6vddWUNsAMe%2FUJRDphu2zejHHE8rulgi5HVrUKTP%2BqTkAGAXdWPbKZYL1ClrH%2FBAxLX1knZwoNdO3GR22kjpqDVjE5gneAf3fevhvYUw36roMxJ4FvVVPuchoPmyRlIJe%2BBDwXicmk5Pb5ytGEyJ7LlzzVLoxC9RVkF9clRLv6AwumEHih6UBD3Uw1yAQUDTLFCsg97GkC%2Bn00&X-Amz-Signature=b62b663c6fa2dd6f050e985a53c09b8eee5b90642e0ae86096fc7d1febdb569c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
