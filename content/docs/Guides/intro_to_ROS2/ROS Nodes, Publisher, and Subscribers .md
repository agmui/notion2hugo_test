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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4TUGIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhpb%2B18%2BctfYyFKoPh9wVcU6M6wYrTwTshC%2BVg7l5P6AiEAzsq2Ae2mWRdX9P3bN6%2BfHxgEiGsk%2BHWodvyyMQghOSAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtnuKCaCBlp0XfszSrcAzGLPVJkMtQRQy2aSlkna22cvv5OMwLLwi%2Fur%2BYcGjP5Dgn8%2FlgXZKfowbXOfpY4rlCkUbEl7MD2UxaloKPZzbv%2FnXwy7rBixhuAeoM7KswFXiow8gQOeMHYfW0oSNqQtP1SkOHpUHX98tiWKrpbRnm%2FF6z9HkyWiODUakl5vr6tKg6Gnf6zf%2B0VowGLpdj491oMJc45toW4RjKfGu5gkMwzWtVUFmjVv3B1nepYY0oQeweHLPMIrn3yK%2Bt38S2iM4k5H05Y5aYb06kn77OuDdRSo5JYoLT2KwvPHqwARrFcG4b6CjcaRTwoV2CfCCGX3eNmHLvmwAa6LwXj0T4BmTc%2FpITFl%2B3djL65ZL83xNNnk4MMXqZpKTlqRYqFdZkDZs%2BIxCG12sHSluX9k1mI6VEoonJyRZ3MXw2qQeIClFKnEdpt%2BfJLzr%2F7godnIACPhMa%2FQsV4AjKlz6feLo%2BUxqEKc1szdBppZ8BBRovCeTgkeSS%2BDlqc7WZBRrkh%2BKmzOU8Negwj1%2FwPG87Mz%2FaGd3mIDyToDpt%2Fx4IbILBzkrpYgRXr4ulziFrotvfzul7gzHSadYGzCte810zNRt9bmDdB%2BvJ8HsCuY8jwHJvf6VIVNXE0MemKpz8jMaEFMM%2B648QGOqUBJE%2Bu6ubjgavEB0rgLGnw%2BuZgt1Ww7vL0FrTsKusy%2B38Z0dNWSXGCIiLxZng7RyKzPrGzFP0FwG7%2BTaalUbW%2B9Eg7pUbinX39UOT7xl1Ky67xG6FcRVfmSoCcthxJdi6OYwABqmSuRaeiVEUjItDmivL5R8PNfWlRfe1Fgpc94m%2FdVQ7Fs%2BOp7KPAHHSmXtur%2BdjfLF4NGnsEzmmNjDRm%2B3UBKEaj&X-Amz-Signature=29cffc747b2427115dfb51554adf43c1061025bc50ba710d377c05a32fe0eea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4TUGIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhpb%2B18%2BctfYyFKoPh9wVcU6M6wYrTwTshC%2BVg7l5P6AiEAzsq2Ae2mWRdX9P3bN6%2BfHxgEiGsk%2BHWodvyyMQghOSAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtnuKCaCBlp0XfszSrcAzGLPVJkMtQRQy2aSlkna22cvv5OMwLLwi%2Fur%2BYcGjP5Dgn8%2FlgXZKfowbXOfpY4rlCkUbEl7MD2UxaloKPZzbv%2FnXwy7rBixhuAeoM7KswFXiow8gQOeMHYfW0oSNqQtP1SkOHpUHX98tiWKrpbRnm%2FF6z9HkyWiODUakl5vr6tKg6Gnf6zf%2B0VowGLpdj491oMJc45toW4RjKfGu5gkMwzWtVUFmjVv3B1nepYY0oQeweHLPMIrn3yK%2Bt38S2iM4k5H05Y5aYb06kn77OuDdRSo5JYoLT2KwvPHqwARrFcG4b6CjcaRTwoV2CfCCGX3eNmHLvmwAa6LwXj0T4BmTc%2FpITFl%2B3djL65ZL83xNNnk4MMXqZpKTlqRYqFdZkDZs%2BIxCG12sHSluX9k1mI6VEoonJyRZ3MXw2qQeIClFKnEdpt%2BfJLzr%2F7godnIACPhMa%2FQsV4AjKlz6feLo%2BUxqEKc1szdBppZ8BBRovCeTgkeSS%2BDlqc7WZBRrkh%2BKmzOU8Negwj1%2FwPG87Mz%2FaGd3mIDyToDpt%2Fx4IbILBzkrpYgRXr4ulziFrotvfzul7gzHSadYGzCte810zNRt9bmDdB%2BvJ8HsCuY8jwHJvf6VIVNXE0MemKpz8jMaEFMM%2B648QGOqUBJE%2Bu6ubjgavEB0rgLGnw%2BuZgt1Ww7vL0FrTsKusy%2B38Z0dNWSXGCIiLxZng7RyKzPrGzFP0FwG7%2BTaalUbW%2B9Eg7pUbinX39UOT7xl1Ky67xG6FcRVfmSoCcthxJdi6OYwABqmSuRaeiVEUjItDmivL5R8PNfWlRfe1Fgpc94m%2FdVQ7Fs%2BOp7KPAHHSmXtur%2BdjfLF4NGnsEzmmNjDRm%2B3UBKEaj&X-Amz-Signature=928b87040ebb6e6d4e0c5cb94c0ef09c8ba5a979b8956f22748f36d620246f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4TUGIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhpb%2B18%2BctfYyFKoPh9wVcU6M6wYrTwTshC%2BVg7l5P6AiEAzsq2Ae2mWRdX9P3bN6%2BfHxgEiGsk%2BHWodvyyMQghOSAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtnuKCaCBlp0XfszSrcAzGLPVJkMtQRQy2aSlkna22cvv5OMwLLwi%2Fur%2BYcGjP5Dgn8%2FlgXZKfowbXOfpY4rlCkUbEl7MD2UxaloKPZzbv%2FnXwy7rBixhuAeoM7KswFXiow8gQOeMHYfW0oSNqQtP1SkOHpUHX98tiWKrpbRnm%2FF6z9HkyWiODUakl5vr6tKg6Gnf6zf%2B0VowGLpdj491oMJc45toW4RjKfGu5gkMwzWtVUFmjVv3B1nepYY0oQeweHLPMIrn3yK%2Bt38S2iM4k5H05Y5aYb06kn77OuDdRSo5JYoLT2KwvPHqwARrFcG4b6CjcaRTwoV2CfCCGX3eNmHLvmwAa6LwXj0T4BmTc%2FpITFl%2B3djL65ZL83xNNnk4MMXqZpKTlqRYqFdZkDZs%2BIxCG12sHSluX9k1mI6VEoonJyRZ3MXw2qQeIClFKnEdpt%2BfJLzr%2F7godnIACPhMa%2FQsV4AjKlz6feLo%2BUxqEKc1szdBppZ8BBRovCeTgkeSS%2BDlqc7WZBRrkh%2BKmzOU8Negwj1%2FwPG87Mz%2FaGd3mIDyToDpt%2Fx4IbILBzkrpYgRXr4ulziFrotvfzul7gzHSadYGzCte810zNRt9bmDdB%2BvJ8HsCuY8jwHJvf6VIVNXE0MemKpz8jMaEFMM%2B648QGOqUBJE%2Bu6ubjgavEB0rgLGnw%2BuZgt1Ww7vL0FrTsKusy%2B38Z0dNWSXGCIiLxZng7RyKzPrGzFP0FwG7%2BTaalUbW%2B9Eg7pUbinX39UOT7xl1Ky67xG6FcRVfmSoCcthxJdi6OYwABqmSuRaeiVEUjItDmivL5R8PNfWlRfe1Fgpc94m%2FdVQ7Fs%2BOp7KPAHHSmXtur%2BdjfLF4NGnsEzmmNjDRm%2B3UBKEaj&X-Amz-Signature=8db99f373aaa0c885e8867d819e996cbd942bde2466c43b0e1511a2d2d4173d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4TUGIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhpb%2B18%2BctfYyFKoPh9wVcU6M6wYrTwTshC%2BVg7l5P6AiEAzsq2Ae2mWRdX9P3bN6%2BfHxgEiGsk%2BHWodvyyMQghOSAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtnuKCaCBlp0XfszSrcAzGLPVJkMtQRQy2aSlkna22cvv5OMwLLwi%2Fur%2BYcGjP5Dgn8%2FlgXZKfowbXOfpY4rlCkUbEl7MD2UxaloKPZzbv%2FnXwy7rBixhuAeoM7KswFXiow8gQOeMHYfW0oSNqQtP1SkOHpUHX98tiWKrpbRnm%2FF6z9HkyWiODUakl5vr6tKg6Gnf6zf%2B0VowGLpdj491oMJc45toW4RjKfGu5gkMwzWtVUFmjVv3B1nepYY0oQeweHLPMIrn3yK%2Bt38S2iM4k5H05Y5aYb06kn77OuDdRSo5JYoLT2KwvPHqwARrFcG4b6CjcaRTwoV2CfCCGX3eNmHLvmwAa6LwXj0T4BmTc%2FpITFl%2B3djL65ZL83xNNnk4MMXqZpKTlqRYqFdZkDZs%2BIxCG12sHSluX9k1mI6VEoonJyRZ3MXw2qQeIClFKnEdpt%2BfJLzr%2F7godnIACPhMa%2FQsV4AjKlz6feLo%2BUxqEKc1szdBppZ8BBRovCeTgkeSS%2BDlqc7WZBRrkh%2BKmzOU8Negwj1%2FwPG87Mz%2FaGd3mIDyToDpt%2Fx4IbILBzkrpYgRXr4ulziFrotvfzul7gzHSadYGzCte810zNRt9bmDdB%2BvJ8HsCuY8jwHJvf6VIVNXE0MemKpz8jMaEFMM%2B648QGOqUBJE%2Bu6ubjgavEB0rgLGnw%2BuZgt1Ww7vL0FrTsKusy%2B38Z0dNWSXGCIiLxZng7RyKzPrGzFP0FwG7%2BTaalUbW%2B9Eg7pUbinX39UOT7xl1Ky67xG6FcRVfmSoCcthxJdi6OYwABqmSuRaeiVEUjItDmivL5R8PNfWlRfe1Fgpc94m%2FdVQ7Fs%2BOp7KPAHHSmXtur%2BdjfLF4NGnsEzmmNjDRm%2B3UBKEaj&X-Amz-Signature=5a9331147a609f587d395d8ecd21bd22e1446fdaa826cbbe9bf30279d925b36c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4TUGIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhpb%2B18%2BctfYyFKoPh9wVcU6M6wYrTwTshC%2BVg7l5P6AiEAzsq2Ae2mWRdX9P3bN6%2BfHxgEiGsk%2BHWodvyyMQghOSAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtnuKCaCBlp0XfszSrcAzGLPVJkMtQRQy2aSlkna22cvv5OMwLLwi%2Fur%2BYcGjP5Dgn8%2FlgXZKfowbXOfpY4rlCkUbEl7MD2UxaloKPZzbv%2FnXwy7rBixhuAeoM7KswFXiow8gQOeMHYfW0oSNqQtP1SkOHpUHX98tiWKrpbRnm%2FF6z9HkyWiODUakl5vr6tKg6Gnf6zf%2B0VowGLpdj491oMJc45toW4RjKfGu5gkMwzWtVUFmjVv3B1nepYY0oQeweHLPMIrn3yK%2Bt38S2iM4k5H05Y5aYb06kn77OuDdRSo5JYoLT2KwvPHqwARrFcG4b6CjcaRTwoV2CfCCGX3eNmHLvmwAa6LwXj0T4BmTc%2FpITFl%2B3djL65ZL83xNNnk4MMXqZpKTlqRYqFdZkDZs%2BIxCG12sHSluX9k1mI6VEoonJyRZ3MXw2qQeIClFKnEdpt%2BfJLzr%2F7godnIACPhMa%2FQsV4AjKlz6feLo%2BUxqEKc1szdBppZ8BBRovCeTgkeSS%2BDlqc7WZBRrkh%2BKmzOU8Negwj1%2FwPG87Mz%2FaGd3mIDyToDpt%2Fx4IbILBzkrpYgRXr4ulziFrotvfzul7gzHSadYGzCte810zNRt9bmDdB%2BvJ8HsCuY8jwHJvf6VIVNXE0MemKpz8jMaEFMM%2B648QGOqUBJE%2Bu6ubjgavEB0rgLGnw%2BuZgt1Ww7vL0FrTsKusy%2B38Z0dNWSXGCIiLxZng7RyKzPrGzFP0FwG7%2BTaalUbW%2B9Eg7pUbinX39UOT7xl1Ky67xG6FcRVfmSoCcthxJdi6OYwABqmSuRaeiVEUjItDmivL5R8PNfWlRfe1Fgpc94m%2FdVQ7Fs%2BOp7KPAHHSmXtur%2BdjfLF4NGnsEzmmNjDRm%2B3UBKEaj&X-Amz-Signature=02332670cedbf3a119e0b2475b66191ff2b0d2d2356bd6f4e93d9fa2ae41eed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4TUGIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhpb%2B18%2BctfYyFKoPh9wVcU6M6wYrTwTshC%2BVg7l5P6AiEAzsq2Ae2mWRdX9P3bN6%2BfHxgEiGsk%2BHWodvyyMQghOSAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtnuKCaCBlp0XfszSrcAzGLPVJkMtQRQy2aSlkna22cvv5OMwLLwi%2Fur%2BYcGjP5Dgn8%2FlgXZKfowbXOfpY4rlCkUbEl7MD2UxaloKPZzbv%2FnXwy7rBixhuAeoM7KswFXiow8gQOeMHYfW0oSNqQtP1SkOHpUHX98tiWKrpbRnm%2FF6z9HkyWiODUakl5vr6tKg6Gnf6zf%2B0VowGLpdj491oMJc45toW4RjKfGu5gkMwzWtVUFmjVv3B1nepYY0oQeweHLPMIrn3yK%2Bt38S2iM4k5H05Y5aYb06kn77OuDdRSo5JYoLT2KwvPHqwARrFcG4b6CjcaRTwoV2CfCCGX3eNmHLvmwAa6LwXj0T4BmTc%2FpITFl%2B3djL65ZL83xNNnk4MMXqZpKTlqRYqFdZkDZs%2BIxCG12sHSluX9k1mI6VEoonJyRZ3MXw2qQeIClFKnEdpt%2BfJLzr%2F7godnIACPhMa%2FQsV4AjKlz6feLo%2BUxqEKc1szdBppZ8BBRovCeTgkeSS%2BDlqc7WZBRrkh%2BKmzOU8Negwj1%2FwPG87Mz%2FaGd3mIDyToDpt%2Fx4IbILBzkrpYgRXr4ulziFrotvfzul7gzHSadYGzCte810zNRt9bmDdB%2BvJ8HsCuY8jwHJvf6VIVNXE0MemKpz8jMaEFMM%2B648QGOqUBJE%2Bu6ubjgavEB0rgLGnw%2BuZgt1Ww7vL0FrTsKusy%2B38Z0dNWSXGCIiLxZng7RyKzPrGzFP0FwG7%2BTaalUbW%2B9Eg7pUbinX39UOT7xl1Ky67xG6FcRVfmSoCcthxJdi6OYwABqmSuRaeiVEUjItDmivL5R8PNfWlRfe1Fgpc94m%2FdVQ7Fs%2BOp7KPAHHSmXtur%2BdjfLF4NGnsEzmmNjDRm%2B3UBKEaj&X-Amz-Signature=dd519c897181eb583af695b76d7385379a896bec18e4c548fdf6fb1d02f940be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4TUGIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhpb%2B18%2BctfYyFKoPh9wVcU6M6wYrTwTshC%2BVg7l5P6AiEAzsq2Ae2mWRdX9P3bN6%2BfHxgEiGsk%2BHWodvyyMQghOSAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtnuKCaCBlp0XfszSrcAzGLPVJkMtQRQy2aSlkna22cvv5OMwLLwi%2Fur%2BYcGjP5Dgn8%2FlgXZKfowbXOfpY4rlCkUbEl7MD2UxaloKPZzbv%2FnXwy7rBixhuAeoM7KswFXiow8gQOeMHYfW0oSNqQtP1SkOHpUHX98tiWKrpbRnm%2FF6z9HkyWiODUakl5vr6tKg6Gnf6zf%2B0VowGLpdj491oMJc45toW4RjKfGu5gkMwzWtVUFmjVv3B1nepYY0oQeweHLPMIrn3yK%2Bt38S2iM4k5H05Y5aYb06kn77OuDdRSo5JYoLT2KwvPHqwARrFcG4b6CjcaRTwoV2CfCCGX3eNmHLvmwAa6LwXj0T4BmTc%2FpITFl%2B3djL65ZL83xNNnk4MMXqZpKTlqRYqFdZkDZs%2BIxCG12sHSluX9k1mI6VEoonJyRZ3MXw2qQeIClFKnEdpt%2BfJLzr%2F7godnIACPhMa%2FQsV4AjKlz6feLo%2BUxqEKc1szdBppZ8BBRovCeTgkeSS%2BDlqc7WZBRrkh%2BKmzOU8Negwj1%2FwPG87Mz%2FaGd3mIDyToDpt%2Fx4IbILBzkrpYgRXr4ulziFrotvfzul7gzHSadYGzCte810zNRt9bmDdB%2BvJ8HsCuY8jwHJvf6VIVNXE0MemKpz8jMaEFMM%2B648QGOqUBJE%2Bu6ubjgavEB0rgLGnw%2BuZgt1Ww7vL0FrTsKusy%2B38Z0dNWSXGCIiLxZng7RyKzPrGzFP0FwG7%2BTaalUbW%2B9Eg7pUbinX39UOT7xl1Ky67xG6FcRVfmSoCcthxJdi6OYwABqmSuRaeiVEUjItDmivL5R8PNfWlRfe1Fgpc94m%2FdVQ7Fs%2BOp7KPAHHSmXtur%2BdjfLF4NGnsEzmmNjDRm%2B3UBKEaj&X-Amz-Signature=3efcde20e66b545bcf12d3ede88de0112683c992f7a07bff6657a7e0bb33a5f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4TUGIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhpb%2B18%2BctfYyFKoPh9wVcU6M6wYrTwTshC%2BVg7l5P6AiEAzsq2Ae2mWRdX9P3bN6%2BfHxgEiGsk%2BHWodvyyMQghOSAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtnuKCaCBlp0XfszSrcAzGLPVJkMtQRQy2aSlkna22cvv5OMwLLwi%2Fur%2BYcGjP5Dgn8%2FlgXZKfowbXOfpY4rlCkUbEl7MD2UxaloKPZzbv%2FnXwy7rBixhuAeoM7KswFXiow8gQOeMHYfW0oSNqQtP1SkOHpUHX98tiWKrpbRnm%2FF6z9HkyWiODUakl5vr6tKg6Gnf6zf%2B0VowGLpdj491oMJc45toW4RjKfGu5gkMwzWtVUFmjVv3B1nepYY0oQeweHLPMIrn3yK%2Bt38S2iM4k5H05Y5aYb06kn77OuDdRSo5JYoLT2KwvPHqwARrFcG4b6CjcaRTwoV2CfCCGX3eNmHLvmwAa6LwXj0T4BmTc%2FpITFl%2B3djL65ZL83xNNnk4MMXqZpKTlqRYqFdZkDZs%2BIxCG12sHSluX9k1mI6VEoonJyRZ3MXw2qQeIClFKnEdpt%2BfJLzr%2F7godnIACPhMa%2FQsV4AjKlz6feLo%2BUxqEKc1szdBppZ8BBRovCeTgkeSS%2BDlqc7WZBRrkh%2BKmzOU8Negwj1%2FwPG87Mz%2FaGd3mIDyToDpt%2Fx4IbILBzkrpYgRXr4ulziFrotvfzul7gzHSadYGzCte810zNRt9bmDdB%2BvJ8HsCuY8jwHJvf6VIVNXE0MemKpz8jMaEFMM%2B648QGOqUBJE%2Bu6ubjgavEB0rgLGnw%2BuZgt1Ww7vL0FrTsKusy%2B38Z0dNWSXGCIiLxZng7RyKzPrGzFP0FwG7%2BTaalUbW%2B9Eg7pUbinX39UOT7xl1Ky67xG6FcRVfmSoCcthxJdi6OYwABqmSuRaeiVEUjItDmivL5R8PNfWlRfe1Fgpc94m%2FdVQ7Fs%2BOp7KPAHHSmXtur%2BdjfLF4NGnsEzmmNjDRm%2B3UBKEaj&X-Amz-Signature=fd11d79ea0f5ba2b514a2e33b68755de3979d5af248ac744226d4fb3fc9f6b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
