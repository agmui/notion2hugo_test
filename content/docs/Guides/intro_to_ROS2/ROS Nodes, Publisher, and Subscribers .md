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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZEO6JMY%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BduQoNMbFh9WnAa5mBNEs%2F5aXsoiSQ3rwtTTOXcI4dQIhAMNB1Fpu97eCWSxlZ4I0XWMPKrumw2ZYkIkCvGzhL24fKv8DCHcQABoMNjM3NDIzMTgzODA1IgwAFGwIUTfX2FrcTmsq3ANjzQYLkuUUqEz9S1V73qQ%2BnTI2hJIOYWsg6pmIr%2FF6aTC3wilMVNR%2FfJIIMRWErW5FI2rnYkw1R2ZkZEdydEIkJ%2B8huNjsrqF5YT2sW%2BmLSa0p457zAYIILlKgLs0kMB95FGgu6RZ%2BE1w5pbBx0dooQepO6mMB%2B8%2BseDzi5bD7R9nT9diyOxlMeJNIAdK6v%2BRjgwCTGyFzu0s2ZQhodmcYL54oitwJYLZcmkNQscd%2Ftp3MDFXrhEoCB9Gqyzbe%2BBU9wdUA6OasxwmcZcMDMfau2KVyvmBG7xfu8E5Gm1mhvlm1DHeJwiGpXfJPbElHcdi0Ro6t71VZZBgT2uox%2F04m%2BTUxjfKC6I%2Fh%2FMt2TqUeu9ukViAvrQVAg8PEuVeki%2BXwVWTRqvolNj1CvGxh2KXVajfWSx0RDO2DxO%2FD1eZ8KTS%2BVpa34N6QrI90yG18XJJF4EfXWLZkgGqNrMzNHaCfLEp8Cq3bfHI1ZbylfJzsxvF931Mex9kd3j4qcdrFpMAI2bDM44dSfEHVWMkc6EGHTkbgO4CX9F737HtTkvXsMmDNR%2FsXLEDKwfBl9inKNEySfQ0NzUfD%2BYQhp2wozqD%2Ba9GHVjR3Oia0X4%2BAKznxpdEzKd2M6Uxnvrtr2jDExbvOBjqkAe2PIuGHf1iKIkATMG2jdC%2BZT9xpHD4qX3oZTEBmRWK96ljX4ivj9h0rI3txQEQRUq5W7nTw6lyl1wqy5FLSAd4DRq3iHWU%2BVt4hOoXl1KhQnDo3INrxgyGPeqjyFrPrYF4o984jjmupLivE0vVSsUaLY%2FQkgBH0Lu%2Fb%2BUMXa1WdXNEOIAjENv0tz1qYBjKqqedFroH3fRxwgX19RzA7HV6YYj8R&X-Amz-Signature=2fd52436f82d50484ff8852ccb6272f9e9edea8f77a58d52177ae1ceca0b3b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZEO6JMY%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BduQoNMbFh9WnAa5mBNEs%2F5aXsoiSQ3rwtTTOXcI4dQIhAMNB1Fpu97eCWSxlZ4I0XWMPKrumw2ZYkIkCvGzhL24fKv8DCHcQABoMNjM3NDIzMTgzODA1IgwAFGwIUTfX2FrcTmsq3ANjzQYLkuUUqEz9S1V73qQ%2BnTI2hJIOYWsg6pmIr%2FF6aTC3wilMVNR%2FfJIIMRWErW5FI2rnYkw1R2ZkZEdydEIkJ%2B8huNjsrqF5YT2sW%2BmLSa0p457zAYIILlKgLs0kMB95FGgu6RZ%2BE1w5pbBx0dooQepO6mMB%2B8%2BseDzi5bD7R9nT9diyOxlMeJNIAdK6v%2BRjgwCTGyFzu0s2ZQhodmcYL54oitwJYLZcmkNQscd%2Ftp3MDFXrhEoCB9Gqyzbe%2BBU9wdUA6OasxwmcZcMDMfau2KVyvmBG7xfu8E5Gm1mhvlm1DHeJwiGpXfJPbElHcdi0Ro6t71VZZBgT2uox%2F04m%2BTUxjfKC6I%2Fh%2FMt2TqUeu9ukViAvrQVAg8PEuVeki%2BXwVWTRqvolNj1CvGxh2KXVajfWSx0RDO2DxO%2FD1eZ8KTS%2BVpa34N6QrI90yG18XJJF4EfXWLZkgGqNrMzNHaCfLEp8Cq3bfHI1ZbylfJzsxvF931Mex9kd3j4qcdrFpMAI2bDM44dSfEHVWMkc6EGHTkbgO4CX9F737HtTkvXsMmDNR%2FsXLEDKwfBl9inKNEySfQ0NzUfD%2BYQhp2wozqD%2Ba9GHVjR3Oia0X4%2BAKznxpdEzKd2M6Uxnvrtr2jDExbvOBjqkAe2PIuGHf1iKIkATMG2jdC%2BZT9xpHD4qX3oZTEBmRWK96ljX4ivj9h0rI3txQEQRUq5W7nTw6lyl1wqy5FLSAd4DRq3iHWU%2BVt4hOoXl1KhQnDo3INrxgyGPeqjyFrPrYF4o984jjmupLivE0vVSsUaLY%2FQkgBH0Lu%2Fb%2BUMXa1WdXNEOIAjENv0tz1qYBjKqqedFroH3fRxwgX19RzA7HV6YYj8R&X-Amz-Signature=dbb563238392f70e117b7670cc29834a0bf58723767d3660ff333cd231b9b211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZEO6JMY%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BduQoNMbFh9WnAa5mBNEs%2F5aXsoiSQ3rwtTTOXcI4dQIhAMNB1Fpu97eCWSxlZ4I0XWMPKrumw2ZYkIkCvGzhL24fKv8DCHcQABoMNjM3NDIzMTgzODA1IgwAFGwIUTfX2FrcTmsq3ANjzQYLkuUUqEz9S1V73qQ%2BnTI2hJIOYWsg6pmIr%2FF6aTC3wilMVNR%2FfJIIMRWErW5FI2rnYkw1R2ZkZEdydEIkJ%2B8huNjsrqF5YT2sW%2BmLSa0p457zAYIILlKgLs0kMB95FGgu6RZ%2BE1w5pbBx0dooQepO6mMB%2B8%2BseDzi5bD7R9nT9diyOxlMeJNIAdK6v%2BRjgwCTGyFzu0s2ZQhodmcYL54oitwJYLZcmkNQscd%2Ftp3MDFXrhEoCB9Gqyzbe%2BBU9wdUA6OasxwmcZcMDMfau2KVyvmBG7xfu8E5Gm1mhvlm1DHeJwiGpXfJPbElHcdi0Ro6t71VZZBgT2uox%2F04m%2BTUxjfKC6I%2Fh%2FMt2TqUeu9ukViAvrQVAg8PEuVeki%2BXwVWTRqvolNj1CvGxh2KXVajfWSx0RDO2DxO%2FD1eZ8KTS%2BVpa34N6QrI90yG18XJJF4EfXWLZkgGqNrMzNHaCfLEp8Cq3bfHI1ZbylfJzsxvF931Mex9kd3j4qcdrFpMAI2bDM44dSfEHVWMkc6EGHTkbgO4CX9F737HtTkvXsMmDNR%2FsXLEDKwfBl9inKNEySfQ0NzUfD%2BYQhp2wozqD%2Ba9GHVjR3Oia0X4%2BAKznxpdEzKd2M6Uxnvrtr2jDExbvOBjqkAe2PIuGHf1iKIkATMG2jdC%2BZT9xpHD4qX3oZTEBmRWK96ljX4ivj9h0rI3txQEQRUq5W7nTw6lyl1wqy5FLSAd4DRq3iHWU%2BVt4hOoXl1KhQnDo3INrxgyGPeqjyFrPrYF4o984jjmupLivE0vVSsUaLY%2FQkgBH0Lu%2Fb%2BUMXa1WdXNEOIAjENv0tz1qYBjKqqedFroH3fRxwgX19RzA7HV6YYj8R&X-Amz-Signature=53abd459546f81577f0df4e032fc17e2ed3ed431582ea9f269ee2dcf543e4a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZEO6JMY%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BduQoNMbFh9WnAa5mBNEs%2F5aXsoiSQ3rwtTTOXcI4dQIhAMNB1Fpu97eCWSxlZ4I0XWMPKrumw2ZYkIkCvGzhL24fKv8DCHcQABoMNjM3NDIzMTgzODA1IgwAFGwIUTfX2FrcTmsq3ANjzQYLkuUUqEz9S1V73qQ%2BnTI2hJIOYWsg6pmIr%2FF6aTC3wilMVNR%2FfJIIMRWErW5FI2rnYkw1R2ZkZEdydEIkJ%2B8huNjsrqF5YT2sW%2BmLSa0p457zAYIILlKgLs0kMB95FGgu6RZ%2BE1w5pbBx0dooQepO6mMB%2B8%2BseDzi5bD7R9nT9diyOxlMeJNIAdK6v%2BRjgwCTGyFzu0s2ZQhodmcYL54oitwJYLZcmkNQscd%2Ftp3MDFXrhEoCB9Gqyzbe%2BBU9wdUA6OasxwmcZcMDMfau2KVyvmBG7xfu8E5Gm1mhvlm1DHeJwiGpXfJPbElHcdi0Ro6t71VZZBgT2uox%2F04m%2BTUxjfKC6I%2Fh%2FMt2TqUeu9ukViAvrQVAg8PEuVeki%2BXwVWTRqvolNj1CvGxh2KXVajfWSx0RDO2DxO%2FD1eZ8KTS%2BVpa34N6QrI90yG18XJJF4EfXWLZkgGqNrMzNHaCfLEp8Cq3bfHI1ZbylfJzsxvF931Mex9kd3j4qcdrFpMAI2bDM44dSfEHVWMkc6EGHTkbgO4CX9F737HtTkvXsMmDNR%2FsXLEDKwfBl9inKNEySfQ0NzUfD%2BYQhp2wozqD%2Ba9GHVjR3Oia0X4%2BAKznxpdEzKd2M6Uxnvrtr2jDExbvOBjqkAe2PIuGHf1iKIkATMG2jdC%2BZT9xpHD4qX3oZTEBmRWK96ljX4ivj9h0rI3txQEQRUq5W7nTw6lyl1wqy5FLSAd4DRq3iHWU%2BVt4hOoXl1KhQnDo3INrxgyGPeqjyFrPrYF4o984jjmupLivE0vVSsUaLY%2FQkgBH0Lu%2Fb%2BUMXa1WdXNEOIAjENv0tz1qYBjKqqedFroH3fRxwgX19RzA7HV6YYj8R&X-Amz-Signature=a08a161c74e2396af574dee6fdf6e47cc0a967228398c835b7f442d848952d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZEO6JMY%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BduQoNMbFh9WnAa5mBNEs%2F5aXsoiSQ3rwtTTOXcI4dQIhAMNB1Fpu97eCWSxlZ4I0XWMPKrumw2ZYkIkCvGzhL24fKv8DCHcQABoMNjM3NDIzMTgzODA1IgwAFGwIUTfX2FrcTmsq3ANjzQYLkuUUqEz9S1V73qQ%2BnTI2hJIOYWsg6pmIr%2FF6aTC3wilMVNR%2FfJIIMRWErW5FI2rnYkw1R2ZkZEdydEIkJ%2B8huNjsrqF5YT2sW%2BmLSa0p457zAYIILlKgLs0kMB95FGgu6RZ%2BE1w5pbBx0dooQepO6mMB%2B8%2BseDzi5bD7R9nT9diyOxlMeJNIAdK6v%2BRjgwCTGyFzu0s2ZQhodmcYL54oitwJYLZcmkNQscd%2Ftp3MDFXrhEoCB9Gqyzbe%2BBU9wdUA6OasxwmcZcMDMfau2KVyvmBG7xfu8E5Gm1mhvlm1DHeJwiGpXfJPbElHcdi0Ro6t71VZZBgT2uox%2F04m%2BTUxjfKC6I%2Fh%2FMt2TqUeu9ukViAvrQVAg8PEuVeki%2BXwVWTRqvolNj1CvGxh2KXVajfWSx0RDO2DxO%2FD1eZ8KTS%2BVpa34N6QrI90yG18XJJF4EfXWLZkgGqNrMzNHaCfLEp8Cq3bfHI1ZbylfJzsxvF931Mex9kd3j4qcdrFpMAI2bDM44dSfEHVWMkc6EGHTkbgO4CX9F737HtTkvXsMmDNR%2FsXLEDKwfBl9inKNEySfQ0NzUfD%2BYQhp2wozqD%2Ba9GHVjR3Oia0X4%2BAKznxpdEzKd2M6Uxnvrtr2jDExbvOBjqkAe2PIuGHf1iKIkATMG2jdC%2BZT9xpHD4qX3oZTEBmRWK96ljX4ivj9h0rI3txQEQRUq5W7nTw6lyl1wqy5FLSAd4DRq3iHWU%2BVt4hOoXl1KhQnDo3INrxgyGPeqjyFrPrYF4o984jjmupLivE0vVSsUaLY%2FQkgBH0Lu%2Fb%2BUMXa1WdXNEOIAjENv0tz1qYBjKqqedFroH3fRxwgX19RzA7HV6YYj8R&X-Amz-Signature=6293b86ddc45f0d8b4524c7f7e690e8dec8f590dc28d0a74f8d3bcf3f9de25d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZEO6JMY%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BduQoNMbFh9WnAa5mBNEs%2F5aXsoiSQ3rwtTTOXcI4dQIhAMNB1Fpu97eCWSxlZ4I0XWMPKrumw2ZYkIkCvGzhL24fKv8DCHcQABoMNjM3NDIzMTgzODA1IgwAFGwIUTfX2FrcTmsq3ANjzQYLkuUUqEz9S1V73qQ%2BnTI2hJIOYWsg6pmIr%2FF6aTC3wilMVNR%2FfJIIMRWErW5FI2rnYkw1R2ZkZEdydEIkJ%2B8huNjsrqF5YT2sW%2BmLSa0p457zAYIILlKgLs0kMB95FGgu6RZ%2BE1w5pbBx0dooQepO6mMB%2B8%2BseDzi5bD7R9nT9diyOxlMeJNIAdK6v%2BRjgwCTGyFzu0s2ZQhodmcYL54oitwJYLZcmkNQscd%2Ftp3MDFXrhEoCB9Gqyzbe%2BBU9wdUA6OasxwmcZcMDMfau2KVyvmBG7xfu8E5Gm1mhvlm1DHeJwiGpXfJPbElHcdi0Ro6t71VZZBgT2uox%2F04m%2BTUxjfKC6I%2Fh%2FMt2TqUeu9ukViAvrQVAg8PEuVeki%2BXwVWTRqvolNj1CvGxh2KXVajfWSx0RDO2DxO%2FD1eZ8KTS%2BVpa34N6QrI90yG18XJJF4EfXWLZkgGqNrMzNHaCfLEp8Cq3bfHI1ZbylfJzsxvF931Mex9kd3j4qcdrFpMAI2bDM44dSfEHVWMkc6EGHTkbgO4CX9F737HtTkvXsMmDNR%2FsXLEDKwfBl9inKNEySfQ0NzUfD%2BYQhp2wozqD%2Ba9GHVjR3Oia0X4%2BAKznxpdEzKd2M6Uxnvrtr2jDExbvOBjqkAe2PIuGHf1iKIkATMG2jdC%2BZT9xpHD4qX3oZTEBmRWK96ljX4ivj9h0rI3txQEQRUq5W7nTw6lyl1wqy5FLSAd4DRq3iHWU%2BVt4hOoXl1KhQnDo3INrxgyGPeqjyFrPrYF4o984jjmupLivE0vVSsUaLY%2FQkgBH0Lu%2Fb%2BUMXa1WdXNEOIAjENv0tz1qYBjKqqedFroH3fRxwgX19RzA7HV6YYj8R&X-Amz-Signature=6edcde9f96e07fe6c514d625561d2881dd84f040cb39209b77a4a4499f9fc369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZEO6JMY%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BduQoNMbFh9WnAa5mBNEs%2F5aXsoiSQ3rwtTTOXcI4dQIhAMNB1Fpu97eCWSxlZ4I0XWMPKrumw2ZYkIkCvGzhL24fKv8DCHcQABoMNjM3NDIzMTgzODA1IgwAFGwIUTfX2FrcTmsq3ANjzQYLkuUUqEz9S1V73qQ%2BnTI2hJIOYWsg6pmIr%2FF6aTC3wilMVNR%2FfJIIMRWErW5FI2rnYkw1R2ZkZEdydEIkJ%2B8huNjsrqF5YT2sW%2BmLSa0p457zAYIILlKgLs0kMB95FGgu6RZ%2BE1w5pbBx0dooQepO6mMB%2B8%2BseDzi5bD7R9nT9diyOxlMeJNIAdK6v%2BRjgwCTGyFzu0s2ZQhodmcYL54oitwJYLZcmkNQscd%2Ftp3MDFXrhEoCB9Gqyzbe%2BBU9wdUA6OasxwmcZcMDMfau2KVyvmBG7xfu8E5Gm1mhvlm1DHeJwiGpXfJPbElHcdi0Ro6t71VZZBgT2uox%2F04m%2BTUxjfKC6I%2Fh%2FMt2TqUeu9ukViAvrQVAg8PEuVeki%2BXwVWTRqvolNj1CvGxh2KXVajfWSx0RDO2DxO%2FD1eZ8KTS%2BVpa34N6QrI90yG18XJJF4EfXWLZkgGqNrMzNHaCfLEp8Cq3bfHI1ZbylfJzsxvF931Mex9kd3j4qcdrFpMAI2bDM44dSfEHVWMkc6EGHTkbgO4CX9F737HtTkvXsMmDNR%2FsXLEDKwfBl9inKNEySfQ0NzUfD%2BYQhp2wozqD%2Ba9GHVjR3Oia0X4%2BAKznxpdEzKd2M6Uxnvrtr2jDExbvOBjqkAe2PIuGHf1iKIkATMG2jdC%2BZT9xpHD4qX3oZTEBmRWK96ljX4ivj9h0rI3txQEQRUq5W7nTw6lyl1wqy5FLSAd4DRq3iHWU%2BVt4hOoXl1KhQnDo3INrxgyGPeqjyFrPrYF4o984jjmupLivE0vVSsUaLY%2FQkgBH0Lu%2Fb%2BUMXa1WdXNEOIAjENv0tz1qYBjKqqedFroH3fRxwgX19RzA7HV6YYj8R&X-Amz-Signature=6412e99fac99e3276dcb90067bc5a8274ef68729be338e44f95cc229835578b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZEO6JMY%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BduQoNMbFh9WnAa5mBNEs%2F5aXsoiSQ3rwtTTOXcI4dQIhAMNB1Fpu97eCWSxlZ4I0XWMPKrumw2ZYkIkCvGzhL24fKv8DCHcQABoMNjM3NDIzMTgzODA1IgwAFGwIUTfX2FrcTmsq3ANjzQYLkuUUqEz9S1V73qQ%2BnTI2hJIOYWsg6pmIr%2FF6aTC3wilMVNR%2FfJIIMRWErW5FI2rnYkw1R2ZkZEdydEIkJ%2B8huNjsrqF5YT2sW%2BmLSa0p457zAYIILlKgLs0kMB95FGgu6RZ%2BE1w5pbBx0dooQepO6mMB%2B8%2BseDzi5bD7R9nT9diyOxlMeJNIAdK6v%2BRjgwCTGyFzu0s2ZQhodmcYL54oitwJYLZcmkNQscd%2Ftp3MDFXrhEoCB9Gqyzbe%2BBU9wdUA6OasxwmcZcMDMfau2KVyvmBG7xfu8E5Gm1mhvlm1DHeJwiGpXfJPbElHcdi0Ro6t71VZZBgT2uox%2F04m%2BTUxjfKC6I%2Fh%2FMt2TqUeu9ukViAvrQVAg8PEuVeki%2BXwVWTRqvolNj1CvGxh2KXVajfWSx0RDO2DxO%2FD1eZ8KTS%2BVpa34N6QrI90yG18XJJF4EfXWLZkgGqNrMzNHaCfLEp8Cq3bfHI1ZbylfJzsxvF931Mex9kd3j4qcdrFpMAI2bDM44dSfEHVWMkc6EGHTkbgO4CX9F737HtTkvXsMmDNR%2FsXLEDKwfBl9inKNEySfQ0NzUfD%2BYQhp2wozqD%2Ba9GHVjR3Oia0X4%2BAKznxpdEzKd2M6Uxnvrtr2jDExbvOBjqkAe2PIuGHf1iKIkATMG2jdC%2BZT9xpHD4qX3oZTEBmRWK96ljX4ivj9h0rI3txQEQRUq5W7nTw6lyl1wqy5FLSAd4DRq3iHWU%2BVt4hOoXl1KhQnDo3INrxgyGPeqjyFrPrYF4o984jjmupLivE0vVSsUaLY%2FQkgBH0Lu%2Fb%2BUMXa1WdXNEOIAjENv0tz1qYBjKqqedFroH3fRxwgX19RzA7HV6YYj8R&X-Amz-Signature=a4f53a03017d56ccffd5afa25cbd9227f474cebb50c4dc3e846d9d80046b308b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
