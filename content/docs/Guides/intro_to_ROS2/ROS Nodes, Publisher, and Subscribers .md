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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IB7ZTOD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID20t5tRXHc9U0kTEwiCBJmVXAG1H5Grepnh1wkBz3zrAiEA0WPkML55V1JDWMA7oY%2F4Ohcy%2FSolM%2BFMvnfzHy%2BLJycq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDD5zxRB%2FSAqZ%2FZNP2yrcA82ORxgv2%2FThP2x3NpmnJftV5BHfcp6nuDUznopSrrL1AzPPL5exJYi%2Fsl%2Fq6xm2on624AdslheUMTAb%2FA6exAwFdVqJDJ56H24fBj5gQqTFXtTdHb8%2BVW06hufhKfQLhoeIN%2BWsF51KfGhBN0CEEektRWqJSIJsH8S7zZUQs043UujNRu%2FIZR6QRyjKpzdIXpRoaI%2BuXyfAkpV8CbNf4M%2BIqy3n7cSVXYZw03gG2%2FnlYzHCGmf4aMLzseno4Ki0BG6C%2FOClIVqlKkPsFwcny21v8n9501rp1Rq6BXauUkpbt0N55OcXX6d6fo21v2uTyR%2BGZBmzXgUYCLpe%2FNJdqRUH1VTVH3yTXpHTzuO2QzF8KNJue1NxC5IzaLuG8iX1qaSCtu4j1LwGcN47GpkolcDITPOpdvuctcTNAfg7SuVvWO0mJdDpvgtKCGqZzDMPPT3NwIXjjFrYoW3GEXoDOnMc60e%2F2RP7Y75sVrCfvTK9DrZKNYDJG7IkRuKl1uKEdqFb6qEqcSeeew9pc97ErhtJEpuQH3X5yQedIKnXTncTeNyNiMmFuAatkJ9yURGpGzyli%2FfXHHZBBw7N29znoHxmNEQCPOsL7lXLhhpVyYcib5aoCWFJoTBgs3fTML%2Fhor4GOqUBqpf6cF2as%2BS3YvBC2bUoyxeAtLwF1Gj%2BZC5Zd8zPCRMbPPS3FEUWjm1SLtDwCLpT2vAaptUCTWq7OxZECA%2BadX%2FE5%2BleJcNTYnN%2B9cYBcjgA6QDmQND%2FCmBaS3lAVhBdQveEk6q95Vn62%2BAoyHT%2Fz%2FcGMiOPONX%2Fin5NQ0JYtgvSLDjfQ%2BwlU8K%2Fj%2BHczkmeHmBqGAdF9DlWZX0VK7jE%2Fsk%2FcpoU&X-Amz-Signature=8585323a93a6ecb259525b8ff164715b24df8c3e6f99c95641d7a79596469ac5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IB7ZTOD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID20t5tRXHc9U0kTEwiCBJmVXAG1H5Grepnh1wkBz3zrAiEA0WPkML55V1JDWMA7oY%2F4Ohcy%2FSolM%2BFMvnfzHy%2BLJycq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDD5zxRB%2FSAqZ%2FZNP2yrcA82ORxgv2%2FThP2x3NpmnJftV5BHfcp6nuDUznopSrrL1AzPPL5exJYi%2Fsl%2Fq6xm2on624AdslheUMTAb%2FA6exAwFdVqJDJ56H24fBj5gQqTFXtTdHb8%2BVW06hufhKfQLhoeIN%2BWsF51KfGhBN0CEEektRWqJSIJsH8S7zZUQs043UujNRu%2FIZR6QRyjKpzdIXpRoaI%2BuXyfAkpV8CbNf4M%2BIqy3n7cSVXYZw03gG2%2FnlYzHCGmf4aMLzseno4Ki0BG6C%2FOClIVqlKkPsFwcny21v8n9501rp1Rq6BXauUkpbt0N55OcXX6d6fo21v2uTyR%2BGZBmzXgUYCLpe%2FNJdqRUH1VTVH3yTXpHTzuO2QzF8KNJue1NxC5IzaLuG8iX1qaSCtu4j1LwGcN47GpkolcDITPOpdvuctcTNAfg7SuVvWO0mJdDpvgtKCGqZzDMPPT3NwIXjjFrYoW3GEXoDOnMc60e%2F2RP7Y75sVrCfvTK9DrZKNYDJG7IkRuKl1uKEdqFb6qEqcSeeew9pc97ErhtJEpuQH3X5yQedIKnXTncTeNyNiMmFuAatkJ9yURGpGzyli%2FfXHHZBBw7N29znoHxmNEQCPOsL7lXLhhpVyYcib5aoCWFJoTBgs3fTML%2Fhor4GOqUBqpf6cF2as%2BS3YvBC2bUoyxeAtLwF1Gj%2BZC5Zd8zPCRMbPPS3FEUWjm1SLtDwCLpT2vAaptUCTWq7OxZECA%2BadX%2FE5%2BleJcNTYnN%2B9cYBcjgA6QDmQND%2FCmBaS3lAVhBdQveEk6q95Vn62%2BAoyHT%2Fz%2FcGMiOPONX%2Fin5NQ0JYtgvSLDjfQ%2BwlU8K%2Fj%2BHczkmeHmBqGAdF9DlWZX0VK7jE%2Fsk%2FcpoU&X-Amz-Signature=31136eb4f3e095d8043f151e785392ea19f8ef33202533dde4a78e1261072673&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IB7ZTOD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID20t5tRXHc9U0kTEwiCBJmVXAG1H5Grepnh1wkBz3zrAiEA0WPkML55V1JDWMA7oY%2F4Ohcy%2FSolM%2BFMvnfzHy%2BLJycq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDD5zxRB%2FSAqZ%2FZNP2yrcA82ORxgv2%2FThP2x3NpmnJftV5BHfcp6nuDUznopSrrL1AzPPL5exJYi%2Fsl%2Fq6xm2on624AdslheUMTAb%2FA6exAwFdVqJDJ56H24fBj5gQqTFXtTdHb8%2BVW06hufhKfQLhoeIN%2BWsF51KfGhBN0CEEektRWqJSIJsH8S7zZUQs043UujNRu%2FIZR6QRyjKpzdIXpRoaI%2BuXyfAkpV8CbNf4M%2BIqy3n7cSVXYZw03gG2%2FnlYzHCGmf4aMLzseno4Ki0BG6C%2FOClIVqlKkPsFwcny21v8n9501rp1Rq6BXauUkpbt0N55OcXX6d6fo21v2uTyR%2BGZBmzXgUYCLpe%2FNJdqRUH1VTVH3yTXpHTzuO2QzF8KNJue1NxC5IzaLuG8iX1qaSCtu4j1LwGcN47GpkolcDITPOpdvuctcTNAfg7SuVvWO0mJdDpvgtKCGqZzDMPPT3NwIXjjFrYoW3GEXoDOnMc60e%2F2RP7Y75sVrCfvTK9DrZKNYDJG7IkRuKl1uKEdqFb6qEqcSeeew9pc97ErhtJEpuQH3X5yQedIKnXTncTeNyNiMmFuAatkJ9yURGpGzyli%2FfXHHZBBw7N29znoHxmNEQCPOsL7lXLhhpVyYcib5aoCWFJoTBgs3fTML%2Fhor4GOqUBqpf6cF2as%2BS3YvBC2bUoyxeAtLwF1Gj%2BZC5Zd8zPCRMbPPS3FEUWjm1SLtDwCLpT2vAaptUCTWq7OxZECA%2BadX%2FE5%2BleJcNTYnN%2B9cYBcjgA6QDmQND%2FCmBaS3lAVhBdQveEk6q95Vn62%2BAoyHT%2Fz%2FcGMiOPONX%2Fin5NQ0JYtgvSLDjfQ%2BwlU8K%2Fj%2BHczkmeHmBqGAdF9DlWZX0VK7jE%2Fsk%2FcpoU&X-Amz-Signature=94b6c400c1db67240c5933a6b03884e6314c4cf8c846b7144ae6aba7d4d9d65e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IB7ZTOD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID20t5tRXHc9U0kTEwiCBJmVXAG1H5Grepnh1wkBz3zrAiEA0WPkML55V1JDWMA7oY%2F4Ohcy%2FSolM%2BFMvnfzHy%2BLJycq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDD5zxRB%2FSAqZ%2FZNP2yrcA82ORxgv2%2FThP2x3NpmnJftV5BHfcp6nuDUznopSrrL1AzPPL5exJYi%2Fsl%2Fq6xm2on624AdslheUMTAb%2FA6exAwFdVqJDJ56H24fBj5gQqTFXtTdHb8%2BVW06hufhKfQLhoeIN%2BWsF51KfGhBN0CEEektRWqJSIJsH8S7zZUQs043UujNRu%2FIZR6QRyjKpzdIXpRoaI%2BuXyfAkpV8CbNf4M%2BIqy3n7cSVXYZw03gG2%2FnlYzHCGmf4aMLzseno4Ki0BG6C%2FOClIVqlKkPsFwcny21v8n9501rp1Rq6BXauUkpbt0N55OcXX6d6fo21v2uTyR%2BGZBmzXgUYCLpe%2FNJdqRUH1VTVH3yTXpHTzuO2QzF8KNJue1NxC5IzaLuG8iX1qaSCtu4j1LwGcN47GpkolcDITPOpdvuctcTNAfg7SuVvWO0mJdDpvgtKCGqZzDMPPT3NwIXjjFrYoW3GEXoDOnMc60e%2F2RP7Y75sVrCfvTK9DrZKNYDJG7IkRuKl1uKEdqFb6qEqcSeeew9pc97ErhtJEpuQH3X5yQedIKnXTncTeNyNiMmFuAatkJ9yURGpGzyli%2FfXHHZBBw7N29znoHxmNEQCPOsL7lXLhhpVyYcib5aoCWFJoTBgs3fTML%2Fhor4GOqUBqpf6cF2as%2BS3YvBC2bUoyxeAtLwF1Gj%2BZC5Zd8zPCRMbPPS3FEUWjm1SLtDwCLpT2vAaptUCTWq7OxZECA%2BadX%2FE5%2BleJcNTYnN%2B9cYBcjgA6QDmQND%2FCmBaS3lAVhBdQveEk6q95Vn62%2BAoyHT%2Fz%2FcGMiOPONX%2Fin5NQ0JYtgvSLDjfQ%2BwlU8K%2Fj%2BHczkmeHmBqGAdF9DlWZX0VK7jE%2Fsk%2FcpoU&X-Amz-Signature=933f10c65d10c9c01c05752f2dc3b4ce6779c8bbd33084eade117242fcb321b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IB7ZTOD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID20t5tRXHc9U0kTEwiCBJmVXAG1H5Grepnh1wkBz3zrAiEA0WPkML55V1JDWMA7oY%2F4Ohcy%2FSolM%2BFMvnfzHy%2BLJycq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDD5zxRB%2FSAqZ%2FZNP2yrcA82ORxgv2%2FThP2x3NpmnJftV5BHfcp6nuDUznopSrrL1AzPPL5exJYi%2Fsl%2Fq6xm2on624AdslheUMTAb%2FA6exAwFdVqJDJ56H24fBj5gQqTFXtTdHb8%2BVW06hufhKfQLhoeIN%2BWsF51KfGhBN0CEEektRWqJSIJsH8S7zZUQs043UujNRu%2FIZR6QRyjKpzdIXpRoaI%2BuXyfAkpV8CbNf4M%2BIqy3n7cSVXYZw03gG2%2FnlYzHCGmf4aMLzseno4Ki0BG6C%2FOClIVqlKkPsFwcny21v8n9501rp1Rq6BXauUkpbt0N55OcXX6d6fo21v2uTyR%2BGZBmzXgUYCLpe%2FNJdqRUH1VTVH3yTXpHTzuO2QzF8KNJue1NxC5IzaLuG8iX1qaSCtu4j1LwGcN47GpkolcDITPOpdvuctcTNAfg7SuVvWO0mJdDpvgtKCGqZzDMPPT3NwIXjjFrYoW3GEXoDOnMc60e%2F2RP7Y75sVrCfvTK9DrZKNYDJG7IkRuKl1uKEdqFb6qEqcSeeew9pc97ErhtJEpuQH3X5yQedIKnXTncTeNyNiMmFuAatkJ9yURGpGzyli%2FfXHHZBBw7N29znoHxmNEQCPOsL7lXLhhpVyYcib5aoCWFJoTBgs3fTML%2Fhor4GOqUBqpf6cF2as%2BS3YvBC2bUoyxeAtLwF1Gj%2BZC5Zd8zPCRMbPPS3FEUWjm1SLtDwCLpT2vAaptUCTWq7OxZECA%2BadX%2FE5%2BleJcNTYnN%2B9cYBcjgA6QDmQND%2FCmBaS3lAVhBdQveEk6q95Vn62%2BAoyHT%2Fz%2FcGMiOPONX%2Fin5NQ0JYtgvSLDjfQ%2BwlU8K%2Fj%2BHczkmeHmBqGAdF9DlWZX0VK7jE%2Fsk%2FcpoU&X-Amz-Signature=0c0505caf817e12afcc750a89a1b9ae366f41ce2d491005bf2d118b5d945307a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IB7ZTOD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID20t5tRXHc9U0kTEwiCBJmVXAG1H5Grepnh1wkBz3zrAiEA0WPkML55V1JDWMA7oY%2F4Ohcy%2FSolM%2BFMvnfzHy%2BLJycq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDD5zxRB%2FSAqZ%2FZNP2yrcA82ORxgv2%2FThP2x3NpmnJftV5BHfcp6nuDUznopSrrL1AzPPL5exJYi%2Fsl%2Fq6xm2on624AdslheUMTAb%2FA6exAwFdVqJDJ56H24fBj5gQqTFXtTdHb8%2BVW06hufhKfQLhoeIN%2BWsF51KfGhBN0CEEektRWqJSIJsH8S7zZUQs043UujNRu%2FIZR6QRyjKpzdIXpRoaI%2BuXyfAkpV8CbNf4M%2BIqy3n7cSVXYZw03gG2%2FnlYzHCGmf4aMLzseno4Ki0BG6C%2FOClIVqlKkPsFwcny21v8n9501rp1Rq6BXauUkpbt0N55OcXX6d6fo21v2uTyR%2BGZBmzXgUYCLpe%2FNJdqRUH1VTVH3yTXpHTzuO2QzF8KNJue1NxC5IzaLuG8iX1qaSCtu4j1LwGcN47GpkolcDITPOpdvuctcTNAfg7SuVvWO0mJdDpvgtKCGqZzDMPPT3NwIXjjFrYoW3GEXoDOnMc60e%2F2RP7Y75sVrCfvTK9DrZKNYDJG7IkRuKl1uKEdqFb6qEqcSeeew9pc97ErhtJEpuQH3X5yQedIKnXTncTeNyNiMmFuAatkJ9yURGpGzyli%2FfXHHZBBw7N29znoHxmNEQCPOsL7lXLhhpVyYcib5aoCWFJoTBgs3fTML%2Fhor4GOqUBqpf6cF2as%2BS3YvBC2bUoyxeAtLwF1Gj%2BZC5Zd8zPCRMbPPS3FEUWjm1SLtDwCLpT2vAaptUCTWq7OxZECA%2BadX%2FE5%2BleJcNTYnN%2B9cYBcjgA6QDmQND%2FCmBaS3lAVhBdQveEk6q95Vn62%2BAoyHT%2Fz%2FcGMiOPONX%2Fin5NQ0JYtgvSLDjfQ%2BwlU8K%2Fj%2BHczkmeHmBqGAdF9DlWZX0VK7jE%2Fsk%2FcpoU&X-Amz-Signature=b98da71b000b5aec7975919d8f100cda240ff2057a9b4399259f459697c9a19f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IB7ZTOD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID20t5tRXHc9U0kTEwiCBJmVXAG1H5Grepnh1wkBz3zrAiEA0WPkML55V1JDWMA7oY%2F4Ohcy%2FSolM%2BFMvnfzHy%2BLJycq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDD5zxRB%2FSAqZ%2FZNP2yrcA82ORxgv2%2FThP2x3NpmnJftV5BHfcp6nuDUznopSrrL1AzPPL5exJYi%2Fsl%2Fq6xm2on624AdslheUMTAb%2FA6exAwFdVqJDJ56H24fBj5gQqTFXtTdHb8%2BVW06hufhKfQLhoeIN%2BWsF51KfGhBN0CEEektRWqJSIJsH8S7zZUQs043UujNRu%2FIZR6QRyjKpzdIXpRoaI%2BuXyfAkpV8CbNf4M%2BIqy3n7cSVXYZw03gG2%2FnlYzHCGmf4aMLzseno4Ki0BG6C%2FOClIVqlKkPsFwcny21v8n9501rp1Rq6BXauUkpbt0N55OcXX6d6fo21v2uTyR%2BGZBmzXgUYCLpe%2FNJdqRUH1VTVH3yTXpHTzuO2QzF8KNJue1NxC5IzaLuG8iX1qaSCtu4j1LwGcN47GpkolcDITPOpdvuctcTNAfg7SuVvWO0mJdDpvgtKCGqZzDMPPT3NwIXjjFrYoW3GEXoDOnMc60e%2F2RP7Y75sVrCfvTK9DrZKNYDJG7IkRuKl1uKEdqFb6qEqcSeeew9pc97ErhtJEpuQH3X5yQedIKnXTncTeNyNiMmFuAatkJ9yURGpGzyli%2FfXHHZBBw7N29znoHxmNEQCPOsL7lXLhhpVyYcib5aoCWFJoTBgs3fTML%2Fhor4GOqUBqpf6cF2as%2BS3YvBC2bUoyxeAtLwF1Gj%2BZC5Zd8zPCRMbPPS3FEUWjm1SLtDwCLpT2vAaptUCTWq7OxZECA%2BadX%2FE5%2BleJcNTYnN%2B9cYBcjgA6QDmQND%2FCmBaS3lAVhBdQveEk6q95Vn62%2BAoyHT%2Fz%2FcGMiOPONX%2Fin5NQ0JYtgvSLDjfQ%2BwlU8K%2Fj%2BHczkmeHmBqGAdF9DlWZX0VK7jE%2Fsk%2FcpoU&X-Amz-Signature=e066b9abbb9c97455b920bd6cbbe43ff8151dcdd00306a4b6a25e95b7a4d7381&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IB7ZTOD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID20t5tRXHc9U0kTEwiCBJmVXAG1H5Grepnh1wkBz3zrAiEA0WPkML55V1JDWMA7oY%2F4Ohcy%2FSolM%2BFMvnfzHy%2BLJycq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDD5zxRB%2FSAqZ%2FZNP2yrcA82ORxgv2%2FThP2x3NpmnJftV5BHfcp6nuDUznopSrrL1AzPPL5exJYi%2Fsl%2Fq6xm2on624AdslheUMTAb%2FA6exAwFdVqJDJ56H24fBj5gQqTFXtTdHb8%2BVW06hufhKfQLhoeIN%2BWsF51KfGhBN0CEEektRWqJSIJsH8S7zZUQs043UujNRu%2FIZR6QRyjKpzdIXpRoaI%2BuXyfAkpV8CbNf4M%2BIqy3n7cSVXYZw03gG2%2FnlYzHCGmf4aMLzseno4Ki0BG6C%2FOClIVqlKkPsFwcny21v8n9501rp1Rq6BXauUkpbt0N55OcXX6d6fo21v2uTyR%2BGZBmzXgUYCLpe%2FNJdqRUH1VTVH3yTXpHTzuO2QzF8KNJue1NxC5IzaLuG8iX1qaSCtu4j1LwGcN47GpkolcDITPOpdvuctcTNAfg7SuVvWO0mJdDpvgtKCGqZzDMPPT3NwIXjjFrYoW3GEXoDOnMc60e%2F2RP7Y75sVrCfvTK9DrZKNYDJG7IkRuKl1uKEdqFb6qEqcSeeew9pc97ErhtJEpuQH3X5yQedIKnXTncTeNyNiMmFuAatkJ9yURGpGzyli%2FfXHHZBBw7N29znoHxmNEQCPOsL7lXLhhpVyYcib5aoCWFJoTBgs3fTML%2Fhor4GOqUBqpf6cF2as%2BS3YvBC2bUoyxeAtLwF1Gj%2BZC5Zd8zPCRMbPPS3FEUWjm1SLtDwCLpT2vAaptUCTWq7OxZECA%2BadX%2FE5%2BleJcNTYnN%2B9cYBcjgA6QDmQND%2FCmBaS3lAVhBdQveEk6q95Vn62%2BAoyHT%2Fz%2FcGMiOPONX%2Fin5NQ0JYtgvSLDjfQ%2BwlU8K%2Fj%2BHczkmeHmBqGAdF9DlWZX0VK7jE%2Fsk%2FcpoU&X-Amz-Signature=5ba383aa380971cd89210cf5e0a08d32b757e1afc77a662a7f81c199a3a6b8a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
