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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5AJCIG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVRcKBwiyEfmayWidMT8NiLUXHzGE9VKR0%2FPiJd45BEAiBDdiqx0B%2B6RyK1E3IlPx6yOyJQzQWbx2qutfn47cuW0yqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqC19YM9h3yu%2F6%2BjKtwDRT8XwIlk1jTWJeW4YDJOzjRiyZM5rrB410baKfFNNA1ad0OGqWs6rZJa9XBSQEimcHoPu8hKh1%2BWXwlO7IDjbtOs0yE%2Fr8v1J2HVgGyWGRG%2Bd9DG6XNB8%2B4BywmFSD9wlKMYyJ7c0qzo7e5zwZFbz8eBhehVZUd8pZN3vspLsXBM8p6Dq0C3xlr6GuLLWKHZ8uetvBynFVvZR4FJi%2FbFRaDxGCK1UCzfIt9swQ4o3yiDvs1xCtUm9FugUjjFo0hLq9jgMjducL4E76%2F0yGVkyGzsvjuhO4yi5LB6AOFW4H82nm2PEOhvff0ZmIcqQuNe2NXcNA61xqogjUVF76sHYkYl3SeXsiVL%2B7BzZgT2go6CQXfWqN11%2F%2FzcpPDUM5qNIfya4XrseojdLRFm1PG4ytswwVhccPwIF%2BkLzcMtAiGVZ7tdg11FNIhyNUcMpK2hN7Tu3iNQz2jwNCzHput1N8Y2IijCGQrRyI1agJ5G0iR1UIiutVuPxnyojKLArkwh2Ch7z%2FNNWAKymlQBTHTf1VjStmrJ%2FncroIH6xW0zvGL82TU9Lb4NLAz7Epg35TDsUu0NuZ7mTA9Ezu8Y6iHKaTfvM2jgLpYZULrBYAP0jsNqSKS%2FVxbQPqSQmqkwmPCnxAY6pgFpmPVJ5NPlbTUNKP7LDERMoVP3J5VcrmbyX3rPp43x%2FbgP8rvvh47MHM6aPXDhYFdqvE%2BTbUGojOuGzPKHJ2f%2FDReib3v6BDNeKRjWx84HpNJQ8pquTSmnf9fxWBzsc1V4eHVrouJWefXT61kIy%2FfK4a%2FNFPPX7BE5PoWRuN%2Fkr9xHUuOM%2BMsDhC7GcnVTmjsqmcP9%2BLzjBv9uhAaP67fYEBRESofy&X-Amz-Signature=21ee2de96401a9fdfd9684b225c104836c54b3a8cb4d7efd03abf96fc480bd43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5AJCIG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVRcKBwiyEfmayWidMT8NiLUXHzGE9VKR0%2FPiJd45BEAiBDdiqx0B%2B6RyK1E3IlPx6yOyJQzQWbx2qutfn47cuW0yqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqC19YM9h3yu%2F6%2BjKtwDRT8XwIlk1jTWJeW4YDJOzjRiyZM5rrB410baKfFNNA1ad0OGqWs6rZJa9XBSQEimcHoPu8hKh1%2BWXwlO7IDjbtOs0yE%2Fr8v1J2HVgGyWGRG%2Bd9DG6XNB8%2B4BywmFSD9wlKMYyJ7c0qzo7e5zwZFbz8eBhehVZUd8pZN3vspLsXBM8p6Dq0C3xlr6GuLLWKHZ8uetvBynFVvZR4FJi%2FbFRaDxGCK1UCzfIt9swQ4o3yiDvs1xCtUm9FugUjjFo0hLq9jgMjducL4E76%2F0yGVkyGzsvjuhO4yi5LB6AOFW4H82nm2PEOhvff0ZmIcqQuNe2NXcNA61xqogjUVF76sHYkYl3SeXsiVL%2B7BzZgT2go6CQXfWqN11%2F%2FzcpPDUM5qNIfya4XrseojdLRFm1PG4ytswwVhccPwIF%2BkLzcMtAiGVZ7tdg11FNIhyNUcMpK2hN7Tu3iNQz2jwNCzHput1N8Y2IijCGQrRyI1agJ5G0iR1UIiutVuPxnyojKLArkwh2Ch7z%2FNNWAKymlQBTHTf1VjStmrJ%2FncroIH6xW0zvGL82TU9Lb4NLAz7Epg35TDsUu0NuZ7mTA9Ezu8Y6iHKaTfvM2jgLpYZULrBYAP0jsNqSKS%2FVxbQPqSQmqkwmPCnxAY6pgFpmPVJ5NPlbTUNKP7LDERMoVP3J5VcrmbyX3rPp43x%2FbgP8rvvh47MHM6aPXDhYFdqvE%2BTbUGojOuGzPKHJ2f%2FDReib3v6BDNeKRjWx84HpNJQ8pquTSmnf9fxWBzsc1V4eHVrouJWefXT61kIy%2FfK4a%2FNFPPX7BE5PoWRuN%2Fkr9xHUuOM%2BMsDhC7GcnVTmjsqmcP9%2BLzjBv9uhAaP67fYEBRESofy&X-Amz-Signature=703d04511f6a6be00d1d60d93719d16ed2ea6f691097888f24a673808d6c35b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5AJCIG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVRcKBwiyEfmayWidMT8NiLUXHzGE9VKR0%2FPiJd45BEAiBDdiqx0B%2B6RyK1E3IlPx6yOyJQzQWbx2qutfn47cuW0yqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqC19YM9h3yu%2F6%2BjKtwDRT8XwIlk1jTWJeW4YDJOzjRiyZM5rrB410baKfFNNA1ad0OGqWs6rZJa9XBSQEimcHoPu8hKh1%2BWXwlO7IDjbtOs0yE%2Fr8v1J2HVgGyWGRG%2Bd9DG6XNB8%2B4BywmFSD9wlKMYyJ7c0qzo7e5zwZFbz8eBhehVZUd8pZN3vspLsXBM8p6Dq0C3xlr6GuLLWKHZ8uetvBynFVvZR4FJi%2FbFRaDxGCK1UCzfIt9swQ4o3yiDvs1xCtUm9FugUjjFo0hLq9jgMjducL4E76%2F0yGVkyGzsvjuhO4yi5LB6AOFW4H82nm2PEOhvff0ZmIcqQuNe2NXcNA61xqogjUVF76sHYkYl3SeXsiVL%2B7BzZgT2go6CQXfWqN11%2F%2FzcpPDUM5qNIfya4XrseojdLRFm1PG4ytswwVhccPwIF%2BkLzcMtAiGVZ7tdg11FNIhyNUcMpK2hN7Tu3iNQz2jwNCzHput1N8Y2IijCGQrRyI1agJ5G0iR1UIiutVuPxnyojKLArkwh2Ch7z%2FNNWAKymlQBTHTf1VjStmrJ%2FncroIH6xW0zvGL82TU9Lb4NLAz7Epg35TDsUu0NuZ7mTA9Ezu8Y6iHKaTfvM2jgLpYZULrBYAP0jsNqSKS%2FVxbQPqSQmqkwmPCnxAY6pgFpmPVJ5NPlbTUNKP7LDERMoVP3J5VcrmbyX3rPp43x%2FbgP8rvvh47MHM6aPXDhYFdqvE%2BTbUGojOuGzPKHJ2f%2FDReib3v6BDNeKRjWx84HpNJQ8pquTSmnf9fxWBzsc1V4eHVrouJWefXT61kIy%2FfK4a%2FNFPPX7BE5PoWRuN%2Fkr9xHUuOM%2BMsDhC7GcnVTmjsqmcP9%2BLzjBv9uhAaP67fYEBRESofy&X-Amz-Signature=808302e1ee4405c09d8a225de3516e1ea13a9d9562a77eec71048fd76686f1fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5AJCIG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVRcKBwiyEfmayWidMT8NiLUXHzGE9VKR0%2FPiJd45BEAiBDdiqx0B%2B6RyK1E3IlPx6yOyJQzQWbx2qutfn47cuW0yqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqC19YM9h3yu%2F6%2BjKtwDRT8XwIlk1jTWJeW4YDJOzjRiyZM5rrB410baKfFNNA1ad0OGqWs6rZJa9XBSQEimcHoPu8hKh1%2BWXwlO7IDjbtOs0yE%2Fr8v1J2HVgGyWGRG%2Bd9DG6XNB8%2B4BywmFSD9wlKMYyJ7c0qzo7e5zwZFbz8eBhehVZUd8pZN3vspLsXBM8p6Dq0C3xlr6GuLLWKHZ8uetvBynFVvZR4FJi%2FbFRaDxGCK1UCzfIt9swQ4o3yiDvs1xCtUm9FugUjjFo0hLq9jgMjducL4E76%2F0yGVkyGzsvjuhO4yi5LB6AOFW4H82nm2PEOhvff0ZmIcqQuNe2NXcNA61xqogjUVF76sHYkYl3SeXsiVL%2B7BzZgT2go6CQXfWqN11%2F%2FzcpPDUM5qNIfya4XrseojdLRFm1PG4ytswwVhccPwIF%2BkLzcMtAiGVZ7tdg11FNIhyNUcMpK2hN7Tu3iNQz2jwNCzHput1N8Y2IijCGQrRyI1agJ5G0iR1UIiutVuPxnyojKLArkwh2Ch7z%2FNNWAKymlQBTHTf1VjStmrJ%2FncroIH6xW0zvGL82TU9Lb4NLAz7Epg35TDsUu0NuZ7mTA9Ezu8Y6iHKaTfvM2jgLpYZULrBYAP0jsNqSKS%2FVxbQPqSQmqkwmPCnxAY6pgFpmPVJ5NPlbTUNKP7LDERMoVP3J5VcrmbyX3rPp43x%2FbgP8rvvh47MHM6aPXDhYFdqvE%2BTbUGojOuGzPKHJ2f%2FDReib3v6BDNeKRjWx84HpNJQ8pquTSmnf9fxWBzsc1V4eHVrouJWefXT61kIy%2FfK4a%2FNFPPX7BE5PoWRuN%2Fkr9xHUuOM%2BMsDhC7GcnVTmjsqmcP9%2BLzjBv9uhAaP67fYEBRESofy&X-Amz-Signature=051ea2add903d6627e67a8f080b11e3f132d5fa9f6739f57977db3e9b37fe8a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5AJCIG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVRcKBwiyEfmayWidMT8NiLUXHzGE9VKR0%2FPiJd45BEAiBDdiqx0B%2B6RyK1E3IlPx6yOyJQzQWbx2qutfn47cuW0yqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqC19YM9h3yu%2F6%2BjKtwDRT8XwIlk1jTWJeW4YDJOzjRiyZM5rrB410baKfFNNA1ad0OGqWs6rZJa9XBSQEimcHoPu8hKh1%2BWXwlO7IDjbtOs0yE%2Fr8v1J2HVgGyWGRG%2Bd9DG6XNB8%2B4BywmFSD9wlKMYyJ7c0qzo7e5zwZFbz8eBhehVZUd8pZN3vspLsXBM8p6Dq0C3xlr6GuLLWKHZ8uetvBynFVvZR4FJi%2FbFRaDxGCK1UCzfIt9swQ4o3yiDvs1xCtUm9FugUjjFo0hLq9jgMjducL4E76%2F0yGVkyGzsvjuhO4yi5LB6AOFW4H82nm2PEOhvff0ZmIcqQuNe2NXcNA61xqogjUVF76sHYkYl3SeXsiVL%2B7BzZgT2go6CQXfWqN11%2F%2FzcpPDUM5qNIfya4XrseojdLRFm1PG4ytswwVhccPwIF%2BkLzcMtAiGVZ7tdg11FNIhyNUcMpK2hN7Tu3iNQz2jwNCzHput1N8Y2IijCGQrRyI1agJ5G0iR1UIiutVuPxnyojKLArkwh2Ch7z%2FNNWAKymlQBTHTf1VjStmrJ%2FncroIH6xW0zvGL82TU9Lb4NLAz7Epg35TDsUu0NuZ7mTA9Ezu8Y6iHKaTfvM2jgLpYZULrBYAP0jsNqSKS%2FVxbQPqSQmqkwmPCnxAY6pgFpmPVJ5NPlbTUNKP7LDERMoVP3J5VcrmbyX3rPp43x%2FbgP8rvvh47MHM6aPXDhYFdqvE%2BTbUGojOuGzPKHJ2f%2FDReib3v6BDNeKRjWx84HpNJQ8pquTSmnf9fxWBzsc1V4eHVrouJWefXT61kIy%2FfK4a%2FNFPPX7BE5PoWRuN%2Fkr9xHUuOM%2BMsDhC7GcnVTmjsqmcP9%2BLzjBv9uhAaP67fYEBRESofy&X-Amz-Signature=15c99bff5b5ef3dd572a5b8b0840c0661485101030da123b6870dfd5be9ee6f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5AJCIG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVRcKBwiyEfmayWidMT8NiLUXHzGE9VKR0%2FPiJd45BEAiBDdiqx0B%2B6RyK1E3IlPx6yOyJQzQWbx2qutfn47cuW0yqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqC19YM9h3yu%2F6%2BjKtwDRT8XwIlk1jTWJeW4YDJOzjRiyZM5rrB410baKfFNNA1ad0OGqWs6rZJa9XBSQEimcHoPu8hKh1%2BWXwlO7IDjbtOs0yE%2Fr8v1J2HVgGyWGRG%2Bd9DG6XNB8%2B4BywmFSD9wlKMYyJ7c0qzo7e5zwZFbz8eBhehVZUd8pZN3vspLsXBM8p6Dq0C3xlr6GuLLWKHZ8uetvBynFVvZR4FJi%2FbFRaDxGCK1UCzfIt9swQ4o3yiDvs1xCtUm9FugUjjFo0hLq9jgMjducL4E76%2F0yGVkyGzsvjuhO4yi5LB6AOFW4H82nm2PEOhvff0ZmIcqQuNe2NXcNA61xqogjUVF76sHYkYl3SeXsiVL%2B7BzZgT2go6CQXfWqN11%2F%2FzcpPDUM5qNIfya4XrseojdLRFm1PG4ytswwVhccPwIF%2BkLzcMtAiGVZ7tdg11FNIhyNUcMpK2hN7Tu3iNQz2jwNCzHput1N8Y2IijCGQrRyI1agJ5G0iR1UIiutVuPxnyojKLArkwh2Ch7z%2FNNWAKymlQBTHTf1VjStmrJ%2FncroIH6xW0zvGL82TU9Lb4NLAz7Epg35TDsUu0NuZ7mTA9Ezu8Y6iHKaTfvM2jgLpYZULrBYAP0jsNqSKS%2FVxbQPqSQmqkwmPCnxAY6pgFpmPVJ5NPlbTUNKP7LDERMoVP3J5VcrmbyX3rPp43x%2FbgP8rvvh47MHM6aPXDhYFdqvE%2BTbUGojOuGzPKHJ2f%2FDReib3v6BDNeKRjWx84HpNJQ8pquTSmnf9fxWBzsc1V4eHVrouJWefXT61kIy%2FfK4a%2FNFPPX7BE5PoWRuN%2Fkr9xHUuOM%2BMsDhC7GcnVTmjsqmcP9%2BLzjBv9uhAaP67fYEBRESofy&X-Amz-Signature=a9a3fc6ed364a78feebd869ec4b81d3aaf1388e92f1987526134dd5eaec667da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5AJCIG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVRcKBwiyEfmayWidMT8NiLUXHzGE9VKR0%2FPiJd45BEAiBDdiqx0B%2B6RyK1E3IlPx6yOyJQzQWbx2qutfn47cuW0yqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqC19YM9h3yu%2F6%2BjKtwDRT8XwIlk1jTWJeW4YDJOzjRiyZM5rrB410baKfFNNA1ad0OGqWs6rZJa9XBSQEimcHoPu8hKh1%2BWXwlO7IDjbtOs0yE%2Fr8v1J2HVgGyWGRG%2Bd9DG6XNB8%2B4BywmFSD9wlKMYyJ7c0qzo7e5zwZFbz8eBhehVZUd8pZN3vspLsXBM8p6Dq0C3xlr6GuLLWKHZ8uetvBynFVvZR4FJi%2FbFRaDxGCK1UCzfIt9swQ4o3yiDvs1xCtUm9FugUjjFo0hLq9jgMjducL4E76%2F0yGVkyGzsvjuhO4yi5LB6AOFW4H82nm2PEOhvff0ZmIcqQuNe2NXcNA61xqogjUVF76sHYkYl3SeXsiVL%2B7BzZgT2go6CQXfWqN11%2F%2FzcpPDUM5qNIfya4XrseojdLRFm1PG4ytswwVhccPwIF%2BkLzcMtAiGVZ7tdg11FNIhyNUcMpK2hN7Tu3iNQz2jwNCzHput1N8Y2IijCGQrRyI1agJ5G0iR1UIiutVuPxnyojKLArkwh2Ch7z%2FNNWAKymlQBTHTf1VjStmrJ%2FncroIH6xW0zvGL82TU9Lb4NLAz7Epg35TDsUu0NuZ7mTA9Ezu8Y6iHKaTfvM2jgLpYZULrBYAP0jsNqSKS%2FVxbQPqSQmqkwmPCnxAY6pgFpmPVJ5NPlbTUNKP7LDERMoVP3J5VcrmbyX3rPp43x%2FbgP8rvvh47MHM6aPXDhYFdqvE%2BTbUGojOuGzPKHJ2f%2FDReib3v6BDNeKRjWx84HpNJQ8pquTSmnf9fxWBzsc1V4eHVrouJWefXT61kIy%2FfK4a%2FNFPPX7BE5PoWRuN%2Fkr9xHUuOM%2BMsDhC7GcnVTmjsqmcP9%2BLzjBv9uhAaP67fYEBRESofy&X-Amz-Signature=7fd7c4c2642276e06d3ba411cc95c9c077ca9f2c90ccf66e966152fe7c9d1915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5AJCIG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVRcKBwiyEfmayWidMT8NiLUXHzGE9VKR0%2FPiJd45BEAiBDdiqx0B%2B6RyK1E3IlPx6yOyJQzQWbx2qutfn47cuW0yqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqC19YM9h3yu%2F6%2BjKtwDRT8XwIlk1jTWJeW4YDJOzjRiyZM5rrB410baKfFNNA1ad0OGqWs6rZJa9XBSQEimcHoPu8hKh1%2BWXwlO7IDjbtOs0yE%2Fr8v1J2HVgGyWGRG%2Bd9DG6XNB8%2B4BywmFSD9wlKMYyJ7c0qzo7e5zwZFbz8eBhehVZUd8pZN3vspLsXBM8p6Dq0C3xlr6GuLLWKHZ8uetvBynFVvZR4FJi%2FbFRaDxGCK1UCzfIt9swQ4o3yiDvs1xCtUm9FugUjjFo0hLq9jgMjducL4E76%2F0yGVkyGzsvjuhO4yi5LB6AOFW4H82nm2PEOhvff0ZmIcqQuNe2NXcNA61xqogjUVF76sHYkYl3SeXsiVL%2B7BzZgT2go6CQXfWqN11%2F%2FzcpPDUM5qNIfya4XrseojdLRFm1PG4ytswwVhccPwIF%2BkLzcMtAiGVZ7tdg11FNIhyNUcMpK2hN7Tu3iNQz2jwNCzHput1N8Y2IijCGQrRyI1agJ5G0iR1UIiutVuPxnyojKLArkwh2Ch7z%2FNNWAKymlQBTHTf1VjStmrJ%2FncroIH6xW0zvGL82TU9Lb4NLAz7Epg35TDsUu0NuZ7mTA9Ezu8Y6iHKaTfvM2jgLpYZULrBYAP0jsNqSKS%2FVxbQPqSQmqkwmPCnxAY6pgFpmPVJ5NPlbTUNKP7LDERMoVP3J5VcrmbyX3rPp43x%2FbgP8rvvh47MHM6aPXDhYFdqvE%2BTbUGojOuGzPKHJ2f%2FDReib3v6BDNeKRjWx84HpNJQ8pquTSmnf9fxWBzsc1V4eHVrouJWefXT61kIy%2FfK4a%2FNFPPX7BE5PoWRuN%2Fkr9xHUuOM%2BMsDhC7GcnVTmjsqmcP9%2BLzjBv9uhAaP67fYEBRESofy&X-Amz-Signature=31787ae1ba10913a8103beca0db5c1fdf496fbed24296295b8771d88aed7969a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
