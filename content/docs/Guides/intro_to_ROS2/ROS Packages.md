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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPS5OOX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHeUlemv8qteRwcLX%2BfwSFQ%2Bd2q4Kgjndj59lCRGidgxAiAWTs8vb7ezZKJy3enwLimv2%2FjzqTrmGsDLfi6RfT63iyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhw21ro68US2lA6bkKtwD2xVPBd6Nd9xCwzvoh6nBqKfJ2wUuvT4lhlaLcPqipyDr7z11TPkZ6tYfOCfj32tS%2FgamLSqdb13Dn0CEJWn0f08FSdH77Zvq9JtS8SJBnj67D5KtPC4I%2Bv2ma0Mv9XS5UTgPouGRFCTEXkogniva9QKYbqYun947KfYDno2Cztx%2BBkEhs2xNO88TMAyrAVybXI9vcgAnsxsKHrrrKZPzfikZq%2BO7BA%2B1rl2w7PK%2B5KezaAvU39ggxgLpJ%2FdRQFIKkXLpk76BSpddgL38c0nf0eT%2Ff11IvK2rITwsKm9KZ1konxXnibuIz13reSp2RoDAvCfCGBqAvxk0HU6G1izdm%2BFZC7%2FSzasd3ax6U%2FhxSx3kFF1ma7eJ6e2rjIOcJ2jAe8NJSweE8djQ2bzoFjKS%2BKjJOT4nmPfuaXG7ToRaiuQjBWX2NPRAEOHU2IQvahc5k1CwRNs9dMr85AIj0xgUyXZVgtpvKp4%2BMdrvFdx5liThKaPZJO8%2BHsmJHoLTAAsrfqtN%2FFwFV6%2BtLAOoUkm0%2B9nQMcXo2KqKfi73h3GvMYUhoB42whsWV0zpbzcVQFvBQkF6VmgGNVHDj1c7E%2FVGse8aFuC4hTEfZhjLsyiLaayobGl0ufOI4JKxYY8wspCKvgY6pgE%2Bb3mFT4d6HYyNcQnCSqjlqk5ZHlTIGpWF4M8Sm7jW9D9W8jFwxH7PGPj%2FimBKGTGvZM2bM%2BWdlLuboNJ%2BEo9K3O5hQpueCobsE1MI6DMeWQ72KFbqlyojJV%2BXRimSEWkGrsTM%2Bp9vrroexWJ5kJZG2eQ%2BOg3gWnX3nX6eOqSne6Sx5Rz3KFWw0w1kjWsfZzaC9pDtgI1JscgSwSWedd5ceNPr4ixV&X-Amz-Signature=41c331c748652b69b0b9ad5a8f1b9ab0b2ae950aae89ed306526f1e0f030cdc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPS5OOX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHeUlemv8qteRwcLX%2BfwSFQ%2Bd2q4Kgjndj59lCRGidgxAiAWTs8vb7ezZKJy3enwLimv2%2FjzqTrmGsDLfi6RfT63iyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhw21ro68US2lA6bkKtwD2xVPBd6Nd9xCwzvoh6nBqKfJ2wUuvT4lhlaLcPqipyDr7z11TPkZ6tYfOCfj32tS%2FgamLSqdb13Dn0CEJWn0f08FSdH77Zvq9JtS8SJBnj67D5KtPC4I%2Bv2ma0Mv9XS5UTgPouGRFCTEXkogniva9QKYbqYun947KfYDno2Cztx%2BBkEhs2xNO88TMAyrAVybXI9vcgAnsxsKHrrrKZPzfikZq%2BO7BA%2B1rl2w7PK%2B5KezaAvU39ggxgLpJ%2FdRQFIKkXLpk76BSpddgL38c0nf0eT%2Ff11IvK2rITwsKm9KZ1konxXnibuIz13reSp2RoDAvCfCGBqAvxk0HU6G1izdm%2BFZC7%2FSzasd3ax6U%2FhxSx3kFF1ma7eJ6e2rjIOcJ2jAe8NJSweE8djQ2bzoFjKS%2BKjJOT4nmPfuaXG7ToRaiuQjBWX2NPRAEOHU2IQvahc5k1CwRNs9dMr85AIj0xgUyXZVgtpvKp4%2BMdrvFdx5liThKaPZJO8%2BHsmJHoLTAAsrfqtN%2FFwFV6%2BtLAOoUkm0%2B9nQMcXo2KqKfi73h3GvMYUhoB42whsWV0zpbzcVQFvBQkF6VmgGNVHDj1c7E%2FVGse8aFuC4hTEfZhjLsyiLaayobGl0ufOI4JKxYY8wspCKvgY6pgE%2Bb3mFT4d6HYyNcQnCSqjlqk5ZHlTIGpWF4M8Sm7jW9D9W8jFwxH7PGPj%2FimBKGTGvZM2bM%2BWdlLuboNJ%2BEo9K3O5hQpueCobsE1MI6DMeWQ72KFbqlyojJV%2BXRimSEWkGrsTM%2Bp9vrroexWJ5kJZG2eQ%2BOg3gWnX3nX6eOqSne6Sx5Rz3KFWw0w1kjWsfZzaC9pDtgI1JscgSwSWedd5ceNPr4ixV&X-Amz-Signature=69061d84589d6bdeeaa71914b2162685578cddbbf10b3bfd963dfe2fb8256006&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPS5OOX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHeUlemv8qteRwcLX%2BfwSFQ%2Bd2q4Kgjndj59lCRGidgxAiAWTs8vb7ezZKJy3enwLimv2%2FjzqTrmGsDLfi6RfT63iyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhw21ro68US2lA6bkKtwD2xVPBd6Nd9xCwzvoh6nBqKfJ2wUuvT4lhlaLcPqipyDr7z11TPkZ6tYfOCfj32tS%2FgamLSqdb13Dn0CEJWn0f08FSdH77Zvq9JtS8SJBnj67D5KtPC4I%2Bv2ma0Mv9XS5UTgPouGRFCTEXkogniva9QKYbqYun947KfYDno2Cztx%2BBkEhs2xNO88TMAyrAVybXI9vcgAnsxsKHrrrKZPzfikZq%2BO7BA%2B1rl2w7PK%2B5KezaAvU39ggxgLpJ%2FdRQFIKkXLpk76BSpddgL38c0nf0eT%2Ff11IvK2rITwsKm9KZ1konxXnibuIz13reSp2RoDAvCfCGBqAvxk0HU6G1izdm%2BFZC7%2FSzasd3ax6U%2FhxSx3kFF1ma7eJ6e2rjIOcJ2jAe8NJSweE8djQ2bzoFjKS%2BKjJOT4nmPfuaXG7ToRaiuQjBWX2NPRAEOHU2IQvahc5k1CwRNs9dMr85AIj0xgUyXZVgtpvKp4%2BMdrvFdx5liThKaPZJO8%2BHsmJHoLTAAsrfqtN%2FFwFV6%2BtLAOoUkm0%2B9nQMcXo2KqKfi73h3GvMYUhoB42whsWV0zpbzcVQFvBQkF6VmgGNVHDj1c7E%2FVGse8aFuC4hTEfZhjLsyiLaayobGl0ufOI4JKxYY8wspCKvgY6pgE%2Bb3mFT4d6HYyNcQnCSqjlqk5ZHlTIGpWF4M8Sm7jW9D9W8jFwxH7PGPj%2FimBKGTGvZM2bM%2BWdlLuboNJ%2BEo9K3O5hQpueCobsE1MI6DMeWQ72KFbqlyojJV%2BXRimSEWkGrsTM%2Bp9vrroexWJ5kJZG2eQ%2BOg3gWnX3nX6eOqSne6Sx5Rz3KFWw0w1kjWsfZzaC9pDtgI1JscgSwSWedd5ceNPr4ixV&X-Amz-Signature=e9e6691455581c8f3f46857ebc65665c05c6a3b6cab898db36c62f2a29bc3c9a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPS5OOX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHeUlemv8qteRwcLX%2BfwSFQ%2Bd2q4Kgjndj59lCRGidgxAiAWTs8vb7ezZKJy3enwLimv2%2FjzqTrmGsDLfi6RfT63iyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhw21ro68US2lA6bkKtwD2xVPBd6Nd9xCwzvoh6nBqKfJ2wUuvT4lhlaLcPqipyDr7z11TPkZ6tYfOCfj32tS%2FgamLSqdb13Dn0CEJWn0f08FSdH77Zvq9JtS8SJBnj67D5KtPC4I%2Bv2ma0Mv9XS5UTgPouGRFCTEXkogniva9QKYbqYun947KfYDno2Cztx%2BBkEhs2xNO88TMAyrAVybXI9vcgAnsxsKHrrrKZPzfikZq%2BO7BA%2B1rl2w7PK%2B5KezaAvU39ggxgLpJ%2FdRQFIKkXLpk76BSpddgL38c0nf0eT%2Ff11IvK2rITwsKm9KZ1konxXnibuIz13reSp2RoDAvCfCGBqAvxk0HU6G1izdm%2BFZC7%2FSzasd3ax6U%2FhxSx3kFF1ma7eJ6e2rjIOcJ2jAe8NJSweE8djQ2bzoFjKS%2BKjJOT4nmPfuaXG7ToRaiuQjBWX2NPRAEOHU2IQvahc5k1CwRNs9dMr85AIj0xgUyXZVgtpvKp4%2BMdrvFdx5liThKaPZJO8%2BHsmJHoLTAAsrfqtN%2FFwFV6%2BtLAOoUkm0%2B9nQMcXo2KqKfi73h3GvMYUhoB42whsWV0zpbzcVQFvBQkF6VmgGNVHDj1c7E%2FVGse8aFuC4hTEfZhjLsyiLaayobGl0ufOI4JKxYY8wspCKvgY6pgE%2Bb3mFT4d6HYyNcQnCSqjlqk5ZHlTIGpWF4M8Sm7jW9D9W8jFwxH7PGPj%2FimBKGTGvZM2bM%2BWdlLuboNJ%2BEo9K3O5hQpueCobsE1MI6DMeWQ72KFbqlyojJV%2BXRimSEWkGrsTM%2Bp9vrroexWJ5kJZG2eQ%2BOg3gWnX3nX6eOqSne6Sx5Rz3KFWw0w1kjWsfZzaC9pDtgI1JscgSwSWedd5ceNPr4ixV&X-Amz-Signature=690fb8bfa1dce9da50b0592f1915da88e430cc48109d4a54a4a61962c3634d4f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPS5OOX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHeUlemv8qteRwcLX%2BfwSFQ%2Bd2q4Kgjndj59lCRGidgxAiAWTs8vb7ezZKJy3enwLimv2%2FjzqTrmGsDLfi6RfT63iyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhw21ro68US2lA6bkKtwD2xVPBd6Nd9xCwzvoh6nBqKfJ2wUuvT4lhlaLcPqipyDr7z11TPkZ6tYfOCfj32tS%2FgamLSqdb13Dn0CEJWn0f08FSdH77Zvq9JtS8SJBnj67D5KtPC4I%2Bv2ma0Mv9XS5UTgPouGRFCTEXkogniva9QKYbqYun947KfYDno2Cztx%2BBkEhs2xNO88TMAyrAVybXI9vcgAnsxsKHrrrKZPzfikZq%2BO7BA%2B1rl2w7PK%2B5KezaAvU39ggxgLpJ%2FdRQFIKkXLpk76BSpddgL38c0nf0eT%2Ff11IvK2rITwsKm9KZ1konxXnibuIz13reSp2RoDAvCfCGBqAvxk0HU6G1izdm%2BFZC7%2FSzasd3ax6U%2FhxSx3kFF1ma7eJ6e2rjIOcJ2jAe8NJSweE8djQ2bzoFjKS%2BKjJOT4nmPfuaXG7ToRaiuQjBWX2NPRAEOHU2IQvahc5k1CwRNs9dMr85AIj0xgUyXZVgtpvKp4%2BMdrvFdx5liThKaPZJO8%2BHsmJHoLTAAsrfqtN%2FFwFV6%2BtLAOoUkm0%2B9nQMcXo2KqKfi73h3GvMYUhoB42whsWV0zpbzcVQFvBQkF6VmgGNVHDj1c7E%2FVGse8aFuC4hTEfZhjLsyiLaayobGl0ufOI4JKxYY8wspCKvgY6pgE%2Bb3mFT4d6HYyNcQnCSqjlqk5ZHlTIGpWF4M8Sm7jW9D9W8jFwxH7PGPj%2FimBKGTGvZM2bM%2BWdlLuboNJ%2BEo9K3O5hQpueCobsE1MI6DMeWQ72KFbqlyojJV%2BXRimSEWkGrsTM%2Bp9vrroexWJ5kJZG2eQ%2BOg3gWnX3nX6eOqSne6Sx5Rz3KFWw0w1kjWsfZzaC9pDtgI1JscgSwSWedd5ceNPr4ixV&X-Amz-Signature=1cbfb594071b76c0f23bf8d8fcb22afaa28d2af02328419586f07767e0a4fa5e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPS5OOX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHeUlemv8qteRwcLX%2BfwSFQ%2Bd2q4Kgjndj59lCRGidgxAiAWTs8vb7ezZKJy3enwLimv2%2FjzqTrmGsDLfi6RfT63iyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhw21ro68US2lA6bkKtwD2xVPBd6Nd9xCwzvoh6nBqKfJ2wUuvT4lhlaLcPqipyDr7z11TPkZ6tYfOCfj32tS%2FgamLSqdb13Dn0CEJWn0f08FSdH77Zvq9JtS8SJBnj67D5KtPC4I%2Bv2ma0Mv9XS5UTgPouGRFCTEXkogniva9QKYbqYun947KfYDno2Cztx%2BBkEhs2xNO88TMAyrAVybXI9vcgAnsxsKHrrrKZPzfikZq%2BO7BA%2B1rl2w7PK%2B5KezaAvU39ggxgLpJ%2FdRQFIKkXLpk76BSpddgL38c0nf0eT%2Ff11IvK2rITwsKm9KZ1konxXnibuIz13reSp2RoDAvCfCGBqAvxk0HU6G1izdm%2BFZC7%2FSzasd3ax6U%2FhxSx3kFF1ma7eJ6e2rjIOcJ2jAe8NJSweE8djQ2bzoFjKS%2BKjJOT4nmPfuaXG7ToRaiuQjBWX2NPRAEOHU2IQvahc5k1CwRNs9dMr85AIj0xgUyXZVgtpvKp4%2BMdrvFdx5liThKaPZJO8%2BHsmJHoLTAAsrfqtN%2FFwFV6%2BtLAOoUkm0%2B9nQMcXo2KqKfi73h3GvMYUhoB42whsWV0zpbzcVQFvBQkF6VmgGNVHDj1c7E%2FVGse8aFuC4hTEfZhjLsyiLaayobGl0ufOI4JKxYY8wspCKvgY6pgE%2Bb3mFT4d6HYyNcQnCSqjlqk5ZHlTIGpWF4M8Sm7jW9D9W8jFwxH7PGPj%2FimBKGTGvZM2bM%2BWdlLuboNJ%2BEo9K3O5hQpueCobsE1MI6DMeWQ72KFbqlyojJV%2BXRimSEWkGrsTM%2Bp9vrroexWJ5kJZG2eQ%2BOg3gWnX3nX6eOqSne6Sx5Rz3KFWw0w1kjWsfZzaC9pDtgI1JscgSwSWedd5ceNPr4ixV&X-Amz-Signature=6d10df08da6ac7b29ef8cd06d158cfe262b7d7a32fc5cac2adf672eacba698ef&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPS5OOX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHeUlemv8qteRwcLX%2BfwSFQ%2Bd2q4Kgjndj59lCRGidgxAiAWTs8vb7ezZKJy3enwLimv2%2FjzqTrmGsDLfi6RfT63iyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhw21ro68US2lA6bkKtwD2xVPBd6Nd9xCwzvoh6nBqKfJ2wUuvT4lhlaLcPqipyDr7z11TPkZ6tYfOCfj32tS%2FgamLSqdb13Dn0CEJWn0f08FSdH77Zvq9JtS8SJBnj67D5KtPC4I%2Bv2ma0Mv9XS5UTgPouGRFCTEXkogniva9QKYbqYun947KfYDno2Cztx%2BBkEhs2xNO88TMAyrAVybXI9vcgAnsxsKHrrrKZPzfikZq%2BO7BA%2B1rl2w7PK%2B5KezaAvU39ggxgLpJ%2FdRQFIKkXLpk76BSpddgL38c0nf0eT%2Ff11IvK2rITwsKm9KZ1konxXnibuIz13reSp2RoDAvCfCGBqAvxk0HU6G1izdm%2BFZC7%2FSzasd3ax6U%2FhxSx3kFF1ma7eJ6e2rjIOcJ2jAe8NJSweE8djQ2bzoFjKS%2BKjJOT4nmPfuaXG7ToRaiuQjBWX2NPRAEOHU2IQvahc5k1CwRNs9dMr85AIj0xgUyXZVgtpvKp4%2BMdrvFdx5liThKaPZJO8%2BHsmJHoLTAAsrfqtN%2FFwFV6%2BtLAOoUkm0%2B9nQMcXo2KqKfi73h3GvMYUhoB42whsWV0zpbzcVQFvBQkF6VmgGNVHDj1c7E%2FVGse8aFuC4hTEfZhjLsyiLaayobGl0ufOI4JKxYY8wspCKvgY6pgE%2Bb3mFT4d6HYyNcQnCSqjlqk5ZHlTIGpWF4M8Sm7jW9D9W8jFwxH7PGPj%2FimBKGTGvZM2bM%2BWdlLuboNJ%2BEo9K3O5hQpueCobsE1MI6DMeWQ72KFbqlyojJV%2BXRimSEWkGrsTM%2Bp9vrroexWJ5kJZG2eQ%2BOg3gWnX3nX6eOqSne6Sx5Rz3KFWw0w1kjWsfZzaC9pDtgI1JscgSwSWedd5ceNPr4ixV&X-Amz-Signature=895ab498163d21718c8367ea0181c5e1b98bc4b7a58036a542fcd5b78028269a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
