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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH7E3LYS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIA265I0eEHL16d5OMJbC%2B1pFEdXkfK%2B1uart1UUX2tzBAiBLP1H1xPpXmp0HPndLNlu1NGDdInSShWVsF8U6Dkv8%2FSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMHyCb%2Bu59FHX70fTqKtwDHkMW5%2Fv64w%2BHuLJSjHgn2ErgYA3Ybdvd4JhIIYB7eLV9B2dX5jakDIrVuBGAlueAsSrUrGQHZD%2FE6qvkhwUv4%2FldrNGqFjd1UIYZ%2BPi9%2Fko90cNU5fd9HPQy1qV1yrjB98ACFkly5GxxrRd%2B4VL%2B0oC7lA8BB0v1c0chFF89%2BId2bGew6SH4LgQw15qI9A9DmlPgV5zLJqivnxEBB2E9NlJ2AxjiFC1NzYuQ2lWuc28EeNJnf7TfoKTnkWA8hQURJu%2Bzp1JUQO4TwUjKbrw6AsO%2FVOZ93RGwS%2FRh%2FZUTTFWTnpdCStsWUl4cgmWVJ38u4Zp4tAlB79Khz8b6II%2F4mYpdLnW8NNYi35Ih9GLdswpSRnxATj6O3NqlAw2kTLJJxiHLVpQ1iEdcW5RQajk4Q9QIVoUa9BaCh7thoRYrdIMRwgdt%2BpkTWmeoBE6hFTnL%2BAnQftj%2BfEVbXZmGQrxNjSaht2nYKv8K5kmNFaFZqAoVPZ3P8RuwBODZSFOEF1PjY7vlOrR%2BeQHMToG1N3LY2ZdOEE8d6kHEmKzVBPltwPk0kP9qeuYSoHMGrpUCMv9IXPXLMouvF1Td0Fkhc%2F%2BvSAeVG3FXQHysy3lSI4c8XenxVsz%2F8vDxHSs8Fhkwp4enwwY6pgEilh4YmC4T%2BW%2Bl0vVxrT%2Fmqr2krkNxYKn5LHaA7uKn%2BL9teAMTb%2BoDRHe6SkCNOEAGxCEUd1Ekb04koGlTjxS8MX3GwSUfBpqLGeKtLdw2xL0SR1Y25OsFeGkGscyFYQDvN5U%2B%2BWgy8h4W%2Bz7Fj1UdWkJLmWPARdy0ehfOlaRCccgdPqlbCcQhDYFznbxtnR4Ts0eZ8kcqy%2FORNRfcIyiydWKFW%2Bw%2F&X-Amz-Signature=a7942ad8cee451177811e8de930a45b7fd04008c6430da6cf4dc08e7f05e7055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH7E3LYS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIA265I0eEHL16d5OMJbC%2B1pFEdXkfK%2B1uart1UUX2tzBAiBLP1H1xPpXmp0HPndLNlu1NGDdInSShWVsF8U6Dkv8%2FSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMHyCb%2Bu59FHX70fTqKtwDHkMW5%2Fv64w%2BHuLJSjHgn2ErgYA3Ybdvd4JhIIYB7eLV9B2dX5jakDIrVuBGAlueAsSrUrGQHZD%2FE6qvkhwUv4%2FldrNGqFjd1UIYZ%2BPi9%2Fko90cNU5fd9HPQy1qV1yrjB98ACFkly5GxxrRd%2B4VL%2B0oC7lA8BB0v1c0chFF89%2BId2bGew6SH4LgQw15qI9A9DmlPgV5zLJqivnxEBB2E9NlJ2AxjiFC1NzYuQ2lWuc28EeNJnf7TfoKTnkWA8hQURJu%2Bzp1JUQO4TwUjKbrw6AsO%2FVOZ93RGwS%2FRh%2FZUTTFWTnpdCStsWUl4cgmWVJ38u4Zp4tAlB79Khz8b6II%2F4mYpdLnW8NNYi35Ih9GLdswpSRnxATj6O3NqlAw2kTLJJxiHLVpQ1iEdcW5RQajk4Q9QIVoUa9BaCh7thoRYrdIMRwgdt%2BpkTWmeoBE6hFTnL%2BAnQftj%2BfEVbXZmGQrxNjSaht2nYKv8K5kmNFaFZqAoVPZ3P8RuwBODZSFOEF1PjY7vlOrR%2BeQHMToG1N3LY2ZdOEE8d6kHEmKzVBPltwPk0kP9qeuYSoHMGrpUCMv9IXPXLMouvF1Td0Fkhc%2F%2BvSAeVG3FXQHysy3lSI4c8XenxVsz%2F8vDxHSs8Fhkwp4enwwY6pgEilh4YmC4T%2BW%2Bl0vVxrT%2Fmqr2krkNxYKn5LHaA7uKn%2BL9teAMTb%2BoDRHe6SkCNOEAGxCEUd1Ekb04koGlTjxS8MX3GwSUfBpqLGeKtLdw2xL0SR1Y25OsFeGkGscyFYQDvN5U%2B%2BWgy8h4W%2Bz7Fj1UdWkJLmWPARdy0ehfOlaRCccgdPqlbCcQhDYFznbxtnR4Ts0eZ8kcqy%2FORNRfcIyiydWKFW%2Bw%2F&X-Amz-Signature=7f888019fcb7c164e2c2bd2f09ad211bb943265c0d688e283a427bc8d57fa213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH7E3LYS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIA265I0eEHL16d5OMJbC%2B1pFEdXkfK%2B1uart1UUX2tzBAiBLP1H1xPpXmp0HPndLNlu1NGDdInSShWVsF8U6Dkv8%2FSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMHyCb%2Bu59FHX70fTqKtwDHkMW5%2Fv64w%2BHuLJSjHgn2ErgYA3Ybdvd4JhIIYB7eLV9B2dX5jakDIrVuBGAlueAsSrUrGQHZD%2FE6qvkhwUv4%2FldrNGqFjd1UIYZ%2BPi9%2Fko90cNU5fd9HPQy1qV1yrjB98ACFkly5GxxrRd%2B4VL%2B0oC7lA8BB0v1c0chFF89%2BId2bGew6SH4LgQw15qI9A9DmlPgV5zLJqivnxEBB2E9NlJ2AxjiFC1NzYuQ2lWuc28EeNJnf7TfoKTnkWA8hQURJu%2Bzp1JUQO4TwUjKbrw6AsO%2FVOZ93RGwS%2FRh%2FZUTTFWTnpdCStsWUl4cgmWVJ38u4Zp4tAlB79Khz8b6II%2F4mYpdLnW8NNYi35Ih9GLdswpSRnxATj6O3NqlAw2kTLJJxiHLVpQ1iEdcW5RQajk4Q9QIVoUa9BaCh7thoRYrdIMRwgdt%2BpkTWmeoBE6hFTnL%2BAnQftj%2BfEVbXZmGQrxNjSaht2nYKv8K5kmNFaFZqAoVPZ3P8RuwBODZSFOEF1PjY7vlOrR%2BeQHMToG1N3LY2ZdOEE8d6kHEmKzVBPltwPk0kP9qeuYSoHMGrpUCMv9IXPXLMouvF1Td0Fkhc%2F%2BvSAeVG3FXQHysy3lSI4c8XenxVsz%2F8vDxHSs8Fhkwp4enwwY6pgEilh4YmC4T%2BW%2Bl0vVxrT%2Fmqr2krkNxYKn5LHaA7uKn%2BL9teAMTb%2BoDRHe6SkCNOEAGxCEUd1Ekb04koGlTjxS8MX3GwSUfBpqLGeKtLdw2xL0SR1Y25OsFeGkGscyFYQDvN5U%2B%2BWgy8h4W%2Bz7Fj1UdWkJLmWPARdy0ehfOlaRCccgdPqlbCcQhDYFznbxtnR4Ts0eZ8kcqy%2FORNRfcIyiydWKFW%2Bw%2F&X-Amz-Signature=fae5a7e7914965015def4dd45998687f504ca84db7bee3fcb8693e2fb33e0ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH7E3LYS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIA265I0eEHL16d5OMJbC%2B1pFEdXkfK%2B1uart1UUX2tzBAiBLP1H1xPpXmp0HPndLNlu1NGDdInSShWVsF8U6Dkv8%2FSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMHyCb%2Bu59FHX70fTqKtwDHkMW5%2Fv64w%2BHuLJSjHgn2ErgYA3Ybdvd4JhIIYB7eLV9B2dX5jakDIrVuBGAlueAsSrUrGQHZD%2FE6qvkhwUv4%2FldrNGqFjd1UIYZ%2BPi9%2Fko90cNU5fd9HPQy1qV1yrjB98ACFkly5GxxrRd%2B4VL%2B0oC7lA8BB0v1c0chFF89%2BId2bGew6SH4LgQw15qI9A9DmlPgV5zLJqivnxEBB2E9NlJ2AxjiFC1NzYuQ2lWuc28EeNJnf7TfoKTnkWA8hQURJu%2Bzp1JUQO4TwUjKbrw6AsO%2FVOZ93RGwS%2FRh%2FZUTTFWTnpdCStsWUl4cgmWVJ38u4Zp4tAlB79Khz8b6II%2F4mYpdLnW8NNYi35Ih9GLdswpSRnxATj6O3NqlAw2kTLJJxiHLVpQ1iEdcW5RQajk4Q9QIVoUa9BaCh7thoRYrdIMRwgdt%2BpkTWmeoBE6hFTnL%2BAnQftj%2BfEVbXZmGQrxNjSaht2nYKv8K5kmNFaFZqAoVPZ3P8RuwBODZSFOEF1PjY7vlOrR%2BeQHMToG1N3LY2ZdOEE8d6kHEmKzVBPltwPk0kP9qeuYSoHMGrpUCMv9IXPXLMouvF1Td0Fkhc%2F%2BvSAeVG3FXQHysy3lSI4c8XenxVsz%2F8vDxHSs8Fhkwp4enwwY6pgEilh4YmC4T%2BW%2Bl0vVxrT%2Fmqr2krkNxYKn5LHaA7uKn%2BL9teAMTb%2BoDRHe6SkCNOEAGxCEUd1Ekb04koGlTjxS8MX3GwSUfBpqLGeKtLdw2xL0SR1Y25OsFeGkGscyFYQDvN5U%2B%2BWgy8h4W%2Bz7Fj1UdWkJLmWPARdy0ehfOlaRCccgdPqlbCcQhDYFznbxtnR4Ts0eZ8kcqy%2FORNRfcIyiydWKFW%2Bw%2F&X-Amz-Signature=2681d92b2ec0ea95cb0df35a07a854f1bd49f81a13baca7a6611dc271a38c626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH7E3LYS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIA265I0eEHL16d5OMJbC%2B1pFEdXkfK%2B1uart1UUX2tzBAiBLP1H1xPpXmp0HPndLNlu1NGDdInSShWVsF8U6Dkv8%2FSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMHyCb%2Bu59FHX70fTqKtwDHkMW5%2Fv64w%2BHuLJSjHgn2ErgYA3Ybdvd4JhIIYB7eLV9B2dX5jakDIrVuBGAlueAsSrUrGQHZD%2FE6qvkhwUv4%2FldrNGqFjd1UIYZ%2BPi9%2Fko90cNU5fd9HPQy1qV1yrjB98ACFkly5GxxrRd%2B4VL%2B0oC7lA8BB0v1c0chFF89%2BId2bGew6SH4LgQw15qI9A9DmlPgV5zLJqivnxEBB2E9NlJ2AxjiFC1NzYuQ2lWuc28EeNJnf7TfoKTnkWA8hQURJu%2Bzp1JUQO4TwUjKbrw6AsO%2FVOZ93RGwS%2FRh%2FZUTTFWTnpdCStsWUl4cgmWVJ38u4Zp4tAlB79Khz8b6II%2F4mYpdLnW8NNYi35Ih9GLdswpSRnxATj6O3NqlAw2kTLJJxiHLVpQ1iEdcW5RQajk4Q9QIVoUa9BaCh7thoRYrdIMRwgdt%2BpkTWmeoBE6hFTnL%2BAnQftj%2BfEVbXZmGQrxNjSaht2nYKv8K5kmNFaFZqAoVPZ3P8RuwBODZSFOEF1PjY7vlOrR%2BeQHMToG1N3LY2ZdOEE8d6kHEmKzVBPltwPk0kP9qeuYSoHMGrpUCMv9IXPXLMouvF1Td0Fkhc%2F%2BvSAeVG3FXQHysy3lSI4c8XenxVsz%2F8vDxHSs8Fhkwp4enwwY6pgEilh4YmC4T%2BW%2Bl0vVxrT%2Fmqr2krkNxYKn5LHaA7uKn%2BL9teAMTb%2BoDRHe6SkCNOEAGxCEUd1Ekb04koGlTjxS8MX3GwSUfBpqLGeKtLdw2xL0SR1Y25OsFeGkGscyFYQDvN5U%2B%2BWgy8h4W%2Bz7Fj1UdWkJLmWPARdy0ehfOlaRCccgdPqlbCcQhDYFznbxtnR4Ts0eZ8kcqy%2FORNRfcIyiydWKFW%2Bw%2F&X-Amz-Signature=71130a9c35ab0b688e7089686fa516c3139204d5adbebb82715a6b74b0bfdc73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH7E3LYS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIA265I0eEHL16d5OMJbC%2B1pFEdXkfK%2B1uart1UUX2tzBAiBLP1H1xPpXmp0HPndLNlu1NGDdInSShWVsF8U6Dkv8%2FSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMHyCb%2Bu59FHX70fTqKtwDHkMW5%2Fv64w%2BHuLJSjHgn2ErgYA3Ybdvd4JhIIYB7eLV9B2dX5jakDIrVuBGAlueAsSrUrGQHZD%2FE6qvkhwUv4%2FldrNGqFjd1UIYZ%2BPi9%2Fko90cNU5fd9HPQy1qV1yrjB98ACFkly5GxxrRd%2B4VL%2B0oC7lA8BB0v1c0chFF89%2BId2bGew6SH4LgQw15qI9A9DmlPgV5zLJqivnxEBB2E9NlJ2AxjiFC1NzYuQ2lWuc28EeNJnf7TfoKTnkWA8hQURJu%2Bzp1JUQO4TwUjKbrw6AsO%2FVOZ93RGwS%2FRh%2FZUTTFWTnpdCStsWUl4cgmWVJ38u4Zp4tAlB79Khz8b6II%2F4mYpdLnW8NNYi35Ih9GLdswpSRnxATj6O3NqlAw2kTLJJxiHLVpQ1iEdcW5RQajk4Q9QIVoUa9BaCh7thoRYrdIMRwgdt%2BpkTWmeoBE6hFTnL%2BAnQftj%2BfEVbXZmGQrxNjSaht2nYKv8K5kmNFaFZqAoVPZ3P8RuwBODZSFOEF1PjY7vlOrR%2BeQHMToG1N3LY2ZdOEE8d6kHEmKzVBPltwPk0kP9qeuYSoHMGrpUCMv9IXPXLMouvF1Td0Fkhc%2F%2BvSAeVG3FXQHysy3lSI4c8XenxVsz%2F8vDxHSs8Fhkwp4enwwY6pgEilh4YmC4T%2BW%2Bl0vVxrT%2Fmqr2krkNxYKn5LHaA7uKn%2BL9teAMTb%2BoDRHe6SkCNOEAGxCEUd1Ekb04koGlTjxS8MX3GwSUfBpqLGeKtLdw2xL0SR1Y25OsFeGkGscyFYQDvN5U%2B%2BWgy8h4W%2Bz7Fj1UdWkJLmWPARdy0ehfOlaRCccgdPqlbCcQhDYFznbxtnR4Ts0eZ8kcqy%2FORNRfcIyiydWKFW%2Bw%2F&X-Amz-Signature=564bfbdbd8de166d5c8932f74a7d92bf7113ad11388ab334346ceed8557cf89e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH7E3LYS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIA265I0eEHL16d5OMJbC%2B1pFEdXkfK%2B1uart1UUX2tzBAiBLP1H1xPpXmp0HPndLNlu1NGDdInSShWVsF8U6Dkv8%2FSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMHyCb%2Bu59FHX70fTqKtwDHkMW5%2Fv64w%2BHuLJSjHgn2ErgYA3Ybdvd4JhIIYB7eLV9B2dX5jakDIrVuBGAlueAsSrUrGQHZD%2FE6qvkhwUv4%2FldrNGqFjd1UIYZ%2BPi9%2Fko90cNU5fd9HPQy1qV1yrjB98ACFkly5GxxrRd%2B4VL%2B0oC7lA8BB0v1c0chFF89%2BId2bGew6SH4LgQw15qI9A9DmlPgV5zLJqivnxEBB2E9NlJ2AxjiFC1NzYuQ2lWuc28EeNJnf7TfoKTnkWA8hQURJu%2Bzp1JUQO4TwUjKbrw6AsO%2FVOZ93RGwS%2FRh%2FZUTTFWTnpdCStsWUl4cgmWVJ38u4Zp4tAlB79Khz8b6II%2F4mYpdLnW8NNYi35Ih9GLdswpSRnxATj6O3NqlAw2kTLJJxiHLVpQ1iEdcW5RQajk4Q9QIVoUa9BaCh7thoRYrdIMRwgdt%2BpkTWmeoBE6hFTnL%2BAnQftj%2BfEVbXZmGQrxNjSaht2nYKv8K5kmNFaFZqAoVPZ3P8RuwBODZSFOEF1PjY7vlOrR%2BeQHMToG1N3LY2ZdOEE8d6kHEmKzVBPltwPk0kP9qeuYSoHMGrpUCMv9IXPXLMouvF1Td0Fkhc%2F%2BvSAeVG3FXQHysy3lSI4c8XenxVsz%2F8vDxHSs8Fhkwp4enwwY6pgEilh4YmC4T%2BW%2Bl0vVxrT%2Fmqr2krkNxYKn5LHaA7uKn%2BL9teAMTb%2BoDRHe6SkCNOEAGxCEUd1Ekb04koGlTjxS8MX3GwSUfBpqLGeKtLdw2xL0SR1Y25OsFeGkGscyFYQDvN5U%2B%2BWgy8h4W%2Bz7Fj1UdWkJLmWPARdy0ehfOlaRCccgdPqlbCcQhDYFznbxtnR4Ts0eZ8kcqy%2FORNRfcIyiydWKFW%2Bw%2F&X-Amz-Signature=e2c7e1ca1934e7a3200dbe2769af09558bb7653cc2eaa8f2e65a75448c161a70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH7E3LYS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIA265I0eEHL16d5OMJbC%2B1pFEdXkfK%2B1uart1UUX2tzBAiBLP1H1xPpXmp0HPndLNlu1NGDdInSShWVsF8U6Dkv8%2FSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMHyCb%2Bu59FHX70fTqKtwDHkMW5%2Fv64w%2BHuLJSjHgn2ErgYA3Ybdvd4JhIIYB7eLV9B2dX5jakDIrVuBGAlueAsSrUrGQHZD%2FE6qvkhwUv4%2FldrNGqFjd1UIYZ%2BPi9%2Fko90cNU5fd9HPQy1qV1yrjB98ACFkly5GxxrRd%2B4VL%2B0oC7lA8BB0v1c0chFF89%2BId2bGew6SH4LgQw15qI9A9DmlPgV5zLJqivnxEBB2E9NlJ2AxjiFC1NzYuQ2lWuc28EeNJnf7TfoKTnkWA8hQURJu%2Bzp1JUQO4TwUjKbrw6AsO%2FVOZ93RGwS%2FRh%2FZUTTFWTnpdCStsWUl4cgmWVJ38u4Zp4tAlB79Khz8b6II%2F4mYpdLnW8NNYi35Ih9GLdswpSRnxATj6O3NqlAw2kTLJJxiHLVpQ1iEdcW5RQajk4Q9QIVoUa9BaCh7thoRYrdIMRwgdt%2BpkTWmeoBE6hFTnL%2BAnQftj%2BfEVbXZmGQrxNjSaht2nYKv8K5kmNFaFZqAoVPZ3P8RuwBODZSFOEF1PjY7vlOrR%2BeQHMToG1N3LY2ZdOEE8d6kHEmKzVBPltwPk0kP9qeuYSoHMGrpUCMv9IXPXLMouvF1Td0Fkhc%2F%2BvSAeVG3FXQHysy3lSI4c8XenxVsz%2F8vDxHSs8Fhkwp4enwwY6pgEilh4YmC4T%2BW%2Bl0vVxrT%2Fmqr2krkNxYKn5LHaA7uKn%2BL9teAMTb%2BoDRHe6SkCNOEAGxCEUd1Ekb04koGlTjxS8MX3GwSUfBpqLGeKtLdw2xL0SR1Y25OsFeGkGscyFYQDvN5U%2B%2BWgy8h4W%2Bz7Fj1UdWkJLmWPARdy0ehfOlaRCccgdPqlbCcQhDYFznbxtnR4Ts0eZ8kcqy%2FORNRfcIyiydWKFW%2Bw%2F&X-Amz-Signature=855cd9542c56db143158770b7fc813c154231d623e30b59e81a999ae7f2d0d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
