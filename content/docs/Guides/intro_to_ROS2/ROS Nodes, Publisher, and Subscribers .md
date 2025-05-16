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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLT3VV4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSooDGC7CUgR4XczlDRUUYrRUFwbwhMavKvRiR1cC%2B4AiEA4O4W1JJYjfM6uNWyTUeqSZCRirl%2FZmdcRk9Vitz5CXEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMb4taSbl%2F7%2B%2BrxOGyrcA4wvg3uvEKwQRczkhBXHaBsS30KOZxNXDMtjektPBtdASv5gObIMVTkKkup8a4DRwdr503Q9l9LtKpSwibjdaj79b0RjmrbZxi3Tig1M%2BIv4hJcd6uDXRHXohXPDG6wEX3yhvy5r9torQ%2FlWlA4736QMf1Clp9mUdt%2Fjwuoro0M%2FbxB82kdQwM7ETfZ%2FSWukwukSFz%2BDehojbxQnNHD0693TjNErE2Sz7xfCUqzyvBTnhRxsySi5HfGsbXWaeYJ%2FmxjSCCKU04H51UGXTrtpDP2RU94enAXQlk%2BwRrDHxsL0nFv3Gr3Uyg%2Frpy6Tn80g6fG9raa0%2BnM1tta%2BOU6eSHgcLZL7os%2Ba36WJB4dJj%2F9JcP7CcRpsEz1eX6vraQAzGzvhbT8CYYeV%2BY58rkcV19q6dFvs7vQzomuGyymHVJDopiwdeuq9RCaUZ7gwIv0sq1fSQX2UDDRVg6c6Ahwbk40c3a8qMWNAZ13Ny4GocsAFIt%2FNuRhDbLZG%2BliVv3jH%2BttKCLTbaKCJxFyb%2BC0V0kmpIv17iNWl%2BpDmWFRfqbXBooPbqBbxu3Pje6Hx6xEm3XqEgelUfl1d0MN7mFjzgIdVszQU2sFTlEVGQkhnrkDK0xApePyy%2FbhVLbg8MKrtm8EGOqUBjZ71SebozZ%2FP7VX3L4y6ERyOaI2yiglUThPsDCA%2FG%2FLJRHzR328iACO8BCCWMMDaSEZI43l44y3NLe9vTUn1mqhS4Xwkozos2M3WnnND%2Brl7cRJx7dlyQGizw%2Bzj6QNR5umNZggFuLuWpPeVRjQqd6qoPg0morcfhKFuyNq3nNwuzsb6OrNzgZtDVa8eMOZIEZ0HTMRXc3Tyk5YXtaH5%2FusCnrOR&X-Amz-Signature=76d7029c5b4ddce13cc0e7a135782e6d8d9f3094eb9283601afcd6289930978f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLT3VV4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSooDGC7CUgR4XczlDRUUYrRUFwbwhMavKvRiR1cC%2B4AiEA4O4W1JJYjfM6uNWyTUeqSZCRirl%2FZmdcRk9Vitz5CXEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMb4taSbl%2F7%2B%2BrxOGyrcA4wvg3uvEKwQRczkhBXHaBsS30KOZxNXDMtjektPBtdASv5gObIMVTkKkup8a4DRwdr503Q9l9LtKpSwibjdaj79b0RjmrbZxi3Tig1M%2BIv4hJcd6uDXRHXohXPDG6wEX3yhvy5r9torQ%2FlWlA4736QMf1Clp9mUdt%2Fjwuoro0M%2FbxB82kdQwM7ETfZ%2FSWukwukSFz%2BDehojbxQnNHD0693TjNErE2Sz7xfCUqzyvBTnhRxsySi5HfGsbXWaeYJ%2FmxjSCCKU04H51UGXTrtpDP2RU94enAXQlk%2BwRrDHxsL0nFv3Gr3Uyg%2Frpy6Tn80g6fG9raa0%2BnM1tta%2BOU6eSHgcLZL7os%2Ba36WJB4dJj%2F9JcP7CcRpsEz1eX6vraQAzGzvhbT8CYYeV%2BY58rkcV19q6dFvs7vQzomuGyymHVJDopiwdeuq9RCaUZ7gwIv0sq1fSQX2UDDRVg6c6Ahwbk40c3a8qMWNAZ13Ny4GocsAFIt%2FNuRhDbLZG%2BliVv3jH%2BttKCLTbaKCJxFyb%2BC0V0kmpIv17iNWl%2BpDmWFRfqbXBooPbqBbxu3Pje6Hx6xEm3XqEgelUfl1d0MN7mFjzgIdVszQU2sFTlEVGQkhnrkDK0xApePyy%2FbhVLbg8MKrtm8EGOqUBjZ71SebozZ%2FP7VX3L4y6ERyOaI2yiglUThPsDCA%2FG%2FLJRHzR328iACO8BCCWMMDaSEZI43l44y3NLe9vTUn1mqhS4Xwkozos2M3WnnND%2Brl7cRJx7dlyQGizw%2Bzj6QNR5umNZggFuLuWpPeVRjQqd6qoPg0morcfhKFuyNq3nNwuzsb6OrNzgZtDVa8eMOZIEZ0HTMRXc3Tyk5YXtaH5%2FusCnrOR&X-Amz-Signature=d1b934433a4929e91510f04d4bceae464b321f183c90a0177a47ef67d095fe90&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLT3VV4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSooDGC7CUgR4XczlDRUUYrRUFwbwhMavKvRiR1cC%2B4AiEA4O4W1JJYjfM6uNWyTUeqSZCRirl%2FZmdcRk9Vitz5CXEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMb4taSbl%2F7%2B%2BrxOGyrcA4wvg3uvEKwQRczkhBXHaBsS30KOZxNXDMtjektPBtdASv5gObIMVTkKkup8a4DRwdr503Q9l9LtKpSwibjdaj79b0RjmrbZxi3Tig1M%2BIv4hJcd6uDXRHXohXPDG6wEX3yhvy5r9torQ%2FlWlA4736QMf1Clp9mUdt%2Fjwuoro0M%2FbxB82kdQwM7ETfZ%2FSWukwukSFz%2BDehojbxQnNHD0693TjNErE2Sz7xfCUqzyvBTnhRxsySi5HfGsbXWaeYJ%2FmxjSCCKU04H51UGXTrtpDP2RU94enAXQlk%2BwRrDHxsL0nFv3Gr3Uyg%2Frpy6Tn80g6fG9raa0%2BnM1tta%2BOU6eSHgcLZL7os%2Ba36WJB4dJj%2F9JcP7CcRpsEz1eX6vraQAzGzvhbT8CYYeV%2BY58rkcV19q6dFvs7vQzomuGyymHVJDopiwdeuq9RCaUZ7gwIv0sq1fSQX2UDDRVg6c6Ahwbk40c3a8qMWNAZ13Ny4GocsAFIt%2FNuRhDbLZG%2BliVv3jH%2BttKCLTbaKCJxFyb%2BC0V0kmpIv17iNWl%2BpDmWFRfqbXBooPbqBbxu3Pje6Hx6xEm3XqEgelUfl1d0MN7mFjzgIdVszQU2sFTlEVGQkhnrkDK0xApePyy%2FbhVLbg8MKrtm8EGOqUBjZ71SebozZ%2FP7VX3L4y6ERyOaI2yiglUThPsDCA%2FG%2FLJRHzR328iACO8BCCWMMDaSEZI43l44y3NLe9vTUn1mqhS4Xwkozos2M3WnnND%2Brl7cRJx7dlyQGizw%2Bzj6QNR5umNZggFuLuWpPeVRjQqd6qoPg0morcfhKFuyNq3nNwuzsb6OrNzgZtDVa8eMOZIEZ0HTMRXc3Tyk5YXtaH5%2FusCnrOR&X-Amz-Signature=9df2305fb072e655db4340546d0b01012c9c090eead264e586f33b5c495a4bff&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLT3VV4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSooDGC7CUgR4XczlDRUUYrRUFwbwhMavKvRiR1cC%2B4AiEA4O4W1JJYjfM6uNWyTUeqSZCRirl%2FZmdcRk9Vitz5CXEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMb4taSbl%2F7%2B%2BrxOGyrcA4wvg3uvEKwQRczkhBXHaBsS30KOZxNXDMtjektPBtdASv5gObIMVTkKkup8a4DRwdr503Q9l9LtKpSwibjdaj79b0RjmrbZxi3Tig1M%2BIv4hJcd6uDXRHXohXPDG6wEX3yhvy5r9torQ%2FlWlA4736QMf1Clp9mUdt%2Fjwuoro0M%2FbxB82kdQwM7ETfZ%2FSWukwukSFz%2BDehojbxQnNHD0693TjNErE2Sz7xfCUqzyvBTnhRxsySi5HfGsbXWaeYJ%2FmxjSCCKU04H51UGXTrtpDP2RU94enAXQlk%2BwRrDHxsL0nFv3Gr3Uyg%2Frpy6Tn80g6fG9raa0%2BnM1tta%2BOU6eSHgcLZL7os%2Ba36WJB4dJj%2F9JcP7CcRpsEz1eX6vraQAzGzvhbT8CYYeV%2BY58rkcV19q6dFvs7vQzomuGyymHVJDopiwdeuq9RCaUZ7gwIv0sq1fSQX2UDDRVg6c6Ahwbk40c3a8qMWNAZ13Ny4GocsAFIt%2FNuRhDbLZG%2BliVv3jH%2BttKCLTbaKCJxFyb%2BC0V0kmpIv17iNWl%2BpDmWFRfqbXBooPbqBbxu3Pje6Hx6xEm3XqEgelUfl1d0MN7mFjzgIdVszQU2sFTlEVGQkhnrkDK0xApePyy%2FbhVLbg8MKrtm8EGOqUBjZ71SebozZ%2FP7VX3L4y6ERyOaI2yiglUThPsDCA%2FG%2FLJRHzR328iACO8BCCWMMDaSEZI43l44y3NLe9vTUn1mqhS4Xwkozos2M3WnnND%2Brl7cRJx7dlyQGizw%2Bzj6QNR5umNZggFuLuWpPeVRjQqd6qoPg0morcfhKFuyNq3nNwuzsb6OrNzgZtDVa8eMOZIEZ0HTMRXc3Tyk5YXtaH5%2FusCnrOR&X-Amz-Signature=d09b569b4efdceda7e567e30f9bf29eef38e0e46172fedce234f4c4b9a5fa406&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLT3VV4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSooDGC7CUgR4XczlDRUUYrRUFwbwhMavKvRiR1cC%2B4AiEA4O4W1JJYjfM6uNWyTUeqSZCRirl%2FZmdcRk9Vitz5CXEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMb4taSbl%2F7%2B%2BrxOGyrcA4wvg3uvEKwQRczkhBXHaBsS30KOZxNXDMtjektPBtdASv5gObIMVTkKkup8a4DRwdr503Q9l9LtKpSwibjdaj79b0RjmrbZxi3Tig1M%2BIv4hJcd6uDXRHXohXPDG6wEX3yhvy5r9torQ%2FlWlA4736QMf1Clp9mUdt%2Fjwuoro0M%2FbxB82kdQwM7ETfZ%2FSWukwukSFz%2BDehojbxQnNHD0693TjNErE2Sz7xfCUqzyvBTnhRxsySi5HfGsbXWaeYJ%2FmxjSCCKU04H51UGXTrtpDP2RU94enAXQlk%2BwRrDHxsL0nFv3Gr3Uyg%2Frpy6Tn80g6fG9raa0%2BnM1tta%2BOU6eSHgcLZL7os%2Ba36WJB4dJj%2F9JcP7CcRpsEz1eX6vraQAzGzvhbT8CYYeV%2BY58rkcV19q6dFvs7vQzomuGyymHVJDopiwdeuq9RCaUZ7gwIv0sq1fSQX2UDDRVg6c6Ahwbk40c3a8qMWNAZ13Ny4GocsAFIt%2FNuRhDbLZG%2BliVv3jH%2BttKCLTbaKCJxFyb%2BC0V0kmpIv17iNWl%2BpDmWFRfqbXBooPbqBbxu3Pje6Hx6xEm3XqEgelUfl1d0MN7mFjzgIdVszQU2sFTlEVGQkhnrkDK0xApePyy%2FbhVLbg8MKrtm8EGOqUBjZ71SebozZ%2FP7VX3L4y6ERyOaI2yiglUThPsDCA%2FG%2FLJRHzR328iACO8BCCWMMDaSEZI43l44y3NLe9vTUn1mqhS4Xwkozos2M3WnnND%2Brl7cRJx7dlyQGizw%2Bzj6QNR5umNZggFuLuWpPeVRjQqd6qoPg0morcfhKFuyNq3nNwuzsb6OrNzgZtDVa8eMOZIEZ0HTMRXc3Tyk5YXtaH5%2FusCnrOR&X-Amz-Signature=c97313602d1131da99c3194d7f0fc149a6a5b39b94173740b8d3572d587ae631&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLT3VV4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSooDGC7CUgR4XczlDRUUYrRUFwbwhMavKvRiR1cC%2B4AiEA4O4W1JJYjfM6uNWyTUeqSZCRirl%2FZmdcRk9Vitz5CXEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMb4taSbl%2F7%2B%2BrxOGyrcA4wvg3uvEKwQRczkhBXHaBsS30KOZxNXDMtjektPBtdASv5gObIMVTkKkup8a4DRwdr503Q9l9LtKpSwibjdaj79b0RjmrbZxi3Tig1M%2BIv4hJcd6uDXRHXohXPDG6wEX3yhvy5r9torQ%2FlWlA4736QMf1Clp9mUdt%2Fjwuoro0M%2FbxB82kdQwM7ETfZ%2FSWukwukSFz%2BDehojbxQnNHD0693TjNErE2Sz7xfCUqzyvBTnhRxsySi5HfGsbXWaeYJ%2FmxjSCCKU04H51UGXTrtpDP2RU94enAXQlk%2BwRrDHxsL0nFv3Gr3Uyg%2Frpy6Tn80g6fG9raa0%2BnM1tta%2BOU6eSHgcLZL7os%2Ba36WJB4dJj%2F9JcP7CcRpsEz1eX6vraQAzGzvhbT8CYYeV%2BY58rkcV19q6dFvs7vQzomuGyymHVJDopiwdeuq9RCaUZ7gwIv0sq1fSQX2UDDRVg6c6Ahwbk40c3a8qMWNAZ13Ny4GocsAFIt%2FNuRhDbLZG%2BliVv3jH%2BttKCLTbaKCJxFyb%2BC0V0kmpIv17iNWl%2BpDmWFRfqbXBooPbqBbxu3Pje6Hx6xEm3XqEgelUfl1d0MN7mFjzgIdVszQU2sFTlEVGQkhnrkDK0xApePyy%2FbhVLbg8MKrtm8EGOqUBjZ71SebozZ%2FP7VX3L4y6ERyOaI2yiglUThPsDCA%2FG%2FLJRHzR328iACO8BCCWMMDaSEZI43l44y3NLe9vTUn1mqhS4Xwkozos2M3WnnND%2Brl7cRJx7dlyQGizw%2Bzj6QNR5umNZggFuLuWpPeVRjQqd6qoPg0morcfhKFuyNq3nNwuzsb6OrNzgZtDVa8eMOZIEZ0HTMRXc3Tyk5YXtaH5%2FusCnrOR&X-Amz-Signature=b801f2cd104731d5fd7cf327d99d9fec88f3c60a2584b211e9948718d2c36c12&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLT3VV4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSooDGC7CUgR4XczlDRUUYrRUFwbwhMavKvRiR1cC%2B4AiEA4O4W1JJYjfM6uNWyTUeqSZCRirl%2FZmdcRk9Vitz5CXEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMb4taSbl%2F7%2B%2BrxOGyrcA4wvg3uvEKwQRczkhBXHaBsS30KOZxNXDMtjektPBtdASv5gObIMVTkKkup8a4DRwdr503Q9l9LtKpSwibjdaj79b0RjmrbZxi3Tig1M%2BIv4hJcd6uDXRHXohXPDG6wEX3yhvy5r9torQ%2FlWlA4736QMf1Clp9mUdt%2Fjwuoro0M%2FbxB82kdQwM7ETfZ%2FSWukwukSFz%2BDehojbxQnNHD0693TjNErE2Sz7xfCUqzyvBTnhRxsySi5HfGsbXWaeYJ%2FmxjSCCKU04H51UGXTrtpDP2RU94enAXQlk%2BwRrDHxsL0nFv3Gr3Uyg%2Frpy6Tn80g6fG9raa0%2BnM1tta%2BOU6eSHgcLZL7os%2Ba36WJB4dJj%2F9JcP7CcRpsEz1eX6vraQAzGzvhbT8CYYeV%2BY58rkcV19q6dFvs7vQzomuGyymHVJDopiwdeuq9RCaUZ7gwIv0sq1fSQX2UDDRVg6c6Ahwbk40c3a8qMWNAZ13Ny4GocsAFIt%2FNuRhDbLZG%2BliVv3jH%2BttKCLTbaKCJxFyb%2BC0V0kmpIv17iNWl%2BpDmWFRfqbXBooPbqBbxu3Pje6Hx6xEm3XqEgelUfl1d0MN7mFjzgIdVszQU2sFTlEVGQkhnrkDK0xApePyy%2FbhVLbg8MKrtm8EGOqUBjZ71SebozZ%2FP7VX3L4y6ERyOaI2yiglUThPsDCA%2FG%2FLJRHzR328iACO8BCCWMMDaSEZI43l44y3NLe9vTUn1mqhS4Xwkozos2M3WnnND%2Brl7cRJx7dlyQGizw%2Bzj6QNR5umNZggFuLuWpPeVRjQqd6qoPg0morcfhKFuyNq3nNwuzsb6OrNzgZtDVa8eMOZIEZ0HTMRXc3Tyk5YXtaH5%2FusCnrOR&X-Amz-Signature=596377ed00a34ec75127ca7cd8efdaddd10eb58420ed0b9e43366dde4bc522fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLT3VV4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSooDGC7CUgR4XczlDRUUYrRUFwbwhMavKvRiR1cC%2B4AiEA4O4W1JJYjfM6uNWyTUeqSZCRirl%2FZmdcRk9Vitz5CXEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMb4taSbl%2F7%2B%2BrxOGyrcA4wvg3uvEKwQRczkhBXHaBsS30KOZxNXDMtjektPBtdASv5gObIMVTkKkup8a4DRwdr503Q9l9LtKpSwibjdaj79b0RjmrbZxi3Tig1M%2BIv4hJcd6uDXRHXohXPDG6wEX3yhvy5r9torQ%2FlWlA4736QMf1Clp9mUdt%2Fjwuoro0M%2FbxB82kdQwM7ETfZ%2FSWukwukSFz%2BDehojbxQnNHD0693TjNErE2Sz7xfCUqzyvBTnhRxsySi5HfGsbXWaeYJ%2FmxjSCCKU04H51UGXTrtpDP2RU94enAXQlk%2BwRrDHxsL0nFv3Gr3Uyg%2Frpy6Tn80g6fG9raa0%2BnM1tta%2BOU6eSHgcLZL7os%2Ba36WJB4dJj%2F9JcP7CcRpsEz1eX6vraQAzGzvhbT8CYYeV%2BY58rkcV19q6dFvs7vQzomuGyymHVJDopiwdeuq9RCaUZ7gwIv0sq1fSQX2UDDRVg6c6Ahwbk40c3a8qMWNAZ13Ny4GocsAFIt%2FNuRhDbLZG%2BliVv3jH%2BttKCLTbaKCJxFyb%2BC0V0kmpIv17iNWl%2BpDmWFRfqbXBooPbqBbxu3Pje6Hx6xEm3XqEgelUfl1d0MN7mFjzgIdVszQU2sFTlEVGQkhnrkDK0xApePyy%2FbhVLbg8MKrtm8EGOqUBjZ71SebozZ%2FP7VX3L4y6ERyOaI2yiglUThPsDCA%2FG%2FLJRHzR328iACO8BCCWMMDaSEZI43l44y3NLe9vTUn1mqhS4Xwkozos2M3WnnND%2Brl7cRJx7dlyQGizw%2Bzj6QNR5umNZggFuLuWpPeVRjQqd6qoPg0morcfhKFuyNq3nNwuzsb6OrNzgZtDVa8eMOZIEZ0HTMRXc3Tyk5YXtaH5%2FusCnrOR&X-Amz-Signature=9f0e71abbf9d307c7f18f137bcb82926c759a8bf67bc3d8b1d8eed63ae1ece4e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
