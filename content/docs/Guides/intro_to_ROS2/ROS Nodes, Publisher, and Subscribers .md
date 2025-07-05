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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ32UKJ5%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCSU1nDnZOPPW87WzTOBNZsvzBFASzvgfCJXg96Udpf6QIgPE0w6GR%2F7wKpS8xdfgBuDAZjOkXws8BUkjE%2BrYOIw08q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPcdJtyDrFVxGIhRGircA78wkQfirIFCMth5Gx2AYGQ0085n%2BJv4zjyeEfy9jyRfmx2r1Hyq7YJo0GC%2F5XFJxaUBLX5VOjDAFHSAGuRQEpXK8WQQWq4%2FwB07HVJsdK7OtcL4mX5pLfiakF25mSMolYSkfhBd3Sjd%2F4YcOIbfgsy2A7GGbyaCdzIKD%2Bll774usIiFjrPhpe45wKVy717dIO55hMlLufEL9I6rrLDikqn0tMRHOWvQlvc%2B80%2Fnr8nvuTA7jkKyzjKhhzH8%2BVLCnsiOEwR8jDNgWizpm11l8rFbgtEw0loQv02TIeoKtps9jjdK6xkH3gkgYtKbdNQK8p99U%2FXu10l5dLMccViNyszvIMsMx4uJCXJyqS6GrC5qzP2IdQKcMMJboWrfONZf5LLe%2BXUU1qk%2Bb2Q856FXjumwkaRWX235l4LDjk%2BR%2BG8MpzDijl%2FgXIKciIGO0BbXl0AsOMdnFVTOq7lnzo7OXK%2BsSYSolcah%2FJM2nR1SAcGr8IqIRS1B06rY8BB%2BDzVqMij8zN2Qkkz%2Fkw3pw1fuBGAbkwzry8nakrH3lkcaifaJLjSogp6wtzoDT9jqEYzcuh51uznI92PqnQgnzrFukoZub3ue4m%2FrIYDjx4nA45MdrjC1qXDAZ2CkNZZ8MI%2BFosMGOqUBXArBFY%2B6EJ5qqgXaZrgjYEBvJ57ZbrrmT0aq4OKAe8aL37OgHr%2BPv4SJeR%2BnS1hXZUOWxo3M3F3fxTIFOn8iHlrpVKIVrgkaOvWrD8Jbgu%2BkeqWChvY9FYQ0E8JeX5Ldyl01THYM0bdZhBC2IbDOxX3U6cCSR3qgxT0nGlp99NKTpDC2uQnEN6n%2B4gLD5V3SWIncrLUUlKzSmY%2FbCsjcE8op4NzO&X-Amz-Signature=ee60dcb09d001c0604daaea4a095c54d99087353c2a3fad451bd5b64ebadcefb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ32UKJ5%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCSU1nDnZOPPW87WzTOBNZsvzBFASzvgfCJXg96Udpf6QIgPE0w6GR%2F7wKpS8xdfgBuDAZjOkXws8BUkjE%2BrYOIw08q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPcdJtyDrFVxGIhRGircA78wkQfirIFCMth5Gx2AYGQ0085n%2BJv4zjyeEfy9jyRfmx2r1Hyq7YJo0GC%2F5XFJxaUBLX5VOjDAFHSAGuRQEpXK8WQQWq4%2FwB07HVJsdK7OtcL4mX5pLfiakF25mSMolYSkfhBd3Sjd%2F4YcOIbfgsy2A7GGbyaCdzIKD%2Bll774usIiFjrPhpe45wKVy717dIO55hMlLufEL9I6rrLDikqn0tMRHOWvQlvc%2B80%2Fnr8nvuTA7jkKyzjKhhzH8%2BVLCnsiOEwR8jDNgWizpm11l8rFbgtEw0loQv02TIeoKtps9jjdK6xkH3gkgYtKbdNQK8p99U%2FXu10l5dLMccViNyszvIMsMx4uJCXJyqS6GrC5qzP2IdQKcMMJboWrfONZf5LLe%2BXUU1qk%2Bb2Q856FXjumwkaRWX235l4LDjk%2BR%2BG8MpzDijl%2FgXIKciIGO0BbXl0AsOMdnFVTOq7lnzo7OXK%2BsSYSolcah%2FJM2nR1SAcGr8IqIRS1B06rY8BB%2BDzVqMij8zN2Qkkz%2Fkw3pw1fuBGAbkwzry8nakrH3lkcaifaJLjSogp6wtzoDT9jqEYzcuh51uznI92PqnQgnzrFukoZub3ue4m%2FrIYDjx4nA45MdrjC1qXDAZ2CkNZZ8MI%2BFosMGOqUBXArBFY%2B6EJ5qqgXaZrgjYEBvJ57ZbrrmT0aq4OKAe8aL37OgHr%2BPv4SJeR%2BnS1hXZUOWxo3M3F3fxTIFOn8iHlrpVKIVrgkaOvWrD8Jbgu%2BkeqWChvY9FYQ0E8JeX5Ldyl01THYM0bdZhBC2IbDOxX3U6cCSR3qgxT0nGlp99NKTpDC2uQnEN6n%2B4gLD5V3SWIncrLUUlKzSmY%2FbCsjcE8op4NzO&X-Amz-Signature=1a5b7d649c2e9862c4b1ebce82fe8d58f8357ff1c2b9ea6ca7ccfc69e21f7a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ32UKJ5%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCSU1nDnZOPPW87WzTOBNZsvzBFASzvgfCJXg96Udpf6QIgPE0w6GR%2F7wKpS8xdfgBuDAZjOkXws8BUkjE%2BrYOIw08q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPcdJtyDrFVxGIhRGircA78wkQfirIFCMth5Gx2AYGQ0085n%2BJv4zjyeEfy9jyRfmx2r1Hyq7YJo0GC%2F5XFJxaUBLX5VOjDAFHSAGuRQEpXK8WQQWq4%2FwB07HVJsdK7OtcL4mX5pLfiakF25mSMolYSkfhBd3Sjd%2F4YcOIbfgsy2A7GGbyaCdzIKD%2Bll774usIiFjrPhpe45wKVy717dIO55hMlLufEL9I6rrLDikqn0tMRHOWvQlvc%2B80%2Fnr8nvuTA7jkKyzjKhhzH8%2BVLCnsiOEwR8jDNgWizpm11l8rFbgtEw0loQv02TIeoKtps9jjdK6xkH3gkgYtKbdNQK8p99U%2FXu10l5dLMccViNyszvIMsMx4uJCXJyqS6GrC5qzP2IdQKcMMJboWrfONZf5LLe%2BXUU1qk%2Bb2Q856FXjumwkaRWX235l4LDjk%2BR%2BG8MpzDijl%2FgXIKciIGO0BbXl0AsOMdnFVTOq7lnzo7OXK%2BsSYSolcah%2FJM2nR1SAcGr8IqIRS1B06rY8BB%2BDzVqMij8zN2Qkkz%2Fkw3pw1fuBGAbkwzry8nakrH3lkcaifaJLjSogp6wtzoDT9jqEYzcuh51uznI92PqnQgnzrFukoZub3ue4m%2FrIYDjx4nA45MdrjC1qXDAZ2CkNZZ8MI%2BFosMGOqUBXArBFY%2B6EJ5qqgXaZrgjYEBvJ57ZbrrmT0aq4OKAe8aL37OgHr%2BPv4SJeR%2BnS1hXZUOWxo3M3F3fxTIFOn8iHlrpVKIVrgkaOvWrD8Jbgu%2BkeqWChvY9FYQ0E8JeX5Ldyl01THYM0bdZhBC2IbDOxX3U6cCSR3qgxT0nGlp99NKTpDC2uQnEN6n%2B4gLD5V3SWIncrLUUlKzSmY%2FbCsjcE8op4NzO&X-Amz-Signature=976ccfbae309418ab033aa6dd08125d921fecae15ee0dc228924ee8b790b9c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ32UKJ5%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCSU1nDnZOPPW87WzTOBNZsvzBFASzvgfCJXg96Udpf6QIgPE0w6GR%2F7wKpS8xdfgBuDAZjOkXws8BUkjE%2BrYOIw08q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPcdJtyDrFVxGIhRGircA78wkQfirIFCMth5Gx2AYGQ0085n%2BJv4zjyeEfy9jyRfmx2r1Hyq7YJo0GC%2F5XFJxaUBLX5VOjDAFHSAGuRQEpXK8WQQWq4%2FwB07HVJsdK7OtcL4mX5pLfiakF25mSMolYSkfhBd3Sjd%2F4YcOIbfgsy2A7GGbyaCdzIKD%2Bll774usIiFjrPhpe45wKVy717dIO55hMlLufEL9I6rrLDikqn0tMRHOWvQlvc%2B80%2Fnr8nvuTA7jkKyzjKhhzH8%2BVLCnsiOEwR8jDNgWizpm11l8rFbgtEw0loQv02TIeoKtps9jjdK6xkH3gkgYtKbdNQK8p99U%2FXu10l5dLMccViNyszvIMsMx4uJCXJyqS6GrC5qzP2IdQKcMMJboWrfONZf5LLe%2BXUU1qk%2Bb2Q856FXjumwkaRWX235l4LDjk%2BR%2BG8MpzDijl%2FgXIKciIGO0BbXl0AsOMdnFVTOq7lnzo7OXK%2BsSYSolcah%2FJM2nR1SAcGr8IqIRS1B06rY8BB%2BDzVqMij8zN2Qkkz%2Fkw3pw1fuBGAbkwzry8nakrH3lkcaifaJLjSogp6wtzoDT9jqEYzcuh51uznI92PqnQgnzrFukoZub3ue4m%2FrIYDjx4nA45MdrjC1qXDAZ2CkNZZ8MI%2BFosMGOqUBXArBFY%2B6EJ5qqgXaZrgjYEBvJ57ZbrrmT0aq4OKAe8aL37OgHr%2BPv4SJeR%2BnS1hXZUOWxo3M3F3fxTIFOn8iHlrpVKIVrgkaOvWrD8Jbgu%2BkeqWChvY9FYQ0E8JeX5Ldyl01THYM0bdZhBC2IbDOxX3U6cCSR3qgxT0nGlp99NKTpDC2uQnEN6n%2B4gLD5V3SWIncrLUUlKzSmY%2FbCsjcE8op4NzO&X-Amz-Signature=9bdd9e5bb3396fa46f40cea8b3dd9d21d3f123154506c0ce0d8535113c957660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ32UKJ5%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCSU1nDnZOPPW87WzTOBNZsvzBFASzvgfCJXg96Udpf6QIgPE0w6GR%2F7wKpS8xdfgBuDAZjOkXws8BUkjE%2BrYOIw08q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPcdJtyDrFVxGIhRGircA78wkQfirIFCMth5Gx2AYGQ0085n%2BJv4zjyeEfy9jyRfmx2r1Hyq7YJo0GC%2F5XFJxaUBLX5VOjDAFHSAGuRQEpXK8WQQWq4%2FwB07HVJsdK7OtcL4mX5pLfiakF25mSMolYSkfhBd3Sjd%2F4YcOIbfgsy2A7GGbyaCdzIKD%2Bll774usIiFjrPhpe45wKVy717dIO55hMlLufEL9I6rrLDikqn0tMRHOWvQlvc%2B80%2Fnr8nvuTA7jkKyzjKhhzH8%2BVLCnsiOEwR8jDNgWizpm11l8rFbgtEw0loQv02TIeoKtps9jjdK6xkH3gkgYtKbdNQK8p99U%2FXu10l5dLMccViNyszvIMsMx4uJCXJyqS6GrC5qzP2IdQKcMMJboWrfONZf5LLe%2BXUU1qk%2Bb2Q856FXjumwkaRWX235l4LDjk%2BR%2BG8MpzDijl%2FgXIKciIGO0BbXl0AsOMdnFVTOq7lnzo7OXK%2BsSYSolcah%2FJM2nR1SAcGr8IqIRS1B06rY8BB%2BDzVqMij8zN2Qkkz%2Fkw3pw1fuBGAbkwzry8nakrH3lkcaifaJLjSogp6wtzoDT9jqEYzcuh51uznI92PqnQgnzrFukoZub3ue4m%2FrIYDjx4nA45MdrjC1qXDAZ2CkNZZ8MI%2BFosMGOqUBXArBFY%2B6EJ5qqgXaZrgjYEBvJ57ZbrrmT0aq4OKAe8aL37OgHr%2BPv4SJeR%2BnS1hXZUOWxo3M3F3fxTIFOn8iHlrpVKIVrgkaOvWrD8Jbgu%2BkeqWChvY9FYQ0E8JeX5Ldyl01THYM0bdZhBC2IbDOxX3U6cCSR3qgxT0nGlp99NKTpDC2uQnEN6n%2B4gLD5V3SWIncrLUUlKzSmY%2FbCsjcE8op4NzO&X-Amz-Signature=c3a3a2fb9fdc60dcee616c86ad4b68322b644067c1a1f444b297462ce9534d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ32UKJ5%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCSU1nDnZOPPW87WzTOBNZsvzBFASzvgfCJXg96Udpf6QIgPE0w6GR%2F7wKpS8xdfgBuDAZjOkXws8BUkjE%2BrYOIw08q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPcdJtyDrFVxGIhRGircA78wkQfirIFCMth5Gx2AYGQ0085n%2BJv4zjyeEfy9jyRfmx2r1Hyq7YJo0GC%2F5XFJxaUBLX5VOjDAFHSAGuRQEpXK8WQQWq4%2FwB07HVJsdK7OtcL4mX5pLfiakF25mSMolYSkfhBd3Sjd%2F4YcOIbfgsy2A7GGbyaCdzIKD%2Bll774usIiFjrPhpe45wKVy717dIO55hMlLufEL9I6rrLDikqn0tMRHOWvQlvc%2B80%2Fnr8nvuTA7jkKyzjKhhzH8%2BVLCnsiOEwR8jDNgWizpm11l8rFbgtEw0loQv02TIeoKtps9jjdK6xkH3gkgYtKbdNQK8p99U%2FXu10l5dLMccViNyszvIMsMx4uJCXJyqS6GrC5qzP2IdQKcMMJboWrfONZf5LLe%2BXUU1qk%2Bb2Q856FXjumwkaRWX235l4LDjk%2BR%2BG8MpzDijl%2FgXIKciIGO0BbXl0AsOMdnFVTOq7lnzo7OXK%2BsSYSolcah%2FJM2nR1SAcGr8IqIRS1B06rY8BB%2BDzVqMij8zN2Qkkz%2Fkw3pw1fuBGAbkwzry8nakrH3lkcaifaJLjSogp6wtzoDT9jqEYzcuh51uznI92PqnQgnzrFukoZub3ue4m%2FrIYDjx4nA45MdrjC1qXDAZ2CkNZZ8MI%2BFosMGOqUBXArBFY%2B6EJ5qqgXaZrgjYEBvJ57ZbrrmT0aq4OKAe8aL37OgHr%2BPv4SJeR%2BnS1hXZUOWxo3M3F3fxTIFOn8iHlrpVKIVrgkaOvWrD8Jbgu%2BkeqWChvY9FYQ0E8JeX5Ldyl01THYM0bdZhBC2IbDOxX3U6cCSR3qgxT0nGlp99NKTpDC2uQnEN6n%2B4gLD5V3SWIncrLUUlKzSmY%2FbCsjcE8op4NzO&X-Amz-Signature=679cf6f8a36d736a85bfc2d1868847e81bf3a8432933038c6eb1a682f910b2a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ32UKJ5%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCSU1nDnZOPPW87WzTOBNZsvzBFASzvgfCJXg96Udpf6QIgPE0w6GR%2F7wKpS8xdfgBuDAZjOkXws8BUkjE%2BrYOIw08q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPcdJtyDrFVxGIhRGircA78wkQfirIFCMth5Gx2AYGQ0085n%2BJv4zjyeEfy9jyRfmx2r1Hyq7YJo0GC%2F5XFJxaUBLX5VOjDAFHSAGuRQEpXK8WQQWq4%2FwB07HVJsdK7OtcL4mX5pLfiakF25mSMolYSkfhBd3Sjd%2F4YcOIbfgsy2A7GGbyaCdzIKD%2Bll774usIiFjrPhpe45wKVy717dIO55hMlLufEL9I6rrLDikqn0tMRHOWvQlvc%2B80%2Fnr8nvuTA7jkKyzjKhhzH8%2BVLCnsiOEwR8jDNgWizpm11l8rFbgtEw0loQv02TIeoKtps9jjdK6xkH3gkgYtKbdNQK8p99U%2FXu10l5dLMccViNyszvIMsMx4uJCXJyqS6GrC5qzP2IdQKcMMJboWrfONZf5LLe%2BXUU1qk%2Bb2Q856FXjumwkaRWX235l4LDjk%2BR%2BG8MpzDijl%2FgXIKciIGO0BbXl0AsOMdnFVTOq7lnzo7OXK%2BsSYSolcah%2FJM2nR1SAcGr8IqIRS1B06rY8BB%2BDzVqMij8zN2Qkkz%2Fkw3pw1fuBGAbkwzry8nakrH3lkcaifaJLjSogp6wtzoDT9jqEYzcuh51uznI92PqnQgnzrFukoZub3ue4m%2FrIYDjx4nA45MdrjC1qXDAZ2CkNZZ8MI%2BFosMGOqUBXArBFY%2B6EJ5qqgXaZrgjYEBvJ57ZbrrmT0aq4OKAe8aL37OgHr%2BPv4SJeR%2BnS1hXZUOWxo3M3F3fxTIFOn8iHlrpVKIVrgkaOvWrD8Jbgu%2BkeqWChvY9FYQ0E8JeX5Ldyl01THYM0bdZhBC2IbDOxX3U6cCSR3qgxT0nGlp99NKTpDC2uQnEN6n%2B4gLD5V3SWIncrLUUlKzSmY%2FbCsjcE8op4NzO&X-Amz-Signature=e9828a5d6fa6b0db06913f14f93ade51103b155d3a54ff59b2778f266311d44e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ32UKJ5%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCSU1nDnZOPPW87WzTOBNZsvzBFASzvgfCJXg96Udpf6QIgPE0w6GR%2F7wKpS8xdfgBuDAZjOkXws8BUkjE%2BrYOIw08q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPcdJtyDrFVxGIhRGircA78wkQfirIFCMth5Gx2AYGQ0085n%2BJv4zjyeEfy9jyRfmx2r1Hyq7YJo0GC%2F5XFJxaUBLX5VOjDAFHSAGuRQEpXK8WQQWq4%2FwB07HVJsdK7OtcL4mX5pLfiakF25mSMolYSkfhBd3Sjd%2F4YcOIbfgsy2A7GGbyaCdzIKD%2Bll774usIiFjrPhpe45wKVy717dIO55hMlLufEL9I6rrLDikqn0tMRHOWvQlvc%2B80%2Fnr8nvuTA7jkKyzjKhhzH8%2BVLCnsiOEwR8jDNgWizpm11l8rFbgtEw0loQv02TIeoKtps9jjdK6xkH3gkgYtKbdNQK8p99U%2FXu10l5dLMccViNyszvIMsMx4uJCXJyqS6GrC5qzP2IdQKcMMJboWrfONZf5LLe%2BXUU1qk%2Bb2Q856FXjumwkaRWX235l4LDjk%2BR%2BG8MpzDijl%2FgXIKciIGO0BbXl0AsOMdnFVTOq7lnzo7OXK%2BsSYSolcah%2FJM2nR1SAcGr8IqIRS1B06rY8BB%2BDzVqMij8zN2Qkkz%2Fkw3pw1fuBGAbkwzry8nakrH3lkcaifaJLjSogp6wtzoDT9jqEYzcuh51uznI92PqnQgnzrFukoZub3ue4m%2FrIYDjx4nA45MdrjC1qXDAZ2CkNZZ8MI%2BFosMGOqUBXArBFY%2B6EJ5qqgXaZrgjYEBvJ57ZbrrmT0aq4OKAe8aL37OgHr%2BPv4SJeR%2BnS1hXZUOWxo3M3F3fxTIFOn8iHlrpVKIVrgkaOvWrD8Jbgu%2BkeqWChvY9FYQ0E8JeX5Ldyl01THYM0bdZhBC2IbDOxX3U6cCSR3qgxT0nGlp99NKTpDC2uQnEN6n%2B4gLD5V3SWIncrLUUlKzSmY%2FbCsjcE8op4NzO&X-Amz-Signature=e267edfa3907489741627a99c76a3dda75ce3135f1f7cc120f335e40e3cefbfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
