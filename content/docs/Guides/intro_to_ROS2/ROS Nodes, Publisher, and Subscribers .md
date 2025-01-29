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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46RC2GQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2WI1v0Fsn2A7yyAYchvk4RD3QTFO9t3%2Fy0eEAzVtN%2BAiEArYbXyM%2FS3zLkn3iisjEOiR5ugnx6l3VRHmRP4iwaAxsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2B5NFWClZ0P98QnbCrcA2COT6lPHsOACXrFh3gJB76BLf9j0L%2BQqLwiANzf%2Bz2uyAHnr3ZQpgkDJ5d9JUpLcw5EshPE2BXPm1ZIcY10n6eJJ4dkdREjrae%2FWT5PRLVfZPNGFT1h9pukLRpGcJF06Ougw6NMQ1BQZL%2BrNh0zuWM%2FRWJlNd4wc07Oty3HuFW%2FtggMROp3CFv36ICX0b%2Fgj6UNnT9ZEID6LVmeLzuTJ7%2F2Vko6wGvqfuAmD4P2ScJVcNCdSDIJ3wsrQS0hdeNXoGXBcceejcgN93BwtwJyCaIfWSgqje%2FhT38M2B%2BaU4bIERPcalkDZaorbw0kHDSPI65cFLV%2FJEbQu%2BBOq0o4CvWlFqOtheAHjdPpS4L6HJFYltC1n5Hrh34H0SOSILWQp0vDuVtqGjuHzUYmiQtJ2NNUM3i9m7fpKl3%2FWsur%2FVt%2BKPDTdxAL5NkOBhMbJxZKmWq2KfZUQNSFd3wKhQz6XKECrEi%2FgIu2EPUqiwqJuihV%2FNIUmTBOltcY9cOtHO%2Bja5UCI1oTPX9TfOoXWnJHQltzJm9aZFO81Tbh1r4l24n2jKrrWLgnocfID%2BiLddvD5Q%2BCAxG%2FT7EwkptO3KT1AQ51KjW7a3T51z7mXtIMtssogykoVawRb48M6cOxMILG6rwGOqUBJUITYdT9InOiQfGEdtai%2Bu0CzmIVs7t25iF1aK9%2BA%2F221E60CAo1aC0HruDOmcztDEA6aAH7MBTzevugyBgYQkSpCQU1unPpyn4wd%2BqvKWTgqrQqz5qu2pdbq1m%2FYf3ELuOLK%2BlcugSjMIZcm%2FUBUJbl%2FspfN1pLvZCnG5LKeTGERw1Bt8cWgMxhM64rxtBzk3Ke7cruXCJd1bkLDZaOKYP7Fdt8&X-Amz-Signature=f6db4250a7b843e0f30678321990371eab4c02fc55d26490550044397c05b171&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46RC2GQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2WI1v0Fsn2A7yyAYchvk4RD3QTFO9t3%2Fy0eEAzVtN%2BAiEArYbXyM%2FS3zLkn3iisjEOiR5ugnx6l3VRHmRP4iwaAxsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2B5NFWClZ0P98QnbCrcA2COT6lPHsOACXrFh3gJB76BLf9j0L%2BQqLwiANzf%2Bz2uyAHnr3ZQpgkDJ5d9JUpLcw5EshPE2BXPm1ZIcY10n6eJJ4dkdREjrae%2FWT5PRLVfZPNGFT1h9pukLRpGcJF06Ougw6NMQ1BQZL%2BrNh0zuWM%2FRWJlNd4wc07Oty3HuFW%2FtggMROp3CFv36ICX0b%2Fgj6UNnT9ZEID6LVmeLzuTJ7%2F2Vko6wGvqfuAmD4P2ScJVcNCdSDIJ3wsrQS0hdeNXoGXBcceejcgN93BwtwJyCaIfWSgqje%2FhT38M2B%2BaU4bIERPcalkDZaorbw0kHDSPI65cFLV%2FJEbQu%2BBOq0o4CvWlFqOtheAHjdPpS4L6HJFYltC1n5Hrh34H0SOSILWQp0vDuVtqGjuHzUYmiQtJ2NNUM3i9m7fpKl3%2FWsur%2FVt%2BKPDTdxAL5NkOBhMbJxZKmWq2KfZUQNSFd3wKhQz6XKECrEi%2FgIu2EPUqiwqJuihV%2FNIUmTBOltcY9cOtHO%2Bja5UCI1oTPX9TfOoXWnJHQltzJm9aZFO81Tbh1r4l24n2jKrrWLgnocfID%2BiLddvD5Q%2BCAxG%2FT7EwkptO3KT1AQ51KjW7a3T51z7mXtIMtssogykoVawRb48M6cOxMILG6rwGOqUBJUITYdT9InOiQfGEdtai%2Bu0CzmIVs7t25iF1aK9%2BA%2F221E60CAo1aC0HruDOmcztDEA6aAH7MBTzevugyBgYQkSpCQU1unPpyn4wd%2BqvKWTgqrQqz5qu2pdbq1m%2FYf3ELuOLK%2BlcugSjMIZcm%2FUBUJbl%2FspfN1pLvZCnG5LKeTGERw1Bt8cWgMxhM64rxtBzk3Ke7cruXCJd1bkLDZaOKYP7Fdt8&X-Amz-Signature=7d8981130550fd1e658c2272eb126ca869699a8ce728603afc127dbda21a265c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46RC2GQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2WI1v0Fsn2A7yyAYchvk4RD3QTFO9t3%2Fy0eEAzVtN%2BAiEArYbXyM%2FS3zLkn3iisjEOiR5ugnx6l3VRHmRP4iwaAxsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2B5NFWClZ0P98QnbCrcA2COT6lPHsOACXrFh3gJB76BLf9j0L%2BQqLwiANzf%2Bz2uyAHnr3ZQpgkDJ5d9JUpLcw5EshPE2BXPm1ZIcY10n6eJJ4dkdREjrae%2FWT5PRLVfZPNGFT1h9pukLRpGcJF06Ougw6NMQ1BQZL%2BrNh0zuWM%2FRWJlNd4wc07Oty3HuFW%2FtggMROp3CFv36ICX0b%2Fgj6UNnT9ZEID6LVmeLzuTJ7%2F2Vko6wGvqfuAmD4P2ScJVcNCdSDIJ3wsrQS0hdeNXoGXBcceejcgN93BwtwJyCaIfWSgqje%2FhT38M2B%2BaU4bIERPcalkDZaorbw0kHDSPI65cFLV%2FJEbQu%2BBOq0o4CvWlFqOtheAHjdPpS4L6HJFYltC1n5Hrh34H0SOSILWQp0vDuVtqGjuHzUYmiQtJ2NNUM3i9m7fpKl3%2FWsur%2FVt%2BKPDTdxAL5NkOBhMbJxZKmWq2KfZUQNSFd3wKhQz6XKECrEi%2FgIu2EPUqiwqJuihV%2FNIUmTBOltcY9cOtHO%2Bja5UCI1oTPX9TfOoXWnJHQltzJm9aZFO81Tbh1r4l24n2jKrrWLgnocfID%2BiLddvD5Q%2BCAxG%2FT7EwkptO3KT1AQ51KjW7a3T51z7mXtIMtssogykoVawRb48M6cOxMILG6rwGOqUBJUITYdT9InOiQfGEdtai%2Bu0CzmIVs7t25iF1aK9%2BA%2F221E60CAo1aC0HruDOmcztDEA6aAH7MBTzevugyBgYQkSpCQU1unPpyn4wd%2BqvKWTgqrQqz5qu2pdbq1m%2FYf3ELuOLK%2BlcugSjMIZcm%2FUBUJbl%2FspfN1pLvZCnG5LKeTGERw1Bt8cWgMxhM64rxtBzk3Ke7cruXCJd1bkLDZaOKYP7Fdt8&X-Amz-Signature=bfa8b291d8e47dd6abf94872e8dd25c9771259a859a7ae549bcda6fde76fa505&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46RC2GQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2WI1v0Fsn2A7yyAYchvk4RD3QTFO9t3%2Fy0eEAzVtN%2BAiEArYbXyM%2FS3zLkn3iisjEOiR5ugnx6l3VRHmRP4iwaAxsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2B5NFWClZ0P98QnbCrcA2COT6lPHsOACXrFh3gJB76BLf9j0L%2BQqLwiANzf%2Bz2uyAHnr3ZQpgkDJ5d9JUpLcw5EshPE2BXPm1ZIcY10n6eJJ4dkdREjrae%2FWT5PRLVfZPNGFT1h9pukLRpGcJF06Ougw6NMQ1BQZL%2BrNh0zuWM%2FRWJlNd4wc07Oty3HuFW%2FtggMROp3CFv36ICX0b%2Fgj6UNnT9ZEID6LVmeLzuTJ7%2F2Vko6wGvqfuAmD4P2ScJVcNCdSDIJ3wsrQS0hdeNXoGXBcceejcgN93BwtwJyCaIfWSgqje%2FhT38M2B%2BaU4bIERPcalkDZaorbw0kHDSPI65cFLV%2FJEbQu%2BBOq0o4CvWlFqOtheAHjdPpS4L6HJFYltC1n5Hrh34H0SOSILWQp0vDuVtqGjuHzUYmiQtJ2NNUM3i9m7fpKl3%2FWsur%2FVt%2BKPDTdxAL5NkOBhMbJxZKmWq2KfZUQNSFd3wKhQz6XKECrEi%2FgIu2EPUqiwqJuihV%2FNIUmTBOltcY9cOtHO%2Bja5UCI1oTPX9TfOoXWnJHQltzJm9aZFO81Tbh1r4l24n2jKrrWLgnocfID%2BiLddvD5Q%2BCAxG%2FT7EwkptO3KT1AQ51KjW7a3T51z7mXtIMtssogykoVawRb48M6cOxMILG6rwGOqUBJUITYdT9InOiQfGEdtai%2Bu0CzmIVs7t25iF1aK9%2BA%2F221E60CAo1aC0HruDOmcztDEA6aAH7MBTzevugyBgYQkSpCQU1unPpyn4wd%2BqvKWTgqrQqz5qu2pdbq1m%2FYf3ELuOLK%2BlcugSjMIZcm%2FUBUJbl%2FspfN1pLvZCnG5LKeTGERw1Bt8cWgMxhM64rxtBzk3Ke7cruXCJd1bkLDZaOKYP7Fdt8&X-Amz-Signature=56f7f505172abd5816d6c1328de32f355139a1dadaa7319eae69b610c450e22b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46RC2GQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2WI1v0Fsn2A7yyAYchvk4RD3QTFO9t3%2Fy0eEAzVtN%2BAiEArYbXyM%2FS3zLkn3iisjEOiR5ugnx6l3VRHmRP4iwaAxsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2B5NFWClZ0P98QnbCrcA2COT6lPHsOACXrFh3gJB76BLf9j0L%2BQqLwiANzf%2Bz2uyAHnr3ZQpgkDJ5d9JUpLcw5EshPE2BXPm1ZIcY10n6eJJ4dkdREjrae%2FWT5PRLVfZPNGFT1h9pukLRpGcJF06Ougw6NMQ1BQZL%2BrNh0zuWM%2FRWJlNd4wc07Oty3HuFW%2FtggMROp3CFv36ICX0b%2Fgj6UNnT9ZEID6LVmeLzuTJ7%2F2Vko6wGvqfuAmD4P2ScJVcNCdSDIJ3wsrQS0hdeNXoGXBcceejcgN93BwtwJyCaIfWSgqje%2FhT38M2B%2BaU4bIERPcalkDZaorbw0kHDSPI65cFLV%2FJEbQu%2BBOq0o4CvWlFqOtheAHjdPpS4L6HJFYltC1n5Hrh34H0SOSILWQp0vDuVtqGjuHzUYmiQtJ2NNUM3i9m7fpKl3%2FWsur%2FVt%2BKPDTdxAL5NkOBhMbJxZKmWq2KfZUQNSFd3wKhQz6XKECrEi%2FgIu2EPUqiwqJuihV%2FNIUmTBOltcY9cOtHO%2Bja5UCI1oTPX9TfOoXWnJHQltzJm9aZFO81Tbh1r4l24n2jKrrWLgnocfID%2BiLddvD5Q%2BCAxG%2FT7EwkptO3KT1AQ51KjW7a3T51z7mXtIMtssogykoVawRb48M6cOxMILG6rwGOqUBJUITYdT9InOiQfGEdtai%2Bu0CzmIVs7t25iF1aK9%2BA%2F221E60CAo1aC0HruDOmcztDEA6aAH7MBTzevugyBgYQkSpCQU1unPpyn4wd%2BqvKWTgqrQqz5qu2pdbq1m%2FYf3ELuOLK%2BlcugSjMIZcm%2FUBUJbl%2FspfN1pLvZCnG5LKeTGERw1Bt8cWgMxhM64rxtBzk3Ke7cruXCJd1bkLDZaOKYP7Fdt8&X-Amz-Signature=d9954c5bd616e2563ae62b140855ebd6933f6b70fb91773a215e7c9ea0c44208&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46RC2GQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2WI1v0Fsn2A7yyAYchvk4RD3QTFO9t3%2Fy0eEAzVtN%2BAiEArYbXyM%2FS3zLkn3iisjEOiR5ugnx6l3VRHmRP4iwaAxsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2B5NFWClZ0P98QnbCrcA2COT6lPHsOACXrFh3gJB76BLf9j0L%2BQqLwiANzf%2Bz2uyAHnr3ZQpgkDJ5d9JUpLcw5EshPE2BXPm1ZIcY10n6eJJ4dkdREjrae%2FWT5PRLVfZPNGFT1h9pukLRpGcJF06Ougw6NMQ1BQZL%2BrNh0zuWM%2FRWJlNd4wc07Oty3HuFW%2FtggMROp3CFv36ICX0b%2Fgj6UNnT9ZEID6LVmeLzuTJ7%2F2Vko6wGvqfuAmD4P2ScJVcNCdSDIJ3wsrQS0hdeNXoGXBcceejcgN93BwtwJyCaIfWSgqje%2FhT38M2B%2BaU4bIERPcalkDZaorbw0kHDSPI65cFLV%2FJEbQu%2BBOq0o4CvWlFqOtheAHjdPpS4L6HJFYltC1n5Hrh34H0SOSILWQp0vDuVtqGjuHzUYmiQtJ2NNUM3i9m7fpKl3%2FWsur%2FVt%2BKPDTdxAL5NkOBhMbJxZKmWq2KfZUQNSFd3wKhQz6XKECrEi%2FgIu2EPUqiwqJuihV%2FNIUmTBOltcY9cOtHO%2Bja5UCI1oTPX9TfOoXWnJHQltzJm9aZFO81Tbh1r4l24n2jKrrWLgnocfID%2BiLddvD5Q%2BCAxG%2FT7EwkptO3KT1AQ51KjW7a3T51z7mXtIMtssogykoVawRb48M6cOxMILG6rwGOqUBJUITYdT9InOiQfGEdtai%2Bu0CzmIVs7t25iF1aK9%2BA%2F221E60CAo1aC0HruDOmcztDEA6aAH7MBTzevugyBgYQkSpCQU1unPpyn4wd%2BqvKWTgqrQqz5qu2pdbq1m%2FYf3ELuOLK%2BlcugSjMIZcm%2FUBUJbl%2FspfN1pLvZCnG5LKeTGERw1Bt8cWgMxhM64rxtBzk3Ke7cruXCJd1bkLDZaOKYP7Fdt8&X-Amz-Signature=dd904e9cd45da4689691ad37666d9285528dc6f602bee30c05b391730ac0f06a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46RC2GQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2WI1v0Fsn2A7yyAYchvk4RD3QTFO9t3%2Fy0eEAzVtN%2BAiEArYbXyM%2FS3zLkn3iisjEOiR5ugnx6l3VRHmRP4iwaAxsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2B5NFWClZ0P98QnbCrcA2COT6lPHsOACXrFh3gJB76BLf9j0L%2BQqLwiANzf%2Bz2uyAHnr3ZQpgkDJ5d9JUpLcw5EshPE2BXPm1ZIcY10n6eJJ4dkdREjrae%2FWT5PRLVfZPNGFT1h9pukLRpGcJF06Ougw6NMQ1BQZL%2BrNh0zuWM%2FRWJlNd4wc07Oty3HuFW%2FtggMROp3CFv36ICX0b%2Fgj6UNnT9ZEID6LVmeLzuTJ7%2F2Vko6wGvqfuAmD4P2ScJVcNCdSDIJ3wsrQS0hdeNXoGXBcceejcgN93BwtwJyCaIfWSgqje%2FhT38M2B%2BaU4bIERPcalkDZaorbw0kHDSPI65cFLV%2FJEbQu%2BBOq0o4CvWlFqOtheAHjdPpS4L6HJFYltC1n5Hrh34H0SOSILWQp0vDuVtqGjuHzUYmiQtJ2NNUM3i9m7fpKl3%2FWsur%2FVt%2BKPDTdxAL5NkOBhMbJxZKmWq2KfZUQNSFd3wKhQz6XKECrEi%2FgIu2EPUqiwqJuihV%2FNIUmTBOltcY9cOtHO%2Bja5UCI1oTPX9TfOoXWnJHQltzJm9aZFO81Tbh1r4l24n2jKrrWLgnocfID%2BiLddvD5Q%2BCAxG%2FT7EwkptO3KT1AQ51KjW7a3T51z7mXtIMtssogykoVawRb48M6cOxMILG6rwGOqUBJUITYdT9InOiQfGEdtai%2Bu0CzmIVs7t25iF1aK9%2BA%2F221E60CAo1aC0HruDOmcztDEA6aAH7MBTzevugyBgYQkSpCQU1unPpyn4wd%2BqvKWTgqrQqz5qu2pdbq1m%2FYf3ELuOLK%2BlcugSjMIZcm%2FUBUJbl%2FspfN1pLvZCnG5LKeTGERw1Bt8cWgMxhM64rxtBzk3Ke7cruXCJd1bkLDZaOKYP7Fdt8&X-Amz-Signature=4bbe427d37c1ff3854a2592c0c217fc1f954b6fb8bff6f185d695c9dddfff4f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46RC2GQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2WI1v0Fsn2A7yyAYchvk4RD3QTFO9t3%2Fy0eEAzVtN%2BAiEArYbXyM%2FS3zLkn3iisjEOiR5ugnx6l3VRHmRP4iwaAxsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2B5NFWClZ0P98QnbCrcA2COT6lPHsOACXrFh3gJB76BLf9j0L%2BQqLwiANzf%2Bz2uyAHnr3ZQpgkDJ5d9JUpLcw5EshPE2BXPm1ZIcY10n6eJJ4dkdREjrae%2FWT5PRLVfZPNGFT1h9pukLRpGcJF06Ougw6NMQ1BQZL%2BrNh0zuWM%2FRWJlNd4wc07Oty3HuFW%2FtggMROp3CFv36ICX0b%2Fgj6UNnT9ZEID6LVmeLzuTJ7%2F2Vko6wGvqfuAmD4P2ScJVcNCdSDIJ3wsrQS0hdeNXoGXBcceejcgN93BwtwJyCaIfWSgqje%2FhT38M2B%2BaU4bIERPcalkDZaorbw0kHDSPI65cFLV%2FJEbQu%2BBOq0o4CvWlFqOtheAHjdPpS4L6HJFYltC1n5Hrh34H0SOSILWQp0vDuVtqGjuHzUYmiQtJ2NNUM3i9m7fpKl3%2FWsur%2FVt%2BKPDTdxAL5NkOBhMbJxZKmWq2KfZUQNSFd3wKhQz6XKECrEi%2FgIu2EPUqiwqJuihV%2FNIUmTBOltcY9cOtHO%2Bja5UCI1oTPX9TfOoXWnJHQltzJm9aZFO81Tbh1r4l24n2jKrrWLgnocfID%2BiLddvD5Q%2BCAxG%2FT7EwkptO3KT1AQ51KjW7a3T51z7mXtIMtssogykoVawRb48M6cOxMILG6rwGOqUBJUITYdT9InOiQfGEdtai%2Bu0CzmIVs7t25iF1aK9%2BA%2F221E60CAo1aC0HruDOmcztDEA6aAH7MBTzevugyBgYQkSpCQU1unPpyn4wd%2BqvKWTgqrQqz5qu2pdbq1m%2FYf3ELuOLK%2BlcugSjMIZcm%2FUBUJbl%2FspfN1pLvZCnG5LKeTGERw1Bt8cWgMxhM64rxtBzk3Ke7cruXCJd1bkLDZaOKYP7Fdt8&X-Amz-Signature=b27ac8e652c1a34fc84e43b87e46a22ffd642024b521f39e04a5f1fea3b9ed61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
