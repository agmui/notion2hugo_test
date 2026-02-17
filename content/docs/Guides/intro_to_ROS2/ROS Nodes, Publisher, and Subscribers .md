---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662446ILTS%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDB%2FR5SPC9o2tgrQP03Hajh%2BXf6DD53bfJsC3JonwNyLQIgKWOX%2Fv8hmgd0s8eF0WtBhm2LQTf%2Fw8HYkUnrACFtYEgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDG%2FyFSNnNCLtlubqxCrcA9HWNA4NEXCzs%2Ff7kGIMB0p%2FiBnz%2BgjgX7rVIyE9F3x7SL3bKUgMJGVFRW2B%2BISmKxqBo9O5w70eZ45BOmn5pLCSAfFQKQhaR0AqEZ15c8lZKBaZsMHxeaGE%2FeIm1WU9ZA5pZ2rw%2FVEXNbBDSxg7xFZ3jClr%2F%2BsFsu%2BUgb67GLVRcA95aIIDcZPTcAV6Z9UcIWHWqx0OWX%2BNNrjRZI8zare%2BmvwpsxRi6LPMAJnNBMv5lLaaMkKs1eAmj52OcLh%2BMqFeGchAv0f1B0Q5WscQFkOQP3IBoJ8fSdZJp1kmj8D9jz5yaoNKN0Hh%2BzHyisFqF7R%2BRT432dBaScXhFPpEGjOPsYhI5QpYm5F%2FOzesmN0e6jOGGEp1T9hreaO%2F71VMjBZzYS8KRhBK%2F25Lpmx7%2BD3LCkSPF2p3GuRWd%2FH9foGkgZcukYAtWZY77zICYBcsHXietJigPJITvXGYpguK9JayE0FYgIjZ6Z6XO4rqFcatEF0KtSHY73RKixkljaicY2h3lGiYuc1hi3lvyDvLetmONDHsO0QSnxqll13wdWA6XGBdL9N%2BSWx2yS1HKlXqeZkbItpP8aXO9XpQr%2F4aSd1ZbfmZysHxnZ%2B3hxtAzkG%2FOTo8DZHlnhiF3C%2B5MPmXz8wGOqUBSn6pKVHb295ornWeHqOV4oN0H5%2BeULcdm2ZVsNuSgBc1cHAov1V9ZHZr95XLICgsphROGOt8XEMtriqNUjTGWjjDFzUIbb%2F3EkgelVUS599ZG2yQs%2FmLLyEr2bHIEbb5J1M7ffvVYhTqSKB7txSGokKCoaae%2BRIc29Fixq926aF4LShVAHHzPpD0CNBUseY8mHiividXVZs3Qx4vFtT2YifEhgWc&X-Amz-Signature=0013189d82bb37fcf358dd97e73be5defc07bbee6fef3c9dd748b1f911ca248d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662446ILTS%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDB%2FR5SPC9o2tgrQP03Hajh%2BXf6DD53bfJsC3JonwNyLQIgKWOX%2Fv8hmgd0s8eF0WtBhm2LQTf%2Fw8HYkUnrACFtYEgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDG%2FyFSNnNCLtlubqxCrcA9HWNA4NEXCzs%2Ff7kGIMB0p%2FiBnz%2BgjgX7rVIyE9F3x7SL3bKUgMJGVFRW2B%2BISmKxqBo9O5w70eZ45BOmn5pLCSAfFQKQhaR0AqEZ15c8lZKBaZsMHxeaGE%2FeIm1WU9ZA5pZ2rw%2FVEXNbBDSxg7xFZ3jClr%2F%2BsFsu%2BUgb67GLVRcA95aIIDcZPTcAV6Z9UcIWHWqx0OWX%2BNNrjRZI8zare%2BmvwpsxRi6LPMAJnNBMv5lLaaMkKs1eAmj52OcLh%2BMqFeGchAv0f1B0Q5WscQFkOQP3IBoJ8fSdZJp1kmj8D9jz5yaoNKN0Hh%2BzHyisFqF7R%2BRT432dBaScXhFPpEGjOPsYhI5QpYm5F%2FOzesmN0e6jOGGEp1T9hreaO%2F71VMjBZzYS8KRhBK%2F25Lpmx7%2BD3LCkSPF2p3GuRWd%2FH9foGkgZcukYAtWZY77zICYBcsHXietJigPJITvXGYpguK9JayE0FYgIjZ6Z6XO4rqFcatEF0KtSHY73RKixkljaicY2h3lGiYuc1hi3lvyDvLetmONDHsO0QSnxqll13wdWA6XGBdL9N%2BSWx2yS1HKlXqeZkbItpP8aXO9XpQr%2F4aSd1ZbfmZysHxnZ%2B3hxtAzkG%2FOTo8DZHlnhiF3C%2B5MPmXz8wGOqUBSn6pKVHb295ornWeHqOV4oN0H5%2BeULcdm2ZVsNuSgBc1cHAov1V9ZHZr95XLICgsphROGOt8XEMtriqNUjTGWjjDFzUIbb%2F3EkgelVUS599ZG2yQs%2FmLLyEr2bHIEbb5J1M7ffvVYhTqSKB7txSGokKCoaae%2BRIc29Fixq926aF4LShVAHHzPpD0CNBUseY8mHiividXVZs3Qx4vFtT2YifEhgWc&X-Amz-Signature=65d07d2d8c8c76ee4ff9efc5bb56f82b9327f2e271f2bdfe5d6dd44c1b1a201f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662446ILTS%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDB%2FR5SPC9o2tgrQP03Hajh%2BXf6DD53bfJsC3JonwNyLQIgKWOX%2Fv8hmgd0s8eF0WtBhm2LQTf%2Fw8HYkUnrACFtYEgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDG%2FyFSNnNCLtlubqxCrcA9HWNA4NEXCzs%2Ff7kGIMB0p%2FiBnz%2BgjgX7rVIyE9F3x7SL3bKUgMJGVFRW2B%2BISmKxqBo9O5w70eZ45BOmn5pLCSAfFQKQhaR0AqEZ15c8lZKBaZsMHxeaGE%2FeIm1WU9ZA5pZ2rw%2FVEXNbBDSxg7xFZ3jClr%2F%2BsFsu%2BUgb67GLVRcA95aIIDcZPTcAV6Z9UcIWHWqx0OWX%2BNNrjRZI8zare%2BmvwpsxRi6LPMAJnNBMv5lLaaMkKs1eAmj52OcLh%2BMqFeGchAv0f1B0Q5WscQFkOQP3IBoJ8fSdZJp1kmj8D9jz5yaoNKN0Hh%2BzHyisFqF7R%2BRT432dBaScXhFPpEGjOPsYhI5QpYm5F%2FOzesmN0e6jOGGEp1T9hreaO%2F71VMjBZzYS8KRhBK%2F25Lpmx7%2BD3LCkSPF2p3GuRWd%2FH9foGkgZcukYAtWZY77zICYBcsHXietJigPJITvXGYpguK9JayE0FYgIjZ6Z6XO4rqFcatEF0KtSHY73RKixkljaicY2h3lGiYuc1hi3lvyDvLetmONDHsO0QSnxqll13wdWA6XGBdL9N%2BSWx2yS1HKlXqeZkbItpP8aXO9XpQr%2F4aSd1ZbfmZysHxnZ%2B3hxtAzkG%2FOTo8DZHlnhiF3C%2B5MPmXz8wGOqUBSn6pKVHb295ornWeHqOV4oN0H5%2BeULcdm2ZVsNuSgBc1cHAov1V9ZHZr95XLICgsphROGOt8XEMtriqNUjTGWjjDFzUIbb%2F3EkgelVUS599ZG2yQs%2FmLLyEr2bHIEbb5J1M7ffvVYhTqSKB7txSGokKCoaae%2BRIc29Fixq926aF4LShVAHHzPpD0CNBUseY8mHiividXVZs3Qx4vFtT2YifEhgWc&X-Amz-Signature=f3c037d212a6d589d82db33f4ae239a79b7d58f790d6333905510b734433a017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662446ILTS%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDB%2FR5SPC9o2tgrQP03Hajh%2BXf6DD53bfJsC3JonwNyLQIgKWOX%2Fv8hmgd0s8eF0WtBhm2LQTf%2Fw8HYkUnrACFtYEgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDG%2FyFSNnNCLtlubqxCrcA9HWNA4NEXCzs%2Ff7kGIMB0p%2FiBnz%2BgjgX7rVIyE9F3x7SL3bKUgMJGVFRW2B%2BISmKxqBo9O5w70eZ45BOmn5pLCSAfFQKQhaR0AqEZ15c8lZKBaZsMHxeaGE%2FeIm1WU9ZA5pZ2rw%2FVEXNbBDSxg7xFZ3jClr%2F%2BsFsu%2BUgb67GLVRcA95aIIDcZPTcAV6Z9UcIWHWqx0OWX%2BNNrjRZI8zare%2BmvwpsxRi6LPMAJnNBMv5lLaaMkKs1eAmj52OcLh%2BMqFeGchAv0f1B0Q5WscQFkOQP3IBoJ8fSdZJp1kmj8D9jz5yaoNKN0Hh%2BzHyisFqF7R%2BRT432dBaScXhFPpEGjOPsYhI5QpYm5F%2FOzesmN0e6jOGGEp1T9hreaO%2F71VMjBZzYS8KRhBK%2F25Lpmx7%2BD3LCkSPF2p3GuRWd%2FH9foGkgZcukYAtWZY77zICYBcsHXietJigPJITvXGYpguK9JayE0FYgIjZ6Z6XO4rqFcatEF0KtSHY73RKixkljaicY2h3lGiYuc1hi3lvyDvLetmONDHsO0QSnxqll13wdWA6XGBdL9N%2BSWx2yS1HKlXqeZkbItpP8aXO9XpQr%2F4aSd1ZbfmZysHxnZ%2B3hxtAzkG%2FOTo8DZHlnhiF3C%2B5MPmXz8wGOqUBSn6pKVHb295ornWeHqOV4oN0H5%2BeULcdm2ZVsNuSgBc1cHAov1V9ZHZr95XLICgsphROGOt8XEMtriqNUjTGWjjDFzUIbb%2F3EkgelVUS599ZG2yQs%2FmLLyEr2bHIEbb5J1M7ffvVYhTqSKB7txSGokKCoaae%2BRIc29Fixq926aF4LShVAHHzPpD0CNBUseY8mHiividXVZs3Qx4vFtT2YifEhgWc&X-Amz-Signature=33f4591966eb22382c98e973b9baee5745a79a08e22fc21675339256e31ff613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662446ILTS%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDB%2FR5SPC9o2tgrQP03Hajh%2BXf6DD53bfJsC3JonwNyLQIgKWOX%2Fv8hmgd0s8eF0WtBhm2LQTf%2Fw8HYkUnrACFtYEgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDG%2FyFSNnNCLtlubqxCrcA9HWNA4NEXCzs%2Ff7kGIMB0p%2FiBnz%2BgjgX7rVIyE9F3x7SL3bKUgMJGVFRW2B%2BISmKxqBo9O5w70eZ45BOmn5pLCSAfFQKQhaR0AqEZ15c8lZKBaZsMHxeaGE%2FeIm1WU9ZA5pZ2rw%2FVEXNbBDSxg7xFZ3jClr%2F%2BsFsu%2BUgb67GLVRcA95aIIDcZPTcAV6Z9UcIWHWqx0OWX%2BNNrjRZI8zare%2BmvwpsxRi6LPMAJnNBMv5lLaaMkKs1eAmj52OcLh%2BMqFeGchAv0f1B0Q5WscQFkOQP3IBoJ8fSdZJp1kmj8D9jz5yaoNKN0Hh%2BzHyisFqF7R%2BRT432dBaScXhFPpEGjOPsYhI5QpYm5F%2FOzesmN0e6jOGGEp1T9hreaO%2F71VMjBZzYS8KRhBK%2F25Lpmx7%2BD3LCkSPF2p3GuRWd%2FH9foGkgZcukYAtWZY77zICYBcsHXietJigPJITvXGYpguK9JayE0FYgIjZ6Z6XO4rqFcatEF0KtSHY73RKixkljaicY2h3lGiYuc1hi3lvyDvLetmONDHsO0QSnxqll13wdWA6XGBdL9N%2BSWx2yS1HKlXqeZkbItpP8aXO9XpQr%2F4aSd1ZbfmZysHxnZ%2B3hxtAzkG%2FOTo8DZHlnhiF3C%2B5MPmXz8wGOqUBSn6pKVHb295ornWeHqOV4oN0H5%2BeULcdm2ZVsNuSgBc1cHAov1V9ZHZr95XLICgsphROGOt8XEMtriqNUjTGWjjDFzUIbb%2F3EkgelVUS599ZG2yQs%2FmLLyEr2bHIEbb5J1M7ffvVYhTqSKB7txSGokKCoaae%2BRIc29Fixq926aF4LShVAHHzPpD0CNBUseY8mHiividXVZs3Qx4vFtT2YifEhgWc&X-Amz-Signature=32da47ce0440ca5066df33d455ac022624a777f3af716ef588ca84d701ab274d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662446ILTS%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDB%2FR5SPC9o2tgrQP03Hajh%2BXf6DD53bfJsC3JonwNyLQIgKWOX%2Fv8hmgd0s8eF0WtBhm2LQTf%2Fw8HYkUnrACFtYEgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDG%2FyFSNnNCLtlubqxCrcA9HWNA4NEXCzs%2Ff7kGIMB0p%2FiBnz%2BgjgX7rVIyE9F3x7SL3bKUgMJGVFRW2B%2BISmKxqBo9O5w70eZ45BOmn5pLCSAfFQKQhaR0AqEZ15c8lZKBaZsMHxeaGE%2FeIm1WU9ZA5pZ2rw%2FVEXNbBDSxg7xFZ3jClr%2F%2BsFsu%2BUgb67GLVRcA95aIIDcZPTcAV6Z9UcIWHWqx0OWX%2BNNrjRZI8zare%2BmvwpsxRi6LPMAJnNBMv5lLaaMkKs1eAmj52OcLh%2BMqFeGchAv0f1B0Q5WscQFkOQP3IBoJ8fSdZJp1kmj8D9jz5yaoNKN0Hh%2BzHyisFqF7R%2BRT432dBaScXhFPpEGjOPsYhI5QpYm5F%2FOzesmN0e6jOGGEp1T9hreaO%2F71VMjBZzYS8KRhBK%2F25Lpmx7%2BD3LCkSPF2p3GuRWd%2FH9foGkgZcukYAtWZY77zICYBcsHXietJigPJITvXGYpguK9JayE0FYgIjZ6Z6XO4rqFcatEF0KtSHY73RKixkljaicY2h3lGiYuc1hi3lvyDvLetmONDHsO0QSnxqll13wdWA6XGBdL9N%2BSWx2yS1HKlXqeZkbItpP8aXO9XpQr%2F4aSd1ZbfmZysHxnZ%2B3hxtAzkG%2FOTo8DZHlnhiF3C%2B5MPmXz8wGOqUBSn6pKVHb295ornWeHqOV4oN0H5%2BeULcdm2ZVsNuSgBc1cHAov1V9ZHZr95XLICgsphROGOt8XEMtriqNUjTGWjjDFzUIbb%2F3EkgelVUS599ZG2yQs%2FmLLyEr2bHIEbb5J1M7ffvVYhTqSKB7txSGokKCoaae%2BRIc29Fixq926aF4LShVAHHzPpD0CNBUseY8mHiividXVZs3Qx4vFtT2YifEhgWc&X-Amz-Signature=97b732fb16d5089d39c6d72d781e5707581cd5c378bbbff90cccf895b4fc1b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662446ILTS%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDB%2FR5SPC9o2tgrQP03Hajh%2BXf6DD53bfJsC3JonwNyLQIgKWOX%2Fv8hmgd0s8eF0WtBhm2LQTf%2Fw8HYkUnrACFtYEgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDG%2FyFSNnNCLtlubqxCrcA9HWNA4NEXCzs%2Ff7kGIMB0p%2FiBnz%2BgjgX7rVIyE9F3x7SL3bKUgMJGVFRW2B%2BISmKxqBo9O5w70eZ45BOmn5pLCSAfFQKQhaR0AqEZ15c8lZKBaZsMHxeaGE%2FeIm1WU9ZA5pZ2rw%2FVEXNbBDSxg7xFZ3jClr%2F%2BsFsu%2BUgb67GLVRcA95aIIDcZPTcAV6Z9UcIWHWqx0OWX%2BNNrjRZI8zare%2BmvwpsxRi6LPMAJnNBMv5lLaaMkKs1eAmj52OcLh%2BMqFeGchAv0f1B0Q5WscQFkOQP3IBoJ8fSdZJp1kmj8D9jz5yaoNKN0Hh%2BzHyisFqF7R%2BRT432dBaScXhFPpEGjOPsYhI5QpYm5F%2FOzesmN0e6jOGGEp1T9hreaO%2F71VMjBZzYS8KRhBK%2F25Lpmx7%2BD3LCkSPF2p3GuRWd%2FH9foGkgZcukYAtWZY77zICYBcsHXietJigPJITvXGYpguK9JayE0FYgIjZ6Z6XO4rqFcatEF0KtSHY73RKixkljaicY2h3lGiYuc1hi3lvyDvLetmONDHsO0QSnxqll13wdWA6XGBdL9N%2BSWx2yS1HKlXqeZkbItpP8aXO9XpQr%2F4aSd1ZbfmZysHxnZ%2B3hxtAzkG%2FOTo8DZHlnhiF3C%2B5MPmXz8wGOqUBSn6pKVHb295ornWeHqOV4oN0H5%2BeULcdm2ZVsNuSgBc1cHAov1V9ZHZr95XLICgsphROGOt8XEMtriqNUjTGWjjDFzUIbb%2F3EkgelVUS599ZG2yQs%2FmLLyEr2bHIEbb5J1M7ffvVYhTqSKB7txSGokKCoaae%2BRIc29Fixq926aF4LShVAHHzPpD0CNBUseY8mHiividXVZs3Qx4vFtT2YifEhgWc&X-Amz-Signature=8a4339ab7775b471b80fc012c8439a63ff5c2baee6f94383b66e0ccb2554183e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662446ILTS%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDB%2FR5SPC9o2tgrQP03Hajh%2BXf6DD53bfJsC3JonwNyLQIgKWOX%2Fv8hmgd0s8eF0WtBhm2LQTf%2Fw8HYkUnrACFtYEgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDG%2FyFSNnNCLtlubqxCrcA9HWNA4NEXCzs%2Ff7kGIMB0p%2FiBnz%2BgjgX7rVIyE9F3x7SL3bKUgMJGVFRW2B%2BISmKxqBo9O5w70eZ45BOmn5pLCSAfFQKQhaR0AqEZ15c8lZKBaZsMHxeaGE%2FeIm1WU9ZA5pZ2rw%2FVEXNbBDSxg7xFZ3jClr%2F%2BsFsu%2BUgb67GLVRcA95aIIDcZPTcAV6Z9UcIWHWqx0OWX%2BNNrjRZI8zare%2BmvwpsxRi6LPMAJnNBMv5lLaaMkKs1eAmj52OcLh%2BMqFeGchAv0f1B0Q5WscQFkOQP3IBoJ8fSdZJp1kmj8D9jz5yaoNKN0Hh%2BzHyisFqF7R%2BRT432dBaScXhFPpEGjOPsYhI5QpYm5F%2FOzesmN0e6jOGGEp1T9hreaO%2F71VMjBZzYS8KRhBK%2F25Lpmx7%2BD3LCkSPF2p3GuRWd%2FH9foGkgZcukYAtWZY77zICYBcsHXietJigPJITvXGYpguK9JayE0FYgIjZ6Z6XO4rqFcatEF0KtSHY73RKixkljaicY2h3lGiYuc1hi3lvyDvLetmONDHsO0QSnxqll13wdWA6XGBdL9N%2BSWx2yS1HKlXqeZkbItpP8aXO9XpQr%2F4aSd1ZbfmZysHxnZ%2B3hxtAzkG%2FOTo8DZHlnhiF3C%2B5MPmXz8wGOqUBSn6pKVHb295ornWeHqOV4oN0H5%2BeULcdm2ZVsNuSgBc1cHAov1V9ZHZr95XLICgsphROGOt8XEMtriqNUjTGWjjDFzUIbb%2F3EkgelVUS599ZG2yQs%2FmLLyEr2bHIEbb5J1M7ffvVYhTqSKB7txSGokKCoaae%2BRIc29Fixq926aF4LShVAHHzPpD0CNBUseY8mHiividXVZs3Qx4vFtT2YifEhgWc&X-Amz-Signature=3c8f6670a3c1f8ffc6bb77787bcdec34429b9d1c077d27a38f62b7b4bf17f609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
