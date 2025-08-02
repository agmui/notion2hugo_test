---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGHLT4P%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsD3OTnO4jFTq%2BQOAvHmRRvYj0YowBbMroCefuT8S7AgIgVhb%2B5FZujDLQvJJwwgpl3lxf%2Bd2HfhFSLhoS7U5bZlIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKyy%2BSKgv533C5ktcSrcA0eS4DnCtkpB7i1LcXgfx%2BiuYKNfcwMX4yqUD%2FqvBapBNrIQAc5vafOPL3kDIu9Xe8WDumCHLg%2B5x0oczZMn4cY96SSQeFGI4LeKte%2FxIO0%2FvPXY1XRzGjg0f28IsLwIiJ1tYOphlnhpX%2FSw%2Bp1MmnhstMTuRlTIbGw5%2F0JOgBJD8ugRwoKneFukL7UNFvI7R%2FlY88IL%2BztOJrspk0HJonzscB4lEW8%2Bjjml3QZkBmtiVwJ58s%2Bf1LgLlcQpHH4F%2B5jh564IsDPDr9djJAeFvQTfmXm%2BEaAg2hW%2BaYjHc4YPMdedmOfsOUuoVr%2BzRRvfL8YDNzwgG1Ilq%2Bom1DxL2nvmqUYb3wCeGaG7P%2FWrIEoyt9FWU8DOCaJX%2Bl%2F%2BCtVwJWQXe7%2BMWQfdQB9FKGfvLC5nWm4jUxHZR%2BlZu4vYAj27UnrtJUkUrrMhT833tEeCs1y3gpwc%2FHjXLeqiRmT9Ag0aMN8cy629r0RHe%2BRGCES6ghLIx9lT74f71OBZbNO1aQ7j%2B3n0tQitVBR3UGVsoBBsN%2BzjqVW8YHg3UmBeNgNnwGnU%2B1hc6jnmxTO6qn3WDZE0IW%2Fw8NXvZVD6pcipp8G6wauJj4wvgjIBmfCtgd9ax%2Bo6BZ2p3z9sosrlMN7vtsQGOqUBla44XCTqoN1SccnFzi8r5bUuW4KleyJ7cfaPMV7rqHz%2B6GODM132ASg6XkmRgiEQWT1dcMagd9CX6iMD6FqSYDzg5TGD6d8MP3lEYCeuo0hy1c9ko0QSwLYdXvwjFK%2FoZwqvcPwazqoEJtmGq5l5L65LG%2BMfIgUWOKqaLGEKWch96WcRHGifPN%2BP0FUkkN7bjqDbEo%2B99nxV4Pq%2BTZfTTgJD%2FI1i&X-Amz-Signature=42e3360501b7b467dcfcadd457245791f62357aa1d2c6bbb0a2cbc051d1a8750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGHLT4P%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsD3OTnO4jFTq%2BQOAvHmRRvYj0YowBbMroCefuT8S7AgIgVhb%2B5FZujDLQvJJwwgpl3lxf%2Bd2HfhFSLhoS7U5bZlIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKyy%2BSKgv533C5ktcSrcA0eS4DnCtkpB7i1LcXgfx%2BiuYKNfcwMX4yqUD%2FqvBapBNrIQAc5vafOPL3kDIu9Xe8WDumCHLg%2B5x0oczZMn4cY96SSQeFGI4LeKte%2FxIO0%2FvPXY1XRzGjg0f28IsLwIiJ1tYOphlnhpX%2FSw%2Bp1MmnhstMTuRlTIbGw5%2F0JOgBJD8ugRwoKneFukL7UNFvI7R%2FlY88IL%2BztOJrspk0HJonzscB4lEW8%2Bjjml3QZkBmtiVwJ58s%2Bf1LgLlcQpHH4F%2B5jh564IsDPDr9djJAeFvQTfmXm%2BEaAg2hW%2BaYjHc4YPMdedmOfsOUuoVr%2BzRRvfL8YDNzwgG1Ilq%2Bom1DxL2nvmqUYb3wCeGaG7P%2FWrIEoyt9FWU8DOCaJX%2Bl%2F%2BCtVwJWQXe7%2BMWQfdQB9FKGfvLC5nWm4jUxHZR%2BlZu4vYAj27UnrtJUkUrrMhT833tEeCs1y3gpwc%2FHjXLeqiRmT9Ag0aMN8cy629r0RHe%2BRGCES6ghLIx9lT74f71OBZbNO1aQ7j%2B3n0tQitVBR3UGVsoBBsN%2BzjqVW8YHg3UmBeNgNnwGnU%2B1hc6jnmxTO6qn3WDZE0IW%2Fw8NXvZVD6pcipp8G6wauJj4wvgjIBmfCtgd9ax%2Bo6BZ2p3z9sosrlMN7vtsQGOqUBla44XCTqoN1SccnFzi8r5bUuW4KleyJ7cfaPMV7rqHz%2B6GODM132ASg6XkmRgiEQWT1dcMagd9CX6iMD6FqSYDzg5TGD6d8MP3lEYCeuo0hy1c9ko0QSwLYdXvwjFK%2FoZwqvcPwazqoEJtmGq5l5L65LG%2BMfIgUWOKqaLGEKWch96WcRHGifPN%2BP0FUkkN7bjqDbEo%2B99nxV4Pq%2BTZfTTgJD%2FI1i&X-Amz-Signature=9426fcd061896996cc19f86395b0e53d6ac14a341bc5dc5c293ae55be18d1cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGHLT4P%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsD3OTnO4jFTq%2BQOAvHmRRvYj0YowBbMroCefuT8S7AgIgVhb%2B5FZujDLQvJJwwgpl3lxf%2Bd2HfhFSLhoS7U5bZlIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKyy%2BSKgv533C5ktcSrcA0eS4DnCtkpB7i1LcXgfx%2BiuYKNfcwMX4yqUD%2FqvBapBNrIQAc5vafOPL3kDIu9Xe8WDumCHLg%2B5x0oczZMn4cY96SSQeFGI4LeKte%2FxIO0%2FvPXY1XRzGjg0f28IsLwIiJ1tYOphlnhpX%2FSw%2Bp1MmnhstMTuRlTIbGw5%2F0JOgBJD8ugRwoKneFukL7UNFvI7R%2FlY88IL%2BztOJrspk0HJonzscB4lEW8%2Bjjml3QZkBmtiVwJ58s%2Bf1LgLlcQpHH4F%2B5jh564IsDPDr9djJAeFvQTfmXm%2BEaAg2hW%2BaYjHc4YPMdedmOfsOUuoVr%2BzRRvfL8YDNzwgG1Ilq%2Bom1DxL2nvmqUYb3wCeGaG7P%2FWrIEoyt9FWU8DOCaJX%2Bl%2F%2BCtVwJWQXe7%2BMWQfdQB9FKGfvLC5nWm4jUxHZR%2BlZu4vYAj27UnrtJUkUrrMhT833tEeCs1y3gpwc%2FHjXLeqiRmT9Ag0aMN8cy629r0RHe%2BRGCES6ghLIx9lT74f71OBZbNO1aQ7j%2B3n0tQitVBR3UGVsoBBsN%2BzjqVW8YHg3UmBeNgNnwGnU%2B1hc6jnmxTO6qn3WDZE0IW%2Fw8NXvZVD6pcipp8G6wauJj4wvgjIBmfCtgd9ax%2Bo6BZ2p3z9sosrlMN7vtsQGOqUBla44XCTqoN1SccnFzi8r5bUuW4KleyJ7cfaPMV7rqHz%2B6GODM132ASg6XkmRgiEQWT1dcMagd9CX6iMD6FqSYDzg5TGD6d8MP3lEYCeuo0hy1c9ko0QSwLYdXvwjFK%2FoZwqvcPwazqoEJtmGq5l5L65LG%2BMfIgUWOKqaLGEKWch96WcRHGifPN%2BP0FUkkN7bjqDbEo%2B99nxV4Pq%2BTZfTTgJD%2FI1i&X-Amz-Signature=ab26fa160acebe3d3d72d182d7ee66c601965de15f7070cbcb598f42d957d623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGHLT4P%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsD3OTnO4jFTq%2BQOAvHmRRvYj0YowBbMroCefuT8S7AgIgVhb%2B5FZujDLQvJJwwgpl3lxf%2Bd2HfhFSLhoS7U5bZlIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKyy%2BSKgv533C5ktcSrcA0eS4DnCtkpB7i1LcXgfx%2BiuYKNfcwMX4yqUD%2FqvBapBNrIQAc5vafOPL3kDIu9Xe8WDumCHLg%2B5x0oczZMn4cY96SSQeFGI4LeKte%2FxIO0%2FvPXY1XRzGjg0f28IsLwIiJ1tYOphlnhpX%2FSw%2Bp1MmnhstMTuRlTIbGw5%2F0JOgBJD8ugRwoKneFukL7UNFvI7R%2FlY88IL%2BztOJrspk0HJonzscB4lEW8%2Bjjml3QZkBmtiVwJ58s%2Bf1LgLlcQpHH4F%2B5jh564IsDPDr9djJAeFvQTfmXm%2BEaAg2hW%2BaYjHc4YPMdedmOfsOUuoVr%2BzRRvfL8YDNzwgG1Ilq%2Bom1DxL2nvmqUYb3wCeGaG7P%2FWrIEoyt9FWU8DOCaJX%2Bl%2F%2BCtVwJWQXe7%2BMWQfdQB9FKGfvLC5nWm4jUxHZR%2BlZu4vYAj27UnrtJUkUrrMhT833tEeCs1y3gpwc%2FHjXLeqiRmT9Ag0aMN8cy629r0RHe%2BRGCES6ghLIx9lT74f71OBZbNO1aQ7j%2B3n0tQitVBR3UGVsoBBsN%2BzjqVW8YHg3UmBeNgNnwGnU%2B1hc6jnmxTO6qn3WDZE0IW%2Fw8NXvZVD6pcipp8G6wauJj4wvgjIBmfCtgd9ax%2Bo6BZ2p3z9sosrlMN7vtsQGOqUBla44XCTqoN1SccnFzi8r5bUuW4KleyJ7cfaPMV7rqHz%2B6GODM132ASg6XkmRgiEQWT1dcMagd9CX6iMD6FqSYDzg5TGD6d8MP3lEYCeuo0hy1c9ko0QSwLYdXvwjFK%2FoZwqvcPwazqoEJtmGq5l5L65LG%2BMfIgUWOKqaLGEKWch96WcRHGifPN%2BP0FUkkN7bjqDbEo%2B99nxV4Pq%2BTZfTTgJD%2FI1i&X-Amz-Signature=e612e04d5fa07c37825cb88c604103c3cdfa4b6c02c707f861cea93aa837962b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGHLT4P%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsD3OTnO4jFTq%2BQOAvHmRRvYj0YowBbMroCefuT8S7AgIgVhb%2B5FZujDLQvJJwwgpl3lxf%2Bd2HfhFSLhoS7U5bZlIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKyy%2BSKgv533C5ktcSrcA0eS4DnCtkpB7i1LcXgfx%2BiuYKNfcwMX4yqUD%2FqvBapBNrIQAc5vafOPL3kDIu9Xe8WDumCHLg%2B5x0oczZMn4cY96SSQeFGI4LeKte%2FxIO0%2FvPXY1XRzGjg0f28IsLwIiJ1tYOphlnhpX%2FSw%2Bp1MmnhstMTuRlTIbGw5%2F0JOgBJD8ugRwoKneFukL7UNFvI7R%2FlY88IL%2BztOJrspk0HJonzscB4lEW8%2Bjjml3QZkBmtiVwJ58s%2Bf1LgLlcQpHH4F%2B5jh564IsDPDr9djJAeFvQTfmXm%2BEaAg2hW%2BaYjHc4YPMdedmOfsOUuoVr%2BzRRvfL8YDNzwgG1Ilq%2Bom1DxL2nvmqUYb3wCeGaG7P%2FWrIEoyt9FWU8DOCaJX%2Bl%2F%2BCtVwJWQXe7%2BMWQfdQB9FKGfvLC5nWm4jUxHZR%2BlZu4vYAj27UnrtJUkUrrMhT833tEeCs1y3gpwc%2FHjXLeqiRmT9Ag0aMN8cy629r0RHe%2BRGCES6ghLIx9lT74f71OBZbNO1aQ7j%2B3n0tQitVBR3UGVsoBBsN%2BzjqVW8YHg3UmBeNgNnwGnU%2B1hc6jnmxTO6qn3WDZE0IW%2Fw8NXvZVD6pcipp8G6wauJj4wvgjIBmfCtgd9ax%2Bo6BZ2p3z9sosrlMN7vtsQGOqUBla44XCTqoN1SccnFzi8r5bUuW4KleyJ7cfaPMV7rqHz%2B6GODM132ASg6XkmRgiEQWT1dcMagd9CX6iMD6FqSYDzg5TGD6d8MP3lEYCeuo0hy1c9ko0QSwLYdXvwjFK%2FoZwqvcPwazqoEJtmGq5l5L65LG%2BMfIgUWOKqaLGEKWch96WcRHGifPN%2BP0FUkkN7bjqDbEo%2B99nxV4Pq%2BTZfTTgJD%2FI1i&X-Amz-Signature=997ca3892a67822abe7355fad6c36a09d4a7d1f84e4608c14ee79eabea554804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGHLT4P%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsD3OTnO4jFTq%2BQOAvHmRRvYj0YowBbMroCefuT8S7AgIgVhb%2B5FZujDLQvJJwwgpl3lxf%2Bd2HfhFSLhoS7U5bZlIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKyy%2BSKgv533C5ktcSrcA0eS4DnCtkpB7i1LcXgfx%2BiuYKNfcwMX4yqUD%2FqvBapBNrIQAc5vafOPL3kDIu9Xe8WDumCHLg%2B5x0oczZMn4cY96SSQeFGI4LeKte%2FxIO0%2FvPXY1XRzGjg0f28IsLwIiJ1tYOphlnhpX%2FSw%2Bp1MmnhstMTuRlTIbGw5%2F0JOgBJD8ugRwoKneFukL7UNFvI7R%2FlY88IL%2BztOJrspk0HJonzscB4lEW8%2Bjjml3QZkBmtiVwJ58s%2Bf1LgLlcQpHH4F%2B5jh564IsDPDr9djJAeFvQTfmXm%2BEaAg2hW%2BaYjHc4YPMdedmOfsOUuoVr%2BzRRvfL8YDNzwgG1Ilq%2Bom1DxL2nvmqUYb3wCeGaG7P%2FWrIEoyt9FWU8DOCaJX%2Bl%2F%2BCtVwJWQXe7%2BMWQfdQB9FKGfvLC5nWm4jUxHZR%2BlZu4vYAj27UnrtJUkUrrMhT833tEeCs1y3gpwc%2FHjXLeqiRmT9Ag0aMN8cy629r0RHe%2BRGCES6ghLIx9lT74f71OBZbNO1aQ7j%2B3n0tQitVBR3UGVsoBBsN%2BzjqVW8YHg3UmBeNgNnwGnU%2B1hc6jnmxTO6qn3WDZE0IW%2Fw8NXvZVD6pcipp8G6wauJj4wvgjIBmfCtgd9ax%2Bo6BZ2p3z9sosrlMN7vtsQGOqUBla44XCTqoN1SccnFzi8r5bUuW4KleyJ7cfaPMV7rqHz%2B6GODM132ASg6XkmRgiEQWT1dcMagd9CX6iMD6FqSYDzg5TGD6d8MP3lEYCeuo0hy1c9ko0QSwLYdXvwjFK%2FoZwqvcPwazqoEJtmGq5l5L65LG%2BMfIgUWOKqaLGEKWch96WcRHGifPN%2BP0FUkkN7bjqDbEo%2B99nxV4Pq%2BTZfTTgJD%2FI1i&X-Amz-Signature=df0ae7ff560feaf2825b58aa70c58005a6e102da41c984fe0caf52b51ffec49e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGHLT4P%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsD3OTnO4jFTq%2BQOAvHmRRvYj0YowBbMroCefuT8S7AgIgVhb%2B5FZujDLQvJJwwgpl3lxf%2Bd2HfhFSLhoS7U5bZlIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKyy%2BSKgv533C5ktcSrcA0eS4DnCtkpB7i1LcXgfx%2BiuYKNfcwMX4yqUD%2FqvBapBNrIQAc5vafOPL3kDIu9Xe8WDumCHLg%2B5x0oczZMn4cY96SSQeFGI4LeKte%2FxIO0%2FvPXY1XRzGjg0f28IsLwIiJ1tYOphlnhpX%2FSw%2Bp1MmnhstMTuRlTIbGw5%2F0JOgBJD8ugRwoKneFukL7UNFvI7R%2FlY88IL%2BztOJrspk0HJonzscB4lEW8%2Bjjml3QZkBmtiVwJ58s%2Bf1LgLlcQpHH4F%2B5jh564IsDPDr9djJAeFvQTfmXm%2BEaAg2hW%2BaYjHc4YPMdedmOfsOUuoVr%2BzRRvfL8YDNzwgG1Ilq%2Bom1DxL2nvmqUYb3wCeGaG7P%2FWrIEoyt9FWU8DOCaJX%2Bl%2F%2BCtVwJWQXe7%2BMWQfdQB9FKGfvLC5nWm4jUxHZR%2BlZu4vYAj27UnrtJUkUrrMhT833tEeCs1y3gpwc%2FHjXLeqiRmT9Ag0aMN8cy629r0RHe%2BRGCES6ghLIx9lT74f71OBZbNO1aQ7j%2B3n0tQitVBR3UGVsoBBsN%2BzjqVW8YHg3UmBeNgNnwGnU%2B1hc6jnmxTO6qn3WDZE0IW%2Fw8NXvZVD6pcipp8G6wauJj4wvgjIBmfCtgd9ax%2Bo6BZ2p3z9sosrlMN7vtsQGOqUBla44XCTqoN1SccnFzi8r5bUuW4KleyJ7cfaPMV7rqHz%2B6GODM132ASg6XkmRgiEQWT1dcMagd9CX6iMD6FqSYDzg5TGD6d8MP3lEYCeuo0hy1c9ko0QSwLYdXvwjFK%2FoZwqvcPwazqoEJtmGq5l5L65LG%2BMfIgUWOKqaLGEKWch96WcRHGifPN%2BP0FUkkN7bjqDbEo%2B99nxV4Pq%2BTZfTTgJD%2FI1i&X-Amz-Signature=9e2cfcaa00f243d1d6c341d31be6207f56e5b6eeadede203ccc64933a1dcdf34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGHLT4P%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsD3OTnO4jFTq%2BQOAvHmRRvYj0YowBbMroCefuT8S7AgIgVhb%2B5FZujDLQvJJwwgpl3lxf%2Bd2HfhFSLhoS7U5bZlIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKyy%2BSKgv533C5ktcSrcA0eS4DnCtkpB7i1LcXgfx%2BiuYKNfcwMX4yqUD%2FqvBapBNrIQAc5vafOPL3kDIu9Xe8WDumCHLg%2B5x0oczZMn4cY96SSQeFGI4LeKte%2FxIO0%2FvPXY1XRzGjg0f28IsLwIiJ1tYOphlnhpX%2FSw%2Bp1MmnhstMTuRlTIbGw5%2F0JOgBJD8ugRwoKneFukL7UNFvI7R%2FlY88IL%2BztOJrspk0HJonzscB4lEW8%2Bjjml3QZkBmtiVwJ58s%2Bf1LgLlcQpHH4F%2B5jh564IsDPDr9djJAeFvQTfmXm%2BEaAg2hW%2BaYjHc4YPMdedmOfsOUuoVr%2BzRRvfL8YDNzwgG1Ilq%2Bom1DxL2nvmqUYb3wCeGaG7P%2FWrIEoyt9FWU8DOCaJX%2Bl%2F%2BCtVwJWQXe7%2BMWQfdQB9FKGfvLC5nWm4jUxHZR%2BlZu4vYAj27UnrtJUkUrrMhT833tEeCs1y3gpwc%2FHjXLeqiRmT9Ag0aMN8cy629r0RHe%2BRGCES6ghLIx9lT74f71OBZbNO1aQ7j%2B3n0tQitVBR3UGVsoBBsN%2BzjqVW8YHg3UmBeNgNnwGnU%2B1hc6jnmxTO6qn3WDZE0IW%2Fw8NXvZVD6pcipp8G6wauJj4wvgjIBmfCtgd9ax%2Bo6BZ2p3z9sosrlMN7vtsQGOqUBla44XCTqoN1SccnFzi8r5bUuW4KleyJ7cfaPMV7rqHz%2B6GODM132ASg6XkmRgiEQWT1dcMagd9CX6iMD6FqSYDzg5TGD6d8MP3lEYCeuo0hy1c9ko0QSwLYdXvwjFK%2FoZwqvcPwazqoEJtmGq5l5L65LG%2BMfIgUWOKqaLGEKWch96WcRHGifPN%2BP0FUkkN7bjqDbEo%2B99nxV4Pq%2BTZfTTgJD%2FI1i&X-Amz-Signature=adadd36ff07b4e5334940f9a7a5c462fb1f5e4c1262074201d7798db70bba809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
