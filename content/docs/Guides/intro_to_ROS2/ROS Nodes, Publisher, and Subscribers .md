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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4VNMQI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCJB1NGQBV%2Bb9NqZXNweE3qOdEIC0V0W1fNEJtNF%2BKdugIgTOdTEaQPzuyGxvoWasAXN4r3UIXp3rEdF2CBXbEG8TwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyhIFLzi%2BMwxKhCUyrcA3xgYObtTGSpSU2zqnhONFHyWDlgJxCtry7v%2BcqjBaHqCqktGZl6KpDyrxpyE204nPzicgT045T9%2FXbsP3BZvD0ZGoF1ljAyM4pkQ8ITMiTHzqT49wQHDBVLOzNDUUGCauo4LN0bMZW0lOhg5POks99Qcy0zSHKx9BE3ztoaSHaz3%2Bqiq%2BzSrO0eCROQ%2FuSRzeNfg8nof6SUDz4dNwTGMYLcoSfgp8sG%2BX1EhuciEcgcTcI3am4ZkgufpCGai%2BFNYIKJAg3pcxKCeSIrfDo6zCo%2Flu8g4Tssiw3eO2lvHAu8HWFAkP62PMfWnufH2pslO2Td5kEWrhC6P50ojSt6H9d5g7TWAEC0bUXcxeUISMYnkBj17sWRyobWyKtpvtKaePEE4%2BuDnCYzp2ExELzPCXUizZ9BuUsQJUrhpC9n96rOh1jAQDhWbgvf%2F%2FPRxV34qltbLG50AVEKZahe8cKm68WhgklH4WoxX1YQEJhQf8Ya8e0P8GsDOVxt4rGSNgEimJiCwIwyGKQlMNm8VeJTWt8WKTnyHVNRPUb2jgcWB3434WfkJZOMdKWAxvMBUE3sF%2BvcJnuM3DY26Femnpgoo9BM99xVyYAtxCdmX0auG%2BghgUsZqF3uEMSjeaaYMOrE1b0GOqUBA6nU7IH4JulFX3j5D7neq%2BPBTu1b3k28qAyxiFrGwe7cQefEN1aYoCW1s0YyjYuOwNrUtOe5%2F9pr9eG7urHt2yB1VSB%2FjWaBQUHLxx%2BKRGy9gRR47t7pITbhiFgqKV2cGwLmu87FEOsimJ%2FBziIGWh591Sbj5T6aPggqW5sQrEsDzUo8WnYfYHXcYF7W%2FKlcljW7b3pk2uskxGO41eV0mJN5b9ft&X-Amz-Signature=43ffa41796514bb08fa3271e5a60d7b95e5408c81b1c15311cae78bb09b48dda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4VNMQI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCJB1NGQBV%2Bb9NqZXNweE3qOdEIC0V0W1fNEJtNF%2BKdugIgTOdTEaQPzuyGxvoWasAXN4r3UIXp3rEdF2CBXbEG8TwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyhIFLzi%2BMwxKhCUyrcA3xgYObtTGSpSU2zqnhONFHyWDlgJxCtry7v%2BcqjBaHqCqktGZl6KpDyrxpyE204nPzicgT045T9%2FXbsP3BZvD0ZGoF1ljAyM4pkQ8ITMiTHzqT49wQHDBVLOzNDUUGCauo4LN0bMZW0lOhg5POks99Qcy0zSHKx9BE3ztoaSHaz3%2Bqiq%2BzSrO0eCROQ%2FuSRzeNfg8nof6SUDz4dNwTGMYLcoSfgp8sG%2BX1EhuciEcgcTcI3am4ZkgufpCGai%2BFNYIKJAg3pcxKCeSIrfDo6zCo%2Flu8g4Tssiw3eO2lvHAu8HWFAkP62PMfWnufH2pslO2Td5kEWrhC6P50ojSt6H9d5g7TWAEC0bUXcxeUISMYnkBj17sWRyobWyKtpvtKaePEE4%2BuDnCYzp2ExELzPCXUizZ9BuUsQJUrhpC9n96rOh1jAQDhWbgvf%2F%2FPRxV34qltbLG50AVEKZahe8cKm68WhgklH4WoxX1YQEJhQf8Ya8e0P8GsDOVxt4rGSNgEimJiCwIwyGKQlMNm8VeJTWt8WKTnyHVNRPUb2jgcWB3434WfkJZOMdKWAxvMBUE3sF%2BvcJnuM3DY26Femnpgoo9BM99xVyYAtxCdmX0auG%2BghgUsZqF3uEMSjeaaYMOrE1b0GOqUBA6nU7IH4JulFX3j5D7neq%2BPBTu1b3k28qAyxiFrGwe7cQefEN1aYoCW1s0YyjYuOwNrUtOe5%2F9pr9eG7urHt2yB1VSB%2FjWaBQUHLxx%2BKRGy9gRR47t7pITbhiFgqKV2cGwLmu87FEOsimJ%2FBziIGWh591Sbj5T6aPggqW5sQrEsDzUo8WnYfYHXcYF7W%2FKlcljW7b3pk2uskxGO41eV0mJN5b9ft&X-Amz-Signature=6a67b158de2cb23ddf6ec73468e7e4dca0855987ad7e3f9db4d2001e3e8f2d31&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4VNMQI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCJB1NGQBV%2Bb9NqZXNweE3qOdEIC0V0W1fNEJtNF%2BKdugIgTOdTEaQPzuyGxvoWasAXN4r3UIXp3rEdF2CBXbEG8TwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyhIFLzi%2BMwxKhCUyrcA3xgYObtTGSpSU2zqnhONFHyWDlgJxCtry7v%2BcqjBaHqCqktGZl6KpDyrxpyE204nPzicgT045T9%2FXbsP3BZvD0ZGoF1ljAyM4pkQ8ITMiTHzqT49wQHDBVLOzNDUUGCauo4LN0bMZW0lOhg5POks99Qcy0zSHKx9BE3ztoaSHaz3%2Bqiq%2BzSrO0eCROQ%2FuSRzeNfg8nof6SUDz4dNwTGMYLcoSfgp8sG%2BX1EhuciEcgcTcI3am4ZkgufpCGai%2BFNYIKJAg3pcxKCeSIrfDo6zCo%2Flu8g4Tssiw3eO2lvHAu8HWFAkP62PMfWnufH2pslO2Td5kEWrhC6P50ojSt6H9d5g7TWAEC0bUXcxeUISMYnkBj17sWRyobWyKtpvtKaePEE4%2BuDnCYzp2ExELzPCXUizZ9BuUsQJUrhpC9n96rOh1jAQDhWbgvf%2F%2FPRxV34qltbLG50AVEKZahe8cKm68WhgklH4WoxX1YQEJhQf8Ya8e0P8GsDOVxt4rGSNgEimJiCwIwyGKQlMNm8VeJTWt8WKTnyHVNRPUb2jgcWB3434WfkJZOMdKWAxvMBUE3sF%2BvcJnuM3DY26Femnpgoo9BM99xVyYAtxCdmX0auG%2BghgUsZqF3uEMSjeaaYMOrE1b0GOqUBA6nU7IH4JulFX3j5D7neq%2BPBTu1b3k28qAyxiFrGwe7cQefEN1aYoCW1s0YyjYuOwNrUtOe5%2F9pr9eG7urHt2yB1VSB%2FjWaBQUHLxx%2BKRGy9gRR47t7pITbhiFgqKV2cGwLmu87FEOsimJ%2FBziIGWh591Sbj5T6aPggqW5sQrEsDzUo8WnYfYHXcYF7W%2FKlcljW7b3pk2uskxGO41eV0mJN5b9ft&X-Amz-Signature=aee9aab5fa26e847f8fbdfc21277a3fd592d0f4473889cca0031430053b8d7eb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4VNMQI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCJB1NGQBV%2Bb9NqZXNweE3qOdEIC0V0W1fNEJtNF%2BKdugIgTOdTEaQPzuyGxvoWasAXN4r3UIXp3rEdF2CBXbEG8TwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyhIFLzi%2BMwxKhCUyrcA3xgYObtTGSpSU2zqnhONFHyWDlgJxCtry7v%2BcqjBaHqCqktGZl6KpDyrxpyE204nPzicgT045T9%2FXbsP3BZvD0ZGoF1ljAyM4pkQ8ITMiTHzqT49wQHDBVLOzNDUUGCauo4LN0bMZW0lOhg5POks99Qcy0zSHKx9BE3ztoaSHaz3%2Bqiq%2BzSrO0eCROQ%2FuSRzeNfg8nof6SUDz4dNwTGMYLcoSfgp8sG%2BX1EhuciEcgcTcI3am4ZkgufpCGai%2BFNYIKJAg3pcxKCeSIrfDo6zCo%2Flu8g4Tssiw3eO2lvHAu8HWFAkP62PMfWnufH2pslO2Td5kEWrhC6P50ojSt6H9d5g7TWAEC0bUXcxeUISMYnkBj17sWRyobWyKtpvtKaePEE4%2BuDnCYzp2ExELzPCXUizZ9BuUsQJUrhpC9n96rOh1jAQDhWbgvf%2F%2FPRxV34qltbLG50AVEKZahe8cKm68WhgklH4WoxX1YQEJhQf8Ya8e0P8GsDOVxt4rGSNgEimJiCwIwyGKQlMNm8VeJTWt8WKTnyHVNRPUb2jgcWB3434WfkJZOMdKWAxvMBUE3sF%2BvcJnuM3DY26Femnpgoo9BM99xVyYAtxCdmX0auG%2BghgUsZqF3uEMSjeaaYMOrE1b0GOqUBA6nU7IH4JulFX3j5D7neq%2BPBTu1b3k28qAyxiFrGwe7cQefEN1aYoCW1s0YyjYuOwNrUtOe5%2F9pr9eG7urHt2yB1VSB%2FjWaBQUHLxx%2BKRGy9gRR47t7pITbhiFgqKV2cGwLmu87FEOsimJ%2FBziIGWh591Sbj5T6aPggqW5sQrEsDzUo8WnYfYHXcYF7W%2FKlcljW7b3pk2uskxGO41eV0mJN5b9ft&X-Amz-Signature=eec0cfdf6f7738b82f3f79e0a927d8434a6d36f283510baf452004cb52501a60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4VNMQI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCJB1NGQBV%2Bb9NqZXNweE3qOdEIC0V0W1fNEJtNF%2BKdugIgTOdTEaQPzuyGxvoWasAXN4r3UIXp3rEdF2CBXbEG8TwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyhIFLzi%2BMwxKhCUyrcA3xgYObtTGSpSU2zqnhONFHyWDlgJxCtry7v%2BcqjBaHqCqktGZl6KpDyrxpyE204nPzicgT045T9%2FXbsP3BZvD0ZGoF1ljAyM4pkQ8ITMiTHzqT49wQHDBVLOzNDUUGCauo4LN0bMZW0lOhg5POks99Qcy0zSHKx9BE3ztoaSHaz3%2Bqiq%2BzSrO0eCROQ%2FuSRzeNfg8nof6SUDz4dNwTGMYLcoSfgp8sG%2BX1EhuciEcgcTcI3am4ZkgufpCGai%2BFNYIKJAg3pcxKCeSIrfDo6zCo%2Flu8g4Tssiw3eO2lvHAu8HWFAkP62PMfWnufH2pslO2Td5kEWrhC6P50ojSt6H9d5g7TWAEC0bUXcxeUISMYnkBj17sWRyobWyKtpvtKaePEE4%2BuDnCYzp2ExELzPCXUizZ9BuUsQJUrhpC9n96rOh1jAQDhWbgvf%2F%2FPRxV34qltbLG50AVEKZahe8cKm68WhgklH4WoxX1YQEJhQf8Ya8e0P8GsDOVxt4rGSNgEimJiCwIwyGKQlMNm8VeJTWt8WKTnyHVNRPUb2jgcWB3434WfkJZOMdKWAxvMBUE3sF%2BvcJnuM3DY26Femnpgoo9BM99xVyYAtxCdmX0auG%2BghgUsZqF3uEMSjeaaYMOrE1b0GOqUBA6nU7IH4JulFX3j5D7neq%2BPBTu1b3k28qAyxiFrGwe7cQefEN1aYoCW1s0YyjYuOwNrUtOe5%2F9pr9eG7urHt2yB1VSB%2FjWaBQUHLxx%2BKRGy9gRR47t7pITbhiFgqKV2cGwLmu87FEOsimJ%2FBziIGWh591Sbj5T6aPggqW5sQrEsDzUo8WnYfYHXcYF7W%2FKlcljW7b3pk2uskxGO41eV0mJN5b9ft&X-Amz-Signature=aa5c1f0b33772288ec1d4af446ac87181b7e3d420a80e25a0ed56be70f47110e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4VNMQI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCJB1NGQBV%2Bb9NqZXNweE3qOdEIC0V0W1fNEJtNF%2BKdugIgTOdTEaQPzuyGxvoWasAXN4r3UIXp3rEdF2CBXbEG8TwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyhIFLzi%2BMwxKhCUyrcA3xgYObtTGSpSU2zqnhONFHyWDlgJxCtry7v%2BcqjBaHqCqktGZl6KpDyrxpyE204nPzicgT045T9%2FXbsP3BZvD0ZGoF1ljAyM4pkQ8ITMiTHzqT49wQHDBVLOzNDUUGCauo4LN0bMZW0lOhg5POks99Qcy0zSHKx9BE3ztoaSHaz3%2Bqiq%2BzSrO0eCROQ%2FuSRzeNfg8nof6SUDz4dNwTGMYLcoSfgp8sG%2BX1EhuciEcgcTcI3am4ZkgufpCGai%2BFNYIKJAg3pcxKCeSIrfDo6zCo%2Flu8g4Tssiw3eO2lvHAu8HWFAkP62PMfWnufH2pslO2Td5kEWrhC6P50ojSt6H9d5g7TWAEC0bUXcxeUISMYnkBj17sWRyobWyKtpvtKaePEE4%2BuDnCYzp2ExELzPCXUizZ9BuUsQJUrhpC9n96rOh1jAQDhWbgvf%2F%2FPRxV34qltbLG50AVEKZahe8cKm68WhgklH4WoxX1YQEJhQf8Ya8e0P8GsDOVxt4rGSNgEimJiCwIwyGKQlMNm8VeJTWt8WKTnyHVNRPUb2jgcWB3434WfkJZOMdKWAxvMBUE3sF%2BvcJnuM3DY26Femnpgoo9BM99xVyYAtxCdmX0auG%2BghgUsZqF3uEMSjeaaYMOrE1b0GOqUBA6nU7IH4JulFX3j5D7neq%2BPBTu1b3k28qAyxiFrGwe7cQefEN1aYoCW1s0YyjYuOwNrUtOe5%2F9pr9eG7urHt2yB1VSB%2FjWaBQUHLxx%2BKRGy9gRR47t7pITbhiFgqKV2cGwLmu87FEOsimJ%2FBziIGWh591Sbj5T6aPggqW5sQrEsDzUo8WnYfYHXcYF7W%2FKlcljW7b3pk2uskxGO41eV0mJN5b9ft&X-Amz-Signature=9eabaa54922c47f3d95a967e0058abd5d8548e152aea14d5d68049c807c80cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4VNMQI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCJB1NGQBV%2Bb9NqZXNweE3qOdEIC0V0W1fNEJtNF%2BKdugIgTOdTEaQPzuyGxvoWasAXN4r3UIXp3rEdF2CBXbEG8TwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyhIFLzi%2BMwxKhCUyrcA3xgYObtTGSpSU2zqnhONFHyWDlgJxCtry7v%2BcqjBaHqCqktGZl6KpDyrxpyE204nPzicgT045T9%2FXbsP3BZvD0ZGoF1ljAyM4pkQ8ITMiTHzqT49wQHDBVLOzNDUUGCauo4LN0bMZW0lOhg5POks99Qcy0zSHKx9BE3ztoaSHaz3%2Bqiq%2BzSrO0eCROQ%2FuSRzeNfg8nof6SUDz4dNwTGMYLcoSfgp8sG%2BX1EhuciEcgcTcI3am4ZkgufpCGai%2BFNYIKJAg3pcxKCeSIrfDo6zCo%2Flu8g4Tssiw3eO2lvHAu8HWFAkP62PMfWnufH2pslO2Td5kEWrhC6P50ojSt6H9d5g7TWAEC0bUXcxeUISMYnkBj17sWRyobWyKtpvtKaePEE4%2BuDnCYzp2ExELzPCXUizZ9BuUsQJUrhpC9n96rOh1jAQDhWbgvf%2F%2FPRxV34qltbLG50AVEKZahe8cKm68WhgklH4WoxX1YQEJhQf8Ya8e0P8GsDOVxt4rGSNgEimJiCwIwyGKQlMNm8VeJTWt8WKTnyHVNRPUb2jgcWB3434WfkJZOMdKWAxvMBUE3sF%2BvcJnuM3DY26Femnpgoo9BM99xVyYAtxCdmX0auG%2BghgUsZqF3uEMSjeaaYMOrE1b0GOqUBA6nU7IH4JulFX3j5D7neq%2BPBTu1b3k28qAyxiFrGwe7cQefEN1aYoCW1s0YyjYuOwNrUtOe5%2F9pr9eG7urHt2yB1VSB%2FjWaBQUHLxx%2BKRGy9gRR47t7pITbhiFgqKV2cGwLmu87FEOsimJ%2FBziIGWh591Sbj5T6aPggqW5sQrEsDzUo8WnYfYHXcYF7W%2FKlcljW7b3pk2uskxGO41eV0mJN5b9ft&X-Amz-Signature=b2d52ce99e7ccffc8f609f35efc4bcaaf0e744fc765e5c4648b7ffd27effed46&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4VNMQI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCJB1NGQBV%2Bb9NqZXNweE3qOdEIC0V0W1fNEJtNF%2BKdugIgTOdTEaQPzuyGxvoWasAXN4r3UIXp3rEdF2CBXbEG8TwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyhIFLzi%2BMwxKhCUyrcA3xgYObtTGSpSU2zqnhONFHyWDlgJxCtry7v%2BcqjBaHqCqktGZl6KpDyrxpyE204nPzicgT045T9%2FXbsP3BZvD0ZGoF1ljAyM4pkQ8ITMiTHzqT49wQHDBVLOzNDUUGCauo4LN0bMZW0lOhg5POks99Qcy0zSHKx9BE3ztoaSHaz3%2Bqiq%2BzSrO0eCROQ%2FuSRzeNfg8nof6SUDz4dNwTGMYLcoSfgp8sG%2BX1EhuciEcgcTcI3am4ZkgufpCGai%2BFNYIKJAg3pcxKCeSIrfDo6zCo%2Flu8g4Tssiw3eO2lvHAu8HWFAkP62PMfWnufH2pslO2Td5kEWrhC6P50ojSt6H9d5g7TWAEC0bUXcxeUISMYnkBj17sWRyobWyKtpvtKaePEE4%2BuDnCYzp2ExELzPCXUizZ9BuUsQJUrhpC9n96rOh1jAQDhWbgvf%2F%2FPRxV34qltbLG50AVEKZahe8cKm68WhgklH4WoxX1YQEJhQf8Ya8e0P8GsDOVxt4rGSNgEimJiCwIwyGKQlMNm8VeJTWt8WKTnyHVNRPUb2jgcWB3434WfkJZOMdKWAxvMBUE3sF%2BvcJnuM3DY26Femnpgoo9BM99xVyYAtxCdmX0auG%2BghgUsZqF3uEMSjeaaYMOrE1b0GOqUBA6nU7IH4JulFX3j5D7neq%2BPBTu1b3k28qAyxiFrGwe7cQefEN1aYoCW1s0YyjYuOwNrUtOe5%2F9pr9eG7urHt2yB1VSB%2FjWaBQUHLxx%2BKRGy9gRR47t7pITbhiFgqKV2cGwLmu87FEOsimJ%2FBziIGWh591Sbj5T6aPggqW5sQrEsDzUo8WnYfYHXcYF7W%2FKlcljW7b3pk2uskxGO41eV0mJN5b9ft&X-Amz-Signature=a8c27a86c3dc7bad84807781694c4867cb32487d23273418124b2d6324b2b44f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
