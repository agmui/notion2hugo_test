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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTYWRU5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnhK1qnAoekz%2FzY%2B7bbjEPeAeMiMcC%2BZQpmA40u%2F5W6AiEA270Y29VWMi9jhdG6fqIa92DNGUh0A20X2%2FakDAx7ZokqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARrhWoIduNhhJ3MBircA3IRSw0mUR1jhr%2FDn0MLkHoMOKUlMWQEeAbVQqPm3krmqhrh8w4tpCcqc8iTHUzr%2F4mZM2yO2OrH2nA6bWACtckpvuEmaNvL0gkDMsXFU2lhdj1wBdrwUcmTmhVk5kcjuVnegKOisE%2Fnr1ybmYtfQhGTudNPtnRj5nxBHqCAKYQgBO%2BqIz4Qr8GjlRYnWynIsqHQ5ZXtknoCJo%2FBxXCSOayHznObvllMPyTcQridae4HVzVky6wbZnnKcZYDs%2Fu5CSi0zsODekxGtC2FP4aWOWCwDMOqMpY%2B5wKzY1ZdE0oIUvY75PFHUyttadkuUPNurNK%2Fo76WbbYMDJFLE%2BjHTT4n77aZwDEv2YrfibkWv0pmI1fceyE4UFO9QYzQLIALayxhqTF5UJ5xnry64bwCiT%2FxVt1jVPcdq4s18zOWAiZjZYXbD5e5LtIpSf%2FnbTGvCeO7HVwkQavSSCt5NIJ%2FpcbsphxyflkIPAGoc28wbHtV38ZnzTvPbCn4vIUjSMyxVKu5UmYXa8YBAUaumnHBWMK7ONTJchIPlwMtLOahAivQcpoG2S6tINWoq5FoDDPyLIuO2hOm3ii5s6sWE%2BDxdvGk8ZItTtP%2BabLtIk5stcSxAXJsKtSTuvSneU6%2FMJev57wGOqUBzrAGeFuW9e3ZPn5I%2Fi9W%2F8h7ipfo0c3Fej3HX6dkLRuK7%2BTMvfGiPCz%2FQcaO%2BPR4cLSgo8yBuEr3eeSX6CBHAjASKWsOqEGemWJGeLxCoyRYjd8N5LA8c93SvUN7PGHRr8ryQegZu2aDHjNyjQ%2BOaL8TCKzStIt1REFVjZcHovjlmO%2BHqrOHyHy5yMiz8l6ftkf%2BLRqE%2Fs8PPqO7yapmXswcOmpy&X-Amz-Signature=2362bd909ae238df7988b20515e037043f09507549fc8de61069a3958447453f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTYWRU5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnhK1qnAoekz%2FzY%2B7bbjEPeAeMiMcC%2BZQpmA40u%2F5W6AiEA270Y29VWMi9jhdG6fqIa92DNGUh0A20X2%2FakDAx7ZokqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARrhWoIduNhhJ3MBircA3IRSw0mUR1jhr%2FDn0MLkHoMOKUlMWQEeAbVQqPm3krmqhrh8w4tpCcqc8iTHUzr%2F4mZM2yO2OrH2nA6bWACtckpvuEmaNvL0gkDMsXFU2lhdj1wBdrwUcmTmhVk5kcjuVnegKOisE%2Fnr1ybmYtfQhGTudNPtnRj5nxBHqCAKYQgBO%2BqIz4Qr8GjlRYnWynIsqHQ5ZXtknoCJo%2FBxXCSOayHznObvllMPyTcQridae4HVzVky6wbZnnKcZYDs%2Fu5CSi0zsODekxGtC2FP4aWOWCwDMOqMpY%2B5wKzY1ZdE0oIUvY75PFHUyttadkuUPNurNK%2Fo76WbbYMDJFLE%2BjHTT4n77aZwDEv2YrfibkWv0pmI1fceyE4UFO9QYzQLIALayxhqTF5UJ5xnry64bwCiT%2FxVt1jVPcdq4s18zOWAiZjZYXbD5e5LtIpSf%2FnbTGvCeO7HVwkQavSSCt5NIJ%2FpcbsphxyflkIPAGoc28wbHtV38ZnzTvPbCn4vIUjSMyxVKu5UmYXa8YBAUaumnHBWMK7ONTJchIPlwMtLOahAivQcpoG2S6tINWoq5FoDDPyLIuO2hOm3ii5s6sWE%2BDxdvGk8ZItTtP%2BabLtIk5stcSxAXJsKtSTuvSneU6%2FMJev57wGOqUBzrAGeFuW9e3ZPn5I%2Fi9W%2F8h7ipfo0c3Fej3HX6dkLRuK7%2BTMvfGiPCz%2FQcaO%2BPR4cLSgo8yBuEr3eeSX6CBHAjASKWsOqEGemWJGeLxCoyRYjd8N5LA8c93SvUN7PGHRr8ryQegZu2aDHjNyjQ%2BOaL8TCKzStIt1REFVjZcHovjlmO%2BHqrOHyHy5yMiz8l6ftkf%2BLRqE%2Fs8PPqO7yapmXswcOmpy&X-Amz-Signature=f1277c954f0cb1d0f995697390648a9a3db6cf7a090b67998fcefa323336b77c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTYWRU5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnhK1qnAoekz%2FzY%2B7bbjEPeAeMiMcC%2BZQpmA40u%2F5W6AiEA270Y29VWMi9jhdG6fqIa92DNGUh0A20X2%2FakDAx7ZokqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARrhWoIduNhhJ3MBircA3IRSw0mUR1jhr%2FDn0MLkHoMOKUlMWQEeAbVQqPm3krmqhrh8w4tpCcqc8iTHUzr%2F4mZM2yO2OrH2nA6bWACtckpvuEmaNvL0gkDMsXFU2lhdj1wBdrwUcmTmhVk5kcjuVnegKOisE%2Fnr1ybmYtfQhGTudNPtnRj5nxBHqCAKYQgBO%2BqIz4Qr8GjlRYnWynIsqHQ5ZXtknoCJo%2FBxXCSOayHznObvllMPyTcQridae4HVzVky6wbZnnKcZYDs%2Fu5CSi0zsODekxGtC2FP4aWOWCwDMOqMpY%2B5wKzY1ZdE0oIUvY75PFHUyttadkuUPNurNK%2Fo76WbbYMDJFLE%2BjHTT4n77aZwDEv2YrfibkWv0pmI1fceyE4UFO9QYzQLIALayxhqTF5UJ5xnry64bwCiT%2FxVt1jVPcdq4s18zOWAiZjZYXbD5e5LtIpSf%2FnbTGvCeO7HVwkQavSSCt5NIJ%2FpcbsphxyflkIPAGoc28wbHtV38ZnzTvPbCn4vIUjSMyxVKu5UmYXa8YBAUaumnHBWMK7ONTJchIPlwMtLOahAivQcpoG2S6tINWoq5FoDDPyLIuO2hOm3ii5s6sWE%2BDxdvGk8ZItTtP%2BabLtIk5stcSxAXJsKtSTuvSneU6%2FMJev57wGOqUBzrAGeFuW9e3ZPn5I%2Fi9W%2F8h7ipfo0c3Fej3HX6dkLRuK7%2BTMvfGiPCz%2FQcaO%2BPR4cLSgo8yBuEr3eeSX6CBHAjASKWsOqEGemWJGeLxCoyRYjd8N5LA8c93SvUN7PGHRr8ryQegZu2aDHjNyjQ%2BOaL8TCKzStIt1REFVjZcHovjlmO%2BHqrOHyHy5yMiz8l6ftkf%2BLRqE%2Fs8PPqO7yapmXswcOmpy&X-Amz-Signature=8bcd7d569f4cd4caf829337990fbf525f9a477a5fc4eee28f4c2a6a14fcda749&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTYWRU5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnhK1qnAoekz%2FzY%2B7bbjEPeAeMiMcC%2BZQpmA40u%2F5W6AiEA270Y29VWMi9jhdG6fqIa92DNGUh0A20X2%2FakDAx7ZokqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARrhWoIduNhhJ3MBircA3IRSw0mUR1jhr%2FDn0MLkHoMOKUlMWQEeAbVQqPm3krmqhrh8w4tpCcqc8iTHUzr%2F4mZM2yO2OrH2nA6bWACtckpvuEmaNvL0gkDMsXFU2lhdj1wBdrwUcmTmhVk5kcjuVnegKOisE%2Fnr1ybmYtfQhGTudNPtnRj5nxBHqCAKYQgBO%2BqIz4Qr8GjlRYnWynIsqHQ5ZXtknoCJo%2FBxXCSOayHznObvllMPyTcQridae4HVzVky6wbZnnKcZYDs%2Fu5CSi0zsODekxGtC2FP4aWOWCwDMOqMpY%2B5wKzY1ZdE0oIUvY75PFHUyttadkuUPNurNK%2Fo76WbbYMDJFLE%2BjHTT4n77aZwDEv2YrfibkWv0pmI1fceyE4UFO9QYzQLIALayxhqTF5UJ5xnry64bwCiT%2FxVt1jVPcdq4s18zOWAiZjZYXbD5e5LtIpSf%2FnbTGvCeO7HVwkQavSSCt5NIJ%2FpcbsphxyflkIPAGoc28wbHtV38ZnzTvPbCn4vIUjSMyxVKu5UmYXa8YBAUaumnHBWMK7ONTJchIPlwMtLOahAivQcpoG2S6tINWoq5FoDDPyLIuO2hOm3ii5s6sWE%2BDxdvGk8ZItTtP%2BabLtIk5stcSxAXJsKtSTuvSneU6%2FMJev57wGOqUBzrAGeFuW9e3ZPn5I%2Fi9W%2F8h7ipfo0c3Fej3HX6dkLRuK7%2BTMvfGiPCz%2FQcaO%2BPR4cLSgo8yBuEr3eeSX6CBHAjASKWsOqEGemWJGeLxCoyRYjd8N5LA8c93SvUN7PGHRr8ryQegZu2aDHjNyjQ%2BOaL8TCKzStIt1REFVjZcHovjlmO%2BHqrOHyHy5yMiz8l6ftkf%2BLRqE%2Fs8PPqO7yapmXswcOmpy&X-Amz-Signature=f6ca190e250353c034f16f8b305d8059dae258aadfdd1c7b8df6358c9fb98b7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTYWRU5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnhK1qnAoekz%2FzY%2B7bbjEPeAeMiMcC%2BZQpmA40u%2F5W6AiEA270Y29VWMi9jhdG6fqIa92DNGUh0A20X2%2FakDAx7ZokqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARrhWoIduNhhJ3MBircA3IRSw0mUR1jhr%2FDn0MLkHoMOKUlMWQEeAbVQqPm3krmqhrh8w4tpCcqc8iTHUzr%2F4mZM2yO2OrH2nA6bWACtckpvuEmaNvL0gkDMsXFU2lhdj1wBdrwUcmTmhVk5kcjuVnegKOisE%2Fnr1ybmYtfQhGTudNPtnRj5nxBHqCAKYQgBO%2BqIz4Qr8GjlRYnWynIsqHQ5ZXtknoCJo%2FBxXCSOayHznObvllMPyTcQridae4HVzVky6wbZnnKcZYDs%2Fu5CSi0zsODekxGtC2FP4aWOWCwDMOqMpY%2B5wKzY1ZdE0oIUvY75PFHUyttadkuUPNurNK%2Fo76WbbYMDJFLE%2BjHTT4n77aZwDEv2YrfibkWv0pmI1fceyE4UFO9QYzQLIALayxhqTF5UJ5xnry64bwCiT%2FxVt1jVPcdq4s18zOWAiZjZYXbD5e5LtIpSf%2FnbTGvCeO7HVwkQavSSCt5NIJ%2FpcbsphxyflkIPAGoc28wbHtV38ZnzTvPbCn4vIUjSMyxVKu5UmYXa8YBAUaumnHBWMK7ONTJchIPlwMtLOahAivQcpoG2S6tINWoq5FoDDPyLIuO2hOm3ii5s6sWE%2BDxdvGk8ZItTtP%2BabLtIk5stcSxAXJsKtSTuvSneU6%2FMJev57wGOqUBzrAGeFuW9e3ZPn5I%2Fi9W%2F8h7ipfo0c3Fej3HX6dkLRuK7%2BTMvfGiPCz%2FQcaO%2BPR4cLSgo8yBuEr3eeSX6CBHAjASKWsOqEGemWJGeLxCoyRYjd8N5LA8c93SvUN7PGHRr8ryQegZu2aDHjNyjQ%2BOaL8TCKzStIt1REFVjZcHovjlmO%2BHqrOHyHy5yMiz8l6ftkf%2BLRqE%2Fs8PPqO7yapmXswcOmpy&X-Amz-Signature=d97ecb2b9a4fe883c725133bb62fe22105a6ba75787e5fb24e000b9fed5f706e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTYWRU5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnhK1qnAoekz%2FzY%2B7bbjEPeAeMiMcC%2BZQpmA40u%2F5W6AiEA270Y29VWMi9jhdG6fqIa92DNGUh0A20X2%2FakDAx7ZokqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARrhWoIduNhhJ3MBircA3IRSw0mUR1jhr%2FDn0MLkHoMOKUlMWQEeAbVQqPm3krmqhrh8w4tpCcqc8iTHUzr%2F4mZM2yO2OrH2nA6bWACtckpvuEmaNvL0gkDMsXFU2lhdj1wBdrwUcmTmhVk5kcjuVnegKOisE%2Fnr1ybmYtfQhGTudNPtnRj5nxBHqCAKYQgBO%2BqIz4Qr8GjlRYnWynIsqHQ5ZXtknoCJo%2FBxXCSOayHznObvllMPyTcQridae4HVzVky6wbZnnKcZYDs%2Fu5CSi0zsODekxGtC2FP4aWOWCwDMOqMpY%2B5wKzY1ZdE0oIUvY75PFHUyttadkuUPNurNK%2Fo76WbbYMDJFLE%2BjHTT4n77aZwDEv2YrfibkWv0pmI1fceyE4UFO9QYzQLIALayxhqTF5UJ5xnry64bwCiT%2FxVt1jVPcdq4s18zOWAiZjZYXbD5e5LtIpSf%2FnbTGvCeO7HVwkQavSSCt5NIJ%2FpcbsphxyflkIPAGoc28wbHtV38ZnzTvPbCn4vIUjSMyxVKu5UmYXa8YBAUaumnHBWMK7ONTJchIPlwMtLOahAivQcpoG2S6tINWoq5FoDDPyLIuO2hOm3ii5s6sWE%2BDxdvGk8ZItTtP%2BabLtIk5stcSxAXJsKtSTuvSneU6%2FMJev57wGOqUBzrAGeFuW9e3ZPn5I%2Fi9W%2F8h7ipfo0c3Fej3HX6dkLRuK7%2BTMvfGiPCz%2FQcaO%2BPR4cLSgo8yBuEr3eeSX6CBHAjASKWsOqEGemWJGeLxCoyRYjd8N5LA8c93SvUN7PGHRr8ryQegZu2aDHjNyjQ%2BOaL8TCKzStIt1REFVjZcHovjlmO%2BHqrOHyHy5yMiz8l6ftkf%2BLRqE%2Fs8PPqO7yapmXswcOmpy&X-Amz-Signature=613824d9d582ff691a1d44596f11371b972c5f21b367670860e537afd519b0cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTYWRU5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnhK1qnAoekz%2FzY%2B7bbjEPeAeMiMcC%2BZQpmA40u%2F5W6AiEA270Y29VWMi9jhdG6fqIa92DNGUh0A20X2%2FakDAx7ZokqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARrhWoIduNhhJ3MBircA3IRSw0mUR1jhr%2FDn0MLkHoMOKUlMWQEeAbVQqPm3krmqhrh8w4tpCcqc8iTHUzr%2F4mZM2yO2OrH2nA6bWACtckpvuEmaNvL0gkDMsXFU2lhdj1wBdrwUcmTmhVk5kcjuVnegKOisE%2Fnr1ybmYtfQhGTudNPtnRj5nxBHqCAKYQgBO%2BqIz4Qr8GjlRYnWynIsqHQ5ZXtknoCJo%2FBxXCSOayHznObvllMPyTcQridae4HVzVky6wbZnnKcZYDs%2Fu5CSi0zsODekxGtC2FP4aWOWCwDMOqMpY%2B5wKzY1ZdE0oIUvY75PFHUyttadkuUPNurNK%2Fo76WbbYMDJFLE%2BjHTT4n77aZwDEv2YrfibkWv0pmI1fceyE4UFO9QYzQLIALayxhqTF5UJ5xnry64bwCiT%2FxVt1jVPcdq4s18zOWAiZjZYXbD5e5LtIpSf%2FnbTGvCeO7HVwkQavSSCt5NIJ%2FpcbsphxyflkIPAGoc28wbHtV38ZnzTvPbCn4vIUjSMyxVKu5UmYXa8YBAUaumnHBWMK7ONTJchIPlwMtLOahAivQcpoG2S6tINWoq5FoDDPyLIuO2hOm3ii5s6sWE%2BDxdvGk8ZItTtP%2BabLtIk5stcSxAXJsKtSTuvSneU6%2FMJev57wGOqUBzrAGeFuW9e3ZPn5I%2Fi9W%2F8h7ipfo0c3Fej3HX6dkLRuK7%2BTMvfGiPCz%2FQcaO%2BPR4cLSgo8yBuEr3eeSX6CBHAjASKWsOqEGemWJGeLxCoyRYjd8N5LA8c93SvUN7PGHRr8ryQegZu2aDHjNyjQ%2BOaL8TCKzStIt1REFVjZcHovjlmO%2BHqrOHyHy5yMiz8l6ftkf%2BLRqE%2Fs8PPqO7yapmXswcOmpy&X-Amz-Signature=61e66564762c4f06e537174cbd1285b7a3f7901a4822e3e49d798ee2e6058071&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTYWRU5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnhK1qnAoekz%2FzY%2B7bbjEPeAeMiMcC%2BZQpmA40u%2F5W6AiEA270Y29VWMi9jhdG6fqIa92DNGUh0A20X2%2FakDAx7ZokqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARrhWoIduNhhJ3MBircA3IRSw0mUR1jhr%2FDn0MLkHoMOKUlMWQEeAbVQqPm3krmqhrh8w4tpCcqc8iTHUzr%2F4mZM2yO2OrH2nA6bWACtckpvuEmaNvL0gkDMsXFU2lhdj1wBdrwUcmTmhVk5kcjuVnegKOisE%2Fnr1ybmYtfQhGTudNPtnRj5nxBHqCAKYQgBO%2BqIz4Qr8GjlRYnWynIsqHQ5ZXtknoCJo%2FBxXCSOayHznObvllMPyTcQridae4HVzVky6wbZnnKcZYDs%2Fu5CSi0zsODekxGtC2FP4aWOWCwDMOqMpY%2B5wKzY1ZdE0oIUvY75PFHUyttadkuUPNurNK%2Fo76WbbYMDJFLE%2BjHTT4n77aZwDEv2YrfibkWv0pmI1fceyE4UFO9QYzQLIALayxhqTF5UJ5xnry64bwCiT%2FxVt1jVPcdq4s18zOWAiZjZYXbD5e5LtIpSf%2FnbTGvCeO7HVwkQavSSCt5NIJ%2FpcbsphxyflkIPAGoc28wbHtV38ZnzTvPbCn4vIUjSMyxVKu5UmYXa8YBAUaumnHBWMK7ONTJchIPlwMtLOahAivQcpoG2S6tINWoq5FoDDPyLIuO2hOm3ii5s6sWE%2BDxdvGk8ZItTtP%2BabLtIk5stcSxAXJsKtSTuvSneU6%2FMJev57wGOqUBzrAGeFuW9e3ZPn5I%2Fi9W%2F8h7ipfo0c3Fej3HX6dkLRuK7%2BTMvfGiPCz%2FQcaO%2BPR4cLSgo8yBuEr3eeSX6CBHAjASKWsOqEGemWJGeLxCoyRYjd8N5LA8c93SvUN7PGHRr8ryQegZu2aDHjNyjQ%2BOaL8TCKzStIt1REFVjZcHovjlmO%2BHqrOHyHy5yMiz8l6ftkf%2BLRqE%2Fs8PPqO7yapmXswcOmpy&X-Amz-Signature=f10af485ba72a1794fb26c3257f62e10f3bfe7fa02640d4b3ad765cefde76bf3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
