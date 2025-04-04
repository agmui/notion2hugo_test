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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKBYDQM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjtR7k1ruFodFfEz49Fh%2FgAd04QNiKpeG8pscjuSILqAiBxeBFx51kzwnh98hywxM9qY6%2FcLVH5iBx9m%2FLQ6xIX2ir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMoM0s%2FD%2FFSaTN%2BlyIKtwDf78DCmRt5OVoBsAd3xJRtf4e46C866y01o5qI7l739oInhDYIsbmQ91DPkG7Zsgkr2Ek%2Baibu22JuHxZXGrU4yvaATyxfwGu6iG%2FLInrxk2Ol3Cl5T7WGM%2FeoYZMiob0%2F1uiiRVBxsjydGtvB7yPgqL%2FNl4%2BZMlUyGJKQPW9cZ5RVtY4%2F4MW6owQsBr5zGTLspkCmDGUwDQ%2FfGS51VuxW7WJ3ztIAeBYxjMPT%2Bpb%2FHyqP1R7stMZMXbCTg9wO0VqRqtjIPQ3VAEo%2BNfRCRJ%2Bm86avXrab69cUFKs%2Fc1mDWiJI0kIlM2gOy58bAhu%2BCj09iGi1e1t%2F%2B5133JQgD%2FfPWhTqIQuntrGkyFmWohNiPx4%2B%2Bsx5Kjy7%2FIa7kCFX46F3CRdaEtNEbJ30yrhbpjrJFOy3CxFMUc5ocHg%2FLUbdcRt2i%2BZnMaHQoo%2F89LjHXT8qJwj3mBLhxDQuVQccZ5l0tocs8FWlZZls%2FFpVRePnoAFOSuvfz1o0pYKoA%2FZzRN%2FGvS6mIcVuMmlzG3kQS%2FLLS2vQ6NfPmmg%2FSYDXJ9MvhELSJzfuGAUuyrdLsyDG0qUu9oi199uD3oZ2ikRcw8nH2rSk46Cit1%2BWqHJDQTvBn8tznrfByreOU%2Fu5e0wxpe%2FvwY6pgEEIp%2FfHd9sDZxvC%2FKjgN%2F04nLQGopsm%2BuC4O7Q3AnuR%2FbIz98DtfsB7sEb1NIhDW1BwodwT9490a2rEC%2BV8BenoDdzc2mflSbViuJjVwb16HozlgVf85%2FbgfPBziuran4FFj5Y9%2BeO5Ul6n3hPZQY9vkG7XCm5l1yysPLLVBmD4r%2Fv9AeyR1Cr050ApN9XS%2BGqdPR%2B%2FeeFX6jPs43BfO8iJ9o4uiMZ&X-Amz-Signature=a424b6f4054d8e3b122d12803e30473bb41185290a27f0d3b4e0966f9645241f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKBYDQM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjtR7k1ruFodFfEz49Fh%2FgAd04QNiKpeG8pscjuSILqAiBxeBFx51kzwnh98hywxM9qY6%2FcLVH5iBx9m%2FLQ6xIX2ir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMoM0s%2FD%2FFSaTN%2BlyIKtwDf78DCmRt5OVoBsAd3xJRtf4e46C866y01o5qI7l739oInhDYIsbmQ91DPkG7Zsgkr2Ek%2Baibu22JuHxZXGrU4yvaATyxfwGu6iG%2FLInrxk2Ol3Cl5T7WGM%2FeoYZMiob0%2F1uiiRVBxsjydGtvB7yPgqL%2FNl4%2BZMlUyGJKQPW9cZ5RVtY4%2F4MW6owQsBr5zGTLspkCmDGUwDQ%2FfGS51VuxW7WJ3ztIAeBYxjMPT%2Bpb%2FHyqP1R7stMZMXbCTg9wO0VqRqtjIPQ3VAEo%2BNfRCRJ%2Bm86avXrab69cUFKs%2Fc1mDWiJI0kIlM2gOy58bAhu%2BCj09iGi1e1t%2F%2B5133JQgD%2FfPWhTqIQuntrGkyFmWohNiPx4%2B%2Bsx5Kjy7%2FIa7kCFX46F3CRdaEtNEbJ30yrhbpjrJFOy3CxFMUc5ocHg%2FLUbdcRt2i%2BZnMaHQoo%2F89LjHXT8qJwj3mBLhxDQuVQccZ5l0tocs8FWlZZls%2FFpVRePnoAFOSuvfz1o0pYKoA%2FZzRN%2FGvS6mIcVuMmlzG3kQS%2FLLS2vQ6NfPmmg%2FSYDXJ9MvhELSJzfuGAUuyrdLsyDG0qUu9oi199uD3oZ2ikRcw8nH2rSk46Cit1%2BWqHJDQTvBn8tznrfByreOU%2Fu5e0wxpe%2FvwY6pgEEIp%2FfHd9sDZxvC%2FKjgN%2F04nLQGopsm%2BuC4O7Q3AnuR%2FbIz98DtfsB7sEb1NIhDW1BwodwT9490a2rEC%2BV8BenoDdzc2mflSbViuJjVwb16HozlgVf85%2FbgfPBziuran4FFj5Y9%2BeO5Ul6n3hPZQY9vkG7XCm5l1yysPLLVBmD4r%2Fv9AeyR1Cr050ApN9XS%2BGqdPR%2B%2FeeFX6jPs43BfO8iJ9o4uiMZ&X-Amz-Signature=eeba6f7c244017f41120bd33386f4562b0443ef08ef022067ea8afddde8d86e3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKBYDQM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjtR7k1ruFodFfEz49Fh%2FgAd04QNiKpeG8pscjuSILqAiBxeBFx51kzwnh98hywxM9qY6%2FcLVH5iBx9m%2FLQ6xIX2ir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMoM0s%2FD%2FFSaTN%2BlyIKtwDf78DCmRt5OVoBsAd3xJRtf4e46C866y01o5qI7l739oInhDYIsbmQ91DPkG7Zsgkr2Ek%2Baibu22JuHxZXGrU4yvaATyxfwGu6iG%2FLInrxk2Ol3Cl5T7WGM%2FeoYZMiob0%2F1uiiRVBxsjydGtvB7yPgqL%2FNl4%2BZMlUyGJKQPW9cZ5RVtY4%2F4MW6owQsBr5zGTLspkCmDGUwDQ%2FfGS51VuxW7WJ3ztIAeBYxjMPT%2Bpb%2FHyqP1R7stMZMXbCTg9wO0VqRqtjIPQ3VAEo%2BNfRCRJ%2Bm86avXrab69cUFKs%2Fc1mDWiJI0kIlM2gOy58bAhu%2BCj09iGi1e1t%2F%2B5133JQgD%2FfPWhTqIQuntrGkyFmWohNiPx4%2B%2Bsx5Kjy7%2FIa7kCFX46F3CRdaEtNEbJ30yrhbpjrJFOy3CxFMUc5ocHg%2FLUbdcRt2i%2BZnMaHQoo%2F89LjHXT8qJwj3mBLhxDQuVQccZ5l0tocs8FWlZZls%2FFpVRePnoAFOSuvfz1o0pYKoA%2FZzRN%2FGvS6mIcVuMmlzG3kQS%2FLLS2vQ6NfPmmg%2FSYDXJ9MvhELSJzfuGAUuyrdLsyDG0qUu9oi199uD3oZ2ikRcw8nH2rSk46Cit1%2BWqHJDQTvBn8tznrfByreOU%2Fu5e0wxpe%2FvwY6pgEEIp%2FfHd9sDZxvC%2FKjgN%2F04nLQGopsm%2BuC4O7Q3AnuR%2FbIz98DtfsB7sEb1NIhDW1BwodwT9490a2rEC%2BV8BenoDdzc2mflSbViuJjVwb16HozlgVf85%2FbgfPBziuran4FFj5Y9%2BeO5Ul6n3hPZQY9vkG7XCm5l1yysPLLVBmD4r%2Fv9AeyR1Cr050ApN9XS%2BGqdPR%2B%2FeeFX6jPs43BfO8iJ9o4uiMZ&X-Amz-Signature=574fc24c207c6f9162fd2a590cd70050331c0b8444a0938108c3bb4611b1819c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKBYDQM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjtR7k1ruFodFfEz49Fh%2FgAd04QNiKpeG8pscjuSILqAiBxeBFx51kzwnh98hywxM9qY6%2FcLVH5iBx9m%2FLQ6xIX2ir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMoM0s%2FD%2FFSaTN%2BlyIKtwDf78DCmRt5OVoBsAd3xJRtf4e46C866y01o5qI7l739oInhDYIsbmQ91DPkG7Zsgkr2Ek%2Baibu22JuHxZXGrU4yvaATyxfwGu6iG%2FLInrxk2Ol3Cl5T7WGM%2FeoYZMiob0%2F1uiiRVBxsjydGtvB7yPgqL%2FNl4%2BZMlUyGJKQPW9cZ5RVtY4%2F4MW6owQsBr5zGTLspkCmDGUwDQ%2FfGS51VuxW7WJ3ztIAeBYxjMPT%2Bpb%2FHyqP1R7stMZMXbCTg9wO0VqRqtjIPQ3VAEo%2BNfRCRJ%2Bm86avXrab69cUFKs%2Fc1mDWiJI0kIlM2gOy58bAhu%2BCj09iGi1e1t%2F%2B5133JQgD%2FfPWhTqIQuntrGkyFmWohNiPx4%2B%2Bsx5Kjy7%2FIa7kCFX46F3CRdaEtNEbJ30yrhbpjrJFOy3CxFMUc5ocHg%2FLUbdcRt2i%2BZnMaHQoo%2F89LjHXT8qJwj3mBLhxDQuVQccZ5l0tocs8FWlZZls%2FFpVRePnoAFOSuvfz1o0pYKoA%2FZzRN%2FGvS6mIcVuMmlzG3kQS%2FLLS2vQ6NfPmmg%2FSYDXJ9MvhELSJzfuGAUuyrdLsyDG0qUu9oi199uD3oZ2ikRcw8nH2rSk46Cit1%2BWqHJDQTvBn8tznrfByreOU%2Fu5e0wxpe%2FvwY6pgEEIp%2FfHd9sDZxvC%2FKjgN%2F04nLQGopsm%2BuC4O7Q3AnuR%2FbIz98DtfsB7sEb1NIhDW1BwodwT9490a2rEC%2BV8BenoDdzc2mflSbViuJjVwb16HozlgVf85%2FbgfPBziuran4FFj5Y9%2BeO5Ul6n3hPZQY9vkG7XCm5l1yysPLLVBmD4r%2Fv9AeyR1Cr050ApN9XS%2BGqdPR%2B%2FeeFX6jPs43BfO8iJ9o4uiMZ&X-Amz-Signature=67b76eeb58c4e763a4c1a041c1fd3b4165576cc02ad01068aa2c6bd328ea7871&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKBYDQM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjtR7k1ruFodFfEz49Fh%2FgAd04QNiKpeG8pscjuSILqAiBxeBFx51kzwnh98hywxM9qY6%2FcLVH5iBx9m%2FLQ6xIX2ir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMoM0s%2FD%2FFSaTN%2BlyIKtwDf78DCmRt5OVoBsAd3xJRtf4e46C866y01o5qI7l739oInhDYIsbmQ91DPkG7Zsgkr2Ek%2Baibu22JuHxZXGrU4yvaATyxfwGu6iG%2FLInrxk2Ol3Cl5T7WGM%2FeoYZMiob0%2F1uiiRVBxsjydGtvB7yPgqL%2FNl4%2BZMlUyGJKQPW9cZ5RVtY4%2F4MW6owQsBr5zGTLspkCmDGUwDQ%2FfGS51VuxW7WJ3ztIAeBYxjMPT%2Bpb%2FHyqP1R7stMZMXbCTg9wO0VqRqtjIPQ3VAEo%2BNfRCRJ%2Bm86avXrab69cUFKs%2Fc1mDWiJI0kIlM2gOy58bAhu%2BCj09iGi1e1t%2F%2B5133JQgD%2FfPWhTqIQuntrGkyFmWohNiPx4%2B%2Bsx5Kjy7%2FIa7kCFX46F3CRdaEtNEbJ30yrhbpjrJFOy3CxFMUc5ocHg%2FLUbdcRt2i%2BZnMaHQoo%2F89LjHXT8qJwj3mBLhxDQuVQccZ5l0tocs8FWlZZls%2FFpVRePnoAFOSuvfz1o0pYKoA%2FZzRN%2FGvS6mIcVuMmlzG3kQS%2FLLS2vQ6NfPmmg%2FSYDXJ9MvhELSJzfuGAUuyrdLsyDG0qUu9oi199uD3oZ2ikRcw8nH2rSk46Cit1%2BWqHJDQTvBn8tznrfByreOU%2Fu5e0wxpe%2FvwY6pgEEIp%2FfHd9sDZxvC%2FKjgN%2F04nLQGopsm%2BuC4O7Q3AnuR%2FbIz98DtfsB7sEb1NIhDW1BwodwT9490a2rEC%2BV8BenoDdzc2mflSbViuJjVwb16HozlgVf85%2FbgfPBziuran4FFj5Y9%2BeO5Ul6n3hPZQY9vkG7XCm5l1yysPLLVBmD4r%2Fv9AeyR1Cr050ApN9XS%2BGqdPR%2B%2FeeFX6jPs43BfO8iJ9o4uiMZ&X-Amz-Signature=aa3fcad276f474875d851668676c7944c04a7fbbef25220eb2fdc153b75a3b24&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKBYDQM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjtR7k1ruFodFfEz49Fh%2FgAd04QNiKpeG8pscjuSILqAiBxeBFx51kzwnh98hywxM9qY6%2FcLVH5iBx9m%2FLQ6xIX2ir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMoM0s%2FD%2FFSaTN%2BlyIKtwDf78DCmRt5OVoBsAd3xJRtf4e46C866y01o5qI7l739oInhDYIsbmQ91DPkG7Zsgkr2Ek%2Baibu22JuHxZXGrU4yvaATyxfwGu6iG%2FLInrxk2Ol3Cl5T7WGM%2FeoYZMiob0%2F1uiiRVBxsjydGtvB7yPgqL%2FNl4%2BZMlUyGJKQPW9cZ5RVtY4%2F4MW6owQsBr5zGTLspkCmDGUwDQ%2FfGS51VuxW7WJ3ztIAeBYxjMPT%2Bpb%2FHyqP1R7stMZMXbCTg9wO0VqRqtjIPQ3VAEo%2BNfRCRJ%2Bm86avXrab69cUFKs%2Fc1mDWiJI0kIlM2gOy58bAhu%2BCj09iGi1e1t%2F%2B5133JQgD%2FfPWhTqIQuntrGkyFmWohNiPx4%2B%2Bsx5Kjy7%2FIa7kCFX46F3CRdaEtNEbJ30yrhbpjrJFOy3CxFMUc5ocHg%2FLUbdcRt2i%2BZnMaHQoo%2F89LjHXT8qJwj3mBLhxDQuVQccZ5l0tocs8FWlZZls%2FFpVRePnoAFOSuvfz1o0pYKoA%2FZzRN%2FGvS6mIcVuMmlzG3kQS%2FLLS2vQ6NfPmmg%2FSYDXJ9MvhELSJzfuGAUuyrdLsyDG0qUu9oi199uD3oZ2ikRcw8nH2rSk46Cit1%2BWqHJDQTvBn8tznrfByreOU%2Fu5e0wxpe%2FvwY6pgEEIp%2FfHd9sDZxvC%2FKjgN%2F04nLQGopsm%2BuC4O7Q3AnuR%2FbIz98DtfsB7sEb1NIhDW1BwodwT9490a2rEC%2BV8BenoDdzc2mflSbViuJjVwb16HozlgVf85%2FbgfPBziuran4FFj5Y9%2BeO5Ul6n3hPZQY9vkG7XCm5l1yysPLLVBmD4r%2Fv9AeyR1Cr050ApN9XS%2BGqdPR%2B%2FeeFX6jPs43BfO8iJ9o4uiMZ&X-Amz-Signature=4a636ffc5d4e32f51f8f38877f25f44186c82dab5825ab6b6d2be0a05fe860af&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKBYDQM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjtR7k1ruFodFfEz49Fh%2FgAd04QNiKpeG8pscjuSILqAiBxeBFx51kzwnh98hywxM9qY6%2FcLVH5iBx9m%2FLQ6xIX2ir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMoM0s%2FD%2FFSaTN%2BlyIKtwDf78DCmRt5OVoBsAd3xJRtf4e46C866y01o5qI7l739oInhDYIsbmQ91DPkG7Zsgkr2Ek%2Baibu22JuHxZXGrU4yvaATyxfwGu6iG%2FLInrxk2Ol3Cl5T7WGM%2FeoYZMiob0%2F1uiiRVBxsjydGtvB7yPgqL%2FNl4%2BZMlUyGJKQPW9cZ5RVtY4%2F4MW6owQsBr5zGTLspkCmDGUwDQ%2FfGS51VuxW7WJ3ztIAeBYxjMPT%2Bpb%2FHyqP1R7stMZMXbCTg9wO0VqRqtjIPQ3VAEo%2BNfRCRJ%2Bm86avXrab69cUFKs%2Fc1mDWiJI0kIlM2gOy58bAhu%2BCj09iGi1e1t%2F%2B5133JQgD%2FfPWhTqIQuntrGkyFmWohNiPx4%2B%2Bsx5Kjy7%2FIa7kCFX46F3CRdaEtNEbJ30yrhbpjrJFOy3CxFMUc5ocHg%2FLUbdcRt2i%2BZnMaHQoo%2F89LjHXT8qJwj3mBLhxDQuVQccZ5l0tocs8FWlZZls%2FFpVRePnoAFOSuvfz1o0pYKoA%2FZzRN%2FGvS6mIcVuMmlzG3kQS%2FLLS2vQ6NfPmmg%2FSYDXJ9MvhELSJzfuGAUuyrdLsyDG0qUu9oi199uD3oZ2ikRcw8nH2rSk46Cit1%2BWqHJDQTvBn8tznrfByreOU%2Fu5e0wxpe%2FvwY6pgEEIp%2FfHd9sDZxvC%2FKjgN%2F04nLQGopsm%2BuC4O7Q3AnuR%2FbIz98DtfsB7sEb1NIhDW1BwodwT9490a2rEC%2BV8BenoDdzc2mflSbViuJjVwb16HozlgVf85%2FbgfPBziuran4FFj5Y9%2BeO5Ul6n3hPZQY9vkG7XCm5l1yysPLLVBmD4r%2Fv9AeyR1Cr050ApN9XS%2BGqdPR%2B%2FeeFX6jPs43BfO8iJ9o4uiMZ&X-Amz-Signature=29960e7cdee44a097d510a6fe63ff84d7c7866cab289c58234b78565b9722292&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
