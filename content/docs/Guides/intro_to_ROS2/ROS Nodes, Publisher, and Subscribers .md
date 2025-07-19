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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R52SDT7Z%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhy0cLGFO2vRTV0SUDRAXGZBjEhYAvpFTbBzMDXSUmOQIhAM6dXvy3G46YvuFVhghE0DNjc2ZOjTtXhHDoku%2BhICyYKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzZ8fEF4QI1uhBgJsq3APLOh4KUDrHHMXW3AZgQVbh8KbH7Xl0IdzcPVYmyPGCN3zu11k0YOTquqNYHgUwYSSUhh62J%2BXgJmVyWQn4ucVm2Zj7ztrpLqeNr6YagMC5YtnZR%2FbrCChDsP5RCczI1ziUfWhFcfk%2Ft9ZFQxqarm%2FZ2a4S6h4fcKWc2VF%2FNwtrCbGCbRKZTV321VYXaOCuqWpk%2FLkYwVBmPdR1OAN9M87Gid%2BrJCDAsLCkNxBdELeKRU1dQdInEAHGd6swhoj2BvB%2BA5pLcvB8o1tDbFPjD6mdnN7Lps3IdziMALit1D8GPUjG2nYQeZTSOjI%2BICyBllqNJ0mtTZRvY5ttI15UU0pBnXdD%2F8HpAwD%2BQRLTZ45CNEXW1D2OKMz%2F2z7OXc0Bik96n2tC0Fv1KYrd7HeQMb54qaDI8hMazpzL4qtJWAbh1l5u5ZBJw6qYyKZUrHZ9jVhcWCxhZW6bU0om3Ez6iNFC9xY%2BbgEVWefvcJXj6C7NAKNNZc%2F0NfE63JXcNexDqTvGDgL%2BejxIXfvrlEovEblA9CNeaRGPcb67%2BtLXYIcn4SnGf0YZSvDDRRLWgs7Ich4qbH3I991MUKX2FFAU1W1gMfA7F2iU3GFrkqHYWJ9RnPUIbWoPu04LrcG0lDD%2FxezDBjqkAdxE8LY7bRGqvXgvyp8YepKZE%2BFxlTMXDEBUqor1XPlKLTe0r%2BWMdMz9QSC%2FPIdVdmglCpneegh5dJF9DpM26VPwyMgfQMrHrByE49GyPwQspU23X%2B%2FJ8eTzB7XBGD4aqP7ARV%2Bke1XPENhQIl%2BYoakkBS9OYQmZkfbNSOKvPnQfqKV8Fs5TlVd%2BstMDWgFAMMPYkUQN7jmvpWOeNADKBmpGp8HA&X-Amz-Signature=f173f19cfd686438a0d406beb30f7b3e1ad55bf0b2c16c4f505ac25f026db0f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R52SDT7Z%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhy0cLGFO2vRTV0SUDRAXGZBjEhYAvpFTbBzMDXSUmOQIhAM6dXvy3G46YvuFVhghE0DNjc2ZOjTtXhHDoku%2BhICyYKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzZ8fEF4QI1uhBgJsq3APLOh4KUDrHHMXW3AZgQVbh8KbH7Xl0IdzcPVYmyPGCN3zu11k0YOTquqNYHgUwYSSUhh62J%2BXgJmVyWQn4ucVm2Zj7ztrpLqeNr6YagMC5YtnZR%2FbrCChDsP5RCczI1ziUfWhFcfk%2Ft9ZFQxqarm%2FZ2a4S6h4fcKWc2VF%2FNwtrCbGCbRKZTV321VYXaOCuqWpk%2FLkYwVBmPdR1OAN9M87Gid%2BrJCDAsLCkNxBdELeKRU1dQdInEAHGd6swhoj2BvB%2BA5pLcvB8o1tDbFPjD6mdnN7Lps3IdziMALit1D8GPUjG2nYQeZTSOjI%2BICyBllqNJ0mtTZRvY5ttI15UU0pBnXdD%2F8HpAwD%2BQRLTZ45CNEXW1D2OKMz%2F2z7OXc0Bik96n2tC0Fv1KYrd7HeQMb54qaDI8hMazpzL4qtJWAbh1l5u5ZBJw6qYyKZUrHZ9jVhcWCxhZW6bU0om3Ez6iNFC9xY%2BbgEVWefvcJXj6C7NAKNNZc%2F0NfE63JXcNexDqTvGDgL%2BejxIXfvrlEovEblA9CNeaRGPcb67%2BtLXYIcn4SnGf0YZSvDDRRLWgs7Ich4qbH3I991MUKX2FFAU1W1gMfA7F2iU3GFrkqHYWJ9RnPUIbWoPu04LrcG0lDD%2FxezDBjqkAdxE8LY7bRGqvXgvyp8YepKZE%2BFxlTMXDEBUqor1XPlKLTe0r%2BWMdMz9QSC%2FPIdVdmglCpneegh5dJF9DpM26VPwyMgfQMrHrByE49GyPwQspU23X%2B%2FJ8eTzB7XBGD4aqP7ARV%2Bke1XPENhQIl%2BYoakkBS9OYQmZkfbNSOKvPnQfqKV8Fs5TlVd%2BstMDWgFAMMPYkUQN7jmvpWOeNADKBmpGp8HA&X-Amz-Signature=3459e9a7ccd8afcad62d0b95e89d4069c321590876a72366a1a44a1d850a3ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R52SDT7Z%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhy0cLGFO2vRTV0SUDRAXGZBjEhYAvpFTbBzMDXSUmOQIhAM6dXvy3G46YvuFVhghE0DNjc2ZOjTtXhHDoku%2BhICyYKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzZ8fEF4QI1uhBgJsq3APLOh4KUDrHHMXW3AZgQVbh8KbH7Xl0IdzcPVYmyPGCN3zu11k0YOTquqNYHgUwYSSUhh62J%2BXgJmVyWQn4ucVm2Zj7ztrpLqeNr6YagMC5YtnZR%2FbrCChDsP5RCczI1ziUfWhFcfk%2Ft9ZFQxqarm%2FZ2a4S6h4fcKWc2VF%2FNwtrCbGCbRKZTV321VYXaOCuqWpk%2FLkYwVBmPdR1OAN9M87Gid%2BrJCDAsLCkNxBdELeKRU1dQdInEAHGd6swhoj2BvB%2BA5pLcvB8o1tDbFPjD6mdnN7Lps3IdziMALit1D8GPUjG2nYQeZTSOjI%2BICyBllqNJ0mtTZRvY5ttI15UU0pBnXdD%2F8HpAwD%2BQRLTZ45CNEXW1D2OKMz%2F2z7OXc0Bik96n2tC0Fv1KYrd7HeQMb54qaDI8hMazpzL4qtJWAbh1l5u5ZBJw6qYyKZUrHZ9jVhcWCxhZW6bU0om3Ez6iNFC9xY%2BbgEVWefvcJXj6C7NAKNNZc%2F0NfE63JXcNexDqTvGDgL%2BejxIXfvrlEovEblA9CNeaRGPcb67%2BtLXYIcn4SnGf0YZSvDDRRLWgs7Ich4qbH3I991MUKX2FFAU1W1gMfA7F2iU3GFrkqHYWJ9RnPUIbWoPu04LrcG0lDD%2FxezDBjqkAdxE8LY7bRGqvXgvyp8YepKZE%2BFxlTMXDEBUqor1XPlKLTe0r%2BWMdMz9QSC%2FPIdVdmglCpneegh5dJF9DpM26VPwyMgfQMrHrByE49GyPwQspU23X%2B%2FJ8eTzB7XBGD4aqP7ARV%2Bke1XPENhQIl%2BYoakkBS9OYQmZkfbNSOKvPnQfqKV8Fs5TlVd%2BstMDWgFAMMPYkUQN7jmvpWOeNADKBmpGp8HA&X-Amz-Signature=b65164ece311b44782913084f7da9d5d200d30fc011709c54c2c4bd43e003298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R52SDT7Z%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhy0cLGFO2vRTV0SUDRAXGZBjEhYAvpFTbBzMDXSUmOQIhAM6dXvy3G46YvuFVhghE0DNjc2ZOjTtXhHDoku%2BhICyYKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzZ8fEF4QI1uhBgJsq3APLOh4KUDrHHMXW3AZgQVbh8KbH7Xl0IdzcPVYmyPGCN3zu11k0YOTquqNYHgUwYSSUhh62J%2BXgJmVyWQn4ucVm2Zj7ztrpLqeNr6YagMC5YtnZR%2FbrCChDsP5RCczI1ziUfWhFcfk%2Ft9ZFQxqarm%2FZ2a4S6h4fcKWc2VF%2FNwtrCbGCbRKZTV321VYXaOCuqWpk%2FLkYwVBmPdR1OAN9M87Gid%2BrJCDAsLCkNxBdELeKRU1dQdInEAHGd6swhoj2BvB%2BA5pLcvB8o1tDbFPjD6mdnN7Lps3IdziMALit1D8GPUjG2nYQeZTSOjI%2BICyBllqNJ0mtTZRvY5ttI15UU0pBnXdD%2F8HpAwD%2BQRLTZ45CNEXW1D2OKMz%2F2z7OXc0Bik96n2tC0Fv1KYrd7HeQMb54qaDI8hMazpzL4qtJWAbh1l5u5ZBJw6qYyKZUrHZ9jVhcWCxhZW6bU0om3Ez6iNFC9xY%2BbgEVWefvcJXj6C7NAKNNZc%2F0NfE63JXcNexDqTvGDgL%2BejxIXfvrlEovEblA9CNeaRGPcb67%2BtLXYIcn4SnGf0YZSvDDRRLWgs7Ich4qbH3I991MUKX2FFAU1W1gMfA7F2iU3GFrkqHYWJ9RnPUIbWoPu04LrcG0lDD%2FxezDBjqkAdxE8LY7bRGqvXgvyp8YepKZE%2BFxlTMXDEBUqor1XPlKLTe0r%2BWMdMz9QSC%2FPIdVdmglCpneegh5dJF9DpM26VPwyMgfQMrHrByE49GyPwQspU23X%2B%2FJ8eTzB7XBGD4aqP7ARV%2Bke1XPENhQIl%2BYoakkBS9OYQmZkfbNSOKvPnQfqKV8Fs5TlVd%2BstMDWgFAMMPYkUQN7jmvpWOeNADKBmpGp8HA&X-Amz-Signature=897ae29e3cd2e7aff1b3a3d2f08e7222ac687fc92f32cbb99fb2d565c4f64d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R52SDT7Z%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhy0cLGFO2vRTV0SUDRAXGZBjEhYAvpFTbBzMDXSUmOQIhAM6dXvy3G46YvuFVhghE0DNjc2ZOjTtXhHDoku%2BhICyYKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzZ8fEF4QI1uhBgJsq3APLOh4KUDrHHMXW3AZgQVbh8KbH7Xl0IdzcPVYmyPGCN3zu11k0YOTquqNYHgUwYSSUhh62J%2BXgJmVyWQn4ucVm2Zj7ztrpLqeNr6YagMC5YtnZR%2FbrCChDsP5RCczI1ziUfWhFcfk%2Ft9ZFQxqarm%2FZ2a4S6h4fcKWc2VF%2FNwtrCbGCbRKZTV321VYXaOCuqWpk%2FLkYwVBmPdR1OAN9M87Gid%2BrJCDAsLCkNxBdELeKRU1dQdInEAHGd6swhoj2BvB%2BA5pLcvB8o1tDbFPjD6mdnN7Lps3IdziMALit1D8GPUjG2nYQeZTSOjI%2BICyBllqNJ0mtTZRvY5ttI15UU0pBnXdD%2F8HpAwD%2BQRLTZ45CNEXW1D2OKMz%2F2z7OXc0Bik96n2tC0Fv1KYrd7HeQMb54qaDI8hMazpzL4qtJWAbh1l5u5ZBJw6qYyKZUrHZ9jVhcWCxhZW6bU0om3Ez6iNFC9xY%2BbgEVWefvcJXj6C7NAKNNZc%2F0NfE63JXcNexDqTvGDgL%2BejxIXfvrlEovEblA9CNeaRGPcb67%2BtLXYIcn4SnGf0YZSvDDRRLWgs7Ich4qbH3I991MUKX2FFAU1W1gMfA7F2iU3GFrkqHYWJ9RnPUIbWoPu04LrcG0lDD%2FxezDBjqkAdxE8LY7bRGqvXgvyp8YepKZE%2BFxlTMXDEBUqor1XPlKLTe0r%2BWMdMz9QSC%2FPIdVdmglCpneegh5dJF9DpM26VPwyMgfQMrHrByE49GyPwQspU23X%2B%2FJ8eTzB7XBGD4aqP7ARV%2Bke1XPENhQIl%2BYoakkBS9OYQmZkfbNSOKvPnQfqKV8Fs5TlVd%2BstMDWgFAMMPYkUQN7jmvpWOeNADKBmpGp8HA&X-Amz-Signature=0f3ac9e44dac1defccd81968ff124ac47960cfd94efd35c568413197f8e74685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R52SDT7Z%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhy0cLGFO2vRTV0SUDRAXGZBjEhYAvpFTbBzMDXSUmOQIhAM6dXvy3G46YvuFVhghE0DNjc2ZOjTtXhHDoku%2BhICyYKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzZ8fEF4QI1uhBgJsq3APLOh4KUDrHHMXW3AZgQVbh8KbH7Xl0IdzcPVYmyPGCN3zu11k0YOTquqNYHgUwYSSUhh62J%2BXgJmVyWQn4ucVm2Zj7ztrpLqeNr6YagMC5YtnZR%2FbrCChDsP5RCczI1ziUfWhFcfk%2Ft9ZFQxqarm%2FZ2a4S6h4fcKWc2VF%2FNwtrCbGCbRKZTV321VYXaOCuqWpk%2FLkYwVBmPdR1OAN9M87Gid%2BrJCDAsLCkNxBdELeKRU1dQdInEAHGd6swhoj2BvB%2BA5pLcvB8o1tDbFPjD6mdnN7Lps3IdziMALit1D8GPUjG2nYQeZTSOjI%2BICyBllqNJ0mtTZRvY5ttI15UU0pBnXdD%2F8HpAwD%2BQRLTZ45CNEXW1D2OKMz%2F2z7OXc0Bik96n2tC0Fv1KYrd7HeQMb54qaDI8hMazpzL4qtJWAbh1l5u5ZBJw6qYyKZUrHZ9jVhcWCxhZW6bU0om3Ez6iNFC9xY%2BbgEVWefvcJXj6C7NAKNNZc%2F0NfE63JXcNexDqTvGDgL%2BejxIXfvrlEovEblA9CNeaRGPcb67%2BtLXYIcn4SnGf0YZSvDDRRLWgs7Ich4qbH3I991MUKX2FFAU1W1gMfA7F2iU3GFrkqHYWJ9RnPUIbWoPu04LrcG0lDD%2FxezDBjqkAdxE8LY7bRGqvXgvyp8YepKZE%2BFxlTMXDEBUqor1XPlKLTe0r%2BWMdMz9QSC%2FPIdVdmglCpneegh5dJF9DpM26VPwyMgfQMrHrByE49GyPwQspU23X%2B%2FJ8eTzB7XBGD4aqP7ARV%2Bke1XPENhQIl%2BYoakkBS9OYQmZkfbNSOKvPnQfqKV8Fs5TlVd%2BstMDWgFAMMPYkUQN7jmvpWOeNADKBmpGp8HA&X-Amz-Signature=d8daa1a3f4367dbf9a608a8617148e46538f93b6178c96a9ed0081da4f8d9355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R52SDT7Z%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhy0cLGFO2vRTV0SUDRAXGZBjEhYAvpFTbBzMDXSUmOQIhAM6dXvy3G46YvuFVhghE0DNjc2ZOjTtXhHDoku%2BhICyYKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzZ8fEF4QI1uhBgJsq3APLOh4KUDrHHMXW3AZgQVbh8KbH7Xl0IdzcPVYmyPGCN3zu11k0YOTquqNYHgUwYSSUhh62J%2BXgJmVyWQn4ucVm2Zj7ztrpLqeNr6YagMC5YtnZR%2FbrCChDsP5RCczI1ziUfWhFcfk%2Ft9ZFQxqarm%2FZ2a4S6h4fcKWc2VF%2FNwtrCbGCbRKZTV321VYXaOCuqWpk%2FLkYwVBmPdR1OAN9M87Gid%2BrJCDAsLCkNxBdELeKRU1dQdInEAHGd6swhoj2BvB%2BA5pLcvB8o1tDbFPjD6mdnN7Lps3IdziMALit1D8GPUjG2nYQeZTSOjI%2BICyBllqNJ0mtTZRvY5ttI15UU0pBnXdD%2F8HpAwD%2BQRLTZ45CNEXW1D2OKMz%2F2z7OXc0Bik96n2tC0Fv1KYrd7HeQMb54qaDI8hMazpzL4qtJWAbh1l5u5ZBJw6qYyKZUrHZ9jVhcWCxhZW6bU0om3Ez6iNFC9xY%2BbgEVWefvcJXj6C7NAKNNZc%2F0NfE63JXcNexDqTvGDgL%2BejxIXfvrlEovEblA9CNeaRGPcb67%2BtLXYIcn4SnGf0YZSvDDRRLWgs7Ich4qbH3I991MUKX2FFAU1W1gMfA7F2iU3GFrkqHYWJ9RnPUIbWoPu04LrcG0lDD%2FxezDBjqkAdxE8LY7bRGqvXgvyp8YepKZE%2BFxlTMXDEBUqor1XPlKLTe0r%2BWMdMz9QSC%2FPIdVdmglCpneegh5dJF9DpM26VPwyMgfQMrHrByE49GyPwQspU23X%2B%2FJ8eTzB7XBGD4aqP7ARV%2Bke1XPENhQIl%2BYoakkBS9OYQmZkfbNSOKvPnQfqKV8Fs5TlVd%2BstMDWgFAMMPYkUQN7jmvpWOeNADKBmpGp8HA&X-Amz-Signature=2408a132146b41acdbfd5de412167ad0410b3c56e1c9b7db0d3fbe69626ab513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R52SDT7Z%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhy0cLGFO2vRTV0SUDRAXGZBjEhYAvpFTbBzMDXSUmOQIhAM6dXvy3G46YvuFVhghE0DNjc2ZOjTtXhHDoku%2BhICyYKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzZ8fEF4QI1uhBgJsq3APLOh4KUDrHHMXW3AZgQVbh8KbH7Xl0IdzcPVYmyPGCN3zu11k0YOTquqNYHgUwYSSUhh62J%2BXgJmVyWQn4ucVm2Zj7ztrpLqeNr6YagMC5YtnZR%2FbrCChDsP5RCczI1ziUfWhFcfk%2Ft9ZFQxqarm%2FZ2a4S6h4fcKWc2VF%2FNwtrCbGCbRKZTV321VYXaOCuqWpk%2FLkYwVBmPdR1OAN9M87Gid%2BrJCDAsLCkNxBdELeKRU1dQdInEAHGd6swhoj2BvB%2BA5pLcvB8o1tDbFPjD6mdnN7Lps3IdziMALit1D8GPUjG2nYQeZTSOjI%2BICyBllqNJ0mtTZRvY5ttI15UU0pBnXdD%2F8HpAwD%2BQRLTZ45CNEXW1D2OKMz%2F2z7OXc0Bik96n2tC0Fv1KYrd7HeQMb54qaDI8hMazpzL4qtJWAbh1l5u5ZBJw6qYyKZUrHZ9jVhcWCxhZW6bU0om3Ez6iNFC9xY%2BbgEVWefvcJXj6C7NAKNNZc%2F0NfE63JXcNexDqTvGDgL%2BejxIXfvrlEovEblA9CNeaRGPcb67%2BtLXYIcn4SnGf0YZSvDDRRLWgs7Ich4qbH3I991MUKX2FFAU1W1gMfA7F2iU3GFrkqHYWJ9RnPUIbWoPu04LrcG0lDD%2FxezDBjqkAdxE8LY7bRGqvXgvyp8YepKZE%2BFxlTMXDEBUqor1XPlKLTe0r%2BWMdMz9QSC%2FPIdVdmglCpneegh5dJF9DpM26VPwyMgfQMrHrByE49GyPwQspU23X%2B%2FJ8eTzB7XBGD4aqP7ARV%2Bke1XPENhQIl%2BYoakkBS9OYQmZkfbNSOKvPnQfqKV8Fs5TlVd%2BstMDWgFAMMPYkUQN7jmvpWOeNADKBmpGp8HA&X-Amz-Signature=254ba8a9c1cbdb90f2c9edc9f86c32da2bf2abdf11f29d30197f921f0e06eb23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
