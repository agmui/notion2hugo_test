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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TGJRKOV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2uK7shr0TiDFKClb%2FL9%2BSfceAWPctBKlqmSzlgGztQwIhAM0p05pvJJti9dXWt9SV1RHLVCMiEkOAfZ8XXb%2BahvMWKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD3a5WXcHNyIIzs3kq3APBMEGYJn%2FhixWPl%2FPX2ls8SJ1NDVUrkv9rLapAWgAO27pb7oRVqfUovhtgpSGqWyRNytwzmibKq9o%2Fyb7qn%2BfrBn1mvLjnxfKKlWF9H2tdGW0v6sOvpVIjeXiF1b73IrveeZZzTAH82MwqYeWo0nVeb743uRNnXWgl%2BceMlqCtsSmTUxsz9R1o8h5coYiP2GTXDkKqwQDVTm%2FgyQ%2BipjF2qlzHx1jMDDlU5Pr%2BCdGmmngK1FAXg5cIM%2BTTouoS%2FPbkS6EOxkb%2BwujqBJtAlFn4dzHm9SNHsBt3wtkUPaNEPWMSu7xlhSXeZI2lK7RvUmULzmKGDia%2BIIKgQrsLIaATMNgnbxmsWe2jxSmzFZRnlSr8P7X6ZW9NAq%2FT0d9cHJB9tVT2OJsrqhDQqNzQ99ZKB25IPzzS1%2FemjVc5PX%2FD3mUzvTiuMcodhm201TrKBzuANpHBZVpFz5f68t9Rh05oTEABgmQ6pZgmNSqH2csrOGm4oeHd5jre%2FrrY7y%2B99VLQwY9AklvG7z%2FmsNSpqpY3aqEWJkEi846djRkINAHbuzQ2gm5SZctDCN9OTUH73GVBN1ftw2GN6jJamTZ3dSSb%2BIpaGapCx3xv99YNhzxsyjpMeVivzcnNa8202zD%2F6s6%2BBjqkARWUySTnr6BPF4JFWH6UyK%2Fo78DZ7PumqcCHSoESxo2a6oooQQkMdcQUPC2FZEt5scp%2BC0Aa%2BtMxFbfa7T0apVHUS2KSquMhMS0LXIwpfZaXOdRubTegTWNKKVeYPjnerOnyOybvqQnyWLhexGnCdspn5r0SiKhlp%2FXJpIBJE6pgvqkGaG1mtpUDLlGpaipyNDxnw%2BKf2DHkJmB%2B%2F8guU6Eb66yH&X-Amz-Signature=42370a37ae9999512017cca5a330fdc36dd1fea7257120461cdd3b9d6b8879b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TGJRKOV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2uK7shr0TiDFKClb%2FL9%2BSfceAWPctBKlqmSzlgGztQwIhAM0p05pvJJti9dXWt9SV1RHLVCMiEkOAfZ8XXb%2BahvMWKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD3a5WXcHNyIIzs3kq3APBMEGYJn%2FhixWPl%2FPX2ls8SJ1NDVUrkv9rLapAWgAO27pb7oRVqfUovhtgpSGqWyRNytwzmibKq9o%2Fyb7qn%2BfrBn1mvLjnxfKKlWF9H2tdGW0v6sOvpVIjeXiF1b73IrveeZZzTAH82MwqYeWo0nVeb743uRNnXWgl%2BceMlqCtsSmTUxsz9R1o8h5coYiP2GTXDkKqwQDVTm%2FgyQ%2BipjF2qlzHx1jMDDlU5Pr%2BCdGmmngK1FAXg5cIM%2BTTouoS%2FPbkS6EOxkb%2BwujqBJtAlFn4dzHm9SNHsBt3wtkUPaNEPWMSu7xlhSXeZI2lK7RvUmULzmKGDia%2BIIKgQrsLIaATMNgnbxmsWe2jxSmzFZRnlSr8P7X6ZW9NAq%2FT0d9cHJB9tVT2OJsrqhDQqNzQ99ZKB25IPzzS1%2FemjVc5PX%2FD3mUzvTiuMcodhm201TrKBzuANpHBZVpFz5f68t9Rh05oTEABgmQ6pZgmNSqH2csrOGm4oeHd5jre%2FrrY7y%2B99VLQwY9AklvG7z%2FmsNSpqpY3aqEWJkEi846djRkINAHbuzQ2gm5SZctDCN9OTUH73GVBN1ftw2GN6jJamTZ3dSSb%2BIpaGapCx3xv99YNhzxsyjpMeVivzcnNa8202zD%2F6s6%2BBjqkARWUySTnr6BPF4JFWH6UyK%2Fo78DZ7PumqcCHSoESxo2a6oooQQkMdcQUPC2FZEt5scp%2BC0Aa%2BtMxFbfa7T0apVHUS2KSquMhMS0LXIwpfZaXOdRubTegTWNKKVeYPjnerOnyOybvqQnyWLhexGnCdspn5r0SiKhlp%2FXJpIBJE6pgvqkGaG1mtpUDLlGpaipyNDxnw%2BKf2DHkJmB%2B%2F8guU6Eb66yH&X-Amz-Signature=7ea0bb6956b6fb0c1c11e5e2d1215ffdd26843e809ae2b43b201430cc61063ab&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TGJRKOV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2uK7shr0TiDFKClb%2FL9%2BSfceAWPctBKlqmSzlgGztQwIhAM0p05pvJJti9dXWt9SV1RHLVCMiEkOAfZ8XXb%2BahvMWKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD3a5WXcHNyIIzs3kq3APBMEGYJn%2FhixWPl%2FPX2ls8SJ1NDVUrkv9rLapAWgAO27pb7oRVqfUovhtgpSGqWyRNytwzmibKq9o%2Fyb7qn%2BfrBn1mvLjnxfKKlWF9H2tdGW0v6sOvpVIjeXiF1b73IrveeZZzTAH82MwqYeWo0nVeb743uRNnXWgl%2BceMlqCtsSmTUxsz9R1o8h5coYiP2GTXDkKqwQDVTm%2FgyQ%2BipjF2qlzHx1jMDDlU5Pr%2BCdGmmngK1FAXg5cIM%2BTTouoS%2FPbkS6EOxkb%2BwujqBJtAlFn4dzHm9SNHsBt3wtkUPaNEPWMSu7xlhSXeZI2lK7RvUmULzmKGDia%2BIIKgQrsLIaATMNgnbxmsWe2jxSmzFZRnlSr8P7X6ZW9NAq%2FT0d9cHJB9tVT2OJsrqhDQqNzQ99ZKB25IPzzS1%2FemjVc5PX%2FD3mUzvTiuMcodhm201TrKBzuANpHBZVpFz5f68t9Rh05oTEABgmQ6pZgmNSqH2csrOGm4oeHd5jre%2FrrY7y%2B99VLQwY9AklvG7z%2FmsNSpqpY3aqEWJkEi846djRkINAHbuzQ2gm5SZctDCN9OTUH73GVBN1ftw2GN6jJamTZ3dSSb%2BIpaGapCx3xv99YNhzxsyjpMeVivzcnNa8202zD%2F6s6%2BBjqkARWUySTnr6BPF4JFWH6UyK%2Fo78DZ7PumqcCHSoESxo2a6oooQQkMdcQUPC2FZEt5scp%2BC0Aa%2BtMxFbfa7T0apVHUS2KSquMhMS0LXIwpfZaXOdRubTegTWNKKVeYPjnerOnyOybvqQnyWLhexGnCdspn5r0SiKhlp%2FXJpIBJE6pgvqkGaG1mtpUDLlGpaipyNDxnw%2BKf2DHkJmB%2B%2F8guU6Eb66yH&X-Amz-Signature=2a9d04bc6e62337ccde4575390a3f86610ee54c56f3efb765f7aee67b8fe963c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TGJRKOV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2uK7shr0TiDFKClb%2FL9%2BSfceAWPctBKlqmSzlgGztQwIhAM0p05pvJJti9dXWt9SV1RHLVCMiEkOAfZ8XXb%2BahvMWKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD3a5WXcHNyIIzs3kq3APBMEGYJn%2FhixWPl%2FPX2ls8SJ1NDVUrkv9rLapAWgAO27pb7oRVqfUovhtgpSGqWyRNytwzmibKq9o%2Fyb7qn%2BfrBn1mvLjnxfKKlWF9H2tdGW0v6sOvpVIjeXiF1b73IrveeZZzTAH82MwqYeWo0nVeb743uRNnXWgl%2BceMlqCtsSmTUxsz9R1o8h5coYiP2GTXDkKqwQDVTm%2FgyQ%2BipjF2qlzHx1jMDDlU5Pr%2BCdGmmngK1FAXg5cIM%2BTTouoS%2FPbkS6EOxkb%2BwujqBJtAlFn4dzHm9SNHsBt3wtkUPaNEPWMSu7xlhSXeZI2lK7RvUmULzmKGDia%2BIIKgQrsLIaATMNgnbxmsWe2jxSmzFZRnlSr8P7X6ZW9NAq%2FT0d9cHJB9tVT2OJsrqhDQqNzQ99ZKB25IPzzS1%2FemjVc5PX%2FD3mUzvTiuMcodhm201TrKBzuANpHBZVpFz5f68t9Rh05oTEABgmQ6pZgmNSqH2csrOGm4oeHd5jre%2FrrY7y%2B99VLQwY9AklvG7z%2FmsNSpqpY3aqEWJkEi846djRkINAHbuzQ2gm5SZctDCN9OTUH73GVBN1ftw2GN6jJamTZ3dSSb%2BIpaGapCx3xv99YNhzxsyjpMeVivzcnNa8202zD%2F6s6%2BBjqkARWUySTnr6BPF4JFWH6UyK%2Fo78DZ7PumqcCHSoESxo2a6oooQQkMdcQUPC2FZEt5scp%2BC0Aa%2BtMxFbfa7T0apVHUS2KSquMhMS0LXIwpfZaXOdRubTegTWNKKVeYPjnerOnyOybvqQnyWLhexGnCdspn5r0SiKhlp%2FXJpIBJE6pgvqkGaG1mtpUDLlGpaipyNDxnw%2BKf2DHkJmB%2B%2F8guU6Eb66yH&X-Amz-Signature=45d131bb1c23fc3250e4a2015bfff8745b6c746069a5fa78a1931db55f60a95d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TGJRKOV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2uK7shr0TiDFKClb%2FL9%2BSfceAWPctBKlqmSzlgGztQwIhAM0p05pvJJti9dXWt9SV1RHLVCMiEkOAfZ8XXb%2BahvMWKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD3a5WXcHNyIIzs3kq3APBMEGYJn%2FhixWPl%2FPX2ls8SJ1NDVUrkv9rLapAWgAO27pb7oRVqfUovhtgpSGqWyRNytwzmibKq9o%2Fyb7qn%2BfrBn1mvLjnxfKKlWF9H2tdGW0v6sOvpVIjeXiF1b73IrveeZZzTAH82MwqYeWo0nVeb743uRNnXWgl%2BceMlqCtsSmTUxsz9R1o8h5coYiP2GTXDkKqwQDVTm%2FgyQ%2BipjF2qlzHx1jMDDlU5Pr%2BCdGmmngK1FAXg5cIM%2BTTouoS%2FPbkS6EOxkb%2BwujqBJtAlFn4dzHm9SNHsBt3wtkUPaNEPWMSu7xlhSXeZI2lK7RvUmULzmKGDia%2BIIKgQrsLIaATMNgnbxmsWe2jxSmzFZRnlSr8P7X6ZW9NAq%2FT0d9cHJB9tVT2OJsrqhDQqNzQ99ZKB25IPzzS1%2FemjVc5PX%2FD3mUzvTiuMcodhm201TrKBzuANpHBZVpFz5f68t9Rh05oTEABgmQ6pZgmNSqH2csrOGm4oeHd5jre%2FrrY7y%2B99VLQwY9AklvG7z%2FmsNSpqpY3aqEWJkEi846djRkINAHbuzQ2gm5SZctDCN9OTUH73GVBN1ftw2GN6jJamTZ3dSSb%2BIpaGapCx3xv99YNhzxsyjpMeVivzcnNa8202zD%2F6s6%2BBjqkARWUySTnr6BPF4JFWH6UyK%2Fo78DZ7PumqcCHSoESxo2a6oooQQkMdcQUPC2FZEt5scp%2BC0Aa%2BtMxFbfa7T0apVHUS2KSquMhMS0LXIwpfZaXOdRubTegTWNKKVeYPjnerOnyOybvqQnyWLhexGnCdspn5r0SiKhlp%2FXJpIBJE6pgvqkGaG1mtpUDLlGpaipyNDxnw%2BKf2DHkJmB%2B%2F8guU6Eb66yH&X-Amz-Signature=53e32b67f30e2a86b35076c5fbdd423ae891f9c17bcf63cb9d523b3c0bf1b4e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TGJRKOV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2uK7shr0TiDFKClb%2FL9%2BSfceAWPctBKlqmSzlgGztQwIhAM0p05pvJJti9dXWt9SV1RHLVCMiEkOAfZ8XXb%2BahvMWKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD3a5WXcHNyIIzs3kq3APBMEGYJn%2FhixWPl%2FPX2ls8SJ1NDVUrkv9rLapAWgAO27pb7oRVqfUovhtgpSGqWyRNytwzmibKq9o%2Fyb7qn%2BfrBn1mvLjnxfKKlWF9H2tdGW0v6sOvpVIjeXiF1b73IrveeZZzTAH82MwqYeWo0nVeb743uRNnXWgl%2BceMlqCtsSmTUxsz9R1o8h5coYiP2GTXDkKqwQDVTm%2FgyQ%2BipjF2qlzHx1jMDDlU5Pr%2BCdGmmngK1FAXg5cIM%2BTTouoS%2FPbkS6EOxkb%2BwujqBJtAlFn4dzHm9SNHsBt3wtkUPaNEPWMSu7xlhSXeZI2lK7RvUmULzmKGDia%2BIIKgQrsLIaATMNgnbxmsWe2jxSmzFZRnlSr8P7X6ZW9NAq%2FT0d9cHJB9tVT2OJsrqhDQqNzQ99ZKB25IPzzS1%2FemjVc5PX%2FD3mUzvTiuMcodhm201TrKBzuANpHBZVpFz5f68t9Rh05oTEABgmQ6pZgmNSqH2csrOGm4oeHd5jre%2FrrY7y%2B99VLQwY9AklvG7z%2FmsNSpqpY3aqEWJkEi846djRkINAHbuzQ2gm5SZctDCN9OTUH73GVBN1ftw2GN6jJamTZ3dSSb%2BIpaGapCx3xv99YNhzxsyjpMeVivzcnNa8202zD%2F6s6%2BBjqkARWUySTnr6BPF4JFWH6UyK%2Fo78DZ7PumqcCHSoESxo2a6oooQQkMdcQUPC2FZEt5scp%2BC0Aa%2BtMxFbfa7T0apVHUS2KSquMhMS0LXIwpfZaXOdRubTegTWNKKVeYPjnerOnyOybvqQnyWLhexGnCdspn5r0SiKhlp%2FXJpIBJE6pgvqkGaG1mtpUDLlGpaipyNDxnw%2BKf2DHkJmB%2B%2F8guU6Eb66yH&X-Amz-Signature=daaeaed617bffba2bae17739311396ba9632ad26fbf9cb76d83e51aaad4cf48a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TGJRKOV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2uK7shr0TiDFKClb%2FL9%2BSfceAWPctBKlqmSzlgGztQwIhAM0p05pvJJti9dXWt9SV1RHLVCMiEkOAfZ8XXb%2BahvMWKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD3a5WXcHNyIIzs3kq3APBMEGYJn%2FhixWPl%2FPX2ls8SJ1NDVUrkv9rLapAWgAO27pb7oRVqfUovhtgpSGqWyRNytwzmibKq9o%2Fyb7qn%2BfrBn1mvLjnxfKKlWF9H2tdGW0v6sOvpVIjeXiF1b73IrveeZZzTAH82MwqYeWo0nVeb743uRNnXWgl%2BceMlqCtsSmTUxsz9R1o8h5coYiP2GTXDkKqwQDVTm%2FgyQ%2BipjF2qlzHx1jMDDlU5Pr%2BCdGmmngK1FAXg5cIM%2BTTouoS%2FPbkS6EOxkb%2BwujqBJtAlFn4dzHm9SNHsBt3wtkUPaNEPWMSu7xlhSXeZI2lK7RvUmULzmKGDia%2BIIKgQrsLIaATMNgnbxmsWe2jxSmzFZRnlSr8P7X6ZW9NAq%2FT0d9cHJB9tVT2OJsrqhDQqNzQ99ZKB25IPzzS1%2FemjVc5PX%2FD3mUzvTiuMcodhm201TrKBzuANpHBZVpFz5f68t9Rh05oTEABgmQ6pZgmNSqH2csrOGm4oeHd5jre%2FrrY7y%2B99VLQwY9AklvG7z%2FmsNSpqpY3aqEWJkEi846djRkINAHbuzQ2gm5SZctDCN9OTUH73GVBN1ftw2GN6jJamTZ3dSSb%2BIpaGapCx3xv99YNhzxsyjpMeVivzcnNa8202zD%2F6s6%2BBjqkARWUySTnr6BPF4JFWH6UyK%2Fo78DZ7PumqcCHSoESxo2a6oooQQkMdcQUPC2FZEt5scp%2BC0Aa%2BtMxFbfa7T0apVHUS2KSquMhMS0LXIwpfZaXOdRubTegTWNKKVeYPjnerOnyOybvqQnyWLhexGnCdspn5r0SiKhlp%2FXJpIBJE6pgvqkGaG1mtpUDLlGpaipyNDxnw%2BKf2DHkJmB%2B%2F8guU6Eb66yH&X-Amz-Signature=7f186815d15ac7007dba3f611cf8cfa4f0f6392222136aa96cdf7e56103001b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TGJRKOV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2uK7shr0TiDFKClb%2FL9%2BSfceAWPctBKlqmSzlgGztQwIhAM0p05pvJJti9dXWt9SV1RHLVCMiEkOAfZ8XXb%2BahvMWKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD3a5WXcHNyIIzs3kq3APBMEGYJn%2FhixWPl%2FPX2ls8SJ1NDVUrkv9rLapAWgAO27pb7oRVqfUovhtgpSGqWyRNytwzmibKq9o%2Fyb7qn%2BfrBn1mvLjnxfKKlWF9H2tdGW0v6sOvpVIjeXiF1b73IrveeZZzTAH82MwqYeWo0nVeb743uRNnXWgl%2BceMlqCtsSmTUxsz9R1o8h5coYiP2GTXDkKqwQDVTm%2FgyQ%2BipjF2qlzHx1jMDDlU5Pr%2BCdGmmngK1FAXg5cIM%2BTTouoS%2FPbkS6EOxkb%2BwujqBJtAlFn4dzHm9SNHsBt3wtkUPaNEPWMSu7xlhSXeZI2lK7RvUmULzmKGDia%2BIIKgQrsLIaATMNgnbxmsWe2jxSmzFZRnlSr8P7X6ZW9NAq%2FT0d9cHJB9tVT2OJsrqhDQqNzQ99ZKB25IPzzS1%2FemjVc5PX%2FD3mUzvTiuMcodhm201TrKBzuANpHBZVpFz5f68t9Rh05oTEABgmQ6pZgmNSqH2csrOGm4oeHd5jre%2FrrY7y%2B99VLQwY9AklvG7z%2FmsNSpqpY3aqEWJkEi846djRkINAHbuzQ2gm5SZctDCN9OTUH73GVBN1ftw2GN6jJamTZ3dSSb%2BIpaGapCx3xv99YNhzxsyjpMeVivzcnNa8202zD%2F6s6%2BBjqkARWUySTnr6BPF4JFWH6UyK%2Fo78DZ7PumqcCHSoESxo2a6oooQQkMdcQUPC2FZEt5scp%2BC0Aa%2BtMxFbfa7T0apVHUS2KSquMhMS0LXIwpfZaXOdRubTegTWNKKVeYPjnerOnyOybvqQnyWLhexGnCdspn5r0SiKhlp%2FXJpIBJE6pgvqkGaG1mtpUDLlGpaipyNDxnw%2BKf2DHkJmB%2B%2F8guU6Eb66yH&X-Amz-Signature=735d1e7d6084a109625ca2d26a44cafc3791ef4ecc6472f25929b1a262a05a99&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
