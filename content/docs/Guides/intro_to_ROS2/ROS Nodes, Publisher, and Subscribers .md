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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMDPVTQ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDk0lSdaAMD8dsN57%2Fjz%2BHpu%2Bt02rTWHAqIfh1izcURAIhAJgZchtp1ZiUxYoypkKlMByNi7xvdFDCfu6bidIeGUGaKv8DCEAQABoMNjM3NDIzMTgzODA1IgzTgn%2FsK3ADIRHFcpsq3ANflxn5E4SCHf2zKs5ibmvi592kPzrC19dhPY5mKgY7l0Qylxan8Y9VUYzNB7FnSfSdGQ%2BgFfIruaEEqYBSvuA86hU5YA9FQj4AFwvDfIekrxs%2FXLQBLaJAfIX7NCRoK5WYdLijrHRwD6fKJP3kE93nNtPXz7JfVWAk30LRscGA2Yzn2AtCwJnG9aFPhBsDtT29e6dOM7AS06Xn54lI%2F9mZ%2BmV2pHjuVMkS3v1qA5Y7suXsLntZyDfEuWDysQop2Rfq8y9SjwHLovE%2B%2BK5a88M4Oyu4uFjrIJhETybt1rsjeWj%2Fk0%2BgrkWKscHiIHEH%2Bz4wr1fQ7f3QPC%2F08ARgVo9PRtKBqyivlxblWdJ8kTCCSIQpUXHC8jQY7C6fdoHgLaItqchPT1gZ6kq2cSfN2PQOXF9VcZ%2F6Nx7ASj38Xh8R59GqrHx2VZjoWpv%2F%2Bsux10CaA89wRDo32bBrquoZzThmHk9ldRDD5X9AyFUhBFHcnYu%2BI0L9TkIqaVMxYNbdlb3FNOPvasQGOJzZ5SghPapTpNMSoI%2BhMkdocadnVzVPyQEAYn0Q8JalYPJFApUxPPPdMcnjaU3mGt7ljRyPv89U3jBMHjUo3TE1k0dFufgx7HwTSv5aGmsgj1gmsDDvg7LABjqkATJn%2FyKGH05MGFrAeVmwuw3KVVOg3nIfWqN4WFPbtCDY59Dk7sI0DWy8SKrm%2BvSsqHisUU2EHy8%2FiNRPQD1AG8TQDEdOmtZD9c8YdSl1J8zuWBzVTQ2X7qe6nwKEYR24uLvkv5ohZW8GZw%2BNWiKg7I8qfwIVJ9G7hZB1U%2FZOpwGd0H8R1MPkJQfQdRXUM1bz84E1iqXYnq4gRtx4msxcc6Jt1laW&X-Amz-Signature=6f0e11c6b826b91972bbf9327bdf88374d81346a653f31ec58394ec050294edf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMDPVTQ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDk0lSdaAMD8dsN57%2Fjz%2BHpu%2Bt02rTWHAqIfh1izcURAIhAJgZchtp1ZiUxYoypkKlMByNi7xvdFDCfu6bidIeGUGaKv8DCEAQABoMNjM3NDIzMTgzODA1IgzTgn%2FsK3ADIRHFcpsq3ANflxn5E4SCHf2zKs5ibmvi592kPzrC19dhPY5mKgY7l0Qylxan8Y9VUYzNB7FnSfSdGQ%2BgFfIruaEEqYBSvuA86hU5YA9FQj4AFwvDfIekrxs%2FXLQBLaJAfIX7NCRoK5WYdLijrHRwD6fKJP3kE93nNtPXz7JfVWAk30LRscGA2Yzn2AtCwJnG9aFPhBsDtT29e6dOM7AS06Xn54lI%2F9mZ%2BmV2pHjuVMkS3v1qA5Y7suXsLntZyDfEuWDysQop2Rfq8y9SjwHLovE%2B%2BK5a88M4Oyu4uFjrIJhETybt1rsjeWj%2Fk0%2BgrkWKscHiIHEH%2Bz4wr1fQ7f3QPC%2F08ARgVo9PRtKBqyivlxblWdJ8kTCCSIQpUXHC8jQY7C6fdoHgLaItqchPT1gZ6kq2cSfN2PQOXF9VcZ%2F6Nx7ASj38Xh8R59GqrHx2VZjoWpv%2F%2Bsux10CaA89wRDo32bBrquoZzThmHk9ldRDD5X9AyFUhBFHcnYu%2BI0L9TkIqaVMxYNbdlb3FNOPvasQGOJzZ5SghPapTpNMSoI%2BhMkdocadnVzVPyQEAYn0Q8JalYPJFApUxPPPdMcnjaU3mGt7ljRyPv89U3jBMHjUo3TE1k0dFufgx7HwTSv5aGmsgj1gmsDDvg7LABjqkATJn%2FyKGH05MGFrAeVmwuw3KVVOg3nIfWqN4WFPbtCDY59Dk7sI0DWy8SKrm%2BvSsqHisUU2EHy8%2FiNRPQD1AG8TQDEdOmtZD9c8YdSl1J8zuWBzVTQ2X7qe6nwKEYR24uLvkv5ohZW8GZw%2BNWiKg7I8qfwIVJ9G7hZB1U%2FZOpwGd0H8R1MPkJQfQdRXUM1bz84E1iqXYnq4gRtx4msxcc6Jt1laW&X-Amz-Signature=0eea4ff7d29a55fa5f09991d6b2db1bbd384b1e80d996ca933211e94c017d753&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMDPVTQ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDk0lSdaAMD8dsN57%2Fjz%2BHpu%2Bt02rTWHAqIfh1izcURAIhAJgZchtp1ZiUxYoypkKlMByNi7xvdFDCfu6bidIeGUGaKv8DCEAQABoMNjM3NDIzMTgzODA1IgzTgn%2FsK3ADIRHFcpsq3ANflxn5E4SCHf2zKs5ibmvi592kPzrC19dhPY5mKgY7l0Qylxan8Y9VUYzNB7FnSfSdGQ%2BgFfIruaEEqYBSvuA86hU5YA9FQj4AFwvDfIekrxs%2FXLQBLaJAfIX7NCRoK5WYdLijrHRwD6fKJP3kE93nNtPXz7JfVWAk30LRscGA2Yzn2AtCwJnG9aFPhBsDtT29e6dOM7AS06Xn54lI%2F9mZ%2BmV2pHjuVMkS3v1qA5Y7suXsLntZyDfEuWDysQop2Rfq8y9SjwHLovE%2B%2BK5a88M4Oyu4uFjrIJhETybt1rsjeWj%2Fk0%2BgrkWKscHiIHEH%2Bz4wr1fQ7f3QPC%2F08ARgVo9PRtKBqyivlxblWdJ8kTCCSIQpUXHC8jQY7C6fdoHgLaItqchPT1gZ6kq2cSfN2PQOXF9VcZ%2F6Nx7ASj38Xh8R59GqrHx2VZjoWpv%2F%2Bsux10CaA89wRDo32bBrquoZzThmHk9ldRDD5X9AyFUhBFHcnYu%2BI0L9TkIqaVMxYNbdlb3FNOPvasQGOJzZ5SghPapTpNMSoI%2BhMkdocadnVzVPyQEAYn0Q8JalYPJFApUxPPPdMcnjaU3mGt7ljRyPv89U3jBMHjUo3TE1k0dFufgx7HwTSv5aGmsgj1gmsDDvg7LABjqkATJn%2FyKGH05MGFrAeVmwuw3KVVOg3nIfWqN4WFPbtCDY59Dk7sI0DWy8SKrm%2BvSsqHisUU2EHy8%2FiNRPQD1AG8TQDEdOmtZD9c8YdSl1J8zuWBzVTQ2X7qe6nwKEYR24uLvkv5ohZW8GZw%2BNWiKg7I8qfwIVJ9G7hZB1U%2FZOpwGd0H8R1MPkJQfQdRXUM1bz84E1iqXYnq4gRtx4msxcc6Jt1laW&X-Amz-Signature=e0674f320473c491173ab26e7aaa5eac77031f7397dab1477e6b16e6e86a6085&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMDPVTQ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDk0lSdaAMD8dsN57%2Fjz%2BHpu%2Bt02rTWHAqIfh1izcURAIhAJgZchtp1ZiUxYoypkKlMByNi7xvdFDCfu6bidIeGUGaKv8DCEAQABoMNjM3NDIzMTgzODA1IgzTgn%2FsK3ADIRHFcpsq3ANflxn5E4SCHf2zKs5ibmvi592kPzrC19dhPY5mKgY7l0Qylxan8Y9VUYzNB7FnSfSdGQ%2BgFfIruaEEqYBSvuA86hU5YA9FQj4AFwvDfIekrxs%2FXLQBLaJAfIX7NCRoK5WYdLijrHRwD6fKJP3kE93nNtPXz7JfVWAk30LRscGA2Yzn2AtCwJnG9aFPhBsDtT29e6dOM7AS06Xn54lI%2F9mZ%2BmV2pHjuVMkS3v1qA5Y7suXsLntZyDfEuWDysQop2Rfq8y9SjwHLovE%2B%2BK5a88M4Oyu4uFjrIJhETybt1rsjeWj%2Fk0%2BgrkWKscHiIHEH%2Bz4wr1fQ7f3QPC%2F08ARgVo9PRtKBqyivlxblWdJ8kTCCSIQpUXHC8jQY7C6fdoHgLaItqchPT1gZ6kq2cSfN2PQOXF9VcZ%2F6Nx7ASj38Xh8R59GqrHx2VZjoWpv%2F%2Bsux10CaA89wRDo32bBrquoZzThmHk9ldRDD5X9AyFUhBFHcnYu%2BI0L9TkIqaVMxYNbdlb3FNOPvasQGOJzZ5SghPapTpNMSoI%2BhMkdocadnVzVPyQEAYn0Q8JalYPJFApUxPPPdMcnjaU3mGt7ljRyPv89U3jBMHjUo3TE1k0dFufgx7HwTSv5aGmsgj1gmsDDvg7LABjqkATJn%2FyKGH05MGFrAeVmwuw3KVVOg3nIfWqN4WFPbtCDY59Dk7sI0DWy8SKrm%2BvSsqHisUU2EHy8%2FiNRPQD1AG8TQDEdOmtZD9c8YdSl1J8zuWBzVTQ2X7qe6nwKEYR24uLvkv5ohZW8GZw%2BNWiKg7I8qfwIVJ9G7hZB1U%2FZOpwGd0H8R1MPkJQfQdRXUM1bz84E1iqXYnq4gRtx4msxcc6Jt1laW&X-Amz-Signature=b44de4fedf00d738ee085493c41d3106d76683ddfd755cb179f592ccee2c9b8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMDPVTQ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDk0lSdaAMD8dsN57%2Fjz%2BHpu%2Bt02rTWHAqIfh1izcURAIhAJgZchtp1ZiUxYoypkKlMByNi7xvdFDCfu6bidIeGUGaKv8DCEAQABoMNjM3NDIzMTgzODA1IgzTgn%2FsK3ADIRHFcpsq3ANflxn5E4SCHf2zKs5ibmvi592kPzrC19dhPY5mKgY7l0Qylxan8Y9VUYzNB7FnSfSdGQ%2BgFfIruaEEqYBSvuA86hU5YA9FQj4AFwvDfIekrxs%2FXLQBLaJAfIX7NCRoK5WYdLijrHRwD6fKJP3kE93nNtPXz7JfVWAk30LRscGA2Yzn2AtCwJnG9aFPhBsDtT29e6dOM7AS06Xn54lI%2F9mZ%2BmV2pHjuVMkS3v1qA5Y7suXsLntZyDfEuWDysQop2Rfq8y9SjwHLovE%2B%2BK5a88M4Oyu4uFjrIJhETybt1rsjeWj%2Fk0%2BgrkWKscHiIHEH%2Bz4wr1fQ7f3QPC%2F08ARgVo9PRtKBqyivlxblWdJ8kTCCSIQpUXHC8jQY7C6fdoHgLaItqchPT1gZ6kq2cSfN2PQOXF9VcZ%2F6Nx7ASj38Xh8R59GqrHx2VZjoWpv%2F%2Bsux10CaA89wRDo32bBrquoZzThmHk9ldRDD5X9AyFUhBFHcnYu%2BI0L9TkIqaVMxYNbdlb3FNOPvasQGOJzZ5SghPapTpNMSoI%2BhMkdocadnVzVPyQEAYn0Q8JalYPJFApUxPPPdMcnjaU3mGt7ljRyPv89U3jBMHjUo3TE1k0dFufgx7HwTSv5aGmsgj1gmsDDvg7LABjqkATJn%2FyKGH05MGFrAeVmwuw3KVVOg3nIfWqN4WFPbtCDY59Dk7sI0DWy8SKrm%2BvSsqHisUU2EHy8%2FiNRPQD1AG8TQDEdOmtZD9c8YdSl1J8zuWBzVTQ2X7qe6nwKEYR24uLvkv5ohZW8GZw%2BNWiKg7I8qfwIVJ9G7hZB1U%2FZOpwGd0H8R1MPkJQfQdRXUM1bz84E1iqXYnq4gRtx4msxcc6Jt1laW&X-Amz-Signature=05ae9d7de91f1c40999f8657eac3501bc65b7071b82f38d02e8ab8783a5ee808&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMDPVTQ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDk0lSdaAMD8dsN57%2Fjz%2BHpu%2Bt02rTWHAqIfh1izcURAIhAJgZchtp1ZiUxYoypkKlMByNi7xvdFDCfu6bidIeGUGaKv8DCEAQABoMNjM3NDIzMTgzODA1IgzTgn%2FsK3ADIRHFcpsq3ANflxn5E4SCHf2zKs5ibmvi592kPzrC19dhPY5mKgY7l0Qylxan8Y9VUYzNB7FnSfSdGQ%2BgFfIruaEEqYBSvuA86hU5YA9FQj4AFwvDfIekrxs%2FXLQBLaJAfIX7NCRoK5WYdLijrHRwD6fKJP3kE93nNtPXz7JfVWAk30LRscGA2Yzn2AtCwJnG9aFPhBsDtT29e6dOM7AS06Xn54lI%2F9mZ%2BmV2pHjuVMkS3v1qA5Y7suXsLntZyDfEuWDysQop2Rfq8y9SjwHLovE%2B%2BK5a88M4Oyu4uFjrIJhETybt1rsjeWj%2Fk0%2BgrkWKscHiIHEH%2Bz4wr1fQ7f3QPC%2F08ARgVo9PRtKBqyivlxblWdJ8kTCCSIQpUXHC8jQY7C6fdoHgLaItqchPT1gZ6kq2cSfN2PQOXF9VcZ%2F6Nx7ASj38Xh8R59GqrHx2VZjoWpv%2F%2Bsux10CaA89wRDo32bBrquoZzThmHk9ldRDD5X9AyFUhBFHcnYu%2BI0L9TkIqaVMxYNbdlb3FNOPvasQGOJzZ5SghPapTpNMSoI%2BhMkdocadnVzVPyQEAYn0Q8JalYPJFApUxPPPdMcnjaU3mGt7ljRyPv89U3jBMHjUo3TE1k0dFufgx7HwTSv5aGmsgj1gmsDDvg7LABjqkATJn%2FyKGH05MGFrAeVmwuw3KVVOg3nIfWqN4WFPbtCDY59Dk7sI0DWy8SKrm%2BvSsqHisUU2EHy8%2FiNRPQD1AG8TQDEdOmtZD9c8YdSl1J8zuWBzVTQ2X7qe6nwKEYR24uLvkv5ohZW8GZw%2BNWiKg7I8qfwIVJ9G7hZB1U%2FZOpwGd0H8R1MPkJQfQdRXUM1bz84E1iqXYnq4gRtx4msxcc6Jt1laW&X-Amz-Signature=ebc61b1159d53d85d3980eb539d3886b0e2a26c3296012ea3a55520ec0f25678&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMDPVTQ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDk0lSdaAMD8dsN57%2Fjz%2BHpu%2Bt02rTWHAqIfh1izcURAIhAJgZchtp1ZiUxYoypkKlMByNi7xvdFDCfu6bidIeGUGaKv8DCEAQABoMNjM3NDIzMTgzODA1IgzTgn%2FsK3ADIRHFcpsq3ANflxn5E4SCHf2zKs5ibmvi592kPzrC19dhPY5mKgY7l0Qylxan8Y9VUYzNB7FnSfSdGQ%2BgFfIruaEEqYBSvuA86hU5YA9FQj4AFwvDfIekrxs%2FXLQBLaJAfIX7NCRoK5WYdLijrHRwD6fKJP3kE93nNtPXz7JfVWAk30LRscGA2Yzn2AtCwJnG9aFPhBsDtT29e6dOM7AS06Xn54lI%2F9mZ%2BmV2pHjuVMkS3v1qA5Y7suXsLntZyDfEuWDysQop2Rfq8y9SjwHLovE%2B%2BK5a88M4Oyu4uFjrIJhETybt1rsjeWj%2Fk0%2BgrkWKscHiIHEH%2Bz4wr1fQ7f3QPC%2F08ARgVo9PRtKBqyivlxblWdJ8kTCCSIQpUXHC8jQY7C6fdoHgLaItqchPT1gZ6kq2cSfN2PQOXF9VcZ%2F6Nx7ASj38Xh8R59GqrHx2VZjoWpv%2F%2Bsux10CaA89wRDo32bBrquoZzThmHk9ldRDD5X9AyFUhBFHcnYu%2BI0L9TkIqaVMxYNbdlb3FNOPvasQGOJzZ5SghPapTpNMSoI%2BhMkdocadnVzVPyQEAYn0Q8JalYPJFApUxPPPdMcnjaU3mGt7ljRyPv89U3jBMHjUo3TE1k0dFufgx7HwTSv5aGmsgj1gmsDDvg7LABjqkATJn%2FyKGH05MGFrAeVmwuw3KVVOg3nIfWqN4WFPbtCDY59Dk7sI0DWy8SKrm%2BvSsqHisUU2EHy8%2FiNRPQD1AG8TQDEdOmtZD9c8YdSl1J8zuWBzVTQ2X7qe6nwKEYR24uLvkv5ohZW8GZw%2BNWiKg7I8qfwIVJ9G7hZB1U%2FZOpwGd0H8R1MPkJQfQdRXUM1bz84E1iqXYnq4gRtx4msxcc6Jt1laW&X-Amz-Signature=fc64c05790908e2ab57b43b2b4bc4c57d7b55b319f93b7bee6c336adf37dd517&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMDPVTQ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDk0lSdaAMD8dsN57%2Fjz%2BHpu%2Bt02rTWHAqIfh1izcURAIhAJgZchtp1ZiUxYoypkKlMByNi7xvdFDCfu6bidIeGUGaKv8DCEAQABoMNjM3NDIzMTgzODA1IgzTgn%2FsK3ADIRHFcpsq3ANflxn5E4SCHf2zKs5ibmvi592kPzrC19dhPY5mKgY7l0Qylxan8Y9VUYzNB7FnSfSdGQ%2BgFfIruaEEqYBSvuA86hU5YA9FQj4AFwvDfIekrxs%2FXLQBLaJAfIX7NCRoK5WYdLijrHRwD6fKJP3kE93nNtPXz7JfVWAk30LRscGA2Yzn2AtCwJnG9aFPhBsDtT29e6dOM7AS06Xn54lI%2F9mZ%2BmV2pHjuVMkS3v1qA5Y7suXsLntZyDfEuWDysQop2Rfq8y9SjwHLovE%2B%2BK5a88M4Oyu4uFjrIJhETybt1rsjeWj%2Fk0%2BgrkWKscHiIHEH%2Bz4wr1fQ7f3QPC%2F08ARgVo9PRtKBqyivlxblWdJ8kTCCSIQpUXHC8jQY7C6fdoHgLaItqchPT1gZ6kq2cSfN2PQOXF9VcZ%2F6Nx7ASj38Xh8R59GqrHx2VZjoWpv%2F%2Bsux10CaA89wRDo32bBrquoZzThmHk9ldRDD5X9AyFUhBFHcnYu%2BI0L9TkIqaVMxYNbdlb3FNOPvasQGOJzZ5SghPapTpNMSoI%2BhMkdocadnVzVPyQEAYn0Q8JalYPJFApUxPPPdMcnjaU3mGt7ljRyPv89U3jBMHjUo3TE1k0dFufgx7HwTSv5aGmsgj1gmsDDvg7LABjqkATJn%2FyKGH05MGFrAeVmwuw3KVVOg3nIfWqN4WFPbtCDY59Dk7sI0DWy8SKrm%2BvSsqHisUU2EHy8%2FiNRPQD1AG8TQDEdOmtZD9c8YdSl1J8zuWBzVTQ2X7qe6nwKEYR24uLvkv5ohZW8GZw%2BNWiKg7I8qfwIVJ9G7hZB1U%2FZOpwGd0H8R1MPkJQfQdRXUM1bz84E1iqXYnq4gRtx4msxcc6Jt1laW&X-Amz-Signature=9d0fc5adac48fa899f922a500d5a4afd03ec8d4349f7c203e4606316b2c50a4b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
