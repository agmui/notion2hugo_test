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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M4RDOAF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRemUTtGBWB%2FeOl4VrIvuPSPSfSRQdMPesBfj%2FzMbFAIhAJLLDCw9mW4%2Ff90kIfbTO%2FUhJblw0wxyfImBo2WMUe3zKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIpHOj0RtwD0mpN2Aq3ANGuDyx7xRDTvv%2BxDkiD38eXUicNt%2Bue%2FStdWLgYM9fhfwgOjsyFfr6nrGrV6USecsuzZ8CC23bQrTKLtPw9cpsjmW0ouF7vhavjcz6zsxnmnbdhkSa9oZA9boq8aCyaPcvyCt5B%2BYDAklU1pNpMo8Ue8yP1X5QEaVovwvc%2FakJA1Al8KwJhoadChpuCeQP3Ce4CeA5sNPEyPTY6lsPngsjFyy3o8P9jciF97wvBTGUK5j0siHEZ3uYQXMPCZNLz%2FtNU9HJiU%2FvlMAHy9PCyCzmOUeauPxNKPd2%2BvshHqk%2BCq10nJ5ddjbydc1bl0uiyFVk1Ci1Ld1vtxFmTn6DjtCRU0zmJTpiFQlv%2Fp4AGpyCah7KCxMk8EHEzvbECetZowmKrSbjbIgTzUecXRkZEvFNvoAk37BYkKW0J1F%2Fg52YBJItEfK9yEle8%2BtM5eIEQGyrUcgmFPXjACGYboQrlDpMkoMbhrpvBVfQA%2BXFUnmxOatJRQAqId540bE19TLbQqaCswATDEhvVVfZld8yxJQg9HhB%2FRIJCId322qflTV5vTB49W%2BkAhqubicKeg%2BnUTcrKTO1%2FgFYpBlBrNQzL%2BEDUSPTBamMYRhhvZclg45YjaVgCUTNfgRQT0PfoDCVpNXCBjqkAWp5OnsBS5IceXN7bilFjgktVgM0Ni8nSxPpZrJJM43Hf0FneaXfGblddlYROM6hf6IVt%2Fx5urjok5YLuIeg7AnrMepzbrWRVr440IMNxWeL6d3f4bE8lVEavszFcpcJ3%2FMrXwA%2B9Xr8gO4X2OaNiq5z%2Ft2skDWwSTghLYjM0zA1sRlUQXQ3U9QgXTE5u660aSiUb9PJbDIkokjxuMXsDd16mmL6&X-Amz-Signature=f3fa763354695af466ab4d3a832b773fb59ef7f89b1fcf9fbcf046e9c15a098a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M4RDOAF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRemUTtGBWB%2FeOl4VrIvuPSPSfSRQdMPesBfj%2FzMbFAIhAJLLDCw9mW4%2Ff90kIfbTO%2FUhJblw0wxyfImBo2WMUe3zKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIpHOj0RtwD0mpN2Aq3ANGuDyx7xRDTvv%2BxDkiD38eXUicNt%2Bue%2FStdWLgYM9fhfwgOjsyFfr6nrGrV6USecsuzZ8CC23bQrTKLtPw9cpsjmW0ouF7vhavjcz6zsxnmnbdhkSa9oZA9boq8aCyaPcvyCt5B%2BYDAklU1pNpMo8Ue8yP1X5QEaVovwvc%2FakJA1Al8KwJhoadChpuCeQP3Ce4CeA5sNPEyPTY6lsPngsjFyy3o8P9jciF97wvBTGUK5j0siHEZ3uYQXMPCZNLz%2FtNU9HJiU%2FvlMAHy9PCyCzmOUeauPxNKPd2%2BvshHqk%2BCq10nJ5ddjbydc1bl0uiyFVk1Ci1Ld1vtxFmTn6DjtCRU0zmJTpiFQlv%2Fp4AGpyCah7KCxMk8EHEzvbECetZowmKrSbjbIgTzUecXRkZEvFNvoAk37BYkKW0J1F%2Fg52YBJItEfK9yEle8%2BtM5eIEQGyrUcgmFPXjACGYboQrlDpMkoMbhrpvBVfQA%2BXFUnmxOatJRQAqId540bE19TLbQqaCswATDEhvVVfZld8yxJQg9HhB%2FRIJCId322qflTV5vTB49W%2BkAhqubicKeg%2BnUTcrKTO1%2FgFYpBlBrNQzL%2BEDUSPTBamMYRhhvZclg45YjaVgCUTNfgRQT0PfoDCVpNXCBjqkAWp5OnsBS5IceXN7bilFjgktVgM0Ni8nSxPpZrJJM43Hf0FneaXfGblddlYROM6hf6IVt%2Fx5urjok5YLuIeg7AnrMepzbrWRVr440IMNxWeL6d3f4bE8lVEavszFcpcJ3%2FMrXwA%2B9Xr8gO4X2OaNiq5z%2Ft2skDWwSTghLYjM0zA1sRlUQXQ3U9QgXTE5u660aSiUb9PJbDIkokjxuMXsDd16mmL6&X-Amz-Signature=d050d199d7860387407f6cf6cd154c2f3f16df7e266723a3f4c3ddf7970293e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M4RDOAF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRemUTtGBWB%2FeOl4VrIvuPSPSfSRQdMPesBfj%2FzMbFAIhAJLLDCw9mW4%2Ff90kIfbTO%2FUhJblw0wxyfImBo2WMUe3zKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIpHOj0RtwD0mpN2Aq3ANGuDyx7xRDTvv%2BxDkiD38eXUicNt%2Bue%2FStdWLgYM9fhfwgOjsyFfr6nrGrV6USecsuzZ8CC23bQrTKLtPw9cpsjmW0ouF7vhavjcz6zsxnmnbdhkSa9oZA9boq8aCyaPcvyCt5B%2BYDAklU1pNpMo8Ue8yP1X5QEaVovwvc%2FakJA1Al8KwJhoadChpuCeQP3Ce4CeA5sNPEyPTY6lsPngsjFyy3o8P9jciF97wvBTGUK5j0siHEZ3uYQXMPCZNLz%2FtNU9HJiU%2FvlMAHy9PCyCzmOUeauPxNKPd2%2BvshHqk%2BCq10nJ5ddjbydc1bl0uiyFVk1Ci1Ld1vtxFmTn6DjtCRU0zmJTpiFQlv%2Fp4AGpyCah7KCxMk8EHEzvbECetZowmKrSbjbIgTzUecXRkZEvFNvoAk37BYkKW0J1F%2Fg52YBJItEfK9yEle8%2BtM5eIEQGyrUcgmFPXjACGYboQrlDpMkoMbhrpvBVfQA%2BXFUnmxOatJRQAqId540bE19TLbQqaCswATDEhvVVfZld8yxJQg9HhB%2FRIJCId322qflTV5vTB49W%2BkAhqubicKeg%2BnUTcrKTO1%2FgFYpBlBrNQzL%2BEDUSPTBamMYRhhvZclg45YjaVgCUTNfgRQT0PfoDCVpNXCBjqkAWp5OnsBS5IceXN7bilFjgktVgM0Ni8nSxPpZrJJM43Hf0FneaXfGblddlYROM6hf6IVt%2Fx5urjok5YLuIeg7AnrMepzbrWRVr440IMNxWeL6d3f4bE8lVEavszFcpcJ3%2FMrXwA%2B9Xr8gO4X2OaNiq5z%2Ft2skDWwSTghLYjM0zA1sRlUQXQ3U9QgXTE5u660aSiUb9PJbDIkokjxuMXsDd16mmL6&X-Amz-Signature=683fa5873f68f1479ff4aeb1f921f4e4705a4b5c410fbee0c46f810fff6d78f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M4RDOAF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRemUTtGBWB%2FeOl4VrIvuPSPSfSRQdMPesBfj%2FzMbFAIhAJLLDCw9mW4%2Ff90kIfbTO%2FUhJblw0wxyfImBo2WMUe3zKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIpHOj0RtwD0mpN2Aq3ANGuDyx7xRDTvv%2BxDkiD38eXUicNt%2Bue%2FStdWLgYM9fhfwgOjsyFfr6nrGrV6USecsuzZ8CC23bQrTKLtPw9cpsjmW0ouF7vhavjcz6zsxnmnbdhkSa9oZA9boq8aCyaPcvyCt5B%2BYDAklU1pNpMo8Ue8yP1X5QEaVovwvc%2FakJA1Al8KwJhoadChpuCeQP3Ce4CeA5sNPEyPTY6lsPngsjFyy3o8P9jciF97wvBTGUK5j0siHEZ3uYQXMPCZNLz%2FtNU9HJiU%2FvlMAHy9PCyCzmOUeauPxNKPd2%2BvshHqk%2BCq10nJ5ddjbydc1bl0uiyFVk1Ci1Ld1vtxFmTn6DjtCRU0zmJTpiFQlv%2Fp4AGpyCah7KCxMk8EHEzvbECetZowmKrSbjbIgTzUecXRkZEvFNvoAk37BYkKW0J1F%2Fg52YBJItEfK9yEle8%2BtM5eIEQGyrUcgmFPXjACGYboQrlDpMkoMbhrpvBVfQA%2BXFUnmxOatJRQAqId540bE19TLbQqaCswATDEhvVVfZld8yxJQg9HhB%2FRIJCId322qflTV5vTB49W%2BkAhqubicKeg%2BnUTcrKTO1%2FgFYpBlBrNQzL%2BEDUSPTBamMYRhhvZclg45YjaVgCUTNfgRQT0PfoDCVpNXCBjqkAWp5OnsBS5IceXN7bilFjgktVgM0Ni8nSxPpZrJJM43Hf0FneaXfGblddlYROM6hf6IVt%2Fx5urjok5YLuIeg7AnrMepzbrWRVr440IMNxWeL6d3f4bE8lVEavszFcpcJ3%2FMrXwA%2B9Xr8gO4X2OaNiq5z%2Ft2skDWwSTghLYjM0zA1sRlUQXQ3U9QgXTE5u660aSiUb9PJbDIkokjxuMXsDd16mmL6&X-Amz-Signature=35ddb917bd54b5191228531b715093a8940d715c3662a3edec49e40f62319fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M4RDOAF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRemUTtGBWB%2FeOl4VrIvuPSPSfSRQdMPesBfj%2FzMbFAIhAJLLDCw9mW4%2Ff90kIfbTO%2FUhJblw0wxyfImBo2WMUe3zKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIpHOj0RtwD0mpN2Aq3ANGuDyx7xRDTvv%2BxDkiD38eXUicNt%2Bue%2FStdWLgYM9fhfwgOjsyFfr6nrGrV6USecsuzZ8CC23bQrTKLtPw9cpsjmW0ouF7vhavjcz6zsxnmnbdhkSa9oZA9boq8aCyaPcvyCt5B%2BYDAklU1pNpMo8Ue8yP1X5QEaVovwvc%2FakJA1Al8KwJhoadChpuCeQP3Ce4CeA5sNPEyPTY6lsPngsjFyy3o8P9jciF97wvBTGUK5j0siHEZ3uYQXMPCZNLz%2FtNU9HJiU%2FvlMAHy9PCyCzmOUeauPxNKPd2%2BvshHqk%2BCq10nJ5ddjbydc1bl0uiyFVk1Ci1Ld1vtxFmTn6DjtCRU0zmJTpiFQlv%2Fp4AGpyCah7KCxMk8EHEzvbECetZowmKrSbjbIgTzUecXRkZEvFNvoAk37BYkKW0J1F%2Fg52YBJItEfK9yEle8%2BtM5eIEQGyrUcgmFPXjACGYboQrlDpMkoMbhrpvBVfQA%2BXFUnmxOatJRQAqId540bE19TLbQqaCswATDEhvVVfZld8yxJQg9HhB%2FRIJCId322qflTV5vTB49W%2BkAhqubicKeg%2BnUTcrKTO1%2FgFYpBlBrNQzL%2BEDUSPTBamMYRhhvZclg45YjaVgCUTNfgRQT0PfoDCVpNXCBjqkAWp5OnsBS5IceXN7bilFjgktVgM0Ni8nSxPpZrJJM43Hf0FneaXfGblddlYROM6hf6IVt%2Fx5urjok5YLuIeg7AnrMepzbrWRVr440IMNxWeL6d3f4bE8lVEavszFcpcJ3%2FMrXwA%2B9Xr8gO4X2OaNiq5z%2Ft2skDWwSTghLYjM0zA1sRlUQXQ3U9QgXTE5u660aSiUb9PJbDIkokjxuMXsDd16mmL6&X-Amz-Signature=4c207d3ecbc5f21bb03351467edb414f62529bdddf48f3049a9cac7486405aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M4RDOAF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRemUTtGBWB%2FeOl4VrIvuPSPSfSRQdMPesBfj%2FzMbFAIhAJLLDCw9mW4%2Ff90kIfbTO%2FUhJblw0wxyfImBo2WMUe3zKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIpHOj0RtwD0mpN2Aq3ANGuDyx7xRDTvv%2BxDkiD38eXUicNt%2Bue%2FStdWLgYM9fhfwgOjsyFfr6nrGrV6USecsuzZ8CC23bQrTKLtPw9cpsjmW0ouF7vhavjcz6zsxnmnbdhkSa9oZA9boq8aCyaPcvyCt5B%2BYDAklU1pNpMo8Ue8yP1X5QEaVovwvc%2FakJA1Al8KwJhoadChpuCeQP3Ce4CeA5sNPEyPTY6lsPngsjFyy3o8P9jciF97wvBTGUK5j0siHEZ3uYQXMPCZNLz%2FtNU9HJiU%2FvlMAHy9PCyCzmOUeauPxNKPd2%2BvshHqk%2BCq10nJ5ddjbydc1bl0uiyFVk1Ci1Ld1vtxFmTn6DjtCRU0zmJTpiFQlv%2Fp4AGpyCah7KCxMk8EHEzvbECetZowmKrSbjbIgTzUecXRkZEvFNvoAk37BYkKW0J1F%2Fg52YBJItEfK9yEle8%2BtM5eIEQGyrUcgmFPXjACGYboQrlDpMkoMbhrpvBVfQA%2BXFUnmxOatJRQAqId540bE19TLbQqaCswATDEhvVVfZld8yxJQg9HhB%2FRIJCId322qflTV5vTB49W%2BkAhqubicKeg%2BnUTcrKTO1%2FgFYpBlBrNQzL%2BEDUSPTBamMYRhhvZclg45YjaVgCUTNfgRQT0PfoDCVpNXCBjqkAWp5OnsBS5IceXN7bilFjgktVgM0Ni8nSxPpZrJJM43Hf0FneaXfGblddlYROM6hf6IVt%2Fx5urjok5YLuIeg7AnrMepzbrWRVr440IMNxWeL6d3f4bE8lVEavszFcpcJ3%2FMrXwA%2B9Xr8gO4X2OaNiq5z%2Ft2skDWwSTghLYjM0zA1sRlUQXQ3U9QgXTE5u660aSiUb9PJbDIkokjxuMXsDd16mmL6&X-Amz-Signature=ccddec3a76096daa832b739cdd9030382dc34d95180ff06c609be7b93ecc4e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M4RDOAF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRemUTtGBWB%2FeOl4VrIvuPSPSfSRQdMPesBfj%2FzMbFAIhAJLLDCw9mW4%2Ff90kIfbTO%2FUhJblw0wxyfImBo2WMUe3zKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIpHOj0RtwD0mpN2Aq3ANGuDyx7xRDTvv%2BxDkiD38eXUicNt%2Bue%2FStdWLgYM9fhfwgOjsyFfr6nrGrV6USecsuzZ8CC23bQrTKLtPw9cpsjmW0ouF7vhavjcz6zsxnmnbdhkSa9oZA9boq8aCyaPcvyCt5B%2BYDAklU1pNpMo8Ue8yP1X5QEaVovwvc%2FakJA1Al8KwJhoadChpuCeQP3Ce4CeA5sNPEyPTY6lsPngsjFyy3o8P9jciF97wvBTGUK5j0siHEZ3uYQXMPCZNLz%2FtNU9HJiU%2FvlMAHy9PCyCzmOUeauPxNKPd2%2BvshHqk%2BCq10nJ5ddjbydc1bl0uiyFVk1Ci1Ld1vtxFmTn6DjtCRU0zmJTpiFQlv%2Fp4AGpyCah7KCxMk8EHEzvbECetZowmKrSbjbIgTzUecXRkZEvFNvoAk37BYkKW0J1F%2Fg52YBJItEfK9yEle8%2BtM5eIEQGyrUcgmFPXjACGYboQrlDpMkoMbhrpvBVfQA%2BXFUnmxOatJRQAqId540bE19TLbQqaCswATDEhvVVfZld8yxJQg9HhB%2FRIJCId322qflTV5vTB49W%2BkAhqubicKeg%2BnUTcrKTO1%2FgFYpBlBrNQzL%2BEDUSPTBamMYRhhvZclg45YjaVgCUTNfgRQT0PfoDCVpNXCBjqkAWp5OnsBS5IceXN7bilFjgktVgM0Ni8nSxPpZrJJM43Hf0FneaXfGblddlYROM6hf6IVt%2Fx5urjok5YLuIeg7AnrMepzbrWRVr440IMNxWeL6d3f4bE8lVEavszFcpcJ3%2FMrXwA%2B9Xr8gO4X2OaNiq5z%2Ft2skDWwSTghLYjM0zA1sRlUQXQ3U9QgXTE5u660aSiUb9PJbDIkokjxuMXsDd16mmL6&X-Amz-Signature=88b39a5a8ce056100935a60b54cb15816a01c35397107ed16493c8c37742444a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M4RDOAF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRemUTtGBWB%2FeOl4VrIvuPSPSfSRQdMPesBfj%2FzMbFAIhAJLLDCw9mW4%2Ff90kIfbTO%2FUhJblw0wxyfImBo2WMUe3zKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIpHOj0RtwD0mpN2Aq3ANGuDyx7xRDTvv%2BxDkiD38eXUicNt%2Bue%2FStdWLgYM9fhfwgOjsyFfr6nrGrV6USecsuzZ8CC23bQrTKLtPw9cpsjmW0ouF7vhavjcz6zsxnmnbdhkSa9oZA9boq8aCyaPcvyCt5B%2BYDAklU1pNpMo8Ue8yP1X5QEaVovwvc%2FakJA1Al8KwJhoadChpuCeQP3Ce4CeA5sNPEyPTY6lsPngsjFyy3o8P9jciF97wvBTGUK5j0siHEZ3uYQXMPCZNLz%2FtNU9HJiU%2FvlMAHy9PCyCzmOUeauPxNKPd2%2BvshHqk%2BCq10nJ5ddjbydc1bl0uiyFVk1Ci1Ld1vtxFmTn6DjtCRU0zmJTpiFQlv%2Fp4AGpyCah7KCxMk8EHEzvbECetZowmKrSbjbIgTzUecXRkZEvFNvoAk37BYkKW0J1F%2Fg52YBJItEfK9yEle8%2BtM5eIEQGyrUcgmFPXjACGYboQrlDpMkoMbhrpvBVfQA%2BXFUnmxOatJRQAqId540bE19TLbQqaCswATDEhvVVfZld8yxJQg9HhB%2FRIJCId322qflTV5vTB49W%2BkAhqubicKeg%2BnUTcrKTO1%2FgFYpBlBrNQzL%2BEDUSPTBamMYRhhvZclg45YjaVgCUTNfgRQT0PfoDCVpNXCBjqkAWp5OnsBS5IceXN7bilFjgktVgM0Ni8nSxPpZrJJM43Hf0FneaXfGblddlYROM6hf6IVt%2Fx5urjok5YLuIeg7AnrMepzbrWRVr440IMNxWeL6d3f4bE8lVEavszFcpcJ3%2FMrXwA%2B9Xr8gO4X2OaNiq5z%2Ft2skDWwSTghLYjM0zA1sRlUQXQ3U9QgXTE5u660aSiUb9PJbDIkokjxuMXsDd16mmL6&X-Amz-Signature=e6157a952223183803505105f9e09a1ea6648037454e801d4b7d3bac309ba387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
