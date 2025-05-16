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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO4FEOV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP7c05ZLShN8NKoN4MrE9OV6fUFtUiN4rrtYkFkSmHswIgTjGOTly%2FMRZ9BitDBflCIVmAkPr8HlFw34iINyhu4kAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJOOkgM0Bqit1qxiISrcA9JU7sy3QV7cBnZgyqBdk4%2BR6uAEKYJgHcBeB%2FUezv%2BuBByjf7pH5y7YqD0B6tf6AcFqVL0yQD%2B6sCTy%2FVZNQSynFIYQFjA6cqVPbfvYJCRpWKXrQE5%2FwXd13QDUUMSszmc%2BlEdNPlOqdlfBiUuYJyMbzqh0v8zPB3Zd%2BFznQKDB%2B5yj%2FiCWStEv6oR0TyPHcw9MmfywPFCx3m4cjNbRm6yjJt42nK%2BPv7pcOBR4ERGkRewye3jreoevvc3Pi7fjC0j9oTPCRko5TUrj616IyGUElgedVipxT4IAQQV0OkhZO3NAy7UWZKSBlL%2FMxJ7%2BwAWHaaRrTAKySvPOdkA4zhpKXvyvAhfM6uROLSgNi2tPG2ypGAX%2F%2B0MtDTDRWAw%2FLUl6aVhIjy0QScHaViQVaD8jhmncqpM%2BbO90ufEr94O%2Fa9PNs61YerocJkG5vwCrekG%2Fx%2B2dIOG2Dw13GeT%2BUgzC%2F%2B8FUVTEEhSJ5vNsmJuMZWSMIeYPivwJElNMmEDm270%2B6rhhu9NSr%2BiT6ycd7fTq53SIKLhM6rr%2FdNXJ8569uER2TV5VB4BVfGk7XUMTQ5EwP4JYN3FG2BcsqoNwVGcgjvTmrF8JFrIuTVepIvDuLr7AAz5CaroSmvSIMIHcnMEGOqUByy68NnKn48xpRmDaTA9eCFi%2BHYOrvfDoIoa0njIv2pZLHyLqRNlORcdkV3BnoIih%2FatFhraUK92QMO3mQ2a1zSguLp54lGBAgQIkCMewwwGRfTKUMjPL5M1xAs9BxWJkd%2BDD%2BD9cC4CKpNtOXK8lMNKqanecA%2BD%2BFcAIYsuWUKqGm%2BRc2tmG4PnrKanG5shZr8BOTBTgt2Br7EppXTSSI1vgwpRG&X-Amz-Signature=ec6432d176dd93b2e7ab366455daf5797061ff39a732340265f48eceaf3fa51a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO4FEOV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP7c05ZLShN8NKoN4MrE9OV6fUFtUiN4rrtYkFkSmHswIgTjGOTly%2FMRZ9BitDBflCIVmAkPr8HlFw34iINyhu4kAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJOOkgM0Bqit1qxiISrcA9JU7sy3QV7cBnZgyqBdk4%2BR6uAEKYJgHcBeB%2FUezv%2BuBByjf7pH5y7YqD0B6tf6AcFqVL0yQD%2B6sCTy%2FVZNQSynFIYQFjA6cqVPbfvYJCRpWKXrQE5%2FwXd13QDUUMSszmc%2BlEdNPlOqdlfBiUuYJyMbzqh0v8zPB3Zd%2BFznQKDB%2B5yj%2FiCWStEv6oR0TyPHcw9MmfywPFCx3m4cjNbRm6yjJt42nK%2BPv7pcOBR4ERGkRewye3jreoevvc3Pi7fjC0j9oTPCRko5TUrj616IyGUElgedVipxT4IAQQV0OkhZO3NAy7UWZKSBlL%2FMxJ7%2BwAWHaaRrTAKySvPOdkA4zhpKXvyvAhfM6uROLSgNi2tPG2ypGAX%2F%2B0MtDTDRWAw%2FLUl6aVhIjy0QScHaViQVaD8jhmncqpM%2BbO90ufEr94O%2Fa9PNs61YerocJkG5vwCrekG%2Fx%2B2dIOG2Dw13GeT%2BUgzC%2F%2B8FUVTEEhSJ5vNsmJuMZWSMIeYPivwJElNMmEDm270%2B6rhhu9NSr%2BiT6ycd7fTq53SIKLhM6rr%2FdNXJ8569uER2TV5VB4BVfGk7XUMTQ5EwP4JYN3FG2BcsqoNwVGcgjvTmrF8JFrIuTVepIvDuLr7AAz5CaroSmvSIMIHcnMEGOqUByy68NnKn48xpRmDaTA9eCFi%2BHYOrvfDoIoa0njIv2pZLHyLqRNlORcdkV3BnoIih%2FatFhraUK92QMO3mQ2a1zSguLp54lGBAgQIkCMewwwGRfTKUMjPL5M1xAs9BxWJkd%2BDD%2BD9cC4CKpNtOXK8lMNKqanecA%2BD%2BFcAIYsuWUKqGm%2BRc2tmG4PnrKanG5shZr8BOTBTgt2Br7EppXTSSI1vgwpRG&X-Amz-Signature=a9fcb63a44c9da51f7331c8d167b658431afc8227c1da1a1b23b89d8b72baa40&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO4FEOV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP7c05ZLShN8NKoN4MrE9OV6fUFtUiN4rrtYkFkSmHswIgTjGOTly%2FMRZ9BitDBflCIVmAkPr8HlFw34iINyhu4kAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJOOkgM0Bqit1qxiISrcA9JU7sy3QV7cBnZgyqBdk4%2BR6uAEKYJgHcBeB%2FUezv%2BuBByjf7pH5y7YqD0B6tf6AcFqVL0yQD%2B6sCTy%2FVZNQSynFIYQFjA6cqVPbfvYJCRpWKXrQE5%2FwXd13QDUUMSszmc%2BlEdNPlOqdlfBiUuYJyMbzqh0v8zPB3Zd%2BFznQKDB%2B5yj%2FiCWStEv6oR0TyPHcw9MmfywPFCx3m4cjNbRm6yjJt42nK%2BPv7pcOBR4ERGkRewye3jreoevvc3Pi7fjC0j9oTPCRko5TUrj616IyGUElgedVipxT4IAQQV0OkhZO3NAy7UWZKSBlL%2FMxJ7%2BwAWHaaRrTAKySvPOdkA4zhpKXvyvAhfM6uROLSgNi2tPG2ypGAX%2F%2B0MtDTDRWAw%2FLUl6aVhIjy0QScHaViQVaD8jhmncqpM%2BbO90ufEr94O%2Fa9PNs61YerocJkG5vwCrekG%2Fx%2B2dIOG2Dw13GeT%2BUgzC%2F%2B8FUVTEEhSJ5vNsmJuMZWSMIeYPivwJElNMmEDm270%2B6rhhu9NSr%2BiT6ycd7fTq53SIKLhM6rr%2FdNXJ8569uER2TV5VB4BVfGk7XUMTQ5EwP4JYN3FG2BcsqoNwVGcgjvTmrF8JFrIuTVepIvDuLr7AAz5CaroSmvSIMIHcnMEGOqUByy68NnKn48xpRmDaTA9eCFi%2BHYOrvfDoIoa0njIv2pZLHyLqRNlORcdkV3BnoIih%2FatFhraUK92QMO3mQ2a1zSguLp54lGBAgQIkCMewwwGRfTKUMjPL5M1xAs9BxWJkd%2BDD%2BD9cC4CKpNtOXK8lMNKqanecA%2BD%2BFcAIYsuWUKqGm%2BRc2tmG4PnrKanG5shZr8BOTBTgt2Br7EppXTSSI1vgwpRG&X-Amz-Signature=77da028dbb1916eff750440ab7f77f66f9d4bd7e956285b40c674a7a4bc4499f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO4FEOV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP7c05ZLShN8NKoN4MrE9OV6fUFtUiN4rrtYkFkSmHswIgTjGOTly%2FMRZ9BitDBflCIVmAkPr8HlFw34iINyhu4kAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJOOkgM0Bqit1qxiISrcA9JU7sy3QV7cBnZgyqBdk4%2BR6uAEKYJgHcBeB%2FUezv%2BuBByjf7pH5y7YqD0B6tf6AcFqVL0yQD%2B6sCTy%2FVZNQSynFIYQFjA6cqVPbfvYJCRpWKXrQE5%2FwXd13QDUUMSszmc%2BlEdNPlOqdlfBiUuYJyMbzqh0v8zPB3Zd%2BFznQKDB%2B5yj%2FiCWStEv6oR0TyPHcw9MmfywPFCx3m4cjNbRm6yjJt42nK%2BPv7pcOBR4ERGkRewye3jreoevvc3Pi7fjC0j9oTPCRko5TUrj616IyGUElgedVipxT4IAQQV0OkhZO3NAy7UWZKSBlL%2FMxJ7%2BwAWHaaRrTAKySvPOdkA4zhpKXvyvAhfM6uROLSgNi2tPG2ypGAX%2F%2B0MtDTDRWAw%2FLUl6aVhIjy0QScHaViQVaD8jhmncqpM%2BbO90ufEr94O%2Fa9PNs61YerocJkG5vwCrekG%2Fx%2B2dIOG2Dw13GeT%2BUgzC%2F%2B8FUVTEEhSJ5vNsmJuMZWSMIeYPivwJElNMmEDm270%2B6rhhu9NSr%2BiT6ycd7fTq53SIKLhM6rr%2FdNXJ8569uER2TV5VB4BVfGk7XUMTQ5EwP4JYN3FG2BcsqoNwVGcgjvTmrF8JFrIuTVepIvDuLr7AAz5CaroSmvSIMIHcnMEGOqUByy68NnKn48xpRmDaTA9eCFi%2BHYOrvfDoIoa0njIv2pZLHyLqRNlORcdkV3BnoIih%2FatFhraUK92QMO3mQ2a1zSguLp54lGBAgQIkCMewwwGRfTKUMjPL5M1xAs9BxWJkd%2BDD%2BD9cC4CKpNtOXK8lMNKqanecA%2BD%2BFcAIYsuWUKqGm%2BRc2tmG4PnrKanG5shZr8BOTBTgt2Br7EppXTSSI1vgwpRG&X-Amz-Signature=db6c868cffe9718f8273d04984d21d1c81e50bf75672aff3a15b7616183f8213&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO4FEOV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP7c05ZLShN8NKoN4MrE9OV6fUFtUiN4rrtYkFkSmHswIgTjGOTly%2FMRZ9BitDBflCIVmAkPr8HlFw34iINyhu4kAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJOOkgM0Bqit1qxiISrcA9JU7sy3QV7cBnZgyqBdk4%2BR6uAEKYJgHcBeB%2FUezv%2BuBByjf7pH5y7YqD0B6tf6AcFqVL0yQD%2B6sCTy%2FVZNQSynFIYQFjA6cqVPbfvYJCRpWKXrQE5%2FwXd13QDUUMSszmc%2BlEdNPlOqdlfBiUuYJyMbzqh0v8zPB3Zd%2BFznQKDB%2B5yj%2FiCWStEv6oR0TyPHcw9MmfywPFCx3m4cjNbRm6yjJt42nK%2BPv7pcOBR4ERGkRewye3jreoevvc3Pi7fjC0j9oTPCRko5TUrj616IyGUElgedVipxT4IAQQV0OkhZO3NAy7UWZKSBlL%2FMxJ7%2BwAWHaaRrTAKySvPOdkA4zhpKXvyvAhfM6uROLSgNi2tPG2ypGAX%2F%2B0MtDTDRWAw%2FLUl6aVhIjy0QScHaViQVaD8jhmncqpM%2BbO90ufEr94O%2Fa9PNs61YerocJkG5vwCrekG%2Fx%2B2dIOG2Dw13GeT%2BUgzC%2F%2B8FUVTEEhSJ5vNsmJuMZWSMIeYPivwJElNMmEDm270%2B6rhhu9NSr%2BiT6ycd7fTq53SIKLhM6rr%2FdNXJ8569uER2TV5VB4BVfGk7XUMTQ5EwP4JYN3FG2BcsqoNwVGcgjvTmrF8JFrIuTVepIvDuLr7AAz5CaroSmvSIMIHcnMEGOqUByy68NnKn48xpRmDaTA9eCFi%2BHYOrvfDoIoa0njIv2pZLHyLqRNlORcdkV3BnoIih%2FatFhraUK92QMO3mQ2a1zSguLp54lGBAgQIkCMewwwGRfTKUMjPL5M1xAs9BxWJkd%2BDD%2BD9cC4CKpNtOXK8lMNKqanecA%2BD%2BFcAIYsuWUKqGm%2BRc2tmG4PnrKanG5shZr8BOTBTgt2Br7EppXTSSI1vgwpRG&X-Amz-Signature=a71980d192d7c008ab36028f517ab6cd93ebd0be77d3e58112380135455d519f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO4FEOV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP7c05ZLShN8NKoN4MrE9OV6fUFtUiN4rrtYkFkSmHswIgTjGOTly%2FMRZ9BitDBflCIVmAkPr8HlFw34iINyhu4kAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJOOkgM0Bqit1qxiISrcA9JU7sy3QV7cBnZgyqBdk4%2BR6uAEKYJgHcBeB%2FUezv%2BuBByjf7pH5y7YqD0B6tf6AcFqVL0yQD%2B6sCTy%2FVZNQSynFIYQFjA6cqVPbfvYJCRpWKXrQE5%2FwXd13QDUUMSszmc%2BlEdNPlOqdlfBiUuYJyMbzqh0v8zPB3Zd%2BFznQKDB%2B5yj%2FiCWStEv6oR0TyPHcw9MmfywPFCx3m4cjNbRm6yjJt42nK%2BPv7pcOBR4ERGkRewye3jreoevvc3Pi7fjC0j9oTPCRko5TUrj616IyGUElgedVipxT4IAQQV0OkhZO3NAy7UWZKSBlL%2FMxJ7%2BwAWHaaRrTAKySvPOdkA4zhpKXvyvAhfM6uROLSgNi2tPG2ypGAX%2F%2B0MtDTDRWAw%2FLUl6aVhIjy0QScHaViQVaD8jhmncqpM%2BbO90ufEr94O%2Fa9PNs61YerocJkG5vwCrekG%2Fx%2B2dIOG2Dw13GeT%2BUgzC%2F%2B8FUVTEEhSJ5vNsmJuMZWSMIeYPivwJElNMmEDm270%2B6rhhu9NSr%2BiT6ycd7fTq53SIKLhM6rr%2FdNXJ8569uER2TV5VB4BVfGk7XUMTQ5EwP4JYN3FG2BcsqoNwVGcgjvTmrF8JFrIuTVepIvDuLr7AAz5CaroSmvSIMIHcnMEGOqUByy68NnKn48xpRmDaTA9eCFi%2BHYOrvfDoIoa0njIv2pZLHyLqRNlORcdkV3BnoIih%2FatFhraUK92QMO3mQ2a1zSguLp54lGBAgQIkCMewwwGRfTKUMjPL5M1xAs9BxWJkd%2BDD%2BD9cC4CKpNtOXK8lMNKqanecA%2BD%2BFcAIYsuWUKqGm%2BRc2tmG4PnrKanG5shZr8BOTBTgt2Br7EppXTSSI1vgwpRG&X-Amz-Signature=3f26693418803d69c3659d2393f50ae3019a2a44c59157fe303037aefa4af6b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO4FEOV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP7c05ZLShN8NKoN4MrE9OV6fUFtUiN4rrtYkFkSmHswIgTjGOTly%2FMRZ9BitDBflCIVmAkPr8HlFw34iINyhu4kAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJOOkgM0Bqit1qxiISrcA9JU7sy3QV7cBnZgyqBdk4%2BR6uAEKYJgHcBeB%2FUezv%2BuBByjf7pH5y7YqD0B6tf6AcFqVL0yQD%2B6sCTy%2FVZNQSynFIYQFjA6cqVPbfvYJCRpWKXrQE5%2FwXd13QDUUMSszmc%2BlEdNPlOqdlfBiUuYJyMbzqh0v8zPB3Zd%2BFznQKDB%2B5yj%2FiCWStEv6oR0TyPHcw9MmfywPFCx3m4cjNbRm6yjJt42nK%2BPv7pcOBR4ERGkRewye3jreoevvc3Pi7fjC0j9oTPCRko5TUrj616IyGUElgedVipxT4IAQQV0OkhZO3NAy7UWZKSBlL%2FMxJ7%2BwAWHaaRrTAKySvPOdkA4zhpKXvyvAhfM6uROLSgNi2tPG2ypGAX%2F%2B0MtDTDRWAw%2FLUl6aVhIjy0QScHaViQVaD8jhmncqpM%2BbO90ufEr94O%2Fa9PNs61YerocJkG5vwCrekG%2Fx%2B2dIOG2Dw13GeT%2BUgzC%2F%2B8FUVTEEhSJ5vNsmJuMZWSMIeYPivwJElNMmEDm270%2B6rhhu9NSr%2BiT6ycd7fTq53SIKLhM6rr%2FdNXJ8569uER2TV5VB4BVfGk7XUMTQ5EwP4JYN3FG2BcsqoNwVGcgjvTmrF8JFrIuTVepIvDuLr7AAz5CaroSmvSIMIHcnMEGOqUByy68NnKn48xpRmDaTA9eCFi%2BHYOrvfDoIoa0njIv2pZLHyLqRNlORcdkV3BnoIih%2FatFhraUK92QMO3mQ2a1zSguLp54lGBAgQIkCMewwwGRfTKUMjPL5M1xAs9BxWJkd%2BDD%2BD9cC4CKpNtOXK8lMNKqanecA%2BD%2BFcAIYsuWUKqGm%2BRc2tmG4PnrKanG5shZr8BOTBTgt2Br7EppXTSSI1vgwpRG&X-Amz-Signature=f1f549e17f1d17aa48e239a7e80293d6b56f33828bd5556a6baeebfa9f3cd416&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO4FEOV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP7c05ZLShN8NKoN4MrE9OV6fUFtUiN4rrtYkFkSmHswIgTjGOTly%2FMRZ9BitDBflCIVmAkPr8HlFw34iINyhu4kAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJOOkgM0Bqit1qxiISrcA9JU7sy3QV7cBnZgyqBdk4%2BR6uAEKYJgHcBeB%2FUezv%2BuBByjf7pH5y7YqD0B6tf6AcFqVL0yQD%2B6sCTy%2FVZNQSynFIYQFjA6cqVPbfvYJCRpWKXrQE5%2FwXd13QDUUMSszmc%2BlEdNPlOqdlfBiUuYJyMbzqh0v8zPB3Zd%2BFznQKDB%2B5yj%2FiCWStEv6oR0TyPHcw9MmfywPFCx3m4cjNbRm6yjJt42nK%2BPv7pcOBR4ERGkRewye3jreoevvc3Pi7fjC0j9oTPCRko5TUrj616IyGUElgedVipxT4IAQQV0OkhZO3NAy7UWZKSBlL%2FMxJ7%2BwAWHaaRrTAKySvPOdkA4zhpKXvyvAhfM6uROLSgNi2tPG2ypGAX%2F%2B0MtDTDRWAw%2FLUl6aVhIjy0QScHaViQVaD8jhmncqpM%2BbO90ufEr94O%2Fa9PNs61YerocJkG5vwCrekG%2Fx%2B2dIOG2Dw13GeT%2BUgzC%2F%2B8FUVTEEhSJ5vNsmJuMZWSMIeYPivwJElNMmEDm270%2B6rhhu9NSr%2BiT6ycd7fTq53SIKLhM6rr%2FdNXJ8569uER2TV5VB4BVfGk7XUMTQ5EwP4JYN3FG2BcsqoNwVGcgjvTmrF8JFrIuTVepIvDuLr7AAz5CaroSmvSIMIHcnMEGOqUByy68NnKn48xpRmDaTA9eCFi%2BHYOrvfDoIoa0njIv2pZLHyLqRNlORcdkV3BnoIih%2FatFhraUK92QMO3mQ2a1zSguLp54lGBAgQIkCMewwwGRfTKUMjPL5M1xAs9BxWJkd%2BDD%2BD9cC4CKpNtOXK8lMNKqanecA%2BD%2BFcAIYsuWUKqGm%2BRc2tmG4PnrKanG5shZr8BOTBTgt2Br7EppXTSSI1vgwpRG&X-Amz-Signature=6c84eb23603334dc8bc743713f7ebd57c5a8e4b2a750847d887a5efbdb44639b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
