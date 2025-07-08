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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2G4PA5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICB6ISHLHjSrZDg8nHikP1BBtj%2BQCIbDWtalGaNcbbatAiEA2gi7VFZIaY1bOvZh%2B37rYg9Od0%2B8dLfBeN1i6GZLe1IqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK73XE5qpeqzPV2UgCrcA1uEfEGDrAziLitPGkIGkyUtqG4Nw58GC3prnyP7AONGoVS%2FR0yGtam0vV07Eg8AiDovCmRQEKkea0qBz%2BDS7q%2FBRi1jYOAx384sHRZKSPo1yBravL09tlHxytr2p4YAEhkUbcQcnq7Z%2BBoyeDfLhHeq7njy%2BLI0pJiJHSzz5hTNJoFe67ULZGAum6cK32PRiADg5ZqtP4kJzyfIL5q7UMyoZr6T2vQDWaBRI%2BoqcsXoxZeQtN9S26lQQxAMAh2sV2%2FQAzChFEuf9xd7hUv6PAveIK6TPWrUykE3sORTVCxKlyHVrQTceNVGSlDiuydG2TYbdzO2b0QSD%2FMVsZcb%2F65NXyRM8%2Bq9CCUEth8%2BfGSoVavBXcdfiMeVMpf8Vc2gM3idraM8MNv9e6g%2BNjw%2FAVh0nA0ADnExzmFzkZBmgY%2FT6yg55PRUEjwHH9jFjgkRvRKhheswWYWKCKNIMTBE8FXhJJHAyAprVPcTOqLaMVC24rtxYqxz7b7aqQ%2BdEwdy4QeV23BZanNEC64QJC3ZEsTC%2BvE7yxDyIbGrXcwlE89mSh4VCInSLBxvNx5Nh5IaDhhpc9h78TP%2FPLFQI%2B%2BesWQqPgXAAz5vDrxpqJHm4dCNuakVWzHP9q7XV6X8MM2EssMGOqUBNgy%2BHbribq%2BMtuJuYsNQrVuyCMSdxubzZF3bhPPo9BDGNn4eOrlJEOjymLx%2Bk1wl%2BgAcRyB1wY5L7v7YObw%2BgTkau6ru4ldZ5nyc61YmG7zdHZMRAjK7vmBoTXz6V%2F8T2NO%2BYziyR5Y1BfQeblEWYF5qTmNOfc7dwH3IBAGIjEaLl2PoM5G9MjHnoEFoQyRrlTvLoo%2FEM7dq%2Fmqrj6hTkYoMRsVD&X-Amz-Signature=cc983e8b00e34712a5dbdd8d9be1e186c34d0a27913132404256c41ad3381b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2G4PA5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICB6ISHLHjSrZDg8nHikP1BBtj%2BQCIbDWtalGaNcbbatAiEA2gi7VFZIaY1bOvZh%2B37rYg9Od0%2B8dLfBeN1i6GZLe1IqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK73XE5qpeqzPV2UgCrcA1uEfEGDrAziLitPGkIGkyUtqG4Nw58GC3prnyP7AONGoVS%2FR0yGtam0vV07Eg8AiDovCmRQEKkea0qBz%2BDS7q%2FBRi1jYOAx384sHRZKSPo1yBravL09tlHxytr2p4YAEhkUbcQcnq7Z%2BBoyeDfLhHeq7njy%2BLI0pJiJHSzz5hTNJoFe67ULZGAum6cK32PRiADg5ZqtP4kJzyfIL5q7UMyoZr6T2vQDWaBRI%2BoqcsXoxZeQtN9S26lQQxAMAh2sV2%2FQAzChFEuf9xd7hUv6PAveIK6TPWrUykE3sORTVCxKlyHVrQTceNVGSlDiuydG2TYbdzO2b0QSD%2FMVsZcb%2F65NXyRM8%2Bq9CCUEth8%2BfGSoVavBXcdfiMeVMpf8Vc2gM3idraM8MNv9e6g%2BNjw%2FAVh0nA0ADnExzmFzkZBmgY%2FT6yg55PRUEjwHH9jFjgkRvRKhheswWYWKCKNIMTBE8FXhJJHAyAprVPcTOqLaMVC24rtxYqxz7b7aqQ%2BdEwdy4QeV23BZanNEC64QJC3ZEsTC%2BvE7yxDyIbGrXcwlE89mSh4VCInSLBxvNx5Nh5IaDhhpc9h78TP%2FPLFQI%2B%2BesWQqPgXAAz5vDrxpqJHm4dCNuakVWzHP9q7XV6X8MM2EssMGOqUBNgy%2BHbribq%2BMtuJuYsNQrVuyCMSdxubzZF3bhPPo9BDGNn4eOrlJEOjymLx%2Bk1wl%2BgAcRyB1wY5L7v7YObw%2BgTkau6ru4ldZ5nyc61YmG7zdHZMRAjK7vmBoTXz6V%2F8T2NO%2BYziyR5Y1BfQeblEWYF5qTmNOfc7dwH3IBAGIjEaLl2PoM5G9MjHnoEFoQyRrlTvLoo%2FEM7dq%2Fmqrj6hTkYoMRsVD&X-Amz-Signature=8caa5d325a2eb26930a739b1e5a144e392f4d0488460c372295b887bb3765360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2G4PA5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICB6ISHLHjSrZDg8nHikP1BBtj%2BQCIbDWtalGaNcbbatAiEA2gi7VFZIaY1bOvZh%2B37rYg9Od0%2B8dLfBeN1i6GZLe1IqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK73XE5qpeqzPV2UgCrcA1uEfEGDrAziLitPGkIGkyUtqG4Nw58GC3prnyP7AONGoVS%2FR0yGtam0vV07Eg8AiDovCmRQEKkea0qBz%2BDS7q%2FBRi1jYOAx384sHRZKSPo1yBravL09tlHxytr2p4YAEhkUbcQcnq7Z%2BBoyeDfLhHeq7njy%2BLI0pJiJHSzz5hTNJoFe67ULZGAum6cK32PRiADg5ZqtP4kJzyfIL5q7UMyoZr6T2vQDWaBRI%2BoqcsXoxZeQtN9S26lQQxAMAh2sV2%2FQAzChFEuf9xd7hUv6PAveIK6TPWrUykE3sORTVCxKlyHVrQTceNVGSlDiuydG2TYbdzO2b0QSD%2FMVsZcb%2F65NXyRM8%2Bq9CCUEth8%2BfGSoVavBXcdfiMeVMpf8Vc2gM3idraM8MNv9e6g%2BNjw%2FAVh0nA0ADnExzmFzkZBmgY%2FT6yg55PRUEjwHH9jFjgkRvRKhheswWYWKCKNIMTBE8FXhJJHAyAprVPcTOqLaMVC24rtxYqxz7b7aqQ%2BdEwdy4QeV23BZanNEC64QJC3ZEsTC%2BvE7yxDyIbGrXcwlE89mSh4VCInSLBxvNx5Nh5IaDhhpc9h78TP%2FPLFQI%2B%2BesWQqPgXAAz5vDrxpqJHm4dCNuakVWzHP9q7XV6X8MM2EssMGOqUBNgy%2BHbribq%2BMtuJuYsNQrVuyCMSdxubzZF3bhPPo9BDGNn4eOrlJEOjymLx%2Bk1wl%2BgAcRyB1wY5L7v7YObw%2BgTkau6ru4ldZ5nyc61YmG7zdHZMRAjK7vmBoTXz6V%2F8T2NO%2BYziyR5Y1BfQeblEWYF5qTmNOfc7dwH3IBAGIjEaLl2PoM5G9MjHnoEFoQyRrlTvLoo%2FEM7dq%2Fmqrj6hTkYoMRsVD&X-Amz-Signature=b8a662358f0b5b31fb32b318895f36b03bab48a54336ac80976b1357a52ef8b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2G4PA5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICB6ISHLHjSrZDg8nHikP1BBtj%2BQCIbDWtalGaNcbbatAiEA2gi7VFZIaY1bOvZh%2B37rYg9Od0%2B8dLfBeN1i6GZLe1IqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK73XE5qpeqzPV2UgCrcA1uEfEGDrAziLitPGkIGkyUtqG4Nw58GC3prnyP7AONGoVS%2FR0yGtam0vV07Eg8AiDovCmRQEKkea0qBz%2BDS7q%2FBRi1jYOAx384sHRZKSPo1yBravL09tlHxytr2p4YAEhkUbcQcnq7Z%2BBoyeDfLhHeq7njy%2BLI0pJiJHSzz5hTNJoFe67ULZGAum6cK32PRiADg5ZqtP4kJzyfIL5q7UMyoZr6T2vQDWaBRI%2BoqcsXoxZeQtN9S26lQQxAMAh2sV2%2FQAzChFEuf9xd7hUv6PAveIK6TPWrUykE3sORTVCxKlyHVrQTceNVGSlDiuydG2TYbdzO2b0QSD%2FMVsZcb%2F65NXyRM8%2Bq9CCUEth8%2BfGSoVavBXcdfiMeVMpf8Vc2gM3idraM8MNv9e6g%2BNjw%2FAVh0nA0ADnExzmFzkZBmgY%2FT6yg55PRUEjwHH9jFjgkRvRKhheswWYWKCKNIMTBE8FXhJJHAyAprVPcTOqLaMVC24rtxYqxz7b7aqQ%2BdEwdy4QeV23BZanNEC64QJC3ZEsTC%2BvE7yxDyIbGrXcwlE89mSh4VCInSLBxvNx5Nh5IaDhhpc9h78TP%2FPLFQI%2B%2BesWQqPgXAAz5vDrxpqJHm4dCNuakVWzHP9q7XV6X8MM2EssMGOqUBNgy%2BHbribq%2BMtuJuYsNQrVuyCMSdxubzZF3bhPPo9BDGNn4eOrlJEOjymLx%2Bk1wl%2BgAcRyB1wY5L7v7YObw%2BgTkau6ru4ldZ5nyc61YmG7zdHZMRAjK7vmBoTXz6V%2F8T2NO%2BYziyR5Y1BfQeblEWYF5qTmNOfc7dwH3IBAGIjEaLl2PoM5G9MjHnoEFoQyRrlTvLoo%2FEM7dq%2Fmqrj6hTkYoMRsVD&X-Amz-Signature=6caeab0941eb1ee187b5f60abaf8e970156e5b828e84a4ce339b40e0e2f47858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2G4PA5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICB6ISHLHjSrZDg8nHikP1BBtj%2BQCIbDWtalGaNcbbatAiEA2gi7VFZIaY1bOvZh%2B37rYg9Od0%2B8dLfBeN1i6GZLe1IqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK73XE5qpeqzPV2UgCrcA1uEfEGDrAziLitPGkIGkyUtqG4Nw58GC3prnyP7AONGoVS%2FR0yGtam0vV07Eg8AiDovCmRQEKkea0qBz%2BDS7q%2FBRi1jYOAx384sHRZKSPo1yBravL09tlHxytr2p4YAEhkUbcQcnq7Z%2BBoyeDfLhHeq7njy%2BLI0pJiJHSzz5hTNJoFe67ULZGAum6cK32PRiADg5ZqtP4kJzyfIL5q7UMyoZr6T2vQDWaBRI%2BoqcsXoxZeQtN9S26lQQxAMAh2sV2%2FQAzChFEuf9xd7hUv6PAveIK6TPWrUykE3sORTVCxKlyHVrQTceNVGSlDiuydG2TYbdzO2b0QSD%2FMVsZcb%2F65NXyRM8%2Bq9CCUEth8%2BfGSoVavBXcdfiMeVMpf8Vc2gM3idraM8MNv9e6g%2BNjw%2FAVh0nA0ADnExzmFzkZBmgY%2FT6yg55PRUEjwHH9jFjgkRvRKhheswWYWKCKNIMTBE8FXhJJHAyAprVPcTOqLaMVC24rtxYqxz7b7aqQ%2BdEwdy4QeV23BZanNEC64QJC3ZEsTC%2BvE7yxDyIbGrXcwlE89mSh4VCInSLBxvNx5Nh5IaDhhpc9h78TP%2FPLFQI%2B%2BesWQqPgXAAz5vDrxpqJHm4dCNuakVWzHP9q7XV6X8MM2EssMGOqUBNgy%2BHbribq%2BMtuJuYsNQrVuyCMSdxubzZF3bhPPo9BDGNn4eOrlJEOjymLx%2Bk1wl%2BgAcRyB1wY5L7v7YObw%2BgTkau6ru4ldZ5nyc61YmG7zdHZMRAjK7vmBoTXz6V%2F8T2NO%2BYziyR5Y1BfQeblEWYF5qTmNOfc7dwH3IBAGIjEaLl2PoM5G9MjHnoEFoQyRrlTvLoo%2FEM7dq%2Fmqrj6hTkYoMRsVD&X-Amz-Signature=1eb9c9afeaf583208e7fd1a0f0f4c4b1dc037efeffa24053b3fca56b3e128cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2G4PA5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICB6ISHLHjSrZDg8nHikP1BBtj%2BQCIbDWtalGaNcbbatAiEA2gi7VFZIaY1bOvZh%2B37rYg9Od0%2B8dLfBeN1i6GZLe1IqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK73XE5qpeqzPV2UgCrcA1uEfEGDrAziLitPGkIGkyUtqG4Nw58GC3prnyP7AONGoVS%2FR0yGtam0vV07Eg8AiDovCmRQEKkea0qBz%2BDS7q%2FBRi1jYOAx384sHRZKSPo1yBravL09tlHxytr2p4YAEhkUbcQcnq7Z%2BBoyeDfLhHeq7njy%2BLI0pJiJHSzz5hTNJoFe67ULZGAum6cK32PRiADg5ZqtP4kJzyfIL5q7UMyoZr6T2vQDWaBRI%2BoqcsXoxZeQtN9S26lQQxAMAh2sV2%2FQAzChFEuf9xd7hUv6PAveIK6TPWrUykE3sORTVCxKlyHVrQTceNVGSlDiuydG2TYbdzO2b0QSD%2FMVsZcb%2F65NXyRM8%2Bq9CCUEth8%2BfGSoVavBXcdfiMeVMpf8Vc2gM3idraM8MNv9e6g%2BNjw%2FAVh0nA0ADnExzmFzkZBmgY%2FT6yg55PRUEjwHH9jFjgkRvRKhheswWYWKCKNIMTBE8FXhJJHAyAprVPcTOqLaMVC24rtxYqxz7b7aqQ%2BdEwdy4QeV23BZanNEC64QJC3ZEsTC%2BvE7yxDyIbGrXcwlE89mSh4VCInSLBxvNx5Nh5IaDhhpc9h78TP%2FPLFQI%2B%2BesWQqPgXAAz5vDrxpqJHm4dCNuakVWzHP9q7XV6X8MM2EssMGOqUBNgy%2BHbribq%2BMtuJuYsNQrVuyCMSdxubzZF3bhPPo9BDGNn4eOrlJEOjymLx%2Bk1wl%2BgAcRyB1wY5L7v7YObw%2BgTkau6ru4ldZ5nyc61YmG7zdHZMRAjK7vmBoTXz6V%2F8T2NO%2BYziyR5Y1BfQeblEWYF5qTmNOfc7dwH3IBAGIjEaLl2PoM5G9MjHnoEFoQyRrlTvLoo%2FEM7dq%2Fmqrj6hTkYoMRsVD&X-Amz-Signature=122bbf98cb4d8c25e18f12d22556d1f5ac947dde26eb9f618eaa727f81de04be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2G4PA5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICB6ISHLHjSrZDg8nHikP1BBtj%2BQCIbDWtalGaNcbbatAiEA2gi7VFZIaY1bOvZh%2B37rYg9Od0%2B8dLfBeN1i6GZLe1IqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK73XE5qpeqzPV2UgCrcA1uEfEGDrAziLitPGkIGkyUtqG4Nw58GC3prnyP7AONGoVS%2FR0yGtam0vV07Eg8AiDovCmRQEKkea0qBz%2BDS7q%2FBRi1jYOAx384sHRZKSPo1yBravL09tlHxytr2p4YAEhkUbcQcnq7Z%2BBoyeDfLhHeq7njy%2BLI0pJiJHSzz5hTNJoFe67ULZGAum6cK32PRiADg5ZqtP4kJzyfIL5q7UMyoZr6T2vQDWaBRI%2BoqcsXoxZeQtN9S26lQQxAMAh2sV2%2FQAzChFEuf9xd7hUv6PAveIK6TPWrUykE3sORTVCxKlyHVrQTceNVGSlDiuydG2TYbdzO2b0QSD%2FMVsZcb%2F65NXyRM8%2Bq9CCUEth8%2BfGSoVavBXcdfiMeVMpf8Vc2gM3idraM8MNv9e6g%2BNjw%2FAVh0nA0ADnExzmFzkZBmgY%2FT6yg55PRUEjwHH9jFjgkRvRKhheswWYWKCKNIMTBE8FXhJJHAyAprVPcTOqLaMVC24rtxYqxz7b7aqQ%2BdEwdy4QeV23BZanNEC64QJC3ZEsTC%2BvE7yxDyIbGrXcwlE89mSh4VCInSLBxvNx5Nh5IaDhhpc9h78TP%2FPLFQI%2B%2BesWQqPgXAAz5vDrxpqJHm4dCNuakVWzHP9q7XV6X8MM2EssMGOqUBNgy%2BHbribq%2BMtuJuYsNQrVuyCMSdxubzZF3bhPPo9BDGNn4eOrlJEOjymLx%2Bk1wl%2BgAcRyB1wY5L7v7YObw%2BgTkau6ru4ldZ5nyc61YmG7zdHZMRAjK7vmBoTXz6V%2F8T2NO%2BYziyR5Y1BfQeblEWYF5qTmNOfc7dwH3IBAGIjEaLl2PoM5G9MjHnoEFoQyRrlTvLoo%2FEM7dq%2Fmqrj6hTkYoMRsVD&X-Amz-Signature=5bfc190e4620601360913cfb4617fa004b9a02b59653340c6ce15b53b5d4c972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2G4PA5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICB6ISHLHjSrZDg8nHikP1BBtj%2BQCIbDWtalGaNcbbatAiEA2gi7VFZIaY1bOvZh%2B37rYg9Od0%2B8dLfBeN1i6GZLe1IqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK73XE5qpeqzPV2UgCrcA1uEfEGDrAziLitPGkIGkyUtqG4Nw58GC3prnyP7AONGoVS%2FR0yGtam0vV07Eg8AiDovCmRQEKkea0qBz%2BDS7q%2FBRi1jYOAx384sHRZKSPo1yBravL09tlHxytr2p4YAEhkUbcQcnq7Z%2BBoyeDfLhHeq7njy%2BLI0pJiJHSzz5hTNJoFe67ULZGAum6cK32PRiADg5ZqtP4kJzyfIL5q7UMyoZr6T2vQDWaBRI%2BoqcsXoxZeQtN9S26lQQxAMAh2sV2%2FQAzChFEuf9xd7hUv6PAveIK6TPWrUykE3sORTVCxKlyHVrQTceNVGSlDiuydG2TYbdzO2b0QSD%2FMVsZcb%2F65NXyRM8%2Bq9CCUEth8%2BfGSoVavBXcdfiMeVMpf8Vc2gM3idraM8MNv9e6g%2BNjw%2FAVh0nA0ADnExzmFzkZBmgY%2FT6yg55PRUEjwHH9jFjgkRvRKhheswWYWKCKNIMTBE8FXhJJHAyAprVPcTOqLaMVC24rtxYqxz7b7aqQ%2BdEwdy4QeV23BZanNEC64QJC3ZEsTC%2BvE7yxDyIbGrXcwlE89mSh4VCInSLBxvNx5Nh5IaDhhpc9h78TP%2FPLFQI%2B%2BesWQqPgXAAz5vDrxpqJHm4dCNuakVWzHP9q7XV6X8MM2EssMGOqUBNgy%2BHbribq%2BMtuJuYsNQrVuyCMSdxubzZF3bhPPo9BDGNn4eOrlJEOjymLx%2Bk1wl%2BgAcRyB1wY5L7v7YObw%2BgTkau6ru4ldZ5nyc61YmG7zdHZMRAjK7vmBoTXz6V%2F8T2NO%2BYziyR5Y1BfQeblEWYF5qTmNOfc7dwH3IBAGIjEaLl2PoM5G9MjHnoEFoQyRrlTvLoo%2FEM7dq%2Fmqrj6hTkYoMRsVD&X-Amz-Signature=59eeb4d3ff890a318d280a69312425cfc4aeffae11f612b7fc81072aa19ea74c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
