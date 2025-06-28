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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCGY34FN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcAFkg2vM8DGNOYBwEwwKZ2qqjw03G9FV6JsjIFIiweAiEA9p3V5bRfk3%2B67nZx6BO7Xopxy974l9L8XuKBuBYYb%2FcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcjAORxKrWgMp%2BYVSrcA1tNSq1NqG1F41lCIs3rX%2Bfigl%2BbwvuJ1mmCk6lr7R5aTYN09yNBGBn1MHFFnIQzErVJvzjNusEPrK4JvEZnRrMTOEjmD%2FXs8aNAXUtwhDlmpOReDG4qe8r%2BGMtTgD72u3aPl4XGQe1wUN5EyjDbHy03TlAulNrMoRizVrqz%2F74GwKDbfjX%2BU0W5vZHQTrO5EYlUzjnwmlygGjNG1UT2T8J%2BiivHcXDFhgUjNfEJU6%2FO5rb%2B5Jc5vlMGt0ZLatsH9x4mhpeoWaC1PAzQD0PHSLDQ5ZISSdpyCLVnhDJPmvw4SLBVOtscjFo59cqda%2B1bWfK%2FWEQo4WnzTo6ldZHqrKAie27S2%2FqWs4sBCRXG6bACxGKnXCm%2Bdr%2FUiwVXnIqS10814G6v4eTGrW15QIxWFVl2WcqIJik5L6tb7yM4Qs7UUeOzTgvLx6KLt7zHzXkSixa0zwaO6yPfXsefJuv5eC2m6x6wP9BKeHzkPqg1bZAwHHes9xbqModfixESn4ZRCzfLuApzWnTIGwAaTZrCQ5CtNROiH14JyKxZ2oE2CUtbDnypZOef7Ez%2B5IHWlQ42DAd%2F7%2BY6FUEqzgYEP8%2BaDKsV6URqhDqDBYpSdY6DyihdaccJiyJiMpPzMN7bMPiQ%2F8IGOqUBelFu50twmoCkH%2FaRkp12HbYCLKL7k1snQ0GDM2rTFj7ejPhibz7NiGN%2FdnVwKfL9%2FVSTxI30i1UGV2%2Bk8H7y1l11pVoYHkgnY%2BR1hDqxN0%2FX7EaeRhFb0ZO9rhbB5ThekAfm91qPMxIqq3BDmO6YN89jtRMS%2F0ZTzt%2FRDPJ%2FaMsrmaJ77SOIBCvOC33Mf%2BBZtXSPH1qJbzxnEwaMYdZpEQ3lquxF&X-Amz-Signature=75c89ea177d7b1a19a70151493e172c3c467a59b9defc7dcaf2ec9599cf4f31a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCGY34FN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcAFkg2vM8DGNOYBwEwwKZ2qqjw03G9FV6JsjIFIiweAiEA9p3V5bRfk3%2B67nZx6BO7Xopxy974l9L8XuKBuBYYb%2FcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcjAORxKrWgMp%2BYVSrcA1tNSq1NqG1F41lCIs3rX%2Bfigl%2BbwvuJ1mmCk6lr7R5aTYN09yNBGBn1MHFFnIQzErVJvzjNusEPrK4JvEZnRrMTOEjmD%2FXs8aNAXUtwhDlmpOReDG4qe8r%2BGMtTgD72u3aPl4XGQe1wUN5EyjDbHy03TlAulNrMoRizVrqz%2F74GwKDbfjX%2BU0W5vZHQTrO5EYlUzjnwmlygGjNG1UT2T8J%2BiivHcXDFhgUjNfEJU6%2FO5rb%2B5Jc5vlMGt0ZLatsH9x4mhpeoWaC1PAzQD0PHSLDQ5ZISSdpyCLVnhDJPmvw4SLBVOtscjFo59cqda%2B1bWfK%2FWEQo4WnzTo6ldZHqrKAie27S2%2FqWs4sBCRXG6bACxGKnXCm%2Bdr%2FUiwVXnIqS10814G6v4eTGrW15QIxWFVl2WcqIJik5L6tb7yM4Qs7UUeOzTgvLx6KLt7zHzXkSixa0zwaO6yPfXsefJuv5eC2m6x6wP9BKeHzkPqg1bZAwHHes9xbqModfixESn4ZRCzfLuApzWnTIGwAaTZrCQ5CtNROiH14JyKxZ2oE2CUtbDnypZOef7Ez%2B5IHWlQ42DAd%2F7%2BY6FUEqzgYEP8%2BaDKsV6URqhDqDBYpSdY6DyihdaccJiyJiMpPzMN7bMPiQ%2F8IGOqUBelFu50twmoCkH%2FaRkp12HbYCLKL7k1snQ0GDM2rTFj7ejPhibz7NiGN%2FdnVwKfL9%2FVSTxI30i1UGV2%2Bk8H7y1l11pVoYHkgnY%2BR1hDqxN0%2FX7EaeRhFb0ZO9rhbB5ThekAfm91qPMxIqq3BDmO6YN89jtRMS%2F0ZTzt%2FRDPJ%2FaMsrmaJ77SOIBCvOC33Mf%2BBZtXSPH1qJbzxnEwaMYdZpEQ3lquxF&X-Amz-Signature=1980ed0acf982c1e923210898d8efb523cb1d8eca2e517c795ef25205e143102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCGY34FN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcAFkg2vM8DGNOYBwEwwKZ2qqjw03G9FV6JsjIFIiweAiEA9p3V5bRfk3%2B67nZx6BO7Xopxy974l9L8XuKBuBYYb%2FcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcjAORxKrWgMp%2BYVSrcA1tNSq1NqG1F41lCIs3rX%2Bfigl%2BbwvuJ1mmCk6lr7R5aTYN09yNBGBn1MHFFnIQzErVJvzjNusEPrK4JvEZnRrMTOEjmD%2FXs8aNAXUtwhDlmpOReDG4qe8r%2BGMtTgD72u3aPl4XGQe1wUN5EyjDbHy03TlAulNrMoRizVrqz%2F74GwKDbfjX%2BU0W5vZHQTrO5EYlUzjnwmlygGjNG1UT2T8J%2BiivHcXDFhgUjNfEJU6%2FO5rb%2B5Jc5vlMGt0ZLatsH9x4mhpeoWaC1PAzQD0PHSLDQ5ZISSdpyCLVnhDJPmvw4SLBVOtscjFo59cqda%2B1bWfK%2FWEQo4WnzTo6ldZHqrKAie27S2%2FqWs4sBCRXG6bACxGKnXCm%2Bdr%2FUiwVXnIqS10814G6v4eTGrW15QIxWFVl2WcqIJik5L6tb7yM4Qs7UUeOzTgvLx6KLt7zHzXkSixa0zwaO6yPfXsefJuv5eC2m6x6wP9BKeHzkPqg1bZAwHHes9xbqModfixESn4ZRCzfLuApzWnTIGwAaTZrCQ5CtNROiH14JyKxZ2oE2CUtbDnypZOef7Ez%2B5IHWlQ42DAd%2F7%2BY6FUEqzgYEP8%2BaDKsV6URqhDqDBYpSdY6DyihdaccJiyJiMpPzMN7bMPiQ%2F8IGOqUBelFu50twmoCkH%2FaRkp12HbYCLKL7k1snQ0GDM2rTFj7ejPhibz7NiGN%2FdnVwKfL9%2FVSTxI30i1UGV2%2Bk8H7y1l11pVoYHkgnY%2BR1hDqxN0%2FX7EaeRhFb0ZO9rhbB5ThekAfm91qPMxIqq3BDmO6YN89jtRMS%2F0ZTzt%2FRDPJ%2FaMsrmaJ77SOIBCvOC33Mf%2BBZtXSPH1qJbzxnEwaMYdZpEQ3lquxF&X-Amz-Signature=7615b6dcb54046c2e4405d87276e68bc579e43c41efe2c7a51d8deb24c7896d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCGY34FN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcAFkg2vM8DGNOYBwEwwKZ2qqjw03G9FV6JsjIFIiweAiEA9p3V5bRfk3%2B67nZx6BO7Xopxy974l9L8XuKBuBYYb%2FcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcjAORxKrWgMp%2BYVSrcA1tNSq1NqG1F41lCIs3rX%2Bfigl%2BbwvuJ1mmCk6lr7R5aTYN09yNBGBn1MHFFnIQzErVJvzjNusEPrK4JvEZnRrMTOEjmD%2FXs8aNAXUtwhDlmpOReDG4qe8r%2BGMtTgD72u3aPl4XGQe1wUN5EyjDbHy03TlAulNrMoRizVrqz%2F74GwKDbfjX%2BU0W5vZHQTrO5EYlUzjnwmlygGjNG1UT2T8J%2BiivHcXDFhgUjNfEJU6%2FO5rb%2B5Jc5vlMGt0ZLatsH9x4mhpeoWaC1PAzQD0PHSLDQ5ZISSdpyCLVnhDJPmvw4SLBVOtscjFo59cqda%2B1bWfK%2FWEQo4WnzTo6ldZHqrKAie27S2%2FqWs4sBCRXG6bACxGKnXCm%2Bdr%2FUiwVXnIqS10814G6v4eTGrW15QIxWFVl2WcqIJik5L6tb7yM4Qs7UUeOzTgvLx6KLt7zHzXkSixa0zwaO6yPfXsefJuv5eC2m6x6wP9BKeHzkPqg1bZAwHHes9xbqModfixESn4ZRCzfLuApzWnTIGwAaTZrCQ5CtNROiH14JyKxZ2oE2CUtbDnypZOef7Ez%2B5IHWlQ42DAd%2F7%2BY6FUEqzgYEP8%2BaDKsV6URqhDqDBYpSdY6DyihdaccJiyJiMpPzMN7bMPiQ%2F8IGOqUBelFu50twmoCkH%2FaRkp12HbYCLKL7k1snQ0GDM2rTFj7ejPhibz7NiGN%2FdnVwKfL9%2FVSTxI30i1UGV2%2Bk8H7y1l11pVoYHkgnY%2BR1hDqxN0%2FX7EaeRhFb0ZO9rhbB5ThekAfm91qPMxIqq3BDmO6YN89jtRMS%2F0ZTzt%2FRDPJ%2FaMsrmaJ77SOIBCvOC33Mf%2BBZtXSPH1qJbzxnEwaMYdZpEQ3lquxF&X-Amz-Signature=7ee7e34d48809e601cbb9107cb727af445335cb9206b49c8fa422313fac3d0bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCGY34FN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcAFkg2vM8DGNOYBwEwwKZ2qqjw03G9FV6JsjIFIiweAiEA9p3V5bRfk3%2B67nZx6BO7Xopxy974l9L8XuKBuBYYb%2FcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcjAORxKrWgMp%2BYVSrcA1tNSq1NqG1F41lCIs3rX%2Bfigl%2BbwvuJ1mmCk6lr7R5aTYN09yNBGBn1MHFFnIQzErVJvzjNusEPrK4JvEZnRrMTOEjmD%2FXs8aNAXUtwhDlmpOReDG4qe8r%2BGMtTgD72u3aPl4XGQe1wUN5EyjDbHy03TlAulNrMoRizVrqz%2F74GwKDbfjX%2BU0W5vZHQTrO5EYlUzjnwmlygGjNG1UT2T8J%2BiivHcXDFhgUjNfEJU6%2FO5rb%2B5Jc5vlMGt0ZLatsH9x4mhpeoWaC1PAzQD0PHSLDQ5ZISSdpyCLVnhDJPmvw4SLBVOtscjFo59cqda%2B1bWfK%2FWEQo4WnzTo6ldZHqrKAie27S2%2FqWs4sBCRXG6bACxGKnXCm%2Bdr%2FUiwVXnIqS10814G6v4eTGrW15QIxWFVl2WcqIJik5L6tb7yM4Qs7UUeOzTgvLx6KLt7zHzXkSixa0zwaO6yPfXsefJuv5eC2m6x6wP9BKeHzkPqg1bZAwHHes9xbqModfixESn4ZRCzfLuApzWnTIGwAaTZrCQ5CtNROiH14JyKxZ2oE2CUtbDnypZOef7Ez%2B5IHWlQ42DAd%2F7%2BY6FUEqzgYEP8%2BaDKsV6URqhDqDBYpSdY6DyihdaccJiyJiMpPzMN7bMPiQ%2F8IGOqUBelFu50twmoCkH%2FaRkp12HbYCLKL7k1snQ0GDM2rTFj7ejPhibz7NiGN%2FdnVwKfL9%2FVSTxI30i1UGV2%2Bk8H7y1l11pVoYHkgnY%2BR1hDqxN0%2FX7EaeRhFb0ZO9rhbB5ThekAfm91qPMxIqq3BDmO6YN89jtRMS%2F0ZTzt%2FRDPJ%2FaMsrmaJ77SOIBCvOC33Mf%2BBZtXSPH1qJbzxnEwaMYdZpEQ3lquxF&X-Amz-Signature=aec6e8e9918c3a9b49aa401d716e0d76630f1f6a343bd3be1575d07779b0561d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCGY34FN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcAFkg2vM8DGNOYBwEwwKZ2qqjw03G9FV6JsjIFIiweAiEA9p3V5bRfk3%2B67nZx6BO7Xopxy974l9L8XuKBuBYYb%2FcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcjAORxKrWgMp%2BYVSrcA1tNSq1NqG1F41lCIs3rX%2Bfigl%2BbwvuJ1mmCk6lr7R5aTYN09yNBGBn1MHFFnIQzErVJvzjNusEPrK4JvEZnRrMTOEjmD%2FXs8aNAXUtwhDlmpOReDG4qe8r%2BGMtTgD72u3aPl4XGQe1wUN5EyjDbHy03TlAulNrMoRizVrqz%2F74GwKDbfjX%2BU0W5vZHQTrO5EYlUzjnwmlygGjNG1UT2T8J%2BiivHcXDFhgUjNfEJU6%2FO5rb%2B5Jc5vlMGt0ZLatsH9x4mhpeoWaC1PAzQD0PHSLDQ5ZISSdpyCLVnhDJPmvw4SLBVOtscjFo59cqda%2B1bWfK%2FWEQo4WnzTo6ldZHqrKAie27S2%2FqWs4sBCRXG6bACxGKnXCm%2Bdr%2FUiwVXnIqS10814G6v4eTGrW15QIxWFVl2WcqIJik5L6tb7yM4Qs7UUeOzTgvLx6KLt7zHzXkSixa0zwaO6yPfXsefJuv5eC2m6x6wP9BKeHzkPqg1bZAwHHes9xbqModfixESn4ZRCzfLuApzWnTIGwAaTZrCQ5CtNROiH14JyKxZ2oE2CUtbDnypZOef7Ez%2B5IHWlQ42DAd%2F7%2BY6FUEqzgYEP8%2BaDKsV6URqhDqDBYpSdY6DyihdaccJiyJiMpPzMN7bMPiQ%2F8IGOqUBelFu50twmoCkH%2FaRkp12HbYCLKL7k1snQ0GDM2rTFj7ejPhibz7NiGN%2FdnVwKfL9%2FVSTxI30i1UGV2%2Bk8H7y1l11pVoYHkgnY%2BR1hDqxN0%2FX7EaeRhFb0ZO9rhbB5ThekAfm91qPMxIqq3BDmO6YN89jtRMS%2F0ZTzt%2FRDPJ%2FaMsrmaJ77SOIBCvOC33Mf%2BBZtXSPH1qJbzxnEwaMYdZpEQ3lquxF&X-Amz-Signature=718de0492bd89148001b185ae122b1df43ab5fab27c7487ce20d921f54e935ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCGY34FN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcAFkg2vM8DGNOYBwEwwKZ2qqjw03G9FV6JsjIFIiweAiEA9p3V5bRfk3%2B67nZx6BO7Xopxy974l9L8XuKBuBYYb%2FcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcjAORxKrWgMp%2BYVSrcA1tNSq1NqG1F41lCIs3rX%2Bfigl%2BbwvuJ1mmCk6lr7R5aTYN09yNBGBn1MHFFnIQzErVJvzjNusEPrK4JvEZnRrMTOEjmD%2FXs8aNAXUtwhDlmpOReDG4qe8r%2BGMtTgD72u3aPl4XGQe1wUN5EyjDbHy03TlAulNrMoRizVrqz%2F74GwKDbfjX%2BU0W5vZHQTrO5EYlUzjnwmlygGjNG1UT2T8J%2BiivHcXDFhgUjNfEJU6%2FO5rb%2B5Jc5vlMGt0ZLatsH9x4mhpeoWaC1PAzQD0PHSLDQ5ZISSdpyCLVnhDJPmvw4SLBVOtscjFo59cqda%2B1bWfK%2FWEQo4WnzTo6ldZHqrKAie27S2%2FqWs4sBCRXG6bACxGKnXCm%2Bdr%2FUiwVXnIqS10814G6v4eTGrW15QIxWFVl2WcqIJik5L6tb7yM4Qs7UUeOzTgvLx6KLt7zHzXkSixa0zwaO6yPfXsefJuv5eC2m6x6wP9BKeHzkPqg1bZAwHHes9xbqModfixESn4ZRCzfLuApzWnTIGwAaTZrCQ5CtNROiH14JyKxZ2oE2CUtbDnypZOef7Ez%2B5IHWlQ42DAd%2F7%2BY6FUEqzgYEP8%2BaDKsV6URqhDqDBYpSdY6DyihdaccJiyJiMpPzMN7bMPiQ%2F8IGOqUBelFu50twmoCkH%2FaRkp12HbYCLKL7k1snQ0GDM2rTFj7ejPhibz7NiGN%2FdnVwKfL9%2FVSTxI30i1UGV2%2Bk8H7y1l11pVoYHkgnY%2BR1hDqxN0%2FX7EaeRhFb0ZO9rhbB5ThekAfm91qPMxIqq3BDmO6YN89jtRMS%2F0ZTzt%2FRDPJ%2FaMsrmaJ77SOIBCvOC33Mf%2BBZtXSPH1qJbzxnEwaMYdZpEQ3lquxF&X-Amz-Signature=38b5f48bedfc7cfd21bb6345c2ac36aecb6248419b0788678c09ac4290c53755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCGY34FN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcAFkg2vM8DGNOYBwEwwKZ2qqjw03G9FV6JsjIFIiweAiEA9p3V5bRfk3%2B67nZx6BO7Xopxy974l9L8XuKBuBYYb%2FcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcjAORxKrWgMp%2BYVSrcA1tNSq1NqG1F41lCIs3rX%2Bfigl%2BbwvuJ1mmCk6lr7R5aTYN09yNBGBn1MHFFnIQzErVJvzjNusEPrK4JvEZnRrMTOEjmD%2FXs8aNAXUtwhDlmpOReDG4qe8r%2BGMtTgD72u3aPl4XGQe1wUN5EyjDbHy03TlAulNrMoRizVrqz%2F74GwKDbfjX%2BU0W5vZHQTrO5EYlUzjnwmlygGjNG1UT2T8J%2BiivHcXDFhgUjNfEJU6%2FO5rb%2B5Jc5vlMGt0ZLatsH9x4mhpeoWaC1PAzQD0PHSLDQ5ZISSdpyCLVnhDJPmvw4SLBVOtscjFo59cqda%2B1bWfK%2FWEQo4WnzTo6ldZHqrKAie27S2%2FqWs4sBCRXG6bACxGKnXCm%2Bdr%2FUiwVXnIqS10814G6v4eTGrW15QIxWFVl2WcqIJik5L6tb7yM4Qs7UUeOzTgvLx6KLt7zHzXkSixa0zwaO6yPfXsefJuv5eC2m6x6wP9BKeHzkPqg1bZAwHHes9xbqModfixESn4ZRCzfLuApzWnTIGwAaTZrCQ5CtNROiH14JyKxZ2oE2CUtbDnypZOef7Ez%2B5IHWlQ42DAd%2F7%2BY6FUEqzgYEP8%2BaDKsV6URqhDqDBYpSdY6DyihdaccJiyJiMpPzMN7bMPiQ%2F8IGOqUBelFu50twmoCkH%2FaRkp12HbYCLKL7k1snQ0GDM2rTFj7ejPhibz7NiGN%2FdnVwKfL9%2FVSTxI30i1UGV2%2Bk8H7y1l11pVoYHkgnY%2BR1hDqxN0%2FX7EaeRhFb0ZO9rhbB5ThekAfm91qPMxIqq3BDmO6YN89jtRMS%2F0ZTzt%2FRDPJ%2FaMsrmaJ77SOIBCvOC33Mf%2BBZtXSPH1qJbzxnEwaMYdZpEQ3lquxF&X-Amz-Signature=5e2a50cc172cf68bbc5bfd33e684c6f235129a38acfabd49e1e4bdba066ac996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
