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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHFJRJG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBKBAuPxTPXwFc6xVitH8Cx%2FSkEbv6e4sK6hNnENUbwGAiEA2Xe36j%2B7gmd4n52gQIjX3Pmx3CT9Ev5HXe9ZG8xsMIUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAHEC9wecMX1TgeqCrcAwl76aOPD%2F90pDDAlou5E5Y%2BKh5kaUF6lLiEjTQLwKKpOMiM5a5hlEHWKd5z2vOhT%2Foto8QJKrOVo1pRFzmZpGXXzO2hFdzLgC7gzRELhg7jb2QBpzkO2%2FZ3Qlg9c58bYlayNYhhuv%2B%2BzdiSowdKHOfZ%2F3%2BKFDYMpFDBmuP1k83yLP9qTpTnpgYpmdpCLI5YBIreEYNQE%2B0fSBmJCqFW%2BD2CZbd27HZ4%2F1lL7JCSQ%2B4Kjr%2BbDeoXHjnLVD0Opa3YVG0FuILKVqYJK3lsrhXWw9FMkmYxFB91iGMYx5R0Pxmz1wvpG0Yjgb%2FkThg5w7wBk44gfyxNk%2BaVDbgWGVh2Ac2ezFKDIMwAu14PKBIanejkdyAAuCfKIikxIIH8b6RbQfUTsO%2FpUSJgyJ3fKC%2FedDM8c1EiKxQFuDieEtfAyhNIPAkIk5g9Lbr1Lf0ef%2FgNFVS9kgF%2FmLLfVuuWOMKoyjGKQ6GgSLlVcICMNkeQKf3Md%2FfZsENHA0fYZesVWq6tuQ8X2myyh3y2qyLD1lzT7aNKOsoNxcwJLraKdD6Ts5iC92FC2Tw6Q9A0Zgbklt2X1QsBlv%2BhsgCO8DhMs8RLzeBvxuOcvBcig9PjiXv%2FA1aKhf%2B8RhzAueii6f9XMLaMiL4GOqUB8r8maFu9eske2eB9899NNlyev7C1%2FSEW%2FSfcb8sMc4yLmKD4NIo5%2B4Vu1OdjJrJuJIZoDtFk0LQQdttiRveP83phBUHa8r%2BAGhb0blil%2FFncgCpDGo6hpZ6ZD072RyVJGZxNcVwsmN9wRhjoyBURvVIg77qn5KZv%2FHUhib%2FDs0mx1cCatZMaZsU5blvM36n%2BvWNk8kEra9pVHk16%2Fam1rk%2Bsl%2BDF&X-Amz-Signature=5015e567dcc6a73b386b20d9b5b05a5ace73ae91ea9b653091f3af0cf536c2bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHFJRJG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBKBAuPxTPXwFc6xVitH8Cx%2FSkEbv6e4sK6hNnENUbwGAiEA2Xe36j%2B7gmd4n52gQIjX3Pmx3CT9Ev5HXe9ZG8xsMIUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAHEC9wecMX1TgeqCrcAwl76aOPD%2F90pDDAlou5E5Y%2BKh5kaUF6lLiEjTQLwKKpOMiM5a5hlEHWKd5z2vOhT%2Foto8QJKrOVo1pRFzmZpGXXzO2hFdzLgC7gzRELhg7jb2QBpzkO2%2FZ3Qlg9c58bYlayNYhhuv%2B%2BzdiSowdKHOfZ%2F3%2BKFDYMpFDBmuP1k83yLP9qTpTnpgYpmdpCLI5YBIreEYNQE%2B0fSBmJCqFW%2BD2CZbd27HZ4%2F1lL7JCSQ%2B4Kjr%2BbDeoXHjnLVD0Opa3YVG0FuILKVqYJK3lsrhXWw9FMkmYxFB91iGMYx5R0Pxmz1wvpG0Yjgb%2FkThg5w7wBk44gfyxNk%2BaVDbgWGVh2Ac2ezFKDIMwAu14PKBIanejkdyAAuCfKIikxIIH8b6RbQfUTsO%2FpUSJgyJ3fKC%2FedDM8c1EiKxQFuDieEtfAyhNIPAkIk5g9Lbr1Lf0ef%2FgNFVS9kgF%2FmLLfVuuWOMKoyjGKQ6GgSLlVcICMNkeQKf3Md%2FfZsENHA0fYZesVWq6tuQ8X2myyh3y2qyLD1lzT7aNKOsoNxcwJLraKdD6Ts5iC92FC2Tw6Q9A0Zgbklt2X1QsBlv%2BhsgCO8DhMs8RLzeBvxuOcvBcig9PjiXv%2FA1aKhf%2B8RhzAueii6f9XMLaMiL4GOqUB8r8maFu9eske2eB9899NNlyev7C1%2FSEW%2FSfcb8sMc4yLmKD4NIo5%2B4Vu1OdjJrJuJIZoDtFk0LQQdttiRveP83phBUHa8r%2BAGhb0blil%2FFncgCpDGo6hpZ6ZD072RyVJGZxNcVwsmN9wRhjoyBURvVIg77qn5KZv%2FHUhib%2FDs0mx1cCatZMaZsU5blvM36n%2BvWNk8kEra9pVHk16%2Fam1rk%2Bsl%2BDF&X-Amz-Signature=4fc6936a5c6abacce99230655390224b73793f7d69e56d7d4363d22fe60d188d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHFJRJG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBKBAuPxTPXwFc6xVitH8Cx%2FSkEbv6e4sK6hNnENUbwGAiEA2Xe36j%2B7gmd4n52gQIjX3Pmx3CT9Ev5HXe9ZG8xsMIUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAHEC9wecMX1TgeqCrcAwl76aOPD%2F90pDDAlou5E5Y%2BKh5kaUF6lLiEjTQLwKKpOMiM5a5hlEHWKd5z2vOhT%2Foto8QJKrOVo1pRFzmZpGXXzO2hFdzLgC7gzRELhg7jb2QBpzkO2%2FZ3Qlg9c58bYlayNYhhuv%2B%2BzdiSowdKHOfZ%2F3%2BKFDYMpFDBmuP1k83yLP9qTpTnpgYpmdpCLI5YBIreEYNQE%2B0fSBmJCqFW%2BD2CZbd27HZ4%2F1lL7JCSQ%2B4Kjr%2BbDeoXHjnLVD0Opa3YVG0FuILKVqYJK3lsrhXWw9FMkmYxFB91iGMYx5R0Pxmz1wvpG0Yjgb%2FkThg5w7wBk44gfyxNk%2BaVDbgWGVh2Ac2ezFKDIMwAu14PKBIanejkdyAAuCfKIikxIIH8b6RbQfUTsO%2FpUSJgyJ3fKC%2FedDM8c1EiKxQFuDieEtfAyhNIPAkIk5g9Lbr1Lf0ef%2FgNFVS9kgF%2FmLLfVuuWOMKoyjGKQ6GgSLlVcICMNkeQKf3Md%2FfZsENHA0fYZesVWq6tuQ8X2myyh3y2qyLD1lzT7aNKOsoNxcwJLraKdD6Ts5iC92FC2Tw6Q9A0Zgbklt2X1QsBlv%2BhsgCO8DhMs8RLzeBvxuOcvBcig9PjiXv%2FA1aKhf%2B8RhzAueii6f9XMLaMiL4GOqUB8r8maFu9eske2eB9899NNlyev7C1%2FSEW%2FSfcb8sMc4yLmKD4NIo5%2B4Vu1OdjJrJuJIZoDtFk0LQQdttiRveP83phBUHa8r%2BAGhb0blil%2FFncgCpDGo6hpZ6ZD072RyVJGZxNcVwsmN9wRhjoyBURvVIg77qn5KZv%2FHUhib%2FDs0mx1cCatZMaZsU5blvM36n%2BvWNk8kEra9pVHk16%2Fam1rk%2Bsl%2BDF&X-Amz-Signature=93968e4b7b8541f60a3403b795199ecd65aca2ec35b9f6b20afd5607f84f6040&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHFJRJG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBKBAuPxTPXwFc6xVitH8Cx%2FSkEbv6e4sK6hNnENUbwGAiEA2Xe36j%2B7gmd4n52gQIjX3Pmx3CT9Ev5HXe9ZG8xsMIUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAHEC9wecMX1TgeqCrcAwl76aOPD%2F90pDDAlou5E5Y%2BKh5kaUF6lLiEjTQLwKKpOMiM5a5hlEHWKd5z2vOhT%2Foto8QJKrOVo1pRFzmZpGXXzO2hFdzLgC7gzRELhg7jb2QBpzkO2%2FZ3Qlg9c58bYlayNYhhuv%2B%2BzdiSowdKHOfZ%2F3%2BKFDYMpFDBmuP1k83yLP9qTpTnpgYpmdpCLI5YBIreEYNQE%2B0fSBmJCqFW%2BD2CZbd27HZ4%2F1lL7JCSQ%2B4Kjr%2BbDeoXHjnLVD0Opa3YVG0FuILKVqYJK3lsrhXWw9FMkmYxFB91iGMYx5R0Pxmz1wvpG0Yjgb%2FkThg5w7wBk44gfyxNk%2BaVDbgWGVh2Ac2ezFKDIMwAu14PKBIanejkdyAAuCfKIikxIIH8b6RbQfUTsO%2FpUSJgyJ3fKC%2FedDM8c1EiKxQFuDieEtfAyhNIPAkIk5g9Lbr1Lf0ef%2FgNFVS9kgF%2FmLLfVuuWOMKoyjGKQ6GgSLlVcICMNkeQKf3Md%2FfZsENHA0fYZesVWq6tuQ8X2myyh3y2qyLD1lzT7aNKOsoNxcwJLraKdD6Ts5iC92FC2Tw6Q9A0Zgbklt2X1QsBlv%2BhsgCO8DhMs8RLzeBvxuOcvBcig9PjiXv%2FA1aKhf%2B8RhzAueii6f9XMLaMiL4GOqUB8r8maFu9eske2eB9899NNlyev7C1%2FSEW%2FSfcb8sMc4yLmKD4NIo5%2B4Vu1OdjJrJuJIZoDtFk0LQQdttiRveP83phBUHa8r%2BAGhb0blil%2FFncgCpDGo6hpZ6ZD072RyVJGZxNcVwsmN9wRhjoyBURvVIg77qn5KZv%2FHUhib%2FDs0mx1cCatZMaZsU5blvM36n%2BvWNk8kEra9pVHk16%2Fam1rk%2Bsl%2BDF&X-Amz-Signature=c54d6f5f7de3dd2e2b45103dcd2ced9d78753e6c64b5e9fa4f182e3a3a25a5de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHFJRJG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBKBAuPxTPXwFc6xVitH8Cx%2FSkEbv6e4sK6hNnENUbwGAiEA2Xe36j%2B7gmd4n52gQIjX3Pmx3CT9Ev5HXe9ZG8xsMIUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAHEC9wecMX1TgeqCrcAwl76aOPD%2F90pDDAlou5E5Y%2BKh5kaUF6lLiEjTQLwKKpOMiM5a5hlEHWKd5z2vOhT%2Foto8QJKrOVo1pRFzmZpGXXzO2hFdzLgC7gzRELhg7jb2QBpzkO2%2FZ3Qlg9c58bYlayNYhhuv%2B%2BzdiSowdKHOfZ%2F3%2BKFDYMpFDBmuP1k83yLP9qTpTnpgYpmdpCLI5YBIreEYNQE%2B0fSBmJCqFW%2BD2CZbd27HZ4%2F1lL7JCSQ%2B4Kjr%2BbDeoXHjnLVD0Opa3YVG0FuILKVqYJK3lsrhXWw9FMkmYxFB91iGMYx5R0Pxmz1wvpG0Yjgb%2FkThg5w7wBk44gfyxNk%2BaVDbgWGVh2Ac2ezFKDIMwAu14PKBIanejkdyAAuCfKIikxIIH8b6RbQfUTsO%2FpUSJgyJ3fKC%2FedDM8c1EiKxQFuDieEtfAyhNIPAkIk5g9Lbr1Lf0ef%2FgNFVS9kgF%2FmLLfVuuWOMKoyjGKQ6GgSLlVcICMNkeQKf3Md%2FfZsENHA0fYZesVWq6tuQ8X2myyh3y2qyLD1lzT7aNKOsoNxcwJLraKdD6Ts5iC92FC2Tw6Q9A0Zgbklt2X1QsBlv%2BhsgCO8DhMs8RLzeBvxuOcvBcig9PjiXv%2FA1aKhf%2B8RhzAueii6f9XMLaMiL4GOqUB8r8maFu9eske2eB9899NNlyev7C1%2FSEW%2FSfcb8sMc4yLmKD4NIo5%2B4Vu1OdjJrJuJIZoDtFk0LQQdttiRveP83phBUHa8r%2BAGhb0blil%2FFncgCpDGo6hpZ6ZD072RyVJGZxNcVwsmN9wRhjoyBURvVIg77qn5KZv%2FHUhib%2FDs0mx1cCatZMaZsU5blvM36n%2BvWNk8kEra9pVHk16%2Fam1rk%2Bsl%2BDF&X-Amz-Signature=74a656774130573f4cad3f63318314c7e8334dc77334c288c59ddfdc16b92428&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHFJRJG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBKBAuPxTPXwFc6xVitH8Cx%2FSkEbv6e4sK6hNnENUbwGAiEA2Xe36j%2B7gmd4n52gQIjX3Pmx3CT9Ev5HXe9ZG8xsMIUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAHEC9wecMX1TgeqCrcAwl76aOPD%2F90pDDAlou5E5Y%2BKh5kaUF6lLiEjTQLwKKpOMiM5a5hlEHWKd5z2vOhT%2Foto8QJKrOVo1pRFzmZpGXXzO2hFdzLgC7gzRELhg7jb2QBpzkO2%2FZ3Qlg9c58bYlayNYhhuv%2B%2BzdiSowdKHOfZ%2F3%2BKFDYMpFDBmuP1k83yLP9qTpTnpgYpmdpCLI5YBIreEYNQE%2B0fSBmJCqFW%2BD2CZbd27HZ4%2F1lL7JCSQ%2B4Kjr%2BbDeoXHjnLVD0Opa3YVG0FuILKVqYJK3lsrhXWw9FMkmYxFB91iGMYx5R0Pxmz1wvpG0Yjgb%2FkThg5w7wBk44gfyxNk%2BaVDbgWGVh2Ac2ezFKDIMwAu14PKBIanejkdyAAuCfKIikxIIH8b6RbQfUTsO%2FpUSJgyJ3fKC%2FedDM8c1EiKxQFuDieEtfAyhNIPAkIk5g9Lbr1Lf0ef%2FgNFVS9kgF%2FmLLfVuuWOMKoyjGKQ6GgSLlVcICMNkeQKf3Md%2FfZsENHA0fYZesVWq6tuQ8X2myyh3y2qyLD1lzT7aNKOsoNxcwJLraKdD6Ts5iC92FC2Tw6Q9A0Zgbklt2X1QsBlv%2BhsgCO8DhMs8RLzeBvxuOcvBcig9PjiXv%2FA1aKhf%2B8RhzAueii6f9XMLaMiL4GOqUB8r8maFu9eske2eB9899NNlyev7C1%2FSEW%2FSfcb8sMc4yLmKD4NIo5%2B4Vu1OdjJrJuJIZoDtFk0LQQdttiRveP83phBUHa8r%2BAGhb0blil%2FFncgCpDGo6hpZ6ZD072RyVJGZxNcVwsmN9wRhjoyBURvVIg77qn5KZv%2FHUhib%2FDs0mx1cCatZMaZsU5blvM36n%2BvWNk8kEra9pVHk16%2Fam1rk%2Bsl%2BDF&X-Amz-Signature=a7167b3d4aa3de9134ea15ffc125121b67ec16f426d482dc3eb70abee8cca93d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHFJRJG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBKBAuPxTPXwFc6xVitH8Cx%2FSkEbv6e4sK6hNnENUbwGAiEA2Xe36j%2B7gmd4n52gQIjX3Pmx3CT9Ev5HXe9ZG8xsMIUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAHEC9wecMX1TgeqCrcAwl76aOPD%2F90pDDAlou5E5Y%2BKh5kaUF6lLiEjTQLwKKpOMiM5a5hlEHWKd5z2vOhT%2Foto8QJKrOVo1pRFzmZpGXXzO2hFdzLgC7gzRELhg7jb2QBpzkO2%2FZ3Qlg9c58bYlayNYhhuv%2B%2BzdiSowdKHOfZ%2F3%2BKFDYMpFDBmuP1k83yLP9qTpTnpgYpmdpCLI5YBIreEYNQE%2B0fSBmJCqFW%2BD2CZbd27HZ4%2F1lL7JCSQ%2B4Kjr%2BbDeoXHjnLVD0Opa3YVG0FuILKVqYJK3lsrhXWw9FMkmYxFB91iGMYx5R0Pxmz1wvpG0Yjgb%2FkThg5w7wBk44gfyxNk%2BaVDbgWGVh2Ac2ezFKDIMwAu14PKBIanejkdyAAuCfKIikxIIH8b6RbQfUTsO%2FpUSJgyJ3fKC%2FedDM8c1EiKxQFuDieEtfAyhNIPAkIk5g9Lbr1Lf0ef%2FgNFVS9kgF%2FmLLfVuuWOMKoyjGKQ6GgSLlVcICMNkeQKf3Md%2FfZsENHA0fYZesVWq6tuQ8X2myyh3y2qyLD1lzT7aNKOsoNxcwJLraKdD6Ts5iC92FC2Tw6Q9A0Zgbklt2X1QsBlv%2BhsgCO8DhMs8RLzeBvxuOcvBcig9PjiXv%2FA1aKhf%2B8RhzAueii6f9XMLaMiL4GOqUB8r8maFu9eske2eB9899NNlyev7C1%2FSEW%2FSfcb8sMc4yLmKD4NIo5%2B4Vu1OdjJrJuJIZoDtFk0LQQdttiRveP83phBUHa8r%2BAGhb0blil%2FFncgCpDGo6hpZ6ZD072RyVJGZxNcVwsmN9wRhjoyBURvVIg77qn5KZv%2FHUhib%2FDs0mx1cCatZMaZsU5blvM36n%2BvWNk8kEra9pVHk16%2Fam1rk%2Bsl%2BDF&X-Amz-Signature=f8925cba9db2764037b6d903de3ef3669d487e8f01e9d005b991543a10d82cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHFJRJG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBKBAuPxTPXwFc6xVitH8Cx%2FSkEbv6e4sK6hNnENUbwGAiEA2Xe36j%2B7gmd4n52gQIjX3Pmx3CT9Ev5HXe9ZG8xsMIUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAHEC9wecMX1TgeqCrcAwl76aOPD%2F90pDDAlou5E5Y%2BKh5kaUF6lLiEjTQLwKKpOMiM5a5hlEHWKd5z2vOhT%2Foto8QJKrOVo1pRFzmZpGXXzO2hFdzLgC7gzRELhg7jb2QBpzkO2%2FZ3Qlg9c58bYlayNYhhuv%2B%2BzdiSowdKHOfZ%2F3%2BKFDYMpFDBmuP1k83yLP9qTpTnpgYpmdpCLI5YBIreEYNQE%2B0fSBmJCqFW%2BD2CZbd27HZ4%2F1lL7JCSQ%2B4Kjr%2BbDeoXHjnLVD0Opa3YVG0FuILKVqYJK3lsrhXWw9FMkmYxFB91iGMYx5R0Pxmz1wvpG0Yjgb%2FkThg5w7wBk44gfyxNk%2BaVDbgWGVh2Ac2ezFKDIMwAu14PKBIanejkdyAAuCfKIikxIIH8b6RbQfUTsO%2FpUSJgyJ3fKC%2FedDM8c1EiKxQFuDieEtfAyhNIPAkIk5g9Lbr1Lf0ef%2FgNFVS9kgF%2FmLLfVuuWOMKoyjGKQ6GgSLlVcICMNkeQKf3Md%2FfZsENHA0fYZesVWq6tuQ8X2myyh3y2qyLD1lzT7aNKOsoNxcwJLraKdD6Ts5iC92FC2Tw6Q9A0Zgbklt2X1QsBlv%2BhsgCO8DhMs8RLzeBvxuOcvBcig9PjiXv%2FA1aKhf%2B8RhzAueii6f9XMLaMiL4GOqUB8r8maFu9eske2eB9899NNlyev7C1%2FSEW%2FSfcb8sMc4yLmKD4NIo5%2B4Vu1OdjJrJuJIZoDtFk0LQQdttiRveP83phBUHa8r%2BAGhb0blil%2FFncgCpDGo6hpZ6ZD072RyVJGZxNcVwsmN9wRhjoyBURvVIg77qn5KZv%2FHUhib%2FDs0mx1cCatZMaZsU5blvM36n%2BvWNk8kEra9pVHk16%2Fam1rk%2Bsl%2BDF&X-Amz-Signature=a747c157c75534fc1e7a5321fd38e373f5f621c8755d68b562cbf06cc655bb26&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
