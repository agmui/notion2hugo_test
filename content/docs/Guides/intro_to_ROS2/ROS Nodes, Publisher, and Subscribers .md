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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5PVXNDT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVQyOTrtD2A5TySqQ%2FTGMGKMDRdvh6tnGNmQuzY4p%2FQAiAOcC3kuMPk7Z6emWSo0rJWp7cNJTNq8Gyq8oIQ7cumuCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHmlkcAat9Oat8K7fKtwDOa4kbScgSesRefn8rC%2FFj5gRDzCmXkjA7RaUVySl4qXTGSWNJ9J265ZSgFTahHB0z1CWYFNlMwzmwhJykECXTk1AKxmRORfKCeFVXUNSmMDWCJrzNtwwRxRZACR9YY1wVj2LR42s7GQsY%2ByFiqQyg6loNkJExeTY1V8I%2BQ48cYhsCKsheHa70jhyWxsnWeXL1L9HI9qccmdNzio%2F10nPS6dqLcTSxNNIHXAtVSX5QmUx%2BM4HjOkIWW8m1cB5k2Ng12yPIqjF6QY23nkjFx%2FTlIXpgDVPPlumiVrFxTg6kxYJMiPICGG%2FJR6Ar2L9quO8KtQ6ReHs0zCoNjh6tRVlADqZJkrurErzKFrvLYpS9FtlD9x6scs61Pn2UubJle%2F%2BJgzUC652pwuQ3SRhOnH0Vpaavmj6GK87%2BdoyxcQpmP4FcV1gtScyLSs1CU%2BB%2FSrCkkHPbDV3%2FeWz9JoMfi9G4Xn274SDw5ZLUmm%2FmLP4ldFvxNvaZg4touxyMKb8OxxHzzEqr3s%2Bxb0altZCTqRUExh75jRl5r8qqf13JoFWDFBPQq%2FyVRvggG7Dccibprzo404vx%2Bds%2B%2FLT1YPPPiCas9bVoVUz0lRmQA8osrmpF4cXYr0ivrgrkOBlM2YwsvHRwgY6pgFxxBjaBKHoizAKQ2n5VaJ9CoSlJkyVEGEupHuh2dHh5GeFNhXwhX1yOmToKH2RV4LiQTkLD1MLRqzI8EgysFiS2NXfiTxS%2BUiggzzqKju4xkjuIhGReVGNBwHph4crKHeBLPE4Qlf1K8EaqfAxyFi72OWWp4CGstfKSSfr%2F4E9yZQYhxRCGfbMtAIF0R%2BW%2FDjjR3yGdsxRRxaHRzeJSxiYUnAIWllr&X-Amz-Signature=69803cd9cf3a8e31f8f70ace202af6274a0a89551b627be5952c5ff1711af41d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5PVXNDT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVQyOTrtD2A5TySqQ%2FTGMGKMDRdvh6tnGNmQuzY4p%2FQAiAOcC3kuMPk7Z6emWSo0rJWp7cNJTNq8Gyq8oIQ7cumuCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHmlkcAat9Oat8K7fKtwDOa4kbScgSesRefn8rC%2FFj5gRDzCmXkjA7RaUVySl4qXTGSWNJ9J265ZSgFTahHB0z1CWYFNlMwzmwhJykECXTk1AKxmRORfKCeFVXUNSmMDWCJrzNtwwRxRZACR9YY1wVj2LR42s7GQsY%2ByFiqQyg6loNkJExeTY1V8I%2BQ48cYhsCKsheHa70jhyWxsnWeXL1L9HI9qccmdNzio%2F10nPS6dqLcTSxNNIHXAtVSX5QmUx%2BM4HjOkIWW8m1cB5k2Ng12yPIqjF6QY23nkjFx%2FTlIXpgDVPPlumiVrFxTg6kxYJMiPICGG%2FJR6Ar2L9quO8KtQ6ReHs0zCoNjh6tRVlADqZJkrurErzKFrvLYpS9FtlD9x6scs61Pn2UubJle%2F%2BJgzUC652pwuQ3SRhOnH0Vpaavmj6GK87%2BdoyxcQpmP4FcV1gtScyLSs1CU%2BB%2FSrCkkHPbDV3%2FeWz9JoMfi9G4Xn274SDw5ZLUmm%2FmLP4ldFvxNvaZg4touxyMKb8OxxHzzEqr3s%2Bxb0altZCTqRUExh75jRl5r8qqf13JoFWDFBPQq%2FyVRvggG7Dccibprzo404vx%2Bds%2B%2FLT1YPPPiCas9bVoVUz0lRmQA8osrmpF4cXYr0ivrgrkOBlM2YwsvHRwgY6pgFxxBjaBKHoizAKQ2n5VaJ9CoSlJkyVEGEupHuh2dHh5GeFNhXwhX1yOmToKH2RV4LiQTkLD1MLRqzI8EgysFiS2NXfiTxS%2BUiggzzqKju4xkjuIhGReVGNBwHph4crKHeBLPE4Qlf1K8EaqfAxyFi72OWWp4CGstfKSSfr%2F4E9yZQYhxRCGfbMtAIF0R%2BW%2FDjjR3yGdsxRRxaHRzeJSxiYUnAIWllr&X-Amz-Signature=080f28bac7f1aab138ffd2345a1ed9b69532068a9126333e6e2e7cabde46be59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5PVXNDT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVQyOTrtD2A5TySqQ%2FTGMGKMDRdvh6tnGNmQuzY4p%2FQAiAOcC3kuMPk7Z6emWSo0rJWp7cNJTNq8Gyq8oIQ7cumuCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHmlkcAat9Oat8K7fKtwDOa4kbScgSesRefn8rC%2FFj5gRDzCmXkjA7RaUVySl4qXTGSWNJ9J265ZSgFTahHB0z1CWYFNlMwzmwhJykECXTk1AKxmRORfKCeFVXUNSmMDWCJrzNtwwRxRZACR9YY1wVj2LR42s7GQsY%2ByFiqQyg6loNkJExeTY1V8I%2BQ48cYhsCKsheHa70jhyWxsnWeXL1L9HI9qccmdNzio%2F10nPS6dqLcTSxNNIHXAtVSX5QmUx%2BM4HjOkIWW8m1cB5k2Ng12yPIqjF6QY23nkjFx%2FTlIXpgDVPPlumiVrFxTg6kxYJMiPICGG%2FJR6Ar2L9quO8KtQ6ReHs0zCoNjh6tRVlADqZJkrurErzKFrvLYpS9FtlD9x6scs61Pn2UubJle%2F%2BJgzUC652pwuQ3SRhOnH0Vpaavmj6GK87%2BdoyxcQpmP4FcV1gtScyLSs1CU%2BB%2FSrCkkHPbDV3%2FeWz9JoMfi9G4Xn274SDw5ZLUmm%2FmLP4ldFvxNvaZg4touxyMKb8OxxHzzEqr3s%2Bxb0altZCTqRUExh75jRl5r8qqf13JoFWDFBPQq%2FyVRvggG7Dccibprzo404vx%2Bds%2B%2FLT1YPPPiCas9bVoVUz0lRmQA8osrmpF4cXYr0ivrgrkOBlM2YwsvHRwgY6pgFxxBjaBKHoizAKQ2n5VaJ9CoSlJkyVEGEupHuh2dHh5GeFNhXwhX1yOmToKH2RV4LiQTkLD1MLRqzI8EgysFiS2NXfiTxS%2BUiggzzqKju4xkjuIhGReVGNBwHph4crKHeBLPE4Qlf1K8EaqfAxyFi72OWWp4CGstfKSSfr%2F4E9yZQYhxRCGfbMtAIF0R%2BW%2FDjjR3yGdsxRRxaHRzeJSxiYUnAIWllr&X-Amz-Signature=7d6b722fc73f09e1cde4bd7f1b552020fade7f9103562b0faa9ec53a822b9cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5PVXNDT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVQyOTrtD2A5TySqQ%2FTGMGKMDRdvh6tnGNmQuzY4p%2FQAiAOcC3kuMPk7Z6emWSo0rJWp7cNJTNq8Gyq8oIQ7cumuCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHmlkcAat9Oat8K7fKtwDOa4kbScgSesRefn8rC%2FFj5gRDzCmXkjA7RaUVySl4qXTGSWNJ9J265ZSgFTahHB0z1CWYFNlMwzmwhJykECXTk1AKxmRORfKCeFVXUNSmMDWCJrzNtwwRxRZACR9YY1wVj2LR42s7GQsY%2ByFiqQyg6loNkJExeTY1V8I%2BQ48cYhsCKsheHa70jhyWxsnWeXL1L9HI9qccmdNzio%2F10nPS6dqLcTSxNNIHXAtVSX5QmUx%2BM4HjOkIWW8m1cB5k2Ng12yPIqjF6QY23nkjFx%2FTlIXpgDVPPlumiVrFxTg6kxYJMiPICGG%2FJR6Ar2L9quO8KtQ6ReHs0zCoNjh6tRVlADqZJkrurErzKFrvLYpS9FtlD9x6scs61Pn2UubJle%2F%2BJgzUC652pwuQ3SRhOnH0Vpaavmj6GK87%2BdoyxcQpmP4FcV1gtScyLSs1CU%2BB%2FSrCkkHPbDV3%2FeWz9JoMfi9G4Xn274SDw5ZLUmm%2FmLP4ldFvxNvaZg4touxyMKb8OxxHzzEqr3s%2Bxb0altZCTqRUExh75jRl5r8qqf13JoFWDFBPQq%2FyVRvggG7Dccibprzo404vx%2Bds%2B%2FLT1YPPPiCas9bVoVUz0lRmQA8osrmpF4cXYr0ivrgrkOBlM2YwsvHRwgY6pgFxxBjaBKHoizAKQ2n5VaJ9CoSlJkyVEGEupHuh2dHh5GeFNhXwhX1yOmToKH2RV4LiQTkLD1MLRqzI8EgysFiS2NXfiTxS%2BUiggzzqKju4xkjuIhGReVGNBwHph4crKHeBLPE4Qlf1K8EaqfAxyFi72OWWp4CGstfKSSfr%2F4E9yZQYhxRCGfbMtAIF0R%2BW%2FDjjR3yGdsxRRxaHRzeJSxiYUnAIWllr&X-Amz-Signature=e592975f3347637abb03a5fc28d6925fcd2dbcf148982571188c514ceea70cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5PVXNDT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVQyOTrtD2A5TySqQ%2FTGMGKMDRdvh6tnGNmQuzY4p%2FQAiAOcC3kuMPk7Z6emWSo0rJWp7cNJTNq8Gyq8oIQ7cumuCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHmlkcAat9Oat8K7fKtwDOa4kbScgSesRefn8rC%2FFj5gRDzCmXkjA7RaUVySl4qXTGSWNJ9J265ZSgFTahHB0z1CWYFNlMwzmwhJykECXTk1AKxmRORfKCeFVXUNSmMDWCJrzNtwwRxRZACR9YY1wVj2LR42s7GQsY%2ByFiqQyg6loNkJExeTY1V8I%2BQ48cYhsCKsheHa70jhyWxsnWeXL1L9HI9qccmdNzio%2F10nPS6dqLcTSxNNIHXAtVSX5QmUx%2BM4HjOkIWW8m1cB5k2Ng12yPIqjF6QY23nkjFx%2FTlIXpgDVPPlumiVrFxTg6kxYJMiPICGG%2FJR6Ar2L9quO8KtQ6ReHs0zCoNjh6tRVlADqZJkrurErzKFrvLYpS9FtlD9x6scs61Pn2UubJle%2F%2BJgzUC652pwuQ3SRhOnH0Vpaavmj6GK87%2BdoyxcQpmP4FcV1gtScyLSs1CU%2BB%2FSrCkkHPbDV3%2FeWz9JoMfi9G4Xn274SDw5ZLUmm%2FmLP4ldFvxNvaZg4touxyMKb8OxxHzzEqr3s%2Bxb0altZCTqRUExh75jRl5r8qqf13JoFWDFBPQq%2FyVRvggG7Dccibprzo404vx%2Bds%2B%2FLT1YPPPiCas9bVoVUz0lRmQA8osrmpF4cXYr0ivrgrkOBlM2YwsvHRwgY6pgFxxBjaBKHoizAKQ2n5VaJ9CoSlJkyVEGEupHuh2dHh5GeFNhXwhX1yOmToKH2RV4LiQTkLD1MLRqzI8EgysFiS2NXfiTxS%2BUiggzzqKju4xkjuIhGReVGNBwHph4crKHeBLPE4Qlf1K8EaqfAxyFi72OWWp4CGstfKSSfr%2F4E9yZQYhxRCGfbMtAIF0R%2BW%2FDjjR3yGdsxRRxaHRzeJSxiYUnAIWllr&X-Amz-Signature=2b6b3d4a3bb9fe02d324fe4e1aba910c50068481a509cd56fed366078fddbf15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5PVXNDT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVQyOTrtD2A5TySqQ%2FTGMGKMDRdvh6tnGNmQuzY4p%2FQAiAOcC3kuMPk7Z6emWSo0rJWp7cNJTNq8Gyq8oIQ7cumuCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHmlkcAat9Oat8K7fKtwDOa4kbScgSesRefn8rC%2FFj5gRDzCmXkjA7RaUVySl4qXTGSWNJ9J265ZSgFTahHB0z1CWYFNlMwzmwhJykECXTk1AKxmRORfKCeFVXUNSmMDWCJrzNtwwRxRZACR9YY1wVj2LR42s7GQsY%2ByFiqQyg6loNkJExeTY1V8I%2BQ48cYhsCKsheHa70jhyWxsnWeXL1L9HI9qccmdNzio%2F10nPS6dqLcTSxNNIHXAtVSX5QmUx%2BM4HjOkIWW8m1cB5k2Ng12yPIqjF6QY23nkjFx%2FTlIXpgDVPPlumiVrFxTg6kxYJMiPICGG%2FJR6Ar2L9quO8KtQ6ReHs0zCoNjh6tRVlADqZJkrurErzKFrvLYpS9FtlD9x6scs61Pn2UubJle%2F%2BJgzUC652pwuQ3SRhOnH0Vpaavmj6GK87%2BdoyxcQpmP4FcV1gtScyLSs1CU%2BB%2FSrCkkHPbDV3%2FeWz9JoMfi9G4Xn274SDw5ZLUmm%2FmLP4ldFvxNvaZg4touxyMKb8OxxHzzEqr3s%2Bxb0altZCTqRUExh75jRl5r8qqf13JoFWDFBPQq%2FyVRvggG7Dccibprzo404vx%2Bds%2B%2FLT1YPPPiCas9bVoVUz0lRmQA8osrmpF4cXYr0ivrgrkOBlM2YwsvHRwgY6pgFxxBjaBKHoizAKQ2n5VaJ9CoSlJkyVEGEupHuh2dHh5GeFNhXwhX1yOmToKH2RV4LiQTkLD1MLRqzI8EgysFiS2NXfiTxS%2BUiggzzqKju4xkjuIhGReVGNBwHph4crKHeBLPE4Qlf1K8EaqfAxyFi72OWWp4CGstfKSSfr%2F4E9yZQYhxRCGfbMtAIF0R%2BW%2FDjjR3yGdsxRRxaHRzeJSxiYUnAIWllr&X-Amz-Signature=cd58437cce56195a386c237eeb8c3f6f6b9d7183c6511464c78da6aeb8d47449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5PVXNDT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVQyOTrtD2A5TySqQ%2FTGMGKMDRdvh6tnGNmQuzY4p%2FQAiAOcC3kuMPk7Z6emWSo0rJWp7cNJTNq8Gyq8oIQ7cumuCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHmlkcAat9Oat8K7fKtwDOa4kbScgSesRefn8rC%2FFj5gRDzCmXkjA7RaUVySl4qXTGSWNJ9J265ZSgFTahHB0z1CWYFNlMwzmwhJykECXTk1AKxmRORfKCeFVXUNSmMDWCJrzNtwwRxRZACR9YY1wVj2LR42s7GQsY%2ByFiqQyg6loNkJExeTY1V8I%2BQ48cYhsCKsheHa70jhyWxsnWeXL1L9HI9qccmdNzio%2F10nPS6dqLcTSxNNIHXAtVSX5QmUx%2BM4HjOkIWW8m1cB5k2Ng12yPIqjF6QY23nkjFx%2FTlIXpgDVPPlumiVrFxTg6kxYJMiPICGG%2FJR6Ar2L9quO8KtQ6ReHs0zCoNjh6tRVlADqZJkrurErzKFrvLYpS9FtlD9x6scs61Pn2UubJle%2F%2BJgzUC652pwuQ3SRhOnH0Vpaavmj6GK87%2BdoyxcQpmP4FcV1gtScyLSs1CU%2BB%2FSrCkkHPbDV3%2FeWz9JoMfi9G4Xn274SDw5ZLUmm%2FmLP4ldFvxNvaZg4touxyMKb8OxxHzzEqr3s%2Bxb0altZCTqRUExh75jRl5r8qqf13JoFWDFBPQq%2FyVRvggG7Dccibprzo404vx%2Bds%2B%2FLT1YPPPiCas9bVoVUz0lRmQA8osrmpF4cXYr0ivrgrkOBlM2YwsvHRwgY6pgFxxBjaBKHoizAKQ2n5VaJ9CoSlJkyVEGEupHuh2dHh5GeFNhXwhX1yOmToKH2RV4LiQTkLD1MLRqzI8EgysFiS2NXfiTxS%2BUiggzzqKju4xkjuIhGReVGNBwHph4crKHeBLPE4Qlf1K8EaqfAxyFi72OWWp4CGstfKSSfr%2F4E9yZQYhxRCGfbMtAIF0R%2BW%2FDjjR3yGdsxRRxaHRzeJSxiYUnAIWllr&X-Amz-Signature=1dc780d3473b3489e021a440128d6a46ee41f143a422195714970f0747b76b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5PVXNDT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVQyOTrtD2A5TySqQ%2FTGMGKMDRdvh6tnGNmQuzY4p%2FQAiAOcC3kuMPk7Z6emWSo0rJWp7cNJTNq8Gyq8oIQ7cumuCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHmlkcAat9Oat8K7fKtwDOa4kbScgSesRefn8rC%2FFj5gRDzCmXkjA7RaUVySl4qXTGSWNJ9J265ZSgFTahHB0z1CWYFNlMwzmwhJykECXTk1AKxmRORfKCeFVXUNSmMDWCJrzNtwwRxRZACR9YY1wVj2LR42s7GQsY%2ByFiqQyg6loNkJExeTY1V8I%2BQ48cYhsCKsheHa70jhyWxsnWeXL1L9HI9qccmdNzio%2F10nPS6dqLcTSxNNIHXAtVSX5QmUx%2BM4HjOkIWW8m1cB5k2Ng12yPIqjF6QY23nkjFx%2FTlIXpgDVPPlumiVrFxTg6kxYJMiPICGG%2FJR6Ar2L9quO8KtQ6ReHs0zCoNjh6tRVlADqZJkrurErzKFrvLYpS9FtlD9x6scs61Pn2UubJle%2F%2BJgzUC652pwuQ3SRhOnH0Vpaavmj6GK87%2BdoyxcQpmP4FcV1gtScyLSs1CU%2BB%2FSrCkkHPbDV3%2FeWz9JoMfi9G4Xn274SDw5ZLUmm%2FmLP4ldFvxNvaZg4touxyMKb8OxxHzzEqr3s%2Bxb0altZCTqRUExh75jRl5r8qqf13JoFWDFBPQq%2FyVRvggG7Dccibprzo404vx%2Bds%2B%2FLT1YPPPiCas9bVoVUz0lRmQA8osrmpF4cXYr0ivrgrkOBlM2YwsvHRwgY6pgFxxBjaBKHoizAKQ2n5VaJ9CoSlJkyVEGEupHuh2dHh5GeFNhXwhX1yOmToKH2RV4LiQTkLD1MLRqzI8EgysFiS2NXfiTxS%2BUiggzzqKju4xkjuIhGReVGNBwHph4crKHeBLPE4Qlf1K8EaqfAxyFi72OWWp4CGstfKSSfr%2F4E9yZQYhxRCGfbMtAIF0R%2BW%2FDjjR3yGdsxRRxaHRzeJSxiYUnAIWllr&X-Amz-Signature=f2f8b37c939179910f02daeddc0169eddcb0fcbeabb0f8502d673a1837cd0bc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
