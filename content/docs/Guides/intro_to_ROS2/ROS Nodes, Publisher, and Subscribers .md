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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7AKZDD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDYGGGYO3G4Q6ItiEpVo6X3FbtWAmYLFuAck7MuHqCKeAIhANuda1rLgiV3srL1XGSFQO8I6TgO0uYiwCCnppwNUo79Kv8DCEgQABoMNjM3NDIzMTgzODA1IgxEe1bVbQX%2FYMeB7SQq3AMZhh2eK4bz%2B9502xN%2BewyJBQukMtaKCPmgpgGulAzguYU3ovaWtl3DboQ53wPEHwNxZ5QUPACfRereDViIVl3kvyN%2BC1GiEEfxfvgJVq1%2BjWA%2Fm5iFTmvB7rHJSkD%2FDTXacicJu7buUzFZVN1COudwnedlXnQndIPvW9z7Q5p4ozCFXYLLtQHXkwqxR%2BpTu1RoHjlhwu0aD2qZT%2BijG2dP7%2FspVgWpDgOyhOVJyRWwoPoe%2B8M7G8ioQZkGK9JzRPM1Cb%2BuELeLmZVyZagAR3jQamqpUDVOPafqwZcWL0syN1iOFfY2e8fIHXIRZE65755%2FboOajY53MSFjrUzUzx1Mc8paU2rVpWGytAZeyR6v1SvhMe8YAI2xOITjeBWk8wz8H68VyF4wqNiy5dfgRbfijPUxamlRM%2BULFV8orXBn53cumm6DJtYrJSWQq66dhfAvPV9ikQA69MdJxB9D8qKjzxh7WOGY4byMl1B2ElJXBRVDybM9zpEFi9Xqi1PzCBgMkBHIDaaLjRToKMEqGDYdvwH6qRmiQzh0lLunGnJT9eW5m%2F4tg0pr3XJdspLkYClGqkBGC0IQI8hEm6xeVsAIIr%2Bdg9zUHu7IZ9x7P1SfCAwMwGmQLpxUPZDisTDVvI7EBjqkAXQxhUrwFKiQliyc1Hq9GYoKK7LPTDbVXWLwrR0RaTG6cyTZKbfWeIpJHZ6krV8j2fyXB7npg9%2FoemlU5nh4RuYPxN%2BtDUCs4sW3EV1%2BCYNiwOCGIYNtoWAE%2BOBdLZUFvzWFXYFf2tSnI2IZ1EZz39NoGbyRZq8dDG6HtJNtetf9vAVFBnNXM79kBJMnIdnsVlzk4NjS%2FacPBdHCreEDKNt%2BhMYx&X-Amz-Signature=47cd2e9231f3f7fd6639a94398d1f3c4f987811bbbc21eaa9c2cc90920a41ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7AKZDD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDYGGGYO3G4Q6ItiEpVo6X3FbtWAmYLFuAck7MuHqCKeAIhANuda1rLgiV3srL1XGSFQO8I6TgO0uYiwCCnppwNUo79Kv8DCEgQABoMNjM3NDIzMTgzODA1IgxEe1bVbQX%2FYMeB7SQq3AMZhh2eK4bz%2B9502xN%2BewyJBQukMtaKCPmgpgGulAzguYU3ovaWtl3DboQ53wPEHwNxZ5QUPACfRereDViIVl3kvyN%2BC1GiEEfxfvgJVq1%2BjWA%2Fm5iFTmvB7rHJSkD%2FDTXacicJu7buUzFZVN1COudwnedlXnQndIPvW9z7Q5p4ozCFXYLLtQHXkwqxR%2BpTu1RoHjlhwu0aD2qZT%2BijG2dP7%2FspVgWpDgOyhOVJyRWwoPoe%2B8M7G8ioQZkGK9JzRPM1Cb%2BuELeLmZVyZagAR3jQamqpUDVOPafqwZcWL0syN1iOFfY2e8fIHXIRZE65755%2FboOajY53MSFjrUzUzx1Mc8paU2rVpWGytAZeyR6v1SvhMe8YAI2xOITjeBWk8wz8H68VyF4wqNiy5dfgRbfijPUxamlRM%2BULFV8orXBn53cumm6DJtYrJSWQq66dhfAvPV9ikQA69MdJxB9D8qKjzxh7WOGY4byMl1B2ElJXBRVDybM9zpEFi9Xqi1PzCBgMkBHIDaaLjRToKMEqGDYdvwH6qRmiQzh0lLunGnJT9eW5m%2F4tg0pr3XJdspLkYClGqkBGC0IQI8hEm6xeVsAIIr%2Bdg9zUHu7IZ9x7P1SfCAwMwGmQLpxUPZDisTDVvI7EBjqkAXQxhUrwFKiQliyc1Hq9GYoKK7LPTDbVXWLwrR0RaTG6cyTZKbfWeIpJHZ6krV8j2fyXB7npg9%2FoemlU5nh4RuYPxN%2BtDUCs4sW3EV1%2BCYNiwOCGIYNtoWAE%2BOBdLZUFvzWFXYFf2tSnI2IZ1EZz39NoGbyRZq8dDG6HtJNtetf9vAVFBnNXM79kBJMnIdnsVlzk4NjS%2FacPBdHCreEDKNt%2BhMYx&X-Amz-Signature=5fbedbd88c908a9d333224c729b1be847685973c58282139126e3b26bd70ebe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7AKZDD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDYGGGYO3G4Q6ItiEpVo6X3FbtWAmYLFuAck7MuHqCKeAIhANuda1rLgiV3srL1XGSFQO8I6TgO0uYiwCCnppwNUo79Kv8DCEgQABoMNjM3NDIzMTgzODA1IgxEe1bVbQX%2FYMeB7SQq3AMZhh2eK4bz%2B9502xN%2BewyJBQukMtaKCPmgpgGulAzguYU3ovaWtl3DboQ53wPEHwNxZ5QUPACfRereDViIVl3kvyN%2BC1GiEEfxfvgJVq1%2BjWA%2Fm5iFTmvB7rHJSkD%2FDTXacicJu7buUzFZVN1COudwnedlXnQndIPvW9z7Q5p4ozCFXYLLtQHXkwqxR%2BpTu1RoHjlhwu0aD2qZT%2BijG2dP7%2FspVgWpDgOyhOVJyRWwoPoe%2B8M7G8ioQZkGK9JzRPM1Cb%2BuELeLmZVyZagAR3jQamqpUDVOPafqwZcWL0syN1iOFfY2e8fIHXIRZE65755%2FboOajY53MSFjrUzUzx1Mc8paU2rVpWGytAZeyR6v1SvhMe8YAI2xOITjeBWk8wz8H68VyF4wqNiy5dfgRbfijPUxamlRM%2BULFV8orXBn53cumm6DJtYrJSWQq66dhfAvPV9ikQA69MdJxB9D8qKjzxh7WOGY4byMl1B2ElJXBRVDybM9zpEFi9Xqi1PzCBgMkBHIDaaLjRToKMEqGDYdvwH6qRmiQzh0lLunGnJT9eW5m%2F4tg0pr3XJdspLkYClGqkBGC0IQI8hEm6xeVsAIIr%2Bdg9zUHu7IZ9x7P1SfCAwMwGmQLpxUPZDisTDVvI7EBjqkAXQxhUrwFKiQliyc1Hq9GYoKK7LPTDbVXWLwrR0RaTG6cyTZKbfWeIpJHZ6krV8j2fyXB7npg9%2FoemlU5nh4RuYPxN%2BtDUCs4sW3EV1%2BCYNiwOCGIYNtoWAE%2BOBdLZUFvzWFXYFf2tSnI2IZ1EZz39NoGbyRZq8dDG6HtJNtetf9vAVFBnNXM79kBJMnIdnsVlzk4NjS%2FacPBdHCreEDKNt%2BhMYx&X-Amz-Signature=d6ba90f8a2869af7267c22b9b359709545b32672b9d479de44f17086a785d02f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7AKZDD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDYGGGYO3G4Q6ItiEpVo6X3FbtWAmYLFuAck7MuHqCKeAIhANuda1rLgiV3srL1XGSFQO8I6TgO0uYiwCCnppwNUo79Kv8DCEgQABoMNjM3NDIzMTgzODA1IgxEe1bVbQX%2FYMeB7SQq3AMZhh2eK4bz%2B9502xN%2BewyJBQukMtaKCPmgpgGulAzguYU3ovaWtl3DboQ53wPEHwNxZ5QUPACfRereDViIVl3kvyN%2BC1GiEEfxfvgJVq1%2BjWA%2Fm5iFTmvB7rHJSkD%2FDTXacicJu7buUzFZVN1COudwnedlXnQndIPvW9z7Q5p4ozCFXYLLtQHXkwqxR%2BpTu1RoHjlhwu0aD2qZT%2BijG2dP7%2FspVgWpDgOyhOVJyRWwoPoe%2B8M7G8ioQZkGK9JzRPM1Cb%2BuELeLmZVyZagAR3jQamqpUDVOPafqwZcWL0syN1iOFfY2e8fIHXIRZE65755%2FboOajY53MSFjrUzUzx1Mc8paU2rVpWGytAZeyR6v1SvhMe8YAI2xOITjeBWk8wz8H68VyF4wqNiy5dfgRbfijPUxamlRM%2BULFV8orXBn53cumm6DJtYrJSWQq66dhfAvPV9ikQA69MdJxB9D8qKjzxh7WOGY4byMl1B2ElJXBRVDybM9zpEFi9Xqi1PzCBgMkBHIDaaLjRToKMEqGDYdvwH6qRmiQzh0lLunGnJT9eW5m%2F4tg0pr3XJdspLkYClGqkBGC0IQI8hEm6xeVsAIIr%2Bdg9zUHu7IZ9x7P1SfCAwMwGmQLpxUPZDisTDVvI7EBjqkAXQxhUrwFKiQliyc1Hq9GYoKK7LPTDbVXWLwrR0RaTG6cyTZKbfWeIpJHZ6krV8j2fyXB7npg9%2FoemlU5nh4RuYPxN%2BtDUCs4sW3EV1%2BCYNiwOCGIYNtoWAE%2BOBdLZUFvzWFXYFf2tSnI2IZ1EZz39NoGbyRZq8dDG6HtJNtetf9vAVFBnNXM79kBJMnIdnsVlzk4NjS%2FacPBdHCreEDKNt%2BhMYx&X-Amz-Signature=39460ef2edd2dcb96d5ee930954e482d1728c4e51dc2fde0e2388867ae111f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7AKZDD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDYGGGYO3G4Q6ItiEpVo6X3FbtWAmYLFuAck7MuHqCKeAIhANuda1rLgiV3srL1XGSFQO8I6TgO0uYiwCCnppwNUo79Kv8DCEgQABoMNjM3NDIzMTgzODA1IgxEe1bVbQX%2FYMeB7SQq3AMZhh2eK4bz%2B9502xN%2BewyJBQukMtaKCPmgpgGulAzguYU3ovaWtl3DboQ53wPEHwNxZ5QUPACfRereDViIVl3kvyN%2BC1GiEEfxfvgJVq1%2BjWA%2Fm5iFTmvB7rHJSkD%2FDTXacicJu7buUzFZVN1COudwnedlXnQndIPvW9z7Q5p4ozCFXYLLtQHXkwqxR%2BpTu1RoHjlhwu0aD2qZT%2BijG2dP7%2FspVgWpDgOyhOVJyRWwoPoe%2B8M7G8ioQZkGK9JzRPM1Cb%2BuELeLmZVyZagAR3jQamqpUDVOPafqwZcWL0syN1iOFfY2e8fIHXIRZE65755%2FboOajY53MSFjrUzUzx1Mc8paU2rVpWGytAZeyR6v1SvhMe8YAI2xOITjeBWk8wz8H68VyF4wqNiy5dfgRbfijPUxamlRM%2BULFV8orXBn53cumm6DJtYrJSWQq66dhfAvPV9ikQA69MdJxB9D8qKjzxh7WOGY4byMl1B2ElJXBRVDybM9zpEFi9Xqi1PzCBgMkBHIDaaLjRToKMEqGDYdvwH6qRmiQzh0lLunGnJT9eW5m%2F4tg0pr3XJdspLkYClGqkBGC0IQI8hEm6xeVsAIIr%2Bdg9zUHu7IZ9x7P1SfCAwMwGmQLpxUPZDisTDVvI7EBjqkAXQxhUrwFKiQliyc1Hq9GYoKK7LPTDbVXWLwrR0RaTG6cyTZKbfWeIpJHZ6krV8j2fyXB7npg9%2FoemlU5nh4RuYPxN%2BtDUCs4sW3EV1%2BCYNiwOCGIYNtoWAE%2BOBdLZUFvzWFXYFf2tSnI2IZ1EZz39NoGbyRZq8dDG6HtJNtetf9vAVFBnNXM79kBJMnIdnsVlzk4NjS%2FacPBdHCreEDKNt%2BhMYx&X-Amz-Signature=82b325003e8cccf22afe69a5ac0214d5ece642a436af96ce93df97f2a49956f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7AKZDD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDYGGGYO3G4Q6ItiEpVo6X3FbtWAmYLFuAck7MuHqCKeAIhANuda1rLgiV3srL1XGSFQO8I6TgO0uYiwCCnppwNUo79Kv8DCEgQABoMNjM3NDIzMTgzODA1IgxEe1bVbQX%2FYMeB7SQq3AMZhh2eK4bz%2B9502xN%2BewyJBQukMtaKCPmgpgGulAzguYU3ovaWtl3DboQ53wPEHwNxZ5QUPACfRereDViIVl3kvyN%2BC1GiEEfxfvgJVq1%2BjWA%2Fm5iFTmvB7rHJSkD%2FDTXacicJu7buUzFZVN1COudwnedlXnQndIPvW9z7Q5p4ozCFXYLLtQHXkwqxR%2BpTu1RoHjlhwu0aD2qZT%2BijG2dP7%2FspVgWpDgOyhOVJyRWwoPoe%2B8M7G8ioQZkGK9JzRPM1Cb%2BuELeLmZVyZagAR3jQamqpUDVOPafqwZcWL0syN1iOFfY2e8fIHXIRZE65755%2FboOajY53MSFjrUzUzx1Mc8paU2rVpWGytAZeyR6v1SvhMe8YAI2xOITjeBWk8wz8H68VyF4wqNiy5dfgRbfijPUxamlRM%2BULFV8orXBn53cumm6DJtYrJSWQq66dhfAvPV9ikQA69MdJxB9D8qKjzxh7WOGY4byMl1B2ElJXBRVDybM9zpEFi9Xqi1PzCBgMkBHIDaaLjRToKMEqGDYdvwH6qRmiQzh0lLunGnJT9eW5m%2F4tg0pr3XJdspLkYClGqkBGC0IQI8hEm6xeVsAIIr%2Bdg9zUHu7IZ9x7P1SfCAwMwGmQLpxUPZDisTDVvI7EBjqkAXQxhUrwFKiQliyc1Hq9GYoKK7LPTDbVXWLwrR0RaTG6cyTZKbfWeIpJHZ6krV8j2fyXB7npg9%2FoemlU5nh4RuYPxN%2BtDUCs4sW3EV1%2BCYNiwOCGIYNtoWAE%2BOBdLZUFvzWFXYFf2tSnI2IZ1EZz39NoGbyRZq8dDG6HtJNtetf9vAVFBnNXM79kBJMnIdnsVlzk4NjS%2FacPBdHCreEDKNt%2BhMYx&X-Amz-Signature=4d45cbbb1bc428cfe47fc6632bf0bcf6a74c3b0069f4f48d59430ac019b3a98c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7AKZDD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDYGGGYO3G4Q6ItiEpVo6X3FbtWAmYLFuAck7MuHqCKeAIhANuda1rLgiV3srL1XGSFQO8I6TgO0uYiwCCnppwNUo79Kv8DCEgQABoMNjM3NDIzMTgzODA1IgxEe1bVbQX%2FYMeB7SQq3AMZhh2eK4bz%2B9502xN%2BewyJBQukMtaKCPmgpgGulAzguYU3ovaWtl3DboQ53wPEHwNxZ5QUPACfRereDViIVl3kvyN%2BC1GiEEfxfvgJVq1%2BjWA%2Fm5iFTmvB7rHJSkD%2FDTXacicJu7buUzFZVN1COudwnedlXnQndIPvW9z7Q5p4ozCFXYLLtQHXkwqxR%2BpTu1RoHjlhwu0aD2qZT%2BijG2dP7%2FspVgWpDgOyhOVJyRWwoPoe%2B8M7G8ioQZkGK9JzRPM1Cb%2BuELeLmZVyZagAR3jQamqpUDVOPafqwZcWL0syN1iOFfY2e8fIHXIRZE65755%2FboOajY53MSFjrUzUzx1Mc8paU2rVpWGytAZeyR6v1SvhMe8YAI2xOITjeBWk8wz8H68VyF4wqNiy5dfgRbfijPUxamlRM%2BULFV8orXBn53cumm6DJtYrJSWQq66dhfAvPV9ikQA69MdJxB9D8qKjzxh7WOGY4byMl1B2ElJXBRVDybM9zpEFi9Xqi1PzCBgMkBHIDaaLjRToKMEqGDYdvwH6qRmiQzh0lLunGnJT9eW5m%2F4tg0pr3XJdspLkYClGqkBGC0IQI8hEm6xeVsAIIr%2Bdg9zUHu7IZ9x7P1SfCAwMwGmQLpxUPZDisTDVvI7EBjqkAXQxhUrwFKiQliyc1Hq9GYoKK7LPTDbVXWLwrR0RaTG6cyTZKbfWeIpJHZ6krV8j2fyXB7npg9%2FoemlU5nh4RuYPxN%2BtDUCs4sW3EV1%2BCYNiwOCGIYNtoWAE%2BOBdLZUFvzWFXYFf2tSnI2IZ1EZz39NoGbyRZq8dDG6HtJNtetf9vAVFBnNXM79kBJMnIdnsVlzk4NjS%2FacPBdHCreEDKNt%2BhMYx&X-Amz-Signature=09abb72ecc0c943f4656f606ff8e69b78fb056699c7b408d0d4ab9662e08678a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7AKZDD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDYGGGYO3G4Q6ItiEpVo6X3FbtWAmYLFuAck7MuHqCKeAIhANuda1rLgiV3srL1XGSFQO8I6TgO0uYiwCCnppwNUo79Kv8DCEgQABoMNjM3NDIzMTgzODA1IgxEe1bVbQX%2FYMeB7SQq3AMZhh2eK4bz%2B9502xN%2BewyJBQukMtaKCPmgpgGulAzguYU3ovaWtl3DboQ53wPEHwNxZ5QUPACfRereDViIVl3kvyN%2BC1GiEEfxfvgJVq1%2BjWA%2Fm5iFTmvB7rHJSkD%2FDTXacicJu7buUzFZVN1COudwnedlXnQndIPvW9z7Q5p4ozCFXYLLtQHXkwqxR%2BpTu1RoHjlhwu0aD2qZT%2BijG2dP7%2FspVgWpDgOyhOVJyRWwoPoe%2B8M7G8ioQZkGK9JzRPM1Cb%2BuELeLmZVyZagAR3jQamqpUDVOPafqwZcWL0syN1iOFfY2e8fIHXIRZE65755%2FboOajY53MSFjrUzUzx1Mc8paU2rVpWGytAZeyR6v1SvhMe8YAI2xOITjeBWk8wz8H68VyF4wqNiy5dfgRbfijPUxamlRM%2BULFV8orXBn53cumm6DJtYrJSWQq66dhfAvPV9ikQA69MdJxB9D8qKjzxh7WOGY4byMl1B2ElJXBRVDybM9zpEFi9Xqi1PzCBgMkBHIDaaLjRToKMEqGDYdvwH6qRmiQzh0lLunGnJT9eW5m%2F4tg0pr3XJdspLkYClGqkBGC0IQI8hEm6xeVsAIIr%2Bdg9zUHu7IZ9x7P1SfCAwMwGmQLpxUPZDisTDVvI7EBjqkAXQxhUrwFKiQliyc1Hq9GYoKK7LPTDbVXWLwrR0RaTG6cyTZKbfWeIpJHZ6krV8j2fyXB7npg9%2FoemlU5nh4RuYPxN%2BtDUCs4sW3EV1%2BCYNiwOCGIYNtoWAE%2BOBdLZUFvzWFXYFf2tSnI2IZ1EZz39NoGbyRZq8dDG6HtJNtetf9vAVFBnNXM79kBJMnIdnsVlzk4NjS%2FacPBdHCreEDKNt%2BhMYx&X-Amz-Signature=c533012f1693ac723c5da452c8e7fb67b2a2eb295f3e89d4b6810549d650f106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
