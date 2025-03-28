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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVW6A7YY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVjOaHe%2Fba05gazSE%2Flo96EwuDcFP94Z93B%2FsrRSI1PgIgc7zz0VxW2PVQcsqkabi6hl0bgapxbKnkPv6iTBOorv0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKHf%2F%2FFxiE98lg%2FvOyrcA5M%2FlwfKnW8tNpgXD%2FxGOp%2F2j7duCKtV8T0abYHIMBt%2FN4TO7Xach6fa8En2FMdFU5LChBpgPRRj5O1qLQi94POm0x%2B%2B2G1oHLG845pEUPbxl7w%2FC62kdbZXbi%2BpqMmRJrlZe2i0LqqVTtxV7K6dkOZQ81UW9qbcNS9Luor%2B%2F4yMz%2BmSPeoyiusAG5zV0NbiQv1tIYki4huXfEPW86MEslqOH943PrKg8iv1N53mgOAzBWApnz%2BdWCdxX8qdQM1oaWjqsZgP1NDNp1Z5C2W26zvnu0GSy6kDxG8%2FLCfkKwCXJ8SbbZYuy2ne4TIMWDt7cbnj1skFxc%2B94J6E7O2R0gsajTB4lF3l8eYQ1s28ZPZI1Kq1GZphgJQ8tOr8fwLSK21aX4APOvJrmD2jtoEO7tGti59v3Ntnxt8u9SreeX5X7bRX5voCGpeGI4Y5zJA6JUbW1MBR61LYQbLblhFx5gjW6KUh1p8FgF%2FfDPqu%2BHWF%2Bk2B6H4ffOYM0wwt5ueg9d4mZ10Zn05CX%2FY16SrYrQmoeY9DhxBk8V9XB74T5R7Q92zG4GGiuGEjGtjf%2Fri5xXgZjoDRKhQvsRujon2uGHw%2Fd3%2B44I8%2FzKYdBqjiwukg4QQdnieLAf6V67knMMe%2Fm78GOqUB3QhofoO5QZQJzX6GIF1L99POje2OyRsc69%2BiHj41KL9P3hNbFLhLcjtaiqWzGibh02mEyKroUvWSFW%2BkK30AcCtPXKBot7SdWMdy4BNb1QR%2Fyy9LfphDDamtHArZVqv%2B%2F78B5DR9dvdwduXBkaah25P5TxrHul5kUTSlXIDxcPzByGkbyTfxK8khpl%2FvcP%2Fh0001WiS37r2T427VWcBG965sq3XP&X-Amz-Signature=89205a0da62f996ef701e7b87b01b793857936866c27ac67bbdf363019ef43a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVW6A7YY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVjOaHe%2Fba05gazSE%2Flo96EwuDcFP94Z93B%2FsrRSI1PgIgc7zz0VxW2PVQcsqkabi6hl0bgapxbKnkPv6iTBOorv0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKHf%2F%2FFxiE98lg%2FvOyrcA5M%2FlwfKnW8tNpgXD%2FxGOp%2F2j7duCKtV8T0abYHIMBt%2FN4TO7Xach6fa8En2FMdFU5LChBpgPRRj5O1qLQi94POm0x%2B%2B2G1oHLG845pEUPbxl7w%2FC62kdbZXbi%2BpqMmRJrlZe2i0LqqVTtxV7K6dkOZQ81UW9qbcNS9Luor%2B%2F4yMz%2BmSPeoyiusAG5zV0NbiQv1tIYki4huXfEPW86MEslqOH943PrKg8iv1N53mgOAzBWApnz%2BdWCdxX8qdQM1oaWjqsZgP1NDNp1Z5C2W26zvnu0GSy6kDxG8%2FLCfkKwCXJ8SbbZYuy2ne4TIMWDt7cbnj1skFxc%2B94J6E7O2R0gsajTB4lF3l8eYQ1s28ZPZI1Kq1GZphgJQ8tOr8fwLSK21aX4APOvJrmD2jtoEO7tGti59v3Ntnxt8u9SreeX5X7bRX5voCGpeGI4Y5zJA6JUbW1MBR61LYQbLblhFx5gjW6KUh1p8FgF%2FfDPqu%2BHWF%2Bk2B6H4ffOYM0wwt5ueg9d4mZ10Zn05CX%2FY16SrYrQmoeY9DhxBk8V9XB74T5R7Q92zG4GGiuGEjGtjf%2Fri5xXgZjoDRKhQvsRujon2uGHw%2Fd3%2B44I8%2FzKYdBqjiwukg4QQdnieLAf6V67knMMe%2Fm78GOqUB3QhofoO5QZQJzX6GIF1L99POje2OyRsc69%2BiHj41KL9P3hNbFLhLcjtaiqWzGibh02mEyKroUvWSFW%2BkK30AcCtPXKBot7SdWMdy4BNb1QR%2Fyy9LfphDDamtHArZVqv%2B%2F78B5DR9dvdwduXBkaah25P5TxrHul5kUTSlXIDxcPzByGkbyTfxK8khpl%2FvcP%2Fh0001WiS37r2T427VWcBG965sq3XP&X-Amz-Signature=343fdee25ef803ea11aca0b70ce565c17f6a96f4450f87622ae6afb49f2a5c00&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVW6A7YY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVjOaHe%2Fba05gazSE%2Flo96EwuDcFP94Z93B%2FsrRSI1PgIgc7zz0VxW2PVQcsqkabi6hl0bgapxbKnkPv6iTBOorv0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKHf%2F%2FFxiE98lg%2FvOyrcA5M%2FlwfKnW8tNpgXD%2FxGOp%2F2j7duCKtV8T0abYHIMBt%2FN4TO7Xach6fa8En2FMdFU5LChBpgPRRj5O1qLQi94POm0x%2B%2B2G1oHLG845pEUPbxl7w%2FC62kdbZXbi%2BpqMmRJrlZe2i0LqqVTtxV7K6dkOZQ81UW9qbcNS9Luor%2B%2F4yMz%2BmSPeoyiusAG5zV0NbiQv1tIYki4huXfEPW86MEslqOH943PrKg8iv1N53mgOAzBWApnz%2BdWCdxX8qdQM1oaWjqsZgP1NDNp1Z5C2W26zvnu0GSy6kDxG8%2FLCfkKwCXJ8SbbZYuy2ne4TIMWDt7cbnj1skFxc%2B94J6E7O2R0gsajTB4lF3l8eYQ1s28ZPZI1Kq1GZphgJQ8tOr8fwLSK21aX4APOvJrmD2jtoEO7tGti59v3Ntnxt8u9SreeX5X7bRX5voCGpeGI4Y5zJA6JUbW1MBR61LYQbLblhFx5gjW6KUh1p8FgF%2FfDPqu%2BHWF%2Bk2B6H4ffOYM0wwt5ueg9d4mZ10Zn05CX%2FY16SrYrQmoeY9DhxBk8V9XB74T5R7Q92zG4GGiuGEjGtjf%2Fri5xXgZjoDRKhQvsRujon2uGHw%2Fd3%2B44I8%2FzKYdBqjiwukg4QQdnieLAf6V67knMMe%2Fm78GOqUB3QhofoO5QZQJzX6GIF1L99POje2OyRsc69%2BiHj41KL9P3hNbFLhLcjtaiqWzGibh02mEyKroUvWSFW%2BkK30AcCtPXKBot7SdWMdy4BNb1QR%2Fyy9LfphDDamtHArZVqv%2B%2F78B5DR9dvdwduXBkaah25P5TxrHul5kUTSlXIDxcPzByGkbyTfxK8khpl%2FvcP%2Fh0001WiS37r2T427VWcBG965sq3XP&X-Amz-Signature=5c7b472e68efd20eb1521668e7b427ad47e85e7bd0af35d630ca21a88e8aa5d0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVW6A7YY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVjOaHe%2Fba05gazSE%2Flo96EwuDcFP94Z93B%2FsrRSI1PgIgc7zz0VxW2PVQcsqkabi6hl0bgapxbKnkPv6iTBOorv0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKHf%2F%2FFxiE98lg%2FvOyrcA5M%2FlwfKnW8tNpgXD%2FxGOp%2F2j7duCKtV8T0abYHIMBt%2FN4TO7Xach6fa8En2FMdFU5LChBpgPRRj5O1qLQi94POm0x%2B%2B2G1oHLG845pEUPbxl7w%2FC62kdbZXbi%2BpqMmRJrlZe2i0LqqVTtxV7K6dkOZQ81UW9qbcNS9Luor%2B%2F4yMz%2BmSPeoyiusAG5zV0NbiQv1tIYki4huXfEPW86MEslqOH943PrKg8iv1N53mgOAzBWApnz%2BdWCdxX8qdQM1oaWjqsZgP1NDNp1Z5C2W26zvnu0GSy6kDxG8%2FLCfkKwCXJ8SbbZYuy2ne4TIMWDt7cbnj1skFxc%2B94J6E7O2R0gsajTB4lF3l8eYQ1s28ZPZI1Kq1GZphgJQ8tOr8fwLSK21aX4APOvJrmD2jtoEO7tGti59v3Ntnxt8u9SreeX5X7bRX5voCGpeGI4Y5zJA6JUbW1MBR61LYQbLblhFx5gjW6KUh1p8FgF%2FfDPqu%2BHWF%2Bk2B6H4ffOYM0wwt5ueg9d4mZ10Zn05CX%2FY16SrYrQmoeY9DhxBk8V9XB74T5R7Q92zG4GGiuGEjGtjf%2Fri5xXgZjoDRKhQvsRujon2uGHw%2Fd3%2B44I8%2FzKYdBqjiwukg4QQdnieLAf6V67knMMe%2Fm78GOqUB3QhofoO5QZQJzX6GIF1L99POje2OyRsc69%2BiHj41KL9P3hNbFLhLcjtaiqWzGibh02mEyKroUvWSFW%2BkK30AcCtPXKBot7SdWMdy4BNb1QR%2Fyy9LfphDDamtHArZVqv%2B%2F78B5DR9dvdwduXBkaah25P5TxrHul5kUTSlXIDxcPzByGkbyTfxK8khpl%2FvcP%2Fh0001WiS37r2T427VWcBG965sq3XP&X-Amz-Signature=b97a29d0e8587d8134aa36765b11a0a0202f64f537aecac31dc0421cc74032b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVW6A7YY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVjOaHe%2Fba05gazSE%2Flo96EwuDcFP94Z93B%2FsrRSI1PgIgc7zz0VxW2PVQcsqkabi6hl0bgapxbKnkPv6iTBOorv0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKHf%2F%2FFxiE98lg%2FvOyrcA5M%2FlwfKnW8tNpgXD%2FxGOp%2F2j7duCKtV8T0abYHIMBt%2FN4TO7Xach6fa8En2FMdFU5LChBpgPRRj5O1qLQi94POm0x%2B%2B2G1oHLG845pEUPbxl7w%2FC62kdbZXbi%2BpqMmRJrlZe2i0LqqVTtxV7K6dkOZQ81UW9qbcNS9Luor%2B%2F4yMz%2BmSPeoyiusAG5zV0NbiQv1tIYki4huXfEPW86MEslqOH943PrKg8iv1N53mgOAzBWApnz%2BdWCdxX8qdQM1oaWjqsZgP1NDNp1Z5C2W26zvnu0GSy6kDxG8%2FLCfkKwCXJ8SbbZYuy2ne4TIMWDt7cbnj1skFxc%2B94J6E7O2R0gsajTB4lF3l8eYQ1s28ZPZI1Kq1GZphgJQ8tOr8fwLSK21aX4APOvJrmD2jtoEO7tGti59v3Ntnxt8u9SreeX5X7bRX5voCGpeGI4Y5zJA6JUbW1MBR61LYQbLblhFx5gjW6KUh1p8FgF%2FfDPqu%2BHWF%2Bk2B6H4ffOYM0wwt5ueg9d4mZ10Zn05CX%2FY16SrYrQmoeY9DhxBk8V9XB74T5R7Q92zG4GGiuGEjGtjf%2Fri5xXgZjoDRKhQvsRujon2uGHw%2Fd3%2B44I8%2FzKYdBqjiwukg4QQdnieLAf6V67knMMe%2Fm78GOqUB3QhofoO5QZQJzX6GIF1L99POje2OyRsc69%2BiHj41KL9P3hNbFLhLcjtaiqWzGibh02mEyKroUvWSFW%2BkK30AcCtPXKBot7SdWMdy4BNb1QR%2Fyy9LfphDDamtHArZVqv%2B%2F78B5DR9dvdwduXBkaah25P5TxrHul5kUTSlXIDxcPzByGkbyTfxK8khpl%2FvcP%2Fh0001WiS37r2T427VWcBG965sq3XP&X-Amz-Signature=045f6658b534464d15dc7bc1b2272c3dbd50823d7434411d1dd503954a908ed5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVW6A7YY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVjOaHe%2Fba05gazSE%2Flo96EwuDcFP94Z93B%2FsrRSI1PgIgc7zz0VxW2PVQcsqkabi6hl0bgapxbKnkPv6iTBOorv0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKHf%2F%2FFxiE98lg%2FvOyrcA5M%2FlwfKnW8tNpgXD%2FxGOp%2F2j7duCKtV8T0abYHIMBt%2FN4TO7Xach6fa8En2FMdFU5LChBpgPRRj5O1qLQi94POm0x%2B%2B2G1oHLG845pEUPbxl7w%2FC62kdbZXbi%2BpqMmRJrlZe2i0LqqVTtxV7K6dkOZQ81UW9qbcNS9Luor%2B%2F4yMz%2BmSPeoyiusAG5zV0NbiQv1tIYki4huXfEPW86MEslqOH943PrKg8iv1N53mgOAzBWApnz%2BdWCdxX8qdQM1oaWjqsZgP1NDNp1Z5C2W26zvnu0GSy6kDxG8%2FLCfkKwCXJ8SbbZYuy2ne4TIMWDt7cbnj1skFxc%2B94J6E7O2R0gsajTB4lF3l8eYQ1s28ZPZI1Kq1GZphgJQ8tOr8fwLSK21aX4APOvJrmD2jtoEO7tGti59v3Ntnxt8u9SreeX5X7bRX5voCGpeGI4Y5zJA6JUbW1MBR61LYQbLblhFx5gjW6KUh1p8FgF%2FfDPqu%2BHWF%2Bk2B6H4ffOYM0wwt5ueg9d4mZ10Zn05CX%2FY16SrYrQmoeY9DhxBk8V9XB74T5R7Q92zG4GGiuGEjGtjf%2Fri5xXgZjoDRKhQvsRujon2uGHw%2Fd3%2B44I8%2FzKYdBqjiwukg4QQdnieLAf6V67knMMe%2Fm78GOqUB3QhofoO5QZQJzX6GIF1L99POje2OyRsc69%2BiHj41KL9P3hNbFLhLcjtaiqWzGibh02mEyKroUvWSFW%2BkK30AcCtPXKBot7SdWMdy4BNb1QR%2Fyy9LfphDDamtHArZVqv%2B%2F78B5DR9dvdwduXBkaah25P5TxrHul5kUTSlXIDxcPzByGkbyTfxK8khpl%2FvcP%2Fh0001WiS37r2T427VWcBG965sq3XP&X-Amz-Signature=825186cb9fe213cb24b9a90b7d6762b58b6f93b4aa09d6a87659a162e92f839b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVW6A7YY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVjOaHe%2Fba05gazSE%2Flo96EwuDcFP94Z93B%2FsrRSI1PgIgc7zz0VxW2PVQcsqkabi6hl0bgapxbKnkPv6iTBOorv0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKHf%2F%2FFxiE98lg%2FvOyrcA5M%2FlwfKnW8tNpgXD%2FxGOp%2F2j7duCKtV8T0abYHIMBt%2FN4TO7Xach6fa8En2FMdFU5LChBpgPRRj5O1qLQi94POm0x%2B%2B2G1oHLG845pEUPbxl7w%2FC62kdbZXbi%2BpqMmRJrlZe2i0LqqVTtxV7K6dkOZQ81UW9qbcNS9Luor%2B%2F4yMz%2BmSPeoyiusAG5zV0NbiQv1tIYki4huXfEPW86MEslqOH943PrKg8iv1N53mgOAzBWApnz%2BdWCdxX8qdQM1oaWjqsZgP1NDNp1Z5C2W26zvnu0GSy6kDxG8%2FLCfkKwCXJ8SbbZYuy2ne4TIMWDt7cbnj1skFxc%2B94J6E7O2R0gsajTB4lF3l8eYQ1s28ZPZI1Kq1GZphgJQ8tOr8fwLSK21aX4APOvJrmD2jtoEO7tGti59v3Ntnxt8u9SreeX5X7bRX5voCGpeGI4Y5zJA6JUbW1MBR61LYQbLblhFx5gjW6KUh1p8FgF%2FfDPqu%2BHWF%2Bk2B6H4ffOYM0wwt5ueg9d4mZ10Zn05CX%2FY16SrYrQmoeY9DhxBk8V9XB74T5R7Q92zG4GGiuGEjGtjf%2Fri5xXgZjoDRKhQvsRujon2uGHw%2Fd3%2B44I8%2FzKYdBqjiwukg4QQdnieLAf6V67knMMe%2Fm78GOqUB3QhofoO5QZQJzX6GIF1L99POje2OyRsc69%2BiHj41KL9P3hNbFLhLcjtaiqWzGibh02mEyKroUvWSFW%2BkK30AcCtPXKBot7SdWMdy4BNb1QR%2Fyy9LfphDDamtHArZVqv%2B%2F78B5DR9dvdwduXBkaah25P5TxrHul5kUTSlXIDxcPzByGkbyTfxK8khpl%2FvcP%2Fh0001WiS37r2T427VWcBG965sq3XP&X-Amz-Signature=88797976954566dc4221cbe748dac6e9fdb08532dafd8a0e8a2646a4ec46e870&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVW6A7YY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVjOaHe%2Fba05gazSE%2Flo96EwuDcFP94Z93B%2FsrRSI1PgIgc7zz0VxW2PVQcsqkabi6hl0bgapxbKnkPv6iTBOorv0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKHf%2F%2FFxiE98lg%2FvOyrcA5M%2FlwfKnW8tNpgXD%2FxGOp%2F2j7duCKtV8T0abYHIMBt%2FN4TO7Xach6fa8En2FMdFU5LChBpgPRRj5O1qLQi94POm0x%2B%2B2G1oHLG845pEUPbxl7w%2FC62kdbZXbi%2BpqMmRJrlZe2i0LqqVTtxV7K6dkOZQ81UW9qbcNS9Luor%2B%2F4yMz%2BmSPeoyiusAG5zV0NbiQv1tIYki4huXfEPW86MEslqOH943PrKg8iv1N53mgOAzBWApnz%2BdWCdxX8qdQM1oaWjqsZgP1NDNp1Z5C2W26zvnu0GSy6kDxG8%2FLCfkKwCXJ8SbbZYuy2ne4TIMWDt7cbnj1skFxc%2B94J6E7O2R0gsajTB4lF3l8eYQ1s28ZPZI1Kq1GZphgJQ8tOr8fwLSK21aX4APOvJrmD2jtoEO7tGti59v3Ntnxt8u9SreeX5X7bRX5voCGpeGI4Y5zJA6JUbW1MBR61LYQbLblhFx5gjW6KUh1p8FgF%2FfDPqu%2BHWF%2Bk2B6H4ffOYM0wwt5ueg9d4mZ10Zn05CX%2FY16SrYrQmoeY9DhxBk8V9XB74T5R7Q92zG4GGiuGEjGtjf%2Fri5xXgZjoDRKhQvsRujon2uGHw%2Fd3%2B44I8%2FzKYdBqjiwukg4QQdnieLAf6V67knMMe%2Fm78GOqUB3QhofoO5QZQJzX6GIF1L99POje2OyRsc69%2BiHj41KL9P3hNbFLhLcjtaiqWzGibh02mEyKroUvWSFW%2BkK30AcCtPXKBot7SdWMdy4BNb1QR%2Fyy9LfphDDamtHArZVqv%2B%2F78B5DR9dvdwduXBkaah25P5TxrHul5kUTSlXIDxcPzByGkbyTfxK8khpl%2FvcP%2Fh0001WiS37r2T427VWcBG965sq3XP&X-Amz-Signature=815db4ee2853d6ef29ef1c8f66b3d754560bee11aa2b4eb7e108cf60b5214855&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
