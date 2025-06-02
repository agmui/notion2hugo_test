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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRJC2F2Z%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCgfTKS6Jj%2FofpoYzPE2Lw%2FGHsEeDW4j4iimUOpAn37OQIgDfEmyg1ozEGu9b%2FNqEciKU%2B%2BYWTpjXNPFE8OAtB7pwEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt4obCQG9ny9OgZxCrcA0rPFydsAgDjPfwMl0Yl5b0zI57xl%2FFwh8aYVbfKa31eKK5E0yonALZtSBcLSg2AzRragJUa5Z5fLbd9XFn6h9E%2BHHB0139mOqmYkK7NasRSP3mq7g8Qq3jc6K7ssOzwOP%2F%2BEx5%2F8xAYOWzPI9cUsCtFNly%2BdER3Y5is8KgTlI%2FOalZ%2BXYk4b99JUAEUzfCZog%2FhH0MIi3BWyiBcDUysY36wXiEpsLKTjkus3Jb4mfxYFNn8HDQ%2BdErqnILgkOYs5PEbJ9Uk3dcz%2F2AWVqcDdInpAC5fs0umeYQ5wNffVVFDAwSOeoa1IGCWiPVEVWO%2FiUQ55DCnS3VOQ7fUR2%2FMOTAz12fo4eiaNyDz9KbKS%2B4HopnVcCmXfpsjQdTuGKp6qazagCLnSUZM%2FV2XjATv2wChA04jakyvJTnH1NmPkYe5PZ1W4qtPM81zxsHbHB1ezJJqYD%2F62xqs%2Fsf2hhTPkWMV%2Fnn9TsFRfHf4vqUAnkNHlbxASvQ2VSD17es1iD92WNttWvJHJ98Z8JxNaOJnzGOuFUjHtrgjkQqVlli%2F9pbPQr4B2BnItp%2FXGXO8NWT00WXW4HKMTitT1nhw4GAG7wf5iKvYTk6ZbCEiMYET9EYR5mCoFVWif3sQ4wnnMJu09sEGOqUBPkzINOt1RvXKdGffW%2B2gfUbaUKWIH0g14e1sgARP4Ifvzd2bRvCk1FGdsLRO19cwgBhD9vQktlBeR8ulyNPIGgYdWTb4LekVjVibViQQRVfEMplWhOYkETGLtQs1%2FyVFhlmPUbcy9s%2FzbzO2xuMboMxF9vVzOZ3VWm%2FE%2B09yr6xqvemRzfs4cZJEDcAIDA7Wdxn%2FslgyLMEWemlz%2FLzVNRZYTear&X-Amz-Signature=0f88c747996e160782229370f594d75457b4ae26827eae3a3b05e12c47f38bf4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRJC2F2Z%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCgfTKS6Jj%2FofpoYzPE2Lw%2FGHsEeDW4j4iimUOpAn37OQIgDfEmyg1ozEGu9b%2FNqEciKU%2B%2BYWTpjXNPFE8OAtB7pwEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt4obCQG9ny9OgZxCrcA0rPFydsAgDjPfwMl0Yl5b0zI57xl%2FFwh8aYVbfKa31eKK5E0yonALZtSBcLSg2AzRragJUa5Z5fLbd9XFn6h9E%2BHHB0139mOqmYkK7NasRSP3mq7g8Qq3jc6K7ssOzwOP%2F%2BEx5%2F8xAYOWzPI9cUsCtFNly%2BdER3Y5is8KgTlI%2FOalZ%2BXYk4b99JUAEUzfCZog%2FhH0MIi3BWyiBcDUysY36wXiEpsLKTjkus3Jb4mfxYFNn8HDQ%2BdErqnILgkOYs5PEbJ9Uk3dcz%2F2AWVqcDdInpAC5fs0umeYQ5wNffVVFDAwSOeoa1IGCWiPVEVWO%2FiUQ55DCnS3VOQ7fUR2%2FMOTAz12fo4eiaNyDz9KbKS%2B4HopnVcCmXfpsjQdTuGKp6qazagCLnSUZM%2FV2XjATv2wChA04jakyvJTnH1NmPkYe5PZ1W4qtPM81zxsHbHB1ezJJqYD%2F62xqs%2Fsf2hhTPkWMV%2Fnn9TsFRfHf4vqUAnkNHlbxASvQ2VSD17es1iD92WNttWvJHJ98Z8JxNaOJnzGOuFUjHtrgjkQqVlli%2F9pbPQr4B2BnItp%2FXGXO8NWT00WXW4HKMTitT1nhw4GAG7wf5iKvYTk6ZbCEiMYET9EYR5mCoFVWif3sQ4wnnMJu09sEGOqUBPkzINOt1RvXKdGffW%2B2gfUbaUKWIH0g14e1sgARP4Ifvzd2bRvCk1FGdsLRO19cwgBhD9vQktlBeR8ulyNPIGgYdWTb4LekVjVibViQQRVfEMplWhOYkETGLtQs1%2FyVFhlmPUbcy9s%2FzbzO2xuMboMxF9vVzOZ3VWm%2FE%2B09yr6xqvemRzfs4cZJEDcAIDA7Wdxn%2FslgyLMEWemlz%2FLzVNRZYTear&X-Amz-Signature=1a335201e65ebb440c8758f4ba1c5a39d2b218f162175764bc385baba34c9385&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRJC2F2Z%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCgfTKS6Jj%2FofpoYzPE2Lw%2FGHsEeDW4j4iimUOpAn37OQIgDfEmyg1ozEGu9b%2FNqEciKU%2B%2BYWTpjXNPFE8OAtB7pwEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt4obCQG9ny9OgZxCrcA0rPFydsAgDjPfwMl0Yl5b0zI57xl%2FFwh8aYVbfKa31eKK5E0yonALZtSBcLSg2AzRragJUa5Z5fLbd9XFn6h9E%2BHHB0139mOqmYkK7NasRSP3mq7g8Qq3jc6K7ssOzwOP%2F%2BEx5%2F8xAYOWzPI9cUsCtFNly%2BdER3Y5is8KgTlI%2FOalZ%2BXYk4b99JUAEUzfCZog%2FhH0MIi3BWyiBcDUysY36wXiEpsLKTjkus3Jb4mfxYFNn8HDQ%2BdErqnILgkOYs5PEbJ9Uk3dcz%2F2AWVqcDdInpAC5fs0umeYQ5wNffVVFDAwSOeoa1IGCWiPVEVWO%2FiUQ55DCnS3VOQ7fUR2%2FMOTAz12fo4eiaNyDz9KbKS%2B4HopnVcCmXfpsjQdTuGKp6qazagCLnSUZM%2FV2XjATv2wChA04jakyvJTnH1NmPkYe5PZ1W4qtPM81zxsHbHB1ezJJqYD%2F62xqs%2Fsf2hhTPkWMV%2Fnn9TsFRfHf4vqUAnkNHlbxASvQ2VSD17es1iD92WNttWvJHJ98Z8JxNaOJnzGOuFUjHtrgjkQqVlli%2F9pbPQr4B2BnItp%2FXGXO8NWT00WXW4HKMTitT1nhw4GAG7wf5iKvYTk6ZbCEiMYET9EYR5mCoFVWif3sQ4wnnMJu09sEGOqUBPkzINOt1RvXKdGffW%2B2gfUbaUKWIH0g14e1sgARP4Ifvzd2bRvCk1FGdsLRO19cwgBhD9vQktlBeR8ulyNPIGgYdWTb4LekVjVibViQQRVfEMplWhOYkETGLtQs1%2FyVFhlmPUbcy9s%2FzbzO2xuMboMxF9vVzOZ3VWm%2FE%2B09yr6xqvemRzfs4cZJEDcAIDA7Wdxn%2FslgyLMEWemlz%2FLzVNRZYTear&X-Amz-Signature=7efe9ddc046ccb3ddbd5090763ffd658c991d3ebd1eb791fcaec97a22405bef5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRJC2F2Z%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCgfTKS6Jj%2FofpoYzPE2Lw%2FGHsEeDW4j4iimUOpAn37OQIgDfEmyg1ozEGu9b%2FNqEciKU%2B%2BYWTpjXNPFE8OAtB7pwEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt4obCQG9ny9OgZxCrcA0rPFydsAgDjPfwMl0Yl5b0zI57xl%2FFwh8aYVbfKa31eKK5E0yonALZtSBcLSg2AzRragJUa5Z5fLbd9XFn6h9E%2BHHB0139mOqmYkK7NasRSP3mq7g8Qq3jc6K7ssOzwOP%2F%2BEx5%2F8xAYOWzPI9cUsCtFNly%2BdER3Y5is8KgTlI%2FOalZ%2BXYk4b99JUAEUzfCZog%2FhH0MIi3BWyiBcDUysY36wXiEpsLKTjkus3Jb4mfxYFNn8HDQ%2BdErqnILgkOYs5PEbJ9Uk3dcz%2F2AWVqcDdInpAC5fs0umeYQ5wNffVVFDAwSOeoa1IGCWiPVEVWO%2FiUQ55DCnS3VOQ7fUR2%2FMOTAz12fo4eiaNyDz9KbKS%2B4HopnVcCmXfpsjQdTuGKp6qazagCLnSUZM%2FV2XjATv2wChA04jakyvJTnH1NmPkYe5PZ1W4qtPM81zxsHbHB1ezJJqYD%2F62xqs%2Fsf2hhTPkWMV%2Fnn9TsFRfHf4vqUAnkNHlbxASvQ2VSD17es1iD92WNttWvJHJ98Z8JxNaOJnzGOuFUjHtrgjkQqVlli%2F9pbPQr4B2BnItp%2FXGXO8NWT00WXW4HKMTitT1nhw4GAG7wf5iKvYTk6ZbCEiMYET9EYR5mCoFVWif3sQ4wnnMJu09sEGOqUBPkzINOt1RvXKdGffW%2B2gfUbaUKWIH0g14e1sgARP4Ifvzd2bRvCk1FGdsLRO19cwgBhD9vQktlBeR8ulyNPIGgYdWTb4LekVjVibViQQRVfEMplWhOYkETGLtQs1%2FyVFhlmPUbcy9s%2FzbzO2xuMboMxF9vVzOZ3VWm%2FE%2B09yr6xqvemRzfs4cZJEDcAIDA7Wdxn%2FslgyLMEWemlz%2FLzVNRZYTear&X-Amz-Signature=289507399c44f7a4c3a1fe68a6c857014f53670a4541482b1749b831c022e5ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRJC2F2Z%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCgfTKS6Jj%2FofpoYzPE2Lw%2FGHsEeDW4j4iimUOpAn37OQIgDfEmyg1ozEGu9b%2FNqEciKU%2B%2BYWTpjXNPFE8OAtB7pwEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt4obCQG9ny9OgZxCrcA0rPFydsAgDjPfwMl0Yl5b0zI57xl%2FFwh8aYVbfKa31eKK5E0yonALZtSBcLSg2AzRragJUa5Z5fLbd9XFn6h9E%2BHHB0139mOqmYkK7NasRSP3mq7g8Qq3jc6K7ssOzwOP%2F%2BEx5%2F8xAYOWzPI9cUsCtFNly%2BdER3Y5is8KgTlI%2FOalZ%2BXYk4b99JUAEUzfCZog%2FhH0MIi3BWyiBcDUysY36wXiEpsLKTjkus3Jb4mfxYFNn8HDQ%2BdErqnILgkOYs5PEbJ9Uk3dcz%2F2AWVqcDdInpAC5fs0umeYQ5wNffVVFDAwSOeoa1IGCWiPVEVWO%2FiUQ55DCnS3VOQ7fUR2%2FMOTAz12fo4eiaNyDz9KbKS%2B4HopnVcCmXfpsjQdTuGKp6qazagCLnSUZM%2FV2XjATv2wChA04jakyvJTnH1NmPkYe5PZ1W4qtPM81zxsHbHB1ezJJqYD%2F62xqs%2Fsf2hhTPkWMV%2Fnn9TsFRfHf4vqUAnkNHlbxASvQ2VSD17es1iD92WNttWvJHJ98Z8JxNaOJnzGOuFUjHtrgjkQqVlli%2F9pbPQr4B2BnItp%2FXGXO8NWT00WXW4HKMTitT1nhw4GAG7wf5iKvYTk6ZbCEiMYET9EYR5mCoFVWif3sQ4wnnMJu09sEGOqUBPkzINOt1RvXKdGffW%2B2gfUbaUKWIH0g14e1sgARP4Ifvzd2bRvCk1FGdsLRO19cwgBhD9vQktlBeR8ulyNPIGgYdWTb4LekVjVibViQQRVfEMplWhOYkETGLtQs1%2FyVFhlmPUbcy9s%2FzbzO2xuMboMxF9vVzOZ3VWm%2FE%2B09yr6xqvemRzfs4cZJEDcAIDA7Wdxn%2FslgyLMEWemlz%2FLzVNRZYTear&X-Amz-Signature=cb01cf7934daed96b8b941b573f8237aa9c8728d797015eca96deba6b0bd4c8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRJC2F2Z%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCgfTKS6Jj%2FofpoYzPE2Lw%2FGHsEeDW4j4iimUOpAn37OQIgDfEmyg1ozEGu9b%2FNqEciKU%2B%2BYWTpjXNPFE8OAtB7pwEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt4obCQG9ny9OgZxCrcA0rPFydsAgDjPfwMl0Yl5b0zI57xl%2FFwh8aYVbfKa31eKK5E0yonALZtSBcLSg2AzRragJUa5Z5fLbd9XFn6h9E%2BHHB0139mOqmYkK7NasRSP3mq7g8Qq3jc6K7ssOzwOP%2F%2BEx5%2F8xAYOWzPI9cUsCtFNly%2BdER3Y5is8KgTlI%2FOalZ%2BXYk4b99JUAEUzfCZog%2FhH0MIi3BWyiBcDUysY36wXiEpsLKTjkus3Jb4mfxYFNn8HDQ%2BdErqnILgkOYs5PEbJ9Uk3dcz%2F2AWVqcDdInpAC5fs0umeYQ5wNffVVFDAwSOeoa1IGCWiPVEVWO%2FiUQ55DCnS3VOQ7fUR2%2FMOTAz12fo4eiaNyDz9KbKS%2B4HopnVcCmXfpsjQdTuGKp6qazagCLnSUZM%2FV2XjATv2wChA04jakyvJTnH1NmPkYe5PZ1W4qtPM81zxsHbHB1ezJJqYD%2F62xqs%2Fsf2hhTPkWMV%2Fnn9TsFRfHf4vqUAnkNHlbxASvQ2VSD17es1iD92WNttWvJHJ98Z8JxNaOJnzGOuFUjHtrgjkQqVlli%2F9pbPQr4B2BnItp%2FXGXO8NWT00WXW4HKMTitT1nhw4GAG7wf5iKvYTk6ZbCEiMYET9EYR5mCoFVWif3sQ4wnnMJu09sEGOqUBPkzINOt1RvXKdGffW%2B2gfUbaUKWIH0g14e1sgARP4Ifvzd2bRvCk1FGdsLRO19cwgBhD9vQktlBeR8ulyNPIGgYdWTb4LekVjVibViQQRVfEMplWhOYkETGLtQs1%2FyVFhlmPUbcy9s%2FzbzO2xuMboMxF9vVzOZ3VWm%2FE%2B09yr6xqvemRzfs4cZJEDcAIDA7Wdxn%2FslgyLMEWemlz%2FLzVNRZYTear&X-Amz-Signature=eb5488d7abcb6d008a1229d73c6286c8caec8d9cb4e41044f521beb69e355c50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRJC2F2Z%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCgfTKS6Jj%2FofpoYzPE2Lw%2FGHsEeDW4j4iimUOpAn37OQIgDfEmyg1ozEGu9b%2FNqEciKU%2B%2BYWTpjXNPFE8OAtB7pwEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt4obCQG9ny9OgZxCrcA0rPFydsAgDjPfwMl0Yl5b0zI57xl%2FFwh8aYVbfKa31eKK5E0yonALZtSBcLSg2AzRragJUa5Z5fLbd9XFn6h9E%2BHHB0139mOqmYkK7NasRSP3mq7g8Qq3jc6K7ssOzwOP%2F%2BEx5%2F8xAYOWzPI9cUsCtFNly%2BdER3Y5is8KgTlI%2FOalZ%2BXYk4b99JUAEUzfCZog%2FhH0MIi3BWyiBcDUysY36wXiEpsLKTjkus3Jb4mfxYFNn8HDQ%2BdErqnILgkOYs5PEbJ9Uk3dcz%2F2AWVqcDdInpAC5fs0umeYQ5wNffVVFDAwSOeoa1IGCWiPVEVWO%2FiUQ55DCnS3VOQ7fUR2%2FMOTAz12fo4eiaNyDz9KbKS%2B4HopnVcCmXfpsjQdTuGKp6qazagCLnSUZM%2FV2XjATv2wChA04jakyvJTnH1NmPkYe5PZ1W4qtPM81zxsHbHB1ezJJqYD%2F62xqs%2Fsf2hhTPkWMV%2Fnn9TsFRfHf4vqUAnkNHlbxASvQ2VSD17es1iD92WNttWvJHJ98Z8JxNaOJnzGOuFUjHtrgjkQqVlli%2F9pbPQr4B2BnItp%2FXGXO8NWT00WXW4HKMTitT1nhw4GAG7wf5iKvYTk6ZbCEiMYET9EYR5mCoFVWif3sQ4wnnMJu09sEGOqUBPkzINOt1RvXKdGffW%2B2gfUbaUKWIH0g14e1sgARP4Ifvzd2bRvCk1FGdsLRO19cwgBhD9vQktlBeR8ulyNPIGgYdWTb4LekVjVibViQQRVfEMplWhOYkETGLtQs1%2FyVFhlmPUbcy9s%2FzbzO2xuMboMxF9vVzOZ3VWm%2FE%2B09yr6xqvemRzfs4cZJEDcAIDA7Wdxn%2FslgyLMEWemlz%2FLzVNRZYTear&X-Amz-Signature=ef774808365c5b54a8cc4cac1bc07f7eedfabda3228e86de55cf2359396423a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRJC2F2Z%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCgfTKS6Jj%2FofpoYzPE2Lw%2FGHsEeDW4j4iimUOpAn37OQIgDfEmyg1ozEGu9b%2FNqEciKU%2B%2BYWTpjXNPFE8OAtB7pwEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt4obCQG9ny9OgZxCrcA0rPFydsAgDjPfwMl0Yl5b0zI57xl%2FFwh8aYVbfKa31eKK5E0yonALZtSBcLSg2AzRragJUa5Z5fLbd9XFn6h9E%2BHHB0139mOqmYkK7NasRSP3mq7g8Qq3jc6K7ssOzwOP%2F%2BEx5%2F8xAYOWzPI9cUsCtFNly%2BdER3Y5is8KgTlI%2FOalZ%2BXYk4b99JUAEUzfCZog%2FhH0MIi3BWyiBcDUysY36wXiEpsLKTjkus3Jb4mfxYFNn8HDQ%2BdErqnILgkOYs5PEbJ9Uk3dcz%2F2AWVqcDdInpAC5fs0umeYQ5wNffVVFDAwSOeoa1IGCWiPVEVWO%2FiUQ55DCnS3VOQ7fUR2%2FMOTAz12fo4eiaNyDz9KbKS%2B4HopnVcCmXfpsjQdTuGKp6qazagCLnSUZM%2FV2XjATv2wChA04jakyvJTnH1NmPkYe5PZ1W4qtPM81zxsHbHB1ezJJqYD%2F62xqs%2Fsf2hhTPkWMV%2Fnn9TsFRfHf4vqUAnkNHlbxASvQ2VSD17es1iD92WNttWvJHJ98Z8JxNaOJnzGOuFUjHtrgjkQqVlli%2F9pbPQr4B2BnItp%2FXGXO8NWT00WXW4HKMTitT1nhw4GAG7wf5iKvYTk6ZbCEiMYET9EYR5mCoFVWif3sQ4wnnMJu09sEGOqUBPkzINOt1RvXKdGffW%2B2gfUbaUKWIH0g14e1sgARP4Ifvzd2bRvCk1FGdsLRO19cwgBhD9vQktlBeR8ulyNPIGgYdWTb4LekVjVibViQQRVfEMplWhOYkETGLtQs1%2FyVFhlmPUbcy9s%2FzbzO2xuMboMxF9vVzOZ3VWm%2FE%2B09yr6xqvemRzfs4cZJEDcAIDA7Wdxn%2FslgyLMEWemlz%2FLzVNRZYTear&X-Amz-Signature=f08cadcbb343d4dcd5ed57b89c192fec3bdb33a1d438b0fddc2a17b48304d343&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
