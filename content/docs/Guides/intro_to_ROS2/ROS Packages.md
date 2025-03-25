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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRCYIYC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5knVoUhQWUUuJkd1Ds7x813pm2Do9YIC%2FmuZq6j3JogIgWH8NWdjOoDVI2AD8WPZ%2Be5ZlY9tRJNAWwxpf42ViCXoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi9vdIyGRCpdtwcryrcA8U01WJrKBeOxFnzHgJy0zWTIETwceRjz73KYC5MxuoUY6aoUlMg%2FUP3yNF8%2BvEFMiRXeHMVIZl3i%2BNhBZ7skhEN765Cx5dQ2tibHWjSL7A9UungfjEuMTXYA6uZVNUo3kpr1Ep%2Fj%2B9ctoQuM0Z2SbbhN%2BA5Jt%2BeHtFwWxNmn4RCASbMaqngjqvbzl4KEILAi%2FmRPBEFHoSwo2Aff12P2oR9ctHXYzT2ZOMUG%2Fl7MNMMwfDinqgH0ZkvTmlGucsaWeD5hDnjRWrUiEvLwqz%2FxGFislbVIt%2FvFznxZFJIHHM1spwfrOdaZFWVxJ%2F%2Fb36Gf6eY6%2FBArICTUSK%2FVwK2Jmc%2F5wtj871c7YI7JSwlTXpXKvaGl5XRJRg6UXjhNZAc7aYUOrBYGq5nsj%2BBOXz3%2BBHZB1b%2Bt5Sr%2FxUa2su9DxMAIEM7JLJz4w351c3nSXKdnvFVk7P0MVkXePXS2Ts70SuQ6O9j1dHx0JkGsVAHcDEFV51fUsDjhL7y4JUW6PrFlg8%2BMnw4Q3%2B%2BK%2BsDuZpsubQjtGFdQAjx%2Bvv8LLnpsKmavL0Lf6ZQQ5bB66mTUu3KHMkd%2BbvWo0y4iiF9dehxb%2Bp1zcNMYI5Tk4wrzr4%2B7aMN%2Fl7yvua5G3YMvvT4MKzSiL8GOqUB5V3ToecFm76c3ZYiy5fukWIPcAhnc%2F19wlFoGxAG%2Fbd68ACXXM50%2FS67Y7ed7XRQ4n9MWDt0HdnQPTrUo7Uvonu3HsMpt%2FE4Qc82Q55ZBKv8ylVP%2FLwAlmRV%2BwFFpl5T%2B1c1QyxrypS%2B4W359ZksOQH%2B7v0penw%2FNdMFbAF3ZFdW4i%2Bp%2FN9TSyutCTSD86AwNBxKTwmuFNMBt7FM%2BnBp3OTUZ%2BxQ&X-Amz-Signature=800434f0aea0f401cc6542dcc35e572d3889c3849bc58b1ecda114ddec501705&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRCYIYC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5knVoUhQWUUuJkd1Ds7x813pm2Do9YIC%2FmuZq6j3JogIgWH8NWdjOoDVI2AD8WPZ%2Be5ZlY9tRJNAWwxpf42ViCXoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi9vdIyGRCpdtwcryrcA8U01WJrKBeOxFnzHgJy0zWTIETwceRjz73KYC5MxuoUY6aoUlMg%2FUP3yNF8%2BvEFMiRXeHMVIZl3i%2BNhBZ7skhEN765Cx5dQ2tibHWjSL7A9UungfjEuMTXYA6uZVNUo3kpr1Ep%2Fj%2B9ctoQuM0Z2SbbhN%2BA5Jt%2BeHtFwWxNmn4RCASbMaqngjqvbzl4KEILAi%2FmRPBEFHoSwo2Aff12P2oR9ctHXYzT2ZOMUG%2Fl7MNMMwfDinqgH0ZkvTmlGucsaWeD5hDnjRWrUiEvLwqz%2FxGFislbVIt%2FvFznxZFJIHHM1spwfrOdaZFWVxJ%2F%2Fb36Gf6eY6%2FBArICTUSK%2FVwK2Jmc%2F5wtj871c7YI7JSwlTXpXKvaGl5XRJRg6UXjhNZAc7aYUOrBYGq5nsj%2BBOXz3%2BBHZB1b%2Bt5Sr%2FxUa2su9DxMAIEM7JLJz4w351c3nSXKdnvFVk7P0MVkXePXS2Ts70SuQ6O9j1dHx0JkGsVAHcDEFV51fUsDjhL7y4JUW6PrFlg8%2BMnw4Q3%2B%2BK%2BsDuZpsubQjtGFdQAjx%2Bvv8LLnpsKmavL0Lf6ZQQ5bB66mTUu3KHMkd%2BbvWo0y4iiF9dehxb%2Bp1zcNMYI5Tk4wrzr4%2B7aMN%2Fl7yvua5G3YMvvT4MKzSiL8GOqUB5V3ToecFm76c3ZYiy5fukWIPcAhnc%2F19wlFoGxAG%2Fbd68ACXXM50%2FS67Y7ed7XRQ4n9MWDt0HdnQPTrUo7Uvonu3HsMpt%2FE4Qc82Q55ZBKv8ylVP%2FLwAlmRV%2BwFFpl5T%2B1c1QyxrypS%2B4W359ZksOQH%2B7v0penw%2FNdMFbAF3ZFdW4i%2Bp%2FN9TSyutCTSD86AwNBxKTwmuFNMBt7FM%2BnBp3OTUZ%2BxQ&X-Amz-Signature=15ea894b34c464c24a4ea431e5153651b0c65f18fdde7e36053af33b3dd21fc7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRCYIYC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5knVoUhQWUUuJkd1Ds7x813pm2Do9YIC%2FmuZq6j3JogIgWH8NWdjOoDVI2AD8WPZ%2Be5ZlY9tRJNAWwxpf42ViCXoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi9vdIyGRCpdtwcryrcA8U01WJrKBeOxFnzHgJy0zWTIETwceRjz73KYC5MxuoUY6aoUlMg%2FUP3yNF8%2BvEFMiRXeHMVIZl3i%2BNhBZ7skhEN765Cx5dQ2tibHWjSL7A9UungfjEuMTXYA6uZVNUo3kpr1Ep%2Fj%2B9ctoQuM0Z2SbbhN%2BA5Jt%2BeHtFwWxNmn4RCASbMaqngjqvbzl4KEILAi%2FmRPBEFHoSwo2Aff12P2oR9ctHXYzT2ZOMUG%2Fl7MNMMwfDinqgH0ZkvTmlGucsaWeD5hDnjRWrUiEvLwqz%2FxGFislbVIt%2FvFznxZFJIHHM1spwfrOdaZFWVxJ%2F%2Fb36Gf6eY6%2FBArICTUSK%2FVwK2Jmc%2F5wtj871c7YI7JSwlTXpXKvaGl5XRJRg6UXjhNZAc7aYUOrBYGq5nsj%2BBOXz3%2BBHZB1b%2Bt5Sr%2FxUa2su9DxMAIEM7JLJz4w351c3nSXKdnvFVk7P0MVkXePXS2Ts70SuQ6O9j1dHx0JkGsVAHcDEFV51fUsDjhL7y4JUW6PrFlg8%2BMnw4Q3%2B%2BK%2BsDuZpsubQjtGFdQAjx%2Bvv8LLnpsKmavL0Lf6ZQQ5bB66mTUu3KHMkd%2BbvWo0y4iiF9dehxb%2Bp1zcNMYI5Tk4wrzr4%2B7aMN%2Fl7yvua5G3YMvvT4MKzSiL8GOqUB5V3ToecFm76c3ZYiy5fukWIPcAhnc%2F19wlFoGxAG%2Fbd68ACXXM50%2FS67Y7ed7XRQ4n9MWDt0HdnQPTrUo7Uvonu3HsMpt%2FE4Qc82Q55ZBKv8ylVP%2FLwAlmRV%2BwFFpl5T%2B1c1QyxrypS%2B4W359ZksOQH%2B7v0penw%2FNdMFbAF3ZFdW4i%2Bp%2FN9TSyutCTSD86AwNBxKTwmuFNMBt7FM%2BnBp3OTUZ%2BxQ&X-Amz-Signature=72674d1907096cd63bc02c15c0a1a4f073ae0ff534ef48194be1f79238de36c7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRCYIYC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5knVoUhQWUUuJkd1Ds7x813pm2Do9YIC%2FmuZq6j3JogIgWH8NWdjOoDVI2AD8WPZ%2Be5ZlY9tRJNAWwxpf42ViCXoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi9vdIyGRCpdtwcryrcA8U01WJrKBeOxFnzHgJy0zWTIETwceRjz73KYC5MxuoUY6aoUlMg%2FUP3yNF8%2BvEFMiRXeHMVIZl3i%2BNhBZ7skhEN765Cx5dQ2tibHWjSL7A9UungfjEuMTXYA6uZVNUo3kpr1Ep%2Fj%2B9ctoQuM0Z2SbbhN%2BA5Jt%2BeHtFwWxNmn4RCASbMaqngjqvbzl4KEILAi%2FmRPBEFHoSwo2Aff12P2oR9ctHXYzT2ZOMUG%2Fl7MNMMwfDinqgH0ZkvTmlGucsaWeD5hDnjRWrUiEvLwqz%2FxGFislbVIt%2FvFznxZFJIHHM1spwfrOdaZFWVxJ%2F%2Fb36Gf6eY6%2FBArICTUSK%2FVwK2Jmc%2F5wtj871c7YI7JSwlTXpXKvaGl5XRJRg6UXjhNZAc7aYUOrBYGq5nsj%2BBOXz3%2BBHZB1b%2Bt5Sr%2FxUa2su9DxMAIEM7JLJz4w351c3nSXKdnvFVk7P0MVkXePXS2Ts70SuQ6O9j1dHx0JkGsVAHcDEFV51fUsDjhL7y4JUW6PrFlg8%2BMnw4Q3%2B%2BK%2BsDuZpsubQjtGFdQAjx%2Bvv8LLnpsKmavL0Lf6ZQQ5bB66mTUu3KHMkd%2BbvWo0y4iiF9dehxb%2Bp1zcNMYI5Tk4wrzr4%2B7aMN%2Fl7yvua5G3YMvvT4MKzSiL8GOqUB5V3ToecFm76c3ZYiy5fukWIPcAhnc%2F19wlFoGxAG%2Fbd68ACXXM50%2FS67Y7ed7XRQ4n9MWDt0HdnQPTrUo7Uvonu3HsMpt%2FE4Qc82Q55ZBKv8ylVP%2FLwAlmRV%2BwFFpl5T%2B1c1QyxrypS%2B4W359ZksOQH%2B7v0penw%2FNdMFbAF3ZFdW4i%2Bp%2FN9TSyutCTSD86AwNBxKTwmuFNMBt7FM%2BnBp3OTUZ%2BxQ&X-Amz-Signature=4701571db3db5bff794c059683c4cf516c80cdff4ae10745c77714a59e6e42b2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRCYIYC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5knVoUhQWUUuJkd1Ds7x813pm2Do9YIC%2FmuZq6j3JogIgWH8NWdjOoDVI2AD8WPZ%2Be5ZlY9tRJNAWwxpf42ViCXoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi9vdIyGRCpdtwcryrcA8U01WJrKBeOxFnzHgJy0zWTIETwceRjz73KYC5MxuoUY6aoUlMg%2FUP3yNF8%2BvEFMiRXeHMVIZl3i%2BNhBZ7skhEN765Cx5dQ2tibHWjSL7A9UungfjEuMTXYA6uZVNUo3kpr1Ep%2Fj%2B9ctoQuM0Z2SbbhN%2BA5Jt%2BeHtFwWxNmn4RCASbMaqngjqvbzl4KEILAi%2FmRPBEFHoSwo2Aff12P2oR9ctHXYzT2ZOMUG%2Fl7MNMMwfDinqgH0ZkvTmlGucsaWeD5hDnjRWrUiEvLwqz%2FxGFislbVIt%2FvFznxZFJIHHM1spwfrOdaZFWVxJ%2F%2Fb36Gf6eY6%2FBArICTUSK%2FVwK2Jmc%2F5wtj871c7YI7JSwlTXpXKvaGl5XRJRg6UXjhNZAc7aYUOrBYGq5nsj%2BBOXz3%2BBHZB1b%2Bt5Sr%2FxUa2su9DxMAIEM7JLJz4w351c3nSXKdnvFVk7P0MVkXePXS2Ts70SuQ6O9j1dHx0JkGsVAHcDEFV51fUsDjhL7y4JUW6PrFlg8%2BMnw4Q3%2B%2BK%2BsDuZpsubQjtGFdQAjx%2Bvv8LLnpsKmavL0Lf6ZQQ5bB66mTUu3KHMkd%2BbvWo0y4iiF9dehxb%2Bp1zcNMYI5Tk4wrzr4%2B7aMN%2Fl7yvua5G3YMvvT4MKzSiL8GOqUB5V3ToecFm76c3ZYiy5fukWIPcAhnc%2F19wlFoGxAG%2Fbd68ACXXM50%2FS67Y7ed7XRQ4n9MWDt0HdnQPTrUo7Uvonu3HsMpt%2FE4Qc82Q55ZBKv8ylVP%2FLwAlmRV%2BwFFpl5T%2B1c1QyxrypS%2B4W359ZksOQH%2B7v0penw%2FNdMFbAF3ZFdW4i%2Bp%2FN9TSyutCTSD86AwNBxKTwmuFNMBt7FM%2BnBp3OTUZ%2BxQ&X-Amz-Signature=1c4f2198b625fdbef062e0ad1f54b97064a8776dd16750d55b7b0a6f4707b0b0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRCYIYC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5knVoUhQWUUuJkd1Ds7x813pm2Do9YIC%2FmuZq6j3JogIgWH8NWdjOoDVI2AD8WPZ%2Be5ZlY9tRJNAWwxpf42ViCXoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi9vdIyGRCpdtwcryrcA8U01WJrKBeOxFnzHgJy0zWTIETwceRjz73KYC5MxuoUY6aoUlMg%2FUP3yNF8%2BvEFMiRXeHMVIZl3i%2BNhBZ7skhEN765Cx5dQ2tibHWjSL7A9UungfjEuMTXYA6uZVNUo3kpr1Ep%2Fj%2B9ctoQuM0Z2SbbhN%2BA5Jt%2BeHtFwWxNmn4RCASbMaqngjqvbzl4KEILAi%2FmRPBEFHoSwo2Aff12P2oR9ctHXYzT2ZOMUG%2Fl7MNMMwfDinqgH0ZkvTmlGucsaWeD5hDnjRWrUiEvLwqz%2FxGFislbVIt%2FvFznxZFJIHHM1spwfrOdaZFWVxJ%2F%2Fb36Gf6eY6%2FBArICTUSK%2FVwK2Jmc%2F5wtj871c7YI7JSwlTXpXKvaGl5XRJRg6UXjhNZAc7aYUOrBYGq5nsj%2BBOXz3%2BBHZB1b%2Bt5Sr%2FxUa2su9DxMAIEM7JLJz4w351c3nSXKdnvFVk7P0MVkXePXS2Ts70SuQ6O9j1dHx0JkGsVAHcDEFV51fUsDjhL7y4JUW6PrFlg8%2BMnw4Q3%2B%2BK%2BsDuZpsubQjtGFdQAjx%2Bvv8LLnpsKmavL0Lf6ZQQ5bB66mTUu3KHMkd%2BbvWo0y4iiF9dehxb%2Bp1zcNMYI5Tk4wrzr4%2B7aMN%2Fl7yvua5G3YMvvT4MKzSiL8GOqUB5V3ToecFm76c3ZYiy5fukWIPcAhnc%2F19wlFoGxAG%2Fbd68ACXXM50%2FS67Y7ed7XRQ4n9MWDt0HdnQPTrUo7Uvonu3HsMpt%2FE4Qc82Q55ZBKv8ylVP%2FLwAlmRV%2BwFFpl5T%2B1c1QyxrypS%2B4W359ZksOQH%2B7v0penw%2FNdMFbAF3ZFdW4i%2Bp%2FN9TSyutCTSD86AwNBxKTwmuFNMBt7FM%2BnBp3OTUZ%2BxQ&X-Amz-Signature=255fe1af9fdd5151170f76da1465ccd3f76fea23eacbc44fe13a1915be505b0c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRCYIYC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5knVoUhQWUUuJkd1Ds7x813pm2Do9YIC%2FmuZq6j3JogIgWH8NWdjOoDVI2AD8WPZ%2Be5ZlY9tRJNAWwxpf42ViCXoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi9vdIyGRCpdtwcryrcA8U01WJrKBeOxFnzHgJy0zWTIETwceRjz73KYC5MxuoUY6aoUlMg%2FUP3yNF8%2BvEFMiRXeHMVIZl3i%2BNhBZ7skhEN765Cx5dQ2tibHWjSL7A9UungfjEuMTXYA6uZVNUo3kpr1Ep%2Fj%2B9ctoQuM0Z2SbbhN%2BA5Jt%2BeHtFwWxNmn4RCASbMaqngjqvbzl4KEILAi%2FmRPBEFHoSwo2Aff12P2oR9ctHXYzT2ZOMUG%2Fl7MNMMwfDinqgH0ZkvTmlGucsaWeD5hDnjRWrUiEvLwqz%2FxGFislbVIt%2FvFznxZFJIHHM1spwfrOdaZFWVxJ%2F%2Fb36Gf6eY6%2FBArICTUSK%2FVwK2Jmc%2F5wtj871c7YI7JSwlTXpXKvaGl5XRJRg6UXjhNZAc7aYUOrBYGq5nsj%2BBOXz3%2BBHZB1b%2Bt5Sr%2FxUa2su9DxMAIEM7JLJz4w351c3nSXKdnvFVk7P0MVkXePXS2Ts70SuQ6O9j1dHx0JkGsVAHcDEFV51fUsDjhL7y4JUW6PrFlg8%2BMnw4Q3%2B%2BK%2BsDuZpsubQjtGFdQAjx%2Bvv8LLnpsKmavL0Lf6ZQQ5bB66mTUu3KHMkd%2BbvWo0y4iiF9dehxb%2Bp1zcNMYI5Tk4wrzr4%2B7aMN%2Fl7yvua5G3YMvvT4MKzSiL8GOqUB5V3ToecFm76c3ZYiy5fukWIPcAhnc%2F19wlFoGxAG%2Fbd68ACXXM50%2FS67Y7ed7XRQ4n9MWDt0HdnQPTrUo7Uvonu3HsMpt%2FE4Qc82Q55ZBKv8ylVP%2FLwAlmRV%2BwFFpl5T%2B1c1QyxrypS%2B4W359ZksOQH%2B7v0penw%2FNdMFbAF3ZFdW4i%2Bp%2FN9TSyutCTSD86AwNBxKTwmuFNMBt7FM%2BnBp3OTUZ%2BxQ&X-Amz-Signature=6c2547cbff09e010e0e5f08a9d08f04660e38eb3c8c5d6786d16e3fafc5d9563&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
