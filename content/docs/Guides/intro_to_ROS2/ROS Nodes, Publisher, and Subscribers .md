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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOCYOXR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNNZzv%2BTvFtLghjbQRh51IS6vyH4dKolorMjR4TmwibgIgWfOx2s2HIKvTfI%2BxMVdE8qG116avWPf%2FjqBqQxKuUXoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPepD4J0GmIGKAd%2FbSrcA11F7YaGDbkjkMqyVOfGRma4GTdCVStmj8fte1gtjTejniE%2FWuVWTkS9OCNCerMeJ3n4lZVd2PVcZ7qTUa%2FTkaU57RCn6v8LQFQ6ZjOGCq94HnFYCU2DSDucwghGWhTAhexJEZCOtWu0tEhJBKh8Q%2FWTIX3dCgd%2FTAME06XvXLBm%2Bfpk%2B4amSJ0pb41IQHKLZ%2B4uk1Urok%2Bal%2F2qNTP1%2F2RtUCDuyukxfJXBd%2BHEdT4e5MdmKdcREMHuqTqreyrXN9QM%2B2BR5QNHR9zOwEXo%2FChRda%2B6n3yojQv2%2F%2BwgjadIlIc%2FmpgBKB8J7YNoJW4Wx%2BmSnFqznqyNcnYcx8%2Bop6zTSwaUzbpRICBNreLywd8B2VQ0PwMQmJCwgUOJ2EOnwo0UicsVeaF8z%2F33agznmnLD6A8hD68qyVJ2MsyZvAhemuAYAyVHFVUdloTn5g8OLCnHVpkfyZnaQNrFc6VfZESoAlsQsGkrpYF4Eprj0Vf9Fhp9KIptcOB9ukQu5qEz39En3HXHHMqadOG%2Fqx7xspXNyHiPTcHs63ZGHsMV6vZzS%2BgDWGwNGcll1OwmnUmf5MBK3gcM103tCl7QAgEUrVTLqWdmNnwbyMvwZ%2B0EGct185dLJiXf2JmtPQaxMJ6h7MMGOqUBWfohBdnP6cccR2UwKkjoAAZ3z5QK%2BcAE9GstitFlSPD4mo6mv%2BF5dhV48op1WTsdRFW7URpKJYcUBV3m%2F7H%2BV5EsydltNTyERAewb22Ggmg4PnVtXAiEA1m4U9iLCKQKdWVpQdSUCKZtYmCQeHmW0uT1P8QlBhM%2BE7pKaU76z9O2O99kdvr1bwl858KveroYcdKPKXpDmjjy2PVrgjrBhBevWd3n&X-Amz-Signature=9706213cc679aae8f0417688f9f80723e452dad5e2843159a0369293a8dc4434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOCYOXR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNNZzv%2BTvFtLghjbQRh51IS6vyH4dKolorMjR4TmwibgIgWfOx2s2HIKvTfI%2BxMVdE8qG116avWPf%2FjqBqQxKuUXoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPepD4J0GmIGKAd%2FbSrcA11F7YaGDbkjkMqyVOfGRma4GTdCVStmj8fte1gtjTejniE%2FWuVWTkS9OCNCerMeJ3n4lZVd2PVcZ7qTUa%2FTkaU57RCn6v8LQFQ6ZjOGCq94HnFYCU2DSDucwghGWhTAhexJEZCOtWu0tEhJBKh8Q%2FWTIX3dCgd%2FTAME06XvXLBm%2Bfpk%2B4amSJ0pb41IQHKLZ%2B4uk1Urok%2Bal%2F2qNTP1%2F2RtUCDuyukxfJXBd%2BHEdT4e5MdmKdcREMHuqTqreyrXN9QM%2B2BR5QNHR9zOwEXo%2FChRda%2B6n3yojQv2%2F%2BwgjadIlIc%2FmpgBKB8J7YNoJW4Wx%2BmSnFqznqyNcnYcx8%2Bop6zTSwaUzbpRICBNreLywd8B2VQ0PwMQmJCwgUOJ2EOnwo0UicsVeaF8z%2F33agznmnLD6A8hD68qyVJ2MsyZvAhemuAYAyVHFVUdloTn5g8OLCnHVpkfyZnaQNrFc6VfZESoAlsQsGkrpYF4Eprj0Vf9Fhp9KIptcOB9ukQu5qEz39En3HXHHMqadOG%2Fqx7xspXNyHiPTcHs63ZGHsMV6vZzS%2BgDWGwNGcll1OwmnUmf5MBK3gcM103tCl7QAgEUrVTLqWdmNnwbyMvwZ%2B0EGct185dLJiXf2JmtPQaxMJ6h7MMGOqUBWfohBdnP6cccR2UwKkjoAAZ3z5QK%2BcAE9GstitFlSPD4mo6mv%2BF5dhV48op1WTsdRFW7URpKJYcUBV3m%2F7H%2BV5EsydltNTyERAewb22Ggmg4PnVtXAiEA1m4U9iLCKQKdWVpQdSUCKZtYmCQeHmW0uT1P8QlBhM%2BE7pKaU76z9O2O99kdvr1bwl858KveroYcdKPKXpDmjjy2PVrgjrBhBevWd3n&X-Amz-Signature=a27f951fcb11922bbc6f860139e3e16cd677581070b7f6c9f67ea90d8cec0e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOCYOXR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNNZzv%2BTvFtLghjbQRh51IS6vyH4dKolorMjR4TmwibgIgWfOx2s2HIKvTfI%2BxMVdE8qG116avWPf%2FjqBqQxKuUXoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPepD4J0GmIGKAd%2FbSrcA11F7YaGDbkjkMqyVOfGRma4GTdCVStmj8fte1gtjTejniE%2FWuVWTkS9OCNCerMeJ3n4lZVd2PVcZ7qTUa%2FTkaU57RCn6v8LQFQ6ZjOGCq94HnFYCU2DSDucwghGWhTAhexJEZCOtWu0tEhJBKh8Q%2FWTIX3dCgd%2FTAME06XvXLBm%2Bfpk%2B4amSJ0pb41IQHKLZ%2B4uk1Urok%2Bal%2F2qNTP1%2F2RtUCDuyukxfJXBd%2BHEdT4e5MdmKdcREMHuqTqreyrXN9QM%2B2BR5QNHR9zOwEXo%2FChRda%2B6n3yojQv2%2F%2BwgjadIlIc%2FmpgBKB8J7YNoJW4Wx%2BmSnFqznqyNcnYcx8%2Bop6zTSwaUzbpRICBNreLywd8B2VQ0PwMQmJCwgUOJ2EOnwo0UicsVeaF8z%2F33agznmnLD6A8hD68qyVJ2MsyZvAhemuAYAyVHFVUdloTn5g8OLCnHVpkfyZnaQNrFc6VfZESoAlsQsGkrpYF4Eprj0Vf9Fhp9KIptcOB9ukQu5qEz39En3HXHHMqadOG%2Fqx7xspXNyHiPTcHs63ZGHsMV6vZzS%2BgDWGwNGcll1OwmnUmf5MBK3gcM103tCl7QAgEUrVTLqWdmNnwbyMvwZ%2B0EGct185dLJiXf2JmtPQaxMJ6h7MMGOqUBWfohBdnP6cccR2UwKkjoAAZ3z5QK%2BcAE9GstitFlSPD4mo6mv%2BF5dhV48op1WTsdRFW7URpKJYcUBV3m%2F7H%2BV5EsydltNTyERAewb22Ggmg4PnVtXAiEA1m4U9iLCKQKdWVpQdSUCKZtYmCQeHmW0uT1P8QlBhM%2BE7pKaU76z9O2O99kdvr1bwl858KveroYcdKPKXpDmjjy2PVrgjrBhBevWd3n&X-Amz-Signature=ac9c56497c106052a481788886ef67807cfdd876fac6a4b404a046e01b6d86bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOCYOXR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNNZzv%2BTvFtLghjbQRh51IS6vyH4dKolorMjR4TmwibgIgWfOx2s2HIKvTfI%2BxMVdE8qG116avWPf%2FjqBqQxKuUXoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPepD4J0GmIGKAd%2FbSrcA11F7YaGDbkjkMqyVOfGRma4GTdCVStmj8fte1gtjTejniE%2FWuVWTkS9OCNCerMeJ3n4lZVd2PVcZ7qTUa%2FTkaU57RCn6v8LQFQ6ZjOGCq94HnFYCU2DSDucwghGWhTAhexJEZCOtWu0tEhJBKh8Q%2FWTIX3dCgd%2FTAME06XvXLBm%2Bfpk%2B4amSJ0pb41IQHKLZ%2B4uk1Urok%2Bal%2F2qNTP1%2F2RtUCDuyukxfJXBd%2BHEdT4e5MdmKdcREMHuqTqreyrXN9QM%2B2BR5QNHR9zOwEXo%2FChRda%2B6n3yojQv2%2F%2BwgjadIlIc%2FmpgBKB8J7YNoJW4Wx%2BmSnFqznqyNcnYcx8%2Bop6zTSwaUzbpRICBNreLywd8B2VQ0PwMQmJCwgUOJ2EOnwo0UicsVeaF8z%2F33agznmnLD6A8hD68qyVJ2MsyZvAhemuAYAyVHFVUdloTn5g8OLCnHVpkfyZnaQNrFc6VfZESoAlsQsGkrpYF4Eprj0Vf9Fhp9KIptcOB9ukQu5qEz39En3HXHHMqadOG%2Fqx7xspXNyHiPTcHs63ZGHsMV6vZzS%2BgDWGwNGcll1OwmnUmf5MBK3gcM103tCl7QAgEUrVTLqWdmNnwbyMvwZ%2B0EGct185dLJiXf2JmtPQaxMJ6h7MMGOqUBWfohBdnP6cccR2UwKkjoAAZ3z5QK%2BcAE9GstitFlSPD4mo6mv%2BF5dhV48op1WTsdRFW7URpKJYcUBV3m%2F7H%2BV5EsydltNTyERAewb22Ggmg4PnVtXAiEA1m4U9iLCKQKdWVpQdSUCKZtYmCQeHmW0uT1P8QlBhM%2BE7pKaU76z9O2O99kdvr1bwl858KveroYcdKPKXpDmjjy2PVrgjrBhBevWd3n&X-Amz-Signature=45dab2381f8aeca35ce983f42f8eb2687c3c032161278d87e8c3af9871206481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOCYOXR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNNZzv%2BTvFtLghjbQRh51IS6vyH4dKolorMjR4TmwibgIgWfOx2s2HIKvTfI%2BxMVdE8qG116avWPf%2FjqBqQxKuUXoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPepD4J0GmIGKAd%2FbSrcA11F7YaGDbkjkMqyVOfGRma4GTdCVStmj8fte1gtjTejniE%2FWuVWTkS9OCNCerMeJ3n4lZVd2PVcZ7qTUa%2FTkaU57RCn6v8LQFQ6ZjOGCq94HnFYCU2DSDucwghGWhTAhexJEZCOtWu0tEhJBKh8Q%2FWTIX3dCgd%2FTAME06XvXLBm%2Bfpk%2B4amSJ0pb41IQHKLZ%2B4uk1Urok%2Bal%2F2qNTP1%2F2RtUCDuyukxfJXBd%2BHEdT4e5MdmKdcREMHuqTqreyrXN9QM%2B2BR5QNHR9zOwEXo%2FChRda%2B6n3yojQv2%2F%2BwgjadIlIc%2FmpgBKB8J7YNoJW4Wx%2BmSnFqznqyNcnYcx8%2Bop6zTSwaUzbpRICBNreLywd8B2VQ0PwMQmJCwgUOJ2EOnwo0UicsVeaF8z%2F33agznmnLD6A8hD68qyVJ2MsyZvAhemuAYAyVHFVUdloTn5g8OLCnHVpkfyZnaQNrFc6VfZESoAlsQsGkrpYF4Eprj0Vf9Fhp9KIptcOB9ukQu5qEz39En3HXHHMqadOG%2Fqx7xspXNyHiPTcHs63ZGHsMV6vZzS%2BgDWGwNGcll1OwmnUmf5MBK3gcM103tCl7QAgEUrVTLqWdmNnwbyMvwZ%2B0EGct185dLJiXf2JmtPQaxMJ6h7MMGOqUBWfohBdnP6cccR2UwKkjoAAZ3z5QK%2BcAE9GstitFlSPD4mo6mv%2BF5dhV48op1WTsdRFW7URpKJYcUBV3m%2F7H%2BV5EsydltNTyERAewb22Ggmg4PnVtXAiEA1m4U9iLCKQKdWVpQdSUCKZtYmCQeHmW0uT1P8QlBhM%2BE7pKaU76z9O2O99kdvr1bwl858KveroYcdKPKXpDmjjy2PVrgjrBhBevWd3n&X-Amz-Signature=ee1ac70fd95460acc80e6d8cab7fa8143feefa0b980a8b3bef3a2089dd0d35d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOCYOXR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNNZzv%2BTvFtLghjbQRh51IS6vyH4dKolorMjR4TmwibgIgWfOx2s2HIKvTfI%2BxMVdE8qG116avWPf%2FjqBqQxKuUXoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPepD4J0GmIGKAd%2FbSrcA11F7YaGDbkjkMqyVOfGRma4GTdCVStmj8fte1gtjTejniE%2FWuVWTkS9OCNCerMeJ3n4lZVd2PVcZ7qTUa%2FTkaU57RCn6v8LQFQ6ZjOGCq94HnFYCU2DSDucwghGWhTAhexJEZCOtWu0tEhJBKh8Q%2FWTIX3dCgd%2FTAME06XvXLBm%2Bfpk%2B4amSJ0pb41IQHKLZ%2B4uk1Urok%2Bal%2F2qNTP1%2F2RtUCDuyukxfJXBd%2BHEdT4e5MdmKdcREMHuqTqreyrXN9QM%2B2BR5QNHR9zOwEXo%2FChRda%2B6n3yojQv2%2F%2BwgjadIlIc%2FmpgBKB8J7YNoJW4Wx%2BmSnFqznqyNcnYcx8%2Bop6zTSwaUzbpRICBNreLywd8B2VQ0PwMQmJCwgUOJ2EOnwo0UicsVeaF8z%2F33agznmnLD6A8hD68qyVJ2MsyZvAhemuAYAyVHFVUdloTn5g8OLCnHVpkfyZnaQNrFc6VfZESoAlsQsGkrpYF4Eprj0Vf9Fhp9KIptcOB9ukQu5qEz39En3HXHHMqadOG%2Fqx7xspXNyHiPTcHs63ZGHsMV6vZzS%2BgDWGwNGcll1OwmnUmf5MBK3gcM103tCl7QAgEUrVTLqWdmNnwbyMvwZ%2B0EGct185dLJiXf2JmtPQaxMJ6h7MMGOqUBWfohBdnP6cccR2UwKkjoAAZ3z5QK%2BcAE9GstitFlSPD4mo6mv%2BF5dhV48op1WTsdRFW7URpKJYcUBV3m%2F7H%2BV5EsydltNTyERAewb22Ggmg4PnVtXAiEA1m4U9iLCKQKdWVpQdSUCKZtYmCQeHmW0uT1P8QlBhM%2BE7pKaU76z9O2O99kdvr1bwl858KveroYcdKPKXpDmjjy2PVrgjrBhBevWd3n&X-Amz-Signature=055fc055f95d79f213f0f43b9efc3d4db3e4f278541fe5f8fb4a71ad513d1dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOCYOXR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNNZzv%2BTvFtLghjbQRh51IS6vyH4dKolorMjR4TmwibgIgWfOx2s2HIKvTfI%2BxMVdE8qG116avWPf%2FjqBqQxKuUXoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPepD4J0GmIGKAd%2FbSrcA11F7YaGDbkjkMqyVOfGRma4GTdCVStmj8fte1gtjTejniE%2FWuVWTkS9OCNCerMeJ3n4lZVd2PVcZ7qTUa%2FTkaU57RCn6v8LQFQ6ZjOGCq94HnFYCU2DSDucwghGWhTAhexJEZCOtWu0tEhJBKh8Q%2FWTIX3dCgd%2FTAME06XvXLBm%2Bfpk%2B4amSJ0pb41IQHKLZ%2B4uk1Urok%2Bal%2F2qNTP1%2F2RtUCDuyukxfJXBd%2BHEdT4e5MdmKdcREMHuqTqreyrXN9QM%2B2BR5QNHR9zOwEXo%2FChRda%2B6n3yojQv2%2F%2BwgjadIlIc%2FmpgBKB8J7YNoJW4Wx%2BmSnFqznqyNcnYcx8%2Bop6zTSwaUzbpRICBNreLywd8B2VQ0PwMQmJCwgUOJ2EOnwo0UicsVeaF8z%2F33agznmnLD6A8hD68qyVJ2MsyZvAhemuAYAyVHFVUdloTn5g8OLCnHVpkfyZnaQNrFc6VfZESoAlsQsGkrpYF4Eprj0Vf9Fhp9KIptcOB9ukQu5qEz39En3HXHHMqadOG%2Fqx7xspXNyHiPTcHs63ZGHsMV6vZzS%2BgDWGwNGcll1OwmnUmf5MBK3gcM103tCl7QAgEUrVTLqWdmNnwbyMvwZ%2B0EGct185dLJiXf2JmtPQaxMJ6h7MMGOqUBWfohBdnP6cccR2UwKkjoAAZ3z5QK%2BcAE9GstitFlSPD4mo6mv%2BF5dhV48op1WTsdRFW7URpKJYcUBV3m%2F7H%2BV5EsydltNTyERAewb22Ggmg4PnVtXAiEA1m4U9iLCKQKdWVpQdSUCKZtYmCQeHmW0uT1P8QlBhM%2BE7pKaU76z9O2O99kdvr1bwl858KveroYcdKPKXpDmjjy2PVrgjrBhBevWd3n&X-Amz-Signature=fdc5e9e200b95bd8a70de28cdbd95c3e1e8030295edba3247fbea1487efca5fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOCYOXR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNNZzv%2BTvFtLghjbQRh51IS6vyH4dKolorMjR4TmwibgIgWfOx2s2HIKvTfI%2BxMVdE8qG116avWPf%2FjqBqQxKuUXoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPepD4J0GmIGKAd%2FbSrcA11F7YaGDbkjkMqyVOfGRma4GTdCVStmj8fte1gtjTejniE%2FWuVWTkS9OCNCerMeJ3n4lZVd2PVcZ7qTUa%2FTkaU57RCn6v8LQFQ6ZjOGCq94HnFYCU2DSDucwghGWhTAhexJEZCOtWu0tEhJBKh8Q%2FWTIX3dCgd%2FTAME06XvXLBm%2Bfpk%2B4amSJ0pb41IQHKLZ%2B4uk1Urok%2Bal%2F2qNTP1%2F2RtUCDuyukxfJXBd%2BHEdT4e5MdmKdcREMHuqTqreyrXN9QM%2B2BR5QNHR9zOwEXo%2FChRda%2B6n3yojQv2%2F%2BwgjadIlIc%2FmpgBKB8J7YNoJW4Wx%2BmSnFqznqyNcnYcx8%2Bop6zTSwaUzbpRICBNreLywd8B2VQ0PwMQmJCwgUOJ2EOnwo0UicsVeaF8z%2F33agznmnLD6A8hD68qyVJ2MsyZvAhemuAYAyVHFVUdloTn5g8OLCnHVpkfyZnaQNrFc6VfZESoAlsQsGkrpYF4Eprj0Vf9Fhp9KIptcOB9ukQu5qEz39En3HXHHMqadOG%2Fqx7xspXNyHiPTcHs63ZGHsMV6vZzS%2BgDWGwNGcll1OwmnUmf5MBK3gcM103tCl7QAgEUrVTLqWdmNnwbyMvwZ%2B0EGct185dLJiXf2JmtPQaxMJ6h7MMGOqUBWfohBdnP6cccR2UwKkjoAAZ3z5QK%2BcAE9GstitFlSPD4mo6mv%2BF5dhV48op1WTsdRFW7URpKJYcUBV3m%2F7H%2BV5EsydltNTyERAewb22Ggmg4PnVtXAiEA1m4U9iLCKQKdWVpQdSUCKZtYmCQeHmW0uT1P8QlBhM%2BE7pKaU76z9O2O99kdvr1bwl858KveroYcdKPKXpDmjjy2PVrgjrBhBevWd3n&X-Amz-Signature=2f5217e7d8606399fc44b1d8e1b2c02a0c03fa39fb7a0567b7cfc48c2afe14a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
