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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G2IMIHH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD0DLTH52tTKX5azWDDDEx10tVcl4W5Unhez5Ght1YDsgIhAP1QoUiryWpCXMPoC2CJpGgQKCqWY4xyMTjgP6xk8%2BTeKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdZW%2FC%2Bi4%2F4jwMCI0q3ANQxvrxBa8aF68%2FjywKm7ih%2FzkggibzvvmvTN8%2BiEDoThWXFDuB8P38Lec3wMbUNbbxFmKzmQMVzQM9QsnUipiNwxWELlikUMLT0aTfL0dU656%2F6AzJUJrwTkYHflHOSySAKeMItsIus%2FOsiznHqXD2o5WJ7U6wgF5XcmwIgbQ2Uu6HgxO3uvm6bXEPFSsrwcuSurlXytbTGAlK7k07jWHnHyJRfm7nmCLYOMEcpxHwVmjEMqEi6u%2Feeot3ZODOd21FpFyopqGqH%2B%2FEPNbiDPKtnapomyuFclbNj%2Ffw4gTmy%2BgrvaTO%2BD1PpWsuo0ObL%2FxxiITzvL1WxKvqprE0fayizoUSBpmwI9oUbZWfoKLXqdGGIHhCuRmTZ%2B6k%2FcML3rc0dK3F4U6523dzZIlk2AzRWJBvvE8jnqC%2FC9IS1pEjXD8rzgsfZWlQT0x8Q6%2FX2%2BrluQU66i05uohvPaiiUkc%2ByCYFD10YKpN3uaAvGxU5qQBCk8CaPqIhKmBS7avVfPavQbyxQdeLYDk9jXhg9YlDsdEclmYwovqnhU328k%2Fi0jzIYIvFwtFQCy9bDflf3ROMy%2BAd9iAVmlu%2F7NLJ%2B4VjkxjuAKk0ewyxhninKOe1KkqV%2FbjxOyIVd%2Fq2kjDb%2B7S%2FBjqkARbBbQHGDwakIQ%2BW4i%2BccAY%2FyVeCJfGQsNN3%2BozV9uopSftZDEXUUlIKpb2JedBGspwIfYs5izfxCcrsJXehv53xWeHy0IO3NZ5t1ao9yPFaqIuwrGaAb0MgyNwK9N7A3pSUtsQgucYNM96e7A5fdapiLvPAtI7%2FkRHJWoBEMz8CttcIzLEY5FYS4ATrwtXMi3id531mdv6JzHtDdudPIstF4kxR&X-Amz-Signature=12dc2ac70746a55cfae7953d6d186a1c0b7db0b13dbb13d4076259a501c257d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G2IMIHH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD0DLTH52tTKX5azWDDDEx10tVcl4W5Unhez5Ght1YDsgIhAP1QoUiryWpCXMPoC2CJpGgQKCqWY4xyMTjgP6xk8%2BTeKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdZW%2FC%2Bi4%2F4jwMCI0q3ANQxvrxBa8aF68%2FjywKm7ih%2FzkggibzvvmvTN8%2BiEDoThWXFDuB8P38Lec3wMbUNbbxFmKzmQMVzQM9QsnUipiNwxWELlikUMLT0aTfL0dU656%2F6AzJUJrwTkYHflHOSySAKeMItsIus%2FOsiznHqXD2o5WJ7U6wgF5XcmwIgbQ2Uu6HgxO3uvm6bXEPFSsrwcuSurlXytbTGAlK7k07jWHnHyJRfm7nmCLYOMEcpxHwVmjEMqEi6u%2Feeot3ZODOd21FpFyopqGqH%2B%2FEPNbiDPKtnapomyuFclbNj%2Ffw4gTmy%2BgrvaTO%2BD1PpWsuo0ObL%2FxxiITzvL1WxKvqprE0fayizoUSBpmwI9oUbZWfoKLXqdGGIHhCuRmTZ%2B6k%2FcML3rc0dK3F4U6523dzZIlk2AzRWJBvvE8jnqC%2FC9IS1pEjXD8rzgsfZWlQT0x8Q6%2FX2%2BrluQU66i05uohvPaiiUkc%2ByCYFD10YKpN3uaAvGxU5qQBCk8CaPqIhKmBS7avVfPavQbyxQdeLYDk9jXhg9YlDsdEclmYwovqnhU328k%2Fi0jzIYIvFwtFQCy9bDflf3ROMy%2BAd9iAVmlu%2F7NLJ%2B4VjkxjuAKk0ewyxhninKOe1KkqV%2FbjxOyIVd%2Fq2kjDb%2B7S%2FBjqkARbBbQHGDwakIQ%2BW4i%2BccAY%2FyVeCJfGQsNN3%2BozV9uopSftZDEXUUlIKpb2JedBGspwIfYs5izfxCcrsJXehv53xWeHy0IO3NZ5t1ao9yPFaqIuwrGaAb0MgyNwK9N7A3pSUtsQgucYNM96e7A5fdapiLvPAtI7%2FkRHJWoBEMz8CttcIzLEY5FYS4ATrwtXMi3id531mdv6JzHtDdudPIstF4kxR&X-Amz-Signature=1176b9cad1d7eda2e39e5443fe1c3aac2a9d5798007eafd502c908b87651db2c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G2IMIHH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD0DLTH52tTKX5azWDDDEx10tVcl4W5Unhez5Ght1YDsgIhAP1QoUiryWpCXMPoC2CJpGgQKCqWY4xyMTjgP6xk8%2BTeKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdZW%2FC%2Bi4%2F4jwMCI0q3ANQxvrxBa8aF68%2FjywKm7ih%2FzkggibzvvmvTN8%2BiEDoThWXFDuB8P38Lec3wMbUNbbxFmKzmQMVzQM9QsnUipiNwxWELlikUMLT0aTfL0dU656%2F6AzJUJrwTkYHflHOSySAKeMItsIus%2FOsiznHqXD2o5WJ7U6wgF5XcmwIgbQ2Uu6HgxO3uvm6bXEPFSsrwcuSurlXytbTGAlK7k07jWHnHyJRfm7nmCLYOMEcpxHwVmjEMqEi6u%2Feeot3ZODOd21FpFyopqGqH%2B%2FEPNbiDPKtnapomyuFclbNj%2Ffw4gTmy%2BgrvaTO%2BD1PpWsuo0ObL%2FxxiITzvL1WxKvqprE0fayizoUSBpmwI9oUbZWfoKLXqdGGIHhCuRmTZ%2B6k%2FcML3rc0dK3F4U6523dzZIlk2AzRWJBvvE8jnqC%2FC9IS1pEjXD8rzgsfZWlQT0x8Q6%2FX2%2BrluQU66i05uohvPaiiUkc%2ByCYFD10YKpN3uaAvGxU5qQBCk8CaPqIhKmBS7avVfPavQbyxQdeLYDk9jXhg9YlDsdEclmYwovqnhU328k%2Fi0jzIYIvFwtFQCy9bDflf3ROMy%2BAd9iAVmlu%2F7NLJ%2B4VjkxjuAKk0ewyxhninKOe1KkqV%2FbjxOyIVd%2Fq2kjDb%2B7S%2FBjqkARbBbQHGDwakIQ%2BW4i%2BccAY%2FyVeCJfGQsNN3%2BozV9uopSftZDEXUUlIKpb2JedBGspwIfYs5izfxCcrsJXehv53xWeHy0IO3NZ5t1ao9yPFaqIuwrGaAb0MgyNwK9N7A3pSUtsQgucYNM96e7A5fdapiLvPAtI7%2FkRHJWoBEMz8CttcIzLEY5FYS4ATrwtXMi3id531mdv6JzHtDdudPIstF4kxR&X-Amz-Signature=aa48cb96747f73f6f5e477b82eaa80880faa686e03cb86d4ccab73b4065e2ecf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G2IMIHH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD0DLTH52tTKX5azWDDDEx10tVcl4W5Unhez5Ght1YDsgIhAP1QoUiryWpCXMPoC2CJpGgQKCqWY4xyMTjgP6xk8%2BTeKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdZW%2FC%2Bi4%2F4jwMCI0q3ANQxvrxBa8aF68%2FjywKm7ih%2FzkggibzvvmvTN8%2BiEDoThWXFDuB8P38Lec3wMbUNbbxFmKzmQMVzQM9QsnUipiNwxWELlikUMLT0aTfL0dU656%2F6AzJUJrwTkYHflHOSySAKeMItsIus%2FOsiznHqXD2o5WJ7U6wgF5XcmwIgbQ2Uu6HgxO3uvm6bXEPFSsrwcuSurlXytbTGAlK7k07jWHnHyJRfm7nmCLYOMEcpxHwVmjEMqEi6u%2Feeot3ZODOd21FpFyopqGqH%2B%2FEPNbiDPKtnapomyuFclbNj%2Ffw4gTmy%2BgrvaTO%2BD1PpWsuo0ObL%2FxxiITzvL1WxKvqprE0fayizoUSBpmwI9oUbZWfoKLXqdGGIHhCuRmTZ%2B6k%2FcML3rc0dK3F4U6523dzZIlk2AzRWJBvvE8jnqC%2FC9IS1pEjXD8rzgsfZWlQT0x8Q6%2FX2%2BrluQU66i05uohvPaiiUkc%2ByCYFD10YKpN3uaAvGxU5qQBCk8CaPqIhKmBS7avVfPavQbyxQdeLYDk9jXhg9YlDsdEclmYwovqnhU328k%2Fi0jzIYIvFwtFQCy9bDflf3ROMy%2BAd9iAVmlu%2F7NLJ%2B4VjkxjuAKk0ewyxhninKOe1KkqV%2FbjxOyIVd%2Fq2kjDb%2B7S%2FBjqkARbBbQHGDwakIQ%2BW4i%2BccAY%2FyVeCJfGQsNN3%2BozV9uopSftZDEXUUlIKpb2JedBGspwIfYs5izfxCcrsJXehv53xWeHy0IO3NZ5t1ao9yPFaqIuwrGaAb0MgyNwK9N7A3pSUtsQgucYNM96e7A5fdapiLvPAtI7%2FkRHJWoBEMz8CttcIzLEY5FYS4ATrwtXMi3id531mdv6JzHtDdudPIstF4kxR&X-Amz-Signature=41a07aa7ac6f84c42f93d415fab581682ed29e0d01e90899db0e13fb135e163f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G2IMIHH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD0DLTH52tTKX5azWDDDEx10tVcl4W5Unhez5Ght1YDsgIhAP1QoUiryWpCXMPoC2CJpGgQKCqWY4xyMTjgP6xk8%2BTeKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdZW%2FC%2Bi4%2F4jwMCI0q3ANQxvrxBa8aF68%2FjywKm7ih%2FzkggibzvvmvTN8%2BiEDoThWXFDuB8P38Lec3wMbUNbbxFmKzmQMVzQM9QsnUipiNwxWELlikUMLT0aTfL0dU656%2F6AzJUJrwTkYHflHOSySAKeMItsIus%2FOsiznHqXD2o5WJ7U6wgF5XcmwIgbQ2Uu6HgxO3uvm6bXEPFSsrwcuSurlXytbTGAlK7k07jWHnHyJRfm7nmCLYOMEcpxHwVmjEMqEi6u%2Feeot3ZODOd21FpFyopqGqH%2B%2FEPNbiDPKtnapomyuFclbNj%2Ffw4gTmy%2BgrvaTO%2BD1PpWsuo0ObL%2FxxiITzvL1WxKvqprE0fayizoUSBpmwI9oUbZWfoKLXqdGGIHhCuRmTZ%2B6k%2FcML3rc0dK3F4U6523dzZIlk2AzRWJBvvE8jnqC%2FC9IS1pEjXD8rzgsfZWlQT0x8Q6%2FX2%2BrluQU66i05uohvPaiiUkc%2ByCYFD10YKpN3uaAvGxU5qQBCk8CaPqIhKmBS7avVfPavQbyxQdeLYDk9jXhg9YlDsdEclmYwovqnhU328k%2Fi0jzIYIvFwtFQCy9bDflf3ROMy%2BAd9iAVmlu%2F7NLJ%2B4VjkxjuAKk0ewyxhninKOe1KkqV%2FbjxOyIVd%2Fq2kjDb%2B7S%2FBjqkARbBbQHGDwakIQ%2BW4i%2BccAY%2FyVeCJfGQsNN3%2BozV9uopSftZDEXUUlIKpb2JedBGspwIfYs5izfxCcrsJXehv53xWeHy0IO3NZ5t1ao9yPFaqIuwrGaAb0MgyNwK9N7A3pSUtsQgucYNM96e7A5fdapiLvPAtI7%2FkRHJWoBEMz8CttcIzLEY5FYS4ATrwtXMi3id531mdv6JzHtDdudPIstF4kxR&X-Amz-Signature=c9d9c65b1d1688b5a9269ddd002c0680885107878a0e2048161fce3fd2ae0c88&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G2IMIHH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD0DLTH52tTKX5azWDDDEx10tVcl4W5Unhez5Ght1YDsgIhAP1QoUiryWpCXMPoC2CJpGgQKCqWY4xyMTjgP6xk8%2BTeKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdZW%2FC%2Bi4%2F4jwMCI0q3ANQxvrxBa8aF68%2FjywKm7ih%2FzkggibzvvmvTN8%2BiEDoThWXFDuB8P38Lec3wMbUNbbxFmKzmQMVzQM9QsnUipiNwxWELlikUMLT0aTfL0dU656%2F6AzJUJrwTkYHflHOSySAKeMItsIus%2FOsiznHqXD2o5WJ7U6wgF5XcmwIgbQ2Uu6HgxO3uvm6bXEPFSsrwcuSurlXytbTGAlK7k07jWHnHyJRfm7nmCLYOMEcpxHwVmjEMqEi6u%2Feeot3ZODOd21FpFyopqGqH%2B%2FEPNbiDPKtnapomyuFclbNj%2Ffw4gTmy%2BgrvaTO%2BD1PpWsuo0ObL%2FxxiITzvL1WxKvqprE0fayizoUSBpmwI9oUbZWfoKLXqdGGIHhCuRmTZ%2B6k%2FcML3rc0dK3F4U6523dzZIlk2AzRWJBvvE8jnqC%2FC9IS1pEjXD8rzgsfZWlQT0x8Q6%2FX2%2BrluQU66i05uohvPaiiUkc%2ByCYFD10YKpN3uaAvGxU5qQBCk8CaPqIhKmBS7avVfPavQbyxQdeLYDk9jXhg9YlDsdEclmYwovqnhU328k%2Fi0jzIYIvFwtFQCy9bDflf3ROMy%2BAd9iAVmlu%2F7NLJ%2B4VjkxjuAKk0ewyxhninKOe1KkqV%2FbjxOyIVd%2Fq2kjDb%2B7S%2FBjqkARbBbQHGDwakIQ%2BW4i%2BccAY%2FyVeCJfGQsNN3%2BozV9uopSftZDEXUUlIKpb2JedBGspwIfYs5izfxCcrsJXehv53xWeHy0IO3NZ5t1ao9yPFaqIuwrGaAb0MgyNwK9N7A3pSUtsQgucYNM96e7A5fdapiLvPAtI7%2FkRHJWoBEMz8CttcIzLEY5FYS4ATrwtXMi3id531mdv6JzHtDdudPIstF4kxR&X-Amz-Signature=bef63c3a741d2040b59e79142f4aed21644df8705f1e313d39730a30e7af15f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G2IMIHH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD0DLTH52tTKX5azWDDDEx10tVcl4W5Unhez5Ght1YDsgIhAP1QoUiryWpCXMPoC2CJpGgQKCqWY4xyMTjgP6xk8%2BTeKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdZW%2FC%2Bi4%2F4jwMCI0q3ANQxvrxBa8aF68%2FjywKm7ih%2FzkggibzvvmvTN8%2BiEDoThWXFDuB8P38Lec3wMbUNbbxFmKzmQMVzQM9QsnUipiNwxWELlikUMLT0aTfL0dU656%2F6AzJUJrwTkYHflHOSySAKeMItsIus%2FOsiznHqXD2o5WJ7U6wgF5XcmwIgbQ2Uu6HgxO3uvm6bXEPFSsrwcuSurlXytbTGAlK7k07jWHnHyJRfm7nmCLYOMEcpxHwVmjEMqEi6u%2Feeot3ZODOd21FpFyopqGqH%2B%2FEPNbiDPKtnapomyuFclbNj%2Ffw4gTmy%2BgrvaTO%2BD1PpWsuo0ObL%2FxxiITzvL1WxKvqprE0fayizoUSBpmwI9oUbZWfoKLXqdGGIHhCuRmTZ%2B6k%2FcML3rc0dK3F4U6523dzZIlk2AzRWJBvvE8jnqC%2FC9IS1pEjXD8rzgsfZWlQT0x8Q6%2FX2%2BrluQU66i05uohvPaiiUkc%2ByCYFD10YKpN3uaAvGxU5qQBCk8CaPqIhKmBS7avVfPavQbyxQdeLYDk9jXhg9YlDsdEclmYwovqnhU328k%2Fi0jzIYIvFwtFQCy9bDflf3ROMy%2BAd9iAVmlu%2F7NLJ%2B4VjkxjuAKk0ewyxhninKOe1KkqV%2FbjxOyIVd%2Fq2kjDb%2B7S%2FBjqkARbBbQHGDwakIQ%2BW4i%2BccAY%2FyVeCJfGQsNN3%2BozV9uopSftZDEXUUlIKpb2JedBGspwIfYs5izfxCcrsJXehv53xWeHy0IO3NZ5t1ao9yPFaqIuwrGaAb0MgyNwK9N7A3pSUtsQgucYNM96e7A5fdapiLvPAtI7%2FkRHJWoBEMz8CttcIzLEY5FYS4ATrwtXMi3id531mdv6JzHtDdudPIstF4kxR&X-Amz-Signature=2e3d771038593e5b0dd00ae2569365ec27e6ce92e28a9c284f0975efcbef6867&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G2IMIHH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD0DLTH52tTKX5azWDDDEx10tVcl4W5Unhez5Ght1YDsgIhAP1QoUiryWpCXMPoC2CJpGgQKCqWY4xyMTjgP6xk8%2BTeKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdZW%2FC%2Bi4%2F4jwMCI0q3ANQxvrxBa8aF68%2FjywKm7ih%2FzkggibzvvmvTN8%2BiEDoThWXFDuB8P38Lec3wMbUNbbxFmKzmQMVzQM9QsnUipiNwxWELlikUMLT0aTfL0dU656%2F6AzJUJrwTkYHflHOSySAKeMItsIus%2FOsiznHqXD2o5WJ7U6wgF5XcmwIgbQ2Uu6HgxO3uvm6bXEPFSsrwcuSurlXytbTGAlK7k07jWHnHyJRfm7nmCLYOMEcpxHwVmjEMqEi6u%2Feeot3ZODOd21FpFyopqGqH%2B%2FEPNbiDPKtnapomyuFclbNj%2Ffw4gTmy%2BgrvaTO%2BD1PpWsuo0ObL%2FxxiITzvL1WxKvqprE0fayizoUSBpmwI9oUbZWfoKLXqdGGIHhCuRmTZ%2B6k%2FcML3rc0dK3F4U6523dzZIlk2AzRWJBvvE8jnqC%2FC9IS1pEjXD8rzgsfZWlQT0x8Q6%2FX2%2BrluQU66i05uohvPaiiUkc%2ByCYFD10YKpN3uaAvGxU5qQBCk8CaPqIhKmBS7avVfPavQbyxQdeLYDk9jXhg9YlDsdEclmYwovqnhU328k%2Fi0jzIYIvFwtFQCy9bDflf3ROMy%2BAd9iAVmlu%2F7NLJ%2B4VjkxjuAKk0ewyxhninKOe1KkqV%2FbjxOyIVd%2Fq2kjDb%2B7S%2FBjqkARbBbQHGDwakIQ%2BW4i%2BccAY%2FyVeCJfGQsNN3%2BozV9uopSftZDEXUUlIKpb2JedBGspwIfYs5izfxCcrsJXehv53xWeHy0IO3NZ5t1ao9yPFaqIuwrGaAb0MgyNwK9N7A3pSUtsQgucYNM96e7A5fdapiLvPAtI7%2FkRHJWoBEMz8CttcIzLEY5FYS4ATrwtXMi3id531mdv6JzHtDdudPIstF4kxR&X-Amz-Signature=06572af4804ec233b30539c46eab3dad441fa692275fe872aa1558d0e8fabb1c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
