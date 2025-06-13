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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WJLNU7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH%2BLLNFHZHn%2BMCl%2FzHilrSN3IIVzubSmt6cfEln14Jz8AiEAuEOwjvdJXPGxSqH9ghTHU7IcW7Li8jM4sjYYEWXH1lQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDF79OseWpMR7QhwilSrcA0zJWjTgW37udDsWFAb9S8e9GzBYWiY2MKUAVlc5fh%2ByF%2FKKQWs%2BjJv0Q8PXseeDyvPf%2BNaZQpslAV6j6f2g2uydVQc0goOEFweJRV3eY5bx5YbwcdsXELi6Z9bDnX9AacdmtjXdx2c5HdGzwy7cVDEyXSYYaqE6cF3veFdbL7m9MIZ%2B4B43qVfggPzUOZ15PEvui1FrzaY7dTGUk%2FerfaGSIWrES2%2BRWmp8qJ9dqKOrA1DTAPy1SKcpVTeu%2B3M1me%2FVVoMiLYuq5ubhZe0hX9m8W6wxnJOUO524LIfo008UXrkXdDkjiF1ReAXPE8ektKXAS0hMJG6vqIxNqaSaeZDh5sLItIokmKs0OivHHh4e037FmjAx6N0wQ0QfYM43hLetxHY6gxQxTeGFu4dUmj7DzHFrvxUieI%2BB3vtMtlF2axRoOQdwkTtcPele7rat6F8xsTlncWIgoKNTheQBJAgJ2fkac%2B7jN5b0rp1GeVWqtRXc3l1YQwj6NShad4NRNuj9CLgL4ANAcCylF0YujkHAgi2ZcoKOGi4D9ZGiiZHGqgCzKJNeU6Re%2BwgUNdfGgjMudP41iGpaxvUk6%2FDLRoHfdko%2Fp%2FY4ce7aFyCMOZIc0LEyCRuas5ztQvT4MNWSssIGOqUBPqXxnj0FWj1RJLwF0Z88i%2Fdv6hKjAmiRJt%2B84mDZhXzKhQwYjaE91wWMUvbfRw%2BtMpjDsPAh2gqcNCnVtLTbEb9CwF1DJ8akNGBupDEhNKYlFn5zM2jBhm%2F6IWN76RNPpwpDPN1OCIlF783qVT3n24nFmpa0WL1yCStqIftlwLZ0vzBc%2BuZYKoV4G6DRWswdKclveVVSYR%2BbwB%2FHciXxRvMZcHtA&X-Amz-Signature=1aaf990b9aacc45d1fb20c77459bd1c80e8036c9eb50549f497c8d9c52da584d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WJLNU7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH%2BLLNFHZHn%2BMCl%2FzHilrSN3IIVzubSmt6cfEln14Jz8AiEAuEOwjvdJXPGxSqH9ghTHU7IcW7Li8jM4sjYYEWXH1lQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDF79OseWpMR7QhwilSrcA0zJWjTgW37udDsWFAb9S8e9GzBYWiY2MKUAVlc5fh%2ByF%2FKKQWs%2BjJv0Q8PXseeDyvPf%2BNaZQpslAV6j6f2g2uydVQc0goOEFweJRV3eY5bx5YbwcdsXELi6Z9bDnX9AacdmtjXdx2c5HdGzwy7cVDEyXSYYaqE6cF3veFdbL7m9MIZ%2B4B43qVfggPzUOZ15PEvui1FrzaY7dTGUk%2FerfaGSIWrES2%2BRWmp8qJ9dqKOrA1DTAPy1SKcpVTeu%2B3M1me%2FVVoMiLYuq5ubhZe0hX9m8W6wxnJOUO524LIfo008UXrkXdDkjiF1ReAXPE8ektKXAS0hMJG6vqIxNqaSaeZDh5sLItIokmKs0OivHHh4e037FmjAx6N0wQ0QfYM43hLetxHY6gxQxTeGFu4dUmj7DzHFrvxUieI%2BB3vtMtlF2axRoOQdwkTtcPele7rat6F8xsTlncWIgoKNTheQBJAgJ2fkac%2B7jN5b0rp1GeVWqtRXc3l1YQwj6NShad4NRNuj9CLgL4ANAcCylF0YujkHAgi2ZcoKOGi4D9ZGiiZHGqgCzKJNeU6Re%2BwgUNdfGgjMudP41iGpaxvUk6%2FDLRoHfdko%2Fp%2FY4ce7aFyCMOZIc0LEyCRuas5ztQvT4MNWSssIGOqUBPqXxnj0FWj1RJLwF0Z88i%2Fdv6hKjAmiRJt%2B84mDZhXzKhQwYjaE91wWMUvbfRw%2BtMpjDsPAh2gqcNCnVtLTbEb9CwF1DJ8akNGBupDEhNKYlFn5zM2jBhm%2F6IWN76RNPpwpDPN1OCIlF783qVT3n24nFmpa0WL1yCStqIftlwLZ0vzBc%2BuZYKoV4G6DRWswdKclveVVSYR%2BbwB%2FHciXxRvMZcHtA&X-Amz-Signature=b3385ad539c4fddbe9371c4234933218a3550e0cd865b57961247bd13600987d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WJLNU7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH%2BLLNFHZHn%2BMCl%2FzHilrSN3IIVzubSmt6cfEln14Jz8AiEAuEOwjvdJXPGxSqH9ghTHU7IcW7Li8jM4sjYYEWXH1lQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDF79OseWpMR7QhwilSrcA0zJWjTgW37udDsWFAb9S8e9GzBYWiY2MKUAVlc5fh%2ByF%2FKKQWs%2BjJv0Q8PXseeDyvPf%2BNaZQpslAV6j6f2g2uydVQc0goOEFweJRV3eY5bx5YbwcdsXELi6Z9bDnX9AacdmtjXdx2c5HdGzwy7cVDEyXSYYaqE6cF3veFdbL7m9MIZ%2B4B43qVfggPzUOZ15PEvui1FrzaY7dTGUk%2FerfaGSIWrES2%2BRWmp8qJ9dqKOrA1DTAPy1SKcpVTeu%2B3M1me%2FVVoMiLYuq5ubhZe0hX9m8W6wxnJOUO524LIfo008UXrkXdDkjiF1ReAXPE8ektKXAS0hMJG6vqIxNqaSaeZDh5sLItIokmKs0OivHHh4e037FmjAx6N0wQ0QfYM43hLetxHY6gxQxTeGFu4dUmj7DzHFrvxUieI%2BB3vtMtlF2axRoOQdwkTtcPele7rat6F8xsTlncWIgoKNTheQBJAgJ2fkac%2B7jN5b0rp1GeVWqtRXc3l1YQwj6NShad4NRNuj9CLgL4ANAcCylF0YujkHAgi2ZcoKOGi4D9ZGiiZHGqgCzKJNeU6Re%2BwgUNdfGgjMudP41iGpaxvUk6%2FDLRoHfdko%2Fp%2FY4ce7aFyCMOZIc0LEyCRuas5ztQvT4MNWSssIGOqUBPqXxnj0FWj1RJLwF0Z88i%2Fdv6hKjAmiRJt%2B84mDZhXzKhQwYjaE91wWMUvbfRw%2BtMpjDsPAh2gqcNCnVtLTbEb9CwF1DJ8akNGBupDEhNKYlFn5zM2jBhm%2F6IWN76RNPpwpDPN1OCIlF783qVT3n24nFmpa0WL1yCStqIftlwLZ0vzBc%2BuZYKoV4G6DRWswdKclveVVSYR%2BbwB%2FHciXxRvMZcHtA&X-Amz-Signature=ae1b49efdb68a5b80b66d5390c5cb54fb97cda37c1ce95354ec71a6748db16c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WJLNU7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH%2BLLNFHZHn%2BMCl%2FzHilrSN3IIVzubSmt6cfEln14Jz8AiEAuEOwjvdJXPGxSqH9ghTHU7IcW7Li8jM4sjYYEWXH1lQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDF79OseWpMR7QhwilSrcA0zJWjTgW37udDsWFAb9S8e9GzBYWiY2MKUAVlc5fh%2ByF%2FKKQWs%2BjJv0Q8PXseeDyvPf%2BNaZQpslAV6j6f2g2uydVQc0goOEFweJRV3eY5bx5YbwcdsXELi6Z9bDnX9AacdmtjXdx2c5HdGzwy7cVDEyXSYYaqE6cF3veFdbL7m9MIZ%2B4B43qVfggPzUOZ15PEvui1FrzaY7dTGUk%2FerfaGSIWrES2%2BRWmp8qJ9dqKOrA1DTAPy1SKcpVTeu%2B3M1me%2FVVoMiLYuq5ubhZe0hX9m8W6wxnJOUO524LIfo008UXrkXdDkjiF1ReAXPE8ektKXAS0hMJG6vqIxNqaSaeZDh5sLItIokmKs0OivHHh4e037FmjAx6N0wQ0QfYM43hLetxHY6gxQxTeGFu4dUmj7DzHFrvxUieI%2BB3vtMtlF2axRoOQdwkTtcPele7rat6F8xsTlncWIgoKNTheQBJAgJ2fkac%2B7jN5b0rp1GeVWqtRXc3l1YQwj6NShad4NRNuj9CLgL4ANAcCylF0YujkHAgi2ZcoKOGi4D9ZGiiZHGqgCzKJNeU6Re%2BwgUNdfGgjMudP41iGpaxvUk6%2FDLRoHfdko%2Fp%2FY4ce7aFyCMOZIc0LEyCRuas5ztQvT4MNWSssIGOqUBPqXxnj0FWj1RJLwF0Z88i%2Fdv6hKjAmiRJt%2B84mDZhXzKhQwYjaE91wWMUvbfRw%2BtMpjDsPAh2gqcNCnVtLTbEb9CwF1DJ8akNGBupDEhNKYlFn5zM2jBhm%2F6IWN76RNPpwpDPN1OCIlF783qVT3n24nFmpa0WL1yCStqIftlwLZ0vzBc%2BuZYKoV4G6DRWswdKclveVVSYR%2BbwB%2FHciXxRvMZcHtA&X-Amz-Signature=e8a3fab0e7f14489877bdddb91c3a68c834592203f34f31c6e7c0b20432d7aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WJLNU7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH%2BLLNFHZHn%2BMCl%2FzHilrSN3IIVzubSmt6cfEln14Jz8AiEAuEOwjvdJXPGxSqH9ghTHU7IcW7Li8jM4sjYYEWXH1lQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDF79OseWpMR7QhwilSrcA0zJWjTgW37udDsWFAb9S8e9GzBYWiY2MKUAVlc5fh%2ByF%2FKKQWs%2BjJv0Q8PXseeDyvPf%2BNaZQpslAV6j6f2g2uydVQc0goOEFweJRV3eY5bx5YbwcdsXELi6Z9bDnX9AacdmtjXdx2c5HdGzwy7cVDEyXSYYaqE6cF3veFdbL7m9MIZ%2B4B43qVfggPzUOZ15PEvui1FrzaY7dTGUk%2FerfaGSIWrES2%2BRWmp8qJ9dqKOrA1DTAPy1SKcpVTeu%2B3M1me%2FVVoMiLYuq5ubhZe0hX9m8W6wxnJOUO524LIfo008UXrkXdDkjiF1ReAXPE8ektKXAS0hMJG6vqIxNqaSaeZDh5sLItIokmKs0OivHHh4e037FmjAx6N0wQ0QfYM43hLetxHY6gxQxTeGFu4dUmj7DzHFrvxUieI%2BB3vtMtlF2axRoOQdwkTtcPele7rat6F8xsTlncWIgoKNTheQBJAgJ2fkac%2B7jN5b0rp1GeVWqtRXc3l1YQwj6NShad4NRNuj9CLgL4ANAcCylF0YujkHAgi2ZcoKOGi4D9ZGiiZHGqgCzKJNeU6Re%2BwgUNdfGgjMudP41iGpaxvUk6%2FDLRoHfdko%2Fp%2FY4ce7aFyCMOZIc0LEyCRuas5ztQvT4MNWSssIGOqUBPqXxnj0FWj1RJLwF0Z88i%2Fdv6hKjAmiRJt%2B84mDZhXzKhQwYjaE91wWMUvbfRw%2BtMpjDsPAh2gqcNCnVtLTbEb9CwF1DJ8akNGBupDEhNKYlFn5zM2jBhm%2F6IWN76RNPpwpDPN1OCIlF783qVT3n24nFmpa0WL1yCStqIftlwLZ0vzBc%2BuZYKoV4G6DRWswdKclveVVSYR%2BbwB%2FHciXxRvMZcHtA&X-Amz-Signature=9c44b11f496766eae1fce474fbd3ef8f62173337d4dee92d550d7c8c757acd82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WJLNU7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH%2BLLNFHZHn%2BMCl%2FzHilrSN3IIVzubSmt6cfEln14Jz8AiEAuEOwjvdJXPGxSqH9ghTHU7IcW7Li8jM4sjYYEWXH1lQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDF79OseWpMR7QhwilSrcA0zJWjTgW37udDsWFAb9S8e9GzBYWiY2MKUAVlc5fh%2ByF%2FKKQWs%2BjJv0Q8PXseeDyvPf%2BNaZQpslAV6j6f2g2uydVQc0goOEFweJRV3eY5bx5YbwcdsXELi6Z9bDnX9AacdmtjXdx2c5HdGzwy7cVDEyXSYYaqE6cF3veFdbL7m9MIZ%2B4B43qVfggPzUOZ15PEvui1FrzaY7dTGUk%2FerfaGSIWrES2%2BRWmp8qJ9dqKOrA1DTAPy1SKcpVTeu%2B3M1me%2FVVoMiLYuq5ubhZe0hX9m8W6wxnJOUO524LIfo008UXrkXdDkjiF1ReAXPE8ektKXAS0hMJG6vqIxNqaSaeZDh5sLItIokmKs0OivHHh4e037FmjAx6N0wQ0QfYM43hLetxHY6gxQxTeGFu4dUmj7DzHFrvxUieI%2BB3vtMtlF2axRoOQdwkTtcPele7rat6F8xsTlncWIgoKNTheQBJAgJ2fkac%2B7jN5b0rp1GeVWqtRXc3l1YQwj6NShad4NRNuj9CLgL4ANAcCylF0YujkHAgi2ZcoKOGi4D9ZGiiZHGqgCzKJNeU6Re%2BwgUNdfGgjMudP41iGpaxvUk6%2FDLRoHfdko%2Fp%2FY4ce7aFyCMOZIc0LEyCRuas5ztQvT4MNWSssIGOqUBPqXxnj0FWj1RJLwF0Z88i%2Fdv6hKjAmiRJt%2B84mDZhXzKhQwYjaE91wWMUvbfRw%2BtMpjDsPAh2gqcNCnVtLTbEb9CwF1DJ8akNGBupDEhNKYlFn5zM2jBhm%2F6IWN76RNPpwpDPN1OCIlF783qVT3n24nFmpa0WL1yCStqIftlwLZ0vzBc%2BuZYKoV4G6DRWswdKclveVVSYR%2BbwB%2FHciXxRvMZcHtA&X-Amz-Signature=65708e99d2c34a8e0418d46a8ee71f64fd3d2b3f5b98f7f400c911123ab984b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WJLNU7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH%2BLLNFHZHn%2BMCl%2FzHilrSN3IIVzubSmt6cfEln14Jz8AiEAuEOwjvdJXPGxSqH9ghTHU7IcW7Li8jM4sjYYEWXH1lQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDF79OseWpMR7QhwilSrcA0zJWjTgW37udDsWFAb9S8e9GzBYWiY2MKUAVlc5fh%2ByF%2FKKQWs%2BjJv0Q8PXseeDyvPf%2BNaZQpslAV6j6f2g2uydVQc0goOEFweJRV3eY5bx5YbwcdsXELi6Z9bDnX9AacdmtjXdx2c5HdGzwy7cVDEyXSYYaqE6cF3veFdbL7m9MIZ%2B4B43qVfggPzUOZ15PEvui1FrzaY7dTGUk%2FerfaGSIWrES2%2BRWmp8qJ9dqKOrA1DTAPy1SKcpVTeu%2B3M1me%2FVVoMiLYuq5ubhZe0hX9m8W6wxnJOUO524LIfo008UXrkXdDkjiF1ReAXPE8ektKXAS0hMJG6vqIxNqaSaeZDh5sLItIokmKs0OivHHh4e037FmjAx6N0wQ0QfYM43hLetxHY6gxQxTeGFu4dUmj7DzHFrvxUieI%2BB3vtMtlF2axRoOQdwkTtcPele7rat6F8xsTlncWIgoKNTheQBJAgJ2fkac%2B7jN5b0rp1GeVWqtRXc3l1YQwj6NShad4NRNuj9CLgL4ANAcCylF0YujkHAgi2ZcoKOGi4D9ZGiiZHGqgCzKJNeU6Re%2BwgUNdfGgjMudP41iGpaxvUk6%2FDLRoHfdko%2Fp%2FY4ce7aFyCMOZIc0LEyCRuas5ztQvT4MNWSssIGOqUBPqXxnj0FWj1RJLwF0Z88i%2Fdv6hKjAmiRJt%2B84mDZhXzKhQwYjaE91wWMUvbfRw%2BtMpjDsPAh2gqcNCnVtLTbEb9CwF1DJ8akNGBupDEhNKYlFn5zM2jBhm%2F6IWN76RNPpwpDPN1OCIlF783qVT3n24nFmpa0WL1yCStqIftlwLZ0vzBc%2BuZYKoV4G6DRWswdKclveVVSYR%2BbwB%2FHciXxRvMZcHtA&X-Amz-Signature=84aaab940d2fd06cac203382c51a09d10d04a9598bbf55341e23adc7026ce2fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WJLNU7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH%2BLLNFHZHn%2BMCl%2FzHilrSN3IIVzubSmt6cfEln14Jz8AiEAuEOwjvdJXPGxSqH9ghTHU7IcW7Li8jM4sjYYEWXH1lQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDF79OseWpMR7QhwilSrcA0zJWjTgW37udDsWFAb9S8e9GzBYWiY2MKUAVlc5fh%2ByF%2FKKQWs%2BjJv0Q8PXseeDyvPf%2BNaZQpslAV6j6f2g2uydVQc0goOEFweJRV3eY5bx5YbwcdsXELi6Z9bDnX9AacdmtjXdx2c5HdGzwy7cVDEyXSYYaqE6cF3veFdbL7m9MIZ%2B4B43qVfggPzUOZ15PEvui1FrzaY7dTGUk%2FerfaGSIWrES2%2BRWmp8qJ9dqKOrA1DTAPy1SKcpVTeu%2B3M1me%2FVVoMiLYuq5ubhZe0hX9m8W6wxnJOUO524LIfo008UXrkXdDkjiF1ReAXPE8ektKXAS0hMJG6vqIxNqaSaeZDh5sLItIokmKs0OivHHh4e037FmjAx6N0wQ0QfYM43hLetxHY6gxQxTeGFu4dUmj7DzHFrvxUieI%2BB3vtMtlF2axRoOQdwkTtcPele7rat6F8xsTlncWIgoKNTheQBJAgJ2fkac%2B7jN5b0rp1GeVWqtRXc3l1YQwj6NShad4NRNuj9CLgL4ANAcCylF0YujkHAgi2ZcoKOGi4D9ZGiiZHGqgCzKJNeU6Re%2BwgUNdfGgjMudP41iGpaxvUk6%2FDLRoHfdko%2Fp%2FY4ce7aFyCMOZIc0LEyCRuas5ztQvT4MNWSssIGOqUBPqXxnj0FWj1RJLwF0Z88i%2Fdv6hKjAmiRJt%2B84mDZhXzKhQwYjaE91wWMUvbfRw%2BtMpjDsPAh2gqcNCnVtLTbEb9CwF1DJ8akNGBupDEhNKYlFn5zM2jBhm%2F6IWN76RNPpwpDPN1OCIlF783qVT3n24nFmpa0WL1yCStqIftlwLZ0vzBc%2BuZYKoV4G6DRWswdKclveVVSYR%2BbwB%2FHciXxRvMZcHtA&X-Amz-Signature=e43bb22d092652b55ad3107019a24465ad40cd00d70df5ad9d0447e647ba9873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
