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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FU5SYT6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDdMz0kXWpm9U4JY2C8JRtcySyRN%2BUfjcuFnPmOvyvQgAiBV9SS5qBDleghORWl%2Bwwx1L9b1Q2qG1a2xLsmNs9D0vSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5P3E3ywAtxYJeyvFKtwD%2Bfn87K%2FOb688WeqLz3MBjn0VsRzRZdFHiEGv0I5Y%2BNU51i5dPfzv7LadHP%2BujR3EASv9De2ThlKHcFet5lvNmtVdvGGTlOIzVo2mTRlv1UD2Eyp0uCb%2Fu3Er%2F6LsckT1uXxUfXwHQ3ygb2iSTwZbaKtFVdeZ%2B5SXNFGElhFPjR%2B6r%2Bim29DR34chSm9pRvi1Xp6LyzFmOvVHcLA%2Fpw0hg4SqRgE1BA5OjVG2HJ0V4bUvLFaoY8zBgMofEqpobxlaNioJdiF4rnmfeTLjAlNHNMtZi4hjKzOoRLglpduuOoK%2FbV%2BgvPssOXvcI90jCgwXzQuqSg81ifmXeToO85tt%2FwSjNYXBAvmNYKyPHzylBJNpco5IAUGc67bzhNGUwHixi82Ve6teAUFul%2FIbDX74cVBhyC6G06clBVtr%2F6HsDERLGNTJrrk8N7uvQ6L2Am2UexwrXOFiRXlOVRal5qmRbxPAey5xM7xg%2FzLOMbtB9tVmo4TmcykPcGHzAUhx9W88RkatNY8D%2BcUpAbFPdsPxDpX6Tg%2B14Z6N63N4M4mum%2BrGbCfX%2FiDdMmhGT6CShsaYHmwIn9FWpm%2FVqwJacvSVL418NBBIt%2BuhvUsVyuHRVSRkGcdM86P6coIuv6Mw89bXvwY6pgF%2BPOSI0QioE9%2Bt7fk%2FzbqMLo5YCpSHCP5wn9sh%2Bqg3r%2BBi1BdCts3aHq%2FBut%2FjO9FVLVX%2F7MQCnYIm6OeWTTSt6zknt9vLIqNmY2z%2B5SfLRiyz4ewR5bkIXR%2FuOEJk4EH2rzGrl9AJMCEyymFmb0ssVxm5XLwLtA8Zvt3ey33UPkYVb0lap1taboVdPi6TUAPAWJCEZTiEeR8oFQk7oE3MjofBexpP&X-Amz-Signature=1f3b3d12f81d5bcb90e05206d921d2db8a706dd2c531432ff35944664fcd6ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FU5SYT6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDdMz0kXWpm9U4JY2C8JRtcySyRN%2BUfjcuFnPmOvyvQgAiBV9SS5qBDleghORWl%2Bwwx1L9b1Q2qG1a2xLsmNs9D0vSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5P3E3ywAtxYJeyvFKtwD%2Bfn87K%2FOb688WeqLz3MBjn0VsRzRZdFHiEGv0I5Y%2BNU51i5dPfzv7LadHP%2BujR3EASv9De2ThlKHcFet5lvNmtVdvGGTlOIzVo2mTRlv1UD2Eyp0uCb%2Fu3Er%2F6LsckT1uXxUfXwHQ3ygb2iSTwZbaKtFVdeZ%2B5SXNFGElhFPjR%2B6r%2Bim29DR34chSm9pRvi1Xp6LyzFmOvVHcLA%2Fpw0hg4SqRgE1BA5OjVG2HJ0V4bUvLFaoY8zBgMofEqpobxlaNioJdiF4rnmfeTLjAlNHNMtZi4hjKzOoRLglpduuOoK%2FbV%2BgvPssOXvcI90jCgwXzQuqSg81ifmXeToO85tt%2FwSjNYXBAvmNYKyPHzylBJNpco5IAUGc67bzhNGUwHixi82Ve6teAUFul%2FIbDX74cVBhyC6G06clBVtr%2F6HsDERLGNTJrrk8N7uvQ6L2Am2UexwrXOFiRXlOVRal5qmRbxPAey5xM7xg%2FzLOMbtB9tVmo4TmcykPcGHzAUhx9W88RkatNY8D%2BcUpAbFPdsPxDpX6Tg%2B14Z6N63N4M4mum%2BrGbCfX%2FiDdMmhGT6CShsaYHmwIn9FWpm%2FVqwJacvSVL418NBBIt%2BuhvUsVyuHRVSRkGcdM86P6coIuv6Mw89bXvwY6pgF%2BPOSI0QioE9%2Bt7fk%2FzbqMLo5YCpSHCP5wn9sh%2Bqg3r%2BBi1BdCts3aHq%2FBut%2FjO9FVLVX%2F7MQCnYIm6OeWTTSt6zknt9vLIqNmY2z%2B5SfLRiyz4ewR5bkIXR%2FuOEJk4EH2rzGrl9AJMCEyymFmb0ssVxm5XLwLtA8Zvt3ey33UPkYVb0lap1taboVdPi6TUAPAWJCEZTiEeR8oFQk7oE3MjofBexpP&X-Amz-Signature=2995da6ec81f34624ffaa3298488c066f0f6c7cd437ccdfc01a0afd17d810bf2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FU5SYT6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDdMz0kXWpm9U4JY2C8JRtcySyRN%2BUfjcuFnPmOvyvQgAiBV9SS5qBDleghORWl%2Bwwx1L9b1Q2qG1a2xLsmNs9D0vSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5P3E3ywAtxYJeyvFKtwD%2Bfn87K%2FOb688WeqLz3MBjn0VsRzRZdFHiEGv0I5Y%2BNU51i5dPfzv7LadHP%2BujR3EASv9De2ThlKHcFet5lvNmtVdvGGTlOIzVo2mTRlv1UD2Eyp0uCb%2Fu3Er%2F6LsckT1uXxUfXwHQ3ygb2iSTwZbaKtFVdeZ%2B5SXNFGElhFPjR%2B6r%2Bim29DR34chSm9pRvi1Xp6LyzFmOvVHcLA%2Fpw0hg4SqRgE1BA5OjVG2HJ0V4bUvLFaoY8zBgMofEqpobxlaNioJdiF4rnmfeTLjAlNHNMtZi4hjKzOoRLglpduuOoK%2FbV%2BgvPssOXvcI90jCgwXzQuqSg81ifmXeToO85tt%2FwSjNYXBAvmNYKyPHzylBJNpco5IAUGc67bzhNGUwHixi82Ve6teAUFul%2FIbDX74cVBhyC6G06clBVtr%2F6HsDERLGNTJrrk8N7uvQ6L2Am2UexwrXOFiRXlOVRal5qmRbxPAey5xM7xg%2FzLOMbtB9tVmo4TmcykPcGHzAUhx9W88RkatNY8D%2BcUpAbFPdsPxDpX6Tg%2B14Z6N63N4M4mum%2BrGbCfX%2FiDdMmhGT6CShsaYHmwIn9FWpm%2FVqwJacvSVL418NBBIt%2BuhvUsVyuHRVSRkGcdM86P6coIuv6Mw89bXvwY6pgF%2BPOSI0QioE9%2Bt7fk%2FzbqMLo5YCpSHCP5wn9sh%2Bqg3r%2BBi1BdCts3aHq%2FBut%2FjO9FVLVX%2F7MQCnYIm6OeWTTSt6zknt9vLIqNmY2z%2B5SfLRiyz4ewR5bkIXR%2FuOEJk4EH2rzGrl9AJMCEyymFmb0ssVxm5XLwLtA8Zvt3ey33UPkYVb0lap1taboVdPi6TUAPAWJCEZTiEeR8oFQk7oE3MjofBexpP&X-Amz-Signature=7d2c49c5f0cd4c0af2db4b72c8737da37972762867d0314030f77677bfe0f122&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FU5SYT6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDdMz0kXWpm9U4JY2C8JRtcySyRN%2BUfjcuFnPmOvyvQgAiBV9SS5qBDleghORWl%2Bwwx1L9b1Q2qG1a2xLsmNs9D0vSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5P3E3ywAtxYJeyvFKtwD%2Bfn87K%2FOb688WeqLz3MBjn0VsRzRZdFHiEGv0I5Y%2BNU51i5dPfzv7LadHP%2BujR3EASv9De2ThlKHcFet5lvNmtVdvGGTlOIzVo2mTRlv1UD2Eyp0uCb%2Fu3Er%2F6LsckT1uXxUfXwHQ3ygb2iSTwZbaKtFVdeZ%2B5SXNFGElhFPjR%2B6r%2Bim29DR34chSm9pRvi1Xp6LyzFmOvVHcLA%2Fpw0hg4SqRgE1BA5OjVG2HJ0V4bUvLFaoY8zBgMofEqpobxlaNioJdiF4rnmfeTLjAlNHNMtZi4hjKzOoRLglpduuOoK%2FbV%2BgvPssOXvcI90jCgwXzQuqSg81ifmXeToO85tt%2FwSjNYXBAvmNYKyPHzylBJNpco5IAUGc67bzhNGUwHixi82Ve6teAUFul%2FIbDX74cVBhyC6G06clBVtr%2F6HsDERLGNTJrrk8N7uvQ6L2Am2UexwrXOFiRXlOVRal5qmRbxPAey5xM7xg%2FzLOMbtB9tVmo4TmcykPcGHzAUhx9W88RkatNY8D%2BcUpAbFPdsPxDpX6Tg%2B14Z6N63N4M4mum%2BrGbCfX%2FiDdMmhGT6CShsaYHmwIn9FWpm%2FVqwJacvSVL418NBBIt%2BuhvUsVyuHRVSRkGcdM86P6coIuv6Mw89bXvwY6pgF%2BPOSI0QioE9%2Bt7fk%2FzbqMLo5YCpSHCP5wn9sh%2Bqg3r%2BBi1BdCts3aHq%2FBut%2FjO9FVLVX%2F7MQCnYIm6OeWTTSt6zknt9vLIqNmY2z%2B5SfLRiyz4ewR5bkIXR%2FuOEJk4EH2rzGrl9AJMCEyymFmb0ssVxm5XLwLtA8Zvt3ey33UPkYVb0lap1taboVdPi6TUAPAWJCEZTiEeR8oFQk7oE3MjofBexpP&X-Amz-Signature=2aef88553e158bfa4cc6fc5e4c1f87dad311717deabefed901194a30bfc63243&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FU5SYT6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDdMz0kXWpm9U4JY2C8JRtcySyRN%2BUfjcuFnPmOvyvQgAiBV9SS5qBDleghORWl%2Bwwx1L9b1Q2qG1a2xLsmNs9D0vSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5P3E3ywAtxYJeyvFKtwD%2Bfn87K%2FOb688WeqLz3MBjn0VsRzRZdFHiEGv0I5Y%2BNU51i5dPfzv7LadHP%2BujR3EASv9De2ThlKHcFet5lvNmtVdvGGTlOIzVo2mTRlv1UD2Eyp0uCb%2Fu3Er%2F6LsckT1uXxUfXwHQ3ygb2iSTwZbaKtFVdeZ%2B5SXNFGElhFPjR%2B6r%2Bim29DR34chSm9pRvi1Xp6LyzFmOvVHcLA%2Fpw0hg4SqRgE1BA5OjVG2HJ0V4bUvLFaoY8zBgMofEqpobxlaNioJdiF4rnmfeTLjAlNHNMtZi4hjKzOoRLglpduuOoK%2FbV%2BgvPssOXvcI90jCgwXzQuqSg81ifmXeToO85tt%2FwSjNYXBAvmNYKyPHzylBJNpco5IAUGc67bzhNGUwHixi82Ve6teAUFul%2FIbDX74cVBhyC6G06clBVtr%2F6HsDERLGNTJrrk8N7uvQ6L2Am2UexwrXOFiRXlOVRal5qmRbxPAey5xM7xg%2FzLOMbtB9tVmo4TmcykPcGHzAUhx9W88RkatNY8D%2BcUpAbFPdsPxDpX6Tg%2B14Z6N63N4M4mum%2BrGbCfX%2FiDdMmhGT6CShsaYHmwIn9FWpm%2FVqwJacvSVL418NBBIt%2BuhvUsVyuHRVSRkGcdM86P6coIuv6Mw89bXvwY6pgF%2BPOSI0QioE9%2Bt7fk%2FzbqMLo5YCpSHCP5wn9sh%2Bqg3r%2BBi1BdCts3aHq%2FBut%2FjO9FVLVX%2F7MQCnYIm6OeWTTSt6zknt9vLIqNmY2z%2B5SfLRiyz4ewR5bkIXR%2FuOEJk4EH2rzGrl9AJMCEyymFmb0ssVxm5XLwLtA8Zvt3ey33UPkYVb0lap1taboVdPi6TUAPAWJCEZTiEeR8oFQk7oE3MjofBexpP&X-Amz-Signature=8edf9dbca365b5f16024835dd96f4dd025f6cd932273ac2d0013717d7649edee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FU5SYT6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDdMz0kXWpm9U4JY2C8JRtcySyRN%2BUfjcuFnPmOvyvQgAiBV9SS5qBDleghORWl%2Bwwx1L9b1Q2qG1a2xLsmNs9D0vSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5P3E3ywAtxYJeyvFKtwD%2Bfn87K%2FOb688WeqLz3MBjn0VsRzRZdFHiEGv0I5Y%2BNU51i5dPfzv7LadHP%2BujR3EASv9De2ThlKHcFet5lvNmtVdvGGTlOIzVo2mTRlv1UD2Eyp0uCb%2Fu3Er%2F6LsckT1uXxUfXwHQ3ygb2iSTwZbaKtFVdeZ%2B5SXNFGElhFPjR%2B6r%2Bim29DR34chSm9pRvi1Xp6LyzFmOvVHcLA%2Fpw0hg4SqRgE1BA5OjVG2HJ0V4bUvLFaoY8zBgMofEqpobxlaNioJdiF4rnmfeTLjAlNHNMtZi4hjKzOoRLglpduuOoK%2FbV%2BgvPssOXvcI90jCgwXzQuqSg81ifmXeToO85tt%2FwSjNYXBAvmNYKyPHzylBJNpco5IAUGc67bzhNGUwHixi82Ve6teAUFul%2FIbDX74cVBhyC6G06clBVtr%2F6HsDERLGNTJrrk8N7uvQ6L2Am2UexwrXOFiRXlOVRal5qmRbxPAey5xM7xg%2FzLOMbtB9tVmo4TmcykPcGHzAUhx9W88RkatNY8D%2BcUpAbFPdsPxDpX6Tg%2B14Z6N63N4M4mum%2BrGbCfX%2FiDdMmhGT6CShsaYHmwIn9FWpm%2FVqwJacvSVL418NBBIt%2BuhvUsVyuHRVSRkGcdM86P6coIuv6Mw89bXvwY6pgF%2BPOSI0QioE9%2Bt7fk%2FzbqMLo5YCpSHCP5wn9sh%2Bqg3r%2BBi1BdCts3aHq%2FBut%2FjO9FVLVX%2F7MQCnYIm6OeWTTSt6zknt9vLIqNmY2z%2B5SfLRiyz4ewR5bkIXR%2FuOEJk4EH2rzGrl9AJMCEyymFmb0ssVxm5XLwLtA8Zvt3ey33UPkYVb0lap1taboVdPi6TUAPAWJCEZTiEeR8oFQk7oE3MjofBexpP&X-Amz-Signature=3cbe4ef09fdd8347d446c4502c00b6622d85a0c5a47a7ca0655bffef26289d8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FU5SYT6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDdMz0kXWpm9U4JY2C8JRtcySyRN%2BUfjcuFnPmOvyvQgAiBV9SS5qBDleghORWl%2Bwwx1L9b1Q2qG1a2xLsmNs9D0vSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5P3E3ywAtxYJeyvFKtwD%2Bfn87K%2FOb688WeqLz3MBjn0VsRzRZdFHiEGv0I5Y%2BNU51i5dPfzv7LadHP%2BujR3EASv9De2ThlKHcFet5lvNmtVdvGGTlOIzVo2mTRlv1UD2Eyp0uCb%2Fu3Er%2F6LsckT1uXxUfXwHQ3ygb2iSTwZbaKtFVdeZ%2B5SXNFGElhFPjR%2B6r%2Bim29DR34chSm9pRvi1Xp6LyzFmOvVHcLA%2Fpw0hg4SqRgE1BA5OjVG2HJ0V4bUvLFaoY8zBgMofEqpobxlaNioJdiF4rnmfeTLjAlNHNMtZi4hjKzOoRLglpduuOoK%2FbV%2BgvPssOXvcI90jCgwXzQuqSg81ifmXeToO85tt%2FwSjNYXBAvmNYKyPHzylBJNpco5IAUGc67bzhNGUwHixi82Ve6teAUFul%2FIbDX74cVBhyC6G06clBVtr%2F6HsDERLGNTJrrk8N7uvQ6L2Am2UexwrXOFiRXlOVRal5qmRbxPAey5xM7xg%2FzLOMbtB9tVmo4TmcykPcGHzAUhx9W88RkatNY8D%2BcUpAbFPdsPxDpX6Tg%2B14Z6N63N4M4mum%2BrGbCfX%2FiDdMmhGT6CShsaYHmwIn9FWpm%2FVqwJacvSVL418NBBIt%2BuhvUsVyuHRVSRkGcdM86P6coIuv6Mw89bXvwY6pgF%2BPOSI0QioE9%2Bt7fk%2FzbqMLo5YCpSHCP5wn9sh%2Bqg3r%2BBi1BdCts3aHq%2FBut%2FjO9FVLVX%2F7MQCnYIm6OeWTTSt6zknt9vLIqNmY2z%2B5SfLRiyz4ewR5bkIXR%2FuOEJk4EH2rzGrl9AJMCEyymFmb0ssVxm5XLwLtA8Zvt3ey33UPkYVb0lap1taboVdPi6TUAPAWJCEZTiEeR8oFQk7oE3MjofBexpP&X-Amz-Signature=e25c97a15fcafebe484cf828014da6a2aebb80be0cd85caa03be07c83567f22f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FU5SYT6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDdMz0kXWpm9U4JY2C8JRtcySyRN%2BUfjcuFnPmOvyvQgAiBV9SS5qBDleghORWl%2Bwwx1L9b1Q2qG1a2xLsmNs9D0vSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5P3E3ywAtxYJeyvFKtwD%2Bfn87K%2FOb688WeqLz3MBjn0VsRzRZdFHiEGv0I5Y%2BNU51i5dPfzv7LadHP%2BujR3EASv9De2ThlKHcFet5lvNmtVdvGGTlOIzVo2mTRlv1UD2Eyp0uCb%2Fu3Er%2F6LsckT1uXxUfXwHQ3ygb2iSTwZbaKtFVdeZ%2B5SXNFGElhFPjR%2B6r%2Bim29DR34chSm9pRvi1Xp6LyzFmOvVHcLA%2Fpw0hg4SqRgE1BA5OjVG2HJ0V4bUvLFaoY8zBgMofEqpobxlaNioJdiF4rnmfeTLjAlNHNMtZi4hjKzOoRLglpduuOoK%2FbV%2BgvPssOXvcI90jCgwXzQuqSg81ifmXeToO85tt%2FwSjNYXBAvmNYKyPHzylBJNpco5IAUGc67bzhNGUwHixi82Ve6teAUFul%2FIbDX74cVBhyC6G06clBVtr%2F6HsDERLGNTJrrk8N7uvQ6L2Am2UexwrXOFiRXlOVRal5qmRbxPAey5xM7xg%2FzLOMbtB9tVmo4TmcykPcGHzAUhx9W88RkatNY8D%2BcUpAbFPdsPxDpX6Tg%2B14Z6N63N4M4mum%2BrGbCfX%2FiDdMmhGT6CShsaYHmwIn9FWpm%2FVqwJacvSVL418NBBIt%2BuhvUsVyuHRVSRkGcdM86P6coIuv6Mw89bXvwY6pgF%2BPOSI0QioE9%2Bt7fk%2FzbqMLo5YCpSHCP5wn9sh%2Bqg3r%2BBi1BdCts3aHq%2FBut%2FjO9FVLVX%2F7MQCnYIm6OeWTTSt6zknt9vLIqNmY2z%2B5SfLRiyz4ewR5bkIXR%2FuOEJk4EH2rzGrl9AJMCEyymFmb0ssVxm5XLwLtA8Zvt3ey33UPkYVb0lap1taboVdPi6TUAPAWJCEZTiEeR8oFQk7oE3MjofBexpP&X-Amz-Signature=f0726bc63df9545f2ad5cf78bded2e7fb4cf65a10a2bf9c6282936ac46391c59&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
