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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5FILVOY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG41yXD47sTpnZHQKES%2BRt0fU6N7o3ibYo43vgz3JAJgIgdQZiLgKrmSNZqyoUFgTuTkQI3a4j2azkxvyvIDjdj4IqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTJhBrb5BtnO0QaUircA16Sf2AUvO4giJiGKpT5nwEoLK2JyzONwKQZFcmItL3cvxqRK%2B6cLpambqNiA8iB21ikUCl1ClkbWNfOBJb0q0ovyxgXmmpo%2B2y%2B%2B8GMwHO9qjer7mgN1nLh2ZJkLuobGt9UAR%2FseETbv%2F7rEFAF7Xq9pz6T3%2BFx6YcU%2BcmOjtyB5giQT6Sywr7ePb3jC9%2FImwxDN%2FcKBHIZUZhq0%2Fzk7QlzqRxyy2zuJXUDbcbJYVlizKmsx%2BVEO8LoP%2FjkPaL%2FMRWT%2BIAZWHo%2FmT4zzh%2FmUSk66%2FDDYuM3m6kz%2FNc%2Bf99kkITTTTpuWf%2Bvc403way30vIV5Mh7MumHY1FS4ehoX0GHFRY2Th%2BnilaQGy%2FF1kXL%2FJqj4LiI271XsXJbTt1q4GBrPgNsNcNwloidy1XIaNzhqTdRtoXGj%2FXSZI6BUPXbqb8gKDAnnIi%2BqewUduWehsDNzd1jVbl5ebG8LQ%2FZJbofTDN259QUxpkLLoblLRQUeGNXf33pMMYjtvNxktvDqaBtrBDWhetAlE%2Bjb1BY6cc4S%2Fi%2BhHqmHLxSzBQ941e1oMLvzKMuaBiCtLZpht1aMc3Vya8h9MF9k7sEgDtE5RSxUZp%2FsldD4n1IoFN7CxFdxyLPQLdgzNaxFpo7MI%2BOib8GOqUB%2FDQpqA2bnaywqtFj0Y%2BV%2BrpFRuXY2665k%2BKM285F7bXQRi0YJvdqtWX97Io7iorPx58E8oclal%2FRuE8Xpwf4%2BvNkcIpvOgyKQSJY9RBv1O5BYYgqHm2J1N2IDA2fEvL%2Bl06LZoegx04SKT7CVGMAlnDQX7K%2F3XopE6zfpZbZ4a52mYRbnfGAVbkJJPkxyMsRXIoZwRMyl6%2B7UPOWLBt22tHMgf49&X-Amz-Signature=328785a57065598554277a547d406ea9b4ccf51f970fc33d1c57b8b897f997a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5FILVOY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG41yXD47sTpnZHQKES%2BRt0fU6N7o3ibYo43vgz3JAJgIgdQZiLgKrmSNZqyoUFgTuTkQI3a4j2azkxvyvIDjdj4IqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTJhBrb5BtnO0QaUircA16Sf2AUvO4giJiGKpT5nwEoLK2JyzONwKQZFcmItL3cvxqRK%2B6cLpambqNiA8iB21ikUCl1ClkbWNfOBJb0q0ovyxgXmmpo%2B2y%2B%2B8GMwHO9qjer7mgN1nLh2ZJkLuobGt9UAR%2FseETbv%2F7rEFAF7Xq9pz6T3%2BFx6YcU%2BcmOjtyB5giQT6Sywr7ePb3jC9%2FImwxDN%2FcKBHIZUZhq0%2Fzk7QlzqRxyy2zuJXUDbcbJYVlizKmsx%2BVEO8LoP%2FjkPaL%2FMRWT%2BIAZWHo%2FmT4zzh%2FmUSk66%2FDDYuM3m6kz%2FNc%2Bf99kkITTTTpuWf%2Bvc403way30vIV5Mh7MumHY1FS4ehoX0GHFRY2Th%2BnilaQGy%2FF1kXL%2FJqj4LiI271XsXJbTt1q4GBrPgNsNcNwloidy1XIaNzhqTdRtoXGj%2FXSZI6BUPXbqb8gKDAnnIi%2BqewUduWehsDNzd1jVbl5ebG8LQ%2FZJbofTDN259QUxpkLLoblLRQUeGNXf33pMMYjtvNxktvDqaBtrBDWhetAlE%2Bjb1BY6cc4S%2Fi%2BhHqmHLxSzBQ941e1oMLvzKMuaBiCtLZpht1aMc3Vya8h9MF9k7sEgDtE5RSxUZp%2FsldD4n1IoFN7CxFdxyLPQLdgzNaxFpo7MI%2BOib8GOqUB%2FDQpqA2bnaywqtFj0Y%2BV%2BrpFRuXY2665k%2BKM285F7bXQRi0YJvdqtWX97Io7iorPx58E8oclal%2FRuE8Xpwf4%2BvNkcIpvOgyKQSJY9RBv1O5BYYgqHm2J1N2IDA2fEvL%2Bl06LZoegx04SKT7CVGMAlnDQX7K%2F3XopE6zfpZbZ4a52mYRbnfGAVbkJJPkxyMsRXIoZwRMyl6%2B7UPOWLBt22tHMgf49&X-Amz-Signature=6c4b419b72c5323f725ccc3ea2fabf863afafd89607ff83fa24315af04ac6031&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5FILVOY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG41yXD47sTpnZHQKES%2BRt0fU6N7o3ibYo43vgz3JAJgIgdQZiLgKrmSNZqyoUFgTuTkQI3a4j2azkxvyvIDjdj4IqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTJhBrb5BtnO0QaUircA16Sf2AUvO4giJiGKpT5nwEoLK2JyzONwKQZFcmItL3cvxqRK%2B6cLpambqNiA8iB21ikUCl1ClkbWNfOBJb0q0ovyxgXmmpo%2B2y%2B%2B8GMwHO9qjer7mgN1nLh2ZJkLuobGt9UAR%2FseETbv%2F7rEFAF7Xq9pz6T3%2BFx6YcU%2BcmOjtyB5giQT6Sywr7ePb3jC9%2FImwxDN%2FcKBHIZUZhq0%2Fzk7QlzqRxyy2zuJXUDbcbJYVlizKmsx%2BVEO8LoP%2FjkPaL%2FMRWT%2BIAZWHo%2FmT4zzh%2FmUSk66%2FDDYuM3m6kz%2FNc%2Bf99kkITTTTpuWf%2Bvc403way30vIV5Mh7MumHY1FS4ehoX0GHFRY2Th%2BnilaQGy%2FF1kXL%2FJqj4LiI271XsXJbTt1q4GBrPgNsNcNwloidy1XIaNzhqTdRtoXGj%2FXSZI6BUPXbqb8gKDAnnIi%2BqewUduWehsDNzd1jVbl5ebG8LQ%2FZJbofTDN259QUxpkLLoblLRQUeGNXf33pMMYjtvNxktvDqaBtrBDWhetAlE%2Bjb1BY6cc4S%2Fi%2BhHqmHLxSzBQ941e1oMLvzKMuaBiCtLZpht1aMc3Vya8h9MF9k7sEgDtE5RSxUZp%2FsldD4n1IoFN7CxFdxyLPQLdgzNaxFpo7MI%2BOib8GOqUB%2FDQpqA2bnaywqtFj0Y%2BV%2BrpFRuXY2665k%2BKM285F7bXQRi0YJvdqtWX97Io7iorPx58E8oclal%2FRuE8Xpwf4%2BvNkcIpvOgyKQSJY9RBv1O5BYYgqHm2J1N2IDA2fEvL%2Bl06LZoegx04SKT7CVGMAlnDQX7K%2F3XopE6zfpZbZ4a52mYRbnfGAVbkJJPkxyMsRXIoZwRMyl6%2B7UPOWLBt22tHMgf49&X-Amz-Signature=2367e5823221add9350cc8529feb06b02848b8696b52b0f335d7dc3b593df301&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5FILVOY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG41yXD47sTpnZHQKES%2BRt0fU6N7o3ibYo43vgz3JAJgIgdQZiLgKrmSNZqyoUFgTuTkQI3a4j2azkxvyvIDjdj4IqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTJhBrb5BtnO0QaUircA16Sf2AUvO4giJiGKpT5nwEoLK2JyzONwKQZFcmItL3cvxqRK%2B6cLpambqNiA8iB21ikUCl1ClkbWNfOBJb0q0ovyxgXmmpo%2B2y%2B%2B8GMwHO9qjer7mgN1nLh2ZJkLuobGt9UAR%2FseETbv%2F7rEFAF7Xq9pz6T3%2BFx6YcU%2BcmOjtyB5giQT6Sywr7ePb3jC9%2FImwxDN%2FcKBHIZUZhq0%2Fzk7QlzqRxyy2zuJXUDbcbJYVlizKmsx%2BVEO8LoP%2FjkPaL%2FMRWT%2BIAZWHo%2FmT4zzh%2FmUSk66%2FDDYuM3m6kz%2FNc%2Bf99kkITTTTpuWf%2Bvc403way30vIV5Mh7MumHY1FS4ehoX0GHFRY2Th%2BnilaQGy%2FF1kXL%2FJqj4LiI271XsXJbTt1q4GBrPgNsNcNwloidy1XIaNzhqTdRtoXGj%2FXSZI6BUPXbqb8gKDAnnIi%2BqewUduWehsDNzd1jVbl5ebG8LQ%2FZJbofTDN259QUxpkLLoblLRQUeGNXf33pMMYjtvNxktvDqaBtrBDWhetAlE%2Bjb1BY6cc4S%2Fi%2BhHqmHLxSzBQ941e1oMLvzKMuaBiCtLZpht1aMc3Vya8h9MF9k7sEgDtE5RSxUZp%2FsldD4n1IoFN7CxFdxyLPQLdgzNaxFpo7MI%2BOib8GOqUB%2FDQpqA2bnaywqtFj0Y%2BV%2BrpFRuXY2665k%2BKM285F7bXQRi0YJvdqtWX97Io7iorPx58E8oclal%2FRuE8Xpwf4%2BvNkcIpvOgyKQSJY9RBv1O5BYYgqHm2J1N2IDA2fEvL%2Bl06LZoegx04SKT7CVGMAlnDQX7K%2F3XopE6zfpZbZ4a52mYRbnfGAVbkJJPkxyMsRXIoZwRMyl6%2B7UPOWLBt22tHMgf49&X-Amz-Signature=08aadc2643332475e5d62ec203502d118b157def6cd263f09c4f47a301e8a3dd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5FILVOY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG41yXD47sTpnZHQKES%2BRt0fU6N7o3ibYo43vgz3JAJgIgdQZiLgKrmSNZqyoUFgTuTkQI3a4j2azkxvyvIDjdj4IqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTJhBrb5BtnO0QaUircA16Sf2AUvO4giJiGKpT5nwEoLK2JyzONwKQZFcmItL3cvxqRK%2B6cLpambqNiA8iB21ikUCl1ClkbWNfOBJb0q0ovyxgXmmpo%2B2y%2B%2B8GMwHO9qjer7mgN1nLh2ZJkLuobGt9UAR%2FseETbv%2F7rEFAF7Xq9pz6T3%2BFx6YcU%2BcmOjtyB5giQT6Sywr7ePb3jC9%2FImwxDN%2FcKBHIZUZhq0%2Fzk7QlzqRxyy2zuJXUDbcbJYVlizKmsx%2BVEO8LoP%2FjkPaL%2FMRWT%2BIAZWHo%2FmT4zzh%2FmUSk66%2FDDYuM3m6kz%2FNc%2Bf99kkITTTTpuWf%2Bvc403way30vIV5Mh7MumHY1FS4ehoX0GHFRY2Th%2BnilaQGy%2FF1kXL%2FJqj4LiI271XsXJbTt1q4GBrPgNsNcNwloidy1XIaNzhqTdRtoXGj%2FXSZI6BUPXbqb8gKDAnnIi%2BqewUduWehsDNzd1jVbl5ebG8LQ%2FZJbofTDN259QUxpkLLoblLRQUeGNXf33pMMYjtvNxktvDqaBtrBDWhetAlE%2Bjb1BY6cc4S%2Fi%2BhHqmHLxSzBQ941e1oMLvzKMuaBiCtLZpht1aMc3Vya8h9MF9k7sEgDtE5RSxUZp%2FsldD4n1IoFN7CxFdxyLPQLdgzNaxFpo7MI%2BOib8GOqUB%2FDQpqA2bnaywqtFj0Y%2BV%2BrpFRuXY2665k%2BKM285F7bXQRi0YJvdqtWX97Io7iorPx58E8oclal%2FRuE8Xpwf4%2BvNkcIpvOgyKQSJY9RBv1O5BYYgqHm2J1N2IDA2fEvL%2Bl06LZoegx04SKT7CVGMAlnDQX7K%2F3XopE6zfpZbZ4a52mYRbnfGAVbkJJPkxyMsRXIoZwRMyl6%2B7UPOWLBt22tHMgf49&X-Amz-Signature=01e30d316595e0faacee348d6217dd18eef6207289580316ec7ca45999139476&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5FILVOY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG41yXD47sTpnZHQKES%2BRt0fU6N7o3ibYo43vgz3JAJgIgdQZiLgKrmSNZqyoUFgTuTkQI3a4j2azkxvyvIDjdj4IqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTJhBrb5BtnO0QaUircA16Sf2AUvO4giJiGKpT5nwEoLK2JyzONwKQZFcmItL3cvxqRK%2B6cLpambqNiA8iB21ikUCl1ClkbWNfOBJb0q0ovyxgXmmpo%2B2y%2B%2B8GMwHO9qjer7mgN1nLh2ZJkLuobGt9UAR%2FseETbv%2F7rEFAF7Xq9pz6T3%2BFx6YcU%2BcmOjtyB5giQT6Sywr7ePb3jC9%2FImwxDN%2FcKBHIZUZhq0%2Fzk7QlzqRxyy2zuJXUDbcbJYVlizKmsx%2BVEO8LoP%2FjkPaL%2FMRWT%2BIAZWHo%2FmT4zzh%2FmUSk66%2FDDYuM3m6kz%2FNc%2Bf99kkITTTTpuWf%2Bvc403way30vIV5Mh7MumHY1FS4ehoX0GHFRY2Th%2BnilaQGy%2FF1kXL%2FJqj4LiI271XsXJbTt1q4GBrPgNsNcNwloidy1XIaNzhqTdRtoXGj%2FXSZI6BUPXbqb8gKDAnnIi%2BqewUduWehsDNzd1jVbl5ebG8LQ%2FZJbofTDN259QUxpkLLoblLRQUeGNXf33pMMYjtvNxktvDqaBtrBDWhetAlE%2Bjb1BY6cc4S%2Fi%2BhHqmHLxSzBQ941e1oMLvzKMuaBiCtLZpht1aMc3Vya8h9MF9k7sEgDtE5RSxUZp%2FsldD4n1IoFN7CxFdxyLPQLdgzNaxFpo7MI%2BOib8GOqUB%2FDQpqA2bnaywqtFj0Y%2BV%2BrpFRuXY2665k%2BKM285F7bXQRi0YJvdqtWX97Io7iorPx58E8oclal%2FRuE8Xpwf4%2BvNkcIpvOgyKQSJY9RBv1O5BYYgqHm2J1N2IDA2fEvL%2Bl06LZoegx04SKT7CVGMAlnDQX7K%2F3XopE6zfpZbZ4a52mYRbnfGAVbkJJPkxyMsRXIoZwRMyl6%2B7UPOWLBt22tHMgf49&X-Amz-Signature=deaa65634ae0486fd25cb7c03ac132940d53a4a0302774d17d521920dc6c371a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5FILVOY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG41yXD47sTpnZHQKES%2BRt0fU6N7o3ibYo43vgz3JAJgIgdQZiLgKrmSNZqyoUFgTuTkQI3a4j2azkxvyvIDjdj4IqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTJhBrb5BtnO0QaUircA16Sf2AUvO4giJiGKpT5nwEoLK2JyzONwKQZFcmItL3cvxqRK%2B6cLpambqNiA8iB21ikUCl1ClkbWNfOBJb0q0ovyxgXmmpo%2B2y%2B%2B8GMwHO9qjer7mgN1nLh2ZJkLuobGt9UAR%2FseETbv%2F7rEFAF7Xq9pz6T3%2BFx6YcU%2BcmOjtyB5giQT6Sywr7ePb3jC9%2FImwxDN%2FcKBHIZUZhq0%2Fzk7QlzqRxyy2zuJXUDbcbJYVlizKmsx%2BVEO8LoP%2FjkPaL%2FMRWT%2BIAZWHo%2FmT4zzh%2FmUSk66%2FDDYuM3m6kz%2FNc%2Bf99kkITTTTpuWf%2Bvc403way30vIV5Mh7MumHY1FS4ehoX0GHFRY2Th%2BnilaQGy%2FF1kXL%2FJqj4LiI271XsXJbTt1q4GBrPgNsNcNwloidy1XIaNzhqTdRtoXGj%2FXSZI6BUPXbqb8gKDAnnIi%2BqewUduWehsDNzd1jVbl5ebG8LQ%2FZJbofTDN259QUxpkLLoblLRQUeGNXf33pMMYjtvNxktvDqaBtrBDWhetAlE%2Bjb1BY6cc4S%2Fi%2BhHqmHLxSzBQ941e1oMLvzKMuaBiCtLZpht1aMc3Vya8h9MF9k7sEgDtE5RSxUZp%2FsldD4n1IoFN7CxFdxyLPQLdgzNaxFpo7MI%2BOib8GOqUB%2FDQpqA2bnaywqtFj0Y%2BV%2BrpFRuXY2665k%2BKM285F7bXQRi0YJvdqtWX97Io7iorPx58E8oclal%2FRuE8Xpwf4%2BvNkcIpvOgyKQSJY9RBv1O5BYYgqHm2J1N2IDA2fEvL%2Bl06LZoegx04SKT7CVGMAlnDQX7K%2F3XopE6zfpZbZ4a52mYRbnfGAVbkJJPkxyMsRXIoZwRMyl6%2B7UPOWLBt22tHMgf49&X-Amz-Signature=66e6b3d8a4026e3b2367a822cb9fad59ca59c89571846fb81aca191df7def0b0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
