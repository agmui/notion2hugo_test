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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYELHW55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCcxp45bETxwulkQcvYxvT90Rc6CtU1S72aVIBxU0eUjgIgWtBN029xNQ0y6nK02ii8jaLFQLjtHQnGrk%2BoK1ctqWUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoUTBtIH8L48eo%2BnCrcA%2FebR92e1%2BJHArbGsaf7BDYHlDB9lJ4MPxXSPCEzM%2Bp9DG8wDjbx5v%2F2287QALP1ILQ2WkVJ9CX9ZNz%2FKwO3S6omq6IcGl%2F7%2BIhzzu0ylWWlYhanCv6o%2BWeS4Fi9%2Fdm349a5PX8%2BSs4KePAusPvldjNQc8xLEKaaiLpQkTq8UlZwmO45YAPWm0fepItY%2BgoI2mRyA77brV1kNE%2B2GfcdBhxVWsUDW6ULvIAksLpw5gRHd9KKMRreYGj%2FmRTQKWaMBRXtL%2FO8PYCSkrflaJtEMLP2%2FElgdXHVEKZoyinHyFrvwClT7jCmxD2Tn%2BjR7DsBQ87NY0OytNe%2B1v6VQg44q2%2BoFEW%2Bee1d%2FfZHMHNyPVxLMlPkU2V%2BOOj5n7uq90nras7ddGYUcpmGhsJo1XR2hGbChqhvoS62FWl01f4vboJ04pA2LuMMbHRpZDkLrr16jXbvlGWnqV9nP4BbAaNXx7%2FdnJsq2VWkgsnWgG%2FtLOuKfAdB87uDMzt1NeNNozUd4Pp14cCRmSCTkA1DgiiZNL0u6h6bjuqpZtnn2QgoOnMtnLHKR%2FPCVelVUx6us2TRH2CQjJnjdjU1NVXiA3dN8uAp2nk3%2FJE9KmizuKr3Xgcbr%2Fj%2FZ%2Fc20fET%2FoFfMP2Kn8QGOqUBq0BdlUojsKl5XWk5J0cA761mvLVxICO%2B77NkcW11BbHhMp9nnqymOHNzut7Nyl3y0w5nWsW5jQNKG4WFGlbfzHmXYBZYjZ9QVQKbCeu04yBHbY88iHWvj8NDt1Z1l%2BH7BplwkyAUcEPR%2Ba3SVoMJR8qDfZcwADSTeIibIjeaqjgOsSggMpTh72AJL8yEppXBoR9LJ4x%2FYXV2%2FwxOAswNspNS87Jk&X-Amz-Signature=7a8ed7e01bce3b2b33035c559e2dd33c8e0652b6f6dd17ee3021ca29d76aec2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYELHW55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCcxp45bETxwulkQcvYxvT90Rc6CtU1S72aVIBxU0eUjgIgWtBN029xNQ0y6nK02ii8jaLFQLjtHQnGrk%2BoK1ctqWUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoUTBtIH8L48eo%2BnCrcA%2FebR92e1%2BJHArbGsaf7BDYHlDB9lJ4MPxXSPCEzM%2Bp9DG8wDjbx5v%2F2287QALP1ILQ2WkVJ9CX9ZNz%2FKwO3S6omq6IcGl%2F7%2BIhzzu0ylWWlYhanCv6o%2BWeS4Fi9%2Fdm349a5PX8%2BSs4KePAusPvldjNQc8xLEKaaiLpQkTq8UlZwmO45YAPWm0fepItY%2BgoI2mRyA77brV1kNE%2B2GfcdBhxVWsUDW6ULvIAksLpw5gRHd9KKMRreYGj%2FmRTQKWaMBRXtL%2FO8PYCSkrflaJtEMLP2%2FElgdXHVEKZoyinHyFrvwClT7jCmxD2Tn%2BjR7DsBQ87NY0OytNe%2B1v6VQg44q2%2BoFEW%2Bee1d%2FfZHMHNyPVxLMlPkU2V%2BOOj5n7uq90nras7ddGYUcpmGhsJo1XR2hGbChqhvoS62FWl01f4vboJ04pA2LuMMbHRpZDkLrr16jXbvlGWnqV9nP4BbAaNXx7%2FdnJsq2VWkgsnWgG%2FtLOuKfAdB87uDMzt1NeNNozUd4Pp14cCRmSCTkA1DgiiZNL0u6h6bjuqpZtnn2QgoOnMtnLHKR%2FPCVelVUx6us2TRH2CQjJnjdjU1NVXiA3dN8uAp2nk3%2FJE9KmizuKr3Xgcbr%2Fj%2FZ%2Fc20fET%2FoFfMP2Kn8QGOqUBq0BdlUojsKl5XWk5J0cA761mvLVxICO%2B77NkcW11BbHhMp9nnqymOHNzut7Nyl3y0w5nWsW5jQNKG4WFGlbfzHmXYBZYjZ9QVQKbCeu04yBHbY88iHWvj8NDt1Z1l%2BH7BplwkyAUcEPR%2Ba3SVoMJR8qDfZcwADSTeIibIjeaqjgOsSggMpTh72AJL8yEppXBoR9LJ4x%2FYXV2%2FwxOAswNspNS87Jk&X-Amz-Signature=5433f64ec81b3b0626f1ac8454d2ce3fb7131e6acd1a81b4ab0bcbe2f6b144cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYELHW55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCcxp45bETxwulkQcvYxvT90Rc6CtU1S72aVIBxU0eUjgIgWtBN029xNQ0y6nK02ii8jaLFQLjtHQnGrk%2BoK1ctqWUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoUTBtIH8L48eo%2BnCrcA%2FebR92e1%2BJHArbGsaf7BDYHlDB9lJ4MPxXSPCEzM%2Bp9DG8wDjbx5v%2F2287QALP1ILQ2WkVJ9CX9ZNz%2FKwO3S6omq6IcGl%2F7%2BIhzzu0ylWWlYhanCv6o%2BWeS4Fi9%2Fdm349a5PX8%2BSs4KePAusPvldjNQc8xLEKaaiLpQkTq8UlZwmO45YAPWm0fepItY%2BgoI2mRyA77brV1kNE%2B2GfcdBhxVWsUDW6ULvIAksLpw5gRHd9KKMRreYGj%2FmRTQKWaMBRXtL%2FO8PYCSkrflaJtEMLP2%2FElgdXHVEKZoyinHyFrvwClT7jCmxD2Tn%2BjR7DsBQ87NY0OytNe%2B1v6VQg44q2%2BoFEW%2Bee1d%2FfZHMHNyPVxLMlPkU2V%2BOOj5n7uq90nras7ddGYUcpmGhsJo1XR2hGbChqhvoS62FWl01f4vboJ04pA2LuMMbHRpZDkLrr16jXbvlGWnqV9nP4BbAaNXx7%2FdnJsq2VWkgsnWgG%2FtLOuKfAdB87uDMzt1NeNNozUd4Pp14cCRmSCTkA1DgiiZNL0u6h6bjuqpZtnn2QgoOnMtnLHKR%2FPCVelVUx6us2TRH2CQjJnjdjU1NVXiA3dN8uAp2nk3%2FJE9KmizuKr3Xgcbr%2Fj%2FZ%2Fc20fET%2FoFfMP2Kn8QGOqUBq0BdlUojsKl5XWk5J0cA761mvLVxICO%2B77NkcW11BbHhMp9nnqymOHNzut7Nyl3y0w5nWsW5jQNKG4WFGlbfzHmXYBZYjZ9QVQKbCeu04yBHbY88iHWvj8NDt1Z1l%2BH7BplwkyAUcEPR%2Ba3SVoMJR8qDfZcwADSTeIibIjeaqjgOsSggMpTh72AJL8yEppXBoR9LJ4x%2FYXV2%2FwxOAswNspNS87Jk&X-Amz-Signature=c52b2be700953c006b1be87a47c112bd19e190af64558326346999f3523ade79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYELHW55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCcxp45bETxwulkQcvYxvT90Rc6CtU1S72aVIBxU0eUjgIgWtBN029xNQ0y6nK02ii8jaLFQLjtHQnGrk%2BoK1ctqWUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoUTBtIH8L48eo%2BnCrcA%2FebR92e1%2BJHArbGsaf7BDYHlDB9lJ4MPxXSPCEzM%2Bp9DG8wDjbx5v%2F2287QALP1ILQ2WkVJ9CX9ZNz%2FKwO3S6omq6IcGl%2F7%2BIhzzu0ylWWlYhanCv6o%2BWeS4Fi9%2Fdm349a5PX8%2BSs4KePAusPvldjNQc8xLEKaaiLpQkTq8UlZwmO45YAPWm0fepItY%2BgoI2mRyA77brV1kNE%2B2GfcdBhxVWsUDW6ULvIAksLpw5gRHd9KKMRreYGj%2FmRTQKWaMBRXtL%2FO8PYCSkrflaJtEMLP2%2FElgdXHVEKZoyinHyFrvwClT7jCmxD2Tn%2BjR7DsBQ87NY0OytNe%2B1v6VQg44q2%2BoFEW%2Bee1d%2FfZHMHNyPVxLMlPkU2V%2BOOj5n7uq90nras7ddGYUcpmGhsJo1XR2hGbChqhvoS62FWl01f4vboJ04pA2LuMMbHRpZDkLrr16jXbvlGWnqV9nP4BbAaNXx7%2FdnJsq2VWkgsnWgG%2FtLOuKfAdB87uDMzt1NeNNozUd4Pp14cCRmSCTkA1DgiiZNL0u6h6bjuqpZtnn2QgoOnMtnLHKR%2FPCVelVUx6us2TRH2CQjJnjdjU1NVXiA3dN8uAp2nk3%2FJE9KmizuKr3Xgcbr%2Fj%2FZ%2Fc20fET%2FoFfMP2Kn8QGOqUBq0BdlUojsKl5XWk5J0cA761mvLVxICO%2B77NkcW11BbHhMp9nnqymOHNzut7Nyl3y0w5nWsW5jQNKG4WFGlbfzHmXYBZYjZ9QVQKbCeu04yBHbY88iHWvj8NDt1Z1l%2BH7BplwkyAUcEPR%2Ba3SVoMJR8qDfZcwADSTeIibIjeaqjgOsSggMpTh72AJL8yEppXBoR9LJ4x%2FYXV2%2FwxOAswNspNS87Jk&X-Amz-Signature=654cd1aa387b53e1b599b853f5e816a97d972e4b9b8c1a47d76ab6aabfd51c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYELHW55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCcxp45bETxwulkQcvYxvT90Rc6CtU1S72aVIBxU0eUjgIgWtBN029xNQ0y6nK02ii8jaLFQLjtHQnGrk%2BoK1ctqWUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoUTBtIH8L48eo%2BnCrcA%2FebR92e1%2BJHArbGsaf7BDYHlDB9lJ4MPxXSPCEzM%2Bp9DG8wDjbx5v%2F2287QALP1ILQ2WkVJ9CX9ZNz%2FKwO3S6omq6IcGl%2F7%2BIhzzu0ylWWlYhanCv6o%2BWeS4Fi9%2Fdm349a5PX8%2BSs4KePAusPvldjNQc8xLEKaaiLpQkTq8UlZwmO45YAPWm0fepItY%2BgoI2mRyA77brV1kNE%2B2GfcdBhxVWsUDW6ULvIAksLpw5gRHd9KKMRreYGj%2FmRTQKWaMBRXtL%2FO8PYCSkrflaJtEMLP2%2FElgdXHVEKZoyinHyFrvwClT7jCmxD2Tn%2BjR7DsBQ87NY0OytNe%2B1v6VQg44q2%2BoFEW%2Bee1d%2FfZHMHNyPVxLMlPkU2V%2BOOj5n7uq90nras7ddGYUcpmGhsJo1XR2hGbChqhvoS62FWl01f4vboJ04pA2LuMMbHRpZDkLrr16jXbvlGWnqV9nP4BbAaNXx7%2FdnJsq2VWkgsnWgG%2FtLOuKfAdB87uDMzt1NeNNozUd4Pp14cCRmSCTkA1DgiiZNL0u6h6bjuqpZtnn2QgoOnMtnLHKR%2FPCVelVUx6us2TRH2CQjJnjdjU1NVXiA3dN8uAp2nk3%2FJE9KmizuKr3Xgcbr%2Fj%2FZ%2Fc20fET%2FoFfMP2Kn8QGOqUBq0BdlUojsKl5XWk5J0cA761mvLVxICO%2B77NkcW11BbHhMp9nnqymOHNzut7Nyl3y0w5nWsW5jQNKG4WFGlbfzHmXYBZYjZ9QVQKbCeu04yBHbY88iHWvj8NDt1Z1l%2BH7BplwkyAUcEPR%2Ba3SVoMJR8qDfZcwADSTeIibIjeaqjgOsSggMpTh72AJL8yEppXBoR9LJ4x%2FYXV2%2FwxOAswNspNS87Jk&X-Amz-Signature=0890efb879049c011ebc239a25f2e9d04972847f35e9473cee70c2e76e6d6da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYELHW55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCcxp45bETxwulkQcvYxvT90Rc6CtU1S72aVIBxU0eUjgIgWtBN029xNQ0y6nK02ii8jaLFQLjtHQnGrk%2BoK1ctqWUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoUTBtIH8L48eo%2BnCrcA%2FebR92e1%2BJHArbGsaf7BDYHlDB9lJ4MPxXSPCEzM%2Bp9DG8wDjbx5v%2F2287QALP1ILQ2WkVJ9CX9ZNz%2FKwO3S6omq6IcGl%2F7%2BIhzzu0ylWWlYhanCv6o%2BWeS4Fi9%2Fdm349a5PX8%2BSs4KePAusPvldjNQc8xLEKaaiLpQkTq8UlZwmO45YAPWm0fepItY%2BgoI2mRyA77brV1kNE%2B2GfcdBhxVWsUDW6ULvIAksLpw5gRHd9KKMRreYGj%2FmRTQKWaMBRXtL%2FO8PYCSkrflaJtEMLP2%2FElgdXHVEKZoyinHyFrvwClT7jCmxD2Tn%2BjR7DsBQ87NY0OytNe%2B1v6VQg44q2%2BoFEW%2Bee1d%2FfZHMHNyPVxLMlPkU2V%2BOOj5n7uq90nras7ddGYUcpmGhsJo1XR2hGbChqhvoS62FWl01f4vboJ04pA2LuMMbHRpZDkLrr16jXbvlGWnqV9nP4BbAaNXx7%2FdnJsq2VWkgsnWgG%2FtLOuKfAdB87uDMzt1NeNNozUd4Pp14cCRmSCTkA1DgiiZNL0u6h6bjuqpZtnn2QgoOnMtnLHKR%2FPCVelVUx6us2TRH2CQjJnjdjU1NVXiA3dN8uAp2nk3%2FJE9KmizuKr3Xgcbr%2Fj%2FZ%2Fc20fET%2FoFfMP2Kn8QGOqUBq0BdlUojsKl5XWk5J0cA761mvLVxICO%2B77NkcW11BbHhMp9nnqymOHNzut7Nyl3y0w5nWsW5jQNKG4WFGlbfzHmXYBZYjZ9QVQKbCeu04yBHbY88iHWvj8NDt1Z1l%2BH7BplwkyAUcEPR%2Ba3SVoMJR8qDfZcwADSTeIibIjeaqjgOsSggMpTh72AJL8yEppXBoR9LJ4x%2FYXV2%2FwxOAswNspNS87Jk&X-Amz-Signature=b273e6a7d1d1608245973196a2079a175d135e3e4f315c1f3bb23417f5c96b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYELHW55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCcxp45bETxwulkQcvYxvT90Rc6CtU1S72aVIBxU0eUjgIgWtBN029xNQ0y6nK02ii8jaLFQLjtHQnGrk%2BoK1ctqWUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoUTBtIH8L48eo%2BnCrcA%2FebR92e1%2BJHArbGsaf7BDYHlDB9lJ4MPxXSPCEzM%2Bp9DG8wDjbx5v%2F2287QALP1ILQ2WkVJ9CX9ZNz%2FKwO3S6omq6IcGl%2F7%2BIhzzu0ylWWlYhanCv6o%2BWeS4Fi9%2Fdm349a5PX8%2BSs4KePAusPvldjNQc8xLEKaaiLpQkTq8UlZwmO45YAPWm0fepItY%2BgoI2mRyA77brV1kNE%2B2GfcdBhxVWsUDW6ULvIAksLpw5gRHd9KKMRreYGj%2FmRTQKWaMBRXtL%2FO8PYCSkrflaJtEMLP2%2FElgdXHVEKZoyinHyFrvwClT7jCmxD2Tn%2BjR7DsBQ87NY0OytNe%2B1v6VQg44q2%2BoFEW%2Bee1d%2FfZHMHNyPVxLMlPkU2V%2BOOj5n7uq90nras7ddGYUcpmGhsJo1XR2hGbChqhvoS62FWl01f4vboJ04pA2LuMMbHRpZDkLrr16jXbvlGWnqV9nP4BbAaNXx7%2FdnJsq2VWkgsnWgG%2FtLOuKfAdB87uDMzt1NeNNozUd4Pp14cCRmSCTkA1DgiiZNL0u6h6bjuqpZtnn2QgoOnMtnLHKR%2FPCVelVUx6us2TRH2CQjJnjdjU1NVXiA3dN8uAp2nk3%2FJE9KmizuKr3Xgcbr%2Fj%2FZ%2Fc20fET%2FoFfMP2Kn8QGOqUBq0BdlUojsKl5XWk5J0cA761mvLVxICO%2B77NkcW11BbHhMp9nnqymOHNzut7Nyl3y0w5nWsW5jQNKG4WFGlbfzHmXYBZYjZ9QVQKbCeu04yBHbY88iHWvj8NDt1Z1l%2BH7BplwkyAUcEPR%2Ba3SVoMJR8qDfZcwADSTeIibIjeaqjgOsSggMpTh72AJL8yEppXBoR9LJ4x%2FYXV2%2FwxOAswNspNS87Jk&X-Amz-Signature=83bb42d32ad52a4cbf800889aa41e65de58262f54fcbfeba7022e02477c2eb6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYELHW55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCcxp45bETxwulkQcvYxvT90Rc6CtU1S72aVIBxU0eUjgIgWtBN029xNQ0y6nK02ii8jaLFQLjtHQnGrk%2BoK1ctqWUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoUTBtIH8L48eo%2BnCrcA%2FebR92e1%2BJHArbGsaf7BDYHlDB9lJ4MPxXSPCEzM%2Bp9DG8wDjbx5v%2F2287QALP1ILQ2WkVJ9CX9ZNz%2FKwO3S6omq6IcGl%2F7%2BIhzzu0ylWWlYhanCv6o%2BWeS4Fi9%2Fdm349a5PX8%2BSs4KePAusPvldjNQc8xLEKaaiLpQkTq8UlZwmO45YAPWm0fepItY%2BgoI2mRyA77brV1kNE%2B2GfcdBhxVWsUDW6ULvIAksLpw5gRHd9KKMRreYGj%2FmRTQKWaMBRXtL%2FO8PYCSkrflaJtEMLP2%2FElgdXHVEKZoyinHyFrvwClT7jCmxD2Tn%2BjR7DsBQ87NY0OytNe%2B1v6VQg44q2%2BoFEW%2Bee1d%2FfZHMHNyPVxLMlPkU2V%2BOOj5n7uq90nras7ddGYUcpmGhsJo1XR2hGbChqhvoS62FWl01f4vboJ04pA2LuMMbHRpZDkLrr16jXbvlGWnqV9nP4BbAaNXx7%2FdnJsq2VWkgsnWgG%2FtLOuKfAdB87uDMzt1NeNNozUd4Pp14cCRmSCTkA1DgiiZNL0u6h6bjuqpZtnn2QgoOnMtnLHKR%2FPCVelVUx6us2TRH2CQjJnjdjU1NVXiA3dN8uAp2nk3%2FJE9KmizuKr3Xgcbr%2Fj%2FZ%2Fc20fET%2FoFfMP2Kn8QGOqUBq0BdlUojsKl5XWk5J0cA761mvLVxICO%2B77NkcW11BbHhMp9nnqymOHNzut7Nyl3y0w5nWsW5jQNKG4WFGlbfzHmXYBZYjZ9QVQKbCeu04yBHbY88iHWvj8NDt1Z1l%2BH7BplwkyAUcEPR%2Ba3SVoMJR8qDfZcwADSTeIibIjeaqjgOsSggMpTh72AJL8yEppXBoR9LJ4x%2FYXV2%2FwxOAswNspNS87Jk&X-Amz-Signature=6e27202694edfc43c02451e78b14443a7f030105928512dd8946891634b3eb94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
