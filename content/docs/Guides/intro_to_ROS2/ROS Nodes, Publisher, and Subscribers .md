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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDWXVCL2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyMrzhOFUqyF0q35V0U8cyn%2FuZ26nrNz4%2BbJc%2FRJTEfAiEA%2FqvUQOsqN7%2BHbvowG0M%2FHWOhIPA8zR2MvyHzT8CLN9oq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNwwqoClVgKiuf8khircA8aG%2B1v1WzcxxVR%2BEQXM%2B6ZD3uKGulRArt6yEIcadHJmNpF4LIw48L2Nqzsl0RvmNplf2YpNvdG%2FDeiVo1MM8Ub%2BtGuTvkTsQITWz9hPzJEDyYlh8%2FMmypGWPosANfi8gbli5zpMOe%2F4sKYSdUVGi3eeZBfUIU7AC8YXgIhcuzUPQMNxtr%2Bm6CSe8HvP%2BIpD6%2FVeaRtAJI%2B2IcjhBG3Nt7UTOb%2FCrAkoRqCky9%2FP5fYON%2BoiZmQi9Dexy8arbna4UdoP7L80MgabssocM7D70Duwpy5YpsRp3P5pUsK01YM9A0i48e6b%2BulecJSPJ%2B5WGqKhtabMju10ctvWRHQ%2Fu71LvND6wCCHgkYkZ82IMp1EIynvWNJKqwRyzJxiBU81wnLKKAanuTS5pOA1VIoHljKre%2BFSgQfMwoeHaESU3%2FYCtuH2S3sM4f0WJNFHna7o2rxO3c%2Bqusj9KYsyjw8iOcrz2RchXBgvSrAkg3JgVG4l%2FVPKIj8Z4B6DOkd2pWHZh4Ziq5IA3R%2BgldFxVCa%2FHuBoyNHRKcHeQJNslDMtvvvQhWP3KkkWic9wHV0txlrq%2BoKy%2FrmlVkvO97eQ2jGWXf8St6y5kfqhLRelMfwfAWsGcBfWp7IU8DaV1d91MNDl5MAGOqUB4WFe02sJCJPtHiHNNKFUKJIllCzAEd01wO7C%2BynWrKLrnb8OOshPtgubFNaCdQzIad%2F4PhdKr3xVVgo6pnHODwUQ3zyYbT9AGcSLQ5S1BWD4MvrSnmo6uftDFiau6R939gqIPYStpQg9oZYTSR0a7FCHSFC1obcSF%2BZdmurGY4cwCHCRSalz8y5S6tFCVx4MyEjNtMZTjwtGoB5KX3SYkDtiKDTS&X-Amz-Signature=c7129549b73649725cbc57880d20b063afcb0e4f9cba5a1cfab563d87583c6f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDWXVCL2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyMrzhOFUqyF0q35V0U8cyn%2FuZ26nrNz4%2BbJc%2FRJTEfAiEA%2FqvUQOsqN7%2BHbvowG0M%2FHWOhIPA8zR2MvyHzT8CLN9oq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNwwqoClVgKiuf8khircA8aG%2B1v1WzcxxVR%2BEQXM%2B6ZD3uKGulRArt6yEIcadHJmNpF4LIw48L2Nqzsl0RvmNplf2YpNvdG%2FDeiVo1MM8Ub%2BtGuTvkTsQITWz9hPzJEDyYlh8%2FMmypGWPosANfi8gbli5zpMOe%2F4sKYSdUVGi3eeZBfUIU7AC8YXgIhcuzUPQMNxtr%2Bm6CSe8HvP%2BIpD6%2FVeaRtAJI%2B2IcjhBG3Nt7UTOb%2FCrAkoRqCky9%2FP5fYON%2BoiZmQi9Dexy8arbna4UdoP7L80MgabssocM7D70Duwpy5YpsRp3P5pUsK01YM9A0i48e6b%2BulecJSPJ%2B5WGqKhtabMju10ctvWRHQ%2Fu71LvND6wCCHgkYkZ82IMp1EIynvWNJKqwRyzJxiBU81wnLKKAanuTS5pOA1VIoHljKre%2BFSgQfMwoeHaESU3%2FYCtuH2S3sM4f0WJNFHna7o2rxO3c%2Bqusj9KYsyjw8iOcrz2RchXBgvSrAkg3JgVG4l%2FVPKIj8Z4B6DOkd2pWHZh4Ziq5IA3R%2BgldFxVCa%2FHuBoyNHRKcHeQJNslDMtvvvQhWP3KkkWic9wHV0txlrq%2BoKy%2FrmlVkvO97eQ2jGWXf8St6y5kfqhLRelMfwfAWsGcBfWp7IU8DaV1d91MNDl5MAGOqUB4WFe02sJCJPtHiHNNKFUKJIllCzAEd01wO7C%2BynWrKLrnb8OOshPtgubFNaCdQzIad%2F4PhdKr3xVVgo6pnHODwUQ3zyYbT9AGcSLQ5S1BWD4MvrSnmo6uftDFiau6R939gqIPYStpQg9oZYTSR0a7FCHSFC1obcSF%2BZdmurGY4cwCHCRSalz8y5S6tFCVx4MyEjNtMZTjwtGoB5KX3SYkDtiKDTS&X-Amz-Signature=424806cb4831da3420d96906f41c743dc933ce5f306282a836807a5941edc890&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDWXVCL2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyMrzhOFUqyF0q35V0U8cyn%2FuZ26nrNz4%2BbJc%2FRJTEfAiEA%2FqvUQOsqN7%2BHbvowG0M%2FHWOhIPA8zR2MvyHzT8CLN9oq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNwwqoClVgKiuf8khircA8aG%2B1v1WzcxxVR%2BEQXM%2B6ZD3uKGulRArt6yEIcadHJmNpF4LIw48L2Nqzsl0RvmNplf2YpNvdG%2FDeiVo1MM8Ub%2BtGuTvkTsQITWz9hPzJEDyYlh8%2FMmypGWPosANfi8gbli5zpMOe%2F4sKYSdUVGi3eeZBfUIU7AC8YXgIhcuzUPQMNxtr%2Bm6CSe8HvP%2BIpD6%2FVeaRtAJI%2B2IcjhBG3Nt7UTOb%2FCrAkoRqCky9%2FP5fYON%2BoiZmQi9Dexy8arbna4UdoP7L80MgabssocM7D70Duwpy5YpsRp3P5pUsK01YM9A0i48e6b%2BulecJSPJ%2B5WGqKhtabMju10ctvWRHQ%2Fu71LvND6wCCHgkYkZ82IMp1EIynvWNJKqwRyzJxiBU81wnLKKAanuTS5pOA1VIoHljKre%2BFSgQfMwoeHaESU3%2FYCtuH2S3sM4f0WJNFHna7o2rxO3c%2Bqusj9KYsyjw8iOcrz2RchXBgvSrAkg3JgVG4l%2FVPKIj8Z4B6DOkd2pWHZh4Ziq5IA3R%2BgldFxVCa%2FHuBoyNHRKcHeQJNslDMtvvvQhWP3KkkWic9wHV0txlrq%2BoKy%2FrmlVkvO97eQ2jGWXf8St6y5kfqhLRelMfwfAWsGcBfWp7IU8DaV1d91MNDl5MAGOqUB4WFe02sJCJPtHiHNNKFUKJIllCzAEd01wO7C%2BynWrKLrnb8OOshPtgubFNaCdQzIad%2F4PhdKr3xVVgo6pnHODwUQ3zyYbT9AGcSLQ5S1BWD4MvrSnmo6uftDFiau6R939gqIPYStpQg9oZYTSR0a7FCHSFC1obcSF%2BZdmurGY4cwCHCRSalz8y5S6tFCVx4MyEjNtMZTjwtGoB5KX3SYkDtiKDTS&X-Amz-Signature=ad34de4c17f4669df2d80111055ac70667813ae98697f1baf4323241bc141360&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDWXVCL2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyMrzhOFUqyF0q35V0U8cyn%2FuZ26nrNz4%2BbJc%2FRJTEfAiEA%2FqvUQOsqN7%2BHbvowG0M%2FHWOhIPA8zR2MvyHzT8CLN9oq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNwwqoClVgKiuf8khircA8aG%2B1v1WzcxxVR%2BEQXM%2B6ZD3uKGulRArt6yEIcadHJmNpF4LIw48L2Nqzsl0RvmNplf2YpNvdG%2FDeiVo1MM8Ub%2BtGuTvkTsQITWz9hPzJEDyYlh8%2FMmypGWPosANfi8gbli5zpMOe%2F4sKYSdUVGi3eeZBfUIU7AC8YXgIhcuzUPQMNxtr%2Bm6CSe8HvP%2BIpD6%2FVeaRtAJI%2B2IcjhBG3Nt7UTOb%2FCrAkoRqCky9%2FP5fYON%2BoiZmQi9Dexy8arbna4UdoP7L80MgabssocM7D70Duwpy5YpsRp3P5pUsK01YM9A0i48e6b%2BulecJSPJ%2B5WGqKhtabMju10ctvWRHQ%2Fu71LvND6wCCHgkYkZ82IMp1EIynvWNJKqwRyzJxiBU81wnLKKAanuTS5pOA1VIoHljKre%2BFSgQfMwoeHaESU3%2FYCtuH2S3sM4f0WJNFHna7o2rxO3c%2Bqusj9KYsyjw8iOcrz2RchXBgvSrAkg3JgVG4l%2FVPKIj8Z4B6DOkd2pWHZh4Ziq5IA3R%2BgldFxVCa%2FHuBoyNHRKcHeQJNslDMtvvvQhWP3KkkWic9wHV0txlrq%2BoKy%2FrmlVkvO97eQ2jGWXf8St6y5kfqhLRelMfwfAWsGcBfWp7IU8DaV1d91MNDl5MAGOqUB4WFe02sJCJPtHiHNNKFUKJIllCzAEd01wO7C%2BynWrKLrnb8OOshPtgubFNaCdQzIad%2F4PhdKr3xVVgo6pnHODwUQ3zyYbT9AGcSLQ5S1BWD4MvrSnmo6uftDFiau6R939gqIPYStpQg9oZYTSR0a7FCHSFC1obcSF%2BZdmurGY4cwCHCRSalz8y5S6tFCVx4MyEjNtMZTjwtGoB5KX3SYkDtiKDTS&X-Amz-Signature=98008bfcd45825b746d27b8c4009d8423ef124cad6f033d84b77e9a36c9ef5de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDWXVCL2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyMrzhOFUqyF0q35V0U8cyn%2FuZ26nrNz4%2BbJc%2FRJTEfAiEA%2FqvUQOsqN7%2BHbvowG0M%2FHWOhIPA8zR2MvyHzT8CLN9oq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNwwqoClVgKiuf8khircA8aG%2B1v1WzcxxVR%2BEQXM%2B6ZD3uKGulRArt6yEIcadHJmNpF4LIw48L2Nqzsl0RvmNplf2YpNvdG%2FDeiVo1MM8Ub%2BtGuTvkTsQITWz9hPzJEDyYlh8%2FMmypGWPosANfi8gbli5zpMOe%2F4sKYSdUVGi3eeZBfUIU7AC8YXgIhcuzUPQMNxtr%2Bm6CSe8HvP%2BIpD6%2FVeaRtAJI%2B2IcjhBG3Nt7UTOb%2FCrAkoRqCky9%2FP5fYON%2BoiZmQi9Dexy8arbna4UdoP7L80MgabssocM7D70Duwpy5YpsRp3P5pUsK01YM9A0i48e6b%2BulecJSPJ%2B5WGqKhtabMju10ctvWRHQ%2Fu71LvND6wCCHgkYkZ82IMp1EIynvWNJKqwRyzJxiBU81wnLKKAanuTS5pOA1VIoHljKre%2BFSgQfMwoeHaESU3%2FYCtuH2S3sM4f0WJNFHna7o2rxO3c%2Bqusj9KYsyjw8iOcrz2RchXBgvSrAkg3JgVG4l%2FVPKIj8Z4B6DOkd2pWHZh4Ziq5IA3R%2BgldFxVCa%2FHuBoyNHRKcHeQJNslDMtvvvQhWP3KkkWic9wHV0txlrq%2BoKy%2FrmlVkvO97eQ2jGWXf8St6y5kfqhLRelMfwfAWsGcBfWp7IU8DaV1d91MNDl5MAGOqUB4WFe02sJCJPtHiHNNKFUKJIllCzAEd01wO7C%2BynWrKLrnb8OOshPtgubFNaCdQzIad%2F4PhdKr3xVVgo6pnHODwUQ3zyYbT9AGcSLQ5S1BWD4MvrSnmo6uftDFiau6R939gqIPYStpQg9oZYTSR0a7FCHSFC1obcSF%2BZdmurGY4cwCHCRSalz8y5S6tFCVx4MyEjNtMZTjwtGoB5KX3SYkDtiKDTS&X-Amz-Signature=e90b590ffdaf11f1f87bfdf9a80cde655a87dfcddeecfc38af51395f6cf8d544&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDWXVCL2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyMrzhOFUqyF0q35V0U8cyn%2FuZ26nrNz4%2BbJc%2FRJTEfAiEA%2FqvUQOsqN7%2BHbvowG0M%2FHWOhIPA8zR2MvyHzT8CLN9oq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNwwqoClVgKiuf8khircA8aG%2B1v1WzcxxVR%2BEQXM%2B6ZD3uKGulRArt6yEIcadHJmNpF4LIw48L2Nqzsl0RvmNplf2YpNvdG%2FDeiVo1MM8Ub%2BtGuTvkTsQITWz9hPzJEDyYlh8%2FMmypGWPosANfi8gbli5zpMOe%2F4sKYSdUVGi3eeZBfUIU7AC8YXgIhcuzUPQMNxtr%2Bm6CSe8HvP%2BIpD6%2FVeaRtAJI%2B2IcjhBG3Nt7UTOb%2FCrAkoRqCky9%2FP5fYON%2BoiZmQi9Dexy8arbna4UdoP7L80MgabssocM7D70Duwpy5YpsRp3P5pUsK01YM9A0i48e6b%2BulecJSPJ%2B5WGqKhtabMju10ctvWRHQ%2Fu71LvND6wCCHgkYkZ82IMp1EIynvWNJKqwRyzJxiBU81wnLKKAanuTS5pOA1VIoHljKre%2BFSgQfMwoeHaESU3%2FYCtuH2S3sM4f0WJNFHna7o2rxO3c%2Bqusj9KYsyjw8iOcrz2RchXBgvSrAkg3JgVG4l%2FVPKIj8Z4B6DOkd2pWHZh4Ziq5IA3R%2BgldFxVCa%2FHuBoyNHRKcHeQJNslDMtvvvQhWP3KkkWic9wHV0txlrq%2BoKy%2FrmlVkvO97eQ2jGWXf8St6y5kfqhLRelMfwfAWsGcBfWp7IU8DaV1d91MNDl5MAGOqUB4WFe02sJCJPtHiHNNKFUKJIllCzAEd01wO7C%2BynWrKLrnb8OOshPtgubFNaCdQzIad%2F4PhdKr3xVVgo6pnHODwUQ3zyYbT9AGcSLQ5S1BWD4MvrSnmo6uftDFiau6R939gqIPYStpQg9oZYTSR0a7FCHSFC1obcSF%2BZdmurGY4cwCHCRSalz8y5S6tFCVx4MyEjNtMZTjwtGoB5KX3SYkDtiKDTS&X-Amz-Signature=228df58fc9b0060f31f8d9b5d876a6db24cb4a69ebe77377784128e5005d5700&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDWXVCL2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyMrzhOFUqyF0q35V0U8cyn%2FuZ26nrNz4%2BbJc%2FRJTEfAiEA%2FqvUQOsqN7%2BHbvowG0M%2FHWOhIPA8zR2MvyHzT8CLN9oq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNwwqoClVgKiuf8khircA8aG%2B1v1WzcxxVR%2BEQXM%2B6ZD3uKGulRArt6yEIcadHJmNpF4LIw48L2Nqzsl0RvmNplf2YpNvdG%2FDeiVo1MM8Ub%2BtGuTvkTsQITWz9hPzJEDyYlh8%2FMmypGWPosANfi8gbli5zpMOe%2F4sKYSdUVGi3eeZBfUIU7AC8YXgIhcuzUPQMNxtr%2Bm6CSe8HvP%2BIpD6%2FVeaRtAJI%2B2IcjhBG3Nt7UTOb%2FCrAkoRqCky9%2FP5fYON%2BoiZmQi9Dexy8arbna4UdoP7L80MgabssocM7D70Duwpy5YpsRp3P5pUsK01YM9A0i48e6b%2BulecJSPJ%2B5WGqKhtabMju10ctvWRHQ%2Fu71LvND6wCCHgkYkZ82IMp1EIynvWNJKqwRyzJxiBU81wnLKKAanuTS5pOA1VIoHljKre%2BFSgQfMwoeHaESU3%2FYCtuH2S3sM4f0WJNFHna7o2rxO3c%2Bqusj9KYsyjw8iOcrz2RchXBgvSrAkg3JgVG4l%2FVPKIj8Z4B6DOkd2pWHZh4Ziq5IA3R%2BgldFxVCa%2FHuBoyNHRKcHeQJNslDMtvvvQhWP3KkkWic9wHV0txlrq%2BoKy%2FrmlVkvO97eQ2jGWXf8St6y5kfqhLRelMfwfAWsGcBfWp7IU8DaV1d91MNDl5MAGOqUB4WFe02sJCJPtHiHNNKFUKJIllCzAEd01wO7C%2BynWrKLrnb8OOshPtgubFNaCdQzIad%2F4PhdKr3xVVgo6pnHODwUQ3zyYbT9AGcSLQ5S1BWD4MvrSnmo6uftDFiau6R939gqIPYStpQg9oZYTSR0a7FCHSFC1obcSF%2BZdmurGY4cwCHCRSalz8y5S6tFCVx4MyEjNtMZTjwtGoB5KX3SYkDtiKDTS&X-Amz-Signature=9d84776c19c63e33a07df5341c1b1498964017c19024ef317666c9dc22f707aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDWXVCL2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyMrzhOFUqyF0q35V0U8cyn%2FuZ26nrNz4%2BbJc%2FRJTEfAiEA%2FqvUQOsqN7%2BHbvowG0M%2FHWOhIPA8zR2MvyHzT8CLN9oq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNwwqoClVgKiuf8khircA8aG%2B1v1WzcxxVR%2BEQXM%2B6ZD3uKGulRArt6yEIcadHJmNpF4LIw48L2Nqzsl0RvmNplf2YpNvdG%2FDeiVo1MM8Ub%2BtGuTvkTsQITWz9hPzJEDyYlh8%2FMmypGWPosANfi8gbli5zpMOe%2F4sKYSdUVGi3eeZBfUIU7AC8YXgIhcuzUPQMNxtr%2Bm6CSe8HvP%2BIpD6%2FVeaRtAJI%2B2IcjhBG3Nt7UTOb%2FCrAkoRqCky9%2FP5fYON%2BoiZmQi9Dexy8arbna4UdoP7L80MgabssocM7D70Duwpy5YpsRp3P5pUsK01YM9A0i48e6b%2BulecJSPJ%2B5WGqKhtabMju10ctvWRHQ%2Fu71LvND6wCCHgkYkZ82IMp1EIynvWNJKqwRyzJxiBU81wnLKKAanuTS5pOA1VIoHljKre%2BFSgQfMwoeHaESU3%2FYCtuH2S3sM4f0WJNFHna7o2rxO3c%2Bqusj9KYsyjw8iOcrz2RchXBgvSrAkg3JgVG4l%2FVPKIj8Z4B6DOkd2pWHZh4Ziq5IA3R%2BgldFxVCa%2FHuBoyNHRKcHeQJNslDMtvvvQhWP3KkkWic9wHV0txlrq%2BoKy%2FrmlVkvO97eQ2jGWXf8St6y5kfqhLRelMfwfAWsGcBfWp7IU8DaV1d91MNDl5MAGOqUB4WFe02sJCJPtHiHNNKFUKJIllCzAEd01wO7C%2BynWrKLrnb8OOshPtgubFNaCdQzIad%2F4PhdKr3xVVgo6pnHODwUQ3zyYbT9AGcSLQ5S1BWD4MvrSnmo6uftDFiau6R939gqIPYStpQg9oZYTSR0a7FCHSFC1obcSF%2BZdmurGY4cwCHCRSalz8y5S6tFCVx4MyEjNtMZTjwtGoB5KX3SYkDtiKDTS&X-Amz-Signature=0b8684f159e431ecfcb1096566e0458d455400f80e8928c46dd417cd08deadf5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
