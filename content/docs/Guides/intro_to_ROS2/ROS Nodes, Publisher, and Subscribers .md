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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V72GDWMT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFZeLdlEQBJcCPHhOwNTFdL19UvJc%2BJhA9pl4dL2ou3YAiEAhGzx8LQEbjV2%2BpXZ9IVjuPqjrGwt1OvsMuawYsPoxEQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIlFP60W41WtKwfvzCrcA%2BbbsCTk%2B3LHU94ss6Eajig8eY%2FZdyU3I1g3q8XpxnrxNuvIstrOuh4rZ9MHJXzkhowEBtcjxKAAd8eOM1RsrA4miYNU5ASIygjXav9memhNhdIXi9cV%2FJHt5ya6zsGdfVywZb7ce3wpPWf%2BY%2F6zLSQgqXSstgu1WPG9ng5hBgTJUNLRzGptFN5zX38%2FqLdzqiJOh5iSTBCKmpT%2BAHnJ0sagrc%2BYCz%2BhLR6Wu7LKFaRrp77Tj%2FkfVfm4JBcjMZBe5%2Fixf%2FgmFj9t5nEHes5V72c7ghDcnELZDvpcZ%2BZLnFK6%2FHU6HAfQKpyZjzFdGYrsH1aKzDIgrIN%2BS0D2noT4TPn64uo%2FCqdBdOkPDCccnolN8ybvIZLCDQOT6IuNmLqskus1C7HoL6%2B1kJju%2FvfWDLgO9c%2BYzr4v0EcaC9oKqThx5jJ5vbd7m0JEJguPk9QLaKPMXkbxXoczvJMTrkQB7kgSm1Qn5F%2F1ZW3EnyMJQ8paknVN4KKi%2F4di2iesQh2YMDpZuU%2B%2Bixkv20uA7MhjqH3AYbvCWJDqAEnhCTcO%2FZjhpMQpg259rKSjZTY76wOtAMWuhYVcFBn76lTtIqWL%2B5CW8G%2BOS7SWfpKrfh55DTPCuTp7%2Fmv4sc9svtiXMIe0p8AGOqUBHw2ahq%2B6uhTPzyd8ge%2BgJHkICs9MNcYYHa2xdcCr7Oiw2Sm%2BdoP5QwSW868QEWqu8Q9vG6oSxoQanN14b1%2FBwATlVNUfVakTCDWDgPZQqiWerXduifuXQOU1WD%2BDPlDb7tCKT5vDRJ8B0bt5IOYnAdQAJ0j0ezgqyvQxhhCpfgCLMEfWhscXV%2Fp7OORWfAlwJQoxImRR9Dka7RzCYFG%2B2D0W8IIf&X-Amz-Signature=026a29c1b95dcd8344424f1c9b7994e5d81d10eea9434e77c6e0d03a51890dee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V72GDWMT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFZeLdlEQBJcCPHhOwNTFdL19UvJc%2BJhA9pl4dL2ou3YAiEAhGzx8LQEbjV2%2BpXZ9IVjuPqjrGwt1OvsMuawYsPoxEQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIlFP60W41WtKwfvzCrcA%2BbbsCTk%2B3LHU94ss6Eajig8eY%2FZdyU3I1g3q8XpxnrxNuvIstrOuh4rZ9MHJXzkhowEBtcjxKAAd8eOM1RsrA4miYNU5ASIygjXav9memhNhdIXi9cV%2FJHt5ya6zsGdfVywZb7ce3wpPWf%2BY%2F6zLSQgqXSstgu1WPG9ng5hBgTJUNLRzGptFN5zX38%2FqLdzqiJOh5iSTBCKmpT%2BAHnJ0sagrc%2BYCz%2BhLR6Wu7LKFaRrp77Tj%2FkfVfm4JBcjMZBe5%2Fixf%2FgmFj9t5nEHes5V72c7ghDcnELZDvpcZ%2BZLnFK6%2FHU6HAfQKpyZjzFdGYrsH1aKzDIgrIN%2BS0D2noT4TPn64uo%2FCqdBdOkPDCccnolN8ybvIZLCDQOT6IuNmLqskus1C7HoL6%2B1kJju%2FvfWDLgO9c%2BYzr4v0EcaC9oKqThx5jJ5vbd7m0JEJguPk9QLaKPMXkbxXoczvJMTrkQB7kgSm1Qn5F%2F1ZW3EnyMJQ8paknVN4KKi%2F4di2iesQh2YMDpZuU%2B%2Bixkv20uA7MhjqH3AYbvCWJDqAEnhCTcO%2FZjhpMQpg259rKSjZTY76wOtAMWuhYVcFBn76lTtIqWL%2B5CW8G%2BOS7SWfpKrfh55DTPCuTp7%2Fmv4sc9svtiXMIe0p8AGOqUBHw2ahq%2B6uhTPzyd8ge%2BgJHkICs9MNcYYHa2xdcCr7Oiw2Sm%2BdoP5QwSW868QEWqu8Q9vG6oSxoQanN14b1%2FBwATlVNUfVakTCDWDgPZQqiWerXduifuXQOU1WD%2BDPlDb7tCKT5vDRJ8B0bt5IOYnAdQAJ0j0ezgqyvQxhhCpfgCLMEfWhscXV%2Fp7OORWfAlwJQoxImRR9Dka7RzCYFG%2B2D0W8IIf&X-Amz-Signature=dd76b4a3bf2a4d9ada47610444830f6fc34e53e1aaea13aa5dcdfbfc5d515d00&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V72GDWMT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFZeLdlEQBJcCPHhOwNTFdL19UvJc%2BJhA9pl4dL2ou3YAiEAhGzx8LQEbjV2%2BpXZ9IVjuPqjrGwt1OvsMuawYsPoxEQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIlFP60W41WtKwfvzCrcA%2BbbsCTk%2B3LHU94ss6Eajig8eY%2FZdyU3I1g3q8XpxnrxNuvIstrOuh4rZ9MHJXzkhowEBtcjxKAAd8eOM1RsrA4miYNU5ASIygjXav9memhNhdIXi9cV%2FJHt5ya6zsGdfVywZb7ce3wpPWf%2BY%2F6zLSQgqXSstgu1WPG9ng5hBgTJUNLRzGptFN5zX38%2FqLdzqiJOh5iSTBCKmpT%2BAHnJ0sagrc%2BYCz%2BhLR6Wu7LKFaRrp77Tj%2FkfVfm4JBcjMZBe5%2Fixf%2FgmFj9t5nEHes5V72c7ghDcnELZDvpcZ%2BZLnFK6%2FHU6HAfQKpyZjzFdGYrsH1aKzDIgrIN%2BS0D2noT4TPn64uo%2FCqdBdOkPDCccnolN8ybvIZLCDQOT6IuNmLqskus1C7HoL6%2B1kJju%2FvfWDLgO9c%2BYzr4v0EcaC9oKqThx5jJ5vbd7m0JEJguPk9QLaKPMXkbxXoczvJMTrkQB7kgSm1Qn5F%2F1ZW3EnyMJQ8paknVN4KKi%2F4di2iesQh2YMDpZuU%2B%2Bixkv20uA7MhjqH3AYbvCWJDqAEnhCTcO%2FZjhpMQpg259rKSjZTY76wOtAMWuhYVcFBn76lTtIqWL%2B5CW8G%2BOS7SWfpKrfh55DTPCuTp7%2Fmv4sc9svtiXMIe0p8AGOqUBHw2ahq%2B6uhTPzyd8ge%2BgJHkICs9MNcYYHa2xdcCr7Oiw2Sm%2BdoP5QwSW868QEWqu8Q9vG6oSxoQanN14b1%2FBwATlVNUfVakTCDWDgPZQqiWerXduifuXQOU1WD%2BDPlDb7tCKT5vDRJ8B0bt5IOYnAdQAJ0j0ezgqyvQxhhCpfgCLMEfWhscXV%2Fp7OORWfAlwJQoxImRR9Dka7RzCYFG%2B2D0W8IIf&X-Amz-Signature=322babacb8f2e889e8bc675e2a5b4f29990a9d29d4401b87436365aa9e03b322&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V72GDWMT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFZeLdlEQBJcCPHhOwNTFdL19UvJc%2BJhA9pl4dL2ou3YAiEAhGzx8LQEbjV2%2BpXZ9IVjuPqjrGwt1OvsMuawYsPoxEQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIlFP60W41WtKwfvzCrcA%2BbbsCTk%2B3LHU94ss6Eajig8eY%2FZdyU3I1g3q8XpxnrxNuvIstrOuh4rZ9MHJXzkhowEBtcjxKAAd8eOM1RsrA4miYNU5ASIygjXav9memhNhdIXi9cV%2FJHt5ya6zsGdfVywZb7ce3wpPWf%2BY%2F6zLSQgqXSstgu1WPG9ng5hBgTJUNLRzGptFN5zX38%2FqLdzqiJOh5iSTBCKmpT%2BAHnJ0sagrc%2BYCz%2BhLR6Wu7LKFaRrp77Tj%2FkfVfm4JBcjMZBe5%2Fixf%2FgmFj9t5nEHes5V72c7ghDcnELZDvpcZ%2BZLnFK6%2FHU6HAfQKpyZjzFdGYrsH1aKzDIgrIN%2BS0D2noT4TPn64uo%2FCqdBdOkPDCccnolN8ybvIZLCDQOT6IuNmLqskus1C7HoL6%2B1kJju%2FvfWDLgO9c%2BYzr4v0EcaC9oKqThx5jJ5vbd7m0JEJguPk9QLaKPMXkbxXoczvJMTrkQB7kgSm1Qn5F%2F1ZW3EnyMJQ8paknVN4KKi%2F4di2iesQh2YMDpZuU%2B%2Bixkv20uA7MhjqH3AYbvCWJDqAEnhCTcO%2FZjhpMQpg259rKSjZTY76wOtAMWuhYVcFBn76lTtIqWL%2B5CW8G%2BOS7SWfpKrfh55DTPCuTp7%2Fmv4sc9svtiXMIe0p8AGOqUBHw2ahq%2B6uhTPzyd8ge%2BgJHkICs9MNcYYHa2xdcCr7Oiw2Sm%2BdoP5QwSW868QEWqu8Q9vG6oSxoQanN14b1%2FBwATlVNUfVakTCDWDgPZQqiWerXduifuXQOU1WD%2BDPlDb7tCKT5vDRJ8B0bt5IOYnAdQAJ0j0ezgqyvQxhhCpfgCLMEfWhscXV%2Fp7OORWfAlwJQoxImRR9Dka7RzCYFG%2B2D0W8IIf&X-Amz-Signature=33151f9a84962b5cbc4d1906fdf7826d48d877007314d0bcda45fdc76de8b6ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V72GDWMT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFZeLdlEQBJcCPHhOwNTFdL19UvJc%2BJhA9pl4dL2ou3YAiEAhGzx8LQEbjV2%2BpXZ9IVjuPqjrGwt1OvsMuawYsPoxEQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIlFP60W41WtKwfvzCrcA%2BbbsCTk%2B3LHU94ss6Eajig8eY%2FZdyU3I1g3q8XpxnrxNuvIstrOuh4rZ9MHJXzkhowEBtcjxKAAd8eOM1RsrA4miYNU5ASIygjXav9memhNhdIXi9cV%2FJHt5ya6zsGdfVywZb7ce3wpPWf%2BY%2F6zLSQgqXSstgu1WPG9ng5hBgTJUNLRzGptFN5zX38%2FqLdzqiJOh5iSTBCKmpT%2BAHnJ0sagrc%2BYCz%2BhLR6Wu7LKFaRrp77Tj%2FkfVfm4JBcjMZBe5%2Fixf%2FgmFj9t5nEHes5V72c7ghDcnELZDvpcZ%2BZLnFK6%2FHU6HAfQKpyZjzFdGYrsH1aKzDIgrIN%2BS0D2noT4TPn64uo%2FCqdBdOkPDCccnolN8ybvIZLCDQOT6IuNmLqskus1C7HoL6%2B1kJju%2FvfWDLgO9c%2BYzr4v0EcaC9oKqThx5jJ5vbd7m0JEJguPk9QLaKPMXkbxXoczvJMTrkQB7kgSm1Qn5F%2F1ZW3EnyMJQ8paknVN4KKi%2F4di2iesQh2YMDpZuU%2B%2Bixkv20uA7MhjqH3AYbvCWJDqAEnhCTcO%2FZjhpMQpg259rKSjZTY76wOtAMWuhYVcFBn76lTtIqWL%2B5CW8G%2BOS7SWfpKrfh55DTPCuTp7%2Fmv4sc9svtiXMIe0p8AGOqUBHw2ahq%2B6uhTPzyd8ge%2BgJHkICs9MNcYYHa2xdcCr7Oiw2Sm%2BdoP5QwSW868QEWqu8Q9vG6oSxoQanN14b1%2FBwATlVNUfVakTCDWDgPZQqiWerXduifuXQOU1WD%2BDPlDb7tCKT5vDRJ8B0bt5IOYnAdQAJ0j0ezgqyvQxhhCpfgCLMEfWhscXV%2Fp7OORWfAlwJQoxImRR9Dka7RzCYFG%2B2D0W8IIf&X-Amz-Signature=6ae29ad35b7d528cef089a18a9c248d9ff9aaac61a378a28f2c2fa77c91897af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V72GDWMT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFZeLdlEQBJcCPHhOwNTFdL19UvJc%2BJhA9pl4dL2ou3YAiEAhGzx8LQEbjV2%2BpXZ9IVjuPqjrGwt1OvsMuawYsPoxEQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIlFP60W41WtKwfvzCrcA%2BbbsCTk%2B3LHU94ss6Eajig8eY%2FZdyU3I1g3q8XpxnrxNuvIstrOuh4rZ9MHJXzkhowEBtcjxKAAd8eOM1RsrA4miYNU5ASIygjXav9memhNhdIXi9cV%2FJHt5ya6zsGdfVywZb7ce3wpPWf%2BY%2F6zLSQgqXSstgu1WPG9ng5hBgTJUNLRzGptFN5zX38%2FqLdzqiJOh5iSTBCKmpT%2BAHnJ0sagrc%2BYCz%2BhLR6Wu7LKFaRrp77Tj%2FkfVfm4JBcjMZBe5%2Fixf%2FgmFj9t5nEHes5V72c7ghDcnELZDvpcZ%2BZLnFK6%2FHU6HAfQKpyZjzFdGYrsH1aKzDIgrIN%2BS0D2noT4TPn64uo%2FCqdBdOkPDCccnolN8ybvIZLCDQOT6IuNmLqskus1C7HoL6%2B1kJju%2FvfWDLgO9c%2BYzr4v0EcaC9oKqThx5jJ5vbd7m0JEJguPk9QLaKPMXkbxXoczvJMTrkQB7kgSm1Qn5F%2F1ZW3EnyMJQ8paknVN4KKi%2F4di2iesQh2YMDpZuU%2B%2Bixkv20uA7MhjqH3AYbvCWJDqAEnhCTcO%2FZjhpMQpg259rKSjZTY76wOtAMWuhYVcFBn76lTtIqWL%2B5CW8G%2BOS7SWfpKrfh55DTPCuTp7%2Fmv4sc9svtiXMIe0p8AGOqUBHw2ahq%2B6uhTPzyd8ge%2BgJHkICs9MNcYYHa2xdcCr7Oiw2Sm%2BdoP5QwSW868QEWqu8Q9vG6oSxoQanN14b1%2FBwATlVNUfVakTCDWDgPZQqiWerXduifuXQOU1WD%2BDPlDb7tCKT5vDRJ8B0bt5IOYnAdQAJ0j0ezgqyvQxhhCpfgCLMEfWhscXV%2Fp7OORWfAlwJQoxImRR9Dka7RzCYFG%2B2D0W8IIf&X-Amz-Signature=e560d47c62cad76c921f68f01a66b18fb821d0f116a88233e9d345f63990fa4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V72GDWMT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFZeLdlEQBJcCPHhOwNTFdL19UvJc%2BJhA9pl4dL2ou3YAiEAhGzx8LQEbjV2%2BpXZ9IVjuPqjrGwt1OvsMuawYsPoxEQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIlFP60W41WtKwfvzCrcA%2BbbsCTk%2B3LHU94ss6Eajig8eY%2FZdyU3I1g3q8XpxnrxNuvIstrOuh4rZ9MHJXzkhowEBtcjxKAAd8eOM1RsrA4miYNU5ASIygjXav9memhNhdIXi9cV%2FJHt5ya6zsGdfVywZb7ce3wpPWf%2BY%2F6zLSQgqXSstgu1WPG9ng5hBgTJUNLRzGptFN5zX38%2FqLdzqiJOh5iSTBCKmpT%2BAHnJ0sagrc%2BYCz%2BhLR6Wu7LKFaRrp77Tj%2FkfVfm4JBcjMZBe5%2Fixf%2FgmFj9t5nEHes5V72c7ghDcnELZDvpcZ%2BZLnFK6%2FHU6HAfQKpyZjzFdGYrsH1aKzDIgrIN%2BS0D2noT4TPn64uo%2FCqdBdOkPDCccnolN8ybvIZLCDQOT6IuNmLqskus1C7HoL6%2B1kJju%2FvfWDLgO9c%2BYzr4v0EcaC9oKqThx5jJ5vbd7m0JEJguPk9QLaKPMXkbxXoczvJMTrkQB7kgSm1Qn5F%2F1ZW3EnyMJQ8paknVN4KKi%2F4di2iesQh2YMDpZuU%2B%2Bixkv20uA7MhjqH3AYbvCWJDqAEnhCTcO%2FZjhpMQpg259rKSjZTY76wOtAMWuhYVcFBn76lTtIqWL%2B5CW8G%2BOS7SWfpKrfh55DTPCuTp7%2Fmv4sc9svtiXMIe0p8AGOqUBHw2ahq%2B6uhTPzyd8ge%2BgJHkICs9MNcYYHa2xdcCr7Oiw2Sm%2BdoP5QwSW868QEWqu8Q9vG6oSxoQanN14b1%2FBwATlVNUfVakTCDWDgPZQqiWerXduifuXQOU1WD%2BDPlDb7tCKT5vDRJ8B0bt5IOYnAdQAJ0j0ezgqyvQxhhCpfgCLMEfWhscXV%2Fp7OORWfAlwJQoxImRR9Dka7RzCYFG%2B2D0W8IIf&X-Amz-Signature=623ec78c2ed009ac9da55fc45f8a8a9c553410aea97f41ff9d3fdc247b5f4b65&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V72GDWMT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFZeLdlEQBJcCPHhOwNTFdL19UvJc%2BJhA9pl4dL2ou3YAiEAhGzx8LQEbjV2%2BpXZ9IVjuPqjrGwt1OvsMuawYsPoxEQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIlFP60W41WtKwfvzCrcA%2BbbsCTk%2B3LHU94ss6Eajig8eY%2FZdyU3I1g3q8XpxnrxNuvIstrOuh4rZ9MHJXzkhowEBtcjxKAAd8eOM1RsrA4miYNU5ASIygjXav9memhNhdIXi9cV%2FJHt5ya6zsGdfVywZb7ce3wpPWf%2BY%2F6zLSQgqXSstgu1WPG9ng5hBgTJUNLRzGptFN5zX38%2FqLdzqiJOh5iSTBCKmpT%2BAHnJ0sagrc%2BYCz%2BhLR6Wu7LKFaRrp77Tj%2FkfVfm4JBcjMZBe5%2Fixf%2FgmFj9t5nEHes5V72c7ghDcnELZDvpcZ%2BZLnFK6%2FHU6HAfQKpyZjzFdGYrsH1aKzDIgrIN%2BS0D2noT4TPn64uo%2FCqdBdOkPDCccnolN8ybvIZLCDQOT6IuNmLqskus1C7HoL6%2B1kJju%2FvfWDLgO9c%2BYzr4v0EcaC9oKqThx5jJ5vbd7m0JEJguPk9QLaKPMXkbxXoczvJMTrkQB7kgSm1Qn5F%2F1ZW3EnyMJQ8paknVN4KKi%2F4di2iesQh2YMDpZuU%2B%2Bixkv20uA7MhjqH3AYbvCWJDqAEnhCTcO%2FZjhpMQpg259rKSjZTY76wOtAMWuhYVcFBn76lTtIqWL%2B5CW8G%2BOS7SWfpKrfh55DTPCuTp7%2Fmv4sc9svtiXMIe0p8AGOqUBHw2ahq%2B6uhTPzyd8ge%2BgJHkICs9MNcYYHa2xdcCr7Oiw2Sm%2BdoP5QwSW868QEWqu8Q9vG6oSxoQanN14b1%2FBwATlVNUfVakTCDWDgPZQqiWerXduifuXQOU1WD%2BDPlDb7tCKT5vDRJ8B0bt5IOYnAdQAJ0j0ezgqyvQxhhCpfgCLMEfWhscXV%2Fp7OORWfAlwJQoxImRR9Dka7RzCYFG%2B2D0W8IIf&X-Amz-Signature=3d2f56e3dc648e7755532efbbace9c0175ec4e984968dcf5b9fd5ffe667975bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
