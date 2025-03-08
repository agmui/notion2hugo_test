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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75RFKOB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDdH5UcI4CCCndUshAai16fFzvSZMR5gMmxMIHQRVG5pAIhALr%2BfOZJ6zQZOuafPT8hfVQiwDg5OkNvtcEM%2BebWMF7vKv8DCGYQABoMNjM3NDIzMTgzODA1IgytFU6iDxV9E9zZNOAq3AM4Amo7okONxGLWMzBWgwe3f3xCCcKEG9SPnI4MqI%2FyrCfL67DPwmGJeIgrAq6YYhmCgiMoalby5tdPTwNnoSyJzQO9hNKr0HZutkrLR3NoPWvVrM%2B6%2FfSTvdUdXLvRf7KK%2F6NiWzi03bZFy0Nj2fy83E9SEsmwNxtVpETYHZ%2FoGbz4b534jBDXUFxqSuQVaUmxkXiZgNGtsiyogJ0rfc%2Fezobd6G%2FwdZJ373ri%2Be6YnXV4i222Ju2bQnfwZbfZL1OolEtEb2Ug0oiIVHPNak2BbYt2ds17zsQgiZ4RWXxUPrq8DpnbRBMhbGBEgvytTVdecBbwoONi9zQNJm7Az2sfCNuVCJVfGe6%2BIzdvu5rWfEDd0yQFqEHus9LC8rQY2K9t4D%2B4IToNn6e2pzyPT52icIhV7vee1srOX5390ShGOn9REpsHWogAYBSE%2B9Ee%2Fb6HfHJEALucWv6KvnQKkEnvwZBOpMShWmU%2BUQdHS0vMT%2F8DVK2vVlE3f0%2B9yzvETLWtxUzY26Bn%2F2qA%2BYJLJrxNXeJl6Wca5eN%2FcCy8PtR5Wrv5Ju13A1Ejs9Grb0dvTpCDE5syU%2FXrDKc3EMR3Sfbg8EKhWF81eVfbXf3A5IQ6Eb9ww%2FvINwkqD2xmujC%2B1LK%2BBjqkARbGHFT3V9W432Ru%2BiPvoicCy3sk6B41r%2FP%2Fw5pNhmp%2BJxGYF7u676kgeN5DOxUgi%2Fc34%2F8lleuS0omzuAh1EZt3fw2NmDQBDlBrPhkkAC24PToT3REgcTLrAwKERrHJmtz2lKyfrceZ8FwLHrHzmaX5v4Y9UZLqET3W3z7QIuDrcOnUXvs4PJ%2F6l7CO1HIDXuWbFKMwHfccmPXtb5r9FQPvrD3p&X-Amz-Signature=334c9b117850d3e1e290dfec05a16369acec079fdf03a29e923019be382a3f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75RFKOB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDdH5UcI4CCCndUshAai16fFzvSZMR5gMmxMIHQRVG5pAIhALr%2BfOZJ6zQZOuafPT8hfVQiwDg5OkNvtcEM%2BebWMF7vKv8DCGYQABoMNjM3NDIzMTgzODA1IgytFU6iDxV9E9zZNOAq3AM4Amo7okONxGLWMzBWgwe3f3xCCcKEG9SPnI4MqI%2FyrCfL67DPwmGJeIgrAq6YYhmCgiMoalby5tdPTwNnoSyJzQO9hNKr0HZutkrLR3NoPWvVrM%2B6%2FfSTvdUdXLvRf7KK%2F6NiWzi03bZFy0Nj2fy83E9SEsmwNxtVpETYHZ%2FoGbz4b534jBDXUFxqSuQVaUmxkXiZgNGtsiyogJ0rfc%2Fezobd6G%2FwdZJ373ri%2Be6YnXV4i222Ju2bQnfwZbfZL1OolEtEb2Ug0oiIVHPNak2BbYt2ds17zsQgiZ4RWXxUPrq8DpnbRBMhbGBEgvytTVdecBbwoONi9zQNJm7Az2sfCNuVCJVfGe6%2BIzdvu5rWfEDd0yQFqEHus9LC8rQY2K9t4D%2B4IToNn6e2pzyPT52icIhV7vee1srOX5390ShGOn9REpsHWogAYBSE%2B9Ee%2Fb6HfHJEALucWv6KvnQKkEnvwZBOpMShWmU%2BUQdHS0vMT%2F8DVK2vVlE3f0%2B9yzvETLWtxUzY26Bn%2F2qA%2BYJLJrxNXeJl6Wca5eN%2FcCy8PtR5Wrv5Ju13A1Ejs9Grb0dvTpCDE5syU%2FXrDKc3EMR3Sfbg8EKhWF81eVfbXf3A5IQ6Eb9ww%2FvINwkqD2xmujC%2B1LK%2BBjqkARbGHFT3V9W432Ru%2BiPvoicCy3sk6B41r%2FP%2Fw5pNhmp%2BJxGYF7u676kgeN5DOxUgi%2Fc34%2F8lleuS0omzuAh1EZt3fw2NmDQBDlBrPhkkAC24PToT3REgcTLrAwKERrHJmtz2lKyfrceZ8FwLHrHzmaX5v4Y9UZLqET3W3z7QIuDrcOnUXvs4PJ%2F6l7CO1HIDXuWbFKMwHfccmPXtb5r9FQPvrD3p&X-Amz-Signature=2a3f7d56662251fd8a9b3e1d2369e5d3a54108492927460b26a46b9c3cc55871&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75RFKOB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDdH5UcI4CCCndUshAai16fFzvSZMR5gMmxMIHQRVG5pAIhALr%2BfOZJ6zQZOuafPT8hfVQiwDg5OkNvtcEM%2BebWMF7vKv8DCGYQABoMNjM3NDIzMTgzODA1IgytFU6iDxV9E9zZNOAq3AM4Amo7okONxGLWMzBWgwe3f3xCCcKEG9SPnI4MqI%2FyrCfL67DPwmGJeIgrAq6YYhmCgiMoalby5tdPTwNnoSyJzQO9hNKr0HZutkrLR3NoPWvVrM%2B6%2FfSTvdUdXLvRf7KK%2F6NiWzi03bZFy0Nj2fy83E9SEsmwNxtVpETYHZ%2FoGbz4b534jBDXUFxqSuQVaUmxkXiZgNGtsiyogJ0rfc%2Fezobd6G%2FwdZJ373ri%2Be6YnXV4i222Ju2bQnfwZbfZL1OolEtEb2Ug0oiIVHPNak2BbYt2ds17zsQgiZ4RWXxUPrq8DpnbRBMhbGBEgvytTVdecBbwoONi9zQNJm7Az2sfCNuVCJVfGe6%2BIzdvu5rWfEDd0yQFqEHus9LC8rQY2K9t4D%2B4IToNn6e2pzyPT52icIhV7vee1srOX5390ShGOn9REpsHWogAYBSE%2B9Ee%2Fb6HfHJEALucWv6KvnQKkEnvwZBOpMShWmU%2BUQdHS0vMT%2F8DVK2vVlE3f0%2B9yzvETLWtxUzY26Bn%2F2qA%2BYJLJrxNXeJl6Wca5eN%2FcCy8PtR5Wrv5Ju13A1Ejs9Grb0dvTpCDE5syU%2FXrDKc3EMR3Sfbg8EKhWF81eVfbXf3A5IQ6Eb9ww%2FvINwkqD2xmujC%2B1LK%2BBjqkARbGHFT3V9W432Ru%2BiPvoicCy3sk6B41r%2FP%2Fw5pNhmp%2BJxGYF7u676kgeN5DOxUgi%2Fc34%2F8lleuS0omzuAh1EZt3fw2NmDQBDlBrPhkkAC24PToT3REgcTLrAwKERrHJmtz2lKyfrceZ8FwLHrHzmaX5v4Y9UZLqET3W3z7QIuDrcOnUXvs4PJ%2F6l7CO1HIDXuWbFKMwHfccmPXtb5r9FQPvrD3p&X-Amz-Signature=26b01884d895aef5e0deb1ed19e80f226e1d822691aed32afb710d6bfde3693d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75RFKOB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDdH5UcI4CCCndUshAai16fFzvSZMR5gMmxMIHQRVG5pAIhALr%2BfOZJ6zQZOuafPT8hfVQiwDg5OkNvtcEM%2BebWMF7vKv8DCGYQABoMNjM3NDIzMTgzODA1IgytFU6iDxV9E9zZNOAq3AM4Amo7okONxGLWMzBWgwe3f3xCCcKEG9SPnI4MqI%2FyrCfL67DPwmGJeIgrAq6YYhmCgiMoalby5tdPTwNnoSyJzQO9hNKr0HZutkrLR3NoPWvVrM%2B6%2FfSTvdUdXLvRf7KK%2F6NiWzi03bZFy0Nj2fy83E9SEsmwNxtVpETYHZ%2FoGbz4b534jBDXUFxqSuQVaUmxkXiZgNGtsiyogJ0rfc%2Fezobd6G%2FwdZJ373ri%2Be6YnXV4i222Ju2bQnfwZbfZL1OolEtEb2Ug0oiIVHPNak2BbYt2ds17zsQgiZ4RWXxUPrq8DpnbRBMhbGBEgvytTVdecBbwoONi9zQNJm7Az2sfCNuVCJVfGe6%2BIzdvu5rWfEDd0yQFqEHus9LC8rQY2K9t4D%2B4IToNn6e2pzyPT52icIhV7vee1srOX5390ShGOn9REpsHWogAYBSE%2B9Ee%2Fb6HfHJEALucWv6KvnQKkEnvwZBOpMShWmU%2BUQdHS0vMT%2F8DVK2vVlE3f0%2B9yzvETLWtxUzY26Bn%2F2qA%2BYJLJrxNXeJl6Wca5eN%2FcCy8PtR5Wrv5Ju13A1Ejs9Grb0dvTpCDE5syU%2FXrDKc3EMR3Sfbg8EKhWF81eVfbXf3A5IQ6Eb9ww%2FvINwkqD2xmujC%2B1LK%2BBjqkARbGHFT3V9W432Ru%2BiPvoicCy3sk6B41r%2FP%2Fw5pNhmp%2BJxGYF7u676kgeN5DOxUgi%2Fc34%2F8lleuS0omzuAh1EZt3fw2NmDQBDlBrPhkkAC24PToT3REgcTLrAwKERrHJmtz2lKyfrceZ8FwLHrHzmaX5v4Y9UZLqET3W3z7QIuDrcOnUXvs4PJ%2F6l7CO1HIDXuWbFKMwHfccmPXtb5r9FQPvrD3p&X-Amz-Signature=78c8b7e8af917c405d8398505345274934093137c12bc49dbb394ec3a99eac37&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75RFKOB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDdH5UcI4CCCndUshAai16fFzvSZMR5gMmxMIHQRVG5pAIhALr%2BfOZJ6zQZOuafPT8hfVQiwDg5OkNvtcEM%2BebWMF7vKv8DCGYQABoMNjM3NDIzMTgzODA1IgytFU6iDxV9E9zZNOAq3AM4Amo7okONxGLWMzBWgwe3f3xCCcKEG9SPnI4MqI%2FyrCfL67DPwmGJeIgrAq6YYhmCgiMoalby5tdPTwNnoSyJzQO9hNKr0HZutkrLR3NoPWvVrM%2B6%2FfSTvdUdXLvRf7KK%2F6NiWzi03bZFy0Nj2fy83E9SEsmwNxtVpETYHZ%2FoGbz4b534jBDXUFxqSuQVaUmxkXiZgNGtsiyogJ0rfc%2Fezobd6G%2FwdZJ373ri%2Be6YnXV4i222Ju2bQnfwZbfZL1OolEtEb2Ug0oiIVHPNak2BbYt2ds17zsQgiZ4RWXxUPrq8DpnbRBMhbGBEgvytTVdecBbwoONi9zQNJm7Az2sfCNuVCJVfGe6%2BIzdvu5rWfEDd0yQFqEHus9LC8rQY2K9t4D%2B4IToNn6e2pzyPT52icIhV7vee1srOX5390ShGOn9REpsHWogAYBSE%2B9Ee%2Fb6HfHJEALucWv6KvnQKkEnvwZBOpMShWmU%2BUQdHS0vMT%2F8DVK2vVlE3f0%2B9yzvETLWtxUzY26Bn%2F2qA%2BYJLJrxNXeJl6Wca5eN%2FcCy8PtR5Wrv5Ju13A1Ejs9Grb0dvTpCDE5syU%2FXrDKc3EMR3Sfbg8EKhWF81eVfbXf3A5IQ6Eb9ww%2FvINwkqD2xmujC%2B1LK%2BBjqkARbGHFT3V9W432Ru%2BiPvoicCy3sk6B41r%2FP%2Fw5pNhmp%2BJxGYF7u676kgeN5DOxUgi%2Fc34%2F8lleuS0omzuAh1EZt3fw2NmDQBDlBrPhkkAC24PToT3REgcTLrAwKERrHJmtz2lKyfrceZ8FwLHrHzmaX5v4Y9UZLqET3W3z7QIuDrcOnUXvs4PJ%2F6l7CO1HIDXuWbFKMwHfccmPXtb5r9FQPvrD3p&X-Amz-Signature=610c5c3c331274df27407d4a0486a5d3c1628cc8dff046737779da14f067b66d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75RFKOB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDdH5UcI4CCCndUshAai16fFzvSZMR5gMmxMIHQRVG5pAIhALr%2BfOZJ6zQZOuafPT8hfVQiwDg5OkNvtcEM%2BebWMF7vKv8DCGYQABoMNjM3NDIzMTgzODA1IgytFU6iDxV9E9zZNOAq3AM4Amo7okONxGLWMzBWgwe3f3xCCcKEG9SPnI4MqI%2FyrCfL67DPwmGJeIgrAq6YYhmCgiMoalby5tdPTwNnoSyJzQO9hNKr0HZutkrLR3NoPWvVrM%2B6%2FfSTvdUdXLvRf7KK%2F6NiWzi03bZFy0Nj2fy83E9SEsmwNxtVpETYHZ%2FoGbz4b534jBDXUFxqSuQVaUmxkXiZgNGtsiyogJ0rfc%2Fezobd6G%2FwdZJ373ri%2Be6YnXV4i222Ju2bQnfwZbfZL1OolEtEb2Ug0oiIVHPNak2BbYt2ds17zsQgiZ4RWXxUPrq8DpnbRBMhbGBEgvytTVdecBbwoONi9zQNJm7Az2sfCNuVCJVfGe6%2BIzdvu5rWfEDd0yQFqEHus9LC8rQY2K9t4D%2B4IToNn6e2pzyPT52icIhV7vee1srOX5390ShGOn9REpsHWogAYBSE%2B9Ee%2Fb6HfHJEALucWv6KvnQKkEnvwZBOpMShWmU%2BUQdHS0vMT%2F8DVK2vVlE3f0%2B9yzvETLWtxUzY26Bn%2F2qA%2BYJLJrxNXeJl6Wca5eN%2FcCy8PtR5Wrv5Ju13A1Ejs9Grb0dvTpCDE5syU%2FXrDKc3EMR3Sfbg8EKhWF81eVfbXf3A5IQ6Eb9ww%2FvINwkqD2xmujC%2B1LK%2BBjqkARbGHFT3V9W432Ru%2BiPvoicCy3sk6B41r%2FP%2Fw5pNhmp%2BJxGYF7u676kgeN5DOxUgi%2Fc34%2F8lleuS0omzuAh1EZt3fw2NmDQBDlBrPhkkAC24PToT3REgcTLrAwKERrHJmtz2lKyfrceZ8FwLHrHzmaX5v4Y9UZLqET3W3z7QIuDrcOnUXvs4PJ%2F6l7CO1HIDXuWbFKMwHfccmPXtb5r9FQPvrD3p&X-Amz-Signature=2f4fe9637f450eeb535b8e1530c9574535eac8865310a6416f3983b3642a9619&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75RFKOB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDdH5UcI4CCCndUshAai16fFzvSZMR5gMmxMIHQRVG5pAIhALr%2BfOZJ6zQZOuafPT8hfVQiwDg5OkNvtcEM%2BebWMF7vKv8DCGYQABoMNjM3NDIzMTgzODA1IgytFU6iDxV9E9zZNOAq3AM4Amo7okONxGLWMzBWgwe3f3xCCcKEG9SPnI4MqI%2FyrCfL67DPwmGJeIgrAq6YYhmCgiMoalby5tdPTwNnoSyJzQO9hNKr0HZutkrLR3NoPWvVrM%2B6%2FfSTvdUdXLvRf7KK%2F6NiWzi03bZFy0Nj2fy83E9SEsmwNxtVpETYHZ%2FoGbz4b534jBDXUFxqSuQVaUmxkXiZgNGtsiyogJ0rfc%2Fezobd6G%2FwdZJ373ri%2Be6YnXV4i222Ju2bQnfwZbfZL1OolEtEb2Ug0oiIVHPNak2BbYt2ds17zsQgiZ4RWXxUPrq8DpnbRBMhbGBEgvytTVdecBbwoONi9zQNJm7Az2sfCNuVCJVfGe6%2BIzdvu5rWfEDd0yQFqEHus9LC8rQY2K9t4D%2B4IToNn6e2pzyPT52icIhV7vee1srOX5390ShGOn9REpsHWogAYBSE%2B9Ee%2Fb6HfHJEALucWv6KvnQKkEnvwZBOpMShWmU%2BUQdHS0vMT%2F8DVK2vVlE3f0%2B9yzvETLWtxUzY26Bn%2F2qA%2BYJLJrxNXeJl6Wca5eN%2FcCy8PtR5Wrv5Ju13A1Ejs9Grb0dvTpCDE5syU%2FXrDKc3EMR3Sfbg8EKhWF81eVfbXf3A5IQ6Eb9ww%2FvINwkqD2xmujC%2B1LK%2BBjqkARbGHFT3V9W432Ru%2BiPvoicCy3sk6B41r%2FP%2Fw5pNhmp%2BJxGYF7u676kgeN5DOxUgi%2Fc34%2F8lleuS0omzuAh1EZt3fw2NmDQBDlBrPhkkAC24PToT3REgcTLrAwKERrHJmtz2lKyfrceZ8FwLHrHzmaX5v4Y9UZLqET3W3z7QIuDrcOnUXvs4PJ%2F6l7CO1HIDXuWbFKMwHfccmPXtb5r9FQPvrD3p&X-Amz-Signature=c2d943589b8b27b41ec6d663aa20bb2728436cb423075aff2b08e6a6fb778ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
