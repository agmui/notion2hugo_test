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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZMDTBX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6AfurKEpT5LRPuYCfzDgFRtHZkwRao4MovfmsjRTb1AiEA%2Bp2ExiZRTO%2FVB4TT3Mj3nsLP04xamErVWfsp1AnXC7Uq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJr%2Bg9IucTv5XZ3slCrcAxLaX0uGEZjfHmX0EWMAGzZ0Akvpyt6AwrheqboOUTlLT3lghLQduY%2BqywUZMmYwAm%2FBTxhZcZI0MTf4RcccJ831I%2BvpCmOnPfNEdZGHT%2BG74rU2iAevTjBhB5izOtRwtqhiJwMg1kxTVJ4ghohEZasiuWz6geDUUcWE8NgWaVIGx89map5O%2BLz8%2Fs4ZEbS2VKG%2BrqOZ%2B1czIvPYkHCtTEZ%2BQTM1deAtV8XBIJMMK3qmagjGDFsdzZZzH5Y9mCBo4xV9bfQiE0CqRvdkvNt8rhiZa5dmZWu0INx5eVYMc9hdwUSIzqAaako%2F5vrTajViLB0y2eK9z0nNnmebRTtQMq2YaZ1oEdcP%2BFHyw%2BU2dnNVgG0mOwQtsVi3yJCCBBZ42PgmN8ZZaJN2%2FNJjaJJl1kOZ1hn5%2BaGR710bAdbD8MozyiChflb2DVryqVtoOpyQZ%2BdmwaCcEHgH1znIPzHaMFpY6DlI5w66lc99AjDb4AeRr9gbCCycwYOxwpYP7zEM2VeAa%2BQCsjfUghNOZXjFU09YOSA3Vx4hgwCQR75q8vLDaxE3eqkQIgL%2Bf3J2neplVSGRFDkObK380KM5Bw2a6nuVE3pQUUq66KajhwUPiMTcfmfQPFh59B5kwYewMM%2B6870GOqUBmIUneR6DP27hKHqzP1iipukBY%2FREwQ8856bJ2lpSBSIBYj5DnQ3wdJVfMAlTRf%2BaW1joUOUKOLh591vAqK8JXXrmQmNeCdI8jXY3UiIBwYPOcmOt5a8%2FkVTyUw%2Bev9UKykOSEbNqG2YKTKxVnzl3SVBafMso%2FUhi55BBxN0MTcUBD%2FUg3Ftr%2F87RE%2BHNIOWA7BP03HhhKZaJFflHKEiog8y%2BMpjj&X-Amz-Signature=79c084edc65c5f6ef8720fe9e0df49795306690e9b8184553bf8d64ff56fac6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZMDTBX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6AfurKEpT5LRPuYCfzDgFRtHZkwRao4MovfmsjRTb1AiEA%2Bp2ExiZRTO%2FVB4TT3Mj3nsLP04xamErVWfsp1AnXC7Uq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJr%2Bg9IucTv5XZ3slCrcAxLaX0uGEZjfHmX0EWMAGzZ0Akvpyt6AwrheqboOUTlLT3lghLQduY%2BqywUZMmYwAm%2FBTxhZcZI0MTf4RcccJ831I%2BvpCmOnPfNEdZGHT%2BG74rU2iAevTjBhB5izOtRwtqhiJwMg1kxTVJ4ghohEZasiuWz6geDUUcWE8NgWaVIGx89map5O%2BLz8%2Fs4ZEbS2VKG%2BrqOZ%2B1czIvPYkHCtTEZ%2BQTM1deAtV8XBIJMMK3qmagjGDFsdzZZzH5Y9mCBo4xV9bfQiE0CqRvdkvNt8rhiZa5dmZWu0INx5eVYMc9hdwUSIzqAaako%2F5vrTajViLB0y2eK9z0nNnmebRTtQMq2YaZ1oEdcP%2BFHyw%2BU2dnNVgG0mOwQtsVi3yJCCBBZ42PgmN8ZZaJN2%2FNJjaJJl1kOZ1hn5%2BaGR710bAdbD8MozyiChflb2DVryqVtoOpyQZ%2BdmwaCcEHgH1znIPzHaMFpY6DlI5w66lc99AjDb4AeRr9gbCCycwYOxwpYP7zEM2VeAa%2BQCsjfUghNOZXjFU09YOSA3Vx4hgwCQR75q8vLDaxE3eqkQIgL%2Bf3J2neplVSGRFDkObK380KM5Bw2a6nuVE3pQUUq66KajhwUPiMTcfmfQPFh59B5kwYewMM%2B6870GOqUBmIUneR6DP27hKHqzP1iipukBY%2FREwQ8856bJ2lpSBSIBYj5DnQ3wdJVfMAlTRf%2BaW1joUOUKOLh591vAqK8JXXrmQmNeCdI8jXY3UiIBwYPOcmOt5a8%2FkVTyUw%2Bev9UKykOSEbNqG2YKTKxVnzl3SVBafMso%2FUhi55BBxN0MTcUBD%2FUg3Ftr%2F87RE%2BHNIOWA7BP03HhhKZaJFflHKEiog8y%2BMpjj&X-Amz-Signature=da58c6df776516d84e12e8e85352120e055d4a84db1f3796c5b7fa4f9285c2c3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZMDTBX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6AfurKEpT5LRPuYCfzDgFRtHZkwRao4MovfmsjRTb1AiEA%2Bp2ExiZRTO%2FVB4TT3Mj3nsLP04xamErVWfsp1AnXC7Uq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJr%2Bg9IucTv5XZ3slCrcAxLaX0uGEZjfHmX0EWMAGzZ0Akvpyt6AwrheqboOUTlLT3lghLQduY%2BqywUZMmYwAm%2FBTxhZcZI0MTf4RcccJ831I%2BvpCmOnPfNEdZGHT%2BG74rU2iAevTjBhB5izOtRwtqhiJwMg1kxTVJ4ghohEZasiuWz6geDUUcWE8NgWaVIGx89map5O%2BLz8%2Fs4ZEbS2VKG%2BrqOZ%2B1czIvPYkHCtTEZ%2BQTM1deAtV8XBIJMMK3qmagjGDFsdzZZzH5Y9mCBo4xV9bfQiE0CqRvdkvNt8rhiZa5dmZWu0INx5eVYMc9hdwUSIzqAaako%2F5vrTajViLB0y2eK9z0nNnmebRTtQMq2YaZ1oEdcP%2BFHyw%2BU2dnNVgG0mOwQtsVi3yJCCBBZ42PgmN8ZZaJN2%2FNJjaJJl1kOZ1hn5%2BaGR710bAdbD8MozyiChflb2DVryqVtoOpyQZ%2BdmwaCcEHgH1znIPzHaMFpY6DlI5w66lc99AjDb4AeRr9gbCCycwYOxwpYP7zEM2VeAa%2BQCsjfUghNOZXjFU09YOSA3Vx4hgwCQR75q8vLDaxE3eqkQIgL%2Bf3J2neplVSGRFDkObK380KM5Bw2a6nuVE3pQUUq66KajhwUPiMTcfmfQPFh59B5kwYewMM%2B6870GOqUBmIUneR6DP27hKHqzP1iipukBY%2FREwQ8856bJ2lpSBSIBYj5DnQ3wdJVfMAlTRf%2BaW1joUOUKOLh591vAqK8JXXrmQmNeCdI8jXY3UiIBwYPOcmOt5a8%2FkVTyUw%2Bev9UKykOSEbNqG2YKTKxVnzl3SVBafMso%2FUhi55BBxN0MTcUBD%2FUg3Ftr%2F87RE%2BHNIOWA7BP03HhhKZaJFflHKEiog8y%2BMpjj&X-Amz-Signature=e589638bafdb102403639316c3eb3be90030a76deddc37e0df0c91a18710e10b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZMDTBX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6AfurKEpT5LRPuYCfzDgFRtHZkwRao4MovfmsjRTb1AiEA%2Bp2ExiZRTO%2FVB4TT3Mj3nsLP04xamErVWfsp1AnXC7Uq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJr%2Bg9IucTv5XZ3slCrcAxLaX0uGEZjfHmX0EWMAGzZ0Akvpyt6AwrheqboOUTlLT3lghLQduY%2BqywUZMmYwAm%2FBTxhZcZI0MTf4RcccJ831I%2BvpCmOnPfNEdZGHT%2BG74rU2iAevTjBhB5izOtRwtqhiJwMg1kxTVJ4ghohEZasiuWz6geDUUcWE8NgWaVIGx89map5O%2BLz8%2Fs4ZEbS2VKG%2BrqOZ%2B1czIvPYkHCtTEZ%2BQTM1deAtV8XBIJMMK3qmagjGDFsdzZZzH5Y9mCBo4xV9bfQiE0CqRvdkvNt8rhiZa5dmZWu0INx5eVYMc9hdwUSIzqAaako%2F5vrTajViLB0y2eK9z0nNnmebRTtQMq2YaZ1oEdcP%2BFHyw%2BU2dnNVgG0mOwQtsVi3yJCCBBZ42PgmN8ZZaJN2%2FNJjaJJl1kOZ1hn5%2BaGR710bAdbD8MozyiChflb2DVryqVtoOpyQZ%2BdmwaCcEHgH1znIPzHaMFpY6DlI5w66lc99AjDb4AeRr9gbCCycwYOxwpYP7zEM2VeAa%2BQCsjfUghNOZXjFU09YOSA3Vx4hgwCQR75q8vLDaxE3eqkQIgL%2Bf3J2neplVSGRFDkObK380KM5Bw2a6nuVE3pQUUq66KajhwUPiMTcfmfQPFh59B5kwYewMM%2B6870GOqUBmIUneR6DP27hKHqzP1iipukBY%2FREwQ8856bJ2lpSBSIBYj5DnQ3wdJVfMAlTRf%2BaW1joUOUKOLh591vAqK8JXXrmQmNeCdI8jXY3UiIBwYPOcmOt5a8%2FkVTyUw%2Bev9UKykOSEbNqG2YKTKxVnzl3SVBafMso%2FUhi55BBxN0MTcUBD%2FUg3Ftr%2F87RE%2BHNIOWA7BP03HhhKZaJFflHKEiog8y%2BMpjj&X-Amz-Signature=32145eaaf524b28b938bc20745f304046eabf0c14db39b47e4f28cb54fdf630e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZMDTBX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6AfurKEpT5LRPuYCfzDgFRtHZkwRao4MovfmsjRTb1AiEA%2Bp2ExiZRTO%2FVB4TT3Mj3nsLP04xamErVWfsp1AnXC7Uq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJr%2Bg9IucTv5XZ3slCrcAxLaX0uGEZjfHmX0EWMAGzZ0Akvpyt6AwrheqboOUTlLT3lghLQduY%2BqywUZMmYwAm%2FBTxhZcZI0MTf4RcccJ831I%2BvpCmOnPfNEdZGHT%2BG74rU2iAevTjBhB5izOtRwtqhiJwMg1kxTVJ4ghohEZasiuWz6geDUUcWE8NgWaVIGx89map5O%2BLz8%2Fs4ZEbS2VKG%2BrqOZ%2B1czIvPYkHCtTEZ%2BQTM1deAtV8XBIJMMK3qmagjGDFsdzZZzH5Y9mCBo4xV9bfQiE0CqRvdkvNt8rhiZa5dmZWu0INx5eVYMc9hdwUSIzqAaako%2F5vrTajViLB0y2eK9z0nNnmebRTtQMq2YaZ1oEdcP%2BFHyw%2BU2dnNVgG0mOwQtsVi3yJCCBBZ42PgmN8ZZaJN2%2FNJjaJJl1kOZ1hn5%2BaGR710bAdbD8MozyiChflb2DVryqVtoOpyQZ%2BdmwaCcEHgH1znIPzHaMFpY6DlI5w66lc99AjDb4AeRr9gbCCycwYOxwpYP7zEM2VeAa%2BQCsjfUghNOZXjFU09YOSA3Vx4hgwCQR75q8vLDaxE3eqkQIgL%2Bf3J2neplVSGRFDkObK380KM5Bw2a6nuVE3pQUUq66KajhwUPiMTcfmfQPFh59B5kwYewMM%2B6870GOqUBmIUneR6DP27hKHqzP1iipukBY%2FREwQ8856bJ2lpSBSIBYj5DnQ3wdJVfMAlTRf%2BaW1joUOUKOLh591vAqK8JXXrmQmNeCdI8jXY3UiIBwYPOcmOt5a8%2FkVTyUw%2Bev9UKykOSEbNqG2YKTKxVnzl3SVBafMso%2FUhi55BBxN0MTcUBD%2FUg3Ftr%2F87RE%2BHNIOWA7BP03HhhKZaJFflHKEiog8y%2BMpjj&X-Amz-Signature=9083aafb55c08effb860f3f00e2d1ef5f0d572f413858384b40ccd4526043dab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZMDTBX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6AfurKEpT5LRPuYCfzDgFRtHZkwRao4MovfmsjRTb1AiEA%2Bp2ExiZRTO%2FVB4TT3Mj3nsLP04xamErVWfsp1AnXC7Uq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJr%2Bg9IucTv5XZ3slCrcAxLaX0uGEZjfHmX0EWMAGzZ0Akvpyt6AwrheqboOUTlLT3lghLQduY%2BqywUZMmYwAm%2FBTxhZcZI0MTf4RcccJ831I%2BvpCmOnPfNEdZGHT%2BG74rU2iAevTjBhB5izOtRwtqhiJwMg1kxTVJ4ghohEZasiuWz6geDUUcWE8NgWaVIGx89map5O%2BLz8%2Fs4ZEbS2VKG%2BrqOZ%2B1czIvPYkHCtTEZ%2BQTM1deAtV8XBIJMMK3qmagjGDFsdzZZzH5Y9mCBo4xV9bfQiE0CqRvdkvNt8rhiZa5dmZWu0INx5eVYMc9hdwUSIzqAaako%2F5vrTajViLB0y2eK9z0nNnmebRTtQMq2YaZ1oEdcP%2BFHyw%2BU2dnNVgG0mOwQtsVi3yJCCBBZ42PgmN8ZZaJN2%2FNJjaJJl1kOZ1hn5%2BaGR710bAdbD8MozyiChflb2DVryqVtoOpyQZ%2BdmwaCcEHgH1znIPzHaMFpY6DlI5w66lc99AjDb4AeRr9gbCCycwYOxwpYP7zEM2VeAa%2BQCsjfUghNOZXjFU09YOSA3Vx4hgwCQR75q8vLDaxE3eqkQIgL%2Bf3J2neplVSGRFDkObK380KM5Bw2a6nuVE3pQUUq66KajhwUPiMTcfmfQPFh59B5kwYewMM%2B6870GOqUBmIUneR6DP27hKHqzP1iipukBY%2FREwQ8856bJ2lpSBSIBYj5DnQ3wdJVfMAlTRf%2BaW1joUOUKOLh591vAqK8JXXrmQmNeCdI8jXY3UiIBwYPOcmOt5a8%2FkVTyUw%2Bev9UKykOSEbNqG2YKTKxVnzl3SVBafMso%2FUhi55BBxN0MTcUBD%2FUg3Ftr%2F87RE%2BHNIOWA7BP03HhhKZaJFflHKEiog8y%2BMpjj&X-Amz-Signature=e67107683bbe847d540ac3ce4fa5a08b009181efbdf3b2d4592fc9035c8c2fec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZMDTBX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6AfurKEpT5LRPuYCfzDgFRtHZkwRao4MovfmsjRTb1AiEA%2Bp2ExiZRTO%2FVB4TT3Mj3nsLP04xamErVWfsp1AnXC7Uq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJr%2Bg9IucTv5XZ3slCrcAxLaX0uGEZjfHmX0EWMAGzZ0Akvpyt6AwrheqboOUTlLT3lghLQduY%2BqywUZMmYwAm%2FBTxhZcZI0MTf4RcccJ831I%2BvpCmOnPfNEdZGHT%2BG74rU2iAevTjBhB5izOtRwtqhiJwMg1kxTVJ4ghohEZasiuWz6geDUUcWE8NgWaVIGx89map5O%2BLz8%2Fs4ZEbS2VKG%2BrqOZ%2B1czIvPYkHCtTEZ%2BQTM1deAtV8XBIJMMK3qmagjGDFsdzZZzH5Y9mCBo4xV9bfQiE0CqRvdkvNt8rhiZa5dmZWu0INx5eVYMc9hdwUSIzqAaako%2F5vrTajViLB0y2eK9z0nNnmebRTtQMq2YaZ1oEdcP%2BFHyw%2BU2dnNVgG0mOwQtsVi3yJCCBBZ42PgmN8ZZaJN2%2FNJjaJJl1kOZ1hn5%2BaGR710bAdbD8MozyiChflb2DVryqVtoOpyQZ%2BdmwaCcEHgH1znIPzHaMFpY6DlI5w66lc99AjDb4AeRr9gbCCycwYOxwpYP7zEM2VeAa%2BQCsjfUghNOZXjFU09YOSA3Vx4hgwCQR75q8vLDaxE3eqkQIgL%2Bf3J2neplVSGRFDkObK380KM5Bw2a6nuVE3pQUUq66KajhwUPiMTcfmfQPFh59B5kwYewMM%2B6870GOqUBmIUneR6DP27hKHqzP1iipukBY%2FREwQ8856bJ2lpSBSIBYj5DnQ3wdJVfMAlTRf%2BaW1joUOUKOLh591vAqK8JXXrmQmNeCdI8jXY3UiIBwYPOcmOt5a8%2FkVTyUw%2Bev9UKykOSEbNqG2YKTKxVnzl3SVBafMso%2FUhi55BBxN0MTcUBD%2FUg3Ftr%2F87RE%2BHNIOWA7BP03HhhKZaJFflHKEiog8y%2BMpjj&X-Amz-Signature=7605282083007b8c63e159cc03c5b8755f1536a77b3d5e369625a298d2a7a5a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZMDTBX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6AfurKEpT5LRPuYCfzDgFRtHZkwRao4MovfmsjRTb1AiEA%2Bp2ExiZRTO%2FVB4TT3Mj3nsLP04xamErVWfsp1AnXC7Uq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJr%2Bg9IucTv5XZ3slCrcAxLaX0uGEZjfHmX0EWMAGzZ0Akvpyt6AwrheqboOUTlLT3lghLQduY%2BqywUZMmYwAm%2FBTxhZcZI0MTf4RcccJ831I%2BvpCmOnPfNEdZGHT%2BG74rU2iAevTjBhB5izOtRwtqhiJwMg1kxTVJ4ghohEZasiuWz6geDUUcWE8NgWaVIGx89map5O%2BLz8%2Fs4ZEbS2VKG%2BrqOZ%2B1czIvPYkHCtTEZ%2BQTM1deAtV8XBIJMMK3qmagjGDFsdzZZzH5Y9mCBo4xV9bfQiE0CqRvdkvNt8rhiZa5dmZWu0INx5eVYMc9hdwUSIzqAaako%2F5vrTajViLB0y2eK9z0nNnmebRTtQMq2YaZ1oEdcP%2BFHyw%2BU2dnNVgG0mOwQtsVi3yJCCBBZ42PgmN8ZZaJN2%2FNJjaJJl1kOZ1hn5%2BaGR710bAdbD8MozyiChflb2DVryqVtoOpyQZ%2BdmwaCcEHgH1znIPzHaMFpY6DlI5w66lc99AjDb4AeRr9gbCCycwYOxwpYP7zEM2VeAa%2BQCsjfUghNOZXjFU09YOSA3Vx4hgwCQR75q8vLDaxE3eqkQIgL%2Bf3J2neplVSGRFDkObK380KM5Bw2a6nuVE3pQUUq66KajhwUPiMTcfmfQPFh59B5kwYewMM%2B6870GOqUBmIUneR6DP27hKHqzP1iipukBY%2FREwQ8856bJ2lpSBSIBYj5DnQ3wdJVfMAlTRf%2BaW1joUOUKOLh591vAqK8JXXrmQmNeCdI8jXY3UiIBwYPOcmOt5a8%2FkVTyUw%2Bev9UKykOSEbNqG2YKTKxVnzl3SVBafMso%2FUhi55BBxN0MTcUBD%2FUg3Ftr%2F87RE%2BHNIOWA7BP03HhhKZaJFflHKEiog8y%2BMpjj&X-Amz-Signature=fa64cb700dcd8314e4eac59417de1c893300cff43864f336c166887542fb7c70&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
