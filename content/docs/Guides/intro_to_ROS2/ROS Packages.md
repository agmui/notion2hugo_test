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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675LSSL3W%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFtpTlfg0DEmuXafzJzdIhpTE4hmu22o%2B%2Fj8G4jRficIAiEAqs6E0yGuzDI21LYuM4FCBhaj%2BYD1YaioNvCjKSLcX%2F8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlmXuTSa9aTK3nxtyrcA9sQOUPfELisbhKFjVmCoWuIHOpPkxxlFWp%2BopaV2OSJIQOp5%2FKm39FUvuRkEIkSsGmu%2FXdggLwJJt0wiBTdUiVASRPA1PyI1G1RF%2FZTeKYHf%2FkwAyoUnuUYiFnJUxpUc%2FPINrBw4DySky5%2F2%2Be7j0mEnoj%2B8A12swh7iZVy885d%2BvYkWCg1mdNg9IA4tlIsinR2LhykLhENAgv7TGzbixWZKMjnNzJ%2FJuJ8eCLnAS4wVuDPatonFPjZVt44pX8iO60%2BvTFFRnU5XPoP1uHKLORlrfQJCPEIrxSTgCOWuSqKsNLCfBbbgKZLx7iDtzZQT%2FLghrhhPfFHEueXpamVndJYRg7btE0XaNEDJVIy7NCv9kxmBMETsgwgHo1jIhdLJ%2FQWyPiR2PEnBmlUHUMMEnullSVzj8gdhTcjldDPiY14S0C8KDNQJiTk6NyK1GY9vhkq5GfaZplDSTOalm4J8CaV8UYd%2BEdFzCxWe2rVT3cszUUeYtPTo0FqABbpaj6oMQvdxdYtkFXOvB7n3Dazm5%2FMCQN1CJJADzbgRHY35aZFJk4LzmFYymysUw6vIh4n%2BxQUNiAVaN9p2RkAuVSKHx5tCWLM7qLj8m2abHGQluAYr%2FTVgvMhkO2le3d0MOX6w74GOqUB%2B3yeyhfB%2FYvJboIIdQOGMvnJvVP6WP5Hq46MUJxpiNOdVgvsWsi0i4Sab631Bsfh8ylNPze2BQwdqPg%2BTAhEG2UyRYvnQooxG2UvIQPr1602BOGM61N8b2Jg9rTS2C2JSlx5wK%2F%2F0rif4VeiNXRPsCpdjUG9n%2BIAjtvJ9EHr4laxsg1oWq%2ByUfNd%2BNfgcHY7yZVperJkvrO6r7u9U5FHLzoeMrcR&X-Amz-Signature=9ccafcfd56c65b322bc54523046db29524f53810daa1fb1b550c5d10cbf18154&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675LSSL3W%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFtpTlfg0DEmuXafzJzdIhpTE4hmu22o%2B%2Fj8G4jRficIAiEAqs6E0yGuzDI21LYuM4FCBhaj%2BYD1YaioNvCjKSLcX%2F8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlmXuTSa9aTK3nxtyrcA9sQOUPfELisbhKFjVmCoWuIHOpPkxxlFWp%2BopaV2OSJIQOp5%2FKm39FUvuRkEIkSsGmu%2FXdggLwJJt0wiBTdUiVASRPA1PyI1G1RF%2FZTeKYHf%2FkwAyoUnuUYiFnJUxpUc%2FPINrBw4DySky5%2F2%2Be7j0mEnoj%2B8A12swh7iZVy885d%2BvYkWCg1mdNg9IA4tlIsinR2LhykLhENAgv7TGzbixWZKMjnNzJ%2FJuJ8eCLnAS4wVuDPatonFPjZVt44pX8iO60%2BvTFFRnU5XPoP1uHKLORlrfQJCPEIrxSTgCOWuSqKsNLCfBbbgKZLx7iDtzZQT%2FLghrhhPfFHEueXpamVndJYRg7btE0XaNEDJVIy7NCv9kxmBMETsgwgHo1jIhdLJ%2FQWyPiR2PEnBmlUHUMMEnullSVzj8gdhTcjldDPiY14S0C8KDNQJiTk6NyK1GY9vhkq5GfaZplDSTOalm4J8CaV8UYd%2BEdFzCxWe2rVT3cszUUeYtPTo0FqABbpaj6oMQvdxdYtkFXOvB7n3Dazm5%2FMCQN1CJJADzbgRHY35aZFJk4LzmFYymysUw6vIh4n%2BxQUNiAVaN9p2RkAuVSKHx5tCWLM7qLj8m2abHGQluAYr%2FTVgvMhkO2le3d0MOX6w74GOqUB%2B3yeyhfB%2FYvJboIIdQOGMvnJvVP6WP5Hq46MUJxpiNOdVgvsWsi0i4Sab631Bsfh8ylNPze2BQwdqPg%2BTAhEG2UyRYvnQooxG2UvIQPr1602BOGM61N8b2Jg9rTS2C2JSlx5wK%2F%2F0rif4VeiNXRPsCpdjUG9n%2BIAjtvJ9EHr4laxsg1oWq%2ByUfNd%2BNfgcHY7yZVperJkvrO6r7u9U5FHLzoeMrcR&X-Amz-Signature=6729ccbb88b75d8b7dc6aa2373135d3c08420c834ea6fd3f5781426ed8832e0b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675LSSL3W%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFtpTlfg0DEmuXafzJzdIhpTE4hmu22o%2B%2Fj8G4jRficIAiEAqs6E0yGuzDI21LYuM4FCBhaj%2BYD1YaioNvCjKSLcX%2F8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlmXuTSa9aTK3nxtyrcA9sQOUPfELisbhKFjVmCoWuIHOpPkxxlFWp%2BopaV2OSJIQOp5%2FKm39FUvuRkEIkSsGmu%2FXdggLwJJt0wiBTdUiVASRPA1PyI1G1RF%2FZTeKYHf%2FkwAyoUnuUYiFnJUxpUc%2FPINrBw4DySky5%2F2%2Be7j0mEnoj%2B8A12swh7iZVy885d%2BvYkWCg1mdNg9IA4tlIsinR2LhykLhENAgv7TGzbixWZKMjnNzJ%2FJuJ8eCLnAS4wVuDPatonFPjZVt44pX8iO60%2BvTFFRnU5XPoP1uHKLORlrfQJCPEIrxSTgCOWuSqKsNLCfBbbgKZLx7iDtzZQT%2FLghrhhPfFHEueXpamVndJYRg7btE0XaNEDJVIy7NCv9kxmBMETsgwgHo1jIhdLJ%2FQWyPiR2PEnBmlUHUMMEnullSVzj8gdhTcjldDPiY14S0C8KDNQJiTk6NyK1GY9vhkq5GfaZplDSTOalm4J8CaV8UYd%2BEdFzCxWe2rVT3cszUUeYtPTo0FqABbpaj6oMQvdxdYtkFXOvB7n3Dazm5%2FMCQN1CJJADzbgRHY35aZFJk4LzmFYymysUw6vIh4n%2BxQUNiAVaN9p2RkAuVSKHx5tCWLM7qLj8m2abHGQluAYr%2FTVgvMhkO2le3d0MOX6w74GOqUB%2B3yeyhfB%2FYvJboIIdQOGMvnJvVP6WP5Hq46MUJxpiNOdVgvsWsi0i4Sab631Bsfh8ylNPze2BQwdqPg%2BTAhEG2UyRYvnQooxG2UvIQPr1602BOGM61N8b2Jg9rTS2C2JSlx5wK%2F%2F0rif4VeiNXRPsCpdjUG9n%2BIAjtvJ9EHr4laxsg1oWq%2ByUfNd%2BNfgcHY7yZVperJkvrO6r7u9U5FHLzoeMrcR&X-Amz-Signature=bbb2c5cbcf1a2722234b634416c5102703ea2c60a8b5469376053fa36b2cdb68&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675LSSL3W%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFtpTlfg0DEmuXafzJzdIhpTE4hmu22o%2B%2Fj8G4jRficIAiEAqs6E0yGuzDI21LYuM4FCBhaj%2BYD1YaioNvCjKSLcX%2F8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlmXuTSa9aTK3nxtyrcA9sQOUPfELisbhKFjVmCoWuIHOpPkxxlFWp%2BopaV2OSJIQOp5%2FKm39FUvuRkEIkSsGmu%2FXdggLwJJt0wiBTdUiVASRPA1PyI1G1RF%2FZTeKYHf%2FkwAyoUnuUYiFnJUxpUc%2FPINrBw4DySky5%2F2%2Be7j0mEnoj%2B8A12swh7iZVy885d%2BvYkWCg1mdNg9IA4tlIsinR2LhykLhENAgv7TGzbixWZKMjnNzJ%2FJuJ8eCLnAS4wVuDPatonFPjZVt44pX8iO60%2BvTFFRnU5XPoP1uHKLORlrfQJCPEIrxSTgCOWuSqKsNLCfBbbgKZLx7iDtzZQT%2FLghrhhPfFHEueXpamVndJYRg7btE0XaNEDJVIy7NCv9kxmBMETsgwgHo1jIhdLJ%2FQWyPiR2PEnBmlUHUMMEnullSVzj8gdhTcjldDPiY14S0C8KDNQJiTk6NyK1GY9vhkq5GfaZplDSTOalm4J8CaV8UYd%2BEdFzCxWe2rVT3cszUUeYtPTo0FqABbpaj6oMQvdxdYtkFXOvB7n3Dazm5%2FMCQN1CJJADzbgRHY35aZFJk4LzmFYymysUw6vIh4n%2BxQUNiAVaN9p2RkAuVSKHx5tCWLM7qLj8m2abHGQluAYr%2FTVgvMhkO2le3d0MOX6w74GOqUB%2B3yeyhfB%2FYvJboIIdQOGMvnJvVP6WP5Hq46MUJxpiNOdVgvsWsi0i4Sab631Bsfh8ylNPze2BQwdqPg%2BTAhEG2UyRYvnQooxG2UvIQPr1602BOGM61N8b2Jg9rTS2C2JSlx5wK%2F%2F0rif4VeiNXRPsCpdjUG9n%2BIAjtvJ9EHr4laxsg1oWq%2ByUfNd%2BNfgcHY7yZVperJkvrO6r7u9U5FHLzoeMrcR&X-Amz-Signature=2220f4897e5250c0a64efcd4c0412cdb5e41cc00dc5048a08f43b648e989fadd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675LSSL3W%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFtpTlfg0DEmuXafzJzdIhpTE4hmu22o%2B%2Fj8G4jRficIAiEAqs6E0yGuzDI21LYuM4FCBhaj%2BYD1YaioNvCjKSLcX%2F8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlmXuTSa9aTK3nxtyrcA9sQOUPfELisbhKFjVmCoWuIHOpPkxxlFWp%2BopaV2OSJIQOp5%2FKm39FUvuRkEIkSsGmu%2FXdggLwJJt0wiBTdUiVASRPA1PyI1G1RF%2FZTeKYHf%2FkwAyoUnuUYiFnJUxpUc%2FPINrBw4DySky5%2F2%2Be7j0mEnoj%2B8A12swh7iZVy885d%2BvYkWCg1mdNg9IA4tlIsinR2LhykLhENAgv7TGzbixWZKMjnNzJ%2FJuJ8eCLnAS4wVuDPatonFPjZVt44pX8iO60%2BvTFFRnU5XPoP1uHKLORlrfQJCPEIrxSTgCOWuSqKsNLCfBbbgKZLx7iDtzZQT%2FLghrhhPfFHEueXpamVndJYRg7btE0XaNEDJVIy7NCv9kxmBMETsgwgHo1jIhdLJ%2FQWyPiR2PEnBmlUHUMMEnullSVzj8gdhTcjldDPiY14S0C8KDNQJiTk6NyK1GY9vhkq5GfaZplDSTOalm4J8CaV8UYd%2BEdFzCxWe2rVT3cszUUeYtPTo0FqABbpaj6oMQvdxdYtkFXOvB7n3Dazm5%2FMCQN1CJJADzbgRHY35aZFJk4LzmFYymysUw6vIh4n%2BxQUNiAVaN9p2RkAuVSKHx5tCWLM7qLj8m2abHGQluAYr%2FTVgvMhkO2le3d0MOX6w74GOqUB%2B3yeyhfB%2FYvJboIIdQOGMvnJvVP6WP5Hq46MUJxpiNOdVgvsWsi0i4Sab631Bsfh8ylNPze2BQwdqPg%2BTAhEG2UyRYvnQooxG2UvIQPr1602BOGM61N8b2Jg9rTS2C2JSlx5wK%2F%2F0rif4VeiNXRPsCpdjUG9n%2BIAjtvJ9EHr4laxsg1oWq%2ByUfNd%2BNfgcHY7yZVperJkvrO6r7u9U5FHLzoeMrcR&X-Amz-Signature=9b179611026ac42c5106531c5ca935abcf1980af78c33fa5563dde3d30440570&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675LSSL3W%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFtpTlfg0DEmuXafzJzdIhpTE4hmu22o%2B%2Fj8G4jRficIAiEAqs6E0yGuzDI21LYuM4FCBhaj%2BYD1YaioNvCjKSLcX%2F8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlmXuTSa9aTK3nxtyrcA9sQOUPfELisbhKFjVmCoWuIHOpPkxxlFWp%2BopaV2OSJIQOp5%2FKm39FUvuRkEIkSsGmu%2FXdggLwJJt0wiBTdUiVASRPA1PyI1G1RF%2FZTeKYHf%2FkwAyoUnuUYiFnJUxpUc%2FPINrBw4DySky5%2F2%2Be7j0mEnoj%2B8A12swh7iZVy885d%2BvYkWCg1mdNg9IA4tlIsinR2LhykLhENAgv7TGzbixWZKMjnNzJ%2FJuJ8eCLnAS4wVuDPatonFPjZVt44pX8iO60%2BvTFFRnU5XPoP1uHKLORlrfQJCPEIrxSTgCOWuSqKsNLCfBbbgKZLx7iDtzZQT%2FLghrhhPfFHEueXpamVndJYRg7btE0XaNEDJVIy7NCv9kxmBMETsgwgHo1jIhdLJ%2FQWyPiR2PEnBmlUHUMMEnullSVzj8gdhTcjldDPiY14S0C8KDNQJiTk6NyK1GY9vhkq5GfaZplDSTOalm4J8CaV8UYd%2BEdFzCxWe2rVT3cszUUeYtPTo0FqABbpaj6oMQvdxdYtkFXOvB7n3Dazm5%2FMCQN1CJJADzbgRHY35aZFJk4LzmFYymysUw6vIh4n%2BxQUNiAVaN9p2RkAuVSKHx5tCWLM7qLj8m2abHGQluAYr%2FTVgvMhkO2le3d0MOX6w74GOqUB%2B3yeyhfB%2FYvJboIIdQOGMvnJvVP6WP5Hq46MUJxpiNOdVgvsWsi0i4Sab631Bsfh8ylNPze2BQwdqPg%2BTAhEG2UyRYvnQooxG2UvIQPr1602BOGM61N8b2Jg9rTS2C2JSlx5wK%2F%2F0rif4VeiNXRPsCpdjUG9n%2BIAjtvJ9EHr4laxsg1oWq%2ByUfNd%2BNfgcHY7yZVperJkvrO6r7u9U5FHLzoeMrcR&X-Amz-Signature=4a720754ee4f46baa492a2b624a728c5abf98c3d6b9daca7b82e919a5ed4dca2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675LSSL3W%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFtpTlfg0DEmuXafzJzdIhpTE4hmu22o%2B%2Fj8G4jRficIAiEAqs6E0yGuzDI21LYuM4FCBhaj%2BYD1YaioNvCjKSLcX%2F8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlmXuTSa9aTK3nxtyrcA9sQOUPfELisbhKFjVmCoWuIHOpPkxxlFWp%2BopaV2OSJIQOp5%2FKm39FUvuRkEIkSsGmu%2FXdggLwJJt0wiBTdUiVASRPA1PyI1G1RF%2FZTeKYHf%2FkwAyoUnuUYiFnJUxpUc%2FPINrBw4DySky5%2F2%2Be7j0mEnoj%2B8A12swh7iZVy885d%2BvYkWCg1mdNg9IA4tlIsinR2LhykLhENAgv7TGzbixWZKMjnNzJ%2FJuJ8eCLnAS4wVuDPatonFPjZVt44pX8iO60%2BvTFFRnU5XPoP1uHKLORlrfQJCPEIrxSTgCOWuSqKsNLCfBbbgKZLx7iDtzZQT%2FLghrhhPfFHEueXpamVndJYRg7btE0XaNEDJVIy7NCv9kxmBMETsgwgHo1jIhdLJ%2FQWyPiR2PEnBmlUHUMMEnullSVzj8gdhTcjldDPiY14S0C8KDNQJiTk6NyK1GY9vhkq5GfaZplDSTOalm4J8CaV8UYd%2BEdFzCxWe2rVT3cszUUeYtPTo0FqABbpaj6oMQvdxdYtkFXOvB7n3Dazm5%2FMCQN1CJJADzbgRHY35aZFJk4LzmFYymysUw6vIh4n%2BxQUNiAVaN9p2RkAuVSKHx5tCWLM7qLj8m2abHGQluAYr%2FTVgvMhkO2le3d0MOX6w74GOqUB%2B3yeyhfB%2FYvJboIIdQOGMvnJvVP6WP5Hq46MUJxpiNOdVgvsWsi0i4Sab631Bsfh8ylNPze2BQwdqPg%2BTAhEG2UyRYvnQooxG2UvIQPr1602BOGM61N8b2Jg9rTS2C2JSlx5wK%2F%2F0rif4VeiNXRPsCpdjUG9n%2BIAjtvJ9EHr4laxsg1oWq%2ByUfNd%2BNfgcHY7yZVperJkvrO6r7u9U5FHLzoeMrcR&X-Amz-Signature=75c132005151bc6fc106570e015e1a44c310f7dfa9c15a1face6dca5cf0a65c7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
