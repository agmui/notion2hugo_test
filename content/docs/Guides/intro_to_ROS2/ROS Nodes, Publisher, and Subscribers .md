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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEYYIYTV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIUgc6f4VVD0LoS9U1MEKykwPkq0jdiqLndaGacd3E1AiAHxVzHF%2FFSk6HLOzXP%2B6pqsYjxcCOJmouoXQEepNeFByqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxRtB5SzWhfAEhnzlKtwD3qaWIrynAWsWMN7fakFu07NQpqrutP2VJ7Ysu1zbNYT4Te0Iyg0z1gTWd1AfkMe6eri%2FriTUoBkX46nSEdAeIbE0wf%2BpJPSDabKpJgjGWRLkWSl0tmDGJ%2BLHQ%2Bu%2F%2FD%2FL5%2BgzC6XH7OXfoQ%2BwG2OOUP3rffqd37HqBvnZqB4t%2BDAYWmnk1pprT6Lg%2FesCzrYJhCnHY7kHqp5YvfblkS9ePWcT9PpaS6oR%2BHHr4NBtyZewCMJlRhQ%2FrLbHoLxMOxuI2iRO9cuUh2%2FW99vzZ9cosOWMyHl76MByCgAZv0ZswOqfbDKIVK%2BYcXP1NxSOtgFqDQdRaZpZ7%2BdwdoltBmyELhS3ZhcDr6Mvq03c831iO9VMbWvmDb5pq2p%2FoSkdXB1zvVItkl%2BM3TXfn%2FKWjHIuk50NJGA3779M1roHKplWP9p3oX1FQaDwxwQWoKADd%2F7iKSMsq8OxL4BXKj61w9DS%2FwjdYTtOqXed4priFgtARB1St%2F3MwOJiCtfWOKJem985it8sSHeTFUf00E1%2Fsh9l9JDWfN%2F%2BgXr4Wz%2BAp1LIaLOTBC%2F5uHZXqRhR5avQEd2Zen1rT7SZAeluzB0ZMtEv4q2VDYzQuzOgC3VSkmxnosBcoVG3YO3vnpC5LMsw2vmlvQY6pgGNWhOfQQJ3kEhDWwC2qIvrZqKsp3VWC6TrEqntghGRPHqXoWCxBwZ9favbtpcijLclctw9MldwjdW29Zc%2FfW%2FpXGzzr2LqRS5StI%2BqYx3Q16VzvJWeP5VTYcq221BbuXuNcT2GWC5hSuQ%2BN24E3WfsbDJ9YL%2FySVSAZF8seWjPJysNbBQq%2Fp%2BUgz8ALmv%2F82g3lVfJdhYiJ2DF8Pr3jqo6lAijYfVt&X-Amz-Signature=6f0e868cb9a5c6f0ea0b6af7f53d351cdfa3b6ea177b4b439e9997c717cb2a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEYYIYTV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIUgc6f4VVD0LoS9U1MEKykwPkq0jdiqLndaGacd3E1AiAHxVzHF%2FFSk6HLOzXP%2B6pqsYjxcCOJmouoXQEepNeFByqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxRtB5SzWhfAEhnzlKtwD3qaWIrynAWsWMN7fakFu07NQpqrutP2VJ7Ysu1zbNYT4Te0Iyg0z1gTWd1AfkMe6eri%2FriTUoBkX46nSEdAeIbE0wf%2BpJPSDabKpJgjGWRLkWSl0tmDGJ%2BLHQ%2Bu%2F%2FD%2FL5%2BgzC6XH7OXfoQ%2BwG2OOUP3rffqd37HqBvnZqB4t%2BDAYWmnk1pprT6Lg%2FesCzrYJhCnHY7kHqp5YvfblkS9ePWcT9PpaS6oR%2BHHr4NBtyZewCMJlRhQ%2FrLbHoLxMOxuI2iRO9cuUh2%2FW99vzZ9cosOWMyHl76MByCgAZv0ZswOqfbDKIVK%2BYcXP1NxSOtgFqDQdRaZpZ7%2BdwdoltBmyELhS3ZhcDr6Mvq03c831iO9VMbWvmDb5pq2p%2FoSkdXB1zvVItkl%2BM3TXfn%2FKWjHIuk50NJGA3779M1roHKplWP9p3oX1FQaDwxwQWoKADd%2F7iKSMsq8OxL4BXKj61w9DS%2FwjdYTtOqXed4priFgtARB1St%2F3MwOJiCtfWOKJem985it8sSHeTFUf00E1%2Fsh9l9JDWfN%2F%2BgXr4Wz%2BAp1LIaLOTBC%2F5uHZXqRhR5avQEd2Zen1rT7SZAeluzB0ZMtEv4q2VDYzQuzOgC3VSkmxnosBcoVG3YO3vnpC5LMsw2vmlvQY6pgGNWhOfQQJ3kEhDWwC2qIvrZqKsp3VWC6TrEqntghGRPHqXoWCxBwZ9favbtpcijLclctw9MldwjdW29Zc%2FfW%2FpXGzzr2LqRS5StI%2BqYx3Q16VzvJWeP5VTYcq221BbuXuNcT2GWC5hSuQ%2BN24E3WfsbDJ9YL%2FySVSAZF8seWjPJysNbBQq%2Fp%2BUgz8ALmv%2F82g3lVfJdhYiJ2DF8Pr3jqo6lAijYfVt&X-Amz-Signature=4a40dce469ae2f31d2ed085a873f363a48f5128ec8103d7ff195c2f35232ca3f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEYYIYTV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIUgc6f4VVD0LoS9U1MEKykwPkq0jdiqLndaGacd3E1AiAHxVzHF%2FFSk6HLOzXP%2B6pqsYjxcCOJmouoXQEepNeFByqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxRtB5SzWhfAEhnzlKtwD3qaWIrynAWsWMN7fakFu07NQpqrutP2VJ7Ysu1zbNYT4Te0Iyg0z1gTWd1AfkMe6eri%2FriTUoBkX46nSEdAeIbE0wf%2BpJPSDabKpJgjGWRLkWSl0tmDGJ%2BLHQ%2Bu%2F%2FD%2FL5%2BgzC6XH7OXfoQ%2BwG2OOUP3rffqd37HqBvnZqB4t%2BDAYWmnk1pprT6Lg%2FesCzrYJhCnHY7kHqp5YvfblkS9ePWcT9PpaS6oR%2BHHr4NBtyZewCMJlRhQ%2FrLbHoLxMOxuI2iRO9cuUh2%2FW99vzZ9cosOWMyHl76MByCgAZv0ZswOqfbDKIVK%2BYcXP1NxSOtgFqDQdRaZpZ7%2BdwdoltBmyELhS3ZhcDr6Mvq03c831iO9VMbWvmDb5pq2p%2FoSkdXB1zvVItkl%2BM3TXfn%2FKWjHIuk50NJGA3779M1roHKplWP9p3oX1FQaDwxwQWoKADd%2F7iKSMsq8OxL4BXKj61w9DS%2FwjdYTtOqXed4priFgtARB1St%2F3MwOJiCtfWOKJem985it8sSHeTFUf00E1%2Fsh9l9JDWfN%2F%2BgXr4Wz%2BAp1LIaLOTBC%2F5uHZXqRhR5avQEd2Zen1rT7SZAeluzB0ZMtEv4q2VDYzQuzOgC3VSkmxnosBcoVG3YO3vnpC5LMsw2vmlvQY6pgGNWhOfQQJ3kEhDWwC2qIvrZqKsp3VWC6TrEqntghGRPHqXoWCxBwZ9favbtpcijLclctw9MldwjdW29Zc%2FfW%2FpXGzzr2LqRS5StI%2BqYx3Q16VzvJWeP5VTYcq221BbuXuNcT2GWC5hSuQ%2BN24E3WfsbDJ9YL%2FySVSAZF8seWjPJysNbBQq%2Fp%2BUgz8ALmv%2F82g3lVfJdhYiJ2DF8Pr3jqo6lAijYfVt&X-Amz-Signature=18db25f9c82a9f175f6ee11f0afd39773e39b1dec25f5b982f01bb8b58f34afc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEYYIYTV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIUgc6f4VVD0LoS9U1MEKykwPkq0jdiqLndaGacd3E1AiAHxVzHF%2FFSk6HLOzXP%2B6pqsYjxcCOJmouoXQEepNeFByqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxRtB5SzWhfAEhnzlKtwD3qaWIrynAWsWMN7fakFu07NQpqrutP2VJ7Ysu1zbNYT4Te0Iyg0z1gTWd1AfkMe6eri%2FriTUoBkX46nSEdAeIbE0wf%2BpJPSDabKpJgjGWRLkWSl0tmDGJ%2BLHQ%2Bu%2F%2FD%2FL5%2BgzC6XH7OXfoQ%2BwG2OOUP3rffqd37HqBvnZqB4t%2BDAYWmnk1pprT6Lg%2FesCzrYJhCnHY7kHqp5YvfblkS9ePWcT9PpaS6oR%2BHHr4NBtyZewCMJlRhQ%2FrLbHoLxMOxuI2iRO9cuUh2%2FW99vzZ9cosOWMyHl76MByCgAZv0ZswOqfbDKIVK%2BYcXP1NxSOtgFqDQdRaZpZ7%2BdwdoltBmyELhS3ZhcDr6Mvq03c831iO9VMbWvmDb5pq2p%2FoSkdXB1zvVItkl%2BM3TXfn%2FKWjHIuk50NJGA3779M1roHKplWP9p3oX1FQaDwxwQWoKADd%2F7iKSMsq8OxL4BXKj61w9DS%2FwjdYTtOqXed4priFgtARB1St%2F3MwOJiCtfWOKJem985it8sSHeTFUf00E1%2Fsh9l9JDWfN%2F%2BgXr4Wz%2BAp1LIaLOTBC%2F5uHZXqRhR5avQEd2Zen1rT7SZAeluzB0ZMtEv4q2VDYzQuzOgC3VSkmxnosBcoVG3YO3vnpC5LMsw2vmlvQY6pgGNWhOfQQJ3kEhDWwC2qIvrZqKsp3VWC6TrEqntghGRPHqXoWCxBwZ9favbtpcijLclctw9MldwjdW29Zc%2FfW%2FpXGzzr2LqRS5StI%2BqYx3Q16VzvJWeP5VTYcq221BbuXuNcT2GWC5hSuQ%2BN24E3WfsbDJ9YL%2FySVSAZF8seWjPJysNbBQq%2Fp%2BUgz8ALmv%2F82g3lVfJdhYiJ2DF8Pr3jqo6lAijYfVt&X-Amz-Signature=bfdb59ee2efe4460485bc3d90580c447aabd9e2174cf6e8fa8e430ba1532a1db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEYYIYTV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIUgc6f4VVD0LoS9U1MEKykwPkq0jdiqLndaGacd3E1AiAHxVzHF%2FFSk6HLOzXP%2B6pqsYjxcCOJmouoXQEepNeFByqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxRtB5SzWhfAEhnzlKtwD3qaWIrynAWsWMN7fakFu07NQpqrutP2VJ7Ysu1zbNYT4Te0Iyg0z1gTWd1AfkMe6eri%2FriTUoBkX46nSEdAeIbE0wf%2BpJPSDabKpJgjGWRLkWSl0tmDGJ%2BLHQ%2Bu%2F%2FD%2FL5%2BgzC6XH7OXfoQ%2BwG2OOUP3rffqd37HqBvnZqB4t%2BDAYWmnk1pprT6Lg%2FesCzrYJhCnHY7kHqp5YvfblkS9ePWcT9PpaS6oR%2BHHr4NBtyZewCMJlRhQ%2FrLbHoLxMOxuI2iRO9cuUh2%2FW99vzZ9cosOWMyHl76MByCgAZv0ZswOqfbDKIVK%2BYcXP1NxSOtgFqDQdRaZpZ7%2BdwdoltBmyELhS3ZhcDr6Mvq03c831iO9VMbWvmDb5pq2p%2FoSkdXB1zvVItkl%2BM3TXfn%2FKWjHIuk50NJGA3779M1roHKplWP9p3oX1FQaDwxwQWoKADd%2F7iKSMsq8OxL4BXKj61w9DS%2FwjdYTtOqXed4priFgtARB1St%2F3MwOJiCtfWOKJem985it8sSHeTFUf00E1%2Fsh9l9JDWfN%2F%2BgXr4Wz%2BAp1LIaLOTBC%2F5uHZXqRhR5avQEd2Zen1rT7SZAeluzB0ZMtEv4q2VDYzQuzOgC3VSkmxnosBcoVG3YO3vnpC5LMsw2vmlvQY6pgGNWhOfQQJ3kEhDWwC2qIvrZqKsp3VWC6TrEqntghGRPHqXoWCxBwZ9favbtpcijLclctw9MldwjdW29Zc%2FfW%2FpXGzzr2LqRS5StI%2BqYx3Q16VzvJWeP5VTYcq221BbuXuNcT2GWC5hSuQ%2BN24E3WfsbDJ9YL%2FySVSAZF8seWjPJysNbBQq%2Fp%2BUgz8ALmv%2F82g3lVfJdhYiJ2DF8Pr3jqo6lAijYfVt&X-Amz-Signature=f2b0155a75d78ce339a00a875de7dfe10af3d9f3c396dd0b6a9c60eeef4bb4bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEYYIYTV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIUgc6f4VVD0LoS9U1MEKykwPkq0jdiqLndaGacd3E1AiAHxVzHF%2FFSk6HLOzXP%2B6pqsYjxcCOJmouoXQEepNeFByqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxRtB5SzWhfAEhnzlKtwD3qaWIrynAWsWMN7fakFu07NQpqrutP2VJ7Ysu1zbNYT4Te0Iyg0z1gTWd1AfkMe6eri%2FriTUoBkX46nSEdAeIbE0wf%2BpJPSDabKpJgjGWRLkWSl0tmDGJ%2BLHQ%2Bu%2F%2FD%2FL5%2BgzC6XH7OXfoQ%2BwG2OOUP3rffqd37HqBvnZqB4t%2BDAYWmnk1pprT6Lg%2FesCzrYJhCnHY7kHqp5YvfblkS9ePWcT9PpaS6oR%2BHHr4NBtyZewCMJlRhQ%2FrLbHoLxMOxuI2iRO9cuUh2%2FW99vzZ9cosOWMyHl76MByCgAZv0ZswOqfbDKIVK%2BYcXP1NxSOtgFqDQdRaZpZ7%2BdwdoltBmyELhS3ZhcDr6Mvq03c831iO9VMbWvmDb5pq2p%2FoSkdXB1zvVItkl%2BM3TXfn%2FKWjHIuk50NJGA3779M1roHKplWP9p3oX1FQaDwxwQWoKADd%2F7iKSMsq8OxL4BXKj61w9DS%2FwjdYTtOqXed4priFgtARB1St%2F3MwOJiCtfWOKJem985it8sSHeTFUf00E1%2Fsh9l9JDWfN%2F%2BgXr4Wz%2BAp1LIaLOTBC%2F5uHZXqRhR5avQEd2Zen1rT7SZAeluzB0ZMtEv4q2VDYzQuzOgC3VSkmxnosBcoVG3YO3vnpC5LMsw2vmlvQY6pgGNWhOfQQJ3kEhDWwC2qIvrZqKsp3VWC6TrEqntghGRPHqXoWCxBwZ9favbtpcijLclctw9MldwjdW29Zc%2FfW%2FpXGzzr2LqRS5StI%2BqYx3Q16VzvJWeP5VTYcq221BbuXuNcT2GWC5hSuQ%2BN24E3WfsbDJ9YL%2FySVSAZF8seWjPJysNbBQq%2Fp%2BUgz8ALmv%2F82g3lVfJdhYiJ2DF8Pr3jqo6lAijYfVt&X-Amz-Signature=2bc745dd5675d39faec7b3063a11237d18b54af61ef9b1bbb01f9e4ccd8a7499&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEYYIYTV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIUgc6f4VVD0LoS9U1MEKykwPkq0jdiqLndaGacd3E1AiAHxVzHF%2FFSk6HLOzXP%2B6pqsYjxcCOJmouoXQEepNeFByqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxRtB5SzWhfAEhnzlKtwD3qaWIrynAWsWMN7fakFu07NQpqrutP2VJ7Ysu1zbNYT4Te0Iyg0z1gTWd1AfkMe6eri%2FriTUoBkX46nSEdAeIbE0wf%2BpJPSDabKpJgjGWRLkWSl0tmDGJ%2BLHQ%2Bu%2F%2FD%2FL5%2BgzC6XH7OXfoQ%2BwG2OOUP3rffqd37HqBvnZqB4t%2BDAYWmnk1pprT6Lg%2FesCzrYJhCnHY7kHqp5YvfblkS9ePWcT9PpaS6oR%2BHHr4NBtyZewCMJlRhQ%2FrLbHoLxMOxuI2iRO9cuUh2%2FW99vzZ9cosOWMyHl76MByCgAZv0ZswOqfbDKIVK%2BYcXP1NxSOtgFqDQdRaZpZ7%2BdwdoltBmyELhS3ZhcDr6Mvq03c831iO9VMbWvmDb5pq2p%2FoSkdXB1zvVItkl%2BM3TXfn%2FKWjHIuk50NJGA3779M1roHKplWP9p3oX1FQaDwxwQWoKADd%2F7iKSMsq8OxL4BXKj61w9DS%2FwjdYTtOqXed4priFgtARB1St%2F3MwOJiCtfWOKJem985it8sSHeTFUf00E1%2Fsh9l9JDWfN%2F%2BgXr4Wz%2BAp1LIaLOTBC%2F5uHZXqRhR5avQEd2Zen1rT7SZAeluzB0ZMtEv4q2VDYzQuzOgC3VSkmxnosBcoVG3YO3vnpC5LMsw2vmlvQY6pgGNWhOfQQJ3kEhDWwC2qIvrZqKsp3VWC6TrEqntghGRPHqXoWCxBwZ9favbtpcijLclctw9MldwjdW29Zc%2FfW%2FpXGzzr2LqRS5StI%2BqYx3Q16VzvJWeP5VTYcq221BbuXuNcT2GWC5hSuQ%2BN24E3WfsbDJ9YL%2FySVSAZF8seWjPJysNbBQq%2Fp%2BUgz8ALmv%2F82g3lVfJdhYiJ2DF8Pr3jqo6lAijYfVt&X-Amz-Signature=da1c83729539293c1ca5768c648a0a4a0e1d1044e1de4e2e665d69bff5c0cf64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEYYIYTV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIUgc6f4VVD0LoS9U1MEKykwPkq0jdiqLndaGacd3E1AiAHxVzHF%2FFSk6HLOzXP%2B6pqsYjxcCOJmouoXQEepNeFByqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxRtB5SzWhfAEhnzlKtwD3qaWIrynAWsWMN7fakFu07NQpqrutP2VJ7Ysu1zbNYT4Te0Iyg0z1gTWd1AfkMe6eri%2FriTUoBkX46nSEdAeIbE0wf%2BpJPSDabKpJgjGWRLkWSl0tmDGJ%2BLHQ%2Bu%2F%2FD%2FL5%2BgzC6XH7OXfoQ%2BwG2OOUP3rffqd37HqBvnZqB4t%2BDAYWmnk1pprT6Lg%2FesCzrYJhCnHY7kHqp5YvfblkS9ePWcT9PpaS6oR%2BHHr4NBtyZewCMJlRhQ%2FrLbHoLxMOxuI2iRO9cuUh2%2FW99vzZ9cosOWMyHl76MByCgAZv0ZswOqfbDKIVK%2BYcXP1NxSOtgFqDQdRaZpZ7%2BdwdoltBmyELhS3ZhcDr6Mvq03c831iO9VMbWvmDb5pq2p%2FoSkdXB1zvVItkl%2BM3TXfn%2FKWjHIuk50NJGA3779M1roHKplWP9p3oX1FQaDwxwQWoKADd%2F7iKSMsq8OxL4BXKj61w9DS%2FwjdYTtOqXed4priFgtARB1St%2F3MwOJiCtfWOKJem985it8sSHeTFUf00E1%2Fsh9l9JDWfN%2F%2BgXr4Wz%2BAp1LIaLOTBC%2F5uHZXqRhR5avQEd2Zen1rT7SZAeluzB0ZMtEv4q2VDYzQuzOgC3VSkmxnosBcoVG3YO3vnpC5LMsw2vmlvQY6pgGNWhOfQQJ3kEhDWwC2qIvrZqKsp3VWC6TrEqntghGRPHqXoWCxBwZ9favbtpcijLclctw9MldwjdW29Zc%2FfW%2FpXGzzr2LqRS5StI%2BqYx3Q16VzvJWeP5VTYcq221BbuXuNcT2GWC5hSuQ%2BN24E3WfsbDJ9YL%2FySVSAZF8seWjPJysNbBQq%2Fp%2BUgz8ALmv%2F82g3lVfJdhYiJ2DF8Pr3jqo6lAijYfVt&X-Amz-Signature=6c6772599addec5e78872ac67df75eb13ae2b85c237da5c82e3454161a7541e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
