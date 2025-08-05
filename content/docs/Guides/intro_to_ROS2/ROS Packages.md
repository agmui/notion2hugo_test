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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R35J2GIT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIA54%2FqzF%2BiLxANKyJMgafuD8p6XWMgeX9nJ3v1MxoLvyAiAj2QlR3XGk4H6c%2FCSz0hxinKxlpw2hidA%2Fx6KBAefSuir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMZjR%2FlCqxBt5D7iltKtwDdLNcJ6IohpFb4EgACHSpB3oc5T4qzrkp%2Ffu9q1cfYAAVDAFqxrtMEBTUJ1tMtb%2FD7%2BK7J%2Bu3Aa%2BczARGNfkL0atRXuwQ9u39n3R8%2BFwCVscW7kk798XQyZ%2F2xDa%2FnO5MOyjDb3wjtGz5PTePDA42K4jJ%2BugxUO64GBh%2FIBDrkjC5EfW6sxw8IobBhKQr0HifnXHd6jzyByW2RUL26HfKSqziDAeBVe6oo9%2BNHBVKfFJx8Hqo%2BDI50LbSEQAKe%2BsZNfQiCBFAkdHORnUW%2BN9v2VeXjv1ClFHkRuY0Cbf4KRFEDvBl2bR7AJzpZgpwxD0H8jG1prn%2BzFTdvuB6tqfAB1hoF2sQoAA6cix%2B%2F17mId0epB3RkOPwvFA7F41n%2FwwV%2FjfwaPUlD9eI4ts0vGVAiTJeZXd360yZZBjLpxjc%2FdWVJaLGpjZcFSzfSPg8Ad7JSXNrccDceW%2FImOch7ryU8dkAvqOtTvpw6gMyAHOWGBCEkUgxOXN%2FTmYp91widpj0Frwpu4Jj43ulyZtnPvsGEWDcS8UNVcgAO5EnNEMg3NDVBsPuLUQBR91efqCOwqOJXjRKtqvvCFc7wC9LdkuNA%2BorRSMwGETAYg7efHtlR492C1bOGuY4YCwF834w7eHJxAY6pgGBg6371zforellAhSv4D8xwekvdDvi1Z9J3UWc1dvtoKQlcUCudGydF0Dn%2FiuFLcFo3bRJTZyag8hYaxDzt%2FUNCcXgU9Mxu5BnAqRiczszXamtejCZbRmLdC6JszzUQH8esLFb0Vf8nxoPVHUNB4wb6xyCs7fl0DMVDshd8%2FCMLz57fiPEzVJlViVEXKyklDNHRBkKQXIwFNsKVKmOyfLYqtLbq4nW&X-Amz-Signature=1ed08cea052e0ebe2b90103ddb7e95934679da5960bc137efbc05db42a9011a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R35J2GIT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIA54%2FqzF%2BiLxANKyJMgafuD8p6XWMgeX9nJ3v1MxoLvyAiAj2QlR3XGk4H6c%2FCSz0hxinKxlpw2hidA%2Fx6KBAefSuir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMZjR%2FlCqxBt5D7iltKtwDdLNcJ6IohpFb4EgACHSpB3oc5T4qzrkp%2Ffu9q1cfYAAVDAFqxrtMEBTUJ1tMtb%2FD7%2BK7J%2Bu3Aa%2BczARGNfkL0atRXuwQ9u39n3R8%2BFwCVscW7kk798XQyZ%2F2xDa%2FnO5MOyjDb3wjtGz5PTePDA42K4jJ%2BugxUO64GBh%2FIBDrkjC5EfW6sxw8IobBhKQr0HifnXHd6jzyByW2RUL26HfKSqziDAeBVe6oo9%2BNHBVKfFJx8Hqo%2BDI50LbSEQAKe%2BsZNfQiCBFAkdHORnUW%2BN9v2VeXjv1ClFHkRuY0Cbf4KRFEDvBl2bR7AJzpZgpwxD0H8jG1prn%2BzFTdvuB6tqfAB1hoF2sQoAA6cix%2B%2F17mId0epB3RkOPwvFA7F41n%2FwwV%2FjfwaPUlD9eI4ts0vGVAiTJeZXd360yZZBjLpxjc%2FdWVJaLGpjZcFSzfSPg8Ad7JSXNrccDceW%2FImOch7ryU8dkAvqOtTvpw6gMyAHOWGBCEkUgxOXN%2FTmYp91widpj0Frwpu4Jj43ulyZtnPvsGEWDcS8UNVcgAO5EnNEMg3NDVBsPuLUQBR91efqCOwqOJXjRKtqvvCFc7wC9LdkuNA%2BorRSMwGETAYg7efHtlR492C1bOGuY4YCwF834w7eHJxAY6pgGBg6371zforellAhSv4D8xwekvdDvi1Z9J3UWc1dvtoKQlcUCudGydF0Dn%2FiuFLcFo3bRJTZyag8hYaxDzt%2FUNCcXgU9Mxu5BnAqRiczszXamtejCZbRmLdC6JszzUQH8esLFb0Vf8nxoPVHUNB4wb6xyCs7fl0DMVDshd8%2FCMLz57fiPEzVJlViVEXKyklDNHRBkKQXIwFNsKVKmOyfLYqtLbq4nW&X-Amz-Signature=dbf5be3ec9eb91ab361a7b422ede8ac2677f53fb2be54b9be29825a8e7f6945b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R35J2GIT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIA54%2FqzF%2BiLxANKyJMgafuD8p6XWMgeX9nJ3v1MxoLvyAiAj2QlR3XGk4H6c%2FCSz0hxinKxlpw2hidA%2Fx6KBAefSuir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMZjR%2FlCqxBt5D7iltKtwDdLNcJ6IohpFb4EgACHSpB3oc5T4qzrkp%2Ffu9q1cfYAAVDAFqxrtMEBTUJ1tMtb%2FD7%2BK7J%2Bu3Aa%2BczARGNfkL0atRXuwQ9u39n3R8%2BFwCVscW7kk798XQyZ%2F2xDa%2FnO5MOyjDb3wjtGz5PTePDA42K4jJ%2BugxUO64GBh%2FIBDrkjC5EfW6sxw8IobBhKQr0HifnXHd6jzyByW2RUL26HfKSqziDAeBVe6oo9%2BNHBVKfFJx8Hqo%2BDI50LbSEQAKe%2BsZNfQiCBFAkdHORnUW%2BN9v2VeXjv1ClFHkRuY0Cbf4KRFEDvBl2bR7AJzpZgpwxD0H8jG1prn%2BzFTdvuB6tqfAB1hoF2sQoAA6cix%2B%2F17mId0epB3RkOPwvFA7F41n%2FwwV%2FjfwaPUlD9eI4ts0vGVAiTJeZXd360yZZBjLpxjc%2FdWVJaLGpjZcFSzfSPg8Ad7JSXNrccDceW%2FImOch7ryU8dkAvqOtTvpw6gMyAHOWGBCEkUgxOXN%2FTmYp91widpj0Frwpu4Jj43ulyZtnPvsGEWDcS8UNVcgAO5EnNEMg3NDVBsPuLUQBR91efqCOwqOJXjRKtqvvCFc7wC9LdkuNA%2BorRSMwGETAYg7efHtlR492C1bOGuY4YCwF834w7eHJxAY6pgGBg6371zforellAhSv4D8xwekvdDvi1Z9J3UWc1dvtoKQlcUCudGydF0Dn%2FiuFLcFo3bRJTZyag8hYaxDzt%2FUNCcXgU9Mxu5BnAqRiczszXamtejCZbRmLdC6JszzUQH8esLFb0Vf8nxoPVHUNB4wb6xyCs7fl0DMVDshd8%2FCMLz57fiPEzVJlViVEXKyklDNHRBkKQXIwFNsKVKmOyfLYqtLbq4nW&X-Amz-Signature=377171c9f6f9e7025f67fededcbb66ef664de1fb6464d44f944caf9cbfc2cd7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R35J2GIT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIA54%2FqzF%2BiLxANKyJMgafuD8p6XWMgeX9nJ3v1MxoLvyAiAj2QlR3XGk4H6c%2FCSz0hxinKxlpw2hidA%2Fx6KBAefSuir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMZjR%2FlCqxBt5D7iltKtwDdLNcJ6IohpFb4EgACHSpB3oc5T4qzrkp%2Ffu9q1cfYAAVDAFqxrtMEBTUJ1tMtb%2FD7%2BK7J%2Bu3Aa%2BczARGNfkL0atRXuwQ9u39n3R8%2BFwCVscW7kk798XQyZ%2F2xDa%2FnO5MOyjDb3wjtGz5PTePDA42K4jJ%2BugxUO64GBh%2FIBDrkjC5EfW6sxw8IobBhKQr0HifnXHd6jzyByW2RUL26HfKSqziDAeBVe6oo9%2BNHBVKfFJx8Hqo%2BDI50LbSEQAKe%2BsZNfQiCBFAkdHORnUW%2BN9v2VeXjv1ClFHkRuY0Cbf4KRFEDvBl2bR7AJzpZgpwxD0H8jG1prn%2BzFTdvuB6tqfAB1hoF2sQoAA6cix%2B%2F17mId0epB3RkOPwvFA7F41n%2FwwV%2FjfwaPUlD9eI4ts0vGVAiTJeZXd360yZZBjLpxjc%2FdWVJaLGpjZcFSzfSPg8Ad7JSXNrccDceW%2FImOch7ryU8dkAvqOtTvpw6gMyAHOWGBCEkUgxOXN%2FTmYp91widpj0Frwpu4Jj43ulyZtnPvsGEWDcS8UNVcgAO5EnNEMg3NDVBsPuLUQBR91efqCOwqOJXjRKtqvvCFc7wC9LdkuNA%2BorRSMwGETAYg7efHtlR492C1bOGuY4YCwF834w7eHJxAY6pgGBg6371zforellAhSv4D8xwekvdDvi1Z9J3UWc1dvtoKQlcUCudGydF0Dn%2FiuFLcFo3bRJTZyag8hYaxDzt%2FUNCcXgU9Mxu5BnAqRiczszXamtejCZbRmLdC6JszzUQH8esLFb0Vf8nxoPVHUNB4wb6xyCs7fl0DMVDshd8%2FCMLz57fiPEzVJlViVEXKyklDNHRBkKQXIwFNsKVKmOyfLYqtLbq4nW&X-Amz-Signature=743660c6c41c5bcff0653c9f2fe82654073ddc2e2ebd3f76dcd0dae23fdea936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R35J2GIT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIA54%2FqzF%2BiLxANKyJMgafuD8p6XWMgeX9nJ3v1MxoLvyAiAj2QlR3XGk4H6c%2FCSz0hxinKxlpw2hidA%2Fx6KBAefSuir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMZjR%2FlCqxBt5D7iltKtwDdLNcJ6IohpFb4EgACHSpB3oc5T4qzrkp%2Ffu9q1cfYAAVDAFqxrtMEBTUJ1tMtb%2FD7%2BK7J%2Bu3Aa%2BczARGNfkL0atRXuwQ9u39n3R8%2BFwCVscW7kk798XQyZ%2F2xDa%2FnO5MOyjDb3wjtGz5PTePDA42K4jJ%2BugxUO64GBh%2FIBDrkjC5EfW6sxw8IobBhKQr0HifnXHd6jzyByW2RUL26HfKSqziDAeBVe6oo9%2BNHBVKfFJx8Hqo%2BDI50LbSEQAKe%2BsZNfQiCBFAkdHORnUW%2BN9v2VeXjv1ClFHkRuY0Cbf4KRFEDvBl2bR7AJzpZgpwxD0H8jG1prn%2BzFTdvuB6tqfAB1hoF2sQoAA6cix%2B%2F17mId0epB3RkOPwvFA7F41n%2FwwV%2FjfwaPUlD9eI4ts0vGVAiTJeZXd360yZZBjLpxjc%2FdWVJaLGpjZcFSzfSPg8Ad7JSXNrccDceW%2FImOch7ryU8dkAvqOtTvpw6gMyAHOWGBCEkUgxOXN%2FTmYp91widpj0Frwpu4Jj43ulyZtnPvsGEWDcS8UNVcgAO5EnNEMg3NDVBsPuLUQBR91efqCOwqOJXjRKtqvvCFc7wC9LdkuNA%2BorRSMwGETAYg7efHtlR492C1bOGuY4YCwF834w7eHJxAY6pgGBg6371zforellAhSv4D8xwekvdDvi1Z9J3UWc1dvtoKQlcUCudGydF0Dn%2FiuFLcFo3bRJTZyag8hYaxDzt%2FUNCcXgU9Mxu5BnAqRiczszXamtejCZbRmLdC6JszzUQH8esLFb0Vf8nxoPVHUNB4wb6xyCs7fl0DMVDshd8%2FCMLz57fiPEzVJlViVEXKyklDNHRBkKQXIwFNsKVKmOyfLYqtLbq4nW&X-Amz-Signature=cdefd8d48d1caa95cf9a540951b37639ff234cfc26707a03b894fd9de6da3344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R35J2GIT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIA54%2FqzF%2BiLxANKyJMgafuD8p6XWMgeX9nJ3v1MxoLvyAiAj2QlR3XGk4H6c%2FCSz0hxinKxlpw2hidA%2Fx6KBAefSuir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMZjR%2FlCqxBt5D7iltKtwDdLNcJ6IohpFb4EgACHSpB3oc5T4qzrkp%2Ffu9q1cfYAAVDAFqxrtMEBTUJ1tMtb%2FD7%2BK7J%2Bu3Aa%2BczARGNfkL0atRXuwQ9u39n3R8%2BFwCVscW7kk798XQyZ%2F2xDa%2FnO5MOyjDb3wjtGz5PTePDA42K4jJ%2BugxUO64GBh%2FIBDrkjC5EfW6sxw8IobBhKQr0HifnXHd6jzyByW2RUL26HfKSqziDAeBVe6oo9%2BNHBVKfFJx8Hqo%2BDI50LbSEQAKe%2BsZNfQiCBFAkdHORnUW%2BN9v2VeXjv1ClFHkRuY0Cbf4KRFEDvBl2bR7AJzpZgpwxD0H8jG1prn%2BzFTdvuB6tqfAB1hoF2sQoAA6cix%2B%2F17mId0epB3RkOPwvFA7F41n%2FwwV%2FjfwaPUlD9eI4ts0vGVAiTJeZXd360yZZBjLpxjc%2FdWVJaLGpjZcFSzfSPg8Ad7JSXNrccDceW%2FImOch7ryU8dkAvqOtTvpw6gMyAHOWGBCEkUgxOXN%2FTmYp91widpj0Frwpu4Jj43ulyZtnPvsGEWDcS8UNVcgAO5EnNEMg3NDVBsPuLUQBR91efqCOwqOJXjRKtqvvCFc7wC9LdkuNA%2BorRSMwGETAYg7efHtlR492C1bOGuY4YCwF834w7eHJxAY6pgGBg6371zforellAhSv4D8xwekvdDvi1Z9J3UWc1dvtoKQlcUCudGydF0Dn%2FiuFLcFo3bRJTZyag8hYaxDzt%2FUNCcXgU9Mxu5BnAqRiczszXamtejCZbRmLdC6JszzUQH8esLFb0Vf8nxoPVHUNB4wb6xyCs7fl0DMVDshd8%2FCMLz57fiPEzVJlViVEXKyklDNHRBkKQXIwFNsKVKmOyfLYqtLbq4nW&X-Amz-Signature=aba4ddfd630fba319fbb49d5e88e5e48827e0b089aa8a3c0f7aa2cd506244451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R35J2GIT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIA54%2FqzF%2BiLxANKyJMgafuD8p6XWMgeX9nJ3v1MxoLvyAiAj2QlR3XGk4H6c%2FCSz0hxinKxlpw2hidA%2Fx6KBAefSuir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMZjR%2FlCqxBt5D7iltKtwDdLNcJ6IohpFb4EgACHSpB3oc5T4qzrkp%2Ffu9q1cfYAAVDAFqxrtMEBTUJ1tMtb%2FD7%2BK7J%2Bu3Aa%2BczARGNfkL0atRXuwQ9u39n3R8%2BFwCVscW7kk798XQyZ%2F2xDa%2FnO5MOyjDb3wjtGz5PTePDA42K4jJ%2BugxUO64GBh%2FIBDrkjC5EfW6sxw8IobBhKQr0HifnXHd6jzyByW2RUL26HfKSqziDAeBVe6oo9%2BNHBVKfFJx8Hqo%2BDI50LbSEQAKe%2BsZNfQiCBFAkdHORnUW%2BN9v2VeXjv1ClFHkRuY0Cbf4KRFEDvBl2bR7AJzpZgpwxD0H8jG1prn%2BzFTdvuB6tqfAB1hoF2sQoAA6cix%2B%2F17mId0epB3RkOPwvFA7F41n%2FwwV%2FjfwaPUlD9eI4ts0vGVAiTJeZXd360yZZBjLpxjc%2FdWVJaLGpjZcFSzfSPg8Ad7JSXNrccDceW%2FImOch7ryU8dkAvqOtTvpw6gMyAHOWGBCEkUgxOXN%2FTmYp91widpj0Frwpu4Jj43ulyZtnPvsGEWDcS8UNVcgAO5EnNEMg3NDVBsPuLUQBR91efqCOwqOJXjRKtqvvCFc7wC9LdkuNA%2BorRSMwGETAYg7efHtlR492C1bOGuY4YCwF834w7eHJxAY6pgGBg6371zforellAhSv4D8xwekvdDvi1Z9J3UWc1dvtoKQlcUCudGydF0Dn%2FiuFLcFo3bRJTZyag8hYaxDzt%2FUNCcXgU9Mxu5BnAqRiczszXamtejCZbRmLdC6JszzUQH8esLFb0Vf8nxoPVHUNB4wb6xyCs7fl0DMVDshd8%2FCMLz57fiPEzVJlViVEXKyklDNHRBkKQXIwFNsKVKmOyfLYqtLbq4nW&X-Amz-Signature=8f50f998818b43e2675319dbd3f911a608ea2b56aed827b94e0cd86733257ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
