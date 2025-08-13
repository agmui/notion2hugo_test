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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7TTUL4C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2l3KuIzJPCxLGHIavotQekvOgf4e0HWg9LZEyAyUPrAiEAhqqye1OKVQZ7F6lNCrSta%2Fsx1ez%2B9A9Xh9bUEXraPesq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIJHEv%2Fnj1AILalImyrcA2kljNkABsgvxhTt0sajNLIqMVCmikWDmEGqPTsywHSAome4gBSkxyhpU6xJMCbSoSEstu4icPqtM5lN%2BsqxBztnQYMhEsDoMSqVFa9ud8Vu%2FeNyWUcr18sc8Y%2FstoEZAJxa9VkNnvYezzWfWV0JT0oo8spg1SOhf7a9GHFWLFFvrOY8CO5xkWWDB1DMS%2Bsc7W6UkmIp7YC57rFefZPcjYIaUfqn2NG34cihhUq3kbGzPIDVjcJ0645ujiXhtGc2PXLgojoVORhklF7CLP7jWBdhIoG7HpfBbvEdKVD8ZyBIRX12TJgSMMufdF6oi46JJLPRpHCR4UGEqk0UqAKRdv1i8AU0jV7JA5adhUPhZ1qHh2aGKoRT%2FQ91px%2Flxdz0cKZU0ta8wdxaEq6BEDWbSxFmGtGVOaHeprpSGXDbo5jrBqMv3xfAuum3PUbELkeVTKVJOOEIfY7YBjQXCAOA3oYNQab6w9cc%2BpQuFvT5bqCEyWhoUM%2FqGNiVnijM71izUDSTC0x1QkK0e2iyiX4QtPNkW9H9uWRfiGJrLo71TWJVOc7wACVOsj%2Fc%2Fdejd3jngYa4mSunp88cMijpT2n%2FXWWgxw%2FhYwkK5az838SCePrkhucrN2KNxuvsADqjMOaG8MQGOqUBXCgzgVg9hqnuJEHNn%2BLiZBHdnMDYsJ9N0Y7yVsWKeqcodsTxSTII%2BlkiIl1fzd3zeaUO5V29up0%2FFaV5cd6lPKxrbZwEWYGKRw5IiW7cHJMABcshknQJrEL81ommO1GEaKMeqO6ug5c0yfNQkfgmae3VPdSCiniKVK1hKtf%2B2rUT%2Fy23R%2F2sa%2FHtzi27IPVIAiOMeZUL0X6pguTYm79OArIzk%2BQg&X-Amz-Signature=43367176d945a92d89e8d695a3ef29ef2374afff5cfadadab9080d46ea323a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7TTUL4C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2l3KuIzJPCxLGHIavotQekvOgf4e0HWg9LZEyAyUPrAiEAhqqye1OKVQZ7F6lNCrSta%2Fsx1ez%2B9A9Xh9bUEXraPesq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIJHEv%2Fnj1AILalImyrcA2kljNkABsgvxhTt0sajNLIqMVCmikWDmEGqPTsywHSAome4gBSkxyhpU6xJMCbSoSEstu4icPqtM5lN%2BsqxBztnQYMhEsDoMSqVFa9ud8Vu%2FeNyWUcr18sc8Y%2FstoEZAJxa9VkNnvYezzWfWV0JT0oo8spg1SOhf7a9GHFWLFFvrOY8CO5xkWWDB1DMS%2Bsc7W6UkmIp7YC57rFefZPcjYIaUfqn2NG34cihhUq3kbGzPIDVjcJ0645ujiXhtGc2PXLgojoVORhklF7CLP7jWBdhIoG7HpfBbvEdKVD8ZyBIRX12TJgSMMufdF6oi46JJLPRpHCR4UGEqk0UqAKRdv1i8AU0jV7JA5adhUPhZ1qHh2aGKoRT%2FQ91px%2Flxdz0cKZU0ta8wdxaEq6BEDWbSxFmGtGVOaHeprpSGXDbo5jrBqMv3xfAuum3PUbELkeVTKVJOOEIfY7YBjQXCAOA3oYNQab6w9cc%2BpQuFvT5bqCEyWhoUM%2FqGNiVnijM71izUDSTC0x1QkK0e2iyiX4QtPNkW9H9uWRfiGJrLo71TWJVOc7wACVOsj%2Fc%2Fdejd3jngYa4mSunp88cMijpT2n%2FXWWgxw%2FhYwkK5az838SCePrkhucrN2KNxuvsADqjMOaG8MQGOqUBXCgzgVg9hqnuJEHNn%2BLiZBHdnMDYsJ9N0Y7yVsWKeqcodsTxSTII%2BlkiIl1fzd3zeaUO5V29up0%2FFaV5cd6lPKxrbZwEWYGKRw5IiW7cHJMABcshknQJrEL81ommO1GEaKMeqO6ug5c0yfNQkfgmae3VPdSCiniKVK1hKtf%2B2rUT%2Fy23R%2F2sa%2FHtzi27IPVIAiOMeZUL0X6pguTYm79OArIzk%2BQg&X-Amz-Signature=240caeece561f758174622917d007f844d1dfcb51bd85d50dfe7a322134bda41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7TTUL4C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2l3KuIzJPCxLGHIavotQekvOgf4e0HWg9LZEyAyUPrAiEAhqqye1OKVQZ7F6lNCrSta%2Fsx1ez%2B9A9Xh9bUEXraPesq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIJHEv%2Fnj1AILalImyrcA2kljNkABsgvxhTt0sajNLIqMVCmikWDmEGqPTsywHSAome4gBSkxyhpU6xJMCbSoSEstu4icPqtM5lN%2BsqxBztnQYMhEsDoMSqVFa9ud8Vu%2FeNyWUcr18sc8Y%2FstoEZAJxa9VkNnvYezzWfWV0JT0oo8spg1SOhf7a9GHFWLFFvrOY8CO5xkWWDB1DMS%2Bsc7W6UkmIp7YC57rFefZPcjYIaUfqn2NG34cihhUq3kbGzPIDVjcJ0645ujiXhtGc2PXLgojoVORhklF7CLP7jWBdhIoG7HpfBbvEdKVD8ZyBIRX12TJgSMMufdF6oi46JJLPRpHCR4UGEqk0UqAKRdv1i8AU0jV7JA5adhUPhZ1qHh2aGKoRT%2FQ91px%2Flxdz0cKZU0ta8wdxaEq6BEDWbSxFmGtGVOaHeprpSGXDbo5jrBqMv3xfAuum3PUbELkeVTKVJOOEIfY7YBjQXCAOA3oYNQab6w9cc%2BpQuFvT5bqCEyWhoUM%2FqGNiVnijM71izUDSTC0x1QkK0e2iyiX4QtPNkW9H9uWRfiGJrLo71TWJVOc7wACVOsj%2Fc%2Fdejd3jngYa4mSunp88cMijpT2n%2FXWWgxw%2FhYwkK5az838SCePrkhucrN2KNxuvsADqjMOaG8MQGOqUBXCgzgVg9hqnuJEHNn%2BLiZBHdnMDYsJ9N0Y7yVsWKeqcodsTxSTII%2BlkiIl1fzd3zeaUO5V29up0%2FFaV5cd6lPKxrbZwEWYGKRw5IiW7cHJMABcshknQJrEL81ommO1GEaKMeqO6ug5c0yfNQkfgmae3VPdSCiniKVK1hKtf%2B2rUT%2Fy23R%2F2sa%2FHtzi27IPVIAiOMeZUL0X6pguTYm79OArIzk%2BQg&X-Amz-Signature=b0f9590bd0de2a330738c9cf2eb556a7054d3b75fc7c403a69b81bb3e93581f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7TTUL4C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2l3KuIzJPCxLGHIavotQekvOgf4e0HWg9LZEyAyUPrAiEAhqqye1OKVQZ7F6lNCrSta%2Fsx1ez%2B9A9Xh9bUEXraPesq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIJHEv%2Fnj1AILalImyrcA2kljNkABsgvxhTt0sajNLIqMVCmikWDmEGqPTsywHSAome4gBSkxyhpU6xJMCbSoSEstu4icPqtM5lN%2BsqxBztnQYMhEsDoMSqVFa9ud8Vu%2FeNyWUcr18sc8Y%2FstoEZAJxa9VkNnvYezzWfWV0JT0oo8spg1SOhf7a9GHFWLFFvrOY8CO5xkWWDB1DMS%2Bsc7W6UkmIp7YC57rFefZPcjYIaUfqn2NG34cihhUq3kbGzPIDVjcJ0645ujiXhtGc2PXLgojoVORhklF7CLP7jWBdhIoG7HpfBbvEdKVD8ZyBIRX12TJgSMMufdF6oi46JJLPRpHCR4UGEqk0UqAKRdv1i8AU0jV7JA5adhUPhZ1qHh2aGKoRT%2FQ91px%2Flxdz0cKZU0ta8wdxaEq6BEDWbSxFmGtGVOaHeprpSGXDbo5jrBqMv3xfAuum3PUbELkeVTKVJOOEIfY7YBjQXCAOA3oYNQab6w9cc%2BpQuFvT5bqCEyWhoUM%2FqGNiVnijM71izUDSTC0x1QkK0e2iyiX4QtPNkW9H9uWRfiGJrLo71TWJVOc7wACVOsj%2Fc%2Fdejd3jngYa4mSunp88cMijpT2n%2FXWWgxw%2FhYwkK5az838SCePrkhucrN2KNxuvsADqjMOaG8MQGOqUBXCgzgVg9hqnuJEHNn%2BLiZBHdnMDYsJ9N0Y7yVsWKeqcodsTxSTII%2BlkiIl1fzd3zeaUO5V29up0%2FFaV5cd6lPKxrbZwEWYGKRw5IiW7cHJMABcshknQJrEL81ommO1GEaKMeqO6ug5c0yfNQkfgmae3VPdSCiniKVK1hKtf%2B2rUT%2Fy23R%2F2sa%2FHtzi27IPVIAiOMeZUL0X6pguTYm79OArIzk%2BQg&X-Amz-Signature=8714a8fa6ec28ef19318e5885e03516eec95f8809b62e37b4629949145bf8871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7TTUL4C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2l3KuIzJPCxLGHIavotQekvOgf4e0HWg9LZEyAyUPrAiEAhqqye1OKVQZ7F6lNCrSta%2Fsx1ez%2B9A9Xh9bUEXraPesq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIJHEv%2Fnj1AILalImyrcA2kljNkABsgvxhTt0sajNLIqMVCmikWDmEGqPTsywHSAome4gBSkxyhpU6xJMCbSoSEstu4icPqtM5lN%2BsqxBztnQYMhEsDoMSqVFa9ud8Vu%2FeNyWUcr18sc8Y%2FstoEZAJxa9VkNnvYezzWfWV0JT0oo8spg1SOhf7a9GHFWLFFvrOY8CO5xkWWDB1DMS%2Bsc7W6UkmIp7YC57rFefZPcjYIaUfqn2NG34cihhUq3kbGzPIDVjcJ0645ujiXhtGc2PXLgojoVORhklF7CLP7jWBdhIoG7HpfBbvEdKVD8ZyBIRX12TJgSMMufdF6oi46JJLPRpHCR4UGEqk0UqAKRdv1i8AU0jV7JA5adhUPhZ1qHh2aGKoRT%2FQ91px%2Flxdz0cKZU0ta8wdxaEq6BEDWbSxFmGtGVOaHeprpSGXDbo5jrBqMv3xfAuum3PUbELkeVTKVJOOEIfY7YBjQXCAOA3oYNQab6w9cc%2BpQuFvT5bqCEyWhoUM%2FqGNiVnijM71izUDSTC0x1QkK0e2iyiX4QtPNkW9H9uWRfiGJrLo71TWJVOc7wACVOsj%2Fc%2Fdejd3jngYa4mSunp88cMijpT2n%2FXWWgxw%2FhYwkK5az838SCePrkhucrN2KNxuvsADqjMOaG8MQGOqUBXCgzgVg9hqnuJEHNn%2BLiZBHdnMDYsJ9N0Y7yVsWKeqcodsTxSTII%2BlkiIl1fzd3zeaUO5V29up0%2FFaV5cd6lPKxrbZwEWYGKRw5IiW7cHJMABcshknQJrEL81ommO1GEaKMeqO6ug5c0yfNQkfgmae3VPdSCiniKVK1hKtf%2B2rUT%2Fy23R%2F2sa%2FHtzi27IPVIAiOMeZUL0X6pguTYm79OArIzk%2BQg&X-Amz-Signature=f2b943fb403e7c02a1257aac2a6b1efad4cbf68822786bfda82a12e06ac9a6cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7TTUL4C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2l3KuIzJPCxLGHIavotQekvOgf4e0HWg9LZEyAyUPrAiEAhqqye1OKVQZ7F6lNCrSta%2Fsx1ez%2B9A9Xh9bUEXraPesq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIJHEv%2Fnj1AILalImyrcA2kljNkABsgvxhTt0sajNLIqMVCmikWDmEGqPTsywHSAome4gBSkxyhpU6xJMCbSoSEstu4icPqtM5lN%2BsqxBztnQYMhEsDoMSqVFa9ud8Vu%2FeNyWUcr18sc8Y%2FstoEZAJxa9VkNnvYezzWfWV0JT0oo8spg1SOhf7a9GHFWLFFvrOY8CO5xkWWDB1DMS%2Bsc7W6UkmIp7YC57rFefZPcjYIaUfqn2NG34cihhUq3kbGzPIDVjcJ0645ujiXhtGc2PXLgojoVORhklF7CLP7jWBdhIoG7HpfBbvEdKVD8ZyBIRX12TJgSMMufdF6oi46JJLPRpHCR4UGEqk0UqAKRdv1i8AU0jV7JA5adhUPhZ1qHh2aGKoRT%2FQ91px%2Flxdz0cKZU0ta8wdxaEq6BEDWbSxFmGtGVOaHeprpSGXDbo5jrBqMv3xfAuum3PUbELkeVTKVJOOEIfY7YBjQXCAOA3oYNQab6w9cc%2BpQuFvT5bqCEyWhoUM%2FqGNiVnijM71izUDSTC0x1QkK0e2iyiX4QtPNkW9H9uWRfiGJrLo71TWJVOc7wACVOsj%2Fc%2Fdejd3jngYa4mSunp88cMijpT2n%2FXWWgxw%2FhYwkK5az838SCePrkhucrN2KNxuvsADqjMOaG8MQGOqUBXCgzgVg9hqnuJEHNn%2BLiZBHdnMDYsJ9N0Y7yVsWKeqcodsTxSTII%2BlkiIl1fzd3zeaUO5V29up0%2FFaV5cd6lPKxrbZwEWYGKRw5IiW7cHJMABcshknQJrEL81ommO1GEaKMeqO6ug5c0yfNQkfgmae3VPdSCiniKVK1hKtf%2B2rUT%2Fy23R%2F2sa%2FHtzi27IPVIAiOMeZUL0X6pguTYm79OArIzk%2BQg&X-Amz-Signature=1322c984464c994a8f0b7ee85fa545f5b8dfba18ee1b1cd8049536283badd840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7TTUL4C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2l3KuIzJPCxLGHIavotQekvOgf4e0HWg9LZEyAyUPrAiEAhqqye1OKVQZ7F6lNCrSta%2Fsx1ez%2B9A9Xh9bUEXraPesq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIJHEv%2Fnj1AILalImyrcA2kljNkABsgvxhTt0sajNLIqMVCmikWDmEGqPTsywHSAome4gBSkxyhpU6xJMCbSoSEstu4icPqtM5lN%2BsqxBztnQYMhEsDoMSqVFa9ud8Vu%2FeNyWUcr18sc8Y%2FstoEZAJxa9VkNnvYezzWfWV0JT0oo8spg1SOhf7a9GHFWLFFvrOY8CO5xkWWDB1DMS%2Bsc7W6UkmIp7YC57rFefZPcjYIaUfqn2NG34cihhUq3kbGzPIDVjcJ0645ujiXhtGc2PXLgojoVORhklF7CLP7jWBdhIoG7HpfBbvEdKVD8ZyBIRX12TJgSMMufdF6oi46JJLPRpHCR4UGEqk0UqAKRdv1i8AU0jV7JA5adhUPhZ1qHh2aGKoRT%2FQ91px%2Flxdz0cKZU0ta8wdxaEq6BEDWbSxFmGtGVOaHeprpSGXDbo5jrBqMv3xfAuum3PUbELkeVTKVJOOEIfY7YBjQXCAOA3oYNQab6w9cc%2BpQuFvT5bqCEyWhoUM%2FqGNiVnijM71izUDSTC0x1QkK0e2iyiX4QtPNkW9H9uWRfiGJrLo71TWJVOc7wACVOsj%2Fc%2Fdejd3jngYa4mSunp88cMijpT2n%2FXWWgxw%2FhYwkK5az838SCePrkhucrN2KNxuvsADqjMOaG8MQGOqUBXCgzgVg9hqnuJEHNn%2BLiZBHdnMDYsJ9N0Y7yVsWKeqcodsTxSTII%2BlkiIl1fzd3zeaUO5V29up0%2FFaV5cd6lPKxrbZwEWYGKRw5IiW7cHJMABcshknQJrEL81ommO1GEaKMeqO6ug5c0yfNQkfgmae3VPdSCiniKVK1hKtf%2B2rUT%2Fy23R%2F2sa%2FHtzi27IPVIAiOMeZUL0X6pguTYm79OArIzk%2BQg&X-Amz-Signature=383b5ba47fe3c7890393833d34e0b80344791de0e5222d347c4daf0bd85ff12e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7TTUL4C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2l3KuIzJPCxLGHIavotQekvOgf4e0HWg9LZEyAyUPrAiEAhqqye1OKVQZ7F6lNCrSta%2Fsx1ez%2B9A9Xh9bUEXraPesq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIJHEv%2Fnj1AILalImyrcA2kljNkABsgvxhTt0sajNLIqMVCmikWDmEGqPTsywHSAome4gBSkxyhpU6xJMCbSoSEstu4icPqtM5lN%2BsqxBztnQYMhEsDoMSqVFa9ud8Vu%2FeNyWUcr18sc8Y%2FstoEZAJxa9VkNnvYezzWfWV0JT0oo8spg1SOhf7a9GHFWLFFvrOY8CO5xkWWDB1DMS%2Bsc7W6UkmIp7YC57rFefZPcjYIaUfqn2NG34cihhUq3kbGzPIDVjcJ0645ujiXhtGc2PXLgojoVORhklF7CLP7jWBdhIoG7HpfBbvEdKVD8ZyBIRX12TJgSMMufdF6oi46JJLPRpHCR4UGEqk0UqAKRdv1i8AU0jV7JA5adhUPhZ1qHh2aGKoRT%2FQ91px%2Flxdz0cKZU0ta8wdxaEq6BEDWbSxFmGtGVOaHeprpSGXDbo5jrBqMv3xfAuum3PUbELkeVTKVJOOEIfY7YBjQXCAOA3oYNQab6w9cc%2BpQuFvT5bqCEyWhoUM%2FqGNiVnijM71izUDSTC0x1QkK0e2iyiX4QtPNkW9H9uWRfiGJrLo71TWJVOc7wACVOsj%2Fc%2Fdejd3jngYa4mSunp88cMijpT2n%2FXWWgxw%2FhYwkK5az838SCePrkhucrN2KNxuvsADqjMOaG8MQGOqUBXCgzgVg9hqnuJEHNn%2BLiZBHdnMDYsJ9N0Y7yVsWKeqcodsTxSTII%2BlkiIl1fzd3zeaUO5V29up0%2FFaV5cd6lPKxrbZwEWYGKRw5IiW7cHJMABcshknQJrEL81ommO1GEaKMeqO6ug5c0yfNQkfgmae3VPdSCiniKVK1hKtf%2B2rUT%2Fy23R%2F2sa%2FHtzi27IPVIAiOMeZUL0X6pguTYm79OArIzk%2BQg&X-Amz-Signature=03c8c6d763a8677a493d09a16741c150356f980b5a3b54740edad3e3de4ddd63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
