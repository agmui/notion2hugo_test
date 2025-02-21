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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644J7XYHL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD78Px8%2F%2Fjkldj8rrTKF1HUuXH228wfQorBilpmyphu7QIhAMTg2u7%2B6KhZaiH5q7oInXa9vrUOcJB3BYJRq1nselkJKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhphZHCQ4V008netEq3AOJBW5YvqknLHyOPvGmjsjCK6e76qc1F0jP1jJUIIFMQuIEL6ex1k6B8ZYS8v%2FgzK8OXIjPEV6rzacri%2Bq45pB1mnhMyoSnFKlj4nMYwJoe46RFvgXDw2B7unBrLrVd5pZEyHzuQZdvF%2FHYVVwseMWWVO2NrRMRjKz0BvHLfTvvKJocsv47bD6waqus%2FFXXO6ChlVgKo4irUTC3bOAxLqGSHSTa0UdNQcmwLnqBnYd5z%2FAK9H7VQhBmBZnGkJReezdQG%2BLRXVl3vwXWOckWPWIrXs1hjWOWGoTFyDfQW83v%2FbizEsb94q7JHsu%2FvyKH5LZUdfcWNPGn2ghbz98RMWKahekF05VRjD9wlbgg5XoNgCW3B8tx0698Gd2G70ar3n5qJ6RzXTSlLI3KGg5%2B5NmkXHwT9GZaFYetl8NAdNltm1%2BTRZghJeGDm7M3bY2RiZ5h75CxXWYJ999SnqbUz%2BLNV0F5gFqEIzjJuz4DTLi%2BsABthLB7LnEWqUxqnpbq7Qgg0Pwzf90CJ%2BhEJQZfyUquO7vOein9%2B1z1huhAvCTKghaJljSmINynXqrx02QEnW8lvOrfmxJJQUsWpgbL3bJ6NWV5FWX2dnSxdlqx5xCDRRrbY411a8E7SDaNGjDQmeG9BjqkAUrWZAYfBH7ZjGHDt6eodb073iwoOOoF9v8U2Ib2w4NLfx0UhetF8udlgObG7Ko6zyF2mZTQAXehcbjURQcUPrX%2FYpgYCKMIe0uo32RiIdKPrdtfrCx76rbilTsDPOj%2FdsmFej%2BSpU%2F15BYJ1omIgTKijeXKWfwX7THya17B%2BCHtfelIJReJK1L0nZ%2FtBcwLyGEW9jkN3iaHjdV5IyXeprLrhbVc&X-Amz-Signature=818ece5637631ab7d39f3e8f52b1fd9545572a262883b9ecd20b70eaac926a70&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644J7XYHL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD78Px8%2F%2Fjkldj8rrTKF1HUuXH228wfQorBilpmyphu7QIhAMTg2u7%2B6KhZaiH5q7oInXa9vrUOcJB3BYJRq1nselkJKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhphZHCQ4V008netEq3AOJBW5YvqknLHyOPvGmjsjCK6e76qc1F0jP1jJUIIFMQuIEL6ex1k6B8ZYS8v%2FgzK8OXIjPEV6rzacri%2Bq45pB1mnhMyoSnFKlj4nMYwJoe46RFvgXDw2B7unBrLrVd5pZEyHzuQZdvF%2FHYVVwseMWWVO2NrRMRjKz0BvHLfTvvKJocsv47bD6waqus%2FFXXO6ChlVgKo4irUTC3bOAxLqGSHSTa0UdNQcmwLnqBnYd5z%2FAK9H7VQhBmBZnGkJReezdQG%2BLRXVl3vwXWOckWPWIrXs1hjWOWGoTFyDfQW83v%2FbizEsb94q7JHsu%2FvyKH5LZUdfcWNPGn2ghbz98RMWKahekF05VRjD9wlbgg5XoNgCW3B8tx0698Gd2G70ar3n5qJ6RzXTSlLI3KGg5%2B5NmkXHwT9GZaFYetl8NAdNltm1%2BTRZghJeGDm7M3bY2RiZ5h75CxXWYJ999SnqbUz%2BLNV0F5gFqEIzjJuz4DTLi%2BsABthLB7LnEWqUxqnpbq7Qgg0Pwzf90CJ%2BhEJQZfyUquO7vOein9%2B1z1huhAvCTKghaJljSmINynXqrx02QEnW8lvOrfmxJJQUsWpgbL3bJ6NWV5FWX2dnSxdlqx5xCDRRrbY411a8E7SDaNGjDQmeG9BjqkAUrWZAYfBH7ZjGHDt6eodb073iwoOOoF9v8U2Ib2w4NLfx0UhetF8udlgObG7Ko6zyF2mZTQAXehcbjURQcUPrX%2FYpgYCKMIe0uo32RiIdKPrdtfrCx76rbilTsDPOj%2FdsmFej%2BSpU%2F15BYJ1omIgTKijeXKWfwX7THya17B%2BCHtfelIJReJK1L0nZ%2FtBcwLyGEW9jkN3iaHjdV5IyXeprLrhbVc&X-Amz-Signature=d96f7de519420e5ff298e5dde5706b9858344b7db9962a28d61e61e0ce0c84cd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644J7XYHL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD78Px8%2F%2Fjkldj8rrTKF1HUuXH228wfQorBilpmyphu7QIhAMTg2u7%2B6KhZaiH5q7oInXa9vrUOcJB3BYJRq1nselkJKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhphZHCQ4V008netEq3AOJBW5YvqknLHyOPvGmjsjCK6e76qc1F0jP1jJUIIFMQuIEL6ex1k6B8ZYS8v%2FgzK8OXIjPEV6rzacri%2Bq45pB1mnhMyoSnFKlj4nMYwJoe46RFvgXDw2B7unBrLrVd5pZEyHzuQZdvF%2FHYVVwseMWWVO2NrRMRjKz0BvHLfTvvKJocsv47bD6waqus%2FFXXO6ChlVgKo4irUTC3bOAxLqGSHSTa0UdNQcmwLnqBnYd5z%2FAK9H7VQhBmBZnGkJReezdQG%2BLRXVl3vwXWOckWPWIrXs1hjWOWGoTFyDfQW83v%2FbizEsb94q7JHsu%2FvyKH5LZUdfcWNPGn2ghbz98RMWKahekF05VRjD9wlbgg5XoNgCW3B8tx0698Gd2G70ar3n5qJ6RzXTSlLI3KGg5%2B5NmkXHwT9GZaFYetl8NAdNltm1%2BTRZghJeGDm7M3bY2RiZ5h75CxXWYJ999SnqbUz%2BLNV0F5gFqEIzjJuz4DTLi%2BsABthLB7LnEWqUxqnpbq7Qgg0Pwzf90CJ%2BhEJQZfyUquO7vOein9%2B1z1huhAvCTKghaJljSmINynXqrx02QEnW8lvOrfmxJJQUsWpgbL3bJ6NWV5FWX2dnSxdlqx5xCDRRrbY411a8E7SDaNGjDQmeG9BjqkAUrWZAYfBH7ZjGHDt6eodb073iwoOOoF9v8U2Ib2w4NLfx0UhetF8udlgObG7Ko6zyF2mZTQAXehcbjURQcUPrX%2FYpgYCKMIe0uo32RiIdKPrdtfrCx76rbilTsDPOj%2FdsmFej%2BSpU%2F15BYJ1omIgTKijeXKWfwX7THya17B%2BCHtfelIJReJK1L0nZ%2FtBcwLyGEW9jkN3iaHjdV5IyXeprLrhbVc&X-Amz-Signature=a34f1c0e3479bd2e35b3902014d57f119c6e8fd6d0355b4ed4249676eb6583aa&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644J7XYHL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD78Px8%2F%2Fjkldj8rrTKF1HUuXH228wfQorBilpmyphu7QIhAMTg2u7%2B6KhZaiH5q7oInXa9vrUOcJB3BYJRq1nselkJKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhphZHCQ4V008netEq3AOJBW5YvqknLHyOPvGmjsjCK6e76qc1F0jP1jJUIIFMQuIEL6ex1k6B8ZYS8v%2FgzK8OXIjPEV6rzacri%2Bq45pB1mnhMyoSnFKlj4nMYwJoe46RFvgXDw2B7unBrLrVd5pZEyHzuQZdvF%2FHYVVwseMWWVO2NrRMRjKz0BvHLfTvvKJocsv47bD6waqus%2FFXXO6ChlVgKo4irUTC3bOAxLqGSHSTa0UdNQcmwLnqBnYd5z%2FAK9H7VQhBmBZnGkJReezdQG%2BLRXVl3vwXWOckWPWIrXs1hjWOWGoTFyDfQW83v%2FbizEsb94q7JHsu%2FvyKH5LZUdfcWNPGn2ghbz98RMWKahekF05VRjD9wlbgg5XoNgCW3B8tx0698Gd2G70ar3n5qJ6RzXTSlLI3KGg5%2B5NmkXHwT9GZaFYetl8NAdNltm1%2BTRZghJeGDm7M3bY2RiZ5h75CxXWYJ999SnqbUz%2BLNV0F5gFqEIzjJuz4DTLi%2BsABthLB7LnEWqUxqnpbq7Qgg0Pwzf90CJ%2BhEJQZfyUquO7vOein9%2B1z1huhAvCTKghaJljSmINynXqrx02QEnW8lvOrfmxJJQUsWpgbL3bJ6NWV5FWX2dnSxdlqx5xCDRRrbY411a8E7SDaNGjDQmeG9BjqkAUrWZAYfBH7ZjGHDt6eodb073iwoOOoF9v8U2Ib2w4NLfx0UhetF8udlgObG7Ko6zyF2mZTQAXehcbjURQcUPrX%2FYpgYCKMIe0uo32RiIdKPrdtfrCx76rbilTsDPOj%2FdsmFej%2BSpU%2F15BYJ1omIgTKijeXKWfwX7THya17B%2BCHtfelIJReJK1L0nZ%2FtBcwLyGEW9jkN3iaHjdV5IyXeprLrhbVc&X-Amz-Signature=7aeaf918f2271e24ffd0788d2f3bcdbc62d84f9bc7cf1adc1af4b96e862a0f00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644J7XYHL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD78Px8%2F%2Fjkldj8rrTKF1HUuXH228wfQorBilpmyphu7QIhAMTg2u7%2B6KhZaiH5q7oInXa9vrUOcJB3BYJRq1nselkJKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhphZHCQ4V008netEq3AOJBW5YvqknLHyOPvGmjsjCK6e76qc1F0jP1jJUIIFMQuIEL6ex1k6B8ZYS8v%2FgzK8OXIjPEV6rzacri%2Bq45pB1mnhMyoSnFKlj4nMYwJoe46RFvgXDw2B7unBrLrVd5pZEyHzuQZdvF%2FHYVVwseMWWVO2NrRMRjKz0BvHLfTvvKJocsv47bD6waqus%2FFXXO6ChlVgKo4irUTC3bOAxLqGSHSTa0UdNQcmwLnqBnYd5z%2FAK9H7VQhBmBZnGkJReezdQG%2BLRXVl3vwXWOckWPWIrXs1hjWOWGoTFyDfQW83v%2FbizEsb94q7JHsu%2FvyKH5LZUdfcWNPGn2ghbz98RMWKahekF05VRjD9wlbgg5XoNgCW3B8tx0698Gd2G70ar3n5qJ6RzXTSlLI3KGg5%2B5NmkXHwT9GZaFYetl8NAdNltm1%2BTRZghJeGDm7M3bY2RiZ5h75CxXWYJ999SnqbUz%2BLNV0F5gFqEIzjJuz4DTLi%2BsABthLB7LnEWqUxqnpbq7Qgg0Pwzf90CJ%2BhEJQZfyUquO7vOein9%2B1z1huhAvCTKghaJljSmINynXqrx02QEnW8lvOrfmxJJQUsWpgbL3bJ6NWV5FWX2dnSxdlqx5xCDRRrbY411a8E7SDaNGjDQmeG9BjqkAUrWZAYfBH7ZjGHDt6eodb073iwoOOoF9v8U2Ib2w4NLfx0UhetF8udlgObG7Ko6zyF2mZTQAXehcbjURQcUPrX%2FYpgYCKMIe0uo32RiIdKPrdtfrCx76rbilTsDPOj%2FdsmFej%2BSpU%2F15BYJ1omIgTKijeXKWfwX7THya17B%2BCHtfelIJReJK1L0nZ%2FtBcwLyGEW9jkN3iaHjdV5IyXeprLrhbVc&X-Amz-Signature=831f59b963b2285f769a2e0f955cf0ed63b246099ae9d64f82f01c862bc34fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644J7XYHL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD78Px8%2F%2Fjkldj8rrTKF1HUuXH228wfQorBilpmyphu7QIhAMTg2u7%2B6KhZaiH5q7oInXa9vrUOcJB3BYJRq1nselkJKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhphZHCQ4V008netEq3AOJBW5YvqknLHyOPvGmjsjCK6e76qc1F0jP1jJUIIFMQuIEL6ex1k6B8ZYS8v%2FgzK8OXIjPEV6rzacri%2Bq45pB1mnhMyoSnFKlj4nMYwJoe46RFvgXDw2B7unBrLrVd5pZEyHzuQZdvF%2FHYVVwseMWWVO2NrRMRjKz0BvHLfTvvKJocsv47bD6waqus%2FFXXO6ChlVgKo4irUTC3bOAxLqGSHSTa0UdNQcmwLnqBnYd5z%2FAK9H7VQhBmBZnGkJReezdQG%2BLRXVl3vwXWOckWPWIrXs1hjWOWGoTFyDfQW83v%2FbizEsb94q7JHsu%2FvyKH5LZUdfcWNPGn2ghbz98RMWKahekF05VRjD9wlbgg5XoNgCW3B8tx0698Gd2G70ar3n5qJ6RzXTSlLI3KGg5%2B5NmkXHwT9GZaFYetl8NAdNltm1%2BTRZghJeGDm7M3bY2RiZ5h75CxXWYJ999SnqbUz%2BLNV0F5gFqEIzjJuz4DTLi%2BsABthLB7LnEWqUxqnpbq7Qgg0Pwzf90CJ%2BhEJQZfyUquO7vOein9%2B1z1huhAvCTKghaJljSmINynXqrx02QEnW8lvOrfmxJJQUsWpgbL3bJ6NWV5FWX2dnSxdlqx5xCDRRrbY411a8E7SDaNGjDQmeG9BjqkAUrWZAYfBH7ZjGHDt6eodb073iwoOOoF9v8U2Ib2w4NLfx0UhetF8udlgObG7Ko6zyF2mZTQAXehcbjURQcUPrX%2FYpgYCKMIe0uo32RiIdKPrdtfrCx76rbilTsDPOj%2FdsmFej%2BSpU%2F15BYJ1omIgTKijeXKWfwX7THya17B%2BCHtfelIJReJK1L0nZ%2FtBcwLyGEW9jkN3iaHjdV5IyXeprLrhbVc&X-Amz-Signature=f0b2e35086c473720d2cc2ea565b71bf573a9411d01c26b2cba04a73fa7d9233&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644J7XYHL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD78Px8%2F%2Fjkldj8rrTKF1HUuXH228wfQorBilpmyphu7QIhAMTg2u7%2B6KhZaiH5q7oInXa9vrUOcJB3BYJRq1nselkJKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhphZHCQ4V008netEq3AOJBW5YvqknLHyOPvGmjsjCK6e76qc1F0jP1jJUIIFMQuIEL6ex1k6B8ZYS8v%2FgzK8OXIjPEV6rzacri%2Bq45pB1mnhMyoSnFKlj4nMYwJoe46RFvgXDw2B7unBrLrVd5pZEyHzuQZdvF%2FHYVVwseMWWVO2NrRMRjKz0BvHLfTvvKJocsv47bD6waqus%2FFXXO6ChlVgKo4irUTC3bOAxLqGSHSTa0UdNQcmwLnqBnYd5z%2FAK9H7VQhBmBZnGkJReezdQG%2BLRXVl3vwXWOckWPWIrXs1hjWOWGoTFyDfQW83v%2FbizEsb94q7JHsu%2FvyKH5LZUdfcWNPGn2ghbz98RMWKahekF05VRjD9wlbgg5XoNgCW3B8tx0698Gd2G70ar3n5qJ6RzXTSlLI3KGg5%2B5NmkXHwT9GZaFYetl8NAdNltm1%2BTRZghJeGDm7M3bY2RiZ5h75CxXWYJ999SnqbUz%2BLNV0F5gFqEIzjJuz4DTLi%2BsABthLB7LnEWqUxqnpbq7Qgg0Pwzf90CJ%2BhEJQZfyUquO7vOein9%2B1z1huhAvCTKghaJljSmINynXqrx02QEnW8lvOrfmxJJQUsWpgbL3bJ6NWV5FWX2dnSxdlqx5xCDRRrbY411a8E7SDaNGjDQmeG9BjqkAUrWZAYfBH7ZjGHDt6eodb073iwoOOoF9v8U2Ib2w4NLfx0UhetF8udlgObG7Ko6zyF2mZTQAXehcbjURQcUPrX%2FYpgYCKMIe0uo32RiIdKPrdtfrCx76rbilTsDPOj%2FdsmFej%2BSpU%2F15BYJ1omIgTKijeXKWfwX7THya17B%2BCHtfelIJReJK1L0nZ%2FtBcwLyGEW9jkN3iaHjdV5IyXeprLrhbVc&X-Amz-Signature=ff736d5f2ebd6b9a7f28b6b09d167abbf12ec2c06f1f64c29507c70bfea378fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644J7XYHL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD78Px8%2F%2Fjkldj8rrTKF1HUuXH228wfQorBilpmyphu7QIhAMTg2u7%2B6KhZaiH5q7oInXa9vrUOcJB3BYJRq1nselkJKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhphZHCQ4V008netEq3AOJBW5YvqknLHyOPvGmjsjCK6e76qc1F0jP1jJUIIFMQuIEL6ex1k6B8ZYS8v%2FgzK8OXIjPEV6rzacri%2Bq45pB1mnhMyoSnFKlj4nMYwJoe46RFvgXDw2B7unBrLrVd5pZEyHzuQZdvF%2FHYVVwseMWWVO2NrRMRjKz0BvHLfTvvKJocsv47bD6waqus%2FFXXO6ChlVgKo4irUTC3bOAxLqGSHSTa0UdNQcmwLnqBnYd5z%2FAK9H7VQhBmBZnGkJReezdQG%2BLRXVl3vwXWOckWPWIrXs1hjWOWGoTFyDfQW83v%2FbizEsb94q7JHsu%2FvyKH5LZUdfcWNPGn2ghbz98RMWKahekF05VRjD9wlbgg5XoNgCW3B8tx0698Gd2G70ar3n5qJ6RzXTSlLI3KGg5%2B5NmkXHwT9GZaFYetl8NAdNltm1%2BTRZghJeGDm7M3bY2RiZ5h75CxXWYJ999SnqbUz%2BLNV0F5gFqEIzjJuz4DTLi%2BsABthLB7LnEWqUxqnpbq7Qgg0Pwzf90CJ%2BhEJQZfyUquO7vOein9%2B1z1huhAvCTKghaJljSmINynXqrx02QEnW8lvOrfmxJJQUsWpgbL3bJ6NWV5FWX2dnSxdlqx5xCDRRrbY411a8E7SDaNGjDQmeG9BjqkAUrWZAYfBH7ZjGHDt6eodb073iwoOOoF9v8U2Ib2w4NLfx0UhetF8udlgObG7Ko6zyF2mZTQAXehcbjURQcUPrX%2FYpgYCKMIe0uo32RiIdKPrdtfrCx76rbilTsDPOj%2FdsmFej%2BSpU%2F15BYJ1omIgTKijeXKWfwX7THya17B%2BCHtfelIJReJK1L0nZ%2FtBcwLyGEW9jkN3iaHjdV5IyXeprLrhbVc&X-Amz-Signature=662241010b0e1adb465189784ee8e01a27a193ec0e73ffdd3997d4d3e0154da1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
