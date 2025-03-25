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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKYQECLX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo4R6350xHAQWShDBsGH8hUTv7fnz53qCs6Xl9m7nYQwIgWWB3q2PhU2k2KMLggt7F1M01w%2Fj%2F9Yk8BM7KWEvMNRsq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOI3UsfEYGX8meMSoyrcA3dZq1Jqv0kEiniOi4Ktqkk4DxR762OCQPQAXvjroOsl%2BBC0NHt%2FpMbmD7m0m7R0%2FYAlUFQYzHTb9Bfx6IGxOPDyusULY%2BordAT%2Beue4fAaxnzYdU%2FgL8pKepMOOR3IvD0Cp7S8hfTjZmZShBmPzIJ7ygI4HCVK1augGW3%2FtYda65Q%2BHmmTGs2CDodAx7BEX7q8ShjbiAnG8hz0BvhCodP4A4TuZ21AqRkulB%2FCP%2FeaWn4qkReepyd6LUu8CSZp0VaA0etaaS0RiOWq4lQ1gnj5AT%2FIGQMZiZw5qOooKpKbQ825pCpnS1OVWZw4LkeII6OuDGdKUgq9hPOWDQZzRUa%2B8Jm%2F5TefZC4iFaoWYSyHgBdWsuABSS906Wkr7W4PRE5SnxKkk8f5MV0p26QWtVlPsagXnKBdGEEEFQ7Ocgho1jT7M%2BOiCAZhmplBYj7JCoZ1%2FZuQkdryWgkZkfMWtzbbg6gP5V5X3EX%2BYPxOV30ExPgxJ%2BLf35k%2B4TS2o3Rq19FrSmPuCll0epioy9qpcY88Z%2BWpSwhBdqMQnzxesnIcie83mDuvsvQH893lq7NusID5qECnHw3%2Bxe%2FwnNjBJECZck40%2BUHozkSsmhO5qh%2BxAVeeCkA6%2F4IkGiDQiMO2XjL8GOqUBWP1ZfHL%2B0JUTozocy9Ua%2FTE5taZR3J6cqv4S7s3d9gSWKFqmv1vRq%2BUo%2BZwSy3FAa0qP5evuJa59FxPqsXZEoMxDGV73G55dpMI69rvgnBZNY22kG8%2B6g9Nm2lwUplAgELFjDJKdyXt0YbzXEUs%2FZ%2BWh%2F6WqX1cEYi4aH90KdebchPKEALcSCFYstCn%2BoLmULGo%2FvR%2BrUB4%2FWZK%2BSeSlMvpS4y8G&X-Amz-Signature=94e86a6cdc0a28a43980e553e38caf6ab2067a2952d5add2f35e16b751cdb160&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKYQECLX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo4R6350xHAQWShDBsGH8hUTv7fnz53qCs6Xl9m7nYQwIgWWB3q2PhU2k2KMLggt7F1M01w%2Fj%2F9Yk8BM7KWEvMNRsq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOI3UsfEYGX8meMSoyrcA3dZq1Jqv0kEiniOi4Ktqkk4DxR762OCQPQAXvjroOsl%2BBC0NHt%2FpMbmD7m0m7R0%2FYAlUFQYzHTb9Bfx6IGxOPDyusULY%2BordAT%2Beue4fAaxnzYdU%2FgL8pKepMOOR3IvD0Cp7S8hfTjZmZShBmPzIJ7ygI4HCVK1augGW3%2FtYda65Q%2BHmmTGs2CDodAx7BEX7q8ShjbiAnG8hz0BvhCodP4A4TuZ21AqRkulB%2FCP%2FeaWn4qkReepyd6LUu8CSZp0VaA0etaaS0RiOWq4lQ1gnj5AT%2FIGQMZiZw5qOooKpKbQ825pCpnS1OVWZw4LkeII6OuDGdKUgq9hPOWDQZzRUa%2B8Jm%2F5TefZC4iFaoWYSyHgBdWsuABSS906Wkr7W4PRE5SnxKkk8f5MV0p26QWtVlPsagXnKBdGEEEFQ7Ocgho1jT7M%2BOiCAZhmplBYj7JCoZ1%2FZuQkdryWgkZkfMWtzbbg6gP5V5X3EX%2BYPxOV30ExPgxJ%2BLf35k%2B4TS2o3Rq19FrSmPuCll0epioy9qpcY88Z%2BWpSwhBdqMQnzxesnIcie83mDuvsvQH893lq7NusID5qECnHw3%2Bxe%2FwnNjBJECZck40%2BUHozkSsmhO5qh%2BxAVeeCkA6%2F4IkGiDQiMO2XjL8GOqUBWP1ZfHL%2B0JUTozocy9Ua%2FTE5taZR3J6cqv4S7s3d9gSWKFqmv1vRq%2BUo%2BZwSy3FAa0qP5evuJa59FxPqsXZEoMxDGV73G55dpMI69rvgnBZNY22kG8%2B6g9Nm2lwUplAgELFjDJKdyXt0YbzXEUs%2FZ%2BWh%2F6WqX1cEYi4aH90KdebchPKEALcSCFYstCn%2BoLmULGo%2FvR%2BrUB4%2FWZK%2BSeSlMvpS4y8G&X-Amz-Signature=7482e541cb128d60184496fe5f1044e0264cb078451f9934a673972c4dab5b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKYQECLX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo4R6350xHAQWShDBsGH8hUTv7fnz53qCs6Xl9m7nYQwIgWWB3q2PhU2k2KMLggt7F1M01w%2Fj%2F9Yk8BM7KWEvMNRsq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOI3UsfEYGX8meMSoyrcA3dZq1Jqv0kEiniOi4Ktqkk4DxR762OCQPQAXvjroOsl%2BBC0NHt%2FpMbmD7m0m7R0%2FYAlUFQYzHTb9Bfx6IGxOPDyusULY%2BordAT%2Beue4fAaxnzYdU%2FgL8pKepMOOR3IvD0Cp7S8hfTjZmZShBmPzIJ7ygI4HCVK1augGW3%2FtYda65Q%2BHmmTGs2CDodAx7BEX7q8ShjbiAnG8hz0BvhCodP4A4TuZ21AqRkulB%2FCP%2FeaWn4qkReepyd6LUu8CSZp0VaA0etaaS0RiOWq4lQ1gnj5AT%2FIGQMZiZw5qOooKpKbQ825pCpnS1OVWZw4LkeII6OuDGdKUgq9hPOWDQZzRUa%2B8Jm%2F5TefZC4iFaoWYSyHgBdWsuABSS906Wkr7W4PRE5SnxKkk8f5MV0p26QWtVlPsagXnKBdGEEEFQ7Ocgho1jT7M%2BOiCAZhmplBYj7JCoZ1%2FZuQkdryWgkZkfMWtzbbg6gP5V5X3EX%2BYPxOV30ExPgxJ%2BLf35k%2B4TS2o3Rq19FrSmPuCll0epioy9qpcY88Z%2BWpSwhBdqMQnzxesnIcie83mDuvsvQH893lq7NusID5qECnHw3%2Bxe%2FwnNjBJECZck40%2BUHozkSsmhO5qh%2BxAVeeCkA6%2F4IkGiDQiMO2XjL8GOqUBWP1ZfHL%2B0JUTozocy9Ua%2FTE5taZR3J6cqv4S7s3d9gSWKFqmv1vRq%2BUo%2BZwSy3FAa0qP5evuJa59FxPqsXZEoMxDGV73G55dpMI69rvgnBZNY22kG8%2B6g9Nm2lwUplAgELFjDJKdyXt0YbzXEUs%2FZ%2BWh%2F6WqX1cEYi4aH90KdebchPKEALcSCFYstCn%2BoLmULGo%2FvR%2BrUB4%2FWZK%2BSeSlMvpS4y8G&X-Amz-Signature=ff7d23eaa6790404b320c6a7cf42ca40b3d598bfb61904186ede9bce52e40aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKYQECLX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo4R6350xHAQWShDBsGH8hUTv7fnz53qCs6Xl9m7nYQwIgWWB3q2PhU2k2KMLggt7F1M01w%2Fj%2F9Yk8BM7KWEvMNRsq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOI3UsfEYGX8meMSoyrcA3dZq1Jqv0kEiniOi4Ktqkk4DxR762OCQPQAXvjroOsl%2BBC0NHt%2FpMbmD7m0m7R0%2FYAlUFQYzHTb9Bfx6IGxOPDyusULY%2BordAT%2Beue4fAaxnzYdU%2FgL8pKepMOOR3IvD0Cp7S8hfTjZmZShBmPzIJ7ygI4HCVK1augGW3%2FtYda65Q%2BHmmTGs2CDodAx7BEX7q8ShjbiAnG8hz0BvhCodP4A4TuZ21AqRkulB%2FCP%2FeaWn4qkReepyd6LUu8CSZp0VaA0etaaS0RiOWq4lQ1gnj5AT%2FIGQMZiZw5qOooKpKbQ825pCpnS1OVWZw4LkeII6OuDGdKUgq9hPOWDQZzRUa%2B8Jm%2F5TefZC4iFaoWYSyHgBdWsuABSS906Wkr7W4PRE5SnxKkk8f5MV0p26QWtVlPsagXnKBdGEEEFQ7Ocgho1jT7M%2BOiCAZhmplBYj7JCoZ1%2FZuQkdryWgkZkfMWtzbbg6gP5V5X3EX%2BYPxOV30ExPgxJ%2BLf35k%2B4TS2o3Rq19FrSmPuCll0epioy9qpcY88Z%2BWpSwhBdqMQnzxesnIcie83mDuvsvQH893lq7NusID5qECnHw3%2Bxe%2FwnNjBJECZck40%2BUHozkSsmhO5qh%2BxAVeeCkA6%2F4IkGiDQiMO2XjL8GOqUBWP1ZfHL%2B0JUTozocy9Ua%2FTE5taZR3J6cqv4S7s3d9gSWKFqmv1vRq%2BUo%2BZwSy3FAa0qP5evuJa59FxPqsXZEoMxDGV73G55dpMI69rvgnBZNY22kG8%2B6g9Nm2lwUplAgELFjDJKdyXt0YbzXEUs%2FZ%2BWh%2F6WqX1cEYi4aH90KdebchPKEALcSCFYstCn%2BoLmULGo%2FvR%2BrUB4%2FWZK%2BSeSlMvpS4y8G&X-Amz-Signature=e76ea01fee67135b09cad66c254271e98e42e4b805d001328ef24e092f15e86f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKYQECLX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo4R6350xHAQWShDBsGH8hUTv7fnz53qCs6Xl9m7nYQwIgWWB3q2PhU2k2KMLggt7F1M01w%2Fj%2F9Yk8BM7KWEvMNRsq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOI3UsfEYGX8meMSoyrcA3dZq1Jqv0kEiniOi4Ktqkk4DxR762OCQPQAXvjroOsl%2BBC0NHt%2FpMbmD7m0m7R0%2FYAlUFQYzHTb9Bfx6IGxOPDyusULY%2BordAT%2Beue4fAaxnzYdU%2FgL8pKepMOOR3IvD0Cp7S8hfTjZmZShBmPzIJ7ygI4HCVK1augGW3%2FtYda65Q%2BHmmTGs2CDodAx7BEX7q8ShjbiAnG8hz0BvhCodP4A4TuZ21AqRkulB%2FCP%2FeaWn4qkReepyd6LUu8CSZp0VaA0etaaS0RiOWq4lQ1gnj5AT%2FIGQMZiZw5qOooKpKbQ825pCpnS1OVWZw4LkeII6OuDGdKUgq9hPOWDQZzRUa%2B8Jm%2F5TefZC4iFaoWYSyHgBdWsuABSS906Wkr7W4PRE5SnxKkk8f5MV0p26QWtVlPsagXnKBdGEEEFQ7Ocgho1jT7M%2BOiCAZhmplBYj7JCoZ1%2FZuQkdryWgkZkfMWtzbbg6gP5V5X3EX%2BYPxOV30ExPgxJ%2BLf35k%2B4TS2o3Rq19FrSmPuCll0epioy9qpcY88Z%2BWpSwhBdqMQnzxesnIcie83mDuvsvQH893lq7NusID5qECnHw3%2Bxe%2FwnNjBJECZck40%2BUHozkSsmhO5qh%2BxAVeeCkA6%2F4IkGiDQiMO2XjL8GOqUBWP1ZfHL%2B0JUTozocy9Ua%2FTE5taZR3J6cqv4S7s3d9gSWKFqmv1vRq%2BUo%2BZwSy3FAa0qP5evuJa59FxPqsXZEoMxDGV73G55dpMI69rvgnBZNY22kG8%2B6g9Nm2lwUplAgELFjDJKdyXt0YbzXEUs%2FZ%2BWh%2F6WqX1cEYi4aH90KdebchPKEALcSCFYstCn%2BoLmULGo%2FvR%2BrUB4%2FWZK%2BSeSlMvpS4y8G&X-Amz-Signature=2fa54cdc85246b05cde34f56a54a3f53ac2b488bc02565c8d7c02ca990663940&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKYQECLX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo4R6350xHAQWShDBsGH8hUTv7fnz53qCs6Xl9m7nYQwIgWWB3q2PhU2k2KMLggt7F1M01w%2Fj%2F9Yk8BM7KWEvMNRsq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOI3UsfEYGX8meMSoyrcA3dZq1Jqv0kEiniOi4Ktqkk4DxR762OCQPQAXvjroOsl%2BBC0NHt%2FpMbmD7m0m7R0%2FYAlUFQYzHTb9Bfx6IGxOPDyusULY%2BordAT%2Beue4fAaxnzYdU%2FgL8pKepMOOR3IvD0Cp7S8hfTjZmZShBmPzIJ7ygI4HCVK1augGW3%2FtYda65Q%2BHmmTGs2CDodAx7BEX7q8ShjbiAnG8hz0BvhCodP4A4TuZ21AqRkulB%2FCP%2FeaWn4qkReepyd6LUu8CSZp0VaA0etaaS0RiOWq4lQ1gnj5AT%2FIGQMZiZw5qOooKpKbQ825pCpnS1OVWZw4LkeII6OuDGdKUgq9hPOWDQZzRUa%2B8Jm%2F5TefZC4iFaoWYSyHgBdWsuABSS906Wkr7W4PRE5SnxKkk8f5MV0p26QWtVlPsagXnKBdGEEEFQ7Ocgho1jT7M%2BOiCAZhmplBYj7JCoZ1%2FZuQkdryWgkZkfMWtzbbg6gP5V5X3EX%2BYPxOV30ExPgxJ%2BLf35k%2B4TS2o3Rq19FrSmPuCll0epioy9qpcY88Z%2BWpSwhBdqMQnzxesnIcie83mDuvsvQH893lq7NusID5qECnHw3%2Bxe%2FwnNjBJECZck40%2BUHozkSsmhO5qh%2BxAVeeCkA6%2F4IkGiDQiMO2XjL8GOqUBWP1ZfHL%2B0JUTozocy9Ua%2FTE5taZR3J6cqv4S7s3d9gSWKFqmv1vRq%2BUo%2BZwSy3FAa0qP5evuJa59FxPqsXZEoMxDGV73G55dpMI69rvgnBZNY22kG8%2B6g9Nm2lwUplAgELFjDJKdyXt0YbzXEUs%2FZ%2BWh%2F6WqX1cEYi4aH90KdebchPKEALcSCFYstCn%2BoLmULGo%2FvR%2BrUB4%2FWZK%2BSeSlMvpS4y8G&X-Amz-Signature=8d1b0b5dbdb34a94edb34745b9066b29d064b9f07e8d403f2377ca31c94f772f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKYQECLX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo4R6350xHAQWShDBsGH8hUTv7fnz53qCs6Xl9m7nYQwIgWWB3q2PhU2k2KMLggt7F1M01w%2Fj%2F9Yk8BM7KWEvMNRsq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOI3UsfEYGX8meMSoyrcA3dZq1Jqv0kEiniOi4Ktqkk4DxR762OCQPQAXvjroOsl%2BBC0NHt%2FpMbmD7m0m7R0%2FYAlUFQYzHTb9Bfx6IGxOPDyusULY%2BordAT%2Beue4fAaxnzYdU%2FgL8pKepMOOR3IvD0Cp7S8hfTjZmZShBmPzIJ7ygI4HCVK1augGW3%2FtYda65Q%2BHmmTGs2CDodAx7BEX7q8ShjbiAnG8hz0BvhCodP4A4TuZ21AqRkulB%2FCP%2FeaWn4qkReepyd6LUu8CSZp0VaA0etaaS0RiOWq4lQ1gnj5AT%2FIGQMZiZw5qOooKpKbQ825pCpnS1OVWZw4LkeII6OuDGdKUgq9hPOWDQZzRUa%2B8Jm%2F5TefZC4iFaoWYSyHgBdWsuABSS906Wkr7W4PRE5SnxKkk8f5MV0p26QWtVlPsagXnKBdGEEEFQ7Ocgho1jT7M%2BOiCAZhmplBYj7JCoZ1%2FZuQkdryWgkZkfMWtzbbg6gP5V5X3EX%2BYPxOV30ExPgxJ%2BLf35k%2B4TS2o3Rq19FrSmPuCll0epioy9qpcY88Z%2BWpSwhBdqMQnzxesnIcie83mDuvsvQH893lq7NusID5qECnHw3%2Bxe%2FwnNjBJECZck40%2BUHozkSsmhO5qh%2BxAVeeCkA6%2F4IkGiDQiMO2XjL8GOqUBWP1ZfHL%2B0JUTozocy9Ua%2FTE5taZR3J6cqv4S7s3d9gSWKFqmv1vRq%2BUo%2BZwSy3FAa0qP5evuJa59FxPqsXZEoMxDGV73G55dpMI69rvgnBZNY22kG8%2B6g9Nm2lwUplAgELFjDJKdyXt0YbzXEUs%2FZ%2BWh%2F6WqX1cEYi4aH90KdebchPKEALcSCFYstCn%2BoLmULGo%2FvR%2BrUB4%2FWZK%2BSeSlMvpS4y8G&X-Amz-Signature=87871f4a8934d8dd38c9ec3ec8301c7d4ea86bf80e063899532b2422e1f73c97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKYQECLX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo4R6350xHAQWShDBsGH8hUTv7fnz53qCs6Xl9m7nYQwIgWWB3q2PhU2k2KMLggt7F1M01w%2Fj%2F9Yk8BM7KWEvMNRsq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOI3UsfEYGX8meMSoyrcA3dZq1Jqv0kEiniOi4Ktqkk4DxR762OCQPQAXvjroOsl%2BBC0NHt%2FpMbmD7m0m7R0%2FYAlUFQYzHTb9Bfx6IGxOPDyusULY%2BordAT%2Beue4fAaxnzYdU%2FgL8pKepMOOR3IvD0Cp7S8hfTjZmZShBmPzIJ7ygI4HCVK1augGW3%2FtYda65Q%2BHmmTGs2CDodAx7BEX7q8ShjbiAnG8hz0BvhCodP4A4TuZ21AqRkulB%2FCP%2FeaWn4qkReepyd6LUu8CSZp0VaA0etaaS0RiOWq4lQ1gnj5AT%2FIGQMZiZw5qOooKpKbQ825pCpnS1OVWZw4LkeII6OuDGdKUgq9hPOWDQZzRUa%2B8Jm%2F5TefZC4iFaoWYSyHgBdWsuABSS906Wkr7W4PRE5SnxKkk8f5MV0p26QWtVlPsagXnKBdGEEEFQ7Ocgho1jT7M%2BOiCAZhmplBYj7JCoZ1%2FZuQkdryWgkZkfMWtzbbg6gP5V5X3EX%2BYPxOV30ExPgxJ%2BLf35k%2B4TS2o3Rq19FrSmPuCll0epioy9qpcY88Z%2BWpSwhBdqMQnzxesnIcie83mDuvsvQH893lq7NusID5qECnHw3%2Bxe%2FwnNjBJECZck40%2BUHozkSsmhO5qh%2BxAVeeCkA6%2F4IkGiDQiMO2XjL8GOqUBWP1ZfHL%2B0JUTozocy9Ua%2FTE5taZR3J6cqv4S7s3d9gSWKFqmv1vRq%2BUo%2BZwSy3FAa0qP5evuJa59FxPqsXZEoMxDGV73G55dpMI69rvgnBZNY22kG8%2B6g9Nm2lwUplAgELFjDJKdyXt0YbzXEUs%2FZ%2BWh%2F6WqX1cEYi4aH90KdebchPKEALcSCFYstCn%2BoLmULGo%2FvR%2BrUB4%2FWZK%2BSeSlMvpS4y8G&X-Amz-Signature=a26394190ef30772a8702f3359aa5ba87324510ab6bd96942f1a980bf6d2a8f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
