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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UCP6WBC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDUAay19HZhiqyPDH3w3n%2FVdTQOJT2ynGepHETBPlY%2BLAIhAMTH0i6OqsnL5NulhSO6I2OLcswbKqNNE%2Brs5IVf9MVuKv8DCEYQABoMNjM3NDIzMTgzODA1IgxA8%2B4iqu4nMzCdLs4q3AMh8Cppaxhjxmu7dktn0QmagDOf1PlrxqE0o53AsiHDLgvZuZIxY08lUay1B1XC0GzSsZNW3FkhI5JQdWblfe84Fzi2wPyYfIvroFWRvd2rvpmsLWCIVnvHU%2BRlnzdR07RvgForOzcZUcwZLThJHILMO6Ob4aY4lhpB9ch%2BPkeDyvOqWiuhurNWnAOsHo%2BPraAuQbFKTioP4f0DuzdxDHvIZCxOgktoZOyjhsMYIFqPcMNO8ti2n%2BoJW2G3qWy%2BMQt%2FrGq05YewG8jGoaUf70utiUqaPtT5sY7OaLTIpFnS64pjjKhbY%2F2zCkrrpf%2Bl6KCDqV30p0A7iiXQwprxHxlLO8d4%2FCGqUzj2RwwSI4uwEJIwZppIiENCNO6sqY83NgN5AKTio%2FhcGt1v93Wmfcdta%2Fw4iVtO9kr5mg3%2BByI%2BpwEowiRCmnehSZfGito8KWeNGc2wG9jZhSbv4FMAi3CM1W9luw9Ug1IRQw1uasFZDMRGfYFiSGqymDPA7S5dd%2BMPFok5KTqkWZa1JdM6jK45iTXQ%2Bqbe1w5FbWg14e1TurhRHWwRfdiiNEJf%2BuwX6NavuZ%2Bf3rxf15XW%2FRdRJsqAXL1KAKF1gDgbbXKhTvAupRps2dxysQNaxdTMSjDK7%2B%2FCBjqkAfSfyzZljhS1P%2FofmOvcOOu%2FaCYr6AkXgpw4II2aGO67ULsOC2efpOYsAyUwaqh635hyJHWBy0NDudFfJhFV%2Bc74%2FGBNwerLKEbEWT7jwKc7wIefbs3YDcOvoSxU%2ByJGf7vhq0jf8wSRHfzYwY5FReaCdyoLXTe%2FAkzNt%2FdLAkw%2B4FXyLyRTiJ8FWmGd4XvSEzx6StK9MPKxEEkrOWiycWqwFGxw&X-Amz-Signature=b7ac31d183d1a4547a49e41a7c247d729d43a4b72b24e091c42baf5be480599d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UCP6WBC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDUAay19HZhiqyPDH3w3n%2FVdTQOJT2ynGepHETBPlY%2BLAIhAMTH0i6OqsnL5NulhSO6I2OLcswbKqNNE%2Brs5IVf9MVuKv8DCEYQABoMNjM3NDIzMTgzODA1IgxA8%2B4iqu4nMzCdLs4q3AMh8Cppaxhjxmu7dktn0QmagDOf1PlrxqE0o53AsiHDLgvZuZIxY08lUay1B1XC0GzSsZNW3FkhI5JQdWblfe84Fzi2wPyYfIvroFWRvd2rvpmsLWCIVnvHU%2BRlnzdR07RvgForOzcZUcwZLThJHILMO6Ob4aY4lhpB9ch%2BPkeDyvOqWiuhurNWnAOsHo%2BPraAuQbFKTioP4f0DuzdxDHvIZCxOgktoZOyjhsMYIFqPcMNO8ti2n%2BoJW2G3qWy%2BMQt%2FrGq05YewG8jGoaUf70utiUqaPtT5sY7OaLTIpFnS64pjjKhbY%2F2zCkrrpf%2Bl6KCDqV30p0A7iiXQwprxHxlLO8d4%2FCGqUzj2RwwSI4uwEJIwZppIiENCNO6sqY83NgN5AKTio%2FhcGt1v93Wmfcdta%2Fw4iVtO9kr5mg3%2BByI%2BpwEowiRCmnehSZfGito8KWeNGc2wG9jZhSbv4FMAi3CM1W9luw9Ug1IRQw1uasFZDMRGfYFiSGqymDPA7S5dd%2BMPFok5KTqkWZa1JdM6jK45iTXQ%2Bqbe1w5FbWg14e1TurhRHWwRfdiiNEJf%2BuwX6NavuZ%2Bf3rxf15XW%2FRdRJsqAXL1KAKF1gDgbbXKhTvAupRps2dxysQNaxdTMSjDK7%2B%2FCBjqkAfSfyzZljhS1P%2FofmOvcOOu%2FaCYr6AkXgpw4II2aGO67ULsOC2efpOYsAyUwaqh635hyJHWBy0NDudFfJhFV%2Bc74%2FGBNwerLKEbEWT7jwKc7wIefbs3YDcOvoSxU%2ByJGf7vhq0jf8wSRHfzYwY5FReaCdyoLXTe%2FAkzNt%2FdLAkw%2B4FXyLyRTiJ8FWmGd4XvSEzx6StK9MPKxEEkrOWiycWqwFGxw&X-Amz-Signature=bdfb8613c688e4da28171e1e19d78ca9910e664b92bcc94d77c820e7b02bf163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UCP6WBC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDUAay19HZhiqyPDH3w3n%2FVdTQOJT2ynGepHETBPlY%2BLAIhAMTH0i6OqsnL5NulhSO6I2OLcswbKqNNE%2Brs5IVf9MVuKv8DCEYQABoMNjM3NDIzMTgzODA1IgxA8%2B4iqu4nMzCdLs4q3AMh8Cppaxhjxmu7dktn0QmagDOf1PlrxqE0o53AsiHDLgvZuZIxY08lUay1B1XC0GzSsZNW3FkhI5JQdWblfe84Fzi2wPyYfIvroFWRvd2rvpmsLWCIVnvHU%2BRlnzdR07RvgForOzcZUcwZLThJHILMO6Ob4aY4lhpB9ch%2BPkeDyvOqWiuhurNWnAOsHo%2BPraAuQbFKTioP4f0DuzdxDHvIZCxOgktoZOyjhsMYIFqPcMNO8ti2n%2BoJW2G3qWy%2BMQt%2FrGq05YewG8jGoaUf70utiUqaPtT5sY7OaLTIpFnS64pjjKhbY%2F2zCkrrpf%2Bl6KCDqV30p0A7iiXQwprxHxlLO8d4%2FCGqUzj2RwwSI4uwEJIwZppIiENCNO6sqY83NgN5AKTio%2FhcGt1v93Wmfcdta%2Fw4iVtO9kr5mg3%2BByI%2BpwEowiRCmnehSZfGito8KWeNGc2wG9jZhSbv4FMAi3CM1W9luw9Ug1IRQw1uasFZDMRGfYFiSGqymDPA7S5dd%2BMPFok5KTqkWZa1JdM6jK45iTXQ%2Bqbe1w5FbWg14e1TurhRHWwRfdiiNEJf%2BuwX6NavuZ%2Bf3rxf15XW%2FRdRJsqAXL1KAKF1gDgbbXKhTvAupRps2dxysQNaxdTMSjDK7%2B%2FCBjqkAfSfyzZljhS1P%2FofmOvcOOu%2FaCYr6AkXgpw4II2aGO67ULsOC2efpOYsAyUwaqh635hyJHWBy0NDudFfJhFV%2Bc74%2FGBNwerLKEbEWT7jwKc7wIefbs3YDcOvoSxU%2ByJGf7vhq0jf8wSRHfzYwY5FReaCdyoLXTe%2FAkzNt%2FdLAkw%2B4FXyLyRTiJ8FWmGd4XvSEzx6StK9MPKxEEkrOWiycWqwFGxw&X-Amz-Signature=e4e343864c5079bdc6e870acab1800950e262f09d8acbabc82f0246f11fa22a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UCP6WBC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDUAay19HZhiqyPDH3w3n%2FVdTQOJT2ynGepHETBPlY%2BLAIhAMTH0i6OqsnL5NulhSO6I2OLcswbKqNNE%2Brs5IVf9MVuKv8DCEYQABoMNjM3NDIzMTgzODA1IgxA8%2B4iqu4nMzCdLs4q3AMh8Cppaxhjxmu7dktn0QmagDOf1PlrxqE0o53AsiHDLgvZuZIxY08lUay1B1XC0GzSsZNW3FkhI5JQdWblfe84Fzi2wPyYfIvroFWRvd2rvpmsLWCIVnvHU%2BRlnzdR07RvgForOzcZUcwZLThJHILMO6Ob4aY4lhpB9ch%2BPkeDyvOqWiuhurNWnAOsHo%2BPraAuQbFKTioP4f0DuzdxDHvIZCxOgktoZOyjhsMYIFqPcMNO8ti2n%2BoJW2G3qWy%2BMQt%2FrGq05YewG8jGoaUf70utiUqaPtT5sY7OaLTIpFnS64pjjKhbY%2F2zCkrrpf%2Bl6KCDqV30p0A7iiXQwprxHxlLO8d4%2FCGqUzj2RwwSI4uwEJIwZppIiENCNO6sqY83NgN5AKTio%2FhcGt1v93Wmfcdta%2Fw4iVtO9kr5mg3%2BByI%2BpwEowiRCmnehSZfGito8KWeNGc2wG9jZhSbv4FMAi3CM1W9luw9Ug1IRQw1uasFZDMRGfYFiSGqymDPA7S5dd%2BMPFok5KTqkWZa1JdM6jK45iTXQ%2Bqbe1w5FbWg14e1TurhRHWwRfdiiNEJf%2BuwX6NavuZ%2Bf3rxf15XW%2FRdRJsqAXL1KAKF1gDgbbXKhTvAupRps2dxysQNaxdTMSjDK7%2B%2FCBjqkAfSfyzZljhS1P%2FofmOvcOOu%2FaCYr6AkXgpw4II2aGO67ULsOC2efpOYsAyUwaqh635hyJHWBy0NDudFfJhFV%2Bc74%2FGBNwerLKEbEWT7jwKc7wIefbs3YDcOvoSxU%2ByJGf7vhq0jf8wSRHfzYwY5FReaCdyoLXTe%2FAkzNt%2FdLAkw%2B4FXyLyRTiJ8FWmGd4XvSEzx6StK9MPKxEEkrOWiycWqwFGxw&X-Amz-Signature=1a6879f0e047a0ce29a2e5ecfcfa225faceb7a6817199f6982b143e07e4ddfb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UCP6WBC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDUAay19HZhiqyPDH3w3n%2FVdTQOJT2ynGepHETBPlY%2BLAIhAMTH0i6OqsnL5NulhSO6I2OLcswbKqNNE%2Brs5IVf9MVuKv8DCEYQABoMNjM3NDIzMTgzODA1IgxA8%2B4iqu4nMzCdLs4q3AMh8Cppaxhjxmu7dktn0QmagDOf1PlrxqE0o53AsiHDLgvZuZIxY08lUay1B1XC0GzSsZNW3FkhI5JQdWblfe84Fzi2wPyYfIvroFWRvd2rvpmsLWCIVnvHU%2BRlnzdR07RvgForOzcZUcwZLThJHILMO6Ob4aY4lhpB9ch%2BPkeDyvOqWiuhurNWnAOsHo%2BPraAuQbFKTioP4f0DuzdxDHvIZCxOgktoZOyjhsMYIFqPcMNO8ti2n%2BoJW2G3qWy%2BMQt%2FrGq05YewG8jGoaUf70utiUqaPtT5sY7OaLTIpFnS64pjjKhbY%2F2zCkrrpf%2Bl6KCDqV30p0A7iiXQwprxHxlLO8d4%2FCGqUzj2RwwSI4uwEJIwZppIiENCNO6sqY83NgN5AKTio%2FhcGt1v93Wmfcdta%2Fw4iVtO9kr5mg3%2BByI%2BpwEowiRCmnehSZfGito8KWeNGc2wG9jZhSbv4FMAi3CM1W9luw9Ug1IRQw1uasFZDMRGfYFiSGqymDPA7S5dd%2BMPFok5KTqkWZa1JdM6jK45iTXQ%2Bqbe1w5FbWg14e1TurhRHWwRfdiiNEJf%2BuwX6NavuZ%2Bf3rxf15XW%2FRdRJsqAXL1KAKF1gDgbbXKhTvAupRps2dxysQNaxdTMSjDK7%2B%2FCBjqkAfSfyzZljhS1P%2FofmOvcOOu%2FaCYr6AkXgpw4II2aGO67ULsOC2efpOYsAyUwaqh635hyJHWBy0NDudFfJhFV%2Bc74%2FGBNwerLKEbEWT7jwKc7wIefbs3YDcOvoSxU%2ByJGf7vhq0jf8wSRHfzYwY5FReaCdyoLXTe%2FAkzNt%2FdLAkw%2B4FXyLyRTiJ8FWmGd4XvSEzx6StK9MPKxEEkrOWiycWqwFGxw&X-Amz-Signature=2c3314c1e6a3501e9981aaab9a9dccfb076ad14402f24aa10e0c28ac9dcbc08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UCP6WBC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDUAay19HZhiqyPDH3w3n%2FVdTQOJT2ynGepHETBPlY%2BLAIhAMTH0i6OqsnL5NulhSO6I2OLcswbKqNNE%2Brs5IVf9MVuKv8DCEYQABoMNjM3NDIzMTgzODA1IgxA8%2B4iqu4nMzCdLs4q3AMh8Cppaxhjxmu7dktn0QmagDOf1PlrxqE0o53AsiHDLgvZuZIxY08lUay1B1XC0GzSsZNW3FkhI5JQdWblfe84Fzi2wPyYfIvroFWRvd2rvpmsLWCIVnvHU%2BRlnzdR07RvgForOzcZUcwZLThJHILMO6Ob4aY4lhpB9ch%2BPkeDyvOqWiuhurNWnAOsHo%2BPraAuQbFKTioP4f0DuzdxDHvIZCxOgktoZOyjhsMYIFqPcMNO8ti2n%2BoJW2G3qWy%2BMQt%2FrGq05YewG8jGoaUf70utiUqaPtT5sY7OaLTIpFnS64pjjKhbY%2F2zCkrrpf%2Bl6KCDqV30p0A7iiXQwprxHxlLO8d4%2FCGqUzj2RwwSI4uwEJIwZppIiENCNO6sqY83NgN5AKTio%2FhcGt1v93Wmfcdta%2Fw4iVtO9kr5mg3%2BByI%2BpwEowiRCmnehSZfGito8KWeNGc2wG9jZhSbv4FMAi3CM1W9luw9Ug1IRQw1uasFZDMRGfYFiSGqymDPA7S5dd%2BMPFok5KTqkWZa1JdM6jK45iTXQ%2Bqbe1w5FbWg14e1TurhRHWwRfdiiNEJf%2BuwX6NavuZ%2Bf3rxf15XW%2FRdRJsqAXL1KAKF1gDgbbXKhTvAupRps2dxysQNaxdTMSjDK7%2B%2FCBjqkAfSfyzZljhS1P%2FofmOvcOOu%2FaCYr6AkXgpw4II2aGO67ULsOC2efpOYsAyUwaqh635hyJHWBy0NDudFfJhFV%2Bc74%2FGBNwerLKEbEWT7jwKc7wIefbs3YDcOvoSxU%2ByJGf7vhq0jf8wSRHfzYwY5FReaCdyoLXTe%2FAkzNt%2FdLAkw%2B4FXyLyRTiJ8FWmGd4XvSEzx6StK9MPKxEEkrOWiycWqwFGxw&X-Amz-Signature=623887910391acfa69beb09ed2f286a5ddb9c75d80f59a06e260b5e3fe93b900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UCP6WBC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDUAay19HZhiqyPDH3w3n%2FVdTQOJT2ynGepHETBPlY%2BLAIhAMTH0i6OqsnL5NulhSO6I2OLcswbKqNNE%2Brs5IVf9MVuKv8DCEYQABoMNjM3NDIzMTgzODA1IgxA8%2B4iqu4nMzCdLs4q3AMh8Cppaxhjxmu7dktn0QmagDOf1PlrxqE0o53AsiHDLgvZuZIxY08lUay1B1XC0GzSsZNW3FkhI5JQdWblfe84Fzi2wPyYfIvroFWRvd2rvpmsLWCIVnvHU%2BRlnzdR07RvgForOzcZUcwZLThJHILMO6Ob4aY4lhpB9ch%2BPkeDyvOqWiuhurNWnAOsHo%2BPraAuQbFKTioP4f0DuzdxDHvIZCxOgktoZOyjhsMYIFqPcMNO8ti2n%2BoJW2G3qWy%2BMQt%2FrGq05YewG8jGoaUf70utiUqaPtT5sY7OaLTIpFnS64pjjKhbY%2F2zCkrrpf%2Bl6KCDqV30p0A7iiXQwprxHxlLO8d4%2FCGqUzj2RwwSI4uwEJIwZppIiENCNO6sqY83NgN5AKTio%2FhcGt1v93Wmfcdta%2Fw4iVtO9kr5mg3%2BByI%2BpwEowiRCmnehSZfGito8KWeNGc2wG9jZhSbv4FMAi3CM1W9luw9Ug1IRQw1uasFZDMRGfYFiSGqymDPA7S5dd%2BMPFok5KTqkWZa1JdM6jK45iTXQ%2Bqbe1w5FbWg14e1TurhRHWwRfdiiNEJf%2BuwX6NavuZ%2Bf3rxf15XW%2FRdRJsqAXL1KAKF1gDgbbXKhTvAupRps2dxysQNaxdTMSjDK7%2B%2FCBjqkAfSfyzZljhS1P%2FofmOvcOOu%2FaCYr6AkXgpw4II2aGO67ULsOC2efpOYsAyUwaqh635hyJHWBy0NDudFfJhFV%2Bc74%2FGBNwerLKEbEWT7jwKc7wIefbs3YDcOvoSxU%2ByJGf7vhq0jf8wSRHfzYwY5FReaCdyoLXTe%2FAkzNt%2FdLAkw%2B4FXyLyRTiJ8FWmGd4XvSEzx6StK9MPKxEEkrOWiycWqwFGxw&X-Amz-Signature=4f5ec7a909620f8329f27dba31f680a4883f1bf0e508963e95d9294897ab57b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
