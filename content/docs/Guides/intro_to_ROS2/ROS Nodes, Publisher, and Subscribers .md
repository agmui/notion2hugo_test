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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOA5YV6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDS8URqv3FUgzNqHaFj%2B7tmawK3A80ZS7givKCpvarSxAIgcRizCUBrWwK8348zesxF7l5s6pQ6n5a5EwTrLgoFqt0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpk5Ryk%2B2WR0ZgggircA9kS4kWdplu4U9bwTUaGsU6%2F2Qd%2B9u8SRhY8DIoD5JeCZLTeB3bGWlIVq8HASAmAc7LKC5QW4ZFCUjVOhfmO4RYWvx3NGWYvpDhFXMNu1ODjbbydJogoK3XRfUkf19zXU5wiT2fnu3M%2BxCQqSnpyuBF6vnLIw0U7Gjjh9Rqh9I%2FDfL5ArWNEBOX%2BPDfCW9oZxeRLb3rQurV%2BADK5Sx1yLFiJobXCm0kiP2HZ0BrYAOkNOW4kl6i27myNzinYkpX3xPguuRhYd8pX61xbD5Y868r2KuJeiM9DsExodUOk2jXi9kaRcStRQ%2Bejx5nRqrY69pZ%2F2vaBRoeaGxOHFO%2Ff70i2eygE9qGs1VxYKZblapSUyBOntHF6NKiYVeHOjnFq7QV66%2B5zknSf6rBaTzmVx1XPPPTZqi87IXkg1L6wj3GY8Rhdf4H3gXsTiG3%2BV02x4VOTynyZHcRfta%2FMwe4RaS8lCdq8PACDSenWfl4u%2Br0HVI2p1HZJgiVz%2BWuKDBcM4Ig3k8obQ5rA3zZBnmWXbqpm8bQD9F5NPrfoIC54vzDVNPR4QvthpdjntUguG%2BeQFLDvrfkFjXLkCczM5AMqdG%2FgYYFdfX55NrhEyvONC4vJF5lp56Say0Xg3DvkMOO7xL4GOqUBzo1o%2FVrNmg96feQFwQIOEHxHBuhw%2BTWHvQJFUCo%2F91EBBIVNesTDBxzd5ZBRP5plhWsQ2vnFhLidsqjGoPqC3wJinTYf7m08OaF9qRidBhTCeeVwHDRZD%2BLTQCAGShmtQRbc5ZUNbhAZpAzYaV5lt1do32v%2FHKsdeV5Pvh7B9c7MRVd1mSLzLCNrRpS%2Fhw9tM%2BhqErwg%2BhY89kTRf28%2F6MdIMqbl&X-Amz-Signature=d7fcc4c2183884a01b775d6c26d3349c784e1611dee125873ae658a23b704837&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOA5YV6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDS8URqv3FUgzNqHaFj%2B7tmawK3A80ZS7givKCpvarSxAIgcRizCUBrWwK8348zesxF7l5s6pQ6n5a5EwTrLgoFqt0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpk5Ryk%2B2WR0ZgggircA9kS4kWdplu4U9bwTUaGsU6%2F2Qd%2B9u8SRhY8DIoD5JeCZLTeB3bGWlIVq8HASAmAc7LKC5QW4ZFCUjVOhfmO4RYWvx3NGWYvpDhFXMNu1ODjbbydJogoK3XRfUkf19zXU5wiT2fnu3M%2BxCQqSnpyuBF6vnLIw0U7Gjjh9Rqh9I%2FDfL5ArWNEBOX%2BPDfCW9oZxeRLb3rQurV%2BADK5Sx1yLFiJobXCm0kiP2HZ0BrYAOkNOW4kl6i27myNzinYkpX3xPguuRhYd8pX61xbD5Y868r2KuJeiM9DsExodUOk2jXi9kaRcStRQ%2Bejx5nRqrY69pZ%2F2vaBRoeaGxOHFO%2Ff70i2eygE9qGs1VxYKZblapSUyBOntHF6NKiYVeHOjnFq7QV66%2B5zknSf6rBaTzmVx1XPPPTZqi87IXkg1L6wj3GY8Rhdf4H3gXsTiG3%2BV02x4VOTynyZHcRfta%2FMwe4RaS8lCdq8PACDSenWfl4u%2Br0HVI2p1HZJgiVz%2BWuKDBcM4Ig3k8obQ5rA3zZBnmWXbqpm8bQD9F5NPrfoIC54vzDVNPR4QvthpdjntUguG%2BeQFLDvrfkFjXLkCczM5AMqdG%2FgYYFdfX55NrhEyvONC4vJF5lp56Say0Xg3DvkMOO7xL4GOqUBzo1o%2FVrNmg96feQFwQIOEHxHBuhw%2BTWHvQJFUCo%2F91EBBIVNesTDBxzd5ZBRP5plhWsQ2vnFhLidsqjGoPqC3wJinTYf7m08OaF9qRidBhTCeeVwHDRZD%2BLTQCAGShmtQRbc5ZUNbhAZpAzYaV5lt1do32v%2FHKsdeV5Pvh7B9c7MRVd1mSLzLCNrRpS%2Fhw9tM%2BhqErwg%2BhY89kTRf28%2F6MdIMqbl&X-Amz-Signature=474ed4ad889ef2e7cb16444c4d11496f9feb7dcf45008d7abcbb2675ff8237a7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOA5YV6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDS8URqv3FUgzNqHaFj%2B7tmawK3A80ZS7givKCpvarSxAIgcRizCUBrWwK8348zesxF7l5s6pQ6n5a5EwTrLgoFqt0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpk5Ryk%2B2WR0ZgggircA9kS4kWdplu4U9bwTUaGsU6%2F2Qd%2B9u8SRhY8DIoD5JeCZLTeB3bGWlIVq8HASAmAc7LKC5QW4ZFCUjVOhfmO4RYWvx3NGWYvpDhFXMNu1ODjbbydJogoK3XRfUkf19zXU5wiT2fnu3M%2BxCQqSnpyuBF6vnLIw0U7Gjjh9Rqh9I%2FDfL5ArWNEBOX%2BPDfCW9oZxeRLb3rQurV%2BADK5Sx1yLFiJobXCm0kiP2HZ0BrYAOkNOW4kl6i27myNzinYkpX3xPguuRhYd8pX61xbD5Y868r2KuJeiM9DsExodUOk2jXi9kaRcStRQ%2Bejx5nRqrY69pZ%2F2vaBRoeaGxOHFO%2Ff70i2eygE9qGs1VxYKZblapSUyBOntHF6NKiYVeHOjnFq7QV66%2B5zknSf6rBaTzmVx1XPPPTZqi87IXkg1L6wj3GY8Rhdf4H3gXsTiG3%2BV02x4VOTynyZHcRfta%2FMwe4RaS8lCdq8PACDSenWfl4u%2Br0HVI2p1HZJgiVz%2BWuKDBcM4Ig3k8obQ5rA3zZBnmWXbqpm8bQD9F5NPrfoIC54vzDVNPR4QvthpdjntUguG%2BeQFLDvrfkFjXLkCczM5AMqdG%2FgYYFdfX55NrhEyvONC4vJF5lp56Say0Xg3DvkMOO7xL4GOqUBzo1o%2FVrNmg96feQFwQIOEHxHBuhw%2BTWHvQJFUCo%2F91EBBIVNesTDBxzd5ZBRP5plhWsQ2vnFhLidsqjGoPqC3wJinTYf7m08OaF9qRidBhTCeeVwHDRZD%2BLTQCAGShmtQRbc5ZUNbhAZpAzYaV5lt1do32v%2FHKsdeV5Pvh7B9c7MRVd1mSLzLCNrRpS%2Fhw9tM%2BhqErwg%2BhY89kTRf28%2F6MdIMqbl&X-Amz-Signature=5f2c04594f8abfec0c3c3ae56fcc2b633a3980a9c372041e1712f44759528716&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOA5YV6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDS8URqv3FUgzNqHaFj%2B7tmawK3A80ZS7givKCpvarSxAIgcRizCUBrWwK8348zesxF7l5s6pQ6n5a5EwTrLgoFqt0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpk5Ryk%2B2WR0ZgggircA9kS4kWdplu4U9bwTUaGsU6%2F2Qd%2B9u8SRhY8DIoD5JeCZLTeB3bGWlIVq8HASAmAc7LKC5QW4ZFCUjVOhfmO4RYWvx3NGWYvpDhFXMNu1ODjbbydJogoK3XRfUkf19zXU5wiT2fnu3M%2BxCQqSnpyuBF6vnLIw0U7Gjjh9Rqh9I%2FDfL5ArWNEBOX%2BPDfCW9oZxeRLb3rQurV%2BADK5Sx1yLFiJobXCm0kiP2HZ0BrYAOkNOW4kl6i27myNzinYkpX3xPguuRhYd8pX61xbD5Y868r2KuJeiM9DsExodUOk2jXi9kaRcStRQ%2Bejx5nRqrY69pZ%2F2vaBRoeaGxOHFO%2Ff70i2eygE9qGs1VxYKZblapSUyBOntHF6NKiYVeHOjnFq7QV66%2B5zknSf6rBaTzmVx1XPPPTZqi87IXkg1L6wj3GY8Rhdf4H3gXsTiG3%2BV02x4VOTynyZHcRfta%2FMwe4RaS8lCdq8PACDSenWfl4u%2Br0HVI2p1HZJgiVz%2BWuKDBcM4Ig3k8obQ5rA3zZBnmWXbqpm8bQD9F5NPrfoIC54vzDVNPR4QvthpdjntUguG%2BeQFLDvrfkFjXLkCczM5AMqdG%2FgYYFdfX55NrhEyvONC4vJF5lp56Say0Xg3DvkMOO7xL4GOqUBzo1o%2FVrNmg96feQFwQIOEHxHBuhw%2BTWHvQJFUCo%2F91EBBIVNesTDBxzd5ZBRP5plhWsQ2vnFhLidsqjGoPqC3wJinTYf7m08OaF9qRidBhTCeeVwHDRZD%2BLTQCAGShmtQRbc5ZUNbhAZpAzYaV5lt1do32v%2FHKsdeV5Pvh7B9c7MRVd1mSLzLCNrRpS%2Fhw9tM%2BhqErwg%2BhY89kTRf28%2F6MdIMqbl&X-Amz-Signature=182bdaacb352db268782d7c882a0110210a3fde522ba4cfba031100fbb990e3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOA5YV6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDS8URqv3FUgzNqHaFj%2B7tmawK3A80ZS7givKCpvarSxAIgcRizCUBrWwK8348zesxF7l5s6pQ6n5a5EwTrLgoFqt0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpk5Ryk%2B2WR0ZgggircA9kS4kWdplu4U9bwTUaGsU6%2F2Qd%2B9u8SRhY8DIoD5JeCZLTeB3bGWlIVq8HASAmAc7LKC5QW4ZFCUjVOhfmO4RYWvx3NGWYvpDhFXMNu1ODjbbydJogoK3XRfUkf19zXU5wiT2fnu3M%2BxCQqSnpyuBF6vnLIw0U7Gjjh9Rqh9I%2FDfL5ArWNEBOX%2BPDfCW9oZxeRLb3rQurV%2BADK5Sx1yLFiJobXCm0kiP2HZ0BrYAOkNOW4kl6i27myNzinYkpX3xPguuRhYd8pX61xbD5Y868r2KuJeiM9DsExodUOk2jXi9kaRcStRQ%2Bejx5nRqrY69pZ%2F2vaBRoeaGxOHFO%2Ff70i2eygE9qGs1VxYKZblapSUyBOntHF6NKiYVeHOjnFq7QV66%2B5zknSf6rBaTzmVx1XPPPTZqi87IXkg1L6wj3GY8Rhdf4H3gXsTiG3%2BV02x4VOTynyZHcRfta%2FMwe4RaS8lCdq8PACDSenWfl4u%2Br0HVI2p1HZJgiVz%2BWuKDBcM4Ig3k8obQ5rA3zZBnmWXbqpm8bQD9F5NPrfoIC54vzDVNPR4QvthpdjntUguG%2BeQFLDvrfkFjXLkCczM5AMqdG%2FgYYFdfX55NrhEyvONC4vJF5lp56Say0Xg3DvkMOO7xL4GOqUBzo1o%2FVrNmg96feQFwQIOEHxHBuhw%2BTWHvQJFUCo%2F91EBBIVNesTDBxzd5ZBRP5plhWsQ2vnFhLidsqjGoPqC3wJinTYf7m08OaF9qRidBhTCeeVwHDRZD%2BLTQCAGShmtQRbc5ZUNbhAZpAzYaV5lt1do32v%2FHKsdeV5Pvh7B9c7MRVd1mSLzLCNrRpS%2Fhw9tM%2BhqErwg%2BhY89kTRf28%2F6MdIMqbl&X-Amz-Signature=e4df850793ad0828c05c95f2f633608dd33bdd4b3f1f7dcc82f8a44b9d379c14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOA5YV6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDS8URqv3FUgzNqHaFj%2B7tmawK3A80ZS7givKCpvarSxAIgcRizCUBrWwK8348zesxF7l5s6pQ6n5a5EwTrLgoFqt0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpk5Ryk%2B2WR0ZgggircA9kS4kWdplu4U9bwTUaGsU6%2F2Qd%2B9u8SRhY8DIoD5JeCZLTeB3bGWlIVq8HASAmAc7LKC5QW4ZFCUjVOhfmO4RYWvx3NGWYvpDhFXMNu1ODjbbydJogoK3XRfUkf19zXU5wiT2fnu3M%2BxCQqSnpyuBF6vnLIw0U7Gjjh9Rqh9I%2FDfL5ArWNEBOX%2BPDfCW9oZxeRLb3rQurV%2BADK5Sx1yLFiJobXCm0kiP2HZ0BrYAOkNOW4kl6i27myNzinYkpX3xPguuRhYd8pX61xbD5Y868r2KuJeiM9DsExodUOk2jXi9kaRcStRQ%2Bejx5nRqrY69pZ%2F2vaBRoeaGxOHFO%2Ff70i2eygE9qGs1VxYKZblapSUyBOntHF6NKiYVeHOjnFq7QV66%2B5zknSf6rBaTzmVx1XPPPTZqi87IXkg1L6wj3GY8Rhdf4H3gXsTiG3%2BV02x4VOTynyZHcRfta%2FMwe4RaS8lCdq8PACDSenWfl4u%2Br0HVI2p1HZJgiVz%2BWuKDBcM4Ig3k8obQ5rA3zZBnmWXbqpm8bQD9F5NPrfoIC54vzDVNPR4QvthpdjntUguG%2BeQFLDvrfkFjXLkCczM5AMqdG%2FgYYFdfX55NrhEyvONC4vJF5lp56Say0Xg3DvkMOO7xL4GOqUBzo1o%2FVrNmg96feQFwQIOEHxHBuhw%2BTWHvQJFUCo%2F91EBBIVNesTDBxzd5ZBRP5plhWsQ2vnFhLidsqjGoPqC3wJinTYf7m08OaF9qRidBhTCeeVwHDRZD%2BLTQCAGShmtQRbc5ZUNbhAZpAzYaV5lt1do32v%2FHKsdeV5Pvh7B9c7MRVd1mSLzLCNrRpS%2Fhw9tM%2BhqErwg%2BhY89kTRf28%2F6MdIMqbl&X-Amz-Signature=baa5812081a36c5f9cee0fcc4bc8e8c4cc43d15c3f68f15f9c9087d924c593eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOA5YV6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDS8URqv3FUgzNqHaFj%2B7tmawK3A80ZS7givKCpvarSxAIgcRizCUBrWwK8348zesxF7l5s6pQ6n5a5EwTrLgoFqt0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpk5Ryk%2B2WR0ZgggircA9kS4kWdplu4U9bwTUaGsU6%2F2Qd%2B9u8SRhY8DIoD5JeCZLTeB3bGWlIVq8HASAmAc7LKC5QW4ZFCUjVOhfmO4RYWvx3NGWYvpDhFXMNu1ODjbbydJogoK3XRfUkf19zXU5wiT2fnu3M%2BxCQqSnpyuBF6vnLIw0U7Gjjh9Rqh9I%2FDfL5ArWNEBOX%2BPDfCW9oZxeRLb3rQurV%2BADK5Sx1yLFiJobXCm0kiP2HZ0BrYAOkNOW4kl6i27myNzinYkpX3xPguuRhYd8pX61xbD5Y868r2KuJeiM9DsExodUOk2jXi9kaRcStRQ%2Bejx5nRqrY69pZ%2F2vaBRoeaGxOHFO%2Ff70i2eygE9qGs1VxYKZblapSUyBOntHF6NKiYVeHOjnFq7QV66%2B5zknSf6rBaTzmVx1XPPPTZqi87IXkg1L6wj3GY8Rhdf4H3gXsTiG3%2BV02x4VOTynyZHcRfta%2FMwe4RaS8lCdq8PACDSenWfl4u%2Br0HVI2p1HZJgiVz%2BWuKDBcM4Ig3k8obQ5rA3zZBnmWXbqpm8bQD9F5NPrfoIC54vzDVNPR4QvthpdjntUguG%2BeQFLDvrfkFjXLkCczM5AMqdG%2FgYYFdfX55NrhEyvONC4vJF5lp56Say0Xg3DvkMOO7xL4GOqUBzo1o%2FVrNmg96feQFwQIOEHxHBuhw%2BTWHvQJFUCo%2F91EBBIVNesTDBxzd5ZBRP5plhWsQ2vnFhLidsqjGoPqC3wJinTYf7m08OaF9qRidBhTCeeVwHDRZD%2BLTQCAGShmtQRbc5ZUNbhAZpAzYaV5lt1do32v%2FHKsdeV5Pvh7B9c7MRVd1mSLzLCNrRpS%2Fhw9tM%2BhqErwg%2BhY89kTRf28%2F6MdIMqbl&X-Amz-Signature=4ad8d4fb8f8b34e9a4b55b1fbcb5960774415d2128baf4b11e53b99d865101c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOA5YV6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDS8URqv3FUgzNqHaFj%2B7tmawK3A80ZS7givKCpvarSxAIgcRizCUBrWwK8348zesxF7l5s6pQ6n5a5EwTrLgoFqt0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpk5Ryk%2B2WR0ZgggircA9kS4kWdplu4U9bwTUaGsU6%2F2Qd%2B9u8SRhY8DIoD5JeCZLTeB3bGWlIVq8HASAmAc7LKC5QW4ZFCUjVOhfmO4RYWvx3NGWYvpDhFXMNu1ODjbbydJogoK3XRfUkf19zXU5wiT2fnu3M%2BxCQqSnpyuBF6vnLIw0U7Gjjh9Rqh9I%2FDfL5ArWNEBOX%2BPDfCW9oZxeRLb3rQurV%2BADK5Sx1yLFiJobXCm0kiP2HZ0BrYAOkNOW4kl6i27myNzinYkpX3xPguuRhYd8pX61xbD5Y868r2KuJeiM9DsExodUOk2jXi9kaRcStRQ%2Bejx5nRqrY69pZ%2F2vaBRoeaGxOHFO%2Ff70i2eygE9qGs1VxYKZblapSUyBOntHF6NKiYVeHOjnFq7QV66%2B5zknSf6rBaTzmVx1XPPPTZqi87IXkg1L6wj3GY8Rhdf4H3gXsTiG3%2BV02x4VOTynyZHcRfta%2FMwe4RaS8lCdq8PACDSenWfl4u%2Br0HVI2p1HZJgiVz%2BWuKDBcM4Ig3k8obQ5rA3zZBnmWXbqpm8bQD9F5NPrfoIC54vzDVNPR4QvthpdjntUguG%2BeQFLDvrfkFjXLkCczM5AMqdG%2FgYYFdfX55NrhEyvONC4vJF5lp56Say0Xg3DvkMOO7xL4GOqUBzo1o%2FVrNmg96feQFwQIOEHxHBuhw%2BTWHvQJFUCo%2F91EBBIVNesTDBxzd5ZBRP5plhWsQ2vnFhLidsqjGoPqC3wJinTYf7m08OaF9qRidBhTCeeVwHDRZD%2BLTQCAGShmtQRbc5ZUNbhAZpAzYaV5lt1do32v%2FHKsdeV5Pvh7B9c7MRVd1mSLzLCNrRpS%2Fhw9tM%2BhqErwg%2BhY89kTRf28%2F6MdIMqbl&X-Amz-Signature=0de59df97039162b1054087f3f16cf246754370bcd5e1b77af2c53c6564ce53f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
