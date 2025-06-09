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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLT6CAZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaqsWA7vezxNwdCpK9pTlxQgBSxTctSuZAt3kY89fs0AiEA%2FqxizzuyJ771ke4LBBbuwdAHNhgl%2FNPKbHdQQRHFRNwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKd1tMT6y7Jr3jCYdircA3W%2BhItduDUQEcgCtd%2FEPPEvFRLGC%2FbToaoCX0CSuC7O7IWTEPjgACBqxGpIgDF71Ee2qDVwF7C4KW23OXu0CgXKWQ1Q7C0nGGjguNrdIbBBCsNGcUA7dvvGa84glc9L1LL7Fc3eLC%2FazbT%2BQEEtTLXJAjLLnVlQmwXY37yPfp57V4r6bsks5yeMhGV98pLl0VOd7urxgkPCvPnuXJROFEel2%2Fe4b1J%2BXxW3bJl4HDu07I5nVphYm67x8aKO%2B5hKZTWHzyQRmhU3of1xvOl3P5aDx4fvle8I0dPHyG%2BxpfLXfCxq5v9ECtwt4AmMDXuyZ2AocOW9h%2BpDm3DWhZJFoYPT04pyJU5VET3MhUYve6MmoW62CNCbjnHVs5Xmof6bfBPi58Pr2rt0nlFdEvhOgQwZAq2mpIaAunynpBxbeiw8ojRLS9ib3QKDtOm3AWUFvK4pFyto90VC%2FJ8iOpW9aASJ9O1041Yjh3S4SGwhx4HJkuoVACLiRUftcq5HHklhMMGIEu3k9geMx%2FI1gqT4gkrAw7ADvSxAo8Nz4JdlmBIudWkwO%2B%2F4fhhX8xWhdebxCzCPqtQVq%2BcnLRRjNdoZN5Fti3P7KEvMGA3rtg3FynzdINrCkYdhec5otrFhMMacmsIGOqUB1E%2Fh1hcQbLOny4MsEACnm0qTitkCtj5xp3v%2FVKD%2FRhTftakEBDhIGYxqjYFNMnKjbtQ%2BJbFEdFkoWsp8S8QHNGdPDI01bdhdRCUIDFSlMgxUCNE62tscwhO9VXONVXHDvyGBXK7aQOTkAnE%2B1mvGsZcoCLKVlTByZhHhVq5KIujbQY2Vp%2BgER7Iy5fpwwof488n7NjVPfcpLgg1IsGcF8aTnRcbJ&X-Amz-Signature=4216ea221a9080eda86dd67e1eda9811d56af2a818cf24e46ac3261725338542&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLT6CAZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaqsWA7vezxNwdCpK9pTlxQgBSxTctSuZAt3kY89fs0AiEA%2FqxizzuyJ771ke4LBBbuwdAHNhgl%2FNPKbHdQQRHFRNwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKd1tMT6y7Jr3jCYdircA3W%2BhItduDUQEcgCtd%2FEPPEvFRLGC%2FbToaoCX0CSuC7O7IWTEPjgACBqxGpIgDF71Ee2qDVwF7C4KW23OXu0CgXKWQ1Q7C0nGGjguNrdIbBBCsNGcUA7dvvGa84glc9L1LL7Fc3eLC%2FazbT%2BQEEtTLXJAjLLnVlQmwXY37yPfp57V4r6bsks5yeMhGV98pLl0VOd7urxgkPCvPnuXJROFEel2%2Fe4b1J%2BXxW3bJl4HDu07I5nVphYm67x8aKO%2B5hKZTWHzyQRmhU3of1xvOl3P5aDx4fvle8I0dPHyG%2BxpfLXfCxq5v9ECtwt4AmMDXuyZ2AocOW9h%2BpDm3DWhZJFoYPT04pyJU5VET3MhUYve6MmoW62CNCbjnHVs5Xmof6bfBPi58Pr2rt0nlFdEvhOgQwZAq2mpIaAunynpBxbeiw8ojRLS9ib3QKDtOm3AWUFvK4pFyto90VC%2FJ8iOpW9aASJ9O1041Yjh3S4SGwhx4HJkuoVACLiRUftcq5HHklhMMGIEu3k9geMx%2FI1gqT4gkrAw7ADvSxAo8Nz4JdlmBIudWkwO%2B%2F4fhhX8xWhdebxCzCPqtQVq%2BcnLRRjNdoZN5Fti3P7KEvMGA3rtg3FynzdINrCkYdhec5otrFhMMacmsIGOqUB1E%2Fh1hcQbLOny4MsEACnm0qTitkCtj5xp3v%2FVKD%2FRhTftakEBDhIGYxqjYFNMnKjbtQ%2BJbFEdFkoWsp8S8QHNGdPDI01bdhdRCUIDFSlMgxUCNE62tscwhO9VXONVXHDvyGBXK7aQOTkAnE%2B1mvGsZcoCLKVlTByZhHhVq5KIujbQY2Vp%2BgER7Iy5fpwwof488n7NjVPfcpLgg1IsGcF8aTnRcbJ&X-Amz-Signature=4217690687d7ac1b16a706c466dc0a6c833cb326e500dc73b5f201e4c3113123&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLT6CAZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaqsWA7vezxNwdCpK9pTlxQgBSxTctSuZAt3kY89fs0AiEA%2FqxizzuyJ771ke4LBBbuwdAHNhgl%2FNPKbHdQQRHFRNwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKd1tMT6y7Jr3jCYdircA3W%2BhItduDUQEcgCtd%2FEPPEvFRLGC%2FbToaoCX0CSuC7O7IWTEPjgACBqxGpIgDF71Ee2qDVwF7C4KW23OXu0CgXKWQ1Q7C0nGGjguNrdIbBBCsNGcUA7dvvGa84glc9L1LL7Fc3eLC%2FazbT%2BQEEtTLXJAjLLnVlQmwXY37yPfp57V4r6bsks5yeMhGV98pLl0VOd7urxgkPCvPnuXJROFEel2%2Fe4b1J%2BXxW3bJl4HDu07I5nVphYm67x8aKO%2B5hKZTWHzyQRmhU3of1xvOl3P5aDx4fvle8I0dPHyG%2BxpfLXfCxq5v9ECtwt4AmMDXuyZ2AocOW9h%2BpDm3DWhZJFoYPT04pyJU5VET3MhUYve6MmoW62CNCbjnHVs5Xmof6bfBPi58Pr2rt0nlFdEvhOgQwZAq2mpIaAunynpBxbeiw8ojRLS9ib3QKDtOm3AWUFvK4pFyto90VC%2FJ8iOpW9aASJ9O1041Yjh3S4SGwhx4HJkuoVACLiRUftcq5HHklhMMGIEu3k9geMx%2FI1gqT4gkrAw7ADvSxAo8Nz4JdlmBIudWkwO%2B%2F4fhhX8xWhdebxCzCPqtQVq%2BcnLRRjNdoZN5Fti3P7KEvMGA3rtg3FynzdINrCkYdhec5otrFhMMacmsIGOqUB1E%2Fh1hcQbLOny4MsEACnm0qTitkCtj5xp3v%2FVKD%2FRhTftakEBDhIGYxqjYFNMnKjbtQ%2BJbFEdFkoWsp8S8QHNGdPDI01bdhdRCUIDFSlMgxUCNE62tscwhO9VXONVXHDvyGBXK7aQOTkAnE%2B1mvGsZcoCLKVlTByZhHhVq5KIujbQY2Vp%2BgER7Iy5fpwwof488n7NjVPfcpLgg1IsGcF8aTnRcbJ&X-Amz-Signature=be3ab59ce95cf7d5da69665695b72d617e5f50ff1f9542a037c92f046cbfcd35&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLT6CAZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaqsWA7vezxNwdCpK9pTlxQgBSxTctSuZAt3kY89fs0AiEA%2FqxizzuyJ771ke4LBBbuwdAHNhgl%2FNPKbHdQQRHFRNwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKd1tMT6y7Jr3jCYdircA3W%2BhItduDUQEcgCtd%2FEPPEvFRLGC%2FbToaoCX0CSuC7O7IWTEPjgACBqxGpIgDF71Ee2qDVwF7C4KW23OXu0CgXKWQ1Q7C0nGGjguNrdIbBBCsNGcUA7dvvGa84glc9L1LL7Fc3eLC%2FazbT%2BQEEtTLXJAjLLnVlQmwXY37yPfp57V4r6bsks5yeMhGV98pLl0VOd7urxgkPCvPnuXJROFEel2%2Fe4b1J%2BXxW3bJl4HDu07I5nVphYm67x8aKO%2B5hKZTWHzyQRmhU3of1xvOl3P5aDx4fvle8I0dPHyG%2BxpfLXfCxq5v9ECtwt4AmMDXuyZ2AocOW9h%2BpDm3DWhZJFoYPT04pyJU5VET3MhUYve6MmoW62CNCbjnHVs5Xmof6bfBPi58Pr2rt0nlFdEvhOgQwZAq2mpIaAunynpBxbeiw8ojRLS9ib3QKDtOm3AWUFvK4pFyto90VC%2FJ8iOpW9aASJ9O1041Yjh3S4SGwhx4HJkuoVACLiRUftcq5HHklhMMGIEu3k9geMx%2FI1gqT4gkrAw7ADvSxAo8Nz4JdlmBIudWkwO%2B%2F4fhhX8xWhdebxCzCPqtQVq%2BcnLRRjNdoZN5Fti3P7KEvMGA3rtg3FynzdINrCkYdhec5otrFhMMacmsIGOqUB1E%2Fh1hcQbLOny4MsEACnm0qTitkCtj5xp3v%2FVKD%2FRhTftakEBDhIGYxqjYFNMnKjbtQ%2BJbFEdFkoWsp8S8QHNGdPDI01bdhdRCUIDFSlMgxUCNE62tscwhO9VXONVXHDvyGBXK7aQOTkAnE%2B1mvGsZcoCLKVlTByZhHhVq5KIujbQY2Vp%2BgER7Iy5fpwwof488n7NjVPfcpLgg1IsGcF8aTnRcbJ&X-Amz-Signature=2953257e5fbe4bfdc35c3fdad00775260430223722c7326c35690bf0c0391901&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLT6CAZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaqsWA7vezxNwdCpK9pTlxQgBSxTctSuZAt3kY89fs0AiEA%2FqxizzuyJ771ke4LBBbuwdAHNhgl%2FNPKbHdQQRHFRNwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKd1tMT6y7Jr3jCYdircA3W%2BhItduDUQEcgCtd%2FEPPEvFRLGC%2FbToaoCX0CSuC7O7IWTEPjgACBqxGpIgDF71Ee2qDVwF7C4KW23OXu0CgXKWQ1Q7C0nGGjguNrdIbBBCsNGcUA7dvvGa84glc9L1LL7Fc3eLC%2FazbT%2BQEEtTLXJAjLLnVlQmwXY37yPfp57V4r6bsks5yeMhGV98pLl0VOd7urxgkPCvPnuXJROFEel2%2Fe4b1J%2BXxW3bJl4HDu07I5nVphYm67x8aKO%2B5hKZTWHzyQRmhU3of1xvOl3P5aDx4fvle8I0dPHyG%2BxpfLXfCxq5v9ECtwt4AmMDXuyZ2AocOW9h%2BpDm3DWhZJFoYPT04pyJU5VET3MhUYve6MmoW62CNCbjnHVs5Xmof6bfBPi58Pr2rt0nlFdEvhOgQwZAq2mpIaAunynpBxbeiw8ojRLS9ib3QKDtOm3AWUFvK4pFyto90VC%2FJ8iOpW9aASJ9O1041Yjh3S4SGwhx4HJkuoVACLiRUftcq5HHklhMMGIEu3k9geMx%2FI1gqT4gkrAw7ADvSxAo8Nz4JdlmBIudWkwO%2B%2F4fhhX8xWhdebxCzCPqtQVq%2BcnLRRjNdoZN5Fti3P7KEvMGA3rtg3FynzdINrCkYdhec5otrFhMMacmsIGOqUB1E%2Fh1hcQbLOny4MsEACnm0qTitkCtj5xp3v%2FVKD%2FRhTftakEBDhIGYxqjYFNMnKjbtQ%2BJbFEdFkoWsp8S8QHNGdPDI01bdhdRCUIDFSlMgxUCNE62tscwhO9VXONVXHDvyGBXK7aQOTkAnE%2B1mvGsZcoCLKVlTByZhHhVq5KIujbQY2Vp%2BgER7Iy5fpwwof488n7NjVPfcpLgg1IsGcF8aTnRcbJ&X-Amz-Signature=464ca763c4d01ff37242a900beae6dc388ac76acfb2c1600255ff2564ec3e932&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLT6CAZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaqsWA7vezxNwdCpK9pTlxQgBSxTctSuZAt3kY89fs0AiEA%2FqxizzuyJ771ke4LBBbuwdAHNhgl%2FNPKbHdQQRHFRNwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKd1tMT6y7Jr3jCYdircA3W%2BhItduDUQEcgCtd%2FEPPEvFRLGC%2FbToaoCX0CSuC7O7IWTEPjgACBqxGpIgDF71Ee2qDVwF7C4KW23OXu0CgXKWQ1Q7C0nGGjguNrdIbBBCsNGcUA7dvvGa84glc9L1LL7Fc3eLC%2FazbT%2BQEEtTLXJAjLLnVlQmwXY37yPfp57V4r6bsks5yeMhGV98pLl0VOd7urxgkPCvPnuXJROFEel2%2Fe4b1J%2BXxW3bJl4HDu07I5nVphYm67x8aKO%2B5hKZTWHzyQRmhU3of1xvOl3P5aDx4fvle8I0dPHyG%2BxpfLXfCxq5v9ECtwt4AmMDXuyZ2AocOW9h%2BpDm3DWhZJFoYPT04pyJU5VET3MhUYve6MmoW62CNCbjnHVs5Xmof6bfBPi58Pr2rt0nlFdEvhOgQwZAq2mpIaAunynpBxbeiw8ojRLS9ib3QKDtOm3AWUFvK4pFyto90VC%2FJ8iOpW9aASJ9O1041Yjh3S4SGwhx4HJkuoVACLiRUftcq5HHklhMMGIEu3k9geMx%2FI1gqT4gkrAw7ADvSxAo8Nz4JdlmBIudWkwO%2B%2F4fhhX8xWhdebxCzCPqtQVq%2BcnLRRjNdoZN5Fti3P7KEvMGA3rtg3FynzdINrCkYdhec5otrFhMMacmsIGOqUB1E%2Fh1hcQbLOny4MsEACnm0qTitkCtj5xp3v%2FVKD%2FRhTftakEBDhIGYxqjYFNMnKjbtQ%2BJbFEdFkoWsp8S8QHNGdPDI01bdhdRCUIDFSlMgxUCNE62tscwhO9VXONVXHDvyGBXK7aQOTkAnE%2B1mvGsZcoCLKVlTByZhHhVq5KIujbQY2Vp%2BgER7Iy5fpwwof488n7NjVPfcpLgg1IsGcF8aTnRcbJ&X-Amz-Signature=f5df39b56fdcad066315bb57db88e9c767e86cf4dc4c90a29f431df558c65040&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLT6CAZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaqsWA7vezxNwdCpK9pTlxQgBSxTctSuZAt3kY89fs0AiEA%2FqxizzuyJ771ke4LBBbuwdAHNhgl%2FNPKbHdQQRHFRNwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKd1tMT6y7Jr3jCYdircA3W%2BhItduDUQEcgCtd%2FEPPEvFRLGC%2FbToaoCX0CSuC7O7IWTEPjgACBqxGpIgDF71Ee2qDVwF7C4KW23OXu0CgXKWQ1Q7C0nGGjguNrdIbBBCsNGcUA7dvvGa84glc9L1LL7Fc3eLC%2FazbT%2BQEEtTLXJAjLLnVlQmwXY37yPfp57V4r6bsks5yeMhGV98pLl0VOd7urxgkPCvPnuXJROFEel2%2Fe4b1J%2BXxW3bJl4HDu07I5nVphYm67x8aKO%2B5hKZTWHzyQRmhU3of1xvOl3P5aDx4fvle8I0dPHyG%2BxpfLXfCxq5v9ECtwt4AmMDXuyZ2AocOW9h%2BpDm3DWhZJFoYPT04pyJU5VET3MhUYve6MmoW62CNCbjnHVs5Xmof6bfBPi58Pr2rt0nlFdEvhOgQwZAq2mpIaAunynpBxbeiw8ojRLS9ib3QKDtOm3AWUFvK4pFyto90VC%2FJ8iOpW9aASJ9O1041Yjh3S4SGwhx4HJkuoVACLiRUftcq5HHklhMMGIEu3k9geMx%2FI1gqT4gkrAw7ADvSxAo8Nz4JdlmBIudWkwO%2B%2F4fhhX8xWhdebxCzCPqtQVq%2BcnLRRjNdoZN5Fti3P7KEvMGA3rtg3FynzdINrCkYdhec5otrFhMMacmsIGOqUB1E%2Fh1hcQbLOny4MsEACnm0qTitkCtj5xp3v%2FVKD%2FRhTftakEBDhIGYxqjYFNMnKjbtQ%2BJbFEdFkoWsp8S8QHNGdPDI01bdhdRCUIDFSlMgxUCNE62tscwhO9VXONVXHDvyGBXK7aQOTkAnE%2B1mvGsZcoCLKVlTByZhHhVq5KIujbQY2Vp%2BgER7Iy5fpwwof488n7NjVPfcpLgg1IsGcF8aTnRcbJ&X-Amz-Signature=af34bdfebc08e6c790475670f3d8d76cf4258500ae2a71e6a956b3213a7e6efb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLT6CAZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaqsWA7vezxNwdCpK9pTlxQgBSxTctSuZAt3kY89fs0AiEA%2FqxizzuyJ771ke4LBBbuwdAHNhgl%2FNPKbHdQQRHFRNwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKd1tMT6y7Jr3jCYdircA3W%2BhItduDUQEcgCtd%2FEPPEvFRLGC%2FbToaoCX0CSuC7O7IWTEPjgACBqxGpIgDF71Ee2qDVwF7C4KW23OXu0CgXKWQ1Q7C0nGGjguNrdIbBBCsNGcUA7dvvGa84glc9L1LL7Fc3eLC%2FazbT%2BQEEtTLXJAjLLnVlQmwXY37yPfp57V4r6bsks5yeMhGV98pLl0VOd7urxgkPCvPnuXJROFEel2%2Fe4b1J%2BXxW3bJl4HDu07I5nVphYm67x8aKO%2B5hKZTWHzyQRmhU3of1xvOl3P5aDx4fvle8I0dPHyG%2BxpfLXfCxq5v9ECtwt4AmMDXuyZ2AocOW9h%2BpDm3DWhZJFoYPT04pyJU5VET3MhUYve6MmoW62CNCbjnHVs5Xmof6bfBPi58Pr2rt0nlFdEvhOgQwZAq2mpIaAunynpBxbeiw8ojRLS9ib3QKDtOm3AWUFvK4pFyto90VC%2FJ8iOpW9aASJ9O1041Yjh3S4SGwhx4HJkuoVACLiRUftcq5HHklhMMGIEu3k9geMx%2FI1gqT4gkrAw7ADvSxAo8Nz4JdlmBIudWkwO%2B%2F4fhhX8xWhdebxCzCPqtQVq%2BcnLRRjNdoZN5Fti3P7KEvMGA3rtg3FynzdINrCkYdhec5otrFhMMacmsIGOqUB1E%2Fh1hcQbLOny4MsEACnm0qTitkCtj5xp3v%2FVKD%2FRhTftakEBDhIGYxqjYFNMnKjbtQ%2BJbFEdFkoWsp8S8QHNGdPDI01bdhdRCUIDFSlMgxUCNE62tscwhO9VXONVXHDvyGBXK7aQOTkAnE%2B1mvGsZcoCLKVlTByZhHhVq5KIujbQY2Vp%2BgER7Iy5fpwwof488n7NjVPfcpLgg1IsGcF8aTnRcbJ&X-Amz-Signature=2802d087a75a5507e6f78c26fcc6d96bf528c15a017618135b94c93923bb6d93&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
