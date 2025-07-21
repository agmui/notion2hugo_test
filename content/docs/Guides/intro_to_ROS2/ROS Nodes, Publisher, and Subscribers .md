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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCJJJY6T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8fx2EKYoP3zFh8h8MjKey7mRlwB7zHxo%2BpiPXnLD2SAiEAkXiYD8V19XQlixtOeXZ%2B1%2FVd%2F%2FS9H9vAJwZScBTjYj8qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9OLuY3Y0b8bwMiOCrcA08mwZYMJ3xaPgIMKyi0rYCEjvJrExFNQJ8rYEjHA0e9jSg635sHpkgbqW1EZzrNWvAUd5x2r1AKrllGJVXfrMEGMHXbjDFtH3LUSSkWgLgyFma8xhmiG6vZaDedByy3mYKB1YeMVUnvRCMC384Ln%2B6qOe0vbnLSOxUwbDeVW%2FWrWpxzUEpyME5B7jNUpedaIzU%2BV6zW4rOeEudKIGN593pF6BxsTt6nZRlrTgMlrz3muUv%2BGPb0CWS487b11NRs2fPtXMKTK%2BqHVY34UBGgwf7B%2BCqkHUaG7YZr3ieB%2FTpIFRlHxyg2H6SGqDQmDyBPQ7PBVIZbfSGk%2F0GwNhGlLC947FQ%2FYliBPVOSfDNYfM55XbTApN6hC0335ToPA4VqKRvCPIXtn16qTGLc73FMUH6x3iGTIyZqshzoRhQBdM1aF4vLb8P6ZgG8Lv0XnnEcVOumADla62JXRT6IC7vUROnxfNEH8KC11DhWywIxlUOnkeBuC7zdhPOm1ocZRXgelXYYFb7HfAk%2FE4fRFYp5kn9i9Q27iGB%2Fflv5aufx1vSLwMpBCHlx%2BP0tuotlQkSyI6WYIj2XNz%2BfAyit56mjxknYnXkxtLzxE0JkqiezRs54Hopg5ZW2ZQ8EjirmMLnE%2BcMGOqUBjTKrIjTgbNpPxfOdDkOBWN8TVuZiQczWA4XmVBf7DyeILnygH8wH8%2BK0uRHNyyjukT1WbDfLPmJpi3QW%2BS%2B635dBzRavL9J4ltsDi8vyMvUM1tbNz96cwcCExISezKVzQNBe34wbVcXr1crFKXw0URG7Krj%2FcF79%2FGnCmG7v1O%2FJ7Xr56WEGGE3wW4yoWSKLgITpZsRegi0f%2FgkVc6eH6ev%2BvyB2&X-Amz-Signature=231663d043ee201701f434ab28333dc52982c7ae2492df38aea099fabb11ee77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCJJJY6T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8fx2EKYoP3zFh8h8MjKey7mRlwB7zHxo%2BpiPXnLD2SAiEAkXiYD8V19XQlixtOeXZ%2B1%2FVd%2F%2FS9H9vAJwZScBTjYj8qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9OLuY3Y0b8bwMiOCrcA08mwZYMJ3xaPgIMKyi0rYCEjvJrExFNQJ8rYEjHA0e9jSg635sHpkgbqW1EZzrNWvAUd5x2r1AKrllGJVXfrMEGMHXbjDFtH3LUSSkWgLgyFma8xhmiG6vZaDedByy3mYKB1YeMVUnvRCMC384Ln%2B6qOe0vbnLSOxUwbDeVW%2FWrWpxzUEpyME5B7jNUpedaIzU%2BV6zW4rOeEudKIGN593pF6BxsTt6nZRlrTgMlrz3muUv%2BGPb0CWS487b11NRs2fPtXMKTK%2BqHVY34UBGgwf7B%2BCqkHUaG7YZr3ieB%2FTpIFRlHxyg2H6SGqDQmDyBPQ7PBVIZbfSGk%2F0GwNhGlLC947FQ%2FYliBPVOSfDNYfM55XbTApN6hC0335ToPA4VqKRvCPIXtn16qTGLc73FMUH6x3iGTIyZqshzoRhQBdM1aF4vLb8P6ZgG8Lv0XnnEcVOumADla62JXRT6IC7vUROnxfNEH8KC11DhWywIxlUOnkeBuC7zdhPOm1ocZRXgelXYYFb7HfAk%2FE4fRFYp5kn9i9Q27iGB%2Fflv5aufx1vSLwMpBCHlx%2BP0tuotlQkSyI6WYIj2XNz%2BfAyit56mjxknYnXkxtLzxE0JkqiezRs54Hopg5ZW2ZQ8EjirmMLnE%2BcMGOqUBjTKrIjTgbNpPxfOdDkOBWN8TVuZiQczWA4XmVBf7DyeILnygH8wH8%2BK0uRHNyyjukT1WbDfLPmJpi3QW%2BS%2B635dBzRavL9J4ltsDi8vyMvUM1tbNz96cwcCExISezKVzQNBe34wbVcXr1crFKXw0URG7Krj%2FcF79%2FGnCmG7v1O%2FJ7Xr56WEGGE3wW4yoWSKLgITpZsRegi0f%2FgkVc6eH6ev%2BvyB2&X-Amz-Signature=5158cff0c9e9b306738846ce70954194c1cc5e8cb84b6c83e2e2414c7301ceab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCJJJY6T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8fx2EKYoP3zFh8h8MjKey7mRlwB7zHxo%2BpiPXnLD2SAiEAkXiYD8V19XQlixtOeXZ%2B1%2FVd%2F%2FS9H9vAJwZScBTjYj8qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9OLuY3Y0b8bwMiOCrcA08mwZYMJ3xaPgIMKyi0rYCEjvJrExFNQJ8rYEjHA0e9jSg635sHpkgbqW1EZzrNWvAUd5x2r1AKrllGJVXfrMEGMHXbjDFtH3LUSSkWgLgyFma8xhmiG6vZaDedByy3mYKB1YeMVUnvRCMC384Ln%2B6qOe0vbnLSOxUwbDeVW%2FWrWpxzUEpyME5B7jNUpedaIzU%2BV6zW4rOeEudKIGN593pF6BxsTt6nZRlrTgMlrz3muUv%2BGPb0CWS487b11NRs2fPtXMKTK%2BqHVY34UBGgwf7B%2BCqkHUaG7YZr3ieB%2FTpIFRlHxyg2H6SGqDQmDyBPQ7PBVIZbfSGk%2F0GwNhGlLC947FQ%2FYliBPVOSfDNYfM55XbTApN6hC0335ToPA4VqKRvCPIXtn16qTGLc73FMUH6x3iGTIyZqshzoRhQBdM1aF4vLb8P6ZgG8Lv0XnnEcVOumADla62JXRT6IC7vUROnxfNEH8KC11DhWywIxlUOnkeBuC7zdhPOm1ocZRXgelXYYFb7HfAk%2FE4fRFYp5kn9i9Q27iGB%2Fflv5aufx1vSLwMpBCHlx%2BP0tuotlQkSyI6WYIj2XNz%2BfAyit56mjxknYnXkxtLzxE0JkqiezRs54Hopg5ZW2ZQ8EjirmMLnE%2BcMGOqUBjTKrIjTgbNpPxfOdDkOBWN8TVuZiQczWA4XmVBf7DyeILnygH8wH8%2BK0uRHNyyjukT1WbDfLPmJpi3QW%2BS%2B635dBzRavL9J4ltsDi8vyMvUM1tbNz96cwcCExISezKVzQNBe34wbVcXr1crFKXw0URG7Krj%2FcF79%2FGnCmG7v1O%2FJ7Xr56WEGGE3wW4yoWSKLgITpZsRegi0f%2FgkVc6eH6ev%2BvyB2&X-Amz-Signature=3e9e3c26947c78092a31e80d18761985a64f3908f692f169222029c833fe3390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCJJJY6T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8fx2EKYoP3zFh8h8MjKey7mRlwB7zHxo%2BpiPXnLD2SAiEAkXiYD8V19XQlixtOeXZ%2B1%2FVd%2F%2FS9H9vAJwZScBTjYj8qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9OLuY3Y0b8bwMiOCrcA08mwZYMJ3xaPgIMKyi0rYCEjvJrExFNQJ8rYEjHA0e9jSg635sHpkgbqW1EZzrNWvAUd5x2r1AKrllGJVXfrMEGMHXbjDFtH3LUSSkWgLgyFma8xhmiG6vZaDedByy3mYKB1YeMVUnvRCMC384Ln%2B6qOe0vbnLSOxUwbDeVW%2FWrWpxzUEpyME5B7jNUpedaIzU%2BV6zW4rOeEudKIGN593pF6BxsTt6nZRlrTgMlrz3muUv%2BGPb0CWS487b11NRs2fPtXMKTK%2BqHVY34UBGgwf7B%2BCqkHUaG7YZr3ieB%2FTpIFRlHxyg2H6SGqDQmDyBPQ7PBVIZbfSGk%2F0GwNhGlLC947FQ%2FYliBPVOSfDNYfM55XbTApN6hC0335ToPA4VqKRvCPIXtn16qTGLc73FMUH6x3iGTIyZqshzoRhQBdM1aF4vLb8P6ZgG8Lv0XnnEcVOumADla62JXRT6IC7vUROnxfNEH8KC11DhWywIxlUOnkeBuC7zdhPOm1ocZRXgelXYYFb7HfAk%2FE4fRFYp5kn9i9Q27iGB%2Fflv5aufx1vSLwMpBCHlx%2BP0tuotlQkSyI6WYIj2XNz%2BfAyit56mjxknYnXkxtLzxE0JkqiezRs54Hopg5ZW2ZQ8EjirmMLnE%2BcMGOqUBjTKrIjTgbNpPxfOdDkOBWN8TVuZiQczWA4XmVBf7DyeILnygH8wH8%2BK0uRHNyyjukT1WbDfLPmJpi3QW%2BS%2B635dBzRavL9J4ltsDi8vyMvUM1tbNz96cwcCExISezKVzQNBe34wbVcXr1crFKXw0URG7Krj%2FcF79%2FGnCmG7v1O%2FJ7Xr56WEGGE3wW4yoWSKLgITpZsRegi0f%2FgkVc6eH6ev%2BvyB2&X-Amz-Signature=45e80792aeef248cb76a70b8fe5ba2f498ff63196ba5c4c4ad01c700371d9532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCJJJY6T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8fx2EKYoP3zFh8h8MjKey7mRlwB7zHxo%2BpiPXnLD2SAiEAkXiYD8V19XQlixtOeXZ%2B1%2FVd%2F%2FS9H9vAJwZScBTjYj8qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9OLuY3Y0b8bwMiOCrcA08mwZYMJ3xaPgIMKyi0rYCEjvJrExFNQJ8rYEjHA0e9jSg635sHpkgbqW1EZzrNWvAUd5x2r1AKrllGJVXfrMEGMHXbjDFtH3LUSSkWgLgyFma8xhmiG6vZaDedByy3mYKB1YeMVUnvRCMC384Ln%2B6qOe0vbnLSOxUwbDeVW%2FWrWpxzUEpyME5B7jNUpedaIzU%2BV6zW4rOeEudKIGN593pF6BxsTt6nZRlrTgMlrz3muUv%2BGPb0CWS487b11NRs2fPtXMKTK%2BqHVY34UBGgwf7B%2BCqkHUaG7YZr3ieB%2FTpIFRlHxyg2H6SGqDQmDyBPQ7PBVIZbfSGk%2F0GwNhGlLC947FQ%2FYliBPVOSfDNYfM55XbTApN6hC0335ToPA4VqKRvCPIXtn16qTGLc73FMUH6x3iGTIyZqshzoRhQBdM1aF4vLb8P6ZgG8Lv0XnnEcVOumADla62JXRT6IC7vUROnxfNEH8KC11DhWywIxlUOnkeBuC7zdhPOm1ocZRXgelXYYFb7HfAk%2FE4fRFYp5kn9i9Q27iGB%2Fflv5aufx1vSLwMpBCHlx%2BP0tuotlQkSyI6WYIj2XNz%2BfAyit56mjxknYnXkxtLzxE0JkqiezRs54Hopg5ZW2ZQ8EjirmMLnE%2BcMGOqUBjTKrIjTgbNpPxfOdDkOBWN8TVuZiQczWA4XmVBf7DyeILnygH8wH8%2BK0uRHNyyjukT1WbDfLPmJpi3QW%2BS%2B635dBzRavL9J4ltsDi8vyMvUM1tbNz96cwcCExISezKVzQNBe34wbVcXr1crFKXw0URG7Krj%2FcF79%2FGnCmG7v1O%2FJ7Xr56WEGGE3wW4yoWSKLgITpZsRegi0f%2FgkVc6eH6ev%2BvyB2&X-Amz-Signature=9633a1d21352e002d4b484b71e9b164a0f16e7690848ad680286d7a9a98bddb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCJJJY6T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8fx2EKYoP3zFh8h8MjKey7mRlwB7zHxo%2BpiPXnLD2SAiEAkXiYD8V19XQlixtOeXZ%2B1%2FVd%2F%2FS9H9vAJwZScBTjYj8qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9OLuY3Y0b8bwMiOCrcA08mwZYMJ3xaPgIMKyi0rYCEjvJrExFNQJ8rYEjHA0e9jSg635sHpkgbqW1EZzrNWvAUd5x2r1AKrllGJVXfrMEGMHXbjDFtH3LUSSkWgLgyFma8xhmiG6vZaDedByy3mYKB1YeMVUnvRCMC384Ln%2B6qOe0vbnLSOxUwbDeVW%2FWrWpxzUEpyME5B7jNUpedaIzU%2BV6zW4rOeEudKIGN593pF6BxsTt6nZRlrTgMlrz3muUv%2BGPb0CWS487b11NRs2fPtXMKTK%2BqHVY34UBGgwf7B%2BCqkHUaG7YZr3ieB%2FTpIFRlHxyg2H6SGqDQmDyBPQ7PBVIZbfSGk%2F0GwNhGlLC947FQ%2FYliBPVOSfDNYfM55XbTApN6hC0335ToPA4VqKRvCPIXtn16qTGLc73FMUH6x3iGTIyZqshzoRhQBdM1aF4vLb8P6ZgG8Lv0XnnEcVOumADla62JXRT6IC7vUROnxfNEH8KC11DhWywIxlUOnkeBuC7zdhPOm1ocZRXgelXYYFb7HfAk%2FE4fRFYp5kn9i9Q27iGB%2Fflv5aufx1vSLwMpBCHlx%2BP0tuotlQkSyI6WYIj2XNz%2BfAyit56mjxknYnXkxtLzxE0JkqiezRs54Hopg5ZW2ZQ8EjirmMLnE%2BcMGOqUBjTKrIjTgbNpPxfOdDkOBWN8TVuZiQczWA4XmVBf7DyeILnygH8wH8%2BK0uRHNyyjukT1WbDfLPmJpi3QW%2BS%2B635dBzRavL9J4ltsDi8vyMvUM1tbNz96cwcCExISezKVzQNBe34wbVcXr1crFKXw0URG7Krj%2FcF79%2FGnCmG7v1O%2FJ7Xr56WEGGE3wW4yoWSKLgITpZsRegi0f%2FgkVc6eH6ev%2BvyB2&X-Amz-Signature=58a6d843fd3b94e45fcac5ee42da5fbfc03f967f4a2943faa0b0795d725c76bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCJJJY6T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8fx2EKYoP3zFh8h8MjKey7mRlwB7zHxo%2BpiPXnLD2SAiEAkXiYD8V19XQlixtOeXZ%2B1%2FVd%2F%2FS9H9vAJwZScBTjYj8qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9OLuY3Y0b8bwMiOCrcA08mwZYMJ3xaPgIMKyi0rYCEjvJrExFNQJ8rYEjHA0e9jSg635sHpkgbqW1EZzrNWvAUd5x2r1AKrllGJVXfrMEGMHXbjDFtH3LUSSkWgLgyFma8xhmiG6vZaDedByy3mYKB1YeMVUnvRCMC384Ln%2B6qOe0vbnLSOxUwbDeVW%2FWrWpxzUEpyME5B7jNUpedaIzU%2BV6zW4rOeEudKIGN593pF6BxsTt6nZRlrTgMlrz3muUv%2BGPb0CWS487b11NRs2fPtXMKTK%2BqHVY34UBGgwf7B%2BCqkHUaG7YZr3ieB%2FTpIFRlHxyg2H6SGqDQmDyBPQ7PBVIZbfSGk%2F0GwNhGlLC947FQ%2FYliBPVOSfDNYfM55XbTApN6hC0335ToPA4VqKRvCPIXtn16qTGLc73FMUH6x3iGTIyZqshzoRhQBdM1aF4vLb8P6ZgG8Lv0XnnEcVOumADla62JXRT6IC7vUROnxfNEH8KC11DhWywIxlUOnkeBuC7zdhPOm1ocZRXgelXYYFb7HfAk%2FE4fRFYp5kn9i9Q27iGB%2Fflv5aufx1vSLwMpBCHlx%2BP0tuotlQkSyI6WYIj2XNz%2BfAyit56mjxknYnXkxtLzxE0JkqiezRs54Hopg5ZW2ZQ8EjirmMLnE%2BcMGOqUBjTKrIjTgbNpPxfOdDkOBWN8TVuZiQczWA4XmVBf7DyeILnygH8wH8%2BK0uRHNyyjukT1WbDfLPmJpi3QW%2BS%2B635dBzRavL9J4ltsDi8vyMvUM1tbNz96cwcCExISezKVzQNBe34wbVcXr1crFKXw0URG7Krj%2FcF79%2FGnCmG7v1O%2FJ7Xr56WEGGE3wW4yoWSKLgITpZsRegi0f%2FgkVc6eH6ev%2BvyB2&X-Amz-Signature=d0ef058d982130ba9351839a086f5a0667f55a05b8dbce5cc3bd27846d61547c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCJJJY6T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8fx2EKYoP3zFh8h8MjKey7mRlwB7zHxo%2BpiPXnLD2SAiEAkXiYD8V19XQlixtOeXZ%2B1%2FVd%2F%2FS9H9vAJwZScBTjYj8qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9OLuY3Y0b8bwMiOCrcA08mwZYMJ3xaPgIMKyi0rYCEjvJrExFNQJ8rYEjHA0e9jSg635sHpkgbqW1EZzrNWvAUd5x2r1AKrllGJVXfrMEGMHXbjDFtH3LUSSkWgLgyFma8xhmiG6vZaDedByy3mYKB1YeMVUnvRCMC384Ln%2B6qOe0vbnLSOxUwbDeVW%2FWrWpxzUEpyME5B7jNUpedaIzU%2BV6zW4rOeEudKIGN593pF6BxsTt6nZRlrTgMlrz3muUv%2BGPb0CWS487b11NRs2fPtXMKTK%2BqHVY34UBGgwf7B%2BCqkHUaG7YZr3ieB%2FTpIFRlHxyg2H6SGqDQmDyBPQ7PBVIZbfSGk%2F0GwNhGlLC947FQ%2FYliBPVOSfDNYfM55XbTApN6hC0335ToPA4VqKRvCPIXtn16qTGLc73FMUH6x3iGTIyZqshzoRhQBdM1aF4vLb8P6ZgG8Lv0XnnEcVOumADla62JXRT6IC7vUROnxfNEH8KC11DhWywIxlUOnkeBuC7zdhPOm1ocZRXgelXYYFb7HfAk%2FE4fRFYp5kn9i9Q27iGB%2Fflv5aufx1vSLwMpBCHlx%2BP0tuotlQkSyI6WYIj2XNz%2BfAyit56mjxknYnXkxtLzxE0JkqiezRs54Hopg5ZW2ZQ8EjirmMLnE%2BcMGOqUBjTKrIjTgbNpPxfOdDkOBWN8TVuZiQczWA4XmVBf7DyeILnygH8wH8%2BK0uRHNyyjukT1WbDfLPmJpi3QW%2BS%2B635dBzRavL9J4ltsDi8vyMvUM1tbNz96cwcCExISezKVzQNBe34wbVcXr1crFKXw0URG7Krj%2FcF79%2FGnCmG7v1O%2FJ7Xr56WEGGE3wW4yoWSKLgITpZsRegi0f%2FgkVc6eH6ev%2BvyB2&X-Amz-Signature=61c177b3f7074c42f79c87c2c08a145017fa1413a371371fb40eb1ff4be706ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
