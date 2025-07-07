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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZVXFFYC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEALnI2oWp029rsOm5r%2FUPaOBm4YheqkX4p0l8vlVmrMAiEA3Wjn8ULfXPlW%2FX%2BMy%2FHA0JynzGgCrRcccyiZACBDQTEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjlLMAaoPEcmycT3SrcAxylccqYjQUcNoYGUMKUd2YprSNy1HewS1VUvXVsfdA5f8nKQybFM4w1O%2F1KC0EHw%2BmcGZF7w7GBTe6rxx7l%2F9sFHrCEFes0Tm%2FLSXmsao6eAKz8srxjUehLzP1gojLMEiFsuv8iBTY3iL6Nw9%2FhO9NFxJ2go3JnMA0GucXgOjQfBe%2FLvc4QPeJpeJhqjlF9CCVFpcUGk8BFjKaSBDbJ%2FpmU8iyslb0O8cZfKB4v%2B4PtjdtXlQtzj%2FC%2Fu5bUF0S4Ne8tLt%2FORjC6Vs9ELvyzS7hKzrhC0JJN8AhDErpQ2%2BuZMb9Mx1nmmHhFlymvQAkMGcG1yfJTcnOO624njncxAgCQDO9GOmylpjE4PDcW4oBtpQ2R2r0A2jmiik%2BqNGHSC1nlRvqFbTBswusRiNQN%2FOP%2F7BYnQK%2Fk8RIF3BKcMvhuqM8SY5II87SqjUHj0qutam4tJVj%2FAsXlhGwN39Z4sQ3N9z1tklHje9ho6EmaArt2YQeciKW78I%2FQKzXNzZjM0PSoTXlOjlZEyPTvj%2BXIkMIGGH9t6b7JLu%2B8tI8%2FOtvTZg4cKW3wQj9F870BHs6uBhy18suGtbARzXiA3MrobwEBY%2B1dyBxl5qRjcvjX6zDGo84FduILTDm%2BiubVMMiSscMGOqUBhqtYh4SWZWLMbNCgIrwPan%2FxHJZjiDQpSC7M%2FGE5QATQ4NpLpEDPTy9I05gyuiZPfGeQ3GEhN5vp%2BJiVc6Vp9m5IDbwnoFIsTwLY%2FQCi36scVHurlpaYLq0jthHXci3U87DlpaDS5BZbJMNFhcylx7Rcs12Tm7sFTC4vsT5dNBOYp6wm7D8voGOEDcEw%2FR2fgy8ZBAWmv6DZiJtcO51oE8b9kX43&X-Amz-Signature=c56b1ed81f69156b51a666e512f481bd9e2b67cc13913ddbe0dd76d93dd3cb7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZVXFFYC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEALnI2oWp029rsOm5r%2FUPaOBm4YheqkX4p0l8vlVmrMAiEA3Wjn8ULfXPlW%2FX%2BMy%2FHA0JynzGgCrRcccyiZACBDQTEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjlLMAaoPEcmycT3SrcAxylccqYjQUcNoYGUMKUd2YprSNy1HewS1VUvXVsfdA5f8nKQybFM4w1O%2F1KC0EHw%2BmcGZF7w7GBTe6rxx7l%2F9sFHrCEFes0Tm%2FLSXmsao6eAKz8srxjUehLzP1gojLMEiFsuv8iBTY3iL6Nw9%2FhO9NFxJ2go3JnMA0GucXgOjQfBe%2FLvc4QPeJpeJhqjlF9CCVFpcUGk8BFjKaSBDbJ%2FpmU8iyslb0O8cZfKB4v%2B4PtjdtXlQtzj%2FC%2Fu5bUF0S4Ne8tLt%2FORjC6Vs9ELvyzS7hKzrhC0JJN8AhDErpQ2%2BuZMb9Mx1nmmHhFlymvQAkMGcG1yfJTcnOO624njncxAgCQDO9GOmylpjE4PDcW4oBtpQ2R2r0A2jmiik%2BqNGHSC1nlRvqFbTBswusRiNQN%2FOP%2F7BYnQK%2Fk8RIF3BKcMvhuqM8SY5II87SqjUHj0qutam4tJVj%2FAsXlhGwN39Z4sQ3N9z1tklHje9ho6EmaArt2YQeciKW78I%2FQKzXNzZjM0PSoTXlOjlZEyPTvj%2BXIkMIGGH9t6b7JLu%2B8tI8%2FOtvTZg4cKW3wQj9F870BHs6uBhy18suGtbARzXiA3MrobwEBY%2B1dyBxl5qRjcvjX6zDGo84FduILTDm%2BiubVMMiSscMGOqUBhqtYh4SWZWLMbNCgIrwPan%2FxHJZjiDQpSC7M%2FGE5QATQ4NpLpEDPTy9I05gyuiZPfGeQ3GEhN5vp%2BJiVc6Vp9m5IDbwnoFIsTwLY%2FQCi36scVHurlpaYLq0jthHXci3U87DlpaDS5BZbJMNFhcylx7Rcs12Tm7sFTC4vsT5dNBOYp6wm7D8voGOEDcEw%2FR2fgy8ZBAWmv6DZiJtcO51oE8b9kX43&X-Amz-Signature=f072a573faaa1836df1b46e7927db645493a5a3792d28e3e8d378049eb7d993e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZVXFFYC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEALnI2oWp029rsOm5r%2FUPaOBm4YheqkX4p0l8vlVmrMAiEA3Wjn8ULfXPlW%2FX%2BMy%2FHA0JynzGgCrRcccyiZACBDQTEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjlLMAaoPEcmycT3SrcAxylccqYjQUcNoYGUMKUd2YprSNy1HewS1VUvXVsfdA5f8nKQybFM4w1O%2F1KC0EHw%2BmcGZF7w7GBTe6rxx7l%2F9sFHrCEFes0Tm%2FLSXmsao6eAKz8srxjUehLzP1gojLMEiFsuv8iBTY3iL6Nw9%2FhO9NFxJ2go3JnMA0GucXgOjQfBe%2FLvc4QPeJpeJhqjlF9CCVFpcUGk8BFjKaSBDbJ%2FpmU8iyslb0O8cZfKB4v%2B4PtjdtXlQtzj%2FC%2Fu5bUF0S4Ne8tLt%2FORjC6Vs9ELvyzS7hKzrhC0JJN8AhDErpQ2%2BuZMb9Mx1nmmHhFlymvQAkMGcG1yfJTcnOO624njncxAgCQDO9GOmylpjE4PDcW4oBtpQ2R2r0A2jmiik%2BqNGHSC1nlRvqFbTBswusRiNQN%2FOP%2F7BYnQK%2Fk8RIF3BKcMvhuqM8SY5II87SqjUHj0qutam4tJVj%2FAsXlhGwN39Z4sQ3N9z1tklHje9ho6EmaArt2YQeciKW78I%2FQKzXNzZjM0PSoTXlOjlZEyPTvj%2BXIkMIGGH9t6b7JLu%2B8tI8%2FOtvTZg4cKW3wQj9F870BHs6uBhy18suGtbARzXiA3MrobwEBY%2B1dyBxl5qRjcvjX6zDGo84FduILTDm%2BiubVMMiSscMGOqUBhqtYh4SWZWLMbNCgIrwPan%2FxHJZjiDQpSC7M%2FGE5QATQ4NpLpEDPTy9I05gyuiZPfGeQ3GEhN5vp%2BJiVc6Vp9m5IDbwnoFIsTwLY%2FQCi36scVHurlpaYLq0jthHXci3U87DlpaDS5BZbJMNFhcylx7Rcs12Tm7sFTC4vsT5dNBOYp6wm7D8voGOEDcEw%2FR2fgy8ZBAWmv6DZiJtcO51oE8b9kX43&X-Amz-Signature=513fb877ea394238c9e78604f03bd260d2163171168c8ecd640cf3cf8292792f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZVXFFYC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEALnI2oWp029rsOm5r%2FUPaOBm4YheqkX4p0l8vlVmrMAiEA3Wjn8ULfXPlW%2FX%2BMy%2FHA0JynzGgCrRcccyiZACBDQTEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjlLMAaoPEcmycT3SrcAxylccqYjQUcNoYGUMKUd2YprSNy1HewS1VUvXVsfdA5f8nKQybFM4w1O%2F1KC0EHw%2BmcGZF7w7GBTe6rxx7l%2F9sFHrCEFes0Tm%2FLSXmsao6eAKz8srxjUehLzP1gojLMEiFsuv8iBTY3iL6Nw9%2FhO9NFxJ2go3JnMA0GucXgOjQfBe%2FLvc4QPeJpeJhqjlF9CCVFpcUGk8BFjKaSBDbJ%2FpmU8iyslb0O8cZfKB4v%2B4PtjdtXlQtzj%2FC%2Fu5bUF0S4Ne8tLt%2FORjC6Vs9ELvyzS7hKzrhC0JJN8AhDErpQ2%2BuZMb9Mx1nmmHhFlymvQAkMGcG1yfJTcnOO624njncxAgCQDO9GOmylpjE4PDcW4oBtpQ2R2r0A2jmiik%2BqNGHSC1nlRvqFbTBswusRiNQN%2FOP%2F7BYnQK%2Fk8RIF3BKcMvhuqM8SY5II87SqjUHj0qutam4tJVj%2FAsXlhGwN39Z4sQ3N9z1tklHje9ho6EmaArt2YQeciKW78I%2FQKzXNzZjM0PSoTXlOjlZEyPTvj%2BXIkMIGGH9t6b7JLu%2B8tI8%2FOtvTZg4cKW3wQj9F870BHs6uBhy18suGtbARzXiA3MrobwEBY%2B1dyBxl5qRjcvjX6zDGo84FduILTDm%2BiubVMMiSscMGOqUBhqtYh4SWZWLMbNCgIrwPan%2FxHJZjiDQpSC7M%2FGE5QATQ4NpLpEDPTy9I05gyuiZPfGeQ3GEhN5vp%2BJiVc6Vp9m5IDbwnoFIsTwLY%2FQCi36scVHurlpaYLq0jthHXci3U87DlpaDS5BZbJMNFhcylx7Rcs12Tm7sFTC4vsT5dNBOYp6wm7D8voGOEDcEw%2FR2fgy8ZBAWmv6DZiJtcO51oE8b9kX43&X-Amz-Signature=08f7ab23cbc8909a29f19269949cc66bde624e589d2ef798fa600ccc6110f713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZVXFFYC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEALnI2oWp029rsOm5r%2FUPaOBm4YheqkX4p0l8vlVmrMAiEA3Wjn8ULfXPlW%2FX%2BMy%2FHA0JynzGgCrRcccyiZACBDQTEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjlLMAaoPEcmycT3SrcAxylccqYjQUcNoYGUMKUd2YprSNy1HewS1VUvXVsfdA5f8nKQybFM4w1O%2F1KC0EHw%2BmcGZF7w7GBTe6rxx7l%2F9sFHrCEFes0Tm%2FLSXmsao6eAKz8srxjUehLzP1gojLMEiFsuv8iBTY3iL6Nw9%2FhO9NFxJ2go3JnMA0GucXgOjQfBe%2FLvc4QPeJpeJhqjlF9CCVFpcUGk8BFjKaSBDbJ%2FpmU8iyslb0O8cZfKB4v%2B4PtjdtXlQtzj%2FC%2Fu5bUF0S4Ne8tLt%2FORjC6Vs9ELvyzS7hKzrhC0JJN8AhDErpQ2%2BuZMb9Mx1nmmHhFlymvQAkMGcG1yfJTcnOO624njncxAgCQDO9GOmylpjE4PDcW4oBtpQ2R2r0A2jmiik%2BqNGHSC1nlRvqFbTBswusRiNQN%2FOP%2F7BYnQK%2Fk8RIF3BKcMvhuqM8SY5II87SqjUHj0qutam4tJVj%2FAsXlhGwN39Z4sQ3N9z1tklHje9ho6EmaArt2YQeciKW78I%2FQKzXNzZjM0PSoTXlOjlZEyPTvj%2BXIkMIGGH9t6b7JLu%2B8tI8%2FOtvTZg4cKW3wQj9F870BHs6uBhy18suGtbARzXiA3MrobwEBY%2B1dyBxl5qRjcvjX6zDGo84FduILTDm%2BiubVMMiSscMGOqUBhqtYh4SWZWLMbNCgIrwPan%2FxHJZjiDQpSC7M%2FGE5QATQ4NpLpEDPTy9I05gyuiZPfGeQ3GEhN5vp%2BJiVc6Vp9m5IDbwnoFIsTwLY%2FQCi36scVHurlpaYLq0jthHXci3U87DlpaDS5BZbJMNFhcylx7Rcs12Tm7sFTC4vsT5dNBOYp6wm7D8voGOEDcEw%2FR2fgy8ZBAWmv6DZiJtcO51oE8b9kX43&X-Amz-Signature=44f1f40fa1eb8d68c9b96cc1815cd580e15d487e03ab2c8718d312e3cb6fe401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZVXFFYC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEALnI2oWp029rsOm5r%2FUPaOBm4YheqkX4p0l8vlVmrMAiEA3Wjn8ULfXPlW%2FX%2BMy%2FHA0JynzGgCrRcccyiZACBDQTEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjlLMAaoPEcmycT3SrcAxylccqYjQUcNoYGUMKUd2YprSNy1HewS1VUvXVsfdA5f8nKQybFM4w1O%2F1KC0EHw%2BmcGZF7w7GBTe6rxx7l%2F9sFHrCEFes0Tm%2FLSXmsao6eAKz8srxjUehLzP1gojLMEiFsuv8iBTY3iL6Nw9%2FhO9NFxJ2go3JnMA0GucXgOjQfBe%2FLvc4QPeJpeJhqjlF9CCVFpcUGk8BFjKaSBDbJ%2FpmU8iyslb0O8cZfKB4v%2B4PtjdtXlQtzj%2FC%2Fu5bUF0S4Ne8tLt%2FORjC6Vs9ELvyzS7hKzrhC0JJN8AhDErpQ2%2BuZMb9Mx1nmmHhFlymvQAkMGcG1yfJTcnOO624njncxAgCQDO9GOmylpjE4PDcW4oBtpQ2R2r0A2jmiik%2BqNGHSC1nlRvqFbTBswusRiNQN%2FOP%2F7BYnQK%2Fk8RIF3BKcMvhuqM8SY5II87SqjUHj0qutam4tJVj%2FAsXlhGwN39Z4sQ3N9z1tklHje9ho6EmaArt2YQeciKW78I%2FQKzXNzZjM0PSoTXlOjlZEyPTvj%2BXIkMIGGH9t6b7JLu%2B8tI8%2FOtvTZg4cKW3wQj9F870BHs6uBhy18suGtbARzXiA3MrobwEBY%2B1dyBxl5qRjcvjX6zDGo84FduILTDm%2BiubVMMiSscMGOqUBhqtYh4SWZWLMbNCgIrwPan%2FxHJZjiDQpSC7M%2FGE5QATQ4NpLpEDPTy9I05gyuiZPfGeQ3GEhN5vp%2BJiVc6Vp9m5IDbwnoFIsTwLY%2FQCi36scVHurlpaYLq0jthHXci3U87DlpaDS5BZbJMNFhcylx7Rcs12Tm7sFTC4vsT5dNBOYp6wm7D8voGOEDcEw%2FR2fgy8ZBAWmv6DZiJtcO51oE8b9kX43&X-Amz-Signature=1d8a658a88a6245ea700f31760b96e0013870fd383c805fdda4197fcd3ccb936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZVXFFYC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEALnI2oWp029rsOm5r%2FUPaOBm4YheqkX4p0l8vlVmrMAiEA3Wjn8ULfXPlW%2FX%2BMy%2FHA0JynzGgCrRcccyiZACBDQTEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjlLMAaoPEcmycT3SrcAxylccqYjQUcNoYGUMKUd2YprSNy1HewS1VUvXVsfdA5f8nKQybFM4w1O%2F1KC0EHw%2BmcGZF7w7GBTe6rxx7l%2F9sFHrCEFes0Tm%2FLSXmsao6eAKz8srxjUehLzP1gojLMEiFsuv8iBTY3iL6Nw9%2FhO9NFxJ2go3JnMA0GucXgOjQfBe%2FLvc4QPeJpeJhqjlF9CCVFpcUGk8BFjKaSBDbJ%2FpmU8iyslb0O8cZfKB4v%2B4PtjdtXlQtzj%2FC%2Fu5bUF0S4Ne8tLt%2FORjC6Vs9ELvyzS7hKzrhC0JJN8AhDErpQ2%2BuZMb9Mx1nmmHhFlymvQAkMGcG1yfJTcnOO624njncxAgCQDO9GOmylpjE4PDcW4oBtpQ2R2r0A2jmiik%2BqNGHSC1nlRvqFbTBswusRiNQN%2FOP%2F7BYnQK%2Fk8RIF3BKcMvhuqM8SY5II87SqjUHj0qutam4tJVj%2FAsXlhGwN39Z4sQ3N9z1tklHje9ho6EmaArt2YQeciKW78I%2FQKzXNzZjM0PSoTXlOjlZEyPTvj%2BXIkMIGGH9t6b7JLu%2B8tI8%2FOtvTZg4cKW3wQj9F870BHs6uBhy18suGtbARzXiA3MrobwEBY%2B1dyBxl5qRjcvjX6zDGo84FduILTDm%2BiubVMMiSscMGOqUBhqtYh4SWZWLMbNCgIrwPan%2FxHJZjiDQpSC7M%2FGE5QATQ4NpLpEDPTy9I05gyuiZPfGeQ3GEhN5vp%2BJiVc6Vp9m5IDbwnoFIsTwLY%2FQCi36scVHurlpaYLq0jthHXci3U87DlpaDS5BZbJMNFhcylx7Rcs12Tm7sFTC4vsT5dNBOYp6wm7D8voGOEDcEw%2FR2fgy8ZBAWmv6DZiJtcO51oE8b9kX43&X-Amz-Signature=c7c4cbe86b0e908892b8649d301f628badf43313812f26a991221b3e354bd10d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZVXFFYC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEALnI2oWp029rsOm5r%2FUPaOBm4YheqkX4p0l8vlVmrMAiEA3Wjn8ULfXPlW%2FX%2BMy%2FHA0JynzGgCrRcccyiZACBDQTEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjlLMAaoPEcmycT3SrcAxylccqYjQUcNoYGUMKUd2YprSNy1HewS1VUvXVsfdA5f8nKQybFM4w1O%2F1KC0EHw%2BmcGZF7w7GBTe6rxx7l%2F9sFHrCEFes0Tm%2FLSXmsao6eAKz8srxjUehLzP1gojLMEiFsuv8iBTY3iL6Nw9%2FhO9NFxJ2go3JnMA0GucXgOjQfBe%2FLvc4QPeJpeJhqjlF9CCVFpcUGk8BFjKaSBDbJ%2FpmU8iyslb0O8cZfKB4v%2B4PtjdtXlQtzj%2FC%2Fu5bUF0S4Ne8tLt%2FORjC6Vs9ELvyzS7hKzrhC0JJN8AhDErpQ2%2BuZMb9Mx1nmmHhFlymvQAkMGcG1yfJTcnOO624njncxAgCQDO9GOmylpjE4PDcW4oBtpQ2R2r0A2jmiik%2BqNGHSC1nlRvqFbTBswusRiNQN%2FOP%2F7BYnQK%2Fk8RIF3BKcMvhuqM8SY5II87SqjUHj0qutam4tJVj%2FAsXlhGwN39Z4sQ3N9z1tklHje9ho6EmaArt2YQeciKW78I%2FQKzXNzZjM0PSoTXlOjlZEyPTvj%2BXIkMIGGH9t6b7JLu%2B8tI8%2FOtvTZg4cKW3wQj9F870BHs6uBhy18suGtbARzXiA3MrobwEBY%2B1dyBxl5qRjcvjX6zDGo84FduILTDm%2BiubVMMiSscMGOqUBhqtYh4SWZWLMbNCgIrwPan%2FxHJZjiDQpSC7M%2FGE5QATQ4NpLpEDPTy9I05gyuiZPfGeQ3GEhN5vp%2BJiVc6Vp9m5IDbwnoFIsTwLY%2FQCi36scVHurlpaYLq0jthHXci3U87DlpaDS5BZbJMNFhcylx7Rcs12Tm7sFTC4vsT5dNBOYp6wm7D8voGOEDcEw%2FR2fgy8ZBAWmv6DZiJtcO51oE8b9kX43&X-Amz-Signature=596a43beb82832a4362afdef3ecc0f047cada9ec021ff0c56ce247a994966c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
