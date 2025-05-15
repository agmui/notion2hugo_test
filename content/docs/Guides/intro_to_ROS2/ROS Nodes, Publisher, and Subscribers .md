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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FJFILO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFBusFnfKpdn5wRz2PXe%2BquG%2BmRsXB9wUL4sGPJH%2ByztAiEAu8MRubtb9%2FFYfLAK5PunGqxRte8dFsGr9bbwwdGTuTAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMNNyHDhjst9ecvjbCrcA9m5eqUUVC4HCr%2FMWyPiY7YGHtiJc2kJuusthNl5VbchIoCQ543BS%2FgeiPgqQFLJxNjrAAzasKnrxdXcOJCF7%2Bor6i%2FjL1%2BQcgHgAwAwh76Ty%2BSJAPZOXABA9VQQtSJu3q9XGHY5%2B6t7soVlSS%2Fy4E7rRCtFzm77fdE4M0ziRc98O7B%2BkutpRyjEboGQHAJuFeXsnMyvllO0ySGeV9o3F%2FchqfQ5k0dqfrT%2FE0QQeXPOIstQnrChkruBV35hlzCtBPziVEvookDY2zEq0tGGjKvy6m56kwoZ7Dnbb%2Bpw%2FiCN7M3aJPN8CD6KwvQw%2FAJ0RFqIBEuPvPNp7ysLIBC4uKrWX%2Br9nF04G5FATSmtKcggbcL%2FBQmI2GXH0sn702ctX3zNGZ2Ghd4bUEti1UITbfW0iHj1LBBQfYN%2FzC%2BoB0ze4RBY7ZCrfIQZDbu9ZDB0PVdm%2FkBqRUbPlR1v8U0bEGcUV4dr%2BsRlWax2tB1SuZY8cF%2F6jDRBWA1mF5B%2Bg1eTXs10uJYkL0zj1RMvGhj%2FZ6iy%2F30y5JZsIFUluPrAk7%2BBWGLejngx7K3d2A7rYLz1WBWS%2BP1AE5ZzRqG5Wo2DoMaODeyXs%2FeP6b398fbLO%2FzHKZOJ1A%2BugmPSqyNOMJKFlsEGOqUBggNoLgYkoTuV9rbMBtpgiFbDybkP82QdYKi0u6qcByZOpAOnshC64Fpp0KpKETBkE7iFyu3P6HchQtEUnp98ak8zQCntkrzhNaB%2B0CChe%2B3ZNUwn9UfYgBhlvKnHyHvCtRyKqnRk9GxknyObIMjXJJR7IxQKFu9%2FlxGkXfwxeJjbGH%2FmSaz2KLDahk4HZLag0l9%2Bs8kNIoi06uIqEjtlnVrCI8FO&X-Amz-Signature=2a6563f17225dadaa944925997a61bc079e44e6c071d587465bd6b8e14309b6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FJFILO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFBusFnfKpdn5wRz2PXe%2BquG%2BmRsXB9wUL4sGPJH%2ByztAiEAu8MRubtb9%2FFYfLAK5PunGqxRte8dFsGr9bbwwdGTuTAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMNNyHDhjst9ecvjbCrcA9m5eqUUVC4HCr%2FMWyPiY7YGHtiJc2kJuusthNl5VbchIoCQ543BS%2FgeiPgqQFLJxNjrAAzasKnrxdXcOJCF7%2Bor6i%2FjL1%2BQcgHgAwAwh76Ty%2BSJAPZOXABA9VQQtSJu3q9XGHY5%2B6t7soVlSS%2Fy4E7rRCtFzm77fdE4M0ziRc98O7B%2BkutpRyjEboGQHAJuFeXsnMyvllO0ySGeV9o3F%2FchqfQ5k0dqfrT%2FE0QQeXPOIstQnrChkruBV35hlzCtBPziVEvookDY2zEq0tGGjKvy6m56kwoZ7Dnbb%2Bpw%2FiCN7M3aJPN8CD6KwvQw%2FAJ0RFqIBEuPvPNp7ysLIBC4uKrWX%2Br9nF04G5FATSmtKcggbcL%2FBQmI2GXH0sn702ctX3zNGZ2Ghd4bUEti1UITbfW0iHj1LBBQfYN%2FzC%2BoB0ze4RBY7ZCrfIQZDbu9ZDB0PVdm%2FkBqRUbPlR1v8U0bEGcUV4dr%2BsRlWax2tB1SuZY8cF%2F6jDRBWA1mF5B%2Bg1eTXs10uJYkL0zj1RMvGhj%2FZ6iy%2F30y5JZsIFUluPrAk7%2BBWGLejngx7K3d2A7rYLz1WBWS%2BP1AE5ZzRqG5Wo2DoMaODeyXs%2FeP6b398fbLO%2FzHKZOJ1A%2BugmPSqyNOMJKFlsEGOqUBggNoLgYkoTuV9rbMBtpgiFbDybkP82QdYKi0u6qcByZOpAOnshC64Fpp0KpKETBkE7iFyu3P6HchQtEUnp98ak8zQCntkrzhNaB%2B0CChe%2B3ZNUwn9UfYgBhlvKnHyHvCtRyKqnRk9GxknyObIMjXJJR7IxQKFu9%2FlxGkXfwxeJjbGH%2FmSaz2KLDahk4HZLag0l9%2Bs8kNIoi06uIqEjtlnVrCI8FO&X-Amz-Signature=359a5beed82d1325b53ee275ae5dbd17e2f971b35e3bd9ed4e0c1eb7c3bc4945&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FJFILO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFBusFnfKpdn5wRz2PXe%2BquG%2BmRsXB9wUL4sGPJH%2ByztAiEAu8MRubtb9%2FFYfLAK5PunGqxRte8dFsGr9bbwwdGTuTAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMNNyHDhjst9ecvjbCrcA9m5eqUUVC4HCr%2FMWyPiY7YGHtiJc2kJuusthNl5VbchIoCQ543BS%2FgeiPgqQFLJxNjrAAzasKnrxdXcOJCF7%2Bor6i%2FjL1%2BQcgHgAwAwh76Ty%2BSJAPZOXABA9VQQtSJu3q9XGHY5%2B6t7soVlSS%2Fy4E7rRCtFzm77fdE4M0ziRc98O7B%2BkutpRyjEboGQHAJuFeXsnMyvllO0ySGeV9o3F%2FchqfQ5k0dqfrT%2FE0QQeXPOIstQnrChkruBV35hlzCtBPziVEvookDY2zEq0tGGjKvy6m56kwoZ7Dnbb%2Bpw%2FiCN7M3aJPN8CD6KwvQw%2FAJ0RFqIBEuPvPNp7ysLIBC4uKrWX%2Br9nF04G5FATSmtKcggbcL%2FBQmI2GXH0sn702ctX3zNGZ2Ghd4bUEti1UITbfW0iHj1LBBQfYN%2FzC%2BoB0ze4RBY7ZCrfIQZDbu9ZDB0PVdm%2FkBqRUbPlR1v8U0bEGcUV4dr%2BsRlWax2tB1SuZY8cF%2F6jDRBWA1mF5B%2Bg1eTXs10uJYkL0zj1RMvGhj%2FZ6iy%2F30y5JZsIFUluPrAk7%2BBWGLejngx7K3d2A7rYLz1WBWS%2BP1AE5ZzRqG5Wo2DoMaODeyXs%2FeP6b398fbLO%2FzHKZOJ1A%2BugmPSqyNOMJKFlsEGOqUBggNoLgYkoTuV9rbMBtpgiFbDybkP82QdYKi0u6qcByZOpAOnshC64Fpp0KpKETBkE7iFyu3P6HchQtEUnp98ak8zQCntkrzhNaB%2B0CChe%2B3ZNUwn9UfYgBhlvKnHyHvCtRyKqnRk9GxknyObIMjXJJR7IxQKFu9%2FlxGkXfwxeJjbGH%2FmSaz2KLDahk4HZLag0l9%2Bs8kNIoi06uIqEjtlnVrCI8FO&X-Amz-Signature=44a87ca174f19fbea133b3a499eafb208c7940aa3835c6dfbcbb362eaca4e388&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FJFILO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFBusFnfKpdn5wRz2PXe%2BquG%2BmRsXB9wUL4sGPJH%2ByztAiEAu8MRubtb9%2FFYfLAK5PunGqxRte8dFsGr9bbwwdGTuTAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMNNyHDhjst9ecvjbCrcA9m5eqUUVC4HCr%2FMWyPiY7YGHtiJc2kJuusthNl5VbchIoCQ543BS%2FgeiPgqQFLJxNjrAAzasKnrxdXcOJCF7%2Bor6i%2FjL1%2BQcgHgAwAwh76Ty%2BSJAPZOXABA9VQQtSJu3q9XGHY5%2B6t7soVlSS%2Fy4E7rRCtFzm77fdE4M0ziRc98O7B%2BkutpRyjEboGQHAJuFeXsnMyvllO0ySGeV9o3F%2FchqfQ5k0dqfrT%2FE0QQeXPOIstQnrChkruBV35hlzCtBPziVEvookDY2zEq0tGGjKvy6m56kwoZ7Dnbb%2Bpw%2FiCN7M3aJPN8CD6KwvQw%2FAJ0RFqIBEuPvPNp7ysLIBC4uKrWX%2Br9nF04G5FATSmtKcggbcL%2FBQmI2GXH0sn702ctX3zNGZ2Ghd4bUEti1UITbfW0iHj1LBBQfYN%2FzC%2BoB0ze4RBY7ZCrfIQZDbu9ZDB0PVdm%2FkBqRUbPlR1v8U0bEGcUV4dr%2BsRlWax2tB1SuZY8cF%2F6jDRBWA1mF5B%2Bg1eTXs10uJYkL0zj1RMvGhj%2FZ6iy%2F30y5JZsIFUluPrAk7%2BBWGLejngx7K3d2A7rYLz1WBWS%2BP1AE5ZzRqG5Wo2DoMaODeyXs%2FeP6b398fbLO%2FzHKZOJ1A%2BugmPSqyNOMJKFlsEGOqUBggNoLgYkoTuV9rbMBtpgiFbDybkP82QdYKi0u6qcByZOpAOnshC64Fpp0KpKETBkE7iFyu3P6HchQtEUnp98ak8zQCntkrzhNaB%2B0CChe%2B3ZNUwn9UfYgBhlvKnHyHvCtRyKqnRk9GxknyObIMjXJJR7IxQKFu9%2FlxGkXfwxeJjbGH%2FmSaz2KLDahk4HZLag0l9%2Bs8kNIoi06uIqEjtlnVrCI8FO&X-Amz-Signature=f9bd5dcae5f0eb7bfac17e4cf788f83981b30d0354c721508de2727e58ed664b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FJFILO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFBusFnfKpdn5wRz2PXe%2BquG%2BmRsXB9wUL4sGPJH%2ByztAiEAu8MRubtb9%2FFYfLAK5PunGqxRte8dFsGr9bbwwdGTuTAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMNNyHDhjst9ecvjbCrcA9m5eqUUVC4HCr%2FMWyPiY7YGHtiJc2kJuusthNl5VbchIoCQ543BS%2FgeiPgqQFLJxNjrAAzasKnrxdXcOJCF7%2Bor6i%2FjL1%2BQcgHgAwAwh76Ty%2BSJAPZOXABA9VQQtSJu3q9XGHY5%2B6t7soVlSS%2Fy4E7rRCtFzm77fdE4M0ziRc98O7B%2BkutpRyjEboGQHAJuFeXsnMyvllO0ySGeV9o3F%2FchqfQ5k0dqfrT%2FE0QQeXPOIstQnrChkruBV35hlzCtBPziVEvookDY2zEq0tGGjKvy6m56kwoZ7Dnbb%2Bpw%2FiCN7M3aJPN8CD6KwvQw%2FAJ0RFqIBEuPvPNp7ysLIBC4uKrWX%2Br9nF04G5FATSmtKcggbcL%2FBQmI2GXH0sn702ctX3zNGZ2Ghd4bUEti1UITbfW0iHj1LBBQfYN%2FzC%2BoB0ze4RBY7ZCrfIQZDbu9ZDB0PVdm%2FkBqRUbPlR1v8U0bEGcUV4dr%2BsRlWax2tB1SuZY8cF%2F6jDRBWA1mF5B%2Bg1eTXs10uJYkL0zj1RMvGhj%2FZ6iy%2F30y5JZsIFUluPrAk7%2BBWGLejngx7K3d2A7rYLz1WBWS%2BP1AE5ZzRqG5Wo2DoMaODeyXs%2FeP6b398fbLO%2FzHKZOJ1A%2BugmPSqyNOMJKFlsEGOqUBggNoLgYkoTuV9rbMBtpgiFbDybkP82QdYKi0u6qcByZOpAOnshC64Fpp0KpKETBkE7iFyu3P6HchQtEUnp98ak8zQCntkrzhNaB%2B0CChe%2B3ZNUwn9UfYgBhlvKnHyHvCtRyKqnRk9GxknyObIMjXJJR7IxQKFu9%2FlxGkXfwxeJjbGH%2FmSaz2KLDahk4HZLag0l9%2Bs8kNIoi06uIqEjtlnVrCI8FO&X-Amz-Signature=1001aaccab0963cb6f9fc6c52935a48c649a695a78fcd40569f5e0a362ddfcbd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FJFILO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFBusFnfKpdn5wRz2PXe%2BquG%2BmRsXB9wUL4sGPJH%2ByztAiEAu8MRubtb9%2FFYfLAK5PunGqxRte8dFsGr9bbwwdGTuTAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMNNyHDhjst9ecvjbCrcA9m5eqUUVC4HCr%2FMWyPiY7YGHtiJc2kJuusthNl5VbchIoCQ543BS%2FgeiPgqQFLJxNjrAAzasKnrxdXcOJCF7%2Bor6i%2FjL1%2BQcgHgAwAwh76Ty%2BSJAPZOXABA9VQQtSJu3q9XGHY5%2B6t7soVlSS%2Fy4E7rRCtFzm77fdE4M0ziRc98O7B%2BkutpRyjEboGQHAJuFeXsnMyvllO0ySGeV9o3F%2FchqfQ5k0dqfrT%2FE0QQeXPOIstQnrChkruBV35hlzCtBPziVEvookDY2zEq0tGGjKvy6m56kwoZ7Dnbb%2Bpw%2FiCN7M3aJPN8CD6KwvQw%2FAJ0RFqIBEuPvPNp7ysLIBC4uKrWX%2Br9nF04G5FATSmtKcggbcL%2FBQmI2GXH0sn702ctX3zNGZ2Ghd4bUEti1UITbfW0iHj1LBBQfYN%2FzC%2BoB0ze4RBY7ZCrfIQZDbu9ZDB0PVdm%2FkBqRUbPlR1v8U0bEGcUV4dr%2BsRlWax2tB1SuZY8cF%2F6jDRBWA1mF5B%2Bg1eTXs10uJYkL0zj1RMvGhj%2FZ6iy%2F30y5JZsIFUluPrAk7%2BBWGLejngx7K3d2A7rYLz1WBWS%2BP1AE5ZzRqG5Wo2DoMaODeyXs%2FeP6b398fbLO%2FzHKZOJ1A%2BugmPSqyNOMJKFlsEGOqUBggNoLgYkoTuV9rbMBtpgiFbDybkP82QdYKi0u6qcByZOpAOnshC64Fpp0KpKETBkE7iFyu3P6HchQtEUnp98ak8zQCntkrzhNaB%2B0CChe%2B3ZNUwn9UfYgBhlvKnHyHvCtRyKqnRk9GxknyObIMjXJJR7IxQKFu9%2FlxGkXfwxeJjbGH%2FmSaz2KLDahk4HZLag0l9%2Bs8kNIoi06uIqEjtlnVrCI8FO&X-Amz-Signature=6658582e248ee0f5c26cf287213ca56b8cd65070f3aaac5142c3de4b84bd33fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FJFILO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFBusFnfKpdn5wRz2PXe%2BquG%2BmRsXB9wUL4sGPJH%2ByztAiEAu8MRubtb9%2FFYfLAK5PunGqxRte8dFsGr9bbwwdGTuTAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMNNyHDhjst9ecvjbCrcA9m5eqUUVC4HCr%2FMWyPiY7YGHtiJc2kJuusthNl5VbchIoCQ543BS%2FgeiPgqQFLJxNjrAAzasKnrxdXcOJCF7%2Bor6i%2FjL1%2BQcgHgAwAwh76Ty%2BSJAPZOXABA9VQQtSJu3q9XGHY5%2B6t7soVlSS%2Fy4E7rRCtFzm77fdE4M0ziRc98O7B%2BkutpRyjEboGQHAJuFeXsnMyvllO0ySGeV9o3F%2FchqfQ5k0dqfrT%2FE0QQeXPOIstQnrChkruBV35hlzCtBPziVEvookDY2zEq0tGGjKvy6m56kwoZ7Dnbb%2Bpw%2FiCN7M3aJPN8CD6KwvQw%2FAJ0RFqIBEuPvPNp7ysLIBC4uKrWX%2Br9nF04G5FATSmtKcggbcL%2FBQmI2GXH0sn702ctX3zNGZ2Ghd4bUEti1UITbfW0iHj1LBBQfYN%2FzC%2BoB0ze4RBY7ZCrfIQZDbu9ZDB0PVdm%2FkBqRUbPlR1v8U0bEGcUV4dr%2BsRlWax2tB1SuZY8cF%2F6jDRBWA1mF5B%2Bg1eTXs10uJYkL0zj1RMvGhj%2FZ6iy%2F30y5JZsIFUluPrAk7%2BBWGLejngx7K3d2A7rYLz1WBWS%2BP1AE5ZzRqG5Wo2DoMaODeyXs%2FeP6b398fbLO%2FzHKZOJ1A%2BugmPSqyNOMJKFlsEGOqUBggNoLgYkoTuV9rbMBtpgiFbDybkP82QdYKi0u6qcByZOpAOnshC64Fpp0KpKETBkE7iFyu3P6HchQtEUnp98ak8zQCntkrzhNaB%2B0CChe%2B3ZNUwn9UfYgBhlvKnHyHvCtRyKqnRk9GxknyObIMjXJJR7IxQKFu9%2FlxGkXfwxeJjbGH%2FmSaz2KLDahk4HZLag0l9%2Bs8kNIoi06uIqEjtlnVrCI8FO&X-Amz-Signature=8199274fd39521fa5b0557489f27ab1a8fddbf0a601ec3991b86762610d6a96e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FJFILO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFBusFnfKpdn5wRz2PXe%2BquG%2BmRsXB9wUL4sGPJH%2ByztAiEAu8MRubtb9%2FFYfLAK5PunGqxRte8dFsGr9bbwwdGTuTAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMNNyHDhjst9ecvjbCrcA9m5eqUUVC4HCr%2FMWyPiY7YGHtiJc2kJuusthNl5VbchIoCQ543BS%2FgeiPgqQFLJxNjrAAzasKnrxdXcOJCF7%2Bor6i%2FjL1%2BQcgHgAwAwh76Ty%2BSJAPZOXABA9VQQtSJu3q9XGHY5%2B6t7soVlSS%2Fy4E7rRCtFzm77fdE4M0ziRc98O7B%2BkutpRyjEboGQHAJuFeXsnMyvllO0ySGeV9o3F%2FchqfQ5k0dqfrT%2FE0QQeXPOIstQnrChkruBV35hlzCtBPziVEvookDY2zEq0tGGjKvy6m56kwoZ7Dnbb%2Bpw%2FiCN7M3aJPN8CD6KwvQw%2FAJ0RFqIBEuPvPNp7ysLIBC4uKrWX%2Br9nF04G5FATSmtKcggbcL%2FBQmI2GXH0sn702ctX3zNGZ2Ghd4bUEti1UITbfW0iHj1LBBQfYN%2FzC%2BoB0ze4RBY7ZCrfIQZDbu9ZDB0PVdm%2FkBqRUbPlR1v8U0bEGcUV4dr%2BsRlWax2tB1SuZY8cF%2F6jDRBWA1mF5B%2Bg1eTXs10uJYkL0zj1RMvGhj%2FZ6iy%2F30y5JZsIFUluPrAk7%2BBWGLejngx7K3d2A7rYLz1WBWS%2BP1AE5ZzRqG5Wo2DoMaODeyXs%2FeP6b398fbLO%2FzHKZOJ1A%2BugmPSqyNOMJKFlsEGOqUBggNoLgYkoTuV9rbMBtpgiFbDybkP82QdYKi0u6qcByZOpAOnshC64Fpp0KpKETBkE7iFyu3P6HchQtEUnp98ak8zQCntkrzhNaB%2B0CChe%2B3ZNUwn9UfYgBhlvKnHyHvCtRyKqnRk9GxknyObIMjXJJR7IxQKFu9%2FlxGkXfwxeJjbGH%2FmSaz2KLDahk4HZLag0l9%2Bs8kNIoi06uIqEjtlnVrCI8FO&X-Amz-Signature=743ce0e4132ef5ff839944bb06d76c8ece49c7e324b6105b4b4881b4a3a30d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
