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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUQQAQBO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC84hCJ0AH1eNWQUshE%2B5l3j06k3nujXgOp5xLjMFCjFwIgQiug7bZqyKXoAEdat4gboUnzGmMCzheAo%2BMyPBGFZUUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnalhTHJfCmsdl%2B7CrcA%2FvIlsOTS2OitUueT%2BagnXF3HHZAd5%2BnQrtlptyWIcbwSlG2p01MxA2oWy65tJNwr9DjcIEJWaC3cp%2FLCv8pS9cZSvhPzdyom9zOMkUHB%2FbW0JFXPhWppK%2BnldNnLzaCUjD2W9ooZq3CtqzpRogIMm1bEJyoauuNtSC36sRgDi1Pee0vA5M9E%2Fnsr008XpQnIftsZzPS8B8veoiJArZ5hMF22dnY%2BGjk%2FcH7QJddLdB7PE%2FPMKMrzJQZ7DuqD%2BSUrMsUNLHK4MHiK%2BjfPvMcrhGvxbMzWMzaPIwHuqOOWg9AtUw%2Fp2WCz%2BENKZvH1jzptCVDy33d6qjL%2BVKr90gWRrg7QVBi3jdTo%2FlDwIx%2Ffo2Thuh2X44z0DSccdKb41Z5JV8wtx%2BoP8cM0sC2VGuJET16Dv36AB%2Bpj1aD2gVLutRB6rjSOImCUQa2EgQv%2Fz0G%2FI%2FuNR8sxiDp3C6us8J7Ah%2BJUtI8EPODmTA9ALwyCkh7p%2F8n8Dtgdyuh7fjA1yXuGMcUwtuULzCbOuPbvFokHV1JrMzpmDr2AV9FBUPjrH38B10VjuDAtTSVfVVyHop%2FwodVsNveWFUkU92D5Fsgp%2BtfF2HxcVzhKT1DHYXBOE1ERGZ8%2FBop9wfznyhMMNHNi8MGOqUBUQYdSv6ASha2myhfhVqx6I02X1jXe2Zs56YnaNeC4u%2FlkfWP1R7Wu%2B4fFO%2FC6PLcL%2Fd9FehrLEe7R5ciGpjkJDYo56%2FjlqzzabCAA2g2b26opjI0PPVm1BRVDG%2BQlOwbi%2B1cZhGQdxVUL%2B29GyJcnbpQH0LCZJvMpws2xha974%2Fu%2FX316nYwI%2BdNl0VSiB8Ba4Q4j6RIrvwxCIwglR7%2BiUjYpUeb&X-Amz-Signature=f7a19ce75c147f24b93541661e71395cb74ce495172fc337e5ce7bbb158d7686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUQQAQBO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC84hCJ0AH1eNWQUshE%2B5l3j06k3nujXgOp5xLjMFCjFwIgQiug7bZqyKXoAEdat4gboUnzGmMCzheAo%2BMyPBGFZUUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnalhTHJfCmsdl%2B7CrcA%2FvIlsOTS2OitUueT%2BagnXF3HHZAd5%2BnQrtlptyWIcbwSlG2p01MxA2oWy65tJNwr9DjcIEJWaC3cp%2FLCv8pS9cZSvhPzdyom9zOMkUHB%2FbW0JFXPhWppK%2BnldNnLzaCUjD2W9ooZq3CtqzpRogIMm1bEJyoauuNtSC36sRgDi1Pee0vA5M9E%2Fnsr008XpQnIftsZzPS8B8veoiJArZ5hMF22dnY%2BGjk%2FcH7QJddLdB7PE%2FPMKMrzJQZ7DuqD%2BSUrMsUNLHK4MHiK%2BjfPvMcrhGvxbMzWMzaPIwHuqOOWg9AtUw%2Fp2WCz%2BENKZvH1jzptCVDy33d6qjL%2BVKr90gWRrg7QVBi3jdTo%2FlDwIx%2Ffo2Thuh2X44z0DSccdKb41Z5JV8wtx%2BoP8cM0sC2VGuJET16Dv36AB%2Bpj1aD2gVLutRB6rjSOImCUQa2EgQv%2Fz0G%2FI%2FuNR8sxiDp3C6us8J7Ah%2BJUtI8EPODmTA9ALwyCkh7p%2F8n8Dtgdyuh7fjA1yXuGMcUwtuULzCbOuPbvFokHV1JrMzpmDr2AV9FBUPjrH38B10VjuDAtTSVfVVyHop%2FwodVsNveWFUkU92D5Fsgp%2BtfF2HxcVzhKT1DHYXBOE1ERGZ8%2FBop9wfznyhMMNHNi8MGOqUBUQYdSv6ASha2myhfhVqx6I02X1jXe2Zs56YnaNeC4u%2FlkfWP1R7Wu%2B4fFO%2FC6PLcL%2Fd9FehrLEe7R5ciGpjkJDYo56%2FjlqzzabCAA2g2b26opjI0PPVm1BRVDG%2BQlOwbi%2B1cZhGQdxVUL%2B29GyJcnbpQH0LCZJvMpws2xha974%2Fu%2FX316nYwI%2BdNl0VSiB8Ba4Q4j6RIrvwxCIwglR7%2BiUjYpUeb&X-Amz-Signature=a16ba447d884992a1bcae88130d1fae3db9cabef0ca4f30b015d39caaa3f4059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUQQAQBO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC84hCJ0AH1eNWQUshE%2B5l3j06k3nujXgOp5xLjMFCjFwIgQiug7bZqyKXoAEdat4gboUnzGmMCzheAo%2BMyPBGFZUUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnalhTHJfCmsdl%2B7CrcA%2FvIlsOTS2OitUueT%2BagnXF3HHZAd5%2BnQrtlptyWIcbwSlG2p01MxA2oWy65tJNwr9DjcIEJWaC3cp%2FLCv8pS9cZSvhPzdyom9zOMkUHB%2FbW0JFXPhWppK%2BnldNnLzaCUjD2W9ooZq3CtqzpRogIMm1bEJyoauuNtSC36sRgDi1Pee0vA5M9E%2Fnsr008XpQnIftsZzPS8B8veoiJArZ5hMF22dnY%2BGjk%2FcH7QJddLdB7PE%2FPMKMrzJQZ7DuqD%2BSUrMsUNLHK4MHiK%2BjfPvMcrhGvxbMzWMzaPIwHuqOOWg9AtUw%2Fp2WCz%2BENKZvH1jzptCVDy33d6qjL%2BVKr90gWRrg7QVBi3jdTo%2FlDwIx%2Ffo2Thuh2X44z0DSccdKb41Z5JV8wtx%2BoP8cM0sC2VGuJET16Dv36AB%2Bpj1aD2gVLutRB6rjSOImCUQa2EgQv%2Fz0G%2FI%2FuNR8sxiDp3C6us8J7Ah%2BJUtI8EPODmTA9ALwyCkh7p%2F8n8Dtgdyuh7fjA1yXuGMcUwtuULzCbOuPbvFokHV1JrMzpmDr2AV9FBUPjrH38B10VjuDAtTSVfVVyHop%2FwodVsNveWFUkU92D5Fsgp%2BtfF2HxcVzhKT1DHYXBOE1ERGZ8%2FBop9wfznyhMMNHNi8MGOqUBUQYdSv6ASha2myhfhVqx6I02X1jXe2Zs56YnaNeC4u%2FlkfWP1R7Wu%2B4fFO%2FC6PLcL%2Fd9FehrLEe7R5ciGpjkJDYo56%2FjlqzzabCAA2g2b26opjI0PPVm1BRVDG%2BQlOwbi%2B1cZhGQdxVUL%2B29GyJcnbpQH0LCZJvMpws2xha974%2Fu%2FX316nYwI%2BdNl0VSiB8Ba4Q4j6RIrvwxCIwglR7%2BiUjYpUeb&X-Amz-Signature=41ffc1bd92660efd6253b5035db4714fb24808881e680e5d02b25519e9218fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUQQAQBO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC84hCJ0AH1eNWQUshE%2B5l3j06k3nujXgOp5xLjMFCjFwIgQiug7bZqyKXoAEdat4gboUnzGmMCzheAo%2BMyPBGFZUUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnalhTHJfCmsdl%2B7CrcA%2FvIlsOTS2OitUueT%2BagnXF3HHZAd5%2BnQrtlptyWIcbwSlG2p01MxA2oWy65tJNwr9DjcIEJWaC3cp%2FLCv8pS9cZSvhPzdyom9zOMkUHB%2FbW0JFXPhWppK%2BnldNnLzaCUjD2W9ooZq3CtqzpRogIMm1bEJyoauuNtSC36sRgDi1Pee0vA5M9E%2Fnsr008XpQnIftsZzPS8B8veoiJArZ5hMF22dnY%2BGjk%2FcH7QJddLdB7PE%2FPMKMrzJQZ7DuqD%2BSUrMsUNLHK4MHiK%2BjfPvMcrhGvxbMzWMzaPIwHuqOOWg9AtUw%2Fp2WCz%2BENKZvH1jzptCVDy33d6qjL%2BVKr90gWRrg7QVBi3jdTo%2FlDwIx%2Ffo2Thuh2X44z0DSccdKb41Z5JV8wtx%2BoP8cM0sC2VGuJET16Dv36AB%2Bpj1aD2gVLutRB6rjSOImCUQa2EgQv%2Fz0G%2FI%2FuNR8sxiDp3C6us8J7Ah%2BJUtI8EPODmTA9ALwyCkh7p%2F8n8Dtgdyuh7fjA1yXuGMcUwtuULzCbOuPbvFokHV1JrMzpmDr2AV9FBUPjrH38B10VjuDAtTSVfVVyHop%2FwodVsNveWFUkU92D5Fsgp%2BtfF2HxcVzhKT1DHYXBOE1ERGZ8%2FBop9wfznyhMMNHNi8MGOqUBUQYdSv6ASha2myhfhVqx6I02X1jXe2Zs56YnaNeC4u%2FlkfWP1R7Wu%2B4fFO%2FC6PLcL%2Fd9FehrLEe7R5ciGpjkJDYo56%2FjlqzzabCAA2g2b26opjI0PPVm1BRVDG%2BQlOwbi%2B1cZhGQdxVUL%2B29GyJcnbpQH0LCZJvMpws2xha974%2Fu%2FX316nYwI%2BdNl0VSiB8Ba4Q4j6RIrvwxCIwglR7%2BiUjYpUeb&X-Amz-Signature=490cff07a4d3989255eb5327aa034583798dd52c3eb698c5fa3b3f5c07fd373b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUQQAQBO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC84hCJ0AH1eNWQUshE%2B5l3j06k3nujXgOp5xLjMFCjFwIgQiug7bZqyKXoAEdat4gboUnzGmMCzheAo%2BMyPBGFZUUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnalhTHJfCmsdl%2B7CrcA%2FvIlsOTS2OitUueT%2BagnXF3HHZAd5%2BnQrtlptyWIcbwSlG2p01MxA2oWy65tJNwr9DjcIEJWaC3cp%2FLCv8pS9cZSvhPzdyom9zOMkUHB%2FbW0JFXPhWppK%2BnldNnLzaCUjD2W9ooZq3CtqzpRogIMm1bEJyoauuNtSC36sRgDi1Pee0vA5M9E%2Fnsr008XpQnIftsZzPS8B8veoiJArZ5hMF22dnY%2BGjk%2FcH7QJddLdB7PE%2FPMKMrzJQZ7DuqD%2BSUrMsUNLHK4MHiK%2BjfPvMcrhGvxbMzWMzaPIwHuqOOWg9AtUw%2Fp2WCz%2BENKZvH1jzptCVDy33d6qjL%2BVKr90gWRrg7QVBi3jdTo%2FlDwIx%2Ffo2Thuh2X44z0DSccdKb41Z5JV8wtx%2BoP8cM0sC2VGuJET16Dv36AB%2Bpj1aD2gVLutRB6rjSOImCUQa2EgQv%2Fz0G%2FI%2FuNR8sxiDp3C6us8J7Ah%2BJUtI8EPODmTA9ALwyCkh7p%2F8n8Dtgdyuh7fjA1yXuGMcUwtuULzCbOuPbvFokHV1JrMzpmDr2AV9FBUPjrH38B10VjuDAtTSVfVVyHop%2FwodVsNveWFUkU92D5Fsgp%2BtfF2HxcVzhKT1DHYXBOE1ERGZ8%2FBop9wfznyhMMNHNi8MGOqUBUQYdSv6ASha2myhfhVqx6I02X1jXe2Zs56YnaNeC4u%2FlkfWP1R7Wu%2B4fFO%2FC6PLcL%2Fd9FehrLEe7R5ciGpjkJDYo56%2FjlqzzabCAA2g2b26opjI0PPVm1BRVDG%2BQlOwbi%2B1cZhGQdxVUL%2B29GyJcnbpQH0LCZJvMpws2xha974%2Fu%2FX316nYwI%2BdNl0VSiB8Ba4Q4j6RIrvwxCIwglR7%2BiUjYpUeb&X-Amz-Signature=b03b85d772e303b6dff0699fbbd318c85d8f66d970ded3f960420589543901d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUQQAQBO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC84hCJ0AH1eNWQUshE%2B5l3j06k3nujXgOp5xLjMFCjFwIgQiug7bZqyKXoAEdat4gboUnzGmMCzheAo%2BMyPBGFZUUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnalhTHJfCmsdl%2B7CrcA%2FvIlsOTS2OitUueT%2BagnXF3HHZAd5%2BnQrtlptyWIcbwSlG2p01MxA2oWy65tJNwr9DjcIEJWaC3cp%2FLCv8pS9cZSvhPzdyom9zOMkUHB%2FbW0JFXPhWppK%2BnldNnLzaCUjD2W9ooZq3CtqzpRogIMm1bEJyoauuNtSC36sRgDi1Pee0vA5M9E%2Fnsr008XpQnIftsZzPS8B8veoiJArZ5hMF22dnY%2BGjk%2FcH7QJddLdB7PE%2FPMKMrzJQZ7DuqD%2BSUrMsUNLHK4MHiK%2BjfPvMcrhGvxbMzWMzaPIwHuqOOWg9AtUw%2Fp2WCz%2BENKZvH1jzptCVDy33d6qjL%2BVKr90gWRrg7QVBi3jdTo%2FlDwIx%2Ffo2Thuh2X44z0DSccdKb41Z5JV8wtx%2BoP8cM0sC2VGuJET16Dv36AB%2Bpj1aD2gVLutRB6rjSOImCUQa2EgQv%2Fz0G%2FI%2FuNR8sxiDp3C6us8J7Ah%2BJUtI8EPODmTA9ALwyCkh7p%2F8n8Dtgdyuh7fjA1yXuGMcUwtuULzCbOuPbvFokHV1JrMzpmDr2AV9FBUPjrH38B10VjuDAtTSVfVVyHop%2FwodVsNveWFUkU92D5Fsgp%2BtfF2HxcVzhKT1DHYXBOE1ERGZ8%2FBop9wfznyhMMNHNi8MGOqUBUQYdSv6ASha2myhfhVqx6I02X1jXe2Zs56YnaNeC4u%2FlkfWP1R7Wu%2B4fFO%2FC6PLcL%2Fd9FehrLEe7R5ciGpjkJDYo56%2FjlqzzabCAA2g2b26opjI0PPVm1BRVDG%2BQlOwbi%2B1cZhGQdxVUL%2B29GyJcnbpQH0LCZJvMpws2xha974%2Fu%2FX316nYwI%2BdNl0VSiB8Ba4Q4j6RIrvwxCIwglR7%2BiUjYpUeb&X-Amz-Signature=9762206c09b679f532bac0b397017def030c9ac98774db8f20423daa5c44d0ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUQQAQBO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC84hCJ0AH1eNWQUshE%2B5l3j06k3nujXgOp5xLjMFCjFwIgQiug7bZqyKXoAEdat4gboUnzGmMCzheAo%2BMyPBGFZUUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnalhTHJfCmsdl%2B7CrcA%2FvIlsOTS2OitUueT%2BagnXF3HHZAd5%2BnQrtlptyWIcbwSlG2p01MxA2oWy65tJNwr9DjcIEJWaC3cp%2FLCv8pS9cZSvhPzdyom9zOMkUHB%2FbW0JFXPhWppK%2BnldNnLzaCUjD2W9ooZq3CtqzpRogIMm1bEJyoauuNtSC36sRgDi1Pee0vA5M9E%2Fnsr008XpQnIftsZzPS8B8veoiJArZ5hMF22dnY%2BGjk%2FcH7QJddLdB7PE%2FPMKMrzJQZ7DuqD%2BSUrMsUNLHK4MHiK%2BjfPvMcrhGvxbMzWMzaPIwHuqOOWg9AtUw%2Fp2WCz%2BENKZvH1jzptCVDy33d6qjL%2BVKr90gWRrg7QVBi3jdTo%2FlDwIx%2Ffo2Thuh2X44z0DSccdKb41Z5JV8wtx%2BoP8cM0sC2VGuJET16Dv36AB%2Bpj1aD2gVLutRB6rjSOImCUQa2EgQv%2Fz0G%2FI%2FuNR8sxiDp3C6us8J7Ah%2BJUtI8EPODmTA9ALwyCkh7p%2F8n8Dtgdyuh7fjA1yXuGMcUwtuULzCbOuPbvFokHV1JrMzpmDr2AV9FBUPjrH38B10VjuDAtTSVfVVyHop%2FwodVsNveWFUkU92D5Fsgp%2BtfF2HxcVzhKT1DHYXBOE1ERGZ8%2FBop9wfznyhMMNHNi8MGOqUBUQYdSv6ASha2myhfhVqx6I02X1jXe2Zs56YnaNeC4u%2FlkfWP1R7Wu%2B4fFO%2FC6PLcL%2Fd9FehrLEe7R5ciGpjkJDYo56%2FjlqzzabCAA2g2b26opjI0PPVm1BRVDG%2BQlOwbi%2B1cZhGQdxVUL%2B29GyJcnbpQH0LCZJvMpws2xha974%2Fu%2FX316nYwI%2BdNl0VSiB8Ba4Q4j6RIrvwxCIwglR7%2BiUjYpUeb&X-Amz-Signature=14dd9313dd3cc297956b631ceb312c8f7e875945039317a0a476588e61d06786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUQQAQBO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC84hCJ0AH1eNWQUshE%2B5l3j06k3nujXgOp5xLjMFCjFwIgQiug7bZqyKXoAEdat4gboUnzGmMCzheAo%2BMyPBGFZUUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnalhTHJfCmsdl%2B7CrcA%2FvIlsOTS2OitUueT%2BagnXF3HHZAd5%2BnQrtlptyWIcbwSlG2p01MxA2oWy65tJNwr9DjcIEJWaC3cp%2FLCv8pS9cZSvhPzdyom9zOMkUHB%2FbW0JFXPhWppK%2BnldNnLzaCUjD2W9ooZq3CtqzpRogIMm1bEJyoauuNtSC36sRgDi1Pee0vA5M9E%2Fnsr008XpQnIftsZzPS8B8veoiJArZ5hMF22dnY%2BGjk%2FcH7QJddLdB7PE%2FPMKMrzJQZ7DuqD%2BSUrMsUNLHK4MHiK%2BjfPvMcrhGvxbMzWMzaPIwHuqOOWg9AtUw%2Fp2WCz%2BENKZvH1jzptCVDy33d6qjL%2BVKr90gWRrg7QVBi3jdTo%2FlDwIx%2Ffo2Thuh2X44z0DSccdKb41Z5JV8wtx%2BoP8cM0sC2VGuJET16Dv36AB%2Bpj1aD2gVLutRB6rjSOImCUQa2EgQv%2Fz0G%2FI%2FuNR8sxiDp3C6us8J7Ah%2BJUtI8EPODmTA9ALwyCkh7p%2F8n8Dtgdyuh7fjA1yXuGMcUwtuULzCbOuPbvFokHV1JrMzpmDr2AV9FBUPjrH38B10VjuDAtTSVfVVyHop%2FwodVsNveWFUkU92D5Fsgp%2BtfF2HxcVzhKT1DHYXBOE1ERGZ8%2FBop9wfznyhMMNHNi8MGOqUBUQYdSv6ASha2myhfhVqx6I02X1jXe2Zs56YnaNeC4u%2FlkfWP1R7Wu%2B4fFO%2FC6PLcL%2Fd9FehrLEe7R5ciGpjkJDYo56%2FjlqzzabCAA2g2b26opjI0PPVm1BRVDG%2BQlOwbi%2B1cZhGQdxVUL%2B29GyJcnbpQH0LCZJvMpws2xha974%2Fu%2FX316nYwI%2BdNl0VSiB8Ba4Q4j6RIrvwxCIwglR7%2BiUjYpUeb&X-Amz-Signature=353e13104ece2c695d495d3a16cba53b99d47bda648d062e4c169ed5b5ffd019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
