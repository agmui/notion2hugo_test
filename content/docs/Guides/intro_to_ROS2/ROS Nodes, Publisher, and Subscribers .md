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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDILRXVL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoXWUheH0wpsEEPCZKf2pnwLY4BvtPu8vmEVPgd786KAIhAPqRt944Dod3QBp6hiYWP%2Fot0hc43olSVNw4gfQquEykKv8DCEMQABoMNjM3NDIzMTgzODA1Igy1o5bcnAsxvj2wd6kq3AMe3%2FgH6fD%2FxxmlTvtnrNGXQa1sqdn7ZBcdee9u3CJH%2FrN6GtTmamqVUETJiW%2BWb%2BlYSJ7X8XJb6rulemipcATqNpIH6EqbRfrITla23ztA50ncrhQ6AoG2rQh915lGRt7AcJCxw6h%2BEWTC8gF64DUUS3wlfI7LuxbG2E3ILMMDMZeIHzuoFwtf5kEZHH517Uh6Sd4VHeoYwnQGJ%2FwH%2B5nMaEpqTH%2BeISw1dHFHxyxLFweyDXfz2qtPeeCyrTlNE%2BmMJZ3h1D3VSgH5J8DJYi%2FEU%2B5RnKu6fbQuNe5XPLDL7emFYbbsE4ZOl5UyPYE6eSbaqyaxbuQJrlHCrD4pD%2FtwRbpGAJlalGX2LyL80qS36TWe1bqlvijdVBBIYW3QugVN4z%2BLt%2BvCiyREJjvV6P1shoZfmqbNrZvMRJ6Vrp4XvIgIp3iY%2FZs1AfQTTIKWfsJU00p614TPE%2FM7RfH%2BtCdQ7g%2FN5T7Z0k0wUHccF3nP5cffZ2WRogJhEIt%2FYkpyDQHgPxsS4KWwcLjTpUybSxak9f8ZnDKAM7WC%2BQmBH97eHSz3D0EhyHCVv5VNq9cRlzho3L5VViqXvfI66Mf42X%2F28TN1Vt1H4CoG4%2FkJt9QAi19aY%2FaoTm45k6V2rjCxiKu%2BBjqkAevK35wsiW7aehDd6FaTya1Pc9mSCNIpVe9gOeGCYtQ8tZaiAIidbRDtPsDWiHomX9HBn1h9SVAB6PZKqXImq5GH%2FsW9KU4ksATsIr7eZ6jr4mdd%2Fzqi1792%2BLOtfPU2PWgSv8839vL6xWiUUgaRcTP%2BNPW0%2F%2BKWZi76AxSrRdOdbR%2BDgQww1lXpFIR07Lhsf18eWtAcwoKm8Ms%2BYI%2B9w9qwQ4Jb&X-Amz-Signature=753c1f8e76dcd5436e0303044b549240d3d0eec87876d0a5150a5213d5d07384&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDILRXVL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoXWUheH0wpsEEPCZKf2pnwLY4BvtPu8vmEVPgd786KAIhAPqRt944Dod3QBp6hiYWP%2Fot0hc43olSVNw4gfQquEykKv8DCEMQABoMNjM3NDIzMTgzODA1Igy1o5bcnAsxvj2wd6kq3AMe3%2FgH6fD%2FxxmlTvtnrNGXQa1sqdn7ZBcdee9u3CJH%2FrN6GtTmamqVUETJiW%2BWb%2BlYSJ7X8XJb6rulemipcATqNpIH6EqbRfrITla23ztA50ncrhQ6AoG2rQh915lGRt7AcJCxw6h%2BEWTC8gF64DUUS3wlfI7LuxbG2E3ILMMDMZeIHzuoFwtf5kEZHH517Uh6Sd4VHeoYwnQGJ%2FwH%2B5nMaEpqTH%2BeISw1dHFHxyxLFweyDXfz2qtPeeCyrTlNE%2BmMJZ3h1D3VSgH5J8DJYi%2FEU%2B5RnKu6fbQuNe5XPLDL7emFYbbsE4ZOl5UyPYE6eSbaqyaxbuQJrlHCrD4pD%2FtwRbpGAJlalGX2LyL80qS36TWe1bqlvijdVBBIYW3QugVN4z%2BLt%2BvCiyREJjvV6P1shoZfmqbNrZvMRJ6Vrp4XvIgIp3iY%2FZs1AfQTTIKWfsJU00p614TPE%2FM7RfH%2BtCdQ7g%2FN5T7Z0k0wUHccF3nP5cffZ2WRogJhEIt%2FYkpyDQHgPxsS4KWwcLjTpUybSxak9f8ZnDKAM7WC%2BQmBH97eHSz3D0EhyHCVv5VNq9cRlzho3L5VViqXvfI66Mf42X%2F28TN1Vt1H4CoG4%2FkJt9QAi19aY%2FaoTm45k6V2rjCxiKu%2BBjqkAevK35wsiW7aehDd6FaTya1Pc9mSCNIpVe9gOeGCYtQ8tZaiAIidbRDtPsDWiHomX9HBn1h9SVAB6PZKqXImq5GH%2FsW9KU4ksATsIr7eZ6jr4mdd%2Fzqi1792%2BLOtfPU2PWgSv8839vL6xWiUUgaRcTP%2BNPW0%2F%2BKWZi76AxSrRdOdbR%2BDgQww1lXpFIR07Lhsf18eWtAcwoKm8Ms%2BYI%2B9w9qwQ4Jb&X-Amz-Signature=ec11a16653ecabfaa6f0507213c8dd4fe4cc1214bf0809b77c6cd9c62d3fb280&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDILRXVL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoXWUheH0wpsEEPCZKf2pnwLY4BvtPu8vmEVPgd786KAIhAPqRt944Dod3QBp6hiYWP%2Fot0hc43olSVNw4gfQquEykKv8DCEMQABoMNjM3NDIzMTgzODA1Igy1o5bcnAsxvj2wd6kq3AMe3%2FgH6fD%2FxxmlTvtnrNGXQa1sqdn7ZBcdee9u3CJH%2FrN6GtTmamqVUETJiW%2BWb%2BlYSJ7X8XJb6rulemipcATqNpIH6EqbRfrITla23ztA50ncrhQ6AoG2rQh915lGRt7AcJCxw6h%2BEWTC8gF64DUUS3wlfI7LuxbG2E3ILMMDMZeIHzuoFwtf5kEZHH517Uh6Sd4VHeoYwnQGJ%2FwH%2B5nMaEpqTH%2BeISw1dHFHxyxLFweyDXfz2qtPeeCyrTlNE%2BmMJZ3h1D3VSgH5J8DJYi%2FEU%2B5RnKu6fbQuNe5XPLDL7emFYbbsE4ZOl5UyPYE6eSbaqyaxbuQJrlHCrD4pD%2FtwRbpGAJlalGX2LyL80qS36TWe1bqlvijdVBBIYW3QugVN4z%2BLt%2BvCiyREJjvV6P1shoZfmqbNrZvMRJ6Vrp4XvIgIp3iY%2FZs1AfQTTIKWfsJU00p614TPE%2FM7RfH%2BtCdQ7g%2FN5T7Z0k0wUHccF3nP5cffZ2WRogJhEIt%2FYkpyDQHgPxsS4KWwcLjTpUybSxak9f8ZnDKAM7WC%2BQmBH97eHSz3D0EhyHCVv5VNq9cRlzho3L5VViqXvfI66Mf42X%2F28TN1Vt1H4CoG4%2FkJt9QAi19aY%2FaoTm45k6V2rjCxiKu%2BBjqkAevK35wsiW7aehDd6FaTya1Pc9mSCNIpVe9gOeGCYtQ8tZaiAIidbRDtPsDWiHomX9HBn1h9SVAB6PZKqXImq5GH%2FsW9KU4ksATsIr7eZ6jr4mdd%2Fzqi1792%2BLOtfPU2PWgSv8839vL6xWiUUgaRcTP%2BNPW0%2F%2BKWZi76AxSrRdOdbR%2BDgQww1lXpFIR07Lhsf18eWtAcwoKm8Ms%2BYI%2B9w9qwQ4Jb&X-Amz-Signature=15f07cfe9a428b0045fb457a93579312df757e7e42be8376b9908a7f0dbdfffb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDILRXVL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoXWUheH0wpsEEPCZKf2pnwLY4BvtPu8vmEVPgd786KAIhAPqRt944Dod3QBp6hiYWP%2Fot0hc43olSVNw4gfQquEykKv8DCEMQABoMNjM3NDIzMTgzODA1Igy1o5bcnAsxvj2wd6kq3AMe3%2FgH6fD%2FxxmlTvtnrNGXQa1sqdn7ZBcdee9u3CJH%2FrN6GtTmamqVUETJiW%2BWb%2BlYSJ7X8XJb6rulemipcATqNpIH6EqbRfrITla23ztA50ncrhQ6AoG2rQh915lGRt7AcJCxw6h%2BEWTC8gF64DUUS3wlfI7LuxbG2E3ILMMDMZeIHzuoFwtf5kEZHH517Uh6Sd4VHeoYwnQGJ%2FwH%2B5nMaEpqTH%2BeISw1dHFHxyxLFweyDXfz2qtPeeCyrTlNE%2BmMJZ3h1D3VSgH5J8DJYi%2FEU%2B5RnKu6fbQuNe5XPLDL7emFYbbsE4ZOl5UyPYE6eSbaqyaxbuQJrlHCrD4pD%2FtwRbpGAJlalGX2LyL80qS36TWe1bqlvijdVBBIYW3QugVN4z%2BLt%2BvCiyREJjvV6P1shoZfmqbNrZvMRJ6Vrp4XvIgIp3iY%2FZs1AfQTTIKWfsJU00p614TPE%2FM7RfH%2BtCdQ7g%2FN5T7Z0k0wUHccF3nP5cffZ2WRogJhEIt%2FYkpyDQHgPxsS4KWwcLjTpUybSxak9f8ZnDKAM7WC%2BQmBH97eHSz3D0EhyHCVv5VNq9cRlzho3L5VViqXvfI66Mf42X%2F28TN1Vt1H4CoG4%2FkJt9QAi19aY%2FaoTm45k6V2rjCxiKu%2BBjqkAevK35wsiW7aehDd6FaTya1Pc9mSCNIpVe9gOeGCYtQ8tZaiAIidbRDtPsDWiHomX9HBn1h9SVAB6PZKqXImq5GH%2FsW9KU4ksATsIr7eZ6jr4mdd%2Fzqi1792%2BLOtfPU2PWgSv8839vL6xWiUUgaRcTP%2BNPW0%2F%2BKWZi76AxSrRdOdbR%2BDgQww1lXpFIR07Lhsf18eWtAcwoKm8Ms%2BYI%2B9w9qwQ4Jb&X-Amz-Signature=1a49dfeb9d6ee1bc664a511fb3ab7fd77d135d73da1828b58b1177e597e2af8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDILRXVL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoXWUheH0wpsEEPCZKf2pnwLY4BvtPu8vmEVPgd786KAIhAPqRt944Dod3QBp6hiYWP%2Fot0hc43olSVNw4gfQquEykKv8DCEMQABoMNjM3NDIzMTgzODA1Igy1o5bcnAsxvj2wd6kq3AMe3%2FgH6fD%2FxxmlTvtnrNGXQa1sqdn7ZBcdee9u3CJH%2FrN6GtTmamqVUETJiW%2BWb%2BlYSJ7X8XJb6rulemipcATqNpIH6EqbRfrITla23ztA50ncrhQ6AoG2rQh915lGRt7AcJCxw6h%2BEWTC8gF64DUUS3wlfI7LuxbG2E3ILMMDMZeIHzuoFwtf5kEZHH517Uh6Sd4VHeoYwnQGJ%2FwH%2B5nMaEpqTH%2BeISw1dHFHxyxLFweyDXfz2qtPeeCyrTlNE%2BmMJZ3h1D3VSgH5J8DJYi%2FEU%2B5RnKu6fbQuNe5XPLDL7emFYbbsE4ZOl5UyPYE6eSbaqyaxbuQJrlHCrD4pD%2FtwRbpGAJlalGX2LyL80qS36TWe1bqlvijdVBBIYW3QugVN4z%2BLt%2BvCiyREJjvV6P1shoZfmqbNrZvMRJ6Vrp4XvIgIp3iY%2FZs1AfQTTIKWfsJU00p614TPE%2FM7RfH%2BtCdQ7g%2FN5T7Z0k0wUHccF3nP5cffZ2WRogJhEIt%2FYkpyDQHgPxsS4KWwcLjTpUybSxak9f8ZnDKAM7WC%2BQmBH97eHSz3D0EhyHCVv5VNq9cRlzho3L5VViqXvfI66Mf42X%2F28TN1Vt1H4CoG4%2FkJt9QAi19aY%2FaoTm45k6V2rjCxiKu%2BBjqkAevK35wsiW7aehDd6FaTya1Pc9mSCNIpVe9gOeGCYtQ8tZaiAIidbRDtPsDWiHomX9HBn1h9SVAB6PZKqXImq5GH%2FsW9KU4ksATsIr7eZ6jr4mdd%2Fzqi1792%2BLOtfPU2PWgSv8839vL6xWiUUgaRcTP%2BNPW0%2F%2BKWZi76AxSrRdOdbR%2BDgQww1lXpFIR07Lhsf18eWtAcwoKm8Ms%2BYI%2B9w9qwQ4Jb&X-Amz-Signature=edd25b4bcc1b8aa14b300589846721bca52d452ddb84171b289a4c92e96ebfc2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDILRXVL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoXWUheH0wpsEEPCZKf2pnwLY4BvtPu8vmEVPgd786KAIhAPqRt944Dod3QBp6hiYWP%2Fot0hc43olSVNw4gfQquEykKv8DCEMQABoMNjM3NDIzMTgzODA1Igy1o5bcnAsxvj2wd6kq3AMe3%2FgH6fD%2FxxmlTvtnrNGXQa1sqdn7ZBcdee9u3CJH%2FrN6GtTmamqVUETJiW%2BWb%2BlYSJ7X8XJb6rulemipcATqNpIH6EqbRfrITla23ztA50ncrhQ6AoG2rQh915lGRt7AcJCxw6h%2BEWTC8gF64DUUS3wlfI7LuxbG2E3ILMMDMZeIHzuoFwtf5kEZHH517Uh6Sd4VHeoYwnQGJ%2FwH%2B5nMaEpqTH%2BeISw1dHFHxyxLFweyDXfz2qtPeeCyrTlNE%2BmMJZ3h1D3VSgH5J8DJYi%2FEU%2B5RnKu6fbQuNe5XPLDL7emFYbbsE4ZOl5UyPYE6eSbaqyaxbuQJrlHCrD4pD%2FtwRbpGAJlalGX2LyL80qS36TWe1bqlvijdVBBIYW3QugVN4z%2BLt%2BvCiyREJjvV6P1shoZfmqbNrZvMRJ6Vrp4XvIgIp3iY%2FZs1AfQTTIKWfsJU00p614TPE%2FM7RfH%2BtCdQ7g%2FN5T7Z0k0wUHccF3nP5cffZ2WRogJhEIt%2FYkpyDQHgPxsS4KWwcLjTpUybSxak9f8ZnDKAM7WC%2BQmBH97eHSz3D0EhyHCVv5VNq9cRlzho3L5VViqXvfI66Mf42X%2F28TN1Vt1H4CoG4%2FkJt9QAi19aY%2FaoTm45k6V2rjCxiKu%2BBjqkAevK35wsiW7aehDd6FaTya1Pc9mSCNIpVe9gOeGCYtQ8tZaiAIidbRDtPsDWiHomX9HBn1h9SVAB6PZKqXImq5GH%2FsW9KU4ksATsIr7eZ6jr4mdd%2Fzqi1792%2BLOtfPU2PWgSv8839vL6xWiUUgaRcTP%2BNPW0%2F%2BKWZi76AxSrRdOdbR%2BDgQww1lXpFIR07Lhsf18eWtAcwoKm8Ms%2BYI%2B9w9qwQ4Jb&X-Amz-Signature=8e2fe49a51dcdcf6744d505552fdeb27c69718a054754eb3c461e5d8b3b5c1b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDILRXVL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoXWUheH0wpsEEPCZKf2pnwLY4BvtPu8vmEVPgd786KAIhAPqRt944Dod3QBp6hiYWP%2Fot0hc43olSVNw4gfQquEykKv8DCEMQABoMNjM3NDIzMTgzODA1Igy1o5bcnAsxvj2wd6kq3AMe3%2FgH6fD%2FxxmlTvtnrNGXQa1sqdn7ZBcdee9u3CJH%2FrN6GtTmamqVUETJiW%2BWb%2BlYSJ7X8XJb6rulemipcATqNpIH6EqbRfrITla23ztA50ncrhQ6AoG2rQh915lGRt7AcJCxw6h%2BEWTC8gF64DUUS3wlfI7LuxbG2E3ILMMDMZeIHzuoFwtf5kEZHH517Uh6Sd4VHeoYwnQGJ%2FwH%2B5nMaEpqTH%2BeISw1dHFHxyxLFweyDXfz2qtPeeCyrTlNE%2BmMJZ3h1D3VSgH5J8DJYi%2FEU%2B5RnKu6fbQuNe5XPLDL7emFYbbsE4ZOl5UyPYE6eSbaqyaxbuQJrlHCrD4pD%2FtwRbpGAJlalGX2LyL80qS36TWe1bqlvijdVBBIYW3QugVN4z%2BLt%2BvCiyREJjvV6P1shoZfmqbNrZvMRJ6Vrp4XvIgIp3iY%2FZs1AfQTTIKWfsJU00p614TPE%2FM7RfH%2BtCdQ7g%2FN5T7Z0k0wUHccF3nP5cffZ2WRogJhEIt%2FYkpyDQHgPxsS4KWwcLjTpUybSxak9f8ZnDKAM7WC%2BQmBH97eHSz3D0EhyHCVv5VNq9cRlzho3L5VViqXvfI66Mf42X%2F28TN1Vt1H4CoG4%2FkJt9QAi19aY%2FaoTm45k6V2rjCxiKu%2BBjqkAevK35wsiW7aehDd6FaTya1Pc9mSCNIpVe9gOeGCYtQ8tZaiAIidbRDtPsDWiHomX9HBn1h9SVAB6PZKqXImq5GH%2FsW9KU4ksATsIr7eZ6jr4mdd%2Fzqi1792%2BLOtfPU2PWgSv8839vL6xWiUUgaRcTP%2BNPW0%2F%2BKWZi76AxSrRdOdbR%2BDgQww1lXpFIR07Lhsf18eWtAcwoKm8Ms%2BYI%2B9w9qwQ4Jb&X-Amz-Signature=dad447a36988ac779c525b5212323d7ef6257aa98e0b8bb59b5cafff94ae3352&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDILRXVL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoXWUheH0wpsEEPCZKf2pnwLY4BvtPu8vmEVPgd786KAIhAPqRt944Dod3QBp6hiYWP%2Fot0hc43olSVNw4gfQquEykKv8DCEMQABoMNjM3NDIzMTgzODA1Igy1o5bcnAsxvj2wd6kq3AMe3%2FgH6fD%2FxxmlTvtnrNGXQa1sqdn7ZBcdee9u3CJH%2FrN6GtTmamqVUETJiW%2BWb%2BlYSJ7X8XJb6rulemipcATqNpIH6EqbRfrITla23ztA50ncrhQ6AoG2rQh915lGRt7AcJCxw6h%2BEWTC8gF64DUUS3wlfI7LuxbG2E3ILMMDMZeIHzuoFwtf5kEZHH517Uh6Sd4VHeoYwnQGJ%2FwH%2B5nMaEpqTH%2BeISw1dHFHxyxLFweyDXfz2qtPeeCyrTlNE%2BmMJZ3h1D3VSgH5J8DJYi%2FEU%2B5RnKu6fbQuNe5XPLDL7emFYbbsE4ZOl5UyPYE6eSbaqyaxbuQJrlHCrD4pD%2FtwRbpGAJlalGX2LyL80qS36TWe1bqlvijdVBBIYW3QugVN4z%2BLt%2BvCiyREJjvV6P1shoZfmqbNrZvMRJ6Vrp4XvIgIp3iY%2FZs1AfQTTIKWfsJU00p614TPE%2FM7RfH%2BtCdQ7g%2FN5T7Z0k0wUHccF3nP5cffZ2WRogJhEIt%2FYkpyDQHgPxsS4KWwcLjTpUybSxak9f8ZnDKAM7WC%2BQmBH97eHSz3D0EhyHCVv5VNq9cRlzho3L5VViqXvfI66Mf42X%2F28TN1Vt1H4CoG4%2FkJt9QAi19aY%2FaoTm45k6V2rjCxiKu%2BBjqkAevK35wsiW7aehDd6FaTya1Pc9mSCNIpVe9gOeGCYtQ8tZaiAIidbRDtPsDWiHomX9HBn1h9SVAB6PZKqXImq5GH%2FsW9KU4ksATsIr7eZ6jr4mdd%2Fzqi1792%2BLOtfPU2PWgSv8839vL6xWiUUgaRcTP%2BNPW0%2F%2BKWZi76AxSrRdOdbR%2BDgQww1lXpFIR07Lhsf18eWtAcwoKm8Ms%2BYI%2B9w9qwQ4Jb&X-Amz-Signature=a43ff44aece37166a8f2ce76fe1d0fae30600115d972e57c25ba5a1b3f4f9980&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
