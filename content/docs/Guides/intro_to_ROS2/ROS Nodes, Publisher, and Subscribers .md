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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHGLYHF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdhZnbWucnYOs1W5QaNoRHv2C552ymLaVUMaSMIvHCsAiA05lJjQDlrU7D1%2BTm%2Fkyd2SBOitQgey0G4RjBq1YmKYSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMInUR5%2B064jRKUSxJKtwDm1LXMG%2FbySG2%2B15WpmcQ%2BaijhLUeS6GCBxpRqGCEuLjwehCsSVMu2JQxW0GckP38oQeJP1oir2XHr0%2Bt0MRlxAW%2B6jAcyMAmI0HcevXuFivn%2B%2BdcXTpkbaqxPOhP2DDPRAtyEPWiY%2BTjPr3Ajs75pAJM4xk1fGMHuaDnDpicVJ%2BxNRkhsXd3NzTb918b2OJAmEKWnZQhEn1gOWbzWqA5ULGtlaSMvDLPPcxqGc9K9p5Xa0x6JHwylaQnwYaC2OUaT6HqViJTCQqQlL1Gw8qNLwtQQ6ULnhDpCwMwMvRWkx3INiWtKNN3uvH0%2FpzfTpvEPIOOEA97DIempzGtl5oYLfCBHRDxJ2omccEowpo1n4gjjS67nK%2F5ZYG6KwsrMSqDqdi8b1bUSR6iGs8stX7H0z0xlbVLQNXRraVG1iZdvQBlRnqT24zrpw%2FPCaDX39hEbTDFqwmFvkgATHr6QSXqQ2Tvd9UbbWvlUbHOZVm%2FEmwsb3ET1G3FYszEUtWf7Sv7bb%2BJ05tm1yHFgtcXDTtXqaF33m90b2xxO5pacLb%2F7OrcwhFlfF0AuNiYV2LKLYxjxmdiYare0Rqen7VgBvIbSMPgiaS7Ze4uqwwCg1AzBPxmhn%2BPqhcP45dDofgw0cL9vAY6pgGtDjoOauK%2F7n4W44tNg%2B9RMjop8WpT3yYUh32IqzggRj9Edt3CP82XSEJZRKO4AB%2BMiMHi2kVhR40pX8uaJEFU7LmWwvMq6OMmYPMsixqtHb9KlUmxh6XyThPG1zhx8ayJqhna4sZX0YdrZqULq2rMW4KCE3sWKLBf20BVrWju3HeZdDKHeybtMYmR%2B0s9Umr6bqt7OsdopYA%2FBOS1yrgPctS0bxA3&X-Amz-Signature=98d4ce783bfc2f5586de63b711df927304b1196a40e055424471a19bbd10871c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHGLYHF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdhZnbWucnYOs1W5QaNoRHv2C552ymLaVUMaSMIvHCsAiA05lJjQDlrU7D1%2BTm%2Fkyd2SBOitQgey0G4RjBq1YmKYSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMInUR5%2B064jRKUSxJKtwDm1LXMG%2FbySG2%2B15WpmcQ%2BaijhLUeS6GCBxpRqGCEuLjwehCsSVMu2JQxW0GckP38oQeJP1oir2XHr0%2Bt0MRlxAW%2B6jAcyMAmI0HcevXuFivn%2B%2BdcXTpkbaqxPOhP2DDPRAtyEPWiY%2BTjPr3Ajs75pAJM4xk1fGMHuaDnDpicVJ%2BxNRkhsXd3NzTb918b2OJAmEKWnZQhEn1gOWbzWqA5ULGtlaSMvDLPPcxqGc9K9p5Xa0x6JHwylaQnwYaC2OUaT6HqViJTCQqQlL1Gw8qNLwtQQ6ULnhDpCwMwMvRWkx3INiWtKNN3uvH0%2FpzfTpvEPIOOEA97DIempzGtl5oYLfCBHRDxJ2omccEowpo1n4gjjS67nK%2F5ZYG6KwsrMSqDqdi8b1bUSR6iGs8stX7H0z0xlbVLQNXRraVG1iZdvQBlRnqT24zrpw%2FPCaDX39hEbTDFqwmFvkgATHr6QSXqQ2Tvd9UbbWvlUbHOZVm%2FEmwsb3ET1G3FYszEUtWf7Sv7bb%2BJ05tm1yHFgtcXDTtXqaF33m90b2xxO5pacLb%2F7OrcwhFlfF0AuNiYV2LKLYxjxmdiYare0Rqen7VgBvIbSMPgiaS7Ze4uqwwCg1AzBPxmhn%2BPqhcP45dDofgw0cL9vAY6pgGtDjoOauK%2F7n4W44tNg%2B9RMjop8WpT3yYUh32IqzggRj9Edt3CP82XSEJZRKO4AB%2BMiMHi2kVhR40pX8uaJEFU7LmWwvMq6OMmYPMsixqtHb9KlUmxh6XyThPG1zhx8ayJqhna4sZX0YdrZqULq2rMW4KCE3sWKLBf20BVrWju3HeZdDKHeybtMYmR%2B0s9Umr6bqt7OsdopYA%2FBOS1yrgPctS0bxA3&X-Amz-Signature=b4fda42bca13f609ceb729a753307fbc3bcd592ff2ddc5dad6d1eb59bf3372fc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHGLYHF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdhZnbWucnYOs1W5QaNoRHv2C552ymLaVUMaSMIvHCsAiA05lJjQDlrU7D1%2BTm%2Fkyd2SBOitQgey0G4RjBq1YmKYSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMInUR5%2B064jRKUSxJKtwDm1LXMG%2FbySG2%2B15WpmcQ%2BaijhLUeS6GCBxpRqGCEuLjwehCsSVMu2JQxW0GckP38oQeJP1oir2XHr0%2Bt0MRlxAW%2B6jAcyMAmI0HcevXuFivn%2B%2BdcXTpkbaqxPOhP2DDPRAtyEPWiY%2BTjPr3Ajs75pAJM4xk1fGMHuaDnDpicVJ%2BxNRkhsXd3NzTb918b2OJAmEKWnZQhEn1gOWbzWqA5ULGtlaSMvDLPPcxqGc9K9p5Xa0x6JHwylaQnwYaC2OUaT6HqViJTCQqQlL1Gw8qNLwtQQ6ULnhDpCwMwMvRWkx3INiWtKNN3uvH0%2FpzfTpvEPIOOEA97DIempzGtl5oYLfCBHRDxJ2omccEowpo1n4gjjS67nK%2F5ZYG6KwsrMSqDqdi8b1bUSR6iGs8stX7H0z0xlbVLQNXRraVG1iZdvQBlRnqT24zrpw%2FPCaDX39hEbTDFqwmFvkgATHr6QSXqQ2Tvd9UbbWvlUbHOZVm%2FEmwsb3ET1G3FYszEUtWf7Sv7bb%2BJ05tm1yHFgtcXDTtXqaF33m90b2xxO5pacLb%2F7OrcwhFlfF0AuNiYV2LKLYxjxmdiYare0Rqen7VgBvIbSMPgiaS7Ze4uqwwCg1AzBPxmhn%2BPqhcP45dDofgw0cL9vAY6pgGtDjoOauK%2F7n4W44tNg%2B9RMjop8WpT3yYUh32IqzggRj9Edt3CP82XSEJZRKO4AB%2BMiMHi2kVhR40pX8uaJEFU7LmWwvMq6OMmYPMsixqtHb9KlUmxh6XyThPG1zhx8ayJqhna4sZX0YdrZqULq2rMW4KCE3sWKLBf20BVrWju3HeZdDKHeybtMYmR%2B0s9Umr6bqt7OsdopYA%2FBOS1yrgPctS0bxA3&X-Amz-Signature=c9494dc92dda5227e902348887c1716629e2d47a0684eb563ce53e9968c18845&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHGLYHF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdhZnbWucnYOs1W5QaNoRHv2C552ymLaVUMaSMIvHCsAiA05lJjQDlrU7D1%2BTm%2Fkyd2SBOitQgey0G4RjBq1YmKYSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMInUR5%2B064jRKUSxJKtwDm1LXMG%2FbySG2%2B15WpmcQ%2BaijhLUeS6GCBxpRqGCEuLjwehCsSVMu2JQxW0GckP38oQeJP1oir2XHr0%2Bt0MRlxAW%2B6jAcyMAmI0HcevXuFivn%2B%2BdcXTpkbaqxPOhP2DDPRAtyEPWiY%2BTjPr3Ajs75pAJM4xk1fGMHuaDnDpicVJ%2BxNRkhsXd3NzTb918b2OJAmEKWnZQhEn1gOWbzWqA5ULGtlaSMvDLPPcxqGc9K9p5Xa0x6JHwylaQnwYaC2OUaT6HqViJTCQqQlL1Gw8qNLwtQQ6ULnhDpCwMwMvRWkx3INiWtKNN3uvH0%2FpzfTpvEPIOOEA97DIempzGtl5oYLfCBHRDxJ2omccEowpo1n4gjjS67nK%2F5ZYG6KwsrMSqDqdi8b1bUSR6iGs8stX7H0z0xlbVLQNXRraVG1iZdvQBlRnqT24zrpw%2FPCaDX39hEbTDFqwmFvkgATHr6QSXqQ2Tvd9UbbWvlUbHOZVm%2FEmwsb3ET1G3FYszEUtWf7Sv7bb%2BJ05tm1yHFgtcXDTtXqaF33m90b2xxO5pacLb%2F7OrcwhFlfF0AuNiYV2LKLYxjxmdiYare0Rqen7VgBvIbSMPgiaS7Ze4uqwwCg1AzBPxmhn%2BPqhcP45dDofgw0cL9vAY6pgGtDjoOauK%2F7n4W44tNg%2B9RMjop8WpT3yYUh32IqzggRj9Edt3CP82XSEJZRKO4AB%2BMiMHi2kVhR40pX8uaJEFU7LmWwvMq6OMmYPMsixqtHb9KlUmxh6XyThPG1zhx8ayJqhna4sZX0YdrZqULq2rMW4KCE3sWKLBf20BVrWju3HeZdDKHeybtMYmR%2B0s9Umr6bqt7OsdopYA%2FBOS1yrgPctS0bxA3&X-Amz-Signature=2c3491ace2cb8c405a01800df3adf3eb8c5e4fd200bec8a0f13966635ee60dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHGLYHF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdhZnbWucnYOs1W5QaNoRHv2C552ymLaVUMaSMIvHCsAiA05lJjQDlrU7D1%2BTm%2Fkyd2SBOitQgey0G4RjBq1YmKYSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMInUR5%2B064jRKUSxJKtwDm1LXMG%2FbySG2%2B15WpmcQ%2BaijhLUeS6GCBxpRqGCEuLjwehCsSVMu2JQxW0GckP38oQeJP1oir2XHr0%2Bt0MRlxAW%2B6jAcyMAmI0HcevXuFivn%2B%2BdcXTpkbaqxPOhP2DDPRAtyEPWiY%2BTjPr3Ajs75pAJM4xk1fGMHuaDnDpicVJ%2BxNRkhsXd3NzTb918b2OJAmEKWnZQhEn1gOWbzWqA5ULGtlaSMvDLPPcxqGc9K9p5Xa0x6JHwylaQnwYaC2OUaT6HqViJTCQqQlL1Gw8qNLwtQQ6ULnhDpCwMwMvRWkx3INiWtKNN3uvH0%2FpzfTpvEPIOOEA97DIempzGtl5oYLfCBHRDxJ2omccEowpo1n4gjjS67nK%2F5ZYG6KwsrMSqDqdi8b1bUSR6iGs8stX7H0z0xlbVLQNXRraVG1iZdvQBlRnqT24zrpw%2FPCaDX39hEbTDFqwmFvkgATHr6QSXqQ2Tvd9UbbWvlUbHOZVm%2FEmwsb3ET1G3FYszEUtWf7Sv7bb%2BJ05tm1yHFgtcXDTtXqaF33m90b2xxO5pacLb%2F7OrcwhFlfF0AuNiYV2LKLYxjxmdiYare0Rqen7VgBvIbSMPgiaS7Ze4uqwwCg1AzBPxmhn%2BPqhcP45dDofgw0cL9vAY6pgGtDjoOauK%2F7n4W44tNg%2B9RMjop8WpT3yYUh32IqzggRj9Edt3CP82XSEJZRKO4AB%2BMiMHi2kVhR40pX8uaJEFU7LmWwvMq6OMmYPMsixqtHb9KlUmxh6XyThPG1zhx8ayJqhna4sZX0YdrZqULq2rMW4KCE3sWKLBf20BVrWju3HeZdDKHeybtMYmR%2B0s9Umr6bqt7OsdopYA%2FBOS1yrgPctS0bxA3&X-Amz-Signature=2857030ef0e7b560eaa664ba6df14422f9401b7a219eac929d764e67e215eff7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHGLYHF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdhZnbWucnYOs1W5QaNoRHv2C552ymLaVUMaSMIvHCsAiA05lJjQDlrU7D1%2BTm%2Fkyd2SBOitQgey0G4RjBq1YmKYSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMInUR5%2B064jRKUSxJKtwDm1LXMG%2FbySG2%2B15WpmcQ%2BaijhLUeS6GCBxpRqGCEuLjwehCsSVMu2JQxW0GckP38oQeJP1oir2XHr0%2Bt0MRlxAW%2B6jAcyMAmI0HcevXuFivn%2B%2BdcXTpkbaqxPOhP2DDPRAtyEPWiY%2BTjPr3Ajs75pAJM4xk1fGMHuaDnDpicVJ%2BxNRkhsXd3NzTb918b2OJAmEKWnZQhEn1gOWbzWqA5ULGtlaSMvDLPPcxqGc9K9p5Xa0x6JHwylaQnwYaC2OUaT6HqViJTCQqQlL1Gw8qNLwtQQ6ULnhDpCwMwMvRWkx3INiWtKNN3uvH0%2FpzfTpvEPIOOEA97DIempzGtl5oYLfCBHRDxJ2omccEowpo1n4gjjS67nK%2F5ZYG6KwsrMSqDqdi8b1bUSR6iGs8stX7H0z0xlbVLQNXRraVG1iZdvQBlRnqT24zrpw%2FPCaDX39hEbTDFqwmFvkgATHr6QSXqQ2Tvd9UbbWvlUbHOZVm%2FEmwsb3ET1G3FYszEUtWf7Sv7bb%2BJ05tm1yHFgtcXDTtXqaF33m90b2xxO5pacLb%2F7OrcwhFlfF0AuNiYV2LKLYxjxmdiYare0Rqen7VgBvIbSMPgiaS7Ze4uqwwCg1AzBPxmhn%2BPqhcP45dDofgw0cL9vAY6pgGtDjoOauK%2F7n4W44tNg%2B9RMjop8WpT3yYUh32IqzggRj9Edt3CP82XSEJZRKO4AB%2BMiMHi2kVhR40pX8uaJEFU7LmWwvMq6OMmYPMsixqtHb9KlUmxh6XyThPG1zhx8ayJqhna4sZX0YdrZqULq2rMW4KCE3sWKLBf20BVrWju3HeZdDKHeybtMYmR%2B0s9Umr6bqt7OsdopYA%2FBOS1yrgPctS0bxA3&X-Amz-Signature=6c761145aa3a5037cf400255139cc429fea79c6b9a57117c91b582a7117eeca4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHGLYHF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdhZnbWucnYOs1W5QaNoRHv2C552ymLaVUMaSMIvHCsAiA05lJjQDlrU7D1%2BTm%2Fkyd2SBOitQgey0G4RjBq1YmKYSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMInUR5%2B064jRKUSxJKtwDm1LXMG%2FbySG2%2B15WpmcQ%2BaijhLUeS6GCBxpRqGCEuLjwehCsSVMu2JQxW0GckP38oQeJP1oir2XHr0%2Bt0MRlxAW%2B6jAcyMAmI0HcevXuFivn%2B%2BdcXTpkbaqxPOhP2DDPRAtyEPWiY%2BTjPr3Ajs75pAJM4xk1fGMHuaDnDpicVJ%2BxNRkhsXd3NzTb918b2OJAmEKWnZQhEn1gOWbzWqA5ULGtlaSMvDLPPcxqGc9K9p5Xa0x6JHwylaQnwYaC2OUaT6HqViJTCQqQlL1Gw8qNLwtQQ6ULnhDpCwMwMvRWkx3INiWtKNN3uvH0%2FpzfTpvEPIOOEA97DIempzGtl5oYLfCBHRDxJ2omccEowpo1n4gjjS67nK%2F5ZYG6KwsrMSqDqdi8b1bUSR6iGs8stX7H0z0xlbVLQNXRraVG1iZdvQBlRnqT24zrpw%2FPCaDX39hEbTDFqwmFvkgATHr6QSXqQ2Tvd9UbbWvlUbHOZVm%2FEmwsb3ET1G3FYszEUtWf7Sv7bb%2BJ05tm1yHFgtcXDTtXqaF33m90b2xxO5pacLb%2F7OrcwhFlfF0AuNiYV2LKLYxjxmdiYare0Rqen7VgBvIbSMPgiaS7Ze4uqwwCg1AzBPxmhn%2BPqhcP45dDofgw0cL9vAY6pgGtDjoOauK%2F7n4W44tNg%2B9RMjop8WpT3yYUh32IqzggRj9Edt3CP82XSEJZRKO4AB%2BMiMHi2kVhR40pX8uaJEFU7LmWwvMq6OMmYPMsixqtHb9KlUmxh6XyThPG1zhx8ayJqhna4sZX0YdrZqULq2rMW4KCE3sWKLBf20BVrWju3HeZdDKHeybtMYmR%2B0s9Umr6bqt7OsdopYA%2FBOS1yrgPctS0bxA3&X-Amz-Signature=be62535d1d4ee24b53825e53d899a3aaba0480932633ba400b26020f9260982b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHGLYHF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdhZnbWucnYOs1W5QaNoRHv2C552ymLaVUMaSMIvHCsAiA05lJjQDlrU7D1%2BTm%2Fkyd2SBOitQgey0G4RjBq1YmKYSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMInUR5%2B064jRKUSxJKtwDm1LXMG%2FbySG2%2B15WpmcQ%2BaijhLUeS6GCBxpRqGCEuLjwehCsSVMu2JQxW0GckP38oQeJP1oir2XHr0%2Bt0MRlxAW%2B6jAcyMAmI0HcevXuFivn%2B%2BdcXTpkbaqxPOhP2DDPRAtyEPWiY%2BTjPr3Ajs75pAJM4xk1fGMHuaDnDpicVJ%2BxNRkhsXd3NzTb918b2OJAmEKWnZQhEn1gOWbzWqA5ULGtlaSMvDLPPcxqGc9K9p5Xa0x6JHwylaQnwYaC2OUaT6HqViJTCQqQlL1Gw8qNLwtQQ6ULnhDpCwMwMvRWkx3INiWtKNN3uvH0%2FpzfTpvEPIOOEA97DIempzGtl5oYLfCBHRDxJ2omccEowpo1n4gjjS67nK%2F5ZYG6KwsrMSqDqdi8b1bUSR6iGs8stX7H0z0xlbVLQNXRraVG1iZdvQBlRnqT24zrpw%2FPCaDX39hEbTDFqwmFvkgATHr6QSXqQ2Tvd9UbbWvlUbHOZVm%2FEmwsb3ET1G3FYszEUtWf7Sv7bb%2BJ05tm1yHFgtcXDTtXqaF33m90b2xxO5pacLb%2F7OrcwhFlfF0AuNiYV2LKLYxjxmdiYare0Rqen7VgBvIbSMPgiaS7Ze4uqwwCg1AzBPxmhn%2BPqhcP45dDofgw0cL9vAY6pgGtDjoOauK%2F7n4W44tNg%2B9RMjop8WpT3yYUh32IqzggRj9Edt3CP82XSEJZRKO4AB%2BMiMHi2kVhR40pX8uaJEFU7LmWwvMq6OMmYPMsixqtHb9KlUmxh6XyThPG1zhx8ayJqhna4sZX0YdrZqULq2rMW4KCE3sWKLBf20BVrWju3HeZdDKHeybtMYmR%2B0s9Umr6bqt7OsdopYA%2FBOS1yrgPctS0bxA3&X-Amz-Signature=493fec31571e8d7abbd7e56c90f3e17c8d3949ce9b7941ccd397ec9f794abd49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
