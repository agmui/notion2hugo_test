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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E6RWIN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbOylrAB0%2B59UHiJOaK1G%2F94Y%2FBLgeFeIGNEltTqSvnAiEAgM8ljPm4b2vTE7EZTSILbAe1fyFYNrdXaqEYyfTy18gqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9%2FEyr4zVuF3Va3tircAzWdI1sXaNgR4T4J2%2FKZ21Lhg4mMPULmJ6YgUqYTb74TjXzAUH4Ad9BRONPGyrjGeYCiJoUK1WpNDi2HL1vLrVAfR31l%2FvNlP2dRgfXzb6HaBZgloUjvogsE8vrXjImgduQ6BHC%2BdZZnaswiK5mz81R63kOfEtParhcKSbSfpWRN0uBhLbiW2csKG0TU%2B%2FGaTx3oBQHf9nw72LkVay7swyIVEpqwqTNOxq%2F%2FwW5sl1NFLwx179TrvP538idvY6yvI%2BPlexSOrLzBKIRAPMgM014%2FMLNCh45o%2FDzQutj2jvi5rqlS65zz%2B1Hu21EGjRaNTp3qi227dPJWl0tLauTRJN4bPz82B6JNrciGnYy0Jywz6eiyLBp2zWJDgPh6aqHYcjGg%2ByfsYc45mp9pDLXIL4Agnclgdpb8wDQLKw0zepEbNo%2BlpGFdgsEcXub%2B2KyVrdwQdifxE6gTv399%2BYoaUZz9kShAvIxfdR8fmZTmVtlGJidJaxRb6puXwtgW9%2FivTXDaNDUVL2mnaY9C6hhp7PSCLLmx%2Bn%2BCcd6pg2zt7pdm9OFkx36m%2BF1oZps8%2BZiNUPmqA3Lz4FVvPH33iQdpk7zmcSyNObb4i09gseb6l3vrhWUPfS5GmDAxBrBIMNf%2Bub8GOqUB3robrBGlMoO1UTu2uRUGJCfgALoUf7c0pd1k9ag3zbPC%2BHga0gRqrO4QCao%2B8o3ZaLXhwqzTgB8ZuP575VHhZRfi1WaAia90KBzwT3NGFlzudyTHY9uJ0EFyc7iL31sSEU215Yb5qQHbYhk0Aww7QuPV03bxAVK8Vyyn9ebLJ2SIK5ClhbhgiXLod3J0JsHYpezE8DVhZGY0VSsCtthU5tM2XB6r&X-Amz-Signature=e15dacdd64c947f362c17cd937d79c93450aeb869322e66ca2c3d1e0ed3f3bff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E6RWIN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbOylrAB0%2B59UHiJOaK1G%2F94Y%2FBLgeFeIGNEltTqSvnAiEAgM8ljPm4b2vTE7EZTSILbAe1fyFYNrdXaqEYyfTy18gqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9%2FEyr4zVuF3Va3tircAzWdI1sXaNgR4T4J2%2FKZ21Lhg4mMPULmJ6YgUqYTb74TjXzAUH4Ad9BRONPGyrjGeYCiJoUK1WpNDi2HL1vLrVAfR31l%2FvNlP2dRgfXzb6HaBZgloUjvogsE8vrXjImgduQ6BHC%2BdZZnaswiK5mz81R63kOfEtParhcKSbSfpWRN0uBhLbiW2csKG0TU%2B%2FGaTx3oBQHf9nw72LkVay7swyIVEpqwqTNOxq%2F%2FwW5sl1NFLwx179TrvP538idvY6yvI%2BPlexSOrLzBKIRAPMgM014%2FMLNCh45o%2FDzQutj2jvi5rqlS65zz%2B1Hu21EGjRaNTp3qi227dPJWl0tLauTRJN4bPz82B6JNrciGnYy0Jywz6eiyLBp2zWJDgPh6aqHYcjGg%2ByfsYc45mp9pDLXIL4Agnclgdpb8wDQLKw0zepEbNo%2BlpGFdgsEcXub%2B2KyVrdwQdifxE6gTv399%2BYoaUZz9kShAvIxfdR8fmZTmVtlGJidJaxRb6puXwtgW9%2FivTXDaNDUVL2mnaY9C6hhp7PSCLLmx%2Bn%2BCcd6pg2zt7pdm9OFkx36m%2BF1oZps8%2BZiNUPmqA3Lz4FVvPH33iQdpk7zmcSyNObb4i09gseb6l3vrhWUPfS5GmDAxBrBIMNf%2Bub8GOqUB3robrBGlMoO1UTu2uRUGJCfgALoUf7c0pd1k9ag3zbPC%2BHga0gRqrO4QCao%2B8o3ZaLXhwqzTgB8ZuP575VHhZRfi1WaAia90KBzwT3NGFlzudyTHY9uJ0EFyc7iL31sSEU215Yb5qQHbYhk0Aww7QuPV03bxAVK8Vyyn9ebLJ2SIK5ClhbhgiXLod3J0JsHYpezE8DVhZGY0VSsCtthU5tM2XB6r&X-Amz-Signature=683caecec05af8148b238edd5f4dc1b621bc36ded6e4ace76fd56677bd32e514&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E6RWIN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbOylrAB0%2B59UHiJOaK1G%2F94Y%2FBLgeFeIGNEltTqSvnAiEAgM8ljPm4b2vTE7EZTSILbAe1fyFYNrdXaqEYyfTy18gqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9%2FEyr4zVuF3Va3tircAzWdI1sXaNgR4T4J2%2FKZ21Lhg4mMPULmJ6YgUqYTb74TjXzAUH4Ad9BRONPGyrjGeYCiJoUK1WpNDi2HL1vLrVAfR31l%2FvNlP2dRgfXzb6HaBZgloUjvogsE8vrXjImgduQ6BHC%2BdZZnaswiK5mz81R63kOfEtParhcKSbSfpWRN0uBhLbiW2csKG0TU%2B%2FGaTx3oBQHf9nw72LkVay7swyIVEpqwqTNOxq%2F%2FwW5sl1NFLwx179TrvP538idvY6yvI%2BPlexSOrLzBKIRAPMgM014%2FMLNCh45o%2FDzQutj2jvi5rqlS65zz%2B1Hu21EGjRaNTp3qi227dPJWl0tLauTRJN4bPz82B6JNrciGnYy0Jywz6eiyLBp2zWJDgPh6aqHYcjGg%2ByfsYc45mp9pDLXIL4Agnclgdpb8wDQLKw0zepEbNo%2BlpGFdgsEcXub%2B2KyVrdwQdifxE6gTv399%2BYoaUZz9kShAvIxfdR8fmZTmVtlGJidJaxRb6puXwtgW9%2FivTXDaNDUVL2mnaY9C6hhp7PSCLLmx%2Bn%2BCcd6pg2zt7pdm9OFkx36m%2BF1oZps8%2BZiNUPmqA3Lz4FVvPH33iQdpk7zmcSyNObb4i09gseb6l3vrhWUPfS5GmDAxBrBIMNf%2Bub8GOqUB3robrBGlMoO1UTu2uRUGJCfgALoUf7c0pd1k9ag3zbPC%2BHga0gRqrO4QCao%2B8o3ZaLXhwqzTgB8ZuP575VHhZRfi1WaAia90KBzwT3NGFlzudyTHY9uJ0EFyc7iL31sSEU215Yb5qQHbYhk0Aww7QuPV03bxAVK8Vyyn9ebLJ2SIK5ClhbhgiXLod3J0JsHYpezE8DVhZGY0VSsCtthU5tM2XB6r&X-Amz-Signature=887eaaf64d8117c31e073c03dfdf232f9b718990c0d87fcd11c60952d1e2e345&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E6RWIN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbOylrAB0%2B59UHiJOaK1G%2F94Y%2FBLgeFeIGNEltTqSvnAiEAgM8ljPm4b2vTE7EZTSILbAe1fyFYNrdXaqEYyfTy18gqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9%2FEyr4zVuF3Va3tircAzWdI1sXaNgR4T4J2%2FKZ21Lhg4mMPULmJ6YgUqYTb74TjXzAUH4Ad9BRONPGyrjGeYCiJoUK1WpNDi2HL1vLrVAfR31l%2FvNlP2dRgfXzb6HaBZgloUjvogsE8vrXjImgduQ6BHC%2BdZZnaswiK5mz81R63kOfEtParhcKSbSfpWRN0uBhLbiW2csKG0TU%2B%2FGaTx3oBQHf9nw72LkVay7swyIVEpqwqTNOxq%2F%2FwW5sl1NFLwx179TrvP538idvY6yvI%2BPlexSOrLzBKIRAPMgM014%2FMLNCh45o%2FDzQutj2jvi5rqlS65zz%2B1Hu21EGjRaNTp3qi227dPJWl0tLauTRJN4bPz82B6JNrciGnYy0Jywz6eiyLBp2zWJDgPh6aqHYcjGg%2ByfsYc45mp9pDLXIL4Agnclgdpb8wDQLKw0zepEbNo%2BlpGFdgsEcXub%2B2KyVrdwQdifxE6gTv399%2BYoaUZz9kShAvIxfdR8fmZTmVtlGJidJaxRb6puXwtgW9%2FivTXDaNDUVL2mnaY9C6hhp7PSCLLmx%2Bn%2BCcd6pg2zt7pdm9OFkx36m%2BF1oZps8%2BZiNUPmqA3Lz4FVvPH33iQdpk7zmcSyNObb4i09gseb6l3vrhWUPfS5GmDAxBrBIMNf%2Bub8GOqUB3robrBGlMoO1UTu2uRUGJCfgALoUf7c0pd1k9ag3zbPC%2BHga0gRqrO4QCao%2B8o3ZaLXhwqzTgB8ZuP575VHhZRfi1WaAia90KBzwT3NGFlzudyTHY9uJ0EFyc7iL31sSEU215Yb5qQHbYhk0Aww7QuPV03bxAVK8Vyyn9ebLJ2SIK5ClhbhgiXLod3J0JsHYpezE8DVhZGY0VSsCtthU5tM2XB6r&X-Amz-Signature=4a27750571ada8adde36e45ea74d158101c8edc874de6a36140e6c718b5e91ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E6RWIN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbOylrAB0%2B59UHiJOaK1G%2F94Y%2FBLgeFeIGNEltTqSvnAiEAgM8ljPm4b2vTE7EZTSILbAe1fyFYNrdXaqEYyfTy18gqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9%2FEyr4zVuF3Va3tircAzWdI1sXaNgR4T4J2%2FKZ21Lhg4mMPULmJ6YgUqYTb74TjXzAUH4Ad9BRONPGyrjGeYCiJoUK1WpNDi2HL1vLrVAfR31l%2FvNlP2dRgfXzb6HaBZgloUjvogsE8vrXjImgduQ6BHC%2BdZZnaswiK5mz81R63kOfEtParhcKSbSfpWRN0uBhLbiW2csKG0TU%2B%2FGaTx3oBQHf9nw72LkVay7swyIVEpqwqTNOxq%2F%2FwW5sl1NFLwx179TrvP538idvY6yvI%2BPlexSOrLzBKIRAPMgM014%2FMLNCh45o%2FDzQutj2jvi5rqlS65zz%2B1Hu21EGjRaNTp3qi227dPJWl0tLauTRJN4bPz82B6JNrciGnYy0Jywz6eiyLBp2zWJDgPh6aqHYcjGg%2ByfsYc45mp9pDLXIL4Agnclgdpb8wDQLKw0zepEbNo%2BlpGFdgsEcXub%2B2KyVrdwQdifxE6gTv399%2BYoaUZz9kShAvIxfdR8fmZTmVtlGJidJaxRb6puXwtgW9%2FivTXDaNDUVL2mnaY9C6hhp7PSCLLmx%2Bn%2BCcd6pg2zt7pdm9OFkx36m%2BF1oZps8%2BZiNUPmqA3Lz4FVvPH33iQdpk7zmcSyNObb4i09gseb6l3vrhWUPfS5GmDAxBrBIMNf%2Bub8GOqUB3robrBGlMoO1UTu2uRUGJCfgALoUf7c0pd1k9ag3zbPC%2BHga0gRqrO4QCao%2B8o3ZaLXhwqzTgB8ZuP575VHhZRfi1WaAia90KBzwT3NGFlzudyTHY9uJ0EFyc7iL31sSEU215Yb5qQHbYhk0Aww7QuPV03bxAVK8Vyyn9ebLJ2SIK5ClhbhgiXLod3J0JsHYpezE8DVhZGY0VSsCtthU5tM2XB6r&X-Amz-Signature=1ac2bf570b90f85607923240d42d60e1ba062bc098c3275885259a93c5baa9eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E6RWIN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbOylrAB0%2B59UHiJOaK1G%2F94Y%2FBLgeFeIGNEltTqSvnAiEAgM8ljPm4b2vTE7EZTSILbAe1fyFYNrdXaqEYyfTy18gqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9%2FEyr4zVuF3Va3tircAzWdI1sXaNgR4T4J2%2FKZ21Lhg4mMPULmJ6YgUqYTb74TjXzAUH4Ad9BRONPGyrjGeYCiJoUK1WpNDi2HL1vLrVAfR31l%2FvNlP2dRgfXzb6HaBZgloUjvogsE8vrXjImgduQ6BHC%2BdZZnaswiK5mz81R63kOfEtParhcKSbSfpWRN0uBhLbiW2csKG0TU%2B%2FGaTx3oBQHf9nw72LkVay7swyIVEpqwqTNOxq%2F%2FwW5sl1NFLwx179TrvP538idvY6yvI%2BPlexSOrLzBKIRAPMgM014%2FMLNCh45o%2FDzQutj2jvi5rqlS65zz%2B1Hu21EGjRaNTp3qi227dPJWl0tLauTRJN4bPz82B6JNrciGnYy0Jywz6eiyLBp2zWJDgPh6aqHYcjGg%2ByfsYc45mp9pDLXIL4Agnclgdpb8wDQLKw0zepEbNo%2BlpGFdgsEcXub%2B2KyVrdwQdifxE6gTv399%2BYoaUZz9kShAvIxfdR8fmZTmVtlGJidJaxRb6puXwtgW9%2FivTXDaNDUVL2mnaY9C6hhp7PSCLLmx%2Bn%2BCcd6pg2zt7pdm9OFkx36m%2BF1oZps8%2BZiNUPmqA3Lz4FVvPH33iQdpk7zmcSyNObb4i09gseb6l3vrhWUPfS5GmDAxBrBIMNf%2Bub8GOqUB3robrBGlMoO1UTu2uRUGJCfgALoUf7c0pd1k9ag3zbPC%2BHga0gRqrO4QCao%2B8o3ZaLXhwqzTgB8ZuP575VHhZRfi1WaAia90KBzwT3NGFlzudyTHY9uJ0EFyc7iL31sSEU215Yb5qQHbYhk0Aww7QuPV03bxAVK8Vyyn9ebLJ2SIK5ClhbhgiXLod3J0JsHYpezE8DVhZGY0VSsCtthU5tM2XB6r&X-Amz-Signature=4ececf4cee10ce09ab69dae792b554dfd604549d74fdbeecf6ba49b054c88ea5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E6RWIN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbOylrAB0%2B59UHiJOaK1G%2F94Y%2FBLgeFeIGNEltTqSvnAiEAgM8ljPm4b2vTE7EZTSILbAe1fyFYNrdXaqEYyfTy18gqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9%2FEyr4zVuF3Va3tircAzWdI1sXaNgR4T4J2%2FKZ21Lhg4mMPULmJ6YgUqYTb74TjXzAUH4Ad9BRONPGyrjGeYCiJoUK1WpNDi2HL1vLrVAfR31l%2FvNlP2dRgfXzb6HaBZgloUjvogsE8vrXjImgduQ6BHC%2BdZZnaswiK5mz81R63kOfEtParhcKSbSfpWRN0uBhLbiW2csKG0TU%2B%2FGaTx3oBQHf9nw72LkVay7swyIVEpqwqTNOxq%2F%2FwW5sl1NFLwx179TrvP538idvY6yvI%2BPlexSOrLzBKIRAPMgM014%2FMLNCh45o%2FDzQutj2jvi5rqlS65zz%2B1Hu21EGjRaNTp3qi227dPJWl0tLauTRJN4bPz82B6JNrciGnYy0Jywz6eiyLBp2zWJDgPh6aqHYcjGg%2ByfsYc45mp9pDLXIL4Agnclgdpb8wDQLKw0zepEbNo%2BlpGFdgsEcXub%2B2KyVrdwQdifxE6gTv399%2BYoaUZz9kShAvIxfdR8fmZTmVtlGJidJaxRb6puXwtgW9%2FivTXDaNDUVL2mnaY9C6hhp7PSCLLmx%2Bn%2BCcd6pg2zt7pdm9OFkx36m%2BF1oZps8%2BZiNUPmqA3Lz4FVvPH33iQdpk7zmcSyNObb4i09gseb6l3vrhWUPfS5GmDAxBrBIMNf%2Bub8GOqUB3robrBGlMoO1UTu2uRUGJCfgALoUf7c0pd1k9ag3zbPC%2BHga0gRqrO4QCao%2B8o3ZaLXhwqzTgB8ZuP575VHhZRfi1WaAia90KBzwT3NGFlzudyTHY9uJ0EFyc7iL31sSEU215Yb5qQHbYhk0Aww7QuPV03bxAVK8Vyyn9ebLJ2SIK5ClhbhgiXLod3J0JsHYpezE8DVhZGY0VSsCtthU5tM2XB6r&X-Amz-Signature=7bb5988108db212dc8bf9c779ba95a5b96476c2e192b092a517a1d2fa24b2152&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E6RWIN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbOylrAB0%2B59UHiJOaK1G%2F94Y%2FBLgeFeIGNEltTqSvnAiEAgM8ljPm4b2vTE7EZTSILbAe1fyFYNrdXaqEYyfTy18gqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9%2FEyr4zVuF3Va3tircAzWdI1sXaNgR4T4J2%2FKZ21Lhg4mMPULmJ6YgUqYTb74TjXzAUH4Ad9BRONPGyrjGeYCiJoUK1WpNDi2HL1vLrVAfR31l%2FvNlP2dRgfXzb6HaBZgloUjvogsE8vrXjImgduQ6BHC%2BdZZnaswiK5mz81R63kOfEtParhcKSbSfpWRN0uBhLbiW2csKG0TU%2B%2FGaTx3oBQHf9nw72LkVay7swyIVEpqwqTNOxq%2F%2FwW5sl1NFLwx179TrvP538idvY6yvI%2BPlexSOrLzBKIRAPMgM014%2FMLNCh45o%2FDzQutj2jvi5rqlS65zz%2B1Hu21EGjRaNTp3qi227dPJWl0tLauTRJN4bPz82B6JNrciGnYy0Jywz6eiyLBp2zWJDgPh6aqHYcjGg%2ByfsYc45mp9pDLXIL4Agnclgdpb8wDQLKw0zepEbNo%2BlpGFdgsEcXub%2B2KyVrdwQdifxE6gTv399%2BYoaUZz9kShAvIxfdR8fmZTmVtlGJidJaxRb6puXwtgW9%2FivTXDaNDUVL2mnaY9C6hhp7PSCLLmx%2Bn%2BCcd6pg2zt7pdm9OFkx36m%2BF1oZps8%2BZiNUPmqA3Lz4FVvPH33iQdpk7zmcSyNObb4i09gseb6l3vrhWUPfS5GmDAxBrBIMNf%2Bub8GOqUB3robrBGlMoO1UTu2uRUGJCfgALoUf7c0pd1k9ag3zbPC%2BHga0gRqrO4QCao%2B8o3ZaLXhwqzTgB8ZuP575VHhZRfi1WaAia90KBzwT3NGFlzudyTHY9uJ0EFyc7iL31sSEU215Yb5qQHbYhk0Aww7QuPV03bxAVK8Vyyn9ebLJ2SIK5ClhbhgiXLod3J0JsHYpezE8DVhZGY0VSsCtthU5tM2XB6r&X-Amz-Signature=fabffe31618eb676dc877dadcad1f4c9c1b3717b3ddfc36df84ca3e54bc4408b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
