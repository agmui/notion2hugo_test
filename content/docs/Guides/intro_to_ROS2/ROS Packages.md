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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YFRFN3H%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmtYPg9D7TYWA3KPCVjg%2FW5Blap%2BKwxqO%2BvKv%2B9fQPXAiBplQ9HNnwEkUqlMbha5Zz%2Bxne40H0fZ69o%2F4XTWc6LRSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1J7OaJMPZpaGMfVDKtwDlTw1oexRU8JP%2FCSfsilbTnRCSIXY2nV4R6FhlWXc51VulkslRp73m%2BmCaiVQUKpqmDA8IZlDALG5PcuFK1u%2FTkZ%2FZmQ1oKMLiEWk0LlFNvq8cbtnxo1bKXkw0frPxX4earATjolIt3HV6IiUxwHWKrTulgIyM%2FtStU1%2FiFpagQdld6VtpgA7HL4as8gKrEmRaSD2MK%2BpE5tJjjzy2drv54C3a89Gd6%2FFhSc638UEuJIdKpPTm%2BEDei59RvxYQKsYqWYnZjeJWt4YGEwxsj9neK%2FOHQWQqcwPWYDW0e6YH9ePD9YzH8q1hTv1PS8q49sZLGHuviu5bsdzG%2B89U3xDCmUCtNrpnpeEOlYviiC%2BNBQpUSiyuY6ETyvbIhSlmlmva6mRB62Cx0aGMYa51I6CyP9H1Qhztig3U8Dujz53%2FOodidTeNcLYJyTG2iCqa4vKL0q%2BonNxMcCY8PLz2gdAJFS6vlMZTLYUDmkIZsKOiwmd4i4xGj9m5bd9eJFmLR9p%2BnF90OM%2B3ZGAIvmwTo1LRB91Mfm5HN9IxRJkTpGQ8iVNih1XkXYf70C2sSvJC2AbCaD5f6T8BwRg2PGmQjoHpzz4CXUepGLe0JwKV7x92EqdIGCn8I3STo6Y88wwztebwgY6pgEs%2BrW%2FfVnSCOInZWUTDsmQCHwP25hUr9%2FNKUk9cTsdvUMY415kZ6eXIX5BrnYY7vI5AN%2Bc5kMAGgXMW7wSgXakCiqrs8ZvudWV9Gc%2B5rV7QsnPpDEO44t5V9tupn0F9ldW8vsiQV7V0yOL2eCMRXpmKxRhxjWL8kx%2FYwe%2FRRgxDoXaSLzOm4X0xBIeXKV5%2BTSrJF9hwWgG1iXCogfa3vNSrL9c8bV1&X-Amz-Signature=a227262d5b5996be1bfa1581a1d076873d8b1b0252d6a71abc415408b56fbafe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YFRFN3H%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmtYPg9D7TYWA3KPCVjg%2FW5Blap%2BKwxqO%2BvKv%2B9fQPXAiBplQ9HNnwEkUqlMbha5Zz%2Bxne40H0fZ69o%2F4XTWc6LRSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1J7OaJMPZpaGMfVDKtwDlTw1oexRU8JP%2FCSfsilbTnRCSIXY2nV4R6FhlWXc51VulkslRp73m%2BmCaiVQUKpqmDA8IZlDALG5PcuFK1u%2FTkZ%2FZmQ1oKMLiEWk0LlFNvq8cbtnxo1bKXkw0frPxX4earATjolIt3HV6IiUxwHWKrTulgIyM%2FtStU1%2FiFpagQdld6VtpgA7HL4as8gKrEmRaSD2MK%2BpE5tJjjzy2drv54C3a89Gd6%2FFhSc638UEuJIdKpPTm%2BEDei59RvxYQKsYqWYnZjeJWt4YGEwxsj9neK%2FOHQWQqcwPWYDW0e6YH9ePD9YzH8q1hTv1PS8q49sZLGHuviu5bsdzG%2B89U3xDCmUCtNrpnpeEOlYviiC%2BNBQpUSiyuY6ETyvbIhSlmlmva6mRB62Cx0aGMYa51I6CyP9H1Qhztig3U8Dujz53%2FOodidTeNcLYJyTG2iCqa4vKL0q%2BonNxMcCY8PLz2gdAJFS6vlMZTLYUDmkIZsKOiwmd4i4xGj9m5bd9eJFmLR9p%2BnF90OM%2B3ZGAIvmwTo1LRB91Mfm5HN9IxRJkTpGQ8iVNih1XkXYf70C2sSvJC2AbCaD5f6T8BwRg2PGmQjoHpzz4CXUepGLe0JwKV7x92EqdIGCn8I3STo6Y88wwztebwgY6pgEs%2BrW%2FfVnSCOInZWUTDsmQCHwP25hUr9%2FNKUk9cTsdvUMY415kZ6eXIX5BrnYY7vI5AN%2Bc5kMAGgXMW7wSgXakCiqrs8ZvudWV9Gc%2B5rV7QsnPpDEO44t5V9tupn0F9ldW8vsiQV7V0yOL2eCMRXpmKxRhxjWL8kx%2FYwe%2FRRgxDoXaSLzOm4X0xBIeXKV5%2BTSrJF9hwWgG1iXCogfa3vNSrL9c8bV1&X-Amz-Signature=9fb09fcf215868df78855fb74233b42fe57d7321c23abd29fa3c554fccedb289&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YFRFN3H%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmtYPg9D7TYWA3KPCVjg%2FW5Blap%2BKwxqO%2BvKv%2B9fQPXAiBplQ9HNnwEkUqlMbha5Zz%2Bxne40H0fZ69o%2F4XTWc6LRSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1J7OaJMPZpaGMfVDKtwDlTw1oexRU8JP%2FCSfsilbTnRCSIXY2nV4R6FhlWXc51VulkslRp73m%2BmCaiVQUKpqmDA8IZlDALG5PcuFK1u%2FTkZ%2FZmQ1oKMLiEWk0LlFNvq8cbtnxo1bKXkw0frPxX4earATjolIt3HV6IiUxwHWKrTulgIyM%2FtStU1%2FiFpagQdld6VtpgA7HL4as8gKrEmRaSD2MK%2BpE5tJjjzy2drv54C3a89Gd6%2FFhSc638UEuJIdKpPTm%2BEDei59RvxYQKsYqWYnZjeJWt4YGEwxsj9neK%2FOHQWQqcwPWYDW0e6YH9ePD9YzH8q1hTv1PS8q49sZLGHuviu5bsdzG%2B89U3xDCmUCtNrpnpeEOlYviiC%2BNBQpUSiyuY6ETyvbIhSlmlmva6mRB62Cx0aGMYa51I6CyP9H1Qhztig3U8Dujz53%2FOodidTeNcLYJyTG2iCqa4vKL0q%2BonNxMcCY8PLz2gdAJFS6vlMZTLYUDmkIZsKOiwmd4i4xGj9m5bd9eJFmLR9p%2BnF90OM%2B3ZGAIvmwTo1LRB91Mfm5HN9IxRJkTpGQ8iVNih1XkXYf70C2sSvJC2AbCaD5f6T8BwRg2PGmQjoHpzz4CXUepGLe0JwKV7x92EqdIGCn8I3STo6Y88wwztebwgY6pgEs%2BrW%2FfVnSCOInZWUTDsmQCHwP25hUr9%2FNKUk9cTsdvUMY415kZ6eXIX5BrnYY7vI5AN%2Bc5kMAGgXMW7wSgXakCiqrs8ZvudWV9Gc%2B5rV7QsnPpDEO44t5V9tupn0F9ldW8vsiQV7V0yOL2eCMRXpmKxRhxjWL8kx%2FYwe%2FRRgxDoXaSLzOm4X0xBIeXKV5%2BTSrJF9hwWgG1iXCogfa3vNSrL9c8bV1&X-Amz-Signature=2c5692e83498d9898d6bf8afafd7d3e31a79aa5911e7caf6014b674581f8052a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YFRFN3H%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmtYPg9D7TYWA3KPCVjg%2FW5Blap%2BKwxqO%2BvKv%2B9fQPXAiBplQ9HNnwEkUqlMbha5Zz%2Bxne40H0fZ69o%2F4XTWc6LRSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1J7OaJMPZpaGMfVDKtwDlTw1oexRU8JP%2FCSfsilbTnRCSIXY2nV4R6FhlWXc51VulkslRp73m%2BmCaiVQUKpqmDA8IZlDALG5PcuFK1u%2FTkZ%2FZmQ1oKMLiEWk0LlFNvq8cbtnxo1bKXkw0frPxX4earATjolIt3HV6IiUxwHWKrTulgIyM%2FtStU1%2FiFpagQdld6VtpgA7HL4as8gKrEmRaSD2MK%2BpE5tJjjzy2drv54C3a89Gd6%2FFhSc638UEuJIdKpPTm%2BEDei59RvxYQKsYqWYnZjeJWt4YGEwxsj9neK%2FOHQWQqcwPWYDW0e6YH9ePD9YzH8q1hTv1PS8q49sZLGHuviu5bsdzG%2B89U3xDCmUCtNrpnpeEOlYviiC%2BNBQpUSiyuY6ETyvbIhSlmlmva6mRB62Cx0aGMYa51I6CyP9H1Qhztig3U8Dujz53%2FOodidTeNcLYJyTG2iCqa4vKL0q%2BonNxMcCY8PLz2gdAJFS6vlMZTLYUDmkIZsKOiwmd4i4xGj9m5bd9eJFmLR9p%2BnF90OM%2B3ZGAIvmwTo1LRB91Mfm5HN9IxRJkTpGQ8iVNih1XkXYf70C2sSvJC2AbCaD5f6T8BwRg2PGmQjoHpzz4CXUepGLe0JwKV7x92EqdIGCn8I3STo6Y88wwztebwgY6pgEs%2BrW%2FfVnSCOInZWUTDsmQCHwP25hUr9%2FNKUk9cTsdvUMY415kZ6eXIX5BrnYY7vI5AN%2Bc5kMAGgXMW7wSgXakCiqrs8ZvudWV9Gc%2B5rV7QsnPpDEO44t5V9tupn0F9ldW8vsiQV7V0yOL2eCMRXpmKxRhxjWL8kx%2FYwe%2FRRgxDoXaSLzOm4X0xBIeXKV5%2BTSrJF9hwWgG1iXCogfa3vNSrL9c8bV1&X-Amz-Signature=f44039ae920edd575be8376fcd7a09dca6d036608c922b4a64b2849b1ed8cca5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YFRFN3H%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmtYPg9D7TYWA3KPCVjg%2FW5Blap%2BKwxqO%2BvKv%2B9fQPXAiBplQ9HNnwEkUqlMbha5Zz%2Bxne40H0fZ69o%2F4XTWc6LRSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1J7OaJMPZpaGMfVDKtwDlTw1oexRU8JP%2FCSfsilbTnRCSIXY2nV4R6FhlWXc51VulkslRp73m%2BmCaiVQUKpqmDA8IZlDALG5PcuFK1u%2FTkZ%2FZmQ1oKMLiEWk0LlFNvq8cbtnxo1bKXkw0frPxX4earATjolIt3HV6IiUxwHWKrTulgIyM%2FtStU1%2FiFpagQdld6VtpgA7HL4as8gKrEmRaSD2MK%2BpE5tJjjzy2drv54C3a89Gd6%2FFhSc638UEuJIdKpPTm%2BEDei59RvxYQKsYqWYnZjeJWt4YGEwxsj9neK%2FOHQWQqcwPWYDW0e6YH9ePD9YzH8q1hTv1PS8q49sZLGHuviu5bsdzG%2B89U3xDCmUCtNrpnpeEOlYviiC%2BNBQpUSiyuY6ETyvbIhSlmlmva6mRB62Cx0aGMYa51I6CyP9H1Qhztig3U8Dujz53%2FOodidTeNcLYJyTG2iCqa4vKL0q%2BonNxMcCY8PLz2gdAJFS6vlMZTLYUDmkIZsKOiwmd4i4xGj9m5bd9eJFmLR9p%2BnF90OM%2B3ZGAIvmwTo1LRB91Mfm5HN9IxRJkTpGQ8iVNih1XkXYf70C2sSvJC2AbCaD5f6T8BwRg2PGmQjoHpzz4CXUepGLe0JwKV7x92EqdIGCn8I3STo6Y88wwztebwgY6pgEs%2BrW%2FfVnSCOInZWUTDsmQCHwP25hUr9%2FNKUk9cTsdvUMY415kZ6eXIX5BrnYY7vI5AN%2Bc5kMAGgXMW7wSgXakCiqrs8ZvudWV9Gc%2B5rV7QsnPpDEO44t5V9tupn0F9ldW8vsiQV7V0yOL2eCMRXpmKxRhxjWL8kx%2FYwe%2FRRgxDoXaSLzOm4X0xBIeXKV5%2BTSrJF9hwWgG1iXCogfa3vNSrL9c8bV1&X-Amz-Signature=2ce5d8603588affd745dbeb5a7477fdeef1322cef874d53a4c5bdb7a8eadc1f1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YFRFN3H%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmtYPg9D7TYWA3KPCVjg%2FW5Blap%2BKwxqO%2BvKv%2B9fQPXAiBplQ9HNnwEkUqlMbha5Zz%2Bxne40H0fZ69o%2F4XTWc6LRSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1J7OaJMPZpaGMfVDKtwDlTw1oexRU8JP%2FCSfsilbTnRCSIXY2nV4R6FhlWXc51VulkslRp73m%2BmCaiVQUKpqmDA8IZlDALG5PcuFK1u%2FTkZ%2FZmQ1oKMLiEWk0LlFNvq8cbtnxo1bKXkw0frPxX4earATjolIt3HV6IiUxwHWKrTulgIyM%2FtStU1%2FiFpagQdld6VtpgA7HL4as8gKrEmRaSD2MK%2BpE5tJjjzy2drv54C3a89Gd6%2FFhSc638UEuJIdKpPTm%2BEDei59RvxYQKsYqWYnZjeJWt4YGEwxsj9neK%2FOHQWQqcwPWYDW0e6YH9ePD9YzH8q1hTv1PS8q49sZLGHuviu5bsdzG%2B89U3xDCmUCtNrpnpeEOlYviiC%2BNBQpUSiyuY6ETyvbIhSlmlmva6mRB62Cx0aGMYa51I6CyP9H1Qhztig3U8Dujz53%2FOodidTeNcLYJyTG2iCqa4vKL0q%2BonNxMcCY8PLz2gdAJFS6vlMZTLYUDmkIZsKOiwmd4i4xGj9m5bd9eJFmLR9p%2BnF90OM%2B3ZGAIvmwTo1LRB91Mfm5HN9IxRJkTpGQ8iVNih1XkXYf70C2sSvJC2AbCaD5f6T8BwRg2PGmQjoHpzz4CXUepGLe0JwKV7x92EqdIGCn8I3STo6Y88wwztebwgY6pgEs%2BrW%2FfVnSCOInZWUTDsmQCHwP25hUr9%2FNKUk9cTsdvUMY415kZ6eXIX5BrnYY7vI5AN%2Bc5kMAGgXMW7wSgXakCiqrs8ZvudWV9Gc%2B5rV7QsnPpDEO44t5V9tupn0F9ldW8vsiQV7V0yOL2eCMRXpmKxRhxjWL8kx%2FYwe%2FRRgxDoXaSLzOm4X0xBIeXKV5%2BTSrJF9hwWgG1iXCogfa3vNSrL9c8bV1&X-Amz-Signature=ede774672ec0ef31cf07c6cef86c1eade00fe8e229e45efad7e60119a4cd980f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YFRFN3H%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmtYPg9D7TYWA3KPCVjg%2FW5Blap%2BKwxqO%2BvKv%2B9fQPXAiBplQ9HNnwEkUqlMbha5Zz%2Bxne40H0fZ69o%2F4XTWc6LRSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1J7OaJMPZpaGMfVDKtwDlTw1oexRU8JP%2FCSfsilbTnRCSIXY2nV4R6FhlWXc51VulkslRp73m%2BmCaiVQUKpqmDA8IZlDALG5PcuFK1u%2FTkZ%2FZmQ1oKMLiEWk0LlFNvq8cbtnxo1bKXkw0frPxX4earATjolIt3HV6IiUxwHWKrTulgIyM%2FtStU1%2FiFpagQdld6VtpgA7HL4as8gKrEmRaSD2MK%2BpE5tJjjzy2drv54C3a89Gd6%2FFhSc638UEuJIdKpPTm%2BEDei59RvxYQKsYqWYnZjeJWt4YGEwxsj9neK%2FOHQWQqcwPWYDW0e6YH9ePD9YzH8q1hTv1PS8q49sZLGHuviu5bsdzG%2B89U3xDCmUCtNrpnpeEOlYviiC%2BNBQpUSiyuY6ETyvbIhSlmlmva6mRB62Cx0aGMYa51I6CyP9H1Qhztig3U8Dujz53%2FOodidTeNcLYJyTG2iCqa4vKL0q%2BonNxMcCY8PLz2gdAJFS6vlMZTLYUDmkIZsKOiwmd4i4xGj9m5bd9eJFmLR9p%2BnF90OM%2B3ZGAIvmwTo1LRB91Mfm5HN9IxRJkTpGQ8iVNih1XkXYf70C2sSvJC2AbCaD5f6T8BwRg2PGmQjoHpzz4CXUepGLe0JwKV7x92EqdIGCn8I3STo6Y88wwztebwgY6pgEs%2BrW%2FfVnSCOInZWUTDsmQCHwP25hUr9%2FNKUk9cTsdvUMY415kZ6eXIX5BrnYY7vI5AN%2Bc5kMAGgXMW7wSgXakCiqrs8ZvudWV9Gc%2B5rV7QsnPpDEO44t5V9tupn0F9ldW8vsiQV7V0yOL2eCMRXpmKxRhxjWL8kx%2FYwe%2FRRgxDoXaSLzOm4X0xBIeXKV5%2BTSrJF9hwWgG1iXCogfa3vNSrL9c8bV1&X-Amz-Signature=4f11b87b79c0ca527e2abcedcbaa5561311fec9bf80ba2a22f78b7fe8daa6565&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
