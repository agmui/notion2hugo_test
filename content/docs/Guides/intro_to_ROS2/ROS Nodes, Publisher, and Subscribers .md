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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXMXXYBY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCjl4UaWpZwxVKGWqOpd6ZFdCtRe7UqoxyJ9awW%2BYf8PgIhAMyBuRMu6v4%2FPi%2BplnjTLno%2F3ebRxg%2FaVzr24pbBd%2B8xKv8DCGkQABoMNjM3NDIzMTgzODA1Igyx3MT%2BDhkF2YJFgcUq3AM1WVvRK8lTyGnL91lQ6RvbtZu4Kb0rXEJNX0cl%2FEhiyuexdn4lFlu9AqlypMwfsA2dXqeTxjcpkWsHSxvhWyIzBoh%2BzaxQlsQ4fgyfArUILLle7X%2BpFmhXyOi3wiS35Xl%2B6fsnaStH45xmtSi1o3GmhZn6OimjnoTtOi8BzvZM67J%2BrA6eIPunEc5hdsN3xshAL0VxmDklGxbCoYjBztRupuX9FezngvwnXVpEJdHK1He4wwwQsz60K7AT%2BhRGwTMTdqluYUjVSRmkl1oGXAftPW3ntyKsPubO8yk4ff7zvmJWm7JvzdX6oWa4rKFQg%2BcgGsHM%2BDbYIYBTe4SKhQjhOlMN6XSKat84zm0J2VvPopojDqk2Yh%2FDnU6yetnbyAU4s9%2Fb9j6RrfezGXgoNWhg0YZC%2BU6xH3B9O0XW0WFdQS%2BOdTFDJvWWK3YsD92tzvD2crZwhxZC124QECAPrzm%2BrCoKeoGWwgSl6I%2FfK27Q8fRne8Tq9Fr4ehjFTRqJEsUcYuCeX7scO8cz9QhZPXrB8oeTE1vPUVE%2FG7%2F%2BxkHyvQtByrZdhz9nuHjb1Rq5tSEc0WnRKEpus8rHL0ikaez347Uq1RLak0lmuMPqVrDBxXNt8%2BpSz2qaD%2FTvZTC2q7O%2BBjqkASJEUryHUo9F5Mgy9t9GIBvvg7RKZYQ78lP870OJbXzhBQfhRLqwoJEUHzTVJ5i2cwQSy0v6NLr7rUcSS%2FLvOMgNDrrSvqsUAdWmR5FRrPOZxyq7up3Y47N929EWiKEg6QsNtHoNh8wc9d6lHzHKgp4hLmuAR85zpUpSBqgcofsk2rclNVfoNtgAzaYi3dBinF04DSlNbbDhTZFhbpgNOPO63c8H&X-Amz-Signature=00533b3ee33430ed0fe1d93b8f7bb26e1f87522d7dfccbbf77cd4158b2ad309c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXMXXYBY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCjl4UaWpZwxVKGWqOpd6ZFdCtRe7UqoxyJ9awW%2BYf8PgIhAMyBuRMu6v4%2FPi%2BplnjTLno%2F3ebRxg%2FaVzr24pbBd%2B8xKv8DCGkQABoMNjM3NDIzMTgzODA1Igyx3MT%2BDhkF2YJFgcUq3AM1WVvRK8lTyGnL91lQ6RvbtZu4Kb0rXEJNX0cl%2FEhiyuexdn4lFlu9AqlypMwfsA2dXqeTxjcpkWsHSxvhWyIzBoh%2BzaxQlsQ4fgyfArUILLle7X%2BpFmhXyOi3wiS35Xl%2B6fsnaStH45xmtSi1o3GmhZn6OimjnoTtOi8BzvZM67J%2BrA6eIPunEc5hdsN3xshAL0VxmDklGxbCoYjBztRupuX9FezngvwnXVpEJdHK1He4wwwQsz60K7AT%2BhRGwTMTdqluYUjVSRmkl1oGXAftPW3ntyKsPubO8yk4ff7zvmJWm7JvzdX6oWa4rKFQg%2BcgGsHM%2BDbYIYBTe4SKhQjhOlMN6XSKat84zm0J2VvPopojDqk2Yh%2FDnU6yetnbyAU4s9%2Fb9j6RrfezGXgoNWhg0YZC%2BU6xH3B9O0XW0WFdQS%2BOdTFDJvWWK3YsD92tzvD2crZwhxZC124QECAPrzm%2BrCoKeoGWwgSl6I%2FfK27Q8fRne8Tq9Fr4ehjFTRqJEsUcYuCeX7scO8cz9QhZPXrB8oeTE1vPUVE%2FG7%2F%2BxkHyvQtByrZdhz9nuHjb1Rq5tSEc0WnRKEpus8rHL0ikaez347Uq1RLak0lmuMPqVrDBxXNt8%2BpSz2qaD%2FTvZTC2q7O%2BBjqkASJEUryHUo9F5Mgy9t9GIBvvg7RKZYQ78lP870OJbXzhBQfhRLqwoJEUHzTVJ5i2cwQSy0v6NLr7rUcSS%2FLvOMgNDrrSvqsUAdWmR5FRrPOZxyq7up3Y47N929EWiKEg6QsNtHoNh8wc9d6lHzHKgp4hLmuAR85zpUpSBqgcofsk2rclNVfoNtgAzaYi3dBinF04DSlNbbDhTZFhbpgNOPO63c8H&X-Amz-Signature=db7fd5a2e02aaad02c23b5b36f3071e6d6cc22949541001fe9bf95d15736fdef&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXMXXYBY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCjl4UaWpZwxVKGWqOpd6ZFdCtRe7UqoxyJ9awW%2BYf8PgIhAMyBuRMu6v4%2FPi%2BplnjTLno%2F3ebRxg%2FaVzr24pbBd%2B8xKv8DCGkQABoMNjM3NDIzMTgzODA1Igyx3MT%2BDhkF2YJFgcUq3AM1WVvRK8lTyGnL91lQ6RvbtZu4Kb0rXEJNX0cl%2FEhiyuexdn4lFlu9AqlypMwfsA2dXqeTxjcpkWsHSxvhWyIzBoh%2BzaxQlsQ4fgyfArUILLle7X%2BpFmhXyOi3wiS35Xl%2B6fsnaStH45xmtSi1o3GmhZn6OimjnoTtOi8BzvZM67J%2BrA6eIPunEc5hdsN3xshAL0VxmDklGxbCoYjBztRupuX9FezngvwnXVpEJdHK1He4wwwQsz60K7AT%2BhRGwTMTdqluYUjVSRmkl1oGXAftPW3ntyKsPubO8yk4ff7zvmJWm7JvzdX6oWa4rKFQg%2BcgGsHM%2BDbYIYBTe4SKhQjhOlMN6XSKat84zm0J2VvPopojDqk2Yh%2FDnU6yetnbyAU4s9%2Fb9j6RrfezGXgoNWhg0YZC%2BU6xH3B9O0XW0WFdQS%2BOdTFDJvWWK3YsD92tzvD2crZwhxZC124QECAPrzm%2BrCoKeoGWwgSl6I%2FfK27Q8fRne8Tq9Fr4ehjFTRqJEsUcYuCeX7scO8cz9QhZPXrB8oeTE1vPUVE%2FG7%2F%2BxkHyvQtByrZdhz9nuHjb1Rq5tSEc0WnRKEpus8rHL0ikaez347Uq1RLak0lmuMPqVrDBxXNt8%2BpSz2qaD%2FTvZTC2q7O%2BBjqkASJEUryHUo9F5Mgy9t9GIBvvg7RKZYQ78lP870OJbXzhBQfhRLqwoJEUHzTVJ5i2cwQSy0v6NLr7rUcSS%2FLvOMgNDrrSvqsUAdWmR5FRrPOZxyq7up3Y47N929EWiKEg6QsNtHoNh8wc9d6lHzHKgp4hLmuAR85zpUpSBqgcofsk2rclNVfoNtgAzaYi3dBinF04DSlNbbDhTZFhbpgNOPO63c8H&X-Amz-Signature=7d2c5fdffebc54ab1eade2783166193443481343a219d8892bf35175f5c83d50&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXMXXYBY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCjl4UaWpZwxVKGWqOpd6ZFdCtRe7UqoxyJ9awW%2BYf8PgIhAMyBuRMu6v4%2FPi%2BplnjTLno%2F3ebRxg%2FaVzr24pbBd%2B8xKv8DCGkQABoMNjM3NDIzMTgzODA1Igyx3MT%2BDhkF2YJFgcUq3AM1WVvRK8lTyGnL91lQ6RvbtZu4Kb0rXEJNX0cl%2FEhiyuexdn4lFlu9AqlypMwfsA2dXqeTxjcpkWsHSxvhWyIzBoh%2BzaxQlsQ4fgyfArUILLle7X%2BpFmhXyOi3wiS35Xl%2B6fsnaStH45xmtSi1o3GmhZn6OimjnoTtOi8BzvZM67J%2BrA6eIPunEc5hdsN3xshAL0VxmDklGxbCoYjBztRupuX9FezngvwnXVpEJdHK1He4wwwQsz60K7AT%2BhRGwTMTdqluYUjVSRmkl1oGXAftPW3ntyKsPubO8yk4ff7zvmJWm7JvzdX6oWa4rKFQg%2BcgGsHM%2BDbYIYBTe4SKhQjhOlMN6XSKat84zm0J2VvPopojDqk2Yh%2FDnU6yetnbyAU4s9%2Fb9j6RrfezGXgoNWhg0YZC%2BU6xH3B9O0XW0WFdQS%2BOdTFDJvWWK3YsD92tzvD2crZwhxZC124QECAPrzm%2BrCoKeoGWwgSl6I%2FfK27Q8fRne8Tq9Fr4ehjFTRqJEsUcYuCeX7scO8cz9QhZPXrB8oeTE1vPUVE%2FG7%2F%2BxkHyvQtByrZdhz9nuHjb1Rq5tSEc0WnRKEpus8rHL0ikaez347Uq1RLak0lmuMPqVrDBxXNt8%2BpSz2qaD%2FTvZTC2q7O%2BBjqkASJEUryHUo9F5Mgy9t9GIBvvg7RKZYQ78lP870OJbXzhBQfhRLqwoJEUHzTVJ5i2cwQSy0v6NLr7rUcSS%2FLvOMgNDrrSvqsUAdWmR5FRrPOZxyq7up3Y47N929EWiKEg6QsNtHoNh8wc9d6lHzHKgp4hLmuAR85zpUpSBqgcofsk2rclNVfoNtgAzaYi3dBinF04DSlNbbDhTZFhbpgNOPO63c8H&X-Amz-Signature=5b866d068d873bf5325d08b18702397ac05d093917f7db44f83b56b68b3aaf5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXMXXYBY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCjl4UaWpZwxVKGWqOpd6ZFdCtRe7UqoxyJ9awW%2BYf8PgIhAMyBuRMu6v4%2FPi%2BplnjTLno%2F3ebRxg%2FaVzr24pbBd%2B8xKv8DCGkQABoMNjM3NDIzMTgzODA1Igyx3MT%2BDhkF2YJFgcUq3AM1WVvRK8lTyGnL91lQ6RvbtZu4Kb0rXEJNX0cl%2FEhiyuexdn4lFlu9AqlypMwfsA2dXqeTxjcpkWsHSxvhWyIzBoh%2BzaxQlsQ4fgyfArUILLle7X%2BpFmhXyOi3wiS35Xl%2B6fsnaStH45xmtSi1o3GmhZn6OimjnoTtOi8BzvZM67J%2BrA6eIPunEc5hdsN3xshAL0VxmDklGxbCoYjBztRupuX9FezngvwnXVpEJdHK1He4wwwQsz60K7AT%2BhRGwTMTdqluYUjVSRmkl1oGXAftPW3ntyKsPubO8yk4ff7zvmJWm7JvzdX6oWa4rKFQg%2BcgGsHM%2BDbYIYBTe4SKhQjhOlMN6XSKat84zm0J2VvPopojDqk2Yh%2FDnU6yetnbyAU4s9%2Fb9j6RrfezGXgoNWhg0YZC%2BU6xH3B9O0XW0WFdQS%2BOdTFDJvWWK3YsD92tzvD2crZwhxZC124QECAPrzm%2BrCoKeoGWwgSl6I%2FfK27Q8fRne8Tq9Fr4ehjFTRqJEsUcYuCeX7scO8cz9QhZPXrB8oeTE1vPUVE%2FG7%2F%2BxkHyvQtByrZdhz9nuHjb1Rq5tSEc0WnRKEpus8rHL0ikaez347Uq1RLak0lmuMPqVrDBxXNt8%2BpSz2qaD%2FTvZTC2q7O%2BBjqkASJEUryHUo9F5Mgy9t9GIBvvg7RKZYQ78lP870OJbXzhBQfhRLqwoJEUHzTVJ5i2cwQSy0v6NLr7rUcSS%2FLvOMgNDrrSvqsUAdWmR5FRrPOZxyq7up3Y47N929EWiKEg6QsNtHoNh8wc9d6lHzHKgp4hLmuAR85zpUpSBqgcofsk2rclNVfoNtgAzaYi3dBinF04DSlNbbDhTZFhbpgNOPO63c8H&X-Amz-Signature=48ff957e0a24fcea9c9467c556c3a2a7505319a6874f10c7b9f981724844ef9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXMXXYBY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCjl4UaWpZwxVKGWqOpd6ZFdCtRe7UqoxyJ9awW%2BYf8PgIhAMyBuRMu6v4%2FPi%2BplnjTLno%2F3ebRxg%2FaVzr24pbBd%2B8xKv8DCGkQABoMNjM3NDIzMTgzODA1Igyx3MT%2BDhkF2YJFgcUq3AM1WVvRK8lTyGnL91lQ6RvbtZu4Kb0rXEJNX0cl%2FEhiyuexdn4lFlu9AqlypMwfsA2dXqeTxjcpkWsHSxvhWyIzBoh%2BzaxQlsQ4fgyfArUILLle7X%2BpFmhXyOi3wiS35Xl%2B6fsnaStH45xmtSi1o3GmhZn6OimjnoTtOi8BzvZM67J%2BrA6eIPunEc5hdsN3xshAL0VxmDklGxbCoYjBztRupuX9FezngvwnXVpEJdHK1He4wwwQsz60K7AT%2BhRGwTMTdqluYUjVSRmkl1oGXAftPW3ntyKsPubO8yk4ff7zvmJWm7JvzdX6oWa4rKFQg%2BcgGsHM%2BDbYIYBTe4SKhQjhOlMN6XSKat84zm0J2VvPopojDqk2Yh%2FDnU6yetnbyAU4s9%2Fb9j6RrfezGXgoNWhg0YZC%2BU6xH3B9O0XW0WFdQS%2BOdTFDJvWWK3YsD92tzvD2crZwhxZC124QECAPrzm%2BrCoKeoGWwgSl6I%2FfK27Q8fRne8Tq9Fr4ehjFTRqJEsUcYuCeX7scO8cz9QhZPXrB8oeTE1vPUVE%2FG7%2F%2BxkHyvQtByrZdhz9nuHjb1Rq5tSEc0WnRKEpus8rHL0ikaez347Uq1RLak0lmuMPqVrDBxXNt8%2BpSz2qaD%2FTvZTC2q7O%2BBjqkASJEUryHUo9F5Mgy9t9GIBvvg7RKZYQ78lP870OJbXzhBQfhRLqwoJEUHzTVJ5i2cwQSy0v6NLr7rUcSS%2FLvOMgNDrrSvqsUAdWmR5FRrPOZxyq7up3Y47N929EWiKEg6QsNtHoNh8wc9d6lHzHKgp4hLmuAR85zpUpSBqgcofsk2rclNVfoNtgAzaYi3dBinF04DSlNbbDhTZFhbpgNOPO63c8H&X-Amz-Signature=f63108e4547a9855083b8f60bd0548af873149acf66057e4c0d1b7fc395a4ac2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXMXXYBY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCjl4UaWpZwxVKGWqOpd6ZFdCtRe7UqoxyJ9awW%2BYf8PgIhAMyBuRMu6v4%2FPi%2BplnjTLno%2F3ebRxg%2FaVzr24pbBd%2B8xKv8DCGkQABoMNjM3NDIzMTgzODA1Igyx3MT%2BDhkF2YJFgcUq3AM1WVvRK8lTyGnL91lQ6RvbtZu4Kb0rXEJNX0cl%2FEhiyuexdn4lFlu9AqlypMwfsA2dXqeTxjcpkWsHSxvhWyIzBoh%2BzaxQlsQ4fgyfArUILLle7X%2BpFmhXyOi3wiS35Xl%2B6fsnaStH45xmtSi1o3GmhZn6OimjnoTtOi8BzvZM67J%2BrA6eIPunEc5hdsN3xshAL0VxmDklGxbCoYjBztRupuX9FezngvwnXVpEJdHK1He4wwwQsz60K7AT%2BhRGwTMTdqluYUjVSRmkl1oGXAftPW3ntyKsPubO8yk4ff7zvmJWm7JvzdX6oWa4rKFQg%2BcgGsHM%2BDbYIYBTe4SKhQjhOlMN6XSKat84zm0J2VvPopojDqk2Yh%2FDnU6yetnbyAU4s9%2Fb9j6RrfezGXgoNWhg0YZC%2BU6xH3B9O0XW0WFdQS%2BOdTFDJvWWK3YsD92tzvD2crZwhxZC124QECAPrzm%2BrCoKeoGWwgSl6I%2FfK27Q8fRne8Tq9Fr4ehjFTRqJEsUcYuCeX7scO8cz9QhZPXrB8oeTE1vPUVE%2FG7%2F%2BxkHyvQtByrZdhz9nuHjb1Rq5tSEc0WnRKEpus8rHL0ikaez347Uq1RLak0lmuMPqVrDBxXNt8%2BpSz2qaD%2FTvZTC2q7O%2BBjqkASJEUryHUo9F5Mgy9t9GIBvvg7RKZYQ78lP870OJbXzhBQfhRLqwoJEUHzTVJ5i2cwQSy0v6NLr7rUcSS%2FLvOMgNDrrSvqsUAdWmR5FRrPOZxyq7up3Y47N929EWiKEg6QsNtHoNh8wc9d6lHzHKgp4hLmuAR85zpUpSBqgcofsk2rclNVfoNtgAzaYi3dBinF04DSlNbbDhTZFhbpgNOPO63c8H&X-Amz-Signature=a92c94aa28b1351971d09dd19220bacc417419b7852162aa87f189e9b918b81b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXMXXYBY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCjl4UaWpZwxVKGWqOpd6ZFdCtRe7UqoxyJ9awW%2BYf8PgIhAMyBuRMu6v4%2FPi%2BplnjTLno%2F3ebRxg%2FaVzr24pbBd%2B8xKv8DCGkQABoMNjM3NDIzMTgzODA1Igyx3MT%2BDhkF2YJFgcUq3AM1WVvRK8lTyGnL91lQ6RvbtZu4Kb0rXEJNX0cl%2FEhiyuexdn4lFlu9AqlypMwfsA2dXqeTxjcpkWsHSxvhWyIzBoh%2BzaxQlsQ4fgyfArUILLle7X%2BpFmhXyOi3wiS35Xl%2B6fsnaStH45xmtSi1o3GmhZn6OimjnoTtOi8BzvZM67J%2BrA6eIPunEc5hdsN3xshAL0VxmDklGxbCoYjBztRupuX9FezngvwnXVpEJdHK1He4wwwQsz60K7AT%2BhRGwTMTdqluYUjVSRmkl1oGXAftPW3ntyKsPubO8yk4ff7zvmJWm7JvzdX6oWa4rKFQg%2BcgGsHM%2BDbYIYBTe4SKhQjhOlMN6XSKat84zm0J2VvPopojDqk2Yh%2FDnU6yetnbyAU4s9%2Fb9j6RrfezGXgoNWhg0YZC%2BU6xH3B9O0XW0WFdQS%2BOdTFDJvWWK3YsD92tzvD2crZwhxZC124QECAPrzm%2BrCoKeoGWwgSl6I%2FfK27Q8fRne8Tq9Fr4ehjFTRqJEsUcYuCeX7scO8cz9QhZPXrB8oeTE1vPUVE%2FG7%2F%2BxkHyvQtByrZdhz9nuHjb1Rq5tSEc0WnRKEpus8rHL0ikaez347Uq1RLak0lmuMPqVrDBxXNt8%2BpSz2qaD%2FTvZTC2q7O%2BBjqkASJEUryHUo9F5Mgy9t9GIBvvg7RKZYQ78lP870OJbXzhBQfhRLqwoJEUHzTVJ5i2cwQSy0v6NLr7rUcSS%2FLvOMgNDrrSvqsUAdWmR5FRrPOZxyq7up3Y47N929EWiKEg6QsNtHoNh8wc9d6lHzHKgp4hLmuAR85zpUpSBqgcofsk2rclNVfoNtgAzaYi3dBinF04DSlNbbDhTZFhbpgNOPO63c8H&X-Amz-Signature=a51e34d5394a0800a86d89a755d92e0b5cc0c1123f3019811a9b50cc6c422a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
