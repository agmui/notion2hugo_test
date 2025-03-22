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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCUKRHYU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDUbJhnkacCGpanH7XvxB7mt6gSCF%2F0j%2B2t1xY254GfTQIgaIVejJ%2BwzqJ7slHjVficXQvZ6yzBWh4kHwr0ILvvcn8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPpTxTRlDZWLSJBuircAzjL1OvimpUD1XaUibvEH%2BkfCAf1rVIcnfLlJmMJNE%2BwgyU4MnfysEYs7foo8t6pe6ExTRLEr9cyfBpaTfRfat4UIak57oA87lrYXGhJutGxhb5GS%2FaxQ3qJsR4wPo6ZRk7c%2F%2FqidQVmTIYZVoqr7MdHY%2FLt4VvVJebRVuXCjuN9QB5qqkc0Dz1jOt9rdj3TK%2B%2Bfe6D20RqKenKMcHvzAzXpxL04KouB4%2BH0%2BOnUf5sDnt7sZlPvaV02YS7Qg9lXhh9Ydot%2BbzGfZhRexzZDHjyrPiROVy74158jRszoIt%2FjefpHWZeVRnEP9zXER7UGCR3UF6QaavwCscYAM69hRNHUZd3326KJBV8NLg7TnWeluxITU5ZbK8Xt12WqwjXEFPAWTBlLO9ha8HzCWdrFSCd5LPRercVeWdIJXQw%2FK9VHeaWizaL7bAeyN%2BaTJng1X%2F0adA%2B%2FiUZr4vMDzQkSWIbtLVOOxIW7c8hf3XVP1CYtCs3obGXJJ%2FkZZ7siELr2TwSSYs1Q8zmoHlfaY0bvBei8RSypvpyEtFb5r%2B%2FwVjN5lCVatRheeqG7Zllxdv%2B0JRDOfs2acM0ujTvSv5DTWISDvj6svRUMQjAaKJh%2BKGbrc76NQsMBGy04phlEMJu7%2BL4GOqUB60cbEc7DmU5E57fZ9LpQF8JgHQcEW%2ByVzqtq2hCEE3H9DEFEFbC6w9Q4hSk9v36hia2miVLm1Mb4MPvJ%2BOaY2tNCE7ypFUsNtlW8PratZgJecnApUzCci6GDQZ0YGPOtemtI7RaTrurjc6COwIzjNtw431QPdnraoF7zNLwdy5qD5hmv0HBBtKY39aomlJPYnHTXgTnP7NBp8p%2FXpiaVGkZxWhzb&X-Amz-Signature=50db2469d7027f439087451dd1817ec768ff0c99cdce4e1dd1b446de97d206ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCUKRHYU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDUbJhnkacCGpanH7XvxB7mt6gSCF%2F0j%2B2t1xY254GfTQIgaIVejJ%2BwzqJ7slHjVficXQvZ6yzBWh4kHwr0ILvvcn8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPpTxTRlDZWLSJBuircAzjL1OvimpUD1XaUibvEH%2BkfCAf1rVIcnfLlJmMJNE%2BwgyU4MnfysEYs7foo8t6pe6ExTRLEr9cyfBpaTfRfat4UIak57oA87lrYXGhJutGxhb5GS%2FaxQ3qJsR4wPo6ZRk7c%2F%2FqidQVmTIYZVoqr7MdHY%2FLt4VvVJebRVuXCjuN9QB5qqkc0Dz1jOt9rdj3TK%2B%2Bfe6D20RqKenKMcHvzAzXpxL04KouB4%2BH0%2BOnUf5sDnt7sZlPvaV02YS7Qg9lXhh9Ydot%2BbzGfZhRexzZDHjyrPiROVy74158jRszoIt%2FjefpHWZeVRnEP9zXER7UGCR3UF6QaavwCscYAM69hRNHUZd3326KJBV8NLg7TnWeluxITU5ZbK8Xt12WqwjXEFPAWTBlLO9ha8HzCWdrFSCd5LPRercVeWdIJXQw%2FK9VHeaWizaL7bAeyN%2BaTJng1X%2F0adA%2B%2FiUZr4vMDzQkSWIbtLVOOxIW7c8hf3XVP1CYtCs3obGXJJ%2FkZZ7siELr2TwSSYs1Q8zmoHlfaY0bvBei8RSypvpyEtFb5r%2B%2FwVjN5lCVatRheeqG7Zllxdv%2B0JRDOfs2acM0ujTvSv5DTWISDvj6svRUMQjAaKJh%2BKGbrc76NQsMBGy04phlEMJu7%2BL4GOqUB60cbEc7DmU5E57fZ9LpQF8JgHQcEW%2ByVzqtq2hCEE3H9DEFEFbC6w9Q4hSk9v36hia2miVLm1Mb4MPvJ%2BOaY2tNCE7ypFUsNtlW8PratZgJecnApUzCci6GDQZ0YGPOtemtI7RaTrurjc6COwIzjNtw431QPdnraoF7zNLwdy5qD5hmv0HBBtKY39aomlJPYnHTXgTnP7NBp8p%2FXpiaVGkZxWhzb&X-Amz-Signature=dfa8fda5af16b2330fe2b24be4014f5354513bde1053c11b1ea5315ccb4cd12c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCUKRHYU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDUbJhnkacCGpanH7XvxB7mt6gSCF%2F0j%2B2t1xY254GfTQIgaIVejJ%2BwzqJ7slHjVficXQvZ6yzBWh4kHwr0ILvvcn8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPpTxTRlDZWLSJBuircAzjL1OvimpUD1XaUibvEH%2BkfCAf1rVIcnfLlJmMJNE%2BwgyU4MnfysEYs7foo8t6pe6ExTRLEr9cyfBpaTfRfat4UIak57oA87lrYXGhJutGxhb5GS%2FaxQ3qJsR4wPo6ZRk7c%2F%2FqidQVmTIYZVoqr7MdHY%2FLt4VvVJebRVuXCjuN9QB5qqkc0Dz1jOt9rdj3TK%2B%2Bfe6D20RqKenKMcHvzAzXpxL04KouB4%2BH0%2BOnUf5sDnt7sZlPvaV02YS7Qg9lXhh9Ydot%2BbzGfZhRexzZDHjyrPiROVy74158jRszoIt%2FjefpHWZeVRnEP9zXER7UGCR3UF6QaavwCscYAM69hRNHUZd3326KJBV8NLg7TnWeluxITU5ZbK8Xt12WqwjXEFPAWTBlLO9ha8HzCWdrFSCd5LPRercVeWdIJXQw%2FK9VHeaWizaL7bAeyN%2BaTJng1X%2F0adA%2B%2FiUZr4vMDzQkSWIbtLVOOxIW7c8hf3XVP1CYtCs3obGXJJ%2FkZZ7siELr2TwSSYs1Q8zmoHlfaY0bvBei8RSypvpyEtFb5r%2B%2FwVjN5lCVatRheeqG7Zllxdv%2B0JRDOfs2acM0ujTvSv5DTWISDvj6svRUMQjAaKJh%2BKGbrc76NQsMBGy04phlEMJu7%2BL4GOqUB60cbEc7DmU5E57fZ9LpQF8JgHQcEW%2ByVzqtq2hCEE3H9DEFEFbC6w9Q4hSk9v36hia2miVLm1Mb4MPvJ%2BOaY2tNCE7ypFUsNtlW8PratZgJecnApUzCci6GDQZ0YGPOtemtI7RaTrurjc6COwIzjNtw431QPdnraoF7zNLwdy5qD5hmv0HBBtKY39aomlJPYnHTXgTnP7NBp8p%2FXpiaVGkZxWhzb&X-Amz-Signature=bea4b82f61a5029399498ed2bcd204c0756773e7619e8c77cd631d26041ecd7a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCUKRHYU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDUbJhnkacCGpanH7XvxB7mt6gSCF%2F0j%2B2t1xY254GfTQIgaIVejJ%2BwzqJ7slHjVficXQvZ6yzBWh4kHwr0ILvvcn8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPpTxTRlDZWLSJBuircAzjL1OvimpUD1XaUibvEH%2BkfCAf1rVIcnfLlJmMJNE%2BwgyU4MnfysEYs7foo8t6pe6ExTRLEr9cyfBpaTfRfat4UIak57oA87lrYXGhJutGxhb5GS%2FaxQ3qJsR4wPo6ZRk7c%2F%2FqidQVmTIYZVoqr7MdHY%2FLt4VvVJebRVuXCjuN9QB5qqkc0Dz1jOt9rdj3TK%2B%2Bfe6D20RqKenKMcHvzAzXpxL04KouB4%2BH0%2BOnUf5sDnt7sZlPvaV02YS7Qg9lXhh9Ydot%2BbzGfZhRexzZDHjyrPiROVy74158jRszoIt%2FjefpHWZeVRnEP9zXER7UGCR3UF6QaavwCscYAM69hRNHUZd3326KJBV8NLg7TnWeluxITU5ZbK8Xt12WqwjXEFPAWTBlLO9ha8HzCWdrFSCd5LPRercVeWdIJXQw%2FK9VHeaWizaL7bAeyN%2BaTJng1X%2F0adA%2B%2FiUZr4vMDzQkSWIbtLVOOxIW7c8hf3XVP1CYtCs3obGXJJ%2FkZZ7siELr2TwSSYs1Q8zmoHlfaY0bvBei8RSypvpyEtFb5r%2B%2FwVjN5lCVatRheeqG7Zllxdv%2B0JRDOfs2acM0ujTvSv5DTWISDvj6svRUMQjAaKJh%2BKGbrc76NQsMBGy04phlEMJu7%2BL4GOqUB60cbEc7DmU5E57fZ9LpQF8JgHQcEW%2ByVzqtq2hCEE3H9DEFEFbC6w9Q4hSk9v36hia2miVLm1Mb4MPvJ%2BOaY2tNCE7ypFUsNtlW8PratZgJecnApUzCci6GDQZ0YGPOtemtI7RaTrurjc6COwIzjNtw431QPdnraoF7zNLwdy5qD5hmv0HBBtKY39aomlJPYnHTXgTnP7NBp8p%2FXpiaVGkZxWhzb&X-Amz-Signature=df2008aa81861ffdc69868f744c8323a7c4bd8a18340baa5495c74db475347f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCUKRHYU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDUbJhnkacCGpanH7XvxB7mt6gSCF%2F0j%2B2t1xY254GfTQIgaIVejJ%2BwzqJ7slHjVficXQvZ6yzBWh4kHwr0ILvvcn8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPpTxTRlDZWLSJBuircAzjL1OvimpUD1XaUibvEH%2BkfCAf1rVIcnfLlJmMJNE%2BwgyU4MnfysEYs7foo8t6pe6ExTRLEr9cyfBpaTfRfat4UIak57oA87lrYXGhJutGxhb5GS%2FaxQ3qJsR4wPo6ZRk7c%2F%2FqidQVmTIYZVoqr7MdHY%2FLt4VvVJebRVuXCjuN9QB5qqkc0Dz1jOt9rdj3TK%2B%2Bfe6D20RqKenKMcHvzAzXpxL04KouB4%2BH0%2BOnUf5sDnt7sZlPvaV02YS7Qg9lXhh9Ydot%2BbzGfZhRexzZDHjyrPiROVy74158jRszoIt%2FjefpHWZeVRnEP9zXER7UGCR3UF6QaavwCscYAM69hRNHUZd3326KJBV8NLg7TnWeluxITU5ZbK8Xt12WqwjXEFPAWTBlLO9ha8HzCWdrFSCd5LPRercVeWdIJXQw%2FK9VHeaWizaL7bAeyN%2BaTJng1X%2F0adA%2B%2FiUZr4vMDzQkSWIbtLVOOxIW7c8hf3XVP1CYtCs3obGXJJ%2FkZZ7siELr2TwSSYs1Q8zmoHlfaY0bvBei8RSypvpyEtFb5r%2B%2FwVjN5lCVatRheeqG7Zllxdv%2B0JRDOfs2acM0ujTvSv5DTWISDvj6svRUMQjAaKJh%2BKGbrc76NQsMBGy04phlEMJu7%2BL4GOqUB60cbEc7DmU5E57fZ9LpQF8JgHQcEW%2ByVzqtq2hCEE3H9DEFEFbC6w9Q4hSk9v36hia2miVLm1Mb4MPvJ%2BOaY2tNCE7ypFUsNtlW8PratZgJecnApUzCci6GDQZ0YGPOtemtI7RaTrurjc6COwIzjNtw431QPdnraoF7zNLwdy5qD5hmv0HBBtKY39aomlJPYnHTXgTnP7NBp8p%2FXpiaVGkZxWhzb&X-Amz-Signature=cfd15872a2b2f40d6a198abd772fb4faacc55177c5ffd3f1f80fb0a0d78b0b32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCUKRHYU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDUbJhnkacCGpanH7XvxB7mt6gSCF%2F0j%2B2t1xY254GfTQIgaIVejJ%2BwzqJ7slHjVficXQvZ6yzBWh4kHwr0ILvvcn8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPpTxTRlDZWLSJBuircAzjL1OvimpUD1XaUibvEH%2BkfCAf1rVIcnfLlJmMJNE%2BwgyU4MnfysEYs7foo8t6pe6ExTRLEr9cyfBpaTfRfat4UIak57oA87lrYXGhJutGxhb5GS%2FaxQ3qJsR4wPo6ZRk7c%2F%2FqidQVmTIYZVoqr7MdHY%2FLt4VvVJebRVuXCjuN9QB5qqkc0Dz1jOt9rdj3TK%2B%2Bfe6D20RqKenKMcHvzAzXpxL04KouB4%2BH0%2BOnUf5sDnt7sZlPvaV02YS7Qg9lXhh9Ydot%2BbzGfZhRexzZDHjyrPiROVy74158jRszoIt%2FjefpHWZeVRnEP9zXER7UGCR3UF6QaavwCscYAM69hRNHUZd3326KJBV8NLg7TnWeluxITU5ZbK8Xt12WqwjXEFPAWTBlLO9ha8HzCWdrFSCd5LPRercVeWdIJXQw%2FK9VHeaWizaL7bAeyN%2BaTJng1X%2F0adA%2B%2FiUZr4vMDzQkSWIbtLVOOxIW7c8hf3XVP1CYtCs3obGXJJ%2FkZZ7siELr2TwSSYs1Q8zmoHlfaY0bvBei8RSypvpyEtFb5r%2B%2FwVjN5lCVatRheeqG7Zllxdv%2B0JRDOfs2acM0ujTvSv5DTWISDvj6svRUMQjAaKJh%2BKGbrc76NQsMBGy04phlEMJu7%2BL4GOqUB60cbEc7DmU5E57fZ9LpQF8JgHQcEW%2ByVzqtq2hCEE3H9DEFEFbC6w9Q4hSk9v36hia2miVLm1Mb4MPvJ%2BOaY2tNCE7ypFUsNtlW8PratZgJecnApUzCci6GDQZ0YGPOtemtI7RaTrurjc6COwIzjNtw431QPdnraoF7zNLwdy5qD5hmv0HBBtKY39aomlJPYnHTXgTnP7NBp8p%2FXpiaVGkZxWhzb&X-Amz-Signature=a3ea10fbb5bbc93e1f90ed7299dd191fb9cb62c2d6129d973cd27c689f17d632&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCUKRHYU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDUbJhnkacCGpanH7XvxB7mt6gSCF%2F0j%2B2t1xY254GfTQIgaIVejJ%2BwzqJ7slHjVficXQvZ6yzBWh4kHwr0ILvvcn8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPpTxTRlDZWLSJBuircAzjL1OvimpUD1XaUibvEH%2BkfCAf1rVIcnfLlJmMJNE%2BwgyU4MnfysEYs7foo8t6pe6ExTRLEr9cyfBpaTfRfat4UIak57oA87lrYXGhJutGxhb5GS%2FaxQ3qJsR4wPo6ZRk7c%2F%2FqidQVmTIYZVoqr7MdHY%2FLt4VvVJebRVuXCjuN9QB5qqkc0Dz1jOt9rdj3TK%2B%2Bfe6D20RqKenKMcHvzAzXpxL04KouB4%2BH0%2BOnUf5sDnt7sZlPvaV02YS7Qg9lXhh9Ydot%2BbzGfZhRexzZDHjyrPiROVy74158jRszoIt%2FjefpHWZeVRnEP9zXER7UGCR3UF6QaavwCscYAM69hRNHUZd3326KJBV8NLg7TnWeluxITU5ZbK8Xt12WqwjXEFPAWTBlLO9ha8HzCWdrFSCd5LPRercVeWdIJXQw%2FK9VHeaWizaL7bAeyN%2BaTJng1X%2F0adA%2B%2FiUZr4vMDzQkSWIbtLVOOxIW7c8hf3XVP1CYtCs3obGXJJ%2FkZZ7siELr2TwSSYs1Q8zmoHlfaY0bvBei8RSypvpyEtFb5r%2B%2FwVjN5lCVatRheeqG7Zllxdv%2B0JRDOfs2acM0ujTvSv5DTWISDvj6svRUMQjAaKJh%2BKGbrc76NQsMBGy04phlEMJu7%2BL4GOqUB60cbEc7DmU5E57fZ9LpQF8JgHQcEW%2ByVzqtq2hCEE3H9DEFEFbC6w9Q4hSk9v36hia2miVLm1Mb4MPvJ%2BOaY2tNCE7ypFUsNtlW8PratZgJecnApUzCci6GDQZ0YGPOtemtI7RaTrurjc6COwIzjNtw431QPdnraoF7zNLwdy5qD5hmv0HBBtKY39aomlJPYnHTXgTnP7NBp8p%2FXpiaVGkZxWhzb&X-Amz-Signature=97ec861ef4fc969bdc2fd94c24743c78c397b676e53b8a5ea5421b8135a30d38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCUKRHYU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDUbJhnkacCGpanH7XvxB7mt6gSCF%2F0j%2B2t1xY254GfTQIgaIVejJ%2BwzqJ7slHjVficXQvZ6yzBWh4kHwr0ILvvcn8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPpTxTRlDZWLSJBuircAzjL1OvimpUD1XaUibvEH%2BkfCAf1rVIcnfLlJmMJNE%2BwgyU4MnfysEYs7foo8t6pe6ExTRLEr9cyfBpaTfRfat4UIak57oA87lrYXGhJutGxhb5GS%2FaxQ3qJsR4wPo6ZRk7c%2F%2FqidQVmTIYZVoqr7MdHY%2FLt4VvVJebRVuXCjuN9QB5qqkc0Dz1jOt9rdj3TK%2B%2Bfe6D20RqKenKMcHvzAzXpxL04KouB4%2BH0%2BOnUf5sDnt7sZlPvaV02YS7Qg9lXhh9Ydot%2BbzGfZhRexzZDHjyrPiROVy74158jRszoIt%2FjefpHWZeVRnEP9zXER7UGCR3UF6QaavwCscYAM69hRNHUZd3326KJBV8NLg7TnWeluxITU5ZbK8Xt12WqwjXEFPAWTBlLO9ha8HzCWdrFSCd5LPRercVeWdIJXQw%2FK9VHeaWizaL7bAeyN%2BaTJng1X%2F0adA%2B%2FiUZr4vMDzQkSWIbtLVOOxIW7c8hf3XVP1CYtCs3obGXJJ%2FkZZ7siELr2TwSSYs1Q8zmoHlfaY0bvBei8RSypvpyEtFb5r%2B%2FwVjN5lCVatRheeqG7Zllxdv%2B0JRDOfs2acM0ujTvSv5DTWISDvj6svRUMQjAaKJh%2BKGbrc76NQsMBGy04phlEMJu7%2BL4GOqUB60cbEc7DmU5E57fZ9LpQF8JgHQcEW%2ByVzqtq2hCEE3H9DEFEFbC6w9Q4hSk9v36hia2miVLm1Mb4MPvJ%2BOaY2tNCE7ypFUsNtlW8PratZgJecnApUzCci6GDQZ0YGPOtemtI7RaTrurjc6COwIzjNtw431QPdnraoF7zNLwdy5qD5hmv0HBBtKY39aomlJPYnHTXgTnP7NBp8p%2FXpiaVGkZxWhzb&X-Amz-Signature=504625249146a657cdfe14121b9f266a1b5a7f4c29712bb5582c7709e3a9a46b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
