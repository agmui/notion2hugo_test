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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKU5IPJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3MMJle78xkIjqsbGjOSnofLnxORa2Oxx87OunUuX39AiBr6cf4xqmcVfpBPXyzLf8MHJUbagg4wBUSSIyVR96dEir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMabAyTAZ9P83wtrl5KtwDsZSiYpikFfKSBl525w0NicM1ZEeBGRMgXMLFxl4Wso1lwVGKaIDd03AT5Iw8q0S%2FLH2gd%2Bgzq4e2NCXfECIEYFaQR3gCMFIPhdh2%2BegjFA1D4eDJY%2B%2Fk62iHGJpBhTScaiLD%2Bo6e5HObhcqeOGSFaQXp63cs%2F1%2FuhcHXogTe0axeZDs02U56j4cYfgsWH7lPKa5StjsKMt8I0b6z1pdIl2qObenWR39ARo%2B2oCRTzv6C1bnkIWGsXC9ndt%2FUN2VqzJ6Dokr44SDWChX9fZg6pcJT%2F%2FRh4S1nOnbU8pbLR6rsWdAvPUt1RRcgXhCEgAZUPKmOPaAsYqeK7jDt%2FBOExV%2B83pnuynlcnMJBW8Gn1enwH57uA39TLMADPkP5ZJfRykZa95iuYsl%2BzvDuZVfAUr7HcqbIp9mUfit3mg9VBFQBtxOarkGFmzAOZpiCH5wA016nfr%2Fo1vhUoHHFyjulTz%2F5jstQYqLw8rcH%2BMU5G5jbW%2F03JnDkHYHHjxW%2FmqnS3imwAh3Tp5XvJVCKpDeApY0gRPjfQUCpl3tVNpswZrdnX24kECx48m47JMJeOpg0Pc%2FQtBGxisdoSYQQo7z536c9Uagg2M0T%2FPXHWJoA8tI63PVt1V3UNLBXZ7Qw3bevwAY6pgFka2pN%2BdtgKm4cie1lQA9UHZS0Nah8ZGTjRg0aJ2SVMjLs8XdvqkW3rgDlZ5Cx9VAcelL%2FhgpMOvxrrwCUL5pnGw%2Bvtk43kxCCqMdz0sgHKGvlPbILNNydfzUegEHePl4KAdhVomUOaHTtYUGTnArE5gvtR9mrNPkVewtDgA5jbkbubWR2%2F7v0c0VyJekjCGOE%2BpKF2qSzjyfEIhtNc0oJoCFsP5Xu&X-Amz-Signature=0f818d70a38a9f94c86d9dd80f0db13f2dcc16afaf9b14ea96233c01b9efb459&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKU5IPJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3MMJle78xkIjqsbGjOSnofLnxORa2Oxx87OunUuX39AiBr6cf4xqmcVfpBPXyzLf8MHJUbagg4wBUSSIyVR96dEir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMabAyTAZ9P83wtrl5KtwDsZSiYpikFfKSBl525w0NicM1ZEeBGRMgXMLFxl4Wso1lwVGKaIDd03AT5Iw8q0S%2FLH2gd%2Bgzq4e2NCXfECIEYFaQR3gCMFIPhdh2%2BegjFA1D4eDJY%2B%2Fk62iHGJpBhTScaiLD%2Bo6e5HObhcqeOGSFaQXp63cs%2F1%2FuhcHXogTe0axeZDs02U56j4cYfgsWH7lPKa5StjsKMt8I0b6z1pdIl2qObenWR39ARo%2B2oCRTzv6C1bnkIWGsXC9ndt%2FUN2VqzJ6Dokr44SDWChX9fZg6pcJT%2F%2FRh4S1nOnbU8pbLR6rsWdAvPUt1RRcgXhCEgAZUPKmOPaAsYqeK7jDt%2FBOExV%2B83pnuynlcnMJBW8Gn1enwH57uA39TLMADPkP5ZJfRykZa95iuYsl%2BzvDuZVfAUr7HcqbIp9mUfit3mg9VBFQBtxOarkGFmzAOZpiCH5wA016nfr%2Fo1vhUoHHFyjulTz%2F5jstQYqLw8rcH%2BMU5G5jbW%2F03JnDkHYHHjxW%2FmqnS3imwAh3Tp5XvJVCKpDeApY0gRPjfQUCpl3tVNpswZrdnX24kECx48m47JMJeOpg0Pc%2FQtBGxisdoSYQQo7z536c9Uagg2M0T%2FPXHWJoA8tI63PVt1V3UNLBXZ7Qw3bevwAY6pgFka2pN%2BdtgKm4cie1lQA9UHZS0Nah8ZGTjRg0aJ2SVMjLs8XdvqkW3rgDlZ5Cx9VAcelL%2FhgpMOvxrrwCUL5pnGw%2Bvtk43kxCCqMdz0sgHKGvlPbILNNydfzUegEHePl4KAdhVomUOaHTtYUGTnArE5gvtR9mrNPkVewtDgA5jbkbubWR2%2F7v0c0VyJekjCGOE%2BpKF2qSzjyfEIhtNc0oJoCFsP5Xu&X-Amz-Signature=db7e7913c9096304ab6694b3866cebb561449dd838708862025bc06234a8f1d6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKU5IPJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3MMJle78xkIjqsbGjOSnofLnxORa2Oxx87OunUuX39AiBr6cf4xqmcVfpBPXyzLf8MHJUbagg4wBUSSIyVR96dEir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMabAyTAZ9P83wtrl5KtwDsZSiYpikFfKSBl525w0NicM1ZEeBGRMgXMLFxl4Wso1lwVGKaIDd03AT5Iw8q0S%2FLH2gd%2Bgzq4e2NCXfECIEYFaQR3gCMFIPhdh2%2BegjFA1D4eDJY%2B%2Fk62iHGJpBhTScaiLD%2Bo6e5HObhcqeOGSFaQXp63cs%2F1%2FuhcHXogTe0axeZDs02U56j4cYfgsWH7lPKa5StjsKMt8I0b6z1pdIl2qObenWR39ARo%2B2oCRTzv6C1bnkIWGsXC9ndt%2FUN2VqzJ6Dokr44SDWChX9fZg6pcJT%2F%2FRh4S1nOnbU8pbLR6rsWdAvPUt1RRcgXhCEgAZUPKmOPaAsYqeK7jDt%2FBOExV%2B83pnuynlcnMJBW8Gn1enwH57uA39TLMADPkP5ZJfRykZa95iuYsl%2BzvDuZVfAUr7HcqbIp9mUfit3mg9VBFQBtxOarkGFmzAOZpiCH5wA016nfr%2Fo1vhUoHHFyjulTz%2F5jstQYqLw8rcH%2BMU5G5jbW%2F03JnDkHYHHjxW%2FmqnS3imwAh3Tp5XvJVCKpDeApY0gRPjfQUCpl3tVNpswZrdnX24kECx48m47JMJeOpg0Pc%2FQtBGxisdoSYQQo7z536c9Uagg2M0T%2FPXHWJoA8tI63PVt1V3UNLBXZ7Qw3bevwAY6pgFka2pN%2BdtgKm4cie1lQA9UHZS0Nah8ZGTjRg0aJ2SVMjLs8XdvqkW3rgDlZ5Cx9VAcelL%2FhgpMOvxrrwCUL5pnGw%2Bvtk43kxCCqMdz0sgHKGvlPbILNNydfzUegEHePl4KAdhVomUOaHTtYUGTnArE5gvtR9mrNPkVewtDgA5jbkbubWR2%2F7v0c0VyJekjCGOE%2BpKF2qSzjyfEIhtNc0oJoCFsP5Xu&X-Amz-Signature=a886f94a49a617c49d7373a323f4c626b716b1e0974f261f6462b97b213d1edf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKU5IPJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3MMJle78xkIjqsbGjOSnofLnxORa2Oxx87OunUuX39AiBr6cf4xqmcVfpBPXyzLf8MHJUbagg4wBUSSIyVR96dEir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMabAyTAZ9P83wtrl5KtwDsZSiYpikFfKSBl525w0NicM1ZEeBGRMgXMLFxl4Wso1lwVGKaIDd03AT5Iw8q0S%2FLH2gd%2Bgzq4e2NCXfECIEYFaQR3gCMFIPhdh2%2BegjFA1D4eDJY%2B%2Fk62iHGJpBhTScaiLD%2Bo6e5HObhcqeOGSFaQXp63cs%2F1%2FuhcHXogTe0axeZDs02U56j4cYfgsWH7lPKa5StjsKMt8I0b6z1pdIl2qObenWR39ARo%2B2oCRTzv6C1bnkIWGsXC9ndt%2FUN2VqzJ6Dokr44SDWChX9fZg6pcJT%2F%2FRh4S1nOnbU8pbLR6rsWdAvPUt1RRcgXhCEgAZUPKmOPaAsYqeK7jDt%2FBOExV%2B83pnuynlcnMJBW8Gn1enwH57uA39TLMADPkP5ZJfRykZa95iuYsl%2BzvDuZVfAUr7HcqbIp9mUfit3mg9VBFQBtxOarkGFmzAOZpiCH5wA016nfr%2Fo1vhUoHHFyjulTz%2F5jstQYqLw8rcH%2BMU5G5jbW%2F03JnDkHYHHjxW%2FmqnS3imwAh3Tp5XvJVCKpDeApY0gRPjfQUCpl3tVNpswZrdnX24kECx48m47JMJeOpg0Pc%2FQtBGxisdoSYQQo7z536c9Uagg2M0T%2FPXHWJoA8tI63PVt1V3UNLBXZ7Qw3bevwAY6pgFka2pN%2BdtgKm4cie1lQA9UHZS0Nah8ZGTjRg0aJ2SVMjLs8XdvqkW3rgDlZ5Cx9VAcelL%2FhgpMOvxrrwCUL5pnGw%2Bvtk43kxCCqMdz0sgHKGvlPbILNNydfzUegEHePl4KAdhVomUOaHTtYUGTnArE5gvtR9mrNPkVewtDgA5jbkbubWR2%2F7v0c0VyJekjCGOE%2BpKF2qSzjyfEIhtNc0oJoCFsP5Xu&X-Amz-Signature=8afcc3c4f4057ad7e380a34a4381035b26e198724a5d1ef5663ec606f6901155&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKU5IPJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3MMJle78xkIjqsbGjOSnofLnxORa2Oxx87OunUuX39AiBr6cf4xqmcVfpBPXyzLf8MHJUbagg4wBUSSIyVR96dEir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMabAyTAZ9P83wtrl5KtwDsZSiYpikFfKSBl525w0NicM1ZEeBGRMgXMLFxl4Wso1lwVGKaIDd03AT5Iw8q0S%2FLH2gd%2Bgzq4e2NCXfECIEYFaQR3gCMFIPhdh2%2BegjFA1D4eDJY%2B%2Fk62iHGJpBhTScaiLD%2Bo6e5HObhcqeOGSFaQXp63cs%2F1%2FuhcHXogTe0axeZDs02U56j4cYfgsWH7lPKa5StjsKMt8I0b6z1pdIl2qObenWR39ARo%2B2oCRTzv6C1bnkIWGsXC9ndt%2FUN2VqzJ6Dokr44SDWChX9fZg6pcJT%2F%2FRh4S1nOnbU8pbLR6rsWdAvPUt1RRcgXhCEgAZUPKmOPaAsYqeK7jDt%2FBOExV%2B83pnuynlcnMJBW8Gn1enwH57uA39TLMADPkP5ZJfRykZa95iuYsl%2BzvDuZVfAUr7HcqbIp9mUfit3mg9VBFQBtxOarkGFmzAOZpiCH5wA016nfr%2Fo1vhUoHHFyjulTz%2F5jstQYqLw8rcH%2BMU5G5jbW%2F03JnDkHYHHjxW%2FmqnS3imwAh3Tp5XvJVCKpDeApY0gRPjfQUCpl3tVNpswZrdnX24kECx48m47JMJeOpg0Pc%2FQtBGxisdoSYQQo7z536c9Uagg2M0T%2FPXHWJoA8tI63PVt1V3UNLBXZ7Qw3bevwAY6pgFka2pN%2BdtgKm4cie1lQA9UHZS0Nah8ZGTjRg0aJ2SVMjLs8XdvqkW3rgDlZ5Cx9VAcelL%2FhgpMOvxrrwCUL5pnGw%2Bvtk43kxCCqMdz0sgHKGvlPbILNNydfzUegEHePl4KAdhVomUOaHTtYUGTnArE5gvtR9mrNPkVewtDgA5jbkbubWR2%2F7v0c0VyJekjCGOE%2BpKF2qSzjyfEIhtNc0oJoCFsP5Xu&X-Amz-Signature=92b109d72d65a371304caf3afd312d6a4ce95def0e35ce672a804a8268bfbbfc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKU5IPJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3MMJle78xkIjqsbGjOSnofLnxORa2Oxx87OunUuX39AiBr6cf4xqmcVfpBPXyzLf8MHJUbagg4wBUSSIyVR96dEir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMabAyTAZ9P83wtrl5KtwDsZSiYpikFfKSBl525w0NicM1ZEeBGRMgXMLFxl4Wso1lwVGKaIDd03AT5Iw8q0S%2FLH2gd%2Bgzq4e2NCXfECIEYFaQR3gCMFIPhdh2%2BegjFA1D4eDJY%2B%2Fk62iHGJpBhTScaiLD%2Bo6e5HObhcqeOGSFaQXp63cs%2F1%2FuhcHXogTe0axeZDs02U56j4cYfgsWH7lPKa5StjsKMt8I0b6z1pdIl2qObenWR39ARo%2B2oCRTzv6C1bnkIWGsXC9ndt%2FUN2VqzJ6Dokr44SDWChX9fZg6pcJT%2F%2FRh4S1nOnbU8pbLR6rsWdAvPUt1RRcgXhCEgAZUPKmOPaAsYqeK7jDt%2FBOExV%2B83pnuynlcnMJBW8Gn1enwH57uA39TLMADPkP5ZJfRykZa95iuYsl%2BzvDuZVfAUr7HcqbIp9mUfit3mg9VBFQBtxOarkGFmzAOZpiCH5wA016nfr%2Fo1vhUoHHFyjulTz%2F5jstQYqLw8rcH%2BMU5G5jbW%2F03JnDkHYHHjxW%2FmqnS3imwAh3Tp5XvJVCKpDeApY0gRPjfQUCpl3tVNpswZrdnX24kECx48m47JMJeOpg0Pc%2FQtBGxisdoSYQQo7z536c9Uagg2M0T%2FPXHWJoA8tI63PVt1V3UNLBXZ7Qw3bevwAY6pgFka2pN%2BdtgKm4cie1lQA9UHZS0Nah8ZGTjRg0aJ2SVMjLs8XdvqkW3rgDlZ5Cx9VAcelL%2FhgpMOvxrrwCUL5pnGw%2Bvtk43kxCCqMdz0sgHKGvlPbILNNydfzUegEHePl4KAdhVomUOaHTtYUGTnArE5gvtR9mrNPkVewtDgA5jbkbubWR2%2F7v0c0VyJekjCGOE%2BpKF2qSzjyfEIhtNc0oJoCFsP5Xu&X-Amz-Signature=5dc6c58aed205abf2037a44360fa686a6f793ec6e323e1b511703c5ecfc72073&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKU5IPJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3MMJle78xkIjqsbGjOSnofLnxORa2Oxx87OunUuX39AiBr6cf4xqmcVfpBPXyzLf8MHJUbagg4wBUSSIyVR96dEir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMabAyTAZ9P83wtrl5KtwDsZSiYpikFfKSBl525w0NicM1ZEeBGRMgXMLFxl4Wso1lwVGKaIDd03AT5Iw8q0S%2FLH2gd%2Bgzq4e2NCXfECIEYFaQR3gCMFIPhdh2%2BegjFA1D4eDJY%2B%2Fk62iHGJpBhTScaiLD%2Bo6e5HObhcqeOGSFaQXp63cs%2F1%2FuhcHXogTe0axeZDs02U56j4cYfgsWH7lPKa5StjsKMt8I0b6z1pdIl2qObenWR39ARo%2B2oCRTzv6C1bnkIWGsXC9ndt%2FUN2VqzJ6Dokr44SDWChX9fZg6pcJT%2F%2FRh4S1nOnbU8pbLR6rsWdAvPUt1RRcgXhCEgAZUPKmOPaAsYqeK7jDt%2FBOExV%2B83pnuynlcnMJBW8Gn1enwH57uA39TLMADPkP5ZJfRykZa95iuYsl%2BzvDuZVfAUr7HcqbIp9mUfit3mg9VBFQBtxOarkGFmzAOZpiCH5wA016nfr%2Fo1vhUoHHFyjulTz%2F5jstQYqLw8rcH%2BMU5G5jbW%2F03JnDkHYHHjxW%2FmqnS3imwAh3Tp5XvJVCKpDeApY0gRPjfQUCpl3tVNpswZrdnX24kECx48m47JMJeOpg0Pc%2FQtBGxisdoSYQQo7z536c9Uagg2M0T%2FPXHWJoA8tI63PVt1V3UNLBXZ7Qw3bevwAY6pgFka2pN%2BdtgKm4cie1lQA9UHZS0Nah8ZGTjRg0aJ2SVMjLs8XdvqkW3rgDlZ5Cx9VAcelL%2FhgpMOvxrrwCUL5pnGw%2Bvtk43kxCCqMdz0sgHKGvlPbILNNydfzUegEHePl4KAdhVomUOaHTtYUGTnArE5gvtR9mrNPkVewtDgA5jbkbubWR2%2F7v0c0VyJekjCGOE%2BpKF2qSzjyfEIhtNc0oJoCFsP5Xu&X-Amz-Signature=fa2b14fea4bc3e9883a23a24413824a054538e05554cd1e40267d035cb363241&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKU5IPJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3MMJle78xkIjqsbGjOSnofLnxORa2Oxx87OunUuX39AiBr6cf4xqmcVfpBPXyzLf8MHJUbagg4wBUSSIyVR96dEir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMabAyTAZ9P83wtrl5KtwDsZSiYpikFfKSBl525w0NicM1ZEeBGRMgXMLFxl4Wso1lwVGKaIDd03AT5Iw8q0S%2FLH2gd%2Bgzq4e2NCXfECIEYFaQR3gCMFIPhdh2%2BegjFA1D4eDJY%2B%2Fk62iHGJpBhTScaiLD%2Bo6e5HObhcqeOGSFaQXp63cs%2F1%2FuhcHXogTe0axeZDs02U56j4cYfgsWH7lPKa5StjsKMt8I0b6z1pdIl2qObenWR39ARo%2B2oCRTzv6C1bnkIWGsXC9ndt%2FUN2VqzJ6Dokr44SDWChX9fZg6pcJT%2F%2FRh4S1nOnbU8pbLR6rsWdAvPUt1RRcgXhCEgAZUPKmOPaAsYqeK7jDt%2FBOExV%2B83pnuynlcnMJBW8Gn1enwH57uA39TLMADPkP5ZJfRykZa95iuYsl%2BzvDuZVfAUr7HcqbIp9mUfit3mg9VBFQBtxOarkGFmzAOZpiCH5wA016nfr%2Fo1vhUoHHFyjulTz%2F5jstQYqLw8rcH%2BMU5G5jbW%2F03JnDkHYHHjxW%2FmqnS3imwAh3Tp5XvJVCKpDeApY0gRPjfQUCpl3tVNpswZrdnX24kECx48m47JMJeOpg0Pc%2FQtBGxisdoSYQQo7z536c9Uagg2M0T%2FPXHWJoA8tI63PVt1V3UNLBXZ7Qw3bevwAY6pgFka2pN%2BdtgKm4cie1lQA9UHZS0Nah8ZGTjRg0aJ2SVMjLs8XdvqkW3rgDlZ5Cx9VAcelL%2FhgpMOvxrrwCUL5pnGw%2Bvtk43kxCCqMdz0sgHKGvlPbILNNydfzUegEHePl4KAdhVomUOaHTtYUGTnArE5gvtR9mrNPkVewtDgA5jbkbubWR2%2F7v0c0VyJekjCGOE%2BpKF2qSzjyfEIhtNc0oJoCFsP5Xu&X-Amz-Signature=73acd385df95fdb7b420f7dad1f78e8d963036ff3fb5d43b59c0f5231ff5d0fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
