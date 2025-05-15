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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5IHUCV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCYm6lA%2FpXxtJ9FVrEhCxf1wwuPVR%2BFB6TIl9S1M1PjoAIgCe2mOrKgI9f5olGhCnjcT8FecWcNUeunHUlJj7HEZkYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOw0fdbdx5eImRj79SrcA0mHqjdHiMP9lmFgFIErNUzj6W1snKfLB5KizAwrl%2B0OzJsG%2BXv2p6wQg4ZoRwr9cRGJtCT8V3gbHSoHp7dVCrMHODD7M4zRPFcR%2BzbN4hRF4tZEe8WcCTzThf2s90iKF6XI9QAoqlQKfX96Fv%2B8UikxhAuXmM94m49ZBxQZ6JOetOSGCO1T%2Fndva%2BqdM%2BgpUeO3pnRlGbphYk9wVHFJ63sAeDMpPNm8pvlWCyw%2FWlhEYS7ceuL6k5KjTD3AmPhirru2x%2B%2BUQ0uLncKffxo8jo2hd9AW3Jqxwmks%2BTAm%2BjpFPf%2B%2B694tUIVVpQj0TGKQ9c7767Av0lUHi9eN6mry%2BapqZcTwHOspdKVx1ikbbR0u7b%2FcUy2XYq90BQNkvLAMCi5QmSVKwWk4%2FvVer71lX5cujGTNxLzwzhDBSYU1R0iW9xRY1qsv1V81Uh1v%2FiJNxpVSih5e1RZT6veN8prxCK%2BFDdRBYzsXsLuxnuZaqdwf8e6kjk8o4k3D7Xv87QjY5C4aChY6BMkzd4je6xAL4%2BtyS9exto7uhnYbReExIecPwRyN9k12raEu%2FSsORTbUSldtsEXkcBOblHFqRmqRM0WpWvQp6mthypmfF5PZ9UKym3kO1AlnTrLJvd2gMOSpl8EGOqUBnFwjfflizaTyGYc6%2FjNeItgTQVOFIKpfnXaHfCJ3GrSkDTyvIo31%2FNHmGQWUd5cdK5tjdYEFRygRKeH0%2FqLFpGpCbeabDYfs8Rs%2BkODfd6kbJuYK%2BQzxOEurLd2QpONa6XS63%2BmbTg56qF9NaFenqabG63utbpR5tpqaYTXhqOqizRx1PANwJ1uonyTCx%2FEcrmCSu4J5%2BdgjKtvPA5pQ4hKwApGg&X-Amz-Signature=ad11a275f9484c17738fe9a351014ff31b071770cc683cef7f1d13833e9596c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5IHUCV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCYm6lA%2FpXxtJ9FVrEhCxf1wwuPVR%2BFB6TIl9S1M1PjoAIgCe2mOrKgI9f5olGhCnjcT8FecWcNUeunHUlJj7HEZkYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOw0fdbdx5eImRj79SrcA0mHqjdHiMP9lmFgFIErNUzj6W1snKfLB5KizAwrl%2B0OzJsG%2BXv2p6wQg4ZoRwr9cRGJtCT8V3gbHSoHp7dVCrMHODD7M4zRPFcR%2BzbN4hRF4tZEe8WcCTzThf2s90iKF6XI9QAoqlQKfX96Fv%2B8UikxhAuXmM94m49ZBxQZ6JOetOSGCO1T%2Fndva%2BqdM%2BgpUeO3pnRlGbphYk9wVHFJ63sAeDMpPNm8pvlWCyw%2FWlhEYS7ceuL6k5KjTD3AmPhirru2x%2B%2BUQ0uLncKffxo8jo2hd9AW3Jqxwmks%2BTAm%2BjpFPf%2B%2B694tUIVVpQj0TGKQ9c7767Av0lUHi9eN6mry%2BapqZcTwHOspdKVx1ikbbR0u7b%2FcUy2XYq90BQNkvLAMCi5QmSVKwWk4%2FvVer71lX5cujGTNxLzwzhDBSYU1R0iW9xRY1qsv1V81Uh1v%2FiJNxpVSih5e1RZT6veN8prxCK%2BFDdRBYzsXsLuxnuZaqdwf8e6kjk8o4k3D7Xv87QjY5C4aChY6BMkzd4je6xAL4%2BtyS9exto7uhnYbReExIecPwRyN9k12raEu%2FSsORTbUSldtsEXkcBOblHFqRmqRM0WpWvQp6mthypmfF5PZ9UKym3kO1AlnTrLJvd2gMOSpl8EGOqUBnFwjfflizaTyGYc6%2FjNeItgTQVOFIKpfnXaHfCJ3GrSkDTyvIo31%2FNHmGQWUd5cdK5tjdYEFRygRKeH0%2FqLFpGpCbeabDYfs8Rs%2BkODfd6kbJuYK%2BQzxOEurLd2QpONa6XS63%2BmbTg56qF9NaFenqabG63utbpR5tpqaYTXhqOqizRx1PANwJ1uonyTCx%2FEcrmCSu4J5%2BdgjKtvPA5pQ4hKwApGg&X-Amz-Signature=a77489b098e648ee2cf0c7f7830a1fe3e252fd31dcc6294e0fede7684ab5315c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5IHUCV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCYm6lA%2FpXxtJ9FVrEhCxf1wwuPVR%2BFB6TIl9S1M1PjoAIgCe2mOrKgI9f5olGhCnjcT8FecWcNUeunHUlJj7HEZkYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOw0fdbdx5eImRj79SrcA0mHqjdHiMP9lmFgFIErNUzj6W1snKfLB5KizAwrl%2B0OzJsG%2BXv2p6wQg4ZoRwr9cRGJtCT8V3gbHSoHp7dVCrMHODD7M4zRPFcR%2BzbN4hRF4tZEe8WcCTzThf2s90iKF6XI9QAoqlQKfX96Fv%2B8UikxhAuXmM94m49ZBxQZ6JOetOSGCO1T%2Fndva%2BqdM%2BgpUeO3pnRlGbphYk9wVHFJ63sAeDMpPNm8pvlWCyw%2FWlhEYS7ceuL6k5KjTD3AmPhirru2x%2B%2BUQ0uLncKffxo8jo2hd9AW3Jqxwmks%2BTAm%2BjpFPf%2B%2B694tUIVVpQj0TGKQ9c7767Av0lUHi9eN6mry%2BapqZcTwHOspdKVx1ikbbR0u7b%2FcUy2XYq90BQNkvLAMCi5QmSVKwWk4%2FvVer71lX5cujGTNxLzwzhDBSYU1R0iW9xRY1qsv1V81Uh1v%2FiJNxpVSih5e1RZT6veN8prxCK%2BFDdRBYzsXsLuxnuZaqdwf8e6kjk8o4k3D7Xv87QjY5C4aChY6BMkzd4je6xAL4%2BtyS9exto7uhnYbReExIecPwRyN9k12raEu%2FSsORTbUSldtsEXkcBOblHFqRmqRM0WpWvQp6mthypmfF5PZ9UKym3kO1AlnTrLJvd2gMOSpl8EGOqUBnFwjfflizaTyGYc6%2FjNeItgTQVOFIKpfnXaHfCJ3GrSkDTyvIo31%2FNHmGQWUd5cdK5tjdYEFRygRKeH0%2FqLFpGpCbeabDYfs8Rs%2BkODfd6kbJuYK%2BQzxOEurLd2QpONa6XS63%2BmbTg56qF9NaFenqabG63utbpR5tpqaYTXhqOqizRx1PANwJ1uonyTCx%2FEcrmCSu4J5%2BdgjKtvPA5pQ4hKwApGg&X-Amz-Signature=b5a76ef8b3869b0d8b0910ee181a6d4c38549306bffb688ff62087fc22b0e35b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5IHUCV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCYm6lA%2FpXxtJ9FVrEhCxf1wwuPVR%2BFB6TIl9S1M1PjoAIgCe2mOrKgI9f5olGhCnjcT8FecWcNUeunHUlJj7HEZkYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOw0fdbdx5eImRj79SrcA0mHqjdHiMP9lmFgFIErNUzj6W1snKfLB5KizAwrl%2B0OzJsG%2BXv2p6wQg4ZoRwr9cRGJtCT8V3gbHSoHp7dVCrMHODD7M4zRPFcR%2BzbN4hRF4tZEe8WcCTzThf2s90iKF6XI9QAoqlQKfX96Fv%2B8UikxhAuXmM94m49ZBxQZ6JOetOSGCO1T%2Fndva%2BqdM%2BgpUeO3pnRlGbphYk9wVHFJ63sAeDMpPNm8pvlWCyw%2FWlhEYS7ceuL6k5KjTD3AmPhirru2x%2B%2BUQ0uLncKffxo8jo2hd9AW3Jqxwmks%2BTAm%2BjpFPf%2B%2B694tUIVVpQj0TGKQ9c7767Av0lUHi9eN6mry%2BapqZcTwHOspdKVx1ikbbR0u7b%2FcUy2XYq90BQNkvLAMCi5QmSVKwWk4%2FvVer71lX5cujGTNxLzwzhDBSYU1R0iW9xRY1qsv1V81Uh1v%2FiJNxpVSih5e1RZT6veN8prxCK%2BFDdRBYzsXsLuxnuZaqdwf8e6kjk8o4k3D7Xv87QjY5C4aChY6BMkzd4je6xAL4%2BtyS9exto7uhnYbReExIecPwRyN9k12raEu%2FSsORTbUSldtsEXkcBOblHFqRmqRM0WpWvQp6mthypmfF5PZ9UKym3kO1AlnTrLJvd2gMOSpl8EGOqUBnFwjfflizaTyGYc6%2FjNeItgTQVOFIKpfnXaHfCJ3GrSkDTyvIo31%2FNHmGQWUd5cdK5tjdYEFRygRKeH0%2FqLFpGpCbeabDYfs8Rs%2BkODfd6kbJuYK%2BQzxOEurLd2QpONa6XS63%2BmbTg56qF9NaFenqabG63utbpR5tpqaYTXhqOqizRx1PANwJ1uonyTCx%2FEcrmCSu4J5%2BdgjKtvPA5pQ4hKwApGg&X-Amz-Signature=fcdef5a281b536ed9970ff66c61f202196ecf974c1d8776342cb50979241a225&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5IHUCV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCYm6lA%2FpXxtJ9FVrEhCxf1wwuPVR%2BFB6TIl9S1M1PjoAIgCe2mOrKgI9f5olGhCnjcT8FecWcNUeunHUlJj7HEZkYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOw0fdbdx5eImRj79SrcA0mHqjdHiMP9lmFgFIErNUzj6W1snKfLB5KizAwrl%2B0OzJsG%2BXv2p6wQg4ZoRwr9cRGJtCT8V3gbHSoHp7dVCrMHODD7M4zRPFcR%2BzbN4hRF4tZEe8WcCTzThf2s90iKF6XI9QAoqlQKfX96Fv%2B8UikxhAuXmM94m49ZBxQZ6JOetOSGCO1T%2Fndva%2BqdM%2BgpUeO3pnRlGbphYk9wVHFJ63sAeDMpPNm8pvlWCyw%2FWlhEYS7ceuL6k5KjTD3AmPhirru2x%2B%2BUQ0uLncKffxo8jo2hd9AW3Jqxwmks%2BTAm%2BjpFPf%2B%2B694tUIVVpQj0TGKQ9c7767Av0lUHi9eN6mry%2BapqZcTwHOspdKVx1ikbbR0u7b%2FcUy2XYq90BQNkvLAMCi5QmSVKwWk4%2FvVer71lX5cujGTNxLzwzhDBSYU1R0iW9xRY1qsv1V81Uh1v%2FiJNxpVSih5e1RZT6veN8prxCK%2BFDdRBYzsXsLuxnuZaqdwf8e6kjk8o4k3D7Xv87QjY5C4aChY6BMkzd4je6xAL4%2BtyS9exto7uhnYbReExIecPwRyN9k12raEu%2FSsORTbUSldtsEXkcBOblHFqRmqRM0WpWvQp6mthypmfF5PZ9UKym3kO1AlnTrLJvd2gMOSpl8EGOqUBnFwjfflizaTyGYc6%2FjNeItgTQVOFIKpfnXaHfCJ3GrSkDTyvIo31%2FNHmGQWUd5cdK5tjdYEFRygRKeH0%2FqLFpGpCbeabDYfs8Rs%2BkODfd6kbJuYK%2BQzxOEurLd2QpONa6XS63%2BmbTg56qF9NaFenqabG63utbpR5tpqaYTXhqOqizRx1PANwJ1uonyTCx%2FEcrmCSu4J5%2BdgjKtvPA5pQ4hKwApGg&X-Amz-Signature=8f1bacf961a5ce75db0db9c23bcf022dc6a781536d059b10371b33cbb56fde16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5IHUCV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCYm6lA%2FpXxtJ9FVrEhCxf1wwuPVR%2BFB6TIl9S1M1PjoAIgCe2mOrKgI9f5olGhCnjcT8FecWcNUeunHUlJj7HEZkYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOw0fdbdx5eImRj79SrcA0mHqjdHiMP9lmFgFIErNUzj6W1snKfLB5KizAwrl%2B0OzJsG%2BXv2p6wQg4ZoRwr9cRGJtCT8V3gbHSoHp7dVCrMHODD7M4zRPFcR%2BzbN4hRF4tZEe8WcCTzThf2s90iKF6XI9QAoqlQKfX96Fv%2B8UikxhAuXmM94m49ZBxQZ6JOetOSGCO1T%2Fndva%2BqdM%2BgpUeO3pnRlGbphYk9wVHFJ63sAeDMpPNm8pvlWCyw%2FWlhEYS7ceuL6k5KjTD3AmPhirru2x%2B%2BUQ0uLncKffxo8jo2hd9AW3Jqxwmks%2BTAm%2BjpFPf%2B%2B694tUIVVpQj0TGKQ9c7767Av0lUHi9eN6mry%2BapqZcTwHOspdKVx1ikbbR0u7b%2FcUy2XYq90BQNkvLAMCi5QmSVKwWk4%2FvVer71lX5cujGTNxLzwzhDBSYU1R0iW9xRY1qsv1V81Uh1v%2FiJNxpVSih5e1RZT6veN8prxCK%2BFDdRBYzsXsLuxnuZaqdwf8e6kjk8o4k3D7Xv87QjY5C4aChY6BMkzd4je6xAL4%2BtyS9exto7uhnYbReExIecPwRyN9k12raEu%2FSsORTbUSldtsEXkcBOblHFqRmqRM0WpWvQp6mthypmfF5PZ9UKym3kO1AlnTrLJvd2gMOSpl8EGOqUBnFwjfflizaTyGYc6%2FjNeItgTQVOFIKpfnXaHfCJ3GrSkDTyvIo31%2FNHmGQWUd5cdK5tjdYEFRygRKeH0%2FqLFpGpCbeabDYfs8Rs%2BkODfd6kbJuYK%2BQzxOEurLd2QpONa6XS63%2BmbTg56qF9NaFenqabG63utbpR5tpqaYTXhqOqizRx1PANwJ1uonyTCx%2FEcrmCSu4J5%2BdgjKtvPA5pQ4hKwApGg&X-Amz-Signature=14cade2f77c120d3e91b7e14dda341fedbdbb964970e7c222d0903fd7fd5e490&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5IHUCV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCYm6lA%2FpXxtJ9FVrEhCxf1wwuPVR%2BFB6TIl9S1M1PjoAIgCe2mOrKgI9f5olGhCnjcT8FecWcNUeunHUlJj7HEZkYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOw0fdbdx5eImRj79SrcA0mHqjdHiMP9lmFgFIErNUzj6W1snKfLB5KizAwrl%2B0OzJsG%2BXv2p6wQg4ZoRwr9cRGJtCT8V3gbHSoHp7dVCrMHODD7M4zRPFcR%2BzbN4hRF4tZEe8WcCTzThf2s90iKF6XI9QAoqlQKfX96Fv%2B8UikxhAuXmM94m49ZBxQZ6JOetOSGCO1T%2Fndva%2BqdM%2BgpUeO3pnRlGbphYk9wVHFJ63sAeDMpPNm8pvlWCyw%2FWlhEYS7ceuL6k5KjTD3AmPhirru2x%2B%2BUQ0uLncKffxo8jo2hd9AW3Jqxwmks%2BTAm%2BjpFPf%2B%2B694tUIVVpQj0TGKQ9c7767Av0lUHi9eN6mry%2BapqZcTwHOspdKVx1ikbbR0u7b%2FcUy2XYq90BQNkvLAMCi5QmSVKwWk4%2FvVer71lX5cujGTNxLzwzhDBSYU1R0iW9xRY1qsv1V81Uh1v%2FiJNxpVSih5e1RZT6veN8prxCK%2BFDdRBYzsXsLuxnuZaqdwf8e6kjk8o4k3D7Xv87QjY5C4aChY6BMkzd4je6xAL4%2BtyS9exto7uhnYbReExIecPwRyN9k12raEu%2FSsORTbUSldtsEXkcBOblHFqRmqRM0WpWvQp6mthypmfF5PZ9UKym3kO1AlnTrLJvd2gMOSpl8EGOqUBnFwjfflizaTyGYc6%2FjNeItgTQVOFIKpfnXaHfCJ3GrSkDTyvIo31%2FNHmGQWUd5cdK5tjdYEFRygRKeH0%2FqLFpGpCbeabDYfs8Rs%2BkODfd6kbJuYK%2BQzxOEurLd2QpONa6XS63%2BmbTg56qF9NaFenqabG63utbpR5tpqaYTXhqOqizRx1PANwJ1uonyTCx%2FEcrmCSu4J5%2BdgjKtvPA5pQ4hKwApGg&X-Amz-Signature=f5ebaed7f56b90973b4a1a96f9e8a94dd2d6180871115ed026e35ab874d4f940&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5IHUCV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCYm6lA%2FpXxtJ9FVrEhCxf1wwuPVR%2BFB6TIl9S1M1PjoAIgCe2mOrKgI9f5olGhCnjcT8FecWcNUeunHUlJj7HEZkYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOw0fdbdx5eImRj79SrcA0mHqjdHiMP9lmFgFIErNUzj6W1snKfLB5KizAwrl%2B0OzJsG%2BXv2p6wQg4ZoRwr9cRGJtCT8V3gbHSoHp7dVCrMHODD7M4zRPFcR%2BzbN4hRF4tZEe8WcCTzThf2s90iKF6XI9QAoqlQKfX96Fv%2B8UikxhAuXmM94m49ZBxQZ6JOetOSGCO1T%2Fndva%2BqdM%2BgpUeO3pnRlGbphYk9wVHFJ63sAeDMpPNm8pvlWCyw%2FWlhEYS7ceuL6k5KjTD3AmPhirru2x%2B%2BUQ0uLncKffxo8jo2hd9AW3Jqxwmks%2BTAm%2BjpFPf%2B%2B694tUIVVpQj0TGKQ9c7767Av0lUHi9eN6mry%2BapqZcTwHOspdKVx1ikbbR0u7b%2FcUy2XYq90BQNkvLAMCi5QmSVKwWk4%2FvVer71lX5cujGTNxLzwzhDBSYU1R0iW9xRY1qsv1V81Uh1v%2FiJNxpVSih5e1RZT6veN8prxCK%2BFDdRBYzsXsLuxnuZaqdwf8e6kjk8o4k3D7Xv87QjY5C4aChY6BMkzd4je6xAL4%2BtyS9exto7uhnYbReExIecPwRyN9k12raEu%2FSsORTbUSldtsEXkcBOblHFqRmqRM0WpWvQp6mthypmfF5PZ9UKym3kO1AlnTrLJvd2gMOSpl8EGOqUBnFwjfflizaTyGYc6%2FjNeItgTQVOFIKpfnXaHfCJ3GrSkDTyvIo31%2FNHmGQWUd5cdK5tjdYEFRygRKeH0%2FqLFpGpCbeabDYfs8Rs%2BkODfd6kbJuYK%2BQzxOEurLd2QpONa6XS63%2BmbTg56qF9NaFenqabG63utbpR5tpqaYTXhqOqizRx1PANwJ1uonyTCx%2FEcrmCSu4J5%2BdgjKtvPA5pQ4hKwApGg&X-Amz-Signature=8438a16269e0db24bb9eaee53dd0448c985ed776cbc9fed30729b94f80eaa63f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
