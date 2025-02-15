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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBPXX6G%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFxcMP32%2FvUn2s4VOzld4Jq7FMJZh%2FOBQfrE4E3yG2keAiATTPaL8c%2F1T6vcMczUtbLdD5kg7gieQG0kdg3aOtGryir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMyGtIz52xtxxhFSWtKtwDMMoLuWYfWOtW2XcP%2B2vvhHPYx3aUQzWstgA4BkGS3bNCLGnBF%2B5p1i4Rvs7JxCZFfSpKN5jka0Ccs1qsEHDdil6sObCDqCbaF0%2F%2BcvXkHJ%2Bd8fp93OcpKU7fbW2l%2BmS9hWJMD4LcOiWhYPp8B8sn99nT1twqrfInVJFUCYQ1q%2FM7zPMkMmqN3%2Bsxa4bBqNYA7s2m03iuCSIcLpUjpGfIps%2BY%2FgVo%2B6VB%2FpNtolIB8rnPDasafGiYRs%2BM%2FZjyl7XhcAvhvXh%2Bl5r%2BzdGinCvL9KEQjvCJkVZz8SgJWkUexjPGYzXLEQeHPXQPvb8S7d7MbyJ5PRUkd3RwKuAp9H1Ln%2BnYpKTH2FeMJYA2eOZCIOADNgAY4W4wwiPOnFE5M%2FMauF36BZA7EYMutvp2Oiv0aRl5zz%2BBb%2BvaJhqodO0YQt1zCaGhZ8JSnfZ1%2BIPaK3r4rsQplGaERDsvncFGB7iygM42NTzl9NQtHjiO2MSO23u4iTHDg49wfUVUA9aUPbSc0qhgk30U6ZM6qGPSCwj%2Fhx46%2Fz%2F5f%2BqQmf1fNaJrOVT3c6SYFEKH0ENI3MiiVzSDWEQnAhb%2FtR4JnkYJhrf6AIGKNeSTq%2F%2FxQc4R2Zf7xN%2FfwCZyDhnXU9Ze3JswwYTBvQY6pgEH4F1qqsXffcyYYNjnwnC05hKpcXyLcYBowi2niXpODs1RAFKhtTXLnCifPpjNX6MZXhc%2FfsYxDMvF7NL%2FD8fgcY6jb1OQZ1rAj06TwiPp%2B6lO0mSZ%2BevIKoFx%2Fsf6hshiXS4vnnlPw1OQzHI2COBxAHtnlgA5vItuZ%2F5g2M5pK0h1baRNoQRG7tOsttNsy%2Bk67kTprpOL1piMyc4%2FkKJjX9cvGdbq&X-Amz-Signature=1b414d5e5d8cad3430d6ac0aa64e356598d82d72226abdbe587144cf57bd4a58&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBPXX6G%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFxcMP32%2FvUn2s4VOzld4Jq7FMJZh%2FOBQfrE4E3yG2keAiATTPaL8c%2F1T6vcMczUtbLdD5kg7gieQG0kdg3aOtGryir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMyGtIz52xtxxhFSWtKtwDMMoLuWYfWOtW2XcP%2B2vvhHPYx3aUQzWstgA4BkGS3bNCLGnBF%2B5p1i4Rvs7JxCZFfSpKN5jka0Ccs1qsEHDdil6sObCDqCbaF0%2F%2BcvXkHJ%2Bd8fp93OcpKU7fbW2l%2BmS9hWJMD4LcOiWhYPp8B8sn99nT1twqrfInVJFUCYQ1q%2FM7zPMkMmqN3%2Bsxa4bBqNYA7s2m03iuCSIcLpUjpGfIps%2BY%2FgVo%2B6VB%2FpNtolIB8rnPDasafGiYRs%2BM%2FZjyl7XhcAvhvXh%2Bl5r%2BzdGinCvL9KEQjvCJkVZz8SgJWkUexjPGYzXLEQeHPXQPvb8S7d7MbyJ5PRUkd3RwKuAp9H1Ln%2BnYpKTH2FeMJYA2eOZCIOADNgAY4W4wwiPOnFE5M%2FMauF36BZA7EYMutvp2Oiv0aRl5zz%2BBb%2BvaJhqodO0YQt1zCaGhZ8JSnfZ1%2BIPaK3r4rsQplGaERDsvncFGB7iygM42NTzl9NQtHjiO2MSO23u4iTHDg49wfUVUA9aUPbSc0qhgk30U6ZM6qGPSCwj%2Fhx46%2Fz%2F5f%2BqQmf1fNaJrOVT3c6SYFEKH0ENI3MiiVzSDWEQnAhb%2FtR4JnkYJhrf6AIGKNeSTq%2F%2FxQc4R2Zf7xN%2FfwCZyDhnXU9Ze3JswwYTBvQY6pgEH4F1qqsXffcyYYNjnwnC05hKpcXyLcYBowi2niXpODs1RAFKhtTXLnCifPpjNX6MZXhc%2FfsYxDMvF7NL%2FD8fgcY6jb1OQZ1rAj06TwiPp%2B6lO0mSZ%2BevIKoFx%2Fsf6hshiXS4vnnlPw1OQzHI2COBxAHtnlgA5vItuZ%2F5g2M5pK0h1baRNoQRG7tOsttNsy%2Bk67kTprpOL1piMyc4%2FkKJjX9cvGdbq&X-Amz-Signature=642b7895d65b1fe2e0fe3cb09f5c9da9c026856c429fb8f6082339856154d485&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBPXX6G%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFxcMP32%2FvUn2s4VOzld4Jq7FMJZh%2FOBQfrE4E3yG2keAiATTPaL8c%2F1T6vcMczUtbLdD5kg7gieQG0kdg3aOtGryir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMyGtIz52xtxxhFSWtKtwDMMoLuWYfWOtW2XcP%2B2vvhHPYx3aUQzWstgA4BkGS3bNCLGnBF%2B5p1i4Rvs7JxCZFfSpKN5jka0Ccs1qsEHDdil6sObCDqCbaF0%2F%2BcvXkHJ%2Bd8fp93OcpKU7fbW2l%2BmS9hWJMD4LcOiWhYPp8B8sn99nT1twqrfInVJFUCYQ1q%2FM7zPMkMmqN3%2Bsxa4bBqNYA7s2m03iuCSIcLpUjpGfIps%2BY%2FgVo%2B6VB%2FpNtolIB8rnPDasafGiYRs%2BM%2FZjyl7XhcAvhvXh%2Bl5r%2BzdGinCvL9KEQjvCJkVZz8SgJWkUexjPGYzXLEQeHPXQPvb8S7d7MbyJ5PRUkd3RwKuAp9H1Ln%2BnYpKTH2FeMJYA2eOZCIOADNgAY4W4wwiPOnFE5M%2FMauF36BZA7EYMutvp2Oiv0aRl5zz%2BBb%2BvaJhqodO0YQt1zCaGhZ8JSnfZ1%2BIPaK3r4rsQplGaERDsvncFGB7iygM42NTzl9NQtHjiO2MSO23u4iTHDg49wfUVUA9aUPbSc0qhgk30U6ZM6qGPSCwj%2Fhx46%2Fz%2F5f%2BqQmf1fNaJrOVT3c6SYFEKH0ENI3MiiVzSDWEQnAhb%2FtR4JnkYJhrf6AIGKNeSTq%2F%2FxQc4R2Zf7xN%2FfwCZyDhnXU9Ze3JswwYTBvQY6pgEH4F1qqsXffcyYYNjnwnC05hKpcXyLcYBowi2niXpODs1RAFKhtTXLnCifPpjNX6MZXhc%2FfsYxDMvF7NL%2FD8fgcY6jb1OQZ1rAj06TwiPp%2B6lO0mSZ%2BevIKoFx%2Fsf6hshiXS4vnnlPw1OQzHI2COBxAHtnlgA5vItuZ%2F5g2M5pK0h1baRNoQRG7tOsttNsy%2Bk67kTprpOL1piMyc4%2FkKJjX9cvGdbq&X-Amz-Signature=866924930471a1bb1ca65da141a69c0a2ab52e72029eaca556c9ba5f3a57af47&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBPXX6G%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFxcMP32%2FvUn2s4VOzld4Jq7FMJZh%2FOBQfrE4E3yG2keAiATTPaL8c%2F1T6vcMczUtbLdD5kg7gieQG0kdg3aOtGryir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMyGtIz52xtxxhFSWtKtwDMMoLuWYfWOtW2XcP%2B2vvhHPYx3aUQzWstgA4BkGS3bNCLGnBF%2B5p1i4Rvs7JxCZFfSpKN5jka0Ccs1qsEHDdil6sObCDqCbaF0%2F%2BcvXkHJ%2Bd8fp93OcpKU7fbW2l%2BmS9hWJMD4LcOiWhYPp8B8sn99nT1twqrfInVJFUCYQ1q%2FM7zPMkMmqN3%2Bsxa4bBqNYA7s2m03iuCSIcLpUjpGfIps%2BY%2FgVo%2B6VB%2FpNtolIB8rnPDasafGiYRs%2BM%2FZjyl7XhcAvhvXh%2Bl5r%2BzdGinCvL9KEQjvCJkVZz8SgJWkUexjPGYzXLEQeHPXQPvb8S7d7MbyJ5PRUkd3RwKuAp9H1Ln%2BnYpKTH2FeMJYA2eOZCIOADNgAY4W4wwiPOnFE5M%2FMauF36BZA7EYMutvp2Oiv0aRl5zz%2BBb%2BvaJhqodO0YQt1zCaGhZ8JSnfZ1%2BIPaK3r4rsQplGaERDsvncFGB7iygM42NTzl9NQtHjiO2MSO23u4iTHDg49wfUVUA9aUPbSc0qhgk30U6ZM6qGPSCwj%2Fhx46%2Fz%2F5f%2BqQmf1fNaJrOVT3c6SYFEKH0ENI3MiiVzSDWEQnAhb%2FtR4JnkYJhrf6AIGKNeSTq%2F%2FxQc4R2Zf7xN%2FfwCZyDhnXU9Ze3JswwYTBvQY6pgEH4F1qqsXffcyYYNjnwnC05hKpcXyLcYBowi2niXpODs1RAFKhtTXLnCifPpjNX6MZXhc%2FfsYxDMvF7NL%2FD8fgcY6jb1OQZ1rAj06TwiPp%2B6lO0mSZ%2BevIKoFx%2Fsf6hshiXS4vnnlPw1OQzHI2COBxAHtnlgA5vItuZ%2F5g2M5pK0h1baRNoQRG7tOsttNsy%2Bk67kTprpOL1piMyc4%2FkKJjX9cvGdbq&X-Amz-Signature=f76c11a704fa51a50fb3d29eb4db862438ba5576d95a9855a25ab5459eff8204&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBPXX6G%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFxcMP32%2FvUn2s4VOzld4Jq7FMJZh%2FOBQfrE4E3yG2keAiATTPaL8c%2F1T6vcMczUtbLdD5kg7gieQG0kdg3aOtGryir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMyGtIz52xtxxhFSWtKtwDMMoLuWYfWOtW2XcP%2B2vvhHPYx3aUQzWstgA4BkGS3bNCLGnBF%2B5p1i4Rvs7JxCZFfSpKN5jka0Ccs1qsEHDdil6sObCDqCbaF0%2F%2BcvXkHJ%2Bd8fp93OcpKU7fbW2l%2BmS9hWJMD4LcOiWhYPp8B8sn99nT1twqrfInVJFUCYQ1q%2FM7zPMkMmqN3%2Bsxa4bBqNYA7s2m03iuCSIcLpUjpGfIps%2BY%2FgVo%2B6VB%2FpNtolIB8rnPDasafGiYRs%2BM%2FZjyl7XhcAvhvXh%2Bl5r%2BzdGinCvL9KEQjvCJkVZz8SgJWkUexjPGYzXLEQeHPXQPvb8S7d7MbyJ5PRUkd3RwKuAp9H1Ln%2BnYpKTH2FeMJYA2eOZCIOADNgAY4W4wwiPOnFE5M%2FMauF36BZA7EYMutvp2Oiv0aRl5zz%2BBb%2BvaJhqodO0YQt1zCaGhZ8JSnfZ1%2BIPaK3r4rsQplGaERDsvncFGB7iygM42NTzl9NQtHjiO2MSO23u4iTHDg49wfUVUA9aUPbSc0qhgk30U6ZM6qGPSCwj%2Fhx46%2Fz%2F5f%2BqQmf1fNaJrOVT3c6SYFEKH0ENI3MiiVzSDWEQnAhb%2FtR4JnkYJhrf6AIGKNeSTq%2F%2FxQc4R2Zf7xN%2FfwCZyDhnXU9Ze3JswwYTBvQY6pgEH4F1qqsXffcyYYNjnwnC05hKpcXyLcYBowi2niXpODs1RAFKhtTXLnCifPpjNX6MZXhc%2FfsYxDMvF7NL%2FD8fgcY6jb1OQZ1rAj06TwiPp%2B6lO0mSZ%2BevIKoFx%2Fsf6hshiXS4vnnlPw1OQzHI2COBxAHtnlgA5vItuZ%2F5g2M5pK0h1baRNoQRG7tOsttNsy%2Bk67kTprpOL1piMyc4%2FkKJjX9cvGdbq&X-Amz-Signature=8e8c4ed462514b13fbd1a24a2bbdf8ada0f926586c7a459b12a3412be32d4ad1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBPXX6G%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFxcMP32%2FvUn2s4VOzld4Jq7FMJZh%2FOBQfrE4E3yG2keAiATTPaL8c%2F1T6vcMczUtbLdD5kg7gieQG0kdg3aOtGryir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMyGtIz52xtxxhFSWtKtwDMMoLuWYfWOtW2XcP%2B2vvhHPYx3aUQzWstgA4BkGS3bNCLGnBF%2B5p1i4Rvs7JxCZFfSpKN5jka0Ccs1qsEHDdil6sObCDqCbaF0%2F%2BcvXkHJ%2Bd8fp93OcpKU7fbW2l%2BmS9hWJMD4LcOiWhYPp8B8sn99nT1twqrfInVJFUCYQ1q%2FM7zPMkMmqN3%2Bsxa4bBqNYA7s2m03iuCSIcLpUjpGfIps%2BY%2FgVo%2B6VB%2FpNtolIB8rnPDasafGiYRs%2BM%2FZjyl7XhcAvhvXh%2Bl5r%2BzdGinCvL9KEQjvCJkVZz8SgJWkUexjPGYzXLEQeHPXQPvb8S7d7MbyJ5PRUkd3RwKuAp9H1Ln%2BnYpKTH2FeMJYA2eOZCIOADNgAY4W4wwiPOnFE5M%2FMauF36BZA7EYMutvp2Oiv0aRl5zz%2BBb%2BvaJhqodO0YQt1zCaGhZ8JSnfZ1%2BIPaK3r4rsQplGaERDsvncFGB7iygM42NTzl9NQtHjiO2MSO23u4iTHDg49wfUVUA9aUPbSc0qhgk30U6ZM6qGPSCwj%2Fhx46%2Fz%2F5f%2BqQmf1fNaJrOVT3c6SYFEKH0ENI3MiiVzSDWEQnAhb%2FtR4JnkYJhrf6AIGKNeSTq%2F%2FxQc4R2Zf7xN%2FfwCZyDhnXU9Ze3JswwYTBvQY6pgEH4F1qqsXffcyYYNjnwnC05hKpcXyLcYBowi2niXpODs1RAFKhtTXLnCifPpjNX6MZXhc%2FfsYxDMvF7NL%2FD8fgcY6jb1OQZ1rAj06TwiPp%2B6lO0mSZ%2BevIKoFx%2Fsf6hshiXS4vnnlPw1OQzHI2COBxAHtnlgA5vItuZ%2F5g2M5pK0h1baRNoQRG7tOsttNsy%2Bk67kTprpOL1piMyc4%2FkKJjX9cvGdbq&X-Amz-Signature=2116893c5a2a51f64edf6e2118a5f4682738845a8367a0312b8d77c3eae52b5f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBPXX6G%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFxcMP32%2FvUn2s4VOzld4Jq7FMJZh%2FOBQfrE4E3yG2keAiATTPaL8c%2F1T6vcMczUtbLdD5kg7gieQG0kdg3aOtGryir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMyGtIz52xtxxhFSWtKtwDMMoLuWYfWOtW2XcP%2B2vvhHPYx3aUQzWstgA4BkGS3bNCLGnBF%2B5p1i4Rvs7JxCZFfSpKN5jka0Ccs1qsEHDdil6sObCDqCbaF0%2F%2BcvXkHJ%2Bd8fp93OcpKU7fbW2l%2BmS9hWJMD4LcOiWhYPp8B8sn99nT1twqrfInVJFUCYQ1q%2FM7zPMkMmqN3%2Bsxa4bBqNYA7s2m03iuCSIcLpUjpGfIps%2BY%2FgVo%2B6VB%2FpNtolIB8rnPDasafGiYRs%2BM%2FZjyl7XhcAvhvXh%2Bl5r%2BzdGinCvL9KEQjvCJkVZz8SgJWkUexjPGYzXLEQeHPXQPvb8S7d7MbyJ5PRUkd3RwKuAp9H1Ln%2BnYpKTH2FeMJYA2eOZCIOADNgAY4W4wwiPOnFE5M%2FMauF36BZA7EYMutvp2Oiv0aRl5zz%2BBb%2BvaJhqodO0YQt1zCaGhZ8JSnfZ1%2BIPaK3r4rsQplGaERDsvncFGB7iygM42NTzl9NQtHjiO2MSO23u4iTHDg49wfUVUA9aUPbSc0qhgk30U6ZM6qGPSCwj%2Fhx46%2Fz%2F5f%2BqQmf1fNaJrOVT3c6SYFEKH0ENI3MiiVzSDWEQnAhb%2FtR4JnkYJhrf6AIGKNeSTq%2F%2FxQc4R2Zf7xN%2FfwCZyDhnXU9Ze3JswwYTBvQY6pgEH4F1qqsXffcyYYNjnwnC05hKpcXyLcYBowi2niXpODs1RAFKhtTXLnCifPpjNX6MZXhc%2FfsYxDMvF7NL%2FD8fgcY6jb1OQZ1rAj06TwiPp%2B6lO0mSZ%2BevIKoFx%2Fsf6hshiXS4vnnlPw1OQzHI2COBxAHtnlgA5vItuZ%2F5g2M5pK0h1baRNoQRG7tOsttNsy%2Bk67kTprpOL1piMyc4%2FkKJjX9cvGdbq&X-Amz-Signature=004c97d2951581c6fd2ba782162c6dc7d0478da24c8503d41371952ad7ffec54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBPXX6G%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFxcMP32%2FvUn2s4VOzld4Jq7FMJZh%2FOBQfrE4E3yG2keAiATTPaL8c%2F1T6vcMczUtbLdD5kg7gieQG0kdg3aOtGryir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMyGtIz52xtxxhFSWtKtwDMMoLuWYfWOtW2XcP%2B2vvhHPYx3aUQzWstgA4BkGS3bNCLGnBF%2B5p1i4Rvs7JxCZFfSpKN5jka0Ccs1qsEHDdil6sObCDqCbaF0%2F%2BcvXkHJ%2Bd8fp93OcpKU7fbW2l%2BmS9hWJMD4LcOiWhYPp8B8sn99nT1twqrfInVJFUCYQ1q%2FM7zPMkMmqN3%2Bsxa4bBqNYA7s2m03iuCSIcLpUjpGfIps%2BY%2FgVo%2B6VB%2FpNtolIB8rnPDasafGiYRs%2BM%2FZjyl7XhcAvhvXh%2Bl5r%2BzdGinCvL9KEQjvCJkVZz8SgJWkUexjPGYzXLEQeHPXQPvb8S7d7MbyJ5PRUkd3RwKuAp9H1Ln%2BnYpKTH2FeMJYA2eOZCIOADNgAY4W4wwiPOnFE5M%2FMauF36BZA7EYMutvp2Oiv0aRl5zz%2BBb%2BvaJhqodO0YQt1zCaGhZ8JSnfZ1%2BIPaK3r4rsQplGaERDsvncFGB7iygM42NTzl9NQtHjiO2MSO23u4iTHDg49wfUVUA9aUPbSc0qhgk30U6ZM6qGPSCwj%2Fhx46%2Fz%2F5f%2BqQmf1fNaJrOVT3c6SYFEKH0ENI3MiiVzSDWEQnAhb%2FtR4JnkYJhrf6AIGKNeSTq%2F%2FxQc4R2Zf7xN%2FfwCZyDhnXU9Ze3JswwYTBvQY6pgEH4F1qqsXffcyYYNjnwnC05hKpcXyLcYBowi2niXpODs1RAFKhtTXLnCifPpjNX6MZXhc%2FfsYxDMvF7NL%2FD8fgcY6jb1OQZ1rAj06TwiPp%2B6lO0mSZ%2BevIKoFx%2Fsf6hshiXS4vnnlPw1OQzHI2COBxAHtnlgA5vItuZ%2F5g2M5pK0h1baRNoQRG7tOsttNsy%2Bk67kTprpOL1piMyc4%2FkKJjX9cvGdbq&X-Amz-Signature=2f3e4593987af28bb5e437120f2c0beef9977002042801d8e8ff98ba5bb286ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
