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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGZZPIX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIF9pEJD%2FjKIop7yuI%2BkRKniv3gLGbTV0dirg4v%2Fr5lyCAiEAmMyoPD%2FMiiU5EqBtT6fu0apLW9cSxVEqpckha5w%2B25oqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbPzb%2FGffHfNZxQKyrcA0mANDLU8djR%2B09pSJsxGhp3nobbDCPy9pOQCk4cp3h5WVXdqhrxrEnWlXl0EQZ9GCpZ%2BB1PYSDcv98BU%2B34Zs45uV1ETOTmd%2FCwMyinqTz98SYEdRrzTu%2F9UKn6kfAlw8aFGQKK1ATuO66VCYbVIjIfbEyR0BHL4%2FR%2BpiA98UAmRldLsOUqndkzD1SlmuHZaPu04giRixFTJ5MRkLQZs0YTzFSbelBpyUR7SMaVue8gMmYJ%2BkGbo4SpauUJy5bUUlre2DmccbiZzV%2FwLDsUSDNWDlmPGfm6LwfobCJEhSpwewsW7AXi2%2Fv3SpVU5pagsSsp2aVbHsTd6hY74LvGzNEFwXz%2BjBmRYwwJeb9Fss8SPQtnxPRnGbc1pPDhJtPsP1LJaMYJEu%2FEjCDuyR6pLJKVqcds9rG91zLn21ufUbiElzRRf%2FPjx18%2FtG6qK58gGE1QvjPPcYkgfYEXXKlK0Tlgh8s8T8EXweWJZ%2BQjfn7tRHcIU5qVYUTrEdUySzX9WfubSQUQ%2FK9wlm%2FJjcMMcFiIMuvgkepIO88nPgM1MJ727cjJ1lF43ir2KojDG4oehRxcoYBZn9DY5MB82UzRYhvYx0yN1FQpJJ1h4jwBS7nYGtNu4AigTcfoybxgMMLai8EGOqUBG3wSgD1R6dJ6eCXm%2Fiyu8zYruERbzMGoy8gsTtRJKBA2mhhVAWptsU%2FVaKX4WXj181KdA96k8qWr%2FyuToWIUEBp5jbBvEm0b5tn%2BsIrXNYFQFJgFWUTC7dXhZ%2BJIwTV%2Bt5BjAcm1cP%2FGyaeDhw68%2Bh%2FryahPIWduUP9SdMY3v7sjsqrSg3l3jTiVEr17DrTbCmzTx4JYQgDHc8zwrpHs3HgfGCyV&X-Amz-Signature=0b42982988e820acb3bbda165c3681163ae64e17a0405be3afcbfcf2189e3a10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGZZPIX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIF9pEJD%2FjKIop7yuI%2BkRKniv3gLGbTV0dirg4v%2Fr5lyCAiEAmMyoPD%2FMiiU5EqBtT6fu0apLW9cSxVEqpckha5w%2B25oqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbPzb%2FGffHfNZxQKyrcA0mANDLU8djR%2B09pSJsxGhp3nobbDCPy9pOQCk4cp3h5WVXdqhrxrEnWlXl0EQZ9GCpZ%2BB1PYSDcv98BU%2B34Zs45uV1ETOTmd%2FCwMyinqTz98SYEdRrzTu%2F9UKn6kfAlw8aFGQKK1ATuO66VCYbVIjIfbEyR0BHL4%2FR%2BpiA98UAmRldLsOUqndkzD1SlmuHZaPu04giRixFTJ5MRkLQZs0YTzFSbelBpyUR7SMaVue8gMmYJ%2BkGbo4SpauUJy5bUUlre2DmccbiZzV%2FwLDsUSDNWDlmPGfm6LwfobCJEhSpwewsW7AXi2%2Fv3SpVU5pagsSsp2aVbHsTd6hY74LvGzNEFwXz%2BjBmRYwwJeb9Fss8SPQtnxPRnGbc1pPDhJtPsP1LJaMYJEu%2FEjCDuyR6pLJKVqcds9rG91zLn21ufUbiElzRRf%2FPjx18%2FtG6qK58gGE1QvjPPcYkgfYEXXKlK0Tlgh8s8T8EXweWJZ%2BQjfn7tRHcIU5qVYUTrEdUySzX9WfubSQUQ%2FK9wlm%2FJjcMMcFiIMuvgkepIO88nPgM1MJ727cjJ1lF43ir2KojDG4oehRxcoYBZn9DY5MB82UzRYhvYx0yN1FQpJJ1h4jwBS7nYGtNu4AigTcfoybxgMMLai8EGOqUBG3wSgD1R6dJ6eCXm%2Fiyu8zYruERbzMGoy8gsTtRJKBA2mhhVAWptsU%2FVaKX4WXj181KdA96k8qWr%2FyuToWIUEBp5jbBvEm0b5tn%2BsIrXNYFQFJgFWUTC7dXhZ%2BJIwTV%2Bt5BjAcm1cP%2FGyaeDhw68%2Bh%2FryahPIWduUP9SdMY3v7sjsqrSg3l3jTiVEr17DrTbCmzTx4JYQgDHc8zwrpHs3HgfGCyV&X-Amz-Signature=f2a392afa4d91c14572bf426c20edeaacb271c936941b064a6efbc4e17fd4ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGZZPIX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIF9pEJD%2FjKIop7yuI%2BkRKniv3gLGbTV0dirg4v%2Fr5lyCAiEAmMyoPD%2FMiiU5EqBtT6fu0apLW9cSxVEqpckha5w%2B25oqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbPzb%2FGffHfNZxQKyrcA0mANDLU8djR%2B09pSJsxGhp3nobbDCPy9pOQCk4cp3h5WVXdqhrxrEnWlXl0EQZ9GCpZ%2BB1PYSDcv98BU%2B34Zs45uV1ETOTmd%2FCwMyinqTz98SYEdRrzTu%2F9UKn6kfAlw8aFGQKK1ATuO66VCYbVIjIfbEyR0BHL4%2FR%2BpiA98UAmRldLsOUqndkzD1SlmuHZaPu04giRixFTJ5MRkLQZs0YTzFSbelBpyUR7SMaVue8gMmYJ%2BkGbo4SpauUJy5bUUlre2DmccbiZzV%2FwLDsUSDNWDlmPGfm6LwfobCJEhSpwewsW7AXi2%2Fv3SpVU5pagsSsp2aVbHsTd6hY74LvGzNEFwXz%2BjBmRYwwJeb9Fss8SPQtnxPRnGbc1pPDhJtPsP1LJaMYJEu%2FEjCDuyR6pLJKVqcds9rG91zLn21ufUbiElzRRf%2FPjx18%2FtG6qK58gGE1QvjPPcYkgfYEXXKlK0Tlgh8s8T8EXweWJZ%2BQjfn7tRHcIU5qVYUTrEdUySzX9WfubSQUQ%2FK9wlm%2FJjcMMcFiIMuvgkepIO88nPgM1MJ727cjJ1lF43ir2KojDG4oehRxcoYBZn9DY5MB82UzRYhvYx0yN1FQpJJ1h4jwBS7nYGtNu4AigTcfoybxgMMLai8EGOqUBG3wSgD1R6dJ6eCXm%2Fiyu8zYruERbzMGoy8gsTtRJKBA2mhhVAWptsU%2FVaKX4WXj181KdA96k8qWr%2FyuToWIUEBp5jbBvEm0b5tn%2BsIrXNYFQFJgFWUTC7dXhZ%2BJIwTV%2Bt5BjAcm1cP%2FGyaeDhw68%2Bh%2FryahPIWduUP9SdMY3v7sjsqrSg3l3jTiVEr17DrTbCmzTx4JYQgDHc8zwrpHs3HgfGCyV&X-Amz-Signature=c8135e4a4447dda389d0fa970c3fdac39e28b74211c7bf0f20ad071b15c8868f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGZZPIX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIF9pEJD%2FjKIop7yuI%2BkRKniv3gLGbTV0dirg4v%2Fr5lyCAiEAmMyoPD%2FMiiU5EqBtT6fu0apLW9cSxVEqpckha5w%2B25oqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbPzb%2FGffHfNZxQKyrcA0mANDLU8djR%2B09pSJsxGhp3nobbDCPy9pOQCk4cp3h5WVXdqhrxrEnWlXl0EQZ9GCpZ%2BB1PYSDcv98BU%2B34Zs45uV1ETOTmd%2FCwMyinqTz98SYEdRrzTu%2F9UKn6kfAlw8aFGQKK1ATuO66VCYbVIjIfbEyR0BHL4%2FR%2BpiA98UAmRldLsOUqndkzD1SlmuHZaPu04giRixFTJ5MRkLQZs0YTzFSbelBpyUR7SMaVue8gMmYJ%2BkGbo4SpauUJy5bUUlre2DmccbiZzV%2FwLDsUSDNWDlmPGfm6LwfobCJEhSpwewsW7AXi2%2Fv3SpVU5pagsSsp2aVbHsTd6hY74LvGzNEFwXz%2BjBmRYwwJeb9Fss8SPQtnxPRnGbc1pPDhJtPsP1LJaMYJEu%2FEjCDuyR6pLJKVqcds9rG91zLn21ufUbiElzRRf%2FPjx18%2FtG6qK58gGE1QvjPPcYkgfYEXXKlK0Tlgh8s8T8EXweWJZ%2BQjfn7tRHcIU5qVYUTrEdUySzX9WfubSQUQ%2FK9wlm%2FJjcMMcFiIMuvgkepIO88nPgM1MJ727cjJ1lF43ir2KojDG4oehRxcoYBZn9DY5MB82UzRYhvYx0yN1FQpJJ1h4jwBS7nYGtNu4AigTcfoybxgMMLai8EGOqUBG3wSgD1R6dJ6eCXm%2Fiyu8zYruERbzMGoy8gsTtRJKBA2mhhVAWptsU%2FVaKX4WXj181KdA96k8qWr%2FyuToWIUEBp5jbBvEm0b5tn%2BsIrXNYFQFJgFWUTC7dXhZ%2BJIwTV%2Bt5BjAcm1cP%2FGyaeDhw68%2Bh%2FryahPIWduUP9SdMY3v7sjsqrSg3l3jTiVEr17DrTbCmzTx4JYQgDHc8zwrpHs3HgfGCyV&X-Amz-Signature=d2e835e527206e5276e2bc9d1314a2a0e1dcf50fc49c94ff0030b1d1af599510&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGZZPIX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIF9pEJD%2FjKIop7yuI%2BkRKniv3gLGbTV0dirg4v%2Fr5lyCAiEAmMyoPD%2FMiiU5EqBtT6fu0apLW9cSxVEqpckha5w%2B25oqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbPzb%2FGffHfNZxQKyrcA0mANDLU8djR%2B09pSJsxGhp3nobbDCPy9pOQCk4cp3h5WVXdqhrxrEnWlXl0EQZ9GCpZ%2BB1PYSDcv98BU%2B34Zs45uV1ETOTmd%2FCwMyinqTz98SYEdRrzTu%2F9UKn6kfAlw8aFGQKK1ATuO66VCYbVIjIfbEyR0BHL4%2FR%2BpiA98UAmRldLsOUqndkzD1SlmuHZaPu04giRixFTJ5MRkLQZs0YTzFSbelBpyUR7SMaVue8gMmYJ%2BkGbo4SpauUJy5bUUlre2DmccbiZzV%2FwLDsUSDNWDlmPGfm6LwfobCJEhSpwewsW7AXi2%2Fv3SpVU5pagsSsp2aVbHsTd6hY74LvGzNEFwXz%2BjBmRYwwJeb9Fss8SPQtnxPRnGbc1pPDhJtPsP1LJaMYJEu%2FEjCDuyR6pLJKVqcds9rG91zLn21ufUbiElzRRf%2FPjx18%2FtG6qK58gGE1QvjPPcYkgfYEXXKlK0Tlgh8s8T8EXweWJZ%2BQjfn7tRHcIU5qVYUTrEdUySzX9WfubSQUQ%2FK9wlm%2FJjcMMcFiIMuvgkepIO88nPgM1MJ727cjJ1lF43ir2KojDG4oehRxcoYBZn9DY5MB82UzRYhvYx0yN1FQpJJ1h4jwBS7nYGtNu4AigTcfoybxgMMLai8EGOqUBG3wSgD1R6dJ6eCXm%2Fiyu8zYruERbzMGoy8gsTtRJKBA2mhhVAWptsU%2FVaKX4WXj181KdA96k8qWr%2FyuToWIUEBp5jbBvEm0b5tn%2BsIrXNYFQFJgFWUTC7dXhZ%2BJIwTV%2Bt5BjAcm1cP%2FGyaeDhw68%2Bh%2FryahPIWduUP9SdMY3v7sjsqrSg3l3jTiVEr17DrTbCmzTx4JYQgDHc8zwrpHs3HgfGCyV&X-Amz-Signature=aa75293da07ac70f10f904b5dc1efbf0fd25f8fd6e6bdf3db3005c5957931399&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGZZPIX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIF9pEJD%2FjKIop7yuI%2BkRKniv3gLGbTV0dirg4v%2Fr5lyCAiEAmMyoPD%2FMiiU5EqBtT6fu0apLW9cSxVEqpckha5w%2B25oqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbPzb%2FGffHfNZxQKyrcA0mANDLU8djR%2B09pSJsxGhp3nobbDCPy9pOQCk4cp3h5WVXdqhrxrEnWlXl0EQZ9GCpZ%2BB1PYSDcv98BU%2B34Zs45uV1ETOTmd%2FCwMyinqTz98SYEdRrzTu%2F9UKn6kfAlw8aFGQKK1ATuO66VCYbVIjIfbEyR0BHL4%2FR%2BpiA98UAmRldLsOUqndkzD1SlmuHZaPu04giRixFTJ5MRkLQZs0YTzFSbelBpyUR7SMaVue8gMmYJ%2BkGbo4SpauUJy5bUUlre2DmccbiZzV%2FwLDsUSDNWDlmPGfm6LwfobCJEhSpwewsW7AXi2%2Fv3SpVU5pagsSsp2aVbHsTd6hY74LvGzNEFwXz%2BjBmRYwwJeb9Fss8SPQtnxPRnGbc1pPDhJtPsP1LJaMYJEu%2FEjCDuyR6pLJKVqcds9rG91zLn21ufUbiElzRRf%2FPjx18%2FtG6qK58gGE1QvjPPcYkgfYEXXKlK0Tlgh8s8T8EXweWJZ%2BQjfn7tRHcIU5qVYUTrEdUySzX9WfubSQUQ%2FK9wlm%2FJjcMMcFiIMuvgkepIO88nPgM1MJ727cjJ1lF43ir2KojDG4oehRxcoYBZn9DY5MB82UzRYhvYx0yN1FQpJJ1h4jwBS7nYGtNu4AigTcfoybxgMMLai8EGOqUBG3wSgD1R6dJ6eCXm%2Fiyu8zYruERbzMGoy8gsTtRJKBA2mhhVAWptsU%2FVaKX4WXj181KdA96k8qWr%2FyuToWIUEBp5jbBvEm0b5tn%2BsIrXNYFQFJgFWUTC7dXhZ%2BJIwTV%2Bt5BjAcm1cP%2FGyaeDhw68%2Bh%2FryahPIWduUP9SdMY3v7sjsqrSg3l3jTiVEr17DrTbCmzTx4JYQgDHc8zwrpHs3HgfGCyV&X-Amz-Signature=aeda6936063612053fa01dee7b425e89729c3dc5eb6f80aa0f504cacf01a73cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGZZPIX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIF9pEJD%2FjKIop7yuI%2BkRKniv3gLGbTV0dirg4v%2Fr5lyCAiEAmMyoPD%2FMiiU5EqBtT6fu0apLW9cSxVEqpckha5w%2B25oqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbPzb%2FGffHfNZxQKyrcA0mANDLU8djR%2B09pSJsxGhp3nobbDCPy9pOQCk4cp3h5WVXdqhrxrEnWlXl0EQZ9GCpZ%2BB1PYSDcv98BU%2B34Zs45uV1ETOTmd%2FCwMyinqTz98SYEdRrzTu%2F9UKn6kfAlw8aFGQKK1ATuO66VCYbVIjIfbEyR0BHL4%2FR%2BpiA98UAmRldLsOUqndkzD1SlmuHZaPu04giRixFTJ5MRkLQZs0YTzFSbelBpyUR7SMaVue8gMmYJ%2BkGbo4SpauUJy5bUUlre2DmccbiZzV%2FwLDsUSDNWDlmPGfm6LwfobCJEhSpwewsW7AXi2%2Fv3SpVU5pagsSsp2aVbHsTd6hY74LvGzNEFwXz%2BjBmRYwwJeb9Fss8SPQtnxPRnGbc1pPDhJtPsP1LJaMYJEu%2FEjCDuyR6pLJKVqcds9rG91zLn21ufUbiElzRRf%2FPjx18%2FtG6qK58gGE1QvjPPcYkgfYEXXKlK0Tlgh8s8T8EXweWJZ%2BQjfn7tRHcIU5qVYUTrEdUySzX9WfubSQUQ%2FK9wlm%2FJjcMMcFiIMuvgkepIO88nPgM1MJ727cjJ1lF43ir2KojDG4oehRxcoYBZn9DY5MB82UzRYhvYx0yN1FQpJJ1h4jwBS7nYGtNu4AigTcfoybxgMMLai8EGOqUBG3wSgD1R6dJ6eCXm%2Fiyu8zYruERbzMGoy8gsTtRJKBA2mhhVAWptsU%2FVaKX4WXj181KdA96k8qWr%2FyuToWIUEBp5jbBvEm0b5tn%2BsIrXNYFQFJgFWUTC7dXhZ%2BJIwTV%2Bt5BjAcm1cP%2FGyaeDhw68%2Bh%2FryahPIWduUP9SdMY3v7sjsqrSg3l3jTiVEr17DrTbCmzTx4JYQgDHc8zwrpHs3HgfGCyV&X-Amz-Signature=f9c5c6b50c6eed4fa7b4edbebbc8e55f4f7c4b23f1934ebd26172c414b11e6fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGZZPIX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIF9pEJD%2FjKIop7yuI%2BkRKniv3gLGbTV0dirg4v%2Fr5lyCAiEAmMyoPD%2FMiiU5EqBtT6fu0apLW9cSxVEqpckha5w%2B25oqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbPzb%2FGffHfNZxQKyrcA0mANDLU8djR%2B09pSJsxGhp3nobbDCPy9pOQCk4cp3h5WVXdqhrxrEnWlXl0EQZ9GCpZ%2BB1PYSDcv98BU%2B34Zs45uV1ETOTmd%2FCwMyinqTz98SYEdRrzTu%2F9UKn6kfAlw8aFGQKK1ATuO66VCYbVIjIfbEyR0BHL4%2FR%2BpiA98UAmRldLsOUqndkzD1SlmuHZaPu04giRixFTJ5MRkLQZs0YTzFSbelBpyUR7SMaVue8gMmYJ%2BkGbo4SpauUJy5bUUlre2DmccbiZzV%2FwLDsUSDNWDlmPGfm6LwfobCJEhSpwewsW7AXi2%2Fv3SpVU5pagsSsp2aVbHsTd6hY74LvGzNEFwXz%2BjBmRYwwJeb9Fss8SPQtnxPRnGbc1pPDhJtPsP1LJaMYJEu%2FEjCDuyR6pLJKVqcds9rG91zLn21ufUbiElzRRf%2FPjx18%2FtG6qK58gGE1QvjPPcYkgfYEXXKlK0Tlgh8s8T8EXweWJZ%2BQjfn7tRHcIU5qVYUTrEdUySzX9WfubSQUQ%2FK9wlm%2FJjcMMcFiIMuvgkepIO88nPgM1MJ727cjJ1lF43ir2KojDG4oehRxcoYBZn9DY5MB82UzRYhvYx0yN1FQpJJ1h4jwBS7nYGtNu4AigTcfoybxgMMLai8EGOqUBG3wSgD1R6dJ6eCXm%2Fiyu8zYruERbzMGoy8gsTtRJKBA2mhhVAWptsU%2FVaKX4WXj181KdA96k8qWr%2FyuToWIUEBp5jbBvEm0b5tn%2BsIrXNYFQFJgFWUTC7dXhZ%2BJIwTV%2Bt5BjAcm1cP%2FGyaeDhw68%2Bh%2FryahPIWduUP9SdMY3v7sjsqrSg3l3jTiVEr17DrTbCmzTx4JYQgDHc8zwrpHs3HgfGCyV&X-Amz-Signature=ac4664d6e719aedd2fd033cd17c5cddb65af4d83a0221305256ebcfc6e67174d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
