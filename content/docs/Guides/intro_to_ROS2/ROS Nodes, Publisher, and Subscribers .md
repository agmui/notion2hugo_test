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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GXQJMWB%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGR%2B83LRAMHY6%2Fn4HbyOHhZ6dtK%2Fy%2FL6NHHXWMzYJOrtAiEAryzIcvni9q3liMmEzQ5wmy5c7K4tlBzNWRvojbz9fugq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDFwAn27z8n9MH4BtpyrcA63XmZmbDXZk%2F0KRA1FLx8GszI4L%2FmrXGg9YywiOETZ1S%2FZHT9c8VCOo313yaklqDhQFD2Bqn51eF3whLt4mmNEi4%2BV3UtQK6MDCFtDOG2LvlWuZUUkbDiM8TEbzjzMPQ4YttO9x%2B62WGGXX4ShrwTZKZ9qL1OH%2BRaFSpsK5wvH7uMlFuBc2Qz587kadCFnBmhbXPrNkSI134DcPuQqEYnrGOe8GcCP65FScN8mkiEZ5JsIjSBZxnVtU6S6otLgyIv%2FcXm6hSFgtZgWvjLKyrWCkYQ%2Fbsfyp%2FxdkeRrmXsj8mng3gQnL5o7B6vCKe5tfVAUggIxERHn47cNFZxJgsoxh0lKo947EbiEB4SkCVbNfgIeHAZneON8n0xC500Bw52vZRTnGKUV53lLsUJWUhVItkHEM%2Bn2njE1kWpf4ZFAk82XsjRVpTnDp%2B6Wm%2BxFWjLaRfkT7aHx0udfT%2BNsHD6zN6MnatoTD1EQisejmV8MwrTijw8Em%2Fk9wz2cp3%2FloUDfbgMD4HM9kEQcOBk%2FL%2Fy%2Blm%2FgWg1edu8A%2Fj6qCyO2psjuwRdqiS%2BXt%2FqyZpXlp5sC7MdDsCWprsVDpEcTR2fRA85BR7OVCJksM04yyhSpu59HjTNHymnHOnqjSMKXQk8EGOqUBRNSCZ97vjkgXkGiZrtzbOFF%2Fo92Y%2By%2BDo3CRbwyF2XcqLCxoImBQtqqrBfPSnc4CDHmPqaX8%2F8w0P%2BMjmO61xw%2BYFVWBqiCGoPgjXBky5oXYhbxNhEqjxkG5VZXxSH2G0q9Pq0j3avoipLs1DtM%2F4nPGm3IKpiYZVrTWzN7xgYDHzJgNc40iSh8B7zWQgr4a48541IH2KoW33q0aeWUk1JCDYyl%2B&X-Amz-Signature=fbde47b8df7d00ae90bb530ce9016850f0e6ee6f93b8b4c605a561392253e0cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GXQJMWB%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGR%2B83LRAMHY6%2Fn4HbyOHhZ6dtK%2Fy%2FL6NHHXWMzYJOrtAiEAryzIcvni9q3liMmEzQ5wmy5c7K4tlBzNWRvojbz9fugq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDFwAn27z8n9MH4BtpyrcA63XmZmbDXZk%2F0KRA1FLx8GszI4L%2FmrXGg9YywiOETZ1S%2FZHT9c8VCOo313yaklqDhQFD2Bqn51eF3whLt4mmNEi4%2BV3UtQK6MDCFtDOG2LvlWuZUUkbDiM8TEbzjzMPQ4YttO9x%2B62WGGXX4ShrwTZKZ9qL1OH%2BRaFSpsK5wvH7uMlFuBc2Qz587kadCFnBmhbXPrNkSI134DcPuQqEYnrGOe8GcCP65FScN8mkiEZ5JsIjSBZxnVtU6S6otLgyIv%2FcXm6hSFgtZgWvjLKyrWCkYQ%2Fbsfyp%2FxdkeRrmXsj8mng3gQnL5o7B6vCKe5tfVAUggIxERHn47cNFZxJgsoxh0lKo947EbiEB4SkCVbNfgIeHAZneON8n0xC500Bw52vZRTnGKUV53lLsUJWUhVItkHEM%2Bn2njE1kWpf4ZFAk82XsjRVpTnDp%2B6Wm%2BxFWjLaRfkT7aHx0udfT%2BNsHD6zN6MnatoTD1EQisejmV8MwrTijw8Em%2Fk9wz2cp3%2FloUDfbgMD4HM9kEQcOBk%2FL%2Fy%2Blm%2FgWg1edu8A%2Fj6qCyO2psjuwRdqiS%2BXt%2FqyZpXlp5sC7MdDsCWprsVDpEcTR2fRA85BR7OVCJksM04yyhSpu59HjTNHymnHOnqjSMKXQk8EGOqUBRNSCZ97vjkgXkGiZrtzbOFF%2Fo92Y%2By%2BDo3CRbwyF2XcqLCxoImBQtqqrBfPSnc4CDHmPqaX8%2F8w0P%2BMjmO61xw%2BYFVWBqiCGoPgjXBky5oXYhbxNhEqjxkG5VZXxSH2G0q9Pq0j3avoipLs1DtM%2F4nPGm3IKpiYZVrTWzN7xgYDHzJgNc40iSh8B7zWQgr4a48541IH2KoW33q0aeWUk1JCDYyl%2B&X-Amz-Signature=334f40527626bbe8e37fc7f27df4f768319ea803344c3fe5ed71d171d416c1ac&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GXQJMWB%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGR%2B83LRAMHY6%2Fn4HbyOHhZ6dtK%2Fy%2FL6NHHXWMzYJOrtAiEAryzIcvni9q3liMmEzQ5wmy5c7K4tlBzNWRvojbz9fugq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDFwAn27z8n9MH4BtpyrcA63XmZmbDXZk%2F0KRA1FLx8GszI4L%2FmrXGg9YywiOETZ1S%2FZHT9c8VCOo313yaklqDhQFD2Bqn51eF3whLt4mmNEi4%2BV3UtQK6MDCFtDOG2LvlWuZUUkbDiM8TEbzjzMPQ4YttO9x%2B62WGGXX4ShrwTZKZ9qL1OH%2BRaFSpsK5wvH7uMlFuBc2Qz587kadCFnBmhbXPrNkSI134DcPuQqEYnrGOe8GcCP65FScN8mkiEZ5JsIjSBZxnVtU6S6otLgyIv%2FcXm6hSFgtZgWvjLKyrWCkYQ%2Fbsfyp%2FxdkeRrmXsj8mng3gQnL5o7B6vCKe5tfVAUggIxERHn47cNFZxJgsoxh0lKo947EbiEB4SkCVbNfgIeHAZneON8n0xC500Bw52vZRTnGKUV53lLsUJWUhVItkHEM%2Bn2njE1kWpf4ZFAk82XsjRVpTnDp%2B6Wm%2BxFWjLaRfkT7aHx0udfT%2BNsHD6zN6MnatoTD1EQisejmV8MwrTijw8Em%2Fk9wz2cp3%2FloUDfbgMD4HM9kEQcOBk%2FL%2Fy%2Blm%2FgWg1edu8A%2Fj6qCyO2psjuwRdqiS%2BXt%2FqyZpXlp5sC7MdDsCWprsVDpEcTR2fRA85BR7OVCJksM04yyhSpu59HjTNHymnHOnqjSMKXQk8EGOqUBRNSCZ97vjkgXkGiZrtzbOFF%2Fo92Y%2By%2BDo3CRbwyF2XcqLCxoImBQtqqrBfPSnc4CDHmPqaX8%2F8w0P%2BMjmO61xw%2BYFVWBqiCGoPgjXBky5oXYhbxNhEqjxkG5VZXxSH2G0q9Pq0j3avoipLs1DtM%2F4nPGm3IKpiYZVrTWzN7xgYDHzJgNc40iSh8B7zWQgr4a48541IH2KoW33q0aeWUk1JCDYyl%2B&X-Amz-Signature=151dc600ea2db0d0896c93bcea20f68949398056b499c726b877c4dee5adff5b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GXQJMWB%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGR%2B83LRAMHY6%2Fn4HbyOHhZ6dtK%2Fy%2FL6NHHXWMzYJOrtAiEAryzIcvni9q3liMmEzQ5wmy5c7K4tlBzNWRvojbz9fugq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDFwAn27z8n9MH4BtpyrcA63XmZmbDXZk%2F0KRA1FLx8GszI4L%2FmrXGg9YywiOETZ1S%2FZHT9c8VCOo313yaklqDhQFD2Bqn51eF3whLt4mmNEi4%2BV3UtQK6MDCFtDOG2LvlWuZUUkbDiM8TEbzjzMPQ4YttO9x%2B62WGGXX4ShrwTZKZ9qL1OH%2BRaFSpsK5wvH7uMlFuBc2Qz587kadCFnBmhbXPrNkSI134DcPuQqEYnrGOe8GcCP65FScN8mkiEZ5JsIjSBZxnVtU6S6otLgyIv%2FcXm6hSFgtZgWvjLKyrWCkYQ%2Fbsfyp%2FxdkeRrmXsj8mng3gQnL5o7B6vCKe5tfVAUggIxERHn47cNFZxJgsoxh0lKo947EbiEB4SkCVbNfgIeHAZneON8n0xC500Bw52vZRTnGKUV53lLsUJWUhVItkHEM%2Bn2njE1kWpf4ZFAk82XsjRVpTnDp%2B6Wm%2BxFWjLaRfkT7aHx0udfT%2BNsHD6zN6MnatoTD1EQisejmV8MwrTijw8Em%2Fk9wz2cp3%2FloUDfbgMD4HM9kEQcOBk%2FL%2Fy%2Blm%2FgWg1edu8A%2Fj6qCyO2psjuwRdqiS%2BXt%2FqyZpXlp5sC7MdDsCWprsVDpEcTR2fRA85BR7OVCJksM04yyhSpu59HjTNHymnHOnqjSMKXQk8EGOqUBRNSCZ97vjkgXkGiZrtzbOFF%2Fo92Y%2By%2BDo3CRbwyF2XcqLCxoImBQtqqrBfPSnc4CDHmPqaX8%2F8w0P%2BMjmO61xw%2BYFVWBqiCGoPgjXBky5oXYhbxNhEqjxkG5VZXxSH2G0q9Pq0j3avoipLs1DtM%2F4nPGm3IKpiYZVrTWzN7xgYDHzJgNc40iSh8B7zWQgr4a48541IH2KoW33q0aeWUk1JCDYyl%2B&X-Amz-Signature=0a4c39aaa493b26537e80dee54b61b3ba98292c924f2fbd8d8bfe79119313763&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GXQJMWB%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGR%2B83LRAMHY6%2Fn4HbyOHhZ6dtK%2Fy%2FL6NHHXWMzYJOrtAiEAryzIcvni9q3liMmEzQ5wmy5c7K4tlBzNWRvojbz9fugq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDFwAn27z8n9MH4BtpyrcA63XmZmbDXZk%2F0KRA1FLx8GszI4L%2FmrXGg9YywiOETZ1S%2FZHT9c8VCOo313yaklqDhQFD2Bqn51eF3whLt4mmNEi4%2BV3UtQK6MDCFtDOG2LvlWuZUUkbDiM8TEbzjzMPQ4YttO9x%2B62WGGXX4ShrwTZKZ9qL1OH%2BRaFSpsK5wvH7uMlFuBc2Qz587kadCFnBmhbXPrNkSI134DcPuQqEYnrGOe8GcCP65FScN8mkiEZ5JsIjSBZxnVtU6S6otLgyIv%2FcXm6hSFgtZgWvjLKyrWCkYQ%2Fbsfyp%2FxdkeRrmXsj8mng3gQnL5o7B6vCKe5tfVAUggIxERHn47cNFZxJgsoxh0lKo947EbiEB4SkCVbNfgIeHAZneON8n0xC500Bw52vZRTnGKUV53lLsUJWUhVItkHEM%2Bn2njE1kWpf4ZFAk82XsjRVpTnDp%2B6Wm%2BxFWjLaRfkT7aHx0udfT%2BNsHD6zN6MnatoTD1EQisejmV8MwrTijw8Em%2Fk9wz2cp3%2FloUDfbgMD4HM9kEQcOBk%2FL%2Fy%2Blm%2FgWg1edu8A%2Fj6qCyO2psjuwRdqiS%2BXt%2FqyZpXlp5sC7MdDsCWprsVDpEcTR2fRA85BR7OVCJksM04yyhSpu59HjTNHymnHOnqjSMKXQk8EGOqUBRNSCZ97vjkgXkGiZrtzbOFF%2Fo92Y%2By%2BDo3CRbwyF2XcqLCxoImBQtqqrBfPSnc4CDHmPqaX8%2F8w0P%2BMjmO61xw%2BYFVWBqiCGoPgjXBky5oXYhbxNhEqjxkG5VZXxSH2G0q9Pq0j3avoipLs1DtM%2F4nPGm3IKpiYZVrTWzN7xgYDHzJgNc40iSh8B7zWQgr4a48541IH2KoW33q0aeWUk1JCDYyl%2B&X-Amz-Signature=b0fbcec1aec76a6c5ea21cd27da4c72a01561e77a272c311df8097086bed04b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GXQJMWB%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGR%2B83LRAMHY6%2Fn4HbyOHhZ6dtK%2Fy%2FL6NHHXWMzYJOrtAiEAryzIcvni9q3liMmEzQ5wmy5c7K4tlBzNWRvojbz9fugq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDFwAn27z8n9MH4BtpyrcA63XmZmbDXZk%2F0KRA1FLx8GszI4L%2FmrXGg9YywiOETZ1S%2FZHT9c8VCOo313yaklqDhQFD2Bqn51eF3whLt4mmNEi4%2BV3UtQK6MDCFtDOG2LvlWuZUUkbDiM8TEbzjzMPQ4YttO9x%2B62WGGXX4ShrwTZKZ9qL1OH%2BRaFSpsK5wvH7uMlFuBc2Qz587kadCFnBmhbXPrNkSI134DcPuQqEYnrGOe8GcCP65FScN8mkiEZ5JsIjSBZxnVtU6S6otLgyIv%2FcXm6hSFgtZgWvjLKyrWCkYQ%2Fbsfyp%2FxdkeRrmXsj8mng3gQnL5o7B6vCKe5tfVAUggIxERHn47cNFZxJgsoxh0lKo947EbiEB4SkCVbNfgIeHAZneON8n0xC500Bw52vZRTnGKUV53lLsUJWUhVItkHEM%2Bn2njE1kWpf4ZFAk82XsjRVpTnDp%2B6Wm%2BxFWjLaRfkT7aHx0udfT%2BNsHD6zN6MnatoTD1EQisejmV8MwrTijw8Em%2Fk9wz2cp3%2FloUDfbgMD4HM9kEQcOBk%2FL%2Fy%2Blm%2FgWg1edu8A%2Fj6qCyO2psjuwRdqiS%2BXt%2FqyZpXlp5sC7MdDsCWprsVDpEcTR2fRA85BR7OVCJksM04yyhSpu59HjTNHymnHOnqjSMKXQk8EGOqUBRNSCZ97vjkgXkGiZrtzbOFF%2Fo92Y%2By%2BDo3CRbwyF2XcqLCxoImBQtqqrBfPSnc4CDHmPqaX8%2F8w0P%2BMjmO61xw%2BYFVWBqiCGoPgjXBky5oXYhbxNhEqjxkG5VZXxSH2G0q9Pq0j3avoipLs1DtM%2F4nPGm3IKpiYZVrTWzN7xgYDHzJgNc40iSh8B7zWQgr4a48541IH2KoW33q0aeWUk1JCDYyl%2B&X-Amz-Signature=d82d188e0de6c61cef1ab815ddd48a5b53d25622a1a3ad977e41ead530720f22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GXQJMWB%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGR%2B83LRAMHY6%2Fn4HbyOHhZ6dtK%2Fy%2FL6NHHXWMzYJOrtAiEAryzIcvni9q3liMmEzQ5wmy5c7K4tlBzNWRvojbz9fugq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDFwAn27z8n9MH4BtpyrcA63XmZmbDXZk%2F0KRA1FLx8GszI4L%2FmrXGg9YywiOETZ1S%2FZHT9c8VCOo313yaklqDhQFD2Bqn51eF3whLt4mmNEi4%2BV3UtQK6MDCFtDOG2LvlWuZUUkbDiM8TEbzjzMPQ4YttO9x%2B62WGGXX4ShrwTZKZ9qL1OH%2BRaFSpsK5wvH7uMlFuBc2Qz587kadCFnBmhbXPrNkSI134DcPuQqEYnrGOe8GcCP65FScN8mkiEZ5JsIjSBZxnVtU6S6otLgyIv%2FcXm6hSFgtZgWvjLKyrWCkYQ%2Fbsfyp%2FxdkeRrmXsj8mng3gQnL5o7B6vCKe5tfVAUggIxERHn47cNFZxJgsoxh0lKo947EbiEB4SkCVbNfgIeHAZneON8n0xC500Bw52vZRTnGKUV53lLsUJWUhVItkHEM%2Bn2njE1kWpf4ZFAk82XsjRVpTnDp%2B6Wm%2BxFWjLaRfkT7aHx0udfT%2BNsHD6zN6MnatoTD1EQisejmV8MwrTijw8Em%2Fk9wz2cp3%2FloUDfbgMD4HM9kEQcOBk%2FL%2Fy%2Blm%2FgWg1edu8A%2Fj6qCyO2psjuwRdqiS%2BXt%2FqyZpXlp5sC7MdDsCWprsVDpEcTR2fRA85BR7OVCJksM04yyhSpu59HjTNHymnHOnqjSMKXQk8EGOqUBRNSCZ97vjkgXkGiZrtzbOFF%2Fo92Y%2By%2BDo3CRbwyF2XcqLCxoImBQtqqrBfPSnc4CDHmPqaX8%2F8w0P%2BMjmO61xw%2BYFVWBqiCGoPgjXBky5oXYhbxNhEqjxkG5VZXxSH2G0q9Pq0j3avoipLs1DtM%2F4nPGm3IKpiYZVrTWzN7xgYDHzJgNc40iSh8B7zWQgr4a48541IH2KoW33q0aeWUk1JCDYyl%2B&X-Amz-Signature=faee70f410d089f9d436f078418007bbcfcfdc264a376d407f8ebe7fa7f95c56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GXQJMWB%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGR%2B83LRAMHY6%2Fn4HbyOHhZ6dtK%2Fy%2FL6NHHXWMzYJOrtAiEAryzIcvni9q3liMmEzQ5wmy5c7K4tlBzNWRvojbz9fugq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDFwAn27z8n9MH4BtpyrcA63XmZmbDXZk%2F0KRA1FLx8GszI4L%2FmrXGg9YywiOETZ1S%2FZHT9c8VCOo313yaklqDhQFD2Bqn51eF3whLt4mmNEi4%2BV3UtQK6MDCFtDOG2LvlWuZUUkbDiM8TEbzjzMPQ4YttO9x%2B62WGGXX4ShrwTZKZ9qL1OH%2BRaFSpsK5wvH7uMlFuBc2Qz587kadCFnBmhbXPrNkSI134DcPuQqEYnrGOe8GcCP65FScN8mkiEZ5JsIjSBZxnVtU6S6otLgyIv%2FcXm6hSFgtZgWvjLKyrWCkYQ%2Fbsfyp%2FxdkeRrmXsj8mng3gQnL5o7B6vCKe5tfVAUggIxERHn47cNFZxJgsoxh0lKo947EbiEB4SkCVbNfgIeHAZneON8n0xC500Bw52vZRTnGKUV53lLsUJWUhVItkHEM%2Bn2njE1kWpf4ZFAk82XsjRVpTnDp%2B6Wm%2BxFWjLaRfkT7aHx0udfT%2BNsHD6zN6MnatoTD1EQisejmV8MwrTijw8Em%2Fk9wz2cp3%2FloUDfbgMD4HM9kEQcOBk%2FL%2Fy%2Blm%2FgWg1edu8A%2Fj6qCyO2psjuwRdqiS%2BXt%2FqyZpXlp5sC7MdDsCWprsVDpEcTR2fRA85BR7OVCJksM04yyhSpu59HjTNHymnHOnqjSMKXQk8EGOqUBRNSCZ97vjkgXkGiZrtzbOFF%2Fo92Y%2By%2BDo3CRbwyF2XcqLCxoImBQtqqrBfPSnc4CDHmPqaX8%2F8w0P%2BMjmO61xw%2BYFVWBqiCGoPgjXBky5oXYhbxNhEqjxkG5VZXxSH2G0q9Pq0j3avoipLs1DtM%2F4nPGm3IKpiYZVrTWzN7xgYDHzJgNc40iSh8B7zWQgr4a48541IH2KoW33q0aeWUk1JCDYyl%2B&X-Amz-Signature=0b7d8b28c88da3678811c5761bf2df97ce3a36abbee67c118aeba2da025db3b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
