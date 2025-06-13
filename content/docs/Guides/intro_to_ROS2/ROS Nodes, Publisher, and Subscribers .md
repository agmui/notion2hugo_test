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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3ZCTZD%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCNB9fjyvnI9F6v%2FZJYPKR298EvUNX8uA83jNz7W40D7wIhAKIe7DLg7ZglGRU3vLy7ujfBvuUYNMd1j56cK%2FH3D6tXKv8DCBAQABoMNjM3NDIzMTgzODA1IgxTcDdQNY3KwF4oVw4q3AMIgtR9%2BlmfMJ3dlfk5MUwMds1pID6Sqh4bQ0jp38qWSt183jCUAd%2F0AHTh3aJcmDXmJzaGu13SjWulO2u8sgfmn3wQDGkbhbtoYfyTD7zgdlsUBl3mwYfPPsdfJwa%2Blae78P3dyzsr7aPujh9fcl%2BLuRWvJaK1Xx2bzLaXZydLyZ8wVRcPa67SvwYf2sY3ra5JwxtnT4XZULfa1UFpdq4DQCnSYmZmluQccaHPi1Kj44Vp4xyXoQWjdpOTGUm001R3rk7yYeyT0uIBbRb%2FIEgpT4vMBSRMQmmrWGqkcD8Fc74Xjy%2BYAOJLjA3nZCmepYSWbSXdZtOh%2FnMROFYt7fLZltbLzW%2FaPQQSH8%2FSXRl4ckcN%2FGlCf%2FrGRFrtfM0acUwc%2BrUuDrON2yM4AV9N8NI%2B5JhkfRSEKmdLYLHTPQguFkNJLMzgVGiaM53X2%2B6F1bqs3Pp6o3lujI6Okkxtz9ItPHYjahiG5535THUbDxqKiYCb%2BCM1aGEYgCVzXtzQWxsEaXNNOsd%2FqxDeONWGp4vgRTrvdmMYSHSBEmGL1%2FN9SkxnXGdfnx1NOgegEWfhk42LiSrQo2yYB1nUoUVuhDaoMrQlf4msE3DDI9sY5A5q%2ByGk3Jgj25YT2xFjjjDzkq%2FCBjqkAWbNopHClE%2BETqDwbj56Qny%2BV5GrSS8qPSSI2TRZDq0acf%2BbgMhxMawGQ%2FXvPkgo3IcswZf%2Fv5oBk4L%2BxZ3VPAZHADlW5s6P%2ByJeRBK9WgatP72qLgRfNJNfYwHIlu3Uih6B6ghDQ6JDN2j9KliFNAvz4cQMXxwAbpq9Gy8fHycv1ivk1LdwDnN8TZ3oc3reGRPH5kwVde6v%2B%2FIynOPxjD9HkucU&X-Amz-Signature=fe89e657d6e138427c5f6c19a97e9b9239c54dc3a69e33296cc6b12d1b6f138d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3ZCTZD%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCNB9fjyvnI9F6v%2FZJYPKR298EvUNX8uA83jNz7W40D7wIhAKIe7DLg7ZglGRU3vLy7ujfBvuUYNMd1j56cK%2FH3D6tXKv8DCBAQABoMNjM3NDIzMTgzODA1IgxTcDdQNY3KwF4oVw4q3AMIgtR9%2BlmfMJ3dlfk5MUwMds1pID6Sqh4bQ0jp38qWSt183jCUAd%2F0AHTh3aJcmDXmJzaGu13SjWulO2u8sgfmn3wQDGkbhbtoYfyTD7zgdlsUBl3mwYfPPsdfJwa%2Blae78P3dyzsr7aPujh9fcl%2BLuRWvJaK1Xx2bzLaXZydLyZ8wVRcPa67SvwYf2sY3ra5JwxtnT4XZULfa1UFpdq4DQCnSYmZmluQccaHPi1Kj44Vp4xyXoQWjdpOTGUm001R3rk7yYeyT0uIBbRb%2FIEgpT4vMBSRMQmmrWGqkcD8Fc74Xjy%2BYAOJLjA3nZCmepYSWbSXdZtOh%2FnMROFYt7fLZltbLzW%2FaPQQSH8%2FSXRl4ckcN%2FGlCf%2FrGRFrtfM0acUwc%2BrUuDrON2yM4AV9N8NI%2B5JhkfRSEKmdLYLHTPQguFkNJLMzgVGiaM53X2%2B6F1bqs3Pp6o3lujI6Okkxtz9ItPHYjahiG5535THUbDxqKiYCb%2BCM1aGEYgCVzXtzQWxsEaXNNOsd%2FqxDeONWGp4vgRTrvdmMYSHSBEmGL1%2FN9SkxnXGdfnx1NOgegEWfhk42LiSrQo2yYB1nUoUVuhDaoMrQlf4msE3DDI9sY5A5q%2ByGk3Jgj25YT2xFjjjDzkq%2FCBjqkAWbNopHClE%2BETqDwbj56Qny%2BV5GrSS8qPSSI2TRZDq0acf%2BbgMhxMawGQ%2FXvPkgo3IcswZf%2Fv5oBk4L%2BxZ3VPAZHADlW5s6P%2ByJeRBK9WgatP72qLgRfNJNfYwHIlu3Uih6B6ghDQ6JDN2j9KliFNAvz4cQMXxwAbpq9Gy8fHycv1ivk1LdwDnN8TZ3oc3reGRPH5kwVde6v%2B%2FIynOPxjD9HkucU&X-Amz-Signature=468c1da25686f983b9c677a7161a07dcd2d8c34152470e6fdf6a163770458d0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3ZCTZD%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCNB9fjyvnI9F6v%2FZJYPKR298EvUNX8uA83jNz7W40D7wIhAKIe7DLg7ZglGRU3vLy7ujfBvuUYNMd1j56cK%2FH3D6tXKv8DCBAQABoMNjM3NDIzMTgzODA1IgxTcDdQNY3KwF4oVw4q3AMIgtR9%2BlmfMJ3dlfk5MUwMds1pID6Sqh4bQ0jp38qWSt183jCUAd%2F0AHTh3aJcmDXmJzaGu13SjWulO2u8sgfmn3wQDGkbhbtoYfyTD7zgdlsUBl3mwYfPPsdfJwa%2Blae78P3dyzsr7aPujh9fcl%2BLuRWvJaK1Xx2bzLaXZydLyZ8wVRcPa67SvwYf2sY3ra5JwxtnT4XZULfa1UFpdq4DQCnSYmZmluQccaHPi1Kj44Vp4xyXoQWjdpOTGUm001R3rk7yYeyT0uIBbRb%2FIEgpT4vMBSRMQmmrWGqkcD8Fc74Xjy%2BYAOJLjA3nZCmepYSWbSXdZtOh%2FnMROFYt7fLZltbLzW%2FaPQQSH8%2FSXRl4ckcN%2FGlCf%2FrGRFrtfM0acUwc%2BrUuDrON2yM4AV9N8NI%2B5JhkfRSEKmdLYLHTPQguFkNJLMzgVGiaM53X2%2B6F1bqs3Pp6o3lujI6Okkxtz9ItPHYjahiG5535THUbDxqKiYCb%2BCM1aGEYgCVzXtzQWxsEaXNNOsd%2FqxDeONWGp4vgRTrvdmMYSHSBEmGL1%2FN9SkxnXGdfnx1NOgegEWfhk42LiSrQo2yYB1nUoUVuhDaoMrQlf4msE3DDI9sY5A5q%2ByGk3Jgj25YT2xFjjjDzkq%2FCBjqkAWbNopHClE%2BETqDwbj56Qny%2BV5GrSS8qPSSI2TRZDq0acf%2BbgMhxMawGQ%2FXvPkgo3IcswZf%2Fv5oBk4L%2BxZ3VPAZHADlW5s6P%2ByJeRBK9WgatP72qLgRfNJNfYwHIlu3Uih6B6ghDQ6JDN2j9KliFNAvz4cQMXxwAbpq9Gy8fHycv1ivk1LdwDnN8TZ3oc3reGRPH5kwVde6v%2B%2FIynOPxjD9HkucU&X-Amz-Signature=254c15fc7993435f40ff692beb8ad972c0ef7443211c8f0dbc67742ac1c94166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3ZCTZD%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCNB9fjyvnI9F6v%2FZJYPKR298EvUNX8uA83jNz7W40D7wIhAKIe7DLg7ZglGRU3vLy7ujfBvuUYNMd1j56cK%2FH3D6tXKv8DCBAQABoMNjM3NDIzMTgzODA1IgxTcDdQNY3KwF4oVw4q3AMIgtR9%2BlmfMJ3dlfk5MUwMds1pID6Sqh4bQ0jp38qWSt183jCUAd%2F0AHTh3aJcmDXmJzaGu13SjWulO2u8sgfmn3wQDGkbhbtoYfyTD7zgdlsUBl3mwYfPPsdfJwa%2Blae78P3dyzsr7aPujh9fcl%2BLuRWvJaK1Xx2bzLaXZydLyZ8wVRcPa67SvwYf2sY3ra5JwxtnT4XZULfa1UFpdq4DQCnSYmZmluQccaHPi1Kj44Vp4xyXoQWjdpOTGUm001R3rk7yYeyT0uIBbRb%2FIEgpT4vMBSRMQmmrWGqkcD8Fc74Xjy%2BYAOJLjA3nZCmepYSWbSXdZtOh%2FnMROFYt7fLZltbLzW%2FaPQQSH8%2FSXRl4ckcN%2FGlCf%2FrGRFrtfM0acUwc%2BrUuDrON2yM4AV9N8NI%2B5JhkfRSEKmdLYLHTPQguFkNJLMzgVGiaM53X2%2B6F1bqs3Pp6o3lujI6Okkxtz9ItPHYjahiG5535THUbDxqKiYCb%2BCM1aGEYgCVzXtzQWxsEaXNNOsd%2FqxDeONWGp4vgRTrvdmMYSHSBEmGL1%2FN9SkxnXGdfnx1NOgegEWfhk42LiSrQo2yYB1nUoUVuhDaoMrQlf4msE3DDI9sY5A5q%2ByGk3Jgj25YT2xFjjjDzkq%2FCBjqkAWbNopHClE%2BETqDwbj56Qny%2BV5GrSS8qPSSI2TRZDq0acf%2BbgMhxMawGQ%2FXvPkgo3IcswZf%2Fv5oBk4L%2BxZ3VPAZHADlW5s6P%2ByJeRBK9WgatP72qLgRfNJNfYwHIlu3Uih6B6ghDQ6JDN2j9KliFNAvz4cQMXxwAbpq9Gy8fHycv1ivk1LdwDnN8TZ3oc3reGRPH5kwVde6v%2B%2FIynOPxjD9HkucU&X-Amz-Signature=806bf06572d70eebb643a42d8360ce31320c9df033fe4fbce95dd7d1d1b91ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3ZCTZD%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCNB9fjyvnI9F6v%2FZJYPKR298EvUNX8uA83jNz7W40D7wIhAKIe7DLg7ZglGRU3vLy7ujfBvuUYNMd1j56cK%2FH3D6tXKv8DCBAQABoMNjM3NDIzMTgzODA1IgxTcDdQNY3KwF4oVw4q3AMIgtR9%2BlmfMJ3dlfk5MUwMds1pID6Sqh4bQ0jp38qWSt183jCUAd%2F0AHTh3aJcmDXmJzaGu13SjWulO2u8sgfmn3wQDGkbhbtoYfyTD7zgdlsUBl3mwYfPPsdfJwa%2Blae78P3dyzsr7aPujh9fcl%2BLuRWvJaK1Xx2bzLaXZydLyZ8wVRcPa67SvwYf2sY3ra5JwxtnT4XZULfa1UFpdq4DQCnSYmZmluQccaHPi1Kj44Vp4xyXoQWjdpOTGUm001R3rk7yYeyT0uIBbRb%2FIEgpT4vMBSRMQmmrWGqkcD8Fc74Xjy%2BYAOJLjA3nZCmepYSWbSXdZtOh%2FnMROFYt7fLZltbLzW%2FaPQQSH8%2FSXRl4ckcN%2FGlCf%2FrGRFrtfM0acUwc%2BrUuDrON2yM4AV9N8NI%2B5JhkfRSEKmdLYLHTPQguFkNJLMzgVGiaM53X2%2B6F1bqs3Pp6o3lujI6Okkxtz9ItPHYjahiG5535THUbDxqKiYCb%2BCM1aGEYgCVzXtzQWxsEaXNNOsd%2FqxDeONWGp4vgRTrvdmMYSHSBEmGL1%2FN9SkxnXGdfnx1NOgegEWfhk42LiSrQo2yYB1nUoUVuhDaoMrQlf4msE3DDI9sY5A5q%2ByGk3Jgj25YT2xFjjjDzkq%2FCBjqkAWbNopHClE%2BETqDwbj56Qny%2BV5GrSS8qPSSI2TRZDq0acf%2BbgMhxMawGQ%2FXvPkgo3IcswZf%2Fv5oBk4L%2BxZ3VPAZHADlW5s6P%2ByJeRBK9WgatP72qLgRfNJNfYwHIlu3Uih6B6ghDQ6JDN2j9KliFNAvz4cQMXxwAbpq9Gy8fHycv1ivk1LdwDnN8TZ3oc3reGRPH5kwVde6v%2B%2FIynOPxjD9HkucU&X-Amz-Signature=a1359cdf2b2d8f7ed7e238ec19c140edc775906d3265f22431fdb6b3e05750e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3ZCTZD%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCNB9fjyvnI9F6v%2FZJYPKR298EvUNX8uA83jNz7W40D7wIhAKIe7DLg7ZglGRU3vLy7ujfBvuUYNMd1j56cK%2FH3D6tXKv8DCBAQABoMNjM3NDIzMTgzODA1IgxTcDdQNY3KwF4oVw4q3AMIgtR9%2BlmfMJ3dlfk5MUwMds1pID6Sqh4bQ0jp38qWSt183jCUAd%2F0AHTh3aJcmDXmJzaGu13SjWulO2u8sgfmn3wQDGkbhbtoYfyTD7zgdlsUBl3mwYfPPsdfJwa%2Blae78P3dyzsr7aPujh9fcl%2BLuRWvJaK1Xx2bzLaXZydLyZ8wVRcPa67SvwYf2sY3ra5JwxtnT4XZULfa1UFpdq4DQCnSYmZmluQccaHPi1Kj44Vp4xyXoQWjdpOTGUm001R3rk7yYeyT0uIBbRb%2FIEgpT4vMBSRMQmmrWGqkcD8Fc74Xjy%2BYAOJLjA3nZCmepYSWbSXdZtOh%2FnMROFYt7fLZltbLzW%2FaPQQSH8%2FSXRl4ckcN%2FGlCf%2FrGRFrtfM0acUwc%2BrUuDrON2yM4AV9N8NI%2B5JhkfRSEKmdLYLHTPQguFkNJLMzgVGiaM53X2%2B6F1bqs3Pp6o3lujI6Okkxtz9ItPHYjahiG5535THUbDxqKiYCb%2BCM1aGEYgCVzXtzQWxsEaXNNOsd%2FqxDeONWGp4vgRTrvdmMYSHSBEmGL1%2FN9SkxnXGdfnx1NOgegEWfhk42LiSrQo2yYB1nUoUVuhDaoMrQlf4msE3DDI9sY5A5q%2ByGk3Jgj25YT2xFjjjDzkq%2FCBjqkAWbNopHClE%2BETqDwbj56Qny%2BV5GrSS8qPSSI2TRZDq0acf%2BbgMhxMawGQ%2FXvPkgo3IcswZf%2Fv5oBk4L%2BxZ3VPAZHADlW5s6P%2ByJeRBK9WgatP72qLgRfNJNfYwHIlu3Uih6B6ghDQ6JDN2j9KliFNAvz4cQMXxwAbpq9Gy8fHycv1ivk1LdwDnN8TZ3oc3reGRPH5kwVde6v%2B%2FIynOPxjD9HkucU&X-Amz-Signature=88bc3f13818f050852008c472bc821edb830f34acef9b934ab8034029faaf2e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3ZCTZD%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCNB9fjyvnI9F6v%2FZJYPKR298EvUNX8uA83jNz7W40D7wIhAKIe7DLg7ZglGRU3vLy7ujfBvuUYNMd1j56cK%2FH3D6tXKv8DCBAQABoMNjM3NDIzMTgzODA1IgxTcDdQNY3KwF4oVw4q3AMIgtR9%2BlmfMJ3dlfk5MUwMds1pID6Sqh4bQ0jp38qWSt183jCUAd%2F0AHTh3aJcmDXmJzaGu13SjWulO2u8sgfmn3wQDGkbhbtoYfyTD7zgdlsUBl3mwYfPPsdfJwa%2Blae78P3dyzsr7aPujh9fcl%2BLuRWvJaK1Xx2bzLaXZydLyZ8wVRcPa67SvwYf2sY3ra5JwxtnT4XZULfa1UFpdq4DQCnSYmZmluQccaHPi1Kj44Vp4xyXoQWjdpOTGUm001R3rk7yYeyT0uIBbRb%2FIEgpT4vMBSRMQmmrWGqkcD8Fc74Xjy%2BYAOJLjA3nZCmepYSWbSXdZtOh%2FnMROFYt7fLZltbLzW%2FaPQQSH8%2FSXRl4ckcN%2FGlCf%2FrGRFrtfM0acUwc%2BrUuDrON2yM4AV9N8NI%2B5JhkfRSEKmdLYLHTPQguFkNJLMzgVGiaM53X2%2B6F1bqs3Pp6o3lujI6Okkxtz9ItPHYjahiG5535THUbDxqKiYCb%2BCM1aGEYgCVzXtzQWxsEaXNNOsd%2FqxDeONWGp4vgRTrvdmMYSHSBEmGL1%2FN9SkxnXGdfnx1NOgegEWfhk42LiSrQo2yYB1nUoUVuhDaoMrQlf4msE3DDI9sY5A5q%2ByGk3Jgj25YT2xFjjjDzkq%2FCBjqkAWbNopHClE%2BETqDwbj56Qny%2BV5GrSS8qPSSI2TRZDq0acf%2BbgMhxMawGQ%2FXvPkgo3IcswZf%2Fv5oBk4L%2BxZ3VPAZHADlW5s6P%2ByJeRBK9WgatP72qLgRfNJNfYwHIlu3Uih6B6ghDQ6JDN2j9KliFNAvz4cQMXxwAbpq9Gy8fHycv1ivk1LdwDnN8TZ3oc3reGRPH5kwVde6v%2B%2FIynOPxjD9HkucU&X-Amz-Signature=b0122cb4e57c5b2af07f890c99aa500ab04f39444673815da6ca43debc3ecbb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3ZCTZD%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCNB9fjyvnI9F6v%2FZJYPKR298EvUNX8uA83jNz7W40D7wIhAKIe7DLg7ZglGRU3vLy7ujfBvuUYNMd1j56cK%2FH3D6tXKv8DCBAQABoMNjM3NDIzMTgzODA1IgxTcDdQNY3KwF4oVw4q3AMIgtR9%2BlmfMJ3dlfk5MUwMds1pID6Sqh4bQ0jp38qWSt183jCUAd%2F0AHTh3aJcmDXmJzaGu13SjWulO2u8sgfmn3wQDGkbhbtoYfyTD7zgdlsUBl3mwYfPPsdfJwa%2Blae78P3dyzsr7aPujh9fcl%2BLuRWvJaK1Xx2bzLaXZydLyZ8wVRcPa67SvwYf2sY3ra5JwxtnT4XZULfa1UFpdq4DQCnSYmZmluQccaHPi1Kj44Vp4xyXoQWjdpOTGUm001R3rk7yYeyT0uIBbRb%2FIEgpT4vMBSRMQmmrWGqkcD8Fc74Xjy%2BYAOJLjA3nZCmepYSWbSXdZtOh%2FnMROFYt7fLZltbLzW%2FaPQQSH8%2FSXRl4ckcN%2FGlCf%2FrGRFrtfM0acUwc%2BrUuDrON2yM4AV9N8NI%2B5JhkfRSEKmdLYLHTPQguFkNJLMzgVGiaM53X2%2B6F1bqs3Pp6o3lujI6Okkxtz9ItPHYjahiG5535THUbDxqKiYCb%2BCM1aGEYgCVzXtzQWxsEaXNNOsd%2FqxDeONWGp4vgRTrvdmMYSHSBEmGL1%2FN9SkxnXGdfnx1NOgegEWfhk42LiSrQo2yYB1nUoUVuhDaoMrQlf4msE3DDI9sY5A5q%2ByGk3Jgj25YT2xFjjjDzkq%2FCBjqkAWbNopHClE%2BETqDwbj56Qny%2BV5GrSS8qPSSI2TRZDq0acf%2BbgMhxMawGQ%2FXvPkgo3IcswZf%2Fv5oBk4L%2BxZ3VPAZHADlW5s6P%2ByJeRBK9WgatP72qLgRfNJNfYwHIlu3Uih6B6ghDQ6JDN2j9KliFNAvz4cQMXxwAbpq9Gy8fHycv1ivk1LdwDnN8TZ3oc3reGRPH5kwVde6v%2B%2FIynOPxjD9HkucU&X-Amz-Signature=9899a9d27d8fc9b3611274917ea28162c120c695b58427704be8c16946ce36fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
