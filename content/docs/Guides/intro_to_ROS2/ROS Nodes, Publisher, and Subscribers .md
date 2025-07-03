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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF33MCYE%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN4TR%2BrYFiuiQGvvcObFiLkUg88ydVonP7ltV6cFcXXgIgVZafJG73WbamhrmUo%2BR7MSqXOG%2BTb5XGRh%2BOqh65RSQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOBclXBt%2FE%2ByDiXTSrcA1R8q5%2BZmNrR9OKrqD002ZQgy4NNOVl2px9shh5gV3ZechiVW%2FVJ%2Bzyh4FV3D4qN%2FIOuMu7LzuHs7hUAsm2HppynU%2BX%2BoVyfFVIrskNRAoAfGZaiz2cvU3KnSnvnMbqB5pbz0qp%2B%2FTzK4u%2BSIzMTHsjd8DE4qzHmkwfOvfiksFuV9cpSHGs9DyS2H7%2FmnLsv4V%2FiLsWgcGJhUUqCaHK9%2B2Db4X3iizmKaiQcpUkoDJ4hzh2IoLdp%2FQ6fGHZMlKozjYTgsW8mBVhlAGUnW%2FgrFhWTcFV0AzxxmmkNEFDhaB%2BU2etBgsDeNDbRXLcKRMyXlrrNmX0k4xr%2FkSxhgCNUjxfPNOD8PB3bh%2BTmyahebDbRn8lJicAam%2BOwhf6HxxnIrOQ56jx%2B9HLlDf1y8I0dReJK7O0bpZZo7RzTRIqTELYhUCYdODaSDs5zaGS5WW3MnvnZcG1c0B9hO4k2duMe45NCsX6IYUdcXLUYiSA5jMlY1ptOfWBBgMpUNHg2ccB3CvCDbFPlmvZn8ExqdqhyBSZXiY55T9T0wLBhBds9h%2Fr9tADMRiQ%2B%2FLkkQUZKjIcllXwrTOm3gFxQnfNkI%2Bs5fjm3PWA1OAXhB0tYiVpUUHATHZXv%2BwPs1jhKM5dTMJe9lsMGOqUBjaEnbOeNzqaccD6TJzgoUpLSeVrJ2HItLbyeUv3eFDChj6L2Mqw7vRue6%2B172666XiD3sg%2FjbkraQbEYawUt6UQz2duNyLmSEs2ivc6%2F9ot3vU53Q0405Kfy%2F4EvlJrLkqAzii4%2BxSqd5glFanwYkIOLQsSjKi8eLVIhfuRO5vErubcpwF6J2RTh9d8M7BZpofO7B1KYgNmfGuscxdx9Qf5FJrVb&X-Amz-Signature=173529bf4d4fb69643bb001917acf29ceb1af03e6e5d18f1f6fccf6162da9442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF33MCYE%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN4TR%2BrYFiuiQGvvcObFiLkUg88ydVonP7ltV6cFcXXgIgVZafJG73WbamhrmUo%2BR7MSqXOG%2BTb5XGRh%2BOqh65RSQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOBclXBt%2FE%2ByDiXTSrcA1R8q5%2BZmNrR9OKrqD002ZQgy4NNOVl2px9shh5gV3ZechiVW%2FVJ%2Bzyh4FV3D4qN%2FIOuMu7LzuHs7hUAsm2HppynU%2BX%2BoVyfFVIrskNRAoAfGZaiz2cvU3KnSnvnMbqB5pbz0qp%2B%2FTzK4u%2BSIzMTHsjd8DE4qzHmkwfOvfiksFuV9cpSHGs9DyS2H7%2FmnLsv4V%2FiLsWgcGJhUUqCaHK9%2B2Db4X3iizmKaiQcpUkoDJ4hzh2IoLdp%2FQ6fGHZMlKozjYTgsW8mBVhlAGUnW%2FgrFhWTcFV0AzxxmmkNEFDhaB%2BU2etBgsDeNDbRXLcKRMyXlrrNmX0k4xr%2FkSxhgCNUjxfPNOD8PB3bh%2BTmyahebDbRn8lJicAam%2BOwhf6HxxnIrOQ56jx%2B9HLlDf1y8I0dReJK7O0bpZZo7RzTRIqTELYhUCYdODaSDs5zaGS5WW3MnvnZcG1c0B9hO4k2duMe45NCsX6IYUdcXLUYiSA5jMlY1ptOfWBBgMpUNHg2ccB3CvCDbFPlmvZn8ExqdqhyBSZXiY55T9T0wLBhBds9h%2Fr9tADMRiQ%2B%2FLkkQUZKjIcllXwrTOm3gFxQnfNkI%2Bs5fjm3PWA1OAXhB0tYiVpUUHATHZXv%2BwPs1jhKM5dTMJe9lsMGOqUBjaEnbOeNzqaccD6TJzgoUpLSeVrJ2HItLbyeUv3eFDChj6L2Mqw7vRue6%2B172666XiD3sg%2FjbkraQbEYawUt6UQz2duNyLmSEs2ivc6%2F9ot3vU53Q0405Kfy%2F4EvlJrLkqAzii4%2BxSqd5glFanwYkIOLQsSjKi8eLVIhfuRO5vErubcpwF6J2RTh9d8M7BZpofO7B1KYgNmfGuscxdx9Qf5FJrVb&X-Amz-Signature=ff24d9c5e2233bca22b4188d1f49f189b9202ee2c1c9d3885aa4f2e5de52c7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF33MCYE%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN4TR%2BrYFiuiQGvvcObFiLkUg88ydVonP7ltV6cFcXXgIgVZafJG73WbamhrmUo%2BR7MSqXOG%2BTb5XGRh%2BOqh65RSQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOBclXBt%2FE%2ByDiXTSrcA1R8q5%2BZmNrR9OKrqD002ZQgy4NNOVl2px9shh5gV3ZechiVW%2FVJ%2Bzyh4FV3D4qN%2FIOuMu7LzuHs7hUAsm2HppynU%2BX%2BoVyfFVIrskNRAoAfGZaiz2cvU3KnSnvnMbqB5pbz0qp%2B%2FTzK4u%2BSIzMTHsjd8DE4qzHmkwfOvfiksFuV9cpSHGs9DyS2H7%2FmnLsv4V%2FiLsWgcGJhUUqCaHK9%2B2Db4X3iizmKaiQcpUkoDJ4hzh2IoLdp%2FQ6fGHZMlKozjYTgsW8mBVhlAGUnW%2FgrFhWTcFV0AzxxmmkNEFDhaB%2BU2etBgsDeNDbRXLcKRMyXlrrNmX0k4xr%2FkSxhgCNUjxfPNOD8PB3bh%2BTmyahebDbRn8lJicAam%2BOwhf6HxxnIrOQ56jx%2B9HLlDf1y8I0dReJK7O0bpZZo7RzTRIqTELYhUCYdODaSDs5zaGS5WW3MnvnZcG1c0B9hO4k2duMe45NCsX6IYUdcXLUYiSA5jMlY1ptOfWBBgMpUNHg2ccB3CvCDbFPlmvZn8ExqdqhyBSZXiY55T9T0wLBhBds9h%2Fr9tADMRiQ%2B%2FLkkQUZKjIcllXwrTOm3gFxQnfNkI%2Bs5fjm3PWA1OAXhB0tYiVpUUHATHZXv%2BwPs1jhKM5dTMJe9lsMGOqUBjaEnbOeNzqaccD6TJzgoUpLSeVrJ2HItLbyeUv3eFDChj6L2Mqw7vRue6%2B172666XiD3sg%2FjbkraQbEYawUt6UQz2duNyLmSEs2ivc6%2F9ot3vU53Q0405Kfy%2F4EvlJrLkqAzii4%2BxSqd5glFanwYkIOLQsSjKi8eLVIhfuRO5vErubcpwF6J2RTh9d8M7BZpofO7B1KYgNmfGuscxdx9Qf5FJrVb&X-Amz-Signature=e3a239d95bf0e485a473e55f74c894f6249bf267588743d3a50dcca07ea179a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF33MCYE%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN4TR%2BrYFiuiQGvvcObFiLkUg88ydVonP7ltV6cFcXXgIgVZafJG73WbamhrmUo%2BR7MSqXOG%2BTb5XGRh%2BOqh65RSQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOBclXBt%2FE%2ByDiXTSrcA1R8q5%2BZmNrR9OKrqD002ZQgy4NNOVl2px9shh5gV3ZechiVW%2FVJ%2Bzyh4FV3D4qN%2FIOuMu7LzuHs7hUAsm2HppynU%2BX%2BoVyfFVIrskNRAoAfGZaiz2cvU3KnSnvnMbqB5pbz0qp%2B%2FTzK4u%2BSIzMTHsjd8DE4qzHmkwfOvfiksFuV9cpSHGs9DyS2H7%2FmnLsv4V%2FiLsWgcGJhUUqCaHK9%2B2Db4X3iizmKaiQcpUkoDJ4hzh2IoLdp%2FQ6fGHZMlKozjYTgsW8mBVhlAGUnW%2FgrFhWTcFV0AzxxmmkNEFDhaB%2BU2etBgsDeNDbRXLcKRMyXlrrNmX0k4xr%2FkSxhgCNUjxfPNOD8PB3bh%2BTmyahebDbRn8lJicAam%2BOwhf6HxxnIrOQ56jx%2B9HLlDf1y8I0dReJK7O0bpZZo7RzTRIqTELYhUCYdODaSDs5zaGS5WW3MnvnZcG1c0B9hO4k2duMe45NCsX6IYUdcXLUYiSA5jMlY1ptOfWBBgMpUNHg2ccB3CvCDbFPlmvZn8ExqdqhyBSZXiY55T9T0wLBhBds9h%2Fr9tADMRiQ%2B%2FLkkQUZKjIcllXwrTOm3gFxQnfNkI%2Bs5fjm3PWA1OAXhB0tYiVpUUHATHZXv%2BwPs1jhKM5dTMJe9lsMGOqUBjaEnbOeNzqaccD6TJzgoUpLSeVrJ2HItLbyeUv3eFDChj6L2Mqw7vRue6%2B172666XiD3sg%2FjbkraQbEYawUt6UQz2duNyLmSEs2ivc6%2F9ot3vU53Q0405Kfy%2F4EvlJrLkqAzii4%2BxSqd5glFanwYkIOLQsSjKi8eLVIhfuRO5vErubcpwF6J2RTh9d8M7BZpofO7B1KYgNmfGuscxdx9Qf5FJrVb&X-Amz-Signature=40999d3ba638f80c8c52bfa9c6879b64f24d0105931acfcff1168ba162a9c517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF33MCYE%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN4TR%2BrYFiuiQGvvcObFiLkUg88ydVonP7ltV6cFcXXgIgVZafJG73WbamhrmUo%2BR7MSqXOG%2BTb5XGRh%2BOqh65RSQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOBclXBt%2FE%2ByDiXTSrcA1R8q5%2BZmNrR9OKrqD002ZQgy4NNOVl2px9shh5gV3ZechiVW%2FVJ%2Bzyh4FV3D4qN%2FIOuMu7LzuHs7hUAsm2HppynU%2BX%2BoVyfFVIrskNRAoAfGZaiz2cvU3KnSnvnMbqB5pbz0qp%2B%2FTzK4u%2BSIzMTHsjd8DE4qzHmkwfOvfiksFuV9cpSHGs9DyS2H7%2FmnLsv4V%2FiLsWgcGJhUUqCaHK9%2B2Db4X3iizmKaiQcpUkoDJ4hzh2IoLdp%2FQ6fGHZMlKozjYTgsW8mBVhlAGUnW%2FgrFhWTcFV0AzxxmmkNEFDhaB%2BU2etBgsDeNDbRXLcKRMyXlrrNmX0k4xr%2FkSxhgCNUjxfPNOD8PB3bh%2BTmyahebDbRn8lJicAam%2BOwhf6HxxnIrOQ56jx%2B9HLlDf1y8I0dReJK7O0bpZZo7RzTRIqTELYhUCYdODaSDs5zaGS5WW3MnvnZcG1c0B9hO4k2duMe45NCsX6IYUdcXLUYiSA5jMlY1ptOfWBBgMpUNHg2ccB3CvCDbFPlmvZn8ExqdqhyBSZXiY55T9T0wLBhBds9h%2Fr9tADMRiQ%2B%2FLkkQUZKjIcllXwrTOm3gFxQnfNkI%2Bs5fjm3PWA1OAXhB0tYiVpUUHATHZXv%2BwPs1jhKM5dTMJe9lsMGOqUBjaEnbOeNzqaccD6TJzgoUpLSeVrJ2HItLbyeUv3eFDChj6L2Mqw7vRue6%2B172666XiD3sg%2FjbkraQbEYawUt6UQz2duNyLmSEs2ivc6%2F9ot3vU53Q0405Kfy%2F4EvlJrLkqAzii4%2BxSqd5glFanwYkIOLQsSjKi8eLVIhfuRO5vErubcpwF6J2RTh9d8M7BZpofO7B1KYgNmfGuscxdx9Qf5FJrVb&X-Amz-Signature=fdcc6c6cf8b08092ed257eb7da0c061ffb7f716f2a00b37ebdf82319d6741c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF33MCYE%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN4TR%2BrYFiuiQGvvcObFiLkUg88ydVonP7ltV6cFcXXgIgVZafJG73WbamhrmUo%2BR7MSqXOG%2BTb5XGRh%2BOqh65RSQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOBclXBt%2FE%2ByDiXTSrcA1R8q5%2BZmNrR9OKrqD002ZQgy4NNOVl2px9shh5gV3ZechiVW%2FVJ%2Bzyh4FV3D4qN%2FIOuMu7LzuHs7hUAsm2HppynU%2BX%2BoVyfFVIrskNRAoAfGZaiz2cvU3KnSnvnMbqB5pbz0qp%2B%2FTzK4u%2BSIzMTHsjd8DE4qzHmkwfOvfiksFuV9cpSHGs9DyS2H7%2FmnLsv4V%2FiLsWgcGJhUUqCaHK9%2B2Db4X3iizmKaiQcpUkoDJ4hzh2IoLdp%2FQ6fGHZMlKozjYTgsW8mBVhlAGUnW%2FgrFhWTcFV0AzxxmmkNEFDhaB%2BU2etBgsDeNDbRXLcKRMyXlrrNmX0k4xr%2FkSxhgCNUjxfPNOD8PB3bh%2BTmyahebDbRn8lJicAam%2BOwhf6HxxnIrOQ56jx%2B9HLlDf1y8I0dReJK7O0bpZZo7RzTRIqTELYhUCYdODaSDs5zaGS5WW3MnvnZcG1c0B9hO4k2duMe45NCsX6IYUdcXLUYiSA5jMlY1ptOfWBBgMpUNHg2ccB3CvCDbFPlmvZn8ExqdqhyBSZXiY55T9T0wLBhBds9h%2Fr9tADMRiQ%2B%2FLkkQUZKjIcllXwrTOm3gFxQnfNkI%2Bs5fjm3PWA1OAXhB0tYiVpUUHATHZXv%2BwPs1jhKM5dTMJe9lsMGOqUBjaEnbOeNzqaccD6TJzgoUpLSeVrJ2HItLbyeUv3eFDChj6L2Mqw7vRue6%2B172666XiD3sg%2FjbkraQbEYawUt6UQz2duNyLmSEs2ivc6%2F9ot3vU53Q0405Kfy%2F4EvlJrLkqAzii4%2BxSqd5glFanwYkIOLQsSjKi8eLVIhfuRO5vErubcpwF6J2RTh9d8M7BZpofO7B1KYgNmfGuscxdx9Qf5FJrVb&X-Amz-Signature=b9e4f7bbc40a66854b06e891d403dd23ea242fe52c0fb93e94e3d89019f169ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF33MCYE%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN4TR%2BrYFiuiQGvvcObFiLkUg88ydVonP7ltV6cFcXXgIgVZafJG73WbamhrmUo%2BR7MSqXOG%2BTb5XGRh%2BOqh65RSQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOBclXBt%2FE%2ByDiXTSrcA1R8q5%2BZmNrR9OKrqD002ZQgy4NNOVl2px9shh5gV3ZechiVW%2FVJ%2Bzyh4FV3D4qN%2FIOuMu7LzuHs7hUAsm2HppynU%2BX%2BoVyfFVIrskNRAoAfGZaiz2cvU3KnSnvnMbqB5pbz0qp%2B%2FTzK4u%2BSIzMTHsjd8DE4qzHmkwfOvfiksFuV9cpSHGs9DyS2H7%2FmnLsv4V%2FiLsWgcGJhUUqCaHK9%2B2Db4X3iizmKaiQcpUkoDJ4hzh2IoLdp%2FQ6fGHZMlKozjYTgsW8mBVhlAGUnW%2FgrFhWTcFV0AzxxmmkNEFDhaB%2BU2etBgsDeNDbRXLcKRMyXlrrNmX0k4xr%2FkSxhgCNUjxfPNOD8PB3bh%2BTmyahebDbRn8lJicAam%2BOwhf6HxxnIrOQ56jx%2B9HLlDf1y8I0dReJK7O0bpZZo7RzTRIqTELYhUCYdODaSDs5zaGS5WW3MnvnZcG1c0B9hO4k2duMe45NCsX6IYUdcXLUYiSA5jMlY1ptOfWBBgMpUNHg2ccB3CvCDbFPlmvZn8ExqdqhyBSZXiY55T9T0wLBhBds9h%2Fr9tADMRiQ%2B%2FLkkQUZKjIcllXwrTOm3gFxQnfNkI%2Bs5fjm3PWA1OAXhB0tYiVpUUHATHZXv%2BwPs1jhKM5dTMJe9lsMGOqUBjaEnbOeNzqaccD6TJzgoUpLSeVrJ2HItLbyeUv3eFDChj6L2Mqw7vRue6%2B172666XiD3sg%2FjbkraQbEYawUt6UQz2duNyLmSEs2ivc6%2F9ot3vU53Q0405Kfy%2F4EvlJrLkqAzii4%2BxSqd5glFanwYkIOLQsSjKi8eLVIhfuRO5vErubcpwF6J2RTh9d8M7BZpofO7B1KYgNmfGuscxdx9Qf5FJrVb&X-Amz-Signature=c5e6f2eed588c317b3cfd73f435ef67d2cacf638050c0c9f1be77891116dc831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF33MCYE%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN4TR%2BrYFiuiQGvvcObFiLkUg88ydVonP7ltV6cFcXXgIgVZafJG73WbamhrmUo%2BR7MSqXOG%2BTb5XGRh%2BOqh65RSQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOBclXBt%2FE%2ByDiXTSrcA1R8q5%2BZmNrR9OKrqD002ZQgy4NNOVl2px9shh5gV3ZechiVW%2FVJ%2Bzyh4FV3D4qN%2FIOuMu7LzuHs7hUAsm2HppynU%2BX%2BoVyfFVIrskNRAoAfGZaiz2cvU3KnSnvnMbqB5pbz0qp%2B%2FTzK4u%2BSIzMTHsjd8DE4qzHmkwfOvfiksFuV9cpSHGs9DyS2H7%2FmnLsv4V%2FiLsWgcGJhUUqCaHK9%2B2Db4X3iizmKaiQcpUkoDJ4hzh2IoLdp%2FQ6fGHZMlKozjYTgsW8mBVhlAGUnW%2FgrFhWTcFV0AzxxmmkNEFDhaB%2BU2etBgsDeNDbRXLcKRMyXlrrNmX0k4xr%2FkSxhgCNUjxfPNOD8PB3bh%2BTmyahebDbRn8lJicAam%2BOwhf6HxxnIrOQ56jx%2B9HLlDf1y8I0dReJK7O0bpZZo7RzTRIqTELYhUCYdODaSDs5zaGS5WW3MnvnZcG1c0B9hO4k2duMe45NCsX6IYUdcXLUYiSA5jMlY1ptOfWBBgMpUNHg2ccB3CvCDbFPlmvZn8ExqdqhyBSZXiY55T9T0wLBhBds9h%2Fr9tADMRiQ%2B%2FLkkQUZKjIcllXwrTOm3gFxQnfNkI%2Bs5fjm3PWA1OAXhB0tYiVpUUHATHZXv%2BwPs1jhKM5dTMJe9lsMGOqUBjaEnbOeNzqaccD6TJzgoUpLSeVrJ2HItLbyeUv3eFDChj6L2Mqw7vRue6%2B172666XiD3sg%2FjbkraQbEYawUt6UQz2duNyLmSEs2ivc6%2F9ot3vU53Q0405Kfy%2F4EvlJrLkqAzii4%2BxSqd5glFanwYkIOLQsSjKi8eLVIhfuRO5vErubcpwF6J2RTh9d8M7BZpofO7B1KYgNmfGuscxdx9Qf5FJrVb&X-Amz-Signature=d8026896e8467d7e83446a6f0fc8c995f925978830fea903f04b1fa2adb12fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
