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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6GDF27G%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGynXNYHby4Wi4LdXrRSIG79daT%2B5WcXcmfj3CZK%2B4CQIgYVx1KNNrb6vrjWX8P5nY8wXwkC8bA6u%2BFvqM61Q7qOAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4dnrUeRxhu21DsgSrcAxJcYIqtRnKoX%2FvkX5fSmiMho%2BeNm4FmC0XFy%2BeBMMdsq6fufgczUZuU0ZzaD6H%2B2EFJYeiQoN3ZLZFt639UFo6uNzAgDjXC1qpsYwZEvw9BoUOmv%2Bc1vwKSwAj97EStcwMvTqwts8voT3O03%2BkgTF6gMER7kEOlSEw98KNaVqX%2F6hO95wYXRVzbMeKienY9uMfYCqyJxjLFLVycZSedaOauFi7FQuB7%2FBsmiQQvNq6XL7rSP5IdROaZqN0%2F248Rydrnmmy8Hyj9s2D6tGrasHi2YeXXyhMDTG%2By44Bc5%2B020sYPAxtko%2BRfSCbyrWG7mx99QI8oHsOnkRbDFnqy6mKPIzE4R6Ad5XO5Trurf9bMmRn2a9F2aHlOLsBiQP0kV13n1WdJb9SYxS7l%2B6dePTBrmCbZEomFVTaLKSwuVR9U2rnstXvEYKrvg3Gyt4%2BKoF%2FSYsSmDQT6QP%2Bl9rBsSXBGIEMAevdlby5g3OdclR%2BU9pOYHBx0hna2cTO12imuyDonZJmf%2F3llk0iwY6scUPTMva2aJ%2FurNEg2McuaFYJRfVblWyzSsPJCt8jMRH8F2JxtBk1VEp3X%2FJ1RgUIUG%2BWoeFkA4oHfC%2BA9kMT7V92bmBIEum47mKM%2FETxSMJqLucMGOqUBbogfVF9hPTEHwLj2BLpSRahC787w2vwn9vQbI%2B%2FOnkIwx5OAnGgaW2RUCJZfDLdUnPvzA2IZy%2Ba3Na3e0hobb1KHMKhzzwR6gkCDMB%2Fvu0N%2FNVInX3DQA69cVBWclnbfxwOEYj7DkQ2XVdRNe3s1NBrcdOWrm4Mr9hSjauEMIQojUFDy%2Fet19Cuj%2Bfa0w0fM0Zu440KR0u2K6BMrizChgAPMlyfP&X-Amz-Signature=4485cfb01bbc203e21c3ea0b08b9155041eb8b5a6a86ee06e206be38078ffbd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6GDF27G%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGynXNYHby4Wi4LdXrRSIG79daT%2B5WcXcmfj3CZK%2B4CQIgYVx1KNNrb6vrjWX8P5nY8wXwkC8bA6u%2BFvqM61Q7qOAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4dnrUeRxhu21DsgSrcAxJcYIqtRnKoX%2FvkX5fSmiMho%2BeNm4FmC0XFy%2BeBMMdsq6fufgczUZuU0ZzaD6H%2B2EFJYeiQoN3ZLZFt639UFo6uNzAgDjXC1qpsYwZEvw9BoUOmv%2Bc1vwKSwAj97EStcwMvTqwts8voT3O03%2BkgTF6gMER7kEOlSEw98KNaVqX%2F6hO95wYXRVzbMeKienY9uMfYCqyJxjLFLVycZSedaOauFi7FQuB7%2FBsmiQQvNq6XL7rSP5IdROaZqN0%2F248Rydrnmmy8Hyj9s2D6tGrasHi2YeXXyhMDTG%2By44Bc5%2B020sYPAxtko%2BRfSCbyrWG7mx99QI8oHsOnkRbDFnqy6mKPIzE4R6Ad5XO5Trurf9bMmRn2a9F2aHlOLsBiQP0kV13n1WdJb9SYxS7l%2B6dePTBrmCbZEomFVTaLKSwuVR9U2rnstXvEYKrvg3Gyt4%2BKoF%2FSYsSmDQT6QP%2Bl9rBsSXBGIEMAevdlby5g3OdclR%2BU9pOYHBx0hna2cTO12imuyDonZJmf%2F3llk0iwY6scUPTMva2aJ%2FurNEg2McuaFYJRfVblWyzSsPJCt8jMRH8F2JxtBk1VEp3X%2FJ1RgUIUG%2BWoeFkA4oHfC%2BA9kMT7V92bmBIEum47mKM%2FETxSMJqLucMGOqUBbogfVF9hPTEHwLj2BLpSRahC787w2vwn9vQbI%2B%2FOnkIwx5OAnGgaW2RUCJZfDLdUnPvzA2IZy%2Ba3Na3e0hobb1KHMKhzzwR6gkCDMB%2Fvu0N%2FNVInX3DQA69cVBWclnbfxwOEYj7DkQ2XVdRNe3s1NBrcdOWrm4Mr9hSjauEMIQojUFDy%2Fet19Cuj%2Bfa0w0fM0Zu440KR0u2K6BMrizChgAPMlyfP&X-Amz-Signature=64c7ef4e26b4cd5f6be3b22d6ca7717667073025a021bb1c66d15aeeab9af710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6GDF27G%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGynXNYHby4Wi4LdXrRSIG79daT%2B5WcXcmfj3CZK%2B4CQIgYVx1KNNrb6vrjWX8P5nY8wXwkC8bA6u%2BFvqM61Q7qOAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4dnrUeRxhu21DsgSrcAxJcYIqtRnKoX%2FvkX5fSmiMho%2BeNm4FmC0XFy%2BeBMMdsq6fufgczUZuU0ZzaD6H%2B2EFJYeiQoN3ZLZFt639UFo6uNzAgDjXC1qpsYwZEvw9BoUOmv%2Bc1vwKSwAj97EStcwMvTqwts8voT3O03%2BkgTF6gMER7kEOlSEw98KNaVqX%2F6hO95wYXRVzbMeKienY9uMfYCqyJxjLFLVycZSedaOauFi7FQuB7%2FBsmiQQvNq6XL7rSP5IdROaZqN0%2F248Rydrnmmy8Hyj9s2D6tGrasHi2YeXXyhMDTG%2By44Bc5%2B020sYPAxtko%2BRfSCbyrWG7mx99QI8oHsOnkRbDFnqy6mKPIzE4R6Ad5XO5Trurf9bMmRn2a9F2aHlOLsBiQP0kV13n1WdJb9SYxS7l%2B6dePTBrmCbZEomFVTaLKSwuVR9U2rnstXvEYKrvg3Gyt4%2BKoF%2FSYsSmDQT6QP%2Bl9rBsSXBGIEMAevdlby5g3OdclR%2BU9pOYHBx0hna2cTO12imuyDonZJmf%2F3llk0iwY6scUPTMva2aJ%2FurNEg2McuaFYJRfVblWyzSsPJCt8jMRH8F2JxtBk1VEp3X%2FJ1RgUIUG%2BWoeFkA4oHfC%2BA9kMT7V92bmBIEum47mKM%2FETxSMJqLucMGOqUBbogfVF9hPTEHwLj2BLpSRahC787w2vwn9vQbI%2B%2FOnkIwx5OAnGgaW2RUCJZfDLdUnPvzA2IZy%2Ba3Na3e0hobb1KHMKhzzwR6gkCDMB%2Fvu0N%2FNVInX3DQA69cVBWclnbfxwOEYj7DkQ2XVdRNe3s1NBrcdOWrm4Mr9hSjauEMIQojUFDy%2Fet19Cuj%2Bfa0w0fM0Zu440KR0u2K6BMrizChgAPMlyfP&X-Amz-Signature=037ff4179429b81f775a549badcd182073b479ddf5a897ad22c1a6abf1227b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6GDF27G%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGynXNYHby4Wi4LdXrRSIG79daT%2B5WcXcmfj3CZK%2B4CQIgYVx1KNNrb6vrjWX8P5nY8wXwkC8bA6u%2BFvqM61Q7qOAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4dnrUeRxhu21DsgSrcAxJcYIqtRnKoX%2FvkX5fSmiMho%2BeNm4FmC0XFy%2BeBMMdsq6fufgczUZuU0ZzaD6H%2B2EFJYeiQoN3ZLZFt639UFo6uNzAgDjXC1qpsYwZEvw9BoUOmv%2Bc1vwKSwAj97EStcwMvTqwts8voT3O03%2BkgTF6gMER7kEOlSEw98KNaVqX%2F6hO95wYXRVzbMeKienY9uMfYCqyJxjLFLVycZSedaOauFi7FQuB7%2FBsmiQQvNq6XL7rSP5IdROaZqN0%2F248Rydrnmmy8Hyj9s2D6tGrasHi2YeXXyhMDTG%2By44Bc5%2B020sYPAxtko%2BRfSCbyrWG7mx99QI8oHsOnkRbDFnqy6mKPIzE4R6Ad5XO5Trurf9bMmRn2a9F2aHlOLsBiQP0kV13n1WdJb9SYxS7l%2B6dePTBrmCbZEomFVTaLKSwuVR9U2rnstXvEYKrvg3Gyt4%2BKoF%2FSYsSmDQT6QP%2Bl9rBsSXBGIEMAevdlby5g3OdclR%2BU9pOYHBx0hna2cTO12imuyDonZJmf%2F3llk0iwY6scUPTMva2aJ%2FurNEg2McuaFYJRfVblWyzSsPJCt8jMRH8F2JxtBk1VEp3X%2FJ1RgUIUG%2BWoeFkA4oHfC%2BA9kMT7V92bmBIEum47mKM%2FETxSMJqLucMGOqUBbogfVF9hPTEHwLj2BLpSRahC787w2vwn9vQbI%2B%2FOnkIwx5OAnGgaW2RUCJZfDLdUnPvzA2IZy%2Ba3Na3e0hobb1KHMKhzzwR6gkCDMB%2Fvu0N%2FNVInX3DQA69cVBWclnbfxwOEYj7DkQ2XVdRNe3s1NBrcdOWrm4Mr9hSjauEMIQojUFDy%2Fet19Cuj%2Bfa0w0fM0Zu440KR0u2K6BMrizChgAPMlyfP&X-Amz-Signature=83f76741747e886079d4836ad6faf7f81ec3cdf0c9c87084e6e2d818d39852d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6GDF27G%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGynXNYHby4Wi4LdXrRSIG79daT%2B5WcXcmfj3CZK%2B4CQIgYVx1KNNrb6vrjWX8P5nY8wXwkC8bA6u%2BFvqM61Q7qOAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4dnrUeRxhu21DsgSrcAxJcYIqtRnKoX%2FvkX5fSmiMho%2BeNm4FmC0XFy%2BeBMMdsq6fufgczUZuU0ZzaD6H%2B2EFJYeiQoN3ZLZFt639UFo6uNzAgDjXC1qpsYwZEvw9BoUOmv%2Bc1vwKSwAj97EStcwMvTqwts8voT3O03%2BkgTF6gMER7kEOlSEw98KNaVqX%2F6hO95wYXRVzbMeKienY9uMfYCqyJxjLFLVycZSedaOauFi7FQuB7%2FBsmiQQvNq6XL7rSP5IdROaZqN0%2F248Rydrnmmy8Hyj9s2D6tGrasHi2YeXXyhMDTG%2By44Bc5%2B020sYPAxtko%2BRfSCbyrWG7mx99QI8oHsOnkRbDFnqy6mKPIzE4R6Ad5XO5Trurf9bMmRn2a9F2aHlOLsBiQP0kV13n1WdJb9SYxS7l%2B6dePTBrmCbZEomFVTaLKSwuVR9U2rnstXvEYKrvg3Gyt4%2BKoF%2FSYsSmDQT6QP%2Bl9rBsSXBGIEMAevdlby5g3OdclR%2BU9pOYHBx0hna2cTO12imuyDonZJmf%2F3llk0iwY6scUPTMva2aJ%2FurNEg2McuaFYJRfVblWyzSsPJCt8jMRH8F2JxtBk1VEp3X%2FJ1RgUIUG%2BWoeFkA4oHfC%2BA9kMT7V92bmBIEum47mKM%2FETxSMJqLucMGOqUBbogfVF9hPTEHwLj2BLpSRahC787w2vwn9vQbI%2B%2FOnkIwx5OAnGgaW2RUCJZfDLdUnPvzA2IZy%2Ba3Na3e0hobb1KHMKhzzwR6gkCDMB%2Fvu0N%2FNVInX3DQA69cVBWclnbfxwOEYj7DkQ2XVdRNe3s1NBrcdOWrm4Mr9hSjauEMIQojUFDy%2Fet19Cuj%2Bfa0w0fM0Zu440KR0u2K6BMrizChgAPMlyfP&X-Amz-Signature=85b41ff791484cd15459700c39c6dff64c107b9f63eee55025795fa77847a67f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6GDF27G%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGynXNYHby4Wi4LdXrRSIG79daT%2B5WcXcmfj3CZK%2B4CQIgYVx1KNNrb6vrjWX8P5nY8wXwkC8bA6u%2BFvqM61Q7qOAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4dnrUeRxhu21DsgSrcAxJcYIqtRnKoX%2FvkX5fSmiMho%2BeNm4FmC0XFy%2BeBMMdsq6fufgczUZuU0ZzaD6H%2B2EFJYeiQoN3ZLZFt639UFo6uNzAgDjXC1qpsYwZEvw9BoUOmv%2Bc1vwKSwAj97EStcwMvTqwts8voT3O03%2BkgTF6gMER7kEOlSEw98KNaVqX%2F6hO95wYXRVzbMeKienY9uMfYCqyJxjLFLVycZSedaOauFi7FQuB7%2FBsmiQQvNq6XL7rSP5IdROaZqN0%2F248Rydrnmmy8Hyj9s2D6tGrasHi2YeXXyhMDTG%2By44Bc5%2B020sYPAxtko%2BRfSCbyrWG7mx99QI8oHsOnkRbDFnqy6mKPIzE4R6Ad5XO5Trurf9bMmRn2a9F2aHlOLsBiQP0kV13n1WdJb9SYxS7l%2B6dePTBrmCbZEomFVTaLKSwuVR9U2rnstXvEYKrvg3Gyt4%2BKoF%2FSYsSmDQT6QP%2Bl9rBsSXBGIEMAevdlby5g3OdclR%2BU9pOYHBx0hna2cTO12imuyDonZJmf%2F3llk0iwY6scUPTMva2aJ%2FurNEg2McuaFYJRfVblWyzSsPJCt8jMRH8F2JxtBk1VEp3X%2FJ1RgUIUG%2BWoeFkA4oHfC%2BA9kMT7V92bmBIEum47mKM%2FETxSMJqLucMGOqUBbogfVF9hPTEHwLj2BLpSRahC787w2vwn9vQbI%2B%2FOnkIwx5OAnGgaW2RUCJZfDLdUnPvzA2IZy%2Ba3Na3e0hobb1KHMKhzzwR6gkCDMB%2Fvu0N%2FNVInX3DQA69cVBWclnbfxwOEYj7DkQ2XVdRNe3s1NBrcdOWrm4Mr9hSjauEMIQojUFDy%2Fet19Cuj%2Bfa0w0fM0Zu440KR0u2K6BMrizChgAPMlyfP&X-Amz-Signature=1234855d9d8f6e26332ff0f593e8d1ff5ab8b9cb6111a42b2da04d9a64253dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6GDF27G%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGynXNYHby4Wi4LdXrRSIG79daT%2B5WcXcmfj3CZK%2B4CQIgYVx1KNNrb6vrjWX8P5nY8wXwkC8bA6u%2BFvqM61Q7qOAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4dnrUeRxhu21DsgSrcAxJcYIqtRnKoX%2FvkX5fSmiMho%2BeNm4FmC0XFy%2BeBMMdsq6fufgczUZuU0ZzaD6H%2B2EFJYeiQoN3ZLZFt639UFo6uNzAgDjXC1qpsYwZEvw9BoUOmv%2Bc1vwKSwAj97EStcwMvTqwts8voT3O03%2BkgTF6gMER7kEOlSEw98KNaVqX%2F6hO95wYXRVzbMeKienY9uMfYCqyJxjLFLVycZSedaOauFi7FQuB7%2FBsmiQQvNq6XL7rSP5IdROaZqN0%2F248Rydrnmmy8Hyj9s2D6tGrasHi2YeXXyhMDTG%2By44Bc5%2B020sYPAxtko%2BRfSCbyrWG7mx99QI8oHsOnkRbDFnqy6mKPIzE4R6Ad5XO5Trurf9bMmRn2a9F2aHlOLsBiQP0kV13n1WdJb9SYxS7l%2B6dePTBrmCbZEomFVTaLKSwuVR9U2rnstXvEYKrvg3Gyt4%2BKoF%2FSYsSmDQT6QP%2Bl9rBsSXBGIEMAevdlby5g3OdclR%2BU9pOYHBx0hna2cTO12imuyDonZJmf%2F3llk0iwY6scUPTMva2aJ%2FurNEg2McuaFYJRfVblWyzSsPJCt8jMRH8F2JxtBk1VEp3X%2FJ1RgUIUG%2BWoeFkA4oHfC%2BA9kMT7V92bmBIEum47mKM%2FETxSMJqLucMGOqUBbogfVF9hPTEHwLj2BLpSRahC787w2vwn9vQbI%2B%2FOnkIwx5OAnGgaW2RUCJZfDLdUnPvzA2IZy%2Ba3Na3e0hobb1KHMKhzzwR6gkCDMB%2Fvu0N%2FNVInX3DQA69cVBWclnbfxwOEYj7DkQ2XVdRNe3s1NBrcdOWrm4Mr9hSjauEMIQojUFDy%2Fet19Cuj%2Bfa0w0fM0Zu440KR0u2K6BMrizChgAPMlyfP&X-Amz-Signature=7b33f5edb9a8817486055b85e6b39a41c946738063a401beae1aa64c08dc8014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6GDF27G%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGynXNYHby4Wi4LdXrRSIG79daT%2B5WcXcmfj3CZK%2B4CQIgYVx1KNNrb6vrjWX8P5nY8wXwkC8bA6u%2BFvqM61Q7qOAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4dnrUeRxhu21DsgSrcAxJcYIqtRnKoX%2FvkX5fSmiMho%2BeNm4FmC0XFy%2BeBMMdsq6fufgczUZuU0ZzaD6H%2B2EFJYeiQoN3ZLZFt639UFo6uNzAgDjXC1qpsYwZEvw9BoUOmv%2Bc1vwKSwAj97EStcwMvTqwts8voT3O03%2BkgTF6gMER7kEOlSEw98KNaVqX%2F6hO95wYXRVzbMeKienY9uMfYCqyJxjLFLVycZSedaOauFi7FQuB7%2FBsmiQQvNq6XL7rSP5IdROaZqN0%2F248Rydrnmmy8Hyj9s2D6tGrasHi2YeXXyhMDTG%2By44Bc5%2B020sYPAxtko%2BRfSCbyrWG7mx99QI8oHsOnkRbDFnqy6mKPIzE4R6Ad5XO5Trurf9bMmRn2a9F2aHlOLsBiQP0kV13n1WdJb9SYxS7l%2B6dePTBrmCbZEomFVTaLKSwuVR9U2rnstXvEYKrvg3Gyt4%2BKoF%2FSYsSmDQT6QP%2Bl9rBsSXBGIEMAevdlby5g3OdclR%2BU9pOYHBx0hna2cTO12imuyDonZJmf%2F3llk0iwY6scUPTMva2aJ%2FurNEg2McuaFYJRfVblWyzSsPJCt8jMRH8F2JxtBk1VEp3X%2FJ1RgUIUG%2BWoeFkA4oHfC%2BA9kMT7V92bmBIEum47mKM%2FETxSMJqLucMGOqUBbogfVF9hPTEHwLj2BLpSRahC787w2vwn9vQbI%2B%2FOnkIwx5OAnGgaW2RUCJZfDLdUnPvzA2IZy%2Ba3Na3e0hobb1KHMKhzzwR6gkCDMB%2Fvu0N%2FNVInX3DQA69cVBWclnbfxwOEYj7DkQ2XVdRNe3s1NBrcdOWrm4Mr9hSjauEMIQojUFDy%2Fet19Cuj%2Bfa0w0fM0Zu440KR0u2K6BMrizChgAPMlyfP&X-Amz-Signature=9942569fe3e8d5e6e477002ddbd29a8464984661aa58519411dbe2d7219578b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
