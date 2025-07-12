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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKXZIH4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGo1tQPMbHlOzLahF%2Bn4JsQXdQPaMG9dbmIeeYJ4Il6AiAF8ddHtbpLY3Ssk5u3sTuO4qLou%2Fx7X6oIjjILWD3mJSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnBcFeYvB07cfcG5wKtwDjOL1TUqpQIcIOCuUd5jQpWtZlbS706qkMCcdfBCUSQ1aiip9PSpq%2BY1Bi43VTnjT45TmtOak7GJKiQFbDHp6EVo94xrEBkg2h%2BRLOlLb0qdAeGMD8UatY71pejjn%2F7DJ7bxA%2FWkF8BC8G3gKCjKuUAVPNqasFykbSKlZ3J02BZOH7m9wqWlBmvr4ge0dJ5rcObcKcjagOYLVSyUOUOJJ1Oj9Hb%2FFpllwXYfyjVyo4NOXBWF%2FJqO9L0%2B4tVrULzoaQmwYwpSNd3S19x4n78H3alC8oxpvxhkxp5TOdSIYszT8ypL7OkK%2FyyiKseEX7a3y8qoUeaDM4H5fDNMyUoKzat%2FxJJFhW1BJOpYok5uo3RuK1maJwmFJtjaC1R7KKPSFwQM4uHOYUIUtsBJjaRkMM%2FDZa%2B%2FykVCfybDtTI15zdlSQxY3mMqIdth2QczZRk9oQFWgAChMKnznlSfYDiQUqQILAt0V%2FsDh7l1AVS%2B%2FD5Li4XF8K%2Ft%2FLrex3WBea%2F%2F7nVBvzS0DqgEbjWqLljKDEKCW2NPzC7Fl1tINn8fMXEjU4cJekp7U0ahWD3dlx%2FUM3%2F8EHaGNtq18jmVJUSYGdfU4%2BJLP5E2qi%2F3i6Wc6Y%2BYj0%2FWcCaW178F53cwwiK7LwwY6pgGZJ5Od%2BjMvyncIVLrqw%2FGjVS0E%2Fi%2F08Wq%2F6goIMYme5%2BEl3jxlWaRsfrgCW6VXTI0rrykDXdP9G0IycvlwomgLqEwAHjcsfhdR5zwQb6dJUsrPcUwBbZRPeTUGYT6dzihFiZYqPtpKFUpcGytb1T07awIbr%2FG5vzGi%2FwmsRjvfLxkBFQS8Au5upox6xSxR66CvxOpdaB05aYPjAQ8Y4J0G9Z7IErrk&X-Amz-Signature=404bb987689b0ec8395c4275b3422676f5e17876cf67d0807b77c0ffd877e4fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKXZIH4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGo1tQPMbHlOzLahF%2Bn4JsQXdQPaMG9dbmIeeYJ4Il6AiAF8ddHtbpLY3Ssk5u3sTuO4qLou%2Fx7X6oIjjILWD3mJSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnBcFeYvB07cfcG5wKtwDjOL1TUqpQIcIOCuUd5jQpWtZlbS706qkMCcdfBCUSQ1aiip9PSpq%2BY1Bi43VTnjT45TmtOak7GJKiQFbDHp6EVo94xrEBkg2h%2BRLOlLb0qdAeGMD8UatY71pejjn%2F7DJ7bxA%2FWkF8BC8G3gKCjKuUAVPNqasFykbSKlZ3J02BZOH7m9wqWlBmvr4ge0dJ5rcObcKcjagOYLVSyUOUOJJ1Oj9Hb%2FFpllwXYfyjVyo4NOXBWF%2FJqO9L0%2B4tVrULzoaQmwYwpSNd3S19x4n78H3alC8oxpvxhkxp5TOdSIYszT8ypL7OkK%2FyyiKseEX7a3y8qoUeaDM4H5fDNMyUoKzat%2FxJJFhW1BJOpYok5uo3RuK1maJwmFJtjaC1R7KKPSFwQM4uHOYUIUtsBJjaRkMM%2FDZa%2B%2FykVCfybDtTI15zdlSQxY3mMqIdth2QczZRk9oQFWgAChMKnznlSfYDiQUqQILAt0V%2FsDh7l1AVS%2B%2FD5Li4XF8K%2Ft%2FLrex3WBea%2F%2F7nVBvzS0DqgEbjWqLljKDEKCW2NPzC7Fl1tINn8fMXEjU4cJekp7U0ahWD3dlx%2FUM3%2F8EHaGNtq18jmVJUSYGdfU4%2BJLP5E2qi%2F3i6Wc6Y%2BYj0%2FWcCaW178F53cwwiK7LwwY6pgGZJ5Od%2BjMvyncIVLrqw%2FGjVS0E%2Fi%2F08Wq%2F6goIMYme5%2BEl3jxlWaRsfrgCW6VXTI0rrykDXdP9G0IycvlwomgLqEwAHjcsfhdR5zwQb6dJUsrPcUwBbZRPeTUGYT6dzihFiZYqPtpKFUpcGytb1T07awIbr%2FG5vzGi%2FwmsRjvfLxkBFQS8Au5upox6xSxR66CvxOpdaB05aYPjAQ8Y4J0G9Z7IErrk&X-Amz-Signature=05c3509fc31d0dba2569d36633ed5d4afdcb2182ba858f5eb1363cd8d179eaeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKXZIH4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGo1tQPMbHlOzLahF%2Bn4JsQXdQPaMG9dbmIeeYJ4Il6AiAF8ddHtbpLY3Ssk5u3sTuO4qLou%2Fx7X6oIjjILWD3mJSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnBcFeYvB07cfcG5wKtwDjOL1TUqpQIcIOCuUd5jQpWtZlbS706qkMCcdfBCUSQ1aiip9PSpq%2BY1Bi43VTnjT45TmtOak7GJKiQFbDHp6EVo94xrEBkg2h%2BRLOlLb0qdAeGMD8UatY71pejjn%2F7DJ7bxA%2FWkF8BC8G3gKCjKuUAVPNqasFykbSKlZ3J02BZOH7m9wqWlBmvr4ge0dJ5rcObcKcjagOYLVSyUOUOJJ1Oj9Hb%2FFpllwXYfyjVyo4NOXBWF%2FJqO9L0%2B4tVrULzoaQmwYwpSNd3S19x4n78H3alC8oxpvxhkxp5TOdSIYszT8ypL7OkK%2FyyiKseEX7a3y8qoUeaDM4H5fDNMyUoKzat%2FxJJFhW1BJOpYok5uo3RuK1maJwmFJtjaC1R7KKPSFwQM4uHOYUIUtsBJjaRkMM%2FDZa%2B%2FykVCfybDtTI15zdlSQxY3mMqIdth2QczZRk9oQFWgAChMKnznlSfYDiQUqQILAt0V%2FsDh7l1AVS%2B%2FD5Li4XF8K%2Ft%2FLrex3WBea%2F%2F7nVBvzS0DqgEbjWqLljKDEKCW2NPzC7Fl1tINn8fMXEjU4cJekp7U0ahWD3dlx%2FUM3%2F8EHaGNtq18jmVJUSYGdfU4%2BJLP5E2qi%2F3i6Wc6Y%2BYj0%2FWcCaW178F53cwwiK7LwwY6pgGZJ5Od%2BjMvyncIVLrqw%2FGjVS0E%2Fi%2F08Wq%2F6goIMYme5%2BEl3jxlWaRsfrgCW6VXTI0rrykDXdP9G0IycvlwomgLqEwAHjcsfhdR5zwQb6dJUsrPcUwBbZRPeTUGYT6dzihFiZYqPtpKFUpcGytb1T07awIbr%2FG5vzGi%2FwmsRjvfLxkBFQS8Au5upox6xSxR66CvxOpdaB05aYPjAQ8Y4J0G9Z7IErrk&X-Amz-Signature=745151edeb202142a5908527df84cec0c0639b2cddf3818a4fc5ad8270a76adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKXZIH4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGo1tQPMbHlOzLahF%2Bn4JsQXdQPaMG9dbmIeeYJ4Il6AiAF8ddHtbpLY3Ssk5u3sTuO4qLou%2Fx7X6oIjjILWD3mJSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnBcFeYvB07cfcG5wKtwDjOL1TUqpQIcIOCuUd5jQpWtZlbS706qkMCcdfBCUSQ1aiip9PSpq%2BY1Bi43VTnjT45TmtOak7GJKiQFbDHp6EVo94xrEBkg2h%2BRLOlLb0qdAeGMD8UatY71pejjn%2F7DJ7bxA%2FWkF8BC8G3gKCjKuUAVPNqasFykbSKlZ3J02BZOH7m9wqWlBmvr4ge0dJ5rcObcKcjagOYLVSyUOUOJJ1Oj9Hb%2FFpllwXYfyjVyo4NOXBWF%2FJqO9L0%2B4tVrULzoaQmwYwpSNd3S19x4n78H3alC8oxpvxhkxp5TOdSIYszT8ypL7OkK%2FyyiKseEX7a3y8qoUeaDM4H5fDNMyUoKzat%2FxJJFhW1BJOpYok5uo3RuK1maJwmFJtjaC1R7KKPSFwQM4uHOYUIUtsBJjaRkMM%2FDZa%2B%2FykVCfybDtTI15zdlSQxY3mMqIdth2QczZRk9oQFWgAChMKnznlSfYDiQUqQILAt0V%2FsDh7l1AVS%2B%2FD5Li4XF8K%2Ft%2FLrex3WBea%2F%2F7nVBvzS0DqgEbjWqLljKDEKCW2NPzC7Fl1tINn8fMXEjU4cJekp7U0ahWD3dlx%2FUM3%2F8EHaGNtq18jmVJUSYGdfU4%2BJLP5E2qi%2F3i6Wc6Y%2BYj0%2FWcCaW178F53cwwiK7LwwY6pgGZJ5Od%2BjMvyncIVLrqw%2FGjVS0E%2Fi%2F08Wq%2F6goIMYme5%2BEl3jxlWaRsfrgCW6VXTI0rrykDXdP9G0IycvlwomgLqEwAHjcsfhdR5zwQb6dJUsrPcUwBbZRPeTUGYT6dzihFiZYqPtpKFUpcGytb1T07awIbr%2FG5vzGi%2FwmsRjvfLxkBFQS8Au5upox6xSxR66CvxOpdaB05aYPjAQ8Y4J0G9Z7IErrk&X-Amz-Signature=ea459b1705948ce390ac9fbc35071d1ba40f1ac81bf713dd67c6e7c2e9b1c695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKXZIH4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGo1tQPMbHlOzLahF%2Bn4JsQXdQPaMG9dbmIeeYJ4Il6AiAF8ddHtbpLY3Ssk5u3sTuO4qLou%2Fx7X6oIjjILWD3mJSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnBcFeYvB07cfcG5wKtwDjOL1TUqpQIcIOCuUd5jQpWtZlbS706qkMCcdfBCUSQ1aiip9PSpq%2BY1Bi43VTnjT45TmtOak7GJKiQFbDHp6EVo94xrEBkg2h%2BRLOlLb0qdAeGMD8UatY71pejjn%2F7DJ7bxA%2FWkF8BC8G3gKCjKuUAVPNqasFykbSKlZ3J02BZOH7m9wqWlBmvr4ge0dJ5rcObcKcjagOYLVSyUOUOJJ1Oj9Hb%2FFpllwXYfyjVyo4NOXBWF%2FJqO9L0%2B4tVrULzoaQmwYwpSNd3S19x4n78H3alC8oxpvxhkxp5TOdSIYszT8ypL7OkK%2FyyiKseEX7a3y8qoUeaDM4H5fDNMyUoKzat%2FxJJFhW1BJOpYok5uo3RuK1maJwmFJtjaC1R7KKPSFwQM4uHOYUIUtsBJjaRkMM%2FDZa%2B%2FykVCfybDtTI15zdlSQxY3mMqIdth2QczZRk9oQFWgAChMKnznlSfYDiQUqQILAt0V%2FsDh7l1AVS%2B%2FD5Li4XF8K%2Ft%2FLrex3WBea%2F%2F7nVBvzS0DqgEbjWqLljKDEKCW2NPzC7Fl1tINn8fMXEjU4cJekp7U0ahWD3dlx%2FUM3%2F8EHaGNtq18jmVJUSYGdfU4%2BJLP5E2qi%2F3i6Wc6Y%2BYj0%2FWcCaW178F53cwwiK7LwwY6pgGZJ5Od%2BjMvyncIVLrqw%2FGjVS0E%2Fi%2F08Wq%2F6goIMYme5%2BEl3jxlWaRsfrgCW6VXTI0rrykDXdP9G0IycvlwomgLqEwAHjcsfhdR5zwQb6dJUsrPcUwBbZRPeTUGYT6dzihFiZYqPtpKFUpcGytb1T07awIbr%2FG5vzGi%2FwmsRjvfLxkBFQS8Au5upox6xSxR66CvxOpdaB05aYPjAQ8Y4J0G9Z7IErrk&X-Amz-Signature=60180fdbdd7bdc3152bdec0a7600c8496ff560263703306919ec9d433fb1494e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKXZIH4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGo1tQPMbHlOzLahF%2Bn4JsQXdQPaMG9dbmIeeYJ4Il6AiAF8ddHtbpLY3Ssk5u3sTuO4qLou%2Fx7X6oIjjILWD3mJSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnBcFeYvB07cfcG5wKtwDjOL1TUqpQIcIOCuUd5jQpWtZlbS706qkMCcdfBCUSQ1aiip9PSpq%2BY1Bi43VTnjT45TmtOak7GJKiQFbDHp6EVo94xrEBkg2h%2BRLOlLb0qdAeGMD8UatY71pejjn%2F7DJ7bxA%2FWkF8BC8G3gKCjKuUAVPNqasFykbSKlZ3J02BZOH7m9wqWlBmvr4ge0dJ5rcObcKcjagOYLVSyUOUOJJ1Oj9Hb%2FFpllwXYfyjVyo4NOXBWF%2FJqO9L0%2B4tVrULzoaQmwYwpSNd3S19x4n78H3alC8oxpvxhkxp5TOdSIYszT8ypL7OkK%2FyyiKseEX7a3y8qoUeaDM4H5fDNMyUoKzat%2FxJJFhW1BJOpYok5uo3RuK1maJwmFJtjaC1R7KKPSFwQM4uHOYUIUtsBJjaRkMM%2FDZa%2B%2FykVCfybDtTI15zdlSQxY3mMqIdth2QczZRk9oQFWgAChMKnznlSfYDiQUqQILAt0V%2FsDh7l1AVS%2B%2FD5Li4XF8K%2Ft%2FLrex3WBea%2F%2F7nVBvzS0DqgEbjWqLljKDEKCW2NPzC7Fl1tINn8fMXEjU4cJekp7U0ahWD3dlx%2FUM3%2F8EHaGNtq18jmVJUSYGdfU4%2BJLP5E2qi%2F3i6Wc6Y%2BYj0%2FWcCaW178F53cwwiK7LwwY6pgGZJ5Od%2BjMvyncIVLrqw%2FGjVS0E%2Fi%2F08Wq%2F6goIMYme5%2BEl3jxlWaRsfrgCW6VXTI0rrykDXdP9G0IycvlwomgLqEwAHjcsfhdR5zwQb6dJUsrPcUwBbZRPeTUGYT6dzihFiZYqPtpKFUpcGytb1T07awIbr%2FG5vzGi%2FwmsRjvfLxkBFQS8Au5upox6xSxR66CvxOpdaB05aYPjAQ8Y4J0G9Z7IErrk&X-Amz-Signature=e8e8b7928cc41ced3b2a1167f99db0eb2718229601846626b8622084ec52741a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKXZIH4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGo1tQPMbHlOzLahF%2Bn4JsQXdQPaMG9dbmIeeYJ4Il6AiAF8ddHtbpLY3Ssk5u3sTuO4qLou%2Fx7X6oIjjILWD3mJSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnBcFeYvB07cfcG5wKtwDjOL1TUqpQIcIOCuUd5jQpWtZlbS706qkMCcdfBCUSQ1aiip9PSpq%2BY1Bi43VTnjT45TmtOak7GJKiQFbDHp6EVo94xrEBkg2h%2BRLOlLb0qdAeGMD8UatY71pejjn%2F7DJ7bxA%2FWkF8BC8G3gKCjKuUAVPNqasFykbSKlZ3J02BZOH7m9wqWlBmvr4ge0dJ5rcObcKcjagOYLVSyUOUOJJ1Oj9Hb%2FFpllwXYfyjVyo4NOXBWF%2FJqO9L0%2B4tVrULzoaQmwYwpSNd3S19x4n78H3alC8oxpvxhkxp5TOdSIYszT8ypL7OkK%2FyyiKseEX7a3y8qoUeaDM4H5fDNMyUoKzat%2FxJJFhW1BJOpYok5uo3RuK1maJwmFJtjaC1R7KKPSFwQM4uHOYUIUtsBJjaRkMM%2FDZa%2B%2FykVCfybDtTI15zdlSQxY3mMqIdth2QczZRk9oQFWgAChMKnznlSfYDiQUqQILAt0V%2FsDh7l1AVS%2B%2FD5Li4XF8K%2Ft%2FLrex3WBea%2F%2F7nVBvzS0DqgEbjWqLljKDEKCW2NPzC7Fl1tINn8fMXEjU4cJekp7U0ahWD3dlx%2FUM3%2F8EHaGNtq18jmVJUSYGdfU4%2BJLP5E2qi%2F3i6Wc6Y%2BYj0%2FWcCaW178F53cwwiK7LwwY6pgGZJ5Od%2BjMvyncIVLrqw%2FGjVS0E%2Fi%2F08Wq%2F6goIMYme5%2BEl3jxlWaRsfrgCW6VXTI0rrykDXdP9G0IycvlwomgLqEwAHjcsfhdR5zwQb6dJUsrPcUwBbZRPeTUGYT6dzihFiZYqPtpKFUpcGytb1T07awIbr%2FG5vzGi%2FwmsRjvfLxkBFQS8Au5upox6xSxR66CvxOpdaB05aYPjAQ8Y4J0G9Z7IErrk&X-Amz-Signature=b58b19ed72ca993257e7c60f3c825885795190ef85caa419924dc03efc8b294a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKXZIH4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGo1tQPMbHlOzLahF%2Bn4JsQXdQPaMG9dbmIeeYJ4Il6AiAF8ddHtbpLY3Ssk5u3sTuO4qLou%2Fx7X6oIjjILWD3mJSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnBcFeYvB07cfcG5wKtwDjOL1TUqpQIcIOCuUd5jQpWtZlbS706qkMCcdfBCUSQ1aiip9PSpq%2BY1Bi43VTnjT45TmtOak7GJKiQFbDHp6EVo94xrEBkg2h%2BRLOlLb0qdAeGMD8UatY71pejjn%2F7DJ7bxA%2FWkF8BC8G3gKCjKuUAVPNqasFykbSKlZ3J02BZOH7m9wqWlBmvr4ge0dJ5rcObcKcjagOYLVSyUOUOJJ1Oj9Hb%2FFpllwXYfyjVyo4NOXBWF%2FJqO9L0%2B4tVrULzoaQmwYwpSNd3S19x4n78H3alC8oxpvxhkxp5TOdSIYszT8ypL7OkK%2FyyiKseEX7a3y8qoUeaDM4H5fDNMyUoKzat%2FxJJFhW1BJOpYok5uo3RuK1maJwmFJtjaC1R7KKPSFwQM4uHOYUIUtsBJjaRkMM%2FDZa%2B%2FykVCfybDtTI15zdlSQxY3mMqIdth2QczZRk9oQFWgAChMKnznlSfYDiQUqQILAt0V%2FsDh7l1AVS%2B%2FD5Li4XF8K%2Ft%2FLrex3WBea%2F%2F7nVBvzS0DqgEbjWqLljKDEKCW2NPzC7Fl1tINn8fMXEjU4cJekp7U0ahWD3dlx%2FUM3%2F8EHaGNtq18jmVJUSYGdfU4%2BJLP5E2qi%2F3i6Wc6Y%2BYj0%2FWcCaW178F53cwwiK7LwwY6pgGZJ5Od%2BjMvyncIVLrqw%2FGjVS0E%2Fi%2F08Wq%2F6goIMYme5%2BEl3jxlWaRsfrgCW6VXTI0rrykDXdP9G0IycvlwomgLqEwAHjcsfhdR5zwQb6dJUsrPcUwBbZRPeTUGYT6dzihFiZYqPtpKFUpcGytb1T07awIbr%2FG5vzGi%2FwmsRjvfLxkBFQS8Au5upox6xSxR66CvxOpdaB05aYPjAQ8Y4J0G9Z7IErrk&X-Amz-Signature=d887f5fa897f6159faaa69fa80a69f3f62484de5c9b2d0838e6c3faf377fddf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
