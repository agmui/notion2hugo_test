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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVK5ZJE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCpD0MAqqfu2CnIl1gQhihLbQ3C82Lp%2FSBMapWleIHHbAIhAIGncW1pP8dr5vh6kM4qniDcpAh7%2Be1VOQrkAQwz%2FA%2FhKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHLAkWgh5E6wpfB1Uq3AOLy2u8vBYCK7mRtm4B1zoj5p78u1Ek4AJFUCGWf13hhas8DbIyf2qNxp9KMmksjz3wLGilypRiDcOdEmjWvhgSDiiCuhjXEahfLA5k0uburNBTVMArwr5K29U7zuQmsOFaNBdAq54dzjSwO5tAYht6qlTNcP4A83RtnjbkemrvkdXud%2BZITRbGRMJ2Kh9%2BNxNUnLRbtDZ9owlNc8JhSRgF3%2BtIV%2B1HGRLH4wPJl5GJxVFUCG0f941IRUv%2FiqCV2c9wGiCy3BNP7sjBBC1R2YGDh0JU8Hn9NoVCYrAVcyI%2BDkmYnQwBmiPtJISEq08k892J9ppOGcOOewehWLLRfxPoSIk%2FkR4p0dwtUUb%2BbWVnGL2GxE1HwDOWBxkFTFGunvnvwrAz3N4yqYLgSeA4iqId%2BCPRsveOlzV2TKeXe6MrZRINBEwJYvZHY1L1Vyv5dzVt%2B4vBs08IFlZw2SqLF%2FlU7dBraJLXOXoBTK%2BbT%2FgCDl%2F4nppMUYb%2Fxc8vl3RykP98jtrsGvAVsowUXZwmPSeItsfOpNFqGFYpJ1DmPBnslnxsoP5kVIyTrNV%2BnwboO3i7kSl78vqvKKkRXHTz1%2B2QxG34QoFLkW21A%2BdmTBKiKB45viDCkMBa1ZoUxTDGrNPABjqkASL4MSBuTZZRPOhc2Gs4l9vTgzNBGay3fQn9kWmYVTVqrgydkGhYZLvzeZz1PYckVjZIhJ5zWND2BIm28BLPwyddOAMb6ztze6qiWJLHgaL18khUqhFtHVJTUFFNfnvLcAd8%2FNC0BMLO42mnHehVZruNSKr7TjQpQq3337zF6MUXfXjh31AWEfQhQANNt7necI28k%2B8jWpeW8liT2wlN30SHzB2a&X-Amz-Signature=a1d39d7a074e8ed5253350e8756f8a52ae78beb60c545d908378123f3672ee51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVK5ZJE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCpD0MAqqfu2CnIl1gQhihLbQ3C82Lp%2FSBMapWleIHHbAIhAIGncW1pP8dr5vh6kM4qniDcpAh7%2Be1VOQrkAQwz%2FA%2FhKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHLAkWgh5E6wpfB1Uq3AOLy2u8vBYCK7mRtm4B1zoj5p78u1Ek4AJFUCGWf13hhas8DbIyf2qNxp9KMmksjz3wLGilypRiDcOdEmjWvhgSDiiCuhjXEahfLA5k0uburNBTVMArwr5K29U7zuQmsOFaNBdAq54dzjSwO5tAYht6qlTNcP4A83RtnjbkemrvkdXud%2BZITRbGRMJ2Kh9%2BNxNUnLRbtDZ9owlNc8JhSRgF3%2BtIV%2B1HGRLH4wPJl5GJxVFUCG0f941IRUv%2FiqCV2c9wGiCy3BNP7sjBBC1R2YGDh0JU8Hn9NoVCYrAVcyI%2BDkmYnQwBmiPtJISEq08k892J9ppOGcOOewehWLLRfxPoSIk%2FkR4p0dwtUUb%2BbWVnGL2GxE1HwDOWBxkFTFGunvnvwrAz3N4yqYLgSeA4iqId%2BCPRsveOlzV2TKeXe6MrZRINBEwJYvZHY1L1Vyv5dzVt%2B4vBs08IFlZw2SqLF%2FlU7dBraJLXOXoBTK%2BbT%2FgCDl%2F4nppMUYb%2Fxc8vl3RykP98jtrsGvAVsowUXZwmPSeItsfOpNFqGFYpJ1DmPBnslnxsoP5kVIyTrNV%2BnwboO3i7kSl78vqvKKkRXHTz1%2B2QxG34QoFLkW21A%2BdmTBKiKB45viDCkMBa1ZoUxTDGrNPABjqkASL4MSBuTZZRPOhc2Gs4l9vTgzNBGay3fQn9kWmYVTVqrgydkGhYZLvzeZz1PYckVjZIhJ5zWND2BIm28BLPwyddOAMb6ztze6qiWJLHgaL18khUqhFtHVJTUFFNfnvLcAd8%2FNC0BMLO42mnHehVZruNSKr7TjQpQq3337zF6MUXfXjh31AWEfQhQANNt7necI28k%2B8jWpeW8liT2wlN30SHzB2a&X-Amz-Signature=460cc64ec43f65b4b82b99b8268490afdc50a81b8b8d51f916375654cc8303e0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVK5ZJE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCpD0MAqqfu2CnIl1gQhihLbQ3C82Lp%2FSBMapWleIHHbAIhAIGncW1pP8dr5vh6kM4qniDcpAh7%2Be1VOQrkAQwz%2FA%2FhKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHLAkWgh5E6wpfB1Uq3AOLy2u8vBYCK7mRtm4B1zoj5p78u1Ek4AJFUCGWf13hhas8DbIyf2qNxp9KMmksjz3wLGilypRiDcOdEmjWvhgSDiiCuhjXEahfLA5k0uburNBTVMArwr5K29U7zuQmsOFaNBdAq54dzjSwO5tAYht6qlTNcP4A83RtnjbkemrvkdXud%2BZITRbGRMJ2Kh9%2BNxNUnLRbtDZ9owlNc8JhSRgF3%2BtIV%2B1HGRLH4wPJl5GJxVFUCG0f941IRUv%2FiqCV2c9wGiCy3BNP7sjBBC1R2YGDh0JU8Hn9NoVCYrAVcyI%2BDkmYnQwBmiPtJISEq08k892J9ppOGcOOewehWLLRfxPoSIk%2FkR4p0dwtUUb%2BbWVnGL2GxE1HwDOWBxkFTFGunvnvwrAz3N4yqYLgSeA4iqId%2BCPRsveOlzV2TKeXe6MrZRINBEwJYvZHY1L1Vyv5dzVt%2B4vBs08IFlZw2SqLF%2FlU7dBraJLXOXoBTK%2BbT%2FgCDl%2F4nppMUYb%2Fxc8vl3RykP98jtrsGvAVsowUXZwmPSeItsfOpNFqGFYpJ1DmPBnslnxsoP5kVIyTrNV%2BnwboO3i7kSl78vqvKKkRXHTz1%2B2QxG34QoFLkW21A%2BdmTBKiKB45viDCkMBa1ZoUxTDGrNPABjqkASL4MSBuTZZRPOhc2Gs4l9vTgzNBGay3fQn9kWmYVTVqrgydkGhYZLvzeZz1PYckVjZIhJ5zWND2BIm28BLPwyddOAMb6ztze6qiWJLHgaL18khUqhFtHVJTUFFNfnvLcAd8%2FNC0BMLO42mnHehVZruNSKr7TjQpQq3337zF6MUXfXjh31AWEfQhQANNt7necI28k%2B8jWpeW8liT2wlN30SHzB2a&X-Amz-Signature=2251424911015125dad2203c7d0d7361f10d92f32946a8023bf563e0e49a6fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVK5ZJE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCpD0MAqqfu2CnIl1gQhihLbQ3C82Lp%2FSBMapWleIHHbAIhAIGncW1pP8dr5vh6kM4qniDcpAh7%2Be1VOQrkAQwz%2FA%2FhKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHLAkWgh5E6wpfB1Uq3AOLy2u8vBYCK7mRtm4B1zoj5p78u1Ek4AJFUCGWf13hhas8DbIyf2qNxp9KMmksjz3wLGilypRiDcOdEmjWvhgSDiiCuhjXEahfLA5k0uburNBTVMArwr5K29U7zuQmsOFaNBdAq54dzjSwO5tAYht6qlTNcP4A83RtnjbkemrvkdXud%2BZITRbGRMJ2Kh9%2BNxNUnLRbtDZ9owlNc8JhSRgF3%2BtIV%2B1HGRLH4wPJl5GJxVFUCG0f941IRUv%2FiqCV2c9wGiCy3BNP7sjBBC1R2YGDh0JU8Hn9NoVCYrAVcyI%2BDkmYnQwBmiPtJISEq08k892J9ppOGcOOewehWLLRfxPoSIk%2FkR4p0dwtUUb%2BbWVnGL2GxE1HwDOWBxkFTFGunvnvwrAz3N4yqYLgSeA4iqId%2BCPRsveOlzV2TKeXe6MrZRINBEwJYvZHY1L1Vyv5dzVt%2B4vBs08IFlZw2SqLF%2FlU7dBraJLXOXoBTK%2BbT%2FgCDl%2F4nppMUYb%2Fxc8vl3RykP98jtrsGvAVsowUXZwmPSeItsfOpNFqGFYpJ1DmPBnslnxsoP5kVIyTrNV%2BnwboO3i7kSl78vqvKKkRXHTz1%2B2QxG34QoFLkW21A%2BdmTBKiKB45viDCkMBa1ZoUxTDGrNPABjqkASL4MSBuTZZRPOhc2Gs4l9vTgzNBGay3fQn9kWmYVTVqrgydkGhYZLvzeZz1PYckVjZIhJ5zWND2BIm28BLPwyddOAMb6ztze6qiWJLHgaL18khUqhFtHVJTUFFNfnvLcAd8%2FNC0BMLO42mnHehVZruNSKr7TjQpQq3337zF6MUXfXjh31AWEfQhQANNt7necI28k%2B8jWpeW8liT2wlN30SHzB2a&X-Amz-Signature=4ccf809a6ea13798c74754b4856f7e2c08dfbbcb1bbf53fbc4bac9f0cb1491ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVK5ZJE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCpD0MAqqfu2CnIl1gQhihLbQ3C82Lp%2FSBMapWleIHHbAIhAIGncW1pP8dr5vh6kM4qniDcpAh7%2Be1VOQrkAQwz%2FA%2FhKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHLAkWgh5E6wpfB1Uq3AOLy2u8vBYCK7mRtm4B1zoj5p78u1Ek4AJFUCGWf13hhas8DbIyf2qNxp9KMmksjz3wLGilypRiDcOdEmjWvhgSDiiCuhjXEahfLA5k0uburNBTVMArwr5K29U7zuQmsOFaNBdAq54dzjSwO5tAYht6qlTNcP4A83RtnjbkemrvkdXud%2BZITRbGRMJ2Kh9%2BNxNUnLRbtDZ9owlNc8JhSRgF3%2BtIV%2B1HGRLH4wPJl5GJxVFUCG0f941IRUv%2FiqCV2c9wGiCy3BNP7sjBBC1R2YGDh0JU8Hn9NoVCYrAVcyI%2BDkmYnQwBmiPtJISEq08k892J9ppOGcOOewehWLLRfxPoSIk%2FkR4p0dwtUUb%2BbWVnGL2GxE1HwDOWBxkFTFGunvnvwrAz3N4yqYLgSeA4iqId%2BCPRsveOlzV2TKeXe6MrZRINBEwJYvZHY1L1Vyv5dzVt%2B4vBs08IFlZw2SqLF%2FlU7dBraJLXOXoBTK%2BbT%2FgCDl%2F4nppMUYb%2Fxc8vl3RykP98jtrsGvAVsowUXZwmPSeItsfOpNFqGFYpJ1DmPBnslnxsoP5kVIyTrNV%2BnwboO3i7kSl78vqvKKkRXHTz1%2B2QxG34QoFLkW21A%2BdmTBKiKB45viDCkMBa1ZoUxTDGrNPABjqkASL4MSBuTZZRPOhc2Gs4l9vTgzNBGay3fQn9kWmYVTVqrgydkGhYZLvzeZz1PYckVjZIhJ5zWND2BIm28BLPwyddOAMb6ztze6qiWJLHgaL18khUqhFtHVJTUFFNfnvLcAd8%2FNC0BMLO42mnHehVZruNSKr7TjQpQq3337zF6MUXfXjh31AWEfQhQANNt7necI28k%2B8jWpeW8liT2wlN30SHzB2a&X-Amz-Signature=34ec274a7e389682674aa47fb94bb1e5cd00196682c25d434244d8a1593cb18d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVK5ZJE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCpD0MAqqfu2CnIl1gQhihLbQ3C82Lp%2FSBMapWleIHHbAIhAIGncW1pP8dr5vh6kM4qniDcpAh7%2Be1VOQrkAQwz%2FA%2FhKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHLAkWgh5E6wpfB1Uq3AOLy2u8vBYCK7mRtm4B1zoj5p78u1Ek4AJFUCGWf13hhas8DbIyf2qNxp9KMmksjz3wLGilypRiDcOdEmjWvhgSDiiCuhjXEahfLA5k0uburNBTVMArwr5K29U7zuQmsOFaNBdAq54dzjSwO5tAYht6qlTNcP4A83RtnjbkemrvkdXud%2BZITRbGRMJ2Kh9%2BNxNUnLRbtDZ9owlNc8JhSRgF3%2BtIV%2B1HGRLH4wPJl5GJxVFUCG0f941IRUv%2FiqCV2c9wGiCy3BNP7sjBBC1R2YGDh0JU8Hn9NoVCYrAVcyI%2BDkmYnQwBmiPtJISEq08k892J9ppOGcOOewehWLLRfxPoSIk%2FkR4p0dwtUUb%2BbWVnGL2GxE1HwDOWBxkFTFGunvnvwrAz3N4yqYLgSeA4iqId%2BCPRsveOlzV2TKeXe6MrZRINBEwJYvZHY1L1Vyv5dzVt%2B4vBs08IFlZw2SqLF%2FlU7dBraJLXOXoBTK%2BbT%2FgCDl%2F4nppMUYb%2Fxc8vl3RykP98jtrsGvAVsowUXZwmPSeItsfOpNFqGFYpJ1DmPBnslnxsoP5kVIyTrNV%2BnwboO3i7kSl78vqvKKkRXHTz1%2B2QxG34QoFLkW21A%2BdmTBKiKB45viDCkMBa1ZoUxTDGrNPABjqkASL4MSBuTZZRPOhc2Gs4l9vTgzNBGay3fQn9kWmYVTVqrgydkGhYZLvzeZz1PYckVjZIhJ5zWND2BIm28BLPwyddOAMb6ztze6qiWJLHgaL18khUqhFtHVJTUFFNfnvLcAd8%2FNC0BMLO42mnHehVZruNSKr7TjQpQq3337zF6MUXfXjh31AWEfQhQANNt7necI28k%2B8jWpeW8liT2wlN30SHzB2a&X-Amz-Signature=776b651587a0a7e1dfc19893a313df873d094c544bf70e9c391b637c6bd91553&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVK5ZJE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCpD0MAqqfu2CnIl1gQhihLbQ3C82Lp%2FSBMapWleIHHbAIhAIGncW1pP8dr5vh6kM4qniDcpAh7%2Be1VOQrkAQwz%2FA%2FhKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHLAkWgh5E6wpfB1Uq3AOLy2u8vBYCK7mRtm4B1zoj5p78u1Ek4AJFUCGWf13hhas8DbIyf2qNxp9KMmksjz3wLGilypRiDcOdEmjWvhgSDiiCuhjXEahfLA5k0uburNBTVMArwr5K29U7zuQmsOFaNBdAq54dzjSwO5tAYht6qlTNcP4A83RtnjbkemrvkdXud%2BZITRbGRMJ2Kh9%2BNxNUnLRbtDZ9owlNc8JhSRgF3%2BtIV%2B1HGRLH4wPJl5GJxVFUCG0f941IRUv%2FiqCV2c9wGiCy3BNP7sjBBC1R2YGDh0JU8Hn9NoVCYrAVcyI%2BDkmYnQwBmiPtJISEq08k892J9ppOGcOOewehWLLRfxPoSIk%2FkR4p0dwtUUb%2BbWVnGL2GxE1HwDOWBxkFTFGunvnvwrAz3N4yqYLgSeA4iqId%2BCPRsveOlzV2TKeXe6MrZRINBEwJYvZHY1L1Vyv5dzVt%2B4vBs08IFlZw2SqLF%2FlU7dBraJLXOXoBTK%2BbT%2FgCDl%2F4nppMUYb%2Fxc8vl3RykP98jtrsGvAVsowUXZwmPSeItsfOpNFqGFYpJ1DmPBnslnxsoP5kVIyTrNV%2BnwboO3i7kSl78vqvKKkRXHTz1%2B2QxG34QoFLkW21A%2BdmTBKiKB45viDCkMBa1ZoUxTDGrNPABjqkASL4MSBuTZZRPOhc2Gs4l9vTgzNBGay3fQn9kWmYVTVqrgydkGhYZLvzeZz1PYckVjZIhJ5zWND2BIm28BLPwyddOAMb6ztze6qiWJLHgaL18khUqhFtHVJTUFFNfnvLcAd8%2FNC0BMLO42mnHehVZruNSKr7TjQpQq3337zF6MUXfXjh31AWEfQhQANNt7necI28k%2B8jWpeW8liT2wlN30SHzB2a&X-Amz-Signature=e5aca0e128abf3f119ac77b6861538111f7011c0620f3952e90588bb66ebb634&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVK5ZJE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCpD0MAqqfu2CnIl1gQhihLbQ3C82Lp%2FSBMapWleIHHbAIhAIGncW1pP8dr5vh6kM4qniDcpAh7%2Be1VOQrkAQwz%2FA%2FhKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHLAkWgh5E6wpfB1Uq3AOLy2u8vBYCK7mRtm4B1zoj5p78u1Ek4AJFUCGWf13hhas8DbIyf2qNxp9KMmksjz3wLGilypRiDcOdEmjWvhgSDiiCuhjXEahfLA5k0uburNBTVMArwr5K29U7zuQmsOFaNBdAq54dzjSwO5tAYht6qlTNcP4A83RtnjbkemrvkdXud%2BZITRbGRMJ2Kh9%2BNxNUnLRbtDZ9owlNc8JhSRgF3%2BtIV%2B1HGRLH4wPJl5GJxVFUCG0f941IRUv%2FiqCV2c9wGiCy3BNP7sjBBC1R2YGDh0JU8Hn9NoVCYrAVcyI%2BDkmYnQwBmiPtJISEq08k892J9ppOGcOOewehWLLRfxPoSIk%2FkR4p0dwtUUb%2BbWVnGL2GxE1HwDOWBxkFTFGunvnvwrAz3N4yqYLgSeA4iqId%2BCPRsveOlzV2TKeXe6MrZRINBEwJYvZHY1L1Vyv5dzVt%2B4vBs08IFlZw2SqLF%2FlU7dBraJLXOXoBTK%2BbT%2FgCDl%2F4nppMUYb%2Fxc8vl3RykP98jtrsGvAVsowUXZwmPSeItsfOpNFqGFYpJ1DmPBnslnxsoP5kVIyTrNV%2BnwboO3i7kSl78vqvKKkRXHTz1%2B2QxG34QoFLkW21A%2BdmTBKiKB45viDCkMBa1ZoUxTDGrNPABjqkASL4MSBuTZZRPOhc2Gs4l9vTgzNBGay3fQn9kWmYVTVqrgydkGhYZLvzeZz1PYckVjZIhJ5zWND2BIm28BLPwyddOAMb6ztze6qiWJLHgaL18khUqhFtHVJTUFFNfnvLcAd8%2FNC0BMLO42mnHehVZruNSKr7TjQpQq3337zF6MUXfXjh31AWEfQhQANNt7necI28k%2B8jWpeW8liT2wlN30SHzB2a&X-Amz-Signature=4398d18e5c66b279ae8e21042e8e60841fb3faccdba7303ae58c198615fbae91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
