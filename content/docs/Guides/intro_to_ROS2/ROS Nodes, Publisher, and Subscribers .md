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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPR7OM6B%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsy8zSbmj5oLAiHhEWwSDOQkKFj2vbhhH9A4FY1zmyWQIhAI5QlC%2B9U%2F%2BI8cBzQ4QhGbXhV%2Bb7CJIG0EyVpvHa9djkKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh0hDMdxMrPa30BRAq3AOc%2BTjSMa6DQooaUM2kQQy3VS85jBR3q31awHUw%2BAyATWb%2FgXdd%2FjG47z54ID3iGUIUKWUTg2hraDbMSi3sUfkUpMIEUlf2JtZ2GOcm6bVfzNhfDf%2Bb8x3pHN8yB%2B5csucrcDEl5n9AEDpU9Ikizr178gkRpAd8RG1aDPVhsi7YmACv6d2YqhGMDD%2BHjwY2J9NRhGpDBr2GkgLWbr6crpsbzUcFSfsL6uuTBjJWiqSXy0z8FS%2FXmfM8wMKGkBM9PJOkkDsO005Ki%2FHrDyrFfhfkPvyZRmcC8n%2FDGTiL1SWKPPbFA5fhAyjT6ZsZjbUkwh79VSR9RusT2ap4bKdWmDSZNQ2k9t7r28myWFNxizS%2BrQtUsHBtMWhPbz5BlNNhABI04GM%2FAHp4mGdi%2F%2B2vf%2FoZtVkdjfd7NRJ7ZB6elqx8VK8BdGNuIrwERP2K1lx8cfgzP6bCw%2FtfRAy4wDgOsk1yAHom%2FzOt9OsjkS4mlpj2imHhhfDGA59C4C8gEDs%2FicQn0Dmt6laJhE5AEfWoFIExHDcpotFHzy4wUgcYAxhQkhioC%2BELJs7OtVcsF%2BDwrdyRtp3d%2FXi0piL4rfgoStd2HWyJSekasUwNHtJOv9CnYFXpBq7wCMy3gSp6rjDb%2B5e%2BBjqkAab9XWxkD6Jo5icMH4GOmsyCL6LzY62hU1yIgPPW4CgolBeWCTzlDZDGVyDoss2c1x33MMyytRhbKZFo4YSciLKYFY7Rv8x4uCgH0cW7ZGB7%2FZW2AqvxkE46GoI1gl3uDSqnSfriYeaWAzRjrn3sFxBu6HEjha10sDBZ8itqyrGQnWjBL9oJNcF%2BbB3J6Ny2EZNQZGmGCWZX%2Bhc%2FtYl6oHOPlt2%2B&X-Amz-Signature=b915b716421a0c907dec7e6edb084f431dae711e47df2f713f7f4c2840d6ffa9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPR7OM6B%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsy8zSbmj5oLAiHhEWwSDOQkKFj2vbhhH9A4FY1zmyWQIhAI5QlC%2B9U%2F%2BI8cBzQ4QhGbXhV%2Bb7CJIG0EyVpvHa9djkKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh0hDMdxMrPa30BRAq3AOc%2BTjSMa6DQooaUM2kQQy3VS85jBR3q31awHUw%2BAyATWb%2FgXdd%2FjG47z54ID3iGUIUKWUTg2hraDbMSi3sUfkUpMIEUlf2JtZ2GOcm6bVfzNhfDf%2Bb8x3pHN8yB%2B5csucrcDEl5n9AEDpU9Ikizr178gkRpAd8RG1aDPVhsi7YmACv6d2YqhGMDD%2BHjwY2J9NRhGpDBr2GkgLWbr6crpsbzUcFSfsL6uuTBjJWiqSXy0z8FS%2FXmfM8wMKGkBM9PJOkkDsO005Ki%2FHrDyrFfhfkPvyZRmcC8n%2FDGTiL1SWKPPbFA5fhAyjT6ZsZjbUkwh79VSR9RusT2ap4bKdWmDSZNQ2k9t7r28myWFNxizS%2BrQtUsHBtMWhPbz5BlNNhABI04GM%2FAHp4mGdi%2F%2B2vf%2FoZtVkdjfd7NRJ7ZB6elqx8VK8BdGNuIrwERP2K1lx8cfgzP6bCw%2FtfRAy4wDgOsk1yAHom%2FzOt9OsjkS4mlpj2imHhhfDGA59C4C8gEDs%2FicQn0Dmt6laJhE5AEfWoFIExHDcpotFHzy4wUgcYAxhQkhioC%2BELJs7OtVcsF%2BDwrdyRtp3d%2FXi0piL4rfgoStd2HWyJSekasUwNHtJOv9CnYFXpBq7wCMy3gSp6rjDb%2B5e%2BBjqkAab9XWxkD6Jo5icMH4GOmsyCL6LzY62hU1yIgPPW4CgolBeWCTzlDZDGVyDoss2c1x33MMyytRhbKZFo4YSciLKYFY7Rv8x4uCgH0cW7ZGB7%2FZW2AqvxkE46GoI1gl3uDSqnSfriYeaWAzRjrn3sFxBu6HEjha10sDBZ8itqyrGQnWjBL9oJNcF%2BbB3J6Ny2EZNQZGmGCWZX%2Bhc%2FtYl6oHOPlt2%2B&X-Amz-Signature=d044876e78fea303c9e4e9214b06cde5fa2dd68c091a9efec7599094262f36af&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPR7OM6B%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsy8zSbmj5oLAiHhEWwSDOQkKFj2vbhhH9A4FY1zmyWQIhAI5QlC%2B9U%2F%2BI8cBzQ4QhGbXhV%2Bb7CJIG0EyVpvHa9djkKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh0hDMdxMrPa30BRAq3AOc%2BTjSMa6DQooaUM2kQQy3VS85jBR3q31awHUw%2BAyATWb%2FgXdd%2FjG47z54ID3iGUIUKWUTg2hraDbMSi3sUfkUpMIEUlf2JtZ2GOcm6bVfzNhfDf%2Bb8x3pHN8yB%2B5csucrcDEl5n9AEDpU9Ikizr178gkRpAd8RG1aDPVhsi7YmACv6d2YqhGMDD%2BHjwY2J9NRhGpDBr2GkgLWbr6crpsbzUcFSfsL6uuTBjJWiqSXy0z8FS%2FXmfM8wMKGkBM9PJOkkDsO005Ki%2FHrDyrFfhfkPvyZRmcC8n%2FDGTiL1SWKPPbFA5fhAyjT6ZsZjbUkwh79VSR9RusT2ap4bKdWmDSZNQ2k9t7r28myWFNxizS%2BrQtUsHBtMWhPbz5BlNNhABI04GM%2FAHp4mGdi%2F%2B2vf%2FoZtVkdjfd7NRJ7ZB6elqx8VK8BdGNuIrwERP2K1lx8cfgzP6bCw%2FtfRAy4wDgOsk1yAHom%2FzOt9OsjkS4mlpj2imHhhfDGA59C4C8gEDs%2FicQn0Dmt6laJhE5AEfWoFIExHDcpotFHzy4wUgcYAxhQkhioC%2BELJs7OtVcsF%2BDwrdyRtp3d%2FXi0piL4rfgoStd2HWyJSekasUwNHtJOv9CnYFXpBq7wCMy3gSp6rjDb%2B5e%2BBjqkAab9XWxkD6Jo5icMH4GOmsyCL6LzY62hU1yIgPPW4CgolBeWCTzlDZDGVyDoss2c1x33MMyytRhbKZFo4YSciLKYFY7Rv8x4uCgH0cW7ZGB7%2FZW2AqvxkE46GoI1gl3uDSqnSfriYeaWAzRjrn3sFxBu6HEjha10sDBZ8itqyrGQnWjBL9oJNcF%2BbB3J6Ny2EZNQZGmGCWZX%2Bhc%2FtYl6oHOPlt2%2B&X-Amz-Signature=fd9e91823419b0bc50a09cc133e20b8060308bf98b158c43b6e0bc0cad346c81&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPR7OM6B%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsy8zSbmj5oLAiHhEWwSDOQkKFj2vbhhH9A4FY1zmyWQIhAI5QlC%2B9U%2F%2BI8cBzQ4QhGbXhV%2Bb7CJIG0EyVpvHa9djkKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh0hDMdxMrPa30BRAq3AOc%2BTjSMa6DQooaUM2kQQy3VS85jBR3q31awHUw%2BAyATWb%2FgXdd%2FjG47z54ID3iGUIUKWUTg2hraDbMSi3sUfkUpMIEUlf2JtZ2GOcm6bVfzNhfDf%2Bb8x3pHN8yB%2B5csucrcDEl5n9AEDpU9Ikizr178gkRpAd8RG1aDPVhsi7YmACv6d2YqhGMDD%2BHjwY2J9NRhGpDBr2GkgLWbr6crpsbzUcFSfsL6uuTBjJWiqSXy0z8FS%2FXmfM8wMKGkBM9PJOkkDsO005Ki%2FHrDyrFfhfkPvyZRmcC8n%2FDGTiL1SWKPPbFA5fhAyjT6ZsZjbUkwh79VSR9RusT2ap4bKdWmDSZNQ2k9t7r28myWFNxizS%2BrQtUsHBtMWhPbz5BlNNhABI04GM%2FAHp4mGdi%2F%2B2vf%2FoZtVkdjfd7NRJ7ZB6elqx8VK8BdGNuIrwERP2K1lx8cfgzP6bCw%2FtfRAy4wDgOsk1yAHom%2FzOt9OsjkS4mlpj2imHhhfDGA59C4C8gEDs%2FicQn0Dmt6laJhE5AEfWoFIExHDcpotFHzy4wUgcYAxhQkhioC%2BELJs7OtVcsF%2BDwrdyRtp3d%2FXi0piL4rfgoStd2HWyJSekasUwNHtJOv9CnYFXpBq7wCMy3gSp6rjDb%2B5e%2BBjqkAab9XWxkD6Jo5icMH4GOmsyCL6LzY62hU1yIgPPW4CgolBeWCTzlDZDGVyDoss2c1x33MMyytRhbKZFo4YSciLKYFY7Rv8x4uCgH0cW7ZGB7%2FZW2AqvxkE46GoI1gl3uDSqnSfriYeaWAzRjrn3sFxBu6HEjha10sDBZ8itqyrGQnWjBL9oJNcF%2BbB3J6Ny2EZNQZGmGCWZX%2Bhc%2FtYl6oHOPlt2%2B&X-Amz-Signature=0443be4434ba1c8b1a6e7b4897dc4398f201bf50655b615c231b75fe0f913ea3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPR7OM6B%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsy8zSbmj5oLAiHhEWwSDOQkKFj2vbhhH9A4FY1zmyWQIhAI5QlC%2B9U%2F%2BI8cBzQ4QhGbXhV%2Bb7CJIG0EyVpvHa9djkKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh0hDMdxMrPa30BRAq3AOc%2BTjSMa6DQooaUM2kQQy3VS85jBR3q31awHUw%2BAyATWb%2FgXdd%2FjG47z54ID3iGUIUKWUTg2hraDbMSi3sUfkUpMIEUlf2JtZ2GOcm6bVfzNhfDf%2Bb8x3pHN8yB%2B5csucrcDEl5n9AEDpU9Ikizr178gkRpAd8RG1aDPVhsi7YmACv6d2YqhGMDD%2BHjwY2J9NRhGpDBr2GkgLWbr6crpsbzUcFSfsL6uuTBjJWiqSXy0z8FS%2FXmfM8wMKGkBM9PJOkkDsO005Ki%2FHrDyrFfhfkPvyZRmcC8n%2FDGTiL1SWKPPbFA5fhAyjT6ZsZjbUkwh79VSR9RusT2ap4bKdWmDSZNQ2k9t7r28myWFNxizS%2BrQtUsHBtMWhPbz5BlNNhABI04GM%2FAHp4mGdi%2F%2B2vf%2FoZtVkdjfd7NRJ7ZB6elqx8VK8BdGNuIrwERP2K1lx8cfgzP6bCw%2FtfRAy4wDgOsk1yAHom%2FzOt9OsjkS4mlpj2imHhhfDGA59C4C8gEDs%2FicQn0Dmt6laJhE5AEfWoFIExHDcpotFHzy4wUgcYAxhQkhioC%2BELJs7OtVcsF%2BDwrdyRtp3d%2FXi0piL4rfgoStd2HWyJSekasUwNHtJOv9CnYFXpBq7wCMy3gSp6rjDb%2B5e%2BBjqkAab9XWxkD6Jo5icMH4GOmsyCL6LzY62hU1yIgPPW4CgolBeWCTzlDZDGVyDoss2c1x33MMyytRhbKZFo4YSciLKYFY7Rv8x4uCgH0cW7ZGB7%2FZW2AqvxkE46GoI1gl3uDSqnSfriYeaWAzRjrn3sFxBu6HEjha10sDBZ8itqyrGQnWjBL9oJNcF%2BbB3J6Ny2EZNQZGmGCWZX%2Bhc%2FtYl6oHOPlt2%2B&X-Amz-Signature=1bd637a169ff8d1e59500c9ae282d014a314355dd81824d35a1e5015b12a20a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPR7OM6B%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsy8zSbmj5oLAiHhEWwSDOQkKFj2vbhhH9A4FY1zmyWQIhAI5QlC%2B9U%2F%2BI8cBzQ4QhGbXhV%2Bb7CJIG0EyVpvHa9djkKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh0hDMdxMrPa30BRAq3AOc%2BTjSMa6DQooaUM2kQQy3VS85jBR3q31awHUw%2BAyATWb%2FgXdd%2FjG47z54ID3iGUIUKWUTg2hraDbMSi3sUfkUpMIEUlf2JtZ2GOcm6bVfzNhfDf%2Bb8x3pHN8yB%2B5csucrcDEl5n9AEDpU9Ikizr178gkRpAd8RG1aDPVhsi7YmACv6d2YqhGMDD%2BHjwY2J9NRhGpDBr2GkgLWbr6crpsbzUcFSfsL6uuTBjJWiqSXy0z8FS%2FXmfM8wMKGkBM9PJOkkDsO005Ki%2FHrDyrFfhfkPvyZRmcC8n%2FDGTiL1SWKPPbFA5fhAyjT6ZsZjbUkwh79VSR9RusT2ap4bKdWmDSZNQ2k9t7r28myWFNxizS%2BrQtUsHBtMWhPbz5BlNNhABI04GM%2FAHp4mGdi%2F%2B2vf%2FoZtVkdjfd7NRJ7ZB6elqx8VK8BdGNuIrwERP2K1lx8cfgzP6bCw%2FtfRAy4wDgOsk1yAHom%2FzOt9OsjkS4mlpj2imHhhfDGA59C4C8gEDs%2FicQn0Dmt6laJhE5AEfWoFIExHDcpotFHzy4wUgcYAxhQkhioC%2BELJs7OtVcsF%2BDwrdyRtp3d%2FXi0piL4rfgoStd2HWyJSekasUwNHtJOv9CnYFXpBq7wCMy3gSp6rjDb%2B5e%2BBjqkAab9XWxkD6Jo5icMH4GOmsyCL6LzY62hU1yIgPPW4CgolBeWCTzlDZDGVyDoss2c1x33MMyytRhbKZFo4YSciLKYFY7Rv8x4uCgH0cW7ZGB7%2FZW2AqvxkE46GoI1gl3uDSqnSfriYeaWAzRjrn3sFxBu6HEjha10sDBZ8itqyrGQnWjBL9oJNcF%2BbB3J6Ny2EZNQZGmGCWZX%2Bhc%2FtYl6oHOPlt2%2B&X-Amz-Signature=9309dcceff6693795287126fe03d6949d527336cad52395ff7d489861e9abe4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPR7OM6B%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsy8zSbmj5oLAiHhEWwSDOQkKFj2vbhhH9A4FY1zmyWQIhAI5QlC%2B9U%2F%2BI8cBzQ4QhGbXhV%2Bb7CJIG0EyVpvHa9djkKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh0hDMdxMrPa30BRAq3AOc%2BTjSMa6DQooaUM2kQQy3VS85jBR3q31awHUw%2BAyATWb%2FgXdd%2FjG47z54ID3iGUIUKWUTg2hraDbMSi3sUfkUpMIEUlf2JtZ2GOcm6bVfzNhfDf%2Bb8x3pHN8yB%2B5csucrcDEl5n9AEDpU9Ikizr178gkRpAd8RG1aDPVhsi7YmACv6d2YqhGMDD%2BHjwY2J9NRhGpDBr2GkgLWbr6crpsbzUcFSfsL6uuTBjJWiqSXy0z8FS%2FXmfM8wMKGkBM9PJOkkDsO005Ki%2FHrDyrFfhfkPvyZRmcC8n%2FDGTiL1SWKPPbFA5fhAyjT6ZsZjbUkwh79VSR9RusT2ap4bKdWmDSZNQ2k9t7r28myWFNxizS%2BrQtUsHBtMWhPbz5BlNNhABI04GM%2FAHp4mGdi%2F%2B2vf%2FoZtVkdjfd7NRJ7ZB6elqx8VK8BdGNuIrwERP2K1lx8cfgzP6bCw%2FtfRAy4wDgOsk1yAHom%2FzOt9OsjkS4mlpj2imHhhfDGA59C4C8gEDs%2FicQn0Dmt6laJhE5AEfWoFIExHDcpotFHzy4wUgcYAxhQkhioC%2BELJs7OtVcsF%2BDwrdyRtp3d%2FXi0piL4rfgoStd2HWyJSekasUwNHtJOv9CnYFXpBq7wCMy3gSp6rjDb%2B5e%2BBjqkAab9XWxkD6Jo5icMH4GOmsyCL6LzY62hU1yIgPPW4CgolBeWCTzlDZDGVyDoss2c1x33MMyytRhbKZFo4YSciLKYFY7Rv8x4uCgH0cW7ZGB7%2FZW2AqvxkE46GoI1gl3uDSqnSfriYeaWAzRjrn3sFxBu6HEjha10sDBZ8itqyrGQnWjBL9oJNcF%2BbB3J6Ny2EZNQZGmGCWZX%2Bhc%2FtYl6oHOPlt2%2B&X-Amz-Signature=9da422183be5d19a6acfb3893303b2178f75ae247196711ed53fea012b336574&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPR7OM6B%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsy8zSbmj5oLAiHhEWwSDOQkKFj2vbhhH9A4FY1zmyWQIhAI5QlC%2B9U%2F%2BI8cBzQ4QhGbXhV%2Bb7CJIG0EyVpvHa9djkKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh0hDMdxMrPa30BRAq3AOc%2BTjSMa6DQooaUM2kQQy3VS85jBR3q31awHUw%2BAyATWb%2FgXdd%2FjG47z54ID3iGUIUKWUTg2hraDbMSi3sUfkUpMIEUlf2JtZ2GOcm6bVfzNhfDf%2Bb8x3pHN8yB%2B5csucrcDEl5n9AEDpU9Ikizr178gkRpAd8RG1aDPVhsi7YmACv6d2YqhGMDD%2BHjwY2J9NRhGpDBr2GkgLWbr6crpsbzUcFSfsL6uuTBjJWiqSXy0z8FS%2FXmfM8wMKGkBM9PJOkkDsO005Ki%2FHrDyrFfhfkPvyZRmcC8n%2FDGTiL1SWKPPbFA5fhAyjT6ZsZjbUkwh79VSR9RusT2ap4bKdWmDSZNQ2k9t7r28myWFNxizS%2BrQtUsHBtMWhPbz5BlNNhABI04GM%2FAHp4mGdi%2F%2B2vf%2FoZtVkdjfd7NRJ7ZB6elqx8VK8BdGNuIrwERP2K1lx8cfgzP6bCw%2FtfRAy4wDgOsk1yAHom%2FzOt9OsjkS4mlpj2imHhhfDGA59C4C8gEDs%2FicQn0Dmt6laJhE5AEfWoFIExHDcpotFHzy4wUgcYAxhQkhioC%2BELJs7OtVcsF%2BDwrdyRtp3d%2FXi0piL4rfgoStd2HWyJSekasUwNHtJOv9CnYFXpBq7wCMy3gSp6rjDb%2B5e%2BBjqkAab9XWxkD6Jo5icMH4GOmsyCL6LzY62hU1yIgPPW4CgolBeWCTzlDZDGVyDoss2c1x33MMyytRhbKZFo4YSciLKYFY7Rv8x4uCgH0cW7ZGB7%2FZW2AqvxkE46GoI1gl3uDSqnSfriYeaWAzRjrn3sFxBu6HEjha10sDBZ8itqyrGQnWjBL9oJNcF%2BbB3J6Ny2EZNQZGmGCWZX%2Bhc%2FtYl6oHOPlt2%2B&X-Amz-Signature=70e42e4f0200a75d0b63196a88cf15d1ead0aeed9a6f0744ec3c03cc753af778&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
