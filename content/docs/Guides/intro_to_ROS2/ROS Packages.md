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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMTITTG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAroz1ytTjTSGvZIORo66C43onmSe3Yeaf6%2FJpD%2FXOCAiEAr0LeT5BO0gecXzHCji5gEJX9vQO2einvw8ebKTAKvo0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGGL5mNCXa1M5%2FPi3yrcA9qbX1uQ6IIPn5HEvidin91ZPdV3mOIFCU0H%2F0iTA3P10iUYRw0DO4uUw0EgK5etOlHimKHvY%2ByYPmnK6dF33JVFURm0uWIWDcFNa4dE7fUE56QQPsVG4q8iD%2FVWoIzjqlS5kpRo%2F30y4e7kmAIdS9%2F0RJH7b0URY7feT5J%2BQoqECKqm8KgBM4zUtxCM%2By96%2BubrxjKOsA95ZBGQAr9iY8zMvP%2FnrUH9jafMoiaYGu5xm5sPOn8%2FUivSMiWOBxcaIJugi6NMTxk68sEVGUH3St8gJbqqYZ7%2BnucWaFnY1xTRWwvUyqdadSqRRENRVRdd8tlgZjV4I7puhalZHC%2FyChaAWcalaoV6%2F498BTisoWOzLH5ZLMZlYfR82FkpOUD08wOsrvYNAkya9qJK1ywFUUw9CbMi1AAGlYeGLnNxYdfWfLLqSEatjXtWLyRWzKBBmeWw9ge6T6%2BaWD22STxAUpLcD0jZzMue%2FvEPf%2FnljXV1Xc3m1eURu9cKyplsVCBz89fM8NWX2Q8pY0N97fseZz7dRfoOTqSmtP36deoYBAdmGK7tM4qAcilvTll72Tm6ahSJ8zIjiacZCnK%2BEbaWGZXHMgxzZfbRAffR0k%2FmKeXBGl%2FTOnCHnmYxGY%2BkMOfJ474GOqUBELIpo4WPvq6vweFK5TS3z%2F2sFJXkTLwaeqBgB6zKjc9cggdDPRBBxubi51WZn23QjFZkLGrCyJaGcHA1FZqrTY3R%2Bn533UiKK3SQkrJC5w68VIdIh3KUiMVJJbIMGcoYsC9Lc8q5GRuQGZKIH8%2FcmePY8gtdp068XnSwDkhylLiLvU0cUJ5gkFWxJOrTKCXXrzO%2BK4VzS8ag%2Bcq2CZpVWaBurDJf&X-Amz-Signature=3372933bda7dc2a3f5bc65daad8484ffb2e8490b2d1d4f2318578320865e8c9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMTITTG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAroz1ytTjTSGvZIORo66C43onmSe3Yeaf6%2FJpD%2FXOCAiEAr0LeT5BO0gecXzHCji5gEJX9vQO2einvw8ebKTAKvo0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGGL5mNCXa1M5%2FPi3yrcA9qbX1uQ6IIPn5HEvidin91ZPdV3mOIFCU0H%2F0iTA3P10iUYRw0DO4uUw0EgK5etOlHimKHvY%2ByYPmnK6dF33JVFURm0uWIWDcFNa4dE7fUE56QQPsVG4q8iD%2FVWoIzjqlS5kpRo%2F30y4e7kmAIdS9%2F0RJH7b0URY7feT5J%2BQoqECKqm8KgBM4zUtxCM%2By96%2BubrxjKOsA95ZBGQAr9iY8zMvP%2FnrUH9jafMoiaYGu5xm5sPOn8%2FUivSMiWOBxcaIJugi6NMTxk68sEVGUH3St8gJbqqYZ7%2BnucWaFnY1xTRWwvUyqdadSqRRENRVRdd8tlgZjV4I7puhalZHC%2FyChaAWcalaoV6%2F498BTisoWOzLH5ZLMZlYfR82FkpOUD08wOsrvYNAkya9qJK1ywFUUw9CbMi1AAGlYeGLnNxYdfWfLLqSEatjXtWLyRWzKBBmeWw9ge6T6%2BaWD22STxAUpLcD0jZzMue%2FvEPf%2FnljXV1Xc3m1eURu9cKyplsVCBz89fM8NWX2Q8pY0N97fseZz7dRfoOTqSmtP36deoYBAdmGK7tM4qAcilvTll72Tm6ahSJ8zIjiacZCnK%2BEbaWGZXHMgxzZfbRAffR0k%2FmKeXBGl%2FTOnCHnmYxGY%2BkMOfJ474GOqUBELIpo4WPvq6vweFK5TS3z%2F2sFJXkTLwaeqBgB6zKjc9cggdDPRBBxubi51WZn23QjFZkLGrCyJaGcHA1FZqrTY3R%2Bn533UiKK3SQkrJC5w68VIdIh3KUiMVJJbIMGcoYsC9Lc8q5GRuQGZKIH8%2FcmePY8gtdp068XnSwDkhylLiLvU0cUJ5gkFWxJOrTKCXXrzO%2BK4VzS8ag%2Bcq2CZpVWaBurDJf&X-Amz-Signature=2f17e8dcf123638ac31e422e7341f3a5cc201737f86181449e054ea55021f232&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMTITTG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAroz1ytTjTSGvZIORo66C43onmSe3Yeaf6%2FJpD%2FXOCAiEAr0LeT5BO0gecXzHCji5gEJX9vQO2einvw8ebKTAKvo0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGGL5mNCXa1M5%2FPi3yrcA9qbX1uQ6IIPn5HEvidin91ZPdV3mOIFCU0H%2F0iTA3P10iUYRw0DO4uUw0EgK5etOlHimKHvY%2ByYPmnK6dF33JVFURm0uWIWDcFNa4dE7fUE56QQPsVG4q8iD%2FVWoIzjqlS5kpRo%2F30y4e7kmAIdS9%2F0RJH7b0URY7feT5J%2BQoqECKqm8KgBM4zUtxCM%2By96%2BubrxjKOsA95ZBGQAr9iY8zMvP%2FnrUH9jafMoiaYGu5xm5sPOn8%2FUivSMiWOBxcaIJugi6NMTxk68sEVGUH3St8gJbqqYZ7%2BnucWaFnY1xTRWwvUyqdadSqRRENRVRdd8tlgZjV4I7puhalZHC%2FyChaAWcalaoV6%2F498BTisoWOzLH5ZLMZlYfR82FkpOUD08wOsrvYNAkya9qJK1ywFUUw9CbMi1AAGlYeGLnNxYdfWfLLqSEatjXtWLyRWzKBBmeWw9ge6T6%2BaWD22STxAUpLcD0jZzMue%2FvEPf%2FnljXV1Xc3m1eURu9cKyplsVCBz89fM8NWX2Q8pY0N97fseZz7dRfoOTqSmtP36deoYBAdmGK7tM4qAcilvTll72Tm6ahSJ8zIjiacZCnK%2BEbaWGZXHMgxzZfbRAffR0k%2FmKeXBGl%2FTOnCHnmYxGY%2BkMOfJ474GOqUBELIpo4WPvq6vweFK5TS3z%2F2sFJXkTLwaeqBgB6zKjc9cggdDPRBBxubi51WZn23QjFZkLGrCyJaGcHA1FZqrTY3R%2Bn533UiKK3SQkrJC5w68VIdIh3KUiMVJJbIMGcoYsC9Lc8q5GRuQGZKIH8%2FcmePY8gtdp068XnSwDkhylLiLvU0cUJ5gkFWxJOrTKCXXrzO%2BK4VzS8ag%2Bcq2CZpVWaBurDJf&X-Amz-Signature=3ec6b853008b8d2b9ec2a9c2d501c21337f38bc672b1ac8eabd33a1faee3225e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMTITTG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAroz1ytTjTSGvZIORo66C43onmSe3Yeaf6%2FJpD%2FXOCAiEAr0LeT5BO0gecXzHCji5gEJX9vQO2einvw8ebKTAKvo0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGGL5mNCXa1M5%2FPi3yrcA9qbX1uQ6IIPn5HEvidin91ZPdV3mOIFCU0H%2F0iTA3P10iUYRw0DO4uUw0EgK5etOlHimKHvY%2ByYPmnK6dF33JVFURm0uWIWDcFNa4dE7fUE56QQPsVG4q8iD%2FVWoIzjqlS5kpRo%2F30y4e7kmAIdS9%2F0RJH7b0URY7feT5J%2BQoqECKqm8KgBM4zUtxCM%2By96%2BubrxjKOsA95ZBGQAr9iY8zMvP%2FnrUH9jafMoiaYGu5xm5sPOn8%2FUivSMiWOBxcaIJugi6NMTxk68sEVGUH3St8gJbqqYZ7%2BnucWaFnY1xTRWwvUyqdadSqRRENRVRdd8tlgZjV4I7puhalZHC%2FyChaAWcalaoV6%2F498BTisoWOzLH5ZLMZlYfR82FkpOUD08wOsrvYNAkya9qJK1ywFUUw9CbMi1AAGlYeGLnNxYdfWfLLqSEatjXtWLyRWzKBBmeWw9ge6T6%2BaWD22STxAUpLcD0jZzMue%2FvEPf%2FnljXV1Xc3m1eURu9cKyplsVCBz89fM8NWX2Q8pY0N97fseZz7dRfoOTqSmtP36deoYBAdmGK7tM4qAcilvTll72Tm6ahSJ8zIjiacZCnK%2BEbaWGZXHMgxzZfbRAffR0k%2FmKeXBGl%2FTOnCHnmYxGY%2BkMOfJ474GOqUBELIpo4WPvq6vweFK5TS3z%2F2sFJXkTLwaeqBgB6zKjc9cggdDPRBBxubi51WZn23QjFZkLGrCyJaGcHA1FZqrTY3R%2Bn533UiKK3SQkrJC5w68VIdIh3KUiMVJJbIMGcoYsC9Lc8q5GRuQGZKIH8%2FcmePY8gtdp068XnSwDkhylLiLvU0cUJ5gkFWxJOrTKCXXrzO%2BK4VzS8ag%2Bcq2CZpVWaBurDJf&X-Amz-Signature=ba0271a318e17a35b09b771434fd1e5c4909677fd08636859374da8f7832bfff&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMTITTG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAroz1ytTjTSGvZIORo66C43onmSe3Yeaf6%2FJpD%2FXOCAiEAr0LeT5BO0gecXzHCji5gEJX9vQO2einvw8ebKTAKvo0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGGL5mNCXa1M5%2FPi3yrcA9qbX1uQ6IIPn5HEvidin91ZPdV3mOIFCU0H%2F0iTA3P10iUYRw0DO4uUw0EgK5etOlHimKHvY%2ByYPmnK6dF33JVFURm0uWIWDcFNa4dE7fUE56QQPsVG4q8iD%2FVWoIzjqlS5kpRo%2F30y4e7kmAIdS9%2F0RJH7b0URY7feT5J%2BQoqECKqm8KgBM4zUtxCM%2By96%2BubrxjKOsA95ZBGQAr9iY8zMvP%2FnrUH9jafMoiaYGu5xm5sPOn8%2FUivSMiWOBxcaIJugi6NMTxk68sEVGUH3St8gJbqqYZ7%2BnucWaFnY1xTRWwvUyqdadSqRRENRVRdd8tlgZjV4I7puhalZHC%2FyChaAWcalaoV6%2F498BTisoWOzLH5ZLMZlYfR82FkpOUD08wOsrvYNAkya9qJK1ywFUUw9CbMi1AAGlYeGLnNxYdfWfLLqSEatjXtWLyRWzKBBmeWw9ge6T6%2BaWD22STxAUpLcD0jZzMue%2FvEPf%2FnljXV1Xc3m1eURu9cKyplsVCBz89fM8NWX2Q8pY0N97fseZz7dRfoOTqSmtP36deoYBAdmGK7tM4qAcilvTll72Tm6ahSJ8zIjiacZCnK%2BEbaWGZXHMgxzZfbRAffR0k%2FmKeXBGl%2FTOnCHnmYxGY%2BkMOfJ474GOqUBELIpo4WPvq6vweFK5TS3z%2F2sFJXkTLwaeqBgB6zKjc9cggdDPRBBxubi51WZn23QjFZkLGrCyJaGcHA1FZqrTY3R%2Bn533UiKK3SQkrJC5w68VIdIh3KUiMVJJbIMGcoYsC9Lc8q5GRuQGZKIH8%2FcmePY8gtdp068XnSwDkhylLiLvU0cUJ5gkFWxJOrTKCXXrzO%2BK4VzS8ag%2Bcq2CZpVWaBurDJf&X-Amz-Signature=49bb68053e79bf1b1577ef8993611e867f7a9bf1d4d009719c72db186c49582e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMTITTG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAroz1ytTjTSGvZIORo66C43onmSe3Yeaf6%2FJpD%2FXOCAiEAr0LeT5BO0gecXzHCji5gEJX9vQO2einvw8ebKTAKvo0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGGL5mNCXa1M5%2FPi3yrcA9qbX1uQ6IIPn5HEvidin91ZPdV3mOIFCU0H%2F0iTA3P10iUYRw0DO4uUw0EgK5etOlHimKHvY%2ByYPmnK6dF33JVFURm0uWIWDcFNa4dE7fUE56QQPsVG4q8iD%2FVWoIzjqlS5kpRo%2F30y4e7kmAIdS9%2F0RJH7b0URY7feT5J%2BQoqECKqm8KgBM4zUtxCM%2By96%2BubrxjKOsA95ZBGQAr9iY8zMvP%2FnrUH9jafMoiaYGu5xm5sPOn8%2FUivSMiWOBxcaIJugi6NMTxk68sEVGUH3St8gJbqqYZ7%2BnucWaFnY1xTRWwvUyqdadSqRRENRVRdd8tlgZjV4I7puhalZHC%2FyChaAWcalaoV6%2F498BTisoWOzLH5ZLMZlYfR82FkpOUD08wOsrvYNAkya9qJK1ywFUUw9CbMi1AAGlYeGLnNxYdfWfLLqSEatjXtWLyRWzKBBmeWw9ge6T6%2BaWD22STxAUpLcD0jZzMue%2FvEPf%2FnljXV1Xc3m1eURu9cKyplsVCBz89fM8NWX2Q8pY0N97fseZz7dRfoOTqSmtP36deoYBAdmGK7tM4qAcilvTll72Tm6ahSJ8zIjiacZCnK%2BEbaWGZXHMgxzZfbRAffR0k%2FmKeXBGl%2FTOnCHnmYxGY%2BkMOfJ474GOqUBELIpo4WPvq6vweFK5TS3z%2F2sFJXkTLwaeqBgB6zKjc9cggdDPRBBxubi51WZn23QjFZkLGrCyJaGcHA1FZqrTY3R%2Bn533UiKK3SQkrJC5w68VIdIh3KUiMVJJbIMGcoYsC9Lc8q5GRuQGZKIH8%2FcmePY8gtdp068XnSwDkhylLiLvU0cUJ5gkFWxJOrTKCXXrzO%2BK4VzS8ag%2Bcq2CZpVWaBurDJf&X-Amz-Signature=621e97847ea3b784b6d26ab7a5f03eb04049419e06b0e0d5049eaed742617a16&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMTITTG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAroz1ytTjTSGvZIORo66C43onmSe3Yeaf6%2FJpD%2FXOCAiEAr0LeT5BO0gecXzHCji5gEJX9vQO2einvw8ebKTAKvo0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGGL5mNCXa1M5%2FPi3yrcA9qbX1uQ6IIPn5HEvidin91ZPdV3mOIFCU0H%2F0iTA3P10iUYRw0DO4uUw0EgK5etOlHimKHvY%2ByYPmnK6dF33JVFURm0uWIWDcFNa4dE7fUE56QQPsVG4q8iD%2FVWoIzjqlS5kpRo%2F30y4e7kmAIdS9%2F0RJH7b0URY7feT5J%2BQoqECKqm8KgBM4zUtxCM%2By96%2BubrxjKOsA95ZBGQAr9iY8zMvP%2FnrUH9jafMoiaYGu5xm5sPOn8%2FUivSMiWOBxcaIJugi6NMTxk68sEVGUH3St8gJbqqYZ7%2BnucWaFnY1xTRWwvUyqdadSqRRENRVRdd8tlgZjV4I7puhalZHC%2FyChaAWcalaoV6%2F498BTisoWOzLH5ZLMZlYfR82FkpOUD08wOsrvYNAkya9qJK1ywFUUw9CbMi1AAGlYeGLnNxYdfWfLLqSEatjXtWLyRWzKBBmeWw9ge6T6%2BaWD22STxAUpLcD0jZzMue%2FvEPf%2FnljXV1Xc3m1eURu9cKyplsVCBz89fM8NWX2Q8pY0N97fseZz7dRfoOTqSmtP36deoYBAdmGK7tM4qAcilvTll72Tm6ahSJ8zIjiacZCnK%2BEbaWGZXHMgxzZfbRAffR0k%2FmKeXBGl%2FTOnCHnmYxGY%2BkMOfJ474GOqUBELIpo4WPvq6vweFK5TS3z%2F2sFJXkTLwaeqBgB6zKjc9cggdDPRBBxubi51WZn23QjFZkLGrCyJaGcHA1FZqrTY3R%2Bn533UiKK3SQkrJC5w68VIdIh3KUiMVJJbIMGcoYsC9Lc8q5GRuQGZKIH8%2FcmePY8gtdp068XnSwDkhylLiLvU0cUJ5gkFWxJOrTKCXXrzO%2BK4VzS8ag%2Bcq2CZpVWaBurDJf&X-Amz-Signature=37b44fb33a5c1ebde21f3786f63cb31faf52051738bed3f35763e208a236e173&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
