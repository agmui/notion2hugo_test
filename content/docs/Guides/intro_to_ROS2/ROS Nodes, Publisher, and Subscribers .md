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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5M3EGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYY6CfASrUYVXfzwpQq2LoE40iTVIWqhRrhKGutCz0eQIgezf04OrdhpWlRrtqLm4dbPqpaTAMWU7VtXa2BpHe6ikq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBFh3bpG5iE941HYvircA8s2aQoMKtvzI%2FwY6gccQ03op0rD96fZjiycGbbnRqA1DS%2FEC3re0rheNF9w7OL%2BmDfBBoWP0%2FhrEhSWDR%2BHWUodMpqPzU01NjvZmvhS9w5opLDHWFGXS36ixt5vg1vv3H6LSPG8ZDhDS53Tq0ozXpDFgn5%2BsK9HKA%2BVt9vAk8c221ZfVw59h%2Bif3ti9lhYU5uA5bS0tlmE7IMVzSCNSeeZ2GVPN9PLnyz%2B06JkwTMOmiJjT%2B3agLtNjhf%2BnfnWtuvFyh3dEbfKWcDCtBYWOPThIyGeE%2FRUxTfOiAMS4NTwAOHavAeyOLcQFoNnLhtiR3t03vjwzIz7xlFURsnERss%2FGEFhJJKHLYCtwANO%2FnW5G0Fld0N%2B1FiQcKfx6%2FmO47pwsirvp7R7uyh6L5Z0Zi2rYJIg1jUQC8R0aPX9bZYqMrcBV3vKLPUrkSg%2FNgcjxm4%2BJp7sEJq2NIUuQdWNlg0j%2FZ0Cyp6ADeY2wkV0NGcXQ9ATPBC2E3Q46FYyD%2FIp9SCNm%2FTRVar7SWsUE4eQYmwjVKBIfG1L8Dgh26Y8kdK44Au2W9fqDVjHSQY5CJr5x6ppnT7tFU7trjLDPS6%2BBM%2Bq%2BEbRwt04wgd%2Bh4SbLTEOZYCs5pcme1PeOa3l5MJLZvsQGOqUBPkqeRApZfCf5hLCoFwf1bSAZhzgvbW3tp2fWPqAZcVqqzEUYJEyMWF52wTYU7N8VDdphhb%2FJ3A3fN9qadf428W2BJ3HpLgKYCV1ZC7JKT3oLo3VkX64y2VDmcaHaOyQVgRKXGwd8%2Bv3RYTXECWjYCVwD7RsdRNMC2lquA8nJRFJFtTVm97Zg3jD%2FdPoClJvB%2B5nuY77nRWw%2Fkl4pXpGmRxCi9mkt&X-Amz-Signature=4cc4bd6dabe170270c05bb12d584d12a39471362fedf53ecdf1f59fad160ad94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5M3EGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYY6CfASrUYVXfzwpQq2LoE40iTVIWqhRrhKGutCz0eQIgezf04OrdhpWlRrtqLm4dbPqpaTAMWU7VtXa2BpHe6ikq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBFh3bpG5iE941HYvircA8s2aQoMKtvzI%2FwY6gccQ03op0rD96fZjiycGbbnRqA1DS%2FEC3re0rheNF9w7OL%2BmDfBBoWP0%2FhrEhSWDR%2BHWUodMpqPzU01NjvZmvhS9w5opLDHWFGXS36ixt5vg1vv3H6LSPG8ZDhDS53Tq0ozXpDFgn5%2BsK9HKA%2BVt9vAk8c221ZfVw59h%2Bif3ti9lhYU5uA5bS0tlmE7IMVzSCNSeeZ2GVPN9PLnyz%2B06JkwTMOmiJjT%2B3agLtNjhf%2BnfnWtuvFyh3dEbfKWcDCtBYWOPThIyGeE%2FRUxTfOiAMS4NTwAOHavAeyOLcQFoNnLhtiR3t03vjwzIz7xlFURsnERss%2FGEFhJJKHLYCtwANO%2FnW5G0Fld0N%2B1FiQcKfx6%2FmO47pwsirvp7R7uyh6L5Z0Zi2rYJIg1jUQC8R0aPX9bZYqMrcBV3vKLPUrkSg%2FNgcjxm4%2BJp7sEJq2NIUuQdWNlg0j%2FZ0Cyp6ADeY2wkV0NGcXQ9ATPBC2E3Q46FYyD%2FIp9SCNm%2FTRVar7SWsUE4eQYmwjVKBIfG1L8Dgh26Y8kdK44Au2W9fqDVjHSQY5CJr5x6ppnT7tFU7trjLDPS6%2BBM%2Bq%2BEbRwt04wgd%2Bh4SbLTEOZYCs5pcme1PeOa3l5MJLZvsQGOqUBPkqeRApZfCf5hLCoFwf1bSAZhzgvbW3tp2fWPqAZcVqqzEUYJEyMWF52wTYU7N8VDdphhb%2FJ3A3fN9qadf428W2BJ3HpLgKYCV1ZC7JKT3oLo3VkX64y2VDmcaHaOyQVgRKXGwd8%2Bv3RYTXECWjYCVwD7RsdRNMC2lquA8nJRFJFtTVm97Zg3jD%2FdPoClJvB%2B5nuY77nRWw%2Fkl4pXpGmRxCi9mkt&X-Amz-Signature=fdc76d6e314938e6b19c1cfa12bbfbace357082b42f136e7e32422c91fbebe26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5M3EGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYY6CfASrUYVXfzwpQq2LoE40iTVIWqhRrhKGutCz0eQIgezf04OrdhpWlRrtqLm4dbPqpaTAMWU7VtXa2BpHe6ikq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBFh3bpG5iE941HYvircA8s2aQoMKtvzI%2FwY6gccQ03op0rD96fZjiycGbbnRqA1DS%2FEC3re0rheNF9w7OL%2BmDfBBoWP0%2FhrEhSWDR%2BHWUodMpqPzU01NjvZmvhS9w5opLDHWFGXS36ixt5vg1vv3H6LSPG8ZDhDS53Tq0ozXpDFgn5%2BsK9HKA%2BVt9vAk8c221ZfVw59h%2Bif3ti9lhYU5uA5bS0tlmE7IMVzSCNSeeZ2GVPN9PLnyz%2B06JkwTMOmiJjT%2B3agLtNjhf%2BnfnWtuvFyh3dEbfKWcDCtBYWOPThIyGeE%2FRUxTfOiAMS4NTwAOHavAeyOLcQFoNnLhtiR3t03vjwzIz7xlFURsnERss%2FGEFhJJKHLYCtwANO%2FnW5G0Fld0N%2B1FiQcKfx6%2FmO47pwsirvp7R7uyh6L5Z0Zi2rYJIg1jUQC8R0aPX9bZYqMrcBV3vKLPUrkSg%2FNgcjxm4%2BJp7sEJq2NIUuQdWNlg0j%2FZ0Cyp6ADeY2wkV0NGcXQ9ATPBC2E3Q46FYyD%2FIp9SCNm%2FTRVar7SWsUE4eQYmwjVKBIfG1L8Dgh26Y8kdK44Au2W9fqDVjHSQY5CJr5x6ppnT7tFU7trjLDPS6%2BBM%2Bq%2BEbRwt04wgd%2Bh4SbLTEOZYCs5pcme1PeOa3l5MJLZvsQGOqUBPkqeRApZfCf5hLCoFwf1bSAZhzgvbW3tp2fWPqAZcVqqzEUYJEyMWF52wTYU7N8VDdphhb%2FJ3A3fN9qadf428W2BJ3HpLgKYCV1ZC7JKT3oLo3VkX64y2VDmcaHaOyQVgRKXGwd8%2Bv3RYTXECWjYCVwD7RsdRNMC2lquA8nJRFJFtTVm97Zg3jD%2FdPoClJvB%2B5nuY77nRWw%2Fkl4pXpGmRxCi9mkt&X-Amz-Signature=3c3f9709ab219bf031a87d9b93f8bc48ebbf0b67d086585fe89c02fbd0a44985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5M3EGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYY6CfASrUYVXfzwpQq2LoE40iTVIWqhRrhKGutCz0eQIgezf04OrdhpWlRrtqLm4dbPqpaTAMWU7VtXa2BpHe6ikq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBFh3bpG5iE941HYvircA8s2aQoMKtvzI%2FwY6gccQ03op0rD96fZjiycGbbnRqA1DS%2FEC3re0rheNF9w7OL%2BmDfBBoWP0%2FhrEhSWDR%2BHWUodMpqPzU01NjvZmvhS9w5opLDHWFGXS36ixt5vg1vv3H6LSPG8ZDhDS53Tq0ozXpDFgn5%2BsK9HKA%2BVt9vAk8c221ZfVw59h%2Bif3ti9lhYU5uA5bS0tlmE7IMVzSCNSeeZ2GVPN9PLnyz%2B06JkwTMOmiJjT%2B3agLtNjhf%2BnfnWtuvFyh3dEbfKWcDCtBYWOPThIyGeE%2FRUxTfOiAMS4NTwAOHavAeyOLcQFoNnLhtiR3t03vjwzIz7xlFURsnERss%2FGEFhJJKHLYCtwANO%2FnW5G0Fld0N%2B1FiQcKfx6%2FmO47pwsirvp7R7uyh6L5Z0Zi2rYJIg1jUQC8R0aPX9bZYqMrcBV3vKLPUrkSg%2FNgcjxm4%2BJp7sEJq2NIUuQdWNlg0j%2FZ0Cyp6ADeY2wkV0NGcXQ9ATPBC2E3Q46FYyD%2FIp9SCNm%2FTRVar7SWsUE4eQYmwjVKBIfG1L8Dgh26Y8kdK44Au2W9fqDVjHSQY5CJr5x6ppnT7tFU7trjLDPS6%2BBM%2Bq%2BEbRwt04wgd%2Bh4SbLTEOZYCs5pcme1PeOa3l5MJLZvsQGOqUBPkqeRApZfCf5hLCoFwf1bSAZhzgvbW3tp2fWPqAZcVqqzEUYJEyMWF52wTYU7N8VDdphhb%2FJ3A3fN9qadf428W2BJ3HpLgKYCV1ZC7JKT3oLo3VkX64y2VDmcaHaOyQVgRKXGwd8%2Bv3RYTXECWjYCVwD7RsdRNMC2lquA8nJRFJFtTVm97Zg3jD%2FdPoClJvB%2B5nuY77nRWw%2Fkl4pXpGmRxCi9mkt&X-Amz-Signature=11432ca35f9d1e200e5749fb2925a4f2db8712696b6e68388adeee9c74e70a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5M3EGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYY6CfASrUYVXfzwpQq2LoE40iTVIWqhRrhKGutCz0eQIgezf04OrdhpWlRrtqLm4dbPqpaTAMWU7VtXa2BpHe6ikq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBFh3bpG5iE941HYvircA8s2aQoMKtvzI%2FwY6gccQ03op0rD96fZjiycGbbnRqA1DS%2FEC3re0rheNF9w7OL%2BmDfBBoWP0%2FhrEhSWDR%2BHWUodMpqPzU01NjvZmvhS9w5opLDHWFGXS36ixt5vg1vv3H6LSPG8ZDhDS53Tq0ozXpDFgn5%2BsK9HKA%2BVt9vAk8c221ZfVw59h%2Bif3ti9lhYU5uA5bS0tlmE7IMVzSCNSeeZ2GVPN9PLnyz%2B06JkwTMOmiJjT%2B3agLtNjhf%2BnfnWtuvFyh3dEbfKWcDCtBYWOPThIyGeE%2FRUxTfOiAMS4NTwAOHavAeyOLcQFoNnLhtiR3t03vjwzIz7xlFURsnERss%2FGEFhJJKHLYCtwANO%2FnW5G0Fld0N%2B1FiQcKfx6%2FmO47pwsirvp7R7uyh6L5Z0Zi2rYJIg1jUQC8R0aPX9bZYqMrcBV3vKLPUrkSg%2FNgcjxm4%2BJp7sEJq2NIUuQdWNlg0j%2FZ0Cyp6ADeY2wkV0NGcXQ9ATPBC2E3Q46FYyD%2FIp9SCNm%2FTRVar7SWsUE4eQYmwjVKBIfG1L8Dgh26Y8kdK44Au2W9fqDVjHSQY5CJr5x6ppnT7tFU7trjLDPS6%2BBM%2Bq%2BEbRwt04wgd%2Bh4SbLTEOZYCs5pcme1PeOa3l5MJLZvsQGOqUBPkqeRApZfCf5hLCoFwf1bSAZhzgvbW3tp2fWPqAZcVqqzEUYJEyMWF52wTYU7N8VDdphhb%2FJ3A3fN9qadf428W2BJ3HpLgKYCV1ZC7JKT3oLo3VkX64y2VDmcaHaOyQVgRKXGwd8%2Bv3RYTXECWjYCVwD7RsdRNMC2lquA8nJRFJFtTVm97Zg3jD%2FdPoClJvB%2B5nuY77nRWw%2Fkl4pXpGmRxCi9mkt&X-Amz-Signature=63daaf7200e153fd2de157fe2051d9b5bff7fbd9bac9297226c72f1bba80d33a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5M3EGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYY6CfASrUYVXfzwpQq2LoE40iTVIWqhRrhKGutCz0eQIgezf04OrdhpWlRrtqLm4dbPqpaTAMWU7VtXa2BpHe6ikq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBFh3bpG5iE941HYvircA8s2aQoMKtvzI%2FwY6gccQ03op0rD96fZjiycGbbnRqA1DS%2FEC3re0rheNF9w7OL%2BmDfBBoWP0%2FhrEhSWDR%2BHWUodMpqPzU01NjvZmvhS9w5opLDHWFGXS36ixt5vg1vv3H6LSPG8ZDhDS53Tq0ozXpDFgn5%2BsK9HKA%2BVt9vAk8c221ZfVw59h%2Bif3ti9lhYU5uA5bS0tlmE7IMVzSCNSeeZ2GVPN9PLnyz%2B06JkwTMOmiJjT%2B3agLtNjhf%2BnfnWtuvFyh3dEbfKWcDCtBYWOPThIyGeE%2FRUxTfOiAMS4NTwAOHavAeyOLcQFoNnLhtiR3t03vjwzIz7xlFURsnERss%2FGEFhJJKHLYCtwANO%2FnW5G0Fld0N%2B1FiQcKfx6%2FmO47pwsirvp7R7uyh6L5Z0Zi2rYJIg1jUQC8R0aPX9bZYqMrcBV3vKLPUrkSg%2FNgcjxm4%2BJp7sEJq2NIUuQdWNlg0j%2FZ0Cyp6ADeY2wkV0NGcXQ9ATPBC2E3Q46FYyD%2FIp9SCNm%2FTRVar7SWsUE4eQYmwjVKBIfG1L8Dgh26Y8kdK44Au2W9fqDVjHSQY5CJr5x6ppnT7tFU7trjLDPS6%2BBM%2Bq%2BEbRwt04wgd%2Bh4SbLTEOZYCs5pcme1PeOa3l5MJLZvsQGOqUBPkqeRApZfCf5hLCoFwf1bSAZhzgvbW3tp2fWPqAZcVqqzEUYJEyMWF52wTYU7N8VDdphhb%2FJ3A3fN9qadf428W2BJ3HpLgKYCV1ZC7JKT3oLo3VkX64y2VDmcaHaOyQVgRKXGwd8%2Bv3RYTXECWjYCVwD7RsdRNMC2lquA8nJRFJFtTVm97Zg3jD%2FdPoClJvB%2B5nuY77nRWw%2Fkl4pXpGmRxCi9mkt&X-Amz-Signature=0e6d7cb5e581bd6a686db94e1c239ababe8d955468f350c14fd57caa13735ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5M3EGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYY6CfASrUYVXfzwpQq2LoE40iTVIWqhRrhKGutCz0eQIgezf04OrdhpWlRrtqLm4dbPqpaTAMWU7VtXa2BpHe6ikq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBFh3bpG5iE941HYvircA8s2aQoMKtvzI%2FwY6gccQ03op0rD96fZjiycGbbnRqA1DS%2FEC3re0rheNF9w7OL%2BmDfBBoWP0%2FhrEhSWDR%2BHWUodMpqPzU01NjvZmvhS9w5opLDHWFGXS36ixt5vg1vv3H6LSPG8ZDhDS53Tq0ozXpDFgn5%2BsK9HKA%2BVt9vAk8c221ZfVw59h%2Bif3ti9lhYU5uA5bS0tlmE7IMVzSCNSeeZ2GVPN9PLnyz%2B06JkwTMOmiJjT%2B3agLtNjhf%2BnfnWtuvFyh3dEbfKWcDCtBYWOPThIyGeE%2FRUxTfOiAMS4NTwAOHavAeyOLcQFoNnLhtiR3t03vjwzIz7xlFURsnERss%2FGEFhJJKHLYCtwANO%2FnW5G0Fld0N%2B1FiQcKfx6%2FmO47pwsirvp7R7uyh6L5Z0Zi2rYJIg1jUQC8R0aPX9bZYqMrcBV3vKLPUrkSg%2FNgcjxm4%2BJp7sEJq2NIUuQdWNlg0j%2FZ0Cyp6ADeY2wkV0NGcXQ9ATPBC2E3Q46FYyD%2FIp9SCNm%2FTRVar7SWsUE4eQYmwjVKBIfG1L8Dgh26Y8kdK44Au2W9fqDVjHSQY5CJr5x6ppnT7tFU7trjLDPS6%2BBM%2Bq%2BEbRwt04wgd%2Bh4SbLTEOZYCs5pcme1PeOa3l5MJLZvsQGOqUBPkqeRApZfCf5hLCoFwf1bSAZhzgvbW3tp2fWPqAZcVqqzEUYJEyMWF52wTYU7N8VDdphhb%2FJ3A3fN9qadf428W2BJ3HpLgKYCV1ZC7JKT3oLo3VkX64y2VDmcaHaOyQVgRKXGwd8%2Bv3RYTXECWjYCVwD7RsdRNMC2lquA8nJRFJFtTVm97Zg3jD%2FdPoClJvB%2B5nuY77nRWw%2Fkl4pXpGmRxCi9mkt&X-Amz-Signature=c6d6f3a97bf701b359b63b3ea489b900421ddfd940a82de137710ef5bfc3619c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5M3EGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYY6CfASrUYVXfzwpQq2LoE40iTVIWqhRrhKGutCz0eQIgezf04OrdhpWlRrtqLm4dbPqpaTAMWU7VtXa2BpHe6ikq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBFh3bpG5iE941HYvircA8s2aQoMKtvzI%2FwY6gccQ03op0rD96fZjiycGbbnRqA1DS%2FEC3re0rheNF9w7OL%2BmDfBBoWP0%2FhrEhSWDR%2BHWUodMpqPzU01NjvZmvhS9w5opLDHWFGXS36ixt5vg1vv3H6LSPG8ZDhDS53Tq0ozXpDFgn5%2BsK9HKA%2BVt9vAk8c221ZfVw59h%2Bif3ti9lhYU5uA5bS0tlmE7IMVzSCNSeeZ2GVPN9PLnyz%2B06JkwTMOmiJjT%2B3agLtNjhf%2BnfnWtuvFyh3dEbfKWcDCtBYWOPThIyGeE%2FRUxTfOiAMS4NTwAOHavAeyOLcQFoNnLhtiR3t03vjwzIz7xlFURsnERss%2FGEFhJJKHLYCtwANO%2FnW5G0Fld0N%2B1FiQcKfx6%2FmO47pwsirvp7R7uyh6L5Z0Zi2rYJIg1jUQC8R0aPX9bZYqMrcBV3vKLPUrkSg%2FNgcjxm4%2BJp7sEJq2NIUuQdWNlg0j%2FZ0Cyp6ADeY2wkV0NGcXQ9ATPBC2E3Q46FYyD%2FIp9SCNm%2FTRVar7SWsUE4eQYmwjVKBIfG1L8Dgh26Y8kdK44Au2W9fqDVjHSQY5CJr5x6ppnT7tFU7trjLDPS6%2BBM%2Bq%2BEbRwt04wgd%2Bh4SbLTEOZYCs5pcme1PeOa3l5MJLZvsQGOqUBPkqeRApZfCf5hLCoFwf1bSAZhzgvbW3tp2fWPqAZcVqqzEUYJEyMWF52wTYU7N8VDdphhb%2FJ3A3fN9qadf428W2BJ3HpLgKYCV1ZC7JKT3oLo3VkX64y2VDmcaHaOyQVgRKXGwd8%2Bv3RYTXECWjYCVwD7RsdRNMC2lquA8nJRFJFtTVm97Zg3jD%2FdPoClJvB%2B5nuY77nRWw%2Fkl4pXpGmRxCi9mkt&X-Amz-Signature=d6aa8750f412414dabfc2e00cc73162c09d96f62ebba77d6f835be75a3335861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
