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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOGQ3ZW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH9Wgg9mobrTWlvayrmRJ5W%2BprnoGvDDpgYqYw2gHvcWAiEA5CVh7Vc1%2BemRVTB8OyIcQrVA8d7s%2FwL7xASmapmx3yYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFbCimZ8p27pbI7z%2FSrcA98TffJMzDweLQCifWOckcbcLOcOJJLnLtac61tVbuhvKvEqY1Hh9oPI%2FxGdQXJvldEU4pkX%2BoCdsx4NZBH8YFNe%2FT8%2FsE%2BM8y4R9%2BtRZYwCJtLeI6vipHIcDI2NEwz0%2Bygu6pBMnPKqAUu0H9qjixeVS7HwRQaukOqiVUAZX7h1Zg1nK%2Ffo%2BcMQsHPux7v%2FxZugkhU0pgctk4MTyq7Nch0eeyh1cpcRi16UvyZzTSoyJrnBBuqw%2BhSV0PkM0%2FwQ%2BX7A9shxpe7VlcJUCe15QENpcH%2BtzE8YxTTTh3KCnGPqS8JHmpyTMUJ1xa%2FlkfRQNP56lcUgoonHOwY%2BVBFpfq%2FkGUC%2B81aBqhi9csbn8npcioGgwWcb9bXLbn1ZdXjwrz%2FKgIcl3SK2xs%2BwoA82%2B2ejkqbwEW9KwMtdHtXyepP7gsSe0CEsdD3VBiln1vvgQuZZ6hktjl%2BUKufaiHCHmAUCebJ5pOfFTcfGFSOXHHM4PFmRwKt7KUO5HE3utJgBHWn6nkiSA49HhaGpwdTMfn7DPvNd5QBpgqLhtddDHZv9irgiNvwI1qcDbjKn4mdic7ulXkaM%2BqgcHV4u0m0zc4MEjUn5e9AUBDMxGLm5n8lGqbj9L3pua5EtpNS6MN7pu70GOqUBM2Eds%2FdPRMmtSYOEWIJEMsSwu9yQ6C4IZ0sEHQczJJxIlOaH%2Be0zn1sJIaxcZnxE%2FUOXLBfZa70J1bVyej%2BEvUCm0fuoIxinzO7YXyuYpw0nfJ3EI3vtpWyRvCmvb%2BekSNlGxPQsthpobAshMpUqQaYanVmu6LUX76kEq3WQnTuWfvygWTr8bCG2rJxqp6bmJP3koKQdhLDqn1iy0V9bRtT0oGiH&X-Amz-Signature=75994ac3447f8b86b8b08678434e83e326e3d655186acdb8d3f95d494f226ca7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOGQ3ZW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH9Wgg9mobrTWlvayrmRJ5W%2BprnoGvDDpgYqYw2gHvcWAiEA5CVh7Vc1%2BemRVTB8OyIcQrVA8d7s%2FwL7xASmapmx3yYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFbCimZ8p27pbI7z%2FSrcA98TffJMzDweLQCifWOckcbcLOcOJJLnLtac61tVbuhvKvEqY1Hh9oPI%2FxGdQXJvldEU4pkX%2BoCdsx4NZBH8YFNe%2FT8%2FsE%2BM8y4R9%2BtRZYwCJtLeI6vipHIcDI2NEwz0%2Bygu6pBMnPKqAUu0H9qjixeVS7HwRQaukOqiVUAZX7h1Zg1nK%2Ffo%2BcMQsHPux7v%2FxZugkhU0pgctk4MTyq7Nch0eeyh1cpcRi16UvyZzTSoyJrnBBuqw%2BhSV0PkM0%2FwQ%2BX7A9shxpe7VlcJUCe15QENpcH%2BtzE8YxTTTh3KCnGPqS8JHmpyTMUJ1xa%2FlkfRQNP56lcUgoonHOwY%2BVBFpfq%2FkGUC%2B81aBqhi9csbn8npcioGgwWcb9bXLbn1ZdXjwrz%2FKgIcl3SK2xs%2BwoA82%2B2ejkqbwEW9KwMtdHtXyepP7gsSe0CEsdD3VBiln1vvgQuZZ6hktjl%2BUKufaiHCHmAUCebJ5pOfFTcfGFSOXHHM4PFmRwKt7KUO5HE3utJgBHWn6nkiSA49HhaGpwdTMfn7DPvNd5QBpgqLhtddDHZv9irgiNvwI1qcDbjKn4mdic7ulXkaM%2BqgcHV4u0m0zc4MEjUn5e9AUBDMxGLm5n8lGqbj9L3pua5EtpNS6MN7pu70GOqUBM2Eds%2FdPRMmtSYOEWIJEMsSwu9yQ6C4IZ0sEHQczJJxIlOaH%2Be0zn1sJIaxcZnxE%2FUOXLBfZa70J1bVyej%2BEvUCm0fuoIxinzO7YXyuYpw0nfJ3EI3vtpWyRvCmvb%2BekSNlGxPQsthpobAshMpUqQaYanVmu6LUX76kEq3WQnTuWfvygWTr8bCG2rJxqp6bmJP3koKQdhLDqn1iy0V9bRtT0oGiH&X-Amz-Signature=3288b84a19918a0add3356d228351ba5d19790c3ec0057c3190e4c439c171087&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOGQ3ZW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH9Wgg9mobrTWlvayrmRJ5W%2BprnoGvDDpgYqYw2gHvcWAiEA5CVh7Vc1%2BemRVTB8OyIcQrVA8d7s%2FwL7xASmapmx3yYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFbCimZ8p27pbI7z%2FSrcA98TffJMzDweLQCifWOckcbcLOcOJJLnLtac61tVbuhvKvEqY1Hh9oPI%2FxGdQXJvldEU4pkX%2BoCdsx4NZBH8YFNe%2FT8%2FsE%2BM8y4R9%2BtRZYwCJtLeI6vipHIcDI2NEwz0%2Bygu6pBMnPKqAUu0H9qjixeVS7HwRQaukOqiVUAZX7h1Zg1nK%2Ffo%2BcMQsHPux7v%2FxZugkhU0pgctk4MTyq7Nch0eeyh1cpcRi16UvyZzTSoyJrnBBuqw%2BhSV0PkM0%2FwQ%2BX7A9shxpe7VlcJUCe15QENpcH%2BtzE8YxTTTh3KCnGPqS8JHmpyTMUJ1xa%2FlkfRQNP56lcUgoonHOwY%2BVBFpfq%2FkGUC%2B81aBqhi9csbn8npcioGgwWcb9bXLbn1ZdXjwrz%2FKgIcl3SK2xs%2BwoA82%2B2ejkqbwEW9KwMtdHtXyepP7gsSe0CEsdD3VBiln1vvgQuZZ6hktjl%2BUKufaiHCHmAUCebJ5pOfFTcfGFSOXHHM4PFmRwKt7KUO5HE3utJgBHWn6nkiSA49HhaGpwdTMfn7DPvNd5QBpgqLhtddDHZv9irgiNvwI1qcDbjKn4mdic7ulXkaM%2BqgcHV4u0m0zc4MEjUn5e9AUBDMxGLm5n8lGqbj9L3pua5EtpNS6MN7pu70GOqUBM2Eds%2FdPRMmtSYOEWIJEMsSwu9yQ6C4IZ0sEHQczJJxIlOaH%2Be0zn1sJIaxcZnxE%2FUOXLBfZa70J1bVyej%2BEvUCm0fuoIxinzO7YXyuYpw0nfJ3EI3vtpWyRvCmvb%2BekSNlGxPQsthpobAshMpUqQaYanVmu6LUX76kEq3WQnTuWfvygWTr8bCG2rJxqp6bmJP3koKQdhLDqn1iy0V9bRtT0oGiH&X-Amz-Signature=1a37e51733ddde3b6c99a77ed02d06ebf2759fbaf9ce8d88f640c07b96b489e9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOGQ3ZW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH9Wgg9mobrTWlvayrmRJ5W%2BprnoGvDDpgYqYw2gHvcWAiEA5CVh7Vc1%2BemRVTB8OyIcQrVA8d7s%2FwL7xASmapmx3yYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFbCimZ8p27pbI7z%2FSrcA98TffJMzDweLQCifWOckcbcLOcOJJLnLtac61tVbuhvKvEqY1Hh9oPI%2FxGdQXJvldEU4pkX%2BoCdsx4NZBH8YFNe%2FT8%2FsE%2BM8y4R9%2BtRZYwCJtLeI6vipHIcDI2NEwz0%2Bygu6pBMnPKqAUu0H9qjixeVS7HwRQaukOqiVUAZX7h1Zg1nK%2Ffo%2BcMQsHPux7v%2FxZugkhU0pgctk4MTyq7Nch0eeyh1cpcRi16UvyZzTSoyJrnBBuqw%2BhSV0PkM0%2FwQ%2BX7A9shxpe7VlcJUCe15QENpcH%2BtzE8YxTTTh3KCnGPqS8JHmpyTMUJ1xa%2FlkfRQNP56lcUgoonHOwY%2BVBFpfq%2FkGUC%2B81aBqhi9csbn8npcioGgwWcb9bXLbn1ZdXjwrz%2FKgIcl3SK2xs%2BwoA82%2B2ejkqbwEW9KwMtdHtXyepP7gsSe0CEsdD3VBiln1vvgQuZZ6hktjl%2BUKufaiHCHmAUCebJ5pOfFTcfGFSOXHHM4PFmRwKt7KUO5HE3utJgBHWn6nkiSA49HhaGpwdTMfn7DPvNd5QBpgqLhtddDHZv9irgiNvwI1qcDbjKn4mdic7ulXkaM%2BqgcHV4u0m0zc4MEjUn5e9AUBDMxGLm5n8lGqbj9L3pua5EtpNS6MN7pu70GOqUBM2Eds%2FdPRMmtSYOEWIJEMsSwu9yQ6C4IZ0sEHQczJJxIlOaH%2Be0zn1sJIaxcZnxE%2FUOXLBfZa70J1bVyej%2BEvUCm0fuoIxinzO7YXyuYpw0nfJ3EI3vtpWyRvCmvb%2BekSNlGxPQsthpobAshMpUqQaYanVmu6LUX76kEq3WQnTuWfvygWTr8bCG2rJxqp6bmJP3koKQdhLDqn1iy0V9bRtT0oGiH&X-Amz-Signature=24e6ade0ab7751cfac302baf90f04737adefe91e2a429057c6d7de5ded17c6b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOGQ3ZW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH9Wgg9mobrTWlvayrmRJ5W%2BprnoGvDDpgYqYw2gHvcWAiEA5CVh7Vc1%2BemRVTB8OyIcQrVA8d7s%2FwL7xASmapmx3yYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFbCimZ8p27pbI7z%2FSrcA98TffJMzDweLQCifWOckcbcLOcOJJLnLtac61tVbuhvKvEqY1Hh9oPI%2FxGdQXJvldEU4pkX%2BoCdsx4NZBH8YFNe%2FT8%2FsE%2BM8y4R9%2BtRZYwCJtLeI6vipHIcDI2NEwz0%2Bygu6pBMnPKqAUu0H9qjixeVS7HwRQaukOqiVUAZX7h1Zg1nK%2Ffo%2BcMQsHPux7v%2FxZugkhU0pgctk4MTyq7Nch0eeyh1cpcRi16UvyZzTSoyJrnBBuqw%2BhSV0PkM0%2FwQ%2BX7A9shxpe7VlcJUCe15QENpcH%2BtzE8YxTTTh3KCnGPqS8JHmpyTMUJ1xa%2FlkfRQNP56lcUgoonHOwY%2BVBFpfq%2FkGUC%2B81aBqhi9csbn8npcioGgwWcb9bXLbn1ZdXjwrz%2FKgIcl3SK2xs%2BwoA82%2B2ejkqbwEW9KwMtdHtXyepP7gsSe0CEsdD3VBiln1vvgQuZZ6hktjl%2BUKufaiHCHmAUCebJ5pOfFTcfGFSOXHHM4PFmRwKt7KUO5HE3utJgBHWn6nkiSA49HhaGpwdTMfn7DPvNd5QBpgqLhtddDHZv9irgiNvwI1qcDbjKn4mdic7ulXkaM%2BqgcHV4u0m0zc4MEjUn5e9AUBDMxGLm5n8lGqbj9L3pua5EtpNS6MN7pu70GOqUBM2Eds%2FdPRMmtSYOEWIJEMsSwu9yQ6C4IZ0sEHQczJJxIlOaH%2Be0zn1sJIaxcZnxE%2FUOXLBfZa70J1bVyej%2BEvUCm0fuoIxinzO7YXyuYpw0nfJ3EI3vtpWyRvCmvb%2BekSNlGxPQsthpobAshMpUqQaYanVmu6LUX76kEq3WQnTuWfvygWTr8bCG2rJxqp6bmJP3koKQdhLDqn1iy0V9bRtT0oGiH&X-Amz-Signature=c23c930eaab0289af2ee284a60e606e86a25de7905947f3e2f4faa2d4419eec8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOGQ3ZW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH9Wgg9mobrTWlvayrmRJ5W%2BprnoGvDDpgYqYw2gHvcWAiEA5CVh7Vc1%2BemRVTB8OyIcQrVA8d7s%2FwL7xASmapmx3yYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFbCimZ8p27pbI7z%2FSrcA98TffJMzDweLQCifWOckcbcLOcOJJLnLtac61tVbuhvKvEqY1Hh9oPI%2FxGdQXJvldEU4pkX%2BoCdsx4NZBH8YFNe%2FT8%2FsE%2BM8y4R9%2BtRZYwCJtLeI6vipHIcDI2NEwz0%2Bygu6pBMnPKqAUu0H9qjixeVS7HwRQaukOqiVUAZX7h1Zg1nK%2Ffo%2BcMQsHPux7v%2FxZugkhU0pgctk4MTyq7Nch0eeyh1cpcRi16UvyZzTSoyJrnBBuqw%2BhSV0PkM0%2FwQ%2BX7A9shxpe7VlcJUCe15QENpcH%2BtzE8YxTTTh3KCnGPqS8JHmpyTMUJ1xa%2FlkfRQNP56lcUgoonHOwY%2BVBFpfq%2FkGUC%2B81aBqhi9csbn8npcioGgwWcb9bXLbn1ZdXjwrz%2FKgIcl3SK2xs%2BwoA82%2B2ejkqbwEW9KwMtdHtXyepP7gsSe0CEsdD3VBiln1vvgQuZZ6hktjl%2BUKufaiHCHmAUCebJ5pOfFTcfGFSOXHHM4PFmRwKt7KUO5HE3utJgBHWn6nkiSA49HhaGpwdTMfn7DPvNd5QBpgqLhtddDHZv9irgiNvwI1qcDbjKn4mdic7ulXkaM%2BqgcHV4u0m0zc4MEjUn5e9AUBDMxGLm5n8lGqbj9L3pua5EtpNS6MN7pu70GOqUBM2Eds%2FdPRMmtSYOEWIJEMsSwu9yQ6C4IZ0sEHQczJJxIlOaH%2Be0zn1sJIaxcZnxE%2FUOXLBfZa70J1bVyej%2BEvUCm0fuoIxinzO7YXyuYpw0nfJ3EI3vtpWyRvCmvb%2BekSNlGxPQsthpobAshMpUqQaYanVmu6LUX76kEq3WQnTuWfvygWTr8bCG2rJxqp6bmJP3koKQdhLDqn1iy0V9bRtT0oGiH&X-Amz-Signature=b18ccb63b3a2ebd02d09242970865bf21ce51396435c3008c121fc3e2904cf68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOGQ3ZW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH9Wgg9mobrTWlvayrmRJ5W%2BprnoGvDDpgYqYw2gHvcWAiEA5CVh7Vc1%2BemRVTB8OyIcQrVA8d7s%2FwL7xASmapmx3yYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFbCimZ8p27pbI7z%2FSrcA98TffJMzDweLQCifWOckcbcLOcOJJLnLtac61tVbuhvKvEqY1Hh9oPI%2FxGdQXJvldEU4pkX%2BoCdsx4NZBH8YFNe%2FT8%2FsE%2BM8y4R9%2BtRZYwCJtLeI6vipHIcDI2NEwz0%2Bygu6pBMnPKqAUu0H9qjixeVS7HwRQaukOqiVUAZX7h1Zg1nK%2Ffo%2BcMQsHPux7v%2FxZugkhU0pgctk4MTyq7Nch0eeyh1cpcRi16UvyZzTSoyJrnBBuqw%2BhSV0PkM0%2FwQ%2BX7A9shxpe7VlcJUCe15QENpcH%2BtzE8YxTTTh3KCnGPqS8JHmpyTMUJ1xa%2FlkfRQNP56lcUgoonHOwY%2BVBFpfq%2FkGUC%2B81aBqhi9csbn8npcioGgwWcb9bXLbn1ZdXjwrz%2FKgIcl3SK2xs%2BwoA82%2B2ejkqbwEW9KwMtdHtXyepP7gsSe0CEsdD3VBiln1vvgQuZZ6hktjl%2BUKufaiHCHmAUCebJ5pOfFTcfGFSOXHHM4PFmRwKt7KUO5HE3utJgBHWn6nkiSA49HhaGpwdTMfn7DPvNd5QBpgqLhtddDHZv9irgiNvwI1qcDbjKn4mdic7ulXkaM%2BqgcHV4u0m0zc4MEjUn5e9AUBDMxGLm5n8lGqbj9L3pua5EtpNS6MN7pu70GOqUBM2Eds%2FdPRMmtSYOEWIJEMsSwu9yQ6C4IZ0sEHQczJJxIlOaH%2Be0zn1sJIaxcZnxE%2FUOXLBfZa70J1bVyej%2BEvUCm0fuoIxinzO7YXyuYpw0nfJ3EI3vtpWyRvCmvb%2BekSNlGxPQsthpobAshMpUqQaYanVmu6LUX76kEq3WQnTuWfvygWTr8bCG2rJxqp6bmJP3koKQdhLDqn1iy0V9bRtT0oGiH&X-Amz-Signature=48b870b103bca33ff3bac0da4c88e42ed73604449159865cc5125a7942da862a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOGQ3ZW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH9Wgg9mobrTWlvayrmRJ5W%2BprnoGvDDpgYqYw2gHvcWAiEA5CVh7Vc1%2BemRVTB8OyIcQrVA8d7s%2FwL7xASmapmx3yYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFbCimZ8p27pbI7z%2FSrcA98TffJMzDweLQCifWOckcbcLOcOJJLnLtac61tVbuhvKvEqY1Hh9oPI%2FxGdQXJvldEU4pkX%2BoCdsx4NZBH8YFNe%2FT8%2FsE%2BM8y4R9%2BtRZYwCJtLeI6vipHIcDI2NEwz0%2Bygu6pBMnPKqAUu0H9qjixeVS7HwRQaukOqiVUAZX7h1Zg1nK%2Ffo%2BcMQsHPux7v%2FxZugkhU0pgctk4MTyq7Nch0eeyh1cpcRi16UvyZzTSoyJrnBBuqw%2BhSV0PkM0%2FwQ%2BX7A9shxpe7VlcJUCe15QENpcH%2BtzE8YxTTTh3KCnGPqS8JHmpyTMUJ1xa%2FlkfRQNP56lcUgoonHOwY%2BVBFpfq%2FkGUC%2B81aBqhi9csbn8npcioGgwWcb9bXLbn1ZdXjwrz%2FKgIcl3SK2xs%2BwoA82%2B2ejkqbwEW9KwMtdHtXyepP7gsSe0CEsdD3VBiln1vvgQuZZ6hktjl%2BUKufaiHCHmAUCebJ5pOfFTcfGFSOXHHM4PFmRwKt7KUO5HE3utJgBHWn6nkiSA49HhaGpwdTMfn7DPvNd5QBpgqLhtddDHZv9irgiNvwI1qcDbjKn4mdic7ulXkaM%2BqgcHV4u0m0zc4MEjUn5e9AUBDMxGLm5n8lGqbj9L3pua5EtpNS6MN7pu70GOqUBM2Eds%2FdPRMmtSYOEWIJEMsSwu9yQ6C4IZ0sEHQczJJxIlOaH%2Be0zn1sJIaxcZnxE%2FUOXLBfZa70J1bVyej%2BEvUCm0fuoIxinzO7YXyuYpw0nfJ3EI3vtpWyRvCmvb%2BekSNlGxPQsthpobAshMpUqQaYanVmu6LUX76kEq3WQnTuWfvygWTr8bCG2rJxqp6bmJP3koKQdhLDqn1iy0V9bRtT0oGiH&X-Amz-Signature=503f3189a072664dd7a153e60a91c0a29717762e8c5220a02face9667f4a0a45&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
