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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZXNH2Z%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnPzpJPFUjz4gWfeJaYP5kJmYAgaKmn5j%2FZhsqNZz7ZAiAu2n4%2FhWRR7j4ntlu3LPTvxdK9DUKLeRgJqYnc9T9kSiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3FxgRGvKm%2B6WknRPKtwDICjfXg%2FvyTGdMK8wk1Myv43ja0THXlUqoy9PoJeSUCgJh9XlYbYI7UGYXdYzFY8v%2F0ibdOgAhLLwtlaJP4lk7QN9LiY%2B1IwjZKQYfLtdtdu1OUHOG2XtWqgGCt369q5R94Qg3c1cAjz7ha%2FjENrl%2FHbXRXmtIdW43y93F4%2FzR5k%2B5Z4w%2FYp0EWSJujYMiGJuMWGPETqUXr46Twm1kQ5Z3MWAfQS3KVF8fU8s%2BseivEa%2FLfwksuHPEqXN7WImsAvV5vAPS3J4%2FVij5Ilg5SwFiorJ1Zvag5tvirLwG9ebPa70pYywAvedR%2FzRfrKdWecczzpB7rHJstzrZUJWM%2B65D8YxILMKdGgwFlXK8etcjh8sQ7xICg5RoeMdVFwy2f9TgGxWAzTNsd%2BGa0aLNL8S%2BMyA1UTglAizQacHuv04gDHMdGz5LvgWDQmVlDl7y9myWp22tnNnQ1jqAYkPuL8wjMdkVif%2BmcxCk4jjM2PeG9TeR%2BlS%2FAliEcyq2S5tI1uuKCVXMRnztw%2FdwSSI8GTOSa50pO9UeLVuGk3FgrUadtvMxfLYDRk%2BalhtafSO0WOWQ3pI40XVC6oNBp%2B4ULAixDxrgFDHhFIO6E4wGYiP4di3uuVssrda98gvYEIw9f3fwQY6pgHAJ%2Be%2By%2B6o7Tka3GBkckF2CXeTeApFeiYxvGV%2FXiZ%2F1bnTwjKICgSVtuaG6sc61kaQBrnd1xf9fGb3X44Nrem39lQP5Yilxy%2FHQixiB%2FOKULJL72p7AdUlVY2uNZhBr1N0ykAPINmcQ%2Fy2TbEfFhY0munkaE%2FVML0FL94kZw9jc%2FjyjeLa38Rp3ye2Eg1qHXa3JzZZjDz6ay0MRFxPu%2Fbw82K9P1I3&X-Amz-Signature=5969e948a0363429a98125d632b1e9d034adb2753c4a846ad25a04a1707ea3af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZXNH2Z%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnPzpJPFUjz4gWfeJaYP5kJmYAgaKmn5j%2FZhsqNZz7ZAiAu2n4%2FhWRR7j4ntlu3LPTvxdK9DUKLeRgJqYnc9T9kSiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3FxgRGvKm%2B6WknRPKtwDICjfXg%2FvyTGdMK8wk1Myv43ja0THXlUqoy9PoJeSUCgJh9XlYbYI7UGYXdYzFY8v%2F0ibdOgAhLLwtlaJP4lk7QN9LiY%2B1IwjZKQYfLtdtdu1OUHOG2XtWqgGCt369q5R94Qg3c1cAjz7ha%2FjENrl%2FHbXRXmtIdW43y93F4%2FzR5k%2B5Z4w%2FYp0EWSJujYMiGJuMWGPETqUXr46Twm1kQ5Z3MWAfQS3KVF8fU8s%2BseivEa%2FLfwksuHPEqXN7WImsAvV5vAPS3J4%2FVij5Ilg5SwFiorJ1Zvag5tvirLwG9ebPa70pYywAvedR%2FzRfrKdWecczzpB7rHJstzrZUJWM%2B65D8YxILMKdGgwFlXK8etcjh8sQ7xICg5RoeMdVFwy2f9TgGxWAzTNsd%2BGa0aLNL8S%2BMyA1UTglAizQacHuv04gDHMdGz5LvgWDQmVlDl7y9myWp22tnNnQ1jqAYkPuL8wjMdkVif%2BmcxCk4jjM2PeG9TeR%2BlS%2FAliEcyq2S5tI1uuKCVXMRnztw%2FdwSSI8GTOSa50pO9UeLVuGk3FgrUadtvMxfLYDRk%2BalhtafSO0WOWQ3pI40XVC6oNBp%2B4ULAixDxrgFDHhFIO6E4wGYiP4di3uuVssrda98gvYEIw9f3fwQY6pgHAJ%2Be%2By%2B6o7Tka3GBkckF2CXeTeApFeiYxvGV%2FXiZ%2F1bnTwjKICgSVtuaG6sc61kaQBrnd1xf9fGb3X44Nrem39lQP5Yilxy%2FHQixiB%2FOKULJL72p7AdUlVY2uNZhBr1N0ykAPINmcQ%2Fy2TbEfFhY0munkaE%2FVML0FL94kZw9jc%2FjyjeLa38Rp3ye2Eg1qHXa3JzZZjDz6ay0MRFxPu%2Fbw82K9P1I3&X-Amz-Signature=674e1126ac2b4276949f5d9c2345d0787b114b430febf43f5c0ce6ee28973204&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZXNH2Z%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnPzpJPFUjz4gWfeJaYP5kJmYAgaKmn5j%2FZhsqNZz7ZAiAu2n4%2FhWRR7j4ntlu3LPTvxdK9DUKLeRgJqYnc9T9kSiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3FxgRGvKm%2B6WknRPKtwDICjfXg%2FvyTGdMK8wk1Myv43ja0THXlUqoy9PoJeSUCgJh9XlYbYI7UGYXdYzFY8v%2F0ibdOgAhLLwtlaJP4lk7QN9LiY%2B1IwjZKQYfLtdtdu1OUHOG2XtWqgGCt369q5R94Qg3c1cAjz7ha%2FjENrl%2FHbXRXmtIdW43y93F4%2FzR5k%2B5Z4w%2FYp0EWSJujYMiGJuMWGPETqUXr46Twm1kQ5Z3MWAfQS3KVF8fU8s%2BseivEa%2FLfwksuHPEqXN7WImsAvV5vAPS3J4%2FVij5Ilg5SwFiorJ1Zvag5tvirLwG9ebPa70pYywAvedR%2FzRfrKdWecczzpB7rHJstzrZUJWM%2B65D8YxILMKdGgwFlXK8etcjh8sQ7xICg5RoeMdVFwy2f9TgGxWAzTNsd%2BGa0aLNL8S%2BMyA1UTglAizQacHuv04gDHMdGz5LvgWDQmVlDl7y9myWp22tnNnQ1jqAYkPuL8wjMdkVif%2BmcxCk4jjM2PeG9TeR%2BlS%2FAliEcyq2S5tI1uuKCVXMRnztw%2FdwSSI8GTOSa50pO9UeLVuGk3FgrUadtvMxfLYDRk%2BalhtafSO0WOWQ3pI40XVC6oNBp%2B4ULAixDxrgFDHhFIO6E4wGYiP4di3uuVssrda98gvYEIw9f3fwQY6pgHAJ%2Be%2By%2B6o7Tka3GBkckF2CXeTeApFeiYxvGV%2FXiZ%2F1bnTwjKICgSVtuaG6sc61kaQBrnd1xf9fGb3X44Nrem39lQP5Yilxy%2FHQixiB%2FOKULJL72p7AdUlVY2uNZhBr1N0ykAPINmcQ%2Fy2TbEfFhY0munkaE%2FVML0FL94kZw9jc%2FjyjeLa38Rp3ye2Eg1qHXa3JzZZjDz6ay0MRFxPu%2Fbw82K9P1I3&X-Amz-Signature=96de637d77a26aee341eb7cc7798bfcb3908306a21e196ac7f291b9ad048e903&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZXNH2Z%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnPzpJPFUjz4gWfeJaYP5kJmYAgaKmn5j%2FZhsqNZz7ZAiAu2n4%2FhWRR7j4ntlu3LPTvxdK9DUKLeRgJqYnc9T9kSiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3FxgRGvKm%2B6WknRPKtwDICjfXg%2FvyTGdMK8wk1Myv43ja0THXlUqoy9PoJeSUCgJh9XlYbYI7UGYXdYzFY8v%2F0ibdOgAhLLwtlaJP4lk7QN9LiY%2B1IwjZKQYfLtdtdu1OUHOG2XtWqgGCt369q5R94Qg3c1cAjz7ha%2FjENrl%2FHbXRXmtIdW43y93F4%2FzR5k%2B5Z4w%2FYp0EWSJujYMiGJuMWGPETqUXr46Twm1kQ5Z3MWAfQS3KVF8fU8s%2BseivEa%2FLfwksuHPEqXN7WImsAvV5vAPS3J4%2FVij5Ilg5SwFiorJ1Zvag5tvirLwG9ebPa70pYywAvedR%2FzRfrKdWecczzpB7rHJstzrZUJWM%2B65D8YxILMKdGgwFlXK8etcjh8sQ7xICg5RoeMdVFwy2f9TgGxWAzTNsd%2BGa0aLNL8S%2BMyA1UTglAizQacHuv04gDHMdGz5LvgWDQmVlDl7y9myWp22tnNnQ1jqAYkPuL8wjMdkVif%2BmcxCk4jjM2PeG9TeR%2BlS%2FAliEcyq2S5tI1uuKCVXMRnztw%2FdwSSI8GTOSa50pO9UeLVuGk3FgrUadtvMxfLYDRk%2BalhtafSO0WOWQ3pI40XVC6oNBp%2B4ULAixDxrgFDHhFIO6E4wGYiP4di3uuVssrda98gvYEIw9f3fwQY6pgHAJ%2Be%2By%2B6o7Tka3GBkckF2CXeTeApFeiYxvGV%2FXiZ%2F1bnTwjKICgSVtuaG6sc61kaQBrnd1xf9fGb3X44Nrem39lQP5Yilxy%2FHQixiB%2FOKULJL72p7AdUlVY2uNZhBr1N0ykAPINmcQ%2Fy2TbEfFhY0munkaE%2FVML0FL94kZw9jc%2FjyjeLa38Rp3ye2Eg1qHXa3JzZZjDz6ay0MRFxPu%2Fbw82K9P1I3&X-Amz-Signature=ff050fd91badb4a14957c0678e2a17a7c2143c9ac60f4211db2404cf9c650275&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZXNH2Z%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnPzpJPFUjz4gWfeJaYP5kJmYAgaKmn5j%2FZhsqNZz7ZAiAu2n4%2FhWRR7j4ntlu3LPTvxdK9DUKLeRgJqYnc9T9kSiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3FxgRGvKm%2B6WknRPKtwDICjfXg%2FvyTGdMK8wk1Myv43ja0THXlUqoy9PoJeSUCgJh9XlYbYI7UGYXdYzFY8v%2F0ibdOgAhLLwtlaJP4lk7QN9LiY%2B1IwjZKQYfLtdtdu1OUHOG2XtWqgGCt369q5R94Qg3c1cAjz7ha%2FjENrl%2FHbXRXmtIdW43y93F4%2FzR5k%2B5Z4w%2FYp0EWSJujYMiGJuMWGPETqUXr46Twm1kQ5Z3MWAfQS3KVF8fU8s%2BseivEa%2FLfwksuHPEqXN7WImsAvV5vAPS3J4%2FVij5Ilg5SwFiorJ1Zvag5tvirLwG9ebPa70pYywAvedR%2FzRfrKdWecczzpB7rHJstzrZUJWM%2B65D8YxILMKdGgwFlXK8etcjh8sQ7xICg5RoeMdVFwy2f9TgGxWAzTNsd%2BGa0aLNL8S%2BMyA1UTglAizQacHuv04gDHMdGz5LvgWDQmVlDl7y9myWp22tnNnQ1jqAYkPuL8wjMdkVif%2BmcxCk4jjM2PeG9TeR%2BlS%2FAliEcyq2S5tI1uuKCVXMRnztw%2FdwSSI8GTOSa50pO9UeLVuGk3FgrUadtvMxfLYDRk%2BalhtafSO0WOWQ3pI40XVC6oNBp%2B4ULAixDxrgFDHhFIO6E4wGYiP4di3uuVssrda98gvYEIw9f3fwQY6pgHAJ%2Be%2By%2B6o7Tka3GBkckF2CXeTeApFeiYxvGV%2FXiZ%2F1bnTwjKICgSVtuaG6sc61kaQBrnd1xf9fGb3X44Nrem39lQP5Yilxy%2FHQixiB%2FOKULJL72p7AdUlVY2uNZhBr1N0ykAPINmcQ%2Fy2TbEfFhY0munkaE%2FVML0FL94kZw9jc%2FjyjeLa38Rp3ye2Eg1qHXa3JzZZjDz6ay0MRFxPu%2Fbw82K9P1I3&X-Amz-Signature=367307ffee2e5f7981a417449624c657d9acc9711416f25565d589279ab95140&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZXNH2Z%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnPzpJPFUjz4gWfeJaYP5kJmYAgaKmn5j%2FZhsqNZz7ZAiAu2n4%2FhWRR7j4ntlu3LPTvxdK9DUKLeRgJqYnc9T9kSiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3FxgRGvKm%2B6WknRPKtwDICjfXg%2FvyTGdMK8wk1Myv43ja0THXlUqoy9PoJeSUCgJh9XlYbYI7UGYXdYzFY8v%2F0ibdOgAhLLwtlaJP4lk7QN9LiY%2B1IwjZKQYfLtdtdu1OUHOG2XtWqgGCt369q5R94Qg3c1cAjz7ha%2FjENrl%2FHbXRXmtIdW43y93F4%2FzR5k%2B5Z4w%2FYp0EWSJujYMiGJuMWGPETqUXr46Twm1kQ5Z3MWAfQS3KVF8fU8s%2BseivEa%2FLfwksuHPEqXN7WImsAvV5vAPS3J4%2FVij5Ilg5SwFiorJ1Zvag5tvirLwG9ebPa70pYywAvedR%2FzRfrKdWecczzpB7rHJstzrZUJWM%2B65D8YxILMKdGgwFlXK8etcjh8sQ7xICg5RoeMdVFwy2f9TgGxWAzTNsd%2BGa0aLNL8S%2BMyA1UTglAizQacHuv04gDHMdGz5LvgWDQmVlDl7y9myWp22tnNnQ1jqAYkPuL8wjMdkVif%2BmcxCk4jjM2PeG9TeR%2BlS%2FAliEcyq2S5tI1uuKCVXMRnztw%2FdwSSI8GTOSa50pO9UeLVuGk3FgrUadtvMxfLYDRk%2BalhtafSO0WOWQ3pI40XVC6oNBp%2B4ULAixDxrgFDHhFIO6E4wGYiP4di3uuVssrda98gvYEIw9f3fwQY6pgHAJ%2Be%2By%2B6o7Tka3GBkckF2CXeTeApFeiYxvGV%2FXiZ%2F1bnTwjKICgSVtuaG6sc61kaQBrnd1xf9fGb3X44Nrem39lQP5Yilxy%2FHQixiB%2FOKULJL72p7AdUlVY2uNZhBr1N0ykAPINmcQ%2Fy2TbEfFhY0munkaE%2FVML0FL94kZw9jc%2FjyjeLa38Rp3ye2Eg1qHXa3JzZZjDz6ay0MRFxPu%2Fbw82K9P1I3&X-Amz-Signature=2b0fe7e82655c52ced308b85d999b549ed71fb7faaea414ee8cc0b68b8fd268a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZXNH2Z%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnPzpJPFUjz4gWfeJaYP5kJmYAgaKmn5j%2FZhsqNZz7ZAiAu2n4%2FhWRR7j4ntlu3LPTvxdK9DUKLeRgJqYnc9T9kSiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3FxgRGvKm%2B6WknRPKtwDICjfXg%2FvyTGdMK8wk1Myv43ja0THXlUqoy9PoJeSUCgJh9XlYbYI7UGYXdYzFY8v%2F0ibdOgAhLLwtlaJP4lk7QN9LiY%2B1IwjZKQYfLtdtdu1OUHOG2XtWqgGCt369q5R94Qg3c1cAjz7ha%2FjENrl%2FHbXRXmtIdW43y93F4%2FzR5k%2B5Z4w%2FYp0EWSJujYMiGJuMWGPETqUXr46Twm1kQ5Z3MWAfQS3KVF8fU8s%2BseivEa%2FLfwksuHPEqXN7WImsAvV5vAPS3J4%2FVij5Ilg5SwFiorJ1Zvag5tvirLwG9ebPa70pYywAvedR%2FzRfrKdWecczzpB7rHJstzrZUJWM%2B65D8YxILMKdGgwFlXK8etcjh8sQ7xICg5RoeMdVFwy2f9TgGxWAzTNsd%2BGa0aLNL8S%2BMyA1UTglAizQacHuv04gDHMdGz5LvgWDQmVlDl7y9myWp22tnNnQ1jqAYkPuL8wjMdkVif%2BmcxCk4jjM2PeG9TeR%2BlS%2FAliEcyq2S5tI1uuKCVXMRnztw%2FdwSSI8GTOSa50pO9UeLVuGk3FgrUadtvMxfLYDRk%2BalhtafSO0WOWQ3pI40XVC6oNBp%2B4ULAixDxrgFDHhFIO6E4wGYiP4di3uuVssrda98gvYEIw9f3fwQY6pgHAJ%2Be%2By%2B6o7Tka3GBkckF2CXeTeApFeiYxvGV%2FXiZ%2F1bnTwjKICgSVtuaG6sc61kaQBrnd1xf9fGb3X44Nrem39lQP5Yilxy%2FHQixiB%2FOKULJL72p7AdUlVY2uNZhBr1N0ykAPINmcQ%2Fy2TbEfFhY0munkaE%2FVML0FL94kZw9jc%2FjyjeLa38Rp3ye2Eg1qHXa3JzZZjDz6ay0MRFxPu%2Fbw82K9P1I3&X-Amz-Signature=239361e14306d1cf6c10df022ff1b4086594755b604781701aec0b34ef21bc44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZXNH2Z%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnPzpJPFUjz4gWfeJaYP5kJmYAgaKmn5j%2FZhsqNZz7ZAiAu2n4%2FhWRR7j4ntlu3LPTvxdK9DUKLeRgJqYnc9T9kSiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3FxgRGvKm%2B6WknRPKtwDICjfXg%2FvyTGdMK8wk1Myv43ja0THXlUqoy9PoJeSUCgJh9XlYbYI7UGYXdYzFY8v%2F0ibdOgAhLLwtlaJP4lk7QN9LiY%2B1IwjZKQYfLtdtdu1OUHOG2XtWqgGCt369q5R94Qg3c1cAjz7ha%2FjENrl%2FHbXRXmtIdW43y93F4%2FzR5k%2B5Z4w%2FYp0EWSJujYMiGJuMWGPETqUXr46Twm1kQ5Z3MWAfQS3KVF8fU8s%2BseivEa%2FLfwksuHPEqXN7WImsAvV5vAPS3J4%2FVij5Ilg5SwFiorJ1Zvag5tvirLwG9ebPa70pYywAvedR%2FzRfrKdWecczzpB7rHJstzrZUJWM%2B65D8YxILMKdGgwFlXK8etcjh8sQ7xICg5RoeMdVFwy2f9TgGxWAzTNsd%2BGa0aLNL8S%2BMyA1UTglAizQacHuv04gDHMdGz5LvgWDQmVlDl7y9myWp22tnNnQ1jqAYkPuL8wjMdkVif%2BmcxCk4jjM2PeG9TeR%2BlS%2FAliEcyq2S5tI1uuKCVXMRnztw%2FdwSSI8GTOSa50pO9UeLVuGk3FgrUadtvMxfLYDRk%2BalhtafSO0WOWQ3pI40XVC6oNBp%2B4ULAixDxrgFDHhFIO6E4wGYiP4di3uuVssrda98gvYEIw9f3fwQY6pgHAJ%2Be%2By%2B6o7Tka3GBkckF2CXeTeApFeiYxvGV%2FXiZ%2F1bnTwjKICgSVtuaG6sc61kaQBrnd1xf9fGb3X44Nrem39lQP5Yilxy%2FHQixiB%2FOKULJL72p7AdUlVY2uNZhBr1N0ykAPINmcQ%2Fy2TbEfFhY0munkaE%2FVML0FL94kZw9jc%2FjyjeLa38Rp3ye2Eg1qHXa3JzZZjDz6ay0MRFxPu%2Fbw82K9P1I3&X-Amz-Signature=b5c7542d6cafc7ab5548eca36f57c60a312f72631f80497aa9b961ffc0038b43&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
