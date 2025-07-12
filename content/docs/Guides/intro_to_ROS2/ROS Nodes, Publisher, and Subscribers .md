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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MPJ2LD7%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFv85hS1bQ0lCPLJyDtygaZu2lppOYMqCv9XEt4C7s1AiEA%2BvHdl3P72GSAkgMdSvPSQq9SjGftgqfRpxFC%2BYPHC1YqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoSdDz5bz1snjVzCSrcA7PxrRdCqrSvPctT8N%2BXAYVXHtAwTIqySOaNIAjxeuKOQkwMoDKB0kheMmOOpehARH2MlIy3Ezo4Ran4PlrwU%2FjTxt5Pk3OfJ8MJmkWAaSbI%2FZJrisCbUHsXnhkYKtfaPCzUELuQ86qr27OguPKmA%2BNhaApo2wYsYtcJMR5mUYp8OMmTRcFVwJYGnO7HSFGUiQeQuTCa%2B7ECCIdo9kz06Sru1c89LYOWoP4f6CPP1utPwROkLViTDd6SYkG0PHHnamzH1XfN732FQNcLpBgho85KpltX12NEbZmYXTmkJiheJ%2FOHZuvk8ncpkPEuo31QYiksWQeXPYhVI2FBRCIaHqNyDheZDGVYKY9wpHXXrzlQiHXT%2B%2B5FnuVIZw2kplH1HtUNJV%2FEfoSUDYmsmnFCADfmUn9HN9N%2FBpabk1ejm1BOEggDcXHj6x0UjJbFoGSEpxiXv9f3ukq8JbaA%2Fn5Yl1fPKRc9w%2FnJ5IFilQun6q1X0dbwqCSYaGgAnVCbYZPUzsqmhwCM898FhfNe%2F3c3h4jvKLTeohvE9qaFZkxLEXoB18BSgymI5R6zg4kbjMrjrNpMH2l%2Bmi9dM7QapY1pJkG6OYLbQcW7dhVKmStKSCt8ImvMZUn6JgfKQSlzMPyDy8MGOqUBPlFmYEZXwi1qgLt1JK8eBPddJHih5D6A6zH9wjQXqyxLc9YLWLKgKbx1W%2FLfEj%2BXvOkexVQLaLaUrHzBO9NaGyuJ6tr4wvB0TD2aeDNB9V%2FuIEWROyWnPxZj%2FJdWc2PWht1NAmstUxLCOvAZDiHbEej7G82QYDmUpMUy9m%2Fj6OTOGxF66ETPwd57%2BuaooMUIpWxjCFsI9uWScmcvT5rW4Ce1g%2BKt&X-Amz-Signature=4e7618d8c9c30df47846e68d03373d2afa4b538af5a5066901db657662bd122d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MPJ2LD7%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFv85hS1bQ0lCPLJyDtygaZu2lppOYMqCv9XEt4C7s1AiEA%2BvHdl3P72GSAkgMdSvPSQq9SjGftgqfRpxFC%2BYPHC1YqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoSdDz5bz1snjVzCSrcA7PxrRdCqrSvPctT8N%2BXAYVXHtAwTIqySOaNIAjxeuKOQkwMoDKB0kheMmOOpehARH2MlIy3Ezo4Ran4PlrwU%2FjTxt5Pk3OfJ8MJmkWAaSbI%2FZJrisCbUHsXnhkYKtfaPCzUELuQ86qr27OguPKmA%2BNhaApo2wYsYtcJMR5mUYp8OMmTRcFVwJYGnO7HSFGUiQeQuTCa%2B7ECCIdo9kz06Sru1c89LYOWoP4f6CPP1utPwROkLViTDd6SYkG0PHHnamzH1XfN732FQNcLpBgho85KpltX12NEbZmYXTmkJiheJ%2FOHZuvk8ncpkPEuo31QYiksWQeXPYhVI2FBRCIaHqNyDheZDGVYKY9wpHXXrzlQiHXT%2B%2B5FnuVIZw2kplH1HtUNJV%2FEfoSUDYmsmnFCADfmUn9HN9N%2FBpabk1ejm1BOEggDcXHj6x0UjJbFoGSEpxiXv9f3ukq8JbaA%2Fn5Yl1fPKRc9w%2FnJ5IFilQun6q1X0dbwqCSYaGgAnVCbYZPUzsqmhwCM898FhfNe%2F3c3h4jvKLTeohvE9qaFZkxLEXoB18BSgymI5R6zg4kbjMrjrNpMH2l%2Bmi9dM7QapY1pJkG6OYLbQcW7dhVKmStKSCt8ImvMZUn6JgfKQSlzMPyDy8MGOqUBPlFmYEZXwi1qgLt1JK8eBPddJHih5D6A6zH9wjQXqyxLc9YLWLKgKbx1W%2FLfEj%2BXvOkexVQLaLaUrHzBO9NaGyuJ6tr4wvB0TD2aeDNB9V%2FuIEWROyWnPxZj%2FJdWc2PWht1NAmstUxLCOvAZDiHbEej7G82QYDmUpMUy9m%2Fj6OTOGxF66ETPwd57%2BuaooMUIpWxjCFsI9uWScmcvT5rW4Ce1g%2BKt&X-Amz-Signature=9ba8aa26f1c0fc758dd78b298da43269482abc16d16b755ce8b4b55a7acbe569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MPJ2LD7%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFv85hS1bQ0lCPLJyDtygaZu2lppOYMqCv9XEt4C7s1AiEA%2BvHdl3P72GSAkgMdSvPSQq9SjGftgqfRpxFC%2BYPHC1YqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoSdDz5bz1snjVzCSrcA7PxrRdCqrSvPctT8N%2BXAYVXHtAwTIqySOaNIAjxeuKOQkwMoDKB0kheMmOOpehARH2MlIy3Ezo4Ran4PlrwU%2FjTxt5Pk3OfJ8MJmkWAaSbI%2FZJrisCbUHsXnhkYKtfaPCzUELuQ86qr27OguPKmA%2BNhaApo2wYsYtcJMR5mUYp8OMmTRcFVwJYGnO7HSFGUiQeQuTCa%2B7ECCIdo9kz06Sru1c89LYOWoP4f6CPP1utPwROkLViTDd6SYkG0PHHnamzH1XfN732FQNcLpBgho85KpltX12NEbZmYXTmkJiheJ%2FOHZuvk8ncpkPEuo31QYiksWQeXPYhVI2FBRCIaHqNyDheZDGVYKY9wpHXXrzlQiHXT%2B%2B5FnuVIZw2kplH1HtUNJV%2FEfoSUDYmsmnFCADfmUn9HN9N%2FBpabk1ejm1BOEggDcXHj6x0UjJbFoGSEpxiXv9f3ukq8JbaA%2Fn5Yl1fPKRc9w%2FnJ5IFilQun6q1X0dbwqCSYaGgAnVCbYZPUzsqmhwCM898FhfNe%2F3c3h4jvKLTeohvE9qaFZkxLEXoB18BSgymI5R6zg4kbjMrjrNpMH2l%2Bmi9dM7QapY1pJkG6OYLbQcW7dhVKmStKSCt8ImvMZUn6JgfKQSlzMPyDy8MGOqUBPlFmYEZXwi1qgLt1JK8eBPddJHih5D6A6zH9wjQXqyxLc9YLWLKgKbx1W%2FLfEj%2BXvOkexVQLaLaUrHzBO9NaGyuJ6tr4wvB0TD2aeDNB9V%2FuIEWROyWnPxZj%2FJdWc2PWht1NAmstUxLCOvAZDiHbEej7G82QYDmUpMUy9m%2Fj6OTOGxF66ETPwd57%2BuaooMUIpWxjCFsI9uWScmcvT5rW4Ce1g%2BKt&X-Amz-Signature=b2f691bfa5f3a0c49f481425b60d0367710ac028ea7e22b1a7aa9c858dca98ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MPJ2LD7%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFv85hS1bQ0lCPLJyDtygaZu2lppOYMqCv9XEt4C7s1AiEA%2BvHdl3P72GSAkgMdSvPSQq9SjGftgqfRpxFC%2BYPHC1YqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoSdDz5bz1snjVzCSrcA7PxrRdCqrSvPctT8N%2BXAYVXHtAwTIqySOaNIAjxeuKOQkwMoDKB0kheMmOOpehARH2MlIy3Ezo4Ran4PlrwU%2FjTxt5Pk3OfJ8MJmkWAaSbI%2FZJrisCbUHsXnhkYKtfaPCzUELuQ86qr27OguPKmA%2BNhaApo2wYsYtcJMR5mUYp8OMmTRcFVwJYGnO7HSFGUiQeQuTCa%2B7ECCIdo9kz06Sru1c89LYOWoP4f6CPP1utPwROkLViTDd6SYkG0PHHnamzH1XfN732FQNcLpBgho85KpltX12NEbZmYXTmkJiheJ%2FOHZuvk8ncpkPEuo31QYiksWQeXPYhVI2FBRCIaHqNyDheZDGVYKY9wpHXXrzlQiHXT%2B%2B5FnuVIZw2kplH1HtUNJV%2FEfoSUDYmsmnFCADfmUn9HN9N%2FBpabk1ejm1BOEggDcXHj6x0UjJbFoGSEpxiXv9f3ukq8JbaA%2Fn5Yl1fPKRc9w%2FnJ5IFilQun6q1X0dbwqCSYaGgAnVCbYZPUzsqmhwCM898FhfNe%2F3c3h4jvKLTeohvE9qaFZkxLEXoB18BSgymI5R6zg4kbjMrjrNpMH2l%2Bmi9dM7QapY1pJkG6OYLbQcW7dhVKmStKSCt8ImvMZUn6JgfKQSlzMPyDy8MGOqUBPlFmYEZXwi1qgLt1JK8eBPddJHih5D6A6zH9wjQXqyxLc9YLWLKgKbx1W%2FLfEj%2BXvOkexVQLaLaUrHzBO9NaGyuJ6tr4wvB0TD2aeDNB9V%2FuIEWROyWnPxZj%2FJdWc2PWht1NAmstUxLCOvAZDiHbEej7G82QYDmUpMUy9m%2Fj6OTOGxF66ETPwd57%2BuaooMUIpWxjCFsI9uWScmcvT5rW4Ce1g%2BKt&X-Amz-Signature=d163e9901ab2433c225d55510a92dc55407013b7e5dea8b067146bb8d6cf9854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MPJ2LD7%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFv85hS1bQ0lCPLJyDtygaZu2lppOYMqCv9XEt4C7s1AiEA%2BvHdl3P72GSAkgMdSvPSQq9SjGftgqfRpxFC%2BYPHC1YqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoSdDz5bz1snjVzCSrcA7PxrRdCqrSvPctT8N%2BXAYVXHtAwTIqySOaNIAjxeuKOQkwMoDKB0kheMmOOpehARH2MlIy3Ezo4Ran4PlrwU%2FjTxt5Pk3OfJ8MJmkWAaSbI%2FZJrisCbUHsXnhkYKtfaPCzUELuQ86qr27OguPKmA%2BNhaApo2wYsYtcJMR5mUYp8OMmTRcFVwJYGnO7HSFGUiQeQuTCa%2B7ECCIdo9kz06Sru1c89LYOWoP4f6CPP1utPwROkLViTDd6SYkG0PHHnamzH1XfN732FQNcLpBgho85KpltX12NEbZmYXTmkJiheJ%2FOHZuvk8ncpkPEuo31QYiksWQeXPYhVI2FBRCIaHqNyDheZDGVYKY9wpHXXrzlQiHXT%2B%2B5FnuVIZw2kplH1HtUNJV%2FEfoSUDYmsmnFCADfmUn9HN9N%2FBpabk1ejm1BOEggDcXHj6x0UjJbFoGSEpxiXv9f3ukq8JbaA%2Fn5Yl1fPKRc9w%2FnJ5IFilQun6q1X0dbwqCSYaGgAnVCbYZPUzsqmhwCM898FhfNe%2F3c3h4jvKLTeohvE9qaFZkxLEXoB18BSgymI5R6zg4kbjMrjrNpMH2l%2Bmi9dM7QapY1pJkG6OYLbQcW7dhVKmStKSCt8ImvMZUn6JgfKQSlzMPyDy8MGOqUBPlFmYEZXwi1qgLt1JK8eBPddJHih5D6A6zH9wjQXqyxLc9YLWLKgKbx1W%2FLfEj%2BXvOkexVQLaLaUrHzBO9NaGyuJ6tr4wvB0TD2aeDNB9V%2FuIEWROyWnPxZj%2FJdWc2PWht1NAmstUxLCOvAZDiHbEej7G82QYDmUpMUy9m%2Fj6OTOGxF66ETPwd57%2BuaooMUIpWxjCFsI9uWScmcvT5rW4Ce1g%2BKt&X-Amz-Signature=aa1a49e9fbb03edb54d805ac7338757c23c36f22ed13c6a9c560824c9bc0ec60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MPJ2LD7%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFv85hS1bQ0lCPLJyDtygaZu2lppOYMqCv9XEt4C7s1AiEA%2BvHdl3P72GSAkgMdSvPSQq9SjGftgqfRpxFC%2BYPHC1YqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoSdDz5bz1snjVzCSrcA7PxrRdCqrSvPctT8N%2BXAYVXHtAwTIqySOaNIAjxeuKOQkwMoDKB0kheMmOOpehARH2MlIy3Ezo4Ran4PlrwU%2FjTxt5Pk3OfJ8MJmkWAaSbI%2FZJrisCbUHsXnhkYKtfaPCzUELuQ86qr27OguPKmA%2BNhaApo2wYsYtcJMR5mUYp8OMmTRcFVwJYGnO7HSFGUiQeQuTCa%2B7ECCIdo9kz06Sru1c89LYOWoP4f6CPP1utPwROkLViTDd6SYkG0PHHnamzH1XfN732FQNcLpBgho85KpltX12NEbZmYXTmkJiheJ%2FOHZuvk8ncpkPEuo31QYiksWQeXPYhVI2FBRCIaHqNyDheZDGVYKY9wpHXXrzlQiHXT%2B%2B5FnuVIZw2kplH1HtUNJV%2FEfoSUDYmsmnFCADfmUn9HN9N%2FBpabk1ejm1BOEggDcXHj6x0UjJbFoGSEpxiXv9f3ukq8JbaA%2Fn5Yl1fPKRc9w%2FnJ5IFilQun6q1X0dbwqCSYaGgAnVCbYZPUzsqmhwCM898FhfNe%2F3c3h4jvKLTeohvE9qaFZkxLEXoB18BSgymI5R6zg4kbjMrjrNpMH2l%2Bmi9dM7QapY1pJkG6OYLbQcW7dhVKmStKSCt8ImvMZUn6JgfKQSlzMPyDy8MGOqUBPlFmYEZXwi1qgLt1JK8eBPddJHih5D6A6zH9wjQXqyxLc9YLWLKgKbx1W%2FLfEj%2BXvOkexVQLaLaUrHzBO9NaGyuJ6tr4wvB0TD2aeDNB9V%2FuIEWROyWnPxZj%2FJdWc2PWht1NAmstUxLCOvAZDiHbEej7G82QYDmUpMUy9m%2Fj6OTOGxF66ETPwd57%2BuaooMUIpWxjCFsI9uWScmcvT5rW4Ce1g%2BKt&X-Amz-Signature=cbf579af247e80394bffd642b3041a932752e2fe04c713efc4460d383197dbdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MPJ2LD7%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFv85hS1bQ0lCPLJyDtygaZu2lppOYMqCv9XEt4C7s1AiEA%2BvHdl3P72GSAkgMdSvPSQq9SjGftgqfRpxFC%2BYPHC1YqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoSdDz5bz1snjVzCSrcA7PxrRdCqrSvPctT8N%2BXAYVXHtAwTIqySOaNIAjxeuKOQkwMoDKB0kheMmOOpehARH2MlIy3Ezo4Ran4PlrwU%2FjTxt5Pk3OfJ8MJmkWAaSbI%2FZJrisCbUHsXnhkYKtfaPCzUELuQ86qr27OguPKmA%2BNhaApo2wYsYtcJMR5mUYp8OMmTRcFVwJYGnO7HSFGUiQeQuTCa%2B7ECCIdo9kz06Sru1c89LYOWoP4f6CPP1utPwROkLViTDd6SYkG0PHHnamzH1XfN732FQNcLpBgho85KpltX12NEbZmYXTmkJiheJ%2FOHZuvk8ncpkPEuo31QYiksWQeXPYhVI2FBRCIaHqNyDheZDGVYKY9wpHXXrzlQiHXT%2B%2B5FnuVIZw2kplH1HtUNJV%2FEfoSUDYmsmnFCADfmUn9HN9N%2FBpabk1ejm1BOEggDcXHj6x0UjJbFoGSEpxiXv9f3ukq8JbaA%2Fn5Yl1fPKRc9w%2FnJ5IFilQun6q1X0dbwqCSYaGgAnVCbYZPUzsqmhwCM898FhfNe%2F3c3h4jvKLTeohvE9qaFZkxLEXoB18BSgymI5R6zg4kbjMrjrNpMH2l%2Bmi9dM7QapY1pJkG6OYLbQcW7dhVKmStKSCt8ImvMZUn6JgfKQSlzMPyDy8MGOqUBPlFmYEZXwi1qgLt1JK8eBPddJHih5D6A6zH9wjQXqyxLc9YLWLKgKbx1W%2FLfEj%2BXvOkexVQLaLaUrHzBO9NaGyuJ6tr4wvB0TD2aeDNB9V%2FuIEWROyWnPxZj%2FJdWc2PWht1NAmstUxLCOvAZDiHbEej7G82QYDmUpMUy9m%2Fj6OTOGxF66ETPwd57%2BuaooMUIpWxjCFsI9uWScmcvT5rW4Ce1g%2BKt&X-Amz-Signature=c762edbef632730aca570c46840d6cf1c450cdf324baa8e1784a585ae96a5464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MPJ2LD7%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFv85hS1bQ0lCPLJyDtygaZu2lppOYMqCv9XEt4C7s1AiEA%2BvHdl3P72GSAkgMdSvPSQq9SjGftgqfRpxFC%2BYPHC1YqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoSdDz5bz1snjVzCSrcA7PxrRdCqrSvPctT8N%2BXAYVXHtAwTIqySOaNIAjxeuKOQkwMoDKB0kheMmOOpehARH2MlIy3Ezo4Ran4PlrwU%2FjTxt5Pk3OfJ8MJmkWAaSbI%2FZJrisCbUHsXnhkYKtfaPCzUELuQ86qr27OguPKmA%2BNhaApo2wYsYtcJMR5mUYp8OMmTRcFVwJYGnO7HSFGUiQeQuTCa%2B7ECCIdo9kz06Sru1c89LYOWoP4f6CPP1utPwROkLViTDd6SYkG0PHHnamzH1XfN732FQNcLpBgho85KpltX12NEbZmYXTmkJiheJ%2FOHZuvk8ncpkPEuo31QYiksWQeXPYhVI2FBRCIaHqNyDheZDGVYKY9wpHXXrzlQiHXT%2B%2B5FnuVIZw2kplH1HtUNJV%2FEfoSUDYmsmnFCADfmUn9HN9N%2FBpabk1ejm1BOEggDcXHj6x0UjJbFoGSEpxiXv9f3ukq8JbaA%2Fn5Yl1fPKRc9w%2FnJ5IFilQun6q1X0dbwqCSYaGgAnVCbYZPUzsqmhwCM898FhfNe%2F3c3h4jvKLTeohvE9qaFZkxLEXoB18BSgymI5R6zg4kbjMrjrNpMH2l%2Bmi9dM7QapY1pJkG6OYLbQcW7dhVKmStKSCt8ImvMZUn6JgfKQSlzMPyDy8MGOqUBPlFmYEZXwi1qgLt1JK8eBPddJHih5D6A6zH9wjQXqyxLc9YLWLKgKbx1W%2FLfEj%2BXvOkexVQLaLaUrHzBO9NaGyuJ6tr4wvB0TD2aeDNB9V%2FuIEWROyWnPxZj%2FJdWc2PWht1NAmstUxLCOvAZDiHbEej7G82QYDmUpMUy9m%2Fj6OTOGxF66ETPwd57%2BuaooMUIpWxjCFsI9uWScmcvT5rW4Ce1g%2BKt&X-Amz-Signature=60f75c7bc7190eb5fabf8ee207fe92a39ef201c4e7f8748065ac3c6c8421d917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
