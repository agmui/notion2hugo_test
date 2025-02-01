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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTE5LYDR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtSSY4RoltqOzY5jSlvnBVC4Se5gzruC5ERAr8QTeF1AIgYrYjTtOHcew0Iwn4DHosh95ePXTMD2BBgkqZnpjAafMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOONYVH%2FjJo0iin1%2BircA5ORJ5OZbLAsNq4M8v9zigM3AvitV6K9TsE8kMk3onYvhonb5PHZ6L5kRdVLhX1tcBHUF3m032AUPTghuJfy9krzLXJry5%2B%2FpjcFrZEt7up4a%2BS2sV460RsvDEh%2Ftd8ERQ3oVH3TeVWmTdrOpjEU7pcqcOaSW4E43aDNs%2FHR%2BWmsCitdkEKR1O3QvgXZlS4jWmmky70whYAQMNBzGQocT3qmYlmX%2BZuWm1683UMfTYAW6tk0r80dqtRHdSfxxXovgduO5Xrm62O%2BXIf%2FkNr44wmRXl2LPC8j%2FZLxJNWvpEcV3JkC5ckOELz9MbHY0TzlSjpPmShpaXi8iKQGgFQekclQBc2GGRPh85dKITAA9HYfMTwVSODSacmOSMuepFSbmB4A55Mp9DdYxBtiDrWhE%2F858G5Ci8UqUWgC7RQ1m7DIkVGJOucf2KjEsh5E67k7D6WX%2FROYvJJ7dwsLGBybECF8%2FTVAzf5b5VZ200bAgTGSO5Koti6rmoUUMafqIEwxDzLqsPj%2BYHTKnb8FWT%2FMB1vB6ulLeRuDfgiyXYd6bOJQI4I1BqznW0quiy3Q3D0b3XnbTkA9V4LmTo1sTiZt%2B8ZrUm1V7Q4nJHtAWZSIDZEsrrclZkRhxD%2F7IpmsMNfu9bwGOqUBCYu1LDTG%2BEt4zk%2FfvkuWauwxtGiK570cGPR0GlnmvuEiDZFKRbWh7Y4j9ow0hjR2iSZByiPCt%2BTlfsSSaPHeafYi1UjizoA78uN6MOHus1GDeVTvo%2BVdYzsdaxf2Zz4%2FsWhvA%2BFZqGsOqfwiGUn3SdAzVzPq8sdk%2F7Z3dk0UXr0usdLkEhkRTRXviyKt98pKven5mEVpxAako8N1l5k4MP9WHmhu&X-Amz-Signature=80c7173749a8562abe96156c0fa944d59d37a6a3a13729aac8c252cfdda91b61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTE5LYDR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtSSY4RoltqOzY5jSlvnBVC4Se5gzruC5ERAr8QTeF1AIgYrYjTtOHcew0Iwn4DHosh95ePXTMD2BBgkqZnpjAafMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOONYVH%2FjJo0iin1%2BircA5ORJ5OZbLAsNq4M8v9zigM3AvitV6K9TsE8kMk3onYvhonb5PHZ6L5kRdVLhX1tcBHUF3m032AUPTghuJfy9krzLXJry5%2B%2FpjcFrZEt7up4a%2BS2sV460RsvDEh%2Ftd8ERQ3oVH3TeVWmTdrOpjEU7pcqcOaSW4E43aDNs%2FHR%2BWmsCitdkEKR1O3QvgXZlS4jWmmky70whYAQMNBzGQocT3qmYlmX%2BZuWm1683UMfTYAW6tk0r80dqtRHdSfxxXovgduO5Xrm62O%2BXIf%2FkNr44wmRXl2LPC8j%2FZLxJNWvpEcV3JkC5ckOELz9MbHY0TzlSjpPmShpaXi8iKQGgFQekclQBc2GGRPh85dKITAA9HYfMTwVSODSacmOSMuepFSbmB4A55Mp9DdYxBtiDrWhE%2F858G5Ci8UqUWgC7RQ1m7DIkVGJOucf2KjEsh5E67k7D6WX%2FROYvJJ7dwsLGBybECF8%2FTVAzf5b5VZ200bAgTGSO5Koti6rmoUUMafqIEwxDzLqsPj%2BYHTKnb8FWT%2FMB1vB6ulLeRuDfgiyXYd6bOJQI4I1BqznW0quiy3Q3D0b3XnbTkA9V4LmTo1sTiZt%2B8ZrUm1V7Q4nJHtAWZSIDZEsrrclZkRhxD%2F7IpmsMNfu9bwGOqUBCYu1LDTG%2BEt4zk%2FfvkuWauwxtGiK570cGPR0GlnmvuEiDZFKRbWh7Y4j9ow0hjR2iSZByiPCt%2BTlfsSSaPHeafYi1UjizoA78uN6MOHus1GDeVTvo%2BVdYzsdaxf2Zz4%2FsWhvA%2BFZqGsOqfwiGUn3SdAzVzPq8sdk%2F7Z3dk0UXr0usdLkEhkRTRXviyKt98pKven5mEVpxAako8N1l5k4MP9WHmhu&X-Amz-Signature=2e468f9ff3a845e9c6ffc10e63c8e2e84cc081699e594d5a82859f0f09e64b4f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTE5LYDR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtSSY4RoltqOzY5jSlvnBVC4Se5gzruC5ERAr8QTeF1AIgYrYjTtOHcew0Iwn4DHosh95ePXTMD2BBgkqZnpjAafMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOONYVH%2FjJo0iin1%2BircA5ORJ5OZbLAsNq4M8v9zigM3AvitV6K9TsE8kMk3onYvhonb5PHZ6L5kRdVLhX1tcBHUF3m032AUPTghuJfy9krzLXJry5%2B%2FpjcFrZEt7up4a%2BS2sV460RsvDEh%2Ftd8ERQ3oVH3TeVWmTdrOpjEU7pcqcOaSW4E43aDNs%2FHR%2BWmsCitdkEKR1O3QvgXZlS4jWmmky70whYAQMNBzGQocT3qmYlmX%2BZuWm1683UMfTYAW6tk0r80dqtRHdSfxxXovgduO5Xrm62O%2BXIf%2FkNr44wmRXl2LPC8j%2FZLxJNWvpEcV3JkC5ckOELz9MbHY0TzlSjpPmShpaXi8iKQGgFQekclQBc2GGRPh85dKITAA9HYfMTwVSODSacmOSMuepFSbmB4A55Mp9DdYxBtiDrWhE%2F858G5Ci8UqUWgC7RQ1m7DIkVGJOucf2KjEsh5E67k7D6WX%2FROYvJJ7dwsLGBybECF8%2FTVAzf5b5VZ200bAgTGSO5Koti6rmoUUMafqIEwxDzLqsPj%2BYHTKnb8FWT%2FMB1vB6ulLeRuDfgiyXYd6bOJQI4I1BqznW0quiy3Q3D0b3XnbTkA9V4LmTo1sTiZt%2B8ZrUm1V7Q4nJHtAWZSIDZEsrrclZkRhxD%2F7IpmsMNfu9bwGOqUBCYu1LDTG%2BEt4zk%2FfvkuWauwxtGiK570cGPR0GlnmvuEiDZFKRbWh7Y4j9ow0hjR2iSZByiPCt%2BTlfsSSaPHeafYi1UjizoA78uN6MOHus1GDeVTvo%2BVdYzsdaxf2Zz4%2FsWhvA%2BFZqGsOqfwiGUn3SdAzVzPq8sdk%2F7Z3dk0UXr0usdLkEhkRTRXviyKt98pKven5mEVpxAako8N1l5k4MP9WHmhu&X-Amz-Signature=9dd458eab1cc12f9c69cbba8143a3e48d80a16866939fb0082f8d7e1c0559fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTE5LYDR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtSSY4RoltqOzY5jSlvnBVC4Se5gzruC5ERAr8QTeF1AIgYrYjTtOHcew0Iwn4DHosh95ePXTMD2BBgkqZnpjAafMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOONYVH%2FjJo0iin1%2BircA5ORJ5OZbLAsNq4M8v9zigM3AvitV6K9TsE8kMk3onYvhonb5PHZ6L5kRdVLhX1tcBHUF3m032AUPTghuJfy9krzLXJry5%2B%2FpjcFrZEt7up4a%2BS2sV460RsvDEh%2Ftd8ERQ3oVH3TeVWmTdrOpjEU7pcqcOaSW4E43aDNs%2FHR%2BWmsCitdkEKR1O3QvgXZlS4jWmmky70whYAQMNBzGQocT3qmYlmX%2BZuWm1683UMfTYAW6tk0r80dqtRHdSfxxXovgduO5Xrm62O%2BXIf%2FkNr44wmRXl2LPC8j%2FZLxJNWvpEcV3JkC5ckOELz9MbHY0TzlSjpPmShpaXi8iKQGgFQekclQBc2GGRPh85dKITAA9HYfMTwVSODSacmOSMuepFSbmB4A55Mp9DdYxBtiDrWhE%2F858G5Ci8UqUWgC7RQ1m7DIkVGJOucf2KjEsh5E67k7D6WX%2FROYvJJ7dwsLGBybECF8%2FTVAzf5b5VZ200bAgTGSO5Koti6rmoUUMafqIEwxDzLqsPj%2BYHTKnb8FWT%2FMB1vB6ulLeRuDfgiyXYd6bOJQI4I1BqznW0quiy3Q3D0b3XnbTkA9V4LmTo1sTiZt%2B8ZrUm1V7Q4nJHtAWZSIDZEsrrclZkRhxD%2F7IpmsMNfu9bwGOqUBCYu1LDTG%2BEt4zk%2FfvkuWauwxtGiK570cGPR0GlnmvuEiDZFKRbWh7Y4j9ow0hjR2iSZByiPCt%2BTlfsSSaPHeafYi1UjizoA78uN6MOHus1GDeVTvo%2BVdYzsdaxf2Zz4%2FsWhvA%2BFZqGsOqfwiGUn3SdAzVzPq8sdk%2F7Z3dk0UXr0usdLkEhkRTRXviyKt98pKven5mEVpxAako8N1l5k4MP9WHmhu&X-Amz-Signature=b415851a23cb037765f4d856fe0c247506e4f2bbf646ab56046ac41acd454bfd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTE5LYDR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtSSY4RoltqOzY5jSlvnBVC4Se5gzruC5ERAr8QTeF1AIgYrYjTtOHcew0Iwn4DHosh95ePXTMD2BBgkqZnpjAafMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOONYVH%2FjJo0iin1%2BircA5ORJ5OZbLAsNq4M8v9zigM3AvitV6K9TsE8kMk3onYvhonb5PHZ6L5kRdVLhX1tcBHUF3m032AUPTghuJfy9krzLXJry5%2B%2FpjcFrZEt7up4a%2BS2sV460RsvDEh%2Ftd8ERQ3oVH3TeVWmTdrOpjEU7pcqcOaSW4E43aDNs%2FHR%2BWmsCitdkEKR1O3QvgXZlS4jWmmky70whYAQMNBzGQocT3qmYlmX%2BZuWm1683UMfTYAW6tk0r80dqtRHdSfxxXovgduO5Xrm62O%2BXIf%2FkNr44wmRXl2LPC8j%2FZLxJNWvpEcV3JkC5ckOELz9MbHY0TzlSjpPmShpaXi8iKQGgFQekclQBc2GGRPh85dKITAA9HYfMTwVSODSacmOSMuepFSbmB4A55Mp9DdYxBtiDrWhE%2F858G5Ci8UqUWgC7RQ1m7DIkVGJOucf2KjEsh5E67k7D6WX%2FROYvJJ7dwsLGBybECF8%2FTVAzf5b5VZ200bAgTGSO5Koti6rmoUUMafqIEwxDzLqsPj%2BYHTKnb8FWT%2FMB1vB6ulLeRuDfgiyXYd6bOJQI4I1BqznW0quiy3Q3D0b3XnbTkA9V4LmTo1sTiZt%2B8ZrUm1V7Q4nJHtAWZSIDZEsrrclZkRhxD%2F7IpmsMNfu9bwGOqUBCYu1LDTG%2BEt4zk%2FfvkuWauwxtGiK570cGPR0GlnmvuEiDZFKRbWh7Y4j9ow0hjR2iSZByiPCt%2BTlfsSSaPHeafYi1UjizoA78uN6MOHus1GDeVTvo%2BVdYzsdaxf2Zz4%2FsWhvA%2BFZqGsOqfwiGUn3SdAzVzPq8sdk%2F7Z3dk0UXr0usdLkEhkRTRXviyKt98pKven5mEVpxAako8N1l5k4MP9WHmhu&X-Amz-Signature=01296967b5020ea23ed9271b4ab241f429fdfcb24ec655e3642b3b52b3fa81a1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTE5LYDR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtSSY4RoltqOzY5jSlvnBVC4Se5gzruC5ERAr8QTeF1AIgYrYjTtOHcew0Iwn4DHosh95ePXTMD2BBgkqZnpjAafMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOONYVH%2FjJo0iin1%2BircA5ORJ5OZbLAsNq4M8v9zigM3AvitV6K9TsE8kMk3onYvhonb5PHZ6L5kRdVLhX1tcBHUF3m032AUPTghuJfy9krzLXJry5%2B%2FpjcFrZEt7up4a%2BS2sV460RsvDEh%2Ftd8ERQ3oVH3TeVWmTdrOpjEU7pcqcOaSW4E43aDNs%2FHR%2BWmsCitdkEKR1O3QvgXZlS4jWmmky70whYAQMNBzGQocT3qmYlmX%2BZuWm1683UMfTYAW6tk0r80dqtRHdSfxxXovgduO5Xrm62O%2BXIf%2FkNr44wmRXl2LPC8j%2FZLxJNWvpEcV3JkC5ckOELz9MbHY0TzlSjpPmShpaXi8iKQGgFQekclQBc2GGRPh85dKITAA9HYfMTwVSODSacmOSMuepFSbmB4A55Mp9DdYxBtiDrWhE%2F858G5Ci8UqUWgC7RQ1m7DIkVGJOucf2KjEsh5E67k7D6WX%2FROYvJJ7dwsLGBybECF8%2FTVAzf5b5VZ200bAgTGSO5Koti6rmoUUMafqIEwxDzLqsPj%2BYHTKnb8FWT%2FMB1vB6ulLeRuDfgiyXYd6bOJQI4I1BqznW0quiy3Q3D0b3XnbTkA9V4LmTo1sTiZt%2B8ZrUm1V7Q4nJHtAWZSIDZEsrrclZkRhxD%2F7IpmsMNfu9bwGOqUBCYu1LDTG%2BEt4zk%2FfvkuWauwxtGiK570cGPR0GlnmvuEiDZFKRbWh7Y4j9ow0hjR2iSZByiPCt%2BTlfsSSaPHeafYi1UjizoA78uN6MOHus1GDeVTvo%2BVdYzsdaxf2Zz4%2FsWhvA%2BFZqGsOqfwiGUn3SdAzVzPq8sdk%2F7Z3dk0UXr0usdLkEhkRTRXviyKt98pKven5mEVpxAako8N1l5k4MP9WHmhu&X-Amz-Signature=4b177654db3936d6e8c12e036d0773f607902999c9273dfd6deacda3234a360a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTE5LYDR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtSSY4RoltqOzY5jSlvnBVC4Se5gzruC5ERAr8QTeF1AIgYrYjTtOHcew0Iwn4DHosh95ePXTMD2BBgkqZnpjAafMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOONYVH%2FjJo0iin1%2BircA5ORJ5OZbLAsNq4M8v9zigM3AvitV6K9TsE8kMk3onYvhonb5PHZ6L5kRdVLhX1tcBHUF3m032AUPTghuJfy9krzLXJry5%2B%2FpjcFrZEt7up4a%2BS2sV460RsvDEh%2Ftd8ERQ3oVH3TeVWmTdrOpjEU7pcqcOaSW4E43aDNs%2FHR%2BWmsCitdkEKR1O3QvgXZlS4jWmmky70whYAQMNBzGQocT3qmYlmX%2BZuWm1683UMfTYAW6tk0r80dqtRHdSfxxXovgduO5Xrm62O%2BXIf%2FkNr44wmRXl2LPC8j%2FZLxJNWvpEcV3JkC5ckOELz9MbHY0TzlSjpPmShpaXi8iKQGgFQekclQBc2GGRPh85dKITAA9HYfMTwVSODSacmOSMuepFSbmB4A55Mp9DdYxBtiDrWhE%2F858G5Ci8UqUWgC7RQ1m7DIkVGJOucf2KjEsh5E67k7D6WX%2FROYvJJ7dwsLGBybECF8%2FTVAzf5b5VZ200bAgTGSO5Koti6rmoUUMafqIEwxDzLqsPj%2BYHTKnb8FWT%2FMB1vB6ulLeRuDfgiyXYd6bOJQI4I1BqznW0quiy3Q3D0b3XnbTkA9V4LmTo1sTiZt%2B8ZrUm1V7Q4nJHtAWZSIDZEsrrclZkRhxD%2F7IpmsMNfu9bwGOqUBCYu1LDTG%2BEt4zk%2FfvkuWauwxtGiK570cGPR0GlnmvuEiDZFKRbWh7Y4j9ow0hjR2iSZByiPCt%2BTlfsSSaPHeafYi1UjizoA78uN6MOHus1GDeVTvo%2BVdYzsdaxf2Zz4%2FsWhvA%2BFZqGsOqfwiGUn3SdAzVzPq8sdk%2F7Z3dk0UXr0usdLkEhkRTRXviyKt98pKven5mEVpxAako8N1l5k4MP9WHmhu&X-Amz-Signature=e3871a15a62f4813d402bcd9d74099ba9122dcd50ec71fb29f2097d7b507f09b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
