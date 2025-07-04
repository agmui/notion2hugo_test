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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQ2YYQA%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIA1zfyFSFydRO1FMrCQbgIk%2Bd0GzY%2FjG638dPJartLwQAiEA3%2FX1BE5RfCguxFZmTRbcAM98XPxCaOlBhsIzH%2B7MaRUq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOlg%2BLa3i3eRzkIBPircA8EoHObwjfpZ0muBR7HQfnkJvWEDxez%2B0MgPF2P59lPOzL75uMbNpuzYgFkCd28dza0iq48m1K%2FaKuxnQxVW4PJVvTHwR7BsHT0VYtmNr5bFNkx0S0lPLu8wGnEWoztDNwKYjEb9u0v5XlAbiF3%2FTAKo6ApXl%2BsLImD0sP9dGSDHtaBykdQFb6A6S%2Fo2mZCzR37X4Qzt3QyEJuUal%2BnHpB9BWFmvuCTxo7Kp9m3wID1M40nR0NlPSQR0K%2FCXt5IwnZkf94tBHsRFxW%2F9wy3RWxc1tfrlu%2Bdm8IkOzdZm5UlA58QbNFeZlRRg0gLGgbGU%2BT9hYCzNQLhmFAn24th1O7DOePiTGUbMtJWImX9x21nCLEJ9iMrxNnkasrVNAB5tRP4jLLBg%2FIoVabk3JG%2FVY1kZKlHTDz%2Fzzd4uRq1%2BSzZrrWDfMdZH%2Bi5B4qHZBX%2BjZ8%2BMWO9%2FXSyGiHjb76h21%2FtH3w%2FDOrBimIxE%2Fy6fCOcGU81WetgU9XtHD0Glg8XK%2Bn4gRvNmm8GQpR%2FlVuUEdKsY7AOfjbC%2FOLP7dBcffI%2BwJ1HWK5%2BrQ5gr%2FxuRXTxp4qOj4kj3x8d8eTNWsgoavvAkqOe%2FixDqKLgpUMjdU0zLKDYeWBifHhzMXlRCMKPlnMMGOqUBV43lokzp%2BLiMiT13tWvExxjnagfnDjs%2BXEiU6XO7saw2MypesKgbLRK7jGCrbgCfYxYan26GsobhxJTWdVwgtwJ7wYls9F0snwSIKSDKdGJSdzTjzBj446M7neUw9Q1lApRsff5yqXh1I6TStQOQYjkJ5ir83n63M9%2Br7O%2Bqb8pDpWcaihneTS9nGUP8ZXFZvzDZRzxrWPx5J7eZbdpMlfT9NcT3&X-Amz-Signature=c6851441642a00d277b2cef73a717332ce300c24c424d18a75c91ae0ff52aa4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQ2YYQA%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIA1zfyFSFydRO1FMrCQbgIk%2Bd0GzY%2FjG638dPJartLwQAiEA3%2FX1BE5RfCguxFZmTRbcAM98XPxCaOlBhsIzH%2B7MaRUq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOlg%2BLa3i3eRzkIBPircA8EoHObwjfpZ0muBR7HQfnkJvWEDxez%2B0MgPF2P59lPOzL75uMbNpuzYgFkCd28dza0iq48m1K%2FaKuxnQxVW4PJVvTHwR7BsHT0VYtmNr5bFNkx0S0lPLu8wGnEWoztDNwKYjEb9u0v5XlAbiF3%2FTAKo6ApXl%2BsLImD0sP9dGSDHtaBykdQFb6A6S%2Fo2mZCzR37X4Qzt3QyEJuUal%2BnHpB9BWFmvuCTxo7Kp9m3wID1M40nR0NlPSQR0K%2FCXt5IwnZkf94tBHsRFxW%2F9wy3RWxc1tfrlu%2Bdm8IkOzdZm5UlA58QbNFeZlRRg0gLGgbGU%2BT9hYCzNQLhmFAn24th1O7DOePiTGUbMtJWImX9x21nCLEJ9iMrxNnkasrVNAB5tRP4jLLBg%2FIoVabk3JG%2FVY1kZKlHTDz%2Fzzd4uRq1%2BSzZrrWDfMdZH%2Bi5B4qHZBX%2BjZ8%2BMWO9%2FXSyGiHjb76h21%2FtH3w%2FDOrBimIxE%2Fy6fCOcGU81WetgU9XtHD0Glg8XK%2Bn4gRvNmm8GQpR%2FlVuUEdKsY7AOfjbC%2FOLP7dBcffI%2BwJ1HWK5%2BrQ5gr%2FxuRXTxp4qOj4kj3x8d8eTNWsgoavvAkqOe%2FixDqKLgpUMjdU0zLKDYeWBifHhzMXlRCMKPlnMMGOqUBV43lokzp%2BLiMiT13tWvExxjnagfnDjs%2BXEiU6XO7saw2MypesKgbLRK7jGCrbgCfYxYan26GsobhxJTWdVwgtwJ7wYls9F0snwSIKSDKdGJSdzTjzBj446M7neUw9Q1lApRsff5yqXh1I6TStQOQYjkJ5ir83n63M9%2Br7O%2Bqb8pDpWcaihneTS9nGUP8ZXFZvzDZRzxrWPx5J7eZbdpMlfT9NcT3&X-Amz-Signature=27d9345c3a0e81015fcfb4beebb23bffef7a6a89df280b2213eba4e9bc5b5b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQ2YYQA%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIA1zfyFSFydRO1FMrCQbgIk%2Bd0GzY%2FjG638dPJartLwQAiEA3%2FX1BE5RfCguxFZmTRbcAM98XPxCaOlBhsIzH%2B7MaRUq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOlg%2BLa3i3eRzkIBPircA8EoHObwjfpZ0muBR7HQfnkJvWEDxez%2B0MgPF2P59lPOzL75uMbNpuzYgFkCd28dza0iq48m1K%2FaKuxnQxVW4PJVvTHwR7BsHT0VYtmNr5bFNkx0S0lPLu8wGnEWoztDNwKYjEb9u0v5XlAbiF3%2FTAKo6ApXl%2BsLImD0sP9dGSDHtaBykdQFb6A6S%2Fo2mZCzR37X4Qzt3QyEJuUal%2BnHpB9BWFmvuCTxo7Kp9m3wID1M40nR0NlPSQR0K%2FCXt5IwnZkf94tBHsRFxW%2F9wy3RWxc1tfrlu%2Bdm8IkOzdZm5UlA58QbNFeZlRRg0gLGgbGU%2BT9hYCzNQLhmFAn24th1O7DOePiTGUbMtJWImX9x21nCLEJ9iMrxNnkasrVNAB5tRP4jLLBg%2FIoVabk3JG%2FVY1kZKlHTDz%2Fzzd4uRq1%2BSzZrrWDfMdZH%2Bi5B4qHZBX%2BjZ8%2BMWO9%2FXSyGiHjb76h21%2FtH3w%2FDOrBimIxE%2Fy6fCOcGU81WetgU9XtHD0Glg8XK%2Bn4gRvNmm8GQpR%2FlVuUEdKsY7AOfjbC%2FOLP7dBcffI%2BwJ1HWK5%2BrQ5gr%2FxuRXTxp4qOj4kj3x8d8eTNWsgoavvAkqOe%2FixDqKLgpUMjdU0zLKDYeWBifHhzMXlRCMKPlnMMGOqUBV43lokzp%2BLiMiT13tWvExxjnagfnDjs%2BXEiU6XO7saw2MypesKgbLRK7jGCrbgCfYxYan26GsobhxJTWdVwgtwJ7wYls9F0snwSIKSDKdGJSdzTjzBj446M7neUw9Q1lApRsff5yqXh1I6TStQOQYjkJ5ir83n63M9%2Br7O%2Bqb8pDpWcaihneTS9nGUP8ZXFZvzDZRzxrWPx5J7eZbdpMlfT9NcT3&X-Amz-Signature=8995cff396b1f27b7fce70e519b4afd3468716922e2d5b8af4aa6f7980f96cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQ2YYQA%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIA1zfyFSFydRO1FMrCQbgIk%2Bd0GzY%2FjG638dPJartLwQAiEA3%2FX1BE5RfCguxFZmTRbcAM98XPxCaOlBhsIzH%2B7MaRUq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOlg%2BLa3i3eRzkIBPircA8EoHObwjfpZ0muBR7HQfnkJvWEDxez%2B0MgPF2P59lPOzL75uMbNpuzYgFkCd28dza0iq48m1K%2FaKuxnQxVW4PJVvTHwR7BsHT0VYtmNr5bFNkx0S0lPLu8wGnEWoztDNwKYjEb9u0v5XlAbiF3%2FTAKo6ApXl%2BsLImD0sP9dGSDHtaBykdQFb6A6S%2Fo2mZCzR37X4Qzt3QyEJuUal%2BnHpB9BWFmvuCTxo7Kp9m3wID1M40nR0NlPSQR0K%2FCXt5IwnZkf94tBHsRFxW%2F9wy3RWxc1tfrlu%2Bdm8IkOzdZm5UlA58QbNFeZlRRg0gLGgbGU%2BT9hYCzNQLhmFAn24th1O7DOePiTGUbMtJWImX9x21nCLEJ9iMrxNnkasrVNAB5tRP4jLLBg%2FIoVabk3JG%2FVY1kZKlHTDz%2Fzzd4uRq1%2BSzZrrWDfMdZH%2Bi5B4qHZBX%2BjZ8%2BMWO9%2FXSyGiHjb76h21%2FtH3w%2FDOrBimIxE%2Fy6fCOcGU81WetgU9XtHD0Glg8XK%2Bn4gRvNmm8GQpR%2FlVuUEdKsY7AOfjbC%2FOLP7dBcffI%2BwJ1HWK5%2BrQ5gr%2FxuRXTxp4qOj4kj3x8d8eTNWsgoavvAkqOe%2FixDqKLgpUMjdU0zLKDYeWBifHhzMXlRCMKPlnMMGOqUBV43lokzp%2BLiMiT13tWvExxjnagfnDjs%2BXEiU6XO7saw2MypesKgbLRK7jGCrbgCfYxYan26GsobhxJTWdVwgtwJ7wYls9F0snwSIKSDKdGJSdzTjzBj446M7neUw9Q1lApRsff5yqXh1I6TStQOQYjkJ5ir83n63M9%2Br7O%2Bqb8pDpWcaihneTS9nGUP8ZXFZvzDZRzxrWPx5J7eZbdpMlfT9NcT3&X-Amz-Signature=e8688cf548cb88f72071911ff506b77e134b53a53f3682976f72b79c1a9e60cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQ2YYQA%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIA1zfyFSFydRO1FMrCQbgIk%2Bd0GzY%2FjG638dPJartLwQAiEA3%2FX1BE5RfCguxFZmTRbcAM98XPxCaOlBhsIzH%2B7MaRUq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOlg%2BLa3i3eRzkIBPircA8EoHObwjfpZ0muBR7HQfnkJvWEDxez%2B0MgPF2P59lPOzL75uMbNpuzYgFkCd28dza0iq48m1K%2FaKuxnQxVW4PJVvTHwR7BsHT0VYtmNr5bFNkx0S0lPLu8wGnEWoztDNwKYjEb9u0v5XlAbiF3%2FTAKo6ApXl%2BsLImD0sP9dGSDHtaBykdQFb6A6S%2Fo2mZCzR37X4Qzt3QyEJuUal%2BnHpB9BWFmvuCTxo7Kp9m3wID1M40nR0NlPSQR0K%2FCXt5IwnZkf94tBHsRFxW%2F9wy3RWxc1tfrlu%2Bdm8IkOzdZm5UlA58QbNFeZlRRg0gLGgbGU%2BT9hYCzNQLhmFAn24th1O7DOePiTGUbMtJWImX9x21nCLEJ9iMrxNnkasrVNAB5tRP4jLLBg%2FIoVabk3JG%2FVY1kZKlHTDz%2Fzzd4uRq1%2BSzZrrWDfMdZH%2Bi5B4qHZBX%2BjZ8%2BMWO9%2FXSyGiHjb76h21%2FtH3w%2FDOrBimIxE%2Fy6fCOcGU81WetgU9XtHD0Glg8XK%2Bn4gRvNmm8GQpR%2FlVuUEdKsY7AOfjbC%2FOLP7dBcffI%2BwJ1HWK5%2BrQ5gr%2FxuRXTxp4qOj4kj3x8d8eTNWsgoavvAkqOe%2FixDqKLgpUMjdU0zLKDYeWBifHhzMXlRCMKPlnMMGOqUBV43lokzp%2BLiMiT13tWvExxjnagfnDjs%2BXEiU6XO7saw2MypesKgbLRK7jGCrbgCfYxYan26GsobhxJTWdVwgtwJ7wYls9F0snwSIKSDKdGJSdzTjzBj446M7neUw9Q1lApRsff5yqXh1I6TStQOQYjkJ5ir83n63M9%2Br7O%2Bqb8pDpWcaihneTS9nGUP8ZXFZvzDZRzxrWPx5J7eZbdpMlfT9NcT3&X-Amz-Signature=73704a39274f743282e0863d493ab35c0b317fe47b9a4274bf38c0a323569626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQ2YYQA%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIA1zfyFSFydRO1FMrCQbgIk%2Bd0GzY%2FjG638dPJartLwQAiEA3%2FX1BE5RfCguxFZmTRbcAM98XPxCaOlBhsIzH%2B7MaRUq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOlg%2BLa3i3eRzkIBPircA8EoHObwjfpZ0muBR7HQfnkJvWEDxez%2B0MgPF2P59lPOzL75uMbNpuzYgFkCd28dza0iq48m1K%2FaKuxnQxVW4PJVvTHwR7BsHT0VYtmNr5bFNkx0S0lPLu8wGnEWoztDNwKYjEb9u0v5XlAbiF3%2FTAKo6ApXl%2BsLImD0sP9dGSDHtaBykdQFb6A6S%2Fo2mZCzR37X4Qzt3QyEJuUal%2BnHpB9BWFmvuCTxo7Kp9m3wID1M40nR0NlPSQR0K%2FCXt5IwnZkf94tBHsRFxW%2F9wy3RWxc1tfrlu%2Bdm8IkOzdZm5UlA58QbNFeZlRRg0gLGgbGU%2BT9hYCzNQLhmFAn24th1O7DOePiTGUbMtJWImX9x21nCLEJ9iMrxNnkasrVNAB5tRP4jLLBg%2FIoVabk3JG%2FVY1kZKlHTDz%2Fzzd4uRq1%2BSzZrrWDfMdZH%2Bi5B4qHZBX%2BjZ8%2BMWO9%2FXSyGiHjb76h21%2FtH3w%2FDOrBimIxE%2Fy6fCOcGU81WetgU9XtHD0Glg8XK%2Bn4gRvNmm8GQpR%2FlVuUEdKsY7AOfjbC%2FOLP7dBcffI%2BwJ1HWK5%2BrQ5gr%2FxuRXTxp4qOj4kj3x8d8eTNWsgoavvAkqOe%2FixDqKLgpUMjdU0zLKDYeWBifHhzMXlRCMKPlnMMGOqUBV43lokzp%2BLiMiT13tWvExxjnagfnDjs%2BXEiU6XO7saw2MypesKgbLRK7jGCrbgCfYxYan26GsobhxJTWdVwgtwJ7wYls9F0snwSIKSDKdGJSdzTjzBj446M7neUw9Q1lApRsff5yqXh1I6TStQOQYjkJ5ir83n63M9%2Br7O%2Bqb8pDpWcaihneTS9nGUP8ZXFZvzDZRzxrWPx5J7eZbdpMlfT9NcT3&X-Amz-Signature=e8c43f76f416cc484cde33fd6950842c759c6bbcdfa3526608565bf96a6d41e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQ2YYQA%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIA1zfyFSFydRO1FMrCQbgIk%2Bd0GzY%2FjG638dPJartLwQAiEA3%2FX1BE5RfCguxFZmTRbcAM98XPxCaOlBhsIzH%2B7MaRUq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOlg%2BLa3i3eRzkIBPircA8EoHObwjfpZ0muBR7HQfnkJvWEDxez%2B0MgPF2P59lPOzL75uMbNpuzYgFkCd28dza0iq48m1K%2FaKuxnQxVW4PJVvTHwR7BsHT0VYtmNr5bFNkx0S0lPLu8wGnEWoztDNwKYjEb9u0v5XlAbiF3%2FTAKo6ApXl%2BsLImD0sP9dGSDHtaBykdQFb6A6S%2Fo2mZCzR37X4Qzt3QyEJuUal%2BnHpB9BWFmvuCTxo7Kp9m3wID1M40nR0NlPSQR0K%2FCXt5IwnZkf94tBHsRFxW%2F9wy3RWxc1tfrlu%2Bdm8IkOzdZm5UlA58QbNFeZlRRg0gLGgbGU%2BT9hYCzNQLhmFAn24th1O7DOePiTGUbMtJWImX9x21nCLEJ9iMrxNnkasrVNAB5tRP4jLLBg%2FIoVabk3JG%2FVY1kZKlHTDz%2Fzzd4uRq1%2BSzZrrWDfMdZH%2Bi5B4qHZBX%2BjZ8%2BMWO9%2FXSyGiHjb76h21%2FtH3w%2FDOrBimIxE%2Fy6fCOcGU81WetgU9XtHD0Glg8XK%2Bn4gRvNmm8GQpR%2FlVuUEdKsY7AOfjbC%2FOLP7dBcffI%2BwJ1HWK5%2BrQ5gr%2FxuRXTxp4qOj4kj3x8d8eTNWsgoavvAkqOe%2FixDqKLgpUMjdU0zLKDYeWBifHhzMXlRCMKPlnMMGOqUBV43lokzp%2BLiMiT13tWvExxjnagfnDjs%2BXEiU6XO7saw2MypesKgbLRK7jGCrbgCfYxYan26GsobhxJTWdVwgtwJ7wYls9F0snwSIKSDKdGJSdzTjzBj446M7neUw9Q1lApRsff5yqXh1I6TStQOQYjkJ5ir83n63M9%2Br7O%2Bqb8pDpWcaihneTS9nGUP8ZXFZvzDZRzxrWPx5J7eZbdpMlfT9NcT3&X-Amz-Signature=9663b0bb4854a42fad6f8448119d7b40e8d1d7eca684d462bde26fd5a51272c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQ2YYQA%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIA1zfyFSFydRO1FMrCQbgIk%2Bd0GzY%2FjG638dPJartLwQAiEA3%2FX1BE5RfCguxFZmTRbcAM98XPxCaOlBhsIzH%2B7MaRUq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOlg%2BLa3i3eRzkIBPircA8EoHObwjfpZ0muBR7HQfnkJvWEDxez%2B0MgPF2P59lPOzL75uMbNpuzYgFkCd28dza0iq48m1K%2FaKuxnQxVW4PJVvTHwR7BsHT0VYtmNr5bFNkx0S0lPLu8wGnEWoztDNwKYjEb9u0v5XlAbiF3%2FTAKo6ApXl%2BsLImD0sP9dGSDHtaBykdQFb6A6S%2Fo2mZCzR37X4Qzt3QyEJuUal%2BnHpB9BWFmvuCTxo7Kp9m3wID1M40nR0NlPSQR0K%2FCXt5IwnZkf94tBHsRFxW%2F9wy3RWxc1tfrlu%2Bdm8IkOzdZm5UlA58QbNFeZlRRg0gLGgbGU%2BT9hYCzNQLhmFAn24th1O7DOePiTGUbMtJWImX9x21nCLEJ9iMrxNnkasrVNAB5tRP4jLLBg%2FIoVabk3JG%2FVY1kZKlHTDz%2Fzzd4uRq1%2BSzZrrWDfMdZH%2Bi5B4qHZBX%2BjZ8%2BMWO9%2FXSyGiHjb76h21%2FtH3w%2FDOrBimIxE%2Fy6fCOcGU81WetgU9XtHD0Glg8XK%2Bn4gRvNmm8GQpR%2FlVuUEdKsY7AOfjbC%2FOLP7dBcffI%2BwJ1HWK5%2BrQ5gr%2FxuRXTxp4qOj4kj3x8d8eTNWsgoavvAkqOe%2FixDqKLgpUMjdU0zLKDYeWBifHhzMXlRCMKPlnMMGOqUBV43lokzp%2BLiMiT13tWvExxjnagfnDjs%2BXEiU6XO7saw2MypesKgbLRK7jGCrbgCfYxYan26GsobhxJTWdVwgtwJ7wYls9F0snwSIKSDKdGJSdzTjzBj446M7neUw9Q1lApRsff5yqXh1I6TStQOQYjkJ5ir83n63M9%2Br7O%2Bqb8pDpWcaihneTS9nGUP8ZXFZvzDZRzxrWPx5J7eZbdpMlfT9NcT3&X-Amz-Signature=256c7a7c8027ab0f30701f66250109c9bdf5f4ef76de2e16a7ea912bea6a874c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
