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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJ2JHUL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFoWHzU6zUfhbluKsg75Rb9V%2BNDmtk1C2kQvHsjpUnahAiEAnFv6KM2K5YaPLakf499wMPSfK2VvRrnyhtqdf1bSv6oq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJd8swB%2Bde%2FYMmCFgCrcAwDfq3ZgwUOnWeOGYWTKF%2BrW4trl%2FrRQse%2F2arBCxTwDIeQ%2FC3O4M0ifOEHegW2TIj8A1XZs66PPAVzM9fhXVE5UcMU%2Fy0muYQHGa4zWhoU%2F7hdVu3%2BtVmNcPEQ1LFBeUISIIdwVNRiYkbhlSge4WN2PSQ%2FyAZ8tt93rka5qcQiQb2v88cKIGxVNr2wNSg4Agt2yJZT8cGFHJdilSOUgLTD%2Fgwc9bzlQ8DiEDDQCBjHo%2B7GbcXPW5mSyj9Yw1X0C9XtHl6NXzj1l87Z48GFgcsft%2Ba8n6rdpF%2Bhho3yCiFH084MiYYVUQ03xzD7PrsYc5hNZieHuTjSY9B0hYGue4tovQvgrWdXDN2oPDOHanNPtpQNLTwEzymTgu9PFSOMf8MjNTwPhQqM06R%2Fxg6KBKGD5aoh4W8mfIJUzLNkFq6%2BUOr6MdrVlOdAv8BsrvjpSGJJ%2FlQ2FlOQH9N4Ksg7wC8luf7r22wnSm%2BH0CmEMDPmYFsajKjuQo66nN%2BkEoDYV65bbxQCTnonR0F20lctFAM1AK%2FNRW4siIagta2vBRFAxNEoQF7C1axCDI04cugrr7GTTi8drx%2FiXDmzeooBAQg0J3xuH9a6IkUfxUMrJ1sYAaiX%2FeoQV7teAdU0HMJrgl8QGOqUBpY%2F1r6%2Bq4LYENJdnkGJzwFDtdwnwqm2uGoDYlCp0LRvpw8NfUvG8lj%2F7cxevc5tRANWvcsUDW2w1CYyY8baRbXB9kZ1hvgZFGG3efgdZVTbvNUMd3on5jpjObGu6FsULayUpkG%2BrjBVuwY6PDI6xkj0VIrFwDiECnNNWYsXBKaQjEspQRvAYCDdrljjB2WVai4D5o8L6nffmewwx3iqF%2F4uNn9Ge&X-Amz-Signature=f301b3b686019c3b241df352bd47ad944c2d6c40b73737b6deea9a1d2af0f4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJ2JHUL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFoWHzU6zUfhbluKsg75Rb9V%2BNDmtk1C2kQvHsjpUnahAiEAnFv6KM2K5YaPLakf499wMPSfK2VvRrnyhtqdf1bSv6oq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJd8swB%2Bde%2FYMmCFgCrcAwDfq3ZgwUOnWeOGYWTKF%2BrW4trl%2FrRQse%2F2arBCxTwDIeQ%2FC3O4M0ifOEHegW2TIj8A1XZs66PPAVzM9fhXVE5UcMU%2Fy0muYQHGa4zWhoU%2F7hdVu3%2BtVmNcPEQ1LFBeUISIIdwVNRiYkbhlSge4WN2PSQ%2FyAZ8tt93rka5qcQiQb2v88cKIGxVNr2wNSg4Agt2yJZT8cGFHJdilSOUgLTD%2Fgwc9bzlQ8DiEDDQCBjHo%2B7GbcXPW5mSyj9Yw1X0C9XtHl6NXzj1l87Z48GFgcsft%2Ba8n6rdpF%2Bhho3yCiFH084MiYYVUQ03xzD7PrsYc5hNZieHuTjSY9B0hYGue4tovQvgrWdXDN2oPDOHanNPtpQNLTwEzymTgu9PFSOMf8MjNTwPhQqM06R%2Fxg6KBKGD5aoh4W8mfIJUzLNkFq6%2BUOr6MdrVlOdAv8BsrvjpSGJJ%2FlQ2FlOQH9N4Ksg7wC8luf7r22wnSm%2BH0CmEMDPmYFsajKjuQo66nN%2BkEoDYV65bbxQCTnonR0F20lctFAM1AK%2FNRW4siIagta2vBRFAxNEoQF7C1axCDI04cugrr7GTTi8drx%2FiXDmzeooBAQg0J3xuH9a6IkUfxUMrJ1sYAaiX%2FeoQV7teAdU0HMJrgl8QGOqUBpY%2F1r6%2Bq4LYENJdnkGJzwFDtdwnwqm2uGoDYlCp0LRvpw8NfUvG8lj%2F7cxevc5tRANWvcsUDW2w1CYyY8baRbXB9kZ1hvgZFGG3efgdZVTbvNUMd3on5jpjObGu6FsULayUpkG%2BrjBVuwY6PDI6xkj0VIrFwDiECnNNWYsXBKaQjEspQRvAYCDdrljjB2WVai4D5o8L6nffmewwx3iqF%2F4uNn9Ge&X-Amz-Signature=f56a70cabc1bec20a7ef7dd74b46f337ece08f430daa11244f1f2cbe42934b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJ2JHUL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFoWHzU6zUfhbluKsg75Rb9V%2BNDmtk1C2kQvHsjpUnahAiEAnFv6KM2K5YaPLakf499wMPSfK2VvRrnyhtqdf1bSv6oq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJd8swB%2Bde%2FYMmCFgCrcAwDfq3ZgwUOnWeOGYWTKF%2BrW4trl%2FrRQse%2F2arBCxTwDIeQ%2FC3O4M0ifOEHegW2TIj8A1XZs66PPAVzM9fhXVE5UcMU%2Fy0muYQHGa4zWhoU%2F7hdVu3%2BtVmNcPEQ1LFBeUISIIdwVNRiYkbhlSge4WN2PSQ%2FyAZ8tt93rka5qcQiQb2v88cKIGxVNr2wNSg4Agt2yJZT8cGFHJdilSOUgLTD%2Fgwc9bzlQ8DiEDDQCBjHo%2B7GbcXPW5mSyj9Yw1X0C9XtHl6NXzj1l87Z48GFgcsft%2Ba8n6rdpF%2Bhho3yCiFH084MiYYVUQ03xzD7PrsYc5hNZieHuTjSY9B0hYGue4tovQvgrWdXDN2oPDOHanNPtpQNLTwEzymTgu9PFSOMf8MjNTwPhQqM06R%2Fxg6KBKGD5aoh4W8mfIJUzLNkFq6%2BUOr6MdrVlOdAv8BsrvjpSGJJ%2FlQ2FlOQH9N4Ksg7wC8luf7r22wnSm%2BH0CmEMDPmYFsajKjuQo66nN%2BkEoDYV65bbxQCTnonR0F20lctFAM1AK%2FNRW4siIagta2vBRFAxNEoQF7C1axCDI04cugrr7GTTi8drx%2FiXDmzeooBAQg0J3xuH9a6IkUfxUMrJ1sYAaiX%2FeoQV7teAdU0HMJrgl8QGOqUBpY%2F1r6%2Bq4LYENJdnkGJzwFDtdwnwqm2uGoDYlCp0LRvpw8NfUvG8lj%2F7cxevc5tRANWvcsUDW2w1CYyY8baRbXB9kZ1hvgZFGG3efgdZVTbvNUMd3on5jpjObGu6FsULayUpkG%2BrjBVuwY6PDI6xkj0VIrFwDiECnNNWYsXBKaQjEspQRvAYCDdrljjB2WVai4D5o8L6nffmewwx3iqF%2F4uNn9Ge&X-Amz-Signature=117ff2c2eb2c62582674816f0accc844ce743fbd556b31f35f2942ed0c0b0aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJ2JHUL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFoWHzU6zUfhbluKsg75Rb9V%2BNDmtk1C2kQvHsjpUnahAiEAnFv6KM2K5YaPLakf499wMPSfK2VvRrnyhtqdf1bSv6oq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJd8swB%2Bde%2FYMmCFgCrcAwDfq3ZgwUOnWeOGYWTKF%2BrW4trl%2FrRQse%2F2arBCxTwDIeQ%2FC3O4M0ifOEHegW2TIj8A1XZs66PPAVzM9fhXVE5UcMU%2Fy0muYQHGa4zWhoU%2F7hdVu3%2BtVmNcPEQ1LFBeUISIIdwVNRiYkbhlSge4WN2PSQ%2FyAZ8tt93rka5qcQiQb2v88cKIGxVNr2wNSg4Agt2yJZT8cGFHJdilSOUgLTD%2Fgwc9bzlQ8DiEDDQCBjHo%2B7GbcXPW5mSyj9Yw1X0C9XtHl6NXzj1l87Z48GFgcsft%2Ba8n6rdpF%2Bhho3yCiFH084MiYYVUQ03xzD7PrsYc5hNZieHuTjSY9B0hYGue4tovQvgrWdXDN2oPDOHanNPtpQNLTwEzymTgu9PFSOMf8MjNTwPhQqM06R%2Fxg6KBKGD5aoh4W8mfIJUzLNkFq6%2BUOr6MdrVlOdAv8BsrvjpSGJJ%2FlQ2FlOQH9N4Ksg7wC8luf7r22wnSm%2BH0CmEMDPmYFsajKjuQo66nN%2BkEoDYV65bbxQCTnonR0F20lctFAM1AK%2FNRW4siIagta2vBRFAxNEoQF7C1axCDI04cugrr7GTTi8drx%2FiXDmzeooBAQg0J3xuH9a6IkUfxUMrJ1sYAaiX%2FeoQV7teAdU0HMJrgl8QGOqUBpY%2F1r6%2Bq4LYENJdnkGJzwFDtdwnwqm2uGoDYlCp0LRvpw8NfUvG8lj%2F7cxevc5tRANWvcsUDW2w1CYyY8baRbXB9kZ1hvgZFGG3efgdZVTbvNUMd3on5jpjObGu6FsULayUpkG%2BrjBVuwY6PDI6xkj0VIrFwDiECnNNWYsXBKaQjEspQRvAYCDdrljjB2WVai4D5o8L6nffmewwx3iqF%2F4uNn9Ge&X-Amz-Signature=9dc8f430f8155c70ed0c9a7661ac750e53be694c102cd6b0df215fdd42741f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJ2JHUL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFoWHzU6zUfhbluKsg75Rb9V%2BNDmtk1C2kQvHsjpUnahAiEAnFv6KM2K5YaPLakf499wMPSfK2VvRrnyhtqdf1bSv6oq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJd8swB%2Bde%2FYMmCFgCrcAwDfq3ZgwUOnWeOGYWTKF%2BrW4trl%2FrRQse%2F2arBCxTwDIeQ%2FC3O4M0ifOEHegW2TIj8A1XZs66PPAVzM9fhXVE5UcMU%2Fy0muYQHGa4zWhoU%2F7hdVu3%2BtVmNcPEQ1LFBeUISIIdwVNRiYkbhlSge4WN2PSQ%2FyAZ8tt93rka5qcQiQb2v88cKIGxVNr2wNSg4Agt2yJZT8cGFHJdilSOUgLTD%2Fgwc9bzlQ8DiEDDQCBjHo%2B7GbcXPW5mSyj9Yw1X0C9XtHl6NXzj1l87Z48GFgcsft%2Ba8n6rdpF%2Bhho3yCiFH084MiYYVUQ03xzD7PrsYc5hNZieHuTjSY9B0hYGue4tovQvgrWdXDN2oPDOHanNPtpQNLTwEzymTgu9PFSOMf8MjNTwPhQqM06R%2Fxg6KBKGD5aoh4W8mfIJUzLNkFq6%2BUOr6MdrVlOdAv8BsrvjpSGJJ%2FlQ2FlOQH9N4Ksg7wC8luf7r22wnSm%2BH0CmEMDPmYFsajKjuQo66nN%2BkEoDYV65bbxQCTnonR0F20lctFAM1AK%2FNRW4siIagta2vBRFAxNEoQF7C1axCDI04cugrr7GTTi8drx%2FiXDmzeooBAQg0J3xuH9a6IkUfxUMrJ1sYAaiX%2FeoQV7teAdU0HMJrgl8QGOqUBpY%2F1r6%2Bq4LYENJdnkGJzwFDtdwnwqm2uGoDYlCp0LRvpw8NfUvG8lj%2F7cxevc5tRANWvcsUDW2w1CYyY8baRbXB9kZ1hvgZFGG3efgdZVTbvNUMd3on5jpjObGu6FsULayUpkG%2BrjBVuwY6PDI6xkj0VIrFwDiECnNNWYsXBKaQjEspQRvAYCDdrljjB2WVai4D5o8L6nffmewwx3iqF%2F4uNn9Ge&X-Amz-Signature=69d2be4206c59829b7373fecd8440f95121c520ad8afcba6e2449fac8ba6746e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJ2JHUL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFoWHzU6zUfhbluKsg75Rb9V%2BNDmtk1C2kQvHsjpUnahAiEAnFv6KM2K5YaPLakf499wMPSfK2VvRrnyhtqdf1bSv6oq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJd8swB%2Bde%2FYMmCFgCrcAwDfq3ZgwUOnWeOGYWTKF%2BrW4trl%2FrRQse%2F2arBCxTwDIeQ%2FC3O4M0ifOEHegW2TIj8A1XZs66PPAVzM9fhXVE5UcMU%2Fy0muYQHGa4zWhoU%2F7hdVu3%2BtVmNcPEQ1LFBeUISIIdwVNRiYkbhlSge4WN2PSQ%2FyAZ8tt93rka5qcQiQb2v88cKIGxVNr2wNSg4Agt2yJZT8cGFHJdilSOUgLTD%2Fgwc9bzlQ8DiEDDQCBjHo%2B7GbcXPW5mSyj9Yw1X0C9XtHl6NXzj1l87Z48GFgcsft%2Ba8n6rdpF%2Bhho3yCiFH084MiYYVUQ03xzD7PrsYc5hNZieHuTjSY9B0hYGue4tovQvgrWdXDN2oPDOHanNPtpQNLTwEzymTgu9PFSOMf8MjNTwPhQqM06R%2Fxg6KBKGD5aoh4W8mfIJUzLNkFq6%2BUOr6MdrVlOdAv8BsrvjpSGJJ%2FlQ2FlOQH9N4Ksg7wC8luf7r22wnSm%2BH0CmEMDPmYFsajKjuQo66nN%2BkEoDYV65bbxQCTnonR0F20lctFAM1AK%2FNRW4siIagta2vBRFAxNEoQF7C1axCDI04cugrr7GTTi8drx%2FiXDmzeooBAQg0J3xuH9a6IkUfxUMrJ1sYAaiX%2FeoQV7teAdU0HMJrgl8QGOqUBpY%2F1r6%2Bq4LYENJdnkGJzwFDtdwnwqm2uGoDYlCp0LRvpw8NfUvG8lj%2F7cxevc5tRANWvcsUDW2w1CYyY8baRbXB9kZ1hvgZFGG3efgdZVTbvNUMd3on5jpjObGu6FsULayUpkG%2BrjBVuwY6PDI6xkj0VIrFwDiECnNNWYsXBKaQjEspQRvAYCDdrljjB2WVai4D5o8L6nffmewwx3iqF%2F4uNn9Ge&X-Amz-Signature=a06262bef5ffe4dd10a529e020084b03e3b4f10d1ffd7c4d1eecd7c8953b5067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJ2JHUL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFoWHzU6zUfhbluKsg75Rb9V%2BNDmtk1C2kQvHsjpUnahAiEAnFv6KM2K5YaPLakf499wMPSfK2VvRrnyhtqdf1bSv6oq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJd8swB%2Bde%2FYMmCFgCrcAwDfq3ZgwUOnWeOGYWTKF%2BrW4trl%2FrRQse%2F2arBCxTwDIeQ%2FC3O4M0ifOEHegW2TIj8A1XZs66PPAVzM9fhXVE5UcMU%2Fy0muYQHGa4zWhoU%2F7hdVu3%2BtVmNcPEQ1LFBeUISIIdwVNRiYkbhlSge4WN2PSQ%2FyAZ8tt93rka5qcQiQb2v88cKIGxVNr2wNSg4Agt2yJZT8cGFHJdilSOUgLTD%2Fgwc9bzlQ8DiEDDQCBjHo%2B7GbcXPW5mSyj9Yw1X0C9XtHl6NXzj1l87Z48GFgcsft%2Ba8n6rdpF%2Bhho3yCiFH084MiYYVUQ03xzD7PrsYc5hNZieHuTjSY9B0hYGue4tovQvgrWdXDN2oPDOHanNPtpQNLTwEzymTgu9PFSOMf8MjNTwPhQqM06R%2Fxg6KBKGD5aoh4W8mfIJUzLNkFq6%2BUOr6MdrVlOdAv8BsrvjpSGJJ%2FlQ2FlOQH9N4Ksg7wC8luf7r22wnSm%2BH0CmEMDPmYFsajKjuQo66nN%2BkEoDYV65bbxQCTnonR0F20lctFAM1AK%2FNRW4siIagta2vBRFAxNEoQF7C1axCDI04cugrr7GTTi8drx%2FiXDmzeooBAQg0J3xuH9a6IkUfxUMrJ1sYAaiX%2FeoQV7teAdU0HMJrgl8QGOqUBpY%2F1r6%2Bq4LYENJdnkGJzwFDtdwnwqm2uGoDYlCp0LRvpw8NfUvG8lj%2F7cxevc5tRANWvcsUDW2w1CYyY8baRbXB9kZ1hvgZFGG3efgdZVTbvNUMd3on5jpjObGu6FsULayUpkG%2BrjBVuwY6PDI6xkj0VIrFwDiECnNNWYsXBKaQjEspQRvAYCDdrljjB2WVai4D5o8L6nffmewwx3iqF%2F4uNn9Ge&X-Amz-Signature=affe57615efb88cc0d45d9c3c71276271a3a693673049586332e6851ddb6554a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJ2JHUL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFoWHzU6zUfhbluKsg75Rb9V%2BNDmtk1C2kQvHsjpUnahAiEAnFv6KM2K5YaPLakf499wMPSfK2VvRrnyhtqdf1bSv6oq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJd8swB%2Bde%2FYMmCFgCrcAwDfq3ZgwUOnWeOGYWTKF%2BrW4trl%2FrRQse%2F2arBCxTwDIeQ%2FC3O4M0ifOEHegW2TIj8A1XZs66PPAVzM9fhXVE5UcMU%2Fy0muYQHGa4zWhoU%2F7hdVu3%2BtVmNcPEQ1LFBeUISIIdwVNRiYkbhlSge4WN2PSQ%2FyAZ8tt93rka5qcQiQb2v88cKIGxVNr2wNSg4Agt2yJZT8cGFHJdilSOUgLTD%2Fgwc9bzlQ8DiEDDQCBjHo%2B7GbcXPW5mSyj9Yw1X0C9XtHl6NXzj1l87Z48GFgcsft%2Ba8n6rdpF%2Bhho3yCiFH084MiYYVUQ03xzD7PrsYc5hNZieHuTjSY9B0hYGue4tovQvgrWdXDN2oPDOHanNPtpQNLTwEzymTgu9PFSOMf8MjNTwPhQqM06R%2Fxg6KBKGD5aoh4W8mfIJUzLNkFq6%2BUOr6MdrVlOdAv8BsrvjpSGJJ%2FlQ2FlOQH9N4Ksg7wC8luf7r22wnSm%2BH0CmEMDPmYFsajKjuQo66nN%2BkEoDYV65bbxQCTnonR0F20lctFAM1AK%2FNRW4siIagta2vBRFAxNEoQF7C1axCDI04cugrr7GTTi8drx%2FiXDmzeooBAQg0J3xuH9a6IkUfxUMrJ1sYAaiX%2FeoQV7teAdU0HMJrgl8QGOqUBpY%2F1r6%2Bq4LYENJdnkGJzwFDtdwnwqm2uGoDYlCp0LRvpw8NfUvG8lj%2F7cxevc5tRANWvcsUDW2w1CYyY8baRbXB9kZ1hvgZFGG3efgdZVTbvNUMd3on5jpjObGu6FsULayUpkG%2BrjBVuwY6PDI6xkj0VIrFwDiECnNNWYsXBKaQjEspQRvAYCDdrljjB2WVai4D5o8L6nffmewwx3iqF%2F4uNn9Ge&X-Amz-Signature=7cc45b0c618ccff70991aaab0eff6fb531eecdfe86ec5e966e8b59d0977314a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
