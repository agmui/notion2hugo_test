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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYIXNC4%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzwNO1RRPhEkyxmD06lDUs%2FawtIlkJnROOnsZT9%2FBbbwIgXwb6KeBUR2YGNN%2BiKjr%2BmjdOxWiL4CDdcpeQtAmcUOoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOJ4YeTajaDTCK%2F74CrcA4zlf9Oj4xDDnMK9U%2Bst2v8fU%2BeBk2JYgwHAo0jUB4UM063aOjIWCNdRy8NwEmrVMVySM5bp2Hg30hh4fh6XjQQxM3bp0z%2BQyAbMR%2Bp3qDE60sv6E0W5e0%2Fkx2uM8Z6aFV%2B9ox%2BW6SRefz1UtcD9iJncnap2zENH0%2BgfmIw5vHn%2FpTuAdWj1xcWw6TjIpfVJDgExxijM9GjUKgQDdxO4J7Ba0P5JfSKyrDMWU98mfQVDBbXEa5mmYuKKtxg9%2F2mHkUeta4I%2F8CYyhpWBvdH7hLLWzwSZcihn0RksHIDk81rpuUgEHU9qp199HFHFN9LZMv3a9Ux6UuXLmUvy8qtPf%2BCvSEefnrNMCBu0sb1P3la7dBgXZtI%2BsrJV%2F3Yx57rbPOk2uve5MsBqmeTNP2uCX7c7UTpytOO23yCsYakX0CqMxp0R9mNXK%2Fl7N8G3ZYX7LXfdM%2B%2Fn8jlOV9A1wBdowh9xhvutDZusCGFniMw6fIjRcOUVXT64ExoQCHM9W6RQh28UXgPlJLYI%2FpkAOGy9oHEkQ%2FHJ0O0G0nmCn%2BlTiOGYcvCiMoF8xf1KAFaYeME9ZAK4mjbMmChddfC%2BgQcRWVLVtsM08oHQAHIDkC9O1VtXbmfU5UAz9%2F0f3XleMNyKqs8GOqUBtmEOyBn%2F8njueXVdJLqZjcpu1sptwv%2FdvaRXZUifyYulTEn66o2pN8IBxrNth97sm7zIbk3UJoJAyxzLBSfOxrwYEdTvD9otQgtxkWYh%2Bqp8uyct7MudR0S6f7dil1Mr2iPZQLYJAUCcdyvwNGPSe%2B9EHDI%2BNCRazStJG8qqxTKP0aWTklZKVHBuIiPw%2BvJVIsf39L0NTvx4R8NAvD51aNMEjCaZ&X-Amz-Signature=990d3c6af3310097c849d6bb111ba7173cc6912bdcd95c757da529acd28c58f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYIXNC4%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzwNO1RRPhEkyxmD06lDUs%2FawtIlkJnROOnsZT9%2FBbbwIgXwb6KeBUR2YGNN%2BiKjr%2BmjdOxWiL4CDdcpeQtAmcUOoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOJ4YeTajaDTCK%2F74CrcA4zlf9Oj4xDDnMK9U%2Bst2v8fU%2BeBk2JYgwHAo0jUB4UM063aOjIWCNdRy8NwEmrVMVySM5bp2Hg30hh4fh6XjQQxM3bp0z%2BQyAbMR%2Bp3qDE60sv6E0W5e0%2Fkx2uM8Z6aFV%2B9ox%2BW6SRefz1UtcD9iJncnap2zENH0%2BgfmIw5vHn%2FpTuAdWj1xcWw6TjIpfVJDgExxijM9GjUKgQDdxO4J7Ba0P5JfSKyrDMWU98mfQVDBbXEa5mmYuKKtxg9%2F2mHkUeta4I%2F8CYyhpWBvdH7hLLWzwSZcihn0RksHIDk81rpuUgEHU9qp199HFHFN9LZMv3a9Ux6UuXLmUvy8qtPf%2BCvSEefnrNMCBu0sb1P3la7dBgXZtI%2BsrJV%2F3Yx57rbPOk2uve5MsBqmeTNP2uCX7c7UTpytOO23yCsYakX0CqMxp0R9mNXK%2Fl7N8G3ZYX7LXfdM%2B%2Fn8jlOV9A1wBdowh9xhvutDZusCGFniMw6fIjRcOUVXT64ExoQCHM9W6RQh28UXgPlJLYI%2FpkAOGy9oHEkQ%2FHJ0O0G0nmCn%2BlTiOGYcvCiMoF8xf1KAFaYeME9ZAK4mjbMmChddfC%2BgQcRWVLVtsM08oHQAHIDkC9O1VtXbmfU5UAz9%2F0f3XleMNyKqs8GOqUBtmEOyBn%2F8njueXVdJLqZjcpu1sptwv%2FdvaRXZUifyYulTEn66o2pN8IBxrNth97sm7zIbk3UJoJAyxzLBSfOxrwYEdTvD9otQgtxkWYh%2Bqp8uyct7MudR0S6f7dil1Mr2iPZQLYJAUCcdyvwNGPSe%2B9EHDI%2BNCRazStJG8qqxTKP0aWTklZKVHBuIiPw%2BvJVIsf39L0NTvx4R8NAvD51aNMEjCaZ&X-Amz-Signature=e1b6216386403df76928119a8cc70139bc91b0bc9370765689364cab5036e01c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYIXNC4%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzwNO1RRPhEkyxmD06lDUs%2FawtIlkJnROOnsZT9%2FBbbwIgXwb6KeBUR2YGNN%2BiKjr%2BmjdOxWiL4CDdcpeQtAmcUOoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOJ4YeTajaDTCK%2F74CrcA4zlf9Oj4xDDnMK9U%2Bst2v8fU%2BeBk2JYgwHAo0jUB4UM063aOjIWCNdRy8NwEmrVMVySM5bp2Hg30hh4fh6XjQQxM3bp0z%2BQyAbMR%2Bp3qDE60sv6E0W5e0%2Fkx2uM8Z6aFV%2B9ox%2BW6SRefz1UtcD9iJncnap2zENH0%2BgfmIw5vHn%2FpTuAdWj1xcWw6TjIpfVJDgExxijM9GjUKgQDdxO4J7Ba0P5JfSKyrDMWU98mfQVDBbXEa5mmYuKKtxg9%2F2mHkUeta4I%2F8CYyhpWBvdH7hLLWzwSZcihn0RksHIDk81rpuUgEHU9qp199HFHFN9LZMv3a9Ux6UuXLmUvy8qtPf%2BCvSEefnrNMCBu0sb1P3la7dBgXZtI%2BsrJV%2F3Yx57rbPOk2uve5MsBqmeTNP2uCX7c7UTpytOO23yCsYakX0CqMxp0R9mNXK%2Fl7N8G3ZYX7LXfdM%2B%2Fn8jlOV9A1wBdowh9xhvutDZusCGFniMw6fIjRcOUVXT64ExoQCHM9W6RQh28UXgPlJLYI%2FpkAOGy9oHEkQ%2FHJ0O0G0nmCn%2BlTiOGYcvCiMoF8xf1KAFaYeME9ZAK4mjbMmChddfC%2BgQcRWVLVtsM08oHQAHIDkC9O1VtXbmfU5UAz9%2F0f3XleMNyKqs8GOqUBtmEOyBn%2F8njueXVdJLqZjcpu1sptwv%2FdvaRXZUifyYulTEn66o2pN8IBxrNth97sm7zIbk3UJoJAyxzLBSfOxrwYEdTvD9otQgtxkWYh%2Bqp8uyct7MudR0S6f7dil1Mr2iPZQLYJAUCcdyvwNGPSe%2B9EHDI%2BNCRazStJG8qqxTKP0aWTklZKVHBuIiPw%2BvJVIsf39L0NTvx4R8NAvD51aNMEjCaZ&X-Amz-Signature=322060832e29104ecb3077b6a139ac48362636fd1b3346abab964dab0782e2e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYIXNC4%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzwNO1RRPhEkyxmD06lDUs%2FawtIlkJnROOnsZT9%2FBbbwIgXwb6KeBUR2YGNN%2BiKjr%2BmjdOxWiL4CDdcpeQtAmcUOoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOJ4YeTajaDTCK%2F74CrcA4zlf9Oj4xDDnMK9U%2Bst2v8fU%2BeBk2JYgwHAo0jUB4UM063aOjIWCNdRy8NwEmrVMVySM5bp2Hg30hh4fh6XjQQxM3bp0z%2BQyAbMR%2Bp3qDE60sv6E0W5e0%2Fkx2uM8Z6aFV%2B9ox%2BW6SRefz1UtcD9iJncnap2zENH0%2BgfmIw5vHn%2FpTuAdWj1xcWw6TjIpfVJDgExxijM9GjUKgQDdxO4J7Ba0P5JfSKyrDMWU98mfQVDBbXEa5mmYuKKtxg9%2F2mHkUeta4I%2F8CYyhpWBvdH7hLLWzwSZcihn0RksHIDk81rpuUgEHU9qp199HFHFN9LZMv3a9Ux6UuXLmUvy8qtPf%2BCvSEefnrNMCBu0sb1P3la7dBgXZtI%2BsrJV%2F3Yx57rbPOk2uve5MsBqmeTNP2uCX7c7UTpytOO23yCsYakX0CqMxp0R9mNXK%2Fl7N8G3ZYX7LXfdM%2B%2Fn8jlOV9A1wBdowh9xhvutDZusCGFniMw6fIjRcOUVXT64ExoQCHM9W6RQh28UXgPlJLYI%2FpkAOGy9oHEkQ%2FHJ0O0G0nmCn%2BlTiOGYcvCiMoF8xf1KAFaYeME9ZAK4mjbMmChddfC%2BgQcRWVLVtsM08oHQAHIDkC9O1VtXbmfU5UAz9%2F0f3XleMNyKqs8GOqUBtmEOyBn%2F8njueXVdJLqZjcpu1sptwv%2FdvaRXZUifyYulTEn66o2pN8IBxrNth97sm7zIbk3UJoJAyxzLBSfOxrwYEdTvD9otQgtxkWYh%2Bqp8uyct7MudR0S6f7dil1Mr2iPZQLYJAUCcdyvwNGPSe%2B9EHDI%2BNCRazStJG8qqxTKP0aWTklZKVHBuIiPw%2BvJVIsf39L0NTvx4R8NAvD51aNMEjCaZ&X-Amz-Signature=396eb74a707b5aa446447d0627cb4922cfa8af0e7f75d9f08ae0d20a9fae9617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYIXNC4%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzwNO1RRPhEkyxmD06lDUs%2FawtIlkJnROOnsZT9%2FBbbwIgXwb6KeBUR2YGNN%2BiKjr%2BmjdOxWiL4CDdcpeQtAmcUOoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOJ4YeTajaDTCK%2F74CrcA4zlf9Oj4xDDnMK9U%2Bst2v8fU%2BeBk2JYgwHAo0jUB4UM063aOjIWCNdRy8NwEmrVMVySM5bp2Hg30hh4fh6XjQQxM3bp0z%2BQyAbMR%2Bp3qDE60sv6E0W5e0%2Fkx2uM8Z6aFV%2B9ox%2BW6SRefz1UtcD9iJncnap2zENH0%2BgfmIw5vHn%2FpTuAdWj1xcWw6TjIpfVJDgExxijM9GjUKgQDdxO4J7Ba0P5JfSKyrDMWU98mfQVDBbXEa5mmYuKKtxg9%2F2mHkUeta4I%2F8CYyhpWBvdH7hLLWzwSZcihn0RksHIDk81rpuUgEHU9qp199HFHFN9LZMv3a9Ux6UuXLmUvy8qtPf%2BCvSEefnrNMCBu0sb1P3la7dBgXZtI%2BsrJV%2F3Yx57rbPOk2uve5MsBqmeTNP2uCX7c7UTpytOO23yCsYakX0CqMxp0R9mNXK%2Fl7N8G3ZYX7LXfdM%2B%2Fn8jlOV9A1wBdowh9xhvutDZusCGFniMw6fIjRcOUVXT64ExoQCHM9W6RQh28UXgPlJLYI%2FpkAOGy9oHEkQ%2FHJ0O0G0nmCn%2BlTiOGYcvCiMoF8xf1KAFaYeME9ZAK4mjbMmChddfC%2BgQcRWVLVtsM08oHQAHIDkC9O1VtXbmfU5UAz9%2F0f3XleMNyKqs8GOqUBtmEOyBn%2F8njueXVdJLqZjcpu1sptwv%2FdvaRXZUifyYulTEn66o2pN8IBxrNth97sm7zIbk3UJoJAyxzLBSfOxrwYEdTvD9otQgtxkWYh%2Bqp8uyct7MudR0S6f7dil1Mr2iPZQLYJAUCcdyvwNGPSe%2B9EHDI%2BNCRazStJG8qqxTKP0aWTklZKVHBuIiPw%2BvJVIsf39L0NTvx4R8NAvD51aNMEjCaZ&X-Amz-Signature=866ee13505e72ccb466d771c504f8f600f518be950b42a8843807388d347adcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYIXNC4%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzwNO1RRPhEkyxmD06lDUs%2FawtIlkJnROOnsZT9%2FBbbwIgXwb6KeBUR2YGNN%2BiKjr%2BmjdOxWiL4CDdcpeQtAmcUOoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOJ4YeTajaDTCK%2F74CrcA4zlf9Oj4xDDnMK9U%2Bst2v8fU%2BeBk2JYgwHAo0jUB4UM063aOjIWCNdRy8NwEmrVMVySM5bp2Hg30hh4fh6XjQQxM3bp0z%2BQyAbMR%2Bp3qDE60sv6E0W5e0%2Fkx2uM8Z6aFV%2B9ox%2BW6SRefz1UtcD9iJncnap2zENH0%2BgfmIw5vHn%2FpTuAdWj1xcWw6TjIpfVJDgExxijM9GjUKgQDdxO4J7Ba0P5JfSKyrDMWU98mfQVDBbXEa5mmYuKKtxg9%2F2mHkUeta4I%2F8CYyhpWBvdH7hLLWzwSZcihn0RksHIDk81rpuUgEHU9qp199HFHFN9LZMv3a9Ux6UuXLmUvy8qtPf%2BCvSEefnrNMCBu0sb1P3la7dBgXZtI%2BsrJV%2F3Yx57rbPOk2uve5MsBqmeTNP2uCX7c7UTpytOO23yCsYakX0CqMxp0R9mNXK%2Fl7N8G3ZYX7LXfdM%2B%2Fn8jlOV9A1wBdowh9xhvutDZusCGFniMw6fIjRcOUVXT64ExoQCHM9W6RQh28UXgPlJLYI%2FpkAOGy9oHEkQ%2FHJ0O0G0nmCn%2BlTiOGYcvCiMoF8xf1KAFaYeME9ZAK4mjbMmChddfC%2BgQcRWVLVtsM08oHQAHIDkC9O1VtXbmfU5UAz9%2F0f3XleMNyKqs8GOqUBtmEOyBn%2F8njueXVdJLqZjcpu1sptwv%2FdvaRXZUifyYulTEn66o2pN8IBxrNth97sm7zIbk3UJoJAyxzLBSfOxrwYEdTvD9otQgtxkWYh%2Bqp8uyct7MudR0S6f7dil1Mr2iPZQLYJAUCcdyvwNGPSe%2B9EHDI%2BNCRazStJG8qqxTKP0aWTklZKVHBuIiPw%2BvJVIsf39L0NTvx4R8NAvD51aNMEjCaZ&X-Amz-Signature=349112cf63c13491b8f2887d163841a07a6d6e62c56f04214ab58e150714a4a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYIXNC4%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzwNO1RRPhEkyxmD06lDUs%2FawtIlkJnROOnsZT9%2FBbbwIgXwb6KeBUR2YGNN%2BiKjr%2BmjdOxWiL4CDdcpeQtAmcUOoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOJ4YeTajaDTCK%2F74CrcA4zlf9Oj4xDDnMK9U%2Bst2v8fU%2BeBk2JYgwHAo0jUB4UM063aOjIWCNdRy8NwEmrVMVySM5bp2Hg30hh4fh6XjQQxM3bp0z%2BQyAbMR%2Bp3qDE60sv6E0W5e0%2Fkx2uM8Z6aFV%2B9ox%2BW6SRefz1UtcD9iJncnap2zENH0%2BgfmIw5vHn%2FpTuAdWj1xcWw6TjIpfVJDgExxijM9GjUKgQDdxO4J7Ba0P5JfSKyrDMWU98mfQVDBbXEa5mmYuKKtxg9%2F2mHkUeta4I%2F8CYyhpWBvdH7hLLWzwSZcihn0RksHIDk81rpuUgEHU9qp199HFHFN9LZMv3a9Ux6UuXLmUvy8qtPf%2BCvSEefnrNMCBu0sb1P3la7dBgXZtI%2BsrJV%2F3Yx57rbPOk2uve5MsBqmeTNP2uCX7c7UTpytOO23yCsYakX0CqMxp0R9mNXK%2Fl7N8G3ZYX7LXfdM%2B%2Fn8jlOV9A1wBdowh9xhvutDZusCGFniMw6fIjRcOUVXT64ExoQCHM9W6RQh28UXgPlJLYI%2FpkAOGy9oHEkQ%2FHJ0O0G0nmCn%2BlTiOGYcvCiMoF8xf1KAFaYeME9ZAK4mjbMmChddfC%2BgQcRWVLVtsM08oHQAHIDkC9O1VtXbmfU5UAz9%2F0f3XleMNyKqs8GOqUBtmEOyBn%2F8njueXVdJLqZjcpu1sptwv%2FdvaRXZUifyYulTEn66o2pN8IBxrNth97sm7zIbk3UJoJAyxzLBSfOxrwYEdTvD9otQgtxkWYh%2Bqp8uyct7MudR0S6f7dil1Mr2iPZQLYJAUCcdyvwNGPSe%2B9EHDI%2BNCRazStJG8qqxTKP0aWTklZKVHBuIiPw%2BvJVIsf39L0NTvx4R8NAvD51aNMEjCaZ&X-Amz-Signature=1fe6ae5c90b586753a01ac722684a2a7eb015935d36ebe082e080084d2baf51c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYIXNC4%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzwNO1RRPhEkyxmD06lDUs%2FawtIlkJnROOnsZT9%2FBbbwIgXwb6KeBUR2YGNN%2BiKjr%2BmjdOxWiL4CDdcpeQtAmcUOoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOJ4YeTajaDTCK%2F74CrcA4zlf9Oj4xDDnMK9U%2Bst2v8fU%2BeBk2JYgwHAo0jUB4UM063aOjIWCNdRy8NwEmrVMVySM5bp2Hg30hh4fh6XjQQxM3bp0z%2BQyAbMR%2Bp3qDE60sv6E0W5e0%2Fkx2uM8Z6aFV%2B9ox%2BW6SRefz1UtcD9iJncnap2zENH0%2BgfmIw5vHn%2FpTuAdWj1xcWw6TjIpfVJDgExxijM9GjUKgQDdxO4J7Ba0P5JfSKyrDMWU98mfQVDBbXEa5mmYuKKtxg9%2F2mHkUeta4I%2F8CYyhpWBvdH7hLLWzwSZcihn0RksHIDk81rpuUgEHU9qp199HFHFN9LZMv3a9Ux6UuXLmUvy8qtPf%2BCvSEefnrNMCBu0sb1P3la7dBgXZtI%2BsrJV%2F3Yx57rbPOk2uve5MsBqmeTNP2uCX7c7UTpytOO23yCsYakX0CqMxp0R9mNXK%2Fl7N8G3ZYX7LXfdM%2B%2Fn8jlOV9A1wBdowh9xhvutDZusCGFniMw6fIjRcOUVXT64ExoQCHM9W6RQh28UXgPlJLYI%2FpkAOGy9oHEkQ%2FHJ0O0G0nmCn%2BlTiOGYcvCiMoF8xf1KAFaYeME9ZAK4mjbMmChddfC%2BgQcRWVLVtsM08oHQAHIDkC9O1VtXbmfU5UAz9%2F0f3XleMNyKqs8GOqUBtmEOyBn%2F8njueXVdJLqZjcpu1sptwv%2FdvaRXZUifyYulTEn66o2pN8IBxrNth97sm7zIbk3UJoJAyxzLBSfOxrwYEdTvD9otQgtxkWYh%2Bqp8uyct7MudR0S6f7dil1Mr2iPZQLYJAUCcdyvwNGPSe%2B9EHDI%2BNCRazStJG8qqxTKP0aWTklZKVHBuIiPw%2BvJVIsf39L0NTvx4R8NAvD51aNMEjCaZ&X-Amz-Signature=aa1dd379ca9147251291a62f5cf65f10a363b6e5f11e7a40675772f577c03320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
