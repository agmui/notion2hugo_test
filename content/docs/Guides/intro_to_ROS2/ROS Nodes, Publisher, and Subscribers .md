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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZYQP3I%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FwvgxgTCmB7nF%2FQr8575ZOxu6tu3lKjk8y%2BA6DcIp5AiEAnpcXRhqq6lD9mERgp4IAvy09tQWy1Alpm%2BN7o4BSkrwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfOwiwel4R8XdACVCrcA87NhmOjQGCWS4CDyPdLvZ3DiHWC6fOC1U7dvxq39dCc1xUkfR7n8o2AaAMvSsofT1ccZtjUp1cLgl3v4EekauxAvnpVCJuYt%2FDbENndgXufeE7KIraMTYRS9VMBIRic3czWjf%2BcvxJyNdR8BfBmHcC530V9SSOXLdy1njymXq9VrCNYyEdD6IcQl4WRPXCJhgakTgdXTMHtxxnhv0g8GQshjrZfc%2B%2BS6uLDrCnCBSSOh%2BQ5PUCTGpjnFUUvmbCw4PiwQknTwKLysZf%2FN%2BeCcYDkb3gb0VCpMrOxyE%2BX6j1CHGi9Ci%2BBsTxpVSN7K4INCB%2FYeX9qbalCPD4xgcAO2WJ%2Fmf1%2FDb0oEsfpYksPiHd0q5UqOpAPOv1SElzXZYdBGn%2BVnZKEAGxpQRgidhhGyShNQ8PNSJ0Cz8MfIQ%2BCmvtnrkQaM9UHeTxX2IJee0HEPZTDvJS2eVExxszg5nOFXTiz1nYt3AlyVjVvM8aTs0BJC6uOGqjLO%2BW2VxzI0u1Sw3OL7oHW4DR5iX2SSc65V%2FeXuM7nOl0lsPPLiMu57Es48xzBvBlhoghEm5iRZQOYZTlh07LUPJzxNB6%2BLt9IdiggV73Atwkn5zo9d4D56r0VWDYobpIaebAC6ezjMKTF7MMGOqUBP0oeIVRmUh4jrvKHHJji2ULJw2iZEEHeBjcPRTOrRSIbT6%2FgSl2IuJSOiFxgJNDSy7iPIJekUdJtSh5YaVhvSIG%2Bm4yDVh0I8%2Fsf3em4FqasVAe8%2B2ESCdtKrkLP2VIviZWkPzKji5C9TAYpeK9KxenJ0JmhwHlC%2FP71cc%2B9VTaDarxitzUKqVPwORO5Nx2Zc6WNMl1sdEKmcB%2BGXlZSrNQ4sXav&X-Amz-Signature=0ebc185b7bb1d462673ccf50009da50ba303227865a413c0add3fb0b8e4fdd78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZYQP3I%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FwvgxgTCmB7nF%2FQr8575ZOxu6tu3lKjk8y%2BA6DcIp5AiEAnpcXRhqq6lD9mERgp4IAvy09tQWy1Alpm%2BN7o4BSkrwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfOwiwel4R8XdACVCrcA87NhmOjQGCWS4CDyPdLvZ3DiHWC6fOC1U7dvxq39dCc1xUkfR7n8o2AaAMvSsofT1ccZtjUp1cLgl3v4EekauxAvnpVCJuYt%2FDbENndgXufeE7KIraMTYRS9VMBIRic3czWjf%2BcvxJyNdR8BfBmHcC530V9SSOXLdy1njymXq9VrCNYyEdD6IcQl4WRPXCJhgakTgdXTMHtxxnhv0g8GQshjrZfc%2B%2BS6uLDrCnCBSSOh%2BQ5PUCTGpjnFUUvmbCw4PiwQknTwKLysZf%2FN%2BeCcYDkb3gb0VCpMrOxyE%2BX6j1CHGi9Ci%2BBsTxpVSN7K4INCB%2FYeX9qbalCPD4xgcAO2WJ%2Fmf1%2FDb0oEsfpYksPiHd0q5UqOpAPOv1SElzXZYdBGn%2BVnZKEAGxpQRgidhhGyShNQ8PNSJ0Cz8MfIQ%2BCmvtnrkQaM9UHeTxX2IJee0HEPZTDvJS2eVExxszg5nOFXTiz1nYt3AlyVjVvM8aTs0BJC6uOGqjLO%2BW2VxzI0u1Sw3OL7oHW4DR5iX2SSc65V%2FeXuM7nOl0lsPPLiMu57Es48xzBvBlhoghEm5iRZQOYZTlh07LUPJzxNB6%2BLt9IdiggV73Atwkn5zo9d4D56r0VWDYobpIaebAC6ezjMKTF7MMGOqUBP0oeIVRmUh4jrvKHHJji2ULJw2iZEEHeBjcPRTOrRSIbT6%2FgSl2IuJSOiFxgJNDSy7iPIJekUdJtSh5YaVhvSIG%2Bm4yDVh0I8%2Fsf3em4FqasVAe8%2B2ESCdtKrkLP2VIviZWkPzKji5C9TAYpeK9KxenJ0JmhwHlC%2FP71cc%2B9VTaDarxitzUKqVPwORO5Nx2Zc6WNMl1sdEKmcB%2BGXlZSrNQ4sXav&X-Amz-Signature=73c3382684c49e2c5299e051d34f8a0356c173e89164bae06a9726a5f2bc13e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZYQP3I%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FwvgxgTCmB7nF%2FQr8575ZOxu6tu3lKjk8y%2BA6DcIp5AiEAnpcXRhqq6lD9mERgp4IAvy09tQWy1Alpm%2BN7o4BSkrwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfOwiwel4R8XdACVCrcA87NhmOjQGCWS4CDyPdLvZ3DiHWC6fOC1U7dvxq39dCc1xUkfR7n8o2AaAMvSsofT1ccZtjUp1cLgl3v4EekauxAvnpVCJuYt%2FDbENndgXufeE7KIraMTYRS9VMBIRic3czWjf%2BcvxJyNdR8BfBmHcC530V9SSOXLdy1njymXq9VrCNYyEdD6IcQl4WRPXCJhgakTgdXTMHtxxnhv0g8GQshjrZfc%2B%2BS6uLDrCnCBSSOh%2BQ5PUCTGpjnFUUvmbCw4PiwQknTwKLysZf%2FN%2BeCcYDkb3gb0VCpMrOxyE%2BX6j1CHGi9Ci%2BBsTxpVSN7K4INCB%2FYeX9qbalCPD4xgcAO2WJ%2Fmf1%2FDb0oEsfpYksPiHd0q5UqOpAPOv1SElzXZYdBGn%2BVnZKEAGxpQRgidhhGyShNQ8PNSJ0Cz8MfIQ%2BCmvtnrkQaM9UHeTxX2IJee0HEPZTDvJS2eVExxszg5nOFXTiz1nYt3AlyVjVvM8aTs0BJC6uOGqjLO%2BW2VxzI0u1Sw3OL7oHW4DR5iX2SSc65V%2FeXuM7nOl0lsPPLiMu57Es48xzBvBlhoghEm5iRZQOYZTlh07LUPJzxNB6%2BLt9IdiggV73Atwkn5zo9d4D56r0VWDYobpIaebAC6ezjMKTF7MMGOqUBP0oeIVRmUh4jrvKHHJji2ULJw2iZEEHeBjcPRTOrRSIbT6%2FgSl2IuJSOiFxgJNDSy7iPIJekUdJtSh5YaVhvSIG%2Bm4yDVh0I8%2Fsf3em4FqasVAe8%2B2ESCdtKrkLP2VIviZWkPzKji5C9TAYpeK9KxenJ0JmhwHlC%2FP71cc%2B9VTaDarxitzUKqVPwORO5Nx2Zc6WNMl1sdEKmcB%2BGXlZSrNQ4sXav&X-Amz-Signature=1d3c5ca0d4ec83f5d83ab4f569485c6fa792d0afc28ab02ad6500c833d798c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZYQP3I%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FwvgxgTCmB7nF%2FQr8575ZOxu6tu3lKjk8y%2BA6DcIp5AiEAnpcXRhqq6lD9mERgp4IAvy09tQWy1Alpm%2BN7o4BSkrwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfOwiwel4R8XdACVCrcA87NhmOjQGCWS4CDyPdLvZ3DiHWC6fOC1U7dvxq39dCc1xUkfR7n8o2AaAMvSsofT1ccZtjUp1cLgl3v4EekauxAvnpVCJuYt%2FDbENndgXufeE7KIraMTYRS9VMBIRic3czWjf%2BcvxJyNdR8BfBmHcC530V9SSOXLdy1njymXq9VrCNYyEdD6IcQl4WRPXCJhgakTgdXTMHtxxnhv0g8GQshjrZfc%2B%2BS6uLDrCnCBSSOh%2BQ5PUCTGpjnFUUvmbCw4PiwQknTwKLysZf%2FN%2BeCcYDkb3gb0VCpMrOxyE%2BX6j1CHGi9Ci%2BBsTxpVSN7K4INCB%2FYeX9qbalCPD4xgcAO2WJ%2Fmf1%2FDb0oEsfpYksPiHd0q5UqOpAPOv1SElzXZYdBGn%2BVnZKEAGxpQRgidhhGyShNQ8PNSJ0Cz8MfIQ%2BCmvtnrkQaM9UHeTxX2IJee0HEPZTDvJS2eVExxszg5nOFXTiz1nYt3AlyVjVvM8aTs0BJC6uOGqjLO%2BW2VxzI0u1Sw3OL7oHW4DR5iX2SSc65V%2FeXuM7nOl0lsPPLiMu57Es48xzBvBlhoghEm5iRZQOYZTlh07LUPJzxNB6%2BLt9IdiggV73Atwkn5zo9d4D56r0VWDYobpIaebAC6ezjMKTF7MMGOqUBP0oeIVRmUh4jrvKHHJji2ULJw2iZEEHeBjcPRTOrRSIbT6%2FgSl2IuJSOiFxgJNDSy7iPIJekUdJtSh5YaVhvSIG%2Bm4yDVh0I8%2Fsf3em4FqasVAe8%2B2ESCdtKrkLP2VIviZWkPzKji5C9TAYpeK9KxenJ0JmhwHlC%2FP71cc%2B9VTaDarxitzUKqVPwORO5Nx2Zc6WNMl1sdEKmcB%2BGXlZSrNQ4sXav&X-Amz-Signature=137a338fbf89cf9c3aff885313d5a667c3b070dc5015cfe1b4203ef799972859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZYQP3I%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FwvgxgTCmB7nF%2FQr8575ZOxu6tu3lKjk8y%2BA6DcIp5AiEAnpcXRhqq6lD9mERgp4IAvy09tQWy1Alpm%2BN7o4BSkrwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfOwiwel4R8XdACVCrcA87NhmOjQGCWS4CDyPdLvZ3DiHWC6fOC1U7dvxq39dCc1xUkfR7n8o2AaAMvSsofT1ccZtjUp1cLgl3v4EekauxAvnpVCJuYt%2FDbENndgXufeE7KIraMTYRS9VMBIRic3czWjf%2BcvxJyNdR8BfBmHcC530V9SSOXLdy1njymXq9VrCNYyEdD6IcQl4WRPXCJhgakTgdXTMHtxxnhv0g8GQshjrZfc%2B%2BS6uLDrCnCBSSOh%2BQ5PUCTGpjnFUUvmbCw4PiwQknTwKLysZf%2FN%2BeCcYDkb3gb0VCpMrOxyE%2BX6j1CHGi9Ci%2BBsTxpVSN7K4INCB%2FYeX9qbalCPD4xgcAO2WJ%2Fmf1%2FDb0oEsfpYksPiHd0q5UqOpAPOv1SElzXZYdBGn%2BVnZKEAGxpQRgidhhGyShNQ8PNSJ0Cz8MfIQ%2BCmvtnrkQaM9UHeTxX2IJee0HEPZTDvJS2eVExxszg5nOFXTiz1nYt3AlyVjVvM8aTs0BJC6uOGqjLO%2BW2VxzI0u1Sw3OL7oHW4DR5iX2SSc65V%2FeXuM7nOl0lsPPLiMu57Es48xzBvBlhoghEm5iRZQOYZTlh07LUPJzxNB6%2BLt9IdiggV73Atwkn5zo9d4D56r0VWDYobpIaebAC6ezjMKTF7MMGOqUBP0oeIVRmUh4jrvKHHJji2ULJw2iZEEHeBjcPRTOrRSIbT6%2FgSl2IuJSOiFxgJNDSy7iPIJekUdJtSh5YaVhvSIG%2Bm4yDVh0I8%2Fsf3em4FqasVAe8%2B2ESCdtKrkLP2VIviZWkPzKji5C9TAYpeK9KxenJ0JmhwHlC%2FP71cc%2B9VTaDarxitzUKqVPwORO5Nx2Zc6WNMl1sdEKmcB%2BGXlZSrNQ4sXav&X-Amz-Signature=c72c53b5ccd98e4f63c9f09548075ed6934cfc1b27929d10afea5c6e6ff28b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZYQP3I%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FwvgxgTCmB7nF%2FQr8575ZOxu6tu3lKjk8y%2BA6DcIp5AiEAnpcXRhqq6lD9mERgp4IAvy09tQWy1Alpm%2BN7o4BSkrwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfOwiwel4R8XdACVCrcA87NhmOjQGCWS4CDyPdLvZ3DiHWC6fOC1U7dvxq39dCc1xUkfR7n8o2AaAMvSsofT1ccZtjUp1cLgl3v4EekauxAvnpVCJuYt%2FDbENndgXufeE7KIraMTYRS9VMBIRic3czWjf%2BcvxJyNdR8BfBmHcC530V9SSOXLdy1njymXq9VrCNYyEdD6IcQl4WRPXCJhgakTgdXTMHtxxnhv0g8GQshjrZfc%2B%2BS6uLDrCnCBSSOh%2BQ5PUCTGpjnFUUvmbCw4PiwQknTwKLysZf%2FN%2BeCcYDkb3gb0VCpMrOxyE%2BX6j1CHGi9Ci%2BBsTxpVSN7K4INCB%2FYeX9qbalCPD4xgcAO2WJ%2Fmf1%2FDb0oEsfpYksPiHd0q5UqOpAPOv1SElzXZYdBGn%2BVnZKEAGxpQRgidhhGyShNQ8PNSJ0Cz8MfIQ%2BCmvtnrkQaM9UHeTxX2IJee0HEPZTDvJS2eVExxszg5nOFXTiz1nYt3AlyVjVvM8aTs0BJC6uOGqjLO%2BW2VxzI0u1Sw3OL7oHW4DR5iX2SSc65V%2FeXuM7nOl0lsPPLiMu57Es48xzBvBlhoghEm5iRZQOYZTlh07LUPJzxNB6%2BLt9IdiggV73Atwkn5zo9d4D56r0VWDYobpIaebAC6ezjMKTF7MMGOqUBP0oeIVRmUh4jrvKHHJji2ULJw2iZEEHeBjcPRTOrRSIbT6%2FgSl2IuJSOiFxgJNDSy7iPIJekUdJtSh5YaVhvSIG%2Bm4yDVh0I8%2Fsf3em4FqasVAe8%2B2ESCdtKrkLP2VIviZWkPzKji5C9TAYpeK9KxenJ0JmhwHlC%2FP71cc%2B9VTaDarxitzUKqVPwORO5Nx2Zc6WNMl1sdEKmcB%2BGXlZSrNQ4sXav&X-Amz-Signature=839a825c0c5902b92cfcceea75a0be743d34b7c142ccfcc1ba74ee73c690cd0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZYQP3I%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FwvgxgTCmB7nF%2FQr8575ZOxu6tu3lKjk8y%2BA6DcIp5AiEAnpcXRhqq6lD9mERgp4IAvy09tQWy1Alpm%2BN7o4BSkrwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfOwiwel4R8XdACVCrcA87NhmOjQGCWS4CDyPdLvZ3DiHWC6fOC1U7dvxq39dCc1xUkfR7n8o2AaAMvSsofT1ccZtjUp1cLgl3v4EekauxAvnpVCJuYt%2FDbENndgXufeE7KIraMTYRS9VMBIRic3czWjf%2BcvxJyNdR8BfBmHcC530V9SSOXLdy1njymXq9VrCNYyEdD6IcQl4WRPXCJhgakTgdXTMHtxxnhv0g8GQshjrZfc%2B%2BS6uLDrCnCBSSOh%2BQ5PUCTGpjnFUUvmbCw4PiwQknTwKLysZf%2FN%2BeCcYDkb3gb0VCpMrOxyE%2BX6j1CHGi9Ci%2BBsTxpVSN7K4INCB%2FYeX9qbalCPD4xgcAO2WJ%2Fmf1%2FDb0oEsfpYksPiHd0q5UqOpAPOv1SElzXZYdBGn%2BVnZKEAGxpQRgidhhGyShNQ8PNSJ0Cz8MfIQ%2BCmvtnrkQaM9UHeTxX2IJee0HEPZTDvJS2eVExxszg5nOFXTiz1nYt3AlyVjVvM8aTs0BJC6uOGqjLO%2BW2VxzI0u1Sw3OL7oHW4DR5iX2SSc65V%2FeXuM7nOl0lsPPLiMu57Es48xzBvBlhoghEm5iRZQOYZTlh07LUPJzxNB6%2BLt9IdiggV73Atwkn5zo9d4D56r0VWDYobpIaebAC6ezjMKTF7MMGOqUBP0oeIVRmUh4jrvKHHJji2ULJw2iZEEHeBjcPRTOrRSIbT6%2FgSl2IuJSOiFxgJNDSy7iPIJekUdJtSh5YaVhvSIG%2Bm4yDVh0I8%2Fsf3em4FqasVAe8%2B2ESCdtKrkLP2VIviZWkPzKji5C9TAYpeK9KxenJ0JmhwHlC%2FP71cc%2B9VTaDarxitzUKqVPwORO5Nx2Zc6WNMl1sdEKmcB%2BGXlZSrNQ4sXav&X-Amz-Signature=cb615702ccffce2ebdef95575cc4845a699b8a0c8b32977d5ed41492f69878fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZYQP3I%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FwvgxgTCmB7nF%2FQr8575ZOxu6tu3lKjk8y%2BA6DcIp5AiEAnpcXRhqq6lD9mERgp4IAvy09tQWy1Alpm%2BN7o4BSkrwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfOwiwel4R8XdACVCrcA87NhmOjQGCWS4CDyPdLvZ3DiHWC6fOC1U7dvxq39dCc1xUkfR7n8o2AaAMvSsofT1ccZtjUp1cLgl3v4EekauxAvnpVCJuYt%2FDbENndgXufeE7KIraMTYRS9VMBIRic3czWjf%2BcvxJyNdR8BfBmHcC530V9SSOXLdy1njymXq9VrCNYyEdD6IcQl4WRPXCJhgakTgdXTMHtxxnhv0g8GQshjrZfc%2B%2BS6uLDrCnCBSSOh%2BQ5PUCTGpjnFUUvmbCw4PiwQknTwKLysZf%2FN%2BeCcYDkb3gb0VCpMrOxyE%2BX6j1CHGi9Ci%2BBsTxpVSN7K4INCB%2FYeX9qbalCPD4xgcAO2WJ%2Fmf1%2FDb0oEsfpYksPiHd0q5UqOpAPOv1SElzXZYdBGn%2BVnZKEAGxpQRgidhhGyShNQ8PNSJ0Cz8MfIQ%2BCmvtnrkQaM9UHeTxX2IJee0HEPZTDvJS2eVExxszg5nOFXTiz1nYt3AlyVjVvM8aTs0BJC6uOGqjLO%2BW2VxzI0u1Sw3OL7oHW4DR5iX2SSc65V%2FeXuM7nOl0lsPPLiMu57Es48xzBvBlhoghEm5iRZQOYZTlh07LUPJzxNB6%2BLt9IdiggV73Atwkn5zo9d4D56r0VWDYobpIaebAC6ezjMKTF7MMGOqUBP0oeIVRmUh4jrvKHHJji2ULJw2iZEEHeBjcPRTOrRSIbT6%2FgSl2IuJSOiFxgJNDSy7iPIJekUdJtSh5YaVhvSIG%2Bm4yDVh0I8%2Fsf3em4FqasVAe8%2B2ESCdtKrkLP2VIviZWkPzKji5C9TAYpeK9KxenJ0JmhwHlC%2FP71cc%2B9VTaDarxitzUKqVPwORO5Nx2Zc6WNMl1sdEKmcB%2BGXlZSrNQ4sXav&X-Amz-Signature=111ffd84ef4cfe99521b7c2a24d428be4c4501e9b71565d5ad3f7052e27c7bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
