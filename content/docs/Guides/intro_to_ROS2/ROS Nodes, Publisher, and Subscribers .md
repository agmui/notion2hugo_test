---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYCA3BPJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNZ%2FlBhROzhGCaT42vFOqxExDIADu1R0bWpqiOrTD9TAIhALqbMnhtztQcnAklkC9KwKHY%2Bgu8kVdUEbJjdUc4BawYKv8DCB4QABoMNjM3NDIzMTgzODA1IgwjTcFOrn88Wn4Mkwoq3AN133kSohdTwgFT3HsLlDfIYLsTf9%2BaC6QYE7sUsH3Aawg8TQZ2THPvBrYOkVe%2FvLt9dpE38U2oktxwEHph8a%2BjTKtRNKKTi0Sy1YLHD%2BvJV97ywIUjgIg5BjXOG0LbCQtMJJrby46SdJ03K4%2Bn0zGfR6eSxYkTXnfyyLJHyu%2FC1d%2BUx56y4wut5l8y0tBq%2BWqyHnmeVH89XF5QrdBHuU0f62v1JDq3V3HJ5VeZ6%2FD3VsbntkC%2FXf6KrmPezv%2BaSjqD1JnBebf7pFGm7I5c5auktxS1WUioBUnR03K5em4irNBWVjXYX2ojCy7gbGqlQ5%2F1E5Tpvc4KRzOyAg2TDMPTSyYO4OAySETvZ7OWRMOEAZPwN8bYbJ9JGLcFNdkQqsQivQBM5Q9ndHYpyvr6NzTbjeBgw90nWfzObp6eXw3aF9iSR8AcPvykYDUcqHmfmAB9BmJvhia9v3MAWHboCF9tWn4Mb2y3AoDH1SvTKeDwUtEyAsHuC1SKhdX3pjpm%2BHHuvj1GJMQWZ7hRqEZMYGy4mJ6J%2FrIg0xbY3FPzyxwotbnJyzb%2BNWdGuKhXWJy3WeOiV6YJzdPL%2F2Nq3mb8OXxAo36XU6lQE23yJr4%2B%2BEOa1Uy3jwu8rvG5lhhmnjDxgLrEBjqkAcrWStU46is6ifoJTVCWZKnyphdzfYPf%2FVWzVX3Mne%2FN08aoXfenhqLjqNVCgcLhHYK5SOhhG3foTBkDflxvAGDRqP4wzgA7eLsKSb6s5ZG23p%2BkanDyisb%2Bo0GNn8ay0Fu9FChD8EW7faUqq5JLeGk87NXmznxdLI3YG450Ce9jBul8RCWqyFtmZCtNPL4WluLsFXKNGnWAAZVgwoQGcA99ySQV&X-Amz-Signature=3c3cd4df74aecb9005c17450baa8b5310ed174d0b62a598189df847b7abcc522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYCA3BPJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNZ%2FlBhROzhGCaT42vFOqxExDIADu1R0bWpqiOrTD9TAIhALqbMnhtztQcnAklkC9KwKHY%2Bgu8kVdUEbJjdUc4BawYKv8DCB4QABoMNjM3NDIzMTgzODA1IgwjTcFOrn88Wn4Mkwoq3AN133kSohdTwgFT3HsLlDfIYLsTf9%2BaC6QYE7sUsH3Aawg8TQZ2THPvBrYOkVe%2FvLt9dpE38U2oktxwEHph8a%2BjTKtRNKKTi0Sy1YLHD%2BvJV97ywIUjgIg5BjXOG0LbCQtMJJrby46SdJ03K4%2Bn0zGfR6eSxYkTXnfyyLJHyu%2FC1d%2BUx56y4wut5l8y0tBq%2BWqyHnmeVH89XF5QrdBHuU0f62v1JDq3V3HJ5VeZ6%2FD3VsbntkC%2FXf6KrmPezv%2BaSjqD1JnBebf7pFGm7I5c5auktxS1WUioBUnR03K5em4irNBWVjXYX2ojCy7gbGqlQ5%2F1E5Tpvc4KRzOyAg2TDMPTSyYO4OAySETvZ7OWRMOEAZPwN8bYbJ9JGLcFNdkQqsQivQBM5Q9ndHYpyvr6NzTbjeBgw90nWfzObp6eXw3aF9iSR8AcPvykYDUcqHmfmAB9BmJvhia9v3MAWHboCF9tWn4Mb2y3AoDH1SvTKeDwUtEyAsHuC1SKhdX3pjpm%2BHHuvj1GJMQWZ7hRqEZMYGy4mJ6J%2FrIg0xbY3FPzyxwotbnJyzb%2BNWdGuKhXWJy3WeOiV6YJzdPL%2F2Nq3mb8OXxAo36XU6lQE23yJr4%2B%2BEOa1Uy3jwu8rvG5lhhmnjDxgLrEBjqkAcrWStU46is6ifoJTVCWZKnyphdzfYPf%2FVWzVX3Mne%2FN08aoXfenhqLjqNVCgcLhHYK5SOhhG3foTBkDflxvAGDRqP4wzgA7eLsKSb6s5ZG23p%2BkanDyisb%2Bo0GNn8ay0Fu9FChD8EW7faUqq5JLeGk87NXmznxdLI3YG450Ce9jBul8RCWqyFtmZCtNPL4WluLsFXKNGnWAAZVgwoQGcA99ySQV&X-Amz-Signature=7f539169aab8574017d48eae1f90353d057e44470364110eb0acf98b3aa54104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYCA3BPJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNZ%2FlBhROzhGCaT42vFOqxExDIADu1R0bWpqiOrTD9TAIhALqbMnhtztQcnAklkC9KwKHY%2Bgu8kVdUEbJjdUc4BawYKv8DCB4QABoMNjM3NDIzMTgzODA1IgwjTcFOrn88Wn4Mkwoq3AN133kSohdTwgFT3HsLlDfIYLsTf9%2BaC6QYE7sUsH3Aawg8TQZ2THPvBrYOkVe%2FvLt9dpE38U2oktxwEHph8a%2BjTKtRNKKTi0Sy1YLHD%2BvJV97ywIUjgIg5BjXOG0LbCQtMJJrby46SdJ03K4%2Bn0zGfR6eSxYkTXnfyyLJHyu%2FC1d%2BUx56y4wut5l8y0tBq%2BWqyHnmeVH89XF5QrdBHuU0f62v1JDq3V3HJ5VeZ6%2FD3VsbntkC%2FXf6KrmPezv%2BaSjqD1JnBebf7pFGm7I5c5auktxS1WUioBUnR03K5em4irNBWVjXYX2ojCy7gbGqlQ5%2F1E5Tpvc4KRzOyAg2TDMPTSyYO4OAySETvZ7OWRMOEAZPwN8bYbJ9JGLcFNdkQqsQivQBM5Q9ndHYpyvr6NzTbjeBgw90nWfzObp6eXw3aF9iSR8AcPvykYDUcqHmfmAB9BmJvhia9v3MAWHboCF9tWn4Mb2y3AoDH1SvTKeDwUtEyAsHuC1SKhdX3pjpm%2BHHuvj1GJMQWZ7hRqEZMYGy4mJ6J%2FrIg0xbY3FPzyxwotbnJyzb%2BNWdGuKhXWJy3WeOiV6YJzdPL%2F2Nq3mb8OXxAo36XU6lQE23yJr4%2B%2BEOa1Uy3jwu8rvG5lhhmnjDxgLrEBjqkAcrWStU46is6ifoJTVCWZKnyphdzfYPf%2FVWzVX3Mne%2FN08aoXfenhqLjqNVCgcLhHYK5SOhhG3foTBkDflxvAGDRqP4wzgA7eLsKSb6s5ZG23p%2BkanDyisb%2Bo0GNn8ay0Fu9FChD8EW7faUqq5JLeGk87NXmznxdLI3YG450Ce9jBul8RCWqyFtmZCtNPL4WluLsFXKNGnWAAZVgwoQGcA99ySQV&X-Amz-Signature=bac5178cff8f7d728e0edbb9ac3f664cafa9a130d2a79a453c42de2ae54ca7a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYCA3BPJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNZ%2FlBhROzhGCaT42vFOqxExDIADu1R0bWpqiOrTD9TAIhALqbMnhtztQcnAklkC9KwKHY%2Bgu8kVdUEbJjdUc4BawYKv8DCB4QABoMNjM3NDIzMTgzODA1IgwjTcFOrn88Wn4Mkwoq3AN133kSohdTwgFT3HsLlDfIYLsTf9%2BaC6QYE7sUsH3Aawg8TQZ2THPvBrYOkVe%2FvLt9dpE38U2oktxwEHph8a%2BjTKtRNKKTi0Sy1YLHD%2BvJV97ywIUjgIg5BjXOG0LbCQtMJJrby46SdJ03K4%2Bn0zGfR6eSxYkTXnfyyLJHyu%2FC1d%2BUx56y4wut5l8y0tBq%2BWqyHnmeVH89XF5QrdBHuU0f62v1JDq3V3HJ5VeZ6%2FD3VsbntkC%2FXf6KrmPezv%2BaSjqD1JnBebf7pFGm7I5c5auktxS1WUioBUnR03K5em4irNBWVjXYX2ojCy7gbGqlQ5%2F1E5Tpvc4KRzOyAg2TDMPTSyYO4OAySETvZ7OWRMOEAZPwN8bYbJ9JGLcFNdkQqsQivQBM5Q9ndHYpyvr6NzTbjeBgw90nWfzObp6eXw3aF9iSR8AcPvykYDUcqHmfmAB9BmJvhia9v3MAWHboCF9tWn4Mb2y3AoDH1SvTKeDwUtEyAsHuC1SKhdX3pjpm%2BHHuvj1GJMQWZ7hRqEZMYGy4mJ6J%2FrIg0xbY3FPzyxwotbnJyzb%2BNWdGuKhXWJy3WeOiV6YJzdPL%2F2Nq3mb8OXxAo36XU6lQE23yJr4%2B%2BEOa1Uy3jwu8rvG5lhhmnjDxgLrEBjqkAcrWStU46is6ifoJTVCWZKnyphdzfYPf%2FVWzVX3Mne%2FN08aoXfenhqLjqNVCgcLhHYK5SOhhG3foTBkDflxvAGDRqP4wzgA7eLsKSb6s5ZG23p%2BkanDyisb%2Bo0GNn8ay0Fu9FChD8EW7faUqq5JLeGk87NXmznxdLI3YG450Ce9jBul8RCWqyFtmZCtNPL4WluLsFXKNGnWAAZVgwoQGcA99ySQV&X-Amz-Signature=2c609a22426837c89bcf7e0b1344475f8964f33e2f6dd2e11328a9ba0d3143fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYCA3BPJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNZ%2FlBhROzhGCaT42vFOqxExDIADu1R0bWpqiOrTD9TAIhALqbMnhtztQcnAklkC9KwKHY%2Bgu8kVdUEbJjdUc4BawYKv8DCB4QABoMNjM3NDIzMTgzODA1IgwjTcFOrn88Wn4Mkwoq3AN133kSohdTwgFT3HsLlDfIYLsTf9%2BaC6QYE7sUsH3Aawg8TQZ2THPvBrYOkVe%2FvLt9dpE38U2oktxwEHph8a%2BjTKtRNKKTi0Sy1YLHD%2BvJV97ywIUjgIg5BjXOG0LbCQtMJJrby46SdJ03K4%2Bn0zGfR6eSxYkTXnfyyLJHyu%2FC1d%2BUx56y4wut5l8y0tBq%2BWqyHnmeVH89XF5QrdBHuU0f62v1JDq3V3HJ5VeZ6%2FD3VsbntkC%2FXf6KrmPezv%2BaSjqD1JnBebf7pFGm7I5c5auktxS1WUioBUnR03K5em4irNBWVjXYX2ojCy7gbGqlQ5%2F1E5Tpvc4KRzOyAg2TDMPTSyYO4OAySETvZ7OWRMOEAZPwN8bYbJ9JGLcFNdkQqsQivQBM5Q9ndHYpyvr6NzTbjeBgw90nWfzObp6eXw3aF9iSR8AcPvykYDUcqHmfmAB9BmJvhia9v3MAWHboCF9tWn4Mb2y3AoDH1SvTKeDwUtEyAsHuC1SKhdX3pjpm%2BHHuvj1GJMQWZ7hRqEZMYGy4mJ6J%2FrIg0xbY3FPzyxwotbnJyzb%2BNWdGuKhXWJy3WeOiV6YJzdPL%2F2Nq3mb8OXxAo36XU6lQE23yJr4%2B%2BEOa1Uy3jwu8rvG5lhhmnjDxgLrEBjqkAcrWStU46is6ifoJTVCWZKnyphdzfYPf%2FVWzVX3Mne%2FN08aoXfenhqLjqNVCgcLhHYK5SOhhG3foTBkDflxvAGDRqP4wzgA7eLsKSb6s5ZG23p%2BkanDyisb%2Bo0GNn8ay0Fu9FChD8EW7faUqq5JLeGk87NXmznxdLI3YG450Ce9jBul8RCWqyFtmZCtNPL4WluLsFXKNGnWAAZVgwoQGcA99ySQV&X-Amz-Signature=72821ed9b9ab9337e040dacdfd72edec9dcdb075dc42a696d62383ab69a7d3db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYCA3BPJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNZ%2FlBhROzhGCaT42vFOqxExDIADu1R0bWpqiOrTD9TAIhALqbMnhtztQcnAklkC9KwKHY%2Bgu8kVdUEbJjdUc4BawYKv8DCB4QABoMNjM3NDIzMTgzODA1IgwjTcFOrn88Wn4Mkwoq3AN133kSohdTwgFT3HsLlDfIYLsTf9%2BaC6QYE7sUsH3Aawg8TQZ2THPvBrYOkVe%2FvLt9dpE38U2oktxwEHph8a%2BjTKtRNKKTi0Sy1YLHD%2BvJV97ywIUjgIg5BjXOG0LbCQtMJJrby46SdJ03K4%2Bn0zGfR6eSxYkTXnfyyLJHyu%2FC1d%2BUx56y4wut5l8y0tBq%2BWqyHnmeVH89XF5QrdBHuU0f62v1JDq3V3HJ5VeZ6%2FD3VsbntkC%2FXf6KrmPezv%2BaSjqD1JnBebf7pFGm7I5c5auktxS1WUioBUnR03K5em4irNBWVjXYX2ojCy7gbGqlQ5%2F1E5Tpvc4KRzOyAg2TDMPTSyYO4OAySETvZ7OWRMOEAZPwN8bYbJ9JGLcFNdkQqsQivQBM5Q9ndHYpyvr6NzTbjeBgw90nWfzObp6eXw3aF9iSR8AcPvykYDUcqHmfmAB9BmJvhia9v3MAWHboCF9tWn4Mb2y3AoDH1SvTKeDwUtEyAsHuC1SKhdX3pjpm%2BHHuvj1GJMQWZ7hRqEZMYGy4mJ6J%2FrIg0xbY3FPzyxwotbnJyzb%2BNWdGuKhXWJy3WeOiV6YJzdPL%2F2Nq3mb8OXxAo36XU6lQE23yJr4%2B%2BEOa1Uy3jwu8rvG5lhhmnjDxgLrEBjqkAcrWStU46is6ifoJTVCWZKnyphdzfYPf%2FVWzVX3Mne%2FN08aoXfenhqLjqNVCgcLhHYK5SOhhG3foTBkDflxvAGDRqP4wzgA7eLsKSb6s5ZG23p%2BkanDyisb%2Bo0GNn8ay0Fu9FChD8EW7faUqq5JLeGk87NXmznxdLI3YG450Ce9jBul8RCWqyFtmZCtNPL4WluLsFXKNGnWAAZVgwoQGcA99ySQV&X-Amz-Signature=809a78d607dee97e3394225eb508bc26b42609a7fd6dd9b3e3278b98f07513bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYCA3BPJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNZ%2FlBhROzhGCaT42vFOqxExDIADu1R0bWpqiOrTD9TAIhALqbMnhtztQcnAklkC9KwKHY%2Bgu8kVdUEbJjdUc4BawYKv8DCB4QABoMNjM3NDIzMTgzODA1IgwjTcFOrn88Wn4Mkwoq3AN133kSohdTwgFT3HsLlDfIYLsTf9%2BaC6QYE7sUsH3Aawg8TQZ2THPvBrYOkVe%2FvLt9dpE38U2oktxwEHph8a%2BjTKtRNKKTi0Sy1YLHD%2BvJV97ywIUjgIg5BjXOG0LbCQtMJJrby46SdJ03K4%2Bn0zGfR6eSxYkTXnfyyLJHyu%2FC1d%2BUx56y4wut5l8y0tBq%2BWqyHnmeVH89XF5QrdBHuU0f62v1JDq3V3HJ5VeZ6%2FD3VsbntkC%2FXf6KrmPezv%2BaSjqD1JnBebf7pFGm7I5c5auktxS1WUioBUnR03K5em4irNBWVjXYX2ojCy7gbGqlQ5%2F1E5Tpvc4KRzOyAg2TDMPTSyYO4OAySETvZ7OWRMOEAZPwN8bYbJ9JGLcFNdkQqsQivQBM5Q9ndHYpyvr6NzTbjeBgw90nWfzObp6eXw3aF9iSR8AcPvykYDUcqHmfmAB9BmJvhia9v3MAWHboCF9tWn4Mb2y3AoDH1SvTKeDwUtEyAsHuC1SKhdX3pjpm%2BHHuvj1GJMQWZ7hRqEZMYGy4mJ6J%2FrIg0xbY3FPzyxwotbnJyzb%2BNWdGuKhXWJy3WeOiV6YJzdPL%2F2Nq3mb8OXxAo36XU6lQE23yJr4%2B%2BEOa1Uy3jwu8rvG5lhhmnjDxgLrEBjqkAcrWStU46is6ifoJTVCWZKnyphdzfYPf%2FVWzVX3Mne%2FN08aoXfenhqLjqNVCgcLhHYK5SOhhG3foTBkDflxvAGDRqP4wzgA7eLsKSb6s5ZG23p%2BkanDyisb%2Bo0GNn8ay0Fu9FChD8EW7faUqq5JLeGk87NXmznxdLI3YG450Ce9jBul8RCWqyFtmZCtNPL4WluLsFXKNGnWAAZVgwoQGcA99ySQV&X-Amz-Signature=4bede4c1e99cbdbe30367218df6a49831538e3ec2afb40346991fae36f199cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYCA3BPJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNZ%2FlBhROzhGCaT42vFOqxExDIADu1R0bWpqiOrTD9TAIhALqbMnhtztQcnAklkC9KwKHY%2Bgu8kVdUEbJjdUc4BawYKv8DCB4QABoMNjM3NDIzMTgzODA1IgwjTcFOrn88Wn4Mkwoq3AN133kSohdTwgFT3HsLlDfIYLsTf9%2BaC6QYE7sUsH3Aawg8TQZ2THPvBrYOkVe%2FvLt9dpE38U2oktxwEHph8a%2BjTKtRNKKTi0Sy1YLHD%2BvJV97ywIUjgIg5BjXOG0LbCQtMJJrby46SdJ03K4%2Bn0zGfR6eSxYkTXnfyyLJHyu%2FC1d%2BUx56y4wut5l8y0tBq%2BWqyHnmeVH89XF5QrdBHuU0f62v1JDq3V3HJ5VeZ6%2FD3VsbntkC%2FXf6KrmPezv%2BaSjqD1JnBebf7pFGm7I5c5auktxS1WUioBUnR03K5em4irNBWVjXYX2ojCy7gbGqlQ5%2F1E5Tpvc4KRzOyAg2TDMPTSyYO4OAySETvZ7OWRMOEAZPwN8bYbJ9JGLcFNdkQqsQivQBM5Q9ndHYpyvr6NzTbjeBgw90nWfzObp6eXw3aF9iSR8AcPvykYDUcqHmfmAB9BmJvhia9v3MAWHboCF9tWn4Mb2y3AoDH1SvTKeDwUtEyAsHuC1SKhdX3pjpm%2BHHuvj1GJMQWZ7hRqEZMYGy4mJ6J%2FrIg0xbY3FPzyxwotbnJyzb%2BNWdGuKhXWJy3WeOiV6YJzdPL%2F2Nq3mb8OXxAo36XU6lQE23yJr4%2B%2BEOa1Uy3jwu8rvG5lhhmnjDxgLrEBjqkAcrWStU46is6ifoJTVCWZKnyphdzfYPf%2FVWzVX3Mne%2FN08aoXfenhqLjqNVCgcLhHYK5SOhhG3foTBkDflxvAGDRqP4wzgA7eLsKSb6s5ZG23p%2BkanDyisb%2Bo0GNn8ay0Fu9FChD8EW7faUqq5JLeGk87NXmznxdLI3YG450Ce9jBul8RCWqyFtmZCtNPL4WluLsFXKNGnWAAZVgwoQGcA99ySQV&X-Amz-Signature=4bd4a42f71672beb2eb16a17b91a1cb01e1ca9d86e3ccd85d76e5ca2dc365eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
