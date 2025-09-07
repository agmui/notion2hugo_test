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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRP663ZH%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDc8FFeLOiUqJpjcJFLOdewpTQvf6B2lI7yeKj3KbXXnwIhAMjfA3%2BJLfTIpb5P%2BJ5p343vyf2%2Fys4%2FLxFPhZuriWusKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd2hp7rvMdH43jEKUq3AOGoaoNbJUAD3zyebHPAlf7ZIdplNHu5Vcx95LI2uUPjNBO0xYooLW0uTl8PqXpdS2YFOPmaErA%2BepjUKB%2Fnte2oxAQV%2FctihOvaplhdvPmd41P2jSHnReCXp2dKTGXj5Ls0qAzqNhG948pTYudRDs65%2BqxzA9haFbdwdkFWYIDjGhhGmkFiLdyfBExFh6qav3kCdgeEkv2t3e4Ck0rkhGxHIzSufJ%2BnrKtaaEQuRaPhTIthqlgS%2F3VJ4p5cOmJm3GCPMH4TuwjuYzAXPfqcanoJXOBHuC67DC7eZOUw5aaP2XyovtJvaJdHn1PdkkRejGMDHNkZl3uk0sxSTDGkIuu1Fu77pOHkJGTQXOex9vhpV%2B%2B9lcTuA156fUnsCSws0vinrz%2BNaydVgnZ5PABwuoiaMNEgsl8a4eVeTCJZG4%2FF%2Bemq9YVdBwreAHG0tCTYiQ%2FvGv0JdPFmbBxRm5597CowTFg4pWH064vHECGN0f5z5xkZnS4NnCI0o9ry6lZRf%2FbXATvY9Z6ZdWZPyH8yciILOk72RxPQkjER77YF4hDTBY%2F7hHxLnbStZoUpZcs5Fi%2BexJjTVWwM17b%2FlPLKwRFViWK4N%2FO%2F1JgCc9YisDKwt8m%2BrkDV52c%2FuYtHjDVw%2FLFBjqkAaGggZabp0NMCgXTZN5tlHoqsu0LKQCiLrP7pnOz0BGiaAzGqksDZPOhAHOB%2FzaRmZmOlm%2Fw%2FOVnIKxUiLEvuDs4s4W4uvjeRAbvBE%2BW1Xh3SLeXbsIkDwXHN9XZO77nKGsPItOy9n73yxkAG5oWCMJC20yt3xFjl77hpfhFH8ZXzax9UOHS45cYVSTPVQjXfpnye%2F92EJhdRL01XbSmWtezucP1&X-Amz-Signature=6de1bdd945a17c54d8053d30f4948f698249d14d3e316c80a0cbe3f443b1542a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRP663ZH%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDc8FFeLOiUqJpjcJFLOdewpTQvf6B2lI7yeKj3KbXXnwIhAMjfA3%2BJLfTIpb5P%2BJ5p343vyf2%2Fys4%2FLxFPhZuriWusKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd2hp7rvMdH43jEKUq3AOGoaoNbJUAD3zyebHPAlf7ZIdplNHu5Vcx95LI2uUPjNBO0xYooLW0uTl8PqXpdS2YFOPmaErA%2BepjUKB%2Fnte2oxAQV%2FctihOvaplhdvPmd41P2jSHnReCXp2dKTGXj5Ls0qAzqNhG948pTYudRDs65%2BqxzA9haFbdwdkFWYIDjGhhGmkFiLdyfBExFh6qav3kCdgeEkv2t3e4Ck0rkhGxHIzSufJ%2BnrKtaaEQuRaPhTIthqlgS%2F3VJ4p5cOmJm3GCPMH4TuwjuYzAXPfqcanoJXOBHuC67DC7eZOUw5aaP2XyovtJvaJdHn1PdkkRejGMDHNkZl3uk0sxSTDGkIuu1Fu77pOHkJGTQXOex9vhpV%2B%2B9lcTuA156fUnsCSws0vinrz%2BNaydVgnZ5PABwuoiaMNEgsl8a4eVeTCJZG4%2FF%2Bemq9YVdBwreAHG0tCTYiQ%2FvGv0JdPFmbBxRm5597CowTFg4pWH064vHECGN0f5z5xkZnS4NnCI0o9ry6lZRf%2FbXATvY9Z6ZdWZPyH8yciILOk72RxPQkjER77YF4hDTBY%2F7hHxLnbStZoUpZcs5Fi%2BexJjTVWwM17b%2FlPLKwRFViWK4N%2FO%2F1JgCc9YisDKwt8m%2BrkDV52c%2FuYtHjDVw%2FLFBjqkAaGggZabp0NMCgXTZN5tlHoqsu0LKQCiLrP7pnOz0BGiaAzGqksDZPOhAHOB%2FzaRmZmOlm%2Fw%2FOVnIKxUiLEvuDs4s4W4uvjeRAbvBE%2BW1Xh3SLeXbsIkDwXHN9XZO77nKGsPItOy9n73yxkAG5oWCMJC20yt3xFjl77hpfhFH8ZXzax9UOHS45cYVSTPVQjXfpnye%2F92EJhdRL01XbSmWtezucP1&X-Amz-Signature=5c58814946afdb783f0b430f9b67380d777cfea64e6657ef2878e3bbe4f0b5af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRP663ZH%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDc8FFeLOiUqJpjcJFLOdewpTQvf6B2lI7yeKj3KbXXnwIhAMjfA3%2BJLfTIpb5P%2BJ5p343vyf2%2Fys4%2FLxFPhZuriWusKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd2hp7rvMdH43jEKUq3AOGoaoNbJUAD3zyebHPAlf7ZIdplNHu5Vcx95LI2uUPjNBO0xYooLW0uTl8PqXpdS2YFOPmaErA%2BepjUKB%2Fnte2oxAQV%2FctihOvaplhdvPmd41P2jSHnReCXp2dKTGXj5Ls0qAzqNhG948pTYudRDs65%2BqxzA9haFbdwdkFWYIDjGhhGmkFiLdyfBExFh6qav3kCdgeEkv2t3e4Ck0rkhGxHIzSufJ%2BnrKtaaEQuRaPhTIthqlgS%2F3VJ4p5cOmJm3GCPMH4TuwjuYzAXPfqcanoJXOBHuC67DC7eZOUw5aaP2XyovtJvaJdHn1PdkkRejGMDHNkZl3uk0sxSTDGkIuu1Fu77pOHkJGTQXOex9vhpV%2B%2B9lcTuA156fUnsCSws0vinrz%2BNaydVgnZ5PABwuoiaMNEgsl8a4eVeTCJZG4%2FF%2Bemq9YVdBwreAHG0tCTYiQ%2FvGv0JdPFmbBxRm5597CowTFg4pWH064vHECGN0f5z5xkZnS4NnCI0o9ry6lZRf%2FbXATvY9Z6ZdWZPyH8yciILOk72RxPQkjER77YF4hDTBY%2F7hHxLnbStZoUpZcs5Fi%2BexJjTVWwM17b%2FlPLKwRFViWK4N%2FO%2F1JgCc9YisDKwt8m%2BrkDV52c%2FuYtHjDVw%2FLFBjqkAaGggZabp0NMCgXTZN5tlHoqsu0LKQCiLrP7pnOz0BGiaAzGqksDZPOhAHOB%2FzaRmZmOlm%2Fw%2FOVnIKxUiLEvuDs4s4W4uvjeRAbvBE%2BW1Xh3SLeXbsIkDwXHN9XZO77nKGsPItOy9n73yxkAG5oWCMJC20yt3xFjl77hpfhFH8ZXzax9UOHS45cYVSTPVQjXfpnye%2F92EJhdRL01XbSmWtezucP1&X-Amz-Signature=166aa9e606d1f826a1e56321a43a58dd6952f8bf5ff6b2a471fe2171ddc0b91a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRP663ZH%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDc8FFeLOiUqJpjcJFLOdewpTQvf6B2lI7yeKj3KbXXnwIhAMjfA3%2BJLfTIpb5P%2BJ5p343vyf2%2Fys4%2FLxFPhZuriWusKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd2hp7rvMdH43jEKUq3AOGoaoNbJUAD3zyebHPAlf7ZIdplNHu5Vcx95LI2uUPjNBO0xYooLW0uTl8PqXpdS2YFOPmaErA%2BepjUKB%2Fnte2oxAQV%2FctihOvaplhdvPmd41P2jSHnReCXp2dKTGXj5Ls0qAzqNhG948pTYudRDs65%2BqxzA9haFbdwdkFWYIDjGhhGmkFiLdyfBExFh6qav3kCdgeEkv2t3e4Ck0rkhGxHIzSufJ%2BnrKtaaEQuRaPhTIthqlgS%2F3VJ4p5cOmJm3GCPMH4TuwjuYzAXPfqcanoJXOBHuC67DC7eZOUw5aaP2XyovtJvaJdHn1PdkkRejGMDHNkZl3uk0sxSTDGkIuu1Fu77pOHkJGTQXOex9vhpV%2B%2B9lcTuA156fUnsCSws0vinrz%2BNaydVgnZ5PABwuoiaMNEgsl8a4eVeTCJZG4%2FF%2Bemq9YVdBwreAHG0tCTYiQ%2FvGv0JdPFmbBxRm5597CowTFg4pWH064vHECGN0f5z5xkZnS4NnCI0o9ry6lZRf%2FbXATvY9Z6ZdWZPyH8yciILOk72RxPQkjER77YF4hDTBY%2F7hHxLnbStZoUpZcs5Fi%2BexJjTVWwM17b%2FlPLKwRFViWK4N%2FO%2F1JgCc9YisDKwt8m%2BrkDV52c%2FuYtHjDVw%2FLFBjqkAaGggZabp0NMCgXTZN5tlHoqsu0LKQCiLrP7pnOz0BGiaAzGqksDZPOhAHOB%2FzaRmZmOlm%2Fw%2FOVnIKxUiLEvuDs4s4W4uvjeRAbvBE%2BW1Xh3SLeXbsIkDwXHN9XZO77nKGsPItOy9n73yxkAG5oWCMJC20yt3xFjl77hpfhFH8ZXzax9UOHS45cYVSTPVQjXfpnye%2F92EJhdRL01XbSmWtezucP1&X-Amz-Signature=44be7d70901a856bde822ee93db1835f11f2ab92b87c07bf8251efff4f2b3da1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRP663ZH%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDc8FFeLOiUqJpjcJFLOdewpTQvf6B2lI7yeKj3KbXXnwIhAMjfA3%2BJLfTIpb5P%2BJ5p343vyf2%2Fys4%2FLxFPhZuriWusKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd2hp7rvMdH43jEKUq3AOGoaoNbJUAD3zyebHPAlf7ZIdplNHu5Vcx95LI2uUPjNBO0xYooLW0uTl8PqXpdS2YFOPmaErA%2BepjUKB%2Fnte2oxAQV%2FctihOvaplhdvPmd41P2jSHnReCXp2dKTGXj5Ls0qAzqNhG948pTYudRDs65%2BqxzA9haFbdwdkFWYIDjGhhGmkFiLdyfBExFh6qav3kCdgeEkv2t3e4Ck0rkhGxHIzSufJ%2BnrKtaaEQuRaPhTIthqlgS%2F3VJ4p5cOmJm3GCPMH4TuwjuYzAXPfqcanoJXOBHuC67DC7eZOUw5aaP2XyovtJvaJdHn1PdkkRejGMDHNkZl3uk0sxSTDGkIuu1Fu77pOHkJGTQXOex9vhpV%2B%2B9lcTuA156fUnsCSws0vinrz%2BNaydVgnZ5PABwuoiaMNEgsl8a4eVeTCJZG4%2FF%2Bemq9YVdBwreAHG0tCTYiQ%2FvGv0JdPFmbBxRm5597CowTFg4pWH064vHECGN0f5z5xkZnS4NnCI0o9ry6lZRf%2FbXATvY9Z6ZdWZPyH8yciILOk72RxPQkjER77YF4hDTBY%2F7hHxLnbStZoUpZcs5Fi%2BexJjTVWwM17b%2FlPLKwRFViWK4N%2FO%2F1JgCc9YisDKwt8m%2BrkDV52c%2FuYtHjDVw%2FLFBjqkAaGggZabp0NMCgXTZN5tlHoqsu0LKQCiLrP7pnOz0BGiaAzGqksDZPOhAHOB%2FzaRmZmOlm%2Fw%2FOVnIKxUiLEvuDs4s4W4uvjeRAbvBE%2BW1Xh3SLeXbsIkDwXHN9XZO77nKGsPItOy9n73yxkAG5oWCMJC20yt3xFjl77hpfhFH8ZXzax9UOHS45cYVSTPVQjXfpnye%2F92EJhdRL01XbSmWtezucP1&X-Amz-Signature=714862c1ad1b38dd1e8543728ac69acde54c3e4c7be1e2ca97f2102287cd9769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRP663ZH%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDc8FFeLOiUqJpjcJFLOdewpTQvf6B2lI7yeKj3KbXXnwIhAMjfA3%2BJLfTIpb5P%2BJ5p343vyf2%2Fys4%2FLxFPhZuriWusKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd2hp7rvMdH43jEKUq3AOGoaoNbJUAD3zyebHPAlf7ZIdplNHu5Vcx95LI2uUPjNBO0xYooLW0uTl8PqXpdS2YFOPmaErA%2BepjUKB%2Fnte2oxAQV%2FctihOvaplhdvPmd41P2jSHnReCXp2dKTGXj5Ls0qAzqNhG948pTYudRDs65%2BqxzA9haFbdwdkFWYIDjGhhGmkFiLdyfBExFh6qav3kCdgeEkv2t3e4Ck0rkhGxHIzSufJ%2BnrKtaaEQuRaPhTIthqlgS%2F3VJ4p5cOmJm3GCPMH4TuwjuYzAXPfqcanoJXOBHuC67DC7eZOUw5aaP2XyovtJvaJdHn1PdkkRejGMDHNkZl3uk0sxSTDGkIuu1Fu77pOHkJGTQXOex9vhpV%2B%2B9lcTuA156fUnsCSws0vinrz%2BNaydVgnZ5PABwuoiaMNEgsl8a4eVeTCJZG4%2FF%2Bemq9YVdBwreAHG0tCTYiQ%2FvGv0JdPFmbBxRm5597CowTFg4pWH064vHECGN0f5z5xkZnS4NnCI0o9ry6lZRf%2FbXATvY9Z6ZdWZPyH8yciILOk72RxPQkjER77YF4hDTBY%2F7hHxLnbStZoUpZcs5Fi%2BexJjTVWwM17b%2FlPLKwRFViWK4N%2FO%2F1JgCc9YisDKwt8m%2BrkDV52c%2FuYtHjDVw%2FLFBjqkAaGggZabp0NMCgXTZN5tlHoqsu0LKQCiLrP7pnOz0BGiaAzGqksDZPOhAHOB%2FzaRmZmOlm%2Fw%2FOVnIKxUiLEvuDs4s4W4uvjeRAbvBE%2BW1Xh3SLeXbsIkDwXHN9XZO77nKGsPItOy9n73yxkAG5oWCMJC20yt3xFjl77hpfhFH8ZXzax9UOHS45cYVSTPVQjXfpnye%2F92EJhdRL01XbSmWtezucP1&X-Amz-Signature=976f09853f6722202e6ff8af63848767432a3cfd516a1b3ffe9a2f92cbbcdfdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRP663ZH%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDc8FFeLOiUqJpjcJFLOdewpTQvf6B2lI7yeKj3KbXXnwIhAMjfA3%2BJLfTIpb5P%2BJ5p343vyf2%2Fys4%2FLxFPhZuriWusKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd2hp7rvMdH43jEKUq3AOGoaoNbJUAD3zyebHPAlf7ZIdplNHu5Vcx95LI2uUPjNBO0xYooLW0uTl8PqXpdS2YFOPmaErA%2BepjUKB%2Fnte2oxAQV%2FctihOvaplhdvPmd41P2jSHnReCXp2dKTGXj5Ls0qAzqNhG948pTYudRDs65%2BqxzA9haFbdwdkFWYIDjGhhGmkFiLdyfBExFh6qav3kCdgeEkv2t3e4Ck0rkhGxHIzSufJ%2BnrKtaaEQuRaPhTIthqlgS%2F3VJ4p5cOmJm3GCPMH4TuwjuYzAXPfqcanoJXOBHuC67DC7eZOUw5aaP2XyovtJvaJdHn1PdkkRejGMDHNkZl3uk0sxSTDGkIuu1Fu77pOHkJGTQXOex9vhpV%2B%2B9lcTuA156fUnsCSws0vinrz%2BNaydVgnZ5PABwuoiaMNEgsl8a4eVeTCJZG4%2FF%2Bemq9YVdBwreAHG0tCTYiQ%2FvGv0JdPFmbBxRm5597CowTFg4pWH064vHECGN0f5z5xkZnS4NnCI0o9ry6lZRf%2FbXATvY9Z6ZdWZPyH8yciILOk72RxPQkjER77YF4hDTBY%2F7hHxLnbStZoUpZcs5Fi%2BexJjTVWwM17b%2FlPLKwRFViWK4N%2FO%2F1JgCc9YisDKwt8m%2BrkDV52c%2FuYtHjDVw%2FLFBjqkAaGggZabp0NMCgXTZN5tlHoqsu0LKQCiLrP7pnOz0BGiaAzGqksDZPOhAHOB%2FzaRmZmOlm%2Fw%2FOVnIKxUiLEvuDs4s4W4uvjeRAbvBE%2BW1Xh3SLeXbsIkDwXHN9XZO77nKGsPItOy9n73yxkAG5oWCMJC20yt3xFjl77hpfhFH8ZXzax9UOHS45cYVSTPVQjXfpnye%2F92EJhdRL01XbSmWtezucP1&X-Amz-Signature=3a918fde7abcc000c75e22b9435f4f07ea7ff2a2e2814f2c0fa47c461026f9d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRP663ZH%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDc8FFeLOiUqJpjcJFLOdewpTQvf6B2lI7yeKj3KbXXnwIhAMjfA3%2BJLfTIpb5P%2BJ5p343vyf2%2Fys4%2FLxFPhZuriWusKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd2hp7rvMdH43jEKUq3AOGoaoNbJUAD3zyebHPAlf7ZIdplNHu5Vcx95LI2uUPjNBO0xYooLW0uTl8PqXpdS2YFOPmaErA%2BepjUKB%2Fnte2oxAQV%2FctihOvaplhdvPmd41P2jSHnReCXp2dKTGXj5Ls0qAzqNhG948pTYudRDs65%2BqxzA9haFbdwdkFWYIDjGhhGmkFiLdyfBExFh6qav3kCdgeEkv2t3e4Ck0rkhGxHIzSufJ%2BnrKtaaEQuRaPhTIthqlgS%2F3VJ4p5cOmJm3GCPMH4TuwjuYzAXPfqcanoJXOBHuC67DC7eZOUw5aaP2XyovtJvaJdHn1PdkkRejGMDHNkZl3uk0sxSTDGkIuu1Fu77pOHkJGTQXOex9vhpV%2B%2B9lcTuA156fUnsCSws0vinrz%2BNaydVgnZ5PABwuoiaMNEgsl8a4eVeTCJZG4%2FF%2Bemq9YVdBwreAHG0tCTYiQ%2FvGv0JdPFmbBxRm5597CowTFg4pWH064vHECGN0f5z5xkZnS4NnCI0o9ry6lZRf%2FbXATvY9Z6ZdWZPyH8yciILOk72RxPQkjER77YF4hDTBY%2F7hHxLnbStZoUpZcs5Fi%2BexJjTVWwM17b%2FlPLKwRFViWK4N%2FO%2F1JgCc9YisDKwt8m%2BrkDV52c%2FuYtHjDVw%2FLFBjqkAaGggZabp0NMCgXTZN5tlHoqsu0LKQCiLrP7pnOz0BGiaAzGqksDZPOhAHOB%2FzaRmZmOlm%2Fw%2FOVnIKxUiLEvuDs4s4W4uvjeRAbvBE%2BW1Xh3SLeXbsIkDwXHN9XZO77nKGsPItOy9n73yxkAG5oWCMJC20yt3xFjl77hpfhFH8ZXzax9UOHS45cYVSTPVQjXfpnye%2F92EJhdRL01XbSmWtezucP1&X-Amz-Signature=c70b64e6589b95f59639e472dd2de5a5d5a12a78c4bc5a4eafcb93c0b65884b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
