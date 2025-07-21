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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGSILLJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHHvjfKDXWYx9tYsizMIpI1gJW5vAJMYkn9OBEWYMacAiAvwHmvu5ZzEY%2B%2Bgc%2FFRUwSs5dxvrCCOWe0Z5XtJ%2FfPqCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6VN7D6pmrTvrh8fpKtwDW99VrtlnRibCzeWFtA4Dv8N%2BdvQK9XeEsqxcuiZd14DhUx0LZZom3iEhZitgnuX1i793%2F1%2F1UdfhjOQbyDAJsS91Zwa8CnnD1O3TPhg%2FafYjucPY4fUudzh5zkALupSj7XTn%2FRns%2FyYfKn5ahegwiJnJk2FDhiNbTo0msF9UZpzUKffvM2ML%2BMXhnq9QDmgSJPta%2F7VvDsT%2FyDlmJNDF7ndDxAAKbGfRFByH4%2FXWSSqLeMhBeGhaJFtGBGUZ4QVl8iw6G%2BPKhRNhpu589Ye%2F9oQ7CRp5mZWAfvqncsJYJIsWs4kaE0%2FOCJj43sCLGA31JDL9NOgFMjnjHtTmZmGTTy2ORnhcx7kn8LvdPcVNPCE5uC2veNi6EKKmOBh6eLYXC3Dsl2cGepqdWPwrBa0PHS4bPICuVFxPEa997fQ0h3xMzT3evD%2FurWWiS9rLkvd1ytBs3NODnpzsSWPyukbWaUbwZAC0gaRX18Y973CZjMi6xZbNr8%2B4rmem86%2B6k5JAZdGUb%2BsUH0zR1s6%2BMs%2F51PgPXIONWN7UwXETYxQbdfktio45rQGawQeHZxEtH3jrhOB9ng0GIrVO4CTNLGZ3WYmJtNY8F%2FdysTdJhUX2WuBghV%2FVtSz%2F7zhQK8IwiJP3wwY6pgFGNiW6wauF363jN913rAslVGxKkhk%2BwkCoFK7Ilf8gkk4WjWuMW%2BV24ioGQ7eQe7GOWoUWSNVgr6LRkP5VBevX7tLX4uTI%2FIkwUdyJI2eTGDZfL9R7yjAKWX0nCUS8IzhXEFnKY4xqxLQ17exSv7SnBYXcJeSUJa%2FTagbTC9Beo814foDJ4Jdm%2B7h%2BohURl%2FifXC6S3zy3Ecj3hShzVskGl0%2BCTR4e&X-Amz-Signature=0a7fde0a0f07291cf18b2e1797861fed60963d936bb8b5b9bb61902e5300a660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGSILLJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHHvjfKDXWYx9tYsizMIpI1gJW5vAJMYkn9OBEWYMacAiAvwHmvu5ZzEY%2B%2Bgc%2FFRUwSs5dxvrCCOWe0Z5XtJ%2FfPqCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6VN7D6pmrTvrh8fpKtwDW99VrtlnRibCzeWFtA4Dv8N%2BdvQK9XeEsqxcuiZd14DhUx0LZZom3iEhZitgnuX1i793%2F1%2F1UdfhjOQbyDAJsS91Zwa8CnnD1O3TPhg%2FafYjucPY4fUudzh5zkALupSj7XTn%2FRns%2FyYfKn5ahegwiJnJk2FDhiNbTo0msF9UZpzUKffvM2ML%2BMXhnq9QDmgSJPta%2F7VvDsT%2FyDlmJNDF7ndDxAAKbGfRFByH4%2FXWSSqLeMhBeGhaJFtGBGUZ4QVl8iw6G%2BPKhRNhpu589Ye%2F9oQ7CRp5mZWAfvqncsJYJIsWs4kaE0%2FOCJj43sCLGA31JDL9NOgFMjnjHtTmZmGTTy2ORnhcx7kn8LvdPcVNPCE5uC2veNi6EKKmOBh6eLYXC3Dsl2cGepqdWPwrBa0PHS4bPICuVFxPEa997fQ0h3xMzT3evD%2FurWWiS9rLkvd1ytBs3NODnpzsSWPyukbWaUbwZAC0gaRX18Y973CZjMi6xZbNr8%2B4rmem86%2B6k5JAZdGUb%2BsUH0zR1s6%2BMs%2F51PgPXIONWN7UwXETYxQbdfktio45rQGawQeHZxEtH3jrhOB9ng0GIrVO4CTNLGZ3WYmJtNY8F%2FdysTdJhUX2WuBghV%2FVtSz%2F7zhQK8IwiJP3wwY6pgFGNiW6wauF363jN913rAslVGxKkhk%2BwkCoFK7Ilf8gkk4WjWuMW%2BV24ioGQ7eQe7GOWoUWSNVgr6LRkP5VBevX7tLX4uTI%2FIkwUdyJI2eTGDZfL9R7yjAKWX0nCUS8IzhXEFnKY4xqxLQ17exSv7SnBYXcJeSUJa%2FTagbTC9Beo814foDJ4Jdm%2B7h%2BohURl%2FifXC6S3zy3Ecj3hShzVskGl0%2BCTR4e&X-Amz-Signature=1003b23db946268ef98c7552bb5322f505bcea34c8b2f2022b20622a102a9ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGSILLJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHHvjfKDXWYx9tYsizMIpI1gJW5vAJMYkn9OBEWYMacAiAvwHmvu5ZzEY%2B%2Bgc%2FFRUwSs5dxvrCCOWe0Z5XtJ%2FfPqCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6VN7D6pmrTvrh8fpKtwDW99VrtlnRibCzeWFtA4Dv8N%2BdvQK9XeEsqxcuiZd14DhUx0LZZom3iEhZitgnuX1i793%2F1%2F1UdfhjOQbyDAJsS91Zwa8CnnD1O3TPhg%2FafYjucPY4fUudzh5zkALupSj7XTn%2FRns%2FyYfKn5ahegwiJnJk2FDhiNbTo0msF9UZpzUKffvM2ML%2BMXhnq9QDmgSJPta%2F7VvDsT%2FyDlmJNDF7ndDxAAKbGfRFByH4%2FXWSSqLeMhBeGhaJFtGBGUZ4QVl8iw6G%2BPKhRNhpu589Ye%2F9oQ7CRp5mZWAfvqncsJYJIsWs4kaE0%2FOCJj43sCLGA31JDL9NOgFMjnjHtTmZmGTTy2ORnhcx7kn8LvdPcVNPCE5uC2veNi6EKKmOBh6eLYXC3Dsl2cGepqdWPwrBa0PHS4bPICuVFxPEa997fQ0h3xMzT3evD%2FurWWiS9rLkvd1ytBs3NODnpzsSWPyukbWaUbwZAC0gaRX18Y973CZjMi6xZbNr8%2B4rmem86%2B6k5JAZdGUb%2BsUH0zR1s6%2BMs%2F51PgPXIONWN7UwXETYxQbdfktio45rQGawQeHZxEtH3jrhOB9ng0GIrVO4CTNLGZ3WYmJtNY8F%2FdysTdJhUX2WuBghV%2FVtSz%2F7zhQK8IwiJP3wwY6pgFGNiW6wauF363jN913rAslVGxKkhk%2BwkCoFK7Ilf8gkk4WjWuMW%2BV24ioGQ7eQe7GOWoUWSNVgr6LRkP5VBevX7tLX4uTI%2FIkwUdyJI2eTGDZfL9R7yjAKWX0nCUS8IzhXEFnKY4xqxLQ17exSv7SnBYXcJeSUJa%2FTagbTC9Beo814foDJ4Jdm%2B7h%2BohURl%2FifXC6S3zy3Ecj3hShzVskGl0%2BCTR4e&X-Amz-Signature=2af0a63f518733d8dca3e45c93fe22ba26767015bb90703205255ff1de81e9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGSILLJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHHvjfKDXWYx9tYsizMIpI1gJW5vAJMYkn9OBEWYMacAiAvwHmvu5ZzEY%2B%2Bgc%2FFRUwSs5dxvrCCOWe0Z5XtJ%2FfPqCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6VN7D6pmrTvrh8fpKtwDW99VrtlnRibCzeWFtA4Dv8N%2BdvQK9XeEsqxcuiZd14DhUx0LZZom3iEhZitgnuX1i793%2F1%2F1UdfhjOQbyDAJsS91Zwa8CnnD1O3TPhg%2FafYjucPY4fUudzh5zkALupSj7XTn%2FRns%2FyYfKn5ahegwiJnJk2FDhiNbTo0msF9UZpzUKffvM2ML%2BMXhnq9QDmgSJPta%2F7VvDsT%2FyDlmJNDF7ndDxAAKbGfRFByH4%2FXWSSqLeMhBeGhaJFtGBGUZ4QVl8iw6G%2BPKhRNhpu589Ye%2F9oQ7CRp5mZWAfvqncsJYJIsWs4kaE0%2FOCJj43sCLGA31JDL9NOgFMjnjHtTmZmGTTy2ORnhcx7kn8LvdPcVNPCE5uC2veNi6EKKmOBh6eLYXC3Dsl2cGepqdWPwrBa0PHS4bPICuVFxPEa997fQ0h3xMzT3evD%2FurWWiS9rLkvd1ytBs3NODnpzsSWPyukbWaUbwZAC0gaRX18Y973CZjMi6xZbNr8%2B4rmem86%2B6k5JAZdGUb%2BsUH0zR1s6%2BMs%2F51PgPXIONWN7UwXETYxQbdfktio45rQGawQeHZxEtH3jrhOB9ng0GIrVO4CTNLGZ3WYmJtNY8F%2FdysTdJhUX2WuBghV%2FVtSz%2F7zhQK8IwiJP3wwY6pgFGNiW6wauF363jN913rAslVGxKkhk%2BwkCoFK7Ilf8gkk4WjWuMW%2BV24ioGQ7eQe7GOWoUWSNVgr6LRkP5VBevX7tLX4uTI%2FIkwUdyJI2eTGDZfL9R7yjAKWX0nCUS8IzhXEFnKY4xqxLQ17exSv7SnBYXcJeSUJa%2FTagbTC9Beo814foDJ4Jdm%2B7h%2BohURl%2FifXC6S3zy3Ecj3hShzVskGl0%2BCTR4e&X-Amz-Signature=2dbc5665b89984718acdd5577bcac195a777c6ebda184bb77e3ab9366277c494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGSILLJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHHvjfKDXWYx9tYsizMIpI1gJW5vAJMYkn9OBEWYMacAiAvwHmvu5ZzEY%2B%2Bgc%2FFRUwSs5dxvrCCOWe0Z5XtJ%2FfPqCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6VN7D6pmrTvrh8fpKtwDW99VrtlnRibCzeWFtA4Dv8N%2BdvQK9XeEsqxcuiZd14DhUx0LZZom3iEhZitgnuX1i793%2F1%2F1UdfhjOQbyDAJsS91Zwa8CnnD1O3TPhg%2FafYjucPY4fUudzh5zkALupSj7XTn%2FRns%2FyYfKn5ahegwiJnJk2FDhiNbTo0msF9UZpzUKffvM2ML%2BMXhnq9QDmgSJPta%2F7VvDsT%2FyDlmJNDF7ndDxAAKbGfRFByH4%2FXWSSqLeMhBeGhaJFtGBGUZ4QVl8iw6G%2BPKhRNhpu589Ye%2F9oQ7CRp5mZWAfvqncsJYJIsWs4kaE0%2FOCJj43sCLGA31JDL9NOgFMjnjHtTmZmGTTy2ORnhcx7kn8LvdPcVNPCE5uC2veNi6EKKmOBh6eLYXC3Dsl2cGepqdWPwrBa0PHS4bPICuVFxPEa997fQ0h3xMzT3evD%2FurWWiS9rLkvd1ytBs3NODnpzsSWPyukbWaUbwZAC0gaRX18Y973CZjMi6xZbNr8%2B4rmem86%2B6k5JAZdGUb%2BsUH0zR1s6%2BMs%2F51PgPXIONWN7UwXETYxQbdfktio45rQGawQeHZxEtH3jrhOB9ng0GIrVO4CTNLGZ3WYmJtNY8F%2FdysTdJhUX2WuBghV%2FVtSz%2F7zhQK8IwiJP3wwY6pgFGNiW6wauF363jN913rAslVGxKkhk%2BwkCoFK7Ilf8gkk4WjWuMW%2BV24ioGQ7eQe7GOWoUWSNVgr6LRkP5VBevX7tLX4uTI%2FIkwUdyJI2eTGDZfL9R7yjAKWX0nCUS8IzhXEFnKY4xqxLQ17exSv7SnBYXcJeSUJa%2FTagbTC9Beo814foDJ4Jdm%2B7h%2BohURl%2FifXC6S3zy3Ecj3hShzVskGl0%2BCTR4e&X-Amz-Signature=00ba4d4f586308a17bf36ac6b585da4fe492c50508f354f79527dcc1c8c6db47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGSILLJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHHvjfKDXWYx9tYsizMIpI1gJW5vAJMYkn9OBEWYMacAiAvwHmvu5ZzEY%2B%2Bgc%2FFRUwSs5dxvrCCOWe0Z5XtJ%2FfPqCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6VN7D6pmrTvrh8fpKtwDW99VrtlnRibCzeWFtA4Dv8N%2BdvQK9XeEsqxcuiZd14DhUx0LZZom3iEhZitgnuX1i793%2F1%2F1UdfhjOQbyDAJsS91Zwa8CnnD1O3TPhg%2FafYjucPY4fUudzh5zkALupSj7XTn%2FRns%2FyYfKn5ahegwiJnJk2FDhiNbTo0msF9UZpzUKffvM2ML%2BMXhnq9QDmgSJPta%2F7VvDsT%2FyDlmJNDF7ndDxAAKbGfRFByH4%2FXWSSqLeMhBeGhaJFtGBGUZ4QVl8iw6G%2BPKhRNhpu589Ye%2F9oQ7CRp5mZWAfvqncsJYJIsWs4kaE0%2FOCJj43sCLGA31JDL9NOgFMjnjHtTmZmGTTy2ORnhcx7kn8LvdPcVNPCE5uC2veNi6EKKmOBh6eLYXC3Dsl2cGepqdWPwrBa0PHS4bPICuVFxPEa997fQ0h3xMzT3evD%2FurWWiS9rLkvd1ytBs3NODnpzsSWPyukbWaUbwZAC0gaRX18Y973CZjMi6xZbNr8%2B4rmem86%2B6k5JAZdGUb%2BsUH0zR1s6%2BMs%2F51PgPXIONWN7UwXETYxQbdfktio45rQGawQeHZxEtH3jrhOB9ng0GIrVO4CTNLGZ3WYmJtNY8F%2FdysTdJhUX2WuBghV%2FVtSz%2F7zhQK8IwiJP3wwY6pgFGNiW6wauF363jN913rAslVGxKkhk%2BwkCoFK7Ilf8gkk4WjWuMW%2BV24ioGQ7eQe7GOWoUWSNVgr6LRkP5VBevX7tLX4uTI%2FIkwUdyJI2eTGDZfL9R7yjAKWX0nCUS8IzhXEFnKY4xqxLQ17exSv7SnBYXcJeSUJa%2FTagbTC9Beo814foDJ4Jdm%2B7h%2BohURl%2FifXC6S3zy3Ecj3hShzVskGl0%2BCTR4e&X-Amz-Signature=ce00f78906ca2a62522b4c3446570504b3a43bc4b91a729869cd10f968677102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGSILLJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHHvjfKDXWYx9tYsizMIpI1gJW5vAJMYkn9OBEWYMacAiAvwHmvu5ZzEY%2B%2Bgc%2FFRUwSs5dxvrCCOWe0Z5XtJ%2FfPqCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6VN7D6pmrTvrh8fpKtwDW99VrtlnRibCzeWFtA4Dv8N%2BdvQK9XeEsqxcuiZd14DhUx0LZZom3iEhZitgnuX1i793%2F1%2F1UdfhjOQbyDAJsS91Zwa8CnnD1O3TPhg%2FafYjucPY4fUudzh5zkALupSj7XTn%2FRns%2FyYfKn5ahegwiJnJk2FDhiNbTo0msF9UZpzUKffvM2ML%2BMXhnq9QDmgSJPta%2F7VvDsT%2FyDlmJNDF7ndDxAAKbGfRFByH4%2FXWSSqLeMhBeGhaJFtGBGUZ4QVl8iw6G%2BPKhRNhpu589Ye%2F9oQ7CRp5mZWAfvqncsJYJIsWs4kaE0%2FOCJj43sCLGA31JDL9NOgFMjnjHtTmZmGTTy2ORnhcx7kn8LvdPcVNPCE5uC2veNi6EKKmOBh6eLYXC3Dsl2cGepqdWPwrBa0PHS4bPICuVFxPEa997fQ0h3xMzT3evD%2FurWWiS9rLkvd1ytBs3NODnpzsSWPyukbWaUbwZAC0gaRX18Y973CZjMi6xZbNr8%2B4rmem86%2B6k5JAZdGUb%2BsUH0zR1s6%2BMs%2F51PgPXIONWN7UwXETYxQbdfktio45rQGawQeHZxEtH3jrhOB9ng0GIrVO4CTNLGZ3WYmJtNY8F%2FdysTdJhUX2WuBghV%2FVtSz%2F7zhQK8IwiJP3wwY6pgFGNiW6wauF363jN913rAslVGxKkhk%2BwkCoFK7Ilf8gkk4WjWuMW%2BV24ioGQ7eQe7GOWoUWSNVgr6LRkP5VBevX7tLX4uTI%2FIkwUdyJI2eTGDZfL9R7yjAKWX0nCUS8IzhXEFnKY4xqxLQ17exSv7SnBYXcJeSUJa%2FTagbTC9Beo814foDJ4Jdm%2B7h%2BohURl%2FifXC6S3zy3Ecj3hShzVskGl0%2BCTR4e&X-Amz-Signature=02e5f988bb59c0e12250c1e58e43dc1d91ee4fd8a1233b9308037f8349ad6a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGSILLJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHHvjfKDXWYx9tYsizMIpI1gJW5vAJMYkn9OBEWYMacAiAvwHmvu5ZzEY%2B%2Bgc%2FFRUwSs5dxvrCCOWe0Z5XtJ%2FfPqCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6VN7D6pmrTvrh8fpKtwDW99VrtlnRibCzeWFtA4Dv8N%2BdvQK9XeEsqxcuiZd14DhUx0LZZom3iEhZitgnuX1i793%2F1%2F1UdfhjOQbyDAJsS91Zwa8CnnD1O3TPhg%2FafYjucPY4fUudzh5zkALupSj7XTn%2FRns%2FyYfKn5ahegwiJnJk2FDhiNbTo0msF9UZpzUKffvM2ML%2BMXhnq9QDmgSJPta%2F7VvDsT%2FyDlmJNDF7ndDxAAKbGfRFByH4%2FXWSSqLeMhBeGhaJFtGBGUZ4QVl8iw6G%2BPKhRNhpu589Ye%2F9oQ7CRp5mZWAfvqncsJYJIsWs4kaE0%2FOCJj43sCLGA31JDL9NOgFMjnjHtTmZmGTTy2ORnhcx7kn8LvdPcVNPCE5uC2veNi6EKKmOBh6eLYXC3Dsl2cGepqdWPwrBa0PHS4bPICuVFxPEa997fQ0h3xMzT3evD%2FurWWiS9rLkvd1ytBs3NODnpzsSWPyukbWaUbwZAC0gaRX18Y973CZjMi6xZbNr8%2B4rmem86%2B6k5JAZdGUb%2BsUH0zR1s6%2BMs%2F51PgPXIONWN7UwXETYxQbdfktio45rQGawQeHZxEtH3jrhOB9ng0GIrVO4CTNLGZ3WYmJtNY8F%2FdysTdJhUX2WuBghV%2FVtSz%2F7zhQK8IwiJP3wwY6pgFGNiW6wauF363jN913rAslVGxKkhk%2BwkCoFK7Ilf8gkk4WjWuMW%2BV24ioGQ7eQe7GOWoUWSNVgr6LRkP5VBevX7tLX4uTI%2FIkwUdyJI2eTGDZfL9R7yjAKWX0nCUS8IzhXEFnKY4xqxLQ17exSv7SnBYXcJeSUJa%2FTagbTC9Beo814foDJ4Jdm%2B7h%2BohURl%2FifXC6S3zy3Ecj3hShzVskGl0%2BCTR4e&X-Amz-Signature=d91ec4a2c2c8eea83f28fb37edc063fe1f66a7025c9682076d96a6c31d0d8025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
