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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TLTKBP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEleFWq%2FsIET0RKyd8vV6boDjKhgouE8%2Ft9ASKuh7vBAiEA3%2BdUzhS9hmjFrqqxvr9L%2F1qgJja9mYiUCbEzNZu%2FEZoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLX%2BtWWG52MFTO62mSrcA75htB9PoLOzu7fxaeTtRuV2CKX8R2LcuJ3gNrU3%2B1jrKCYsfsY%2FRDLi6vV3AHFHX61dQNp01Cr%2FuC1WqZXRFSO0IWixvTW1Il2xtGfGxDTFezPe%2BYwL0E%2FBMucdYQNUU1zw4gEcerr0h4FFFuNfEA4ImV84R6F2IdeEf%2F08PgHlExLd7oDwfZuAd%2BCxjT%2BBjD4DkSuJJWx1Wk2w024eg97amTma%2FTyrT8%2FcH%2BOSMx7co8Qck9gIyV3hC0aZWZM6eRVWexXe5zuvptx%2BbvS11UUlxZSxrsTgA4FoOIJZ32YOcRCoq6INf%2B0NtqyoMYG6QzyuV7Q7HaJrru3oM8n9De05hXqodr4Eo7Vty90q%2BJy%2F01RK%2FDc1IIki8MwF7b9KMUb2f1sgpLTyUxLwFXRiWm0GQ%2B2FQOp8aVeB%2B7VuBstuFY6NzZKPW9V%2FtKUjinsoIqFjnZW%2BcqT%2FfsMDEzu3lk86mYVHyGCGlt2%2FWgmdR1LuQImQ3lQIDjkVfpuojWRRDf5w7pKr1jH%2BcfD6V%2FutaSouf7KH5ICyNJP%2FK1WiCJwlgwejJP8tJsAQ4MxVzaLtMt%2BvW6h9v%2BvHXaHBCW%2Fw5XzRv6mVAtZ2jQfqkr7EgNftx%2FfnLKcOFwGoD4%2BfMLfY2r4GOqUB5ceIqUxavBjM%2Bq5DJF8Dtg4OQpDgHFRG5zrm75bkfr7dd1YjftiXqIbQzxaBo0JeEv8o4j2W3C2QhLBbW29t5uhVZvyk2arxdpU9VQ5%2B%2B5fx7d0ymE2jrOFjtWwS1TD0bgE8TKfws4M%2FxhDG1k3adX%2BWB7YFE%2FilajRmBOdb%2FkbSv%2Bvgy5DzgzEIIlKDyUM7p1h3DbTSDrsW7N9svu9FEdyRt2DG&X-Amz-Signature=b950a93c728780cfca4b45f7ead36b8661a2adf0242ecf8b98c599f3c1b0ffb6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TLTKBP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEleFWq%2FsIET0RKyd8vV6boDjKhgouE8%2Ft9ASKuh7vBAiEA3%2BdUzhS9hmjFrqqxvr9L%2F1qgJja9mYiUCbEzNZu%2FEZoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLX%2BtWWG52MFTO62mSrcA75htB9PoLOzu7fxaeTtRuV2CKX8R2LcuJ3gNrU3%2B1jrKCYsfsY%2FRDLi6vV3AHFHX61dQNp01Cr%2FuC1WqZXRFSO0IWixvTW1Il2xtGfGxDTFezPe%2BYwL0E%2FBMucdYQNUU1zw4gEcerr0h4FFFuNfEA4ImV84R6F2IdeEf%2F08PgHlExLd7oDwfZuAd%2BCxjT%2BBjD4DkSuJJWx1Wk2w024eg97amTma%2FTyrT8%2FcH%2BOSMx7co8Qck9gIyV3hC0aZWZM6eRVWexXe5zuvptx%2BbvS11UUlxZSxrsTgA4FoOIJZ32YOcRCoq6INf%2B0NtqyoMYG6QzyuV7Q7HaJrru3oM8n9De05hXqodr4Eo7Vty90q%2BJy%2F01RK%2FDc1IIki8MwF7b9KMUb2f1sgpLTyUxLwFXRiWm0GQ%2B2FQOp8aVeB%2B7VuBstuFY6NzZKPW9V%2FtKUjinsoIqFjnZW%2BcqT%2FfsMDEzu3lk86mYVHyGCGlt2%2FWgmdR1LuQImQ3lQIDjkVfpuojWRRDf5w7pKr1jH%2BcfD6V%2FutaSouf7KH5ICyNJP%2FK1WiCJwlgwejJP8tJsAQ4MxVzaLtMt%2BvW6h9v%2BvHXaHBCW%2Fw5XzRv6mVAtZ2jQfqkr7EgNftx%2FfnLKcOFwGoD4%2BfMLfY2r4GOqUB5ceIqUxavBjM%2Bq5DJF8Dtg4OQpDgHFRG5zrm75bkfr7dd1YjftiXqIbQzxaBo0JeEv8o4j2W3C2QhLBbW29t5uhVZvyk2arxdpU9VQ5%2B%2B5fx7d0ymE2jrOFjtWwS1TD0bgE8TKfws4M%2FxhDG1k3adX%2BWB7YFE%2FilajRmBOdb%2FkbSv%2Bvgy5DzgzEIIlKDyUM7p1h3DbTSDrsW7N9svu9FEdyRt2DG&X-Amz-Signature=654c079245be975bae2928358a300889d4e2511f504c99877ca3be6543835e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TLTKBP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEleFWq%2FsIET0RKyd8vV6boDjKhgouE8%2Ft9ASKuh7vBAiEA3%2BdUzhS9hmjFrqqxvr9L%2F1qgJja9mYiUCbEzNZu%2FEZoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLX%2BtWWG52MFTO62mSrcA75htB9PoLOzu7fxaeTtRuV2CKX8R2LcuJ3gNrU3%2B1jrKCYsfsY%2FRDLi6vV3AHFHX61dQNp01Cr%2FuC1WqZXRFSO0IWixvTW1Il2xtGfGxDTFezPe%2BYwL0E%2FBMucdYQNUU1zw4gEcerr0h4FFFuNfEA4ImV84R6F2IdeEf%2F08PgHlExLd7oDwfZuAd%2BCxjT%2BBjD4DkSuJJWx1Wk2w024eg97amTma%2FTyrT8%2FcH%2BOSMx7co8Qck9gIyV3hC0aZWZM6eRVWexXe5zuvptx%2BbvS11UUlxZSxrsTgA4FoOIJZ32YOcRCoq6INf%2B0NtqyoMYG6QzyuV7Q7HaJrru3oM8n9De05hXqodr4Eo7Vty90q%2BJy%2F01RK%2FDc1IIki8MwF7b9KMUb2f1sgpLTyUxLwFXRiWm0GQ%2B2FQOp8aVeB%2B7VuBstuFY6NzZKPW9V%2FtKUjinsoIqFjnZW%2BcqT%2FfsMDEzu3lk86mYVHyGCGlt2%2FWgmdR1LuQImQ3lQIDjkVfpuojWRRDf5w7pKr1jH%2BcfD6V%2FutaSouf7KH5ICyNJP%2FK1WiCJwlgwejJP8tJsAQ4MxVzaLtMt%2BvW6h9v%2BvHXaHBCW%2Fw5XzRv6mVAtZ2jQfqkr7EgNftx%2FfnLKcOFwGoD4%2BfMLfY2r4GOqUB5ceIqUxavBjM%2Bq5DJF8Dtg4OQpDgHFRG5zrm75bkfr7dd1YjftiXqIbQzxaBo0JeEv8o4j2W3C2QhLBbW29t5uhVZvyk2arxdpU9VQ5%2B%2B5fx7d0ymE2jrOFjtWwS1TD0bgE8TKfws4M%2FxhDG1k3adX%2BWB7YFE%2FilajRmBOdb%2FkbSv%2Bvgy5DzgzEIIlKDyUM7p1h3DbTSDrsW7N9svu9FEdyRt2DG&X-Amz-Signature=49ec10695187860b7f64a5c980cd70661c806a7304865abd9051a2020e055155&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TLTKBP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEleFWq%2FsIET0RKyd8vV6boDjKhgouE8%2Ft9ASKuh7vBAiEA3%2BdUzhS9hmjFrqqxvr9L%2F1qgJja9mYiUCbEzNZu%2FEZoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLX%2BtWWG52MFTO62mSrcA75htB9PoLOzu7fxaeTtRuV2CKX8R2LcuJ3gNrU3%2B1jrKCYsfsY%2FRDLi6vV3AHFHX61dQNp01Cr%2FuC1WqZXRFSO0IWixvTW1Il2xtGfGxDTFezPe%2BYwL0E%2FBMucdYQNUU1zw4gEcerr0h4FFFuNfEA4ImV84R6F2IdeEf%2F08PgHlExLd7oDwfZuAd%2BCxjT%2BBjD4DkSuJJWx1Wk2w024eg97amTma%2FTyrT8%2FcH%2BOSMx7co8Qck9gIyV3hC0aZWZM6eRVWexXe5zuvptx%2BbvS11UUlxZSxrsTgA4FoOIJZ32YOcRCoq6INf%2B0NtqyoMYG6QzyuV7Q7HaJrru3oM8n9De05hXqodr4Eo7Vty90q%2BJy%2F01RK%2FDc1IIki8MwF7b9KMUb2f1sgpLTyUxLwFXRiWm0GQ%2B2FQOp8aVeB%2B7VuBstuFY6NzZKPW9V%2FtKUjinsoIqFjnZW%2BcqT%2FfsMDEzu3lk86mYVHyGCGlt2%2FWgmdR1LuQImQ3lQIDjkVfpuojWRRDf5w7pKr1jH%2BcfD6V%2FutaSouf7KH5ICyNJP%2FK1WiCJwlgwejJP8tJsAQ4MxVzaLtMt%2BvW6h9v%2BvHXaHBCW%2Fw5XzRv6mVAtZ2jQfqkr7EgNftx%2FfnLKcOFwGoD4%2BfMLfY2r4GOqUB5ceIqUxavBjM%2Bq5DJF8Dtg4OQpDgHFRG5zrm75bkfr7dd1YjftiXqIbQzxaBo0JeEv8o4j2W3C2QhLBbW29t5uhVZvyk2arxdpU9VQ5%2B%2B5fx7d0ymE2jrOFjtWwS1TD0bgE8TKfws4M%2FxhDG1k3adX%2BWB7YFE%2FilajRmBOdb%2FkbSv%2Bvgy5DzgzEIIlKDyUM7p1h3DbTSDrsW7N9svu9FEdyRt2DG&X-Amz-Signature=e20d1cc917dea52f334cf2a58f5d7673b6e598baedeab01272766ba29b4e725c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TLTKBP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEleFWq%2FsIET0RKyd8vV6boDjKhgouE8%2Ft9ASKuh7vBAiEA3%2BdUzhS9hmjFrqqxvr9L%2F1qgJja9mYiUCbEzNZu%2FEZoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLX%2BtWWG52MFTO62mSrcA75htB9PoLOzu7fxaeTtRuV2CKX8R2LcuJ3gNrU3%2B1jrKCYsfsY%2FRDLi6vV3AHFHX61dQNp01Cr%2FuC1WqZXRFSO0IWixvTW1Il2xtGfGxDTFezPe%2BYwL0E%2FBMucdYQNUU1zw4gEcerr0h4FFFuNfEA4ImV84R6F2IdeEf%2F08PgHlExLd7oDwfZuAd%2BCxjT%2BBjD4DkSuJJWx1Wk2w024eg97amTma%2FTyrT8%2FcH%2BOSMx7co8Qck9gIyV3hC0aZWZM6eRVWexXe5zuvptx%2BbvS11UUlxZSxrsTgA4FoOIJZ32YOcRCoq6INf%2B0NtqyoMYG6QzyuV7Q7HaJrru3oM8n9De05hXqodr4Eo7Vty90q%2BJy%2F01RK%2FDc1IIki8MwF7b9KMUb2f1sgpLTyUxLwFXRiWm0GQ%2B2FQOp8aVeB%2B7VuBstuFY6NzZKPW9V%2FtKUjinsoIqFjnZW%2BcqT%2FfsMDEzu3lk86mYVHyGCGlt2%2FWgmdR1LuQImQ3lQIDjkVfpuojWRRDf5w7pKr1jH%2BcfD6V%2FutaSouf7KH5ICyNJP%2FK1WiCJwlgwejJP8tJsAQ4MxVzaLtMt%2BvW6h9v%2BvHXaHBCW%2Fw5XzRv6mVAtZ2jQfqkr7EgNftx%2FfnLKcOFwGoD4%2BfMLfY2r4GOqUB5ceIqUxavBjM%2Bq5DJF8Dtg4OQpDgHFRG5zrm75bkfr7dd1YjftiXqIbQzxaBo0JeEv8o4j2W3C2QhLBbW29t5uhVZvyk2arxdpU9VQ5%2B%2B5fx7d0ymE2jrOFjtWwS1TD0bgE8TKfws4M%2FxhDG1k3adX%2BWB7YFE%2FilajRmBOdb%2FkbSv%2Bvgy5DzgzEIIlKDyUM7p1h3DbTSDrsW7N9svu9FEdyRt2DG&X-Amz-Signature=2c0c0bedf9633cb0c7f1b327b8fdf5aec005a20e27afc1cfc4c688d3e09457c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TLTKBP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEleFWq%2FsIET0RKyd8vV6boDjKhgouE8%2Ft9ASKuh7vBAiEA3%2BdUzhS9hmjFrqqxvr9L%2F1qgJja9mYiUCbEzNZu%2FEZoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLX%2BtWWG52MFTO62mSrcA75htB9PoLOzu7fxaeTtRuV2CKX8R2LcuJ3gNrU3%2B1jrKCYsfsY%2FRDLi6vV3AHFHX61dQNp01Cr%2FuC1WqZXRFSO0IWixvTW1Il2xtGfGxDTFezPe%2BYwL0E%2FBMucdYQNUU1zw4gEcerr0h4FFFuNfEA4ImV84R6F2IdeEf%2F08PgHlExLd7oDwfZuAd%2BCxjT%2BBjD4DkSuJJWx1Wk2w024eg97amTma%2FTyrT8%2FcH%2BOSMx7co8Qck9gIyV3hC0aZWZM6eRVWexXe5zuvptx%2BbvS11UUlxZSxrsTgA4FoOIJZ32YOcRCoq6INf%2B0NtqyoMYG6QzyuV7Q7HaJrru3oM8n9De05hXqodr4Eo7Vty90q%2BJy%2F01RK%2FDc1IIki8MwF7b9KMUb2f1sgpLTyUxLwFXRiWm0GQ%2B2FQOp8aVeB%2B7VuBstuFY6NzZKPW9V%2FtKUjinsoIqFjnZW%2BcqT%2FfsMDEzu3lk86mYVHyGCGlt2%2FWgmdR1LuQImQ3lQIDjkVfpuojWRRDf5w7pKr1jH%2BcfD6V%2FutaSouf7KH5ICyNJP%2FK1WiCJwlgwejJP8tJsAQ4MxVzaLtMt%2BvW6h9v%2BvHXaHBCW%2Fw5XzRv6mVAtZ2jQfqkr7EgNftx%2FfnLKcOFwGoD4%2BfMLfY2r4GOqUB5ceIqUxavBjM%2Bq5DJF8Dtg4OQpDgHFRG5zrm75bkfr7dd1YjftiXqIbQzxaBo0JeEv8o4j2W3C2QhLBbW29t5uhVZvyk2arxdpU9VQ5%2B%2B5fx7d0ymE2jrOFjtWwS1TD0bgE8TKfws4M%2FxhDG1k3adX%2BWB7YFE%2FilajRmBOdb%2FkbSv%2Bvgy5DzgzEIIlKDyUM7p1h3DbTSDrsW7N9svu9FEdyRt2DG&X-Amz-Signature=b772023fd83d531f5c03304681cad0b3e9c46127d99fcb7ce9fe86fe16a147be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TLTKBP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEleFWq%2FsIET0RKyd8vV6boDjKhgouE8%2Ft9ASKuh7vBAiEA3%2BdUzhS9hmjFrqqxvr9L%2F1qgJja9mYiUCbEzNZu%2FEZoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLX%2BtWWG52MFTO62mSrcA75htB9PoLOzu7fxaeTtRuV2CKX8R2LcuJ3gNrU3%2B1jrKCYsfsY%2FRDLi6vV3AHFHX61dQNp01Cr%2FuC1WqZXRFSO0IWixvTW1Il2xtGfGxDTFezPe%2BYwL0E%2FBMucdYQNUU1zw4gEcerr0h4FFFuNfEA4ImV84R6F2IdeEf%2F08PgHlExLd7oDwfZuAd%2BCxjT%2BBjD4DkSuJJWx1Wk2w024eg97amTma%2FTyrT8%2FcH%2BOSMx7co8Qck9gIyV3hC0aZWZM6eRVWexXe5zuvptx%2BbvS11UUlxZSxrsTgA4FoOIJZ32YOcRCoq6INf%2B0NtqyoMYG6QzyuV7Q7HaJrru3oM8n9De05hXqodr4Eo7Vty90q%2BJy%2F01RK%2FDc1IIki8MwF7b9KMUb2f1sgpLTyUxLwFXRiWm0GQ%2B2FQOp8aVeB%2B7VuBstuFY6NzZKPW9V%2FtKUjinsoIqFjnZW%2BcqT%2FfsMDEzu3lk86mYVHyGCGlt2%2FWgmdR1LuQImQ3lQIDjkVfpuojWRRDf5w7pKr1jH%2BcfD6V%2FutaSouf7KH5ICyNJP%2FK1WiCJwlgwejJP8tJsAQ4MxVzaLtMt%2BvW6h9v%2BvHXaHBCW%2Fw5XzRv6mVAtZ2jQfqkr7EgNftx%2FfnLKcOFwGoD4%2BfMLfY2r4GOqUB5ceIqUxavBjM%2Bq5DJF8Dtg4OQpDgHFRG5zrm75bkfr7dd1YjftiXqIbQzxaBo0JeEv8o4j2W3C2QhLBbW29t5uhVZvyk2arxdpU9VQ5%2B%2B5fx7d0ymE2jrOFjtWwS1TD0bgE8TKfws4M%2FxhDG1k3adX%2BWB7YFE%2FilajRmBOdb%2FkbSv%2Bvgy5DzgzEIIlKDyUM7p1h3DbTSDrsW7N9svu9FEdyRt2DG&X-Amz-Signature=23c8f417b11bcc82559e311bc7293d19300adad61d5a94c44291d92bd9889dc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TLTKBP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEleFWq%2FsIET0RKyd8vV6boDjKhgouE8%2Ft9ASKuh7vBAiEA3%2BdUzhS9hmjFrqqxvr9L%2F1qgJja9mYiUCbEzNZu%2FEZoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLX%2BtWWG52MFTO62mSrcA75htB9PoLOzu7fxaeTtRuV2CKX8R2LcuJ3gNrU3%2B1jrKCYsfsY%2FRDLi6vV3AHFHX61dQNp01Cr%2FuC1WqZXRFSO0IWixvTW1Il2xtGfGxDTFezPe%2BYwL0E%2FBMucdYQNUU1zw4gEcerr0h4FFFuNfEA4ImV84R6F2IdeEf%2F08PgHlExLd7oDwfZuAd%2BCxjT%2BBjD4DkSuJJWx1Wk2w024eg97amTma%2FTyrT8%2FcH%2BOSMx7co8Qck9gIyV3hC0aZWZM6eRVWexXe5zuvptx%2BbvS11UUlxZSxrsTgA4FoOIJZ32YOcRCoq6INf%2B0NtqyoMYG6QzyuV7Q7HaJrru3oM8n9De05hXqodr4Eo7Vty90q%2BJy%2F01RK%2FDc1IIki8MwF7b9KMUb2f1sgpLTyUxLwFXRiWm0GQ%2B2FQOp8aVeB%2B7VuBstuFY6NzZKPW9V%2FtKUjinsoIqFjnZW%2BcqT%2FfsMDEzu3lk86mYVHyGCGlt2%2FWgmdR1LuQImQ3lQIDjkVfpuojWRRDf5w7pKr1jH%2BcfD6V%2FutaSouf7KH5ICyNJP%2FK1WiCJwlgwejJP8tJsAQ4MxVzaLtMt%2BvW6h9v%2BvHXaHBCW%2Fw5XzRv6mVAtZ2jQfqkr7EgNftx%2FfnLKcOFwGoD4%2BfMLfY2r4GOqUB5ceIqUxavBjM%2Bq5DJF8Dtg4OQpDgHFRG5zrm75bkfr7dd1YjftiXqIbQzxaBo0JeEv8o4j2W3C2QhLBbW29t5uhVZvyk2arxdpU9VQ5%2B%2B5fx7d0ymE2jrOFjtWwS1TD0bgE8TKfws4M%2FxhDG1k3adX%2BWB7YFE%2FilajRmBOdb%2FkbSv%2Bvgy5DzgzEIIlKDyUM7p1h3DbTSDrsW7N9svu9FEdyRt2DG&X-Amz-Signature=7a8b343fd46f0624918668617c2118de2619944126ca6598d2ed6e901de5456e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
