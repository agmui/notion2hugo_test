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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSU6CIOF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BShf0%2Bq0Lyyf%2B0aIDiZMuYYJ%2B4UcHJesn15O9f212xAiEA0x14b39pZPOV6I0zY8PDZjDaz9fvirOxUbuaosT%2FU1Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNoNUxvkK3iUQ%2FQOiircA4B2RMIHV%2BZau4OzJCgfvFbNaq5ZCMl4LZmtuxJdEmwcJ518kXS6oO0Cttzf1O09AInucn4T555L0DlIi%2BhD2BTRZtjK6RjbMuv0lzuuhYmUu0f%2BUbORzI6OZWxxCsgprsD9Nqsl6dmiCkmSZFagp9CkzfLtHcqSFBuaiGpUm%2BFmQPPqWYx0U66ehXfTARSWHn6lVL6fsytGNmmv3K7hjnA3B12rETbjP%2Bsq2IwAdEq1J7Gtuh4Z%2FUYuu5alLgawBW7z4K5OATFiedZhn7S4fka1DcrD7uBNjWRqFCJhrfamXEVRY5lwbrs38%2FzTD4UWRT4sSui4%2BnefcrtLkoJNtV98vLgrwrpNintK0ZCYvr9Mfi2O1X3D4klPugg0jH2wnmpOYXl5t%2FQX74qum%2F7%2FFPWKy%2B7WNvKvN0tRYfll1bSQ9eUOMUTD2DAImk6aiP91cgtnu2DHCCKai0%2FihFWKhxRNFPnuaBqD%2Fb6C%2Fg14%2BXo0MWMDqaK%2F2RiXd1ACuqXbFXxVvH2uiYCkIby2%2BLNWDPtawUpBy%2FUhfbbrScYdVQd59jtxy6bFQoFiU7qibIFgHUVlQywBPgFPaZZfr1GdHsS7LQ%2BQ2%2B87PpLiFZnopYOi3U8v1w1lvdZDrPTOMPX1iMAGOqUBNn2bETSHo2hIDYLYi75djSCsfW2VmGZtfkH9yk0U17xkjoOwxua%2FllgKcQonCLeOWXUmkn4V4uZ%2BmBeKKywTSLUG9r0FtWlI%2BFwtQcYjvsmtFjRXxfGvwpkMZvarYuim9rXvixOshTza86b3rSRWFweyyh4UCwKEo4CjESB4TQxhzJRj02bEsy2%2FRK3se1fc9Nm%2BXzM%2F5ABL3yh7fuWpYCSmXLaw&X-Amz-Signature=02b2963fb5a3069ce2af3c95cbad17541b994a7a3e42c4f6ec50e73bfa0c1665&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSU6CIOF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BShf0%2Bq0Lyyf%2B0aIDiZMuYYJ%2B4UcHJesn15O9f212xAiEA0x14b39pZPOV6I0zY8PDZjDaz9fvirOxUbuaosT%2FU1Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNoNUxvkK3iUQ%2FQOiircA4B2RMIHV%2BZau4OzJCgfvFbNaq5ZCMl4LZmtuxJdEmwcJ518kXS6oO0Cttzf1O09AInucn4T555L0DlIi%2BhD2BTRZtjK6RjbMuv0lzuuhYmUu0f%2BUbORzI6OZWxxCsgprsD9Nqsl6dmiCkmSZFagp9CkzfLtHcqSFBuaiGpUm%2BFmQPPqWYx0U66ehXfTARSWHn6lVL6fsytGNmmv3K7hjnA3B12rETbjP%2Bsq2IwAdEq1J7Gtuh4Z%2FUYuu5alLgawBW7z4K5OATFiedZhn7S4fka1DcrD7uBNjWRqFCJhrfamXEVRY5lwbrs38%2FzTD4UWRT4sSui4%2BnefcrtLkoJNtV98vLgrwrpNintK0ZCYvr9Mfi2O1X3D4klPugg0jH2wnmpOYXl5t%2FQX74qum%2F7%2FFPWKy%2B7WNvKvN0tRYfll1bSQ9eUOMUTD2DAImk6aiP91cgtnu2DHCCKai0%2FihFWKhxRNFPnuaBqD%2Fb6C%2Fg14%2BXo0MWMDqaK%2F2RiXd1ACuqXbFXxVvH2uiYCkIby2%2BLNWDPtawUpBy%2FUhfbbrScYdVQd59jtxy6bFQoFiU7qibIFgHUVlQywBPgFPaZZfr1GdHsS7LQ%2BQ2%2B87PpLiFZnopYOi3U8v1w1lvdZDrPTOMPX1iMAGOqUBNn2bETSHo2hIDYLYi75djSCsfW2VmGZtfkH9yk0U17xkjoOwxua%2FllgKcQonCLeOWXUmkn4V4uZ%2BmBeKKywTSLUG9r0FtWlI%2BFwtQcYjvsmtFjRXxfGvwpkMZvarYuim9rXvixOshTza86b3rSRWFweyyh4UCwKEo4CjESB4TQxhzJRj02bEsy2%2FRK3se1fc9Nm%2BXzM%2F5ABL3yh7fuWpYCSmXLaw&X-Amz-Signature=aa941916cd3b51628dc95d890515048c756787f606d309ea85a11e7158fa1d07&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSU6CIOF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BShf0%2Bq0Lyyf%2B0aIDiZMuYYJ%2B4UcHJesn15O9f212xAiEA0x14b39pZPOV6I0zY8PDZjDaz9fvirOxUbuaosT%2FU1Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNoNUxvkK3iUQ%2FQOiircA4B2RMIHV%2BZau4OzJCgfvFbNaq5ZCMl4LZmtuxJdEmwcJ518kXS6oO0Cttzf1O09AInucn4T555L0DlIi%2BhD2BTRZtjK6RjbMuv0lzuuhYmUu0f%2BUbORzI6OZWxxCsgprsD9Nqsl6dmiCkmSZFagp9CkzfLtHcqSFBuaiGpUm%2BFmQPPqWYx0U66ehXfTARSWHn6lVL6fsytGNmmv3K7hjnA3B12rETbjP%2Bsq2IwAdEq1J7Gtuh4Z%2FUYuu5alLgawBW7z4K5OATFiedZhn7S4fka1DcrD7uBNjWRqFCJhrfamXEVRY5lwbrs38%2FzTD4UWRT4sSui4%2BnefcrtLkoJNtV98vLgrwrpNintK0ZCYvr9Mfi2O1X3D4klPugg0jH2wnmpOYXl5t%2FQX74qum%2F7%2FFPWKy%2B7WNvKvN0tRYfll1bSQ9eUOMUTD2DAImk6aiP91cgtnu2DHCCKai0%2FihFWKhxRNFPnuaBqD%2Fb6C%2Fg14%2BXo0MWMDqaK%2F2RiXd1ACuqXbFXxVvH2uiYCkIby2%2BLNWDPtawUpBy%2FUhfbbrScYdVQd59jtxy6bFQoFiU7qibIFgHUVlQywBPgFPaZZfr1GdHsS7LQ%2BQ2%2B87PpLiFZnopYOi3U8v1w1lvdZDrPTOMPX1iMAGOqUBNn2bETSHo2hIDYLYi75djSCsfW2VmGZtfkH9yk0U17xkjoOwxua%2FllgKcQonCLeOWXUmkn4V4uZ%2BmBeKKywTSLUG9r0FtWlI%2BFwtQcYjvsmtFjRXxfGvwpkMZvarYuim9rXvixOshTza86b3rSRWFweyyh4UCwKEo4CjESB4TQxhzJRj02bEsy2%2FRK3se1fc9Nm%2BXzM%2F5ABL3yh7fuWpYCSmXLaw&X-Amz-Signature=3d104a453a23531d000da8755c718e757b0db4a5bdd79a98685691496e21ce7f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSU6CIOF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BShf0%2Bq0Lyyf%2B0aIDiZMuYYJ%2B4UcHJesn15O9f212xAiEA0x14b39pZPOV6I0zY8PDZjDaz9fvirOxUbuaosT%2FU1Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNoNUxvkK3iUQ%2FQOiircA4B2RMIHV%2BZau4OzJCgfvFbNaq5ZCMl4LZmtuxJdEmwcJ518kXS6oO0Cttzf1O09AInucn4T555L0DlIi%2BhD2BTRZtjK6RjbMuv0lzuuhYmUu0f%2BUbORzI6OZWxxCsgprsD9Nqsl6dmiCkmSZFagp9CkzfLtHcqSFBuaiGpUm%2BFmQPPqWYx0U66ehXfTARSWHn6lVL6fsytGNmmv3K7hjnA3B12rETbjP%2Bsq2IwAdEq1J7Gtuh4Z%2FUYuu5alLgawBW7z4K5OATFiedZhn7S4fka1DcrD7uBNjWRqFCJhrfamXEVRY5lwbrs38%2FzTD4UWRT4sSui4%2BnefcrtLkoJNtV98vLgrwrpNintK0ZCYvr9Mfi2O1X3D4klPugg0jH2wnmpOYXl5t%2FQX74qum%2F7%2FFPWKy%2B7WNvKvN0tRYfll1bSQ9eUOMUTD2DAImk6aiP91cgtnu2DHCCKai0%2FihFWKhxRNFPnuaBqD%2Fb6C%2Fg14%2BXo0MWMDqaK%2F2RiXd1ACuqXbFXxVvH2uiYCkIby2%2BLNWDPtawUpBy%2FUhfbbrScYdVQd59jtxy6bFQoFiU7qibIFgHUVlQywBPgFPaZZfr1GdHsS7LQ%2BQ2%2B87PpLiFZnopYOi3U8v1w1lvdZDrPTOMPX1iMAGOqUBNn2bETSHo2hIDYLYi75djSCsfW2VmGZtfkH9yk0U17xkjoOwxua%2FllgKcQonCLeOWXUmkn4V4uZ%2BmBeKKywTSLUG9r0FtWlI%2BFwtQcYjvsmtFjRXxfGvwpkMZvarYuim9rXvixOshTza86b3rSRWFweyyh4UCwKEo4CjESB4TQxhzJRj02bEsy2%2FRK3se1fc9Nm%2BXzM%2F5ABL3yh7fuWpYCSmXLaw&X-Amz-Signature=c7cbd0e0d8504ceb6e04e436521b1d34c29154ce31af40ed4f117f2f876f4f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSU6CIOF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BShf0%2Bq0Lyyf%2B0aIDiZMuYYJ%2B4UcHJesn15O9f212xAiEA0x14b39pZPOV6I0zY8PDZjDaz9fvirOxUbuaosT%2FU1Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNoNUxvkK3iUQ%2FQOiircA4B2RMIHV%2BZau4OzJCgfvFbNaq5ZCMl4LZmtuxJdEmwcJ518kXS6oO0Cttzf1O09AInucn4T555L0DlIi%2BhD2BTRZtjK6RjbMuv0lzuuhYmUu0f%2BUbORzI6OZWxxCsgprsD9Nqsl6dmiCkmSZFagp9CkzfLtHcqSFBuaiGpUm%2BFmQPPqWYx0U66ehXfTARSWHn6lVL6fsytGNmmv3K7hjnA3B12rETbjP%2Bsq2IwAdEq1J7Gtuh4Z%2FUYuu5alLgawBW7z4K5OATFiedZhn7S4fka1DcrD7uBNjWRqFCJhrfamXEVRY5lwbrs38%2FzTD4UWRT4sSui4%2BnefcrtLkoJNtV98vLgrwrpNintK0ZCYvr9Mfi2O1X3D4klPugg0jH2wnmpOYXl5t%2FQX74qum%2F7%2FFPWKy%2B7WNvKvN0tRYfll1bSQ9eUOMUTD2DAImk6aiP91cgtnu2DHCCKai0%2FihFWKhxRNFPnuaBqD%2Fb6C%2Fg14%2BXo0MWMDqaK%2F2RiXd1ACuqXbFXxVvH2uiYCkIby2%2BLNWDPtawUpBy%2FUhfbbrScYdVQd59jtxy6bFQoFiU7qibIFgHUVlQywBPgFPaZZfr1GdHsS7LQ%2BQ2%2B87PpLiFZnopYOi3U8v1w1lvdZDrPTOMPX1iMAGOqUBNn2bETSHo2hIDYLYi75djSCsfW2VmGZtfkH9yk0U17xkjoOwxua%2FllgKcQonCLeOWXUmkn4V4uZ%2BmBeKKywTSLUG9r0FtWlI%2BFwtQcYjvsmtFjRXxfGvwpkMZvarYuim9rXvixOshTza86b3rSRWFweyyh4UCwKEo4CjESB4TQxhzJRj02bEsy2%2FRK3se1fc9Nm%2BXzM%2F5ABL3yh7fuWpYCSmXLaw&X-Amz-Signature=197dd525eb6934e2f2c4b37b6e0b68fa1838cf153ad3d245887f643a289c480b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSU6CIOF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BShf0%2Bq0Lyyf%2B0aIDiZMuYYJ%2B4UcHJesn15O9f212xAiEA0x14b39pZPOV6I0zY8PDZjDaz9fvirOxUbuaosT%2FU1Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNoNUxvkK3iUQ%2FQOiircA4B2RMIHV%2BZau4OzJCgfvFbNaq5ZCMl4LZmtuxJdEmwcJ518kXS6oO0Cttzf1O09AInucn4T555L0DlIi%2BhD2BTRZtjK6RjbMuv0lzuuhYmUu0f%2BUbORzI6OZWxxCsgprsD9Nqsl6dmiCkmSZFagp9CkzfLtHcqSFBuaiGpUm%2BFmQPPqWYx0U66ehXfTARSWHn6lVL6fsytGNmmv3K7hjnA3B12rETbjP%2Bsq2IwAdEq1J7Gtuh4Z%2FUYuu5alLgawBW7z4K5OATFiedZhn7S4fka1DcrD7uBNjWRqFCJhrfamXEVRY5lwbrs38%2FzTD4UWRT4sSui4%2BnefcrtLkoJNtV98vLgrwrpNintK0ZCYvr9Mfi2O1X3D4klPugg0jH2wnmpOYXl5t%2FQX74qum%2F7%2FFPWKy%2B7WNvKvN0tRYfll1bSQ9eUOMUTD2DAImk6aiP91cgtnu2DHCCKai0%2FihFWKhxRNFPnuaBqD%2Fb6C%2Fg14%2BXo0MWMDqaK%2F2RiXd1ACuqXbFXxVvH2uiYCkIby2%2BLNWDPtawUpBy%2FUhfbbrScYdVQd59jtxy6bFQoFiU7qibIFgHUVlQywBPgFPaZZfr1GdHsS7LQ%2BQ2%2B87PpLiFZnopYOi3U8v1w1lvdZDrPTOMPX1iMAGOqUBNn2bETSHo2hIDYLYi75djSCsfW2VmGZtfkH9yk0U17xkjoOwxua%2FllgKcQonCLeOWXUmkn4V4uZ%2BmBeKKywTSLUG9r0FtWlI%2BFwtQcYjvsmtFjRXxfGvwpkMZvarYuim9rXvixOshTza86b3rSRWFweyyh4UCwKEo4CjESB4TQxhzJRj02bEsy2%2FRK3se1fc9Nm%2BXzM%2F5ABL3yh7fuWpYCSmXLaw&X-Amz-Signature=388e9b1d26f4d61ad07b972877502d6dc115aa84c527f1ba1247ca2a69a303ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSU6CIOF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BShf0%2Bq0Lyyf%2B0aIDiZMuYYJ%2B4UcHJesn15O9f212xAiEA0x14b39pZPOV6I0zY8PDZjDaz9fvirOxUbuaosT%2FU1Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNoNUxvkK3iUQ%2FQOiircA4B2RMIHV%2BZau4OzJCgfvFbNaq5ZCMl4LZmtuxJdEmwcJ518kXS6oO0Cttzf1O09AInucn4T555L0DlIi%2BhD2BTRZtjK6RjbMuv0lzuuhYmUu0f%2BUbORzI6OZWxxCsgprsD9Nqsl6dmiCkmSZFagp9CkzfLtHcqSFBuaiGpUm%2BFmQPPqWYx0U66ehXfTARSWHn6lVL6fsytGNmmv3K7hjnA3B12rETbjP%2Bsq2IwAdEq1J7Gtuh4Z%2FUYuu5alLgawBW7z4K5OATFiedZhn7S4fka1DcrD7uBNjWRqFCJhrfamXEVRY5lwbrs38%2FzTD4UWRT4sSui4%2BnefcrtLkoJNtV98vLgrwrpNintK0ZCYvr9Mfi2O1X3D4klPugg0jH2wnmpOYXl5t%2FQX74qum%2F7%2FFPWKy%2B7WNvKvN0tRYfll1bSQ9eUOMUTD2DAImk6aiP91cgtnu2DHCCKai0%2FihFWKhxRNFPnuaBqD%2Fb6C%2Fg14%2BXo0MWMDqaK%2F2RiXd1ACuqXbFXxVvH2uiYCkIby2%2BLNWDPtawUpBy%2FUhfbbrScYdVQd59jtxy6bFQoFiU7qibIFgHUVlQywBPgFPaZZfr1GdHsS7LQ%2BQ2%2B87PpLiFZnopYOi3U8v1w1lvdZDrPTOMPX1iMAGOqUBNn2bETSHo2hIDYLYi75djSCsfW2VmGZtfkH9yk0U17xkjoOwxua%2FllgKcQonCLeOWXUmkn4V4uZ%2BmBeKKywTSLUG9r0FtWlI%2BFwtQcYjvsmtFjRXxfGvwpkMZvarYuim9rXvixOshTza86b3rSRWFweyyh4UCwKEo4CjESB4TQxhzJRj02bEsy2%2FRK3se1fc9Nm%2BXzM%2F5ABL3yh7fuWpYCSmXLaw&X-Amz-Signature=988f4f0afe1beb5a123ad088cf6fcd2a03891b6f2d9c301d76d28cfb8d618539&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSU6CIOF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BShf0%2Bq0Lyyf%2B0aIDiZMuYYJ%2B4UcHJesn15O9f212xAiEA0x14b39pZPOV6I0zY8PDZjDaz9fvirOxUbuaosT%2FU1Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNoNUxvkK3iUQ%2FQOiircA4B2RMIHV%2BZau4OzJCgfvFbNaq5ZCMl4LZmtuxJdEmwcJ518kXS6oO0Cttzf1O09AInucn4T555L0DlIi%2BhD2BTRZtjK6RjbMuv0lzuuhYmUu0f%2BUbORzI6OZWxxCsgprsD9Nqsl6dmiCkmSZFagp9CkzfLtHcqSFBuaiGpUm%2BFmQPPqWYx0U66ehXfTARSWHn6lVL6fsytGNmmv3K7hjnA3B12rETbjP%2Bsq2IwAdEq1J7Gtuh4Z%2FUYuu5alLgawBW7z4K5OATFiedZhn7S4fka1DcrD7uBNjWRqFCJhrfamXEVRY5lwbrs38%2FzTD4UWRT4sSui4%2BnefcrtLkoJNtV98vLgrwrpNintK0ZCYvr9Mfi2O1X3D4klPugg0jH2wnmpOYXl5t%2FQX74qum%2F7%2FFPWKy%2B7WNvKvN0tRYfll1bSQ9eUOMUTD2DAImk6aiP91cgtnu2DHCCKai0%2FihFWKhxRNFPnuaBqD%2Fb6C%2Fg14%2BXo0MWMDqaK%2F2RiXd1ACuqXbFXxVvH2uiYCkIby2%2BLNWDPtawUpBy%2FUhfbbrScYdVQd59jtxy6bFQoFiU7qibIFgHUVlQywBPgFPaZZfr1GdHsS7LQ%2BQ2%2B87PpLiFZnopYOi3U8v1w1lvdZDrPTOMPX1iMAGOqUBNn2bETSHo2hIDYLYi75djSCsfW2VmGZtfkH9yk0U17xkjoOwxua%2FllgKcQonCLeOWXUmkn4V4uZ%2BmBeKKywTSLUG9r0FtWlI%2BFwtQcYjvsmtFjRXxfGvwpkMZvarYuim9rXvixOshTza86b3rSRWFweyyh4UCwKEo4CjESB4TQxhzJRj02bEsy2%2FRK3se1fc9Nm%2BXzM%2F5ABL3yh7fuWpYCSmXLaw&X-Amz-Signature=3d276c830cf9e9a1116da61e6dbe6cc16926dcfdc8dc1755333569741503caf6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
