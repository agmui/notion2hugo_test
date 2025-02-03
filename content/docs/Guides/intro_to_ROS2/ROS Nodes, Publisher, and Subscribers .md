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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26CG56U%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDjDtc8238gbXjzOHGvr45I3%2FCnWx4MDiBIwu3nNOYOVAiEA5U%2FwSzYY7f07jcq%2B0ARXL6wEx3T5jesY0COn1spJxfsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKsKP01YZt2dHMXIOCrcA8YyK7gO12gcYOPBOSVCpUvPMiqJastTT8ON0S4B846lcX6vyh5opwEUnyQzPzBt06xi1GYIOcqauo5AFACmvC7yYuiS%2Buu8ht%2Bi%2BXSo1USy%2FCCB68vkEPXNECOOE9q3RKZsyrKYlzzH73%2BJcZAMbzZs3rDBhNjLJrVf5CU9shQ95sZ%2B25Ts1wgHoCwW6kZnxxlWTcQ86ikIj8syCI3mzel7O1VnwXpERJA71BlsY5Mj2effUY3GVQf6Qu5N7lJrB%2FXymeVBZkEaUPDR5B0r%2BNPtIqUl6IMFjACunaKdQHBFvLCB8516byMveyCmfQ9xYQkW7uZ6iPGca1VHG8nORBvXBwldWj7dDKg6tc9M8eDAEK%2FgS649AUUILlRPWBekzhdxojgVw5Oz37%2FvNk0ZN1mwtvAhXu5D1z2JTcJjV1C242bISeK48krJc%2BzyWZ5K9C%2FIrQdKLWBBS8S6QQ%2FEEL0r5EWni5iFvJ6Ci7gfuG7n8fU0Mlg6O8IK0wzFxf6NiaIu3CaWGPIji82YaQAqpH9ZzHIM4DgkEj8iyRiFzxOKuVm0IVwOei4dTFTMu9dmvke8obdrVvmP%2BFH8a80wlcosMjiprvL57kvwWzu3817cu7FETVP%2FIRqfQ%2F7sMOyEhL0GOqUB4Jij4qZuy2Z5J3gsgyhmqSgZtra%2BuwDqBjdjjOAqUOqV2zJdS%2FqhKmbcgy8XAn0Qcm9H9VkumIkJ5okxeSdle9C5HoMbQQdLvYX12pHAJ%2B3ewOqNCXJhmBOM7ia9Hw1F4jPvfyS6mca87G6jN8GWDQQxuk2jCsS44%2Bk81yyj88PCg3RW7nBTXB0UXXffmb6BjDBleojq5ch%2FFFPPjeZDCjT37wHe&X-Amz-Signature=0865fd27f3668ab8273388908ae3b57a0a0cacad3d893ab80b0b6916178844cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26CG56U%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDjDtc8238gbXjzOHGvr45I3%2FCnWx4MDiBIwu3nNOYOVAiEA5U%2FwSzYY7f07jcq%2B0ARXL6wEx3T5jesY0COn1spJxfsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKsKP01YZt2dHMXIOCrcA8YyK7gO12gcYOPBOSVCpUvPMiqJastTT8ON0S4B846lcX6vyh5opwEUnyQzPzBt06xi1GYIOcqauo5AFACmvC7yYuiS%2Buu8ht%2Bi%2BXSo1USy%2FCCB68vkEPXNECOOE9q3RKZsyrKYlzzH73%2BJcZAMbzZs3rDBhNjLJrVf5CU9shQ95sZ%2B25Ts1wgHoCwW6kZnxxlWTcQ86ikIj8syCI3mzel7O1VnwXpERJA71BlsY5Mj2effUY3GVQf6Qu5N7lJrB%2FXymeVBZkEaUPDR5B0r%2BNPtIqUl6IMFjACunaKdQHBFvLCB8516byMveyCmfQ9xYQkW7uZ6iPGca1VHG8nORBvXBwldWj7dDKg6tc9M8eDAEK%2FgS649AUUILlRPWBekzhdxojgVw5Oz37%2FvNk0ZN1mwtvAhXu5D1z2JTcJjV1C242bISeK48krJc%2BzyWZ5K9C%2FIrQdKLWBBS8S6QQ%2FEEL0r5EWni5iFvJ6Ci7gfuG7n8fU0Mlg6O8IK0wzFxf6NiaIu3CaWGPIji82YaQAqpH9ZzHIM4DgkEj8iyRiFzxOKuVm0IVwOei4dTFTMu9dmvke8obdrVvmP%2BFH8a80wlcosMjiprvL57kvwWzu3817cu7FETVP%2FIRqfQ%2F7sMOyEhL0GOqUB4Jij4qZuy2Z5J3gsgyhmqSgZtra%2BuwDqBjdjjOAqUOqV2zJdS%2FqhKmbcgy8XAn0Qcm9H9VkumIkJ5okxeSdle9C5HoMbQQdLvYX12pHAJ%2B3ewOqNCXJhmBOM7ia9Hw1F4jPvfyS6mca87G6jN8GWDQQxuk2jCsS44%2Bk81yyj88PCg3RW7nBTXB0UXXffmb6BjDBleojq5ch%2FFFPPjeZDCjT37wHe&X-Amz-Signature=47a50ca68b1cbd85eef26dbd06cc06b4000763109ad8255491124044874b7434&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26CG56U%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDjDtc8238gbXjzOHGvr45I3%2FCnWx4MDiBIwu3nNOYOVAiEA5U%2FwSzYY7f07jcq%2B0ARXL6wEx3T5jesY0COn1spJxfsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKsKP01YZt2dHMXIOCrcA8YyK7gO12gcYOPBOSVCpUvPMiqJastTT8ON0S4B846lcX6vyh5opwEUnyQzPzBt06xi1GYIOcqauo5AFACmvC7yYuiS%2Buu8ht%2Bi%2BXSo1USy%2FCCB68vkEPXNECOOE9q3RKZsyrKYlzzH73%2BJcZAMbzZs3rDBhNjLJrVf5CU9shQ95sZ%2B25Ts1wgHoCwW6kZnxxlWTcQ86ikIj8syCI3mzel7O1VnwXpERJA71BlsY5Mj2effUY3GVQf6Qu5N7lJrB%2FXymeVBZkEaUPDR5B0r%2BNPtIqUl6IMFjACunaKdQHBFvLCB8516byMveyCmfQ9xYQkW7uZ6iPGca1VHG8nORBvXBwldWj7dDKg6tc9M8eDAEK%2FgS649AUUILlRPWBekzhdxojgVw5Oz37%2FvNk0ZN1mwtvAhXu5D1z2JTcJjV1C242bISeK48krJc%2BzyWZ5K9C%2FIrQdKLWBBS8S6QQ%2FEEL0r5EWni5iFvJ6Ci7gfuG7n8fU0Mlg6O8IK0wzFxf6NiaIu3CaWGPIji82YaQAqpH9ZzHIM4DgkEj8iyRiFzxOKuVm0IVwOei4dTFTMu9dmvke8obdrVvmP%2BFH8a80wlcosMjiprvL57kvwWzu3817cu7FETVP%2FIRqfQ%2F7sMOyEhL0GOqUB4Jij4qZuy2Z5J3gsgyhmqSgZtra%2BuwDqBjdjjOAqUOqV2zJdS%2FqhKmbcgy8XAn0Qcm9H9VkumIkJ5okxeSdle9C5HoMbQQdLvYX12pHAJ%2B3ewOqNCXJhmBOM7ia9Hw1F4jPvfyS6mca87G6jN8GWDQQxuk2jCsS44%2Bk81yyj88PCg3RW7nBTXB0UXXffmb6BjDBleojq5ch%2FFFPPjeZDCjT37wHe&X-Amz-Signature=f655dde9e14d7732d22e5e470ff5c99c3ada24fa77b96b5c6be67939ad3f8ecf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26CG56U%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDjDtc8238gbXjzOHGvr45I3%2FCnWx4MDiBIwu3nNOYOVAiEA5U%2FwSzYY7f07jcq%2B0ARXL6wEx3T5jesY0COn1spJxfsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKsKP01YZt2dHMXIOCrcA8YyK7gO12gcYOPBOSVCpUvPMiqJastTT8ON0S4B846lcX6vyh5opwEUnyQzPzBt06xi1GYIOcqauo5AFACmvC7yYuiS%2Buu8ht%2Bi%2BXSo1USy%2FCCB68vkEPXNECOOE9q3RKZsyrKYlzzH73%2BJcZAMbzZs3rDBhNjLJrVf5CU9shQ95sZ%2B25Ts1wgHoCwW6kZnxxlWTcQ86ikIj8syCI3mzel7O1VnwXpERJA71BlsY5Mj2effUY3GVQf6Qu5N7lJrB%2FXymeVBZkEaUPDR5B0r%2BNPtIqUl6IMFjACunaKdQHBFvLCB8516byMveyCmfQ9xYQkW7uZ6iPGca1VHG8nORBvXBwldWj7dDKg6tc9M8eDAEK%2FgS649AUUILlRPWBekzhdxojgVw5Oz37%2FvNk0ZN1mwtvAhXu5D1z2JTcJjV1C242bISeK48krJc%2BzyWZ5K9C%2FIrQdKLWBBS8S6QQ%2FEEL0r5EWni5iFvJ6Ci7gfuG7n8fU0Mlg6O8IK0wzFxf6NiaIu3CaWGPIji82YaQAqpH9ZzHIM4DgkEj8iyRiFzxOKuVm0IVwOei4dTFTMu9dmvke8obdrVvmP%2BFH8a80wlcosMjiprvL57kvwWzu3817cu7FETVP%2FIRqfQ%2F7sMOyEhL0GOqUB4Jij4qZuy2Z5J3gsgyhmqSgZtra%2BuwDqBjdjjOAqUOqV2zJdS%2FqhKmbcgy8XAn0Qcm9H9VkumIkJ5okxeSdle9C5HoMbQQdLvYX12pHAJ%2B3ewOqNCXJhmBOM7ia9Hw1F4jPvfyS6mca87G6jN8GWDQQxuk2jCsS44%2Bk81yyj88PCg3RW7nBTXB0UXXffmb6BjDBleojq5ch%2FFFPPjeZDCjT37wHe&X-Amz-Signature=e57351088994345ad46971d99130f685466874e43cf05d9f53dd5153673b0692&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26CG56U%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDjDtc8238gbXjzOHGvr45I3%2FCnWx4MDiBIwu3nNOYOVAiEA5U%2FwSzYY7f07jcq%2B0ARXL6wEx3T5jesY0COn1spJxfsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKsKP01YZt2dHMXIOCrcA8YyK7gO12gcYOPBOSVCpUvPMiqJastTT8ON0S4B846lcX6vyh5opwEUnyQzPzBt06xi1GYIOcqauo5AFACmvC7yYuiS%2Buu8ht%2Bi%2BXSo1USy%2FCCB68vkEPXNECOOE9q3RKZsyrKYlzzH73%2BJcZAMbzZs3rDBhNjLJrVf5CU9shQ95sZ%2B25Ts1wgHoCwW6kZnxxlWTcQ86ikIj8syCI3mzel7O1VnwXpERJA71BlsY5Mj2effUY3GVQf6Qu5N7lJrB%2FXymeVBZkEaUPDR5B0r%2BNPtIqUl6IMFjACunaKdQHBFvLCB8516byMveyCmfQ9xYQkW7uZ6iPGca1VHG8nORBvXBwldWj7dDKg6tc9M8eDAEK%2FgS649AUUILlRPWBekzhdxojgVw5Oz37%2FvNk0ZN1mwtvAhXu5D1z2JTcJjV1C242bISeK48krJc%2BzyWZ5K9C%2FIrQdKLWBBS8S6QQ%2FEEL0r5EWni5iFvJ6Ci7gfuG7n8fU0Mlg6O8IK0wzFxf6NiaIu3CaWGPIji82YaQAqpH9ZzHIM4DgkEj8iyRiFzxOKuVm0IVwOei4dTFTMu9dmvke8obdrVvmP%2BFH8a80wlcosMjiprvL57kvwWzu3817cu7FETVP%2FIRqfQ%2F7sMOyEhL0GOqUB4Jij4qZuy2Z5J3gsgyhmqSgZtra%2BuwDqBjdjjOAqUOqV2zJdS%2FqhKmbcgy8XAn0Qcm9H9VkumIkJ5okxeSdle9C5HoMbQQdLvYX12pHAJ%2B3ewOqNCXJhmBOM7ia9Hw1F4jPvfyS6mca87G6jN8GWDQQxuk2jCsS44%2Bk81yyj88PCg3RW7nBTXB0UXXffmb6BjDBleojq5ch%2FFFPPjeZDCjT37wHe&X-Amz-Signature=30baba6fe4b451969bc80eef52adebedc103961a2aabdd94981c51c64f380a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26CG56U%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDjDtc8238gbXjzOHGvr45I3%2FCnWx4MDiBIwu3nNOYOVAiEA5U%2FwSzYY7f07jcq%2B0ARXL6wEx3T5jesY0COn1spJxfsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKsKP01YZt2dHMXIOCrcA8YyK7gO12gcYOPBOSVCpUvPMiqJastTT8ON0S4B846lcX6vyh5opwEUnyQzPzBt06xi1GYIOcqauo5AFACmvC7yYuiS%2Buu8ht%2Bi%2BXSo1USy%2FCCB68vkEPXNECOOE9q3RKZsyrKYlzzH73%2BJcZAMbzZs3rDBhNjLJrVf5CU9shQ95sZ%2B25Ts1wgHoCwW6kZnxxlWTcQ86ikIj8syCI3mzel7O1VnwXpERJA71BlsY5Mj2effUY3GVQf6Qu5N7lJrB%2FXymeVBZkEaUPDR5B0r%2BNPtIqUl6IMFjACunaKdQHBFvLCB8516byMveyCmfQ9xYQkW7uZ6iPGca1VHG8nORBvXBwldWj7dDKg6tc9M8eDAEK%2FgS649AUUILlRPWBekzhdxojgVw5Oz37%2FvNk0ZN1mwtvAhXu5D1z2JTcJjV1C242bISeK48krJc%2BzyWZ5K9C%2FIrQdKLWBBS8S6QQ%2FEEL0r5EWni5iFvJ6Ci7gfuG7n8fU0Mlg6O8IK0wzFxf6NiaIu3CaWGPIji82YaQAqpH9ZzHIM4DgkEj8iyRiFzxOKuVm0IVwOei4dTFTMu9dmvke8obdrVvmP%2BFH8a80wlcosMjiprvL57kvwWzu3817cu7FETVP%2FIRqfQ%2F7sMOyEhL0GOqUB4Jij4qZuy2Z5J3gsgyhmqSgZtra%2BuwDqBjdjjOAqUOqV2zJdS%2FqhKmbcgy8XAn0Qcm9H9VkumIkJ5okxeSdle9C5HoMbQQdLvYX12pHAJ%2B3ewOqNCXJhmBOM7ia9Hw1F4jPvfyS6mca87G6jN8GWDQQxuk2jCsS44%2Bk81yyj88PCg3RW7nBTXB0UXXffmb6BjDBleojq5ch%2FFFPPjeZDCjT37wHe&X-Amz-Signature=3056ac2221fab028b0fa74b35640b6ed573cebc1416384f957b12419f161e4ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26CG56U%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDjDtc8238gbXjzOHGvr45I3%2FCnWx4MDiBIwu3nNOYOVAiEA5U%2FwSzYY7f07jcq%2B0ARXL6wEx3T5jesY0COn1spJxfsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKsKP01YZt2dHMXIOCrcA8YyK7gO12gcYOPBOSVCpUvPMiqJastTT8ON0S4B846lcX6vyh5opwEUnyQzPzBt06xi1GYIOcqauo5AFACmvC7yYuiS%2Buu8ht%2Bi%2BXSo1USy%2FCCB68vkEPXNECOOE9q3RKZsyrKYlzzH73%2BJcZAMbzZs3rDBhNjLJrVf5CU9shQ95sZ%2B25Ts1wgHoCwW6kZnxxlWTcQ86ikIj8syCI3mzel7O1VnwXpERJA71BlsY5Mj2effUY3GVQf6Qu5N7lJrB%2FXymeVBZkEaUPDR5B0r%2BNPtIqUl6IMFjACunaKdQHBFvLCB8516byMveyCmfQ9xYQkW7uZ6iPGca1VHG8nORBvXBwldWj7dDKg6tc9M8eDAEK%2FgS649AUUILlRPWBekzhdxojgVw5Oz37%2FvNk0ZN1mwtvAhXu5D1z2JTcJjV1C242bISeK48krJc%2BzyWZ5K9C%2FIrQdKLWBBS8S6QQ%2FEEL0r5EWni5iFvJ6Ci7gfuG7n8fU0Mlg6O8IK0wzFxf6NiaIu3CaWGPIji82YaQAqpH9ZzHIM4DgkEj8iyRiFzxOKuVm0IVwOei4dTFTMu9dmvke8obdrVvmP%2BFH8a80wlcosMjiprvL57kvwWzu3817cu7FETVP%2FIRqfQ%2F7sMOyEhL0GOqUB4Jij4qZuy2Z5J3gsgyhmqSgZtra%2BuwDqBjdjjOAqUOqV2zJdS%2FqhKmbcgy8XAn0Qcm9H9VkumIkJ5okxeSdle9C5HoMbQQdLvYX12pHAJ%2B3ewOqNCXJhmBOM7ia9Hw1F4jPvfyS6mca87G6jN8GWDQQxuk2jCsS44%2Bk81yyj88PCg3RW7nBTXB0UXXffmb6BjDBleojq5ch%2FFFPPjeZDCjT37wHe&X-Amz-Signature=7e229b798459bee4e4eba4d89ab434683797756e4afe1e5ca5f0ecad7f881056&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26CG56U%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDjDtc8238gbXjzOHGvr45I3%2FCnWx4MDiBIwu3nNOYOVAiEA5U%2FwSzYY7f07jcq%2B0ARXL6wEx3T5jesY0COn1spJxfsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKsKP01YZt2dHMXIOCrcA8YyK7gO12gcYOPBOSVCpUvPMiqJastTT8ON0S4B846lcX6vyh5opwEUnyQzPzBt06xi1GYIOcqauo5AFACmvC7yYuiS%2Buu8ht%2Bi%2BXSo1USy%2FCCB68vkEPXNECOOE9q3RKZsyrKYlzzH73%2BJcZAMbzZs3rDBhNjLJrVf5CU9shQ95sZ%2B25Ts1wgHoCwW6kZnxxlWTcQ86ikIj8syCI3mzel7O1VnwXpERJA71BlsY5Mj2effUY3GVQf6Qu5N7lJrB%2FXymeVBZkEaUPDR5B0r%2BNPtIqUl6IMFjACunaKdQHBFvLCB8516byMveyCmfQ9xYQkW7uZ6iPGca1VHG8nORBvXBwldWj7dDKg6tc9M8eDAEK%2FgS649AUUILlRPWBekzhdxojgVw5Oz37%2FvNk0ZN1mwtvAhXu5D1z2JTcJjV1C242bISeK48krJc%2BzyWZ5K9C%2FIrQdKLWBBS8S6QQ%2FEEL0r5EWni5iFvJ6Ci7gfuG7n8fU0Mlg6O8IK0wzFxf6NiaIu3CaWGPIji82YaQAqpH9ZzHIM4DgkEj8iyRiFzxOKuVm0IVwOei4dTFTMu9dmvke8obdrVvmP%2BFH8a80wlcosMjiprvL57kvwWzu3817cu7FETVP%2FIRqfQ%2F7sMOyEhL0GOqUB4Jij4qZuy2Z5J3gsgyhmqSgZtra%2BuwDqBjdjjOAqUOqV2zJdS%2FqhKmbcgy8XAn0Qcm9H9VkumIkJ5okxeSdle9C5HoMbQQdLvYX12pHAJ%2B3ewOqNCXJhmBOM7ia9Hw1F4jPvfyS6mca87G6jN8GWDQQxuk2jCsS44%2Bk81yyj88PCg3RW7nBTXB0UXXffmb6BjDBleojq5ch%2FFFPPjeZDCjT37wHe&X-Amz-Signature=3ef337d663173aba7a0a63d77144436661202eaffd5bfeace561c15070711329&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
