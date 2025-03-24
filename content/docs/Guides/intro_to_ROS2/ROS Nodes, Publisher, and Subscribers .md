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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYNB4CB7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS1XOz%2B7ywyjDLoziymGiyqHOSt3cCmyRacF1%2Fr7zRoAiEAl6FZx8Qb8xUVr19j8g9T5VRwqMbUGl9DxujWWG%2FM1OYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDywRqbTKIvbcbnxnSrcA8655yU%2F3vISVTusvL7305nK3bwOir%2Bgw9s141%2FHoevy4hITry%2BCkqPA1uQ9iZh7ZmEIsgC6ZCgx8gVOqJTEpLYo6Am%2BiCdbKBzYVZdCU3xCIkowxmKAMFcKeU1W4f%2Fo%2BVGnVxFaedh71imqO6Rw5Y26bPrubPrY5SPgQDfzQq%2FCgoVhmIZutzpIij9iUjkFVmtwJHwde14fjwJf07JWjbBxT%2FYyXnvJfU%2BzySwK9UlON6uDH1yIuakhJaXbs%2BELJAEySV2kzNa6ajlEbJt%2FZ1eRuyB9I4SjvuqAa2O00Ao2eGoId%2FHcqbj6vs1R5LB0QD1P28CJACL9bpm8x2BnPeYfgpMLhnyv6BdvkznYpd4GPCOzUkRRZi2Oj%2FWnjnQW%2FB9lkxi%2B%2F%2Fa4GYkhTocI9dRc5n5vNZDUO%2BQYgDQjMWMdeykyizeGmef5jZWQ9iV6fsI8DIC67Nbu3QzsF2ClB0vcJMsXLfy%2BVS8QGdcWM5xhCHtT9yM%2B452zUq15Egiv6Atl83hHCahLXYp7vw31afQArMZqaV1m1kYewaNmosWiY9lYiq7SZIDfz%2BaS4If7jRgB4MFMG0N%2F894NoM8ANAMWuPliGt8jlDGLsmyLRYUekKz1UhkCBESwEzfPMM3whL8GOqUB4tXpGe6Uk0JAMEsvyltRZihHMkITD0wIyt3htVCv1yyS87EBW9EIQ0aQ9PQSz6rmDrJfoxnpj19BzOkRg56Y8Bl07GcyGKIgvtAV%2BrCf%2BxVgSeByMkfaAzO%2FgngHvE%2FWEMVEQZHiLiLSNDYZH3TG16BkYN8atZmSg87%2Fct%2FNdjRNsITTLgbosoX8vVvOGK5aDYNw0KgUHgIvLESfYSlXRchXWx9x&X-Amz-Signature=4aea9ca14e9f37e307370f93960c2aebbf0b3985c26b6972999c975f73b3bed2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYNB4CB7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS1XOz%2B7ywyjDLoziymGiyqHOSt3cCmyRacF1%2Fr7zRoAiEAl6FZx8Qb8xUVr19j8g9T5VRwqMbUGl9DxujWWG%2FM1OYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDywRqbTKIvbcbnxnSrcA8655yU%2F3vISVTusvL7305nK3bwOir%2Bgw9s141%2FHoevy4hITry%2BCkqPA1uQ9iZh7ZmEIsgC6ZCgx8gVOqJTEpLYo6Am%2BiCdbKBzYVZdCU3xCIkowxmKAMFcKeU1W4f%2Fo%2BVGnVxFaedh71imqO6Rw5Y26bPrubPrY5SPgQDfzQq%2FCgoVhmIZutzpIij9iUjkFVmtwJHwde14fjwJf07JWjbBxT%2FYyXnvJfU%2BzySwK9UlON6uDH1yIuakhJaXbs%2BELJAEySV2kzNa6ajlEbJt%2FZ1eRuyB9I4SjvuqAa2O00Ao2eGoId%2FHcqbj6vs1R5LB0QD1P28CJACL9bpm8x2BnPeYfgpMLhnyv6BdvkznYpd4GPCOzUkRRZi2Oj%2FWnjnQW%2FB9lkxi%2B%2F%2Fa4GYkhTocI9dRc5n5vNZDUO%2BQYgDQjMWMdeykyizeGmef5jZWQ9iV6fsI8DIC67Nbu3QzsF2ClB0vcJMsXLfy%2BVS8QGdcWM5xhCHtT9yM%2B452zUq15Egiv6Atl83hHCahLXYp7vw31afQArMZqaV1m1kYewaNmosWiY9lYiq7SZIDfz%2BaS4If7jRgB4MFMG0N%2F894NoM8ANAMWuPliGt8jlDGLsmyLRYUekKz1UhkCBESwEzfPMM3whL8GOqUB4tXpGe6Uk0JAMEsvyltRZihHMkITD0wIyt3htVCv1yyS87EBW9EIQ0aQ9PQSz6rmDrJfoxnpj19BzOkRg56Y8Bl07GcyGKIgvtAV%2BrCf%2BxVgSeByMkfaAzO%2FgngHvE%2FWEMVEQZHiLiLSNDYZH3TG16BkYN8atZmSg87%2Fct%2FNdjRNsITTLgbosoX8vVvOGK5aDYNw0KgUHgIvLESfYSlXRchXWx9x&X-Amz-Signature=da998489e1bba92a1e031c8c906a3cbd215834ade375f131be22da6332fd6472&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYNB4CB7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS1XOz%2B7ywyjDLoziymGiyqHOSt3cCmyRacF1%2Fr7zRoAiEAl6FZx8Qb8xUVr19j8g9T5VRwqMbUGl9DxujWWG%2FM1OYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDywRqbTKIvbcbnxnSrcA8655yU%2F3vISVTusvL7305nK3bwOir%2Bgw9s141%2FHoevy4hITry%2BCkqPA1uQ9iZh7ZmEIsgC6ZCgx8gVOqJTEpLYo6Am%2BiCdbKBzYVZdCU3xCIkowxmKAMFcKeU1W4f%2Fo%2BVGnVxFaedh71imqO6Rw5Y26bPrubPrY5SPgQDfzQq%2FCgoVhmIZutzpIij9iUjkFVmtwJHwde14fjwJf07JWjbBxT%2FYyXnvJfU%2BzySwK9UlON6uDH1yIuakhJaXbs%2BELJAEySV2kzNa6ajlEbJt%2FZ1eRuyB9I4SjvuqAa2O00Ao2eGoId%2FHcqbj6vs1R5LB0QD1P28CJACL9bpm8x2BnPeYfgpMLhnyv6BdvkznYpd4GPCOzUkRRZi2Oj%2FWnjnQW%2FB9lkxi%2B%2F%2Fa4GYkhTocI9dRc5n5vNZDUO%2BQYgDQjMWMdeykyizeGmef5jZWQ9iV6fsI8DIC67Nbu3QzsF2ClB0vcJMsXLfy%2BVS8QGdcWM5xhCHtT9yM%2B452zUq15Egiv6Atl83hHCahLXYp7vw31afQArMZqaV1m1kYewaNmosWiY9lYiq7SZIDfz%2BaS4If7jRgB4MFMG0N%2F894NoM8ANAMWuPliGt8jlDGLsmyLRYUekKz1UhkCBESwEzfPMM3whL8GOqUB4tXpGe6Uk0JAMEsvyltRZihHMkITD0wIyt3htVCv1yyS87EBW9EIQ0aQ9PQSz6rmDrJfoxnpj19BzOkRg56Y8Bl07GcyGKIgvtAV%2BrCf%2BxVgSeByMkfaAzO%2FgngHvE%2FWEMVEQZHiLiLSNDYZH3TG16BkYN8atZmSg87%2Fct%2FNdjRNsITTLgbosoX8vVvOGK5aDYNw0KgUHgIvLESfYSlXRchXWx9x&X-Amz-Signature=7dc40fea3fa2e1c8deb4763e3f705f8d57afef52ea9e248fde4f8d3c24222cf6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYNB4CB7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS1XOz%2B7ywyjDLoziymGiyqHOSt3cCmyRacF1%2Fr7zRoAiEAl6FZx8Qb8xUVr19j8g9T5VRwqMbUGl9DxujWWG%2FM1OYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDywRqbTKIvbcbnxnSrcA8655yU%2F3vISVTusvL7305nK3bwOir%2Bgw9s141%2FHoevy4hITry%2BCkqPA1uQ9iZh7ZmEIsgC6ZCgx8gVOqJTEpLYo6Am%2BiCdbKBzYVZdCU3xCIkowxmKAMFcKeU1W4f%2Fo%2BVGnVxFaedh71imqO6Rw5Y26bPrubPrY5SPgQDfzQq%2FCgoVhmIZutzpIij9iUjkFVmtwJHwde14fjwJf07JWjbBxT%2FYyXnvJfU%2BzySwK9UlON6uDH1yIuakhJaXbs%2BELJAEySV2kzNa6ajlEbJt%2FZ1eRuyB9I4SjvuqAa2O00Ao2eGoId%2FHcqbj6vs1R5LB0QD1P28CJACL9bpm8x2BnPeYfgpMLhnyv6BdvkznYpd4GPCOzUkRRZi2Oj%2FWnjnQW%2FB9lkxi%2B%2F%2Fa4GYkhTocI9dRc5n5vNZDUO%2BQYgDQjMWMdeykyizeGmef5jZWQ9iV6fsI8DIC67Nbu3QzsF2ClB0vcJMsXLfy%2BVS8QGdcWM5xhCHtT9yM%2B452zUq15Egiv6Atl83hHCahLXYp7vw31afQArMZqaV1m1kYewaNmosWiY9lYiq7SZIDfz%2BaS4If7jRgB4MFMG0N%2F894NoM8ANAMWuPliGt8jlDGLsmyLRYUekKz1UhkCBESwEzfPMM3whL8GOqUB4tXpGe6Uk0JAMEsvyltRZihHMkITD0wIyt3htVCv1yyS87EBW9EIQ0aQ9PQSz6rmDrJfoxnpj19BzOkRg56Y8Bl07GcyGKIgvtAV%2BrCf%2BxVgSeByMkfaAzO%2FgngHvE%2FWEMVEQZHiLiLSNDYZH3TG16BkYN8atZmSg87%2Fct%2FNdjRNsITTLgbosoX8vVvOGK5aDYNw0KgUHgIvLESfYSlXRchXWx9x&X-Amz-Signature=5624be9a858d8d990c05a226a442dc909f9b5f7c964354c25c2628fc6aee3d12&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYNB4CB7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS1XOz%2B7ywyjDLoziymGiyqHOSt3cCmyRacF1%2Fr7zRoAiEAl6FZx8Qb8xUVr19j8g9T5VRwqMbUGl9DxujWWG%2FM1OYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDywRqbTKIvbcbnxnSrcA8655yU%2F3vISVTusvL7305nK3bwOir%2Bgw9s141%2FHoevy4hITry%2BCkqPA1uQ9iZh7ZmEIsgC6ZCgx8gVOqJTEpLYo6Am%2BiCdbKBzYVZdCU3xCIkowxmKAMFcKeU1W4f%2Fo%2BVGnVxFaedh71imqO6Rw5Y26bPrubPrY5SPgQDfzQq%2FCgoVhmIZutzpIij9iUjkFVmtwJHwde14fjwJf07JWjbBxT%2FYyXnvJfU%2BzySwK9UlON6uDH1yIuakhJaXbs%2BELJAEySV2kzNa6ajlEbJt%2FZ1eRuyB9I4SjvuqAa2O00Ao2eGoId%2FHcqbj6vs1R5LB0QD1P28CJACL9bpm8x2BnPeYfgpMLhnyv6BdvkznYpd4GPCOzUkRRZi2Oj%2FWnjnQW%2FB9lkxi%2B%2F%2Fa4GYkhTocI9dRc5n5vNZDUO%2BQYgDQjMWMdeykyizeGmef5jZWQ9iV6fsI8DIC67Nbu3QzsF2ClB0vcJMsXLfy%2BVS8QGdcWM5xhCHtT9yM%2B452zUq15Egiv6Atl83hHCahLXYp7vw31afQArMZqaV1m1kYewaNmosWiY9lYiq7SZIDfz%2BaS4If7jRgB4MFMG0N%2F894NoM8ANAMWuPliGt8jlDGLsmyLRYUekKz1UhkCBESwEzfPMM3whL8GOqUB4tXpGe6Uk0JAMEsvyltRZihHMkITD0wIyt3htVCv1yyS87EBW9EIQ0aQ9PQSz6rmDrJfoxnpj19BzOkRg56Y8Bl07GcyGKIgvtAV%2BrCf%2BxVgSeByMkfaAzO%2FgngHvE%2FWEMVEQZHiLiLSNDYZH3TG16BkYN8atZmSg87%2Fct%2FNdjRNsITTLgbosoX8vVvOGK5aDYNw0KgUHgIvLESfYSlXRchXWx9x&X-Amz-Signature=7f93fc363e70616f29e73fcfa4434e6337446c25e82f6b01fb68628650842203&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYNB4CB7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS1XOz%2B7ywyjDLoziymGiyqHOSt3cCmyRacF1%2Fr7zRoAiEAl6FZx8Qb8xUVr19j8g9T5VRwqMbUGl9DxujWWG%2FM1OYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDywRqbTKIvbcbnxnSrcA8655yU%2F3vISVTusvL7305nK3bwOir%2Bgw9s141%2FHoevy4hITry%2BCkqPA1uQ9iZh7ZmEIsgC6ZCgx8gVOqJTEpLYo6Am%2BiCdbKBzYVZdCU3xCIkowxmKAMFcKeU1W4f%2Fo%2BVGnVxFaedh71imqO6Rw5Y26bPrubPrY5SPgQDfzQq%2FCgoVhmIZutzpIij9iUjkFVmtwJHwde14fjwJf07JWjbBxT%2FYyXnvJfU%2BzySwK9UlON6uDH1yIuakhJaXbs%2BELJAEySV2kzNa6ajlEbJt%2FZ1eRuyB9I4SjvuqAa2O00Ao2eGoId%2FHcqbj6vs1R5LB0QD1P28CJACL9bpm8x2BnPeYfgpMLhnyv6BdvkznYpd4GPCOzUkRRZi2Oj%2FWnjnQW%2FB9lkxi%2B%2F%2Fa4GYkhTocI9dRc5n5vNZDUO%2BQYgDQjMWMdeykyizeGmef5jZWQ9iV6fsI8DIC67Nbu3QzsF2ClB0vcJMsXLfy%2BVS8QGdcWM5xhCHtT9yM%2B452zUq15Egiv6Atl83hHCahLXYp7vw31afQArMZqaV1m1kYewaNmosWiY9lYiq7SZIDfz%2BaS4If7jRgB4MFMG0N%2F894NoM8ANAMWuPliGt8jlDGLsmyLRYUekKz1UhkCBESwEzfPMM3whL8GOqUB4tXpGe6Uk0JAMEsvyltRZihHMkITD0wIyt3htVCv1yyS87EBW9EIQ0aQ9PQSz6rmDrJfoxnpj19BzOkRg56Y8Bl07GcyGKIgvtAV%2BrCf%2BxVgSeByMkfaAzO%2FgngHvE%2FWEMVEQZHiLiLSNDYZH3TG16BkYN8atZmSg87%2Fct%2FNdjRNsITTLgbosoX8vVvOGK5aDYNw0KgUHgIvLESfYSlXRchXWx9x&X-Amz-Signature=9a0bf0651972ff1d540102b6fbac6b50af07d5b6c23a06e2f868f1db14da7be3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYNB4CB7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS1XOz%2B7ywyjDLoziymGiyqHOSt3cCmyRacF1%2Fr7zRoAiEAl6FZx8Qb8xUVr19j8g9T5VRwqMbUGl9DxujWWG%2FM1OYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDywRqbTKIvbcbnxnSrcA8655yU%2F3vISVTusvL7305nK3bwOir%2Bgw9s141%2FHoevy4hITry%2BCkqPA1uQ9iZh7ZmEIsgC6ZCgx8gVOqJTEpLYo6Am%2BiCdbKBzYVZdCU3xCIkowxmKAMFcKeU1W4f%2Fo%2BVGnVxFaedh71imqO6Rw5Y26bPrubPrY5SPgQDfzQq%2FCgoVhmIZutzpIij9iUjkFVmtwJHwde14fjwJf07JWjbBxT%2FYyXnvJfU%2BzySwK9UlON6uDH1yIuakhJaXbs%2BELJAEySV2kzNa6ajlEbJt%2FZ1eRuyB9I4SjvuqAa2O00Ao2eGoId%2FHcqbj6vs1R5LB0QD1P28CJACL9bpm8x2BnPeYfgpMLhnyv6BdvkznYpd4GPCOzUkRRZi2Oj%2FWnjnQW%2FB9lkxi%2B%2F%2Fa4GYkhTocI9dRc5n5vNZDUO%2BQYgDQjMWMdeykyizeGmef5jZWQ9iV6fsI8DIC67Nbu3QzsF2ClB0vcJMsXLfy%2BVS8QGdcWM5xhCHtT9yM%2B452zUq15Egiv6Atl83hHCahLXYp7vw31afQArMZqaV1m1kYewaNmosWiY9lYiq7SZIDfz%2BaS4If7jRgB4MFMG0N%2F894NoM8ANAMWuPliGt8jlDGLsmyLRYUekKz1UhkCBESwEzfPMM3whL8GOqUB4tXpGe6Uk0JAMEsvyltRZihHMkITD0wIyt3htVCv1yyS87EBW9EIQ0aQ9PQSz6rmDrJfoxnpj19BzOkRg56Y8Bl07GcyGKIgvtAV%2BrCf%2BxVgSeByMkfaAzO%2FgngHvE%2FWEMVEQZHiLiLSNDYZH3TG16BkYN8atZmSg87%2Fct%2FNdjRNsITTLgbosoX8vVvOGK5aDYNw0KgUHgIvLESfYSlXRchXWx9x&X-Amz-Signature=0b60b3503cc2c415d698e93534b2d7499e3506d107ff090b15782c71e234264b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYNB4CB7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS1XOz%2B7ywyjDLoziymGiyqHOSt3cCmyRacF1%2Fr7zRoAiEAl6FZx8Qb8xUVr19j8g9T5VRwqMbUGl9DxujWWG%2FM1OYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDywRqbTKIvbcbnxnSrcA8655yU%2F3vISVTusvL7305nK3bwOir%2Bgw9s141%2FHoevy4hITry%2BCkqPA1uQ9iZh7ZmEIsgC6ZCgx8gVOqJTEpLYo6Am%2BiCdbKBzYVZdCU3xCIkowxmKAMFcKeU1W4f%2Fo%2BVGnVxFaedh71imqO6Rw5Y26bPrubPrY5SPgQDfzQq%2FCgoVhmIZutzpIij9iUjkFVmtwJHwde14fjwJf07JWjbBxT%2FYyXnvJfU%2BzySwK9UlON6uDH1yIuakhJaXbs%2BELJAEySV2kzNa6ajlEbJt%2FZ1eRuyB9I4SjvuqAa2O00Ao2eGoId%2FHcqbj6vs1R5LB0QD1P28CJACL9bpm8x2BnPeYfgpMLhnyv6BdvkznYpd4GPCOzUkRRZi2Oj%2FWnjnQW%2FB9lkxi%2B%2F%2Fa4GYkhTocI9dRc5n5vNZDUO%2BQYgDQjMWMdeykyizeGmef5jZWQ9iV6fsI8DIC67Nbu3QzsF2ClB0vcJMsXLfy%2BVS8QGdcWM5xhCHtT9yM%2B452zUq15Egiv6Atl83hHCahLXYp7vw31afQArMZqaV1m1kYewaNmosWiY9lYiq7SZIDfz%2BaS4If7jRgB4MFMG0N%2F894NoM8ANAMWuPliGt8jlDGLsmyLRYUekKz1UhkCBESwEzfPMM3whL8GOqUB4tXpGe6Uk0JAMEsvyltRZihHMkITD0wIyt3htVCv1yyS87EBW9EIQ0aQ9PQSz6rmDrJfoxnpj19BzOkRg56Y8Bl07GcyGKIgvtAV%2BrCf%2BxVgSeByMkfaAzO%2FgngHvE%2FWEMVEQZHiLiLSNDYZH3TG16BkYN8atZmSg87%2Fct%2FNdjRNsITTLgbosoX8vVvOGK5aDYNw0KgUHgIvLESfYSlXRchXWx9x&X-Amz-Signature=31f0d160e7f256d0ef00ec21621cd68aecfe5f86adebd929379149c79328d0cc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
