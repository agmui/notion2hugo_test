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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ADVFJRQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFWsxfEIYDEAWzg6gB7GJ%2BacxUnz7%2FCR9%2Bhde5y%2FjJLgAiEAgsZQ8jrpnn7O%2BNWYfijhnnB1HLXAeq3Dgt7wuhmedY0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIKev4k3MMrb70h%2F5CrcA6QBeZhFHzAaMVGUlbiVcnkGgGJpyGKFERZi8RqsiHcnX5a17QpzVUBM7QEPuDkVqIsg1O5ECFg94iSxjJYn931wkbEc0oMgRM8la4FAU0u%2BKonJTZ%2FJiwnEzgayl6sZ86kbtHiQTdQhHyifuWDsS%2FngER3830PFj%2BsjH5MAXvL9nvqRfnY6gPAaOFwvOv3eUZpmS2lAXtPBGHzmBfpF6KHMFP1hoV5b9YoN9Hd0nUZpdLe8KmJWWhlGqzYy8clOkkBZZDgAt4pl8fqZ1dZ5svjPaXrmw04KpfQ2WIv3WiSsSNvs4S3OgFTgc8LOztbdMYciYLlVPNBdgBv6OzqhiuMML4VKMpDw%2ByDFunotzW%2Fx8YieGvXpk4jQkRjZ2opEVe0XAltyTgKWw31i%2BpfOAfl01TTUHPWLk6AcvJixMPVgvQ4VqX76eONtPpzt3ZsOuSi%2FPx8kcoykTCccPP62zbnXfiXjyWk5eUHKVjAechbl2IB9tbMnCiHqjjjmjWzEqc%2BlhY7y1KS7lmRTQv2%2FW1%2FTpm6Qji4v1iICEcb%2FPBtnOJLIPHkji43cprSxfIdOCLwx3LlbIXTCd%2FhZo2qKdAioy%2Bcqs771UOKh9DTr8sCuQQKz%2FLbvYkRMLKffML7Tkb0GOqUBRkHkR5Wn2ED%2FJcThu9FKTA%2B6oF9bJsJ41rGpGOgYd093iji%2FsXUhlX7NidHIoSB7TcbRmnVK6nuTE0Tdazsh91jvNxs5KfLGXWosCDMxFZyF6TzjIIYWBsoGMoXJO787x%2BWaluwLvifcfF1C8qmADuAVrDFRHlW0%2FcOIlrGgNWzSPSZ3RzYlVzvg6G5DxNfLUehZcoxU6byprImdqSwqGdxgQ49F&X-Amz-Signature=26ee3ac99141570d421c6b3f431bd08dbeca7d59225ba139df8e89d24b1500a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ADVFJRQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFWsxfEIYDEAWzg6gB7GJ%2BacxUnz7%2FCR9%2Bhde5y%2FjJLgAiEAgsZQ8jrpnn7O%2BNWYfijhnnB1HLXAeq3Dgt7wuhmedY0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIKev4k3MMrb70h%2F5CrcA6QBeZhFHzAaMVGUlbiVcnkGgGJpyGKFERZi8RqsiHcnX5a17QpzVUBM7QEPuDkVqIsg1O5ECFg94iSxjJYn931wkbEc0oMgRM8la4FAU0u%2BKonJTZ%2FJiwnEzgayl6sZ86kbtHiQTdQhHyifuWDsS%2FngER3830PFj%2BsjH5MAXvL9nvqRfnY6gPAaOFwvOv3eUZpmS2lAXtPBGHzmBfpF6KHMFP1hoV5b9YoN9Hd0nUZpdLe8KmJWWhlGqzYy8clOkkBZZDgAt4pl8fqZ1dZ5svjPaXrmw04KpfQ2WIv3WiSsSNvs4S3OgFTgc8LOztbdMYciYLlVPNBdgBv6OzqhiuMML4VKMpDw%2ByDFunotzW%2Fx8YieGvXpk4jQkRjZ2opEVe0XAltyTgKWw31i%2BpfOAfl01TTUHPWLk6AcvJixMPVgvQ4VqX76eONtPpzt3ZsOuSi%2FPx8kcoykTCccPP62zbnXfiXjyWk5eUHKVjAechbl2IB9tbMnCiHqjjjmjWzEqc%2BlhY7y1KS7lmRTQv2%2FW1%2FTpm6Qji4v1iICEcb%2FPBtnOJLIPHkji43cprSxfIdOCLwx3LlbIXTCd%2FhZo2qKdAioy%2Bcqs771UOKh9DTr8sCuQQKz%2FLbvYkRMLKffML7Tkb0GOqUBRkHkR5Wn2ED%2FJcThu9FKTA%2B6oF9bJsJ41rGpGOgYd093iji%2FsXUhlX7NidHIoSB7TcbRmnVK6nuTE0Tdazsh91jvNxs5KfLGXWosCDMxFZyF6TzjIIYWBsoGMoXJO787x%2BWaluwLvifcfF1C8qmADuAVrDFRHlW0%2FcOIlrGgNWzSPSZ3RzYlVzvg6G5DxNfLUehZcoxU6byprImdqSwqGdxgQ49F&X-Amz-Signature=39c623560ee1cbe229d080bf4f3f4bc5e3f9b35b6ef91bda36b6b94b1c1aa8ec&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ADVFJRQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFWsxfEIYDEAWzg6gB7GJ%2BacxUnz7%2FCR9%2Bhde5y%2FjJLgAiEAgsZQ8jrpnn7O%2BNWYfijhnnB1HLXAeq3Dgt7wuhmedY0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIKev4k3MMrb70h%2F5CrcA6QBeZhFHzAaMVGUlbiVcnkGgGJpyGKFERZi8RqsiHcnX5a17QpzVUBM7QEPuDkVqIsg1O5ECFg94iSxjJYn931wkbEc0oMgRM8la4FAU0u%2BKonJTZ%2FJiwnEzgayl6sZ86kbtHiQTdQhHyifuWDsS%2FngER3830PFj%2BsjH5MAXvL9nvqRfnY6gPAaOFwvOv3eUZpmS2lAXtPBGHzmBfpF6KHMFP1hoV5b9YoN9Hd0nUZpdLe8KmJWWhlGqzYy8clOkkBZZDgAt4pl8fqZ1dZ5svjPaXrmw04KpfQ2WIv3WiSsSNvs4S3OgFTgc8LOztbdMYciYLlVPNBdgBv6OzqhiuMML4VKMpDw%2ByDFunotzW%2Fx8YieGvXpk4jQkRjZ2opEVe0XAltyTgKWw31i%2BpfOAfl01TTUHPWLk6AcvJixMPVgvQ4VqX76eONtPpzt3ZsOuSi%2FPx8kcoykTCccPP62zbnXfiXjyWk5eUHKVjAechbl2IB9tbMnCiHqjjjmjWzEqc%2BlhY7y1KS7lmRTQv2%2FW1%2FTpm6Qji4v1iICEcb%2FPBtnOJLIPHkji43cprSxfIdOCLwx3LlbIXTCd%2FhZo2qKdAioy%2Bcqs771UOKh9DTr8sCuQQKz%2FLbvYkRMLKffML7Tkb0GOqUBRkHkR5Wn2ED%2FJcThu9FKTA%2B6oF9bJsJ41rGpGOgYd093iji%2FsXUhlX7NidHIoSB7TcbRmnVK6nuTE0Tdazsh91jvNxs5KfLGXWosCDMxFZyF6TzjIIYWBsoGMoXJO787x%2BWaluwLvifcfF1C8qmADuAVrDFRHlW0%2FcOIlrGgNWzSPSZ3RzYlVzvg6G5DxNfLUehZcoxU6byprImdqSwqGdxgQ49F&X-Amz-Signature=da9c398f9981af7d7712092f098e15128814b17c61ca50fe5b7b2bf499bfed4d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ADVFJRQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFWsxfEIYDEAWzg6gB7GJ%2BacxUnz7%2FCR9%2Bhde5y%2FjJLgAiEAgsZQ8jrpnn7O%2BNWYfijhnnB1HLXAeq3Dgt7wuhmedY0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIKev4k3MMrb70h%2F5CrcA6QBeZhFHzAaMVGUlbiVcnkGgGJpyGKFERZi8RqsiHcnX5a17QpzVUBM7QEPuDkVqIsg1O5ECFg94iSxjJYn931wkbEc0oMgRM8la4FAU0u%2BKonJTZ%2FJiwnEzgayl6sZ86kbtHiQTdQhHyifuWDsS%2FngER3830PFj%2BsjH5MAXvL9nvqRfnY6gPAaOFwvOv3eUZpmS2lAXtPBGHzmBfpF6KHMFP1hoV5b9YoN9Hd0nUZpdLe8KmJWWhlGqzYy8clOkkBZZDgAt4pl8fqZ1dZ5svjPaXrmw04KpfQ2WIv3WiSsSNvs4S3OgFTgc8LOztbdMYciYLlVPNBdgBv6OzqhiuMML4VKMpDw%2ByDFunotzW%2Fx8YieGvXpk4jQkRjZ2opEVe0XAltyTgKWw31i%2BpfOAfl01TTUHPWLk6AcvJixMPVgvQ4VqX76eONtPpzt3ZsOuSi%2FPx8kcoykTCccPP62zbnXfiXjyWk5eUHKVjAechbl2IB9tbMnCiHqjjjmjWzEqc%2BlhY7y1KS7lmRTQv2%2FW1%2FTpm6Qji4v1iICEcb%2FPBtnOJLIPHkji43cprSxfIdOCLwx3LlbIXTCd%2FhZo2qKdAioy%2Bcqs771UOKh9DTr8sCuQQKz%2FLbvYkRMLKffML7Tkb0GOqUBRkHkR5Wn2ED%2FJcThu9FKTA%2B6oF9bJsJ41rGpGOgYd093iji%2FsXUhlX7NidHIoSB7TcbRmnVK6nuTE0Tdazsh91jvNxs5KfLGXWosCDMxFZyF6TzjIIYWBsoGMoXJO787x%2BWaluwLvifcfF1C8qmADuAVrDFRHlW0%2FcOIlrGgNWzSPSZ3RzYlVzvg6G5DxNfLUehZcoxU6byprImdqSwqGdxgQ49F&X-Amz-Signature=98424244adff581f3e02d410544af282f31b62f357848022edfea13cd998e9eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ADVFJRQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFWsxfEIYDEAWzg6gB7GJ%2BacxUnz7%2FCR9%2Bhde5y%2FjJLgAiEAgsZQ8jrpnn7O%2BNWYfijhnnB1HLXAeq3Dgt7wuhmedY0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIKev4k3MMrb70h%2F5CrcA6QBeZhFHzAaMVGUlbiVcnkGgGJpyGKFERZi8RqsiHcnX5a17QpzVUBM7QEPuDkVqIsg1O5ECFg94iSxjJYn931wkbEc0oMgRM8la4FAU0u%2BKonJTZ%2FJiwnEzgayl6sZ86kbtHiQTdQhHyifuWDsS%2FngER3830PFj%2BsjH5MAXvL9nvqRfnY6gPAaOFwvOv3eUZpmS2lAXtPBGHzmBfpF6KHMFP1hoV5b9YoN9Hd0nUZpdLe8KmJWWhlGqzYy8clOkkBZZDgAt4pl8fqZ1dZ5svjPaXrmw04KpfQ2WIv3WiSsSNvs4S3OgFTgc8LOztbdMYciYLlVPNBdgBv6OzqhiuMML4VKMpDw%2ByDFunotzW%2Fx8YieGvXpk4jQkRjZ2opEVe0XAltyTgKWw31i%2BpfOAfl01TTUHPWLk6AcvJixMPVgvQ4VqX76eONtPpzt3ZsOuSi%2FPx8kcoykTCccPP62zbnXfiXjyWk5eUHKVjAechbl2IB9tbMnCiHqjjjmjWzEqc%2BlhY7y1KS7lmRTQv2%2FW1%2FTpm6Qji4v1iICEcb%2FPBtnOJLIPHkji43cprSxfIdOCLwx3LlbIXTCd%2FhZo2qKdAioy%2Bcqs771UOKh9DTr8sCuQQKz%2FLbvYkRMLKffML7Tkb0GOqUBRkHkR5Wn2ED%2FJcThu9FKTA%2B6oF9bJsJ41rGpGOgYd093iji%2FsXUhlX7NidHIoSB7TcbRmnVK6nuTE0Tdazsh91jvNxs5KfLGXWosCDMxFZyF6TzjIIYWBsoGMoXJO787x%2BWaluwLvifcfF1C8qmADuAVrDFRHlW0%2FcOIlrGgNWzSPSZ3RzYlVzvg6G5DxNfLUehZcoxU6byprImdqSwqGdxgQ49F&X-Amz-Signature=23e538f1b996aef8b2067aa2dcdac39112b68ca7fa8cef87f84067ff3c1dc38e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ADVFJRQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFWsxfEIYDEAWzg6gB7GJ%2BacxUnz7%2FCR9%2Bhde5y%2FjJLgAiEAgsZQ8jrpnn7O%2BNWYfijhnnB1HLXAeq3Dgt7wuhmedY0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIKev4k3MMrb70h%2F5CrcA6QBeZhFHzAaMVGUlbiVcnkGgGJpyGKFERZi8RqsiHcnX5a17QpzVUBM7QEPuDkVqIsg1O5ECFg94iSxjJYn931wkbEc0oMgRM8la4FAU0u%2BKonJTZ%2FJiwnEzgayl6sZ86kbtHiQTdQhHyifuWDsS%2FngER3830PFj%2BsjH5MAXvL9nvqRfnY6gPAaOFwvOv3eUZpmS2lAXtPBGHzmBfpF6KHMFP1hoV5b9YoN9Hd0nUZpdLe8KmJWWhlGqzYy8clOkkBZZDgAt4pl8fqZ1dZ5svjPaXrmw04KpfQ2WIv3WiSsSNvs4S3OgFTgc8LOztbdMYciYLlVPNBdgBv6OzqhiuMML4VKMpDw%2ByDFunotzW%2Fx8YieGvXpk4jQkRjZ2opEVe0XAltyTgKWw31i%2BpfOAfl01TTUHPWLk6AcvJixMPVgvQ4VqX76eONtPpzt3ZsOuSi%2FPx8kcoykTCccPP62zbnXfiXjyWk5eUHKVjAechbl2IB9tbMnCiHqjjjmjWzEqc%2BlhY7y1KS7lmRTQv2%2FW1%2FTpm6Qji4v1iICEcb%2FPBtnOJLIPHkji43cprSxfIdOCLwx3LlbIXTCd%2FhZo2qKdAioy%2Bcqs771UOKh9DTr8sCuQQKz%2FLbvYkRMLKffML7Tkb0GOqUBRkHkR5Wn2ED%2FJcThu9FKTA%2B6oF9bJsJ41rGpGOgYd093iji%2FsXUhlX7NidHIoSB7TcbRmnVK6nuTE0Tdazsh91jvNxs5KfLGXWosCDMxFZyF6TzjIIYWBsoGMoXJO787x%2BWaluwLvifcfF1C8qmADuAVrDFRHlW0%2FcOIlrGgNWzSPSZ3RzYlVzvg6G5DxNfLUehZcoxU6byprImdqSwqGdxgQ49F&X-Amz-Signature=15caa9512c239b7fb7c4a2f476d400695335a53fad1891972814ff45d671c0cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ADVFJRQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFWsxfEIYDEAWzg6gB7GJ%2BacxUnz7%2FCR9%2Bhde5y%2FjJLgAiEAgsZQ8jrpnn7O%2BNWYfijhnnB1HLXAeq3Dgt7wuhmedY0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIKev4k3MMrb70h%2F5CrcA6QBeZhFHzAaMVGUlbiVcnkGgGJpyGKFERZi8RqsiHcnX5a17QpzVUBM7QEPuDkVqIsg1O5ECFg94iSxjJYn931wkbEc0oMgRM8la4FAU0u%2BKonJTZ%2FJiwnEzgayl6sZ86kbtHiQTdQhHyifuWDsS%2FngER3830PFj%2BsjH5MAXvL9nvqRfnY6gPAaOFwvOv3eUZpmS2lAXtPBGHzmBfpF6KHMFP1hoV5b9YoN9Hd0nUZpdLe8KmJWWhlGqzYy8clOkkBZZDgAt4pl8fqZ1dZ5svjPaXrmw04KpfQ2WIv3WiSsSNvs4S3OgFTgc8LOztbdMYciYLlVPNBdgBv6OzqhiuMML4VKMpDw%2ByDFunotzW%2Fx8YieGvXpk4jQkRjZ2opEVe0XAltyTgKWw31i%2BpfOAfl01TTUHPWLk6AcvJixMPVgvQ4VqX76eONtPpzt3ZsOuSi%2FPx8kcoykTCccPP62zbnXfiXjyWk5eUHKVjAechbl2IB9tbMnCiHqjjjmjWzEqc%2BlhY7y1KS7lmRTQv2%2FW1%2FTpm6Qji4v1iICEcb%2FPBtnOJLIPHkji43cprSxfIdOCLwx3LlbIXTCd%2FhZo2qKdAioy%2Bcqs771UOKh9DTr8sCuQQKz%2FLbvYkRMLKffML7Tkb0GOqUBRkHkR5Wn2ED%2FJcThu9FKTA%2B6oF9bJsJ41rGpGOgYd093iji%2FsXUhlX7NidHIoSB7TcbRmnVK6nuTE0Tdazsh91jvNxs5KfLGXWosCDMxFZyF6TzjIIYWBsoGMoXJO787x%2BWaluwLvifcfF1C8qmADuAVrDFRHlW0%2FcOIlrGgNWzSPSZ3RzYlVzvg6G5DxNfLUehZcoxU6byprImdqSwqGdxgQ49F&X-Amz-Signature=b690107ebf700b33943a0a67097eb1f0316d73098da95da1432d8bd5b65a4939&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ADVFJRQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFWsxfEIYDEAWzg6gB7GJ%2BacxUnz7%2FCR9%2Bhde5y%2FjJLgAiEAgsZQ8jrpnn7O%2BNWYfijhnnB1HLXAeq3Dgt7wuhmedY0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIKev4k3MMrb70h%2F5CrcA6QBeZhFHzAaMVGUlbiVcnkGgGJpyGKFERZi8RqsiHcnX5a17QpzVUBM7QEPuDkVqIsg1O5ECFg94iSxjJYn931wkbEc0oMgRM8la4FAU0u%2BKonJTZ%2FJiwnEzgayl6sZ86kbtHiQTdQhHyifuWDsS%2FngER3830PFj%2BsjH5MAXvL9nvqRfnY6gPAaOFwvOv3eUZpmS2lAXtPBGHzmBfpF6KHMFP1hoV5b9YoN9Hd0nUZpdLe8KmJWWhlGqzYy8clOkkBZZDgAt4pl8fqZ1dZ5svjPaXrmw04KpfQ2WIv3WiSsSNvs4S3OgFTgc8LOztbdMYciYLlVPNBdgBv6OzqhiuMML4VKMpDw%2ByDFunotzW%2Fx8YieGvXpk4jQkRjZ2opEVe0XAltyTgKWw31i%2BpfOAfl01TTUHPWLk6AcvJixMPVgvQ4VqX76eONtPpzt3ZsOuSi%2FPx8kcoykTCccPP62zbnXfiXjyWk5eUHKVjAechbl2IB9tbMnCiHqjjjmjWzEqc%2BlhY7y1KS7lmRTQv2%2FW1%2FTpm6Qji4v1iICEcb%2FPBtnOJLIPHkji43cprSxfIdOCLwx3LlbIXTCd%2FhZo2qKdAioy%2Bcqs771UOKh9DTr8sCuQQKz%2FLbvYkRMLKffML7Tkb0GOqUBRkHkR5Wn2ED%2FJcThu9FKTA%2B6oF9bJsJ41rGpGOgYd093iji%2FsXUhlX7NidHIoSB7TcbRmnVK6nuTE0Tdazsh91jvNxs5KfLGXWosCDMxFZyF6TzjIIYWBsoGMoXJO787x%2BWaluwLvifcfF1C8qmADuAVrDFRHlW0%2FcOIlrGgNWzSPSZ3RzYlVzvg6G5DxNfLUehZcoxU6byprImdqSwqGdxgQ49F&X-Amz-Signature=d37924ec71dd3d77420f4e4f743f6ab3247d6b8b93de1d187a631eb351e55dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
