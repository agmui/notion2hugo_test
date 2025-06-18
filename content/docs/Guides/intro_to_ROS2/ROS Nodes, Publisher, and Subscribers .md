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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C65TM7U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN3tHTGttpYfWjVDSwF19Rlqw3gKJL8UzMiDbfHZhckAiEAwbWOybEEBCQGwdEDE9wIl3P4gDm6bvE5MwzGwXuy1RsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeaMk7mmWv0MAaQyCrcA3JxqqHuBGc9V%2F6SwVi0jSiH17%2BD%2BYqbLC9bA3AEDBVuHqk%2B3aSxmKGSwHoupDan1DGraVKLU%2BjYpOPdYHFBjiY9%2B3r6RPkCLCZ04M5WDuzDo0sX6ZPLxeSeVAp2ZCLGCosSgBh1JBTnAarSWDA3sEIQxhvOvp6IahjQtHJubvOGLgbx0yVD7k%2Bou9qNhbMYcsWjjzvyRu9H%2BChaaEu8XqJP%2BIXfb2IKFwMANeOHYdTaSR0j8FTu27BPkssVGcnjckEqdjQfg7B003AtmhSVTk6SAG9H290Q5TMYzixoPvVMEJoYoAr0WLjBruwl5JxBuRDmX6iCTM526VWtEkmjuAF3uCllQ2mDefnHW8lXZ%2BrQ8XpJ9EFBm6khoH4Dacn7GGvaw50upUag5GJGfj8Gl%2BbFxT78%2FhUDZZ5ON0OJXObiPS0WIuZPgBVj68rkJa6TqN71mnuIOwLC23xpTZaGQtGYvPbyNWAN27fHYBzhGtMe8ro665822qdVBVleh2FS5U%2FMV7JlJlav9aYxnKGp3KzuaQMZRqvJ%2F%2Frj8Ff7TwrX9RGpg4bcZ09zSGR%2F7p4OPrMBIAj8HMmGydZfy1PjZDnQE7GVB3vAP7%2F3fjq8ItILQLwI7Ylp5ekBOkKlMLahyMIGOqUBEnHrXfbwfxKWT9QWXR5dDOVNefCgyldr4SjOC21X3w%2FbMacb5Pk8TKr9PnSdA05cAQKmckwKM8VJ%2BMGuIaly3oIVyuSOgZNT5gZVqks4BtwSjrny2Ecc7TmCYmjatVvrJl2pqQa49atDKC8ylTNpWC28E3F6JVK8UkH%2B%2FLpaUAJkXbTR729lgcYU9ouknoRuO%2B3v25zzg7Cr9mlzXE7VMPJFk9H%2F&X-Amz-Signature=b82bbc082eaadd3bf29cd1e84c57f9d475eb7137fef14aed0695d7832d3d9c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C65TM7U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN3tHTGttpYfWjVDSwF19Rlqw3gKJL8UzMiDbfHZhckAiEAwbWOybEEBCQGwdEDE9wIl3P4gDm6bvE5MwzGwXuy1RsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeaMk7mmWv0MAaQyCrcA3JxqqHuBGc9V%2F6SwVi0jSiH17%2BD%2BYqbLC9bA3AEDBVuHqk%2B3aSxmKGSwHoupDan1DGraVKLU%2BjYpOPdYHFBjiY9%2B3r6RPkCLCZ04M5WDuzDo0sX6ZPLxeSeVAp2ZCLGCosSgBh1JBTnAarSWDA3sEIQxhvOvp6IahjQtHJubvOGLgbx0yVD7k%2Bou9qNhbMYcsWjjzvyRu9H%2BChaaEu8XqJP%2BIXfb2IKFwMANeOHYdTaSR0j8FTu27BPkssVGcnjckEqdjQfg7B003AtmhSVTk6SAG9H290Q5TMYzixoPvVMEJoYoAr0WLjBruwl5JxBuRDmX6iCTM526VWtEkmjuAF3uCllQ2mDefnHW8lXZ%2BrQ8XpJ9EFBm6khoH4Dacn7GGvaw50upUag5GJGfj8Gl%2BbFxT78%2FhUDZZ5ON0OJXObiPS0WIuZPgBVj68rkJa6TqN71mnuIOwLC23xpTZaGQtGYvPbyNWAN27fHYBzhGtMe8ro665822qdVBVleh2FS5U%2FMV7JlJlav9aYxnKGp3KzuaQMZRqvJ%2F%2Frj8Ff7TwrX9RGpg4bcZ09zSGR%2F7p4OPrMBIAj8HMmGydZfy1PjZDnQE7GVB3vAP7%2F3fjq8ItILQLwI7Ylp5ekBOkKlMLahyMIGOqUBEnHrXfbwfxKWT9QWXR5dDOVNefCgyldr4SjOC21X3w%2FbMacb5Pk8TKr9PnSdA05cAQKmckwKM8VJ%2BMGuIaly3oIVyuSOgZNT5gZVqks4BtwSjrny2Ecc7TmCYmjatVvrJl2pqQa49atDKC8ylTNpWC28E3F6JVK8UkH%2B%2FLpaUAJkXbTR729lgcYU9ouknoRuO%2B3v25zzg7Cr9mlzXE7VMPJFk9H%2F&X-Amz-Signature=3b390f8a2a3eac8b6b39e6a1551178ddf76fe5883e4b85caa6499a78c44d480c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C65TM7U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN3tHTGttpYfWjVDSwF19Rlqw3gKJL8UzMiDbfHZhckAiEAwbWOybEEBCQGwdEDE9wIl3P4gDm6bvE5MwzGwXuy1RsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeaMk7mmWv0MAaQyCrcA3JxqqHuBGc9V%2F6SwVi0jSiH17%2BD%2BYqbLC9bA3AEDBVuHqk%2B3aSxmKGSwHoupDan1DGraVKLU%2BjYpOPdYHFBjiY9%2B3r6RPkCLCZ04M5WDuzDo0sX6ZPLxeSeVAp2ZCLGCosSgBh1JBTnAarSWDA3sEIQxhvOvp6IahjQtHJubvOGLgbx0yVD7k%2Bou9qNhbMYcsWjjzvyRu9H%2BChaaEu8XqJP%2BIXfb2IKFwMANeOHYdTaSR0j8FTu27BPkssVGcnjckEqdjQfg7B003AtmhSVTk6SAG9H290Q5TMYzixoPvVMEJoYoAr0WLjBruwl5JxBuRDmX6iCTM526VWtEkmjuAF3uCllQ2mDefnHW8lXZ%2BrQ8XpJ9EFBm6khoH4Dacn7GGvaw50upUag5GJGfj8Gl%2BbFxT78%2FhUDZZ5ON0OJXObiPS0WIuZPgBVj68rkJa6TqN71mnuIOwLC23xpTZaGQtGYvPbyNWAN27fHYBzhGtMe8ro665822qdVBVleh2FS5U%2FMV7JlJlav9aYxnKGp3KzuaQMZRqvJ%2F%2Frj8Ff7TwrX9RGpg4bcZ09zSGR%2F7p4OPrMBIAj8HMmGydZfy1PjZDnQE7GVB3vAP7%2F3fjq8ItILQLwI7Ylp5ekBOkKlMLahyMIGOqUBEnHrXfbwfxKWT9QWXR5dDOVNefCgyldr4SjOC21X3w%2FbMacb5Pk8TKr9PnSdA05cAQKmckwKM8VJ%2BMGuIaly3oIVyuSOgZNT5gZVqks4BtwSjrny2Ecc7TmCYmjatVvrJl2pqQa49atDKC8ylTNpWC28E3F6JVK8UkH%2B%2FLpaUAJkXbTR729lgcYU9ouknoRuO%2B3v25zzg7Cr9mlzXE7VMPJFk9H%2F&X-Amz-Signature=386195c2af3210be656286d94e1651c358d2d8eb0543fe0396a7970b8d8dac59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C65TM7U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN3tHTGttpYfWjVDSwF19Rlqw3gKJL8UzMiDbfHZhckAiEAwbWOybEEBCQGwdEDE9wIl3P4gDm6bvE5MwzGwXuy1RsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeaMk7mmWv0MAaQyCrcA3JxqqHuBGc9V%2F6SwVi0jSiH17%2BD%2BYqbLC9bA3AEDBVuHqk%2B3aSxmKGSwHoupDan1DGraVKLU%2BjYpOPdYHFBjiY9%2B3r6RPkCLCZ04M5WDuzDo0sX6ZPLxeSeVAp2ZCLGCosSgBh1JBTnAarSWDA3sEIQxhvOvp6IahjQtHJubvOGLgbx0yVD7k%2Bou9qNhbMYcsWjjzvyRu9H%2BChaaEu8XqJP%2BIXfb2IKFwMANeOHYdTaSR0j8FTu27BPkssVGcnjckEqdjQfg7B003AtmhSVTk6SAG9H290Q5TMYzixoPvVMEJoYoAr0WLjBruwl5JxBuRDmX6iCTM526VWtEkmjuAF3uCllQ2mDefnHW8lXZ%2BrQ8XpJ9EFBm6khoH4Dacn7GGvaw50upUag5GJGfj8Gl%2BbFxT78%2FhUDZZ5ON0OJXObiPS0WIuZPgBVj68rkJa6TqN71mnuIOwLC23xpTZaGQtGYvPbyNWAN27fHYBzhGtMe8ro665822qdVBVleh2FS5U%2FMV7JlJlav9aYxnKGp3KzuaQMZRqvJ%2F%2Frj8Ff7TwrX9RGpg4bcZ09zSGR%2F7p4OPrMBIAj8HMmGydZfy1PjZDnQE7GVB3vAP7%2F3fjq8ItILQLwI7Ylp5ekBOkKlMLahyMIGOqUBEnHrXfbwfxKWT9QWXR5dDOVNefCgyldr4SjOC21X3w%2FbMacb5Pk8TKr9PnSdA05cAQKmckwKM8VJ%2BMGuIaly3oIVyuSOgZNT5gZVqks4BtwSjrny2Ecc7TmCYmjatVvrJl2pqQa49atDKC8ylTNpWC28E3F6JVK8UkH%2B%2FLpaUAJkXbTR729lgcYU9ouknoRuO%2B3v25zzg7Cr9mlzXE7VMPJFk9H%2F&X-Amz-Signature=72c95a263f5a8cbb20f607e371d594ba5aa0d3d03ec85fad2587ed15ab4b9ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C65TM7U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN3tHTGttpYfWjVDSwF19Rlqw3gKJL8UzMiDbfHZhckAiEAwbWOybEEBCQGwdEDE9wIl3P4gDm6bvE5MwzGwXuy1RsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeaMk7mmWv0MAaQyCrcA3JxqqHuBGc9V%2F6SwVi0jSiH17%2BD%2BYqbLC9bA3AEDBVuHqk%2B3aSxmKGSwHoupDan1DGraVKLU%2BjYpOPdYHFBjiY9%2B3r6RPkCLCZ04M5WDuzDo0sX6ZPLxeSeVAp2ZCLGCosSgBh1JBTnAarSWDA3sEIQxhvOvp6IahjQtHJubvOGLgbx0yVD7k%2Bou9qNhbMYcsWjjzvyRu9H%2BChaaEu8XqJP%2BIXfb2IKFwMANeOHYdTaSR0j8FTu27BPkssVGcnjckEqdjQfg7B003AtmhSVTk6SAG9H290Q5TMYzixoPvVMEJoYoAr0WLjBruwl5JxBuRDmX6iCTM526VWtEkmjuAF3uCllQ2mDefnHW8lXZ%2BrQ8XpJ9EFBm6khoH4Dacn7GGvaw50upUag5GJGfj8Gl%2BbFxT78%2FhUDZZ5ON0OJXObiPS0WIuZPgBVj68rkJa6TqN71mnuIOwLC23xpTZaGQtGYvPbyNWAN27fHYBzhGtMe8ro665822qdVBVleh2FS5U%2FMV7JlJlav9aYxnKGp3KzuaQMZRqvJ%2F%2Frj8Ff7TwrX9RGpg4bcZ09zSGR%2F7p4OPrMBIAj8HMmGydZfy1PjZDnQE7GVB3vAP7%2F3fjq8ItILQLwI7Ylp5ekBOkKlMLahyMIGOqUBEnHrXfbwfxKWT9QWXR5dDOVNefCgyldr4SjOC21X3w%2FbMacb5Pk8TKr9PnSdA05cAQKmckwKM8VJ%2BMGuIaly3oIVyuSOgZNT5gZVqks4BtwSjrny2Ecc7TmCYmjatVvrJl2pqQa49atDKC8ylTNpWC28E3F6JVK8UkH%2B%2FLpaUAJkXbTR729lgcYU9ouknoRuO%2B3v25zzg7Cr9mlzXE7VMPJFk9H%2F&X-Amz-Signature=0dfefa878832dd62848b10a0066c98eed824a4589bd7a82a3d40bf8d980b204e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C65TM7U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN3tHTGttpYfWjVDSwF19Rlqw3gKJL8UzMiDbfHZhckAiEAwbWOybEEBCQGwdEDE9wIl3P4gDm6bvE5MwzGwXuy1RsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeaMk7mmWv0MAaQyCrcA3JxqqHuBGc9V%2F6SwVi0jSiH17%2BD%2BYqbLC9bA3AEDBVuHqk%2B3aSxmKGSwHoupDan1DGraVKLU%2BjYpOPdYHFBjiY9%2B3r6RPkCLCZ04M5WDuzDo0sX6ZPLxeSeVAp2ZCLGCosSgBh1JBTnAarSWDA3sEIQxhvOvp6IahjQtHJubvOGLgbx0yVD7k%2Bou9qNhbMYcsWjjzvyRu9H%2BChaaEu8XqJP%2BIXfb2IKFwMANeOHYdTaSR0j8FTu27BPkssVGcnjckEqdjQfg7B003AtmhSVTk6SAG9H290Q5TMYzixoPvVMEJoYoAr0WLjBruwl5JxBuRDmX6iCTM526VWtEkmjuAF3uCllQ2mDefnHW8lXZ%2BrQ8XpJ9EFBm6khoH4Dacn7GGvaw50upUag5GJGfj8Gl%2BbFxT78%2FhUDZZ5ON0OJXObiPS0WIuZPgBVj68rkJa6TqN71mnuIOwLC23xpTZaGQtGYvPbyNWAN27fHYBzhGtMe8ro665822qdVBVleh2FS5U%2FMV7JlJlav9aYxnKGp3KzuaQMZRqvJ%2F%2Frj8Ff7TwrX9RGpg4bcZ09zSGR%2F7p4OPrMBIAj8HMmGydZfy1PjZDnQE7GVB3vAP7%2F3fjq8ItILQLwI7Ylp5ekBOkKlMLahyMIGOqUBEnHrXfbwfxKWT9QWXR5dDOVNefCgyldr4SjOC21X3w%2FbMacb5Pk8TKr9PnSdA05cAQKmckwKM8VJ%2BMGuIaly3oIVyuSOgZNT5gZVqks4BtwSjrny2Ecc7TmCYmjatVvrJl2pqQa49atDKC8ylTNpWC28E3F6JVK8UkH%2B%2FLpaUAJkXbTR729lgcYU9ouknoRuO%2B3v25zzg7Cr9mlzXE7VMPJFk9H%2F&X-Amz-Signature=6ea40171435d0c3c632b722bca1aaf001fecfc177c3bfc6246cfc91e8a6db301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C65TM7U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN3tHTGttpYfWjVDSwF19Rlqw3gKJL8UzMiDbfHZhckAiEAwbWOybEEBCQGwdEDE9wIl3P4gDm6bvE5MwzGwXuy1RsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeaMk7mmWv0MAaQyCrcA3JxqqHuBGc9V%2F6SwVi0jSiH17%2BD%2BYqbLC9bA3AEDBVuHqk%2B3aSxmKGSwHoupDan1DGraVKLU%2BjYpOPdYHFBjiY9%2B3r6RPkCLCZ04M5WDuzDo0sX6ZPLxeSeVAp2ZCLGCosSgBh1JBTnAarSWDA3sEIQxhvOvp6IahjQtHJubvOGLgbx0yVD7k%2Bou9qNhbMYcsWjjzvyRu9H%2BChaaEu8XqJP%2BIXfb2IKFwMANeOHYdTaSR0j8FTu27BPkssVGcnjckEqdjQfg7B003AtmhSVTk6SAG9H290Q5TMYzixoPvVMEJoYoAr0WLjBruwl5JxBuRDmX6iCTM526VWtEkmjuAF3uCllQ2mDefnHW8lXZ%2BrQ8XpJ9EFBm6khoH4Dacn7GGvaw50upUag5GJGfj8Gl%2BbFxT78%2FhUDZZ5ON0OJXObiPS0WIuZPgBVj68rkJa6TqN71mnuIOwLC23xpTZaGQtGYvPbyNWAN27fHYBzhGtMe8ro665822qdVBVleh2FS5U%2FMV7JlJlav9aYxnKGp3KzuaQMZRqvJ%2F%2Frj8Ff7TwrX9RGpg4bcZ09zSGR%2F7p4OPrMBIAj8HMmGydZfy1PjZDnQE7GVB3vAP7%2F3fjq8ItILQLwI7Ylp5ekBOkKlMLahyMIGOqUBEnHrXfbwfxKWT9QWXR5dDOVNefCgyldr4SjOC21X3w%2FbMacb5Pk8TKr9PnSdA05cAQKmckwKM8VJ%2BMGuIaly3oIVyuSOgZNT5gZVqks4BtwSjrny2Ecc7TmCYmjatVvrJl2pqQa49atDKC8ylTNpWC28E3F6JVK8UkH%2B%2FLpaUAJkXbTR729lgcYU9ouknoRuO%2B3v25zzg7Cr9mlzXE7VMPJFk9H%2F&X-Amz-Signature=c3637215e2d5d97459916c51ffcda51ce77fe769a58c3d1a26e42f62d2d3fa70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C65TM7U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN3tHTGttpYfWjVDSwF19Rlqw3gKJL8UzMiDbfHZhckAiEAwbWOybEEBCQGwdEDE9wIl3P4gDm6bvE5MwzGwXuy1RsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeaMk7mmWv0MAaQyCrcA3JxqqHuBGc9V%2F6SwVi0jSiH17%2BD%2BYqbLC9bA3AEDBVuHqk%2B3aSxmKGSwHoupDan1DGraVKLU%2BjYpOPdYHFBjiY9%2B3r6RPkCLCZ04M5WDuzDo0sX6ZPLxeSeVAp2ZCLGCosSgBh1JBTnAarSWDA3sEIQxhvOvp6IahjQtHJubvOGLgbx0yVD7k%2Bou9qNhbMYcsWjjzvyRu9H%2BChaaEu8XqJP%2BIXfb2IKFwMANeOHYdTaSR0j8FTu27BPkssVGcnjckEqdjQfg7B003AtmhSVTk6SAG9H290Q5TMYzixoPvVMEJoYoAr0WLjBruwl5JxBuRDmX6iCTM526VWtEkmjuAF3uCllQ2mDefnHW8lXZ%2BrQ8XpJ9EFBm6khoH4Dacn7GGvaw50upUag5GJGfj8Gl%2BbFxT78%2FhUDZZ5ON0OJXObiPS0WIuZPgBVj68rkJa6TqN71mnuIOwLC23xpTZaGQtGYvPbyNWAN27fHYBzhGtMe8ro665822qdVBVleh2FS5U%2FMV7JlJlav9aYxnKGp3KzuaQMZRqvJ%2F%2Frj8Ff7TwrX9RGpg4bcZ09zSGR%2F7p4OPrMBIAj8HMmGydZfy1PjZDnQE7GVB3vAP7%2F3fjq8ItILQLwI7Ylp5ekBOkKlMLahyMIGOqUBEnHrXfbwfxKWT9QWXR5dDOVNefCgyldr4SjOC21X3w%2FbMacb5Pk8TKr9PnSdA05cAQKmckwKM8VJ%2BMGuIaly3oIVyuSOgZNT5gZVqks4BtwSjrny2Ecc7TmCYmjatVvrJl2pqQa49atDKC8ylTNpWC28E3F6JVK8UkH%2B%2FLpaUAJkXbTR729lgcYU9ouknoRuO%2B3v25zzg7Cr9mlzXE7VMPJFk9H%2F&X-Amz-Signature=1a322cbe833145dd949063214722441aa673440aec7a30182cc25124c1f7b990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
