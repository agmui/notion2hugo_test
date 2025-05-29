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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZTCBRY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMCvwyhJJdf3ajRCgQyY7R9VzOKsaM90LYV%2FNaLGov8AiEApL8YY9X%2F6Iz8GXd0ftGUtDotUOanxKRCnP%2BAVkGDxWwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCsHYxr0IZi2U1%2BkSrcA1AEmQHefa6gD5%2BRAuy5EGDXpUBidkiR47KK%2F9LUNe%2F0wzGXp4ZnmV6WgMNcB5%2Fg%2FQyH83apmDGMA7ngTcplbgTortHfdMn%2FAcorfLPPNJ73fPf9dbaCk0StcK8floXqAeOy%2FJqWSs2sGPnqm2KTzZfFF0fWxhZ4kZNCxhlNRLwwttmBCzXjtTc%2FF0L7uJyCycWTqQs%2BADS6UfHLvG%2F5G2QD9dQJlpggWEwjB8HxdjMFKuGpQIlNOOSc3czeyLUrhYfTSpOgTV0qOV2y%2F8XKWL6PBZZUgirdSc8M%2FFzKlT%2BYvn3S13upeS5T5tRCiDZKyjYfVS5cl%2BgrUK%2BE6mdh0wljecOFgkgBylddU6EUP08TP3tTVhSJqUDeacdKBhmIn2wF4HgOgQSdnBTroyh8UiElxbApXk3IcpInfteEFp1svQOHrzdmH8l9cUEAYAQNSLnL7A5LihjMnIvOcjPgB08dADOKccNV%2FPI1CmbbzM6Oz%2F%2F%2BHN6QXVHrl7Md8enAFUFJmyD%2BVx8rCRqMWmPT4OsObPEFO%2FaJdC%2F6H72a7DstJSTY853qep8NSu%2FROeD2bNKtuGPjPIxYnsqOwvS2fBKwBRWuDx8r7xEFMAbFHvnghncie8xVfIFqOxorMJGy4cEGOqUBic7u4%2Bz7Yj3aCONlmgGjF%2FSHpqchNl%2FLR%2FB53TEcuKfIrz5ncpNGKzeNj1OQUo7gXwtSJnKvOFITd%2BpcDP3m9QfXTfSALXiijm1SFujpMjVtZTddgM3v5TGURvOyyL1L0BUwNyjnI2UGAstOQJSd7wIKA7T5DrZ7oZCgOnte0nMZLOa34bhSzOcNMreDRKIP3aRFZ8G0C%2FcxMUXj5NJJtynXSJSx&X-Amz-Signature=5d0ff1e63b8b3c18ed0bac34a128515c53b0c79e839d9eeb9b23da007b21dd24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZTCBRY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMCvwyhJJdf3ajRCgQyY7R9VzOKsaM90LYV%2FNaLGov8AiEApL8YY9X%2F6Iz8GXd0ftGUtDotUOanxKRCnP%2BAVkGDxWwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCsHYxr0IZi2U1%2BkSrcA1AEmQHefa6gD5%2BRAuy5EGDXpUBidkiR47KK%2F9LUNe%2F0wzGXp4ZnmV6WgMNcB5%2Fg%2FQyH83apmDGMA7ngTcplbgTortHfdMn%2FAcorfLPPNJ73fPf9dbaCk0StcK8floXqAeOy%2FJqWSs2sGPnqm2KTzZfFF0fWxhZ4kZNCxhlNRLwwttmBCzXjtTc%2FF0L7uJyCycWTqQs%2BADS6UfHLvG%2F5G2QD9dQJlpggWEwjB8HxdjMFKuGpQIlNOOSc3czeyLUrhYfTSpOgTV0qOV2y%2F8XKWL6PBZZUgirdSc8M%2FFzKlT%2BYvn3S13upeS5T5tRCiDZKyjYfVS5cl%2BgrUK%2BE6mdh0wljecOFgkgBylddU6EUP08TP3tTVhSJqUDeacdKBhmIn2wF4HgOgQSdnBTroyh8UiElxbApXk3IcpInfteEFp1svQOHrzdmH8l9cUEAYAQNSLnL7A5LihjMnIvOcjPgB08dADOKccNV%2FPI1CmbbzM6Oz%2F%2F%2BHN6QXVHrl7Md8enAFUFJmyD%2BVx8rCRqMWmPT4OsObPEFO%2FaJdC%2F6H72a7DstJSTY853qep8NSu%2FROeD2bNKtuGPjPIxYnsqOwvS2fBKwBRWuDx8r7xEFMAbFHvnghncie8xVfIFqOxorMJGy4cEGOqUBic7u4%2Bz7Yj3aCONlmgGjF%2FSHpqchNl%2FLR%2FB53TEcuKfIrz5ncpNGKzeNj1OQUo7gXwtSJnKvOFITd%2BpcDP3m9QfXTfSALXiijm1SFujpMjVtZTddgM3v5TGURvOyyL1L0BUwNyjnI2UGAstOQJSd7wIKA7T5DrZ7oZCgOnte0nMZLOa34bhSzOcNMreDRKIP3aRFZ8G0C%2FcxMUXj5NJJtynXSJSx&X-Amz-Signature=90b981dc972305155bf5eb79bf641c603aa9d253af51ae70add6b9763044763a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZTCBRY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMCvwyhJJdf3ajRCgQyY7R9VzOKsaM90LYV%2FNaLGov8AiEApL8YY9X%2F6Iz8GXd0ftGUtDotUOanxKRCnP%2BAVkGDxWwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCsHYxr0IZi2U1%2BkSrcA1AEmQHefa6gD5%2BRAuy5EGDXpUBidkiR47KK%2F9LUNe%2F0wzGXp4ZnmV6WgMNcB5%2Fg%2FQyH83apmDGMA7ngTcplbgTortHfdMn%2FAcorfLPPNJ73fPf9dbaCk0StcK8floXqAeOy%2FJqWSs2sGPnqm2KTzZfFF0fWxhZ4kZNCxhlNRLwwttmBCzXjtTc%2FF0L7uJyCycWTqQs%2BADS6UfHLvG%2F5G2QD9dQJlpggWEwjB8HxdjMFKuGpQIlNOOSc3czeyLUrhYfTSpOgTV0qOV2y%2F8XKWL6PBZZUgirdSc8M%2FFzKlT%2BYvn3S13upeS5T5tRCiDZKyjYfVS5cl%2BgrUK%2BE6mdh0wljecOFgkgBylddU6EUP08TP3tTVhSJqUDeacdKBhmIn2wF4HgOgQSdnBTroyh8UiElxbApXk3IcpInfteEFp1svQOHrzdmH8l9cUEAYAQNSLnL7A5LihjMnIvOcjPgB08dADOKccNV%2FPI1CmbbzM6Oz%2F%2F%2BHN6QXVHrl7Md8enAFUFJmyD%2BVx8rCRqMWmPT4OsObPEFO%2FaJdC%2F6H72a7DstJSTY853qep8NSu%2FROeD2bNKtuGPjPIxYnsqOwvS2fBKwBRWuDx8r7xEFMAbFHvnghncie8xVfIFqOxorMJGy4cEGOqUBic7u4%2Bz7Yj3aCONlmgGjF%2FSHpqchNl%2FLR%2FB53TEcuKfIrz5ncpNGKzeNj1OQUo7gXwtSJnKvOFITd%2BpcDP3m9QfXTfSALXiijm1SFujpMjVtZTddgM3v5TGURvOyyL1L0BUwNyjnI2UGAstOQJSd7wIKA7T5DrZ7oZCgOnte0nMZLOa34bhSzOcNMreDRKIP3aRFZ8G0C%2FcxMUXj5NJJtynXSJSx&X-Amz-Signature=eec910686df6e5663501067540d44b51120d09418323a708d41bfc73b440fcf2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZTCBRY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMCvwyhJJdf3ajRCgQyY7R9VzOKsaM90LYV%2FNaLGov8AiEApL8YY9X%2F6Iz8GXd0ftGUtDotUOanxKRCnP%2BAVkGDxWwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCsHYxr0IZi2U1%2BkSrcA1AEmQHefa6gD5%2BRAuy5EGDXpUBidkiR47KK%2F9LUNe%2F0wzGXp4ZnmV6WgMNcB5%2Fg%2FQyH83apmDGMA7ngTcplbgTortHfdMn%2FAcorfLPPNJ73fPf9dbaCk0StcK8floXqAeOy%2FJqWSs2sGPnqm2KTzZfFF0fWxhZ4kZNCxhlNRLwwttmBCzXjtTc%2FF0L7uJyCycWTqQs%2BADS6UfHLvG%2F5G2QD9dQJlpggWEwjB8HxdjMFKuGpQIlNOOSc3czeyLUrhYfTSpOgTV0qOV2y%2F8XKWL6PBZZUgirdSc8M%2FFzKlT%2BYvn3S13upeS5T5tRCiDZKyjYfVS5cl%2BgrUK%2BE6mdh0wljecOFgkgBylddU6EUP08TP3tTVhSJqUDeacdKBhmIn2wF4HgOgQSdnBTroyh8UiElxbApXk3IcpInfteEFp1svQOHrzdmH8l9cUEAYAQNSLnL7A5LihjMnIvOcjPgB08dADOKccNV%2FPI1CmbbzM6Oz%2F%2F%2BHN6QXVHrl7Md8enAFUFJmyD%2BVx8rCRqMWmPT4OsObPEFO%2FaJdC%2F6H72a7DstJSTY853qep8NSu%2FROeD2bNKtuGPjPIxYnsqOwvS2fBKwBRWuDx8r7xEFMAbFHvnghncie8xVfIFqOxorMJGy4cEGOqUBic7u4%2Bz7Yj3aCONlmgGjF%2FSHpqchNl%2FLR%2FB53TEcuKfIrz5ncpNGKzeNj1OQUo7gXwtSJnKvOFITd%2BpcDP3m9QfXTfSALXiijm1SFujpMjVtZTddgM3v5TGURvOyyL1L0BUwNyjnI2UGAstOQJSd7wIKA7T5DrZ7oZCgOnte0nMZLOa34bhSzOcNMreDRKIP3aRFZ8G0C%2FcxMUXj5NJJtynXSJSx&X-Amz-Signature=9cfa0098a8ebea508e494f30e6e9657a2dc7c61999285bb8bfed9966980fd3c4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZTCBRY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMCvwyhJJdf3ajRCgQyY7R9VzOKsaM90LYV%2FNaLGov8AiEApL8YY9X%2F6Iz8GXd0ftGUtDotUOanxKRCnP%2BAVkGDxWwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCsHYxr0IZi2U1%2BkSrcA1AEmQHefa6gD5%2BRAuy5EGDXpUBidkiR47KK%2F9LUNe%2F0wzGXp4ZnmV6WgMNcB5%2Fg%2FQyH83apmDGMA7ngTcplbgTortHfdMn%2FAcorfLPPNJ73fPf9dbaCk0StcK8floXqAeOy%2FJqWSs2sGPnqm2KTzZfFF0fWxhZ4kZNCxhlNRLwwttmBCzXjtTc%2FF0L7uJyCycWTqQs%2BADS6UfHLvG%2F5G2QD9dQJlpggWEwjB8HxdjMFKuGpQIlNOOSc3czeyLUrhYfTSpOgTV0qOV2y%2F8XKWL6PBZZUgirdSc8M%2FFzKlT%2BYvn3S13upeS5T5tRCiDZKyjYfVS5cl%2BgrUK%2BE6mdh0wljecOFgkgBylddU6EUP08TP3tTVhSJqUDeacdKBhmIn2wF4HgOgQSdnBTroyh8UiElxbApXk3IcpInfteEFp1svQOHrzdmH8l9cUEAYAQNSLnL7A5LihjMnIvOcjPgB08dADOKccNV%2FPI1CmbbzM6Oz%2F%2F%2BHN6QXVHrl7Md8enAFUFJmyD%2BVx8rCRqMWmPT4OsObPEFO%2FaJdC%2F6H72a7DstJSTY853qep8NSu%2FROeD2bNKtuGPjPIxYnsqOwvS2fBKwBRWuDx8r7xEFMAbFHvnghncie8xVfIFqOxorMJGy4cEGOqUBic7u4%2Bz7Yj3aCONlmgGjF%2FSHpqchNl%2FLR%2FB53TEcuKfIrz5ncpNGKzeNj1OQUo7gXwtSJnKvOFITd%2BpcDP3m9QfXTfSALXiijm1SFujpMjVtZTddgM3v5TGURvOyyL1L0BUwNyjnI2UGAstOQJSd7wIKA7T5DrZ7oZCgOnte0nMZLOa34bhSzOcNMreDRKIP3aRFZ8G0C%2FcxMUXj5NJJtynXSJSx&X-Amz-Signature=9f1e2d397583e7a15927fd962d043d3ac18c58530b8761eb70802f7328643740&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZTCBRY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMCvwyhJJdf3ajRCgQyY7R9VzOKsaM90LYV%2FNaLGov8AiEApL8YY9X%2F6Iz8GXd0ftGUtDotUOanxKRCnP%2BAVkGDxWwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCsHYxr0IZi2U1%2BkSrcA1AEmQHefa6gD5%2BRAuy5EGDXpUBidkiR47KK%2F9LUNe%2F0wzGXp4ZnmV6WgMNcB5%2Fg%2FQyH83apmDGMA7ngTcplbgTortHfdMn%2FAcorfLPPNJ73fPf9dbaCk0StcK8floXqAeOy%2FJqWSs2sGPnqm2KTzZfFF0fWxhZ4kZNCxhlNRLwwttmBCzXjtTc%2FF0L7uJyCycWTqQs%2BADS6UfHLvG%2F5G2QD9dQJlpggWEwjB8HxdjMFKuGpQIlNOOSc3czeyLUrhYfTSpOgTV0qOV2y%2F8XKWL6PBZZUgirdSc8M%2FFzKlT%2BYvn3S13upeS5T5tRCiDZKyjYfVS5cl%2BgrUK%2BE6mdh0wljecOFgkgBylddU6EUP08TP3tTVhSJqUDeacdKBhmIn2wF4HgOgQSdnBTroyh8UiElxbApXk3IcpInfteEFp1svQOHrzdmH8l9cUEAYAQNSLnL7A5LihjMnIvOcjPgB08dADOKccNV%2FPI1CmbbzM6Oz%2F%2F%2BHN6QXVHrl7Md8enAFUFJmyD%2BVx8rCRqMWmPT4OsObPEFO%2FaJdC%2F6H72a7DstJSTY853qep8NSu%2FROeD2bNKtuGPjPIxYnsqOwvS2fBKwBRWuDx8r7xEFMAbFHvnghncie8xVfIFqOxorMJGy4cEGOqUBic7u4%2Bz7Yj3aCONlmgGjF%2FSHpqchNl%2FLR%2FB53TEcuKfIrz5ncpNGKzeNj1OQUo7gXwtSJnKvOFITd%2BpcDP3m9QfXTfSALXiijm1SFujpMjVtZTddgM3v5TGURvOyyL1L0BUwNyjnI2UGAstOQJSd7wIKA7T5DrZ7oZCgOnte0nMZLOa34bhSzOcNMreDRKIP3aRFZ8G0C%2FcxMUXj5NJJtynXSJSx&X-Amz-Signature=804d5de1e8d6d207e72b6cba50ffb4a384734b81a4706843055335686ef11f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZTCBRY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMCvwyhJJdf3ajRCgQyY7R9VzOKsaM90LYV%2FNaLGov8AiEApL8YY9X%2F6Iz8GXd0ftGUtDotUOanxKRCnP%2BAVkGDxWwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCsHYxr0IZi2U1%2BkSrcA1AEmQHefa6gD5%2BRAuy5EGDXpUBidkiR47KK%2F9LUNe%2F0wzGXp4ZnmV6WgMNcB5%2Fg%2FQyH83apmDGMA7ngTcplbgTortHfdMn%2FAcorfLPPNJ73fPf9dbaCk0StcK8floXqAeOy%2FJqWSs2sGPnqm2KTzZfFF0fWxhZ4kZNCxhlNRLwwttmBCzXjtTc%2FF0L7uJyCycWTqQs%2BADS6UfHLvG%2F5G2QD9dQJlpggWEwjB8HxdjMFKuGpQIlNOOSc3czeyLUrhYfTSpOgTV0qOV2y%2F8XKWL6PBZZUgirdSc8M%2FFzKlT%2BYvn3S13upeS5T5tRCiDZKyjYfVS5cl%2BgrUK%2BE6mdh0wljecOFgkgBylddU6EUP08TP3tTVhSJqUDeacdKBhmIn2wF4HgOgQSdnBTroyh8UiElxbApXk3IcpInfteEFp1svQOHrzdmH8l9cUEAYAQNSLnL7A5LihjMnIvOcjPgB08dADOKccNV%2FPI1CmbbzM6Oz%2F%2F%2BHN6QXVHrl7Md8enAFUFJmyD%2BVx8rCRqMWmPT4OsObPEFO%2FaJdC%2F6H72a7DstJSTY853qep8NSu%2FROeD2bNKtuGPjPIxYnsqOwvS2fBKwBRWuDx8r7xEFMAbFHvnghncie8xVfIFqOxorMJGy4cEGOqUBic7u4%2Bz7Yj3aCONlmgGjF%2FSHpqchNl%2FLR%2FB53TEcuKfIrz5ncpNGKzeNj1OQUo7gXwtSJnKvOFITd%2BpcDP3m9QfXTfSALXiijm1SFujpMjVtZTddgM3v5TGURvOyyL1L0BUwNyjnI2UGAstOQJSd7wIKA7T5DrZ7oZCgOnte0nMZLOa34bhSzOcNMreDRKIP3aRFZ8G0C%2FcxMUXj5NJJtynXSJSx&X-Amz-Signature=f8b697fc839a6c984e33800a6e23fae7af650509ca7b7453038805440c9c192e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
