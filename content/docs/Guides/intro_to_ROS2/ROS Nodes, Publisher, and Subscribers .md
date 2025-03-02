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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGUOKZZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIA1rgph2AceR9feuJWuU1WgT2VgQ0OC9nPs%2BBt08aCZLAiEA3CVYfgkCZPoFL4qU%2FvRtXXUxYiBmUHQylxrsEOTAYxoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArSqHbvUk%2BeSh82uSrcA6O8Ez1vE%2BykxPxMn8kV98EQDpn5QvU%2B5He33RSIUx1TpBgfqmgzjnDm6ei4%2FyCwDAQzrdiWHbZa5CUd0u5b0PIZM1RYkrhFmJ6O1Of0lNWegcD%2FrfmJlg4HHcJjN%2BClt2uXFeoug1pWdP3%2Fvyn2KaGuJn8HlBCHPpwbU4t2kuDHhe2WKALuz6y%2FU0XFPZyK1lSTBmTgnllJNHNVu%2FySk8PGzj5vjuSYYAGzrofhHVEGO%2FmscbdTpGaMlBmLsi4eyJDQqnXinfe7u4odig4gtPExLpiNKKXuKaQZF%2F7l3foGjRgFywCJIxempsSDF4HXPlhhsc9fF57CqIeQLy8AbU8vrIGvg5sKf%2BBpySyGuy4xaAQKdlkSaIqJXFInzalN0Jc54LJmXiyZ8eX8Tx9tj%2B7NRrrzOJ6h5j58BAN%2BtDVyIgK5mAf0BcTxER6GnPLv1KeRL0Clfe%2FcZxY8z2kxGzGuLhW5GXLLbBD9ucxrhYrN9cqDN7xzZjR7lDLBkkh%2BSsFDnZD6x3JjqdayswMCn1O%2FSlNl7FnrBChlj6dKNIJJA4DnDaChs174RuzGQQS%2FkP1e7aAAhu%2BmK9DzYDM7TGRZp1PERq1wUu1MLhzRHU8yju37P9tvm%2FNFu6lzMKP2jr4GOqUB%2Fx1usFX3eMiWJPH%2Fk8udSoHmJlZsdCB131vffBIZe4fZzMfiddsJ4JpAaLpWqsNLPbkz7J92bUNcxoHbSOWa25MHWWJqMxphBYDEpLmpUC3Kfh2VdxbqAN6yr1mImp2aYePTzcNaoBSICYWowZJHSmxDPlMUuhijwch7Kx715l2I8kH1RgbBkN8cBzWcrETpWLTNbJa93KhHxmqzf9B%2Boe%2BgBcRg&X-Amz-Signature=58a65df175fa7219d916cfcf184b518ac3c78d0231a4cbf1058f94848485b5c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGUOKZZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIA1rgph2AceR9feuJWuU1WgT2VgQ0OC9nPs%2BBt08aCZLAiEA3CVYfgkCZPoFL4qU%2FvRtXXUxYiBmUHQylxrsEOTAYxoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArSqHbvUk%2BeSh82uSrcA6O8Ez1vE%2BykxPxMn8kV98EQDpn5QvU%2B5He33RSIUx1TpBgfqmgzjnDm6ei4%2FyCwDAQzrdiWHbZa5CUd0u5b0PIZM1RYkrhFmJ6O1Of0lNWegcD%2FrfmJlg4HHcJjN%2BClt2uXFeoug1pWdP3%2Fvyn2KaGuJn8HlBCHPpwbU4t2kuDHhe2WKALuz6y%2FU0XFPZyK1lSTBmTgnllJNHNVu%2FySk8PGzj5vjuSYYAGzrofhHVEGO%2FmscbdTpGaMlBmLsi4eyJDQqnXinfe7u4odig4gtPExLpiNKKXuKaQZF%2F7l3foGjRgFywCJIxempsSDF4HXPlhhsc9fF57CqIeQLy8AbU8vrIGvg5sKf%2BBpySyGuy4xaAQKdlkSaIqJXFInzalN0Jc54LJmXiyZ8eX8Tx9tj%2B7NRrrzOJ6h5j58BAN%2BtDVyIgK5mAf0BcTxER6GnPLv1KeRL0Clfe%2FcZxY8z2kxGzGuLhW5GXLLbBD9ucxrhYrN9cqDN7xzZjR7lDLBkkh%2BSsFDnZD6x3JjqdayswMCn1O%2FSlNl7FnrBChlj6dKNIJJA4DnDaChs174RuzGQQS%2FkP1e7aAAhu%2BmK9DzYDM7TGRZp1PERq1wUu1MLhzRHU8yju37P9tvm%2FNFu6lzMKP2jr4GOqUB%2Fx1usFX3eMiWJPH%2Fk8udSoHmJlZsdCB131vffBIZe4fZzMfiddsJ4JpAaLpWqsNLPbkz7J92bUNcxoHbSOWa25MHWWJqMxphBYDEpLmpUC3Kfh2VdxbqAN6yr1mImp2aYePTzcNaoBSICYWowZJHSmxDPlMUuhijwch7Kx715l2I8kH1RgbBkN8cBzWcrETpWLTNbJa93KhHxmqzf9B%2Boe%2BgBcRg&X-Amz-Signature=ca163c1e9f6e909fe289ae051b1caeff534cd7c57359267e492a6a7bc7a8d469&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGUOKZZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIA1rgph2AceR9feuJWuU1WgT2VgQ0OC9nPs%2BBt08aCZLAiEA3CVYfgkCZPoFL4qU%2FvRtXXUxYiBmUHQylxrsEOTAYxoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArSqHbvUk%2BeSh82uSrcA6O8Ez1vE%2BykxPxMn8kV98EQDpn5QvU%2B5He33RSIUx1TpBgfqmgzjnDm6ei4%2FyCwDAQzrdiWHbZa5CUd0u5b0PIZM1RYkrhFmJ6O1Of0lNWegcD%2FrfmJlg4HHcJjN%2BClt2uXFeoug1pWdP3%2Fvyn2KaGuJn8HlBCHPpwbU4t2kuDHhe2WKALuz6y%2FU0XFPZyK1lSTBmTgnllJNHNVu%2FySk8PGzj5vjuSYYAGzrofhHVEGO%2FmscbdTpGaMlBmLsi4eyJDQqnXinfe7u4odig4gtPExLpiNKKXuKaQZF%2F7l3foGjRgFywCJIxempsSDF4HXPlhhsc9fF57CqIeQLy8AbU8vrIGvg5sKf%2BBpySyGuy4xaAQKdlkSaIqJXFInzalN0Jc54LJmXiyZ8eX8Tx9tj%2B7NRrrzOJ6h5j58BAN%2BtDVyIgK5mAf0BcTxER6GnPLv1KeRL0Clfe%2FcZxY8z2kxGzGuLhW5GXLLbBD9ucxrhYrN9cqDN7xzZjR7lDLBkkh%2BSsFDnZD6x3JjqdayswMCn1O%2FSlNl7FnrBChlj6dKNIJJA4DnDaChs174RuzGQQS%2FkP1e7aAAhu%2BmK9DzYDM7TGRZp1PERq1wUu1MLhzRHU8yju37P9tvm%2FNFu6lzMKP2jr4GOqUB%2Fx1usFX3eMiWJPH%2Fk8udSoHmJlZsdCB131vffBIZe4fZzMfiddsJ4JpAaLpWqsNLPbkz7J92bUNcxoHbSOWa25MHWWJqMxphBYDEpLmpUC3Kfh2VdxbqAN6yr1mImp2aYePTzcNaoBSICYWowZJHSmxDPlMUuhijwch7Kx715l2I8kH1RgbBkN8cBzWcrETpWLTNbJa93KhHxmqzf9B%2Boe%2BgBcRg&X-Amz-Signature=90e8fd8af7310c75fc79c5098035328287806a575887c64b7d1297616f207a5a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGUOKZZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIA1rgph2AceR9feuJWuU1WgT2VgQ0OC9nPs%2BBt08aCZLAiEA3CVYfgkCZPoFL4qU%2FvRtXXUxYiBmUHQylxrsEOTAYxoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArSqHbvUk%2BeSh82uSrcA6O8Ez1vE%2BykxPxMn8kV98EQDpn5QvU%2B5He33RSIUx1TpBgfqmgzjnDm6ei4%2FyCwDAQzrdiWHbZa5CUd0u5b0PIZM1RYkrhFmJ6O1Of0lNWegcD%2FrfmJlg4HHcJjN%2BClt2uXFeoug1pWdP3%2Fvyn2KaGuJn8HlBCHPpwbU4t2kuDHhe2WKALuz6y%2FU0XFPZyK1lSTBmTgnllJNHNVu%2FySk8PGzj5vjuSYYAGzrofhHVEGO%2FmscbdTpGaMlBmLsi4eyJDQqnXinfe7u4odig4gtPExLpiNKKXuKaQZF%2F7l3foGjRgFywCJIxempsSDF4HXPlhhsc9fF57CqIeQLy8AbU8vrIGvg5sKf%2BBpySyGuy4xaAQKdlkSaIqJXFInzalN0Jc54LJmXiyZ8eX8Tx9tj%2B7NRrrzOJ6h5j58BAN%2BtDVyIgK5mAf0BcTxER6GnPLv1KeRL0Clfe%2FcZxY8z2kxGzGuLhW5GXLLbBD9ucxrhYrN9cqDN7xzZjR7lDLBkkh%2BSsFDnZD6x3JjqdayswMCn1O%2FSlNl7FnrBChlj6dKNIJJA4DnDaChs174RuzGQQS%2FkP1e7aAAhu%2BmK9DzYDM7TGRZp1PERq1wUu1MLhzRHU8yju37P9tvm%2FNFu6lzMKP2jr4GOqUB%2Fx1usFX3eMiWJPH%2Fk8udSoHmJlZsdCB131vffBIZe4fZzMfiddsJ4JpAaLpWqsNLPbkz7J92bUNcxoHbSOWa25MHWWJqMxphBYDEpLmpUC3Kfh2VdxbqAN6yr1mImp2aYePTzcNaoBSICYWowZJHSmxDPlMUuhijwch7Kx715l2I8kH1RgbBkN8cBzWcrETpWLTNbJa93KhHxmqzf9B%2Boe%2BgBcRg&X-Amz-Signature=548157cd8053f5337eb679bec251e39f2baa5c24ab475a6891c576f51329f568&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGUOKZZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIA1rgph2AceR9feuJWuU1WgT2VgQ0OC9nPs%2BBt08aCZLAiEA3CVYfgkCZPoFL4qU%2FvRtXXUxYiBmUHQylxrsEOTAYxoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArSqHbvUk%2BeSh82uSrcA6O8Ez1vE%2BykxPxMn8kV98EQDpn5QvU%2B5He33RSIUx1TpBgfqmgzjnDm6ei4%2FyCwDAQzrdiWHbZa5CUd0u5b0PIZM1RYkrhFmJ6O1Of0lNWegcD%2FrfmJlg4HHcJjN%2BClt2uXFeoug1pWdP3%2Fvyn2KaGuJn8HlBCHPpwbU4t2kuDHhe2WKALuz6y%2FU0XFPZyK1lSTBmTgnllJNHNVu%2FySk8PGzj5vjuSYYAGzrofhHVEGO%2FmscbdTpGaMlBmLsi4eyJDQqnXinfe7u4odig4gtPExLpiNKKXuKaQZF%2F7l3foGjRgFywCJIxempsSDF4HXPlhhsc9fF57CqIeQLy8AbU8vrIGvg5sKf%2BBpySyGuy4xaAQKdlkSaIqJXFInzalN0Jc54LJmXiyZ8eX8Tx9tj%2B7NRrrzOJ6h5j58BAN%2BtDVyIgK5mAf0BcTxER6GnPLv1KeRL0Clfe%2FcZxY8z2kxGzGuLhW5GXLLbBD9ucxrhYrN9cqDN7xzZjR7lDLBkkh%2BSsFDnZD6x3JjqdayswMCn1O%2FSlNl7FnrBChlj6dKNIJJA4DnDaChs174RuzGQQS%2FkP1e7aAAhu%2BmK9DzYDM7TGRZp1PERq1wUu1MLhzRHU8yju37P9tvm%2FNFu6lzMKP2jr4GOqUB%2Fx1usFX3eMiWJPH%2Fk8udSoHmJlZsdCB131vffBIZe4fZzMfiddsJ4JpAaLpWqsNLPbkz7J92bUNcxoHbSOWa25MHWWJqMxphBYDEpLmpUC3Kfh2VdxbqAN6yr1mImp2aYePTzcNaoBSICYWowZJHSmxDPlMUuhijwch7Kx715l2I8kH1RgbBkN8cBzWcrETpWLTNbJa93KhHxmqzf9B%2Boe%2BgBcRg&X-Amz-Signature=f490d3b2e439d69c9cfaab3be7c127b8c05432ac9be1938794eb5a3c0752f4e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGUOKZZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIA1rgph2AceR9feuJWuU1WgT2VgQ0OC9nPs%2BBt08aCZLAiEA3CVYfgkCZPoFL4qU%2FvRtXXUxYiBmUHQylxrsEOTAYxoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArSqHbvUk%2BeSh82uSrcA6O8Ez1vE%2BykxPxMn8kV98EQDpn5QvU%2B5He33RSIUx1TpBgfqmgzjnDm6ei4%2FyCwDAQzrdiWHbZa5CUd0u5b0PIZM1RYkrhFmJ6O1Of0lNWegcD%2FrfmJlg4HHcJjN%2BClt2uXFeoug1pWdP3%2Fvyn2KaGuJn8HlBCHPpwbU4t2kuDHhe2WKALuz6y%2FU0XFPZyK1lSTBmTgnllJNHNVu%2FySk8PGzj5vjuSYYAGzrofhHVEGO%2FmscbdTpGaMlBmLsi4eyJDQqnXinfe7u4odig4gtPExLpiNKKXuKaQZF%2F7l3foGjRgFywCJIxempsSDF4HXPlhhsc9fF57CqIeQLy8AbU8vrIGvg5sKf%2BBpySyGuy4xaAQKdlkSaIqJXFInzalN0Jc54LJmXiyZ8eX8Tx9tj%2B7NRrrzOJ6h5j58BAN%2BtDVyIgK5mAf0BcTxER6GnPLv1KeRL0Clfe%2FcZxY8z2kxGzGuLhW5GXLLbBD9ucxrhYrN9cqDN7xzZjR7lDLBkkh%2BSsFDnZD6x3JjqdayswMCn1O%2FSlNl7FnrBChlj6dKNIJJA4DnDaChs174RuzGQQS%2FkP1e7aAAhu%2BmK9DzYDM7TGRZp1PERq1wUu1MLhzRHU8yju37P9tvm%2FNFu6lzMKP2jr4GOqUB%2Fx1usFX3eMiWJPH%2Fk8udSoHmJlZsdCB131vffBIZe4fZzMfiddsJ4JpAaLpWqsNLPbkz7J92bUNcxoHbSOWa25MHWWJqMxphBYDEpLmpUC3Kfh2VdxbqAN6yr1mImp2aYePTzcNaoBSICYWowZJHSmxDPlMUuhijwch7Kx715l2I8kH1RgbBkN8cBzWcrETpWLTNbJa93KhHxmqzf9B%2Boe%2BgBcRg&X-Amz-Signature=fdfa4cbd05bc1aa288d0cf80a8ca7c3c617d7b5e5d738afe14798b14d10f8433&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGUOKZZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIA1rgph2AceR9feuJWuU1WgT2VgQ0OC9nPs%2BBt08aCZLAiEA3CVYfgkCZPoFL4qU%2FvRtXXUxYiBmUHQylxrsEOTAYxoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArSqHbvUk%2BeSh82uSrcA6O8Ez1vE%2BykxPxMn8kV98EQDpn5QvU%2B5He33RSIUx1TpBgfqmgzjnDm6ei4%2FyCwDAQzrdiWHbZa5CUd0u5b0PIZM1RYkrhFmJ6O1Of0lNWegcD%2FrfmJlg4HHcJjN%2BClt2uXFeoug1pWdP3%2Fvyn2KaGuJn8HlBCHPpwbU4t2kuDHhe2WKALuz6y%2FU0XFPZyK1lSTBmTgnllJNHNVu%2FySk8PGzj5vjuSYYAGzrofhHVEGO%2FmscbdTpGaMlBmLsi4eyJDQqnXinfe7u4odig4gtPExLpiNKKXuKaQZF%2F7l3foGjRgFywCJIxempsSDF4HXPlhhsc9fF57CqIeQLy8AbU8vrIGvg5sKf%2BBpySyGuy4xaAQKdlkSaIqJXFInzalN0Jc54LJmXiyZ8eX8Tx9tj%2B7NRrrzOJ6h5j58BAN%2BtDVyIgK5mAf0BcTxER6GnPLv1KeRL0Clfe%2FcZxY8z2kxGzGuLhW5GXLLbBD9ucxrhYrN9cqDN7xzZjR7lDLBkkh%2BSsFDnZD6x3JjqdayswMCn1O%2FSlNl7FnrBChlj6dKNIJJA4DnDaChs174RuzGQQS%2FkP1e7aAAhu%2BmK9DzYDM7TGRZp1PERq1wUu1MLhzRHU8yju37P9tvm%2FNFu6lzMKP2jr4GOqUB%2Fx1usFX3eMiWJPH%2Fk8udSoHmJlZsdCB131vffBIZe4fZzMfiddsJ4JpAaLpWqsNLPbkz7J92bUNcxoHbSOWa25MHWWJqMxphBYDEpLmpUC3Kfh2VdxbqAN6yr1mImp2aYePTzcNaoBSICYWowZJHSmxDPlMUuhijwch7Kx715l2I8kH1RgbBkN8cBzWcrETpWLTNbJa93KhHxmqzf9B%2Boe%2BgBcRg&X-Amz-Signature=969e955bc9fb285e454f0541d7da0320fe5d3dbd12c8f5064b48d07d7f66e94f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGUOKZZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIA1rgph2AceR9feuJWuU1WgT2VgQ0OC9nPs%2BBt08aCZLAiEA3CVYfgkCZPoFL4qU%2FvRtXXUxYiBmUHQylxrsEOTAYxoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArSqHbvUk%2BeSh82uSrcA6O8Ez1vE%2BykxPxMn8kV98EQDpn5QvU%2B5He33RSIUx1TpBgfqmgzjnDm6ei4%2FyCwDAQzrdiWHbZa5CUd0u5b0PIZM1RYkrhFmJ6O1Of0lNWegcD%2FrfmJlg4HHcJjN%2BClt2uXFeoug1pWdP3%2Fvyn2KaGuJn8HlBCHPpwbU4t2kuDHhe2WKALuz6y%2FU0XFPZyK1lSTBmTgnllJNHNVu%2FySk8PGzj5vjuSYYAGzrofhHVEGO%2FmscbdTpGaMlBmLsi4eyJDQqnXinfe7u4odig4gtPExLpiNKKXuKaQZF%2F7l3foGjRgFywCJIxempsSDF4HXPlhhsc9fF57CqIeQLy8AbU8vrIGvg5sKf%2BBpySyGuy4xaAQKdlkSaIqJXFInzalN0Jc54LJmXiyZ8eX8Tx9tj%2B7NRrrzOJ6h5j58BAN%2BtDVyIgK5mAf0BcTxER6GnPLv1KeRL0Clfe%2FcZxY8z2kxGzGuLhW5GXLLbBD9ucxrhYrN9cqDN7xzZjR7lDLBkkh%2BSsFDnZD6x3JjqdayswMCn1O%2FSlNl7FnrBChlj6dKNIJJA4DnDaChs174RuzGQQS%2FkP1e7aAAhu%2BmK9DzYDM7TGRZp1PERq1wUu1MLhzRHU8yju37P9tvm%2FNFu6lzMKP2jr4GOqUB%2Fx1usFX3eMiWJPH%2Fk8udSoHmJlZsdCB131vffBIZe4fZzMfiddsJ4JpAaLpWqsNLPbkz7J92bUNcxoHbSOWa25MHWWJqMxphBYDEpLmpUC3Kfh2VdxbqAN6yr1mImp2aYePTzcNaoBSICYWowZJHSmxDPlMUuhijwch7Kx715l2I8kH1RgbBkN8cBzWcrETpWLTNbJa93KhHxmqzf9B%2Boe%2BgBcRg&X-Amz-Signature=2392a016514a64f40a1b8dcca5903150c64add18a21ddb7ffdaa1975f00352ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
