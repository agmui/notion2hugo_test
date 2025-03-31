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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ2JOLPO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDl2YBCDk7ySPbnnPgUCfoR5IQ%2F%2FkE3Cx7PEO6pFpXkSgIgKo4w8bRMBMVmAO1K7omR0ELQqmtYJJgLtra4JDWJdKAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOnc5La5ul0LoBKVyrcA%2BfI1SGIDwOzi8ZT1wN9%2FVuN6%2BO1CPJ0DylFOfZwPVJswlwrG8WYD1Gs%2FZ4rD6Nik4H0m%2Fp2pFT9CpIok8b5C7Sbt8OT0wK%2FoBOxl6tlKSk37KWSWXudgNemOOJDpVMlL4LhPilQhGouB0HhKGzMvuxxc30BYmYIgUdPM1Rgx5FGitCvrpfG2%2BCrnLCyvYnNUQ5WSeBA6nO8fsO0NTafoIjlM7RIRQZ4cBtVJF%2Fd4GyDFXfr5zLnH9nVbikjrGkryAUKQamg0BATJyonND0AsRTRY3NwGdQVFiPf8JEXw%2B2jc0gEJC%2Bb%2FpkNyyHdJu328ZXiob951X%2FQ6oW39Rlkf6zi8fsYN6WJpRS6dJ9H0Uxwl4wUbJuuMi69S5MIQ%2FjDS8ESU8Y30lJ%2BlOy79XVOL786l7sGCi8a3lOepZWHiNxUTztW%2B6mPhwuDT5gx8ijjclgjRCPzhaek7bk8ARb367LWOENKDyVrxSJP82abJYXWv5V%2Bde1FDxNc3n6FhubC%2BWtD5anghU54z4RkZ0oZaTVHiSozzdAfimL2t5GhbC1WhVBMlR%2BK3xeovoqyMOwjzDKD7ARj2wPQTmELAWD2VBg0XVI2MjL2d2yh1UR%2FaRwy9bqsyNcAt4wXNoAiMNfNqr8GOqUBYshj67lhFMH6LC%2BKeJ6TPZi4gn7EEDBE66uCTBbCm1jOHeKpMxsQdzzGzBTxpsyYG6xFnGPYVvGpoK9ytsgSOXGWT2Y488ZcYkwhNLNx7yXTDteTdQmdjXxeu%2FAnJ13Vs6SKY82Dyoa29Auz5XdbAPbh%2FrFdEGwHP%2BPnKs51dr6Fb%2B4BXGOckrCe%2BR7EQ6WpbuRBXI5Wwr3oW4owzuXYj9kX3A88&X-Amz-Signature=30f4264bc9d846800877ce86f9190cf143bb68030d5779dccb0bf3f67edec527&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ2JOLPO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDl2YBCDk7ySPbnnPgUCfoR5IQ%2F%2FkE3Cx7PEO6pFpXkSgIgKo4w8bRMBMVmAO1K7omR0ELQqmtYJJgLtra4JDWJdKAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOnc5La5ul0LoBKVyrcA%2BfI1SGIDwOzi8ZT1wN9%2FVuN6%2BO1CPJ0DylFOfZwPVJswlwrG8WYD1Gs%2FZ4rD6Nik4H0m%2Fp2pFT9CpIok8b5C7Sbt8OT0wK%2FoBOxl6tlKSk37KWSWXudgNemOOJDpVMlL4LhPilQhGouB0HhKGzMvuxxc30BYmYIgUdPM1Rgx5FGitCvrpfG2%2BCrnLCyvYnNUQ5WSeBA6nO8fsO0NTafoIjlM7RIRQZ4cBtVJF%2Fd4GyDFXfr5zLnH9nVbikjrGkryAUKQamg0BATJyonND0AsRTRY3NwGdQVFiPf8JEXw%2B2jc0gEJC%2Bb%2FpkNyyHdJu328ZXiob951X%2FQ6oW39Rlkf6zi8fsYN6WJpRS6dJ9H0Uxwl4wUbJuuMi69S5MIQ%2FjDS8ESU8Y30lJ%2BlOy79XVOL786l7sGCi8a3lOepZWHiNxUTztW%2B6mPhwuDT5gx8ijjclgjRCPzhaek7bk8ARb367LWOENKDyVrxSJP82abJYXWv5V%2Bde1FDxNc3n6FhubC%2BWtD5anghU54z4RkZ0oZaTVHiSozzdAfimL2t5GhbC1WhVBMlR%2BK3xeovoqyMOwjzDKD7ARj2wPQTmELAWD2VBg0XVI2MjL2d2yh1UR%2FaRwy9bqsyNcAt4wXNoAiMNfNqr8GOqUBYshj67lhFMH6LC%2BKeJ6TPZi4gn7EEDBE66uCTBbCm1jOHeKpMxsQdzzGzBTxpsyYG6xFnGPYVvGpoK9ytsgSOXGWT2Y488ZcYkwhNLNx7yXTDteTdQmdjXxeu%2FAnJ13Vs6SKY82Dyoa29Auz5XdbAPbh%2FrFdEGwHP%2BPnKs51dr6Fb%2B4BXGOckrCe%2BR7EQ6WpbuRBXI5Wwr3oW4owzuXYj9kX3A88&X-Amz-Signature=fb68658b148f617821026f3bb46812b8fa66181de1f2a77ec02edd2bbaf77a41&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ2JOLPO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDl2YBCDk7ySPbnnPgUCfoR5IQ%2F%2FkE3Cx7PEO6pFpXkSgIgKo4w8bRMBMVmAO1K7omR0ELQqmtYJJgLtra4JDWJdKAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOnc5La5ul0LoBKVyrcA%2BfI1SGIDwOzi8ZT1wN9%2FVuN6%2BO1CPJ0DylFOfZwPVJswlwrG8WYD1Gs%2FZ4rD6Nik4H0m%2Fp2pFT9CpIok8b5C7Sbt8OT0wK%2FoBOxl6tlKSk37KWSWXudgNemOOJDpVMlL4LhPilQhGouB0HhKGzMvuxxc30BYmYIgUdPM1Rgx5FGitCvrpfG2%2BCrnLCyvYnNUQ5WSeBA6nO8fsO0NTafoIjlM7RIRQZ4cBtVJF%2Fd4GyDFXfr5zLnH9nVbikjrGkryAUKQamg0BATJyonND0AsRTRY3NwGdQVFiPf8JEXw%2B2jc0gEJC%2Bb%2FpkNyyHdJu328ZXiob951X%2FQ6oW39Rlkf6zi8fsYN6WJpRS6dJ9H0Uxwl4wUbJuuMi69S5MIQ%2FjDS8ESU8Y30lJ%2BlOy79XVOL786l7sGCi8a3lOepZWHiNxUTztW%2B6mPhwuDT5gx8ijjclgjRCPzhaek7bk8ARb367LWOENKDyVrxSJP82abJYXWv5V%2Bde1FDxNc3n6FhubC%2BWtD5anghU54z4RkZ0oZaTVHiSozzdAfimL2t5GhbC1WhVBMlR%2BK3xeovoqyMOwjzDKD7ARj2wPQTmELAWD2VBg0XVI2MjL2d2yh1UR%2FaRwy9bqsyNcAt4wXNoAiMNfNqr8GOqUBYshj67lhFMH6LC%2BKeJ6TPZi4gn7EEDBE66uCTBbCm1jOHeKpMxsQdzzGzBTxpsyYG6xFnGPYVvGpoK9ytsgSOXGWT2Y488ZcYkwhNLNx7yXTDteTdQmdjXxeu%2FAnJ13Vs6SKY82Dyoa29Auz5XdbAPbh%2FrFdEGwHP%2BPnKs51dr6Fb%2B4BXGOckrCe%2BR7EQ6WpbuRBXI5Wwr3oW4owzuXYj9kX3A88&X-Amz-Signature=e289e5c8b23fe8e4ca87905fb4961dd34d6ab127392d933af2fbdb705f9778d0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ2JOLPO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDl2YBCDk7ySPbnnPgUCfoR5IQ%2F%2FkE3Cx7PEO6pFpXkSgIgKo4w8bRMBMVmAO1K7omR0ELQqmtYJJgLtra4JDWJdKAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOnc5La5ul0LoBKVyrcA%2BfI1SGIDwOzi8ZT1wN9%2FVuN6%2BO1CPJ0DylFOfZwPVJswlwrG8WYD1Gs%2FZ4rD6Nik4H0m%2Fp2pFT9CpIok8b5C7Sbt8OT0wK%2FoBOxl6tlKSk37KWSWXudgNemOOJDpVMlL4LhPilQhGouB0HhKGzMvuxxc30BYmYIgUdPM1Rgx5FGitCvrpfG2%2BCrnLCyvYnNUQ5WSeBA6nO8fsO0NTafoIjlM7RIRQZ4cBtVJF%2Fd4GyDFXfr5zLnH9nVbikjrGkryAUKQamg0BATJyonND0AsRTRY3NwGdQVFiPf8JEXw%2B2jc0gEJC%2Bb%2FpkNyyHdJu328ZXiob951X%2FQ6oW39Rlkf6zi8fsYN6WJpRS6dJ9H0Uxwl4wUbJuuMi69S5MIQ%2FjDS8ESU8Y30lJ%2BlOy79XVOL786l7sGCi8a3lOepZWHiNxUTztW%2B6mPhwuDT5gx8ijjclgjRCPzhaek7bk8ARb367LWOENKDyVrxSJP82abJYXWv5V%2Bde1FDxNc3n6FhubC%2BWtD5anghU54z4RkZ0oZaTVHiSozzdAfimL2t5GhbC1WhVBMlR%2BK3xeovoqyMOwjzDKD7ARj2wPQTmELAWD2VBg0XVI2MjL2d2yh1UR%2FaRwy9bqsyNcAt4wXNoAiMNfNqr8GOqUBYshj67lhFMH6LC%2BKeJ6TPZi4gn7EEDBE66uCTBbCm1jOHeKpMxsQdzzGzBTxpsyYG6xFnGPYVvGpoK9ytsgSOXGWT2Y488ZcYkwhNLNx7yXTDteTdQmdjXxeu%2FAnJ13Vs6SKY82Dyoa29Auz5XdbAPbh%2FrFdEGwHP%2BPnKs51dr6Fb%2B4BXGOckrCe%2BR7EQ6WpbuRBXI5Wwr3oW4owzuXYj9kX3A88&X-Amz-Signature=485185f098802b6b64dbf422583ba8de2734fe622950c19a5459862ad501f154&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ2JOLPO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDl2YBCDk7ySPbnnPgUCfoR5IQ%2F%2FkE3Cx7PEO6pFpXkSgIgKo4w8bRMBMVmAO1K7omR0ELQqmtYJJgLtra4JDWJdKAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOnc5La5ul0LoBKVyrcA%2BfI1SGIDwOzi8ZT1wN9%2FVuN6%2BO1CPJ0DylFOfZwPVJswlwrG8WYD1Gs%2FZ4rD6Nik4H0m%2Fp2pFT9CpIok8b5C7Sbt8OT0wK%2FoBOxl6tlKSk37KWSWXudgNemOOJDpVMlL4LhPilQhGouB0HhKGzMvuxxc30BYmYIgUdPM1Rgx5FGitCvrpfG2%2BCrnLCyvYnNUQ5WSeBA6nO8fsO0NTafoIjlM7RIRQZ4cBtVJF%2Fd4GyDFXfr5zLnH9nVbikjrGkryAUKQamg0BATJyonND0AsRTRY3NwGdQVFiPf8JEXw%2B2jc0gEJC%2Bb%2FpkNyyHdJu328ZXiob951X%2FQ6oW39Rlkf6zi8fsYN6WJpRS6dJ9H0Uxwl4wUbJuuMi69S5MIQ%2FjDS8ESU8Y30lJ%2BlOy79XVOL786l7sGCi8a3lOepZWHiNxUTztW%2B6mPhwuDT5gx8ijjclgjRCPzhaek7bk8ARb367LWOENKDyVrxSJP82abJYXWv5V%2Bde1FDxNc3n6FhubC%2BWtD5anghU54z4RkZ0oZaTVHiSozzdAfimL2t5GhbC1WhVBMlR%2BK3xeovoqyMOwjzDKD7ARj2wPQTmELAWD2VBg0XVI2MjL2d2yh1UR%2FaRwy9bqsyNcAt4wXNoAiMNfNqr8GOqUBYshj67lhFMH6LC%2BKeJ6TPZi4gn7EEDBE66uCTBbCm1jOHeKpMxsQdzzGzBTxpsyYG6xFnGPYVvGpoK9ytsgSOXGWT2Y488ZcYkwhNLNx7yXTDteTdQmdjXxeu%2FAnJ13Vs6SKY82Dyoa29Auz5XdbAPbh%2FrFdEGwHP%2BPnKs51dr6Fb%2B4BXGOckrCe%2BR7EQ6WpbuRBXI5Wwr3oW4owzuXYj9kX3A88&X-Amz-Signature=0364aebb7114f2498b9f7dc6a0a29e1eb7ed2c69e2f966d02760a40a2e4bfe8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ2JOLPO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDl2YBCDk7ySPbnnPgUCfoR5IQ%2F%2FkE3Cx7PEO6pFpXkSgIgKo4w8bRMBMVmAO1K7omR0ELQqmtYJJgLtra4JDWJdKAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOnc5La5ul0LoBKVyrcA%2BfI1SGIDwOzi8ZT1wN9%2FVuN6%2BO1CPJ0DylFOfZwPVJswlwrG8WYD1Gs%2FZ4rD6Nik4H0m%2Fp2pFT9CpIok8b5C7Sbt8OT0wK%2FoBOxl6tlKSk37KWSWXudgNemOOJDpVMlL4LhPilQhGouB0HhKGzMvuxxc30BYmYIgUdPM1Rgx5FGitCvrpfG2%2BCrnLCyvYnNUQ5WSeBA6nO8fsO0NTafoIjlM7RIRQZ4cBtVJF%2Fd4GyDFXfr5zLnH9nVbikjrGkryAUKQamg0BATJyonND0AsRTRY3NwGdQVFiPf8JEXw%2B2jc0gEJC%2Bb%2FpkNyyHdJu328ZXiob951X%2FQ6oW39Rlkf6zi8fsYN6WJpRS6dJ9H0Uxwl4wUbJuuMi69S5MIQ%2FjDS8ESU8Y30lJ%2BlOy79XVOL786l7sGCi8a3lOepZWHiNxUTztW%2B6mPhwuDT5gx8ijjclgjRCPzhaek7bk8ARb367LWOENKDyVrxSJP82abJYXWv5V%2Bde1FDxNc3n6FhubC%2BWtD5anghU54z4RkZ0oZaTVHiSozzdAfimL2t5GhbC1WhVBMlR%2BK3xeovoqyMOwjzDKD7ARj2wPQTmELAWD2VBg0XVI2MjL2d2yh1UR%2FaRwy9bqsyNcAt4wXNoAiMNfNqr8GOqUBYshj67lhFMH6LC%2BKeJ6TPZi4gn7EEDBE66uCTBbCm1jOHeKpMxsQdzzGzBTxpsyYG6xFnGPYVvGpoK9ytsgSOXGWT2Y488ZcYkwhNLNx7yXTDteTdQmdjXxeu%2FAnJ13Vs6SKY82Dyoa29Auz5XdbAPbh%2FrFdEGwHP%2BPnKs51dr6Fb%2B4BXGOckrCe%2BR7EQ6WpbuRBXI5Wwr3oW4owzuXYj9kX3A88&X-Amz-Signature=ba225f2e2b1214bf98f865d175e5f8e6e0e0346ff42ce1168ddf82deddb5db29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ2JOLPO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDl2YBCDk7ySPbnnPgUCfoR5IQ%2F%2FkE3Cx7PEO6pFpXkSgIgKo4w8bRMBMVmAO1K7omR0ELQqmtYJJgLtra4JDWJdKAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOnc5La5ul0LoBKVyrcA%2BfI1SGIDwOzi8ZT1wN9%2FVuN6%2BO1CPJ0DylFOfZwPVJswlwrG8WYD1Gs%2FZ4rD6Nik4H0m%2Fp2pFT9CpIok8b5C7Sbt8OT0wK%2FoBOxl6tlKSk37KWSWXudgNemOOJDpVMlL4LhPilQhGouB0HhKGzMvuxxc30BYmYIgUdPM1Rgx5FGitCvrpfG2%2BCrnLCyvYnNUQ5WSeBA6nO8fsO0NTafoIjlM7RIRQZ4cBtVJF%2Fd4GyDFXfr5zLnH9nVbikjrGkryAUKQamg0BATJyonND0AsRTRY3NwGdQVFiPf8JEXw%2B2jc0gEJC%2Bb%2FpkNyyHdJu328ZXiob951X%2FQ6oW39Rlkf6zi8fsYN6WJpRS6dJ9H0Uxwl4wUbJuuMi69S5MIQ%2FjDS8ESU8Y30lJ%2BlOy79XVOL786l7sGCi8a3lOepZWHiNxUTztW%2B6mPhwuDT5gx8ijjclgjRCPzhaek7bk8ARb367LWOENKDyVrxSJP82abJYXWv5V%2Bde1FDxNc3n6FhubC%2BWtD5anghU54z4RkZ0oZaTVHiSozzdAfimL2t5GhbC1WhVBMlR%2BK3xeovoqyMOwjzDKD7ARj2wPQTmELAWD2VBg0XVI2MjL2d2yh1UR%2FaRwy9bqsyNcAt4wXNoAiMNfNqr8GOqUBYshj67lhFMH6LC%2BKeJ6TPZi4gn7EEDBE66uCTBbCm1jOHeKpMxsQdzzGzBTxpsyYG6xFnGPYVvGpoK9ytsgSOXGWT2Y488ZcYkwhNLNx7yXTDteTdQmdjXxeu%2FAnJ13Vs6SKY82Dyoa29Auz5XdbAPbh%2FrFdEGwHP%2BPnKs51dr6Fb%2B4BXGOckrCe%2BR7EQ6WpbuRBXI5Wwr3oW4owzuXYj9kX3A88&X-Amz-Signature=242efe7374d8c14247faf85f954e28a14678b91f0a25edb127cea615720781bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ2JOLPO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDl2YBCDk7ySPbnnPgUCfoR5IQ%2F%2FkE3Cx7PEO6pFpXkSgIgKo4w8bRMBMVmAO1K7omR0ELQqmtYJJgLtra4JDWJdKAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOnc5La5ul0LoBKVyrcA%2BfI1SGIDwOzi8ZT1wN9%2FVuN6%2BO1CPJ0DylFOfZwPVJswlwrG8WYD1Gs%2FZ4rD6Nik4H0m%2Fp2pFT9CpIok8b5C7Sbt8OT0wK%2FoBOxl6tlKSk37KWSWXudgNemOOJDpVMlL4LhPilQhGouB0HhKGzMvuxxc30BYmYIgUdPM1Rgx5FGitCvrpfG2%2BCrnLCyvYnNUQ5WSeBA6nO8fsO0NTafoIjlM7RIRQZ4cBtVJF%2Fd4GyDFXfr5zLnH9nVbikjrGkryAUKQamg0BATJyonND0AsRTRY3NwGdQVFiPf8JEXw%2B2jc0gEJC%2Bb%2FpkNyyHdJu328ZXiob951X%2FQ6oW39Rlkf6zi8fsYN6WJpRS6dJ9H0Uxwl4wUbJuuMi69S5MIQ%2FjDS8ESU8Y30lJ%2BlOy79XVOL786l7sGCi8a3lOepZWHiNxUTztW%2B6mPhwuDT5gx8ijjclgjRCPzhaek7bk8ARb367LWOENKDyVrxSJP82abJYXWv5V%2Bde1FDxNc3n6FhubC%2BWtD5anghU54z4RkZ0oZaTVHiSozzdAfimL2t5GhbC1WhVBMlR%2BK3xeovoqyMOwjzDKD7ARj2wPQTmELAWD2VBg0XVI2MjL2d2yh1UR%2FaRwy9bqsyNcAt4wXNoAiMNfNqr8GOqUBYshj67lhFMH6LC%2BKeJ6TPZi4gn7EEDBE66uCTBbCm1jOHeKpMxsQdzzGzBTxpsyYG6xFnGPYVvGpoK9ytsgSOXGWT2Y488ZcYkwhNLNx7yXTDteTdQmdjXxeu%2FAnJ13Vs6SKY82Dyoa29Auz5XdbAPbh%2FrFdEGwHP%2BPnKs51dr6Fb%2B4BXGOckrCe%2BR7EQ6WpbuRBXI5Wwr3oW4owzuXYj9kX3A88&X-Amz-Signature=9723337e280554e00202d5817db398fe3f88ae7e519f00b43f2d531f001475c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
