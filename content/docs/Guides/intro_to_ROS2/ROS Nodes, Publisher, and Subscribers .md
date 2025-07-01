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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEWMFTZV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz%2FXz%2Fa4BwtXEUPQCYKor51H9eDr5Q2PecF1TUFTIXLwIhAPY5qqXh9tozCAnczaW7Pm%2Fsoi0W9KxA3PDNKWA9LghmKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzyvgkJmiQNgJ5Hlcq3AOrsfuLAhtxzJoQ9bdO8tBwIuWp%2BVTAckNrLuyXilFNt1SGb4mF9jYJNFSTwShCHcyx0wa1G0mh1nvXq%2BSDGHhHxrBurio%2B7MQETkPgafZM81dTUHuElRJ8OyNj3yfkbqNqD7vVQrasDd6qQiDXoeEF7DbyhhYYzu3os6qYHHNgRVPaZZLuBKJ7P6NuCmueF8R8HPaU%2B9IZbEWvt1TC2l%2BQjQDoWgQnLgJQ4PihE6zdyx2KCKogyqCHkebUL3YWfMah9tXRK8TXDMyRbJuFWfvJXCep%2FoCDCQl%2BjjFj4eX5klX%2Bwm4j3lZpYjnz4fvLRlefaDTakxvBKL%2FyYQWudUXtkzwhoqtVS%2FmP1VfTiVDFVTN%2F0m3JZVkXG7TDQ6BWazOZ1Ldfvww40NssNuCVBL%2F3s%2FmiAbl2E9MDThjOYz%2FYtBefeSxvhuV3hHl8LDoXTXMJOhHnYYG1BUsqnj7wkI5pjZBsUI69ZzMttZTwXFD34ES3AWsIMvXL1Zq%2FfWatYBuam5cinircZG7QuBhuTahSGJZZ7eh2VkCels555AyWfUIugcNj1Zx9i75LmOoQ1VRu3xIRhpWMDr6R%2BpdsKAFIxznD4Nlwn3NBVwfmWWQx5CWRzrPtAIszYZSe%2FzCZxJDDBjqkAT6RWEIE7mckjFO7C97cHP8k4ciHbqEc01pRYpnRKsZC%2BnDCsTwCXsUSMVa6nbrWXLynemxoZmZSkgwPu1lTReBWlHzr3tGVyz6ZUNvLkmHuAWjay8KdLbyzJJMYmTETgiTs4aNpJCgsy3TufYdpERaJkWB34a7A7RWIllLYAIGRUNCp8%2FEAFVU%2Bw%2BpUkE0NOTJiW7HPlbe2K4o%2Fx4VHkIrrZYAV&X-Amz-Signature=f14c067ee678dd131d1bc465377bf5663f14f9124e2be24c8b8b7f5205093b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEWMFTZV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz%2FXz%2Fa4BwtXEUPQCYKor51H9eDr5Q2PecF1TUFTIXLwIhAPY5qqXh9tozCAnczaW7Pm%2Fsoi0W9KxA3PDNKWA9LghmKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzyvgkJmiQNgJ5Hlcq3AOrsfuLAhtxzJoQ9bdO8tBwIuWp%2BVTAckNrLuyXilFNt1SGb4mF9jYJNFSTwShCHcyx0wa1G0mh1nvXq%2BSDGHhHxrBurio%2B7MQETkPgafZM81dTUHuElRJ8OyNj3yfkbqNqD7vVQrasDd6qQiDXoeEF7DbyhhYYzu3os6qYHHNgRVPaZZLuBKJ7P6NuCmueF8R8HPaU%2B9IZbEWvt1TC2l%2BQjQDoWgQnLgJQ4PihE6zdyx2KCKogyqCHkebUL3YWfMah9tXRK8TXDMyRbJuFWfvJXCep%2FoCDCQl%2BjjFj4eX5klX%2Bwm4j3lZpYjnz4fvLRlefaDTakxvBKL%2FyYQWudUXtkzwhoqtVS%2FmP1VfTiVDFVTN%2F0m3JZVkXG7TDQ6BWazOZ1Ldfvww40NssNuCVBL%2F3s%2FmiAbl2E9MDThjOYz%2FYtBefeSxvhuV3hHl8LDoXTXMJOhHnYYG1BUsqnj7wkI5pjZBsUI69ZzMttZTwXFD34ES3AWsIMvXL1Zq%2FfWatYBuam5cinircZG7QuBhuTahSGJZZ7eh2VkCels555AyWfUIugcNj1Zx9i75LmOoQ1VRu3xIRhpWMDr6R%2BpdsKAFIxznD4Nlwn3NBVwfmWWQx5CWRzrPtAIszYZSe%2FzCZxJDDBjqkAT6RWEIE7mckjFO7C97cHP8k4ciHbqEc01pRYpnRKsZC%2BnDCsTwCXsUSMVa6nbrWXLynemxoZmZSkgwPu1lTReBWlHzr3tGVyz6ZUNvLkmHuAWjay8KdLbyzJJMYmTETgiTs4aNpJCgsy3TufYdpERaJkWB34a7A7RWIllLYAIGRUNCp8%2FEAFVU%2Bw%2BpUkE0NOTJiW7HPlbe2K4o%2Fx4VHkIrrZYAV&X-Amz-Signature=205cccc98e16bc66a7f9788cbf4ecd73c70f9717707407c04f2d51e66cca7639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEWMFTZV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz%2FXz%2Fa4BwtXEUPQCYKor51H9eDr5Q2PecF1TUFTIXLwIhAPY5qqXh9tozCAnczaW7Pm%2Fsoi0W9KxA3PDNKWA9LghmKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzyvgkJmiQNgJ5Hlcq3AOrsfuLAhtxzJoQ9bdO8tBwIuWp%2BVTAckNrLuyXilFNt1SGb4mF9jYJNFSTwShCHcyx0wa1G0mh1nvXq%2BSDGHhHxrBurio%2B7MQETkPgafZM81dTUHuElRJ8OyNj3yfkbqNqD7vVQrasDd6qQiDXoeEF7DbyhhYYzu3os6qYHHNgRVPaZZLuBKJ7P6NuCmueF8R8HPaU%2B9IZbEWvt1TC2l%2BQjQDoWgQnLgJQ4PihE6zdyx2KCKogyqCHkebUL3YWfMah9tXRK8TXDMyRbJuFWfvJXCep%2FoCDCQl%2BjjFj4eX5klX%2Bwm4j3lZpYjnz4fvLRlefaDTakxvBKL%2FyYQWudUXtkzwhoqtVS%2FmP1VfTiVDFVTN%2F0m3JZVkXG7TDQ6BWazOZ1Ldfvww40NssNuCVBL%2F3s%2FmiAbl2E9MDThjOYz%2FYtBefeSxvhuV3hHl8LDoXTXMJOhHnYYG1BUsqnj7wkI5pjZBsUI69ZzMttZTwXFD34ES3AWsIMvXL1Zq%2FfWatYBuam5cinircZG7QuBhuTahSGJZZ7eh2VkCels555AyWfUIugcNj1Zx9i75LmOoQ1VRu3xIRhpWMDr6R%2BpdsKAFIxznD4Nlwn3NBVwfmWWQx5CWRzrPtAIszYZSe%2FzCZxJDDBjqkAT6RWEIE7mckjFO7C97cHP8k4ciHbqEc01pRYpnRKsZC%2BnDCsTwCXsUSMVa6nbrWXLynemxoZmZSkgwPu1lTReBWlHzr3tGVyz6ZUNvLkmHuAWjay8KdLbyzJJMYmTETgiTs4aNpJCgsy3TufYdpERaJkWB34a7A7RWIllLYAIGRUNCp8%2FEAFVU%2Bw%2BpUkE0NOTJiW7HPlbe2K4o%2Fx4VHkIrrZYAV&X-Amz-Signature=759dc50112230a54568431f6425b85471754e980daa591386a23c23f43e3dadf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEWMFTZV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz%2FXz%2Fa4BwtXEUPQCYKor51H9eDr5Q2PecF1TUFTIXLwIhAPY5qqXh9tozCAnczaW7Pm%2Fsoi0W9KxA3PDNKWA9LghmKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzyvgkJmiQNgJ5Hlcq3AOrsfuLAhtxzJoQ9bdO8tBwIuWp%2BVTAckNrLuyXilFNt1SGb4mF9jYJNFSTwShCHcyx0wa1G0mh1nvXq%2BSDGHhHxrBurio%2B7MQETkPgafZM81dTUHuElRJ8OyNj3yfkbqNqD7vVQrasDd6qQiDXoeEF7DbyhhYYzu3os6qYHHNgRVPaZZLuBKJ7P6NuCmueF8R8HPaU%2B9IZbEWvt1TC2l%2BQjQDoWgQnLgJQ4PihE6zdyx2KCKogyqCHkebUL3YWfMah9tXRK8TXDMyRbJuFWfvJXCep%2FoCDCQl%2BjjFj4eX5klX%2Bwm4j3lZpYjnz4fvLRlefaDTakxvBKL%2FyYQWudUXtkzwhoqtVS%2FmP1VfTiVDFVTN%2F0m3JZVkXG7TDQ6BWazOZ1Ldfvww40NssNuCVBL%2F3s%2FmiAbl2E9MDThjOYz%2FYtBefeSxvhuV3hHl8LDoXTXMJOhHnYYG1BUsqnj7wkI5pjZBsUI69ZzMttZTwXFD34ES3AWsIMvXL1Zq%2FfWatYBuam5cinircZG7QuBhuTahSGJZZ7eh2VkCels555AyWfUIugcNj1Zx9i75LmOoQ1VRu3xIRhpWMDr6R%2BpdsKAFIxznD4Nlwn3NBVwfmWWQx5CWRzrPtAIszYZSe%2FzCZxJDDBjqkAT6RWEIE7mckjFO7C97cHP8k4ciHbqEc01pRYpnRKsZC%2BnDCsTwCXsUSMVa6nbrWXLynemxoZmZSkgwPu1lTReBWlHzr3tGVyz6ZUNvLkmHuAWjay8KdLbyzJJMYmTETgiTs4aNpJCgsy3TufYdpERaJkWB34a7A7RWIllLYAIGRUNCp8%2FEAFVU%2Bw%2BpUkE0NOTJiW7HPlbe2K4o%2Fx4VHkIrrZYAV&X-Amz-Signature=8cc9e074783b139921428fe3e2657bb13cacb74011071f4d704c5ea488afb7b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEWMFTZV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz%2FXz%2Fa4BwtXEUPQCYKor51H9eDr5Q2PecF1TUFTIXLwIhAPY5qqXh9tozCAnczaW7Pm%2Fsoi0W9KxA3PDNKWA9LghmKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzyvgkJmiQNgJ5Hlcq3AOrsfuLAhtxzJoQ9bdO8tBwIuWp%2BVTAckNrLuyXilFNt1SGb4mF9jYJNFSTwShCHcyx0wa1G0mh1nvXq%2BSDGHhHxrBurio%2B7MQETkPgafZM81dTUHuElRJ8OyNj3yfkbqNqD7vVQrasDd6qQiDXoeEF7DbyhhYYzu3os6qYHHNgRVPaZZLuBKJ7P6NuCmueF8R8HPaU%2B9IZbEWvt1TC2l%2BQjQDoWgQnLgJQ4PihE6zdyx2KCKogyqCHkebUL3YWfMah9tXRK8TXDMyRbJuFWfvJXCep%2FoCDCQl%2BjjFj4eX5klX%2Bwm4j3lZpYjnz4fvLRlefaDTakxvBKL%2FyYQWudUXtkzwhoqtVS%2FmP1VfTiVDFVTN%2F0m3JZVkXG7TDQ6BWazOZ1Ldfvww40NssNuCVBL%2F3s%2FmiAbl2E9MDThjOYz%2FYtBefeSxvhuV3hHl8LDoXTXMJOhHnYYG1BUsqnj7wkI5pjZBsUI69ZzMttZTwXFD34ES3AWsIMvXL1Zq%2FfWatYBuam5cinircZG7QuBhuTahSGJZZ7eh2VkCels555AyWfUIugcNj1Zx9i75LmOoQ1VRu3xIRhpWMDr6R%2BpdsKAFIxznD4Nlwn3NBVwfmWWQx5CWRzrPtAIszYZSe%2FzCZxJDDBjqkAT6RWEIE7mckjFO7C97cHP8k4ciHbqEc01pRYpnRKsZC%2BnDCsTwCXsUSMVa6nbrWXLynemxoZmZSkgwPu1lTReBWlHzr3tGVyz6ZUNvLkmHuAWjay8KdLbyzJJMYmTETgiTs4aNpJCgsy3TufYdpERaJkWB34a7A7RWIllLYAIGRUNCp8%2FEAFVU%2Bw%2BpUkE0NOTJiW7HPlbe2K4o%2Fx4VHkIrrZYAV&X-Amz-Signature=03e81dc4c832f405d50786a8d0c110cf8a60aab1fa1d08e289d95b86460fb8e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEWMFTZV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz%2FXz%2Fa4BwtXEUPQCYKor51H9eDr5Q2PecF1TUFTIXLwIhAPY5qqXh9tozCAnczaW7Pm%2Fsoi0W9KxA3PDNKWA9LghmKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzyvgkJmiQNgJ5Hlcq3AOrsfuLAhtxzJoQ9bdO8tBwIuWp%2BVTAckNrLuyXilFNt1SGb4mF9jYJNFSTwShCHcyx0wa1G0mh1nvXq%2BSDGHhHxrBurio%2B7MQETkPgafZM81dTUHuElRJ8OyNj3yfkbqNqD7vVQrasDd6qQiDXoeEF7DbyhhYYzu3os6qYHHNgRVPaZZLuBKJ7P6NuCmueF8R8HPaU%2B9IZbEWvt1TC2l%2BQjQDoWgQnLgJQ4PihE6zdyx2KCKogyqCHkebUL3YWfMah9tXRK8TXDMyRbJuFWfvJXCep%2FoCDCQl%2BjjFj4eX5klX%2Bwm4j3lZpYjnz4fvLRlefaDTakxvBKL%2FyYQWudUXtkzwhoqtVS%2FmP1VfTiVDFVTN%2F0m3JZVkXG7TDQ6BWazOZ1Ldfvww40NssNuCVBL%2F3s%2FmiAbl2E9MDThjOYz%2FYtBefeSxvhuV3hHl8LDoXTXMJOhHnYYG1BUsqnj7wkI5pjZBsUI69ZzMttZTwXFD34ES3AWsIMvXL1Zq%2FfWatYBuam5cinircZG7QuBhuTahSGJZZ7eh2VkCels555AyWfUIugcNj1Zx9i75LmOoQ1VRu3xIRhpWMDr6R%2BpdsKAFIxznD4Nlwn3NBVwfmWWQx5CWRzrPtAIszYZSe%2FzCZxJDDBjqkAT6RWEIE7mckjFO7C97cHP8k4ciHbqEc01pRYpnRKsZC%2BnDCsTwCXsUSMVa6nbrWXLynemxoZmZSkgwPu1lTReBWlHzr3tGVyz6ZUNvLkmHuAWjay8KdLbyzJJMYmTETgiTs4aNpJCgsy3TufYdpERaJkWB34a7A7RWIllLYAIGRUNCp8%2FEAFVU%2Bw%2BpUkE0NOTJiW7HPlbe2K4o%2Fx4VHkIrrZYAV&X-Amz-Signature=371ef1abf321485153a93e09eece764bb6cfa2fc2c5e447fc51752ec2e170c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEWMFTZV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz%2FXz%2Fa4BwtXEUPQCYKor51H9eDr5Q2PecF1TUFTIXLwIhAPY5qqXh9tozCAnczaW7Pm%2Fsoi0W9KxA3PDNKWA9LghmKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzyvgkJmiQNgJ5Hlcq3AOrsfuLAhtxzJoQ9bdO8tBwIuWp%2BVTAckNrLuyXilFNt1SGb4mF9jYJNFSTwShCHcyx0wa1G0mh1nvXq%2BSDGHhHxrBurio%2B7MQETkPgafZM81dTUHuElRJ8OyNj3yfkbqNqD7vVQrasDd6qQiDXoeEF7DbyhhYYzu3os6qYHHNgRVPaZZLuBKJ7P6NuCmueF8R8HPaU%2B9IZbEWvt1TC2l%2BQjQDoWgQnLgJQ4PihE6zdyx2KCKogyqCHkebUL3YWfMah9tXRK8TXDMyRbJuFWfvJXCep%2FoCDCQl%2BjjFj4eX5klX%2Bwm4j3lZpYjnz4fvLRlefaDTakxvBKL%2FyYQWudUXtkzwhoqtVS%2FmP1VfTiVDFVTN%2F0m3JZVkXG7TDQ6BWazOZ1Ldfvww40NssNuCVBL%2F3s%2FmiAbl2E9MDThjOYz%2FYtBefeSxvhuV3hHl8LDoXTXMJOhHnYYG1BUsqnj7wkI5pjZBsUI69ZzMttZTwXFD34ES3AWsIMvXL1Zq%2FfWatYBuam5cinircZG7QuBhuTahSGJZZ7eh2VkCels555AyWfUIugcNj1Zx9i75LmOoQ1VRu3xIRhpWMDr6R%2BpdsKAFIxznD4Nlwn3NBVwfmWWQx5CWRzrPtAIszYZSe%2FzCZxJDDBjqkAT6RWEIE7mckjFO7C97cHP8k4ciHbqEc01pRYpnRKsZC%2BnDCsTwCXsUSMVa6nbrWXLynemxoZmZSkgwPu1lTReBWlHzr3tGVyz6ZUNvLkmHuAWjay8KdLbyzJJMYmTETgiTs4aNpJCgsy3TufYdpERaJkWB34a7A7RWIllLYAIGRUNCp8%2FEAFVU%2Bw%2BpUkE0NOTJiW7HPlbe2K4o%2Fx4VHkIrrZYAV&X-Amz-Signature=088b5992779ee8d371bb597c4843c8003a99aff2b3efa09013f475afcdcdec1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEWMFTZV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz%2FXz%2Fa4BwtXEUPQCYKor51H9eDr5Q2PecF1TUFTIXLwIhAPY5qqXh9tozCAnczaW7Pm%2Fsoi0W9KxA3PDNKWA9LghmKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzyvgkJmiQNgJ5Hlcq3AOrsfuLAhtxzJoQ9bdO8tBwIuWp%2BVTAckNrLuyXilFNt1SGb4mF9jYJNFSTwShCHcyx0wa1G0mh1nvXq%2BSDGHhHxrBurio%2B7MQETkPgafZM81dTUHuElRJ8OyNj3yfkbqNqD7vVQrasDd6qQiDXoeEF7DbyhhYYzu3os6qYHHNgRVPaZZLuBKJ7P6NuCmueF8R8HPaU%2B9IZbEWvt1TC2l%2BQjQDoWgQnLgJQ4PihE6zdyx2KCKogyqCHkebUL3YWfMah9tXRK8TXDMyRbJuFWfvJXCep%2FoCDCQl%2BjjFj4eX5klX%2Bwm4j3lZpYjnz4fvLRlefaDTakxvBKL%2FyYQWudUXtkzwhoqtVS%2FmP1VfTiVDFVTN%2F0m3JZVkXG7TDQ6BWazOZ1Ldfvww40NssNuCVBL%2F3s%2FmiAbl2E9MDThjOYz%2FYtBefeSxvhuV3hHl8LDoXTXMJOhHnYYG1BUsqnj7wkI5pjZBsUI69ZzMttZTwXFD34ES3AWsIMvXL1Zq%2FfWatYBuam5cinircZG7QuBhuTahSGJZZ7eh2VkCels555AyWfUIugcNj1Zx9i75LmOoQ1VRu3xIRhpWMDr6R%2BpdsKAFIxznD4Nlwn3NBVwfmWWQx5CWRzrPtAIszYZSe%2FzCZxJDDBjqkAT6RWEIE7mckjFO7C97cHP8k4ciHbqEc01pRYpnRKsZC%2BnDCsTwCXsUSMVa6nbrWXLynemxoZmZSkgwPu1lTReBWlHzr3tGVyz6ZUNvLkmHuAWjay8KdLbyzJJMYmTETgiTs4aNpJCgsy3TufYdpERaJkWB34a7A7RWIllLYAIGRUNCp8%2FEAFVU%2Bw%2BpUkE0NOTJiW7HPlbe2K4o%2Fx4VHkIrrZYAV&X-Amz-Signature=8e9a2949717e64edc1b067e817a5074e67e063225ed506cd8b646cf09b4d1bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
