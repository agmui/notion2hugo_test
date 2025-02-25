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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LYAVA7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDi6pBZ6IB7C4yAAAjRfnx%2FKwabhVN2zpNYWduHX8HXAgIhAMbNmY2oFpmoD3h1TC7cDlm8%2FnoW0aSFoL2cjX3yx3B6Kv8DCEMQABoMNjM3NDIzMTgzODA1IgyiwfW0DE0G3CTI3qYq3AMqESY1al%2Fbr46AQYFKTVwn3gIGuGbbokqHaiCNK76iE5Yi8xlBneonwdhtUY%2FCZh9uPA8HehUYjZtRL1Nxqs2rnOy8f94lHhaRf1tpJYwHj42PzlJMjaoMji0kO8oSdv8vIM7EJsSHyUuxcIdqy4%2FBriTdCZw2foaxIPzY3vWF7mGWvtLbdNAv2OjJnSxy84AJN02oYpV9r7blvkHysFfikHduWYT2fwAeQnT3s7RfR%2B241pIdULndXtEe341V32GJlYWLbn%2FTY8SpVEyp02NLjufXfU0r7zHIY0S321KCqPUHAUA%2B9AZKpTyk%2FArd%2BxponbpvmI%2FBTpg6JzumkTGzmVr%2FJxMrdM71D9QqDhv78gEM1JBSuUYBdBKqeSL28%2FuTdcJQO4Yq8ACPsSe5ezRcVEIuqksZpSN3t%2FCahS8dBaYpznW2xvfOalIHev9B6LQ95OXd0yXLYX72SGjrxnMZ3m8eLGdsyPGB3iizut5bed8Ip9bteXH22LrSVfOdrKZB9hBkW2uYwT3QcpecXrEd54m%2BsqGxKHUYpUUr%2FgB9ALDcZ5fx2rU2mCfhrq0N2bIBoS3iBt4NSiplja0wSCOlaL5tlEVENTDqksdao74Jz6I2MiM4dSZ5PJMpazCAova9BjqkASII7RhvYoPJ1jfWamrkqBYcSCiyOzUGlWOWtPPOdfXxQNf61HLLusELvnCHOy%2FTUAE8tEWhlM68Wz2QfBqM7vTGqgurHt%2BtRuEhX%2FntMlyjBzF5fqmP76Qze6U52QixeRT8lCdX844whuSgxuK6G3tv6uawyU4YjpfGhLqNDDigXszD9oljcWDWYkGEz0p%2FulQ7ymHfNwN88Iu2QOvhz31djCGy&X-Amz-Signature=7caf8308615b21a3bf5a429ec6c84cf9280ce0573f266e9b9408778dbab65779&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LYAVA7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDi6pBZ6IB7C4yAAAjRfnx%2FKwabhVN2zpNYWduHX8HXAgIhAMbNmY2oFpmoD3h1TC7cDlm8%2FnoW0aSFoL2cjX3yx3B6Kv8DCEMQABoMNjM3NDIzMTgzODA1IgyiwfW0DE0G3CTI3qYq3AMqESY1al%2Fbr46AQYFKTVwn3gIGuGbbokqHaiCNK76iE5Yi8xlBneonwdhtUY%2FCZh9uPA8HehUYjZtRL1Nxqs2rnOy8f94lHhaRf1tpJYwHj42PzlJMjaoMji0kO8oSdv8vIM7EJsSHyUuxcIdqy4%2FBriTdCZw2foaxIPzY3vWF7mGWvtLbdNAv2OjJnSxy84AJN02oYpV9r7blvkHysFfikHduWYT2fwAeQnT3s7RfR%2B241pIdULndXtEe341V32GJlYWLbn%2FTY8SpVEyp02NLjufXfU0r7zHIY0S321KCqPUHAUA%2B9AZKpTyk%2FArd%2BxponbpvmI%2FBTpg6JzumkTGzmVr%2FJxMrdM71D9QqDhv78gEM1JBSuUYBdBKqeSL28%2FuTdcJQO4Yq8ACPsSe5ezRcVEIuqksZpSN3t%2FCahS8dBaYpznW2xvfOalIHev9B6LQ95OXd0yXLYX72SGjrxnMZ3m8eLGdsyPGB3iizut5bed8Ip9bteXH22LrSVfOdrKZB9hBkW2uYwT3QcpecXrEd54m%2BsqGxKHUYpUUr%2FgB9ALDcZ5fx2rU2mCfhrq0N2bIBoS3iBt4NSiplja0wSCOlaL5tlEVENTDqksdao74Jz6I2MiM4dSZ5PJMpazCAova9BjqkASII7RhvYoPJ1jfWamrkqBYcSCiyOzUGlWOWtPPOdfXxQNf61HLLusELvnCHOy%2FTUAE8tEWhlM68Wz2QfBqM7vTGqgurHt%2BtRuEhX%2FntMlyjBzF5fqmP76Qze6U52QixeRT8lCdX844whuSgxuK6G3tv6uawyU4YjpfGhLqNDDigXszD9oljcWDWYkGEz0p%2FulQ7ymHfNwN88Iu2QOvhz31djCGy&X-Amz-Signature=e1bed5707ee67f27e583159fcbba939b504cccf159a86d28ffa5692fb63e13a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LYAVA7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDi6pBZ6IB7C4yAAAjRfnx%2FKwabhVN2zpNYWduHX8HXAgIhAMbNmY2oFpmoD3h1TC7cDlm8%2FnoW0aSFoL2cjX3yx3B6Kv8DCEMQABoMNjM3NDIzMTgzODA1IgyiwfW0DE0G3CTI3qYq3AMqESY1al%2Fbr46AQYFKTVwn3gIGuGbbokqHaiCNK76iE5Yi8xlBneonwdhtUY%2FCZh9uPA8HehUYjZtRL1Nxqs2rnOy8f94lHhaRf1tpJYwHj42PzlJMjaoMji0kO8oSdv8vIM7EJsSHyUuxcIdqy4%2FBriTdCZw2foaxIPzY3vWF7mGWvtLbdNAv2OjJnSxy84AJN02oYpV9r7blvkHysFfikHduWYT2fwAeQnT3s7RfR%2B241pIdULndXtEe341V32GJlYWLbn%2FTY8SpVEyp02NLjufXfU0r7zHIY0S321KCqPUHAUA%2B9AZKpTyk%2FArd%2BxponbpvmI%2FBTpg6JzumkTGzmVr%2FJxMrdM71D9QqDhv78gEM1JBSuUYBdBKqeSL28%2FuTdcJQO4Yq8ACPsSe5ezRcVEIuqksZpSN3t%2FCahS8dBaYpznW2xvfOalIHev9B6LQ95OXd0yXLYX72SGjrxnMZ3m8eLGdsyPGB3iizut5bed8Ip9bteXH22LrSVfOdrKZB9hBkW2uYwT3QcpecXrEd54m%2BsqGxKHUYpUUr%2FgB9ALDcZ5fx2rU2mCfhrq0N2bIBoS3iBt4NSiplja0wSCOlaL5tlEVENTDqksdao74Jz6I2MiM4dSZ5PJMpazCAova9BjqkASII7RhvYoPJ1jfWamrkqBYcSCiyOzUGlWOWtPPOdfXxQNf61HLLusELvnCHOy%2FTUAE8tEWhlM68Wz2QfBqM7vTGqgurHt%2BtRuEhX%2FntMlyjBzF5fqmP76Qze6U52QixeRT8lCdX844whuSgxuK6G3tv6uawyU4YjpfGhLqNDDigXszD9oljcWDWYkGEz0p%2FulQ7ymHfNwN88Iu2QOvhz31djCGy&X-Amz-Signature=c66fc5cf1ad945ab5e3b8e60968fcf779e21a5aa78ffa3f61cb9dd1a265ab567&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LYAVA7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDi6pBZ6IB7C4yAAAjRfnx%2FKwabhVN2zpNYWduHX8HXAgIhAMbNmY2oFpmoD3h1TC7cDlm8%2FnoW0aSFoL2cjX3yx3B6Kv8DCEMQABoMNjM3NDIzMTgzODA1IgyiwfW0DE0G3CTI3qYq3AMqESY1al%2Fbr46AQYFKTVwn3gIGuGbbokqHaiCNK76iE5Yi8xlBneonwdhtUY%2FCZh9uPA8HehUYjZtRL1Nxqs2rnOy8f94lHhaRf1tpJYwHj42PzlJMjaoMji0kO8oSdv8vIM7EJsSHyUuxcIdqy4%2FBriTdCZw2foaxIPzY3vWF7mGWvtLbdNAv2OjJnSxy84AJN02oYpV9r7blvkHysFfikHduWYT2fwAeQnT3s7RfR%2B241pIdULndXtEe341V32GJlYWLbn%2FTY8SpVEyp02NLjufXfU0r7zHIY0S321KCqPUHAUA%2B9AZKpTyk%2FArd%2BxponbpvmI%2FBTpg6JzumkTGzmVr%2FJxMrdM71D9QqDhv78gEM1JBSuUYBdBKqeSL28%2FuTdcJQO4Yq8ACPsSe5ezRcVEIuqksZpSN3t%2FCahS8dBaYpznW2xvfOalIHev9B6LQ95OXd0yXLYX72SGjrxnMZ3m8eLGdsyPGB3iizut5bed8Ip9bteXH22LrSVfOdrKZB9hBkW2uYwT3QcpecXrEd54m%2BsqGxKHUYpUUr%2FgB9ALDcZ5fx2rU2mCfhrq0N2bIBoS3iBt4NSiplja0wSCOlaL5tlEVENTDqksdao74Jz6I2MiM4dSZ5PJMpazCAova9BjqkASII7RhvYoPJ1jfWamrkqBYcSCiyOzUGlWOWtPPOdfXxQNf61HLLusELvnCHOy%2FTUAE8tEWhlM68Wz2QfBqM7vTGqgurHt%2BtRuEhX%2FntMlyjBzF5fqmP76Qze6U52QixeRT8lCdX844whuSgxuK6G3tv6uawyU4YjpfGhLqNDDigXszD9oljcWDWYkGEz0p%2FulQ7ymHfNwN88Iu2QOvhz31djCGy&X-Amz-Signature=03c8c5504ae0cb1c75833a7270fd3b9ba59d95db37ba72c60e001cbdafc4e8c4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LYAVA7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDi6pBZ6IB7C4yAAAjRfnx%2FKwabhVN2zpNYWduHX8HXAgIhAMbNmY2oFpmoD3h1TC7cDlm8%2FnoW0aSFoL2cjX3yx3B6Kv8DCEMQABoMNjM3NDIzMTgzODA1IgyiwfW0DE0G3CTI3qYq3AMqESY1al%2Fbr46AQYFKTVwn3gIGuGbbokqHaiCNK76iE5Yi8xlBneonwdhtUY%2FCZh9uPA8HehUYjZtRL1Nxqs2rnOy8f94lHhaRf1tpJYwHj42PzlJMjaoMji0kO8oSdv8vIM7EJsSHyUuxcIdqy4%2FBriTdCZw2foaxIPzY3vWF7mGWvtLbdNAv2OjJnSxy84AJN02oYpV9r7blvkHysFfikHduWYT2fwAeQnT3s7RfR%2B241pIdULndXtEe341V32GJlYWLbn%2FTY8SpVEyp02NLjufXfU0r7zHIY0S321KCqPUHAUA%2B9AZKpTyk%2FArd%2BxponbpvmI%2FBTpg6JzumkTGzmVr%2FJxMrdM71D9QqDhv78gEM1JBSuUYBdBKqeSL28%2FuTdcJQO4Yq8ACPsSe5ezRcVEIuqksZpSN3t%2FCahS8dBaYpznW2xvfOalIHev9B6LQ95OXd0yXLYX72SGjrxnMZ3m8eLGdsyPGB3iizut5bed8Ip9bteXH22LrSVfOdrKZB9hBkW2uYwT3QcpecXrEd54m%2BsqGxKHUYpUUr%2FgB9ALDcZ5fx2rU2mCfhrq0N2bIBoS3iBt4NSiplja0wSCOlaL5tlEVENTDqksdao74Jz6I2MiM4dSZ5PJMpazCAova9BjqkASII7RhvYoPJ1jfWamrkqBYcSCiyOzUGlWOWtPPOdfXxQNf61HLLusELvnCHOy%2FTUAE8tEWhlM68Wz2QfBqM7vTGqgurHt%2BtRuEhX%2FntMlyjBzF5fqmP76Qze6U52QixeRT8lCdX844whuSgxuK6G3tv6uawyU4YjpfGhLqNDDigXszD9oljcWDWYkGEz0p%2FulQ7ymHfNwN88Iu2QOvhz31djCGy&X-Amz-Signature=ada067632df925338624ed21cac81fa5ebbfde82a273afcaca39081e5facc897&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LYAVA7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDi6pBZ6IB7C4yAAAjRfnx%2FKwabhVN2zpNYWduHX8HXAgIhAMbNmY2oFpmoD3h1TC7cDlm8%2FnoW0aSFoL2cjX3yx3B6Kv8DCEMQABoMNjM3NDIzMTgzODA1IgyiwfW0DE0G3CTI3qYq3AMqESY1al%2Fbr46AQYFKTVwn3gIGuGbbokqHaiCNK76iE5Yi8xlBneonwdhtUY%2FCZh9uPA8HehUYjZtRL1Nxqs2rnOy8f94lHhaRf1tpJYwHj42PzlJMjaoMji0kO8oSdv8vIM7EJsSHyUuxcIdqy4%2FBriTdCZw2foaxIPzY3vWF7mGWvtLbdNAv2OjJnSxy84AJN02oYpV9r7blvkHysFfikHduWYT2fwAeQnT3s7RfR%2B241pIdULndXtEe341V32GJlYWLbn%2FTY8SpVEyp02NLjufXfU0r7zHIY0S321KCqPUHAUA%2B9AZKpTyk%2FArd%2BxponbpvmI%2FBTpg6JzumkTGzmVr%2FJxMrdM71D9QqDhv78gEM1JBSuUYBdBKqeSL28%2FuTdcJQO4Yq8ACPsSe5ezRcVEIuqksZpSN3t%2FCahS8dBaYpznW2xvfOalIHev9B6LQ95OXd0yXLYX72SGjrxnMZ3m8eLGdsyPGB3iizut5bed8Ip9bteXH22LrSVfOdrKZB9hBkW2uYwT3QcpecXrEd54m%2BsqGxKHUYpUUr%2FgB9ALDcZ5fx2rU2mCfhrq0N2bIBoS3iBt4NSiplja0wSCOlaL5tlEVENTDqksdao74Jz6I2MiM4dSZ5PJMpazCAova9BjqkASII7RhvYoPJ1jfWamrkqBYcSCiyOzUGlWOWtPPOdfXxQNf61HLLusELvnCHOy%2FTUAE8tEWhlM68Wz2QfBqM7vTGqgurHt%2BtRuEhX%2FntMlyjBzF5fqmP76Qze6U52QixeRT8lCdX844whuSgxuK6G3tv6uawyU4YjpfGhLqNDDigXszD9oljcWDWYkGEz0p%2FulQ7ymHfNwN88Iu2QOvhz31djCGy&X-Amz-Signature=3550248ade768f8132d320d009d7e2eb865b0c5e3cc87480ad520db94ec3043a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LYAVA7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDi6pBZ6IB7C4yAAAjRfnx%2FKwabhVN2zpNYWduHX8HXAgIhAMbNmY2oFpmoD3h1TC7cDlm8%2FnoW0aSFoL2cjX3yx3B6Kv8DCEMQABoMNjM3NDIzMTgzODA1IgyiwfW0DE0G3CTI3qYq3AMqESY1al%2Fbr46AQYFKTVwn3gIGuGbbokqHaiCNK76iE5Yi8xlBneonwdhtUY%2FCZh9uPA8HehUYjZtRL1Nxqs2rnOy8f94lHhaRf1tpJYwHj42PzlJMjaoMji0kO8oSdv8vIM7EJsSHyUuxcIdqy4%2FBriTdCZw2foaxIPzY3vWF7mGWvtLbdNAv2OjJnSxy84AJN02oYpV9r7blvkHysFfikHduWYT2fwAeQnT3s7RfR%2B241pIdULndXtEe341V32GJlYWLbn%2FTY8SpVEyp02NLjufXfU0r7zHIY0S321KCqPUHAUA%2B9AZKpTyk%2FArd%2BxponbpvmI%2FBTpg6JzumkTGzmVr%2FJxMrdM71D9QqDhv78gEM1JBSuUYBdBKqeSL28%2FuTdcJQO4Yq8ACPsSe5ezRcVEIuqksZpSN3t%2FCahS8dBaYpznW2xvfOalIHev9B6LQ95OXd0yXLYX72SGjrxnMZ3m8eLGdsyPGB3iizut5bed8Ip9bteXH22LrSVfOdrKZB9hBkW2uYwT3QcpecXrEd54m%2BsqGxKHUYpUUr%2FgB9ALDcZ5fx2rU2mCfhrq0N2bIBoS3iBt4NSiplja0wSCOlaL5tlEVENTDqksdao74Jz6I2MiM4dSZ5PJMpazCAova9BjqkASII7RhvYoPJ1jfWamrkqBYcSCiyOzUGlWOWtPPOdfXxQNf61HLLusELvnCHOy%2FTUAE8tEWhlM68Wz2QfBqM7vTGqgurHt%2BtRuEhX%2FntMlyjBzF5fqmP76Qze6U52QixeRT8lCdX844whuSgxuK6G3tv6uawyU4YjpfGhLqNDDigXszD9oljcWDWYkGEz0p%2FulQ7ymHfNwN88Iu2QOvhz31djCGy&X-Amz-Signature=bb67d2fdb6393b01702229ce1969ef688d0e365693cd3330bb8e3532b5050f03&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
