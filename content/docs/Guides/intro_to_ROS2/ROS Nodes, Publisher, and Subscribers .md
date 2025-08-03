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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LCAF2T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Btdm0A0yjG6xmwv2ti6xOSCmDxxKlg%2FNnDK54Cv0YyQIhALtauQQ%2F5aN4yibY5relckTDKqtta36GMGJKCk6ypc53Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxUSlo8nUnrFvOvtMoq3AN0%2B5T49s0k7EdW0g4CsBrkBnKO8BE%2F1mpl8DeA%2BP1zssVtuSOayx%2FDpc3itvnKfbDiwHjglUu6fB2nXrL3Ual%2F0Y8svA%2F5rEYYiqBf8usqXcxBy8aPGiTrbH3AuN1cGwxpppdZFLYTJb7473qYIRwQQEent2fsxE%2F2S5HuHQoCRHkAS%2Fi1GRsze%2Fnb8Rrl5s%2B1VVwFS%2BUXTKZtz2LrcqNqfwsPFv5W9jJByhAVizGeJ4cbfgf67QEcDmWHtmwfJwq59Vysls8BiKYrnw1HXGmIbEpiV7Gy%2F%2Bey%2BMx%2BIn0ehkJL3t5KhPu3KI%2B%2BXgtLnVlhW7JAf4io3bbnvH7sxUerCosK1Lgybieqymy%2BR9swmKOJVkBlF74RCDoKhCOqEcKizign4Xik%2FQCfCbkI3TBuT9Jt6fPBuqR0ZDsK1Anny%2FsQxvyu0FS78s8VABURN%2BX832Wfg8uLfDepHO%2BDUdTJ8vZVi3Txq8SVPAhe1YBTYJe0kDUF25UD4EL8NVr8somfVZtrcELMR9SQ%2FQ3v6%2Fo9pDgowUreE72tVm0C2sc1E1kLgFQUUTp7VwwVa5BfsZ7Bc16cMsza55h%2BdFubNkTb1RUDqX0aJeqcarUjypivr096PPK7GOxuJXTGVjDuqr7EBjqkATEKQ%2FNSio%2FP9Rc12U%2FUEPEPRX%2BM1wzsaZshuut3c7%2FTsm6pZl6%2FF8c1KfvYwEqU%2BRADbViGypDjwTVX2uF0%2BBJnFqqUcE93jYXV%2FZlgVNad1UWypTkum8WPYWxYn5iJV%2BDwT92nXZvT9MU3blnhV%2BrHss8O7y8juA%2BPPnpfNe9FGziN3nkHx7tuT6s6CHm6cRZE9i0QmL1zXXNYCgJduMe9QaNn&X-Amz-Signature=25129a339793604818190d432a7e58f292959ad3f8c964e433877772a9c8cc53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LCAF2T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Btdm0A0yjG6xmwv2ti6xOSCmDxxKlg%2FNnDK54Cv0YyQIhALtauQQ%2F5aN4yibY5relckTDKqtta36GMGJKCk6ypc53Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxUSlo8nUnrFvOvtMoq3AN0%2B5T49s0k7EdW0g4CsBrkBnKO8BE%2F1mpl8DeA%2BP1zssVtuSOayx%2FDpc3itvnKfbDiwHjglUu6fB2nXrL3Ual%2F0Y8svA%2F5rEYYiqBf8usqXcxBy8aPGiTrbH3AuN1cGwxpppdZFLYTJb7473qYIRwQQEent2fsxE%2F2S5HuHQoCRHkAS%2Fi1GRsze%2Fnb8Rrl5s%2B1VVwFS%2BUXTKZtz2LrcqNqfwsPFv5W9jJByhAVizGeJ4cbfgf67QEcDmWHtmwfJwq59Vysls8BiKYrnw1HXGmIbEpiV7Gy%2F%2Bey%2BMx%2BIn0ehkJL3t5KhPu3KI%2B%2BXgtLnVlhW7JAf4io3bbnvH7sxUerCosK1Lgybieqymy%2BR9swmKOJVkBlF74RCDoKhCOqEcKizign4Xik%2FQCfCbkI3TBuT9Jt6fPBuqR0ZDsK1Anny%2FsQxvyu0FS78s8VABURN%2BX832Wfg8uLfDepHO%2BDUdTJ8vZVi3Txq8SVPAhe1YBTYJe0kDUF25UD4EL8NVr8somfVZtrcELMR9SQ%2FQ3v6%2Fo9pDgowUreE72tVm0C2sc1E1kLgFQUUTp7VwwVa5BfsZ7Bc16cMsza55h%2BdFubNkTb1RUDqX0aJeqcarUjypivr096PPK7GOxuJXTGVjDuqr7EBjqkATEKQ%2FNSio%2FP9Rc12U%2FUEPEPRX%2BM1wzsaZshuut3c7%2FTsm6pZl6%2FF8c1KfvYwEqU%2BRADbViGypDjwTVX2uF0%2BBJnFqqUcE93jYXV%2FZlgVNad1UWypTkum8WPYWxYn5iJV%2BDwT92nXZvT9MU3blnhV%2BrHss8O7y8juA%2BPPnpfNe9FGziN3nkHx7tuT6s6CHm6cRZE9i0QmL1zXXNYCgJduMe9QaNn&X-Amz-Signature=d7d9320c47c8cea882faec6b37f877471b1f15601230b77e7b994da57ef48982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LCAF2T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Btdm0A0yjG6xmwv2ti6xOSCmDxxKlg%2FNnDK54Cv0YyQIhALtauQQ%2F5aN4yibY5relckTDKqtta36GMGJKCk6ypc53Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxUSlo8nUnrFvOvtMoq3AN0%2B5T49s0k7EdW0g4CsBrkBnKO8BE%2F1mpl8DeA%2BP1zssVtuSOayx%2FDpc3itvnKfbDiwHjglUu6fB2nXrL3Ual%2F0Y8svA%2F5rEYYiqBf8usqXcxBy8aPGiTrbH3AuN1cGwxpppdZFLYTJb7473qYIRwQQEent2fsxE%2F2S5HuHQoCRHkAS%2Fi1GRsze%2Fnb8Rrl5s%2B1VVwFS%2BUXTKZtz2LrcqNqfwsPFv5W9jJByhAVizGeJ4cbfgf67QEcDmWHtmwfJwq59Vysls8BiKYrnw1HXGmIbEpiV7Gy%2F%2Bey%2BMx%2BIn0ehkJL3t5KhPu3KI%2B%2BXgtLnVlhW7JAf4io3bbnvH7sxUerCosK1Lgybieqymy%2BR9swmKOJVkBlF74RCDoKhCOqEcKizign4Xik%2FQCfCbkI3TBuT9Jt6fPBuqR0ZDsK1Anny%2FsQxvyu0FS78s8VABURN%2BX832Wfg8uLfDepHO%2BDUdTJ8vZVi3Txq8SVPAhe1YBTYJe0kDUF25UD4EL8NVr8somfVZtrcELMR9SQ%2FQ3v6%2Fo9pDgowUreE72tVm0C2sc1E1kLgFQUUTp7VwwVa5BfsZ7Bc16cMsza55h%2BdFubNkTb1RUDqX0aJeqcarUjypivr096PPK7GOxuJXTGVjDuqr7EBjqkATEKQ%2FNSio%2FP9Rc12U%2FUEPEPRX%2BM1wzsaZshuut3c7%2FTsm6pZl6%2FF8c1KfvYwEqU%2BRADbViGypDjwTVX2uF0%2BBJnFqqUcE93jYXV%2FZlgVNad1UWypTkum8WPYWxYn5iJV%2BDwT92nXZvT9MU3blnhV%2BrHss8O7y8juA%2BPPnpfNe9FGziN3nkHx7tuT6s6CHm6cRZE9i0QmL1zXXNYCgJduMe9QaNn&X-Amz-Signature=c399d28146e88d3b003364272677794fe00ab9c6908e7ea186fb4d33af8dbf20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LCAF2T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Btdm0A0yjG6xmwv2ti6xOSCmDxxKlg%2FNnDK54Cv0YyQIhALtauQQ%2F5aN4yibY5relckTDKqtta36GMGJKCk6ypc53Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxUSlo8nUnrFvOvtMoq3AN0%2B5T49s0k7EdW0g4CsBrkBnKO8BE%2F1mpl8DeA%2BP1zssVtuSOayx%2FDpc3itvnKfbDiwHjglUu6fB2nXrL3Ual%2F0Y8svA%2F5rEYYiqBf8usqXcxBy8aPGiTrbH3AuN1cGwxpppdZFLYTJb7473qYIRwQQEent2fsxE%2F2S5HuHQoCRHkAS%2Fi1GRsze%2Fnb8Rrl5s%2B1VVwFS%2BUXTKZtz2LrcqNqfwsPFv5W9jJByhAVizGeJ4cbfgf67QEcDmWHtmwfJwq59Vysls8BiKYrnw1HXGmIbEpiV7Gy%2F%2Bey%2BMx%2BIn0ehkJL3t5KhPu3KI%2B%2BXgtLnVlhW7JAf4io3bbnvH7sxUerCosK1Lgybieqymy%2BR9swmKOJVkBlF74RCDoKhCOqEcKizign4Xik%2FQCfCbkI3TBuT9Jt6fPBuqR0ZDsK1Anny%2FsQxvyu0FS78s8VABURN%2BX832Wfg8uLfDepHO%2BDUdTJ8vZVi3Txq8SVPAhe1YBTYJe0kDUF25UD4EL8NVr8somfVZtrcELMR9SQ%2FQ3v6%2Fo9pDgowUreE72tVm0C2sc1E1kLgFQUUTp7VwwVa5BfsZ7Bc16cMsza55h%2BdFubNkTb1RUDqX0aJeqcarUjypivr096PPK7GOxuJXTGVjDuqr7EBjqkATEKQ%2FNSio%2FP9Rc12U%2FUEPEPRX%2BM1wzsaZshuut3c7%2FTsm6pZl6%2FF8c1KfvYwEqU%2BRADbViGypDjwTVX2uF0%2BBJnFqqUcE93jYXV%2FZlgVNad1UWypTkum8WPYWxYn5iJV%2BDwT92nXZvT9MU3blnhV%2BrHss8O7y8juA%2BPPnpfNe9FGziN3nkHx7tuT6s6CHm6cRZE9i0QmL1zXXNYCgJduMe9QaNn&X-Amz-Signature=887586220749927729bb69f6a18e7986ed5d40368aa6f98c1c3b67c9bc758981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LCAF2T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Btdm0A0yjG6xmwv2ti6xOSCmDxxKlg%2FNnDK54Cv0YyQIhALtauQQ%2F5aN4yibY5relckTDKqtta36GMGJKCk6ypc53Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxUSlo8nUnrFvOvtMoq3AN0%2B5T49s0k7EdW0g4CsBrkBnKO8BE%2F1mpl8DeA%2BP1zssVtuSOayx%2FDpc3itvnKfbDiwHjglUu6fB2nXrL3Ual%2F0Y8svA%2F5rEYYiqBf8usqXcxBy8aPGiTrbH3AuN1cGwxpppdZFLYTJb7473qYIRwQQEent2fsxE%2F2S5HuHQoCRHkAS%2Fi1GRsze%2Fnb8Rrl5s%2B1VVwFS%2BUXTKZtz2LrcqNqfwsPFv5W9jJByhAVizGeJ4cbfgf67QEcDmWHtmwfJwq59Vysls8BiKYrnw1HXGmIbEpiV7Gy%2F%2Bey%2BMx%2BIn0ehkJL3t5KhPu3KI%2B%2BXgtLnVlhW7JAf4io3bbnvH7sxUerCosK1Lgybieqymy%2BR9swmKOJVkBlF74RCDoKhCOqEcKizign4Xik%2FQCfCbkI3TBuT9Jt6fPBuqR0ZDsK1Anny%2FsQxvyu0FS78s8VABURN%2BX832Wfg8uLfDepHO%2BDUdTJ8vZVi3Txq8SVPAhe1YBTYJe0kDUF25UD4EL8NVr8somfVZtrcELMR9SQ%2FQ3v6%2Fo9pDgowUreE72tVm0C2sc1E1kLgFQUUTp7VwwVa5BfsZ7Bc16cMsza55h%2BdFubNkTb1RUDqX0aJeqcarUjypivr096PPK7GOxuJXTGVjDuqr7EBjqkATEKQ%2FNSio%2FP9Rc12U%2FUEPEPRX%2BM1wzsaZshuut3c7%2FTsm6pZl6%2FF8c1KfvYwEqU%2BRADbViGypDjwTVX2uF0%2BBJnFqqUcE93jYXV%2FZlgVNad1UWypTkum8WPYWxYn5iJV%2BDwT92nXZvT9MU3blnhV%2BrHss8O7y8juA%2BPPnpfNe9FGziN3nkHx7tuT6s6CHm6cRZE9i0QmL1zXXNYCgJduMe9QaNn&X-Amz-Signature=7d602b3358641434cf0b096d303a79d6a24ee078a0088ca2f982e92ecb4e8ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LCAF2T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Btdm0A0yjG6xmwv2ti6xOSCmDxxKlg%2FNnDK54Cv0YyQIhALtauQQ%2F5aN4yibY5relckTDKqtta36GMGJKCk6ypc53Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxUSlo8nUnrFvOvtMoq3AN0%2B5T49s0k7EdW0g4CsBrkBnKO8BE%2F1mpl8DeA%2BP1zssVtuSOayx%2FDpc3itvnKfbDiwHjglUu6fB2nXrL3Ual%2F0Y8svA%2F5rEYYiqBf8usqXcxBy8aPGiTrbH3AuN1cGwxpppdZFLYTJb7473qYIRwQQEent2fsxE%2F2S5HuHQoCRHkAS%2Fi1GRsze%2Fnb8Rrl5s%2B1VVwFS%2BUXTKZtz2LrcqNqfwsPFv5W9jJByhAVizGeJ4cbfgf67QEcDmWHtmwfJwq59Vysls8BiKYrnw1HXGmIbEpiV7Gy%2F%2Bey%2BMx%2BIn0ehkJL3t5KhPu3KI%2B%2BXgtLnVlhW7JAf4io3bbnvH7sxUerCosK1Lgybieqymy%2BR9swmKOJVkBlF74RCDoKhCOqEcKizign4Xik%2FQCfCbkI3TBuT9Jt6fPBuqR0ZDsK1Anny%2FsQxvyu0FS78s8VABURN%2BX832Wfg8uLfDepHO%2BDUdTJ8vZVi3Txq8SVPAhe1YBTYJe0kDUF25UD4EL8NVr8somfVZtrcELMR9SQ%2FQ3v6%2Fo9pDgowUreE72tVm0C2sc1E1kLgFQUUTp7VwwVa5BfsZ7Bc16cMsza55h%2BdFubNkTb1RUDqX0aJeqcarUjypivr096PPK7GOxuJXTGVjDuqr7EBjqkATEKQ%2FNSio%2FP9Rc12U%2FUEPEPRX%2BM1wzsaZshuut3c7%2FTsm6pZl6%2FF8c1KfvYwEqU%2BRADbViGypDjwTVX2uF0%2BBJnFqqUcE93jYXV%2FZlgVNad1UWypTkum8WPYWxYn5iJV%2BDwT92nXZvT9MU3blnhV%2BrHss8O7y8juA%2BPPnpfNe9FGziN3nkHx7tuT6s6CHm6cRZE9i0QmL1zXXNYCgJduMe9QaNn&X-Amz-Signature=1f9b1f7bfaa643f65998d7788eccf78ac8c65ce0f25b4dfb41a62df6ef3b9ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LCAF2T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Btdm0A0yjG6xmwv2ti6xOSCmDxxKlg%2FNnDK54Cv0YyQIhALtauQQ%2F5aN4yibY5relckTDKqtta36GMGJKCk6ypc53Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxUSlo8nUnrFvOvtMoq3AN0%2B5T49s0k7EdW0g4CsBrkBnKO8BE%2F1mpl8DeA%2BP1zssVtuSOayx%2FDpc3itvnKfbDiwHjglUu6fB2nXrL3Ual%2F0Y8svA%2F5rEYYiqBf8usqXcxBy8aPGiTrbH3AuN1cGwxpppdZFLYTJb7473qYIRwQQEent2fsxE%2F2S5HuHQoCRHkAS%2Fi1GRsze%2Fnb8Rrl5s%2B1VVwFS%2BUXTKZtz2LrcqNqfwsPFv5W9jJByhAVizGeJ4cbfgf67QEcDmWHtmwfJwq59Vysls8BiKYrnw1HXGmIbEpiV7Gy%2F%2Bey%2BMx%2BIn0ehkJL3t5KhPu3KI%2B%2BXgtLnVlhW7JAf4io3bbnvH7sxUerCosK1Lgybieqymy%2BR9swmKOJVkBlF74RCDoKhCOqEcKizign4Xik%2FQCfCbkI3TBuT9Jt6fPBuqR0ZDsK1Anny%2FsQxvyu0FS78s8VABURN%2BX832Wfg8uLfDepHO%2BDUdTJ8vZVi3Txq8SVPAhe1YBTYJe0kDUF25UD4EL8NVr8somfVZtrcELMR9SQ%2FQ3v6%2Fo9pDgowUreE72tVm0C2sc1E1kLgFQUUTp7VwwVa5BfsZ7Bc16cMsza55h%2BdFubNkTb1RUDqX0aJeqcarUjypivr096PPK7GOxuJXTGVjDuqr7EBjqkATEKQ%2FNSio%2FP9Rc12U%2FUEPEPRX%2BM1wzsaZshuut3c7%2FTsm6pZl6%2FF8c1KfvYwEqU%2BRADbViGypDjwTVX2uF0%2BBJnFqqUcE93jYXV%2FZlgVNad1UWypTkum8WPYWxYn5iJV%2BDwT92nXZvT9MU3blnhV%2BrHss8O7y8juA%2BPPnpfNe9FGziN3nkHx7tuT6s6CHm6cRZE9i0QmL1zXXNYCgJduMe9QaNn&X-Amz-Signature=1ed76339b0cc679e8811b5724917200084b9ef0508ca0703f68a2639b0cf5081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LCAF2T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Btdm0A0yjG6xmwv2ti6xOSCmDxxKlg%2FNnDK54Cv0YyQIhALtauQQ%2F5aN4yibY5relckTDKqtta36GMGJKCk6ypc53Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxUSlo8nUnrFvOvtMoq3AN0%2B5T49s0k7EdW0g4CsBrkBnKO8BE%2F1mpl8DeA%2BP1zssVtuSOayx%2FDpc3itvnKfbDiwHjglUu6fB2nXrL3Ual%2F0Y8svA%2F5rEYYiqBf8usqXcxBy8aPGiTrbH3AuN1cGwxpppdZFLYTJb7473qYIRwQQEent2fsxE%2F2S5HuHQoCRHkAS%2Fi1GRsze%2Fnb8Rrl5s%2B1VVwFS%2BUXTKZtz2LrcqNqfwsPFv5W9jJByhAVizGeJ4cbfgf67QEcDmWHtmwfJwq59Vysls8BiKYrnw1HXGmIbEpiV7Gy%2F%2Bey%2BMx%2BIn0ehkJL3t5KhPu3KI%2B%2BXgtLnVlhW7JAf4io3bbnvH7sxUerCosK1Lgybieqymy%2BR9swmKOJVkBlF74RCDoKhCOqEcKizign4Xik%2FQCfCbkI3TBuT9Jt6fPBuqR0ZDsK1Anny%2FsQxvyu0FS78s8VABURN%2BX832Wfg8uLfDepHO%2BDUdTJ8vZVi3Txq8SVPAhe1YBTYJe0kDUF25UD4EL8NVr8somfVZtrcELMR9SQ%2FQ3v6%2Fo9pDgowUreE72tVm0C2sc1E1kLgFQUUTp7VwwVa5BfsZ7Bc16cMsza55h%2BdFubNkTb1RUDqX0aJeqcarUjypivr096PPK7GOxuJXTGVjDuqr7EBjqkATEKQ%2FNSio%2FP9Rc12U%2FUEPEPRX%2BM1wzsaZshuut3c7%2FTsm6pZl6%2FF8c1KfvYwEqU%2BRADbViGypDjwTVX2uF0%2BBJnFqqUcE93jYXV%2FZlgVNad1UWypTkum8WPYWxYn5iJV%2BDwT92nXZvT9MU3blnhV%2BrHss8O7y8juA%2BPPnpfNe9FGziN3nkHx7tuT6s6CHm6cRZE9i0QmL1zXXNYCgJduMe9QaNn&X-Amz-Signature=e693a726f22391a4f8da231940783bb59e8625d2fdd3fbb9427869db5e8d3ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
