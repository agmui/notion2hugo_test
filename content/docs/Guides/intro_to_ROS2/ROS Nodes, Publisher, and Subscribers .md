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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQT5FBUZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu88HtHkSezoClr0NTCJfvWCbrnzC0yJftlOO21fnt6QIhAIhQ0lfPBruvGeOU6mPlaKr246N8Hz%2FQuXwmPh8qVISTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDuf%2BzzySwaSB3eD4q3APaBZCA%2FE1X3M1xHcOhuVyUvJKyk08KfI2k%2FH1OCTWC96g6tHsSFwET%2BijAVyhhUTdjNKqKnqjPr65fZZ1vpOyQ4%2FZkkAy1h4yR7z8r15hGtn1O4URa%2BiyKYufWaKkUx0h2oPJn9%2F8NA8o3RvnEGHDgySbrqZhi4pRxTpfqJV7tzAVVAgLUOvWgvrVNK0TiUua6KUGbhe7x8ms2iZYhUGUDmlxibPSwYjsWo1Mt%2FZAaiy1iM4NsASteKamCC5bEd3FhgwL2feFv1R%2FgAOFhToG8AlcN2I4YWHvtgL0EKeUr480n3pQU4oxtRROmxKr7s4U14sQraXQdaV65u7AZ9fpj%2BjbV3iWw%2FhQzM0C5fYYXkM7LoYuD%2BBLmE5AP80UfhfG90u5sK%2FD01iMLThFMhed8TXWBGtjom%2FXnvCpbbIBmGCQEHprWxek1jR3%2BEaOcz59jf6fkpy8uQRbZk9JtSSkdCJyCBJ81%2FlzQdr69WSYAJ14KaxpluBXYqmyEZWgWgE%2FI2iR%2BnErxog5V%2FyDDvgV9TTEC4p2Mbu6mE8NW9%2FPUJAg9rNicaiHlflwU0uhInuAc%2FyWjS3reORgjnWr2h6wsekLmgYgPMoIdHJ1UHQ1yVhjaSAvLyKyUnEevsjDknK3EBjqkAQmaMN0p6uY2MEOvEM8JHiGsV%2FufWo6gJB20HiXP2M%2FmfJO%2Fk9mVcuciXbGVT9gyLP34I1e2gGQfygTnAYlA4OuUJflgn7uhrhe71MuP19E6HFA4didTjIh7PgU6mffoiC6zmemtUuHpG4nvcfox6nxbxQ%2BF9bEmS2KaTzDVRobDneBd7UoZDsLONpRyY%2Br9xbZsxCJ3VY8WcDT4ap%2Bs4GyGVA6z&X-Amz-Signature=1ed41d551954650f1c6fd50dcaa113a4b0d09df64141cfcd62c5de8df5fafc1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQT5FBUZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu88HtHkSezoClr0NTCJfvWCbrnzC0yJftlOO21fnt6QIhAIhQ0lfPBruvGeOU6mPlaKr246N8Hz%2FQuXwmPh8qVISTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDuf%2BzzySwaSB3eD4q3APaBZCA%2FE1X3M1xHcOhuVyUvJKyk08KfI2k%2FH1OCTWC96g6tHsSFwET%2BijAVyhhUTdjNKqKnqjPr65fZZ1vpOyQ4%2FZkkAy1h4yR7z8r15hGtn1O4URa%2BiyKYufWaKkUx0h2oPJn9%2F8NA8o3RvnEGHDgySbrqZhi4pRxTpfqJV7tzAVVAgLUOvWgvrVNK0TiUua6KUGbhe7x8ms2iZYhUGUDmlxibPSwYjsWo1Mt%2FZAaiy1iM4NsASteKamCC5bEd3FhgwL2feFv1R%2FgAOFhToG8AlcN2I4YWHvtgL0EKeUr480n3pQU4oxtRROmxKr7s4U14sQraXQdaV65u7AZ9fpj%2BjbV3iWw%2FhQzM0C5fYYXkM7LoYuD%2BBLmE5AP80UfhfG90u5sK%2FD01iMLThFMhed8TXWBGtjom%2FXnvCpbbIBmGCQEHprWxek1jR3%2BEaOcz59jf6fkpy8uQRbZk9JtSSkdCJyCBJ81%2FlzQdr69WSYAJ14KaxpluBXYqmyEZWgWgE%2FI2iR%2BnErxog5V%2FyDDvgV9TTEC4p2Mbu6mE8NW9%2FPUJAg9rNicaiHlflwU0uhInuAc%2FyWjS3reORgjnWr2h6wsekLmgYgPMoIdHJ1UHQ1yVhjaSAvLyKyUnEevsjDknK3EBjqkAQmaMN0p6uY2MEOvEM8JHiGsV%2FufWo6gJB20HiXP2M%2FmfJO%2Fk9mVcuciXbGVT9gyLP34I1e2gGQfygTnAYlA4OuUJflgn7uhrhe71MuP19E6HFA4didTjIh7PgU6mffoiC6zmemtUuHpG4nvcfox6nxbxQ%2BF9bEmS2KaTzDVRobDneBd7UoZDsLONpRyY%2Br9xbZsxCJ3VY8WcDT4ap%2Bs4GyGVA6z&X-Amz-Signature=60c5495149189231423b2b03c3ead61cb844c10c54586611c96a909b6176065e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQT5FBUZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu88HtHkSezoClr0NTCJfvWCbrnzC0yJftlOO21fnt6QIhAIhQ0lfPBruvGeOU6mPlaKr246N8Hz%2FQuXwmPh8qVISTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDuf%2BzzySwaSB3eD4q3APaBZCA%2FE1X3M1xHcOhuVyUvJKyk08KfI2k%2FH1OCTWC96g6tHsSFwET%2BijAVyhhUTdjNKqKnqjPr65fZZ1vpOyQ4%2FZkkAy1h4yR7z8r15hGtn1O4URa%2BiyKYufWaKkUx0h2oPJn9%2F8NA8o3RvnEGHDgySbrqZhi4pRxTpfqJV7tzAVVAgLUOvWgvrVNK0TiUua6KUGbhe7x8ms2iZYhUGUDmlxibPSwYjsWo1Mt%2FZAaiy1iM4NsASteKamCC5bEd3FhgwL2feFv1R%2FgAOFhToG8AlcN2I4YWHvtgL0EKeUr480n3pQU4oxtRROmxKr7s4U14sQraXQdaV65u7AZ9fpj%2BjbV3iWw%2FhQzM0C5fYYXkM7LoYuD%2BBLmE5AP80UfhfG90u5sK%2FD01iMLThFMhed8TXWBGtjom%2FXnvCpbbIBmGCQEHprWxek1jR3%2BEaOcz59jf6fkpy8uQRbZk9JtSSkdCJyCBJ81%2FlzQdr69WSYAJ14KaxpluBXYqmyEZWgWgE%2FI2iR%2BnErxog5V%2FyDDvgV9TTEC4p2Mbu6mE8NW9%2FPUJAg9rNicaiHlflwU0uhInuAc%2FyWjS3reORgjnWr2h6wsekLmgYgPMoIdHJ1UHQ1yVhjaSAvLyKyUnEevsjDknK3EBjqkAQmaMN0p6uY2MEOvEM8JHiGsV%2FufWo6gJB20HiXP2M%2FmfJO%2Fk9mVcuciXbGVT9gyLP34I1e2gGQfygTnAYlA4OuUJflgn7uhrhe71MuP19E6HFA4didTjIh7PgU6mffoiC6zmemtUuHpG4nvcfox6nxbxQ%2BF9bEmS2KaTzDVRobDneBd7UoZDsLONpRyY%2Br9xbZsxCJ3VY8WcDT4ap%2Bs4GyGVA6z&X-Amz-Signature=f4cacb7ea3b483f69e9f50e9afadada78206166b626b28e82f2776ec85d94882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQT5FBUZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu88HtHkSezoClr0NTCJfvWCbrnzC0yJftlOO21fnt6QIhAIhQ0lfPBruvGeOU6mPlaKr246N8Hz%2FQuXwmPh8qVISTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDuf%2BzzySwaSB3eD4q3APaBZCA%2FE1X3M1xHcOhuVyUvJKyk08KfI2k%2FH1OCTWC96g6tHsSFwET%2BijAVyhhUTdjNKqKnqjPr65fZZ1vpOyQ4%2FZkkAy1h4yR7z8r15hGtn1O4URa%2BiyKYufWaKkUx0h2oPJn9%2F8NA8o3RvnEGHDgySbrqZhi4pRxTpfqJV7tzAVVAgLUOvWgvrVNK0TiUua6KUGbhe7x8ms2iZYhUGUDmlxibPSwYjsWo1Mt%2FZAaiy1iM4NsASteKamCC5bEd3FhgwL2feFv1R%2FgAOFhToG8AlcN2I4YWHvtgL0EKeUr480n3pQU4oxtRROmxKr7s4U14sQraXQdaV65u7AZ9fpj%2BjbV3iWw%2FhQzM0C5fYYXkM7LoYuD%2BBLmE5AP80UfhfG90u5sK%2FD01iMLThFMhed8TXWBGtjom%2FXnvCpbbIBmGCQEHprWxek1jR3%2BEaOcz59jf6fkpy8uQRbZk9JtSSkdCJyCBJ81%2FlzQdr69WSYAJ14KaxpluBXYqmyEZWgWgE%2FI2iR%2BnErxog5V%2FyDDvgV9TTEC4p2Mbu6mE8NW9%2FPUJAg9rNicaiHlflwU0uhInuAc%2FyWjS3reORgjnWr2h6wsekLmgYgPMoIdHJ1UHQ1yVhjaSAvLyKyUnEevsjDknK3EBjqkAQmaMN0p6uY2MEOvEM8JHiGsV%2FufWo6gJB20HiXP2M%2FmfJO%2Fk9mVcuciXbGVT9gyLP34I1e2gGQfygTnAYlA4OuUJflgn7uhrhe71MuP19E6HFA4didTjIh7PgU6mffoiC6zmemtUuHpG4nvcfox6nxbxQ%2BF9bEmS2KaTzDVRobDneBd7UoZDsLONpRyY%2Br9xbZsxCJ3VY8WcDT4ap%2Bs4GyGVA6z&X-Amz-Signature=783f20218e6d670bf3d479064e8f93c8591f9e8369c7ff1d451075b9c248617e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQT5FBUZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu88HtHkSezoClr0NTCJfvWCbrnzC0yJftlOO21fnt6QIhAIhQ0lfPBruvGeOU6mPlaKr246N8Hz%2FQuXwmPh8qVISTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDuf%2BzzySwaSB3eD4q3APaBZCA%2FE1X3M1xHcOhuVyUvJKyk08KfI2k%2FH1OCTWC96g6tHsSFwET%2BijAVyhhUTdjNKqKnqjPr65fZZ1vpOyQ4%2FZkkAy1h4yR7z8r15hGtn1O4URa%2BiyKYufWaKkUx0h2oPJn9%2F8NA8o3RvnEGHDgySbrqZhi4pRxTpfqJV7tzAVVAgLUOvWgvrVNK0TiUua6KUGbhe7x8ms2iZYhUGUDmlxibPSwYjsWo1Mt%2FZAaiy1iM4NsASteKamCC5bEd3FhgwL2feFv1R%2FgAOFhToG8AlcN2I4YWHvtgL0EKeUr480n3pQU4oxtRROmxKr7s4U14sQraXQdaV65u7AZ9fpj%2BjbV3iWw%2FhQzM0C5fYYXkM7LoYuD%2BBLmE5AP80UfhfG90u5sK%2FD01iMLThFMhed8TXWBGtjom%2FXnvCpbbIBmGCQEHprWxek1jR3%2BEaOcz59jf6fkpy8uQRbZk9JtSSkdCJyCBJ81%2FlzQdr69WSYAJ14KaxpluBXYqmyEZWgWgE%2FI2iR%2BnErxog5V%2FyDDvgV9TTEC4p2Mbu6mE8NW9%2FPUJAg9rNicaiHlflwU0uhInuAc%2FyWjS3reORgjnWr2h6wsekLmgYgPMoIdHJ1UHQ1yVhjaSAvLyKyUnEevsjDknK3EBjqkAQmaMN0p6uY2MEOvEM8JHiGsV%2FufWo6gJB20HiXP2M%2FmfJO%2Fk9mVcuciXbGVT9gyLP34I1e2gGQfygTnAYlA4OuUJflgn7uhrhe71MuP19E6HFA4didTjIh7PgU6mffoiC6zmemtUuHpG4nvcfox6nxbxQ%2BF9bEmS2KaTzDVRobDneBd7UoZDsLONpRyY%2Br9xbZsxCJ3VY8WcDT4ap%2Bs4GyGVA6z&X-Amz-Signature=1e3933db94c060043ed1e3caf56589fc344a1c23b9f5630a6a6394f5fe3b3670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQT5FBUZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu88HtHkSezoClr0NTCJfvWCbrnzC0yJftlOO21fnt6QIhAIhQ0lfPBruvGeOU6mPlaKr246N8Hz%2FQuXwmPh8qVISTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDuf%2BzzySwaSB3eD4q3APaBZCA%2FE1X3M1xHcOhuVyUvJKyk08KfI2k%2FH1OCTWC96g6tHsSFwET%2BijAVyhhUTdjNKqKnqjPr65fZZ1vpOyQ4%2FZkkAy1h4yR7z8r15hGtn1O4URa%2BiyKYufWaKkUx0h2oPJn9%2F8NA8o3RvnEGHDgySbrqZhi4pRxTpfqJV7tzAVVAgLUOvWgvrVNK0TiUua6KUGbhe7x8ms2iZYhUGUDmlxibPSwYjsWo1Mt%2FZAaiy1iM4NsASteKamCC5bEd3FhgwL2feFv1R%2FgAOFhToG8AlcN2I4YWHvtgL0EKeUr480n3pQU4oxtRROmxKr7s4U14sQraXQdaV65u7AZ9fpj%2BjbV3iWw%2FhQzM0C5fYYXkM7LoYuD%2BBLmE5AP80UfhfG90u5sK%2FD01iMLThFMhed8TXWBGtjom%2FXnvCpbbIBmGCQEHprWxek1jR3%2BEaOcz59jf6fkpy8uQRbZk9JtSSkdCJyCBJ81%2FlzQdr69WSYAJ14KaxpluBXYqmyEZWgWgE%2FI2iR%2BnErxog5V%2FyDDvgV9TTEC4p2Mbu6mE8NW9%2FPUJAg9rNicaiHlflwU0uhInuAc%2FyWjS3reORgjnWr2h6wsekLmgYgPMoIdHJ1UHQ1yVhjaSAvLyKyUnEevsjDknK3EBjqkAQmaMN0p6uY2MEOvEM8JHiGsV%2FufWo6gJB20HiXP2M%2FmfJO%2Fk9mVcuciXbGVT9gyLP34I1e2gGQfygTnAYlA4OuUJflgn7uhrhe71MuP19E6HFA4didTjIh7PgU6mffoiC6zmemtUuHpG4nvcfox6nxbxQ%2BF9bEmS2KaTzDVRobDneBd7UoZDsLONpRyY%2Br9xbZsxCJ3VY8WcDT4ap%2Bs4GyGVA6z&X-Amz-Signature=8df1669f8d141ba9f5c1ca07a0ce3d9a8e3e6c07edb8951cb09c24992329359d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQT5FBUZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu88HtHkSezoClr0NTCJfvWCbrnzC0yJftlOO21fnt6QIhAIhQ0lfPBruvGeOU6mPlaKr246N8Hz%2FQuXwmPh8qVISTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDuf%2BzzySwaSB3eD4q3APaBZCA%2FE1X3M1xHcOhuVyUvJKyk08KfI2k%2FH1OCTWC96g6tHsSFwET%2BijAVyhhUTdjNKqKnqjPr65fZZ1vpOyQ4%2FZkkAy1h4yR7z8r15hGtn1O4URa%2BiyKYufWaKkUx0h2oPJn9%2F8NA8o3RvnEGHDgySbrqZhi4pRxTpfqJV7tzAVVAgLUOvWgvrVNK0TiUua6KUGbhe7x8ms2iZYhUGUDmlxibPSwYjsWo1Mt%2FZAaiy1iM4NsASteKamCC5bEd3FhgwL2feFv1R%2FgAOFhToG8AlcN2I4YWHvtgL0EKeUr480n3pQU4oxtRROmxKr7s4U14sQraXQdaV65u7AZ9fpj%2BjbV3iWw%2FhQzM0C5fYYXkM7LoYuD%2BBLmE5AP80UfhfG90u5sK%2FD01iMLThFMhed8TXWBGtjom%2FXnvCpbbIBmGCQEHprWxek1jR3%2BEaOcz59jf6fkpy8uQRbZk9JtSSkdCJyCBJ81%2FlzQdr69WSYAJ14KaxpluBXYqmyEZWgWgE%2FI2iR%2BnErxog5V%2FyDDvgV9TTEC4p2Mbu6mE8NW9%2FPUJAg9rNicaiHlflwU0uhInuAc%2FyWjS3reORgjnWr2h6wsekLmgYgPMoIdHJ1UHQ1yVhjaSAvLyKyUnEevsjDknK3EBjqkAQmaMN0p6uY2MEOvEM8JHiGsV%2FufWo6gJB20HiXP2M%2FmfJO%2Fk9mVcuciXbGVT9gyLP34I1e2gGQfygTnAYlA4OuUJflgn7uhrhe71MuP19E6HFA4didTjIh7PgU6mffoiC6zmemtUuHpG4nvcfox6nxbxQ%2BF9bEmS2KaTzDVRobDneBd7UoZDsLONpRyY%2Br9xbZsxCJ3VY8WcDT4ap%2Bs4GyGVA6z&X-Amz-Signature=c5f20fdfa1e4bcd83dc439ba6d3fceec27938f5da229fb9824500fb813b23304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQT5FBUZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu88HtHkSezoClr0NTCJfvWCbrnzC0yJftlOO21fnt6QIhAIhQ0lfPBruvGeOU6mPlaKr246N8Hz%2FQuXwmPh8qVISTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDuf%2BzzySwaSB3eD4q3APaBZCA%2FE1X3M1xHcOhuVyUvJKyk08KfI2k%2FH1OCTWC96g6tHsSFwET%2BijAVyhhUTdjNKqKnqjPr65fZZ1vpOyQ4%2FZkkAy1h4yR7z8r15hGtn1O4URa%2BiyKYufWaKkUx0h2oPJn9%2F8NA8o3RvnEGHDgySbrqZhi4pRxTpfqJV7tzAVVAgLUOvWgvrVNK0TiUua6KUGbhe7x8ms2iZYhUGUDmlxibPSwYjsWo1Mt%2FZAaiy1iM4NsASteKamCC5bEd3FhgwL2feFv1R%2FgAOFhToG8AlcN2I4YWHvtgL0EKeUr480n3pQU4oxtRROmxKr7s4U14sQraXQdaV65u7AZ9fpj%2BjbV3iWw%2FhQzM0C5fYYXkM7LoYuD%2BBLmE5AP80UfhfG90u5sK%2FD01iMLThFMhed8TXWBGtjom%2FXnvCpbbIBmGCQEHprWxek1jR3%2BEaOcz59jf6fkpy8uQRbZk9JtSSkdCJyCBJ81%2FlzQdr69WSYAJ14KaxpluBXYqmyEZWgWgE%2FI2iR%2BnErxog5V%2FyDDvgV9TTEC4p2Mbu6mE8NW9%2FPUJAg9rNicaiHlflwU0uhInuAc%2FyWjS3reORgjnWr2h6wsekLmgYgPMoIdHJ1UHQ1yVhjaSAvLyKyUnEevsjDknK3EBjqkAQmaMN0p6uY2MEOvEM8JHiGsV%2FufWo6gJB20HiXP2M%2FmfJO%2Fk9mVcuciXbGVT9gyLP34I1e2gGQfygTnAYlA4OuUJflgn7uhrhe71MuP19E6HFA4didTjIh7PgU6mffoiC6zmemtUuHpG4nvcfox6nxbxQ%2BF9bEmS2KaTzDVRobDneBd7UoZDsLONpRyY%2Br9xbZsxCJ3VY8WcDT4ap%2Bs4GyGVA6z&X-Amz-Signature=39342b57dd392b85710b45da9a4506d8ee99ba06859608e4c7f2543cda03c03a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
