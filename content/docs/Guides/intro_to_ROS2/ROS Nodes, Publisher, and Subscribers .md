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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRQFWMU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD2pGGHlt8%2F%2BNt3wBoYbbb%2FZHHg4F3KI2oVJCF9tH3oeQIhAMPsfQHMkCcu2zxoU2Izxq7s9dkywBAfqW8MIK3Fnx8GKv8DCCAQABoMNjM3NDIzMTgzODA1IgxIHdslvearg18fZxUq3ANvl4CO%2FTrq4mbEbFfsiMbRnLJugH3nZGxo%2B6qI0CFo%2BsPxyRuWwyjQdZvX21TORey5k097qijAEQV6fEQAAMuZxF1xP4yov%2BRJnemztzkfQNzcA6bey6GsZQh8YPTjKemhVJlo1r1QjDy2Ax7YzTBMmTlebn6ZZad9vOX6xNCKBjwU1caf0%2FiYn5cwBPqPSub%2B39Bh6qxsNURTRYwDG6a%2FoIcBvAWklFQxl7fVo1rqVmJbGJzLJFyT0Qlne9QNpMppRJ7QLdjthXufjYfoQr5yELEvIK3SDnufU6ZVWblpXTVA63S73V5%2F%2BsJTaK7Xnr4EWKic8kFiLplS77muEjL%2BeGJIqX%2BWCKPmXyv1GS89FhzFvrTYjjCndtt%2BfgirStxtatUrZEfqu8GB%2FcCXvKch6wZKU74V8nGHGVZ7e5X7DYV44rPtCEzgSpqsApwydco0chJz1IYvPsZwiTZRsk9RP3ZJGY%2Bk3bby6NdQxT1Elogm0Uw9sA7vkco083hEyYLiSSd3ojx02rrfuxv1A4Uzs575CzatW1TIjarw4mzO4VS5kM7ZCuf35exugUntIRW5aUFmHgXUeT5GS2ioU%2F98cP%2BkZHgS73QZwJSIwBt%2BQ%2FdOSckJtcLXJc1eOzDzuZTBBjqkAUd2supKmS9n6uw7RM%2BNhlXfNbBS8fo9X7MlCr2p3MvoYTDxrkl2kb7y4ytJGhKp8ID5ZOiB8%2B0Fuydx2%2BB44XnAA5yjjgOv2FGqYED1MQB2iGrYjnlLcb1e8zutfFNHnr8Smpy741DbeTdttLzTNxPd%2ByCS9OOpPpOfaqkDTwG1T%2BNM2vsmo5cw3NQ854WKXuPAGtNkCQFs3lOSOVxQ%2BbKiJGKD&X-Amz-Signature=578d50d3bc70476cf6567935facd7540aee2c1342c88dfc676d0ca3ddd6e963b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRQFWMU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD2pGGHlt8%2F%2BNt3wBoYbbb%2FZHHg4F3KI2oVJCF9tH3oeQIhAMPsfQHMkCcu2zxoU2Izxq7s9dkywBAfqW8MIK3Fnx8GKv8DCCAQABoMNjM3NDIzMTgzODA1IgxIHdslvearg18fZxUq3ANvl4CO%2FTrq4mbEbFfsiMbRnLJugH3nZGxo%2B6qI0CFo%2BsPxyRuWwyjQdZvX21TORey5k097qijAEQV6fEQAAMuZxF1xP4yov%2BRJnemztzkfQNzcA6bey6GsZQh8YPTjKemhVJlo1r1QjDy2Ax7YzTBMmTlebn6ZZad9vOX6xNCKBjwU1caf0%2FiYn5cwBPqPSub%2B39Bh6qxsNURTRYwDG6a%2FoIcBvAWklFQxl7fVo1rqVmJbGJzLJFyT0Qlne9QNpMppRJ7QLdjthXufjYfoQr5yELEvIK3SDnufU6ZVWblpXTVA63S73V5%2F%2BsJTaK7Xnr4EWKic8kFiLplS77muEjL%2BeGJIqX%2BWCKPmXyv1GS89FhzFvrTYjjCndtt%2BfgirStxtatUrZEfqu8GB%2FcCXvKch6wZKU74V8nGHGVZ7e5X7DYV44rPtCEzgSpqsApwydco0chJz1IYvPsZwiTZRsk9RP3ZJGY%2Bk3bby6NdQxT1Elogm0Uw9sA7vkco083hEyYLiSSd3ojx02rrfuxv1A4Uzs575CzatW1TIjarw4mzO4VS5kM7ZCuf35exugUntIRW5aUFmHgXUeT5GS2ioU%2F98cP%2BkZHgS73QZwJSIwBt%2BQ%2FdOSckJtcLXJc1eOzDzuZTBBjqkAUd2supKmS9n6uw7RM%2BNhlXfNbBS8fo9X7MlCr2p3MvoYTDxrkl2kb7y4ytJGhKp8ID5ZOiB8%2B0Fuydx2%2BB44XnAA5yjjgOv2FGqYED1MQB2iGrYjnlLcb1e8zutfFNHnr8Smpy741DbeTdttLzTNxPd%2ByCS9OOpPpOfaqkDTwG1T%2BNM2vsmo5cw3NQ854WKXuPAGtNkCQFs3lOSOVxQ%2BbKiJGKD&X-Amz-Signature=2424ab5d9042a312e44919deeb2229cec2f007652ec4e42ca31bc57ba3d67d4b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRQFWMU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD2pGGHlt8%2F%2BNt3wBoYbbb%2FZHHg4F3KI2oVJCF9tH3oeQIhAMPsfQHMkCcu2zxoU2Izxq7s9dkywBAfqW8MIK3Fnx8GKv8DCCAQABoMNjM3NDIzMTgzODA1IgxIHdslvearg18fZxUq3ANvl4CO%2FTrq4mbEbFfsiMbRnLJugH3nZGxo%2B6qI0CFo%2BsPxyRuWwyjQdZvX21TORey5k097qijAEQV6fEQAAMuZxF1xP4yov%2BRJnemztzkfQNzcA6bey6GsZQh8YPTjKemhVJlo1r1QjDy2Ax7YzTBMmTlebn6ZZad9vOX6xNCKBjwU1caf0%2FiYn5cwBPqPSub%2B39Bh6qxsNURTRYwDG6a%2FoIcBvAWklFQxl7fVo1rqVmJbGJzLJFyT0Qlne9QNpMppRJ7QLdjthXufjYfoQr5yELEvIK3SDnufU6ZVWblpXTVA63S73V5%2F%2BsJTaK7Xnr4EWKic8kFiLplS77muEjL%2BeGJIqX%2BWCKPmXyv1GS89FhzFvrTYjjCndtt%2BfgirStxtatUrZEfqu8GB%2FcCXvKch6wZKU74V8nGHGVZ7e5X7DYV44rPtCEzgSpqsApwydco0chJz1IYvPsZwiTZRsk9RP3ZJGY%2Bk3bby6NdQxT1Elogm0Uw9sA7vkco083hEyYLiSSd3ojx02rrfuxv1A4Uzs575CzatW1TIjarw4mzO4VS5kM7ZCuf35exugUntIRW5aUFmHgXUeT5GS2ioU%2F98cP%2BkZHgS73QZwJSIwBt%2BQ%2FdOSckJtcLXJc1eOzDzuZTBBjqkAUd2supKmS9n6uw7RM%2BNhlXfNbBS8fo9X7MlCr2p3MvoYTDxrkl2kb7y4ytJGhKp8ID5ZOiB8%2B0Fuydx2%2BB44XnAA5yjjgOv2FGqYED1MQB2iGrYjnlLcb1e8zutfFNHnr8Smpy741DbeTdttLzTNxPd%2ByCS9OOpPpOfaqkDTwG1T%2BNM2vsmo5cw3NQ854WKXuPAGtNkCQFs3lOSOVxQ%2BbKiJGKD&X-Amz-Signature=da31a3e739431a98ce72f6cabc2eece80144821bafc0f90a317522edc830e725&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRQFWMU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD2pGGHlt8%2F%2BNt3wBoYbbb%2FZHHg4F3KI2oVJCF9tH3oeQIhAMPsfQHMkCcu2zxoU2Izxq7s9dkywBAfqW8MIK3Fnx8GKv8DCCAQABoMNjM3NDIzMTgzODA1IgxIHdslvearg18fZxUq3ANvl4CO%2FTrq4mbEbFfsiMbRnLJugH3nZGxo%2B6qI0CFo%2BsPxyRuWwyjQdZvX21TORey5k097qijAEQV6fEQAAMuZxF1xP4yov%2BRJnemztzkfQNzcA6bey6GsZQh8YPTjKemhVJlo1r1QjDy2Ax7YzTBMmTlebn6ZZad9vOX6xNCKBjwU1caf0%2FiYn5cwBPqPSub%2B39Bh6qxsNURTRYwDG6a%2FoIcBvAWklFQxl7fVo1rqVmJbGJzLJFyT0Qlne9QNpMppRJ7QLdjthXufjYfoQr5yELEvIK3SDnufU6ZVWblpXTVA63S73V5%2F%2BsJTaK7Xnr4EWKic8kFiLplS77muEjL%2BeGJIqX%2BWCKPmXyv1GS89FhzFvrTYjjCndtt%2BfgirStxtatUrZEfqu8GB%2FcCXvKch6wZKU74V8nGHGVZ7e5X7DYV44rPtCEzgSpqsApwydco0chJz1IYvPsZwiTZRsk9RP3ZJGY%2Bk3bby6NdQxT1Elogm0Uw9sA7vkco083hEyYLiSSd3ojx02rrfuxv1A4Uzs575CzatW1TIjarw4mzO4VS5kM7ZCuf35exugUntIRW5aUFmHgXUeT5GS2ioU%2F98cP%2BkZHgS73QZwJSIwBt%2BQ%2FdOSckJtcLXJc1eOzDzuZTBBjqkAUd2supKmS9n6uw7RM%2BNhlXfNbBS8fo9X7MlCr2p3MvoYTDxrkl2kb7y4ytJGhKp8ID5ZOiB8%2B0Fuydx2%2BB44XnAA5yjjgOv2FGqYED1MQB2iGrYjnlLcb1e8zutfFNHnr8Smpy741DbeTdttLzTNxPd%2ByCS9OOpPpOfaqkDTwG1T%2BNM2vsmo5cw3NQ854WKXuPAGtNkCQFs3lOSOVxQ%2BbKiJGKD&X-Amz-Signature=4e20162e8e759a093cb91834f57cfbd5e89445627a45d0e78a94880bc1c85276&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRQFWMU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD2pGGHlt8%2F%2BNt3wBoYbbb%2FZHHg4F3KI2oVJCF9tH3oeQIhAMPsfQHMkCcu2zxoU2Izxq7s9dkywBAfqW8MIK3Fnx8GKv8DCCAQABoMNjM3NDIzMTgzODA1IgxIHdslvearg18fZxUq3ANvl4CO%2FTrq4mbEbFfsiMbRnLJugH3nZGxo%2B6qI0CFo%2BsPxyRuWwyjQdZvX21TORey5k097qijAEQV6fEQAAMuZxF1xP4yov%2BRJnemztzkfQNzcA6bey6GsZQh8YPTjKemhVJlo1r1QjDy2Ax7YzTBMmTlebn6ZZad9vOX6xNCKBjwU1caf0%2FiYn5cwBPqPSub%2B39Bh6qxsNURTRYwDG6a%2FoIcBvAWklFQxl7fVo1rqVmJbGJzLJFyT0Qlne9QNpMppRJ7QLdjthXufjYfoQr5yELEvIK3SDnufU6ZVWblpXTVA63S73V5%2F%2BsJTaK7Xnr4EWKic8kFiLplS77muEjL%2BeGJIqX%2BWCKPmXyv1GS89FhzFvrTYjjCndtt%2BfgirStxtatUrZEfqu8GB%2FcCXvKch6wZKU74V8nGHGVZ7e5X7DYV44rPtCEzgSpqsApwydco0chJz1IYvPsZwiTZRsk9RP3ZJGY%2Bk3bby6NdQxT1Elogm0Uw9sA7vkco083hEyYLiSSd3ojx02rrfuxv1A4Uzs575CzatW1TIjarw4mzO4VS5kM7ZCuf35exugUntIRW5aUFmHgXUeT5GS2ioU%2F98cP%2BkZHgS73QZwJSIwBt%2BQ%2FdOSckJtcLXJc1eOzDzuZTBBjqkAUd2supKmS9n6uw7RM%2BNhlXfNbBS8fo9X7MlCr2p3MvoYTDxrkl2kb7y4ytJGhKp8ID5ZOiB8%2B0Fuydx2%2BB44XnAA5yjjgOv2FGqYED1MQB2iGrYjnlLcb1e8zutfFNHnr8Smpy741DbeTdttLzTNxPd%2ByCS9OOpPpOfaqkDTwG1T%2BNM2vsmo5cw3NQ854WKXuPAGtNkCQFs3lOSOVxQ%2BbKiJGKD&X-Amz-Signature=ecd62d0b9732dab75ac2ba6286ddf02e322709a1c513f6e299cb59c44ca1417c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRQFWMU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD2pGGHlt8%2F%2BNt3wBoYbbb%2FZHHg4F3KI2oVJCF9tH3oeQIhAMPsfQHMkCcu2zxoU2Izxq7s9dkywBAfqW8MIK3Fnx8GKv8DCCAQABoMNjM3NDIzMTgzODA1IgxIHdslvearg18fZxUq3ANvl4CO%2FTrq4mbEbFfsiMbRnLJugH3nZGxo%2B6qI0CFo%2BsPxyRuWwyjQdZvX21TORey5k097qijAEQV6fEQAAMuZxF1xP4yov%2BRJnemztzkfQNzcA6bey6GsZQh8YPTjKemhVJlo1r1QjDy2Ax7YzTBMmTlebn6ZZad9vOX6xNCKBjwU1caf0%2FiYn5cwBPqPSub%2B39Bh6qxsNURTRYwDG6a%2FoIcBvAWklFQxl7fVo1rqVmJbGJzLJFyT0Qlne9QNpMppRJ7QLdjthXufjYfoQr5yELEvIK3SDnufU6ZVWblpXTVA63S73V5%2F%2BsJTaK7Xnr4EWKic8kFiLplS77muEjL%2BeGJIqX%2BWCKPmXyv1GS89FhzFvrTYjjCndtt%2BfgirStxtatUrZEfqu8GB%2FcCXvKch6wZKU74V8nGHGVZ7e5X7DYV44rPtCEzgSpqsApwydco0chJz1IYvPsZwiTZRsk9RP3ZJGY%2Bk3bby6NdQxT1Elogm0Uw9sA7vkco083hEyYLiSSd3ojx02rrfuxv1A4Uzs575CzatW1TIjarw4mzO4VS5kM7ZCuf35exugUntIRW5aUFmHgXUeT5GS2ioU%2F98cP%2BkZHgS73QZwJSIwBt%2BQ%2FdOSckJtcLXJc1eOzDzuZTBBjqkAUd2supKmS9n6uw7RM%2BNhlXfNbBS8fo9X7MlCr2p3MvoYTDxrkl2kb7y4ytJGhKp8ID5ZOiB8%2B0Fuydx2%2BB44XnAA5yjjgOv2FGqYED1MQB2iGrYjnlLcb1e8zutfFNHnr8Smpy741DbeTdttLzTNxPd%2ByCS9OOpPpOfaqkDTwG1T%2BNM2vsmo5cw3NQ854WKXuPAGtNkCQFs3lOSOVxQ%2BbKiJGKD&X-Amz-Signature=dd24a811513013ca8ba4736f4f075f5fff5080df08ec61da6496fe1ee623496d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRQFWMU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD2pGGHlt8%2F%2BNt3wBoYbbb%2FZHHg4F3KI2oVJCF9tH3oeQIhAMPsfQHMkCcu2zxoU2Izxq7s9dkywBAfqW8MIK3Fnx8GKv8DCCAQABoMNjM3NDIzMTgzODA1IgxIHdslvearg18fZxUq3ANvl4CO%2FTrq4mbEbFfsiMbRnLJugH3nZGxo%2B6qI0CFo%2BsPxyRuWwyjQdZvX21TORey5k097qijAEQV6fEQAAMuZxF1xP4yov%2BRJnemztzkfQNzcA6bey6GsZQh8YPTjKemhVJlo1r1QjDy2Ax7YzTBMmTlebn6ZZad9vOX6xNCKBjwU1caf0%2FiYn5cwBPqPSub%2B39Bh6qxsNURTRYwDG6a%2FoIcBvAWklFQxl7fVo1rqVmJbGJzLJFyT0Qlne9QNpMppRJ7QLdjthXufjYfoQr5yELEvIK3SDnufU6ZVWblpXTVA63S73V5%2F%2BsJTaK7Xnr4EWKic8kFiLplS77muEjL%2BeGJIqX%2BWCKPmXyv1GS89FhzFvrTYjjCndtt%2BfgirStxtatUrZEfqu8GB%2FcCXvKch6wZKU74V8nGHGVZ7e5X7DYV44rPtCEzgSpqsApwydco0chJz1IYvPsZwiTZRsk9RP3ZJGY%2Bk3bby6NdQxT1Elogm0Uw9sA7vkco083hEyYLiSSd3ojx02rrfuxv1A4Uzs575CzatW1TIjarw4mzO4VS5kM7ZCuf35exugUntIRW5aUFmHgXUeT5GS2ioU%2F98cP%2BkZHgS73QZwJSIwBt%2BQ%2FdOSckJtcLXJc1eOzDzuZTBBjqkAUd2supKmS9n6uw7RM%2BNhlXfNbBS8fo9X7MlCr2p3MvoYTDxrkl2kb7y4ytJGhKp8ID5ZOiB8%2B0Fuydx2%2BB44XnAA5yjjgOv2FGqYED1MQB2iGrYjnlLcb1e8zutfFNHnr8Smpy741DbeTdttLzTNxPd%2ByCS9OOpPpOfaqkDTwG1T%2BNM2vsmo5cw3NQ854WKXuPAGtNkCQFs3lOSOVxQ%2BbKiJGKD&X-Amz-Signature=07082d07acb93b3aca5934cc9cc28f61d6e8a33529cedf75da331575ab560934&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRQFWMU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD2pGGHlt8%2F%2BNt3wBoYbbb%2FZHHg4F3KI2oVJCF9tH3oeQIhAMPsfQHMkCcu2zxoU2Izxq7s9dkywBAfqW8MIK3Fnx8GKv8DCCAQABoMNjM3NDIzMTgzODA1IgxIHdslvearg18fZxUq3ANvl4CO%2FTrq4mbEbFfsiMbRnLJugH3nZGxo%2B6qI0CFo%2BsPxyRuWwyjQdZvX21TORey5k097qijAEQV6fEQAAMuZxF1xP4yov%2BRJnemztzkfQNzcA6bey6GsZQh8YPTjKemhVJlo1r1QjDy2Ax7YzTBMmTlebn6ZZad9vOX6xNCKBjwU1caf0%2FiYn5cwBPqPSub%2B39Bh6qxsNURTRYwDG6a%2FoIcBvAWklFQxl7fVo1rqVmJbGJzLJFyT0Qlne9QNpMppRJ7QLdjthXufjYfoQr5yELEvIK3SDnufU6ZVWblpXTVA63S73V5%2F%2BsJTaK7Xnr4EWKic8kFiLplS77muEjL%2BeGJIqX%2BWCKPmXyv1GS89FhzFvrTYjjCndtt%2BfgirStxtatUrZEfqu8GB%2FcCXvKch6wZKU74V8nGHGVZ7e5X7DYV44rPtCEzgSpqsApwydco0chJz1IYvPsZwiTZRsk9RP3ZJGY%2Bk3bby6NdQxT1Elogm0Uw9sA7vkco083hEyYLiSSd3ojx02rrfuxv1A4Uzs575CzatW1TIjarw4mzO4VS5kM7ZCuf35exugUntIRW5aUFmHgXUeT5GS2ioU%2F98cP%2BkZHgS73QZwJSIwBt%2BQ%2FdOSckJtcLXJc1eOzDzuZTBBjqkAUd2supKmS9n6uw7RM%2BNhlXfNbBS8fo9X7MlCr2p3MvoYTDxrkl2kb7y4ytJGhKp8ID5ZOiB8%2B0Fuydx2%2BB44XnAA5yjjgOv2FGqYED1MQB2iGrYjnlLcb1e8zutfFNHnr8Smpy741DbeTdttLzTNxPd%2ByCS9OOpPpOfaqkDTwG1T%2BNM2vsmo5cw3NQ854WKXuPAGtNkCQFs3lOSOVxQ%2BbKiJGKD&X-Amz-Signature=182975fc4f6fd8085447ecfb74486e623ad712efc45606ecf0b34bcbd5691695&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
