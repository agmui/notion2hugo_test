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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLYETZF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArLYwtA6wCa%2FOaNMTjjJp3Mk4H5WJFqVxhGDZ2Gg%2F%2BnAiEAkrIdPK7Fhn%2Byjv47HA53jmu7WEc1CckyZjsXjZqYS%2FMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2B1sFNiD4LcLhiKqircA3tPRafkiU9x0o0dec58Nu5GEaM1AVYIuDorVcKzAKO%2Bv3p0LRkeF316HGQG09tiHv84hGkUiqzaoYG54pHcX5veVl%2BW5pUt3HQWA5viAmH9T4bnLH%2F%2BOi21QJN0KOgujh42sEAki8b1MntgH7nDPOuc%2FO%2BXIuOXqbrcR%2BnGEL30D%2BydzDVD%2BaD%2FTgCrjpJ9JUTuf9hfSEkt4kS1oSbxzBLMVu%2B%2Bi%2Bgfo44miwX1QjFPLjwe6IvzghkgtiHib0SvB3maJTG4ujYED8Y14cVuk6OarOsCl%2BPxWNa4d4Kl6NkwafczvFi7vkCoZp5UwSMpAWPvWdUEO%2BVP4L7MNsdU0LsRdH%2FT25lQVPZ7zAyJSR04D4H5nD21tJQ4yZ30wcQER86n%2Fgo6cut86aCbtOczpg42HPP8DVzo0RO4KDUkj0odAvqXPXlR%2Bxk5%2BlCgoXwSz3ZzugocFIRuMNAlPrGc89Np73uNbDXZhOU5zmX%2BXwahYRAJ4BJSaBHJJ5gb5EUa%2BUTfEMKpcluhNpVPl%2BqVHxhqQch%2Fiz3%2FRYvoihhVgIg48P%2F4lbNqEl%2FmYIE9Hw6x%2FoBJ1x775utfhXUIukatQOaFxDQhSOSAoINVtIKiI0Nq5F0lOmcyAMzOcjekMMOlj8MGOqUB4kzmVuYdgBKfUElt7uKFC%2BGTXzaVOhnH77hZ%2BaJRe1fLokgFEQWyywFI5poOlGwJ624nShD1VXKctG%2FVFhEj%2B9QlpX3J5ZYRtk7LxDR7HWe7Le%2BMjdwh2K1E3%2F6gZ%2Fv45fvO46W4TqEKT4hyRYXo3fhljpF4j%2FwLARwFPF7j0vgHtSIcrPi65Do3QNxCDDszWOU9yUZVEXzMEkUy4JrXoJLsG3eM&X-Amz-Signature=45e23e9b79f2fa0a019e3ef08d6d48542ce1b17be424e84022854c38e34cb7cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLYETZF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArLYwtA6wCa%2FOaNMTjjJp3Mk4H5WJFqVxhGDZ2Gg%2F%2BnAiEAkrIdPK7Fhn%2Byjv47HA53jmu7WEc1CckyZjsXjZqYS%2FMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2B1sFNiD4LcLhiKqircA3tPRafkiU9x0o0dec58Nu5GEaM1AVYIuDorVcKzAKO%2Bv3p0LRkeF316HGQG09tiHv84hGkUiqzaoYG54pHcX5veVl%2BW5pUt3HQWA5viAmH9T4bnLH%2F%2BOi21QJN0KOgujh42sEAki8b1MntgH7nDPOuc%2FO%2BXIuOXqbrcR%2BnGEL30D%2BydzDVD%2BaD%2FTgCrjpJ9JUTuf9hfSEkt4kS1oSbxzBLMVu%2B%2Bi%2Bgfo44miwX1QjFPLjwe6IvzghkgtiHib0SvB3maJTG4ujYED8Y14cVuk6OarOsCl%2BPxWNa4d4Kl6NkwafczvFi7vkCoZp5UwSMpAWPvWdUEO%2BVP4L7MNsdU0LsRdH%2FT25lQVPZ7zAyJSR04D4H5nD21tJQ4yZ30wcQER86n%2Fgo6cut86aCbtOczpg42HPP8DVzo0RO4KDUkj0odAvqXPXlR%2Bxk5%2BlCgoXwSz3ZzugocFIRuMNAlPrGc89Np73uNbDXZhOU5zmX%2BXwahYRAJ4BJSaBHJJ5gb5EUa%2BUTfEMKpcluhNpVPl%2BqVHxhqQch%2Fiz3%2FRYvoihhVgIg48P%2F4lbNqEl%2FmYIE9Hw6x%2FoBJ1x775utfhXUIukatQOaFxDQhSOSAoINVtIKiI0Nq5F0lOmcyAMzOcjekMMOlj8MGOqUB4kzmVuYdgBKfUElt7uKFC%2BGTXzaVOhnH77hZ%2BaJRe1fLokgFEQWyywFI5poOlGwJ624nShD1VXKctG%2FVFhEj%2B9QlpX3J5ZYRtk7LxDR7HWe7Le%2BMjdwh2K1E3%2F6gZ%2Fv45fvO46W4TqEKT4hyRYXo3fhljpF4j%2FwLARwFPF7j0vgHtSIcrPi65Do3QNxCDDszWOU9yUZVEXzMEkUy4JrXoJLsG3eM&X-Amz-Signature=f80e60aa2100755d5c37eba264f00461da17598b423a84590b828cb5d7ffe4ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLYETZF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArLYwtA6wCa%2FOaNMTjjJp3Mk4H5WJFqVxhGDZ2Gg%2F%2BnAiEAkrIdPK7Fhn%2Byjv47HA53jmu7WEc1CckyZjsXjZqYS%2FMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2B1sFNiD4LcLhiKqircA3tPRafkiU9x0o0dec58Nu5GEaM1AVYIuDorVcKzAKO%2Bv3p0LRkeF316HGQG09tiHv84hGkUiqzaoYG54pHcX5veVl%2BW5pUt3HQWA5viAmH9T4bnLH%2F%2BOi21QJN0KOgujh42sEAki8b1MntgH7nDPOuc%2FO%2BXIuOXqbrcR%2BnGEL30D%2BydzDVD%2BaD%2FTgCrjpJ9JUTuf9hfSEkt4kS1oSbxzBLMVu%2B%2Bi%2Bgfo44miwX1QjFPLjwe6IvzghkgtiHib0SvB3maJTG4ujYED8Y14cVuk6OarOsCl%2BPxWNa4d4Kl6NkwafczvFi7vkCoZp5UwSMpAWPvWdUEO%2BVP4L7MNsdU0LsRdH%2FT25lQVPZ7zAyJSR04D4H5nD21tJQ4yZ30wcQER86n%2Fgo6cut86aCbtOczpg42HPP8DVzo0RO4KDUkj0odAvqXPXlR%2Bxk5%2BlCgoXwSz3ZzugocFIRuMNAlPrGc89Np73uNbDXZhOU5zmX%2BXwahYRAJ4BJSaBHJJ5gb5EUa%2BUTfEMKpcluhNpVPl%2BqVHxhqQch%2Fiz3%2FRYvoihhVgIg48P%2F4lbNqEl%2FmYIE9Hw6x%2FoBJ1x775utfhXUIukatQOaFxDQhSOSAoINVtIKiI0Nq5F0lOmcyAMzOcjekMMOlj8MGOqUB4kzmVuYdgBKfUElt7uKFC%2BGTXzaVOhnH77hZ%2BaJRe1fLokgFEQWyywFI5poOlGwJ624nShD1VXKctG%2FVFhEj%2B9QlpX3J5ZYRtk7LxDR7HWe7Le%2BMjdwh2K1E3%2F6gZ%2Fv45fvO46W4TqEKT4hyRYXo3fhljpF4j%2FwLARwFPF7j0vgHtSIcrPi65Do3QNxCDDszWOU9yUZVEXzMEkUy4JrXoJLsG3eM&X-Amz-Signature=86200bedc7476765d5822bd82d9f5d5158c322eb073f57c657d0f19ba0ef41b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLYETZF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArLYwtA6wCa%2FOaNMTjjJp3Mk4H5WJFqVxhGDZ2Gg%2F%2BnAiEAkrIdPK7Fhn%2Byjv47HA53jmu7WEc1CckyZjsXjZqYS%2FMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2B1sFNiD4LcLhiKqircA3tPRafkiU9x0o0dec58Nu5GEaM1AVYIuDorVcKzAKO%2Bv3p0LRkeF316HGQG09tiHv84hGkUiqzaoYG54pHcX5veVl%2BW5pUt3HQWA5viAmH9T4bnLH%2F%2BOi21QJN0KOgujh42sEAki8b1MntgH7nDPOuc%2FO%2BXIuOXqbrcR%2BnGEL30D%2BydzDVD%2BaD%2FTgCrjpJ9JUTuf9hfSEkt4kS1oSbxzBLMVu%2B%2Bi%2Bgfo44miwX1QjFPLjwe6IvzghkgtiHib0SvB3maJTG4ujYED8Y14cVuk6OarOsCl%2BPxWNa4d4Kl6NkwafczvFi7vkCoZp5UwSMpAWPvWdUEO%2BVP4L7MNsdU0LsRdH%2FT25lQVPZ7zAyJSR04D4H5nD21tJQ4yZ30wcQER86n%2Fgo6cut86aCbtOczpg42HPP8DVzo0RO4KDUkj0odAvqXPXlR%2Bxk5%2BlCgoXwSz3ZzugocFIRuMNAlPrGc89Np73uNbDXZhOU5zmX%2BXwahYRAJ4BJSaBHJJ5gb5EUa%2BUTfEMKpcluhNpVPl%2BqVHxhqQch%2Fiz3%2FRYvoihhVgIg48P%2F4lbNqEl%2FmYIE9Hw6x%2FoBJ1x775utfhXUIukatQOaFxDQhSOSAoINVtIKiI0Nq5F0lOmcyAMzOcjekMMOlj8MGOqUB4kzmVuYdgBKfUElt7uKFC%2BGTXzaVOhnH77hZ%2BaJRe1fLokgFEQWyywFI5poOlGwJ624nShD1VXKctG%2FVFhEj%2B9QlpX3J5ZYRtk7LxDR7HWe7Le%2BMjdwh2K1E3%2F6gZ%2Fv45fvO46W4TqEKT4hyRYXo3fhljpF4j%2FwLARwFPF7j0vgHtSIcrPi65Do3QNxCDDszWOU9yUZVEXzMEkUy4JrXoJLsG3eM&X-Amz-Signature=74e1aa1cb89f895848b3fd71834fe2bc1615331d9e256e5f684fa830565c7750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLYETZF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArLYwtA6wCa%2FOaNMTjjJp3Mk4H5WJFqVxhGDZ2Gg%2F%2BnAiEAkrIdPK7Fhn%2Byjv47HA53jmu7WEc1CckyZjsXjZqYS%2FMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2B1sFNiD4LcLhiKqircA3tPRafkiU9x0o0dec58Nu5GEaM1AVYIuDorVcKzAKO%2Bv3p0LRkeF316HGQG09tiHv84hGkUiqzaoYG54pHcX5veVl%2BW5pUt3HQWA5viAmH9T4bnLH%2F%2BOi21QJN0KOgujh42sEAki8b1MntgH7nDPOuc%2FO%2BXIuOXqbrcR%2BnGEL30D%2BydzDVD%2BaD%2FTgCrjpJ9JUTuf9hfSEkt4kS1oSbxzBLMVu%2B%2Bi%2Bgfo44miwX1QjFPLjwe6IvzghkgtiHib0SvB3maJTG4ujYED8Y14cVuk6OarOsCl%2BPxWNa4d4Kl6NkwafczvFi7vkCoZp5UwSMpAWPvWdUEO%2BVP4L7MNsdU0LsRdH%2FT25lQVPZ7zAyJSR04D4H5nD21tJQ4yZ30wcQER86n%2Fgo6cut86aCbtOczpg42HPP8DVzo0RO4KDUkj0odAvqXPXlR%2Bxk5%2BlCgoXwSz3ZzugocFIRuMNAlPrGc89Np73uNbDXZhOU5zmX%2BXwahYRAJ4BJSaBHJJ5gb5EUa%2BUTfEMKpcluhNpVPl%2BqVHxhqQch%2Fiz3%2FRYvoihhVgIg48P%2F4lbNqEl%2FmYIE9Hw6x%2FoBJ1x775utfhXUIukatQOaFxDQhSOSAoINVtIKiI0Nq5F0lOmcyAMzOcjekMMOlj8MGOqUB4kzmVuYdgBKfUElt7uKFC%2BGTXzaVOhnH77hZ%2BaJRe1fLokgFEQWyywFI5poOlGwJ624nShD1VXKctG%2FVFhEj%2B9QlpX3J5ZYRtk7LxDR7HWe7Le%2BMjdwh2K1E3%2F6gZ%2Fv45fvO46W4TqEKT4hyRYXo3fhljpF4j%2FwLARwFPF7j0vgHtSIcrPi65Do3QNxCDDszWOU9yUZVEXzMEkUy4JrXoJLsG3eM&X-Amz-Signature=1f3db4defc247eb4586561fa9503eccb4e73b53aa9563888589800a7962e372c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLYETZF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArLYwtA6wCa%2FOaNMTjjJp3Mk4H5WJFqVxhGDZ2Gg%2F%2BnAiEAkrIdPK7Fhn%2Byjv47HA53jmu7WEc1CckyZjsXjZqYS%2FMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2B1sFNiD4LcLhiKqircA3tPRafkiU9x0o0dec58Nu5GEaM1AVYIuDorVcKzAKO%2Bv3p0LRkeF316HGQG09tiHv84hGkUiqzaoYG54pHcX5veVl%2BW5pUt3HQWA5viAmH9T4bnLH%2F%2BOi21QJN0KOgujh42sEAki8b1MntgH7nDPOuc%2FO%2BXIuOXqbrcR%2BnGEL30D%2BydzDVD%2BaD%2FTgCrjpJ9JUTuf9hfSEkt4kS1oSbxzBLMVu%2B%2Bi%2Bgfo44miwX1QjFPLjwe6IvzghkgtiHib0SvB3maJTG4ujYED8Y14cVuk6OarOsCl%2BPxWNa4d4Kl6NkwafczvFi7vkCoZp5UwSMpAWPvWdUEO%2BVP4L7MNsdU0LsRdH%2FT25lQVPZ7zAyJSR04D4H5nD21tJQ4yZ30wcQER86n%2Fgo6cut86aCbtOczpg42HPP8DVzo0RO4KDUkj0odAvqXPXlR%2Bxk5%2BlCgoXwSz3ZzugocFIRuMNAlPrGc89Np73uNbDXZhOU5zmX%2BXwahYRAJ4BJSaBHJJ5gb5EUa%2BUTfEMKpcluhNpVPl%2BqVHxhqQch%2Fiz3%2FRYvoihhVgIg48P%2F4lbNqEl%2FmYIE9Hw6x%2FoBJ1x775utfhXUIukatQOaFxDQhSOSAoINVtIKiI0Nq5F0lOmcyAMzOcjekMMOlj8MGOqUB4kzmVuYdgBKfUElt7uKFC%2BGTXzaVOhnH77hZ%2BaJRe1fLokgFEQWyywFI5poOlGwJ624nShD1VXKctG%2FVFhEj%2B9QlpX3J5ZYRtk7LxDR7HWe7Le%2BMjdwh2K1E3%2F6gZ%2Fv45fvO46W4TqEKT4hyRYXo3fhljpF4j%2FwLARwFPF7j0vgHtSIcrPi65Do3QNxCDDszWOU9yUZVEXzMEkUy4JrXoJLsG3eM&X-Amz-Signature=8c0d3815bebcfe87450332d3e647005dafb0c245bb99175bc8321e392808e0af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLYETZF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArLYwtA6wCa%2FOaNMTjjJp3Mk4H5WJFqVxhGDZ2Gg%2F%2BnAiEAkrIdPK7Fhn%2Byjv47HA53jmu7WEc1CckyZjsXjZqYS%2FMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2B1sFNiD4LcLhiKqircA3tPRafkiU9x0o0dec58Nu5GEaM1AVYIuDorVcKzAKO%2Bv3p0LRkeF316HGQG09tiHv84hGkUiqzaoYG54pHcX5veVl%2BW5pUt3HQWA5viAmH9T4bnLH%2F%2BOi21QJN0KOgujh42sEAki8b1MntgH7nDPOuc%2FO%2BXIuOXqbrcR%2BnGEL30D%2BydzDVD%2BaD%2FTgCrjpJ9JUTuf9hfSEkt4kS1oSbxzBLMVu%2B%2Bi%2Bgfo44miwX1QjFPLjwe6IvzghkgtiHib0SvB3maJTG4ujYED8Y14cVuk6OarOsCl%2BPxWNa4d4Kl6NkwafczvFi7vkCoZp5UwSMpAWPvWdUEO%2BVP4L7MNsdU0LsRdH%2FT25lQVPZ7zAyJSR04D4H5nD21tJQ4yZ30wcQER86n%2Fgo6cut86aCbtOczpg42HPP8DVzo0RO4KDUkj0odAvqXPXlR%2Bxk5%2BlCgoXwSz3ZzugocFIRuMNAlPrGc89Np73uNbDXZhOU5zmX%2BXwahYRAJ4BJSaBHJJ5gb5EUa%2BUTfEMKpcluhNpVPl%2BqVHxhqQch%2Fiz3%2FRYvoihhVgIg48P%2F4lbNqEl%2FmYIE9Hw6x%2FoBJ1x775utfhXUIukatQOaFxDQhSOSAoINVtIKiI0Nq5F0lOmcyAMzOcjekMMOlj8MGOqUB4kzmVuYdgBKfUElt7uKFC%2BGTXzaVOhnH77hZ%2BaJRe1fLokgFEQWyywFI5poOlGwJ624nShD1VXKctG%2FVFhEj%2B9QlpX3J5ZYRtk7LxDR7HWe7Le%2BMjdwh2K1E3%2F6gZ%2Fv45fvO46W4TqEKT4hyRYXo3fhljpF4j%2FwLARwFPF7j0vgHtSIcrPi65Do3QNxCDDszWOU9yUZVEXzMEkUy4JrXoJLsG3eM&X-Amz-Signature=c64ebabce74dbbeca5256325575636815cefcb33e029b20b2a4137f3dc21d793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLYETZF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArLYwtA6wCa%2FOaNMTjjJp3Mk4H5WJFqVxhGDZ2Gg%2F%2BnAiEAkrIdPK7Fhn%2Byjv47HA53jmu7WEc1CckyZjsXjZqYS%2FMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2B1sFNiD4LcLhiKqircA3tPRafkiU9x0o0dec58Nu5GEaM1AVYIuDorVcKzAKO%2Bv3p0LRkeF316HGQG09tiHv84hGkUiqzaoYG54pHcX5veVl%2BW5pUt3HQWA5viAmH9T4bnLH%2F%2BOi21QJN0KOgujh42sEAki8b1MntgH7nDPOuc%2FO%2BXIuOXqbrcR%2BnGEL30D%2BydzDVD%2BaD%2FTgCrjpJ9JUTuf9hfSEkt4kS1oSbxzBLMVu%2B%2Bi%2Bgfo44miwX1QjFPLjwe6IvzghkgtiHib0SvB3maJTG4ujYED8Y14cVuk6OarOsCl%2BPxWNa4d4Kl6NkwafczvFi7vkCoZp5UwSMpAWPvWdUEO%2BVP4L7MNsdU0LsRdH%2FT25lQVPZ7zAyJSR04D4H5nD21tJQ4yZ30wcQER86n%2Fgo6cut86aCbtOczpg42HPP8DVzo0RO4KDUkj0odAvqXPXlR%2Bxk5%2BlCgoXwSz3ZzugocFIRuMNAlPrGc89Np73uNbDXZhOU5zmX%2BXwahYRAJ4BJSaBHJJ5gb5EUa%2BUTfEMKpcluhNpVPl%2BqVHxhqQch%2Fiz3%2FRYvoihhVgIg48P%2F4lbNqEl%2FmYIE9Hw6x%2FoBJ1x775utfhXUIukatQOaFxDQhSOSAoINVtIKiI0Nq5F0lOmcyAMzOcjekMMOlj8MGOqUB4kzmVuYdgBKfUElt7uKFC%2BGTXzaVOhnH77hZ%2BaJRe1fLokgFEQWyywFI5poOlGwJ624nShD1VXKctG%2FVFhEj%2B9QlpX3J5ZYRtk7LxDR7HWe7Le%2BMjdwh2K1E3%2F6gZ%2Fv45fvO46W4TqEKT4hyRYXo3fhljpF4j%2FwLARwFPF7j0vgHtSIcrPi65Do3QNxCDDszWOU9yUZVEXzMEkUy4JrXoJLsG3eM&X-Amz-Signature=43ec88542f53878fa7db6e03237ff595658ceedabe7a454ba7fd6c1486c5d086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
