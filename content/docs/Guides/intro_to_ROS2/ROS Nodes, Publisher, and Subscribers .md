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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SO4UJD7%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGCu1nolkajT7OERwrKIdOKg1Hut%2FFuzxFlWreulS0wnAiEAs1uUoBd9mTlCwvCbBzO5pjK%2FOw7P%2Bk1M4nIgTvuZ%2BA0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FYdk%2F9%2B1vrTrGwgyrcAwt216NlY4CzrA4ed5cwJHAB3V2RYQFO4v598Vk5gDOee30AOhQvArEBfLo4mv9IvqsfcylZxTd6%2BurfBWt0XbdvMOj0LVYjhwE4KR7X7Y9DiyYMFiAv9rEbUF8way97E6SIDJPbuOCzf7xcKl3VUVuUkB7j%2BW6HAEHRV3rp%2FCWmcL09%2F8gH3YXU01xB47%2FgmFOP0OSz5cAJzhySTdvkYsUnS0Fo12%2BfQMssrv%2BK6tSUx8r1malEtsZsAAJ6xmtnbhXoEThiTEoHefx%2F8a8ilIzCCc5FGuR5OymFh370Q7IOfbdCclRODlnfdli697rcMcoXVCQZerr8lvcetvKnWNDxNoiqiqm7SZ4FSYKGspb9trCnYIR8D0Liz%2B1R9lmAnqiFPfuGhZzYaOfk2mEri%2BoEXYM%2BNkBmz9hiFj3Oiius2TjO%2Bp965nF4ewsfMaMLvLYkKjAbdpcWZgzqdrt5keRafw%2BY7nmkNGGVB8VhTY6yuBU%2F3smjva%2B5cLQVtCWrNxOSGbyqCKVxm4FW2nK3fU%2ByXKlA4bPmxZ8pYWEfJjJhS2BQ0z4RhpnA11I4hWmPxcHo2pOygSfyGq%2FexyyVAt6q98fcF9Dhhrup25sLRle%2BsHbpnAweR8USZ5%2FOMMLz178GOqUBwDGMxMx21fGE3ETjMKnivxr01lrG1EcyKFDtoseUPH3c7dRjyc1YbdAlv2B4OknDIWpdjHChyKuaa3elDWlfH4oYoFOCVEWD7axTS0rlVxyUlOXSZLWMuO%2B%2Brh9b9inZsRNkU%2FA%2FLsZlEEOukQIJik%2FKwsQtn%2BG00vTNmGKlYexbwQdk73mpa8UmA7nsLdGVVoBFM2tGxBgiq6i6c%2FkAlV51e5tD&X-Amz-Signature=e2f9e4c2e6360f8467270422c7c545b75e1dfe19a378c2b664ff876bf7bd0723&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SO4UJD7%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGCu1nolkajT7OERwrKIdOKg1Hut%2FFuzxFlWreulS0wnAiEAs1uUoBd9mTlCwvCbBzO5pjK%2FOw7P%2Bk1M4nIgTvuZ%2BA0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FYdk%2F9%2B1vrTrGwgyrcAwt216NlY4CzrA4ed5cwJHAB3V2RYQFO4v598Vk5gDOee30AOhQvArEBfLo4mv9IvqsfcylZxTd6%2BurfBWt0XbdvMOj0LVYjhwE4KR7X7Y9DiyYMFiAv9rEbUF8way97E6SIDJPbuOCzf7xcKl3VUVuUkB7j%2BW6HAEHRV3rp%2FCWmcL09%2F8gH3YXU01xB47%2FgmFOP0OSz5cAJzhySTdvkYsUnS0Fo12%2BfQMssrv%2BK6tSUx8r1malEtsZsAAJ6xmtnbhXoEThiTEoHefx%2F8a8ilIzCCc5FGuR5OymFh370Q7IOfbdCclRODlnfdli697rcMcoXVCQZerr8lvcetvKnWNDxNoiqiqm7SZ4FSYKGspb9trCnYIR8D0Liz%2B1R9lmAnqiFPfuGhZzYaOfk2mEri%2BoEXYM%2BNkBmz9hiFj3Oiius2TjO%2Bp965nF4ewsfMaMLvLYkKjAbdpcWZgzqdrt5keRafw%2BY7nmkNGGVB8VhTY6yuBU%2F3smjva%2B5cLQVtCWrNxOSGbyqCKVxm4FW2nK3fU%2ByXKlA4bPmxZ8pYWEfJjJhS2BQ0z4RhpnA11I4hWmPxcHo2pOygSfyGq%2FexyyVAt6q98fcF9Dhhrup25sLRle%2BsHbpnAweR8USZ5%2FOMMLz178GOqUBwDGMxMx21fGE3ETjMKnivxr01lrG1EcyKFDtoseUPH3c7dRjyc1YbdAlv2B4OknDIWpdjHChyKuaa3elDWlfH4oYoFOCVEWD7axTS0rlVxyUlOXSZLWMuO%2B%2Brh9b9inZsRNkU%2FA%2FLsZlEEOukQIJik%2FKwsQtn%2BG00vTNmGKlYexbwQdk73mpa8UmA7nsLdGVVoBFM2tGxBgiq6i6c%2FkAlV51e5tD&X-Amz-Signature=3007bf407b5e242893d1f6b3d7527d1c3e00b08816c8111d8de7c55d82f761d0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SO4UJD7%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGCu1nolkajT7OERwrKIdOKg1Hut%2FFuzxFlWreulS0wnAiEAs1uUoBd9mTlCwvCbBzO5pjK%2FOw7P%2Bk1M4nIgTvuZ%2BA0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FYdk%2F9%2B1vrTrGwgyrcAwt216NlY4CzrA4ed5cwJHAB3V2RYQFO4v598Vk5gDOee30AOhQvArEBfLo4mv9IvqsfcylZxTd6%2BurfBWt0XbdvMOj0LVYjhwE4KR7X7Y9DiyYMFiAv9rEbUF8way97E6SIDJPbuOCzf7xcKl3VUVuUkB7j%2BW6HAEHRV3rp%2FCWmcL09%2F8gH3YXU01xB47%2FgmFOP0OSz5cAJzhySTdvkYsUnS0Fo12%2BfQMssrv%2BK6tSUx8r1malEtsZsAAJ6xmtnbhXoEThiTEoHefx%2F8a8ilIzCCc5FGuR5OymFh370Q7IOfbdCclRODlnfdli697rcMcoXVCQZerr8lvcetvKnWNDxNoiqiqm7SZ4FSYKGspb9trCnYIR8D0Liz%2B1R9lmAnqiFPfuGhZzYaOfk2mEri%2BoEXYM%2BNkBmz9hiFj3Oiius2TjO%2Bp965nF4ewsfMaMLvLYkKjAbdpcWZgzqdrt5keRafw%2BY7nmkNGGVB8VhTY6yuBU%2F3smjva%2B5cLQVtCWrNxOSGbyqCKVxm4FW2nK3fU%2ByXKlA4bPmxZ8pYWEfJjJhS2BQ0z4RhpnA11I4hWmPxcHo2pOygSfyGq%2FexyyVAt6q98fcF9Dhhrup25sLRle%2BsHbpnAweR8USZ5%2FOMMLz178GOqUBwDGMxMx21fGE3ETjMKnivxr01lrG1EcyKFDtoseUPH3c7dRjyc1YbdAlv2B4OknDIWpdjHChyKuaa3elDWlfH4oYoFOCVEWD7axTS0rlVxyUlOXSZLWMuO%2B%2Brh9b9inZsRNkU%2FA%2FLsZlEEOukQIJik%2FKwsQtn%2BG00vTNmGKlYexbwQdk73mpa8UmA7nsLdGVVoBFM2tGxBgiq6i6c%2FkAlV51e5tD&X-Amz-Signature=ea2d5edbed8d1afabcd0921fd663c9485ae441c71d9009d3dd0a9041a04d4e21&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SO4UJD7%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGCu1nolkajT7OERwrKIdOKg1Hut%2FFuzxFlWreulS0wnAiEAs1uUoBd9mTlCwvCbBzO5pjK%2FOw7P%2Bk1M4nIgTvuZ%2BA0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FYdk%2F9%2B1vrTrGwgyrcAwt216NlY4CzrA4ed5cwJHAB3V2RYQFO4v598Vk5gDOee30AOhQvArEBfLo4mv9IvqsfcylZxTd6%2BurfBWt0XbdvMOj0LVYjhwE4KR7X7Y9DiyYMFiAv9rEbUF8way97E6SIDJPbuOCzf7xcKl3VUVuUkB7j%2BW6HAEHRV3rp%2FCWmcL09%2F8gH3YXU01xB47%2FgmFOP0OSz5cAJzhySTdvkYsUnS0Fo12%2BfQMssrv%2BK6tSUx8r1malEtsZsAAJ6xmtnbhXoEThiTEoHefx%2F8a8ilIzCCc5FGuR5OymFh370Q7IOfbdCclRODlnfdli697rcMcoXVCQZerr8lvcetvKnWNDxNoiqiqm7SZ4FSYKGspb9trCnYIR8D0Liz%2B1R9lmAnqiFPfuGhZzYaOfk2mEri%2BoEXYM%2BNkBmz9hiFj3Oiius2TjO%2Bp965nF4ewsfMaMLvLYkKjAbdpcWZgzqdrt5keRafw%2BY7nmkNGGVB8VhTY6yuBU%2F3smjva%2B5cLQVtCWrNxOSGbyqCKVxm4FW2nK3fU%2ByXKlA4bPmxZ8pYWEfJjJhS2BQ0z4RhpnA11I4hWmPxcHo2pOygSfyGq%2FexyyVAt6q98fcF9Dhhrup25sLRle%2BsHbpnAweR8USZ5%2FOMMLz178GOqUBwDGMxMx21fGE3ETjMKnivxr01lrG1EcyKFDtoseUPH3c7dRjyc1YbdAlv2B4OknDIWpdjHChyKuaa3elDWlfH4oYoFOCVEWD7axTS0rlVxyUlOXSZLWMuO%2B%2Brh9b9inZsRNkU%2FA%2FLsZlEEOukQIJik%2FKwsQtn%2BG00vTNmGKlYexbwQdk73mpa8UmA7nsLdGVVoBFM2tGxBgiq6i6c%2FkAlV51e5tD&X-Amz-Signature=09c89f6751b117e2c4494bbdb7f1caa7e622fb29528d8e68037069f53128df54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SO4UJD7%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGCu1nolkajT7OERwrKIdOKg1Hut%2FFuzxFlWreulS0wnAiEAs1uUoBd9mTlCwvCbBzO5pjK%2FOw7P%2Bk1M4nIgTvuZ%2BA0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FYdk%2F9%2B1vrTrGwgyrcAwt216NlY4CzrA4ed5cwJHAB3V2RYQFO4v598Vk5gDOee30AOhQvArEBfLo4mv9IvqsfcylZxTd6%2BurfBWt0XbdvMOj0LVYjhwE4KR7X7Y9DiyYMFiAv9rEbUF8way97E6SIDJPbuOCzf7xcKl3VUVuUkB7j%2BW6HAEHRV3rp%2FCWmcL09%2F8gH3YXU01xB47%2FgmFOP0OSz5cAJzhySTdvkYsUnS0Fo12%2BfQMssrv%2BK6tSUx8r1malEtsZsAAJ6xmtnbhXoEThiTEoHefx%2F8a8ilIzCCc5FGuR5OymFh370Q7IOfbdCclRODlnfdli697rcMcoXVCQZerr8lvcetvKnWNDxNoiqiqm7SZ4FSYKGspb9trCnYIR8D0Liz%2B1R9lmAnqiFPfuGhZzYaOfk2mEri%2BoEXYM%2BNkBmz9hiFj3Oiius2TjO%2Bp965nF4ewsfMaMLvLYkKjAbdpcWZgzqdrt5keRafw%2BY7nmkNGGVB8VhTY6yuBU%2F3smjva%2B5cLQVtCWrNxOSGbyqCKVxm4FW2nK3fU%2ByXKlA4bPmxZ8pYWEfJjJhS2BQ0z4RhpnA11I4hWmPxcHo2pOygSfyGq%2FexyyVAt6q98fcF9Dhhrup25sLRle%2BsHbpnAweR8USZ5%2FOMMLz178GOqUBwDGMxMx21fGE3ETjMKnivxr01lrG1EcyKFDtoseUPH3c7dRjyc1YbdAlv2B4OknDIWpdjHChyKuaa3elDWlfH4oYoFOCVEWD7axTS0rlVxyUlOXSZLWMuO%2B%2Brh9b9inZsRNkU%2FA%2FLsZlEEOukQIJik%2FKwsQtn%2BG00vTNmGKlYexbwQdk73mpa8UmA7nsLdGVVoBFM2tGxBgiq6i6c%2FkAlV51e5tD&X-Amz-Signature=1e7a58ab05b30d44b74a7bbe10ea1e84e629970e51c12b0922355a72a813627c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SO4UJD7%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGCu1nolkajT7OERwrKIdOKg1Hut%2FFuzxFlWreulS0wnAiEAs1uUoBd9mTlCwvCbBzO5pjK%2FOw7P%2Bk1M4nIgTvuZ%2BA0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FYdk%2F9%2B1vrTrGwgyrcAwt216NlY4CzrA4ed5cwJHAB3V2RYQFO4v598Vk5gDOee30AOhQvArEBfLo4mv9IvqsfcylZxTd6%2BurfBWt0XbdvMOj0LVYjhwE4KR7X7Y9DiyYMFiAv9rEbUF8way97E6SIDJPbuOCzf7xcKl3VUVuUkB7j%2BW6HAEHRV3rp%2FCWmcL09%2F8gH3YXU01xB47%2FgmFOP0OSz5cAJzhySTdvkYsUnS0Fo12%2BfQMssrv%2BK6tSUx8r1malEtsZsAAJ6xmtnbhXoEThiTEoHefx%2F8a8ilIzCCc5FGuR5OymFh370Q7IOfbdCclRODlnfdli697rcMcoXVCQZerr8lvcetvKnWNDxNoiqiqm7SZ4FSYKGspb9trCnYIR8D0Liz%2B1R9lmAnqiFPfuGhZzYaOfk2mEri%2BoEXYM%2BNkBmz9hiFj3Oiius2TjO%2Bp965nF4ewsfMaMLvLYkKjAbdpcWZgzqdrt5keRafw%2BY7nmkNGGVB8VhTY6yuBU%2F3smjva%2B5cLQVtCWrNxOSGbyqCKVxm4FW2nK3fU%2ByXKlA4bPmxZ8pYWEfJjJhS2BQ0z4RhpnA11I4hWmPxcHo2pOygSfyGq%2FexyyVAt6q98fcF9Dhhrup25sLRle%2BsHbpnAweR8USZ5%2FOMMLz178GOqUBwDGMxMx21fGE3ETjMKnivxr01lrG1EcyKFDtoseUPH3c7dRjyc1YbdAlv2B4OknDIWpdjHChyKuaa3elDWlfH4oYoFOCVEWD7axTS0rlVxyUlOXSZLWMuO%2B%2Brh9b9inZsRNkU%2FA%2FLsZlEEOukQIJik%2FKwsQtn%2BG00vTNmGKlYexbwQdk73mpa8UmA7nsLdGVVoBFM2tGxBgiq6i6c%2FkAlV51e5tD&X-Amz-Signature=3f8b64aa9408a8050abc87f7447cd312c0819bed72e2eac133d09db15db538d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SO4UJD7%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGCu1nolkajT7OERwrKIdOKg1Hut%2FFuzxFlWreulS0wnAiEAs1uUoBd9mTlCwvCbBzO5pjK%2FOw7P%2Bk1M4nIgTvuZ%2BA0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FYdk%2F9%2B1vrTrGwgyrcAwt216NlY4CzrA4ed5cwJHAB3V2RYQFO4v598Vk5gDOee30AOhQvArEBfLo4mv9IvqsfcylZxTd6%2BurfBWt0XbdvMOj0LVYjhwE4KR7X7Y9DiyYMFiAv9rEbUF8way97E6SIDJPbuOCzf7xcKl3VUVuUkB7j%2BW6HAEHRV3rp%2FCWmcL09%2F8gH3YXU01xB47%2FgmFOP0OSz5cAJzhySTdvkYsUnS0Fo12%2BfQMssrv%2BK6tSUx8r1malEtsZsAAJ6xmtnbhXoEThiTEoHefx%2F8a8ilIzCCc5FGuR5OymFh370Q7IOfbdCclRODlnfdli697rcMcoXVCQZerr8lvcetvKnWNDxNoiqiqm7SZ4FSYKGspb9trCnYIR8D0Liz%2B1R9lmAnqiFPfuGhZzYaOfk2mEri%2BoEXYM%2BNkBmz9hiFj3Oiius2TjO%2Bp965nF4ewsfMaMLvLYkKjAbdpcWZgzqdrt5keRafw%2BY7nmkNGGVB8VhTY6yuBU%2F3smjva%2B5cLQVtCWrNxOSGbyqCKVxm4FW2nK3fU%2ByXKlA4bPmxZ8pYWEfJjJhS2BQ0z4RhpnA11I4hWmPxcHo2pOygSfyGq%2FexyyVAt6q98fcF9Dhhrup25sLRle%2BsHbpnAweR8USZ5%2FOMMLz178GOqUBwDGMxMx21fGE3ETjMKnivxr01lrG1EcyKFDtoseUPH3c7dRjyc1YbdAlv2B4OknDIWpdjHChyKuaa3elDWlfH4oYoFOCVEWD7axTS0rlVxyUlOXSZLWMuO%2B%2Brh9b9inZsRNkU%2FA%2FLsZlEEOukQIJik%2FKwsQtn%2BG00vTNmGKlYexbwQdk73mpa8UmA7nsLdGVVoBFM2tGxBgiq6i6c%2FkAlV51e5tD&X-Amz-Signature=8ee8bfe896ed15626f696fafdc18f28cfad53ac8d4ab0683299ce7091e55ee47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SO4UJD7%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGCu1nolkajT7OERwrKIdOKg1Hut%2FFuzxFlWreulS0wnAiEAs1uUoBd9mTlCwvCbBzO5pjK%2FOw7P%2Bk1M4nIgTvuZ%2BA0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FYdk%2F9%2B1vrTrGwgyrcAwt216NlY4CzrA4ed5cwJHAB3V2RYQFO4v598Vk5gDOee30AOhQvArEBfLo4mv9IvqsfcylZxTd6%2BurfBWt0XbdvMOj0LVYjhwE4KR7X7Y9DiyYMFiAv9rEbUF8way97E6SIDJPbuOCzf7xcKl3VUVuUkB7j%2BW6HAEHRV3rp%2FCWmcL09%2F8gH3YXU01xB47%2FgmFOP0OSz5cAJzhySTdvkYsUnS0Fo12%2BfQMssrv%2BK6tSUx8r1malEtsZsAAJ6xmtnbhXoEThiTEoHefx%2F8a8ilIzCCc5FGuR5OymFh370Q7IOfbdCclRODlnfdli697rcMcoXVCQZerr8lvcetvKnWNDxNoiqiqm7SZ4FSYKGspb9trCnYIR8D0Liz%2B1R9lmAnqiFPfuGhZzYaOfk2mEri%2BoEXYM%2BNkBmz9hiFj3Oiius2TjO%2Bp965nF4ewsfMaMLvLYkKjAbdpcWZgzqdrt5keRafw%2BY7nmkNGGVB8VhTY6yuBU%2F3smjva%2B5cLQVtCWrNxOSGbyqCKVxm4FW2nK3fU%2ByXKlA4bPmxZ8pYWEfJjJhS2BQ0z4RhpnA11I4hWmPxcHo2pOygSfyGq%2FexyyVAt6q98fcF9Dhhrup25sLRle%2BsHbpnAweR8USZ5%2FOMMLz178GOqUBwDGMxMx21fGE3ETjMKnivxr01lrG1EcyKFDtoseUPH3c7dRjyc1YbdAlv2B4OknDIWpdjHChyKuaa3elDWlfH4oYoFOCVEWD7axTS0rlVxyUlOXSZLWMuO%2B%2Brh9b9inZsRNkU%2FA%2FLsZlEEOukQIJik%2FKwsQtn%2BG00vTNmGKlYexbwQdk73mpa8UmA7nsLdGVVoBFM2tGxBgiq6i6c%2FkAlV51e5tD&X-Amz-Signature=0eba81efea2370d8e8f1e0f96a7bbb55c6b469ad1b3d542e6c828fcb80f90b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
