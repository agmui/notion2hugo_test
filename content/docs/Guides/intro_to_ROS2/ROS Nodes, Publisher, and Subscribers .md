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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3MJFQG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F%2FBACLWhqFvlDm20Qa8ev90AFZoFuNobeMpyXAY1E%2FwIhAJkJY1J7ubNAjROqB5ThDfemfR4Ums1nkEwJDHyTk6%2BjKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYDwAGqyPmW3lIA80q3AOWCDRKeuMXpiZ20HbEXMTaD5IsUUGrnOTdSqXVSpeKFXyzqEvLeUOjxK3Ig%2FRrWCLNZRfJi1W5lKf1HIdZG8OjNJnIyaVkhZGgO5%2FWEVCivcFLMs%2F%2F6S0DpjwZY9kf%2F5C%2FhwU5Y9xcu0FPw2sDVAA6wdrr%2FnqPGGQ4GaQkIGNSlJwsSpF4RIMLXR7XbB72v9WWEw9FGrO6FuOUWEmrB3ukttg8hkb4ezfhM2a1tx8lp8qXfEfex5Gof04CVgCYKhpnqVyB6206YFu8AXwAyKo4P01%2BmtCoYd7JAM2t613i6U2C8mEWJnllQ6Mbz8Q13he6ZgWyUDe9ZEPkvpbNQNMHemZG5OrOUXbLoxVgmFsec6%2Boy2UXJPJg3RqVe1LK%2B3HqqEu%2Fbdo0p23HPW7K%2B2kd19V4iKI1Bmx5WTZieHWyp27FlXIBBKu7TCYFQ80ANU1ppDf76dLMbQVXd3O1FcVeILoxEiz7EGY0tOB%2F8yoRW3tMl09L0Y6jO7UzvK0aXIR4mKcMdaFlocby8HBISuSh%2FOWjI3zP9MZslmVhlNqlU66V3fgbT5cWaDcxHKGrz6Q2UK76N8LQfN7V6a30lJATDgCIC%2BeANVICRt5UCHD2Mczyob0XIJ%2FBzElzyzCUr9jCBjqkAXZOQA3BxeTeK1KGtZwBjmxYrn6CCOiF4WSppvPyUErt9xvUc5BQbzVwkJ2nVS8MG3hPQyHbDZ7lpBA1IrZjcrEWouCgdOxnEp%2Buh6c4lW5j08jsoTu3sItWq10K32R%2Fy1abibiWtFcWiz87VXwk2XrSWB4u5FsUgPWVkPzrOnFQHQhCo5RNm%2FynMC2Bq9EgOZ0G3NabQGA%2BOAMvdi0a5EhOoJUk&X-Amz-Signature=63dee8382ffd87c6129bfd7a68703034940c5a600a44b457e3ee7b5a40987bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3MJFQG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F%2FBACLWhqFvlDm20Qa8ev90AFZoFuNobeMpyXAY1E%2FwIhAJkJY1J7ubNAjROqB5ThDfemfR4Ums1nkEwJDHyTk6%2BjKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYDwAGqyPmW3lIA80q3AOWCDRKeuMXpiZ20HbEXMTaD5IsUUGrnOTdSqXVSpeKFXyzqEvLeUOjxK3Ig%2FRrWCLNZRfJi1W5lKf1HIdZG8OjNJnIyaVkhZGgO5%2FWEVCivcFLMs%2F%2F6S0DpjwZY9kf%2F5C%2FhwU5Y9xcu0FPw2sDVAA6wdrr%2FnqPGGQ4GaQkIGNSlJwsSpF4RIMLXR7XbB72v9WWEw9FGrO6FuOUWEmrB3ukttg8hkb4ezfhM2a1tx8lp8qXfEfex5Gof04CVgCYKhpnqVyB6206YFu8AXwAyKo4P01%2BmtCoYd7JAM2t613i6U2C8mEWJnllQ6Mbz8Q13he6ZgWyUDe9ZEPkvpbNQNMHemZG5OrOUXbLoxVgmFsec6%2Boy2UXJPJg3RqVe1LK%2B3HqqEu%2Fbdo0p23HPW7K%2B2kd19V4iKI1Bmx5WTZieHWyp27FlXIBBKu7TCYFQ80ANU1ppDf76dLMbQVXd3O1FcVeILoxEiz7EGY0tOB%2F8yoRW3tMl09L0Y6jO7UzvK0aXIR4mKcMdaFlocby8HBISuSh%2FOWjI3zP9MZslmVhlNqlU66V3fgbT5cWaDcxHKGrz6Q2UK76N8LQfN7V6a30lJATDgCIC%2BeANVICRt5UCHD2Mczyob0XIJ%2FBzElzyzCUr9jCBjqkAXZOQA3BxeTeK1KGtZwBjmxYrn6CCOiF4WSppvPyUErt9xvUc5BQbzVwkJ2nVS8MG3hPQyHbDZ7lpBA1IrZjcrEWouCgdOxnEp%2Buh6c4lW5j08jsoTu3sItWq10K32R%2Fy1abibiWtFcWiz87VXwk2XrSWB4u5FsUgPWVkPzrOnFQHQhCo5RNm%2FynMC2Bq9EgOZ0G3NabQGA%2BOAMvdi0a5EhOoJUk&X-Amz-Signature=c0ef0e2a32500a07562109eee1fa2f8b85cc2b22633b261f0e911146294966fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3MJFQG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F%2FBACLWhqFvlDm20Qa8ev90AFZoFuNobeMpyXAY1E%2FwIhAJkJY1J7ubNAjROqB5ThDfemfR4Ums1nkEwJDHyTk6%2BjKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYDwAGqyPmW3lIA80q3AOWCDRKeuMXpiZ20HbEXMTaD5IsUUGrnOTdSqXVSpeKFXyzqEvLeUOjxK3Ig%2FRrWCLNZRfJi1W5lKf1HIdZG8OjNJnIyaVkhZGgO5%2FWEVCivcFLMs%2F%2F6S0DpjwZY9kf%2F5C%2FhwU5Y9xcu0FPw2sDVAA6wdrr%2FnqPGGQ4GaQkIGNSlJwsSpF4RIMLXR7XbB72v9WWEw9FGrO6FuOUWEmrB3ukttg8hkb4ezfhM2a1tx8lp8qXfEfex5Gof04CVgCYKhpnqVyB6206YFu8AXwAyKo4P01%2BmtCoYd7JAM2t613i6U2C8mEWJnllQ6Mbz8Q13he6ZgWyUDe9ZEPkvpbNQNMHemZG5OrOUXbLoxVgmFsec6%2Boy2UXJPJg3RqVe1LK%2B3HqqEu%2Fbdo0p23HPW7K%2B2kd19V4iKI1Bmx5WTZieHWyp27FlXIBBKu7TCYFQ80ANU1ppDf76dLMbQVXd3O1FcVeILoxEiz7EGY0tOB%2F8yoRW3tMl09L0Y6jO7UzvK0aXIR4mKcMdaFlocby8HBISuSh%2FOWjI3zP9MZslmVhlNqlU66V3fgbT5cWaDcxHKGrz6Q2UK76N8LQfN7V6a30lJATDgCIC%2BeANVICRt5UCHD2Mczyob0XIJ%2FBzElzyzCUr9jCBjqkAXZOQA3BxeTeK1KGtZwBjmxYrn6CCOiF4WSppvPyUErt9xvUc5BQbzVwkJ2nVS8MG3hPQyHbDZ7lpBA1IrZjcrEWouCgdOxnEp%2Buh6c4lW5j08jsoTu3sItWq10K32R%2Fy1abibiWtFcWiz87VXwk2XrSWB4u5FsUgPWVkPzrOnFQHQhCo5RNm%2FynMC2Bq9EgOZ0G3NabQGA%2BOAMvdi0a5EhOoJUk&X-Amz-Signature=704fcc1c0d320c138138fd2e84750857bf58f6e902eeed6402580c80ed32bc42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3MJFQG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F%2FBACLWhqFvlDm20Qa8ev90AFZoFuNobeMpyXAY1E%2FwIhAJkJY1J7ubNAjROqB5ThDfemfR4Ums1nkEwJDHyTk6%2BjKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYDwAGqyPmW3lIA80q3AOWCDRKeuMXpiZ20HbEXMTaD5IsUUGrnOTdSqXVSpeKFXyzqEvLeUOjxK3Ig%2FRrWCLNZRfJi1W5lKf1HIdZG8OjNJnIyaVkhZGgO5%2FWEVCivcFLMs%2F%2F6S0DpjwZY9kf%2F5C%2FhwU5Y9xcu0FPw2sDVAA6wdrr%2FnqPGGQ4GaQkIGNSlJwsSpF4RIMLXR7XbB72v9WWEw9FGrO6FuOUWEmrB3ukttg8hkb4ezfhM2a1tx8lp8qXfEfex5Gof04CVgCYKhpnqVyB6206YFu8AXwAyKo4P01%2BmtCoYd7JAM2t613i6U2C8mEWJnllQ6Mbz8Q13he6ZgWyUDe9ZEPkvpbNQNMHemZG5OrOUXbLoxVgmFsec6%2Boy2UXJPJg3RqVe1LK%2B3HqqEu%2Fbdo0p23HPW7K%2B2kd19V4iKI1Bmx5WTZieHWyp27FlXIBBKu7TCYFQ80ANU1ppDf76dLMbQVXd3O1FcVeILoxEiz7EGY0tOB%2F8yoRW3tMl09L0Y6jO7UzvK0aXIR4mKcMdaFlocby8HBISuSh%2FOWjI3zP9MZslmVhlNqlU66V3fgbT5cWaDcxHKGrz6Q2UK76N8LQfN7V6a30lJATDgCIC%2BeANVICRt5UCHD2Mczyob0XIJ%2FBzElzyzCUr9jCBjqkAXZOQA3BxeTeK1KGtZwBjmxYrn6CCOiF4WSppvPyUErt9xvUc5BQbzVwkJ2nVS8MG3hPQyHbDZ7lpBA1IrZjcrEWouCgdOxnEp%2Buh6c4lW5j08jsoTu3sItWq10K32R%2Fy1abibiWtFcWiz87VXwk2XrSWB4u5FsUgPWVkPzrOnFQHQhCo5RNm%2FynMC2Bq9EgOZ0G3NabQGA%2BOAMvdi0a5EhOoJUk&X-Amz-Signature=c71de053a8aeb9886d0ccab554bbe41c82e518372cc6f205bb98df25851f33a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3MJFQG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F%2FBACLWhqFvlDm20Qa8ev90AFZoFuNobeMpyXAY1E%2FwIhAJkJY1J7ubNAjROqB5ThDfemfR4Ums1nkEwJDHyTk6%2BjKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYDwAGqyPmW3lIA80q3AOWCDRKeuMXpiZ20HbEXMTaD5IsUUGrnOTdSqXVSpeKFXyzqEvLeUOjxK3Ig%2FRrWCLNZRfJi1W5lKf1HIdZG8OjNJnIyaVkhZGgO5%2FWEVCivcFLMs%2F%2F6S0DpjwZY9kf%2F5C%2FhwU5Y9xcu0FPw2sDVAA6wdrr%2FnqPGGQ4GaQkIGNSlJwsSpF4RIMLXR7XbB72v9WWEw9FGrO6FuOUWEmrB3ukttg8hkb4ezfhM2a1tx8lp8qXfEfex5Gof04CVgCYKhpnqVyB6206YFu8AXwAyKo4P01%2BmtCoYd7JAM2t613i6U2C8mEWJnllQ6Mbz8Q13he6ZgWyUDe9ZEPkvpbNQNMHemZG5OrOUXbLoxVgmFsec6%2Boy2UXJPJg3RqVe1LK%2B3HqqEu%2Fbdo0p23HPW7K%2B2kd19V4iKI1Bmx5WTZieHWyp27FlXIBBKu7TCYFQ80ANU1ppDf76dLMbQVXd3O1FcVeILoxEiz7EGY0tOB%2F8yoRW3tMl09L0Y6jO7UzvK0aXIR4mKcMdaFlocby8HBISuSh%2FOWjI3zP9MZslmVhlNqlU66V3fgbT5cWaDcxHKGrz6Q2UK76N8LQfN7V6a30lJATDgCIC%2BeANVICRt5UCHD2Mczyob0XIJ%2FBzElzyzCUr9jCBjqkAXZOQA3BxeTeK1KGtZwBjmxYrn6CCOiF4WSppvPyUErt9xvUc5BQbzVwkJ2nVS8MG3hPQyHbDZ7lpBA1IrZjcrEWouCgdOxnEp%2Buh6c4lW5j08jsoTu3sItWq10K32R%2Fy1abibiWtFcWiz87VXwk2XrSWB4u5FsUgPWVkPzrOnFQHQhCo5RNm%2FynMC2Bq9EgOZ0G3NabQGA%2BOAMvdi0a5EhOoJUk&X-Amz-Signature=1da532ad8ec09a5cb35569c0a348622140b848a4caf36b6dad8dc76dc41469a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3MJFQG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F%2FBACLWhqFvlDm20Qa8ev90AFZoFuNobeMpyXAY1E%2FwIhAJkJY1J7ubNAjROqB5ThDfemfR4Ums1nkEwJDHyTk6%2BjKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYDwAGqyPmW3lIA80q3AOWCDRKeuMXpiZ20HbEXMTaD5IsUUGrnOTdSqXVSpeKFXyzqEvLeUOjxK3Ig%2FRrWCLNZRfJi1W5lKf1HIdZG8OjNJnIyaVkhZGgO5%2FWEVCivcFLMs%2F%2F6S0DpjwZY9kf%2F5C%2FhwU5Y9xcu0FPw2sDVAA6wdrr%2FnqPGGQ4GaQkIGNSlJwsSpF4RIMLXR7XbB72v9WWEw9FGrO6FuOUWEmrB3ukttg8hkb4ezfhM2a1tx8lp8qXfEfex5Gof04CVgCYKhpnqVyB6206YFu8AXwAyKo4P01%2BmtCoYd7JAM2t613i6U2C8mEWJnllQ6Mbz8Q13he6ZgWyUDe9ZEPkvpbNQNMHemZG5OrOUXbLoxVgmFsec6%2Boy2UXJPJg3RqVe1LK%2B3HqqEu%2Fbdo0p23HPW7K%2B2kd19V4iKI1Bmx5WTZieHWyp27FlXIBBKu7TCYFQ80ANU1ppDf76dLMbQVXd3O1FcVeILoxEiz7EGY0tOB%2F8yoRW3tMl09L0Y6jO7UzvK0aXIR4mKcMdaFlocby8HBISuSh%2FOWjI3zP9MZslmVhlNqlU66V3fgbT5cWaDcxHKGrz6Q2UK76N8LQfN7V6a30lJATDgCIC%2BeANVICRt5UCHD2Mczyob0XIJ%2FBzElzyzCUr9jCBjqkAXZOQA3BxeTeK1KGtZwBjmxYrn6CCOiF4WSppvPyUErt9xvUc5BQbzVwkJ2nVS8MG3hPQyHbDZ7lpBA1IrZjcrEWouCgdOxnEp%2Buh6c4lW5j08jsoTu3sItWq10K32R%2Fy1abibiWtFcWiz87VXwk2XrSWB4u5FsUgPWVkPzrOnFQHQhCo5RNm%2FynMC2Bq9EgOZ0G3NabQGA%2BOAMvdi0a5EhOoJUk&X-Amz-Signature=5ec4d30bd908d5f5e99d02e87dfca554d6b4dcae94352ba5f196fa66f9094018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3MJFQG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F%2FBACLWhqFvlDm20Qa8ev90AFZoFuNobeMpyXAY1E%2FwIhAJkJY1J7ubNAjROqB5ThDfemfR4Ums1nkEwJDHyTk6%2BjKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYDwAGqyPmW3lIA80q3AOWCDRKeuMXpiZ20HbEXMTaD5IsUUGrnOTdSqXVSpeKFXyzqEvLeUOjxK3Ig%2FRrWCLNZRfJi1W5lKf1HIdZG8OjNJnIyaVkhZGgO5%2FWEVCivcFLMs%2F%2F6S0DpjwZY9kf%2F5C%2FhwU5Y9xcu0FPw2sDVAA6wdrr%2FnqPGGQ4GaQkIGNSlJwsSpF4RIMLXR7XbB72v9WWEw9FGrO6FuOUWEmrB3ukttg8hkb4ezfhM2a1tx8lp8qXfEfex5Gof04CVgCYKhpnqVyB6206YFu8AXwAyKo4P01%2BmtCoYd7JAM2t613i6U2C8mEWJnllQ6Mbz8Q13he6ZgWyUDe9ZEPkvpbNQNMHemZG5OrOUXbLoxVgmFsec6%2Boy2UXJPJg3RqVe1LK%2B3HqqEu%2Fbdo0p23HPW7K%2B2kd19V4iKI1Bmx5WTZieHWyp27FlXIBBKu7TCYFQ80ANU1ppDf76dLMbQVXd3O1FcVeILoxEiz7EGY0tOB%2F8yoRW3tMl09L0Y6jO7UzvK0aXIR4mKcMdaFlocby8HBISuSh%2FOWjI3zP9MZslmVhlNqlU66V3fgbT5cWaDcxHKGrz6Q2UK76N8LQfN7V6a30lJATDgCIC%2BeANVICRt5UCHD2Mczyob0XIJ%2FBzElzyzCUr9jCBjqkAXZOQA3BxeTeK1KGtZwBjmxYrn6CCOiF4WSppvPyUErt9xvUc5BQbzVwkJ2nVS8MG3hPQyHbDZ7lpBA1IrZjcrEWouCgdOxnEp%2Buh6c4lW5j08jsoTu3sItWq10K32R%2Fy1abibiWtFcWiz87VXwk2XrSWB4u5FsUgPWVkPzrOnFQHQhCo5RNm%2FynMC2Bq9EgOZ0G3NabQGA%2BOAMvdi0a5EhOoJUk&X-Amz-Signature=d72bddb517d363463cf473efa6b2d0924276e501f3dfd2003833a162431c6896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3MJFQG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F%2FBACLWhqFvlDm20Qa8ev90AFZoFuNobeMpyXAY1E%2FwIhAJkJY1J7ubNAjROqB5ThDfemfR4Ums1nkEwJDHyTk6%2BjKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYDwAGqyPmW3lIA80q3AOWCDRKeuMXpiZ20HbEXMTaD5IsUUGrnOTdSqXVSpeKFXyzqEvLeUOjxK3Ig%2FRrWCLNZRfJi1W5lKf1HIdZG8OjNJnIyaVkhZGgO5%2FWEVCivcFLMs%2F%2F6S0DpjwZY9kf%2F5C%2FhwU5Y9xcu0FPw2sDVAA6wdrr%2FnqPGGQ4GaQkIGNSlJwsSpF4RIMLXR7XbB72v9WWEw9FGrO6FuOUWEmrB3ukttg8hkb4ezfhM2a1tx8lp8qXfEfex5Gof04CVgCYKhpnqVyB6206YFu8AXwAyKo4P01%2BmtCoYd7JAM2t613i6U2C8mEWJnllQ6Mbz8Q13he6ZgWyUDe9ZEPkvpbNQNMHemZG5OrOUXbLoxVgmFsec6%2Boy2UXJPJg3RqVe1LK%2B3HqqEu%2Fbdo0p23HPW7K%2B2kd19V4iKI1Bmx5WTZieHWyp27FlXIBBKu7TCYFQ80ANU1ppDf76dLMbQVXd3O1FcVeILoxEiz7EGY0tOB%2F8yoRW3tMl09L0Y6jO7UzvK0aXIR4mKcMdaFlocby8HBISuSh%2FOWjI3zP9MZslmVhlNqlU66V3fgbT5cWaDcxHKGrz6Q2UK76N8LQfN7V6a30lJATDgCIC%2BeANVICRt5UCHD2Mczyob0XIJ%2FBzElzyzCUr9jCBjqkAXZOQA3BxeTeK1KGtZwBjmxYrn6CCOiF4WSppvPyUErt9xvUc5BQbzVwkJ2nVS8MG3hPQyHbDZ7lpBA1IrZjcrEWouCgdOxnEp%2Buh6c4lW5j08jsoTu3sItWq10K32R%2Fy1abibiWtFcWiz87VXwk2XrSWB4u5FsUgPWVkPzrOnFQHQhCo5RNm%2FynMC2Bq9EgOZ0G3NabQGA%2BOAMvdi0a5EhOoJUk&X-Amz-Signature=338ceb00cd245a8ca3bace5b45fffe11e51ee221d239cdbbe895fc4636885328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
