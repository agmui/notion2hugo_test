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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMIFUMZ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIDwXb7m7W2BKQQgwD1miw4hjE7POzLf79aA1rZDuUVrDAiEAmhZE2MegIxOrUZ6sxnRb586XWHazh%2B11jyrVBDHQtzkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiV0nKhUBRL9tuQsCrcA0IOFiK35cnMG%2F9SrPJ7KrG0rSWzpb2PKs2%2FdKaJ6MQAHqaTw6vVDnlVZBkffdhA2yG3xGaNnkPvAzQEKOZyWD4phD8fhVzhr48F618AxTUxxHWq3mWiG6ecSa4rsMULVbHXQoB%2FbKS7VZ373zWTERYMduXLMpHPb4Jen1ybq1bUhpyoXfO1rKnwRwQKZ4GJap2B2p3prYSPwkUXf8642%2Fgid0e%2BbbSCeC60CjrrtHVzuBoPSZ9IHOTORJmNn220eqxMaSLqKeFUCge7RLjvLYxCl6I7M9nTJvGTws%2BHx3j19oXbFuWnLXb%2FUNgr7vpBcySBwB%2BSks57Sjh9z9nIjj%2B3wiblcV0A4hi6VLsz%2B3RuDpeBSQfrIuv1qR0aocp0OqAbGc0Hu26%2Fj70C36wXFr6cHZ69G9t7Cpl5R5kZib%2BSS3tnMVfyBqOWnoSWKvPB8H4bv8x8hoG4DpwK5GGasrcWytL6kgghC2RqwEX%2FxrnUg1kYbwZfEF8j8s%2Bsx0EIyRDvpi047hZC4qRUBJYjWxCKuNhUN83XPaFjwCzqZBSmxMGTB87w0u0AohFyUcmI0cEVMV7qSRtAtFh9G6NhjQByrf1YadmgGTluGUnz3TpqxPN3LMALUA%2FBHHuQMMPYwcEGOqUBxEz5MdZmtKklrP5%2BtG%2BF7q4C9QEeSBi9xnObRKlVQ%2FHjQ0jiSVpZ6VU2VKWNofCZ2lXUXV3IRpLUbL1L2IgIk840JEm3Ccxj6724gGCJky40mgIlA3xW8effYeV7cW9FHMsozhLh%2B8kmCT%2BEZ3PBWJCdie9%2BCYV5ocvu0YWaZ3hRna6gWMBQJK2RkE5agY512PsXAc7TuyEx5kMp%2BMFHiQ64ahMY&X-Amz-Signature=cd3e1f454ed5b61dc43ce3727175f48dc48d51f9dd8f85472c31e18e5b05ba22&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMIFUMZ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIDwXb7m7W2BKQQgwD1miw4hjE7POzLf79aA1rZDuUVrDAiEAmhZE2MegIxOrUZ6sxnRb586XWHazh%2B11jyrVBDHQtzkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiV0nKhUBRL9tuQsCrcA0IOFiK35cnMG%2F9SrPJ7KrG0rSWzpb2PKs2%2FdKaJ6MQAHqaTw6vVDnlVZBkffdhA2yG3xGaNnkPvAzQEKOZyWD4phD8fhVzhr48F618AxTUxxHWq3mWiG6ecSa4rsMULVbHXQoB%2FbKS7VZ373zWTERYMduXLMpHPb4Jen1ybq1bUhpyoXfO1rKnwRwQKZ4GJap2B2p3prYSPwkUXf8642%2Fgid0e%2BbbSCeC60CjrrtHVzuBoPSZ9IHOTORJmNn220eqxMaSLqKeFUCge7RLjvLYxCl6I7M9nTJvGTws%2BHx3j19oXbFuWnLXb%2FUNgr7vpBcySBwB%2BSks57Sjh9z9nIjj%2B3wiblcV0A4hi6VLsz%2B3RuDpeBSQfrIuv1qR0aocp0OqAbGc0Hu26%2Fj70C36wXFr6cHZ69G9t7Cpl5R5kZib%2BSS3tnMVfyBqOWnoSWKvPB8H4bv8x8hoG4DpwK5GGasrcWytL6kgghC2RqwEX%2FxrnUg1kYbwZfEF8j8s%2Bsx0EIyRDvpi047hZC4qRUBJYjWxCKuNhUN83XPaFjwCzqZBSmxMGTB87w0u0AohFyUcmI0cEVMV7qSRtAtFh9G6NhjQByrf1YadmgGTluGUnz3TpqxPN3LMALUA%2FBHHuQMMPYwcEGOqUBxEz5MdZmtKklrP5%2BtG%2BF7q4C9QEeSBi9xnObRKlVQ%2FHjQ0jiSVpZ6VU2VKWNofCZ2lXUXV3IRpLUbL1L2IgIk840JEm3Ccxj6724gGCJky40mgIlA3xW8effYeV7cW9FHMsozhLh%2B8kmCT%2BEZ3PBWJCdie9%2BCYV5ocvu0YWaZ3hRna6gWMBQJK2RkE5agY512PsXAc7TuyEx5kMp%2BMFHiQ64ahMY&X-Amz-Signature=5e5c7131f89e130f77f7cf9c6db39cd0776eca8408822046285374694e43ed1b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMIFUMZ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIDwXb7m7W2BKQQgwD1miw4hjE7POzLf79aA1rZDuUVrDAiEAmhZE2MegIxOrUZ6sxnRb586XWHazh%2B11jyrVBDHQtzkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiV0nKhUBRL9tuQsCrcA0IOFiK35cnMG%2F9SrPJ7KrG0rSWzpb2PKs2%2FdKaJ6MQAHqaTw6vVDnlVZBkffdhA2yG3xGaNnkPvAzQEKOZyWD4phD8fhVzhr48F618AxTUxxHWq3mWiG6ecSa4rsMULVbHXQoB%2FbKS7VZ373zWTERYMduXLMpHPb4Jen1ybq1bUhpyoXfO1rKnwRwQKZ4GJap2B2p3prYSPwkUXf8642%2Fgid0e%2BbbSCeC60CjrrtHVzuBoPSZ9IHOTORJmNn220eqxMaSLqKeFUCge7RLjvLYxCl6I7M9nTJvGTws%2BHx3j19oXbFuWnLXb%2FUNgr7vpBcySBwB%2BSks57Sjh9z9nIjj%2B3wiblcV0A4hi6VLsz%2B3RuDpeBSQfrIuv1qR0aocp0OqAbGc0Hu26%2Fj70C36wXFr6cHZ69G9t7Cpl5R5kZib%2BSS3tnMVfyBqOWnoSWKvPB8H4bv8x8hoG4DpwK5GGasrcWytL6kgghC2RqwEX%2FxrnUg1kYbwZfEF8j8s%2Bsx0EIyRDvpi047hZC4qRUBJYjWxCKuNhUN83XPaFjwCzqZBSmxMGTB87w0u0AohFyUcmI0cEVMV7qSRtAtFh9G6NhjQByrf1YadmgGTluGUnz3TpqxPN3LMALUA%2FBHHuQMMPYwcEGOqUBxEz5MdZmtKklrP5%2BtG%2BF7q4C9QEeSBi9xnObRKlVQ%2FHjQ0jiSVpZ6VU2VKWNofCZ2lXUXV3IRpLUbL1L2IgIk840JEm3Ccxj6724gGCJky40mgIlA3xW8effYeV7cW9FHMsozhLh%2B8kmCT%2BEZ3PBWJCdie9%2BCYV5ocvu0YWaZ3hRna6gWMBQJK2RkE5agY512PsXAc7TuyEx5kMp%2BMFHiQ64ahMY&X-Amz-Signature=4ec903975fcff782be5a395e5f5abfc95a45fd08a77eb3d635ceb5a6dfc89ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMIFUMZ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIDwXb7m7W2BKQQgwD1miw4hjE7POzLf79aA1rZDuUVrDAiEAmhZE2MegIxOrUZ6sxnRb586XWHazh%2B11jyrVBDHQtzkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiV0nKhUBRL9tuQsCrcA0IOFiK35cnMG%2F9SrPJ7KrG0rSWzpb2PKs2%2FdKaJ6MQAHqaTw6vVDnlVZBkffdhA2yG3xGaNnkPvAzQEKOZyWD4phD8fhVzhr48F618AxTUxxHWq3mWiG6ecSa4rsMULVbHXQoB%2FbKS7VZ373zWTERYMduXLMpHPb4Jen1ybq1bUhpyoXfO1rKnwRwQKZ4GJap2B2p3prYSPwkUXf8642%2Fgid0e%2BbbSCeC60CjrrtHVzuBoPSZ9IHOTORJmNn220eqxMaSLqKeFUCge7RLjvLYxCl6I7M9nTJvGTws%2BHx3j19oXbFuWnLXb%2FUNgr7vpBcySBwB%2BSks57Sjh9z9nIjj%2B3wiblcV0A4hi6VLsz%2B3RuDpeBSQfrIuv1qR0aocp0OqAbGc0Hu26%2Fj70C36wXFr6cHZ69G9t7Cpl5R5kZib%2BSS3tnMVfyBqOWnoSWKvPB8H4bv8x8hoG4DpwK5GGasrcWytL6kgghC2RqwEX%2FxrnUg1kYbwZfEF8j8s%2Bsx0EIyRDvpi047hZC4qRUBJYjWxCKuNhUN83XPaFjwCzqZBSmxMGTB87w0u0AohFyUcmI0cEVMV7qSRtAtFh9G6NhjQByrf1YadmgGTluGUnz3TpqxPN3LMALUA%2FBHHuQMMPYwcEGOqUBxEz5MdZmtKklrP5%2BtG%2BF7q4C9QEeSBi9xnObRKlVQ%2FHjQ0jiSVpZ6VU2VKWNofCZ2lXUXV3IRpLUbL1L2IgIk840JEm3Ccxj6724gGCJky40mgIlA3xW8effYeV7cW9FHMsozhLh%2B8kmCT%2BEZ3PBWJCdie9%2BCYV5ocvu0YWaZ3hRna6gWMBQJK2RkE5agY512PsXAc7TuyEx5kMp%2BMFHiQ64ahMY&X-Amz-Signature=dceb216159cbfaef61b688e4ed2c5bb618a9a3187384bc7c3deba9a67256cad8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMIFUMZ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIDwXb7m7W2BKQQgwD1miw4hjE7POzLf79aA1rZDuUVrDAiEAmhZE2MegIxOrUZ6sxnRb586XWHazh%2B11jyrVBDHQtzkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiV0nKhUBRL9tuQsCrcA0IOFiK35cnMG%2F9SrPJ7KrG0rSWzpb2PKs2%2FdKaJ6MQAHqaTw6vVDnlVZBkffdhA2yG3xGaNnkPvAzQEKOZyWD4phD8fhVzhr48F618AxTUxxHWq3mWiG6ecSa4rsMULVbHXQoB%2FbKS7VZ373zWTERYMduXLMpHPb4Jen1ybq1bUhpyoXfO1rKnwRwQKZ4GJap2B2p3prYSPwkUXf8642%2Fgid0e%2BbbSCeC60CjrrtHVzuBoPSZ9IHOTORJmNn220eqxMaSLqKeFUCge7RLjvLYxCl6I7M9nTJvGTws%2BHx3j19oXbFuWnLXb%2FUNgr7vpBcySBwB%2BSks57Sjh9z9nIjj%2B3wiblcV0A4hi6VLsz%2B3RuDpeBSQfrIuv1qR0aocp0OqAbGc0Hu26%2Fj70C36wXFr6cHZ69G9t7Cpl5R5kZib%2BSS3tnMVfyBqOWnoSWKvPB8H4bv8x8hoG4DpwK5GGasrcWytL6kgghC2RqwEX%2FxrnUg1kYbwZfEF8j8s%2Bsx0EIyRDvpi047hZC4qRUBJYjWxCKuNhUN83XPaFjwCzqZBSmxMGTB87w0u0AohFyUcmI0cEVMV7qSRtAtFh9G6NhjQByrf1YadmgGTluGUnz3TpqxPN3LMALUA%2FBHHuQMMPYwcEGOqUBxEz5MdZmtKklrP5%2BtG%2BF7q4C9QEeSBi9xnObRKlVQ%2FHjQ0jiSVpZ6VU2VKWNofCZ2lXUXV3IRpLUbL1L2IgIk840JEm3Ccxj6724gGCJky40mgIlA3xW8effYeV7cW9FHMsozhLh%2B8kmCT%2BEZ3PBWJCdie9%2BCYV5ocvu0YWaZ3hRna6gWMBQJK2RkE5agY512PsXAc7TuyEx5kMp%2BMFHiQ64ahMY&X-Amz-Signature=cf17ee4f18ba11ed4c7d7ef3606276f2e54cbe53b6bc60750983d9d7458d0147&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMIFUMZ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIDwXb7m7W2BKQQgwD1miw4hjE7POzLf79aA1rZDuUVrDAiEAmhZE2MegIxOrUZ6sxnRb586XWHazh%2B11jyrVBDHQtzkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiV0nKhUBRL9tuQsCrcA0IOFiK35cnMG%2F9SrPJ7KrG0rSWzpb2PKs2%2FdKaJ6MQAHqaTw6vVDnlVZBkffdhA2yG3xGaNnkPvAzQEKOZyWD4phD8fhVzhr48F618AxTUxxHWq3mWiG6ecSa4rsMULVbHXQoB%2FbKS7VZ373zWTERYMduXLMpHPb4Jen1ybq1bUhpyoXfO1rKnwRwQKZ4GJap2B2p3prYSPwkUXf8642%2Fgid0e%2BbbSCeC60CjrrtHVzuBoPSZ9IHOTORJmNn220eqxMaSLqKeFUCge7RLjvLYxCl6I7M9nTJvGTws%2BHx3j19oXbFuWnLXb%2FUNgr7vpBcySBwB%2BSks57Sjh9z9nIjj%2B3wiblcV0A4hi6VLsz%2B3RuDpeBSQfrIuv1qR0aocp0OqAbGc0Hu26%2Fj70C36wXFr6cHZ69G9t7Cpl5R5kZib%2BSS3tnMVfyBqOWnoSWKvPB8H4bv8x8hoG4DpwK5GGasrcWytL6kgghC2RqwEX%2FxrnUg1kYbwZfEF8j8s%2Bsx0EIyRDvpi047hZC4qRUBJYjWxCKuNhUN83XPaFjwCzqZBSmxMGTB87w0u0AohFyUcmI0cEVMV7qSRtAtFh9G6NhjQByrf1YadmgGTluGUnz3TpqxPN3LMALUA%2FBHHuQMMPYwcEGOqUBxEz5MdZmtKklrP5%2BtG%2BF7q4C9QEeSBi9xnObRKlVQ%2FHjQ0jiSVpZ6VU2VKWNofCZ2lXUXV3IRpLUbL1L2IgIk840JEm3Ccxj6724gGCJky40mgIlA3xW8effYeV7cW9FHMsozhLh%2B8kmCT%2BEZ3PBWJCdie9%2BCYV5ocvu0YWaZ3hRna6gWMBQJK2RkE5agY512PsXAc7TuyEx5kMp%2BMFHiQ64ahMY&X-Amz-Signature=7ed7fcb64dc969b29829a7ceda80abebb31cd5ce733c2905be28f115c12dac9b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMIFUMZ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIDwXb7m7W2BKQQgwD1miw4hjE7POzLf79aA1rZDuUVrDAiEAmhZE2MegIxOrUZ6sxnRb586XWHazh%2B11jyrVBDHQtzkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiV0nKhUBRL9tuQsCrcA0IOFiK35cnMG%2F9SrPJ7KrG0rSWzpb2PKs2%2FdKaJ6MQAHqaTw6vVDnlVZBkffdhA2yG3xGaNnkPvAzQEKOZyWD4phD8fhVzhr48F618AxTUxxHWq3mWiG6ecSa4rsMULVbHXQoB%2FbKS7VZ373zWTERYMduXLMpHPb4Jen1ybq1bUhpyoXfO1rKnwRwQKZ4GJap2B2p3prYSPwkUXf8642%2Fgid0e%2BbbSCeC60CjrrtHVzuBoPSZ9IHOTORJmNn220eqxMaSLqKeFUCge7RLjvLYxCl6I7M9nTJvGTws%2BHx3j19oXbFuWnLXb%2FUNgr7vpBcySBwB%2BSks57Sjh9z9nIjj%2B3wiblcV0A4hi6VLsz%2B3RuDpeBSQfrIuv1qR0aocp0OqAbGc0Hu26%2Fj70C36wXFr6cHZ69G9t7Cpl5R5kZib%2BSS3tnMVfyBqOWnoSWKvPB8H4bv8x8hoG4DpwK5GGasrcWytL6kgghC2RqwEX%2FxrnUg1kYbwZfEF8j8s%2Bsx0EIyRDvpi047hZC4qRUBJYjWxCKuNhUN83XPaFjwCzqZBSmxMGTB87w0u0AohFyUcmI0cEVMV7qSRtAtFh9G6NhjQByrf1YadmgGTluGUnz3TpqxPN3LMALUA%2FBHHuQMMPYwcEGOqUBxEz5MdZmtKklrP5%2BtG%2BF7q4C9QEeSBi9xnObRKlVQ%2FHjQ0jiSVpZ6VU2VKWNofCZ2lXUXV3IRpLUbL1L2IgIk840JEm3Ccxj6724gGCJky40mgIlA3xW8effYeV7cW9FHMsozhLh%2B8kmCT%2BEZ3PBWJCdie9%2BCYV5ocvu0YWaZ3hRna6gWMBQJK2RkE5agY512PsXAc7TuyEx5kMp%2BMFHiQ64ahMY&X-Amz-Signature=643a284bf21e0bc8db783b5a36001ff383fe19eca0bd01d2826e040e548403a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMIFUMZ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIDwXb7m7W2BKQQgwD1miw4hjE7POzLf79aA1rZDuUVrDAiEAmhZE2MegIxOrUZ6sxnRb586XWHazh%2B11jyrVBDHQtzkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiV0nKhUBRL9tuQsCrcA0IOFiK35cnMG%2F9SrPJ7KrG0rSWzpb2PKs2%2FdKaJ6MQAHqaTw6vVDnlVZBkffdhA2yG3xGaNnkPvAzQEKOZyWD4phD8fhVzhr48F618AxTUxxHWq3mWiG6ecSa4rsMULVbHXQoB%2FbKS7VZ373zWTERYMduXLMpHPb4Jen1ybq1bUhpyoXfO1rKnwRwQKZ4GJap2B2p3prYSPwkUXf8642%2Fgid0e%2BbbSCeC60CjrrtHVzuBoPSZ9IHOTORJmNn220eqxMaSLqKeFUCge7RLjvLYxCl6I7M9nTJvGTws%2BHx3j19oXbFuWnLXb%2FUNgr7vpBcySBwB%2BSks57Sjh9z9nIjj%2B3wiblcV0A4hi6VLsz%2B3RuDpeBSQfrIuv1qR0aocp0OqAbGc0Hu26%2Fj70C36wXFr6cHZ69G9t7Cpl5R5kZib%2BSS3tnMVfyBqOWnoSWKvPB8H4bv8x8hoG4DpwK5GGasrcWytL6kgghC2RqwEX%2FxrnUg1kYbwZfEF8j8s%2Bsx0EIyRDvpi047hZC4qRUBJYjWxCKuNhUN83XPaFjwCzqZBSmxMGTB87w0u0AohFyUcmI0cEVMV7qSRtAtFh9G6NhjQByrf1YadmgGTluGUnz3TpqxPN3LMALUA%2FBHHuQMMPYwcEGOqUBxEz5MdZmtKklrP5%2BtG%2BF7q4C9QEeSBi9xnObRKlVQ%2FHjQ0jiSVpZ6VU2VKWNofCZ2lXUXV3IRpLUbL1L2IgIk840JEm3Ccxj6724gGCJky40mgIlA3xW8effYeV7cW9FHMsozhLh%2B8kmCT%2BEZ3PBWJCdie9%2BCYV5ocvu0YWaZ3hRna6gWMBQJK2RkE5agY512PsXAc7TuyEx5kMp%2BMFHiQ64ahMY&X-Amz-Signature=15ed23fb82a75c065f8c066a25b019a27a1cebd8a14e6fe1323445461f702397&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
