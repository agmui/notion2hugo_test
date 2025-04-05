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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644NBRDHB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKMp9s17xDN%2B%2Bs%2Fshg4HpeGpVFonkGhNvMAQAXABtGOQIgRtoaXjRuicfioBNGI96FoImKU02cOW6SINmLWDovkXEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAgG2cEyb8cH4JYj%2BSrcA%2FyerdxRdHPERXaWymGw%2BwZXgm16gBXCK20hCYbaQIDEw3fRwfvyaY7vuWmcPRvuhRO6B0JaV6VviYm8O1YbZBw%2Fc4h9BjRlQTJLcBt9gvEFYdZXg0drdM9BoiwA1X4M4NUtykehEtO4adTVy6B6dg%2FfyvLeA8iIbx%2FkF8%2B4%2FiBCkPCfFjEH6fmC48suJ%2Fc%2Fczcbj8aJ1vdckPL%2BXdW8EbDCGZVags3bozVrYh3z%2BCHgzrYpt38x96za4ffaLVtem%2FJ4RaPewPGotgB6M5%2BeYNlbaqOEH3Iktbno5W3Pc6Y4U0KkHOOf6o%2BoBjg6BDo95YOf9QTEvy2MU%2BQTq2DsqWkDxH4B5HGZwAFm2tT2d6ujEcdb4SAomsUvzrGbpWHvCDktEt49QXZU%2BfzWOiuYggRksQrvPmX0UlHd88u%2FZdt7uTmP23X75KafasvZMflRkcmNNmuA3%2F9H%2BKI0EALG478tREDvujMaHo1p98MbtOLXq1LrLvbGUFBksdPcXk0%2BgfqC4Zut9Sy4peQf56Yn6bS4pGjMIcrHySFJDtw9q5wUYTxQjrJ28dGqB4rmH3HAGbBPYz0AUyKk98AV5LDmdFs3rODMJwxuXzCyxEbz%2FebWbx%2FhrG%2FfnwJGnq1TMLfkw78GOqUBjLw6UK8UgLsRAro5SKMGP4%2BGa96zQS7RxKJTfWbidoCRwo2AQcR%2BZ9Xh7ujYGfKhF3XwMOdWpxI0%2FmO29u8ESHv3K6ZPw0ypi60r%2BhZFJEtXVVhiis4eusHNleeFfyWxORhBG1NzKlP%2FopKflSlpX8ziCNkabSlujDr7wQWR4Oru9%2BRruVb7KBVK2egc75tHSoDojEHo4tOJrXX1PL4dDzQQQsme&X-Amz-Signature=05a24ee038cd38097ef1d8e007dd5cf4574dbfbb1023eaaef8d5e8cfd1ba7647&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644NBRDHB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKMp9s17xDN%2B%2Bs%2Fshg4HpeGpVFonkGhNvMAQAXABtGOQIgRtoaXjRuicfioBNGI96FoImKU02cOW6SINmLWDovkXEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAgG2cEyb8cH4JYj%2BSrcA%2FyerdxRdHPERXaWymGw%2BwZXgm16gBXCK20hCYbaQIDEw3fRwfvyaY7vuWmcPRvuhRO6B0JaV6VviYm8O1YbZBw%2Fc4h9BjRlQTJLcBt9gvEFYdZXg0drdM9BoiwA1X4M4NUtykehEtO4adTVy6B6dg%2FfyvLeA8iIbx%2FkF8%2B4%2FiBCkPCfFjEH6fmC48suJ%2Fc%2Fczcbj8aJ1vdckPL%2BXdW8EbDCGZVags3bozVrYh3z%2BCHgzrYpt38x96za4ffaLVtem%2FJ4RaPewPGotgB6M5%2BeYNlbaqOEH3Iktbno5W3Pc6Y4U0KkHOOf6o%2BoBjg6BDo95YOf9QTEvy2MU%2BQTq2DsqWkDxH4B5HGZwAFm2tT2d6ujEcdb4SAomsUvzrGbpWHvCDktEt49QXZU%2BfzWOiuYggRksQrvPmX0UlHd88u%2FZdt7uTmP23X75KafasvZMflRkcmNNmuA3%2F9H%2BKI0EALG478tREDvujMaHo1p98MbtOLXq1LrLvbGUFBksdPcXk0%2BgfqC4Zut9Sy4peQf56Yn6bS4pGjMIcrHySFJDtw9q5wUYTxQjrJ28dGqB4rmH3HAGbBPYz0AUyKk98AV5LDmdFs3rODMJwxuXzCyxEbz%2FebWbx%2FhrG%2FfnwJGnq1TMLfkw78GOqUBjLw6UK8UgLsRAro5SKMGP4%2BGa96zQS7RxKJTfWbidoCRwo2AQcR%2BZ9Xh7ujYGfKhF3XwMOdWpxI0%2FmO29u8ESHv3K6ZPw0ypi60r%2BhZFJEtXVVhiis4eusHNleeFfyWxORhBG1NzKlP%2FopKflSlpX8ziCNkabSlujDr7wQWR4Oru9%2BRruVb7KBVK2egc75tHSoDojEHo4tOJrXX1PL4dDzQQQsme&X-Amz-Signature=f0ef5e013e27815503d737121436353631fc5145d00ecc9be9ee4f7995cf4e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644NBRDHB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKMp9s17xDN%2B%2Bs%2Fshg4HpeGpVFonkGhNvMAQAXABtGOQIgRtoaXjRuicfioBNGI96FoImKU02cOW6SINmLWDovkXEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAgG2cEyb8cH4JYj%2BSrcA%2FyerdxRdHPERXaWymGw%2BwZXgm16gBXCK20hCYbaQIDEw3fRwfvyaY7vuWmcPRvuhRO6B0JaV6VviYm8O1YbZBw%2Fc4h9BjRlQTJLcBt9gvEFYdZXg0drdM9BoiwA1X4M4NUtykehEtO4adTVy6B6dg%2FfyvLeA8iIbx%2FkF8%2B4%2FiBCkPCfFjEH6fmC48suJ%2Fc%2Fczcbj8aJ1vdckPL%2BXdW8EbDCGZVags3bozVrYh3z%2BCHgzrYpt38x96za4ffaLVtem%2FJ4RaPewPGotgB6M5%2BeYNlbaqOEH3Iktbno5W3Pc6Y4U0KkHOOf6o%2BoBjg6BDo95YOf9QTEvy2MU%2BQTq2DsqWkDxH4B5HGZwAFm2tT2d6ujEcdb4SAomsUvzrGbpWHvCDktEt49QXZU%2BfzWOiuYggRksQrvPmX0UlHd88u%2FZdt7uTmP23X75KafasvZMflRkcmNNmuA3%2F9H%2BKI0EALG478tREDvujMaHo1p98MbtOLXq1LrLvbGUFBksdPcXk0%2BgfqC4Zut9Sy4peQf56Yn6bS4pGjMIcrHySFJDtw9q5wUYTxQjrJ28dGqB4rmH3HAGbBPYz0AUyKk98AV5LDmdFs3rODMJwxuXzCyxEbz%2FebWbx%2FhrG%2FfnwJGnq1TMLfkw78GOqUBjLw6UK8UgLsRAro5SKMGP4%2BGa96zQS7RxKJTfWbidoCRwo2AQcR%2BZ9Xh7ujYGfKhF3XwMOdWpxI0%2FmO29u8ESHv3K6ZPw0ypi60r%2BhZFJEtXVVhiis4eusHNleeFfyWxORhBG1NzKlP%2FopKflSlpX8ziCNkabSlujDr7wQWR4Oru9%2BRruVb7KBVK2egc75tHSoDojEHo4tOJrXX1PL4dDzQQQsme&X-Amz-Signature=3bd3a0154e3deedc77994fe949bdce23277e7ae84222b40ea6e112ba5a51b210&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644NBRDHB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKMp9s17xDN%2B%2Bs%2Fshg4HpeGpVFonkGhNvMAQAXABtGOQIgRtoaXjRuicfioBNGI96FoImKU02cOW6SINmLWDovkXEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAgG2cEyb8cH4JYj%2BSrcA%2FyerdxRdHPERXaWymGw%2BwZXgm16gBXCK20hCYbaQIDEw3fRwfvyaY7vuWmcPRvuhRO6B0JaV6VviYm8O1YbZBw%2Fc4h9BjRlQTJLcBt9gvEFYdZXg0drdM9BoiwA1X4M4NUtykehEtO4adTVy6B6dg%2FfyvLeA8iIbx%2FkF8%2B4%2FiBCkPCfFjEH6fmC48suJ%2Fc%2Fczcbj8aJ1vdckPL%2BXdW8EbDCGZVags3bozVrYh3z%2BCHgzrYpt38x96za4ffaLVtem%2FJ4RaPewPGotgB6M5%2BeYNlbaqOEH3Iktbno5W3Pc6Y4U0KkHOOf6o%2BoBjg6BDo95YOf9QTEvy2MU%2BQTq2DsqWkDxH4B5HGZwAFm2tT2d6ujEcdb4SAomsUvzrGbpWHvCDktEt49QXZU%2BfzWOiuYggRksQrvPmX0UlHd88u%2FZdt7uTmP23X75KafasvZMflRkcmNNmuA3%2F9H%2BKI0EALG478tREDvujMaHo1p98MbtOLXq1LrLvbGUFBksdPcXk0%2BgfqC4Zut9Sy4peQf56Yn6bS4pGjMIcrHySFJDtw9q5wUYTxQjrJ28dGqB4rmH3HAGbBPYz0AUyKk98AV5LDmdFs3rODMJwxuXzCyxEbz%2FebWbx%2FhrG%2FfnwJGnq1TMLfkw78GOqUBjLw6UK8UgLsRAro5SKMGP4%2BGa96zQS7RxKJTfWbidoCRwo2AQcR%2BZ9Xh7ujYGfKhF3XwMOdWpxI0%2FmO29u8ESHv3K6ZPw0ypi60r%2BhZFJEtXVVhiis4eusHNleeFfyWxORhBG1NzKlP%2FopKflSlpX8ziCNkabSlujDr7wQWR4Oru9%2BRruVb7KBVK2egc75tHSoDojEHo4tOJrXX1PL4dDzQQQsme&X-Amz-Signature=e5b1ce29451a12c132a28e76792d3509660b06ac1a08fe0390aa9741c5ea5e17&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644NBRDHB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKMp9s17xDN%2B%2Bs%2Fshg4HpeGpVFonkGhNvMAQAXABtGOQIgRtoaXjRuicfioBNGI96FoImKU02cOW6SINmLWDovkXEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAgG2cEyb8cH4JYj%2BSrcA%2FyerdxRdHPERXaWymGw%2BwZXgm16gBXCK20hCYbaQIDEw3fRwfvyaY7vuWmcPRvuhRO6B0JaV6VviYm8O1YbZBw%2Fc4h9BjRlQTJLcBt9gvEFYdZXg0drdM9BoiwA1X4M4NUtykehEtO4adTVy6B6dg%2FfyvLeA8iIbx%2FkF8%2B4%2FiBCkPCfFjEH6fmC48suJ%2Fc%2Fczcbj8aJ1vdckPL%2BXdW8EbDCGZVags3bozVrYh3z%2BCHgzrYpt38x96za4ffaLVtem%2FJ4RaPewPGotgB6M5%2BeYNlbaqOEH3Iktbno5W3Pc6Y4U0KkHOOf6o%2BoBjg6BDo95YOf9QTEvy2MU%2BQTq2DsqWkDxH4B5HGZwAFm2tT2d6ujEcdb4SAomsUvzrGbpWHvCDktEt49QXZU%2BfzWOiuYggRksQrvPmX0UlHd88u%2FZdt7uTmP23X75KafasvZMflRkcmNNmuA3%2F9H%2BKI0EALG478tREDvujMaHo1p98MbtOLXq1LrLvbGUFBksdPcXk0%2BgfqC4Zut9Sy4peQf56Yn6bS4pGjMIcrHySFJDtw9q5wUYTxQjrJ28dGqB4rmH3HAGbBPYz0AUyKk98AV5LDmdFs3rODMJwxuXzCyxEbz%2FebWbx%2FhrG%2FfnwJGnq1TMLfkw78GOqUBjLw6UK8UgLsRAro5SKMGP4%2BGa96zQS7RxKJTfWbidoCRwo2AQcR%2BZ9Xh7ujYGfKhF3XwMOdWpxI0%2FmO29u8ESHv3K6ZPw0ypi60r%2BhZFJEtXVVhiis4eusHNleeFfyWxORhBG1NzKlP%2FopKflSlpX8ziCNkabSlujDr7wQWR4Oru9%2BRruVb7KBVK2egc75tHSoDojEHo4tOJrXX1PL4dDzQQQsme&X-Amz-Signature=3d642602c07e07e862de45a701b77c8f84423b072cb7284ede731344cff59278&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644NBRDHB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKMp9s17xDN%2B%2Bs%2Fshg4HpeGpVFonkGhNvMAQAXABtGOQIgRtoaXjRuicfioBNGI96FoImKU02cOW6SINmLWDovkXEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAgG2cEyb8cH4JYj%2BSrcA%2FyerdxRdHPERXaWymGw%2BwZXgm16gBXCK20hCYbaQIDEw3fRwfvyaY7vuWmcPRvuhRO6B0JaV6VviYm8O1YbZBw%2Fc4h9BjRlQTJLcBt9gvEFYdZXg0drdM9BoiwA1X4M4NUtykehEtO4adTVy6B6dg%2FfyvLeA8iIbx%2FkF8%2B4%2FiBCkPCfFjEH6fmC48suJ%2Fc%2Fczcbj8aJ1vdckPL%2BXdW8EbDCGZVags3bozVrYh3z%2BCHgzrYpt38x96za4ffaLVtem%2FJ4RaPewPGotgB6M5%2BeYNlbaqOEH3Iktbno5W3Pc6Y4U0KkHOOf6o%2BoBjg6BDo95YOf9QTEvy2MU%2BQTq2DsqWkDxH4B5HGZwAFm2tT2d6ujEcdb4SAomsUvzrGbpWHvCDktEt49QXZU%2BfzWOiuYggRksQrvPmX0UlHd88u%2FZdt7uTmP23X75KafasvZMflRkcmNNmuA3%2F9H%2BKI0EALG478tREDvujMaHo1p98MbtOLXq1LrLvbGUFBksdPcXk0%2BgfqC4Zut9Sy4peQf56Yn6bS4pGjMIcrHySFJDtw9q5wUYTxQjrJ28dGqB4rmH3HAGbBPYz0AUyKk98AV5LDmdFs3rODMJwxuXzCyxEbz%2FebWbx%2FhrG%2FfnwJGnq1TMLfkw78GOqUBjLw6UK8UgLsRAro5SKMGP4%2BGa96zQS7RxKJTfWbidoCRwo2AQcR%2BZ9Xh7ujYGfKhF3XwMOdWpxI0%2FmO29u8ESHv3K6ZPw0ypi60r%2BhZFJEtXVVhiis4eusHNleeFfyWxORhBG1NzKlP%2FopKflSlpX8ziCNkabSlujDr7wQWR4Oru9%2BRruVb7KBVK2egc75tHSoDojEHo4tOJrXX1PL4dDzQQQsme&X-Amz-Signature=688051f891a145d18dfec54234ef74ef7bedb230842cfaa717eee44bb93710fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644NBRDHB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKMp9s17xDN%2B%2Bs%2Fshg4HpeGpVFonkGhNvMAQAXABtGOQIgRtoaXjRuicfioBNGI96FoImKU02cOW6SINmLWDovkXEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAgG2cEyb8cH4JYj%2BSrcA%2FyerdxRdHPERXaWymGw%2BwZXgm16gBXCK20hCYbaQIDEw3fRwfvyaY7vuWmcPRvuhRO6B0JaV6VviYm8O1YbZBw%2Fc4h9BjRlQTJLcBt9gvEFYdZXg0drdM9BoiwA1X4M4NUtykehEtO4adTVy6B6dg%2FfyvLeA8iIbx%2FkF8%2B4%2FiBCkPCfFjEH6fmC48suJ%2Fc%2Fczcbj8aJ1vdckPL%2BXdW8EbDCGZVags3bozVrYh3z%2BCHgzrYpt38x96za4ffaLVtem%2FJ4RaPewPGotgB6M5%2BeYNlbaqOEH3Iktbno5W3Pc6Y4U0KkHOOf6o%2BoBjg6BDo95YOf9QTEvy2MU%2BQTq2DsqWkDxH4B5HGZwAFm2tT2d6ujEcdb4SAomsUvzrGbpWHvCDktEt49QXZU%2BfzWOiuYggRksQrvPmX0UlHd88u%2FZdt7uTmP23X75KafasvZMflRkcmNNmuA3%2F9H%2BKI0EALG478tREDvujMaHo1p98MbtOLXq1LrLvbGUFBksdPcXk0%2BgfqC4Zut9Sy4peQf56Yn6bS4pGjMIcrHySFJDtw9q5wUYTxQjrJ28dGqB4rmH3HAGbBPYz0AUyKk98AV5LDmdFs3rODMJwxuXzCyxEbz%2FebWbx%2FhrG%2FfnwJGnq1TMLfkw78GOqUBjLw6UK8UgLsRAro5SKMGP4%2BGa96zQS7RxKJTfWbidoCRwo2AQcR%2BZ9Xh7ujYGfKhF3XwMOdWpxI0%2FmO29u8ESHv3K6ZPw0ypi60r%2BhZFJEtXVVhiis4eusHNleeFfyWxORhBG1NzKlP%2FopKflSlpX8ziCNkabSlujDr7wQWR4Oru9%2BRruVb7KBVK2egc75tHSoDojEHo4tOJrXX1PL4dDzQQQsme&X-Amz-Signature=b7b4fd2d999e2fa0f65180695c2922793abeb74e71d9020113494f24ea601fc9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644NBRDHB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKMp9s17xDN%2B%2Bs%2Fshg4HpeGpVFonkGhNvMAQAXABtGOQIgRtoaXjRuicfioBNGI96FoImKU02cOW6SINmLWDovkXEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAgG2cEyb8cH4JYj%2BSrcA%2FyerdxRdHPERXaWymGw%2BwZXgm16gBXCK20hCYbaQIDEw3fRwfvyaY7vuWmcPRvuhRO6B0JaV6VviYm8O1YbZBw%2Fc4h9BjRlQTJLcBt9gvEFYdZXg0drdM9BoiwA1X4M4NUtykehEtO4adTVy6B6dg%2FfyvLeA8iIbx%2FkF8%2B4%2FiBCkPCfFjEH6fmC48suJ%2Fc%2Fczcbj8aJ1vdckPL%2BXdW8EbDCGZVags3bozVrYh3z%2BCHgzrYpt38x96za4ffaLVtem%2FJ4RaPewPGotgB6M5%2BeYNlbaqOEH3Iktbno5W3Pc6Y4U0KkHOOf6o%2BoBjg6BDo95YOf9QTEvy2MU%2BQTq2DsqWkDxH4B5HGZwAFm2tT2d6ujEcdb4SAomsUvzrGbpWHvCDktEt49QXZU%2BfzWOiuYggRksQrvPmX0UlHd88u%2FZdt7uTmP23X75KafasvZMflRkcmNNmuA3%2F9H%2BKI0EALG478tREDvujMaHo1p98MbtOLXq1LrLvbGUFBksdPcXk0%2BgfqC4Zut9Sy4peQf56Yn6bS4pGjMIcrHySFJDtw9q5wUYTxQjrJ28dGqB4rmH3HAGbBPYz0AUyKk98AV5LDmdFs3rODMJwxuXzCyxEbz%2FebWbx%2FhrG%2FfnwJGnq1TMLfkw78GOqUBjLw6UK8UgLsRAro5SKMGP4%2BGa96zQS7RxKJTfWbidoCRwo2AQcR%2BZ9Xh7ujYGfKhF3XwMOdWpxI0%2FmO29u8ESHv3K6ZPw0ypi60r%2BhZFJEtXVVhiis4eusHNleeFfyWxORhBG1NzKlP%2FopKflSlpX8ziCNkabSlujDr7wQWR4Oru9%2BRruVb7KBVK2egc75tHSoDojEHo4tOJrXX1PL4dDzQQQsme&X-Amz-Signature=fbb4f37ef77c63ec4d511b58c1aa9848b88255d8bf9118d6f299a8f6c23e9265&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
