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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2NMHWB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFkoLWIWXkQMYUjyaJge1%2FdVy30TxOIuY7LxOIfbd7MQIgCM3pcAThRvwqFBdWuZR5xezoR0KAnAg%2FmLDKPn%2BnizYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDZv2cM%2B6ZeUMwf4vSrcA9sVRQ5MV78gaSD5e8TZWs%2FKkXDfrp2EbWmBgJ7eI8mcGMlRrh6Vzfl1gtZSgN648F7EO1SxqA28M%2B9PntVS2eGKDtLCO9Mon7o%2F%2B6tqgz%2BlXOt6OhfPBI3zUUw%2BFyJCdo%2FjGUbuI1ynWUs1xGSXc8tKWM0vq9FPxIXaYNrOkRJZmXJIn09%2Br7curU1q47i0ykv65JUG0MPvgUOXPpSjYfILjUokR81zUUiohm8Jjz0XomwdhrMQx0m%2BMBQ8qgz3w6NBUnOznAHvUSHR3wnOMgKTAA03sYoazjKZAPalkFM93CFboC1pKJQlCw2W95BDUMEOra3FWfSqilnQyArcGQBZUHS8sEeGOIjc7C9YoLEphG%2Fa83wWVZ8rolPslbcBnHohrFRO%2Fj3vsaa48k%2F8oufnBduzo1K70hq%2FRTcfAyBp74p3yXmxciHSqBmw0uQS2Al%2BQ860n3%2BCwjDS8yXPR0nbhd42HMHaFhQjIKJ1W2Ipx%2BFNdyfxXwTQHFiyvK7KxRY68dFGvbE99GAVfFmBm2xscpfxNGksZL%2FVZYjHIoH0vbsrkE%2BI88exnyyzwfMiuQr8qBz1%2FrBDagwK6UqU2oXV8ZAmuNm8IKqxWSNnB5kTzw18sv62b8ukAa6AML2dsMsGOqUB5yesgtE40Nr9Mcus8dTJmam1%2BO007mmTelryYkDSpreWJPZoWq95bNzsvmxlwE3RW3%2FFdWsb2%2F1eIaKZuVyLRHU8%2Bt3LyRiAGv1KHVuWRD9wjYSqiZfdvCG4sQJVHN6TD%2B18clONhQDEROWdCQA8NKAwskXjl8GuIP6zqDNq8kRRp2%2BQs2I5eZCz8sPl2g%2Bx8%2BXdj66LNyPwIoAFI5TEzlwz8SSy&X-Amz-Signature=5a0e76e49e4fa6b1d0b1a3ea4b5802d18dbe3ea9ee814166157cda8e7529690a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2NMHWB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFkoLWIWXkQMYUjyaJge1%2FdVy30TxOIuY7LxOIfbd7MQIgCM3pcAThRvwqFBdWuZR5xezoR0KAnAg%2FmLDKPn%2BnizYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDZv2cM%2B6ZeUMwf4vSrcA9sVRQ5MV78gaSD5e8TZWs%2FKkXDfrp2EbWmBgJ7eI8mcGMlRrh6Vzfl1gtZSgN648F7EO1SxqA28M%2B9PntVS2eGKDtLCO9Mon7o%2F%2B6tqgz%2BlXOt6OhfPBI3zUUw%2BFyJCdo%2FjGUbuI1ynWUs1xGSXc8tKWM0vq9FPxIXaYNrOkRJZmXJIn09%2Br7curU1q47i0ykv65JUG0MPvgUOXPpSjYfILjUokR81zUUiohm8Jjz0XomwdhrMQx0m%2BMBQ8qgz3w6NBUnOznAHvUSHR3wnOMgKTAA03sYoazjKZAPalkFM93CFboC1pKJQlCw2W95BDUMEOra3FWfSqilnQyArcGQBZUHS8sEeGOIjc7C9YoLEphG%2Fa83wWVZ8rolPslbcBnHohrFRO%2Fj3vsaa48k%2F8oufnBduzo1K70hq%2FRTcfAyBp74p3yXmxciHSqBmw0uQS2Al%2BQ860n3%2BCwjDS8yXPR0nbhd42HMHaFhQjIKJ1W2Ipx%2BFNdyfxXwTQHFiyvK7KxRY68dFGvbE99GAVfFmBm2xscpfxNGksZL%2FVZYjHIoH0vbsrkE%2BI88exnyyzwfMiuQr8qBz1%2FrBDagwK6UqU2oXV8ZAmuNm8IKqxWSNnB5kTzw18sv62b8ukAa6AML2dsMsGOqUB5yesgtE40Nr9Mcus8dTJmam1%2BO007mmTelryYkDSpreWJPZoWq95bNzsvmxlwE3RW3%2FFdWsb2%2F1eIaKZuVyLRHU8%2Bt3LyRiAGv1KHVuWRD9wjYSqiZfdvCG4sQJVHN6TD%2B18clONhQDEROWdCQA8NKAwskXjl8GuIP6zqDNq8kRRp2%2BQs2I5eZCz8sPl2g%2Bx8%2BXdj66LNyPwIoAFI5TEzlwz8SSy&X-Amz-Signature=6d730b53c2a9cfcbbdf996656abf30b4bb9951bc8ff57f0cdb5323d78559cf97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2NMHWB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFkoLWIWXkQMYUjyaJge1%2FdVy30TxOIuY7LxOIfbd7MQIgCM3pcAThRvwqFBdWuZR5xezoR0KAnAg%2FmLDKPn%2BnizYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDZv2cM%2B6ZeUMwf4vSrcA9sVRQ5MV78gaSD5e8TZWs%2FKkXDfrp2EbWmBgJ7eI8mcGMlRrh6Vzfl1gtZSgN648F7EO1SxqA28M%2B9PntVS2eGKDtLCO9Mon7o%2F%2B6tqgz%2BlXOt6OhfPBI3zUUw%2BFyJCdo%2FjGUbuI1ynWUs1xGSXc8tKWM0vq9FPxIXaYNrOkRJZmXJIn09%2Br7curU1q47i0ykv65JUG0MPvgUOXPpSjYfILjUokR81zUUiohm8Jjz0XomwdhrMQx0m%2BMBQ8qgz3w6NBUnOznAHvUSHR3wnOMgKTAA03sYoazjKZAPalkFM93CFboC1pKJQlCw2W95BDUMEOra3FWfSqilnQyArcGQBZUHS8sEeGOIjc7C9YoLEphG%2Fa83wWVZ8rolPslbcBnHohrFRO%2Fj3vsaa48k%2F8oufnBduzo1K70hq%2FRTcfAyBp74p3yXmxciHSqBmw0uQS2Al%2BQ860n3%2BCwjDS8yXPR0nbhd42HMHaFhQjIKJ1W2Ipx%2BFNdyfxXwTQHFiyvK7KxRY68dFGvbE99GAVfFmBm2xscpfxNGksZL%2FVZYjHIoH0vbsrkE%2BI88exnyyzwfMiuQr8qBz1%2FrBDagwK6UqU2oXV8ZAmuNm8IKqxWSNnB5kTzw18sv62b8ukAa6AML2dsMsGOqUB5yesgtE40Nr9Mcus8dTJmam1%2BO007mmTelryYkDSpreWJPZoWq95bNzsvmxlwE3RW3%2FFdWsb2%2F1eIaKZuVyLRHU8%2Bt3LyRiAGv1KHVuWRD9wjYSqiZfdvCG4sQJVHN6TD%2B18clONhQDEROWdCQA8NKAwskXjl8GuIP6zqDNq8kRRp2%2BQs2I5eZCz8sPl2g%2Bx8%2BXdj66LNyPwIoAFI5TEzlwz8SSy&X-Amz-Signature=006d80ba456c623367e6e4318107d676ae16099385753f5795ed31ed6a56e5c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2NMHWB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFkoLWIWXkQMYUjyaJge1%2FdVy30TxOIuY7LxOIfbd7MQIgCM3pcAThRvwqFBdWuZR5xezoR0KAnAg%2FmLDKPn%2BnizYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDZv2cM%2B6ZeUMwf4vSrcA9sVRQ5MV78gaSD5e8TZWs%2FKkXDfrp2EbWmBgJ7eI8mcGMlRrh6Vzfl1gtZSgN648F7EO1SxqA28M%2B9PntVS2eGKDtLCO9Mon7o%2F%2B6tqgz%2BlXOt6OhfPBI3zUUw%2BFyJCdo%2FjGUbuI1ynWUs1xGSXc8tKWM0vq9FPxIXaYNrOkRJZmXJIn09%2Br7curU1q47i0ykv65JUG0MPvgUOXPpSjYfILjUokR81zUUiohm8Jjz0XomwdhrMQx0m%2BMBQ8qgz3w6NBUnOznAHvUSHR3wnOMgKTAA03sYoazjKZAPalkFM93CFboC1pKJQlCw2W95BDUMEOra3FWfSqilnQyArcGQBZUHS8sEeGOIjc7C9YoLEphG%2Fa83wWVZ8rolPslbcBnHohrFRO%2Fj3vsaa48k%2F8oufnBduzo1K70hq%2FRTcfAyBp74p3yXmxciHSqBmw0uQS2Al%2BQ860n3%2BCwjDS8yXPR0nbhd42HMHaFhQjIKJ1W2Ipx%2BFNdyfxXwTQHFiyvK7KxRY68dFGvbE99GAVfFmBm2xscpfxNGksZL%2FVZYjHIoH0vbsrkE%2BI88exnyyzwfMiuQr8qBz1%2FrBDagwK6UqU2oXV8ZAmuNm8IKqxWSNnB5kTzw18sv62b8ukAa6AML2dsMsGOqUB5yesgtE40Nr9Mcus8dTJmam1%2BO007mmTelryYkDSpreWJPZoWq95bNzsvmxlwE3RW3%2FFdWsb2%2F1eIaKZuVyLRHU8%2Bt3LyRiAGv1KHVuWRD9wjYSqiZfdvCG4sQJVHN6TD%2B18clONhQDEROWdCQA8NKAwskXjl8GuIP6zqDNq8kRRp2%2BQs2I5eZCz8sPl2g%2Bx8%2BXdj66LNyPwIoAFI5TEzlwz8SSy&X-Amz-Signature=32569b533bc1ee47dbcd5c86d7984d5c2fcaaa1ce1ce30b4f22de6eb36a3cd39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2NMHWB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFkoLWIWXkQMYUjyaJge1%2FdVy30TxOIuY7LxOIfbd7MQIgCM3pcAThRvwqFBdWuZR5xezoR0KAnAg%2FmLDKPn%2BnizYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDZv2cM%2B6ZeUMwf4vSrcA9sVRQ5MV78gaSD5e8TZWs%2FKkXDfrp2EbWmBgJ7eI8mcGMlRrh6Vzfl1gtZSgN648F7EO1SxqA28M%2B9PntVS2eGKDtLCO9Mon7o%2F%2B6tqgz%2BlXOt6OhfPBI3zUUw%2BFyJCdo%2FjGUbuI1ynWUs1xGSXc8tKWM0vq9FPxIXaYNrOkRJZmXJIn09%2Br7curU1q47i0ykv65JUG0MPvgUOXPpSjYfILjUokR81zUUiohm8Jjz0XomwdhrMQx0m%2BMBQ8qgz3w6NBUnOznAHvUSHR3wnOMgKTAA03sYoazjKZAPalkFM93CFboC1pKJQlCw2W95BDUMEOra3FWfSqilnQyArcGQBZUHS8sEeGOIjc7C9YoLEphG%2Fa83wWVZ8rolPslbcBnHohrFRO%2Fj3vsaa48k%2F8oufnBduzo1K70hq%2FRTcfAyBp74p3yXmxciHSqBmw0uQS2Al%2BQ860n3%2BCwjDS8yXPR0nbhd42HMHaFhQjIKJ1W2Ipx%2BFNdyfxXwTQHFiyvK7KxRY68dFGvbE99GAVfFmBm2xscpfxNGksZL%2FVZYjHIoH0vbsrkE%2BI88exnyyzwfMiuQr8qBz1%2FrBDagwK6UqU2oXV8ZAmuNm8IKqxWSNnB5kTzw18sv62b8ukAa6AML2dsMsGOqUB5yesgtE40Nr9Mcus8dTJmam1%2BO007mmTelryYkDSpreWJPZoWq95bNzsvmxlwE3RW3%2FFdWsb2%2F1eIaKZuVyLRHU8%2Bt3LyRiAGv1KHVuWRD9wjYSqiZfdvCG4sQJVHN6TD%2B18clONhQDEROWdCQA8NKAwskXjl8GuIP6zqDNq8kRRp2%2BQs2I5eZCz8sPl2g%2Bx8%2BXdj66LNyPwIoAFI5TEzlwz8SSy&X-Amz-Signature=859fdfc4a2732aef4c3c7e4d667b813f6fd8c237779fff8da63d6e3a3f3b6525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2NMHWB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFkoLWIWXkQMYUjyaJge1%2FdVy30TxOIuY7LxOIfbd7MQIgCM3pcAThRvwqFBdWuZR5xezoR0KAnAg%2FmLDKPn%2BnizYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDZv2cM%2B6ZeUMwf4vSrcA9sVRQ5MV78gaSD5e8TZWs%2FKkXDfrp2EbWmBgJ7eI8mcGMlRrh6Vzfl1gtZSgN648F7EO1SxqA28M%2B9PntVS2eGKDtLCO9Mon7o%2F%2B6tqgz%2BlXOt6OhfPBI3zUUw%2BFyJCdo%2FjGUbuI1ynWUs1xGSXc8tKWM0vq9FPxIXaYNrOkRJZmXJIn09%2Br7curU1q47i0ykv65JUG0MPvgUOXPpSjYfILjUokR81zUUiohm8Jjz0XomwdhrMQx0m%2BMBQ8qgz3w6NBUnOznAHvUSHR3wnOMgKTAA03sYoazjKZAPalkFM93CFboC1pKJQlCw2W95BDUMEOra3FWfSqilnQyArcGQBZUHS8sEeGOIjc7C9YoLEphG%2Fa83wWVZ8rolPslbcBnHohrFRO%2Fj3vsaa48k%2F8oufnBduzo1K70hq%2FRTcfAyBp74p3yXmxciHSqBmw0uQS2Al%2BQ860n3%2BCwjDS8yXPR0nbhd42HMHaFhQjIKJ1W2Ipx%2BFNdyfxXwTQHFiyvK7KxRY68dFGvbE99GAVfFmBm2xscpfxNGksZL%2FVZYjHIoH0vbsrkE%2BI88exnyyzwfMiuQr8qBz1%2FrBDagwK6UqU2oXV8ZAmuNm8IKqxWSNnB5kTzw18sv62b8ukAa6AML2dsMsGOqUB5yesgtE40Nr9Mcus8dTJmam1%2BO007mmTelryYkDSpreWJPZoWq95bNzsvmxlwE3RW3%2FFdWsb2%2F1eIaKZuVyLRHU8%2Bt3LyRiAGv1KHVuWRD9wjYSqiZfdvCG4sQJVHN6TD%2B18clONhQDEROWdCQA8NKAwskXjl8GuIP6zqDNq8kRRp2%2BQs2I5eZCz8sPl2g%2Bx8%2BXdj66LNyPwIoAFI5TEzlwz8SSy&X-Amz-Signature=11176131fd7a669190bc961244aa98466b170e490139cd5ab73081d0f13d643c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2NMHWB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFkoLWIWXkQMYUjyaJge1%2FdVy30TxOIuY7LxOIfbd7MQIgCM3pcAThRvwqFBdWuZR5xezoR0KAnAg%2FmLDKPn%2BnizYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDZv2cM%2B6ZeUMwf4vSrcA9sVRQ5MV78gaSD5e8TZWs%2FKkXDfrp2EbWmBgJ7eI8mcGMlRrh6Vzfl1gtZSgN648F7EO1SxqA28M%2B9PntVS2eGKDtLCO9Mon7o%2F%2B6tqgz%2BlXOt6OhfPBI3zUUw%2BFyJCdo%2FjGUbuI1ynWUs1xGSXc8tKWM0vq9FPxIXaYNrOkRJZmXJIn09%2Br7curU1q47i0ykv65JUG0MPvgUOXPpSjYfILjUokR81zUUiohm8Jjz0XomwdhrMQx0m%2BMBQ8qgz3w6NBUnOznAHvUSHR3wnOMgKTAA03sYoazjKZAPalkFM93CFboC1pKJQlCw2W95BDUMEOra3FWfSqilnQyArcGQBZUHS8sEeGOIjc7C9YoLEphG%2Fa83wWVZ8rolPslbcBnHohrFRO%2Fj3vsaa48k%2F8oufnBduzo1K70hq%2FRTcfAyBp74p3yXmxciHSqBmw0uQS2Al%2BQ860n3%2BCwjDS8yXPR0nbhd42HMHaFhQjIKJ1W2Ipx%2BFNdyfxXwTQHFiyvK7KxRY68dFGvbE99GAVfFmBm2xscpfxNGksZL%2FVZYjHIoH0vbsrkE%2BI88exnyyzwfMiuQr8qBz1%2FrBDagwK6UqU2oXV8ZAmuNm8IKqxWSNnB5kTzw18sv62b8ukAa6AML2dsMsGOqUB5yesgtE40Nr9Mcus8dTJmam1%2BO007mmTelryYkDSpreWJPZoWq95bNzsvmxlwE3RW3%2FFdWsb2%2F1eIaKZuVyLRHU8%2Bt3LyRiAGv1KHVuWRD9wjYSqiZfdvCG4sQJVHN6TD%2B18clONhQDEROWdCQA8NKAwskXjl8GuIP6zqDNq8kRRp2%2BQs2I5eZCz8sPl2g%2Bx8%2BXdj66LNyPwIoAFI5TEzlwz8SSy&X-Amz-Signature=be278c1629cf064f6b14a5b3744f8f252dcf93e419a77cfac87612702e00d86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2NMHWB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFkoLWIWXkQMYUjyaJge1%2FdVy30TxOIuY7LxOIfbd7MQIgCM3pcAThRvwqFBdWuZR5xezoR0KAnAg%2FmLDKPn%2BnizYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDZv2cM%2B6ZeUMwf4vSrcA9sVRQ5MV78gaSD5e8TZWs%2FKkXDfrp2EbWmBgJ7eI8mcGMlRrh6Vzfl1gtZSgN648F7EO1SxqA28M%2B9PntVS2eGKDtLCO9Mon7o%2F%2B6tqgz%2BlXOt6OhfPBI3zUUw%2BFyJCdo%2FjGUbuI1ynWUs1xGSXc8tKWM0vq9FPxIXaYNrOkRJZmXJIn09%2Br7curU1q47i0ykv65JUG0MPvgUOXPpSjYfILjUokR81zUUiohm8Jjz0XomwdhrMQx0m%2BMBQ8qgz3w6NBUnOznAHvUSHR3wnOMgKTAA03sYoazjKZAPalkFM93CFboC1pKJQlCw2W95BDUMEOra3FWfSqilnQyArcGQBZUHS8sEeGOIjc7C9YoLEphG%2Fa83wWVZ8rolPslbcBnHohrFRO%2Fj3vsaa48k%2F8oufnBduzo1K70hq%2FRTcfAyBp74p3yXmxciHSqBmw0uQS2Al%2BQ860n3%2BCwjDS8yXPR0nbhd42HMHaFhQjIKJ1W2Ipx%2BFNdyfxXwTQHFiyvK7KxRY68dFGvbE99GAVfFmBm2xscpfxNGksZL%2FVZYjHIoH0vbsrkE%2BI88exnyyzwfMiuQr8qBz1%2FrBDagwK6UqU2oXV8ZAmuNm8IKqxWSNnB5kTzw18sv62b8ukAa6AML2dsMsGOqUB5yesgtE40Nr9Mcus8dTJmam1%2BO007mmTelryYkDSpreWJPZoWq95bNzsvmxlwE3RW3%2FFdWsb2%2F1eIaKZuVyLRHU8%2Bt3LyRiAGv1KHVuWRD9wjYSqiZfdvCG4sQJVHN6TD%2B18clONhQDEROWdCQA8NKAwskXjl8GuIP6zqDNq8kRRp2%2BQs2I5eZCz8sPl2g%2Bx8%2BXdj66LNyPwIoAFI5TEzlwz8SSy&X-Amz-Signature=3cbe54c9d426904888cd4324f6b62b7887f572fa0016045eab477129c9c0ce29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
