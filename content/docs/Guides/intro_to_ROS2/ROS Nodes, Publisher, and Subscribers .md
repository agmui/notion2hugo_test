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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z76BW4KL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFYLRQyjSdRRXhIcZL%2BF36wvIzEQP8mPpTDHfLZ85ndQAiEAnZ5H3W%2BBTqoPiaKoKV7CMeE7OdlQ2WllFEDoNMA7ox8qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVdeggg8WPqrtnqbircAx9cmRuKfqG8zNH436R5ye%2BiziwnOM21evnar1aKJ6dCYMENYsHbkB9SZja90PcTNpp4NPn%2BzdRbdNkc%2FOL%2FbEygUfCLAaN0gawBNdRviqcV%2B6nQ2Qw9b%2B2UZS97%2FqaLo5z6S45%2Bq1daOfrPiaCNFBwasoNdP5q0AlsExn3tW7FfzRctgOCLZEWsPASz9fKk13AXOrMaMq5xND%2BG9bSZKtlQKNN1WbEd1Dy8bmsvmF4%2By%2B2Cz2sh0oqbcYY5zw4cn5IYNCu4Q%2BK3hFJk%2BQn%2FgvbMFCpgILNw26w57fjpAPBjnz3Xr9%2BCVZFKSgwfg4nVmrZQFdOYyioswCrdfSKGg8WEDI0NGavuE1bhoMC8%2BFci61KMmCAr%2BnSw%2F9umfvtrp45hsQQYgnx0EsnLNcnk%2FZa4C6cdqH6M0Z60AGdqQnFgFmdkoPQEdccGgMbbmhgQ3GD%2BJ2T87unF2m7U4%2F6qTm%2BDKcC8FvvXsd0KIHefobvhaP8vPWJthXXg0g75TY%2BdTpfs8rFoOyOhdPZcxGShfvAsCBMOy9zcp3eUBUs3ZK%2BDH8JRTjXy%2BJ3Ikb4F6erwNCsmHLyZF5wgjQ6CdgLqqUskCg8PkkPTpcsVOZn0vinhnWvZTw8AePd%2FlkcvMK33icEGOqUBt1CgctHKNVIB0uNpQfk6brMzSZn6fvlbETuUy5Lnfw%2BwMpEJalxGFlM17zyn0q1Vr%2FewvaqmF4gRgXsXx4U3Aj6LTP5ahcl17SiVWW1SU42iTVbAqqzh6Whmh7481ItgD2gboGatchEpfuS%2FE0CynlrbCMa26cMbQhtpI%2FRd1RVIvRPPMYTJwIC84dh4cVV%2BTgjTLYX1Z2iBEx9waC95Pz8mTkFr&X-Amz-Signature=10fb807f9a7e17e124379c41ac7c78eca9277f6dbe9e6659e16e69ef987d5e51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z76BW4KL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFYLRQyjSdRRXhIcZL%2BF36wvIzEQP8mPpTDHfLZ85ndQAiEAnZ5H3W%2BBTqoPiaKoKV7CMeE7OdlQ2WllFEDoNMA7ox8qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVdeggg8WPqrtnqbircAx9cmRuKfqG8zNH436R5ye%2BiziwnOM21evnar1aKJ6dCYMENYsHbkB9SZja90PcTNpp4NPn%2BzdRbdNkc%2FOL%2FbEygUfCLAaN0gawBNdRviqcV%2B6nQ2Qw9b%2B2UZS97%2FqaLo5z6S45%2Bq1daOfrPiaCNFBwasoNdP5q0AlsExn3tW7FfzRctgOCLZEWsPASz9fKk13AXOrMaMq5xND%2BG9bSZKtlQKNN1WbEd1Dy8bmsvmF4%2By%2B2Cz2sh0oqbcYY5zw4cn5IYNCu4Q%2BK3hFJk%2BQn%2FgvbMFCpgILNw26w57fjpAPBjnz3Xr9%2BCVZFKSgwfg4nVmrZQFdOYyioswCrdfSKGg8WEDI0NGavuE1bhoMC8%2BFci61KMmCAr%2BnSw%2F9umfvtrp45hsQQYgnx0EsnLNcnk%2FZa4C6cdqH6M0Z60AGdqQnFgFmdkoPQEdccGgMbbmhgQ3GD%2BJ2T87unF2m7U4%2F6qTm%2BDKcC8FvvXsd0KIHefobvhaP8vPWJthXXg0g75TY%2BdTpfs8rFoOyOhdPZcxGShfvAsCBMOy9zcp3eUBUs3ZK%2BDH8JRTjXy%2BJ3Ikb4F6erwNCsmHLyZF5wgjQ6CdgLqqUskCg8PkkPTpcsVOZn0vinhnWvZTw8AePd%2FlkcvMK33icEGOqUBt1CgctHKNVIB0uNpQfk6brMzSZn6fvlbETuUy5Lnfw%2BwMpEJalxGFlM17zyn0q1Vr%2FewvaqmF4gRgXsXx4U3Aj6LTP5ahcl17SiVWW1SU42iTVbAqqzh6Whmh7481ItgD2gboGatchEpfuS%2FE0CynlrbCMa26cMbQhtpI%2FRd1RVIvRPPMYTJwIC84dh4cVV%2BTgjTLYX1Z2iBEx9waC95Pz8mTkFr&X-Amz-Signature=a5060e57684c819fb57b9934943149ad59d5c040de554a6f697b237490b75cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z76BW4KL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFYLRQyjSdRRXhIcZL%2BF36wvIzEQP8mPpTDHfLZ85ndQAiEAnZ5H3W%2BBTqoPiaKoKV7CMeE7OdlQ2WllFEDoNMA7ox8qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVdeggg8WPqrtnqbircAx9cmRuKfqG8zNH436R5ye%2BiziwnOM21evnar1aKJ6dCYMENYsHbkB9SZja90PcTNpp4NPn%2BzdRbdNkc%2FOL%2FbEygUfCLAaN0gawBNdRviqcV%2B6nQ2Qw9b%2B2UZS97%2FqaLo5z6S45%2Bq1daOfrPiaCNFBwasoNdP5q0AlsExn3tW7FfzRctgOCLZEWsPASz9fKk13AXOrMaMq5xND%2BG9bSZKtlQKNN1WbEd1Dy8bmsvmF4%2By%2B2Cz2sh0oqbcYY5zw4cn5IYNCu4Q%2BK3hFJk%2BQn%2FgvbMFCpgILNw26w57fjpAPBjnz3Xr9%2BCVZFKSgwfg4nVmrZQFdOYyioswCrdfSKGg8WEDI0NGavuE1bhoMC8%2BFci61KMmCAr%2BnSw%2F9umfvtrp45hsQQYgnx0EsnLNcnk%2FZa4C6cdqH6M0Z60AGdqQnFgFmdkoPQEdccGgMbbmhgQ3GD%2BJ2T87unF2m7U4%2F6qTm%2BDKcC8FvvXsd0KIHefobvhaP8vPWJthXXg0g75TY%2BdTpfs8rFoOyOhdPZcxGShfvAsCBMOy9zcp3eUBUs3ZK%2BDH8JRTjXy%2BJ3Ikb4F6erwNCsmHLyZF5wgjQ6CdgLqqUskCg8PkkPTpcsVOZn0vinhnWvZTw8AePd%2FlkcvMK33icEGOqUBt1CgctHKNVIB0uNpQfk6brMzSZn6fvlbETuUy5Lnfw%2BwMpEJalxGFlM17zyn0q1Vr%2FewvaqmF4gRgXsXx4U3Aj6LTP5ahcl17SiVWW1SU42iTVbAqqzh6Whmh7481ItgD2gboGatchEpfuS%2FE0CynlrbCMa26cMbQhtpI%2FRd1RVIvRPPMYTJwIC84dh4cVV%2BTgjTLYX1Z2iBEx9waC95Pz8mTkFr&X-Amz-Signature=daf43fe6f04d5ea8112ece19ac4932cd3bcb0e03dea3d2067332b43ff46caf84&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z76BW4KL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFYLRQyjSdRRXhIcZL%2BF36wvIzEQP8mPpTDHfLZ85ndQAiEAnZ5H3W%2BBTqoPiaKoKV7CMeE7OdlQ2WllFEDoNMA7ox8qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVdeggg8WPqrtnqbircAx9cmRuKfqG8zNH436R5ye%2BiziwnOM21evnar1aKJ6dCYMENYsHbkB9SZja90PcTNpp4NPn%2BzdRbdNkc%2FOL%2FbEygUfCLAaN0gawBNdRviqcV%2B6nQ2Qw9b%2B2UZS97%2FqaLo5z6S45%2Bq1daOfrPiaCNFBwasoNdP5q0AlsExn3tW7FfzRctgOCLZEWsPASz9fKk13AXOrMaMq5xND%2BG9bSZKtlQKNN1WbEd1Dy8bmsvmF4%2By%2B2Cz2sh0oqbcYY5zw4cn5IYNCu4Q%2BK3hFJk%2BQn%2FgvbMFCpgILNw26w57fjpAPBjnz3Xr9%2BCVZFKSgwfg4nVmrZQFdOYyioswCrdfSKGg8WEDI0NGavuE1bhoMC8%2BFci61KMmCAr%2BnSw%2F9umfvtrp45hsQQYgnx0EsnLNcnk%2FZa4C6cdqH6M0Z60AGdqQnFgFmdkoPQEdccGgMbbmhgQ3GD%2BJ2T87unF2m7U4%2F6qTm%2BDKcC8FvvXsd0KIHefobvhaP8vPWJthXXg0g75TY%2BdTpfs8rFoOyOhdPZcxGShfvAsCBMOy9zcp3eUBUs3ZK%2BDH8JRTjXy%2BJ3Ikb4F6erwNCsmHLyZF5wgjQ6CdgLqqUskCg8PkkPTpcsVOZn0vinhnWvZTw8AePd%2FlkcvMK33icEGOqUBt1CgctHKNVIB0uNpQfk6brMzSZn6fvlbETuUy5Lnfw%2BwMpEJalxGFlM17zyn0q1Vr%2FewvaqmF4gRgXsXx4U3Aj6LTP5ahcl17SiVWW1SU42iTVbAqqzh6Whmh7481ItgD2gboGatchEpfuS%2FE0CynlrbCMa26cMbQhtpI%2FRd1RVIvRPPMYTJwIC84dh4cVV%2BTgjTLYX1Z2iBEx9waC95Pz8mTkFr&X-Amz-Signature=7fb88e4edb5e14525b244c3d443982900d47773dd47319d31302f42f5bbc334b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z76BW4KL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFYLRQyjSdRRXhIcZL%2BF36wvIzEQP8mPpTDHfLZ85ndQAiEAnZ5H3W%2BBTqoPiaKoKV7CMeE7OdlQ2WllFEDoNMA7ox8qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVdeggg8WPqrtnqbircAx9cmRuKfqG8zNH436R5ye%2BiziwnOM21evnar1aKJ6dCYMENYsHbkB9SZja90PcTNpp4NPn%2BzdRbdNkc%2FOL%2FbEygUfCLAaN0gawBNdRviqcV%2B6nQ2Qw9b%2B2UZS97%2FqaLo5z6S45%2Bq1daOfrPiaCNFBwasoNdP5q0AlsExn3tW7FfzRctgOCLZEWsPASz9fKk13AXOrMaMq5xND%2BG9bSZKtlQKNN1WbEd1Dy8bmsvmF4%2By%2B2Cz2sh0oqbcYY5zw4cn5IYNCu4Q%2BK3hFJk%2BQn%2FgvbMFCpgILNw26w57fjpAPBjnz3Xr9%2BCVZFKSgwfg4nVmrZQFdOYyioswCrdfSKGg8WEDI0NGavuE1bhoMC8%2BFci61KMmCAr%2BnSw%2F9umfvtrp45hsQQYgnx0EsnLNcnk%2FZa4C6cdqH6M0Z60AGdqQnFgFmdkoPQEdccGgMbbmhgQ3GD%2BJ2T87unF2m7U4%2F6qTm%2BDKcC8FvvXsd0KIHefobvhaP8vPWJthXXg0g75TY%2BdTpfs8rFoOyOhdPZcxGShfvAsCBMOy9zcp3eUBUs3ZK%2BDH8JRTjXy%2BJ3Ikb4F6erwNCsmHLyZF5wgjQ6CdgLqqUskCg8PkkPTpcsVOZn0vinhnWvZTw8AePd%2FlkcvMK33icEGOqUBt1CgctHKNVIB0uNpQfk6brMzSZn6fvlbETuUy5Lnfw%2BwMpEJalxGFlM17zyn0q1Vr%2FewvaqmF4gRgXsXx4U3Aj6LTP5ahcl17SiVWW1SU42iTVbAqqzh6Whmh7481ItgD2gboGatchEpfuS%2FE0CynlrbCMa26cMbQhtpI%2FRd1RVIvRPPMYTJwIC84dh4cVV%2BTgjTLYX1Z2iBEx9waC95Pz8mTkFr&X-Amz-Signature=099792c66a3eae50cf5e6f8b49f3079077216c6b081f61e89776a359c4f16626&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z76BW4KL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFYLRQyjSdRRXhIcZL%2BF36wvIzEQP8mPpTDHfLZ85ndQAiEAnZ5H3W%2BBTqoPiaKoKV7CMeE7OdlQ2WllFEDoNMA7ox8qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVdeggg8WPqrtnqbircAx9cmRuKfqG8zNH436R5ye%2BiziwnOM21evnar1aKJ6dCYMENYsHbkB9SZja90PcTNpp4NPn%2BzdRbdNkc%2FOL%2FbEygUfCLAaN0gawBNdRviqcV%2B6nQ2Qw9b%2B2UZS97%2FqaLo5z6S45%2Bq1daOfrPiaCNFBwasoNdP5q0AlsExn3tW7FfzRctgOCLZEWsPASz9fKk13AXOrMaMq5xND%2BG9bSZKtlQKNN1WbEd1Dy8bmsvmF4%2By%2B2Cz2sh0oqbcYY5zw4cn5IYNCu4Q%2BK3hFJk%2BQn%2FgvbMFCpgILNw26w57fjpAPBjnz3Xr9%2BCVZFKSgwfg4nVmrZQFdOYyioswCrdfSKGg8WEDI0NGavuE1bhoMC8%2BFci61KMmCAr%2BnSw%2F9umfvtrp45hsQQYgnx0EsnLNcnk%2FZa4C6cdqH6M0Z60AGdqQnFgFmdkoPQEdccGgMbbmhgQ3GD%2BJ2T87unF2m7U4%2F6qTm%2BDKcC8FvvXsd0KIHefobvhaP8vPWJthXXg0g75TY%2BdTpfs8rFoOyOhdPZcxGShfvAsCBMOy9zcp3eUBUs3ZK%2BDH8JRTjXy%2BJ3Ikb4F6erwNCsmHLyZF5wgjQ6CdgLqqUskCg8PkkPTpcsVOZn0vinhnWvZTw8AePd%2FlkcvMK33icEGOqUBt1CgctHKNVIB0uNpQfk6brMzSZn6fvlbETuUy5Lnfw%2BwMpEJalxGFlM17zyn0q1Vr%2FewvaqmF4gRgXsXx4U3Aj6LTP5ahcl17SiVWW1SU42iTVbAqqzh6Whmh7481ItgD2gboGatchEpfuS%2FE0CynlrbCMa26cMbQhtpI%2FRd1RVIvRPPMYTJwIC84dh4cVV%2BTgjTLYX1Z2iBEx9waC95Pz8mTkFr&X-Amz-Signature=25e6002743d2a79340ac2e3380c262032165c1072e83bf98c320c8c63a5e419b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z76BW4KL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFYLRQyjSdRRXhIcZL%2BF36wvIzEQP8mPpTDHfLZ85ndQAiEAnZ5H3W%2BBTqoPiaKoKV7CMeE7OdlQ2WllFEDoNMA7ox8qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVdeggg8WPqrtnqbircAx9cmRuKfqG8zNH436R5ye%2BiziwnOM21evnar1aKJ6dCYMENYsHbkB9SZja90PcTNpp4NPn%2BzdRbdNkc%2FOL%2FbEygUfCLAaN0gawBNdRviqcV%2B6nQ2Qw9b%2B2UZS97%2FqaLo5z6S45%2Bq1daOfrPiaCNFBwasoNdP5q0AlsExn3tW7FfzRctgOCLZEWsPASz9fKk13AXOrMaMq5xND%2BG9bSZKtlQKNN1WbEd1Dy8bmsvmF4%2By%2B2Cz2sh0oqbcYY5zw4cn5IYNCu4Q%2BK3hFJk%2BQn%2FgvbMFCpgILNw26w57fjpAPBjnz3Xr9%2BCVZFKSgwfg4nVmrZQFdOYyioswCrdfSKGg8WEDI0NGavuE1bhoMC8%2BFci61KMmCAr%2BnSw%2F9umfvtrp45hsQQYgnx0EsnLNcnk%2FZa4C6cdqH6M0Z60AGdqQnFgFmdkoPQEdccGgMbbmhgQ3GD%2BJ2T87unF2m7U4%2F6qTm%2BDKcC8FvvXsd0KIHefobvhaP8vPWJthXXg0g75TY%2BdTpfs8rFoOyOhdPZcxGShfvAsCBMOy9zcp3eUBUs3ZK%2BDH8JRTjXy%2BJ3Ikb4F6erwNCsmHLyZF5wgjQ6CdgLqqUskCg8PkkPTpcsVOZn0vinhnWvZTw8AePd%2FlkcvMK33icEGOqUBt1CgctHKNVIB0uNpQfk6brMzSZn6fvlbETuUy5Lnfw%2BwMpEJalxGFlM17zyn0q1Vr%2FewvaqmF4gRgXsXx4U3Aj6LTP5ahcl17SiVWW1SU42iTVbAqqzh6Whmh7481ItgD2gboGatchEpfuS%2FE0CynlrbCMa26cMbQhtpI%2FRd1RVIvRPPMYTJwIC84dh4cVV%2BTgjTLYX1Z2iBEx9waC95Pz8mTkFr&X-Amz-Signature=438b9d87f6fdba10aa8c16a2708042ea17d86b8427d8883092081efafe83616b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z76BW4KL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFYLRQyjSdRRXhIcZL%2BF36wvIzEQP8mPpTDHfLZ85ndQAiEAnZ5H3W%2BBTqoPiaKoKV7CMeE7OdlQ2WllFEDoNMA7ox8qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVdeggg8WPqrtnqbircAx9cmRuKfqG8zNH436R5ye%2BiziwnOM21evnar1aKJ6dCYMENYsHbkB9SZja90PcTNpp4NPn%2BzdRbdNkc%2FOL%2FbEygUfCLAaN0gawBNdRviqcV%2B6nQ2Qw9b%2B2UZS97%2FqaLo5z6S45%2Bq1daOfrPiaCNFBwasoNdP5q0AlsExn3tW7FfzRctgOCLZEWsPASz9fKk13AXOrMaMq5xND%2BG9bSZKtlQKNN1WbEd1Dy8bmsvmF4%2By%2B2Cz2sh0oqbcYY5zw4cn5IYNCu4Q%2BK3hFJk%2BQn%2FgvbMFCpgILNw26w57fjpAPBjnz3Xr9%2BCVZFKSgwfg4nVmrZQFdOYyioswCrdfSKGg8WEDI0NGavuE1bhoMC8%2BFci61KMmCAr%2BnSw%2F9umfvtrp45hsQQYgnx0EsnLNcnk%2FZa4C6cdqH6M0Z60AGdqQnFgFmdkoPQEdccGgMbbmhgQ3GD%2BJ2T87unF2m7U4%2F6qTm%2BDKcC8FvvXsd0KIHefobvhaP8vPWJthXXg0g75TY%2BdTpfs8rFoOyOhdPZcxGShfvAsCBMOy9zcp3eUBUs3ZK%2BDH8JRTjXy%2BJ3Ikb4F6erwNCsmHLyZF5wgjQ6CdgLqqUskCg8PkkPTpcsVOZn0vinhnWvZTw8AePd%2FlkcvMK33icEGOqUBt1CgctHKNVIB0uNpQfk6brMzSZn6fvlbETuUy5Lnfw%2BwMpEJalxGFlM17zyn0q1Vr%2FewvaqmF4gRgXsXx4U3Aj6LTP5ahcl17SiVWW1SU42iTVbAqqzh6Whmh7481ItgD2gboGatchEpfuS%2FE0CynlrbCMa26cMbQhtpI%2FRd1RVIvRPPMYTJwIC84dh4cVV%2BTgjTLYX1Z2iBEx9waC95Pz8mTkFr&X-Amz-Signature=317750f9ad26dcd19c345fb3d00fa7b65f698bef5b99750fcb3e622c9e8b368c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
