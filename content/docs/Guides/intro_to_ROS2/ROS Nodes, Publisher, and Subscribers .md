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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNW55NA5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK9LUXZavc7u3i22Mjx8kBJhFv1JVCKy1UxuRWUS39qgIgah%2F6HIAEAjPgfJ6%2B4aEveNGVaT4M1KpTUmXwTtOP6pgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxL8fqOXAZk87zqFCrcAwf%2FYaT7NbThPTFAJu5QeF9TcPyxvHdz5iva%2FmqKuYbA%2BdMxU6nT3s7ec%2FrCbG6NOFGlFaOG2Pf2ItEnnHWtx03Lckc%2FSujKjRZsF5U0nbhcj0nJUy2MeIoZ0%2BTuw%2BvknbMbW0GoKuTDxK5inunxnEwp9Ln1JUw1RPL1GlwFYm3RA0GKyAiD3QIgG8QPhGw2gpfW5DN4HsZmNiAn8BhgYe6ONmC6gZ8YvSiVlP%2BwPP3HP3YtXmw%2B%2F1vvuxzdOd6Ki6eYNZVBeoN11yDtjnbJUhcif9yvNVcP9%2Fra2V6XXpHMJcb4Abkm7WJZkVk4VAes2rMT5LPjLd%2BR5O0Cd%2FWsZ4pId16NBq%2BODcCpc4SRfm3n0NtyHHUb7scTORXJiteplHievPx8Hl3qRPrzm%2BGiOZ5iEMxcjXsmbfCKDMewed6dX0JoAn9C4JQ8I%2Fg%2F1UaMk6yCOcNyrS7LLVEFmysW8udsCDIkL6iVp7vlXK8LYJNxN%2Bg0r4OKQ9MvtgwLxAn6vVLaPMpK24XgWYOWDKYyfqFr%2F%2BD6zbwar%2Fgk3Jc5%2BZo2TPrj9ZtutlGZ7Q4td%2B5nwA%2BVWrnSPOpGb7QqXf6t%2B1TAuWp5S3w8LXEUyNV031Ro4Hno7Weh2%2F4FNriiMPXoqcQGOqUBVlo%2FcvRmIwgSpW%2BdHG4lcwQKUARp%2BJiHL65WnHb0gkdqqiRw%2FvnDKzXbS2iDBJZmNu1cGAMZVVJsw1TlKOy7FXDMD4e3v9t2vs2wlThzrHi7%2B%2F0i5TuqftxhoE6IlvMWRFQHEiWExtb%2FAxNMws2oMA7Xh%2FCac8GL73Sa4m3U6y0bqcoRBsR75E5j57WwJcUpr35AAEqy2Cy47Lp2Db4dKN%2BxEYO%2B&X-Amz-Signature=355f5e7af83fa56a9d10d83085330986324d29dfb0ad9f59722c0c9e9766cacc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNW55NA5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK9LUXZavc7u3i22Mjx8kBJhFv1JVCKy1UxuRWUS39qgIgah%2F6HIAEAjPgfJ6%2B4aEveNGVaT4M1KpTUmXwTtOP6pgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxL8fqOXAZk87zqFCrcAwf%2FYaT7NbThPTFAJu5QeF9TcPyxvHdz5iva%2FmqKuYbA%2BdMxU6nT3s7ec%2FrCbG6NOFGlFaOG2Pf2ItEnnHWtx03Lckc%2FSujKjRZsF5U0nbhcj0nJUy2MeIoZ0%2BTuw%2BvknbMbW0GoKuTDxK5inunxnEwp9Ln1JUw1RPL1GlwFYm3RA0GKyAiD3QIgG8QPhGw2gpfW5DN4HsZmNiAn8BhgYe6ONmC6gZ8YvSiVlP%2BwPP3HP3YtXmw%2B%2F1vvuxzdOd6Ki6eYNZVBeoN11yDtjnbJUhcif9yvNVcP9%2Fra2V6XXpHMJcb4Abkm7WJZkVk4VAes2rMT5LPjLd%2BR5O0Cd%2FWsZ4pId16NBq%2BODcCpc4SRfm3n0NtyHHUb7scTORXJiteplHievPx8Hl3qRPrzm%2BGiOZ5iEMxcjXsmbfCKDMewed6dX0JoAn9C4JQ8I%2Fg%2F1UaMk6yCOcNyrS7LLVEFmysW8udsCDIkL6iVp7vlXK8LYJNxN%2Bg0r4OKQ9MvtgwLxAn6vVLaPMpK24XgWYOWDKYyfqFr%2F%2BD6zbwar%2Fgk3Jc5%2BZo2TPrj9ZtutlGZ7Q4td%2B5nwA%2BVWrnSPOpGb7QqXf6t%2B1TAuWp5S3w8LXEUyNV031Ro4Hno7Weh2%2F4FNriiMPXoqcQGOqUBVlo%2FcvRmIwgSpW%2BdHG4lcwQKUARp%2BJiHL65WnHb0gkdqqiRw%2FvnDKzXbS2iDBJZmNu1cGAMZVVJsw1TlKOy7FXDMD4e3v9t2vs2wlThzrHi7%2B%2F0i5TuqftxhoE6IlvMWRFQHEiWExtb%2FAxNMws2oMA7Xh%2FCac8GL73Sa4m3U6y0bqcoRBsR75E5j57WwJcUpr35AAEqy2Cy47Lp2Db4dKN%2BxEYO%2B&X-Amz-Signature=4ad14238195f2bde8d5ab4cc8d967dc0b39160929c375050ba7c05689e816d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNW55NA5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK9LUXZavc7u3i22Mjx8kBJhFv1JVCKy1UxuRWUS39qgIgah%2F6HIAEAjPgfJ6%2B4aEveNGVaT4M1KpTUmXwTtOP6pgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxL8fqOXAZk87zqFCrcAwf%2FYaT7NbThPTFAJu5QeF9TcPyxvHdz5iva%2FmqKuYbA%2BdMxU6nT3s7ec%2FrCbG6NOFGlFaOG2Pf2ItEnnHWtx03Lckc%2FSujKjRZsF5U0nbhcj0nJUy2MeIoZ0%2BTuw%2BvknbMbW0GoKuTDxK5inunxnEwp9Ln1JUw1RPL1GlwFYm3RA0GKyAiD3QIgG8QPhGw2gpfW5DN4HsZmNiAn8BhgYe6ONmC6gZ8YvSiVlP%2BwPP3HP3YtXmw%2B%2F1vvuxzdOd6Ki6eYNZVBeoN11yDtjnbJUhcif9yvNVcP9%2Fra2V6XXpHMJcb4Abkm7WJZkVk4VAes2rMT5LPjLd%2BR5O0Cd%2FWsZ4pId16NBq%2BODcCpc4SRfm3n0NtyHHUb7scTORXJiteplHievPx8Hl3qRPrzm%2BGiOZ5iEMxcjXsmbfCKDMewed6dX0JoAn9C4JQ8I%2Fg%2F1UaMk6yCOcNyrS7LLVEFmysW8udsCDIkL6iVp7vlXK8LYJNxN%2Bg0r4OKQ9MvtgwLxAn6vVLaPMpK24XgWYOWDKYyfqFr%2F%2BD6zbwar%2Fgk3Jc5%2BZo2TPrj9ZtutlGZ7Q4td%2B5nwA%2BVWrnSPOpGb7QqXf6t%2B1TAuWp5S3w8LXEUyNV031Ro4Hno7Weh2%2F4FNriiMPXoqcQGOqUBVlo%2FcvRmIwgSpW%2BdHG4lcwQKUARp%2BJiHL65WnHb0gkdqqiRw%2FvnDKzXbS2iDBJZmNu1cGAMZVVJsw1TlKOy7FXDMD4e3v9t2vs2wlThzrHi7%2B%2F0i5TuqftxhoE6IlvMWRFQHEiWExtb%2FAxNMws2oMA7Xh%2FCac8GL73Sa4m3U6y0bqcoRBsR75E5j57WwJcUpr35AAEqy2Cy47Lp2Db4dKN%2BxEYO%2B&X-Amz-Signature=35920fa3724134b531ee57efcf95c228ced8e98a3ae126870248153a55cbc6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNW55NA5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK9LUXZavc7u3i22Mjx8kBJhFv1JVCKy1UxuRWUS39qgIgah%2F6HIAEAjPgfJ6%2B4aEveNGVaT4M1KpTUmXwTtOP6pgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxL8fqOXAZk87zqFCrcAwf%2FYaT7NbThPTFAJu5QeF9TcPyxvHdz5iva%2FmqKuYbA%2BdMxU6nT3s7ec%2FrCbG6NOFGlFaOG2Pf2ItEnnHWtx03Lckc%2FSujKjRZsF5U0nbhcj0nJUy2MeIoZ0%2BTuw%2BvknbMbW0GoKuTDxK5inunxnEwp9Ln1JUw1RPL1GlwFYm3RA0GKyAiD3QIgG8QPhGw2gpfW5DN4HsZmNiAn8BhgYe6ONmC6gZ8YvSiVlP%2BwPP3HP3YtXmw%2B%2F1vvuxzdOd6Ki6eYNZVBeoN11yDtjnbJUhcif9yvNVcP9%2Fra2V6XXpHMJcb4Abkm7WJZkVk4VAes2rMT5LPjLd%2BR5O0Cd%2FWsZ4pId16NBq%2BODcCpc4SRfm3n0NtyHHUb7scTORXJiteplHievPx8Hl3qRPrzm%2BGiOZ5iEMxcjXsmbfCKDMewed6dX0JoAn9C4JQ8I%2Fg%2F1UaMk6yCOcNyrS7LLVEFmysW8udsCDIkL6iVp7vlXK8LYJNxN%2Bg0r4OKQ9MvtgwLxAn6vVLaPMpK24XgWYOWDKYyfqFr%2F%2BD6zbwar%2Fgk3Jc5%2BZo2TPrj9ZtutlGZ7Q4td%2B5nwA%2BVWrnSPOpGb7QqXf6t%2B1TAuWp5S3w8LXEUyNV031Ro4Hno7Weh2%2F4FNriiMPXoqcQGOqUBVlo%2FcvRmIwgSpW%2BdHG4lcwQKUARp%2BJiHL65WnHb0gkdqqiRw%2FvnDKzXbS2iDBJZmNu1cGAMZVVJsw1TlKOy7FXDMD4e3v9t2vs2wlThzrHi7%2B%2F0i5TuqftxhoE6IlvMWRFQHEiWExtb%2FAxNMws2oMA7Xh%2FCac8GL73Sa4m3U6y0bqcoRBsR75E5j57WwJcUpr35AAEqy2Cy47Lp2Db4dKN%2BxEYO%2B&X-Amz-Signature=0e2c9c5a337ef2497090b8b38803fa37bf2f2b9f6d0f9b29e9ff5caa5ffceda4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNW55NA5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK9LUXZavc7u3i22Mjx8kBJhFv1JVCKy1UxuRWUS39qgIgah%2F6HIAEAjPgfJ6%2B4aEveNGVaT4M1KpTUmXwTtOP6pgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxL8fqOXAZk87zqFCrcAwf%2FYaT7NbThPTFAJu5QeF9TcPyxvHdz5iva%2FmqKuYbA%2BdMxU6nT3s7ec%2FrCbG6NOFGlFaOG2Pf2ItEnnHWtx03Lckc%2FSujKjRZsF5U0nbhcj0nJUy2MeIoZ0%2BTuw%2BvknbMbW0GoKuTDxK5inunxnEwp9Ln1JUw1RPL1GlwFYm3RA0GKyAiD3QIgG8QPhGw2gpfW5DN4HsZmNiAn8BhgYe6ONmC6gZ8YvSiVlP%2BwPP3HP3YtXmw%2B%2F1vvuxzdOd6Ki6eYNZVBeoN11yDtjnbJUhcif9yvNVcP9%2Fra2V6XXpHMJcb4Abkm7WJZkVk4VAes2rMT5LPjLd%2BR5O0Cd%2FWsZ4pId16NBq%2BODcCpc4SRfm3n0NtyHHUb7scTORXJiteplHievPx8Hl3qRPrzm%2BGiOZ5iEMxcjXsmbfCKDMewed6dX0JoAn9C4JQ8I%2Fg%2F1UaMk6yCOcNyrS7LLVEFmysW8udsCDIkL6iVp7vlXK8LYJNxN%2Bg0r4OKQ9MvtgwLxAn6vVLaPMpK24XgWYOWDKYyfqFr%2F%2BD6zbwar%2Fgk3Jc5%2BZo2TPrj9ZtutlGZ7Q4td%2B5nwA%2BVWrnSPOpGb7QqXf6t%2B1TAuWp5S3w8LXEUyNV031Ro4Hno7Weh2%2F4FNriiMPXoqcQGOqUBVlo%2FcvRmIwgSpW%2BdHG4lcwQKUARp%2BJiHL65WnHb0gkdqqiRw%2FvnDKzXbS2iDBJZmNu1cGAMZVVJsw1TlKOy7FXDMD4e3v9t2vs2wlThzrHi7%2B%2F0i5TuqftxhoE6IlvMWRFQHEiWExtb%2FAxNMws2oMA7Xh%2FCac8GL73Sa4m3U6y0bqcoRBsR75E5j57WwJcUpr35AAEqy2Cy47Lp2Db4dKN%2BxEYO%2B&X-Amz-Signature=9509b0b02a00dfc9dd9608939963f78fd0e21619f8bf2fb4ff08e701f82547f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNW55NA5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK9LUXZavc7u3i22Mjx8kBJhFv1JVCKy1UxuRWUS39qgIgah%2F6HIAEAjPgfJ6%2B4aEveNGVaT4M1KpTUmXwTtOP6pgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxL8fqOXAZk87zqFCrcAwf%2FYaT7NbThPTFAJu5QeF9TcPyxvHdz5iva%2FmqKuYbA%2BdMxU6nT3s7ec%2FrCbG6NOFGlFaOG2Pf2ItEnnHWtx03Lckc%2FSujKjRZsF5U0nbhcj0nJUy2MeIoZ0%2BTuw%2BvknbMbW0GoKuTDxK5inunxnEwp9Ln1JUw1RPL1GlwFYm3RA0GKyAiD3QIgG8QPhGw2gpfW5DN4HsZmNiAn8BhgYe6ONmC6gZ8YvSiVlP%2BwPP3HP3YtXmw%2B%2F1vvuxzdOd6Ki6eYNZVBeoN11yDtjnbJUhcif9yvNVcP9%2Fra2V6XXpHMJcb4Abkm7WJZkVk4VAes2rMT5LPjLd%2BR5O0Cd%2FWsZ4pId16NBq%2BODcCpc4SRfm3n0NtyHHUb7scTORXJiteplHievPx8Hl3qRPrzm%2BGiOZ5iEMxcjXsmbfCKDMewed6dX0JoAn9C4JQ8I%2Fg%2F1UaMk6yCOcNyrS7LLVEFmysW8udsCDIkL6iVp7vlXK8LYJNxN%2Bg0r4OKQ9MvtgwLxAn6vVLaPMpK24XgWYOWDKYyfqFr%2F%2BD6zbwar%2Fgk3Jc5%2BZo2TPrj9ZtutlGZ7Q4td%2B5nwA%2BVWrnSPOpGb7QqXf6t%2B1TAuWp5S3w8LXEUyNV031Ro4Hno7Weh2%2F4FNriiMPXoqcQGOqUBVlo%2FcvRmIwgSpW%2BdHG4lcwQKUARp%2BJiHL65WnHb0gkdqqiRw%2FvnDKzXbS2iDBJZmNu1cGAMZVVJsw1TlKOy7FXDMD4e3v9t2vs2wlThzrHi7%2B%2F0i5TuqftxhoE6IlvMWRFQHEiWExtb%2FAxNMws2oMA7Xh%2FCac8GL73Sa4m3U6y0bqcoRBsR75E5j57WwJcUpr35AAEqy2Cy47Lp2Db4dKN%2BxEYO%2B&X-Amz-Signature=53c1cfce885c769cf21e33e763220f66c5018574e525677a3b9fc600fc3bb914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNW55NA5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK9LUXZavc7u3i22Mjx8kBJhFv1JVCKy1UxuRWUS39qgIgah%2F6HIAEAjPgfJ6%2B4aEveNGVaT4M1KpTUmXwTtOP6pgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxL8fqOXAZk87zqFCrcAwf%2FYaT7NbThPTFAJu5QeF9TcPyxvHdz5iva%2FmqKuYbA%2BdMxU6nT3s7ec%2FrCbG6NOFGlFaOG2Pf2ItEnnHWtx03Lckc%2FSujKjRZsF5U0nbhcj0nJUy2MeIoZ0%2BTuw%2BvknbMbW0GoKuTDxK5inunxnEwp9Ln1JUw1RPL1GlwFYm3RA0GKyAiD3QIgG8QPhGw2gpfW5DN4HsZmNiAn8BhgYe6ONmC6gZ8YvSiVlP%2BwPP3HP3YtXmw%2B%2F1vvuxzdOd6Ki6eYNZVBeoN11yDtjnbJUhcif9yvNVcP9%2Fra2V6XXpHMJcb4Abkm7WJZkVk4VAes2rMT5LPjLd%2BR5O0Cd%2FWsZ4pId16NBq%2BODcCpc4SRfm3n0NtyHHUb7scTORXJiteplHievPx8Hl3qRPrzm%2BGiOZ5iEMxcjXsmbfCKDMewed6dX0JoAn9C4JQ8I%2Fg%2F1UaMk6yCOcNyrS7LLVEFmysW8udsCDIkL6iVp7vlXK8LYJNxN%2Bg0r4OKQ9MvtgwLxAn6vVLaPMpK24XgWYOWDKYyfqFr%2F%2BD6zbwar%2Fgk3Jc5%2BZo2TPrj9ZtutlGZ7Q4td%2B5nwA%2BVWrnSPOpGb7QqXf6t%2B1TAuWp5S3w8LXEUyNV031Ro4Hno7Weh2%2F4FNriiMPXoqcQGOqUBVlo%2FcvRmIwgSpW%2BdHG4lcwQKUARp%2BJiHL65WnHb0gkdqqiRw%2FvnDKzXbS2iDBJZmNu1cGAMZVVJsw1TlKOy7FXDMD4e3v9t2vs2wlThzrHi7%2B%2F0i5TuqftxhoE6IlvMWRFQHEiWExtb%2FAxNMws2oMA7Xh%2FCac8GL73Sa4m3U6y0bqcoRBsR75E5j57WwJcUpr35AAEqy2Cy47Lp2Db4dKN%2BxEYO%2B&X-Amz-Signature=fbd64096bebccf8b2377ef437f6db928b65def3a9d512d4d723f52b52cb6ad14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNW55NA5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK9LUXZavc7u3i22Mjx8kBJhFv1JVCKy1UxuRWUS39qgIgah%2F6HIAEAjPgfJ6%2B4aEveNGVaT4M1KpTUmXwTtOP6pgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxL8fqOXAZk87zqFCrcAwf%2FYaT7NbThPTFAJu5QeF9TcPyxvHdz5iva%2FmqKuYbA%2BdMxU6nT3s7ec%2FrCbG6NOFGlFaOG2Pf2ItEnnHWtx03Lckc%2FSujKjRZsF5U0nbhcj0nJUy2MeIoZ0%2BTuw%2BvknbMbW0GoKuTDxK5inunxnEwp9Ln1JUw1RPL1GlwFYm3RA0GKyAiD3QIgG8QPhGw2gpfW5DN4HsZmNiAn8BhgYe6ONmC6gZ8YvSiVlP%2BwPP3HP3YtXmw%2B%2F1vvuxzdOd6Ki6eYNZVBeoN11yDtjnbJUhcif9yvNVcP9%2Fra2V6XXpHMJcb4Abkm7WJZkVk4VAes2rMT5LPjLd%2BR5O0Cd%2FWsZ4pId16NBq%2BODcCpc4SRfm3n0NtyHHUb7scTORXJiteplHievPx8Hl3qRPrzm%2BGiOZ5iEMxcjXsmbfCKDMewed6dX0JoAn9C4JQ8I%2Fg%2F1UaMk6yCOcNyrS7LLVEFmysW8udsCDIkL6iVp7vlXK8LYJNxN%2Bg0r4OKQ9MvtgwLxAn6vVLaPMpK24XgWYOWDKYyfqFr%2F%2BD6zbwar%2Fgk3Jc5%2BZo2TPrj9ZtutlGZ7Q4td%2B5nwA%2BVWrnSPOpGb7QqXf6t%2B1TAuWp5S3w8LXEUyNV031Ro4Hno7Weh2%2F4FNriiMPXoqcQGOqUBVlo%2FcvRmIwgSpW%2BdHG4lcwQKUARp%2BJiHL65WnHb0gkdqqiRw%2FvnDKzXbS2iDBJZmNu1cGAMZVVJsw1TlKOy7FXDMD4e3v9t2vs2wlThzrHi7%2B%2F0i5TuqftxhoE6IlvMWRFQHEiWExtb%2FAxNMws2oMA7Xh%2FCac8GL73Sa4m3U6y0bqcoRBsR75E5j57WwJcUpr35AAEqy2Cy47Lp2Db4dKN%2BxEYO%2B&X-Amz-Signature=824690635eb475043e4ae75d2ae772d051bfa450ea9fa9076f55fe4da5d51cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
