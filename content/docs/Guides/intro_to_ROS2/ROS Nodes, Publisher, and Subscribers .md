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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2QSOTE%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXTBkYHaLv3GOYtreTfWwMSq1V28coNNQd88hWjwci2AiEA%2B08YLy0lIeihpe7R8UNEEprxuhdPe%2Foc%2Bd%2BrH%2FYyK4Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAabeFWcBvOIVoIkpSrcAwOhjU8kPwFB%2FN%2FGwLsjhoO6jQ1EtPCmlO7mfAHoJiBujxVDrjER7KqbMb0Otc%2BDxy1d3fU9DOh8T8D5h3jvN6%2FamgWsZEGSMORST%2BZf8dCJWXYJaYT2Qa5rDVfpyDlh29jL3ANq68bZaz9i8B1%2F6Y0aYv43Anm%2Fp45xc9X1h7qmQZJwwlabSoV6G7%2BqyA0KUSXNnUaWh%2BE85wAwZPSuznMGCbaIfiGWlbwC8w%2BG1MYtKHJok720uZdSwdzmcAymmYQ1DvbH3MPm%2Bm5SUnyLLlt0cwky0DhrIuBX8bTOohUGIBWO9Uqf1othUgFV55bVQEFuEchvCHMkn%2FWWs%2Flaz%2BGVq4eHAf73AGS0l6CbLjpKfoEbJ2UrW9PFJvARPcKC%2B6e0hzPKLB4KeM5mOwNgpv%2BgcD%2FfWUt47C6zLIM9aU0RLPC2VCxjyq5pKLodyuL6h9ukb0IHOyOFaa6gBigGUnFN1myHuib7DlgK%2FAeeZDDrQbiDnBJZNWtfOdT8QpaYH1CD74lSH3S9CDZMX5eWtcPde%2B%2Bpm%2FNVA83mIQAjzbDkhnuidKgYI5aWYopvQHfRLX0WZ4gkHhSovFr9hyrjGoptAODrsMgos1JvhXID3lpntHqHUibOCS1F9hipMLiqq74GOqUBAapWQ4MspyCGaTRhdviUkD9ysg3XktrhCp442SsTi%2Fo9A%2FpriMsKiFCwyNl%2FxdOLEI6HaPQtFGSfqSHLdVfF%2BGoohAEpotv9cDN0eibfGcBI7z%2FfKNU5b2d0fIR55eT8AM8ef%2FAP0mZ5UAFKT7oh%2F7G0oFXRfol8j9StbpHaxIkdp915vVRspaFFtHrCipMlRqBXb2KvnUUp6z9OWlJj%2BUuKoNAY&X-Amz-Signature=fa7bbeb0fb6ca0ba45e86b9616cdc3b4693db81380b2dd80d2e5fad1167a2406&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2QSOTE%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXTBkYHaLv3GOYtreTfWwMSq1V28coNNQd88hWjwci2AiEA%2B08YLy0lIeihpe7R8UNEEprxuhdPe%2Foc%2Bd%2BrH%2FYyK4Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAabeFWcBvOIVoIkpSrcAwOhjU8kPwFB%2FN%2FGwLsjhoO6jQ1EtPCmlO7mfAHoJiBujxVDrjER7KqbMb0Otc%2BDxy1d3fU9DOh8T8D5h3jvN6%2FamgWsZEGSMORST%2BZf8dCJWXYJaYT2Qa5rDVfpyDlh29jL3ANq68bZaz9i8B1%2F6Y0aYv43Anm%2Fp45xc9X1h7qmQZJwwlabSoV6G7%2BqyA0KUSXNnUaWh%2BE85wAwZPSuznMGCbaIfiGWlbwC8w%2BG1MYtKHJok720uZdSwdzmcAymmYQ1DvbH3MPm%2Bm5SUnyLLlt0cwky0DhrIuBX8bTOohUGIBWO9Uqf1othUgFV55bVQEFuEchvCHMkn%2FWWs%2Flaz%2BGVq4eHAf73AGS0l6CbLjpKfoEbJ2UrW9PFJvARPcKC%2B6e0hzPKLB4KeM5mOwNgpv%2BgcD%2FfWUt47C6zLIM9aU0RLPC2VCxjyq5pKLodyuL6h9ukb0IHOyOFaa6gBigGUnFN1myHuib7DlgK%2FAeeZDDrQbiDnBJZNWtfOdT8QpaYH1CD74lSH3S9CDZMX5eWtcPde%2B%2Bpm%2FNVA83mIQAjzbDkhnuidKgYI5aWYopvQHfRLX0WZ4gkHhSovFr9hyrjGoptAODrsMgos1JvhXID3lpntHqHUibOCS1F9hipMLiqq74GOqUBAapWQ4MspyCGaTRhdviUkD9ysg3XktrhCp442SsTi%2Fo9A%2FpriMsKiFCwyNl%2FxdOLEI6HaPQtFGSfqSHLdVfF%2BGoohAEpotv9cDN0eibfGcBI7z%2FfKNU5b2d0fIR55eT8AM8ef%2FAP0mZ5UAFKT7oh%2F7G0oFXRfol8j9StbpHaxIkdp915vVRspaFFtHrCipMlRqBXb2KvnUUp6z9OWlJj%2BUuKoNAY&X-Amz-Signature=15f48def48febe2c56a86cf45c40ccb3c077510fa664086c7f8344505b0250f4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2QSOTE%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXTBkYHaLv3GOYtreTfWwMSq1V28coNNQd88hWjwci2AiEA%2B08YLy0lIeihpe7R8UNEEprxuhdPe%2Foc%2Bd%2BrH%2FYyK4Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAabeFWcBvOIVoIkpSrcAwOhjU8kPwFB%2FN%2FGwLsjhoO6jQ1EtPCmlO7mfAHoJiBujxVDrjER7KqbMb0Otc%2BDxy1d3fU9DOh8T8D5h3jvN6%2FamgWsZEGSMORST%2BZf8dCJWXYJaYT2Qa5rDVfpyDlh29jL3ANq68bZaz9i8B1%2F6Y0aYv43Anm%2Fp45xc9X1h7qmQZJwwlabSoV6G7%2BqyA0KUSXNnUaWh%2BE85wAwZPSuznMGCbaIfiGWlbwC8w%2BG1MYtKHJok720uZdSwdzmcAymmYQ1DvbH3MPm%2Bm5SUnyLLlt0cwky0DhrIuBX8bTOohUGIBWO9Uqf1othUgFV55bVQEFuEchvCHMkn%2FWWs%2Flaz%2BGVq4eHAf73AGS0l6CbLjpKfoEbJ2UrW9PFJvARPcKC%2B6e0hzPKLB4KeM5mOwNgpv%2BgcD%2FfWUt47C6zLIM9aU0RLPC2VCxjyq5pKLodyuL6h9ukb0IHOyOFaa6gBigGUnFN1myHuib7DlgK%2FAeeZDDrQbiDnBJZNWtfOdT8QpaYH1CD74lSH3S9CDZMX5eWtcPde%2B%2Bpm%2FNVA83mIQAjzbDkhnuidKgYI5aWYopvQHfRLX0WZ4gkHhSovFr9hyrjGoptAODrsMgos1JvhXID3lpntHqHUibOCS1F9hipMLiqq74GOqUBAapWQ4MspyCGaTRhdviUkD9ysg3XktrhCp442SsTi%2Fo9A%2FpriMsKiFCwyNl%2FxdOLEI6HaPQtFGSfqSHLdVfF%2BGoohAEpotv9cDN0eibfGcBI7z%2FfKNU5b2d0fIR55eT8AM8ef%2FAP0mZ5UAFKT7oh%2F7G0oFXRfol8j9StbpHaxIkdp915vVRspaFFtHrCipMlRqBXb2KvnUUp6z9OWlJj%2BUuKoNAY&X-Amz-Signature=6f54a8249f9c09d03a9612b3a609f24be0a3c7021a2c86a8e21076104347edd2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2QSOTE%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXTBkYHaLv3GOYtreTfWwMSq1V28coNNQd88hWjwci2AiEA%2B08YLy0lIeihpe7R8UNEEprxuhdPe%2Foc%2Bd%2BrH%2FYyK4Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAabeFWcBvOIVoIkpSrcAwOhjU8kPwFB%2FN%2FGwLsjhoO6jQ1EtPCmlO7mfAHoJiBujxVDrjER7KqbMb0Otc%2BDxy1d3fU9DOh8T8D5h3jvN6%2FamgWsZEGSMORST%2BZf8dCJWXYJaYT2Qa5rDVfpyDlh29jL3ANq68bZaz9i8B1%2F6Y0aYv43Anm%2Fp45xc9X1h7qmQZJwwlabSoV6G7%2BqyA0KUSXNnUaWh%2BE85wAwZPSuznMGCbaIfiGWlbwC8w%2BG1MYtKHJok720uZdSwdzmcAymmYQ1DvbH3MPm%2Bm5SUnyLLlt0cwky0DhrIuBX8bTOohUGIBWO9Uqf1othUgFV55bVQEFuEchvCHMkn%2FWWs%2Flaz%2BGVq4eHAf73AGS0l6CbLjpKfoEbJ2UrW9PFJvARPcKC%2B6e0hzPKLB4KeM5mOwNgpv%2BgcD%2FfWUt47C6zLIM9aU0RLPC2VCxjyq5pKLodyuL6h9ukb0IHOyOFaa6gBigGUnFN1myHuib7DlgK%2FAeeZDDrQbiDnBJZNWtfOdT8QpaYH1CD74lSH3S9CDZMX5eWtcPde%2B%2Bpm%2FNVA83mIQAjzbDkhnuidKgYI5aWYopvQHfRLX0WZ4gkHhSovFr9hyrjGoptAODrsMgos1JvhXID3lpntHqHUibOCS1F9hipMLiqq74GOqUBAapWQ4MspyCGaTRhdviUkD9ysg3XktrhCp442SsTi%2Fo9A%2FpriMsKiFCwyNl%2FxdOLEI6HaPQtFGSfqSHLdVfF%2BGoohAEpotv9cDN0eibfGcBI7z%2FfKNU5b2d0fIR55eT8AM8ef%2FAP0mZ5UAFKT7oh%2F7G0oFXRfol8j9StbpHaxIkdp915vVRspaFFtHrCipMlRqBXb2KvnUUp6z9OWlJj%2BUuKoNAY&X-Amz-Signature=f339616a9004f222e436eb2ea3fc90e1657349ae2d484010e1a888bd8483d27c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2QSOTE%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXTBkYHaLv3GOYtreTfWwMSq1V28coNNQd88hWjwci2AiEA%2B08YLy0lIeihpe7R8UNEEprxuhdPe%2Foc%2Bd%2BrH%2FYyK4Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAabeFWcBvOIVoIkpSrcAwOhjU8kPwFB%2FN%2FGwLsjhoO6jQ1EtPCmlO7mfAHoJiBujxVDrjER7KqbMb0Otc%2BDxy1d3fU9DOh8T8D5h3jvN6%2FamgWsZEGSMORST%2BZf8dCJWXYJaYT2Qa5rDVfpyDlh29jL3ANq68bZaz9i8B1%2F6Y0aYv43Anm%2Fp45xc9X1h7qmQZJwwlabSoV6G7%2BqyA0KUSXNnUaWh%2BE85wAwZPSuznMGCbaIfiGWlbwC8w%2BG1MYtKHJok720uZdSwdzmcAymmYQ1DvbH3MPm%2Bm5SUnyLLlt0cwky0DhrIuBX8bTOohUGIBWO9Uqf1othUgFV55bVQEFuEchvCHMkn%2FWWs%2Flaz%2BGVq4eHAf73AGS0l6CbLjpKfoEbJ2UrW9PFJvARPcKC%2B6e0hzPKLB4KeM5mOwNgpv%2BgcD%2FfWUt47C6zLIM9aU0RLPC2VCxjyq5pKLodyuL6h9ukb0IHOyOFaa6gBigGUnFN1myHuib7DlgK%2FAeeZDDrQbiDnBJZNWtfOdT8QpaYH1CD74lSH3S9CDZMX5eWtcPde%2B%2Bpm%2FNVA83mIQAjzbDkhnuidKgYI5aWYopvQHfRLX0WZ4gkHhSovFr9hyrjGoptAODrsMgos1JvhXID3lpntHqHUibOCS1F9hipMLiqq74GOqUBAapWQ4MspyCGaTRhdviUkD9ysg3XktrhCp442SsTi%2Fo9A%2FpriMsKiFCwyNl%2FxdOLEI6HaPQtFGSfqSHLdVfF%2BGoohAEpotv9cDN0eibfGcBI7z%2FfKNU5b2d0fIR55eT8AM8ef%2FAP0mZ5UAFKT7oh%2F7G0oFXRfol8j9StbpHaxIkdp915vVRspaFFtHrCipMlRqBXb2KvnUUp6z9OWlJj%2BUuKoNAY&X-Amz-Signature=371df39014885914e681265a23726da111a5e1c459f42c3290473c3e21d888a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2QSOTE%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXTBkYHaLv3GOYtreTfWwMSq1V28coNNQd88hWjwci2AiEA%2B08YLy0lIeihpe7R8UNEEprxuhdPe%2Foc%2Bd%2BrH%2FYyK4Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAabeFWcBvOIVoIkpSrcAwOhjU8kPwFB%2FN%2FGwLsjhoO6jQ1EtPCmlO7mfAHoJiBujxVDrjER7KqbMb0Otc%2BDxy1d3fU9DOh8T8D5h3jvN6%2FamgWsZEGSMORST%2BZf8dCJWXYJaYT2Qa5rDVfpyDlh29jL3ANq68bZaz9i8B1%2F6Y0aYv43Anm%2Fp45xc9X1h7qmQZJwwlabSoV6G7%2BqyA0KUSXNnUaWh%2BE85wAwZPSuznMGCbaIfiGWlbwC8w%2BG1MYtKHJok720uZdSwdzmcAymmYQ1DvbH3MPm%2Bm5SUnyLLlt0cwky0DhrIuBX8bTOohUGIBWO9Uqf1othUgFV55bVQEFuEchvCHMkn%2FWWs%2Flaz%2BGVq4eHAf73AGS0l6CbLjpKfoEbJ2UrW9PFJvARPcKC%2B6e0hzPKLB4KeM5mOwNgpv%2BgcD%2FfWUt47C6zLIM9aU0RLPC2VCxjyq5pKLodyuL6h9ukb0IHOyOFaa6gBigGUnFN1myHuib7DlgK%2FAeeZDDrQbiDnBJZNWtfOdT8QpaYH1CD74lSH3S9CDZMX5eWtcPde%2B%2Bpm%2FNVA83mIQAjzbDkhnuidKgYI5aWYopvQHfRLX0WZ4gkHhSovFr9hyrjGoptAODrsMgos1JvhXID3lpntHqHUibOCS1F9hipMLiqq74GOqUBAapWQ4MspyCGaTRhdviUkD9ysg3XktrhCp442SsTi%2Fo9A%2FpriMsKiFCwyNl%2FxdOLEI6HaPQtFGSfqSHLdVfF%2BGoohAEpotv9cDN0eibfGcBI7z%2FfKNU5b2d0fIR55eT8AM8ef%2FAP0mZ5UAFKT7oh%2F7G0oFXRfol8j9StbpHaxIkdp915vVRspaFFtHrCipMlRqBXb2KvnUUp6z9OWlJj%2BUuKoNAY&X-Amz-Signature=33bd488029bc8d15b8180ecfd3bb46b4aed27a44f2c96aca518a5cc0ca994c2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2QSOTE%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXTBkYHaLv3GOYtreTfWwMSq1V28coNNQd88hWjwci2AiEA%2B08YLy0lIeihpe7R8UNEEprxuhdPe%2Foc%2Bd%2BrH%2FYyK4Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAabeFWcBvOIVoIkpSrcAwOhjU8kPwFB%2FN%2FGwLsjhoO6jQ1EtPCmlO7mfAHoJiBujxVDrjER7KqbMb0Otc%2BDxy1d3fU9DOh8T8D5h3jvN6%2FamgWsZEGSMORST%2BZf8dCJWXYJaYT2Qa5rDVfpyDlh29jL3ANq68bZaz9i8B1%2F6Y0aYv43Anm%2Fp45xc9X1h7qmQZJwwlabSoV6G7%2BqyA0KUSXNnUaWh%2BE85wAwZPSuznMGCbaIfiGWlbwC8w%2BG1MYtKHJok720uZdSwdzmcAymmYQ1DvbH3MPm%2Bm5SUnyLLlt0cwky0DhrIuBX8bTOohUGIBWO9Uqf1othUgFV55bVQEFuEchvCHMkn%2FWWs%2Flaz%2BGVq4eHAf73AGS0l6CbLjpKfoEbJ2UrW9PFJvARPcKC%2B6e0hzPKLB4KeM5mOwNgpv%2BgcD%2FfWUt47C6zLIM9aU0RLPC2VCxjyq5pKLodyuL6h9ukb0IHOyOFaa6gBigGUnFN1myHuib7DlgK%2FAeeZDDrQbiDnBJZNWtfOdT8QpaYH1CD74lSH3S9CDZMX5eWtcPde%2B%2Bpm%2FNVA83mIQAjzbDkhnuidKgYI5aWYopvQHfRLX0WZ4gkHhSovFr9hyrjGoptAODrsMgos1JvhXID3lpntHqHUibOCS1F9hipMLiqq74GOqUBAapWQ4MspyCGaTRhdviUkD9ysg3XktrhCp442SsTi%2Fo9A%2FpriMsKiFCwyNl%2FxdOLEI6HaPQtFGSfqSHLdVfF%2BGoohAEpotv9cDN0eibfGcBI7z%2FfKNU5b2d0fIR55eT8AM8ef%2FAP0mZ5UAFKT7oh%2F7G0oFXRfol8j9StbpHaxIkdp915vVRspaFFtHrCipMlRqBXb2KvnUUp6z9OWlJj%2BUuKoNAY&X-Amz-Signature=014d9620592ee9f2a5373ef3a4915f8125479e538c6098ba379b68ed329d8710&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2QSOTE%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXTBkYHaLv3GOYtreTfWwMSq1V28coNNQd88hWjwci2AiEA%2B08YLy0lIeihpe7R8UNEEprxuhdPe%2Foc%2Bd%2BrH%2FYyK4Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAabeFWcBvOIVoIkpSrcAwOhjU8kPwFB%2FN%2FGwLsjhoO6jQ1EtPCmlO7mfAHoJiBujxVDrjER7KqbMb0Otc%2BDxy1d3fU9DOh8T8D5h3jvN6%2FamgWsZEGSMORST%2BZf8dCJWXYJaYT2Qa5rDVfpyDlh29jL3ANq68bZaz9i8B1%2F6Y0aYv43Anm%2Fp45xc9X1h7qmQZJwwlabSoV6G7%2BqyA0KUSXNnUaWh%2BE85wAwZPSuznMGCbaIfiGWlbwC8w%2BG1MYtKHJok720uZdSwdzmcAymmYQ1DvbH3MPm%2Bm5SUnyLLlt0cwky0DhrIuBX8bTOohUGIBWO9Uqf1othUgFV55bVQEFuEchvCHMkn%2FWWs%2Flaz%2BGVq4eHAf73AGS0l6CbLjpKfoEbJ2UrW9PFJvARPcKC%2B6e0hzPKLB4KeM5mOwNgpv%2BgcD%2FfWUt47C6zLIM9aU0RLPC2VCxjyq5pKLodyuL6h9ukb0IHOyOFaa6gBigGUnFN1myHuib7DlgK%2FAeeZDDrQbiDnBJZNWtfOdT8QpaYH1CD74lSH3S9CDZMX5eWtcPde%2B%2Bpm%2FNVA83mIQAjzbDkhnuidKgYI5aWYopvQHfRLX0WZ4gkHhSovFr9hyrjGoptAODrsMgos1JvhXID3lpntHqHUibOCS1F9hipMLiqq74GOqUBAapWQ4MspyCGaTRhdviUkD9ysg3XktrhCp442SsTi%2Fo9A%2FpriMsKiFCwyNl%2FxdOLEI6HaPQtFGSfqSHLdVfF%2BGoohAEpotv9cDN0eibfGcBI7z%2FfKNU5b2d0fIR55eT8AM8ef%2FAP0mZ5UAFKT7oh%2F7G0oFXRfol8j9StbpHaxIkdp915vVRspaFFtHrCipMlRqBXb2KvnUUp6z9OWlJj%2BUuKoNAY&X-Amz-Signature=a2f5be18a55f547988e9e9f43479682c15892a77fef7358b897652770979a6a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
