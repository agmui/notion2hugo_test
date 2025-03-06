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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCHN6PP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgSz1HhxdqNlf9N84ZE%2FYNCoxnTtPxjTIaAumjopKrlgIhAPopUtfz8c8P8YzgF9Zvh4ODQ4I1TLW6rHbaW0eEY5FhKv8DCCkQABoMNjM3NDIzMTgzODA1IgyX29iAhtpt58eOMQQq3AP8PwEOQ%2F%2FnIRkFVejRQFCipeK0kC%2Ba6sTnsljKEdHO3GclizCBagN9mrr7lCJQe%2B1DWFBFYSWLDyLajW546pRPKVvm4%2Fvz5KlFHQGYQ8QQgo0U5aqLTOR7qhNMhFcJhluMVtO2ZK2yarDUswzoyu4W46EnGBtiRXuPhnryuhAJaiZUHpt9%2FiIPx%2FhBTyrH3bGf4uhV0iRhXIVx8HpSqEbWF1zRCB6%2B2lLNTBjWDLv9cAVjRUYSY0iYRCvx6nHZzR2pK%2FPWS27gTWZK%2BAQka7uNzJ7v5UOhAR9j4cqox46hnZc8HUy2Tpk%2BZgI6eX7pKcMrCjaUUUbrPag9KKSPYgiMfQq1TkAz1HcSS5WGlrCdFlIz9twXV7%2F1FimiaM5SRYYMvv2T6uW63o7iREF%2F8dlhsbP5hwHhUJDnOTUiYPUAtiH9Hmze1ldtsG2apCwibySG%2Bvrw7jl9ycUpGkhsgH9GzsYbIeaAg22WEpeeTtcnxR6FxpSvYcf2I7yGM1TO%2Fzf9PVidd5JitpdcD%2FOOntQbZvuBCQXEP1P%2BqEwGSLhve0s7yNvdaJ0cdAIWqR0V%2Bog59tbvqt9fAFMZ%2FY6kjFij9jcJEKAxqGve1sy%2BcA6mHDMyeaiR%2BnAziQRE6zDptKW%2BBjqkAams8%2BJKLGxcxdqbljxr1GqEXULJhZVmrKIlsBfzTtzBeOBoStg2HdOCwhNKUUCcoGru0cGu5NFUT813vUSDL5b9%2FeUnFrBL1l%2FyDz7B%2Bfdhi69B7nJKK12wB8OrcoUVGa%2BzNb9NtBHsQJxg61H6hFNQ%2BqM3WBqC5DhiDzPmZwabj50dfvf3YV%2FLus%2FlCZ2CGu%2F5PBHp5psHRXnCgOZ1BcjS8rh%2F&X-Amz-Signature=a790228f98547749c3c7858a5c5c99e1bc7eba6cb9915baa5e251be974c51d55&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCHN6PP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgSz1HhxdqNlf9N84ZE%2FYNCoxnTtPxjTIaAumjopKrlgIhAPopUtfz8c8P8YzgF9Zvh4ODQ4I1TLW6rHbaW0eEY5FhKv8DCCkQABoMNjM3NDIzMTgzODA1IgyX29iAhtpt58eOMQQq3AP8PwEOQ%2F%2FnIRkFVejRQFCipeK0kC%2Ba6sTnsljKEdHO3GclizCBagN9mrr7lCJQe%2B1DWFBFYSWLDyLajW546pRPKVvm4%2Fvz5KlFHQGYQ8QQgo0U5aqLTOR7qhNMhFcJhluMVtO2ZK2yarDUswzoyu4W46EnGBtiRXuPhnryuhAJaiZUHpt9%2FiIPx%2FhBTyrH3bGf4uhV0iRhXIVx8HpSqEbWF1zRCB6%2B2lLNTBjWDLv9cAVjRUYSY0iYRCvx6nHZzR2pK%2FPWS27gTWZK%2BAQka7uNzJ7v5UOhAR9j4cqox46hnZc8HUy2Tpk%2BZgI6eX7pKcMrCjaUUUbrPag9KKSPYgiMfQq1TkAz1HcSS5WGlrCdFlIz9twXV7%2F1FimiaM5SRYYMvv2T6uW63o7iREF%2F8dlhsbP5hwHhUJDnOTUiYPUAtiH9Hmze1ldtsG2apCwibySG%2Bvrw7jl9ycUpGkhsgH9GzsYbIeaAg22WEpeeTtcnxR6FxpSvYcf2I7yGM1TO%2Fzf9PVidd5JitpdcD%2FOOntQbZvuBCQXEP1P%2BqEwGSLhve0s7yNvdaJ0cdAIWqR0V%2Bog59tbvqt9fAFMZ%2FY6kjFij9jcJEKAxqGve1sy%2BcA6mHDMyeaiR%2BnAziQRE6zDptKW%2BBjqkAams8%2BJKLGxcxdqbljxr1GqEXULJhZVmrKIlsBfzTtzBeOBoStg2HdOCwhNKUUCcoGru0cGu5NFUT813vUSDL5b9%2FeUnFrBL1l%2FyDz7B%2Bfdhi69B7nJKK12wB8OrcoUVGa%2BzNb9NtBHsQJxg61H6hFNQ%2BqM3WBqC5DhiDzPmZwabj50dfvf3YV%2FLus%2FlCZ2CGu%2F5PBHp5psHRXnCgOZ1BcjS8rh%2F&X-Amz-Signature=7b6dd2f2a26904e8c8bff0f2a852525ebcd107c14532740cdf6a612c70e73053&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCHN6PP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgSz1HhxdqNlf9N84ZE%2FYNCoxnTtPxjTIaAumjopKrlgIhAPopUtfz8c8P8YzgF9Zvh4ODQ4I1TLW6rHbaW0eEY5FhKv8DCCkQABoMNjM3NDIzMTgzODA1IgyX29iAhtpt58eOMQQq3AP8PwEOQ%2F%2FnIRkFVejRQFCipeK0kC%2Ba6sTnsljKEdHO3GclizCBagN9mrr7lCJQe%2B1DWFBFYSWLDyLajW546pRPKVvm4%2Fvz5KlFHQGYQ8QQgo0U5aqLTOR7qhNMhFcJhluMVtO2ZK2yarDUswzoyu4W46EnGBtiRXuPhnryuhAJaiZUHpt9%2FiIPx%2FhBTyrH3bGf4uhV0iRhXIVx8HpSqEbWF1zRCB6%2B2lLNTBjWDLv9cAVjRUYSY0iYRCvx6nHZzR2pK%2FPWS27gTWZK%2BAQka7uNzJ7v5UOhAR9j4cqox46hnZc8HUy2Tpk%2BZgI6eX7pKcMrCjaUUUbrPag9KKSPYgiMfQq1TkAz1HcSS5WGlrCdFlIz9twXV7%2F1FimiaM5SRYYMvv2T6uW63o7iREF%2F8dlhsbP5hwHhUJDnOTUiYPUAtiH9Hmze1ldtsG2apCwibySG%2Bvrw7jl9ycUpGkhsgH9GzsYbIeaAg22WEpeeTtcnxR6FxpSvYcf2I7yGM1TO%2Fzf9PVidd5JitpdcD%2FOOntQbZvuBCQXEP1P%2BqEwGSLhve0s7yNvdaJ0cdAIWqR0V%2Bog59tbvqt9fAFMZ%2FY6kjFij9jcJEKAxqGve1sy%2BcA6mHDMyeaiR%2BnAziQRE6zDptKW%2BBjqkAams8%2BJKLGxcxdqbljxr1GqEXULJhZVmrKIlsBfzTtzBeOBoStg2HdOCwhNKUUCcoGru0cGu5NFUT813vUSDL5b9%2FeUnFrBL1l%2FyDz7B%2Bfdhi69B7nJKK12wB8OrcoUVGa%2BzNb9NtBHsQJxg61H6hFNQ%2BqM3WBqC5DhiDzPmZwabj50dfvf3YV%2FLus%2FlCZ2CGu%2F5PBHp5psHRXnCgOZ1BcjS8rh%2F&X-Amz-Signature=413b3015b3161a081bfa1af66335997c65e1ae7a1b9964f591e3e8aae83ed3ab&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCHN6PP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgSz1HhxdqNlf9N84ZE%2FYNCoxnTtPxjTIaAumjopKrlgIhAPopUtfz8c8P8YzgF9Zvh4ODQ4I1TLW6rHbaW0eEY5FhKv8DCCkQABoMNjM3NDIzMTgzODA1IgyX29iAhtpt58eOMQQq3AP8PwEOQ%2F%2FnIRkFVejRQFCipeK0kC%2Ba6sTnsljKEdHO3GclizCBagN9mrr7lCJQe%2B1DWFBFYSWLDyLajW546pRPKVvm4%2Fvz5KlFHQGYQ8QQgo0U5aqLTOR7qhNMhFcJhluMVtO2ZK2yarDUswzoyu4W46EnGBtiRXuPhnryuhAJaiZUHpt9%2FiIPx%2FhBTyrH3bGf4uhV0iRhXIVx8HpSqEbWF1zRCB6%2B2lLNTBjWDLv9cAVjRUYSY0iYRCvx6nHZzR2pK%2FPWS27gTWZK%2BAQka7uNzJ7v5UOhAR9j4cqox46hnZc8HUy2Tpk%2BZgI6eX7pKcMrCjaUUUbrPag9KKSPYgiMfQq1TkAz1HcSS5WGlrCdFlIz9twXV7%2F1FimiaM5SRYYMvv2T6uW63o7iREF%2F8dlhsbP5hwHhUJDnOTUiYPUAtiH9Hmze1ldtsG2apCwibySG%2Bvrw7jl9ycUpGkhsgH9GzsYbIeaAg22WEpeeTtcnxR6FxpSvYcf2I7yGM1TO%2Fzf9PVidd5JitpdcD%2FOOntQbZvuBCQXEP1P%2BqEwGSLhve0s7yNvdaJ0cdAIWqR0V%2Bog59tbvqt9fAFMZ%2FY6kjFij9jcJEKAxqGve1sy%2BcA6mHDMyeaiR%2BnAziQRE6zDptKW%2BBjqkAams8%2BJKLGxcxdqbljxr1GqEXULJhZVmrKIlsBfzTtzBeOBoStg2HdOCwhNKUUCcoGru0cGu5NFUT813vUSDL5b9%2FeUnFrBL1l%2FyDz7B%2Bfdhi69B7nJKK12wB8OrcoUVGa%2BzNb9NtBHsQJxg61H6hFNQ%2BqM3WBqC5DhiDzPmZwabj50dfvf3YV%2FLus%2FlCZ2CGu%2F5PBHp5psHRXnCgOZ1BcjS8rh%2F&X-Amz-Signature=37dbd0228a61c820e0e1cec0d334ff4210138dbffd830f23a3f165832737a87a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCHN6PP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgSz1HhxdqNlf9N84ZE%2FYNCoxnTtPxjTIaAumjopKrlgIhAPopUtfz8c8P8YzgF9Zvh4ODQ4I1TLW6rHbaW0eEY5FhKv8DCCkQABoMNjM3NDIzMTgzODA1IgyX29iAhtpt58eOMQQq3AP8PwEOQ%2F%2FnIRkFVejRQFCipeK0kC%2Ba6sTnsljKEdHO3GclizCBagN9mrr7lCJQe%2B1DWFBFYSWLDyLajW546pRPKVvm4%2Fvz5KlFHQGYQ8QQgo0U5aqLTOR7qhNMhFcJhluMVtO2ZK2yarDUswzoyu4W46EnGBtiRXuPhnryuhAJaiZUHpt9%2FiIPx%2FhBTyrH3bGf4uhV0iRhXIVx8HpSqEbWF1zRCB6%2B2lLNTBjWDLv9cAVjRUYSY0iYRCvx6nHZzR2pK%2FPWS27gTWZK%2BAQka7uNzJ7v5UOhAR9j4cqox46hnZc8HUy2Tpk%2BZgI6eX7pKcMrCjaUUUbrPag9KKSPYgiMfQq1TkAz1HcSS5WGlrCdFlIz9twXV7%2F1FimiaM5SRYYMvv2T6uW63o7iREF%2F8dlhsbP5hwHhUJDnOTUiYPUAtiH9Hmze1ldtsG2apCwibySG%2Bvrw7jl9ycUpGkhsgH9GzsYbIeaAg22WEpeeTtcnxR6FxpSvYcf2I7yGM1TO%2Fzf9PVidd5JitpdcD%2FOOntQbZvuBCQXEP1P%2BqEwGSLhve0s7yNvdaJ0cdAIWqR0V%2Bog59tbvqt9fAFMZ%2FY6kjFij9jcJEKAxqGve1sy%2BcA6mHDMyeaiR%2BnAziQRE6zDptKW%2BBjqkAams8%2BJKLGxcxdqbljxr1GqEXULJhZVmrKIlsBfzTtzBeOBoStg2HdOCwhNKUUCcoGru0cGu5NFUT813vUSDL5b9%2FeUnFrBL1l%2FyDz7B%2Bfdhi69B7nJKK12wB8OrcoUVGa%2BzNb9NtBHsQJxg61H6hFNQ%2BqM3WBqC5DhiDzPmZwabj50dfvf3YV%2FLus%2FlCZ2CGu%2F5PBHp5psHRXnCgOZ1BcjS8rh%2F&X-Amz-Signature=3c72ec235cb475e65657270e2dfdd3da274c02c1bad9e080ebd46aee9cd5c21c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCHN6PP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgSz1HhxdqNlf9N84ZE%2FYNCoxnTtPxjTIaAumjopKrlgIhAPopUtfz8c8P8YzgF9Zvh4ODQ4I1TLW6rHbaW0eEY5FhKv8DCCkQABoMNjM3NDIzMTgzODA1IgyX29iAhtpt58eOMQQq3AP8PwEOQ%2F%2FnIRkFVejRQFCipeK0kC%2Ba6sTnsljKEdHO3GclizCBagN9mrr7lCJQe%2B1DWFBFYSWLDyLajW546pRPKVvm4%2Fvz5KlFHQGYQ8QQgo0U5aqLTOR7qhNMhFcJhluMVtO2ZK2yarDUswzoyu4W46EnGBtiRXuPhnryuhAJaiZUHpt9%2FiIPx%2FhBTyrH3bGf4uhV0iRhXIVx8HpSqEbWF1zRCB6%2B2lLNTBjWDLv9cAVjRUYSY0iYRCvx6nHZzR2pK%2FPWS27gTWZK%2BAQka7uNzJ7v5UOhAR9j4cqox46hnZc8HUy2Tpk%2BZgI6eX7pKcMrCjaUUUbrPag9KKSPYgiMfQq1TkAz1HcSS5WGlrCdFlIz9twXV7%2F1FimiaM5SRYYMvv2T6uW63o7iREF%2F8dlhsbP5hwHhUJDnOTUiYPUAtiH9Hmze1ldtsG2apCwibySG%2Bvrw7jl9ycUpGkhsgH9GzsYbIeaAg22WEpeeTtcnxR6FxpSvYcf2I7yGM1TO%2Fzf9PVidd5JitpdcD%2FOOntQbZvuBCQXEP1P%2BqEwGSLhve0s7yNvdaJ0cdAIWqR0V%2Bog59tbvqt9fAFMZ%2FY6kjFij9jcJEKAxqGve1sy%2BcA6mHDMyeaiR%2BnAziQRE6zDptKW%2BBjqkAams8%2BJKLGxcxdqbljxr1GqEXULJhZVmrKIlsBfzTtzBeOBoStg2HdOCwhNKUUCcoGru0cGu5NFUT813vUSDL5b9%2FeUnFrBL1l%2FyDz7B%2Bfdhi69B7nJKK12wB8OrcoUVGa%2BzNb9NtBHsQJxg61H6hFNQ%2BqM3WBqC5DhiDzPmZwabj50dfvf3YV%2FLus%2FlCZ2CGu%2F5PBHp5psHRXnCgOZ1BcjS8rh%2F&X-Amz-Signature=59407686b154d0ec86381d3acd03726939d87bdff64d95670dd4b9af59f8e7fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCHN6PP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgSz1HhxdqNlf9N84ZE%2FYNCoxnTtPxjTIaAumjopKrlgIhAPopUtfz8c8P8YzgF9Zvh4ODQ4I1TLW6rHbaW0eEY5FhKv8DCCkQABoMNjM3NDIzMTgzODA1IgyX29iAhtpt58eOMQQq3AP8PwEOQ%2F%2FnIRkFVejRQFCipeK0kC%2Ba6sTnsljKEdHO3GclizCBagN9mrr7lCJQe%2B1DWFBFYSWLDyLajW546pRPKVvm4%2Fvz5KlFHQGYQ8QQgo0U5aqLTOR7qhNMhFcJhluMVtO2ZK2yarDUswzoyu4W46EnGBtiRXuPhnryuhAJaiZUHpt9%2FiIPx%2FhBTyrH3bGf4uhV0iRhXIVx8HpSqEbWF1zRCB6%2B2lLNTBjWDLv9cAVjRUYSY0iYRCvx6nHZzR2pK%2FPWS27gTWZK%2BAQka7uNzJ7v5UOhAR9j4cqox46hnZc8HUy2Tpk%2BZgI6eX7pKcMrCjaUUUbrPag9KKSPYgiMfQq1TkAz1HcSS5WGlrCdFlIz9twXV7%2F1FimiaM5SRYYMvv2T6uW63o7iREF%2F8dlhsbP5hwHhUJDnOTUiYPUAtiH9Hmze1ldtsG2apCwibySG%2Bvrw7jl9ycUpGkhsgH9GzsYbIeaAg22WEpeeTtcnxR6FxpSvYcf2I7yGM1TO%2Fzf9PVidd5JitpdcD%2FOOntQbZvuBCQXEP1P%2BqEwGSLhve0s7yNvdaJ0cdAIWqR0V%2Bog59tbvqt9fAFMZ%2FY6kjFij9jcJEKAxqGve1sy%2BcA6mHDMyeaiR%2BnAziQRE6zDptKW%2BBjqkAams8%2BJKLGxcxdqbljxr1GqEXULJhZVmrKIlsBfzTtzBeOBoStg2HdOCwhNKUUCcoGru0cGu5NFUT813vUSDL5b9%2FeUnFrBL1l%2FyDz7B%2Bfdhi69B7nJKK12wB8OrcoUVGa%2BzNb9NtBHsQJxg61H6hFNQ%2BqM3WBqC5DhiDzPmZwabj50dfvf3YV%2FLus%2FlCZ2CGu%2F5PBHp5psHRXnCgOZ1BcjS8rh%2F&X-Amz-Signature=a8b85a3e123a60d27a57c86cfde7f4bf126fc037acc95bfd139df77d66da89cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCHN6PP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgSz1HhxdqNlf9N84ZE%2FYNCoxnTtPxjTIaAumjopKrlgIhAPopUtfz8c8P8YzgF9Zvh4ODQ4I1TLW6rHbaW0eEY5FhKv8DCCkQABoMNjM3NDIzMTgzODA1IgyX29iAhtpt58eOMQQq3AP8PwEOQ%2F%2FnIRkFVejRQFCipeK0kC%2Ba6sTnsljKEdHO3GclizCBagN9mrr7lCJQe%2B1DWFBFYSWLDyLajW546pRPKVvm4%2Fvz5KlFHQGYQ8QQgo0U5aqLTOR7qhNMhFcJhluMVtO2ZK2yarDUswzoyu4W46EnGBtiRXuPhnryuhAJaiZUHpt9%2FiIPx%2FhBTyrH3bGf4uhV0iRhXIVx8HpSqEbWF1zRCB6%2B2lLNTBjWDLv9cAVjRUYSY0iYRCvx6nHZzR2pK%2FPWS27gTWZK%2BAQka7uNzJ7v5UOhAR9j4cqox46hnZc8HUy2Tpk%2BZgI6eX7pKcMrCjaUUUbrPag9KKSPYgiMfQq1TkAz1HcSS5WGlrCdFlIz9twXV7%2F1FimiaM5SRYYMvv2T6uW63o7iREF%2F8dlhsbP5hwHhUJDnOTUiYPUAtiH9Hmze1ldtsG2apCwibySG%2Bvrw7jl9ycUpGkhsgH9GzsYbIeaAg22WEpeeTtcnxR6FxpSvYcf2I7yGM1TO%2Fzf9PVidd5JitpdcD%2FOOntQbZvuBCQXEP1P%2BqEwGSLhve0s7yNvdaJ0cdAIWqR0V%2Bog59tbvqt9fAFMZ%2FY6kjFij9jcJEKAxqGve1sy%2BcA6mHDMyeaiR%2BnAziQRE6zDptKW%2BBjqkAams8%2BJKLGxcxdqbljxr1GqEXULJhZVmrKIlsBfzTtzBeOBoStg2HdOCwhNKUUCcoGru0cGu5NFUT813vUSDL5b9%2FeUnFrBL1l%2FyDz7B%2Bfdhi69B7nJKK12wB8OrcoUVGa%2BzNb9NtBHsQJxg61H6hFNQ%2BqM3WBqC5DhiDzPmZwabj50dfvf3YV%2FLus%2FlCZ2CGu%2F5PBHp5psHRXnCgOZ1BcjS8rh%2F&X-Amz-Signature=03b3dd8f8d9f5d3dd1e35847ac7eb76b703ad707ef2c6d38c73bf91904fe2a61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
