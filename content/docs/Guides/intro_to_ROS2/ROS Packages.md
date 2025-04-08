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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMIOZ3J%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBGQRz4X%2B1N7anDzo9FZ6ufkcDLHdYw5VVH3v38ZCb06AiEAnvdhmLqAAnq611GhWzvqu3usAL7hM2vrU91OrlCFYRIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBD8ZFsIycs7Wu%2FSVCrcA7jg3IaMdliq1RdG6f39%2BSlKCxiL7rxnULBLF9DUWynE2%2FZIozWndgxXyjYg8IGZAhjxlwc0IhvBTZqG0pip4%2FGAwys1mcARyNzAI7%2FfMUTZGg%2BhDDSY2WghIWCgCz1VaFwFMZT%2BYjoTp%2FgnSbJmIKrRP%2Fzg8lbChl3sscheNUZK0gq7pdh9JU6EUcA%2FOtS%2BScNnatfAL6afDCi4jdCA6OR%2B7D8jLRYDzjfjgzRBz%2BXmIruJ5ejJobLE05pCpmSg0B0KggKzPENZBz5O%2FlNQWkQ4DrxvnZYRaL8EdHZJ2jVbMI%2FuW9R4TpQiV9CgSlLXufl99onjl1ElIbuYmryxCjznWJJSTxG%2FCr8s8zZnMpIMZ5Uk3Fb8essUqFd%2F6T0vwdKku2HpecEK3iVkc0%2Fu%2BZobwP%2FUQyzY8rpBGd9RYT%2BUDje8luJL5ycg3LLa0EzeRGiKtKfsNWKIFh0uEEGmFqd3Y6rMWF9XQeCiDuff87zlp3s97veJbRiXnmUuxi7jyUmOG2daSKgXvJ72FPu6uEOEnePr0jEQJzyulQmEYRP18BlEaTAutz46EhLhb8G6CJid0%2FcBN64bDMZAwPoTXunQg27fUEJT1uFDFfLLDmJZB%2FQYCBDe5bpx9NMTMICH1b8GOqUBZWi6pmd5RVEjQQe%2FCAIT8O%2Ff3N6A0bQkeeyzwmXaYzxR0mgXIbS8CpYxZxX6dq2ApBg%2BSWjOPc30Te0udlcdU6QOiLToLqfzCI12NITva8zPOvWQaoND0rUFBvp3CGdSR7VSKYij%2B7zhIhvICHc%2BzfXvu59W1mUdi91smILu17QUcgSvvVLUs%2F3aGE5pz55J%2FLP5aNPBQL1Wv1Du4EYnr%2BVAkAOl&X-Amz-Signature=0e978faa8266bdae76aa1b2c7a9e9eb52a09287d0830cb8e7a47675e3de6d7d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMIOZ3J%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBGQRz4X%2B1N7anDzo9FZ6ufkcDLHdYw5VVH3v38ZCb06AiEAnvdhmLqAAnq611GhWzvqu3usAL7hM2vrU91OrlCFYRIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBD8ZFsIycs7Wu%2FSVCrcA7jg3IaMdliq1RdG6f39%2BSlKCxiL7rxnULBLF9DUWynE2%2FZIozWndgxXyjYg8IGZAhjxlwc0IhvBTZqG0pip4%2FGAwys1mcARyNzAI7%2FfMUTZGg%2BhDDSY2WghIWCgCz1VaFwFMZT%2BYjoTp%2FgnSbJmIKrRP%2Fzg8lbChl3sscheNUZK0gq7pdh9JU6EUcA%2FOtS%2BScNnatfAL6afDCi4jdCA6OR%2B7D8jLRYDzjfjgzRBz%2BXmIruJ5ejJobLE05pCpmSg0B0KggKzPENZBz5O%2FlNQWkQ4DrxvnZYRaL8EdHZJ2jVbMI%2FuW9R4TpQiV9CgSlLXufl99onjl1ElIbuYmryxCjznWJJSTxG%2FCr8s8zZnMpIMZ5Uk3Fb8essUqFd%2F6T0vwdKku2HpecEK3iVkc0%2Fu%2BZobwP%2FUQyzY8rpBGd9RYT%2BUDje8luJL5ycg3LLa0EzeRGiKtKfsNWKIFh0uEEGmFqd3Y6rMWF9XQeCiDuff87zlp3s97veJbRiXnmUuxi7jyUmOG2daSKgXvJ72FPu6uEOEnePr0jEQJzyulQmEYRP18BlEaTAutz46EhLhb8G6CJid0%2FcBN64bDMZAwPoTXunQg27fUEJT1uFDFfLLDmJZB%2FQYCBDe5bpx9NMTMICH1b8GOqUBZWi6pmd5RVEjQQe%2FCAIT8O%2Ff3N6A0bQkeeyzwmXaYzxR0mgXIbS8CpYxZxX6dq2ApBg%2BSWjOPc30Te0udlcdU6QOiLToLqfzCI12NITva8zPOvWQaoND0rUFBvp3CGdSR7VSKYij%2B7zhIhvICHc%2BzfXvu59W1mUdi91smILu17QUcgSvvVLUs%2F3aGE5pz55J%2FLP5aNPBQL1Wv1Du4EYnr%2BVAkAOl&X-Amz-Signature=f192fa2253f5a45a03d8c458d48bdf77bfaccdd734e466344bff325480b05c28&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMIOZ3J%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBGQRz4X%2B1N7anDzo9FZ6ufkcDLHdYw5VVH3v38ZCb06AiEAnvdhmLqAAnq611GhWzvqu3usAL7hM2vrU91OrlCFYRIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBD8ZFsIycs7Wu%2FSVCrcA7jg3IaMdliq1RdG6f39%2BSlKCxiL7rxnULBLF9DUWynE2%2FZIozWndgxXyjYg8IGZAhjxlwc0IhvBTZqG0pip4%2FGAwys1mcARyNzAI7%2FfMUTZGg%2BhDDSY2WghIWCgCz1VaFwFMZT%2BYjoTp%2FgnSbJmIKrRP%2Fzg8lbChl3sscheNUZK0gq7pdh9JU6EUcA%2FOtS%2BScNnatfAL6afDCi4jdCA6OR%2B7D8jLRYDzjfjgzRBz%2BXmIruJ5ejJobLE05pCpmSg0B0KggKzPENZBz5O%2FlNQWkQ4DrxvnZYRaL8EdHZJ2jVbMI%2FuW9R4TpQiV9CgSlLXufl99onjl1ElIbuYmryxCjznWJJSTxG%2FCr8s8zZnMpIMZ5Uk3Fb8essUqFd%2F6T0vwdKku2HpecEK3iVkc0%2Fu%2BZobwP%2FUQyzY8rpBGd9RYT%2BUDje8luJL5ycg3LLa0EzeRGiKtKfsNWKIFh0uEEGmFqd3Y6rMWF9XQeCiDuff87zlp3s97veJbRiXnmUuxi7jyUmOG2daSKgXvJ72FPu6uEOEnePr0jEQJzyulQmEYRP18BlEaTAutz46EhLhb8G6CJid0%2FcBN64bDMZAwPoTXunQg27fUEJT1uFDFfLLDmJZB%2FQYCBDe5bpx9NMTMICH1b8GOqUBZWi6pmd5RVEjQQe%2FCAIT8O%2Ff3N6A0bQkeeyzwmXaYzxR0mgXIbS8CpYxZxX6dq2ApBg%2BSWjOPc30Te0udlcdU6QOiLToLqfzCI12NITva8zPOvWQaoND0rUFBvp3CGdSR7VSKYij%2B7zhIhvICHc%2BzfXvu59W1mUdi91smILu17QUcgSvvVLUs%2F3aGE5pz55J%2FLP5aNPBQL1Wv1Du4EYnr%2BVAkAOl&X-Amz-Signature=00c82703413f54caa03149603ff4cf38589f65edf06de4d987f06303d7530381&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMIOZ3J%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBGQRz4X%2B1N7anDzo9FZ6ufkcDLHdYw5VVH3v38ZCb06AiEAnvdhmLqAAnq611GhWzvqu3usAL7hM2vrU91OrlCFYRIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBD8ZFsIycs7Wu%2FSVCrcA7jg3IaMdliq1RdG6f39%2BSlKCxiL7rxnULBLF9DUWynE2%2FZIozWndgxXyjYg8IGZAhjxlwc0IhvBTZqG0pip4%2FGAwys1mcARyNzAI7%2FfMUTZGg%2BhDDSY2WghIWCgCz1VaFwFMZT%2BYjoTp%2FgnSbJmIKrRP%2Fzg8lbChl3sscheNUZK0gq7pdh9JU6EUcA%2FOtS%2BScNnatfAL6afDCi4jdCA6OR%2B7D8jLRYDzjfjgzRBz%2BXmIruJ5ejJobLE05pCpmSg0B0KggKzPENZBz5O%2FlNQWkQ4DrxvnZYRaL8EdHZJ2jVbMI%2FuW9R4TpQiV9CgSlLXufl99onjl1ElIbuYmryxCjznWJJSTxG%2FCr8s8zZnMpIMZ5Uk3Fb8essUqFd%2F6T0vwdKku2HpecEK3iVkc0%2Fu%2BZobwP%2FUQyzY8rpBGd9RYT%2BUDje8luJL5ycg3LLa0EzeRGiKtKfsNWKIFh0uEEGmFqd3Y6rMWF9XQeCiDuff87zlp3s97veJbRiXnmUuxi7jyUmOG2daSKgXvJ72FPu6uEOEnePr0jEQJzyulQmEYRP18BlEaTAutz46EhLhb8G6CJid0%2FcBN64bDMZAwPoTXunQg27fUEJT1uFDFfLLDmJZB%2FQYCBDe5bpx9NMTMICH1b8GOqUBZWi6pmd5RVEjQQe%2FCAIT8O%2Ff3N6A0bQkeeyzwmXaYzxR0mgXIbS8CpYxZxX6dq2ApBg%2BSWjOPc30Te0udlcdU6QOiLToLqfzCI12NITva8zPOvWQaoND0rUFBvp3CGdSR7VSKYij%2B7zhIhvICHc%2BzfXvu59W1mUdi91smILu17QUcgSvvVLUs%2F3aGE5pz55J%2FLP5aNPBQL1Wv1Du4EYnr%2BVAkAOl&X-Amz-Signature=b3db8589947ffd7cb5cbf2400762f363c2fa5eba514ae139a21cf04a6aeddb4d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMIOZ3J%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBGQRz4X%2B1N7anDzo9FZ6ufkcDLHdYw5VVH3v38ZCb06AiEAnvdhmLqAAnq611GhWzvqu3usAL7hM2vrU91OrlCFYRIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBD8ZFsIycs7Wu%2FSVCrcA7jg3IaMdliq1RdG6f39%2BSlKCxiL7rxnULBLF9DUWynE2%2FZIozWndgxXyjYg8IGZAhjxlwc0IhvBTZqG0pip4%2FGAwys1mcARyNzAI7%2FfMUTZGg%2BhDDSY2WghIWCgCz1VaFwFMZT%2BYjoTp%2FgnSbJmIKrRP%2Fzg8lbChl3sscheNUZK0gq7pdh9JU6EUcA%2FOtS%2BScNnatfAL6afDCi4jdCA6OR%2B7D8jLRYDzjfjgzRBz%2BXmIruJ5ejJobLE05pCpmSg0B0KggKzPENZBz5O%2FlNQWkQ4DrxvnZYRaL8EdHZJ2jVbMI%2FuW9R4TpQiV9CgSlLXufl99onjl1ElIbuYmryxCjznWJJSTxG%2FCr8s8zZnMpIMZ5Uk3Fb8essUqFd%2F6T0vwdKku2HpecEK3iVkc0%2Fu%2BZobwP%2FUQyzY8rpBGd9RYT%2BUDje8luJL5ycg3LLa0EzeRGiKtKfsNWKIFh0uEEGmFqd3Y6rMWF9XQeCiDuff87zlp3s97veJbRiXnmUuxi7jyUmOG2daSKgXvJ72FPu6uEOEnePr0jEQJzyulQmEYRP18BlEaTAutz46EhLhb8G6CJid0%2FcBN64bDMZAwPoTXunQg27fUEJT1uFDFfLLDmJZB%2FQYCBDe5bpx9NMTMICH1b8GOqUBZWi6pmd5RVEjQQe%2FCAIT8O%2Ff3N6A0bQkeeyzwmXaYzxR0mgXIbS8CpYxZxX6dq2ApBg%2BSWjOPc30Te0udlcdU6QOiLToLqfzCI12NITva8zPOvWQaoND0rUFBvp3CGdSR7VSKYij%2B7zhIhvICHc%2BzfXvu59W1mUdi91smILu17QUcgSvvVLUs%2F3aGE5pz55J%2FLP5aNPBQL1Wv1Du4EYnr%2BVAkAOl&X-Amz-Signature=3ab7c68284dbc3b3746b85ad9209c4958c2c7d212645f8ec1f251e4b76782ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMIOZ3J%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBGQRz4X%2B1N7anDzo9FZ6ufkcDLHdYw5VVH3v38ZCb06AiEAnvdhmLqAAnq611GhWzvqu3usAL7hM2vrU91OrlCFYRIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBD8ZFsIycs7Wu%2FSVCrcA7jg3IaMdliq1RdG6f39%2BSlKCxiL7rxnULBLF9DUWynE2%2FZIozWndgxXyjYg8IGZAhjxlwc0IhvBTZqG0pip4%2FGAwys1mcARyNzAI7%2FfMUTZGg%2BhDDSY2WghIWCgCz1VaFwFMZT%2BYjoTp%2FgnSbJmIKrRP%2Fzg8lbChl3sscheNUZK0gq7pdh9JU6EUcA%2FOtS%2BScNnatfAL6afDCi4jdCA6OR%2B7D8jLRYDzjfjgzRBz%2BXmIruJ5ejJobLE05pCpmSg0B0KggKzPENZBz5O%2FlNQWkQ4DrxvnZYRaL8EdHZJ2jVbMI%2FuW9R4TpQiV9CgSlLXufl99onjl1ElIbuYmryxCjznWJJSTxG%2FCr8s8zZnMpIMZ5Uk3Fb8essUqFd%2F6T0vwdKku2HpecEK3iVkc0%2Fu%2BZobwP%2FUQyzY8rpBGd9RYT%2BUDje8luJL5ycg3LLa0EzeRGiKtKfsNWKIFh0uEEGmFqd3Y6rMWF9XQeCiDuff87zlp3s97veJbRiXnmUuxi7jyUmOG2daSKgXvJ72FPu6uEOEnePr0jEQJzyulQmEYRP18BlEaTAutz46EhLhb8G6CJid0%2FcBN64bDMZAwPoTXunQg27fUEJT1uFDFfLLDmJZB%2FQYCBDe5bpx9NMTMICH1b8GOqUBZWi6pmd5RVEjQQe%2FCAIT8O%2Ff3N6A0bQkeeyzwmXaYzxR0mgXIbS8CpYxZxX6dq2ApBg%2BSWjOPc30Te0udlcdU6QOiLToLqfzCI12NITva8zPOvWQaoND0rUFBvp3CGdSR7VSKYij%2B7zhIhvICHc%2BzfXvu59W1mUdi91smILu17QUcgSvvVLUs%2F3aGE5pz55J%2FLP5aNPBQL1Wv1Du4EYnr%2BVAkAOl&X-Amz-Signature=53a8a1556460f7a3afc9ee99c4460c42f5237c2a3c21bc2427fc837c48ea608b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMIOZ3J%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBGQRz4X%2B1N7anDzo9FZ6ufkcDLHdYw5VVH3v38ZCb06AiEAnvdhmLqAAnq611GhWzvqu3usAL7hM2vrU91OrlCFYRIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBD8ZFsIycs7Wu%2FSVCrcA7jg3IaMdliq1RdG6f39%2BSlKCxiL7rxnULBLF9DUWynE2%2FZIozWndgxXyjYg8IGZAhjxlwc0IhvBTZqG0pip4%2FGAwys1mcARyNzAI7%2FfMUTZGg%2BhDDSY2WghIWCgCz1VaFwFMZT%2BYjoTp%2FgnSbJmIKrRP%2Fzg8lbChl3sscheNUZK0gq7pdh9JU6EUcA%2FOtS%2BScNnatfAL6afDCi4jdCA6OR%2B7D8jLRYDzjfjgzRBz%2BXmIruJ5ejJobLE05pCpmSg0B0KggKzPENZBz5O%2FlNQWkQ4DrxvnZYRaL8EdHZJ2jVbMI%2FuW9R4TpQiV9CgSlLXufl99onjl1ElIbuYmryxCjznWJJSTxG%2FCr8s8zZnMpIMZ5Uk3Fb8essUqFd%2F6T0vwdKku2HpecEK3iVkc0%2Fu%2BZobwP%2FUQyzY8rpBGd9RYT%2BUDje8luJL5ycg3LLa0EzeRGiKtKfsNWKIFh0uEEGmFqd3Y6rMWF9XQeCiDuff87zlp3s97veJbRiXnmUuxi7jyUmOG2daSKgXvJ72FPu6uEOEnePr0jEQJzyulQmEYRP18BlEaTAutz46EhLhb8G6CJid0%2FcBN64bDMZAwPoTXunQg27fUEJT1uFDFfLLDmJZB%2FQYCBDe5bpx9NMTMICH1b8GOqUBZWi6pmd5RVEjQQe%2FCAIT8O%2Ff3N6A0bQkeeyzwmXaYzxR0mgXIbS8CpYxZxX6dq2ApBg%2BSWjOPc30Te0udlcdU6QOiLToLqfzCI12NITva8zPOvWQaoND0rUFBvp3CGdSR7VSKYij%2B7zhIhvICHc%2BzfXvu59W1mUdi91smILu17QUcgSvvVLUs%2F3aGE5pz55J%2FLP5aNPBQL1Wv1Du4EYnr%2BVAkAOl&X-Amz-Signature=ad9965273dbb3123acc187e12554df31d41de14ce82542468c8813d2f1607d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
