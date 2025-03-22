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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7HATUN%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDez1v%2BIH2OBN4L0X3li2whxkq4EHG2W%2B5orbAHG0ZiQAIhAJNJDGQ8nh7dLh2F7sZkUJpd6B3MVTteqE90dDnhi6XoKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhCjd0MDZnSdvDdGEq3AN%2BINmmOJ9StyXHGBDse7v%2FxrLAXkbU5S6pX8puief0Nwl6DdB3DnPhRnvV02uCD4V3Dw3JiMecvbd77RqoIingKFbeC3HvW16mfNyg8EndguAeEiDWRbISVMLLh2JyVfdfBdKJ9FpHtvB22XhXtLyLmSvXtILNrnO6P%2BlFoSkK5NeWCbmphBdxZ0JvYo7%2B%2F3Dx4M1mmzixgZzzmUlwckVBZ5n%2Bm3IOA6TRhIHfzN%2FI%2Fh9U8to8eIWrk4OcEABUK7vVd3w3FmGatKouBbhu2S6w%2BEYr%2BxGsmHsVhA0B3SkdHhdV0K1tYgmeLTkKOnNjmcxa%2FdsPERJJAzgYFuYc22hLqF9ww9%2Fy9cilfJc5WuT5TN5WENSF0erZQ%2BqKc9HUezGuuQNVnz0l6b4yk1JSbY9JAc28%2B0zRPv04OwyLYOLhN8Lg5oEO%2Fjys3VJJe4urnyGjjxuyO5%2BLaqbrKZkrVHIKquKld6nZ9emR8LJTp3LPwlg7vVLHs%2BXXFIOMHOoimmqOTKAosKgJ4dxfRp%2FYBDBWST7nbB4QaNkZUadhWOO%2BZFDdiRw6dXtDw4tePsoGbDlNl4i2wKk0L%2F0GhETOiyDW4%2FlNO34D7yIndg2ZhjiBEhc47YOylsHyaor03DCP7%2Fu%2BBjqkAeIB4Dwu3tnxccP7khdHl21WwNPbEqjuCfqXs%2F9zdO4y%2B6m7yjOUwvJEWjM52XD5ri70x11AjyrV04B7z1w5BUe2PvoF%2FxG83aaZ0o9bbmGGexaRLTsKG8jP465EfBENMYc2fqW9XwlIy71AhC2ror9ucxGgMTvrAJ7%2Bnv9aa6YlozA3F1R9xZYYzHPFOgZcD5H27s5upZ4LkrFnqEvbL2MqDRUn&X-Amz-Signature=f3596c9e6fc3c120e3f12854c2fafe6da38afb870d6f172027674f8f7a24ac19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7HATUN%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDez1v%2BIH2OBN4L0X3li2whxkq4EHG2W%2B5orbAHG0ZiQAIhAJNJDGQ8nh7dLh2F7sZkUJpd6B3MVTteqE90dDnhi6XoKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhCjd0MDZnSdvDdGEq3AN%2BINmmOJ9StyXHGBDse7v%2FxrLAXkbU5S6pX8puief0Nwl6DdB3DnPhRnvV02uCD4V3Dw3JiMecvbd77RqoIingKFbeC3HvW16mfNyg8EndguAeEiDWRbISVMLLh2JyVfdfBdKJ9FpHtvB22XhXtLyLmSvXtILNrnO6P%2BlFoSkK5NeWCbmphBdxZ0JvYo7%2B%2F3Dx4M1mmzixgZzzmUlwckVBZ5n%2Bm3IOA6TRhIHfzN%2FI%2Fh9U8to8eIWrk4OcEABUK7vVd3w3FmGatKouBbhu2S6w%2BEYr%2BxGsmHsVhA0B3SkdHhdV0K1tYgmeLTkKOnNjmcxa%2FdsPERJJAzgYFuYc22hLqF9ww9%2Fy9cilfJc5WuT5TN5WENSF0erZQ%2BqKc9HUezGuuQNVnz0l6b4yk1JSbY9JAc28%2B0zRPv04OwyLYOLhN8Lg5oEO%2Fjys3VJJe4urnyGjjxuyO5%2BLaqbrKZkrVHIKquKld6nZ9emR8LJTp3LPwlg7vVLHs%2BXXFIOMHOoimmqOTKAosKgJ4dxfRp%2FYBDBWST7nbB4QaNkZUadhWOO%2BZFDdiRw6dXtDw4tePsoGbDlNl4i2wKk0L%2F0GhETOiyDW4%2FlNO34D7yIndg2ZhjiBEhc47YOylsHyaor03DCP7%2Fu%2BBjqkAeIB4Dwu3tnxccP7khdHl21WwNPbEqjuCfqXs%2F9zdO4y%2B6m7yjOUwvJEWjM52XD5ri70x11AjyrV04B7z1w5BUe2PvoF%2FxG83aaZ0o9bbmGGexaRLTsKG8jP465EfBENMYc2fqW9XwlIy71AhC2ror9ucxGgMTvrAJ7%2Bnv9aa6YlozA3F1R9xZYYzHPFOgZcD5H27s5upZ4LkrFnqEvbL2MqDRUn&X-Amz-Signature=3cbfb1997c47ecff59915f79978466645457b28bb88e204050130ae6c3ed25e4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7HATUN%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDez1v%2BIH2OBN4L0X3li2whxkq4EHG2W%2B5orbAHG0ZiQAIhAJNJDGQ8nh7dLh2F7sZkUJpd6B3MVTteqE90dDnhi6XoKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhCjd0MDZnSdvDdGEq3AN%2BINmmOJ9StyXHGBDse7v%2FxrLAXkbU5S6pX8puief0Nwl6DdB3DnPhRnvV02uCD4V3Dw3JiMecvbd77RqoIingKFbeC3HvW16mfNyg8EndguAeEiDWRbISVMLLh2JyVfdfBdKJ9FpHtvB22XhXtLyLmSvXtILNrnO6P%2BlFoSkK5NeWCbmphBdxZ0JvYo7%2B%2F3Dx4M1mmzixgZzzmUlwckVBZ5n%2Bm3IOA6TRhIHfzN%2FI%2Fh9U8to8eIWrk4OcEABUK7vVd3w3FmGatKouBbhu2S6w%2BEYr%2BxGsmHsVhA0B3SkdHhdV0K1tYgmeLTkKOnNjmcxa%2FdsPERJJAzgYFuYc22hLqF9ww9%2Fy9cilfJc5WuT5TN5WENSF0erZQ%2BqKc9HUezGuuQNVnz0l6b4yk1JSbY9JAc28%2B0zRPv04OwyLYOLhN8Lg5oEO%2Fjys3VJJe4urnyGjjxuyO5%2BLaqbrKZkrVHIKquKld6nZ9emR8LJTp3LPwlg7vVLHs%2BXXFIOMHOoimmqOTKAosKgJ4dxfRp%2FYBDBWST7nbB4QaNkZUadhWOO%2BZFDdiRw6dXtDw4tePsoGbDlNl4i2wKk0L%2F0GhETOiyDW4%2FlNO34D7yIndg2ZhjiBEhc47YOylsHyaor03DCP7%2Fu%2BBjqkAeIB4Dwu3tnxccP7khdHl21WwNPbEqjuCfqXs%2F9zdO4y%2B6m7yjOUwvJEWjM52XD5ri70x11AjyrV04B7z1w5BUe2PvoF%2FxG83aaZ0o9bbmGGexaRLTsKG8jP465EfBENMYc2fqW9XwlIy71AhC2ror9ucxGgMTvrAJ7%2Bnv9aa6YlozA3F1R9xZYYzHPFOgZcD5H27s5upZ4LkrFnqEvbL2MqDRUn&X-Amz-Signature=a7d1d286f65c7ca9183621630a3a7b65247e7bb75a3205c2a75f21ad9abc6204&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7HATUN%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDez1v%2BIH2OBN4L0X3li2whxkq4EHG2W%2B5orbAHG0ZiQAIhAJNJDGQ8nh7dLh2F7sZkUJpd6B3MVTteqE90dDnhi6XoKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhCjd0MDZnSdvDdGEq3AN%2BINmmOJ9StyXHGBDse7v%2FxrLAXkbU5S6pX8puief0Nwl6DdB3DnPhRnvV02uCD4V3Dw3JiMecvbd77RqoIingKFbeC3HvW16mfNyg8EndguAeEiDWRbISVMLLh2JyVfdfBdKJ9FpHtvB22XhXtLyLmSvXtILNrnO6P%2BlFoSkK5NeWCbmphBdxZ0JvYo7%2B%2F3Dx4M1mmzixgZzzmUlwckVBZ5n%2Bm3IOA6TRhIHfzN%2FI%2Fh9U8to8eIWrk4OcEABUK7vVd3w3FmGatKouBbhu2S6w%2BEYr%2BxGsmHsVhA0B3SkdHhdV0K1tYgmeLTkKOnNjmcxa%2FdsPERJJAzgYFuYc22hLqF9ww9%2Fy9cilfJc5WuT5TN5WENSF0erZQ%2BqKc9HUezGuuQNVnz0l6b4yk1JSbY9JAc28%2B0zRPv04OwyLYOLhN8Lg5oEO%2Fjys3VJJe4urnyGjjxuyO5%2BLaqbrKZkrVHIKquKld6nZ9emR8LJTp3LPwlg7vVLHs%2BXXFIOMHOoimmqOTKAosKgJ4dxfRp%2FYBDBWST7nbB4QaNkZUadhWOO%2BZFDdiRw6dXtDw4tePsoGbDlNl4i2wKk0L%2F0GhETOiyDW4%2FlNO34D7yIndg2ZhjiBEhc47YOylsHyaor03DCP7%2Fu%2BBjqkAeIB4Dwu3tnxccP7khdHl21WwNPbEqjuCfqXs%2F9zdO4y%2B6m7yjOUwvJEWjM52XD5ri70x11AjyrV04B7z1w5BUe2PvoF%2FxG83aaZ0o9bbmGGexaRLTsKG8jP465EfBENMYc2fqW9XwlIy71AhC2ror9ucxGgMTvrAJ7%2Bnv9aa6YlozA3F1R9xZYYzHPFOgZcD5H27s5upZ4LkrFnqEvbL2MqDRUn&X-Amz-Signature=e946ff4a1cabf1cf970017eed8a20ef246a91b49712b89543734697d14016c10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7HATUN%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDez1v%2BIH2OBN4L0X3li2whxkq4EHG2W%2B5orbAHG0ZiQAIhAJNJDGQ8nh7dLh2F7sZkUJpd6B3MVTteqE90dDnhi6XoKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhCjd0MDZnSdvDdGEq3AN%2BINmmOJ9StyXHGBDse7v%2FxrLAXkbU5S6pX8puief0Nwl6DdB3DnPhRnvV02uCD4V3Dw3JiMecvbd77RqoIingKFbeC3HvW16mfNyg8EndguAeEiDWRbISVMLLh2JyVfdfBdKJ9FpHtvB22XhXtLyLmSvXtILNrnO6P%2BlFoSkK5NeWCbmphBdxZ0JvYo7%2B%2F3Dx4M1mmzixgZzzmUlwckVBZ5n%2Bm3IOA6TRhIHfzN%2FI%2Fh9U8to8eIWrk4OcEABUK7vVd3w3FmGatKouBbhu2S6w%2BEYr%2BxGsmHsVhA0B3SkdHhdV0K1tYgmeLTkKOnNjmcxa%2FdsPERJJAzgYFuYc22hLqF9ww9%2Fy9cilfJc5WuT5TN5WENSF0erZQ%2BqKc9HUezGuuQNVnz0l6b4yk1JSbY9JAc28%2B0zRPv04OwyLYOLhN8Lg5oEO%2Fjys3VJJe4urnyGjjxuyO5%2BLaqbrKZkrVHIKquKld6nZ9emR8LJTp3LPwlg7vVLHs%2BXXFIOMHOoimmqOTKAosKgJ4dxfRp%2FYBDBWST7nbB4QaNkZUadhWOO%2BZFDdiRw6dXtDw4tePsoGbDlNl4i2wKk0L%2F0GhETOiyDW4%2FlNO34D7yIndg2ZhjiBEhc47YOylsHyaor03DCP7%2Fu%2BBjqkAeIB4Dwu3tnxccP7khdHl21WwNPbEqjuCfqXs%2F9zdO4y%2B6m7yjOUwvJEWjM52XD5ri70x11AjyrV04B7z1w5BUe2PvoF%2FxG83aaZ0o9bbmGGexaRLTsKG8jP465EfBENMYc2fqW9XwlIy71AhC2ror9ucxGgMTvrAJ7%2Bnv9aa6YlozA3F1R9xZYYzHPFOgZcD5H27s5upZ4LkrFnqEvbL2MqDRUn&X-Amz-Signature=345ed704d25ba7d09d2b02de05af4443b6383b44f9a4a4887c6dfb8995829a50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7HATUN%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDez1v%2BIH2OBN4L0X3li2whxkq4EHG2W%2B5orbAHG0ZiQAIhAJNJDGQ8nh7dLh2F7sZkUJpd6B3MVTteqE90dDnhi6XoKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhCjd0MDZnSdvDdGEq3AN%2BINmmOJ9StyXHGBDse7v%2FxrLAXkbU5S6pX8puief0Nwl6DdB3DnPhRnvV02uCD4V3Dw3JiMecvbd77RqoIingKFbeC3HvW16mfNyg8EndguAeEiDWRbISVMLLh2JyVfdfBdKJ9FpHtvB22XhXtLyLmSvXtILNrnO6P%2BlFoSkK5NeWCbmphBdxZ0JvYo7%2B%2F3Dx4M1mmzixgZzzmUlwckVBZ5n%2Bm3IOA6TRhIHfzN%2FI%2Fh9U8to8eIWrk4OcEABUK7vVd3w3FmGatKouBbhu2S6w%2BEYr%2BxGsmHsVhA0B3SkdHhdV0K1tYgmeLTkKOnNjmcxa%2FdsPERJJAzgYFuYc22hLqF9ww9%2Fy9cilfJc5WuT5TN5WENSF0erZQ%2BqKc9HUezGuuQNVnz0l6b4yk1JSbY9JAc28%2B0zRPv04OwyLYOLhN8Lg5oEO%2Fjys3VJJe4urnyGjjxuyO5%2BLaqbrKZkrVHIKquKld6nZ9emR8LJTp3LPwlg7vVLHs%2BXXFIOMHOoimmqOTKAosKgJ4dxfRp%2FYBDBWST7nbB4QaNkZUadhWOO%2BZFDdiRw6dXtDw4tePsoGbDlNl4i2wKk0L%2F0GhETOiyDW4%2FlNO34D7yIndg2ZhjiBEhc47YOylsHyaor03DCP7%2Fu%2BBjqkAeIB4Dwu3tnxccP7khdHl21WwNPbEqjuCfqXs%2F9zdO4y%2B6m7yjOUwvJEWjM52XD5ri70x11AjyrV04B7z1w5BUe2PvoF%2FxG83aaZ0o9bbmGGexaRLTsKG8jP465EfBENMYc2fqW9XwlIy71AhC2ror9ucxGgMTvrAJ7%2Bnv9aa6YlozA3F1R9xZYYzHPFOgZcD5H27s5upZ4LkrFnqEvbL2MqDRUn&X-Amz-Signature=f2ffdfe4edbc6c532a64375dbce1284a095c5f753e1d398eff72b10ab8384d54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7HATUN%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDez1v%2BIH2OBN4L0X3li2whxkq4EHG2W%2B5orbAHG0ZiQAIhAJNJDGQ8nh7dLh2F7sZkUJpd6B3MVTteqE90dDnhi6XoKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhCjd0MDZnSdvDdGEq3AN%2BINmmOJ9StyXHGBDse7v%2FxrLAXkbU5S6pX8puief0Nwl6DdB3DnPhRnvV02uCD4V3Dw3JiMecvbd77RqoIingKFbeC3HvW16mfNyg8EndguAeEiDWRbISVMLLh2JyVfdfBdKJ9FpHtvB22XhXtLyLmSvXtILNrnO6P%2BlFoSkK5NeWCbmphBdxZ0JvYo7%2B%2F3Dx4M1mmzixgZzzmUlwckVBZ5n%2Bm3IOA6TRhIHfzN%2FI%2Fh9U8to8eIWrk4OcEABUK7vVd3w3FmGatKouBbhu2S6w%2BEYr%2BxGsmHsVhA0B3SkdHhdV0K1tYgmeLTkKOnNjmcxa%2FdsPERJJAzgYFuYc22hLqF9ww9%2Fy9cilfJc5WuT5TN5WENSF0erZQ%2BqKc9HUezGuuQNVnz0l6b4yk1JSbY9JAc28%2B0zRPv04OwyLYOLhN8Lg5oEO%2Fjys3VJJe4urnyGjjxuyO5%2BLaqbrKZkrVHIKquKld6nZ9emR8LJTp3LPwlg7vVLHs%2BXXFIOMHOoimmqOTKAosKgJ4dxfRp%2FYBDBWST7nbB4QaNkZUadhWOO%2BZFDdiRw6dXtDw4tePsoGbDlNl4i2wKk0L%2F0GhETOiyDW4%2FlNO34D7yIndg2ZhjiBEhc47YOylsHyaor03DCP7%2Fu%2BBjqkAeIB4Dwu3tnxccP7khdHl21WwNPbEqjuCfqXs%2F9zdO4y%2B6m7yjOUwvJEWjM52XD5ri70x11AjyrV04B7z1w5BUe2PvoF%2FxG83aaZ0o9bbmGGexaRLTsKG8jP465EfBENMYc2fqW9XwlIy71AhC2ror9ucxGgMTvrAJ7%2Bnv9aa6YlozA3F1R9xZYYzHPFOgZcD5H27s5upZ4LkrFnqEvbL2MqDRUn&X-Amz-Signature=5c2cdf678b1dfe18cb7c87cae6519b76d11837ea58c42233db1a4b5f0a00fe55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7HATUN%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDez1v%2BIH2OBN4L0X3li2whxkq4EHG2W%2B5orbAHG0ZiQAIhAJNJDGQ8nh7dLh2F7sZkUJpd6B3MVTteqE90dDnhi6XoKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhCjd0MDZnSdvDdGEq3AN%2BINmmOJ9StyXHGBDse7v%2FxrLAXkbU5S6pX8puief0Nwl6DdB3DnPhRnvV02uCD4V3Dw3JiMecvbd77RqoIingKFbeC3HvW16mfNyg8EndguAeEiDWRbISVMLLh2JyVfdfBdKJ9FpHtvB22XhXtLyLmSvXtILNrnO6P%2BlFoSkK5NeWCbmphBdxZ0JvYo7%2B%2F3Dx4M1mmzixgZzzmUlwckVBZ5n%2Bm3IOA6TRhIHfzN%2FI%2Fh9U8to8eIWrk4OcEABUK7vVd3w3FmGatKouBbhu2S6w%2BEYr%2BxGsmHsVhA0B3SkdHhdV0K1tYgmeLTkKOnNjmcxa%2FdsPERJJAzgYFuYc22hLqF9ww9%2Fy9cilfJc5WuT5TN5WENSF0erZQ%2BqKc9HUezGuuQNVnz0l6b4yk1JSbY9JAc28%2B0zRPv04OwyLYOLhN8Lg5oEO%2Fjys3VJJe4urnyGjjxuyO5%2BLaqbrKZkrVHIKquKld6nZ9emR8LJTp3LPwlg7vVLHs%2BXXFIOMHOoimmqOTKAosKgJ4dxfRp%2FYBDBWST7nbB4QaNkZUadhWOO%2BZFDdiRw6dXtDw4tePsoGbDlNl4i2wKk0L%2F0GhETOiyDW4%2FlNO34D7yIndg2ZhjiBEhc47YOylsHyaor03DCP7%2Fu%2BBjqkAeIB4Dwu3tnxccP7khdHl21WwNPbEqjuCfqXs%2F9zdO4y%2B6m7yjOUwvJEWjM52XD5ri70x11AjyrV04B7z1w5BUe2PvoF%2FxG83aaZ0o9bbmGGexaRLTsKG8jP465EfBENMYc2fqW9XwlIy71AhC2ror9ucxGgMTvrAJ7%2Bnv9aa6YlozA3F1R9xZYYzHPFOgZcD5H27s5upZ4LkrFnqEvbL2MqDRUn&X-Amz-Signature=ed31cdd1983108df80f8b07b32f2748a89f68dbd7844326bc8789ae48f2eed2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
