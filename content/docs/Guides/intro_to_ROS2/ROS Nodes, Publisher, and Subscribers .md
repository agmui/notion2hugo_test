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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U76P4BXF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSwlfKdXJCA%2B8yYazYmfqmy523YRAUyNAGKZQOlap6tQIgbeW%2BgpMBx5CslDeDKS3mugAB%2Bz62VTc%2FIE0H9E1unLoqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7fq%2FjVK57lUJrpQyrcA%2B8y8B08fguEe7mDnAce%2BagwbuSuafrV62W1N%2BG%2FSGo6pIrFvElJ8H0Krkzy2BpDGf%2BGcHFE92giUXGVce9MtvePa%2BuD%2Fr6pZ5zMpYVtf0iUA6NY2JjNBWP30p6vD4zCO%2B3S1t5NKzTuacGitbkJnOHPZMiD62hW3E4E4ALwV%2B5r4b1DOgPjcRxnW%2BW5OEyXlKQvWGx%2BPB7ofkzccqK89DxCVWWSAn445%2BOXbjER2bbASImKGhWpZ%2FQ5L%2FGIWfma0tLHLsGTHJY%2FhOR1LksoaDujeKzp0GjaZk%2FPjSJ7pSEm4994tI1fxeSDVSILeMeh8vF4emdYfmFGKxHhHzHF%2BKRgh%2FD0KNI5jEerTAYSBsJSQawKkpFvzwhMZb2XO4htvCJo3GhRZhMVjOsvXjUdIVYl%2B4%2BoTEdxEL8rUHa2QxeI3AfHzRQeN5H7FScC14b8UcWEJ1SAKA19XysriNFOJzE0LAt19onMeUSBltuyzfwWR3hrdgOKT5IZRblR4UoquyXVZhcjDJO%2Fz26prZYeu3%2Fl7hMCYFe8G%2FpwwIkQq%2Bn9vvndMDZm0A272o6cL5E6rD4vD4aWTz6vOHI5gaA5hbHSKIu%2FitViydTBbF4Z7EsJgteSp8R1YD4Wua4OMJSbrL0GOqUBLmEfv3vUOe8K9%2F%2F%2B7tHKt6PfDvYABdsjfgRZW3ZGpwT0CZ8DLguyRJFVjczw5SjC%2FKfUuH%2FpkOxsGmw5vZ72daNGXUpLGP4yCkw3Uhtg1RYh628h9d4kLfRXoa0FypwoeoCLmtmWr3V%2BpmjTQWhMTqj%2Bqrx8P%2BLOiDdKM48MCFbhMvm0sfLO9EzZ436C8zm3jKurvpIbM49dEkIUWttIlOgSyhHK&X-Amz-Signature=a8db4a247d04578f4fbdb3ad4e8dcba67ad3445ee18347121d90c171257b0592&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U76P4BXF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSwlfKdXJCA%2B8yYazYmfqmy523YRAUyNAGKZQOlap6tQIgbeW%2BgpMBx5CslDeDKS3mugAB%2Bz62VTc%2FIE0H9E1unLoqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7fq%2FjVK57lUJrpQyrcA%2B8y8B08fguEe7mDnAce%2BagwbuSuafrV62W1N%2BG%2FSGo6pIrFvElJ8H0Krkzy2BpDGf%2BGcHFE92giUXGVce9MtvePa%2BuD%2Fr6pZ5zMpYVtf0iUA6NY2JjNBWP30p6vD4zCO%2B3S1t5NKzTuacGitbkJnOHPZMiD62hW3E4E4ALwV%2B5r4b1DOgPjcRxnW%2BW5OEyXlKQvWGx%2BPB7ofkzccqK89DxCVWWSAn445%2BOXbjER2bbASImKGhWpZ%2FQ5L%2FGIWfma0tLHLsGTHJY%2FhOR1LksoaDujeKzp0GjaZk%2FPjSJ7pSEm4994tI1fxeSDVSILeMeh8vF4emdYfmFGKxHhHzHF%2BKRgh%2FD0KNI5jEerTAYSBsJSQawKkpFvzwhMZb2XO4htvCJo3GhRZhMVjOsvXjUdIVYl%2B4%2BoTEdxEL8rUHa2QxeI3AfHzRQeN5H7FScC14b8UcWEJ1SAKA19XysriNFOJzE0LAt19onMeUSBltuyzfwWR3hrdgOKT5IZRblR4UoquyXVZhcjDJO%2Fz26prZYeu3%2Fl7hMCYFe8G%2FpwwIkQq%2Bn9vvndMDZm0A272o6cL5E6rD4vD4aWTz6vOHI5gaA5hbHSKIu%2FitViydTBbF4Z7EsJgteSp8R1YD4Wua4OMJSbrL0GOqUBLmEfv3vUOe8K9%2F%2F%2B7tHKt6PfDvYABdsjfgRZW3ZGpwT0CZ8DLguyRJFVjczw5SjC%2FKfUuH%2FpkOxsGmw5vZ72daNGXUpLGP4yCkw3Uhtg1RYh628h9d4kLfRXoa0FypwoeoCLmtmWr3V%2BpmjTQWhMTqj%2Bqrx8P%2BLOiDdKM48MCFbhMvm0sfLO9EzZ436C8zm3jKurvpIbM49dEkIUWttIlOgSyhHK&X-Amz-Signature=178c18ac0d8606877c2d15c4e8f370f44ebdf877da4d48859bee896e4b3f51c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U76P4BXF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSwlfKdXJCA%2B8yYazYmfqmy523YRAUyNAGKZQOlap6tQIgbeW%2BgpMBx5CslDeDKS3mugAB%2Bz62VTc%2FIE0H9E1unLoqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7fq%2FjVK57lUJrpQyrcA%2B8y8B08fguEe7mDnAce%2BagwbuSuafrV62W1N%2BG%2FSGo6pIrFvElJ8H0Krkzy2BpDGf%2BGcHFE92giUXGVce9MtvePa%2BuD%2Fr6pZ5zMpYVtf0iUA6NY2JjNBWP30p6vD4zCO%2B3S1t5NKzTuacGitbkJnOHPZMiD62hW3E4E4ALwV%2B5r4b1DOgPjcRxnW%2BW5OEyXlKQvWGx%2BPB7ofkzccqK89DxCVWWSAn445%2BOXbjER2bbASImKGhWpZ%2FQ5L%2FGIWfma0tLHLsGTHJY%2FhOR1LksoaDujeKzp0GjaZk%2FPjSJ7pSEm4994tI1fxeSDVSILeMeh8vF4emdYfmFGKxHhHzHF%2BKRgh%2FD0KNI5jEerTAYSBsJSQawKkpFvzwhMZb2XO4htvCJo3GhRZhMVjOsvXjUdIVYl%2B4%2BoTEdxEL8rUHa2QxeI3AfHzRQeN5H7FScC14b8UcWEJ1SAKA19XysriNFOJzE0LAt19onMeUSBltuyzfwWR3hrdgOKT5IZRblR4UoquyXVZhcjDJO%2Fz26prZYeu3%2Fl7hMCYFe8G%2FpwwIkQq%2Bn9vvndMDZm0A272o6cL5E6rD4vD4aWTz6vOHI5gaA5hbHSKIu%2FitViydTBbF4Z7EsJgteSp8R1YD4Wua4OMJSbrL0GOqUBLmEfv3vUOe8K9%2F%2F%2B7tHKt6PfDvYABdsjfgRZW3ZGpwT0CZ8DLguyRJFVjczw5SjC%2FKfUuH%2FpkOxsGmw5vZ72daNGXUpLGP4yCkw3Uhtg1RYh628h9d4kLfRXoa0FypwoeoCLmtmWr3V%2BpmjTQWhMTqj%2Bqrx8P%2BLOiDdKM48MCFbhMvm0sfLO9EzZ436C8zm3jKurvpIbM49dEkIUWttIlOgSyhHK&X-Amz-Signature=30416153d2e2f85afa458e7b4ee0783f3441fe06d5e57c564ffff0a6d7c98b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U76P4BXF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSwlfKdXJCA%2B8yYazYmfqmy523YRAUyNAGKZQOlap6tQIgbeW%2BgpMBx5CslDeDKS3mugAB%2Bz62VTc%2FIE0H9E1unLoqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7fq%2FjVK57lUJrpQyrcA%2B8y8B08fguEe7mDnAce%2BagwbuSuafrV62W1N%2BG%2FSGo6pIrFvElJ8H0Krkzy2BpDGf%2BGcHFE92giUXGVce9MtvePa%2BuD%2Fr6pZ5zMpYVtf0iUA6NY2JjNBWP30p6vD4zCO%2B3S1t5NKzTuacGitbkJnOHPZMiD62hW3E4E4ALwV%2B5r4b1DOgPjcRxnW%2BW5OEyXlKQvWGx%2BPB7ofkzccqK89DxCVWWSAn445%2BOXbjER2bbASImKGhWpZ%2FQ5L%2FGIWfma0tLHLsGTHJY%2FhOR1LksoaDujeKzp0GjaZk%2FPjSJ7pSEm4994tI1fxeSDVSILeMeh8vF4emdYfmFGKxHhHzHF%2BKRgh%2FD0KNI5jEerTAYSBsJSQawKkpFvzwhMZb2XO4htvCJo3GhRZhMVjOsvXjUdIVYl%2B4%2BoTEdxEL8rUHa2QxeI3AfHzRQeN5H7FScC14b8UcWEJ1SAKA19XysriNFOJzE0LAt19onMeUSBltuyzfwWR3hrdgOKT5IZRblR4UoquyXVZhcjDJO%2Fz26prZYeu3%2Fl7hMCYFe8G%2FpwwIkQq%2Bn9vvndMDZm0A272o6cL5E6rD4vD4aWTz6vOHI5gaA5hbHSKIu%2FitViydTBbF4Z7EsJgteSp8R1YD4Wua4OMJSbrL0GOqUBLmEfv3vUOe8K9%2F%2F%2B7tHKt6PfDvYABdsjfgRZW3ZGpwT0CZ8DLguyRJFVjczw5SjC%2FKfUuH%2FpkOxsGmw5vZ72daNGXUpLGP4yCkw3Uhtg1RYh628h9d4kLfRXoa0FypwoeoCLmtmWr3V%2BpmjTQWhMTqj%2Bqrx8P%2BLOiDdKM48MCFbhMvm0sfLO9EzZ436C8zm3jKurvpIbM49dEkIUWttIlOgSyhHK&X-Amz-Signature=b90bb53b42094e3ac8490b157b23f2f8a9f8fef0d7ec3da30500eec1822efdd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U76P4BXF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSwlfKdXJCA%2B8yYazYmfqmy523YRAUyNAGKZQOlap6tQIgbeW%2BgpMBx5CslDeDKS3mugAB%2Bz62VTc%2FIE0H9E1unLoqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7fq%2FjVK57lUJrpQyrcA%2B8y8B08fguEe7mDnAce%2BagwbuSuafrV62W1N%2BG%2FSGo6pIrFvElJ8H0Krkzy2BpDGf%2BGcHFE92giUXGVce9MtvePa%2BuD%2Fr6pZ5zMpYVtf0iUA6NY2JjNBWP30p6vD4zCO%2B3S1t5NKzTuacGitbkJnOHPZMiD62hW3E4E4ALwV%2B5r4b1DOgPjcRxnW%2BW5OEyXlKQvWGx%2BPB7ofkzccqK89DxCVWWSAn445%2BOXbjER2bbASImKGhWpZ%2FQ5L%2FGIWfma0tLHLsGTHJY%2FhOR1LksoaDujeKzp0GjaZk%2FPjSJ7pSEm4994tI1fxeSDVSILeMeh8vF4emdYfmFGKxHhHzHF%2BKRgh%2FD0KNI5jEerTAYSBsJSQawKkpFvzwhMZb2XO4htvCJo3GhRZhMVjOsvXjUdIVYl%2B4%2BoTEdxEL8rUHa2QxeI3AfHzRQeN5H7FScC14b8UcWEJ1SAKA19XysriNFOJzE0LAt19onMeUSBltuyzfwWR3hrdgOKT5IZRblR4UoquyXVZhcjDJO%2Fz26prZYeu3%2Fl7hMCYFe8G%2FpwwIkQq%2Bn9vvndMDZm0A272o6cL5E6rD4vD4aWTz6vOHI5gaA5hbHSKIu%2FitViydTBbF4Z7EsJgteSp8R1YD4Wua4OMJSbrL0GOqUBLmEfv3vUOe8K9%2F%2F%2B7tHKt6PfDvYABdsjfgRZW3ZGpwT0CZ8DLguyRJFVjczw5SjC%2FKfUuH%2FpkOxsGmw5vZ72daNGXUpLGP4yCkw3Uhtg1RYh628h9d4kLfRXoa0FypwoeoCLmtmWr3V%2BpmjTQWhMTqj%2Bqrx8P%2BLOiDdKM48MCFbhMvm0sfLO9EzZ436C8zm3jKurvpIbM49dEkIUWttIlOgSyhHK&X-Amz-Signature=9e684bca26bac42806ec01e2fc6c7cbea642db9b9d451fd6be326c0658a1a82c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U76P4BXF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSwlfKdXJCA%2B8yYazYmfqmy523YRAUyNAGKZQOlap6tQIgbeW%2BgpMBx5CslDeDKS3mugAB%2Bz62VTc%2FIE0H9E1unLoqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7fq%2FjVK57lUJrpQyrcA%2B8y8B08fguEe7mDnAce%2BagwbuSuafrV62W1N%2BG%2FSGo6pIrFvElJ8H0Krkzy2BpDGf%2BGcHFE92giUXGVce9MtvePa%2BuD%2Fr6pZ5zMpYVtf0iUA6NY2JjNBWP30p6vD4zCO%2B3S1t5NKzTuacGitbkJnOHPZMiD62hW3E4E4ALwV%2B5r4b1DOgPjcRxnW%2BW5OEyXlKQvWGx%2BPB7ofkzccqK89DxCVWWSAn445%2BOXbjER2bbASImKGhWpZ%2FQ5L%2FGIWfma0tLHLsGTHJY%2FhOR1LksoaDujeKzp0GjaZk%2FPjSJ7pSEm4994tI1fxeSDVSILeMeh8vF4emdYfmFGKxHhHzHF%2BKRgh%2FD0KNI5jEerTAYSBsJSQawKkpFvzwhMZb2XO4htvCJo3GhRZhMVjOsvXjUdIVYl%2B4%2BoTEdxEL8rUHa2QxeI3AfHzRQeN5H7FScC14b8UcWEJ1SAKA19XysriNFOJzE0LAt19onMeUSBltuyzfwWR3hrdgOKT5IZRblR4UoquyXVZhcjDJO%2Fz26prZYeu3%2Fl7hMCYFe8G%2FpwwIkQq%2Bn9vvndMDZm0A272o6cL5E6rD4vD4aWTz6vOHI5gaA5hbHSKIu%2FitViydTBbF4Z7EsJgteSp8R1YD4Wua4OMJSbrL0GOqUBLmEfv3vUOe8K9%2F%2F%2B7tHKt6PfDvYABdsjfgRZW3ZGpwT0CZ8DLguyRJFVjczw5SjC%2FKfUuH%2FpkOxsGmw5vZ72daNGXUpLGP4yCkw3Uhtg1RYh628h9d4kLfRXoa0FypwoeoCLmtmWr3V%2BpmjTQWhMTqj%2Bqrx8P%2BLOiDdKM48MCFbhMvm0sfLO9EzZ436C8zm3jKurvpIbM49dEkIUWttIlOgSyhHK&X-Amz-Signature=024fa6882a2373c82a3592ea5f34578b872f5bbca29a11be097f55e4806d3c99&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U76P4BXF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSwlfKdXJCA%2B8yYazYmfqmy523YRAUyNAGKZQOlap6tQIgbeW%2BgpMBx5CslDeDKS3mugAB%2Bz62VTc%2FIE0H9E1unLoqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7fq%2FjVK57lUJrpQyrcA%2B8y8B08fguEe7mDnAce%2BagwbuSuafrV62W1N%2BG%2FSGo6pIrFvElJ8H0Krkzy2BpDGf%2BGcHFE92giUXGVce9MtvePa%2BuD%2Fr6pZ5zMpYVtf0iUA6NY2JjNBWP30p6vD4zCO%2B3S1t5NKzTuacGitbkJnOHPZMiD62hW3E4E4ALwV%2B5r4b1DOgPjcRxnW%2BW5OEyXlKQvWGx%2BPB7ofkzccqK89DxCVWWSAn445%2BOXbjER2bbASImKGhWpZ%2FQ5L%2FGIWfma0tLHLsGTHJY%2FhOR1LksoaDujeKzp0GjaZk%2FPjSJ7pSEm4994tI1fxeSDVSILeMeh8vF4emdYfmFGKxHhHzHF%2BKRgh%2FD0KNI5jEerTAYSBsJSQawKkpFvzwhMZb2XO4htvCJo3GhRZhMVjOsvXjUdIVYl%2B4%2BoTEdxEL8rUHa2QxeI3AfHzRQeN5H7FScC14b8UcWEJ1SAKA19XysriNFOJzE0LAt19onMeUSBltuyzfwWR3hrdgOKT5IZRblR4UoquyXVZhcjDJO%2Fz26prZYeu3%2Fl7hMCYFe8G%2FpwwIkQq%2Bn9vvndMDZm0A272o6cL5E6rD4vD4aWTz6vOHI5gaA5hbHSKIu%2FitViydTBbF4Z7EsJgteSp8R1YD4Wua4OMJSbrL0GOqUBLmEfv3vUOe8K9%2F%2F%2B7tHKt6PfDvYABdsjfgRZW3ZGpwT0CZ8DLguyRJFVjczw5SjC%2FKfUuH%2FpkOxsGmw5vZ72daNGXUpLGP4yCkw3Uhtg1RYh628h9d4kLfRXoa0FypwoeoCLmtmWr3V%2BpmjTQWhMTqj%2Bqrx8P%2BLOiDdKM48MCFbhMvm0sfLO9EzZ436C8zm3jKurvpIbM49dEkIUWttIlOgSyhHK&X-Amz-Signature=20f9fe700c0c3eefe92e5a6547e51547f25461ffa50e7483c7fce61ba84ab087&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U76P4BXF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSwlfKdXJCA%2B8yYazYmfqmy523YRAUyNAGKZQOlap6tQIgbeW%2BgpMBx5CslDeDKS3mugAB%2Bz62VTc%2FIE0H9E1unLoqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7fq%2FjVK57lUJrpQyrcA%2B8y8B08fguEe7mDnAce%2BagwbuSuafrV62W1N%2BG%2FSGo6pIrFvElJ8H0Krkzy2BpDGf%2BGcHFE92giUXGVce9MtvePa%2BuD%2Fr6pZ5zMpYVtf0iUA6NY2JjNBWP30p6vD4zCO%2B3S1t5NKzTuacGitbkJnOHPZMiD62hW3E4E4ALwV%2B5r4b1DOgPjcRxnW%2BW5OEyXlKQvWGx%2BPB7ofkzccqK89DxCVWWSAn445%2BOXbjER2bbASImKGhWpZ%2FQ5L%2FGIWfma0tLHLsGTHJY%2FhOR1LksoaDujeKzp0GjaZk%2FPjSJ7pSEm4994tI1fxeSDVSILeMeh8vF4emdYfmFGKxHhHzHF%2BKRgh%2FD0KNI5jEerTAYSBsJSQawKkpFvzwhMZb2XO4htvCJo3GhRZhMVjOsvXjUdIVYl%2B4%2BoTEdxEL8rUHa2QxeI3AfHzRQeN5H7FScC14b8UcWEJ1SAKA19XysriNFOJzE0LAt19onMeUSBltuyzfwWR3hrdgOKT5IZRblR4UoquyXVZhcjDJO%2Fz26prZYeu3%2Fl7hMCYFe8G%2FpwwIkQq%2Bn9vvndMDZm0A272o6cL5E6rD4vD4aWTz6vOHI5gaA5hbHSKIu%2FitViydTBbF4Z7EsJgteSp8R1YD4Wua4OMJSbrL0GOqUBLmEfv3vUOe8K9%2F%2F%2B7tHKt6PfDvYABdsjfgRZW3ZGpwT0CZ8DLguyRJFVjczw5SjC%2FKfUuH%2FpkOxsGmw5vZ72daNGXUpLGP4yCkw3Uhtg1RYh628h9d4kLfRXoa0FypwoeoCLmtmWr3V%2BpmjTQWhMTqj%2Bqrx8P%2BLOiDdKM48MCFbhMvm0sfLO9EzZ436C8zm3jKurvpIbM49dEkIUWttIlOgSyhHK&X-Amz-Signature=9376b7aab0932b4771ba41caa8f63424b281a41dff7e8946b64e8b40ed324ca7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
