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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSSPMXXC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBncaF7kcTL53wr7kN0%2Be5ShQXq7hiRsIoD1ZIQjPPSMAiApspYom85vGa6ynkwa%2FC2uizkHzRhatWdL06EMs93lVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMrxpRCknVrxLg103EKtwDixrKSG85ltsOOiXNFw%2B12ahtUaVDv5vVqesG9j9JYIyV%2BrA%2F0pfvVuhCVuUJteOuPnch2Rm8LVncMJ5GZcrUpGHY2uROpf%2FUoGNTLX42aO2xSrO2iDcTgRgQbMJh%2F%2By%2FYskmE4iypVkN3mQ3UeovdpVZUuIbf9yplDtyJ%2FwPKPkYZiT9y6E5TLKK%2FqIdpSXsRJz238BglfCJTwdZDo0KYVNRWsQtoM0atwny5hOzjDk%2FyWLZdoVLh04RRp6cbqKT5ohqPvWBccSrBLvgSSZnLX8t8LfO%2FlrP5aTEp%2Bcum7fWohHu6NjGW4ZxA5LSz19RPE%2Fo4m8A%2FE2Smi141rxRffCgKUN8O5vyPwDBGC9Cf%2FkhW3TijRaVG6BMkttnU1GCrrIf7yFflRumVQBeYYZD5WqCWB5mvHUwJ65TIJMcXT63aNS2zOnCvZqVRyKis0t8qnX19WFSSPr3UTIK1ruMFM56SW6q4c%2F7pil7Bq8K3Ulix8Mah1kFYbNxWHikoAS0jZ1sdf2BO3uIv7o4L9yVe6p6hciDdnbbhWIVpTzMTPMeczTREgcB80QWUA2vVIm0Lg8H5MGA307LIpvKqSGCadRMMaOjRMCzRoXX53xbSzbEVecCk7J3aNHnytMwxdb6vwY6pgEFlRe7wNxkyyPP8hJK4U89%2FGGCx7j2ljksPHx9CF5Ah5D7HnVGaXE0TOyjlW55%2FZc3A6BFsyax0iOPRuBCXDiFQ2V%2FAoh2JaIAe7sKEQ67dPSYF3xkEHPK9jqZDbWD4eSrWG4Kd3UtGFUy0%2Fl8kNbD7U4zNFlvflpByCW8KYoOowBxSuTkSp4CTsHDNYYkIyVgPDgSv0DcFtJkr1SeC7siYD0kqpkh&X-Amz-Signature=5883f2e9f54be6cd53835af89caf6ee99f55f2a808f611e2cf928eeb65e3f7ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSSPMXXC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBncaF7kcTL53wr7kN0%2Be5ShQXq7hiRsIoD1ZIQjPPSMAiApspYom85vGa6ynkwa%2FC2uizkHzRhatWdL06EMs93lVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMrxpRCknVrxLg103EKtwDixrKSG85ltsOOiXNFw%2B12ahtUaVDv5vVqesG9j9JYIyV%2BrA%2F0pfvVuhCVuUJteOuPnch2Rm8LVncMJ5GZcrUpGHY2uROpf%2FUoGNTLX42aO2xSrO2iDcTgRgQbMJh%2F%2By%2FYskmE4iypVkN3mQ3UeovdpVZUuIbf9yplDtyJ%2FwPKPkYZiT9y6E5TLKK%2FqIdpSXsRJz238BglfCJTwdZDo0KYVNRWsQtoM0atwny5hOzjDk%2FyWLZdoVLh04RRp6cbqKT5ohqPvWBccSrBLvgSSZnLX8t8LfO%2FlrP5aTEp%2Bcum7fWohHu6NjGW4ZxA5LSz19RPE%2Fo4m8A%2FE2Smi141rxRffCgKUN8O5vyPwDBGC9Cf%2FkhW3TijRaVG6BMkttnU1GCrrIf7yFflRumVQBeYYZD5WqCWB5mvHUwJ65TIJMcXT63aNS2zOnCvZqVRyKis0t8qnX19WFSSPr3UTIK1ruMFM56SW6q4c%2F7pil7Bq8K3Ulix8Mah1kFYbNxWHikoAS0jZ1sdf2BO3uIv7o4L9yVe6p6hciDdnbbhWIVpTzMTPMeczTREgcB80QWUA2vVIm0Lg8H5MGA307LIpvKqSGCadRMMaOjRMCzRoXX53xbSzbEVecCk7J3aNHnytMwxdb6vwY6pgEFlRe7wNxkyyPP8hJK4U89%2FGGCx7j2ljksPHx9CF5Ah5D7HnVGaXE0TOyjlW55%2FZc3A6BFsyax0iOPRuBCXDiFQ2V%2FAoh2JaIAe7sKEQ67dPSYF3xkEHPK9jqZDbWD4eSrWG4Kd3UtGFUy0%2Fl8kNbD7U4zNFlvflpByCW8KYoOowBxSuTkSp4CTsHDNYYkIyVgPDgSv0DcFtJkr1SeC7siYD0kqpkh&X-Amz-Signature=e8ada5122fe38057e4f6232522bce6fbe099a336edcfdde28529746024f7595f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSSPMXXC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBncaF7kcTL53wr7kN0%2Be5ShQXq7hiRsIoD1ZIQjPPSMAiApspYom85vGa6ynkwa%2FC2uizkHzRhatWdL06EMs93lVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMrxpRCknVrxLg103EKtwDixrKSG85ltsOOiXNFw%2B12ahtUaVDv5vVqesG9j9JYIyV%2BrA%2F0pfvVuhCVuUJteOuPnch2Rm8LVncMJ5GZcrUpGHY2uROpf%2FUoGNTLX42aO2xSrO2iDcTgRgQbMJh%2F%2By%2FYskmE4iypVkN3mQ3UeovdpVZUuIbf9yplDtyJ%2FwPKPkYZiT9y6E5TLKK%2FqIdpSXsRJz238BglfCJTwdZDo0KYVNRWsQtoM0atwny5hOzjDk%2FyWLZdoVLh04RRp6cbqKT5ohqPvWBccSrBLvgSSZnLX8t8LfO%2FlrP5aTEp%2Bcum7fWohHu6NjGW4ZxA5LSz19RPE%2Fo4m8A%2FE2Smi141rxRffCgKUN8O5vyPwDBGC9Cf%2FkhW3TijRaVG6BMkttnU1GCrrIf7yFflRumVQBeYYZD5WqCWB5mvHUwJ65TIJMcXT63aNS2zOnCvZqVRyKis0t8qnX19WFSSPr3UTIK1ruMFM56SW6q4c%2F7pil7Bq8K3Ulix8Mah1kFYbNxWHikoAS0jZ1sdf2BO3uIv7o4L9yVe6p6hciDdnbbhWIVpTzMTPMeczTREgcB80QWUA2vVIm0Lg8H5MGA307LIpvKqSGCadRMMaOjRMCzRoXX53xbSzbEVecCk7J3aNHnytMwxdb6vwY6pgEFlRe7wNxkyyPP8hJK4U89%2FGGCx7j2ljksPHx9CF5Ah5D7HnVGaXE0TOyjlW55%2FZc3A6BFsyax0iOPRuBCXDiFQ2V%2FAoh2JaIAe7sKEQ67dPSYF3xkEHPK9jqZDbWD4eSrWG4Kd3UtGFUy0%2Fl8kNbD7U4zNFlvflpByCW8KYoOowBxSuTkSp4CTsHDNYYkIyVgPDgSv0DcFtJkr1SeC7siYD0kqpkh&X-Amz-Signature=e645260c52b5a8685ce61972876998ee982de0145adc164fdaff55871ba0b2f5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSSPMXXC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBncaF7kcTL53wr7kN0%2Be5ShQXq7hiRsIoD1ZIQjPPSMAiApspYom85vGa6ynkwa%2FC2uizkHzRhatWdL06EMs93lVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMrxpRCknVrxLg103EKtwDixrKSG85ltsOOiXNFw%2B12ahtUaVDv5vVqesG9j9JYIyV%2BrA%2F0pfvVuhCVuUJteOuPnch2Rm8LVncMJ5GZcrUpGHY2uROpf%2FUoGNTLX42aO2xSrO2iDcTgRgQbMJh%2F%2By%2FYskmE4iypVkN3mQ3UeovdpVZUuIbf9yplDtyJ%2FwPKPkYZiT9y6E5TLKK%2FqIdpSXsRJz238BglfCJTwdZDo0KYVNRWsQtoM0atwny5hOzjDk%2FyWLZdoVLh04RRp6cbqKT5ohqPvWBccSrBLvgSSZnLX8t8LfO%2FlrP5aTEp%2Bcum7fWohHu6NjGW4ZxA5LSz19RPE%2Fo4m8A%2FE2Smi141rxRffCgKUN8O5vyPwDBGC9Cf%2FkhW3TijRaVG6BMkttnU1GCrrIf7yFflRumVQBeYYZD5WqCWB5mvHUwJ65TIJMcXT63aNS2zOnCvZqVRyKis0t8qnX19WFSSPr3UTIK1ruMFM56SW6q4c%2F7pil7Bq8K3Ulix8Mah1kFYbNxWHikoAS0jZ1sdf2BO3uIv7o4L9yVe6p6hciDdnbbhWIVpTzMTPMeczTREgcB80QWUA2vVIm0Lg8H5MGA307LIpvKqSGCadRMMaOjRMCzRoXX53xbSzbEVecCk7J3aNHnytMwxdb6vwY6pgEFlRe7wNxkyyPP8hJK4U89%2FGGCx7j2ljksPHx9CF5Ah5D7HnVGaXE0TOyjlW55%2FZc3A6BFsyax0iOPRuBCXDiFQ2V%2FAoh2JaIAe7sKEQ67dPSYF3xkEHPK9jqZDbWD4eSrWG4Kd3UtGFUy0%2Fl8kNbD7U4zNFlvflpByCW8KYoOowBxSuTkSp4CTsHDNYYkIyVgPDgSv0DcFtJkr1SeC7siYD0kqpkh&X-Amz-Signature=55828cb4d4efbf65dce3b5ebe29720e5a8849aec839f9ed2c3b766ac44ff8a85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSSPMXXC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBncaF7kcTL53wr7kN0%2Be5ShQXq7hiRsIoD1ZIQjPPSMAiApspYom85vGa6ynkwa%2FC2uizkHzRhatWdL06EMs93lVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMrxpRCknVrxLg103EKtwDixrKSG85ltsOOiXNFw%2B12ahtUaVDv5vVqesG9j9JYIyV%2BrA%2F0pfvVuhCVuUJteOuPnch2Rm8LVncMJ5GZcrUpGHY2uROpf%2FUoGNTLX42aO2xSrO2iDcTgRgQbMJh%2F%2By%2FYskmE4iypVkN3mQ3UeovdpVZUuIbf9yplDtyJ%2FwPKPkYZiT9y6E5TLKK%2FqIdpSXsRJz238BglfCJTwdZDo0KYVNRWsQtoM0atwny5hOzjDk%2FyWLZdoVLh04RRp6cbqKT5ohqPvWBccSrBLvgSSZnLX8t8LfO%2FlrP5aTEp%2Bcum7fWohHu6NjGW4ZxA5LSz19RPE%2Fo4m8A%2FE2Smi141rxRffCgKUN8O5vyPwDBGC9Cf%2FkhW3TijRaVG6BMkttnU1GCrrIf7yFflRumVQBeYYZD5WqCWB5mvHUwJ65TIJMcXT63aNS2zOnCvZqVRyKis0t8qnX19WFSSPr3UTIK1ruMFM56SW6q4c%2F7pil7Bq8K3Ulix8Mah1kFYbNxWHikoAS0jZ1sdf2BO3uIv7o4L9yVe6p6hciDdnbbhWIVpTzMTPMeczTREgcB80QWUA2vVIm0Lg8H5MGA307LIpvKqSGCadRMMaOjRMCzRoXX53xbSzbEVecCk7J3aNHnytMwxdb6vwY6pgEFlRe7wNxkyyPP8hJK4U89%2FGGCx7j2ljksPHx9CF5Ah5D7HnVGaXE0TOyjlW55%2FZc3A6BFsyax0iOPRuBCXDiFQ2V%2FAoh2JaIAe7sKEQ67dPSYF3xkEHPK9jqZDbWD4eSrWG4Kd3UtGFUy0%2Fl8kNbD7U4zNFlvflpByCW8KYoOowBxSuTkSp4CTsHDNYYkIyVgPDgSv0DcFtJkr1SeC7siYD0kqpkh&X-Amz-Signature=362de2b913219bf946b95f6b8454bcad1a3ff52da84d3a255de93a84700191ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSSPMXXC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBncaF7kcTL53wr7kN0%2Be5ShQXq7hiRsIoD1ZIQjPPSMAiApspYom85vGa6ynkwa%2FC2uizkHzRhatWdL06EMs93lVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMrxpRCknVrxLg103EKtwDixrKSG85ltsOOiXNFw%2B12ahtUaVDv5vVqesG9j9JYIyV%2BrA%2F0pfvVuhCVuUJteOuPnch2Rm8LVncMJ5GZcrUpGHY2uROpf%2FUoGNTLX42aO2xSrO2iDcTgRgQbMJh%2F%2By%2FYskmE4iypVkN3mQ3UeovdpVZUuIbf9yplDtyJ%2FwPKPkYZiT9y6E5TLKK%2FqIdpSXsRJz238BglfCJTwdZDo0KYVNRWsQtoM0atwny5hOzjDk%2FyWLZdoVLh04RRp6cbqKT5ohqPvWBccSrBLvgSSZnLX8t8LfO%2FlrP5aTEp%2Bcum7fWohHu6NjGW4ZxA5LSz19RPE%2Fo4m8A%2FE2Smi141rxRffCgKUN8O5vyPwDBGC9Cf%2FkhW3TijRaVG6BMkttnU1GCrrIf7yFflRumVQBeYYZD5WqCWB5mvHUwJ65TIJMcXT63aNS2zOnCvZqVRyKis0t8qnX19WFSSPr3UTIK1ruMFM56SW6q4c%2F7pil7Bq8K3Ulix8Mah1kFYbNxWHikoAS0jZ1sdf2BO3uIv7o4L9yVe6p6hciDdnbbhWIVpTzMTPMeczTREgcB80QWUA2vVIm0Lg8H5MGA307LIpvKqSGCadRMMaOjRMCzRoXX53xbSzbEVecCk7J3aNHnytMwxdb6vwY6pgEFlRe7wNxkyyPP8hJK4U89%2FGGCx7j2ljksPHx9CF5Ah5D7HnVGaXE0TOyjlW55%2FZc3A6BFsyax0iOPRuBCXDiFQ2V%2FAoh2JaIAe7sKEQ67dPSYF3xkEHPK9jqZDbWD4eSrWG4Kd3UtGFUy0%2Fl8kNbD7U4zNFlvflpByCW8KYoOowBxSuTkSp4CTsHDNYYkIyVgPDgSv0DcFtJkr1SeC7siYD0kqpkh&X-Amz-Signature=4aaa39b4da977aa6d2c84b5359bf30ad6aa1d249f1c032ed7779e95b0332914f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSSPMXXC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBncaF7kcTL53wr7kN0%2Be5ShQXq7hiRsIoD1ZIQjPPSMAiApspYom85vGa6ynkwa%2FC2uizkHzRhatWdL06EMs93lVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMrxpRCknVrxLg103EKtwDixrKSG85ltsOOiXNFw%2B12ahtUaVDv5vVqesG9j9JYIyV%2BrA%2F0pfvVuhCVuUJteOuPnch2Rm8LVncMJ5GZcrUpGHY2uROpf%2FUoGNTLX42aO2xSrO2iDcTgRgQbMJh%2F%2By%2FYskmE4iypVkN3mQ3UeovdpVZUuIbf9yplDtyJ%2FwPKPkYZiT9y6E5TLKK%2FqIdpSXsRJz238BglfCJTwdZDo0KYVNRWsQtoM0atwny5hOzjDk%2FyWLZdoVLh04RRp6cbqKT5ohqPvWBccSrBLvgSSZnLX8t8LfO%2FlrP5aTEp%2Bcum7fWohHu6NjGW4ZxA5LSz19RPE%2Fo4m8A%2FE2Smi141rxRffCgKUN8O5vyPwDBGC9Cf%2FkhW3TijRaVG6BMkttnU1GCrrIf7yFflRumVQBeYYZD5WqCWB5mvHUwJ65TIJMcXT63aNS2zOnCvZqVRyKis0t8qnX19WFSSPr3UTIK1ruMFM56SW6q4c%2F7pil7Bq8K3Ulix8Mah1kFYbNxWHikoAS0jZ1sdf2BO3uIv7o4L9yVe6p6hciDdnbbhWIVpTzMTPMeczTREgcB80QWUA2vVIm0Lg8H5MGA307LIpvKqSGCadRMMaOjRMCzRoXX53xbSzbEVecCk7J3aNHnytMwxdb6vwY6pgEFlRe7wNxkyyPP8hJK4U89%2FGGCx7j2ljksPHx9CF5Ah5D7HnVGaXE0TOyjlW55%2FZc3A6BFsyax0iOPRuBCXDiFQ2V%2FAoh2JaIAe7sKEQ67dPSYF3xkEHPK9jqZDbWD4eSrWG4Kd3UtGFUy0%2Fl8kNbD7U4zNFlvflpByCW8KYoOowBxSuTkSp4CTsHDNYYkIyVgPDgSv0DcFtJkr1SeC7siYD0kqpkh&X-Amz-Signature=a2c91aaa4b8307def5c6b12164a1d81fd87690ee282c212f88e0da10f54d780b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSSPMXXC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBncaF7kcTL53wr7kN0%2Be5ShQXq7hiRsIoD1ZIQjPPSMAiApspYom85vGa6ynkwa%2FC2uizkHzRhatWdL06EMs93lVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMrxpRCknVrxLg103EKtwDixrKSG85ltsOOiXNFw%2B12ahtUaVDv5vVqesG9j9JYIyV%2BrA%2F0pfvVuhCVuUJteOuPnch2Rm8LVncMJ5GZcrUpGHY2uROpf%2FUoGNTLX42aO2xSrO2iDcTgRgQbMJh%2F%2By%2FYskmE4iypVkN3mQ3UeovdpVZUuIbf9yplDtyJ%2FwPKPkYZiT9y6E5TLKK%2FqIdpSXsRJz238BglfCJTwdZDo0KYVNRWsQtoM0atwny5hOzjDk%2FyWLZdoVLh04RRp6cbqKT5ohqPvWBccSrBLvgSSZnLX8t8LfO%2FlrP5aTEp%2Bcum7fWohHu6NjGW4ZxA5LSz19RPE%2Fo4m8A%2FE2Smi141rxRffCgKUN8O5vyPwDBGC9Cf%2FkhW3TijRaVG6BMkttnU1GCrrIf7yFflRumVQBeYYZD5WqCWB5mvHUwJ65TIJMcXT63aNS2zOnCvZqVRyKis0t8qnX19WFSSPr3UTIK1ruMFM56SW6q4c%2F7pil7Bq8K3Ulix8Mah1kFYbNxWHikoAS0jZ1sdf2BO3uIv7o4L9yVe6p6hciDdnbbhWIVpTzMTPMeczTREgcB80QWUA2vVIm0Lg8H5MGA307LIpvKqSGCadRMMaOjRMCzRoXX53xbSzbEVecCk7J3aNHnytMwxdb6vwY6pgEFlRe7wNxkyyPP8hJK4U89%2FGGCx7j2ljksPHx9CF5Ah5D7HnVGaXE0TOyjlW55%2FZc3A6BFsyax0iOPRuBCXDiFQ2V%2FAoh2JaIAe7sKEQ67dPSYF3xkEHPK9jqZDbWD4eSrWG4Kd3UtGFUy0%2Fl8kNbD7U4zNFlvflpByCW8KYoOowBxSuTkSp4CTsHDNYYkIyVgPDgSv0DcFtJkr1SeC7siYD0kqpkh&X-Amz-Signature=b522fdc8e7ab3aba92a5d6293e16739d48c8c279eab55a77150c4f33d9947107&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
