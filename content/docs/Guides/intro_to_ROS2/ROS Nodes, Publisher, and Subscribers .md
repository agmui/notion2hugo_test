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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUWJXQYW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCNCaSmgZTwERm01onCxzSpaT07bXO8Lz58TI5Ep8aQLwIhAKF8LqwO92K2ueioN7LJDhnRmqca3JlJH21kjP9fORmLKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7rZRAe3A4MwY265cq3AMmwimFO5d3c6C%2B2zrzKHczhrav0u%2B%2F7sIhjii%2BCP6uW5zu6g%2By2AP5eAz17T8a4aJK5wJT1g%2BwU5VCMnbKOB3OGc7motwKf1cz648UIIEp%2BWwUPTAa1MvEdMQPOIa4fgUHxX2BWfFD1IhBzdP0kcxAGGGtn957qd7DOAVB7Q1jkmWpJnyJXmQ00VXQGr%2Fc62Rdcr9bO8CU%2BPhK3LehCFluTwAdS%2BMNeoDdlCw6%2FfwpXKkscNEgAjkmV2updJ26Brb4w65Gf277pgkOBdocto8fGqKOop4H%2FIhcGqqTv62UhuxZDW1EujkN%2BZS6wnrwz6YpVRMeGOiLE%2Bu%2B5X34N9QQlt%2BHz9FNPygBNgsnx3zojos%2F3rzYKijMDd75FvfHpp5ToGfyv9VrkwmHiaAeba5jSx4aKQkI8DJ4l9x%2BMKka16stA6Spj7gZ5EwaMs4kzHmcGFjpBPoF1QTgzlTkb3h3IFSpT35KBNu5FfEhTsvUhnsBTbw8eQl7%2B7dBcwXXjSpFr7bVu5296KNJTFqWl%2FtTnj7fOrZhTLmU9jb0wZyxmTTjBUZ3PT0QcQyNtzc2qHjvtFTkHsxtpMXLe9h7P32%2FCiJn%2FE4zL066ZJSoWYLCc9asRN106B0VB5khqzDHkIC%2FBjqkAZXZvtzYRd3LiShZCpqFGC9WoSI7yGIwoC%2Br2CAbtyQCx0r5jmD4gvcTBCoAWaLaC32l6Jc5in5DbVJdaTLEFzLRTMgSKP7TGdKdHiio6E97IlmHmCcy2g6%2Bj4xqiglHdUd359GW%2FpJB396pS15FE9ZB8NZNUL0O6MR2PtzKaM7iZ6Gzit5%2BiLkw%2FhOsctPF5BsLcDPvJoECpyLZ24C2xt9V%2FVoa&X-Amz-Signature=a5a07df17a14bf25d00f3cd36dfbb2b0d4f508119f5d847254b27cf4691b043a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUWJXQYW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCNCaSmgZTwERm01onCxzSpaT07bXO8Lz58TI5Ep8aQLwIhAKF8LqwO92K2ueioN7LJDhnRmqca3JlJH21kjP9fORmLKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7rZRAe3A4MwY265cq3AMmwimFO5d3c6C%2B2zrzKHczhrav0u%2B%2F7sIhjii%2BCP6uW5zu6g%2By2AP5eAz17T8a4aJK5wJT1g%2BwU5VCMnbKOB3OGc7motwKf1cz648UIIEp%2BWwUPTAa1MvEdMQPOIa4fgUHxX2BWfFD1IhBzdP0kcxAGGGtn957qd7DOAVB7Q1jkmWpJnyJXmQ00VXQGr%2Fc62Rdcr9bO8CU%2BPhK3LehCFluTwAdS%2BMNeoDdlCw6%2FfwpXKkscNEgAjkmV2updJ26Brb4w65Gf277pgkOBdocto8fGqKOop4H%2FIhcGqqTv62UhuxZDW1EujkN%2BZS6wnrwz6YpVRMeGOiLE%2Bu%2B5X34N9QQlt%2BHz9FNPygBNgsnx3zojos%2F3rzYKijMDd75FvfHpp5ToGfyv9VrkwmHiaAeba5jSx4aKQkI8DJ4l9x%2BMKka16stA6Spj7gZ5EwaMs4kzHmcGFjpBPoF1QTgzlTkb3h3IFSpT35KBNu5FfEhTsvUhnsBTbw8eQl7%2B7dBcwXXjSpFr7bVu5296KNJTFqWl%2FtTnj7fOrZhTLmU9jb0wZyxmTTjBUZ3PT0QcQyNtzc2qHjvtFTkHsxtpMXLe9h7P32%2FCiJn%2FE4zL066ZJSoWYLCc9asRN106B0VB5khqzDHkIC%2FBjqkAZXZvtzYRd3LiShZCpqFGC9WoSI7yGIwoC%2Br2CAbtyQCx0r5jmD4gvcTBCoAWaLaC32l6Jc5in5DbVJdaTLEFzLRTMgSKP7TGdKdHiio6E97IlmHmCcy2g6%2Bj4xqiglHdUd359GW%2FpJB396pS15FE9ZB8NZNUL0O6MR2PtzKaM7iZ6Gzit5%2BiLkw%2FhOsctPF5BsLcDPvJoECpyLZ24C2xt9V%2FVoa&X-Amz-Signature=8edc4fd8169e8815ce9c8375fdd1f3ce1617e3600075bbf6e92dc9c71022c90a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUWJXQYW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCNCaSmgZTwERm01onCxzSpaT07bXO8Lz58TI5Ep8aQLwIhAKF8LqwO92K2ueioN7LJDhnRmqca3JlJH21kjP9fORmLKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7rZRAe3A4MwY265cq3AMmwimFO5d3c6C%2B2zrzKHczhrav0u%2B%2F7sIhjii%2BCP6uW5zu6g%2By2AP5eAz17T8a4aJK5wJT1g%2BwU5VCMnbKOB3OGc7motwKf1cz648UIIEp%2BWwUPTAa1MvEdMQPOIa4fgUHxX2BWfFD1IhBzdP0kcxAGGGtn957qd7DOAVB7Q1jkmWpJnyJXmQ00VXQGr%2Fc62Rdcr9bO8CU%2BPhK3LehCFluTwAdS%2BMNeoDdlCw6%2FfwpXKkscNEgAjkmV2updJ26Brb4w65Gf277pgkOBdocto8fGqKOop4H%2FIhcGqqTv62UhuxZDW1EujkN%2BZS6wnrwz6YpVRMeGOiLE%2Bu%2B5X34N9QQlt%2BHz9FNPygBNgsnx3zojos%2F3rzYKijMDd75FvfHpp5ToGfyv9VrkwmHiaAeba5jSx4aKQkI8DJ4l9x%2BMKka16stA6Spj7gZ5EwaMs4kzHmcGFjpBPoF1QTgzlTkb3h3IFSpT35KBNu5FfEhTsvUhnsBTbw8eQl7%2B7dBcwXXjSpFr7bVu5296KNJTFqWl%2FtTnj7fOrZhTLmU9jb0wZyxmTTjBUZ3PT0QcQyNtzc2qHjvtFTkHsxtpMXLe9h7P32%2FCiJn%2FE4zL066ZJSoWYLCc9asRN106B0VB5khqzDHkIC%2FBjqkAZXZvtzYRd3LiShZCpqFGC9WoSI7yGIwoC%2Br2CAbtyQCx0r5jmD4gvcTBCoAWaLaC32l6Jc5in5DbVJdaTLEFzLRTMgSKP7TGdKdHiio6E97IlmHmCcy2g6%2Bj4xqiglHdUd359GW%2FpJB396pS15FE9ZB8NZNUL0O6MR2PtzKaM7iZ6Gzit5%2BiLkw%2FhOsctPF5BsLcDPvJoECpyLZ24C2xt9V%2FVoa&X-Amz-Signature=3ca0f95bafe7e201f58f4761b9b08cabfd68afb580c81b503ca70f1648782f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUWJXQYW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCNCaSmgZTwERm01onCxzSpaT07bXO8Lz58TI5Ep8aQLwIhAKF8LqwO92K2ueioN7LJDhnRmqca3JlJH21kjP9fORmLKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7rZRAe3A4MwY265cq3AMmwimFO5d3c6C%2B2zrzKHczhrav0u%2B%2F7sIhjii%2BCP6uW5zu6g%2By2AP5eAz17T8a4aJK5wJT1g%2BwU5VCMnbKOB3OGc7motwKf1cz648UIIEp%2BWwUPTAa1MvEdMQPOIa4fgUHxX2BWfFD1IhBzdP0kcxAGGGtn957qd7DOAVB7Q1jkmWpJnyJXmQ00VXQGr%2Fc62Rdcr9bO8CU%2BPhK3LehCFluTwAdS%2BMNeoDdlCw6%2FfwpXKkscNEgAjkmV2updJ26Brb4w65Gf277pgkOBdocto8fGqKOop4H%2FIhcGqqTv62UhuxZDW1EujkN%2BZS6wnrwz6YpVRMeGOiLE%2Bu%2B5X34N9QQlt%2BHz9FNPygBNgsnx3zojos%2F3rzYKijMDd75FvfHpp5ToGfyv9VrkwmHiaAeba5jSx4aKQkI8DJ4l9x%2BMKka16stA6Spj7gZ5EwaMs4kzHmcGFjpBPoF1QTgzlTkb3h3IFSpT35KBNu5FfEhTsvUhnsBTbw8eQl7%2B7dBcwXXjSpFr7bVu5296KNJTFqWl%2FtTnj7fOrZhTLmU9jb0wZyxmTTjBUZ3PT0QcQyNtzc2qHjvtFTkHsxtpMXLe9h7P32%2FCiJn%2FE4zL066ZJSoWYLCc9asRN106B0VB5khqzDHkIC%2FBjqkAZXZvtzYRd3LiShZCpqFGC9WoSI7yGIwoC%2Br2CAbtyQCx0r5jmD4gvcTBCoAWaLaC32l6Jc5in5DbVJdaTLEFzLRTMgSKP7TGdKdHiio6E97IlmHmCcy2g6%2Bj4xqiglHdUd359GW%2FpJB396pS15FE9ZB8NZNUL0O6MR2PtzKaM7iZ6Gzit5%2BiLkw%2FhOsctPF5BsLcDPvJoECpyLZ24C2xt9V%2FVoa&X-Amz-Signature=9e4316a3c7a8f64431c95cd20e6a8fe033afe99a1a25e81b5409942c6aedd96f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUWJXQYW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCNCaSmgZTwERm01onCxzSpaT07bXO8Lz58TI5Ep8aQLwIhAKF8LqwO92K2ueioN7LJDhnRmqca3JlJH21kjP9fORmLKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7rZRAe3A4MwY265cq3AMmwimFO5d3c6C%2B2zrzKHczhrav0u%2B%2F7sIhjii%2BCP6uW5zu6g%2By2AP5eAz17T8a4aJK5wJT1g%2BwU5VCMnbKOB3OGc7motwKf1cz648UIIEp%2BWwUPTAa1MvEdMQPOIa4fgUHxX2BWfFD1IhBzdP0kcxAGGGtn957qd7DOAVB7Q1jkmWpJnyJXmQ00VXQGr%2Fc62Rdcr9bO8CU%2BPhK3LehCFluTwAdS%2BMNeoDdlCw6%2FfwpXKkscNEgAjkmV2updJ26Brb4w65Gf277pgkOBdocto8fGqKOop4H%2FIhcGqqTv62UhuxZDW1EujkN%2BZS6wnrwz6YpVRMeGOiLE%2Bu%2B5X34N9QQlt%2BHz9FNPygBNgsnx3zojos%2F3rzYKijMDd75FvfHpp5ToGfyv9VrkwmHiaAeba5jSx4aKQkI8DJ4l9x%2BMKka16stA6Spj7gZ5EwaMs4kzHmcGFjpBPoF1QTgzlTkb3h3IFSpT35KBNu5FfEhTsvUhnsBTbw8eQl7%2B7dBcwXXjSpFr7bVu5296KNJTFqWl%2FtTnj7fOrZhTLmU9jb0wZyxmTTjBUZ3PT0QcQyNtzc2qHjvtFTkHsxtpMXLe9h7P32%2FCiJn%2FE4zL066ZJSoWYLCc9asRN106B0VB5khqzDHkIC%2FBjqkAZXZvtzYRd3LiShZCpqFGC9WoSI7yGIwoC%2Br2CAbtyQCx0r5jmD4gvcTBCoAWaLaC32l6Jc5in5DbVJdaTLEFzLRTMgSKP7TGdKdHiio6E97IlmHmCcy2g6%2Bj4xqiglHdUd359GW%2FpJB396pS15FE9ZB8NZNUL0O6MR2PtzKaM7iZ6Gzit5%2BiLkw%2FhOsctPF5BsLcDPvJoECpyLZ24C2xt9V%2FVoa&X-Amz-Signature=3615576dcbb2ef799e918bc55152bdfb6a1bc49c8c24ae0352f284f6918833ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUWJXQYW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCNCaSmgZTwERm01onCxzSpaT07bXO8Lz58TI5Ep8aQLwIhAKF8LqwO92K2ueioN7LJDhnRmqca3JlJH21kjP9fORmLKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7rZRAe3A4MwY265cq3AMmwimFO5d3c6C%2B2zrzKHczhrav0u%2B%2F7sIhjii%2BCP6uW5zu6g%2By2AP5eAz17T8a4aJK5wJT1g%2BwU5VCMnbKOB3OGc7motwKf1cz648UIIEp%2BWwUPTAa1MvEdMQPOIa4fgUHxX2BWfFD1IhBzdP0kcxAGGGtn957qd7DOAVB7Q1jkmWpJnyJXmQ00VXQGr%2Fc62Rdcr9bO8CU%2BPhK3LehCFluTwAdS%2BMNeoDdlCw6%2FfwpXKkscNEgAjkmV2updJ26Brb4w65Gf277pgkOBdocto8fGqKOop4H%2FIhcGqqTv62UhuxZDW1EujkN%2BZS6wnrwz6YpVRMeGOiLE%2Bu%2B5X34N9QQlt%2BHz9FNPygBNgsnx3zojos%2F3rzYKijMDd75FvfHpp5ToGfyv9VrkwmHiaAeba5jSx4aKQkI8DJ4l9x%2BMKka16stA6Spj7gZ5EwaMs4kzHmcGFjpBPoF1QTgzlTkb3h3IFSpT35KBNu5FfEhTsvUhnsBTbw8eQl7%2B7dBcwXXjSpFr7bVu5296KNJTFqWl%2FtTnj7fOrZhTLmU9jb0wZyxmTTjBUZ3PT0QcQyNtzc2qHjvtFTkHsxtpMXLe9h7P32%2FCiJn%2FE4zL066ZJSoWYLCc9asRN106B0VB5khqzDHkIC%2FBjqkAZXZvtzYRd3LiShZCpqFGC9WoSI7yGIwoC%2Br2CAbtyQCx0r5jmD4gvcTBCoAWaLaC32l6Jc5in5DbVJdaTLEFzLRTMgSKP7TGdKdHiio6E97IlmHmCcy2g6%2Bj4xqiglHdUd359GW%2FpJB396pS15FE9ZB8NZNUL0O6MR2PtzKaM7iZ6Gzit5%2BiLkw%2FhOsctPF5BsLcDPvJoECpyLZ24C2xt9V%2FVoa&X-Amz-Signature=da189539095610776c3df05d4c8edeba3584a4a0f331311acde7c9c42177eef5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUWJXQYW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCNCaSmgZTwERm01onCxzSpaT07bXO8Lz58TI5Ep8aQLwIhAKF8LqwO92K2ueioN7LJDhnRmqca3JlJH21kjP9fORmLKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7rZRAe3A4MwY265cq3AMmwimFO5d3c6C%2B2zrzKHczhrav0u%2B%2F7sIhjii%2BCP6uW5zu6g%2By2AP5eAz17T8a4aJK5wJT1g%2BwU5VCMnbKOB3OGc7motwKf1cz648UIIEp%2BWwUPTAa1MvEdMQPOIa4fgUHxX2BWfFD1IhBzdP0kcxAGGGtn957qd7DOAVB7Q1jkmWpJnyJXmQ00VXQGr%2Fc62Rdcr9bO8CU%2BPhK3LehCFluTwAdS%2BMNeoDdlCw6%2FfwpXKkscNEgAjkmV2updJ26Brb4w65Gf277pgkOBdocto8fGqKOop4H%2FIhcGqqTv62UhuxZDW1EujkN%2BZS6wnrwz6YpVRMeGOiLE%2Bu%2B5X34N9QQlt%2BHz9FNPygBNgsnx3zojos%2F3rzYKijMDd75FvfHpp5ToGfyv9VrkwmHiaAeba5jSx4aKQkI8DJ4l9x%2BMKka16stA6Spj7gZ5EwaMs4kzHmcGFjpBPoF1QTgzlTkb3h3IFSpT35KBNu5FfEhTsvUhnsBTbw8eQl7%2B7dBcwXXjSpFr7bVu5296KNJTFqWl%2FtTnj7fOrZhTLmU9jb0wZyxmTTjBUZ3PT0QcQyNtzc2qHjvtFTkHsxtpMXLe9h7P32%2FCiJn%2FE4zL066ZJSoWYLCc9asRN106B0VB5khqzDHkIC%2FBjqkAZXZvtzYRd3LiShZCpqFGC9WoSI7yGIwoC%2Br2CAbtyQCx0r5jmD4gvcTBCoAWaLaC32l6Jc5in5DbVJdaTLEFzLRTMgSKP7TGdKdHiio6E97IlmHmCcy2g6%2Bj4xqiglHdUd359GW%2FpJB396pS15FE9ZB8NZNUL0O6MR2PtzKaM7iZ6Gzit5%2BiLkw%2FhOsctPF5BsLcDPvJoECpyLZ24C2xt9V%2FVoa&X-Amz-Signature=7ff2459e199c9f4e409ffb6a618ef5dca87909ae53bd175e65255d4a74b41081&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUWJXQYW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCNCaSmgZTwERm01onCxzSpaT07bXO8Lz58TI5Ep8aQLwIhAKF8LqwO92K2ueioN7LJDhnRmqca3JlJH21kjP9fORmLKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7rZRAe3A4MwY265cq3AMmwimFO5d3c6C%2B2zrzKHczhrav0u%2B%2F7sIhjii%2BCP6uW5zu6g%2By2AP5eAz17T8a4aJK5wJT1g%2BwU5VCMnbKOB3OGc7motwKf1cz648UIIEp%2BWwUPTAa1MvEdMQPOIa4fgUHxX2BWfFD1IhBzdP0kcxAGGGtn957qd7DOAVB7Q1jkmWpJnyJXmQ00VXQGr%2Fc62Rdcr9bO8CU%2BPhK3LehCFluTwAdS%2BMNeoDdlCw6%2FfwpXKkscNEgAjkmV2updJ26Brb4w65Gf277pgkOBdocto8fGqKOop4H%2FIhcGqqTv62UhuxZDW1EujkN%2BZS6wnrwz6YpVRMeGOiLE%2Bu%2B5X34N9QQlt%2BHz9FNPygBNgsnx3zojos%2F3rzYKijMDd75FvfHpp5ToGfyv9VrkwmHiaAeba5jSx4aKQkI8DJ4l9x%2BMKka16stA6Spj7gZ5EwaMs4kzHmcGFjpBPoF1QTgzlTkb3h3IFSpT35KBNu5FfEhTsvUhnsBTbw8eQl7%2B7dBcwXXjSpFr7bVu5296KNJTFqWl%2FtTnj7fOrZhTLmU9jb0wZyxmTTjBUZ3PT0QcQyNtzc2qHjvtFTkHsxtpMXLe9h7P32%2FCiJn%2FE4zL066ZJSoWYLCc9asRN106B0VB5khqzDHkIC%2FBjqkAZXZvtzYRd3LiShZCpqFGC9WoSI7yGIwoC%2Br2CAbtyQCx0r5jmD4gvcTBCoAWaLaC32l6Jc5in5DbVJdaTLEFzLRTMgSKP7TGdKdHiio6E97IlmHmCcy2g6%2Bj4xqiglHdUd359GW%2FpJB396pS15FE9ZB8NZNUL0O6MR2PtzKaM7iZ6Gzit5%2BiLkw%2FhOsctPF5BsLcDPvJoECpyLZ24C2xt9V%2FVoa&X-Amz-Signature=10dd54113b78a7159c56e6d497da687a03a7692a3eaf1a28a295dc516f5fcc0d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
