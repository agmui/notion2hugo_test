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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5KL26S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIF2MwpqH2QRxSG3Y39Xfh%2BASdEeQw7zVpOl3FRmGsDiwAiEAjqdLfyFSmvY%2B7%2B4NwKGZEVOmyr4%2FjR5gKk%2FjUu8%2F3pAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGrdD8mb%2FGhThENylCrcA3cBVLGyHRJtjg17HJlfgyvRDxIYUDMlqhQkTGC%2F5B1RNWzljWBjNbPO8vqTaYfZCPhg8X4myQp2McXG%2B737VGwKOswvkg2VlurSP8b3sEhcxIYXtx1f9DLWSJfNr%2F9Ag5J5RQnMSD%2BAuhChOKwDc8JeTQXmA3qwsyaFMFFq5va%2BK7cE5YeYfQxhIAI83ZBXnjiBSFLzNHksAJcVYuPrYESUgAj5jIU8u1ShuEFvaveuqasMzZmG8lyh6wluZv%2FoEIKzjgp3y8Fxh0o9tgjFeB1Rb8ZuBecJ4JFB%2F6JmwMdD9pj650PjtJrToiRW5jqc%2FeF9UecdZNWNZO5nPgWjctZRCNZ0lMrXSaDMwklpUQIU7AahcVs2arm8Ovg9P%2F8KZezZrwn4Xkcq%2BokHTT83G87ocKAEQUdv00S8nuSXTvtnly2348uZWuZvUn%2BoRPpuobnndoZ9jLh59ZV7TuzqOvkN%2FQqXFzZktTioML0OhJJrM%2Fr95bSqFslMc1XavZJ%2Bx6sRji5DujKe7wW8hMZ%2BTM03Ga1VOXe8DE9daQtHVQcdBQAqR6qIdUcyIe0bNs4RmYDyAZYa7jF0bo6zlRxCfDl81HV6RNi6oDFBQHY2lksrKvFS8FyByd5FgL7RMJjVsr4GOqUBhvD3oBmf%2BQHseUN7Qli0OWbXhHT4FXrdfJqYl1IobPb5Ul%2BfWdvdI%2FHJpWK6NmpqeJBh9%2BGLQvXSbGfYDQin9M%2BBi9ObrYSo8FS8yPl7QljKsoUZwVT%2BTSjfCwwlc611gGKDL1a%2Bqf0TX1q%2FD8SRtUfnC5zGuyvesruKxMCEAj7Sk0g0JidXJP5WKdvVdRewL%2BKZGHhUWTd3iaw%2FYkjrE5IH%2Fss9&X-Amz-Signature=bea2e25f366e4c1fbdb6a03ea85564168087bd9762da83f429d6e110df3d01dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5KL26S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIF2MwpqH2QRxSG3Y39Xfh%2BASdEeQw7zVpOl3FRmGsDiwAiEAjqdLfyFSmvY%2B7%2B4NwKGZEVOmyr4%2FjR5gKk%2FjUu8%2F3pAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGrdD8mb%2FGhThENylCrcA3cBVLGyHRJtjg17HJlfgyvRDxIYUDMlqhQkTGC%2F5B1RNWzljWBjNbPO8vqTaYfZCPhg8X4myQp2McXG%2B737VGwKOswvkg2VlurSP8b3sEhcxIYXtx1f9DLWSJfNr%2F9Ag5J5RQnMSD%2BAuhChOKwDc8JeTQXmA3qwsyaFMFFq5va%2BK7cE5YeYfQxhIAI83ZBXnjiBSFLzNHksAJcVYuPrYESUgAj5jIU8u1ShuEFvaveuqasMzZmG8lyh6wluZv%2FoEIKzjgp3y8Fxh0o9tgjFeB1Rb8ZuBecJ4JFB%2F6JmwMdD9pj650PjtJrToiRW5jqc%2FeF9UecdZNWNZO5nPgWjctZRCNZ0lMrXSaDMwklpUQIU7AahcVs2arm8Ovg9P%2F8KZezZrwn4Xkcq%2BokHTT83G87ocKAEQUdv00S8nuSXTvtnly2348uZWuZvUn%2BoRPpuobnndoZ9jLh59ZV7TuzqOvkN%2FQqXFzZktTioML0OhJJrM%2Fr95bSqFslMc1XavZJ%2Bx6sRji5DujKe7wW8hMZ%2BTM03Ga1VOXe8DE9daQtHVQcdBQAqR6qIdUcyIe0bNs4RmYDyAZYa7jF0bo6zlRxCfDl81HV6RNi6oDFBQHY2lksrKvFS8FyByd5FgL7RMJjVsr4GOqUBhvD3oBmf%2BQHseUN7Qli0OWbXhHT4FXrdfJqYl1IobPb5Ul%2BfWdvdI%2FHJpWK6NmpqeJBh9%2BGLQvXSbGfYDQin9M%2BBi9ObrYSo8FS8yPl7QljKsoUZwVT%2BTSjfCwwlc611gGKDL1a%2Bqf0TX1q%2FD8SRtUfnC5zGuyvesruKxMCEAj7Sk0g0JidXJP5WKdvVdRewL%2BKZGHhUWTd3iaw%2FYkjrE5IH%2Fss9&X-Amz-Signature=ab2ce51d10bc4ba937c57da2ef9af32c68d202a0362d9f83d2e11f8d1bf4a8d4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5KL26S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIF2MwpqH2QRxSG3Y39Xfh%2BASdEeQw7zVpOl3FRmGsDiwAiEAjqdLfyFSmvY%2B7%2B4NwKGZEVOmyr4%2FjR5gKk%2FjUu8%2F3pAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGrdD8mb%2FGhThENylCrcA3cBVLGyHRJtjg17HJlfgyvRDxIYUDMlqhQkTGC%2F5B1RNWzljWBjNbPO8vqTaYfZCPhg8X4myQp2McXG%2B737VGwKOswvkg2VlurSP8b3sEhcxIYXtx1f9DLWSJfNr%2F9Ag5J5RQnMSD%2BAuhChOKwDc8JeTQXmA3qwsyaFMFFq5va%2BK7cE5YeYfQxhIAI83ZBXnjiBSFLzNHksAJcVYuPrYESUgAj5jIU8u1ShuEFvaveuqasMzZmG8lyh6wluZv%2FoEIKzjgp3y8Fxh0o9tgjFeB1Rb8ZuBecJ4JFB%2F6JmwMdD9pj650PjtJrToiRW5jqc%2FeF9UecdZNWNZO5nPgWjctZRCNZ0lMrXSaDMwklpUQIU7AahcVs2arm8Ovg9P%2F8KZezZrwn4Xkcq%2BokHTT83G87ocKAEQUdv00S8nuSXTvtnly2348uZWuZvUn%2BoRPpuobnndoZ9jLh59ZV7TuzqOvkN%2FQqXFzZktTioML0OhJJrM%2Fr95bSqFslMc1XavZJ%2Bx6sRji5DujKe7wW8hMZ%2BTM03Ga1VOXe8DE9daQtHVQcdBQAqR6qIdUcyIe0bNs4RmYDyAZYa7jF0bo6zlRxCfDl81HV6RNi6oDFBQHY2lksrKvFS8FyByd5FgL7RMJjVsr4GOqUBhvD3oBmf%2BQHseUN7Qli0OWbXhHT4FXrdfJqYl1IobPb5Ul%2BfWdvdI%2FHJpWK6NmpqeJBh9%2BGLQvXSbGfYDQin9M%2BBi9ObrYSo8FS8yPl7QljKsoUZwVT%2BTSjfCwwlc611gGKDL1a%2Bqf0TX1q%2FD8SRtUfnC5zGuyvesruKxMCEAj7Sk0g0JidXJP5WKdvVdRewL%2BKZGHhUWTd3iaw%2FYkjrE5IH%2Fss9&X-Amz-Signature=6182cfa719e97c28fda27b27c81e03e708a5153c95d1b447f1859f8cd9d1bb5b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5KL26S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIF2MwpqH2QRxSG3Y39Xfh%2BASdEeQw7zVpOl3FRmGsDiwAiEAjqdLfyFSmvY%2B7%2B4NwKGZEVOmyr4%2FjR5gKk%2FjUu8%2F3pAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGrdD8mb%2FGhThENylCrcA3cBVLGyHRJtjg17HJlfgyvRDxIYUDMlqhQkTGC%2F5B1RNWzljWBjNbPO8vqTaYfZCPhg8X4myQp2McXG%2B737VGwKOswvkg2VlurSP8b3sEhcxIYXtx1f9DLWSJfNr%2F9Ag5J5RQnMSD%2BAuhChOKwDc8JeTQXmA3qwsyaFMFFq5va%2BK7cE5YeYfQxhIAI83ZBXnjiBSFLzNHksAJcVYuPrYESUgAj5jIU8u1ShuEFvaveuqasMzZmG8lyh6wluZv%2FoEIKzjgp3y8Fxh0o9tgjFeB1Rb8ZuBecJ4JFB%2F6JmwMdD9pj650PjtJrToiRW5jqc%2FeF9UecdZNWNZO5nPgWjctZRCNZ0lMrXSaDMwklpUQIU7AahcVs2arm8Ovg9P%2F8KZezZrwn4Xkcq%2BokHTT83G87ocKAEQUdv00S8nuSXTvtnly2348uZWuZvUn%2BoRPpuobnndoZ9jLh59ZV7TuzqOvkN%2FQqXFzZktTioML0OhJJrM%2Fr95bSqFslMc1XavZJ%2Bx6sRji5DujKe7wW8hMZ%2BTM03Ga1VOXe8DE9daQtHVQcdBQAqR6qIdUcyIe0bNs4RmYDyAZYa7jF0bo6zlRxCfDl81HV6RNi6oDFBQHY2lksrKvFS8FyByd5FgL7RMJjVsr4GOqUBhvD3oBmf%2BQHseUN7Qli0OWbXhHT4FXrdfJqYl1IobPb5Ul%2BfWdvdI%2FHJpWK6NmpqeJBh9%2BGLQvXSbGfYDQin9M%2BBi9ObrYSo8FS8yPl7QljKsoUZwVT%2BTSjfCwwlc611gGKDL1a%2Bqf0TX1q%2FD8SRtUfnC5zGuyvesruKxMCEAj7Sk0g0JidXJP5WKdvVdRewL%2BKZGHhUWTd3iaw%2FYkjrE5IH%2Fss9&X-Amz-Signature=719d3f36c99bb79971f8fb7408ed5456da528235af18a0ca33010dd189bcdaca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5KL26S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIF2MwpqH2QRxSG3Y39Xfh%2BASdEeQw7zVpOl3FRmGsDiwAiEAjqdLfyFSmvY%2B7%2B4NwKGZEVOmyr4%2FjR5gKk%2FjUu8%2F3pAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGrdD8mb%2FGhThENylCrcA3cBVLGyHRJtjg17HJlfgyvRDxIYUDMlqhQkTGC%2F5B1RNWzljWBjNbPO8vqTaYfZCPhg8X4myQp2McXG%2B737VGwKOswvkg2VlurSP8b3sEhcxIYXtx1f9DLWSJfNr%2F9Ag5J5RQnMSD%2BAuhChOKwDc8JeTQXmA3qwsyaFMFFq5va%2BK7cE5YeYfQxhIAI83ZBXnjiBSFLzNHksAJcVYuPrYESUgAj5jIU8u1ShuEFvaveuqasMzZmG8lyh6wluZv%2FoEIKzjgp3y8Fxh0o9tgjFeB1Rb8ZuBecJ4JFB%2F6JmwMdD9pj650PjtJrToiRW5jqc%2FeF9UecdZNWNZO5nPgWjctZRCNZ0lMrXSaDMwklpUQIU7AahcVs2arm8Ovg9P%2F8KZezZrwn4Xkcq%2BokHTT83G87ocKAEQUdv00S8nuSXTvtnly2348uZWuZvUn%2BoRPpuobnndoZ9jLh59ZV7TuzqOvkN%2FQqXFzZktTioML0OhJJrM%2Fr95bSqFslMc1XavZJ%2Bx6sRji5DujKe7wW8hMZ%2BTM03Ga1VOXe8DE9daQtHVQcdBQAqR6qIdUcyIe0bNs4RmYDyAZYa7jF0bo6zlRxCfDl81HV6RNi6oDFBQHY2lksrKvFS8FyByd5FgL7RMJjVsr4GOqUBhvD3oBmf%2BQHseUN7Qli0OWbXhHT4FXrdfJqYl1IobPb5Ul%2BfWdvdI%2FHJpWK6NmpqeJBh9%2BGLQvXSbGfYDQin9M%2BBi9ObrYSo8FS8yPl7QljKsoUZwVT%2BTSjfCwwlc611gGKDL1a%2Bqf0TX1q%2FD8SRtUfnC5zGuyvesruKxMCEAj7Sk0g0JidXJP5WKdvVdRewL%2BKZGHhUWTd3iaw%2FYkjrE5IH%2Fss9&X-Amz-Signature=89c1823f966942cdec97ed30ac22dfd5ba9c29f095bf71572eca447ccfcb26f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5KL26S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIF2MwpqH2QRxSG3Y39Xfh%2BASdEeQw7zVpOl3FRmGsDiwAiEAjqdLfyFSmvY%2B7%2B4NwKGZEVOmyr4%2FjR5gKk%2FjUu8%2F3pAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGrdD8mb%2FGhThENylCrcA3cBVLGyHRJtjg17HJlfgyvRDxIYUDMlqhQkTGC%2F5B1RNWzljWBjNbPO8vqTaYfZCPhg8X4myQp2McXG%2B737VGwKOswvkg2VlurSP8b3sEhcxIYXtx1f9DLWSJfNr%2F9Ag5J5RQnMSD%2BAuhChOKwDc8JeTQXmA3qwsyaFMFFq5va%2BK7cE5YeYfQxhIAI83ZBXnjiBSFLzNHksAJcVYuPrYESUgAj5jIU8u1ShuEFvaveuqasMzZmG8lyh6wluZv%2FoEIKzjgp3y8Fxh0o9tgjFeB1Rb8ZuBecJ4JFB%2F6JmwMdD9pj650PjtJrToiRW5jqc%2FeF9UecdZNWNZO5nPgWjctZRCNZ0lMrXSaDMwklpUQIU7AahcVs2arm8Ovg9P%2F8KZezZrwn4Xkcq%2BokHTT83G87ocKAEQUdv00S8nuSXTvtnly2348uZWuZvUn%2BoRPpuobnndoZ9jLh59ZV7TuzqOvkN%2FQqXFzZktTioML0OhJJrM%2Fr95bSqFslMc1XavZJ%2Bx6sRji5DujKe7wW8hMZ%2BTM03Ga1VOXe8DE9daQtHVQcdBQAqR6qIdUcyIe0bNs4RmYDyAZYa7jF0bo6zlRxCfDl81HV6RNi6oDFBQHY2lksrKvFS8FyByd5FgL7RMJjVsr4GOqUBhvD3oBmf%2BQHseUN7Qli0OWbXhHT4FXrdfJqYl1IobPb5Ul%2BfWdvdI%2FHJpWK6NmpqeJBh9%2BGLQvXSbGfYDQin9M%2BBi9ObrYSo8FS8yPl7QljKsoUZwVT%2BTSjfCwwlc611gGKDL1a%2Bqf0TX1q%2FD8SRtUfnC5zGuyvesruKxMCEAj7Sk0g0JidXJP5WKdvVdRewL%2BKZGHhUWTd3iaw%2FYkjrE5IH%2Fss9&X-Amz-Signature=b9e0b59858adb88115d76fa4042344c19455eab7cc3a6a9637d1d5a76084c1d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5KL26S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIF2MwpqH2QRxSG3Y39Xfh%2BASdEeQw7zVpOl3FRmGsDiwAiEAjqdLfyFSmvY%2B7%2B4NwKGZEVOmyr4%2FjR5gKk%2FjUu8%2F3pAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGrdD8mb%2FGhThENylCrcA3cBVLGyHRJtjg17HJlfgyvRDxIYUDMlqhQkTGC%2F5B1RNWzljWBjNbPO8vqTaYfZCPhg8X4myQp2McXG%2B737VGwKOswvkg2VlurSP8b3sEhcxIYXtx1f9DLWSJfNr%2F9Ag5J5RQnMSD%2BAuhChOKwDc8JeTQXmA3qwsyaFMFFq5va%2BK7cE5YeYfQxhIAI83ZBXnjiBSFLzNHksAJcVYuPrYESUgAj5jIU8u1ShuEFvaveuqasMzZmG8lyh6wluZv%2FoEIKzjgp3y8Fxh0o9tgjFeB1Rb8ZuBecJ4JFB%2F6JmwMdD9pj650PjtJrToiRW5jqc%2FeF9UecdZNWNZO5nPgWjctZRCNZ0lMrXSaDMwklpUQIU7AahcVs2arm8Ovg9P%2F8KZezZrwn4Xkcq%2BokHTT83G87ocKAEQUdv00S8nuSXTvtnly2348uZWuZvUn%2BoRPpuobnndoZ9jLh59ZV7TuzqOvkN%2FQqXFzZktTioML0OhJJrM%2Fr95bSqFslMc1XavZJ%2Bx6sRji5DujKe7wW8hMZ%2BTM03Ga1VOXe8DE9daQtHVQcdBQAqR6qIdUcyIe0bNs4RmYDyAZYa7jF0bo6zlRxCfDl81HV6RNi6oDFBQHY2lksrKvFS8FyByd5FgL7RMJjVsr4GOqUBhvD3oBmf%2BQHseUN7Qli0OWbXhHT4FXrdfJqYl1IobPb5Ul%2BfWdvdI%2FHJpWK6NmpqeJBh9%2BGLQvXSbGfYDQin9M%2BBi9ObrYSo8FS8yPl7QljKsoUZwVT%2BTSjfCwwlc611gGKDL1a%2Bqf0TX1q%2FD8SRtUfnC5zGuyvesruKxMCEAj7Sk0g0JidXJP5WKdvVdRewL%2BKZGHhUWTd3iaw%2FYkjrE5IH%2Fss9&X-Amz-Signature=f5798fcd097bdd0c92595c662dfe50dda54913e03bca83d7873cb149c88a4ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5KL26S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIF2MwpqH2QRxSG3Y39Xfh%2BASdEeQw7zVpOl3FRmGsDiwAiEAjqdLfyFSmvY%2B7%2B4NwKGZEVOmyr4%2FjR5gKk%2FjUu8%2F3pAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGrdD8mb%2FGhThENylCrcA3cBVLGyHRJtjg17HJlfgyvRDxIYUDMlqhQkTGC%2F5B1RNWzljWBjNbPO8vqTaYfZCPhg8X4myQp2McXG%2B737VGwKOswvkg2VlurSP8b3sEhcxIYXtx1f9DLWSJfNr%2F9Ag5J5RQnMSD%2BAuhChOKwDc8JeTQXmA3qwsyaFMFFq5va%2BK7cE5YeYfQxhIAI83ZBXnjiBSFLzNHksAJcVYuPrYESUgAj5jIU8u1ShuEFvaveuqasMzZmG8lyh6wluZv%2FoEIKzjgp3y8Fxh0o9tgjFeB1Rb8ZuBecJ4JFB%2F6JmwMdD9pj650PjtJrToiRW5jqc%2FeF9UecdZNWNZO5nPgWjctZRCNZ0lMrXSaDMwklpUQIU7AahcVs2arm8Ovg9P%2F8KZezZrwn4Xkcq%2BokHTT83G87ocKAEQUdv00S8nuSXTvtnly2348uZWuZvUn%2BoRPpuobnndoZ9jLh59ZV7TuzqOvkN%2FQqXFzZktTioML0OhJJrM%2Fr95bSqFslMc1XavZJ%2Bx6sRji5DujKe7wW8hMZ%2BTM03Ga1VOXe8DE9daQtHVQcdBQAqR6qIdUcyIe0bNs4RmYDyAZYa7jF0bo6zlRxCfDl81HV6RNi6oDFBQHY2lksrKvFS8FyByd5FgL7RMJjVsr4GOqUBhvD3oBmf%2BQHseUN7Qli0OWbXhHT4FXrdfJqYl1IobPb5Ul%2BfWdvdI%2FHJpWK6NmpqeJBh9%2BGLQvXSbGfYDQin9M%2BBi9ObrYSo8FS8yPl7QljKsoUZwVT%2BTSjfCwwlc611gGKDL1a%2Bqf0TX1q%2FD8SRtUfnC5zGuyvesruKxMCEAj7Sk0g0JidXJP5WKdvVdRewL%2BKZGHhUWTd3iaw%2FYkjrE5IH%2Fss9&X-Amz-Signature=165cbfcce71f6f845ba16f65add4db1ca81af4a36bf85f8ae289b90b7c32b551&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
