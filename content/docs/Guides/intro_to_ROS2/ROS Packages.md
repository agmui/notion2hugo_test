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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKELATXW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICxyq8a%2BEKD7NycjkR94hhbts4IVVrUp5FSO3omwR5FxAiEAuemJ8gY5AvuC98g0Fd0q%2Fk9hY7gQoyrIaIVXYqkUBn0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOS0UAXHqSD6EmdpOyrcA1vFZsgZ4x3SuBZMWH4PzBkF3eda9koQpvop64lYL1kA51cLAjXMcSodefl9BAwc088%2FiNY49dBZJEI%2Bsd6SYdiHnwgsQz2JzuwbhIIlyuN%2F40HCUuxzzGy4DN%2Boij1kEhMrapbGVlOJNT6thsmernOiZfm8l%2FXKLwMG9JavYvLN0Me3ZjSe5qAIGNwKh0kj6%2F2yDh1wadZtCC825Tf3FSfBI79blmAabdBXzWvQ8yzUu1Apdc%2BPhEA5xK56QqfRgbnCoYwdKRIghlXlmNMlFWVnv9rppJGMwQ%2FGMkrhCL2WaiXnXuLqy1VFsK0rfhP0wOI7LhSaQLn3qwc%2BKJH5JJFsohjdPzcvDQVd0rbFYKN6tVIuBus9R3Ai4qzHMAjeqVPRG5J%2BHH9SYe8q9j%2B20sZyseBikBlgcFBYAeJiqA8iO%2Bx0OpHUYk9%2Bm%2F5hYM8GTzdCxSEmFbtgt2PH5FBLoP5kk2dcrcOZS0zNHHaM4BEklBaptnvvPCN%2BY%2FMbAMOA8CRWzeFZ325C6Hga9ABhbiSvTsdt1yhXhBiV%2BQ2McT%2F%2Bz0bOiokK%2BRzIP52IF2DMkDCTQ1dAHoKjbUvbs%2BvjieXZrfA%2B8EfkNciN36822edYoIah5eQv4LTSt%2BS6MJzz5r4GOqUBz%2B107fdt%2BLwOjh6OsuFdhGaLl0nQQ2X9dgwY0i2vbjePxBr4M%2FXyKa8cH0AXXe9wlyQ9IFf92AJ1KeYJGa6FijczPSJgWRlxnqbZio7xa7QH9yx5z2F2ysVZV93VnbqdUOvTQjFxxhLZFH%2B5lCX5gDue6msnLiSpJO6mhLxuBl6COspvwsd3BDGGez9xMWgtEN%2BpdOla4FCDebcyx536%2FLRJ7bBi&X-Amz-Signature=0b9cfb00622b573400cc6bbea8bcd3ab819a4022a4b718a7093f0a4df4dee607&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKELATXW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICxyq8a%2BEKD7NycjkR94hhbts4IVVrUp5FSO3omwR5FxAiEAuemJ8gY5AvuC98g0Fd0q%2Fk9hY7gQoyrIaIVXYqkUBn0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOS0UAXHqSD6EmdpOyrcA1vFZsgZ4x3SuBZMWH4PzBkF3eda9koQpvop64lYL1kA51cLAjXMcSodefl9BAwc088%2FiNY49dBZJEI%2Bsd6SYdiHnwgsQz2JzuwbhIIlyuN%2F40HCUuxzzGy4DN%2Boij1kEhMrapbGVlOJNT6thsmernOiZfm8l%2FXKLwMG9JavYvLN0Me3ZjSe5qAIGNwKh0kj6%2F2yDh1wadZtCC825Tf3FSfBI79blmAabdBXzWvQ8yzUu1Apdc%2BPhEA5xK56QqfRgbnCoYwdKRIghlXlmNMlFWVnv9rppJGMwQ%2FGMkrhCL2WaiXnXuLqy1VFsK0rfhP0wOI7LhSaQLn3qwc%2BKJH5JJFsohjdPzcvDQVd0rbFYKN6tVIuBus9R3Ai4qzHMAjeqVPRG5J%2BHH9SYe8q9j%2B20sZyseBikBlgcFBYAeJiqA8iO%2Bx0OpHUYk9%2Bm%2F5hYM8GTzdCxSEmFbtgt2PH5FBLoP5kk2dcrcOZS0zNHHaM4BEklBaptnvvPCN%2BY%2FMbAMOA8CRWzeFZ325C6Hga9ABhbiSvTsdt1yhXhBiV%2BQ2McT%2F%2Bz0bOiokK%2BRzIP52IF2DMkDCTQ1dAHoKjbUvbs%2BvjieXZrfA%2B8EfkNciN36822edYoIah5eQv4LTSt%2BS6MJzz5r4GOqUBz%2B107fdt%2BLwOjh6OsuFdhGaLl0nQQ2X9dgwY0i2vbjePxBr4M%2FXyKa8cH0AXXe9wlyQ9IFf92AJ1KeYJGa6FijczPSJgWRlxnqbZio7xa7QH9yx5z2F2ysVZV93VnbqdUOvTQjFxxhLZFH%2B5lCX5gDue6msnLiSpJO6mhLxuBl6COspvwsd3BDGGez9xMWgtEN%2BpdOla4FCDebcyx536%2FLRJ7bBi&X-Amz-Signature=6ee6341ed0ac3a92ede1b5b8fb414820951510b23f2d25132e74cf34170971ce&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKELATXW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICxyq8a%2BEKD7NycjkR94hhbts4IVVrUp5FSO3omwR5FxAiEAuemJ8gY5AvuC98g0Fd0q%2Fk9hY7gQoyrIaIVXYqkUBn0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOS0UAXHqSD6EmdpOyrcA1vFZsgZ4x3SuBZMWH4PzBkF3eda9koQpvop64lYL1kA51cLAjXMcSodefl9BAwc088%2FiNY49dBZJEI%2Bsd6SYdiHnwgsQz2JzuwbhIIlyuN%2F40HCUuxzzGy4DN%2Boij1kEhMrapbGVlOJNT6thsmernOiZfm8l%2FXKLwMG9JavYvLN0Me3ZjSe5qAIGNwKh0kj6%2F2yDh1wadZtCC825Tf3FSfBI79blmAabdBXzWvQ8yzUu1Apdc%2BPhEA5xK56QqfRgbnCoYwdKRIghlXlmNMlFWVnv9rppJGMwQ%2FGMkrhCL2WaiXnXuLqy1VFsK0rfhP0wOI7LhSaQLn3qwc%2BKJH5JJFsohjdPzcvDQVd0rbFYKN6tVIuBus9R3Ai4qzHMAjeqVPRG5J%2BHH9SYe8q9j%2B20sZyseBikBlgcFBYAeJiqA8iO%2Bx0OpHUYk9%2Bm%2F5hYM8GTzdCxSEmFbtgt2PH5FBLoP5kk2dcrcOZS0zNHHaM4BEklBaptnvvPCN%2BY%2FMbAMOA8CRWzeFZ325C6Hga9ABhbiSvTsdt1yhXhBiV%2BQ2McT%2F%2Bz0bOiokK%2BRzIP52IF2DMkDCTQ1dAHoKjbUvbs%2BvjieXZrfA%2B8EfkNciN36822edYoIah5eQv4LTSt%2BS6MJzz5r4GOqUBz%2B107fdt%2BLwOjh6OsuFdhGaLl0nQQ2X9dgwY0i2vbjePxBr4M%2FXyKa8cH0AXXe9wlyQ9IFf92AJ1KeYJGa6FijczPSJgWRlxnqbZio7xa7QH9yx5z2F2ysVZV93VnbqdUOvTQjFxxhLZFH%2B5lCX5gDue6msnLiSpJO6mhLxuBl6COspvwsd3BDGGez9xMWgtEN%2BpdOla4FCDebcyx536%2FLRJ7bBi&X-Amz-Signature=8a391baea088fc32feb77f6a1ea9e98191c322407846cea95b92d0cefbc3d4f1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKELATXW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICxyq8a%2BEKD7NycjkR94hhbts4IVVrUp5FSO3omwR5FxAiEAuemJ8gY5AvuC98g0Fd0q%2Fk9hY7gQoyrIaIVXYqkUBn0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOS0UAXHqSD6EmdpOyrcA1vFZsgZ4x3SuBZMWH4PzBkF3eda9koQpvop64lYL1kA51cLAjXMcSodefl9BAwc088%2FiNY49dBZJEI%2Bsd6SYdiHnwgsQz2JzuwbhIIlyuN%2F40HCUuxzzGy4DN%2Boij1kEhMrapbGVlOJNT6thsmernOiZfm8l%2FXKLwMG9JavYvLN0Me3ZjSe5qAIGNwKh0kj6%2F2yDh1wadZtCC825Tf3FSfBI79blmAabdBXzWvQ8yzUu1Apdc%2BPhEA5xK56QqfRgbnCoYwdKRIghlXlmNMlFWVnv9rppJGMwQ%2FGMkrhCL2WaiXnXuLqy1VFsK0rfhP0wOI7LhSaQLn3qwc%2BKJH5JJFsohjdPzcvDQVd0rbFYKN6tVIuBus9R3Ai4qzHMAjeqVPRG5J%2BHH9SYe8q9j%2B20sZyseBikBlgcFBYAeJiqA8iO%2Bx0OpHUYk9%2Bm%2F5hYM8GTzdCxSEmFbtgt2PH5FBLoP5kk2dcrcOZS0zNHHaM4BEklBaptnvvPCN%2BY%2FMbAMOA8CRWzeFZ325C6Hga9ABhbiSvTsdt1yhXhBiV%2BQ2McT%2F%2Bz0bOiokK%2BRzIP52IF2DMkDCTQ1dAHoKjbUvbs%2BvjieXZrfA%2B8EfkNciN36822edYoIah5eQv4LTSt%2BS6MJzz5r4GOqUBz%2B107fdt%2BLwOjh6OsuFdhGaLl0nQQ2X9dgwY0i2vbjePxBr4M%2FXyKa8cH0AXXe9wlyQ9IFf92AJ1KeYJGa6FijczPSJgWRlxnqbZio7xa7QH9yx5z2F2ysVZV93VnbqdUOvTQjFxxhLZFH%2B5lCX5gDue6msnLiSpJO6mhLxuBl6COspvwsd3BDGGez9xMWgtEN%2BpdOla4FCDebcyx536%2FLRJ7bBi&X-Amz-Signature=38109137eb63328f32f95ea47e90f06a9781ad023f7f9c4830f18a2a13c1343e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKELATXW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICxyq8a%2BEKD7NycjkR94hhbts4IVVrUp5FSO3omwR5FxAiEAuemJ8gY5AvuC98g0Fd0q%2Fk9hY7gQoyrIaIVXYqkUBn0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOS0UAXHqSD6EmdpOyrcA1vFZsgZ4x3SuBZMWH4PzBkF3eda9koQpvop64lYL1kA51cLAjXMcSodefl9BAwc088%2FiNY49dBZJEI%2Bsd6SYdiHnwgsQz2JzuwbhIIlyuN%2F40HCUuxzzGy4DN%2Boij1kEhMrapbGVlOJNT6thsmernOiZfm8l%2FXKLwMG9JavYvLN0Me3ZjSe5qAIGNwKh0kj6%2F2yDh1wadZtCC825Tf3FSfBI79blmAabdBXzWvQ8yzUu1Apdc%2BPhEA5xK56QqfRgbnCoYwdKRIghlXlmNMlFWVnv9rppJGMwQ%2FGMkrhCL2WaiXnXuLqy1VFsK0rfhP0wOI7LhSaQLn3qwc%2BKJH5JJFsohjdPzcvDQVd0rbFYKN6tVIuBus9R3Ai4qzHMAjeqVPRG5J%2BHH9SYe8q9j%2B20sZyseBikBlgcFBYAeJiqA8iO%2Bx0OpHUYk9%2Bm%2F5hYM8GTzdCxSEmFbtgt2PH5FBLoP5kk2dcrcOZS0zNHHaM4BEklBaptnvvPCN%2BY%2FMbAMOA8CRWzeFZ325C6Hga9ABhbiSvTsdt1yhXhBiV%2BQ2McT%2F%2Bz0bOiokK%2BRzIP52IF2DMkDCTQ1dAHoKjbUvbs%2BvjieXZrfA%2B8EfkNciN36822edYoIah5eQv4LTSt%2BS6MJzz5r4GOqUBz%2B107fdt%2BLwOjh6OsuFdhGaLl0nQQ2X9dgwY0i2vbjePxBr4M%2FXyKa8cH0AXXe9wlyQ9IFf92AJ1KeYJGa6FijczPSJgWRlxnqbZio7xa7QH9yx5z2F2ysVZV93VnbqdUOvTQjFxxhLZFH%2B5lCX5gDue6msnLiSpJO6mhLxuBl6COspvwsd3BDGGez9xMWgtEN%2BpdOla4FCDebcyx536%2FLRJ7bBi&X-Amz-Signature=f15fc779354692b3a1160442ba1f0de6d0b5141816ff267698f1cc9ba3c270ed&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKELATXW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICxyq8a%2BEKD7NycjkR94hhbts4IVVrUp5FSO3omwR5FxAiEAuemJ8gY5AvuC98g0Fd0q%2Fk9hY7gQoyrIaIVXYqkUBn0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOS0UAXHqSD6EmdpOyrcA1vFZsgZ4x3SuBZMWH4PzBkF3eda9koQpvop64lYL1kA51cLAjXMcSodefl9BAwc088%2FiNY49dBZJEI%2Bsd6SYdiHnwgsQz2JzuwbhIIlyuN%2F40HCUuxzzGy4DN%2Boij1kEhMrapbGVlOJNT6thsmernOiZfm8l%2FXKLwMG9JavYvLN0Me3ZjSe5qAIGNwKh0kj6%2F2yDh1wadZtCC825Tf3FSfBI79blmAabdBXzWvQ8yzUu1Apdc%2BPhEA5xK56QqfRgbnCoYwdKRIghlXlmNMlFWVnv9rppJGMwQ%2FGMkrhCL2WaiXnXuLqy1VFsK0rfhP0wOI7LhSaQLn3qwc%2BKJH5JJFsohjdPzcvDQVd0rbFYKN6tVIuBus9R3Ai4qzHMAjeqVPRG5J%2BHH9SYe8q9j%2B20sZyseBikBlgcFBYAeJiqA8iO%2Bx0OpHUYk9%2Bm%2F5hYM8GTzdCxSEmFbtgt2PH5FBLoP5kk2dcrcOZS0zNHHaM4BEklBaptnvvPCN%2BY%2FMbAMOA8CRWzeFZ325C6Hga9ABhbiSvTsdt1yhXhBiV%2BQ2McT%2F%2Bz0bOiokK%2BRzIP52IF2DMkDCTQ1dAHoKjbUvbs%2BvjieXZrfA%2B8EfkNciN36822edYoIah5eQv4LTSt%2BS6MJzz5r4GOqUBz%2B107fdt%2BLwOjh6OsuFdhGaLl0nQQ2X9dgwY0i2vbjePxBr4M%2FXyKa8cH0AXXe9wlyQ9IFf92AJ1KeYJGa6FijczPSJgWRlxnqbZio7xa7QH9yx5z2F2ysVZV93VnbqdUOvTQjFxxhLZFH%2B5lCX5gDue6msnLiSpJO6mhLxuBl6COspvwsd3BDGGez9xMWgtEN%2BpdOla4FCDebcyx536%2FLRJ7bBi&X-Amz-Signature=1c9bd746a184ba43fd2cf4e49bbc00a2bc138d4640d7082b711b2b97b1ecbb90&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKELATXW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICxyq8a%2BEKD7NycjkR94hhbts4IVVrUp5FSO3omwR5FxAiEAuemJ8gY5AvuC98g0Fd0q%2Fk9hY7gQoyrIaIVXYqkUBn0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOS0UAXHqSD6EmdpOyrcA1vFZsgZ4x3SuBZMWH4PzBkF3eda9koQpvop64lYL1kA51cLAjXMcSodefl9BAwc088%2FiNY49dBZJEI%2Bsd6SYdiHnwgsQz2JzuwbhIIlyuN%2F40HCUuxzzGy4DN%2Boij1kEhMrapbGVlOJNT6thsmernOiZfm8l%2FXKLwMG9JavYvLN0Me3ZjSe5qAIGNwKh0kj6%2F2yDh1wadZtCC825Tf3FSfBI79blmAabdBXzWvQ8yzUu1Apdc%2BPhEA5xK56QqfRgbnCoYwdKRIghlXlmNMlFWVnv9rppJGMwQ%2FGMkrhCL2WaiXnXuLqy1VFsK0rfhP0wOI7LhSaQLn3qwc%2BKJH5JJFsohjdPzcvDQVd0rbFYKN6tVIuBus9R3Ai4qzHMAjeqVPRG5J%2BHH9SYe8q9j%2B20sZyseBikBlgcFBYAeJiqA8iO%2Bx0OpHUYk9%2Bm%2F5hYM8GTzdCxSEmFbtgt2PH5FBLoP5kk2dcrcOZS0zNHHaM4BEklBaptnvvPCN%2BY%2FMbAMOA8CRWzeFZ325C6Hga9ABhbiSvTsdt1yhXhBiV%2BQ2McT%2F%2Bz0bOiokK%2BRzIP52IF2DMkDCTQ1dAHoKjbUvbs%2BvjieXZrfA%2B8EfkNciN36822edYoIah5eQv4LTSt%2BS6MJzz5r4GOqUBz%2B107fdt%2BLwOjh6OsuFdhGaLl0nQQ2X9dgwY0i2vbjePxBr4M%2FXyKa8cH0AXXe9wlyQ9IFf92AJ1KeYJGa6FijczPSJgWRlxnqbZio7xa7QH9yx5z2F2ysVZV93VnbqdUOvTQjFxxhLZFH%2B5lCX5gDue6msnLiSpJO6mhLxuBl6COspvwsd3BDGGez9xMWgtEN%2BpdOla4FCDebcyx536%2FLRJ7bBi&X-Amz-Signature=c22405e10f8b32d9b1c5592beb3d3c2343e18b2b66bd627e9f1f04d10d484f77&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
