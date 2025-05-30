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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662JNQMQ5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BifRCBJYrIoKSzR%2F7%2FiwCYgMCD33DconcLH1I5hQLpAIhAMk4w9R610ArfZxf4Nz3OrIb0dIyq0AT3AE7cuNb5%2BcOKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYsNmx%2BFSu3PmvuV0q3ANlf0Lu2j%2FEX7g%2FK0hKo22p0koGwq3J%2F5rtqu3pImvnoAgf407pI4QeQbKoo1pcT%2FyQte7wloOkiPhl8I5vordZdk2MSivuf%2BQc0O2dlMzb8siAtHINV0sl0f%2FpSaHF%2BiJBd7K3GdsP9mCg2ggOje0%2FmKQyhl9QxReJydP0XEHjlxkkYmBTHgJe9mnjvkEVfLuSPhpgGLPAqOUsG8LJzygUGbYwzElrUDsilboWIiU%2Fu3gNJQ%2FgXzaUnRNVQAuvDuZ5CGnrr7z5xYp4d5FhM54N9jKP0POEftL%2BPw7O7zNuVg9OSYFGLgY%2B9qfNJT5xTwOT4rtrddEwqlM5bW%2BbYDFu7TVEOWpLwXBuTcuT76WPTafFJBeW3hrBYjgHfHgOwRKBRkJp6v0B4dUrPv%2B2CV21RKVvn8MqaJIxW%2FuVTqe0NKunW9MofFovM5ZdEy%2FvDck2%2FoFu%2Fd%2BZxXXVVSjayYBjY%2Be4VaEcQV1Xj1kKfMe28Z5GNQK3jxE8YSbHlIC8uzwcncEggJmSJLjgBRA6WSt29MSaStjVe620Tl%2BAeBTFJLYNEXw5kmgwBJQPpAKrRgpKDvkWpXlck800QI%2FRlnFxY6tGBySnko%2Boy0JgBuzgNl7hNgSCOvK3ooB%2FDjD03OXBBjqkASDMPv7UtY%2BokiGNer%2BBgESLhqruif4sLLK7soM1h1bq%2BXLSeN1%2BuxY0bj0L1TPLfc8KJO1%2F3JJkqgYRKdkoearLp1lqE%2F8sik5ib5LKk4DeorPX8VPcJMCTRt6meSJy%2BpPi7iS6qxgmVBWshebvSojrH1xvOGTZT2jU9r7hUNLazjWLCkoOFMMLmdkjRPx8BErRxHBCrPVYSzdjVGYqd6gdDrkR&X-Amz-Signature=1a1be3726bd4cdc5abe05bb0ce503c33903234e76d2e585a73bc1c19b8082dc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662JNQMQ5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BifRCBJYrIoKSzR%2F7%2FiwCYgMCD33DconcLH1I5hQLpAIhAMk4w9R610ArfZxf4Nz3OrIb0dIyq0AT3AE7cuNb5%2BcOKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYsNmx%2BFSu3PmvuV0q3ANlf0Lu2j%2FEX7g%2FK0hKo22p0koGwq3J%2F5rtqu3pImvnoAgf407pI4QeQbKoo1pcT%2FyQte7wloOkiPhl8I5vordZdk2MSivuf%2BQc0O2dlMzb8siAtHINV0sl0f%2FpSaHF%2BiJBd7K3GdsP9mCg2ggOje0%2FmKQyhl9QxReJydP0XEHjlxkkYmBTHgJe9mnjvkEVfLuSPhpgGLPAqOUsG8LJzygUGbYwzElrUDsilboWIiU%2Fu3gNJQ%2FgXzaUnRNVQAuvDuZ5CGnrr7z5xYp4d5FhM54N9jKP0POEftL%2BPw7O7zNuVg9OSYFGLgY%2B9qfNJT5xTwOT4rtrddEwqlM5bW%2BbYDFu7TVEOWpLwXBuTcuT76WPTafFJBeW3hrBYjgHfHgOwRKBRkJp6v0B4dUrPv%2B2CV21RKVvn8MqaJIxW%2FuVTqe0NKunW9MofFovM5ZdEy%2FvDck2%2FoFu%2Fd%2BZxXXVVSjayYBjY%2Be4VaEcQV1Xj1kKfMe28Z5GNQK3jxE8YSbHlIC8uzwcncEggJmSJLjgBRA6WSt29MSaStjVe620Tl%2BAeBTFJLYNEXw5kmgwBJQPpAKrRgpKDvkWpXlck800QI%2FRlnFxY6tGBySnko%2Boy0JgBuzgNl7hNgSCOvK3ooB%2FDjD03OXBBjqkASDMPv7UtY%2BokiGNer%2BBgESLhqruif4sLLK7soM1h1bq%2BXLSeN1%2BuxY0bj0L1TPLfc8KJO1%2F3JJkqgYRKdkoearLp1lqE%2F8sik5ib5LKk4DeorPX8VPcJMCTRt6meSJy%2BpPi7iS6qxgmVBWshebvSojrH1xvOGTZT2jU9r7hUNLazjWLCkoOFMMLmdkjRPx8BErRxHBCrPVYSzdjVGYqd6gdDrkR&X-Amz-Signature=c4a0f1c372cf02c7ca36ec1d4ef12c8e5e7f7806c328761aab49f152fdb17b78&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662JNQMQ5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BifRCBJYrIoKSzR%2F7%2FiwCYgMCD33DconcLH1I5hQLpAIhAMk4w9R610ArfZxf4Nz3OrIb0dIyq0AT3AE7cuNb5%2BcOKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYsNmx%2BFSu3PmvuV0q3ANlf0Lu2j%2FEX7g%2FK0hKo22p0koGwq3J%2F5rtqu3pImvnoAgf407pI4QeQbKoo1pcT%2FyQte7wloOkiPhl8I5vordZdk2MSivuf%2BQc0O2dlMzb8siAtHINV0sl0f%2FpSaHF%2BiJBd7K3GdsP9mCg2ggOje0%2FmKQyhl9QxReJydP0XEHjlxkkYmBTHgJe9mnjvkEVfLuSPhpgGLPAqOUsG8LJzygUGbYwzElrUDsilboWIiU%2Fu3gNJQ%2FgXzaUnRNVQAuvDuZ5CGnrr7z5xYp4d5FhM54N9jKP0POEftL%2BPw7O7zNuVg9OSYFGLgY%2B9qfNJT5xTwOT4rtrddEwqlM5bW%2BbYDFu7TVEOWpLwXBuTcuT76WPTafFJBeW3hrBYjgHfHgOwRKBRkJp6v0B4dUrPv%2B2CV21RKVvn8MqaJIxW%2FuVTqe0NKunW9MofFovM5ZdEy%2FvDck2%2FoFu%2Fd%2BZxXXVVSjayYBjY%2Be4VaEcQV1Xj1kKfMe28Z5GNQK3jxE8YSbHlIC8uzwcncEggJmSJLjgBRA6WSt29MSaStjVe620Tl%2BAeBTFJLYNEXw5kmgwBJQPpAKrRgpKDvkWpXlck800QI%2FRlnFxY6tGBySnko%2Boy0JgBuzgNl7hNgSCOvK3ooB%2FDjD03OXBBjqkASDMPv7UtY%2BokiGNer%2BBgESLhqruif4sLLK7soM1h1bq%2BXLSeN1%2BuxY0bj0L1TPLfc8KJO1%2F3JJkqgYRKdkoearLp1lqE%2F8sik5ib5LKk4DeorPX8VPcJMCTRt6meSJy%2BpPi7iS6qxgmVBWshebvSojrH1xvOGTZT2jU9r7hUNLazjWLCkoOFMMLmdkjRPx8BErRxHBCrPVYSzdjVGYqd6gdDrkR&X-Amz-Signature=c416f955294df1c36b98a339c2cd08963a21dd3e5c555b9d3a1b8e7b795c9eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662JNQMQ5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BifRCBJYrIoKSzR%2F7%2FiwCYgMCD33DconcLH1I5hQLpAIhAMk4w9R610ArfZxf4Nz3OrIb0dIyq0AT3AE7cuNb5%2BcOKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYsNmx%2BFSu3PmvuV0q3ANlf0Lu2j%2FEX7g%2FK0hKo22p0koGwq3J%2F5rtqu3pImvnoAgf407pI4QeQbKoo1pcT%2FyQte7wloOkiPhl8I5vordZdk2MSivuf%2BQc0O2dlMzb8siAtHINV0sl0f%2FpSaHF%2BiJBd7K3GdsP9mCg2ggOje0%2FmKQyhl9QxReJydP0XEHjlxkkYmBTHgJe9mnjvkEVfLuSPhpgGLPAqOUsG8LJzygUGbYwzElrUDsilboWIiU%2Fu3gNJQ%2FgXzaUnRNVQAuvDuZ5CGnrr7z5xYp4d5FhM54N9jKP0POEftL%2BPw7O7zNuVg9OSYFGLgY%2B9qfNJT5xTwOT4rtrddEwqlM5bW%2BbYDFu7TVEOWpLwXBuTcuT76WPTafFJBeW3hrBYjgHfHgOwRKBRkJp6v0B4dUrPv%2B2CV21RKVvn8MqaJIxW%2FuVTqe0NKunW9MofFovM5ZdEy%2FvDck2%2FoFu%2Fd%2BZxXXVVSjayYBjY%2Be4VaEcQV1Xj1kKfMe28Z5GNQK3jxE8YSbHlIC8uzwcncEggJmSJLjgBRA6WSt29MSaStjVe620Tl%2BAeBTFJLYNEXw5kmgwBJQPpAKrRgpKDvkWpXlck800QI%2FRlnFxY6tGBySnko%2Boy0JgBuzgNl7hNgSCOvK3ooB%2FDjD03OXBBjqkASDMPv7UtY%2BokiGNer%2BBgESLhqruif4sLLK7soM1h1bq%2BXLSeN1%2BuxY0bj0L1TPLfc8KJO1%2F3JJkqgYRKdkoearLp1lqE%2F8sik5ib5LKk4DeorPX8VPcJMCTRt6meSJy%2BpPi7iS6qxgmVBWshebvSojrH1xvOGTZT2jU9r7hUNLazjWLCkoOFMMLmdkjRPx8BErRxHBCrPVYSzdjVGYqd6gdDrkR&X-Amz-Signature=38b54e87a57d5efd6c887e844539811db088ccc33e6b08a6b43c799f544e8b4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662JNQMQ5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BifRCBJYrIoKSzR%2F7%2FiwCYgMCD33DconcLH1I5hQLpAIhAMk4w9R610ArfZxf4Nz3OrIb0dIyq0AT3AE7cuNb5%2BcOKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYsNmx%2BFSu3PmvuV0q3ANlf0Lu2j%2FEX7g%2FK0hKo22p0koGwq3J%2F5rtqu3pImvnoAgf407pI4QeQbKoo1pcT%2FyQte7wloOkiPhl8I5vordZdk2MSivuf%2BQc0O2dlMzb8siAtHINV0sl0f%2FpSaHF%2BiJBd7K3GdsP9mCg2ggOje0%2FmKQyhl9QxReJydP0XEHjlxkkYmBTHgJe9mnjvkEVfLuSPhpgGLPAqOUsG8LJzygUGbYwzElrUDsilboWIiU%2Fu3gNJQ%2FgXzaUnRNVQAuvDuZ5CGnrr7z5xYp4d5FhM54N9jKP0POEftL%2BPw7O7zNuVg9OSYFGLgY%2B9qfNJT5xTwOT4rtrddEwqlM5bW%2BbYDFu7TVEOWpLwXBuTcuT76WPTafFJBeW3hrBYjgHfHgOwRKBRkJp6v0B4dUrPv%2B2CV21RKVvn8MqaJIxW%2FuVTqe0NKunW9MofFovM5ZdEy%2FvDck2%2FoFu%2Fd%2BZxXXVVSjayYBjY%2Be4VaEcQV1Xj1kKfMe28Z5GNQK3jxE8YSbHlIC8uzwcncEggJmSJLjgBRA6WSt29MSaStjVe620Tl%2BAeBTFJLYNEXw5kmgwBJQPpAKrRgpKDvkWpXlck800QI%2FRlnFxY6tGBySnko%2Boy0JgBuzgNl7hNgSCOvK3ooB%2FDjD03OXBBjqkASDMPv7UtY%2BokiGNer%2BBgESLhqruif4sLLK7soM1h1bq%2BXLSeN1%2BuxY0bj0L1TPLfc8KJO1%2F3JJkqgYRKdkoearLp1lqE%2F8sik5ib5LKk4DeorPX8VPcJMCTRt6meSJy%2BpPi7iS6qxgmVBWshebvSojrH1xvOGTZT2jU9r7hUNLazjWLCkoOFMMLmdkjRPx8BErRxHBCrPVYSzdjVGYqd6gdDrkR&X-Amz-Signature=64246dc0fcbc2260bd27ca3b4adeb522ca04982008ccb78999fca633849bab91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662JNQMQ5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BifRCBJYrIoKSzR%2F7%2FiwCYgMCD33DconcLH1I5hQLpAIhAMk4w9R610ArfZxf4Nz3OrIb0dIyq0AT3AE7cuNb5%2BcOKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYsNmx%2BFSu3PmvuV0q3ANlf0Lu2j%2FEX7g%2FK0hKo22p0koGwq3J%2F5rtqu3pImvnoAgf407pI4QeQbKoo1pcT%2FyQte7wloOkiPhl8I5vordZdk2MSivuf%2BQc0O2dlMzb8siAtHINV0sl0f%2FpSaHF%2BiJBd7K3GdsP9mCg2ggOje0%2FmKQyhl9QxReJydP0XEHjlxkkYmBTHgJe9mnjvkEVfLuSPhpgGLPAqOUsG8LJzygUGbYwzElrUDsilboWIiU%2Fu3gNJQ%2FgXzaUnRNVQAuvDuZ5CGnrr7z5xYp4d5FhM54N9jKP0POEftL%2BPw7O7zNuVg9OSYFGLgY%2B9qfNJT5xTwOT4rtrddEwqlM5bW%2BbYDFu7TVEOWpLwXBuTcuT76WPTafFJBeW3hrBYjgHfHgOwRKBRkJp6v0B4dUrPv%2B2CV21RKVvn8MqaJIxW%2FuVTqe0NKunW9MofFovM5ZdEy%2FvDck2%2FoFu%2Fd%2BZxXXVVSjayYBjY%2Be4VaEcQV1Xj1kKfMe28Z5GNQK3jxE8YSbHlIC8uzwcncEggJmSJLjgBRA6WSt29MSaStjVe620Tl%2BAeBTFJLYNEXw5kmgwBJQPpAKrRgpKDvkWpXlck800QI%2FRlnFxY6tGBySnko%2Boy0JgBuzgNl7hNgSCOvK3ooB%2FDjD03OXBBjqkASDMPv7UtY%2BokiGNer%2BBgESLhqruif4sLLK7soM1h1bq%2BXLSeN1%2BuxY0bj0L1TPLfc8KJO1%2F3JJkqgYRKdkoearLp1lqE%2F8sik5ib5LKk4DeorPX8VPcJMCTRt6meSJy%2BpPi7iS6qxgmVBWshebvSojrH1xvOGTZT2jU9r7hUNLazjWLCkoOFMMLmdkjRPx8BErRxHBCrPVYSzdjVGYqd6gdDrkR&X-Amz-Signature=1bb6a8f7453ebf8bc6f0908c32b4283a046bdf0524ce10bac7fde0403f7c9808&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662JNQMQ5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BifRCBJYrIoKSzR%2F7%2FiwCYgMCD33DconcLH1I5hQLpAIhAMk4w9R610ArfZxf4Nz3OrIb0dIyq0AT3AE7cuNb5%2BcOKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYsNmx%2BFSu3PmvuV0q3ANlf0Lu2j%2FEX7g%2FK0hKo22p0koGwq3J%2F5rtqu3pImvnoAgf407pI4QeQbKoo1pcT%2FyQte7wloOkiPhl8I5vordZdk2MSivuf%2BQc0O2dlMzb8siAtHINV0sl0f%2FpSaHF%2BiJBd7K3GdsP9mCg2ggOje0%2FmKQyhl9QxReJydP0XEHjlxkkYmBTHgJe9mnjvkEVfLuSPhpgGLPAqOUsG8LJzygUGbYwzElrUDsilboWIiU%2Fu3gNJQ%2FgXzaUnRNVQAuvDuZ5CGnrr7z5xYp4d5FhM54N9jKP0POEftL%2BPw7O7zNuVg9OSYFGLgY%2B9qfNJT5xTwOT4rtrddEwqlM5bW%2BbYDFu7TVEOWpLwXBuTcuT76WPTafFJBeW3hrBYjgHfHgOwRKBRkJp6v0B4dUrPv%2B2CV21RKVvn8MqaJIxW%2FuVTqe0NKunW9MofFovM5ZdEy%2FvDck2%2FoFu%2Fd%2BZxXXVVSjayYBjY%2Be4VaEcQV1Xj1kKfMe28Z5GNQK3jxE8YSbHlIC8uzwcncEggJmSJLjgBRA6WSt29MSaStjVe620Tl%2BAeBTFJLYNEXw5kmgwBJQPpAKrRgpKDvkWpXlck800QI%2FRlnFxY6tGBySnko%2Boy0JgBuzgNl7hNgSCOvK3ooB%2FDjD03OXBBjqkASDMPv7UtY%2BokiGNer%2BBgESLhqruif4sLLK7soM1h1bq%2BXLSeN1%2BuxY0bj0L1TPLfc8KJO1%2F3JJkqgYRKdkoearLp1lqE%2F8sik5ib5LKk4DeorPX8VPcJMCTRt6meSJy%2BpPi7iS6qxgmVBWshebvSojrH1xvOGTZT2jU9r7hUNLazjWLCkoOFMMLmdkjRPx8BErRxHBCrPVYSzdjVGYqd6gdDrkR&X-Amz-Signature=c01c1ad50c1bdb044d6b78fc73699e77e9757d9b6011ad29c67688d087fb0fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662JNQMQ5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BifRCBJYrIoKSzR%2F7%2FiwCYgMCD33DconcLH1I5hQLpAIhAMk4w9R610ArfZxf4Nz3OrIb0dIyq0AT3AE7cuNb5%2BcOKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYsNmx%2BFSu3PmvuV0q3ANlf0Lu2j%2FEX7g%2FK0hKo22p0koGwq3J%2F5rtqu3pImvnoAgf407pI4QeQbKoo1pcT%2FyQte7wloOkiPhl8I5vordZdk2MSivuf%2BQc0O2dlMzb8siAtHINV0sl0f%2FpSaHF%2BiJBd7K3GdsP9mCg2ggOje0%2FmKQyhl9QxReJydP0XEHjlxkkYmBTHgJe9mnjvkEVfLuSPhpgGLPAqOUsG8LJzygUGbYwzElrUDsilboWIiU%2Fu3gNJQ%2FgXzaUnRNVQAuvDuZ5CGnrr7z5xYp4d5FhM54N9jKP0POEftL%2BPw7O7zNuVg9OSYFGLgY%2B9qfNJT5xTwOT4rtrddEwqlM5bW%2BbYDFu7TVEOWpLwXBuTcuT76WPTafFJBeW3hrBYjgHfHgOwRKBRkJp6v0B4dUrPv%2B2CV21RKVvn8MqaJIxW%2FuVTqe0NKunW9MofFovM5ZdEy%2FvDck2%2FoFu%2Fd%2BZxXXVVSjayYBjY%2Be4VaEcQV1Xj1kKfMe28Z5GNQK3jxE8YSbHlIC8uzwcncEggJmSJLjgBRA6WSt29MSaStjVe620Tl%2BAeBTFJLYNEXw5kmgwBJQPpAKrRgpKDvkWpXlck800QI%2FRlnFxY6tGBySnko%2Boy0JgBuzgNl7hNgSCOvK3ooB%2FDjD03OXBBjqkASDMPv7UtY%2BokiGNer%2BBgESLhqruif4sLLK7soM1h1bq%2BXLSeN1%2BuxY0bj0L1TPLfc8KJO1%2F3JJkqgYRKdkoearLp1lqE%2F8sik5ib5LKk4DeorPX8VPcJMCTRt6meSJy%2BpPi7iS6qxgmVBWshebvSojrH1xvOGTZT2jU9r7hUNLazjWLCkoOFMMLmdkjRPx8BErRxHBCrPVYSzdjVGYqd6gdDrkR&X-Amz-Signature=e27d26e557bfdc37c84b61e67f40f640d2ff2bf7e727bff55f28f1127c305674&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
