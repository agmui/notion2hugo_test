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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY7LHC6W%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC4Mgj7eMDvVwxED7fCsNoiuX2jBbHNF8vXl7X4a6VnYwIhAMTI0fCrxqPkaSbax93xM4FlpX7M%2Bix6w7BQv12fe7%2F0Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwLtintUIMGlqRVI94q3APYT1NRdlq0ksQz446TGeHQbFlVMaOoOa%2FmIph2zTMbmVB0tJfNj%2B4jz5zFI1b13dncbmSU%2FITug6unA%2Bk73Xolu4bHDUgSN%2FEM%2Bq%2Bpl3ZPC3%2FpHza7c6idnT2SbeU4X%2B61k0MpjTnwyi9%2BSkKUfc5FKvP5aOrK4sM%2FaAIVZWZMPlbRzzR34PK%2FLiFe7SY5DQyDwIrVnT4qFjDqNQZNWJmSc72vFi0GcHYqDATWLYaqROo3ZkeM8o9z%2FCgzQd0fG56EvmHq24lSACMmeR3lkACxA6NyH7%2B968kYIVJC%2BBwqzrYef8Lo%2FJySSsLp6jsr%2Bp9Ld4A8zL3edCNhXSFP2wtTTp90tW%2BMmQtH2bP3KceKZOa8%2FxkWq67pXVSLiIdt6Qdk3rOK15UQQvW24c0UhtdyCO5b5EnRL%2FEHYl0FjFiTq%2F3zrzBoTkvcZ3wA8zIl2HrZP2iwg3hr1EsfnGmPj6nGhuxu7ZXrdB1mHw04%2F%2FUIQJnHghvbq9ibbtL93fvYxgZ%2BpHEbV%2FbflE0czo%2FdIActzc6ZGo8i%2BxzrYwHAMi6sSVqKCr9E72M950UPN6PkAaqkh2acZPzcdPtFboFgx6TutLB2nf6fIgc3lpoDICEA41uuNVfY808JDonNXTC6qvLCBjqkASgkaPj675BCc5%2Be3tX8LGXhj13FWILqXW38mL0J1ZJ72m6rzwMrQpPqVI0NEhV16wXBJ6rB89rEtlGa3LvfReXaVyo0buaknanXIbG8Nlt%2BAG%2B5IAUd%2BkbyMsCgj6gWXKSlpJaLPe9I98q2NOcxybh9DUh%2FpdRoXKu5LpED2xDgpXieqSfCWxQkpDMf4%2Bc2e0A7Fgo48iQTQFxJDIikElc10vld&X-Amz-Signature=ff0451b6f8f8e1be4ab6d7cba87dc51e929f4689aade705cd0e78a7d68ee78e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY7LHC6W%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC4Mgj7eMDvVwxED7fCsNoiuX2jBbHNF8vXl7X4a6VnYwIhAMTI0fCrxqPkaSbax93xM4FlpX7M%2Bix6w7BQv12fe7%2F0Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwLtintUIMGlqRVI94q3APYT1NRdlq0ksQz446TGeHQbFlVMaOoOa%2FmIph2zTMbmVB0tJfNj%2B4jz5zFI1b13dncbmSU%2FITug6unA%2Bk73Xolu4bHDUgSN%2FEM%2Bq%2Bpl3ZPC3%2FpHza7c6idnT2SbeU4X%2B61k0MpjTnwyi9%2BSkKUfc5FKvP5aOrK4sM%2FaAIVZWZMPlbRzzR34PK%2FLiFe7SY5DQyDwIrVnT4qFjDqNQZNWJmSc72vFi0GcHYqDATWLYaqROo3ZkeM8o9z%2FCgzQd0fG56EvmHq24lSACMmeR3lkACxA6NyH7%2B968kYIVJC%2BBwqzrYef8Lo%2FJySSsLp6jsr%2Bp9Ld4A8zL3edCNhXSFP2wtTTp90tW%2BMmQtH2bP3KceKZOa8%2FxkWq67pXVSLiIdt6Qdk3rOK15UQQvW24c0UhtdyCO5b5EnRL%2FEHYl0FjFiTq%2F3zrzBoTkvcZ3wA8zIl2HrZP2iwg3hr1EsfnGmPj6nGhuxu7ZXrdB1mHw04%2F%2FUIQJnHghvbq9ibbtL93fvYxgZ%2BpHEbV%2FbflE0czo%2FdIActzc6ZGo8i%2BxzrYwHAMi6sSVqKCr9E72M950UPN6PkAaqkh2acZPzcdPtFboFgx6TutLB2nf6fIgc3lpoDICEA41uuNVfY808JDonNXTC6qvLCBjqkASgkaPj675BCc5%2Be3tX8LGXhj13FWILqXW38mL0J1ZJ72m6rzwMrQpPqVI0NEhV16wXBJ6rB89rEtlGa3LvfReXaVyo0buaknanXIbG8Nlt%2BAG%2B5IAUd%2BkbyMsCgj6gWXKSlpJaLPe9I98q2NOcxybh9DUh%2FpdRoXKu5LpED2xDgpXieqSfCWxQkpDMf4%2Bc2e0A7Fgo48iQTQFxJDIikElc10vld&X-Amz-Signature=7098d68c6c404d4ff8412a4f6b7794f832d6b435e4c3f34a78d3ef0ea027c420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY7LHC6W%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC4Mgj7eMDvVwxED7fCsNoiuX2jBbHNF8vXl7X4a6VnYwIhAMTI0fCrxqPkaSbax93xM4FlpX7M%2Bix6w7BQv12fe7%2F0Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwLtintUIMGlqRVI94q3APYT1NRdlq0ksQz446TGeHQbFlVMaOoOa%2FmIph2zTMbmVB0tJfNj%2B4jz5zFI1b13dncbmSU%2FITug6unA%2Bk73Xolu4bHDUgSN%2FEM%2Bq%2Bpl3ZPC3%2FpHza7c6idnT2SbeU4X%2B61k0MpjTnwyi9%2BSkKUfc5FKvP5aOrK4sM%2FaAIVZWZMPlbRzzR34PK%2FLiFe7SY5DQyDwIrVnT4qFjDqNQZNWJmSc72vFi0GcHYqDATWLYaqROo3ZkeM8o9z%2FCgzQd0fG56EvmHq24lSACMmeR3lkACxA6NyH7%2B968kYIVJC%2BBwqzrYef8Lo%2FJySSsLp6jsr%2Bp9Ld4A8zL3edCNhXSFP2wtTTp90tW%2BMmQtH2bP3KceKZOa8%2FxkWq67pXVSLiIdt6Qdk3rOK15UQQvW24c0UhtdyCO5b5EnRL%2FEHYl0FjFiTq%2F3zrzBoTkvcZ3wA8zIl2HrZP2iwg3hr1EsfnGmPj6nGhuxu7ZXrdB1mHw04%2F%2FUIQJnHghvbq9ibbtL93fvYxgZ%2BpHEbV%2FbflE0czo%2FdIActzc6ZGo8i%2BxzrYwHAMi6sSVqKCr9E72M950UPN6PkAaqkh2acZPzcdPtFboFgx6TutLB2nf6fIgc3lpoDICEA41uuNVfY808JDonNXTC6qvLCBjqkASgkaPj675BCc5%2Be3tX8LGXhj13FWILqXW38mL0J1ZJ72m6rzwMrQpPqVI0NEhV16wXBJ6rB89rEtlGa3LvfReXaVyo0buaknanXIbG8Nlt%2BAG%2B5IAUd%2BkbyMsCgj6gWXKSlpJaLPe9I98q2NOcxybh9DUh%2FpdRoXKu5LpED2xDgpXieqSfCWxQkpDMf4%2Bc2e0A7Fgo48iQTQFxJDIikElc10vld&X-Amz-Signature=2535830f8286d20691e7788a2d3b289e6d6c7918e5f99ae9097d8b17bef9c297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY7LHC6W%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC4Mgj7eMDvVwxED7fCsNoiuX2jBbHNF8vXl7X4a6VnYwIhAMTI0fCrxqPkaSbax93xM4FlpX7M%2Bix6w7BQv12fe7%2F0Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwLtintUIMGlqRVI94q3APYT1NRdlq0ksQz446TGeHQbFlVMaOoOa%2FmIph2zTMbmVB0tJfNj%2B4jz5zFI1b13dncbmSU%2FITug6unA%2Bk73Xolu4bHDUgSN%2FEM%2Bq%2Bpl3ZPC3%2FpHza7c6idnT2SbeU4X%2B61k0MpjTnwyi9%2BSkKUfc5FKvP5aOrK4sM%2FaAIVZWZMPlbRzzR34PK%2FLiFe7SY5DQyDwIrVnT4qFjDqNQZNWJmSc72vFi0GcHYqDATWLYaqROo3ZkeM8o9z%2FCgzQd0fG56EvmHq24lSACMmeR3lkACxA6NyH7%2B968kYIVJC%2BBwqzrYef8Lo%2FJySSsLp6jsr%2Bp9Ld4A8zL3edCNhXSFP2wtTTp90tW%2BMmQtH2bP3KceKZOa8%2FxkWq67pXVSLiIdt6Qdk3rOK15UQQvW24c0UhtdyCO5b5EnRL%2FEHYl0FjFiTq%2F3zrzBoTkvcZ3wA8zIl2HrZP2iwg3hr1EsfnGmPj6nGhuxu7ZXrdB1mHw04%2F%2FUIQJnHghvbq9ibbtL93fvYxgZ%2BpHEbV%2FbflE0czo%2FdIActzc6ZGo8i%2BxzrYwHAMi6sSVqKCr9E72M950UPN6PkAaqkh2acZPzcdPtFboFgx6TutLB2nf6fIgc3lpoDICEA41uuNVfY808JDonNXTC6qvLCBjqkASgkaPj675BCc5%2Be3tX8LGXhj13FWILqXW38mL0J1ZJ72m6rzwMrQpPqVI0NEhV16wXBJ6rB89rEtlGa3LvfReXaVyo0buaknanXIbG8Nlt%2BAG%2B5IAUd%2BkbyMsCgj6gWXKSlpJaLPe9I98q2NOcxybh9DUh%2FpdRoXKu5LpED2xDgpXieqSfCWxQkpDMf4%2Bc2e0A7Fgo48iQTQFxJDIikElc10vld&X-Amz-Signature=0f9a4d0a536283500310df14c14717260cb241420f322743594ac8a49279e94e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY7LHC6W%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC4Mgj7eMDvVwxED7fCsNoiuX2jBbHNF8vXl7X4a6VnYwIhAMTI0fCrxqPkaSbax93xM4FlpX7M%2Bix6w7BQv12fe7%2F0Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwLtintUIMGlqRVI94q3APYT1NRdlq0ksQz446TGeHQbFlVMaOoOa%2FmIph2zTMbmVB0tJfNj%2B4jz5zFI1b13dncbmSU%2FITug6unA%2Bk73Xolu4bHDUgSN%2FEM%2Bq%2Bpl3ZPC3%2FpHza7c6idnT2SbeU4X%2B61k0MpjTnwyi9%2BSkKUfc5FKvP5aOrK4sM%2FaAIVZWZMPlbRzzR34PK%2FLiFe7SY5DQyDwIrVnT4qFjDqNQZNWJmSc72vFi0GcHYqDATWLYaqROo3ZkeM8o9z%2FCgzQd0fG56EvmHq24lSACMmeR3lkACxA6NyH7%2B968kYIVJC%2BBwqzrYef8Lo%2FJySSsLp6jsr%2Bp9Ld4A8zL3edCNhXSFP2wtTTp90tW%2BMmQtH2bP3KceKZOa8%2FxkWq67pXVSLiIdt6Qdk3rOK15UQQvW24c0UhtdyCO5b5EnRL%2FEHYl0FjFiTq%2F3zrzBoTkvcZ3wA8zIl2HrZP2iwg3hr1EsfnGmPj6nGhuxu7ZXrdB1mHw04%2F%2FUIQJnHghvbq9ibbtL93fvYxgZ%2BpHEbV%2FbflE0czo%2FdIActzc6ZGo8i%2BxzrYwHAMi6sSVqKCr9E72M950UPN6PkAaqkh2acZPzcdPtFboFgx6TutLB2nf6fIgc3lpoDICEA41uuNVfY808JDonNXTC6qvLCBjqkASgkaPj675BCc5%2Be3tX8LGXhj13FWILqXW38mL0J1ZJ72m6rzwMrQpPqVI0NEhV16wXBJ6rB89rEtlGa3LvfReXaVyo0buaknanXIbG8Nlt%2BAG%2B5IAUd%2BkbyMsCgj6gWXKSlpJaLPe9I98q2NOcxybh9DUh%2FpdRoXKu5LpED2xDgpXieqSfCWxQkpDMf4%2Bc2e0A7Fgo48iQTQFxJDIikElc10vld&X-Amz-Signature=3a528f9164c578ec84f426c2eac69e10787f8decd1b2f38c786fcbcaa4628fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY7LHC6W%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC4Mgj7eMDvVwxED7fCsNoiuX2jBbHNF8vXl7X4a6VnYwIhAMTI0fCrxqPkaSbax93xM4FlpX7M%2Bix6w7BQv12fe7%2F0Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwLtintUIMGlqRVI94q3APYT1NRdlq0ksQz446TGeHQbFlVMaOoOa%2FmIph2zTMbmVB0tJfNj%2B4jz5zFI1b13dncbmSU%2FITug6unA%2Bk73Xolu4bHDUgSN%2FEM%2Bq%2Bpl3ZPC3%2FpHza7c6idnT2SbeU4X%2B61k0MpjTnwyi9%2BSkKUfc5FKvP5aOrK4sM%2FaAIVZWZMPlbRzzR34PK%2FLiFe7SY5DQyDwIrVnT4qFjDqNQZNWJmSc72vFi0GcHYqDATWLYaqROo3ZkeM8o9z%2FCgzQd0fG56EvmHq24lSACMmeR3lkACxA6NyH7%2B968kYIVJC%2BBwqzrYef8Lo%2FJySSsLp6jsr%2Bp9Ld4A8zL3edCNhXSFP2wtTTp90tW%2BMmQtH2bP3KceKZOa8%2FxkWq67pXVSLiIdt6Qdk3rOK15UQQvW24c0UhtdyCO5b5EnRL%2FEHYl0FjFiTq%2F3zrzBoTkvcZ3wA8zIl2HrZP2iwg3hr1EsfnGmPj6nGhuxu7ZXrdB1mHw04%2F%2FUIQJnHghvbq9ibbtL93fvYxgZ%2BpHEbV%2FbflE0czo%2FdIActzc6ZGo8i%2BxzrYwHAMi6sSVqKCr9E72M950UPN6PkAaqkh2acZPzcdPtFboFgx6TutLB2nf6fIgc3lpoDICEA41uuNVfY808JDonNXTC6qvLCBjqkASgkaPj675BCc5%2Be3tX8LGXhj13FWILqXW38mL0J1ZJ72m6rzwMrQpPqVI0NEhV16wXBJ6rB89rEtlGa3LvfReXaVyo0buaknanXIbG8Nlt%2BAG%2B5IAUd%2BkbyMsCgj6gWXKSlpJaLPe9I98q2NOcxybh9DUh%2FpdRoXKu5LpED2xDgpXieqSfCWxQkpDMf4%2Bc2e0A7Fgo48iQTQFxJDIikElc10vld&X-Amz-Signature=ace405f6d72c8a4fcf419d0513f5b0c3da35a434e663742f7997f6307c26acdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY7LHC6W%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC4Mgj7eMDvVwxED7fCsNoiuX2jBbHNF8vXl7X4a6VnYwIhAMTI0fCrxqPkaSbax93xM4FlpX7M%2Bix6w7BQv12fe7%2F0Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwLtintUIMGlqRVI94q3APYT1NRdlq0ksQz446TGeHQbFlVMaOoOa%2FmIph2zTMbmVB0tJfNj%2B4jz5zFI1b13dncbmSU%2FITug6unA%2Bk73Xolu4bHDUgSN%2FEM%2Bq%2Bpl3ZPC3%2FpHza7c6idnT2SbeU4X%2B61k0MpjTnwyi9%2BSkKUfc5FKvP5aOrK4sM%2FaAIVZWZMPlbRzzR34PK%2FLiFe7SY5DQyDwIrVnT4qFjDqNQZNWJmSc72vFi0GcHYqDATWLYaqROo3ZkeM8o9z%2FCgzQd0fG56EvmHq24lSACMmeR3lkACxA6NyH7%2B968kYIVJC%2BBwqzrYef8Lo%2FJySSsLp6jsr%2Bp9Ld4A8zL3edCNhXSFP2wtTTp90tW%2BMmQtH2bP3KceKZOa8%2FxkWq67pXVSLiIdt6Qdk3rOK15UQQvW24c0UhtdyCO5b5EnRL%2FEHYl0FjFiTq%2F3zrzBoTkvcZ3wA8zIl2HrZP2iwg3hr1EsfnGmPj6nGhuxu7ZXrdB1mHw04%2F%2FUIQJnHghvbq9ibbtL93fvYxgZ%2BpHEbV%2FbflE0czo%2FdIActzc6ZGo8i%2BxzrYwHAMi6sSVqKCr9E72M950UPN6PkAaqkh2acZPzcdPtFboFgx6TutLB2nf6fIgc3lpoDICEA41uuNVfY808JDonNXTC6qvLCBjqkASgkaPj675BCc5%2Be3tX8LGXhj13FWILqXW38mL0J1ZJ72m6rzwMrQpPqVI0NEhV16wXBJ6rB89rEtlGa3LvfReXaVyo0buaknanXIbG8Nlt%2BAG%2B5IAUd%2BkbyMsCgj6gWXKSlpJaLPe9I98q2NOcxybh9DUh%2FpdRoXKu5LpED2xDgpXieqSfCWxQkpDMf4%2Bc2e0A7Fgo48iQTQFxJDIikElc10vld&X-Amz-Signature=b3918a872b3f1470c3767662e7748cfc90c56a026d3e701b67bacfe16b5d1d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY7LHC6W%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC4Mgj7eMDvVwxED7fCsNoiuX2jBbHNF8vXl7X4a6VnYwIhAMTI0fCrxqPkaSbax93xM4FlpX7M%2Bix6w7BQv12fe7%2F0Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwLtintUIMGlqRVI94q3APYT1NRdlq0ksQz446TGeHQbFlVMaOoOa%2FmIph2zTMbmVB0tJfNj%2B4jz5zFI1b13dncbmSU%2FITug6unA%2Bk73Xolu4bHDUgSN%2FEM%2Bq%2Bpl3ZPC3%2FpHza7c6idnT2SbeU4X%2B61k0MpjTnwyi9%2BSkKUfc5FKvP5aOrK4sM%2FaAIVZWZMPlbRzzR34PK%2FLiFe7SY5DQyDwIrVnT4qFjDqNQZNWJmSc72vFi0GcHYqDATWLYaqROo3ZkeM8o9z%2FCgzQd0fG56EvmHq24lSACMmeR3lkACxA6NyH7%2B968kYIVJC%2BBwqzrYef8Lo%2FJySSsLp6jsr%2Bp9Ld4A8zL3edCNhXSFP2wtTTp90tW%2BMmQtH2bP3KceKZOa8%2FxkWq67pXVSLiIdt6Qdk3rOK15UQQvW24c0UhtdyCO5b5EnRL%2FEHYl0FjFiTq%2F3zrzBoTkvcZ3wA8zIl2HrZP2iwg3hr1EsfnGmPj6nGhuxu7ZXrdB1mHw04%2F%2FUIQJnHghvbq9ibbtL93fvYxgZ%2BpHEbV%2FbflE0czo%2FdIActzc6ZGo8i%2BxzrYwHAMi6sSVqKCr9E72M950UPN6PkAaqkh2acZPzcdPtFboFgx6TutLB2nf6fIgc3lpoDICEA41uuNVfY808JDonNXTC6qvLCBjqkASgkaPj675BCc5%2Be3tX8LGXhj13FWILqXW38mL0J1ZJ72m6rzwMrQpPqVI0NEhV16wXBJ6rB89rEtlGa3LvfReXaVyo0buaknanXIbG8Nlt%2BAG%2B5IAUd%2BkbyMsCgj6gWXKSlpJaLPe9I98q2NOcxybh9DUh%2FpdRoXKu5LpED2xDgpXieqSfCWxQkpDMf4%2Bc2e0A7Fgo48iQTQFxJDIikElc10vld&X-Amz-Signature=f6f8915f0aa635e9dc876bc7833231fe747159cf40e1507093132fa6e1cb0520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
