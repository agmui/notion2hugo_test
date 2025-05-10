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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5LS4VR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvRme0ecUBvTWRpu4O5BkuAGhupN93Pm4w9NcBn9HJIAIgaCmOJsU7%2F4x4AaRwCAXBCqgNXxZESAAseZv9dbL6KbkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI4Vp2Nqj11hU4MDSrcAxE8GVIYx3UKU1g%2FP%2BY5zuqYXG1v1tSqc5OHmhvN5Hj4muJTltQbPW7Wf1a3QEk3uFrpFJpg4XlE80W24iVOYc1JaiT3gWhv%2BDL9JGTXZZLycTtTPwmBs4U%2FzZTldTtQSxS8lJHZJBetSjmes2FnK%2F0U1eIvA%2BFoP7MquHEVW%2Bd9Mk74acmYo8sIBj%2BTT5iGUmiVMlTd01W8wXe4tVUWSuw12gpx7aeyBL9orLWvzfGl96C7d5VNhjAhpch7kuLOvZBgECyDb6HrBmmwRu3VsRGrC1fBimpdNzAp9i7wcDkHNRQCh2FlbBcEwU6BLzoYvSFRZettTvZTK8VXPLGkxYcyEaAHOyKBh6DAdpk7pOx8g1gE4cDgFVWoc%2BHtuvbZj6cOb5XnQ9bfWIms9UzNoesuZmKYTr5PaHtCGCUhK1oketMRbuLcndcDD0AY1C16wLgRrEnCMTspsQPGn5rPzu2g%2B%2F68l2JzVhYC1LhpDL%2FIHl6mNX%2BDrchvl2OBqL3mRolmZhwwuyv%2F8QBmK9z8IJVHT8OK%2BRO%2BFCRu1INeH%2FNbYG2PBd0%2B5eLFK6DS4eeXePRRxREY9VBw3aT0yx6pAFHFBs4MSOZqb3rxe7MGDp8XbTHqybjpxYv%2FvySUMJm7%2B8AGOqUBXWvekEG2EF0FO%2FRlePgNl63cMTlkQEJgu0yqRHr6g5ctQieKrQTsUMlrTqG400TatDYmlWN%2F2N20kjo5lLif8QVfdV3FLAGPtzJzAmUsvXwpFYPtkf12YmMIz20LIh6obRc85%2F6R%2BVVrCTAd%2BAArrOd2PZY4Tjq%2BA747JY5%2FY5qg06tDsRMEyHlGsvBOEluqeWUKKoVy8RzxzrAjVx1cjiVj99Gl&X-Amz-Signature=b2cba8cb1c46789c8d8d45cc4304c552c7a390986c5f55946825beee849d3343&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5LS4VR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvRme0ecUBvTWRpu4O5BkuAGhupN93Pm4w9NcBn9HJIAIgaCmOJsU7%2F4x4AaRwCAXBCqgNXxZESAAseZv9dbL6KbkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI4Vp2Nqj11hU4MDSrcAxE8GVIYx3UKU1g%2FP%2BY5zuqYXG1v1tSqc5OHmhvN5Hj4muJTltQbPW7Wf1a3QEk3uFrpFJpg4XlE80W24iVOYc1JaiT3gWhv%2BDL9JGTXZZLycTtTPwmBs4U%2FzZTldTtQSxS8lJHZJBetSjmes2FnK%2F0U1eIvA%2BFoP7MquHEVW%2Bd9Mk74acmYo8sIBj%2BTT5iGUmiVMlTd01W8wXe4tVUWSuw12gpx7aeyBL9orLWvzfGl96C7d5VNhjAhpch7kuLOvZBgECyDb6HrBmmwRu3VsRGrC1fBimpdNzAp9i7wcDkHNRQCh2FlbBcEwU6BLzoYvSFRZettTvZTK8VXPLGkxYcyEaAHOyKBh6DAdpk7pOx8g1gE4cDgFVWoc%2BHtuvbZj6cOb5XnQ9bfWIms9UzNoesuZmKYTr5PaHtCGCUhK1oketMRbuLcndcDD0AY1C16wLgRrEnCMTspsQPGn5rPzu2g%2B%2F68l2JzVhYC1LhpDL%2FIHl6mNX%2BDrchvl2OBqL3mRolmZhwwuyv%2F8QBmK9z8IJVHT8OK%2BRO%2BFCRu1INeH%2FNbYG2PBd0%2B5eLFK6DS4eeXePRRxREY9VBw3aT0yx6pAFHFBs4MSOZqb3rxe7MGDp8XbTHqybjpxYv%2FvySUMJm7%2B8AGOqUBXWvekEG2EF0FO%2FRlePgNl63cMTlkQEJgu0yqRHr6g5ctQieKrQTsUMlrTqG400TatDYmlWN%2F2N20kjo5lLif8QVfdV3FLAGPtzJzAmUsvXwpFYPtkf12YmMIz20LIh6obRc85%2F6R%2BVVrCTAd%2BAArrOd2PZY4Tjq%2BA747JY5%2FY5qg06tDsRMEyHlGsvBOEluqeWUKKoVy8RzxzrAjVx1cjiVj99Gl&X-Amz-Signature=292f24d7e6e4d756b92521add5a06e119641f401ddff706f7163535865389ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5LS4VR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvRme0ecUBvTWRpu4O5BkuAGhupN93Pm4w9NcBn9HJIAIgaCmOJsU7%2F4x4AaRwCAXBCqgNXxZESAAseZv9dbL6KbkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI4Vp2Nqj11hU4MDSrcAxE8GVIYx3UKU1g%2FP%2BY5zuqYXG1v1tSqc5OHmhvN5Hj4muJTltQbPW7Wf1a3QEk3uFrpFJpg4XlE80W24iVOYc1JaiT3gWhv%2BDL9JGTXZZLycTtTPwmBs4U%2FzZTldTtQSxS8lJHZJBetSjmes2FnK%2F0U1eIvA%2BFoP7MquHEVW%2Bd9Mk74acmYo8sIBj%2BTT5iGUmiVMlTd01W8wXe4tVUWSuw12gpx7aeyBL9orLWvzfGl96C7d5VNhjAhpch7kuLOvZBgECyDb6HrBmmwRu3VsRGrC1fBimpdNzAp9i7wcDkHNRQCh2FlbBcEwU6BLzoYvSFRZettTvZTK8VXPLGkxYcyEaAHOyKBh6DAdpk7pOx8g1gE4cDgFVWoc%2BHtuvbZj6cOb5XnQ9bfWIms9UzNoesuZmKYTr5PaHtCGCUhK1oketMRbuLcndcDD0AY1C16wLgRrEnCMTspsQPGn5rPzu2g%2B%2F68l2JzVhYC1LhpDL%2FIHl6mNX%2BDrchvl2OBqL3mRolmZhwwuyv%2F8QBmK9z8IJVHT8OK%2BRO%2BFCRu1INeH%2FNbYG2PBd0%2B5eLFK6DS4eeXePRRxREY9VBw3aT0yx6pAFHFBs4MSOZqb3rxe7MGDp8XbTHqybjpxYv%2FvySUMJm7%2B8AGOqUBXWvekEG2EF0FO%2FRlePgNl63cMTlkQEJgu0yqRHr6g5ctQieKrQTsUMlrTqG400TatDYmlWN%2F2N20kjo5lLif8QVfdV3FLAGPtzJzAmUsvXwpFYPtkf12YmMIz20LIh6obRc85%2F6R%2BVVrCTAd%2BAArrOd2PZY4Tjq%2BA747JY5%2FY5qg06tDsRMEyHlGsvBOEluqeWUKKoVy8RzxzrAjVx1cjiVj99Gl&X-Amz-Signature=75429eccd916874c08c0213a523e76b5282d042734164abeb4f4426b8abfff00&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5LS4VR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvRme0ecUBvTWRpu4O5BkuAGhupN93Pm4w9NcBn9HJIAIgaCmOJsU7%2F4x4AaRwCAXBCqgNXxZESAAseZv9dbL6KbkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI4Vp2Nqj11hU4MDSrcAxE8GVIYx3UKU1g%2FP%2BY5zuqYXG1v1tSqc5OHmhvN5Hj4muJTltQbPW7Wf1a3QEk3uFrpFJpg4XlE80W24iVOYc1JaiT3gWhv%2BDL9JGTXZZLycTtTPwmBs4U%2FzZTldTtQSxS8lJHZJBetSjmes2FnK%2F0U1eIvA%2BFoP7MquHEVW%2Bd9Mk74acmYo8sIBj%2BTT5iGUmiVMlTd01W8wXe4tVUWSuw12gpx7aeyBL9orLWvzfGl96C7d5VNhjAhpch7kuLOvZBgECyDb6HrBmmwRu3VsRGrC1fBimpdNzAp9i7wcDkHNRQCh2FlbBcEwU6BLzoYvSFRZettTvZTK8VXPLGkxYcyEaAHOyKBh6DAdpk7pOx8g1gE4cDgFVWoc%2BHtuvbZj6cOb5XnQ9bfWIms9UzNoesuZmKYTr5PaHtCGCUhK1oketMRbuLcndcDD0AY1C16wLgRrEnCMTspsQPGn5rPzu2g%2B%2F68l2JzVhYC1LhpDL%2FIHl6mNX%2BDrchvl2OBqL3mRolmZhwwuyv%2F8QBmK9z8IJVHT8OK%2BRO%2BFCRu1INeH%2FNbYG2PBd0%2B5eLFK6DS4eeXePRRxREY9VBw3aT0yx6pAFHFBs4MSOZqb3rxe7MGDp8XbTHqybjpxYv%2FvySUMJm7%2B8AGOqUBXWvekEG2EF0FO%2FRlePgNl63cMTlkQEJgu0yqRHr6g5ctQieKrQTsUMlrTqG400TatDYmlWN%2F2N20kjo5lLif8QVfdV3FLAGPtzJzAmUsvXwpFYPtkf12YmMIz20LIh6obRc85%2F6R%2BVVrCTAd%2BAArrOd2PZY4Tjq%2BA747JY5%2FY5qg06tDsRMEyHlGsvBOEluqeWUKKoVy8RzxzrAjVx1cjiVj99Gl&X-Amz-Signature=42dcfbb11da4f1c2a9690181932fbb0eada63d1bf622bb6a335bb782aced4af3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5LS4VR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvRme0ecUBvTWRpu4O5BkuAGhupN93Pm4w9NcBn9HJIAIgaCmOJsU7%2F4x4AaRwCAXBCqgNXxZESAAseZv9dbL6KbkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI4Vp2Nqj11hU4MDSrcAxE8GVIYx3UKU1g%2FP%2BY5zuqYXG1v1tSqc5OHmhvN5Hj4muJTltQbPW7Wf1a3QEk3uFrpFJpg4XlE80W24iVOYc1JaiT3gWhv%2BDL9JGTXZZLycTtTPwmBs4U%2FzZTldTtQSxS8lJHZJBetSjmes2FnK%2F0U1eIvA%2BFoP7MquHEVW%2Bd9Mk74acmYo8sIBj%2BTT5iGUmiVMlTd01W8wXe4tVUWSuw12gpx7aeyBL9orLWvzfGl96C7d5VNhjAhpch7kuLOvZBgECyDb6HrBmmwRu3VsRGrC1fBimpdNzAp9i7wcDkHNRQCh2FlbBcEwU6BLzoYvSFRZettTvZTK8VXPLGkxYcyEaAHOyKBh6DAdpk7pOx8g1gE4cDgFVWoc%2BHtuvbZj6cOb5XnQ9bfWIms9UzNoesuZmKYTr5PaHtCGCUhK1oketMRbuLcndcDD0AY1C16wLgRrEnCMTspsQPGn5rPzu2g%2B%2F68l2JzVhYC1LhpDL%2FIHl6mNX%2BDrchvl2OBqL3mRolmZhwwuyv%2F8QBmK9z8IJVHT8OK%2BRO%2BFCRu1INeH%2FNbYG2PBd0%2B5eLFK6DS4eeXePRRxREY9VBw3aT0yx6pAFHFBs4MSOZqb3rxe7MGDp8XbTHqybjpxYv%2FvySUMJm7%2B8AGOqUBXWvekEG2EF0FO%2FRlePgNl63cMTlkQEJgu0yqRHr6g5ctQieKrQTsUMlrTqG400TatDYmlWN%2F2N20kjo5lLif8QVfdV3FLAGPtzJzAmUsvXwpFYPtkf12YmMIz20LIh6obRc85%2F6R%2BVVrCTAd%2BAArrOd2PZY4Tjq%2BA747JY5%2FY5qg06tDsRMEyHlGsvBOEluqeWUKKoVy8RzxzrAjVx1cjiVj99Gl&X-Amz-Signature=6bd30321db7e6eefd625555bd8562f7e89a3ef2c6c0835aef22f590bad23662c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5LS4VR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvRme0ecUBvTWRpu4O5BkuAGhupN93Pm4w9NcBn9HJIAIgaCmOJsU7%2F4x4AaRwCAXBCqgNXxZESAAseZv9dbL6KbkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI4Vp2Nqj11hU4MDSrcAxE8GVIYx3UKU1g%2FP%2BY5zuqYXG1v1tSqc5OHmhvN5Hj4muJTltQbPW7Wf1a3QEk3uFrpFJpg4XlE80W24iVOYc1JaiT3gWhv%2BDL9JGTXZZLycTtTPwmBs4U%2FzZTldTtQSxS8lJHZJBetSjmes2FnK%2F0U1eIvA%2BFoP7MquHEVW%2Bd9Mk74acmYo8sIBj%2BTT5iGUmiVMlTd01W8wXe4tVUWSuw12gpx7aeyBL9orLWvzfGl96C7d5VNhjAhpch7kuLOvZBgECyDb6HrBmmwRu3VsRGrC1fBimpdNzAp9i7wcDkHNRQCh2FlbBcEwU6BLzoYvSFRZettTvZTK8VXPLGkxYcyEaAHOyKBh6DAdpk7pOx8g1gE4cDgFVWoc%2BHtuvbZj6cOb5XnQ9bfWIms9UzNoesuZmKYTr5PaHtCGCUhK1oketMRbuLcndcDD0AY1C16wLgRrEnCMTspsQPGn5rPzu2g%2B%2F68l2JzVhYC1LhpDL%2FIHl6mNX%2BDrchvl2OBqL3mRolmZhwwuyv%2F8QBmK9z8IJVHT8OK%2BRO%2BFCRu1INeH%2FNbYG2PBd0%2B5eLFK6DS4eeXePRRxREY9VBw3aT0yx6pAFHFBs4MSOZqb3rxe7MGDp8XbTHqybjpxYv%2FvySUMJm7%2B8AGOqUBXWvekEG2EF0FO%2FRlePgNl63cMTlkQEJgu0yqRHr6g5ctQieKrQTsUMlrTqG400TatDYmlWN%2F2N20kjo5lLif8QVfdV3FLAGPtzJzAmUsvXwpFYPtkf12YmMIz20LIh6obRc85%2F6R%2BVVrCTAd%2BAArrOd2PZY4Tjq%2BA747JY5%2FY5qg06tDsRMEyHlGsvBOEluqeWUKKoVy8RzxzrAjVx1cjiVj99Gl&X-Amz-Signature=9767eb2618e8b33d518f90545b305603d80a5b8562326ee257dd6f9206eca5de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5LS4VR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvRme0ecUBvTWRpu4O5BkuAGhupN93Pm4w9NcBn9HJIAIgaCmOJsU7%2F4x4AaRwCAXBCqgNXxZESAAseZv9dbL6KbkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI4Vp2Nqj11hU4MDSrcAxE8GVIYx3UKU1g%2FP%2BY5zuqYXG1v1tSqc5OHmhvN5Hj4muJTltQbPW7Wf1a3QEk3uFrpFJpg4XlE80W24iVOYc1JaiT3gWhv%2BDL9JGTXZZLycTtTPwmBs4U%2FzZTldTtQSxS8lJHZJBetSjmes2FnK%2F0U1eIvA%2BFoP7MquHEVW%2Bd9Mk74acmYo8sIBj%2BTT5iGUmiVMlTd01W8wXe4tVUWSuw12gpx7aeyBL9orLWvzfGl96C7d5VNhjAhpch7kuLOvZBgECyDb6HrBmmwRu3VsRGrC1fBimpdNzAp9i7wcDkHNRQCh2FlbBcEwU6BLzoYvSFRZettTvZTK8VXPLGkxYcyEaAHOyKBh6DAdpk7pOx8g1gE4cDgFVWoc%2BHtuvbZj6cOb5XnQ9bfWIms9UzNoesuZmKYTr5PaHtCGCUhK1oketMRbuLcndcDD0AY1C16wLgRrEnCMTspsQPGn5rPzu2g%2B%2F68l2JzVhYC1LhpDL%2FIHl6mNX%2BDrchvl2OBqL3mRolmZhwwuyv%2F8QBmK9z8IJVHT8OK%2BRO%2BFCRu1INeH%2FNbYG2PBd0%2B5eLFK6DS4eeXePRRxREY9VBw3aT0yx6pAFHFBs4MSOZqb3rxe7MGDp8XbTHqybjpxYv%2FvySUMJm7%2B8AGOqUBXWvekEG2EF0FO%2FRlePgNl63cMTlkQEJgu0yqRHr6g5ctQieKrQTsUMlrTqG400TatDYmlWN%2F2N20kjo5lLif8QVfdV3FLAGPtzJzAmUsvXwpFYPtkf12YmMIz20LIh6obRc85%2F6R%2BVVrCTAd%2BAArrOd2PZY4Tjq%2BA747JY5%2FY5qg06tDsRMEyHlGsvBOEluqeWUKKoVy8RzxzrAjVx1cjiVj99Gl&X-Amz-Signature=cd2480e4cb9fe542bd8d6d3dd10f03cbf2b0733259d5774b6fd09fff813c9433&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5LS4VR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvRme0ecUBvTWRpu4O5BkuAGhupN93Pm4w9NcBn9HJIAIgaCmOJsU7%2F4x4AaRwCAXBCqgNXxZESAAseZv9dbL6KbkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI4Vp2Nqj11hU4MDSrcAxE8GVIYx3UKU1g%2FP%2BY5zuqYXG1v1tSqc5OHmhvN5Hj4muJTltQbPW7Wf1a3QEk3uFrpFJpg4XlE80W24iVOYc1JaiT3gWhv%2BDL9JGTXZZLycTtTPwmBs4U%2FzZTldTtQSxS8lJHZJBetSjmes2FnK%2F0U1eIvA%2BFoP7MquHEVW%2Bd9Mk74acmYo8sIBj%2BTT5iGUmiVMlTd01W8wXe4tVUWSuw12gpx7aeyBL9orLWvzfGl96C7d5VNhjAhpch7kuLOvZBgECyDb6HrBmmwRu3VsRGrC1fBimpdNzAp9i7wcDkHNRQCh2FlbBcEwU6BLzoYvSFRZettTvZTK8VXPLGkxYcyEaAHOyKBh6DAdpk7pOx8g1gE4cDgFVWoc%2BHtuvbZj6cOb5XnQ9bfWIms9UzNoesuZmKYTr5PaHtCGCUhK1oketMRbuLcndcDD0AY1C16wLgRrEnCMTspsQPGn5rPzu2g%2B%2F68l2JzVhYC1LhpDL%2FIHl6mNX%2BDrchvl2OBqL3mRolmZhwwuyv%2F8QBmK9z8IJVHT8OK%2BRO%2BFCRu1INeH%2FNbYG2PBd0%2B5eLFK6DS4eeXePRRxREY9VBw3aT0yx6pAFHFBs4MSOZqb3rxe7MGDp8XbTHqybjpxYv%2FvySUMJm7%2B8AGOqUBXWvekEG2EF0FO%2FRlePgNl63cMTlkQEJgu0yqRHr6g5ctQieKrQTsUMlrTqG400TatDYmlWN%2F2N20kjo5lLif8QVfdV3FLAGPtzJzAmUsvXwpFYPtkf12YmMIz20LIh6obRc85%2F6R%2BVVrCTAd%2BAArrOd2PZY4Tjq%2BA747JY5%2FY5qg06tDsRMEyHlGsvBOEluqeWUKKoVy8RzxzrAjVx1cjiVj99Gl&X-Amz-Signature=2065b441f8fe3ffb2d0b7a39a7b7e31e0cb11a5909f21756b5b37d96e43df899&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
