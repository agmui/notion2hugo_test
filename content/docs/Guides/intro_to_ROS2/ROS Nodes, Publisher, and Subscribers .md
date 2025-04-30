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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XABRHRY2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICiI1tmTgWSxxh06eAp2F57lrSDL4Rm6E8D344qahT9fAiAtYvFxvhMFGaNZjUurAViK62j4IyWilbtraUpf5SwJWiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQCINBleTFIF78XewKtwD3kWyqXOtqfwevJVj%2BcnlUkb7dUzzfnkT0a%2Br3BISjjDwiKoFJo7lYy1UByr3uSESmw%2BtxJOb5zWeAn8Hs9QzkleOHpSFsaCep2iz90LxnlPcRhIPyWcTM4oT%2FR91d9yZqN%2BPbADzIb8Lu4l62xtXq72MyihkLvMOvpFpQ4KDqtvHy20GpRezZTKs925EHq098hy3NGxaCEbjpSNUqwhFYXzi%2FlHPVY830Gim9RMiThkR4cb%2F6tvdQ61mQ5%2Bk3cvGFe2MQQ%2FV05r3sLJl9y6uscXZ3ec3k8ZyGlIudbYYehLAS73CqviKOud7fFPutmavgzbuWia63uuhsyRpesE%2FCLbicPXTYKKtThNAM7B8sga%2BbK7Ug90ZOvbFIBnnmZHLK%2BqWADdwq9TYuNtmO4uhSkfuTSLxlBmBcIcIj4di9v7cnbM0KCo98X%2Fxp1AqnJwlFwfGVd5K17XCmLPiSC1C4QZdrrWSFWNm6tePvdK9XRWQn4MAwvFVCxFqWoATdkesG%2F%2FaM%2B0WKZGlhH58bYH%2BTIgy1%2BZwOjSr8jjhIgD%2BDPYlFNdYSPPuySjTOCvC8jHPUMbzCFTB4KfnCUYz6RpILiZ1I1JLNiqEyCWiox4vgxZ22i%2FtdcrWQICTrWswtfXJwAY6pgGUbR75qDLWz3yRor4cmvWjaCnFgyNJ4CYfHMnw7n6xinBuKc9wx1A2tDcMv5DvH2a4oHM2YGL6szVP4FbPy3rTB6b1zQZlaIrGPcPlWF54BacVW%2F8LnBRpPfXg33pEFNQ0E3nFcpvulHh4zOADi3jYR5yDRlwCqsTw0c5RknJ7g8HowRkZjHWQgeGFYe7YYASQwZ2nrzQ2KSa7HEcOP9JbCYDSdZjR&X-Amz-Signature=a3a7b22edb65d6fa94c19e18ea76ae6de2a5c0fcbca02f021f3809b062512ea5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XABRHRY2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICiI1tmTgWSxxh06eAp2F57lrSDL4Rm6E8D344qahT9fAiAtYvFxvhMFGaNZjUurAViK62j4IyWilbtraUpf5SwJWiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQCINBleTFIF78XewKtwD3kWyqXOtqfwevJVj%2BcnlUkb7dUzzfnkT0a%2Br3BISjjDwiKoFJo7lYy1UByr3uSESmw%2BtxJOb5zWeAn8Hs9QzkleOHpSFsaCep2iz90LxnlPcRhIPyWcTM4oT%2FR91d9yZqN%2BPbADzIb8Lu4l62xtXq72MyihkLvMOvpFpQ4KDqtvHy20GpRezZTKs925EHq098hy3NGxaCEbjpSNUqwhFYXzi%2FlHPVY830Gim9RMiThkR4cb%2F6tvdQ61mQ5%2Bk3cvGFe2MQQ%2FV05r3sLJl9y6uscXZ3ec3k8ZyGlIudbYYehLAS73CqviKOud7fFPutmavgzbuWia63uuhsyRpesE%2FCLbicPXTYKKtThNAM7B8sga%2BbK7Ug90ZOvbFIBnnmZHLK%2BqWADdwq9TYuNtmO4uhSkfuTSLxlBmBcIcIj4di9v7cnbM0KCo98X%2Fxp1AqnJwlFwfGVd5K17XCmLPiSC1C4QZdrrWSFWNm6tePvdK9XRWQn4MAwvFVCxFqWoATdkesG%2F%2FaM%2B0WKZGlhH58bYH%2BTIgy1%2BZwOjSr8jjhIgD%2BDPYlFNdYSPPuySjTOCvC8jHPUMbzCFTB4KfnCUYz6RpILiZ1I1JLNiqEyCWiox4vgxZ22i%2FtdcrWQICTrWswtfXJwAY6pgGUbR75qDLWz3yRor4cmvWjaCnFgyNJ4CYfHMnw7n6xinBuKc9wx1A2tDcMv5DvH2a4oHM2YGL6szVP4FbPy3rTB6b1zQZlaIrGPcPlWF54BacVW%2F8LnBRpPfXg33pEFNQ0E3nFcpvulHh4zOADi3jYR5yDRlwCqsTw0c5RknJ7g8HowRkZjHWQgeGFYe7YYASQwZ2nrzQ2KSa7HEcOP9JbCYDSdZjR&X-Amz-Signature=b63d1bb6a80360003f26d918fa66fdffa1d75593e75a209557df86f047989cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XABRHRY2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICiI1tmTgWSxxh06eAp2F57lrSDL4Rm6E8D344qahT9fAiAtYvFxvhMFGaNZjUurAViK62j4IyWilbtraUpf5SwJWiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQCINBleTFIF78XewKtwD3kWyqXOtqfwevJVj%2BcnlUkb7dUzzfnkT0a%2Br3BISjjDwiKoFJo7lYy1UByr3uSESmw%2BtxJOb5zWeAn8Hs9QzkleOHpSFsaCep2iz90LxnlPcRhIPyWcTM4oT%2FR91d9yZqN%2BPbADzIb8Lu4l62xtXq72MyihkLvMOvpFpQ4KDqtvHy20GpRezZTKs925EHq098hy3NGxaCEbjpSNUqwhFYXzi%2FlHPVY830Gim9RMiThkR4cb%2F6tvdQ61mQ5%2Bk3cvGFe2MQQ%2FV05r3sLJl9y6uscXZ3ec3k8ZyGlIudbYYehLAS73CqviKOud7fFPutmavgzbuWia63uuhsyRpesE%2FCLbicPXTYKKtThNAM7B8sga%2BbK7Ug90ZOvbFIBnnmZHLK%2BqWADdwq9TYuNtmO4uhSkfuTSLxlBmBcIcIj4di9v7cnbM0KCo98X%2Fxp1AqnJwlFwfGVd5K17XCmLPiSC1C4QZdrrWSFWNm6tePvdK9XRWQn4MAwvFVCxFqWoATdkesG%2F%2FaM%2B0WKZGlhH58bYH%2BTIgy1%2BZwOjSr8jjhIgD%2BDPYlFNdYSPPuySjTOCvC8jHPUMbzCFTB4KfnCUYz6RpILiZ1I1JLNiqEyCWiox4vgxZ22i%2FtdcrWQICTrWswtfXJwAY6pgGUbR75qDLWz3yRor4cmvWjaCnFgyNJ4CYfHMnw7n6xinBuKc9wx1A2tDcMv5DvH2a4oHM2YGL6szVP4FbPy3rTB6b1zQZlaIrGPcPlWF54BacVW%2F8LnBRpPfXg33pEFNQ0E3nFcpvulHh4zOADi3jYR5yDRlwCqsTw0c5RknJ7g8HowRkZjHWQgeGFYe7YYASQwZ2nrzQ2KSa7HEcOP9JbCYDSdZjR&X-Amz-Signature=608127c7b67940193654ec708ba853ec0f63f741d09207c41c309496217be329&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XABRHRY2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICiI1tmTgWSxxh06eAp2F57lrSDL4Rm6E8D344qahT9fAiAtYvFxvhMFGaNZjUurAViK62j4IyWilbtraUpf5SwJWiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQCINBleTFIF78XewKtwD3kWyqXOtqfwevJVj%2BcnlUkb7dUzzfnkT0a%2Br3BISjjDwiKoFJo7lYy1UByr3uSESmw%2BtxJOb5zWeAn8Hs9QzkleOHpSFsaCep2iz90LxnlPcRhIPyWcTM4oT%2FR91d9yZqN%2BPbADzIb8Lu4l62xtXq72MyihkLvMOvpFpQ4KDqtvHy20GpRezZTKs925EHq098hy3NGxaCEbjpSNUqwhFYXzi%2FlHPVY830Gim9RMiThkR4cb%2F6tvdQ61mQ5%2Bk3cvGFe2MQQ%2FV05r3sLJl9y6uscXZ3ec3k8ZyGlIudbYYehLAS73CqviKOud7fFPutmavgzbuWia63uuhsyRpesE%2FCLbicPXTYKKtThNAM7B8sga%2BbK7Ug90ZOvbFIBnnmZHLK%2BqWADdwq9TYuNtmO4uhSkfuTSLxlBmBcIcIj4di9v7cnbM0KCo98X%2Fxp1AqnJwlFwfGVd5K17XCmLPiSC1C4QZdrrWSFWNm6tePvdK9XRWQn4MAwvFVCxFqWoATdkesG%2F%2FaM%2B0WKZGlhH58bYH%2BTIgy1%2BZwOjSr8jjhIgD%2BDPYlFNdYSPPuySjTOCvC8jHPUMbzCFTB4KfnCUYz6RpILiZ1I1JLNiqEyCWiox4vgxZ22i%2FtdcrWQICTrWswtfXJwAY6pgGUbR75qDLWz3yRor4cmvWjaCnFgyNJ4CYfHMnw7n6xinBuKc9wx1A2tDcMv5DvH2a4oHM2YGL6szVP4FbPy3rTB6b1zQZlaIrGPcPlWF54BacVW%2F8LnBRpPfXg33pEFNQ0E3nFcpvulHh4zOADi3jYR5yDRlwCqsTw0c5RknJ7g8HowRkZjHWQgeGFYe7YYASQwZ2nrzQ2KSa7HEcOP9JbCYDSdZjR&X-Amz-Signature=f0423b59d741f227cbd88d19182eea343dc392652328b73acca15a19523e96cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XABRHRY2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICiI1tmTgWSxxh06eAp2F57lrSDL4Rm6E8D344qahT9fAiAtYvFxvhMFGaNZjUurAViK62j4IyWilbtraUpf5SwJWiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQCINBleTFIF78XewKtwD3kWyqXOtqfwevJVj%2BcnlUkb7dUzzfnkT0a%2Br3BISjjDwiKoFJo7lYy1UByr3uSESmw%2BtxJOb5zWeAn8Hs9QzkleOHpSFsaCep2iz90LxnlPcRhIPyWcTM4oT%2FR91d9yZqN%2BPbADzIb8Lu4l62xtXq72MyihkLvMOvpFpQ4KDqtvHy20GpRezZTKs925EHq098hy3NGxaCEbjpSNUqwhFYXzi%2FlHPVY830Gim9RMiThkR4cb%2F6tvdQ61mQ5%2Bk3cvGFe2MQQ%2FV05r3sLJl9y6uscXZ3ec3k8ZyGlIudbYYehLAS73CqviKOud7fFPutmavgzbuWia63uuhsyRpesE%2FCLbicPXTYKKtThNAM7B8sga%2BbK7Ug90ZOvbFIBnnmZHLK%2BqWADdwq9TYuNtmO4uhSkfuTSLxlBmBcIcIj4di9v7cnbM0KCo98X%2Fxp1AqnJwlFwfGVd5K17XCmLPiSC1C4QZdrrWSFWNm6tePvdK9XRWQn4MAwvFVCxFqWoATdkesG%2F%2FaM%2B0WKZGlhH58bYH%2BTIgy1%2BZwOjSr8jjhIgD%2BDPYlFNdYSPPuySjTOCvC8jHPUMbzCFTB4KfnCUYz6RpILiZ1I1JLNiqEyCWiox4vgxZ22i%2FtdcrWQICTrWswtfXJwAY6pgGUbR75qDLWz3yRor4cmvWjaCnFgyNJ4CYfHMnw7n6xinBuKc9wx1A2tDcMv5DvH2a4oHM2YGL6szVP4FbPy3rTB6b1zQZlaIrGPcPlWF54BacVW%2F8LnBRpPfXg33pEFNQ0E3nFcpvulHh4zOADi3jYR5yDRlwCqsTw0c5RknJ7g8HowRkZjHWQgeGFYe7YYASQwZ2nrzQ2KSa7HEcOP9JbCYDSdZjR&X-Amz-Signature=d5114ee61849808186505229478726c457b74bca34f654dae479615c1e3410e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XABRHRY2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICiI1tmTgWSxxh06eAp2F57lrSDL4Rm6E8D344qahT9fAiAtYvFxvhMFGaNZjUurAViK62j4IyWilbtraUpf5SwJWiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQCINBleTFIF78XewKtwD3kWyqXOtqfwevJVj%2BcnlUkb7dUzzfnkT0a%2Br3BISjjDwiKoFJo7lYy1UByr3uSESmw%2BtxJOb5zWeAn8Hs9QzkleOHpSFsaCep2iz90LxnlPcRhIPyWcTM4oT%2FR91d9yZqN%2BPbADzIb8Lu4l62xtXq72MyihkLvMOvpFpQ4KDqtvHy20GpRezZTKs925EHq098hy3NGxaCEbjpSNUqwhFYXzi%2FlHPVY830Gim9RMiThkR4cb%2F6tvdQ61mQ5%2Bk3cvGFe2MQQ%2FV05r3sLJl9y6uscXZ3ec3k8ZyGlIudbYYehLAS73CqviKOud7fFPutmavgzbuWia63uuhsyRpesE%2FCLbicPXTYKKtThNAM7B8sga%2BbK7Ug90ZOvbFIBnnmZHLK%2BqWADdwq9TYuNtmO4uhSkfuTSLxlBmBcIcIj4di9v7cnbM0KCo98X%2Fxp1AqnJwlFwfGVd5K17XCmLPiSC1C4QZdrrWSFWNm6tePvdK9XRWQn4MAwvFVCxFqWoATdkesG%2F%2FaM%2B0WKZGlhH58bYH%2BTIgy1%2BZwOjSr8jjhIgD%2BDPYlFNdYSPPuySjTOCvC8jHPUMbzCFTB4KfnCUYz6RpILiZ1I1JLNiqEyCWiox4vgxZ22i%2FtdcrWQICTrWswtfXJwAY6pgGUbR75qDLWz3yRor4cmvWjaCnFgyNJ4CYfHMnw7n6xinBuKc9wx1A2tDcMv5DvH2a4oHM2YGL6szVP4FbPy3rTB6b1zQZlaIrGPcPlWF54BacVW%2F8LnBRpPfXg33pEFNQ0E3nFcpvulHh4zOADi3jYR5yDRlwCqsTw0c5RknJ7g8HowRkZjHWQgeGFYe7YYASQwZ2nrzQ2KSa7HEcOP9JbCYDSdZjR&X-Amz-Signature=7fb0ab3a5e9e157f22c026675994bc5117877a6dd4877abc4c818fb6c7579c6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XABRHRY2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICiI1tmTgWSxxh06eAp2F57lrSDL4Rm6E8D344qahT9fAiAtYvFxvhMFGaNZjUurAViK62j4IyWilbtraUpf5SwJWiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQCINBleTFIF78XewKtwD3kWyqXOtqfwevJVj%2BcnlUkb7dUzzfnkT0a%2Br3BISjjDwiKoFJo7lYy1UByr3uSESmw%2BtxJOb5zWeAn8Hs9QzkleOHpSFsaCep2iz90LxnlPcRhIPyWcTM4oT%2FR91d9yZqN%2BPbADzIb8Lu4l62xtXq72MyihkLvMOvpFpQ4KDqtvHy20GpRezZTKs925EHq098hy3NGxaCEbjpSNUqwhFYXzi%2FlHPVY830Gim9RMiThkR4cb%2F6tvdQ61mQ5%2Bk3cvGFe2MQQ%2FV05r3sLJl9y6uscXZ3ec3k8ZyGlIudbYYehLAS73CqviKOud7fFPutmavgzbuWia63uuhsyRpesE%2FCLbicPXTYKKtThNAM7B8sga%2BbK7Ug90ZOvbFIBnnmZHLK%2BqWADdwq9TYuNtmO4uhSkfuTSLxlBmBcIcIj4di9v7cnbM0KCo98X%2Fxp1AqnJwlFwfGVd5K17XCmLPiSC1C4QZdrrWSFWNm6tePvdK9XRWQn4MAwvFVCxFqWoATdkesG%2F%2FaM%2B0WKZGlhH58bYH%2BTIgy1%2BZwOjSr8jjhIgD%2BDPYlFNdYSPPuySjTOCvC8jHPUMbzCFTB4KfnCUYz6RpILiZ1I1JLNiqEyCWiox4vgxZ22i%2FtdcrWQICTrWswtfXJwAY6pgGUbR75qDLWz3yRor4cmvWjaCnFgyNJ4CYfHMnw7n6xinBuKc9wx1A2tDcMv5DvH2a4oHM2YGL6szVP4FbPy3rTB6b1zQZlaIrGPcPlWF54BacVW%2F8LnBRpPfXg33pEFNQ0E3nFcpvulHh4zOADi3jYR5yDRlwCqsTw0c5RknJ7g8HowRkZjHWQgeGFYe7YYASQwZ2nrzQ2KSa7HEcOP9JbCYDSdZjR&X-Amz-Signature=1da426d5b67fd681c1c839cb42ce48e05fca746c73d4cda792ee2e15920c0fd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XABRHRY2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICiI1tmTgWSxxh06eAp2F57lrSDL4Rm6E8D344qahT9fAiAtYvFxvhMFGaNZjUurAViK62j4IyWilbtraUpf5SwJWiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQCINBleTFIF78XewKtwD3kWyqXOtqfwevJVj%2BcnlUkb7dUzzfnkT0a%2Br3BISjjDwiKoFJo7lYy1UByr3uSESmw%2BtxJOb5zWeAn8Hs9QzkleOHpSFsaCep2iz90LxnlPcRhIPyWcTM4oT%2FR91d9yZqN%2BPbADzIb8Lu4l62xtXq72MyihkLvMOvpFpQ4KDqtvHy20GpRezZTKs925EHq098hy3NGxaCEbjpSNUqwhFYXzi%2FlHPVY830Gim9RMiThkR4cb%2F6tvdQ61mQ5%2Bk3cvGFe2MQQ%2FV05r3sLJl9y6uscXZ3ec3k8ZyGlIudbYYehLAS73CqviKOud7fFPutmavgzbuWia63uuhsyRpesE%2FCLbicPXTYKKtThNAM7B8sga%2BbK7Ug90ZOvbFIBnnmZHLK%2BqWADdwq9TYuNtmO4uhSkfuTSLxlBmBcIcIj4di9v7cnbM0KCo98X%2Fxp1AqnJwlFwfGVd5K17XCmLPiSC1C4QZdrrWSFWNm6tePvdK9XRWQn4MAwvFVCxFqWoATdkesG%2F%2FaM%2B0WKZGlhH58bYH%2BTIgy1%2BZwOjSr8jjhIgD%2BDPYlFNdYSPPuySjTOCvC8jHPUMbzCFTB4KfnCUYz6RpILiZ1I1JLNiqEyCWiox4vgxZ22i%2FtdcrWQICTrWswtfXJwAY6pgGUbR75qDLWz3yRor4cmvWjaCnFgyNJ4CYfHMnw7n6xinBuKc9wx1A2tDcMv5DvH2a4oHM2YGL6szVP4FbPy3rTB6b1zQZlaIrGPcPlWF54BacVW%2F8LnBRpPfXg33pEFNQ0E3nFcpvulHh4zOADi3jYR5yDRlwCqsTw0c5RknJ7g8HowRkZjHWQgeGFYe7YYASQwZ2nrzQ2KSa7HEcOP9JbCYDSdZjR&X-Amz-Signature=1c1cc15981a43cc0499834f671c1641564ae8ed6abf71933b2e6a93587627b49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
