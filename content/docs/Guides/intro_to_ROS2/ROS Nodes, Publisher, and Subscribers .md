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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BXMNLV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCirZouJo%2BHy3tUkObjyM45UwqKdIlKC1Oq7drE6WJXdgIhAIIBy%2F78%2B%2FBZldcuhZGEtZm%2B1jto9GoIQ0Ae4r3ZVxYxKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBAQhTX7b%2FYLgBJ%2Boq3AM2yespbNrN%2FtS5dlYOClrIN8zouZIUaDMa8oAs8XvHo%2Bvn9bWfhj6zAV0lgJkariTjNqIyf0UcMlTo6YW1yUdHEc6PQuZB8avjnVZmzXH9exXrkT3nmf01TysDo3UYQ2Ck8dZ1hlKKo07bu5zw5lWR%2FNhEC4YkDkNS1Ogii%2BcTNuPOYMBcZE2hD0vDROpmOoG7ixzCIbwYTuwetHVDoVf9T89Ck5ZXCWM6IubhJ4P7o2ie4v6w0X48LyPfUWe1vEfM5NKn3ata179Nb1a5mGJoA1D%2B%2FiKuyTQZyIyTYkKncVuoKNKzSAHdIhT14RAHOBkGMRkGRRBVcBwRbSJsUE%2BJwQk2ckRIxXl48wAQDq2Scyy9rJyhb1mZxBx3R6GaQ9vpqyY0tvAzkTxbExvGx%2BxxRUKkwfCGGMngqYKG0kfl9%2B90Oq0pmHcA60FgKUpnmiQFZF8%2FE9eX6HC0Aczoxhp8lG%2Fm0i24VRXuqx9iE%2FLI4FCXGrjHCRYpz%2B3lBUb0KeEOvIpSgwyiYCltFGmAW5Q0zHB8oItG100lu%2FsEj9cyluIn8TKbFHGKswe%2BPf9qswGTRFxwmBUvvh7QtnjNKVV0euMNUOhsi28Brb4%2BWuP3pjLIEnBP0uyipC2JWjDL%2Fe7BBjqkARsSxTy5LV6yIsgK08yHwpKBBwcjI%2BXDv5u7RxsXgXlCQx8m2PL2CBHDWuOd5GK6QY32DotUc%2FZ%2FdMC5NKXziNMgIWZPjBdIAclzYWxsujZTdKxGuyMCSZ2Y5G0g2HTmncZqVOK9OlDp94B3Zh7S2A1edUaLucubmqC3hS1A9BmlahoJblq7RZ5W8YYFUAQ69jFimS2EvvP0D5N0RPWDH%2BpPy%2FZ6&X-Amz-Signature=30b9e2505050aea7c68a8354e4c1a536feb770cd2aab1e852ba52aa6e5ab719d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BXMNLV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCirZouJo%2BHy3tUkObjyM45UwqKdIlKC1Oq7drE6WJXdgIhAIIBy%2F78%2B%2FBZldcuhZGEtZm%2B1jto9GoIQ0Ae4r3ZVxYxKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBAQhTX7b%2FYLgBJ%2Boq3AM2yespbNrN%2FtS5dlYOClrIN8zouZIUaDMa8oAs8XvHo%2Bvn9bWfhj6zAV0lgJkariTjNqIyf0UcMlTo6YW1yUdHEc6PQuZB8avjnVZmzXH9exXrkT3nmf01TysDo3UYQ2Ck8dZ1hlKKo07bu5zw5lWR%2FNhEC4YkDkNS1Ogii%2BcTNuPOYMBcZE2hD0vDROpmOoG7ixzCIbwYTuwetHVDoVf9T89Ck5ZXCWM6IubhJ4P7o2ie4v6w0X48LyPfUWe1vEfM5NKn3ata179Nb1a5mGJoA1D%2B%2FiKuyTQZyIyTYkKncVuoKNKzSAHdIhT14RAHOBkGMRkGRRBVcBwRbSJsUE%2BJwQk2ckRIxXl48wAQDq2Scyy9rJyhb1mZxBx3R6GaQ9vpqyY0tvAzkTxbExvGx%2BxxRUKkwfCGGMngqYKG0kfl9%2B90Oq0pmHcA60FgKUpnmiQFZF8%2FE9eX6HC0Aczoxhp8lG%2Fm0i24VRXuqx9iE%2FLI4FCXGrjHCRYpz%2B3lBUb0KeEOvIpSgwyiYCltFGmAW5Q0zHB8oItG100lu%2FsEj9cyluIn8TKbFHGKswe%2BPf9qswGTRFxwmBUvvh7QtnjNKVV0euMNUOhsi28Brb4%2BWuP3pjLIEnBP0uyipC2JWjDL%2Fe7BBjqkARsSxTy5LV6yIsgK08yHwpKBBwcjI%2BXDv5u7RxsXgXlCQx8m2PL2CBHDWuOd5GK6QY32DotUc%2FZ%2FdMC5NKXziNMgIWZPjBdIAclzYWxsujZTdKxGuyMCSZ2Y5G0g2HTmncZqVOK9OlDp94B3Zh7S2A1edUaLucubmqC3hS1A9BmlahoJblq7RZ5W8YYFUAQ69jFimS2EvvP0D5N0RPWDH%2BpPy%2FZ6&X-Amz-Signature=bd7e6a5e6ec8aa71b88e0c87f596422a06a7ee42512de12c023e1b8b33a1b002&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BXMNLV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCirZouJo%2BHy3tUkObjyM45UwqKdIlKC1Oq7drE6WJXdgIhAIIBy%2F78%2B%2FBZldcuhZGEtZm%2B1jto9GoIQ0Ae4r3ZVxYxKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBAQhTX7b%2FYLgBJ%2Boq3AM2yespbNrN%2FtS5dlYOClrIN8zouZIUaDMa8oAs8XvHo%2Bvn9bWfhj6zAV0lgJkariTjNqIyf0UcMlTo6YW1yUdHEc6PQuZB8avjnVZmzXH9exXrkT3nmf01TysDo3UYQ2Ck8dZ1hlKKo07bu5zw5lWR%2FNhEC4YkDkNS1Ogii%2BcTNuPOYMBcZE2hD0vDROpmOoG7ixzCIbwYTuwetHVDoVf9T89Ck5ZXCWM6IubhJ4P7o2ie4v6w0X48LyPfUWe1vEfM5NKn3ata179Nb1a5mGJoA1D%2B%2FiKuyTQZyIyTYkKncVuoKNKzSAHdIhT14RAHOBkGMRkGRRBVcBwRbSJsUE%2BJwQk2ckRIxXl48wAQDq2Scyy9rJyhb1mZxBx3R6GaQ9vpqyY0tvAzkTxbExvGx%2BxxRUKkwfCGGMngqYKG0kfl9%2B90Oq0pmHcA60FgKUpnmiQFZF8%2FE9eX6HC0Aczoxhp8lG%2Fm0i24VRXuqx9iE%2FLI4FCXGrjHCRYpz%2B3lBUb0KeEOvIpSgwyiYCltFGmAW5Q0zHB8oItG100lu%2FsEj9cyluIn8TKbFHGKswe%2BPf9qswGTRFxwmBUvvh7QtnjNKVV0euMNUOhsi28Brb4%2BWuP3pjLIEnBP0uyipC2JWjDL%2Fe7BBjqkARsSxTy5LV6yIsgK08yHwpKBBwcjI%2BXDv5u7RxsXgXlCQx8m2PL2CBHDWuOd5GK6QY32DotUc%2FZ%2FdMC5NKXziNMgIWZPjBdIAclzYWxsujZTdKxGuyMCSZ2Y5G0g2HTmncZqVOK9OlDp94B3Zh7S2A1edUaLucubmqC3hS1A9BmlahoJblq7RZ5W8YYFUAQ69jFimS2EvvP0D5N0RPWDH%2BpPy%2FZ6&X-Amz-Signature=cd7eceb0fba67e6f1cb23ab05b6152458803034409927d41c3022a4fdf956ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BXMNLV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCirZouJo%2BHy3tUkObjyM45UwqKdIlKC1Oq7drE6WJXdgIhAIIBy%2F78%2B%2FBZldcuhZGEtZm%2B1jto9GoIQ0Ae4r3ZVxYxKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBAQhTX7b%2FYLgBJ%2Boq3AM2yespbNrN%2FtS5dlYOClrIN8zouZIUaDMa8oAs8XvHo%2Bvn9bWfhj6zAV0lgJkariTjNqIyf0UcMlTo6YW1yUdHEc6PQuZB8avjnVZmzXH9exXrkT3nmf01TysDo3UYQ2Ck8dZ1hlKKo07bu5zw5lWR%2FNhEC4YkDkNS1Ogii%2BcTNuPOYMBcZE2hD0vDROpmOoG7ixzCIbwYTuwetHVDoVf9T89Ck5ZXCWM6IubhJ4P7o2ie4v6w0X48LyPfUWe1vEfM5NKn3ata179Nb1a5mGJoA1D%2B%2FiKuyTQZyIyTYkKncVuoKNKzSAHdIhT14RAHOBkGMRkGRRBVcBwRbSJsUE%2BJwQk2ckRIxXl48wAQDq2Scyy9rJyhb1mZxBx3R6GaQ9vpqyY0tvAzkTxbExvGx%2BxxRUKkwfCGGMngqYKG0kfl9%2B90Oq0pmHcA60FgKUpnmiQFZF8%2FE9eX6HC0Aczoxhp8lG%2Fm0i24VRXuqx9iE%2FLI4FCXGrjHCRYpz%2B3lBUb0KeEOvIpSgwyiYCltFGmAW5Q0zHB8oItG100lu%2FsEj9cyluIn8TKbFHGKswe%2BPf9qswGTRFxwmBUvvh7QtnjNKVV0euMNUOhsi28Brb4%2BWuP3pjLIEnBP0uyipC2JWjDL%2Fe7BBjqkARsSxTy5LV6yIsgK08yHwpKBBwcjI%2BXDv5u7RxsXgXlCQx8m2PL2CBHDWuOd5GK6QY32DotUc%2FZ%2FdMC5NKXziNMgIWZPjBdIAclzYWxsujZTdKxGuyMCSZ2Y5G0g2HTmncZqVOK9OlDp94B3Zh7S2A1edUaLucubmqC3hS1A9BmlahoJblq7RZ5W8YYFUAQ69jFimS2EvvP0D5N0RPWDH%2BpPy%2FZ6&X-Amz-Signature=f28601819bec9091d25ea9af8178ff7d93ff889863e927e5132ab33f1b46e4ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BXMNLV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCirZouJo%2BHy3tUkObjyM45UwqKdIlKC1Oq7drE6WJXdgIhAIIBy%2F78%2B%2FBZldcuhZGEtZm%2B1jto9GoIQ0Ae4r3ZVxYxKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBAQhTX7b%2FYLgBJ%2Boq3AM2yespbNrN%2FtS5dlYOClrIN8zouZIUaDMa8oAs8XvHo%2Bvn9bWfhj6zAV0lgJkariTjNqIyf0UcMlTo6YW1yUdHEc6PQuZB8avjnVZmzXH9exXrkT3nmf01TysDo3UYQ2Ck8dZ1hlKKo07bu5zw5lWR%2FNhEC4YkDkNS1Ogii%2BcTNuPOYMBcZE2hD0vDROpmOoG7ixzCIbwYTuwetHVDoVf9T89Ck5ZXCWM6IubhJ4P7o2ie4v6w0X48LyPfUWe1vEfM5NKn3ata179Nb1a5mGJoA1D%2B%2FiKuyTQZyIyTYkKncVuoKNKzSAHdIhT14RAHOBkGMRkGRRBVcBwRbSJsUE%2BJwQk2ckRIxXl48wAQDq2Scyy9rJyhb1mZxBx3R6GaQ9vpqyY0tvAzkTxbExvGx%2BxxRUKkwfCGGMngqYKG0kfl9%2B90Oq0pmHcA60FgKUpnmiQFZF8%2FE9eX6HC0Aczoxhp8lG%2Fm0i24VRXuqx9iE%2FLI4FCXGrjHCRYpz%2B3lBUb0KeEOvIpSgwyiYCltFGmAW5Q0zHB8oItG100lu%2FsEj9cyluIn8TKbFHGKswe%2BPf9qswGTRFxwmBUvvh7QtnjNKVV0euMNUOhsi28Brb4%2BWuP3pjLIEnBP0uyipC2JWjDL%2Fe7BBjqkARsSxTy5LV6yIsgK08yHwpKBBwcjI%2BXDv5u7RxsXgXlCQx8m2PL2CBHDWuOd5GK6QY32DotUc%2FZ%2FdMC5NKXziNMgIWZPjBdIAclzYWxsujZTdKxGuyMCSZ2Y5G0g2HTmncZqVOK9OlDp94B3Zh7S2A1edUaLucubmqC3hS1A9BmlahoJblq7RZ5W8YYFUAQ69jFimS2EvvP0D5N0RPWDH%2BpPy%2FZ6&X-Amz-Signature=58b218258f9e858786c3fd6d6ac92f646f633f358fe3c740251f07483b85a638&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BXMNLV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCirZouJo%2BHy3tUkObjyM45UwqKdIlKC1Oq7drE6WJXdgIhAIIBy%2F78%2B%2FBZldcuhZGEtZm%2B1jto9GoIQ0Ae4r3ZVxYxKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBAQhTX7b%2FYLgBJ%2Boq3AM2yespbNrN%2FtS5dlYOClrIN8zouZIUaDMa8oAs8XvHo%2Bvn9bWfhj6zAV0lgJkariTjNqIyf0UcMlTo6YW1yUdHEc6PQuZB8avjnVZmzXH9exXrkT3nmf01TysDo3UYQ2Ck8dZ1hlKKo07bu5zw5lWR%2FNhEC4YkDkNS1Ogii%2BcTNuPOYMBcZE2hD0vDROpmOoG7ixzCIbwYTuwetHVDoVf9T89Ck5ZXCWM6IubhJ4P7o2ie4v6w0X48LyPfUWe1vEfM5NKn3ata179Nb1a5mGJoA1D%2B%2FiKuyTQZyIyTYkKncVuoKNKzSAHdIhT14RAHOBkGMRkGRRBVcBwRbSJsUE%2BJwQk2ckRIxXl48wAQDq2Scyy9rJyhb1mZxBx3R6GaQ9vpqyY0tvAzkTxbExvGx%2BxxRUKkwfCGGMngqYKG0kfl9%2B90Oq0pmHcA60FgKUpnmiQFZF8%2FE9eX6HC0Aczoxhp8lG%2Fm0i24VRXuqx9iE%2FLI4FCXGrjHCRYpz%2B3lBUb0KeEOvIpSgwyiYCltFGmAW5Q0zHB8oItG100lu%2FsEj9cyluIn8TKbFHGKswe%2BPf9qswGTRFxwmBUvvh7QtnjNKVV0euMNUOhsi28Brb4%2BWuP3pjLIEnBP0uyipC2JWjDL%2Fe7BBjqkARsSxTy5LV6yIsgK08yHwpKBBwcjI%2BXDv5u7RxsXgXlCQx8m2PL2CBHDWuOd5GK6QY32DotUc%2FZ%2FdMC5NKXziNMgIWZPjBdIAclzYWxsujZTdKxGuyMCSZ2Y5G0g2HTmncZqVOK9OlDp94B3Zh7S2A1edUaLucubmqC3hS1A9BmlahoJblq7RZ5W8YYFUAQ69jFimS2EvvP0D5N0RPWDH%2BpPy%2FZ6&X-Amz-Signature=5a100f46f1cb4868336bb90a0b207a2f397c6f315b4c177327c4f8495b921444&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BXMNLV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCirZouJo%2BHy3tUkObjyM45UwqKdIlKC1Oq7drE6WJXdgIhAIIBy%2F78%2B%2FBZldcuhZGEtZm%2B1jto9GoIQ0Ae4r3ZVxYxKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBAQhTX7b%2FYLgBJ%2Boq3AM2yespbNrN%2FtS5dlYOClrIN8zouZIUaDMa8oAs8XvHo%2Bvn9bWfhj6zAV0lgJkariTjNqIyf0UcMlTo6YW1yUdHEc6PQuZB8avjnVZmzXH9exXrkT3nmf01TysDo3UYQ2Ck8dZ1hlKKo07bu5zw5lWR%2FNhEC4YkDkNS1Ogii%2BcTNuPOYMBcZE2hD0vDROpmOoG7ixzCIbwYTuwetHVDoVf9T89Ck5ZXCWM6IubhJ4P7o2ie4v6w0X48LyPfUWe1vEfM5NKn3ata179Nb1a5mGJoA1D%2B%2FiKuyTQZyIyTYkKncVuoKNKzSAHdIhT14RAHOBkGMRkGRRBVcBwRbSJsUE%2BJwQk2ckRIxXl48wAQDq2Scyy9rJyhb1mZxBx3R6GaQ9vpqyY0tvAzkTxbExvGx%2BxxRUKkwfCGGMngqYKG0kfl9%2B90Oq0pmHcA60FgKUpnmiQFZF8%2FE9eX6HC0Aczoxhp8lG%2Fm0i24VRXuqx9iE%2FLI4FCXGrjHCRYpz%2B3lBUb0KeEOvIpSgwyiYCltFGmAW5Q0zHB8oItG100lu%2FsEj9cyluIn8TKbFHGKswe%2BPf9qswGTRFxwmBUvvh7QtnjNKVV0euMNUOhsi28Brb4%2BWuP3pjLIEnBP0uyipC2JWjDL%2Fe7BBjqkARsSxTy5LV6yIsgK08yHwpKBBwcjI%2BXDv5u7RxsXgXlCQx8m2PL2CBHDWuOd5GK6QY32DotUc%2FZ%2FdMC5NKXziNMgIWZPjBdIAclzYWxsujZTdKxGuyMCSZ2Y5G0g2HTmncZqVOK9OlDp94B3Zh7S2A1edUaLucubmqC3hS1A9BmlahoJblq7RZ5W8YYFUAQ69jFimS2EvvP0D5N0RPWDH%2BpPy%2FZ6&X-Amz-Signature=36bf04e4cd5e3440c8b06962226f75ae9b6452795190f8bbd21c2347e22c4403&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BXMNLV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCirZouJo%2BHy3tUkObjyM45UwqKdIlKC1Oq7drE6WJXdgIhAIIBy%2F78%2B%2FBZldcuhZGEtZm%2B1jto9GoIQ0Ae4r3ZVxYxKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBAQhTX7b%2FYLgBJ%2Boq3AM2yespbNrN%2FtS5dlYOClrIN8zouZIUaDMa8oAs8XvHo%2Bvn9bWfhj6zAV0lgJkariTjNqIyf0UcMlTo6YW1yUdHEc6PQuZB8avjnVZmzXH9exXrkT3nmf01TysDo3UYQ2Ck8dZ1hlKKo07bu5zw5lWR%2FNhEC4YkDkNS1Ogii%2BcTNuPOYMBcZE2hD0vDROpmOoG7ixzCIbwYTuwetHVDoVf9T89Ck5ZXCWM6IubhJ4P7o2ie4v6w0X48LyPfUWe1vEfM5NKn3ata179Nb1a5mGJoA1D%2B%2FiKuyTQZyIyTYkKncVuoKNKzSAHdIhT14RAHOBkGMRkGRRBVcBwRbSJsUE%2BJwQk2ckRIxXl48wAQDq2Scyy9rJyhb1mZxBx3R6GaQ9vpqyY0tvAzkTxbExvGx%2BxxRUKkwfCGGMngqYKG0kfl9%2B90Oq0pmHcA60FgKUpnmiQFZF8%2FE9eX6HC0Aczoxhp8lG%2Fm0i24VRXuqx9iE%2FLI4FCXGrjHCRYpz%2B3lBUb0KeEOvIpSgwyiYCltFGmAW5Q0zHB8oItG100lu%2FsEj9cyluIn8TKbFHGKswe%2BPf9qswGTRFxwmBUvvh7QtnjNKVV0euMNUOhsi28Brb4%2BWuP3pjLIEnBP0uyipC2JWjDL%2Fe7BBjqkARsSxTy5LV6yIsgK08yHwpKBBwcjI%2BXDv5u7RxsXgXlCQx8m2PL2CBHDWuOd5GK6QY32DotUc%2FZ%2FdMC5NKXziNMgIWZPjBdIAclzYWxsujZTdKxGuyMCSZ2Y5G0g2HTmncZqVOK9OlDp94B3Zh7S2A1edUaLucubmqC3hS1A9BmlahoJblq7RZ5W8YYFUAQ69jFimS2EvvP0D5N0RPWDH%2BpPy%2FZ6&X-Amz-Signature=10f7328c663feff6de2fdc9791eb0118294a91d42eae1718348ce0097259d065&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
