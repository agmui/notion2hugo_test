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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFKKUTH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWZIdAmF68AAYwXESb1zOrEv7Bc4zSsFOsc1ATnRg2UAiAXdsAwg3SyMbSlYjNML9oevddMggbr4tUlJuhy9VcfJSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwsqLZnPWvbf4hTSrKtwDXnRG65FU1JyM4Oc0zzj8EDWCePrxGkLcCMzJaNVzWYLFVd9RSyahzrfHZaRTj%2FD0wRjFksDM0cLdmIIl4K6CxupWlQzb1hzJRtJNZwg9yzn8b9GnRODQdzjsp9lQCUUcfe9CfTYOQztUi1RzkUR0ERKiGGmcxoKRJ%2FcFcMy7%2BIJqhMBZaHbJzjoMMGFpcFciSHgRLbirYzFk40xkx3P%2Bx3Q%2FMNxKxAaQnI1EUcKahVieL6Dz0YdqKV0vnh6aEHBS11MPnhozf7mbLv6Qz5QVZlAAb8HCnPNKQT%2BscSKd61z4fzKlVouE553pzHl%2Fnb69IVpothWQHDbOGDRZjF8QSjCZ56amje6iyNStLkKCK5mi4q8B%2BBVVGDT3tc1fOKxy2eQjOVUBf877a6J9eTiQuXQ3px3EEckzbNGvJhs4qZawZgRPLP4UsTXbSBjEKjHJlJ7CpOJUj%2FVnKrBBG8hkI94%2BSrVjjLIhqvabl9gDxKYD6EyJ600%2BaHUAk%2FHRYdTjkXDvAvUzXmxWMy583PbzAsujBXVujWNuUw%2BZJmrcTsD%2BTux%2FqTa3O6qUBQFsNT236Z3ZatWeVgeTH1per4QJUVUtlbrq03vRY%2F7PR%2B1Q2Zjd6PS5SVAt%2BK4lwkQwgY3qwQY6pgFMMamTK8%2BA23VN5o4u8vwwhd1IlO7%2FgZKzX81I1uJKjewFVpxaZQ9KlIGbHOY2Y8NKY%2BeS8P3yuhEHIHR9tIe0u94XUvgxPfG1V5Q5gXI8TX4m0NwocSmrk310j67GQBdqTLR1a%2FLS0EQGDz4appm9UyNsLV4CrTnO7u6wztvP1A1R2%2BkWlCKfllC%2FjIurzaMNOjyVWUtmAfLKq3hDoTOlhqglEdVG&X-Amz-Signature=b2c414157f4446f2a7ec9fda5900ad17e95ba6e9b561899ed0ab53593f5a13a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFKKUTH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWZIdAmF68AAYwXESb1zOrEv7Bc4zSsFOsc1ATnRg2UAiAXdsAwg3SyMbSlYjNML9oevddMggbr4tUlJuhy9VcfJSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwsqLZnPWvbf4hTSrKtwDXnRG65FU1JyM4Oc0zzj8EDWCePrxGkLcCMzJaNVzWYLFVd9RSyahzrfHZaRTj%2FD0wRjFksDM0cLdmIIl4K6CxupWlQzb1hzJRtJNZwg9yzn8b9GnRODQdzjsp9lQCUUcfe9CfTYOQztUi1RzkUR0ERKiGGmcxoKRJ%2FcFcMy7%2BIJqhMBZaHbJzjoMMGFpcFciSHgRLbirYzFk40xkx3P%2Bx3Q%2FMNxKxAaQnI1EUcKahVieL6Dz0YdqKV0vnh6aEHBS11MPnhozf7mbLv6Qz5QVZlAAb8HCnPNKQT%2BscSKd61z4fzKlVouE553pzHl%2Fnb69IVpothWQHDbOGDRZjF8QSjCZ56amje6iyNStLkKCK5mi4q8B%2BBVVGDT3tc1fOKxy2eQjOVUBf877a6J9eTiQuXQ3px3EEckzbNGvJhs4qZawZgRPLP4UsTXbSBjEKjHJlJ7CpOJUj%2FVnKrBBG8hkI94%2BSrVjjLIhqvabl9gDxKYD6EyJ600%2BaHUAk%2FHRYdTjkXDvAvUzXmxWMy583PbzAsujBXVujWNuUw%2BZJmrcTsD%2BTux%2FqTa3O6qUBQFsNT236Z3ZatWeVgeTH1per4QJUVUtlbrq03vRY%2F7PR%2B1Q2Zjd6PS5SVAt%2BK4lwkQwgY3qwQY6pgFMMamTK8%2BA23VN5o4u8vwwhd1IlO7%2FgZKzX81I1uJKjewFVpxaZQ9KlIGbHOY2Y8NKY%2BeS8P3yuhEHIHR9tIe0u94XUvgxPfG1V5Q5gXI8TX4m0NwocSmrk310j67GQBdqTLR1a%2FLS0EQGDz4appm9UyNsLV4CrTnO7u6wztvP1A1R2%2BkWlCKfllC%2FjIurzaMNOjyVWUtmAfLKq3hDoTOlhqglEdVG&X-Amz-Signature=cb7f17dffedf6853c8d2cd02bbd9585a62fd89488d4001c71f8940e824713c65&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFKKUTH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWZIdAmF68AAYwXESb1zOrEv7Bc4zSsFOsc1ATnRg2UAiAXdsAwg3SyMbSlYjNML9oevddMggbr4tUlJuhy9VcfJSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwsqLZnPWvbf4hTSrKtwDXnRG65FU1JyM4Oc0zzj8EDWCePrxGkLcCMzJaNVzWYLFVd9RSyahzrfHZaRTj%2FD0wRjFksDM0cLdmIIl4K6CxupWlQzb1hzJRtJNZwg9yzn8b9GnRODQdzjsp9lQCUUcfe9CfTYOQztUi1RzkUR0ERKiGGmcxoKRJ%2FcFcMy7%2BIJqhMBZaHbJzjoMMGFpcFciSHgRLbirYzFk40xkx3P%2Bx3Q%2FMNxKxAaQnI1EUcKahVieL6Dz0YdqKV0vnh6aEHBS11MPnhozf7mbLv6Qz5QVZlAAb8HCnPNKQT%2BscSKd61z4fzKlVouE553pzHl%2Fnb69IVpothWQHDbOGDRZjF8QSjCZ56amje6iyNStLkKCK5mi4q8B%2BBVVGDT3tc1fOKxy2eQjOVUBf877a6J9eTiQuXQ3px3EEckzbNGvJhs4qZawZgRPLP4UsTXbSBjEKjHJlJ7CpOJUj%2FVnKrBBG8hkI94%2BSrVjjLIhqvabl9gDxKYD6EyJ600%2BaHUAk%2FHRYdTjkXDvAvUzXmxWMy583PbzAsujBXVujWNuUw%2BZJmrcTsD%2BTux%2FqTa3O6qUBQFsNT236Z3ZatWeVgeTH1per4QJUVUtlbrq03vRY%2F7PR%2B1Q2Zjd6PS5SVAt%2BK4lwkQwgY3qwQY6pgFMMamTK8%2BA23VN5o4u8vwwhd1IlO7%2FgZKzX81I1uJKjewFVpxaZQ9KlIGbHOY2Y8NKY%2BeS8P3yuhEHIHR9tIe0u94XUvgxPfG1V5Q5gXI8TX4m0NwocSmrk310j67GQBdqTLR1a%2FLS0EQGDz4appm9UyNsLV4CrTnO7u6wztvP1A1R2%2BkWlCKfllC%2FjIurzaMNOjyVWUtmAfLKq3hDoTOlhqglEdVG&X-Amz-Signature=52d88aedd07b0ba713d3357943320fefe6163274cfa84312cdfd021530a2e77c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFKKUTH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWZIdAmF68AAYwXESb1zOrEv7Bc4zSsFOsc1ATnRg2UAiAXdsAwg3SyMbSlYjNML9oevddMggbr4tUlJuhy9VcfJSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwsqLZnPWvbf4hTSrKtwDXnRG65FU1JyM4Oc0zzj8EDWCePrxGkLcCMzJaNVzWYLFVd9RSyahzrfHZaRTj%2FD0wRjFksDM0cLdmIIl4K6CxupWlQzb1hzJRtJNZwg9yzn8b9GnRODQdzjsp9lQCUUcfe9CfTYOQztUi1RzkUR0ERKiGGmcxoKRJ%2FcFcMy7%2BIJqhMBZaHbJzjoMMGFpcFciSHgRLbirYzFk40xkx3P%2Bx3Q%2FMNxKxAaQnI1EUcKahVieL6Dz0YdqKV0vnh6aEHBS11MPnhozf7mbLv6Qz5QVZlAAb8HCnPNKQT%2BscSKd61z4fzKlVouE553pzHl%2Fnb69IVpothWQHDbOGDRZjF8QSjCZ56amje6iyNStLkKCK5mi4q8B%2BBVVGDT3tc1fOKxy2eQjOVUBf877a6J9eTiQuXQ3px3EEckzbNGvJhs4qZawZgRPLP4UsTXbSBjEKjHJlJ7CpOJUj%2FVnKrBBG8hkI94%2BSrVjjLIhqvabl9gDxKYD6EyJ600%2BaHUAk%2FHRYdTjkXDvAvUzXmxWMy583PbzAsujBXVujWNuUw%2BZJmrcTsD%2BTux%2FqTa3O6qUBQFsNT236Z3ZatWeVgeTH1per4QJUVUtlbrq03vRY%2F7PR%2B1Q2Zjd6PS5SVAt%2BK4lwkQwgY3qwQY6pgFMMamTK8%2BA23VN5o4u8vwwhd1IlO7%2FgZKzX81I1uJKjewFVpxaZQ9KlIGbHOY2Y8NKY%2BeS8P3yuhEHIHR9tIe0u94XUvgxPfG1V5Q5gXI8TX4m0NwocSmrk310j67GQBdqTLR1a%2FLS0EQGDz4appm9UyNsLV4CrTnO7u6wztvP1A1R2%2BkWlCKfllC%2FjIurzaMNOjyVWUtmAfLKq3hDoTOlhqglEdVG&X-Amz-Signature=8aedef4895656925528a9c1c650a5da23f8ced82f5c3eca9600f53ffd195ff56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFKKUTH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWZIdAmF68AAYwXESb1zOrEv7Bc4zSsFOsc1ATnRg2UAiAXdsAwg3SyMbSlYjNML9oevddMggbr4tUlJuhy9VcfJSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwsqLZnPWvbf4hTSrKtwDXnRG65FU1JyM4Oc0zzj8EDWCePrxGkLcCMzJaNVzWYLFVd9RSyahzrfHZaRTj%2FD0wRjFksDM0cLdmIIl4K6CxupWlQzb1hzJRtJNZwg9yzn8b9GnRODQdzjsp9lQCUUcfe9CfTYOQztUi1RzkUR0ERKiGGmcxoKRJ%2FcFcMy7%2BIJqhMBZaHbJzjoMMGFpcFciSHgRLbirYzFk40xkx3P%2Bx3Q%2FMNxKxAaQnI1EUcKahVieL6Dz0YdqKV0vnh6aEHBS11MPnhozf7mbLv6Qz5QVZlAAb8HCnPNKQT%2BscSKd61z4fzKlVouE553pzHl%2Fnb69IVpothWQHDbOGDRZjF8QSjCZ56amje6iyNStLkKCK5mi4q8B%2BBVVGDT3tc1fOKxy2eQjOVUBf877a6J9eTiQuXQ3px3EEckzbNGvJhs4qZawZgRPLP4UsTXbSBjEKjHJlJ7CpOJUj%2FVnKrBBG8hkI94%2BSrVjjLIhqvabl9gDxKYD6EyJ600%2BaHUAk%2FHRYdTjkXDvAvUzXmxWMy583PbzAsujBXVujWNuUw%2BZJmrcTsD%2BTux%2FqTa3O6qUBQFsNT236Z3ZatWeVgeTH1per4QJUVUtlbrq03vRY%2F7PR%2B1Q2Zjd6PS5SVAt%2BK4lwkQwgY3qwQY6pgFMMamTK8%2BA23VN5o4u8vwwhd1IlO7%2FgZKzX81I1uJKjewFVpxaZQ9KlIGbHOY2Y8NKY%2BeS8P3yuhEHIHR9tIe0u94XUvgxPfG1V5Q5gXI8TX4m0NwocSmrk310j67GQBdqTLR1a%2FLS0EQGDz4appm9UyNsLV4CrTnO7u6wztvP1A1R2%2BkWlCKfllC%2FjIurzaMNOjyVWUtmAfLKq3hDoTOlhqglEdVG&X-Amz-Signature=db47aa8736513d203d3f87ce8ac5a94f26baad06f328f6cd3bfc780ffb95087e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFKKUTH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWZIdAmF68AAYwXESb1zOrEv7Bc4zSsFOsc1ATnRg2UAiAXdsAwg3SyMbSlYjNML9oevddMggbr4tUlJuhy9VcfJSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwsqLZnPWvbf4hTSrKtwDXnRG65FU1JyM4Oc0zzj8EDWCePrxGkLcCMzJaNVzWYLFVd9RSyahzrfHZaRTj%2FD0wRjFksDM0cLdmIIl4K6CxupWlQzb1hzJRtJNZwg9yzn8b9GnRODQdzjsp9lQCUUcfe9CfTYOQztUi1RzkUR0ERKiGGmcxoKRJ%2FcFcMy7%2BIJqhMBZaHbJzjoMMGFpcFciSHgRLbirYzFk40xkx3P%2Bx3Q%2FMNxKxAaQnI1EUcKahVieL6Dz0YdqKV0vnh6aEHBS11MPnhozf7mbLv6Qz5QVZlAAb8HCnPNKQT%2BscSKd61z4fzKlVouE553pzHl%2Fnb69IVpothWQHDbOGDRZjF8QSjCZ56amje6iyNStLkKCK5mi4q8B%2BBVVGDT3tc1fOKxy2eQjOVUBf877a6J9eTiQuXQ3px3EEckzbNGvJhs4qZawZgRPLP4UsTXbSBjEKjHJlJ7CpOJUj%2FVnKrBBG8hkI94%2BSrVjjLIhqvabl9gDxKYD6EyJ600%2BaHUAk%2FHRYdTjkXDvAvUzXmxWMy583PbzAsujBXVujWNuUw%2BZJmrcTsD%2BTux%2FqTa3O6qUBQFsNT236Z3ZatWeVgeTH1per4QJUVUtlbrq03vRY%2F7PR%2B1Q2Zjd6PS5SVAt%2BK4lwkQwgY3qwQY6pgFMMamTK8%2BA23VN5o4u8vwwhd1IlO7%2FgZKzX81I1uJKjewFVpxaZQ9KlIGbHOY2Y8NKY%2BeS8P3yuhEHIHR9tIe0u94XUvgxPfG1V5Q5gXI8TX4m0NwocSmrk310j67GQBdqTLR1a%2FLS0EQGDz4appm9UyNsLV4CrTnO7u6wztvP1A1R2%2BkWlCKfllC%2FjIurzaMNOjyVWUtmAfLKq3hDoTOlhqglEdVG&X-Amz-Signature=3eb02a37e9a211133296181ee7a5eadfa475832f3e493732b365824bd2104a4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFKKUTH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWZIdAmF68AAYwXESb1zOrEv7Bc4zSsFOsc1ATnRg2UAiAXdsAwg3SyMbSlYjNML9oevddMggbr4tUlJuhy9VcfJSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwsqLZnPWvbf4hTSrKtwDXnRG65FU1JyM4Oc0zzj8EDWCePrxGkLcCMzJaNVzWYLFVd9RSyahzrfHZaRTj%2FD0wRjFksDM0cLdmIIl4K6CxupWlQzb1hzJRtJNZwg9yzn8b9GnRODQdzjsp9lQCUUcfe9CfTYOQztUi1RzkUR0ERKiGGmcxoKRJ%2FcFcMy7%2BIJqhMBZaHbJzjoMMGFpcFciSHgRLbirYzFk40xkx3P%2Bx3Q%2FMNxKxAaQnI1EUcKahVieL6Dz0YdqKV0vnh6aEHBS11MPnhozf7mbLv6Qz5QVZlAAb8HCnPNKQT%2BscSKd61z4fzKlVouE553pzHl%2Fnb69IVpothWQHDbOGDRZjF8QSjCZ56amje6iyNStLkKCK5mi4q8B%2BBVVGDT3tc1fOKxy2eQjOVUBf877a6J9eTiQuXQ3px3EEckzbNGvJhs4qZawZgRPLP4UsTXbSBjEKjHJlJ7CpOJUj%2FVnKrBBG8hkI94%2BSrVjjLIhqvabl9gDxKYD6EyJ600%2BaHUAk%2FHRYdTjkXDvAvUzXmxWMy583PbzAsujBXVujWNuUw%2BZJmrcTsD%2BTux%2FqTa3O6qUBQFsNT236Z3ZatWeVgeTH1per4QJUVUtlbrq03vRY%2F7PR%2B1Q2Zjd6PS5SVAt%2BK4lwkQwgY3qwQY6pgFMMamTK8%2BA23VN5o4u8vwwhd1IlO7%2FgZKzX81I1uJKjewFVpxaZQ9KlIGbHOY2Y8NKY%2BeS8P3yuhEHIHR9tIe0u94XUvgxPfG1V5Q5gXI8TX4m0NwocSmrk310j67GQBdqTLR1a%2FLS0EQGDz4appm9UyNsLV4CrTnO7u6wztvP1A1R2%2BkWlCKfllC%2FjIurzaMNOjyVWUtmAfLKq3hDoTOlhqglEdVG&X-Amz-Signature=11ad24a422f70275bff91e7c94d6a6d515e87ae1fae6fdc4a267f05d76bd5e5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFKKUTH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWZIdAmF68AAYwXESb1zOrEv7Bc4zSsFOsc1ATnRg2UAiAXdsAwg3SyMbSlYjNML9oevddMggbr4tUlJuhy9VcfJSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwsqLZnPWvbf4hTSrKtwDXnRG65FU1JyM4Oc0zzj8EDWCePrxGkLcCMzJaNVzWYLFVd9RSyahzrfHZaRTj%2FD0wRjFksDM0cLdmIIl4K6CxupWlQzb1hzJRtJNZwg9yzn8b9GnRODQdzjsp9lQCUUcfe9CfTYOQztUi1RzkUR0ERKiGGmcxoKRJ%2FcFcMy7%2BIJqhMBZaHbJzjoMMGFpcFciSHgRLbirYzFk40xkx3P%2Bx3Q%2FMNxKxAaQnI1EUcKahVieL6Dz0YdqKV0vnh6aEHBS11MPnhozf7mbLv6Qz5QVZlAAb8HCnPNKQT%2BscSKd61z4fzKlVouE553pzHl%2Fnb69IVpothWQHDbOGDRZjF8QSjCZ56amje6iyNStLkKCK5mi4q8B%2BBVVGDT3tc1fOKxy2eQjOVUBf877a6J9eTiQuXQ3px3EEckzbNGvJhs4qZawZgRPLP4UsTXbSBjEKjHJlJ7CpOJUj%2FVnKrBBG8hkI94%2BSrVjjLIhqvabl9gDxKYD6EyJ600%2BaHUAk%2FHRYdTjkXDvAvUzXmxWMy583PbzAsujBXVujWNuUw%2BZJmrcTsD%2BTux%2FqTa3O6qUBQFsNT236Z3ZatWeVgeTH1per4QJUVUtlbrq03vRY%2F7PR%2B1Q2Zjd6PS5SVAt%2BK4lwkQwgY3qwQY6pgFMMamTK8%2BA23VN5o4u8vwwhd1IlO7%2FgZKzX81I1uJKjewFVpxaZQ9KlIGbHOY2Y8NKY%2BeS8P3yuhEHIHR9tIe0u94XUvgxPfG1V5Q5gXI8TX4m0NwocSmrk310j67GQBdqTLR1a%2FLS0EQGDz4appm9UyNsLV4CrTnO7u6wztvP1A1R2%2BkWlCKfllC%2FjIurzaMNOjyVWUtmAfLKq3hDoTOlhqglEdVG&X-Amz-Signature=e8039a11f6a5e53902844cb69d7ad48891503e404fb49a3d60afa999f2525783&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
