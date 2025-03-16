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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEIUONN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg3zfnQVfd4hMEGlGXU1zsgzhjhDAW481AEwZipwW6bgIhANF%2BLvMbcoXVCt0HtNsrCSKxRKnrimMe61d8XzxslZ5LKv8DCDAQABoMNjM3NDIzMTgzODA1Igzl7HC3hvQnh9qlj04q3ANk%2F%2BLzl1Ulsb96Fpq7j7j2JryJaf9KGa1x6Rt0BlcMazNOzjXDOKlHgWxTCpGfA2KOxCBe0f3nzsWR6PrpsDN%2BBRXZejFteStpRmB1bhhSg5sfAQzW8cauO%2Blp5WWkjJQqgmOou%2Fhk33fsyyEkYW95g%2B2qY%2F%2Fgm7H463Ga2SE7qgD0C%2BJxgqWmycKcwkk%2B7vfYQo4f0B5OahC3CaVHNJlKsne4bn299uX8Z2H80k2PpRor89LiozYGA8Udf9Eaqc8pq%2BSBe1y7u56PokgN6dbyOwqHCvDBJgc0avF%2FNbfpSzpBvflK48xBD0IgrBYuF%2F14ywjmBUQmyLn8C%2F8VUWR8Gufj28Zt0gjs5v9qb%2F2VvNjr9kABBzwo%2BkCps0nLRcybBkcEUj5dRSMIRlgQFtrMcIVXVlbtwdkOnHDqqPZBcXI%2BsiWd91HNMCuzme3EkiKmnCiJ5nl927G4e%2BLNjzh0u83V1w2oqkigCmGsP1Fxi3%2BFMZ8P6w9EUj%2FO7TI2c1yAnBFFO06lBbLFvVPI4OeVZ299Ysh5I7ZCKK8y1ZM6kq50VS3x9CLgKh7AKy193x3gWCU0jxqVZjqiAq%2BwTFxi0JfXiuRUv%2BCEtwhWA5TxCHaqSQ7XEaGvzyDchDC63tu%2BBjqkATVm%2F2o2k0gIFPLMTUDBbeD1FqihBN%2FqTu6xPvi56QfiWDak9Vix%2FNUuHZW5n0HV6Cx7ziS2rCCZz6FWEV%2BCXnO7%2Fgmp0mK83UszkU59ZFpcniNVkI4xY6zXLvdtP05SiypkN9fD10bdxitRrLjhjuenfjEt7MffMCNZvUnL7It2%2B1XppPPFtI68zoPBXWPA3bc0tFLEx%2BuDlPyIjmPKECSduqiK&X-Amz-Signature=007dd38855906560df8c083510bc869ea3fbe4c9c75ae8b710370ddc261660fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEIUONN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg3zfnQVfd4hMEGlGXU1zsgzhjhDAW481AEwZipwW6bgIhANF%2BLvMbcoXVCt0HtNsrCSKxRKnrimMe61d8XzxslZ5LKv8DCDAQABoMNjM3NDIzMTgzODA1Igzl7HC3hvQnh9qlj04q3ANk%2F%2BLzl1Ulsb96Fpq7j7j2JryJaf9KGa1x6Rt0BlcMazNOzjXDOKlHgWxTCpGfA2KOxCBe0f3nzsWR6PrpsDN%2BBRXZejFteStpRmB1bhhSg5sfAQzW8cauO%2Blp5WWkjJQqgmOou%2Fhk33fsyyEkYW95g%2B2qY%2F%2Fgm7H463Ga2SE7qgD0C%2BJxgqWmycKcwkk%2B7vfYQo4f0B5OahC3CaVHNJlKsne4bn299uX8Z2H80k2PpRor89LiozYGA8Udf9Eaqc8pq%2BSBe1y7u56PokgN6dbyOwqHCvDBJgc0avF%2FNbfpSzpBvflK48xBD0IgrBYuF%2F14ywjmBUQmyLn8C%2F8VUWR8Gufj28Zt0gjs5v9qb%2F2VvNjr9kABBzwo%2BkCps0nLRcybBkcEUj5dRSMIRlgQFtrMcIVXVlbtwdkOnHDqqPZBcXI%2BsiWd91HNMCuzme3EkiKmnCiJ5nl927G4e%2BLNjzh0u83V1w2oqkigCmGsP1Fxi3%2BFMZ8P6w9EUj%2FO7TI2c1yAnBFFO06lBbLFvVPI4OeVZ299Ysh5I7ZCKK8y1ZM6kq50VS3x9CLgKh7AKy193x3gWCU0jxqVZjqiAq%2BwTFxi0JfXiuRUv%2BCEtwhWA5TxCHaqSQ7XEaGvzyDchDC63tu%2BBjqkATVm%2F2o2k0gIFPLMTUDBbeD1FqihBN%2FqTu6xPvi56QfiWDak9Vix%2FNUuHZW5n0HV6Cx7ziS2rCCZz6FWEV%2BCXnO7%2Fgmp0mK83UszkU59ZFpcniNVkI4xY6zXLvdtP05SiypkN9fD10bdxitRrLjhjuenfjEt7MffMCNZvUnL7It2%2B1XppPPFtI68zoPBXWPA3bc0tFLEx%2BuDlPyIjmPKECSduqiK&X-Amz-Signature=06fde6dc0e87420473555c2b5bb90152939ee0cfd20493c102b0a96a15bb0e59&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEIUONN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg3zfnQVfd4hMEGlGXU1zsgzhjhDAW481AEwZipwW6bgIhANF%2BLvMbcoXVCt0HtNsrCSKxRKnrimMe61d8XzxslZ5LKv8DCDAQABoMNjM3NDIzMTgzODA1Igzl7HC3hvQnh9qlj04q3ANk%2F%2BLzl1Ulsb96Fpq7j7j2JryJaf9KGa1x6Rt0BlcMazNOzjXDOKlHgWxTCpGfA2KOxCBe0f3nzsWR6PrpsDN%2BBRXZejFteStpRmB1bhhSg5sfAQzW8cauO%2Blp5WWkjJQqgmOou%2Fhk33fsyyEkYW95g%2B2qY%2F%2Fgm7H463Ga2SE7qgD0C%2BJxgqWmycKcwkk%2B7vfYQo4f0B5OahC3CaVHNJlKsne4bn299uX8Z2H80k2PpRor89LiozYGA8Udf9Eaqc8pq%2BSBe1y7u56PokgN6dbyOwqHCvDBJgc0avF%2FNbfpSzpBvflK48xBD0IgrBYuF%2F14ywjmBUQmyLn8C%2F8VUWR8Gufj28Zt0gjs5v9qb%2F2VvNjr9kABBzwo%2BkCps0nLRcybBkcEUj5dRSMIRlgQFtrMcIVXVlbtwdkOnHDqqPZBcXI%2BsiWd91HNMCuzme3EkiKmnCiJ5nl927G4e%2BLNjzh0u83V1w2oqkigCmGsP1Fxi3%2BFMZ8P6w9EUj%2FO7TI2c1yAnBFFO06lBbLFvVPI4OeVZ299Ysh5I7ZCKK8y1ZM6kq50VS3x9CLgKh7AKy193x3gWCU0jxqVZjqiAq%2BwTFxi0JfXiuRUv%2BCEtwhWA5TxCHaqSQ7XEaGvzyDchDC63tu%2BBjqkATVm%2F2o2k0gIFPLMTUDBbeD1FqihBN%2FqTu6xPvi56QfiWDak9Vix%2FNUuHZW5n0HV6Cx7ziS2rCCZz6FWEV%2BCXnO7%2Fgmp0mK83UszkU59ZFpcniNVkI4xY6zXLvdtP05SiypkN9fD10bdxitRrLjhjuenfjEt7MffMCNZvUnL7It2%2B1XppPPFtI68zoPBXWPA3bc0tFLEx%2BuDlPyIjmPKECSduqiK&X-Amz-Signature=7c0d9d775774d81513846ba2b98427878dad56c2c29917f8e81ad51802a6158f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEIUONN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg3zfnQVfd4hMEGlGXU1zsgzhjhDAW481AEwZipwW6bgIhANF%2BLvMbcoXVCt0HtNsrCSKxRKnrimMe61d8XzxslZ5LKv8DCDAQABoMNjM3NDIzMTgzODA1Igzl7HC3hvQnh9qlj04q3ANk%2F%2BLzl1Ulsb96Fpq7j7j2JryJaf9KGa1x6Rt0BlcMazNOzjXDOKlHgWxTCpGfA2KOxCBe0f3nzsWR6PrpsDN%2BBRXZejFteStpRmB1bhhSg5sfAQzW8cauO%2Blp5WWkjJQqgmOou%2Fhk33fsyyEkYW95g%2B2qY%2F%2Fgm7H463Ga2SE7qgD0C%2BJxgqWmycKcwkk%2B7vfYQo4f0B5OahC3CaVHNJlKsne4bn299uX8Z2H80k2PpRor89LiozYGA8Udf9Eaqc8pq%2BSBe1y7u56PokgN6dbyOwqHCvDBJgc0avF%2FNbfpSzpBvflK48xBD0IgrBYuF%2F14ywjmBUQmyLn8C%2F8VUWR8Gufj28Zt0gjs5v9qb%2F2VvNjr9kABBzwo%2BkCps0nLRcybBkcEUj5dRSMIRlgQFtrMcIVXVlbtwdkOnHDqqPZBcXI%2BsiWd91HNMCuzme3EkiKmnCiJ5nl927G4e%2BLNjzh0u83V1w2oqkigCmGsP1Fxi3%2BFMZ8P6w9EUj%2FO7TI2c1yAnBFFO06lBbLFvVPI4OeVZ299Ysh5I7ZCKK8y1ZM6kq50VS3x9CLgKh7AKy193x3gWCU0jxqVZjqiAq%2BwTFxi0JfXiuRUv%2BCEtwhWA5TxCHaqSQ7XEaGvzyDchDC63tu%2BBjqkATVm%2F2o2k0gIFPLMTUDBbeD1FqihBN%2FqTu6xPvi56QfiWDak9Vix%2FNUuHZW5n0HV6Cx7ziS2rCCZz6FWEV%2BCXnO7%2Fgmp0mK83UszkU59ZFpcniNVkI4xY6zXLvdtP05SiypkN9fD10bdxitRrLjhjuenfjEt7MffMCNZvUnL7It2%2B1XppPPFtI68zoPBXWPA3bc0tFLEx%2BuDlPyIjmPKECSduqiK&X-Amz-Signature=321ea3796a4e6d40c398ee7647e87e6d2b8004aeb46e2228593e2a7636e8a28d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEIUONN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg3zfnQVfd4hMEGlGXU1zsgzhjhDAW481AEwZipwW6bgIhANF%2BLvMbcoXVCt0HtNsrCSKxRKnrimMe61d8XzxslZ5LKv8DCDAQABoMNjM3NDIzMTgzODA1Igzl7HC3hvQnh9qlj04q3ANk%2F%2BLzl1Ulsb96Fpq7j7j2JryJaf9KGa1x6Rt0BlcMazNOzjXDOKlHgWxTCpGfA2KOxCBe0f3nzsWR6PrpsDN%2BBRXZejFteStpRmB1bhhSg5sfAQzW8cauO%2Blp5WWkjJQqgmOou%2Fhk33fsyyEkYW95g%2B2qY%2F%2Fgm7H463Ga2SE7qgD0C%2BJxgqWmycKcwkk%2B7vfYQo4f0B5OahC3CaVHNJlKsne4bn299uX8Z2H80k2PpRor89LiozYGA8Udf9Eaqc8pq%2BSBe1y7u56PokgN6dbyOwqHCvDBJgc0avF%2FNbfpSzpBvflK48xBD0IgrBYuF%2F14ywjmBUQmyLn8C%2F8VUWR8Gufj28Zt0gjs5v9qb%2F2VvNjr9kABBzwo%2BkCps0nLRcybBkcEUj5dRSMIRlgQFtrMcIVXVlbtwdkOnHDqqPZBcXI%2BsiWd91HNMCuzme3EkiKmnCiJ5nl927G4e%2BLNjzh0u83V1w2oqkigCmGsP1Fxi3%2BFMZ8P6w9EUj%2FO7TI2c1yAnBFFO06lBbLFvVPI4OeVZ299Ysh5I7ZCKK8y1ZM6kq50VS3x9CLgKh7AKy193x3gWCU0jxqVZjqiAq%2BwTFxi0JfXiuRUv%2BCEtwhWA5TxCHaqSQ7XEaGvzyDchDC63tu%2BBjqkATVm%2F2o2k0gIFPLMTUDBbeD1FqihBN%2FqTu6xPvi56QfiWDak9Vix%2FNUuHZW5n0HV6Cx7ziS2rCCZz6FWEV%2BCXnO7%2Fgmp0mK83UszkU59ZFpcniNVkI4xY6zXLvdtP05SiypkN9fD10bdxitRrLjhjuenfjEt7MffMCNZvUnL7It2%2B1XppPPFtI68zoPBXWPA3bc0tFLEx%2BuDlPyIjmPKECSduqiK&X-Amz-Signature=9146bad0106714a95fdc48b1a7d9dee98d422401ac1f39b5f7f8a2172e1c6f14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEIUONN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg3zfnQVfd4hMEGlGXU1zsgzhjhDAW481AEwZipwW6bgIhANF%2BLvMbcoXVCt0HtNsrCSKxRKnrimMe61d8XzxslZ5LKv8DCDAQABoMNjM3NDIzMTgzODA1Igzl7HC3hvQnh9qlj04q3ANk%2F%2BLzl1Ulsb96Fpq7j7j2JryJaf9KGa1x6Rt0BlcMazNOzjXDOKlHgWxTCpGfA2KOxCBe0f3nzsWR6PrpsDN%2BBRXZejFteStpRmB1bhhSg5sfAQzW8cauO%2Blp5WWkjJQqgmOou%2Fhk33fsyyEkYW95g%2B2qY%2F%2Fgm7H463Ga2SE7qgD0C%2BJxgqWmycKcwkk%2B7vfYQo4f0B5OahC3CaVHNJlKsne4bn299uX8Z2H80k2PpRor89LiozYGA8Udf9Eaqc8pq%2BSBe1y7u56PokgN6dbyOwqHCvDBJgc0avF%2FNbfpSzpBvflK48xBD0IgrBYuF%2F14ywjmBUQmyLn8C%2F8VUWR8Gufj28Zt0gjs5v9qb%2F2VvNjr9kABBzwo%2BkCps0nLRcybBkcEUj5dRSMIRlgQFtrMcIVXVlbtwdkOnHDqqPZBcXI%2BsiWd91HNMCuzme3EkiKmnCiJ5nl927G4e%2BLNjzh0u83V1w2oqkigCmGsP1Fxi3%2BFMZ8P6w9EUj%2FO7TI2c1yAnBFFO06lBbLFvVPI4OeVZ299Ysh5I7ZCKK8y1ZM6kq50VS3x9CLgKh7AKy193x3gWCU0jxqVZjqiAq%2BwTFxi0JfXiuRUv%2BCEtwhWA5TxCHaqSQ7XEaGvzyDchDC63tu%2BBjqkATVm%2F2o2k0gIFPLMTUDBbeD1FqihBN%2FqTu6xPvi56QfiWDak9Vix%2FNUuHZW5n0HV6Cx7ziS2rCCZz6FWEV%2BCXnO7%2Fgmp0mK83UszkU59ZFpcniNVkI4xY6zXLvdtP05SiypkN9fD10bdxitRrLjhjuenfjEt7MffMCNZvUnL7It2%2B1XppPPFtI68zoPBXWPA3bc0tFLEx%2BuDlPyIjmPKECSduqiK&X-Amz-Signature=4e0eb9b7a2106e0024025b94ed80bdad68610bba23e73a05519eadea2ad4a5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEIUONN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg3zfnQVfd4hMEGlGXU1zsgzhjhDAW481AEwZipwW6bgIhANF%2BLvMbcoXVCt0HtNsrCSKxRKnrimMe61d8XzxslZ5LKv8DCDAQABoMNjM3NDIzMTgzODA1Igzl7HC3hvQnh9qlj04q3ANk%2F%2BLzl1Ulsb96Fpq7j7j2JryJaf9KGa1x6Rt0BlcMazNOzjXDOKlHgWxTCpGfA2KOxCBe0f3nzsWR6PrpsDN%2BBRXZejFteStpRmB1bhhSg5sfAQzW8cauO%2Blp5WWkjJQqgmOou%2Fhk33fsyyEkYW95g%2B2qY%2F%2Fgm7H463Ga2SE7qgD0C%2BJxgqWmycKcwkk%2B7vfYQo4f0B5OahC3CaVHNJlKsne4bn299uX8Z2H80k2PpRor89LiozYGA8Udf9Eaqc8pq%2BSBe1y7u56PokgN6dbyOwqHCvDBJgc0avF%2FNbfpSzpBvflK48xBD0IgrBYuF%2F14ywjmBUQmyLn8C%2F8VUWR8Gufj28Zt0gjs5v9qb%2F2VvNjr9kABBzwo%2BkCps0nLRcybBkcEUj5dRSMIRlgQFtrMcIVXVlbtwdkOnHDqqPZBcXI%2BsiWd91HNMCuzme3EkiKmnCiJ5nl927G4e%2BLNjzh0u83V1w2oqkigCmGsP1Fxi3%2BFMZ8P6w9EUj%2FO7TI2c1yAnBFFO06lBbLFvVPI4OeVZ299Ysh5I7ZCKK8y1ZM6kq50VS3x9CLgKh7AKy193x3gWCU0jxqVZjqiAq%2BwTFxi0JfXiuRUv%2BCEtwhWA5TxCHaqSQ7XEaGvzyDchDC63tu%2BBjqkATVm%2F2o2k0gIFPLMTUDBbeD1FqihBN%2FqTu6xPvi56QfiWDak9Vix%2FNUuHZW5n0HV6Cx7ziS2rCCZz6FWEV%2BCXnO7%2Fgmp0mK83UszkU59ZFpcniNVkI4xY6zXLvdtP05SiypkN9fD10bdxitRrLjhjuenfjEt7MffMCNZvUnL7It2%2B1XppPPFtI68zoPBXWPA3bc0tFLEx%2BuDlPyIjmPKECSduqiK&X-Amz-Signature=e5933ea11c09e43f0ad9371d796285840bf093a29fc3bb717056d9f7dde7bb3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEIUONN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg3zfnQVfd4hMEGlGXU1zsgzhjhDAW481AEwZipwW6bgIhANF%2BLvMbcoXVCt0HtNsrCSKxRKnrimMe61d8XzxslZ5LKv8DCDAQABoMNjM3NDIzMTgzODA1Igzl7HC3hvQnh9qlj04q3ANk%2F%2BLzl1Ulsb96Fpq7j7j2JryJaf9KGa1x6Rt0BlcMazNOzjXDOKlHgWxTCpGfA2KOxCBe0f3nzsWR6PrpsDN%2BBRXZejFteStpRmB1bhhSg5sfAQzW8cauO%2Blp5WWkjJQqgmOou%2Fhk33fsyyEkYW95g%2B2qY%2F%2Fgm7H463Ga2SE7qgD0C%2BJxgqWmycKcwkk%2B7vfYQo4f0B5OahC3CaVHNJlKsne4bn299uX8Z2H80k2PpRor89LiozYGA8Udf9Eaqc8pq%2BSBe1y7u56PokgN6dbyOwqHCvDBJgc0avF%2FNbfpSzpBvflK48xBD0IgrBYuF%2F14ywjmBUQmyLn8C%2F8VUWR8Gufj28Zt0gjs5v9qb%2F2VvNjr9kABBzwo%2BkCps0nLRcybBkcEUj5dRSMIRlgQFtrMcIVXVlbtwdkOnHDqqPZBcXI%2BsiWd91HNMCuzme3EkiKmnCiJ5nl927G4e%2BLNjzh0u83V1w2oqkigCmGsP1Fxi3%2BFMZ8P6w9EUj%2FO7TI2c1yAnBFFO06lBbLFvVPI4OeVZ299Ysh5I7ZCKK8y1ZM6kq50VS3x9CLgKh7AKy193x3gWCU0jxqVZjqiAq%2BwTFxi0JfXiuRUv%2BCEtwhWA5TxCHaqSQ7XEaGvzyDchDC63tu%2BBjqkATVm%2F2o2k0gIFPLMTUDBbeD1FqihBN%2FqTu6xPvi56QfiWDak9Vix%2FNUuHZW5n0HV6Cx7ziS2rCCZz6FWEV%2BCXnO7%2Fgmp0mK83UszkU59ZFpcniNVkI4xY6zXLvdtP05SiypkN9fD10bdxitRrLjhjuenfjEt7MffMCNZvUnL7It2%2B1XppPPFtI68zoPBXWPA3bc0tFLEx%2BuDlPyIjmPKECSduqiK&X-Amz-Signature=dc6d00947edb26d0a569b6afc26ca27773ea432e9c9964146bd603b4328ba946&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
