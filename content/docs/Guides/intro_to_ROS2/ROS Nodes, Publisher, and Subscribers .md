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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO2P5SW4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDaREG%2BgLLyzO6PELjeRealT0GstOF9fbcGpea8%2BvoQ%2BwIgalzGQc5BfbSCRxCzHPM2mx8LbpgG7QJiA1c7gjMdhB0qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGb6jOUFRWEEvTk41CrcA9IN9c2PLKiQvcutO1Udqz7oVK0YSVimUEr1EWE9XSmqcLyBeG1wz3Dt8uBiE3s%2Bpik0Vq%2BOw1l0Ob1CJ79tAYCNYcZNgEwha%2F6B8KVKBnWEhHL5Xo5JS8dQYcm9tk54au0EAY5pdyXZVJJcJeD2ZhKTBdyoIt4I5rgYfg6OTr329561dYLNKftvqpwj4b5VWinDR3bl1kejGqTsJlb9TnkWRSnI39jfBqiI1b8ukuywd%2FekGO7nvgxMkFGZGR7Gvr0w2qYnDvN%2FPc1pBQWbA00bCIcjDC%2BYq1p897J8CbEeEgSuyH5kc2039YbfCprgpR8maBIRN3Ta3w3v%2BL9HX1pSOCUgmsj7mQkH5zo8GrjPmMud0qDEZ9UoKy3XN7nqTJMC5%2B%2B2Z2jz80zMSz5eSeCD%2B1AY1S%2FDMYC5%2FR0TV6YrSH3CbRQCxnWAeB7FPRhahDoJ8UxvsjHc%2BaA13woev36KNL7QViCDfClz8KcaVn1cU1Z9NtPU7LEyB2LjNbYid1eb5ax0oS8ZzIMOWVa1amvKd6X9ta%2FUpZ%2Bke%2BB35VJzCEZRjxgxWfF2ij%2BjB2jRYMlplp99zoiAeKrj1S8GC33jp%2FPWjTwJlZggxDnr9XnD6pzru1buz02XUuMZMOzL478GOqUBCpHIIo4DVdqGje7l7weXWGo3lSdvSt11QJa1vQZ3BZ2Q4jcfZVv83B1cb3HRbUhdhdpKkwJZFjYGlHLV7BlwJxCXOCvxuClWP4Z7kbdprSj3qhFZ5pOdAFt1sASc7UF%2FK9n0SKeitYQH9%2Fg9vLfwer2%2BLg7oAzRaapzCDBvKdUEOR2%2BBn3c1Nv5nrwNTfaFfh4NQN7kVsbqxDAwAc7TIeRlIyE%2F8&X-Amz-Signature=cdeacff3000614b5c1e68b318de0572d740e52316c82ff2b26af8daa85b60f56&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO2P5SW4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDaREG%2BgLLyzO6PELjeRealT0GstOF9fbcGpea8%2BvoQ%2BwIgalzGQc5BfbSCRxCzHPM2mx8LbpgG7QJiA1c7gjMdhB0qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGb6jOUFRWEEvTk41CrcA9IN9c2PLKiQvcutO1Udqz7oVK0YSVimUEr1EWE9XSmqcLyBeG1wz3Dt8uBiE3s%2Bpik0Vq%2BOw1l0Ob1CJ79tAYCNYcZNgEwha%2F6B8KVKBnWEhHL5Xo5JS8dQYcm9tk54au0EAY5pdyXZVJJcJeD2ZhKTBdyoIt4I5rgYfg6OTr329561dYLNKftvqpwj4b5VWinDR3bl1kejGqTsJlb9TnkWRSnI39jfBqiI1b8ukuywd%2FekGO7nvgxMkFGZGR7Gvr0w2qYnDvN%2FPc1pBQWbA00bCIcjDC%2BYq1p897J8CbEeEgSuyH5kc2039YbfCprgpR8maBIRN3Ta3w3v%2BL9HX1pSOCUgmsj7mQkH5zo8GrjPmMud0qDEZ9UoKy3XN7nqTJMC5%2B%2B2Z2jz80zMSz5eSeCD%2B1AY1S%2FDMYC5%2FR0TV6YrSH3CbRQCxnWAeB7FPRhahDoJ8UxvsjHc%2BaA13woev36KNL7QViCDfClz8KcaVn1cU1Z9NtPU7LEyB2LjNbYid1eb5ax0oS8ZzIMOWVa1amvKd6X9ta%2FUpZ%2Bke%2BB35VJzCEZRjxgxWfF2ij%2BjB2jRYMlplp99zoiAeKrj1S8GC33jp%2FPWjTwJlZggxDnr9XnD6pzru1buz02XUuMZMOzL478GOqUBCpHIIo4DVdqGje7l7weXWGo3lSdvSt11QJa1vQZ3BZ2Q4jcfZVv83B1cb3HRbUhdhdpKkwJZFjYGlHLV7BlwJxCXOCvxuClWP4Z7kbdprSj3qhFZ5pOdAFt1sASc7UF%2FK9n0SKeitYQH9%2Fg9vLfwer2%2BLg7oAzRaapzCDBvKdUEOR2%2BBn3c1Nv5nrwNTfaFfh4NQN7kVsbqxDAwAc7TIeRlIyE%2F8&X-Amz-Signature=270bf2ab725b43ad195b7371dab691ec16b88caa5d771d72a3842510f5a63441&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO2P5SW4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDaREG%2BgLLyzO6PELjeRealT0GstOF9fbcGpea8%2BvoQ%2BwIgalzGQc5BfbSCRxCzHPM2mx8LbpgG7QJiA1c7gjMdhB0qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGb6jOUFRWEEvTk41CrcA9IN9c2PLKiQvcutO1Udqz7oVK0YSVimUEr1EWE9XSmqcLyBeG1wz3Dt8uBiE3s%2Bpik0Vq%2BOw1l0Ob1CJ79tAYCNYcZNgEwha%2F6B8KVKBnWEhHL5Xo5JS8dQYcm9tk54au0EAY5pdyXZVJJcJeD2ZhKTBdyoIt4I5rgYfg6OTr329561dYLNKftvqpwj4b5VWinDR3bl1kejGqTsJlb9TnkWRSnI39jfBqiI1b8ukuywd%2FekGO7nvgxMkFGZGR7Gvr0w2qYnDvN%2FPc1pBQWbA00bCIcjDC%2BYq1p897J8CbEeEgSuyH5kc2039YbfCprgpR8maBIRN3Ta3w3v%2BL9HX1pSOCUgmsj7mQkH5zo8GrjPmMud0qDEZ9UoKy3XN7nqTJMC5%2B%2B2Z2jz80zMSz5eSeCD%2B1AY1S%2FDMYC5%2FR0TV6YrSH3CbRQCxnWAeB7FPRhahDoJ8UxvsjHc%2BaA13woev36KNL7QViCDfClz8KcaVn1cU1Z9NtPU7LEyB2LjNbYid1eb5ax0oS8ZzIMOWVa1amvKd6X9ta%2FUpZ%2Bke%2BB35VJzCEZRjxgxWfF2ij%2BjB2jRYMlplp99zoiAeKrj1S8GC33jp%2FPWjTwJlZggxDnr9XnD6pzru1buz02XUuMZMOzL478GOqUBCpHIIo4DVdqGje7l7weXWGo3lSdvSt11QJa1vQZ3BZ2Q4jcfZVv83B1cb3HRbUhdhdpKkwJZFjYGlHLV7BlwJxCXOCvxuClWP4Z7kbdprSj3qhFZ5pOdAFt1sASc7UF%2FK9n0SKeitYQH9%2Fg9vLfwer2%2BLg7oAzRaapzCDBvKdUEOR2%2BBn3c1Nv5nrwNTfaFfh4NQN7kVsbqxDAwAc7TIeRlIyE%2F8&X-Amz-Signature=8fa3a1a3f278ebf2b989af7a2e73484fb244ab397431a02a79d5b4d7d8c65faa&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO2P5SW4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDaREG%2BgLLyzO6PELjeRealT0GstOF9fbcGpea8%2BvoQ%2BwIgalzGQc5BfbSCRxCzHPM2mx8LbpgG7QJiA1c7gjMdhB0qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGb6jOUFRWEEvTk41CrcA9IN9c2PLKiQvcutO1Udqz7oVK0YSVimUEr1EWE9XSmqcLyBeG1wz3Dt8uBiE3s%2Bpik0Vq%2BOw1l0Ob1CJ79tAYCNYcZNgEwha%2F6B8KVKBnWEhHL5Xo5JS8dQYcm9tk54au0EAY5pdyXZVJJcJeD2ZhKTBdyoIt4I5rgYfg6OTr329561dYLNKftvqpwj4b5VWinDR3bl1kejGqTsJlb9TnkWRSnI39jfBqiI1b8ukuywd%2FekGO7nvgxMkFGZGR7Gvr0w2qYnDvN%2FPc1pBQWbA00bCIcjDC%2BYq1p897J8CbEeEgSuyH5kc2039YbfCprgpR8maBIRN3Ta3w3v%2BL9HX1pSOCUgmsj7mQkH5zo8GrjPmMud0qDEZ9UoKy3XN7nqTJMC5%2B%2B2Z2jz80zMSz5eSeCD%2B1AY1S%2FDMYC5%2FR0TV6YrSH3CbRQCxnWAeB7FPRhahDoJ8UxvsjHc%2BaA13woev36KNL7QViCDfClz8KcaVn1cU1Z9NtPU7LEyB2LjNbYid1eb5ax0oS8ZzIMOWVa1amvKd6X9ta%2FUpZ%2Bke%2BB35VJzCEZRjxgxWfF2ij%2BjB2jRYMlplp99zoiAeKrj1S8GC33jp%2FPWjTwJlZggxDnr9XnD6pzru1buz02XUuMZMOzL478GOqUBCpHIIo4DVdqGje7l7weXWGo3lSdvSt11QJa1vQZ3BZ2Q4jcfZVv83B1cb3HRbUhdhdpKkwJZFjYGlHLV7BlwJxCXOCvxuClWP4Z7kbdprSj3qhFZ5pOdAFt1sASc7UF%2FK9n0SKeitYQH9%2Fg9vLfwer2%2BLg7oAzRaapzCDBvKdUEOR2%2BBn3c1Nv5nrwNTfaFfh4NQN7kVsbqxDAwAc7TIeRlIyE%2F8&X-Amz-Signature=21c397d7402c15ac6467f8a5a8412430eebc87b52ab30fa7cc31344a7a00d92b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO2P5SW4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDaREG%2BgLLyzO6PELjeRealT0GstOF9fbcGpea8%2BvoQ%2BwIgalzGQc5BfbSCRxCzHPM2mx8LbpgG7QJiA1c7gjMdhB0qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGb6jOUFRWEEvTk41CrcA9IN9c2PLKiQvcutO1Udqz7oVK0YSVimUEr1EWE9XSmqcLyBeG1wz3Dt8uBiE3s%2Bpik0Vq%2BOw1l0Ob1CJ79tAYCNYcZNgEwha%2F6B8KVKBnWEhHL5Xo5JS8dQYcm9tk54au0EAY5pdyXZVJJcJeD2ZhKTBdyoIt4I5rgYfg6OTr329561dYLNKftvqpwj4b5VWinDR3bl1kejGqTsJlb9TnkWRSnI39jfBqiI1b8ukuywd%2FekGO7nvgxMkFGZGR7Gvr0w2qYnDvN%2FPc1pBQWbA00bCIcjDC%2BYq1p897J8CbEeEgSuyH5kc2039YbfCprgpR8maBIRN3Ta3w3v%2BL9HX1pSOCUgmsj7mQkH5zo8GrjPmMud0qDEZ9UoKy3XN7nqTJMC5%2B%2B2Z2jz80zMSz5eSeCD%2B1AY1S%2FDMYC5%2FR0TV6YrSH3CbRQCxnWAeB7FPRhahDoJ8UxvsjHc%2BaA13woev36KNL7QViCDfClz8KcaVn1cU1Z9NtPU7LEyB2LjNbYid1eb5ax0oS8ZzIMOWVa1amvKd6X9ta%2FUpZ%2Bke%2BB35VJzCEZRjxgxWfF2ij%2BjB2jRYMlplp99zoiAeKrj1S8GC33jp%2FPWjTwJlZggxDnr9XnD6pzru1buz02XUuMZMOzL478GOqUBCpHIIo4DVdqGje7l7weXWGo3lSdvSt11QJa1vQZ3BZ2Q4jcfZVv83B1cb3HRbUhdhdpKkwJZFjYGlHLV7BlwJxCXOCvxuClWP4Z7kbdprSj3qhFZ5pOdAFt1sASc7UF%2FK9n0SKeitYQH9%2Fg9vLfwer2%2BLg7oAzRaapzCDBvKdUEOR2%2BBn3c1Nv5nrwNTfaFfh4NQN7kVsbqxDAwAc7TIeRlIyE%2F8&X-Amz-Signature=93805e5267807fb973e6a5a510a319bcfdae781171f6329d6fe8890438487c9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO2P5SW4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDaREG%2BgLLyzO6PELjeRealT0GstOF9fbcGpea8%2BvoQ%2BwIgalzGQc5BfbSCRxCzHPM2mx8LbpgG7QJiA1c7gjMdhB0qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGb6jOUFRWEEvTk41CrcA9IN9c2PLKiQvcutO1Udqz7oVK0YSVimUEr1EWE9XSmqcLyBeG1wz3Dt8uBiE3s%2Bpik0Vq%2BOw1l0Ob1CJ79tAYCNYcZNgEwha%2F6B8KVKBnWEhHL5Xo5JS8dQYcm9tk54au0EAY5pdyXZVJJcJeD2ZhKTBdyoIt4I5rgYfg6OTr329561dYLNKftvqpwj4b5VWinDR3bl1kejGqTsJlb9TnkWRSnI39jfBqiI1b8ukuywd%2FekGO7nvgxMkFGZGR7Gvr0w2qYnDvN%2FPc1pBQWbA00bCIcjDC%2BYq1p897J8CbEeEgSuyH5kc2039YbfCprgpR8maBIRN3Ta3w3v%2BL9HX1pSOCUgmsj7mQkH5zo8GrjPmMud0qDEZ9UoKy3XN7nqTJMC5%2B%2B2Z2jz80zMSz5eSeCD%2B1AY1S%2FDMYC5%2FR0TV6YrSH3CbRQCxnWAeB7FPRhahDoJ8UxvsjHc%2BaA13woev36KNL7QViCDfClz8KcaVn1cU1Z9NtPU7LEyB2LjNbYid1eb5ax0oS8ZzIMOWVa1amvKd6X9ta%2FUpZ%2Bke%2BB35VJzCEZRjxgxWfF2ij%2BjB2jRYMlplp99zoiAeKrj1S8GC33jp%2FPWjTwJlZggxDnr9XnD6pzru1buz02XUuMZMOzL478GOqUBCpHIIo4DVdqGje7l7weXWGo3lSdvSt11QJa1vQZ3BZ2Q4jcfZVv83B1cb3HRbUhdhdpKkwJZFjYGlHLV7BlwJxCXOCvxuClWP4Z7kbdprSj3qhFZ5pOdAFt1sASc7UF%2FK9n0SKeitYQH9%2Fg9vLfwer2%2BLg7oAzRaapzCDBvKdUEOR2%2BBn3c1Nv5nrwNTfaFfh4NQN7kVsbqxDAwAc7TIeRlIyE%2F8&X-Amz-Signature=7f7bc36c1826427869734abb25824fb4e6da24bf18ef942177fb64c949375f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO2P5SW4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDaREG%2BgLLyzO6PELjeRealT0GstOF9fbcGpea8%2BvoQ%2BwIgalzGQc5BfbSCRxCzHPM2mx8LbpgG7QJiA1c7gjMdhB0qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGb6jOUFRWEEvTk41CrcA9IN9c2PLKiQvcutO1Udqz7oVK0YSVimUEr1EWE9XSmqcLyBeG1wz3Dt8uBiE3s%2Bpik0Vq%2BOw1l0Ob1CJ79tAYCNYcZNgEwha%2F6B8KVKBnWEhHL5Xo5JS8dQYcm9tk54au0EAY5pdyXZVJJcJeD2ZhKTBdyoIt4I5rgYfg6OTr329561dYLNKftvqpwj4b5VWinDR3bl1kejGqTsJlb9TnkWRSnI39jfBqiI1b8ukuywd%2FekGO7nvgxMkFGZGR7Gvr0w2qYnDvN%2FPc1pBQWbA00bCIcjDC%2BYq1p897J8CbEeEgSuyH5kc2039YbfCprgpR8maBIRN3Ta3w3v%2BL9HX1pSOCUgmsj7mQkH5zo8GrjPmMud0qDEZ9UoKy3XN7nqTJMC5%2B%2B2Z2jz80zMSz5eSeCD%2B1AY1S%2FDMYC5%2FR0TV6YrSH3CbRQCxnWAeB7FPRhahDoJ8UxvsjHc%2BaA13woev36KNL7QViCDfClz8KcaVn1cU1Z9NtPU7LEyB2LjNbYid1eb5ax0oS8ZzIMOWVa1amvKd6X9ta%2FUpZ%2Bke%2BB35VJzCEZRjxgxWfF2ij%2BjB2jRYMlplp99zoiAeKrj1S8GC33jp%2FPWjTwJlZggxDnr9XnD6pzru1buz02XUuMZMOzL478GOqUBCpHIIo4DVdqGje7l7weXWGo3lSdvSt11QJa1vQZ3BZ2Q4jcfZVv83B1cb3HRbUhdhdpKkwJZFjYGlHLV7BlwJxCXOCvxuClWP4Z7kbdprSj3qhFZ5pOdAFt1sASc7UF%2FK9n0SKeitYQH9%2Fg9vLfwer2%2BLg7oAzRaapzCDBvKdUEOR2%2BBn3c1Nv5nrwNTfaFfh4NQN7kVsbqxDAwAc7TIeRlIyE%2F8&X-Amz-Signature=926f56a35049f096e3d1d52e83a7151166c9f3770f9485c26d982d820ba1710c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO2P5SW4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDaREG%2BgLLyzO6PELjeRealT0GstOF9fbcGpea8%2BvoQ%2BwIgalzGQc5BfbSCRxCzHPM2mx8LbpgG7QJiA1c7gjMdhB0qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGb6jOUFRWEEvTk41CrcA9IN9c2PLKiQvcutO1Udqz7oVK0YSVimUEr1EWE9XSmqcLyBeG1wz3Dt8uBiE3s%2Bpik0Vq%2BOw1l0Ob1CJ79tAYCNYcZNgEwha%2F6B8KVKBnWEhHL5Xo5JS8dQYcm9tk54au0EAY5pdyXZVJJcJeD2ZhKTBdyoIt4I5rgYfg6OTr329561dYLNKftvqpwj4b5VWinDR3bl1kejGqTsJlb9TnkWRSnI39jfBqiI1b8ukuywd%2FekGO7nvgxMkFGZGR7Gvr0w2qYnDvN%2FPc1pBQWbA00bCIcjDC%2BYq1p897J8CbEeEgSuyH5kc2039YbfCprgpR8maBIRN3Ta3w3v%2BL9HX1pSOCUgmsj7mQkH5zo8GrjPmMud0qDEZ9UoKy3XN7nqTJMC5%2B%2B2Z2jz80zMSz5eSeCD%2B1AY1S%2FDMYC5%2FR0TV6YrSH3CbRQCxnWAeB7FPRhahDoJ8UxvsjHc%2BaA13woev36KNL7QViCDfClz8KcaVn1cU1Z9NtPU7LEyB2LjNbYid1eb5ax0oS8ZzIMOWVa1amvKd6X9ta%2FUpZ%2Bke%2BB35VJzCEZRjxgxWfF2ij%2BjB2jRYMlplp99zoiAeKrj1S8GC33jp%2FPWjTwJlZggxDnr9XnD6pzru1buz02XUuMZMOzL478GOqUBCpHIIo4DVdqGje7l7weXWGo3lSdvSt11QJa1vQZ3BZ2Q4jcfZVv83B1cb3HRbUhdhdpKkwJZFjYGlHLV7BlwJxCXOCvxuClWP4Z7kbdprSj3qhFZ5pOdAFt1sASc7UF%2FK9n0SKeitYQH9%2Fg9vLfwer2%2BLg7oAzRaapzCDBvKdUEOR2%2BBn3c1Nv5nrwNTfaFfh4NQN7kVsbqxDAwAc7TIeRlIyE%2F8&X-Amz-Signature=abe5a8a72cc6485a8c0c22d2bdf8428deb80a311e69b63566beff62563119311&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
