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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677CTEYQR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIHqd8VqcwmW2IRcm9t1yRxFXr1LDrCsErzdcXILO4YYXAiA774zehREPh7xlyg3QoHasc3BYETHLyigWxY4FMy8X0Sr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM3aJ2tDN%2FrO8mNhIKKtwD8BQChiORxXFLStvYZhNGhLACyTuA6%2BYn%2BSVs27pQrcxTvaAOmweJp1X2nJ5ZEvFNG%2BdHzoK8ToUlfmv1IUz9DBLZvgAYXGR8TCtRKVR%2FOjXFKkllwLIkNGhVBRx%2B0wfi%2FonQ4WUGDr0P%2FaSjuaL%2FMGvlKXAXIdRfGBi4Ng1KC2C1khpSiLxGwi8uDkw1uRhw%2Bk9HNxNFJ4WkByBkm7jKA0gowPM%2BuaOFjIjH8Wm5URUCmdf5cOEw6Bt1BaWoUzn%2FlgLkbX13EuWqdAaCpwlO27taJCdnmVvWDTFDLkd35biPyA8xF4JMEFj28arMMd%2BS75ZZAzJTKdnQzq%2F2qm%2B8X93oRpDyUenQsQkXlYnzl1OTj02zqU40Y8cic5Brzkuuh9AbxeiqFfR1YsMYMuzbtwStp5r9zQltoHvacZbVqdnVJd3aSTW2Io1ZkyYjaqQzamPE1txJ8yTv4joKEZWFWtVDzzXapCvV4gROn%2B0h2qh8Tt2ohY2%2B4ZChaRgMnNOMU3TN9GdM2AKzDbq%2Fhnhq70mFrFWmSXQbsGvw6NoqhK2mrIgkEiHUy0xYlzijp%2F4aKKmBwJGjoNYGVWqvFKrd295sUvkxhdfwvA3rqLwKevAsmujxfULlwKAgQ1kwwIm2vgY6pgGCEpWnJVWHott8%2BfR8jhwNToJwkU%2BJJYUxywD2Fws0Si2XGOTF4FYrqYDi94ofRQSjCGWeArpwohuL%2Bt%2BLZGaljYub%2FwSEyR8PighJPWvJ7dXPJRZhXt6s8n2XErTgtX8UvAhEM25v%2FHTa%2FeZIgON%2FS7O3sTPVXJ%2FE%2FPvNEA37OrAY343Ud2Q0MWzTepMHMhZ5BakJ4Fw97748o0mS7QPr%2FHBL97a1&X-Amz-Signature=59d3e484866ee51755a734c41b8814c0a37756b1a9be2883dca73911bfbe92cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677CTEYQR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIHqd8VqcwmW2IRcm9t1yRxFXr1LDrCsErzdcXILO4YYXAiA774zehREPh7xlyg3QoHasc3BYETHLyigWxY4FMy8X0Sr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM3aJ2tDN%2FrO8mNhIKKtwD8BQChiORxXFLStvYZhNGhLACyTuA6%2BYn%2BSVs27pQrcxTvaAOmweJp1X2nJ5ZEvFNG%2BdHzoK8ToUlfmv1IUz9DBLZvgAYXGR8TCtRKVR%2FOjXFKkllwLIkNGhVBRx%2B0wfi%2FonQ4WUGDr0P%2FaSjuaL%2FMGvlKXAXIdRfGBi4Ng1KC2C1khpSiLxGwi8uDkw1uRhw%2Bk9HNxNFJ4WkByBkm7jKA0gowPM%2BuaOFjIjH8Wm5URUCmdf5cOEw6Bt1BaWoUzn%2FlgLkbX13EuWqdAaCpwlO27taJCdnmVvWDTFDLkd35biPyA8xF4JMEFj28arMMd%2BS75ZZAzJTKdnQzq%2F2qm%2B8X93oRpDyUenQsQkXlYnzl1OTj02zqU40Y8cic5Brzkuuh9AbxeiqFfR1YsMYMuzbtwStp5r9zQltoHvacZbVqdnVJd3aSTW2Io1ZkyYjaqQzamPE1txJ8yTv4joKEZWFWtVDzzXapCvV4gROn%2B0h2qh8Tt2ohY2%2B4ZChaRgMnNOMU3TN9GdM2AKzDbq%2Fhnhq70mFrFWmSXQbsGvw6NoqhK2mrIgkEiHUy0xYlzijp%2F4aKKmBwJGjoNYGVWqvFKrd295sUvkxhdfwvA3rqLwKevAsmujxfULlwKAgQ1kwwIm2vgY6pgGCEpWnJVWHott8%2BfR8jhwNToJwkU%2BJJYUxywD2Fws0Si2XGOTF4FYrqYDi94ofRQSjCGWeArpwohuL%2Bt%2BLZGaljYub%2FwSEyR8PighJPWvJ7dXPJRZhXt6s8n2XErTgtX8UvAhEM25v%2FHTa%2FeZIgON%2FS7O3sTPVXJ%2FE%2FPvNEA37OrAY343Ud2Q0MWzTepMHMhZ5BakJ4Fw97748o0mS7QPr%2FHBL97a1&X-Amz-Signature=987b66928e15e9843f4201909cf728cb8fca0ab0881e0d6cd70a8d28d8f4acd0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677CTEYQR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIHqd8VqcwmW2IRcm9t1yRxFXr1LDrCsErzdcXILO4YYXAiA774zehREPh7xlyg3QoHasc3BYETHLyigWxY4FMy8X0Sr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM3aJ2tDN%2FrO8mNhIKKtwD8BQChiORxXFLStvYZhNGhLACyTuA6%2BYn%2BSVs27pQrcxTvaAOmweJp1X2nJ5ZEvFNG%2BdHzoK8ToUlfmv1IUz9DBLZvgAYXGR8TCtRKVR%2FOjXFKkllwLIkNGhVBRx%2B0wfi%2FonQ4WUGDr0P%2FaSjuaL%2FMGvlKXAXIdRfGBi4Ng1KC2C1khpSiLxGwi8uDkw1uRhw%2Bk9HNxNFJ4WkByBkm7jKA0gowPM%2BuaOFjIjH8Wm5URUCmdf5cOEw6Bt1BaWoUzn%2FlgLkbX13EuWqdAaCpwlO27taJCdnmVvWDTFDLkd35biPyA8xF4JMEFj28arMMd%2BS75ZZAzJTKdnQzq%2F2qm%2B8X93oRpDyUenQsQkXlYnzl1OTj02zqU40Y8cic5Brzkuuh9AbxeiqFfR1YsMYMuzbtwStp5r9zQltoHvacZbVqdnVJd3aSTW2Io1ZkyYjaqQzamPE1txJ8yTv4joKEZWFWtVDzzXapCvV4gROn%2B0h2qh8Tt2ohY2%2B4ZChaRgMnNOMU3TN9GdM2AKzDbq%2Fhnhq70mFrFWmSXQbsGvw6NoqhK2mrIgkEiHUy0xYlzijp%2F4aKKmBwJGjoNYGVWqvFKrd295sUvkxhdfwvA3rqLwKevAsmujxfULlwKAgQ1kwwIm2vgY6pgGCEpWnJVWHott8%2BfR8jhwNToJwkU%2BJJYUxywD2Fws0Si2XGOTF4FYrqYDi94ofRQSjCGWeArpwohuL%2Bt%2BLZGaljYub%2FwSEyR8PighJPWvJ7dXPJRZhXt6s8n2XErTgtX8UvAhEM25v%2FHTa%2FeZIgON%2FS7O3sTPVXJ%2FE%2FPvNEA37OrAY343Ud2Q0MWzTepMHMhZ5BakJ4Fw97748o0mS7QPr%2FHBL97a1&X-Amz-Signature=d19bae2fc6de3e8fe7493143517a892375c944c06fa4d847a360973c0c8f4170&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677CTEYQR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIHqd8VqcwmW2IRcm9t1yRxFXr1LDrCsErzdcXILO4YYXAiA774zehREPh7xlyg3QoHasc3BYETHLyigWxY4FMy8X0Sr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM3aJ2tDN%2FrO8mNhIKKtwD8BQChiORxXFLStvYZhNGhLACyTuA6%2BYn%2BSVs27pQrcxTvaAOmweJp1X2nJ5ZEvFNG%2BdHzoK8ToUlfmv1IUz9DBLZvgAYXGR8TCtRKVR%2FOjXFKkllwLIkNGhVBRx%2B0wfi%2FonQ4WUGDr0P%2FaSjuaL%2FMGvlKXAXIdRfGBi4Ng1KC2C1khpSiLxGwi8uDkw1uRhw%2Bk9HNxNFJ4WkByBkm7jKA0gowPM%2BuaOFjIjH8Wm5URUCmdf5cOEw6Bt1BaWoUzn%2FlgLkbX13EuWqdAaCpwlO27taJCdnmVvWDTFDLkd35biPyA8xF4JMEFj28arMMd%2BS75ZZAzJTKdnQzq%2F2qm%2B8X93oRpDyUenQsQkXlYnzl1OTj02zqU40Y8cic5Brzkuuh9AbxeiqFfR1YsMYMuzbtwStp5r9zQltoHvacZbVqdnVJd3aSTW2Io1ZkyYjaqQzamPE1txJ8yTv4joKEZWFWtVDzzXapCvV4gROn%2B0h2qh8Tt2ohY2%2B4ZChaRgMnNOMU3TN9GdM2AKzDbq%2Fhnhq70mFrFWmSXQbsGvw6NoqhK2mrIgkEiHUy0xYlzijp%2F4aKKmBwJGjoNYGVWqvFKrd295sUvkxhdfwvA3rqLwKevAsmujxfULlwKAgQ1kwwIm2vgY6pgGCEpWnJVWHott8%2BfR8jhwNToJwkU%2BJJYUxywD2Fws0Si2XGOTF4FYrqYDi94ofRQSjCGWeArpwohuL%2Bt%2BLZGaljYub%2FwSEyR8PighJPWvJ7dXPJRZhXt6s8n2XErTgtX8UvAhEM25v%2FHTa%2FeZIgON%2FS7O3sTPVXJ%2FE%2FPvNEA37OrAY343Ud2Q0MWzTepMHMhZ5BakJ4Fw97748o0mS7QPr%2FHBL97a1&X-Amz-Signature=1501a15718afc7bdad352c4bc55628b518831a6d89bba166dd4bad7b4082ea81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677CTEYQR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIHqd8VqcwmW2IRcm9t1yRxFXr1LDrCsErzdcXILO4YYXAiA774zehREPh7xlyg3QoHasc3BYETHLyigWxY4FMy8X0Sr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM3aJ2tDN%2FrO8mNhIKKtwD8BQChiORxXFLStvYZhNGhLACyTuA6%2BYn%2BSVs27pQrcxTvaAOmweJp1X2nJ5ZEvFNG%2BdHzoK8ToUlfmv1IUz9DBLZvgAYXGR8TCtRKVR%2FOjXFKkllwLIkNGhVBRx%2B0wfi%2FonQ4WUGDr0P%2FaSjuaL%2FMGvlKXAXIdRfGBi4Ng1KC2C1khpSiLxGwi8uDkw1uRhw%2Bk9HNxNFJ4WkByBkm7jKA0gowPM%2BuaOFjIjH8Wm5URUCmdf5cOEw6Bt1BaWoUzn%2FlgLkbX13EuWqdAaCpwlO27taJCdnmVvWDTFDLkd35biPyA8xF4JMEFj28arMMd%2BS75ZZAzJTKdnQzq%2F2qm%2B8X93oRpDyUenQsQkXlYnzl1OTj02zqU40Y8cic5Brzkuuh9AbxeiqFfR1YsMYMuzbtwStp5r9zQltoHvacZbVqdnVJd3aSTW2Io1ZkyYjaqQzamPE1txJ8yTv4joKEZWFWtVDzzXapCvV4gROn%2B0h2qh8Tt2ohY2%2B4ZChaRgMnNOMU3TN9GdM2AKzDbq%2Fhnhq70mFrFWmSXQbsGvw6NoqhK2mrIgkEiHUy0xYlzijp%2F4aKKmBwJGjoNYGVWqvFKrd295sUvkxhdfwvA3rqLwKevAsmujxfULlwKAgQ1kwwIm2vgY6pgGCEpWnJVWHott8%2BfR8jhwNToJwkU%2BJJYUxywD2Fws0Si2XGOTF4FYrqYDi94ofRQSjCGWeArpwohuL%2Bt%2BLZGaljYub%2FwSEyR8PighJPWvJ7dXPJRZhXt6s8n2XErTgtX8UvAhEM25v%2FHTa%2FeZIgON%2FS7O3sTPVXJ%2FE%2FPvNEA37OrAY343Ud2Q0MWzTepMHMhZ5BakJ4Fw97748o0mS7QPr%2FHBL97a1&X-Amz-Signature=bf1d90764ac5a586e87328ca6e11db1b5adeadd85141162a999d57e28f380c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677CTEYQR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIHqd8VqcwmW2IRcm9t1yRxFXr1LDrCsErzdcXILO4YYXAiA774zehREPh7xlyg3QoHasc3BYETHLyigWxY4FMy8X0Sr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM3aJ2tDN%2FrO8mNhIKKtwD8BQChiORxXFLStvYZhNGhLACyTuA6%2BYn%2BSVs27pQrcxTvaAOmweJp1X2nJ5ZEvFNG%2BdHzoK8ToUlfmv1IUz9DBLZvgAYXGR8TCtRKVR%2FOjXFKkllwLIkNGhVBRx%2B0wfi%2FonQ4WUGDr0P%2FaSjuaL%2FMGvlKXAXIdRfGBi4Ng1KC2C1khpSiLxGwi8uDkw1uRhw%2Bk9HNxNFJ4WkByBkm7jKA0gowPM%2BuaOFjIjH8Wm5URUCmdf5cOEw6Bt1BaWoUzn%2FlgLkbX13EuWqdAaCpwlO27taJCdnmVvWDTFDLkd35biPyA8xF4JMEFj28arMMd%2BS75ZZAzJTKdnQzq%2F2qm%2B8X93oRpDyUenQsQkXlYnzl1OTj02zqU40Y8cic5Brzkuuh9AbxeiqFfR1YsMYMuzbtwStp5r9zQltoHvacZbVqdnVJd3aSTW2Io1ZkyYjaqQzamPE1txJ8yTv4joKEZWFWtVDzzXapCvV4gROn%2B0h2qh8Tt2ohY2%2B4ZChaRgMnNOMU3TN9GdM2AKzDbq%2Fhnhq70mFrFWmSXQbsGvw6NoqhK2mrIgkEiHUy0xYlzijp%2F4aKKmBwJGjoNYGVWqvFKrd295sUvkxhdfwvA3rqLwKevAsmujxfULlwKAgQ1kwwIm2vgY6pgGCEpWnJVWHott8%2BfR8jhwNToJwkU%2BJJYUxywD2Fws0Si2XGOTF4FYrqYDi94ofRQSjCGWeArpwohuL%2Bt%2BLZGaljYub%2FwSEyR8PighJPWvJ7dXPJRZhXt6s8n2XErTgtX8UvAhEM25v%2FHTa%2FeZIgON%2FS7O3sTPVXJ%2FE%2FPvNEA37OrAY343Ud2Q0MWzTepMHMhZ5BakJ4Fw97748o0mS7QPr%2FHBL97a1&X-Amz-Signature=bdfcc5a37773c3afb0f209639f27da70ee42cb2dbd1f7c695b7d0f0922f4bc98&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677CTEYQR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIHqd8VqcwmW2IRcm9t1yRxFXr1LDrCsErzdcXILO4YYXAiA774zehREPh7xlyg3QoHasc3BYETHLyigWxY4FMy8X0Sr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM3aJ2tDN%2FrO8mNhIKKtwD8BQChiORxXFLStvYZhNGhLACyTuA6%2BYn%2BSVs27pQrcxTvaAOmweJp1X2nJ5ZEvFNG%2BdHzoK8ToUlfmv1IUz9DBLZvgAYXGR8TCtRKVR%2FOjXFKkllwLIkNGhVBRx%2B0wfi%2FonQ4WUGDr0P%2FaSjuaL%2FMGvlKXAXIdRfGBi4Ng1KC2C1khpSiLxGwi8uDkw1uRhw%2Bk9HNxNFJ4WkByBkm7jKA0gowPM%2BuaOFjIjH8Wm5URUCmdf5cOEw6Bt1BaWoUzn%2FlgLkbX13EuWqdAaCpwlO27taJCdnmVvWDTFDLkd35biPyA8xF4JMEFj28arMMd%2BS75ZZAzJTKdnQzq%2F2qm%2B8X93oRpDyUenQsQkXlYnzl1OTj02zqU40Y8cic5Brzkuuh9AbxeiqFfR1YsMYMuzbtwStp5r9zQltoHvacZbVqdnVJd3aSTW2Io1ZkyYjaqQzamPE1txJ8yTv4joKEZWFWtVDzzXapCvV4gROn%2B0h2qh8Tt2ohY2%2B4ZChaRgMnNOMU3TN9GdM2AKzDbq%2Fhnhq70mFrFWmSXQbsGvw6NoqhK2mrIgkEiHUy0xYlzijp%2F4aKKmBwJGjoNYGVWqvFKrd295sUvkxhdfwvA3rqLwKevAsmujxfULlwKAgQ1kwwIm2vgY6pgGCEpWnJVWHott8%2BfR8jhwNToJwkU%2BJJYUxywD2Fws0Si2XGOTF4FYrqYDi94ofRQSjCGWeArpwohuL%2Bt%2BLZGaljYub%2FwSEyR8PighJPWvJ7dXPJRZhXt6s8n2XErTgtX8UvAhEM25v%2FHTa%2FeZIgON%2FS7O3sTPVXJ%2FE%2FPvNEA37OrAY343Ud2Q0MWzTepMHMhZ5BakJ4Fw97748o0mS7QPr%2FHBL97a1&X-Amz-Signature=aafbf44beea81369ded8e57ed97ecf92e4b51351d7e6d8573a1c07cbd4beaf95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677CTEYQR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIHqd8VqcwmW2IRcm9t1yRxFXr1LDrCsErzdcXILO4YYXAiA774zehREPh7xlyg3QoHasc3BYETHLyigWxY4FMy8X0Sr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM3aJ2tDN%2FrO8mNhIKKtwD8BQChiORxXFLStvYZhNGhLACyTuA6%2BYn%2BSVs27pQrcxTvaAOmweJp1X2nJ5ZEvFNG%2BdHzoK8ToUlfmv1IUz9DBLZvgAYXGR8TCtRKVR%2FOjXFKkllwLIkNGhVBRx%2B0wfi%2FonQ4WUGDr0P%2FaSjuaL%2FMGvlKXAXIdRfGBi4Ng1KC2C1khpSiLxGwi8uDkw1uRhw%2Bk9HNxNFJ4WkByBkm7jKA0gowPM%2BuaOFjIjH8Wm5URUCmdf5cOEw6Bt1BaWoUzn%2FlgLkbX13EuWqdAaCpwlO27taJCdnmVvWDTFDLkd35biPyA8xF4JMEFj28arMMd%2BS75ZZAzJTKdnQzq%2F2qm%2B8X93oRpDyUenQsQkXlYnzl1OTj02zqU40Y8cic5Brzkuuh9AbxeiqFfR1YsMYMuzbtwStp5r9zQltoHvacZbVqdnVJd3aSTW2Io1ZkyYjaqQzamPE1txJ8yTv4joKEZWFWtVDzzXapCvV4gROn%2B0h2qh8Tt2ohY2%2B4ZChaRgMnNOMU3TN9GdM2AKzDbq%2Fhnhq70mFrFWmSXQbsGvw6NoqhK2mrIgkEiHUy0xYlzijp%2F4aKKmBwJGjoNYGVWqvFKrd295sUvkxhdfwvA3rqLwKevAsmujxfULlwKAgQ1kwwIm2vgY6pgGCEpWnJVWHott8%2BfR8jhwNToJwkU%2BJJYUxywD2Fws0Si2XGOTF4FYrqYDi94ofRQSjCGWeArpwohuL%2Bt%2BLZGaljYub%2FwSEyR8PighJPWvJ7dXPJRZhXt6s8n2XErTgtX8UvAhEM25v%2FHTa%2FeZIgON%2FS7O3sTPVXJ%2FE%2FPvNEA37OrAY343Ud2Q0MWzTepMHMhZ5BakJ4Fw97748o0mS7QPr%2FHBL97a1&X-Amz-Signature=961d9d9fd805389b776eb9f203822c8c92a08bf338c5ddf43589f9ec2e1e421c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
