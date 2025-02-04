---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/ROS Packages.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RCA2FJR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD%2BOEuR7OnOLIEbfP54G2dfTrJPPdIbpNF7nS5m8lNK6AIhAL%2FkVXfoWJH8T%2BvoFZMyRfCveXrF5f3Cb8fOW5gWBEkQKv8DCDcQABoMNjM3NDIzMTgzODA1IgwEcQk%2BTQJ2i749a78q3AO913QX29S%2B9vMTJBX1h%2FMQ8YyHosihUn%2BA0EupZQPtXWEac9GbvzeYhjiKcbMHtGepshW%2FE%2FZwWan%2B0xk98rwBADqFQFO1QNmqkkiKMz03wcWlP%2FP7cbu5RxiAHpFbwY%2FGvt2Ojhf7f5Kd1Wf7v%2FctpbbNUkcf%2BgRO%2BUPNVS%2FhJyiaf7lqYXdU1VJ6yt%2BY%2FWIbc0S2y7frXyfoT8hAW%2FRjXeyFIczkmDfTtj%2Frui6KrW7cmsE5sqBVEfPNn0vj5CgBT5ew65zi7eRHMs2%2B9EKREi4M4JFBCxWWne0p6MBo9hgtSVPTuiE%2BC9VtX%2F2v5oneQg%2BvyfbCJnZsECOnvgsjWtcBCD24TSnMomsbeQ5TooCgJ4k5YNxyy2CL0vgm4VjulOUGfXZxPoEIOBWCcQhKudrXfKbrqa7vCPnOjU9QiDyFthuyxoJWLpiLAnuvqjeNVAuBUFCW4o5fzjmpU1cdmg64hUiG0%2BAbH9%2BRzxvyl2E12dUKbEojTm9WqhwvLA0s%2BEhi38IJzJd8eBHulDAYswfLrTbLwaRIFkJx96Zw7RR4L4wEr4wdbDPdaBSxVg5GWXxPza4frLsCH9buRBU6UfByqtKrNYhO8RBYZP6z71P%2BlWr%2Fl0hVgKlU3DCZlYq9BjqkAajTzqhDmUnOZLrnLR%2Fb1PTH5oO3lmA7%2BLzwvywMf6qHNo4Ge1tAbH30oWQtL%2BxjpLF9n7EZ3jxN8xTQH4Lc6w0iit%2BkobKHXVQbrXBgH2Q%2BUREt37rQP9pLVCQ3C%2B5RpaH2ULUMr4PmqTBjoRej6yxCLIAXy2Sr3H5WEBj9%2BOwI%2BGCBsmGRnK9LfqxGlD90gfA8lwCLonsMs89wScSEFAgv18Bd&X-Amz-Signature=368fb3df1aa5f39a43bc1a16dbaeb6177554537e4ca5a23043a304daa7f26cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RCA2FJR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD%2BOEuR7OnOLIEbfP54G2dfTrJPPdIbpNF7nS5m8lNK6AIhAL%2FkVXfoWJH8T%2BvoFZMyRfCveXrF5f3Cb8fOW5gWBEkQKv8DCDcQABoMNjM3NDIzMTgzODA1IgwEcQk%2BTQJ2i749a78q3AO913QX29S%2B9vMTJBX1h%2FMQ8YyHosihUn%2BA0EupZQPtXWEac9GbvzeYhjiKcbMHtGepshW%2FE%2FZwWan%2B0xk98rwBADqFQFO1QNmqkkiKMz03wcWlP%2FP7cbu5RxiAHpFbwY%2FGvt2Ojhf7f5Kd1Wf7v%2FctpbbNUkcf%2BgRO%2BUPNVS%2FhJyiaf7lqYXdU1VJ6yt%2BY%2FWIbc0S2y7frXyfoT8hAW%2FRjXeyFIczkmDfTtj%2Frui6KrW7cmsE5sqBVEfPNn0vj5CgBT5ew65zi7eRHMs2%2B9EKREi4M4JFBCxWWne0p6MBo9hgtSVPTuiE%2BC9VtX%2F2v5oneQg%2BvyfbCJnZsECOnvgsjWtcBCD24TSnMomsbeQ5TooCgJ4k5YNxyy2CL0vgm4VjulOUGfXZxPoEIOBWCcQhKudrXfKbrqa7vCPnOjU9QiDyFthuyxoJWLpiLAnuvqjeNVAuBUFCW4o5fzjmpU1cdmg64hUiG0%2BAbH9%2BRzxvyl2E12dUKbEojTm9WqhwvLA0s%2BEhi38IJzJd8eBHulDAYswfLrTbLwaRIFkJx96Zw7RR4L4wEr4wdbDPdaBSxVg5GWXxPza4frLsCH9buRBU6UfByqtKrNYhO8RBYZP6z71P%2BlWr%2Fl0hVgKlU3DCZlYq9BjqkAajTzqhDmUnOZLrnLR%2Fb1PTH5oO3lmA7%2BLzwvywMf6qHNo4Ge1tAbH30oWQtL%2BxjpLF9n7EZ3jxN8xTQH4Lc6w0iit%2BkobKHXVQbrXBgH2Q%2BUREt37rQP9pLVCQ3C%2B5RpaH2ULUMr4PmqTBjoRej6yxCLIAXy2Sr3H5WEBj9%2BOwI%2BGCBsmGRnK9LfqxGlD90gfA8lwCLonsMs89wScSEFAgv18Bd&X-Amz-Signature=babb64771882c7666ee0cb51525860d0a4d12d042d211d4aa51ecf9f1b20c2ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RCA2FJR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD%2BOEuR7OnOLIEbfP54G2dfTrJPPdIbpNF7nS5m8lNK6AIhAL%2FkVXfoWJH8T%2BvoFZMyRfCveXrF5f3Cb8fOW5gWBEkQKv8DCDcQABoMNjM3NDIzMTgzODA1IgwEcQk%2BTQJ2i749a78q3AO913QX29S%2B9vMTJBX1h%2FMQ8YyHosihUn%2BA0EupZQPtXWEac9GbvzeYhjiKcbMHtGepshW%2FE%2FZwWan%2B0xk98rwBADqFQFO1QNmqkkiKMz03wcWlP%2FP7cbu5RxiAHpFbwY%2FGvt2Ojhf7f5Kd1Wf7v%2FctpbbNUkcf%2BgRO%2BUPNVS%2FhJyiaf7lqYXdU1VJ6yt%2BY%2FWIbc0S2y7frXyfoT8hAW%2FRjXeyFIczkmDfTtj%2Frui6KrW7cmsE5sqBVEfPNn0vj5CgBT5ew65zi7eRHMs2%2B9EKREi4M4JFBCxWWne0p6MBo9hgtSVPTuiE%2BC9VtX%2F2v5oneQg%2BvyfbCJnZsECOnvgsjWtcBCD24TSnMomsbeQ5TooCgJ4k5YNxyy2CL0vgm4VjulOUGfXZxPoEIOBWCcQhKudrXfKbrqa7vCPnOjU9QiDyFthuyxoJWLpiLAnuvqjeNVAuBUFCW4o5fzjmpU1cdmg64hUiG0%2BAbH9%2BRzxvyl2E12dUKbEojTm9WqhwvLA0s%2BEhi38IJzJd8eBHulDAYswfLrTbLwaRIFkJx96Zw7RR4L4wEr4wdbDPdaBSxVg5GWXxPza4frLsCH9buRBU6UfByqtKrNYhO8RBYZP6z71P%2BlWr%2Fl0hVgKlU3DCZlYq9BjqkAajTzqhDmUnOZLrnLR%2Fb1PTH5oO3lmA7%2BLzwvywMf6qHNo4Ge1tAbH30oWQtL%2BxjpLF9n7EZ3jxN8xTQH4Lc6w0iit%2BkobKHXVQbrXBgH2Q%2BUREt37rQP9pLVCQ3C%2B5RpaH2ULUMr4PmqTBjoRej6yxCLIAXy2Sr3H5WEBj9%2BOwI%2BGCBsmGRnK9LfqxGlD90gfA8lwCLonsMs89wScSEFAgv18Bd&X-Amz-Signature=4eeecf33cad00d0fc1fc40a85e57cd509f06859e28791d277ab0aaab38485ea3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RCA2FJR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD%2BOEuR7OnOLIEbfP54G2dfTrJPPdIbpNF7nS5m8lNK6AIhAL%2FkVXfoWJH8T%2BvoFZMyRfCveXrF5f3Cb8fOW5gWBEkQKv8DCDcQABoMNjM3NDIzMTgzODA1IgwEcQk%2BTQJ2i749a78q3AO913QX29S%2B9vMTJBX1h%2FMQ8YyHosihUn%2BA0EupZQPtXWEac9GbvzeYhjiKcbMHtGepshW%2FE%2FZwWan%2B0xk98rwBADqFQFO1QNmqkkiKMz03wcWlP%2FP7cbu5RxiAHpFbwY%2FGvt2Ojhf7f5Kd1Wf7v%2FctpbbNUkcf%2BgRO%2BUPNVS%2FhJyiaf7lqYXdU1VJ6yt%2BY%2FWIbc0S2y7frXyfoT8hAW%2FRjXeyFIczkmDfTtj%2Frui6KrW7cmsE5sqBVEfPNn0vj5CgBT5ew65zi7eRHMs2%2B9EKREi4M4JFBCxWWne0p6MBo9hgtSVPTuiE%2BC9VtX%2F2v5oneQg%2BvyfbCJnZsECOnvgsjWtcBCD24TSnMomsbeQ5TooCgJ4k5YNxyy2CL0vgm4VjulOUGfXZxPoEIOBWCcQhKudrXfKbrqa7vCPnOjU9QiDyFthuyxoJWLpiLAnuvqjeNVAuBUFCW4o5fzjmpU1cdmg64hUiG0%2BAbH9%2BRzxvyl2E12dUKbEojTm9WqhwvLA0s%2BEhi38IJzJd8eBHulDAYswfLrTbLwaRIFkJx96Zw7RR4L4wEr4wdbDPdaBSxVg5GWXxPza4frLsCH9buRBU6UfByqtKrNYhO8RBYZP6z71P%2BlWr%2Fl0hVgKlU3DCZlYq9BjqkAajTzqhDmUnOZLrnLR%2Fb1PTH5oO3lmA7%2BLzwvywMf6qHNo4Ge1tAbH30oWQtL%2BxjpLF9n7EZ3jxN8xTQH4Lc6w0iit%2BkobKHXVQbrXBgH2Q%2BUREt37rQP9pLVCQ3C%2B5RpaH2ULUMr4PmqTBjoRej6yxCLIAXy2Sr3H5WEBj9%2BOwI%2BGCBsmGRnK9LfqxGlD90gfA8lwCLonsMs89wScSEFAgv18Bd&X-Amz-Signature=367ad7e9645ae031f6ab296a67b72f2504f9e83aa581cd313b309dfadaa08576&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RCA2FJR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD%2BOEuR7OnOLIEbfP54G2dfTrJPPdIbpNF7nS5m8lNK6AIhAL%2FkVXfoWJH8T%2BvoFZMyRfCveXrF5f3Cb8fOW5gWBEkQKv8DCDcQABoMNjM3NDIzMTgzODA1IgwEcQk%2BTQJ2i749a78q3AO913QX29S%2B9vMTJBX1h%2FMQ8YyHosihUn%2BA0EupZQPtXWEac9GbvzeYhjiKcbMHtGepshW%2FE%2FZwWan%2B0xk98rwBADqFQFO1QNmqkkiKMz03wcWlP%2FP7cbu5RxiAHpFbwY%2FGvt2Ojhf7f5Kd1Wf7v%2FctpbbNUkcf%2BgRO%2BUPNVS%2FhJyiaf7lqYXdU1VJ6yt%2BY%2FWIbc0S2y7frXyfoT8hAW%2FRjXeyFIczkmDfTtj%2Frui6KrW7cmsE5sqBVEfPNn0vj5CgBT5ew65zi7eRHMs2%2B9EKREi4M4JFBCxWWne0p6MBo9hgtSVPTuiE%2BC9VtX%2F2v5oneQg%2BvyfbCJnZsECOnvgsjWtcBCD24TSnMomsbeQ5TooCgJ4k5YNxyy2CL0vgm4VjulOUGfXZxPoEIOBWCcQhKudrXfKbrqa7vCPnOjU9QiDyFthuyxoJWLpiLAnuvqjeNVAuBUFCW4o5fzjmpU1cdmg64hUiG0%2BAbH9%2BRzxvyl2E12dUKbEojTm9WqhwvLA0s%2BEhi38IJzJd8eBHulDAYswfLrTbLwaRIFkJx96Zw7RR4L4wEr4wdbDPdaBSxVg5GWXxPza4frLsCH9buRBU6UfByqtKrNYhO8RBYZP6z71P%2BlWr%2Fl0hVgKlU3DCZlYq9BjqkAajTzqhDmUnOZLrnLR%2Fb1PTH5oO3lmA7%2BLzwvywMf6qHNo4Ge1tAbH30oWQtL%2BxjpLF9n7EZ3jxN8xTQH4Lc6w0iit%2BkobKHXVQbrXBgH2Q%2BUREt37rQP9pLVCQ3C%2B5RpaH2ULUMr4PmqTBjoRej6yxCLIAXy2Sr3H5WEBj9%2BOwI%2BGCBsmGRnK9LfqxGlD90gfA8lwCLonsMs89wScSEFAgv18Bd&X-Amz-Signature=33f4019a703e040d32298ceac3927dbac9fe71c4353fabcc0effb2d031097d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RCA2FJR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD%2BOEuR7OnOLIEbfP54G2dfTrJPPdIbpNF7nS5m8lNK6AIhAL%2FkVXfoWJH8T%2BvoFZMyRfCveXrF5f3Cb8fOW5gWBEkQKv8DCDcQABoMNjM3NDIzMTgzODA1IgwEcQk%2BTQJ2i749a78q3AO913QX29S%2B9vMTJBX1h%2FMQ8YyHosihUn%2BA0EupZQPtXWEac9GbvzeYhjiKcbMHtGepshW%2FE%2FZwWan%2B0xk98rwBADqFQFO1QNmqkkiKMz03wcWlP%2FP7cbu5RxiAHpFbwY%2FGvt2Ojhf7f5Kd1Wf7v%2FctpbbNUkcf%2BgRO%2BUPNVS%2FhJyiaf7lqYXdU1VJ6yt%2BY%2FWIbc0S2y7frXyfoT8hAW%2FRjXeyFIczkmDfTtj%2Frui6KrW7cmsE5sqBVEfPNn0vj5CgBT5ew65zi7eRHMs2%2B9EKREi4M4JFBCxWWne0p6MBo9hgtSVPTuiE%2BC9VtX%2F2v5oneQg%2BvyfbCJnZsECOnvgsjWtcBCD24TSnMomsbeQ5TooCgJ4k5YNxyy2CL0vgm4VjulOUGfXZxPoEIOBWCcQhKudrXfKbrqa7vCPnOjU9QiDyFthuyxoJWLpiLAnuvqjeNVAuBUFCW4o5fzjmpU1cdmg64hUiG0%2BAbH9%2BRzxvyl2E12dUKbEojTm9WqhwvLA0s%2BEhi38IJzJd8eBHulDAYswfLrTbLwaRIFkJx96Zw7RR4L4wEr4wdbDPdaBSxVg5GWXxPza4frLsCH9buRBU6UfByqtKrNYhO8RBYZP6z71P%2BlWr%2Fl0hVgKlU3DCZlYq9BjqkAajTzqhDmUnOZLrnLR%2Fb1PTH5oO3lmA7%2BLzwvywMf6qHNo4Ge1tAbH30oWQtL%2BxjpLF9n7EZ3jxN8xTQH4Lc6w0iit%2BkobKHXVQbrXBgH2Q%2BUREt37rQP9pLVCQ3C%2B5RpaH2ULUMr4PmqTBjoRej6yxCLIAXy2Sr3H5WEBj9%2BOwI%2BGCBsmGRnK9LfqxGlD90gfA8lwCLonsMs89wScSEFAgv18Bd&X-Amz-Signature=fb4ee76eb2feed50c0152984459d52d8741f58b05e660f2c79a43a5405187934&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RCA2FJR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD%2BOEuR7OnOLIEbfP54G2dfTrJPPdIbpNF7nS5m8lNK6AIhAL%2FkVXfoWJH8T%2BvoFZMyRfCveXrF5f3Cb8fOW5gWBEkQKv8DCDcQABoMNjM3NDIzMTgzODA1IgwEcQk%2BTQJ2i749a78q3AO913QX29S%2B9vMTJBX1h%2FMQ8YyHosihUn%2BA0EupZQPtXWEac9GbvzeYhjiKcbMHtGepshW%2FE%2FZwWan%2B0xk98rwBADqFQFO1QNmqkkiKMz03wcWlP%2FP7cbu5RxiAHpFbwY%2FGvt2Ojhf7f5Kd1Wf7v%2FctpbbNUkcf%2BgRO%2BUPNVS%2FhJyiaf7lqYXdU1VJ6yt%2BY%2FWIbc0S2y7frXyfoT8hAW%2FRjXeyFIczkmDfTtj%2Frui6KrW7cmsE5sqBVEfPNn0vj5CgBT5ew65zi7eRHMs2%2B9EKREi4M4JFBCxWWne0p6MBo9hgtSVPTuiE%2BC9VtX%2F2v5oneQg%2BvyfbCJnZsECOnvgsjWtcBCD24TSnMomsbeQ5TooCgJ4k5YNxyy2CL0vgm4VjulOUGfXZxPoEIOBWCcQhKudrXfKbrqa7vCPnOjU9QiDyFthuyxoJWLpiLAnuvqjeNVAuBUFCW4o5fzjmpU1cdmg64hUiG0%2BAbH9%2BRzxvyl2E12dUKbEojTm9WqhwvLA0s%2BEhi38IJzJd8eBHulDAYswfLrTbLwaRIFkJx96Zw7RR4L4wEr4wdbDPdaBSxVg5GWXxPza4frLsCH9buRBU6UfByqtKrNYhO8RBYZP6z71P%2BlWr%2Fl0hVgKlU3DCZlYq9BjqkAajTzqhDmUnOZLrnLR%2Fb1PTH5oO3lmA7%2BLzwvywMf6qHNo4Ge1tAbH30oWQtL%2BxjpLF9n7EZ3jxN8xTQH4Lc6w0iit%2BkobKHXVQbrXBgH2Q%2BUREt37rQP9pLVCQ3C%2B5RpaH2ULUMr4PmqTBjoRej6yxCLIAXy2Sr3H5WEBj9%2BOwI%2BGCBsmGRnK9LfqxGlD90gfA8lwCLonsMs89wScSEFAgv18Bd&X-Amz-Signature=ed1776d9b5a1ee866a257ddaa308ebc69ec0ec40dfdc38783ca0916463c11908&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
