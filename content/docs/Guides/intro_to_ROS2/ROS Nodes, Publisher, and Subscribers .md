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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WW2A5W%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtrV8UlkeXJHM7CwbKJeWbT0D%2B%2BpLLxJCGundpv3o6hAIhAJ6T8%2FbDtWX3XDnQySezCe9sFahVoPdwIIxHgtutBJuWKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEGYynG5Q1yUGulsQq3APlg750td0W07GNXWK8AR5gUHCx5Jda2Uks2XTir%2FAcYvSkY7SG29V%2BwJUAzLk49h8xvrQkc5S%2F%2BRaSeYmmQqlTmatmk1v6pxD8fsrTM18oOXo1zeytJNxDHDmYvNZb46DvBpfwKpKOt48m6nYKzMzOFMmb32EP7Nrm22vRyZYukJrieTdhR4X6cBnZT28yW3nMskLpzt6poTMhXyoOBF9VUVmMFrxcXZl2GDzFFfduc3Qb2y4d18h5oQGj74VE%2F5devrpXskGznfqSXmQkQqXMQWc97ZOj%2FMuhvNEgIo3PwvgxWlUDWxfF4q8zKzalhJqpjIMlIIVJ%2BjXlnh%2FzbvEkA3j3w%2F6BCwnQ9msXkvsiUYnU7tA8NJkzjmeD9WdbArFrvKxlIN%2FhIXEbP7gawY4%2Bo21vVhJ84uEqhgvPn2lDrpTH5Uuhfma3lJ%2FNemGtWa4HSGXJtOH637wBau5SkCytw1tTSumZoy9RB4yq6k%2FjO9byaU0poH4tiRDKkrEyrxhYF9v9KtI0s9Fl8V3EicJ1hxu5Sg4Fi%2FsvHnP89vcifwvHiujrrotjWxSL9AhZepJr3TObWfpdgfTQLOj2yGpM%2BJF09L9zxVIqkthI79DRqnWqceTzxH261W0R1jCj3prCBjqkAUlio4gMs%2F6DjtBwW7jNifYBsaJbnbtQ4XHlsHCQEFaLnJlT1VzYZ9bttSF%2FkX44t%2B20gBdQZ%2Fidf0ymh7wEA%2Fwq0Tks7NpJ3PGd0VksZclMkFAXcxs%2FVHso3CoDEyvmxIh2aXzxEyB7Ij%2FHYveno5C%2BjTeDBdrETNKxN8xDJiABOiD1G6E1cT72ml1nEcyy7JkucNrpojYFjNxO7rDZgNb2Z3yh&X-Amz-Signature=22bab3318c714486421e4c415d77ea0113d432e860cdc6ed57611d277f6c0aaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WW2A5W%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtrV8UlkeXJHM7CwbKJeWbT0D%2B%2BpLLxJCGundpv3o6hAIhAJ6T8%2FbDtWX3XDnQySezCe9sFahVoPdwIIxHgtutBJuWKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEGYynG5Q1yUGulsQq3APlg750td0W07GNXWK8AR5gUHCx5Jda2Uks2XTir%2FAcYvSkY7SG29V%2BwJUAzLk49h8xvrQkc5S%2F%2BRaSeYmmQqlTmatmk1v6pxD8fsrTM18oOXo1zeytJNxDHDmYvNZb46DvBpfwKpKOt48m6nYKzMzOFMmb32EP7Nrm22vRyZYukJrieTdhR4X6cBnZT28yW3nMskLpzt6poTMhXyoOBF9VUVmMFrxcXZl2GDzFFfduc3Qb2y4d18h5oQGj74VE%2F5devrpXskGznfqSXmQkQqXMQWc97ZOj%2FMuhvNEgIo3PwvgxWlUDWxfF4q8zKzalhJqpjIMlIIVJ%2BjXlnh%2FzbvEkA3j3w%2F6BCwnQ9msXkvsiUYnU7tA8NJkzjmeD9WdbArFrvKxlIN%2FhIXEbP7gawY4%2Bo21vVhJ84uEqhgvPn2lDrpTH5Uuhfma3lJ%2FNemGtWa4HSGXJtOH637wBau5SkCytw1tTSumZoy9RB4yq6k%2FjO9byaU0poH4tiRDKkrEyrxhYF9v9KtI0s9Fl8V3EicJ1hxu5Sg4Fi%2FsvHnP89vcifwvHiujrrotjWxSL9AhZepJr3TObWfpdgfTQLOj2yGpM%2BJF09L9zxVIqkthI79DRqnWqceTzxH261W0R1jCj3prCBjqkAUlio4gMs%2F6DjtBwW7jNifYBsaJbnbtQ4XHlsHCQEFaLnJlT1VzYZ9bttSF%2FkX44t%2B20gBdQZ%2Fidf0ymh7wEA%2Fwq0Tks7NpJ3PGd0VksZclMkFAXcxs%2FVHso3CoDEyvmxIh2aXzxEyB7Ij%2FHYveno5C%2BjTeDBdrETNKxN8xDJiABOiD1G6E1cT72ml1nEcyy7JkucNrpojYFjNxO7rDZgNb2Z3yh&X-Amz-Signature=45175dbdbe32068232a8f5c4300f2f88a4994d19b6033c701fdafa5a06bd2371&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WW2A5W%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtrV8UlkeXJHM7CwbKJeWbT0D%2B%2BpLLxJCGundpv3o6hAIhAJ6T8%2FbDtWX3XDnQySezCe9sFahVoPdwIIxHgtutBJuWKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEGYynG5Q1yUGulsQq3APlg750td0W07GNXWK8AR5gUHCx5Jda2Uks2XTir%2FAcYvSkY7SG29V%2BwJUAzLk49h8xvrQkc5S%2F%2BRaSeYmmQqlTmatmk1v6pxD8fsrTM18oOXo1zeytJNxDHDmYvNZb46DvBpfwKpKOt48m6nYKzMzOFMmb32EP7Nrm22vRyZYukJrieTdhR4X6cBnZT28yW3nMskLpzt6poTMhXyoOBF9VUVmMFrxcXZl2GDzFFfduc3Qb2y4d18h5oQGj74VE%2F5devrpXskGznfqSXmQkQqXMQWc97ZOj%2FMuhvNEgIo3PwvgxWlUDWxfF4q8zKzalhJqpjIMlIIVJ%2BjXlnh%2FzbvEkA3j3w%2F6BCwnQ9msXkvsiUYnU7tA8NJkzjmeD9WdbArFrvKxlIN%2FhIXEbP7gawY4%2Bo21vVhJ84uEqhgvPn2lDrpTH5Uuhfma3lJ%2FNemGtWa4HSGXJtOH637wBau5SkCytw1tTSumZoy9RB4yq6k%2FjO9byaU0poH4tiRDKkrEyrxhYF9v9KtI0s9Fl8V3EicJ1hxu5Sg4Fi%2FsvHnP89vcifwvHiujrrotjWxSL9AhZepJr3TObWfpdgfTQLOj2yGpM%2BJF09L9zxVIqkthI79DRqnWqceTzxH261W0R1jCj3prCBjqkAUlio4gMs%2F6DjtBwW7jNifYBsaJbnbtQ4XHlsHCQEFaLnJlT1VzYZ9bttSF%2FkX44t%2B20gBdQZ%2Fidf0ymh7wEA%2Fwq0Tks7NpJ3PGd0VksZclMkFAXcxs%2FVHso3CoDEyvmxIh2aXzxEyB7Ij%2FHYveno5C%2BjTeDBdrETNKxN8xDJiABOiD1G6E1cT72ml1nEcyy7JkucNrpojYFjNxO7rDZgNb2Z3yh&X-Amz-Signature=d0bb0d175add3d143e1cddfaf6d7f339982a6ad6a0530dd2327c6b47011a86a9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WW2A5W%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtrV8UlkeXJHM7CwbKJeWbT0D%2B%2BpLLxJCGundpv3o6hAIhAJ6T8%2FbDtWX3XDnQySezCe9sFahVoPdwIIxHgtutBJuWKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEGYynG5Q1yUGulsQq3APlg750td0W07GNXWK8AR5gUHCx5Jda2Uks2XTir%2FAcYvSkY7SG29V%2BwJUAzLk49h8xvrQkc5S%2F%2BRaSeYmmQqlTmatmk1v6pxD8fsrTM18oOXo1zeytJNxDHDmYvNZb46DvBpfwKpKOt48m6nYKzMzOFMmb32EP7Nrm22vRyZYukJrieTdhR4X6cBnZT28yW3nMskLpzt6poTMhXyoOBF9VUVmMFrxcXZl2GDzFFfduc3Qb2y4d18h5oQGj74VE%2F5devrpXskGznfqSXmQkQqXMQWc97ZOj%2FMuhvNEgIo3PwvgxWlUDWxfF4q8zKzalhJqpjIMlIIVJ%2BjXlnh%2FzbvEkA3j3w%2F6BCwnQ9msXkvsiUYnU7tA8NJkzjmeD9WdbArFrvKxlIN%2FhIXEbP7gawY4%2Bo21vVhJ84uEqhgvPn2lDrpTH5Uuhfma3lJ%2FNemGtWa4HSGXJtOH637wBau5SkCytw1tTSumZoy9RB4yq6k%2FjO9byaU0poH4tiRDKkrEyrxhYF9v9KtI0s9Fl8V3EicJ1hxu5Sg4Fi%2FsvHnP89vcifwvHiujrrotjWxSL9AhZepJr3TObWfpdgfTQLOj2yGpM%2BJF09L9zxVIqkthI79DRqnWqceTzxH261W0R1jCj3prCBjqkAUlio4gMs%2F6DjtBwW7jNifYBsaJbnbtQ4XHlsHCQEFaLnJlT1VzYZ9bttSF%2FkX44t%2B20gBdQZ%2Fidf0ymh7wEA%2Fwq0Tks7NpJ3PGd0VksZclMkFAXcxs%2FVHso3CoDEyvmxIh2aXzxEyB7Ij%2FHYveno5C%2BjTeDBdrETNKxN8xDJiABOiD1G6E1cT72ml1nEcyy7JkucNrpojYFjNxO7rDZgNb2Z3yh&X-Amz-Signature=531950ba602c017d3a25bc837a299004050dbb6f84d4de72aeb945bf65e0ec7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WW2A5W%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtrV8UlkeXJHM7CwbKJeWbT0D%2B%2BpLLxJCGundpv3o6hAIhAJ6T8%2FbDtWX3XDnQySezCe9sFahVoPdwIIxHgtutBJuWKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEGYynG5Q1yUGulsQq3APlg750td0W07GNXWK8AR5gUHCx5Jda2Uks2XTir%2FAcYvSkY7SG29V%2BwJUAzLk49h8xvrQkc5S%2F%2BRaSeYmmQqlTmatmk1v6pxD8fsrTM18oOXo1zeytJNxDHDmYvNZb46DvBpfwKpKOt48m6nYKzMzOFMmb32EP7Nrm22vRyZYukJrieTdhR4X6cBnZT28yW3nMskLpzt6poTMhXyoOBF9VUVmMFrxcXZl2GDzFFfduc3Qb2y4d18h5oQGj74VE%2F5devrpXskGznfqSXmQkQqXMQWc97ZOj%2FMuhvNEgIo3PwvgxWlUDWxfF4q8zKzalhJqpjIMlIIVJ%2BjXlnh%2FzbvEkA3j3w%2F6BCwnQ9msXkvsiUYnU7tA8NJkzjmeD9WdbArFrvKxlIN%2FhIXEbP7gawY4%2Bo21vVhJ84uEqhgvPn2lDrpTH5Uuhfma3lJ%2FNemGtWa4HSGXJtOH637wBau5SkCytw1tTSumZoy9RB4yq6k%2FjO9byaU0poH4tiRDKkrEyrxhYF9v9KtI0s9Fl8V3EicJ1hxu5Sg4Fi%2FsvHnP89vcifwvHiujrrotjWxSL9AhZepJr3TObWfpdgfTQLOj2yGpM%2BJF09L9zxVIqkthI79DRqnWqceTzxH261W0R1jCj3prCBjqkAUlio4gMs%2F6DjtBwW7jNifYBsaJbnbtQ4XHlsHCQEFaLnJlT1VzYZ9bttSF%2FkX44t%2B20gBdQZ%2Fidf0ymh7wEA%2Fwq0Tks7NpJ3PGd0VksZclMkFAXcxs%2FVHso3CoDEyvmxIh2aXzxEyB7Ij%2FHYveno5C%2BjTeDBdrETNKxN8xDJiABOiD1G6E1cT72ml1nEcyy7JkucNrpojYFjNxO7rDZgNb2Z3yh&X-Amz-Signature=7d82524fc75e2d164a1f89e6ab7f8a395016c33768c90eab35ad0b601dc0a8a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WW2A5W%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtrV8UlkeXJHM7CwbKJeWbT0D%2B%2BpLLxJCGundpv3o6hAIhAJ6T8%2FbDtWX3XDnQySezCe9sFahVoPdwIIxHgtutBJuWKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEGYynG5Q1yUGulsQq3APlg750td0W07GNXWK8AR5gUHCx5Jda2Uks2XTir%2FAcYvSkY7SG29V%2BwJUAzLk49h8xvrQkc5S%2F%2BRaSeYmmQqlTmatmk1v6pxD8fsrTM18oOXo1zeytJNxDHDmYvNZb46DvBpfwKpKOt48m6nYKzMzOFMmb32EP7Nrm22vRyZYukJrieTdhR4X6cBnZT28yW3nMskLpzt6poTMhXyoOBF9VUVmMFrxcXZl2GDzFFfduc3Qb2y4d18h5oQGj74VE%2F5devrpXskGznfqSXmQkQqXMQWc97ZOj%2FMuhvNEgIo3PwvgxWlUDWxfF4q8zKzalhJqpjIMlIIVJ%2BjXlnh%2FzbvEkA3j3w%2F6BCwnQ9msXkvsiUYnU7tA8NJkzjmeD9WdbArFrvKxlIN%2FhIXEbP7gawY4%2Bo21vVhJ84uEqhgvPn2lDrpTH5Uuhfma3lJ%2FNemGtWa4HSGXJtOH637wBau5SkCytw1tTSumZoy9RB4yq6k%2FjO9byaU0poH4tiRDKkrEyrxhYF9v9KtI0s9Fl8V3EicJ1hxu5Sg4Fi%2FsvHnP89vcifwvHiujrrotjWxSL9AhZepJr3TObWfpdgfTQLOj2yGpM%2BJF09L9zxVIqkthI79DRqnWqceTzxH261W0R1jCj3prCBjqkAUlio4gMs%2F6DjtBwW7jNifYBsaJbnbtQ4XHlsHCQEFaLnJlT1VzYZ9bttSF%2FkX44t%2B20gBdQZ%2Fidf0ymh7wEA%2Fwq0Tks7NpJ3PGd0VksZclMkFAXcxs%2FVHso3CoDEyvmxIh2aXzxEyB7Ij%2FHYveno5C%2BjTeDBdrETNKxN8xDJiABOiD1G6E1cT72ml1nEcyy7JkucNrpojYFjNxO7rDZgNb2Z3yh&X-Amz-Signature=f554a0ab22f6d0143381ef7103d120c8c26de9b233cfc28199c512ead81d70ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WW2A5W%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtrV8UlkeXJHM7CwbKJeWbT0D%2B%2BpLLxJCGundpv3o6hAIhAJ6T8%2FbDtWX3XDnQySezCe9sFahVoPdwIIxHgtutBJuWKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEGYynG5Q1yUGulsQq3APlg750td0W07GNXWK8AR5gUHCx5Jda2Uks2XTir%2FAcYvSkY7SG29V%2BwJUAzLk49h8xvrQkc5S%2F%2BRaSeYmmQqlTmatmk1v6pxD8fsrTM18oOXo1zeytJNxDHDmYvNZb46DvBpfwKpKOt48m6nYKzMzOFMmb32EP7Nrm22vRyZYukJrieTdhR4X6cBnZT28yW3nMskLpzt6poTMhXyoOBF9VUVmMFrxcXZl2GDzFFfduc3Qb2y4d18h5oQGj74VE%2F5devrpXskGznfqSXmQkQqXMQWc97ZOj%2FMuhvNEgIo3PwvgxWlUDWxfF4q8zKzalhJqpjIMlIIVJ%2BjXlnh%2FzbvEkA3j3w%2F6BCwnQ9msXkvsiUYnU7tA8NJkzjmeD9WdbArFrvKxlIN%2FhIXEbP7gawY4%2Bo21vVhJ84uEqhgvPn2lDrpTH5Uuhfma3lJ%2FNemGtWa4HSGXJtOH637wBau5SkCytw1tTSumZoy9RB4yq6k%2FjO9byaU0poH4tiRDKkrEyrxhYF9v9KtI0s9Fl8V3EicJ1hxu5Sg4Fi%2FsvHnP89vcifwvHiujrrotjWxSL9AhZepJr3TObWfpdgfTQLOj2yGpM%2BJF09L9zxVIqkthI79DRqnWqceTzxH261W0R1jCj3prCBjqkAUlio4gMs%2F6DjtBwW7jNifYBsaJbnbtQ4XHlsHCQEFaLnJlT1VzYZ9bttSF%2FkX44t%2B20gBdQZ%2Fidf0ymh7wEA%2Fwq0Tks7NpJ3PGd0VksZclMkFAXcxs%2FVHso3CoDEyvmxIh2aXzxEyB7Ij%2FHYveno5C%2BjTeDBdrETNKxN8xDJiABOiD1G6E1cT72ml1nEcyy7JkucNrpojYFjNxO7rDZgNb2Z3yh&X-Amz-Signature=c1d42237c8d8877016c8b4646c35cc8d022dce5e785770e390db3cbffd3441cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WW2A5W%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtrV8UlkeXJHM7CwbKJeWbT0D%2B%2BpLLxJCGundpv3o6hAIhAJ6T8%2FbDtWX3XDnQySezCe9sFahVoPdwIIxHgtutBJuWKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEGYynG5Q1yUGulsQq3APlg750td0W07GNXWK8AR5gUHCx5Jda2Uks2XTir%2FAcYvSkY7SG29V%2BwJUAzLk49h8xvrQkc5S%2F%2BRaSeYmmQqlTmatmk1v6pxD8fsrTM18oOXo1zeytJNxDHDmYvNZb46DvBpfwKpKOt48m6nYKzMzOFMmb32EP7Nrm22vRyZYukJrieTdhR4X6cBnZT28yW3nMskLpzt6poTMhXyoOBF9VUVmMFrxcXZl2GDzFFfduc3Qb2y4d18h5oQGj74VE%2F5devrpXskGznfqSXmQkQqXMQWc97ZOj%2FMuhvNEgIo3PwvgxWlUDWxfF4q8zKzalhJqpjIMlIIVJ%2BjXlnh%2FzbvEkA3j3w%2F6BCwnQ9msXkvsiUYnU7tA8NJkzjmeD9WdbArFrvKxlIN%2FhIXEbP7gawY4%2Bo21vVhJ84uEqhgvPn2lDrpTH5Uuhfma3lJ%2FNemGtWa4HSGXJtOH637wBau5SkCytw1tTSumZoy9RB4yq6k%2FjO9byaU0poH4tiRDKkrEyrxhYF9v9KtI0s9Fl8V3EicJ1hxu5Sg4Fi%2FsvHnP89vcifwvHiujrrotjWxSL9AhZepJr3TObWfpdgfTQLOj2yGpM%2BJF09L9zxVIqkthI79DRqnWqceTzxH261W0R1jCj3prCBjqkAUlio4gMs%2F6DjtBwW7jNifYBsaJbnbtQ4XHlsHCQEFaLnJlT1VzYZ9bttSF%2FkX44t%2B20gBdQZ%2Fidf0ymh7wEA%2Fwq0Tks7NpJ3PGd0VksZclMkFAXcxs%2FVHso3CoDEyvmxIh2aXzxEyB7Ij%2FHYveno5C%2BjTeDBdrETNKxN8xDJiABOiD1G6E1cT72ml1nEcyy7JkucNrpojYFjNxO7rDZgNb2Z3yh&X-Amz-Signature=36999401b94e2037ac0c3ccdb6a915579ed531fcba2a3dff65e2417971f102c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
