---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPYCI3M5%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFfkP8C%2FkQbww8ZosQiEYzzRT9SGdymMeOeFEONmIUTHAiEA1osua67WlJ%2FaLwB5vJQ67L9Nujr3l%2BlezvWs%2Fb3gld4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLLiUxDpYqSta%2FZhSrcA97GDnbeXOz373y57sU0tM9sLLa8VJacX%2BY9mHJijqn%2FTXACiA6IfN9CsjtHYrQARuZuPw2g53eTWx0i64%2B8b8LMuqrcxfejpTmX4xSCchpw%2BnWH5Rg1LDziYLf8K7mklLU0ZnKga4qgD6DqBP1DVGHhuwL7LJzsjjYV1qgllqOEGotZv%2F0rQHeaJoaivmlZVV9zdG3U3aZ%2BZaWPc2Pujo2n1kUiUUjXRZ6c3Zb4SMSK3S3%2BxBjNketv2DyEkC6%2B2ARd48j4k%2BJiLrGWcv06H%2FPMFJhD3e%2FNLI8Gj%2BnLc0SfAmYe8XeQuysxaypk88HIUhxMjzRoFOuXcrfBAAsEWZkUCknHgM9OW8gPWRzzqXLwBGGxriGkYVponu%2FW3mpjIRkGm866Sb0zxkHFaxmAI7mzqQTlJYoctkpEmq%2FW6ehII5n%2BkkHDKlRIhyVsD8AGFqjsHFb%2FLm1AlhnfjXMp%2Fm73RDEoO1YF4P5d9BN1MikFh2PeCDulgmYlec%2F%2Fh8kKG3kXfz55HEn2DqEA9VoSPUJwnpKsvuLYq9eVNrfuI5JeQ7JsmOuS7%2FswtsL1Kcron%2BmDQskDajcX4Ch%2BI%2BkXFYxD28mOxMcqj8Cyx2EUFKHtlsKHy2AcwFu2OqnxMLvJkccGOqUBFByIf3%2FAgsvzYYOAWR2yLAmVhnKPkQc2XKi7f2SKQwxP3aZ2VqiBy7rqKqAoyT7oPx%2B8u9Uo8DIAKtsiWiaWpIJ6xwIG%2BSde4LXHBixrwkMYwFNKxt2%2BorzUsUjXmCoYJb5Z6Da9ZlV1V29%2Bc5OcmIQdN1AbmQuiGgwQ2heFihByQ7zXDnyOchHkZJ7EiZAqU725%2FTPMAeUjF9qCHmyu1oZGrALn&X-Amz-Signature=081fa96493a8d003f2b3a023eb2f55840df2f69d0df3228f5b3c2979d5d94411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPYCI3M5%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFfkP8C%2FkQbww8ZosQiEYzzRT9SGdymMeOeFEONmIUTHAiEA1osua67WlJ%2FaLwB5vJQ67L9Nujr3l%2BlezvWs%2Fb3gld4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLLiUxDpYqSta%2FZhSrcA97GDnbeXOz373y57sU0tM9sLLa8VJacX%2BY9mHJijqn%2FTXACiA6IfN9CsjtHYrQARuZuPw2g53eTWx0i64%2B8b8LMuqrcxfejpTmX4xSCchpw%2BnWH5Rg1LDziYLf8K7mklLU0ZnKga4qgD6DqBP1DVGHhuwL7LJzsjjYV1qgllqOEGotZv%2F0rQHeaJoaivmlZVV9zdG3U3aZ%2BZaWPc2Pujo2n1kUiUUjXRZ6c3Zb4SMSK3S3%2BxBjNketv2DyEkC6%2B2ARd48j4k%2BJiLrGWcv06H%2FPMFJhD3e%2FNLI8Gj%2BnLc0SfAmYe8XeQuysxaypk88HIUhxMjzRoFOuXcrfBAAsEWZkUCknHgM9OW8gPWRzzqXLwBGGxriGkYVponu%2FW3mpjIRkGm866Sb0zxkHFaxmAI7mzqQTlJYoctkpEmq%2FW6ehII5n%2BkkHDKlRIhyVsD8AGFqjsHFb%2FLm1AlhnfjXMp%2Fm73RDEoO1YF4P5d9BN1MikFh2PeCDulgmYlec%2F%2Fh8kKG3kXfz55HEn2DqEA9VoSPUJwnpKsvuLYq9eVNrfuI5JeQ7JsmOuS7%2FswtsL1Kcron%2BmDQskDajcX4Ch%2BI%2BkXFYxD28mOxMcqj8Cyx2EUFKHtlsKHy2AcwFu2OqnxMLvJkccGOqUBFByIf3%2FAgsvzYYOAWR2yLAmVhnKPkQc2XKi7f2SKQwxP3aZ2VqiBy7rqKqAoyT7oPx%2B8u9Uo8DIAKtsiWiaWpIJ6xwIG%2BSde4LXHBixrwkMYwFNKxt2%2BorzUsUjXmCoYJb5Z6Da9ZlV1V29%2Bc5OcmIQdN1AbmQuiGgwQ2heFihByQ7zXDnyOchHkZJ7EiZAqU725%2FTPMAeUjF9qCHmyu1oZGrALn&X-Amz-Signature=4427d0c911eede8f4f8a1292d2289ac8a53f22bbb5cf19f1e6c3cf09ddb1384b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPYCI3M5%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFfkP8C%2FkQbww8ZosQiEYzzRT9SGdymMeOeFEONmIUTHAiEA1osua67WlJ%2FaLwB5vJQ67L9Nujr3l%2BlezvWs%2Fb3gld4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLLiUxDpYqSta%2FZhSrcA97GDnbeXOz373y57sU0tM9sLLa8VJacX%2BY9mHJijqn%2FTXACiA6IfN9CsjtHYrQARuZuPw2g53eTWx0i64%2B8b8LMuqrcxfejpTmX4xSCchpw%2BnWH5Rg1LDziYLf8K7mklLU0ZnKga4qgD6DqBP1DVGHhuwL7LJzsjjYV1qgllqOEGotZv%2F0rQHeaJoaivmlZVV9zdG3U3aZ%2BZaWPc2Pujo2n1kUiUUjXRZ6c3Zb4SMSK3S3%2BxBjNketv2DyEkC6%2B2ARd48j4k%2BJiLrGWcv06H%2FPMFJhD3e%2FNLI8Gj%2BnLc0SfAmYe8XeQuysxaypk88HIUhxMjzRoFOuXcrfBAAsEWZkUCknHgM9OW8gPWRzzqXLwBGGxriGkYVponu%2FW3mpjIRkGm866Sb0zxkHFaxmAI7mzqQTlJYoctkpEmq%2FW6ehII5n%2BkkHDKlRIhyVsD8AGFqjsHFb%2FLm1AlhnfjXMp%2Fm73RDEoO1YF4P5d9BN1MikFh2PeCDulgmYlec%2F%2Fh8kKG3kXfz55HEn2DqEA9VoSPUJwnpKsvuLYq9eVNrfuI5JeQ7JsmOuS7%2FswtsL1Kcron%2BmDQskDajcX4Ch%2BI%2BkXFYxD28mOxMcqj8Cyx2EUFKHtlsKHy2AcwFu2OqnxMLvJkccGOqUBFByIf3%2FAgsvzYYOAWR2yLAmVhnKPkQc2XKi7f2SKQwxP3aZ2VqiBy7rqKqAoyT7oPx%2B8u9Uo8DIAKtsiWiaWpIJ6xwIG%2BSde4LXHBixrwkMYwFNKxt2%2BorzUsUjXmCoYJb5Z6Da9ZlV1V29%2Bc5OcmIQdN1AbmQuiGgwQ2heFihByQ7zXDnyOchHkZJ7EiZAqU725%2FTPMAeUjF9qCHmyu1oZGrALn&X-Amz-Signature=375d181fa38203b4bcb91a4ad71aac6c67bfb655f1fd5d44eaaeb74ef386634f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPYCI3M5%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFfkP8C%2FkQbww8ZosQiEYzzRT9SGdymMeOeFEONmIUTHAiEA1osua67WlJ%2FaLwB5vJQ67L9Nujr3l%2BlezvWs%2Fb3gld4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLLiUxDpYqSta%2FZhSrcA97GDnbeXOz373y57sU0tM9sLLa8VJacX%2BY9mHJijqn%2FTXACiA6IfN9CsjtHYrQARuZuPw2g53eTWx0i64%2B8b8LMuqrcxfejpTmX4xSCchpw%2BnWH5Rg1LDziYLf8K7mklLU0ZnKga4qgD6DqBP1DVGHhuwL7LJzsjjYV1qgllqOEGotZv%2F0rQHeaJoaivmlZVV9zdG3U3aZ%2BZaWPc2Pujo2n1kUiUUjXRZ6c3Zb4SMSK3S3%2BxBjNketv2DyEkC6%2B2ARd48j4k%2BJiLrGWcv06H%2FPMFJhD3e%2FNLI8Gj%2BnLc0SfAmYe8XeQuysxaypk88HIUhxMjzRoFOuXcrfBAAsEWZkUCknHgM9OW8gPWRzzqXLwBGGxriGkYVponu%2FW3mpjIRkGm866Sb0zxkHFaxmAI7mzqQTlJYoctkpEmq%2FW6ehII5n%2BkkHDKlRIhyVsD8AGFqjsHFb%2FLm1AlhnfjXMp%2Fm73RDEoO1YF4P5d9BN1MikFh2PeCDulgmYlec%2F%2Fh8kKG3kXfz55HEn2DqEA9VoSPUJwnpKsvuLYq9eVNrfuI5JeQ7JsmOuS7%2FswtsL1Kcron%2BmDQskDajcX4Ch%2BI%2BkXFYxD28mOxMcqj8Cyx2EUFKHtlsKHy2AcwFu2OqnxMLvJkccGOqUBFByIf3%2FAgsvzYYOAWR2yLAmVhnKPkQc2XKi7f2SKQwxP3aZ2VqiBy7rqKqAoyT7oPx%2B8u9Uo8DIAKtsiWiaWpIJ6xwIG%2BSde4LXHBixrwkMYwFNKxt2%2BorzUsUjXmCoYJb5Z6Da9ZlV1V29%2Bc5OcmIQdN1AbmQuiGgwQ2heFihByQ7zXDnyOchHkZJ7EiZAqU725%2FTPMAeUjF9qCHmyu1oZGrALn&X-Amz-Signature=499f3b31fc168b01a6848e624bb7e2965a8cb691c5032aaf8bc15b629b5d30bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPYCI3M5%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFfkP8C%2FkQbww8ZosQiEYzzRT9SGdymMeOeFEONmIUTHAiEA1osua67WlJ%2FaLwB5vJQ67L9Nujr3l%2BlezvWs%2Fb3gld4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLLiUxDpYqSta%2FZhSrcA97GDnbeXOz373y57sU0tM9sLLa8VJacX%2BY9mHJijqn%2FTXACiA6IfN9CsjtHYrQARuZuPw2g53eTWx0i64%2B8b8LMuqrcxfejpTmX4xSCchpw%2BnWH5Rg1LDziYLf8K7mklLU0ZnKga4qgD6DqBP1DVGHhuwL7LJzsjjYV1qgllqOEGotZv%2F0rQHeaJoaivmlZVV9zdG3U3aZ%2BZaWPc2Pujo2n1kUiUUjXRZ6c3Zb4SMSK3S3%2BxBjNketv2DyEkC6%2B2ARd48j4k%2BJiLrGWcv06H%2FPMFJhD3e%2FNLI8Gj%2BnLc0SfAmYe8XeQuysxaypk88HIUhxMjzRoFOuXcrfBAAsEWZkUCknHgM9OW8gPWRzzqXLwBGGxriGkYVponu%2FW3mpjIRkGm866Sb0zxkHFaxmAI7mzqQTlJYoctkpEmq%2FW6ehII5n%2BkkHDKlRIhyVsD8AGFqjsHFb%2FLm1AlhnfjXMp%2Fm73RDEoO1YF4P5d9BN1MikFh2PeCDulgmYlec%2F%2Fh8kKG3kXfz55HEn2DqEA9VoSPUJwnpKsvuLYq9eVNrfuI5JeQ7JsmOuS7%2FswtsL1Kcron%2BmDQskDajcX4Ch%2BI%2BkXFYxD28mOxMcqj8Cyx2EUFKHtlsKHy2AcwFu2OqnxMLvJkccGOqUBFByIf3%2FAgsvzYYOAWR2yLAmVhnKPkQc2XKi7f2SKQwxP3aZ2VqiBy7rqKqAoyT7oPx%2B8u9Uo8DIAKtsiWiaWpIJ6xwIG%2BSde4LXHBixrwkMYwFNKxt2%2BorzUsUjXmCoYJb5Z6Da9ZlV1V29%2Bc5OcmIQdN1AbmQuiGgwQ2heFihByQ7zXDnyOchHkZJ7EiZAqU725%2FTPMAeUjF9qCHmyu1oZGrALn&X-Amz-Signature=cbff83b852d28aa3e886a20db7d53a7bfce37ad4a46a2ed723e3061b903a8013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPYCI3M5%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFfkP8C%2FkQbww8ZosQiEYzzRT9SGdymMeOeFEONmIUTHAiEA1osua67WlJ%2FaLwB5vJQ67L9Nujr3l%2BlezvWs%2Fb3gld4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLLiUxDpYqSta%2FZhSrcA97GDnbeXOz373y57sU0tM9sLLa8VJacX%2BY9mHJijqn%2FTXACiA6IfN9CsjtHYrQARuZuPw2g53eTWx0i64%2B8b8LMuqrcxfejpTmX4xSCchpw%2BnWH5Rg1LDziYLf8K7mklLU0ZnKga4qgD6DqBP1DVGHhuwL7LJzsjjYV1qgllqOEGotZv%2F0rQHeaJoaivmlZVV9zdG3U3aZ%2BZaWPc2Pujo2n1kUiUUjXRZ6c3Zb4SMSK3S3%2BxBjNketv2DyEkC6%2B2ARd48j4k%2BJiLrGWcv06H%2FPMFJhD3e%2FNLI8Gj%2BnLc0SfAmYe8XeQuysxaypk88HIUhxMjzRoFOuXcrfBAAsEWZkUCknHgM9OW8gPWRzzqXLwBGGxriGkYVponu%2FW3mpjIRkGm866Sb0zxkHFaxmAI7mzqQTlJYoctkpEmq%2FW6ehII5n%2BkkHDKlRIhyVsD8AGFqjsHFb%2FLm1AlhnfjXMp%2Fm73RDEoO1YF4P5d9BN1MikFh2PeCDulgmYlec%2F%2Fh8kKG3kXfz55HEn2DqEA9VoSPUJwnpKsvuLYq9eVNrfuI5JeQ7JsmOuS7%2FswtsL1Kcron%2BmDQskDajcX4Ch%2BI%2BkXFYxD28mOxMcqj8Cyx2EUFKHtlsKHy2AcwFu2OqnxMLvJkccGOqUBFByIf3%2FAgsvzYYOAWR2yLAmVhnKPkQc2XKi7f2SKQwxP3aZ2VqiBy7rqKqAoyT7oPx%2B8u9Uo8DIAKtsiWiaWpIJ6xwIG%2BSde4LXHBixrwkMYwFNKxt2%2BorzUsUjXmCoYJb5Z6Da9ZlV1V29%2Bc5OcmIQdN1AbmQuiGgwQ2heFihByQ7zXDnyOchHkZJ7EiZAqU725%2FTPMAeUjF9qCHmyu1oZGrALn&X-Amz-Signature=3c7669e0b462ce3973f040c85652c95d0b5f379bff41e569de25092fa3f8f355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPYCI3M5%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFfkP8C%2FkQbww8ZosQiEYzzRT9SGdymMeOeFEONmIUTHAiEA1osua67WlJ%2FaLwB5vJQ67L9Nujr3l%2BlezvWs%2Fb3gld4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLLiUxDpYqSta%2FZhSrcA97GDnbeXOz373y57sU0tM9sLLa8VJacX%2BY9mHJijqn%2FTXACiA6IfN9CsjtHYrQARuZuPw2g53eTWx0i64%2B8b8LMuqrcxfejpTmX4xSCchpw%2BnWH5Rg1LDziYLf8K7mklLU0ZnKga4qgD6DqBP1DVGHhuwL7LJzsjjYV1qgllqOEGotZv%2F0rQHeaJoaivmlZVV9zdG3U3aZ%2BZaWPc2Pujo2n1kUiUUjXRZ6c3Zb4SMSK3S3%2BxBjNketv2DyEkC6%2B2ARd48j4k%2BJiLrGWcv06H%2FPMFJhD3e%2FNLI8Gj%2BnLc0SfAmYe8XeQuysxaypk88HIUhxMjzRoFOuXcrfBAAsEWZkUCknHgM9OW8gPWRzzqXLwBGGxriGkYVponu%2FW3mpjIRkGm866Sb0zxkHFaxmAI7mzqQTlJYoctkpEmq%2FW6ehII5n%2BkkHDKlRIhyVsD8AGFqjsHFb%2FLm1AlhnfjXMp%2Fm73RDEoO1YF4P5d9BN1MikFh2PeCDulgmYlec%2F%2Fh8kKG3kXfz55HEn2DqEA9VoSPUJwnpKsvuLYq9eVNrfuI5JeQ7JsmOuS7%2FswtsL1Kcron%2BmDQskDajcX4Ch%2BI%2BkXFYxD28mOxMcqj8Cyx2EUFKHtlsKHy2AcwFu2OqnxMLvJkccGOqUBFByIf3%2FAgsvzYYOAWR2yLAmVhnKPkQc2XKi7f2SKQwxP3aZ2VqiBy7rqKqAoyT7oPx%2B8u9Uo8DIAKtsiWiaWpIJ6xwIG%2BSde4LXHBixrwkMYwFNKxt2%2BorzUsUjXmCoYJb5Z6Da9ZlV1V29%2Bc5OcmIQdN1AbmQuiGgwQ2heFihByQ7zXDnyOchHkZJ7EiZAqU725%2FTPMAeUjF9qCHmyu1oZGrALn&X-Amz-Signature=7298e6a30d4421b53ce4f43c2b3e858a573cad292f59053f69f7b2d1bba807fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
