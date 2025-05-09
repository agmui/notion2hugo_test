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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCB6T7XG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzZkUTnvUQS7ne5%2F1oodE9oior%2Bwp8zITyjP83wNeIxAiApKswaYVLDjU9zHUp7HvfbBBN9vpTlrEE0iLwj8vkYnSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOzbnDXEd8Z6V4TpaKtwDzI6Nn5tcWINmhraZamVFj9Xn9ozs5ISG8ohDCFXvcMJ60i0uM2nzCmgtF3y4z2uXg4DHS6eYdNnhTxvAIDaG53P0RqGJlS5sFT14lKdLFTI39KJO0cDVz06Fi0oS%2FOsGtCgOtHTHEplht9s4rxXk3vBtmS4JsO4So5t4Yg3sdeeDTXIZ3Ee3FK0Wke0QbhmFx3jv2XEOvQXFMSmEdZk5%2FocNrofEwxAdvWJjpifa4H4MPe6gqnaA5rpNRef%2FQQz%2BILPnwQfW3gBaXeIm0Ne85ZdB2Rmcn9mtXaZq1G0oVijQkf77NuqDq64TUMzP2bkvJSaYRd4eUuYwqAitU3BnXOIA0zzalSuRXtqTgRIhbHRpH1ZiW2r3CsrydbhYOHyU5Mhkko3s3zHV67WhUokLPceR2PeoFuXcojPf%2FvJEr%2BFuGnocTyk3kuzwyUAXixI99F1wWpcBFeaRqh9VjJ7XLRNa3wxYzzytDy3yTrXY5%2BUGCUb7UDXJnqd2GwFdLWyqJ7BKtXrvl0hMptqR0jC69ODNaA2xAyMqwZPgVceBbv4CkKVGyJk%2FP3gIkqynkMqJu%2F8apIsWx99hOiZID3P%2FuDCXfymuT0qYRTZgFnVaK0pfhiLPRUI1NeE09vsw2Kz3wAY6pgHQKHUK2f44vmVMgVbMo3cFAXW4K%2BhACEzicFQS%2BibfrXVcMhYKN52TIcnM1FbMxZzQIf4DvVdBlugGRUsrjjxN%2BHykQlLsyEk2l5LwozO0oZjgfj8%2BrfRxffgx8flf6%2F9OdpKHVguDcM4Of7lOdos19TP7UsDliP6Yn3NtJVKLReO%2BXZICHn587vW36YBsDPIOj8wY30m9dTnw28UuypjyV88g%2Fb46&X-Amz-Signature=b59526f120d9f13162863c0194b4961ac908159038fef2885ab580054b818d71&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCB6T7XG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzZkUTnvUQS7ne5%2F1oodE9oior%2Bwp8zITyjP83wNeIxAiApKswaYVLDjU9zHUp7HvfbBBN9vpTlrEE0iLwj8vkYnSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOzbnDXEd8Z6V4TpaKtwDzI6Nn5tcWINmhraZamVFj9Xn9ozs5ISG8ohDCFXvcMJ60i0uM2nzCmgtF3y4z2uXg4DHS6eYdNnhTxvAIDaG53P0RqGJlS5sFT14lKdLFTI39KJO0cDVz06Fi0oS%2FOsGtCgOtHTHEplht9s4rxXk3vBtmS4JsO4So5t4Yg3sdeeDTXIZ3Ee3FK0Wke0QbhmFx3jv2XEOvQXFMSmEdZk5%2FocNrofEwxAdvWJjpifa4H4MPe6gqnaA5rpNRef%2FQQz%2BILPnwQfW3gBaXeIm0Ne85ZdB2Rmcn9mtXaZq1G0oVijQkf77NuqDq64TUMzP2bkvJSaYRd4eUuYwqAitU3BnXOIA0zzalSuRXtqTgRIhbHRpH1ZiW2r3CsrydbhYOHyU5Mhkko3s3zHV67WhUokLPceR2PeoFuXcojPf%2FvJEr%2BFuGnocTyk3kuzwyUAXixI99F1wWpcBFeaRqh9VjJ7XLRNa3wxYzzytDy3yTrXY5%2BUGCUb7UDXJnqd2GwFdLWyqJ7BKtXrvl0hMptqR0jC69ODNaA2xAyMqwZPgVceBbv4CkKVGyJk%2FP3gIkqynkMqJu%2F8apIsWx99hOiZID3P%2FuDCXfymuT0qYRTZgFnVaK0pfhiLPRUI1NeE09vsw2Kz3wAY6pgHQKHUK2f44vmVMgVbMo3cFAXW4K%2BhACEzicFQS%2BibfrXVcMhYKN52TIcnM1FbMxZzQIf4DvVdBlugGRUsrjjxN%2BHykQlLsyEk2l5LwozO0oZjgfj8%2BrfRxffgx8flf6%2F9OdpKHVguDcM4Of7lOdos19TP7UsDliP6Yn3NtJVKLReO%2BXZICHn587vW36YBsDPIOj8wY30m9dTnw28UuypjyV88g%2Fb46&X-Amz-Signature=90cd93d747f8b532abdb3c7475507b3b151bffe6f68f6a65ec145e670ef8aecd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCB6T7XG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzZkUTnvUQS7ne5%2F1oodE9oior%2Bwp8zITyjP83wNeIxAiApKswaYVLDjU9zHUp7HvfbBBN9vpTlrEE0iLwj8vkYnSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOzbnDXEd8Z6V4TpaKtwDzI6Nn5tcWINmhraZamVFj9Xn9ozs5ISG8ohDCFXvcMJ60i0uM2nzCmgtF3y4z2uXg4DHS6eYdNnhTxvAIDaG53P0RqGJlS5sFT14lKdLFTI39KJO0cDVz06Fi0oS%2FOsGtCgOtHTHEplht9s4rxXk3vBtmS4JsO4So5t4Yg3sdeeDTXIZ3Ee3FK0Wke0QbhmFx3jv2XEOvQXFMSmEdZk5%2FocNrofEwxAdvWJjpifa4H4MPe6gqnaA5rpNRef%2FQQz%2BILPnwQfW3gBaXeIm0Ne85ZdB2Rmcn9mtXaZq1G0oVijQkf77NuqDq64TUMzP2bkvJSaYRd4eUuYwqAitU3BnXOIA0zzalSuRXtqTgRIhbHRpH1ZiW2r3CsrydbhYOHyU5Mhkko3s3zHV67WhUokLPceR2PeoFuXcojPf%2FvJEr%2BFuGnocTyk3kuzwyUAXixI99F1wWpcBFeaRqh9VjJ7XLRNa3wxYzzytDy3yTrXY5%2BUGCUb7UDXJnqd2GwFdLWyqJ7BKtXrvl0hMptqR0jC69ODNaA2xAyMqwZPgVceBbv4CkKVGyJk%2FP3gIkqynkMqJu%2F8apIsWx99hOiZID3P%2FuDCXfymuT0qYRTZgFnVaK0pfhiLPRUI1NeE09vsw2Kz3wAY6pgHQKHUK2f44vmVMgVbMo3cFAXW4K%2BhACEzicFQS%2BibfrXVcMhYKN52TIcnM1FbMxZzQIf4DvVdBlugGRUsrjjxN%2BHykQlLsyEk2l5LwozO0oZjgfj8%2BrfRxffgx8flf6%2F9OdpKHVguDcM4Of7lOdos19TP7UsDliP6Yn3NtJVKLReO%2BXZICHn587vW36YBsDPIOj8wY30m9dTnw28UuypjyV88g%2Fb46&X-Amz-Signature=65eb6191d45a2bf418c056329a42ebf6ee58d5af5f636de19e7c786f6c87578d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCB6T7XG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzZkUTnvUQS7ne5%2F1oodE9oior%2Bwp8zITyjP83wNeIxAiApKswaYVLDjU9zHUp7HvfbBBN9vpTlrEE0iLwj8vkYnSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOzbnDXEd8Z6V4TpaKtwDzI6Nn5tcWINmhraZamVFj9Xn9ozs5ISG8ohDCFXvcMJ60i0uM2nzCmgtF3y4z2uXg4DHS6eYdNnhTxvAIDaG53P0RqGJlS5sFT14lKdLFTI39KJO0cDVz06Fi0oS%2FOsGtCgOtHTHEplht9s4rxXk3vBtmS4JsO4So5t4Yg3sdeeDTXIZ3Ee3FK0Wke0QbhmFx3jv2XEOvQXFMSmEdZk5%2FocNrofEwxAdvWJjpifa4H4MPe6gqnaA5rpNRef%2FQQz%2BILPnwQfW3gBaXeIm0Ne85ZdB2Rmcn9mtXaZq1G0oVijQkf77NuqDq64TUMzP2bkvJSaYRd4eUuYwqAitU3BnXOIA0zzalSuRXtqTgRIhbHRpH1ZiW2r3CsrydbhYOHyU5Mhkko3s3zHV67WhUokLPceR2PeoFuXcojPf%2FvJEr%2BFuGnocTyk3kuzwyUAXixI99F1wWpcBFeaRqh9VjJ7XLRNa3wxYzzytDy3yTrXY5%2BUGCUb7UDXJnqd2GwFdLWyqJ7BKtXrvl0hMptqR0jC69ODNaA2xAyMqwZPgVceBbv4CkKVGyJk%2FP3gIkqynkMqJu%2F8apIsWx99hOiZID3P%2FuDCXfymuT0qYRTZgFnVaK0pfhiLPRUI1NeE09vsw2Kz3wAY6pgHQKHUK2f44vmVMgVbMo3cFAXW4K%2BhACEzicFQS%2BibfrXVcMhYKN52TIcnM1FbMxZzQIf4DvVdBlugGRUsrjjxN%2BHykQlLsyEk2l5LwozO0oZjgfj8%2BrfRxffgx8flf6%2F9OdpKHVguDcM4Of7lOdos19TP7UsDliP6Yn3NtJVKLReO%2BXZICHn587vW36YBsDPIOj8wY30m9dTnw28UuypjyV88g%2Fb46&X-Amz-Signature=4e7b13392a1c34cc20db5f1d43365dc718fbd13e0102f555feeadf03d87fffad&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCB6T7XG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzZkUTnvUQS7ne5%2F1oodE9oior%2Bwp8zITyjP83wNeIxAiApKswaYVLDjU9zHUp7HvfbBBN9vpTlrEE0iLwj8vkYnSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOzbnDXEd8Z6V4TpaKtwDzI6Nn5tcWINmhraZamVFj9Xn9ozs5ISG8ohDCFXvcMJ60i0uM2nzCmgtF3y4z2uXg4DHS6eYdNnhTxvAIDaG53P0RqGJlS5sFT14lKdLFTI39KJO0cDVz06Fi0oS%2FOsGtCgOtHTHEplht9s4rxXk3vBtmS4JsO4So5t4Yg3sdeeDTXIZ3Ee3FK0Wke0QbhmFx3jv2XEOvQXFMSmEdZk5%2FocNrofEwxAdvWJjpifa4H4MPe6gqnaA5rpNRef%2FQQz%2BILPnwQfW3gBaXeIm0Ne85ZdB2Rmcn9mtXaZq1G0oVijQkf77NuqDq64TUMzP2bkvJSaYRd4eUuYwqAitU3BnXOIA0zzalSuRXtqTgRIhbHRpH1ZiW2r3CsrydbhYOHyU5Mhkko3s3zHV67WhUokLPceR2PeoFuXcojPf%2FvJEr%2BFuGnocTyk3kuzwyUAXixI99F1wWpcBFeaRqh9VjJ7XLRNa3wxYzzytDy3yTrXY5%2BUGCUb7UDXJnqd2GwFdLWyqJ7BKtXrvl0hMptqR0jC69ODNaA2xAyMqwZPgVceBbv4CkKVGyJk%2FP3gIkqynkMqJu%2F8apIsWx99hOiZID3P%2FuDCXfymuT0qYRTZgFnVaK0pfhiLPRUI1NeE09vsw2Kz3wAY6pgHQKHUK2f44vmVMgVbMo3cFAXW4K%2BhACEzicFQS%2BibfrXVcMhYKN52TIcnM1FbMxZzQIf4DvVdBlugGRUsrjjxN%2BHykQlLsyEk2l5LwozO0oZjgfj8%2BrfRxffgx8flf6%2F9OdpKHVguDcM4Of7lOdos19TP7UsDliP6Yn3NtJVKLReO%2BXZICHn587vW36YBsDPIOj8wY30m9dTnw28UuypjyV88g%2Fb46&X-Amz-Signature=85648fbec63ba33d7cddf39ff29bc95999e85acca1a5151f8e188f079e9302f7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCB6T7XG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzZkUTnvUQS7ne5%2F1oodE9oior%2Bwp8zITyjP83wNeIxAiApKswaYVLDjU9zHUp7HvfbBBN9vpTlrEE0iLwj8vkYnSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOzbnDXEd8Z6V4TpaKtwDzI6Nn5tcWINmhraZamVFj9Xn9ozs5ISG8ohDCFXvcMJ60i0uM2nzCmgtF3y4z2uXg4DHS6eYdNnhTxvAIDaG53P0RqGJlS5sFT14lKdLFTI39KJO0cDVz06Fi0oS%2FOsGtCgOtHTHEplht9s4rxXk3vBtmS4JsO4So5t4Yg3sdeeDTXIZ3Ee3FK0Wke0QbhmFx3jv2XEOvQXFMSmEdZk5%2FocNrofEwxAdvWJjpifa4H4MPe6gqnaA5rpNRef%2FQQz%2BILPnwQfW3gBaXeIm0Ne85ZdB2Rmcn9mtXaZq1G0oVijQkf77NuqDq64TUMzP2bkvJSaYRd4eUuYwqAitU3BnXOIA0zzalSuRXtqTgRIhbHRpH1ZiW2r3CsrydbhYOHyU5Mhkko3s3zHV67WhUokLPceR2PeoFuXcojPf%2FvJEr%2BFuGnocTyk3kuzwyUAXixI99F1wWpcBFeaRqh9VjJ7XLRNa3wxYzzytDy3yTrXY5%2BUGCUb7UDXJnqd2GwFdLWyqJ7BKtXrvl0hMptqR0jC69ODNaA2xAyMqwZPgVceBbv4CkKVGyJk%2FP3gIkqynkMqJu%2F8apIsWx99hOiZID3P%2FuDCXfymuT0qYRTZgFnVaK0pfhiLPRUI1NeE09vsw2Kz3wAY6pgHQKHUK2f44vmVMgVbMo3cFAXW4K%2BhACEzicFQS%2BibfrXVcMhYKN52TIcnM1FbMxZzQIf4DvVdBlugGRUsrjjxN%2BHykQlLsyEk2l5LwozO0oZjgfj8%2BrfRxffgx8flf6%2F9OdpKHVguDcM4Of7lOdos19TP7UsDliP6Yn3NtJVKLReO%2BXZICHn587vW36YBsDPIOj8wY30m9dTnw28UuypjyV88g%2Fb46&X-Amz-Signature=cd5d22093da20c000105f2052fdc003cf5f2d221db6c0d950af29e2f2f31ffcc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCB6T7XG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzZkUTnvUQS7ne5%2F1oodE9oior%2Bwp8zITyjP83wNeIxAiApKswaYVLDjU9zHUp7HvfbBBN9vpTlrEE0iLwj8vkYnSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOzbnDXEd8Z6V4TpaKtwDzI6Nn5tcWINmhraZamVFj9Xn9ozs5ISG8ohDCFXvcMJ60i0uM2nzCmgtF3y4z2uXg4DHS6eYdNnhTxvAIDaG53P0RqGJlS5sFT14lKdLFTI39KJO0cDVz06Fi0oS%2FOsGtCgOtHTHEplht9s4rxXk3vBtmS4JsO4So5t4Yg3sdeeDTXIZ3Ee3FK0Wke0QbhmFx3jv2XEOvQXFMSmEdZk5%2FocNrofEwxAdvWJjpifa4H4MPe6gqnaA5rpNRef%2FQQz%2BILPnwQfW3gBaXeIm0Ne85ZdB2Rmcn9mtXaZq1G0oVijQkf77NuqDq64TUMzP2bkvJSaYRd4eUuYwqAitU3BnXOIA0zzalSuRXtqTgRIhbHRpH1ZiW2r3CsrydbhYOHyU5Mhkko3s3zHV67WhUokLPceR2PeoFuXcojPf%2FvJEr%2BFuGnocTyk3kuzwyUAXixI99F1wWpcBFeaRqh9VjJ7XLRNa3wxYzzytDy3yTrXY5%2BUGCUb7UDXJnqd2GwFdLWyqJ7BKtXrvl0hMptqR0jC69ODNaA2xAyMqwZPgVceBbv4CkKVGyJk%2FP3gIkqynkMqJu%2F8apIsWx99hOiZID3P%2FuDCXfymuT0qYRTZgFnVaK0pfhiLPRUI1NeE09vsw2Kz3wAY6pgHQKHUK2f44vmVMgVbMo3cFAXW4K%2BhACEzicFQS%2BibfrXVcMhYKN52TIcnM1FbMxZzQIf4DvVdBlugGRUsrjjxN%2BHykQlLsyEk2l5LwozO0oZjgfj8%2BrfRxffgx8flf6%2F9OdpKHVguDcM4Of7lOdos19TP7UsDliP6Yn3NtJVKLReO%2BXZICHn587vW36YBsDPIOj8wY30m9dTnw28UuypjyV88g%2Fb46&X-Amz-Signature=8e0e7ecf6e32fb207edac97b4568203bca03b336397af3fbff375df54413f519&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
