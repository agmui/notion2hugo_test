---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2EM5C6%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDJBGmHWeYVO8GAXD%2BAx9jp7fi2SxSCnfSwqIpLo43gXwIgVLFTlj0sdN6jir1v6TiSPitABHZitqz4sapviHolEfoqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWTfItX6AmbTBRQdyrcA4nz8Dz1ivddWnbJ%2BTMYcUgwjYQxDhz9h%2FqrDnjuFS3vfZze%2BYaRpSBoO9W90hFKFQ7mt2JqfVlvyWkW73mJMh9FfozULiObxfjL1HZLcCD2nHlex%2BVfmUmqwj7Y4tfp%2FPROz0wTZUYCOrooosQVdaC3Tlu2zKky6KWtVZmgVVFbVhO14HQVweFzAU6udxcZhRZcUkJIQCyQk5sxp3jZicJOICDSVA83XmPty2FH1AHRazRmXu7sRzsCFM7m%2B1wmVijAq9fugsJwvMgwQnsQ3QfpDjBIFsJfTJWNfmrXDu%2F8WiKzGjVA4sMgG58h2mYR6aUV8SrlGd67AYin%2F8ArfAdXgA3d0P34wLy0UjLFHZMkDU0NIirSyk3ClyRSO4dHBuB2lL%2FzTyodvSIslIJoFAHx3uUMojSeWqHXAOwY6NRVqTT9PxJmDD%2BIzwUticAmegtEKViL9nFANaDloL0C1NRr40iD9GPe%2Fkn1CfGVBkYfc6kB0PSpfuBuEG9U4IdByXK2cx9N1Ov9QAu6WtRv3TRUbG1cIJU2%2BwYq9sUqMk1xVkSDvkfvE3kMVpE4WTTkGAalC0yoccMJfAYIt9xtX%2B0fX5fA7r2gz50UvuIs71pOlNXMezrBGTakn0xpMNfs7swGOqUBfQYAdZ32t6N9a0KqRJHNs0zpk9wEW1XTpGfp%2FDCBTgGAhiZK4ul80kGBN4Fh2rJxkbF3cDNFA%2F2%2Bthl63JoDeawjUTwELplb5FfhQ3YgfyndjTnH%2B5uHZRN7%2F2uwAN93TOw4Jd24O%2BPznJgV0cvuY5CeBy6NH2WMXCSL0eeF1QAwqh7HADp5%2FV9neuoL9KtprKdNvHsipaYIHe7GmXXu2nHq41y%2B&X-Amz-Signature=c178e8024cfacedcd2816ae996bd6fba67f4e97a1ed6599f85bd423b2ed487bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2EM5C6%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDJBGmHWeYVO8GAXD%2BAx9jp7fi2SxSCnfSwqIpLo43gXwIgVLFTlj0sdN6jir1v6TiSPitABHZitqz4sapviHolEfoqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWTfItX6AmbTBRQdyrcA4nz8Dz1ivddWnbJ%2BTMYcUgwjYQxDhz9h%2FqrDnjuFS3vfZze%2BYaRpSBoO9W90hFKFQ7mt2JqfVlvyWkW73mJMh9FfozULiObxfjL1HZLcCD2nHlex%2BVfmUmqwj7Y4tfp%2FPROz0wTZUYCOrooosQVdaC3Tlu2zKky6KWtVZmgVVFbVhO14HQVweFzAU6udxcZhRZcUkJIQCyQk5sxp3jZicJOICDSVA83XmPty2FH1AHRazRmXu7sRzsCFM7m%2B1wmVijAq9fugsJwvMgwQnsQ3QfpDjBIFsJfTJWNfmrXDu%2F8WiKzGjVA4sMgG58h2mYR6aUV8SrlGd67AYin%2F8ArfAdXgA3d0P34wLy0UjLFHZMkDU0NIirSyk3ClyRSO4dHBuB2lL%2FzTyodvSIslIJoFAHx3uUMojSeWqHXAOwY6NRVqTT9PxJmDD%2BIzwUticAmegtEKViL9nFANaDloL0C1NRr40iD9GPe%2Fkn1CfGVBkYfc6kB0PSpfuBuEG9U4IdByXK2cx9N1Ov9QAu6WtRv3TRUbG1cIJU2%2BwYq9sUqMk1xVkSDvkfvE3kMVpE4WTTkGAalC0yoccMJfAYIt9xtX%2B0fX5fA7r2gz50UvuIs71pOlNXMezrBGTakn0xpMNfs7swGOqUBfQYAdZ32t6N9a0KqRJHNs0zpk9wEW1XTpGfp%2FDCBTgGAhiZK4ul80kGBN4Fh2rJxkbF3cDNFA%2F2%2Bthl63JoDeawjUTwELplb5FfhQ3YgfyndjTnH%2B5uHZRN7%2F2uwAN93TOw4Jd24O%2BPznJgV0cvuY5CeBy6NH2WMXCSL0eeF1QAwqh7HADp5%2FV9neuoL9KtprKdNvHsipaYIHe7GmXXu2nHq41y%2B&X-Amz-Signature=31f9c6bd25d664965e91c0da528c3bda2a50cf2d29f31db272ab6090dfae8667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2EM5C6%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDJBGmHWeYVO8GAXD%2BAx9jp7fi2SxSCnfSwqIpLo43gXwIgVLFTlj0sdN6jir1v6TiSPitABHZitqz4sapviHolEfoqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWTfItX6AmbTBRQdyrcA4nz8Dz1ivddWnbJ%2BTMYcUgwjYQxDhz9h%2FqrDnjuFS3vfZze%2BYaRpSBoO9W90hFKFQ7mt2JqfVlvyWkW73mJMh9FfozULiObxfjL1HZLcCD2nHlex%2BVfmUmqwj7Y4tfp%2FPROz0wTZUYCOrooosQVdaC3Tlu2zKky6KWtVZmgVVFbVhO14HQVweFzAU6udxcZhRZcUkJIQCyQk5sxp3jZicJOICDSVA83XmPty2FH1AHRazRmXu7sRzsCFM7m%2B1wmVijAq9fugsJwvMgwQnsQ3QfpDjBIFsJfTJWNfmrXDu%2F8WiKzGjVA4sMgG58h2mYR6aUV8SrlGd67AYin%2F8ArfAdXgA3d0P34wLy0UjLFHZMkDU0NIirSyk3ClyRSO4dHBuB2lL%2FzTyodvSIslIJoFAHx3uUMojSeWqHXAOwY6NRVqTT9PxJmDD%2BIzwUticAmegtEKViL9nFANaDloL0C1NRr40iD9GPe%2Fkn1CfGVBkYfc6kB0PSpfuBuEG9U4IdByXK2cx9N1Ov9QAu6WtRv3TRUbG1cIJU2%2BwYq9sUqMk1xVkSDvkfvE3kMVpE4WTTkGAalC0yoccMJfAYIt9xtX%2B0fX5fA7r2gz50UvuIs71pOlNXMezrBGTakn0xpMNfs7swGOqUBfQYAdZ32t6N9a0KqRJHNs0zpk9wEW1XTpGfp%2FDCBTgGAhiZK4ul80kGBN4Fh2rJxkbF3cDNFA%2F2%2Bthl63JoDeawjUTwELplb5FfhQ3YgfyndjTnH%2B5uHZRN7%2F2uwAN93TOw4Jd24O%2BPznJgV0cvuY5CeBy6NH2WMXCSL0eeF1QAwqh7HADp5%2FV9neuoL9KtprKdNvHsipaYIHe7GmXXu2nHq41y%2B&X-Amz-Signature=49d82e0999088dc6329186f6eeae4773f0df9ad22f5eeec6e3ac5d9f4eae6f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2EM5C6%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDJBGmHWeYVO8GAXD%2BAx9jp7fi2SxSCnfSwqIpLo43gXwIgVLFTlj0sdN6jir1v6TiSPitABHZitqz4sapviHolEfoqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWTfItX6AmbTBRQdyrcA4nz8Dz1ivddWnbJ%2BTMYcUgwjYQxDhz9h%2FqrDnjuFS3vfZze%2BYaRpSBoO9W90hFKFQ7mt2JqfVlvyWkW73mJMh9FfozULiObxfjL1HZLcCD2nHlex%2BVfmUmqwj7Y4tfp%2FPROz0wTZUYCOrooosQVdaC3Tlu2zKky6KWtVZmgVVFbVhO14HQVweFzAU6udxcZhRZcUkJIQCyQk5sxp3jZicJOICDSVA83XmPty2FH1AHRazRmXu7sRzsCFM7m%2B1wmVijAq9fugsJwvMgwQnsQ3QfpDjBIFsJfTJWNfmrXDu%2F8WiKzGjVA4sMgG58h2mYR6aUV8SrlGd67AYin%2F8ArfAdXgA3d0P34wLy0UjLFHZMkDU0NIirSyk3ClyRSO4dHBuB2lL%2FzTyodvSIslIJoFAHx3uUMojSeWqHXAOwY6NRVqTT9PxJmDD%2BIzwUticAmegtEKViL9nFANaDloL0C1NRr40iD9GPe%2Fkn1CfGVBkYfc6kB0PSpfuBuEG9U4IdByXK2cx9N1Ov9QAu6WtRv3TRUbG1cIJU2%2BwYq9sUqMk1xVkSDvkfvE3kMVpE4WTTkGAalC0yoccMJfAYIt9xtX%2B0fX5fA7r2gz50UvuIs71pOlNXMezrBGTakn0xpMNfs7swGOqUBfQYAdZ32t6N9a0KqRJHNs0zpk9wEW1XTpGfp%2FDCBTgGAhiZK4ul80kGBN4Fh2rJxkbF3cDNFA%2F2%2Bthl63JoDeawjUTwELplb5FfhQ3YgfyndjTnH%2B5uHZRN7%2F2uwAN93TOw4Jd24O%2BPznJgV0cvuY5CeBy6NH2WMXCSL0eeF1QAwqh7HADp5%2FV9neuoL9KtprKdNvHsipaYIHe7GmXXu2nHq41y%2B&X-Amz-Signature=70844df3b083a8772be018205b17aea5790952ac77be1562d6c7b0c1dea750df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2EM5C6%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDJBGmHWeYVO8GAXD%2BAx9jp7fi2SxSCnfSwqIpLo43gXwIgVLFTlj0sdN6jir1v6TiSPitABHZitqz4sapviHolEfoqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWTfItX6AmbTBRQdyrcA4nz8Dz1ivddWnbJ%2BTMYcUgwjYQxDhz9h%2FqrDnjuFS3vfZze%2BYaRpSBoO9W90hFKFQ7mt2JqfVlvyWkW73mJMh9FfozULiObxfjL1HZLcCD2nHlex%2BVfmUmqwj7Y4tfp%2FPROz0wTZUYCOrooosQVdaC3Tlu2zKky6KWtVZmgVVFbVhO14HQVweFzAU6udxcZhRZcUkJIQCyQk5sxp3jZicJOICDSVA83XmPty2FH1AHRazRmXu7sRzsCFM7m%2B1wmVijAq9fugsJwvMgwQnsQ3QfpDjBIFsJfTJWNfmrXDu%2F8WiKzGjVA4sMgG58h2mYR6aUV8SrlGd67AYin%2F8ArfAdXgA3d0P34wLy0UjLFHZMkDU0NIirSyk3ClyRSO4dHBuB2lL%2FzTyodvSIslIJoFAHx3uUMojSeWqHXAOwY6NRVqTT9PxJmDD%2BIzwUticAmegtEKViL9nFANaDloL0C1NRr40iD9GPe%2Fkn1CfGVBkYfc6kB0PSpfuBuEG9U4IdByXK2cx9N1Ov9QAu6WtRv3TRUbG1cIJU2%2BwYq9sUqMk1xVkSDvkfvE3kMVpE4WTTkGAalC0yoccMJfAYIt9xtX%2B0fX5fA7r2gz50UvuIs71pOlNXMezrBGTakn0xpMNfs7swGOqUBfQYAdZ32t6N9a0KqRJHNs0zpk9wEW1XTpGfp%2FDCBTgGAhiZK4ul80kGBN4Fh2rJxkbF3cDNFA%2F2%2Bthl63JoDeawjUTwELplb5FfhQ3YgfyndjTnH%2B5uHZRN7%2F2uwAN93TOw4Jd24O%2BPznJgV0cvuY5CeBy6NH2WMXCSL0eeF1QAwqh7HADp5%2FV9neuoL9KtprKdNvHsipaYIHe7GmXXu2nHq41y%2B&X-Amz-Signature=e3eac2f0e075e0a6df43425f6a566ba6631696c558dc8e702be85b686bf55ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2EM5C6%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDJBGmHWeYVO8GAXD%2BAx9jp7fi2SxSCnfSwqIpLo43gXwIgVLFTlj0sdN6jir1v6TiSPitABHZitqz4sapviHolEfoqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWTfItX6AmbTBRQdyrcA4nz8Dz1ivddWnbJ%2BTMYcUgwjYQxDhz9h%2FqrDnjuFS3vfZze%2BYaRpSBoO9W90hFKFQ7mt2JqfVlvyWkW73mJMh9FfozULiObxfjL1HZLcCD2nHlex%2BVfmUmqwj7Y4tfp%2FPROz0wTZUYCOrooosQVdaC3Tlu2zKky6KWtVZmgVVFbVhO14HQVweFzAU6udxcZhRZcUkJIQCyQk5sxp3jZicJOICDSVA83XmPty2FH1AHRazRmXu7sRzsCFM7m%2B1wmVijAq9fugsJwvMgwQnsQ3QfpDjBIFsJfTJWNfmrXDu%2F8WiKzGjVA4sMgG58h2mYR6aUV8SrlGd67AYin%2F8ArfAdXgA3d0P34wLy0UjLFHZMkDU0NIirSyk3ClyRSO4dHBuB2lL%2FzTyodvSIslIJoFAHx3uUMojSeWqHXAOwY6NRVqTT9PxJmDD%2BIzwUticAmegtEKViL9nFANaDloL0C1NRr40iD9GPe%2Fkn1CfGVBkYfc6kB0PSpfuBuEG9U4IdByXK2cx9N1Ov9QAu6WtRv3TRUbG1cIJU2%2BwYq9sUqMk1xVkSDvkfvE3kMVpE4WTTkGAalC0yoccMJfAYIt9xtX%2B0fX5fA7r2gz50UvuIs71pOlNXMezrBGTakn0xpMNfs7swGOqUBfQYAdZ32t6N9a0KqRJHNs0zpk9wEW1XTpGfp%2FDCBTgGAhiZK4ul80kGBN4Fh2rJxkbF3cDNFA%2F2%2Bthl63JoDeawjUTwELplb5FfhQ3YgfyndjTnH%2B5uHZRN7%2F2uwAN93TOw4Jd24O%2BPznJgV0cvuY5CeBy6NH2WMXCSL0eeF1QAwqh7HADp5%2FV9neuoL9KtprKdNvHsipaYIHe7GmXXu2nHq41y%2B&X-Amz-Signature=d7e9a50d82f95173309d7d7cff38864c054c1e293c2f80ec7001e1203dbcc146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2EM5C6%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDJBGmHWeYVO8GAXD%2BAx9jp7fi2SxSCnfSwqIpLo43gXwIgVLFTlj0sdN6jir1v6TiSPitABHZitqz4sapviHolEfoqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWTfItX6AmbTBRQdyrcA4nz8Dz1ivddWnbJ%2BTMYcUgwjYQxDhz9h%2FqrDnjuFS3vfZze%2BYaRpSBoO9W90hFKFQ7mt2JqfVlvyWkW73mJMh9FfozULiObxfjL1HZLcCD2nHlex%2BVfmUmqwj7Y4tfp%2FPROz0wTZUYCOrooosQVdaC3Tlu2zKky6KWtVZmgVVFbVhO14HQVweFzAU6udxcZhRZcUkJIQCyQk5sxp3jZicJOICDSVA83XmPty2FH1AHRazRmXu7sRzsCFM7m%2B1wmVijAq9fugsJwvMgwQnsQ3QfpDjBIFsJfTJWNfmrXDu%2F8WiKzGjVA4sMgG58h2mYR6aUV8SrlGd67AYin%2F8ArfAdXgA3d0P34wLy0UjLFHZMkDU0NIirSyk3ClyRSO4dHBuB2lL%2FzTyodvSIslIJoFAHx3uUMojSeWqHXAOwY6NRVqTT9PxJmDD%2BIzwUticAmegtEKViL9nFANaDloL0C1NRr40iD9GPe%2Fkn1CfGVBkYfc6kB0PSpfuBuEG9U4IdByXK2cx9N1Ov9QAu6WtRv3TRUbG1cIJU2%2BwYq9sUqMk1xVkSDvkfvE3kMVpE4WTTkGAalC0yoccMJfAYIt9xtX%2B0fX5fA7r2gz50UvuIs71pOlNXMezrBGTakn0xpMNfs7swGOqUBfQYAdZ32t6N9a0KqRJHNs0zpk9wEW1XTpGfp%2FDCBTgGAhiZK4ul80kGBN4Fh2rJxkbF3cDNFA%2F2%2Bthl63JoDeawjUTwELplb5FfhQ3YgfyndjTnH%2B5uHZRN7%2F2uwAN93TOw4Jd24O%2BPznJgV0cvuY5CeBy6NH2WMXCSL0eeF1QAwqh7HADp5%2FV9neuoL9KtprKdNvHsipaYIHe7GmXXu2nHq41y%2B&X-Amz-Signature=4baf14caf72d772273dc6b2e781d57abc959ce842d07fad9d8acf8846924c84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
