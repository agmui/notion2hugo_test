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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BZSCLJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCXfK3tGtq2Kyc%2FFWaehEnbwZiPu9OH28ZQR6Q8XE9IhwIgaXXk2lUEtTGrcUAVq83SXsbJcU6p4Zm4FTTmvwhqdS4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArG3D%2FSthZ4md0cJSrcA5BFa7YX3772jeJYaVzSIE0Rf9AcjAxDEki%2FYO%2F1bTw5ypF2BYnK2nwUN6N2TWyg1g9zPCHU9Czr0Y%2F%2Fq69%2FHgujl3d%2FUCXTcxw2iTyhHV0oVBn4gZ%2FQ%2B48IKJO6GqXadF7SPligamAwDFqvTAeYsDj15LrUKv4CmI%2FfDnYWP%2FSF6AyKBuYt5FPJjV2z7RbwgdoW8jWCTF9HsLopbyohteHFlXhbmdXlxKSVIqzVPhjJQH3r2Xtkvl2XD3uMV2%2BW3FzT%2FnbXSachtMERnAawu%2BThTjVQzPZzdjUqs5TPyu8lgA4Aliq1Aao9lAHmnFaqNa2Na0JhxAbl0cxKdR4TgowU4WHTf5Hwyu96XspEwasqhtiLAStSo5AYzaotMdppIE3Hmf7sWkFNrLP0CFoD0IeNRFYDy%2F%2BODJW4NiL%2BfrwLowjiJvGvL4zbhJyHeTVPDP%2BJQlYXL6cgHmouOijYNF22nSkxaYyHyefkl5NrEJ8EhAy8nHYcV6Sr9wd9dNu71o%2BY%2FacDPXdd3UgdGiAMS4Lmv3D6OrbCD7NuzNnmMb9pluMOHCOpx9OIyr0UIgGDhF2QIFeOgegD7qJSNIh0LFe971GghzKNv7%2Byx2EYTqvMRKehID3wKJpmzZl2MO2g%2FsAGOqUBi4VmQuUeCCDyDw82HpdFQ6nL5adI8S1Rn5jhImPzP4%2BDsHg1DiamD8i6sTnAKoUzfNtC6oT%2BRwCn74whSMbVOlN7wfAJSILi6WNXKqfSA4QTFd0ZJnnye%2BvRnd2RC%2F790gh6pUfSsvydLtmzZTqfCbuJ5t0MOakpieMR%2BgHt01FR4ZK64A0RPvt6gnQyiZyUuqsivYaph9HIuYIuenjoEh0KE%2BI5&X-Amz-Signature=d88ebdc02f802662e22f77863be5625952b2c2e72c6289017111bc081b9283c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BZSCLJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCXfK3tGtq2Kyc%2FFWaehEnbwZiPu9OH28ZQR6Q8XE9IhwIgaXXk2lUEtTGrcUAVq83SXsbJcU6p4Zm4FTTmvwhqdS4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArG3D%2FSthZ4md0cJSrcA5BFa7YX3772jeJYaVzSIE0Rf9AcjAxDEki%2FYO%2F1bTw5ypF2BYnK2nwUN6N2TWyg1g9zPCHU9Czr0Y%2F%2Fq69%2FHgujl3d%2FUCXTcxw2iTyhHV0oVBn4gZ%2FQ%2B48IKJO6GqXadF7SPligamAwDFqvTAeYsDj15LrUKv4CmI%2FfDnYWP%2FSF6AyKBuYt5FPJjV2z7RbwgdoW8jWCTF9HsLopbyohteHFlXhbmdXlxKSVIqzVPhjJQH3r2Xtkvl2XD3uMV2%2BW3FzT%2FnbXSachtMERnAawu%2BThTjVQzPZzdjUqs5TPyu8lgA4Aliq1Aao9lAHmnFaqNa2Na0JhxAbl0cxKdR4TgowU4WHTf5Hwyu96XspEwasqhtiLAStSo5AYzaotMdppIE3Hmf7sWkFNrLP0CFoD0IeNRFYDy%2F%2BODJW4NiL%2BfrwLowjiJvGvL4zbhJyHeTVPDP%2BJQlYXL6cgHmouOijYNF22nSkxaYyHyefkl5NrEJ8EhAy8nHYcV6Sr9wd9dNu71o%2BY%2FacDPXdd3UgdGiAMS4Lmv3D6OrbCD7NuzNnmMb9pluMOHCOpx9OIyr0UIgGDhF2QIFeOgegD7qJSNIh0LFe971GghzKNv7%2Byx2EYTqvMRKehID3wKJpmzZl2MO2g%2FsAGOqUBi4VmQuUeCCDyDw82HpdFQ6nL5adI8S1Rn5jhImPzP4%2BDsHg1DiamD8i6sTnAKoUzfNtC6oT%2BRwCn74whSMbVOlN7wfAJSILi6WNXKqfSA4QTFd0ZJnnye%2BvRnd2RC%2F790gh6pUfSsvydLtmzZTqfCbuJ5t0MOakpieMR%2BgHt01FR4ZK64A0RPvt6gnQyiZyUuqsivYaph9HIuYIuenjoEh0KE%2BI5&X-Amz-Signature=e734f3603a0dc71235f72563f39156431ae01027e386a62a446baa3e01659af5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BZSCLJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCXfK3tGtq2Kyc%2FFWaehEnbwZiPu9OH28ZQR6Q8XE9IhwIgaXXk2lUEtTGrcUAVq83SXsbJcU6p4Zm4FTTmvwhqdS4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArG3D%2FSthZ4md0cJSrcA5BFa7YX3772jeJYaVzSIE0Rf9AcjAxDEki%2FYO%2F1bTw5ypF2BYnK2nwUN6N2TWyg1g9zPCHU9Czr0Y%2F%2Fq69%2FHgujl3d%2FUCXTcxw2iTyhHV0oVBn4gZ%2FQ%2B48IKJO6GqXadF7SPligamAwDFqvTAeYsDj15LrUKv4CmI%2FfDnYWP%2FSF6AyKBuYt5FPJjV2z7RbwgdoW8jWCTF9HsLopbyohteHFlXhbmdXlxKSVIqzVPhjJQH3r2Xtkvl2XD3uMV2%2BW3FzT%2FnbXSachtMERnAawu%2BThTjVQzPZzdjUqs5TPyu8lgA4Aliq1Aao9lAHmnFaqNa2Na0JhxAbl0cxKdR4TgowU4WHTf5Hwyu96XspEwasqhtiLAStSo5AYzaotMdppIE3Hmf7sWkFNrLP0CFoD0IeNRFYDy%2F%2BODJW4NiL%2BfrwLowjiJvGvL4zbhJyHeTVPDP%2BJQlYXL6cgHmouOijYNF22nSkxaYyHyefkl5NrEJ8EhAy8nHYcV6Sr9wd9dNu71o%2BY%2FacDPXdd3UgdGiAMS4Lmv3D6OrbCD7NuzNnmMb9pluMOHCOpx9OIyr0UIgGDhF2QIFeOgegD7qJSNIh0LFe971GghzKNv7%2Byx2EYTqvMRKehID3wKJpmzZl2MO2g%2FsAGOqUBi4VmQuUeCCDyDw82HpdFQ6nL5adI8S1Rn5jhImPzP4%2BDsHg1DiamD8i6sTnAKoUzfNtC6oT%2BRwCn74whSMbVOlN7wfAJSILi6WNXKqfSA4QTFd0ZJnnye%2BvRnd2RC%2F790gh6pUfSsvydLtmzZTqfCbuJ5t0MOakpieMR%2BgHt01FR4ZK64A0RPvt6gnQyiZyUuqsivYaph9HIuYIuenjoEh0KE%2BI5&X-Amz-Signature=54ca1f6d42c0eb7202dca5bdb71c63aaa7749cc5397560893d1a10928aba4058&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BZSCLJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCXfK3tGtq2Kyc%2FFWaehEnbwZiPu9OH28ZQR6Q8XE9IhwIgaXXk2lUEtTGrcUAVq83SXsbJcU6p4Zm4FTTmvwhqdS4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArG3D%2FSthZ4md0cJSrcA5BFa7YX3772jeJYaVzSIE0Rf9AcjAxDEki%2FYO%2F1bTw5ypF2BYnK2nwUN6N2TWyg1g9zPCHU9Czr0Y%2F%2Fq69%2FHgujl3d%2FUCXTcxw2iTyhHV0oVBn4gZ%2FQ%2B48IKJO6GqXadF7SPligamAwDFqvTAeYsDj15LrUKv4CmI%2FfDnYWP%2FSF6AyKBuYt5FPJjV2z7RbwgdoW8jWCTF9HsLopbyohteHFlXhbmdXlxKSVIqzVPhjJQH3r2Xtkvl2XD3uMV2%2BW3FzT%2FnbXSachtMERnAawu%2BThTjVQzPZzdjUqs5TPyu8lgA4Aliq1Aao9lAHmnFaqNa2Na0JhxAbl0cxKdR4TgowU4WHTf5Hwyu96XspEwasqhtiLAStSo5AYzaotMdppIE3Hmf7sWkFNrLP0CFoD0IeNRFYDy%2F%2BODJW4NiL%2BfrwLowjiJvGvL4zbhJyHeTVPDP%2BJQlYXL6cgHmouOijYNF22nSkxaYyHyefkl5NrEJ8EhAy8nHYcV6Sr9wd9dNu71o%2BY%2FacDPXdd3UgdGiAMS4Lmv3D6OrbCD7NuzNnmMb9pluMOHCOpx9OIyr0UIgGDhF2QIFeOgegD7qJSNIh0LFe971GghzKNv7%2Byx2EYTqvMRKehID3wKJpmzZl2MO2g%2FsAGOqUBi4VmQuUeCCDyDw82HpdFQ6nL5adI8S1Rn5jhImPzP4%2BDsHg1DiamD8i6sTnAKoUzfNtC6oT%2BRwCn74whSMbVOlN7wfAJSILi6WNXKqfSA4QTFd0ZJnnye%2BvRnd2RC%2F790gh6pUfSsvydLtmzZTqfCbuJ5t0MOakpieMR%2BgHt01FR4ZK64A0RPvt6gnQyiZyUuqsivYaph9HIuYIuenjoEh0KE%2BI5&X-Amz-Signature=90c7109e6a224f1e186652fec5480b7a90be446ac685c349204ea8b82e226ad8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BZSCLJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCXfK3tGtq2Kyc%2FFWaehEnbwZiPu9OH28ZQR6Q8XE9IhwIgaXXk2lUEtTGrcUAVq83SXsbJcU6p4Zm4FTTmvwhqdS4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArG3D%2FSthZ4md0cJSrcA5BFa7YX3772jeJYaVzSIE0Rf9AcjAxDEki%2FYO%2F1bTw5ypF2BYnK2nwUN6N2TWyg1g9zPCHU9Czr0Y%2F%2Fq69%2FHgujl3d%2FUCXTcxw2iTyhHV0oVBn4gZ%2FQ%2B48IKJO6GqXadF7SPligamAwDFqvTAeYsDj15LrUKv4CmI%2FfDnYWP%2FSF6AyKBuYt5FPJjV2z7RbwgdoW8jWCTF9HsLopbyohteHFlXhbmdXlxKSVIqzVPhjJQH3r2Xtkvl2XD3uMV2%2BW3FzT%2FnbXSachtMERnAawu%2BThTjVQzPZzdjUqs5TPyu8lgA4Aliq1Aao9lAHmnFaqNa2Na0JhxAbl0cxKdR4TgowU4WHTf5Hwyu96XspEwasqhtiLAStSo5AYzaotMdppIE3Hmf7sWkFNrLP0CFoD0IeNRFYDy%2F%2BODJW4NiL%2BfrwLowjiJvGvL4zbhJyHeTVPDP%2BJQlYXL6cgHmouOijYNF22nSkxaYyHyefkl5NrEJ8EhAy8nHYcV6Sr9wd9dNu71o%2BY%2FacDPXdd3UgdGiAMS4Lmv3D6OrbCD7NuzNnmMb9pluMOHCOpx9OIyr0UIgGDhF2QIFeOgegD7qJSNIh0LFe971GghzKNv7%2Byx2EYTqvMRKehID3wKJpmzZl2MO2g%2FsAGOqUBi4VmQuUeCCDyDw82HpdFQ6nL5adI8S1Rn5jhImPzP4%2BDsHg1DiamD8i6sTnAKoUzfNtC6oT%2BRwCn74whSMbVOlN7wfAJSILi6WNXKqfSA4QTFd0ZJnnye%2BvRnd2RC%2F790gh6pUfSsvydLtmzZTqfCbuJ5t0MOakpieMR%2BgHt01FR4ZK64A0RPvt6gnQyiZyUuqsivYaph9HIuYIuenjoEh0KE%2BI5&X-Amz-Signature=162fb475cb94715e9abe7ec1d6fe4d1e904081cfdd722ab93c535bdd696c4ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BZSCLJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCXfK3tGtq2Kyc%2FFWaehEnbwZiPu9OH28ZQR6Q8XE9IhwIgaXXk2lUEtTGrcUAVq83SXsbJcU6p4Zm4FTTmvwhqdS4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArG3D%2FSthZ4md0cJSrcA5BFa7YX3772jeJYaVzSIE0Rf9AcjAxDEki%2FYO%2F1bTw5ypF2BYnK2nwUN6N2TWyg1g9zPCHU9Czr0Y%2F%2Fq69%2FHgujl3d%2FUCXTcxw2iTyhHV0oVBn4gZ%2FQ%2B48IKJO6GqXadF7SPligamAwDFqvTAeYsDj15LrUKv4CmI%2FfDnYWP%2FSF6AyKBuYt5FPJjV2z7RbwgdoW8jWCTF9HsLopbyohteHFlXhbmdXlxKSVIqzVPhjJQH3r2Xtkvl2XD3uMV2%2BW3FzT%2FnbXSachtMERnAawu%2BThTjVQzPZzdjUqs5TPyu8lgA4Aliq1Aao9lAHmnFaqNa2Na0JhxAbl0cxKdR4TgowU4WHTf5Hwyu96XspEwasqhtiLAStSo5AYzaotMdppIE3Hmf7sWkFNrLP0CFoD0IeNRFYDy%2F%2BODJW4NiL%2BfrwLowjiJvGvL4zbhJyHeTVPDP%2BJQlYXL6cgHmouOijYNF22nSkxaYyHyefkl5NrEJ8EhAy8nHYcV6Sr9wd9dNu71o%2BY%2FacDPXdd3UgdGiAMS4Lmv3D6OrbCD7NuzNnmMb9pluMOHCOpx9OIyr0UIgGDhF2QIFeOgegD7qJSNIh0LFe971GghzKNv7%2Byx2EYTqvMRKehID3wKJpmzZl2MO2g%2FsAGOqUBi4VmQuUeCCDyDw82HpdFQ6nL5adI8S1Rn5jhImPzP4%2BDsHg1DiamD8i6sTnAKoUzfNtC6oT%2BRwCn74whSMbVOlN7wfAJSILi6WNXKqfSA4QTFd0ZJnnye%2BvRnd2RC%2F790gh6pUfSsvydLtmzZTqfCbuJ5t0MOakpieMR%2BgHt01FR4ZK64A0RPvt6gnQyiZyUuqsivYaph9HIuYIuenjoEh0KE%2BI5&X-Amz-Signature=84a7e953791ebb4ffa29da51a44bd7d95f5b773463cbe31a4ac784e1dec4a84c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BZSCLJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCXfK3tGtq2Kyc%2FFWaehEnbwZiPu9OH28ZQR6Q8XE9IhwIgaXXk2lUEtTGrcUAVq83SXsbJcU6p4Zm4FTTmvwhqdS4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArG3D%2FSthZ4md0cJSrcA5BFa7YX3772jeJYaVzSIE0Rf9AcjAxDEki%2FYO%2F1bTw5ypF2BYnK2nwUN6N2TWyg1g9zPCHU9Czr0Y%2F%2Fq69%2FHgujl3d%2FUCXTcxw2iTyhHV0oVBn4gZ%2FQ%2B48IKJO6GqXadF7SPligamAwDFqvTAeYsDj15LrUKv4CmI%2FfDnYWP%2FSF6AyKBuYt5FPJjV2z7RbwgdoW8jWCTF9HsLopbyohteHFlXhbmdXlxKSVIqzVPhjJQH3r2Xtkvl2XD3uMV2%2BW3FzT%2FnbXSachtMERnAawu%2BThTjVQzPZzdjUqs5TPyu8lgA4Aliq1Aao9lAHmnFaqNa2Na0JhxAbl0cxKdR4TgowU4WHTf5Hwyu96XspEwasqhtiLAStSo5AYzaotMdppIE3Hmf7sWkFNrLP0CFoD0IeNRFYDy%2F%2BODJW4NiL%2BfrwLowjiJvGvL4zbhJyHeTVPDP%2BJQlYXL6cgHmouOijYNF22nSkxaYyHyefkl5NrEJ8EhAy8nHYcV6Sr9wd9dNu71o%2BY%2FacDPXdd3UgdGiAMS4Lmv3D6OrbCD7NuzNnmMb9pluMOHCOpx9OIyr0UIgGDhF2QIFeOgegD7qJSNIh0LFe971GghzKNv7%2Byx2EYTqvMRKehID3wKJpmzZl2MO2g%2FsAGOqUBi4VmQuUeCCDyDw82HpdFQ6nL5adI8S1Rn5jhImPzP4%2BDsHg1DiamD8i6sTnAKoUzfNtC6oT%2BRwCn74whSMbVOlN7wfAJSILi6WNXKqfSA4QTFd0ZJnnye%2BvRnd2RC%2F790gh6pUfSsvydLtmzZTqfCbuJ5t0MOakpieMR%2BgHt01FR4ZK64A0RPvt6gnQyiZyUuqsivYaph9HIuYIuenjoEh0KE%2BI5&X-Amz-Signature=d29b16a429a87cf1520579c035f469aa9878e43c05741f409cb12b9705df3e41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BZSCLJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCXfK3tGtq2Kyc%2FFWaehEnbwZiPu9OH28ZQR6Q8XE9IhwIgaXXk2lUEtTGrcUAVq83SXsbJcU6p4Zm4FTTmvwhqdS4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArG3D%2FSthZ4md0cJSrcA5BFa7YX3772jeJYaVzSIE0Rf9AcjAxDEki%2FYO%2F1bTw5ypF2BYnK2nwUN6N2TWyg1g9zPCHU9Czr0Y%2F%2Fq69%2FHgujl3d%2FUCXTcxw2iTyhHV0oVBn4gZ%2FQ%2B48IKJO6GqXadF7SPligamAwDFqvTAeYsDj15LrUKv4CmI%2FfDnYWP%2FSF6AyKBuYt5FPJjV2z7RbwgdoW8jWCTF9HsLopbyohteHFlXhbmdXlxKSVIqzVPhjJQH3r2Xtkvl2XD3uMV2%2BW3FzT%2FnbXSachtMERnAawu%2BThTjVQzPZzdjUqs5TPyu8lgA4Aliq1Aao9lAHmnFaqNa2Na0JhxAbl0cxKdR4TgowU4WHTf5Hwyu96XspEwasqhtiLAStSo5AYzaotMdppIE3Hmf7sWkFNrLP0CFoD0IeNRFYDy%2F%2BODJW4NiL%2BfrwLowjiJvGvL4zbhJyHeTVPDP%2BJQlYXL6cgHmouOijYNF22nSkxaYyHyefkl5NrEJ8EhAy8nHYcV6Sr9wd9dNu71o%2BY%2FacDPXdd3UgdGiAMS4Lmv3D6OrbCD7NuzNnmMb9pluMOHCOpx9OIyr0UIgGDhF2QIFeOgegD7qJSNIh0LFe971GghzKNv7%2Byx2EYTqvMRKehID3wKJpmzZl2MO2g%2FsAGOqUBi4VmQuUeCCDyDw82HpdFQ6nL5adI8S1Rn5jhImPzP4%2BDsHg1DiamD8i6sTnAKoUzfNtC6oT%2BRwCn74whSMbVOlN7wfAJSILi6WNXKqfSA4QTFd0ZJnnye%2BvRnd2RC%2F790gh6pUfSsvydLtmzZTqfCbuJ5t0MOakpieMR%2BgHt01FR4ZK64A0RPvt6gnQyiZyUuqsivYaph9HIuYIuenjoEh0KE%2BI5&X-Amz-Signature=0c4ad594ae9844863a745838a38df05bbb41169213cc54b02015d07d0a12eb84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
