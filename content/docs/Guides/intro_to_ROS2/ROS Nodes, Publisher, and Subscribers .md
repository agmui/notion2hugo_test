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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2SDEVA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzgE6ae4yS4rym3yGAz7JVwWW%2FEPz7SMUAAe1CQ1gingIhAI%2FCPypvVWJeadt21uK0qrBKSgLd%2FETnAhhCLuyT6IdCKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywKxiWf30Ul9axYC8q3ANkaCKoIJQQHf7QSAIpocafA0M9NHsAfoE9LShYQDK5gKnaecSjHR%2FXxg064z9FTXhzm63zIRgo%2FmdOsGC1jBgaBAsPUTzxGJk9zq2v5Irwyp%2BeBXpygSbNlmAn25Un%2BBV9ifIMigYp9PXg2gdA0%2BAbMs%2B5Hw4is66d6%2B97%2B4zn2B7gGtDXAC3e6mgsZGTIgXwJ4bBx%2BX%2BEX1V7ALJiwgqU7DkHzi9VkSn0%2BeeSo3%2BiDIzQFCv5gMZLmOElcCYwW8WlBCMyK%2FpH7BUYFVwAv6C3GCp61mnLgH%2FMwqDcK5cggD%2FPjTgVXIjN%2FREgha%2BOsNH5YL%2Bx%2FOE7vw4UM0YIOEagFVilTkBOSU9cmrkEzk%2FEoVCsRQ0tUSoMf4c%2Fr3Ln3rRs%2Bbko7LZmKrUuTGwpOfPXZ0KzCmbXgMlZ%2BzrbnDmSYaJwz9Hp4XNTLeWgWJO%2FzpHrp%2Bne6843YWO9lTZ0jbOIAm8lB5ZvzxCMZdE7oMO6wVCbNjPczOy1BzTLAl80lqVV8ktmNXhiXwM143Gqms3sNPBNfC8U4iBJFIKn33DmsU5jIq5On87Sdr8iFDOYReEBFEkarjmC0Pe5IgxWMNwiTXX%2B7OMyd2unfqgqGnRVbSIWUl9If%2Bo7NRM4fzDYr%2FbABjqkAW0BTvvYrY%2BTP%2FZExSRHFduYhzFc7vJ5H4nOyuK6Z%2FAVmVa5raJOjBeifyI6pGHzYghXpt5JLm1R95FK9iCOEElZCU4z1EpJeebCm1U1D2YsQj17IMDtUKDXrLcTlED3jFkYyQlCXtnjhQkrXskBaJPr2A9Y5xSViN1YtyXTIUWV0ntfJ0c8V5NKGxgnCEjMlNooHt7sGdhfh1CeoCBQbI2y8EUY&X-Amz-Signature=fe61ff60939630ef36ade08327ff538b6c9748bc70b29f37c97d02458d456945&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2SDEVA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzgE6ae4yS4rym3yGAz7JVwWW%2FEPz7SMUAAe1CQ1gingIhAI%2FCPypvVWJeadt21uK0qrBKSgLd%2FETnAhhCLuyT6IdCKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywKxiWf30Ul9axYC8q3ANkaCKoIJQQHf7QSAIpocafA0M9NHsAfoE9LShYQDK5gKnaecSjHR%2FXxg064z9FTXhzm63zIRgo%2FmdOsGC1jBgaBAsPUTzxGJk9zq2v5Irwyp%2BeBXpygSbNlmAn25Un%2BBV9ifIMigYp9PXg2gdA0%2BAbMs%2B5Hw4is66d6%2B97%2B4zn2B7gGtDXAC3e6mgsZGTIgXwJ4bBx%2BX%2BEX1V7ALJiwgqU7DkHzi9VkSn0%2BeeSo3%2BiDIzQFCv5gMZLmOElcCYwW8WlBCMyK%2FpH7BUYFVwAv6C3GCp61mnLgH%2FMwqDcK5cggD%2FPjTgVXIjN%2FREgha%2BOsNH5YL%2Bx%2FOE7vw4UM0YIOEagFVilTkBOSU9cmrkEzk%2FEoVCsRQ0tUSoMf4c%2Fr3Ln3rRs%2Bbko7LZmKrUuTGwpOfPXZ0KzCmbXgMlZ%2BzrbnDmSYaJwz9Hp4XNTLeWgWJO%2FzpHrp%2Bne6843YWO9lTZ0jbOIAm8lB5ZvzxCMZdE7oMO6wVCbNjPczOy1BzTLAl80lqVV8ktmNXhiXwM143Gqms3sNPBNfC8U4iBJFIKn33DmsU5jIq5On87Sdr8iFDOYReEBFEkarjmC0Pe5IgxWMNwiTXX%2B7OMyd2unfqgqGnRVbSIWUl9If%2Bo7NRM4fzDYr%2FbABjqkAW0BTvvYrY%2BTP%2FZExSRHFduYhzFc7vJ5H4nOyuK6Z%2FAVmVa5raJOjBeifyI6pGHzYghXpt5JLm1R95FK9iCOEElZCU4z1EpJeebCm1U1D2YsQj17IMDtUKDXrLcTlED3jFkYyQlCXtnjhQkrXskBaJPr2A9Y5xSViN1YtyXTIUWV0ntfJ0c8V5NKGxgnCEjMlNooHt7sGdhfh1CeoCBQbI2y8EUY&X-Amz-Signature=1df33a957b850794c06a8022132ea1316bc25653531e3f0bb49865e6e0ebe980&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2SDEVA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzgE6ae4yS4rym3yGAz7JVwWW%2FEPz7SMUAAe1CQ1gingIhAI%2FCPypvVWJeadt21uK0qrBKSgLd%2FETnAhhCLuyT6IdCKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywKxiWf30Ul9axYC8q3ANkaCKoIJQQHf7QSAIpocafA0M9NHsAfoE9LShYQDK5gKnaecSjHR%2FXxg064z9FTXhzm63zIRgo%2FmdOsGC1jBgaBAsPUTzxGJk9zq2v5Irwyp%2BeBXpygSbNlmAn25Un%2BBV9ifIMigYp9PXg2gdA0%2BAbMs%2B5Hw4is66d6%2B97%2B4zn2B7gGtDXAC3e6mgsZGTIgXwJ4bBx%2BX%2BEX1V7ALJiwgqU7DkHzi9VkSn0%2BeeSo3%2BiDIzQFCv5gMZLmOElcCYwW8WlBCMyK%2FpH7BUYFVwAv6C3GCp61mnLgH%2FMwqDcK5cggD%2FPjTgVXIjN%2FREgha%2BOsNH5YL%2Bx%2FOE7vw4UM0YIOEagFVilTkBOSU9cmrkEzk%2FEoVCsRQ0tUSoMf4c%2Fr3Ln3rRs%2Bbko7LZmKrUuTGwpOfPXZ0KzCmbXgMlZ%2BzrbnDmSYaJwz9Hp4XNTLeWgWJO%2FzpHrp%2Bne6843YWO9lTZ0jbOIAm8lB5ZvzxCMZdE7oMO6wVCbNjPczOy1BzTLAl80lqVV8ktmNXhiXwM143Gqms3sNPBNfC8U4iBJFIKn33DmsU5jIq5On87Sdr8iFDOYReEBFEkarjmC0Pe5IgxWMNwiTXX%2B7OMyd2unfqgqGnRVbSIWUl9If%2Bo7NRM4fzDYr%2FbABjqkAW0BTvvYrY%2BTP%2FZExSRHFduYhzFc7vJ5H4nOyuK6Z%2FAVmVa5raJOjBeifyI6pGHzYghXpt5JLm1R95FK9iCOEElZCU4z1EpJeebCm1U1D2YsQj17IMDtUKDXrLcTlED3jFkYyQlCXtnjhQkrXskBaJPr2A9Y5xSViN1YtyXTIUWV0ntfJ0c8V5NKGxgnCEjMlNooHt7sGdhfh1CeoCBQbI2y8EUY&X-Amz-Signature=14310a57774c84fd99a923593644a73d150ea08d1c59c33d11c108a8adf04f90&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2SDEVA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzgE6ae4yS4rym3yGAz7JVwWW%2FEPz7SMUAAe1CQ1gingIhAI%2FCPypvVWJeadt21uK0qrBKSgLd%2FETnAhhCLuyT6IdCKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywKxiWf30Ul9axYC8q3ANkaCKoIJQQHf7QSAIpocafA0M9NHsAfoE9LShYQDK5gKnaecSjHR%2FXxg064z9FTXhzm63zIRgo%2FmdOsGC1jBgaBAsPUTzxGJk9zq2v5Irwyp%2BeBXpygSbNlmAn25Un%2BBV9ifIMigYp9PXg2gdA0%2BAbMs%2B5Hw4is66d6%2B97%2B4zn2B7gGtDXAC3e6mgsZGTIgXwJ4bBx%2BX%2BEX1V7ALJiwgqU7DkHzi9VkSn0%2BeeSo3%2BiDIzQFCv5gMZLmOElcCYwW8WlBCMyK%2FpH7BUYFVwAv6C3GCp61mnLgH%2FMwqDcK5cggD%2FPjTgVXIjN%2FREgha%2BOsNH5YL%2Bx%2FOE7vw4UM0YIOEagFVilTkBOSU9cmrkEzk%2FEoVCsRQ0tUSoMf4c%2Fr3Ln3rRs%2Bbko7LZmKrUuTGwpOfPXZ0KzCmbXgMlZ%2BzrbnDmSYaJwz9Hp4XNTLeWgWJO%2FzpHrp%2Bne6843YWO9lTZ0jbOIAm8lB5ZvzxCMZdE7oMO6wVCbNjPczOy1BzTLAl80lqVV8ktmNXhiXwM143Gqms3sNPBNfC8U4iBJFIKn33DmsU5jIq5On87Sdr8iFDOYReEBFEkarjmC0Pe5IgxWMNwiTXX%2B7OMyd2unfqgqGnRVbSIWUl9If%2Bo7NRM4fzDYr%2FbABjqkAW0BTvvYrY%2BTP%2FZExSRHFduYhzFc7vJ5H4nOyuK6Z%2FAVmVa5raJOjBeifyI6pGHzYghXpt5JLm1R95FK9iCOEElZCU4z1EpJeebCm1U1D2YsQj17IMDtUKDXrLcTlED3jFkYyQlCXtnjhQkrXskBaJPr2A9Y5xSViN1YtyXTIUWV0ntfJ0c8V5NKGxgnCEjMlNooHt7sGdhfh1CeoCBQbI2y8EUY&X-Amz-Signature=921fcfe75686a05fd99fa71f17f8ef1bbb59a5c0103d7143f887a775de5dc1c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2SDEVA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzgE6ae4yS4rym3yGAz7JVwWW%2FEPz7SMUAAe1CQ1gingIhAI%2FCPypvVWJeadt21uK0qrBKSgLd%2FETnAhhCLuyT6IdCKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywKxiWf30Ul9axYC8q3ANkaCKoIJQQHf7QSAIpocafA0M9NHsAfoE9LShYQDK5gKnaecSjHR%2FXxg064z9FTXhzm63zIRgo%2FmdOsGC1jBgaBAsPUTzxGJk9zq2v5Irwyp%2BeBXpygSbNlmAn25Un%2BBV9ifIMigYp9PXg2gdA0%2BAbMs%2B5Hw4is66d6%2B97%2B4zn2B7gGtDXAC3e6mgsZGTIgXwJ4bBx%2BX%2BEX1V7ALJiwgqU7DkHzi9VkSn0%2BeeSo3%2BiDIzQFCv5gMZLmOElcCYwW8WlBCMyK%2FpH7BUYFVwAv6C3GCp61mnLgH%2FMwqDcK5cggD%2FPjTgVXIjN%2FREgha%2BOsNH5YL%2Bx%2FOE7vw4UM0YIOEagFVilTkBOSU9cmrkEzk%2FEoVCsRQ0tUSoMf4c%2Fr3Ln3rRs%2Bbko7LZmKrUuTGwpOfPXZ0KzCmbXgMlZ%2BzrbnDmSYaJwz9Hp4XNTLeWgWJO%2FzpHrp%2Bne6843YWO9lTZ0jbOIAm8lB5ZvzxCMZdE7oMO6wVCbNjPczOy1BzTLAl80lqVV8ktmNXhiXwM143Gqms3sNPBNfC8U4iBJFIKn33DmsU5jIq5On87Sdr8iFDOYReEBFEkarjmC0Pe5IgxWMNwiTXX%2B7OMyd2unfqgqGnRVbSIWUl9If%2Bo7NRM4fzDYr%2FbABjqkAW0BTvvYrY%2BTP%2FZExSRHFduYhzFc7vJ5H4nOyuK6Z%2FAVmVa5raJOjBeifyI6pGHzYghXpt5JLm1R95FK9iCOEElZCU4z1EpJeebCm1U1D2YsQj17IMDtUKDXrLcTlED3jFkYyQlCXtnjhQkrXskBaJPr2A9Y5xSViN1YtyXTIUWV0ntfJ0c8V5NKGxgnCEjMlNooHt7sGdhfh1CeoCBQbI2y8EUY&X-Amz-Signature=3e63d9049ceffdba059c4d3cfec734d0e7740b3d37fe06edc26c9d3e2c9d9209&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2SDEVA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzgE6ae4yS4rym3yGAz7JVwWW%2FEPz7SMUAAe1CQ1gingIhAI%2FCPypvVWJeadt21uK0qrBKSgLd%2FETnAhhCLuyT6IdCKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywKxiWf30Ul9axYC8q3ANkaCKoIJQQHf7QSAIpocafA0M9NHsAfoE9LShYQDK5gKnaecSjHR%2FXxg064z9FTXhzm63zIRgo%2FmdOsGC1jBgaBAsPUTzxGJk9zq2v5Irwyp%2BeBXpygSbNlmAn25Un%2BBV9ifIMigYp9PXg2gdA0%2BAbMs%2B5Hw4is66d6%2B97%2B4zn2B7gGtDXAC3e6mgsZGTIgXwJ4bBx%2BX%2BEX1V7ALJiwgqU7DkHzi9VkSn0%2BeeSo3%2BiDIzQFCv5gMZLmOElcCYwW8WlBCMyK%2FpH7BUYFVwAv6C3GCp61mnLgH%2FMwqDcK5cggD%2FPjTgVXIjN%2FREgha%2BOsNH5YL%2Bx%2FOE7vw4UM0YIOEagFVilTkBOSU9cmrkEzk%2FEoVCsRQ0tUSoMf4c%2Fr3Ln3rRs%2Bbko7LZmKrUuTGwpOfPXZ0KzCmbXgMlZ%2BzrbnDmSYaJwz9Hp4XNTLeWgWJO%2FzpHrp%2Bne6843YWO9lTZ0jbOIAm8lB5ZvzxCMZdE7oMO6wVCbNjPczOy1BzTLAl80lqVV8ktmNXhiXwM143Gqms3sNPBNfC8U4iBJFIKn33DmsU5jIq5On87Sdr8iFDOYReEBFEkarjmC0Pe5IgxWMNwiTXX%2B7OMyd2unfqgqGnRVbSIWUl9If%2Bo7NRM4fzDYr%2FbABjqkAW0BTvvYrY%2BTP%2FZExSRHFduYhzFc7vJ5H4nOyuK6Z%2FAVmVa5raJOjBeifyI6pGHzYghXpt5JLm1R95FK9iCOEElZCU4z1EpJeebCm1U1D2YsQj17IMDtUKDXrLcTlED3jFkYyQlCXtnjhQkrXskBaJPr2A9Y5xSViN1YtyXTIUWV0ntfJ0c8V5NKGxgnCEjMlNooHt7sGdhfh1CeoCBQbI2y8EUY&X-Amz-Signature=858015a43257e71ea40bbc00c16269bf7378fd872d63891d63f6f421abfbe4cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2SDEVA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzgE6ae4yS4rym3yGAz7JVwWW%2FEPz7SMUAAe1CQ1gingIhAI%2FCPypvVWJeadt21uK0qrBKSgLd%2FETnAhhCLuyT6IdCKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywKxiWf30Ul9axYC8q3ANkaCKoIJQQHf7QSAIpocafA0M9NHsAfoE9LShYQDK5gKnaecSjHR%2FXxg064z9FTXhzm63zIRgo%2FmdOsGC1jBgaBAsPUTzxGJk9zq2v5Irwyp%2BeBXpygSbNlmAn25Un%2BBV9ifIMigYp9PXg2gdA0%2BAbMs%2B5Hw4is66d6%2B97%2B4zn2B7gGtDXAC3e6mgsZGTIgXwJ4bBx%2BX%2BEX1V7ALJiwgqU7DkHzi9VkSn0%2BeeSo3%2BiDIzQFCv5gMZLmOElcCYwW8WlBCMyK%2FpH7BUYFVwAv6C3GCp61mnLgH%2FMwqDcK5cggD%2FPjTgVXIjN%2FREgha%2BOsNH5YL%2Bx%2FOE7vw4UM0YIOEagFVilTkBOSU9cmrkEzk%2FEoVCsRQ0tUSoMf4c%2Fr3Ln3rRs%2Bbko7LZmKrUuTGwpOfPXZ0KzCmbXgMlZ%2BzrbnDmSYaJwz9Hp4XNTLeWgWJO%2FzpHrp%2Bne6843YWO9lTZ0jbOIAm8lB5ZvzxCMZdE7oMO6wVCbNjPczOy1BzTLAl80lqVV8ktmNXhiXwM143Gqms3sNPBNfC8U4iBJFIKn33DmsU5jIq5On87Sdr8iFDOYReEBFEkarjmC0Pe5IgxWMNwiTXX%2B7OMyd2unfqgqGnRVbSIWUl9If%2Bo7NRM4fzDYr%2FbABjqkAW0BTvvYrY%2BTP%2FZExSRHFduYhzFc7vJ5H4nOyuK6Z%2FAVmVa5raJOjBeifyI6pGHzYghXpt5JLm1R95FK9iCOEElZCU4z1EpJeebCm1U1D2YsQj17IMDtUKDXrLcTlED3jFkYyQlCXtnjhQkrXskBaJPr2A9Y5xSViN1YtyXTIUWV0ntfJ0c8V5NKGxgnCEjMlNooHt7sGdhfh1CeoCBQbI2y8EUY&X-Amz-Signature=d17572d1f61306081d22fc6df84605bddf9506fea07a0725d96bef3ff979c319&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2SDEVA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzgE6ae4yS4rym3yGAz7JVwWW%2FEPz7SMUAAe1CQ1gingIhAI%2FCPypvVWJeadt21uK0qrBKSgLd%2FETnAhhCLuyT6IdCKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywKxiWf30Ul9axYC8q3ANkaCKoIJQQHf7QSAIpocafA0M9NHsAfoE9LShYQDK5gKnaecSjHR%2FXxg064z9FTXhzm63zIRgo%2FmdOsGC1jBgaBAsPUTzxGJk9zq2v5Irwyp%2BeBXpygSbNlmAn25Un%2BBV9ifIMigYp9PXg2gdA0%2BAbMs%2B5Hw4is66d6%2B97%2B4zn2B7gGtDXAC3e6mgsZGTIgXwJ4bBx%2BX%2BEX1V7ALJiwgqU7DkHzi9VkSn0%2BeeSo3%2BiDIzQFCv5gMZLmOElcCYwW8WlBCMyK%2FpH7BUYFVwAv6C3GCp61mnLgH%2FMwqDcK5cggD%2FPjTgVXIjN%2FREgha%2BOsNH5YL%2Bx%2FOE7vw4UM0YIOEagFVilTkBOSU9cmrkEzk%2FEoVCsRQ0tUSoMf4c%2Fr3Ln3rRs%2Bbko7LZmKrUuTGwpOfPXZ0KzCmbXgMlZ%2BzrbnDmSYaJwz9Hp4XNTLeWgWJO%2FzpHrp%2Bne6843YWO9lTZ0jbOIAm8lB5ZvzxCMZdE7oMO6wVCbNjPczOy1BzTLAl80lqVV8ktmNXhiXwM143Gqms3sNPBNfC8U4iBJFIKn33DmsU5jIq5On87Sdr8iFDOYReEBFEkarjmC0Pe5IgxWMNwiTXX%2B7OMyd2unfqgqGnRVbSIWUl9If%2Bo7NRM4fzDYr%2FbABjqkAW0BTvvYrY%2BTP%2FZExSRHFduYhzFc7vJ5H4nOyuK6Z%2FAVmVa5raJOjBeifyI6pGHzYghXpt5JLm1R95FK9iCOEElZCU4z1EpJeebCm1U1D2YsQj17IMDtUKDXrLcTlED3jFkYyQlCXtnjhQkrXskBaJPr2A9Y5xSViN1YtyXTIUWV0ntfJ0c8V5NKGxgnCEjMlNooHt7sGdhfh1CeoCBQbI2y8EUY&X-Amz-Signature=193d468378f24fcfcb076cb86c4bfd84d649c82a767973d18cf0b82bea6e4e84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
