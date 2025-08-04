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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RO5LV45%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBEl5Z1Hi69%2FYHMeUbMGuWSt1%2FVblPXwoieaLklf3RHxAiA7wcQm3mpx2dT8UatdbQG0Bp3ZRyTdCFoxLnRd4nxM8Sr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMrvv9pk7phC6fiRY4KtwDVjjt6MFBS%2FJY787pMaJYnzGUoBq3VUQCdLUMKJ%2B0I8d65GaJwhYMf39Si8pgiCndKugREb8uJKTpPH%2F65JVNj69jG0haEUHM1m4v%2FgNeHMCUOZQ32o5nTFTnu31HC9308O73CN1ds6cZ7A6gm0h%2BbckeoYLLv2sRHd0nsTSx%2BCRA6N1GTKBYsAG3wh0O38KkEiJJFk%2F89wU%2B8HQHgvBf3e6rN26vWfDwjlj2xhtQGS6PXm6867rZk49GIxXt8ebc%2B%2BP4di6blGuEIWSp1Y3ETWffm%2BEgqW1aSWH%2FViqe7rrEfkZBNWVEawxZgAO%2F%2FMVCT2WFS5oFZ%2FwQJN%2Fn7cz3D2DsxQVEZWABMfZBy7kx86ItAULF96opGhJKpK2hrSpmCxCW7KxyrmNTtZL1tHdsBmST6xD0Tq5lCtsLyahtDrr4M%2FTD4kM3mPsgkotx2x8QSPS0GJlbZvZcV%2FsGV0ajqzf8pgnHDpCQm4zT5kaj5B%2FX2OIm%2FcOgxNx0XVvATEuBE%2FUlJP58SGHhtofT4WxEU2fy4lrXQOupZ04JlxqXtoGckk5GcnNNeus0CzdYNrxbRqS0QndWwsBZD0tkfe4mxha6IKjxK%2BJAfb3GbqNslnpMqGSI8t71THel5%2BwwtKbCxAY6pgHQIUz2ujyIIcrN8Y3Ch5qgQJkNjALl%2FT221kjcNKX2yG42pZAOdjsrpFe9GC6i3JEqjmY7FSkw%2FQYZ%2BmzEqVNMkVAm%2BjArAUP2rXBQkA7YWoDygjmVNXzBDHgAslbFewNBgx4zNZ%2BPdEPLTpjE08pQhtpjY%2BuHLAmOhwUVWp%2BPjfF8ojami%2F04MAzgNgAWPLKGYI1Cq7ABY6phZ%2FIJs8SH5H9y0uuB&X-Amz-Signature=a82a98e34d9a9a73a9f5189dfd594cd161a3bdf81b277560a4ffd9509424b77c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RO5LV45%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBEl5Z1Hi69%2FYHMeUbMGuWSt1%2FVblPXwoieaLklf3RHxAiA7wcQm3mpx2dT8UatdbQG0Bp3ZRyTdCFoxLnRd4nxM8Sr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMrvv9pk7phC6fiRY4KtwDVjjt6MFBS%2FJY787pMaJYnzGUoBq3VUQCdLUMKJ%2B0I8d65GaJwhYMf39Si8pgiCndKugREb8uJKTpPH%2F65JVNj69jG0haEUHM1m4v%2FgNeHMCUOZQ32o5nTFTnu31HC9308O73CN1ds6cZ7A6gm0h%2BbckeoYLLv2sRHd0nsTSx%2BCRA6N1GTKBYsAG3wh0O38KkEiJJFk%2F89wU%2B8HQHgvBf3e6rN26vWfDwjlj2xhtQGS6PXm6867rZk49GIxXt8ebc%2B%2BP4di6blGuEIWSp1Y3ETWffm%2BEgqW1aSWH%2FViqe7rrEfkZBNWVEawxZgAO%2F%2FMVCT2WFS5oFZ%2FwQJN%2Fn7cz3D2DsxQVEZWABMfZBy7kx86ItAULF96opGhJKpK2hrSpmCxCW7KxyrmNTtZL1tHdsBmST6xD0Tq5lCtsLyahtDrr4M%2FTD4kM3mPsgkotx2x8QSPS0GJlbZvZcV%2FsGV0ajqzf8pgnHDpCQm4zT5kaj5B%2FX2OIm%2FcOgxNx0XVvATEuBE%2FUlJP58SGHhtofT4WxEU2fy4lrXQOupZ04JlxqXtoGckk5GcnNNeus0CzdYNrxbRqS0QndWwsBZD0tkfe4mxha6IKjxK%2BJAfb3GbqNslnpMqGSI8t71THel5%2BwwtKbCxAY6pgHQIUz2ujyIIcrN8Y3Ch5qgQJkNjALl%2FT221kjcNKX2yG42pZAOdjsrpFe9GC6i3JEqjmY7FSkw%2FQYZ%2BmzEqVNMkVAm%2BjArAUP2rXBQkA7YWoDygjmVNXzBDHgAslbFewNBgx4zNZ%2BPdEPLTpjE08pQhtpjY%2BuHLAmOhwUVWp%2BPjfF8ojami%2F04MAzgNgAWPLKGYI1Cq7ABY6phZ%2FIJs8SH5H9y0uuB&X-Amz-Signature=4def464b9753e849f79a89a1a037eeaa625056163fdf21019eccf21e0884b567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RO5LV45%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBEl5Z1Hi69%2FYHMeUbMGuWSt1%2FVblPXwoieaLklf3RHxAiA7wcQm3mpx2dT8UatdbQG0Bp3ZRyTdCFoxLnRd4nxM8Sr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMrvv9pk7phC6fiRY4KtwDVjjt6MFBS%2FJY787pMaJYnzGUoBq3VUQCdLUMKJ%2B0I8d65GaJwhYMf39Si8pgiCndKugREb8uJKTpPH%2F65JVNj69jG0haEUHM1m4v%2FgNeHMCUOZQ32o5nTFTnu31HC9308O73CN1ds6cZ7A6gm0h%2BbckeoYLLv2sRHd0nsTSx%2BCRA6N1GTKBYsAG3wh0O38KkEiJJFk%2F89wU%2B8HQHgvBf3e6rN26vWfDwjlj2xhtQGS6PXm6867rZk49GIxXt8ebc%2B%2BP4di6blGuEIWSp1Y3ETWffm%2BEgqW1aSWH%2FViqe7rrEfkZBNWVEawxZgAO%2F%2FMVCT2WFS5oFZ%2FwQJN%2Fn7cz3D2DsxQVEZWABMfZBy7kx86ItAULF96opGhJKpK2hrSpmCxCW7KxyrmNTtZL1tHdsBmST6xD0Tq5lCtsLyahtDrr4M%2FTD4kM3mPsgkotx2x8QSPS0GJlbZvZcV%2FsGV0ajqzf8pgnHDpCQm4zT5kaj5B%2FX2OIm%2FcOgxNx0XVvATEuBE%2FUlJP58SGHhtofT4WxEU2fy4lrXQOupZ04JlxqXtoGckk5GcnNNeus0CzdYNrxbRqS0QndWwsBZD0tkfe4mxha6IKjxK%2BJAfb3GbqNslnpMqGSI8t71THel5%2BwwtKbCxAY6pgHQIUz2ujyIIcrN8Y3Ch5qgQJkNjALl%2FT221kjcNKX2yG42pZAOdjsrpFe9GC6i3JEqjmY7FSkw%2FQYZ%2BmzEqVNMkVAm%2BjArAUP2rXBQkA7YWoDygjmVNXzBDHgAslbFewNBgx4zNZ%2BPdEPLTpjE08pQhtpjY%2BuHLAmOhwUVWp%2BPjfF8ojami%2F04MAzgNgAWPLKGYI1Cq7ABY6phZ%2FIJs8SH5H9y0uuB&X-Amz-Signature=f96d7722da0a27322b465e83df8c27e615aa5beffda68ffb30c48124ed2c8309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RO5LV45%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBEl5Z1Hi69%2FYHMeUbMGuWSt1%2FVblPXwoieaLklf3RHxAiA7wcQm3mpx2dT8UatdbQG0Bp3ZRyTdCFoxLnRd4nxM8Sr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMrvv9pk7phC6fiRY4KtwDVjjt6MFBS%2FJY787pMaJYnzGUoBq3VUQCdLUMKJ%2B0I8d65GaJwhYMf39Si8pgiCndKugREb8uJKTpPH%2F65JVNj69jG0haEUHM1m4v%2FgNeHMCUOZQ32o5nTFTnu31HC9308O73CN1ds6cZ7A6gm0h%2BbckeoYLLv2sRHd0nsTSx%2BCRA6N1GTKBYsAG3wh0O38KkEiJJFk%2F89wU%2B8HQHgvBf3e6rN26vWfDwjlj2xhtQGS6PXm6867rZk49GIxXt8ebc%2B%2BP4di6blGuEIWSp1Y3ETWffm%2BEgqW1aSWH%2FViqe7rrEfkZBNWVEawxZgAO%2F%2FMVCT2WFS5oFZ%2FwQJN%2Fn7cz3D2DsxQVEZWABMfZBy7kx86ItAULF96opGhJKpK2hrSpmCxCW7KxyrmNTtZL1tHdsBmST6xD0Tq5lCtsLyahtDrr4M%2FTD4kM3mPsgkotx2x8QSPS0GJlbZvZcV%2FsGV0ajqzf8pgnHDpCQm4zT5kaj5B%2FX2OIm%2FcOgxNx0XVvATEuBE%2FUlJP58SGHhtofT4WxEU2fy4lrXQOupZ04JlxqXtoGckk5GcnNNeus0CzdYNrxbRqS0QndWwsBZD0tkfe4mxha6IKjxK%2BJAfb3GbqNslnpMqGSI8t71THel5%2BwwtKbCxAY6pgHQIUz2ujyIIcrN8Y3Ch5qgQJkNjALl%2FT221kjcNKX2yG42pZAOdjsrpFe9GC6i3JEqjmY7FSkw%2FQYZ%2BmzEqVNMkVAm%2BjArAUP2rXBQkA7YWoDygjmVNXzBDHgAslbFewNBgx4zNZ%2BPdEPLTpjE08pQhtpjY%2BuHLAmOhwUVWp%2BPjfF8ojami%2F04MAzgNgAWPLKGYI1Cq7ABY6phZ%2FIJs8SH5H9y0uuB&X-Amz-Signature=acd9e6189022c851ff6ecb01c7c8c1866e12297edc68e02f892c22e731619935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RO5LV45%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBEl5Z1Hi69%2FYHMeUbMGuWSt1%2FVblPXwoieaLklf3RHxAiA7wcQm3mpx2dT8UatdbQG0Bp3ZRyTdCFoxLnRd4nxM8Sr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMrvv9pk7phC6fiRY4KtwDVjjt6MFBS%2FJY787pMaJYnzGUoBq3VUQCdLUMKJ%2B0I8d65GaJwhYMf39Si8pgiCndKugREb8uJKTpPH%2F65JVNj69jG0haEUHM1m4v%2FgNeHMCUOZQ32o5nTFTnu31HC9308O73CN1ds6cZ7A6gm0h%2BbckeoYLLv2sRHd0nsTSx%2BCRA6N1GTKBYsAG3wh0O38KkEiJJFk%2F89wU%2B8HQHgvBf3e6rN26vWfDwjlj2xhtQGS6PXm6867rZk49GIxXt8ebc%2B%2BP4di6blGuEIWSp1Y3ETWffm%2BEgqW1aSWH%2FViqe7rrEfkZBNWVEawxZgAO%2F%2FMVCT2WFS5oFZ%2FwQJN%2Fn7cz3D2DsxQVEZWABMfZBy7kx86ItAULF96opGhJKpK2hrSpmCxCW7KxyrmNTtZL1tHdsBmST6xD0Tq5lCtsLyahtDrr4M%2FTD4kM3mPsgkotx2x8QSPS0GJlbZvZcV%2FsGV0ajqzf8pgnHDpCQm4zT5kaj5B%2FX2OIm%2FcOgxNx0XVvATEuBE%2FUlJP58SGHhtofT4WxEU2fy4lrXQOupZ04JlxqXtoGckk5GcnNNeus0CzdYNrxbRqS0QndWwsBZD0tkfe4mxha6IKjxK%2BJAfb3GbqNslnpMqGSI8t71THel5%2BwwtKbCxAY6pgHQIUz2ujyIIcrN8Y3Ch5qgQJkNjALl%2FT221kjcNKX2yG42pZAOdjsrpFe9GC6i3JEqjmY7FSkw%2FQYZ%2BmzEqVNMkVAm%2BjArAUP2rXBQkA7YWoDygjmVNXzBDHgAslbFewNBgx4zNZ%2BPdEPLTpjE08pQhtpjY%2BuHLAmOhwUVWp%2BPjfF8ojami%2F04MAzgNgAWPLKGYI1Cq7ABY6phZ%2FIJs8SH5H9y0uuB&X-Amz-Signature=e4612a3a3af4c50a6ff4a2b440fdf7ae18dcc179013c38bc6d676ed954416718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RO5LV45%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBEl5Z1Hi69%2FYHMeUbMGuWSt1%2FVblPXwoieaLklf3RHxAiA7wcQm3mpx2dT8UatdbQG0Bp3ZRyTdCFoxLnRd4nxM8Sr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMrvv9pk7phC6fiRY4KtwDVjjt6MFBS%2FJY787pMaJYnzGUoBq3VUQCdLUMKJ%2B0I8d65GaJwhYMf39Si8pgiCndKugREb8uJKTpPH%2F65JVNj69jG0haEUHM1m4v%2FgNeHMCUOZQ32o5nTFTnu31HC9308O73CN1ds6cZ7A6gm0h%2BbckeoYLLv2sRHd0nsTSx%2BCRA6N1GTKBYsAG3wh0O38KkEiJJFk%2F89wU%2B8HQHgvBf3e6rN26vWfDwjlj2xhtQGS6PXm6867rZk49GIxXt8ebc%2B%2BP4di6blGuEIWSp1Y3ETWffm%2BEgqW1aSWH%2FViqe7rrEfkZBNWVEawxZgAO%2F%2FMVCT2WFS5oFZ%2FwQJN%2Fn7cz3D2DsxQVEZWABMfZBy7kx86ItAULF96opGhJKpK2hrSpmCxCW7KxyrmNTtZL1tHdsBmST6xD0Tq5lCtsLyahtDrr4M%2FTD4kM3mPsgkotx2x8QSPS0GJlbZvZcV%2FsGV0ajqzf8pgnHDpCQm4zT5kaj5B%2FX2OIm%2FcOgxNx0XVvATEuBE%2FUlJP58SGHhtofT4WxEU2fy4lrXQOupZ04JlxqXtoGckk5GcnNNeus0CzdYNrxbRqS0QndWwsBZD0tkfe4mxha6IKjxK%2BJAfb3GbqNslnpMqGSI8t71THel5%2BwwtKbCxAY6pgHQIUz2ujyIIcrN8Y3Ch5qgQJkNjALl%2FT221kjcNKX2yG42pZAOdjsrpFe9GC6i3JEqjmY7FSkw%2FQYZ%2BmzEqVNMkVAm%2BjArAUP2rXBQkA7YWoDygjmVNXzBDHgAslbFewNBgx4zNZ%2BPdEPLTpjE08pQhtpjY%2BuHLAmOhwUVWp%2BPjfF8ojami%2F04MAzgNgAWPLKGYI1Cq7ABY6phZ%2FIJs8SH5H9y0uuB&X-Amz-Signature=5416ba796c43e36baad094a564fff3543bbcff0c456ed535d6e6f96a58b3a117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RO5LV45%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBEl5Z1Hi69%2FYHMeUbMGuWSt1%2FVblPXwoieaLklf3RHxAiA7wcQm3mpx2dT8UatdbQG0Bp3ZRyTdCFoxLnRd4nxM8Sr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMrvv9pk7phC6fiRY4KtwDVjjt6MFBS%2FJY787pMaJYnzGUoBq3VUQCdLUMKJ%2B0I8d65GaJwhYMf39Si8pgiCndKugREb8uJKTpPH%2F65JVNj69jG0haEUHM1m4v%2FgNeHMCUOZQ32o5nTFTnu31HC9308O73CN1ds6cZ7A6gm0h%2BbckeoYLLv2sRHd0nsTSx%2BCRA6N1GTKBYsAG3wh0O38KkEiJJFk%2F89wU%2B8HQHgvBf3e6rN26vWfDwjlj2xhtQGS6PXm6867rZk49GIxXt8ebc%2B%2BP4di6blGuEIWSp1Y3ETWffm%2BEgqW1aSWH%2FViqe7rrEfkZBNWVEawxZgAO%2F%2FMVCT2WFS5oFZ%2FwQJN%2Fn7cz3D2DsxQVEZWABMfZBy7kx86ItAULF96opGhJKpK2hrSpmCxCW7KxyrmNTtZL1tHdsBmST6xD0Tq5lCtsLyahtDrr4M%2FTD4kM3mPsgkotx2x8QSPS0GJlbZvZcV%2FsGV0ajqzf8pgnHDpCQm4zT5kaj5B%2FX2OIm%2FcOgxNx0XVvATEuBE%2FUlJP58SGHhtofT4WxEU2fy4lrXQOupZ04JlxqXtoGckk5GcnNNeus0CzdYNrxbRqS0QndWwsBZD0tkfe4mxha6IKjxK%2BJAfb3GbqNslnpMqGSI8t71THel5%2BwwtKbCxAY6pgHQIUz2ujyIIcrN8Y3Ch5qgQJkNjALl%2FT221kjcNKX2yG42pZAOdjsrpFe9GC6i3JEqjmY7FSkw%2FQYZ%2BmzEqVNMkVAm%2BjArAUP2rXBQkA7YWoDygjmVNXzBDHgAslbFewNBgx4zNZ%2BPdEPLTpjE08pQhtpjY%2BuHLAmOhwUVWp%2BPjfF8ojami%2F04MAzgNgAWPLKGYI1Cq7ABY6phZ%2FIJs8SH5H9y0uuB&X-Amz-Signature=29a9975dcd9bee6fa741c1563d2e34236a252b8b9154789c2f66d299fcd6908a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RO5LV45%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBEl5Z1Hi69%2FYHMeUbMGuWSt1%2FVblPXwoieaLklf3RHxAiA7wcQm3mpx2dT8UatdbQG0Bp3ZRyTdCFoxLnRd4nxM8Sr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMrvv9pk7phC6fiRY4KtwDVjjt6MFBS%2FJY787pMaJYnzGUoBq3VUQCdLUMKJ%2B0I8d65GaJwhYMf39Si8pgiCndKugREb8uJKTpPH%2F65JVNj69jG0haEUHM1m4v%2FgNeHMCUOZQ32o5nTFTnu31HC9308O73CN1ds6cZ7A6gm0h%2BbckeoYLLv2sRHd0nsTSx%2BCRA6N1GTKBYsAG3wh0O38KkEiJJFk%2F89wU%2B8HQHgvBf3e6rN26vWfDwjlj2xhtQGS6PXm6867rZk49GIxXt8ebc%2B%2BP4di6blGuEIWSp1Y3ETWffm%2BEgqW1aSWH%2FViqe7rrEfkZBNWVEawxZgAO%2F%2FMVCT2WFS5oFZ%2FwQJN%2Fn7cz3D2DsxQVEZWABMfZBy7kx86ItAULF96opGhJKpK2hrSpmCxCW7KxyrmNTtZL1tHdsBmST6xD0Tq5lCtsLyahtDrr4M%2FTD4kM3mPsgkotx2x8QSPS0GJlbZvZcV%2FsGV0ajqzf8pgnHDpCQm4zT5kaj5B%2FX2OIm%2FcOgxNx0XVvATEuBE%2FUlJP58SGHhtofT4WxEU2fy4lrXQOupZ04JlxqXtoGckk5GcnNNeus0CzdYNrxbRqS0QndWwsBZD0tkfe4mxha6IKjxK%2BJAfb3GbqNslnpMqGSI8t71THel5%2BwwtKbCxAY6pgHQIUz2ujyIIcrN8Y3Ch5qgQJkNjALl%2FT221kjcNKX2yG42pZAOdjsrpFe9GC6i3JEqjmY7FSkw%2FQYZ%2BmzEqVNMkVAm%2BjArAUP2rXBQkA7YWoDygjmVNXzBDHgAslbFewNBgx4zNZ%2BPdEPLTpjE08pQhtpjY%2BuHLAmOhwUVWp%2BPjfF8ojami%2F04MAzgNgAWPLKGYI1Cq7ABY6phZ%2FIJs8SH5H9y0uuB&X-Amz-Signature=4c3b69f269469d1e82ac51c9ea15757337c1f4aafe15b6071f92bc0b3fcc2bc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
