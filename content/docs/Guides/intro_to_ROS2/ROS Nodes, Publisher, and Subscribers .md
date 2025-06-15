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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W24EPXOP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGKcmkHyUi9shpvQ21AjtzYIl3mirJRbIyq5fNLmxbIHAiEAgZ30al%2Bm5hJYFF4aDQQhc1KcXTO5Rh9LKEr6%2Bj4%2FyQwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPMwvjyoRDcMdFjlfSrcA%2Bu8OXPjwJa1IDgEyy615zb7s8foxNGayo8%2BizKIO9Q4ooEBoGWIRA63UUuADicp1BJuzKMprdqWDLxpJs%2FDVBvT3a5nc4%2FcvdYSHG9ArIwp3aeN5kMKrM1j5PWZq6d3Xt%2FfeK4fWfcylTnOAFJRkyBESUlTzVMqlTm44JQ0qaN31haYSuL4%2B2WJ4yg8gH6AVO9v5k7uGK0QW5EtlZ5JTNjNKCy2TrpRhR%2B5hlEJoOvRUN3EOgs0Q3XM2T41tewEzUkd0I%2BcpFxQD12mUP5pGN06%2FQ8TvWScv%2Bcn8SuWJU5HGRLdiT2mGeQMTas5LsdQdh3S4D4y3xco%2FMtaLXtd6Wmziik9s5%2BtjwBNXh%2Fga%2BlPL0tZuzY7pw5d0%2FL%2Bd0BgZLafWrfwvkyTuNDXqAbGKbc%2FC%2BGY3Pd%2FBMm0Sje%2BhQZf6%2BXamqKJp2pnUsVVOUUXlFQxBNBB3CuMdOFD2YhDHEitj7RKzK3%2BApuC8xY2UIxWaqW7RFUj3FmKgVOTcVFg9Ie0dk2DTGN3vCpRvYZw7jr%2FtCaVt8ElNnOaYH9Qzyz4yaRbwh8gsei7jBpiMJFzdo%2FCIdRuJiHdLax%2FGnmhzd3u5qzhU0kTIYDvHtMX4CfCol8iskJUM1jhnV3MMMqEusIGOqUBCtGFisWdkfJQwjE55PqxKg%2FegjUNjQkhqdF8K8QsePhwT4JTEilXUzcjKbpUbeZsTwvgim8htVDfZuwAzHexvRmlH%2BMBQglknahEPL1NYN7X%2BTGL%2F4tIB47%2F7h3AEDo5HV3c55k6QHarap1lyfyzDv7bfhOjZHpVWYKsqnULHhPTDTpdOxqGYiV5VAob9NVjRDjlBDbAemT3qGaiTXpnI0PdmHqk&X-Amz-Signature=09108108177ebbce5f594c1fe8497a0aee18b72634e716570473b21dd48eb1a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W24EPXOP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGKcmkHyUi9shpvQ21AjtzYIl3mirJRbIyq5fNLmxbIHAiEAgZ30al%2Bm5hJYFF4aDQQhc1KcXTO5Rh9LKEr6%2Bj4%2FyQwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPMwvjyoRDcMdFjlfSrcA%2Bu8OXPjwJa1IDgEyy615zb7s8foxNGayo8%2BizKIO9Q4ooEBoGWIRA63UUuADicp1BJuzKMprdqWDLxpJs%2FDVBvT3a5nc4%2FcvdYSHG9ArIwp3aeN5kMKrM1j5PWZq6d3Xt%2FfeK4fWfcylTnOAFJRkyBESUlTzVMqlTm44JQ0qaN31haYSuL4%2B2WJ4yg8gH6AVO9v5k7uGK0QW5EtlZ5JTNjNKCy2TrpRhR%2B5hlEJoOvRUN3EOgs0Q3XM2T41tewEzUkd0I%2BcpFxQD12mUP5pGN06%2FQ8TvWScv%2Bcn8SuWJU5HGRLdiT2mGeQMTas5LsdQdh3S4D4y3xco%2FMtaLXtd6Wmziik9s5%2BtjwBNXh%2Fga%2BlPL0tZuzY7pw5d0%2FL%2Bd0BgZLafWrfwvkyTuNDXqAbGKbc%2FC%2BGY3Pd%2FBMm0Sje%2BhQZf6%2BXamqKJp2pnUsVVOUUXlFQxBNBB3CuMdOFD2YhDHEitj7RKzK3%2BApuC8xY2UIxWaqW7RFUj3FmKgVOTcVFg9Ie0dk2DTGN3vCpRvYZw7jr%2FtCaVt8ElNnOaYH9Qzyz4yaRbwh8gsei7jBpiMJFzdo%2FCIdRuJiHdLax%2FGnmhzd3u5qzhU0kTIYDvHtMX4CfCol8iskJUM1jhnV3MMMqEusIGOqUBCtGFisWdkfJQwjE55PqxKg%2FegjUNjQkhqdF8K8QsePhwT4JTEilXUzcjKbpUbeZsTwvgim8htVDfZuwAzHexvRmlH%2BMBQglknahEPL1NYN7X%2BTGL%2F4tIB47%2F7h3AEDo5HV3c55k6QHarap1lyfyzDv7bfhOjZHpVWYKsqnULHhPTDTpdOxqGYiV5VAob9NVjRDjlBDbAemT3qGaiTXpnI0PdmHqk&X-Amz-Signature=caade9b0eecd6eaf2eff0e9ffdbd9d5b2461604417f522d8f47fd10133cafa83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W24EPXOP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGKcmkHyUi9shpvQ21AjtzYIl3mirJRbIyq5fNLmxbIHAiEAgZ30al%2Bm5hJYFF4aDQQhc1KcXTO5Rh9LKEr6%2Bj4%2FyQwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPMwvjyoRDcMdFjlfSrcA%2Bu8OXPjwJa1IDgEyy615zb7s8foxNGayo8%2BizKIO9Q4ooEBoGWIRA63UUuADicp1BJuzKMprdqWDLxpJs%2FDVBvT3a5nc4%2FcvdYSHG9ArIwp3aeN5kMKrM1j5PWZq6d3Xt%2FfeK4fWfcylTnOAFJRkyBESUlTzVMqlTm44JQ0qaN31haYSuL4%2B2WJ4yg8gH6AVO9v5k7uGK0QW5EtlZ5JTNjNKCy2TrpRhR%2B5hlEJoOvRUN3EOgs0Q3XM2T41tewEzUkd0I%2BcpFxQD12mUP5pGN06%2FQ8TvWScv%2Bcn8SuWJU5HGRLdiT2mGeQMTas5LsdQdh3S4D4y3xco%2FMtaLXtd6Wmziik9s5%2BtjwBNXh%2Fga%2BlPL0tZuzY7pw5d0%2FL%2Bd0BgZLafWrfwvkyTuNDXqAbGKbc%2FC%2BGY3Pd%2FBMm0Sje%2BhQZf6%2BXamqKJp2pnUsVVOUUXlFQxBNBB3CuMdOFD2YhDHEitj7RKzK3%2BApuC8xY2UIxWaqW7RFUj3FmKgVOTcVFg9Ie0dk2DTGN3vCpRvYZw7jr%2FtCaVt8ElNnOaYH9Qzyz4yaRbwh8gsei7jBpiMJFzdo%2FCIdRuJiHdLax%2FGnmhzd3u5qzhU0kTIYDvHtMX4CfCol8iskJUM1jhnV3MMMqEusIGOqUBCtGFisWdkfJQwjE55PqxKg%2FegjUNjQkhqdF8K8QsePhwT4JTEilXUzcjKbpUbeZsTwvgim8htVDfZuwAzHexvRmlH%2BMBQglknahEPL1NYN7X%2BTGL%2F4tIB47%2F7h3AEDo5HV3c55k6QHarap1lyfyzDv7bfhOjZHpVWYKsqnULHhPTDTpdOxqGYiV5VAob9NVjRDjlBDbAemT3qGaiTXpnI0PdmHqk&X-Amz-Signature=3e5b5af3179cac43adedb9e524fb9a58b4a4c1122648d00e4640822af54e0fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W24EPXOP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGKcmkHyUi9shpvQ21AjtzYIl3mirJRbIyq5fNLmxbIHAiEAgZ30al%2Bm5hJYFF4aDQQhc1KcXTO5Rh9LKEr6%2Bj4%2FyQwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPMwvjyoRDcMdFjlfSrcA%2Bu8OXPjwJa1IDgEyy615zb7s8foxNGayo8%2BizKIO9Q4ooEBoGWIRA63UUuADicp1BJuzKMprdqWDLxpJs%2FDVBvT3a5nc4%2FcvdYSHG9ArIwp3aeN5kMKrM1j5PWZq6d3Xt%2FfeK4fWfcylTnOAFJRkyBESUlTzVMqlTm44JQ0qaN31haYSuL4%2B2WJ4yg8gH6AVO9v5k7uGK0QW5EtlZ5JTNjNKCy2TrpRhR%2B5hlEJoOvRUN3EOgs0Q3XM2T41tewEzUkd0I%2BcpFxQD12mUP5pGN06%2FQ8TvWScv%2Bcn8SuWJU5HGRLdiT2mGeQMTas5LsdQdh3S4D4y3xco%2FMtaLXtd6Wmziik9s5%2BtjwBNXh%2Fga%2BlPL0tZuzY7pw5d0%2FL%2Bd0BgZLafWrfwvkyTuNDXqAbGKbc%2FC%2BGY3Pd%2FBMm0Sje%2BhQZf6%2BXamqKJp2pnUsVVOUUXlFQxBNBB3CuMdOFD2YhDHEitj7RKzK3%2BApuC8xY2UIxWaqW7RFUj3FmKgVOTcVFg9Ie0dk2DTGN3vCpRvYZw7jr%2FtCaVt8ElNnOaYH9Qzyz4yaRbwh8gsei7jBpiMJFzdo%2FCIdRuJiHdLax%2FGnmhzd3u5qzhU0kTIYDvHtMX4CfCol8iskJUM1jhnV3MMMqEusIGOqUBCtGFisWdkfJQwjE55PqxKg%2FegjUNjQkhqdF8K8QsePhwT4JTEilXUzcjKbpUbeZsTwvgim8htVDfZuwAzHexvRmlH%2BMBQglknahEPL1NYN7X%2BTGL%2F4tIB47%2F7h3AEDo5HV3c55k6QHarap1lyfyzDv7bfhOjZHpVWYKsqnULHhPTDTpdOxqGYiV5VAob9NVjRDjlBDbAemT3qGaiTXpnI0PdmHqk&X-Amz-Signature=eeb77516009a6d62fc2b8efc1c7fd4d884ec3a5e9f77f91931c7a4b6603c9135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W24EPXOP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGKcmkHyUi9shpvQ21AjtzYIl3mirJRbIyq5fNLmxbIHAiEAgZ30al%2Bm5hJYFF4aDQQhc1KcXTO5Rh9LKEr6%2Bj4%2FyQwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPMwvjyoRDcMdFjlfSrcA%2Bu8OXPjwJa1IDgEyy615zb7s8foxNGayo8%2BizKIO9Q4ooEBoGWIRA63UUuADicp1BJuzKMprdqWDLxpJs%2FDVBvT3a5nc4%2FcvdYSHG9ArIwp3aeN5kMKrM1j5PWZq6d3Xt%2FfeK4fWfcylTnOAFJRkyBESUlTzVMqlTm44JQ0qaN31haYSuL4%2B2WJ4yg8gH6AVO9v5k7uGK0QW5EtlZ5JTNjNKCy2TrpRhR%2B5hlEJoOvRUN3EOgs0Q3XM2T41tewEzUkd0I%2BcpFxQD12mUP5pGN06%2FQ8TvWScv%2Bcn8SuWJU5HGRLdiT2mGeQMTas5LsdQdh3S4D4y3xco%2FMtaLXtd6Wmziik9s5%2BtjwBNXh%2Fga%2BlPL0tZuzY7pw5d0%2FL%2Bd0BgZLafWrfwvkyTuNDXqAbGKbc%2FC%2BGY3Pd%2FBMm0Sje%2BhQZf6%2BXamqKJp2pnUsVVOUUXlFQxBNBB3CuMdOFD2YhDHEitj7RKzK3%2BApuC8xY2UIxWaqW7RFUj3FmKgVOTcVFg9Ie0dk2DTGN3vCpRvYZw7jr%2FtCaVt8ElNnOaYH9Qzyz4yaRbwh8gsei7jBpiMJFzdo%2FCIdRuJiHdLax%2FGnmhzd3u5qzhU0kTIYDvHtMX4CfCol8iskJUM1jhnV3MMMqEusIGOqUBCtGFisWdkfJQwjE55PqxKg%2FegjUNjQkhqdF8K8QsePhwT4JTEilXUzcjKbpUbeZsTwvgim8htVDfZuwAzHexvRmlH%2BMBQglknahEPL1NYN7X%2BTGL%2F4tIB47%2F7h3AEDo5HV3c55k6QHarap1lyfyzDv7bfhOjZHpVWYKsqnULHhPTDTpdOxqGYiV5VAob9NVjRDjlBDbAemT3qGaiTXpnI0PdmHqk&X-Amz-Signature=bd61fdd6903e93ac7fd3cc40cae6a8b7759fcbcd0e923164bcec22a6daac2bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W24EPXOP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGKcmkHyUi9shpvQ21AjtzYIl3mirJRbIyq5fNLmxbIHAiEAgZ30al%2Bm5hJYFF4aDQQhc1KcXTO5Rh9LKEr6%2Bj4%2FyQwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPMwvjyoRDcMdFjlfSrcA%2Bu8OXPjwJa1IDgEyy615zb7s8foxNGayo8%2BizKIO9Q4ooEBoGWIRA63UUuADicp1BJuzKMprdqWDLxpJs%2FDVBvT3a5nc4%2FcvdYSHG9ArIwp3aeN5kMKrM1j5PWZq6d3Xt%2FfeK4fWfcylTnOAFJRkyBESUlTzVMqlTm44JQ0qaN31haYSuL4%2B2WJ4yg8gH6AVO9v5k7uGK0QW5EtlZ5JTNjNKCy2TrpRhR%2B5hlEJoOvRUN3EOgs0Q3XM2T41tewEzUkd0I%2BcpFxQD12mUP5pGN06%2FQ8TvWScv%2Bcn8SuWJU5HGRLdiT2mGeQMTas5LsdQdh3S4D4y3xco%2FMtaLXtd6Wmziik9s5%2BtjwBNXh%2Fga%2BlPL0tZuzY7pw5d0%2FL%2Bd0BgZLafWrfwvkyTuNDXqAbGKbc%2FC%2BGY3Pd%2FBMm0Sje%2BhQZf6%2BXamqKJp2pnUsVVOUUXlFQxBNBB3CuMdOFD2YhDHEitj7RKzK3%2BApuC8xY2UIxWaqW7RFUj3FmKgVOTcVFg9Ie0dk2DTGN3vCpRvYZw7jr%2FtCaVt8ElNnOaYH9Qzyz4yaRbwh8gsei7jBpiMJFzdo%2FCIdRuJiHdLax%2FGnmhzd3u5qzhU0kTIYDvHtMX4CfCol8iskJUM1jhnV3MMMqEusIGOqUBCtGFisWdkfJQwjE55PqxKg%2FegjUNjQkhqdF8K8QsePhwT4JTEilXUzcjKbpUbeZsTwvgim8htVDfZuwAzHexvRmlH%2BMBQglknahEPL1NYN7X%2BTGL%2F4tIB47%2F7h3AEDo5HV3c55k6QHarap1lyfyzDv7bfhOjZHpVWYKsqnULHhPTDTpdOxqGYiV5VAob9NVjRDjlBDbAemT3qGaiTXpnI0PdmHqk&X-Amz-Signature=1395a3bf9458500e0a874fc97fc16aeb2c4a74885d5806252c2756f2ce5dfde6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W24EPXOP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGKcmkHyUi9shpvQ21AjtzYIl3mirJRbIyq5fNLmxbIHAiEAgZ30al%2Bm5hJYFF4aDQQhc1KcXTO5Rh9LKEr6%2Bj4%2FyQwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPMwvjyoRDcMdFjlfSrcA%2Bu8OXPjwJa1IDgEyy615zb7s8foxNGayo8%2BizKIO9Q4ooEBoGWIRA63UUuADicp1BJuzKMprdqWDLxpJs%2FDVBvT3a5nc4%2FcvdYSHG9ArIwp3aeN5kMKrM1j5PWZq6d3Xt%2FfeK4fWfcylTnOAFJRkyBESUlTzVMqlTm44JQ0qaN31haYSuL4%2B2WJ4yg8gH6AVO9v5k7uGK0QW5EtlZ5JTNjNKCy2TrpRhR%2B5hlEJoOvRUN3EOgs0Q3XM2T41tewEzUkd0I%2BcpFxQD12mUP5pGN06%2FQ8TvWScv%2Bcn8SuWJU5HGRLdiT2mGeQMTas5LsdQdh3S4D4y3xco%2FMtaLXtd6Wmziik9s5%2BtjwBNXh%2Fga%2BlPL0tZuzY7pw5d0%2FL%2Bd0BgZLafWrfwvkyTuNDXqAbGKbc%2FC%2BGY3Pd%2FBMm0Sje%2BhQZf6%2BXamqKJp2pnUsVVOUUXlFQxBNBB3CuMdOFD2YhDHEitj7RKzK3%2BApuC8xY2UIxWaqW7RFUj3FmKgVOTcVFg9Ie0dk2DTGN3vCpRvYZw7jr%2FtCaVt8ElNnOaYH9Qzyz4yaRbwh8gsei7jBpiMJFzdo%2FCIdRuJiHdLax%2FGnmhzd3u5qzhU0kTIYDvHtMX4CfCol8iskJUM1jhnV3MMMqEusIGOqUBCtGFisWdkfJQwjE55PqxKg%2FegjUNjQkhqdF8K8QsePhwT4JTEilXUzcjKbpUbeZsTwvgim8htVDfZuwAzHexvRmlH%2BMBQglknahEPL1NYN7X%2BTGL%2F4tIB47%2F7h3AEDo5HV3c55k6QHarap1lyfyzDv7bfhOjZHpVWYKsqnULHhPTDTpdOxqGYiV5VAob9NVjRDjlBDbAemT3qGaiTXpnI0PdmHqk&X-Amz-Signature=3762eaad5f6faf74243dfc465024662e39b8158cf5a4235d9bb1b9d183597790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W24EPXOP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGKcmkHyUi9shpvQ21AjtzYIl3mirJRbIyq5fNLmxbIHAiEAgZ30al%2Bm5hJYFF4aDQQhc1KcXTO5Rh9LKEr6%2Bj4%2FyQwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPMwvjyoRDcMdFjlfSrcA%2Bu8OXPjwJa1IDgEyy615zb7s8foxNGayo8%2BizKIO9Q4ooEBoGWIRA63UUuADicp1BJuzKMprdqWDLxpJs%2FDVBvT3a5nc4%2FcvdYSHG9ArIwp3aeN5kMKrM1j5PWZq6d3Xt%2FfeK4fWfcylTnOAFJRkyBESUlTzVMqlTm44JQ0qaN31haYSuL4%2B2WJ4yg8gH6AVO9v5k7uGK0QW5EtlZ5JTNjNKCy2TrpRhR%2B5hlEJoOvRUN3EOgs0Q3XM2T41tewEzUkd0I%2BcpFxQD12mUP5pGN06%2FQ8TvWScv%2Bcn8SuWJU5HGRLdiT2mGeQMTas5LsdQdh3S4D4y3xco%2FMtaLXtd6Wmziik9s5%2BtjwBNXh%2Fga%2BlPL0tZuzY7pw5d0%2FL%2Bd0BgZLafWrfwvkyTuNDXqAbGKbc%2FC%2BGY3Pd%2FBMm0Sje%2BhQZf6%2BXamqKJp2pnUsVVOUUXlFQxBNBB3CuMdOFD2YhDHEitj7RKzK3%2BApuC8xY2UIxWaqW7RFUj3FmKgVOTcVFg9Ie0dk2DTGN3vCpRvYZw7jr%2FtCaVt8ElNnOaYH9Qzyz4yaRbwh8gsei7jBpiMJFzdo%2FCIdRuJiHdLax%2FGnmhzd3u5qzhU0kTIYDvHtMX4CfCol8iskJUM1jhnV3MMMqEusIGOqUBCtGFisWdkfJQwjE55PqxKg%2FegjUNjQkhqdF8K8QsePhwT4JTEilXUzcjKbpUbeZsTwvgim8htVDfZuwAzHexvRmlH%2BMBQglknahEPL1NYN7X%2BTGL%2F4tIB47%2F7h3AEDo5HV3c55k6QHarap1lyfyzDv7bfhOjZHpVWYKsqnULHhPTDTpdOxqGYiV5VAob9NVjRDjlBDbAemT3qGaiTXpnI0PdmHqk&X-Amz-Signature=3c2452b3450880fe23b78735f57a3ba2a245dbad7045670cee5feb9de0b309e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
