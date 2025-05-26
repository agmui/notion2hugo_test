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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHRHT4W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCGQiK%2FblmWx%2FjWbyoRa5hcrgoE3VorRdZRZf9thzo4jAIgSSqBrMnT6sF2S1CY2iRx%2BtCPD778ET9jkCAGT8VRc5cq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJn7gHFmUKTRDlE3OCrcA1FDmA3%2FgCGNwemMHBIrqH0kaREHd9k%2F0ifTAsUtVlhgygkcx2nCmywan87Bsz5%2Fqt7yeYcgVhg6dyp2RCqJNqJiazOumv0jOdXsrJ2i5oTUgi65cElpXA71QO%2FGc2YECsTrLl0cqOx74sVBYIT2J%2FR412o9pFPKEmC%2FsUijMAvVwmDxVPUsKxoaoaDA43ivFjvdbSYcFPlpPiZgQQINAYi2GH3Zse3NXrtwH7z45SAsq5V6Vx7avbAtkt68h0lUcfbGOwy0rq7Xcj%2Fzblh66k4msavF1kOrb0ETVwHn4FqJI6tZkUq8NEfZGVoUthsj9uMgdw6w3VJzgQNLf67vGG6bd5VrEL0sSkhrQcGheMrlAc6O4gchuMQSCWNek5fv3NCyTevbqlPu1iEpQ2l4Cpv3XynRc4OdZhUid0ud2W42P3xf8HyzZDRi2B5AOMi8nyJtXB3Z0gGL1MUsj7PSw9OMAw98%2BbvHjsNDRNyR8dnGgwTOBuaBpsJhe7lMjOO29%2BZWIiDzmnfSidrKQhfWBXW1nmGCA7vUCEO93I%2Fq0v3PxSeyd9GcFXL6zFtHwqYCor06bOKrVqNocfbj3tLoVVLmIC29M7GmYCpsVUVBhO6pR4RYb5LmbIllPhutMMiqzsEGOqUBdqNv6DFRgRIkb1p01BXpCbSfLuI49YPsOF90Pf7R9zH5HXHR8YceI7hQtgUfKlSe7q11bkbVly6ZFLpNPMaK323uWPNg39nO3PCPmYmJ326QwVQP7QkqsV3fi47keX6Phx7apff7plEaaQWaoACOuCEPe54aZJ3bUXLwxmlNhpCgsoahMmIectksZZryi%2FEwAZbgR0g008WebBTVUVrlqC%2FSZBmX&X-Amz-Signature=2200efeccfbb0170dcb8b06981cd743e204ef524c9c5a9769b0eb447f86c0b69&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHRHT4W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCGQiK%2FblmWx%2FjWbyoRa5hcrgoE3VorRdZRZf9thzo4jAIgSSqBrMnT6sF2S1CY2iRx%2BtCPD778ET9jkCAGT8VRc5cq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJn7gHFmUKTRDlE3OCrcA1FDmA3%2FgCGNwemMHBIrqH0kaREHd9k%2F0ifTAsUtVlhgygkcx2nCmywan87Bsz5%2Fqt7yeYcgVhg6dyp2RCqJNqJiazOumv0jOdXsrJ2i5oTUgi65cElpXA71QO%2FGc2YECsTrLl0cqOx74sVBYIT2J%2FR412o9pFPKEmC%2FsUijMAvVwmDxVPUsKxoaoaDA43ivFjvdbSYcFPlpPiZgQQINAYi2GH3Zse3NXrtwH7z45SAsq5V6Vx7avbAtkt68h0lUcfbGOwy0rq7Xcj%2Fzblh66k4msavF1kOrb0ETVwHn4FqJI6tZkUq8NEfZGVoUthsj9uMgdw6w3VJzgQNLf67vGG6bd5VrEL0sSkhrQcGheMrlAc6O4gchuMQSCWNek5fv3NCyTevbqlPu1iEpQ2l4Cpv3XynRc4OdZhUid0ud2W42P3xf8HyzZDRi2B5AOMi8nyJtXB3Z0gGL1MUsj7PSw9OMAw98%2BbvHjsNDRNyR8dnGgwTOBuaBpsJhe7lMjOO29%2BZWIiDzmnfSidrKQhfWBXW1nmGCA7vUCEO93I%2Fq0v3PxSeyd9GcFXL6zFtHwqYCor06bOKrVqNocfbj3tLoVVLmIC29M7GmYCpsVUVBhO6pR4RYb5LmbIllPhutMMiqzsEGOqUBdqNv6DFRgRIkb1p01BXpCbSfLuI49YPsOF90Pf7R9zH5HXHR8YceI7hQtgUfKlSe7q11bkbVly6ZFLpNPMaK323uWPNg39nO3PCPmYmJ326QwVQP7QkqsV3fi47keX6Phx7apff7plEaaQWaoACOuCEPe54aZJ3bUXLwxmlNhpCgsoahMmIectksZZryi%2FEwAZbgR0g008WebBTVUVrlqC%2FSZBmX&X-Amz-Signature=d388da7ea912ca4cd8335e9a6c317c4a6fda14150c59f4c95944c03a0ddbf414&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHRHT4W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCGQiK%2FblmWx%2FjWbyoRa5hcrgoE3VorRdZRZf9thzo4jAIgSSqBrMnT6sF2S1CY2iRx%2BtCPD778ET9jkCAGT8VRc5cq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJn7gHFmUKTRDlE3OCrcA1FDmA3%2FgCGNwemMHBIrqH0kaREHd9k%2F0ifTAsUtVlhgygkcx2nCmywan87Bsz5%2Fqt7yeYcgVhg6dyp2RCqJNqJiazOumv0jOdXsrJ2i5oTUgi65cElpXA71QO%2FGc2YECsTrLl0cqOx74sVBYIT2J%2FR412o9pFPKEmC%2FsUijMAvVwmDxVPUsKxoaoaDA43ivFjvdbSYcFPlpPiZgQQINAYi2GH3Zse3NXrtwH7z45SAsq5V6Vx7avbAtkt68h0lUcfbGOwy0rq7Xcj%2Fzblh66k4msavF1kOrb0ETVwHn4FqJI6tZkUq8NEfZGVoUthsj9uMgdw6w3VJzgQNLf67vGG6bd5VrEL0sSkhrQcGheMrlAc6O4gchuMQSCWNek5fv3NCyTevbqlPu1iEpQ2l4Cpv3XynRc4OdZhUid0ud2W42P3xf8HyzZDRi2B5AOMi8nyJtXB3Z0gGL1MUsj7PSw9OMAw98%2BbvHjsNDRNyR8dnGgwTOBuaBpsJhe7lMjOO29%2BZWIiDzmnfSidrKQhfWBXW1nmGCA7vUCEO93I%2Fq0v3PxSeyd9GcFXL6zFtHwqYCor06bOKrVqNocfbj3tLoVVLmIC29M7GmYCpsVUVBhO6pR4RYb5LmbIllPhutMMiqzsEGOqUBdqNv6DFRgRIkb1p01BXpCbSfLuI49YPsOF90Pf7R9zH5HXHR8YceI7hQtgUfKlSe7q11bkbVly6ZFLpNPMaK323uWPNg39nO3PCPmYmJ326QwVQP7QkqsV3fi47keX6Phx7apff7plEaaQWaoACOuCEPe54aZJ3bUXLwxmlNhpCgsoahMmIectksZZryi%2FEwAZbgR0g008WebBTVUVrlqC%2FSZBmX&X-Amz-Signature=cbe5a03c740f927beba22a99af022decd30a511fa8dc9f6d634246846fdf467e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHRHT4W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCGQiK%2FblmWx%2FjWbyoRa5hcrgoE3VorRdZRZf9thzo4jAIgSSqBrMnT6sF2S1CY2iRx%2BtCPD778ET9jkCAGT8VRc5cq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJn7gHFmUKTRDlE3OCrcA1FDmA3%2FgCGNwemMHBIrqH0kaREHd9k%2F0ifTAsUtVlhgygkcx2nCmywan87Bsz5%2Fqt7yeYcgVhg6dyp2RCqJNqJiazOumv0jOdXsrJ2i5oTUgi65cElpXA71QO%2FGc2YECsTrLl0cqOx74sVBYIT2J%2FR412o9pFPKEmC%2FsUijMAvVwmDxVPUsKxoaoaDA43ivFjvdbSYcFPlpPiZgQQINAYi2GH3Zse3NXrtwH7z45SAsq5V6Vx7avbAtkt68h0lUcfbGOwy0rq7Xcj%2Fzblh66k4msavF1kOrb0ETVwHn4FqJI6tZkUq8NEfZGVoUthsj9uMgdw6w3VJzgQNLf67vGG6bd5VrEL0sSkhrQcGheMrlAc6O4gchuMQSCWNek5fv3NCyTevbqlPu1iEpQ2l4Cpv3XynRc4OdZhUid0ud2W42P3xf8HyzZDRi2B5AOMi8nyJtXB3Z0gGL1MUsj7PSw9OMAw98%2BbvHjsNDRNyR8dnGgwTOBuaBpsJhe7lMjOO29%2BZWIiDzmnfSidrKQhfWBXW1nmGCA7vUCEO93I%2Fq0v3PxSeyd9GcFXL6zFtHwqYCor06bOKrVqNocfbj3tLoVVLmIC29M7GmYCpsVUVBhO6pR4RYb5LmbIllPhutMMiqzsEGOqUBdqNv6DFRgRIkb1p01BXpCbSfLuI49YPsOF90Pf7R9zH5HXHR8YceI7hQtgUfKlSe7q11bkbVly6ZFLpNPMaK323uWPNg39nO3PCPmYmJ326QwVQP7QkqsV3fi47keX6Phx7apff7plEaaQWaoACOuCEPe54aZJ3bUXLwxmlNhpCgsoahMmIectksZZryi%2FEwAZbgR0g008WebBTVUVrlqC%2FSZBmX&X-Amz-Signature=a008a90bfbed87d04f8379fd7bfb688909b2332539985f3a45d9669a62ee493f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHRHT4W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCGQiK%2FblmWx%2FjWbyoRa5hcrgoE3VorRdZRZf9thzo4jAIgSSqBrMnT6sF2S1CY2iRx%2BtCPD778ET9jkCAGT8VRc5cq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJn7gHFmUKTRDlE3OCrcA1FDmA3%2FgCGNwemMHBIrqH0kaREHd9k%2F0ifTAsUtVlhgygkcx2nCmywan87Bsz5%2Fqt7yeYcgVhg6dyp2RCqJNqJiazOumv0jOdXsrJ2i5oTUgi65cElpXA71QO%2FGc2YECsTrLl0cqOx74sVBYIT2J%2FR412o9pFPKEmC%2FsUijMAvVwmDxVPUsKxoaoaDA43ivFjvdbSYcFPlpPiZgQQINAYi2GH3Zse3NXrtwH7z45SAsq5V6Vx7avbAtkt68h0lUcfbGOwy0rq7Xcj%2Fzblh66k4msavF1kOrb0ETVwHn4FqJI6tZkUq8NEfZGVoUthsj9uMgdw6w3VJzgQNLf67vGG6bd5VrEL0sSkhrQcGheMrlAc6O4gchuMQSCWNek5fv3NCyTevbqlPu1iEpQ2l4Cpv3XynRc4OdZhUid0ud2W42P3xf8HyzZDRi2B5AOMi8nyJtXB3Z0gGL1MUsj7PSw9OMAw98%2BbvHjsNDRNyR8dnGgwTOBuaBpsJhe7lMjOO29%2BZWIiDzmnfSidrKQhfWBXW1nmGCA7vUCEO93I%2Fq0v3PxSeyd9GcFXL6zFtHwqYCor06bOKrVqNocfbj3tLoVVLmIC29M7GmYCpsVUVBhO6pR4RYb5LmbIllPhutMMiqzsEGOqUBdqNv6DFRgRIkb1p01BXpCbSfLuI49YPsOF90Pf7R9zH5HXHR8YceI7hQtgUfKlSe7q11bkbVly6ZFLpNPMaK323uWPNg39nO3PCPmYmJ326QwVQP7QkqsV3fi47keX6Phx7apff7plEaaQWaoACOuCEPe54aZJ3bUXLwxmlNhpCgsoahMmIectksZZryi%2FEwAZbgR0g008WebBTVUVrlqC%2FSZBmX&X-Amz-Signature=5d8802efad947a7814a2d997aa209f61b02c7bdab6e1039367f441f613ec9200&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHRHT4W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCGQiK%2FblmWx%2FjWbyoRa5hcrgoE3VorRdZRZf9thzo4jAIgSSqBrMnT6sF2S1CY2iRx%2BtCPD778ET9jkCAGT8VRc5cq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJn7gHFmUKTRDlE3OCrcA1FDmA3%2FgCGNwemMHBIrqH0kaREHd9k%2F0ifTAsUtVlhgygkcx2nCmywan87Bsz5%2Fqt7yeYcgVhg6dyp2RCqJNqJiazOumv0jOdXsrJ2i5oTUgi65cElpXA71QO%2FGc2YECsTrLl0cqOx74sVBYIT2J%2FR412o9pFPKEmC%2FsUijMAvVwmDxVPUsKxoaoaDA43ivFjvdbSYcFPlpPiZgQQINAYi2GH3Zse3NXrtwH7z45SAsq5V6Vx7avbAtkt68h0lUcfbGOwy0rq7Xcj%2Fzblh66k4msavF1kOrb0ETVwHn4FqJI6tZkUq8NEfZGVoUthsj9uMgdw6w3VJzgQNLf67vGG6bd5VrEL0sSkhrQcGheMrlAc6O4gchuMQSCWNek5fv3NCyTevbqlPu1iEpQ2l4Cpv3XynRc4OdZhUid0ud2W42P3xf8HyzZDRi2B5AOMi8nyJtXB3Z0gGL1MUsj7PSw9OMAw98%2BbvHjsNDRNyR8dnGgwTOBuaBpsJhe7lMjOO29%2BZWIiDzmnfSidrKQhfWBXW1nmGCA7vUCEO93I%2Fq0v3PxSeyd9GcFXL6zFtHwqYCor06bOKrVqNocfbj3tLoVVLmIC29M7GmYCpsVUVBhO6pR4RYb5LmbIllPhutMMiqzsEGOqUBdqNv6DFRgRIkb1p01BXpCbSfLuI49YPsOF90Pf7R9zH5HXHR8YceI7hQtgUfKlSe7q11bkbVly6ZFLpNPMaK323uWPNg39nO3PCPmYmJ326QwVQP7QkqsV3fi47keX6Phx7apff7plEaaQWaoACOuCEPe54aZJ3bUXLwxmlNhpCgsoahMmIectksZZryi%2FEwAZbgR0g008WebBTVUVrlqC%2FSZBmX&X-Amz-Signature=fa550f9782c96aa15f01a099f56f77c849527d3911c3513a367af3e71c73baca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHRHT4W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCGQiK%2FblmWx%2FjWbyoRa5hcrgoE3VorRdZRZf9thzo4jAIgSSqBrMnT6sF2S1CY2iRx%2BtCPD778ET9jkCAGT8VRc5cq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJn7gHFmUKTRDlE3OCrcA1FDmA3%2FgCGNwemMHBIrqH0kaREHd9k%2F0ifTAsUtVlhgygkcx2nCmywan87Bsz5%2Fqt7yeYcgVhg6dyp2RCqJNqJiazOumv0jOdXsrJ2i5oTUgi65cElpXA71QO%2FGc2YECsTrLl0cqOx74sVBYIT2J%2FR412o9pFPKEmC%2FsUijMAvVwmDxVPUsKxoaoaDA43ivFjvdbSYcFPlpPiZgQQINAYi2GH3Zse3NXrtwH7z45SAsq5V6Vx7avbAtkt68h0lUcfbGOwy0rq7Xcj%2Fzblh66k4msavF1kOrb0ETVwHn4FqJI6tZkUq8NEfZGVoUthsj9uMgdw6w3VJzgQNLf67vGG6bd5VrEL0sSkhrQcGheMrlAc6O4gchuMQSCWNek5fv3NCyTevbqlPu1iEpQ2l4Cpv3XynRc4OdZhUid0ud2W42P3xf8HyzZDRi2B5AOMi8nyJtXB3Z0gGL1MUsj7PSw9OMAw98%2BbvHjsNDRNyR8dnGgwTOBuaBpsJhe7lMjOO29%2BZWIiDzmnfSidrKQhfWBXW1nmGCA7vUCEO93I%2Fq0v3PxSeyd9GcFXL6zFtHwqYCor06bOKrVqNocfbj3tLoVVLmIC29M7GmYCpsVUVBhO6pR4RYb5LmbIllPhutMMiqzsEGOqUBdqNv6DFRgRIkb1p01BXpCbSfLuI49YPsOF90Pf7R9zH5HXHR8YceI7hQtgUfKlSe7q11bkbVly6ZFLpNPMaK323uWPNg39nO3PCPmYmJ326QwVQP7QkqsV3fi47keX6Phx7apff7plEaaQWaoACOuCEPe54aZJ3bUXLwxmlNhpCgsoahMmIectksZZryi%2FEwAZbgR0g008WebBTVUVrlqC%2FSZBmX&X-Amz-Signature=8dfa6a3319c29a04447004311e9553802b4a04bd2c6ae4cdd284cb52ce62926b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHRHT4W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCGQiK%2FblmWx%2FjWbyoRa5hcrgoE3VorRdZRZf9thzo4jAIgSSqBrMnT6sF2S1CY2iRx%2BtCPD778ET9jkCAGT8VRc5cq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJn7gHFmUKTRDlE3OCrcA1FDmA3%2FgCGNwemMHBIrqH0kaREHd9k%2F0ifTAsUtVlhgygkcx2nCmywan87Bsz5%2Fqt7yeYcgVhg6dyp2RCqJNqJiazOumv0jOdXsrJ2i5oTUgi65cElpXA71QO%2FGc2YECsTrLl0cqOx74sVBYIT2J%2FR412o9pFPKEmC%2FsUijMAvVwmDxVPUsKxoaoaDA43ivFjvdbSYcFPlpPiZgQQINAYi2GH3Zse3NXrtwH7z45SAsq5V6Vx7avbAtkt68h0lUcfbGOwy0rq7Xcj%2Fzblh66k4msavF1kOrb0ETVwHn4FqJI6tZkUq8NEfZGVoUthsj9uMgdw6w3VJzgQNLf67vGG6bd5VrEL0sSkhrQcGheMrlAc6O4gchuMQSCWNek5fv3NCyTevbqlPu1iEpQ2l4Cpv3XynRc4OdZhUid0ud2W42P3xf8HyzZDRi2B5AOMi8nyJtXB3Z0gGL1MUsj7PSw9OMAw98%2BbvHjsNDRNyR8dnGgwTOBuaBpsJhe7lMjOO29%2BZWIiDzmnfSidrKQhfWBXW1nmGCA7vUCEO93I%2Fq0v3PxSeyd9GcFXL6zFtHwqYCor06bOKrVqNocfbj3tLoVVLmIC29M7GmYCpsVUVBhO6pR4RYb5LmbIllPhutMMiqzsEGOqUBdqNv6DFRgRIkb1p01BXpCbSfLuI49YPsOF90Pf7R9zH5HXHR8YceI7hQtgUfKlSe7q11bkbVly6ZFLpNPMaK323uWPNg39nO3PCPmYmJ326QwVQP7QkqsV3fi47keX6Phx7apff7plEaaQWaoACOuCEPe54aZJ3bUXLwxmlNhpCgsoahMmIectksZZryi%2FEwAZbgR0g008WebBTVUVrlqC%2FSZBmX&X-Amz-Signature=6474f5d16aa70eabbe34ba59239190a772ef4c7e77f6c64f5acc682b8f46ebe7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
