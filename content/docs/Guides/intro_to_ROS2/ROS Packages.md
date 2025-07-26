---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLASWE6M%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEXPMJrmma%2BcMrRlsJvb6ot%2FMUh36WsIItXqSi8xpjczAiBdT76Kn7acBnSATSC%2FGIEpS5unWie%2BNklLc7hoMa0GfCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMV%2Bi18dzY6jc02MKNKtwD1bnRvFR4q4x3ptFDmRclALh7R0z3qttWif%2B%2BcIWfpr6srqTVuId3IbDODx9bICOs9RJbVlbJKBdux6dp4qfaETa4QfPYkfXDLUVuRV%2BZcCe%2FqdC4XRKsmmmv9vBm881XpDNE5uoe%2BGZsAxXa016xqidw3l6iJru3cBID0%2FrNuT%2F6G5g37%2FY9w87CO0xk9orpZByiOj06JTKUXQMuorIHKwN7cfJ4pq%2B75LmAueMdYmDNRA0FkAClwRcsNTVr0y7wpWZQgXwfIFDfzgqynb0GqCIrArSoSq5RQiPA174HT9IUEora2Ako%2BgQjhK%2FTC82dCUJW6gv73rtvSRWTpjyCYY39%2FgqMnwUvqQIjAx4j9esPikeQyUQVZ9B%2F3NXKxsJh0mJX8CexbhtNFWoSE5ADBObE47prhAGH6%2BtMqh6lhln8tOGGu8yx71GyYNAHdC184jHfXLoum9abN0Adcuw9B7hF1XYQjmLl3RuIn4mpCoxBuj3Uxj3jmS1sDzCaGqioUmWpK5N4fRHVa2LKcIbh6ZgOKHkNXs%2FmHVJhpzjbcEidXYvs70Jx%2BXbFz8CkbWQSJRe%2BnJgr3XvdrooDZA6LhI0HocVUPc%2FCPEpd3aoQhd51URU8VBMgIO1VoFYwhdmUxAY6pgGPA0ROp0NegNuS6N%2FjVFQiUGUEsCKYfqbU%2F3tnIEtxq3%2FJPXnSElJTvrzGwx9rwihyz2pvNXjuFbucvFU%2Fsffdk2SaLaWB3jAzJ4%2BuPDd6OEQKcX2WEcUdtRu5NK7jbMVza52wVNqUIcr4BxmI00VyOxC14AJjT0KHpYRrA8FVxvgiFSIoC%2BRWfUzWDbPyM7%2B9PV1z%2BhoOM9EGSM90SMEv3pfezXno&X-Amz-Signature=e4c3acf2cd96e6f233f6433b9a0a9d0f5ee68da3cdac6f6fc229c4587842bcb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLASWE6M%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEXPMJrmma%2BcMrRlsJvb6ot%2FMUh36WsIItXqSi8xpjczAiBdT76Kn7acBnSATSC%2FGIEpS5unWie%2BNklLc7hoMa0GfCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMV%2Bi18dzY6jc02MKNKtwD1bnRvFR4q4x3ptFDmRclALh7R0z3qttWif%2B%2BcIWfpr6srqTVuId3IbDODx9bICOs9RJbVlbJKBdux6dp4qfaETa4QfPYkfXDLUVuRV%2BZcCe%2FqdC4XRKsmmmv9vBm881XpDNE5uoe%2BGZsAxXa016xqidw3l6iJru3cBID0%2FrNuT%2F6G5g37%2FY9w87CO0xk9orpZByiOj06JTKUXQMuorIHKwN7cfJ4pq%2B75LmAueMdYmDNRA0FkAClwRcsNTVr0y7wpWZQgXwfIFDfzgqynb0GqCIrArSoSq5RQiPA174HT9IUEora2Ako%2BgQjhK%2FTC82dCUJW6gv73rtvSRWTpjyCYY39%2FgqMnwUvqQIjAx4j9esPikeQyUQVZ9B%2F3NXKxsJh0mJX8CexbhtNFWoSE5ADBObE47prhAGH6%2BtMqh6lhln8tOGGu8yx71GyYNAHdC184jHfXLoum9abN0Adcuw9B7hF1XYQjmLl3RuIn4mpCoxBuj3Uxj3jmS1sDzCaGqioUmWpK5N4fRHVa2LKcIbh6ZgOKHkNXs%2FmHVJhpzjbcEidXYvs70Jx%2BXbFz8CkbWQSJRe%2BnJgr3XvdrooDZA6LhI0HocVUPc%2FCPEpd3aoQhd51URU8VBMgIO1VoFYwhdmUxAY6pgGPA0ROp0NegNuS6N%2FjVFQiUGUEsCKYfqbU%2F3tnIEtxq3%2FJPXnSElJTvrzGwx9rwihyz2pvNXjuFbucvFU%2Fsffdk2SaLaWB3jAzJ4%2BuPDd6OEQKcX2WEcUdtRu5NK7jbMVza52wVNqUIcr4BxmI00VyOxC14AJjT0KHpYRrA8FVxvgiFSIoC%2BRWfUzWDbPyM7%2B9PV1z%2BhoOM9EGSM90SMEv3pfezXno&X-Amz-Signature=306d2fa3ffdbd3ac21f7c89887e6386506e03eba51fb3c00fdec2d1311998d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLASWE6M%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEXPMJrmma%2BcMrRlsJvb6ot%2FMUh36WsIItXqSi8xpjczAiBdT76Kn7acBnSATSC%2FGIEpS5unWie%2BNklLc7hoMa0GfCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMV%2Bi18dzY6jc02MKNKtwD1bnRvFR4q4x3ptFDmRclALh7R0z3qttWif%2B%2BcIWfpr6srqTVuId3IbDODx9bICOs9RJbVlbJKBdux6dp4qfaETa4QfPYkfXDLUVuRV%2BZcCe%2FqdC4XRKsmmmv9vBm881XpDNE5uoe%2BGZsAxXa016xqidw3l6iJru3cBID0%2FrNuT%2F6G5g37%2FY9w87CO0xk9orpZByiOj06JTKUXQMuorIHKwN7cfJ4pq%2B75LmAueMdYmDNRA0FkAClwRcsNTVr0y7wpWZQgXwfIFDfzgqynb0GqCIrArSoSq5RQiPA174HT9IUEora2Ako%2BgQjhK%2FTC82dCUJW6gv73rtvSRWTpjyCYY39%2FgqMnwUvqQIjAx4j9esPikeQyUQVZ9B%2F3NXKxsJh0mJX8CexbhtNFWoSE5ADBObE47prhAGH6%2BtMqh6lhln8tOGGu8yx71GyYNAHdC184jHfXLoum9abN0Adcuw9B7hF1XYQjmLl3RuIn4mpCoxBuj3Uxj3jmS1sDzCaGqioUmWpK5N4fRHVa2LKcIbh6ZgOKHkNXs%2FmHVJhpzjbcEidXYvs70Jx%2BXbFz8CkbWQSJRe%2BnJgr3XvdrooDZA6LhI0HocVUPc%2FCPEpd3aoQhd51URU8VBMgIO1VoFYwhdmUxAY6pgGPA0ROp0NegNuS6N%2FjVFQiUGUEsCKYfqbU%2F3tnIEtxq3%2FJPXnSElJTvrzGwx9rwihyz2pvNXjuFbucvFU%2Fsffdk2SaLaWB3jAzJ4%2BuPDd6OEQKcX2WEcUdtRu5NK7jbMVza52wVNqUIcr4BxmI00VyOxC14AJjT0KHpYRrA8FVxvgiFSIoC%2BRWfUzWDbPyM7%2B9PV1z%2BhoOM9EGSM90SMEv3pfezXno&X-Amz-Signature=15ee9be39ca7457c6c702b9e7705efdc3646fc2f831fcf68b66c80a0b1d57e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLASWE6M%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEXPMJrmma%2BcMrRlsJvb6ot%2FMUh36WsIItXqSi8xpjczAiBdT76Kn7acBnSATSC%2FGIEpS5unWie%2BNklLc7hoMa0GfCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMV%2Bi18dzY6jc02MKNKtwD1bnRvFR4q4x3ptFDmRclALh7R0z3qttWif%2B%2BcIWfpr6srqTVuId3IbDODx9bICOs9RJbVlbJKBdux6dp4qfaETa4QfPYkfXDLUVuRV%2BZcCe%2FqdC4XRKsmmmv9vBm881XpDNE5uoe%2BGZsAxXa016xqidw3l6iJru3cBID0%2FrNuT%2F6G5g37%2FY9w87CO0xk9orpZByiOj06JTKUXQMuorIHKwN7cfJ4pq%2B75LmAueMdYmDNRA0FkAClwRcsNTVr0y7wpWZQgXwfIFDfzgqynb0GqCIrArSoSq5RQiPA174HT9IUEora2Ako%2BgQjhK%2FTC82dCUJW6gv73rtvSRWTpjyCYY39%2FgqMnwUvqQIjAx4j9esPikeQyUQVZ9B%2F3NXKxsJh0mJX8CexbhtNFWoSE5ADBObE47prhAGH6%2BtMqh6lhln8tOGGu8yx71GyYNAHdC184jHfXLoum9abN0Adcuw9B7hF1XYQjmLl3RuIn4mpCoxBuj3Uxj3jmS1sDzCaGqioUmWpK5N4fRHVa2LKcIbh6ZgOKHkNXs%2FmHVJhpzjbcEidXYvs70Jx%2BXbFz8CkbWQSJRe%2BnJgr3XvdrooDZA6LhI0HocVUPc%2FCPEpd3aoQhd51URU8VBMgIO1VoFYwhdmUxAY6pgGPA0ROp0NegNuS6N%2FjVFQiUGUEsCKYfqbU%2F3tnIEtxq3%2FJPXnSElJTvrzGwx9rwihyz2pvNXjuFbucvFU%2Fsffdk2SaLaWB3jAzJ4%2BuPDd6OEQKcX2WEcUdtRu5NK7jbMVza52wVNqUIcr4BxmI00VyOxC14AJjT0KHpYRrA8FVxvgiFSIoC%2BRWfUzWDbPyM7%2B9PV1z%2BhoOM9EGSM90SMEv3pfezXno&X-Amz-Signature=899c44089e3989d2b5db30e0451091a5ed93f1cca3f7fc7e0a04762123d39777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLASWE6M%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEXPMJrmma%2BcMrRlsJvb6ot%2FMUh36WsIItXqSi8xpjczAiBdT76Kn7acBnSATSC%2FGIEpS5unWie%2BNklLc7hoMa0GfCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMV%2Bi18dzY6jc02MKNKtwD1bnRvFR4q4x3ptFDmRclALh7R0z3qttWif%2B%2BcIWfpr6srqTVuId3IbDODx9bICOs9RJbVlbJKBdux6dp4qfaETa4QfPYkfXDLUVuRV%2BZcCe%2FqdC4XRKsmmmv9vBm881XpDNE5uoe%2BGZsAxXa016xqidw3l6iJru3cBID0%2FrNuT%2F6G5g37%2FY9w87CO0xk9orpZByiOj06JTKUXQMuorIHKwN7cfJ4pq%2B75LmAueMdYmDNRA0FkAClwRcsNTVr0y7wpWZQgXwfIFDfzgqynb0GqCIrArSoSq5RQiPA174HT9IUEora2Ako%2BgQjhK%2FTC82dCUJW6gv73rtvSRWTpjyCYY39%2FgqMnwUvqQIjAx4j9esPikeQyUQVZ9B%2F3NXKxsJh0mJX8CexbhtNFWoSE5ADBObE47prhAGH6%2BtMqh6lhln8tOGGu8yx71GyYNAHdC184jHfXLoum9abN0Adcuw9B7hF1XYQjmLl3RuIn4mpCoxBuj3Uxj3jmS1sDzCaGqioUmWpK5N4fRHVa2LKcIbh6ZgOKHkNXs%2FmHVJhpzjbcEidXYvs70Jx%2BXbFz8CkbWQSJRe%2BnJgr3XvdrooDZA6LhI0HocVUPc%2FCPEpd3aoQhd51URU8VBMgIO1VoFYwhdmUxAY6pgGPA0ROp0NegNuS6N%2FjVFQiUGUEsCKYfqbU%2F3tnIEtxq3%2FJPXnSElJTvrzGwx9rwihyz2pvNXjuFbucvFU%2Fsffdk2SaLaWB3jAzJ4%2BuPDd6OEQKcX2WEcUdtRu5NK7jbMVza52wVNqUIcr4BxmI00VyOxC14AJjT0KHpYRrA8FVxvgiFSIoC%2BRWfUzWDbPyM7%2B9PV1z%2BhoOM9EGSM90SMEv3pfezXno&X-Amz-Signature=2e5a45d8b72bb52d1bfe4662162da7d1513a00c97f411547d087208a400ab801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLASWE6M%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEXPMJrmma%2BcMrRlsJvb6ot%2FMUh36WsIItXqSi8xpjczAiBdT76Kn7acBnSATSC%2FGIEpS5unWie%2BNklLc7hoMa0GfCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMV%2Bi18dzY6jc02MKNKtwD1bnRvFR4q4x3ptFDmRclALh7R0z3qttWif%2B%2BcIWfpr6srqTVuId3IbDODx9bICOs9RJbVlbJKBdux6dp4qfaETa4QfPYkfXDLUVuRV%2BZcCe%2FqdC4XRKsmmmv9vBm881XpDNE5uoe%2BGZsAxXa016xqidw3l6iJru3cBID0%2FrNuT%2F6G5g37%2FY9w87CO0xk9orpZByiOj06JTKUXQMuorIHKwN7cfJ4pq%2B75LmAueMdYmDNRA0FkAClwRcsNTVr0y7wpWZQgXwfIFDfzgqynb0GqCIrArSoSq5RQiPA174HT9IUEora2Ako%2BgQjhK%2FTC82dCUJW6gv73rtvSRWTpjyCYY39%2FgqMnwUvqQIjAx4j9esPikeQyUQVZ9B%2F3NXKxsJh0mJX8CexbhtNFWoSE5ADBObE47prhAGH6%2BtMqh6lhln8tOGGu8yx71GyYNAHdC184jHfXLoum9abN0Adcuw9B7hF1XYQjmLl3RuIn4mpCoxBuj3Uxj3jmS1sDzCaGqioUmWpK5N4fRHVa2LKcIbh6ZgOKHkNXs%2FmHVJhpzjbcEidXYvs70Jx%2BXbFz8CkbWQSJRe%2BnJgr3XvdrooDZA6LhI0HocVUPc%2FCPEpd3aoQhd51URU8VBMgIO1VoFYwhdmUxAY6pgGPA0ROp0NegNuS6N%2FjVFQiUGUEsCKYfqbU%2F3tnIEtxq3%2FJPXnSElJTvrzGwx9rwihyz2pvNXjuFbucvFU%2Fsffdk2SaLaWB3jAzJ4%2BuPDd6OEQKcX2WEcUdtRu5NK7jbMVza52wVNqUIcr4BxmI00VyOxC14AJjT0KHpYRrA8FVxvgiFSIoC%2BRWfUzWDbPyM7%2B9PV1z%2BhoOM9EGSM90SMEv3pfezXno&X-Amz-Signature=01f4009f5527c6b3ff4daad4fa42fd1e64d8131d36abdabd3104bec0a78a5806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLASWE6M%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEXPMJrmma%2BcMrRlsJvb6ot%2FMUh36WsIItXqSi8xpjczAiBdT76Kn7acBnSATSC%2FGIEpS5unWie%2BNklLc7hoMa0GfCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMV%2Bi18dzY6jc02MKNKtwD1bnRvFR4q4x3ptFDmRclALh7R0z3qttWif%2B%2BcIWfpr6srqTVuId3IbDODx9bICOs9RJbVlbJKBdux6dp4qfaETa4QfPYkfXDLUVuRV%2BZcCe%2FqdC4XRKsmmmv9vBm881XpDNE5uoe%2BGZsAxXa016xqidw3l6iJru3cBID0%2FrNuT%2F6G5g37%2FY9w87CO0xk9orpZByiOj06JTKUXQMuorIHKwN7cfJ4pq%2B75LmAueMdYmDNRA0FkAClwRcsNTVr0y7wpWZQgXwfIFDfzgqynb0GqCIrArSoSq5RQiPA174HT9IUEora2Ako%2BgQjhK%2FTC82dCUJW6gv73rtvSRWTpjyCYY39%2FgqMnwUvqQIjAx4j9esPikeQyUQVZ9B%2F3NXKxsJh0mJX8CexbhtNFWoSE5ADBObE47prhAGH6%2BtMqh6lhln8tOGGu8yx71GyYNAHdC184jHfXLoum9abN0Adcuw9B7hF1XYQjmLl3RuIn4mpCoxBuj3Uxj3jmS1sDzCaGqioUmWpK5N4fRHVa2LKcIbh6ZgOKHkNXs%2FmHVJhpzjbcEidXYvs70Jx%2BXbFz8CkbWQSJRe%2BnJgr3XvdrooDZA6LhI0HocVUPc%2FCPEpd3aoQhd51URU8VBMgIO1VoFYwhdmUxAY6pgGPA0ROp0NegNuS6N%2FjVFQiUGUEsCKYfqbU%2F3tnIEtxq3%2FJPXnSElJTvrzGwx9rwihyz2pvNXjuFbucvFU%2Fsffdk2SaLaWB3jAzJ4%2BuPDd6OEQKcX2WEcUdtRu5NK7jbMVza52wVNqUIcr4BxmI00VyOxC14AJjT0KHpYRrA8FVxvgiFSIoC%2BRWfUzWDbPyM7%2B9PV1z%2BhoOM9EGSM90SMEv3pfezXno&X-Amz-Signature=8e718dd24c88e6ede24d0ec7f76b97e9c561aee68bb82c1db3f9828d110ee771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
