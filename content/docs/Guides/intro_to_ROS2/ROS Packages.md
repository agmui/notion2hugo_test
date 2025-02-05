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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646VZ4N6O%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHXWQJh5RtvJOaT59DoKyQde%2FLvkfZrennedFS4M4xt4AiEAymAFvOF3xY6PiAkTlLTv5B%2BmRVljaB9vzCY7Bthf0k8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLCoo41XeZEYz3JDNircA0kk6kzZYXmftlydR%2FYl0c8wts5jMvb6i8HpbrZvOwDgLBbPyL%2B6lTCxvaST4%2BEBtRxDLoiuaFZd4W%2B%2FOVtvIV5LHFD3ILdbr4z6iyPiEm5UzW1w686w3u0DUI3Aa3pDqY9IrNjDDCF1njF%2BqO3rMS%2Fck6rXSRp4Hmqos6dGj%2FwyF4zf06AoI0eaToYUBSTG3C2a0zhVoGB36huE%2FbUpZmlC32O%2BtxCbTDfv0OCYV1xZ8esX2bg06BlFHGugVdQnpUZTvdc%2FU0LWWcY%2FuMmNSh794At%2BhnmuWVGOgUKME3ZqbogznqT%2Fqs4tJ5uMP5pneMdIYg26Yncdy6eVt3PP6L%2FRW8iyAo%2F2tmrmtHVkXVRj0XdgSQsl1P6kvoIg979KaMJ01ONFfN%2BcextosItP%2BxuB%2BWs%2BWxq%2FSg4D%2FK0HR77hb44dL%2Bc%2Fwmw6cyo0cERhFrXwh9ADRP%2BllCNcBJ%2Fcn73RazsZ%2BQpE%2BTs7cC1FT9YtmhX%2FENGGc1%2BZUbE5db4mozO%2FGH%2FpSsuxdxw5QudK1YJRfi1ItOkD%2F7x4%2BdaH1jdgF9U3Tq44IVs6Yht1K7vFePUI%2BJKX%2FzKSANlxZ2OQlUpV6KO%2BZ3sJlVwaWcWezQeQceEIfBkGlGk7UR9dMN7kjb0GOqUBvL4uNXACyU9okrYI7vJOWB4Zj4W2wWyxWYZV85mIADoTQ%2FGLrKEkDCjMMnEnyAN35TTPhelX5QY6GRLIPtCGE%2FgVhJwyxdOLpAG%2BmgTieKYJy1kb3XmejRj5KS7GxkLsQrDTz1coXT9T6ag6X5KwpyAnyfo6mD1f9br9MZmony%2Bj64RWiwy4uVLO9Jg4OGvCe4UIFCDn8w%2BuVlpPifZYQon0IFQ8&X-Amz-Signature=341baa5c37f820809a10ddb145d2dfa24fd57b53f0682ecd217f394e540ee460&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646VZ4N6O%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHXWQJh5RtvJOaT59DoKyQde%2FLvkfZrennedFS4M4xt4AiEAymAFvOF3xY6PiAkTlLTv5B%2BmRVljaB9vzCY7Bthf0k8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLCoo41XeZEYz3JDNircA0kk6kzZYXmftlydR%2FYl0c8wts5jMvb6i8HpbrZvOwDgLBbPyL%2B6lTCxvaST4%2BEBtRxDLoiuaFZd4W%2B%2FOVtvIV5LHFD3ILdbr4z6iyPiEm5UzW1w686w3u0DUI3Aa3pDqY9IrNjDDCF1njF%2BqO3rMS%2Fck6rXSRp4Hmqos6dGj%2FwyF4zf06AoI0eaToYUBSTG3C2a0zhVoGB36huE%2FbUpZmlC32O%2BtxCbTDfv0OCYV1xZ8esX2bg06BlFHGugVdQnpUZTvdc%2FU0LWWcY%2FuMmNSh794At%2BhnmuWVGOgUKME3ZqbogznqT%2Fqs4tJ5uMP5pneMdIYg26Yncdy6eVt3PP6L%2FRW8iyAo%2F2tmrmtHVkXVRj0XdgSQsl1P6kvoIg979KaMJ01ONFfN%2BcextosItP%2BxuB%2BWs%2BWxq%2FSg4D%2FK0HR77hb44dL%2Bc%2Fwmw6cyo0cERhFrXwh9ADRP%2BllCNcBJ%2Fcn73RazsZ%2BQpE%2BTs7cC1FT9YtmhX%2FENGGc1%2BZUbE5db4mozO%2FGH%2FpSsuxdxw5QudK1YJRfi1ItOkD%2F7x4%2BdaH1jdgF9U3Tq44IVs6Yht1K7vFePUI%2BJKX%2FzKSANlxZ2OQlUpV6KO%2BZ3sJlVwaWcWezQeQceEIfBkGlGk7UR9dMN7kjb0GOqUBvL4uNXACyU9okrYI7vJOWB4Zj4W2wWyxWYZV85mIADoTQ%2FGLrKEkDCjMMnEnyAN35TTPhelX5QY6GRLIPtCGE%2FgVhJwyxdOLpAG%2BmgTieKYJy1kb3XmejRj5KS7GxkLsQrDTz1coXT9T6ag6X5KwpyAnyfo6mD1f9br9MZmony%2Bj64RWiwy4uVLO9Jg4OGvCe4UIFCDn8w%2BuVlpPifZYQon0IFQ8&X-Amz-Signature=9c97f333db3386a24348d0dc53e765ccfc0f525cc32b9027406371ae69b86453&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646VZ4N6O%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHXWQJh5RtvJOaT59DoKyQde%2FLvkfZrennedFS4M4xt4AiEAymAFvOF3xY6PiAkTlLTv5B%2BmRVljaB9vzCY7Bthf0k8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLCoo41XeZEYz3JDNircA0kk6kzZYXmftlydR%2FYl0c8wts5jMvb6i8HpbrZvOwDgLBbPyL%2B6lTCxvaST4%2BEBtRxDLoiuaFZd4W%2B%2FOVtvIV5LHFD3ILdbr4z6iyPiEm5UzW1w686w3u0DUI3Aa3pDqY9IrNjDDCF1njF%2BqO3rMS%2Fck6rXSRp4Hmqos6dGj%2FwyF4zf06AoI0eaToYUBSTG3C2a0zhVoGB36huE%2FbUpZmlC32O%2BtxCbTDfv0OCYV1xZ8esX2bg06BlFHGugVdQnpUZTvdc%2FU0LWWcY%2FuMmNSh794At%2BhnmuWVGOgUKME3ZqbogznqT%2Fqs4tJ5uMP5pneMdIYg26Yncdy6eVt3PP6L%2FRW8iyAo%2F2tmrmtHVkXVRj0XdgSQsl1P6kvoIg979KaMJ01ONFfN%2BcextosItP%2BxuB%2BWs%2BWxq%2FSg4D%2FK0HR77hb44dL%2Bc%2Fwmw6cyo0cERhFrXwh9ADRP%2BllCNcBJ%2Fcn73RazsZ%2BQpE%2BTs7cC1FT9YtmhX%2FENGGc1%2BZUbE5db4mozO%2FGH%2FpSsuxdxw5QudK1YJRfi1ItOkD%2F7x4%2BdaH1jdgF9U3Tq44IVs6Yht1K7vFePUI%2BJKX%2FzKSANlxZ2OQlUpV6KO%2BZ3sJlVwaWcWezQeQceEIfBkGlGk7UR9dMN7kjb0GOqUBvL4uNXACyU9okrYI7vJOWB4Zj4W2wWyxWYZV85mIADoTQ%2FGLrKEkDCjMMnEnyAN35TTPhelX5QY6GRLIPtCGE%2FgVhJwyxdOLpAG%2BmgTieKYJy1kb3XmejRj5KS7GxkLsQrDTz1coXT9T6ag6X5KwpyAnyfo6mD1f9br9MZmony%2Bj64RWiwy4uVLO9Jg4OGvCe4UIFCDn8w%2BuVlpPifZYQon0IFQ8&X-Amz-Signature=8afc7c5d4fff7b47cc949431fbc1da16d57367c943630ac634873aaee961cf26&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646VZ4N6O%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHXWQJh5RtvJOaT59DoKyQde%2FLvkfZrennedFS4M4xt4AiEAymAFvOF3xY6PiAkTlLTv5B%2BmRVljaB9vzCY7Bthf0k8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLCoo41XeZEYz3JDNircA0kk6kzZYXmftlydR%2FYl0c8wts5jMvb6i8HpbrZvOwDgLBbPyL%2B6lTCxvaST4%2BEBtRxDLoiuaFZd4W%2B%2FOVtvIV5LHFD3ILdbr4z6iyPiEm5UzW1w686w3u0DUI3Aa3pDqY9IrNjDDCF1njF%2BqO3rMS%2Fck6rXSRp4Hmqos6dGj%2FwyF4zf06AoI0eaToYUBSTG3C2a0zhVoGB36huE%2FbUpZmlC32O%2BtxCbTDfv0OCYV1xZ8esX2bg06BlFHGugVdQnpUZTvdc%2FU0LWWcY%2FuMmNSh794At%2BhnmuWVGOgUKME3ZqbogznqT%2Fqs4tJ5uMP5pneMdIYg26Yncdy6eVt3PP6L%2FRW8iyAo%2F2tmrmtHVkXVRj0XdgSQsl1P6kvoIg979KaMJ01ONFfN%2BcextosItP%2BxuB%2BWs%2BWxq%2FSg4D%2FK0HR77hb44dL%2Bc%2Fwmw6cyo0cERhFrXwh9ADRP%2BllCNcBJ%2Fcn73RazsZ%2BQpE%2BTs7cC1FT9YtmhX%2FENGGc1%2BZUbE5db4mozO%2FGH%2FpSsuxdxw5QudK1YJRfi1ItOkD%2F7x4%2BdaH1jdgF9U3Tq44IVs6Yht1K7vFePUI%2BJKX%2FzKSANlxZ2OQlUpV6KO%2BZ3sJlVwaWcWezQeQceEIfBkGlGk7UR9dMN7kjb0GOqUBvL4uNXACyU9okrYI7vJOWB4Zj4W2wWyxWYZV85mIADoTQ%2FGLrKEkDCjMMnEnyAN35TTPhelX5QY6GRLIPtCGE%2FgVhJwyxdOLpAG%2BmgTieKYJy1kb3XmejRj5KS7GxkLsQrDTz1coXT9T6ag6X5KwpyAnyfo6mD1f9br9MZmony%2Bj64RWiwy4uVLO9Jg4OGvCe4UIFCDn8w%2BuVlpPifZYQon0IFQ8&X-Amz-Signature=36b4a8947223b4c3b6645b5f9a7d44c799892a6d78f15ab1c274adcf239927dd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646VZ4N6O%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHXWQJh5RtvJOaT59DoKyQde%2FLvkfZrennedFS4M4xt4AiEAymAFvOF3xY6PiAkTlLTv5B%2BmRVljaB9vzCY7Bthf0k8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLCoo41XeZEYz3JDNircA0kk6kzZYXmftlydR%2FYl0c8wts5jMvb6i8HpbrZvOwDgLBbPyL%2B6lTCxvaST4%2BEBtRxDLoiuaFZd4W%2B%2FOVtvIV5LHFD3ILdbr4z6iyPiEm5UzW1w686w3u0DUI3Aa3pDqY9IrNjDDCF1njF%2BqO3rMS%2Fck6rXSRp4Hmqos6dGj%2FwyF4zf06AoI0eaToYUBSTG3C2a0zhVoGB36huE%2FbUpZmlC32O%2BtxCbTDfv0OCYV1xZ8esX2bg06BlFHGugVdQnpUZTvdc%2FU0LWWcY%2FuMmNSh794At%2BhnmuWVGOgUKME3ZqbogznqT%2Fqs4tJ5uMP5pneMdIYg26Yncdy6eVt3PP6L%2FRW8iyAo%2F2tmrmtHVkXVRj0XdgSQsl1P6kvoIg979KaMJ01ONFfN%2BcextosItP%2BxuB%2BWs%2BWxq%2FSg4D%2FK0HR77hb44dL%2Bc%2Fwmw6cyo0cERhFrXwh9ADRP%2BllCNcBJ%2Fcn73RazsZ%2BQpE%2BTs7cC1FT9YtmhX%2FENGGc1%2BZUbE5db4mozO%2FGH%2FpSsuxdxw5QudK1YJRfi1ItOkD%2F7x4%2BdaH1jdgF9U3Tq44IVs6Yht1K7vFePUI%2BJKX%2FzKSANlxZ2OQlUpV6KO%2BZ3sJlVwaWcWezQeQceEIfBkGlGk7UR9dMN7kjb0GOqUBvL4uNXACyU9okrYI7vJOWB4Zj4W2wWyxWYZV85mIADoTQ%2FGLrKEkDCjMMnEnyAN35TTPhelX5QY6GRLIPtCGE%2FgVhJwyxdOLpAG%2BmgTieKYJy1kb3XmejRj5KS7GxkLsQrDTz1coXT9T6ag6X5KwpyAnyfo6mD1f9br9MZmony%2Bj64RWiwy4uVLO9Jg4OGvCe4UIFCDn8w%2BuVlpPifZYQon0IFQ8&X-Amz-Signature=9a00f9183c17dbdf97850ff76ee4ba00ecdb7d25722a39173d81edf9152f80ff&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646VZ4N6O%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHXWQJh5RtvJOaT59DoKyQde%2FLvkfZrennedFS4M4xt4AiEAymAFvOF3xY6PiAkTlLTv5B%2BmRVljaB9vzCY7Bthf0k8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLCoo41XeZEYz3JDNircA0kk6kzZYXmftlydR%2FYl0c8wts5jMvb6i8HpbrZvOwDgLBbPyL%2B6lTCxvaST4%2BEBtRxDLoiuaFZd4W%2B%2FOVtvIV5LHFD3ILdbr4z6iyPiEm5UzW1w686w3u0DUI3Aa3pDqY9IrNjDDCF1njF%2BqO3rMS%2Fck6rXSRp4Hmqos6dGj%2FwyF4zf06AoI0eaToYUBSTG3C2a0zhVoGB36huE%2FbUpZmlC32O%2BtxCbTDfv0OCYV1xZ8esX2bg06BlFHGugVdQnpUZTvdc%2FU0LWWcY%2FuMmNSh794At%2BhnmuWVGOgUKME3ZqbogznqT%2Fqs4tJ5uMP5pneMdIYg26Yncdy6eVt3PP6L%2FRW8iyAo%2F2tmrmtHVkXVRj0XdgSQsl1P6kvoIg979KaMJ01ONFfN%2BcextosItP%2BxuB%2BWs%2BWxq%2FSg4D%2FK0HR77hb44dL%2Bc%2Fwmw6cyo0cERhFrXwh9ADRP%2BllCNcBJ%2Fcn73RazsZ%2BQpE%2BTs7cC1FT9YtmhX%2FENGGc1%2BZUbE5db4mozO%2FGH%2FpSsuxdxw5QudK1YJRfi1ItOkD%2F7x4%2BdaH1jdgF9U3Tq44IVs6Yht1K7vFePUI%2BJKX%2FzKSANlxZ2OQlUpV6KO%2BZ3sJlVwaWcWezQeQceEIfBkGlGk7UR9dMN7kjb0GOqUBvL4uNXACyU9okrYI7vJOWB4Zj4W2wWyxWYZV85mIADoTQ%2FGLrKEkDCjMMnEnyAN35TTPhelX5QY6GRLIPtCGE%2FgVhJwyxdOLpAG%2BmgTieKYJy1kb3XmejRj5KS7GxkLsQrDTz1coXT9T6ag6X5KwpyAnyfo6mD1f9br9MZmony%2Bj64RWiwy4uVLO9Jg4OGvCe4UIFCDn8w%2BuVlpPifZYQon0IFQ8&X-Amz-Signature=e9d9408dd72da2ee98505f335d7075ea0cc9e4b0f7166b2ecb4bd1f2b541c411&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646VZ4N6O%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHXWQJh5RtvJOaT59DoKyQde%2FLvkfZrennedFS4M4xt4AiEAymAFvOF3xY6PiAkTlLTv5B%2BmRVljaB9vzCY7Bthf0k8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLCoo41XeZEYz3JDNircA0kk6kzZYXmftlydR%2FYl0c8wts5jMvb6i8HpbrZvOwDgLBbPyL%2B6lTCxvaST4%2BEBtRxDLoiuaFZd4W%2B%2FOVtvIV5LHFD3ILdbr4z6iyPiEm5UzW1w686w3u0DUI3Aa3pDqY9IrNjDDCF1njF%2BqO3rMS%2Fck6rXSRp4Hmqos6dGj%2FwyF4zf06AoI0eaToYUBSTG3C2a0zhVoGB36huE%2FbUpZmlC32O%2BtxCbTDfv0OCYV1xZ8esX2bg06BlFHGugVdQnpUZTvdc%2FU0LWWcY%2FuMmNSh794At%2BhnmuWVGOgUKME3ZqbogznqT%2Fqs4tJ5uMP5pneMdIYg26Yncdy6eVt3PP6L%2FRW8iyAo%2F2tmrmtHVkXVRj0XdgSQsl1P6kvoIg979KaMJ01ONFfN%2BcextosItP%2BxuB%2BWs%2BWxq%2FSg4D%2FK0HR77hb44dL%2Bc%2Fwmw6cyo0cERhFrXwh9ADRP%2BllCNcBJ%2Fcn73RazsZ%2BQpE%2BTs7cC1FT9YtmhX%2FENGGc1%2BZUbE5db4mozO%2FGH%2FpSsuxdxw5QudK1YJRfi1ItOkD%2F7x4%2BdaH1jdgF9U3Tq44IVs6Yht1K7vFePUI%2BJKX%2FzKSANlxZ2OQlUpV6KO%2BZ3sJlVwaWcWezQeQceEIfBkGlGk7UR9dMN7kjb0GOqUBvL4uNXACyU9okrYI7vJOWB4Zj4W2wWyxWYZV85mIADoTQ%2FGLrKEkDCjMMnEnyAN35TTPhelX5QY6GRLIPtCGE%2FgVhJwyxdOLpAG%2BmgTieKYJy1kb3XmejRj5KS7GxkLsQrDTz1coXT9T6ag6X5KwpyAnyfo6mD1f9br9MZmony%2Bj64RWiwy4uVLO9Jg4OGvCe4UIFCDn8w%2BuVlpPifZYQon0IFQ8&X-Amz-Signature=5a0c025935fc542213f545536a7a6f57d8a1b339e7b51636881e1578948e6a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
