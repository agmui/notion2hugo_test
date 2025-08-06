---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SZ67PP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIEcPw%2Buqxz3EzFJD14pzoRPmawOD2fo9WcnX7XCnXYBjAiEAm%2FSOz0g2wKz2Wo%2BV%2FOCUkYlVDO8%2BNsTxDodeRqxaMS0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPyns%2Bf0nlYnmxqO3yrcA9GxmwNOajGuyxdtTDyP85%2FsYb4%2BaBQFv7%2FznVJDl2xMW44wsJ9SQbCFMuH9JiOoEfzbeG6OofvLMbZPw3eUWz6g3PuAaRIopvtcE8Gpzgkcw1mFX7TJugNuPG8HDMTVcHcc91AtkLfCSfLSWLZ8MYc5W8JHvYjSrXe94A%2FZ7GzAon7ZmlcfenkSkaPtV6vnYnTZhvTCp4%2Bw4b%2FO%2BHfrzU1%2FGmPBMs0u2Milq2rywpIjMGdjNOqLQYk8FUDjor55vmSfEQbOAVPhC2wGRajRpM9UtbX%2BsrnUYp%2FWx5GXUbFlHQoZDrrfP8fNZej35z0CXTLtKO%2Bf8%2B9F0k%2FuPEtS8UgWhoKZhcLA4oOuK0IEaPAJx168LMr8EQPIJMpP2TRSsujuxc7kQw5Z6EmB8W%2F6WyKGTg0yPxIC8VU8rrJfNNU%2B3ckiXuFPcYayItnU4DuwjFJVlRXrXSnZoGB7u1%2Bpc%2Fph2cyyzyejBx6XGc5aCdpnbBq7monslmKKUCyYMGF4y8ssieKV5u0pQooDNqy%2FuGieXF1UqQ1sY0lbtKClraduJG9pZXtVfnqj%2BHW%2Fg3XfNbFO4iXVWQpwC1CiLiRjfwN7NNv61RM4iQgWNTQ2339iyPEAJ6YgnfelVjTuMKTPzMQGOqUBA4RcvpU%2Fb4vBsj225N0oQ1l4HNzQoSSGZPOs7WTXHeJu8LtanpcZWs8gXeFnAgV5HosKe0zR63DSx7Qi8N7lwzGeyHLQemp71T%2Bf3OwBWHtHj2DGtIANqzYplCVve9%2BPRkpDSHzaX%2BPtR439GcrC8mPLWQ61LSnXgi9MGZBJge3rrCRrPJxIfi85qQUp04%2BrHWYH5Bj9hnYnf1u3qQhPfBKymLLH&X-Amz-Signature=7eab76681fd5657fe329b013ab1a5d5b44f2613344fc5ae9b5d24fad204d5355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SZ67PP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIEcPw%2Buqxz3EzFJD14pzoRPmawOD2fo9WcnX7XCnXYBjAiEAm%2FSOz0g2wKz2Wo%2BV%2FOCUkYlVDO8%2BNsTxDodeRqxaMS0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPyns%2Bf0nlYnmxqO3yrcA9GxmwNOajGuyxdtTDyP85%2FsYb4%2BaBQFv7%2FznVJDl2xMW44wsJ9SQbCFMuH9JiOoEfzbeG6OofvLMbZPw3eUWz6g3PuAaRIopvtcE8Gpzgkcw1mFX7TJugNuPG8HDMTVcHcc91AtkLfCSfLSWLZ8MYc5W8JHvYjSrXe94A%2FZ7GzAon7ZmlcfenkSkaPtV6vnYnTZhvTCp4%2Bw4b%2FO%2BHfrzU1%2FGmPBMs0u2Milq2rywpIjMGdjNOqLQYk8FUDjor55vmSfEQbOAVPhC2wGRajRpM9UtbX%2BsrnUYp%2FWx5GXUbFlHQoZDrrfP8fNZej35z0CXTLtKO%2Bf8%2B9F0k%2FuPEtS8UgWhoKZhcLA4oOuK0IEaPAJx168LMr8EQPIJMpP2TRSsujuxc7kQw5Z6EmB8W%2F6WyKGTg0yPxIC8VU8rrJfNNU%2B3ckiXuFPcYayItnU4DuwjFJVlRXrXSnZoGB7u1%2Bpc%2Fph2cyyzyejBx6XGc5aCdpnbBq7monslmKKUCyYMGF4y8ssieKV5u0pQooDNqy%2FuGieXF1UqQ1sY0lbtKClraduJG9pZXtVfnqj%2BHW%2Fg3XfNbFO4iXVWQpwC1CiLiRjfwN7NNv61RM4iQgWNTQ2339iyPEAJ6YgnfelVjTuMKTPzMQGOqUBA4RcvpU%2Fb4vBsj225N0oQ1l4HNzQoSSGZPOs7WTXHeJu8LtanpcZWs8gXeFnAgV5HosKe0zR63DSx7Qi8N7lwzGeyHLQemp71T%2Bf3OwBWHtHj2DGtIANqzYplCVve9%2BPRkpDSHzaX%2BPtR439GcrC8mPLWQ61LSnXgi9MGZBJge3rrCRrPJxIfi85qQUp04%2BrHWYH5Bj9hnYnf1u3qQhPfBKymLLH&X-Amz-Signature=83cbad30b9433089d284a2b5c1f1792a0bbb228f1fbb88896ef140d91b3fd911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SZ67PP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIEcPw%2Buqxz3EzFJD14pzoRPmawOD2fo9WcnX7XCnXYBjAiEAm%2FSOz0g2wKz2Wo%2BV%2FOCUkYlVDO8%2BNsTxDodeRqxaMS0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPyns%2Bf0nlYnmxqO3yrcA9GxmwNOajGuyxdtTDyP85%2FsYb4%2BaBQFv7%2FznVJDl2xMW44wsJ9SQbCFMuH9JiOoEfzbeG6OofvLMbZPw3eUWz6g3PuAaRIopvtcE8Gpzgkcw1mFX7TJugNuPG8HDMTVcHcc91AtkLfCSfLSWLZ8MYc5W8JHvYjSrXe94A%2FZ7GzAon7ZmlcfenkSkaPtV6vnYnTZhvTCp4%2Bw4b%2FO%2BHfrzU1%2FGmPBMs0u2Milq2rywpIjMGdjNOqLQYk8FUDjor55vmSfEQbOAVPhC2wGRajRpM9UtbX%2BsrnUYp%2FWx5GXUbFlHQoZDrrfP8fNZej35z0CXTLtKO%2Bf8%2B9F0k%2FuPEtS8UgWhoKZhcLA4oOuK0IEaPAJx168LMr8EQPIJMpP2TRSsujuxc7kQw5Z6EmB8W%2F6WyKGTg0yPxIC8VU8rrJfNNU%2B3ckiXuFPcYayItnU4DuwjFJVlRXrXSnZoGB7u1%2Bpc%2Fph2cyyzyejBx6XGc5aCdpnbBq7monslmKKUCyYMGF4y8ssieKV5u0pQooDNqy%2FuGieXF1UqQ1sY0lbtKClraduJG9pZXtVfnqj%2BHW%2Fg3XfNbFO4iXVWQpwC1CiLiRjfwN7NNv61RM4iQgWNTQ2339iyPEAJ6YgnfelVjTuMKTPzMQGOqUBA4RcvpU%2Fb4vBsj225N0oQ1l4HNzQoSSGZPOs7WTXHeJu8LtanpcZWs8gXeFnAgV5HosKe0zR63DSx7Qi8N7lwzGeyHLQemp71T%2Bf3OwBWHtHj2DGtIANqzYplCVve9%2BPRkpDSHzaX%2BPtR439GcrC8mPLWQ61LSnXgi9MGZBJge3rrCRrPJxIfi85qQUp04%2BrHWYH5Bj9hnYnf1u3qQhPfBKymLLH&X-Amz-Signature=1945e638f6c1be879094e709c73e00f77ca78f9a207087b5b53751d3fc0a2bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SZ67PP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIEcPw%2Buqxz3EzFJD14pzoRPmawOD2fo9WcnX7XCnXYBjAiEAm%2FSOz0g2wKz2Wo%2BV%2FOCUkYlVDO8%2BNsTxDodeRqxaMS0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPyns%2Bf0nlYnmxqO3yrcA9GxmwNOajGuyxdtTDyP85%2FsYb4%2BaBQFv7%2FznVJDl2xMW44wsJ9SQbCFMuH9JiOoEfzbeG6OofvLMbZPw3eUWz6g3PuAaRIopvtcE8Gpzgkcw1mFX7TJugNuPG8HDMTVcHcc91AtkLfCSfLSWLZ8MYc5W8JHvYjSrXe94A%2FZ7GzAon7ZmlcfenkSkaPtV6vnYnTZhvTCp4%2Bw4b%2FO%2BHfrzU1%2FGmPBMs0u2Milq2rywpIjMGdjNOqLQYk8FUDjor55vmSfEQbOAVPhC2wGRajRpM9UtbX%2BsrnUYp%2FWx5GXUbFlHQoZDrrfP8fNZej35z0CXTLtKO%2Bf8%2B9F0k%2FuPEtS8UgWhoKZhcLA4oOuK0IEaPAJx168LMr8EQPIJMpP2TRSsujuxc7kQw5Z6EmB8W%2F6WyKGTg0yPxIC8VU8rrJfNNU%2B3ckiXuFPcYayItnU4DuwjFJVlRXrXSnZoGB7u1%2Bpc%2Fph2cyyzyejBx6XGc5aCdpnbBq7monslmKKUCyYMGF4y8ssieKV5u0pQooDNqy%2FuGieXF1UqQ1sY0lbtKClraduJG9pZXtVfnqj%2BHW%2Fg3XfNbFO4iXVWQpwC1CiLiRjfwN7NNv61RM4iQgWNTQ2339iyPEAJ6YgnfelVjTuMKTPzMQGOqUBA4RcvpU%2Fb4vBsj225N0oQ1l4HNzQoSSGZPOs7WTXHeJu8LtanpcZWs8gXeFnAgV5HosKe0zR63DSx7Qi8N7lwzGeyHLQemp71T%2Bf3OwBWHtHj2DGtIANqzYplCVve9%2BPRkpDSHzaX%2BPtR439GcrC8mPLWQ61LSnXgi9MGZBJge3rrCRrPJxIfi85qQUp04%2BrHWYH5Bj9hnYnf1u3qQhPfBKymLLH&X-Amz-Signature=266f8e3f8bead3b940e7f8ea63dc7f3a1e6e49ce4e4e28efc523d7eeba3aa357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SZ67PP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIEcPw%2Buqxz3EzFJD14pzoRPmawOD2fo9WcnX7XCnXYBjAiEAm%2FSOz0g2wKz2Wo%2BV%2FOCUkYlVDO8%2BNsTxDodeRqxaMS0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPyns%2Bf0nlYnmxqO3yrcA9GxmwNOajGuyxdtTDyP85%2FsYb4%2BaBQFv7%2FznVJDl2xMW44wsJ9SQbCFMuH9JiOoEfzbeG6OofvLMbZPw3eUWz6g3PuAaRIopvtcE8Gpzgkcw1mFX7TJugNuPG8HDMTVcHcc91AtkLfCSfLSWLZ8MYc5W8JHvYjSrXe94A%2FZ7GzAon7ZmlcfenkSkaPtV6vnYnTZhvTCp4%2Bw4b%2FO%2BHfrzU1%2FGmPBMs0u2Milq2rywpIjMGdjNOqLQYk8FUDjor55vmSfEQbOAVPhC2wGRajRpM9UtbX%2BsrnUYp%2FWx5GXUbFlHQoZDrrfP8fNZej35z0CXTLtKO%2Bf8%2B9F0k%2FuPEtS8UgWhoKZhcLA4oOuK0IEaPAJx168LMr8EQPIJMpP2TRSsujuxc7kQw5Z6EmB8W%2F6WyKGTg0yPxIC8VU8rrJfNNU%2B3ckiXuFPcYayItnU4DuwjFJVlRXrXSnZoGB7u1%2Bpc%2Fph2cyyzyejBx6XGc5aCdpnbBq7monslmKKUCyYMGF4y8ssieKV5u0pQooDNqy%2FuGieXF1UqQ1sY0lbtKClraduJG9pZXtVfnqj%2BHW%2Fg3XfNbFO4iXVWQpwC1CiLiRjfwN7NNv61RM4iQgWNTQ2339iyPEAJ6YgnfelVjTuMKTPzMQGOqUBA4RcvpU%2Fb4vBsj225N0oQ1l4HNzQoSSGZPOs7WTXHeJu8LtanpcZWs8gXeFnAgV5HosKe0zR63DSx7Qi8N7lwzGeyHLQemp71T%2Bf3OwBWHtHj2DGtIANqzYplCVve9%2BPRkpDSHzaX%2BPtR439GcrC8mPLWQ61LSnXgi9MGZBJge3rrCRrPJxIfi85qQUp04%2BrHWYH5Bj9hnYnf1u3qQhPfBKymLLH&X-Amz-Signature=71fe45b262e7a66a73a8aaa45318df0b213de369f6521f597b748b5aaeec548c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SZ67PP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIEcPw%2Buqxz3EzFJD14pzoRPmawOD2fo9WcnX7XCnXYBjAiEAm%2FSOz0g2wKz2Wo%2BV%2FOCUkYlVDO8%2BNsTxDodeRqxaMS0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPyns%2Bf0nlYnmxqO3yrcA9GxmwNOajGuyxdtTDyP85%2FsYb4%2BaBQFv7%2FznVJDl2xMW44wsJ9SQbCFMuH9JiOoEfzbeG6OofvLMbZPw3eUWz6g3PuAaRIopvtcE8Gpzgkcw1mFX7TJugNuPG8HDMTVcHcc91AtkLfCSfLSWLZ8MYc5W8JHvYjSrXe94A%2FZ7GzAon7ZmlcfenkSkaPtV6vnYnTZhvTCp4%2Bw4b%2FO%2BHfrzU1%2FGmPBMs0u2Milq2rywpIjMGdjNOqLQYk8FUDjor55vmSfEQbOAVPhC2wGRajRpM9UtbX%2BsrnUYp%2FWx5GXUbFlHQoZDrrfP8fNZej35z0CXTLtKO%2Bf8%2B9F0k%2FuPEtS8UgWhoKZhcLA4oOuK0IEaPAJx168LMr8EQPIJMpP2TRSsujuxc7kQw5Z6EmB8W%2F6WyKGTg0yPxIC8VU8rrJfNNU%2B3ckiXuFPcYayItnU4DuwjFJVlRXrXSnZoGB7u1%2Bpc%2Fph2cyyzyejBx6XGc5aCdpnbBq7monslmKKUCyYMGF4y8ssieKV5u0pQooDNqy%2FuGieXF1UqQ1sY0lbtKClraduJG9pZXtVfnqj%2BHW%2Fg3XfNbFO4iXVWQpwC1CiLiRjfwN7NNv61RM4iQgWNTQ2339iyPEAJ6YgnfelVjTuMKTPzMQGOqUBA4RcvpU%2Fb4vBsj225N0oQ1l4HNzQoSSGZPOs7WTXHeJu8LtanpcZWs8gXeFnAgV5HosKe0zR63DSx7Qi8N7lwzGeyHLQemp71T%2Bf3OwBWHtHj2DGtIANqzYplCVve9%2BPRkpDSHzaX%2BPtR439GcrC8mPLWQ61LSnXgi9MGZBJge3rrCRrPJxIfi85qQUp04%2BrHWYH5Bj9hnYnf1u3qQhPfBKymLLH&X-Amz-Signature=f3dfdd96868622109f97c5ed8a52ba96735e4a187593c28439cb3ecd1eaca908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SZ67PP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIEcPw%2Buqxz3EzFJD14pzoRPmawOD2fo9WcnX7XCnXYBjAiEAm%2FSOz0g2wKz2Wo%2BV%2FOCUkYlVDO8%2BNsTxDodeRqxaMS0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPyns%2Bf0nlYnmxqO3yrcA9GxmwNOajGuyxdtTDyP85%2FsYb4%2BaBQFv7%2FznVJDl2xMW44wsJ9SQbCFMuH9JiOoEfzbeG6OofvLMbZPw3eUWz6g3PuAaRIopvtcE8Gpzgkcw1mFX7TJugNuPG8HDMTVcHcc91AtkLfCSfLSWLZ8MYc5W8JHvYjSrXe94A%2FZ7GzAon7ZmlcfenkSkaPtV6vnYnTZhvTCp4%2Bw4b%2FO%2BHfrzU1%2FGmPBMs0u2Milq2rywpIjMGdjNOqLQYk8FUDjor55vmSfEQbOAVPhC2wGRajRpM9UtbX%2BsrnUYp%2FWx5GXUbFlHQoZDrrfP8fNZej35z0CXTLtKO%2Bf8%2B9F0k%2FuPEtS8UgWhoKZhcLA4oOuK0IEaPAJx168LMr8EQPIJMpP2TRSsujuxc7kQw5Z6EmB8W%2F6WyKGTg0yPxIC8VU8rrJfNNU%2B3ckiXuFPcYayItnU4DuwjFJVlRXrXSnZoGB7u1%2Bpc%2Fph2cyyzyejBx6XGc5aCdpnbBq7monslmKKUCyYMGF4y8ssieKV5u0pQooDNqy%2FuGieXF1UqQ1sY0lbtKClraduJG9pZXtVfnqj%2BHW%2Fg3XfNbFO4iXVWQpwC1CiLiRjfwN7NNv61RM4iQgWNTQ2339iyPEAJ6YgnfelVjTuMKTPzMQGOqUBA4RcvpU%2Fb4vBsj225N0oQ1l4HNzQoSSGZPOs7WTXHeJu8LtanpcZWs8gXeFnAgV5HosKe0zR63DSx7Qi8N7lwzGeyHLQemp71T%2Bf3OwBWHtHj2DGtIANqzYplCVve9%2BPRkpDSHzaX%2BPtR439GcrC8mPLWQ61LSnXgi9MGZBJge3rrCRrPJxIfi85qQUp04%2BrHWYH5Bj9hnYnf1u3qQhPfBKymLLH&X-Amz-Signature=b12855a70e3bbac5ba632a5627448f3d7baba7daf49359a42cb292b6ded760a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SZ67PP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIEcPw%2Buqxz3EzFJD14pzoRPmawOD2fo9WcnX7XCnXYBjAiEAm%2FSOz0g2wKz2Wo%2BV%2FOCUkYlVDO8%2BNsTxDodeRqxaMS0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPyns%2Bf0nlYnmxqO3yrcA9GxmwNOajGuyxdtTDyP85%2FsYb4%2BaBQFv7%2FznVJDl2xMW44wsJ9SQbCFMuH9JiOoEfzbeG6OofvLMbZPw3eUWz6g3PuAaRIopvtcE8Gpzgkcw1mFX7TJugNuPG8HDMTVcHcc91AtkLfCSfLSWLZ8MYc5W8JHvYjSrXe94A%2FZ7GzAon7ZmlcfenkSkaPtV6vnYnTZhvTCp4%2Bw4b%2FO%2BHfrzU1%2FGmPBMs0u2Milq2rywpIjMGdjNOqLQYk8FUDjor55vmSfEQbOAVPhC2wGRajRpM9UtbX%2BsrnUYp%2FWx5GXUbFlHQoZDrrfP8fNZej35z0CXTLtKO%2Bf8%2B9F0k%2FuPEtS8UgWhoKZhcLA4oOuK0IEaPAJx168LMr8EQPIJMpP2TRSsujuxc7kQw5Z6EmB8W%2F6WyKGTg0yPxIC8VU8rrJfNNU%2B3ckiXuFPcYayItnU4DuwjFJVlRXrXSnZoGB7u1%2Bpc%2Fph2cyyzyejBx6XGc5aCdpnbBq7monslmKKUCyYMGF4y8ssieKV5u0pQooDNqy%2FuGieXF1UqQ1sY0lbtKClraduJG9pZXtVfnqj%2BHW%2Fg3XfNbFO4iXVWQpwC1CiLiRjfwN7NNv61RM4iQgWNTQ2339iyPEAJ6YgnfelVjTuMKTPzMQGOqUBA4RcvpU%2Fb4vBsj225N0oQ1l4HNzQoSSGZPOs7WTXHeJu8LtanpcZWs8gXeFnAgV5HosKe0zR63DSx7Qi8N7lwzGeyHLQemp71T%2Bf3OwBWHtHj2DGtIANqzYplCVve9%2BPRkpDSHzaX%2BPtR439GcrC8mPLWQ61LSnXgi9MGZBJge3rrCRrPJxIfi85qQUp04%2BrHWYH5Bj9hnYnf1u3qQhPfBKymLLH&X-Amz-Signature=94804586a1e536b3d2957e9e2332d467aa2245de1250d948ffb2efbbd7de8653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
