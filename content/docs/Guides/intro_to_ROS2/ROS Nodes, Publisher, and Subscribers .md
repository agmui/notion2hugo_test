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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYPLBXE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD1q3YZrqkJyAg%2FUEnLHizOxsEfwGjXh%2F%2BD3ada%2F41CnQIhAJu%2FFdp%2BhBKaulz%2BSuMK4WUu5LHaYm5zlAbY7gBjLS41KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwELdOvGXDQs9RHwD4q3APxZFUWG6sXwD8S7hKKgtuGElFfrkNHoQfXl6WQhPXwsu4W6J8mLNSPfRcQErBQVy6Krj3i%2B%2Bw5UI9fsn9LVGH%2FtNApLY3KfSgDniLOrYX%2F6GqngrWJFwOFXZSutcrJ8MBFCSp0Hkg4bIFa%2FsGR%2Bv3LBqTCyNCsEkDbUGLK7SBzYmj5t7EoQM3PlwGL7EJtViTmwQDfVO%2F2jeL6yxGqG2ugK84frgavD2OKV%2FA5dzdYGN6kYA9VR5Juu8ctVbo0rKyWmyx3i%2BWWENVtm4I%2Bll2L4%2BeKD4GerXPigtifktHEjty6VR4WDYHjIpKbdAj%2F0cLi4weOTja5yuxhI3a70dL65rQgks8Wha2E6etGanEUa8Mo4fbCAFmn4h6vqqfpviyRhpe1S50bp9BSvsanghpI7J8s94iWEEVV1UAqL7rKQ5quM80XQwGDKHOM7QXOvvdssa6FaXY8IUtTvvRBNmCwa%2F4917TjJPTCZYNxk78Dgx6VT%2BWZkZqrwjlKO370KokSIiFh9KnwN2Yj6bfyg8NxjalSq0hMrHqfL9Eatv8s2LEFavWUDUk%2FYp3SmXG2UbqJDoWPvxrAAL%2BYGBrqGJlRgnm5dWYMPqmMelv1kBKMQJc5HEf%2BU%2FlHj4kkQDCtlsfABjqkAV4LUYt%2Bu6Uox755j3oSSWwVtAl7SRvOvVGOKbHJ%2FeVGudTlt5IZSFY4aeP%2BgFIeZsCwtX3xGcUf%2FSLmeEdXv8rD0sc8ISjhhYh6Zy8g2jn%2BZy0afWsjDpmHlZf6ovkwGPZ%2BiIC1QOjDTcD0D%2BiKfjYFMIct5Yp8Qwwvww2JwlIBOd54DFC6TEgicJekNlxaiHUCEYuI5TO7ullL3sSW%2BySNTsuN&X-Amz-Signature=646f93bc7ac4fc6c39c7a866a6549ae1f774310d4de30f98a60ba5081400559f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYPLBXE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD1q3YZrqkJyAg%2FUEnLHizOxsEfwGjXh%2F%2BD3ada%2F41CnQIhAJu%2FFdp%2BhBKaulz%2BSuMK4WUu5LHaYm5zlAbY7gBjLS41KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwELdOvGXDQs9RHwD4q3APxZFUWG6sXwD8S7hKKgtuGElFfrkNHoQfXl6WQhPXwsu4W6J8mLNSPfRcQErBQVy6Krj3i%2B%2Bw5UI9fsn9LVGH%2FtNApLY3KfSgDniLOrYX%2F6GqngrWJFwOFXZSutcrJ8MBFCSp0Hkg4bIFa%2FsGR%2Bv3LBqTCyNCsEkDbUGLK7SBzYmj5t7EoQM3PlwGL7EJtViTmwQDfVO%2F2jeL6yxGqG2ugK84frgavD2OKV%2FA5dzdYGN6kYA9VR5Juu8ctVbo0rKyWmyx3i%2BWWENVtm4I%2Bll2L4%2BeKD4GerXPigtifktHEjty6VR4WDYHjIpKbdAj%2F0cLi4weOTja5yuxhI3a70dL65rQgks8Wha2E6etGanEUa8Mo4fbCAFmn4h6vqqfpviyRhpe1S50bp9BSvsanghpI7J8s94iWEEVV1UAqL7rKQ5quM80XQwGDKHOM7QXOvvdssa6FaXY8IUtTvvRBNmCwa%2F4917TjJPTCZYNxk78Dgx6VT%2BWZkZqrwjlKO370KokSIiFh9KnwN2Yj6bfyg8NxjalSq0hMrHqfL9Eatv8s2LEFavWUDUk%2FYp3SmXG2UbqJDoWPvxrAAL%2BYGBrqGJlRgnm5dWYMPqmMelv1kBKMQJc5HEf%2BU%2FlHj4kkQDCtlsfABjqkAV4LUYt%2Bu6Uox755j3oSSWwVtAl7SRvOvVGOKbHJ%2FeVGudTlt5IZSFY4aeP%2BgFIeZsCwtX3xGcUf%2FSLmeEdXv8rD0sc8ISjhhYh6Zy8g2jn%2BZy0afWsjDpmHlZf6ovkwGPZ%2BiIC1QOjDTcD0D%2BiKfjYFMIct5Yp8Qwwvww2JwlIBOd54DFC6TEgicJekNlxaiHUCEYuI5TO7ullL3sSW%2BySNTsuN&X-Amz-Signature=05c6f904118d4a69bd635efe20a0ca2509054362752b91c9f13212e98503a220&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYPLBXE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD1q3YZrqkJyAg%2FUEnLHizOxsEfwGjXh%2F%2BD3ada%2F41CnQIhAJu%2FFdp%2BhBKaulz%2BSuMK4WUu5LHaYm5zlAbY7gBjLS41KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwELdOvGXDQs9RHwD4q3APxZFUWG6sXwD8S7hKKgtuGElFfrkNHoQfXl6WQhPXwsu4W6J8mLNSPfRcQErBQVy6Krj3i%2B%2Bw5UI9fsn9LVGH%2FtNApLY3KfSgDniLOrYX%2F6GqngrWJFwOFXZSutcrJ8MBFCSp0Hkg4bIFa%2FsGR%2Bv3LBqTCyNCsEkDbUGLK7SBzYmj5t7EoQM3PlwGL7EJtViTmwQDfVO%2F2jeL6yxGqG2ugK84frgavD2OKV%2FA5dzdYGN6kYA9VR5Juu8ctVbo0rKyWmyx3i%2BWWENVtm4I%2Bll2L4%2BeKD4GerXPigtifktHEjty6VR4WDYHjIpKbdAj%2F0cLi4weOTja5yuxhI3a70dL65rQgks8Wha2E6etGanEUa8Mo4fbCAFmn4h6vqqfpviyRhpe1S50bp9BSvsanghpI7J8s94iWEEVV1UAqL7rKQ5quM80XQwGDKHOM7QXOvvdssa6FaXY8IUtTvvRBNmCwa%2F4917TjJPTCZYNxk78Dgx6VT%2BWZkZqrwjlKO370KokSIiFh9KnwN2Yj6bfyg8NxjalSq0hMrHqfL9Eatv8s2LEFavWUDUk%2FYp3SmXG2UbqJDoWPvxrAAL%2BYGBrqGJlRgnm5dWYMPqmMelv1kBKMQJc5HEf%2BU%2FlHj4kkQDCtlsfABjqkAV4LUYt%2Bu6Uox755j3oSSWwVtAl7SRvOvVGOKbHJ%2FeVGudTlt5IZSFY4aeP%2BgFIeZsCwtX3xGcUf%2FSLmeEdXv8rD0sc8ISjhhYh6Zy8g2jn%2BZy0afWsjDpmHlZf6ovkwGPZ%2BiIC1QOjDTcD0D%2BiKfjYFMIct5Yp8Qwwvww2JwlIBOd54DFC6TEgicJekNlxaiHUCEYuI5TO7ullL3sSW%2BySNTsuN&X-Amz-Signature=c8c844834768317d11569063d09ae24ab0cb377d8d6611650a4efea8d6bb581c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYPLBXE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD1q3YZrqkJyAg%2FUEnLHizOxsEfwGjXh%2F%2BD3ada%2F41CnQIhAJu%2FFdp%2BhBKaulz%2BSuMK4WUu5LHaYm5zlAbY7gBjLS41KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwELdOvGXDQs9RHwD4q3APxZFUWG6sXwD8S7hKKgtuGElFfrkNHoQfXl6WQhPXwsu4W6J8mLNSPfRcQErBQVy6Krj3i%2B%2Bw5UI9fsn9LVGH%2FtNApLY3KfSgDniLOrYX%2F6GqngrWJFwOFXZSutcrJ8MBFCSp0Hkg4bIFa%2FsGR%2Bv3LBqTCyNCsEkDbUGLK7SBzYmj5t7EoQM3PlwGL7EJtViTmwQDfVO%2F2jeL6yxGqG2ugK84frgavD2OKV%2FA5dzdYGN6kYA9VR5Juu8ctVbo0rKyWmyx3i%2BWWENVtm4I%2Bll2L4%2BeKD4GerXPigtifktHEjty6VR4WDYHjIpKbdAj%2F0cLi4weOTja5yuxhI3a70dL65rQgks8Wha2E6etGanEUa8Mo4fbCAFmn4h6vqqfpviyRhpe1S50bp9BSvsanghpI7J8s94iWEEVV1UAqL7rKQ5quM80XQwGDKHOM7QXOvvdssa6FaXY8IUtTvvRBNmCwa%2F4917TjJPTCZYNxk78Dgx6VT%2BWZkZqrwjlKO370KokSIiFh9KnwN2Yj6bfyg8NxjalSq0hMrHqfL9Eatv8s2LEFavWUDUk%2FYp3SmXG2UbqJDoWPvxrAAL%2BYGBrqGJlRgnm5dWYMPqmMelv1kBKMQJc5HEf%2BU%2FlHj4kkQDCtlsfABjqkAV4LUYt%2Bu6Uox755j3oSSWwVtAl7SRvOvVGOKbHJ%2FeVGudTlt5IZSFY4aeP%2BgFIeZsCwtX3xGcUf%2FSLmeEdXv8rD0sc8ISjhhYh6Zy8g2jn%2BZy0afWsjDpmHlZf6ovkwGPZ%2BiIC1QOjDTcD0D%2BiKfjYFMIct5Yp8Qwwvww2JwlIBOd54DFC6TEgicJekNlxaiHUCEYuI5TO7ullL3sSW%2BySNTsuN&X-Amz-Signature=ae7bb92ab4c84d68fdf79e67c876d0be51803e90dcde1bfa02b70258b232c031&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYPLBXE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD1q3YZrqkJyAg%2FUEnLHizOxsEfwGjXh%2F%2BD3ada%2F41CnQIhAJu%2FFdp%2BhBKaulz%2BSuMK4WUu5LHaYm5zlAbY7gBjLS41KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwELdOvGXDQs9RHwD4q3APxZFUWG6sXwD8S7hKKgtuGElFfrkNHoQfXl6WQhPXwsu4W6J8mLNSPfRcQErBQVy6Krj3i%2B%2Bw5UI9fsn9LVGH%2FtNApLY3KfSgDniLOrYX%2F6GqngrWJFwOFXZSutcrJ8MBFCSp0Hkg4bIFa%2FsGR%2Bv3LBqTCyNCsEkDbUGLK7SBzYmj5t7EoQM3PlwGL7EJtViTmwQDfVO%2F2jeL6yxGqG2ugK84frgavD2OKV%2FA5dzdYGN6kYA9VR5Juu8ctVbo0rKyWmyx3i%2BWWENVtm4I%2Bll2L4%2BeKD4GerXPigtifktHEjty6VR4WDYHjIpKbdAj%2F0cLi4weOTja5yuxhI3a70dL65rQgks8Wha2E6etGanEUa8Mo4fbCAFmn4h6vqqfpviyRhpe1S50bp9BSvsanghpI7J8s94iWEEVV1UAqL7rKQ5quM80XQwGDKHOM7QXOvvdssa6FaXY8IUtTvvRBNmCwa%2F4917TjJPTCZYNxk78Dgx6VT%2BWZkZqrwjlKO370KokSIiFh9KnwN2Yj6bfyg8NxjalSq0hMrHqfL9Eatv8s2LEFavWUDUk%2FYp3SmXG2UbqJDoWPvxrAAL%2BYGBrqGJlRgnm5dWYMPqmMelv1kBKMQJc5HEf%2BU%2FlHj4kkQDCtlsfABjqkAV4LUYt%2Bu6Uox755j3oSSWwVtAl7SRvOvVGOKbHJ%2FeVGudTlt5IZSFY4aeP%2BgFIeZsCwtX3xGcUf%2FSLmeEdXv8rD0sc8ISjhhYh6Zy8g2jn%2BZy0afWsjDpmHlZf6ovkwGPZ%2BiIC1QOjDTcD0D%2BiKfjYFMIct5Yp8Qwwvww2JwlIBOd54DFC6TEgicJekNlxaiHUCEYuI5TO7ullL3sSW%2BySNTsuN&X-Amz-Signature=23e4f74f2bae3cd4c957429779ecfcaf747cc636fdd52e1f1c71c29c1df8a32b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYPLBXE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD1q3YZrqkJyAg%2FUEnLHizOxsEfwGjXh%2F%2BD3ada%2F41CnQIhAJu%2FFdp%2BhBKaulz%2BSuMK4WUu5LHaYm5zlAbY7gBjLS41KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwELdOvGXDQs9RHwD4q3APxZFUWG6sXwD8S7hKKgtuGElFfrkNHoQfXl6WQhPXwsu4W6J8mLNSPfRcQErBQVy6Krj3i%2B%2Bw5UI9fsn9LVGH%2FtNApLY3KfSgDniLOrYX%2F6GqngrWJFwOFXZSutcrJ8MBFCSp0Hkg4bIFa%2FsGR%2Bv3LBqTCyNCsEkDbUGLK7SBzYmj5t7EoQM3PlwGL7EJtViTmwQDfVO%2F2jeL6yxGqG2ugK84frgavD2OKV%2FA5dzdYGN6kYA9VR5Juu8ctVbo0rKyWmyx3i%2BWWENVtm4I%2Bll2L4%2BeKD4GerXPigtifktHEjty6VR4WDYHjIpKbdAj%2F0cLi4weOTja5yuxhI3a70dL65rQgks8Wha2E6etGanEUa8Mo4fbCAFmn4h6vqqfpviyRhpe1S50bp9BSvsanghpI7J8s94iWEEVV1UAqL7rKQ5quM80XQwGDKHOM7QXOvvdssa6FaXY8IUtTvvRBNmCwa%2F4917TjJPTCZYNxk78Dgx6VT%2BWZkZqrwjlKO370KokSIiFh9KnwN2Yj6bfyg8NxjalSq0hMrHqfL9Eatv8s2LEFavWUDUk%2FYp3SmXG2UbqJDoWPvxrAAL%2BYGBrqGJlRgnm5dWYMPqmMelv1kBKMQJc5HEf%2BU%2FlHj4kkQDCtlsfABjqkAV4LUYt%2Bu6Uox755j3oSSWwVtAl7SRvOvVGOKbHJ%2FeVGudTlt5IZSFY4aeP%2BgFIeZsCwtX3xGcUf%2FSLmeEdXv8rD0sc8ISjhhYh6Zy8g2jn%2BZy0afWsjDpmHlZf6ovkwGPZ%2BiIC1QOjDTcD0D%2BiKfjYFMIct5Yp8Qwwvww2JwlIBOd54DFC6TEgicJekNlxaiHUCEYuI5TO7ullL3sSW%2BySNTsuN&X-Amz-Signature=42254a406c004f65ac0b39983fe7c9a18203e78233bae90b49ed1c76ad030edb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYPLBXE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD1q3YZrqkJyAg%2FUEnLHizOxsEfwGjXh%2F%2BD3ada%2F41CnQIhAJu%2FFdp%2BhBKaulz%2BSuMK4WUu5LHaYm5zlAbY7gBjLS41KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwELdOvGXDQs9RHwD4q3APxZFUWG6sXwD8S7hKKgtuGElFfrkNHoQfXl6WQhPXwsu4W6J8mLNSPfRcQErBQVy6Krj3i%2B%2Bw5UI9fsn9LVGH%2FtNApLY3KfSgDniLOrYX%2F6GqngrWJFwOFXZSutcrJ8MBFCSp0Hkg4bIFa%2FsGR%2Bv3LBqTCyNCsEkDbUGLK7SBzYmj5t7EoQM3PlwGL7EJtViTmwQDfVO%2F2jeL6yxGqG2ugK84frgavD2OKV%2FA5dzdYGN6kYA9VR5Juu8ctVbo0rKyWmyx3i%2BWWENVtm4I%2Bll2L4%2BeKD4GerXPigtifktHEjty6VR4WDYHjIpKbdAj%2F0cLi4weOTja5yuxhI3a70dL65rQgks8Wha2E6etGanEUa8Mo4fbCAFmn4h6vqqfpviyRhpe1S50bp9BSvsanghpI7J8s94iWEEVV1UAqL7rKQ5quM80XQwGDKHOM7QXOvvdssa6FaXY8IUtTvvRBNmCwa%2F4917TjJPTCZYNxk78Dgx6VT%2BWZkZqrwjlKO370KokSIiFh9KnwN2Yj6bfyg8NxjalSq0hMrHqfL9Eatv8s2LEFavWUDUk%2FYp3SmXG2UbqJDoWPvxrAAL%2BYGBrqGJlRgnm5dWYMPqmMelv1kBKMQJc5HEf%2BU%2FlHj4kkQDCtlsfABjqkAV4LUYt%2Bu6Uox755j3oSSWwVtAl7SRvOvVGOKbHJ%2FeVGudTlt5IZSFY4aeP%2BgFIeZsCwtX3xGcUf%2FSLmeEdXv8rD0sc8ISjhhYh6Zy8g2jn%2BZy0afWsjDpmHlZf6ovkwGPZ%2BiIC1QOjDTcD0D%2BiKfjYFMIct5Yp8Qwwvww2JwlIBOd54DFC6TEgicJekNlxaiHUCEYuI5TO7ullL3sSW%2BySNTsuN&X-Amz-Signature=6bb6ae6ffc81135bf5f73b4ebdbb20cfe1fe574a53d4ae63579af7fd393cf603&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYPLBXE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD1q3YZrqkJyAg%2FUEnLHizOxsEfwGjXh%2F%2BD3ada%2F41CnQIhAJu%2FFdp%2BhBKaulz%2BSuMK4WUu5LHaYm5zlAbY7gBjLS41KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwELdOvGXDQs9RHwD4q3APxZFUWG6sXwD8S7hKKgtuGElFfrkNHoQfXl6WQhPXwsu4W6J8mLNSPfRcQErBQVy6Krj3i%2B%2Bw5UI9fsn9LVGH%2FtNApLY3KfSgDniLOrYX%2F6GqngrWJFwOFXZSutcrJ8MBFCSp0Hkg4bIFa%2FsGR%2Bv3LBqTCyNCsEkDbUGLK7SBzYmj5t7EoQM3PlwGL7EJtViTmwQDfVO%2F2jeL6yxGqG2ugK84frgavD2OKV%2FA5dzdYGN6kYA9VR5Juu8ctVbo0rKyWmyx3i%2BWWENVtm4I%2Bll2L4%2BeKD4GerXPigtifktHEjty6VR4WDYHjIpKbdAj%2F0cLi4weOTja5yuxhI3a70dL65rQgks8Wha2E6etGanEUa8Mo4fbCAFmn4h6vqqfpviyRhpe1S50bp9BSvsanghpI7J8s94iWEEVV1UAqL7rKQ5quM80XQwGDKHOM7QXOvvdssa6FaXY8IUtTvvRBNmCwa%2F4917TjJPTCZYNxk78Dgx6VT%2BWZkZqrwjlKO370KokSIiFh9KnwN2Yj6bfyg8NxjalSq0hMrHqfL9Eatv8s2LEFavWUDUk%2FYp3SmXG2UbqJDoWPvxrAAL%2BYGBrqGJlRgnm5dWYMPqmMelv1kBKMQJc5HEf%2BU%2FlHj4kkQDCtlsfABjqkAV4LUYt%2Bu6Uox755j3oSSWwVtAl7SRvOvVGOKbHJ%2FeVGudTlt5IZSFY4aeP%2BgFIeZsCwtX3xGcUf%2FSLmeEdXv8rD0sc8ISjhhYh6Zy8g2jn%2BZy0afWsjDpmHlZf6ovkwGPZ%2BiIC1QOjDTcD0D%2BiKfjYFMIct5Yp8Qwwvww2JwlIBOd54DFC6TEgicJekNlxaiHUCEYuI5TO7ullL3sSW%2BySNTsuN&X-Amz-Signature=93cdf3020d4caf7c5329402c17136768f7817e92f500ca6e084f23eaef0188be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
