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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYKBGCRZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIEz%2FkDpMoza%2B8WvoyCuRjKcmzWYV77C5nVPru14vxTloAiAke3m%2FhfrGoq90zu8nOWxvAbjNk%2BIT33QMGNcozj3Bvir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM8BsG3I%2Bn0GudU7psKtwDiJ3BThvOaeLeQU4SdoREgYoLL4%2Fw0gXh2Ve7wz3%2FVxOXXy%2BmGgHlIyhwGZmxqcmP2Y%2B1UeEmFjJ3dEP%2BqpzglD82UznTu5Wz0A%2BJpm9wrCqsEG9AOZc0wZq28lkIRfrs%2F8uzwd62oyjeOKp1gfFNb36aA8N%2FsNAaU6dZ1%2BBk0i3q1ryzXA0Dj%2BeBBmEh0MeMi4MLPzey41XKj19zxbJG3Q072IZRG%2FNLlph1lwJpqHZ8VkKBeVGgM1QUQrtzEZGCZsOsnilPRn1PHx4FEUzxeq%2BBxF78hu84M5ZWCHyHCaZJzo9cOZb%2FoXxu5J8FWUerthLFlobn%2BG%2Fz%2B%2Bn%2B%2FHdLALHGeNA7l5NZruOA9YFn7cRlqt8RF3Fpxg9y65%2BA1dh7mQsn%2B%2By%2FYoOiSXNYpyRx5Zid%2Fcgl99jS9STuHHfP%2FhznA32HUCilEbiYvBP0BV2H5bev6gkGQeUD%2BwelS%2BwZCLW0tiSLQS1MJYKpfqCA5ZJdMmDku5YoHzzPY%2FvYXRYHa5lUTi3gb3pPt7FyI2yG%2FO4g4arC2jTh%2BPLEXzYWQ2eijMIWLU8IlRi%2Fi9mMfxg3JxuqWW8gNfuaX5pDnU6BwxnEu1KpQ7zmzZ51Lk6APIj0%2FtGeTa22v%2Fjg26Qwx62CwgY6pgH4SFQTNNSz%2Bjf8UpMzuBTCGjgh8o%2BigO%2FDtAH3dXsmbrJbhA83TTEiNcrt5Wkpz0QPVEekLQxbEf5kEWLdG%2BTvhxm2zMXrBTloOYGONGG6M3U7N3aHgDB6SBdMSwAwB9qWPt63HcJMCOITipBxTeQ6xX%2FWjwOfuZBNhguFe%2F%2FzDDt2EmYMVUYP3363V6mSPwOYR15BOSU8qiFTwCafErV%2Fn7VUN99x&X-Amz-Signature=0bc26173bf86161df65724ebe585d580fb743ccbf31d6be8353b8d573f68efbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYKBGCRZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIEz%2FkDpMoza%2B8WvoyCuRjKcmzWYV77C5nVPru14vxTloAiAke3m%2FhfrGoq90zu8nOWxvAbjNk%2BIT33QMGNcozj3Bvir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM8BsG3I%2Bn0GudU7psKtwDiJ3BThvOaeLeQU4SdoREgYoLL4%2Fw0gXh2Ve7wz3%2FVxOXXy%2BmGgHlIyhwGZmxqcmP2Y%2B1UeEmFjJ3dEP%2BqpzglD82UznTu5Wz0A%2BJpm9wrCqsEG9AOZc0wZq28lkIRfrs%2F8uzwd62oyjeOKp1gfFNb36aA8N%2FsNAaU6dZ1%2BBk0i3q1ryzXA0Dj%2BeBBmEh0MeMi4MLPzey41XKj19zxbJG3Q072IZRG%2FNLlph1lwJpqHZ8VkKBeVGgM1QUQrtzEZGCZsOsnilPRn1PHx4FEUzxeq%2BBxF78hu84M5ZWCHyHCaZJzo9cOZb%2FoXxu5J8FWUerthLFlobn%2BG%2Fz%2B%2Bn%2B%2FHdLALHGeNA7l5NZruOA9YFn7cRlqt8RF3Fpxg9y65%2BA1dh7mQsn%2B%2By%2FYoOiSXNYpyRx5Zid%2Fcgl99jS9STuHHfP%2FhznA32HUCilEbiYvBP0BV2H5bev6gkGQeUD%2BwelS%2BwZCLW0tiSLQS1MJYKpfqCA5ZJdMmDku5YoHzzPY%2FvYXRYHa5lUTi3gb3pPt7FyI2yG%2FO4g4arC2jTh%2BPLEXzYWQ2eijMIWLU8IlRi%2Fi9mMfxg3JxuqWW8gNfuaX5pDnU6BwxnEu1KpQ7zmzZ51Lk6APIj0%2FtGeTa22v%2Fjg26Qwx62CwgY6pgH4SFQTNNSz%2Bjf8UpMzuBTCGjgh8o%2BigO%2FDtAH3dXsmbrJbhA83TTEiNcrt5Wkpz0QPVEekLQxbEf5kEWLdG%2BTvhxm2zMXrBTloOYGONGG6M3U7N3aHgDB6SBdMSwAwB9qWPt63HcJMCOITipBxTeQ6xX%2FWjwOfuZBNhguFe%2F%2FzDDt2EmYMVUYP3363V6mSPwOYR15BOSU8qiFTwCafErV%2Fn7VUN99x&X-Amz-Signature=1b6321e012b1a8cd9378836ca45c8b232714522bf5b556e5f221f856ff016eea&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYKBGCRZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIEz%2FkDpMoza%2B8WvoyCuRjKcmzWYV77C5nVPru14vxTloAiAke3m%2FhfrGoq90zu8nOWxvAbjNk%2BIT33QMGNcozj3Bvir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM8BsG3I%2Bn0GudU7psKtwDiJ3BThvOaeLeQU4SdoREgYoLL4%2Fw0gXh2Ve7wz3%2FVxOXXy%2BmGgHlIyhwGZmxqcmP2Y%2B1UeEmFjJ3dEP%2BqpzglD82UznTu5Wz0A%2BJpm9wrCqsEG9AOZc0wZq28lkIRfrs%2F8uzwd62oyjeOKp1gfFNb36aA8N%2FsNAaU6dZ1%2BBk0i3q1ryzXA0Dj%2BeBBmEh0MeMi4MLPzey41XKj19zxbJG3Q072IZRG%2FNLlph1lwJpqHZ8VkKBeVGgM1QUQrtzEZGCZsOsnilPRn1PHx4FEUzxeq%2BBxF78hu84M5ZWCHyHCaZJzo9cOZb%2FoXxu5J8FWUerthLFlobn%2BG%2Fz%2B%2Bn%2B%2FHdLALHGeNA7l5NZruOA9YFn7cRlqt8RF3Fpxg9y65%2BA1dh7mQsn%2B%2By%2FYoOiSXNYpyRx5Zid%2Fcgl99jS9STuHHfP%2FhznA32HUCilEbiYvBP0BV2H5bev6gkGQeUD%2BwelS%2BwZCLW0tiSLQS1MJYKpfqCA5ZJdMmDku5YoHzzPY%2FvYXRYHa5lUTi3gb3pPt7FyI2yG%2FO4g4arC2jTh%2BPLEXzYWQ2eijMIWLU8IlRi%2Fi9mMfxg3JxuqWW8gNfuaX5pDnU6BwxnEu1KpQ7zmzZ51Lk6APIj0%2FtGeTa22v%2Fjg26Qwx62CwgY6pgH4SFQTNNSz%2Bjf8UpMzuBTCGjgh8o%2BigO%2FDtAH3dXsmbrJbhA83TTEiNcrt5Wkpz0QPVEekLQxbEf5kEWLdG%2BTvhxm2zMXrBTloOYGONGG6M3U7N3aHgDB6SBdMSwAwB9qWPt63HcJMCOITipBxTeQ6xX%2FWjwOfuZBNhguFe%2F%2FzDDt2EmYMVUYP3363V6mSPwOYR15BOSU8qiFTwCafErV%2Fn7VUN99x&X-Amz-Signature=ab4c1fedf6ae6a88302f04cc055b671e3979422014236bce744219d17083e1ba&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYKBGCRZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIEz%2FkDpMoza%2B8WvoyCuRjKcmzWYV77C5nVPru14vxTloAiAke3m%2FhfrGoq90zu8nOWxvAbjNk%2BIT33QMGNcozj3Bvir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM8BsG3I%2Bn0GudU7psKtwDiJ3BThvOaeLeQU4SdoREgYoLL4%2Fw0gXh2Ve7wz3%2FVxOXXy%2BmGgHlIyhwGZmxqcmP2Y%2B1UeEmFjJ3dEP%2BqpzglD82UznTu5Wz0A%2BJpm9wrCqsEG9AOZc0wZq28lkIRfrs%2F8uzwd62oyjeOKp1gfFNb36aA8N%2FsNAaU6dZ1%2BBk0i3q1ryzXA0Dj%2BeBBmEh0MeMi4MLPzey41XKj19zxbJG3Q072IZRG%2FNLlph1lwJpqHZ8VkKBeVGgM1QUQrtzEZGCZsOsnilPRn1PHx4FEUzxeq%2BBxF78hu84M5ZWCHyHCaZJzo9cOZb%2FoXxu5J8FWUerthLFlobn%2BG%2Fz%2B%2Bn%2B%2FHdLALHGeNA7l5NZruOA9YFn7cRlqt8RF3Fpxg9y65%2BA1dh7mQsn%2B%2By%2FYoOiSXNYpyRx5Zid%2Fcgl99jS9STuHHfP%2FhznA32HUCilEbiYvBP0BV2H5bev6gkGQeUD%2BwelS%2BwZCLW0tiSLQS1MJYKpfqCA5ZJdMmDku5YoHzzPY%2FvYXRYHa5lUTi3gb3pPt7FyI2yG%2FO4g4arC2jTh%2BPLEXzYWQ2eijMIWLU8IlRi%2Fi9mMfxg3JxuqWW8gNfuaX5pDnU6BwxnEu1KpQ7zmzZ51Lk6APIj0%2FtGeTa22v%2Fjg26Qwx62CwgY6pgH4SFQTNNSz%2Bjf8UpMzuBTCGjgh8o%2BigO%2FDtAH3dXsmbrJbhA83TTEiNcrt5Wkpz0QPVEekLQxbEf5kEWLdG%2BTvhxm2zMXrBTloOYGONGG6M3U7N3aHgDB6SBdMSwAwB9qWPt63HcJMCOITipBxTeQ6xX%2FWjwOfuZBNhguFe%2F%2FzDDt2EmYMVUYP3363V6mSPwOYR15BOSU8qiFTwCafErV%2Fn7VUN99x&X-Amz-Signature=764983d6ef0a3c9d03e4d15e6e881f0681986a09426ed7a2e4057a7ced396ac8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYKBGCRZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIEz%2FkDpMoza%2B8WvoyCuRjKcmzWYV77C5nVPru14vxTloAiAke3m%2FhfrGoq90zu8nOWxvAbjNk%2BIT33QMGNcozj3Bvir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM8BsG3I%2Bn0GudU7psKtwDiJ3BThvOaeLeQU4SdoREgYoLL4%2Fw0gXh2Ve7wz3%2FVxOXXy%2BmGgHlIyhwGZmxqcmP2Y%2B1UeEmFjJ3dEP%2BqpzglD82UznTu5Wz0A%2BJpm9wrCqsEG9AOZc0wZq28lkIRfrs%2F8uzwd62oyjeOKp1gfFNb36aA8N%2FsNAaU6dZ1%2BBk0i3q1ryzXA0Dj%2BeBBmEh0MeMi4MLPzey41XKj19zxbJG3Q072IZRG%2FNLlph1lwJpqHZ8VkKBeVGgM1QUQrtzEZGCZsOsnilPRn1PHx4FEUzxeq%2BBxF78hu84M5ZWCHyHCaZJzo9cOZb%2FoXxu5J8FWUerthLFlobn%2BG%2Fz%2B%2Bn%2B%2FHdLALHGeNA7l5NZruOA9YFn7cRlqt8RF3Fpxg9y65%2BA1dh7mQsn%2B%2By%2FYoOiSXNYpyRx5Zid%2Fcgl99jS9STuHHfP%2FhznA32HUCilEbiYvBP0BV2H5bev6gkGQeUD%2BwelS%2BwZCLW0tiSLQS1MJYKpfqCA5ZJdMmDku5YoHzzPY%2FvYXRYHa5lUTi3gb3pPt7FyI2yG%2FO4g4arC2jTh%2BPLEXzYWQ2eijMIWLU8IlRi%2Fi9mMfxg3JxuqWW8gNfuaX5pDnU6BwxnEu1KpQ7zmzZ51Lk6APIj0%2FtGeTa22v%2Fjg26Qwx62CwgY6pgH4SFQTNNSz%2Bjf8UpMzuBTCGjgh8o%2BigO%2FDtAH3dXsmbrJbhA83TTEiNcrt5Wkpz0QPVEekLQxbEf5kEWLdG%2BTvhxm2zMXrBTloOYGONGG6M3U7N3aHgDB6SBdMSwAwB9qWPt63HcJMCOITipBxTeQ6xX%2FWjwOfuZBNhguFe%2F%2FzDDt2EmYMVUYP3363V6mSPwOYR15BOSU8qiFTwCafErV%2Fn7VUN99x&X-Amz-Signature=5706d4f0a09624e8ac5a231379b07368a2b1270613a82f3f51dd71b9486fddec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYKBGCRZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIEz%2FkDpMoza%2B8WvoyCuRjKcmzWYV77C5nVPru14vxTloAiAke3m%2FhfrGoq90zu8nOWxvAbjNk%2BIT33QMGNcozj3Bvir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM8BsG3I%2Bn0GudU7psKtwDiJ3BThvOaeLeQU4SdoREgYoLL4%2Fw0gXh2Ve7wz3%2FVxOXXy%2BmGgHlIyhwGZmxqcmP2Y%2B1UeEmFjJ3dEP%2BqpzglD82UznTu5Wz0A%2BJpm9wrCqsEG9AOZc0wZq28lkIRfrs%2F8uzwd62oyjeOKp1gfFNb36aA8N%2FsNAaU6dZ1%2BBk0i3q1ryzXA0Dj%2BeBBmEh0MeMi4MLPzey41XKj19zxbJG3Q072IZRG%2FNLlph1lwJpqHZ8VkKBeVGgM1QUQrtzEZGCZsOsnilPRn1PHx4FEUzxeq%2BBxF78hu84M5ZWCHyHCaZJzo9cOZb%2FoXxu5J8FWUerthLFlobn%2BG%2Fz%2B%2Bn%2B%2FHdLALHGeNA7l5NZruOA9YFn7cRlqt8RF3Fpxg9y65%2BA1dh7mQsn%2B%2By%2FYoOiSXNYpyRx5Zid%2Fcgl99jS9STuHHfP%2FhznA32HUCilEbiYvBP0BV2H5bev6gkGQeUD%2BwelS%2BwZCLW0tiSLQS1MJYKpfqCA5ZJdMmDku5YoHzzPY%2FvYXRYHa5lUTi3gb3pPt7FyI2yG%2FO4g4arC2jTh%2BPLEXzYWQ2eijMIWLU8IlRi%2Fi9mMfxg3JxuqWW8gNfuaX5pDnU6BwxnEu1KpQ7zmzZ51Lk6APIj0%2FtGeTa22v%2Fjg26Qwx62CwgY6pgH4SFQTNNSz%2Bjf8UpMzuBTCGjgh8o%2BigO%2FDtAH3dXsmbrJbhA83TTEiNcrt5Wkpz0QPVEekLQxbEf5kEWLdG%2BTvhxm2zMXrBTloOYGONGG6M3U7N3aHgDB6SBdMSwAwB9qWPt63HcJMCOITipBxTeQ6xX%2FWjwOfuZBNhguFe%2F%2FzDDt2EmYMVUYP3363V6mSPwOYR15BOSU8qiFTwCafErV%2Fn7VUN99x&X-Amz-Signature=f129f824f11b38f14b3b83cf489a5208060ef8763a78f7c3ba542f52fbde8c10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYKBGCRZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIEz%2FkDpMoza%2B8WvoyCuRjKcmzWYV77C5nVPru14vxTloAiAke3m%2FhfrGoq90zu8nOWxvAbjNk%2BIT33QMGNcozj3Bvir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM8BsG3I%2Bn0GudU7psKtwDiJ3BThvOaeLeQU4SdoREgYoLL4%2Fw0gXh2Ve7wz3%2FVxOXXy%2BmGgHlIyhwGZmxqcmP2Y%2B1UeEmFjJ3dEP%2BqpzglD82UznTu5Wz0A%2BJpm9wrCqsEG9AOZc0wZq28lkIRfrs%2F8uzwd62oyjeOKp1gfFNb36aA8N%2FsNAaU6dZ1%2BBk0i3q1ryzXA0Dj%2BeBBmEh0MeMi4MLPzey41XKj19zxbJG3Q072IZRG%2FNLlph1lwJpqHZ8VkKBeVGgM1QUQrtzEZGCZsOsnilPRn1PHx4FEUzxeq%2BBxF78hu84M5ZWCHyHCaZJzo9cOZb%2FoXxu5J8FWUerthLFlobn%2BG%2Fz%2B%2Bn%2B%2FHdLALHGeNA7l5NZruOA9YFn7cRlqt8RF3Fpxg9y65%2BA1dh7mQsn%2B%2By%2FYoOiSXNYpyRx5Zid%2Fcgl99jS9STuHHfP%2FhznA32HUCilEbiYvBP0BV2H5bev6gkGQeUD%2BwelS%2BwZCLW0tiSLQS1MJYKpfqCA5ZJdMmDku5YoHzzPY%2FvYXRYHa5lUTi3gb3pPt7FyI2yG%2FO4g4arC2jTh%2BPLEXzYWQ2eijMIWLU8IlRi%2Fi9mMfxg3JxuqWW8gNfuaX5pDnU6BwxnEu1KpQ7zmzZ51Lk6APIj0%2FtGeTa22v%2Fjg26Qwx62CwgY6pgH4SFQTNNSz%2Bjf8UpMzuBTCGjgh8o%2BigO%2FDtAH3dXsmbrJbhA83TTEiNcrt5Wkpz0QPVEekLQxbEf5kEWLdG%2BTvhxm2zMXrBTloOYGONGG6M3U7N3aHgDB6SBdMSwAwB9qWPt63HcJMCOITipBxTeQ6xX%2FWjwOfuZBNhguFe%2F%2FzDDt2EmYMVUYP3363V6mSPwOYR15BOSU8qiFTwCafErV%2Fn7VUN99x&X-Amz-Signature=7789e0e082dfa016e155f96df6a4f4a53c32e2e9d4d5f1ea79201c22fa58c50f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYKBGCRZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIEz%2FkDpMoza%2B8WvoyCuRjKcmzWYV77C5nVPru14vxTloAiAke3m%2FhfrGoq90zu8nOWxvAbjNk%2BIT33QMGNcozj3Bvir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM8BsG3I%2Bn0GudU7psKtwDiJ3BThvOaeLeQU4SdoREgYoLL4%2Fw0gXh2Ve7wz3%2FVxOXXy%2BmGgHlIyhwGZmxqcmP2Y%2B1UeEmFjJ3dEP%2BqpzglD82UznTu5Wz0A%2BJpm9wrCqsEG9AOZc0wZq28lkIRfrs%2F8uzwd62oyjeOKp1gfFNb36aA8N%2FsNAaU6dZ1%2BBk0i3q1ryzXA0Dj%2BeBBmEh0MeMi4MLPzey41XKj19zxbJG3Q072IZRG%2FNLlph1lwJpqHZ8VkKBeVGgM1QUQrtzEZGCZsOsnilPRn1PHx4FEUzxeq%2BBxF78hu84M5ZWCHyHCaZJzo9cOZb%2FoXxu5J8FWUerthLFlobn%2BG%2Fz%2B%2Bn%2B%2FHdLALHGeNA7l5NZruOA9YFn7cRlqt8RF3Fpxg9y65%2BA1dh7mQsn%2B%2By%2FYoOiSXNYpyRx5Zid%2Fcgl99jS9STuHHfP%2FhznA32HUCilEbiYvBP0BV2H5bev6gkGQeUD%2BwelS%2BwZCLW0tiSLQS1MJYKpfqCA5ZJdMmDku5YoHzzPY%2FvYXRYHa5lUTi3gb3pPt7FyI2yG%2FO4g4arC2jTh%2BPLEXzYWQ2eijMIWLU8IlRi%2Fi9mMfxg3JxuqWW8gNfuaX5pDnU6BwxnEu1KpQ7zmzZ51Lk6APIj0%2FtGeTa22v%2Fjg26Qwx62CwgY6pgH4SFQTNNSz%2Bjf8UpMzuBTCGjgh8o%2BigO%2FDtAH3dXsmbrJbhA83TTEiNcrt5Wkpz0QPVEekLQxbEf5kEWLdG%2BTvhxm2zMXrBTloOYGONGG6M3U7N3aHgDB6SBdMSwAwB9qWPt63HcJMCOITipBxTeQ6xX%2FWjwOfuZBNhguFe%2F%2FzDDt2EmYMVUYP3363V6mSPwOYR15BOSU8qiFTwCafErV%2Fn7VUN99x&X-Amz-Signature=e6cd19ee878dc12696a5e70e2e7bee387475300c5691839e48a96ed4f8ed8e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
