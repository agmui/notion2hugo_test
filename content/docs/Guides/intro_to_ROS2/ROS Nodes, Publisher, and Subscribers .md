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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEW5ZT7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDaeRNXB50QDmZF5vB8gsv3qGXUlF3RJCfWhGF6L3iSHwIhANuDakt7FhyF%2FAYDvKSkh%2FMl6oWMSlZaM45VKf3Z2t3cKv8DCEgQABoMNjM3NDIzMTgzODA1IgxScHu9r3TRQNjWVNYq3APwR8xNkvyDRuIZs4scj8qWqSjFVDf7iFLqK0PjbWHBuyw72axOgpxvnzgSimp5PaiAwPigzy1B8EHWBSFJ5kBncciiCcrZx71hkhRUai9s28NNRzeoarikjCpn%2FowKnBzhM9%2B6vQKMvzjroPuKffclvCLCYe%2FFe31Vp2VyApuWYqtDTpdpaCvt2HgPD5zFfLd7dXpX4c9PHb8kKQzOd3NQXj90%2BTMCplTmdwpqtUqP%2BYMoyJQOTmpFYA5hX%2FGVsaobzA%2BO%2Bl%2FYGi3COKViXDEV6MGFD1UaTK6F8pLOBTacroHXjFVvBGKBES%2FIPryml6%2B%2F8DCmMDlns8xEA4TQI0oxREvdsluCk9BqJRxUCoVx6EXyWIrP31JCQsBVMzUpdgfTVMPagzt6oX1F9noYeJalX0OwbM77lA5U4q2X5j%2B%2BwEkMTycVNdGXgoXQpyHrEhNSgLniVl%2Fmivi1XHBfdYOhtoGA28%2FGgox0CQnbzxjjuWuq0Okq3pX0tnxb2RaQsGNKT6h2c%2BE91UbXBSpULaBc%2FGuJ302SdS2t6QmS8xff73zxNGy4q9nLvqPHwhonBxSM1AjV5vwPZyciajGU0ONqnLMatD%2BOe3yNb0wo%2BIPYFhf0enBfV%2Fx5Tw1pfTCUkcPEBjqkAWCPz2Xi8EW8TdAnEiXJdLUUMt54AMPerzHmCmWRIMQTMUI5WxtMfzQQSN7PM9l1bUMxKGOpCanRd79wQCpYP3NOfdBAE%2Fh9opuXw%2FPRFGMDHW96dNvAcz%2BLTwWCCreleQLCwMCUotIu2sQ867N2QAxWUkt%2BrriqFBy9bwZOHdpsLpdnTemKn7CYtZPBUBL1YVKwBHyc1d7ncLmTAO%2B%2BSu7k9NEj&X-Amz-Signature=c6657e62397b571c2cc8131330ffc7fb4fdf4bb4f0b762fb975e8a4729c6e98f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEW5ZT7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDaeRNXB50QDmZF5vB8gsv3qGXUlF3RJCfWhGF6L3iSHwIhANuDakt7FhyF%2FAYDvKSkh%2FMl6oWMSlZaM45VKf3Z2t3cKv8DCEgQABoMNjM3NDIzMTgzODA1IgxScHu9r3TRQNjWVNYq3APwR8xNkvyDRuIZs4scj8qWqSjFVDf7iFLqK0PjbWHBuyw72axOgpxvnzgSimp5PaiAwPigzy1B8EHWBSFJ5kBncciiCcrZx71hkhRUai9s28NNRzeoarikjCpn%2FowKnBzhM9%2B6vQKMvzjroPuKffclvCLCYe%2FFe31Vp2VyApuWYqtDTpdpaCvt2HgPD5zFfLd7dXpX4c9PHb8kKQzOd3NQXj90%2BTMCplTmdwpqtUqP%2BYMoyJQOTmpFYA5hX%2FGVsaobzA%2BO%2Bl%2FYGi3COKViXDEV6MGFD1UaTK6F8pLOBTacroHXjFVvBGKBES%2FIPryml6%2B%2F8DCmMDlns8xEA4TQI0oxREvdsluCk9BqJRxUCoVx6EXyWIrP31JCQsBVMzUpdgfTVMPagzt6oX1F9noYeJalX0OwbM77lA5U4q2X5j%2B%2BwEkMTycVNdGXgoXQpyHrEhNSgLniVl%2Fmivi1XHBfdYOhtoGA28%2FGgox0CQnbzxjjuWuq0Okq3pX0tnxb2RaQsGNKT6h2c%2BE91UbXBSpULaBc%2FGuJ302SdS2t6QmS8xff73zxNGy4q9nLvqPHwhonBxSM1AjV5vwPZyciajGU0ONqnLMatD%2BOe3yNb0wo%2BIPYFhf0enBfV%2Fx5Tw1pfTCUkcPEBjqkAWCPz2Xi8EW8TdAnEiXJdLUUMt54AMPerzHmCmWRIMQTMUI5WxtMfzQQSN7PM9l1bUMxKGOpCanRd79wQCpYP3NOfdBAE%2Fh9opuXw%2FPRFGMDHW96dNvAcz%2BLTwWCCreleQLCwMCUotIu2sQ867N2QAxWUkt%2BrriqFBy9bwZOHdpsLpdnTemKn7CYtZPBUBL1YVKwBHyc1d7ncLmTAO%2B%2BSu7k9NEj&X-Amz-Signature=2bb336017b1b710341b1a4fa3cd25bce1e99b7b73e56240b99ec6baf516dde5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEW5ZT7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDaeRNXB50QDmZF5vB8gsv3qGXUlF3RJCfWhGF6L3iSHwIhANuDakt7FhyF%2FAYDvKSkh%2FMl6oWMSlZaM45VKf3Z2t3cKv8DCEgQABoMNjM3NDIzMTgzODA1IgxScHu9r3TRQNjWVNYq3APwR8xNkvyDRuIZs4scj8qWqSjFVDf7iFLqK0PjbWHBuyw72axOgpxvnzgSimp5PaiAwPigzy1B8EHWBSFJ5kBncciiCcrZx71hkhRUai9s28NNRzeoarikjCpn%2FowKnBzhM9%2B6vQKMvzjroPuKffclvCLCYe%2FFe31Vp2VyApuWYqtDTpdpaCvt2HgPD5zFfLd7dXpX4c9PHb8kKQzOd3NQXj90%2BTMCplTmdwpqtUqP%2BYMoyJQOTmpFYA5hX%2FGVsaobzA%2BO%2Bl%2FYGi3COKViXDEV6MGFD1UaTK6F8pLOBTacroHXjFVvBGKBES%2FIPryml6%2B%2F8DCmMDlns8xEA4TQI0oxREvdsluCk9BqJRxUCoVx6EXyWIrP31JCQsBVMzUpdgfTVMPagzt6oX1F9noYeJalX0OwbM77lA5U4q2X5j%2B%2BwEkMTycVNdGXgoXQpyHrEhNSgLniVl%2Fmivi1XHBfdYOhtoGA28%2FGgox0CQnbzxjjuWuq0Okq3pX0tnxb2RaQsGNKT6h2c%2BE91UbXBSpULaBc%2FGuJ302SdS2t6QmS8xff73zxNGy4q9nLvqPHwhonBxSM1AjV5vwPZyciajGU0ONqnLMatD%2BOe3yNb0wo%2BIPYFhf0enBfV%2Fx5Tw1pfTCUkcPEBjqkAWCPz2Xi8EW8TdAnEiXJdLUUMt54AMPerzHmCmWRIMQTMUI5WxtMfzQQSN7PM9l1bUMxKGOpCanRd79wQCpYP3NOfdBAE%2Fh9opuXw%2FPRFGMDHW96dNvAcz%2BLTwWCCreleQLCwMCUotIu2sQ867N2QAxWUkt%2BrriqFBy9bwZOHdpsLpdnTemKn7CYtZPBUBL1YVKwBHyc1d7ncLmTAO%2B%2BSu7k9NEj&X-Amz-Signature=81254d9f2fa460e5273b71c396ef2811a61d4eed6e83ac812c905039827a17a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEW5ZT7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDaeRNXB50QDmZF5vB8gsv3qGXUlF3RJCfWhGF6L3iSHwIhANuDakt7FhyF%2FAYDvKSkh%2FMl6oWMSlZaM45VKf3Z2t3cKv8DCEgQABoMNjM3NDIzMTgzODA1IgxScHu9r3TRQNjWVNYq3APwR8xNkvyDRuIZs4scj8qWqSjFVDf7iFLqK0PjbWHBuyw72axOgpxvnzgSimp5PaiAwPigzy1B8EHWBSFJ5kBncciiCcrZx71hkhRUai9s28NNRzeoarikjCpn%2FowKnBzhM9%2B6vQKMvzjroPuKffclvCLCYe%2FFe31Vp2VyApuWYqtDTpdpaCvt2HgPD5zFfLd7dXpX4c9PHb8kKQzOd3NQXj90%2BTMCplTmdwpqtUqP%2BYMoyJQOTmpFYA5hX%2FGVsaobzA%2BO%2Bl%2FYGi3COKViXDEV6MGFD1UaTK6F8pLOBTacroHXjFVvBGKBES%2FIPryml6%2B%2F8DCmMDlns8xEA4TQI0oxREvdsluCk9BqJRxUCoVx6EXyWIrP31JCQsBVMzUpdgfTVMPagzt6oX1F9noYeJalX0OwbM77lA5U4q2X5j%2B%2BwEkMTycVNdGXgoXQpyHrEhNSgLniVl%2Fmivi1XHBfdYOhtoGA28%2FGgox0CQnbzxjjuWuq0Okq3pX0tnxb2RaQsGNKT6h2c%2BE91UbXBSpULaBc%2FGuJ302SdS2t6QmS8xff73zxNGy4q9nLvqPHwhonBxSM1AjV5vwPZyciajGU0ONqnLMatD%2BOe3yNb0wo%2BIPYFhf0enBfV%2Fx5Tw1pfTCUkcPEBjqkAWCPz2Xi8EW8TdAnEiXJdLUUMt54AMPerzHmCmWRIMQTMUI5WxtMfzQQSN7PM9l1bUMxKGOpCanRd79wQCpYP3NOfdBAE%2Fh9opuXw%2FPRFGMDHW96dNvAcz%2BLTwWCCreleQLCwMCUotIu2sQ867N2QAxWUkt%2BrriqFBy9bwZOHdpsLpdnTemKn7CYtZPBUBL1YVKwBHyc1d7ncLmTAO%2B%2BSu7k9NEj&X-Amz-Signature=afe39e94a7119c7cbcdee9a6bea4b9e4d88215c3c4f52b1db64f777f33f6fae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEW5ZT7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDaeRNXB50QDmZF5vB8gsv3qGXUlF3RJCfWhGF6L3iSHwIhANuDakt7FhyF%2FAYDvKSkh%2FMl6oWMSlZaM45VKf3Z2t3cKv8DCEgQABoMNjM3NDIzMTgzODA1IgxScHu9r3TRQNjWVNYq3APwR8xNkvyDRuIZs4scj8qWqSjFVDf7iFLqK0PjbWHBuyw72axOgpxvnzgSimp5PaiAwPigzy1B8EHWBSFJ5kBncciiCcrZx71hkhRUai9s28NNRzeoarikjCpn%2FowKnBzhM9%2B6vQKMvzjroPuKffclvCLCYe%2FFe31Vp2VyApuWYqtDTpdpaCvt2HgPD5zFfLd7dXpX4c9PHb8kKQzOd3NQXj90%2BTMCplTmdwpqtUqP%2BYMoyJQOTmpFYA5hX%2FGVsaobzA%2BO%2Bl%2FYGi3COKViXDEV6MGFD1UaTK6F8pLOBTacroHXjFVvBGKBES%2FIPryml6%2B%2F8DCmMDlns8xEA4TQI0oxREvdsluCk9BqJRxUCoVx6EXyWIrP31JCQsBVMzUpdgfTVMPagzt6oX1F9noYeJalX0OwbM77lA5U4q2X5j%2B%2BwEkMTycVNdGXgoXQpyHrEhNSgLniVl%2Fmivi1XHBfdYOhtoGA28%2FGgox0CQnbzxjjuWuq0Okq3pX0tnxb2RaQsGNKT6h2c%2BE91UbXBSpULaBc%2FGuJ302SdS2t6QmS8xff73zxNGy4q9nLvqPHwhonBxSM1AjV5vwPZyciajGU0ONqnLMatD%2BOe3yNb0wo%2BIPYFhf0enBfV%2Fx5Tw1pfTCUkcPEBjqkAWCPz2Xi8EW8TdAnEiXJdLUUMt54AMPerzHmCmWRIMQTMUI5WxtMfzQQSN7PM9l1bUMxKGOpCanRd79wQCpYP3NOfdBAE%2Fh9opuXw%2FPRFGMDHW96dNvAcz%2BLTwWCCreleQLCwMCUotIu2sQ867N2QAxWUkt%2BrriqFBy9bwZOHdpsLpdnTemKn7CYtZPBUBL1YVKwBHyc1d7ncLmTAO%2B%2BSu7k9NEj&X-Amz-Signature=510fd64229316df71fc1ba7723a7298e84052f5840b7c5b51827369dd16d54b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEW5ZT7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDaeRNXB50QDmZF5vB8gsv3qGXUlF3RJCfWhGF6L3iSHwIhANuDakt7FhyF%2FAYDvKSkh%2FMl6oWMSlZaM45VKf3Z2t3cKv8DCEgQABoMNjM3NDIzMTgzODA1IgxScHu9r3TRQNjWVNYq3APwR8xNkvyDRuIZs4scj8qWqSjFVDf7iFLqK0PjbWHBuyw72axOgpxvnzgSimp5PaiAwPigzy1B8EHWBSFJ5kBncciiCcrZx71hkhRUai9s28NNRzeoarikjCpn%2FowKnBzhM9%2B6vQKMvzjroPuKffclvCLCYe%2FFe31Vp2VyApuWYqtDTpdpaCvt2HgPD5zFfLd7dXpX4c9PHb8kKQzOd3NQXj90%2BTMCplTmdwpqtUqP%2BYMoyJQOTmpFYA5hX%2FGVsaobzA%2BO%2Bl%2FYGi3COKViXDEV6MGFD1UaTK6F8pLOBTacroHXjFVvBGKBES%2FIPryml6%2B%2F8DCmMDlns8xEA4TQI0oxREvdsluCk9BqJRxUCoVx6EXyWIrP31JCQsBVMzUpdgfTVMPagzt6oX1F9noYeJalX0OwbM77lA5U4q2X5j%2B%2BwEkMTycVNdGXgoXQpyHrEhNSgLniVl%2Fmivi1XHBfdYOhtoGA28%2FGgox0CQnbzxjjuWuq0Okq3pX0tnxb2RaQsGNKT6h2c%2BE91UbXBSpULaBc%2FGuJ302SdS2t6QmS8xff73zxNGy4q9nLvqPHwhonBxSM1AjV5vwPZyciajGU0ONqnLMatD%2BOe3yNb0wo%2BIPYFhf0enBfV%2Fx5Tw1pfTCUkcPEBjqkAWCPz2Xi8EW8TdAnEiXJdLUUMt54AMPerzHmCmWRIMQTMUI5WxtMfzQQSN7PM9l1bUMxKGOpCanRd79wQCpYP3NOfdBAE%2Fh9opuXw%2FPRFGMDHW96dNvAcz%2BLTwWCCreleQLCwMCUotIu2sQ867N2QAxWUkt%2BrriqFBy9bwZOHdpsLpdnTemKn7CYtZPBUBL1YVKwBHyc1d7ncLmTAO%2B%2BSu7k9NEj&X-Amz-Signature=89e15cf6cc7aed5d8163612b0ac7633bfe31f6adfa84dea9c16547f1a8ab1329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEW5ZT7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDaeRNXB50QDmZF5vB8gsv3qGXUlF3RJCfWhGF6L3iSHwIhANuDakt7FhyF%2FAYDvKSkh%2FMl6oWMSlZaM45VKf3Z2t3cKv8DCEgQABoMNjM3NDIzMTgzODA1IgxScHu9r3TRQNjWVNYq3APwR8xNkvyDRuIZs4scj8qWqSjFVDf7iFLqK0PjbWHBuyw72axOgpxvnzgSimp5PaiAwPigzy1B8EHWBSFJ5kBncciiCcrZx71hkhRUai9s28NNRzeoarikjCpn%2FowKnBzhM9%2B6vQKMvzjroPuKffclvCLCYe%2FFe31Vp2VyApuWYqtDTpdpaCvt2HgPD5zFfLd7dXpX4c9PHb8kKQzOd3NQXj90%2BTMCplTmdwpqtUqP%2BYMoyJQOTmpFYA5hX%2FGVsaobzA%2BO%2Bl%2FYGi3COKViXDEV6MGFD1UaTK6F8pLOBTacroHXjFVvBGKBES%2FIPryml6%2B%2F8DCmMDlns8xEA4TQI0oxREvdsluCk9BqJRxUCoVx6EXyWIrP31JCQsBVMzUpdgfTVMPagzt6oX1F9noYeJalX0OwbM77lA5U4q2X5j%2B%2BwEkMTycVNdGXgoXQpyHrEhNSgLniVl%2Fmivi1XHBfdYOhtoGA28%2FGgox0CQnbzxjjuWuq0Okq3pX0tnxb2RaQsGNKT6h2c%2BE91UbXBSpULaBc%2FGuJ302SdS2t6QmS8xff73zxNGy4q9nLvqPHwhonBxSM1AjV5vwPZyciajGU0ONqnLMatD%2BOe3yNb0wo%2BIPYFhf0enBfV%2Fx5Tw1pfTCUkcPEBjqkAWCPz2Xi8EW8TdAnEiXJdLUUMt54AMPerzHmCmWRIMQTMUI5WxtMfzQQSN7PM9l1bUMxKGOpCanRd79wQCpYP3NOfdBAE%2Fh9opuXw%2FPRFGMDHW96dNvAcz%2BLTwWCCreleQLCwMCUotIu2sQ867N2QAxWUkt%2BrriqFBy9bwZOHdpsLpdnTemKn7CYtZPBUBL1YVKwBHyc1d7ncLmTAO%2B%2BSu7k9NEj&X-Amz-Signature=1277ac714edd054fa031e16ae570f1fe5238847afe723329d797e455ee71116f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEW5ZT7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDaeRNXB50QDmZF5vB8gsv3qGXUlF3RJCfWhGF6L3iSHwIhANuDakt7FhyF%2FAYDvKSkh%2FMl6oWMSlZaM45VKf3Z2t3cKv8DCEgQABoMNjM3NDIzMTgzODA1IgxScHu9r3TRQNjWVNYq3APwR8xNkvyDRuIZs4scj8qWqSjFVDf7iFLqK0PjbWHBuyw72axOgpxvnzgSimp5PaiAwPigzy1B8EHWBSFJ5kBncciiCcrZx71hkhRUai9s28NNRzeoarikjCpn%2FowKnBzhM9%2B6vQKMvzjroPuKffclvCLCYe%2FFe31Vp2VyApuWYqtDTpdpaCvt2HgPD5zFfLd7dXpX4c9PHb8kKQzOd3NQXj90%2BTMCplTmdwpqtUqP%2BYMoyJQOTmpFYA5hX%2FGVsaobzA%2BO%2Bl%2FYGi3COKViXDEV6MGFD1UaTK6F8pLOBTacroHXjFVvBGKBES%2FIPryml6%2B%2F8DCmMDlns8xEA4TQI0oxREvdsluCk9BqJRxUCoVx6EXyWIrP31JCQsBVMzUpdgfTVMPagzt6oX1F9noYeJalX0OwbM77lA5U4q2X5j%2B%2BwEkMTycVNdGXgoXQpyHrEhNSgLniVl%2Fmivi1XHBfdYOhtoGA28%2FGgox0CQnbzxjjuWuq0Okq3pX0tnxb2RaQsGNKT6h2c%2BE91UbXBSpULaBc%2FGuJ302SdS2t6QmS8xff73zxNGy4q9nLvqPHwhonBxSM1AjV5vwPZyciajGU0ONqnLMatD%2BOe3yNb0wo%2BIPYFhf0enBfV%2Fx5Tw1pfTCUkcPEBjqkAWCPz2Xi8EW8TdAnEiXJdLUUMt54AMPerzHmCmWRIMQTMUI5WxtMfzQQSN7PM9l1bUMxKGOpCanRd79wQCpYP3NOfdBAE%2Fh9opuXw%2FPRFGMDHW96dNvAcz%2BLTwWCCreleQLCwMCUotIu2sQ867N2QAxWUkt%2BrriqFBy9bwZOHdpsLpdnTemKn7CYtZPBUBL1YVKwBHyc1d7ncLmTAO%2B%2BSu7k9NEj&X-Amz-Signature=51b6246df18645328e9520f403b78a2f73403150255ebf6718aa28071f466805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
