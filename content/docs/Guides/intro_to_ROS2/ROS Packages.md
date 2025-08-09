---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33CIVTU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDTI5kdJGIfzJwWARHJZdUceKeT%2BMCKclHEbsPTwnmD1AIhAP2WT5DZJx8q7o8Wnsh%2BIh1vg25Y%2B4BTbKxg%2FVFSmEN7KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfK5tCffGvQRQSS5Yq3AO3K7zJe3vTH74Ml%2B6u5LUA8h1nQ0hma41614zzBPCToIhn6ID9ZPt2ZV5pokxK4xnM0H%2FfwZN4HqvfujL1IbcTlm8YY%2FCdTSC%2BjdG8PjqCTnJP0tS5u5FMYOsJmxmIpu3TyPSKmR%2BX2mHF7ipiVvYBW95aor3SjCs1%2F5shHgmbAUSkBnJfsoxl6bYMdhWeLI9EeJLpd9hK2QJwQVNQrW6eOfCp2ttZ05hCncu5WO9fPrvRQfPlOnvejUB0D%2F%2FPDhN%2B6Cksz%2FbyicQ8EZB8F7g655kOXp2OAM8E6j%2FwIlxw6EGCHbaXm3kx%2BWGeHVpuhNaw%2BLTC42pDS0Vg6NuE%2FFnFC%2BzCCxzrBO%2FlbskKav9RntQCvvRYVeVmtwQnaQivtVSnCZdXGR9DaxGw9U%2BaCgYtskRhuBDVGvqNVuJG89puBfaS3XjQK9HQuROc71eWdn%2FXIePcRPuStzuPo5OBxcEpQry6KcgIXOgUgm3Y4tdXl%2FOse7weX22dHHbB5CUM4ewKtkuDjqzM6y1pXM3QSusRtJJaDAM%2BtaA%2B6ddnyEPGPh395lMkNItRwtt2%2FTCOB2fqKNMYrqs83jCZp2zku2CTtcl1JB1i3ev2H9zPduDQTquW2DnMsVmOyiZu2zDm9drEBjqkAS3c0%2Brqqv7iLUb2GRIku%2Ba79N0JzgybQZeLHc3HZ6ZgCzVwly6h3UP9%2FvvWg06CUqxu5HSEASEAFUMKvfzb77hYaYLyJhyRF8ntmyiCEdmSv7bOLRm7t4Xhx5mUq97qYgjb6nWD0TEVXtjL0iHEkiGWRdTAo7SzRYS6kED5C2abK6j0Du%2FMgcZdgro9AJ3joEhuG8nBMTXTfz%2FaD4XoeFd45U9X&X-Amz-Signature=7dcb3b5fc777d676f0b93fa5e47d0a9c2303e87711f9a3aabbc1beb09a7648d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33CIVTU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDTI5kdJGIfzJwWARHJZdUceKeT%2BMCKclHEbsPTwnmD1AIhAP2WT5DZJx8q7o8Wnsh%2BIh1vg25Y%2B4BTbKxg%2FVFSmEN7KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfK5tCffGvQRQSS5Yq3AO3K7zJe3vTH74Ml%2B6u5LUA8h1nQ0hma41614zzBPCToIhn6ID9ZPt2ZV5pokxK4xnM0H%2FfwZN4HqvfujL1IbcTlm8YY%2FCdTSC%2BjdG8PjqCTnJP0tS5u5FMYOsJmxmIpu3TyPSKmR%2BX2mHF7ipiVvYBW95aor3SjCs1%2F5shHgmbAUSkBnJfsoxl6bYMdhWeLI9EeJLpd9hK2QJwQVNQrW6eOfCp2ttZ05hCncu5WO9fPrvRQfPlOnvejUB0D%2F%2FPDhN%2B6Cksz%2FbyicQ8EZB8F7g655kOXp2OAM8E6j%2FwIlxw6EGCHbaXm3kx%2BWGeHVpuhNaw%2BLTC42pDS0Vg6NuE%2FFnFC%2BzCCxzrBO%2FlbskKav9RntQCvvRYVeVmtwQnaQivtVSnCZdXGR9DaxGw9U%2BaCgYtskRhuBDVGvqNVuJG89puBfaS3XjQK9HQuROc71eWdn%2FXIePcRPuStzuPo5OBxcEpQry6KcgIXOgUgm3Y4tdXl%2FOse7weX22dHHbB5CUM4ewKtkuDjqzM6y1pXM3QSusRtJJaDAM%2BtaA%2B6ddnyEPGPh395lMkNItRwtt2%2FTCOB2fqKNMYrqs83jCZp2zku2CTtcl1JB1i3ev2H9zPduDQTquW2DnMsVmOyiZu2zDm9drEBjqkAS3c0%2Brqqv7iLUb2GRIku%2Ba79N0JzgybQZeLHc3HZ6ZgCzVwly6h3UP9%2FvvWg06CUqxu5HSEASEAFUMKvfzb77hYaYLyJhyRF8ntmyiCEdmSv7bOLRm7t4Xhx5mUq97qYgjb6nWD0TEVXtjL0iHEkiGWRdTAo7SzRYS6kED5C2abK6j0Du%2FMgcZdgro9AJ3joEhuG8nBMTXTfz%2FaD4XoeFd45U9X&X-Amz-Signature=7c89c6a3c202fbeca05c64b8bd926ed8209c64aba548c57ab81b1e13461a32da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33CIVTU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDTI5kdJGIfzJwWARHJZdUceKeT%2BMCKclHEbsPTwnmD1AIhAP2WT5DZJx8q7o8Wnsh%2BIh1vg25Y%2B4BTbKxg%2FVFSmEN7KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfK5tCffGvQRQSS5Yq3AO3K7zJe3vTH74Ml%2B6u5LUA8h1nQ0hma41614zzBPCToIhn6ID9ZPt2ZV5pokxK4xnM0H%2FfwZN4HqvfujL1IbcTlm8YY%2FCdTSC%2BjdG8PjqCTnJP0tS5u5FMYOsJmxmIpu3TyPSKmR%2BX2mHF7ipiVvYBW95aor3SjCs1%2F5shHgmbAUSkBnJfsoxl6bYMdhWeLI9EeJLpd9hK2QJwQVNQrW6eOfCp2ttZ05hCncu5WO9fPrvRQfPlOnvejUB0D%2F%2FPDhN%2B6Cksz%2FbyicQ8EZB8F7g655kOXp2OAM8E6j%2FwIlxw6EGCHbaXm3kx%2BWGeHVpuhNaw%2BLTC42pDS0Vg6NuE%2FFnFC%2BzCCxzrBO%2FlbskKav9RntQCvvRYVeVmtwQnaQivtVSnCZdXGR9DaxGw9U%2BaCgYtskRhuBDVGvqNVuJG89puBfaS3XjQK9HQuROc71eWdn%2FXIePcRPuStzuPo5OBxcEpQry6KcgIXOgUgm3Y4tdXl%2FOse7weX22dHHbB5CUM4ewKtkuDjqzM6y1pXM3QSusRtJJaDAM%2BtaA%2B6ddnyEPGPh395lMkNItRwtt2%2FTCOB2fqKNMYrqs83jCZp2zku2CTtcl1JB1i3ev2H9zPduDQTquW2DnMsVmOyiZu2zDm9drEBjqkAS3c0%2Brqqv7iLUb2GRIku%2Ba79N0JzgybQZeLHc3HZ6ZgCzVwly6h3UP9%2FvvWg06CUqxu5HSEASEAFUMKvfzb77hYaYLyJhyRF8ntmyiCEdmSv7bOLRm7t4Xhx5mUq97qYgjb6nWD0TEVXtjL0iHEkiGWRdTAo7SzRYS6kED5C2abK6j0Du%2FMgcZdgro9AJ3joEhuG8nBMTXTfz%2FaD4XoeFd45U9X&X-Amz-Signature=97c1ff6a2355c487f8e4c119738910c038bca9d67a70da394618028c6982d624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33CIVTU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDTI5kdJGIfzJwWARHJZdUceKeT%2BMCKclHEbsPTwnmD1AIhAP2WT5DZJx8q7o8Wnsh%2BIh1vg25Y%2B4BTbKxg%2FVFSmEN7KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfK5tCffGvQRQSS5Yq3AO3K7zJe3vTH74Ml%2B6u5LUA8h1nQ0hma41614zzBPCToIhn6ID9ZPt2ZV5pokxK4xnM0H%2FfwZN4HqvfujL1IbcTlm8YY%2FCdTSC%2BjdG8PjqCTnJP0tS5u5FMYOsJmxmIpu3TyPSKmR%2BX2mHF7ipiVvYBW95aor3SjCs1%2F5shHgmbAUSkBnJfsoxl6bYMdhWeLI9EeJLpd9hK2QJwQVNQrW6eOfCp2ttZ05hCncu5WO9fPrvRQfPlOnvejUB0D%2F%2FPDhN%2B6Cksz%2FbyicQ8EZB8F7g655kOXp2OAM8E6j%2FwIlxw6EGCHbaXm3kx%2BWGeHVpuhNaw%2BLTC42pDS0Vg6NuE%2FFnFC%2BzCCxzrBO%2FlbskKav9RntQCvvRYVeVmtwQnaQivtVSnCZdXGR9DaxGw9U%2BaCgYtskRhuBDVGvqNVuJG89puBfaS3XjQK9HQuROc71eWdn%2FXIePcRPuStzuPo5OBxcEpQry6KcgIXOgUgm3Y4tdXl%2FOse7weX22dHHbB5CUM4ewKtkuDjqzM6y1pXM3QSusRtJJaDAM%2BtaA%2B6ddnyEPGPh395lMkNItRwtt2%2FTCOB2fqKNMYrqs83jCZp2zku2CTtcl1JB1i3ev2H9zPduDQTquW2DnMsVmOyiZu2zDm9drEBjqkAS3c0%2Brqqv7iLUb2GRIku%2Ba79N0JzgybQZeLHc3HZ6ZgCzVwly6h3UP9%2FvvWg06CUqxu5HSEASEAFUMKvfzb77hYaYLyJhyRF8ntmyiCEdmSv7bOLRm7t4Xhx5mUq97qYgjb6nWD0TEVXtjL0iHEkiGWRdTAo7SzRYS6kED5C2abK6j0Du%2FMgcZdgro9AJ3joEhuG8nBMTXTfz%2FaD4XoeFd45U9X&X-Amz-Signature=7a74f0d15139a517f91bf0b6ce9c94190e30a32f54991a3b4253ea56280ef6f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33CIVTU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDTI5kdJGIfzJwWARHJZdUceKeT%2BMCKclHEbsPTwnmD1AIhAP2WT5DZJx8q7o8Wnsh%2BIh1vg25Y%2B4BTbKxg%2FVFSmEN7KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfK5tCffGvQRQSS5Yq3AO3K7zJe3vTH74Ml%2B6u5LUA8h1nQ0hma41614zzBPCToIhn6ID9ZPt2ZV5pokxK4xnM0H%2FfwZN4HqvfujL1IbcTlm8YY%2FCdTSC%2BjdG8PjqCTnJP0tS5u5FMYOsJmxmIpu3TyPSKmR%2BX2mHF7ipiVvYBW95aor3SjCs1%2F5shHgmbAUSkBnJfsoxl6bYMdhWeLI9EeJLpd9hK2QJwQVNQrW6eOfCp2ttZ05hCncu5WO9fPrvRQfPlOnvejUB0D%2F%2FPDhN%2B6Cksz%2FbyicQ8EZB8F7g655kOXp2OAM8E6j%2FwIlxw6EGCHbaXm3kx%2BWGeHVpuhNaw%2BLTC42pDS0Vg6NuE%2FFnFC%2BzCCxzrBO%2FlbskKav9RntQCvvRYVeVmtwQnaQivtVSnCZdXGR9DaxGw9U%2BaCgYtskRhuBDVGvqNVuJG89puBfaS3XjQK9HQuROc71eWdn%2FXIePcRPuStzuPo5OBxcEpQry6KcgIXOgUgm3Y4tdXl%2FOse7weX22dHHbB5CUM4ewKtkuDjqzM6y1pXM3QSusRtJJaDAM%2BtaA%2B6ddnyEPGPh395lMkNItRwtt2%2FTCOB2fqKNMYrqs83jCZp2zku2CTtcl1JB1i3ev2H9zPduDQTquW2DnMsVmOyiZu2zDm9drEBjqkAS3c0%2Brqqv7iLUb2GRIku%2Ba79N0JzgybQZeLHc3HZ6ZgCzVwly6h3UP9%2FvvWg06CUqxu5HSEASEAFUMKvfzb77hYaYLyJhyRF8ntmyiCEdmSv7bOLRm7t4Xhx5mUq97qYgjb6nWD0TEVXtjL0iHEkiGWRdTAo7SzRYS6kED5C2abK6j0Du%2FMgcZdgro9AJ3joEhuG8nBMTXTfz%2FaD4XoeFd45U9X&X-Amz-Signature=b3cf5bf49db595ded540c6221166e6bc3bb0d7c83d9a0273e93492abfa9f0122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33CIVTU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDTI5kdJGIfzJwWARHJZdUceKeT%2BMCKclHEbsPTwnmD1AIhAP2WT5DZJx8q7o8Wnsh%2BIh1vg25Y%2B4BTbKxg%2FVFSmEN7KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfK5tCffGvQRQSS5Yq3AO3K7zJe3vTH74Ml%2B6u5LUA8h1nQ0hma41614zzBPCToIhn6ID9ZPt2ZV5pokxK4xnM0H%2FfwZN4HqvfujL1IbcTlm8YY%2FCdTSC%2BjdG8PjqCTnJP0tS5u5FMYOsJmxmIpu3TyPSKmR%2BX2mHF7ipiVvYBW95aor3SjCs1%2F5shHgmbAUSkBnJfsoxl6bYMdhWeLI9EeJLpd9hK2QJwQVNQrW6eOfCp2ttZ05hCncu5WO9fPrvRQfPlOnvejUB0D%2F%2FPDhN%2B6Cksz%2FbyicQ8EZB8F7g655kOXp2OAM8E6j%2FwIlxw6EGCHbaXm3kx%2BWGeHVpuhNaw%2BLTC42pDS0Vg6NuE%2FFnFC%2BzCCxzrBO%2FlbskKav9RntQCvvRYVeVmtwQnaQivtVSnCZdXGR9DaxGw9U%2BaCgYtskRhuBDVGvqNVuJG89puBfaS3XjQK9HQuROc71eWdn%2FXIePcRPuStzuPo5OBxcEpQry6KcgIXOgUgm3Y4tdXl%2FOse7weX22dHHbB5CUM4ewKtkuDjqzM6y1pXM3QSusRtJJaDAM%2BtaA%2B6ddnyEPGPh395lMkNItRwtt2%2FTCOB2fqKNMYrqs83jCZp2zku2CTtcl1JB1i3ev2H9zPduDQTquW2DnMsVmOyiZu2zDm9drEBjqkAS3c0%2Brqqv7iLUb2GRIku%2Ba79N0JzgybQZeLHc3HZ6ZgCzVwly6h3UP9%2FvvWg06CUqxu5HSEASEAFUMKvfzb77hYaYLyJhyRF8ntmyiCEdmSv7bOLRm7t4Xhx5mUq97qYgjb6nWD0TEVXtjL0iHEkiGWRdTAo7SzRYS6kED5C2abK6j0Du%2FMgcZdgro9AJ3joEhuG8nBMTXTfz%2FaD4XoeFd45U9X&X-Amz-Signature=652a3957e28c8357c7dff0cba63790d8b11f572a07effcc2f1a9c1c08ab523fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33CIVTU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDTI5kdJGIfzJwWARHJZdUceKeT%2BMCKclHEbsPTwnmD1AIhAP2WT5DZJx8q7o8Wnsh%2BIh1vg25Y%2B4BTbKxg%2FVFSmEN7KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfK5tCffGvQRQSS5Yq3AO3K7zJe3vTH74Ml%2B6u5LUA8h1nQ0hma41614zzBPCToIhn6ID9ZPt2ZV5pokxK4xnM0H%2FfwZN4HqvfujL1IbcTlm8YY%2FCdTSC%2BjdG8PjqCTnJP0tS5u5FMYOsJmxmIpu3TyPSKmR%2BX2mHF7ipiVvYBW95aor3SjCs1%2F5shHgmbAUSkBnJfsoxl6bYMdhWeLI9EeJLpd9hK2QJwQVNQrW6eOfCp2ttZ05hCncu5WO9fPrvRQfPlOnvejUB0D%2F%2FPDhN%2B6Cksz%2FbyicQ8EZB8F7g655kOXp2OAM8E6j%2FwIlxw6EGCHbaXm3kx%2BWGeHVpuhNaw%2BLTC42pDS0Vg6NuE%2FFnFC%2BzCCxzrBO%2FlbskKav9RntQCvvRYVeVmtwQnaQivtVSnCZdXGR9DaxGw9U%2BaCgYtskRhuBDVGvqNVuJG89puBfaS3XjQK9HQuROc71eWdn%2FXIePcRPuStzuPo5OBxcEpQry6KcgIXOgUgm3Y4tdXl%2FOse7weX22dHHbB5CUM4ewKtkuDjqzM6y1pXM3QSusRtJJaDAM%2BtaA%2B6ddnyEPGPh395lMkNItRwtt2%2FTCOB2fqKNMYrqs83jCZp2zku2CTtcl1JB1i3ev2H9zPduDQTquW2DnMsVmOyiZu2zDm9drEBjqkAS3c0%2Brqqv7iLUb2GRIku%2Ba79N0JzgybQZeLHc3HZ6ZgCzVwly6h3UP9%2FvvWg06CUqxu5HSEASEAFUMKvfzb77hYaYLyJhyRF8ntmyiCEdmSv7bOLRm7t4Xhx5mUq97qYgjb6nWD0TEVXtjL0iHEkiGWRdTAo7SzRYS6kED5C2abK6j0Du%2FMgcZdgro9AJ3joEhuG8nBMTXTfz%2FaD4XoeFd45U9X&X-Amz-Signature=d88f0a8984ccf3367d15855ed6719c33ce5369b1ae0510536b8ea5354eaa0747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
