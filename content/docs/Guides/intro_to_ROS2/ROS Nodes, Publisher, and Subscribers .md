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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667LTP3ZY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmK6FALztYwQwItfAfPiD%2B6BwadTI1QoBuyZo1JKj25AiAeBAM%2FT1V4GEJD3%2BgWYAv3G85QdVMoJiXRnMdBsMO6NyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6%2FGWlHeew2yQAFlVKtwD0jIcYOF5M%2FDasXG9E9hup9l0WI2iW%2Bo%2Fb1ZffoMwrf2vY8iIbHf5wWFI%2BZWWp26yt9kuqCa%2FaI6WocaDXN9aWhS7erurSfb3ftccXj3%2Fj5FawpDugOLvnbZ%2BS0IIvS0lGP%2BswjKsyDPt4wxJKikzOAJT3LILEXg1rxVrjzLHjkFlpTLOjTPE5ioMgfAIrtjg8omQGakAzGtXaQgBRlZQ8iHxHtK%2B59%2Fn%2Fd93v8ffGpRdhKnrK5YqP1ztPNGFL%2FXLEGGf%2Bu6MrHhX5cq4Hr9OeHxp1uEKnN0CWk6e3iIvCvEs42AuIuicObnPrD%2BwYR7XowXY16yGqPWoUxgBpjaLfXuWmeBqo33EMEW3sfBBQd0nxwS%2BPYEUdFgSn%2Fd2x%2FoRKgnM6GfTN1ZMn1a0SHzFxIhiwR%2F3CIXxYlZwdshwQ9oiu%2F99m%2BXDIy5%2Bk9TsJpPteNQqLx7MPrrJDgk6gdO9as6PhtDYwYbDs3p6HDG4Ga4MYTK%2Fr%2FtrL0BtobBVXFK4kT%2Bo19vcBiwUuoocfx8H8LaTzfmu1QhX13dzpMVwI0nBfEkBsUyB0BLKsY0dofstvE68gCkFyOII1z1QbmSH1VZiVf7VhBQB0tMwhXWvr87N7KLU%2FT1scsuy5Gow%2BbGzwQY6pgFRJgUD4z75i%2BHRytlpwG0Y27qoCUkzSZyo94Vo%2B1ul4KiuX1ZDuw745FYqyDyrxfdF06HAj2tw2tY%2Ftwbe6aretAMAczQabBHB3kr2Kee%2Fk5%2BtTceclKHTX9CU8E5S0Ck2xxdBpgE1joh5rKpWSkUegAUt9lpoHh9aj%2Fm25J3VpLxj44im14tTNIhUE97bBjtpNBCyE2g8SLnnl13hCRtWxWxdBpDA&X-Amz-Signature=164fc9cead3937a9967891700ff56228cf501095ac0c8a39f8a0578e4520380b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667LTP3ZY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmK6FALztYwQwItfAfPiD%2B6BwadTI1QoBuyZo1JKj25AiAeBAM%2FT1V4GEJD3%2BgWYAv3G85QdVMoJiXRnMdBsMO6NyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6%2FGWlHeew2yQAFlVKtwD0jIcYOF5M%2FDasXG9E9hup9l0WI2iW%2Bo%2Fb1ZffoMwrf2vY8iIbHf5wWFI%2BZWWp26yt9kuqCa%2FaI6WocaDXN9aWhS7erurSfb3ftccXj3%2Fj5FawpDugOLvnbZ%2BS0IIvS0lGP%2BswjKsyDPt4wxJKikzOAJT3LILEXg1rxVrjzLHjkFlpTLOjTPE5ioMgfAIrtjg8omQGakAzGtXaQgBRlZQ8iHxHtK%2B59%2Fn%2Fd93v8ffGpRdhKnrK5YqP1ztPNGFL%2FXLEGGf%2Bu6MrHhX5cq4Hr9OeHxp1uEKnN0CWk6e3iIvCvEs42AuIuicObnPrD%2BwYR7XowXY16yGqPWoUxgBpjaLfXuWmeBqo33EMEW3sfBBQd0nxwS%2BPYEUdFgSn%2Fd2x%2FoRKgnM6GfTN1ZMn1a0SHzFxIhiwR%2F3CIXxYlZwdshwQ9oiu%2F99m%2BXDIy5%2Bk9TsJpPteNQqLx7MPrrJDgk6gdO9as6PhtDYwYbDs3p6HDG4Ga4MYTK%2Fr%2FtrL0BtobBVXFK4kT%2Bo19vcBiwUuoocfx8H8LaTzfmu1QhX13dzpMVwI0nBfEkBsUyB0BLKsY0dofstvE68gCkFyOII1z1QbmSH1VZiVf7VhBQB0tMwhXWvr87N7KLU%2FT1scsuy5Gow%2BbGzwQY6pgFRJgUD4z75i%2BHRytlpwG0Y27qoCUkzSZyo94Vo%2B1ul4KiuX1ZDuw745FYqyDyrxfdF06HAj2tw2tY%2Ftwbe6aretAMAczQabBHB3kr2Kee%2Fk5%2BtTceclKHTX9CU8E5S0Ck2xxdBpgE1joh5rKpWSkUegAUt9lpoHh9aj%2Fm25J3VpLxj44im14tTNIhUE97bBjtpNBCyE2g8SLnnl13hCRtWxWxdBpDA&X-Amz-Signature=93cc4556066be5cec48efb5c4f9ba1b436bb1b7f734744e3142206202d692af1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667LTP3ZY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmK6FALztYwQwItfAfPiD%2B6BwadTI1QoBuyZo1JKj25AiAeBAM%2FT1V4GEJD3%2BgWYAv3G85QdVMoJiXRnMdBsMO6NyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6%2FGWlHeew2yQAFlVKtwD0jIcYOF5M%2FDasXG9E9hup9l0WI2iW%2Bo%2Fb1ZffoMwrf2vY8iIbHf5wWFI%2BZWWp26yt9kuqCa%2FaI6WocaDXN9aWhS7erurSfb3ftccXj3%2Fj5FawpDugOLvnbZ%2BS0IIvS0lGP%2BswjKsyDPt4wxJKikzOAJT3LILEXg1rxVrjzLHjkFlpTLOjTPE5ioMgfAIrtjg8omQGakAzGtXaQgBRlZQ8iHxHtK%2B59%2Fn%2Fd93v8ffGpRdhKnrK5YqP1ztPNGFL%2FXLEGGf%2Bu6MrHhX5cq4Hr9OeHxp1uEKnN0CWk6e3iIvCvEs42AuIuicObnPrD%2BwYR7XowXY16yGqPWoUxgBpjaLfXuWmeBqo33EMEW3sfBBQd0nxwS%2BPYEUdFgSn%2Fd2x%2FoRKgnM6GfTN1ZMn1a0SHzFxIhiwR%2F3CIXxYlZwdshwQ9oiu%2F99m%2BXDIy5%2Bk9TsJpPteNQqLx7MPrrJDgk6gdO9as6PhtDYwYbDs3p6HDG4Ga4MYTK%2Fr%2FtrL0BtobBVXFK4kT%2Bo19vcBiwUuoocfx8H8LaTzfmu1QhX13dzpMVwI0nBfEkBsUyB0BLKsY0dofstvE68gCkFyOII1z1QbmSH1VZiVf7VhBQB0tMwhXWvr87N7KLU%2FT1scsuy5Gow%2BbGzwQY6pgFRJgUD4z75i%2BHRytlpwG0Y27qoCUkzSZyo94Vo%2B1ul4KiuX1ZDuw745FYqyDyrxfdF06HAj2tw2tY%2Ftwbe6aretAMAczQabBHB3kr2Kee%2Fk5%2BtTceclKHTX9CU8E5S0Ck2xxdBpgE1joh5rKpWSkUegAUt9lpoHh9aj%2Fm25J3VpLxj44im14tTNIhUE97bBjtpNBCyE2g8SLnnl13hCRtWxWxdBpDA&X-Amz-Signature=4ae245dd6d6b8aa00da3a5935fccea9c3f1a655d65b3ae62315f0d58543e207c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667LTP3ZY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmK6FALztYwQwItfAfPiD%2B6BwadTI1QoBuyZo1JKj25AiAeBAM%2FT1V4GEJD3%2BgWYAv3G85QdVMoJiXRnMdBsMO6NyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6%2FGWlHeew2yQAFlVKtwD0jIcYOF5M%2FDasXG9E9hup9l0WI2iW%2Bo%2Fb1ZffoMwrf2vY8iIbHf5wWFI%2BZWWp26yt9kuqCa%2FaI6WocaDXN9aWhS7erurSfb3ftccXj3%2Fj5FawpDugOLvnbZ%2BS0IIvS0lGP%2BswjKsyDPt4wxJKikzOAJT3LILEXg1rxVrjzLHjkFlpTLOjTPE5ioMgfAIrtjg8omQGakAzGtXaQgBRlZQ8iHxHtK%2B59%2Fn%2Fd93v8ffGpRdhKnrK5YqP1ztPNGFL%2FXLEGGf%2Bu6MrHhX5cq4Hr9OeHxp1uEKnN0CWk6e3iIvCvEs42AuIuicObnPrD%2BwYR7XowXY16yGqPWoUxgBpjaLfXuWmeBqo33EMEW3sfBBQd0nxwS%2BPYEUdFgSn%2Fd2x%2FoRKgnM6GfTN1ZMn1a0SHzFxIhiwR%2F3CIXxYlZwdshwQ9oiu%2F99m%2BXDIy5%2Bk9TsJpPteNQqLx7MPrrJDgk6gdO9as6PhtDYwYbDs3p6HDG4Ga4MYTK%2Fr%2FtrL0BtobBVXFK4kT%2Bo19vcBiwUuoocfx8H8LaTzfmu1QhX13dzpMVwI0nBfEkBsUyB0BLKsY0dofstvE68gCkFyOII1z1QbmSH1VZiVf7VhBQB0tMwhXWvr87N7KLU%2FT1scsuy5Gow%2BbGzwQY6pgFRJgUD4z75i%2BHRytlpwG0Y27qoCUkzSZyo94Vo%2B1ul4KiuX1ZDuw745FYqyDyrxfdF06HAj2tw2tY%2Ftwbe6aretAMAczQabBHB3kr2Kee%2Fk5%2BtTceclKHTX9CU8E5S0Ck2xxdBpgE1joh5rKpWSkUegAUt9lpoHh9aj%2Fm25J3VpLxj44im14tTNIhUE97bBjtpNBCyE2g8SLnnl13hCRtWxWxdBpDA&X-Amz-Signature=8a78d490ef5e776d035882e89b23331c4e77fe5b17764227d1f0639cbcab61cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667LTP3ZY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmK6FALztYwQwItfAfPiD%2B6BwadTI1QoBuyZo1JKj25AiAeBAM%2FT1V4GEJD3%2BgWYAv3G85QdVMoJiXRnMdBsMO6NyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6%2FGWlHeew2yQAFlVKtwD0jIcYOF5M%2FDasXG9E9hup9l0WI2iW%2Bo%2Fb1ZffoMwrf2vY8iIbHf5wWFI%2BZWWp26yt9kuqCa%2FaI6WocaDXN9aWhS7erurSfb3ftccXj3%2Fj5FawpDugOLvnbZ%2BS0IIvS0lGP%2BswjKsyDPt4wxJKikzOAJT3LILEXg1rxVrjzLHjkFlpTLOjTPE5ioMgfAIrtjg8omQGakAzGtXaQgBRlZQ8iHxHtK%2B59%2Fn%2Fd93v8ffGpRdhKnrK5YqP1ztPNGFL%2FXLEGGf%2Bu6MrHhX5cq4Hr9OeHxp1uEKnN0CWk6e3iIvCvEs42AuIuicObnPrD%2BwYR7XowXY16yGqPWoUxgBpjaLfXuWmeBqo33EMEW3sfBBQd0nxwS%2BPYEUdFgSn%2Fd2x%2FoRKgnM6GfTN1ZMn1a0SHzFxIhiwR%2F3CIXxYlZwdshwQ9oiu%2F99m%2BXDIy5%2Bk9TsJpPteNQqLx7MPrrJDgk6gdO9as6PhtDYwYbDs3p6HDG4Ga4MYTK%2Fr%2FtrL0BtobBVXFK4kT%2Bo19vcBiwUuoocfx8H8LaTzfmu1QhX13dzpMVwI0nBfEkBsUyB0BLKsY0dofstvE68gCkFyOII1z1QbmSH1VZiVf7VhBQB0tMwhXWvr87N7KLU%2FT1scsuy5Gow%2BbGzwQY6pgFRJgUD4z75i%2BHRytlpwG0Y27qoCUkzSZyo94Vo%2B1ul4KiuX1ZDuw745FYqyDyrxfdF06HAj2tw2tY%2Ftwbe6aretAMAczQabBHB3kr2Kee%2Fk5%2BtTceclKHTX9CU8E5S0Ck2xxdBpgE1joh5rKpWSkUegAUt9lpoHh9aj%2Fm25J3VpLxj44im14tTNIhUE97bBjtpNBCyE2g8SLnnl13hCRtWxWxdBpDA&X-Amz-Signature=945dfb35deb25f4c8e639f82b83e1a998a6798b8b6d9a2ab15d7ada03f66dc49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667LTP3ZY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmK6FALztYwQwItfAfPiD%2B6BwadTI1QoBuyZo1JKj25AiAeBAM%2FT1V4GEJD3%2BgWYAv3G85QdVMoJiXRnMdBsMO6NyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6%2FGWlHeew2yQAFlVKtwD0jIcYOF5M%2FDasXG9E9hup9l0WI2iW%2Bo%2Fb1ZffoMwrf2vY8iIbHf5wWFI%2BZWWp26yt9kuqCa%2FaI6WocaDXN9aWhS7erurSfb3ftccXj3%2Fj5FawpDugOLvnbZ%2BS0IIvS0lGP%2BswjKsyDPt4wxJKikzOAJT3LILEXg1rxVrjzLHjkFlpTLOjTPE5ioMgfAIrtjg8omQGakAzGtXaQgBRlZQ8iHxHtK%2B59%2Fn%2Fd93v8ffGpRdhKnrK5YqP1ztPNGFL%2FXLEGGf%2Bu6MrHhX5cq4Hr9OeHxp1uEKnN0CWk6e3iIvCvEs42AuIuicObnPrD%2BwYR7XowXY16yGqPWoUxgBpjaLfXuWmeBqo33EMEW3sfBBQd0nxwS%2BPYEUdFgSn%2Fd2x%2FoRKgnM6GfTN1ZMn1a0SHzFxIhiwR%2F3CIXxYlZwdshwQ9oiu%2F99m%2BXDIy5%2Bk9TsJpPteNQqLx7MPrrJDgk6gdO9as6PhtDYwYbDs3p6HDG4Ga4MYTK%2Fr%2FtrL0BtobBVXFK4kT%2Bo19vcBiwUuoocfx8H8LaTzfmu1QhX13dzpMVwI0nBfEkBsUyB0BLKsY0dofstvE68gCkFyOII1z1QbmSH1VZiVf7VhBQB0tMwhXWvr87N7KLU%2FT1scsuy5Gow%2BbGzwQY6pgFRJgUD4z75i%2BHRytlpwG0Y27qoCUkzSZyo94Vo%2B1ul4KiuX1ZDuw745FYqyDyrxfdF06HAj2tw2tY%2Ftwbe6aretAMAczQabBHB3kr2Kee%2Fk5%2BtTceclKHTX9CU8E5S0Ck2xxdBpgE1joh5rKpWSkUegAUt9lpoHh9aj%2Fm25J3VpLxj44im14tTNIhUE97bBjtpNBCyE2g8SLnnl13hCRtWxWxdBpDA&X-Amz-Signature=1db6e81a93ef822d4d68762d7c8f17b7dcc9510b116d32d7ae5272699586b223&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667LTP3ZY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmK6FALztYwQwItfAfPiD%2B6BwadTI1QoBuyZo1JKj25AiAeBAM%2FT1V4GEJD3%2BgWYAv3G85QdVMoJiXRnMdBsMO6NyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6%2FGWlHeew2yQAFlVKtwD0jIcYOF5M%2FDasXG9E9hup9l0WI2iW%2Bo%2Fb1ZffoMwrf2vY8iIbHf5wWFI%2BZWWp26yt9kuqCa%2FaI6WocaDXN9aWhS7erurSfb3ftccXj3%2Fj5FawpDugOLvnbZ%2BS0IIvS0lGP%2BswjKsyDPt4wxJKikzOAJT3LILEXg1rxVrjzLHjkFlpTLOjTPE5ioMgfAIrtjg8omQGakAzGtXaQgBRlZQ8iHxHtK%2B59%2Fn%2Fd93v8ffGpRdhKnrK5YqP1ztPNGFL%2FXLEGGf%2Bu6MrHhX5cq4Hr9OeHxp1uEKnN0CWk6e3iIvCvEs42AuIuicObnPrD%2BwYR7XowXY16yGqPWoUxgBpjaLfXuWmeBqo33EMEW3sfBBQd0nxwS%2BPYEUdFgSn%2Fd2x%2FoRKgnM6GfTN1ZMn1a0SHzFxIhiwR%2F3CIXxYlZwdshwQ9oiu%2F99m%2BXDIy5%2Bk9TsJpPteNQqLx7MPrrJDgk6gdO9as6PhtDYwYbDs3p6HDG4Ga4MYTK%2Fr%2FtrL0BtobBVXFK4kT%2Bo19vcBiwUuoocfx8H8LaTzfmu1QhX13dzpMVwI0nBfEkBsUyB0BLKsY0dofstvE68gCkFyOII1z1QbmSH1VZiVf7VhBQB0tMwhXWvr87N7KLU%2FT1scsuy5Gow%2BbGzwQY6pgFRJgUD4z75i%2BHRytlpwG0Y27qoCUkzSZyo94Vo%2B1ul4KiuX1ZDuw745FYqyDyrxfdF06HAj2tw2tY%2Ftwbe6aretAMAczQabBHB3kr2Kee%2Fk5%2BtTceclKHTX9CU8E5S0Ck2xxdBpgE1joh5rKpWSkUegAUt9lpoHh9aj%2Fm25J3VpLxj44im14tTNIhUE97bBjtpNBCyE2g8SLnnl13hCRtWxWxdBpDA&X-Amz-Signature=61a671fb55d9108484b042abbfc8f219f0d584db9ef136d4b7666e884f5f19ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667LTP3ZY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmK6FALztYwQwItfAfPiD%2B6BwadTI1QoBuyZo1JKj25AiAeBAM%2FT1V4GEJD3%2BgWYAv3G85QdVMoJiXRnMdBsMO6NyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6%2FGWlHeew2yQAFlVKtwD0jIcYOF5M%2FDasXG9E9hup9l0WI2iW%2Bo%2Fb1ZffoMwrf2vY8iIbHf5wWFI%2BZWWp26yt9kuqCa%2FaI6WocaDXN9aWhS7erurSfb3ftccXj3%2Fj5FawpDugOLvnbZ%2BS0IIvS0lGP%2BswjKsyDPt4wxJKikzOAJT3LILEXg1rxVrjzLHjkFlpTLOjTPE5ioMgfAIrtjg8omQGakAzGtXaQgBRlZQ8iHxHtK%2B59%2Fn%2Fd93v8ffGpRdhKnrK5YqP1ztPNGFL%2FXLEGGf%2Bu6MrHhX5cq4Hr9OeHxp1uEKnN0CWk6e3iIvCvEs42AuIuicObnPrD%2BwYR7XowXY16yGqPWoUxgBpjaLfXuWmeBqo33EMEW3sfBBQd0nxwS%2BPYEUdFgSn%2Fd2x%2FoRKgnM6GfTN1ZMn1a0SHzFxIhiwR%2F3CIXxYlZwdshwQ9oiu%2F99m%2BXDIy5%2Bk9TsJpPteNQqLx7MPrrJDgk6gdO9as6PhtDYwYbDs3p6HDG4Ga4MYTK%2Fr%2FtrL0BtobBVXFK4kT%2Bo19vcBiwUuoocfx8H8LaTzfmu1QhX13dzpMVwI0nBfEkBsUyB0BLKsY0dofstvE68gCkFyOII1z1QbmSH1VZiVf7VhBQB0tMwhXWvr87N7KLU%2FT1scsuy5Gow%2BbGzwQY6pgFRJgUD4z75i%2BHRytlpwG0Y27qoCUkzSZyo94Vo%2B1ul4KiuX1ZDuw745FYqyDyrxfdF06HAj2tw2tY%2Ftwbe6aretAMAczQabBHB3kr2Kee%2Fk5%2BtTceclKHTX9CU8E5S0Ck2xxdBpgE1joh5rKpWSkUegAUt9lpoHh9aj%2Fm25J3VpLxj44im14tTNIhUE97bBjtpNBCyE2g8SLnnl13hCRtWxWxdBpDA&X-Amz-Signature=d0a6060e2a32e2aef129e3e6a822518025580230312a92e5b4e97387dcd04fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
