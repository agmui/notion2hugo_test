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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FUQ53X%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIEKhiqEMPrA7XAGApdrzo0BOH5yTg0KNfxtdJcvPN12xAiEAk%2F13%2FDZ%2FLSN9oEGLI6F%2B28H1lSccBX1tLiR4vaamiGYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMInEhIbTs%2BCdXxojyrcA50dK%2FcFjNrlcpVNAdL%2FzmID50E9GPLfWau9Bpob25E1xNEoClDx5MpuOMv0X0Z2b%2FCpKjYtzRIVSRvwUUZH%2BebUoriJStAHF%2B9QnAtPchN4zBZKF%2Bk6En%2B6SUTRzHKSTnUSCLQx5U5C3dtUqIhvJnVggnL0K%2B105nsDlk%2FqjdWutCX3X%2BFaIik6jZANOJw7x6%2FOZTFUGQHjH8MjIbSeulJ8UgbHjmGkQQuWEpoU8uo2in%2FLkSSrldduZgo7fFdi2OD5BfZ%2FzMIKQz%2FEVn4jGvN7Tw6r5hwAdLg4M7pCuspbKYSf5cBdBCb2LpEdSSnA%2BXmAZWA9PIKecBDqfu69n%2FPL8thwcyhuafunAwyl%2F%2FTe%2BHb7nK1DAG6sRw7hQbN8PT1EOLNNFpiAmM5y%2BAW9BlWJlalHGeJJWrl9%2FwPmevMt0nMjfskxAt9fAAu1ni%2B3sV0285Mbd530WeuKh%2B25sl%2FEbr0z7cV5nKWsEThA%2BVwdHQjofboxFge71br%2BlNj277JrblGKDXrFUAvbuD8yXaDqQooLJ3Mqs8IjrS385Zoz9Q9we2fJTKRS0oEZpQiKfqipzV7jbc5SNi%2B%2BD7hdz%2FoE4i9M6O9bRTc4savLqLWpQx7uB860Go%2BjtYeBML2z6cIGOqUBajjUt%2BU3NXUgNaM0yEfAY1stdxYVxJxuGHG84xAOwMBAgvT2zbnHjgXtc1kdtE0TC%2FSbVtPpiIAewcn1XSkHheDaOaZ92%2FJ1eZjVDqfk3tSoxy%2FrNPBos%2FhtfkOXjKtkf%2FNgL6k0JNUQX70dx2JDZJLmDR4gaSM8AlZgOl3YJJjHdFmdlHz8dW48Gk%2BYQVO9JHo101nw2T2Opw57xlA8wD7BF%2Fkp&X-Amz-Signature=c47e0b514b22af5c104701ac69cd41f1eeb3a212cce81f2cfbb8ca3eab15c994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FUQ53X%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIEKhiqEMPrA7XAGApdrzo0BOH5yTg0KNfxtdJcvPN12xAiEAk%2F13%2FDZ%2FLSN9oEGLI6F%2B28H1lSccBX1tLiR4vaamiGYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMInEhIbTs%2BCdXxojyrcA50dK%2FcFjNrlcpVNAdL%2FzmID50E9GPLfWau9Bpob25E1xNEoClDx5MpuOMv0X0Z2b%2FCpKjYtzRIVSRvwUUZH%2BebUoriJStAHF%2B9QnAtPchN4zBZKF%2Bk6En%2B6SUTRzHKSTnUSCLQx5U5C3dtUqIhvJnVggnL0K%2B105nsDlk%2FqjdWutCX3X%2BFaIik6jZANOJw7x6%2FOZTFUGQHjH8MjIbSeulJ8UgbHjmGkQQuWEpoU8uo2in%2FLkSSrldduZgo7fFdi2OD5BfZ%2FzMIKQz%2FEVn4jGvN7Tw6r5hwAdLg4M7pCuspbKYSf5cBdBCb2LpEdSSnA%2BXmAZWA9PIKecBDqfu69n%2FPL8thwcyhuafunAwyl%2F%2FTe%2BHb7nK1DAG6sRw7hQbN8PT1EOLNNFpiAmM5y%2BAW9BlWJlalHGeJJWrl9%2FwPmevMt0nMjfskxAt9fAAu1ni%2B3sV0285Mbd530WeuKh%2B25sl%2FEbr0z7cV5nKWsEThA%2BVwdHQjofboxFge71br%2BlNj277JrblGKDXrFUAvbuD8yXaDqQooLJ3Mqs8IjrS385Zoz9Q9we2fJTKRS0oEZpQiKfqipzV7jbc5SNi%2B%2BD7hdz%2FoE4i9M6O9bRTc4savLqLWpQx7uB860Go%2BjtYeBML2z6cIGOqUBajjUt%2BU3NXUgNaM0yEfAY1stdxYVxJxuGHG84xAOwMBAgvT2zbnHjgXtc1kdtE0TC%2FSbVtPpiIAewcn1XSkHheDaOaZ92%2FJ1eZjVDqfk3tSoxy%2FrNPBos%2FhtfkOXjKtkf%2FNgL6k0JNUQX70dx2JDZJLmDR4gaSM8AlZgOl3YJJjHdFmdlHz8dW48Gk%2BYQVO9JHo101nw2T2Opw57xlA8wD7BF%2Fkp&X-Amz-Signature=2798104a3b68b8ca1aab0b8790e3b5d719bdfa780d18ebcb925aa6ae5a023085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FUQ53X%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIEKhiqEMPrA7XAGApdrzo0BOH5yTg0KNfxtdJcvPN12xAiEAk%2F13%2FDZ%2FLSN9oEGLI6F%2B28H1lSccBX1tLiR4vaamiGYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMInEhIbTs%2BCdXxojyrcA50dK%2FcFjNrlcpVNAdL%2FzmID50E9GPLfWau9Bpob25E1xNEoClDx5MpuOMv0X0Z2b%2FCpKjYtzRIVSRvwUUZH%2BebUoriJStAHF%2B9QnAtPchN4zBZKF%2Bk6En%2B6SUTRzHKSTnUSCLQx5U5C3dtUqIhvJnVggnL0K%2B105nsDlk%2FqjdWutCX3X%2BFaIik6jZANOJw7x6%2FOZTFUGQHjH8MjIbSeulJ8UgbHjmGkQQuWEpoU8uo2in%2FLkSSrldduZgo7fFdi2OD5BfZ%2FzMIKQz%2FEVn4jGvN7Tw6r5hwAdLg4M7pCuspbKYSf5cBdBCb2LpEdSSnA%2BXmAZWA9PIKecBDqfu69n%2FPL8thwcyhuafunAwyl%2F%2FTe%2BHb7nK1DAG6sRw7hQbN8PT1EOLNNFpiAmM5y%2BAW9BlWJlalHGeJJWrl9%2FwPmevMt0nMjfskxAt9fAAu1ni%2B3sV0285Mbd530WeuKh%2B25sl%2FEbr0z7cV5nKWsEThA%2BVwdHQjofboxFge71br%2BlNj277JrblGKDXrFUAvbuD8yXaDqQooLJ3Mqs8IjrS385Zoz9Q9we2fJTKRS0oEZpQiKfqipzV7jbc5SNi%2B%2BD7hdz%2FoE4i9M6O9bRTc4savLqLWpQx7uB860Go%2BjtYeBML2z6cIGOqUBajjUt%2BU3NXUgNaM0yEfAY1stdxYVxJxuGHG84xAOwMBAgvT2zbnHjgXtc1kdtE0TC%2FSbVtPpiIAewcn1XSkHheDaOaZ92%2FJ1eZjVDqfk3tSoxy%2FrNPBos%2FhtfkOXjKtkf%2FNgL6k0JNUQX70dx2JDZJLmDR4gaSM8AlZgOl3YJJjHdFmdlHz8dW48Gk%2BYQVO9JHo101nw2T2Opw57xlA8wD7BF%2Fkp&X-Amz-Signature=1fd723ab7d4745e2744352854243da070f1e771b95df855e53984a1b561140d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FUQ53X%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIEKhiqEMPrA7XAGApdrzo0BOH5yTg0KNfxtdJcvPN12xAiEAk%2F13%2FDZ%2FLSN9oEGLI6F%2B28H1lSccBX1tLiR4vaamiGYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMInEhIbTs%2BCdXxojyrcA50dK%2FcFjNrlcpVNAdL%2FzmID50E9GPLfWau9Bpob25E1xNEoClDx5MpuOMv0X0Z2b%2FCpKjYtzRIVSRvwUUZH%2BebUoriJStAHF%2B9QnAtPchN4zBZKF%2Bk6En%2B6SUTRzHKSTnUSCLQx5U5C3dtUqIhvJnVggnL0K%2B105nsDlk%2FqjdWutCX3X%2BFaIik6jZANOJw7x6%2FOZTFUGQHjH8MjIbSeulJ8UgbHjmGkQQuWEpoU8uo2in%2FLkSSrldduZgo7fFdi2OD5BfZ%2FzMIKQz%2FEVn4jGvN7Tw6r5hwAdLg4M7pCuspbKYSf5cBdBCb2LpEdSSnA%2BXmAZWA9PIKecBDqfu69n%2FPL8thwcyhuafunAwyl%2F%2FTe%2BHb7nK1DAG6sRw7hQbN8PT1EOLNNFpiAmM5y%2BAW9BlWJlalHGeJJWrl9%2FwPmevMt0nMjfskxAt9fAAu1ni%2B3sV0285Mbd530WeuKh%2B25sl%2FEbr0z7cV5nKWsEThA%2BVwdHQjofboxFge71br%2BlNj277JrblGKDXrFUAvbuD8yXaDqQooLJ3Mqs8IjrS385Zoz9Q9we2fJTKRS0oEZpQiKfqipzV7jbc5SNi%2B%2BD7hdz%2FoE4i9M6O9bRTc4savLqLWpQx7uB860Go%2BjtYeBML2z6cIGOqUBajjUt%2BU3NXUgNaM0yEfAY1stdxYVxJxuGHG84xAOwMBAgvT2zbnHjgXtc1kdtE0TC%2FSbVtPpiIAewcn1XSkHheDaOaZ92%2FJ1eZjVDqfk3tSoxy%2FrNPBos%2FhtfkOXjKtkf%2FNgL6k0JNUQX70dx2JDZJLmDR4gaSM8AlZgOl3YJJjHdFmdlHz8dW48Gk%2BYQVO9JHo101nw2T2Opw57xlA8wD7BF%2Fkp&X-Amz-Signature=2764bc20b302f3f1606b6b3adb0e5a24fc84d30403f64214c0e1a69936154bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FUQ53X%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIEKhiqEMPrA7XAGApdrzo0BOH5yTg0KNfxtdJcvPN12xAiEAk%2F13%2FDZ%2FLSN9oEGLI6F%2B28H1lSccBX1tLiR4vaamiGYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMInEhIbTs%2BCdXxojyrcA50dK%2FcFjNrlcpVNAdL%2FzmID50E9GPLfWau9Bpob25E1xNEoClDx5MpuOMv0X0Z2b%2FCpKjYtzRIVSRvwUUZH%2BebUoriJStAHF%2B9QnAtPchN4zBZKF%2Bk6En%2B6SUTRzHKSTnUSCLQx5U5C3dtUqIhvJnVggnL0K%2B105nsDlk%2FqjdWutCX3X%2BFaIik6jZANOJw7x6%2FOZTFUGQHjH8MjIbSeulJ8UgbHjmGkQQuWEpoU8uo2in%2FLkSSrldduZgo7fFdi2OD5BfZ%2FzMIKQz%2FEVn4jGvN7Tw6r5hwAdLg4M7pCuspbKYSf5cBdBCb2LpEdSSnA%2BXmAZWA9PIKecBDqfu69n%2FPL8thwcyhuafunAwyl%2F%2FTe%2BHb7nK1DAG6sRw7hQbN8PT1EOLNNFpiAmM5y%2BAW9BlWJlalHGeJJWrl9%2FwPmevMt0nMjfskxAt9fAAu1ni%2B3sV0285Mbd530WeuKh%2B25sl%2FEbr0z7cV5nKWsEThA%2BVwdHQjofboxFge71br%2BlNj277JrblGKDXrFUAvbuD8yXaDqQooLJ3Mqs8IjrS385Zoz9Q9we2fJTKRS0oEZpQiKfqipzV7jbc5SNi%2B%2BD7hdz%2FoE4i9M6O9bRTc4savLqLWpQx7uB860Go%2BjtYeBML2z6cIGOqUBajjUt%2BU3NXUgNaM0yEfAY1stdxYVxJxuGHG84xAOwMBAgvT2zbnHjgXtc1kdtE0TC%2FSbVtPpiIAewcn1XSkHheDaOaZ92%2FJ1eZjVDqfk3tSoxy%2FrNPBos%2FhtfkOXjKtkf%2FNgL6k0JNUQX70dx2JDZJLmDR4gaSM8AlZgOl3YJJjHdFmdlHz8dW48Gk%2BYQVO9JHo101nw2T2Opw57xlA8wD7BF%2Fkp&X-Amz-Signature=ac174af75d76abef1f442e243c45a89de19357a5a299a4ef8f31eec8f4254d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FUQ53X%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIEKhiqEMPrA7XAGApdrzo0BOH5yTg0KNfxtdJcvPN12xAiEAk%2F13%2FDZ%2FLSN9oEGLI6F%2B28H1lSccBX1tLiR4vaamiGYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMInEhIbTs%2BCdXxojyrcA50dK%2FcFjNrlcpVNAdL%2FzmID50E9GPLfWau9Bpob25E1xNEoClDx5MpuOMv0X0Z2b%2FCpKjYtzRIVSRvwUUZH%2BebUoriJStAHF%2B9QnAtPchN4zBZKF%2Bk6En%2B6SUTRzHKSTnUSCLQx5U5C3dtUqIhvJnVggnL0K%2B105nsDlk%2FqjdWutCX3X%2BFaIik6jZANOJw7x6%2FOZTFUGQHjH8MjIbSeulJ8UgbHjmGkQQuWEpoU8uo2in%2FLkSSrldduZgo7fFdi2OD5BfZ%2FzMIKQz%2FEVn4jGvN7Tw6r5hwAdLg4M7pCuspbKYSf5cBdBCb2LpEdSSnA%2BXmAZWA9PIKecBDqfu69n%2FPL8thwcyhuafunAwyl%2F%2FTe%2BHb7nK1DAG6sRw7hQbN8PT1EOLNNFpiAmM5y%2BAW9BlWJlalHGeJJWrl9%2FwPmevMt0nMjfskxAt9fAAu1ni%2B3sV0285Mbd530WeuKh%2B25sl%2FEbr0z7cV5nKWsEThA%2BVwdHQjofboxFge71br%2BlNj277JrblGKDXrFUAvbuD8yXaDqQooLJ3Mqs8IjrS385Zoz9Q9we2fJTKRS0oEZpQiKfqipzV7jbc5SNi%2B%2BD7hdz%2FoE4i9M6O9bRTc4savLqLWpQx7uB860Go%2BjtYeBML2z6cIGOqUBajjUt%2BU3NXUgNaM0yEfAY1stdxYVxJxuGHG84xAOwMBAgvT2zbnHjgXtc1kdtE0TC%2FSbVtPpiIAewcn1XSkHheDaOaZ92%2FJ1eZjVDqfk3tSoxy%2FrNPBos%2FhtfkOXjKtkf%2FNgL6k0JNUQX70dx2JDZJLmDR4gaSM8AlZgOl3YJJjHdFmdlHz8dW48Gk%2BYQVO9JHo101nw2T2Opw57xlA8wD7BF%2Fkp&X-Amz-Signature=1d56885c02765a9b262648943c3fca2243adbde4040d404d04894b4e1b5fea36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FUQ53X%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIEKhiqEMPrA7XAGApdrzo0BOH5yTg0KNfxtdJcvPN12xAiEAk%2F13%2FDZ%2FLSN9oEGLI6F%2B28H1lSccBX1tLiR4vaamiGYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMInEhIbTs%2BCdXxojyrcA50dK%2FcFjNrlcpVNAdL%2FzmID50E9GPLfWau9Bpob25E1xNEoClDx5MpuOMv0X0Z2b%2FCpKjYtzRIVSRvwUUZH%2BebUoriJStAHF%2B9QnAtPchN4zBZKF%2Bk6En%2B6SUTRzHKSTnUSCLQx5U5C3dtUqIhvJnVggnL0K%2B105nsDlk%2FqjdWutCX3X%2BFaIik6jZANOJw7x6%2FOZTFUGQHjH8MjIbSeulJ8UgbHjmGkQQuWEpoU8uo2in%2FLkSSrldduZgo7fFdi2OD5BfZ%2FzMIKQz%2FEVn4jGvN7Tw6r5hwAdLg4M7pCuspbKYSf5cBdBCb2LpEdSSnA%2BXmAZWA9PIKecBDqfu69n%2FPL8thwcyhuafunAwyl%2F%2FTe%2BHb7nK1DAG6sRw7hQbN8PT1EOLNNFpiAmM5y%2BAW9BlWJlalHGeJJWrl9%2FwPmevMt0nMjfskxAt9fAAu1ni%2B3sV0285Mbd530WeuKh%2B25sl%2FEbr0z7cV5nKWsEThA%2BVwdHQjofboxFge71br%2BlNj277JrblGKDXrFUAvbuD8yXaDqQooLJ3Mqs8IjrS385Zoz9Q9we2fJTKRS0oEZpQiKfqipzV7jbc5SNi%2B%2BD7hdz%2FoE4i9M6O9bRTc4savLqLWpQx7uB860Go%2BjtYeBML2z6cIGOqUBajjUt%2BU3NXUgNaM0yEfAY1stdxYVxJxuGHG84xAOwMBAgvT2zbnHjgXtc1kdtE0TC%2FSbVtPpiIAewcn1XSkHheDaOaZ92%2FJ1eZjVDqfk3tSoxy%2FrNPBos%2FhtfkOXjKtkf%2FNgL6k0JNUQX70dx2JDZJLmDR4gaSM8AlZgOl3YJJjHdFmdlHz8dW48Gk%2BYQVO9JHo101nw2T2Opw57xlA8wD7BF%2Fkp&X-Amz-Signature=34db311bbe28a689baf83bdbf10a1f21412ff31650b7d5b5a619ee0381d0651e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FUQ53X%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIEKhiqEMPrA7XAGApdrzo0BOH5yTg0KNfxtdJcvPN12xAiEAk%2F13%2FDZ%2FLSN9oEGLI6F%2B28H1lSccBX1tLiR4vaamiGYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMInEhIbTs%2BCdXxojyrcA50dK%2FcFjNrlcpVNAdL%2FzmID50E9GPLfWau9Bpob25E1xNEoClDx5MpuOMv0X0Z2b%2FCpKjYtzRIVSRvwUUZH%2BebUoriJStAHF%2B9QnAtPchN4zBZKF%2Bk6En%2B6SUTRzHKSTnUSCLQx5U5C3dtUqIhvJnVggnL0K%2B105nsDlk%2FqjdWutCX3X%2BFaIik6jZANOJw7x6%2FOZTFUGQHjH8MjIbSeulJ8UgbHjmGkQQuWEpoU8uo2in%2FLkSSrldduZgo7fFdi2OD5BfZ%2FzMIKQz%2FEVn4jGvN7Tw6r5hwAdLg4M7pCuspbKYSf5cBdBCb2LpEdSSnA%2BXmAZWA9PIKecBDqfu69n%2FPL8thwcyhuafunAwyl%2F%2FTe%2BHb7nK1DAG6sRw7hQbN8PT1EOLNNFpiAmM5y%2BAW9BlWJlalHGeJJWrl9%2FwPmevMt0nMjfskxAt9fAAu1ni%2B3sV0285Mbd530WeuKh%2B25sl%2FEbr0z7cV5nKWsEThA%2BVwdHQjofboxFge71br%2BlNj277JrblGKDXrFUAvbuD8yXaDqQooLJ3Mqs8IjrS385Zoz9Q9we2fJTKRS0oEZpQiKfqipzV7jbc5SNi%2B%2BD7hdz%2FoE4i9M6O9bRTc4savLqLWpQx7uB860Go%2BjtYeBML2z6cIGOqUBajjUt%2BU3NXUgNaM0yEfAY1stdxYVxJxuGHG84xAOwMBAgvT2zbnHjgXtc1kdtE0TC%2FSbVtPpiIAewcn1XSkHheDaOaZ92%2FJ1eZjVDqfk3tSoxy%2FrNPBos%2FhtfkOXjKtkf%2FNgL6k0JNUQX70dx2JDZJLmDR4gaSM8AlZgOl3YJJjHdFmdlHz8dW48Gk%2BYQVO9JHo101nw2T2Opw57xlA8wD7BF%2Fkp&X-Amz-Signature=d152ccc75540b1dd67da5c0bfa01203079a4307053a2cd62ae134775ccc4ff33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
