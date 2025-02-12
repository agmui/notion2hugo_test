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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKFNYYJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ60ofqDRjCZqnaIGqlJa0Qw8p8%2BF6BSLhmMOPA2y0IAiEA0FcU7X%2F59RiM%2Bg%2F3FFlGCX%2Bw%2BclXP5KByD1YIqWpX3IqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpZhQBQtuEeim1uKyrcA9kVPj3rYTIQ3%2FaxMwr6JDOXGfeiDoJu43hCmughwSGYfo6aNzajc2hur36aVj6KVXmJRzmBnfn1ko5%2BfLWgJ6HTmOUlS1f%2FMouyBthmqG7%2FIwPbYZTFnkedWofjB3PbvdIdFNg5F%2FhgxXtskdRIMpYjhYLoPd9FqlC90Eup2oNdkJ5%2BgoB6mvvNv7nL5Go4t02sdWd5l3MmC9U0mSfyaMwvUYf6dbP0nEZuMC6F9%2F8yV3tB92CkbVbVQTDrmXpac2kMrL0yiJrled%2F5LCCwg%2Bs2%2FjEmzKD6jxICzLyJOG8lE520ZTvsSLTw1sStO2KX48GxK5MMmtX6YrGqCrcO%2Fym1hE4mf6xN4m5Au6icCxXWka%2F0bOSG46nYumqSPaAWrbUljwyrijJbEJVXVlqZsaDJ%2BL159Vt2kqILXtnADt8dT1A5kTFrE843FJXFHt%2FEjUFaF5X7vbYkjNK1OLn7CRH%2BHhCip4qQ2%2BmbQgBx7wrUQngurYAxdi0rY1xpID2edwSfVdmkJAo3jjuGtAC4r4DkEhBeQr9ZVz2NSt9R%2FZSCrmVHIbA15YgqGqstO3KE%2FGX0RL1epmiqCRXLBymVeFN9dfdobW4HWBhn2Eji5OEMVzuCseuWlW06Mj5RMJvrr70GOqUBw4RlV4L6fi%2B8542LIndTh0m9UsWTWZH1ucATormfwAhiLl%2BK4M3z2PW52Sz9HHc1NrPdUk%2BAx%2BAALI9QiDVhu4cDQB7ksm40jh1IrKDz%2FSVD7mJcpKbuFbao5aARYX2yVsy2Sl4IOojpVc9CAwaQi0zeJasJOluirCoYLRgSEsYWUKRdLdiKiCwcEKhD07CBmZVo%2BiMD%2FmmSgW8WAvx8hJqyRi5i&X-Amz-Signature=3258c01f1166e8cce3fca1fbe026bb31c84bc29f74d6a841d03aedc135009e6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKFNYYJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ60ofqDRjCZqnaIGqlJa0Qw8p8%2BF6BSLhmMOPA2y0IAiEA0FcU7X%2F59RiM%2Bg%2F3FFlGCX%2Bw%2BclXP5KByD1YIqWpX3IqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpZhQBQtuEeim1uKyrcA9kVPj3rYTIQ3%2FaxMwr6JDOXGfeiDoJu43hCmughwSGYfo6aNzajc2hur36aVj6KVXmJRzmBnfn1ko5%2BfLWgJ6HTmOUlS1f%2FMouyBthmqG7%2FIwPbYZTFnkedWofjB3PbvdIdFNg5F%2FhgxXtskdRIMpYjhYLoPd9FqlC90Eup2oNdkJ5%2BgoB6mvvNv7nL5Go4t02sdWd5l3MmC9U0mSfyaMwvUYf6dbP0nEZuMC6F9%2F8yV3tB92CkbVbVQTDrmXpac2kMrL0yiJrled%2F5LCCwg%2Bs2%2FjEmzKD6jxICzLyJOG8lE520ZTvsSLTw1sStO2KX48GxK5MMmtX6YrGqCrcO%2Fym1hE4mf6xN4m5Au6icCxXWka%2F0bOSG46nYumqSPaAWrbUljwyrijJbEJVXVlqZsaDJ%2BL159Vt2kqILXtnADt8dT1A5kTFrE843FJXFHt%2FEjUFaF5X7vbYkjNK1OLn7CRH%2BHhCip4qQ2%2BmbQgBx7wrUQngurYAxdi0rY1xpID2edwSfVdmkJAo3jjuGtAC4r4DkEhBeQr9ZVz2NSt9R%2FZSCrmVHIbA15YgqGqstO3KE%2FGX0RL1epmiqCRXLBymVeFN9dfdobW4HWBhn2Eji5OEMVzuCseuWlW06Mj5RMJvrr70GOqUBw4RlV4L6fi%2B8542LIndTh0m9UsWTWZH1ucATormfwAhiLl%2BK4M3z2PW52Sz9HHc1NrPdUk%2BAx%2BAALI9QiDVhu4cDQB7ksm40jh1IrKDz%2FSVD7mJcpKbuFbao5aARYX2yVsy2Sl4IOojpVc9CAwaQi0zeJasJOluirCoYLRgSEsYWUKRdLdiKiCwcEKhD07CBmZVo%2BiMD%2FmmSgW8WAvx8hJqyRi5i&X-Amz-Signature=37c7d56299c9d8c4eacabdc128d04fbc47ce3c87f280aaafd503402214b4cf4b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKFNYYJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ60ofqDRjCZqnaIGqlJa0Qw8p8%2BF6BSLhmMOPA2y0IAiEA0FcU7X%2F59RiM%2Bg%2F3FFlGCX%2Bw%2BclXP5KByD1YIqWpX3IqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpZhQBQtuEeim1uKyrcA9kVPj3rYTIQ3%2FaxMwr6JDOXGfeiDoJu43hCmughwSGYfo6aNzajc2hur36aVj6KVXmJRzmBnfn1ko5%2BfLWgJ6HTmOUlS1f%2FMouyBthmqG7%2FIwPbYZTFnkedWofjB3PbvdIdFNg5F%2FhgxXtskdRIMpYjhYLoPd9FqlC90Eup2oNdkJ5%2BgoB6mvvNv7nL5Go4t02sdWd5l3MmC9U0mSfyaMwvUYf6dbP0nEZuMC6F9%2F8yV3tB92CkbVbVQTDrmXpac2kMrL0yiJrled%2F5LCCwg%2Bs2%2FjEmzKD6jxICzLyJOG8lE520ZTvsSLTw1sStO2KX48GxK5MMmtX6YrGqCrcO%2Fym1hE4mf6xN4m5Au6icCxXWka%2F0bOSG46nYumqSPaAWrbUljwyrijJbEJVXVlqZsaDJ%2BL159Vt2kqILXtnADt8dT1A5kTFrE843FJXFHt%2FEjUFaF5X7vbYkjNK1OLn7CRH%2BHhCip4qQ2%2BmbQgBx7wrUQngurYAxdi0rY1xpID2edwSfVdmkJAo3jjuGtAC4r4DkEhBeQr9ZVz2NSt9R%2FZSCrmVHIbA15YgqGqstO3KE%2FGX0RL1epmiqCRXLBymVeFN9dfdobW4HWBhn2Eji5OEMVzuCseuWlW06Mj5RMJvrr70GOqUBw4RlV4L6fi%2B8542LIndTh0m9UsWTWZH1ucATormfwAhiLl%2BK4M3z2PW52Sz9HHc1NrPdUk%2BAx%2BAALI9QiDVhu4cDQB7ksm40jh1IrKDz%2FSVD7mJcpKbuFbao5aARYX2yVsy2Sl4IOojpVc9CAwaQi0zeJasJOluirCoYLRgSEsYWUKRdLdiKiCwcEKhD07CBmZVo%2BiMD%2FmmSgW8WAvx8hJqyRi5i&X-Amz-Signature=99dbf04e338db8349f6229d4ccc466681b242f3f8a925c81c66d55d7d3c88ce0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKFNYYJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ60ofqDRjCZqnaIGqlJa0Qw8p8%2BF6BSLhmMOPA2y0IAiEA0FcU7X%2F59RiM%2Bg%2F3FFlGCX%2Bw%2BclXP5KByD1YIqWpX3IqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpZhQBQtuEeim1uKyrcA9kVPj3rYTIQ3%2FaxMwr6JDOXGfeiDoJu43hCmughwSGYfo6aNzajc2hur36aVj6KVXmJRzmBnfn1ko5%2BfLWgJ6HTmOUlS1f%2FMouyBthmqG7%2FIwPbYZTFnkedWofjB3PbvdIdFNg5F%2FhgxXtskdRIMpYjhYLoPd9FqlC90Eup2oNdkJ5%2BgoB6mvvNv7nL5Go4t02sdWd5l3MmC9U0mSfyaMwvUYf6dbP0nEZuMC6F9%2F8yV3tB92CkbVbVQTDrmXpac2kMrL0yiJrled%2F5LCCwg%2Bs2%2FjEmzKD6jxICzLyJOG8lE520ZTvsSLTw1sStO2KX48GxK5MMmtX6YrGqCrcO%2Fym1hE4mf6xN4m5Au6icCxXWka%2F0bOSG46nYumqSPaAWrbUljwyrijJbEJVXVlqZsaDJ%2BL159Vt2kqILXtnADt8dT1A5kTFrE843FJXFHt%2FEjUFaF5X7vbYkjNK1OLn7CRH%2BHhCip4qQ2%2BmbQgBx7wrUQngurYAxdi0rY1xpID2edwSfVdmkJAo3jjuGtAC4r4DkEhBeQr9ZVz2NSt9R%2FZSCrmVHIbA15YgqGqstO3KE%2FGX0RL1epmiqCRXLBymVeFN9dfdobW4HWBhn2Eji5OEMVzuCseuWlW06Mj5RMJvrr70GOqUBw4RlV4L6fi%2B8542LIndTh0m9UsWTWZH1ucATormfwAhiLl%2BK4M3z2PW52Sz9HHc1NrPdUk%2BAx%2BAALI9QiDVhu4cDQB7ksm40jh1IrKDz%2FSVD7mJcpKbuFbao5aARYX2yVsy2Sl4IOojpVc9CAwaQi0zeJasJOluirCoYLRgSEsYWUKRdLdiKiCwcEKhD07CBmZVo%2BiMD%2FmmSgW8WAvx8hJqyRi5i&X-Amz-Signature=9077fb3bda1f48ea5eb5bae8d16f0a6a72dc131d674ed3f15fad2803d5f99e9c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKFNYYJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ60ofqDRjCZqnaIGqlJa0Qw8p8%2BF6BSLhmMOPA2y0IAiEA0FcU7X%2F59RiM%2Bg%2F3FFlGCX%2Bw%2BclXP5KByD1YIqWpX3IqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpZhQBQtuEeim1uKyrcA9kVPj3rYTIQ3%2FaxMwr6JDOXGfeiDoJu43hCmughwSGYfo6aNzajc2hur36aVj6KVXmJRzmBnfn1ko5%2BfLWgJ6HTmOUlS1f%2FMouyBthmqG7%2FIwPbYZTFnkedWofjB3PbvdIdFNg5F%2FhgxXtskdRIMpYjhYLoPd9FqlC90Eup2oNdkJ5%2BgoB6mvvNv7nL5Go4t02sdWd5l3MmC9U0mSfyaMwvUYf6dbP0nEZuMC6F9%2F8yV3tB92CkbVbVQTDrmXpac2kMrL0yiJrled%2F5LCCwg%2Bs2%2FjEmzKD6jxICzLyJOG8lE520ZTvsSLTw1sStO2KX48GxK5MMmtX6YrGqCrcO%2Fym1hE4mf6xN4m5Au6icCxXWka%2F0bOSG46nYumqSPaAWrbUljwyrijJbEJVXVlqZsaDJ%2BL159Vt2kqILXtnADt8dT1A5kTFrE843FJXFHt%2FEjUFaF5X7vbYkjNK1OLn7CRH%2BHhCip4qQ2%2BmbQgBx7wrUQngurYAxdi0rY1xpID2edwSfVdmkJAo3jjuGtAC4r4DkEhBeQr9ZVz2NSt9R%2FZSCrmVHIbA15YgqGqstO3KE%2FGX0RL1epmiqCRXLBymVeFN9dfdobW4HWBhn2Eji5OEMVzuCseuWlW06Mj5RMJvrr70GOqUBw4RlV4L6fi%2B8542LIndTh0m9UsWTWZH1ucATormfwAhiLl%2BK4M3z2PW52Sz9HHc1NrPdUk%2BAx%2BAALI9QiDVhu4cDQB7ksm40jh1IrKDz%2FSVD7mJcpKbuFbao5aARYX2yVsy2Sl4IOojpVc9CAwaQi0zeJasJOluirCoYLRgSEsYWUKRdLdiKiCwcEKhD07CBmZVo%2BiMD%2FmmSgW8WAvx8hJqyRi5i&X-Amz-Signature=e746485b0545f030b1fb6ddc66c2dee6e2cd7c670919ef949c4a32e69b73cf92&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKFNYYJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ60ofqDRjCZqnaIGqlJa0Qw8p8%2BF6BSLhmMOPA2y0IAiEA0FcU7X%2F59RiM%2Bg%2F3FFlGCX%2Bw%2BclXP5KByD1YIqWpX3IqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpZhQBQtuEeim1uKyrcA9kVPj3rYTIQ3%2FaxMwr6JDOXGfeiDoJu43hCmughwSGYfo6aNzajc2hur36aVj6KVXmJRzmBnfn1ko5%2BfLWgJ6HTmOUlS1f%2FMouyBthmqG7%2FIwPbYZTFnkedWofjB3PbvdIdFNg5F%2FhgxXtskdRIMpYjhYLoPd9FqlC90Eup2oNdkJ5%2BgoB6mvvNv7nL5Go4t02sdWd5l3MmC9U0mSfyaMwvUYf6dbP0nEZuMC6F9%2F8yV3tB92CkbVbVQTDrmXpac2kMrL0yiJrled%2F5LCCwg%2Bs2%2FjEmzKD6jxICzLyJOG8lE520ZTvsSLTw1sStO2KX48GxK5MMmtX6YrGqCrcO%2Fym1hE4mf6xN4m5Au6icCxXWka%2F0bOSG46nYumqSPaAWrbUljwyrijJbEJVXVlqZsaDJ%2BL159Vt2kqILXtnADt8dT1A5kTFrE843FJXFHt%2FEjUFaF5X7vbYkjNK1OLn7CRH%2BHhCip4qQ2%2BmbQgBx7wrUQngurYAxdi0rY1xpID2edwSfVdmkJAo3jjuGtAC4r4DkEhBeQr9ZVz2NSt9R%2FZSCrmVHIbA15YgqGqstO3KE%2FGX0RL1epmiqCRXLBymVeFN9dfdobW4HWBhn2Eji5OEMVzuCseuWlW06Mj5RMJvrr70GOqUBw4RlV4L6fi%2B8542LIndTh0m9UsWTWZH1ucATormfwAhiLl%2BK4M3z2PW52Sz9HHc1NrPdUk%2BAx%2BAALI9QiDVhu4cDQB7ksm40jh1IrKDz%2FSVD7mJcpKbuFbao5aARYX2yVsy2Sl4IOojpVc9CAwaQi0zeJasJOluirCoYLRgSEsYWUKRdLdiKiCwcEKhD07CBmZVo%2BiMD%2FmmSgW8WAvx8hJqyRi5i&X-Amz-Signature=293bb5d209c79da7c1383e24d7faf9197d5a43d326b9d460941c249a30b16cf9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKFNYYJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ60ofqDRjCZqnaIGqlJa0Qw8p8%2BF6BSLhmMOPA2y0IAiEA0FcU7X%2F59RiM%2Bg%2F3FFlGCX%2Bw%2BclXP5KByD1YIqWpX3IqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpZhQBQtuEeim1uKyrcA9kVPj3rYTIQ3%2FaxMwr6JDOXGfeiDoJu43hCmughwSGYfo6aNzajc2hur36aVj6KVXmJRzmBnfn1ko5%2BfLWgJ6HTmOUlS1f%2FMouyBthmqG7%2FIwPbYZTFnkedWofjB3PbvdIdFNg5F%2FhgxXtskdRIMpYjhYLoPd9FqlC90Eup2oNdkJ5%2BgoB6mvvNv7nL5Go4t02sdWd5l3MmC9U0mSfyaMwvUYf6dbP0nEZuMC6F9%2F8yV3tB92CkbVbVQTDrmXpac2kMrL0yiJrled%2F5LCCwg%2Bs2%2FjEmzKD6jxICzLyJOG8lE520ZTvsSLTw1sStO2KX48GxK5MMmtX6YrGqCrcO%2Fym1hE4mf6xN4m5Au6icCxXWka%2F0bOSG46nYumqSPaAWrbUljwyrijJbEJVXVlqZsaDJ%2BL159Vt2kqILXtnADt8dT1A5kTFrE843FJXFHt%2FEjUFaF5X7vbYkjNK1OLn7CRH%2BHhCip4qQ2%2BmbQgBx7wrUQngurYAxdi0rY1xpID2edwSfVdmkJAo3jjuGtAC4r4DkEhBeQr9ZVz2NSt9R%2FZSCrmVHIbA15YgqGqstO3KE%2FGX0RL1epmiqCRXLBymVeFN9dfdobW4HWBhn2Eji5OEMVzuCseuWlW06Mj5RMJvrr70GOqUBw4RlV4L6fi%2B8542LIndTh0m9UsWTWZH1ucATormfwAhiLl%2BK4M3z2PW52Sz9HHc1NrPdUk%2BAx%2BAALI9QiDVhu4cDQB7ksm40jh1IrKDz%2FSVD7mJcpKbuFbao5aARYX2yVsy2Sl4IOojpVc9CAwaQi0zeJasJOluirCoYLRgSEsYWUKRdLdiKiCwcEKhD07CBmZVo%2BiMD%2FmmSgW8WAvx8hJqyRi5i&X-Amz-Signature=337a80e6bf22717b6e62e523f8d8716d8228d01de80bfc1d11d2d9eb48e96500&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
