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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7H7IL6%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCICv%2FdwdKQfL3maBrY%2FyWA4PdNlsImozh1XDNy5%2FgWV%2BGAiAN%2BoU9RCERKIyNX9jrbmAZ9V70W9hDyKaiebCLL7dFgCr%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIM9bSSob5vgdtRKJcKKtwDRDrvDQmL9zQtXt26a53X%2BKbXltlXSrAWwSAYTOomi%2B6dzABXXALjV0l0ircy6tBIx7zahbX%2FNo0xD5rRYwe2f379waE%2BeToYHqeLehg0Qo%2BSAV%2FxS3w%2FChiyFw7%2BmuWlcWHr6Zi34eM%2BeUK3Ldpjsr3QL4IwQhj8T0JiQu%2BeTIUd6yTn3kkCcqZwDfYMaCJnLxeuoGNZsXk1b%2B2WQS6qUJx42jJ8S%2FeD6d0gTUcvr7fGxXXHOfgOAi7GHTGYkrJUzRjypODQdgEuoHBnthdkMT2UUd7OnPhHheJH63laLmL9DdUnfckrwMYj%2F1IhlJXZ91CLS8WR%2BfMnsti7Nob8zLFAHeHro%2BcOQrKPMznjYcTgcOe5TxxDJDNbDzHYR%2BEnB4cUUDPd5aMykYV%2BpVlfYFqOKQb485dFOIyD4KZZYXbssRgnsgsIk98uI%2B7a052P9Uvcb9gOQPpJ0RO3vXlPHkKxky%2Buxz3iiJHC4GbKg1LPBQNfAFPdTPpyxWELHOQqDEFbhYWOawPKWlkjz6KYcFm3ncSaAaIZNvm5V%2FPA9heZvuCxXMxeyCytVVESroEZ1MTU5ZULZt13dZERmlCU8ENT3GYSCCfSnFO%2F8UoiJ8Drejd4J6emX59Jmcsw1N64yQY6pgGApJx%2Buh8mkPHpO1nbdR7I1Jc9UMwX1up57SBaLRq4mFCs%2FyawGwI81hnizv09%2B6bwN4vTHkcrJExp3bVbQsCzRWzMJw8mya31xN3cCgrpmNLLPKdiRLVWgJuiwrMpyB9VKjp9WfIamVepnEdDOCMQd%2FX4656TovaiqV7dXAn4LZxgKyaPphoNuqEtFG4u3gP3neDFo1WDoBkVOY5LdQlWPNyui4ng&X-Amz-Signature=ce856b90f9191e933c14f6d4bd3327021c9e119a2154fe9006050027d5ad1de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7H7IL6%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCICv%2FdwdKQfL3maBrY%2FyWA4PdNlsImozh1XDNy5%2FgWV%2BGAiAN%2BoU9RCERKIyNX9jrbmAZ9V70W9hDyKaiebCLL7dFgCr%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIM9bSSob5vgdtRKJcKKtwDRDrvDQmL9zQtXt26a53X%2BKbXltlXSrAWwSAYTOomi%2B6dzABXXALjV0l0ircy6tBIx7zahbX%2FNo0xD5rRYwe2f379waE%2BeToYHqeLehg0Qo%2BSAV%2FxS3w%2FChiyFw7%2BmuWlcWHr6Zi34eM%2BeUK3Ldpjsr3QL4IwQhj8T0JiQu%2BeTIUd6yTn3kkCcqZwDfYMaCJnLxeuoGNZsXk1b%2B2WQS6qUJx42jJ8S%2FeD6d0gTUcvr7fGxXXHOfgOAi7GHTGYkrJUzRjypODQdgEuoHBnthdkMT2UUd7OnPhHheJH63laLmL9DdUnfckrwMYj%2F1IhlJXZ91CLS8WR%2BfMnsti7Nob8zLFAHeHro%2BcOQrKPMznjYcTgcOe5TxxDJDNbDzHYR%2BEnB4cUUDPd5aMykYV%2BpVlfYFqOKQb485dFOIyD4KZZYXbssRgnsgsIk98uI%2B7a052P9Uvcb9gOQPpJ0RO3vXlPHkKxky%2Buxz3iiJHC4GbKg1LPBQNfAFPdTPpyxWELHOQqDEFbhYWOawPKWlkjz6KYcFm3ncSaAaIZNvm5V%2FPA9heZvuCxXMxeyCytVVESroEZ1MTU5ZULZt13dZERmlCU8ENT3GYSCCfSnFO%2F8UoiJ8Drejd4J6emX59Jmcsw1N64yQY6pgGApJx%2Buh8mkPHpO1nbdR7I1Jc9UMwX1up57SBaLRq4mFCs%2FyawGwI81hnizv09%2B6bwN4vTHkcrJExp3bVbQsCzRWzMJw8mya31xN3cCgrpmNLLPKdiRLVWgJuiwrMpyB9VKjp9WfIamVepnEdDOCMQd%2FX4656TovaiqV7dXAn4LZxgKyaPphoNuqEtFG4u3gP3neDFo1WDoBkVOY5LdQlWPNyui4ng&X-Amz-Signature=db8f03b8a8319934d7d4e64d8bb4ecef446334395c3086333d2938b0dcfe7c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7H7IL6%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCICv%2FdwdKQfL3maBrY%2FyWA4PdNlsImozh1XDNy5%2FgWV%2BGAiAN%2BoU9RCERKIyNX9jrbmAZ9V70W9hDyKaiebCLL7dFgCr%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIM9bSSob5vgdtRKJcKKtwDRDrvDQmL9zQtXt26a53X%2BKbXltlXSrAWwSAYTOomi%2B6dzABXXALjV0l0ircy6tBIx7zahbX%2FNo0xD5rRYwe2f379waE%2BeToYHqeLehg0Qo%2BSAV%2FxS3w%2FChiyFw7%2BmuWlcWHr6Zi34eM%2BeUK3Ldpjsr3QL4IwQhj8T0JiQu%2BeTIUd6yTn3kkCcqZwDfYMaCJnLxeuoGNZsXk1b%2B2WQS6qUJx42jJ8S%2FeD6d0gTUcvr7fGxXXHOfgOAi7GHTGYkrJUzRjypODQdgEuoHBnthdkMT2UUd7OnPhHheJH63laLmL9DdUnfckrwMYj%2F1IhlJXZ91CLS8WR%2BfMnsti7Nob8zLFAHeHro%2BcOQrKPMznjYcTgcOe5TxxDJDNbDzHYR%2BEnB4cUUDPd5aMykYV%2BpVlfYFqOKQb485dFOIyD4KZZYXbssRgnsgsIk98uI%2B7a052P9Uvcb9gOQPpJ0RO3vXlPHkKxky%2Buxz3iiJHC4GbKg1LPBQNfAFPdTPpyxWELHOQqDEFbhYWOawPKWlkjz6KYcFm3ncSaAaIZNvm5V%2FPA9heZvuCxXMxeyCytVVESroEZ1MTU5ZULZt13dZERmlCU8ENT3GYSCCfSnFO%2F8UoiJ8Drejd4J6emX59Jmcsw1N64yQY6pgGApJx%2Buh8mkPHpO1nbdR7I1Jc9UMwX1up57SBaLRq4mFCs%2FyawGwI81hnizv09%2B6bwN4vTHkcrJExp3bVbQsCzRWzMJw8mya31xN3cCgrpmNLLPKdiRLVWgJuiwrMpyB9VKjp9WfIamVepnEdDOCMQd%2FX4656TovaiqV7dXAn4LZxgKyaPphoNuqEtFG4u3gP3neDFo1WDoBkVOY5LdQlWPNyui4ng&X-Amz-Signature=fab9725c5b7fafb26e4160e5e1527261c6a8014d3baeb3f0754d868d874160e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7H7IL6%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCICv%2FdwdKQfL3maBrY%2FyWA4PdNlsImozh1XDNy5%2FgWV%2BGAiAN%2BoU9RCERKIyNX9jrbmAZ9V70W9hDyKaiebCLL7dFgCr%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIM9bSSob5vgdtRKJcKKtwDRDrvDQmL9zQtXt26a53X%2BKbXltlXSrAWwSAYTOomi%2B6dzABXXALjV0l0ircy6tBIx7zahbX%2FNo0xD5rRYwe2f379waE%2BeToYHqeLehg0Qo%2BSAV%2FxS3w%2FChiyFw7%2BmuWlcWHr6Zi34eM%2BeUK3Ldpjsr3QL4IwQhj8T0JiQu%2BeTIUd6yTn3kkCcqZwDfYMaCJnLxeuoGNZsXk1b%2B2WQS6qUJx42jJ8S%2FeD6d0gTUcvr7fGxXXHOfgOAi7GHTGYkrJUzRjypODQdgEuoHBnthdkMT2UUd7OnPhHheJH63laLmL9DdUnfckrwMYj%2F1IhlJXZ91CLS8WR%2BfMnsti7Nob8zLFAHeHro%2BcOQrKPMznjYcTgcOe5TxxDJDNbDzHYR%2BEnB4cUUDPd5aMykYV%2BpVlfYFqOKQb485dFOIyD4KZZYXbssRgnsgsIk98uI%2B7a052P9Uvcb9gOQPpJ0RO3vXlPHkKxky%2Buxz3iiJHC4GbKg1LPBQNfAFPdTPpyxWELHOQqDEFbhYWOawPKWlkjz6KYcFm3ncSaAaIZNvm5V%2FPA9heZvuCxXMxeyCytVVESroEZ1MTU5ZULZt13dZERmlCU8ENT3GYSCCfSnFO%2F8UoiJ8Drejd4J6emX59Jmcsw1N64yQY6pgGApJx%2Buh8mkPHpO1nbdR7I1Jc9UMwX1up57SBaLRq4mFCs%2FyawGwI81hnizv09%2B6bwN4vTHkcrJExp3bVbQsCzRWzMJw8mya31xN3cCgrpmNLLPKdiRLVWgJuiwrMpyB9VKjp9WfIamVepnEdDOCMQd%2FX4656TovaiqV7dXAn4LZxgKyaPphoNuqEtFG4u3gP3neDFo1WDoBkVOY5LdQlWPNyui4ng&X-Amz-Signature=094a64ba33a7b894bdd9a61d71d610b2fa8ae71d450579d3c5e2a025dd034c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7H7IL6%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCICv%2FdwdKQfL3maBrY%2FyWA4PdNlsImozh1XDNy5%2FgWV%2BGAiAN%2BoU9RCERKIyNX9jrbmAZ9V70W9hDyKaiebCLL7dFgCr%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIM9bSSob5vgdtRKJcKKtwDRDrvDQmL9zQtXt26a53X%2BKbXltlXSrAWwSAYTOomi%2B6dzABXXALjV0l0ircy6tBIx7zahbX%2FNo0xD5rRYwe2f379waE%2BeToYHqeLehg0Qo%2BSAV%2FxS3w%2FChiyFw7%2BmuWlcWHr6Zi34eM%2BeUK3Ldpjsr3QL4IwQhj8T0JiQu%2BeTIUd6yTn3kkCcqZwDfYMaCJnLxeuoGNZsXk1b%2B2WQS6qUJx42jJ8S%2FeD6d0gTUcvr7fGxXXHOfgOAi7GHTGYkrJUzRjypODQdgEuoHBnthdkMT2UUd7OnPhHheJH63laLmL9DdUnfckrwMYj%2F1IhlJXZ91CLS8WR%2BfMnsti7Nob8zLFAHeHro%2BcOQrKPMznjYcTgcOe5TxxDJDNbDzHYR%2BEnB4cUUDPd5aMykYV%2BpVlfYFqOKQb485dFOIyD4KZZYXbssRgnsgsIk98uI%2B7a052P9Uvcb9gOQPpJ0RO3vXlPHkKxky%2Buxz3iiJHC4GbKg1LPBQNfAFPdTPpyxWELHOQqDEFbhYWOawPKWlkjz6KYcFm3ncSaAaIZNvm5V%2FPA9heZvuCxXMxeyCytVVESroEZ1MTU5ZULZt13dZERmlCU8ENT3GYSCCfSnFO%2F8UoiJ8Drejd4J6emX59Jmcsw1N64yQY6pgGApJx%2Buh8mkPHpO1nbdR7I1Jc9UMwX1up57SBaLRq4mFCs%2FyawGwI81hnizv09%2B6bwN4vTHkcrJExp3bVbQsCzRWzMJw8mya31xN3cCgrpmNLLPKdiRLVWgJuiwrMpyB9VKjp9WfIamVepnEdDOCMQd%2FX4656TovaiqV7dXAn4LZxgKyaPphoNuqEtFG4u3gP3neDFo1WDoBkVOY5LdQlWPNyui4ng&X-Amz-Signature=4457bbce70c1d1936be9c1c0523d1426b72d1e43091eece5696359420a4e1a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7H7IL6%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCICv%2FdwdKQfL3maBrY%2FyWA4PdNlsImozh1XDNy5%2FgWV%2BGAiAN%2BoU9RCERKIyNX9jrbmAZ9V70W9hDyKaiebCLL7dFgCr%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIM9bSSob5vgdtRKJcKKtwDRDrvDQmL9zQtXt26a53X%2BKbXltlXSrAWwSAYTOomi%2B6dzABXXALjV0l0ircy6tBIx7zahbX%2FNo0xD5rRYwe2f379waE%2BeToYHqeLehg0Qo%2BSAV%2FxS3w%2FChiyFw7%2BmuWlcWHr6Zi34eM%2BeUK3Ldpjsr3QL4IwQhj8T0JiQu%2BeTIUd6yTn3kkCcqZwDfYMaCJnLxeuoGNZsXk1b%2B2WQS6qUJx42jJ8S%2FeD6d0gTUcvr7fGxXXHOfgOAi7GHTGYkrJUzRjypODQdgEuoHBnthdkMT2UUd7OnPhHheJH63laLmL9DdUnfckrwMYj%2F1IhlJXZ91CLS8WR%2BfMnsti7Nob8zLFAHeHro%2BcOQrKPMznjYcTgcOe5TxxDJDNbDzHYR%2BEnB4cUUDPd5aMykYV%2BpVlfYFqOKQb485dFOIyD4KZZYXbssRgnsgsIk98uI%2B7a052P9Uvcb9gOQPpJ0RO3vXlPHkKxky%2Buxz3iiJHC4GbKg1LPBQNfAFPdTPpyxWELHOQqDEFbhYWOawPKWlkjz6KYcFm3ncSaAaIZNvm5V%2FPA9heZvuCxXMxeyCytVVESroEZ1MTU5ZULZt13dZERmlCU8ENT3GYSCCfSnFO%2F8UoiJ8Drejd4J6emX59Jmcsw1N64yQY6pgGApJx%2Buh8mkPHpO1nbdR7I1Jc9UMwX1up57SBaLRq4mFCs%2FyawGwI81hnizv09%2B6bwN4vTHkcrJExp3bVbQsCzRWzMJw8mya31xN3cCgrpmNLLPKdiRLVWgJuiwrMpyB9VKjp9WfIamVepnEdDOCMQd%2FX4656TovaiqV7dXAn4LZxgKyaPphoNuqEtFG4u3gP3neDFo1WDoBkVOY5LdQlWPNyui4ng&X-Amz-Signature=312b3c1765550ea29e49b0aeb5b1df052b80795a56cb7983d4d1be9d85366563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7H7IL6%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCICv%2FdwdKQfL3maBrY%2FyWA4PdNlsImozh1XDNy5%2FgWV%2BGAiAN%2BoU9RCERKIyNX9jrbmAZ9V70W9hDyKaiebCLL7dFgCr%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIM9bSSob5vgdtRKJcKKtwDRDrvDQmL9zQtXt26a53X%2BKbXltlXSrAWwSAYTOomi%2B6dzABXXALjV0l0ircy6tBIx7zahbX%2FNo0xD5rRYwe2f379waE%2BeToYHqeLehg0Qo%2BSAV%2FxS3w%2FChiyFw7%2BmuWlcWHr6Zi34eM%2BeUK3Ldpjsr3QL4IwQhj8T0JiQu%2BeTIUd6yTn3kkCcqZwDfYMaCJnLxeuoGNZsXk1b%2B2WQS6qUJx42jJ8S%2FeD6d0gTUcvr7fGxXXHOfgOAi7GHTGYkrJUzRjypODQdgEuoHBnthdkMT2UUd7OnPhHheJH63laLmL9DdUnfckrwMYj%2F1IhlJXZ91CLS8WR%2BfMnsti7Nob8zLFAHeHro%2BcOQrKPMznjYcTgcOe5TxxDJDNbDzHYR%2BEnB4cUUDPd5aMykYV%2BpVlfYFqOKQb485dFOIyD4KZZYXbssRgnsgsIk98uI%2B7a052P9Uvcb9gOQPpJ0RO3vXlPHkKxky%2Buxz3iiJHC4GbKg1LPBQNfAFPdTPpyxWELHOQqDEFbhYWOawPKWlkjz6KYcFm3ncSaAaIZNvm5V%2FPA9heZvuCxXMxeyCytVVESroEZ1MTU5ZULZt13dZERmlCU8ENT3GYSCCfSnFO%2F8UoiJ8Drejd4J6emX59Jmcsw1N64yQY6pgGApJx%2Buh8mkPHpO1nbdR7I1Jc9UMwX1up57SBaLRq4mFCs%2FyawGwI81hnizv09%2B6bwN4vTHkcrJExp3bVbQsCzRWzMJw8mya31xN3cCgrpmNLLPKdiRLVWgJuiwrMpyB9VKjp9WfIamVepnEdDOCMQd%2FX4656TovaiqV7dXAn4LZxgKyaPphoNuqEtFG4u3gP3neDFo1WDoBkVOY5LdQlWPNyui4ng&X-Amz-Signature=5f4105553f682befff5aa2b2ce22304c9afc8a915c8e12c101e9db6541096122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
