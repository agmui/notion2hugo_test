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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ACBEUX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHYHTkkJ%2BgbEpdhuNbshmNjvR9wIKaUXMeInG9gw2xvTAiEAhv2gMRMSqcHlDaOHmq7IJmrpe033W2B907qs0myrj8cq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPGc8NwDr46N5nEAyCrcAxwsqddgd1P4M3zonntmhluz1RBNHkMdA8ttc7wQHFDvgltn2dJaiv1tBT4LunNpaPZacUzk%2BG5h3Z6tdb6JUwqS21l28aZ%2F%2B9axokXDfnB7UBX%2FPdNYYTWY1Jj9C6uz7g8gjzHYR3dezUwQr4UMrSk0OgY3vJ%2FI0KkpT0xcedAe%2FXBlKsTNhJX5SCMsXmBSoEG9PbqjXRIBdAqvYojZJnfzL1T8AzBxyCGeoUy07Qbm7YIxk7vjBhfSixuF1Gl9ubTV2%2FUvfvpeRd%2F2Gs8iveDc8XnCfnOEt%2FYGtunrxivvPOsrEX%2FKDVxv5XsYb6VEMGg2mh1rWyFhioqV2LLaF7ih8ZkGKJZbf1jM9K0YhK5OAQ6OBRkz3c7UCu0h4GoBM8FgejLreXjqdH5rT2cBXaYVaS4nnXSKr87qq2ZeGWGX0MkTZwln6%2Bf0wkn2yIEUJZKU3aW2lP3RnSiffrhu65eatsMwiGYz4h0zvrzlss%2B5rHXjzrbTM0KGXPS4GjIRegD11%2FxIUHL1ltwiUZVKY4bnyBFZiuQYfqk8ybttiErUkFMscdoyzaehm%2FOV%2Flyg7pIXWVhYqTmovobvB9nFYKhnhNEJ7DqwocSBYVj%2BZnvvWWBFnVlontuMUDvUMNTy9MIGOqUBGA62L9SQWxdLNlHPDhdlS9pWLulFDIlDbdKeS9UH3q0F3G2vcadYdlrNiwlOgCB9oFQbt3VkYhXMAS5ilprYqsgvW82ohs4scmJctDhhcSeCsR4H9D%2BdkWTJOCJywC%2BB97NF4GnDTcDz9no3Pn6lpfVvTLnP2B1C4ICDZR7JQwTYAxEnUGdZ%2BfpOPR1486I6zF%2BcL0wZqvP5QkgHzzRhKIMBHmyX&X-Amz-Signature=bc0f8fb390d3d8fc87c505eac589c40f10df1043175014cc641e4bb11c3f53cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ACBEUX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHYHTkkJ%2BgbEpdhuNbshmNjvR9wIKaUXMeInG9gw2xvTAiEAhv2gMRMSqcHlDaOHmq7IJmrpe033W2B907qs0myrj8cq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPGc8NwDr46N5nEAyCrcAxwsqddgd1P4M3zonntmhluz1RBNHkMdA8ttc7wQHFDvgltn2dJaiv1tBT4LunNpaPZacUzk%2BG5h3Z6tdb6JUwqS21l28aZ%2F%2B9axokXDfnB7UBX%2FPdNYYTWY1Jj9C6uz7g8gjzHYR3dezUwQr4UMrSk0OgY3vJ%2FI0KkpT0xcedAe%2FXBlKsTNhJX5SCMsXmBSoEG9PbqjXRIBdAqvYojZJnfzL1T8AzBxyCGeoUy07Qbm7YIxk7vjBhfSixuF1Gl9ubTV2%2FUvfvpeRd%2F2Gs8iveDc8XnCfnOEt%2FYGtunrxivvPOsrEX%2FKDVxv5XsYb6VEMGg2mh1rWyFhioqV2LLaF7ih8ZkGKJZbf1jM9K0YhK5OAQ6OBRkz3c7UCu0h4GoBM8FgejLreXjqdH5rT2cBXaYVaS4nnXSKr87qq2ZeGWGX0MkTZwln6%2Bf0wkn2yIEUJZKU3aW2lP3RnSiffrhu65eatsMwiGYz4h0zvrzlss%2B5rHXjzrbTM0KGXPS4GjIRegD11%2FxIUHL1ltwiUZVKY4bnyBFZiuQYfqk8ybttiErUkFMscdoyzaehm%2FOV%2Flyg7pIXWVhYqTmovobvB9nFYKhnhNEJ7DqwocSBYVj%2BZnvvWWBFnVlontuMUDvUMNTy9MIGOqUBGA62L9SQWxdLNlHPDhdlS9pWLulFDIlDbdKeS9UH3q0F3G2vcadYdlrNiwlOgCB9oFQbt3VkYhXMAS5ilprYqsgvW82ohs4scmJctDhhcSeCsR4H9D%2BdkWTJOCJywC%2BB97NF4GnDTcDz9no3Pn6lpfVvTLnP2B1C4ICDZR7JQwTYAxEnUGdZ%2BfpOPR1486I6zF%2BcL0wZqvP5QkgHzzRhKIMBHmyX&X-Amz-Signature=c33266ae36b81a57ca5303dbbc948b25c09cbc2b5696e7103d022d7f1dbc6ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ACBEUX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHYHTkkJ%2BgbEpdhuNbshmNjvR9wIKaUXMeInG9gw2xvTAiEAhv2gMRMSqcHlDaOHmq7IJmrpe033W2B907qs0myrj8cq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPGc8NwDr46N5nEAyCrcAxwsqddgd1P4M3zonntmhluz1RBNHkMdA8ttc7wQHFDvgltn2dJaiv1tBT4LunNpaPZacUzk%2BG5h3Z6tdb6JUwqS21l28aZ%2F%2B9axokXDfnB7UBX%2FPdNYYTWY1Jj9C6uz7g8gjzHYR3dezUwQr4UMrSk0OgY3vJ%2FI0KkpT0xcedAe%2FXBlKsTNhJX5SCMsXmBSoEG9PbqjXRIBdAqvYojZJnfzL1T8AzBxyCGeoUy07Qbm7YIxk7vjBhfSixuF1Gl9ubTV2%2FUvfvpeRd%2F2Gs8iveDc8XnCfnOEt%2FYGtunrxivvPOsrEX%2FKDVxv5XsYb6VEMGg2mh1rWyFhioqV2LLaF7ih8ZkGKJZbf1jM9K0YhK5OAQ6OBRkz3c7UCu0h4GoBM8FgejLreXjqdH5rT2cBXaYVaS4nnXSKr87qq2ZeGWGX0MkTZwln6%2Bf0wkn2yIEUJZKU3aW2lP3RnSiffrhu65eatsMwiGYz4h0zvrzlss%2B5rHXjzrbTM0KGXPS4GjIRegD11%2FxIUHL1ltwiUZVKY4bnyBFZiuQYfqk8ybttiErUkFMscdoyzaehm%2FOV%2Flyg7pIXWVhYqTmovobvB9nFYKhnhNEJ7DqwocSBYVj%2BZnvvWWBFnVlontuMUDvUMNTy9MIGOqUBGA62L9SQWxdLNlHPDhdlS9pWLulFDIlDbdKeS9UH3q0F3G2vcadYdlrNiwlOgCB9oFQbt3VkYhXMAS5ilprYqsgvW82ohs4scmJctDhhcSeCsR4H9D%2BdkWTJOCJywC%2BB97NF4GnDTcDz9no3Pn6lpfVvTLnP2B1C4ICDZR7JQwTYAxEnUGdZ%2BfpOPR1486I6zF%2BcL0wZqvP5QkgHzzRhKIMBHmyX&X-Amz-Signature=41a4bfab80aa5e520d562a10b60c3576b9012b7aa9d07ac86b91e3830e29fc6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ACBEUX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHYHTkkJ%2BgbEpdhuNbshmNjvR9wIKaUXMeInG9gw2xvTAiEAhv2gMRMSqcHlDaOHmq7IJmrpe033W2B907qs0myrj8cq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPGc8NwDr46N5nEAyCrcAxwsqddgd1P4M3zonntmhluz1RBNHkMdA8ttc7wQHFDvgltn2dJaiv1tBT4LunNpaPZacUzk%2BG5h3Z6tdb6JUwqS21l28aZ%2F%2B9axokXDfnB7UBX%2FPdNYYTWY1Jj9C6uz7g8gjzHYR3dezUwQr4UMrSk0OgY3vJ%2FI0KkpT0xcedAe%2FXBlKsTNhJX5SCMsXmBSoEG9PbqjXRIBdAqvYojZJnfzL1T8AzBxyCGeoUy07Qbm7YIxk7vjBhfSixuF1Gl9ubTV2%2FUvfvpeRd%2F2Gs8iveDc8XnCfnOEt%2FYGtunrxivvPOsrEX%2FKDVxv5XsYb6VEMGg2mh1rWyFhioqV2LLaF7ih8ZkGKJZbf1jM9K0YhK5OAQ6OBRkz3c7UCu0h4GoBM8FgejLreXjqdH5rT2cBXaYVaS4nnXSKr87qq2ZeGWGX0MkTZwln6%2Bf0wkn2yIEUJZKU3aW2lP3RnSiffrhu65eatsMwiGYz4h0zvrzlss%2B5rHXjzrbTM0KGXPS4GjIRegD11%2FxIUHL1ltwiUZVKY4bnyBFZiuQYfqk8ybttiErUkFMscdoyzaehm%2FOV%2Flyg7pIXWVhYqTmovobvB9nFYKhnhNEJ7DqwocSBYVj%2BZnvvWWBFnVlontuMUDvUMNTy9MIGOqUBGA62L9SQWxdLNlHPDhdlS9pWLulFDIlDbdKeS9UH3q0F3G2vcadYdlrNiwlOgCB9oFQbt3VkYhXMAS5ilprYqsgvW82ohs4scmJctDhhcSeCsR4H9D%2BdkWTJOCJywC%2BB97NF4GnDTcDz9no3Pn6lpfVvTLnP2B1C4ICDZR7JQwTYAxEnUGdZ%2BfpOPR1486I6zF%2BcL0wZqvP5QkgHzzRhKIMBHmyX&X-Amz-Signature=3899ae86fea4cd303e28ce4f275fcea2bcd6f5a8b07ce0649b6d7bbb54608b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ACBEUX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHYHTkkJ%2BgbEpdhuNbshmNjvR9wIKaUXMeInG9gw2xvTAiEAhv2gMRMSqcHlDaOHmq7IJmrpe033W2B907qs0myrj8cq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPGc8NwDr46N5nEAyCrcAxwsqddgd1P4M3zonntmhluz1RBNHkMdA8ttc7wQHFDvgltn2dJaiv1tBT4LunNpaPZacUzk%2BG5h3Z6tdb6JUwqS21l28aZ%2F%2B9axokXDfnB7UBX%2FPdNYYTWY1Jj9C6uz7g8gjzHYR3dezUwQr4UMrSk0OgY3vJ%2FI0KkpT0xcedAe%2FXBlKsTNhJX5SCMsXmBSoEG9PbqjXRIBdAqvYojZJnfzL1T8AzBxyCGeoUy07Qbm7YIxk7vjBhfSixuF1Gl9ubTV2%2FUvfvpeRd%2F2Gs8iveDc8XnCfnOEt%2FYGtunrxivvPOsrEX%2FKDVxv5XsYb6VEMGg2mh1rWyFhioqV2LLaF7ih8ZkGKJZbf1jM9K0YhK5OAQ6OBRkz3c7UCu0h4GoBM8FgejLreXjqdH5rT2cBXaYVaS4nnXSKr87qq2ZeGWGX0MkTZwln6%2Bf0wkn2yIEUJZKU3aW2lP3RnSiffrhu65eatsMwiGYz4h0zvrzlss%2B5rHXjzrbTM0KGXPS4GjIRegD11%2FxIUHL1ltwiUZVKY4bnyBFZiuQYfqk8ybttiErUkFMscdoyzaehm%2FOV%2Flyg7pIXWVhYqTmovobvB9nFYKhnhNEJ7DqwocSBYVj%2BZnvvWWBFnVlontuMUDvUMNTy9MIGOqUBGA62L9SQWxdLNlHPDhdlS9pWLulFDIlDbdKeS9UH3q0F3G2vcadYdlrNiwlOgCB9oFQbt3VkYhXMAS5ilprYqsgvW82ohs4scmJctDhhcSeCsR4H9D%2BdkWTJOCJywC%2BB97NF4GnDTcDz9no3Pn6lpfVvTLnP2B1C4ICDZR7JQwTYAxEnUGdZ%2BfpOPR1486I6zF%2BcL0wZqvP5QkgHzzRhKIMBHmyX&X-Amz-Signature=f23959015ded059bf277bf4993f9b3e7adf491a156d938adcc33b58776afbbf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ACBEUX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHYHTkkJ%2BgbEpdhuNbshmNjvR9wIKaUXMeInG9gw2xvTAiEAhv2gMRMSqcHlDaOHmq7IJmrpe033W2B907qs0myrj8cq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPGc8NwDr46N5nEAyCrcAxwsqddgd1P4M3zonntmhluz1RBNHkMdA8ttc7wQHFDvgltn2dJaiv1tBT4LunNpaPZacUzk%2BG5h3Z6tdb6JUwqS21l28aZ%2F%2B9axokXDfnB7UBX%2FPdNYYTWY1Jj9C6uz7g8gjzHYR3dezUwQr4UMrSk0OgY3vJ%2FI0KkpT0xcedAe%2FXBlKsTNhJX5SCMsXmBSoEG9PbqjXRIBdAqvYojZJnfzL1T8AzBxyCGeoUy07Qbm7YIxk7vjBhfSixuF1Gl9ubTV2%2FUvfvpeRd%2F2Gs8iveDc8XnCfnOEt%2FYGtunrxivvPOsrEX%2FKDVxv5XsYb6VEMGg2mh1rWyFhioqV2LLaF7ih8ZkGKJZbf1jM9K0YhK5OAQ6OBRkz3c7UCu0h4GoBM8FgejLreXjqdH5rT2cBXaYVaS4nnXSKr87qq2ZeGWGX0MkTZwln6%2Bf0wkn2yIEUJZKU3aW2lP3RnSiffrhu65eatsMwiGYz4h0zvrzlss%2B5rHXjzrbTM0KGXPS4GjIRegD11%2FxIUHL1ltwiUZVKY4bnyBFZiuQYfqk8ybttiErUkFMscdoyzaehm%2FOV%2Flyg7pIXWVhYqTmovobvB9nFYKhnhNEJ7DqwocSBYVj%2BZnvvWWBFnVlontuMUDvUMNTy9MIGOqUBGA62L9SQWxdLNlHPDhdlS9pWLulFDIlDbdKeS9UH3q0F3G2vcadYdlrNiwlOgCB9oFQbt3VkYhXMAS5ilprYqsgvW82ohs4scmJctDhhcSeCsR4H9D%2BdkWTJOCJywC%2BB97NF4GnDTcDz9no3Pn6lpfVvTLnP2B1C4ICDZR7JQwTYAxEnUGdZ%2BfpOPR1486I6zF%2BcL0wZqvP5QkgHzzRhKIMBHmyX&X-Amz-Signature=9a5200eac370ab1bb6c680a48b82f5af4d4a4bd96e9f1b7773e1eff70c0a92dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ACBEUX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHYHTkkJ%2BgbEpdhuNbshmNjvR9wIKaUXMeInG9gw2xvTAiEAhv2gMRMSqcHlDaOHmq7IJmrpe033W2B907qs0myrj8cq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPGc8NwDr46N5nEAyCrcAxwsqddgd1P4M3zonntmhluz1RBNHkMdA8ttc7wQHFDvgltn2dJaiv1tBT4LunNpaPZacUzk%2BG5h3Z6tdb6JUwqS21l28aZ%2F%2B9axokXDfnB7UBX%2FPdNYYTWY1Jj9C6uz7g8gjzHYR3dezUwQr4UMrSk0OgY3vJ%2FI0KkpT0xcedAe%2FXBlKsTNhJX5SCMsXmBSoEG9PbqjXRIBdAqvYojZJnfzL1T8AzBxyCGeoUy07Qbm7YIxk7vjBhfSixuF1Gl9ubTV2%2FUvfvpeRd%2F2Gs8iveDc8XnCfnOEt%2FYGtunrxivvPOsrEX%2FKDVxv5XsYb6VEMGg2mh1rWyFhioqV2LLaF7ih8ZkGKJZbf1jM9K0YhK5OAQ6OBRkz3c7UCu0h4GoBM8FgejLreXjqdH5rT2cBXaYVaS4nnXSKr87qq2ZeGWGX0MkTZwln6%2Bf0wkn2yIEUJZKU3aW2lP3RnSiffrhu65eatsMwiGYz4h0zvrzlss%2B5rHXjzrbTM0KGXPS4GjIRegD11%2FxIUHL1ltwiUZVKY4bnyBFZiuQYfqk8ybttiErUkFMscdoyzaehm%2FOV%2Flyg7pIXWVhYqTmovobvB9nFYKhnhNEJ7DqwocSBYVj%2BZnvvWWBFnVlontuMUDvUMNTy9MIGOqUBGA62L9SQWxdLNlHPDhdlS9pWLulFDIlDbdKeS9UH3q0F3G2vcadYdlrNiwlOgCB9oFQbt3VkYhXMAS5ilprYqsgvW82ohs4scmJctDhhcSeCsR4H9D%2BdkWTJOCJywC%2BB97NF4GnDTcDz9no3Pn6lpfVvTLnP2B1C4ICDZR7JQwTYAxEnUGdZ%2BfpOPR1486I6zF%2BcL0wZqvP5QkgHzzRhKIMBHmyX&X-Amz-Signature=ca6776d93ca8af89c49484a5a101125470f7b1d2a43d272b5a9c7fc3c69e1f83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
