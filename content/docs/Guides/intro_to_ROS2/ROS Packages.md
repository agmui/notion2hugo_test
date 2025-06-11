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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRB2Q7P%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGxIKOTB6MIUGY7ExLXJjcCEFuwVCf7dlA3FcSro9Nf8AiEA0gmtQ7Ug5CxgIymPXBcH1I%2FJtpnTDxnA1SUvA5AMMgMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVorXJo6pw6spdw8ircAx7p2496CI7u6AqolRt7MWgB8%2BM8S0y9BEnijRdVxLW8WhsXuuuREHlSW2Pyt%2FUOIqCqpLEssIi9%2FTp%2FplrJs4sxTLAHTHTlS89x4EP5rhjdZQ7N%2FvTE02A3%2BZmvBJ7CwtRoWCVxKj9PXzoqofZXxipGpPdiE7oJuXSv7WoNYTNkvHt6BHfh71EQssFwq%2BHnkhE%2B6WQHSNTsbpm2IbFNv7wIfap5CFm6Gs1UQltlcjmCWA45drB9USytF6FheTVyci77p%2BuEOR3PkHO1iUQrQ4aDVnhQg3f1rD6vjJSlv9WQH5YQrefvZ0i4912LZUpyuInI15L7xjMdXLtZA0Ia9Desa3g6153l2E9npuypzhM1%2BPUWFdulf3ETUnti22wtP3SAYljfDGDx2Okzd4RAIMlgf2%2F0AjyBVnbC1MbDLBXDw9UWIUU4n9vt0Orpl8Ee%2Fxoga5LZInPP7h8bL0XQ3zgg1KjYC2eVj7nJFGYNOmfTG1SgU87q0zOB4t0PUbcYlI5rVksOgncX%2BEUvPVuD3iQyW05r4a3dSLaWv6IdNE%2Baz8xl7jhDWW%2F6hRfFlfAzg3psIdop7errBjQN9DIiGjL5xzbVHiVhUrIIU77%2BP4pueMj4jnInVNU8GoL4MInJp8IGOqUB2rnjXa05u8b9H%2Bq0beSJq5c7ERQO9QS%2BJwVKN7bdvQz0dqERbuqr8qz7DfkW1xyt0PSV2iN0kDqGchMyMlPKo%2BMIg8fHQR6wZwb%2BCIzl6yaoJl2qMbXdTsFdS1%2BRDnE3WkF40Vr6rETZsKqCYaw%2BCD85clWqLsD79CYoKLbrObCxcce7Ynp2Cdw9dbb8NRWIcHhoPa%2BuO9f7JDQzlZ0QmATqIqbe&X-Amz-Signature=0cf0064b3230537481686637cc6b2b8845a98035074b75b6b4b5110d2eb9af80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRB2Q7P%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGxIKOTB6MIUGY7ExLXJjcCEFuwVCf7dlA3FcSro9Nf8AiEA0gmtQ7Ug5CxgIymPXBcH1I%2FJtpnTDxnA1SUvA5AMMgMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVorXJo6pw6spdw8ircAx7p2496CI7u6AqolRt7MWgB8%2BM8S0y9BEnijRdVxLW8WhsXuuuREHlSW2Pyt%2FUOIqCqpLEssIi9%2FTp%2FplrJs4sxTLAHTHTlS89x4EP5rhjdZQ7N%2FvTE02A3%2BZmvBJ7CwtRoWCVxKj9PXzoqofZXxipGpPdiE7oJuXSv7WoNYTNkvHt6BHfh71EQssFwq%2BHnkhE%2B6WQHSNTsbpm2IbFNv7wIfap5CFm6Gs1UQltlcjmCWA45drB9USytF6FheTVyci77p%2BuEOR3PkHO1iUQrQ4aDVnhQg3f1rD6vjJSlv9WQH5YQrefvZ0i4912LZUpyuInI15L7xjMdXLtZA0Ia9Desa3g6153l2E9npuypzhM1%2BPUWFdulf3ETUnti22wtP3SAYljfDGDx2Okzd4RAIMlgf2%2F0AjyBVnbC1MbDLBXDw9UWIUU4n9vt0Orpl8Ee%2Fxoga5LZInPP7h8bL0XQ3zgg1KjYC2eVj7nJFGYNOmfTG1SgU87q0zOB4t0PUbcYlI5rVksOgncX%2BEUvPVuD3iQyW05r4a3dSLaWv6IdNE%2Baz8xl7jhDWW%2F6hRfFlfAzg3psIdop7errBjQN9DIiGjL5xzbVHiVhUrIIU77%2BP4pueMj4jnInVNU8GoL4MInJp8IGOqUB2rnjXa05u8b9H%2Bq0beSJq5c7ERQO9QS%2BJwVKN7bdvQz0dqERbuqr8qz7DfkW1xyt0PSV2iN0kDqGchMyMlPKo%2BMIg8fHQR6wZwb%2BCIzl6yaoJl2qMbXdTsFdS1%2BRDnE3WkF40Vr6rETZsKqCYaw%2BCD85clWqLsD79CYoKLbrObCxcce7Ynp2Cdw9dbb8NRWIcHhoPa%2BuO9f7JDQzlZ0QmATqIqbe&X-Amz-Signature=0bb0d04a65e6e13595975cc79d3c8d44410312da90025aa18a457c68e83cc2ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRB2Q7P%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGxIKOTB6MIUGY7ExLXJjcCEFuwVCf7dlA3FcSro9Nf8AiEA0gmtQ7Ug5CxgIymPXBcH1I%2FJtpnTDxnA1SUvA5AMMgMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVorXJo6pw6spdw8ircAx7p2496CI7u6AqolRt7MWgB8%2BM8S0y9BEnijRdVxLW8WhsXuuuREHlSW2Pyt%2FUOIqCqpLEssIi9%2FTp%2FplrJs4sxTLAHTHTlS89x4EP5rhjdZQ7N%2FvTE02A3%2BZmvBJ7CwtRoWCVxKj9PXzoqofZXxipGpPdiE7oJuXSv7WoNYTNkvHt6BHfh71EQssFwq%2BHnkhE%2B6WQHSNTsbpm2IbFNv7wIfap5CFm6Gs1UQltlcjmCWA45drB9USytF6FheTVyci77p%2BuEOR3PkHO1iUQrQ4aDVnhQg3f1rD6vjJSlv9WQH5YQrefvZ0i4912LZUpyuInI15L7xjMdXLtZA0Ia9Desa3g6153l2E9npuypzhM1%2BPUWFdulf3ETUnti22wtP3SAYljfDGDx2Okzd4RAIMlgf2%2F0AjyBVnbC1MbDLBXDw9UWIUU4n9vt0Orpl8Ee%2Fxoga5LZInPP7h8bL0XQ3zgg1KjYC2eVj7nJFGYNOmfTG1SgU87q0zOB4t0PUbcYlI5rVksOgncX%2BEUvPVuD3iQyW05r4a3dSLaWv6IdNE%2Baz8xl7jhDWW%2F6hRfFlfAzg3psIdop7errBjQN9DIiGjL5xzbVHiVhUrIIU77%2BP4pueMj4jnInVNU8GoL4MInJp8IGOqUB2rnjXa05u8b9H%2Bq0beSJq5c7ERQO9QS%2BJwVKN7bdvQz0dqERbuqr8qz7DfkW1xyt0PSV2iN0kDqGchMyMlPKo%2BMIg8fHQR6wZwb%2BCIzl6yaoJl2qMbXdTsFdS1%2BRDnE3WkF40Vr6rETZsKqCYaw%2BCD85clWqLsD79CYoKLbrObCxcce7Ynp2Cdw9dbb8NRWIcHhoPa%2BuO9f7JDQzlZ0QmATqIqbe&X-Amz-Signature=4cbf385249a26c7f86d6ca3633316773f0dd0c6844fd5ad359e69fd76a0d0c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRB2Q7P%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGxIKOTB6MIUGY7ExLXJjcCEFuwVCf7dlA3FcSro9Nf8AiEA0gmtQ7Ug5CxgIymPXBcH1I%2FJtpnTDxnA1SUvA5AMMgMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVorXJo6pw6spdw8ircAx7p2496CI7u6AqolRt7MWgB8%2BM8S0y9BEnijRdVxLW8WhsXuuuREHlSW2Pyt%2FUOIqCqpLEssIi9%2FTp%2FplrJs4sxTLAHTHTlS89x4EP5rhjdZQ7N%2FvTE02A3%2BZmvBJ7CwtRoWCVxKj9PXzoqofZXxipGpPdiE7oJuXSv7WoNYTNkvHt6BHfh71EQssFwq%2BHnkhE%2B6WQHSNTsbpm2IbFNv7wIfap5CFm6Gs1UQltlcjmCWA45drB9USytF6FheTVyci77p%2BuEOR3PkHO1iUQrQ4aDVnhQg3f1rD6vjJSlv9WQH5YQrefvZ0i4912LZUpyuInI15L7xjMdXLtZA0Ia9Desa3g6153l2E9npuypzhM1%2BPUWFdulf3ETUnti22wtP3SAYljfDGDx2Okzd4RAIMlgf2%2F0AjyBVnbC1MbDLBXDw9UWIUU4n9vt0Orpl8Ee%2Fxoga5LZInPP7h8bL0XQ3zgg1KjYC2eVj7nJFGYNOmfTG1SgU87q0zOB4t0PUbcYlI5rVksOgncX%2BEUvPVuD3iQyW05r4a3dSLaWv6IdNE%2Baz8xl7jhDWW%2F6hRfFlfAzg3psIdop7errBjQN9DIiGjL5xzbVHiVhUrIIU77%2BP4pueMj4jnInVNU8GoL4MInJp8IGOqUB2rnjXa05u8b9H%2Bq0beSJq5c7ERQO9QS%2BJwVKN7bdvQz0dqERbuqr8qz7DfkW1xyt0PSV2iN0kDqGchMyMlPKo%2BMIg8fHQR6wZwb%2BCIzl6yaoJl2qMbXdTsFdS1%2BRDnE3WkF40Vr6rETZsKqCYaw%2BCD85clWqLsD79CYoKLbrObCxcce7Ynp2Cdw9dbb8NRWIcHhoPa%2BuO9f7JDQzlZ0QmATqIqbe&X-Amz-Signature=87d52762766252f5b4c221ffadd92e7260389ba5093d24467adae4d846fe27dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRB2Q7P%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGxIKOTB6MIUGY7ExLXJjcCEFuwVCf7dlA3FcSro9Nf8AiEA0gmtQ7Ug5CxgIymPXBcH1I%2FJtpnTDxnA1SUvA5AMMgMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVorXJo6pw6spdw8ircAx7p2496CI7u6AqolRt7MWgB8%2BM8S0y9BEnijRdVxLW8WhsXuuuREHlSW2Pyt%2FUOIqCqpLEssIi9%2FTp%2FplrJs4sxTLAHTHTlS89x4EP5rhjdZQ7N%2FvTE02A3%2BZmvBJ7CwtRoWCVxKj9PXzoqofZXxipGpPdiE7oJuXSv7WoNYTNkvHt6BHfh71EQssFwq%2BHnkhE%2B6WQHSNTsbpm2IbFNv7wIfap5CFm6Gs1UQltlcjmCWA45drB9USytF6FheTVyci77p%2BuEOR3PkHO1iUQrQ4aDVnhQg3f1rD6vjJSlv9WQH5YQrefvZ0i4912LZUpyuInI15L7xjMdXLtZA0Ia9Desa3g6153l2E9npuypzhM1%2BPUWFdulf3ETUnti22wtP3SAYljfDGDx2Okzd4RAIMlgf2%2F0AjyBVnbC1MbDLBXDw9UWIUU4n9vt0Orpl8Ee%2Fxoga5LZInPP7h8bL0XQ3zgg1KjYC2eVj7nJFGYNOmfTG1SgU87q0zOB4t0PUbcYlI5rVksOgncX%2BEUvPVuD3iQyW05r4a3dSLaWv6IdNE%2Baz8xl7jhDWW%2F6hRfFlfAzg3psIdop7errBjQN9DIiGjL5xzbVHiVhUrIIU77%2BP4pueMj4jnInVNU8GoL4MInJp8IGOqUB2rnjXa05u8b9H%2Bq0beSJq5c7ERQO9QS%2BJwVKN7bdvQz0dqERbuqr8qz7DfkW1xyt0PSV2iN0kDqGchMyMlPKo%2BMIg8fHQR6wZwb%2BCIzl6yaoJl2qMbXdTsFdS1%2BRDnE3WkF40Vr6rETZsKqCYaw%2BCD85clWqLsD79CYoKLbrObCxcce7Ynp2Cdw9dbb8NRWIcHhoPa%2BuO9f7JDQzlZ0QmATqIqbe&X-Amz-Signature=38dc357aa782e814a654e24c6c5f8f85c489d3e4e5753b3eaf244a4b88e8b15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRB2Q7P%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGxIKOTB6MIUGY7ExLXJjcCEFuwVCf7dlA3FcSro9Nf8AiEA0gmtQ7Ug5CxgIymPXBcH1I%2FJtpnTDxnA1SUvA5AMMgMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVorXJo6pw6spdw8ircAx7p2496CI7u6AqolRt7MWgB8%2BM8S0y9BEnijRdVxLW8WhsXuuuREHlSW2Pyt%2FUOIqCqpLEssIi9%2FTp%2FplrJs4sxTLAHTHTlS89x4EP5rhjdZQ7N%2FvTE02A3%2BZmvBJ7CwtRoWCVxKj9PXzoqofZXxipGpPdiE7oJuXSv7WoNYTNkvHt6BHfh71EQssFwq%2BHnkhE%2B6WQHSNTsbpm2IbFNv7wIfap5CFm6Gs1UQltlcjmCWA45drB9USytF6FheTVyci77p%2BuEOR3PkHO1iUQrQ4aDVnhQg3f1rD6vjJSlv9WQH5YQrefvZ0i4912LZUpyuInI15L7xjMdXLtZA0Ia9Desa3g6153l2E9npuypzhM1%2BPUWFdulf3ETUnti22wtP3SAYljfDGDx2Okzd4RAIMlgf2%2F0AjyBVnbC1MbDLBXDw9UWIUU4n9vt0Orpl8Ee%2Fxoga5LZInPP7h8bL0XQ3zgg1KjYC2eVj7nJFGYNOmfTG1SgU87q0zOB4t0PUbcYlI5rVksOgncX%2BEUvPVuD3iQyW05r4a3dSLaWv6IdNE%2Baz8xl7jhDWW%2F6hRfFlfAzg3psIdop7errBjQN9DIiGjL5xzbVHiVhUrIIU77%2BP4pueMj4jnInVNU8GoL4MInJp8IGOqUB2rnjXa05u8b9H%2Bq0beSJq5c7ERQO9QS%2BJwVKN7bdvQz0dqERbuqr8qz7DfkW1xyt0PSV2iN0kDqGchMyMlPKo%2BMIg8fHQR6wZwb%2BCIzl6yaoJl2qMbXdTsFdS1%2BRDnE3WkF40Vr6rETZsKqCYaw%2BCD85clWqLsD79CYoKLbrObCxcce7Ynp2Cdw9dbb8NRWIcHhoPa%2BuO9f7JDQzlZ0QmATqIqbe&X-Amz-Signature=675b290f2053dbb4acddc5dfb418feb9f9340cb244a690e254d9f63a2fec72f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRB2Q7P%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGxIKOTB6MIUGY7ExLXJjcCEFuwVCf7dlA3FcSro9Nf8AiEA0gmtQ7Ug5CxgIymPXBcH1I%2FJtpnTDxnA1SUvA5AMMgMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVorXJo6pw6spdw8ircAx7p2496CI7u6AqolRt7MWgB8%2BM8S0y9BEnijRdVxLW8WhsXuuuREHlSW2Pyt%2FUOIqCqpLEssIi9%2FTp%2FplrJs4sxTLAHTHTlS89x4EP5rhjdZQ7N%2FvTE02A3%2BZmvBJ7CwtRoWCVxKj9PXzoqofZXxipGpPdiE7oJuXSv7WoNYTNkvHt6BHfh71EQssFwq%2BHnkhE%2B6WQHSNTsbpm2IbFNv7wIfap5CFm6Gs1UQltlcjmCWA45drB9USytF6FheTVyci77p%2BuEOR3PkHO1iUQrQ4aDVnhQg3f1rD6vjJSlv9WQH5YQrefvZ0i4912LZUpyuInI15L7xjMdXLtZA0Ia9Desa3g6153l2E9npuypzhM1%2BPUWFdulf3ETUnti22wtP3SAYljfDGDx2Okzd4RAIMlgf2%2F0AjyBVnbC1MbDLBXDw9UWIUU4n9vt0Orpl8Ee%2Fxoga5LZInPP7h8bL0XQ3zgg1KjYC2eVj7nJFGYNOmfTG1SgU87q0zOB4t0PUbcYlI5rVksOgncX%2BEUvPVuD3iQyW05r4a3dSLaWv6IdNE%2Baz8xl7jhDWW%2F6hRfFlfAzg3psIdop7errBjQN9DIiGjL5xzbVHiVhUrIIU77%2BP4pueMj4jnInVNU8GoL4MInJp8IGOqUB2rnjXa05u8b9H%2Bq0beSJq5c7ERQO9QS%2BJwVKN7bdvQz0dqERbuqr8qz7DfkW1xyt0PSV2iN0kDqGchMyMlPKo%2BMIg8fHQR6wZwb%2BCIzl6yaoJl2qMbXdTsFdS1%2BRDnE3WkF40Vr6rETZsKqCYaw%2BCD85clWqLsD79CYoKLbrObCxcce7Ynp2Cdw9dbb8NRWIcHhoPa%2BuO9f7JDQzlZ0QmATqIqbe&X-Amz-Signature=4b01309aae6c113179716fb7683e5a0b4f83a08d9db75f50447be348b2fb87ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
