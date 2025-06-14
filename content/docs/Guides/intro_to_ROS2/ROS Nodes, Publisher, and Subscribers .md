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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSQIQJB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEtUetxtS%2F%2BtLsEh2GOtL6CdJD00UdDlQdPR%2Fqgb4Wz2AiEAgFzOZGjKsNZSlIYheEpCz7ntdfFN1uUt%2Fn2mOxC0iyIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDO1I%2Bdikf%2B0R3%2Byl9SrcA6axrDIkfy%2BRQaJOCy5FZtQYtx1oZPEsg7HHwZ%2BZNMKsV64p3YAUmmkblrwEuCRHcaBAdt7w8pEQnkQ0cfYEghDTvjQz1ZH4WeP%2B2To%2FqULq8g7vK3qbLveuEzPznV94Za0pPhu18OEX56caeTFsbU98q869khcjAfwfP28oorHr1iVKHL64njgoHKUaeISBipHMskka6twvYjaxGWF84uQnlwF%2B6gQsQ2MgGB8FneUyPPxEATKGKYM7sWDNqlY12kuctnHFcVKIIrWRXBF115EQqpgOKYVibAK07tHK3LXl3LRn2BUJ8UO7QOOTXgcitQqDJi2ouQyMkcOrAYBOcxOkNh%2B8ER7RLZUu7Pu3BaqykBrRsT5I2VqlUilDh%2FaBPrFWPmQydfOBRCkCoFDILKtgY8badeuhPWIxfT8oESPnLNazjKkbW1DZf4DKRgRwfGCKFJeSByvOMaVw0nxH%2FS7JODkOwQv78lJUwhB0%2BCdHh1%2BDX5iu8lwZaAsGYAyAWquEV8zANyJuWrpKUm%2Blx9S57C3oElAJvQvTo7fpSLf9BCMAPbOwNQncI1ncimuw9m4XxorBJBJLkabUjnu9zCRA%2Bf5FrH5ykgs1%2F5H9uZUiPVeG3w7448LV6VzZMM2Ms8IGOqUBtY0wXJHNH%2Bk4sb0ScBGud8HDD6%2FlevPpk38YPoQHfw8To66y0OO3ARSsldnABoWc1ocCDYgZHIXOH2ZdwHZFrNIG1N%2FKeVwmcJ2dPSP%2F%2FzXXflmw8PHXwN6H2HPjUxn%2FeWjjiFyc%2BBED4FIHMigoRWdQU8j2uFcn3gj%2FiVqhGe1Y5e0nn13m43%2BoJMeIf99sO0rafsPRQYZDWVKpXPJtzSvuPkmS&X-Amz-Signature=41e1bac0c862ebec39bf12ecb06dd722236210cbf4c7a32c58bb10ccb182550f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSQIQJB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEtUetxtS%2F%2BtLsEh2GOtL6CdJD00UdDlQdPR%2Fqgb4Wz2AiEAgFzOZGjKsNZSlIYheEpCz7ntdfFN1uUt%2Fn2mOxC0iyIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDO1I%2Bdikf%2B0R3%2Byl9SrcA6axrDIkfy%2BRQaJOCy5FZtQYtx1oZPEsg7HHwZ%2BZNMKsV64p3YAUmmkblrwEuCRHcaBAdt7w8pEQnkQ0cfYEghDTvjQz1ZH4WeP%2B2To%2FqULq8g7vK3qbLveuEzPznV94Za0pPhu18OEX56caeTFsbU98q869khcjAfwfP28oorHr1iVKHL64njgoHKUaeISBipHMskka6twvYjaxGWF84uQnlwF%2B6gQsQ2MgGB8FneUyPPxEATKGKYM7sWDNqlY12kuctnHFcVKIIrWRXBF115EQqpgOKYVibAK07tHK3LXl3LRn2BUJ8UO7QOOTXgcitQqDJi2ouQyMkcOrAYBOcxOkNh%2B8ER7RLZUu7Pu3BaqykBrRsT5I2VqlUilDh%2FaBPrFWPmQydfOBRCkCoFDILKtgY8badeuhPWIxfT8oESPnLNazjKkbW1DZf4DKRgRwfGCKFJeSByvOMaVw0nxH%2FS7JODkOwQv78lJUwhB0%2BCdHh1%2BDX5iu8lwZaAsGYAyAWquEV8zANyJuWrpKUm%2Blx9S57C3oElAJvQvTo7fpSLf9BCMAPbOwNQncI1ncimuw9m4XxorBJBJLkabUjnu9zCRA%2Bf5FrH5ykgs1%2F5H9uZUiPVeG3w7448LV6VzZMM2Ms8IGOqUBtY0wXJHNH%2Bk4sb0ScBGud8HDD6%2FlevPpk38YPoQHfw8To66y0OO3ARSsldnABoWc1ocCDYgZHIXOH2ZdwHZFrNIG1N%2FKeVwmcJ2dPSP%2F%2FzXXflmw8PHXwN6H2HPjUxn%2FeWjjiFyc%2BBED4FIHMigoRWdQU8j2uFcn3gj%2FiVqhGe1Y5e0nn13m43%2BoJMeIf99sO0rafsPRQYZDWVKpXPJtzSvuPkmS&X-Amz-Signature=8d19996f9d553b16312289d02c0de200d910c863a988bf237d58e4b32df2c5c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSQIQJB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEtUetxtS%2F%2BtLsEh2GOtL6CdJD00UdDlQdPR%2Fqgb4Wz2AiEAgFzOZGjKsNZSlIYheEpCz7ntdfFN1uUt%2Fn2mOxC0iyIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDO1I%2Bdikf%2B0R3%2Byl9SrcA6axrDIkfy%2BRQaJOCy5FZtQYtx1oZPEsg7HHwZ%2BZNMKsV64p3YAUmmkblrwEuCRHcaBAdt7w8pEQnkQ0cfYEghDTvjQz1ZH4WeP%2B2To%2FqULq8g7vK3qbLveuEzPznV94Za0pPhu18OEX56caeTFsbU98q869khcjAfwfP28oorHr1iVKHL64njgoHKUaeISBipHMskka6twvYjaxGWF84uQnlwF%2B6gQsQ2MgGB8FneUyPPxEATKGKYM7sWDNqlY12kuctnHFcVKIIrWRXBF115EQqpgOKYVibAK07tHK3LXl3LRn2BUJ8UO7QOOTXgcitQqDJi2ouQyMkcOrAYBOcxOkNh%2B8ER7RLZUu7Pu3BaqykBrRsT5I2VqlUilDh%2FaBPrFWPmQydfOBRCkCoFDILKtgY8badeuhPWIxfT8oESPnLNazjKkbW1DZf4DKRgRwfGCKFJeSByvOMaVw0nxH%2FS7JODkOwQv78lJUwhB0%2BCdHh1%2BDX5iu8lwZaAsGYAyAWquEV8zANyJuWrpKUm%2Blx9S57C3oElAJvQvTo7fpSLf9BCMAPbOwNQncI1ncimuw9m4XxorBJBJLkabUjnu9zCRA%2Bf5FrH5ykgs1%2F5H9uZUiPVeG3w7448LV6VzZMM2Ms8IGOqUBtY0wXJHNH%2Bk4sb0ScBGud8HDD6%2FlevPpk38YPoQHfw8To66y0OO3ARSsldnABoWc1ocCDYgZHIXOH2ZdwHZFrNIG1N%2FKeVwmcJ2dPSP%2F%2FzXXflmw8PHXwN6H2HPjUxn%2FeWjjiFyc%2BBED4FIHMigoRWdQU8j2uFcn3gj%2FiVqhGe1Y5e0nn13m43%2BoJMeIf99sO0rafsPRQYZDWVKpXPJtzSvuPkmS&X-Amz-Signature=bb98cf3af40dc81bec280d6a8d31a41b0b93ff9d83f0295bf14008c7485d5f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSQIQJB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEtUetxtS%2F%2BtLsEh2GOtL6CdJD00UdDlQdPR%2Fqgb4Wz2AiEAgFzOZGjKsNZSlIYheEpCz7ntdfFN1uUt%2Fn2mOxC0iyIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDO1I%2Bdikf%2B0R3%2Byl9SrcA6axrDIkfy%2BRQaJOCy5FZtQYtx1oZPEsg7HHwZ%2BZNMKsV64p3YAUmmkblrwEuCRHcaBAdt7w8pEQnkQ0cfYEghDTvjQz1ZH4WeP%2B2To%2FqULq8g7vK3qbLveuEzPznV94Za0pPhu18OEX56caeTFsbU98q869khcjAfwfP28oorHr1iVKHL64njgoHKUaeISBipHMskka6twvYjaxGWF84uQnlwF%2B6gQsQ2MgGB8FneUyPPxEATKGKYM7sWDNqlY12kuctnHFcVKIIrWRXBF115EQqpgOKYVibAK07tHK3LXl3LRn2BUJ8UO7QOOTXgcitQqDJi2ouQyMkcOrAYBOcxOkNh%2B8ER7RLZUu7Pu3BaqykBrRsT5I2VqlUilDh%2FaBPrFWPmQydfOBRCkCoFDILKtgY8badeuhPWIxfT8oESPnLNazjKkbW1DZf4DKRgRwfGCKFJeSByvOMaVw0nxH%2FS7JODkOwQv78lJUwhB0%2BCdHh1%2BDX5iu8lwZaAsGYAyAWquEV8zANyJuWrpKUm%2Blx9S57C3oElAJvQvTo7fpSLf9BCMAPbOwNQncI1ncimuw9m4XxorBJBJLkabUjnu9zCRA%2Bf5FrH5ykgs1%2F5H9uZUiPVeG3w7448LV6VzZMM2Ms8IGOqUBtY0wXJHNH%2Bk4sb0ScBGud8HDD6%2FlevPpk38YPoQHfw8To66y0OO3ARSsldnABoWc1ocCDYgZHIXOH2ZdwHZFrNIG1N%2FKeVwmcJ2dPSP%2F%2FzXXflmw8PHXwN6H2HPjUxn%2FeWjjiFyc%2BBED4FIHMigoRWdQU8j2uFcn3gj%2FiVqhGe1Y5e0nn13m43%2BoJMeIf99sO0rafsPRQYZDWVKpXPJtzSvuPkmS&X-Amz-Signature=fb490a58e8bf7eea7358ccf41d2e8024476c72b47ac7f6842d89a2e0fdcbdb52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSQIQJB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEtUetxtS%2F%2BtLsEh2GOtL6CdJD00UdDlQdPR%2Fqgb4Wz2AiEAgFzOZGjKsNZSlIYheEpCz7ntdfFN1uUt%2Fn2mOxC0iyIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDO1I%2Bdikf%2B0R3%2Byl9SrcA6axrDIkfy%2BRQaJOCy5FZtQYtx1oZPEsg7HHwZ%2BZNMKsV64p3YAUmmkblrwEuCRHcaBAdt7w8pEQnkQ0cfYEghDTvjQz1ZH4WeP%2B2To%2FqULq8g7vK3qbLveuEzPznV94Za0pPhu18OEX56caeTFsbU98q869khcjAfwfP28oorHr1iVKHL64njgoHKUaeISBipHMskka6twvYjaxGWF84uQnlwF%2B6gQsQ2MgGB8FneUyPPxEATKGKYM7sWDNqlY12kuctnHFcVKIIrWRXBF115EQqpgOKYVibAK07tHK3LXl3LRn2BUJ8UO7QOOTXgcitQqDJi2ouQyMkcOrAYBOcxOkNh%2B8ER7RLZUu7Pu3BaqykBrRsT5I2VqlUilDh%2FaBPrFWPmQydfOBRCkCoFDILKtgY8badeuhPWIxfT8oESPnLNazjKkbW1DZf4DKRgRwfGCKFJeSByvOMaVw0nxH%2FS7JODkOwQv78lJUwhB0%2BCdHh1%2BDX5iu8lwZaAsGYAyAWquEV8zANyJuWrpKUm%2Blx9S57C3oElAJvQvTo7fpSLf9BCMAPbOwNQncI1ncimuw9m4XxorBJBJLkabUjnu9zCRA%2Bf5FrH5ykgs1%2F5H9uZUiPVeG3w7448LV6VzZMM2Ms8IGOqUBtY0wXJHNH%2Bk4sb0ScBGud8HDD6%2FlevPpk38YPoQHfw8To66y0OO3ARSsldnABoWc1ocCDYgZHIXOH2ZdwHZFrNIG1N%2FKeVwmcJ2dPSP%2F%2FzXXflmw8PHXwN6H2HPjUxn%2FeWjjiFyc%2BBED4FIHMigoRWdQU8j2uFcn3gj%2FiVqhGe1Y5e0nn13m43%2BoJMeIf99sO0rafsPRQYZDWVKpXPJtzSvuPkmS&X-Amz-Signature=fcb2a593760d325213396e0245fad0c550cdb6757f4cddb46e8a8ed7c1fb0d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSQIQJB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEtUetxtS%2F%2BtLsEh2GOtL6CdJD00UdDlQdPR%2Fqgb4Wz2AiEAgFzOZGjKsNZSlIYheEpCz7ntdfFN1uUt%2Fn2mOxC0iyIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDO1I%2Bdikf%2B0R3%2Byl9SrcA6axrDIkfy%2BRQaJOCy5FZtQYtx1oZPEsg7HHwZ%2BZNMKsV64p3YAUmmkblrwEuCRHcaBAdt7w8pEQnkQ0cfYEghDTvjQz1ZH4WeP%2B2To%2FqULq8g7vK3qbLveuEzPznV94Za0pPhu18OEX56caeTFsbU98q869khcjAfwfP28oorHr1iVKHL64njgoHKUaeISBipHMskka6twvYjaxGWF84uQnlwF%2B6gQsQ2MgGB8FneUyPPxEATKGKYM7sWDNqlY12kuctnHFcVKIIrWRXBF115EQqpgOKYVibAK07tHK3LXl3LRn2BUJ8UO7QOOTXgcitQqDJi2ouQyMkcOrAYBOcxOkNh%2B8ER7RLZUu7Pu3BaqykBrRsT5I2VqlUilDh%2FaBPrFWPmQydfOBRCkCoFDILKtgY8badeuhPWIxfT8oESPnLNazjKkbW1DZf4DKRgRwfGCKFJeSByvOMaVw0nxH%2FS7JODkOwQv78lJUwhB0%2BCdHh1%2BDX5iu8lwZaAsGYAyAWquEV8zANyJuWrpKUm%2Blx9S57C3oElAJvQvTo7fpSLf9BCMAPbOwNQncI1ncimuw9m4XxorBJBJLkabUjnu9zCRA%2Bf5FrH5ykgs1%2F5H9uZUiPVeG3w7448LV6VzZMM2Ms8IGOqUBtY0wXJHNH%2Bk4sb0ScBGud8HDD6%2FlevPpk38YPoQHfw8To66y0OO3ARSsldnABoWc1ocCDYgZHIXOH2ZdwHZFrNIG1N%2FKeVwmcJ2dPSP%2F%2FzXXflmw8PHXwN6H2HPjUxn%2FeWjjiFyc%2BBED4FIHMigoRWdQU8j2uFcn3gj%2FiVqhGe1Y5e0nn13m43%2BoJMeIf99sO0rafsPRQYZDWVKpXPJtzSvuPkmS&X-Amz-Signature=9c16bf5cd3b65e6f241c87c360382719876c3265b7132d6d60024c92ec9ce6b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSQIQJB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEtUetxtS%2F%2BtLsEh2GOtL6CdJD00UdDlQdPR%2Fqgb4Wz2AiEAgFzOZGjKsNZSlIYheEpCz7ntdfFN1uUt%2Fn2mOxC0iyIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDO1I%2Bdikf%2B0R3%2Byl9SrcA6axrDIkfy%2BRQaJOCy5FZtQYtx1oZPEsg7HHwZ%2BZNMKsV64p3YAUmmkblrwEuCRHcaBAdt7w8pEQnkQ0cfYEghDTvjQz1ZH4WeP%2B2To%2FqULq8g7vK3qbLveuEzPznV94Za0pPhu18OEX56caeTFsbU98q869khcjAfwfP28oorHr1iVKHL64njgoHKUaeISBipHMskka6twvYjaxGWF84uQnlwF%2B6gQsQ2MgGB8FneUyPPxEATKGKYM7sWDNqlY12kuctnHFcVKIIrWRXBF115EQqpgOKYVibAK07tHK3LXl3LRn2BUJ8UO7QOOTXgcitQqDJi2ouQyMkcOrAYBOcxOkNh%2B8ER7RLZUu7Pu3BaqykBrRsT5I2VqlUilDh%2FaBPrFWPmQydfOBRCkCoFDILKtgY8badeuhPWIxfT8oESPnLNazjKkbW1DZf4DKRgRwfGCKFJeSByvOMaVw0nxH%2FS7JODkOwQv78lJUwhB0%2BCdHh1%2BDX5iu8lwZaAsGYAyAWquEV8zANyJuWrpKUm%2Blx9S57C3oElAJvQvTo7fpSLf9BCMAPbOwNQncI1ncimuw9m4XxorBJBJLkabUjnu9zCRA%2Bf5FrH5ykgs1%2F5H9uZUiPVeG3w7448LV6VzZMM2Ms8IGOqUBtY0wXJHNH%2Bk4sb0ScBGud8HDD6%2FlevPpk38YPoQHfw8To66y0OO3ARSsldnABoWc1ocCDYgZHIXOH2ZdwHZFrNIG1N%2FKeVwmcJ2dPSP%2F%2FzXXflmw8PHXwN6H2HPjUxn%2FeWjjiFyc%2BBED4FIHMigoRWdQU8j2uFcn3gj%2FiVqhGe1Y5e0nn13m43%2BoJMeIf99sO0rafsPRQYZDWVKpXPJtzSvuPkmS&X-Amz-Signature=8763472ea7ffe81de9090406a1ddc63b301ec2ab4299dc3447219d8ed9b6219d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSQIQJB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEtUetxtS%2F%2BtLsEh2GOtL6CdJD00UdDlQdPR%2Fqgb4Wz2AiEAgFzOZGjKsNZSlIYheEpCz7ntdfFN1uUt%2Fn2mOxC0iyIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDO1I%2Bdikf%2B0R3%2Byl9SrcA6axrDIkfy%2BRQaJOCy5FZtQYtx1oZPEsg7HHwZ%2BZNMKsV64p3YAUmmkblrwEuCRHcaBAdt7w8pEQnkQ0cfYEghDTvjQz1ZH4WeP%2B2To%2FqULq8g7vK3qbLveuEzPznV94Za0pPhu18OEX56caeTFsbU98q869khcjAfwfP28oorHr1iVKHL64njgoHKUaeISBipHMskka6twvYjaxGWF84uQnlwF%2B6gQsQ2MgGB8FneUyPPxEATKGKYM7sWDNqlY12kuctnHFcVKIIrWRXBF115EQqpgOKYVibAK07tHK3LXl3LRn2BUJ8UO7QOOTXgcitQqDJi2ouQyMkcOrAYBOcxOkNh%2B8ER7RLZUu7Pu3BaqykBrRsT5I2VqlUilDh%2FaBPrFWPmQydfOBRCkCoFDILKtgY8badeuhPWIxfT8oESPnLNazjKkbW1DZf4DKRgRwfGCKFJeSByvOMaVw0nxH%2FS7JODkOwQv78lJUwhB0%2BCdHh1%2BDX5iu8lwZaAsGYAyAWquEV8zANyJuWrpKUm%2Blx9S57C3oElAJvQvTo7fpSLf9BCMAPbOwNQncI1ncimuw9m4XxorBJBJLkabUjnu9zCRA%2Bf5FrH5ykgs1%2F5H9uZUiPVeG3w7448LV6VzZMM2Ms8IGOqUBtY0wXJHNH%2Bk4sb0ScBGud8HDD6%2FlevPpk38YPoQHfw8To66y0OO3ARSsldnABoWc1ocCDYgZHIXOH2ZdwHZFrNIG1N%2FKeVwmcJ2dPSP%2F%2FzXXflmw8PHXwN6H2HPjUxn%2FeWjjiFyc%2BBED4FIHMigoRWdQU8j2uFcn3gj%2FiVqhGe1Y5e0nn13m43%2BoJMeIf99sO0rafsPRQYZDWVKpXPJtzSvuPkmS&X-Amz-Signature=e484093669ec5ce409796f72a0effc377e243071c7a322f7702caff464a043f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
