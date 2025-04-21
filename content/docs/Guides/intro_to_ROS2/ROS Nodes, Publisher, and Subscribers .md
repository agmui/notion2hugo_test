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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZUKSLPP%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDGDpB6G1a8swfSd7Kpu8ACUDt6muFj59WOq4V8spD%2FogIhAOPyRZ67SKmH8gVRmeCthmMH6en%2BTx7oXCmlTzt5hyJVKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBbfwlzekLNSx4Fkwq3ANw28OiQk1tmXj6xKSpYx79bcOvKkon4JeqAe97QBIItqNpOVLMUpp1hMNlR096ZfgGkrPnvuQjc0hK018bziujz0ESwltYF5s4y75KfCkwSxFvc5714cXKAwSi%2FaYsbogd8Q%2BzmKbwW8WQ7VESFFLiwJ2ZqoCKX1wdIqgt%2BnphE3UFM3tUH60PWzmvKSAeTxIwxzAAOHjNSykNZ1PzXydL6te8sIieTaNiJyjOjc88Du7lTuXNni5ZIA38E3EyIiDtfTCbvINPAjNNnUswnwaZ8WPoVKDNsW9Q1Gl80ECKu2roVHk5Lxfp2FiktSTCGBdx%2BVQzbXQAIoOOgWdiikf31vm1iPqYNARFTdvfj2BM3BKkDlOx1cA86HmPNH70EXo1BKQ2I2GWDaL4m%2BNvg3eERb%2BktKMK7VUzfEnraijczW1x%2FUl%2BHos54tt0YVNn1FepFpJVkv6fr3U8vvL7gygkRuS5RLgQ5rFU3E6TG19nh6E%2FnZ%2BIPLslnOWwxgBR8GvOkuo2WkPlHrB4ARRbvmTEUjfdu4R9keNIFPnreWkQLK787QvYmrHENJFVEihDgCrloE%2BUICtr5AZWWit6N%2FsP6O84VRjR11%2Ft1G1rayHyW%2B%2FTpTs8o1mHWYdx9zC%2B0pnABjqkAb2703%2Fa%2Bp8ZIq60baUP90S3fV2cwdkY4wn9Kd82irU4jXn2%2BHA06IOYj6Zy4uifrEJ7V48sTpuAuXV5K91fq2S1a7igFMJIfi9%2BbQ4srxfQG%2BHGZ0Yc8NbzYMs%2BqGH54wU7P06W3Y5btPJu50C4%2B25lcbKrgcg00LK3rQfrOyWgn5qgvFEY6zEkOO1KPjqg%2Fn84mBdrSlffssT7rf3ZJFAyONIZ&X-Amz-Signature=4606f7fba609f7f8df7a0917325242188cda5aeaeac4f768184f0d4d31ec064d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZUKSLPP%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDGDpB6G1a8swfSd7Kpu8ACUDt6muFj59WOq4V8spD%2FogIhAOPyRZ67SKmH8gVRmeCthmMH6en%2BTx7oXCmlTzt5hyJVKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBbfwlzekLNSx4Fkwq3ANw28OiQk1tmXj6xKSpYx79bcOvKkon4JeqAe97QBIItqNpOVLMUpp1hMNlR096ZfgGkrPnvuQjc0hK018bziujz0ESwltYF5s4y75KfCkwSxFvc5714cXKAwSi%2FaYsbogd8Q%2BzmKbwW8WQ7VESFFLiwJ2ZqoCKX1wdIqgt%2BnphE3UFM3tUH60PWzmvKSAeTxIwxzAAOHjNSykNZ1PzXydL6te8sIieTaNiJyjOjc88Du7lTuXNni5ZIA38E3EyIiDtfTCbvINPAjNNnUswnwaZ8WPoVKDNsW9Q1Gl80ECKu2roVHk5Lxfp2FiktSTCGBdx%2BVQzbXQAIoOOgWdiikf31vm1iPqYNARFTdvfj2BM3BKkDlOx1cA86HmPNH70EXo1BKQ2I2GWDaL4m%2BNvg3eERb%2BktKMK7VUzfEnraijczW1x%2FUl%2BHos54tt0YVNn1FepFpJVkv6fr3U8vvL7gygkRuS5RLgQ5rFU3E6TG19nh6E%2FnZ%2BIPLslnOWwxgBR8GvOkuo2WkPlHrB4ARRbvmTEUjfdu4R9keNIFPnreWkQLK787QvYmrHENJFVEihDgCrloE%2BUICtr5AZWWit6N%2FsP6O84VRjR11%2Ft1G1rayHyW%2B%2FTpTs8o1mHWYdx9zC%2B0pnABjqkAb2703%2Fa%2Bp8ZIq60baUP90S3fV2cwdkY4wn9Kd82irU4jXn2%2BHA06IOYj6Zy4uifrEJ7V48sTpuAuXV5K91fq2S1a7igFMJIfi9%2BbQ4srxfQG%2BHGZ0Yc8NbzYMs%2BqGH54wU7P06W3Y5btPJu50C4%2B25lcbKrgcg00LK3rQfrOyWgn5qgvFEY6zEkOO1KPjqg%2Fn84mBdrSlffssT7rf3ZJFAyONIZ&X-Amz-Signature=b7c46e32394cacfcfae616216005ad1de82728438121219ff09184afc3f47d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZUKSLPP%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDGDpB6G1a8swfSd7Kpu8ACUDt6muFj59WOq4V8spD%2FogIhAOPyRZ67SKmH8gVRmeCthmMH6en%2BTx7oXCmlTzt5hyJVKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBbfwlzekLNSx4Fkwq3ANw28OiQk1tmXj6xKSpYx79bcOvKkon4JeqAe97QBIItqNpOVLMUpp1hMNlR096ZfgGkrPnvuQjc0hK018bziujz0ESwltYF5s4y75KfCkwSxFvc5714cXKAwSi%2FaYsbogd8Q%2BzmKbwW8WQ7VESFFLiwJ2ZqoCKX1wdIqgt%2BnphE3UFM3tUH60PWzmvKSAeTxIwxzAAOHjNSykNZ1PzXydL6te8sIieTaNiJyjOjc88Du7lTuXNni5ZIA38E3EyIiDtfTCbvINPAjNNnUswnwaZ8WPoVKDNsW9Q1Gl80ECKu2roVHk5Lxfp2FiktSTCGBdx%2BVQzbXQAIoOOgWdiikf31vm1iPqYNARFTdvfj2BM3BKkDlOx1cA86HmPNH70EXo1BKQ2I2GWDaL4m%2BNvg3eERb%2BktKMK7VUzfEnraijczW1x%2FUl%2BHos54tt0YVNn1FepFpJVkv6fr3U8vvL7gygkRuS5RLgQ5rFU3E6TG19nh6E%2FnZ%2BIPLslnOWwxgBR8GvOkuo2WkPlHrB4ARRbvmTEUjfdu4R9keNIFPnreWkQLK787QvYmrHENJFVEihDgCrloE%2BUICtr5AZWWit6N%2FsP6O84VRjR11%2Ft1G1rayHyW%2B%2FTpTs8o1mHWYdx9zC%2B0pnABjqkAb2703%2Fa%2Bp8ZIq60baUP90S3fV2cwdkY4wn9Kd82irU4jXn2%2BHA06IOYj6Zy4uifrEJ7V48sTpuAuXV5K91fq2S1a7igFMJIfi9%2BbQ4srxfQG%2BHGZ0Yc8NbzYMs%2BqGH54wU7P06W3Y5btPJu50C4%2B25lcbKrgcg00LK3rQfrOyWgn5qgvFEY6zEkOO1KPjqg%2Fn84mBdrSlffssT7rf3ZJFAyONIZ&X-Amz-Signature=ad15efdd57e6f12c14b2be7eb9bf876fcec6b3ddab3402cba61dfcee2593cf22&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZUKSLPP%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDGDpB6G1a8swfSd7Kpu8ACUDt6muFj59WOq4V8spD%2FogIhAOPyRZ67SKmH8gVRmeCthmMH6en%2BTx7oXCmlTzt5hyJVKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBbfwlzekLNSx4Fkwq3ANw28OiQk1tmXj6xKSpYx79bcOvKkon4JeqAe97QBIItqNpOVLMUpp1hMNlR096ZfgGkrPnvuQjc0hK018bziujz0ESwltYF5s4y75KfCkwSxFvc5714cXKAwSi%2FaYsbogd8Q%2BzmKbwW8WQ7VESFFLiwJ2ZqoCKX1wdIqgt%2BnphE3UFM3tUH60PWzmvKSAeTxIwxzAAOHjNSykNZ1PzXydL6te8sIieTaNiJyjOjc88Du7lTuXNni5ZIA38E3EyIiDtfTCbvINPAjNNnUswnwaZ8WPoVKDNsW9Q1Gl80ECKu2roVHk5Lxfp2FiktSTCGBdx%2BVQzbXQAIoOOgWdiikf31vm1iPqYNARFTdvfj2BM3BKkDlOx1cA86HmPNH70EXo1BKQ2I2GWDaL4m%2BNvg3eERb%2BktKMK7VUzfEnraijczW1x%2FUl%2BHos54tt0YVNn1FepFpJVkv6fr3U8vvL7gygkRuS5RLgQ5rFU3E6TG19nh6E%2FnZ%2BIPLslnOWwxgBR8GvOkuo2WkPlHrB4ARRbvmTEUjfdu4R9keNIFPnreWkQLK787QvYmrHENJFVEihDgCrloE%2BUICtr5AZWWit6N%2FsP6O84VRjR11%2Ft1G1rayHyW%2B%2FTpTs8o1mHWYdx9zC%2B0pnABjqkAb2703%2Fa%2Bp8ZIq60baUP90S3fV2cwdkY4wn9Kd82irU4jXn2%2BHA06IOYj6Zy4uifrEJ7V48sTpuAuXV5K91fq2S1a7igFMJIfi9%2BbQ4srxfQG%2BHGZ0Yc8NbzYMs%2BqGH54wU7P06W3Y5btPJu50C4%2B25lcbKrgcg00LK3rQfrOyWgn5qgvFEY6zEkOO1KPjqg%2Fn84mBdrSlffssT7rf3ZJFAyONIZ&X-Amz-Signature=f2c4a8b1fac2997937e29c32097538343c46ed6f10590c35f4ec65051141f769&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZUKSLPP%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDGDpB6G1a8swfSd7Kpu8ACUDt6muFj59WOq4V8spD%2FogIhAOPyRZ67SKmH8gVRmeCthmMH6en%2BTx7oXCmlTzt5hyJVKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBbfwlzekLNSx4Fkwq3ANw28OiQk1tmXj6xKSpYx79bcOvKkon4JeqAe97QBIItqNpOVLMUpp1hMNlR096ZfgGkrPnvuQjc0hK018bziujz0ESwltYF5s4y75KfCkwSxFvc5714cXKAwSi%2FaYsbogd8Q%2BzmKbwW8WQ7VESFFLiwJ2ZqoCKX1wdIqgt%2BnphE3UFM3tUH60PWzmvKSAeTxIwxzAAOHjNSykNZ1PzXydL6te8sIieTaNiJyjOjc88Du7lTuXNni5ZIA38E3EyIiDtfTCbvINPAjNNnUswnwaZ8WPoVKDNsW9Q1Gl80ECKu2roVHk5Lxfp2FiktSTCGBdx%2BVQzbXQAIoOOgWdiikf31vm1iPqYNARFTdvfj2BM3BKkDlOx1cA86HmPNH70EXo1BKQ2I2GWDaL4m%2BNvg3eERb%2BktKMK7VUzfEnraijczW1x%2FUl%2BHos54tt0YVNn1FepFpJVkv6fr3U8vvL7gygkRuS5RLgQ5rFU3E6TG19nh6E%2FnZ%2BIPLslnOWwxgBR8GvOkuo2WkPlHrB4ARRbvmTEUjfdu4R9keNIFPnreWkQLK787QvYmrHENJFVEihDgCrloE%2BUICtr5AZWWit6N%2FsP6O84VRjR11%2Ft1G1rayHyW%2B%2FTpTs8o1mHWYdx9zC%2B0pnABjqkAb2703%2Fa%2Bp8ZIq60baUP90S3fV2cwdkY4wn9Kd82irU4jXn2%2BHA06IOYj6Zy4uifrEJ7V48sTpuAuXV5K91fq2S1a7igFMJIfi9%2BbQ4srxfQG%2BHGZ0Yc8NbzYMs%2BqGH54wU7P06W3Y5btPJu50C4%2B25lcbKrgcg00LK3rQfrOyWgn5qgvFEY6zEkOO1KPjqg%2Fn84mBdrSlffssT7rf3ZJFAyONIZ&X-Amz-Signature=904eec67e60292b0faf5e13798697569652f8b795ee9ab1efd2025224c69b208&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZUKSLPP%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDGDpB6G1a8swfSd7Kpu8ACUDt6muFj59WOq4V8spD%2FogIhAOPyRZ67SKmH8gVRmeCthmMH6en%2BTx7oXCmlTzt5hyJVKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBbfwlzekLNSx4Fkwq3ANw28OiQk1tmXj6xKSpYx79bcOvKkon4JeqAe97QBIItqNpOVLMUpp1hMNlR096ZfgGkrPnvuQjc0hK018bziujz0ESwltYF5s4y75KfCkwSxFvc5714cXKAwSi%2FaYsbogd8Q%2BzmKbwW8WQ7VESFFLiwJ2ZqoCKX1wdIqgt%2BnphE3UFM3tUH60PWzmvKSAeTxIwxzAAOHjNSykNZ1PzXydL6te8sIieTaNiJyjOjc88Du7lTuXNni5ZIA38E3EyIiDtfTCbvINPAjNNnUswnwaZ8WPoVKDNsW9Q1Gl80ECKu2roVHk5Lxfp2FiktSTCGBdx%2BVQzbXQAIoOOgWdiikf31vm1iPqYNARFTdvfj2BM3BKkDlOx1cA86HmPNH70EXo1BKQ2I2GWDaL4m%2BNvg3eERb%2BktKMK7VUzfEnraijczW1x%2FUl%2BHos54tt0YVNn1FepFpJVkv6fr3U8vvL7gygkRuS5RLgQ5rFU3E6TG19nh6E%2FnZ%2BIPLslnOWwxgBR8GvOkuo2WkPlHrB4ARRbvmTEUjfdu4R9keNIFPnreWkQLK787QvYmrHENJFVEihDgCrloE%2BUICtr5AZWWit6N%2FsP6O84VRjR11%2Ft1G1rayHyW%2B%2FTpTs8o1mHWYdx9zC%2B0pnABjqkAb2703%2Fa%2Bp8ZIq60baUP90S3fV2cwdkY4wn9Kd82irU4jXn2%2BHA06IOYj6Zy4uifrEJ7V48sTpuAuXV5K91fq2S1a7igFMJIfi9%2BbQ4srxfQG%2BHGZ0Yc8NbzYMs%2BqGH54wU7P06W3Y5btPJu50C4%2B25lcbKrgcg00LK3rQfrOyWgn5qgvFEY6zEkOO1KPjqg%2Fn84mBdrSlffssT7rf3ZJFAyONIZ&X-Amz-Signature=5b716ee98dd21bc34c2b272ad2571e6098835f572bf1d2ef8da9270328eebf37&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZUKSLPP%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDGDpB6G1a8swfSd7Kpu8ACUDt6muFj59WOq4V8spD%2FogIhAOPyRZ67SKmH8gVRmeCthmMH6en%2BTx7oXCmlTzt5hyJVKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBbfwlzekLNSx4Fkwq3ANw28OiQk1tmXj6xKSpYx79bcOvKkon4JeqAe97QBIItqNpOVLMUpp1hMNlR096ZfgGkrPnvuQjc0hK018bziujz0ESwltYF5s4y75KfCkwSxFvc5714cXKAwSi%2FaYsbogd8Q%2BzmKbwW8WQ7VESFFLiwJ2ZqoCKX1wdIqgt%2BnphE3UFM3tUH60PWzmvKSAeTxIwxzAAOHjNSykNZ1PzXydL6te8sIieTaNiJyjOjc88Du7lTuXNni5ZIA38E3EyIiDtfTCbvINPAjNNnUswnwaZ8WPoVKDNsW9Q1Gl80ECKu2roVHk5Lxfp2FiktSTCGBdx%2BVQzbXQAIoOOgWdiikf31vm1iPqYNARFTdvfj2BM3BKkDlOx1cA86HmPNH70EXo1BKQ2I2GWDaL4m%2BNvg3eERb%2BktKMK7VUzfEnraijczW1x%2FUl%2BHos54tt0YVNn1FepFpJVkv6fr3U8vvL7gygkRuS5RLgQ5rFU3E6TG19nh6E%2FnZ%2BIPLslnOWwxgBR8GvOkuo2WkPlHrB4ARRbvmTEUjfdu4R9keNIFPnreWkQLK787QvYmrHENJFVEihDgCrloE%2BUICtr5AZWWit6N%2FsP6O84VRjR11%2Ft1G1rayHyW%2B%2FTpTs8o1mHWYdx9zC%2B0pnABjqkAb2703%2Fa%2Bp8ZIq60baUP90S3fV2cwdkY4wn9Kd82irU4jXn2%2BHA06IOYj6Zy4uifrEJ7V48sTpuAuXV5K91fq2S1a7igFMJIfi9%2BbQ4srxfQG%2BHGZ0Yc8NbzYMs%2BqGH54wU7P06W3Y5btPJu50C4%2B25lcbKrgcg00LK3rQfrOyWgn5qgvFEY6zEkOO1KPjqg%2Fn84mBdrSlffssT7rf3ZJFAyONIZ&X-Amz-Signature=59e5d41a524e88e9b7d68a8c9b706956e22dea0ae6a594d45ea35ce29f5078ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZUKSLPP%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDGDpB6G1a8swfSd7Kpu8ACUDt6muFj59WOq4V8spD%2FogIhAOPyRZ67SKmH8gVRmeCthmMH6en%2BTx7oXCmlTzt5hyJVKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBbfwlzekLNSx4Fkwq3ANw28OiQk1tmXj6xKSpYx79bcOvKkon4JeqAe97QBIItqNpOVLMUpp1hMNlR096ZfgGkrPnvuQjc0hK018bziujz0ESwltYF5s4y75KfCkwSxFvc5714cXKAwSi%2FaYsbogd8Q%2BzmKbwW8WQ7VESFFLiwJ2ZqoCKX1wdIqgt%2BnphE3UFM3tUH60PWzmvKSAeTxIwxzAAOHjNSykNZ1PzXydL6te8sIieTaNiJyjOjc88Du7lTuXNni5ZIA38E3EyIiDtfTCbvINPAjNNnUswnwaZ8WPoVKDNsW9Q1Gl80ECKu2roVHk5Lxfp2FiktSTCGBdx%2BVQzbXQAIoOOgWdiikf31vm1iPqYNARFTdvfj2BM3BKkDlOx1cA86HmPNH70EXo1BKQ2I2GWDaL4m%2BNvg3eERb%2BktKMK7VUzfEnraijczW1x%2FUl%2BHos54tt0YVNn1FepFpJVkv6fr3U8vvL7gygkRuS5RLgQ5rFU3E6TG19nh6E%2FnZ%2BIPLslnOWwxgBR8GvOkuo2WkPlHrB4ARRbvmTEUjfdu4R9keNIFPnreWkQLK787QvYmrHENJFVEihDgCrloE%2BUICtr5AZWWit6N%2FsP6O84VRjR11%2Ft1G1rayHyW%2B%2FTpTs8o1mHWYdx9zC%2B0pnABjqkAb2703%2Fa%2Bp8ZIq60baUP90S3fV2cwdkY4wn9Kd82irU4jXn2%2BHA06IOYj6Zy4uifrEJ7V48sTpuAuXV5K91fq2S1a7igFMJIfi9%2BbQ4srxfQG%2BHGZ0Yc8NbzYMs%2BqGH54wU7P06W3Y5btPJu50C4%2B25lcbKrgcg00LK3rQfrOyWgn5qgvFEY6zEkOO1KPjqg%2Fn84mBdrSlffssT7rf3ZJFAyONIZ&X-Amz-Signature=bc19b41af68d4edd59d796a2f6f68b9d5373fafb9232bcbfb1a0282d0021ca18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
