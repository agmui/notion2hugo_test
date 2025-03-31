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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H63EDLY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGY2tPxxe6gPVG%2Fj8Zbt9A9VzLR7lD588Wxt71AHXutrAiEA57zhLxDNIZyyOBJLjDayymEY%2F6ZtPQcbS9niNl6fI%2FQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpigx5NB%2F4gsV078yrcA4EubOxTdo5d%2F3i19d7o1EtsGw2%2BbjQG%2BSJoR2KY9P3hDaiH1ORZWQokSnQEe%2FrgMV6IEWQhBGrxPe9QLAFfy8cph7%2F9y6Oow4RoFtygrWxf64s1a1BNfrVTj0XEidXiSxClr7oXma8d2F%2Fe6fItdJt14WADNvgu7YvLwzSLK%2F72c2JbMN3r1cIijmA4exHQooircZ5i2iWLVFz5aSlZtIFc26LP%2BLUS0qoV%2F1SgF%2B1wlFiD0YDTk6r2hrARRRHzphPaIdWpFX2fxx%2F0smXdekS9ubvDtMhmjTvwWXHPvEW5orL4AQsXlfwmdtM4a6LSF9tOC7PIknrfYBqRNOvdLWgGsKcJoHEONA2qb0qra242%2B3oIMH99FstqOLT2VXF3zp2O7whmzyeQs%2B7OgQXC4shESDmdfWt0rq%2B7VH9WUV6PwVLFq%2B2NVN8yRzsgKHURwnmEjtk7GypKIaJdpa2r9V0xh74yqZ7%2F%2BKidBGReXGDNXj4kEemvjRN%2BBcBcoYToi6igxhKFyY9%2FAgBvpzgomJT%2FAX0HCpW%2F2EE9cOXwhFMsw%2FzbfS9CIj4fPt8UxTazQoFXM%2F49eSY0vyvZ0h8B7UfaC08RBBm1jww2NihKcFPv5UJBbJ1sJluRUd4CMKucq78GOqUBJUfXgppbMhe0NIqaPac6A0J7DTu%2Fw0eJdKC6N4bDkDH6h5nS5%2FdvuZdzJyhNL%2BisXF0qp6LhkedwkS7CpHBA3Kj2LQsga077w%2BmMUxhfHHMpHG3ttqNXKDyGfcVUFEMVV3BPgZKGrE%2FWAmuWpxqt9bQYsCfimrXgORV%2Fv8wgxc1zignegVsvvz3AtlsgYlKF6xwTqXWR%2BYHEbAu03HaiXEhXtOO4&X-Amz-Signature=9c213a29deac8a7d016d7e124f6ef95c835b791fafe04d517acfb185b8cd5747&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H63EDLY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGY2tPxxe6gPVG%2Fj8Zbt9A9VzLR7lD588Wxt71AHXutrAiEA57zhLxDNIZyyOBJLjDayymEY%2F6ZtPQcbS9niNl6fI%2FQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpigx5NB%2F4gsV078yrcA4EubOxTdo5d%2F3i19d7o1EtsGw2%2BbjQG%2BSJoR2KY9P3hDaiH1ORZWQokSnQEe%2FrgMV6IEWQhBGrxPe9QLAFfy8cph7%2F9y6Oow4RoFtygrWxf64s1a1BNfrVTj0XEidXiSxClr7oXma8d2F%2Fe6fItdJt14WADNvgu7YvLwzSLK%2F72c2JbMN3r1cIijmA4exHQooircZ5i2iWLVFz5aSlZtIFc26LP%2BLUS0qoV%2F1SgF%2B1wlFiD0YDTk6r2hrARRRHzphPaIdWpFX2fxx%2F0smXdekS9ubvDtMhmjTvwWXHPvEW5orL4AQsXlfwmdtM4a6LSF9tOC7PIknrfYBqRNOvdLWgGsKcJoHEONA2qb0qra242%2B3oIMH99FstqOLT2VXF3zp2O7whmzyeQs%2B7OgQXC4shESDmdfWt0rq%2B7VH9WUV6PwVLFq%2B2NVN8yRzsgKHURwnmEjtk7GypKIaJdpa2r9V0xh74yqZ7%2F%2BKidBGReXGDNXj4kEemvjRN%2BBcBcoYToi6igxhKFyY9%2FAgBvpzgomJT%2FAX0HCpW%2F2EE9cOXwhFMsw%2FzbfS9CIj4fPt8UxTazQoFXM%2F49eSY0vyvZ0h8B7UfaC08RBBm1jww2NihKcFPv5UJBbJ1sJluRUd4CMKucq78GOqUBJUfXgppbMhe0NIqaPac6A0J7DTu%2Fw0eJdKC6N4bDkDH6h5nS5%2FdvuZdzJyhNL%2BisXF0qp6LhkedwkS7CpHBA3Kj2LQsga077w%2BmMUxhfHHMpHG3ttqNXKDyGfcVUFEMVV3BPgZKGrE%2FWAmuWpxqt9bQYsCfimrXgORV%2Fv8wgxc1zignegVsvvz3AtlsgYlKF6xwTqXWR%2BYHEbAu03HaiXEhXtOO4&X-Amz-Signature=11ba8df04db9859a6219b7f36f91b4927d245631a5af79a7d128610453e63812&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H63EDLY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGY2tPxxe6gPVG%2Fj8Zbt9A9VzLR7lD588Wxt71AHXutrAiEA57zhLxDNIZyyOBJLjDayymEY%2F6ZtPQcbS9niNl6fI%2FQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpigx5NB%2F4gsV078yrcA4EubOxTdo5d%2F3i19d7o1EtsGw2%2BbjQG%2BSJoR2KY9P3hDaiH1ORZWQokSnQEe%2FrgMV6IEWQhBGrxPe9QLAFfy8cph7%2F9y6Oow4RoFtygrWxf64s1a1BNfrVTj0XEidXiSxClr7oXma8d2F%2Fe6fItdJt14WADNvgu7YvLwzSLK%2F72c2JbMN3r1cIijmA4exHQooircZ5i2iWLVFz5aSlZtIFc26LP%2BLUS0qoV%2F1SgF%2B1wlFiD0YDTk6r2hrARRRHzphPaIdWpFX2fxx%2F0smXdekS9ubvDtMhmjTvwWXHPvEW5orL4AQsXlfwmdtM4a6LSF9tOC7PIknrfYBqRNOvdLWgGsKcJoHEONA2qb0qra242%2B3oIMH99FstqOLT2VXF3zp2O7whmzyeQs%2B7OgQXC4shESDmdfWt0rq%2B7VH9WUV6PwVLFq%2B2NVN8yRzsgKHURwnmEjtk7GypKIaJdpa2r9V0xh74yqZ7%2F%2BKidBGReXGDNXj4kEemvjRN%2BBcBcoYToi6igxhKFyY9%2FAgBvpzgomJT%2FAX0HCpW%2F2EE9cOXwhFMsw%2FzbfS9CIj4fPt8UxTazQoFXM%2F49eSY0vyvZ0h8B7UfaC08RBBm1jww2NihKcFPv5UJBbJ1sJluRUd4CMKucq78GOqUBJUfXgppbMhe0NIqaPac6A0J7DTu%2Fw0eJdKC6N4bDkDH6h5nS5%2FdvuZdzJyhNL%2BisXF0qp6LhkedwkS7CpHBA3Kj2LQsga077w%2BmMUxhfHHMpHG3ttqNXKDyGfcVUFEMVV3BPgZKGrE%2FWAmuWpxqt9bQYsCfimrXgORV%2Fv8wgxc1zignegVsvvz3AtlsgYlKF6xwTqXWR%2BYHEbAu03HaiXEhXtOO4&X-Amz-Signature=026632ff22b8100d84b5e6719e1f1d5cfb530e263e00dd5bc7c5029fe6d57d88&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H63EDLY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGY2tPxxe6gPVG%2Fj8Zbt9A9VzLR7lD588Wxt71AHXutrAiEA57zhLxDNIZyyOBJLjDayymEY%2F6ZtPQcbS9niNl6fI%2FQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpigx5NB%2F4gsV078yrcA4EubOxTdo5d%2F3i19d7o1EtsGw2%2BbjQG%2BSJoR2KY9P3hDaiH1ORZWQokSnQEe%2FrgMV6IEWQhBGrxPe9QLAFfy8cph7%2F9y6Oow4RoFtygrWxf64s1a1BNfrVTj0XEidXiSxClr7oXma8d2F%2Fe6fItdJt14WADNvgu7YvLwzSLK%2F72c2JbMN3r1cIijmA4exHQooircZ5i2iWLVFz5aSlZtIFc26LP%2BLUS0qoV%2F1SgF%2B1wlFiD0YDTk6r2hrARRRHzphPaIdWpFX2fxx%2F0smXdekS9ubvDtMhmjTvwWXHPvEW5orL4AQsXlfwmdtM4a6LSF9tOC7PIknrfYBqRNOvdLWgGsKcJoHEONA2qb0qra242%2B3oIMH99FstqOLT2VXF3zp2O7whmzyeQs%2B7OgQXC4shESDmdfWt0rq%2B7VH9WUV6PwVLFq%2B2NVN8yRzsgKHURwnmEjtk7GypKIaJdpa2r9V0xh74yqZ7%2F%2BKidBGReXGDNXj4kEemvjRN%2BBcBcoYToi6igxhKFyY9%2FAgBvpzgomJT%2FAX0HCpW%2F2EE9cOXwhFMsw%2FzbfS9CIj4fPt8UxTazQoFXM%2F49eSY0vyvZ0h8B7UfaC08RBBm1jww2NihKcFPv5UJBbJ1sJluRUd4CMKucq78GOqUBJUfXgppbMhe0NIqaPac6A0J7DTu%2Fw0eJdKC6N4bDkDH6h5nS5%2FdvuZdzJyhNL%2BisXF0qp6LhkedwkS7CpHBA3Kj2LQsga077w%2BmMUxhfHHMpHG3ttqNXKDyGfcVUFEMVV3BPgZKGrE%2FWAmuWpxqt9bQYsCfimrXgORV%2Fv8wgxc1zignegVsvvz3AtlsgYlKF6xwTqXWR%2BYHEbAu03HaiXEhXtOO4&X-Amz-Signature=8ed45a7e7fba11e0dec3ffa88c1d883c98a876561863b366bd77c82be25ab611&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H63EDLY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGY2tPxxe6gPVG%2Fj8Zbt9A9VzLR7lD588Wxt71AHXutrAiEA57zhLxDNIZyyOBJLjDayymEY%2F6ZtPQcbS9niNl6fI%2FQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpigx5NB%2F4gsV078yrcA4EubOxTdo5d%2F3i19d7o1EtsGw2%2BbjQG%2BSJoR2KY9P3hDaiH1ORZWQokSnQEe%2FrgMV6IEWQhBGrxPe9QLAFfy8cph7%2F9y6Oow4RoFtygrWxf64s1a1BNfrVTj0XEidXiSxClr7oXma8d2F%2Fe6fItdJt14WADNvgu7YvLwzSLK%2F72c2JbMN3r1cIijmA4exHQooircZ5i2iWLVFz5aSlZtIFc26LP%2BLUS0qoV%2F1SgF%2B1wlFiD0YDTk6r2hrARRRHzphPaIdWpFX2fxx%2F0smXdekS9ubvDtMhmjTvwWXHPvEW5orL4AQsXlfwmdtM4a6LSF9tOC7PIknrfYBqRNOvdLWgGsKcJoHEONA2qb0qra242%2B3oIMH99FstqOLT2VXF3zp2O7whmzyeQs%2B7OgQXC4shESDmdfWt0rq%2B7VH9WUV6PwVLFq%2B2NVN8yRzsgKHURwnmEjtk7GypKIaJdpa2r9V0xh74yqZ7%2F%2BKidBGReXGDNXj4kEemvjRN%2BBcBcoYToi6igxhKFyY9%2FAgBvpzgomJT%2FAX0HCpW%2F2EE9cOXwhFMsw%2FzbfS9CIj4fPt8UxTazQoFXM%2F49eSY0vyvZ0h8B7UfaC08RBBm1jww2NihKcFPv5UJBbJ1sJluRUd4CMKucq78GOqUBJUfXgppbMhe0NIqaPac6A0J7DTu%2Fw0eJdKC6N4bDkDH6h5nS5%2FdvuZdzJyhNL%2BisXF0qp6LhkedwkS7CpHBA3Kj2LQsga077w%2BmMUxhfHHMpHG3ttqNXKDyGfcVUFEMVV3BPgZKGrE%2FWAmuWpxqt9bQYsCfimrXgORV%2Fv8wgxc1zignegVsvvz3AtlsgYlKF6xwTqXWR%2BYHEbAu03HaiXEhXtOO4&X-Amz-Signature=fc902eb8943583e0d423b3f00fe7c4630c619e2ee822d5645944ed152d90a862&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H63EDLY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGY2tPxxe6gPVG%2Fj8Zbt9A9VzLR7lD588Wxt71AHXutrAiEA57zhLxDNIZyyOBJLjDayymEY%2F6ZtPQcbS9niNl6fI%2FQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpigx5NB%2F4gsV078yrcA4EubOxTdo5d%2F3i19d7o1EtsGw2%2BbjQG%2BSJoR2KY9P3hDaiH1ORZWQokSnQEe%2FrgMV6IEWQhBGrxPe9QLAFfy8cph7%2F9y6Oow4RoFtygrWxf64s1a1BNfrVTj0XEidXiSxClr7oXma8d2F%2Fe6fItdJt14WADNvgu7YvLwzSLK%2F72c2JbMN3r1cIijmA4exHQooircZ5i2iWLVFz5aSlZtIFc26LP%2BLUS0qoV%2F1SgF%2B1wlFiD0YDTk6r2hrARRRHzphPaIdWpFX2fxx%2F0smXdekS9ubvDtMhmjTvwWXHPvEW5orL4AQsXlfwmdtM4a6LSF9tOC7PIknrfYBqRNOvdLWgGsKcJoHEONA2qb0qra242%2B3oIMH99FstqOLT2VXF3zp2O7whmzyeQs%2B7OgQXC4shESDmdfWt0rq%2B7VH9WUV6PwVLFq%2B2NVN8yRzsgKHURwnmEjtk7GypKIaJdpa2r9V0xh74yqZ7%2F%2BKidBGReXGDNXj4kEemvjRN%2BBcBcoYToi6igxhKFyY9%2FAgBvpzgomJT%2FAX0HCpW%2F2EE9cOXwhFMsw%2FzbfS9CIj4fPt8UxTazQoFXM%2F49eSY0vyvZ0h8B7UfaC08RBBm1jww2NihKcFPv5UJBbJ1sJluRUd4CMKucq78GOqUBJUfXgppbMhe0NIqaPac6A0J7DTu%2Fw0eJdKC6N4bDkDH6h5nS5%2FdvuZdzJyhNL%2BisXF0qp6LhkedwkS7CpHBA3Kj2LQsga077w%2BmMUxhfHHMpHG3ttqNXKDyGfcVUFEMVV3BPgZKGrE%2FWAmuWpxqt9bQYsCfimrXgORV%2Fv8wgxc1zignegVsvvz3AtlsgYlKF6xwTqXWR%2BYHEbAu03HaiXEhXtOO4&X-Amz-Signature=9c0e43d949b4b87b969138e817c0694f1c3d603b3e35f4357bed6c35545e8296&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H63EDLY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGY2tPxxe6gPVG%2Fj8Zbt9A9VzLR7lD588Wxt71AHXutrAiEA57zhLxDNIZyyOBJLjDayymEY%2F6ZtPQcbS9niNl6fI%2FQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpigx5NB%2F4gsV078yrcA4EubOxTdo5d%2F3i19d7o1EtsGw2%2BbjQG%2BSJoR2KY9P3hDaiH1ORZWQokSnQEe%2FrgMV6IEWQhBGrxPe9QLAFfy8cph7%2F9y6Oow4RoFtygrWxf64s1a1BNfrVTj0XEidXiSxClr7oXma8d2F%2Fe6fItdJt14WADNvgu7YvLwzSLK%2F72c2JbMN3r1cIijmA4exHQooircZ5i2iWLVFz5aSlZtIFc26LP%2BLUS0qoV%2F1SgF%2B1wlFiD0YDTk6r2hrARRRHzphPaIdWpFX2fxx%2F0smXdekS9ubvDtMhmjTvwWXHPvEW5orL4AQsXlfwmdtM4a6LSF9tOC7PIknrfYBqRNOvdLWgGsKcJoHEONA2qb0qra242%2B3oIMH99FstqOLT2VXF3zp2O7whmzyeQs%2B7OgQXC4shESDmdfWt0rq%2B7VH9WUV6PwVLFq%2B2NVN8yRzsgKHURwnmEjtk7GypKIaJdpa2r9V0xh74yqZ7%2F%2BKidBGReXGDNXj4kEemvjRN%2BBcBcoYToi6igxhKFyY9%2FAgBvpzgomJT%2FAX0HCpW%2F2EE9cOXwhFMsw%2FzbfS9CIj4fPt8UxTazQoFXM%2F49eSY0vyvZ0h8B7UfaC08RBBm1jww2NihKcFPv5UJBbJ1sJluRUd4CMKucq78GOqUBJUfXgppbMhe0NIqaPac6A0J7DTu%2Fw0eJdKC6N4bDkDH6h5nS5%2FdvuZdzJyhNL%2BisXF0qp6LhkedwkS7CpHBA3Kj2LQsga077w%2BmMUxhfHHMpHG3ttqNXKDyGfcVUFEMVV3BPgZKGrE%2FWAmuWpxqt9bQYsCfimrXgORV%2Fv8wgxc1zignegVsvvz3AtlsgYlKF6xwTqXWR%2BYHEbAu03HaiXEhXtOO4&X-Amz-Signature=bcf7ce15f95ffad4542e4b63170f73f975bc8a7c03a7a230a9c48e653b62fdb9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H63EDLY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGY2tPxxe6gPVG%2Fj8Zbt9A9VzLR7lD588Wxt71AHXutrAiEA57zhLxDNIZyyOBJLjDayymEY%2F6ZtPQcbS9niNl6fI%2FQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpigx5NB%2F4gsV078yrcA4EubOxTdo5d%2F3i19d7o1EtsGw2%2BbjQG%2BSJoR2KY9P3hDaiH1ORZWQokSnQEe%2FrgMV6IEWQhBGrxPe9QLAFfy8cph7%2F9y6Oow4RoFtygrWxf64s1a1BNfrVTj0XEidXiSxClr7oXma8d2F%2Fe6fItdJt14WADNvgu7YvLwzSLK%2F72c2JbMN3r1cIijmA4exHQooircZ5i2iWLVFz5aSlZtIFc26LP%2BLUS0qoV%2F1SgF%2B1wlFiD0YDTk6r2hrARRRHzphPaIdWpFX2fxx%2F0smXdekS9ubvDtMhmjTvwWXHPvEW5orL4AQsXlfwmdtM4a6LSF9tOC7PIknrfYBqRNOvdLWgGsKcJoHEONA2qb0qra242%2B3oIMH99FstqOLT2VXF3zp2O7whmzyeQs%2B7OgQXC4shESDmdfWt0rq%2B7VH9WUV6PwVLFq%2B2NVN8yRzsgKHURwnmEjtk7GypKIaJdpa2r9V0xh74yqZ7%2F%2BKidBGReXGDNXj4kEemvjRN%2BBcBcoYToi6igxhKFyY9%2FAgBvpzgomJT%2FAX0HCpW%2F2EE9cOXwhFMsw%2FzbfS9CIj4fPt8UxTazQoFXM%2F49eSY0vyvZ0h8B7UfaC08RBBm1jww2NihKcFPv5UJBbJ1sJluRUd4CMKucq78GOqUBJUfXgppbMhe0NIqaPac6A0J7DTu%2Fw0eJdKC6N4bDkDH6h5nS5%2FdvuZdzJyhNL%2BisXF0qp6LhkedwkS7CpHBA3Kj2LQsga077w%2BmMUxhfHHMpHG3ttqNXKDyGfcVUFEMVV3BPgZKGrE%2FWAmuWpxqt9bQYsCfimrXgORV%2Fv8wgxc1zignegVsvvz3AtlsgYlKF6xwTqXWR%2BYHEbAu03HaiXEhXtOO4&X-Amz-Signature=59b9db086d56d624d832e4f8ae969a854de251319123bb24eab93149c8ff7338&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
