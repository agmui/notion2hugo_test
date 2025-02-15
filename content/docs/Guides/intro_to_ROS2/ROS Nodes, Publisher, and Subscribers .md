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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S76QQXPR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAF10uOjdANOWksyiD2KviGelVHvx6op7jOjfhZESLAZAiEA8m7KS1KB2EE6DnASuWoM%2BDbmicDZCqohZQkzO%2BuTZ9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHPP%2FTAzZbeUb4M%2FECrcA4wpJU3aWYvRKR48O8BD6xORtMwFSGHtGGhlebBTjs5937PKEqu4xH6QsTLfl2g1xv93%2BnIChqaQzp8hZsTCuvaoAa2ElZ8nIS8XAU8yAhAeJRB%2FeaOvJeDEhB6jB71zpesfxwlLiRgSZbIAP6vcKZTk8ONygPuO%2ByYUL0eH9pNLPjRUW8PwnPP8lH6Kx%2FQBYYdALKrT89h43hEADur0prnVeoQbfZJ93fg3%2BMAF63mfyxVF0vdUmZ11BE1kqJK%2F2ERLQssSaCHaDuUeZyO65PnNImXEjnuppbItZHwkwtDZ4cgGAJOSkGvI4YS0TyePkhtj7zIKJOi7Bpat6HdGfzoNpmwMDxjy7NEeLWJ2lfuAn1WhsMUWPjxqgnCPH0Dr8Qf4QSbnlkFZWTAHKGe2M%2FhEI52zma%2FoehzncGaqUQMODLOy%2F9Wy6E7B%2Bys9fjZE7GkV2GoEiiqOG3HYq4%2BO3Cgcj67Kx6d4%2FCJlSc86RXAfsMpFlMT8DiJQMyoXFm2uKgPGtlW6Sj383iaiAwOTRZi2loRKHhzpOZs%2FeRB3XCF98TUuhaIYBvdEjr9A9DUIRWcBrlrPD3ea3F5piDfQZ7%2Fuq3p%2BkSlcxi6foZUWc7d7ybEFT2EDvjmFYlfnMJCxwL0GOqUB5ZQSs5lqAD%2Fh8rqsVslcRs8R%2B1rgle1cHxvws8%2BkpJNb3cNNkQ4DjFJf23IOGPwZKhX5lU1E3srTnj3ISWDDyZ5LcjRDx6Sp%2BekxSJYEWeLrsPprVAlElMNwL%2F64apikKrx5PqqLDOSWr3vVACjPciVKfFS%2F7fUSPO%2FTIto4CV%2FhC%2B8l8oWgBAHLJTVECQWymUx0C2czjXvSBxMNlL2vV94ZFUau&X-Amz-Signature=890dce212b74e9034d35341803bfbe0c68fe361876333eb4f69f18b213965a1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S76QQXPR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAF10uOjdANOWksyiD2KviGelVHvx6op7jOjfhZESLAZAiEA8m7KS1KB2EE6DnASuWoM%2BDbmicDZCqohZQkzO%2BuTZ9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHPP%2FTAzZbeUb4M%2FECrcA4wpJU3aWYvRKR48O8BD6xORtMwFSGHtGGhlebBTjs5937PKEqu4xH6QsTLfl2g1xv93%2BnIChqaQzp8hZsTCuvaoAa2ElZ8nIS8XAU8yAhAeJRB%2FeaOvJeDEhB6jB71zpesfxwlLiRgSZbIAP6vcKZTk8ONygPuO%2ByYUL0eH9pNLPjRUW8PwnPP8lH6Kx%2FQBYYdALKrT89h43hEADur0prnVeoQbfZJ93fg3%2BMAF63mfyxVF0vdUmZ11BE1kqJK%2F2ERLQssSaCHaDuUeZyO65PnNImXEjnuppbItZHwkwtDZ4cgGAJOSkGvI4YS0TyePkhtj7zIKJOi7Bpat6HdGfzoNpmwMDxjy7NEeLWJ2lfuAn1WhsMUWPjxqgnCPH0Dr8Qf4QSbnlkFZWTAHKGe2M%2FhEI52zma%2FoehzncGaqUQMODLOy%2F9Wy6E7B%2Bys9fjZE7GkV2GoEiiqOG3HYq4%2BO3Cgcj67Kx6d4%2FCJlSc86RXAfsMpFlMT8DiJQMyoXFm2uKgPGtlW6Sj383iaiAwOTRZi2loRKHhzpOZs%2FeRB3XCF98TUuhaIYBvdEjr9A9DUIRWcBrlrPD3ea3F5piDfQZ7%2Fuq3p%2BkSlcxi6foZUWc7d7ybEFT2EDvjmFYlfnMJCxwL0GOqUB5ZQSs5lqAD%2Fh8rqsVslcRs8R%2B1rgle1cHxvws8%2BkpJNb3cNNkQ4DjFJf23IOGPwZKhX5lU1E3srTnj3ISWDDyZ5LcjRDx6Sp%2BekxSJYEWeLrsPprVAlElMNwL%2F64apikKrx5PqqLDOSWr3vVACjPciVKfFS%2F7fUSPO%2FTIto4CV%2FhC%2B8l8oWgBAHLJTVECQWymUx0C2czjXvSBxMNlL2vV94ZFUau&X-Amz-Signature=0ca625dccb5c1b8b248cbbe61b96685f673821f4ea31d8bac1033ece4c4e0225&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S76QQXPR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAF10uOjdANOWksyiD2KviGelVHvx6op7jOjfhZESLAZAiEA8m7KS1KB2EE6DnASuWoM%2BDbmicDZCqohZQkzO%2BuTZ9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHPP%2FTAzZbeUb4M%2FECrcA4wpJU3aWYvRKR48O8BD6xORtMwFSGHtGGhlebBTjs5937PKEqu4xH6QsTLfl2g1xv93%2BnIChqaQzp8hZsTCuvaoAa2ElZ8nIS8XAU8yAhAeJRB%2FeaOvJeDEhB6jB71zpesfxwlLiRgSZbIAP6vcKZTk8ONygPuO%2ByYUL0eH9pNLPjRUW8PwnPP8lH6Kx%2FQBYYdALKrT89h43hEADur0prnVeoQbfZJ93fg3%2BMAF63mfyxVF0vdUmZ11BE1kqJK%2F2ERLQssSaCHaDuUeZyO65PnNImXEjnuppbItZHwkwtDZ4cgGAJOSkGvI4YS0TyePkhtj7zIKJOi7Bpat6HdGfzoNpmwMDxjy7NEeLWJ2lfuAn1WhsMUWPjxqgnCPH0Dr8Qf4QSbnlkFZWTAHKGe2M%2FhEI52zma%2FoehzncGaqUQMODLOy%2F9Wy6E7B%2Bys9fjZE7GkV2GoEiiqOG3HYq4%2BO3Cgcj67Kx6d4%2FCJlSc86RXAfsMpFlMT8DiJQMyoXFm2uKgPGtlW6Sj383iaiAwOTRZi2loRKHhzpOZs%2FeRB3XCF98TUuhaIYBvdEjr9A9DUIRWcBrlrPD3ea3F5piDfQZ7%2Fuq3p%2BkSlcxi6foZUWc7d7ybEFT2EDvjmFYlfnMJCxwL0GOqUB5ZQSs5lqAD%2Fh8rqsVslcRs8R%2B1rgle1cHxvws8%2BkpJNb3cNNkQ4DjFJf23IOGPwZKhX5lU1E3srTnj3ISWDDyZ5LcjRDx6Sp%2BekxSJYEWeLrsPprVAlElMNwL%2F64apikKrx5PqqLDOSWr3vVACjPciVKfFS%2F7fUSPO%2FTIto4CV%2FhC%2B8l8oWgBAHLJTVECQWymUx0C2czjXvSBxMNlL2vV94ZFUau&X-Amz-Signature=85993c93a884ad5c2e86b5bf829b44eeeb0e2d1eb10d253326f99d77eb972811&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S76QQXPR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAF10uOjdANOWksyiD2KviGelVHvx6op7jOjfhZESLAZAiEA8m7KS1KB2EE6DnASuWoM%2BDbmicDZCqohZQkzO%2BuTZ9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHPP%2FTAzZbeUb4M%2FECrcA4wpJU3aWYvRKR48O8BD6xORtMwFSGHtGGhlebBTjs5937PKEqu4xH6QsTLfl2g1xv93%2BnIChqaQzp8hZsTCuvaoAa2ElZ8nIS8XAU8yAhAeJRB%2FeaOvJeDEhB6jB71zpesfxwlLiRgSZbIAP6vcKZTk8ONygPuO%2ByYUL0eH9pNLPjRUW8PwnPP8lH6Kx%2FQBYYdALKrT89h43hEADur0prnVeoQbfZJ93fg3%2BMAF63mfyxVF0vdUmZ11BE1kqJK%2F2ERLQssSaCHaDuUeZyO65PnNImXEjnuppbItZHwkwtDZ4cgGAJOSkGvI4YS0TyePkhtj7zIKJOi7Bpat6HdGfzoNpmwMDxjy7NEeLWJ2lfuAn1WhsMUWPjxqgnCPH0Dr8Qf4QSbnlkFZWTAHKGe2M%2FhEI52zma%2FoehzncGaqUQMODLOy%2F9Wy6E7B%2Bys9fjZE7GkV2GoEiiqOG3HYq4%2BO3Cgcj67Kx6d4%2FCJlSc86RXAfsMpFlMT8DiJQMyoXFm2uKgPGtlW6Sj383iaiAwOTRZi2loRKHhzpOZs%2FeRB3XCF98TUuhaIYBvdEjr9A9DUIRWcBrlrPD3ea3F5piDfQZ7%2Fuq3p%2BkSlcxi6foZUWc7d7ybEFT2EDvjmFYlfnMJCxwL0GOqUB5ZQSs5lqAD%2Fh8rqsVslcRs8R%2B1rgle1cHxvws8%2BkpJNb3cNNkQ4DjFJf23IOGPwZKhX5lU1E3srTnj3ISWDDyZ5LcjRDx6Sp%2BekxSJYEWeLrsPprVAlElMNwL%2F64apikKrx5PqqLDOSWr3vVACjPciVKfFS%2F7fUSPO%2FTIto4CV%2FhC%2B8l8oWgBAHLJTVECQWymUx0C2czjXvSBxMNlL2vV94ZFUau&X-Amz-Signature=e5a6c936582d49c72fa61bcbff253f56caf202d4126a686e19be85c9b03dfc59&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S76QQXPR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAF10uOjdANOWksyiD2KviGelVHvx6op7jOjfhZESLAZAiEA8m7KS1KB2EE6DnASuWoM%2BDbmicDZCqohZQkzO%2BuTZ9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHPP%2FTAzZbeUb4M%2FECrcA4wpJU3aWYvRKR48O8BD6xORtMwFSGHtGGhlebBTjs5937PKEqu4xH6QsTLfl2g1xv93%2BnIChqaQzp8hZsTCuvaoAa2ElZ8nIS8XAU8yAhAeJRB%2FeaOvJeDEhB6jB71zpesfxwlLiRgSZbIAP6vcKZTk8ONygPuO%2ByYUL0eH9pNLPjRUW8PwnPP8lH6Kx%2FQBYYdALKrT89h43hEADur0prnVeoQbfZJ93fg3%2BMAF63mfyxVF0vdUmZ11BE1kqJK%2F2ERLQssSaCHaDuUeZyO65PnNImXEjnuppbItZHwkwtDZ4cgGAJOSkGvI4YS0TyePkhtj7zIKJOi7Bpat6HdGfzoNpmwMDxjy7NEeLWJ2lfuAn1WhsMUWPjxqgnCPH0Dr8Qf4QSbnlkFZWTAHKGe2M%2FhEI52zma%2FoehzncGaqUQMODLOy%2F9Wy6E7B%2Bys9fjZE7GkV2GoEiiqOG3HYq4%2BO3Cgcj67Kx6d4%2FCJlSc86RXAfsMpFlMT8DiJQMyoXFm2uKgPGtlW6Sj383iaiAwOTRZi2loRKHhzpOZs%2FeRB3XCF98TUuhaIYBvdEjr9A9DUIRWcBrlrPD3ea3F5piDfQZ7%2Fuq3p%2BkSlcxi6foZUWc7d7ybEFT2EDvjmFYlfnMJCxwL0GOqUB5ZQSs5lqAD%2Fh8rqsVslcRs8R%2B1rgle1cHxvws8%2BkpJNb3cNNkQ4DjFJf23IOGPwZKhX5lU1E3srTnj3ISWDDyZ5LcjRDx6Sp%2BekxSJYEWeLrsPprVAlElMNwL%2F64apikKrx5PqqLDOSWr3vVACjPciVKfFS%2F7fUSPO%2FTIto4CV%2FhC%2B8l8oWgBAHLJTVECQWymUx0C2czjXvSBxMNlL2vV94ZFUau&X-Amz-Signature=b73ee3616fb4c287a9d41b6391983c72ffa8d9bca86367f9a203237472fb4633&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S76QQXPR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAF10uOjdANOWksyiD2KviGelVHvx6op7jOjfhZESLAZAiEA8m7KS1KB2EE6DnASuWoM%2BDbmicDZCqohZQkzO%2BuTZ9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHPP%2FTAzZbeUb4M%2FECrcA4wpJU3aWYvRKR48O8BD6xORtMwFSGHtGGhlebBTjs5937PKEqu4xH6QsTLfl2g1xv93%2BnIChqaQzp8hZsTCuvaoAa2ElZ8nIS8XAU8yAhAeJRB%2FeaOvJeDEhB6jB71zpesfxwlLiRgSZbIAP6vcKZTk8ONygPuO%2ByYUL0eH9pNLPjRUW8PwnPP8lH6Kx%2FQBYYdALKrT89h43hEADur0prnVeoQbfZJ93fg3%2BMAF63mfyxVF0vdUmZ11BE1kqJK%2F2ERLQssSaCHaDuUeZyO65PnNImXEjnuppbItZHwkwtDZ4cgGAJOSkGvI4YS0TyePkhtj7zIKJOi7Bpat6HdGfzoNpmwMDxjy7NEeLWJ2lfuAn1WhsMUWPjxqgnCPH0Dr8Qf4QSbnlkFZWTAHKGe2M%2FhEI52zma%2FoehzncGaqUQMODLOy%2F9Wy6E7B%2Bys9fjZE7GkV2GoEiiqOG3HYq4%2BO3Cgcj67Kx6d4%2FCJlSc86RXAfsMpFlMT8DiJQMyoXFm2uKgPGtlW6Sj383iaiAwOTRZi2loRKHhzpOZs%2FeRB3XCF98TUuhaIYBvdEjr9A9DUIRWcBrlrPD3ea3F5piDfQZ7%2Fuq3p%2BkSlcxi6foZUWc7d7ybEFT2EDvjmFYlfnMJCxwL0GOqUB5ZQSs5lqAD%2Fh8rqsVslcRs8R%2B1rgle1cHxvws8%2BkpJNb3cNNkQ4DjFJf23IOGPwZKhX5lU1E3srTnj3ISWDDyZ5LcjRDx6Sp%2BekxSJYEWeLrsPprVAlElMNwL%2F64apikKrx5PqqLDOSWr3vVACjPciVKfFS%2F7fUSPO%2FTIto4CV%2FhC%2B8l8oWgBAHLJTVECQWymUx0C2czjXvSBxMNlL2vV94ZFUau&X-Amz-Signature=1f60519e6fa56beb416f6bfec531a0b90f0842ab5e245063f84d32f57cb36ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S76QQXPR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAF10uOjdANOWksyiD2KviGelVHvx6op7jOjfhZESLAZAiEA8m7KS1KB2EE6DnASuWoM%2BDbmicDZCqohZQkzO%2BuTZ9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHPP%2FTAzZbeUb4M%2FECrcA4wpJU3aWYvRKR48O8BD6xORtMwFSGHtGGhlebBTjs5937PKEqu4xH6QsTLfl2g1xv93%2BnIChqaQzp8hZsTCuvaoAa2ElZ8nIS8XAU8yAhAeJRB%2FeaOvJeDEhB6jB71zpesfxwlLiRgSZbIAP6vcKZTk8ONygPuO%2ByYUL0eH9pNLPjRUW8PwnPP8lH6Kx%2FQBYYdALKrT89h43hEADur0prnVeoQbfZJ93fg3%2BMAF63mfyxVF0vdUmZ11BE1kqJK%2F2ERLQssSaCHaDuUeZyO65PnNImXEjnuppbItZHwkwtDZ4cgGAJOSkGvI4YS0TyePkhtj7zIKJOi7Bpat6HdGfzoNpmwMDxjy7NEeLWJ2lfuAn1WhsMUWPjxqgnCPH0Dr8Qf4QSbnlkFZWTAHKGe2M%2FhEI52zma%2FoehzncGaqUQMODLOy%2F9Wy6E7B%2Bys9fjZE7GkV2GoEiiqOG3HYq4%2BO3Cgcj67Kx6d4%2FCJlSc86RXAfsMpFlMT8DiJQMyoXFm2uKgPGtlW6Sj383iaiAwOTRZi2loRKHhzpOZs%2FeRB3XCF98TUuhaIYBvdEjr9A9DUIRWcBrlrPD3ea3F5piDfQZ7%2Fuq3p%2BkSlcxi6foZUWc7d7ybEFT2EDvjmFYlfnMJCxwL0GOqUB5ZQSs5lqAD%2Fh8rqsVslcRs8R%2B1rgle1cHxvws8%2BkpJNb3cNNkQ4DjFJf23IOGPwZKhX5lU1E3srTnj3ISWDDyZ5LcjRDx6Sp%2BekxSJYEWeLrsPprVAlElMNwL%2F64apikKrx5PqqLDOSWr3vVACjPciVKfFS%2F7fUSPO%2FTIto4CV%2FhC%2B8l8oWgBAHLJTVECQWymUx0C2czjXvSBxMNlL2vV94ZFUau&X-Amz-Signature=b8c7b8f776cc5b0e88be447bd3fa02097f00dc2e823f76963413836172f6134f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S76QQXPR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAF10uOjdANOWksyiD2KviGelVHvx6op7jOjfhZESLAZAiEA8m7KS1KB2EE6DnASuWoM%2BDbmicDZCqohZQkzO%2BuTZ9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHPP%2FTAzZbeUb4M%2FECrcA4wpJU3aWYvRKR48O8BD6xORtMwFSGHtGGhlebBTjs5937PKEqu4xH6QsTLfl2g1xv93%2BnIChqaQzp8hZsTCuvaoAa2ElZ8nIS8XAU8yAhAeJRB%2FeaOvJeDEhB6jB71zpesfxwlLiRgSZbIAP6vcKZTk8ONygPuO%2ByYUL0eH9pNLPjRUW8PwnPP8lH6Kx%2FQBYYdALKrT89h43hEADur0prnVeoQbfZJ93fg3%2BMAF63mfyxVF0vdUmZ11BE1kqJK%2F2ERLQssSaCHaDuUeZyO65PnNImXEjnuppbItZHwkwtDZ4cgGAJOSkGvI4YS0TyePkhtj7zIKJOi7Bpat6HdGfzoNpmwMDxjy7NEeLWJ2lfuAn1WhsMUWPjxqgnCPH0Dr8Qf4QSbnlkFZWTAHKGe2M%2FhEI52zma%2FoehzncGaqUQMODLOy%2F9Wy6E7B%2Bys9fjZE7GkV2GoEiiqOG3HYq4%2BO3Cgcj67Kx6d4%2FCJlSc86RXAfsMpFlMT8DiJQMyoXFm2uKgPGtlW6Sj383iaiAwOTRZi2loRKHhzpOZs%2FeRB3XCF98TUuhaIYBvdEjr9A9DUIRWcBrlrPD3ea3F5piDfQZ7%2Fuq3p%2BkSlcxi6foZUWc7d7ybEFT2EDvjmFYlfnMJCxwL0GOqUB5ZQSs5lqAD%2Fh8rqsVslcRs8R%2B1rgle1cHxvws8%2BkpJNb3cNNkQ4DjFJf23IOGPwZKhX5lU1E3srTnj3ISWDDyZ5LcjRDx6Sp%2BekxSJYEWeLrsPprVAlElMNwL%2F64apikKrx5PqqLDOSWr3vVACjPciVKfFS%2F7fUSPO%2FTIto4CV%2FhC%2B8l8oWgBAHLJTVECQWymUx0C2czjXvSBxMNlL2vV94ZFUau&X-Amz-Signature=092048c7d2e34206ed3b79e377491b5bb778f4fc2538d390a722d065729ea9ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
