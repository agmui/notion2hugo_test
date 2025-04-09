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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24RIPCO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDXBlB7NvkUL5ObDUDua0vWPvNRaB9QnqQRMBrAUfk%2BOAiBap89gTc2czVqcsBoB2hVtjsoMTDDWCqLPAUfAzIJlKiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd3e7aqrXHYMyeMhNKtwD4JBgVo6LO8QhakTUSv011XNw%2FgK8zaM%2FU%2BurDcldGJnq6IZUKDm2NMsZWwiAKjoA6Mfy6xV1DS0YQoZM2jPn9%2BP5a4OZl9mh8NyA7i66msydAPXwibaRJuTyEIcBiI%2FiEuTceWH4Ig0g7%2FtogmUxMN2h4aNidbOwSKMX%2B5BL5xWiKipKbrkmNFe3tQ2bQdVTcYzU1a4i3egMx9sWkzZemDfQt1LLbgq8raw0FYAGGZNOJz2KC6Ho%2F0SZjmQof%2FkR6du2havPjGd26ZBSNJQJ2GhV4Ggn0Tdj8sK6s9NwDY%2FN8M0YQK53KxzkXyvPVl11PxWO4ZeuVuH6wytVtBh7x1gCtixtHLqEc48rruw7lmiAZ6q2W4lFKiritcKU7YWb%2Farfm9kVlhP3xQOd0h4FNJ8h3ofdOEgE1PMdUhh1dk%2FM1xl59gjfvjeg%2FerlqBNLpcG5BR95SJCpZHuRjRhGz70BALT7084y1EjNnrEH7bjjyMHwr6v79arvc1zJ%2BI%2FQRbAsx4%2BZDApeRVeP%2Fz6ev1S%2FWIEfHu29Ndd4vq0quNU6vl9uRk8vqW7g4Wwf2RdIgLSLpW7Jl3uvX9a0iDuQZavvQmibP8a2T6lnmB9a6ZzOYeEVB619FhPiUlgwhqPXvwY6pgEz27A52W%2Fc4JP%2Fy%2FtU%2BrIVp95biXaUBC5NA7xA4117gd4zl5MJ%2FzkJIVryzeXWtX3uAtfpoNJCXseHk%2FkRZUF65zxCOBmGsTru2wZNj7ZA1fDBgrXB1nllels9vJuuGpfs1Joxkpf%2FfqTA4l5AO5EqoJ3IdEj8rnKRYdvM6XN4w0DGUkn2LNCqZ3GzDmHn0H%2F2DBL24eW31lRz6tuBIAl7gR4t9BlS&X-Amz-Signature=a12c4ce6662d9a0f890e37077b312b3673806109d0e8efbca52803d56e546126&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24RIPCO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDXBlB7NvkUL5ObDUDua0vWPvNRaB9QnqQRMBrAUfk%2BOAiBap89gTc2czVqcsBoB2hVtjsoMTDDWCqLPAUfAzIJlKiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd3e7aqrXHYMyeMhNKtwD4JBgVo6LO8QhakTUSv011XNw%2FgK8zaM%2FU%2BurDcldGJnq6IZUKDm2NMsZWwiAKjoA6Mfy6xV1DS0YQoZM2jPn9%2BP5a4OZl9mh8NyA7i66msydAPXwibaRJuTyEIcBiI%2FiEuTceWH4Ig0g7%2FtogmUxMN2h4aNidbOwSKMX%2B5BL5xWiKipKbrkmNFe3tQ2bQdVTcYzU1a4i3egMx9sWkzZemDfQt1LLbgq8raw0FYAGGZNOJz2KC6Ho%2F0SZjmQof%2FkR6du2havPjGd26ZBSNJQJ2GhV4Ggn0Tdj8sK6s9NwDY%2FN8M0YQK53KxzkXyvPVl11PxWO4ZeuVuH6wytVtBh7x1gCtixtHLqEc48rruw7lmiAZ6q2W4lFKiritcKU7YWb%2Farfm9kVlhP3xQOd0h4FNJ8h3ofdOEgE1PMdUhh1dk%2FM1xl59gjfvjeg%2FerlqBNLpcG5BR95SJCpZHuRjRhGz70BALT7084y1EjNnrEH7bjjyMHwr6v79arvc1zJ%2BI%2FQRbAsx4%2BZDApeRVeP%2Fz6ev1S%2FWIEfHu29Ndd4vq0quNU6vl9uRk8vqW7g4Wwf2RdIgLSLpW7Jl3uvX9a0iDuQZavvQmibP8a2T6lnmB9a6ZzOYeEVB619FhPiUlgwhqPXvwY6pgEz27A52W%2Fc4JP%2Fy%2FtU%2BrIVp95biXaUBC5NA7xA4117gd4zl5MJ%2FzkJIVryzeXWtX3uAtfpoNJCXseHk%2FkRZUF65zxCOBmGsTru2wZNj7ZA1fDBgrXB1nllels9vJuuGpfs1Joxkpf%2FfqTA4l5AO5EqoJ3IdEj8rnKRYdvM6XN4w0DGUkn2LNCqZ3GzDmHn0H%2F2DBL24eW31lRz6tuBIAl7gR4t9BlS&X-Amz-Signature=954cb1378f25049d5c5210a1f167c841cc5454c83b19301e43ec9dbf2e60417b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24RIPCO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDXBlB7NvkUL5ObDUDua0vWPvNRaB9QnqQRMBrAUfk%2BOAiBap89gTc2czVqcsBoB2hVtjsoMTDDWCqLPAUfAzIJlKiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd3e7aqrXHYMyeMhNKtwD4JBgVo6LO8QhakTUSv011XNw%2FgK8zaM%2FU%2BurDcldGJnq6IZUKDm2NMsZWwiAKjoA6Mfy6xV1DS0YQoZM2jPn9%2BP5a4OZl9mh8NyA7i66msydAPXwibaRJuTyEIcBiI%2FiEuTceWH4Ig0g7%2FtogmUxMN2h4aNidbOwSKMX%2B5BL5xWiKipKbrkmNFe3tQ2bQdVTcYzU1a4i3egMx9sWkzZemDfQt1LLbgq8raw0FYAGGZNOJz2KC6Ho%2F0SZjmQof%2FkR6du2havPjGd26ZBSNJQJ2GhV4Ggn0Tdj8sK6s9NwDY%2FN8M0YQK53KxzkXyvPVl11PxWO4ZeuVuH6wytVtBh7x1gCtixtHLqEc48rruw7lmiAZ6q2W4lFKiritcKU7YWb%2Farfm9kVlhP3xQOd0h4FNJ8h3ofdOEgE1PMdUhh1dk%2FM1xl59gjfvjeg%2FerlqBNLpcG5BR95SJCpZHuRjRhGz70BALT7084y1EjNnrEH7bjjyMHwr6v79arvc1zJ%2BI%2FQRbAsx4%2BZDApeRVeP%2Fz6ev1S%2FWIEfHu29Ndd4vq0quNU6vl9uRk8vqW7g4Wwf2RdIgLSLpW7Jl3uvX9a0iDuQZavvQmibP8a2T6lnmB9a6ZzOYeEVB619FhPiUlgwhqPXvwY6pgEz27A52W%2Fc4JP%2Fy%2FtU%2BrIVp95biXaUBC5NA7xA4117gd4zl5MJ%2FzkJIVryzeXWtX3uAtfpoNJCXseHk%2FkRZUF65zxCOBmGsTru2wZNj7ZA1fDBgrXB1nllels9vJuuGpfs1Joxkpf%2FfqTA4l5AO5EqoJ3IdEj8rnKRYdvM6XN4w0DGUkn2LNCqZ3GzDmHn0H%2F2DBL24eW31lRz6tuBIAl7gR4t9BlS&X-Amz-Signature=00828444853ab4f996f6ef116609f6be040573864d97ebce3524856d3b635f09&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24RIPCO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDXBlB7NvkUL5ObDUDua0vWPvNRaB9QnqQRMBrAUfk%2BOAiBap89gTc2czVqcsBoB2hVtjsoMTDDWCqLPAUfAzIJlKiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd3e7aqrXHYMyeMhNKtwD4JBgVo6LO8QhakTUSv011XNw%2FgK8zaM%2FU%2BurDcldGJnq6IZUKDm2NMsZWwiAKjoA6Mfy6xV1DS0YQoZM2jPn9%2BP5a4OZl9mh8NyA7i66msydAPXwibaRJuTyEIcBiI%2FiEuTceWH4Ig0g7%2FtogmUxMN2h4aNidbOwSKMX%2B5BL5xWiKipKbrkmNFe3tQ2bQdVTcYzU1a4i3egMx9sWkzZemDfQt1LLbgq8raw0FYAGGZNOJz2KC6Ho%2F0SZjmQof%2FkR6du2havPjGd26ZBSNJQJ2GhV4Ggn0Tdj8sK6s9NwDY%2FN8M0YQK53KxzkXyvPVl11PxWO4ZeuVuH6wytVtBh7x1gCtixtHLqEc48rruw7lmiAZ6q2W4lFKiritcKU7YWb%2Farfm9kVlhP3xQOd0h4FNJ8h3ofdOEgE1PMdUhh1dk%2FM1xl59gjfvjeg%2FerlqBNLpcG5BR95SJCpZHuRjRhGz70BALT7084y1EjNnrEH7bjjyMHwr6v79arvc1zJ%2BI%2FQRbAsx4%2BZDApeRVeP%2Fz6ev1S%2FWIEfHu29Ndd4vq0quNU6vl9uRk8vqW7g4Wwf2RdIgLSLpW7Jl3uvX9a0iDuQZavvQmibP8a2T6lnmB9a6ZzOYeEVB619FhPiUlgwhqPXvwY6pgEz27A52W%2Fc4JP%2Fy%2FtU%2BrIVp95biXaUBC5NA7xA4117gd4zl5MJ%2FzkJIVryzeXWtX3uAtfpoNJCXseHk%2FkRZUF65zxCOBmGsTru2wZNj7ZA1fDBgrXB1nllels9vJuuGpfs1Joxkpf%2FfqTA4l5AO5EqoJ3IdEj8rnKRYdvM6XN4w0DGUkn2LNCqZ3GzDmHn0H%2F2DBL24eW31lRz6tuBIAl7gR4t9BlS&X-Amz-Signature=171102425b03e2a75ee2feae2d84cf0d3b3e5b8f5fc7bbd940faf93163e0925e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24RIPCO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDXBlB7NvkUL5ObDUDua0vWPvNRaB9QnqQRMBrAUfk%2BOAiBap89gTc2czVqcsBoB2hVtjsoMTDDWCqLPAUfAzIJlKiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd3e7aqrXHYMyeMhNKtwD4JBgVo6LO8QhakTUSv011XNw%2FgK8zaM%2FU%2BurDcldGJnq6IZUKDm2NMsZWwiAKjoA6Mfy6xV1DS0YQoZM2jPn9%2BP5a4OZl9mh8NyA7i66msydAPXwibaRJuTyEIcBiI%2FiEuTceWH4Ig0g7%2FtogmUxMN2h4aNidbOwSKMX%2B5BL5xWiKipKbrkmNFe3tQ2bQdVTcYzU1a4i3egMx9sWkzZemDfQt1LLbgq8raw0FYAGGZNOJz2KC6Ho%2F0SZjmQof%2FkR6du2havPjGd26ZBSNJQJ2GhV4Ggn0Tdj8sK6s9NwDY%2FN8M0YQK53KxzkXyvPVl11PxWO4ZeuVuH6wytVtBh7x1gCtixtHLqEc48rruw7lmiAZ6q2W4lFKiritcKU7YWb%2Farfm9kVlhP3xQOd0h4FNJ8h3ofdOEgE1PMdUhh1dk%2FM1xl59gjfvjeg%2FerlqBNLpcG5BR95SJCpZHuRjRhGz70BALT7084y1EjNnrEH7bjjyMHwr6v79arvc1zJ%2BI%2FQRbAsx4%2BZDApeRVeP%2Fz6ev1S%2FWIEfHu29Ndd4vq0quNU6vl9uRk8vqW7g4Wwf2RdIgLSLpW7Jl3uvX9a0iDuQZavvQmibP8a2T6lnmB9a6ZzOYeEVB619FhPiUlgwhqPXvwY6pgEz27A52W%2Fc4JP%2Fy%2FtU%2BrIVp95biXaUBC5NA7xA4117gd4zl5MJ%2FzkJIVryzeXWtX3uAtfpoNJCXseHk%2FkRZUF65zxCOBmGsTru2wZNj7ZA1fDBgrXB1nllels9vJuuGpfs1Joxkpf%2FfqTA4l5AO5EqoJ3IdEj8rnKRYdvM6XN4w0DGUkn2LNCqZ3GzDmHn0H%2F2DBL24eW31lRz6tuBIAl7gR4t9BlS&X-Amz-Signature=3ccdead25ebf27741d014c1e79879785b1b9fa221670182a7d3b2eafbb3882c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24RIPCO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDXBlB7NvkUL5ObDUDua0vWPvNRaB9QnqQRMBrAUfk%2BOAiBap89gTc2czVqcsBoB2hVtjsoMTDDWCqLPAUfAzIJlKiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd3e7aqrXHYMyeMhNKtwD4JBgVo6LO8QhakTUSv011XNw%2FgK8zaM%2FU%2BurDcldGJnq6IZUKDm2NMsZWwiAKjoA6Mfy6xV1DS0YQoZM2jPn9%2BP5a4OZl9mh8NyA7i66msydAPXwibaRJuTyEIcBiI%2FiEuTceWH4Ig0g7%2FtogmUxMN2h4aNidbOwSKMX%2B5BL5xWiKipKbrkmNFe3tQ2bQdVTcYzU1a4i3egMx9sWkzZemDfQt1LLbgq8raw0FYAGGZNOJz2KC6Ho%2F0SZjmQof%2FkR6du2havPjGd26ZBSNJQJ2GhV4Ggn0Tdj8sK6s9NwDY%2FN8M0YQK53KxzkXyvPVl11PxWO4ZeuVuH6wytVtBh7x1gCtixtHLqEc48rruw7lmiAZ6q2W4lFKiritcKU7YWb%2Farfm9kVlhP3xQOd0h4FNJ8h3ofdOEgE1PMdUhh1dk%2FM1xl59gjfvjeg%2FerlqBNLpcG5BR95SJCpZHuRjRhGz70BALT7084y1EjNnrEH7bjjyMHwr6v79arvc1zJ%2BI%2FQRbAsx4%2BZDApeRVeP%2Fz6ev1S%2FWIEfHu29Ndd4vq0quNU6vl9uRk8vqW7g4Wwf2RdIgLSLpW7Jl3uvX9a0iDuQZavvQmibP8a2T6lnmB9a6ZzOYeEVB619FhPiUlgwhqPXvwY6pgEz27A52W%2Fc4JP%2Fy%2FtU%2BrIVp95biXaUBC5NA7xA4117gd4zl5MJ%2FzkJIVryzeXWtX3uAtfpoNJCXseHk%2FkRZUF65zxCOBmGsTru2wZNj7ZA1fDBgrXB1nllels9vJuuGpfs1Joxkpf%2FfqTA4l5AO5EqoJ3IdEj8rnKRYdvM6XN4w0DGUkn2LNCqZ3GzDmHn0H%2F2DBL24eW31lRz6tuBIAl7gR4t9BlS&X-Amz-Signature=e931e66ebc4b4344d4070b31286b2ce2e43ce00c044b34a7ea28e4eeccfc9d50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24RIPCO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDXBlB7NvkUL5ObDUDua0vWPvNRaB9QnqQRMBrAUfk%2BOAiBap89gTc2czVqcsBoB2hVtjsoMTDDWCqLPAUfAzIJlKiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd3e7aqrXHYMyeMhNKtwD4JBgVo6LO8QhakTUSv011XNw%2FgK8zaM%2FU%2BurDcldGJnq6IZUKDm2NMsZWwiAKjoA6Mfy6xV1DS0YQoZM2jPn9%2BP5a4OZl9mh8NyA7i66msydAPXwibaRJuTyEIcBiI%2FiEuTceWH4Ig0g7%2FtogmUxMN2h4aNidbOwSKMX%2B5BL5xWiKipKbrkmNFe3tQ2bQdVTcYzU1a4i3egMx9sWkzZemDfQt1LLbgq8raw0FYAGGZNOJz2KC6Ho%2F0SZjmQof%2FkR6du2havPjGd26ZBSNJQJ2GhV4Ggn0Tdj8sK6s9NwDY%2FN8M0YQK53KxzkXyvPVl11PxWO4ZeuVuH6wytVtBh7x1gCtixtHLqEc48rruw7lmiAZ6q2W4lFKiritcKU7YWb%2Farfm9kVlhP3xQOd0h4FNJ8h3ofdOEgE1PMdUhh1dk%2FM1xl59gjfvjeg%2FerlqBNLpcG5BR95SJCpZHuRjRhGz70BALT7084y1EjNnrEH7bjjyMHwr6v79arvc1zJ%2BI%2FQRbAsx4%2BZDApeRVeP%2Fz6ev1S%2FWIEfHu29Ndd4vq0quNU6vl9uRk8vqW7g4Wwf2RdIgLSLpW7Jl3uvX9a0iDuQZavvQmibP8a2T6lnmB9a6ZzOYeEVB619FhPiUlgwhqPXvwY6pgEz27A52W%2Fc4JP%2Fy%2FtU%2BrIVp95biXaUBC5NA7xA4117gd4zl5MJ%2FzkJIVryzeXWtX3uAtfpoNJCXseHk%2FkRZUF65zxCOBmGsTru2wZNj7ZA1fDBgrXB1nllels9vJuuGpfs1Joxkpf%2FfqTA4l5AO5EqoJ3IdEj8rnKRYdvM6XN4w0DGUkn2LNCqZ3GzDmHn0H%2F2DBL24eW31lRz6tuBIAl7gR4t9BlS&X-Amz-Signature=c7f60ba9fc374c370e370f2bd4ff8a68d9dbad75c8213d665e4c5fdce38c4d01&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24RIPCO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDXBlB7NvkUL5ObDUDua0vWPvNRaB9QnqQRMBrAUfk%2BOAiBap89gTc2czVqcsBoB2hVtjsoMTDDWCqLPAUfAzIJlKiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd3e7aqrXHYMyeMhNKtwD4JBgVo6LO8QhakTUSv011XNw%2FgK8zaM%2FU%2BurDcldGJnq6IZUKDm2NMsZWwiAKjoA6Mfy6xV1DS0YQoZM2jPn9%2BP5a4OZl9mh8NyA7i66msydAPXwibaRJuTyEIcBiI%2FiEuTceWH4Ig0g7%2FtogmUxMN2h4aNidbOwSKMX%2B5BL5xWiKipKbrkmNFe3tQ2bQdVTcYzU1a4i3egMx9sWkzZemDfQt1LLbgq8raw0FYAGGZNOJz2KC6Ho%2F0SZjmQof%2FkR6du2havPjGd26ZBSNJQJ2GhV4Ggn0Tdj8sK6s9NwDY%2FN8M0YQK53KxzkXyvPVl11PxWO4ZeuVuH6wytVtBh7x1gCtixtHLqEc48rruw7lmiAZ6q2W4lFKiritcKU7YWb%2Farfm9kVlhP3xQOd0h4FNJ8h3ofdOEgE1PMdUhh1dk%2FM1xl59gjfvjeg%2FerlqBNLpcG5BR95SJCpZHuRjRhGz70BALT7084y1EjNnrEH7bjjyMHwr6v79arvc1zJ%2BI%2FQRbAsx4%2BZDApeRVeP%2Fz6ev1S%2FWIEfHu29Ndd4vq0quNU6vl9uRk8vqW7g4Wwf2RdIgLSLpW7Jl3uvX9a0iDuQZavvQmibP8a2T6lnmB9a6ZzOYeEVB619FhPiUlgwhqPXvwY6pgEz27A52W%2Fc4JP%2Fy%2FtU%2BrIVp95biXaUBC5NA7xA4117gd4zl5MJ%2FzkJIVryzeXWtX3uAtfpoNJCXseHk%2FkRZUF65zxCOBmGsTru2wZNj7ZA1fDBgrXB1nllels9vJuuGpfs1Joxkpf%2FfqTA4l5AO5EqoJ3IdEj8rnKRYdvM6XN4w0DGUkn2LNCqZ3GzDmHn0H%2F2DBL24eW31lRz6tuBIAl7gR4t9BlS&X-Amz-Signature=17fcd7d1c175d1625a5ee30b2546dae5d09c7faf898b6ad2daa19a172ca5d627&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
