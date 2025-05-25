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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FPLXV5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCuPdo3bGV5l3uLGvZ44S9GiKbk%2FTwuwIbZkU4mU07OywIhANclgDQSeLUeqn5ccFpYVSbMURa8byfXSjjWyN4aGD%2B9Kv8DCCMQABoMNjM3NDIzMTgzODA1IgwNb5sOt%2FqvWDv%2BcZAq3AMfmpaG7vy2v2QNbC3eQlf2jHOpWzI5WmFtzmryfUfVcGqvC2mx5Dcn2SvbtQUN795apsIk89NcK37FskvwWM5hC%2FPE38zoz1wshecwz7z9h5uuo8GQShJzYeA8suSK%2B0awR4GINpNZ92Bsuagm7FGFp3%2BuH1q%2BT%2BdYzbAoEyc508f1%2BOgLSkPULwr%2Bxeve6vF%2Fi0mnM7F6Ja9m2YfQE1MCFAgHglL8wofCza3Dk31e0nyxPCAUenDgYptIXs44NDIXrplj96fc6FFfO%2BsvBW8uXLNjnUIPK7TzFf%2FF%2BUjfQmgYyGEjBsrtthnlSXngjBEwJmFLNlzvWPCge9B2KIrxKdIdKt3iCs4%2Bj9jAmZLX3kcXQcxsWVxyyFgdIjGeCIIddwJ1ivO2XuQ01qpcCiXusYfP7X7%2BHlTFLoa4DfUvy%2F5g3sYFI2C%2BZ8N6HXr%2F0ZWdkTuAKjHFDpOyXEvn7rbeUQYkHlMCQ77iMmYUGJAWenlHYDmadm9JfANDw9XCPyYE7s3nxFVukZcjTRPMBiN0o4MB2Who3RJZhNSSkW1TKHKUvDYxB3UpxgSLUAQ%2BOOvuC5t6yOoUUixEpWQcdYuyjAf59lVaKY3J6GesLXlyW2alAdsBaNLZ2S1pSTDU7MnBBjqkAYasO0oNU%2Fycdm%2FuBgTJZBnZcwqC7e2p%2FZYKsVio%2Bfb4s%2FoU9ncC%2F91Td5g1l2jD%2Bb44W2QmhyWTJnG4PK011IQO%2F0cKpi2PMCbKZNpUI5Z%2FltDFaivMOr1gux5yEz%2Fa8IhQbtV9CQQ8x3UgUCgSuQU1pE56m4IfLsF3jxcuX2m18BS4ls566N5KMUexLFx6shCCVO%2FnnExz%2BrlnCa8Nsx4lhi8N&X-Amz-Signature=55dc2f00cb7af8595bee17191dea1c2d7aa4d86425dcacdca3d36f7d9aebb8de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FPLXV5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCuPdo3bGV5l3uLGvZ44S9GiKbk%2FTwuwIbZkU4mU07OywIhANclgDQSeLUeqn5ccFpYVSbMURa8byfXSjjWyN4aGD%2B9Kv8DCCMQABoMNjM3NDIzMTgzODA1IgwNb5sOt%2FqvWDv%2BcZAq3AMfmpaG7vy2v2QNbC3eQlf2jHOpWzI5WmFtzmryfUfVcGqvC2mx5Dcn2SvbtQUN795apsIk89NcK37FskvwWM5hC%2FPE38zoz1wshecwz7z9h5uuo8GQShJzYeA8suSK%2B0awR4GINpNZ92Bsuagm7FGFp3%2BuH1q%2BT%2BdYzbAoEyc508f1%2BOgLSkPULwr%2Bxeve6vF%2Fi0mnM7F6Ja9m2YfQE1MCFAgHglL8wofCza3Dk31e0nyxPCAUenDgYptIXs44NDIXrplj96fc6FFfO%2BsvBW8uXLNjnUIPK7TzFf%2FF%2BUjfQmgYyGEjBsrtthnlSXngjBEwJmFLNlzvWPCge9B2KIrxKdIdKt3iCs4%2Bj9jAmZLX3kcXQcxsWVxyyFgdIjGeCIIddwJ1ivO2XuQ01qpcCiXusYfP7X7%2BHlTFLoa4DfUvy%2F5g3sYFI2C%2BZ8N6HXr%2F0ZWdkTuAKjHFDpOyXEvn7rbeUQYkHlMCQ77iMmYUGJAWenlHYDmadm9JfANDw9XCPyYE7s3nxFVukZcjTRPMBiN0o4MB2Who3RJZhNSSkW1TKHKUvDYxB3UpxgSLUAQ%2BOOvuC5t6yOoUUixEpWQcdYuyjAf59lVaKY3J6GesLXlyW2alAdsBaNLZ2S1pSTDU7MnBBjqkAYasO0oNU%2Fycdm%2FuBgTJZBnZcwqC7e2p%2FZYKsVio%2Bfb4s%2FoU9ncC%2F91Td5g1l2jD%2Bb44W2QmhyWTJnG4PK011IQO%2F0cKpi2PMCbKZNpUI5Z%2FltDFaivMOr1gux5yEz%2Fa8IhQbtV9CQQ8x3UgUCgSuQU1pE56m4IfLsF3jxcuX2m18BS4ls566N5KMUexLFx6shCCVO%2FnnExz%2BrlnCa8Nsx4lhi8N&X-Amz-Signature=9a1c071b69e2f1337792fa5b4b9726da5cfbf4736f5edc55724b1ec725538912&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FPLXV5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCuPdo3bGV5l3uLGvZ44S9GiKbk%2FTwuwIbZkU4mU07OywIhANclgDQSeLUeqn5ccFpYVSbMURa8byfXSjjWyN4aGD%2B9Kv8DCCMQABoMNjM3NDIzMTgzODA1IgwNb5sOt%2FqvWDv%2BcZAq3AMfmpaG7vy2v2QNbC3eQlf2jHOpWzI5WmFtzmryfUfVcGqvC2mx5Dcn2SvbtQUN795apsIk89NcK37FskvwWM5hC%2FPE38zoz1wshecwz7z9h5uuo8GQShJzYeA8suSK%2B0awR4GINpNZ92Bsuagm7FGFp3%2BuH1q%2BT%2BdYzbAoEyc508f1%2BOgLSkPULwr%2Bxeve6vF%2Fi0mnM7F6Ja9m2YfQE1MCFAgHglL8wofCza3Dk31e0nyxPCAUenDgYptIXs44NDIXrplj96fc6FFfO%2BsvBW8uXLNjnUIPK7TzFf%2FF%2BUjfQmgYyGEjBsrtthnlSXngjBEwJmFLNlzvWPCge9B2KIrxKdIdKt3iCs4%2Bj9jAmZLX3kcXQcxsWVxyyFgdIjGeCIIddwJ1ivO2XuQ01qpcCiXusYfP7X7%2BHlTFLoa4DfUvy%2F5g3sYFI2C%2BZ8N6HXr%2F0ZWdkTuAKjHFDpOyXEvn7rbeUQYkHlMCQ77iMmYUGJAWenlHYDmadm9JfANDw9XCPyYE7s3nxFVukZcjTRPMBiN0o4MB2Who3RJZhNSSkW1TKHKUvDYxB3UpxgSLUAQ%2BOOvuC5t6yOoUUixEpWQcdYuyjAf59lVaKY3J6GesLXlyW2alAdsBaNLZ2S1pSTDU7MnBBjqkAYasO0oNU%2Fycdm%2FuBgTJZBnZcwqC7e2p%2FZYKsVio%2Bfb4s%2FoU9ncC%2F91Td5g1l2jD%2Bb44W2QmhyWTJnG4PK011IQO%2F0cKpi2PMCbKZNpUI5Z%2FltDFaivMOr1gux5yEz%2Fa8IhQbtV9CQQ8x3UgUCgSuQU1pE56m4IfLsF3jxcuX2m18BS4ls566N5KMUexLFx6shCCVO%2FnnExz%2BrlnCa8Nsx4lhi8N&X-Amz-Signature=0c56a40ae2da22a84c73886d264ddbc68c513b77e95498e802d6d48850ce4039&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FPLXV5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCuPdo3bGV5l3uLGvZ44S9GiKbk%2FTwuwIbZkU4mU07OywIhANclgDQSeLUeqn5ccFpYVSbMURa8byfXSjjWyN4aGD%2B9Kv8DCCMQABoMNjM3NDIzMTgzODA1IgwNb5sOt%2FqvWDv%2BcZAq3AMfmpaG7vy2v2QNbC3eQlf2jHOpWzI5WmFtzmryfUfVcGqvC2mx5Dcn2SvbtQUN795apsIk89NcK37FskvwWM5hC%2FPE38zoz1wshecwz7z9h5uuo8GQShJzYeA8suSK%2B0awR4GINpNZ92Bsuagm7FGFp3%2BuH1q%2BT%2BdYzbAoEyc508f1%2BOgLSkPULwr%2Bxeve6vF%2Fi0mnM7F6Ja9m2YfQE1MCFAgHglL8wofCza3Dk31e0nyxPCAUenDgYptIXs44NDIXrplj96fc6FFfO%2BsvBW8uXLNjnUIPK7TzFf%2FF%2BUjfQmgYyGEjBsrtthnlSXngjBEwJmFLNlzvWPCge9B2KIrxKdIdKt3iCs4%2Bj9jAmZLX3kcXQcxsWVxyyFgdIjGeCIIddwJ1ivO2XuQ01qpcCiXusYfP7X7%2BHlTFLoa4DfUvy%2F5g3sYFI2C%2BZ8N6HXr%2F0ZWdkTuAKjHFDpOyXEvn7rbeUQYkHlMCQ77iMmYUGJAWenlHYDmadm9JfANDw9XCPyYE7s3nxFVukZcjTRPMBiN0o4MB2Who3RJZhNSSkW1TKHKUvDYxB3UpxgSLUAQ%2BOOvuC5t6yOoUUixEpWQcdYuyjAf59lVaKY3J6GesLXlyW2alAdsBaNLZ2S1pSTDU7MnBBjqkAYasO0oNU%2Fycdm%2FuBgTJZBnZcwqC7e2p%2FZYKsVio%2Bfb4s%2FoU9ncC%2F91Td5g1l2jD%2Bb44W2QmhyWTJnG4PK011IQO%2F0cKpi2PMCbKZNpUI5Z%2FltDFaivMOr1gux5yEz%2Fa8IhQbtV9CQQ8x3UgUCgSuQU1pE56m4IfLsF3jxcuX2m18BS4ls566N5KMUexLFx6shCCVO%2FnnExz%2BrlnCa8Nsx4lhi8N&X-Amz-Signature=92be25a6b61b91d63ca6c61fa81890583ef133666cbccf6792150ccc0789adef&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FPLXV5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCuPdo3bGV5l3uLGvZ44S9GiKbk%2FTwuwIbZkU4mU07OywIhANclgDQSeLUeqn5ccFpYVSbMURa8byfXSjjWyN4aGD%2B9Kv8DCCMQABoMNjM3NDIzMTgzODA1IgwNb5sOt%2FqvWDv%2BcZAq3AMfmpaG7vy2v2QNbC3eQlf2jHOpWzI5WmFtzmryfUfVcGqvC2mx5Dcn2SvbtQUN795apsIk89NcK37FskvwWM5hC%2FPE38zoz1wshecwz7z9h5uuo8GQShJzYeA8suSK%2B0awR4GINpNZ92Bsuagm7FGFp3%2BuH1q%2BT%2BdYzbAoEyc508f1%2BOgLSkPULwr%2Bxeve6vF%2Fi0mnM7F6Ja9m2YfQE1MCFAgHglL8wofCza3Dk31e0nyxPCAUenDgYptIXs44NDIXrplj96fc6FFfO%2BsvBW8uXLNjnUIPK7TzFf%2FF%2BUjfQmgYyGEjBsrtthnlSXngjBEwJmFLNlzvWPCge9B2KIrxKdIdKt3iCs4%2Bj9jAmZLX3kcXQcxsWVxyyFgdIjGeCIIddwJ1ivO2XuQ01qpcCiXusYfP7X7%2BHlTFLoa4DfUvy%2F5g3sYFI2C%2BZ8N6HXr%2F0ZWdkTuAKjHFDpOyXEvn7rbeUQYkHlMCQ77iMmYUGJAWenlHYDmadm9JfANDw9XCPyYE7s3nxFVukZcjTRPMBiN0o4MB2Who3RJZhNSSkW1TKHKUvDYxB3UpxgSLUAQ%2BOOvuC5t6yOoUUixEpWQcdYuyjAf59lVaKY3J6GesLXlyW2alAdsBaNLZ2S1pSTDU7MnBBjqkAYasO0oNU%2Fycdm%2FuBgTJZBnZcwqC7e2p%2FZYKsVio%2Bfb4s%2FoU9ncC%2F91Td5g1l2jD%2Bb44W2QmhyWTJnG4PK011IQO%2F0cKpi2PMCbKZNpUI5Z%2FltDFaivMOr1gux5yEz%2Fa8IhQbtV9CQQ8x3UgUCgSuQU1pE56m4IfLsF3jxcuX2m18BS4ls566N5KMUexLFx6shCCVO%2FnnExz%2BrlnCa8Nsx4lhi8N&X-Amz-Signature=b645b5c864d0f5a9c033f2ca1f868b28b67578e563c46f5b942fb4414546d277&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FPLXV5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCuPdo3bGV5l3uLGvZ44S9GiKbk%2FTwuwIbZkU4mU07OywIhANclgDQSeLUeqn5ccFpYVSbMURa8byfXSjjWyN4aGD%2B9Kv8DCCMQABoMNjM3NDIzMTgzODA1IgwNb5sOt%2FqvWDv%2BcZAq3AMfmpaG7vy2v2QNbC3eQlf2jHOpWzI5WmFtzmryfUfVcGqvC2mx5Dcn2SvbtQUN795apsIk89NcK37FskvwWM5hC%2FPE38zoz1wshecwz7z9h5uuo8GQShJzYeA8suSK%2B0awR4GINpNZ92Bsuagm7FGFp3%2BuH1q%2BT%2BdYzbAoEyc508f1%2BOgLSkPULwr%2Bxeve6vF%2Fi0mnM7F6Ja9m2YfQE1MCFAgHglL8wofCza3Dk31e0nyxPCAUenDgYptIXs44NDIXrplj96fc6FFfO%2BsvBW8uXLNjnUIPK7TzFf%2FF%2BUjfQmgYyGEjBsrtthnlSXngjBEwJmFLNlzvWPCge9B2KIrxKdIdKt3iCs4%2Bj9jAmZLX3kcXQcxsWVxyyFgdIjGeCIIddwJ1ivO2XuQ01qpcCiXusYfP7X7%2BHlTFLoa4DfUvy%2F5g3sYFI2C%2BZ8N6HXr%2F0ZWdkTuAKjHFDpOyXEvn7rbeUQYkHlMCQ77iMmYUGJAWenlHYDmadm9JfANDw9XCPyYE7s3nxFVukZcjTRPMBiN0o4MB2Who3RJZhNSSkW1TKHKUvDYxB3UpxgSLUAQ%2BOOvuC5t6yOoUUixEpWQcdYuyjAf59lVaKY3J6GesLXlyW2alAdsBaNLZ2S1pSTDU7MnBBjqkAYasO0oNU%2Fycdm%2FuBgTJZBnZcwqC7e2p%2FZYKsVio%2Bfb4s%2FoU9ncC%2F91Td5g1l2jD%2Bb44W2QmhyWTJnG4PK011IQO%2F0cKpi2PMCbKZNpUI5Z%2FltDFaivMOr1gux5yEz%2Fa8IhQbtV9CQQ8x3UgUCgSuQU1pE56m4IfLsF3jxcuX2m18BS4ls566N5KMUexLFx6shCCVO%2FnnExz%2BrlnCa8Nsx4lhi8N&X-Amz-Signature=80419672759cb57f8fe56b3651c213180cbdf7bc0836192512d964c2460c0d61&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FPLXV5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCuPdo3bGV5l3uLGvZ44S9GiKbk%2FTwuwIbZkU4mU07OywIhANclgDQSeLUeqn5ccFpYVSbMURa8byfXSjjWyN4aGD%2B9Kv8DCCMQABoMNjM3NDIzMTgzODA1IgwNb5sOt%2FqvWDv%2BcZAq3AMfmpaG7vy2v2QNbC3eQlf2jHOpWzI5WmFtzmryfUfVcGqvC2mx5Dcn2SvbtQUN795apsIk89NcK37FskvwWM5hC%2FPE38zoz1wshecwz7z9h5uuo8GQShJzYeA8suSK%2B0awR4GINpNZ92Bsuagm7FGFp3%2BuH1q%2BT%2BdYzbAoEyc508f1%2BOgLSkPULwr%2Bxeve6vF%2Fi0mnM7F6Ja9m2YfQE1MCFAgHglL8wofCza3Dk31e0nyxPCAUenDgYptIXs44NDIXrplj96fc6FFfO%2BsvBW8uXLNjnUIPK7TzFf%2FF%2BUjfQmgYyGEjBsrtthnlSXngjBEwJmFLNlzvWPCge9B2KIrxKdIdKt3iCs4%2Bj9jAmZLX3kcXQcxsWVxyyFgdIjGeCIIddwJ1ivO2XuQ01qpcCiXusYfP7X7%2BHlTFLoa4DfUvy%2F5g3sYFI2C%2BZ8N6HXr%2F0ZWdkTuAKjHFDpOyXEvn7rbeUQYkHlMCQ77iMmYUGJAWenlHYDmadm9JfANDw9XCPyYE7s3nxFVukZcjTRPMBiN0o4MB2Who3RJZhNSSkW1TKHKUvDYxB3UpxgSLUAQ%2BOOvuC5t6yOoUUixEpWQcdYuyjAf59lVaKY3J6GesLXlyW2alAdsBaNLZ2S1pSTDU7MnBBjqkAYasO0oNU%2Fycdm%2FuBgTJZBnZcwqC7e2p%2FZYKsVio%2Bfb4s%2FoU9ncC%2F91Td5g1l2jD%2Bb44W2QmhyWTJnG4PK011IQO%2F0cKpi2PMCbKZNpUI5Z%2FltDFaivMOr1gux5yEz%2Fa8IhQbtV9CQQ8x3UgUCgSuQU1pE56m4IfLsF3jxcuX2m18BS4ls566N5KMUexLFx6shCCVO%2FnnExz%2BrlnCa8Nsx4lhi8N&X-Amz-Signature=f8c9e4ff6210eee0bd3e4b74acb2bf6a19fe6bd0150693c939d1dafb08d921ca&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
