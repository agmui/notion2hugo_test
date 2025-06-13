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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOUNNE4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIACCUMoU3rNKyOjEdoiI4UfnPhAraCf4gOmnJzXYKWhhAiEAlVhN%2BkwteJvJf5rRIK5eURRpF65lBMS2%2FQqpOum%2F8p0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCosGPCYOXWnaLSozyrcA2e8rsOMJRXwWoMYG8KyVSjaoGFGOr8H57Gj5Tql%2BjAqK4i2SLFcE5qGij9dLHQYQLAhFPEAVR6YeoKJlpR3bjlzTAa75LU3O7xiYnAolfbfst0lfCAuk9x0%2FXUMZHWSt4sfPKQ6OGqVBXNfL78HYWlg1XjcjxQsT9ln4R2UV%2BI1knmBPkIYGi%2BDGvxRihG3NIdaT0UEZiaZNRXrUP0mXS%2BpSEeKr7kzRXf4RSZw2f1m%2BNRWHRnwmME3qVdk57ZrLIsbxRVG8HXErAmeI7iq4%2FFiLHigqgDG1t5QqsxrzqKO8LRjEBwV27HYts4oYrr%2B8vGH9HwaL%2FXCmnYi3RFQVCP0ryg6JJZ09FpK1b44nqjj6SSfdflnTwkaOxVGRBZiIHPBpcIaHHoYXTBaFDb7BADsUMYwm15nyFCwRJJL5GpMbRwDaZoaLtZUw2g9eGjAKfF6VI9Rq0eYlBdYodAXP%2F%2F59HRuTkSmwl7v0rzyivdyQazbD344IYRvpUZlWnb58ioR7tF6QD1D%2B1rbAO4oBC7%2B95crHAMC0OmtFuCG3vn0%2FTbnKXM0NeTzq%2BNa3jRSsC%2FUTY48IM1t3%2FRKYODbDpQrBTmCoUyY1y%2FiixuGiAh140a5OdqWHLvRoeO%2FMKu5rcIGOqUBC%2FSrxuS1i6HDtzuob876ENG7kHkWTF2g2NXze5M6t4ASzSGBQd4wn8q2eeZjD%2FXMpb1zHSEkItmlESxmLhdh%2FfGTw9NeWYwqA%2FAsKXbhXIlRC48i9RUCFFhErwdLqtTYNkq7rXzdCULQcS9h%2FlYIL%2Bn1FxQAmrJ3VpaVVytE3JpbNCo%2F6t%2BmJabKBDivIjZsMToVNNmDpIffgTIRzc9pKHCnGfOi&X-Amz-Signature=27f314450f796f9ddf940d0a203b2c675aeb67bce1eb1357fc8198287ab655d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOUNNE4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIACCUMoU3rNKyOjEdoiI4UfnPhAraCf4gOmnJzXYKWhhAiEAlVhN%2BkwteJvJf5rRIK5eURRpF65lBMS2%2FQqpOum%2F8p0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCosGPCYOXWnaLSozyrcA2e8rsOMJRXwWoMYG8KyVSjaoGFGOr8H57Gj5Tql%2BjAqK4i2SLFcE5qGij9dLHQYQLAhFPEAVR6YeoKJlpR3bjlzTAa75LU3O7xiYnAolfbfst0lfCAuk9x0%2FXUMZHWSt4sfPKQ6OGqVBXNfL78HYWlg1XjcjxQsT9ln4R2UV%2BI1knmBPkIYGi%2BDGvxRihG3NIdaT0UEZiaZNRXrUP0mXS%2BpSEeKr7kzRXf4RSZw2f1m%2BNRWHRnwmME3qVdk57ZrLIsbxRVG8HXErAmeI7iq4%2FFiLHigqgDG1t5QqsxrzqKO8LRjEBwV27HYts4oYrr%2B8vGH9HwaL%2FXCmnYi3RFQVCP0ryg6JJZ09FpK1b44nqjj6SSfdflnTwkaOxVGRBZiIHPBpcIaHHoYXTBaFDb7BADsUMYwm15nyFCwRJJL5GpMbRwDaZoaLtZUw2g9eGjAKfF6VI9Rq0eYlBdYodAXP%2F%2F59HRuTkSmwl7v0rzyivdyQazbD344IYRvpUZlWnb58ioR7tF6QD1D%2B1rbAO4oBC7%2B95crHAMC0OmtFuCG3vn0%2FTbnKXM0NeTzq%2BNa3jRSsC%2FUTY48IM1t3%2FRKYODbDpQrBTmCoUyY1y%2FiixuGiAh140a5OdqWHLvRoeO%2FMKu5rcIGOqUBC%2FSrxuS1i6HDtzuob876ENG7kHkWTF2g2NXze5M6t4ASzSGBQd4wn8q2eeZjD%2FXMpb1zHSEkItmlESxmLhdh%2FfGTw9NeWYwqA%2FAsKXbhXIlRC48i9RUCFFhErwdLqtTYNkq7rXzdCULQcS9h%2FlYIL%2Bn1FxQAmrJ3VpaVVytE3JpbNCo%2F6t%2BmJabKBDivIjZsMToVNNmDpIffgTIRzc9pKHCnGfOi&X-Amz-Signature=eccd32e4ef504eb42abce3cbd5dc65e94b24d1534aa2fbc18c749270e895fd75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOUNNE4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIACCUMoU3rNKyOjEdoiI4UfnPhAraCf4gOmnJzXYKWhhAiEAlVhN%2BkwteJvJf5rRIK5eURRpF65lBMS2%2FQqpOum%2F8p0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCosGPCYOXWnaLSozyrcA2e8rsOMJRXwWoMYG8KyVSjaoGFGOr8H57Gj5Tql%2BjAqK4i2SLFcE5qGij9dLHQYQLAhFPEAVR6YeoKJlpR3bjlzTAa75LU3O7xiYnAolfbfst0lfCAuk9x0%2FXUMZHWSt4sfPKQ6OGqVBXNfL78HYWlg1XjcjxQsT9ln4R2UV%2BI1knmBPkIYGi%2BDGvxRihG3NIdaT0UEZiaZNRXrUP0mXS%2BpSEeKr7kzRXf4RSZw2f1m%2BNRWHRnwmME3qVdk57ZrLIsbxRVG8HXErAmeI7iq4%2FFiLHigqgDG1t5QqsxrzqKO8LRjEBwV27HYts4oYrr%2B8vGH9HwaL%2FXCmnYi3RFQVCP0ryg6JJZ09FpK1b44nqjj6SSfdflnTwkaOxVGRBZiIHPBpcIaHHoYXTBaFDb7BADsUMYwm15nyFCwRJJL5GpMbRwDaZoaLtZUw2g9eGjAKfF6VI9Rq0eYlBdYodAXP%2F%2F59HRuTkSmwl7v0rzyivdyQazbD344IYRvpUZlWnb58ioR7tF6QD1D%2B1rbAO4oBC7%2B95crHAMC0OmtFuCG3vn0%2FTbnKXM0NeTzq%2BNa3jRSsC%2FUTY48IM1t3%2FRKYODbDpQrBTmCoUyY1y%2FiixuGiAh140a5OdqWHLvRoeO%2FMKu5rcIGOqUBC%2FSrxuS1i6HDtzuob876ENG7kHkWTF2g2NXze5M6t4ASzSGBQd4wn8q2eeZjD%2FXMpb1zHSEkItmlESxmLhdh%2FfGTw9NeWYwqA%2FAsKXbhXIlRC48i9RUCFFhErwdLqtTYNkq7rXzdCULQcS9h%2FlYIL%2Bn1FxQAmrJ3VpaVVytE3JpbNCo%2F6t%2BmJabKBDivIjZsMToVNNmDpIffgTIRzc9pKHCnGfOi&X-Amz-Signature=0e21df0fb2a7f66aa0c16122c4ab77eb9441d3e859462b007cc4521a2e4a0fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOUNNE4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIACCUMoU3rNKyOjEdoiI4UfnPhAraCf4gOmnJzXYKWhhAiEAlVhN%2BkwteJvJf5rRIK5eURRpF65lBMS2%2FQqpOum%2F8p0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCosGPCYOXWnaLSozyrcA2e8rsOMJRXwWoMYG8KyVSjaoGFGOr8H57Gj5Tql%2BjAqK4i2SLFcE5qGij9dLHQYQLAhFPEAVR6YeoKJlpR3bjlzTAa75LU3O7xiYnAolfbfst0lfCAuk9x0%2FXUMZHWSt4sfPKQ6OGqVBXNfL78HYWlg1XjcjxQsT9ln4R2UV%2BI1knmBPkIYGi%2BDGvxRihG3NIdaT0UEZiaZNRXrUP0mXS%2BpSEeKr7kzRXf4RSZw2f1m%2BNRWHRnwmME3qVdk57ZrLIsbxRVG8HXErAmeI7iq4%2FFiLHigqgDG1t5QqsxrzqKO8LRjEBwV27HYts4oYrr%2B8vGH9HwaL%2FXCmnYi3RFQVCP0ryg6JJZ09FpK1b44nqjj6SSfdflnTwkaOxVGRBZiIHPBpcIaHHoYXTBaFDb7BADsUMYwm15nyFCwRJJL5GpMbRwDaZoaLtZUw2g9eGjAKfF6VI9Rq0eYlBdYodAXP%2F%2F59HRuTkSmwl7v0rzyivdyQazbD344IYRvpUZlWnb58ioR7tF6QD1D%2B1rbAO4oBC7%2B95crHAMC0OmtFuCG3vn0%2FTbnKXM0NeTzq%2BNa3jRSsC%2FUTY48IM1t3%2FRKYODbDpQrBTmCoUyY1y%2FiixuGiAh140a5OdqWHLvRoeO%2FMKu5rcIGOqUBC%2FSrxuS1i6HDtzuob876ENG7kHkWTF2g2NXze5M6t4ASzSGBQd4wn8q2eeZjD%2FXMpb1zHSEkItmlESxmLhdh%2FfGTw9NeWYwqA%2FAsKXbhXIlRC48i9RUCFFhErwdLqtTYNkq7rXzdCULQcS9h%2FlYIL%2Bn1FxQAmrJ3VpaVVytE3JpbNCo%2F6t%2BmJabKBDivIjZsMToVNNmDpIffgTIRzc9pKHCnGfOi&X-Amz-Signature=d22325cbd01d275345afeb23ba51cdd3aaf543c77ab19d294f0fe53f2df2952a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOUNNE4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIACCUMoU3rNKyOjEdoiI4UfnPhAraCf4gOmnJzXYKWhhAiEAlVhN%2BkwteJvJf5rRIK5eURRpF65lBMS2%2FQqpOum%2F8p0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCosGPCYOXWnaLSozyrcA2e8rsOMJRXwWoMYG8KyVSjaoGFGOr8H57Gj5Tql%2BjAqK4i2SLFcE5qGij9dLHQYQLAhFPEAVR6YeoKJlpR3bjlzTAa75LU3O7xiYnAolfbfst0lfCAuk9x0%2FXUMZHWSt4sfPKQ6OGqVBXNfL78HYWlg1XjcjxQsT9ln4R2UV%2BI1knmBPkIYGi%2BDGvxRihG3NIdaT0UEZiaZNRXrUP0mXS%2BpSEeKr7kzRXf4RSZw2f1m%2BNRWHRnwmME3qVdk57ZrLIsbxRVG8HXErAmeI7iq4%2FFiLHigqgDG1t5QqsxrzqKO8LRjEBwV27HYts4oYrr%2B8vGH9HwaL%2FXCmnYi3RFQVCP0ryg6JJZ09FpK1b44nqjj6SSfdflnTwkaOxVGRBZiIHPBpcIaHHoYXTBaFDb7BADsUMYwm15nyFCwRJJL5GpMbRwDaZoaLtZUw2g9eGjAKfF6VI9Rq0eYlBdYodAXP%2F%2F59HRuTkSmwl7v0rzyivdyQazbD344IYRvpUZlWnb58ioR7tF6QD1D%2B1rbAO4oBC7%2B95crHAMC0OmtFuCG3vn0%2FTbnKXM0NeTzq%2BNa3jRSsC%2FUTY48IM1t3%2FRKYODbDpQrBTmCoUyY1y%2FiixuGiAh140a5OdqWHLvRoeO%2FMKu5rcIGOqUBC%2FSrxuS1i6HDtzuob876ENG7kHkWTF2g2NXze5M6t4ASzSGBQd4wn8q2eeZjD%2FXMpb1zHSEkItmlESxmLhdh%2FfGTw9NeWYwqA%2FAsKXbhXIlRC48i9RUCFFhErwdLqtTYNkq7rXzdCULQcS9h%2FlYIL%2Bn1FxQAmrJ3VpaVVytE3JpbNCo%2F6t%2BmJabKBDivIjZsMToVNNmDpIffgTIRzc9pKHCnGfOi&X-Amz-Signature=1c2248d04aba82cf2f33369a2803aba5d58efa99317f5e60dcfb3e4d0d161e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOUNNE4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIACCUMoU3rNKyOjEdoiI4UfnPhAraCf4gOmnJzXYKWhhAiEAlVhN%2BkwteJvJf5rRIK5eURRpF65lBMS2%2FQqpOum%2F8p0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCosGPCYOXWnaLSozyrcA2e8rsOMJRXwWoMYG8KyVSjaoGFGOr8H57Gj5Tql%2BjAqK4i2SLFcE5qGij9dLHQYQLAhFPEAVR6YeoKJlpR3bjlzTAa75LU3O7xiYnAolfbfst0lfCAuk9x0%2FXUMZHWSt4sfPKQ6OGqVBXNfL78HYWlg1XjcjxQsT9ln4R2UV%2BI1knmBPkIYGi%2BDGvxRihG3NIdaT0UEZiaZNRXrUP0mXS%2BpSEeKr7kzRXf4RSZw2f1m%2BNRWHRnwmME3qVdk57ZrLIsbxRVG8HXErAmeI7iq4%2FFiLHigqgDG1t5QqsxrzqKO8LRjEBwV27HYts4oYrr%2B8vGH9HwaL%2FXCmnYi3RFQVCP0ryg6JJZ09FpK1b44nqjj6SSfdflnTwkaOxVGRBZiIHPBpcIaHHoYXTBaFDb7BADsUMYwm15nyFCwRJJL5GpMbRwDaZoaLtZUw2g9eGjAKfF6VI9Rq0eYlBdYodAXP%2F%2F59HRuTkSmwl7v0rzyivdyQazbD344IYRvpUZlWnb58ioR7tF6QD1D%2B1rbAO4oBC7%2B95crHAMC0OmtFuCG3vn0%2FTbnKXM0NeTzq%2BNa3jRSsC%2FUTY48IM1t3%2FRKYODbDpQrBTmCoUyY1y%2FiixuGiAh140a5OdqWHLvRoeO%2FMKu5rcIGOqUBC%2FSrxuS1i6HDtzuob876ENG7kHkWTF2g2NXze5M6t4ASzSGBQd4wn8q2eeZjD%2FXMpb1zHSEkItmlESxmLhdh%2FfGTw9NeWYwqA%2FAsKXbhXIlRC48i9RUCFFhErwdLqtTYNkq7rXzdCULQcS9h%2FlYIL%2Bn1FxQAmrJ3VpaVVytE3JpbNCo%2F6t%2BmJabKBDivIjZsMToVNNmDpIffgTIRzc9pKHCnGfOi&X-Amz-Signature=5783a18eca437cae550be22059b65194d1fc8667d7e9d982d35a4c183863094d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOUNNE4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIACCUMoU3rNKyOjEdoiI4UfnPhAraCf4gOmnJzXYKWhhAiEAlVhN%2BkwteJvJf5rRIK5eURRpF65lBMS2%2FQqpOum%2F8p0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCosGPCYOXWnaLSozyrcA2e8rsOMJRXwWoMYG8KyVSjaoGFGOr8H57Gj5Tql%2BjAqK4i2SLFcE5qGij9dLHQYQLAhFPEAVR6YeoKJlpR3bjlzTAa75LU3O7xiYnAolfbfst0lfCAuk9x0%2FXUMZHWSt4sfPKQ6OGqVBXNfL78HYWlg1XjcjxQsT9ln4R2UV%2BI1knmBPkIYGi%2BDGvxRihG3NIdaT0UEZiaZNRXrUP0mXS%2BpSEeKr7kzRXf4RSZw2f1m%2BNRWHRnwmME3qVdk57ZrLIsbxRVG8HXErAmeI7iq4%2FFiLHigqgDG1t5QqsxrzqKO8LRjEBwV27HYts4oYrr%2B8vGH9HwaL%2FXCmnYi3RFQVCP0ryg6JJZ09FpK1b44nqjj6SSfdflnTwkaOxVGRBZiIHPBpcIaHHoYXTBaFDb7BADsUMYwm15nyFCwRJJL5GpMbRwDaZoaLtZUw2g9eGjAKfF6VI9Rq0eYlBdYodAXP%2F%2F59HRuTkSmwl7v0rzyivdyQazbD344IYRvpUZlWnb58ioR7tF6QD1D%2B1rbAO4oBC7%2B95crHAMC0OmtFuCG3vn0%2FTbnKXM0NeTzq%2BNa3jRSsC%2FUTY48IM1t3%2FRKYODbDpQrBTmCoUyY1y%2FiixuGiAh140a5OdqWHLvRoeO%2FMKu5rcIGOqUBC%2FSrxuS1i6HDtzuob876ENG7kHkWTF2g2NXze5M6t4ASzSGBQd4wn8q2eeZjD%2FXMpb1zHSEkItmlESxmLhdh%2FfGTw9NeWYwqA%2FAsKXbhXIlRC48i9RUCFFhErwdLqtTYNkq7rXzdCULQcS9h%2FlYIL%2Bn1FxQAmrJ3VpaVVytE3JpbNCo%2F6t%2BmJabKBDivIjZsMToVNNmDpIffgTIRzc9pKHCnGfOi&X-Amz-Signature=504ae9310f5a70aa20159bfab23cd264c129d02cc5b9762383e8b1bb72a3e1b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
