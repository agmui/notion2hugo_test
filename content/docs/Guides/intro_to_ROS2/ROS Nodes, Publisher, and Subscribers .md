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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T44ZI4H%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCn0pbRHfAIIMhCcLg8DT3aU569aSzqhIctxLii5z50agIhANx8zQil%2F%2BM0QzD6e9%2BmRfaeo8%2BK54vk0HUWQ4Xr1dM3Kv8DCGsQABoMNjM3NDIzMTgzODA1Igw2hVjanvdZjj245Dsq3AN%2FEKs4fA%2FKhHsljPTtm8RcljVMX465z%2Bak%2BPjHKxt1lpyw7jo6jcYEZCNuRBtpY%2Bcj2VJr6Gmvzsq5Z4%2FnCY3ydfoGJO3qvKe385H85e53IKNw62%2BcvY1xHOAodR6SnaxdSse8WcA5L3GxU1W%2F2qo24FhmoiPqBXVLiYKa3OMHUhJoCu2Z%2BLZ17Q4bB%2FMTBxSoNYbk0zBOywm%2B7iuyPJlg9mGbm6OmkBJJO5w8t%2FHJNDr8buvcQfnFOPU2Y5Pm%2Bw6pmcaJLWLzueL%2F%2BHmTPuKmB0wx3q4hJE1lCXG41YhGoes2iqB3P7hOkIPSYelC%2FXe2Em9HtMnn0fxfNnHFXObkSNPenZDoaEtdXi7j%2BQeHCDNbhSySBaPMgxutowxPRe%2Fht%2FPs7bDcF4x8jTkOFGGxL%2F2vR3%2FE8ENKUm3RrGOp8Wd%2B57EPYeZQtqjs9JEKbGrR5tEh2VtyiglNfqvISEYNQwjtm2OfIoAt1rNBIildUi5x%2BnWgODfuquTyr52ckEtXWVOhB2Rv5PWDCbtn6HUD50%2F1CPSo47rCl%2FsxG9bzvIMbexb2KdZ0epBYbt8dFeGoS7IydouyLkrNtoyD5pjEESu%2FH1AvMF5mAvmPgaS9zWPZqu68A9WYBASiRjCfvei%2BBjqkAdeJh%2FfTz1gByikKibgDokEz9f4oAYijknwnZku6iexmguIKqNEl2ojASEU05ZI5Q5BP7HnUrKrrEtkGS9QPx0pW%2F9H%2B6c4bkKq8Jxb2BjR1C0LxdENvWgiDsaV7ljTjnNgMNvrevGPehpEoPWhmXgih%2FIcL%2BxrD2VzAneM7k5HPDYoTWg3g134toDKxdKMiFHLZ%2FXN6diqn6OQYnUPjxdhlqKPO&X-Amz-Signature=74d7dc06f9ee7eb997ada681c9d23e640e06f1d86f7310a9d2211c1f89716795&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T44ZI4H%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCn0pbRHfAIIMhCcLg8DT3aU569aSzqhIctxLii5z50agIhANx8zQil%2F%2BM0QzD6e9%2BmRfaeo8%2BK54vk0HUWQ4Xr1dM3Kv8DCGsQABoMNjM3NDIzMTgzODA1Igw2hVjanvdZjj245Dsq3AN%2FEKs4fA%2FKhHsljPTtm8RcljVMX465z%2Bak%2BPjHKxt1lpyw7jo6jcYEZCNuRBtpY%2Bcj2VJr6Gmvzsq5Z4%2FnCY3ydfoGJO3qvKe385H85e53IKNw62%2BcvY1xHOAodR6SnaxdSse8WcA5L3GxU1W%2F2qo24FhmoiPqBXVLiYKa3OMHUhJoCu2Z%2BLZ17Q4bB%2FMTBxSoNYbk0zBOywm%2B7iuyPJlg9mGbm6OmkBJJO5w8t%2FHJNDr8buvcQfnFOPU2Y5Pm%2Bw6pmcaJLWLzueL%2F%2BHmTPuKmB0wx3q4hJE1lCXG41YhGoes2iqB3P7hOkIPSYelC%2FXe2Em9HtMnn0fxfNnHFXObkSNPenZDoaEtdXi7j%2BQeHCDNbhSySBaPMgxutowxPRe%2Fht%2FPs7bDcF4x8jTkOFGGxL%2F2vR3%2FE8ENKUm3RrGOp8Wd%2B57EPYeZQtqjs9JEKbGrR5tEh2VtyiglNfqvISEYNQwjtm2OfIoAt1rNBIildUi5x%2BnWgODfuquTyr52ckEtXWVOhB2Rv5PWDCbtn6HUD50%2F1CPSo47rCl%2FsxG9bzvIMbexb2KdZ0epBYbt8dFeGoS7IydouyLkrNtoyD5pjEESu%2FH1AvMF5mAvmPgaS9zWPZqu68A9WYBASiRjCfvei%2BBjqkAdeJh%2FfTz1gByikKibgDokEz9f4oAYijknwnZku6iexmguIKqNEl2ojASEU05ZI5Q5BP7HnUrKrrEtkGS9QPx0pW%2F9H%2B6c4bkKq8Jxb2BjR1C0LxdENvWgiDsaV7ljTjnNgMNvrevGPehpEoPWhmXgih%2FIcL%2BxrD2VzAneM7k5HPDYoTWg3g134toDKxdKMiFHLZ%2FXN6diqn6OQYnUPjxdhlqKPO&X-Amz-Signature=4afbfcf4d824f29bfa306a4e4ac02f1d17924737a3f36df53574ee515e3a5ef4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T44ZI4H%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCn0pbRHfAIIMhCcLg8DT3aU569aSzqhIctxLii5z50agIhANx8zQil%2F%2BM0QzD6e9%2BmRfaeo8%2BK54vk0HUWQ4Xr1dM3Kv8DCGsQABoMNjM3NDIzMTgzODA1Igw2hVjanvdZjj245Dsq3AN%2FEKs4fA%2FKhHsljPTtm8RcljVMX465z%2Bak%2BPjHKxt1lpyw7jo6jcYEZCNuRBtpY%2Bcj2VJr6Gmvzsq5Z4%2FnCY3ydfoGJO3qvKe385H85e53IKNw62%2BcvY1xHOAodR6SnaxdSse8WcA5L3GxU1W%2F2qo24FhmoiPqBXVLiYKa3OMHUhJoCu2Z%2BLZ17Q4bB%2FMTBxSoNYbk0zBOywm%2B7iuyPJlg9mGbm6OmkBJJO5w8t%2FHJNDr8buvcQfnFOPU2Y5Pm%2Bw6pmcaJLWLzueL%2F%2BHmTPuKmB0wx3q4hJE1lCXG41YhGoes2iqB3P7hOkIPSYelC%2FXe2Em9HtMnn0fxfNnHFXObkSNPenZDoaEtdXi7j%2BQeHCDNbhSySBaPMgxutowxPRe%2Fht%2FPs7bDcF4x8jTkOFGGxL%2F2vR3%2FE8ENKUm3RrGOp8Wd%2B57EPYeZQtqjs9JEKbGrR5tEh2VtyiglNfqvISEYNQwjtm2OfIoAt1rNBIildUi5x%2BnWgODfuquTyr52ckEtXWVOhB2Rv5PWDCbtn6HUD50%2F1CPSo47rCl%2FsxG9bzvIMbexb2KdZ0epBYbt8dFeGoS7IydouyLkrNtoyD5pjEESu%2FH1AvMF5mAvmPgaS9zWPZqu68A9WYBASiRjCfvei%2BBjqkAdeJh%2FfTz1gByikKibgDokEz9f4oAYijknwnZku6iexmguIKqNEl2ojASEU05ZI5Q5BP7HnUrKrrEtkGS9QPx0pW%2F9H%2B6c4bkKq8Jxb2BjR1C0LxdENvWgiDsaV7ljTjnNgMNvrevGPehpEoPWhmXgih%2FIcL%2BxrD2VzAneM7k5HPDYoTWg3g134toDKxdKMiFHLZ%2FXN6diqn6OQYnUPjxdhlqKPO&X-Amz-Signature=ea6429d326729d60894e37ca97472b831d19453d140b0b60703eeb84627733f3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T44ZI4H%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCn0pbRHfAIIMhCcLg8DT3aU569aSzqhIctxLii5z50agIhANx8zQil%2F%2BM0QzD6e9%2BmRfaeo8%2BK54vk0HUWQ4Xr1dM3Kv8DCGsQABoMNjM3NDIzMTgzODA1Igw2hVjanvdZjj245Dsq3AN%2FEKs4fA%2FKhHsljPTtm8RcljVMX465z%2Bak%2BPjHKxt1lpyw7jo6jcYEZCNuRBtpY%2Bcj2VJr6Gmvzsq5Z4%2FnCY3ydfoGJO3qvKe385H85e53IKNw62%2BcvY1xHOAodR6SnaxdSse8WcA5L3GxU1W%2F2qo24FhmoiPqBXVLiYKa3OMHUhJoCu2Z%2BLZ17Q4bB%2FMTBxSoNYbk0zBOywm%2B7iuyPJlg9mGbm6OmkBJJO5w8t%2FHJNDr8buvcQfnFOPU2Y5Pm%2Bw6pmcaJLWLzueL%2F%2BHmTPuKmB0wx3q4hJE1lCXG41YhGoes2iqB3P7hOkIPSYelC%2FXe2Em9HtMnn0fxfNnHFXObkSNPenZDoaEtdXi7j%2BQeHCDNbhSySBaPMgxutowxPRe%2Fht%2FPs7bDcF4x8jTkOFGGxL%2F2vR3%2FE8ENKUm3RrGOp8Wd%2B57EPYeZQtqjs9JEKbGrR5tEh2VtyiglNfqvISEYNQwjtm2OfIoAt1rNBIildUi5x%2BnWgODfuquTyr52ckEtXWVOhB2Rv5PWDCbtn6HUD50%2F1CPSo47rCl%2FsxG9bzvIMbexb2KdZ0epBYbt8dFeGoS7IydouyLkrNtoyD5pjEESu%2FH1AvMF5mAvmPgaS9zWPZqu68A9WYBASiRjCfvei%2BBjqkAdeJh%2FfTz1gByikKibgDokEz9f4oAYijknwnZku6iexmguIKqNEl2ojASEU05ZI5Q5BP7HnUrKrrEtkGS9QPx0pW%2F9H%2B6c4bkKq8Jxb2BjR1C0LxdENvWgiDsaV7ljTjnNgMNvrevGPehpEoPWhmXgih%2FIcL%2BxrD2VzAneM7k5HPDYoTWg3g134toDKxdKMiFHLZ%2FXN6diqn6OQYnUPjxdhlqKPO&X-Amz-Signature=d70b45afeebbe9a685889abd6a63c09ed47d93fab604eb9ec94a03d33a64f42c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T44ZI4H%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCn0pbRHfAIIMhCcLg8DT3aU569aSzqhIctxLii5z50agIhANx8zQil%2F%2BM0QzD6e9%2BmRfaeo8%2BK54vk0HUWQ4Xr1dM3Kv8DCGsQABoMNjM3NDIzMTgzODA1Igw2hVjanvdZjj245Dsq3AN%2FEKs4fA%2FKhHsljPTtm8RcljVMX465z%2Bak%2BPjHKxt1lpyw7jo6jcYEZCNuRBtpY%2Bcj2VJr6Gmvzsq5Z4%2FnCY3ydfoGJO3qvKe385H85e53IKNw62%2BcvY1xHOAodR6SnaxdSse8WcA5L3GxU1W%2F2qo24FhmoiPqBXVLiYKa3OMHUhJoCu2Z%2BLZ17Q4bB%2FMTBxSoNYbk0zBOywm%2B7iuyPJlg9mGbm6OmkBJJO5w8t%2FHJNDr8buvcQfnFOPU2Y5Pm%2Bw6pmcaJLWLzueL%2F%2BHmTPuKmB0wx3q4hJE1lCXG41YhGoes2iqB3P7hOkIPSYelC%2FXe2Em9HtMnn0fxfNnHFXObkSNPenZDoaEtdXi7j%2BQeHCDNbhSySBaPMgxutowxPRe%2Fht%2FPs7bDcF4x8jTkOFGGxL%2F2vR3%2FE8ENKUm3RrGOp8Wd%2B57EPYeZQtqjs9JEKbGrR5tEh2VtyiglNfqvISEYNQwjtm2OfIoAt1rNBIildUi5x%2BnWgODfuquTyr52ckEtXWVOhB2Rv5PWDCbtn6HUD50%2F1CPSo47rCl%2FsxG9bzvIMbexb2KdZ0epBYbt8dFeGoS7IydouyLkrNtoyD5pjEESu%2FH1AvMF5mAvmPgaS9zWPZqu68A9WYBASiRjCfvei%2BBjqkAdeJh%2FfTz1gByikKibgDokEz9f4oAYijknwnZku6iexmguIKqNEl2ojASEU05ZI5Q5BP7HnUrKrrEtkGS9QPx0pW%2F9H%2B6c4bkKq8Jxb2BjR1C0LxdENvWgiDsaV7ljTjnNgMNvrevGPehpEoPWhmXgih%2FIcL%2BxrD2VzAneM7k5HPDYoTWg3g134toDKxdKMiFHLZ%2FXN6diqn6OQYnUPjxdhlqKPO&X-Amz-Signature=98eab88e38dfb389385e40d2a1d0d51c9131de2a6e5c7e1bf74c3c8505403826&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T44ZI4H%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCn0pbRHfAIIMhCcLg8DT3aU569aSzqhIctxLii5z50agIhANx8zQil%2F%2BM0QzD6e9%2BmRfaeo8%2BK54vk0HUWQ4Xr1dM3Kv8DCGsQABoMNjM3NDIzMTgzODA1Igw2hVjanvdZjj245Dsq3AN%2FEKs4fA%2FKhHsljPTtm8RcljVMX465z%2Bak%2BPjHKxt1lpyw7jo6jcYEZCNuRBtpY%2Bcj2VJr6Gmvzsq5Z4%2FnCY3ydfoGJO3qvKe385H85e53IKNw62%2BcvY1xHOAodR6SnaxdSse8WcA5L3GxU1W%2F2qo24FhmoiPqBXVLiYKa3OMHUhJoCu2Z%2BLZ17Q4bB%2FMTBxSoNYbk0zBOywm%2B7iuyPJlg9mGbm6OmkBJJO5w8t%2FHJNDr8buvcQfnFOPU2Y5Pm%2Bw6pmcaJLWLzueL%2F%2BHmTPuKmB0wx3q4hJE1lCXG41YhGoes2iqB3P7hOkIPSYelC%2FXe2Em9HtMnn0fxfNnHFXObkSNPenZDoaEtdXi7j%2BQeHCDNbhSySBaPMgxutowxPRe%2Fht%2FPs7bDcF4x8jTkOFGGxL%2F2vR3%2FE8ENKUm3RrGOp8Wd%2B57EPYeZQtqjs9JEKbGrR5tEh2VtyiglNfqvISEYNQwjtm2OfIoAt1rNBIildUi5x%2BnWgODfuquTyr52ckEtXWVOhB2Rv5PWDCbtn6HUD50%2F1CPSo47rCl%2FsxG9bzvIMbexb2KdZ0epBYbt8dFeGoS7IydouyLkrNtoyD5pjEESu%2FH1AvMF5mAvmPgaS9zWPZqu68A9WYBASiRjCfvei%2BBjqkAdeJh%2FfTz1gByikKibgDokEz9f4oAYijknwnZku6iexmguIKqNEl2ojASEU05ZI5Q5BP7HnUrKrrEtkGS9QPx0pW%2F9H%2B6c4bkKq8Jxb2BjR1C0LxdENvWgiDsaV7ljTjnNgMNvrevGPehpEoPWhmXgih%2FIcL%2BxrD2VzAneM7k5HPDYoTWg3g134toDKxdKMiFHLZ%2FXN6diqn6OQYnUPjxdhlqKPO&X-Amz-Signature=c0e1c057a4a0127391670532e89b5ccbffab4e51d5adb0bbe0cef91a7fd3c270&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T44ZI4H%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCn0pbRHfAIIMhCcLg8DT3aU569aSzqhIctxLii5z50agIhANx8zQil%2F%2BM0QzD6e9%2BmRfaeo8%2BK54vk0HUWQ4Xr1dM3Kv8DCGsQABoMNjM3NDIzMTgzODA1Igw2hVjanvdZjj245Dsq3AN%2FEKs4fA%2FKhHsljPTtm8RcljVMX465z%2Bak%2BPjHKxt1lpyw7jo6jcYEZCNuRBtpY%2Bcj2VJr6Gmvzsq5Z4%2FnCY3ydfoGJO3qvKe385H85e53IKNw62%2BcvY1xHOAodR6SnaxdSse8WcA5L3GxU1W%2F2qo24FhmoiPqBXVLiYKa3OMHUhJoCu2Z%2BLZ17Q4bB%2FMTBxSoNYbk0zBOywm%2B7iuyPJlg9mGbm6OmkBJJO5w8t%2FHJNDr8buvcQfnFOPU2Y5Pm%2Bw6pmcaJLWLzueL%2F%2BHmTPuKmB0wx3q4hJE1lCXG41YhGoes2iqB3P7hOkIPSYelC%2FXe2Em9HtMnn0fxfNnHFXObkSNPenZDoaEtdXi7j%2BQeHCDNbhSySBaPMgxutowxPRe%2Fht%2FPs7bDcF4x8jTkOFGGxL%2F2vR3%2FE8ENKUm3RrGOp8Wd%2B57EPYeZQtqjs9JEKbGrR5tEh2VtyiglNfqvISEYNQwjtm2OfIoAt1rNBIildUi5x%2BnWgODfuquTyr52ckEtXWVOhB2Rv5PWDCbtn6HUD50%2F1CPSo47rCl%2FsxG9bzvIMbexb2KdZ0epBYbt8dFeGoS7IydouyLkrNtoyD5pjEESu%2FH1AvMF5mAvmPgaS9zWPZqu68A9WYBASiRjCfvei%2BBjqkAdeJh%2FfTz1gByikKibgDokEz9f4oAYijknwnZku6iexmguIKqNEl2ojASEU05ZI5Q5BP7HnUrKrrEtkGS9QPx0pW%2F9H%2B6c4bkKq8Jxb2BjR1C0LxdENvWgiDsaV7ljTjnNgMNvrevGPehpEoPWhmXgih%2FIcL%2BxrD2VzAneM7k5HPDYoTWg3g134toDKxdKMiFHLZ%2FXN6diqn6OQYnUPjxdhlqKPO&X-Amz-Signature=09a455045897541f17b2552e046ca005d2fbbf848209dd6c012a296eafb66105&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T44ZI4H%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCn0pbRHfAIIMhCcLg8DT3aU569aSzqhIctxLii5z50agIhANx8zQil%2F%2BM0QzD6e9%2BmRfaeo8%2BK54vk0HUWQ4Xr1dM3Kv8DCGsQABoMNjM3NDIzMTgzODA1Igw2hVjanvdZjj245Dsq3AN%2FEKs4fA%2FKhHsljPTtm8RcljVMX465z%2Bak%2BPjHKxt1lpyw7jo6jcYEZCNuRBtpY%2Bcj2VJr6Gmvzsq5Z4%2FnCY3ydfoGJO3qvKe385H85e53IKNw62%2BcvY1xHOAodR6SnaxdSse8WcA5L3GxU1W%2F2qo24FhmoiPqBXVLiYKa3OMHUhJoCu2Z%2BLZ17Q4bB%2FMTBxSoNYbk0zBOywm%2B7iuyPJlg9mGbm6OmkBJJO5w8t%2FHJNDr8buvcQfnFOPU2Y5Pm%2Bw6pmcaJLWLzueL%2F%2BHmTPuKmB0wx3q4hJE1lCXG41YhGoes2iqB3P7hOkIPSYelC%2FXe2Em9HtMnn0fxfNnHFXObkSNPenZDoaEtdXi7j%2BQeHCDNbhSySBaPMgxutowxPRe%2Fht%2FPs7bDcF4x8jTkOFGGxL%2F2vR3%2FE8ENKUm3RrGOp8Wd%2B57EPYeZQtqjs9JEKbGrR5tEh2VtyiglNfqvISEYNQwjtm2OfIoAt1rNBIildUi5x%2BnWgODfuquTyr52ckEtXWVOhB2Rv5PWDCbtn6HUD50%2F1CPSo47rCl%2FsxG9bzvIMbexb2KdZ0epBYbt8dFeGoS7IydouyLkrNtoyD5pjEESu%2FH1AvMF5mAvmPgaS9zWPZqu68A9WYBASiRjCfvei%2BBjqkAdeJh%2FfTz1gByikKibgDokEz9f4oAYijknwnZku6iexmguIKqNEl2ojASEU05ZI5Q5BP7HnUrKrrEtkGS9QPx0pW%2F9H%2B6c4bkKq8Jxb2BjR1C0LxdENvWgiDsaV7ljTjnNgMNvrevGPehpEoPWhmXgih%2FIcL%2BxrD2VzAneM7k5HPDYoTWg3g134toDKxdKMiFHLZ%2FXN6diqn6OQYnUPjxdhlqKPO&X-Amz-Signature=b6d881a459d5cf63e104796781b43f8e5122000ef912fa7f1ab4a89380908034&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
