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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IDQZDW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4KS89A1u9WhfQ2lgTy%2BYLQ69tlx1wa3xYdv18XdjZWAiACoReBiH%2FI6d2bFfnG2ng1PvEezQcy3A67PDraZpD8Jir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMf1WOn%2BvkhLLSpIZfKtwDQMNZlwqmLetAKxOoB%2B5264k5F7WCCPJQo%2BHpgfyhrZ9BZFdfjzPKEtEpIFg5x5OnDQXiFc%2BmMxiFrgSYedhnMSoUo5cqLuj1fFMEXtVaEY6mVIJvH5NJ2eqoylQ%2FHxrbKcrIMO5T7lAeljqqPW69LKROn5Ad1tXgU5WUuHEiOiwvK5i6sYS4yxkvc7xWNtty29NnJfKiHvPVgjVuNsj4zV0wgGN4b43U8c%2Fugiu314QXPyrufVtWeEd2lC7pcF6a8N3l3anQ3IXE3hVBjsHeZebwYgQ7iN1pM0bQi4LhWK8D%2F2x8eLJt0d9gq3koPk39RBy9Ynot2DuLIvfhIYQ1vPgWPOLnRQq3O0it5s3IQI17wCezipijwHSyhjBU66enxvSmduC63Qj1WbGYsCuMdLP5OBs69rL7jr2La5g%2B25A9KmjHy0Gix%2Fyxa0E57KJF5%2BD4mFqjZyUUC5RH2NX5wNKQbADxYLMVy2Sa2TaNVqAzS8vd0eZjSGQgDsDywqK72%2FGSLcKrJdgwVmwGJACL714TZyXqDHwSgn2RH%2Fc%2B8vNzJ%2FQk0sDGzbALknn5FMOZGA30aTwL8cehIz8jrji%2FNLjd%2B4Utms1eqRjGq7oYYPlkixrvnTYXZid5lUUwmv2lwQY6pgHlSfnza8ntGt%2BIXckVmLuNI7BFjWans78RqoF3vfxme0PO0ogadvmdCk9%2BaSQ5Mse639VKKpoJg%2BYLFqI6cygAA8AiHOhP8qVc9cwbdbGM8%2BcvAGc4JnK7KRtOoGv%2BEQUXKO4g4a2lhdZUih2J6CDQZM%2Bz%2B%2F13VDmgGEfI8JYhIzuJgUo5MVlLnBAo8aVr5VXkl%2FYFGORYIQ40PGqnJOZ3fjNe1UoX&X-Amz-Signature=dca356885ba3645a28b5fc3b34b6f8a95d913b320603d513b5b2844a3a7a64e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IDQZDW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4KS89A1u9WhfQ2lgTy%2BYLQ69tlx1wa3xYdv18XdjZWAiACoReBiH%2FI6d2bFfnG2ng1PvEezQcy3A67PDraZpD8Jir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMf1WOn%2BvkhLLSpIZfKtwDQMNZlwqmLetAKxOoB%2B5264k5F7WCCPJQo%2BHpgfyhrZ9BZFdfjzPKEtEpIFg5x5OnDQXiFc%2BmMxiFrgSYedhnMSoUo5cqLuj1fFMEXtVaEY6mVIJvH5NJ2eqoylQ%2FHxrbKcrIMO5T7lAeljqqPW69LKROn5Ad1tXgU5WUuHEiOiwvK5i6sYS4yxkvc7xWNtty29NnJfKiHvPVgjVuNsj4zV0wgGN4b43U8c%2Fugiu314QXPyrufVtWeEd2lC7pcF6a8N3l3anQ3IXE3hVBjsHeZebwYgQ7iN1pM0bQi4LhWK8D%2F2x8eLJt0d9gq3koPk39RBy9Ynot2DuLIvfhIYQ1vPgWPOLnRQq3O0it5s3IQI17wCezipijwHSyhjBU66enxvSmduC63Qj1WbGYsCuMdLP5OBs69rL7jr2La5g%2B25A9KmjHy0Gix%2Fyxa0E57KJF5%2BD4mFqjZyUUC5RH2NX5wNKQbADxYLMVy2Sa2TaNVqAzS8vd0eZjSGQgDsDywqK72%2FGSLcKrJdgwVmwGJACL714TZyXqDHwSgn2RH%2Fc%2B8vNzJ%2FQk0sDGzbALknn5FMOZGA30aTwL8cehIz8jrji%2FNLjd%2B4Utms1eqRjGq7oYYPlkixrvnTYXZid5lUUwmv2lwQY6pgHlSfnza8ntGt%2BIXckVmLuNI7BFjWans78RqoF3vfxme0PO0ogadvmdCk9%2BaSQ5Mse639VKKpoJg%2BYLFqI6cygAA8AiHOhP8qVc9cwbdbGM8%2BcvAGc4JnK7KRtOoGv%2BEQUXKO4g4a2lhdZUih2J6CDQZM%2Bz%2B%2F13VDmgGEfI8JYhIzuJgUo5MVlLnBAo8aVr5VXkl%2FYFGORYIQ40PGqnJOZ3fjNe1UoX&X-Amz-Signature=ddb52bc84e48f1a6ab318ec7ebd28d17d661b30eecc3dcfa00581987bef58672&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IDQZDW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4KS89A1u9WhfQ2lgTy%2BYLQ69tlx1wa3xYdv18XdjZWAiACoReBiH%2FI6d2bFfnG2ng1PvEezQcy3A67PDraZpD8Jir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMf1WOn%2BvkhLLSpIZfKtwDQMNZlwqmLetAKxOoB%2B5264k5F7WCCPJQo%2BHpgfyhrZ9BZFdfjzPKEtEpIFg5x5OnDQXiFc%2BmMxiFrgSYedhnMSoUo5cqLuj1fFMEXtVaEY6mVIJvH5NJ2eqoylQ%2FHxrbKcrIMO5T7lAeljqqPW69LKROn5Ad1tXgU5WUuHEiOiwvK5i6sYS4yxkvc7xWNtty29NnJfKiHvPVgjVuNsj4zV0wgGN4b43U8c%2Fugiu314QXPyrufVtWeEd2lC7pcF6a8N3l3anQ3IXE3hVBjsHeZebwYgQ7iN1pM0bQi4LhWK8D%2F2x8eLJt0d9gq3koPk39RBy9Ynot2DuLIvfhIYQ1vPgWPOLnRQq3O0it5s3IQI17wCezipijwHSyhjBU66enxvSmduC63Qj1WbGYsCuMdLP5OBs69rL7jr2La5g%2B25A9KmjHy0Gix%2Fyxa0E57KJF5%2BD4mFqjZyUUC5RH2NX5wNKQbADxYLMVy2Sa2TaNVqAzS8vd0eZjSGQgDsDywqK72%2FGSLcKrJdgwVmwGJACL714TZyXqDHwSgn2RH%2Fc%2B8vNzJ%2FQk0sDGzbALknn5FMOZGA30aTwL8cehIz8jrji%2FNLjd%2B4Utms1eqRjGq7oYYPlkixrvnTYXZid5lUUwmv2lwQY6pgHlSfnza8ntGt%2BIXckVmLuNI7BFjWans78RqoF3vfxme0PO0ogadvmdCk9%2BaSQ5Mse639VKKpoJg%2BYLFqI6cygAA8AiHOhP8qVc9cwbdbGM8%2BcvAGc4JnK7KRtOoGv%2BEQUXKO4g4a2lhdZUih2J6CDQZM%2Bz%2B%2F13VDmgGEfI8JYhIzuJgUo5MVlLnBAo8aVr5VXkl%2FYFGORYIQ40PGqnJOZ3fjNe1UoX&X-Amz-Signature=4e2f01b5b83c31bc75578f39aa6d34d0411e97cbf2d7d2deb45fe144a8550782&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IDQZDW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4KS89A1u9WhfQ2lgTy%2BYLQ69tlx1wa3xYdv18XdjZWAiACoReBiH%2FI6d2bFfnG2ng1PvEezQcy3A67PDraZpD8Jir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMf1WOn%2BvkhLLSpIZfKtwDQMNZlwqmLetAKxOoB%2B5264k5F7WCCPJQo%2BHpgfyhrZ9BZFdfjzPKEtEpIFg5x5OnDQXiFc%2BmMxiFrgSYedhnMSoUo5cqLuj1fFMEXtVaEY6mVIJvH5NJ2eqoylQ%2FHxrbKcrIMO5T7lAeljqqPW69LKROn5Ad1tXgU5WUuHEiOiwvK5i6sYS4yxkvc7xWNtty29NnJfKiHvPVgjVuNsj4zV0wgGN4b43U8c%2Fugiu314QXPyrufVtWeEd2lC7pcF6a8N3l3anQ3IXE3hVBjsHeZebwYgQ7iN1pM0bQi4LhWK8D%2F2x8eLJt0d9gq3koPk39RBy9Ynot2DuLIvfhIYQ1vPgWPOLnRQq3O0it5s3IQI17wCezipijwHSyhjBU66enxvSmduC63Qj1WbGYsCuMdLP5OBs69rL7jr2La5g%2B25A9KmjHy0Gix%2Fyxa0E57KJF5%2BD4mFqjZyUUC5RH2NX5wNKQbADxYLMVy2Sa2TaNVqAzS8vd0eZjSGQgDsDywqK72%2FGSLcKrJdgwVmwGJACL714TZyXqDHwSgn2RH%2Fc%2B8vNzJ%2FQk0sDGzbALknn5FMOZGA30aTwL8cehIz8jrji%2FNLjd%2B4Utms1eqRjGq7oYYPlkixrvnTYXZid5lUUwmv2lwQY6pgHlSfnza8ntGt%2BIXckVmLuNI7BFjWans78RqoF3vfxme0PO0ogadvmdCk9%2BaSQ5Mse639VKKpoJg%2BYLFqI6cygAA8AiHOhP8qVc9cwbdbGM8%2BcvAGc4JnK7KRtOoGv%2BEQUXKO4g4a2lhdZUih2J6CDQZM%2Bz%2B%2F13VDmgGEfI8JYhIzuJgUo5MVlLnBAo8aVr5VXkl%2FYFGORYIQ40PGqnJOZ3fjNe1UoX&X-Amz-Signature=a8a39438fd33c98a4d4b4737d4dfe1208603396a9add8b1bcd1a1e396afcbb9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IDQZDW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4KS89A1u9WhfQ2lgTy%2BYLQ69tlx1wa3xYdv18XdjZWAiACoReBiH%2FI6d2bFfnG2ng1PvEezQcy3A67PDraZpD8Jir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMf1WOn%2BvkhLLSpIZfKtwDQMNZlwqmLetAKxOoB%2B5264k5F7WCCPJQo%2BHpgfyhrZ9BZFdfjzPKEtEpIFg5x5OnDQXiFc%2BmMxiFrgSYedhnMSoUo5cqLuj1fFMEXtVaEY6mVIJvH5NJ2eqoylQ%2FHxrbKcrIMO5T7lAeljqqPW69LKROn5Ad1tXgU5WUuHEiOiwvK5i6sYS4yxkvc7xWNtty29NnJfKiHvPVgjVuNsj4zV0wgGN4b43U8c%2Fugiu314QXPyrufVtWeEd2lC7pcF6a8N3l3anQ3IXE3hVBjsHeZebwYgQ7iN1pM0bQi4LhWK8D%2F2x8eLJt0d9gq3koPk39RBy9Ynot2DuLIvfhIYQ1vPgWPOLnRQq3O0it5s3IQI17wCezipijwHSyhjBU66enxvSmduC63Qj1WbGYsCuMdLP5OBs69rL7jr2La5g%2B25A9KmjHy0Gix%2Fyxa0E57KJF5%2BD4mFqjZyUUC5RH2NX5wNKQbADxYLMVy2Sa2TaNVqAzS8vd0eZjSGQgDsDywqK72%2FGSLcKrJdgwVmwGJACL714TZyXqDHwSgn2RH%2Fc%2B8vNzJ%2FQk0sDGzbALknn5FMOZGA30aTwL8cehIz8jrji%2FNLjd%2B4Utms1eqRjGq7oYYPlkixrvnTYXZid5lUUwmv2lwQY6pgHlSfnza8ntGt%2BIXckVmLuNI7BFjWans78RqoF3vfxme0PO0ogadvmdCk9%2BaSQ5Mse639VKKpoJg%2BYLFqI6cygAA8AiHOhP8qVc9cwbdbGM8%2BcvAGc4JnK7KRtOoGv%2BEQUXKO4g4a2lhdZUih2J6CDQZM%2Bz%2B%2F13VDmgGEfI8JYhIzuJgUo5MVlLnBAo8aVr5VXkl%2FYFGORYIQ40PGqnJOZ3fjNe1UoX&X-Amz-Signature=217fb5857044dc89f899a093eb0451457aac0bcc9462a5cd46171716821aa3e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IDQZDW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4KS89A1u9WhfQ2lgTy%2BYLQ69tlx1wa3xYdv18XdjZWAiACoReBiH%2FI6d2bFfnG2ng1PvEezQcy3A67PDraZpD8Jir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMf1WOn%2BvkhLLSpIZfKtwDQMNZlwqmLetAKxOoB%2B5264k5F7WCCPJQo%2BHpgfyhrZ9BZFdfjzPKEtEpIFg5x5OnDQXiFc%2BmMxiFrgSYedhnMSoUo5cqLuj1fFMEXtVaEY6mVIJvH5NJ2eqoylQ%2FHxrbKcrIMO5T7lAeljqqPW69LKROn5Ad1tXgU5WUuHEiOiwvK5i6sYS4yxkvc7xWNtty29NnJfKiHvPVgjVuNsj4zV0wgGN4b43U8c%2Fugiu314QXPyrufVtWeEd2lC7pcF6a8N3l3anQ3IXE3hVBjsHeZebwYgQ7iN1pM0bQi4LhWK8D%2F2x8eLJt0d9gq3koPk39RBy9Ynot2DuLIvfhIYQ1vPgWPOLnRQq3O0it5s3IQI17wCezipijwHSyhjBU66enxvSmduC63Qj1WbGYsCuMdLP5OBs69rL7jr2La5g%2B25A9KmjHy0Gix%2Fyxa0E57KJF5%2BD4mFqjZyUUC5RH2NX5wNKQbADxYLMVy2Sa2TaNVqAzS8vd0eZjSGQgDsDywqK72%2FGSLcKrJdgwVmwGJACL714TZyXqDHwSgn2RH%2Fc%2B8vNzJ%2FQk0sDGzbALknn5FMOZGA30aTwL8cehIz8jrji%2FNLjd%2B4Utms1eqRjGq7oYYPlkixrvnTYXZid5lUUwmv2lwQY6pgHlSfnza8ntGt%2BIXckVmLuNI7BFjWans78RqoF3vfxme0PO0ogadvmdCk9%2BaSQ5Mse639VKKpoJg%2BYLFqI6cygAA8AiHOhP8qVc9cwbdbGM8%2BcvAGc4JnK7KRtOoGv%2BEQUXKO4g4a2lhdZUih2J6CDQZM%2Bz%2B%2F13VDmgGEfI8JYhIzuJgUo5MVlLnBAo8aVr5VXkl%2FYFGORYIQ40PGqnJOZ3fjNe1UoX&X-Amz-Signature=e8d8ece513789b69312dc482c67560b91a032f13e22ec8625d5170b19b0e1e6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IDQZDW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4KS89A1u9WhfQ2lgTy%2BYLQ69tlx1wa3xYdv18XdjZWAiACoReBiH%2FI6d2bFfnG2ng1PvEezQcy3A67PDraZpD8Jir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMf1WOn%2BvkhLLSpIZfKtwDQMNZlwqmLetAKxOoB%2B5264k5F7WCCPJQo%2BHpgfyhrZ9BZFdfjzPKEtEpIFg5x5OnDQXiFc%2BmMxiFrgSYedhnMSoUo5cqLuj1fFMEXtVaEY6mVIJvH5NJ2eqoylQ%2FHxrbKcrIMO5T7lAeljqqPW69LKROn5Ad1tXgU5WUuHEiOiwvK5i6sYS4yxkvc7xWNtty29NnJfKiHvPVgjVuNsj4zV0wgGN4b43U8c%2Fugiu314QXPyrufVtWeEd2lC7pcF6a8N3l3anQ3IXE3hVBjsHeZebwYgQ7iN1pM0bQi4LhWK8D%2F2x8eLJt0d9gq3koPk39RBy9Ynot2DuLIvfhIYQ1vPgWPOLnRQq3O0it5s3IQI17wCezipijwHSyhjBU66enxvSmduC63Qj1WbGYsCuMdLP5OBs69rL7jr2La5g%2B25A9KmjHy0Gix%2Fyxa0E57KJF5%2BD4mFqjZyUUC5RH2NX5wNKQbADxYLMVy2Sa2TaNVqAzS8vd0eZjSGQgDsDywqK72%2FGSLcKrJdgwVmwGJACL714TZyXqDHwSgn2RH%2Fc%2B8vNzJ%2FQk0sDGzbALknn5FMOZGA30aTwL8cehIz8jrji%2FNLjd%2B4Utms1eqRjGq7oYYPlkixrvnTYXZid5lUUwmv2lwQY6pgHlSfnza8ntGt%2BIXckVmLuNI7BFjWans78RqoF3vfxme0PO0ogadvmdCk9%2BaSQ5Mse639VKKpoJg%2BYLFqI6cygAA8AiHOhP8qVc9cwbdbGM8%2BcvAGc4JnK7KRtOoGv%2BEQUXKO4g4a2lhdZUih2J6CDQZM%2Bz%2B%2F13VDmgGEfI8JYhIzuJgUo5MVlLnBAo8aVr5VXkl%2FYFGORYIQ40PGqnJOZ3fjNe1UoX&X-Amz-Signature=f5c18af40ab30345d095321f63ed195c7bf9fa65174831c18c9f46da7cd94c77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IDQZDW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4KS89A1u9WhfQ2lgTy%2BYLQ69tlx1wa3xYdv18XdjZWAiACoReBiH%2FI6d2bFfnG2ng1PvEezQcy3A67PDraZpD8Jir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMf1WOn%2BvkhLLSpIZfKtwDQMNZlwqmLetAKxOoB%2B5264k5F7WCCPJQo%2BHpgfyhrZ9BZFdfjzPKEtEpIFg5x5OnDQXiFc%2BmMxiFrgSYedhnMSoUo5cqLuj1fFMEXtVaEY6mVIJvH5NJ2eqoylQ%2FHxrbKcrIMO5T7lAeljqqPW69LKROn5Ad1tXgU5WUuHEiOiwvK5i6sYS4yxkvc7xWNtty29NnJfKiHvPVgjVuNsj4zV0wgGN4b43U8c%2Fugiu314QXPyrufVtWeEd2lC7pcF6a8N3l3anQ3IXE3hVBjsHeZebwYgQ7iN1pM0bQi4LhWK8D%2F2x8eLJt0d9gq3koPk39RBy9Ynot2DuLIvfhIYQ1vPgWPOLnRQq3O0it5s3IQI17wCezipijwHSyhjBU66enxvSmduC63Qj1WbGYsCuMdLP5OBs69rL7jr2La5g%2B25A9KmjHy0Gix%2Fyxa0E57KJF5%2BD4mFqjZyUUC5RH2NX5wNKQbADxYLMVy2Sa2TaNVqAzS8vd0eZjSGQgDsDywqK72%2FGSLcKrJdgwVmwGJACL714TZyXqDHwSgn2RH%2Fc%2B8vNzJ%2FQk0sDGzbALknn5FMOZGA30aTwL8cehIz8jrji%2FNLjd%2B4Utms1eqRjGq7oYYPlkixrvnTYXZid5lUUwmv2lwQY6pgHlSfnza8ntGt%2BIXckVmLuNI7BFjWans78RqoF3vfxme0PO0ogadvmdCk9%2BaSQ5Mse639VKKpoJg%2BYLFqI6cygAA8AiHOhP8qVc9cwbdbGM8%2BcvAGc4JnK7KRtOoGv%2BEQUXKO4g4a2lhdZUih2J6CDQZM%2Bz%2B%2F13VDmgGEfI8JYhIzuJgUo5MVlLnBAo8aVr5VXkl%2FYFGORYIQ40PGqnJOZ3fjNe1UoX&X-Amz-Signature=79a9651f8ab036e41bd72f2f34c084430a1871a9ee8a7a66189c4f99a1124ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
