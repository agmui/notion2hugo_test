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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DHCEROX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFhCBxXvmu1g6nbLnKVfEN6SsMewTUxBQ4ViaD%2FhL1XgAiEA68XR4t7bq6a3nK199FnUf2jLN%2BrtVIg42k%2FwU3fhIm0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNBYhAPWic19KV35SrcA3EgFdhDY1hwo9la%2BWjMrvRORGtdCyqH5LeFbDbDBdoGdgr5XZH0wXH4bg5RcKWTnnNM2muG8BRrwvFBmiPVNSVk0DQU9Cs2bmMAPHM2Rwi00V8TrfCL4XmaeRqt%2FJzqq7KS6X4OJWmjOiqqfUGDocuvlDk3r6aaCqUvOm%2BNkwhLoLfS7vW7u37%2B6vUEmSZ4ZX7TEHW7CShP2zhcRNfmmjWQ%2Fp8SfJuN25GV2r5An6ahUtHqW4Szcd2Bz6jzI9wh%2FL0Okk2ebamcW50mKmH1mXBoJyUntSy8XNW089CFYo2gcBQqezFsnMudRpot2P9MVmUS%2FVm91cHtqkcUPZVs7%2FYQFMIYgfesnKCtpW9VE%2BmaFrB0rMQhMwXyqdyqYL7pwWu4gtWHv%2BmWZP0TA8Ql6hLiwrleO7V8zM%2Bwpv3t%2FV4ryFKVw0y%2FSCe1UTkPllFbi1gygHWLd%2F1voF5CNq1AnDuh%2BGMI9fvNUo%2FOtmUJFfeJXs5ZLMHrp3rOPXEa7qvEeaM6b7Il9Rx%2Fl%2FOLucK9Su5IXdQP5ZgVW7LaeNhAbn1bSAZqxm7YNO5rGug2xig7Q4WzEQ1xrhUUbDNhXPLc9%2B40U9W3ea8d4ZQTCqoWl0%2F8L91Xz3rXpBVYEWcxMMer08AGOqUB6S4jLOmRpvXQVHApAQBXdpTmBUO1JlM4xtljx1pusyQDBlZi4bQA9AMU%2FvQL%2Bz3tfYW%2Fys0qjoHBgImCsG8J5QWlPyGMTO%2BrkBqu8iAJoyYz1wD1tp%2Fw3T4HrjS%2FRZoRiMRGzRzUlcHOOa%2FwgjHJT9%2FBPC8FF1pnfGZkCQ00ek7MqglWudCMWkCq0QGfLtktCyZRtFF8vmHjB6opWtEy%2FyQn75wa&X-Amz-Signature=f194fb65d25fe022a0bc1f0acc90c41352f725e2d94567662343365f79084af9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DHCEROX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFhCBxXvmu1g6nbLnKVfEN6SsMewTUxBQ4ViaD%2FhL1XgAiEA68XR4t7bq6a3nK199FnUf2jLN%2BrtVIg42k%2FwU3fhIm0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNBYhAPWic19KV35SrcA3EgFdhDY1hwo9la%2BWjMrvRORGtdCyqH5LeFbDbDBdoGdgr5XZH0wXH4bg5RcKWTnnNM2muG8BRrwvFBmiPVNSVk0DQU9Cs2bmMAPHM2Rwi00V8TrfCL4XmaeRqt%2FJzqq7KS6X4OJWmjOiqqfUGDocuvlDk3r6aaCqUvOm%2BNkwhLoLfS7vW7u37%2B6vUEmSZ4ZX7TEHW7CShP2zhcRNfmmjWQ%2Fp8SfJuN25GV2r5An6ahUtHqW4Szcd2Bz6jzI9wh%2FL0Okk2ebamcW50mKmH1mXBoJyUntSy8XNW089CFYo2gcBQqezFsnMudRpot2P9MVmUS%2FVm91cHtqkcUPZVs7%2FYQFMIYgfesnKCtpW9VE%2BmaFrB0rMQhMwXyqdyqYL7pwWu4gtWHv%2BmWZP0TA8Ql6hLiwrleO7V8zM%2Bwpv3t%2FV4ryFKVw0y%2FSCe1UTkPllFbi1gygHWLd%2F1voF5CNq1AnDuh%2BGMI9fvNUo%2FOtmUJFfeJXs5ZLMHrp3rOPXEa7qvEeaM6b7Il9Rx%2Fl%2FOLucK9Su5IXdQP5ZgVW7LaeNhAbn1bSAZqxm7YNO5rGug2xig7Q4WzEQ1xrhUUbDNhXPLc9%2B40U9W3ea8d4ZQTCqoWl0%2F8L91Xz3rXpBVYEWcxMMer08AGOqUB6S4jLOmRpvXQVHApAQBXdpTmBUO1JlM4xtljx1pusyQDBlZi4bQA9AMU%2FvQL%2Bz3tfYW%2Fys0qjoHBgImCsG8J5QWlPyGMTO%2BrkBqu8iAJoyYz1wD1tp%2Fw3T4HrjS%2FRZoRiMRGzRzUlcHOOa%2FwgjHJT9%2FBPC8FF1pnfGZkCQ00ek7MqglWudCMWkCq0QGfLtktCyZRtFF8vmHjB6opWtEy%2FyQn75wa&X-Amz-Signature=a60e3752b422660341bd0a98ad53ee3e1cca2a3133e57f8a2a15b0d913f6e342&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DHCEROX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFhCBxXvmu1g6nbLnKVfEN6SsMewTUxBQ4ViaD%2FhL1XgAiEA68XR4t7bq6a3nK199FnUf2jLN%2BrtVIg42k%2FwU3fhIm0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNBYhAPWic19KV35SrcA3EgFdhDY1hwo9la%2BWjMrvRORGtdCyqH5LeFbDbDBdoGdgr5XZH0wXH4bg5RcKWTnnNM2muG8BRrwvFBmiPVNSVk0DQU9Cs2bmMAPHM2Rwi00V8TrfCL4XmaeRqt%2FJzqq7KS6X4OJWmjOiqqfUGDocuvlDk3r6aaCqUvOm%2BNkwhLoLfS7vW7u37%2B6vUEmSZ4ZX7TEHW7CShP2zhcRNfmmjWQ%2Fp8SfJuN25GV2r5An6ahUtHqW4Szcd2Bz6jzI9wh%2FL0Okk2ebamcW50mKmH1mXBoJyUntSy8XNW089CFYo2gcBQqezFsnMudRpot2P9MVmUS%2FVm91cHtqkcUPZVs7%2FYQFMIYgfesnKCtpW9VE%2BmaFrB0rMQhMwXyqdyqYL7pwWu4gtWHv%2BmWZP0TA8Ql6hLiwrleO7V8zM%2Bwpv3t%2FV4ryFKVw0y%2FSCe1UTkPllFbi1gygHWLd%2F1voF5CNq1AnDuh%2BGMI9fvNUo%2FOtmUJFfeJXs5ZLMHrp3rOPXEa7qvEeaM6b7Il9Rx%2Fl%2FOLucK9Su5IXdQP5ZgVW7LaeNhAbn1bSAZqxm7YNO5rGug2xig7Q4WzEQ1xrhUUbDNhXPLc9%2B40U9W3ea8d4ZQTCqoWl0%2F8L91Xz3rXpBVYEWcxMMer08AGOqUB6S4jLOmRpvXQVHApAQBXdpTmBUO1JlM4xtljx1pusyQDBlZi4bQA9AMU%2FvQL%2Bz3tfYW%2Fys0qjoHBgImCsG8J5QWlPyGMTO%2BrkBqu8iAJoyYz1wD1tp%2Fw3T4HrjS%2FRZoRiMRGzRzUlcHOOa%2FwgjHJT9%2FBPC8FF1pnfGZkCQ00ek7MqglWudCMWkCq0QGfLtktCyZRtFF8vmHjB6opWtEy%2FyQn75wa&X-Amz-Signature=5c7deefaf892613bd123051e46dced066fe3170c91cb11a0ad5371125e634750&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DHCEROX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFhCBxXvmu1g6nbLnKVfEN6SsMewTUxBQ4ViaD%2FhL1XgAiEA68XR4t7bq6a3nK199FnUf2jLN%2BrtVIg42k%2FwU3fhIm0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNBYhAPWic19KV35SrcA3EgFdhDY1hwo9la%2BWjMrvRORGtdCyqH5LeFbDbDBdoGdgr5XZH0wXH4bg5RcKWTnnNM2muG8BRrwvFBmiPVNSVk0DQU9Cs2bmMAPHM2Rwi00V8TrfCL4XmaeRqt%2FJzqq7KS6X4OJWmjOiqqfUGDocuvlDk3r6aaCqUvOm%2BNkwhLoLfS7vW7u37%2B6vUEmSZ4ZX7TEHW7CShP2zhcRNfmmjWQ%2Fp8SfJuN25GV2r5An6ahUtHqW4Szcd2Bz6jzI9wh%2FL0Okk2ebamcW50mKmH1mXBoJyUntSy8XNW089CFYo2gcBQqezFsnMudRpot2P9MVmUS%2FVm91cHtqkcUPZVs7%2FYQFMIYgfesnKCtpW9VE%2BmaFrB0rMQhMwXyqdyqYL7pwWu4gtWHv%2BmWZP0TA8Ql6hLiwrleO7V8zM%2Bwpv3t%2FV4ryFKVw0y%2FSCe1UTkPllFbi1gygHWLd%2F1voF5CNq1AnDuh%2BGMI9fvNUo%2FOtmUJFfeJXs5ZLMHrp3rOPXEa7qvEeaM6b7Il9Rx%2Fl%2FOLucK9Su5IXdQP5ZgVW7LaeNhAbn1bSAZqxm7YNO5rGug2xig7Q4WzEQ1xrhUUbDNhXPLc9%2B40U9W3ea8d4ZQTCqoWl0%2F8L91Xz3rXpBVYEWcxMMer08AGOqUB6S4jLOmRpvXQVHApAQBXdpTmBUO1JlM4xtljx1pusyQDBlZi4bQA9AMU%2FvQL%2Bz3tfYW%2Fys0qjoHBgImCsG8J5QWlPyGMTO%2BrkBqu8iAJoyYz1wD1tp%2Fw3T4HrjS%2FRZoRiMRGzRzUlcHOOa%2FwgjHJT9%2FBPC8FF1pnfGZkCQ00ek7MqglWudCMWkCq0QGfLtktCyZRtFF8vmHjB6opWtEy%2FyQn75wa&X-Amz-Signature=7527d3fee71f80ba5429f4eb2c12254ec96c6538d256aff120074773de37d835&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DHCEROX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFhCBxXvmu1g6nbLnKVfEN6SsMewTUxBQ4ViaD%2FhL1XgAiEA68XR4t7bq6a3nK199FnUf2jLN%2BrtVIg42k%2FwU3fhIm0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNBYhAPWic19KV35SrcA3EgFdhDY1hwo9la%2BWjMrvRORGtdCyqH5LeFbDbDBdoGdgr5XZH0wXH4bg5RcKWTnnNM2muG8BRrwvFBmiPVNSVk0DQU9Cs2bmMAPHM2Rwi00V8TrfCL4XmaeRqt%2FJzqq7KS6X4OJWmjOiqqfUGDocuvlDk3r6aaCqUvOm%2BNkwhLoLfS7vW7u37%2B6vUEmSZ4ZX7TEHW7CShP2zhcRNfmmjWQ%2Fp8SfJuN25GV2r5An6ahUtHqW4Szcd2Bz6jzI9wh%2FL0Okk2ebamcW50mKmH1mXBoJyUntSy8XNW089CFYo2gcBQqezFsnMudRpot2P9MVmUS%2FVm91cHtqkcUPZVs7%2FYQFMIYgfesnKCtpW9VE%2BmaFrB0rMQhMwXyqdyqYL7pwWu4gtWHv%2BmWZP0TA8Ql6hLiwrleO7V8zM%2Bwpv3t%2FV4ryFKVw0y%2FSCe1UTkPllFbi1gygHWLd%2F1voF5CNq1AnDuh%2BGMI9fvNUo%2FOtmUJFfeJXs5ZLMHrp3rOPXEa7qvEeaM6b7Il9Rx%2Fl%2FOLucK9Su5IXdQP5ZgVW7LaeNhAbn1bSAZqxm7YNO5rGug2xig7Q4WzEQ1xrhUUbDNhXPLc9%2B40U9W3ea8d4ZQTCqoWl0%2F8L91Xz3rXpBVYEWcxMMer08AGOqUB6S4jLOmRpvXQVHApAQBXdpTmBUO1JlM4xtljx1pusyQDBlZi4bQA9AMU%2FvQL%2Bz3tfYW%2Fys0qjoHBgImCsG8J5QWlPyGMTO%2BrkBqu8iAJoyYz1wD1tp%2Fw3T4HrjS%2FRZoRiMRGzRzUlcHOOa%2FwgjHJT9%2FBPC8FF1pnfGZkCQ00ek7MqglWudCMWkCq0QGfLtktCyZRtFF8vmHjB6opWtEy%2FyQn75wa&X-Amz-Signature=a612f3f86759ff73968ad60a8c46235fed5c3ade8d5fc654d4126caad4be6986&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DHCEROX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFhCBxXvmu1g6nbLnKVfEN6SsMewTUxBQ4ViaD%2FhL1XgAiEA68XR4t7bq6a3nK199FnUf2jLN%2BrtVIg42k%2FwU3fhIm0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNBYhAPWic19KV35SrcA3EgFdhDY1hwo9la%2BWjMrvRORGtdCyqH5LeFbDbDBdoGdgr5XZH0wXH4bg5RcKWTnnNM2muG8BRrwvFBmiPVNSVk0DQU9Cs2bmMAPHM2Rwi00V8TrfCL4XmaeRqt%2FJzqq7KS6X4OJWmjOiqqfUGDocuvlDk3r6aaCqUvOm%2BNkwhLoLfS7vW7u37%2B6vUEmSZ4ZX7TEHW7CShP2zhcRNfmmjWQ%2Fp8SfJuN25GV2r5An6ahUtHqW4Szcd2Bz6jzI9wh%2FL0Okk2ebamcW50mKmH1mXBoJyUntSy8XNW089CFYo2gcBQqezFsnMudRpot2P9MVmUS%2FVm91cHtqkcUPZVs7%2FYQFMIYgfesnKCtpW9VE%2BmaFrB0rMQhMwXyqdyqYL7pwWu4gtWHv%2BmWZP0TA8Ql6hLiwrleO7V8zM%2Bwpv3t%2FV4ryFKVw0y%2FSCe1UTkPllFbi1gygHWLd%2F1voF5CNq1AnDuh%2BGMI9fvNUo%2FOtmUJFfeJXs5ZLMHrp3rOPXEa7qvEeaM6b7Il9Rx%2Fl%2FOLucK9Su5IXdQP5ZgVW7LaeNhAbn1bSAZqxm7YNO5rGug2xig7Q4WzEQ1xrhUUbDNhXPLc9%2B40U9W3ea8d4ZQTCqoWl0%2F8L91Xz3rXpBVYEWcxMMer08AGOqUB6S4jLOmRpvXQVHApAQBXdpTmBUO1JlM4xtljx1pusyQDBlZi4bQA9AMU%2FvQL%2Bz3tfYW%2Fys0qjoHBgImCsG8J5QWlPyGMTO%2BrkBqu8iAJoyYz1wD1tp%2Fw3T4HrjS%2FRZoRiMRGzRzUlcHOOa%2FwgjHJT9%2FBPC8FF1pnfGZkCQ00ek7MqglWudCMWkCq0QGfLtktCyZRtFF8vmHjB6opWtEy%2FyQn75wa&X-Amz-Signature=d4bd8cd0eb9faaed3ee1f17fe98e5b539bb1b6f4747e2fca0a2c49b3ae2d9a2d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DHCEROX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFhCBxXvmu1g6nbLnKVfEN6SsMewTUxBQ4ViaD%2FhL1XgAiEA68XR4t7bq6a3nK199FnUf2jLN%2BrtVIg42k%2FwU3fhIm0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNBYhAPWic19KV35SrcA3EgFdhDY1hwo9la%2BWjMrvRORGtdCyqH5LeFbDbDBdoGdgr5XZH0wXH4bg5RcKWTnnNM2muG8BRrwvFBmiPVNSVk0DQU9Cs2bmMAPHM2Rwi00V8TrfCL4XmaeRqt%2FJzqq7KS6X4OJWmjOiqqfUGDocuvlDk3r6aaCqUvOm%2BNkwhLoLfS7vW7u37%2B6vUEmSZ4ZX7TEHW7CShP2zhcRNfmmjWQ%2Fp8SfJuN25GV2r5An6ahUtHqW4Szcd2Bz6jzI9wh%2FL0Okk2ebamcW50mKmH1mXBoJyUntSy8XNW089CFYo2gcBQqezFsnMudRpot2P9MVmUS%2FVm91cHtqkcUPZVs7%2FYQFMIYgfesnKCtpW9VE%2BmaFrB0rMQhMwXyqdyqYL7pwWu4gtWHv%2BmWZP0TA8Ql6hLiwrleO7V8zM%2Bwpv3t%2FV4ryFKVw0y%2FSCe1UTkPllFbi1gygHWLd%2F1voF5CNq1AnDuh%2BGMI9fvNUo%2FOtmUJFfeJXs5ZLMHrp3rOPXEa7qvEeaM6b7Il9Rx%2Fl%2FOLucK9Su5IXdQP5ZgVW7LaeNhAbn1bSAZqxm7YNO5rGug2xig7Q4WzEQ1xrhUUbDNhXPLc9%2B40U9W3ea8d4ZQTCqoWl0%2F8L91Xz3rXpBVYEWcxMMer08AGOqUB6S4jLOmRpvXQVHApAQBXdpTmBUO1JlM4xtljx1pusyQDBlZi4bQA9AMU%2FvQL%2Bz3tfYW%2Fys0qjoHBgImCsG8J5QWlPyGMTO%2BrkBqu8iAJoyYz1wD1tp%2Fw3T4HrjS%2FRZoRiMRGzRzUlcHOOa%2FwgjHJT9%2FBPC8FF1pnfGZkCQ00ek7MqglWudCMWkCq0QGfLtktCyZRtFF8vmHjB6opWtEy%2FyQn75wa&X-Amz-Signature=22313da7c640e25c6a1e4d3d8cdb208d9d6cf20e8e404cd027c19454ec8b7b68&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
