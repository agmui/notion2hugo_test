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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBCOSUTM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFk1la3f9%2BkURdkuuU7hCH1C28XeGCd9hcjrhTNNWwBAiEAiAA6d3jDAHpb96k%2BVnSdb9mKRNctQH6iXBHVduAXtvMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKESVLPeOzyySyskiCrcA3JWaDQSNbG3vUfeXEAJwVBPyPWLCHrERatsbA7IZmtZsksByJa6qWLsU%2B3dHNA49CZOO%2BlTXtk%2BT77VKObi8auP4kLN%2FXTV7cXmcA%2FlCJkrUVvF%2BBrIfLvq6x%2BngPKIPAuewLqUddT3hTHHQpT03L8BA7%2FpV%2FVOwdyfbs41D%2FG1LqveGJ7E4KVqIqTQXnOiQ4v%2FcypkJTEoQcigVkGpGjKSFY7JMFEZvSxMUJjMo5O1B1gO39o16ceJ3jLjRrZTrT3KrDRvR44nOjVmHZ%2FuTpGawHFECwA42Us6jVKwk7dvpBP4xRJCi%2Fxx%2FNW8NIq8ZlUDB%2Bm5LeQnRYk3k2gYFiJsxRmW34Ztr3HjfMzy8MIsTjUT2obVnpwnW8N5v9%2BPRs38ao1xtgEquM9lh7rM01xE%2Be7aIktn187zwsEqfXYidef4rDP%2FER65lJEuNnOlCZzWlt2gtViHRBYwqe%2BGTVWsYyl8d0zOGAG8R6Jnywooj24ez%2B2PUzkTIi2RQD6T6flbsGobOo0zJjxT7cQhIDnmGZdp61l1KC%2BG8RSeEmrbWJiQ8JPCqOkggU3S6ixPg57XgvG%2FTG7os0Z%2F4NjJiELv9PDKWeTad3vsIAFHQLLk0rzppwnYBdAQi7SJMO3Lk78GOqUB0Cn2WWGLSYIlwO%2BwCja%2FtwokRAn%2BQxBMy1knbHfb2EzjK6kiDCLndHIpnyMd%2FrzIdVyisPAWoe8rXu0SwD6cQ1kFKcJRAaT8iasxZgBHP1vPT68RGPMf4ogyVssCoBVZ4hMBrXRCw%2Fz98qH%2F3DTDRDRp1slgrU%2FvltbmMmOmL%2BM9fNHbFY9iKeYG7YHBxL4XKIL8KGQt00YuVwkbs%2ByvGzARuBey&X-Amz-Signature=e8a66cb9184d347b78f18868a1bd03cdf367a2e9751d495a1df949da28a1d280&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBCOSUTM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFk1la3f9%2BkURdkuuU7hCH1C28XeGCd9hcjrhTNNWwBAiEAiAA6d3jDAHpb96k%2BVnSdb9mKRNctQH6iXBHVduAXtvMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKESVLPeOzyySyskiCrcA3JWaDQSNbG3vUfeXEAJwVBPyPWLCHrERatsbA7IZmtZsksByJa6qWLsU%2B3dHNA49CZOO%2BlTXtk%2BT77VKObi8auP4kLN%2FXTV7cXmcA%2FlCJkrUVvF%2BBrIfLvq6x%2BngPKIPAuewLqUddT3hTHHQpT03L8BA7%2FpV%2FVOwdyfbs41D%2FG1LqveGJ7E4KVqIqTQXnOiQ4v%2FcypkJTEoQcigVkGpGjKSFY7JMFEZvSxMUJjMo5O1B1gO39o16ceJ3jLjRrZTrT3KrDRvR44nOjVmHZ%2FuTpGawHFECwA42Us6jVKwk7dvpBP4xRJCi%2Fxx%2FNW8NIq8ZlUDB%2Bm5LeQnRYk3k2gYFiJsxRmW34Ztr3HjfMzy8MIsTjUT2obVnpwnW8N5v9%2BPRs38ao1xtgEquM9lh7rM01xE%2Be7aIktn187zwsEqfXYidef4rDP%2FER65lJEuNnOlCZzWlt2gtViHRBYwqe%2BGTVWsYyl8d0zOGAG8R6Jnywooj24ez%2B2PUzkTIi2RQD6T6flbsGobOo0zJjxT7cQhIDnmGZdp61l1KC%2BG8RSeEmrbWJiQ8JPCqOkggU3S6ixPg57XgvG%2FTG7os0Z%2F4NjJiELv9PDKWeTad3vsIAFHQLLk0rzppwnYBdAQi7SJMO3Lk78GOqUB0Cn2WWGLSYIlwO%2BwCja%2FtwokRAn%2BQxBMy1knbHfb2EzjK6kiDCLndHIpnyMd%2FrzIdVyisPAWoe8rXu0SwD6cQ1kFKcJRAaT8iasxZgBHP1vPT68RGPMf4ogyVssCoBVZ4hMBrXRCw%2Fz98qH%2F3DTDRDRp1slgrU%2FvltbmMmOmL%2BM9fNHbFY9iKeYG7YHBxL4XKIL8KGQt00YuVwkbs%2ByvGzARuBey&X-Amz-Signature=1cd22773faa71e44d588d24b57dbbc6a354250cdb7828c7849ea99f3c4928b22&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBCOSUTM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFk1la3f9%2BkURdkuuU7hCH1C28XeGCd9hcjrhTNNWwBAiEAiAA6d3jDAHpb96k%2BVnSdb9mKRNctQH6iXBHVduAXtvMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKESVLPeOzyySyskiCrcA3JWaDQSNbG3vUfeXEAJwVBPyPWLCHrERatsbA7IZmtZsksByJa6qWLsU%2B3dHNA49CZOO%2BlTXtk%2BT77VKObi8auP4kLN%2FXTV7cXmcA%2FlCJkrUVvF%2BBrIfLvq6x%2BngPKIPAuewLqUddT3hTHHQpT03L8BA7%2FpV%2FVOwdyfbs41D%2FG1LqveGJ7E4KVqIqTQXnOiQ4v%2FcypkJTEoQcigVkGpGjKSFY7JMFEZvSxMUJjMo5O1B1gO39o16ceJ3jLjRrZTrT3KrDRvR44nOjVmHZ%2FuTpGawHFECwA42Us6jVKwk7dvpBP4xRJCi%2Fxx%2FNW8NIq8ZlUDB%2Bm5LeQnRYk3k2gYFiJsxRmW34Ztr3HjfMzy8MIsTjUT2obVnpwnW8N5v9%2BPRs38ao1xtgEquM9lh7rM01xE%2Be7aIktn187zwsEqfXYidef4rDP%2FER65lJEuNnOlCZzWlt2gtViHRBYwqe%2BGTVWsYyl8d0zOGAG8R6Jnywooj24ez%2B2PUzkTIi2RQD6T6flbsGobOo0zJjxT7cQhIDnmGZdp61l1KC%2BG8RSeEmrbWJiQ8JPCqOkggU3S6ixPg57XgvG%2FTG7os0Z%2F4NjJiELv9PDKWeTad3vsIAFHQLLk0rzppwnYBdAQi7SJMO3Lk78GOqUB0Cn2WWGLSYIlwO%2BwCja%2FtwokRAn%2BQxBMy1knbHfb2EzjK6kiDCLndHIpnyMd%2FrzIdVyisPAWoe8rXu0SwD6cQ1kFKcJRAaT8iasxZgBHP1vPT68RGPMf4ogyVssCoBVZ4hMBrXRCw%2Fz98qH%2F3DTDRDRp1slgrU%2FvltbmMmOmL%2BM9fNHbFY9iKeYG7YHBxL4XKIL8KGQt00YuVwkbs%2ByvGzARuBey&X-Amz-Signature=517e58012263fd402ad949106ea892d592b54cb721dbe28466824ed27136b9e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBCOSUTM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFk1la3f9%2BkURdkuuU7hCH1C28XeGCd9hcjrhTNNWwBAiEAiAA6d3jDAHpb96k%2BVnSdb9mKRNctQH6iXBHVduAXtvMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKESVLPeOzyySyskiCrcA3JWaDQSNbG3vUfeXEAJwVBPyPWLCHrERatsbA7IZmtZsksByJa6qWLsU%2B3dHNA49CZOO%2BlTXtk%2BT77VKObi8auP4kLN%2FXTV7cXmcA%2FlCJkrUVvF%2BBrIfLvq6x%2BngPKIPAuewLqUddT3hTHHQpT03L8BA7%2FpV%2FVOwdyfbs41D%2FG1LqveGJ7E4KVqIqTQXnOiQ4v%2FcypkJTEoQcigVkGpGjKSFY7JMFEZvSxMUJjMo5O1B1gO39o16ceJ3jLjRrZTrT3KrDRvR44nOjVmHZ%2FuTpGawHFECwA42Us6jVKwk7dvpBP4xRJCi%2Fxx%2FNW8NIq8ZlUDB%2Bm5LeQnRYk3k2gYFiJsxRmW34Ztr3HjfMzy8MIsTjUT2obVnpwnW8N5v9%2BPRs38ao1xtgEquM9lh7rM01xE%2Be7aIktn187zwsEqfXYidef4rDP%2FER65lJEuNnOlCZzWlt2gtViHRBYwqe%2BGTVWsYyl8d0zOGAG8R6Jnywooj24ez%2B2PUzkTIi2RQD6T6flbsGobOo0zJjxT7cQhIDnmGZdp61l1KC%2BG8RSeEmrbWJiQ8JPCqOkggU3S6ixPg57XgvG%2FTG7os0Z%2F4NjJiELv9PDKWeTad3vsIAFHQLLk0rzppwnYBdAQi7SJMO3Lk78GOqUB0Cn2WWGLSYIlwO%2BwCja%2FtwokRAn%2BQxBMy1knbHfb2EzjK6kiDCLndHIpnyMd%2FrzIdVyisPAWoe8rXu0SwD6cQ1kFKcJRAaT8iasxZgBHP1vPT68RGPMf4ogyVssCoBVZ4hMBrXRCw%2Fz98qH%2F3DTDRDRp1slgrU%2FvltbmMmOmL%2BM9fNHbFY9iKeYG7YHBxL4XKIL8KGQt00YuVwkbs%2ByvGzARuBey&X-Amz-Signature=62edef60dfc474b94a09f8e5f8a2d9897906b15a99ca799329bff25094e7d96e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBCOSUTM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFk1la3f9%2BkURdkuuU7hCH1C28XeGCd9hcjrhTNNWwBAiEAiAA6d3jDAHpb96k%2BVnSdb9mKRNctQH6iXBHVduAXtvMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKESVLPeOzyySyskiCrcA3JWaDQSNbG3vUfeXEAJwVBPyPWLCHrERatsbA7IZmtZsksByJa6qWLsU%2B3dHNA49CZOO%2BlTXtk%2BT77VKObi8auP4kLN%2FXTV7cXmcA%2FlCJkrUVvF%2BBrIfLvq6x%2BngPKIPAuewLqUddT3hTHHQpT03L8BA7%2FpV%2FVOwdyfbs41D%2FG1LqveGJ7E4KVqIqTQXnOiQ4v%2FcypkJTEoQcigVkGpGjKSFY7JMFEZvSxMUJjMo5O1B1gO39o16ceJ3jLjRrZTrT3KrDRvR44nOjVmHZ%2FuTpGawHFECwA42Us6jVKwk7dvpBP4xRJCi%2Fxx%2FNW8NIq8ZlUDB%2Bm5LeQnRYk3k2gYFiJsxRmW34Ztr3HjfMzy8MIsTjUT2obVnpwnW8N5v9%2BPRs38ao1xtgEquM9lh7rM01xE%2Be7aIktn187zwsEqfXYidef4rDP%2FER65lJEuNnOlCZzWlt2gtViHRBYwqe%2BGTVWsYyl8d0zOGAG8R6Jnywooj24ez%2B2PUzkTIi2RQD6T6flbsGobOo0zJjxT7cQhIDnmGZdp61l1KC%2BG8RSeEmrbWJiQ8JPCqOkggU3S6ixPg57XgvG%2FTG7os0Z%2F4NjJiELv9PDKWeTad3vsIAFHQLLk0rzppwnYBdAQi7SJMO3Lk78GOqUB0Cn2WWGLSYIlwO%2BwCja%2FtwokRAn%2BQxBMy1knbHfb2EzjK6kiDCLndHIpnyMd%2FrzIdVyisPAWoe8rXu0SwD6cQ1kFKcJRAaT8iasxZgBHP1vPT68RGPMf4ogyVssCoBVZ4hMBrXRCw%2Fz98qH%2F3DTDRDRp1slgrU%2FvltbmMmOmL%2BM9fNHbFY9iKeYG7YHBxL4XKIL8KGQt00YuVwkbs%2ByvGzARuBey&X-Amz-Signature=357c988d16b8aadcdd8f796b5f6dc4d4d199134ebae1a52b7d4ea38d49ea3260&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBCOSUTM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFk1la3f9%2BkURdkuuU7hCH1C28XeGCd9hcjrhTNNWwBAiEAiAA6d3jDAHpb96k%2BVnSdb9mKRNctQH6iXBHVduAXtvMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKESVLPeOzyySyskiCrcA3JWaDQSNbG3vUfeXEAJwVBPyPWLCHrERatsbA7IZmtZsksByJa6qWLsU%2B3dHNA49CZOO%2BlTXtk%2BT77VKObi8auP4kLN%2FXTV7cXmcA%2FlCJkrUVvF%2BBrIfLvq6x%2BngPKIPAuewLqUddT3hTHHQpT03L8BA7%2FpV%2FVOwdyfbs41D%2FG1LqveGJ7E4KVqIqTQXnOiQ4v%2FcypkJTEoQcigVkGpGjKSFY7JMFEZvSxMUJjMo5O1B1gO39o16ceJ3jLjRrZTrT3KrDRvR44nOjVmHZ%2FuTpGawHFECwA42Us6jVKwk7dvpBP4xRJCi%2Fxx%2FNW8NIq8ZlUDB%2Bm5LeQnRYk3k2gYFiJsxRmW34Ztr3HjfMzy8MIsTjUT2obVnpwnW8N5v9%2BPRs38ao1xtgEquM9lh7rM01xE%2Be7aIktn187zwsEqfXYidef4rDP%2FER65lJEuNnOlCZzWlt2gtViHRBYwqe%2BGTVWsYyl8d0zOGAG8R6Jnywooj24ez%2B2PUzkTIi2RQD6T6flbsGobOo0zJjxT7cQhIDnmGZdp61l1KC%2BG8RSeEmrbWJiQ8JPCqOkggU3S6ixPg57XgvG%2FTG7os0Z%2F4NjJiELv9PDKWeTad3vsIAFHQLLk0rzppwnYBdAQi7SJMO3Lk78GOqUB0Cn2WWGLSYIlwO%2BwCja%2FtwokRAn%2BQxBMy1knbHfb2EzjK6kiDCLndHIpnyMd%2FrzIdVyisPAWoe8rXu0SwD6cQ1kFKcJRAaT8iasxZgBHP1vPT68RGPMf4ogyVssCoBVZ4hMBrXRCw%2Fz98qH%2F3DTDRDRp1slgrU%2FvltbmMmOmL%2BM9fNHbFY9iKeYG7YHBxL4XKIL8KGQt00YuVwkbs%2ByvGzARuBey&X-Amz-Signature=c039601bc71520109f44289afb9ced16ba62b77d231e940a991506c8787b94e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBCOSUTM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFk1la3f9%2BkURdkuuU7hCH1C28XeGCd9hcjrhTNNWwBAiEAiAA6d3jDAHpb96k%2BVnSdb9mKRNctQH6iXBHVduAXtvMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKESVLPeOzyySyskiCrcA3JWaDQSNbG3vUfeXEAJwVBPyPWLCHrERatsbA7IZmtZsksByJa6qWLsU%2B3dHNA49CZOO%2BlTXtk%2BT77VKObi8auP4kLN%2FXTV7cXmcA%2FlCJkrUVvF%2BBrIfLvq6x%2BngPKIPAuewLqUddT3hTHHQpT03L8BA7%2FpV%2FVOwdyfbs41D%2FG1LqveGJ7E4KVqIqTQXnOiQ4v%2FcypkJTEoQcigVkGpGjKSFY7JMFEZvSxMUJjMo5O1B1gO39o16ceJ3jLjRrZTrT3KrDRvR44nOjVmHZ%2FuTpGawHFECwA42Us6jVKwk7dvpBP4xRJCi%2Fxx%2FNW8NIq8ZlUDB%2Bm5LeQnRYk3k2gYFiJsxRmW34Ztr3HjfMzy8MIsTjUT2obVnpwnW8N5v9%2BPRs38ao1xtgEquM9lh7rM01xE%2Be7aIktn187zwsEqfXYidef4rDP%2FER65lJEuNnOlCZzWlt2gtViHRBYwqe%2BGTVWsYyl8d0zOGAG8R6Jnywooj24ez%2B2PUzkTIi2RQD6T6flbsGobOo0zJjxT7cQhIDnmGZdp61l1KC%2BG8RSeEmrbWJiQ8JPCqOkggU3S6ixPg57XgvG%2FTG7os0Z%2F4NjJiELv9PDKWeTad3vsIAFHQLLk0rzppwnYBdAQi7SJMO3Lk78GOqUB0Cn2WWGLSYIlwO%2BwCja%2FtwokRAn%2BQxBMy1knbHfb2EzjK6kiDCLndHIpnyMd%2FrzIdVyisPAWoe8rXu0SwD6cQ1kFKcJRAaT8iasxZgBHP1vPT68RGPMf4ogyVssCoBVZ4hMBrXRCw%2Fz98qH%2F3DTDRDRp1slgrU%2FvltbmMmOmL%2BM9fNHbFY9iKeYG7YHBxL4XKIL8KGQt00YuVwkbs%2ByvGzARuBey&X-Amz-Signature=d70b86c1679d5889af7b8c22f28913b5b409d8065e7c97864f895b6ffa62079a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBCOSUTM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFk1la3f9%2BkURdkuuU7hCH1C28XeGCd9hcjrhTNNWwBAiEAiAA6d3jDAHpb96k%2BVnSdb9mKRNctQH6iXBHVduAXtvMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKESVLPeOzyySyskiCrcA3JWaDQSNbG3vUfeXEAJwVBPyPWLCHrERatsbA7IZmtZsksByJa6qWLsU%2B3dHNA49CZOO%2BlTXtk%2BT77VKObi8auP4kLN%2FXTV7cXmcA%2FlCJkrUVvF%2BBrIfLvq6x%2BngPKIPAuewLqUddT3hTHHQpT03L8BA7%2FpV%2FVOwdyfbs41D%2FG1LqveGJ7E4KVqIqTQXnOiQ4v%2FcypkJTEoQcigVkGpGjKSFY7JMFEZvSxMUJjMo5O1B1gO39o16ceJ3jLjRrZTrT3KrDRvR44nOjVmHZ%2FuTpGawHFECwA42Us6jVKwk7dvpBP4xRJCi%2Fxx%2FNW8NIq8ZlUDB%2Bm5LeQnRYk3k2gYFiJsxRmW34Ztr3HjfMzy8MIsTjUT2obVnpwnW8N5v9%2BPRs38ao1xtgEquM9lh7rM01xE%2Be7aIktn187zwsEqfXYidef4rDP%2FER65lJEuNnOlCZzWlt2gtViHRBYwqe%2BGTVWsYyl8d0zOGAG8R6Jnywooj24ez%2B2PUzkTIi2RQD6T6flbsGobOo0zJjxT7cQhIDnmGZdp61l1KC%2BG8RSeEmrbWJiQ8JPCqOkggU3S6ixPg57XgvG%2FTG7os0Z%2F4NjJiELv9PDKWeTad3vsIAFHQLLk0rzppwnYBdAQi7SJMO3Lk78GOqUB0Cn2WWGLSYIlwO%2BwCja%2FtwokRAn%2BQxBMy1knbHfb2EzjK6kiDCLndHIpnyMd%2FrzIdVyisPAWoe8rXu0SwD6cQ1kFKcJRAaT8iasxZgBHP1vPT68RGPMf4ogyVssCoBVZ4hMBrXRCw%2Fz98qH%2F3DTDRDRp1slgrU%2FvltbmMmOmL%2BM9fNHbFY9iKeYG7YHBxL4XKIL8KGQt00YuVwkbs%2ByvGzARuBey&X-Amz-Signature=3f5298ee7a866f5478e030e97f5ac5cd1e50f4ed129d21bd74a2a289d4564986&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
