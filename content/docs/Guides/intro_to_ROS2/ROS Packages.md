---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSRK6EJZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBlR9rl6D57EyTRc2uDDeKtwCl5%2BL7QLvEatTLvRq9CQIgcHtp3PEYUk4f%2BcM1nNobwCjjG6SD177axcIlPYrexe4qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9xWAnrcStugvLwJircA%2FIPEdJNmNR7gqZqm48dvZCHj%2F1xAIyVj%2Fkb21YCpIvVbvwAnW%2FtyVOOC4%2BZq8Qunz9n1YJhV8L06P9g47bVI9G3RT1gn8rUNlj7pq5VwQHJP1t9fhIwT%2FJH%2FIwjU%2F7u1l%2F4OJqMFVxBLfwjQwcG9zdwlee1f3JKyiBAbwL%2BuHK4G9V%2B7rKGqXBVauryRGuLYaeo8mrdZxCftMpklrMjqMS5XG185T50sXKE5DmtcxGElUAWYuBLCs%2F0x3Di%2BCm%2BdhGi%2Fsjl8pwxtigPUaIGZ9L1HTGL81D9z8eobttVu7HwRdOaF49Mssq%2FuyHR6yrycFZNC9JZFLGpgmnVaGQWsJuD4Yd1RviH%2Bu46TjFCPLEe3PzQcizzQZc6jxXQt4bdTnbBy4DV62B%2F%2BfBf27kjv3gemr%2BPtoUTiXhHtYOLu9KTMbhH6VfjRFxMIl%2FmyTr%2Fahyon%2FvD6Vul0Mtx%2BYoEcn%2BWOiHnyW0BJ4FUIEBVmKmST1%2FtTHndLLuVq%2F6OzX%2B67GY1FAJZAPpUjUIQQe45Cm5sM%2BfC1glYQlPE%2FpHhA1GjqgYxOOehxkN5A%2BBUvS0Deg0Hs5Z4G9S0C1MAKo8WOS9KuB%2FNIcbLowOXJicSG%2FFZAZhF630IWIWZTNpVMMDJrr0GOqUBTzK2yEBpuWK8qdkgeVp8cp1Okrd3LMgKIsKU5PckAI9w1rGbPFz8kx%2F0o8xPoyQoZKwwugz1y5rlPn7hSMlfp%2Bs%2FduJZuMJKPq8FL35V3bpzUb4hpIx09NjXw0dFVPcnFVTaC78EcPiPdz6FO9sPxZAUui5OyfaXl3mDboUvDCC7%2Bg%2FPPGklrdMb3QLYmHLwyHEbYOi1bZN%2BGf%2BAjJRACDt7%2BdbL&X-Amz-Signature=6a13d74097217033421a52383bf6465d2da2e7b3b0328eca0b54d856c7dff869&X-Amz-SignedHeaders=host&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSRK6EJZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBlR9rl6D57EyTRc2uDDeKtwCl5%2BL7QLvEatTLvRq9CQIgcHtp3PEYUk4f%2BcM1nNobwCjjG6SD177axcIlPYrexe4qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9xWAnrcStugvLwJircA%2FIPEdJNmNR7gqZqm48dvZCHj%2F1xAIyVj%2Fkb21YCpIvVbvwAnW%2FtyVOOC4%2BZq8Qunz9n1YJhV8L06P9g47bVI9G3RT1gn8rUNlj7pq5VwQHJP1t9fhIwT%2FJH%2FIwjU%2F7u1l%2F4OJqMFVxBLfwjQwcG9zdwlee1f3JKyiBAbwL%2BuHK4G9V%2B7rKGqXBVauryRGuLYaeo8mrdZxCftMpklrMjqMS5XG185T50sXKE5DmtcxGElUAWYuBLCs%2F0x3Di%2BCm%2BdhGi%2Fsjl8pwxtigPUaIGZ9L1HTGL81D9z8eobttVu7HwRdOaF49Mssq%2FuyHR6yrycFZNC9JZFLGpgmnVaGQWsJuD4Yd1RviH%2Bu46TjFCPLEe3PzQcizzQZc6jxXQt4bdTnbBy4DV62B%2F%2BfBf27kjv3gemr%2BPtoUTiXhHtYOLu9KTMbhH6VfjRFxMIl%2FmyTr%2Fahyon%2FvD6Vul0Mtx%2BYoEcn%2BWOiHnyW0BJ4FUIEBVmKmST1%2FtTHndLLuVq%2F6OzX%2B67GY1FAJZAPpUjUIQQe45Cm5sM%2BfC1glYQlPE%2FpHhA1GjqgYxOOehxkN5A%2BBUvS0Deg0Hs5Z4G9S0C1MAKo8WOS9KuB%2FNIcbLowOXJicSG%2FFZAZhF630IWIWZTNpVMMDJrr0GOqUBTzK2yEBpuWK8qdkgeVp8cp1Okrd3LMgKIsKU5PckAI9w1rGbPFz8kx%2F0o8xPoyQoZKwwugz1y5rlPn7hSMlfp%2Bs%2FduJZuMJKPq8FL35V3bpzUb4hpIx09NjXw0dFVPcnFVTaC78EcPiPdz6FO9sPxZAUui5OyfaXl3mDboUvDCC7%2Bg%2FPPGklrdMb3QLYmHLwyHEbYOi1bZN%2BGf%2BAjJRACDt7%2BdbL&X-Amz-Signature=7f6992736b4cadfafcf55bfa0f684f54bdb56e16d0d07fc8046db59a161747d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSRK6EJZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBlR9rl6D57EyTRc2uDDeKtwCl5%2BL7QLvEatTLvRq9CQIgcHtp3PEYUk4f%2BcM1nNobwCjjG6SD177axcIlPYrexe4qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9xWAnrcStugvLwJircA%2FIPEdJNmNR7gqZqm48dvZCHj%2F1xAIyVj%2Fkb21YCpIvVbvwAnW%2FtyVOOC4%2BZq8Qunz9n1YJhV8L06P9g47bVI9G3RT1gn8rUNlj7pq5VwQHJP1t9fhIwT%2FJH%2FIwjU%2F7u1l%2F4OJqMFVxBLfwjQwcG9zdwlee1f3JKyiBAbwL%2BuHK4G9V%2B7rKGqXBVauryRGuLYaeo8mrdZxCftMpklrMjqMS5XG185T50sXKE5DmtcxGElUAWYuBLCs%2F0x3Di%2BCm%2BdhGi%2Fsjl8pwxtigPUaIGZ9L1HTGL81D9z8eobttVu7HwRdOaF49Mssq%2FuyHR6yrycFZNC9JZFLGpgmnVaGQWsJuD4Yd1RviH%2Bu46TjFCPLEe3PzQcizzQZc6jxXQt4bdTnbBy4DV62B%2F%2BfBf27kjv3gemr%2BPtoUTiXhHtYOLu9KTMbhH6VfjRFxMIl%2FmyTr%2Fahyon%2FvD6Vul0Mtx%2BYoEcn%2BWOiHnyW0BJ4FUIEBVmKmST1%2FtTHndLLuVq%2F6OzX%2B67GY1FAJZAPpUjUIQQe45Cm5sM%2BfC1glYQlPE%2FpHhA1GjqgYxOOehxkN5A%2BBUvS0Deg0Hs5Z4G9S0C1MAKo8WOS9KuB%2FNIcbLowOXJicSG%2FFZAZhF630IWIWZTNpVMMDJrr0GOqUBTzK2yEBpuWK8qdkgeVp8cp1Okrd3LMgKIsKU5PckAI9w1rGbPFz8kx%2F0o8xPoyQoZKwwugz1y5rlPn7hSMlfp%2Bs%2FduJZuMJKPq8FL35V3bpzUb4hpIx09NjXw0dFVPcnFVTaC78EcPiPdz6FO9sPxZAUui5OyfaXl3mDboUvDCC7%2Bg%2FPPGklrdMb3QLYmHLwyHEbYOi1bZN%2BGf%2BAjJRACDt7%2BdbL&X-Amz-Signature=db9c51924f1153b2ca11f8e1d693e02c9f6aceb786ae34b5a0393483b276f45c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSRK6EJZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBlR9rl6D57EyTRc2uDDeKtwCl5%2BL7QLvEatTLvRq9CQIgcHtp3PEYUk4f%2BcM1nNobwCjjG6SD177axcIlPYrexe4qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9xWAnrcStugvLwJircA%2FIPEdJNmNR7gqZqm48dvZCHj%2F1xAIyVj%2Fkb21YCpIvVbvwAnW%2FtyVOOC4%2BZq8Qunz9n1YJhV8L06P9g47bVI9G3RT1gn8rUNlj7pq5VwQHJP1t9fhIwT%2FJH%2FIwjU%2F7u1l%2F4OJqMFVxBLfwjQwcG9zdwlee1f3JKyiBAbwL%2BuHK4G9V%2B7rKGqXBVauryRGuLYaeo8mrdZxCftMpklrMjqMS5XG185T50sXKE5DmtcxGElUAWYuBLCs%2F0x3Di%2BCm%2BdhGi%2Fsjl8pwxtigPUaIGZ9L1HTGL81D9z8eobttVu7HwRdOaF49Mssq%2FuyHR6yrycFZNC9JZFLGpgmnVaGQWsJuD4Yd1RviH%2Bu46TjFCPLEe3PzQcizzQZc6jxXQt4bdTnbBy4DV62B%2F%2BfBf27kjv3gemr%2BPtoUTiXhHtYOLu9KTMbhH6VfjRFxMIl%2FmyTr%2Fahyon%2FvD6Vul0Mtx%2BYoEcn%2BWOiHnyW0BJ4FUIEBVmKmST1%2FtTHndLLuVq%2F6OzX%2B67GY1FAJZAPpUjUIQQe45Cm5sM%2BfC1glYQlPE%2FpHhA1GjqgYxOOehxkN5A%2BBUvS0Deg0Hs5Z4G9S0C1MAKo8WOS9KuB%2FNIcbLowOXJicSG%2FFZAZhF630IWIWZTNpVMMDJrr0GOqUBTzK2yEBpuWK8qdkgeVp8cp1Okrd3LMgKIsKU5PckAI9w1rGbPFz8kx%2F0o8xPoyQoZKwwugz1y5rlPn7hSMlfp%2Bs%2FduJZuMJKPq8FL35V3bpzUb4hpIx09NjXw0dFVPcnFVTaC78EcPiPdz6FO9sPxZAUui5OyfaXl3mDboUvDCC7%2Bg%2FPPGklrdMb3QLYmHLwyHEbYOi1bZN%2BGf%2BAjJRACDt7%2BdbL&X-Amz-Signature=45ad5b8416a57366d5085f593e26d3d7e6014c4b7806ccf3af2f01da5b498e99&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSRK6EJZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBlR9rl6D57EyTRc2uDDeKtwCl5%2BL7QLvEatTLvRq9CQIgcHtp3PEYUk4f%2BcM1nNobwCjjG6SD177axcIlPYrexe4qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9xWAnrcStugvLwJircA%2FIPEdJNmNR7gqZqm48dvZCHj%2F1xAIyVj%2Fkb21YCpIvVbvwAnW%2FtyVOOC4%2BZq8Qunz9n1YJhV8L06P9g47bVI9G3RT1gn8rUNlj7pq5VwQHJP1t9fhIwT%2FJH%2FIwjU%2F7u1l%2F4OJqMFVxBLfwjQwcG9zdwlee1f3JKyiBAbwL%2BuHK4G9V%2B7rKGqXBVauryRGuLYaeo8mrdZxCftMpklrMjqMS5XG185T50sXKE5DmtcxGElUAWYuBLCs%2F0x3Di%2BCm%2BdhGi%2Fsjl8pwxtigPUaIGZ9L1HTGL81D9z8eobttVu7HwRdOaF49Mssq%2FuyHR6yrycFZNC9JZFLGpgmnVaGQWsJuD4Yd1RviH%2Bu46TjFCPLEe3PzQcizzQZc6jxXQt4bdTnbBy4DV62B%2F%2BfBf27kjv3gemr%2BPtoUTiXhHtYOLu9KTMbhH6VfjRFxMIl%2FmyTr%2Fahyon%2FvD6Vul0Mtx%2BYoEcn%2BWOiHnyW0BJ4FUIEBVmKmST1%2FtTHndLLuVq%2F6OzX%2B67GY1FAJZAPpUjUIQQe45Cm5sM%2BfC1glYQlPE%2FpHhA1GjqgYxOOehxkN5A%2BBUvS0Deg0Hs5Z4G9S0C1MAKo8WOS9KuB%2FNIcbLowOXJicSG%2FFZAZhF630IWIWZTNpVMMDJrr0GOqUBTzK2yEBpuWK8qdkgeVp8cp1Okrd3LMgKIsKU5PckAI9w1rGbPFz8kx%2F0o8xPoyQoZKwwugz1y5rlPn7hSMlfp%2Bs%2FduJZuMJKPq8FL35V3bpzUb4hpIx09NjXw0dFVPcnFVTaC78EcPiPdz6FO9sPxZAUui5OyfaXl3mDboUvDCC7%2Bg%2FPPGklrdMb3QLYmHLwyHEbYOi1bZN%2BGf%2BAjJRACDt7%2BdbL&X-Amz-Signature=6900a65bd7f2a6f3e499229ca43968b815d8e7e79b27dd3424d86bbe141059a0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSRK6EJZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBlR9rl6D57EyTRc2uDDeKtwCl5%2BL7QLvEatTLvRq9CQIgcHtp3PEYUk4f%2BcM1nNobwCjjG6SD177axcIlPYrexe4qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9xWAnrcStugvLwJircA%2FIPEdJNmNR7gqZqm48dvZCHj%2F1xAIyVj%2Fkb21YCpIvVbvwAnW%2FtyVOOC4%2BZq8Qunz9n1YJhV8L06P9g47bVI9G3RT1gn8rUNlj7pq5VwQHJP1t9fhIwT%2FJH%2FIwjU%2F7u1l%2F4OJqMFVxBLfwjQwcG9zdwlee1f3JKyiBAbwL%2BuHK4G9V%2B7rKGqXBVauryRGuLYaeo8mrdZxCftMpklrMjqMS5XG185T50sXKE5DmtcxGElUAWYuBLCs%2F0x3Di%2BCm%2BdhGi%2Fsjl8pwxtigPUaIGZ9L1HTGL81D9z8eobttVu7HwRdOaF49Mssq%2FuyHR6yrycFZNC9JZFLGpgmnVaGQWsJuD4Yd1RviH%2Bu46TjFCPLEe3PzQcizzQZc6jxXQt4bdTnbBy4DV62B%2F%2BfBf27kjv3gemr%2BPtoUTiXhHtYOLu9KTMbhH6VfjRFxMIl%2FmyTr%2Fahyon%2FvD6Vul0Mtx%2BYoEcn%2BWOiHnyW0BJ4FUIEBVmKmST1%2FtTHndLLuVq%2F6OzX%2B67GY1FAJZAPpUjUIQQe45Cm5sM%2BfC1glYQlPE%2FpHhA1GjqgYxOOehxkN5A%2BBUvS0Deg0Hs5Z4G9S0C1MAKo8WOS9KuB%2FNIcbLowOXJicSG%2FFZAZhF630IWIWZTNpVMMDJrr0GOqUBTzK2yEBpuWK8qdkgeVp8cp1Okrd3LMgKIsKU5PckAI9w1rGbPFz8kx%2F0o8xPoyQoZKwwugz1y5rlPn7hSMlfp%2Bs%2FduJZuMJKPq8FL35V3bpzUb4hpIx09NjXw0dFVPcnFVTaC78EcPiPdz6FO9sPxZAUui5OyfaXl3mDboUvDCC7%2Bg%2FPPGklrdMb3QLYmHLwyHEbYOi1bZN%2BGf%2BAjJRACDt7%2BdbL&X-Amz-Signature=c2031e93a753e239b20d395bc99bc3355689526d0e9eb2de556c08f85a0e1ca5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSRK6EJZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBlR9rl6D57EyTRc2uDDeKtwCl5%2BL7QLvEatTLvRq9CQIgcHtp3PEYUk4f%2BcM1nNobwCjjG6SD177axcIlPYrexe4qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9xWAnrcStugvLwJircA%2FIPEdJNmNR7gqZqm48dvZCHj%2F1xAIyVj%2Fkb21YCpIvVbvwAnW%2FtyVOOC4%2BZq8Qunz9n1YJhV8L06P9g47bVI9G3RT1gn8rUNlj7pq5VwQHJP1t9fhIwT%2FJH%2FIwjU%2F7u1l%2F4OJqMFVxBLfwjQwcG9zdwlee1f3JKyiBAbwL%2BuHK4G9V%2B7rKGqXBVauryRGuLYaeo8mrdZxCftMpklrMjqMS5XG185T50sXKE5DmtcxGElUAWYuBLCs%2F0x3Di%2BCm%2BdhGi%2Fsjl8pwxtigPUaIGZ9L1HTGL81D9z8eobttVu7HwRdOaF49Mssq%2FuyHR6yrycFZNC9JZFLGpgmnVaGQWsJuD4Yd1RviH%2Bu46TjFCPLEe3PzQcizzQZc6jxXQt4bdTnbBy4DV62B%2F%2BfBf27kjv3gemr%2BPtoUTiXhHtYOLu9KTMbhH6VfjRFxMIl%2FmyTr%2Fahyon%2FvD6Vul0Mtx%2BYoEcn%2BWOiHnyW0BJ4FUIEBVmKmST1%2FtTHndLLuVq%2F6OzX%2B67GY1FAJZAPpUjUIQQe45Cm5sM%2BfC1glYQlPE%2FpHhA1GjqgYxOOehxkN5A%2BBUvS0Deg0Hs5Z4G9S0C1MAKo8WOS9KuB%2FNIcbLowOXJicSG%2FFZAZhF630IWIWZTNpVMMDJrr0GOqUBTzK2yEBpuWK8qdkgeVp8cp1Okrd3LMgKIsKU5PckAI9w1rGbPFz8kx%2F0o8xPoyQoZKwwugz1y5rlPn7hSMlfp%2Bs%2FduJZuMJKPq8FL35V3bpzUb4hpIx09NjXw0dFVPcnFVTaC78EcPiPdz6FO9sPxZAUui5OyfaXl3mDboUvDCC7%2Bg%2FPPGklrdMb3QLYmHLwyHEbYOi1bZN%2BGf%2BAjJRACDt7%2BdbL&X-Amz-Signature=b3eba8cfa49d61a8d9b834fad838986d16a95d43edefa76148c12b99440ccc6d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
