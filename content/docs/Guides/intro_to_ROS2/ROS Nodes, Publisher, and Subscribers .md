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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO4KF4FT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDkmRZp5h08Q5Qf32kejYViBSmoGLV2OpG5R4FzHCk2YAiEAkcm7zL1ery2N7oxkOTqnoIeELxGwTqINQdNXwv8fpHEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEvwsdZ2fQz5nNT5CrcA9EfzwLAZ0MA9c68SZ6iskRJNIkDnSLsm3AMIpF%2BfjQy5v%2BKCJEVuwO4zmBBb6XDLw1LbQshacAw6XShAWXXbmlt9Zx0Qt2qIMERMKTBjnbBCShSaXjXTWrO%2BpxgC247habYFwse3wZRP5UUpd8CQyqNk%2FKr2TQtvAMU9eyjB8RN4Ijf9cHOPXqh7govcsGGhePGy%2Bi%2Fda5aMKvR%2BXyLD5PS8jj3IoxQY%2FFDoKhp9Yj%2BPrfC4RBYrHfHGF5TEBwaBC%2FwQniuBA1HQ6iFAOdvhWMLjmmJV8Q8tUHWAHDAsy9fM%2Bb5XO1mNcRTA%2B2h1VTAx%2BlzyTRzJ1DTbdoO8p%2FOp5%2BRgShLGf%2BTfd%2FQ%2BD2uuhTxJ%2BMxTD4s7gx11vWqxeGWJuJi%2FldEqSbcp%2FwsbvX0N7gSpOwOK0ZwfxddGlg3wrby0m15%2BaEI6UN3meH%2FUXbkTu5UyjFCT4N7MagwJ1jWJqhETxnLtwX2%2BjcsX907MWvOusLyhSGfIwVc430oWzPEGdAiRhu7hdkL1N5e7R2Rus61YPcURWaeoG14%2BJLoDr%2BEv9IJAS74tamDSSe%2BWzI0u86LmRP%2F%2BM91OwNm3p8E8NT2N8%2BixjF69xy9UWfD%2Bevo09N6VxW%2BL9ByN6xiMIjP48IGOqUB8qx%2F6sEVxpuaipc2aK472YLFIO1YgT2AV4mtrK9Z6cJew7evrbfwk6p%2Fn8kgniu%2BDtXADh%2FHNulP26MrjI5Usx1R3wGsURN1p3pMaWB%2BEYAOP2rDZR1vBgeD8%2B2MvUfwKuzvbGn9KAFeE1zquxzuLTd7Cp59hVJ2gpbOYFev4US51Rdw38uT3noi3FMLGocLrf3XLDO7%2B0hsLp1k8HmRVuZu%2FHEg&X-Amz-Signature=0647b4663345b92925a902b3e5ca7068126b4a8f9a034a13b32e374e37fa7775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO4KF4FT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDkmRZp5h08Q5Qf32kejYViBSmoGLV2OpG5R4FzHCk2YAiEAkcm7zL1ery2N7oxkOTqnoIeELxGwTqINQdNXwv8fpHEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEvwsdZ2fQz5nNT5CrcA9EfzwLAZ0MA9c68SZ6iskRJNIkDnSLsm3AMIpF%2BfjQy5v%2BKCJEVuwO4zmBBb6XDLw1LbQshacAw6XShAWXXbmlt9Zx0Qt2qIMERMKTBjnbBCShSaXjXTWrO%2BpxgC247habYFwse3wZRP5UUpd8CQyqNk%2FKr2TQtvAMU9eyjB8RN4Ijf9cHOPXqh7govcsGGhePGy%2Bi%2Fda5aMKvR%2BXyLD5PS8jj3IoxQY%2FFDoKhp9Yj%2BPrfC4RBYrHfHGF5TEBwaBC%2FwQniuBA1HQ6iFAOdvhWMLjmmJV8Q8tUHWAHDAsy9fM%2Bb5XO1mNcRTA%2B2h1VTAx%2BlzyTRzJ1DTbdoO8p%2FOp5%2BRgShLGf%2BTfd%2FQ%2BD2uuhTxJ%2BMxTD4s7gx11vWqxeGWJuJi%2FldEqSbcp%2FwsbvX0N7gSpOwOK0ZwfxddGlg3wrby0m15%2BaEI6UN3meH%2FUXbkTu5UyjFCT4N7MagwJ1jWJqhETxnLtwX2%2BjcsX907MWvOusLyhSGfIwVc430oWzPEGdAiRhu7hdkL1N5e7R2Rus61YPcURWaeoG14%2BJLoDr%2BEv9IJAS74tamDSSe%2BWzI0u86LmRP%2F%2BM91OwNm3p8E8NT2N8%2BixjF69xy9UWfD%2Bevo09N6VxW%2BL9ByN6xiMIjP48IGOqUB8qx%2F6sEVxpuaipc2aK472YLFIO1YgT2AV4mtrK9Z6cJew7evrbfwk6p%2Fn8kgniu%2BDtXADh%2FHNulP26MrjI5Usx1R3wGsURN1p3pMaWB%2BEYAOP2rDZR1vBgeD8%2B2MvUfwKuzvbGn9KAFeE1zquxzuLTd7Cp59hVJ2gpbOYFev4US51Rdw38uT3noi3FMLGocLrf3XLDO7%2B0hsLp1k8HmRVuZu%2FHEg&X-Amz-Signature=5a9f8ca4c8d58d5c7ecd42129fea13101f71232226cb7c85a8d462ba5dab7bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO4KF4FT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDkmRZp5h08Q5Qf32kejYViBSmoGLV2OpG5R4FzHCk2YAiEAkcm7zL1ery2N7oxkOTqnoIeELxGwTqINQdNXwv8fpHEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEvwsdZ2fQz5nNT5CrcA9EfzwLAZ0MA9c68SZ6iskRJNIkDnSLsm3AMIpF%2BfjQy5v%2BKCJEVuwO4zmBBb6XDLw1LbQshacAw6XShAWXXbmlt9Zx0Qt2qIMERMKTBjnbBCShSaXjXTWrO%2BpxgC247habYFwse3wZRP5UUpd8CQyqNk%2FKr2TQtvAMU9eyjB8RN4Ijf9cHOPXqh7govcsGGhePGy%2Bi%2Fda5aMKvR%2BXyLD5PS8jj3IoxQY%2FFDoKhp9Yj%2BPrfC4RBYrHfHGF5TEBwaBC%2FwQniuBA1HQ6iFAOdvhWMLjmmJV8Q8tUHWAHDAsy9fM%2Bb5XO1mNcRTA%2B2h1VTAx%2BlzyTRzJ1DTbdoO8p%2FOp5%2BRgShLGf%2BTfd%2FQ%2BD2uuhTxJ%2BMxTD4s7gx11vWqxeGWJuJi%2FldEqSbcp%2FwsbvX0N7gSpOwOK0ZwfxddGlg3wrby0m15%2BaEI6UN3meH%2FUXbkTu5UyjFCT4N7MagwJ1jWJqhETxnLtwX2%2BjcsX907MWvOusLyhSGfIwVc430oWzPEGdAiRhu7hdkL1N5e7R2Rus61YPcURWaeoG14%2BJLoDr%2BEv9IJAS74tamDSSe%2BWzI0u86LmRP%2F%2BM91OwNm3p8E8NT2N8%2BixjF69xy9UWfD%2Bevo09N6VxW%2BL9ByN6xiMIjP48IGOqUB8qx%2F6sEVxpuaipc2aK472YLFIO1YgT2AV4mtrK9Z6cJew7evrbfwk6p%2Fn8kgniu%2BDtXADh%2FHNulP26MrjI5Usx1R3wGsURN1p3pMaWB%2BEYAOP2rDZR1vBgeD8%2B2MvUfwKuzvbGn9KAFeE1zquxzuLTd7Cp59hVJ2gpbOYFev4US51Rdw38uT3noi3FMLGocLrf3XLDO7%2B0hsLp1k8HmRVuZu%2FHEg&X-Amz-Signature=7cf9500dee5463c08b1434a4c753cd2f77dff89be81376baf8d7b3890dd87083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO4KF4FT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDkmRZp5h08Q5Qf32kejYViBSmoGLV2OpG5R4FzHCk2YAiEAkcm7zL1ery2N7oxkOTqnoIeELxGwTqINQdNXwv8fpHEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEvwsdZ2fQz5nNT5CrcA9EfzwLAZ0MA9c68SZ6iskRJNIkDnSLsm3AMIpF%2BfjQy5v%2BKCJEVuwO4zmBBb6XDLw1LbQshacAw6XShAWXXbmlt9Zx0Qt2qIMERMKTBjnbBCShSaXjXTWrO%2BpxgC247habYFwse3wZRP5UUpd8CQyqNk%2FKr2TQtvAMU9eyjB8RN4Ijf9cHOPXqh7govcsGGhePGy%2Bi%2Fda5aMKvR%2BXyLD5PS8jj3IoxQY%2FFDoKhp9Yj%2BPrfC4RBYrHfHGF5TEBwaBC%2FwQniuBA1HQ6iFAOdvhWMLjmmJV8Q8tUHWAHDAsy9fM%2Bb5XO1mNcRTA%2B2h1VTAx%2BlzyTRzJ1DTbdoO8p%2FOp5%2BRgShLGf%2BTfd%2FQ%2BD2uuhTxJ%2BMxTD4s7gx11vWqxeGWJuJi%2FldEqSbcp%2FwsbvX0N7gSpOwOK0ZwfxddGlg3wrby0m15%2BaEI6UN3meH%2FUXbkTu5UyjFCT4N7MagwJ1jWJqhETxnLtwX2%2BjcsX907MWvOusLyhSGfIwVc430oWzPEGdAiRhu7hdkL1N5e7R2Rus61YPcURWaeoG14%2BJLoDr%2BEv9IJAS74tamDSSe%2BWzI0u86LmRP%2F%2BM91OwNm3p8E8NT2N8%2BixjF69xy9UWfD%2Bevo09N6VxW%2BL9ByN6xiMIjP48IGOqUB8qx%2F6sEVxpuaipc2aK472YLFIO1YgT2AV4mtrK9Z6cJew7evrbfwk6p%2Fn8kgniu%2BDtXADh%2FHNulP26MrjI5Usx1R3wGsURN1p3pMaWB%2BEYAOP2rDZR1vBgeD8%2B2MvUfwKuzvbGn9KAFeE1zquxzuLTd7Cp59hVJ2gpbOYFev4US51Rdw38uT3noi3FMLGocLrf3XLDO7%2B0hsLp1k8HmRVuZu%2FHEg&X-Amz-Signature=580d601d15834e5a98616c29cecd686e405d0d60219b18a27cdb1b19cddebeda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO4KF4FT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDkmRZp5h08Q5Qf32kejYViBSmoGLV2OpG5R4FzHCk2YAiEAkcm7zL1ery2N7oxkOTqnoIeELxGwTqINQdNXwv8fpHEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEvwsdZ2fQz5nNT5CrcA9EfzwLAZ0MA9c68SZ6iskRJNIkDnSLsm3AMIpF%2BfjQy5v%2BKCJEVuwO4zmBBb6XDLw1LbQshacAw6XShAWXXbmlt9Zx0Qt2qIMERMKTBjnbBCShSaXjXTWrO%2BpxgC247habYFwse3wZRP5UUpd8CQyqNk%2FKr2TQtvAMU9eyjB8RN4Ijf9cHOPXqh7govcsGGhePGy%2Bi%2Fda5aMKvR%2BXyLD5PS8jj3IoxQY%2FFDoKhp9Yj%2BPrfC4RBYrHfHGF5TEBwaBC%2FwQniuBA1HQ6iFAOdvhWMLjmmJV8Q8tUHWAHDAsy9fM%2Bb5XO1mNcRTA%2B2h1VTAx%2BlzyTRzJ1DTbdoO8p%2FOp5%2BRgShLGf%2BTfd%2FQ%2BD2uuhTxJ%2BMxTD4s7gx11vWqxeGWJuJi%2FldEqSbcp%2FwsbvX0N7gSpOwOK0ZwfxddGlg3wrby0m15%2BaEI6UN3meH%2FUXbkTu5UyjFCT4N7MagwJ1jWJqhETxnLtwX2%2BjcsX907MWvOusLyhSGfIwVc430oWzPEGdAiRhu7hdkL1N5e7R2Rus61YPcURWaeoG14%2BJLoDr%2BEv9IJAS74tamDSSe%2BWzI0u86LmRP%2F%2BM91OwNm3p8E8NT2N8%2BixjF69xy9UWfD%2Bevo09N6VxW%2BL9ByN6xiMIjP48IGOqUB8qx%2F6sEVxpuaipc2aK472YLFIO1YgT2AV4mtrK9Z6cJew7evrbfwk6p%2Fn8kgniu%2BDtXADh%2FHNulP26MrjI5Usx1R3wGsURN1p3pMaWB%2BEYAOP2rDZR1vBgeD8%2B2MvUfwKuzvbGn9KAFeE1zquxzuLTd7Cp59hVJ2gpbOYFev4US51Rdw38uT3noi3FMLGocLrf3XLDO7%2B0hsLp1k8HmRVuZu%2FHEg&X-Amz-Signature=a5ceda9d090215df66b2a729387ecea7b07960b0e48bab660c0cdbd98ded4b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO4KF4FT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDkmRZp5h08Q5Qf32kejYViBSmoGLV2OpG5R4FzHCk2YAiEAkcm7zL1ery2N7oxkOTqnoIeELxGwTqINQdNXwv8fpHEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEvwsdZ2fQz5nNT5CrcA9EfzwLAZ0MA9c68SZ6iskRJNIkDnSLsm3AMIpF%2BfjQy5v%2BKCJEVuwO4zmBBb6XDLw1LbQshacAw6XShAWXXbmlt9Zx0Qt2qIMERMKTBjnbBCShSaXjXTWrO%2BpxgC247habYFwse3wZRP5UUpd8CQyqNk%2FKr2TQtvAMU9eyjB8RN4Ijf9cHOPXqh7govcsGGhePGy%2Bi%2Fda5aMKvR%2BXyLD5PS8jj3IoxQY%2FFDoKhp9Yj%2BPrfC4RBYrHfHGF5TEBwaBC%2FwQniuBA1HQ6iFAOdvhWMLjmmJV8Q8tUHWAHDAsy9fM%2Bb5XO1mNcRTA%2B2h1VTAx%2BlzyTRzJ1DTbdoO8p%2FOp5%2BRgShLGf%2BTfd%2FQ%2BD2uuhTxJ%2BMxTD4s7gx11vWqxeGWJuJi%2FldEqSbcp%2FwsbvX0N7gSpOwOK0ZwfxddGlg3wrby0m15%2BaEI6UN3meH%2FUXbkTu5UyjFCT4N7MagwJ1jWJqhETxnLtwX2%2BjcsX907MWvOusLyhSGfIwVc430oWzPEGdAiRhu7hdkL1N5e7R2Rus61YPcURWaeoG14%2BJLoDr%2BEv9IJAS74tamDSSe%2BWzI0u86LmRP%2F%2BM91OwNm3p8E8NT2N8%2BixjF69xy9UWfD%2Bevo09N6VxW%2BL9ByN6xiMIjP48IGOqUB8qx%2F6sEVxpuaipc2aK472YLFIO1YgT2AV4mtrK9Z6cJew7evrbfwk6p%2Fn8kgniu%2BDtXADh%2FHNulP26MrjI5Usx1R3wGsURN1p3pMaWB%2BEYAOP2rDZR1vBgeD8%2B2MvUfwKuzvbGn9KAFeE1zquxzuLTd7Cp59hVJ2gpbOYFev4US51Rdw38uT3noi3FMLGocLrf3XLDO7%2B0hsLp1k8HmRVuZu%2FHEg&X-Amz-Signature=84c98245e1d2a72e748cac86393398590b1384f7cbe674c547785d06e7f1c76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO4KF4FT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDkmRZp5h08Q5Qf32kejYViBSmoGLV2OpG5R4FzHCk2YAiEAkcm7zL1ery2N7oxkOTqnoIeELxGwTqINQdNXwv8fpHEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEvwsdZ2fQz5nNT5CrcA9EfzwLAZ0MA9c68SZ6iskRJNIkDnSLsm3AMIpF%2BfjQy5v%2BKCJEVuwO4zmBBb6XDLw1LbQshacAw6XShAWXXbmlt9Zx0Qt2qIMERMKTBjnbBCShSaXjXTWrO%2BpxgC247habYFwse3wZRP5UUpd8CQyqNk%2FKr2TQtvAMU9eyjB8RN4Ijf9cHOPXqh7govcsGGhePGy%2Bi%2Fda5aMKvR%2BXyLD5PS8jj3IoxQY%2FFDoKhp9Yj%2BPrfC4RBYrHfHGF5TEBwaBC%2FwQniuBA1HQ6iFAOdvhWMLjmmJV8Q8tUHWAHDAsy9fM%2Bb5XO1mNcRTA%2B2h1VTAx%2BlzyTRzJ1DTbdoO8p%2FOp5%2BRgShLGf%2BTfd%2FQ%2BD2uuhTxJ%2BMxTD4s7gx11vWqxeGWJuJi%2FldEqSbcp%2FwsbvX0N7gSpOwOK0ZwfxddGlg3wrby0m15%2BaEI6UN3meH%2FUXbkTu5UyjFCT4N7MagwJ1jWJqhETxnLtwX2%2BjcsX907MWvOusLyhSGfIwVc430oWzPEGdAiRhu7hdkL1N5e7R2Rus61YPcURWaeoG14%2BJLoDr%2BEv9IJAS74tamDSSe%2BWzI0u86LmRP%2F%2BM91OwNm3p8E8NT2N8%2BixjF69xy9UWfD%2Bevo09N6VxW%2BL9ByN6xiMIjP48IGOqUB8qx%2F6sEVxpuaipc2aK472YLFIO1YgT2AV4mtrK9Z6cJew7evrbfwk6p%2Fn8kgniu%2BDtXADh%2FHNulP26MrjI5Usx1R3wGsURN1p3pMaWB%2BEYAOP2rDZR1vBgeD8%2B2MvUfwKuzvbGn9KAFeE1zquxzuLTd7Cp59hVJ2gpbOYFev4US51Rdw38uT3noi3FMLGocLrf3XLDO7%2B0hsLp1k8HmRVuZu%2FHEg&X-Amz-Signature=ce6a2dac9ff71e77dedf9173901e3fda9f5181769a4b4054efe7b0b8303e7d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO4KF4FT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDkmRZp5h08Q5Qf32kejYViBSmoGLV2OpG5R4FzHCk2YAiEAkcm7zL1ery2N7oxkOTqnoIeELxGwTqINQdNXwv8fpHEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEvwsdZ2fQz5nNT5CrcA9EfzwLAZ0MA9c68SZ6iskRJNIkDnSLsm3AMIpF%2BfjQy5v%2BKCJEVuwO4zmBBb6XDLw1LbQshacAw6XShAWXXbmlt9Zx0Qt2qIMERMKTBjnbBCShSaXjXTWrO%2BpxgC247habYFwse3wZRP5UUpd8CQyqNk%2FKr2TQtvAMU9eyjB8RN4Ijf9cHOPXqh7govcsGGhePGy%2Bi%2Fda5aMKvR%2BXyLD5PS8jj3IoxQY%2FFDoKhp9Yj%2BPrfC4RBYrHfHGF5TEBwaBC%2FwQniuBA1HQ6iFAOdvhWMLjmmJV8Q8tUHWAHDAsy9fM%2Bb5XO1mNcRTA%2B2h1VTAx%2BlzyTRzJ1DTbdoO8p%2FOp5%2BRgShLGf%2BTfd%2FQ%2BD2uuhTxJ%2BMxTD4s7gx11vWqxeGWJuJi%2FldEqSbcp%2FwsbvX0N7gSpOwOK0ZwfxddGlg3wrby0m15%2BaEI6UN3meH%2FUXbkTu5UyjFCT4N7MagwJ1jWJqhETxnLtwX2%2BjcsX907MWvOusLyhSGfIwVc430oWzPEGdAiRhu7hdkL1N5e7R2Rus61YPcURWaeoG14%2BJLoDr%2BEv9IJAS74tamDSSe%2BWzI0u86LmRP%2F%2BM91OwNm3p8E8NT2N8%2BixjF69xy9UWfD%2Bevo09N6VxW%2BL9ByN6xiMIjP48IGOqUB8qx%2F6sEVxpuaipc2aK472YLFIO1YgT2AV4mtrK9Z6cJew7evrbfwk6p%2Fn8kgniu%2BDtXADh%2FHNulP26MrjI5Usx1R3wGsURN1p3pMaWB%2BEYAOP2rDZR1vBgeD8%2B2MvUfwKuzvbGn9KAFeE1zquxzuLTd7Cp59hVJ2gpbOYFev4US51Rdw38uT3noi3FMLGocLrf3XLDO7%2B0hsLp1k8HmRVuZu%2FHEg&X-Amz-Signature=8de0dd681722d4aeb15d987cc1d5896b2b6714b802a54006ee26e6c28409eec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
