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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEW32Z42%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2s8ALC3B%2BdIpRciyO6FLkfpfemNTlgZSe28cKRyKuZAiEAmTTN32p81eXLAKtZyNqr7aZo9wEB%2FtAV7NOi%2FNiST8IqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBpCYVgNgUqhWOUtSrcA0aCbxS1SQVKNJY%2BZTqCC8YLcBRionVsmGeAdXiu%2BeZPqbPGw54haDXZ6l4S17UqsvV%2BXrXZg89zQ1qziZLUD0Bimh%2BsTbibmWa22cvzyPY2e1na03Z1QUGk2NilpDFmygnV4UbASng0PI2GSbg84sNJP65jtT8Chug6vVs9q0ST5cxM%2BF6wOUQLtlmktxw4sspgkRQImybV9t68cDmThW5YHS7%2B1x7NkeiLmBH8BCjCSAGDFBmnJELFGOO7QSLsqkCfUKaQmNGx6HYu8StmOqKEQIL72JjQbxsRoh7mhmf3we38lcJZeRn6IsQYdUoWnUa5GJd48BBBijrrPOCvMIoSBulG6llM3Gt8rHfZnE6sdymQB2LzFGyIjxOZkm8KRbC9wGAU%2BYIHKimB%2BZJIlrtFSGMXKReG6sPEBHT6i1MHOIetygQiswMO7hDh2yKZkPmfamfyajW%2BaL2SLED5qFoEje5oNciTFxXhgzDGO9PT9UUZmmZZkEo%2BRDXs%2FGF7FiV6qm%2B6UjYHlRB90LcHIQqBlGMNagMMUP%2F0yQpkozguyxrCTtl5uxGVkg4uRD2c6WERWLq7ZuU8y3JPZShhn35fPPIvbJvHhYWTGKtp6pr68uIuHDsuz2NDOA0SMK%2FEhL8GOqUBkMF1EAb%2BpAblOni7z4ezqXhiLaQlzX2UUIWWH4tFQely%2F%2BRmmv9xa4mRzWkBIgaFwk5XWqGSuwI9Fo76aoanEP8Pk3WrdddLLRgN%2FkbuDes1nOcJt1kzySfXs2Qfw%2FpRjz2Xq%2FDJN3DHJHb0ZT96Z%2B%2BjkMyw5fP0m4E0N7oQPnKT%2B6%2BBfDtzmV4ma5N3Br7ujzV9yZrUWH%2FwleBwl84xajKvh5W%2B&X-Amz-Signature=116b3f6ce284f228821e03db294b410950ba0ad46b1efa69d0a640d2e280d05b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEW32Z42%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2s8ALC3B%2BdIpRciyO6FLkfpfemNTlgZSe28cKRyKuZAiEAmTTN32p81eXLAKtZyNqr7aZo9wEB%2FtAV7NOi%2FNiST8IqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBpCYVgNgUqhWOUtSrcA0aCbxS1SQVKNJY%2BZTqCC8YLcBRionVsmGeAdXiu%2BeZPqbPGw54haDXZ6l4S17UqsvV%2BXrXZg89zQ1qziZLUD0Bimh%2BsTbibmWa22cvzyPY2e1na03Z1QUGk2NilpDFmygnV4UbASng0PI2GSbg84sNJP65jtT8Chug6vVs9q0ST5cxM%2BF6wOUQLtlmktxw4sspgkRQImybV9t68cDmThW5YHS7%2B1x7NkeiLmBH8BCjCSAGDFBmnJELFGOO7QSLsqkCfUKaQmNGx6HYu8StmOqKEQIL72JjQbxsRoh7mhmf3we38lcJZeRn6IsQYdUoWnUa5GJd48BBBijrrPOCvMIoSBulG6llM3Gt8rHfZnE6sdymQB2LzFGyIjxOZkm8KRbC9wGAU%2BYIHKimB%2BZJIlrtFSGMXKReG6sPEBHT6i1MHOIetygQiswMO7hDh2yKZkPmfamfyajW%2BaL2SLED5qFoEje5oNciTFxXhgzDGO9PT9UUZmmZZkEo%2BRDXs%2FGF7FiV6qm%2B6UjYHlRB90LcHIQqBlGMNagMMUP%2F0yQpkozguyxrCTtl5uxGVkg4uRD2c6WERWLq7ZuU8y3JPZShhn35fPPIvbJvHhYWTGKtp6pr68uIuHDsuz2NDOA0SMK%2FEhL8GOqUBkMF1EAb%2BpAblOni7z4ezqXhiLaQlzX2UUIWWH4tFQely%2F%2BRmmv9xa4mRzWkBIgaFwk5XWqGSuwI9Fo76aoanEP8Pk3WrdddLLRgN%2FkbuDes1nOcJt1kzySfXs2Qfw%2FpRjz2Xq%2FDJN3DHJHb0ZT96Z%2B%2BjkMyw5fP0m4E0N7oQPnKT%2B6%2BBfDtzmV4ma5N3Br7ujzV9yZrUWH%2FwleBwl84xajKvh5W%2B&X-Amz-Signature=eece027e35d2469d0d4a42ff2c4acbaa92ec90c9181d77d1b3b077183b5177f6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEW32Z42%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2s8ALC3B%2BdIpRciyO6FLkfpfemNTlgZSe28cKRyKuZAiEAmTTN32p81eXLAKtZyNqr7aZo9wEB%2FtAV7NOi%2FNiST8IqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBpCYVgNgUqhWOUtSrcA0aCbxS1SQVKNJY%2BZTqCC8YLcBRionVsmGeAdXiu%2BeZPqbPGw54haDXZ6l4S17UqsvV%2BXrXZg89zQ1qziZLUD0Bimh%2BsTbibmWa22cvzyPY2e1na03Z1QUGk2NilpDFmygnV4UbASng0PI2GSbg84sNJP65jtT8Chug6vVs9q0ST5cxM%2BF6wOUQLtlmktxw4sspgkRQImybV9t68cDmThW5YHS7%2B1x7NkeiLmBH8BCjCSAGDFBmnJELFGOO7QSLsqkCfUKaQmNGx6HYu8StmOqKEQIL72JjQbxsRoh7mhmf3we38lcJZeRn6IsQYdUoWnUa5GJd48BBBijrrPOCvMIoSBulG6llM3Gt8rHfZnE6sdymQB2LzFGyIjxOZkm8KRbC9wGAU%2BYIHKimB%2BZJIlrtFSGMXKReG6sPEBHT6i1MHOIetygQiswMO7hDh2yKZkPmfamfyajW%2BaL2SLED5qFoEje5oNciTFxXhgzDGO9PT9UUZmmZZkEo%2BRDXs%2FGF7FiV6qm%2B6UjYHlRB90LcHIQqBlGMNagMMUP%2F0yQpkozguyxrCTtl5uxGVkg4uRD2c6WERWLq7ZuU8y3JPZShhn35fPPIvbJvHhYWTGKtp6pr68uIuHDsuz2NDOA0SMK%2FEhL8GOqUBkMF1EAb%2BpAblOni7z4ezqXhiLaQlzX2UUIWWH4tFQely%2F%2BRmmv9xa4mRzWkBIgaFwk5XWqGSuwI9Fo76aoanEP8Pk3WrdddLLRgN%2FkbuDes1nOcJt1kzySfXs2Qfw%2FpRjz2Xq%2FDJN3DHJHb0ZT96Z%2B%2BjkMyw5fP0m4E0N7oQPnKT%2B6%2BBfDtzmV4ma5N3Br7ujzV9yZrUWH%2FwleBwl84xajKvh5W%2B&X-Amz-Signature=fed699c30a8e157f45496a770daa58ba54f24d6444fa383c077a18149a690fd9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEW32Z42%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2s8ALC3B%2BdIpRciyO6FLkfpfemNTlgZSe28cKRyKuZAiEAmTTN32p81eXLAKtZyNqr7aZo9wEB%2FtAV7NOi%2FNiST8IqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBpCYVgNgUqhWOUtSrcA0aCbxS1SQVKNJY%2BZTqCC8YLcBRionVsmGeAdXiu%2BeZPqbPGw54haDXZ6l4S17UqsvV%2BXrXZg89zQ1qziZLUD0Bimh%2BsTbibmWa22cvzyPY2e1na03Z1QUGk2NilpDFmygnV4UbASng0PI2GSbg84sNJP65jtT8Chug6vVs9q0ST5cxM%2BF6wOUQLtlmktxw4sspgkRQImybV9t68cDmThW5YHS7%2B1x7NkeiLmBH8BCjCSAGDFBmnJELFGOO7QSLsqkCfUKaQmNGx6HYu8StmOqKEQIL72JjQbxsRoh7mhmf3we38lcJZeRn6IsQYdUoWnUa5GJd48BBBijrrPOCvMIoSBulG6llM3Gt8rHfZnE6sdymQB2LzFGyIjxOZkm8KRbC9wGAU%2BYIHKimB%2BZJIlrtFSGMXKReG6sPEBHT6i1MHOIetygQiswMO7hDh2yKZkPmfamfyajW%2BaL2SLED5qFoEje5oNciTFxXhgzDGO9PT9UUZmmZZkEo%2BRDXs%2FGF7FiV6qm%2B6UjYHlRB90LcHIQqBlGMNagMMUP%2F0yQpkozguyxrCTtl5uxGVkg4uRD2c6WERWLq7ZuU8y3JPZShhn35fPPIvbJvHhYWTGKtp6pr68uIuHDsuz2NDOA0SMK%2FEhL8GOqUBkMF1EAb%2BpAblOni7z4ezqXhiLaQlzX2UUIWWH4tFQely%2F%2BRmmv9xa4mRzWkBIgaFwk5XWqGSuwI9Fo76aoanEP8Pk3WrdddLLRgN%2FkbuDes1nOcJt1kzySfXs2Qfw%2FpRjz2Xq%2FDJN3DHJHb0ZT96Z%2B%2BjkMyw5fP0m4E0N7oQPnKT%2B6%2BBfDtzmV4ma5N3Br7ujzV9yZrUWH%2FwleBwl84xajKvh5W%2B&X-Amz-Signature=25fbd09f127c44b49262ed32365f96c0ed37fb452574d9fc42fc38729bd4577d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEW32Z42%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2s8ALC3B%2BdIpRciyO6FLkfpfemNTlgZSe28cKRyKuZAiEAmTTN32p81eXLAKtZyNqr7aZo9wEB%2FtAV7NOi%2FNiST8IqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBpCYVgNgUqhWOUtSrcA0aCbxS1SQVKNJY%2BZTqCC8YLcBRionVsmGeAdXiu%2BeZPqbPGw54haDXZ6l4S17UqsvV%2BXrXZg89zQ1qziZLUD0Bimh%2BsTbibmWa22cvzyPY2e1na03Z1QUGk2NilpDFmygnV4UbASng0PI2GSbg84sNJP65jtT8Chug6vVs9q0ST5cxM%2BF6wOUQLtlmktxw4sspgkRQImybV9t68cDmThW5YHS7%2B1x7NkeiLmBH8BCjCSAGDFBmnJELFGOO7QSLsqkCfUKaQmNGx6HYu8StmOqKEQIL72JjQbxsRoh7mhmf3we38lcJZeRn6IsQYdUoWnUa5GJd48BBBijrrPOCvMIoSBulG6llM3Gt8rHfZnE6sdymQB2LzFGyIjxOZkm8KRbC9wGAU%2BYIHKimB%2BZJIlrtFSGMXKReG6sPEBHT6i1MHOIetygQiswMO7hDh2yKZkPmfamfyajW%2BaL2SLED5qFoEje5oNciTFxXhgzDGO9PT9UUZmmZZkEo%2BRDXs%2FGF7FiV6qm%2B6UjYHlRB90LcHIQqBlGMNagMMUP%2F0yQpkozguyxrCTtl5uxGVkg4uRD2c6WERWLq7ZuU8y3JPZShhn35fPPIvbJvHhYWTGKtp6pr68uIuHDsuz2NDOA0SMK%2FEhL8GOqUBkMF1EAb%2BpAblOni7z4ezqXhiLaQlzX2UUIWWH4tFQely%2F%2BRmmv9xa4mRzWkBIgaFwk5XWqGSuwI9Fo76aoanEP8Pk3WrdddLLRgN%2FkbuDes1nOcJt1kzySfXs2Qfw%2FpRjz2Xq%2FDJN3DHJHb0ZT96Z%2B%2BjkMyw5fP0m4E0N7oQPnKT%2B6%2BBfDtzmV4ma5N3Br7ujzV9yZrUWH%2FwleBwl84xajKvh5W%2B&X-Amz-Signature=21b2522930ceec2c1c34023a2903f92d4ddbe0d6e7d545f821293735bdfa0db4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEW32Z42%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2s8ALC3B%2BdIpRciyO6FLkfpfemNTlgZSe28cKRyKuZAiEAmTTN32p81eXLAKtZyNqr7aZo9wEB%2FtAV7NOi%2FNiST8IqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBpCYVgNgUqhWOUtSrcA0aCbxS1SQVKNJY%2BZTqCC8YLcBRionVsmGeAdXiu%2BeZPqbPGw54haDXZ6l4S17UqsvV%2BXrXZg89zQ1qziZLUD0Bimh%2BsTbibmWa22cvzyPY2e1na03Z1QUGk2NilpDFmygnV4UbASng0PI2GSbg84sNJP65jtT8Chug6vVs9q0ST5cxM%2BF6wOUQLtlmktxw4sspgkRQImybV9t68cDmThW5YHS7%2B1x7NkeiLmBH8BCjCSAGDFBmnJELFGOO7QSLsqkCfUKaQmNGx6HYu8StmOqKEQIL72JjQbxsRoh7mhmf3we38lcJZeRn6IsQYdUoWnUa5GJd48BBBijrrPOCvMIoSBulG6llM3Gt8rHfZnE6sdymQB2LzFGyIjxOZkm8KRbC9wGAU%2BYIHKimB%2BZJIlrtFSGMXKReG6sPEBHT6i1MHOIetygQiswMO7hDh2yKZkPmfamfyajW%2BaL2SLED5qFoEje5oNciTFxXhgzDGO9PT9UUZmmZZkEo%2BRDXs%2FGF7FiV6qm%2B6UjYHlRB90LcHIQqBlGMNagMMUP%2F0yQpkozguyxrCTtl5uxGVkg4uRD2c6WERWLq7ZuU8y3JPZShhn35fPPIvbJvHhYWTGKtp6pr68uIuHDsuz2NDOA0SMK%2FEhL8GOqUBkMF1EAb%2BpAblOni7z4ezqXhiLaQlzX2UUIWWH4tFQely%2F%2BRmmv9xa4mRzWkBIgaFwk5XWqGSuwI9Fo76aoanEP8Pk3WrdddLLRgN%2FkbuDes1nOcJt1kzySfXs2Qfw%2FpRjz2Xq%2FDJN3DHJHb0ZT96Z%2B%2BjkMyw5fP0m4E0N7oQPnKT%2B6%2BBfDtzmV4ma5N3Br7ujzV9yZrUWH%2FwleBwl84xajKvh5W%2B&X-Amz-Signature=8454a2497a68ec7fe7d94fe680e26dc82ebe5900862aa9edccbcbed7caecabfb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEW32Z42%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2s8ALC3B%2BdIpRciyO6FLkfpfemNTlgZSe28cKRyKuZAiEAmTTN32p81eXLAKtZyNqr7aZo9wEB%2FtAV7NOi%2FNiST8IqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBpCYVgNgUqhWOUtSrcA0aCbxS1SQVKNJY%2BZTqCC8YLcBRionVsmGeAdXiu%2BeZPqbPGw54haDXZ6l4S17UqsvV%2BXrXZg89zQ1qziZLUD0Bimh%2BsTbibmWa22cvzyPY2e1na03Z1QUGk2NilpDFmygnV4UbASng0PI2GSbg84sNJP65jtT8Chug6vVs9q0ST5cxM%2BF6wOUQLtlmktxw4sspgkRQImybV9t68cDmThW5YHS7%2B1x7NkeiLmBH8BCjCSAGDFBmnJELFGOO7QSLsqkCfUKaQmNGx6HYu8StmOqKEQIL72JjQbxsRoh7mhmf3we38lcJZeRn6IsQYdUoWnUa5GJd48BBBijrrPOCvMIoSBulG6llM3Gt8rHfZnE6sdymQB2LzFGyIjxOZkm8KRbC9wGAU%2BYIHKimB%2BZJIlrtFSGMXKReG6sPEBHT6i1MHOIetygQiswMO7hDh2yKZkPmfamfyajW%2BaL2SLED5qFoEje5oNciTFxXhgzDGO9PT9UUZmmZZkEo%2BRDXs%2FGF7FiV6qm%2B6UjYHlRB90LcHIQqBlGMNagMMUP%2F0yQpkozguyxrCTtl5uxGVkg4uRD2c6WERWLq7ZuU8y3JPZShhn35fPPIvbJvHhYWTGKtp6pr68uIuHDsuz2NDOA0SMK%2FEhL8GOqUBkMF1EAb%2BpAblOni7z4ezqXhiLaQlzX2UUIWWH4tFQely%2F%2BRmmv9xa4mRzWkBIgaFwk5XWqGSuwI9Fo76aoanEP8Pk3WrdddLLRgN%2FkbuDes1nOcJt1kzySfXs2Qfw%2FpRjz2Xq%2FDJN3DHJHb0ZT96Z%2B%2BjkMyw5fP0m4E0N7oQPnKT%2B6%2BBfDtzmV4ma5N3Br7ujzV9yZrUWH%2FwleBwl84xajKvh5W%2B&X-Amz-Signature=875a5c1874bca45879b304039ab4959fd3eb76195e626b85ee20cf6d77474cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEW32Z42%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2s8ALC3B%2BdIpRciyO6FLkfpfemNTlgZSe28cKRyKuZAiEAmTTN32p81eXLAKtZyNqr7aZo9wEB%2FtAV7NOi%2FNiST8IqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBpCYVgNgUqhWOUtSrcA0aCbxS1SQVKNJY%2BZTqCC8YLcBRionVsmGeAdXiu%2BeZPqbPGw54haDXZ6l4S17UqsvV%2BXrXZg89zQ1qziZLUD0Bimh%2BsTbibmWa22cvzyPY2e1na03Z1QUGk2NilpDFmygnV4UbASng0PI2GSbg84sNJP65jtT8Chug6vVs9q0ST5cxM%2BF6wOUQLtlmktxw4sspgkRQImybV9t68cDmThW5YHS7%2B1x7NkeiLmBH8BCjCSAGDFBmnJELFGOO7QSLsqkCfUKaQmNGx6HYu8StmOqKEQIL72JjQbxsRoh7mhmf3we38lcJZeRn6IsQYdUoWnUa5GJd48BBBijrrPOCvMIoSBulG6llM3Gt8rHfZnE6sdymQB2LzFGyIjxOZkm8KRbC9wGAU%2BYIHKimB%2BZJIlrtFSGMXKReG6sPEBHT6i1MHOIetygQiswMO7hDh2yKZkPmfamfyajW%2BaL2SLED5qFoEje5oNciTFxXhgzDGO9PT9UUZmmZZkEo%2BRDXs%2FGF7FiV6qm%2B6UjYHlRB90LcHIQqBlGMNagMMUP%2F0yQpkozguyxrCTtl5uxGVkg4uRD2c6WERWLq7ZuU8y3JPZShhn35fPPIvbJvHhYWTGKtp6pr68uIuHDsuz2NDOA0SMK%2FEhL8GOqUBkMF1EAb%2BpAblOni7z4ezqXhiLaQlzX2UUIWWH4tFQely%2F%2BRmmv9xa4mRzWkBIgaFwk5XWqGSuwI9Fo76aoanEP8Pk3WrdddLLRgN%2FkbuDes1nOcJt1kzySfXs2Qfw%2FpRjz2Xq%2FDJN3DHJHb0ZT96Z%2B%2BjkMyw5fP0m4E0N7oQPnKT%2B6%2BBfDtzmV4ma5N3Br7ujzV9yZrUWH%2FwleBwl84xajKvh5W%2B&X-Amz-Signature=256358219677a13e951b3d466b13721efc01c9f0ffaded73230de9895d33a074&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
