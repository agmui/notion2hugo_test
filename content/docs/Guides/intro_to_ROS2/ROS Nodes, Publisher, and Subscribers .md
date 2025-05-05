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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZOMFRLY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE96k4ZQJNF5JN%2FAb5qpp1nZpghj%2B5PrCtcYdyn1lZFBAiAAkVBAhTwCogTT52fwlQZUbKIt6qTSiCGeA5hHNWoD%2Byr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMyNDFcTU7euQ8qaD9KtwDhIprLBQThm2bb1GH%2Bk6E%2FFX3NOgjmWoWa7hMJZtG95Yd5Y%2BHgosAWE6T%2FjEesesK2AG9xIIVde97jix8RFAZ7d8C5WIAm33m77gDuSzybLC29u7wgoieiCHhGXI7RrFbB01tTtz14QgCUyszQyC1u5F%2BHnz1MliJydR93xS9lIqXtgsD2CrOnNS01LEo3%2BVB0xOl2QVRYXRcL6ZTWlGsHYNKBh6uN947rb7XIqOB%2BjkCFmqFk3ZMiPPqCtWtq4A6Ut%2FNE%2Fv3pb7rw8mtyBkgQEd0FmziLEBzf4phobz4Pp6SpcVDu%2F6WJh%2B57cdITl8F6cYNaSf2DxLiAzz9j%2FhSMFbuDNvu0oQ0eziM%2F4lXYEEuv7M5fuGCumhWGgfbtNtpUOPycLtReWbQdStQpWsCSVHcgl0ta6gcgnO9xnfJeeyd1mwewjavsxz9cksRtTPaZSYrzyFQcfsN65kJnbH2%2F3y0ZxuimmAowdJLOaNoc8X69ep%2BG5qOnL%2Be1oqCYmEc%2BN1qKsGvdcVgO1YPWSP7Pnjp0%2Fk7o5ZNaz2o5WE97KaT63Paz9FEAm7lxKzFpHk75waLNNwS4v2GRzJjs8ZDTZprtxrs2Ils7TA2B9gyEk%2BApesT7G4bk0VKgZ8wzKzfwAY6pgHgW49dhIkvLbp7U%2Bd3nJvw2ESleQQ2tBqfz9q0UH6eOxFvThfiDfWKDo6hjYhvp%2BaDDEtU%2FLkdr2F4HJUYGCmW%2BBVL0%2BVichVmF7xbJkz8TQripUDXmF8pnry3kbdW9t%2B9Rl%2Fs2j0Y%2Bob8SFaR8mDZRJ%2Bafwl7LwFM107p5oreS649nxLMv4c2Xt4TBGd9fGO2OWzrM%2FThTWSQafX8IeR0NJU2Fxrb&X-Amz-Signature=009fdb3553460dfba32148d51104793979928028e9042c841add34436acc8f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZOMFRLY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE96k4ZQJNF5JN%2FAb5qpp1nZpghj%2B5PrCtcYdyn1lZFBAiAAkVBAhTwCogTT52fwlQZUbKIt6qTSiCGeA5hHNWoD%2Byr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMyNDFcTU7euQ8qaD9KtwDhIprLBQThm2bb1GH%2Bk6E%2FFX3NOgjmWoWa7hMJZtG95Yd5Y%2BHgosAWE6T%2FjEesesK2AG9xIIVde97jix8RFAZ7d8C5WIAm33m77gDuSzybLC29u7wgoieiCHhGXI7RrFbB01tTtz14QgCUyszQyC1u5F%2BHnz1MliJydR93xS9lIqXtgsD2CrOnNS01LEo3%2BVB0xOl2QVRYXRcL6ZTWlGsHYNKBh6uN947rb7XIqOB%2BjkCFmqFk3ZMiPPqCtWtq4A6Ut%2FNE%2Fv3pb7rw8mtyBkgQEd0FmziLEBzf4phobz4Pp6SpcVDu%2F6WJh%2B57cdITl8F6cYNaSf2DxLiAzz9j%2FhSMFbuDNvu0oQ0eziM%2F4lXYEEuv7M5fuGCumhWGgfbtNtpUOPycLtReWbQdStQpWsCSVHcgl0ta6gcgnO9xnfJeeyd1mwewjavsxz9cksRtTPaZSYrzyFQcfsN65kJnbH2%2F3y0ZxuimmAowdJLOaNoc8X69ep%2BG5qOnL%2Be1oqCYmEc%2BN1qKsGvdcVgO1YPWSP7Pnjp0%2Fk7o5ZNaz2o5WE97KaT63Paz9FEAm7lxKzFpHk75waLNNwS4v2GRzJjs8ZDTZprtxrs2Ils7TA2B9gyEk%2BApesT7G4bk0VKgZ8wzKzfwAY6pgHgW49dhIkvLbp7U%2Bd3nJvw2ESleQQ2tBqfz9q0UH6eOxFvThfiDfWKDo6hjYhvp%2BaDDEtU%2FLkdr2F4HJUYGCmW%2BBVL0%2BVichVmF7xbJkz8TQripUDXmF8pnry3kbdW9t%2B9Rl%2Fs2j0Y%2Bob8SFaR8mDZRJ%2Bafwl7LwFM107p5oreS649nxLMv4c2Xt4TBGd9fGO2OWzrM%2FThTWSQafX8IeR0NJU2Fxrb&X-Amz-Signature=a6947e8d65da2816925410b7f8dbddbb8b4e445f2716c8dc2b3bdbe4e012e966&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZOMFRLY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE96k4ZQJNF5JN%2FAb5qpp1nZpghj%2B5PrCtcYdyn1lZFBAiAAkVBAhTwCogTT52fwlQZUbKIt6qTSiCGeA5hHNWoD%2Byr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMyNDFcTU7euQ8qaD9KtwDhIprLBQThm2bb1GH%2Bk6E%2FFX3NOgjmWoWa7hMJZtG95Yd5Y%2BHgosAWE6T%2FjEesesK2AG9xIIVde97jix8RFAZ7d8C5WIAm33m77gDuSzybLC29u7wgoieiCHhGXI7RrFbB01tTtz14QgCUyszQyC1u5F%2BHnz1MliJydR93xS9lIqXtgsD2CrOnNS01LEo3%2BVB0xOl2QVRYXRcL6ZTWlGsHYNKBh6uN947rb7XIqOB%2BjkCFmqFk3ZMiPPqCtWtq4A6Ut%2FNE%2Fv3pb7rw8mtyBkgQEd0FmziLEBzf4phobz4Pp6SpcVDu%2F6WJh%2B57cdITl8F6cYNaSf2DxLiAzz9j%2FhSMFbuDNvu0oQ0eziM%2F4lXYEEuv7M5fuGCumhWGgfbtNtpUOPycLtReWbQdStQpWsCSVHcgl0ta6gcgnO9xnfJeeyd1mwewjavsxz9cksRtTPaZSYrzyFQcfsN65kJnbH2%2F3y0ZxuimmAowdJLOaNoc8X69ep%2BG5qOnL%2Be1oqCYmEc%2BN1qKsGvdcVgO1YPWSP7Pnjp0%2Fk7o5ZNaz2o5WE97KaT63Paz9FEAm7lxKzFpHk75waLNNwS4v2GRzJjs8ZDTZprtxrs2Ils7TA2B9gyEk%2BApesT7G4bk0VKgZ8wzKzfwAY6pgHgW49dhIkvLbp7U%2Bd3nJvw2ESleQQ2tBqfz9q0UH6eOxFvThfiDfWKDo6hjYhvp%2BaDDEtU%2FLkdr2F4HJUYGCmW%2BBVL0%2BVichVmF7xbJkz8TQripUDXmF8pnry3kbdW9t%2B9Rl%2Fs2j0Y%2Bob8SFaR8mDZRJ%2Bafwl7LwFM107p5oreS649nxLMv4c2Xt4TBGd9fGO2OWzrM%2FThTWSQafX8IeR0NJU2Fxrb&X-Amz-Signature=ccb0a60301f7d6c6534283c33335aa64f1a254f620571b3796af2bf874891d3c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZOMFRLY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE96k4ZQJNF5JN%2FAb5qpp1nZpghj%2B5PrCtcYdyn1lZFBAiAAkVBAhTwCogTT52fwlQZUbKIt6qTSiCGeA5hHNWoD%2Byr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMyNDFcTU7euQ8qaD9KtwDhIprLBQThm2bb1GH%2Bk6E%2FFX3NOgjmWoWa7hMJZtG95Yd5Y%2BHgosAWE6T%2FjEesesK2AG9xIIVde97jix8RFAZ7d8C5WIAm33m77gDuSzybLC29u7wgoieiCHhGXI7RrFbB01tTtz14QgCUyszQyC1u5F%2BHnz1MliJydR93xS9lIqXtgsD2CrOnNS01LEo3%2BVB0xOl2QVRYXRcL6ZTWlGsHYNKBh6uN947rb7XIqOB%2BjkCFmqFk3ZMiPPqCtWtq4A6Ut%2FNE%2Fv3pb7rw8mtyBkgQEd0FmziLEBzf4phobz4Pp6SpcVDu%2F6WJh%2B57cdITl8F6cYNaSf2DxLiAzz9j%2FhSMFbuDNvu0oQ0eziM%2F4lXYEEuv7M5fuGCumhWGgfbtNtpUOPycLtReWbQdStQpWsCSVHcgl0ta6gcgnO9xnfJeeyd1mwewjavsxz9cksRtTPaZSYrzyFQcfsN65kJnbH2%2F3y0ZxuimmAowdJLOaNoc8X69ep%2BG5qOnL%2Be1oqCYmEc%2BN1qKsGvdcVgO1YPWSP7Pnjp0%2Fk7o5ZNaz2o5WE97KaT63Paz9FEAm7lxKzFpHk75waLNNwS4v2GRzJjs8ZDTZprtxrs2Ils7TA2B9gyEk%2BApesT7G4bk0VKgZ8wzKzfwAY6pgHgW49dhIkvLbp7U%2Bd3nJvw2ESleQQ2tBqfz9q0UH6eOxFvThfiDfWKDo6hjYhvp%2BaDDEtU%2FLkdr2F4HJUYGCmW%2BBVL0%2BVichVmF7xbJkz8TQripUDXmF8pnry3kbdW9t%2B9Rl%2Fs2j0Y%2Bob8SFaR8mDZRJ%2Bafwl7LwFM107p5oreS649nxLMv4c2Xt4TBGd9fGO2OWzrM%2FThTWSQafX8IeR0NJU2Fxrb&X-Amz-Signature=7592367b15a4c127b114b453736e95ffe808b01ae2235df1c846dd5ef17e3a41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZOMFRLY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE96k4ZQJNF5JN%2FAb5qpp1nZpghj%2B5PrCtcYdyn1lZFBAiAAkVBAhTwCogTT52fwlQZUbKIt6qTSiCGeA5hHNWoD%2Byr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMyNDFcTU7euQ8qaD9KtwDhIprLBQThm2bb1GH%2Bk6E%2FFX3NOgjmWoWa7hMJZtG95Yd5Y%2BHgosAWE6T%2FjEesesK2AG9xIIVde97jix8RFAZ7d8C5WIAm33m77gDuSzybLC29u7wgoieiCHhGXI7RrFbB01tTtz14QgCUyszQyC1u5F%2BHnz1MliJydR93xS9lIqXtgsD2CrOnNS01LEo3%2BVB0xOl2QVRYXRcL6ZTWlGsHYNKBh6uN947rb7XIqOB%2BjkCFmqFk3ZMiPPqCtWtq4A6Ut%2FNE%2Fv3pb7rw8mtyBkgQEd0FmziLEBzf4phobz4Pp6SpcVDu%2F6WJh%2B57cdITl8F6cYNaSf2DxLiAzz9j%2FhSMFbuDNvu0oQ0eziM%2F4lXYEEuv7M5fuGCumhWGgfbtNtpUOPycLtReWbQdStQpWsCSVHcgl0ta6gcgnO9xnfJeeyd1mwewjavsxz9cksRtTPaZSYrzyFQcfsN65kJnbH2%2F3y0ZxuimmAowdJLOaNoc8X69ep%2BG5qOnL%2Be1oqCYmEc%2BN1qKsGvdcVgO1YPWSP7Pnjp0%2Fk7o5ZNaz2o5WE97KaT63Paz9FEAm7lxKzFpHk75waLNNwS4v2GRzJjs8ZDTZprtxrs2Ils7TA2B9gyEk%2BApesT7G4bk0VKgZ8wzKzfwAY6pgHgW49dhIkvLbp7U%2Bd3nJvw2ESleQQ2tBqfz9q0UH6eOxFvThfiDfWKDo6hjYhvp%2BaDDEtU%2FLkdr2F4HJUYGCmW%2BBVL0%2BVichVmF7xbJkz8TQripUDXmF8pnry3kbdW9t%2B9Rl%2Fs2j0Y%2Bob8SFaR8mDZRJ%2Bafwl7LwFM107p5oreS649nxLMv4c2Xt4TBGd9fGO2OWzrM%2FThTWSQafX8IeR0NJU2Fxrb&X-Amz-Signature=89e5897999f04a46984b2dc2a165087a18dd6518cba76a2b241b9d9fdd7fcd43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZOMFRLY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE96k4ZQJNF5JN%2FAb5qpp1nZpghj%2B5PrCtcYdyn1lZFBAiAAkVBAhTwCogTT52fwlQZUbKIt6qTSiCGeA5hHNWoD%2Byr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMyNDFcTU7euQ8qaD9KtwDhIprLBQThm2bb1GH%2Bk6E%2FFX3NOgjmWoWa7hMJZtG95Yd5Y%2BHgosAWE6T%2FjEesesK2AG9xIIVde97jix8RFAZ7d8C5WIAm33m77gDuSzybLC29u7wgoieiCHhGXI7RrFbB01tTtz14QgCUyszQyC1u5F%2BHnz1MliJydR93xS9lIqXtgsD2CrOnNS01LEo3%2BVB0xOl2QVRYXRcL6ZTWlGsHYNKBh6uN947rb7XIqOB%2BjkCFmqFk3ZMiPPqCtWtq4A6Ut%2FNE%2Fv3pb7rw8mtyBkgQEd0FmziLEBzf4phobz4Pp6SpcVDu%2F6WJh%2B57cdITl8F6cYNaSf2DxLiAzz9j%2FhSMFbuDNvu0oQ0eziM%2F4lXYEEuv7M5fuGCumhWGgfbtNtpUOPycLtReWbQdStQpWsCSVHcgl0ta6gcgnO9xnfJeeyd1mwewjavsxz9cksRtTPaZSYrzyFQcfsN65kJnbH2%2F3y0ZxuimmAowdJLOaNoc8X69ep%2BG5qOnL%2Be1oqCYmEc%2BN1qKsGvdcVgO1YPWSP7Pnjp0%2Fk7o5ZNaz2o5WE97KaT63Paz9FEAm7lxKzFpHk75waLNNwS4v2GRzJjs8ZDTZprtxrs2Ils7TA2B9gyEk%2BApesT7G4bk0VKgZ8wzKzfwAY6pgHgW49dhIkvLbp7U%2Bd3nJvw2ESleQQ2tBqfz9q0UH6eOxFvThfiDfWKDo6hjYhvp%2BaDDEtU%2FLkdr2F4HJUYGCmW%2BBVL0%2BVichVmF7xbJkz8TQripUDXmF8pnry3kbdW9t%2B9Rl%2Fs2j0Y%2Bob8SFaR8mDZRJ%2Bafwl7LwFM107p5oreS649nxLMv4c2Xt4TBGd9fGO2OWzrM%2FThTWSQafX8IeR0NJU2Fxrb&X-Amz-Signature=12fe473b3f5eeeec5f2eb87b86af7c910ca563d816d2a4379f67b29228dd9bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZOMFRLY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE96k4ZQJNF5JN%2FAb5qpp1nZpghj%2B5PrCtcYdyn1lZFBAiAAkVBAhTwCogTT52fwlQZUbKIt6qTSiCGeA5hHNWoD%2Byr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMyNDFcTU7euQ8qaD9KtwDhIprLBQThm2bb1GH%2Bk6E%2FFX3NOgjmWoWa7hMJZtG95Yd5Y%2BHgosAWE6T%2FjEesesK2AG9xIIVde97jix8RFAZ7d8C5WIAm33m77gDuSzybLC29u7wgoieiCHhGXI7RrFbB01tTtz14QgCUyszQyC1u5F%2BHnz1MliJydR93xS9lIqXtgsD2CrOnNS01LEo3%2BVB0xOl2QVRYXRcL6ZTWlGsHYNKBh6uN947rb7XIqOB%2BjkCFmqFk3ZMiPPqCtWtq4A6Ut%2FNE%2Fv3pb7rw8mtyBkgQEd0FmziLEBzf4phobz4Pp6SpcVDu%2F6WJh%2B57cdITl8F6cYNaSf2DxLiAzz9j%2FhSMFbuDNvu0oQ0eziM%2F4lXYEEuv7M5fuGCumhWGgfbtNtpUOPycLtReWbQdStQpWsCSVHcgl0ta6gcgnO9xnfJeeyd1mwewjavsxz9cksRtTPaZSYrzyFQcfsN65kJnbH2%2F3y0ZxuimmAowdJLOaNoc8X69ep%2BG5qOnL%2Be1oqCYmEc%2BN1qKsGvdcVgO1YPWSP7Pnjp0%2Fk7o5ZNaz2o5WE97KaT63Paz9FEAm7lxKzFpHk75waLNNwS4v2GRzJjs8ZDTZprtxrs2Ils7TA2B9gyEk%2BApesT7G4bk0VKgZ8wzKzfwAY6pgHgW49dhIkvLbp7U%2Bd3nJvw2ESleQQ2tBqfz9q0UH6eOxFvThfiDfWKDo6hjYhvp%2BaDDEtU%2FLkdr2F4HJUYGCmW%2BBVL0%2BVichVmF7xbJkz8TQripUDXmF8pnry3kbdW9t%2B9Rl%2Fs2j0Y%2Bob8SFaR8mDZRJ%2Bafwl7LwFM107p5oreS649nxLMv4c2Xt4TBGd9fGO2OWzrM%2FThTWSQafX8IeR0NJU2Fxrb&X-Amz-Signature=083e92bf34450bd57cdfdac99556c222d129417fdbe073e7cf234eef57d74faa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZOMFRLY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE96k4ZQJNF5JN%2FAb5qpp1nZpghj%2B5PrCtcYdyn1lZFBAiAAkVBAhTwCogTT52fwlQZUbKIt6qTSiCGeA5hHNWoD%2Byr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMyNDFcTU7euQ8qaD9KtwDhIprLBQThm2bb1GH%2Bk6E%2FFX3NOgjmWoWa7hMJZtG95Yd5Y%2BHgosAWE6T%2FjEesesK2AG9xIIVde97jix8RFAZ7d8C5WIAm33m77gDuSzybLC29u7wgoieiCHhGXI7RrFbB01tTtz14QgCUyszQyC1u5F%2BHnz1MliJydR93xS9lIqXtgsD2CrOnNS01LEo3%2BVB0xOl2QVRYXRcL6ZTWlGsHYNKBh6uN947rb7XIqOB%2BjkCFmqFk3ZMiPPqCtWtq4A6Ut%2FNE%2Fv3pb7rw8mtyBkgQEd0FmziLEBzf4phobz4Pp6SpcVDu%2F6WJh%2B57cdITl8F6cYNaSf2DxLiAzz9j%2FhSMFbuDNvu0oQ0eziM%2F4lXYEEuv7M5fuGCumhWGgfbtNtpUOPycLtReWbQdStQpWsCSVHcgl0ta6gcgnO9xnfJeeyd1mwewjavsxz9cksRtTPaZSYrzyFQcfsN65kJnbH2%2F3y0ZxuimmAowdJLOaNoc8X69ep%2BG5qOnL%2Be1oqCYmEc%2BN1qKsGvdcVgO1YPWSP7Pnjp0%2Fk7o5ZNaz2o5WE97KaT63Paz9FEAm7lxKzFpHk75waLNNwS4v2GRzJjs8ZDTZprtxrs2Ils7TA2B9gyEk%2BApesT7G4bk0VKgZ8wzKzfwAY6pgHgW49dhIkvLbp7U%2Bd3nJvw2ESleQQ2tBqfz9q0UH6eOxFvThfiDfWKDo6hjYhvp%2BaDDEtU%2FLkdr2F4HJUYGCmW%2BBVL0%2BVichVmF7xbJkz8TQripUDXmF8pnry3kbdW9t%2B9Rl%2Fs2j0Y%2Bob8SFaR8mDZRJ%2Bafwl7LwFM107p5oreS649nxLMv4c2Xt4TBGd9fGO2OWzrM%2FThTWSQafX8IeR0NJU2Fxrb&X-Amz-Signature=5b79d97dec872ca6f6c7631531c8141713c2376195edf7f338122933760a4a5a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
