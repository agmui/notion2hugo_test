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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQ3CWAH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIArDJW7Dzl%2F7j8PBPeHM8ekz%2BHiNJSI9cTAKMdxFG4RTAiB4cvtLUDXhXc6oRMPZ7QflO9NaKL%2BOcRYtAb2vbpAfsyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSrD%2B%2BwCmHab4RhytKtwDzQulWrnFlvlxBm0ay2%2BUGwo%2F7YYXjwC%2F8Y9YmzIi3IuV44bBO1OcvqOoCOcCaQm9qf5hSObmXFYZiq5lMOx45nIm0jsOFoLCFrSzsM1yd7QwO3X7wVCb9K2OS97VOcXkoWSFr4PTSvY9tyWtt8jxC6NLQmWkLxkGZCrtyjEORXFFJMjoZW%2BcfyvDVqV41l6yOcfb1qNo6jbCWnj10%2BIAazvd6bvnK43CsW36y069K%2FBKFSpH1JVPFniGpx7Vb7lv9KDjzakzaHSMIl2XSzo55GChGXF216gEcoFUwnPCveQwHOYbBsQxflAgR55q%2FFP93nrFFAbXRd8P4Ehz5kcfPUt0yj5%2FoFqrtNo4gL4OjyWU0wneiaCNsLgT529asu%2Bdb1qHwuoBo8ydLuBhkkp5M9FbZuxYYMMOzq0ReCqcd3wv91CQHxoiKQ0AncyIrnNH4yDSFOiI8ud4WaPgLBuDpKB%2BYyRkONkq19aeZ26ArNIu%2FN0eMS%2BTT%2BguGn%2FTASAiWR7vVy%2FQOJdIufCxZV8Qk58CvS39N4jq%2FMk%2FQqrwfPwDsI62lFTSuCoG1S9vXG8nl472EXDqzOHmoVeGtTp2VSXAHT871em0pNllIwmVQjQqlgkDIQ3FZrEhxdkwuPLOwAY6pgGB6yr73BFHmFiTu0aATPwzuCgzdyrd6O9C1sfGVKV66MW%2FMsK3uD%2BWzR8Qq7oEFq43oOtKDgmS8xcKZa5lX0UKub6WJlUF82uHjrOBJWeiAhoOZoOqKvi%2FLHBwcXdS9MyxYEVHaYcP0ctsdCKNETd%2FzyWuxLrs7713%2B4xWgIIhxgw8cKTZ8WyWQvLUu3gpjL3V90ORQrd32LOgt%2BgvpVj7cyBv0k3k&X-Amz-Signature=746bff01897b0233ebb1555dfcf9e6af8ab9dc5d4732d2fac0c289d7380a9138&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQ3CWAH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIArDJW7Dzl%2F7j8PBPeHM8ekz%2BHiNJSI9cTAKMdxFG4RTAiB4cvtLUDXhXc6oRMPZ7QflO9NaKL%2BOcRYtAb2vbpAfsyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSrD%2B%2BwCmHab4RhytKtwDzQulWrnFlvlxBm0ay2%2BUGwo%2F7YYXjwC%2F8Y9YmzIi3IuV44bBO1OcvqOoCOcCaQm9qf5hSObmXFYZiq5lMOx45nIm0jsOFoLCFrSzsM1yd7QwO3X7wVCb9K2OS97VOcXkoWSFr4PTSvY9tyWtt8jxC6NLQmWkLxkGZCrtyjEORXFFJMjoZW%2BcfyvDVqV41l6yOcfb1qNo6jbCWnj10%2BIAazvd6bvnK43CsW36y069K%2FBKFSpH1JVPFniGpx7Vb7lv9KDjzakzaHSMIl2XSzo55GChGXF216gEcoFUwnPCveQwHOYbBsQxflAgR55q%2FFP93nrFFAbXRd8P4Ehz5kcfPUt0yj5%2FoFqrtNo4gL4OjyWU0wneiaCNsLgT529asu%2Bdb1qHwuoBo8ydLuBhkkp5M9FbZuxYYMMOzq0ReCqcd3wv91CQHxoiKQ0AncyIrnNH4yDSFOiI8ud4WaPgLBuDpKB%2BYyRkONkq19aeZ26ArNIu%2FN0eMS%2BTT%2BguGn%2FTASAiWR7vVy%2FQOJdIufCxZV8Qk58CvS39N4jq%2FMk%2FQqrwfPwDsI62lFTSuCoG1S9vXG8nl472EXDqzOHmoVeGtTp2VSXAHT871em0pNllIwmVQjQqlgkDIQ3FZrEhxdkwuPLOwAY6pgGB6yr73BFHmFiTu0aATPwzuCgzdyrd6O9C1sfGVKV66MW%2FMsK3uD%2BWzR8Qq7oEFq43oOtKDgmS8xcKZa5lX0UKub6WJlUF82uHjrOBJWeiAhoOZoOqKvi%2FLHBwcXdS9MyxYEVHaYcP0ctsdCKNETd%2FzyWuxLrs7713%2B4xWgIIhxgw8cKTZ8WyWQvLUu3gpjL3V90ORQrd32LOgt%2BgvpVj7cyBv0k3k&X-Amz-Signature=637a0bcc65af017e2a85487342d2d0306a455c871c2cc753a230eef9287cf7e3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQ3CWAH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIArDJW7Dzl%2F7j8PBPeHM8ekz%2BHiNJSI9cTAKMdxFG4RTAiB4cvtLUDXhXc6oRMPZ7QflO9NaKL%2BOcRYtAb2vbpAfsyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSrD%2B%2BwCmHab4RhytKtwDzQulWrnFlvlxBm0ay2%2BUGwo%2F7YYXjwC%2F8Y9YmzIi3IuV44bBO1OcvqOoCOcCaQm9qf5hSObmXFYZiq5lMOx45nIm0jsOFoLCFrSzsM1yd7QwO3X7wVCb9K2OS97VOcXkoWSFr4PTSvY9tyWtt8jxC6NLQmWkLxkGZCrtyjEORXFFJMjoZW%2BcfyvDVqV41l6yOcfb1qNo6jbCWnj10%2BIAazvd6bvnK43CsW36y069K%2FBKFSpH1JVPFniGpx7Vb7lv9KDjzakzaHSMIl2XSzo55GChGXF216gEcoFUwnPCveQwHOYbBsQxflAgR55q%2FFP93nrFFAbXRd8P4Ehz5kcfPUt0yj5%2FoFqrtNo4gL4OjyWU0wneiaCNsLgT529asu%2Bdb1qHwuoBo8ydLuBhkkp5M9FbZuxYYMMOzq0ReCqcd3wv91CQHxoiKQ0AncyIrnNH4yDSFOiI8ud4WaPgLBuDpKB%2BYyRkONkq19aeZ26ArNIu%2FN0eMS%2BTT%2BguGn%2FTASAiWR7vVy%2FQOJdIufCxZV8Qk58CvS39N4jq%2FMk%2FQqrwfPwDsI62lFTSuCoG1S9vXG8nl472EXDqzOHmoVeGtTp2VSXAHT871em0pNllIwmVQjQqlgkDIQ3FZrEhxdkwuPLOwAY6pgGB6yr73BFHmFiTu0aATPwzuCgzdyrd6O9C1sfGVKV66MW%2FMsK3uD%2BWzR8Qq7oEFq43oOtKDgmS8xcKZa5lX0UKub6WJlUF82uHjrOBJWeiAhoOZoOqKvi%2FLHBwcXdS9MyxYEVHaYcP0ctsdCKNETd%2FzyWuxLrs7713%2B4xWgIIhxgw8cKTZ8WyWQvLUu3gpjL3V90ORQrd32LOgt%2BgvpVj7cyBv0k3k&X-Amz-Signature=da0a211b5fc34e61bb2aed679790784d2e8eac5bd24dc5cc88f366583a64ddd4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQ3CWAH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIArDJW7Dzl%2F7j8PBPeHM8ekz%2BHiNJSI9cTAKMdxFG4RTAiB4cvtLUDXhXc6oRMPZ7QflO9NaKL%2BOcRYtAb2vbpAfsyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSrD%2B%2BwCmHab4RhytKtwDzQulWrnFlvlxBm0ay2%2BUGwo%2F7YYXjwC%2F8Y9YmzIi3IuV44bBO1OcvqOoCOcCaQm9qf5hSObmXFYZiq5lMOx45nIm0jsOFoLCFrSzsM1yd7QwO3X7wVCb9K2OS97VOcXkoWSFr4PTSvY9tyWtt8jxC6NLQmWkLxkGZCrtyjEORXFFJMjoZW%2BcfyvDVqV41l6yOcfb1qNo6jbCWnj10%2BIAazvd6bvnK43CsW36y069K%2FBKFSpH1JVPFniGpx7Vb7lv9KDjzakzaHSMIl2XSzo55GChGXF216gEcoFUwnPCveQwHOYbBsQxflAgR55q%2FFP93nrFFAbXRd8P4Ehz5kcfPUt0yj5%2FoFqrtNo4gL4OjyWU0wneiaCNsLgT529asu%2Bdb1qHwuoBo8ydLuBhkkp5M9FbZuxYYMMOzq0ReCqcd3wv91CQHxoiKQ0AncyIrnNH4yDSFOiI8ud4WaPgLBuDpKB%2BYyRkONkq19aeZ26ArNIu%2FN0eMS%2BTT%2BguGn%2FTASAiWR7vVy%2FQOJdIufCxZV8Qk58CvS39N4jq%2FMk%2FQqrwfPwDsI62lFTSuCoG1S9vXG8nl472EXDqzOHmoVeGtTp2VSXAHT871em0pNllIwmVQjQqlgkDIQ3FZrEhxdkwuPLOwAY6pgGB6yr73BFHmFiTu0aATPwzuCgzdyrd6O9C1sfGVKV66MW%2FMsK3uD%2BWzR8Qq7oEFq43oOtKDgmS8xcKZa5lX0UKub6WJlUF82uHjrOBJWeiAhoOZoOqKvi%2FLHBwcXdS9MyxYEVHaYcP0ctsdCKNETd%2FzyWuxLrs7713%2B4xWgIIhxgw8cKTZ8WyWQvLUu3gpjL3V90ORQrd32LOgt%2BgvpVj7cyBv0k3k&X-Amz-Signature=d67fc8fc4e4a1aa5fd0f1613ef265f0ccc74d52c8c77c1aeba373c650eba522a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQ3CWAH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIArDJW7Dzl%2F7j8PBPeHM8ekz%2BHiNJSI9cTAKMdxFG4RTAiB4cvtLUDXhXc6oRMPZ7QflO9NaKL%2BOcRYtAb2vbpAfsyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSrD%2B%2BwCmHab4RhytKtwDzQulWrnFlvlxBm0ay2%2BUGwo%2F7YYXjwC%2F8Y9YmzIi3IuV44bBO1OcvqOoCOcCaQm9qf5hSObmXFYZiq5lMOx45nIm0jsOFoLCFrSzsM1yd7QwO3X7wVCb9K2OS97VOcXkoWSFr4PTSvY9tyWtt8jxC6NLQmWkLxkGZCrtyjEORXFFJMjoZW%2BcfyvDVqV41l6yOcfb1qNo6jbCWnj10%2BIAazvd6bvnK43CsW36y069K%2FBKFSpH1JVPFniGpx7Vb7lv9KDjzakzaHSMIl2XSzo55GChGXF216gEcoFUwnPCveQwHOYbBsQxflAgR55q%2FFP93nrFFAbXRd8P4Ehz5kcfPUt0yj5%2FoFqrtNo4gL4OjyWU0wneiaCNsLgT529asu%2Bdb1qHwuoBo8ydLuBhkkp5M9FbZuxYYMMOzq0ReCqcd3wv91CQHxoiKQ0AncyIrnNH4yDSFOiI8ud4WaPgLBuDpKB%2BYyRkONkq19aeZ26ArNIu%2FN0eMS%2BTT%2BguGn%2FTASAiWR7vVy%2FQOJdIufCxZV8Qk58CvS39N4jq%2FMk%2FQqrwfPwDsI62lFTSuCoG1S9vXG8nl472EXDqzOHmoVeGtTp2VSXAHT871em0pNllIwmVQjQqlgkDIQ3FZrEhxdkwuPLOwAY6pgGB6yr73BFHmFiTu0aATPwzuCgzdyrd6O9C1sfGVKV66MW%2FMsK3uD%2BWzR8Qq7oEFq43oOtKDgmS8xcKZa5lX0UKub6WJlUF82uHjrOBJWeiAhoOZoOqKvi%2FLHBwcXdS9MyxYEVHaYcP0ctsdCKNETd%2FzyWuxLrs7713%2B4xWgIIhxgw8cKTZ8WyWQvLUu3gpjL3V90ORQrd32LOgt%2BgvpVj7cyBv0k3k&X-Amz-Signature=63d2f40ec2f3cf0fb3d662d04744444c61b0e9bc9b636e07d003613b09e5e5d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQ3CWAH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIArDJW7Dzl%2F7j8PBPeHM8ekz%2BHiNJSI9cTAKMdxFG4RTAiB4cvtLUDXhXc6oRMPZ7QflO9NaKL%2BOcRYtAb2vbpAfsyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSrD%2B%2BwCmHab4RhytKtwDzQulWrnFlvlxBm0ay2%2BUGwo%2F7YYXjwC%2F8Y9YmzIi3IuV44bBO1OcvqOoCOcCaQm9qf5hSObmXFYZiq5lMOx45nIm0jsOFoLCFrSzsM1yd7QwO3X7wVCb9K2OS97VOcXkoWSFr4PTSvY9tyWtt8jxC6NLQmWkLxkGZCrtyjEORXFFJMjoZW%2BcfyvDVqV41l6yOcfb1qNo6jbCWnj10%2BIAazvd6bvnK43CsW36y069K%2FBKFSpH1JVPFniGpx7Vb7lv9KDjzakzaHSMIl2XSzo55GChGXF216gEcoFUwnPCveQwHOYbBsQxflAgR55q%2FFP93nrFFAbXRd8P4Ehz5kcfPUt0yj5%2FoFqrtNo4gL4OjyWU0wneiaCNsLgT529asu%2Bdb1qHwuoBo8ydLuBhkkp5M9FbZuxYYMMOzq0ReCqcd3wv91CQHxoiKQ0AncyIrnNH4yDSFOiI8ud4WaPgLBuDpKB%2BYyRkONkq19aeZ26ArNIu%2FN0eMS%2BTT%2BguGn%2FTASAiWR7vVy%2FQOJdIufCxZV8Qk58CvS39N4jq%2FMk%2FQqrwfPwDsI62lFTSuCoG1S9vXG8nl472EXDqzOHmoVeGtTp2VSXAHT871em0pNllIwmVQjQqlgkDIQ3FZrEhxdkwuPLOwAY6pgGB6yr73BFHmFiTu0aATPwzuCgzdyrd6O9C1sfGVKV66MW%2FMsK3uD%2BWzR8Qq7oEFq43oOtKDgmS8xcKZa5lX0UKub6WJlUF82uHjrOBJWeiAhoOZoOqKvi%2FLHBwcXdS9MyxYEVHaYcP0ctsdCKNETd%2FzyWuxLrs7713%2B4xWgIIhxgw8cKTZ8WyWQvLUu3gpjL3V90ORQrd32LOgt%2BgvpVj7cyBv0k3k&X-Amz-Signature=71ef7c65b8f4f3dbb234ce602436d1676e8faf8ce301ba0901bc397915e7b51f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQ3CWAH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIArDJW7Dzl%2F7j8PBPeHM8ekz%2BHiNJSI9cTAKMdxFG4RTAiB4cvtLUDXhXc6oRMPZ7QflO9NaKL%2BOcRYtAb2vbpAfsyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSrD%2B%2BwCmHab4RhytKtwDzQulWrnFlvlxBm0ay2%2BUGwo%2F7YYXjwC%2F8Y9YmzIi3IuV44bBO1OcvqOoCOcCaQm9qf5hSObmXFYZiq5lMOx45nIm0jsOFoLCFrSzsM1yd7QwO3X7wVCb9K2OS97VOcXkoWSFr4PTSvY9tyWtt8jxC6NLQmWkLxkGZCrtyjEORXFFJMjoZW%2BcfyvDVqV41l6yOcfb1qNo6jbCWnj10%2BIAazvd6bvnK43CsW36y069K%2FBKFSpH1JVPFniGpx7Vb7lv9KDjzakzaHSMIl2XSzo55GChGXF216gEcoFUwnPCveQwHOYbBsQxflAgR55q%2FFP93nrFFAbXRd8P4Ehz5kcfPUt0yj5%2FoFqrtNo4gL4OjyWU0wneiaCNsLgT529asu%2Bdb1qHwuoBo8ydLuBhkkp5M9FbZuxYYMMOzq0ReCqcd3wv91CQHxoiKQ0AncyIrnNH4yDSFOiI8ud4WaPgLBuDpKB%2BYyRkONkq19aeZ26ArNIu%2FN0eMS%2BTT%2BguGn%2FTASAiWR7vVy%2FQOJdIufCxZV8Qk58CvS39N4jq%2FMk%2FQqrwfPwDsI62lFTSuCoG1S9vXG8nl472EXDqzOHmoVeGtTp2VSXAHT871em0pNllIwmVQjQqlgkDIQ3FZrEhxdkwuPLOwAY6pgGB6yr73BFHmFiTu0aATPwzuCgzdyrd6O9C1sfGVKV66MW%2FMsK3uD%2BWzR8Qq7oEFq43oOtKDgmS8xcKZa5lX0UKub6WJlUF82uHjrOBJWeiAhoOZoOqKvi%2FLHBwcXdS9MyxYEVHaYcP0ctsdCKNETd%2FzyWuxLrs7713%2B4xWgIIhxgw8cKTZ8WyWQvLUu3gpjL3V90ORQrd32LOgt%2BgvpVj7cyBv0k3k&X-Amz-Signature=d7909bcdabf2267b358a72fd23641e05e75aee45f3f5273faf4f9c0716f719a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQ3CWAH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIArDJW7Dzl%2F7j8PBPeHM8ekz%2BHiNJSI9cTAKMdxFG4RTAiB4cvtLUDXhXc6oRMPZ7QflO9NaKL%2BOcRYtAb2vbpAfsyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSrD%2B%2BwCmHab4RhytKtwDzQulWrnFlvlxBm0ay2%2BUGwo%2F7YYXjwC%2F8Y9YmzIi3IuV44bBO1OcvqOoCOcCaQm9qf5hSObmXFYZiq5lMOx45nIm0jsOFoLCFrSzsM1yd7QwO3X7wVCb9K2OS97VOcXkoWSFr4PTSvY9tyWtt8jxC6NLQmWkLxkGZCrtyjEORXFFJMjoZW%2BcfyvDVqV41l6yOcfb1qNo6jbCWnj10%2BIAazvd6bvnK43CsW36y069K%2FBKFSpH1JVPFniGpx7Vb7lv9KDjzakzaHSMIl2XSzo55GChGXF216gEcoFUwnPCveQwHOYbBsQxflAgR55q%2FFP93nrFFAbXRd8P4Ehz5kcfPUt0yj5%2FoFqrtNo4gL4OjyWU0wneiaCNsLgT529asu%2Bdb1qHwuoBo8ydLuBhkkp5M9FbZuxYYMMOzq0ReCqcd3wv91CQHxoiKQ0AncyIrnNH4yDSFOiI8ud4WaPgLBuDpKB%2BYyRkONkq19aeZ26ArNIu%2FN0eMS%2BTT%2BguGn%2FTASAiWR7vVy%2FQOJdIufCxZV8Qk58CvS39N4jq%2FMk%2FQqrwfPwDsI62lFTSuCoG1S9vXG8nl472EXDqzOHmoVeGtTp2VSXAHT871em0pNllIwmVQjQqlgkDIQ3FZrEhxdkwuPLOwAY6pgGB6yr73BFHmFiTu0aATPwzuCgzdyrd6O9C1sfGVKV66MW%2FMsK3uD%2BWzR8Qq7oEFq43oOtKDgmS8xcKZa5lX0UKub6WJlUF82uHjrOBJWeiAhoOZoOqKvi%2FLHBwcXdS9MyxYEVHaYcP0ctsdCKNETd%2FzyWuxLrs7713%2B4xWgIIhxgw8cKTZ8WyWQvLUu3gpjL3V90ORQrd32LOgt%2BgvpVj7cyBv0k3k&X-Amz-Signature=30f90ffd1456e4e237a7c1029f65369ddddacb9e9fe4c9f53fe7f03d928e3a63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
