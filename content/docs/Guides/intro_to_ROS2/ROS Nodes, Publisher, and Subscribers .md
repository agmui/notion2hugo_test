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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR222TJ2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVEKFV3gA5dYC92Jq1N%2B0mYk9lEOCv%2BjZsmu7w8uqEpgIhAPmv7AS5zjAIUusxy%2Fbu%2B%2FcKiPLcCJlGnahYdnKKufR7Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxlMw7%2F0koyH3mQBk0q3APwqtFIECltaCqi6dk6gf2o077XXk9Ql%2B5Q564bD4eSkxo%2F8HKEFdtcZ4DShnGqPfxjAX7fnlrbCnfwIvqwB43IfMcMSnjwAk7z6JNS27PEK3gDvQsK9YpNpyNpRk9r%2FW5jvfUZlwupWiYI%2F%2Fhct8dgXsZAemBKIrlrJXCV6GFI5ATmCkst2OvWhqqrfMAxvDLoWKBtI2s5HPfWBgsfRajCaZFv8RAkc99xuYvF0nrDDIyTtWXh48tJYDJKTg2nHdysK7Bb6gyx3u9fLOdJ5%2FjfVyexjo0xRYGOhTgOi8puY9VaLaf097yNkjI0k4lRpe7Es0tCT22klhJxymFXOB5v%2Bzjs5wTbSV%2BajeUrpC435wyS6CVXJefziy2tWHA5xnKef3MbKQczBGN2yl1maAeHCfUhON3Ls3tAxtqdox%2BAJU4DLTBtwCWTK48bO2P%2Ff6uI4h5vVGbqVD7Hf%2BsENCDbHTwqK2a%2BtVT32V86dZv5JpvVPiB5ukhzu4mT7v2xMXDscbVJDqPgUyx23GAEufrRY%2FIRiaUYaqiA6HZuNlrUHoHjQW%2BE4RsvXclIPT601Mzd22YqaGM%2Fdul93NloGwuCefR%2BpGkTkSXushz%2B84%2BJe4V226PDAaxYqwQjJDCd8ObABjqkASgmTRdPn7uKWllY08DeDQ6hSPpIAmtsfQVrhmaHjwfX3Fv%2BP%2BVLZReJ4k3zRcczRegKci7PuJSVIu2yWfvRoYhx9A2Tyi0qFfLJxD8frAYq2ZS2vv7AbQ4l0JidUlDrisZrMB1744H6SrkPJ6cwjfvKcvoPuNsBOJ%2BF13PUOkeKN4Hjo%2FD13IbqhCD3ZT1ior8kve3TpH%2FBVP9qKf%2B0ztBRwzJT&X-Amz-Signature=0670b0c1699b2dab65bacf6207d4144208e54b3d469a795d8e7ffd46a9c6cd54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR222TJ2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVEKFV3gA5dYC92Jq1N%2B0mYk9lEOCv%2BjZsmu7w8uqEpgIhAPmv7AS5zjAIUusxy%2Fbu%2B%2FcKiPLcCJlGnahYdnKKufR7Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxlMw7%2F0koyH3mQBk0q3APwqtFIECltaCqi6dk6gf2o077XXk9Ql%2B5Q564bD4eSkxo%2F8HKEFdtcZ4DShnGqPfxjAX7fnlrbCnfwIvqwB43IfMcMSnjwAk7z6JNS27PEK3gDvQsK9YpNpyNpRk9r%2FW5jvfUZlwupWiYI%2F%2Fhct8dgXsZAemBKIrlrJXCV6GFI5ATmCkst2OvWhqqrfMAxvDLoWKBtI2s5HPfWBgsfRajCaZFv8RAkc99xuYvF0nrDDIyTtWXh48tJYDJKTg2nHdysK7Bb6gyx3u9fLOdJ5%2FjfVyexjo0xRYGOhTgOi8puY9VaLaf097yNkjI0k4lRpe7Es0tCT22klhJxymFXOB5v%2Bzjs5wTbSV%2BajeUrpC435wyS6CVXJefziy2tWHA5xnKef3MbKQczBGN2yl1maAeHCfUhON3Ls3tAxtqdox%2BAJU4DLTBtwCWTK48bO2P%2Ff6uI4h5vVGbqVD7Hf%2BsENCDbHTwqK2a%2BtVT32V86dZv5JpvVPiB5ukhzu4mT7v2xMXDscbVJDqPgUyx23GAEufrRY%2FIRiaUYaqiA6HZuNlrUHoHjQW%2BE4RsvXclIPT601Mzd22YqaGM%2Fdul93NloGwuCefR%2BpGkTkSXushz%2B84%2BJe4V226PDAaxYqwQjJDCd8ObABjqkASgmTRdPn7uKWllY08DeDQ6hSPpIAmtsfQVrhmaHjwfX3Fv%2BP%2BVLZReJ4k3zRcczRegKci7PuJSVIu2yWfvRoYhx9A2Tyi0qFfLJxD8frAYq2ZS2vv7AbQ4l0JidUlDrisZrMB1744H6SrkPJ6cwjfvKcvoPuNsBOJ%2BF13PUOkeKN4Hjo%2FD13IbqhCD3ZT1ior8kve3TpH%2FBVP9qKf%2B0ztBRwzJT&X-Amz-Signature=20fdc885e121db2cd6d2ca70c9c324928b98576ff8327bed44609c8ebc7f5a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR222TJ2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVEKFV3gA5dYC92Jq1N%2B0mYk9lEOCv%2BjZsmu7w8uqEpgIhAPmv7AS5zjAIUusxy%2Fbu%2B%2FcKiPLcCJlGnahYdnKKufR7Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxlMw7%2F0koyH3mQBk0q3APwqtFIECltaCqi6dk6gf2o077XXk9Ql%2B5Q564bD4eSkxo%2F8HKEFdtcZ4DShnGqPfxjAX7fnlrbCnfwIvqwB43IfMcMSnjwAk7z6JNS27PEK3gDvQsK9YpNpyNpRk9r%2FW5jvfUZlwupWiYI%2F%2Fhct8dgXsZAemBKIrlrJXCV6GFI5ATmCkst2OvWhqqrfMAxvDLoWKBtI2s5HPfWBgsfRajCaZFv8RAkc99xuYvF0nrDDIyTtWXh48tJYDJKTg2nHdysK7Bb6gyx3u9fLOdJ5%2FjfVyexjo0xRYGOhTgOi8puY9VaLaf097yNkjI0k4lRpe7Es0tCT22klhJxymFXOB5v%2Bzjs5wTbSV%2BajeUrpC435wyS6CVXJefziy2tWHA5xnKef3MbKQczBGN2yl1maAeHCfUhON3Ls3tAxtqdox%2BAJU4DLTBtwCWTK48bO2P%2Ff6uI4h5vVGbqVD7Hf%2BsENCDbHTwqK2a%2BtVT32V86dZv5JpvVPiB5ukhzu4mT7v2xMXDscbVJDqPgUyx23GAEufrRY%2FIRiaUYaqiA6HZuNlrUHoHjQW%2BE4RsvXclIPT601Mzd22YqaGM%2Fdul93NloGwuCefR%2BpGkTkSXushz%2B84%2BJe4V226PDAaxYqwQjJDCd8ObABjqkASgmTRdPn7uKWllY08DeDQ6hSPpIAmtsfQVrhmaHjwfX3Fv%2BP%2BVLZReJ4k3zRcczRegKci7PuJSVIu2yWfvRoYhx9A2Tyi0qFfLJxD8frAYq2ZS2vv7AbQ4l0JidUlDrisZrMB1744H6SrkPJ6cwjfvKcvoPuNsBOJ%2BF13PUOkeKN4Hjo%2FD13IbqhCD3ZT1ior8kve3TpH%2FBVP9qKf%2B0ztBRwzJT&X-Amz-Signature=30812ef5a64118fa2a8f706792307e493a60382e8a6e7deaf60e6820eb4c00dc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR222TJ2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVEKFV3gA5dYC92Jq1N%2B0mYk9lEOCv%2BjZsmu7w8uqEpgIhAPmv7AS5zjAIUusxy%2Fbu%2B%2FcKiPLcCJlGnahYdnKKufR7Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxlMw7%2F0koyH3mQBk0q3APwqtFIECltaCqi6dk6gf2o077XXk9Ql%2B5Q564bD4eSkxo%2F8HKEFdtcZ4DShnGqPfxjAX7fnlrbCnfwIvqwB43IfMcMSnjwAk7z6JNS27PEK3gDvQsK9YpNpyNpRk9r%2FW5jvfUZlwupWiYI%2F%2Fhct8dgXsZAemBKIrlrJXCV6GFI5ATmCkst2OvWhqqrfMAxvDLoWKBtI2s5HPfWBgsfRajCaZFv8RAkc99xuYvF0nrDDIyTtWXh48tJYDJKTg2nHdysK7Bb6gyx3u9fLOdJ5%2FjfVyexjo0xRYGOhTgOi8puY9VaLaf097yNkjI0k4lRpe7Es0tCT22klhJxymFXOB5v%2Bzjs5wTbSV%2BajeUrpC435wyS6CVXJefziy2tWHA5xnKef3MbKQczBGN2yl1maAeHCfUhON3Ls3tAxtqdox%2BAJU4DLTBtwCWTK48bO2P%2Ff6uI4h5vVGbqVD7Hf%2BsENCDbHTwqK2a%2BtVT32V86dZv5JpvVPiB5ukhzu4mT7v2xMXDscbVJDqPgUyx23GAEufrRY%2FIRiaUYaqiA6HZuNlrUHoHjQW%2BE4RsvXclIPT601Mzd22YqaGM%2Fdul93NloGwuCefR%2BpGkTkSXushz%2B84%2BJe4V226PDAaxYqwQjJDCd8ObABjqkASgmTRdPn7uKWllY08DeDQ6hSPpIAmtsfQVrhmaHjwfX3Fv%2BP%2BVLZReJ4k3zRcczRegKci7PuJSVIu2yWfvRoYhx9A2Tyi0qFfLJxD8frAYq2ZS2vv7AbQ4l0JidUlDrisZrMB1744H6SrkPJ6cwjfvKcvoPuNsBOJ%2BF13PUOkeKN4Hjo%2FD13IbqhCD3ZT1ior8kve3TpH%2FBVP9qKf%2B0ztBRwzJT&X-Amz-Signature=9a05c67c0d0cf510bbfbb483203d4c9cb945d066e685993ae11e3c8564157c92&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR222TJ2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVEKFV3gA5dYC92Jq1N%2B0mYk9lEOCv%2BjZsmu7w8uqEpgIhAPmv7AS5zjAIUusxy%2Fbu%2B%2FcKiPLcCJlGnahYdnKKufR7Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxlMw7%2F0koyH3mQBk0q3APwqtFIECltaCqi6dk6gf2o077XXk9Ql%2B5Q564bD4eSkxo%2F8HKEFdtcZ4DShnGqPfxjAX7fnlrbCnfwIvqwB43IfMcMSnjwAk7z6JNS27PEK3gDvQsK9YpNpyNpRk9r%2FW5jvfUZlwupWiYI%2F%2Fhct8dgXsZAemBKIrlrJXCV6GFI5ATmCkst2OvWhqqrfMAxvDLoWKBtI2s5HPfWBgsfRajCaZFv8RAkc99xuYvF0nrDDIyTtWXh48tJYDJKTg2nHdysK7Bb6gyx3u9fLOdJ5%2FjfVyexjo0xRYGOhTgOi8puY9VaLaf097yNkjI0k4lRpe7Es0tCT22klhJxymFXOB5v%2Bzjs5wTbSV%2BajeUrpC435wyS6CVXJefziy2tWHA5xnKef3MbKQczBGN2yl1maAeHCfUhON3Ls3tAxtqdox%2BAJU4DLTBtwCWTK48bO2P%2Ff6uI4h5vVGbqVD7Hf%2BsENCDbHTwqK2a%2BtVT32V86dZv5JpvVPiB5ukhzu4mT7v2xMXDscbVJDqPgUyx23GAEufrRY%2FIRiaUYaqiA6HZuNlrUHoHjQW%2BE4RsvXclIPT601Mzd22YqaGM%2Fdul93NloGwuCefR%2BpGkTkSXushz%2B84%2BJe4V226PDAaxYqwQjJDCd8ObABjqkASgmTRdPn7uKWllY08DeDQ6hSPpIAmtsfQVrhmaHjwfX3Fv%2BP%2BVLZReJ4k3zRcczRegKci7PuJSVIu2yWfvRoYhx9A2Tyi0qFfLJxD8frAYq2ZS2vv7AbQ4l0JidUlDrisZrMB1744H6SrkPJ6cwjfvKcvoPuNsBOJ%2BF13PUOkeKN4Hjo%2FD13IbqhCD3ZT1ior8kve3TpH%2FBVP9qKf%2B0ztBRwzJT&X-Amz-Signature=e4b5e266bd7d34f8d15c1605efa837130f6b614076ddb0080db885aac2b1049c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR222TJ2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVEKFV3gA5dYC92Jq1N%2B0mYk9lEOCv%2BjZsmu7w8uqEpgIhAPmv7AS5zjAIUusxy%2Fbu%2B%2FcKiPLcCJlGnahYdnKKufR7Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxlMw7%2F0koyH3mQBk0q3APwqtFIECltaCqi6dk6gf2o077XXk9Ql%2B5Q564bD4eSkxo%2F8HKEFdtcZ4DShnGqPfxjAX7fnlrbCnfwIvqwB43IfMcMSnjwAk7z6JNS27PEK3gDvQsK9YpNpyNpRk9r%2FW5jvfUZlwupWiYI%2F%2Fhct8dgXsZAemBKIrlrJXCV6GFI5ATmCkst2OvWhqqrfMAxvDLoWKBtI2s5HPfWBgsfRajCaZFv8RAkc99xuYvF0nrDDIyTtWXh48tJYDJKTg2nHdysK7Bb6gyx3u9fLOdJ5%2FjfVyexjo0xRYGOhTgOi8puY9VaLaf097yNkjI0k4lRpe7Es0tCT22klhJxymFXOB5v%2Bzjs5wTbSV%2BajeUrpC435wyS6CVXJefziy2tWHA5xnKef3MbKQczBGN2yl1maAeHCfUhON3Ls3tAxtqdox%2BAJU4DLTBtwCWTK48bO2P%2Ff6uI4h5vVGbqVD7Hf%2BsENCDbHTwqK2a%2BtVT32V86dZv5JpvVPiB5ukhzu4mT7v2xMXDscbVJDqPgUyx23GAEufrRY%2FIRiaUYaqiA6HZuNlrUHoHjQW%2BE4RsvXclIPT601Mzd22YqaGM%2Fdul93NloGwuCefR%2BpGkTkSXushz%2B84%2BJe4V226PDAaxYqwQjJDCd8ObABjqkASgmTRdPn7uKWllY08DeDQ6hSPpIAmtsfQVrhmaHjwfX3Fv%2BP%2BVLZReJ4k3zRcczRegKci7PuJSVIu2yWfvRoYhx9A2Tyi0qFfLJxD8frAYq2ZS2vv7AbQ4l0JidUlDrisZrMB1744H6SrkPJ6cwjfvKcvoPuNsBOJ%2BF13PUOkeKN4Hjo%2FD13IbqhCD3ZT1ior8kve3TpH%2FBVP9qKf%2B0ztBRwzJT&X-Amz-Signature=760360eee17a464b5c2f767f15c604551b447ae276999e4f2228acab81393b09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR222TJ2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVEKFV3gA5dYC92Jq1N%2B0mYk9lEOCv%2BjZsmu7w8uqEpgIhAPmv7AS5zjAIUusxy%2Fbu%2B%2FcKiPLcCJlGnahYdnKKufR7Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxlMw7%2F0koyH3mQBk0q3APwqtFIECltaCqi6dk6gf2o077XXk9Ql%2B5Q564bD4eSkxo%2F8HKEFdtcZ4DShnGqPfxjAX7fnlrbCnfwIvqwB43IfMcMSnjwAk7z6JNS27PEK3gDvQsK9YpNpyNpRk9r%2FW5jvfUZlwupWiYI%2F%2Fhct8dgXsZAemBKIrlrJXCV6GFI5ATmCkst2OvWhqqrfMAxvDLoWKBtI2s5HPfWBgsfRajCaZFv8RAkc99xuYvF0nrDDIyTtWXh48tJYDJKTg2nHdysK7Bb6gyx3u9fLOdJ5%2FjfVyexjo0xRYGOhTgOi8puY9VaLaf097yNkjI0k4lRpe7Es0tCT22klhJxymFXOB5v%2Bzjs5wTbSV%2BajeUrpC435wyS6CVXJefziy2tWHA5xnKef3MbKQczBGN2yl1maAeHCfUhON3Ls3tAxtqdox%2BAJU4DLTBtwCWTK48bO2P%2Ff6uI4h5vVGbqVD7Hf%2BsENCDbHTwqK2a%2BtVT32V86dZv5JpvVPiB5ukhzu4mT7v2xMXDscbVJDqPgUyx23GAEufrRY%2FIRiaUYaqiA6HZuNlrUHoHjQW%2BE4RsvXclIPT601Mzd22YqaGM%2Fdul93NloGwuCefR%2BpGkTkSXushz%2B84%2BJe4V226PDAaxYqwQjJDCd8ObABjqkASgmTRdPn7uKWllY08DeDQ6hSPpIAmtsfQVrhmaHjwfX3Fv%2BP%2BVLZReJ4k3zRcczRegKci7PuJSVIu2yWfvRoYhx9A2Tyi0qFfLJxD8frAYq2ZS2vv7AbQ4l0JidUlDrisZrMB1744H6SrkPJ6cwjfvKcvoPuNsBOJ%2BF13PUOkeKN4Hjo%2FD13IbqhCD3ZT1ior8kve3TpH%2FBVP9qKf%2B0ztBRwzJT&X-Amz-Signature=22c6e45ba5e5555824a4a5ff58829394f30948017787095c1a212ae39b5cad60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR222TJ2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVEKFV3gA5dYC92Jq1N%2B0mYk9lEOCv%2BjZsmu7w8uqEpgIhAPmv7AS5zjAIUusxy%2Fbu%2B%2FcKiPLcCJlGnahYdnKKufR7Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxlMw7%2F0koyH3mQBk0q3APwqtFIECltaCqi6dk6gf2o077XXk9Ql%2B5Q564bD4eSkxo%2F8HKEFdtcZ4DShnGqPfxjAX7fnlrbCnfwIvqwB43IfMcMSnjwAk7z6JNS27PEK3gDvQsK9YpNpyNpRk9r%2FW5jvfUZlwupWiYI%2F%2Fhct8dgXsZAemBKIrlrJXCV6GFI5ATmCkst2OvWhqqrfMAxvDLoWKBtI2s5HPfWBgsfRajCaZFv8RAkc99xuYvF0nrDDIyTtWXh48tJYDJKTg2nHdysK7Bb6gyx3u9fLOdJ5%2FjfVyexjo0xRYGOhTgOi8puY9VaLaf097yNkjI0k4lRpe7Es0tCT22klhJxymFXOB5v%2Bzjs5wTbSV%2BajeUrpC435wyS6CVXJefziy2tWHA5xnKef3MbKQczBGN2yl1maAeHCfUhON3Ls3tAxtqdox%2BAJU4DLTBtwCWTK48bO2P%2Ff6uI4h5vVGbqVD7Hf%2BsENCDbHTwqK2a%2BtVT32V86dZv5JpvVPiB5ukhzu4mT7v2xMXDscbVJDqPgUyx23GAEufrRY%2FIRiaUYaqiA6HZuNlrUHoHjQW%2BE4RsvXclIPT601Mzd22YqaGM%2Fdul93NloGwuCefR%2BpGkTkSXushz%2B84%2BJe4V226PDAaxYqwQjJDCd8ObABjqkASgmTRdPn7uKWllY08DeDQ6hSPpIAmtsfQVrhmaHjwfX3Fv%2BP%2BVLZReJ4k3zRcczRegKci7PuJSVIu2yWfvRoYhx9A2Tyi0qFfLJxD8frAYq2ZS2vv7AbQ4l0JidUlDrisZrMB1744H6SrkPJ6cwjfvKcvoPuNsBOJ%2BF13PUOkeKN4Hjo%2FD13IbqhCD3ZT1ior8kve3TpH%2FBVP9qKf%2B0ztBRwzJT&X-Amz-Signature=aa52e524582f98c02eeed7dabbfc5231f023f0ebf065d000bcb5149dcd704203&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
