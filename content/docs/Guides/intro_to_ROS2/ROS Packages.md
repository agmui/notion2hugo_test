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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5UEIDGV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGkrwFnruMpIdYsbnXr%2FKQKccHgxNbdHD%2Bgla5ZnPl6OAiEAjaz5ZrNxv93WpVIMZC%2B9VqiruF%2F6z50OJcRt%2BO8fO2EqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDRvy%2FsqGkif310vCrcA7jOJOeeO147I%2FfZSG8qD1fhQGWAJFKMJ7gqzpAGGtc05TP4b9p8usg2oplEzUHmE8MwP16FinTMeLgsUwTik0rbHak1hkGt7WVFgpIMC1binLOTHLrvkeriZt2V6Lp%2F84b4tQAgKGLzlA3yjXMg1UPQgubM4lcm6hJxFsFg3qScRSNGQ7v1KFJmFrM25iPIXPWpUtNzNaEuoIAykXaqDJQm1s5HguOwQaHakyUudylnEyoLwHnfQbaFh6gZ%2FC5M3yu5NTYU8S8UEYzbbO5zIUMLgehisCbx%2B3Pca4Uyu7wXqXTjKDhal1GihXTkIJlH7%2BLkn6ujP33%2FQkYiPhp4XQmE6XqnndV9MzofqPWlH3enxBrb442ECiMR25Mv%2BrTPwagr1p4pEuB6HgbDt%2BC1BjVMO0A4xBYGgzgAluSi9Q698s4kzsf7IeapEkaf%2BzVwc95g2ZoNwkqjjIZVy0CALllJYfu67n0oyCnZaiigFg6oBpwfFOmwvl%2BC5oJ4GRblDBWhjnCMf1XlP8WA1MMJ6XGSK06wGMH511zUQlhiK6D%2FmpPIzf9dQx8mhTE%2F%2FW1uonrWA%2FSVNYTQzpfoLrYSgoKnlJeDCULdP%2BfRopHe4luTVG%2FPDNGKul2LWDvUMIrl08AGOqUBBzLxfd%2B8%2F8qb349txXqJhwFQMJtHIKAne%2FP3kCvpSd5IHcLDSoP7sjx68keak4JwNEGNHnI2wF1LQQQPlo3dnQ3po8hZrI61%2BOu9%2BMWwgLyzpk6weG7b9nYvkJC1qGhTiqOv0lpL%2FHqus3FzqE9lQd8StL7jC7M8XJlIJtF54mCv7Yw7kWQM7SNzB1QPnSDzcY5AfYuV%2F5eM9owcJmNZX0HepNmI&X-Amz-Signature=99c2e2de748c3f7ee1f6cf29dc9aa381eae0f64cab0559730eb195d2880403fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5UEIDGV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGkrwFnruMpIdYsbnXr%2FKQKccHgxNbdHD%2Bgla5ZnPl6OAiEAjaz5ZrNxv93WpVIMZC%2B9VqiruF%2F6z50OJcRt%2BO8fO2EqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDRvy%2FsqGkif310vCrcA7jOJOeeO147I%2FfZSG8qD1fhQGWAJFKMJ7gqzpAGGtc05TP4b9p8usg2oplEzUHmE8MwP16FinTMeLgsUwTik0rbHak1hkGt7WVFgpIMC1binLOTHLrvkeriZt2V6Lp%2F84b4tQAgKGLzlA3yjXMg1UPQgubM4lcm6hJxFsFg3qScRSNGQ7v1KFJmFrM25iPIXPWpUtNzNaEuoIAykXaqDJQm1s5HguOwQaHakyUudylnEyoLwHnfQbaFh6gZ%2FC5M3yu5NTYU8S8UEYzbbO5zIUMLgehisCbx%2B3Pca4Uyu7wXqXTjKDhal1GihXTkIJlH7%2BLkn6ujP33%2FQkYiPhp4XQmE6XqnndV9MzofqPWlH3enxBrb442ECiMR25Mv%2BrTPwagr1p4pEuB6HgbDt%2BC1BjVMO0A4xBYGgzgAluSi9Q698s4kzsf7IeapEkaf%2BzVwc95g2ZoNwkqjjIZVy0CALllJYfu67n0oyCnZaiigFg6oBpwfFOmwvl%2BC5oJ4GRblDBWhjnCMf1XlP8WA1MMJ6XGSK06wGMH511zUQlhiK6D%2FmpPIzf9dQx8mhTE%2F%2FW1uonrWA%2FSVNYTQzpfoLrYSgoKnlJeDCULdP%2BfRopHe4luTVG%2FPDNGKul2LWDvUMIrl08AGOqUBBzLxfd%2B8%2F8qb349txXqJhwFQMJtHIKAne%2FP3kCvpSd5IHcLDSoP7sjx68keak4JwNEGNHnI2wF1LQQQPlo3dnQ3po8hZrI61%2BOu9%2BMWwgLyzpk6weG7b9nYvkJC1qGhTiqOv0lpL%2FHqus3FzqE9lQd8StL7jC7M8XJlIJtF54mCv7Yw7kWQM7SNzB1QPnSDzcY5AfYuV%2F5eM9owcJmNZX0HepNmI&X-Amz-Signature=ac982bfb2fed10445f03426fdd0c6dbce1dd4ca6723b70b358ea5ac616952556&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5UEIDGV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGkrwFnruMpIdYsbnXr%2FKQKccHgxNbdHD%2Bgla5ZnPl6OAiEAjaz5ZrNxv93WpVIMZC%2B9VqiruF%2F6z50OJcRt%2BO8fO2EqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDRvy%2FsqGkif310vCrcA7jOJOeeO147I%2FfZSG8qD1fhQGWAJFKMJ7gqzpAGGtc05TP4b9p8usg2oplEzUHmE8MwP16FinTMeLgsUwTik0rbHak1hkGt7WVFgpIMC1binLOTHLrvkeriZt2V6Lp%2F84b4tQAgKGLzlA3yjXMg1UPQgubM4lcm6hJxFsFg3qScRSNGQ7v1KFJmFrM25iPIXPWpUtNzNaEuoIAykXaqDJQm1s5HguOwQaHakyUudylnEyoLwHnfQbaFh6gZ%2FC5M3yu5NTYU8S8UEYzbbO5zIUMLgehisCbx%2B3Pca4Uyu7wXqXTjKDhal1GihXTkIJlH7%2BLkn6ujP33%2FQkYiPhp4XQmE6XqnndV9MzofqPWlH3enxBrb442ECiMR25Mv%2BrTPwagr1p4pEuB6HgbDt%2BC1BjVMO0A4xBYGgzgAluSi9Q698s4kzsf7IeapEkaf%2BzVwc95g2ZoNwkqjjIZVy0CALllJYfu67n0oyCnZaiigFg6oBpwfFOmwvl%2BC5oJ4GRblDBWhjnCMf1XlP8WA1MMJ6XGSK06wGMH511zUQlhiK6D%2FmpPIzf9dQx8mhTE%2F%2FW1uonrWA%2FSVNYTQzpfoLrYSgoKnlJeDCULdP%2BfRopHe4luTVG%2FPDNGKul2LWDvUMIrl08AGOqUBBzLxfd%2B8%2F8qb349txXqJhwFQMJtHIKAne%2FP3kCvpSd5IHcLDSoP7sjx68keak4JwNEGNHnI2wF1LQQQPlo3dnQ3po8hZrI61%2BOu9%2BMWwgLyzpk6weG7b9nYvkJC1qGhTiqOv0lpL%2FHqus3FzqE9lQd8StL7jC7M8XJlIJtF54mCv7Yw7kWQM7SNzB1QPnSDzcY5AfYuV%2F5eM9owcJmNZX0HepNmI&X-Amz-Signature=54e09cf919aa5c0ad51a9a5eeb461c8067a30f79de7fcd92319faeacc2b121e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5UEIDGV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGkrwFnruMpIdYsbnXr%2FKQKccHgxNbdHD%2Bgla5ZnPl6OAiEAjaz5ZrNxv93WpVIMZC%2B9VqiruF%2F6z50OJcRt%2BO8fO2EqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDRvy%2FsqGkif310vCrcA7jOJOeeO147I%2FfZSG8qD1fhQGWAJFKMJ7gqzpAGGtc05TP4b9p8usg2oplEzUHmE8MwP16FinTMeLgsUwTik0rbHak1hkGt7WVFgpIMC1binLOTHLrvkeriZt2V6Lp%2F84b4tQAgKGLzlA3yjXMg1UPQgubM4lcm6hJxFsFg3qScRSNGQ7v1KFJmFrM25iPIXPWpUtNzNaEuoIAykXaqDJQm1s5HguOwQaHakyUudylnEyoLwHnfQbaFh6gZ%2FC5M3yu5NTYU8S8UEYzbbO5zIUMLgehisCbx%2B3Pca4Uyu7wXqXTjKDhal1GihXTkIJlH7%2BLkn6ujP33%2FQkYiPhp4XQmE6XqnndV9MzofqPWlH3enxBrb442ECiMR25Mv%2BrTPwagr1p4pEuB6HgbDt%2BC1BjVMO0A4xBYGgzgAluSi9Q698s4kzsf7IeapEkaf%2BzVwc95g2ZoNwkqjjIZVy0CALllJYfu67n0oyCnZaiigFg6oBpwfFOmwvl%2BC5oJ4GRblDBWhjnCMf1XlP8WA1MMJ6XGSK06wGMH511zUQlhiK6D%2FmpPIzf9dQx8mhTE%2F%2FW1uonrWA%2FSVNYTQzpfoLrYSgoKnlJeDCULdP%2BfRopHe4luTVG%2FPDNGKul2LWDvUMIrl08AGOqUBBzLxfd%2B8%2F8qb349txXqJhwFQMJtHIKAne%2FP3kCvpSd5IHcLDSoP7sjx68keak4JwNEGNHnI2wF1LQQQPlo3dnQ3po8hZrI61%2BOu9%2BMWwgLyzpk6weG7b9nYvkJC1qGhTiqOv0lpL%2FHqus3FzqE9lQd8StL7jC7M8XJlIJtF54mCv7Yw7kWQM7SNzB1QPnSDzcY5AfYuV%2F5eM9owcJmNZX0HepNmI&X-Amz-Signature=d4af97c0b30000400e8a87733ebd9e244257b1481147f52c9f8569b9613f448d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5UEIDGV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGkrwFnruMpIdYsbnXr%2FKQKccHgxNbdHD%2Bgla5ZnPl6OAiEAjaz5ZrNxv93WpVIMZC%2B9VqiruF%2F6z50OJcRt%2BO8fO2EqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDRvy%2FsqGkif310vCrcA7jOJOeeO147I%2FfZSG8qD1fhQGWAJFKMJ7gqzpAGGtc05TP4b9p8usg2oplEzUHmE8MwP16FinTMeLgsUwTik0rbHak1hkGt7WVFgpIMC1binLOTHLrvkeriZt2V6Lp%2F84b4tQAgKGLzlA3yjXMg1UPQgubM4lcm6hJxFsFg3qScRSNGQ7v1KFJmFrM25iPIXPWpUtNzNaEuoIAykXaqDJQm1s5HguOwQaHakyUudylnEyoLwHnfQbaFh6gZ%2FC5M3yu5NTYU8S8UEYzbbO5zIUMLgehisCbx%2B3Pca4Uyu7wXqXTjKDhal1GihXTkIJlH7%2BLkn6ujP33%2FQkYiPhp4XQmE6XqnndV9MzofqPWlH3enxBrb442ECiMR25Mv%2BrTPwagr1p4pEuB6HgbDt%2BC1BjVMO0A4xBYGgzgAluSi9Q698s4kzsf7IeapEkaf%2BzVwc95g2ZoNwkqjjIZVy0CALllJYfu67n0oyCnZaiigFg6oBpwfFOmwvl%2BC5oJ4GRblDBWhjnCMf1XlP8WA1MMJ6XGSK06wGMH511zUQlhiK6D%2FmpPIzf9dQx8mhTE%2F%2FW1uonrWA%2FSVNYTQzpfoLrYSgoKnlJeDCULdP%2BfRopHe4luTVG%2FPDNGKul2LWDvUMIrl08AGOqUBBzLxfd%2B8%2F8qb349txXqJhwFQMJtHIKAne%2FP3kCvpSd5IHcLDSoP7sjx68keak4JwNEGNHnI2wF1LQQQPlo3dnQ3po8hZrI61%2BOu9%2BMWwgLyzpk6weG7b9nYvkJC1qGhTiqOv0lpL%2FHqus3FzqE9lQd8StL7jC7M8XJlIJtF54mCv7Yw7kWQM7SNzB1QPnSDzcY5AfYuV%2F5eM9owcJmNZX0HepNmI&X-Amz-Signature=78ffe0e13003573dc5246d2ec897c8e8d8ec20056c114f4e782d7e9775417ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5UEIDGV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGkrwFnruMpIdYsbnXr%2FKQKccHgxNbdHD%2Bgla5ZnPl6OAiEAjaz5ZrNxv93WpVIMZC%2B9VqiruF%2F6z50OJcRt%2BO8fO2EqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDRvy%2FsqGkif310vCrcA7jOJOeeO147I%2FfZSG8qD1fhQGWAJFKMJ7gqzpAGGtc05TP4b9p8usg2oplEzUHmE8MwP16FinTMeLgsUwTik0rbHak1hkGt7WVFgpIMC1binLOTHLrvkeriZt2V6Lp%2F84b4tQAgKGLzlA3yjXMg1UPQgubM4lcm6hJxFsFg3qScRSNGQ7v1KFJmFrM25iPIXPWpUtNzNaEuoIAykXaqDJQm1s5HguOwQaHakyUudylnEyoLwHnfQbaFh6gZ%2FC5M3yu5NTYU8S8UEYzbbO5zIUMLgehisCbx%2B3Pca4Uyu7wXqXTjKDhal1GihXTkIJlH7%2BLkn6ujP33%2FQkYiPhp4XQmE6XqnndV9MzofqPWlH3enxBrb442ECiMR25Mv%2BrTPwagr1p4pEuB6HgbDt%2BC1BjVMO0A4xBYGgzgAluSi9Q698s4kzsf7IeapEkaf%2BzVwc95g2ZoNwkqjjIZVy0CALllJYfu67n0oyCnZaiigFg6oBpwfFOmwvl%2BC5oJ4GRblDBWhjnCMf1XlP8WA1MMJ6XGSK06wGMH511zUQlhiK6D%2FmpPIzf9dQx8mhTE%2F%2FW1uonrWA%2FSVNYTQzpfoLrYSgoKnlJeDCULdP%2BfRopHe4luTVG%2FPDNGKul2LWDvUMIrl08AGOqUBBzLxfd%2B8%2F8qb349txXqJhwFQMJtHIKAne%2FP3kCvpSd5IHcLDSoP7sjx68keak4JwNEGNHnI2wF1LQQQPlo3dnQ3po8hZrI61%2BOu9%2BMWwgLyzpk6weG7b9nYvkJC1qGhTiqOv0lpL%2FHqus3FzqE9lQd8StL7jC7M8XJlIJtF54mCv7Yw7kWQM7SNzB1QPnSDzcY5AfYuV%2F5eM9owcJmNZX0HepNmI&X-Amz-Signature=81145709237f62f7c85ad7871581e24de303d81be847df29384926cc0762afc5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5UEIDGV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGkrwFnruMpIdYsbnXr%2FKQKccHgxNbdHD%2Bgla5ZnPl6OAiEAjaz5ZrNxv93WpVIMZC%2B9VqiruF%2F6z50OJcRt%2BO8fO2EqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDRvy%2FsqGkif310vCrcA7jOJOeeO147I%2FfZSG8qD1fhQGWAJFKMJ7gqzpAGGtc05TP4b9p8usg2oplEzUHmE8MwP16FinTMeLgsUwTik0rbHak1hkGt7WVFgpIMC1binLOTHLrvkeriZt2V6Lp%2F84b4tQAgKGLzlA3yjXMg1UPQgubM4lcm6hJxFsFg3qScRSNGQ7v1KFJmFrM25iPIXPWpUtNzNaEuoIAykXaqDJQm1s5HguOwQaHakyUudylnEyoLwHnfQbaFh6gZ%2FC5M3yu5NTYU8S8UEYzbbO5zIUMLgehisCbx%2B3Pca4Uyu7wXqXTjKDhal1GihXTkIJlH7%2BLkn6ujP33%2FQkYiPhp4XQmE6XqnndV9MzofqPWlH3enxBrb442ECiMR25Mv%2BrTPwagr1p4pEuB6HgbDt%2BC1BjVMO0A4xBYGgzgAluSi9Q698s4kzsf7IeapEkaf%2BzVwc95g2ZoNwkqjjIZVy0CALllJYfu67n0oyCnZaiigFg6oBpwfFOmwvl%2BC5oJ4GRblDBWhjnCMf1XlP8WA1MMJ6XGSK06wGMH511zUQlhiK6D%2FmpPIzf9dQx8mhTE%2F%2FW1uonrWA%2FSVNYTQzpfoLrYSgoKnlJeDCULdP%2BfRopHe4luTVG%2FPDNGKul2LWDvUMIrl08AGOqUBBzLxfd%2B8%2F8qb349txXqJhwFQMJtHIKAne%2FP3kCvpSd5IHcLDSoP7sjx68keak4JwNEGNHnI2wF1LQQQPlo3dnQ3po8hZrI61%2BOu9%2BMWwgLyzpk6weG7b9nYvkJC1qGhTiqOv0lpL%2FHqus3FzqE9lQd8StL7jC7M8XJlIJtF54mCv7Yw7kWQM7SNzB1QPnSDzcY5AfYuV%2F5eM9owcJmNZX0HepNmI&X-Amz-Signature=4ae6cb7df7287e3f90b2589c48b514a8d33a260657daa07c0a2c097a1aa9ae56&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
