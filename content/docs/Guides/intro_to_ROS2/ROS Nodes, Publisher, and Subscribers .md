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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQFYALEL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCUMR7Kro1MLACkyZWQGthuUN%2B2s603plpBFXBB7G5owAIhALu5piaIyVk3CDltSQUOb2V6vdWg2IgB%2BvbY8tQclk2DKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPyyE7fYijXqrjAxQq3APN9J7UpVTYu923mEkGebHNrtyuoCdmvTMtlkx3GdKSEDnHik0iIpgLjGyAFOhOgW7sGFSLiwSdCZYeusTvxn1rkYwmYJnSlaK40mw0IasoqnRkLH2rv6gpEMUtq2naIzMKlkIHriHNE5irsc764HUSNNcBir8JUD7ZXs52Hs90QQhtrz0IMtKsHYwvBYSwgdBj7QDGqb3qqADKfiH2KtXv4%2FpSWE3RbdGrptRP5MXfQ97cmrfji%2Fx5deSXtI60%2FLzu%2BJGrkQkKoOHOzHBu3KPu9OQEuJT5yOMdKtD6lB0XIai24NvzuXOJeMNhm4%2B1WjmCqmN9XZmOi0fbhl%2FvNetE76JQ5j9S2vj5UuoGpbbG3%2FLhuMpuDt7qkBIOLWO%2BPsf4M%2FV5Yghx6z5EvMipv%2FOktuSjFZOIzKafu23QerUm%2BbwprnlvRUvvlD%2Fs1P2NtBPAdtOP3TFcJYWh%2BoyyuDOizQNyhA9qFeqVxMDsd8vfdVKdgeMGk42PkZyxnlnOGjPsLohQh%2FOG%2FfEpXnkYnvQryR9brABPqZdZGgqXJWOGt%2FXypO2o0gonDmWGe%2BqYRi5xyCoq7NlM0Q9MNCM3C27WYkPbIZQyGLEqCFe3IBXw2uAcCp101%2B5LYbx6kTCClYy%2BBjqkAYd511VnoTezpy5Cuv0ZazAeNFf1i86DOG7cKGEaQXfedFAkgOg7yn7QEqJaAaCgqMj8dDeY8H8IAwM%2FLLJuz4YG2lDzH9b8RQEMvW8hmVcJ%2BBkohn8Yo%2Fm8%2BdSbiWT2iMPr%2BsOAKOA2mk7zKwqgvOf06e490Ova0DmQHO0ZgX42lsvraAA7YB6EtYLVAapy8TDh%2FRmE3zSKIE%2BmP%2FbET5P5BRca&X-Amz-Signature=32ce12ce8e1ea7e8b2473e992ab37ba5828d9e0474fd3eb054aa49006a407fd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQFYALEL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCUMR7Kro1MLACkyZWQGthuUN%2B2s603plpBFXBB7G5owAIhALu5piaIyVk3CDltSQUOb2V6vdWg2IgB%2BvbY8tQclk2DKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPyyE7fYijXqrjAxQq3APN9J7UpVTYu923mEkGebHNrtyuoCdmvTMtlkx3GdKSEDnHik0iIpgLjGyAFOhOgW7sGFSLiwSdCZYeusTvxn1rkYwmYJnSlaK40mw0IasoqnRkLH2rv6gpEMUtq2naIzMKlkIHriHNE5irsc764HUSNNcBir8JUD7ZXs52Hs90QQhtrz0IMtKsHYwvBYSwgdBj7QDGqb3qqADKfiH2KtXv4%2FpSWE3RbdGrptRP5MXfQ97cmrfji%2Fx5deSXtI60%2FLzu%2BJGrkQkKoOHOzHBu3KPu9OQEuJT5yOMdKtD6lB0XIai24NvzuXOJeMNhm4%2B1WjmCqmN9XZmOi0fbhl%2FvNetE76JQ5j9S2vj5UuoGpbbG3%2FLhuMpuDt7qkBIOLWO%2BPsf4M%2FV5Yghx6z5EvMipv%2FOktuSjFZOIzKafu23QerUm%2BbwprnlvRUvvlD%2Fs1P2NtBPAdtOP3TFcJYWh%2BoyyuDOizQNyhA9qFeqVxMDsd8vfdVKdgeMGk42PkZyxnlnOGjPsLohQh%2FOG%2FfEpXnkYnvQryR9brABPqZdZGgqXJWOGt%2FXypO2o0gonDmWGe%2BqYRi5xyCoq7NlM0Q9MNCM3C27WYkPbIZQyGLEqCFe3IBXw2uAcCp101%2B5LYbx6kTCClYy%2BBjqkAYd511VnoTezpy5Cuv0ZazAeNFf1i86DOG7cKGEaQXfedFAkgOg7yn7QEqJaAaCgqMj8dDeY8H8IAwM%2FLLJuz4YG2lDzH9b8RQEMvW8hmVcJ%2BBkohn8Yo%2Fm8%2BdSbiWT2iMPr%2BsOAKOA2mk7zKwqgvOf06e490Ova0DmQHO0ZgX42lsvraAA7YB6EtYLVAapy8TDh%2FRmE3zSKIE%2BmP%2FbET5P5BRca&X-Amz-Signature=244d88ad14bbeb1fb2f6114dc6fd8bd99c7ee242f74dfa1ba1cdc3b2ee31601b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQFYALEL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCUMR7Kro1MLACkyZWQGthuUN%2B2s603plpBFXBB7G5owAIhALu5piaIyVk3CDltSQUOb2V6vdWg2IgB%2BvbY8tQclk2DKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPyyE7fYijXqrjAxQq3APN9J7UpVTYu923mEkGebHNrtyuoCdmvTMtlkx3GdKSEDnHik0iIpgLjGyAFOhOgW7sGFSLiwSdCZYeusTvxn1rkYwmYJnSlaK40mw0IasoqnRkLH2rv6gpEMUtq2naIzMKlkIHriHNE5irsc764HUSNNcBir8JUD7ZXs52Hs90QQhtrz0IMtKsHYwvBYSwgdBj7QDGqb3qqADKfiH2KtXv4%2FpSWE3RbdGrptRP5MXfQ97cmrfji%2Fx5deSXtI60%2FLzu%2BJGrkQkKoOHOzHBu3KPu9OQEuJT5yOMdKtD6lB0XIai24NvzuXOJeMNhm4%2B1WjmCqmN9XZmOi0fbhl%2FvNetE76JQ5j9S2vj5UuoGpbbG3%2FLhuMpuDt7qkBIOLWO%2BPsf4M%2FV5Yghx6z5EvMipv%2FOktuSjFZOIzKafu23QerUm%2BbwprnlvRUvvlD%2Fs1P2NtBPAdtOP3TFcJYWh%2BoyyuDOizQNyhA9qFeqVxMDsd8vfdVKdgeMGk42PkZyxnlnOGjPsLohQh%2FOG%2FfEpXnkYnvQryR9brABPqZdZGgqXJWOGt%2FXypO2o0gonDmWGe%2BqYRi5xyCoq7NlM0Q9MNCM3C27WYkPbIZQyGLEqCFe3IBXw2uAcCp101%2B5LYbx6kTCClYy%2BBjqkAYd511VnoTezpy5Cuv0ZazAeNFf1i86DOG7cKGEaQXfedFAkgOg7yn7QEqJaAaCgqMj8dDeY8H8IAwM%2FLLJuz4YG2lDzH9b8RQEMvW8hmVcJ%2BBkohn8Yo%2Fm8%2BdSbiWT2iMPr%2BsOAKOA2mk7zKwqgvOf06e490Ova0DmQHO0ZgX42lsvraAA7YB6EtYLVAapy8TDh%2FRmE3zSKIE%2BmP%2FbET5P5BRca&X-Amz-Signature=03610a09dff8dbc62ce532a08339244c8ea6529bb74b6d06c937df6cc2d7d5f5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQFYALEL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCUMR7Kro1MLACkyZWQGthuUN%2B2s603plpBFXBB7G5owAIhALu5piaIyVk3CDltSQUOb2V6vdWg2IgB%2BvbY8tQclk2DKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPyyE7fYijXqrjAxQq3APN9J7UpVTYu923mEkGebHNrtyuoCdmvTMtlkx3GdKSEDnHik0iIpgLjGyAFOhOgW7sGFSLiwSdCZYeusTvxn1rkYwmYJnSlaK40mw0IasoqnRkLH2rv6gpEMUtq2naIzMKlkIHriHNE5irsc764HUSNNcBir8JUD7ZXs52Hs90QQhtrz0IMtKsHYwvBYSwgdBj7QDGqb3qqADKfiH2KtXv4%2FpSWE3RbdGrptRP5MXfQ97cmrfji%2Fx5deSXtI60%2FLzu%2BJGrkQkKoOHOzHBu3KPu9OQEuJT5yOMdKtD6lB0XIai24NvzuXOJeMNhm4%2B1WjmCqmN9XZmOi0fbhl%2FvNetE76JQ5j9S2vj5UuoGpbbG3%2FLhuMpuDt7qkBIOLWO%2BPsf4M%2FV5Yghx6z5EvMipv%2FOktuSjFZOIzKafu23QerUm%2BbwprnlvRUvvlD%2Fs1P2NtBPAdtOP3TFcJYWh%2BoyyuDOizQNyhA9qFeqVxMDsd8vfdVKdgeMGk42PkZyxnlnOGjPsLohQh%2FOG%2FfEpXnkYnvQryR9brABPqZdZGgqXJWOGt%2FXypO2o0gonDmWGe%2BqYRi5xyCoq7NlM0Q9MNCM3C27WYkPbIZQyGLEqCFe3IBXw2uAcCp101%2B5LYbx6kTCClYy%2BBjqkAYd511VnoTezpy5Cuv0ZazAeNFf1i86DOG7cKGEaQXfedFAkgOg7yn7QEqJaAaCgqMj8dDeY8H8IAwM%2FLLJuz4YG2lDzH9b8RQEMvW8hmVcJ%2BBkohn8Yo%2Fm8%2BdSbiWT2iMPr%2BsOAKOA2mk7zKwqgvOf06e490Ova0DmQHO0ZgX42lsvraAA7YB6EtYLVAapy8TDh%2FRmE3zSKIE%2BmP%2FbET5P5BRca&X-Amz-Signature=5a46e2610c9f6f3f7e280989f7a7d0177eee3b57c651ec3a33ff98657690eae7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQFYALEL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCUMR7Kro1MLACkyZWQGthuUN%2B2s603plpBFXBB7G5owAIhALu5piaIyVk3CDltSQUOb2V6vdWg2IgB%2BvbY8tQclk2DKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPyyE7fYijXqrjAxQq3APN9J7UpVTYu923mEkGebHNrtyuoCdmvTMtlkx3GdKSEDnHik0iIpgLjGyAFOhOgW7sGFSLiwSdCZYeusTvxn1rkYwmYJnSlaK40mw0IasoqnRkLH2rv6gpEMUtq2naIzMKlkIHriHNE5irsc764HUSNNcBir8JUD7ZXs52Hs90QQhtrz0IMtKsHYwvBYSwgdBj7QDGqb3qqADKfiH2KtXv4%2FpSWE3RbdGrptRP5MXfQ97cmrfji%2Fx5deSXtI60%2FLzu%2BJGrkQkKoOHOzHBu3KPu9OQEuJT5yOMdKtD6lB0XIai24NvzuXOJeMNhm4%2B1WjmCqmN9XZmOi0fbhl%2FvNetE76JQ5j9S2vj5UuoGpbbG3%2FLhuMpuDt7qkBIOLWO%2BPsf4M%2FV5Yghx6z5EvMipv%2FOktuSjFZOIzKafu23QerUm%2BbwprnlvRUvvlD%2Fs1P2NtBPAdtOP3TFcJYWh%2BoyyuDOizQNyhA9qFeqVxMDsd8vfdVKdgeMGk42PkZyxnlnOGjPsLohQh%2FOG%2FfEpXnkYnvQryR9brABPqZdZGgqXJWOGt%2FXypO2o0gonDmWGe%2BqYRi5xyCoq7NlM0Q9MNCM3C27WYkPbIZQyGLEqCFe3IBXw2uAcCp101%2B5LYbx6kTCClYy%2BBjqkAYd511VnoTezpy5Cuv0ZazAeNFf1i86DOG7cKGEaQXfedFAkgOg7yn7QEqJaAaCgqMj8dDeY8H8IAwM%2FLLJuz4YG2lDzH9b8RQEMvW8hmVcJ%2BBkohn8Yo%2Fm8%2BdSbiWT2iMPr%2BsOAKOA2mk7zKwqgvOf06e490Ova0DmQHO0ZgX42lsvraAA7YB6EtYLVAapy8TDh%2FRmE3zSKIE%2BmP%2FbET5P5BRca&X-Amz-Signature=ded99cce78de8a379c6a1e18a71dfda376e1335ade2a8962685cba0a6258b455&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQFYALEL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCUMR7Kro1MLACkyZWQGthuUN%2B2s603plpBFXBB7G5owAIhALu5piaIyVk3CDltSQUOb2V6vdWg2IgB%2BvbY8tQclk2DKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPyyE7fYijXqrjAxQq3APN9J7UpVTYu923mEkGebHNrtyuoCdmvTMtlkx3GdKSEDnHik0iIpgLjGyAFOhOgW7sGFSLiwSdCZYeusTvxn1rkYwmYJnSlaK40mw0IasoqnRkLH2rv6gpEMUtq2naIzMKlkIHriHNE5irsc764HUSNNcBir8JUD7ZXs52Hs90QQhtrz0IMtKsHYwvBYSwgdBj7QDGqb3qqADKfiH2KtXv4%2FpSWE3RbdGrptRP5MXfQ97cmrfji%2Fx5deSXtI60%2FLzu%2BJGrkQkKoOHOzHBu3KPu9OQEuJT5yOMdKtD6lB0XIai24NvzuXOJeMNhm4%2B1WjmCqmN9XZmOi0fbhl%2FvNetE76JQ5j9S2vj5UuoGpbbG3%2FLhuMpuDt7qkBIOLWO%2BPsf4M%2FV5Yghx6z5EvMipv%2FOktuSjFZOIzKafu23QerUm%2BbwprnlvRUvvlD%2Fs1P2NtBPAdtOP3TFcJYWh%2BoyyuDOizQNyhA9qFeqVxMDsd8vfdVKdgeMGk42PkZyxnlnOGjPsLohQh%2FOG%2FfEpXnkYnvQryR9brABPqZdZGgqXJWOGt%2FXypO2o0gonDmWGe%2BqYRi5xyCoq7NlM0Q9MNCM3C27WYkPbIZQyGLEqCFe3IBXw2uAcCp101%2B5LYbx6kTCClYy%2BBjqkAYd511VnoTezpy5Cuv0ZazAeNFf1i86DOG7cKGEaQXfedFAkgOg7yn7QEqJaAaCgqMj8dDeY8H8IAwM%2FLLJuz4YG2lDzH9b8RQEMvW8hmVcJ%2BBkohn8Yo%2Fm8%2BdSbiWT2iMPr%2BsOAKOA2mk7zKwqgvOf06e490Ova0DmQHO0ZgX42lsvraAA7YB6EtYLVAapy8TDh%2FRmE3zSKIE%2BmP%2FbET5P5BRca&X-Amz-Signature=97360a1a6ecf890cb760911106e0d81a54ac44a6cffcb460db5a1ff3459829f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQFYALEL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCUMR7Kro1MLACkyZWQGthuUN%2B2s603plpBFXBB7G5owAIhALu5piaIyVk3CDltSQUOb2V6vdWg2IgB%2BvbY8tQclk2DKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPyyE7fYijXqrjAxQq3APN9J7UpVTYu923mEkGebHNrtyuoCdmvTMtlkx3GdKSEDnHik0iIpgLjGyAFOhOgW7sGFSLiwSdCZYeusTvxn1rkYwmYJnSlaK40mw0IasoqnRkLH2rv6gpEMUtq2naIzMKlkIHriHNE5irsc764HUSNNcBir8JUD7ZXs52Hs90QQhtrz0IMtKsHYwvBYSwgdBj7QDGqb3qqADKfiH2KtXv4%2FpSWE3RbdGrptRP5MXfQ97cmrfji%2Fx5deSXtI60%2FLzu%2BJGrkQkKoOHOzHBu3KPu9OQEuJT5yOMdKtD6lB0XIai24NvzuXOJeMNhm4%2B1WjmCqmN9XZmOi0fbhl%2FvNetE76JQ5j9S2vj5UuoGpbbG3%2FLhuMpuDt7qkBIOLWO%2BPsf4M%2FV5Yghx6z5EvMipv%2FOktuSjFZOIzKafu23QerUm%2BbwprnlvRUvvlD%2Fs1P2NtBPAdtOP3TFcJYWh%2BoyyuDOizQNyhA9qFeqVxMDsd8vfdVKdgeMGk42PkZyxnlnOGjPsLohQh%2FOG%2FfEpXnkYnvQryR9brABPqZdZGgqXJWOGt%2FXypO2o0gonDmWGe%2BqYRi5xyCoq7NlM0Q9MNCM3C27WYkPbIZQyGLEqCFe3IBXw2uAcCp101%2B5LYbx6kTCClYy%2BBjqkAYd511VnoTezpy5Cuv0ZazAeNFf1i86DOG7cKGEaQXfedFAkgOg7yn7QEqJaAaCgqMj8dDeY8H8IAwM%2FLLJuz4YG2lDzH9b8RQEMvW8hmVcJ%2BBkohn8Yo%2Fm8%2BdSbiWT2iMPr%2BsOAKOA2mk7zKwqgvOf06e490Ova0DmQHO0ZgX42lsvraAA7YB6EtYLVAapy8TDh%2FRmE3zSKIE%2BmP%2FbET5P5BRca&X-Amz-Signature=dfdb86201eb64c00912195c548032f020fa09740018f798e370fcaa7ec3dc2bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQFYALEL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCUMR7Kro1MLACkyZWQGthuUN%2B2s603plpBFXBB7G5owAIhALu5piaIyVk3CDltSQUOb2V6vdWg2IgB%2BvbY8tQclk2DKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPyyE7fYijXqrjAxQq3APN9J7UpVTYu923mEkGebHNrtyuoCdmvTMtlkx3GdKSEDnHik0iIpgLjGyAFOhOgW7sGFSLiwSdCZYeusTvxn1rkYwmYJnSlaK40mw0IasoqnRkLH2rv6gpEMUtq2naIzMKlkIHriHNE5irsc764HUSNNcBir8JUD7ZXs52Hs90QQhtrz0IMtKsHYwvBYSwgdBj7QDGqb3qqADKfiH2KtXv4%2FpSWE3RbdGrptRP5MXfQ97cmrfji%2Fx5deSXtI60%2FLzu%2BJGrkQkKoOHOzHBu3KPu9OQEuJT5yOMdKtD6lB0XIai24NvzuXOJeMNhm4%2B1WjmCqmN9XZmOi0fbhl%2FvNetE76JQ5j9S2vj5UuoGpbbG3%2FLhuMpuDt7qkBIOLWO%2BPsf4M%2FV5Yghx6z5EvMipv%2FOktuSjFZOIzKafu23QerUm%2BbwprnlvRUvvlD%2Fs1P2NtBPAdtOP3TFcJYWh%2BoyyuDOizQNyhA9qFeqVxMDsd8vfdVKdgeMGk42PkZyxnlnOGjPsLohQh%2FOG%2FfEpXnkYnvQryR9brABPqZdZGgqXJWOGt%2FXypO2o0gonDmWGe%2BqYRi5xyCoq7NlM0Q9MNCM3C27WYkPbIZQyGLEqCFe3IBXw2uAcCp101%2B5LYbx6kTCClYy%2BBjqkAYd511VnoTezpy5Cuv0ZazAeNFf1i86DOG7cKGEaQXfedFAkgOg7yn7QEqJaAaCgqMj8dDeY8H8IAwM%2FLLJuz4YG2lDzH9b8RQEMvW8hmVcJ%2BBkohn8Yo%2Fm8%2BdSbiWT2iMPr%2BsOAKOA2mk7zKwqgvOf06e490Ova0DmQHO0ZgX42lsvraAA7YB6EtYLVAapy8TDh%2FRmE3zSKIE%2BmP%2FbET5P5BRca&X-Amz-Signature=be04731731bbf3e6317d2f8303b3331e9af8a6b8f443510aca1456b466d6607c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
