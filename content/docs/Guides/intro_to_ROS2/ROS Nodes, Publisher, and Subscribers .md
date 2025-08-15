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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U567R2KK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCHwftBxtYhrJnNNxaMEygBz8geDQutp3Rgqwqi0BbB%2B4CIQCZnXYxF3gXrkHXXrZ8bfVx%2BKGR1ox4lTOLwkflbJWBpCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMFhc8qd7GXzZRTNpRKtwDerlLMEcJHB2te%2BRi6F9Bebb2WNhTRV9f%2Bi5Ag0fDQEa1EFayykAL58DDBjtiFBMzfYv50lXQh2BsLlWrGT%2F%2BtNIr2SanuNYCGZ8v4lox%2FQBJ8EyZMjvm2cgYMmTzr8FZQbxn7Mad8ibTRJGKBzk0FzYAmTLqzscytrPVzp1uQdcXfKBrpdC3PYXv58CE45S%2BxDjiOqnMNNnGS5IWBwpA%2BI8W64y%2BT0JeuwsERapAbLbG4jFavnYSDXKuBGSp7dUeV7ojXK7RsommrLO%2FklPSDCClwKXOoBOzhE9Vc9LB2QbfXAWKUjjt4Qig8DitxnrCr9C5nfV5vLR8q3LRL2g24TWOZpJ7giGSWh2X%2FBwQc8YP56GgSJyFJBik9QpYuGQmv4y93%2BL46cgo%2FZL2wypV2nfPpEu6URDHE2KNig8v%2B%2BIyDG171v95oc2ah0%2BZtFdsPyEMFAR4Gg4ynnB6%2BGk5cGdbAYprDpRRwKZK0PSLcsXwYlYMoGVJ0eU%2FuHXwTIwrKKj83WQFRuUWHuNGpSSZHW4HNPycOQIkMWwH4Lcf1tvz%2FyLJmQbaIWX7gQUeMUaU5j4YZnQWiLzCpLrTgQ20huvWQghH7kdAnsChNWmcmVxCHCUpJLNRYwhRjh4w9%2B77xAY6pgFdGakzBt3OP6w0z0FsI05MgfhOqWv5APTEZ%2FcXOvkW91B1nh3X5b5soK0LpC%2FmAd6FExob3%2Fv6dpqac6ahi%2FTqHArX85snOG4qB9WsTgIJVcB0%2BDgMu%2F2GqCKD1fcAdoV7v%2Fa%2FKXdtEx1WD04DiXvLljTH2DCHK7TVJdUeiQ2mLy8lKWxuCIkjWHZr09BYqyp%2BjA%2FzEDsd8AZA17t5%2FnTLPDHK0miv&X-Amz-Signature=36393e998533828a0cfdfd1351a5ded37bf8da2b3a42b5d5bd7d6fe654793ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U567R2KK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCHwftBxtYhrJnNNxaMEygBz8geDQutp3Rgqwqi0BbB%2B4CIQCZnXYxF3gXrkHXXrZ8bfVx%2BKGR1ox4lTOLwkflbJWBpCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMFhc8qd7GXzZRTNpRKtwDerlLMEcJHB2te%2BRi6F9Bebb2WNhTRV9f%2Bi5Ag0fDQEa1EFayykAL58DDBjtiFBMzfYv50lXQh2BsLlWrGT%2F%2BtNIr2SanuNYCGZ8v4lox%2FQBJ8EyZMjvm2cgYMmTzr8FZQbxn7Mad8ibTRJGKBzk0FzYAmTLqzscytrPVzp1uQdcXfKBrpdC3PYXv58CE45S%2BxDjiOqnMNNnGS5IWBwpA%2BI8W64y%2BT0JeuwsERapAbLbG4jFavnYSDXKuBGSp7dUeV7ojXK7RsommrLO%2FklPSDCClwKXOoBOzhE9Vc9LB2QbfXAWKUjjt4Qig8DitxnrCr9C5nfV5vLR8q3LRL2g24TWOZpJ7giGSWh2X%2FBwQc8YP56GgSJyFJBik9QpYuGQmv4y93%2BL46cgo%2FZL2wypV2nfPpEu6URDHE2KNig8v%2B%2BIyDG171v95oc2ah0%2BZtFdsPyEMFAR4Gg4ynnB6%2BGk5cGdbAYprDpRRwKZK0PSLcsXwYlYMoGVJ0eU%2FuHXwTIwrKKj83WQFRuUWHuNGpSSZHW4HNPycOQIkMWwH4Lcf1tvz%2FyLJmQbaIWX7gQUeMUaU5j4YZnQWiLzCpLrTgQ20huvWQghH7kdAnsChNWmcmVxCHCUpJLNRYwhRjh4w9%2B77xAY6pgFdGakzBt3OP6w0z0FsI05MgfhOqWv5APTEZ%2FcXOvkW91B1nh3X5b5soK0LpC%2FmAd6FExob3%2Fv6dpqac6ahi%2FTqHArX85snOG4qB9WsTgIJVcB0%2BDgMu%2F2GqCKD1fcAdoV7v%2Fa%2FKXdtEx1WD04DiXvLljTH2DCHK7TVJdUeiQ2mLy8lKWxuCIkjWHZr09BYqyp%2BjA%2FzEDsd8AZA17t5%2FnTLPDHK0miv&X-Amz-Signature=530d8def5585bc6a3e7cb69af589e5c9fba7336476324d3435644cb3a9edf9d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U567R2KK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCHwftBxtYhrJnNNxaMEygBz8geDQutp3Rgqwqi0BbB%2B4CIQCZnXYxF3gXrkHXXrZ8bfVx%2BKGR1ox4lTOLwkflbJWBpCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMFhc8qd7GXzZRTNpRKtwDerlLMEcJHB2te%2BRi6F9Bebb2WNhTRV9f%2Bi5Ag0fDQEa1EFayykAL58DDBjtiFBMzfYv50lXQh2BsLlWrGT%2F%2BtNIr2SanuNYCGZ8v4lox%2FQBJ8EyZMjvm2cgYMmTzr8FZQbxn7Mad8ibTRJGKBzk0FzYAmTLqzscytrPVzp1uQdcXfKBrpdC3PYXv58CE45S%2BxDjiOqnMNNnGS5IWBwpA%2BI8W64y%2BT0JeuwsERapAbLbG4jFavnYSDXKuBGSp7dUeV7ojXK7RsommrLO%2FklPSDCClwKXOoBOzhE9Vc9LB2QbfXAWKUjjt4Qig8DitxnrCr9C5nfV5vLR8q3LRL2g24TWOZpJ7giGSWh2X%2FBwQc8YP56GgSJyFJBik9QpYuGQmv4y93%2BL46cgo%2FZL2wypV2nfPpEu6URDHE2KNig8v%2B%2BIyDG171v95oc2ah0%2BZtFdsPyEMFAR4Gg4ynnB6%2BGk5cGdbAYprDpRRwKZK0PSLcsXwYlYMoGVJ0eU%2FuHXwTIwrKKj83WQFRuUWHuNGpSSZHW4HNPycOQIkMWwH4Lcf1tvz%2FyLJmQbaIWX7gQUeMUaU5j4YZnQWiLzCpLrTgQ20huvWQghH7kdAnsChNWmcmVxCHCUpJLNRYwhRjh4w9%2B77xAY6pgFdGakzBt3OP6w0z0FsI05MgfhOqWv5APTEZ%2FcXOvkW91B1nh3X5b5soK0LpC%2FmAd6FExob3%2Fv6dpqac6ahi%2FTqHArX85snOG4qB9WsTgIJVcB0%2BDgMu%2F2GqCKD1fcAdoV7v%2Fa%2FKXdtEx1WD04DiXvLljTH2DCHK7TVJdUeiQ2mLy8lKWxuCIkjWHZr09BYqyp%2BjA%2FzEDsd8AZA17t5%2FnTLPDHK0miv&X-Amz-Signature=37fa302415427fbd7f36dfea54ef1220d59b096117c90e27123697e14b2eeddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U567R2KK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCHwftBxtYhrJnNNxaMEygBz8geDQutp3Rgqwqi0BbB%2B4CIQCZnXYxF3gXrkHXXrZ8bfVx%2BKGR1ox4lTOLwkflbJWBpCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMFhc8qd7GXzZRTNpRKtwDerlLMEcJHB2te%2BRi6F9Bebb2WNhTRV9f%2Bi5Ag0fDQEa1EFayykAL58DDBjtiFBMzfYv50lXQh2BsLlWrGT%2F%2BtNIr2SanuNYCGZ8v4lox%2FQBJ8EyZMjvm2cgYMmTzr8FZQbxn7Mad8ibTRJGKBzk0FzYAmTLqzscytrPVzp1uQdcXfKBrpdC3PYXv58CE45S%2BxDjiOqnMNNnGS5IWBwpA%2BI8W64y%2BT0JeuwsERapAbLbG4jFavnYSDXKuBGSp7dUeV7ojXK7RsommrLO%2FklPSDCClwKXOoBOzhE9Vc9LB2QbfXAWKUjjt4Qig8DitxnrCr9C5nfV5vLR8q3LRL2g24TWOZpJ7giGSWh2X%2FBwQc8YP56GgSJyFJBik9QpYuGQmv4y93%2BL46cgo%2FZL2wypV2nfPpEu6URDHE2KNig8v%2B%2BIyDG171v95oc2ah0%2BZtFdsPyEMFAR4Gg4ynnB6%2BGk5cGdbAYprDpRRwKZK0PSLcsXwYlYMoGVJ0eU%2FuHXwTIwrKKj83WQFRuUWHuNGpSSZHW4HNPycOQIkMWwH4Lcf1tvz%2FyLJmQbaIWX7gQUeMUaU5j4YZnQWiLzCpLrTgQ20huvWQghH7kdAnsChNWmcmVxCHCUpJLNRYwhRjh4w9%2B77xAY6pgFdGakzBt3OP6w0z0FsI05MgfhOqWv5APTEZ%2FcXOvkW91B1nh3X5b5soK0LpC%2FmAd6FExob3%2Fv6dpqac6ahi%2FTqHArX85snOG4qB9WsTgIJVcB0%2BDgMu%2F2GqCKD1fcAdoV7v%2Fa%2FKXdtEx1WD04DiXvLljTH2DCHK7TVJdUeiQ2mLy8lKWxuCIkjWHZr09BYqyp%2BjA%2FzEDsd8AZA17t5%2FnTLPDHK0miv&X-Amz-Signature=7f6b7bc2210744be3aab895ad9e26515b3555d0a8cc746826f4f3227c8f7d6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U567R2KK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCHwftBxtYhrJnNNxaMEygBz8geDQutp3Rgqwqi0BbB%2B4CIQCZnXYxF3gXrkHXXrZ8bfVx%2BKGR1ox4lTOLwkflbJWBpCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMFhc8qd7GXzZRTNpRKtwDerlLMEcJHB2te%2BRi6F9Bebb2WNhTRV9f%2Bi5Ag0fDQEa1EFayykAL58DDBjtiFBMzfYv50lXQh2BsLlWrGT%2F%2BtNIr2SanuNYCGZ8v4lox%2FQBJ8EyZMjvm2cgYMmTzr8FZQbxn7Mad8ibTRJGKBzk0FzYAmTLqzscytrPVzp1uQdcXfKBrpdC3PYXv58CE45S%2BxDjiOqnMNNnGS5IWBwpA%2BI8W64y%2BT0JeuwsERapAbLbG4jFavnYSDXKuBGSp7dUeV7ojXK7RsommrLO%2FklPSDCClwKXOoBOzhE9Vc9LB2QbfXAWKUjjt4Qig8DitxnrCr9C5nfV5vLR8q3LRL2g24TWOZpJ7giGSWh2X%2FBwQc8YP56GgSJyFJBik9QpYuGQmv4y93%2BL46cgo%2FZL2wypV2nfPpEu6URDHE2KNig8v%2B%2BIyDG171v95oc2ah0%2BZtFdsPyEMFAR4Gg4ynnB6%2BGk5cGdbAYprDpRRwKZK0PSLcsXwYlYMoGVJ0eU%2FuHXwTIwrKKj83WQFRuUWHuNGpSSZHW4HNPycOQIkMWwH4Lcf1tvz%2FyLJmQbaIWX7gQUeMUaU5j4YZnQWiLzCpLrTgQ20huvWQghH7kdAnsChNWmcmVxCHCUpJLNRYwhRjh4w9%2B77xAY6pgFdGakzBt3OP6w0z0FsI05MgfhOqWv5APTEZ%2FcXOvkW91B1nh3X5b5soK0LpC%2FmAd6FExob3%2Fv6dpqac6ahi%2FTqHArX85snOG4qB9WsTgIJVcB0%2BDgMu%2F2GqCKD1fcAdoV7v%2Fa%2FKXdtEx1WD04DiXvLljTH2DCHK7TVJdUeiQ2mLy8lKWxuCIkjWHZr09BYqyp%2BjA%2FzEDsd8AZA17t5%2FnTLPDHK0miv&X-Amz-Signature=2ab0c60979f1a1e540563827d08ac7ecfe0ee2fcf589ad37969440b267275ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U567R2KK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCHwftBxtYhrJnNNxaMEygBz8geDQutp3Rgqwqi0BbB%2B4CIQCZnXYxF3gXrkHXXrZ8bfVx%2BKGR1ox4lTOLwkflbJWBpCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMFhc8qd7GXzZRTNpRKtwDerlLMEcJHB2te%2BRi6F9Bebb2WNhTRV9f%2Bi5Ag0fDQEa1EFayykAL58DDBjtiFBMzfYv50lXQh2BsLlWrGT%2F%2BtNIr2SanuNYCGZ8v4lox%2FQBJ8EyZMjvm2cgYMmTzr8FZQbxn7Mad8ibTRJGKBzk0FzYAmTLqzscytrPVzp1uQdcXfKBrpdC3PYXv58CE45S%2BxDjiOqnMNNnGS5IWBwpA%2BI8W64y%2BT0JeuwsERapAbLbG4jFavnYSDXKuBGSp7dUeV7ojXK7RsommrLO%2FklPSDCClwKXOoBOzhE9Vc9LB2QbfXAWKUjjt4Qig8DitxnrCr9C5nfV5vLR8q3LRL2g24TWOZpJ7giGSWh2X%2FBwQc8YP56GgSJyFJBik9QpYuGQmv4y93%2BL46cgo%2FZL2wypV2nfPpEu6URDHE2KNig8v%2B%2BIyDG171v95oc2ah0%2BZtFdsPyEMFAR4Gg4ynnB6%2BGk5cGdbAYprDpRRwKZK0PSLcsXwYlYMoGVJ0eU%2FuHXwTIwrKKj83WQFRuUWHuNGpSSZHW4HNPycOQIkMWwH4Lcf1tvz%2FyLJmQbaIWX7gQUeMUaU5j4YZnQWiLzCpLrTgQ20huvWQghH7kdAnsChNWmcmVxCHCUpJLNRYwhRjh4w9%2B77xAY6pgFdGakzBt3OP6w0z0FsI05MgfhOqWv5APTEZ%2FcXOvkW91B1nh3X5b5soK0LpC%2FmAd6FExob3%2Fv6dpqac6ahi%2FTqHArX85snOG4qB9WsTgIJVcB0%2BDgMu%2F2GqCKD1fcAdoV7v%2Fa%2FKXdtEx1WD04DiXvLljTH2DCHK7TVJdUeiQ2mLy8lKWxuCIkjWHZr09BYqyp%2BjA%2FzEDsd8AZA17t5%2FnTLPDHK0miv&X-Amz-Signature=fa845b4e43df59d3fd56c005bfcd81c362ec26ee18ff1297cb204017dfcc9f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U567R2KK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCHwftBxtYhrJnNNxaMEygBz8geDQutp3Rgqwqi0BbB%2B4CIQCZnXYxF3gXrkHXXrZ8bfVx%2BKGR1ox4lTOLwkflbJWBpCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMFhc8qd7GXzZRTNpRKtwDerlLMEcJHB2te%2BRi6F9Bebb2WNhTRV9f%2Bi5Ag0fDQEa1EFayykAL58DDBjtiFBMzfYv50lXQh2BsLlWrGT%2F%2BtNIr2SanuNYCGZ8v4lox%2FQBJ8EyZMjvm2cgYMmTzr8FZQbxn7Mad8ibTRJGKBzk0FzYAmTLqzscytrPVzp1uQdcXfKBrpdC3PYXv58CE45S%2BxDjiOqnMNNnGS5IWBwpA%2BI8W64y%2BT0JeuwsERapAbLbG4jFavnYSDXKuBGSp7dUeV7ojXK7RsommrLO%2FklPSDCClwKXOoBOzhE9Vc9LB2QbfXAWKUjjt4Qig8DitxnrCr9C5nfV5vLR8q3LRL2g24TWOZpJ7giGSWh2X%2FBwQc8YP56GgSJyFJBik9QpYuGQmv4y93%2BL46cgo%2FZL2wypV2nfPpEu6URDHE2KNig8v%2B%2BIyDG171v95oc2ah0%2BZtFdsPyEMFAR4Gg4ynnB6%2BGk5cGdbAYprDpRRwKZK0PSLcsXwYlYMoGVJ0eU%2FuHXwTIwrKKj83WQFRuUWHuNGpSSZHW4HNPycOQIkMWwH4Lcf1tvz%2FyLJmQbaIWX7gQUeMUaU5j4YZnQWiLzCpLrTgQ20huvWQghH7kdAnsChNWmcmVxCHCUpJLNRYwhRjh4w9%2B77xAY6pgFdGakzBt3OP6w0z0FsI05MgfhOqWv5APTEZ%2FcXOvkW91B1nh3X5b5soK0LpC%2FmAd6FExob3%2Fv6dpqac6ahi%2FTqHArX85snOG4qB9WsTgIJVcB0%2BDgMu%2F2GqCKD1fcAdoV7v%2Fa%2FKXdtEx1WD04DiXvLljTH2DCHK7TVJdUeiQ2mLy8lKWxuCIkjWHZr09BYqyp%2BjA%2FzEDsd8AZA17t5%2FnTLPDHK0miv&X-Amz-Signature=c0938b09d2162599b1c6524d3049cd11642f7c9a61f96d73d3c0a89a1ba12d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U567R2KK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCHwftBxtYhrJnNNxaMEygBz8geDQutp3Rgqwqi0BbB%2B4CIQCZnXYxF3gXrkHXXrZ8bfVx%2BKGR1ox4lTOLwkflbJWBpCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMFhc8qd7GXzZRTNpRKtwDerlLMEcJHB2te%2BRi6F9Bebb2WNhTRV9f%2Bi5Ag0fDQEa1EFayykAL58DDBjtiFBMzfYv50lXQh2BsLlWrGT%2F%2BtNIr2SanuNYCGZ8v4lox%2FQBJ8EyZMjvm2cgYMmTzr8FZQbxn7Mad8ibTRJGKBzk0FzYAmTLqzscytrPVzp1uQdcXfKBrpdC3PYXv58CE45S%2BxDjiOqnMNNnGS5IWBwpA%2BI8W64y%2BT0JeuwsERapAbLbG4jFavnYSDXKuBGSp7dUeV7ojXK7RsommrLO%2FklPSDCClwKXOoBOzhE9Vc9LB2QbfXAWKUjjt4Qig8DitxnrCr9C5nfV5vLR8q3LRL2g24TWOZpJ7giGSWh2X%2FBwQc8YP56GgSJyFJBik9QpYuGQmv4y93%2BL46cgo%2FZL2wypV2nfPpEu6URDHE2KNig8v%2B%2BIyDG171v95oc2ah0%2BZtFdsPyEMFAR4Gg4ynnB6%2BGk5cGdbAYprDpRRwKZK0PSLcsXwYlYMoGVJ0eU%2FuHXwTIwrKKj83WQFRuUWHuNGpSSZHW4HNPycOQIkMWwH4Lcf1tvz%2FyLJmQbaIWX7gQUeMUaU5j4YZnQWiLzCpLrTgQ20huvWQghH7kdAnsChNWmcmVxCHCUpJLNRYwhRjh4w9%2B77xAY6pgFdGakzBt3OP6w0z0FsI05MgfhOqWv5APTEZ%2FcXOvkW91B1nh3X5b5soK0LpC%2FmAd6FExob3%2Fv6dpqac6ahi%2FTqHArX85snOG4qB9WsTgIJVcB0%2BDgMu%2F2GqCKD1fcAdoV7v%2Fa%2FKXdtEx1WD04DiXvLljTH2DCHK7TVJdUeiQ2mLy8lKWxuCIkjWHZr09BYqyp%2BjA%2FzEDsd8AZA17t5%2FnTLPDHK0miv&X-Amz-Signature=de617fbb29e8e2006982e814eda26a78379dc32efae8135a93bc5b2951072dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
