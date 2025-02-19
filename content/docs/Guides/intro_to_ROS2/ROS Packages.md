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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NESBBO3%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGAwM9NUKPVn%2FdaLRNzR7J62uFkx5M4wDdUgh8l8PnZrAiEA3RsNHOUz2JbQYY1W55i7uFhFttkUwNtQaItLjq8Z%2FR8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP3OmAJbNY2hFYD7CrcAya1WJUty%2BQ47pWSENZnhFTj1FIDE0lGtQktOp9zkF6aPjn55canpONQHN3KsOT0q0GX5j%2F1tueSf2JHUM2E3T5i6KcbKjws2jMZkgPJ4MxTOllPsamgZ2FSNSBwJDj4N%2BzcBEBL8laJD3UtIb8pv0UkQVBxE%2BwiZFdiF7ZKjcCcb4IWT0l2j5LcOEV9vhtzTNaNHGedJ2yyU46FBpjv9PTthlwU%2B50w2Wxx6tBzFWfKIUL3YyXlyHKoxzfsOsrOtyiBkeUgGJJBTGCEUOHeG9%2BuJfLSO7fSzohyhFcE4T%2FAXCeHkY5fjoHx4P%2FydUshIt%2BGVV%2FP7VtfQkYywFlcDijFE51%2Bob%2BCZgPxikzPAfnlajh3vKaIBm2JsGjYLUpcH%2FTmN%2FIj8WSsrb1ZC33oGohYFFjBbqcMjK8u3mVkXSe7YSuXfmi2gYK43ui7ThTmUJuUHeWfoMLb3M5OfX1ZM6G%2FNORkgVJSYWguZ2iJcLsCPuU0qWNkE5BZu%2Bwmd%2F%2ByVQ6UQZPcdkLLwJfIUBG%2BEqFY2RCcUBuga%2BG%2B970Rxudvh5LSQQnuuOWTC3LqmWYICsIJyeKuiU9aAnY8q7JvD9Z2ZJgAe2i0WFuIeo1kGmWE984q5RJgTCEfcbs8MP761r0GOqUBRPhfbf1n%2Bl%2Bx%2BrQe%2Btq5O%2BFixv8Hoab%2BRbYfkkujo4ja%2BloDcVPwJ3SQ8CeIx%2BBmFKMDhu7bbwj7LeF%2BJiZVdn026awtURLN%2Bqd1IhkHgVoul8eK0R%2BMuCSr%2FfzF6rx6G7PabnQ8pEGBl4JtZCIvVkPR7zsvQ5sT74gBqdU6%2Bsc%2F3sw7n7VxSZMaf9SYZvYZxF56BOhxlmqrfJ%2BoW4TCa48Fw2J8&X-Amz-Signature=77d0ba33dfec780841a227df4a4d6a9821aacfd9d5cf0bb78d981c24e8021cf6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NESBBO3%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGAwM9NUKPVn%2FdaLRNzR7J62uFkx5M4wDdUgh8l8PnZrAiEA3RsNHOUz2JbQYY1W55i7uFhFttkUwNtQaItLjq8Z%2FR8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP3OmAJbNY2hFYD7CrcAya1WJUty%2BQ47pWSENZnhFTj1FIDE0lGtQktOp9zkF6aPjn55canpONQHN3KsOT0q0GX5j%2F1tueSf2JHUM2E3T5i6KcbKjws2jMZkgPJ4MxTOllPsamgZ2FSNSBwJDj4N%2BzcBEBL8laJD3UtIb8pv0UkQVBxE%2BwiZFdiF7ZKjcCcb4IWT0l2j5LcOEV9vhtzTNaNHGedJ2yyU46FBpjv9PTthlwU%2B50w2Wxx6tBzFWfKIUL3YyXlyHKoxzfsOsrOtyiBkeUgGJJBTGCEUOHeG9%2BuJfLSO7fSzohyhFcE4T%2FAXCeHkY5fjoHx4P%2FydUshIt%2BGVV%2FP7VtfQkYywFlcDijFE51%2Bob%2BCZgPxikzPAfnlajh3vKaIBm2JsGjYLUpcH%2FTmN%2FIj8WSsrb1ZC33oGohYFFjBbqcMjK8u3mVkXSe7YSuXfmi2gYK43ui7ThTmUJuUHeWfoMLb3M5OfX1ZM6G%2FNORkgVJSYWguZ2iJcLsCPuU0qWNkE5BZu%2Bwmd%2F%2ByVQ6UQZPcdkLLwJfIUBG%2BEqFY2RCcUBuga%2BG%2B970Rxudvh5LSQQnuuOWTC3LqmWYICsIJyeKuiU9aAnY8q7JvD9Z2ZJgAe2i0WFuIeo1kGmWE984q5RJgTCEfcbs8MP761r0GOqUBRPhfbf1n%2Bl%2Bx%2BrQe%2Btq5O%2BFixv8Hoab%2BRbYfkkujo4ja%2BloDcVPwJ3SQ8CeIx%2BBmFKMDhu7bbwj7LeF%2BJiZVdn026awtURLN%2Bqd1IhkHgVoul8eK0R%2BMuCSr%2FfzF6rx6G7PabnQ8pEGBl4JtZCIvVkPR7zsvQ5sT74gBqdU6%2Bsc%2F3sw7n7VxSZMaf9SYZvYZxF56BOhxlmqrfJ%2BoW4TCa48Fw2J8&X-Amz-Signature=6205bf8b802989e6306784fcb6f4560c47db9d78def75dc2f7e92b840cfa6554&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NESBBO3%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGAwM9NUKPVn%2FdaLRNzR7J62uFkx5M4wDdUgh8l8PnZrAiEA3RsNHOUz2JbQYY1W55i7uFhFttkUwNtQaItLjq8Z%2FR8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP3OmAJbNY2hFYD7CrcAya1WJUty%2BQ47pWSENZnhFTj1FIDE0lGtQktOp9zkF6aPjn55canpONQHN3KsOT0q0GX5j%2F1tueSf2JHUM2E3T5i6KcbKjws2jMZkgPJ4MxTOllPsamgZ2FSNSBwJDj4N%2BzcBEBL8laJD3UtIb8pv0UkQVBxE%2BwiZFdiF7ZKjcCcb4IWT0l2j5LcOEV9vhtzTNaNHGedJ2yyU46FBpjv9PTthlwU%2B50w2Wxx6tBzFWfKIUL3YyXlyHKoxzfsOsrOtyiBkeUgGJJBTGCEUOHeG9%2BuJfLSO7fSzohyhFcE4T%2FAXCeHkY5fjoHx4P%2FydUshIt%2BGVV%2FP7VtfQkYywFlcDijFE51%2Bob%2BCZgPxikzPAfnlajh3vKaIBm2JsGjYLUpcH%2FTmN%2FIj8WSsrb1ZC33oGohYFFjBbqcMjK8u3mVkXSe7YSuXfmi2gYK43ui7ThTmUJuUHeWfoMLb3M5OfX1ZM6G%2FNORkgVJSYWguZ2iJcLsCPuU0qWNkE5BZu%2Bwmd%2F%2ByVQ6UQZPcdkLLwJfIUBG%2BEqFY2RCcUBuga%2BG%2B970Rxudvh5LSQQnuuOWTC3LqmWYICsIJyeKuiU9aAnY8q7JvD9Z2ZJgAe2i0WFuIeo1kGmWE984q5RJgTCEfcbs8MP761r0GOqUBRPhfbf1n%2Bl%2Bx%2BrQe%2Btq5O%2BFixv8Hoab%2BRbYfkkujo4ja%2BloDcVPwJ3SQ8CeIx%2BBmFKMDhu7bbwj7LeF%2BJiZVdn026awtURLN%2Bqd1IhkHgVoul8eK0R%2BMuCSr%2FfzF6rx6G7PabnQ8pEGBl4JtZCIvVkPR7zsvQ5sT74gBqdU6%2Bsc%2F3sw7n7VxSZMaf9SYZvYZxF56BOhxlmqrfJ%2BoW4TCa48Fw2J8&X-Amz-Signature=d7f54a11420d086b227c7ca9a1d009c1d17d2f2fd41192c257795613385286c7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NESBBO3%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGAwM9NUKPVn%2FdaLRNzR7J62uFkx5M4wDdUgh8l8PnZrAiEA3RsNHOUz2JbQYY1W55i7uFhFttkUwNtQaItLjq8Z%2FR8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP3OmAJbNY2hFYD7CrcAya1WJUty%2BQ47pWSENZnhFTj1FIDE0lGtQktOp9zkF6aPjn55canpONQHN3KsOT0q0GX5j%2F1tueSf2JHUM2E3T5i6KcbKjws2jMZkgPJ4MxTOllPsamgZ2FSNSBwJDj4N%2BzcBEBL8laJD3UtIb8pv0UkQVBxE%2BwiZFdiF7ZKjcCcb4IWT0l2j5LcOEV9vhtzTNaNHGedJ2yyU46FBpjv9PTthlwU%2B50w2Wxx6tBzFWfKIUL3YyXlyHKoxzfsOsrOtyiBkeUgGJJBTGCEUOHeG9%2BuJfLSO7fSzohyhFcE4T%2FAXCeHkY5fjoHx4P%2FydUshIt%2BGVV%2FP7VtfQkYywFlcDijFE51%2Bob%2BCZgPxikzPAfnlajh3vKaIBm2JsGjYLUpcH%2FTmN%2FIj8WSsrb1ZC33oGohYFFjBbqcMjK8u3mVkXSe7YSuXfmi2gYK43ui7ThTmUJuUHeWfoMLb3M5OfX1ZM6G%2FNORkgVJSYWguZ2iJcLsCPuU0qWNkE5BZu%2Bwmd%2F%2ByVQ6UQZPcdkLLwJfIUBG%2BEqFY2RCcUBuga%2BG%2B970Rxudvh5LSQQnuuOWTC3LqmWYICsIJyeKuiU9aAnY8q7JvD9Z2ZJgAe2i0WFuIeo1kGmWE984q5RJgTCEfcbs8MP761r0GOqUBRPhfbf1n%2Bl%2Bx%2BrQe%2Btq5O%2BFixv8Hoab%2BRbYfkkujo4ja%2BloDcVPwJ3SQ8CeIx%2BBmFKMDhu7bbwj7LeF%2BJiZVdn026awtURLN%2Bqd1IhkHgVoul8eK0R%2BMuCSr%2FfzF6rx6G7PabnQ8pEGBl4JtZCIvVkPR7zsvQ5sT74gBqdU6%2Bsc%2F3sw7n7VxSZMaf9SYZvYZxF56BOhxlmqrfJ%2BoW4TCa48Fw2J8&X-Amz-Signature=2f72cda772c3e99855556bd2dc53290ee72e5670c403fd49fd4c7817b53cc9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NESBBO3%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGAwM9NUKPVn%2FdaLRNzR7J62uFkx5M4wDdUgh8l8PnZrAiEA3RsNHOUz2JbQYY1W55i7uFhFttkUwNtQaItLjq8Z%2FR8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP3OmAJbNY2hFYD7CrcAya1WJUty%2BQ47pWSENZnhFTj1FIDE0lGtQktOp9zkF6aPjn55canpONQHN3KsOT0q0GX5j%2F1tueSf2JHUM2E3T5i6KcbKjws2jMZkgPJ4MxTOllPsamgZ2FSNSBwJDj4N%2BzcBEBL8laJD3UtIb8pv0UkQVBxE%2BwiZFdiF7ZKjcCcb4IWT0l2j5LcOEV9vhtzTNaNHGedJ2yyU46FBpjv9PTthlwU%2B50w2Wxx6tBzFWfKIUL3YyXlyHKoxzfsOsrOtyiBkeUgGJJBTGCEUOHeG9%2BuJfLSO7fSzohyhFcE4T%2FAXCeHkY5fjoHx4P%2FydUshIt%2BGVV%2FP7VtfQkYywFlcDijFE51%2Bob%2BCZgPxikzPAfnlajh3vKaIBm2JsGjYLUpcH%2FTmN%2FIj8WSsrb1ZC33oGohYFFjBbqcMjK8u3mVkXSe7YSuXfmi2gYK43ui7ThTmUJuUHeWfoMLb3M5OfX1ZM6G%2FNORkgVJSYWguZ2iJcLsCPuU0qWNkE5BZu%2Bwmd%2F%2ByVQ6UQZPcdkLLwJfIUBG%2BEqFY2RCcUBuga%2BG%2B970Rxudvh5LSQQnuuOWTC3LqmWYICsIJyeKuiU9aAnY8q7JvD9Z2ZJgAe2i0WFuIeo1kGmWE984q5RJgTCEfcbs8MP761r0GOqUBRPhfbf1n%2Bl%2Bx%2BrQe%2Btq5O%2BFixv8Hoab%2BRbYfkkujo4ja%2BloDcVPwJ3SQ8CeIx%2BBmFKMDhu7bbwj7LeF%2BJiZVdn026awtURLN%2Bqd1IhkHgVoul8eK0R%2BMuCSr%2FfzF6rx6G7PabnQ8pEGBl4JtZCIvVkPR7zsvQ5sT74gBqdU6%2Bsc%2F3sw7n7VxSZMaf9SYZvYZxF56BOhxlmqrfJ%2BoW4TCa48Fw2J8&X-Amz-Signature=3d0fc09f75f98a79f3e77ace1c07c3ac75467dd57bf1624078b83757abedeaf4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NESBBO3%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGAwM9NUKPVn%2FdaLRNzR7J62uFkx5M4wDdUgh8l8PnZrAiEA3RsNHOUz2JbQYY1W55i7uFhFttkUwNtQaItLjq8Z%2FR8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP3OmAJbNY2hFYD7CrcAya1WJUty%2BQ47pWSENZnhFTj1FIDE0lGtQktOp9zkF6aPjn55canpONQHN3KsOT0q0GX5j%2F1tueSf2JHUM2E3T5i6KcbKjws2jMZkgPJ4MxTOllPsamgZ2FSNSBwJDj4N%2BzcBEBL8laJD3UtIb8pv0UkQVBxE%2BwiZFdiF7ZKjcCcb4IWT0l2j5LcOEV9vhtzTNaNHGedJ2yyU46FBpjv9PTthlwU%2B50w2Wxx6tBzFWfKIUL3YyXlyHKoxzfsOsrOtyiBkeUgGJJBTGCEUOHeG9%2BuJfLSO7fSzohyhFcE4T%2FAXCeHkY5fjoHx4P%2FydUshIt%2BGVV%2FP7VtfQkYywFlcDijFE51%2Bob%2BCZgPxikzPAfnlajh3vKaIBm2JsGjYLUpcH%2FTmN%2FIj8WSsrb1ZC33oGohYFFjBbqcMjK8u3mVkXSe7YSuXfmi2gYK43ui7ThTmUJuUHeWfoMLb3M5OfX1ZM6G%2FNORkgVJSYWguZ2iJcLsCPuU0qWNkE5BZu%2Bwmd%2F%2ByVQ6UQZPcdkLLwJfIUBG%2BEqFY2RCcUBuga%2BG%2B970Rxudvh5LSQQnuuOWTC3LqmWYICsIJyeKuiU9aAnY8q7JvD9Z2ZJgAe2i0WFuIeo1kGmWE984q5RJgTCEfcbs8MP761r0GOqUBRPhfbf1n%2Bl%2Bx%2BrQe%2Btq5O%2BFixv8Hoab%2BRbYfkkujo4ja%2BloDcVPwJ3SQ8CeIx%2BBmFKMDhu7bbwj7LeF%2BJiZVdn026awtURLN%2Bqd1IhkHgVoul8eK0R%2BMuCSr%2FfzF6rx6G7PabnQ8pEGBl4JtZCIvVkPR7zsvQ5sT74gBqdU6%2Bsc%2F3sw7n7VxSZMaf9SYZvYZxF56BOhxlmqrfJ%2BoW4TCa48Fw2J8&X-Amz-Signature=96a898d5e4ab8885df410e985cc70e470ec641084e1607476be8c231704faef1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NESBBO3%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGAwM9NUKPVn%2FdaLRNzR7J62uFkx5M4wDdUgh8l8PnZrAiEA3RsNHOUz2JbQYY1W55i7uFhFttkUwNtQaItLjq8Z%2FR8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP3OmAJbNY2hFYD7CrcAya1WJUty%2BQ47pWSENZnhFTj1FIDE0lGtQktOp9zkF6aPjn55canpONQHN3KsOT0q0GX5j%2F1tueSf2JHUM2E3T5i6KcbKjws2jMZkgPJ4MxTOllPsamgZ2FSNSBwJDj4N%2BzcBEBL8laJD3UtIb8pv0UkQVBxE%2BwiZFdiF7ZKjcCcb4IWT0l2j5LcOEV9vhtzTNaNHGedJ2yyU46FBpjv9PTthlwU%2B50w2Wxx6tBzFWfKIUL3YyXlyHKoxzfsOsrOtyiBkeUgGJJBTGCEUOHeG9%2BuJfLSO7fSzohyhFcE4T%2FAXCeHkY5fjoHx4P%2FydUshIt%2BGVV%2FP7VtfQkYywFlcDijFE51%2Bob%2BCZgPxikzPAfnlajh3vKaIBm2JsGjYLUpcH%2FTmN%2FIj8WSsrb1ZC33oGohYFFjBbqcMjK8u3mVkXSe7YSuXfmi2gYK43ui7ThTmUJuUHeWfoMLb3M5OfX1ZM6G%2FNORkgVJSYWguZ2iJcLsCPuU0qWNkE5BZu%2Bwmd%2F%2ByVQ6UQZPcdkLLwJfIUBG%2BEqFY2RCcUBuga%2BG%2B970Rxudvh5LSQQnuuOWTC3LqmWYICsIJyeKuiU9aAnY8q7JvD9Z2ZJgAe2i0WFuIeo1kGmWE984q5RJgTCEfcbs8MP761r0GOqUBRPhfbf1n%2Bl%2Bx%2BrQe%2Btq5O%2BFixv8Hoab%2BRbYfkkujo4ja%2BloDcVPwJ3SQ8CeIx%2BBmFKMDhu7bbwj7LeF%2BJiZVdn026awtURLN%2Bqd1IhkHgVoul8eK0R%2BMuCSr%2FfzF6rx6G7PabnQ8pEGBl4JtZCIvVkPR7zsvQ5sT74gBqdU6%2Bsc%2F3sw7n7VxSZMaf9SYZvYZxF56BOhxlmqrfJ%2BoW4TCa48Fw2J8&X-Amz-Signature=3a6dfd67339591235be4eb9f1042599e94ef8c760804b7cdefdda8ce95b701a2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
