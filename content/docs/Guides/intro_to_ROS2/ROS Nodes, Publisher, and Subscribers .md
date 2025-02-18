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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBQT74B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC5X0hudpHdckriIoiLXr7pOlD7znZ2c5O%2FbiVEDFWONAIgVkMLb3mdhnxDuDYL5SDHxwXdU6IcDiHuI6adurq4fGYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY7dKuGKGIctYzElCrcA9ixAcrQztdlSJHm0XswD5TXqOHXQnwE1XrMMEBDRYdwDXDDYbuJHnZlMhrXUXyE0E%2B3rq797E7%2Fhd5Lzj0Ezy%2FROe7ErweJg7l%2FJyZZBC6Ugykk%2FAO1UWRgUdK6egHwbiHtyrYVOnTnvYG9Ryyq9ORcdyvhGSpVxhkvsS9a9RbEn4g17ojcf%2BLEQpF1%2FBPVS03HgYu4nCBTcpijAmWEUnJoK%2BBj%2BpNDBP%2BgTe4DiiQm2gSDd7JolFI6WZRSnU%2FDqnAyIej042MJQMynNUeA8mJ0ixRqriSw%2FDM4psMgAs08UAbMGvz7cp0ti4V%2F4YbtNKqWYf0y39AcQvE68AZdo6wfjjuCM4RMioxAumJpwSh2%2BuMwUKAN3C70Gmp2%2FSk4XK27cGx2lf2fuA0v0vxOcLRqoaqqXOqU8Dm5YSI%2BCNItdwN2ZdAyIgtCS44D1jNT768iyENX2c03QI%2FW%2FdoZnglvlu29wJv5ZxOTGKxwCS4aPtX360SL4Q0EYo8wnS3ahlFaqT69zKiaSJk%2FwNX9t6HC6%2Bxn3yhX3tbMf%2BzfplGLALTYNF1J9YWVXvzCcVyIPiI3VpCjzPNJ5bsB9RhXH9ZM4RVT%2FEcEShI30K6qiulWmOgPjbc6KDgsM9LRMPbH0L0GOqUBB8WcLHEMdRxOtXO66EeSaGDTei700Jv9icyJ1yJCPvbdBAXk72b3sw1P5ENnjl8EA6oo8SSkVQr81nm8AZd%2FojmOck0yYYiVZhAWEg1bjAAD6jDJHZErmOGwwaVtw%2FrefATn53Rb1RMW4WaMYZdCoGko7ICvHRoDlCuTv0D5RlZmxVyp1AOPGlsppukf1SwQBWpVe7aGrnu6%2Fgkj4PurAKP8QmFa&X-Amz-Signature=cd127f7f369aa7b0ef9b1750f530b086bae843d7f1687c564c0654cfcb4442ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBQT74B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC5X0hudpHdckriIoiLXr7pOlD7znZ2c5O%2FbiVEDFWONAIgVkMLb3mdhnxDuDYL5SDHxwXdU6IcDiHuI6adurq4fGYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY7dKuGKGIctYzElCrcA9ixAcrQztdlSJHm0XswD5TXqOHXQnwE1XrMMEBDRYdwDXDDYbuJHnZlMhrXUXyE0E%2B3rq797E7%2Fhd5Lzj0Ezy%2FROe7ErweJg7l%2FJyZZBC6Ugykk%2FAO1UWRgUdK6egHwbiHtyrYVOnTnvYG9Ryyq9ORcdyvhGSpVxhkvsS9a9RbEn4g17ojcf%2BLEQpF1%2FBPVS03HgYu4nCBTcpijAmWEUnJoK%2BBj%2BpNDBP%2BgTe4DiiQm2gSDd7JolFI6WZRSnU%2FDqnAyIej042MJQMynNUeA8mJ0ixRqriSw%2FDM4psMgAs08UAbMGvz7cp0ti4V%2F4YbtNKqWYf0y39AcQvE68AZdo6wfjjuCM4RMioxAumJpwSh2%2BuMwUKAN3C70Gmp2%2FSk4XK27cGx2lf2fuA0v0vxOcLRqoaqqXOqU8Dm5YSI%2BCNItdwN2ZdAyIgtCS44D1jNT768iyENX2c03QI%2FW%2FdoZnglvlu29wJv5ZxOTGKxwCS4aPtX360SL4Q0EYo8wnS3ahlFaqT69zKiaSJk%2FwNX9t6HC6%2Bxn3yhX3tbMf%2BzfplGLALTYNF1J9YWVXvzCcVyIPiI3VpCjzPNJ5bsB9RhXH9ZM4RVT%2FEcEShI30K6qiulWmOgPjbc6KDgsM9LRMPbH0L0GOqUBB8WcLHEMdRxOtXO66EeSaGDTei700Jv9icyJ1yJCPvbdBAXk72b3sw1P5ENnjl8EA6oo8SSkVQr81nm8AZd%2FojmOck0yYYiVZhAWEg1bjAAD6jDJHZErmOGwwaVtw%2FrefATn53Rb1RMW4WaMYZdCoGko7ICvHRoDlCuTv0D5RlZmxVyp1AOPGlsppukf1SwQBWpVe7aGrnu6%2Fgkj4PurAKP8QmFa&X-Amz-Signature=af4d43756173e39cd7aaca584cc12042cb222bb7bb71cbf3638091e9e3405c60&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBQT74B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC5X0hudpHdckriIoiLXr7pOlD7znZ2c5O%2FbiVEDFWONAIgVkMLb3mdhnxDuDYL5SDHxwXdU6IcDiHuI6adurq4fGYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY7dKuGKGIctYzElCrcA9ixAcrQztdlSJHm0XswD5TXqOHXQnwE1XrMMEBDRYdwDXDDYbuJHnZlMhrXUXyE0E%2B3rq797E7%2Fhd5Lzj0Ezy%2FROe7ErweJg7l%2FJyZZBC6Ugykk%2FAO1UWRgUdK6egHwbiHtyrYVOnTnvYG9Ryyq9ORcdyvhGSpVxhkvsS9a9RbEn4g17ojcf%2BLEQpF1%2FBPVS03HgYu4nCBTcpijAmWEUnJoK%2BBj%2BpNDBP%2BgTe4DiiQm2gSDd7JolFI6WZRSnU%2FDqnAyIej042MJQMynNUeA8mJ0ixRqriSw%2FDM4psMgAs08UAbMGvz7cp0ti4V%2F4YbtNKqWYf0y39AcQvE68AZdo6wfjjuCM4RMioxAumJpwSh2%2BuMwUKAN3C70Gmp2%2FSk4XK27cGx2lf2fuA0v0vxOcLRqoaqqXOqU8Dm5YSI%2BCNItdwN2ZdAyIgtCS44D1jNT768iyENX2c03QI%2FW%2FdoZnglvlu29wJv5ZxOTGKxwCS4aPtX360SL4Q0EYo8wnS3ahlFaqT69zKiaSJk%2FwNX9t6HC6%2Bxn3yhX3tbMf%2BzfplGLALTYNF1J9YWVXvzCcVyIPiI3VpCjzPNJ5bsB9RhXH9ZM4RVT%2FEcEShI30K6qiulWmOgPjbc6KDgsM9LRMPbH0L0GOqUBB8WcLHEMdRxOtXO66EeSaGDTei700Jv9icyJ1yJCPvbdBAXk72b3sw1P5ENnjl8EA6oo8SSkVQr81nm8AZd%2FojmOck0yYYiVZhAWEg1bjAAD6jDJHZErmOGwwaVtw%2FrefATn53Rb1RMW4WaMYZdCoGko7ICvHRoDlCuTv0D5RlZmxVyp1AOPGlsppukf1SwQBWpVe7aGrnu6%2Fgkj4PurAKP8QmFa&X-Amz-Signature=40b6fde012cb0461ea951fb322bc49f678563b80212e24d86ca538a482b2acb1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBQT74B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC5X0hudpHdckriIoiLXr7pOlD7znZ2c5O%2FbiVEDFWONAIgVkMLb3mdhnxDuDYL5SDHxwXdU6IcDiHuI6adurq4fGYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY7dKuGKGIctYzElCrcA9ixAcrQztdlSJHm0XswD5TXqOHXQnwE1XrMMEBDRYdwDXDDYbuJHnZlMhrXUXyE0E%2B3rq797E7%2Fhd5Lzj0Ezy%2FROe7ErweJg7l%2FJyZZBC6Ugykk%2FAO1UWRgUdK6egHwbiHtyrYVOnTnvYG9Ryyq9ORcdyvhGSpVxhkvsS9a9RbEn4g17ojcf%2BLEQpF1%2FBPVS03HgYu4nCBTcpijAmWEUnJoK%2BBj%2BpNDBP%2BgTe4DiiQm2gSDd7JolFI6WZRSnU%2FDqnAyIej042MJQMynNUeA8mJ0ixRqriSw%2FDM4psMgAs08UAbMGvz7cp0ti4V%2F4YbtNKqWYf0y39AcQvE68AZdo6wfjjuCM4RMioxAumJpwSh2%2BuMwUKAN3C70Gmp2%2FSk4XK27cGx2lf2fuA0v0vxOcLRqoaqqXOqU8Dm5YSI%2BCNItdwN2ZdAyIgtCS44D1jNT768iyENX2c03QI%2FW%2FdoZnglvlu29wJv5ZxOTGKxwCS4aPtX360SL4Q0EYo8wnS3ahlFaqT69zKiaSJk%2FwNX9t6HC6%2Bxn3yhX3tbMf%2BzfplGLALTYNF1J9YWVXvzCcVyIPiI3VpCjzPNJ5bsB9RhXH9ZM4RVT%2FEcEShI30K6qiulWmOgPjbc6KDgsM9LRMPbH0L0GOqUBB8WcLHEMdRxOtXO66EeSaGDTei700Jv9icyJ1yJCPvbdBAXk72b3sw1P5ENnjl8EA6oo8SSkVQr81nm8AZd%2FojmOck0yYYiVZhAWEg1bjAAD6jDJHZErmOGwwaVtw%2FrefATn53Rb1RMW4WaMYZdCoGko7ICvHRoDlCuTv0D5RlZmxVyp1AOPGlsppukf1SwQBWpVe7aGrnu6%2Fgkj4PurAKP8QmFa&X-Amz-Signature=966d4a5f85bd485e2ad514076e6432d0c99d42e5146e4af67402d6fca180cabf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBQT74B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC5X0hudpHdckriIoiLXr7pOlD7znZ2c5O%2FbiVEDFWONAIgVkMLb3mdhnxDuDYL5SDHxwXdU6IcDiHuI6adurq4fGYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY7dKuGKGIctYzElCrcA9ixAcrQztdlSJHm0XswD5TXqOHXQnwE1XrMMEBDRYdwDXDDYbuJHnZlMhrXUXyE0E%2B3rq797E7%2Fhd5Lzj0Ezy%2FROe7ErweJg7l%2FJyZZBC6Ugykk%2FAO1UWRgUdK6egHwbiHtyrYVOnTnvYG9Ryyq9ORcdyvhGSpVxhkvsS9a9RbEn4g17ojcf%2BLEQpF1%2FBPVS03HgYu4nCBTcpijAmWEUnJoK%2BBj%2BpNDBP%2BgTe4DiiQm2gSDd7JolFI6WZRSnU%2FDqnAyIej042MJQMynNUeA8mJ0ixRqriSw%2FDM4psMgAs08UAbMGvz7cp0ti4V%2F4YbtNKqWYf0y39AcQvE68AZdo6wfjjuCM4RMioxAumJpwSh2%2BuMwUKAN3C70Gmp2%2FSk4XK27cGx2lf2fuA0v0vxOcLRqoaqqXOqU8Dm5YSI%2BCNItdwN2ZdAyIgtCS44D1jNT768iyENX2c03QI%2FW%2FdoZnglvlu29wJv5ZxOTGKxwCS4aPtX360SL4Q0EYo8wnS3ahlFaqT69zKiaSJk%2FwNX9t6HC6%2Bxn3yhX3tbMf%2BzfplGLALTYNF1J9YWVXvzCcVyIPiI3VpCjzPNJ5bsB9RhXH9ZM4RVT%2FEcEShI30K6qiulWmOgPjbc6KDgsM9LRMPbH0L0GOqUBB8WcLHEMdRxOtXO66EeSaGDTei700Jv9icyJ1yJCPvbdBAXk72b3sw1P5ENnjl8EA6oo8SSkVQr81nm8AZd%2FojmOck0yYYiVZhAWEg1bjAAD6jDJHZErmOGwwaVtw%2FrefATn53Rb1RMW4WaMYZdCoGko7ICvHRoDlCuTv0D5RlZmxVyp1AOPGlsppukf1SwQBWpVe7aGrnu6%2Fgkj4PurAKP8QmFa&X-Amz-Signature=03cdcac979cd5364044082068d52273359ee218a9128230946fc26f84fb3c2c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBQT74B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC5X0hudpHdckriIoiLXr7pOlD7znZ2c5O%2FbiVEDFWONAIgVkMLb3mdhnxDuDYL5SDHxwXdU6IcDiHuI6adurq4fGYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY7dKuGKGIctYzElCrcA9ixAcrQztdlSJHm0XswD5TXqOHXQnwE1XrMMEBDRYdwDXDDYbuJHnZlMhrXUXyE0E%2B3rq797E7%2Fhd5Lzj0Ezy%2FROe7ErweJg7l%2FJyZZBC6Ugykk%2FAO1UWRgUdK6egHwbiHtyrYVOnTnvYG9Ryyq9ORcdyvhGSpVxhkvsS9a9RbEn4g17ojcf%2BLEQpF1%2FBPVS03HgYu4nCBTcpijAmWEUnJoK%2BBj%2BpNDBP%2BgTe4DiiQm2gSDd7JolFI6WZRSnU%2FDqnAyIej042MJQMynNUeA8mJ0ixRqriSw%2FDM4psMgAs08UAbMGvz7cp0ti4V%2F4YbtNKqWYf0y39AcQvE68AZdo6wfjjuCM4RMioxAumJpwSh2%2BuMwUKAN3C70Gmp2%2FSk4XK27cGx2lf2fuA0v0vxOcLRqoaqqXOqU8Dm5YSI%2BCNItdwN2ZdAyIgtCS44D1jNT768iyENX2c03QI%2FW%2FdoZnglvlu29wJv5ZxOTGKxwCS4aPtX360SL4Q0EYo8wnS3ahlFaqT69zKiaSJk%2FwNX9t6HC6%2Bxn3yhX3tbMf%2BzfplGLALTYNF1J9YWVXvzCcVyIPiI3VpCjzPNJ5bsB9RhXH9ZM4RVT%2FEcEShI30K6qiulWmOgPjbc6KDgsM9LRMPbH0L0GOqUBB8WcLHEMdRxOtXO66EeSaGDTei700Jv9icyJ1yJCPvbdBAXk72b3sw1P5ENnjl8EA6oo8SSkVQr81nm8AZd%2FojmOck0yYYiVZhAWEg1bjAAD6jDJHZErmOGwwaVtw%2FrefATn53Rb1RMW4WaMYZdCoGko7ICvHRoDlCuTv0D5RlZmxVyp1AOPGlsppukf1SwQBWpVe7aGrnu6%2Fgkj4PurAKP8QmFa&X-Amz-Signature=d5aa940498ba4db54f0f1f298caa11089175abac5c6b98f6048e3dc3dc2309c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBQT74B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC5X0hudpHdckriIoiLXr7pOlD7znZ2c5O%2FbiVEDFWONAIgVkMLb3mdhnxDuDYL5SDHxwXdU6IcDiHuI6adurq4fGYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY7dKuGKGIctYzElCrcA9ixAcrQztdlSJHm0XswD5TXqOHXQnwE1XrMMEBDRYdwDXDDYbuJHnZlMhrXUXyE0E%2B3rq797E7%2Fhd5Lzj0Ezy%2FROe7ErweJg7l%2FJyZZBC6Ugykk%2FAO1UWRgUdK6egHwbiHtyrYVOnTnvYG9Ryyq9ORcdyvhGSpVxhkvsS9a9RbEn4g17ojcf%2BLEQpF1%2FBPVS03HgYu4nCBTcpijAmWEUnJoK%2BBj%2BpNDBP%2BgTe4DiiQm2gSDd7JolFI6WZRSnU%2FDqnAyIej042MJQMynNUeA8mJ0ixRqriSw%2FDM4psMgAs08UAbMGvz7cp0ti4V%2F4YbtNKqWYf0y39AcQvE68AZdo6wfjjuCM4RMioxAumJpwSh2%2BuMwUKAN3C70Gmp2%2FSk4XK27cGx2lf2fuA0v0vxOcLRqoaqqXOqU8Dm5YSI%2BCNItdwN2ZdAyIgtCS44D1jNT768iyENX2c03QI%2FW%2FdoZnglvlu29wJv5ZxOTGKxwCS4aPtX360SL4Q0EYo8wnS3ahlFaqT69zKiaSJk%2FwNX9t6HC6%2Bxn3yhX3tbMf%2BzfplGLALTYNF1J9YWVXvzCcVyIPiI3VpCjzPNJ5bsB9RhXH9ZM4RVT%2FEcEShI30K6qiulWmOgPjbc6KDgsM9LRMPbH0L0GOqUBB8WcLHEMdRxOtXO66EeSaGDTei700Jv9icyJ1yJCPvbdBAXk72b3sw1P5ENnjl8EA6oo8SSkVQr81nm8AZd%2FojmOck0yYYiVZhAWEg1bjAAD6jDJHZErmOGwwaVtw%2FrefATn53Rb1RMW4WaMYZdCoGko7ICvHRoDlCuTv0D5RlZmxVyp1AOPGlsppukf1SwQBWpVe7aGrnu6%2Fgkj4PurAKP8QmFa&X-Amz-Signature=c0ae98c2a99e13a3e43e0bf81705cb1e167781ea7f2699749866436bd5b906b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBQT74B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC5X0hudpHdckriIoiLXr7pOlD7znZ2c5O%2FbiVEDFWONAIgVkMLb3mdhnxDuDYL5SDHxwXdU6IcDiHuI6adurq4fGYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY7dKuGKGIctYzElCrcA9ixAcrQztdlSJHm0XswD5TXqOHXQnwE1XrMMEBDRYdwDXDDYbuJHnZlMhrXUXyE0E%2B3rq797E7%2Fhd5Lzj0Ezy%2FROe7ErweJg7l%2FJyZZBC6Ugykk%2FAO1UWRgUdK6egHwbiHtyrYVOnTnvYG9Ryyq9ORcdyvhGSpVxhkvsS9a9RbEn4g17ojcf%2BLEQpF1%2FBPVS03HgYu4nCBTcpijAmWEUnJoK%2BBj%2BpNDBP%2BgTe4DiiQm2gSDd7JolFI6WZRSnU%2FDqnAyIej042MJQMynNUeA8mJ0ixRqriSw%2FDM4psMgAs08UAbMGvz7cp0ti4V%2F4YbtNKqWYf0y39AcQvE68AZdo6wfjjuCM4RMioxAumJpwSh2%2BuMwUKAN3C70Gmp2%2FSk4XK27cGx2lf2fuA0v0vxOcLRqoaqqXOqU8Dm5YSI%2BCNItdwN2ZdAyIgtCS44D1jNT768iyENX2c03QI%2FW%2FdoZnglvlu29wJv5ZxOTGKxwCS4aPtX360SL4Q0EYo8wnS3ahlFaqT69zKiaSJk%2FwNX9t6HC6%2Bxn3yhX3tbMf%2BzfplGLALTYNF1J9YWVXvzCcVyIPiI3VpCjzPNJ5bsB9RhXH9ZM4RVT%2FEcEShI30K6qiulWmOgPjbc6KDgsM9LRMPbH0L0GOqUBB8WcLHEMdRxOtXO66EeSaGDTei700Jv9icyJ1yJCPvbdBAXk72b3sw1P5ENnjl8EA6oo8SSkVQr81nm8AZd%2FojmOck0yYYiVZhAWEg1bjAAD6jDJHZErmOGwwaVtw%2FrefATn53Rb1RMW4WaMYZdCoGko7ICvHRoDlCuTv0D5RlZmxVyp1AOPGlsppukf1SwQBWpVe7aGrnu6%2Fgkj4PurAKP8QmFa&X-Amz-Signature=6ca0e3481a3030230a6cbd9644cf5b440b27d277817dd8942ea727a5cfc9113c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
