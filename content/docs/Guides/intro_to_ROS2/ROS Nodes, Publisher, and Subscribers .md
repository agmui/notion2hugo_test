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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWGIS27%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFGYm%2Fhbawl6NmF3Z9HWaRLxqP0bWcTQuIjb%2FTGUUoMMAiEAiJcvgEPRYBEalHFNvtQf%2BLuDvFEhjTXPmOgdhgvNUp8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBv0o8SdRiXHogdlYSrcA9tKXk3GszIrK24pDD84BhLAYykb338XYynSzpghIZ0gRSL8G9BYTtWltJBngf6KPm%2FwEkhTJbTxxKskcjf26pVewd7VVHpz4bbRN0q3g%2BIVfC7gZDi9h%2F%2FgKGgPtmJm%2FrPDdJ%2BswWYEWSuOcVLiJvXDy%2FrA0NKvImDHSYWsiNwdtReVOgG4mLynxxc6LXVBWLTxYCs4PXuPhJgMaNFEDj4We90e1sBtGZdmZeSj4STYCom21z0%2FKYuqj1ccrdNoGV2RXBHGN9HztXJ86e6qNAYR6u5XV4KFqsy7VFQFxINQAXe5cjDQeZeNhqa7gjCB1RS27ny8PcrLi9ZHofhVSzNbOvMa3P%2FZT5e8DHM%2FCisNokHN3FAFYnHA7kbIRrwV6hWYmev79tfiletV54hC5ykv3nX%2BnVnJgh9xim0f7K2pHH885f1rk5N7ArT4DQ%2BQ9qCzUtV5wlBjfNIQFXZbI8oiOWkGxptgB74lQkpmNr%2BFoFwjzRSZcJcLLljlcXVezQ88zbFCXyZfu7Myl8SVeifSr4Zeti7FGs8aBmctR87xRVeYbm1l8LpLYfCs8gfAeoJXnkjHL936OqqdYOA%2FYTJD0SscAb5KHoGVZ1kdmew1TIsNgUGuIxhXrxN7MNr1qsMGOqUBPHX4opjTn9JyOjp125jR%2FF9IRhxXzvaUhQx0rPtPiWA81JPrX4GNVeayirxX5AvACnpHCYNpr8Fk67SY114dP40XC0efhZ3MllRUpNfRQFAs5dTtRZ5Z3AHnKo%2ByYmT%2FhgLpwMd2tPMp6gOAuus5Q%2F5fN7RDBz5w2mrl%2FspB6zIozKsS5EkZ7XxmXBNCLp0CM5yw1DLvNaRzHFLOkxtZs%2F7bl6s%2F&X-Amz-Signature=913bb35c9710573e5efdf1d07ebd6bd4cdef462ab063b58093fb9744a0b25a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWGIS27%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFGYm%2Fhbawl6NmF3Z9HWaRLxqP0bWcTQuIjb%2FTGUUoMMAiEAiJcvgEPRYBEalHFNvtQf%2BLuDvFEhjTXPmOgdhgvNUp8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBv0o8SdRiXHogdlYSrcA9tKXk3GszIrK24pDD84BhLAYykb338XYynSzpghIZ0gRSL8G9BYTtWltJBngf6KPm%2FwEkhTJbTxxKskcjf26pVewd7VVHpz4bbRN0q3g%2BIVfC7gZDi9h%2F%2FgKGgPtmJm%2FrPDdJ%2BswWYEWSuOcVLiJvXDy%2FrA0NKvImDHSYWsiNwdtReVOgG4mLynxxc6LXVBWLTxYCs4PXuPhJgMaNFEDj4We90e1sBtGZdmZeSj4STYCom21z0%2FKYuqj1ccrdNoGV2RXBHGN9HztXJ86e6qNAYR6u5XV4KFqsy7VFQFxINQAXe5cjDQeZeNhqa7gjCB1RS27ny8PcrLi9ZHofhVSzNbOvMa3P%2FZT5e8DHM%2FCisNokHN3FAFYnHA7kbIRrwV6hWYmev79tfiletV54hC5ykv3nX%2BnVnJgh9xim0f7K2pHH885f1rk5N7ArT4DQ%2BQ9qCzUtV5wlBjfNIQFXZbI8oiOWkGxptgB74lQkpmNr%2BFoFwjzRSZcJcLLljlcXVezQ88zbFCXyZfu7Myl8SVeifSr4Zeti7FGs8aBmctR87xRVeYbm1l8LpLYfCs8gfAeoJXnkjHL936OqqdYOA%2FYTJD0SscAb5KHoGVZ1kdmew1TIsNgUGuIxhXrxN7MNr1qsMGOqUBPHX4opjTn9JyOjp125jR%2FF9IRhxXzvaUhQx0rPtPiWA81JPrX4GNVeayirxX5AvACnpHCYNpr8Fk67SY114dP40XC0efhZ3MllRUpNfRQFAs5dTtRZ5Z3AHnKo%2ByYmT%2FhgLpwMd2tPMp6gOAuus5Q%2F5fN7RDBz5w2mrl%2FspB6zIozKsS5EkZ7XxmXBNCLp0CM5yw1DLvNaRzHFLOkxtZs%2F7bl6s%2F&X-Amz-Signature=8b7ce4a1c59abfe3a31d354bd82b54540537b3399b713ff907fd97da148173dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWGIS27%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFGYm%2Fhbawl6NmF3Z9HWaRLxqP0bWcTQuIjb%2FTGUUoMMAiEAiJcvgEPRYBEalHFNvtQf%2BLuDvFEhjTXPmOgdhgvNUp8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBv0o8SdRiXHogdlYSrcA9tKXk3GszIrK24pDD84BhLAYykb338XYynSzpghIZ0gRSL8G9BYTtWltJBngf6KPm%2FwEkhTJbTxxKskcjf26pVewd7VVHpz4bbRN0q3g%2BIVfC7gZDi9h%2F%2FgKGgPtmJm%2FrPDdJ%2BswWYEWSuOcVLiJvXDy%2FrA0NKvImDHSYWsiNwdtReVOgG4mLynxxc6LXVBWLTxYCs4PXuPhJgMaNFEDj4We90e1sBtGZdmZeSj4STYCom21z0%2FKYuqj1ccrdNoGV2RXBHGN9HztXJ86e6qNAYR6u5XV4KFqsy7VFQFxINQAXe5cjDQeZeNhqa7gjCB1RS27ny8PcrLi9ZHofhVSzNbOvMa3P%2FZT5e8DHM%2FCisNokHN3FAFYnHA7kbIRrwV6hWYmev79tfiletV54hC5ykv3nX%2BnVnJgh9xim0f7K2pHH885f1rk5N7ArT4DQ%2BQ9qCzUtV5wlBjfNIQFXZbI8oiOWkGxptgB74lQkpmNr%2BFoFwjzRSZcJcLLljlcXVezQ88zbFCXyZfu7Myl8SVeifSr4Zeti7FGs8aBmctR87xRVeYbm1l8LpLYfCs8gfAeoJXnkjHL936OqqdYOA%2FYTJD0SscAb5KHoGVZ1kdmew1TIsNgUGuIxhXrxN7MNr1qsMGOqUBPHX4opjTn9JyOjp125jR%2FF9IRhxXzvaUhQx0rPtPiWA81JPrX4GNVeayirxX5AvACnpHCYNpr8Fk67SY114dP40XC0efhZ3MllRUpNfRQFAs5dTtRZ5Z3AHnKo%2ByYmT%2FhgLpwMd2tPMp6gOAuus5Q%2F5fN7RDBz5w2mrl%2FspB6zIozKsS5EkZ7XxmXBNCLp0CM5yw1DLvNaRzHFLOkxtZs%2F7bl6s%2F&X-Amz-Signature=47cc3f2bdfa71d377155534477d46d51e068284e990ba35143e1b9341bb6c248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWGIS27%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFGYm%2Fhbawl6NmF3Z9HWaRLxqP0bWcTQuIjb%2FTGUUoMMAiEAiJcvgEPRYBEalHFNvtQf%2BLuDvFEhjTXPmOgdhgvNUp8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBv0o8SdRiXHogdlYSrcA9tKXk3GszIrK24pDD84BhLAYykb338XYynSzpghIZ0gRSL8G9BYTtWltJBngf6KPm%2FwEkhTJbTxxKskcjf26pVewd7VVHpz4bbRN0q3g%2BIVfC7gZDi9h%2F%2FgKGgPtmJm%2FrPDdJ%2BswWYEWSuOcVLiJvXDy%2FrA0NKvImDHSYWsiNwdtReVOgG4mLynxxc6LXVBWLTxYCs4PXuPhJgMaNFEDj4We90e1sBtGZdmZeSj4STYCom21z0%2FKYuqj1ccrdNoGV2RXBHGN9HztXJ86e6qNAYR6u5XV4KFqsy7VFQFxINQAXe5cjDQeZeNhqa7gjCB1RS27ny8PcrLi9ZHofhVSzNbOvMa3P%2FZT5e8DHM%2FCisNokHN3FAFYnHA7kbIRrwV6hWYmev79tfiletV54hC5ykv3nX%2BnVnJgh9xim0f7K2pHH885f1rk5N7ArT4DQ%2BQ9qCzUtV5wlBjfNIQFXZbI8oiOWkGxptgB74lQkpmNr%2BFoFwjzRSZcJcLLljlcXVezQ88zbFCXyZfu7Myl8SVeifSr4Zeti7FGs8aBmctR87xRVeYbm1l8LpLYfCs8gfAeoJXnkjHL936OqqdYOA%2FYTJD0SscAb5KHoGVZ1kdmew1TIsNgUGuIxhXrxN7MNr1qsMGOqUBPHX4opjTn9JyOjp125jR%2FF9IRhxXzvaUhQx0rPtPiWA81JPrX4GNVeayirxX5AvACnpHCYNpr8Fk67SY114dP40XC0efhZ3MllRUpNfRQFAs5dTtRZ5Z3AHnKo%2ByYmT%2FhgLpwMd2tPMp6gOAuus5Q%2F5fN7RDBz5w2mrl%2FspB6zIozKsS5EkZ7XxmXBNCLp0CM5yw1DLvNaRzHFLOkxtZs%2F7bl6s%2F&X-Amz-Signature=872b0e19756f7004ad3295df0d42147cb6ba35c4a181bef7849723e4c0e0ecd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWGIS27%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFGYm%2Fhbawl6NmF3Z9HWaRLxqP0bWcTQuIjb%2FTGUUoMMAiEAiJcvgEPRYBEalHFNvtQf%2BLuDvFEhjTXPmOgdhgvNUp8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBv0o8SdRiXHogdlYSrcA9tKXk3GszIrK24pDD84BhLAYykb338XYynSzpghIZ0gRSL8G9BYTtWltJBngf6KPm%2FwEkhTJbTxxKskcjf26pVewd7VVHpz4bbRN0q3g%2BIVfC7gZDi9h%2F%2FgKGgPtmJm%2FrPDdJ%2BswWYEWSuOcVLiJvXDy%2FrA0NKvImDHSYWsiNwdtReVOgG4mLynxxc6LXVBWLTxYCs4PXuPhJgMaNFEDj4We90e1sBtGZdmZeSj4STYCom21z0%2FKYuqj1ccrdNoGV2RXBHGN9HztXJ86e6qNAYR6u5XV4KFqsy7VFQFxINQAXe5cjDQeZeNhqa7gjCB1RS27ny8PcrLi9ZHofhVSzNbOvMa3P%2FZT5e8DHM%2FCisNokHN3FAFYnHA7kbIRrwV6hWYmev79tfiletV54hC5ykv3nX%2BnVnJgh9xim0f7K2pHH885f1rk5N7ArT4DQ%2BQ9qCzUtV5wlBjfNIQFXZbI8oiOWkGxptgB74lQkpmNr%2BFoFwjzRSZcJcLLljlcXVezQ88zbFCXyZfu7Myl8SVeifSr4Zeti7FGs8aBmctR87xRVeYbm1l8LpLYfCs8gfAeoJXnkjHL936OqqdYOA%2FYTJD0SscAb5KHoGVZ1kdmew1TIsNgUGuIxhXrxN7MNr1qsMGOqUBPHX4opjTn9JyOjp125jR%2FF9IRhxXzvaUhQx0rPtPiWA81JPrX4GNVeayirxX5AvACnpHCYNpr8Fk67SY114dP40XC0efhZ3MllRUpNfRQFAs5dTtRZ5Z3AHnKo%2ByYmT%2FhgLpwMd2tPMp6gOAuus5Q%2F5fN7RDBz5w2mrl%2FspB6zIozKsS5EkZ7XxmXBNCLp0CM5yw1DLvNaRzHFLOkxtZs%2F7bl6s%2F&X-Amz-Signature=1a81236a250265dd38a2a7b5f75961a8027eaeaea3443b7dd65e5be52fc57471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWGIS27%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFGYm%2Fhbawl6NmF3Z9HWaRLxqP0bWcTQuIjb%2FTGUUoMMAiEAiJcvgEPRYBEalHFNvtQf%2BLuDvFEhjTXPmOgdhgvNUp8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBv0o8SdRiXHogdlYSrcA9tKXk3GszIrK24pDD84BhLAYykb338XYynSzpghIZ0gRSL8G9BYTtWltJBngf6KPm%2FwEkhTJbTxxKskcjf26pVewd7VVHpz4bbRN0q3g%2BIVfC7gZDi9h%2F%2FgKGgPtmJm%2FrPDdJ%2BswWYEWSuOcVLiJvXDy%2FrA0NKvImDHSYWsiNwdtReVOgG4mLynxxc6LXVBWLTxYCs4PXuPhJgMaNFEDj4We90e1sBtGZdmZeSj4STYCom21z0%2FKYuqj1ccrdNoGV2RXBHGN9HztXJ86e6qNAYR6u5XV4KFqsy7VFQFxINQAXe5cjDQeZeNhqa7gjCB1RS27ny8PcrLi9ZHofhVSzNbOvMa3P%2FZT5e8DHM%2FCisNokHN3FAFYnHA7kbIRrwV6hWYmev79tfiletV54hC5ykv3nX%2BnVnJgh9xim0f7K2pHH885f1rk5N7ArT4DQ%2BQ9qCzUtV5wlBjfNIQFXZbI8oiOWkGxptgB74lQkpmNr%2BFoFwjzRSZcJcLLljlcXVezQ88zbFCXyZfu7Myl8SVeifSr4Zeti7FGs8aBmctR87xRVeYbm1l8LpLYfCs8gfAeoJXnkjHL936OqqdYOA%2FYTJD0SscAb5KHoGVZ1kdmew1TIsNgUGuIxhXrxN7MNr1qsMGOqUBPHX4opjTn9JyOjp125jR%2FF9IRhxXzvaUhQx0rPtPiWA81JPrX4GNVeayirxX5AvACnpHCYNpr8Fk67SY114dP40XC0efhZ3MllRUpNfRQFAs5dTtRZ5Z3AHnKo%2ByYmT%2FhgLpwMd2tPMp6gOAuus5Q%2F5fN7RDBz5w2mrl%2FspB6zIozKsS5EkZ7XxmXBNCLp0CM5yw1DLvNaRzHFLOkxtZs%2F7bl6s%2F&X-Amz-Signature=1564389dccbb028c81a6b8a1a2f37101f8455e5e767d49ee53fbdbeab4c8fa1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWGIS27%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFGYm%2Fhbawl6NmF3Z9HWaRLxqP0bWcTQuIjb%2FTGUUoMMAiEAiJcvgEPRYBEalHFNvtQf%2BLuDvFEhjTXPmOgdhgvNUp8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBv0o8SdRiXHogdlYSrcA9tKXk3GszIrK24pDD84BhLAYykb338XYynSzpghIZ0gRSL8G9BYTtWltJBngf6KPm%2FwEkhTJbTxxKskcjf26pVewd7VVHpz4bbRN0q3g%2BIVfC7gZDi9h%2F%2FgKGgPtmJm%2FrPDdJ%2BswWYEWSuOcVLiJvXDy%2FrA0NKvImDHSYWsiNwdtReVOgG4mLynxxc6LXVBWLTxYCs4PXuPhJgMaNFEDj4We90e1sBtGZdmZeSj4STYCom21z0%2FKYuqj1ccrdNoGV2RXBHGN9HztXJ86e6qNAYR6u5XV4KFqsy7VFQFxINQAXe5cjDQeZeNhqa7gjCB1RS27ny8PcrLi9ZHofhVSzNbOvMa3P%2FZT5e8DHM%2FCisNokHN3FAFYnHA7kbIRrwV6hWYmev79tfiletV54hC5ykv3nX%2BnVnJgh9xim0f7K2pHH885f1rk5N7ArT4DQ%2BQ9qCzUtV5wlBjfNIQFXZbI8oiOWkGxptgB74lQkpmNr%2BFoFwjzRSZcJcLLljlcXVezQ88zbFCXyZfu7Myl8SVeifSr4Zeti7FGs8aBmctR87xRVeYbm1l8LpLYfCs8gfAeoJXnkjHL936OqqdYOA%2FYTJD0SscAb5KHoGVZ1kdmew1TIsNgUGuIxhXrxN7MNr1qsMGOqUBPHX4opjTn9JyOjp125jR%2FF9IRhxXzvaUhQx0rPtPiWA81JPrX4GNVeayirxX5AvACnpHCYNpr8Fk67SY114dP40XC0efhZ3MllRUpNfRQFAs5dTtRZ5Z3AHnKo%2ByYmT%2FhgLpwMd2tPMp6gOAuus5Q%2F5fN7RDBz5w2mrl%2FspB6zIozKsS5EkZ7XxmXBNCLp0CM5yw1DLvNaRzHFLOkxtZs%2F7bl6s%2F&X-Amz-Signature=b2b40eba02a35159d95b6db2edc48b7ed33db0173ce25dbdd92886ab82c25bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWGIS27%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFGYm%2Fhbawl6NmF3Z9HWaRLxqP0bWcTQuIjb%2FTGUUoMMAiEAiJcvgEPRYBEalHFNvtQf%2BLuDvFEhjTXPmOgdhgvNUp8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBv0o8SdRiXHogdlYSrcA9tKXk3GszIrK24pDD84BhLAYykb338XYynSzpghIZ0gRSL8G9BYTtWltJBngf6KPm%2FwEkhTJbTxxKskcjf26pVewd7VVHpz4bbRN0q3g%2BIVfC7gZDi9h%2F%2FgKGgPtmJm%2FrPDdJ%2BswWYEWSuOcVLiJvXDy%2FrA0NKvImDHSYWsiNwdtReVOgG4mLynxxc6LXVBWLTxYCs4PXuPhJgMaNFEDj4We90e1sBtGZdmZeSj4STYCom21z0%2FKYuqj1ccrdNoGV2RXBHGN9HztXJ86e6qNAYR6u5XV4KFqsy7VFQFxINQAXe5cjDQeZeNhqa7gjCB1RS27ny8PcrLi9ZHofhVSzNbOvMa3P%2FZT5e8DHM%2FCisNokHN3FAFYnHA7kbIRrwV6hWYmev79tfiletV54hC5ykv3nX%2BnVnJgh9xim0f7K2pHH885f1rk5N7ArT4DQ%2BQ9qCzUtV5wlBjfNIQFXZbI8oiOWkGxptgB74lQkpmNr%2BFoFwjzRSZcJcLLljlcXVezQ88zbFCXyZfu7Myl8SVeifSr4Zeti7FGs8aBmctR87xRVeYbm1l8LpLYfCs8gfAeoJXnkjHL936OqqdYOA%2FYTJD0SscAb5KHoGVZ1kdmew1TIsNgUGuIxhXrxN7MNr1qsMGOqUBPHX4opjTn9JyOjp125jR%2FF9IRhxXzvaUhQx0rPtPiWA81JPrX4GNVeayirxX5AvACnpHCYNpr8Fk67SY114dP40XC0efhZ3MllRUpNfRQFAs5dTtRZ5Z3AHnKo%2ByYmT%2FhgLpwMd2tPMp6gOAuus5Q%2F5fN7RDBz5w2mrl%2FspB6zIozKsS5EkZ7XxmXBNCLp0CM5yw1DLvNaRzHFLOkxtZs%2F7bl6s%2F&X-Amz-Signature=8c15cd7cb28227431779481c3f7083821059f07052379d58ac58d587b42a2af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
