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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIJIKZ4%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdaA8mtRxJQmPH7loNr7KqJT0Fvm%2B7v51Oi64KzyAp6AIhANnfy1vgTgLKewcCFkUzr%2FGk%2B%2BEW%2FmpE2emgNGufCIt1Kv8DCBIQABoMNjM3NDIzMTgzODA1IgzeTgs%2FOR53ArbXaEQq3AOK9ceWjG7KLr0bJWKrvSOYFuhfOfmljC1Pcuny5yBTfRlIpiVd9ASJwnQGGTNsHMcdq1hBBz635tWWVm5JX9bVFw1S2pxjGoLQ10y1HAim%2BUeGRcP0p1kPC0l2a3TGcXpmlKgL6jlO06R4ws8XJlNV0ZKDNyW1LTTKCcqbNfDWRGbnzcq8D0262PA1J1libTszqz%2Bvz%2FbfoHUN%2FW%2F3wb%2FDNFD3lSdSaNLn%2F2cXus9sNBgfi%2FBaKzcvLa9LJiZL6iegARbk1vC8q0QWx%2BISr79PBQFIPchfKOZlzQtV7RwPJm317JnlCsMsgVKdXCZr39WIXMZuTJUEc8CZuK%2FZ%2FRTAqmWexOPDyxw5cxqJtffxfl2OPG2sC8H8pPk3vvgskdc10ZiKz1DgtQbb51u6l5cV3W2vcuCH6wM8fG5ZWZ4tYIeENbuHIe%2BSPr2jjL84ujnr5yI0%2FBmlFLXHxZI4zo27s9vqeExMMMo8%2Fc48nZxfyhxnG%2BXRChmmze29fFnPtYgtWowoCba9hh2hf5A0tKwMTrXEdukNV9bijHRIjzA2ZSM0StQiVL9YE3bqlsgirfv7e%2FyzOsmA453fRiE7pd4dN%2FGGvnRRA6Q%2Bby%2FreJrhhsZolAHoqZi5uQJM%2FjDuzpvLBjqkAX3sG6l0exOUqOR4J%2BoPH0J9rwFcDHIBdDL%2FJFMHCs5paeDTlR93%2BxZHqRRWb5hxEkbhRieMUN1plBhFAtWxZGHEG9eEc7Wdq0M5iCo%2FjldZBuloM%2BKSdkW%2BKZf8am54cvS9ot4i%2BkG%2F6Pup8pFjKzXHY1oTcYM90GDyReoqGkmdrFb0oihKexQ3pc3E3gOpRkjVT%2FpPM6tjgSMMAlS3QgjEC%2Beg&X-Amz-Signature=98c79308f2107fbc06ff28404385e0e584e5aba490323c5051b90a2f8f925579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIJIKZ4%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdaA8mtRxJQmPH7loNr7KqJT0Fvm%2B7v51Oi64KzyAp6AIhANnfy1vgTgLKewcCFkUzr%2FGk%2B%2BEW%2FmpE2emgNGufCIt1Kv8DCBIQABoMNjM3NDIzMTgzODA1IgzeTgs%2FOR53ArbXaEQq3AOK9ceWjG7KLr0bJWKrvSOYFuhfOfmljC1Pcuny5yBTfRlIpiVd9ASJwnQGGTNsHMcdq1hBBz635tWWVm5JX9bVFw1S2pxjGoLQ10y1HAim%2BUeGRcP0p1kPC0l2a3TGcXpmlKgL6jlO06R4ws8XJlNV0ZKDNyW1LTTKCcqbNfDWRGbnzcq8D0262PA1J1libTszqz%2Bvz%2FbfoHUN%2FW%2F3wb%2FDNFD3lSdSaNLn%2F2cXus9sNBgfi%2FBaKzcvLa9LJiZL6iegARbk1vC8q0QWx%2BISr79PBQFIPchfKOZlzQtV7RwPJm317JnlCsMsgVKdXCZr39WIXMZuTJUEc8CZuK%2FZ%2FRTAqmWexOPDyxw5cxqJtffxfl2OPG2sC8H8pPk3vvgskdc10ZiKz1DgtQbb51u6l5cV3W2vcuCH6wM8fG5ZWZ4tYIeENbuHIe%2BSPr2jjL84ujnr5yI0%2FBmlFLXHxZI4zo27s9vqeExMMMo8%2Fc48nZxfyhxnG%2BXRChmmze29fFnPtYgtWowoCba9hh2hf5A0tKwMTrXEdukNV9bijHRIjzA2ZSM0StQiVL9YE3bqlsgirfv7e%2FyzOsmA453fRiE7pd4dN%2FGGvnRRA6Q%2Bby%2FreJrhhsZolAHoqZi5uQJM%2FjDuzpvLBjqkAX3sG6l0exOUqOR4J%2BoPH0J9rwFcDHIBdDL%2FJFMHCs5paeDTlR93%2BxZHqRRWb5hxEkbhRieMUN1plBhFAtWxZGHEG9eEc7Wdq0M5iCo%2FjldZBuloM%2BKSdkW%2BKZf8am54cvS9ot4i%2BkG%2F6Pup8pFjKzXHY1oTcYM90GDyReoqGkmdrFb0oihKexQ3pc3E3gOpRkjVT%2FpPM6tjgSMMAlS3QgjEC%2Beg&X-Amz-Signature=2a5479f37264cd81925df2e476de9cc90b060d3b99c840b4cc41e36f1c368dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIJIKZ4%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdaA8mtRxJQmPH7loNr7KqJT0Fvm%2B7v51Oi64KzyAp6AIhANnfy1vgTgLKewcCFkUzr%2FGk%2B%2BEW%2FmpE2emgNGufCIt1Kv8DCBIQABoMNjM3NDIzMTgzODA1IgzeTgs%2FOR53ArbXaEQq3AOK9ceWjG7KLr0bJWKrvSOYFuhfOfmljC1Pcuny5yBTfRlIpiVd9ASJwnQGGTNsHMcdq1hBBz635tWWVm5JX9bVFw1S2pxjGoLQ10y1HAim%2BUeGRcP0p1kPC0l2a3TGcXpmlKgL6jlO06R4ws8XJlNV0ZKDNyW1LTTKCcqbNfDWRGbnzcq8D0262PA1J1libTszqz%2Bvz%2FbfoHUN%2FW%2F3wb%2FDNFD3lSdSaNLn%2F2cXus9sNBgfi%2FBaKzcvLa9LJiZL6iegARbk1vC8q0QWx%2BISr79PBQFIPchfKOZlzQtV7RwPJm317JnlCsMsgVKdXCZr39WIXMZuTJUEc8CZuK%2FZ%2FRTAqmWexOPDyxw5cxqJtffxfl2OPG2sC8H8pPk3vvgskdc10ZiKz1DgtQbb51u6l5cV3W2vcuCH6wM8fG5ZWZ4tYIeENbuHIe%2BSPr2jjL84ujnr5yI0%2FBmlFLXHxZI4zo27s9vqeExMMMo8%2Fc48nZxfyhxnG%2BXRChmmze29fFnPtYgtWowoCba9hh2hf5A0tKwMTrXEdukNV9bijHRIjzA2ZSM0StQiVL9YE3bqlsgirfv7e%2FyzOsmA453fRiE7pd4dN%2FGGvnRRA6Q%2Bby%2FreJrhhsZolAHoqZi5uQJM%2FjDuzpvLBjqkAX3sG6l0exOUqOR4J%2BoPH0J9rwFcDHIBdDL%2FJFMHCs5paeDTlR93%2BxZHqRRWb5hxEkbhRieMUN1plBhFAtWxZGHEG9eEc7Wdq0M5iCo%2FjldZBuloM%2BKSdkW%2BKZf8am54cvS9ot4i%2BkG%2F6Pup8pFjKzXHY1oTcYM90GDyReoqGkmdrFb0oihKexQ3pc3E3gOpRkjVT%2FpPM6tjgSMMAlS3QgjEC%2Beg&X-Amz-Signature=c0ac64198fe387d78462229a2e5d4ac46a77cf5f9734c151e3db0607cd891fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIJIKZ4%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdaA8mtRxJQmPH7loNr7KqJT0Fvm%2B7v51Oi64KzyAp6AIhANnfy1vgTgLKewcCFkUzr%2FGk%2B%2BEW%2FmpE2emgNGufCIt1Kv8DCBIQABoMNjM3NDIzMTgzODA1IgzeTgs%2FOR53ArbXaEQq3AOK9ceWjG7KLr0bJWKrvSOYFuhfOfmljC1Pcuny5yBTfRlIpiVd9ASJwnQGGTNsHMcdq1hBBz635tWWVm5JX9bVFw1S2pxjGoLQ10y1HAim%2BUeGRcP0p1kPC0l2a3TGcXpmlKgL6jlO06R4ws8XJlNV0ZKDNyW1LTTKCcqbNfDWRGbnzcq8D0262PA1J1libTszqz%2Bvz%2FbfoHUN%2FW%2F3wb%2FDNFD3lSdSaNLn%2F2cXus9sNBgfi%2FBaKzcvLa9LJiZL6iegARbk1vC8q0QWx%2BISr79PBQFIPchfKOZlzQtV7RwPJm317JnlCsMsgVKdXCZr39WIXMZuTJUEc8CZuK%2FZ%2FRTAqmWexOPDyxw5cxqJtffxfl2OPG2sC8H8pPk3vvgskdc10ZiKz1DgtQbb51u6l5cV3W2vcuCH6wM8fG5ZWZ4tYIeENbuHIe%2BSPr2jjL84ujnr5yI0%2FBmlFLXHxZI4zo27s9vqeExMMMo8%2Fc48nZxfyhxnG%2BXRChmmze29fFnPtYgtWowoCba9hh2hf5A0tKwMTrXEdukNV9bijHRIjzA2ZSM0StQiVL9YE3bqlsgirfv7e%2FyzOsmA453fRiE7pd4dN%2FGGvnRRA6Q%2Bby%2FreJrhhsZolAHoqZi5uQJM%2FjDuzpvLBjqkAX3sG6l0exOUqOR4J%2BoPH0J9rwFcDHIBdDL%2FJFMHCs5paeDTlR93%2BxZHqRRWb5hxEkbhRieMUN1plBhFAtWxZGHEG9eEc7Wdq0M5iCo%2FjldZBuloM%2BKSdkW%2BKZf8am54cvS9ot4i%2BkG%2F6Pup8pFjKzXHY1oTcYM90GDyReoqGkmdrFb0oihKexQ3pc3E3gOpRkjVT%2FpPM6tjgSMMAlS3QgjEC%2Beg&X-Amz-Signature=e6b94c475a42f27f56475497d939cc583554785c9fe42fc5dd7297704fa14a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIJIKZ4%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdaA8mtRxJQmPH7loNr7KqJT0Fvm%2B7v51Oi64KzyAp6AIhANnfy1vgTgLKewcCFkUzr%2FGk%2B%2BEW%2FmpE2emgNGufCIt1Kv8DCBIQABoMNjM3NDIzMTgzODA1IgzeTgs%2FOR53ArbXaEQq3AOK9ceWjG7KLr0bJWKrvSOYFuhfOfmljC1Pcuny5yBTfRlIpiVd9ASJwnQGGTNsHMcdq1hBBz635tWWVm5JX9bVFw1S2pxjGoLQ10y1HAim%2BUeGRcP0p1kPC0l2a3TGcXpmlKgL6jlO06R4ws8XJlNV0ZKDNyW1LTTKCcqbNfDWRGbnzcq8D0262PA1J1libTszqz%2Bvz%2FbfoHUN%2FW%2F3wb%2FDNFD3lSdSaNLn%2F2cXus9sNBgfi%2FBaKzcvLa9LJiZL6iegARbk1vC8q0QWx%2BISr79PBQFIPchfKOZlzQtV7RwPJm317JnlCsMsgVKdXCZr39WIXMZuTJUEc8CZuK%2FZ%2FRTAqmWexOPDyxw5cxqJtffxfl2OPG2sC8H8pPk3vvgskdc10ZiKz1DgtQbb51u6l5cV3W2vcuCH6wM8fG5ZWZ4tYIeENbuHIe%2BSPr2jjL84ujnr5yI0%2FBmlFLXHxZI4zo27s9vqeExMMMo8%2Fc48nZxfyhxnG%2BXRChmmze29fFnPtYgtWowoCba9hh2hf5A0tKwMTrXEdukNV9bijHRIjzA2ZSM0StQiVL9YE3bqlsgirfv7e%2FyzOsmA453fRiE7pd4dN%2FGGvnRRA6Q%2Bby%2FreJrhhsZolAHoqZi5uQJM%2FjDuzpvLBjqkAX3sG6l0exOUqOR4J%2BoPH0J9rwFcDHIBdDL%2FJFMHCs5paeDTlR93%2BxZHqRRWb5hxEkbhRieMUN1plBhFAtWxZGHEG9eEc7Wdq0M5iCo%2FjldZBuloM%2BKSdkW%2BKZf8am54cvS9ot4i%2BkG%2F6Pup8pFjKzXHY1oTcYM90GDyReoqGkmdrFb0oihKexQ3pc3E3gOpRkjVT%2FpPM6tjgSMMAlS3QgjEC%2Beg&X-Amz-Signature=2b7864b66f44a5bb9559c625f500e61216b1d1b75361e9b87615dbcd92b3fdcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIJIKZ4%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdaA8mtRxJQmPH7loNr7KqJT0Fvm%2B7v51Oi64KzyAp6AIhANnfy1vgTgLKewcCFkUzr%2FGk%2B%2BEW%2FmpE2emgNGufCIt1Kv8DCBIQABoMNjM3NDIzMTgzODA1IgzeTgs%2FOR53ArbXaEQq3AOK9ceWjG7KLr0bJWKrvSOYFuhfOfmljC1Pcuny5yBTfRlIpiVd9ASJwnQGGTNsHMcdq1hBBz635tWWVm5JX9bVFw1S2pxjGoLQ10y1HAim%2BUeGRcP0p1kPC0l2a3TGcXpmlKgL6jlO06R4ws8XJlNV0ZKDNyW1LTTKCcqbNfDWRGbnzcq8D0262PA1J1libTszqz%2Bvz%2FbfoHUN%2FW%2F3wb%2FDNFD3lSdSaNLn%2F2cXus9sNBgfi%2FBaKzcvLa9LJiZL6iegARbk1vC8q0QWx%2BISr79PBQFIPchfKOZlzQtV7RwPJm317JnlCsMsgVKdXCZr39WIXMZuTJUEc8CZuK%2FZ%2FRTAqmWexOPDyxw5cxqJtffxfl2OPG2sC8H8pPk3vvgskdc10ZiKz1DgtQbb51u6l5cV3W2vcuCH6wM8fG5ZWZ4tYIeENbuHIe%2BSPr2jjL84ujnr5yI0%2FBmlFLXHxZI4zo27s9vqeExMMMo8%2Fc48nZxfyhxnG%2BXRChmmze29fFnPtYgtWowoCba9hh2hf5A0tKwMTrXEdukNV9bijHRIjzA2ZSM0StQiVL9YE3bqlsgirfv7e%2FyzOsmA453fRiE7pd4dN%2FGGvnRRA6Q%2Bby%2FreJrhhsZolAHoqZi5uQJM%2FjDuzpvLBjqkAX3sG6l0exOUqOR4J%2BoPH0J9rwFcDHIBdDL%2FJFMHCs5paeDTlR93%2BxZHqRRWb5hxEkbhRieMUN1plBhFAtWxZGHEG9eEc7Wdq0M5iCo%2FjldZBuloM%2BKSdkW%2BKZf8am54cvS9ot4i%2BkG%2F6Pup8pFjKzXHY1oTcYM90GDyReoqGkmdrFb0oihKexQ3pc3E3gOpRkjVT%2FpPM6tjgSMMAlS3QgjEC%2Beg&X-Amz-Signature=7010e3d8cc67b5c024681111c6b8b69dd9cf82ab14a7f31a5efa38438af0a9c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIJIKZ4%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdaA8mtRxJQmPH7loNr7KqJT0Fvm%2B7v51Oi64KzyAp6AIhANnfy1vgTgLKewcCFkUzr%2FGk%2B%2BEW%2FmpE2emgNGufCIt1Kv8DCBIQABoMNjM3NDIzMTgzODA1IgzeTgs%2FOR53ArbXaEQq3AOK9ceWjG7KLr0bJWKrvSOYFuhfOfmljC1Pcuny5yBTfRlIpiVd9ASJwnQGGTNsHMcdq1hBBz635tWWVm5JX9bVFw1S2pxjGoLQ10y1HAim%2BUeGRcP0p1kPC0l2a3TGcXpmlKgL6jlO06R4ws8XJlNV0ZKDNyW1LTTKCcqbNfDWRGbnzcq8D0262PA1J1libTszqz%2Bvz%2FbfoHUN%2FW%2F3wb%2FDNFD3lSdSaNLn%2F2cXus9sNBgfi%2FBaKzcvLa9LJiZL6iegARbk1vC8q0QWx%2BISr79PBQFIPchfKOZlzQtV7RwPJm317JnlCsMsgVKdXCZr39WIXMZuTJUEc8CZuK%2FZ%2FRTAqmWexOPDyxw5cxqJtffxfl2OPG2sC8H8pPk3vvgskdc10ZiKz1DgtQbb51u6l5cV3W2vcuCH6wM8fG5ZWZ4tYIeENbuHIe%2BSPr2jjL84ujnr5yI0%2FBmlFLXHxZI4zo27s9vqeExMMMo8%2Fc48nZxfyhxnG%2BXRChmmze29fFnPtYgtWowoCba9hh2hf5A0tKwMTrXEdukNV9bijHRIjzA2ZSM0StQiVL9YE3bqlsgirfv7e%2FyzOsmA453fRiE7pd4dN%2FGGvnRRA6Q%2Bby%2FreJrhhsZolAHoqZi5uQJM%2FjDuzpvLBjqkAX3sG6l0exOUqOR4J%2BoPH0J9rwFcDHIBdDL%2FJFMHCs5paeDTlR93%2BxZHqRRWb5hxEkbhRieMUN1plBhFAtWxZGHEG9eEc7Wdq0M5iCo%2FjldZBuloM%2BKSdkW%2BKZf8am54cvS9ot4i%2BkG%2F6Pup8pFjKzXHY1oTcYM90GDyReoqGkmdrFb0oihKexQ3pc3E3gOpRkjVT%2FpPM6tjgSMMAlS3QgjEC%2Beg&X-Amz-Signature=c217c920a0e79fa4b4ffeef8b912652ecd20cdcd25b4f336c9b2b61e5f4d2e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIJIKZ4%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdaA8mtRxJQmPH7loNr7KqJT0Fvm%2B7v51Oi64KzyAp6AIhANnfy1vgTgLKewcCFkUzr%2FGk%2B%2BEW%2FmpE2emgNGufCIt1Kv8DCBIQABoMNjM3NDIzMTgzODA1IgzeTgs%2FOR53ArbXaEQq3AOK9ceWjG7KLr0bJWKrvSOYFuhfOfmljC1Pcuny5yBTfRlIpiVd9ASJwnQGGTNsHMcdq1hBBz635tWWVm5JX9bVFw1S2pxjGoLQ10y1HAim%2BUeGRcP0p1kPC0l2a3TGcXpmlKgL6jlO06R4ws8XJlNV0ZKDNyW1LTTKCcqbNfDWRGbnzcq8D0262PA1J1libTszqz%2Bvz%2FbfoHUN%2FW%2F3wb%2FDNFD3lSdSaNLn%2F2cXus9sNBgfi%2FBaKzcvLa9LJiZL6iegARbk1vC8q0QWx%2BISr79PBQFIPchfKOZlzQtV7RwPJm317JnlCsMsgVKdXCZr39WIXMZuTJUEc8CZuK%2FZ%2FRTAqmWexOPDyxw5cxqJtffxfl2OPG2sC8H8pPk3vvgskdc10ZiKz1DgtQbb51u6l5cV3W2vcuCH6wM8fG5ZWZ4tYIeENbuHIe%2BSPr2jjL84ujnr5yI0%2FBmlFLXHxZI4zo27s9vqeExMMMo8%2Fc48nZxfyhxnG%2BXRChmmze29fFnPtYgtWowoCba9hh2hf5A0tKwMTrXEdukNV9bijHRIjzA2ZSM0StQiVL9YE3bqlsgirfv7e%2FyzOsmA453fRiE7pd4dN%2FGGvnRRA6Q%2Bby%2FreJrhhsZolAHoqZi5uQJM%2FjDuzpvLBjqkAX3sG6l0exOUqOR4J%2BoPH0J9rwFcDHIBdDL%2FJFMHCs5paeDTlR93%2BxZHqRRWb5hxEkbhRieMUN1plBhFAtWxZGHEG9eEc7Wdq0M5iCo%2FjldZBuloM%2BKSdkW%2BKZf8am54cvS9ot4i%2BkG%2F6Pup8pFjKzXHY1oTcYM90GDyReoqGkmdrFb0oihKexQ3pc3E3gOpRkjVT%2FpPM6tjgSMMAlS3QgjEC%2Beg&X-Amz-Signature=f2f5c8c8e1a41fefd8bb8126f841dac484f7858e92f6aed421e8b06c4c8e942e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
