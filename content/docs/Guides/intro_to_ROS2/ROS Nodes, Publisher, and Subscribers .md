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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMVWFGX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BKZUnwbjOZnaAjgql3Ng2kZOmqtpfbbvmOGIdz4TEawIgcBMmaKhz7OIZ3ab%2BpKssiURXFzc%2FctFi3j8unMisNyMqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMY%2FbUZ9F%2FKO%2FMy4ircA%2F77kvMlx9WhcSksZyVRcYWoZDrNWcuzjjca1ygZfxOxE0ZlWX88H0VREDjqeARZTLfbOcKf3AXgPytQIpBJgFn6bFjwBNqX6qPHIkOxl%2B6CTp15gLCxAkH91EUQMUsDY82XFHUOWCVLxWe%2FrdFqdTytnrW7sYJi4X4r7lLlpRwdkUOGkylZh5hnLEWNcuY%2FuOgiUInBchrNkt3w4f9wHqe2db8Gjni%2B2YqHtUJQhFVuiv14r%2BRhw%2FlKTzsd1vl5R3B%2BlTRPmtBNjXlgf6JTComxRzGshQzeD%2FqnouAAouMoZlu9GPjd71u8XijXAxWAGLbNvBd1Apm8%2BmUfd1lmzZBMpnNuEVzJYklEgQG%2FI%2FX7MkbiIUfgTqS769b5JuKHCDM9zZ1YK0Gkf6PL4RnyHBdfAVOwKO98eHFEFUWBEQHZvBp%2FV4Ee2obJElrrClGp9ikx1eolIQcNUrnbprk9KlydWdShlNOlN3SeNY2YciM9GXEgYtFeeGaXkgqz0NFYBP4mmKi3UqWi%2BE5w8mw5rzljmMwxehyukssSIq0OAHVcgP3QSDN4rQuR1uoZVARBuu%2B8rpTJZngM4eMIhXYBq%2BmN8jdn%2BCsfrEBOqTR1n6MY420G91zO3Cvg65VxMLmutcEGOqUBTDVu9FmqbsI1OASE%2FfW6FGHHaun5UvjYeDLJ684fxSaav9HqNLSdHXMBF1LyWYMcrdfu2KmXTJ6An5vuTs2jmduQcnAd35Hmn8BrW2Xhw7d20fczRbgdzfkUHmNOuSd0ck0LM6qgU8g%2FUP6GSRyMj4WRdFHW%2BZ%2BthNVTh4RGyzhW4VzPKv%2BrbiiC4lE6WtSiFtz0PweG1xwwXJou6wu0h52bwFw3&X-Amz-Signature=d418da4453781920ba8c3032159b577445ee6f712626ae3c42a76c9b2801cf1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMVWFGX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BKZUnwbjOZnaAjgql3Ng2kZOmqtpfbbvmOGIdz4TEawIgcBMmaKhz7OIZ3ab%2BpKssiURXFzc%2FctFi3j8unMisNyMqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMY%2FbUZ9F%2FKO%2FMy4ircA%2F77kvMlx9WhcSksZyVRcYWoZDrNWcuzjjca1ygZfxOxE0ZlWX88H0VREDjqeARZTLfbOcKf3AXgPytQIpBJgFn6bFjwBNqX6qPHIkOxl%2B6CTp15gLCxAkH91EUQMUsDY82XFHUOWCVLxWe%2FrdFqdTytnrW7sYJi4X4r7lLlpRwdkUOGkylZh5hnLEWNcuY%2FuOgiUInBchrNkt3w4f9wHqe2db8Gjni%2B2YqHtUJQhFVuiv14r%2BRhw%2FlKTzsd1vl5R3B%2BlTRPmtBNjXlgf6JTComxRzGshQzeD%2FqnouAAouMoZlu9GPjd71u8XijXAxWAGLbNvBd1Apm8%2BmUfd1lmzZBMpnNuEVzJYklEgQG%2FI%2FX7MkbiIUfgTqS769b5JuKHCDM9zZ1YK0Gkf6PL4RnyHBdfAVOwKO98eHFEFUWBEQHZvBp%2FV4Ee2obJElrrClGp9ikx1eolIQcNUrnbprk9KlydWdShlNOlN3SeNY2YciM9GXEgYtFeeGaXkgqz0NFYBP4mmKi3UqWi%2BE5w8mw5rzljmMwxehyukssSIq0OAHVcgP3QSDN4rQuR1uoZVARBuu%2B8rpTJZngM4eMIhXYBq%2BmN8jdn%2BCsfrEBOqTR1n6MY420G91zO3Cvg65VxMLmutcEGOqUBTDVu9FmqbsI1OASE%2FfW6FGHHaun5UvjYeDLJ684fxSaav9HqNLSdHXMBF1LyWYMcrdfu2KmXTJ6An5vuTs2jmduQcnAd35Hmn8BrW2Xhw7d20fczRbgdzfkUHmNOuSd0ck0LM6qgU8g%2FUP6GSRyMj4WRdFHW%2BZ%2BthNVTh4RGyzhW4VzPKv%2BrbiiC4lE6WtSiFtz0PweG1xwwXJou6wu0h52bwFw3&X-Amz-Signature=6ba291bbc1b8049830a7f657a2e7c9cbf3db7c88d6d0fd8bcf4cea66391e9630&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMVWFGX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BKZUnwbjOZnaAjgql3Ng2kZOmqtpfbbvmOGIdz4TEawIgcBMmaKhz7OIZ3ab%2BpKssiURXFzc%2FctFi3j8unMisNyMqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMY%2FbUZ9F%2FKO%2FMy4ircA%2F77kvMlx9WhcSksZyVRcYWoZDrNWcuzjjca1ygZfxOxE0ZlWX88H0VREDjqeARZTLfbOcKf3AXgPytQIpBJgFn6bFjwBNqX6qPHIkOxl%2B6CTp15gLCxAkH91EUQMUsDY82XFHUOWCVLxWe%2FrdFqdTytnrW7sYJi4X4r7lLlpRwdkUOGkylZh5hnLEWNcuY%2FuOgiUInBchrNkt3w4f9wHqe2db8Gjni%2B2YqHtUJQhFVuiv14r%2BRhw%2FlKTzsd1vl5R3B%2BlTRPmtBNjXlgf6JTComxRzGshQzeD%2FqnouAAouMoZlu9GPjd71u8XijXAxWAGLbNvBd1Apm8%2BmUfd1lmzZBMpnNuEVzJYklEgQG%2FI%2FX7MkbiIUfgTqS769b5JuKHCDM9zZ1YK0Gkf6PL4RnyHBdfAVOwKO98eHFEFUWBEQHZvBp%2FV4Ee2obJElrrClGp9ikx1eolIQcNUrnbprk9KlydWdShlNOlN3SeNY2YciM9GXEgYtFeeGaXkgqz0NFYBP4mmKi3UqWi%2BE5w8mw5rzljmMwxehyukssSIq0OAHVcgP3QSDN4rQuR1uoZVARBuu%2B8rpTJZngM4eMIhXYBq%2BmN8jdn%2BCsfrEBOqTR1n6MY420G91zO3Cvg65VxMLmutcEGOqUBTDVu9FmqbsI1OASE%2FfW6FGHHaun5UvjYeDLJ684fxSaav9HqNLSdHXMBF1LyWYMcrdfu2KmXTJ6An5vuTs2jmduQcnAd35Hmn8BrW2Xhw7d20fczRbgdzfkUHmNOuSd0ck0LM6qgU8g%2FUP6GSRyMj4WRdFHW%2BZ%2BthNVTh4RGyzhW4VzPKv%2BrbiiC4lE6WtSiFtz0PweG1xwwXJou6wu0h52bwFw3&X-Amz-Signature=beb0be231ac5ea3515e3bac230ab27dc7f18045ba62c2792fa63d28037d9e509&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMVWFGX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BKZUnwbjOZnaAjgql3Ng2kZOmqtpfbbvmOGIdz4TEawIgcBMmaKhz7OIZ3ab%2BpKssiURXFzc%2FctFi3j8unMisNyMqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMY%2FbUZ9F%2FKO%2FMy4ircA%2F77kvMlx9WhcSksZyVRcYWoZDrNWcuzjjca1ygZfxOxE0ZlWX88H0VREDjqeARZTLfbOcKf3AXgPytQIpBJgFn6bFjwBNqX6qPHIkOxl%2B6CTp15gLCxAkH91EUQMUsDY82XFHUOWCVLxWe%2FrdFqdTytnrW7sYJi4X4r7lLlpRwdkUOGkylZh5hnLEWNcuY%2FuOgiUInBchrNkt3w4f9wHqe2db8Gjni%2B2YqHtUJQhFVuiv14r%2BRhw%2FlKTzsd1vl5R3B%2BlTRPmtBNjXlgf6JTComxRzGshQzeD%2FqnouAAouMoZlu9GPjd71u8XijXAxWAGLbNvBd1Apm8%2BmUfd1lmzZBMpnNuEVzJYklEgQG%2FI%2FX7MkbiIUfgTqS769b5JuKHCDM9zZ1YK0Gkf6PL4RnyHBdfAVOwKO98eHFEFUWBEQHZvBp%2FV4Ee2obJElrrClGp9ikx1eolIQcNUrnbprk9KlydWdShlNOlN3SeNY2YciM9GXEgYtFeeGaXkgqz0NFYBP4mmKi3UqWi%2BE5w8mw5rzljmMwxehyukssSIq0OAHVcgP3QSDN4rQuR1uoZVARBuu%2B8rpTJZngM4eMIhXYBq%2BmN8jdn%2BCsfrEBOqTR1n6MY420G91zO3Cvg65VxMLmutcEGOqUBTDVu9FmqbsI1OASE%2FfW6FGHHaun5UvjYeDLJ684fxSaav9HqNLSdHXMBF1LyWYMcrdfu2KmXTJ6An5vuTs2jmduQcnAd35Hmn8BrW2Xhw7d20fczRbgdzfkUHmNOuSd0ck0LM6qgU8g%2FUP6GSRyMj4WRdFHW%2BZ%2BthNVTh4RGyzhW4VzPKv%2BrbiiC4lE6WtSiFtz0PweG1xwwXJou6wu0h52bwFw3&X-Amz-Signature=14a7fb7d7e22cc8fa412b1ba30bc6efa074b46aab9d4b4369624fc47c9aeeb40&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMVWFGX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BKZUnwbjOZnaAjgql3Ng2kZOmqtpfbbvmOGIdz4TEawIgcBMmaKhz7OIZ3ab%2BpKssiURXFzc%2FctFi3j8unMisNyMqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMY%2FbUZ9F%2FKO%2FMy4ircA%2F77kvMlx9WhcSksZyVRcYWoZDrNWcuzjjca1ygZfxOxE0ZlWX88H0VREDjqeARZTLfbOcKf3AXgPytQIpBJgFn6bFjwBNqX6qPHIkOxl%2B6CTp15gLCxAkH91EUQMUsDY82XFHUOWCVLxWe%2FrdFqdTytnrW7sYJi4X4r7lLlpRwdkUOGkylZh5hnLEWNcuY%2FuOgiUInBchrNkt3w4f9wHqe2db8Gjni%2B2YqHtUJQhFVuiv14r%2BRhw%2FlKTzsd1vl5R3B%2BlTRPmtBNjXlgf6JTComxRzGshQzeD%2FqnouAAouMoZlu9GPjd71u8XijXAxWAGLbNvBd1Apm8%2BmUfd1lmzZBMpnNuEVzJYklEgQG%2FI%2FX7MkbiIUfgTqS769b5JuKHCDM9zZ1YK0Gkf6PL4RnyHBdfAVOwKO98eHFEFUWBEQHZvBp%2FV4Ee2obJElrrClGp9ikx1eolIQcNUrnbprk9KlydWdShlNOlN3SeNY2YciM9GXEgYtFeeGaXkgqz0NFYBP4mmKi3UqWi%2BE5w8mw5rzljmMwxehyukssSIq0OAHVcgP3QSDN4rQuR1uoZVARBuu%2B8rpTJZngM4eMIhXYBq%2BmN8jdn%2BCsfrEBOqTR1n6MY420G91zO3Cvg65VxMLmutcEGOqUBTDVu9FmqbsI1OASE%2FfW6FGHHaun5UvjYeDLJ684fxSaav9HqNLSdHXMBF1LyWYMcrdfu2KmXTJ6An5vuTs2jmduQcnAd35Hmn8BrW2Xhw7d20fczRbgdzfkUHmNOuSd0ck0LM6qgU8g%2FUP6GSRyMj4WRdFHW%2BZ%2BthNVTh4RGyzhW4VzPKv%2BrbiiC4lE6WtSiFtz0PweG1xwwXJou6wu0h52bwFw3&X-Amz-Signature=36860feb2ed0c647dbb77732dfc3d0541b7680de6e2206355e9a8cfe9d3ff0ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMVWFGX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BKZUnwbjOZnaAjgql3Ng2kZOmqtpfbbvmOGIdz4TEawIgcBMmaKhz7OIZ3ab%2BpKssiURXFzc%2FctFi3j8unMisNyMqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMY%2FbUZ9F%2FKO%2FMy4ircA%2F77kvMlx9WhcSksZyVRcYWoZDrNWcuzjjca1ygZfxOxE0ZlWX88H0VREDjqeARZTLfbOcKf3AXgPytQIpBJgFn6bFjwBNqX6qPHIkOxl%2B6CTp15gLCxAkH91EUQMUsDY82XFHUOWCVLxWe%2FrdFqdTytnrW7sYJi4X4r7lLlpRwdkUOGkylZh5hnLEWNcuY%2FuOgiUInBchrNkt3w4f9wHqe2db8Gjni%2B2YqHtUJQhFVuiv14r%2BRhw%2FlKTzsd1vl5R3B%2BlTRPmtBNjXlgf6JTComxRzGshQzeD%2FqnouAAouMoZlu9GPjd71u8XijXAxWAGLbNvBd1Apm8%2BmUfd1lmzZBMpnNuEVzJYklEgQG%2FI%2FX7MkbiIUfgTqS769b5JuKHCDM9zZ1YK0Gkf6PL4RnyHBdfAVOwKO98eHFEFUWBEQHZvBp%2FV4Ee2obJElrrClGp9ikx1eolIQcNUrnbprk9KlydWdShlNOlN3SeNY2YciM9GXEgYtFeeGaXkgqz0NFYBP4mmKi3UqWi%2BE5w8mw5rzljmMwxehyukssSIq0OAHVcgP3QSDN4rQuR1uoZVARBuu%2B8rpTJZngM4eMIhXYBq%2BmN8jdn%2BCsfrEBOqTR1n6MY420G91zO3Cvg65VxMLmutcEGOqUBTDVu9FmqbsI1OASE%2FfW6FGHHaun5UvjYeDLJ684fxSaav9HqNLSdHXMBF1LyWYMcrdfu2KmXTJ6An5vuTs2jmduQcnAd35Hmn8BrW2Xhw7d20fczRbgdzfkUHmNOuSd0ck0LM6qgU8g%2FUP6GSRyMj4WRdFHW%2BZ%2BthNVTh4RGyzhW4VzPKv%2BrbiiC4lE6WtSiFtz0PweG1xwwXJou6wu0h52bwFw3&X-Amz-Signature=96c47724442dfd7d06579a190da23edec58cbd0b562bd1f6ceec86822555b44f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMVWFGX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BKZUnwbjOZnaAjgql3Ng2kZOmqtpfbbvmOGIdz4TEawIgcBMmaKhz7OIZ3ab%2BpKssiURXFzc%2FctFi3j8unMisNyMqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMY%2FbUZ9F%2FKO%2FMy4ircA%2F77kvMlx9WhcSksZyVRcYWoZDrNWcuzjjca1ygZfxOxE0ZlWX88H0VREDjqeARZTLfbOcKf3AXgPytQIpBJgFn6bFjwBNqX6qPHIkOxl%2B6CTp15gLCxAkH91EUQMUsDY82XFHUOWCVLxWe%2FrdFqdTytnrW7sYJi4X4r7lLlpRwdkUOGkylZh5hnLEWNcuY%2FuOgiUInBchrNkt3w4f9wHqe2db8Gjni%2B2YqHtUJQhFVuiv14r%2BRhw%2FlKTzsd1vl5R3B%2BlTRPmtBNjXlgf6JTComxRzGshQzeD%2FqnouAAouMoZlu9GPjd71u8XijXAxWAGLbNvBd1Apm8%2BmUfd1lmzZBMpnNuEVzJYklEgQG%2FI%2FX7MkbiIUfgTqS769b5JuKHCDM9zZ1YK0Gkf6PL4RnyHBdfAVOwKO98eHFEFUWBEQHZvBp%2FV4Ee2obJElrrClGp9ikx1eolIQcNUrnbprk9KlydWdShlNOlN3SeNY2YciM9GXEgYtFeeGaXkgqz0NFYBP4mmKi3UqWi%2BE5w8mw5rzljmMwxehyukssSIq0OAHVcgP3QSDN4rQuR1uoZVARBuu%2B8rpTJZngM4eMIhXYBq%2BmN8jdn%2BCsfrEBOqTR1n6MY420G91zO3Cvg65VxMLmutcEGOqUBTDVu9FmqbsI1OASE%2FfW6FGHHaun5UvjYeDLJ684fxSaav9HqNLSdHXMBF1LyWYMcrdfu2KmXTJ6An5vuTs2jmduQcnAd35Hmn8BrW2Xhw7d20fczRbgdzfkUHmNOuSd0ck0LM6qgU8g%2FUP6GSRyMj4WRdFHW%2BZ%2BthNVTh4RGyzhW4VzPKv%2BrbiiC4lE6WtSiFtz0PweG1xwwXJou6wu0h52bwFw3&X-Amz-Signature=19241cb46d56e9b4aa5cdac2158f1b8e78f181ed657381ae5d2b3104007ac2d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMVWFGX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BKZUnwbjOZnaAjgql3Ng2kZOmqtpfbbvmOGIdz4TEawIgcBMmaKhz7OIZ3ab%2BpKssiURXFzc%2FctFi3j8unMisNyMqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMY%2FbUZ9F%2FKO%2FMy4ircA%2F77kvMlx9WhcSksZyVRcYWoZDrNWcuzjjca1ygZfxOxE0ZlWX88H0VREDjqeARZTLfbOcKf3AXgPytQIpBJgFn6bFjwBNqX6qPHIkOxl%2B6CTp15gLCxAkH91EUQMUsDY82XFHUOWCVLxWe%2FrdFqdTytnrW7sYJi4X4r7lLlpRwdkUOGkylZh5hnLEWNcuY%2FuOgiUInBchrNkt3w4f9wHqe2db8Gjni%2B2YqHtUJQhFVuiv14r%2BRhw%2FlKTzsd1vl5R3B%2BlTRPmtBNjXlgf6JTComxRzGshQzeD%2FqnouAAouMoZlu9GPjd71u8XijXAxWAGLbNvBd1Apm8%2BmUfd1lmzZBMpnNuEVzJYklEgQG%2FI%2FX7MkbiIUfgTqS769b5JuKHCDM9zZ1YK0Gkf6PL4RnyHBdfAVOwKO98eHFEFUWBEQHZvBp%2FV4Ee2obJElrrClGp9ikx1eolIQcNUrnbprk9KlydWdShlNOlN3SeNY2YciM9GXEgYtFeeGaXkgqz0NFYBP4mmKi3UqWi%2BE5w8mw5rzljmMwxehyukssSIq0OAHVcgP3QSDN4rQuR1uoZVARBuu%2B8rpTJZngM4eMIhXYBq%2BmN8jdn%2BCsfrEBOqTR1n6MY420G91zO3Cvg65VxMLmutcEGOqUBTDVu9FmqbsI1OASE%2FfW6FGHHaun5UvjYeDLJ684fxSaav9HqNLSdHXMBF1LyWYMcrdfu2KmXTJ6An5vuTs2jmduQcnAd35Hmn8BrW2Xhw7d20fczRbgdzfkUHmNOuSd0ck0LM6qgU8g%2FUP6GSRyMj4WRdFHW%2BZ%2BthNVTh4RGyzhW4VzPKv%2BrbiiC4lE6WtSiFtz0PweG1xwwXJou6wu0h52bwFw3&X-Amz-Signature=d694060e4283ee1c0e5c49d3974f060281e8fd300e3a324eac25467bd64b75cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
