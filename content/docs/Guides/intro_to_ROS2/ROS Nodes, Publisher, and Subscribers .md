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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKXK7PM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyAaNKtTn2Bk56o9OYhRE3yU4WWimQNkm18AnRxDzJUAiBEFkFNu0kPzLqbzLtrzI13Rh5ioBhyUH1tbt9oR%2BV8LCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI3ZAxOc3lt6eaqEtKtwD4jZIsQWyUIQebqvLPuqPsGtK%2FqjgCvC50chJAqQMRW9BahUBSLUcjPecBkhjMjvEWlNycClJBhgisN7uChaGTbkf121fgFdHwgE2pv%2BKrKVYurFGtPB5snFCBFOlvhCM3ReFr4Yf8tnzDdSSY5Z7PB9jPMxw5YzB92imLsFdpmevriYiQ%2FUW19mRmEHgd%2FQqy51NI2ozp%2FaEXJJBddcEj7CChvFXdI1xpVr2XSJPIlCL4mOGmY7Ddgq3EHNO8nH4106cXHxa%2BkJ6Zj2NhY8cjCwmJ7MuAbwmuQxt7aM9CllMGCPizJOh7wdEtN9iB4h9yOP478MEpQAwr4wU2PhE93WZXABgszMIdyz7iNRWmfmroKlNRf6F1pAORbfi8Usm9YEhc%2Bbz1gFZ53MrFQdpmIjgj%2FNiAGC1i7cfOklpUe8Qp6Txi8HehxGnifXNn19%2Flno7Z9%2FY61rk%2F1vpM6Pm8GVyhxDrw1TN4JWgEXBwk8XbyzY5W%2BhOfl9Xa6yg%2FAtD0RbxDWyZd7%2FHycVxwudrK8w1SRT5krnCIzaWlwEJlCFeP8pXrBIzBCZ4HbSxlLZZQ3RezG1F2aHhL%2BNBX6DAbEV79grsJcC9KGJ8It1lTGMnC%2BpJn9wiRpTneW0wxa6nvQY6pgG8jIubxtYxU1BLqs7xuRFYp%2BNkJTk0TrAdu%2FwyJ6Gi2B9ZAdn2y2SyxyojVDDpVMwu25IpSPHusR7w7OefI0JC7k6kiV8vPXErM3gXfl%2BvlZwjBCia4TX%2BtCtvwaQZJgIoiGhN7vJQ%2FOs%2FxYb7Umzc2eKeM4khrXtWTg5Ul5FH1V6%2BrbqKtCjwQzYPVrPyMwAaiCvEMjvWkFyp2V5IWBGJhtNNMVET&X-Amz-Signature=bfee617ef7c39fe37c22929c84f0129eed4be616cf081d5feaa3afd060f1e222&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKXK7PM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyAaNKtTn2Bk56o9OYhRE3yU4WWimQNkm18AnRxDzJUAiBEFkFNu0kPzLqbzLtrzI13Rh5ioBhyUH1tbt9oR%2BV8LCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI3ZAxOc3lt6eaqEtKtwD4jZIsQWyUIQebqvLPuqPsGtK%2FqjgCvC50chJAqQMRW9BahUBSLUcjPecBkhjMjvEWlNycClJBhgisN7uChaGTbkf121fgFdHwgE2pv%2BKrKVYurFGtPB5snFCBFOlvhCM3ReFr4Yf8tnzDdSSY5Z7PB9jPMxw5YzB92imLsFdpmevriYiQ%2FUW19mRmEHgd%2FQqy51NI2ozp%2FaEXJJBddcEj7CChvFXdI1xpVr2XSJPIlCL4mOGmY7Ddgq3EHNO8nH4106cXHxa%2BkJ6Zj2NhY8cjCwmJ7MuAbwmuQxt7aM9CllMGCPizJOh7wdEtN9iB4h9yOP478MEpQAwr4wU2PhE93WZXABgszMIdyz7iNRWmfmroKlNRf6F1pAORbfi8Usm9YEhc%2Bbz1gFZ53MrFQdpmIjgj%2FNiAGC1i7cfOklpUe8Qp6Txi8HehxGnifXNn19%2Flno7Z9%2FY61rk%2F1vpM6Pm8GVyhxDrw1TN4JWgEXBwk8XbyzY5W%2BhOfl9Xa6yg%2FAtD0RbxDWyZd7%2FHycVxwudrK8w1SRT5krnCIzaWlwEJlCFeP8pXrBIzBCZ4HbSxlLZZQ3RezG1F2aHhL%2BNBX6DAbEV79grsJcC9KGJ8It1lTGMnC%2BpJn9wiRpTneW0wxa6nvQY6pgG8jIubxtYxU1BLqs7xuRFYp%2BNkJTk0TrAdu%2FwyJ6Gi2B9ZAdn2y2SyxyojVDDpVMwu25IpSPHusR7w7OefI0JC7k6kiV8vPXErM3gXfl%2BvlZwjBCia4TX%2BtCtvwaQZJgIoiGhN7vJQ%2FOs%2FxYb7Umzc2eKeM4khrXtWTg5Ul5FH1V6%2BrbqKtCjwQzYPVrPyMwAaiCvEMjvWkFyp2V5IWBGJhtNNMVET&X-Amz-Signature=8d7d4308439402ceb0587820e049c2954959c643ce3f7ff3aa092569b9673d1b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKXK7PM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyAaNKtTn2Bk56o9OYhRE3yU4WWimQNkm18AnRxDzJUAiBEFkFNu0kPzLqbzLtrzI13Rh5ioBhyUH1tbt9oR%2BV8LCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI3ZAxOc3lt6eaqEtKtwD4jZIsQWyUIQebqvLPuqPsGtK%2FqjgCvC50chJAqQMRW9BahUBSLUcjPecBkhjMjvEWlNycClJBhgisN7uChaGTbkf121fgFdHwgE2pv%2BKrKVYurFGtPB5snFCBFOlvhCM3ReFr4Yf8tnzDdSSY5Z7PB9jPMxw5YzB92imLsFdpmevriYiQ%2FUW19mRmEHgd%2FQqy51NI2ozp%2FaEXJJBddcEj7CChvFXdI1xpVr2XSJPIlCL4mOGmY7Ddgq3EHNO8nH4106cXHxa%2BkJ6Zj2NhY8cjCwmJ7MuAbwmuQxt7aM9CllMGCPizJOh7wdEtN9iB4h9yOP478MEpQAwr4wU2PhE93WZXABgszMIdyz7iNRWmfmroKlNRf6F1pAORbfi8Usm9YEhc%2Bbz1gFZ53MrFQdpmIjgj%2FNiAGC1i7cfOklpUe8Qp6Txi8HehxGnifXNn19%2Flno7Z9%2FY61rk%2F1vpM6Pm8GVyhxDrw1TN4JWgEXBwk8XbyzY5W%2BhOfl9Xa6yg%2FAtD0RbxDWyZd7%2FHycVxwudrK8w1SRT5krnCIzaWlwEJlCFeP8pXrBIzBCZ4HbSxlLZZQ3RezG1F2aHhL%2BNBX6DAbEV79grsJcC9KGJ8It1lTGMnC%2BpJn9wiRpTneW0wxa6nvQY6pgG8jIubxtYxU1BLqs7xuRFYp%2BNkJTk0TrAdu%2FwyJ6Gi2B9ZAdn2y2SyxyojVDDpVMwu25IpSPHusR7w7OefI0JC7k6kiV8vPXErM3gXfl%2BvlZwjBCia4TX%2BtCtvwaQZJgIoiGhN7vJQ%2FOs%2FxYb7Umzc2eKeM4khrXtWTg5Ul5FH1V6%2BrbqKtCjwQzYPVrPyMwAaiCvEMjvWkFyp2V5IWBGJhtNNMVET&X-Amz-Signature=61dd3462ab0d91f869c3d47a2cff067b3394903bb187166e4d38eed41e03b199&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKXK7PM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyAaNKtTn2Bk56o9OYhRE3yU4WWimQNkm18AnRxDzJUAiBEFkFNu0kPzLqbzLtrzI13Rh5ioBhyUH1tbt9oR%2BV8LCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI3ZAxOc3lt6eaqEtKtwD4jZIsQWyUIQebqvLPuqPsGtK%2FqjgCvC50chJAqQMRW9BahUBSLUcjPecBkhjMjvEWlNycClJBhgisN7uChaGTbkf121fgFdHwgE2pv%2BKrKVYurFGtPB5snFCBFOlvhCM3ReFr4Yf8tnzDdSSY5Z7PB9jPMxw5YzB92imLsFdpmevriYiQ%2FUW19mRmEHgd%2FQqy51NI2ozp%2FaEXJJBddcEj7CChvFXdI1xpVr2XSJPIlCL4mOGmY7Ddgq3EHNO8nH4106cXHxa%2BkJ6Zj2NhY8cjCwmJ7MuAbwmuQxt7aM9CllMGCPizJOh7wdEtN9iB4h9yOP478MEpQAwr4wU2PhE93WZXABgszMIdyz7iNRWmfmroKlNRf6F1pAORbfi8Usm9YEhc%2Bbz1gFZ53MrFQdpmIjgj%2FNiAGC1i7cfOklpUe8Qp6Txi8HehxGnifXNn19%2Flno7Z9%2FY61rk%2F1vpM6Pm8GVyhxDrw1TN4JWgEXBwk8XbyzY5W%2BhOfl9Xa6yg%2FAtD0RbxDWyZd7%2FHycVxwudrK8w1SRT5krnCIzaWlwEJlCFeP8pXrBIzBCZ4HbSxlLZZQ3RezG1F2aHhL%2BNBX6DAbEV79grsJcC9KGJ8It1lTGMnC%2BpJn9wiRpTneW0wxa6nvQY6pgG8jIubxtYxU1BLqs7xuRFYp%2BNkJTk0TrAdu%2FwyJ6Gi2B9ZAdn2y2SyxyojVDDpVMwu25IpSPHusR7w7OefI0JC7k6kiV8vPXErM3gXfl%2BvlZwjBCia4TX%2BtCtvwaQZJgIoiGhN7vJQ%2FOs%2FxYb7Umzc2eKeM4khrXtWTg5Ul5FH1V6%2BrbqKtCjwQzYPVrPyMwAaiCvEMjvWkFyp2V5IWBGJhtNNMVET&X-Amz-Signature=cdc37773000cbc2818875d6fdae9f4913063a588857dbe6fbcb823011a3687cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKXK7PM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyAaNKtTn2Bk56o9OYhRE3yU4WWimQNkm18AnRxDzJUAiBEFkFNu0kPzLqbzLtrzI13Rh5ioBhyUH1tbt9oR%2BV8LCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI3ZAxOc3lt6eaqEtKtwD4jZIsQWyUIQebqvLPuqPsGtK%2FqjgCvC50chJAqQMRW9BahUBSLUcjPecBkhjMjvEWlNycClJBhgisN7uChaGTbkf121fgFdHwgE2pv%2BKrKVYurFGtPB5snFCBFOlvhCM3ReFr4Yf8tnzDdSSY5Z7PB9jPMxw5YzB92imLsFdpmevriYiQ%2FUW19mRmEHgd%2FQqy51NI2ozp%2FaEXJJBddcEj7CChvFXdI1xpVr2XSJPIlCL4mOGmY7Ddgq3EHNO8nH4106cXHxa%2BkJ6Zj2NhY8cjCwmJ7MuAbwmuQxt7aM9CllMGCPizJOh7wdEtN9iB4h9yOP478MEpQAwr4wU2PhE93WZXABgszMIdyz7iNRWmfmroKlNRf6F1pAORbfi8Usm9YEhc%2Bbz1gFZ53MrFQdpmIjgj%2FNiAGC1i7cfOklpUe8Qp6Txi8HehxGnifXNn19%2Flno7Z9%2FY61rk%2F1vpM6Pm8GVyhxDrw1TN4JWgEXBwk8XbyzY5W%2BhOfl9Xa6yg%2FAtD0RbxDWyZd7%2FHycVxwudrK8w1SRT5krnCIzaWlwEJlCFeP8pXrBIzBCZ4HbSxlLZZQ3RezG1F2aHhL%2BNBX6DAbEV79grsJcC9KGJ8It1lTGMnC%2BpJn9wiRpTneW0wxa6nvQY6pgG8jIubxtYxU1BLqs7xuRFYp%2BNkJTk0TrAdu%2FwyJ6Gi2B9ZAdn2y2SyxyojVDDpVMwu25IpSPHusR7w7OefI0JC7k6kiV8vPXErM3gXfl%2BvlZwjBCia4TX%2BtCtvwaQZJgIoiGhN7vJQ%2FOs%2FxYb7Umzc2eKeM4khrXtWTg5Ul5FH1V6%2BrbqKtCjwQzYPVrPyMwAaiCvEMjvWkFyp2V5IWBGJhtNNMVET&X-Amz-Signature=97211376cff795076b8d0d411b90972fb4b7158fc0a8a1a663a998511de86658&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKXK7PM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyAaNKtTn2Bk56o9OYhRE3yU4WWimQNkm18AnRxDzJUAiBEFkFNu0kPzLqbzLtrzI13Rh5ioBhyUH1tbt9oR%2BV8LCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI3ZAxOc3lt6eaqEtKtwD4jZIsQWyUIQebqvLPuqPsGtK%2FqjgCvC50chJAqQMRW9BahUBSLUcjPecBkhjMjvEWlNycClJBhgisN7uChaGTbkf121fgFdHwgE2pv%2BKrKVYurFGtPB5snFCBFOlvhCM3ReFr4Yf8tnzDdSSY5Z7PB9jPMxw5YzB92imLsFdpmevriYiQ%2FUW19mRmEHgd%2FQqy51NI2ozp%2FaEXJJBddcEj7CChvFXdI1xpVr2XSJPIlCL4mOGmY7Ddgq3EHNO8nH4106cXHxa%2BkJ6Zj2NhY8cjCwmJ7MuAbwmuQxt7aM9CllMGCPizJOh7wdEtN9iB4h9yOP478MEpQAwr4wU2PhE93WZXABgszMIdyz7iNRWmfmroKlNRf6F1pAORbfi8Usm9YEhc%2Bbz1gFZ53MrFQdpmIjgj%2FNiAGC1i7cfOklpUe8Qp6Txi8HehxGnifXNn19%2Flno7Z9%2FY61rk%2F1vpM6Pm8GVyhxDrw1TN4JWgEXBwk8XbyzY5W%2BhOfl9Xa6yg%2FAtD0RbxDWyZd7%2FHycVxwudrK8w1SRT5krnCIzaWlwEJlCFeP8pXrBIzBCZ4HbSxlLZZQ3RezG1F2aHhL%2BNBX6DAbEV79grsJcC9KGJ8It1lTGMnC%2BpJn9wiRpTneW0wxa6nvQY6pgG8jIubxtYxU1BLqs7xuRFYp%2BNkJTk0TrAdu%2FwyJ6Gi2B9ZAdn2y2SyxyojVDDpVMwu25IpSPHusR7w7OefI0JC7k6kiV8vPXErM3gXfl%2BvlZwjBCia4TX%2BtCtvwaQZJgIoiGhN7vJQ%2FOs%2FxYb7Umzc2eKeM4khrXtWTg5Ul5FH1V6%2BrbqKtCjwQzYPVrPyMwAaiCvEMjvWkFyp2V5IWBGJhtNNMVET&X-Amz-Signature=6aa3a402dfd91d466a652d1f2b1f5202b8f4f8bcdd733160c13473e11732bcbf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKXK7PM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyAaNKtTn2Bk56o9OYhRE3yU4WWimQNkm18AnRxDzJUAiBEFkFNu0kPzLqbzLtrzI13Rh5ioBhyUH1tbt9oR%2BV8LCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI3ZAxOc3lt6eaqEtKtwD4jZIsQWyUIQebqvLPuqPsGtK%2FqjgCvC50chJAqQMRW9BahUBSLUcjPecBkhjMjvEWlNycClJBhgisN7uChaGTbkf121fgFdHwgE2pv%2BKrKVYurFGtPB5snFCBFOlvhCM3ReFr4Yf8tnzDdSSY5Z7PB9jPMxw5YzB92imLsFdpmevriYiQ%2FUW19mRmEHgd%2FQqy51NI2ozp%2FaEXJJBddcEj7CChvFXdI1xpVr2XSJPIlCL4mOGmY7Ddgq3EHNO8nH4106cXHxa%2BkJ6Zj2NhY8cjCwmJ7MuAbwmuQxt7aM9CllMGCPizJOh7wdEtN9iB4h9yOP478MEpQAwr4wU2PhE93WZXABgszMIdyz7iNRWmfmroKlNRf6F1pAORbfi8Usm9YEhc%2Bbz1gFZ53MrFQdpmIjgj%2FNiAGC1i7cfOklpUe8Qp6Txi8HehxGnifXNn19%2Flno7Z9%2FY61rk%2F1vpM6Pm8GVyhxDrw1TN4JWgEXBwk8XbyzY5W%2BhOfl9Xa6yg%2FAtD0RbxDWyZd7%2FHycVxwudrK8w1SRT5krnCIzaWlwEJlCFeP8pXrBIzBCZ4HbSxlLZZQ3RezG1F2aHhL%2BNBX6DAbEV79grsJcC9KGJ8It1lTGMnC%2BpJn9wiRpTneW0wxa6nvQY6pgG8jIubxtYxU1BLqs7xuRFYp%2BNkJTk0TrAdu%2FwyJ6Gi2B9ZAdn2y2SyxyojVDDpVMwu25IpSPHusR7w7OefI0JC7k6kiV8vPXErM3gXfl%2BvlZwjBCia4TX%2BtCtvwaQZJgIoiGhN7vJQ%2FOs%2FxYb7Umzc2eKeM4khrXtWTg5Ul5FH1V6%2BrbqKtCjwQzYPVrPyMwAaiCvEMjvWkFyp2V5IWBGJhtNNMVET&X-Amz-Signature=e757682912cf17b9eb9f3c8e1c7a0f7ba0da1cef3b7ecefd080074ed13c1f912&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKXK7PM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyAaNKtTn2Bk56o9OYhRE3yU4WWimQNkm18AnRxDzJUAiBEFkFNu0kPzLqbzLtrzI13Rh5ioBhyUH1tbt9oR%2BV8LCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI3ZAxOc3lt6eaqEtKtwD4jZIsQWyUIQebqvLPuqPsGtK%2FqjgCvC50chJAqQMRW9BahUBSLUcjPecBkhjMjvEWlNycClJBhgisN7uChaGTbkf121fgFdHwgE2pv%2BKrKVYurFGtPB5snFCBFOlvhCM3ReFr4Yf8tnzDdSSY5Z7PB9jPMxw5YzB92imLsFdpmevriYiQ%2FUW19mRmEHgd%2FQqy51NI2ozp%2FaEXJJBddcEj7CChvFXdI1xpVr2XSJPIlCL4mOGmY7Ddgq3EHNO8nH4106cXHxa%2BkJ6Zj2NhY8cjCwmJ7MuAbwmuQxt7aM9CllMGCPizJOh7wdEtN9iB4h9yOP478MEpQAwr4wU2PhE93WZXABgszMIdyz7iNRWmfmroKlNRf6F1pAORbfi8Usm9YEhc%2Bbz1gFZ53MrFQdpmIjgj%2FNiAGC1i7cfOklpUe8Qp6Txi8HehxGnifXNn19%2Flno7Z9%2FY61rk%2F1vpM6Pm8GVyhxDrw1TN4JWgEXBwk8XbyzY5W%2BhOfl9Xa6yg%2FAtD0RbxDWyZd7%2FHycVxwudrK8w1SRT5krnCIzaWlwEJlCFeP8pXrBIzBCZ4HbSxlLZZQ3RezG1F2aHhL%2BNBX6DAbEV79grsJcC9KGJ8It1lTGMnC%2BpJn9wiRpTneW0wxa6nvQY6pgG8jIubxtYxU1BLqs7xuRFYp%2BNkJTk0TrAdu%2FwyJ6Gi2B9ZAdn2y2SyxyojVDDpVMwu25IpSPHusR7w7OefI0JC7k6kiV8vPXErM3gXfl%2BvlZwjBCia4TX%2BtCtvwaQZJgIoiGhN7vJQ%2FOs%2FxYb7Umzc2eKeM4khrXtWTg5Ul5FH1V6%2BrbqKtCjwQzYPVrPyMwAaiCvEMjvWkFyp2V5IWBGJhtNNMVET&X-Amz-Signature=967828eff3e2f9f4b488a3d9649bfecc3e2d650e0ce9a79c06a27577ca6a226b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
