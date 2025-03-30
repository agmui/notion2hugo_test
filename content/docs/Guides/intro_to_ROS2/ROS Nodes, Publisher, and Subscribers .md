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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOVZ6B6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCU6xR95RU%2B7ZipS1TaXu7pl54DsioWkBdWYKP9ODp6DAIhAKUVC5imAlNcUjq0RR%2F4dkMJOWLQZ2Q8Ju%2FT3kFxzDyQKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLqRqRNAYSl7VcvVIq3AP%2Ffr5EJH8t92ZvtsL2H6xAhsC5v8%2BpkGOI7kyq0wj1xBxjCjn5rffwKTWI9etQSewmgzisL2528jU4%2BGeJ1gR1VeMPITzPVhegTc1DAaz718F%2FGHFfoZ6H8dNp5EmoP7ZdX1rvH0aJeNxIzIRSJ3exSXfDiKwrXizTj6zUi3H4T2M2msJNcrssXTqz%2F%2FbJkIPQmSptdeWIYzgRxpcqfOdV8u%2BSJoPa%2BoMCKLs%2F4fgcfrps6XsYcUfbWC%2FShnWLq2IQNaLFbrU4zEGfPMNgg0vzh0D66WYr5dtbztFFYr3sl3SjYi5lOlVxS3mRwAhAJyIQmO0q0wUEyAKKrPD2Us%2B4DOxBGsgYWM25NxhCNwp1Y%2FjDG%2F1y8FQRb%2FT5wOhn%2Fadgp%2BWyzLF92DQDBdWtAflWAicP8ZDk0okZdptiQQy%2BpSLEnLbkH79sbRlpYTUqxGk9z1rzNyqGXUKysLz79kw0Hb49SZeqlAZ2rXAD6At8HHpql9BJDx5MFWfkjwX3SfU2aXeE%2FGPtEdUYfH1MBT6eRaoxb53eNqgHi9CeVl75x8cUNcg3jwVjzOoL82ogvQDVtpqq0JHzQIMMPwBIzQFY1F3p0g755npCDD7uiqM%2Bew1sKsxhOZ5Xa7xzCjCU0aK%2FBjqkAXN3DDaUu7lG7nz8LRHYifpmE0tN0m%2F%2F3pkI%2Bs45107rt%2BrpXddrEhbjQfLztvmuQOooIahXrpOM0ei%2B%2BhOP4HDwwZcCRiPTE438LGhYdPkGBhAVtrsvvSddvnIzQ19bbGF4dwdVHE2uVT5hY%2B7liGOBh6yJJZJj4soJVv9q5ZzmIDiuH7K8ZRw9RZ%2Fd%2BhCq5qBR3N95jIAaRMkm3tMxbSgQkhpS&X-Amz-Signature=6f9cbadedd282cb1f35ddd2f718ae3f175ccc3b4e4150d33429e950a88fcc6e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOVZ6B6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCU6xR95RU%2B7ZipS1TaXu7pl54DsioWkBdWYKP9ODp6DAIhAKUVC5imAlNcUjq0RR%2F4dkMJOWLQZ2Q8Ju%2FT3kFxzDyQKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLqRqRNAYSl7VcvVIq3AP%2Ffr5EJH8t92ZvtsL2H6xAhsC5v8%2BpkGOI7kyq0wj1xBxjCjn5rffwKTWI9etQSewmgzisL2528jU4%2BGeJ1gR1VeMPITzPVhegTc1DAaz718F%2FGHFfoZ6H8dNp5EmoP7ZdX1rvH0aJeNxIzIRSJ3exSXfDiKwrXizTj6zUi3H4T2M2msJNcrssXTqz%2F%2FbJkIPQmSptdeWIYzgRxpcqfOdV8u%2BSJoPa%2BoMCKLs%2F4fgcfrps6XsYcUfbWC%2FShnWLq2IQNaLFbrU4zEGfPMNgg0vzh0D66WYr5dtbztFFYr3sl3SjYi5lOlVxS3mRwAhAJyIQmO0q0wUEyAKKrPD2Us%2B4DOxBGsgYWM25NxhCNwp1Y%2FjDG%2F1y8FQRb%2FT5wOhn%2Fadgp%2BWyzLF92DQDBdWtAflWAicP8ZDk0okZdptiQQy%2BpSLEnLbkH79sbRlpYTUqxGk9z1rzNyqGXUKysLz79kw0Hb49SZeqlAZ2rXAD6At8HHpql9BJDx5MFWfkjwX3SfU2aXeE%2FGPtEdUYfH1MBT6eRaoxb53eNqgHi9CeVl75x8cUNcg3jwVjzOoL82ogvQDVtpqq0JHzQIMMPwBIzQFY1F3p0g755npCDD7uiqM%2Bew1sKsxhOZ5Xa7xzCjCU0aK%2FBjqkAXN3DDaUu7lG7nz8LRHYifpmE0tN0m%2F%2F3pkI%2Bs45107rt%2BrpXddrEhbjQfLztvmuQOooIahXrpOM0ei%2B%2BhOP4HDwwZcCRiPTE438LGhYdPkGBhAVtrsvvSddvnIzQ19bbGF4dwdVHE2uVT5hY%2B7liGOBh6yJJZJj4soJVv9q5ZzmIDiuH7K8ZRw9RZ%2Fd%2BhCq5qBR3N95jIAaRMkm3tMxbSgQkhpS&X-Amz-Signature=fb3c1c056b8dd020ade1c4c3d14bec607ebf20e32aab7ea74b00baa946a389e0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOVZ6B6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCU6xR95RU%2B7ZipS1TaXu7pl54DsioWkBdWYKP9ODp6DAIhAKUVC5imAlNcUjq0RR%2F4dkMJOWLQZ2Q8Ju%2FT3kFxzDyQKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLqRqRNAYSl7VcvVIq3AP%2Ffr5EJH8t92ZvtsL2H6xAhsC5v8%2BpkGOI7kyq0wj1xBxjCjn5rffwKTWI9etQSewmgzisL2528jU4%2BGeJ1gR1VeMPITzPVhegTc1DAaz718F%2FGHFfoZ6H8dNp5EmoP7ZdX1rvH0aJeNxIzIRSJ3exSXfDiKwrXizTj6zUi3H4T2M2msJNcrssXTqz%2F%2FbJkIPQmSptdeWIYzgRxpcqfOdV8u%2BSJoPa%2BoMCKLs%2F4fgcfrps6XsYcUfbWC%2FShnWLq2IQNaLFbrU4zEGfPMNgg0vzh0D66WYr5dtbztFFYr3sl3SjYi5lOlVxS3mRwAhAJyIQmO0q0wUEyAKKrPD2Us%2B4DOxBGsgYWM25NxhCNwp1Y%2FjDG%2F1y8FQRb%2FT5wOhn%2Fadgp%2BWyzLF92DQDBdWtAflWAicP8ZDk0okZdptiQQy%2BpSLEnLbkH79sbRlpYTUqxGk9z1rzNyqGXUKysLz79kw0Hb49SZeqlAZ2rXAD6At8HHpql9BJDx5MFWfkjwX3SfU2aXeE%2FGPtEdUYfH1MBT6eRaoxb53eNqgHi9CeVl75x8cUNcg3jwVjzOoL82ogvQDVtpqq0JHzQIMMPwBIzQFY1F3p0g755npCDD7uiqM%2Bew1sKsxhOZ5Xa7xzCjCU0aK%2FBjqkAXN3DDaUu7lG7nz8LRHYifpmE0tN0m%2F%2F3pkI%2Bs45107rt%2BrpXddrEhbjQfLztvmuQOooIahXrpOM0ei%2B%2BhOP4HDwwZcCRiPTE438LGhYdPkGBhAVtrsvvSddvnIzQ19bbGF4dwdVHE2uVT5hY%2B7liGOBh6yJJZJj4soJVv9q5ZzmIDiuH7K8ZRw9RZ%2Fd%2BhCq5qBR3N95jIAaRMkm3tMxbSgQkhpS&X-Amz-Signature=6a12f6750bacace45fec5cc09013f307263de8cd94eafa55f21766b2921bf0d1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOVZ6B6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCU6xR95RU%2B7ZipS1TaXu7pl54DsioWkBdWYKP9ODp6DAIhAKUVC5imAlNcUjq0RR%2F4dkMJOWLQZ2Q8Ju%2FT3kFxzDyQKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLqRqRNAYSl7VcvVIq3AP%2Ffr5EJH8t92ZvtsL2H6xAhsC5v8%2BpkGOI7kyq0wj1xBxjCjn5rffwKTWI9etQSewmgzisL2528jU4%2BGeJ1gR1VeMPITzPVhegTc1DAaz718F%2FGHFfoZ6H8dNp5EmoP7ZdX1rvH0aJeNxIzIRSJ3exSXfDiKwrXizTj6zUi3H4T2M2msJNcrssXTqz%2F%2FbJkIPQmSptdeWIYzgRxpcqfOdV8u%2BSJoPa%2BoMCKLs%2F4fgcfrps6XsYcUfbWC%2FShnWLq2IQNaLFbrU4zEGfPMNgg0vzh0D66WYr5dtbztFFYr3sl3SjYi5lOlVxS3mRwAhAJyIQmO0q0wUEyAKKrPD2Us%2B4DOxBGsgYWM25NxhCNwp1Y%2FjDG%2F1y8FQRb%2FT5wOhn%2Fadgp%2BWyzLF92DQDBdWtAflWAicP8ZDk0okZdptiQQy%2BpSLEnLbkH79sbRlpYTUqxGk9z1rzNyqGXUKysLz79kw0Hb49SZeqlAZ2rXAD6At8HHpql9BJDx5MFWfkjwX3SfU2aXeE%2FGPtEdUYfH1MBT6eRaoxb53eNqgHi9CeVl75x8cUNcg3jwVjzOoL82ogvQDVtpqq0JHzQIMMPwBIzQFY1F3p0g755npCDD7uiqM%2Bew1sKsxhOZ5Xa7xzCjCU0aK%2FBjqkAXN3DDaUu7lG7nz8LRHYifpmE0tN0m%2F%2F3pkI%2Bs45107rt%2BrpXddrEhbjQfLztvmuQOooIahXrpOM0ei%2B%2BhOP4HDwwZcCRiPTE438LGhYdPkGBhAVtrsvvSddvnIzQ19bbGF4dwdVHE2uVT5hY%2B7liGOBh6yJJZJj4soJVv9q5ZzmIDiuH7K8ZRw9RZ%2Fd%2BhCq5qBR3N95jIAaRMkm3tMxbSgQkhpS&X-Amz-Signature=adda0381c47e36ddc6dca30b2aaae7542f6aac017fa154b10b2d90c641157f83&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOVZ6B6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCU6xR95RU%2B7ZipS1TaXu7pl54DsioWkBdWYKP9ODp6DAIhAKUVC5imAlNcUjq0RR%2F4dkMJOWLQZ2Q8Ju%2FT3kFxzDyQKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLqRqRNAYSl7VcvVIq3AP%2Ffr5EJH8t92ZvtsL2H6xAhsC5v8%2BpkGOI7kyq0wj1xBxjCjn5rffwKTWI9etQSewmgzisL2528jU4%2BGeJ1gR1VeMPITzPVhegTc1DAaz718F%2FGHFfoZ6H8dNp5EmoP7ZdX1rvH0aJeNxIzIRSJ3exSXfDiKwrXizTj6zUi3H4T2M2msJNcrssXTqz%2F%2FbJkIPQmSptdeWIYzgRxpcqfOdV8u%2BSJoPa%2BoMCKLs%2F4fgcfrps6XsYcUfbWC%2FShnWLq2IQNaLFbrU4zEGfPMNgg0vzh0D66WYr5dtbztFFYr3sl3SjYi5lOlVxS3mRwAhAJyIQmO0q0wUEyAKKrPD2Us%2B4DOxBGsgYWM25NxhCNwp1Y%2FjDG%2F1y8FQRb%2FT5wOhn%2Fadgp%2BWyzLF92DQDBdWtAflWAicP8ZDk0okZdptiQQy%2BpSLEnLbkH79sbRlpYTUqxGk9z1rzNyqGXUKysLz79kw0Hb49SZeqlAZ2rXAD6At8HHpql9BJDx5MFWfkjwX3SfU2aXeE%2FGPtEdUYfH1MBT6eRaoxb53eNqgHi9CeVl75x8cUNcg3jwVjzOoL82ogvQDVtpqq0JHzQIMMPwBIzQFY1F3p0g755npCDD7uiqM%2Bew1sKsxhOZ5Xa7xzCjCU0aK%2FBjqkAXN3DDaUu7lG7nz8LRHYifpmE0tN0m%2F%2F3pkI%2Bs45107rt%2BrpXddrEhbjQfLztvmuQOooIahXrpOM0ei%2B%2BhOP4HDwwZcCRiPTE438LGhYdPkGBhAVtrsvvSddvnIzQ19bbGF4dwdVHE2uVT5hY%2B7liGOBh6yJJZJj4soJVv9q5ZzmIDiuH7K8ZRw9RZ%2Fd%2BhCq5qBR3N95jIAaRMkm3tMxbSgQkhpS&X-Amz-Signature=0cf063df08bb92997fca96edec74bf02ff10d6af998ffd109968b4b009404c30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOVZ6B6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCU6xR95RU%2B7ZipS1TaXu7pl54DsioWkBdWYKP9ODp6DAIhAKUVC5imAlNcUjq0RR%2F4dkMJOWLQZ2Q8Ju%2FT3kFxzDyQKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLqRqRNAYSl7VcvVIq3AP%2Ffr5EJH8t92ZvtsL2H6xAhsC5v8%2BpkGOI7kyq0wj1xBxjCjn5rffwKTWI9etQSewmgzisL2528jU4%2BGeJ1gR1VeMPITzPVhegTc1DAaz718F%2FGHFfoZ6H8dNp5EmoP7ZdX1rvH0aJeNxIzIRSJ3exSXfDiKwrXizTj6zUi3H4T2M2msJNcrssXTqz%2F%2FbJkIPQmSptdeWIYzgRxpcqfOdV8u%2BSJoPa%2BoMCKLs%2F4fgcfrps6XsYcUfbWC%2FShnWLq2IQNaLFbrU4zEGfPMNgg0vzh0D66WYr5dtbztFFYr3sl3SjYi5lOlVxS3mRwAhAJyIQmO0q0wUEyAKKrPD2Us%2B4DOxBGsgYWM25NxhCNwp1Y%2FjDG%2F1y8FQRb%2FT5wOhn%2Fadgp%2BWyzLF92DQDBdWtAflWAicP8ZDk0okZdptiQQy%2BpSLEnLbkH79sbRlpYTUqxGk9z1rzNyqGXUKysLz79kw0Hb49SZeqlAZ2rXAD6At8HHpql9BJDx5MFWfkjwX3SfU2aXeE%2FGPtEdUYfH1MBT6eRaoxb53eNqgHi9CeVl75x8cUNcg3jwVjzOoL82ogvQDVtpqq0JHzQIMMPwBIzQFY1F3p0g755npCDD7uiqM%2Bew1sKsxhOZ5Xa7xzCjCU0aK%2FBjqkAXN3DDaUu7lG7nz8LRHYifpmE0tN0m%2F%2F3pkI%2Bs45107rt%2BrpXddrEhbjQfLztvmuQOooIahXrpOM0ei%2B%2BhOP4HDwwZcCRiPTE438LGhYdPkGBhAVtrsvvSddvnIzQ19bbGF4dwdVHE2uVT5hY%2B7liGOBh6yJJZJj4soJVv9q5ZzmIDiuH7K8ZRw9RZ%2Fd%2BhCq5qBR3N95jIAaRMkm3tMxbSgQkhpS&X-Amz-Signature=bb948a94d9d0540e9fab6183810ed11e1ce1d11a5a5e1eb6a79843d9f75b0ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOVZ6B6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCU6xR95RU%2B7ZipS1TaXu7pl54DsioWkBdWYKP9ODp6DAIhAKUVC5imAlNcUjq0RR%2F4dkMJOWLQZ2Q8Ju%2FT3kFxzDyQKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLqRqRNAYSl7VcvVIq3AP%2Ffr5EJH8t92ZvtsL2H6xAhsC5v8%2BpkGOI7kyq0wj1xBxjCjn5rffwKTWI9etQSewmgzisL2528jU4%2BGeJ1gR1VeMPITzPVhegTc1DAaz718F%2FGHFfoZ6H8dNp5EmoP7ZdX1rvH0aJeNxIzIRSJ3exSXfDiKwrXizTj6zUi3H4T2M2msJNcrssXTqz%2F%2FbJkIPQmSptdeWIYzgRxpcqfOdV8u%2BSJoPa%2BoMCKLs%2F4fgcfrps6XsYcUfbWC%2FShnWLq2IQNaLFbrU4zEGfPMNgg0vzh0D66WYr5dtbztFFYr3sl3SjYi5lOlVxS3mRwAhAJyIQmO0q0wUEyAKKrPD2Us%2B4DOxBGsgYWM25NxhCNwp1Y%2FjDG%2F1y8FQRb%2FT5wOhn%2Fadgp%2BWyzLF92DQDBdWtAflWAicP8ZDk0okZdptiQQy%2BpSLEnLbkH79sbRlpYTUqxGk9z1rzNyqGXUKysLz79kw0Hb49SZeqlAZ2rXAD6At8HHpql9BJDx5MFWfkjwX3SfU2aXeE%2FGPtEdUYfH1MBT6eRaoxb53eNqgHi9CeVl75x8cUNcg3jwVjzOoL82ogvQDVtpqq0JHzQIMMPwBIzQFY1F3p0g755npCDD7uiqM%2Bew1sKsxhOZ5Xa7xzCjCU0aK%2FBjqkAXN3DDaUu7lG7nz8LRHYifpmE0tN0m%2F%2F3pkI%2Bs45107rt%2BrpXddrEhbjQfLztvmuQOooIahXrpOM0ei%2B%2BhOP4HDwwZcCRiPTE438LGhYdPkGBhAVtrsvvSddvnIzQ19bbGF4dwdVHE2uVT5hY%2B7liGOBh6yJJZJj4soJVv9q5ZzmIDiuH7K8ZRw9RZ%2Fd%2BhCq5qBR3N95jIAaRMkm3tMxbSgQkhpS&X-Amz-Signature=40f320cd47afb23f62216c3772ebd680c4cd43c552b3a57e35bd8161b5b49baf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOVZ6B6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCU6xR95RU%2B7ZipS1TaXu7pl54DsioWkBdWYKP9ODp6DAIhAKUVC5imAlNcUjq0RR%2F4dkMJOWLQZ2Q8Ju%2FT3kFxzDyQKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLqRqRNAYSl7VcvVIq3AP%2Ffr5EJH8t92ZvtsL2H6xAhsC5v8%2BpkGOI7kyq0wj1xBxjCjn5rffwKTWI9etQSewmgzisL2528jU4%2BGeJ1gR1VeMPITzPVhegTc1DAaz718F%2FGHFfoZ6H8dNp5EmoP7ZdX1rvH0aJeNxIzIRSJ3exSXfDiKwrXizTj6zUi3H4T2M2msJNcrssXTqz%2F%2FbJkIPQmSptdeWIYzgRxpcqfOdV8u%2BSJoPa%2BoMCKLs%2F4fgcfrps6XsYcUfbWC%2FShnWLq2IQNaLFbrU4zEGfPMNgg0vzh0D66WYr5dtbztFFYr3sl3SjYi5lOlVxS3mRwAhAJyIQmO0q0wUEyAKKrPD2Us%2B4DOxBGsgYWM25NxhCNwp1Y%2FjDG%2F1y8FQRb%2FT5wOhn%2Fadgp%2BWyzLF92DQDBdWtAflWAicP8ZDk0okZdptiQQy%2BpSLEnLbkH79sbRlpYTUqxGk9z1rzNyqGXUKysLz79kw0Hb49SZeqlAZ2rXAD6At8HHpql9BJDx5MFWfkjwX3SfU2aXeE%2FGPtEdUYfH1MBT6eRaoxb53eNqgHi9CeVl75x8cUNcg3jwVjzOoL82ogvQDVtpqq0JHzQIMMPwBIzQFY1F3p0g755npCDD7uiqM%2Bew1sKsxhOZ5Xa7xzCjCU0aK%2FBjqkAXN3DDaUu7lG7nz8LRHYifpmE0tN0m%2F%2F3pkI%2Bs45107rt%2BrpXddrEhbjQfLztvmuQOooIahXrpOM0ei%2B%2BhOP4HDwwZcCRiPTE438LGhYdPkGBhAVtrsvvSddvnIzQ19bbGF4dwdVHE2uVT5hY%2B7liGOBh6yJJZJj4soJVv9q5ZzmIDiuH7K8ZRw9RZ%2Fd%2BhCq5qBR3N95jIAaRMkm3tMxbSgQkhpS&X-Amz-Signature=f06f6de44fa9ccb4cb486cf041593db17e06ec69db29fda86ffb38863e38c1ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
