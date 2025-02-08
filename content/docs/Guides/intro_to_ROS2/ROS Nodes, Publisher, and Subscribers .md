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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLWPFBR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCSVwLe%2BGwmWmonp0gqkMO7tQXZQ4i7S1IMrvGhGQ%2BrNQIgTCD4HIJPWvE5fxheHGvqKrGS1qTr6YSTpSbpz0aPGaIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7IVs8mQDUAbQ4mKyrcA7vvykcuYzxXN4yEpkFhEAg0rKFGGoYl2FranFVQ%2B77VbtvDBB2gq1TUcmw7HtyjocCVcojHyAfRLlurRIcxKmQV%2B4leWX7KFTq5eBVsKvQcO6ThuJn0Rt40bjx1ProHpvFuEbQ1Kd8GJpTnmxBNflnXAN0BiDOxZXkjj9Aq3dheSafo1lIn3SelB1BmlAfiWyj8TjNZrdmDk0sMC5V3wbwz7L%2B1FPiPoO8%2FZX%2FMcjJRP%2FU42y5x3rnG%2FWE8Oq0cDrW8I5erVis1i%2BY09eaabXF5yuEU3JvKqGRxdvY4cunuHA%2F0Yg7Pm2NO2ISzBmioOPdNHZnmg%2BwoKQdPZv45Z1brd080CfhntV%2B0Orqr64iUTjnRyRPnyz2kBPjyQ3COOqatraRD6FQSexyaH51aSdgUmGcn%2F%2Bw2niMN2OI5eSYtzcyMQQLy3ZKtm9lj9nSwvj2Xt28fbeqE4V3pjW8Frmzeb2yR0x6oxUsOMGkMLibXBzdiZ5WtRMfqhGlHm4No9oAlnrKv8CzhKx0jy60voJQC28%2FjcUeyxaCGcEXbStUjh7n8gaZT24PrhGv1buo1UiB2KG5NOcHDR%2B%2FOqXvLyI4DMtTX6i00%2B91tqRuFMAw%2BYeNgFlSMntWSQVmvMNfgnr0GOqUBoqgHiTOWqUtUq%2FnSFsI5jTwL2TWsdZOPMdAqEjNjdAuV98IVvvrvnzFnXCjsEsq3yrmIvLn04r2OJ9dV6ZA3GEx28g1ekJ9gVoY175HKmbPu%2BcaqxKpJHqwZRl5YGNhL0Y7AQcXLlad0H4FpnQZ0nw6qEEZveM0S%2FspkZqmBJFjEm1XCm6DScwRmrWIJzhCs6TgKxf%2FupWyuSKxQUOTDJQeJUkjA&X-Amz-Signature=30e4c72d101f9dad7bb175e9b270524e608968798b9f4fe58263e7b0e287ddff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLWPFBR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCSVwLe%2BGwmWmonp0gqkMO7tQXZQ4i7S1IMrvGhGQ%2BrNQIgTCD4HIJPWvE5fxheHGvqKrGS1qTr6YSTpSbpz0aPGaIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7IVs8mQDUAbQ4mKyrcA7vvykcuYzxXN4yEpkFhEAg0rKFGGoYl2FranFVQ%2B77VbtvDBB2gq1TUcmw7HtyjocCVcojHyAfRLlurRIcxKmQV%2B4leWX7KFTq5eBVsKvQcO6ThuJn0Rt40bjx1ProHpvFuEbQ1Kd8GJpTnmxBNflnXAN0BiDOxZXkjj9Aq3dheSafo1lIn3SelB1BmlAfiWyj8TjNZrdmDk0sMC5V3wbwz7L%2B1FPiPoO8%2FZX%2FMcjJRP%2FU42y5x3rnG%2FWE8Oq0cDrW8I5erVis1i%2BY09eaabXF5yuEU3JvKqGRxdvY4cunuHA%2F0Yg7Pm2NO2ISzBmioOPdNHZnmg%2BwoKQdPZv45Z1brd080CfhntV%2B0Orqr64iUTjnRyRPnyz2kBPjyQ3COOqatraRD6FQSexyaH51aSdgUmGcn%2F%2Bw2niMN2OI5eSYtzcyMQQLy3ZKtm9lj9nSwvj2Xt28fbeqE4V3pjW8Frmzeb2yR0x6oxUsOMGkMLibXBzdiZ5WtRMfqhGlHm4No9oAlnrKv8CzhKx0jy60voJQC28%2FjcUeyxaCGcEXbStUjh7n8gaZT24PrhGv1buo1UiB2KG5NOcHDR%2B%2FOqXvLyI4DMtTX6i00%2B91tqRuFMAw%2BYeNgFlSMntWSQVmvMNfgnr0GOqUBoqgHiTOWqUtUq%2FnSFsI5jTwL2TWsdZOPMdAqEjNjdAuV98IVvvrvnzFnXCjsEsq3yrmIvLn04r2OJ9dV6ZA3GEx28g1ekJ9gVoY175HKmbPu%2BcaqxKpJHqwZRl5YGNhL0Y7AQcXLlad0H4FpnQZ0nw6qEEZveM0S%2FspkZqmBJFjEm1XCm6DScwRmrWIJzhCs6TgKxf%2FupWyuSKxQUOTDJQeJUkjA&X-Amz-Signature=4f8f11d174a3d2e95911a78cc434b1e11684f93ac11c9e83b1bbe3c5e957e854&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLWPFBR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCSVwLe%2BGwmWmonp0gqkMO7tQXZQ4i7S1IMrvGhGQ%2BrNQIgTCD4HIJPWvE5fxheHGvqKrGS1qTr6YSTpSbpz0aPGaIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7IVs8mQDUAbQ4mKyrcA7vvykcuYzxXN4yEpkFhEAg0rKFGGoYl2FranFVQ%2B77VbtvDBB2gq1TUcmw7HtyjocCVcojHyAfRLlurRIcxKmQV%2B4leWX7KFTq5eBVsKvQcO6ThuJn0Rt40bjx1ProHpvFuEbQ1Kd8GJpTnmxBNflnXAN0BiDOxZXkjj9Aq3dheSafo1lIn3SelB1BmlAfiWyj8TjNZrdmDk0sMC5V3wbwz7L%2B1FPiPoO8%2FZX%2FMcjJRP%2FU42y5x3rnG%2FWE8Oq0cDrW8I5erVis1i%2BY09eaabXF5yuEU3JvKqGRxdvY4cunuHA%2F0Yg7Pm2NO2ISzBmioOPdNHZnmg%2BwoKQdPZv45Z1brd080CfhntV%2B0Orqr64iUTjnRyRPnyz2kBPjyQ3COOqatraRD6FQSexyaH51aSdgUmGcn%2F%2Bw2niMN2OI5eSYtzcyMQQLy3ZKtm9lj9nSwvj2Xt28fbeqE4V3pjW8Frmzeb2yR0x6oxUsOMGkMLibXBzdiZ5WtRMfqhGlHm4No9oAlnrKv8CzhKx0jy60voJQC28%2FjcUeyxaCGcEXbStUjh7n8gaZT24PrhGv1buo1UiB2KG5NOcHDR%2B%2FOqXvLyI4DMtTX6i00%2B91tqRuFMAw%2BYeNgFlSMntWSQVmvMNfgnr0GOqUBoqgHiTOWqUtUq%2FnSFsI5jTwL2TWsdZOPMdAqEjNjdAuV98IVvvrvnzFnXCjsEsq3yrmIvLn04r2OJ9dV6ZA3GEx28g1ekJ9gVoY175HKmbPu%2BcaqxKpJHqwZRl5YGNhL0Y7AQcXLlad0H4FpnQZ0nw6qEEZveM0S%2FspkZqmBJFjEm1XCm6DScwRmrWIJzhCs6TgKxf%2FupWyuSKxQUOTDJQeJUkjA&X-Amz-Signature=eac0bcb05cd5a7241002c001d780a3319043a4183392c41c36f131a6fa3673d0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLWPFBR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCSVwLe%2BGwmWmonp0gqkMO7tQXZQ4i7S1IMrvGhGQ%2BrNQIgTCD4HIJPWvE5fxheHGvqKrGS1qTr6YSTpSbpz0aPGaIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7IVs8mQDUAbQ4mKyrcA7vvykcuYzxXN4yEpkFhEAg0rKFGGoYl2FranFVQ%2B77VbtvDBB2gq1TUcmw7HtyjocCVcojHyAfRLlurRIcxKmQV%2B4leWX7KFTq5eBVsKvQcO6ThuJn0Rt40bjx1ProHpvFuEbQ1Kd8GJpTnmxBNflnXAN0BiDOxZXkjj9Aq3dheSafo1lIn3SelB1BmlAfiWyj8TjNZrdmDk0sMC5V3wbwz7L%2B1FPiPoO8%2FZX%2FMcjJRP%2FU42y5x3rnG%2FWE8Oq0cDrW8I5erVis1i%2BY09eaabXF5yuEU3JvKqGRxdvY4cunuHA%2F0Yg7Pm2NO2ISzBmioOPdNHZnmg%2BwoKQdPZv45Z1brd080CfhntV%2B0Orqr64iUTjnRyRPnyz2kBPjyQ3COOqatraRD6FQSexyaH51aSdgUmGcn%2F%2Bw2niMN2OI5eSYtzcyMQQLy3ZKtm9lj9nSwvj2Xt28fbeqE4V3pjW8Frmzeb2yR0x6oxUsOMGkMLibXBzdiZ5WtRMfqhGlHm4No9oAlnrKv8CzhKx0jy60voJQC28%2FjcUeyxaCGcEXbStUjh7n8gaZT24PrhGv1buo1UiB2KG5NOcHDR%2B%2FOqXvLyI4DMtTX6i00%2B91tqRuFMAw%2BYeNgFlSMntWSQVmvMNfgnr0GOqUBoqgHiTOWqUtUq%2FnSFsI5jTwL2TWsdZOPMdAqEjNjdAuV98IVvvrvnzFnXCjsEsq3yrmIvLn04r2OJ9dV6ZA3GEx28g1ekJ9gVoY175HKmbPu%2BcaqxKpJHqwZRl5YGNhL0Y7AQcXLlad0H4FpnQZ0nw6qEEZveM0S%2FspkZqmBJFjEm1XCm6DScwRmrWIJzhCs6TgKxf%2FupWyuSKxQUOTDJQeJUkjA&X-Amz-Signature=2778a1338add3f7b909c209b47af9e0ea2484d79a42cfcad751cd4d0ec2891fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLWPFBR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCSVwLe%2BGwmWmonp0gqkMO7tQXZQ4i7S1IMrvGhGQ%2BrNQIgTCD4HIJPWvE5fxheHGvqKrGS1qTr6YSTpSbpz0aPGaIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7IVs8mQDUAbQ4mKyrcA7vvykcuYzxXN4yEpkFhEAg0rKFGGoYl2FranFVQ%2B77VbtvDBB2gq1TUcmw7HtyjocCVcojHyAfRLlurRIcxKmQV%2B4leWX7KFTq5eBVsKvQcO6ThuJn0Rt40bjx1ProHpvFuEbQ1Kd8GJpTnmxBNflnXAN0BiDOxZXkjj9Aq3dheSafo1lIn3SelB1BmlAfiWyj8TjNZrdmDk0sMC5V3wbwz7L%2B1FPiPoO8%2FZX%2FMcjJRP%2FU42y5x3rnG%2FWE8Oq0cDrW8I5erVis1i%2BY09eaabXF5yuEU3JvKqGRxdvY4cunuHA%2F0Yg7Pm2NO2ISzBmioOPdNHZnmg%2BwoKQdPZv45Z1brd080CfhntV%2B0Orqr64iUTjnRyRPnyz2kBPjyQ3COOqatraRD6FQSexyaH51aSdgUmGcn%2F%2Bw2niMN2OI5eSYtzcyMQQLy3ZKtm9lj9nSwvj2Xt28fbeqE4V3pjW8Frmzeb2yR0x6oxUsOMGkMLibXBzdiZ5WtRMfqhGlHm4No9oAlnrKv8CzhKx0jy60voJQC28%2FjcUeyxaCGcEXbStUjh7n8gaZT24PrhGv1buo1UiB2KG5NOcHDR%2B%2FOqXvLyI4DMtTX6i00%2B91tqRuFMAw%2BYeNgFlSMntWSQVmvMNfgnr0GOqUBoqgHiTOWqUtUq%2FnSFsI5jTwL2TWsdZOPMdAqEjNjdAuV98IVvvrvnzFnXCjsEsq3yrmIvLn04r2OJ9dV6ZA3GEx28g1ekJ9gVoY175HKmbPu%2BcaqxKpJHqwZRl5YGNhL0Y7AQcXLlad0H4FpnQZ0nw6qEEZveM0S%2FspkZqmBJFjEm1XCm6DScwRmrWIJzhCs6TgKxf%2FupWyuSKxQUOTDJQeJUkjA&X-Amz-Signature=d83b537b28e23685d9e9ba330a8a6ad9cfc9a70f4265fc6689e8c8fc5e61c22d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLWPFBR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCSVwLe%2BGwmWmonp0gqkMO7tQXZQ4i7S1IMrvGhGQ%2BrNQIgTCD4HIJPWvE5fxheHGvqKrGS1qTr6YSTpSbpz0aPGaIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7IVs8mQDUAbQ4mKyrcA7vvykcuYzxXN4yEpkFhEAg0rKFGGoYl2FranFVQ%2B77VbtvDBB2gq1TUcmw7HtyjocCVcojHyAfRLlurRIcxKmQV%2B4leWX7KFTq5eBVsKvQcO6ThuJn0Rt40bjx1ProHpvFuEbQ1Kd8GJpTnmxBNflnXAN0BiDOxZXkjj9Aq3dheSafo1lIn3SelB1BmlAfiWyj8TjNZrdmDk0sMC5V3wbwz7L%2B1FPiPoO8%2FZX%2FMcjJRP%2FU42y5x3rnG%2FWE8Oq0cDrW8I5erVis1i%2BY09eaabXF5yuEU3JvKqGRxdvY4cunuHA%2F0Yg7Pm2NO2ISzBmioOPdNHZnmg%2BwoKQdPZv45Z1brd080CfhntV%2B0Orqr64iUTjnRyRPnyz2kBPjyQ3COOqatraRD6FQSexyaH51aSdgUmGcn%2F%2Bw2niMN2OI5eSYtzcyMQQLy3ZKtm9lj9nSwvj2Xt28fbeqE4V3pjW8Frmzeb2yR0x6oxUsOMGkMLibXBzdiZ5WtRMfqhGlHm4No9oAlnrKv8CzhKx0jy60voJQC28%2FjcUeyxaCGcEXbStUjh7n8gaZT24PrhGv1buo1UiB2KG5NOcHDR%2B%2FOqXvLyI4DMtTX6i00%2B91tqRuFMAw%2BYeNgFlSMntWSQVmvMNfgnr0GOqUBoqgHiTOWqUtUq%2FnSFsI5jTwL2TWsdZOPMdAqEjNjdAuV98IVvvrvnzFnXCjsEsq3yrmIvLn04r2OJ9dV6ZA3GEx28g1ekJ9gVoY175HKmbPu%2BcaqxKpJHqwZRl5YGNhL0Y7AQcXLlad0H4FpnQZ0nw6qEEZveM0S%2FspkZqmBJFjEm1XCm6DScwRmrWIJzhCs6TgKxf%2FupWyuSKxQUOTDJQeJUkjA&X-Amz-Signature=fd73710871b2e7654bdaeae13dc0230269920adb13e80040a79bbc1afc414138&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLWPFBR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCSVwLe%2BGwmWmonp0gqkMO7tQXZQ4i7S1IMrvGhGQ%2BrNQIgTCD4HIJPWvE5fxheHGvqKrGS1qTr6YSTpSbpz0aPGaIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7IVs8mQDUAbQ4mKyrcA7vvykcuYzxXN4yEpkFhEAg0rKFGGoYl2FranFVQ%2B77VbtvDBB2gq1TUcmw7HtyjocCVcojHyAfRLlurRIcxKmQV%2B4leWX7KFTq5eBVsKvQcO6ThuJn0Rt40bjx1ProHpvFuEbQ1Kd8GJpTnmxBNflnXAN0BiDOxZXkjj9Aq3dheSafo1lIn3SelB1BmlAfiWyj8TjNZrdmDk0sMC5V3wbwz7L%2B1FPiPoO8%2FZX%2FMcjJRP%2FU42y5x3rnG%2FWE8Oq0cDrW8I5erVis1i%2BY09eaabXF5yuEU3JvKqGRxdvY4cunuHA%2F0Yg7Pm2NO2ISzBmioOPdNHZnmg%2BwoKQdPZv45Z1brd080CfhntV%2B0Orqr64iUTjnRyRPnyz2kBPjyQ3COOqatraRD6FQSexyaH51aSdgUmGcn%2F%2Bw2niMN2OI5eSYtzcyMQQLy3ZKtm9lj9nSwvj2Xt28fbeqE4V3pjW8Frmzeb2yR0x6oxUsOMGkMLibXBzdiZ5WtRMfqhGlHm4No9oAlnrKv8CzhKx0jy60voJQC28%2FjcUeyxaCGcEXbStUjh7n8gaZT24PrhGv1buo1UiB2KG5NOcHDR%2B%2FOqXvLyI4DMtTX6i00%2B91tqRuFMAw%2BYeNgFlSMntWSQVmvMNfgnr0GOqUBoqgHiTOWqUtUq%2FnSFsI5jTwL2TWsdZOPMdAqEjNjdAuV98IVvvrvnzFnXCjsEsq3yrmIvLn04r2OJ9dV6ZA3GEx28g1ekJ9gVoY175HKmbPu%2BcaqxKpJHqwZRl5YGNhL0Y7AQcXLlad0H4FpnQZ0nw6qEEZveM0S%2FspkZqmBJFjEm1XCm6DScwRmrWIJzhCs6TgKxf%2FupWyuSKxQUOTDJQeJUkjA&X-Amz-Signature=af4d7c28ac333d0b56176b04c6a6ba552df8543d95edf8d46801e9b5df0c7942&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLWPFBR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCSVwLe%2BGwmWmonp0gqkMO7tQXZQ4i7S1IMrvGhGQ%2BrNQIgTCD4HIJPWvE5fxheHGvqKrGS1qTr6YSTpSbpz0aPGaIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7IVs8mQDUAbQ4mKyrcA7vvykcuYzxXN4yEpkFhEAg0rKFGGoYl2FranFVQ%2B77VbtvDBB2gq1TUcmw7HtyjocCVcojHyAfRLlurRIcxKmQV%2B4leWX7KFTq5eBVsKvQcO6ThuJn0Rt40bjx1ProHpvFuEbQ1Kd8GJpTnmxBNflnXAN0BiDOxZXkjj9Aq3dheSafo1lIn3SelB1BmlAfiWyj8TjNZrdmDk0sMC5V3wbwz7L%2B1FPiPoO8%2FZX%2FMcjJRP%2FU42y5x3rnG%2FWE8Oq0cDrW8I5erVis1i%2BY09eaabXF5yuEU3JvKqGRxdvY4cunuHA%2F0Yg7Pm2NO2ISzBmioOPdNHZnmg%2BwoKQdPZv45Z1brd080CfhntV%2B0Orqr64iUTjnRyRPnyz2kBPjyQ3COOqatraRD6FQSexyaH51aSdgUmGcn%2F%2Bw2niMN2OI5eSYtzcyMQQLy3ZKtm9lj9nSwvj2Xt28fbeqE4V3pjW8Frmzeb2yR0x6oxUsOMGkMLibXBzdiZ5WtRMfqhGlHm4No9oAlnrKv8CzhKx0jy60voJQC28%2FjcUeyxaCGcEXbStUjh7n8gaZT24PrhGv1buo1UiB2KG5NOcHDR%2B%2FOqXvLyI4DMtTX6i00%2B91tqRuFMAw%2BYeNgFlSMntWSQVmvMNfgnr0GOqUBoqgHiTOWqUtUq%2FnSFsI5jTwL2TWsdZOPMdAqEjNjdAuV98IVvvrvnzFnXCjsEsq3yrmIvLn04r2OJ9dV6ZA3GEx28g1ekJ9gVoY175HKmbPu%2BcaqxKpJHqwZRl5YGNhL0Y7AQcXLlad0H4FpnQZ0nw6qEEZveM0S%2FspkZqmBJFjEm1XCm6DScwRmrWIJzhCs6TgKxf%2FupWyuSKxQUOTDJQeJUkjA&X-Amz-Signature=22798bdf084b660847ef153fc37e04af0790b44aa79ce3d3bc322354eab94325&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
