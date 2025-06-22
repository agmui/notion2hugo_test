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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2IHYPZM%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiv7RHKTuZ7Vj6LBKtwHyO74Wsqpv%2BVVi0MZ%2Fc6233KAiEAltgq%2B%2FDndjiIkZTOBwLh%2F7blnEiFtbGpNYwzl4Y99KsqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5TuQ%2F9LAcTVejeAyrcAy3dUpzYVHxudyRoPKBd9KDpLYausB4xux67P4k09pb28fO%2FeziiRJjriMPMPpWh%2FptZK3XDuweP1zXqpBzSA54aq1%2FFpb8zJbHG2ebGppCM8LiC1XqPLmdFPo4p51hpnqCvw7jalljwH6HVsQKKj7c8svDnxuUKJMZ5YCXmIEmuqpclVGbXrB4DUhbQohzNMY7v6JqyfXsO1U%2BwMMxUYL65BY6vceVTw4it85AR75ZgDzBwjy2RmukNWlaMM1LzIlYBsPop5YIGVCLzKUhD4WVvm1aumuA6PBCHc2eVeqeLF%2BjMyc1Wp1GUm78gGs0xsjPA%2FReI92QL%2FSlYPnqiMzVE8Vt9xgAej%2FgDRwX4lJ0K%2BmscJfEGZhxdoiIPmPr2rpVZnQ6%2B5LtTXjkWEgcsdpBFHHG3kbm5GJ1GJ%2BfwEf6pmjSNGNSNPcwwOi0vhTA7bzxfwLhdHi%2BIXCqJWUsawSc484skgFBx57wLEcvNe3CWJgqT8o4SkHkALzTS90bdgjkTFJK0CwEL%2BsZveVKqGEYILHgxUazJ1t7cesJrtP3SEpXqAlXo%2Bm7pfzwRM4g0dmJm2YHVN6TSvlUgxTiJpQT2q1JEsSTOdPpo%2BVF8jOoXHVKPI2ayDWJSKZ%2B9MJLU3cIGOqUBwFbUFFAFHVzJuBn21xy9uHmT6LFS%2BP%2BQkjEppf9UxQntfqstCA9R1R%2FyahOytBmhepHS4HCf%2Bvg4318agtxsd4aWE8D%2FUVEwUTwT5qCsy9%2FP1TT8E0bjE7TUcK0Y7%2FfbaZ%2FV0Vs3wBzOA5Q91JUlwzYh72zI4wf9IgZ6Xs3guuJOkijK%2FxXAmfMSOVd1r5pSkzszbgUNszNrAY3iv%2FjEHzy8BimN&X-Amz-Signature=887c6c4c6dde440cbd7348272d8c47e051bb7173b81b1ebd1521e39a997d21c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2IHYPZM%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiv7RHKTuZ7Vj6LBKtwHyO74Wsqpv%2BVVi0MZ%2Fc6233KAiEAltgq%2B%2FDndjiIkZTOBwLh%2F7blnEiFtbGpNYwzl4Y99KsqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5TuQ%2F9LAcTVejeAyrcAy3dUpzYVHxudyRoPKBd9KDpLYausB4xux67P4k09pb28fO%2FeziiRJjriMPMPpWh%2FptZK3XDuweP1zXqpBzSA54aq1%2FFpb8zJbHG2ebGppCM8LiC1XqPLmdFPo4p51hpnqCvw7jalljwH6HVsQKKj7c8svDnxuUKJMZ5YCXmIEmuqpclVGbXrB4DUhbQohzNMY7v6JqyfXsO1U%2BwMMxUYL65BY6vceVTw4it85AR75ZgDzBwjy2RmukNWlaMM1LzIlYBsPop5YIGVCLzKUhD4WVvm1aumuA6PBCHc2eVeqeLF%2BjMyc1Wp1GUm78gGs0xsjPA%2FReI92QL%2FSlYPnqiMzVE8Vt9xgAej%2FgDRwX4lJ0K%2BmscJfEGZhxdoiIPmPr2rpVZnQ6%2B5LtTXjkWEgcsdpBFHHG3kbm5GJ1GJ%2BfwEf6pmjSNGNSNPcwwOi0vhTA7bzxfwLhdHi%2BIXCqJWUsawSc484skgFBx57wLEcvNe3CWJgqT8o4SkHkALzTS90bdgjkTFJK0CwEL%2BsZveVKqGEYILHgxUazJ1t7cesJrtP3SEpXqAlXo%2Bm7pfzwRM4g0dmJm2YHVN6TSvlUgxTiJpQT2q1JEsSTOdPpo%2BVF8jOoXHVKPI2ayDWJSKZ%2B9MJLU3cIGOqUBwFbUFFAFHVzJuBn21xy9uHmT6LFS%2BP%2BQkjEppf9UxQntfqstCA9R1R%2FyahOytBmhepHS4HCf%2Bvg4318agtxsd4aWE8D%2FUVEwUTwT5qCsy9%2FP1TT8E0bjE7TUcK0Y7%2FfbaZ%2FV0Vs3wBzOA5Q91JUlwzYh72zI4wf9IgZ6Xs3guuJOkijK%2FxXAmfMSOVd1r5pSkzszbgUNszNrAY3iv%2FjEHzy8BimN&X-Amz-Signature=bc73e916ecbce5f9b266e55cdc092f3c2990ecf7af74154bb7c9261eed16f5a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2IHYPZM%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiv7RHKTuZ7Vj6LBKtwHyO74Wsqpv%2BVVi0MZ%2Fc6233KAiEAltgq%2B%2FDndjiIkZTOBwLh%2F7blnEiFtbGpNYwzl4Y99KsqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5TuQ%2F9LAcTVejeAyrcAy3dUpzYVHxudyRoPKBd9KDpLYausB4xux67P4k09pb28fO%2FeziiRJjriMPMPpWh%2FptZK3XDuweP1zXqpBzSA54aq1%2FFpb8zJbHG2ebGppCM8LiC1XqPLmdFPo4p51hpnqCvw7jalljwH6HVsQKKj7c8svDnxuUKJMZ5YCXmIEmuqpclVGbXrB4DUhbQohzNMY7v6JqyfXsO1U%2BwMMxUYL65BY6vceVTw4it85AR75ZgDzBwjy2RmukNWlaMM1LzIlYBsPop5YIGVCLzKUhD4WVvm1aumuA6PBCHc2eVeqeLF%2BjMyc1Wp1GUm78gGs0xsjPA%2FReI92QL%2FSlYPnqiMzVE8Vt9xgAej%2FgDRwX4lJ0K%2BmscJfEGZhxdoiIPmPr2rpVZnQ6%2B5LtTXjkWEgcsdpBFHHG3kbm5GJ1GJ%2BfwEf6pmjSNGNSNPcwwOi0vhTA7bzxfwLhdHi%2BIXCqJWUsawSc484skgFBx57wLEcvNe3CWJgqT8o4SkHkALzTS90bdgjkTFJK0CwEL%2BsZveVKqGEYILHgxUazJ1t7cesJrtP3SEpXqAlXo%2Bm7pfzwRM4g0dmJm2YHVN6TSvlUgxTiJpQT2q1JEsSTOdPpo%2BVF8jOoXHVKPI2ayDWJSKZ%2B9MJLU3cIGOqUBwFbUFFAFHVzJuBn21xy9uHmT6LFS%2BP%2BQkjEppf9UxQntfqstCA9R1R%2FyahOytBmhepHS4HCf%2Bvg4318agtxsd4aWE8D%2FUVEwUTwT5qCsy9%2FP1TT8E0bjE7TUcK0Y7%2FfbaZ%2FV0Vs3wBzOA5Q91JUlwzYh72zI4wf9IgZ6Xs3guuJOkijK%2FxXAmfMSOVd1r5pSkzszbgUNszNrAY3iv%2FjEHzy8BimN&X-Amz-Signature=1d986a06d6c7052d1998c51ec763a232bd5250eb79287fac1258e88014af763c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2IHYPZM%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiv7RHKTuZ7Vj6LBKtwHyO74Wsqpv%2BVVi0MZ%2Fc6233KAiEAltgq%2B%2FDndjiIkZTOBwLh%2F7blnEiFtbGpNYwzl4Y99KsqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5TuQ%2F9LAcTVejeAyrcAy3dUpzYVHxudyRoPKBd9KDpLYausB4xux67P4k09pb28fO%2FeziiRJjriMPMPpWh%2FptZK3XDuweP1zXqpBzSA54aq1%2FFpb8zJbHG2ebGppCM8LiC1XqPLmdFPo4p51hpnqCvw7jalljwH6HVsQKKj7c8svDnxuUKJMZ5YCXmIEmuqpclVGbXrB4DUhbQohzNMY7v6JqyfXsO1U%2BwMMxUYL65BY6vceVTw4it85AR75ZgDzBwjy2RmukNWlaMM1LzIlYBsPop5YIGVCLzKUhD4WVvm1aumuA6PBCHc2eVeqeLF%2BjMyc1Wp1GUm78gGs0xsjPA%2FReI92QL%2FSlYPnqiMzVE8Vt9xgAej%2FgDRwX4lJ0K%2BmscJfEGZhxdoiIPmPr2rpVZnQ6%2B5LtTXjkWEgcsdpBFHHG3kbm5GJ1GJ%2BfwEf6pmjSNGNSNPcwwOi0vhTA7bzxfwLhdHi%2BIXCqJWUsawSc484skgFBx57wLEcvNe3CWJgqT8o4SkHkALzTS90bdgjkTFJK0CwEL%2BsZveVKqGEYILHgxUazJ1t7cesJrtP3SEpXqAlXo%2Bm7pfzwRM4g0dmJm2YHVN6TSvlUgxTiJpQT2q1JEsSTOdPpo%2BVF8jOoXHVKPI2ayDWJSKZ%2B9MJLU3cIGOqUBwFbUFFAFHVzJuBn21xy9uHmT6LFS%2BP%2BQkjEppf9UxQntfqstCA9R1R%2FyahOytBmhepHS4HCf%2Bvg4318agtxsd4aWE8D%2FUVEwUTwT5qCsy9%2FP1TT8E0bjE7TUcK0Y7%2FfbaZ%2FV0Vs3wBzOA5Q91JUlwzYh72zI4wf9IgZ6Xs3guuJOkijK%2FxXAmfMSOVd1r5pSkzszbgUNszNrAY3iv%2FjEHzy8BimN&X-Amz-Signature=77d4bf44f9b1d2897821b929c67c5a14cc2aeb31367b85e4cbb14b3019ddb4c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2IHYPZM%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiv7RHKTuZ7Vj6LBKtwHyO74Wsqpv%2BVVi0MZ%2Fc6233KAiEAltgq%2B%2FDndjiIkZTOBwLh%2F7blnEiFtbGpNYwzl4Y99KsqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5TuQ%2F9LAcTVejeAyrcAy3dUpzYVHxudyRoPKBd9KDpLYausB4xux67P4k09pb28fO%2FeziiRJjriMPMPpWh%2FptZK3XDuweP1zXqpBzSA54aq1%2FFpb8zJbHG2ebGppCM8LiC1XqPLmdFPo4p51hpnqCvw7jalljwH6HVsQKKj7c8svDnxuUKJMZ5YCXmIEmuqpclVGbXrB4DUhbQohzNMY7v6JqyfXsO1U%2BwMMxUYL65BY6vceVTw4it85AR75ZgDzBwjy2RmukNWlaMM1LzIlYBsPop5YIGVCLzKUhD4WVvm1aumuA6PBCHc2eVeqeLF%2BjMyc1Wp1GUm78gGs0xsjPA%2FReI92QL%2FSlYPnqiMzVE8Vt9xgAej%2FgDRwX4lJ0K%2BmscJfEGZhxdoiIPmPr2rpVZnQ6%2B5LtTXjkWEgcsdpBFHHG3kbm5GJ1GJ%2BfwEf6pmjSNGNSNPcwwOi0vhTA7bzxfwLhdHi%2BIXCqJWUsawSc484skgFBx57wLEcvNe3CWJgqT8o4SkHkALzTS90bdgjkTFJK0CwEL%2BsZveVKqGEYILHgxUazJ1t7cesJrtP3SEpXqAlXo%2Bm7pfzwRM4g0dmJm2YHVN6TSvlUgxTiJpQT2q1JEsSTOdPpo%2BVF8jOoXHVKPI2ayDWJSKZ%2B9MJLU3cIGOqUBwFbUFFAFHVzJuBn21xy9uHmT6LFS%2BP%2BQkjEppf9UxQntfqstCA9R1R%2FyahOytBmhepHS4HCf%2Bvg4318agtxsd4aWE8D%2FUVEwUTwT5qCsy9%2FP1TT8E0bjE7TUcK0Y7%2FfbaZ%2FV0Vs3wBzOA5Q91JUlwzYh72zI4wf9IgZ6Xs3guuJOkijK%2FxXAmfMSOVd1r5pSkzszbgUNszNrAY3iv%2FjEHzy8BimN&X-Amz-Signature=c6d813e9dbf298db05432f44be5a11a5a9ddc85f58465fda6d8d2323b8b2e4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2IHYPZM%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiv7RHKTuZ7Vj6LBKtwHyO74Wsqpv%2BVVi0MZ%2Fc6233KAiEAltgq%2B%2FDndjiIkZTOBwLh%2F7blnEiFtbGpNYwzl4Y99KsqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5TuQ%2F9LAcTVejeAyrcAy3dUpzYVHxudyRoPKBd9KDpLYausB4xux67P4k09pb28fO%2FeziiRJjriMPMPpWh%2FptZK3XDuweP1zXqpBzSA54aq1%2FFpb8zJbHG2ebGppCM8LiC1XqPLmdFPo4p51hpnqCvw7jalljwH6HVsQKKj7c8svDnxuUKJMZ5YCXmIEmuqpclVGbXrB4DUhbQohzNMY7v6JqyfXsO1U%2BwMMxUYL65BY6vceVTw4it85AR75ZgDzBwjy2RmukNWlaMM1LzIlYBsPop5YIGVCLzKUhD4WVvm1aumuA6PBCHc2eVeqeLF%2BjMyc1Wp1GUm78gGs0xsjPA%2FReI92QL%2FSlYPnqiMzVE8Vt9xgAej%2FgDRwX4lJ0K%2BmscJfEGZhxdoiIPmPr2rpVZnQ6%2B5LtTXjkWEgcsdpBFHHG3kbm5GJ1GJ%2BfwEf6pmjSNGNSNPcwwOi0vhTA7bzxfwLhdHi%2BIXCqJWUsawSc484skgFBx57wLEcvNe3CWJgqT8o4SkHkALzTS90bdgjkTFJK0CwEL%2BsZveVKqGEYILHgxUazJ1t7cesJrtP3SEpXqAlXo%2Bm7pfzwRM4g0dmJm2YHVN6TSvlUgxTiJpQT2q1JEsSTOdPpo%2BVF8jOoXHVKPI2ayDWJSKZ%2B9MJLU3cIGOqUBwFbUFFAFHVzJuBn21xy9uHmT6LFS%2BP%2BQkjEppf9UxQntfqstCA9R1R%2FyahOytBmhepHS4HCf%2Bvg4318agtxsd4aWE8D%2FUVEwUTwT5qCsy9%2FP1TT8E0bjE7TUcK0Y7%2FfbaZ%2FV0Vs3wBzOA5Q91JUlwzYh72zI4wf9IgZ6Xs3guuJOkijK%2FxXAmfMSOVd1r5pSkzszbgUNszNrAY3iv%2FjEHzy8BimN&X-Amz-Signature=787f1273fc1b0ac6b0efbfe4dcb0be9d4f5119957ff6b7b7058d942c6e553d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2IHYPZM%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiv7RHKTuZ7Vj6LBKtwHyO74Wsqpv%2BVVi0MZ%2Fc6233KAiEAltgq%2B%2FDndjiIkZTOBwLh%2F7blnEiFtbGpNYwzl4Y99KsqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5TuQ%2F9LAcTVejeAyrcAy3dUpzYVHxudyRoPKBd9KDpLYausB4xux67P4k09pb28fO%2FeziiRJjriMPMPpWh%2FptZK3XDuweP1zXqpBzSA54aq1%2FFpb8zJbHG2ebGppCM8LiC1XqPLmdFPo4p51hpnqCvw7jalljwH6HVsQKKj7c8svDnxuUKJMZ5YCXmIEmuqpclVGbXrB4DUhbQohzNMY7v6JqyfXsO1U%2BwMMxUYL65BY6vceVTw4it85AR75ZgDzBwjy2RmukNWlaMM1LzIlYBsPop5YIGVCLzKUhD4WVvm1aumuA6PBCHc2eVeqeLF%2BjMyc1Wp1GUm78gGs0xsjPA%2FReI92QL%2FSlYPnqiMzVE8Vt9xgAej%2FgDRwX4lJ0K%2BmscJfEGZhxdoiIPmPr2rpVZnQ6%2B5LtTXjkWEgcsdpBFHHG3kbm5GJ1GJ%2BfwEf6pmjSNGNSNPcwwOi0vhTA7bzxfwLhdHi%2BIXCqJWUsawSc484skgFBx57wLEcvNe3CWJgqT8o4SkHkALzTS90bdgjkTFJK0CwEL%2BsZveVKqGEYILHgxUazJ1t7cesJrtP3SEpXqAlXo%2Bm7pfzwRM4g0dmJm2YHVN6TSvlUgxTiJpQT2q1JEsSTOdPpo%2BVF8jOoXHVKPI2ayDWJSKZ%2B9MJLU3cIGOqUBwFbUFFAFHVzJuBn21xy9uHmT6LFS%2BP%2BQkjEppf9UxQntfqstCA9R1R%2FyahOytBmhepHS4HCf%2Bvg4318agtxsd4aWE8D%2FUVEwUTwT5qCsy9%2FP1TT8E0bjE7TUcK0Y7%2FfbaZ%2FV0Vs3wBzOA5Q91JUlwzYh72zI4wf9IgZ6Xs3guuJOkijK%2FxXAmfMSOVd1r5pSkzszbgUNszNrAY3iv%2FjEHzy8BimN&X-Amz-Signature=f3b647543398fa8385aba333362e4e7356c874b10ef99fe163522b14de4332d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2IHYPZM%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiv7RHKTuZ7Vj6LBKtwHyO74Wsqpv%2BVVi0MZ%2Fc6233KAiEAltgq%2B%2FDndjiIkZTOBwLh%2F7blnEiFtbGpNYwzl4Y99KsqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5TuQ%2F9LAcTVejeAyrcAy3dUpzYVHxudyRoPKBd9KDpLYausB4xux67P4k09pb28fO%2FeziiRJjriMPMPpWh%2FptZK3XDuweP1zXqpBzSA54aq1%2FFpb8zJbHG2ebGppCM8LiC1XqPLmdFPo4p51hpnqCvw7jalljwH6HVsQKKj7c8svDnxuUKJMZ5YCXmIEmuqpclVGbXrB4DUhbQohzNMY7v6JqyfXsO1U%2BwMMxUYL65BY6vceVTw4it85AR75ZgDzBwjy2RmukNWlaMM1LzIlYBsPop5YIGVCLzKUhD4WVvm1aumuA6PBCHc2eVeqeLF%2BjMyc1Wp1GUm78gGs0xsjPA%2FReI92QL%2FSlYPnqiMzVE8Vt9xgAej%2FgDRwX4lJ0K%2BmscJfEGZhxdoiIPmPr2rpVZnQ6%2B5LtTXjkWEgcsdpBFHHG3kbm5GJ1GJ%2BfwEf6pmjSNGNSNPcwwOi0vhTA7bzxfwLhdHi%2BIXCqJWUsawSc484skgFBx57wLEcvNe3CWJgqT8o4SkHkALzTS90bdgjkTFJK0CwEL%2BsZveVKqGEYILHgxUazJ1t7cesJrtP3SEpXqAlXo%2Bm7pfzwRM4g0dmJm2YHVN6TSvlUgxTiJpQT2q1JEsSTOdPpo%2BVF8jOoXHVKPI2ayDWJSKZ%2B9MJLU3cIGOqUBwFbUFFAFHVzJuBn21xy9uHmT6LFS%2BP%2BQkjEppf9UxQntfqstCA9R1R%2FyahOytBmhepHS4HCf%2Bvg4318agtxsd4aWE8D%2FUVEwUTwT5qCsy9%2FP1TT8E0bjE7TUcK0Y7%2FfbaZ%2FV0Vs3wBzOA5Q91JUlwzYh72zI4wf9IgZ6Xs3guuJOkijK%2FxXAmfMSOVd1r5pSkzszbgUNszNrAY3iv%2FjEHzy8BimN&X-Amz-Signature=02678fdccf1df3a791995ce58be2efa83dc52787830ca61d64937d9dbccc24bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
