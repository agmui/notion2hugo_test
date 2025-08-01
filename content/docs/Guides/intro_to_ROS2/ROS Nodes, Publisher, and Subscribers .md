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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJUCPQF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaMrsb1ae0Lyfe2znKdfFjrKj59oc8zc%2BURYrNGBxMggIgJHQhuYgMvg7AwbzCQC6Ri%2BESPJ%2FSbdGIkEOtp%2BgPq7UqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf4ePgz7TDLvPVvnCrcA2htDw2%2BSuiRikccQ8vuh7a8mGrZ18Unx%2B6%2BBZzPF8iy4u5cVR5GDJTmnqBRJRRT1G%2Bj97f4QYtbh9CDS5YnLivI0%2Bbv4heMdQVfbZkeahhZJFozk%2BA2pJTMBs8mhzSH9ZW%2FGyfIRIT3USTh9DaSY7OzcpXdi0eUO0Wx60LlebIfjclTET0PjKay%2BJT5KUUAbTjxFuR09jSBK%2BUSdXXlaXglerCWaZVu1jcbz1A5IbUotNVBfZqT21s9VgkfOeHUa1iwrjVIu6jhPUYqXLvvVa7w19QhwrwYO4C%2BH5xtwhNnPlk3Debe4p9w4i0zI5O78xggBjh1z7cvOxYK4AStHIWMy6MNP6x9BnVNVV48xgoPhJLOm12WmTdaekEKnCjedi%2FTnaf6ZGac2fKU%2FqDwMLq1YatxiXtvrCAXUYPaCNWBj8swYSg%2Ff0pviouWR2lqc353NYA7EnJesKAJTT8vJ9XN0TBIeVVwXKu28kSvZ9tUhxr5KBLXcS%2BOdMhkLK8GuIb1CNSZS%2BLawK894QF00NpeQCiaYDMPCh77vTovtyTWI139rkx%2BENeRCcoobwRTbpbo7RTXLCmRBvButLHk6Cs%2FYa%2FK57k3HswdIXJrLrXzulbwmt21%2FpmTRGbAMJ77s8QGOqUBHGOe8rxgnjGkcFN3Woo3IECvkYrlF0CsVnh8NDQ08Usfigpooqh4Rs81kwjY1mKKARSMy2aVww3eJRsy7WF8EkuO7EXo66wWKacuNyigtSU%2BVgJ%2Bg5%2BWp1GTyBYqcxzkU6xq9v2SHTehrxJA0RvBy2TevogRhG7XKp4GIHK4NbGsnh%2BJ0S2W4nIhbEMSoIq1Z7NIY5qzwqGs5JRnxeLQ%2Bx%2BYsZGF&X-Amz-Signature=fa77fe336f1dd24ede7a2cf51a7f9085f0de5ac183df1ebda1cdadf7d3c35162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJUCPQF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaMrsb1ae0Lyfe2znKdfFjrKj59oc8zc%2BURYrNGBxMggIgJHQhuYgMvg7AwbzCQC6Ri%2BESPJ%2FSbdGIkEOtp%2BgPq7UqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf4ePgz7TDLvPVvnCrcA2htDw2%2BSuiRikccQ8vuh7a8mGrZ18Unx%2B6%2BBZzPF8iy4u5cVR5GDJTmnqBRJRRT1G%2Bj97f4QYtbh9CDS5YnLivI0%2Bbv4heMdQVfbZkeahhZJFozk%2BA2pJTMBs8mhzSH9ZW%2FGyfIRIT3USTh9DaSY7OzcpXdi0eUO0Wx60LlebIfjclTET0PjKay%2BJT5KUUAbTjxFuR09jSBK%2BUSdXXlaXglerCWaZVu1jcbz1A5IbUotNVBfZqT21s9VgkfOeHUa1iwrjVIu6jhPUYqXLvvVa7w19QhwrwYO4C%2BH5xtwhNnPlk3Debe4p9w4i0zI5O78xggBjh1z7cvOxYK4AStHIWMy6MNP6x9BnVNVV48xgoPhJLOm12WmTdaekEKnCjedi%2FTnaf6ZGac2fKU%2FqDwMLq1YatxiXtvrCAXUYPaCNWBj8swYSg%2Ff0pviouWR2lqc353NYA7EnJesKAJTT8vJ9XN0TBIeVVwXKu28kSvZ9tUhxr5KBLXcS%2BOdMhkLK8GuIb1CNSZS%2BLawK894QF00NpeQCiaYDMPCh77vTovtyTWI139rkx%2BENeRCcoobwRTbpbo7RTXLCmRBvButLHk6Cs%2FYa%2FK57k3HswdIXJrLrXzulbwmt21%2FpmTRGbAMJ77s8QGOqUBHGOe8rxgnjGkcFN3Woo3IECvkYrlF0CsVnh8NDQ08Usfigpooqh4Rs81kwjY1mKKARSMy2aVww3eJRsy7WF8EkuO7EXo66wWKacuNyigtSU%2BVgJ%2Bg5%2BWp1GTyBYqcxzkU6xq9v2SHTehrxJA0RvBy2TevogRhG7XKp4GIHK4NbGsnh%2BJ0S2W4nIhbEMSoIq1Z7NIY5qzwqGs5JRnxeLQ%2Bx%2BYsZGF&X-Amz-Signature=6517db52a0483a721933326ea3c4ccf21b19fd2e26c3ab751a83d8ed2b260eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJUCPQF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaMrsb1ae0Lyfe2znKdfFjrKj59oc8zc%2BURYrNGBxMggIgJHQhuYgMvg7AwbzCQC6Ri%2BESPJ%2FSbdGIkEOtp%2BgPq7UqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf4ePgz7TDLvPVvnCrcA2htDw2%2BSuiRikccQ8vuh7a8mGrZ18Unx%2B6%2BBZzPF8iy4u5cVR5GDJTmnqBRJRRT1G%2Bj97f4QYtbh9CDS5YnLivI0%2Bbv4heMdQVfbZkeahhZJFozk%2BA2pJTMBs8mhzSH9ZW%2FGyfIRIT3USTh9DaSY7OzcpXdi0eUO0Wx60LlebIfjclTET0PjKay%2BJT5KUUAbTjxFuR09jSBK%2BUSdXXlaXglerCWaZVu1jcbz1A5IbUotNVBfZqT21s9VgkfOeHUa1iwrjVIu6jhPUYqXLvvVa7w19QhwrwYO4C%2BH5xtwhNnPlk3Debe4p9w4i0zI5O78xggBjh1z7cvOxYK4AStHIWMy6MNP6x9BnVNVV48xgoPhJLOm12WmTdaekEKnCjedi%2FTnaf6ZGac2fKU%2FqDwMLq1YatxiXtvrCAXUYPaCNWBj8swYSg%2Ff0pviouWR2lqc353NYA7EnJesKAJTT8vJ9XN0TBIeVVwXKu28kSvZ9tUhxr5KBLXcS%2BOdMhkLK8GuIb1CNSZS%2BLawK894QF00NpeQCiaYDMPCh77vTovtyTWI139rkx%2BENeRCcoobwRTbpbo7RTXLCmRBvButLHk6Cs%2FYa%2FK57k3HswdIXJrLrXzulbwmt21%2FpmTRGbAMJ77s8QGOqUBHGOe8rxgnjGkcFN3Woo3IECvkYrlF0CsVnh8NDQ08Usfigpooqh4Rs81kwjY1mKKARSMy2aVww3eJRsy7WF8EkuO7EXo66wWKacuNyigtSU%2BVgJ%2Bg5%2BWp1GTyBYqcxzkU6xq9v2SHTehrxJA0RvBy2TevogRhG7XKp4GIHK4NbGsnh%2BJ0S2W4nIhbEMSoIq1Z7NIY5qzwqGs5JRnxeLQ%2Bx%2BYsZGF&X-Amz-Signature=7c5657e56cd09ee7357ce161f178044b411e16b2e2b43b207684bc188e53bd8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJUCPQF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaMrsb1ae0Lyfe2znKdfFjrKj59oc8zc%2BURYrNGBxMggIgJHQhuYgMvg7AwbzCQC6Ri%2BESPJ%2FSbdGIkEOtp%2BgPq7UqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf4ePgz7TDLvPVvnCrcA2htDw2%2BSuiRikccQ8vuh7a8mGrZ18Unx%2B6%2BBZzPF8iy4u5cVR5GDJTmnqBRJRRT1G%2Bj97f4QYtbh9CDS5YnLivI0%2Bbv4heMdQVfbZkeahhZJFozk%2BA2pJTMBs8mhzSH9ZW%2FGyfIRIT3USTh9DaSY7OzcpXdi0eUO0Wx60LlebIfjclTET0PjKay%2BJT5KUUAbTjxFuR09jSBK%2BUSdXXlaXglerCWaZVu1jcbz1A5IbUotNVBfZqT21s9VgkfOeHUa1iwrjVIu6jhPUYqXLvvVa7w19QhwrwYO4C%2BH5xtwhNnPlk3Debe4p9w4i0zI5O78xggBjh1z7cvOxYK4AStHIWMy6MNP6x9BnVNVV48xgoPhJLOm12WmTdaekEKnCjedi%2FTnaf6ZGac2fKU%2FqDwMLq1YatxiXtvrCAXUYPaCNWBj8swYSg%2Ff0pviouWR2lqc353NYA7EnJesKAJTT8vJ9XN0TBIeVVwXKu28kSvZ9tUhxr5KBLXcS%2BOdMhkLK8GuIb1CNSZS%2BLawK894QF00NpeQCiaYDMPCh77vTovtyTWI139rkx%2BENeRCcoobwRTbpbo7RTXLCmRBvButLHk6Cs%2FYa%2FK57k3HswdIXJrLrXzulbwmt21%2FpmTRGbAMJ77s8QGOqUBHGOe8rxgnjGkcFN3Woo3IECvkYrlF0CsVnh8NDQ08Usfigpooqh4Rs81kwjY1mKKARSMy2aVww3eJRsy7WF8EkuO7EXo66wWKacuNyigtSU%2BVgJ%2Bg5%2BWp1GTyBYqcxzkU6xq9v2SHTehrxJA0RvBy2TevogRhG7XKp4GIHK4NbGsnh%2BJ0S2W4nIhbEMSoIq1Z7NIY5qzwqGs5JRnxeLQ%2Bx%2BYsZGF&X-Amz-Signature=aae9c1e15f75858e307077abe16c59df4b4a18a4c6df4830a2ccdcbdf0104351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJUCPQF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaMrsb1ae0Lyfe2znKdfFjrKj59oc8zc%2BURYrNGBxMggIgJHQhuYgMvg7AwbzCQC6Ri%2BESPJ%2FSbdGIkEOtp%2BgPq7UqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf4ePgz7TDLvPVvnCrcA2htDw2%2BSuiRikccQ8vuh7a8mGrZ18Unx%2B6%2BBZzPF8iy4u5cVR5GDJTmnqBRJRRT1G%2Bj97f4QYtbh9CDS5YnLivI0%2Bbv4heMdQVfbZkeahhZJFozk%2BA2pJTMBs8mhzSH9ZW%2FGyfIRIT3USTh9DaSY7OzcpXdi0eUO0Wx60LlebIfjclTET0PjKay%2BJT5KUUAbTjxFuR09jSBK%2BUSdXXlaXglerCWaZVu1jcbz1A5IbUotNVBfZqT21s9VgkfOeHUa1iwrjVIu6jhPUYqXLvvVa7w19QhwrwYO4C%2BH5xtwhNnPlk3Debe4p9w4i0zI5O78xggBjh1z7cvOxYK4AStHIWMy6MNP6x9BnVNVV48xgoPhJLOm12WmTdaekEKnCjedi%2FTnaf6ZGac2fKU%2FqDwMLq1YatxiXtvrCAXUYPaCNWBj8swYSg%2Ff0pviouWR2lqc353NYA7EnJesKAJTT8vJ9XN0TBIeVVwXKu28kSvZ9tUhxr5KBLXcS%2BOdMhkLK8GuIb1CNSZS%2BLawK894QF00NpeQCiaYDMPCh77vTovtyTWI139rkx%2BENeRCcoobwRTbpbo7RTXLCmRBvButLHk6Cs%2FYa%2FK57k3HswdIXJrLrXzulbwmt21%2FpmTRGbAMJ77s8QGOqUBHGOe8rxgnjGkcFN3Woo3IECvkYrlF0CsVnh8NDQ08Usfigpooqh4Rs81kwjY1mKKARSMy2aVww3eJRsy7WF8EkuO7EXo66wWKacuNyigtSU%2BVgJ%2Bg5%2BWp1GTyBYqcxzkU6xq9v2SHTehrxJA0RvBy2TevogRhG7XKp4GIHK4NbGsnh%2BJ0S2W4nIhbEMSoIq1Z7NIY5qzwqGs5JRnxeLQ%2Bx%2BYsZGF&X-Amz-Signature=b83458ed4dcd5676e41662f13019dfc117473c86b443beff221378b5cb05f589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJUCPQF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaMrsb1ae0Lyfe2znKdfFjrKj59oc8zc%2BURYrNGBxMggIgJHQhuYgMvg7AwbzCQC6Ri%2BESPJ%2FSbdGIkEOtp%2BgPq7UqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf4ePgz7TDLvPVvnCrcA2htDw2%2BSuiRikccQ8vuh7a8mGrZ18Unx%2B6%2BBZzPF8iy4u5cVR5GDJTmnqBRJRRT1G%2Bj97f4QYtbh9CDS5YnLivI0%2Bbv4heMdQVfbZkeahhZJFozk%2BA2pJTMBs8mhzSH9ZW%2FGyfIRIT3USTh9DaSY7OzcpXdi0eUO0Wx60LlebIfjclTET0PjKay%2BJT5KUUAbTjxFuR09jSBK%2BUSdXXlaXglerCWaZVu1jcbz1A5IbUotNVBfZqT21s9VgkfOeHUa1iwrjVIu6jhPUYqXLvvVa7w19QhwrwYO4C%2BH5xtwhNnPlk3Debe4p9w4i0zI5O78xggBjh1z7cvOxYK4AStHIWMy6MNP6x9BnVNVV48xgoPhJLOm12WmTdaekEKnCjedi%2FTnaf6ZGac2fKU%2FqDwMLq1YatxiXtvrCAXUYPaCNWBj8swYSg%2Ff0pviouWR2lqc353NYA7EnJesKAJTT8vJ9XN0TBIeVVwXKu28kSvZ9tUhxr5KBLXcS%2BOdMhkLK8GuIb1CNSZS%2BLawK894QF00NpeQCiaYDMPCh77vTovtyTWI139rkx%2BENeRCcoobwRTbpbo7RTXLCmRBvButLHk6Cs%2FYa%2FK57k3HswdIXJrLrXzulbwmt21%2FpmTRGbAMJ77s8QGOqUBHGOe8rxgnjGkcFN3Woo3IECvkYrlF0CsVnh8NDQ08Usfigpooqh4Rs81kwjY1mKKARSMy2aVww3eJRsy7WF8EkuO7EXo66wWKacuNyigtSU%2BVgJ%2Bg5%2BWp1GTyBYqcxzkU6xq9v2SHTehrxJA0RvBy2TevogRhG7XKp4GIHK4NbGsnh%2BJ0S2W4nIhbEMSoIq1Z7NIY5qzwqGs5JRnxeLQ%2Bx%2BYsZGF&X-Amz-Signature=d993d7ca275ed45dda2ebe9ff035036d67f6d500504213f2fc25906dc3108df2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJUCPQF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaMrsb1ae0Lyfe2znKdfFjrKj59oc8zc%2BURYrNGBxMggIgJHQhuYgMvg7AwbzCQC6Ri%2BESPJ%2FSbdGIkEOtp%2BgPq7UqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf4ePgz7TDLvPVvnCrcA2htDw2%2BSuiRikccQ8vuh7a8mGrZ18Unx%2B6%2BBZzPF8iy4u5cVR5GDJTmnqBRJRRT1G%2Bj97f4QYtbh9CDS5YnLivI0%2Bbv4heMdQVfbZkeahhZJFozk%2BA2pJTMBs8mhzSH9ZW%2FGyfIRIT3USTh9DaSY7OzcpXdi0eUO0Wx60LlebIfjclTET0PjKay%2BJT5KUUAbTjxFuR09jSBK%2BUSdXXlaXglerCWaZVu1jcbz1A5IbUotNVBfZqT21s9VgkfOeHUa1iwrjVIu6jhPUYqXLvvVa7w19QhwrwYO4C%2BH5xtwhNnPlk3Debe4p9w4i0zI5O78xggBjh1z7cvOxYK4AStHIWMy6MNP6x9BnVNVV48xgoPhJLOm12WmTdaekEKnCjedi%2FTnaf6ZGac2fKU%2FqDwMLq1YatxiXtvrCAXUYPaCNWBj8swYSg%2Ff0pviouWR2lqc353NYA7EnJesKAJTT8vJ9XN0TBIeVVwXKu28kSvZ9tUhxr5KBLXcS%2BOdMhkLK8GuIb1CNSZS%2BLawK894QF00NpeQCiaYDMPCh77vTovtyTWI139rkx%2BENeRCcoobwRTbpbo7RTXLCmRBvButLHk6Cs%2FYa%2FK57k3HswdIXJrLrXzulbwmt21%2FpmTRGbAMJ77s8QGOqUBHGOe8rxgnjGkcFN3Woo3IECvkYrlF0CsVnh8NDQ08Usfigpooqh4Rs81kwjY1mKKARSMy2aVww3eJRsy7WF8EkuO7EXo66wWKacuNyigtSU%2BVgJ%2Bg5%2BWp1GTyBYqcxzkU6xq9v2SHTehrxJA0RvBy2TevogRhG7XKp4GIHK4NbGsnh%2BJ0S2W4nIhbEMSoIq1Z7NIY5qzwqGs5JRnxeLQ%2Bx%2BYsZGF&X-Amz-Signature=d9d55f5fc77b5ab6bf5cdfd5ffda750ae451bab11e77c0d61c9f31499b6d8b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJUCPQF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaMrsb1ae0Lyfe2znKdfFjrKj59oc8zc%2BURYrNGBxMggIgJHQhuYgMvg7AwbzCQC6Ri%2BESPJ%2FSbdGIkEOtp%2BgPq7UqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf4ePgz7TDLvPVvnCrcA2htDw2%2BSuiRikccQ8vuh7a8mGrZ18Unx%2B6%2BBZzPF8iy4u5cVR5GDJTmnqBRJRRT1G%2Bj97f4QYtbh9CDS5YnLivI0%2Bbv4heMdQVfbZkeahhZJFozk%2BA2pJTMBs8mhzSH9ZW%2FGyfIRIT3USTh9DaSY7OzcpXdi0eUO0Wx60LlebIfjclTET0PjKay%2BJT5KUUAbTjxFuR09jSBK%2BUSdXXlaXglerCWaZVu1jcbz1A5IbUotNVBfZqT21s9VgkfOeHUa1iwrjVIu6jhPUYqXLvvVa7w19QhwrwYO4C%2BH5xtwhNnPlk3Debe4p9w4i0zI5O78xggBjh1z7cvOxYK4AStHIWMy6MNP6x9BnVNVV48xgoPhJLOm12WmTdaekEKnCjedi%2FTnaf6ZGac2fKU%2FqDwMLq1YatxiXtvrCAXUYPaCNWBj8swYSg%2Ff0pviouWR2lqc353NYA7EnJesKAJTT8vJ9XN0TBIeVVwXKu28kSvZ9tUhxr5KBLXcS%2BOdMhkLK8GuIb1CNSZS%2BLawK894QF00NpeQCiaYDMPCh77vTovtyTWI139rkx%2BENeRCcoobwRTbpbo7RTXLCmRBvButLHk6Cs%2FYa%2FK57k3HswdIXJrLrXzulbwmt21%2FpmTRGbAMJ77s8QGOqUBHGOe8rxgnjGkcFN3Woo3IECvkYrlF0CsVnh8NDQ08Usfigpooqh4Rs81kwjY1mKKARSMy2aVww3eJRsy7WF8EkuO7EXo66wWKacuNyigtSU%2BVgJ%2Bg5%2BWp1GTyBYqcxzkU6xq9v2SHTehrxJA0RvBy2TevogRhG7XKp4GIHK4NbGsnh%2BJ0S2W4nIhbEMSoIq1Z7NIY5qzwqGs5JRnxeLQ%2Bx%2BYsZGF&X-Amz-Signature=d0b827eaf632fa67c3218ef238c4776a1fd944130a24cee5166c4c757fedda75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
