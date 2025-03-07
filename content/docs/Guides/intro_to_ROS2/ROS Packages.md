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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBUW6HE3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDfszYiE5viApyBX1reo8f7ahY4SU0e8T28ExbjR2RFxQIhAICqs9zC%2Fyi2S87%2BCUsW4DlsF1ini5OrpQLkghU9k3rQKv8DCEkQABoMNjM3NDIzMTgzODA1IgyIfu06p3NWgj1tmCYq3AMN9KQa%2FA6XENZ5TyjtB4CLD9xl74kGURkKMZv8kXuJ4h%2BUE564%2Btep9a%2FeU3Luey6gIwHgViowqzjOxpZQu6sHW%2BzTKv7MoFTpclOchZc0SIki8BPlygvjSJsO7eI%2FLrL%2Brmbb2iuYUciibnDnolVk4xs79vOIhWlRvOtk8p%2BU9uzMWKjqEG%2FwR3U4SZ%2BeOstNQlcAX1eD2crE0NsJOY%2Btyenst0RrMi9J7z5%2B4VPa%2FGNZGu%2FOQUhjtJjjgoaaYcL1E3WQILHzDWX4O67%2F2GUGcJ8EQkLCf%2BlCEl1QAOpVt89ELNyTt1rPwZKa7MQSgLajZ4yRh0msAlTbBvJ26ScPqX6ppDLfVh0ULGxQKP5gKwZaBL0CZeJQsGRjrvWYLsuOZ0R2ILkWDsAdST8TxPwYedHDEqsQrHjUKJbtO725335wXtO%2F8djgpe4QVEScoYDspJhSABfqnHZAt%2BS9KlhIfsdVKlxZob9ictPZD3yKnw4%2B%2F%2FEfBSn0u6PEX%2Fpxbw%2FdNFMWKZfZlL0hiq%2FeT51Dy83rHnt1HsV8OXTRRDpNR4vUGTwdQQKbqseFXs82BryWGQUZ%2FPNdJOcp31fpq1VwvfqyownF3idS1ILdnUcBIRwW98hg47cQSTmL6zCcoay%2BBjqkAVieXCpx%2FvKbvDoy34B6M56RAtWmqtB5Ddz%2FGda08ZcgPegpjz6jBIr4y9LCCEk2iR1cBZR27ZrwZDtXRtXh8uec2HmQ54heOGylTtqM6QCjakBnLMUV84SV4s8Nr5czqFZq2t2n%2BqmxWft1TVr3nQ8zw0%2BSL3mrKfNsQUDFuGQtAC7bPeDGGkLqjnXT%2FZv7oPS5bclSAmQLSP2Mt%2FkgJ1rcRHD6&X-Amz-Signature=c58baccf31231dab162e66f425358fca245bca7c34f4c5023c72a1edfc9cda9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBUW6HE3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDfszYiE5viApyBX1reo8f7ahY4SU0e8T28ExbjR2RFxQIhAICqs9zC%2Fyi2S87%2BCUsW4DlsF1ini5OrpQLkghU9k3rQKv8DCEkQABoMNjM3NDIzMTgzODA1IgyIfu06p3NWgj1tmCYq3AMN9KQa%2FA6XENZ5TyjtB4CLD9xl74kGURkKMZv8kXuJ4h%2BUE564%2Btep9a%2FeU3Luey6gIwHgViowqzjOxpZQu6sHW%2BzTKv7MoFTpclOchZc0SIki8BPlygvjSJsO7eI%2FLrL%2Brmbb2iuYUciibnDnolVk4xs79vOIhWlRvOtk8p%2BU9uzMWKjqEG%2FwR3U4SZ%2BeOstNQlcAX1eD2crE0NsJOY%2Btyenst0RrMi9J7z5%2B4VPa%2FGNZGu%2FOQUhjtJjjgoaaYcL1E3WQILHzDWX4O67%2F2GUGcJ8EQkLCf%2BlCEl1QAOpVt89ELNyTt1rPwZKa7MQSgLajZ4yRh0msAlTbBvJ26ScPqX6ppDLfVh0ULGxQKP5gKwZaBL0CZeJQsGRjrvWYLsuOZ0R2ILkWDsAdST8TxPwYedHDEqsQrHjUKJbtO725335wXtO%2F8djgpe4QVEScoYDspJhSABfqnHZAt%2BS9KlhIfsdVKlxZob9ictPZD3yKnw4%2B%2F%2FEfBSn0u6PEX%2Fpxbw%2FdNFMWKZfZlL0hiq%2FeT51Dy83rHnt1HsV8OXTRRDpNR4vUGTwdQQKbqseFXs82BryWGQUZ%2FPNdJOcp31fpq1VwvfqyownF3idS1ILdnUcBIRwW98hg47cQSTmL6zCcoay%2BBjqkAVieXCpx%2FvKbvDoy34B6M56RAtWmqtB5Ddz%2FGda08ZcgPegpjz6jBIr4y9LCCEk2iR1cBZR27ZrwZDtXRtXh8uec2HmQ54heOGylTtqM6QCjakBnLMUV84SV4s8Nr5czqFZq2t2n%2BqmxWft1TVr3nQ8zw0%2BSL3mrKfNsQUDFuGQtAC7bPeDGGkLqjnXT%2FZv7oPS5bclSAmQLSP2Mt%2FkgJ1rcRHD6&X-Amz-Signature=09e3ab3e0768edcfd49e32b678f09411730c604efa43df5318bced440593e357&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBUW6HE3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDfszYiE5viApyBX1reo8f7ahY4SU0e8T28ExbjR2RFxQIhAICqs9zC%2Fyi2S87%2BCUsW4DlsF1ini5OrpQLkghU9k3rQKv8DCEkQABoMNjM3NDIzMTgzODA1IgyIfu06p3NWgj1tmCYq3AMN9KQa%2FA6XENZ5TyjtB4CLD9xl74kGURkKMZv8kXuJ4h%2BUE564%2Btep9a%2FeU3Luey6gIwHgViowqzjOxpZQu6sHW%2BzTKv7MoFTpclOchZc0SIki8BPlygvjSJsO7eI%2FLrL%2Brmbb2iuYUciibnDnolVk4xs79vOIhWlRvOtk8p%2BU9uzMWKjqEG%2FwR3U4SZ%2BeOstNQlcAX1eD2crE0NsJOY%2Btyenst0RrMi9J7z5%2B4VPa%2FGNZGu%2FOQUhjtJjjgoaaYcL1E3WQILHzDWX4O67%2F2GUGcJ8EQkLCf%2BlCEl1QAOpVt89ELNyTt1rPwZKa7MQSgLajZ4yRh0msAlTbBvJ26ScPqX6ppDLfVh0ULGxQKP5gKwZaBL0CZeJQsGRjrvWYLsuOZ0R2ILkWDsAdST8TxPwYedHDEqsQrHjUKJbtO725335wXtO%2F8djgpe4QVEScoYDspJhSABfqnHZAt%2BS9KlhIfsdVKlxZob9ictPZD3yKnw4%2B%2F%2FEfBSn0u6PEX%2Fpxbw%2FdNFMWKZfZlL0hiq%2FeT51Dy83rHnt1HsV8OXTRRDpNR4vUGTwdQQKbqseFXs82BryWGQUZ%2FPNdJOcp31fpq1VwvfqyownF3idS1ILdnUcBIRwW98hg47cQSTmL6zCcoay%2BBjqkAVieXCpx%2FvKbvDoy34B6M56RAtWmqtB5Ddz%2FGda08ZcgPegpjz6jBIr4y9LCCEk2iR1cBZR27ZrwZDtXRtXh8uec2HmQ54heOGylTtqM6QCjakBnLMUV84SV4s8Nr5czqFZq2t2n%2BqmxWft1TVr3nQ8zw0%2BSL3mrKfNsQUDFuGQtAC7bPeDGGkLqjnXT%2FZv7oPS5bclSAmQLSP2Mt%2FkgJ1rcRHD6&X-Amz-Signature=ae15ea1df7489864545e933a6bc46ac21d32f2e5cd3096e00ea57b0d93c12a32&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBUW6HE3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDfszYiE5viApyBX1reo8f7ahY4SU0e8T28ExbjR2RFxQIhAICqs9zC%2Fyi2S87%2BCUsW4DlsF1ini5OrpQLkghU9k3rQKv8DCEkQABoMNjM3NDIzMTgzODA1IgyIfu06p3NWgj1tmCYq3AMN9KQa%2FA6XENZ5TyjtB4CLD9xl74kGURkKMZv8kXuJ4h%2BUE564%2Btep9a%2FeU3Luey6gIwHgViowqzjOxpZQu6sHW%2BzTKv7MoFTpclOchZc0SIki8BPlygvjSJsO7eI%2FLrL%2Brmbb2iuYUciibnDnolVk4xs79vOIhWlRvOtk8p%2BU9uzMWKjqEG%2FwR3U4SZ%2BeOstNQlcAX1eD2crE0NsJOY%2Btyenst0RrMi9J7z5%2B4VPa%2FGNZGu%2FOQUhjtJjjgoaaYcL1E3WQILHzDWX4O67%2F2GUGcJ8EQkLCf%2BlCEl1QAOpVt89ELNyTt1rPwZKa7MQSgLajZ4yRh0msAlTbBvJ26ScPqX6ppDLfVh0ULGxQKP5gKwZaBL0CZeJQsGRjrvWYLsuOZ0R2ILkWDsAdST8TxPwYedHDEqsQrHjUKJbtO725335wXtO%2F8djgpe4QVEScoYDspJhSABfqnHZAt%2BS9KlhIfsdVKlxZob9ictPZD3yKnw4%2B%2F%2FEfBSn0u6PEX%2Fpxbw%2FdNFMWKZfZlL0hiq%2FeT51Dy83rHnt1HsV8OXTRRDpNR4vUGTwdQQKbqseFXs82BryWGQUZ%2FPNdJOcp31fpq1VwvfqyownF3idS1ILdnUcBIRwW98hg47cQSTmL6zCcoay%2BBjqkAVieXCpx%2FvKbvDoy34B6M56RAtWmqtB5Ddz%2FGda08ZcgPegpjz6jBIr4y9LCCEk2iR1cBZR27ZrwZDtXRtXh8uec2HmQ54heOGylTtqM6QCjakBnLMUV84SV4s8Nr5czqFZq2t2n%2BqmxWft1TVr3nQ8zw0%2BSL3mrKfNsQUDFuGQtAC7bPeDGGkLqjnXT%2FZv7oPS5bclSAmQLSP2Mt%2FkgJ1rcRHD6&X-Amz-Signature=ce4e661a0b717b2dc0c494719a7c091b24a3728511e670b145e9890c748ab8fd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBUW6HE3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDfszYiE5viApyBX1reo8f7ahY4SU0e8T28ExbjR2RFxQIhAICqs9zC%2Fyi2S87%2BCUsW4DlsF1ini5OrpQLkghU9k3rQKv8DCEkQABoMNjM3NDIzMTgzODA1IgyIfu06p3NWgj1tmCYq3AMN9KQa%2FA6XENZ5TyjtB4CLD9xl74kGURkKMZv8kXuJ4h%2BUE564%2Btep9a%2FeU3Luey6gIwHgViowqzjOxpZQu6sHW%2BzTKv7MoFTpclOchZc0SIki8BPlygvjSJsO7eI%2FLrL%2Brmbb2iuYUciibnDnolVk4xs79vOIhWlRvOtk8p%2BU9uzMWKjqEG%2FwR3U4SZ%2BeOstNQlcAX1eD2crE0NsJOY%2Btyenst0RrMi9J7z5%2B4VPa%2FGNZGu%2FOQUhjtJjjgoaaYcL1E3WQILHzDWX4O67%2F2GUGcJ8EQkLCf%2BlCEl1QAOpVt89ELNyTt1rPwZKa7MQSgLajZ4yRh0msAlTbBvJ26ScPqX6ppDLfVh0ULGxQKP5gKwZaBL0CZeJQsGRjrvWYLsuOZ0R2ILkWDsAdST8TxPwYedHDEqsQrHjUKJbtO725335wXtO%2F8djgpe4QVEScoYDspJhSABfqnHZAt%2BS9KlhIfsdVKlxZob9ictPZD3yKnw4%2B%2F%2FEfBSn0u6PEX%2Fpxbw%2FdNFMWKZfZlL0hiq%2FeT51Dy83rHnt1HsV8OXTRRDpNR4vUGTwdQQKbqseFXs82BryWGQUZ%2FPNdJOcp31fpq1VwvfqyownF3idS1ILdnUcBIRwW98hg47cQSTmL6zCcoay%2BBjqkAVieXCpx%2FvKbvDoy34B6M56RAtWmqtB5Ddz%2FGda08ZcgPegpjz6jBIr4y9LCCEk2iR1cBZR27ZrwZDtXRtXh8uec2HmQ54heOGylTtqM6QCjakBnLMUV84SV4s8Nr5czqFZq2t2n%2BqmxWft1TVr3nQ8zw0%2BSL3mrKfNsQUDFuGQtAC7bPeDGGkLqjnXT%2FZv7oPS5bclSAmQLSP2Mt%2FkgJ1rcRHD6&X-Amz-Signature=dd9dd4a8048885b06394a83ab77756e04b6559b5256a2752ba8e90481becabd4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBUW6HE3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDfszYiE5viApyBX1reo8f7ahY4SU0e8T28ExbjR2RFxQIhAICqs9zC%2Fyi2S87%2BCUsW4DlsF1ini5OrpQLkghU9k3rQKv8DCEkQABoMNjM3NDIzMTgzODA1IgyIfu06p3NWgj1tmCYq3AMN9KQa%2FA6XENZ5TyjtB4CLD9xl74kGURkKMZv8kXuJ4h%2BUE564%2Btep9a%2FeU3Luey6gIwHgViowqzjOxpZQu6sHW%2BzTKv7MoFTpclOchZc0SIki8BPlygvjSJsO7eI%2FLrL%2Brmbb2iuYUciibnDnolVk4xs79vOIhWlRvOtk8p%2BU9uzMWKjqEG%2FwR3U4SZ%2BeOstNQlcAX1eD2crE0NsJOY%2Btyenst0RrMi9J7z5%2B4VPa%2FGNZGu%2FOQUhjtJjjgoaaYcL1E3WQILHzDWX4O67%2F2GUGcJ8EQkLCf%2BlCEl1QAOpVt89ELNyTt1rPwZKa7MQSgLajZ4yRh0msAlTbBvJ26ScPqX6ppDLfVh0ULGxQKP5gKwZaBL0CZeJQsGRjrvWYLsuOZ0R2ILkWDsAdST8TxPwYedHDEqsQrHjUKJbtO725335wXtO%2F8djgpe4QVEScoYDspJhSABfqnHZAt%2BS9KlhIfsdVKlxZob9ictPZD3yKnw4%2B%2F%2FEfBSn0u6PEX%2Fpxbw%2FdNFMWKZfZlL0hiq%2FeT51Dy83rHnt1HsV8OXTRRDpNR4vUGTwdQQKbqseFXs82BryWGQUZ%2FPNdJOcp31fpq1VwvfqyownF3idS1ILdnUcBIRwW98hg47cQSTmL6zCcoay%2BBjqkAVieXCpx%2FvKbvDoy34B6M56RAtWmqtB5Ddz%2FGda08ZcgPegpjz6jBIr4y9LCCEk2iR1cBZR27ZrwZDtXRtXh8uec2HmQ54heOGylTtqM6QCjakBnLMUV84SV4s8Nr5czqFZq2t2n%2BqmxWft1TVr3nQ8zw0%2BSL3mrKfNsQUDFuGQtAC7bPeDGGkLqjnXT%2FZv7oPS5bclSAmQLSP2Mt%2FkgJ1rcRHD6&X-Amz-Signature=41c8e640a67ad1df6669adf0b96819a7411f07d8d86bd7a2216b3d18f9070cf4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBUW6HE3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDfszYiE5viApyBX1reo8f7ahY4SU0e8T28ExbjR2RFxQIhAICqs9zC%2Fyi2S87%2BCUsW4DlsF1ini5OrpQLkghU9k3rQKv8DCEkQABoMNjM3NDIzMTgzODA1IgyIfu06p3NWgj1tmCYq3AMN9KQa%2FA6XENZ5TyjtB4CLD9xl74kGURkKMZv8kXuJ4h%2BUE564%2Btep9a%2FeU3Luey6gIwHgViowqzjOxpZQu6sHW%2BzTKv7MoFTpclOchZc0SIki8BPlygvjSJsO7eI%2FLrL%2Brmbb2iuYUciibnDnolVk4xs79vOIhWlRvOtk8p%2BU9uzMWKjqEG%2FwR3U4SZ%2BeOstNQlcAX1eD2crE0NsJOY%2Btyenst0RrMi9J7z5%2B4VPa%2FGNZGu%2FOQUhjtJjjgoaaYcL1E3WQILHzDWX4O67%2F2GUGcJ8EQkLCf%2BlCEl1QAOpVt89ELNyTt1rPwZKa7MQSgLajZ4yRh0msAlTbBvJ26ScPqX6ppDLfVh0ULGxQKP5gKwZaBL0CZeJQsGRjrvWYLsuOZ0R2ILkWDsAdST8TxPwYedHDEqsQrHjUKJbtO725335wXtO%2F8djgpe4QVEScoYDspJhSABfqnHZAt%2BS9KlhIfsdVKlxZob9ictPZD3yKnw4%2B%2F%2FEfBSn0u6PEX%2Fpxbw%2FdNFMWKZfZlL0hiq%2FeT51Dy83rHnt1HsV8OXTRRDpNR4vUGTwdQQKbqseFXs82BryWGQUZ%2FPNdJOcp31fpq1VwvfqyownF3idS1ILdnUcBIRwW98hg47cQSTmL6zCcoay%2BBjqkAVieXCpx%2FvKbvDoy34B6M56RAtWmqtB5Ddz%2FGda08ZcgPegpjz6jBIr4y9LCCEk2iR1cBZR27ZrwZDtXRtXh8uec2HmQ54heOGylTtqM6QCjakBnLMUV84SV4s8Nr5czqFZq2t2n%2BqmxWft1TVr3nQ8zw0%2BSL3mrKfNsQUDFuGQtAC7bPeDGGkLqjnXT%2FZv7oPS5bclSAmQLSP2Mt%2FkgJ1rcRHD6&X-Amz-Signature=799f594c54e07a9f901cb142bf8358c7d48e378180c73aa8ca11ba9c9f67e822&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
