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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3OC64S%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD3eRxAuOIzVzT9fYFxmkRziW5Rhyp9GhFNom0%2B4r6dAiEA1IF5cUOXE2sO6rSO2rOLELTLedpoaghkxXeny%2FN%2FQ3gq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMO8HAUWHFQj8Ul8PSrcAzXBDeXoFpFeEe6ARBci1%2FlbPnO4JTq%2BzNqakImOO2R5mJZ6139QzrkDJtWScEmpJnQ4juU14tVO2fGg83u0Rtmxsr0tsenjtps%2BtYJtmWBThgtxOiTMa2fKy2ZAgjJbRp2weYSAreb3SiDkFJWWKKRiIknNp0cIBGZe662Zb7AqHWrY8WyrE42YSEjJIrjqVntR1%2BkcepGASJTwvg6vQwAuQcqKDk%2BMtvXolLKjKm%2BwePq7VbP6rEL74y%2FfhC0mriPl1Dn%2F2k2hQCUSKleqzifh%2FqHtq0xS%2BOV7myycOy8traq%2FA4qKrQFngXdJEOxbeBsZXwmrO0dw2lc6eoojyAUVrSCrdCC9zVzV71MbjQaoT3zflCcaHsV%2FS2%2Bk0xgp42VSafog7SOLuc6bsywc%2BMm7mTIXx8sLxRMK8zoVsedo64G8%2FSaJjsQXLnj6tCT1RqMqzPacpbufB8zPzHGw0fjpoAzStx61Ah%2BehyVy4ZSiZDeQb%2BNZPdUIndBuDCrabAzBGMKHRMEGuhkg7x0pmfR57PcjdkmKCb0OQyzYXoHRaKOVdRZHRx6FT6jpaHWPqHKJCkS6J72YDDnvb3TGDZbH7rH9Xg3CiQnXJmWTnViknr1TkUXo95x7CjKlMN%2FRoL4GOqUBwBvyFtoDjnGMLl7aqgH8onXsh2FzDgIS2foj4GvCacdocBuAJR2sC6HarFQDBucawFG8UTpYRDdyCn3Cl2nySx5jgCvbfiGqtoTRrFK2D6vbP%2F%2BXYvCM7MNj4gE%2FZ%2F8hi2XLx6yG6G1E3odILVrdtG5yXl0bBZj7VZTcxFXbihl2ZBFemk6Wp%2Fdxibu0EQmU0K0EYErSSYxd4xZTjy0TRiC6YLnP&X-Amz-Signature=8725749f4bebd8cec4de5e27f29e99c7d3ad47f06168ea4ba0bc907821d9dfd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3OC64S%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD3eRxAuOIzVzT9fYFxmkRziW5Rhyp9GhFNom0%2B4r6dAiEA1IF5cUOXE2sO6rSO2rOLELTLedpoaghkxXeny%2FN%2FQ3gq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMO8HAUWHFQj8Ul8PSrcAzXBDeXoFpFeEe6ARBci1%2FlbPnO4JTq%2BzNqakImOO2R5mJZ6139QzrkDJtWScEmpJnQ4juU14tVO2fGg83u0Rtmxsr0tsenjtps%2BtYJtmWBThgtxOiTMa2fKy2ZAgjJbRp2weYSAreb3SiDkFJWWKKRiIknNp0cIBGZe662Zb7AqHWrY8WyrE42YSEjJIrjqVntR1%2BkcepGASJTwvg6vQwAuQcqKDk%2BMtvXolLKjKm%2BwePq7VbP6rEL74y%2FfhC0mriPl1Dn%2F2k2hQCUSKleqzifh%2FqHtq0xS%2BOV7myycOy8traq%2FA4qKrQFngXdJEOxbeBsZXwmrO0dw2lc6eoojyAUVrSCrdCC9zVzV71MbjQaoT3zflCcaHsV%2FS2%2Bk0xgp42VSafog7SOLuc6bsywc%2BMm7mTIXx8sLxRMK8zoVsedo64G8%2FSaJjsQXLnj6tCT1RqMqzPacpbufB8zPzHGw0fjpoAzStx61Ah%2BehyVy4ZSiZDeQb%2BNZPdUIndBuDCrabAzBGMKHRMEGuhkg7x0pmfR57PcjdkmKCb0OQyzYXoHRaKOVdRZHRx6FT6jpaHWPqHKJCkS6J72YDDnvb3TGDZbH7rH9Xg3CiQnXJmWTnViknr1TkUXo95x7CjKlMN%2FRoL4GOqUBwBvyFtoDjnGMLl7aqgH8onXsh2FzDgIS2foj4GvCacdocBuAJR2sC6HarFQDBucawFG8UTpYRDdyCn3Cl2nySx5jgCvbfiGqtoTRrFK2D6vbP%2F%2BXYvCM7MNj4gE%2FZ%2F8hi2XLx6yG6G1E3odILVrdtG5yXl0bBZj7VZTcxFXbihl2ZBFemk6Wp%2Fdxibu0EQmU0K0EYErSSYxd4xZTjy0TRiC6YLnP&X-Amz-Signature=76d39a6b5a6f077395ad8d488dfbac5ac79fc442a5e711880a5faeffcd9a24c7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3OC64S%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD3eRxAuOIzVzT9fYFxmkRziW5Rhyp9GhFNom0%2B4r6dAiEA1IF5cUOXE2sO6rSO2rOLELTLedpoaghkxXeny%2FN%2FQ3gq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMO8HAUWHFQj8Ul8PSrcAzXBDeXoFpFeEe6ARBci1%2FlbPnO4JTq%2BzNqakImOO2R5mJZ6139QzrkDJtWScEmpJnQ4juU14tVO2fGg83u0Rtmxsr0tsenjtps%2BtYJtmWBThgtxOiTMa2fKy2ZAgjJbRp2weYSAreb3SiDkFJWWKKRiIknNp0cIBGZe662Zb7AqHWrY8WyrE42YSEjJIrjqVntR1%2BkcepGASJTwvg6vQwAuQcqKDk%2BMtvXolLKjKm%2BwePq7VbP6rEL74y%2FfhC0mriPl1Dn%2F2k2hQCUSKleqzifh%2FqHtq0xS%2BOV7myycOy8traq%2FA4qKrQFngXdJEOxbeBsZXwmrO0dw2lc6eoojyAUVrSCrdCC9zVzV71MbjQaoT3zflCcaHsV%2FS2%2Bk0xgp42VSafog7SOLuc6bsywc%2BMm7mTIXx8sLxRMK8zoVsedo64G8%2FSaJjsQXLnj6tCT1RqMqzPacpbufB8zPzHGw0fjpoAzStx61Ah%2BehyVy4ZSiZDeQb%2BNZPdUIndBuDCrabAzBGMKHRMEGuhkg7x0pmfR57PcjdkmKCb0OQyzYXoHRaKOVdRZHRx6FT6jpaHWPqHKJCkS6J72YDDnvb3TGDZbH7rH9Xg3CiQnXJmWTnViknr1TkUXo95x7CjKlMN%2FRoL4GOqUBwBvyFtoDjnGMLl7aqgH8onXsh2FzDgIS2foj4GvCacdocBuAJR2sC6HarFQDBucawFG8UTpYRDdyCn3Cl2nySx5jgCvbfiGqtoTRrFK2D6vbP%2F%2BXYvCM7MNj4gE%2FZ%2F8hi2XLx6yG6G1E3odILVrdtG5yXl0bBZj7VZTcxFXbihl2ZBFemk6Wp%2Fdxibu0EQmU0K0EYErSSYxd4xZTjy0TRiC6YLnP&X-Amz-Signature=c8ddd9a9cb973478d99b0478dee774ef0e2e40abca856a86e615429b2c10aad6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3OC64S%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD3eRxAuOIzVzT9fYFxmkRziW5Rhyp9GhFNom0%2B4r6dAiEA1IF5cUOXE2sO6rSO2rOLELTLedpoaghkxXeny%2FN%2FQ3gq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMO8HAUWHFQj8Ul8PSrcAzXBDeXoFpFeEe6ARBci1%2FlbPnO4JTq%2BzNqakImOO2R5mJZ6139QzrkDJtWScEmpJnQ4juU14tVO2fGg83u0Rtmxsr0tsenjtps%2BtYJtmWBThgtxOiTMa2fKy2ZAgjJbRp2weYSAreb3SiDkFJWWKKRiIknNp0cIBGZe662Zb7AqHWrY8WyrE42YSEjJIrjqVntR1%2BkcepGASJTwvg6vQwAuQcqKDk%2BMtvXolLKjKm%2BwePq7VbP6rEL74y%2FfhC0mriPl1Dn%2F2k2hQCUSKleqzifh%2FqHtq0xS%2BOV7myycOy8traq%2FA4qKrQFngXdJEOxbeBsZXwmrO0dw2lc6eoojyAUVrSCrdCC9zVzV71MbjQaoT3zflCcaHsV%2FS2%2Bk0xgp42VSafog7SOLuc6bsywc%2BMm7mTIXx8sLxRMK8zoVsedo64G8%2FSaJjsQXLnj6tCT1RqMqzPacpbufB8zPzHGw0fjpoAzStx61Ah%2BehyVy4ZSiZDeQb%2BNZPdUIndBuDCrabAzBGMKHRMEGuhkg7x0pmfR57PcjdkmKCb0OQyzYXoHRaKOVdRZHRx6FT6jpaHWPqHKJCkS6J72YDDnvb3TGDZbH7rH9Xg3CiQnXJmWTnViknr1TkUXo95x7CjKlMN%2FRoL4GOqUBwBvyFtoDjnGMLl7aqgH8onXsh2FzDgIS2foj4GvCacdocBuAJR2sC6HarFQDBucawFG8UTpYRDdyCn3Cl2nySx5jgCvbfiGqtoTRrFK2D6vbP%2F%2BXYvCM7MNj4gE%2FZ%2F8hi2XLx6yG6G1E3odILVrdtG5yXl0bBZj7VZTcxFXbihl2ZBFemk6Wp%2Fdxibu0EQmU0K0EYErSSYxd4xZTjy0TRiC6YLnP&X-Amz-Signature=56191e0cc79c987b7236c7188735e5c9316d868691e1b1f2fd5120ec305052d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3OC64S%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD3eRxAuOIzVzT9fYFxmkRziW5Rhyp9GhFNom0%2B4r6dAiEA1IF5cUOXE2sO6rSO2rOLELTLedpoaghkxXeny%2FN%2FQ3gq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMO8HAUWHFQj8Ul8PSrcAzXBDeXoFpFeEe6ARBci1%2FlbPnO4JTq%2BzNqakImOO2R5mJZ6139QzrkDJtWScEmpJnQ4juU14tVO2fGg83u0Rtmxsr0tsenjtps%2BtYJtmWBThgtxOiTMa2fKy2ZAgjJbRp2weYSAreb3SiDkFJWWKKRiIknNp0cIBGZe662Zb7AqHWrY8WyrE42YSEjJIrjqVntR1%2BkcepGASJTwvg6vQwAuQcqKDk%2BMtvXolLKjKm%2BwePq7VbP6rEL74y%2FfhC0mriPl1Dn%2F2k2hQCUSKleqzifh%2FqHtq0xS%2BOV7myycOy8traq%2FA4qKrQFngXdJEOxbeBsZXwmrO0dw2lc6eoojyAUVrSCrdCC9zVzV71MbjQaoT3zflCcaHsV%2FS2%2Bk0xgp42VSafog7SOLuc6bsywc%2BMm7mTIXx8sLxRMK8zoVsedo64G8%2FSaJjsQXLnj6tCT1RqMqzPacpbufB8zPzHGw0fjpoAzStx61Ah%2BehyVy4ZSiZDeQb%2BNZPdUIndBuDCrabAzBGMKHRMEGuhkg7x0pmfR57PcjdkmKCb0OQyzYXoHRaKOVdRZHRx6FT6jpaHWPqHKJCkS6J72YDDnvb3TGDZbH7rH9Xg3CiQnXJmWTnViknr1TkUXo95x7CjKlMN%2FRoL4GOqUBwBvyFtoDjnGMLl7aqgH8onXsh2FzDgIS2foj4GvCacdocBuAJR2sC6HarFQDBucawFG8UTpYRDdyCn3Cl2nySx5jgCvbfiGqtoTRrFK2D6vbP%2F%2BXYvCM7MNj4gE%2FZ%2F8hi2XLx6yG6G1E3odILVrdtG5yXl0bBZj7VZTcxFXbihl2ZBFemk6Wp%2Fdxibu0EQmU0K0EYErSSYxd4xZTjy0TRiC6YLnP&X-Amz-Signature=871922387b4de2120cddc67b79483312590205452c794c38240b485369fac714&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3OC64S%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD3eRxAuOIzVzT9fYFxmkRziW5Rhyp9GhFNom0%2B4r6dAiEA1IF5cUOXE2sO6rSO2rOLELTLedpoaghkxXeny%2FN%2FQ3gq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMO8HAUWHFQj8Ul8PSrcAzXBDeXoFpFeEe6ARBci1%2FlbPnO4JTq%2BzNqakImOO2R5mJZ6139QzrkDJtWScEmpJnQ4juU14tVO2fGg83u0Rtmxsr0tsenjtps%2BtYJtmWBThgtxOiTMa2fKy2ZAgjJbRp2weYSAreb3SiDkFJWWKKRiIknNp0cIBGZe662Zb7AqHWrY8WyrE42YSEjJIrjqVntR1%2BkcepGASJTwvg6vQwAuQcqKDk%2BMtvXolLKjKm%2BwePq7VbP6rEL74y%2FfhC0mriPl1Dn%2F2k2hQCUSKleqzifh%2FqHtq0xS%2BOV7myycOy8traq%2FA4qKrQFngXdJEOxbeBsZXwmrO0dw2lc6eoojyAUVrSCrdCC9zVzV71MbjQaoT3zflCcaHsV%2FS2%2Bk0xgp42VSafog7SOLuc6bsywc%2BMm7mTIXx8sLxRMK8zoVsedo64G8%2FSaJjsQXLnj6tCT1RqMqzPacpbufB8zPzHGw0fjpoAzStx61Ah%2BehyVy4ZSiZDeQb%2BNZPdUIndBuDCrabAzBGMKHRMEGuhkg7x0pmfR57PcjdkmKCb0OQyzYXoHRaKOVdRZHRx6FT6jpaHWPqHKJCkS6J72YDDnvb3TGDZbH7rH9Xg3CiQnXJmWTnViknr1TkUXo95x7CjKlMN%2FRoL4GOqUBwBvyFtoDjnGMLl7aqgH8onXsh2FzDgIS2foj4GvCacdocBuAJR2sC6HarFQDBucawFG8UTpYRDdyCn3Cl2nySx5jgCvbfiGqtoTRrFK2D6vbP%2F%2BXYvCM7MNj4gE%2FZ%2F8hi2XLx6yG6G1E3odILVrdtG5yXl0bBZj7VZTcxFXbihl2ZBFemk6Wp%2Fdxibu0EQmU0K0EYErSSYxd4xZTjy0TRiC6YLnP&X-Amz-Signature=8269c97bccd7006edccb9f38985d5dda0628edec834ff264f75fa9ec60c15b41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3OC64S%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD3eRxAuOIzVzT9fYFxmkRziW5Rhyp9GhFNom0%2B4r6dAiEA1IF5cUOXE2sO6rSO2rOLELTLedpoaghkxXeny%2FN%2FQ3gq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMO8HAUWHFQj8Ul8PSrcAzXBDeXoFpFeEe6ARBci1%2FlbPnO4JTq%2BzNqakImOO2R5mJZ6139QzrkDJtWScEmpJnQ4juU14tVO2fGg83u0Rtmxsr0tsenjtps%2BtYJtmWBThgtxOiTMa2fKy2ZAgjJbRp2weYSAreb3SiDkFJWWKKRiIknNp0cIBGZe662Zb7AqHWrY8WyrE42YSEjJIrjqVntR1%2BkcepGASJTwvg6vQwAuQcqKDk%2BMtvXolLKjKm%2BwePq7VbP6rEL74y%2FfhC0mriPl1Dn%2F2k2hQCUSKleqzifh%2FqHtq0xS%2BOV7myycOy8traq%2FA4qKrQFngXdJEOxbeBsZXwmrO0dw2lc6eoojyAUVrSCrdCC9zVzV71MbjQaoT3zflCcaHsV%2FS2%2Bk0xgp42VSafog7SOLuc6bsywc%2BMm7mTIXx8sLxRMK8zoVsedo64G8%2FSaJjsQXLnj6tCT1RqMqzPacpbufB8zPzHGw0fjpoAzStx61Ah%2BehyVy4ZSiZDeQb%2BNZPdUIndBuDCrabAzBGMKHRMEGuhkg7x0pmfR57PcjdkmKCb0OQyzYXoHRaKOVdRZHRx6FT6jpaHWPqHKJCkS6J72YDDnvb3TGDZbH7rH9Xg3CiQnXJmWTnViknr1TkUXo95x7CjKlMN%2FRoL4GOqUBwBvyFtoDjnGMLl7aqgH8onXsh2FzDgIS2foj4GvCacdocBuAJR2sC6HarFQDBucawFG8UTpYRDdyCn3Cl2nySx5jgCvbfiGqtoTRrFK2D6vbP%2F%2BXYvCM7MNj4gE%2FZ%2F8hi2XLx6yG6G1E3odILVrdtG5yXl0bBZj7VZTcxFXbihl2ZBFemk6Wp%2Fdxibu0EQmU0K0EYErSSYxd4xZTjy0TRiC6YLnP&X-Amz-Signature=239493afb325bcf3cfffb2085b9cc6cdb094c77cf608411c171a88ab1e011beb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3OC64S%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD3eRxAuOIzVzT9fYFxmkRziW5Rhyp9GhFNom0%2B4r6dAiEA1IF5cUOXE2sO6rSO2rOLELTLedpoaghkxXeny%2FN%2FQ3gq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMO8HAUWHFQj8Ul8PSrcAzXBDeXoFpFeEe6ARBci1%2FlbPnO4JTq%2BzNqakImOO2R5mJZ6139QzrkDJtWScEmpJnQ4juU14tVO2fGg83u0Rtmxsr0tsenjtps%2BtYJtmWBThgtxOiTMa2fKy2ZAgjJbRp2weYSAreb3SiDkFJWWKKRiIknNp0cIBGZe662Zb7AqHWrY8WyrE42YSEjJIrjqVntR1%2BkcepGASJTwvg6vQwAuQcqKDk%2BMtvXolLKjKm%2BwePq7VbP6rEL74y%2FfhC0mriPl1Dn%2F2k2hQCUSKleqzifh%2FqHtq0xS%2BOV7myycOy8traq%2FA4qKrQFngXdJEOxbeBsZXwmrO0dw2lc6eoojyAUVrSCrdCC9zVzV71MbjQaoT3zflCcaHsV%2FS2%2Bk0xgp42VSafog7SOLuc6bsywc%2BMm7mTIXx8sLxRMK8zoVsedo64G8%2FSaJjsQXLnj6tCT1RqMqzPacpbufB8zPzHGw0fjpoAzStx61Ah%2BehyVy4ZSiZDeQb%2BNZPdUIndBuDCrabAzBGMKHRMEGuhkg7x0pmfR57PcjdkmKCb0OQyzYXoHRaKOVdRZHRx6FT6jpaHWPqHKJCkS6J72YDDnvb3TGDZbH7rH9Xg3CiQnXJmWTnViknr1TkUXo95x7CjKlMN%2FRoL4GOqUBwBvyFtoDjnGMLl7aqgH8onXsh2FzDgIS2foj4GvCacdocBuAJR2sC6HarFQDBucawFG8UTpYRDdyCn3Cl2nySx5jgCvbfiGqtoTRrFK2D6vbP%2F%2BXYvCM7MNj4gE%2FZ%2F8hi2XLx6yG6G1E3odILVrdtG5yXl0bBZj7VZTcxFXbihl2ZBFemk6Wp%2Fdxibu0EQmU0K0EYErSSYxd4xZTjy0TRiC6YLnP&X-Amz-Signature=91f1ea107b9e5e7eb6100545caa70b4f6ba6e1b02c77fafef781365a0bff2eed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
