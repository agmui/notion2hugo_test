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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZMEZNXP%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWm6aTnjWysbUr7oETL2%2FeX%2Ffkvl22jDms4FweUDV7cgIhAOySm%2BAQYBAJAbt41tiyIW7B8LViEaamnC0QIiUmWG1NKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTv0NbksGAWbV9Qdgq3ANa%2FshMqFSmYCxnuNLFSNlhdM2AvVHPiZ5JFIE8PYnK4ZZzcuzNzuJ%2FZs50k5W5E7bomrqYhxkuEhfaB0PfVC6cyPLk5AmzkPaUiJXaYhONsc83c3%2BipE7EiZSLMClsjaXSPrqONTt%2F4EVjC7K3kjeRbxVEx9F%2F8duS4XLMoODH4OlFUEP7ZD8AnQVribmE9F%2FGq2aait%2Bw0NBgqYg7vWW6NP10kq9EDVlkDX7BLJChdb3e%2Fr0Gu6h7axhkWL2OgYVGgBZOdi27P8lBiRwapfCx96YTZ4D1WMDthAVGTVGfOou%2FrfuLyT%2FqvpJhiPFk8I0%2Brf7meM3wa3Tg%2BLX%2FH%2Bz5I8cGkVp6Gq%2B3NCAfiWsktkiV5ADGKYTiAzZJSIAcqxIYoSNGlf2hIyU1gXw5apOYnDQKCekmyNjEibCWKGvXWj3%2B5P86zvmxq9qpjJxfBqdzpjbd%2Fc2Be1RuAJVHCYqPqeVL1VW8xvM%2FpK2vdyrg7j0e9yhoRePdwza90%2BJbCBgaih%2ByjjsP6NCVLDf95NrGcikEqlJX5qq1DYA8uDsVbAYQAcq%2B6DwmhUA7GDaYUWAudgJ4TLasDSCMrCH7e22Wopwhuw9rCnS7xKZFA0V1lmuQtl8gPDcNIrdI%2FTCHtsHSBjqkAekzMxUT5kxYzPmHtFuNsWvYd1Hbv5cSdDDeJhEBJuFVndFYKhQ8tSgHkpdOpB3sWzJHB2Nta88%2BmjreidOuTThOyFlg8NngM2QztEXJSGxyMxpF2x9%2FySdpTeS%2FExzShGfBIiUYrhQFI7YkYD4wm0zpjez%2FLUZdkIEYfYedWK4PBwou4NlQ%2FBQVMEy3WTXG10YAZudSwfgu7tB1wM6xFsgs22Tp&X-Amz-Signature=21754c2f4ffe7425b44a3495817031f474e885a4c0903a8666cc301be2b07ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZMEZNXP%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWm6aTnjWysbUr7oETL2%2FeX%2Ffkvl22jDms4FweUDV7cgIhAOySm%2BAQYBAJAbt41tiyIW7B8LViEaamnC0QIiUmWG1NKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTv0NbksGAWbV9Qdgq3ANa%2FshMqFSmYCxnuNLFSNlhdM2AvVHPiZ5JFIE8PYnK4ZZzcuzNzuJ%2FZs50k5W5E7bomrqYhxkuEhfaB0PfVC6cyPLk5AmzkPaUiJXaYhONsc83c3%2BipE7EiZSLMClsjaXSPrqONTt%2F4EVjC7K3kjeRbxVEx9F%2F8duS4XLMoODH4OlFUEP7ZD8AnQVribmE9F%2FGq2aait%2Bw0NBgqYg7vWW6NP10kq9EDVlkDX7BLJChdb3e%2Fr0Gu6h7axhkWL2OgYVGgBZOdi27P8lBiRwapfCx96YTZ4D1WMDthAVGTVGfOou%2FrfuLyT%2FqvpJhiPFk8I0%2Brf7meM3wa3Tg%2BLX%2FH%2Bz5I8cGkVp6Gq%2B3NCAfiWsktkiV5ADGKYTiAzZJSIAcqxIYoSNGlf2hIyU1gXw5apOYnDQKCekmyNjEibCWKGvXWj3%2B5P86zvmxq9qpjJxfBqdzpjbd%2Fc2Be1RuAJVHCYqPqeVL1VW8xvM%2FpK2vdyrg7j0e9yhoRePdwza90%2BJbCBgaih%2ByjjsP6NCVLDf95NrGcikEqlJX5qq1DYA8uDsVbAYQAcq%2B6DwmhUA7GDaYUWAudgJ4TLasDSCMrCH7e22Wopwhuw9rCnS7xKZFA0V1lmuQtl8gPDcNIrdI%2FTCHtsHSBjqkAekzMxUT5kxYzPmHtFuNsWvYd1Hbv5cSdDDeJhEBJuFVndFYKhQ8tSgHkpdOpB3sWzJHB2Nta88%2BmjreidOuTThOyFlg8NngM2QztEXJSGxyMxpF2x9%2FySdpTeS%2FExzShGfBIiUYrhQFI7YkYD4wm0zpjez%2FLUZdkIEYfYedWK4PBwou4NlQ%2FBQVMEy3WTXG10YAZudSwfgu7tB1wM6xFsgs22Tp&X-Amz-Signature=6999ae7dea804cce2ba543e299b36c1085c880392eb0cfbaf2c1cb9dcb8b405a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZMEZNXP%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWm6aTnjWysbUr7oETL2%2FeX%2Ffkvl22jDms4FweUDV7cgIhAOySm%2BAQYBAJAbt41tiyIW7B8LViEaamnC0QIiUmWG1NKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTv0NbksGAWbV9Qdgq3ANa%2FshMqFSmYCxnuNLFSNlhdM2AvVHPiZ5JFIE8PYnK4ZZzcuzNzuJ%2FZs50k5W5E7bomrqYhxkuEhfaB0PfVC6cyPLk5AmzkPaUiJXaYhONsc83c3%2BipE7EiZSLMClsjaXSPrqONTt%2F4EVjC7K3kjeRbxVEx9F%2F8duS4XLMoODH4OlFUEP7ZD8AnQVribmE9F%2FGq2aait%2Bw0NBgqYg7vWW6NP10kq9EDVlkDX7BLJChdb3e%2Fr0Gu6h7axhkWL2OgYVGgBZOdi27P8lBiRwapfCx96YTZ4D1WMDthAVGTVGfOou%2FrfuLyT%2FqvpJhiPFk8I0%2Brf7meM3wa3Tg%2BLX%2FH%2Bz5I8cGkVp6Gq%2B3NCAfiWsktkiV5ADGKYTiAzZJSIAcqxIYoSNGlf2hIyU1gXw5apOYnDQKCekmyNjEibCWKGvXWj3%2B5P86zvmxq9qpjJxfBqdzpjbd%2Fc2Be1RuAJVHCYqPqeVL1VW8xvM%2FpK2vdyrg7j0e9yhoRePdwza90%2BJbCBgaih%2ByjjsP6NCVLDf95NrGcikEqlJX5qq1DYA8uDsVbAYQAcq%2B6DwmhUA7GDaYUWAudgJ4TLasDSCMrCH7e22Wopwhuw9rCnS7xKZFA0V1lmuQtl8gPDcNIrdI%2FTCHtsHSBjqkAekzMxUT5kxYzPmHtFuNsWvYd1Hbv5cSdDDeJhEBJuFVndFYKhQ8tSgHkpdOpB3sWzJHB2Nta88%2BmjreidOuTThOyFlg8NngM2QztEXJSGxyMxpF2x9%2FySdpTeS%2FExzShGfBIiUYrhQFI7YkYD4wm0zpjez%2FLUZdkIEYfYedWK4PBwou4NlQ%2FBQVMEy3WTXG10YAZudSwfgu7tB1wM6xFsgs22Tp&X-Amz-Signature=636ad03acc962e7a3ad23ae5535102e323946fd0b9c2104af50bcff431970224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZMEZNXP%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWm6aTnjWysbUr7oETL2%2FeX%2Ffkvl22jDms4FweUDV7cgIhAOySm%2BAQYBAJAbt41tiyIW7B8LViEaamnC0QIiUmWG1NKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTv0NbksGAWbV9Qdgq3ANa%2FshMqFSmYCxnuNLFSNlhdM2AvVHPiZ5JFIE8PYnK4ZZzcuzNzuJ%2FZs50k5W5E7bomrqYhxkuEhfaB0PfVC6cyPLk5AmzkPaUiJXaYhONsc83c3%2BipE7EiZSLMClsjaXSPrqONTt%2F4EVjC7K3kjeRbxVEx9F%2F8duS4XLMoODH4OlFUEP7ZD8AnQVribmE9F%2FGq2aait%2Bw0NBgqYg7vWW6NP10kq9EDVlkDX7BLJChdb3e%2Fr0Gu6h7axhkWL2OgYVGgBZOdi27P8lBiRwapfCx96YTZ4D1WMDthAVGTVGfOou%2FrfuLyT%2FqvpJhiPFk8I0%2Brf7meM3wa3Tg%2BLX%2FH%2Bz5I8cGkVp6Gq%2B3NCAfiWsktkiV5ADGKYTiAzZJSIAcqxIYoSNGlf2hIyU1gXw5apOYnDQKCekmyNjEibCWKGvXWj3%2B5P86zvmxq9qpjJxfBqdzpjbd%2Fc2Be1RuAJVHCYqPqeVL1VW8xvM%2FpK2vdyrg7j0e9yhoRePdwza90%2BJbCBgaih%2ByjjsP6NCVLDf95NrGcikEqlJX5qq1DYA8uDsVbAYQAcq%2B6DwmhUA7GDaYUWAudgJ4TLasDSCMrCH7e22Wopwhuw9rCnS7xKZFA0V1lmuQtl8gPDcNIrdI%2FTCHtsHSBjqkAekzMxUT5kxYzPmHtFuNsWvYd1Hbv5cSdDDeJhEBJuFVndFYKhQ8tSgHkpdOpB3sWzJHB2Nta88%2BmjreidOuTThOyFlg8NngM2QztEXJSGxyMxpF2x9%2FySdpTeS%2FExzShGfBIiUYrhQFI7YkYD4wm0zpjez%2FLUZdkIEYfYedWK4PBwou4NlQ%2FBQVMEy3WTXG10YAZudSwfgu7tB1wM6xFsgs22Tp&X-Amz-Signature=afd0367bb974a31f5519a75d0271d38e67ff6526e6f6a73addb3aedcc3d0044f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZMEZNXP%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWm6aTnjWysbUr7oETL2%2FeX%2Ffkvl22jDms4FweUDV7cgIhAOySm%2BAQYBAJAbt41tiyIW7B8LViEaamnC0QIiUmWG1NKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTv0NbksGAWbV9Qdgq3ANa%2FshMqFSmYCxnuNLFSNlhdM2AvVHPiZ5JFIE8PYnK4ZZzcuzNzuJ%2FZs50k5W5E7bomrqYhxkuEhfaB0PfVC6cyPLk5AmzkPaUiJXaYhONsc83c3%2BipE7EiZSLMClsjaXSPrqONTt%2F4EVjC7K3kjeRbxVEx9F%2F8duS4XLMoODH4OlFUEP7ZD8AnQVribmE9F%2FGq2aait%2Bw0NBgqYg7vWW6NP10kq9EDVlkDX7BLJChdb3e%2Fr0Gu6h7axhkWL2OgYVGgBZOdi27P8lBiRwapfCx96YTZ4D1WMDthAVGTVGfOou%2FrfuLyT%2FqvpJhiPFk8I0%2Brf7meM3wa3Tg%2BLX%2FH%2Bz5I8cGkVp6Gq%2B3NCAfiWsktkiV5ADGKYTiAzZJSIAcqxIYoSNGlf2hIyU1gXw5apOYnDQKCekmyNjEibCWKGvXWj3%2B5P86zvmxq9qpjJxfBqdzpjbd%2Fc2Be1RuAJVHCYqPqeVL1VW8xvM%2FpK2vdyrg7j0e9yhoRePdwza90%2BJbCBgaih%2ByjjsP6NCVLDf95NrGcikEqlJX5qq1DYA8uDsVbAYQAcq%2B6DwmhUA7GDaYUWAudgJ4TLasDSCMrCH7e22Wopwhuw9rCnS7xKZFA0V1lmuQtl8gPDcNIrdI%2FTCHtsHSBjqkAekzMxUT5kxYzPmHtFuNsWvYd1Hbv5cSdDDeJhEBJuFVndFYKhQ8tSgHkpdOpB3sWzJHB2Nta88%2BmjreidOuTThOyFlg8NngM2QztEXJSGxyMxpF2x9%2FySdpTeS%2FExzShGfBIiUYrhQFI7YkYD4wm0zpjez%2FLUZdkIEYfYedWK4PBwou4NlQ%2FBQVMEy3WTXG10YAZudSwfgu7tB1wM6xFsgs22Tp&X-Amz-Signature=3aef4d84c2b333bcf5eba29e8def10a76d8896ea6b185728ea46c1dbcbf4a5f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZMEZNXP%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWm6aTnjWysbUr7oETL2%2FeX%2Ffkvl22jDms4FweUDV7cgIhAOySm%2BAQYBAJAbt41tiyIW7B8LViEaamnC0QIiUmWG1NKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTv0NbksGAWbV9Qdgq3ANa%2FshMqFSmYCxnuNLFSNlhdM2AvVHPiZ5JFIE8PYnK4ZZzcuzNzuJ%2FZs50k5W5E7bomrqYhxkuEhfaB0PfVC6cyPLk5AmzkPaUiJXaYhONsc83c3%2BipE7EiZSLMClsjaXSPrqONTt%2F4EVjC7K3kjeRbxVEx9F%2F8duS4XLMoODH4OlFUEP7ZD8AnQVribmE9F%2FGq2aait%2Bw0NBgqYg7vWW6NP10kq9EDVlkDX7BLJChdb3e%2Fr0Gu6h7axhkWL2OgYVGgBZOdi27P8lBiRwapfCx96YTZ4D1WMDthAVGTVGfOou%2FrfuLyT%2FqvpJhiPFk8I0%2Brf7meM3wa3Tg%2BLX%2FH%2Bz5I8cGkVp6Gq%2B3NCAfiWsktkiV5ADGKYTiAzZJSIAcqxIYoSNGlf2hIyU1gXw5apOYnDQKCekmyNjEibCWKGvXWj3%2B5P86zvmxq9qpjJxfBqdzpjbd%2Fc2Be1RuAJVHCYqPqeVL1VW8xvM%2FpK2vdyrg7j0e9yhoRePdwza90%2BJbCBgaih%2ByjjsP6NCVLDf95NrGcikEqlJX5qq1DYA8uDsVbAYQAcq%2B6DwmhUA7GDaYUWAudgJ4TLasDSCMrCH7e22Wopwhuw9rCnS7xKZFA0V1lmuQtl8gPDcNIrdI%2FTCHtsHSBjqkAekzMxUT5kxYzPmHtFuNsWvYd1Hbv5cSdDDeJhEBJuFVndFYKhQ8tSgHkpdOpB3sWzJHB2Nta88%2BmjreidOuTThOyFlg8NngM2QztEXJSGxyMxpF2x9%2FySdpTeS%2FExzShGfBIiUYrhQFI7YkYD4wm0zpjez%2FLUZdkIEYfYedWK4PBwou4NlQ%2FBQVMEy3WTXG10YAZudSwfgu7tB1wM6xFsgs22Tp&X-Amz-Signature=01f513cc0bbe52e3b328f491a55e72f71b8676f1ef8c518d1f2838ece1e47450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZMEZNXP%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWm6aTnjWysbUr7oETL2%2FeX%2Ffkvl22jDms4FweUDV7cgIhAOySm%2BAQYBAJAbt41tiyIW7B8LViEaamnC0QIiUmWG1NKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTv0NbksGAWbV9Qdgq3ANa%2FshMqFSmYCxnuNLFSNlhdM2AvVHPiZ5JFIE8PYnK4ZZzcuzNzuJ%2FZs50k5W5E7bomrqYhxkuEhfaB0PfVC6cyPLk5AmzkPaUiJXaYhONsc83c3%2BipE7EiZSLMClsjaXSPrqONTt%2F4EVjC7K3kjeRbxVEx9F%2F8duS4XLMoODH4OlFUEP7ZD8AnQVribmE9F%2FGq2aait%2Bw0NBgqYg7vWW6NP10kq9EDVlkDX7BLJChdb3e%2Fr0Gu6h7axhkWL2OgYVGgBZOdi27P8lBiRwapfCx96YTZ4D1WMDthAVGTVGfOou%2FrfuLyT%2FqvpJhiPFk8I0%2Brf7meM3wa3Tg%2BLX%2FH%2Bz5I8cGkVp6Gq%2B3NCAfiWsktkiV5ADGKYTiAzZJSIAcqxIYoSNGlf2hIyU1gXw5apOYnDQKCekmyNjEibCWKGvXWj3%2B5P86zvmxq9qpjJxfBqdzpjbd%2Fc2Be1RuAJVHCYqPqeVL1VW8xvM%2FpK2vdyrg7j0e9yhoRePdwza90%2BJbCBgaih%2ByjjsP6NCVLDf95NrGcikEqlJX5qq1DYA8uDsVbAYQAcq%2B6DwmhUA7GDaYUWAudgJ4TLasDSCMrCH7e22Wopwhuw9rCnS7xKZFA0V1lmuQtl8gPDcNIrdI%2FTCHtsHSBjqkAekzMxUT5kxYzPmHtFuNsWvYd1Hbv5cSdDDeJhEBJuFVndFYKhQ8tSgHkpdOpB3sWzJHB2Nta88%2BmjreidOuTThOyFlg8NngM2QztEXJSGxyMxpF2x9%2FySdpTeS%2FExzShGfBIiUYrhQFI7YkYD4wm0zpjez%2FLUZdkIEYfYedWK4PBwou4NlQ%2FBQVMEy3WTXG10YAZudSwfgu7tB1wM6xFsgs22Tp&X-Amz-Signature=6cc2b64529ea842f8555284120d4cb6acd8f1a1c1ee2d88be41b5e9bff4ecfaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZMEZNXP%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWm6aTnjWysbUr7oETL2%2FeX%2Ffkvl22jDms4FweUDV7cgIhAOySm%2BAQYBAJAbt41tiyIW7B8LViEaamnC0QIiUmWG1NKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTv0NbksGAWbV9Qdgq3ANa%2FshMqFSmYCxnuNLFSNlhdM2AvVHPiZ5JFIE8PYnK4ZZzcuzNzuJ%2FZs50k5W5E7bomrqYhxkuEhfaB0PfVC6cyPLk5AmzkPaUiJXaYhONsc83c3%2BipE7EiZSLMClsjaXSPrqONTt%2F4EVjC7K3kjeRbxVEx9F%2F8duS4XLMoODH4OlFUEP7ZD8AnQVribmE9F%2FGq2aait%2Bw0NBgqYg7vWW6NP10kq9EDVlkDX7BLJChdb3e%2Fr0Gu6h7axhkWL2OgYVGgBZOdi27P8lBiRwapfCx96YTZ4D1WMDthAVGTVGfOou%2FrfuLyT%2FqvpJhiPFk8I0%2Brf7meM3wa3Tg%2BLX%2FH%2Bz5I8cGkVp6Gq%2B3NCAfiWsktkiV5ADGKYTiAzZJSIAcqxIYoSNGlf2hIyU1gXw5apOYnDQKCekmyNjEibCWKGvXWj3%2B5P86zvmxq9qpjJxfBqdzpjbd%2Fc2Be1RuAJVHCYqPqeVL1VW8xvM%2FpK2vdyrg7j0e9yhoRePdwza90%2BJbCBgaih%2ByjjsP6NCVLDf95NrGcikEqlJX5qq1DYA8uDsVbAYQAcq%2B6DwmhUA7GDaYUWAudgJ4TLasDSCMrCH7e22Wopwhuw9rCnS7xKZFA0V1lmuQtl8gPDcNIrdI%2FTCHtsHSBjqkAekzMxUT5kxYzPmHtFuNsWvYd1Hbv5cSdDDeJhEBJuFVndFYKhQ8tSgHkpdOpB3sWzJHB2Nta88%2BmjreidOuTThOyFlg8NngM2QztEXJSGxyMxpF2x9%2FySdpTeS%2FExzShGfBIiUYrhQFI7YkYD4wm0zpjez%2FLUZdkIEYfYedWK4PBwou4NlQ%2FBQVMEy3WTXG10YAZudSwfgu7tB1wM6xFsgs22Tp&X-Amz-Signature=a503f84e923780bdc8a53a3e08bb9bcd57b74fcdf1929c1d79310bcd8d246693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
