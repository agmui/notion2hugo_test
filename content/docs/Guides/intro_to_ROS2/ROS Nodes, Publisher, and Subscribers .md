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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77E72RN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd7uTJowVhK36BUM7PTCyvSG4fZKv1GnWomPADKXcPPAiEA5i2ebSOKmC9B6nZktaTQfYqGYzSVmqAg9YzznRxTxTIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKAI6UXA8iQZxtFoqyrcAwp%2F6wWj8S8EbihtZH59OWqalqovTl6BQQgqe8O6tRK5uuqr1xykOxyY%2B5LCWk%2FAfrZQp7LBDfE3MNt%2FUAqKrzLbTTXs7czHY%2FJmb1w2aIpAAVLEAdeqJATsHkRE5eXbzlhsvphsL5U2BZq%2BOXadg7BOun3q%2FzGWmynod%2FLXoAyH%2BLcNQXDdNny25azkxj7Uu%2FOadXLWcvKdvi0PqNaGXeWK56bo4S5Rex6vY06i9imrM5yy3vf7WLhCJRZ5EoIihgJTXvtczSTdXdMo4bRaIC8djVv9lSajMG8JlbrEMtJgz0WA3dzlJDut8K9sz5FN8T%2BRdoWp%2BsENOvJR3xWjQmZHeBIoXrvWYgNPuminvzUfmLUz9mpKY1ayuHvaSNRBhXaUE8cfnHLpm%2FHrSrE4uqOkvuTCNsZWaP9d73lTRNoJiDxmZLNVJfNvO6KHHNEz%2BQYfuV%2F1QvR7t6T6sbftE3PtwWen3l8xbgvI%2Fr%2FM3Jj9Az7Fg%2BwqRYn3yxS0mAVrUlsq4ZLRMj%2FUwRJj3H8V2%2B6jZKkSQyjNpnS%2FWdGwnFcCHWl%2FKS%2Fe9xBJlo9okp%2F%2F0p%2FLtyeylFbS2LA%2BE7rr6joenYsnsCW1aWKglf3QE0oLI8Ce2lPhL6MkKINIMLi8ocEGOqUBleNaT5U1UUqWDivKxezDVOXvbI9gYnkFCsw9lUbEcOVPN%2B7YJMGR2OX7XGxh9yDpPt%2FYwi9e34Z9LZvHcMelQWvmzIgt2v2yfijAlRSOwIUx0uQoZGmPOT3qctosDNUW4ePlzKLZPK8jndYqhLyBbfGwD8riFSD9Fj46nOg2H2wbaaYqpkcsELtySaMzRGGoQHvWmf5DsIMaadMqbQklgS0U3El%2B&X-Amz-Signature=28383f11209fb9e911d1d944d1ba6e4f50d309235e0d68c7272b18ca6a0dfae5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77E72RN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd7uTJowVhK36BUM7PTCyvSG4fZKv1GnWomPADKXcPPAiEA5i2ebSOKmC9B6nZktaTQfYqGYzSVmqAg9YzznRxTxTIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKAI6UXA8iQZxtFoqyrcAwp%2F6wWj8S8EbihtZH59OWqalqovTl6BQQgqe8O6tRK5uuqr1xykOxyY%2B5LCWk%2FAfrZQp7LBDfE3MNt%2FUAqKrzLbTTXs7czHY%2FJmb1w2aIpAAVLEAdeqJATsHkRE5eXbzlhsvphsL5U2BZq%2BOXadg7BOun3q%2FzGWmynod%2FLXoAyH%2BLcNQXDdNny25azkxj7Uu%2FOadXLWcvKdvi0PqNaGXeWK56bo4S5Rex6vY06i9imrM5yy3vf7WLhCJRZ5EoIihgJTXvtczSTdXdMo4bRaIC8djVv9lSajMG8JlbrEMtJgz0WA3dzlJDut8K9sz5FN8T%2BRdoWp%2BsENOvJR3xWjQmZHeBIoXrvWYgNPuminvzUfmLUz9mpKY1ayuHvaSNRBhXaUE8cfnHLpm%2FHrSrE4uqOkvuTCNsZWaP9d73lTRNoJiDxmZLNVJfNvO6KHHNEz%2BQYfuV%2F1QvR7t6T6sbftE3PtwWen3l8xbgvI%2Fr%2FM3Jj9Az7Fg%2BwqRYn3yxS0mAVrUlsq4ZLRMj%2FUwRJj3H8V2%2B6jZKkSQyjNpnS%2FWdGwnFcCHWl%2FKS%2Fe9xBJlo9okp%2F%2F0p%2FLtyeylFbS2LA%2BE7rr6joenYsnsCW1aWKglf3QE0oLI8Ce2lPhL6MkKINIMLi8ocEGOqUBleNaT5U1UUqWDivKxezDVOXvbI9gYnkFCsw9lUbEcOVPN%2B7YJMGR2OX7XGxh9yDpPt%2FYwi9e34Z9LZvHcMelQWvmzIgt2v2yfijAlRSOwIUx0uQoZGmPOT3qctosDNUW4ePlzKLZPK8jndYqhLyBbfGwD8riFSD9Fj46nOg2H2wbaaYqpkcsELtySaMzRGGoQHvWmf5DsIMaadMqbQklgS0U3El%2B&X-Amz-Signature=8df855941dfc8d3579a994591b2e3685a8041967480c1d7c060235a137d53e5a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77E72RN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd7uTJowVhK36BUM7PTCyvSG4fZKv1GnWomPADKXcPPAiEA5i2ebSOKmC9B6nZktaTQfYqGYzSVmqAg9YzznRxTxTIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKAI6UXA8iQZxtFoqyrcAwp%2F6wWj8S8EbihtZH59OWqalqovTl6BQQgqe8O6tRK5uuqr1xykOxyY%2B5LCWk%2FAfrZQp7LBDfE3MNt%2FUAqKrzLbTTXs7czHY%2FJmb1w2aIpAAVLEAdeqJATsHkRE5eXbzlhsvphsL5U2BZq%2BOXadg7BOun3q%2FzGWmynod%2FLXoAyH%2BLcNQXDdNny25azkxj7Uu%2FOadXLWcvKdvi0PqNaGXeWK56bo4S5Rex6vY06i9imrM5yy3vf7WLhCJRZ5EoIihgJTXvtczSTdXdMo4bRaIC8djVv9lSajMG8JlbrEMtJgz0WA3dzlJDut8K9sz5FN8T%2BRdoWp%2BsENOvJR3xWjQmZHeBIoXrvWYgNPuminvzUfmLUz9mpKY1ayuHvaSNRBhXaUE8cfnHLpm%2FHrSrE4uqOkvuTCNsZWaP9d73lTRNoJiDxmZLNVJfNvO6KHHNEz%2BQYfuV%2F1QvR7t6T6sbftE3PtwWen3l8xbgvI%2Fr%2FM3Jj9Az7Fg%2BwqRYn3yxS0mAVrUlsq4ZLRMj%2FUwRJj3H8V2%2B6jZKkSQyjNpnS%2FWdGwnFcCHWl%2FKS%2Fe9xBJlo9okp%2F%2F0p%2FLtyeylFbS2LA%2BE7rr6joenYsnsCW1aWKglf3QE0oLI8Ce2lPhL6MkKINIMLi8ocEGOqUBleNaT5U1UUqWDivKxezDVOXvbI9gYnkFCsw9lUbEcOVPN%2B7YJMGR2OX7XGxh9yDpPt%2FYwi9e34Z9LZvHcMelQWvmzIgt2v2yfijAlRSOwIUx0uQoZGmPOT3qctosDNUW4ePlzKLZPK8jndYqhLyBbfGwD8riFSD9Fj46nOg2H2wbaaYqpkcsELtySaMzRGGoQHvWmf5DsIMaadMqbQklgS0U3El%2B&X-Amz-Signature=104d5f4d25628ef3ac5e1904223515d706be92b6721bffd6c1a57cab4b9a58d4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77E72RN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd7uTJowVhK36BUM7PTCyvSG4fZKv1GnWomPADKXcPPAiEA5i2ebSOKmC9B6nZktaTQfYqGYzSVmqAg9YzznRxTxTIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKAI6UXA8iQZxtFoqyrcAwp%2F6wWj8S8EbihtZH59OWqalqovTl6BQQgqe8O6tRK5uuqr1xykOxyY%2B5LCWk%2FAfrZQp7LBDfE3MNt%2FUAqKrzLbTTXs7czHY%2FJmb1w2aIpAAVLEAdeqJATsHkRE5eXbzlhsvphsL5U2BZq%2BOXadg7BOun3q%2FzGWmynod%2FLXoAyH%2BLcNQXDdNny25azkxj7Uu%2FOadXLWcvKdvi0PqNaGXeWK56bo4S5Rex6vY06i9imrM5yy3vf7WLhCJRZ5EoIihgJTXvtczSTdXdMo4bRaIC8djVv9lSajMG8JlbrEMtJgz0WA3dzlJDut8K9sz5FN8T%2BRdoWp%2BsENOvJR3xWjQmZHeBIoXrvWYgNPuminvzUfmLUz9mpKY1ayuHvaSNRBhXaUE8cfnHLpm%2FHrSrE4uqOkvuTCNsZWaP9d73lTRNoJiDxmZLNVJfNvO6KHHNEz%2BQYfuV%2F1QvR7t6T6sbftE3PtwWen3l8xbgvI%2Fr%2FM3Jj9Az7Fg%2BwqRYn3yxS0mAVrUlsq4ZLRMj%2FUwRJj3H8V2%2B6jZKkSQyjNpnS%2FWdGwnFcCHWl%2FKS%2Fe9xBJlo9okp%2F%2F0p%2FLtyeylFbS2LA%2BE7rr6joenYsnsCW1aWKglf3QE0oLI8Ce2lPhL6MkKINIMLi8ocEGOqUBleNaT5U1UUqWDivKxezDVOXvbI9gYnkFCsw9lUbEcOVPN%2B7YJMGR2OX7XGxh9yDpPt%2FYwi9e34Z9LZvHcMelQWvmzIgt2v2yfijAlRSOwIUx0uQoZGmPOT3qctosDNUW4ePlzKLZPK8jndYqhLyBbfGwD8riFSD9Fj46nOg2H2wbaaYqpkcsELtySaMzRGGoQHvWmf5DsIMaadMqbQklgS0U3El%2B&X-Amz-Signature=086b84ea8d7bd33301fe700bfcd58347c77219533641f3fb9f9b2dcf7a50540d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77E72RN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd7uTJowVhK36BUM7PTCyvSG4fZKv1GnWomPADKXcPPAiEA5i2ebSOKmC9B6nZktaTQfYqGYzSVmqAg9YzznRxTxTIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKAI6UXA8iQZxtFoqyrcAwp%2F6wWj8S8EbihtZH59OWqalqovTl6BQQgqe8O6tRK5uuqr1xykOxyY%2B5LCWk%2FAfrZQp7LBDfE3MNt%2FUAqKrzLbTTXs7czHY%2FJmb1w2aIpAAVLEAdeqJATsHkRE5eXbzlhsvphsL5U2BZq%2BOXadg7BOun3q%2FzGWmynod%2FLXoAyH%2BLcNQXDdNny25azkxj7Uu%2FOadXLWcvKdvi0PqNaGXeWK56bo4S5Rex6vY06i9imrM5yy3vf7WLhCJRZ5EoIihgJTXvtczSTdXdMo4bRaIC8djVv9lSajMG8JlbrEMtJgz0WA3dzlJDut8K9sz5FN8T%2BRdoWp%2BsENOvJR3xWjQmZHeBIoXrvWYgNPuminvzUfmLUz9mpKY1ayuHvaSNRBhXaUE8cfnHLpm%2FHrSrE4uqOkvuTCNsZWaP9d73lTRNoJiDxmZLNVJfNvO6KHHNEz%2BQYfuV%2F1QvR7t6T6sbftE3PtwWen3l8xbgvI%2Fr%2FM3Jj9Az7Fg%2BwqRYn3yxS0mAVrUlsq4ZLRMj%2FUwRJj3H8V2%2B6jZKkSQyjNpnS%2FWdGwnFcCHWl%2FKS%2Fe9xBJlo9okp%2F%2F0p%2FLtyeylFbS2LA%2BE7rr6joenYsnsCW1aWKglf3QE0oLI8Ce2lPhL6MkKINIMLi8ocEGOqUBleNaT5U1UUqWDivKxezDVOXvbI9gYnkFCsw9lUbEcOVPN%2B7YJMGR2OX7XGxh9yDpPt%2FYwi9e34Z9LZvHcMelQWvmzIgt2v2yfijAlRSOwIUx0uQoZGmPOT3qctosDNUW4ePlzKLZPK8jndYqhLyBbfGwD8riFSD9Fj46nOg2H2wbaaYqpkcsELtySaMzRGGoQHvWmf5DsIMaadMqbQklgS0U3El%2B&X-Amz-Signature=50800d4cb4e1d92e83bde57a496646ee13c3055482ab0556656af68960ba3595&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77E72RN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd7uTJowVhK36BUM7PTCyvSG4fZKv1GnWomPADKXcPPAiEA5i2ebSOKmC9B6nZktaTQfYqGYzSVmqAg9YzznRxTxTIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKAI6UXA8iQZxtFoqyrcAwp%2F6wWj8S8EbihtZH59OWqalqovTl6BQQgqe8O6tRK5uuqr1xykOxyY%2B5LCWk%2FAfrZQp7LBDfE3MNt%2FUAqKrzLbTTXs7czHY%2FJmb1w2aIpAAVLEAdeqJATsHkRE5eXbzlhsvphsL5U2BZq%2BOXadg7BOun3q%2FzGWmynod%2FLXoAyH%2BLcNQXDdNny25azkxj7Uu%2FOadXLWcvKdvi0PqNaGXeWK56bo4S5Rex6vY06i9imrM5yy3vf7WLhCJRZ5EoIihgJTXvtczSTdXdMo4bRaIC8djVv9lSajMG8JlbrEMtJgz0WA3dzlJDut8K9sz5FN8T%2BRdoWp%2BsENOvJR3xWjQmZHeBIoXrvWYgNPuminvzUfmLUz9mpKY1ayuHvaSNRBhXaUE8cfnHLpm%2FHrSrE4uqOkvuTCNsZWaP9d73lTRNoJiDxmZLNVJfNvO6KHHNEz%2BQYfuV%2F1QvR7t6T6sbftE3PtwWen3l8xbgvI%2Fr%2FM3Jj9Az7Fg%2BwqRYn3yxS0mAVrUlsq4ZLRMj%2FUwRJj3H8V2%2B6jZKkSQyjNpnS%2FWdGwnFcCHWl%2FKS%2Fe9xBJlo9okp%2F%2F0p%2FLtyeylFbS2LA%2BE7rr6joenYsnsCW1aWKglf3QE0oLI8Ce2lPhL6MkKINIMLi8ocEGOqUBleNaT5U1UUqWDivKxezDVOXvbI9gYnkFCsw9lUbEcOVPN%2B7YJMGR2OX7XGxh9yDpPt%2FYwi9e34Z9LZvHcMelQWvmzIgt2v2yfijAlRSOwIUx0uQoZGmPOT3qctosDNUW4ePlzKLZPK8jndYqhLyBbfGwD8riFSD9Fj46nOg2H2wbaaYqpkcsELtySaMzRGGoQHvWmf5DsIMaadMqbQklgS0U3El%2B&X-Amz-Signature=d05d2f075ccdba001b6ab08b9f839b88afd3d8cda8eb15e6184db74e4741d3e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77E72RN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd7uTJowVhK36BUM7PTCyvSG4fZKv1GnWomPADKXcPPAiEA5i2ebSOKmC9B6nZktaTQfYqGYzSVmqAg9YzznRxTxTIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKAI6UXA8iQZxtFoqyrcAwp%2F6wWj8S8EbihtZH59OWqalqovTl6BQQgqe8O6tRK5uuqr1xykOxyY%2B5LCWk%2FAfrZQp7LBDfE3MNt%2FUAqKrzLbTTXs7czHY%2FJmb1w2aIpAAVLEAdeqJATsHkRE5eXbzlhsvphsL5U2BZq%2BOXadg7BOun3q%2FzGWmynod%2FLXoAyH%2BLcNQXDdNny25azkxj7Uu%2FOadXLWcvKdvi0PqNaGXeWK56bo4S5Rex6vY06i9imrM5yy3vf7WLhCJRZ5EoIihgJTXvtczSTdXdMo4bRaIC8djVv9lSajMG8JlbrEMtJgz0WA3dzlJDut8K9sz5FN8T%2BRdoWp%2BsENOvJR3xWjQmZHeBIoXrvWYgNPuminvzUfmLUz9mpKY1ayuHvaSNRBhXaUE8cfnHLpm%2FHrSrE4uqOkvuTCNsZWaP9d73lTRNoJiDxmZLNVJfNvO6KHHNEz%2BQYfuV%2F1QvR7t6T6sbftE3PtwWen3l8xbgvI%2Fr%2FM3Jj9Az7Fg%2BwqRYn3yxS0mAVrUlsq4ZLRMj%2FUwRJj3H8V2%2B6jZKkSQyjNpnS%2FWdGwnFcCHWl%2FKS%2Fe9xBJlo9okp%2F%2F0p%2FLtyeylFbS2LA%2BE7rr6joenYsnsCW1aWKglf3QE0oLI8Ce2lPhL6MkKINIMLi8ocEGOqUBleNaT5U1UUqWDivKxezDVOXvbI9gYnkFCsw9lUbEcOVPN%2B7YJMGR2OX7XGxh9yDpPt%2FYwi9e34Z9LZvHcMelQWvmzIgt2v2yfijAlRSOwIUx0uQoZGmPOT3qctosDNUW4ePlzKLZPK8jndYqhLyBbfGwD8riFSD9Fj46nOg2H2wbaaYqpkcsELtySaMzRGGoQHvWmf5DsIMaadMqbQklgS0U3El%2B&X-Amz-Signature=c3f3e2af26cad54ed7bf26aac41864c5bde97009d38656e9970cf8644697ba98&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77E72RN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd7uTJowVhK36BUM7PTCyvSG4fZKv1GnWomPADKXcPPAiEA5i2ebSOKmC9B6nZktaTQfYqGYzSVmqAg9YzznRxTxTIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKAI6UXA8iQZxtFoqyrcAwp%2F6wWj8S8EbihtZH59OWqalqovTl6BQQgqe8O6tRK5uuqr1xykOxyY%2B5LCWk%2FAfrZQp7LBDfE3MNt%2FUAqKrzLbTTXs7czHY%2FJmb1w2aIpAAVLEAdeqJATsHkRE5eXbzlhsvphsL5U2BZq%2BOXadg7BOun3q%2FzGWmynod%2FLXoAyH%2BLcNQXDdNny25azkxj7Uu%2FOadXLWcvKdvi0PqNaGXeWK56bo4S5Rex6vY06i9imrM5yy3vf7WLhCJRZ5EoIihgJTXvtczSTdXdMo4bRaIC8djVv9lSajMG8JlbrEMtJgz0WA3dzlJDut8K9sz5FN8T%2BRdoWp%2BsENOvJR3xWjQmZHeBIoXrvWYgNPuminvzUfmLUz9mpKY1ayuHvaSNRBhXaUE8cfnHLpm%2FHrSrE4uqOkvuTCNsZWaP9d73lTRNoJiDxmZLNVJfNvO6KHHNEz%2BQYfuV%2F1QvR7t6T6sbftE3PtwWen3l8xbgvI%2Fr%2FM3Jj9Az7Fg%2BwqRYn3yxS0mAVrUlsq4ZLRMj%2FUwRJj3H8V2%2B6jZKkSQyjNpnS%2FWdGwnFcCHWl%2FKS%2Fe9xBJlo9okp%2F%2F0p%2FLtyeylFbS2LA%2BE7rr6joenYsnsCW1aWKglf3QE0oLI8Ce2lPhL6MkKINIMLi8ocEGOqUBleNaT5U1UUqWDivKxezDVOXvbI9gYnkFCsw9lUbEcOVPN%2B7YJMGR2OX7XGxh9yDpPt%2FYwi9e34Z9LZvHcMelQWvmzIgt2v2yfijAlRSOwIUx0uQoZGmPOT3qctosDNUW4ePlzKLZPK8jndYqhLyBbfGwD8riFSD9Fj46nOg2H2wbaaYqpkcsELtySaMzRGGoQHvWmf5DsIMaadMqbQklgS0U3El%2B&X-Amz-Signature=b420cc7bc921c79a877d15c6a18fa3df7324bf5d6b8573d4531f5f07dd1a5e49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
