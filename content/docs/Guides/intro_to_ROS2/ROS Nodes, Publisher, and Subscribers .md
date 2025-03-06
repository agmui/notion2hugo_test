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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U56QH4YH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6aCqtsJ2pHnM6hU6aIkcZb6UilmC2f1NFvUKIw3mRdAiEAxnblF7mQCqc6bUsJkO09GeRmR5uOb9LZKwKC0rEbEjUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP7WXRXUxIqUsoZiUyrcA79XZaeyaZ2PtzmEDPKnT1PQ6C%2FZSTqywhlokg0MEhzc8FNKeyKG9G3QkPwdIWyYVUGSN6f2UdKr2I6cBUpjtqnC01mBlb5bJu5Mu39g8MEGZ5CtSt7tYSeOuQE6vnnkMOPnVCjeAZU256NUCQroqeyDzC6K6yiMYyymtofX1g95%2BQDUExZEWoTy09yB8xiWrE9zNSksCl6imTRL2wDqoln1o9QFNe%2Bnz3oUS0XU88YDSlTurJ2xCm6nBCNPl6YPt6oQJzBQOqRmOtpmw6rcHtGvAWD0VGAs2ijn2JuuATfE5NUYGtIeGI59q9N1jGBOramK5VefMIdq%2B7iuKGvJgFSi313vT2xUuP4aJamgMVHaGvrn7nnab0PG0pPaKpD1EewseZTHa3yChjdzF%2Fgng3E76UZbqHiEWPZ8%2FGTwl%2BP0El8tZhq5GjIQRB4QabRjQHEw56n4%2BgG24HPcw%2Bw6OGY0%2B5yK8wOdadJjVHZnHPvlu%2Bh1A2A3KNSDVPrPXNwlTUBRkc%2FVPhI7b%2BBVfxDtoSrra3lVovARXW4YwyFHZ3uAslkXYYbynNECgxdm62Z46kRx%2ByPBfRqjaxS2D3fs%2FFWv8LgzIHtb7Mg1zz00MHwpETtSpSd5f0bAjmopMP3Np74GOqUBrZs3%2B1gdGhs%2F62HNiMzdbGN1%2B6X9ov1u48HPSD7sg58f8sd%2Fw3etEmOeBHkN32V0E2iEJFRS0Ssous9onc7C2nReCsn5%2BpiIv3YUHJAEMx2QaxChePtegNG179OsSPi7pAHeePKx8lSGnea2X7C9iNXYvmEBdqKYaPIWi2o0G%2BLpQNTX0gGz5JN8APsa3Utb4aG8vbgO65y%2F9S74sP03%2FQnzFbsJ&X-Amz-Signature=c9cea2437d62f7505a62cfa4927726818a4ccfcb94fae8b3ee61bb0796d16eca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U56QH4YH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6aCqtsJ2pHnM6hU6aIkcZb6UilmC2f1NFvUKIw3mRdAiEAxnblF7mQCqc6bUsJkO09GeRmR5uOb9LZKwKC0rEbEjUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP7WXRXUxIqUsoZiUyrcA79XZaeyaZ2PtzmEDPKnT1PQ6C%2FZSTqywhlokg0MEhzc8FNKeyKG9G3QkPwdIWyYVUGSN6f2UdKr2I6cBUpjtqnC01mBlb5bJu5Mu39g8MEGZ5CtSt7tYSeOuQE6vnnkMOPnVCjeAZU256NUCQroqeyDzC6K6yiMYyymtofX1g95%2BQDUExZEWoTy09yB8xiWrE9zNSksCl6imTRL2wDqoln1o9QFNe%2Bnz3oUS0XU88YDSlTurJ2xCm6nBCNPl6YPt6oQJzBQOqRmOtpmw6rcHtGvAWD0VGAs2ijn2JuuATfE5NUYGtIeGI59q9N1jGBOramK5VefMIdq%2B7iuKGvJgFSi313vT2xUuP4aJamgMVHaGvrn7nnab0PG0pPaKpD1EewseZTHa3yChjdzF%2Fgng3E76UZbqHiEWPZ8%2FGTwl%2BP0El8tZhq5GjIQRB4QabRjQHEw56n4%2BgG24HPcw%2Bw6OGY0%2B5yK8wOdadJjVHZnHPvlu%2Bh1A2A3KNSDVPrPXNwlTUBRkc%2FVPhI7b%2BBVfxDtoSrra3lVovARXW4YwyFHZ3uAslkXYYbynNECgxdm62Z46kRx%2ByPBfRqjaxS2D3fs%2FFWv8LgzIHtb7Mg1zz00MHwpETtSpSd5f0bAjmopMP3Np74GOqUBrZs3%2B1gdGhs%2F62HNiMzdbGN1%2B6X9ov1u48HPSD7sg58f8sd%2Fw3etEmOeBHkN32V0E2iEJFRS0Ssous9onc7C2nReCsn5%2BpiIv3YUHJAEMx2QaxChePtegNG179OsSPi7pAHeePKx8lSGnea2X7C9iNXYvmEBdqKYaPIWi2o0G%2BLpQNTX0gGz5JN8APsa3Utb4aG8vbgO65y%2F9S74sP03%2FQnzFbsJ&X-Amz-Signature=db6e0dd7700f80fe371b94dddff9d90615327af3f6be014fa20992556628109a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U56QH4YH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6aCqtsJ2pHnM6hU6aIkcZb6UilmC2f1NFvUKIw3mRdAiEAxnblF7mQCqc6bUsJkO09GeRmR5uOb9LZKwKC0rEbEjUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP7WXRXUxIqUsoZiUyrcA79XZaeyaZ2PtzmEDPKnT1PQ6C%2FZSTqywhlokg0MEhzc8FNKeyKG9G3QkPwdIWyYVUGSN6f2UdKr2I6cBUpjtqnC01mBlb5bJu5Mu39g8MEGZ5CtSt7tYSeOuQE6vnnkMOPnVCjeAZU256NUCQroqeyDzC6K6yiMYyymtofX1g95%2BQDUExZEWoTy09yB8xiWrE9zNSksCl6imTRL2wDqoln1o9QFNe%2Bnz3oUS0XU88YDSlTurJ2xCm6nBCNPl6YPt6oQJzBQOqRmOtpmw6rcHtGvAWD0VGAs2ijn2JuuATfE5NUYGtIeGI59q9N1jGBOramK5VefMIdq%2B7iuKGvJgFSi313vT2xUuP4aJamgMVHaGvrn7nnab0PG0pPaKpD1EewseZTHa3yChjdzF%2Fgng3E76UZbqHiEWPZ8%2FGTwl%2BP0El8tZhq5GjIQRB4QabRjQHEw56n4%2BgG24HPcw%2Bw6OGY0%2B5yK8wOdadJjVHZnHPvlu%2Bh1A2A3KNSDVPrPXNwlTUBRkc%2FVPhI7b%2BBVfxDtoSrra3lVovARXW4YwyFHZ3uAslkXYYbynNECgxdm62Z46kRx%2ByPBfRqjaxS2D3fs%2FFWv8LgzIHtb7Mg1zz00MHwpETtSpSd5f0bAjmopMP3Np74GOqUBrZs3%2B1gdGhs%2F62HNiMzdbGN1%2B6X9ov1u48HPSD7sg58f8sd%2Fw3etEmOeBHkN32V0E2iEJFRS0Ssous9onc7C2nReCsn5%2BpiIv3YUHJAEMx2QaxChePtegNG179OsSPi7pAHeePKx8lSGnea2X7C9iNXYvmEBdqKYaPIWi2o0G%2BLpQNTX0gGz5JN8APsa3Utb4aG8vbgO65y%2F9S74sP03%2FQnzFbsJ&X-Amz-Signature=9a1444d9242c64d580b909ed5f129e734c187729371e844361aa3b05f1d15863&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U56QH4YH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6aCqtsJ2pHnM6hU6aIkcZb6UilmC2f1NFvUKIw3mRdAiEAxnblF7mQCqc6bUsJkO09GeRmR5uOb9LZKwKC0rEbEjUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP7WXRXUxIqUsoZiUyrcA79XZaeyaZ2PtzmEDPKnT1PQ6C%2FZSTqywhlokg0MEhzc8FNKeyKG9G3QkPwdIWyYVUGSN6f2UdKr2I6cBUpjtqnC01mBlb5bJu5Mu39g8MEGZ5CtSt7tYSeOuQE6vnnkMOPnVCjeAZU256NUCQroqeyDzC6K6yiMYyymtofX1g95%2BQDUExZEWoTy09yB8xiWrE9zNSksCl6imTRL2wDqoln1o9QFNe%2Bnz3oUS0XU88YDSlTurJ2xCm6nBCNPl6YPt6oQJzBQOqRmOtpmw6rcHtGvAWD0VGAs2ijn2JuuATfE5NUYGtIeGI59q9N1jGBOramK5VefMIdq%2B7iuKGvJgFSi313vT2xUuP4aJamgMVHaGvrn7nnab0PG0pPaKpD1EewseZTHa3yChjdzF%2Fgng3E76UZbqHiEWPZ8%2FGTwl%2BP0El8tZhq5GjIQRB4QabRjQHEw56n4%2BgG24HPcw%2Bw6OGY0%2B5yK8wOdadJjVHZnHPvlu%2Bh1A2A3KNSDVPrPXNwlTUBRkc%2FVPhI7b%2BBVfxDtoSrra3lVovARXW4YwyFHZ3uAslkXYYbynNECgxdm62Z46kRx%2ByPBfRqjaxS2D3fs%2FFWv8LgzIHtb7Mg1zz00MHwpETtSpSd5f0bAjmopMP3Np74GOqUBrZs3%2B1gdGhs%2F62HNiMzdbGN1%2B6X9ov1u48HPSD7sg58f8sd%2Fw3etEmOeBHkN32V0E2iEJFRS0Ssous9onc7C2nReCsn5%2BpiIv3YUHJAEMx2QaxChePtegNG179OsSPi7pAHeePKx8lSGnea2X7C9iNXYvmEBdqKYaPIWi2o0G%2BLpQNTX0gGz5JN8APsa3Utb4aG8vbgO65y%2F9S74sP03%2FQnzFbsJ&X-Amz-Signature=cf68fcbf23333bf84d19940899d7ad836ef62ad91263f5a55b0a0c2b38e3fce6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U56QH4YH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6aCqtsJ2pHnM6hU6aIkcZb6UilmC2f1NFvUKIw3mRdAiEAxnblF7mQCqc6bUsJkO09GeRmR5uOb9LZKwKC0rEbEjUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP7WXRXUxIqUsoZiUyrcA79XZaeyaZ2PtzmEDPKnT1PQ6C%2FZSTqywhlokg0MEhzc8FNKeyKG9G3QkPwdIWyYVUGSN6f2UdKr2I6cBUpjtqnC01mBlb5bJu5Mu39g8MEGZ5CtSt7tYSeOuQE6vnnkMOPnVCjeAZU256NUCQroqeyDzC6K6yiMYyymtofX1g95%2BQDUExZEWoTy09yB8xiWrE9zNSksCl6imTRL2wDqoln1o9QFNe%2Bnz3oUS0XU88YDSlTurJ2xCm6nBCNPl6YPt6oQJzBQOqRmOtpmw6rcHtGvAWD0VGAs2ijn2JuuATfE5NUYGtIeGI59q9N1jGBOramK5VefMIdq%2B7iuKGvJgFSi313vT2xUuP4aJamgMVHaGvrn7nnab0PG0pPaKpD1EewseZTHa3yChjdzF%2Fgng3E76UZbqHiEWPZ8%2FGTwl%2BP0El8tZhq5GjIQRB4QabRjQHEw56n4%2BgG24HPcw%2Bw6OGY0%2B5yK8wOdadJjVHZnHPvlu%2Bh1A2A3KNSDVPrPXNwlTUBRkc%2FVPhI7b%2BBVfxDtoSrra3lVovARXW4YwyFHZ3uAslkXYYbynNECgxdm62Z46kRx%2ByPBfRqjaxS2D3fs%2FFWv8LgzIHtb7Mg1zz00MHwpETtSpSd5f0bAjmopMP3Np74GOqUBrZs3%2B1gdGhs%2F62HNiMzdbGN1%2B6X9ov1u48HPSD7sg58f8sd%2Fw3etEmOeBHkN32V0E2iEJFRS0Ssous9onc7C2nReCsn5%2BpiIv3YUHJAEMx2QaxChePtegNG179OsSPi7pAHeePKx8lSGnea2X7C9iNXYvmEBdqKYaPIWi2o0G%2BLpQNTX0gGz5JN8APsa3Utb4aG8vbgO65y%2F9S74sP03%2FQnzFbsJ&X-Amz-Signature=ca9e83008e16bd2405e966ff34a4900813ca0225da254406d4620ca1fc8a7956&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U56QH4YH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6aCqtsJ2pHnM6hU6aIkcZb6UilmC2f1NFvUKIw3mRdAiEAxnblF7mQCqc6bUsJkO09GeRmR5uOb9LZKwKC0rEbEjUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP7WXRXUxIqUsoZiUyrcA79XZaeyaZ2PtzmEDPKnT1PQ6C%2FZSTqywhlokg0MEhzc8FNKeyKG9G3QkPwdIWyYVUGSN6f2UdKr2I6cBUpjtqnC01mBlb5bJu5Mu39g8MEGZ5CtSt7tYSeOuQE6vnnkMOPnVCjeAZU256NUCQroqeyDzC6K6yiMYyymtofX1g95%2BQDUExZEWoTy09yB8xiWrE9zNSksCl6imTRL2wDqoln1o9QFNe%2Bnz3oUS0XU88YDSlTurJ2xCm6nBCNPl6YPt6oQJzBQOqRmOtpmw6rcHtGvAWD0VGAs2ijn2JuuATfE5NUYGtIeGI59q9N1jGBOramK5VefMIdq%2B7iuKGvJgFSi313vT2xUuP4aJamgMVHaGvrn7nnab0PG0pPaKpD1EewseZTHa3yChjdzF%2Fgng3E76UZbqHiEWPZ8%2FGTwl%2BP0El8tZhq5GjIQRB4QabRjQHEw56n4%2BgG24HPcw%2Bw6OGY0%2B5yK8wOdadJjVHZnHPvlu%2Bh1A2A3KNSDVPrPXNwlTUBRkc%2FVPhI7b%2BBVfxDtoSrra3lVovARXW4YwyFHZ3uAslkXYYbynNECgxdm62Z46kRx%2ByPBfRqjaxS2D3fs%2FFWv8LgzIHtb7Mg1zz00MHwpETtSpSd5f0bAjmopMP3Np74GOqUBrZs3%2B1gdGhs%2F62HNiMzdbGN1%2B6X9ov1u48HPSD7sg58f8sd%2Fw3etEmOeBHkN32V0E2iEJFRS0Ssous9onc7C2nReCsn5%2BpiIv3YUHJAEMx2QaxChePtegNG179OsSPi7pAHeePKx8lSGnea2X7C9iNXYvmEBdqKYaPIWi2o0G%2BLpQNTX0gGz5JN8APsa3Utb4aG8vbgO65y%2F9S74sP03%2FQnzFbsJ&X-Amz-Signature=f2a62d364c73fdf87861824307251aa47560356226fbc4ad5b837ff4cb9db67f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U56QH4YH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6aCqtsJ2pHnM6hU6aIkcZb6UilmC2f1NFvUKIw3mRdAiEAxnblF7mQCqc6bUsJkO09GeRmR5uOb9LZKwKC0rEbEjUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP7WXRXUxIqUsoZiUyrcA79XZaeyaZ2PtzmEDPKnT1PQ6C%2FZSTqywhlokg0MEhzc8FNKeyKG9G3QkPwdIWyYVUGSN6f2UdKr2I6cBUpjtqnC01mBlb5bJu5Mu39g8MEGZ5CtSt7tYSeOuQE6vnnkMOPnVCjeAZU256NUCQroqeyDzC6K6yiMYyymtofX1g95%2BQDUExZEWoTy09yB8xiWrE9zNSksCl6imTRL2wDqoln1o9QFNe%2Bnz3oUS0XU88YDSlTurJ2xCm6nBCNPl6YPt6oQJzBQOqRmOtpmw6rcHtGvAWD0VGAs2ijn2JuuATfE5NUYGtIeGI59q9N1jGBOramK5VefMIdq%2B7iuKGvJgFSi313vT2xUuP4aJamgMVHaGvrn7nnab0PG0pPaKpD1EewseZTHa3yChjdzF%2Fgng3E76UZbqHiEWPZ8%2FGTwl%2BP0El8tZhq5GjIQRB4QabRjQHEw56n4%2BgG24HPcw%2Bw6OGY0%2B5yK8wOdadJjVHZnHPvlu%2Bh1A2A3KNSDVPrPXNwlTUBRkc%2FVPhI7b%2BBVfxDtoSrra3lVovARXW4YwyFHZ3uAslkXYYbynNECgxdm62Z46kRx%2ByPBfRqjaxS2D3fs%2FFWv8LgzIHtb7Mg1zz00MHwpETtSpSd5f0bAjmopMP3Np74GOqUBrZs3%2B1gdGhs%2F62HNiMzdbGN1%2B6X9ov1u48HPSD7sg58f8sd%2Fw3etEmOeBHkN32V0E2iEJFRS0Ssous9onc7C2nReCsn5%2BpiIv3YUHJAEMx2QaxChePtegNG179OsSPi7pAHeePKx8lSGnea2X7C9iNXYvmEBdqKYaPIWi2o0G%2BLpQNTX0gGz5JN8APsa3Utb4aG8vbgO65y%2F9S74sP03%2FQnzFbsJ&X-Amz-Signature=0fe0b41876f09b381064f81ddf96a1621cbfb71e7735eaff007bef4012281068&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U56QH4YH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6aCqtsJ2pHnM6hU6aIkcZb6UilmC2f1NFvUKIw3mRdAiEAxnblF7mQCqc6bUsJkO09GeRmR5uOb9LZKwKC0rEbEjUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP7WXRXUxIqUsoZiUyrcA79XZaeyaZ2PtzmEDPKnT1PQ6C%2FZSTqywhlokg0MEhzc8FNKeyKG9G3QkPwdIWyYVUGSN6f2UdKr2I6cBUpjtqnC01mBlb5bJu5Mu39g8MEGZ5CtSt7tYSeOuQE6vnnkMOPnVCjeAZU256NUCQroqeyDzC6K6yiMYyymtofX1g95%2BQDUExZEWoTy09yB8xiWrE9zNSksCl6imTRL2wDqoln1o9QFNe%2Bnz3oUS0XU88YDSlTurJ2xCm6nBCNPl6YPt6oQJzBQOqRmOtpmw6rcHtGvAWD0VGAs2ijn2JuuATfE5NUYGtIeGI59q9N1jGBOramK5VefMIdq%2B7iuKGvJgFSi313vT2xUuP4aJamgMVHaGvrn7nnab0PG0pPaKpD1EewseZTHa3yChjdzF%2Fgng3E76UZbqHiEWPZ8%2FGTwl%2BP0El8tZhq5GjIQRB4QabRjQHEw56n4%2BgG24HPcw%2Bw6OGY0%2B5yK8wOdadJjVHZnHPvlu%2Bh1A2A3KNSDVPrPXNwlTUBRkc%2FVPhI7b%2BBVfxDtoSrra3lVovARXW4YwyFHZ3uAslkXYYbynNECgxdm62Z46kRx%2ByPBfRqjaxS2D3fs%2FFWv8LgzIHtb7Mg1zz00MHwpETtSpSd5f0bAjmopMP3Np74GOqUBrZs3%2B1gdGhs%2F62HNiMzdbGN1%2B6X9ov1u48HPSD7sg58f8sd%2Fw3etEmOeBHkN32V0E2iEJFRS0Ssous9onc7C2nReCsn5%2BpiIv3YUHJAEMx2QaxChePtegNG179OsSPi7pAHeePKx8lSGnea2X7C9iNXYvmEBdqKYaPIWi2o0G%2BLpQNTX0gGz5JN8APsa3Utb4aG8vbgO65y%2F9S74sP03%2FQnzFbsJ&X-Amz-Signature=379a3fa6d81b7947ccbd3dedfb4a6955a3ad52e50adf1569cc86982cd67e7db4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
