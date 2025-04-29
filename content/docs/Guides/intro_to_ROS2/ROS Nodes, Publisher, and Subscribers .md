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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6DFUCD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjewpvOCmLCbONYyN6MOpoa1EdXbmJ2DGv3uh53PPHmAiA7i1ZrwEV%2F%2F6fdYfMEfM5wlKKSekv%2B3F%2FlDM7GKZ8lTSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBB15vrnxNkj8zCJ%2FKtwD9YoawsuX9S%2BHrmAKlkmZXUIksQBXL%2BLl36wW8PXkfurUMHErMREmIGd11%2F8vp8yie16CCCAXA2iXx4I7%2BXt%2FtawMF4MNZJh5%2BLlfVQ3UYOho8yoRPoD6lzR%2Bgs9%2FJam%2BazsX49%2FdGB4vV3RsQjIRBAuMdodAuhV1MaMsjb%2FRvdNV1bGkXmuq1CmCsi9SQZYL4RyROy72SV2kV2PsFuSZIIPAPYvWvppmfOnS3Xc6tirpuywWw3jKVu58P4BcwXSh%2F70qyKXZIuvyX8jtm2t9w1vZeEo6QNNx4NQ0qPPbOu8LMdyx2iiQqiBERTAqCJ39zDLZ8hRulEoqTJ94quAeZso3OFUQh4pciP2yD%2FX1XtfnnDr2DMD%2FisaACQFzlmRdCGN78LWhp3XtypPxs4D9KaJKNODNUMxskGir6qNdWnFK54L48GCTq%2FHRmD4LZEkDB%2BXLyjnfLHYnibOCKX9Ei9Gzl%2BbZka%2BDsLX6TxCcC0V%2BJAt8330ys5Yd4IqG1emTQZWVy%2FW15KLALb4%2BZk2nxN7chmCGaGlZ7EdJwxzgdNj%2B9TiNnJiUIV%2Fjnl4y9qmPX6BKnhmS%2Fp%2BZGtarXTwntxSXvec6eHYXEk%2BcJhff8%2FahsDcOi895HXsRUl0wgb%2FAwAY6pgGufd6en%2F9kJBatzMEPRusAh4YH%2Ficb3cqjjtSurSPdah1VrcSx0t78DpybtMAp%2BBlBp944lVWoBYX2JQvMZOEmdZd7g5caslr3JSrrfsGjj3PqHxNr32AB336lXcd1gPXKgxuLgeKxzHG0c8PjPxSKD1i3d%2BSBmjjY5%2BNK652JZyU9DBVSBtVRAI0AzbcJyADJva%2Be5fKQy0v0AQkTSdWnDx0VxHgk&X-Amz-Signature=34aa7ec122196de12dc9a19ec177e97e86023651019676031ecf51f7d2417af7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6DFUCD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjewpvOCmLCbONYyN6MOpoa1EdXbmJ2DGv3uh53PPHmAiA7i1ZrwEV%2F%2F6fdYfMEfM5wlKKSekv%2B3F%2FlDM7GKZ8lTSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBB15vrnxNkj8zCJ%2FKtwD9YoawsuX9S%2BHrmAKlkmZXUIksQBXL%2BLl36wW8PXkfurUMHErMREmIGd11%2F8vp8yie16CCCAXA2iXx4I7%2BXt%2FtawMF4MNZJh5%2BLlfVQ3UYOho8yoRPoD6lzR%2Bgs9%2FJam%2BazsX49%2FdGB4vV3RsQjIRBAuMdodAuhV1MaMsjb%2FRvdNV1bGkXmuq1CmCsi9SQZYL4RyROy72SV2kV2PsFuSZIIPAPYvWvppmfOnS3Xc6tirpuywWw3jKVu58P4BcwXSh%2F70qyKXZIuvyX8jtm2t9w1vZeEo6QNNx4NQ0qPPbOu8LMdyx2iiQqiBERTAqCJ39zDLZ8hRulEoqTJ94quAeZso3OFUQh4pciP2yD%2FX1XtfnnDr2DMD%2FisaACQFzlmRdCGN78LWhp3XtypPxs4D9KaJKNODNUMxskGir6qNdWnFK54L48GCTq%2FHRmD4LZEkDB%2BXLyjnfLHYnibOCKX9Ei9Gzl%2BbZka%2BDsLX6TxCcC0V%2BJAt8330ys5Yd4IqG1emTQZWVy%2FW15KLALb4%2BZk2nxN7chmCGaGlZ7EdJwxzgdNj%2B9TiNnJiUIV%2Fjnl4y9qmPX6BKnhmS%2Fp%2BZGtarXTwntxSXvec6eHYXEk%2BcJhff8%2FahsDcOi895HXsRUl0wgb%2FAwAY6pgGufd6en%2F9kJBatzMEPRusAh4YH%2Ficb3cqjjtSurSPdah1VrcSx0t78DpybtMAp%2BBlBp944lVWoBYX2JQvMZOEmdZd7g5caslr3JSrrfsGjj3PqHxNr32AB336lXcd1gPXKgxuLgeKxzHG0c8PjPxSKD1i3d%2BSBmjjY5%2BNK652JZyU9DBVSBtVRAI0AzbcJyADJva%2Be5fKQy0v0AQkTSdWnDx0VxHgk&X-Amz-Signature=c62c0b467aef00cef0a9e156100be17f563a99ba605ee8c5d4685484ebcef350&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6DFUCD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjewpvOCmLCbONYyN6MOpoa1EdXbmJ2DGv3uh53PPHmAiA7i1ZrwEV%2F%2F6fdYfMEfM5wlKKSekv%2B3F%2FlDM7GKZ8lTSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBB15vrnxNkj8zCJ%2FKtwD9YoawsuX9S%2BHrmAKlkmZXUIksQBXL%2BLl36wW8PXkfurUMHErMREmIGd11%2F8vp8yie16CCCAXA2iXx4I7%2BXt%2FtawMF4MNZJh5%2BLlfVQ3UYOho8yoRPoD6lzR%2Bgs9%2FJam%2BazsX49%2FdGB4vV3RsQjIRBAuMdodAuhV1MaMsjb%2FRvdNV1bGkXmuq1CmCsi9SQZYL4RyROy72SV2kV2PsFuSZIIPAPYvWvppmfOnS3Xc6tirpuywWw3jKVu58P4BcwXSh%2F70qyKXZIuvyX8jtm2t9w1vZeEo6QNNx4NQ0qPPbOu8LMdyx2iiQqiBERTAqCJ39zDLZ8hRulEoqTJ94quAeZso3OFUQh4pciP2yD%2FX1XtfnnDr2DMD%2FisaACQFzlmRdCGN78LWhp3XtypPxs4D9KaJKNODNUMxskGir6qNdWnFK54L48GCTq%2FHRmD4LZEkDB%2BXLyjnfLHYnibOCKX9Ei9Gzl%2BbZka%2BDsLX6TxCcC0V%2BJAt8330ys5Yd4IqG1emTQZWVy%2FW15KLALb4%2BZk2nxN7chmCGaGlZ7EdJwxzgdNj%2B9TiNnJiUIV%2Fjnl4y9qmPX6BKnhmS%2Fp%2BZGtarXTwntxSXvec6eHYXEk%2BcJhff8%2FahsDcOi895HXsRUl0wgb%2FAwAY6pgGufd6en%2F9kJBatzMEPRusAh4YH%2Ficb3cqjjtSurSPdah1VrcSx0t78DpybtMAp%2BBlBp944lVWoBYX2JQvMZOEmdZd7g5caslr3JSrrfsGjj3PqHxNr32AB336lXcd1gPXKgxuLgeKxzHG0c8PjPxSKD1i3d%2BSBmjjY5%2BNK652JZyU9DBVSBtVRAI0AzbcJyADJva%2Be5fKQy0v0AQkTSdWnDx0VxHgk&X-Amz-Signature=e6387f87ceaa4fe6fc2a769b8b063925dc553b934c29affcf4e1e10b93adfb58&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6DFUCD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjewpvOCmLCbONYyN6MOpoa1EdXbmJ2DGv3uh53PPHmAiA7i1ZrwEV%2F%2F6fdYfMEfM5wlKKSekv%2B3F%2FlDM7GKZ8lTSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBB15vrnxNkj8zCJ%2FKtwD9YoawsuX9S%2BHrmAKlkmZXUIksQBXL%2BLl36wW8PXkfurUMHErMREmIGd11%2F8vp8yie16CCCAXA2iXx4I7%2BXt%2FtawMF4MNZJh5%2BLlfVQ3UYOho8yoRPoD6lzR%2Bgs9%2FJam%2BazsX49%2FdGB4vV3RsQjIRBAuMdodAuhV1MaMsjb%2FRvdNV1bGkXmuq1CmCsi9SQZYL4RyROy72SV2kV2PsFuSZIIPAPYvWvppmfOnS3Xc6tirpuywWw3jKVu58P4BcwXSh%2F70qyKXZIuvyX8jtm2t9w1vZeEo6QNNx4NQ0qPPbOu8LMdyx2iiQqiBERTAqCJ39zDLZ8hRulEoqTJ94quAeZso3OFUQh4pciP2yD%2FX1XtfnnDr2DMD%2FisaACQFzlmRdCGN78LWhp3XtypPxs4D9KaJKNODNUMxskGir6qNdWnFK54L48GCTq%2FHRmD4LZEkDB%2BXLyjnfLHYnibOCKX9Ei9Gzl%2BbZka%2BDsLX6TxCcC0V%2BJAt8330ys5Yd4IqG1emTQZWVy%2FW15KLALb4%2BZk2nxN7chmCGaGlZ7EdJwxzgdNj%2B9TiNnJiUIV%2Fjnl4y9qmPX6BKnhmS%2Fp%2BZGtarXTwntxSXvec6eHYXEk%2BcJhff8%2FahsDcOi895HXsRUl0wgb%2FAwAY6pgGufd6en%2F9kJBatzMEPRusAh4YH%2Ficb3cqjjtSurSPdah1VrcSx0t78DpybtMAp%2BBlBp944lVWoBYX2JQvMZOEmdZd7g5caslr3JSrrfsGjj3PqHxNr32AB336lXcd1gPXKgxuLgeKxzHG0c8PjPxSKD1i3d%2BSBmjjY5%2BNK652JZyU9DBVSBtVRAI0AzbcJyADJva%2Be5fKQy0v0AQkTSdWnDx0VxHgk&X-Amz-Signature=ced26225473a396ece14a8e91b7ae09eae8be3ff03fa5ac1f24ee848bd3c1c6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6DFUCD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjewpvOCmLCbONYyN6MOpoa1EdXbmJ2DGv3uh53PPHmAiA7i1ZrwEV%2F%2F6fdYfMEfM5wlKKSekv%2B3F%2FlDM7GKZ8lTSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBB15vrnxNkj8zCJ%2FKtwD9YoawsuX9S%2BHrmAKlkmZXUIksQBXL%2BLl36wW8PXkfurUMHErMREmIGd11%2F8vp8yie16CCCAXA2iXx4I7%2BXt%2FtawMF4MNZJh5%2BLlfVQ3UYOho8yoRPoD6lzR%2Bgs9%2FJam%2BazsX49%2FdGB4vV3RsQjIRBAuMdodAuhV1MaMsjb%2FRvdNV1bGkXmuq1CmCsi9SQZYL4RyROy72SV2kV2PsFuSZIIPAPYvWvppmfOnS3Xc6tirpuywWw3jKVu58P4BcwXSh%2F70qyKXZIuvyX8jtm2t9w1vZeEo6QNNx4NQ0qPPbOu8LMdyx2iiQqiBERTAqCJ39zDLZ8hRulEoqTJ94quAeZso3OFUQh4pciP2yD%2FX1XtfnnDr2DMD%2FisaACQFzlmRdCGN78LWhp3XtypPxs4D9KaJKNODNUMxskGir6qNdWnFK54L48GCTq%2FHRmD4LZEkDB%2BXLyjnfLHYnibOCKX9Ei9Gzl%2BbZka%2BDsLX6TxCcC0V%2BJAt8330ys5Yd4IqG1emTQZWVy%2FW15KLALb4%2BZk2nxN7chmCGaGlZ7EdJwxzgdNj%2B9TiNnJiUIV%2Fjnl4y9qmPX6BKnhmS%2Fp%2BZGtarXTwntxSXvec6eHYXEk%2BcJhff8%2FahsDcOi895HXsRUl0wgb%2FAwAY6pgGufd6en%2F9kJBatzMEPRusAh4YH%2Ficb3cqjjtSurSPdah1VrcSx0t78DpybtMAp%2BBlBp944lVWoBYX2JQvMZOEmdZd7g5caslr3JSrrfsGjj3PqHxNr32AB336lXcd1gPXKgxuLgeKxzHG0c8PjPxSKD1i3d%2BSBmjjY5%2BNK652JZyU9DBVSBtVRAI0AzbcJyADJva%2Be5fKQy0v0AQkTSdWnDx0VxHgk&X-Amz-Signature=7b4d99e8e1302d14273fb8debac67f07b7b2cbb49a8be5098421ac695be25637&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6DFUCD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjewpvOCmLCbONYyN6MOpoa1EdXbmJ2DGv3uh53PPHmAiA7i1ZrwEV%2F%2F6fdYfMEfM5wlKKSekv%2B3F%2FlDM7GKZ8lTSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBB15vrnxNkj8zCJ%2FKtwD9YoawsuX9S%2BHrmAKlkmZXUIksQBXL%2BLl36wW8PXkfurUMHErMREmIGd11%2F8vp8yie16CCCAXA2iXx4I7%2BXt%2FtawMF4MNZJh5%2BLlfVQ3UYOho8yoRPoD6lzR%2Bgs9%2FJam%2BazsX49%2FdGB4vV3RsQjIRBAuMdodAuhV1MaMsjb%2FRvdNV1bGkXmuq1CmCsi9SQZYL4RyROy72SV2kV2PsFuSZIIPAPYvWvppmfOnS3Xc6tirpuywWw3jKVu58P4BcwXSh%2F70qyKXZIuvyX8jtm2t9w1vZeEo6QNNx4NQ0qPPbOu8LMdyx2iiQqiBERTAqCJ39zDLZ8hRulEoqTJ94quAeZso3OFUQh4pciP2yD%2FX1XtfnnDr2DMD%2FisaACQFzlmRdCGN78LWhp3XtypPxs4D9KaJKNODNUMxskGir6qNdWnFK54L48GCTq%2FHRmD4LZEkDB%2BXLyjnfLHYnibOCKX9Ei9Gzl%2BbZka%2BDsLX6TxCcC0V%2BJAt8330ys5Yd4IqG1emTQZWVy%2FW15KLALb4%2BZk2nxN7chmCGaGlZ7EdJwxzgdNj%2B9TiNnJiUIV%2Fjnl4y9qmPX6BKnhmS%2Fp%2BZGtarXTwntxSXvec6eHYXEk%2BcJhff8%2FahsDcOi895HXsRUl0wgb%2FAwAY6pgGufd6en%2F9kJBatzMEPRusAh4YH%2Ficb3cqjjtSurSPdah1VrcSx0t78DpybtMAp%2BBlBp944lVWoBYX2JQvMZOEmdZd7g5caslr3JSrrfsGjj3PqHxNr32AB336lXcd1gPXKgxuLgeKxzHG0c8PjPxSKD1i3d%2BSBmjjY5%2BNK652JZyU9DBVSBtVRAI0AzbcJyADJva%2Be5fKQy0v0AQkTSdWnDx0VxHgk&X-Amz-Signature=6edfa1e049a4c243ef93a3570a3e6ba6e3b92a3a486cf3526676c51f4eee0faf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6DFUCD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjewpvOCmLCbONYyN6MOpoa1EdXbmJ2DGv3uh53PPHmAiA7i1ZrwEV%2F%2F6fdYfMEfM5wlKKSekv%2B3F%2FlDM7GKZ8lTSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBB15vrnxNkj8zCJ%2FKtwD9YoawsuX9S%2BHrmAKlkmZXUIksQBXL%2BLl36wW8PXkfurUMHErMREmIGd11%2F8vp8yie16CCCAXA2iXx4I7%2BXt%2FtawMF4MNZJh5%2BLlfVQ3UYOho8yoRPoD6lzR%2Bgs9%2FJam%2BazsX49%2FdGB4vV3RsQjIRBAuMdodAuhV1MaMsjb%2FRvdNV1bGkXmuq1CmCsi9SQZYL4RyROy72SV2kV2PsFuSZIIPAPYvWvppmfOnS3Xc6tirpuywWw3jKVu58P4BcwXSh%2F70qyKXZIuvyX8jtm2t9w1vZeEo6QNNx4NQ0qPPbOu8LMdyx2iiQqiBERTAqCJ39zDLZ8hRulEoqTJ94quAeZso3OFUQh4pciP2yD%2FX1XtfnnDr2DMD%2FisaACQFzlmRdCGN78LWhp3XtypPxs4D9KaJKNODNUMxskGir6qNdWnFK54L48GCTq%2FHRmD4LZEkDB%2BXLyjnfLHYnibOCKX9Ei9Gzl%2BbZka%2BDsLX6TxCcC0V%2BJAt8330ys5Yd4IqG1emTQZWVy%2FW15KLALb4%2BZk2nxN7chmCGaGlZ7EdJwxzgdNj%2B9TiNnJiUIV%2Fjnl4y9qmPX6BKnhmS%2Fp%2BZGtarXTwntxSXvec6eHYXEk%2BcJhff8%2FahsDcOi895HXsRUl0wgb%2FAwAY6pgGufd6en%2F9kJBatzMEPRusAh4YH%2Ficb3cqjjtSurSPdah1VrcSx0t78DpybtMAp%2BBlBp944lVWoBYX2JQvMZOEmdZd7g5caslr3JSrrfsGjj3PqHxNr32AB336lXcd1gPXKgxuLgeKxzHG0c8PjPxSKD1i3d%2BSBmjjY5%2BNK652JZyU9DBVSBtVRAI0AzbcJyADJva%2Be5fKQy0v0AQkTSdWnDx0VxHgk&X-Amz-Signature=dc3536787e0d82916ef1027d112228f0b4798b3ff0eb4f9c11b46827538f9917&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6DFUCD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjewpvOCmLCbONYyN6MOpoa1EdXbmJ2DGv3uh53PPHmAiA7i1ZrwEV%2F%2F6fdYfMEfM5wlKKSekv%2B3F%2FlDM7GKZ8lTSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBB15vrnxNkj8zCJ%2FKtwD9YoawsuX9S%2BHrmAKlkmZXUIksQBXL%2BLl36wW8PXkfurUMHErMREmIGd11%2F8vp8yie16CCCAXA2iXx4I7%2BXt%2FtawMF4MNZJh5%2BLlfVQ3UYOho8yoRPoD6lzR%2Bgs9%2FJam%2BazsX49%2FdGB4vV3RsQjIRBAuMdodAuhV1MaMsjb%2FRvdNV1bGkXmuq1CmCsi9SQZYL4RyROy72SV2kV2PsFuSZIIPAPYvWvppmfOnS3Xc6tirpuywWw3jKVu58P4BcwXSh%2F70qyKXZIuvyX8jtm2t9w1vZeEo6QNNx4NQ0qPPbOu8LMdyx2iiQqiBERTAqCJ39zDLZ8hRulEoqTJ94quAeZso3OFUQh4pciP2yD%2FX1XtfnnDr2DMD%2FisaACQFzlmRdCGN78LWhp3XtypPxs4D9KaJKNODNUMxskGir6qNdWnFK54L48GCTq%2FHRmD4LZEkDB%2BXLyjnfLHYnibOCKX9Ei9Gzl%2BbZka%2BDsLX6TxCcC0V%2BJAt8330ys5Yd4IqG1emTQZWVy%2FW15KLALb4%2BZk2nxN7chmCGaGlZ7EdJwxzgdNj%2B9TiNnJiUIV%2Fjnl4y9qmPX6BKnhmS%2Fp%2BZGtarXTwntxSXvec6eHYXEk%2BcJhff8%2FahsDcOi895HXsRUl0wgb%2FAwAY6pgGufd6en%2F9kJBatzMEPRusAh4YH%2Ficb3cqjjtSurSPdah1VrcSx0t78DpybtMAp%2BBlBp944lVWoBYX2JQvMZOEmdZd7g5caslr3JSrrfsGjj3PqHxNr32AB336lXcd1gPXKgxuLgeKxzHG0c8PjPxSKD1i3d%2BSBmjjY5%2BNK652JZyU9DBVSBtVRAI0AzbcJyADJva%2Be5fKQy0v0AQkTSdWnDx0VxHgk&X-Amz-Signature=7748b63af15b40d477fa3c5bd291bf3f10292f40dece759aa93f0384fa362e21&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
