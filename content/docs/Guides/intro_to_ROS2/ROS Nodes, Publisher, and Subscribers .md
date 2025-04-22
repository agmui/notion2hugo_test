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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LNY2VN%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDtczBbw%2BuOc6G%2BnRUokWtzJdN167h5cZI%2BMPIOL3HV1AiAi62S4B6JOT84CtdZGB44rqgVtuez2UbgKuCjQvYzr%2BSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkf8C1anXUKvIxkFKtwDif7FZHHghFZnrBJAJtaf2SUHXw1hyaao0J8J4YuuS3TH0vhwi7Ih%2BB%2F2BLigN1%2FEergdQQsgDB%2FGEe5SpkEcFND%2BPKpjZHbOVhFl6zZltbKI4yU3FKPUMCOWwdVv6cizNdJM%2FdzR70082c8BKA1osWufzds%2FKX5c7BJ4gDHJKQkrBjmoEG%2FR9%2BBh2Lm4IJpgCU6F4Xcu6uU3Vg8ikkuefDgYV68VHtOKkM2hxlDYpfaPxrFEzRCu3ICfcobgQvpz7W1WkVgUSzZfjb9kH4Tn%2B9R7nM%2Fj%2F5sb76QNwKVF1uiZEWVtmaoeCLhe7MpoQcbBM1sw611WNDVHw%2F2dGl%2BkuaTkxlEbMNFqQsFffTlUT9aX53eTIjKl2xgo2FT3r6dUzU%2FvjcMy4Cx0fRaKcBc72gR%2B9goKmc50m67yq2N5PtpgWQgIKTSsyFQSKdVj83gNrWLVjzgImJCPvhFZuYpVfy3WW0oAMMlQa47bhr%2F7wdojlEbCd2SKoF7nRdi4OpK5tpPoqvG2LdGggkYfVIqJbAPiK2yjsWMCbjyxnVn1l9phax1zM%2BkugYyOBhWombe65lq47SHELqqwZRe%2BEFdDcNmELaUP00DMvH0IgcrgWxcixPWQuqe0y5xc958w2bqbwAY6pgHpU3CQ1sT9k2wGESVpMtf5vxqeWU8PIGauwa5cWPMGXQ0RII1dUiw2ZYGqVR2ei%2BMXmtKeb2KWuAj0tRKknyd3RFsGcH8bkbGSUkW9vGYbu1c3Zs16f5TEdM%2FJh0BXankFiioNDmSWV6R9c%2Frqb%2Fa8sIQzWihx93LCPNZeLiTwUpyGu%2BIzk4vyp%2B0PdY3hFD9lanxbInKytAIeE4Y%2BgjlZOhhSwYYp&X-Amz-Signature=665e76386c05395a6ff39567bcdab8c3690af2c0fcb74d166070c9b0e010be35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LNY2VN%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDtczBbw%2BuOc6G%2BnRUokWtzJdN167h5cZI%2BMPIOL3HV1AiAi62S4B6JOT84CtdZGB44rqgVtuez2UbgKuCjQvYzr%2BSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkf8C1anXUKvIxkFKtwDif7FZHHghFZnrBJAJtaf2SUHXw1hyaao0J8J4YuuS3TH0vhwi7Ih%2BB%2F2BLigN1%2FEergdQQsgDB%2FGEe5SpkEcFND%2BPKpjZHbOVhFl6zZltbKI4yU3FKPUMCOWwdVv6cizNdJM%2FdzR70082c8BKA1osWufzds%2FKX5c7BJ4gDHJKQkrBjmoEG%2FR9%2BBh2Lm4IJpgCU6F4Xcu6uU3Vg8ikkuefDgYV68VHtOKkM2hxlDYpfaPxrFEzRCu3ICfcobgQvpz7W1WkVgUSzZfjb9kH4Tn%2B9R7nM%2Fj%2F5sb76QNwKVF1uiZEWVtmaoeCLhe7MpoQcbBM1sw611WNDVHw%2F2dGl%2BkuaTkxlEbMNFqQsFffTlUT9aX53eTIjKl2xgo2FT3r6dUzU%2FvjcMy4Cx0fRaKcBc72gR%2B9goKmc50m67yq2N5PtpgWQgIKTSsyFQSKdVj83gNrWLVjzgImJCPvhFZuYpVfy3WW0oAMMlQa47bhr%2F7wdojlEbCd2SKoF7nRdi4OpK5tpPoqvG2LdGggkYfVIqJbAPiK2yjsWMCbjyxnVn1l9phax1zM%2BkugYyOBhWombe65lq47SHELqqwZRe%2BEFdDcNmELaUP00DMvH0IgcrgWxcixPWQuqe0y5xc958w2bqbwAY6pgHpU3CQ1sT9k2wGESVpMtf5vxqeWU8PIGauwa5cWPMGXQ0RII1dUiw2ZYGqVR2ei%2BMXmtKeb2KWuAj0tRKknyd3RFsGcH8bkbGSUkW9vGYbu1c3Zs16f5TEdM%2FJh0BXankFiioNDmSWV6R9c%2Frqb%2Fa8sIQzWihx93LCPNZeLiTwUpyGu%2BIzk4vyp%2B0PdY3hFD9lanxbInKytAIeE4Y%2BgjlZOhhSwYYp&X-Amz-Signature=666d3cf0348bc6b6e969261a0e757fe558db766bfe08b9644e40dec83df26064&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LNY2VN%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDtczBbw%2BuOc6G%2BnRUokWtzJdN167h5cZI%2BMPIOL3HV1AiAi62S4B6JOT84CtdZGB44rqgVtuez2UbgKuCjQvYzr%2BSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkf8C1anXUKvIxkFKtwDif7FZHHghFZnrBJAJtaf2SUHXw1hyaao0J8J4YuuS3TH0vhwi7Ih%2BB%2F2BLigN1%2FEergdQQsgDB%2FGEe5SpkEcFND%2BPKpjZHbOVhFl6zZltbKI4yU3FKPUMCOWwdVv6cizNdJM%2FdzR70082c8BKA1osWufzds%2FKX5c7BJ4gDHJKQkrBjmoEG%2FR9%2BBh2Lm4IJpgCU6F4Xcu6uU3Vg8ikkuefDgYV68VHtOKkM2hxlDYpfaPxrFEzRCu3ICfcobgQvpz7W1WkVgUSzZfjb9kH4Tn%2B9R7nM%2Fj%2F5sb76QNwKVF1uiZEWVtmaoeCLhe7MpoQcbBM1sw611WNDVHw%2F2dGl%2BkuaTkxlEbMNFqQsFffTlUT9aX53eTIjKl2xgo2FT3r6dUzU%2FvjcMy4Cx0fRaKcBc72gR%2B9goKmc50m67yq2N5PtpgWQgIKTSsyFQSKdVj83gNrWLVjzgImJCPvhFZuYpVfy3WW0oAMMlQa47bhr%2F7wdojlEbCd2SKoF7nRdi4OpK5tpPoqvG2LdGggkYfVIqJbAPiK2yjsWMCbjyxnVn1l9phax1zM%2BkugYyOBhWombe65lq47SHELqqwZRe%2BEFdDcNmELaUP00DMvH0IgcrgWxcixPWQuqe0y5xc958w2bqbwAY6pgHpU3CQ1sT9k2wGESVpMtf5vxqeWU8PIGauwa5cWPMGXQ0RII1dUiw2ZYGqVR2ei%2BMXmtKeb2KWuAj0tRKknyd3RFsGcH8bkbGSUkW9vGYbu1c3Zs16f5TEdM%2FJh0BXankFiioNDmSWV6R9c%2Frqb%2Fa8sIQzWihx93LCPNZeLiTwUpyGu%2BIzk4vyp%2B0PdY3hFD9lanxbInKytAIeE4Y%2BgjlZOhhSwYYp&X-Amz-Signature=6ebdf0d9df340c5d8a6c1ddf897573f36280a244ff774def0000ae82714c2426&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LNY2VN%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDtczBbw%2BuOc6G%2BnRUokWtzJdN167h5cZI%2BMPIOL3HV1AiAi62S4B6JOT84CtdZGB44rqgVtuez2UbgKuCjQvYzr%2BSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkf8C1anXUKvIxkFKtwDif7FZHHghFZnrBJAJtaf2SUHXw1hyaao0J8J4YuuS3TH0vhwi7Ih%2BB%2F2BLigN1%2FEergdQQsgDB%2FGEe5SpkEcFND%2BPKpjZHbOVhFl6zZltbKI4yU3FKPUMCOWwdVv6cizNdJM%2FdzR70082c8BKA1osWufzds%2FKX5c7BJ4gDHJKQkrBjmoEG%2FR9%2BBh2Lm4IJpgCU6F4Xcu6uU3Vg8ikkuefDgYV68VHtOKkM2hxlDYpfaPxrFEzRCu3ICfcobgQvpz7W1WkVgUSzZfjb9kH4Tn%2B9R7nM%2Fj%2F5sb76QNwKVF1uiZEWVtmaoeCLhe7MpoQcbBM1sw611WNDVHw%2F2dGl%2BkuaTkxlEbMNFqQsFffTlUT9aX53eTIjKl2xgo2FT3r6dUzU%2FvjcMy4Cx0fRaKcBc72gR%2B9goKmc50m67yq2N5PtpgWQgIKTSsyFQSKdVj83gNrWLVjzgImJCPvhFZuYpVfy3WW0oAMMlQa47bhr%2F7wdojlEbCd2SKoF7nRdi4OpK5tpPoqvG2LdGggkYfVIqJbAPiK2yjsWMCbjyxnVn1l9phax1zM%2BkugYyOBhWombe65lq47SHELqqwZRe%2BEFdDcNmELaUP00DMvH0IgcrgWxcixPWQuqe0y5xc958w2bqbwAY6pgHpU3CQ1sT9k2wGESVpMtf5vxqeWU8PIGauwa5cWPMGXQ0RII1dUiw2ZYGqVR2ei%2BMXmtKeb2KWuAj0tRKknyd3RFsGcH8bkbGSUkW9vGYbu1c3Zs16f5TEdM%2FJh0BXankFiioNDmSWV6R9c%2Frqb%2Fa8sIQzWihx93LCPNZeLiTwUpyGu%2BIzk4vyp%2B0PdY3hFD9lanxbInKytAIeE4Y%2BgjlZOhhSwYYp&X-Amz-Signature=f9553f9b4803fd6953940c81eb6db289ed5f967fe76e07694351af97eb9f40ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LNY2VN%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDtczBbw%2BuOc6G%2BnRUokWtzJdN167h5cZI%2BMPIOL3HV1AiAi62S4B6JOT84CtdZGB44rqgVtuez2UbgKuCjQvYzr%2BSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkf8C1anXUKvIxkFKtwDif7FZHHghFZnrBJAJtaf2SUHXw1hyaao0J8J4YuuS3TH0vhwi7Ih%2BB%2F2BLigN1%2FEergdQQsgDB%2FGEe5SpkEcFND%2BPKpjZHbOVhFl6zZltbKI4yU3FKPUMCOWwdVv6cizNdJM%2FdzR70082c8BKA1osWufzds%2FKX5c7BJ4gDHJKQkrBjmoEG%2FR9%2BBh2Lm4IJpgCU6F4Xcu6uU3Vg8ikkuefDgYV68VHtOKkM2hxlDYpfaPxrFEzRCu3ICfcobgQvpz7W1WkVgUSzZfjb9kH4Tn%2B9R7nM%2Fj%2F5sb76QNwKVF1uiZEWVtmaoeCLhe7MpoQcbBM1sw611WNDVHw%2F2dGl%2BkuaTkxlEbMNFqQsFffTlUT9aX53eTIjKl2xgo2FT3r6dUzU%2FvjcMy4Cx0fRaKcBc72gR%2B9goKmc50m67yq2N5PtpgWQgIKTSsyFQSKdVj83gNrWLVjzgImJCPvhFZuYpVfy3WW0oAMMlQa47bhr%2F7wdojlEbCd2SKoF7nRdi4OpK5tpPoqvG2LdGggkYfVIqJbAPiK2yjsWMCbjyxnVn1l9phax1zM%2BkugYyOBhWombe65lq47SHELqqwZRe%2BEFdDcNmELaUP00DMvH0IgcrgWxcixPWQuqe0y5xc958w2bqbwAY6pgHpU3CQ1sT9k2wGESVpMtf5vxqeWU8PIGauwa5cWPMGXQ0RII1dUiw2ZYGqVR2ei%2BMXmtKeb2KWuAj0tRKknyd3RFsGcH8bkbGSUkW9vGYbu1c3Zs16f5TEdM%2FJh0BXankFiioNDmSWV6R9c%2Frqb%2Fa8sIQzWihx93LCPNZeLiTwUpyGu%2BIzk4vyp%2B0PdY3hFD9lanxbInKytAIeE4Y%2BgjlZOhhSwYYp&X-Amz-Signature=1072a655c555d9ac06fc9b8fb3d7fe0e3337b7359980b7b3ca65ab695649c1f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LNY2VN%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDtczBbw%2BuOc6G%2BnRUokWtzJdN167h5cZI%2BMPIOL3HV1AiAi62S4B6JOT84CtdZGB44rqgVtuez2UbgKuCjQvYzr%2BSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkf8C1anXUKvIxkFKtwDif7FZHHghFZnrBJAJtaf2SUHXw1hyaao0J8J4YuuS3TH0vhwi7Ih%2BB%2F2BLigN1%2FEergdQQsgDB%2FGEe5SpkEcFND%2BPKpjZHbOVhFl6zZltbKI4yU3FKPUMCOWwdVv6cizNdJM%2FdzR70082c8BKA1osWufzds%2FKX5c7BJ4gDHJKQkrBjmoEG%2FR9%2BBh2Lm4IJpgCU6F4Xcu6uU3Vg8ikkuefDgYV68VHtOKkM2hxlDYpfaPxrFEzRCu3ICfcobgQvpz7W1WkVgUSzZfjb9kH4Tn%2B9R7nM%2Fj%2F5sb76QNwKVF1uiZEWVtmaoeCLhe7MpoQcbBM1sw611WNDVHw%2F2dGl%2BkuaTkxlEbMNFqQsFffTlUT9aX53eTIjKl2xgo2FT3r6dUzU%2FvjcMy4Cx0fRaKcBc72gR%2B9goKmc50m67yq2N5PtpgWQgIKTSsyFQSKdVj83gNrWLVjzgImJCPvhFZuYpVfy3WW0oAMMlQa47bhr%2F7wdojlEbCd2SKoF7nRdi4OpK5tpPoqvG2LdGggkYfVIqJbAPiK2yjsWMCbjyxnVn1l9phax1zM%2BkugYyOBhWombe65lq47SHELqqwZRe%2BEFdDcNmELaUP00DMvH0IgcrgWxcixPWQuqe0y5xc958w2bqbwAY6pgHpU3CQ1sT9k2wGESVpMtf5vxqeWU8PIGauwa5cWPMGXQ0RII1dUiw2ZYGqVR2ei%2BMXmtKeb2KWuAj0tRKknyd3RFsGcH8bkbGSUkW9vGYbu1c3Zs16f5TEdM%2FJh0BXankFiioNDmSWV6R9c%2Frqb%2Fa8sIQzWihx93LCPNZeLiTwUpyGu%2BIzk4vyp%2B0PdY3hFD9lanxbInKytAIeE4Y%2BgjlZOhhSwYYp&X-Amz-Signature=d819f55436fb6f65eb85b50692986a42b071bf9ec8b54f411c9cd0e5fd8dae9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LNY2VN%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDtczBbw%2BuOc6G%2BnRUokWtzJdN167h5cZI%2BMPIOL3HV1AiAi62S4B6JOT84CtdZGB44rqgVtuez2UbgKuCjQvYzr%2BSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkf8C1anXUKvIxkFKtwDif7FZHHghFZnrBJAJtaf2SUHXw1hyaao0J8J4YuuS3TH0vhwi7Ih%2BB%2F2BLigN1%2FEergdQQsgDB%2FGEe5SpkEcFND%2BPKpjZHbOVhFl6zZltbKI4yU3FKPUMCOWwdVv6cizNdJM%2FdzR70082c8BKA1osWufzds%2FKX5c7BJ4gDHJKQkrBjmoEG%2FR9%2BBh2Lm4IJpgCU6F4Xcu6uU3Vg8ikkuefDgYV68VHtOKkM2hxlDYpfaPxrFEzRCu3ICfcobgQvpz7W1WkVgUSzZfjb9kH4Tn%2B9R7nM%2Fj%2F5sb76QNwKVF1uiZEWVtmaoeCLhe7MpoQcbBM1sw611WNDVHw%2F2dGl%2BkuaTkxlEbMNFqQsFffTlUT9aX53eTIjKl2xgo2FT3r6dUzU%2FvjcMy4Cx0fRaKcBc72gR%2B9goKmc50m67yq2N5PtpgWQgIKTSsyFQSKdVj83gNrWLVjzgImJCPvhFZuYpVfy3WW0oAMMlQa47bhr%2F7wdojlEbCd2SKoF7nRdi4OpK5tpPoqvG2LdGggkYfVIqJbAPiK2yjsWMCbjyxnVn1l9phax1zM%2BkugYyOBhWombe65lq47SHELqqwZRe%2BEFdDcNmELaUP00DMvH0IgcrgWxcixPWQuqe0y5xc958w2bqbwAY6pgHpU3CQ1sT9k2wGESVpMtf5vxqeWU8PIGauwa5cWPMGXQ0RII1dUiw2ZYGqVR2ei%2BMXmtKeb2KWuAj0tRKknyd3RFsGcH8bkbGSUkW9vGYbu1c3Zs16f5TEdM%2FJh0BXankFiioNDmSWV6R9c%2Frqb%2Fa8sIQzWihx93LCPNZeLiTwUpyGu%2BIzk4vyp%2B0PdY3hFD9lanxbInKytAIeE4Y%2BgjlZOhhSwYYp&X-Amz-Signature=a45f0047f880f23bfcbde5f80db8a91c1245abe48475df149944ca39a5e54999&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LNY2VN%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDtczBbw%2BuOc6G%2BnRUokWtzJdN167h5cZI%2BMPIOL3HV1AiAi62S4B6JOT84CtdZGB44rqgVtuez2UbgKuCjQvYzr%2BSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkf8C1anXUKvIxkFKtwDif7FZHHghFZnrBJAJtaf2SUHXw1hyaao0J8J4YuuS3TH0vhwi7Ih%2BB%2F2BLigN1%2FEergdQQsgDB%2FGEe5SpkEcFND%2BPKpjZHbOVhFl6zZltbKI4yU3FKPUMCOWwdVv6cizNdJM%2FdzR70082c8BKA1osWufzds%2FKX5c7BJ4gDHJKQkrBjmoEG%2FR9%2BBh2Lm4IJpgCU6F4Xcu6uU3Vg8ikkuefDgYV68VHtOKkM2hxlDYpfaPxrFEzRCu3ICfcobgQvpz7W1WkVgUSzZfjb9kH4Tn%2B9R7nM%2Fj%2F5sb76QNwKVF1uiZEWVtmaoeCLhe7MpoQcbBM1sw611WNDVHw%2F2dGl%2BkuaTkxlEbMNFqQsFffTlUT9aX53eTIjKl2xgo2FT3r6dUzU%2FvjcMy4Cx0fRaKcBc72gR%2B9goKmc50m67yq2N5PtpgWQgIKTSsyFQSKdVj83gNrWLVjzgImJCPvhFZuYpVfy3WW0oAMMlQa47bhr%2F7wdojlEbCd2SKoF7nRdi4OpK5tpPoqvG2LdGggkYfVIqJbAPiK2yjsWMCbjyxnVn1l9phax1zM%2BkugYyOBhWombe65lq47SHELqqwZRe%2BEFdDcNmELaUP00DMvH0IgcrgWxcixPWQuqe0y5xc958w2bqbwAY6pgHpU3CQ1sT9k2wGESVpMtf5vxqeWU8PIGauwa5cWPMGXQ0RII1dUiw2ZYGqVR2ei%2BMXmtKeb2KWuAj0tRKknyd3RFsGcH8bkbGSUkW9vGYbu1c3Zs16f5TEdM%2FJh0BXankFiioNDmSWV6R9c%2Frqb%2Fa8sIQzWihx93LCPNZeLiTwUpyGu%2BIzk4vyp%2B0PdY3hFD9lanxbInKytAIeE4Y%2BgjlZOhhSwYYp&X-Amz-Signature=30b9cd318489b4d9d7e364da92d0a2418b3291390cb74b91e956b47f45d4580e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
