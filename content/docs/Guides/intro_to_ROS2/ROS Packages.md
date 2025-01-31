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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJXMIEA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFy%2FyURpPXptjGMlaATV1TjUIq0pP0MYdXBEbiEJCTjqAiEA8uikOYr9C7JRuhb40%2FhwBHg7yHlG06Tj47CRCslhnTEqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1ReEG%2FmV%2B1YEZ8TCrcA9%2BbuzhuQEg4KEJ8VW5TLEPuGkcIn1t%2B8PlT%2FXCdbcjIIiKJ7rvle4w%2F%2FY9aQDD2MpDonCN31mg8tc88x4KV8tKgQ4h3JXcfGuv3F5SfhUULP8maTJY8nf%2F403HX7t9s4MkxywOPE%2FalLiehTgzR%2BMjukjj6zy5MQCF8b8z%2FyPRH9GkpppTnvm5l2CFVcySmb97GMU%2BcB9z2UGWrjFt7aRs%2BXGUdQiNF9qVMJLEqrJsRSS7PAQGpkf6ZcqgTzHkJXw42TClKf1nSL9%2FW6Y0gSHEjGLlAYpmGNO%2BHvN8KK5Bkr%2BmmKwWG4MxBCmS1N4s2Tuo7a3yGDWrkPSQ0cZPnOwUUTtexxiJ8R%2FjEJcQr6j7tXXj8ZtrYOqmg5lAMeOPC5j3h9cUH74zJKREZSQDaK5ns8dr0dMocgesXofBesx37gdQBsF5lVZZsSaAcrxCaaWDyGwjHWLwUwQEYOwUoxsFxD78m5zYiVnMyRCy7M8qO4Zvuedn7DQXssG82DWooGR2DRzXuQUJ1bK5zVgeE0BteX%2BHT4kxToJ8n1a8W2kiV%2FtGLgYVYsFv1n036c8dodZy5FMei%2FXgm%2FAFX%2BHu1ExOEknktE%2Bdv48ca3qe2E1c1sfOB9VS68xE%2BsXbbMOWR87wGOqUBbokuFI0UBXeiwdEz4XDZeHpvYQ83tVtRnKRBkKHuQlVqCel%2FJ6XRnOcHn3%2B%2Fg2AGu81mAGg12sckDlEcym50pw2k%2FsvtqQu8ZilLMyE%2Fgtfhz9MLI%2BOcY5UyONYe%2F2G2o0xh%2BxJ0FT2jS4nZfxTmA912KE8zwsvwcXqVpd29XqOw9lBOEO7YijqXHw3yLJ1nXbVq4YvSaUZmK654fVqM%2Fe2ZW8Hu&X-Amz-Signature=14af008460082bdb225d1ea127e68ac93832f39c409a17c9cd622cb34aa714d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJXMIEA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFy%2FyURpPXptjGMlaATV1TjUIq0pP0MYdXBEbiEJCTjqAiEA8uikOYr9C7JRuhb40%2FhwBHg7yHlG06Tj47CRCslhnTEqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1ReEG%2FmV%2B1YEZ8TCrcA9%2BbuzhuQEg4KEJ8VW5TLEPuGkcIn1t%2B8PlT%2FXCdbcjIIiKJ7rvle4w%2F%2FY9aQDD2MpDonCN31mg8tc88x4KV8tKgQ4h3JXcfGuv3F5SfhUULP8maTJY8nf%2F403HX7t9s4MkxywOPE%2FalLiehTgzR%2BMjukjj6zy5MQCF8b8z%2FyPRH9GkpppTnvm5l2CFVcySmb97GMU%2BcB9z2UGWrjFt7aRs%2BXGUdQiNF9qVMJLEqrJsRSS7PAQGpkf6ZcqgTzHkJXw42TClKf1nSL9%2FW6Y0gSHEjGLlAYpmGNO%2BHvN8KK5Bkr%2BmmKwWG4MxBCmS1N4s2Tuo7a3yGDWrkPSQ0cZPnOwUUTtexxiJ8R%2FjEJcQr6j7tXXj8ZtrYOqmg5lAMeOPC5j3h9cUH74zJKREZSQDaK5ns8dr0dMocgesXofBesx37gdQBsF5lVZZsSaAcrxCaaWDyGwjHWLwUwQEYOwUoxsFxD78m5zYiVnMyRCy7M8qO4Zvuedn7DQXssG82DWooGR2DRzXuQUJ1bK5zVgeE0BteX%2BHT4kxToJ8n1a8W2kiV%2FtGLgYVYsFv1n036c8dodZy5FMei%2FXgm%2FAFX%2BHu1ExOEknktE%2Bdv48ca3qe2E1c1sfOB9VS68xE%2BsXbbMOWR87wGOqUBbokuFI0UBXeiwdEz4XDZeHpvYQ83tVtRnKRBkKHuQlVqCel%2FJ6XRnOcHn3%2B%2Fg2AGu81mAGg12sckDlEcym50pw2k%2FsvtqQu8ZilLMyE%2Fgtfhz9MLI%2BOcY5UyONYe%2F2G2o0xh%2BxJ0FT2jS4nZfxTmA912KE8zwsvwcXqVpd29XqOw9lBOEO7YijqXHw3yLJ1nXbVq4YvSaUZmK654fVqM%2Fe2ZW8Hu&X-Amz-Signature=c1f87a53be317f2640b470c1851528a22ea1e7cbb08cc3b46935f7a43cfe2f52&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJXMIEA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFy%2FyURpPXptjGMlaATV1TjUIq0pP0MYdXBEbiEJCTjqAiEA8uikOYr9C7JRuhb40%2FhwBHg7yHlG06Tj47CRCslhnTEqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1ReEG%2FmV%2B1YEZ8TCrcA9%2BbuzhuQEg4KEJ8VW5TLEPuGkcIn1t%2B8PlT%2FXCdbcjIIiKJ7rvle4w%2F%2FY9aQDD2MpDonCN31mg8tc88x4KV8tKgQ4h3JXcfGuv3F5SfhUULP8maTJY8nf%2F403HX7t9s4MkxywOPE%2FalLiehTgzR%2BMjukjj6zy5MQCF8b8z%2FyPRH9GkpppTnvm5l2CFVcySmb97GMU%2BcB9z2UGWrjFt7aRs%2BXGUdQiNF9qVMJLEqrJsRSS7PAQGpkf6ZcqgTzHkJXw42TClKf1nSL9%2FW6Y0gSHEjGLlAYpmGNO%2BHvN8KK5Bkr%2BmmKwWG4MxBCmS1N4s2Tuo7a3yGDWrkPSQ0cZPnOwUUTtexxiJ8R%2FjEJcQr6j7tXXj8ZtrYOqmg5lAMeOPC5j3h9cUH74zJKREZSQDaK5ns8dr0dMocgesXofBesx37gdQBsF5lVZZsSaAcrxCaaWDyGwjHWLwUwQEYOwUoxsFxD78m5zYiVnMyRCy7M8qO4Zvuedn7DQXssG82DWooGR2DRzXuQUJ1bK5zVgeE0BteX%2BHT4kxToJ8n1a8W2kiV%2FtGLgYVYsFv1n036c8dodZy5FMei%2FXgm%2FAFX%2BHu1ExOEknktE%2Bdv48ca3qe2E1c1sfOB9VS68xE%2BsXbbMOWR87wGOqUBbokuFI0UBXeiwdEz4XDZeHpvYQ83tVtRnKRBkKHuQlVqCel%2FJ6XRnOcHn3%2B%2Fg2AGu81mAGg12sckDlEcym50pw2k%2FsvtqQu8ZilLMyE%2Fgtfhz9MLI%2BOcY5UyONYe%2F2G2o0xh%2BxJ0FT2jS4nZfxTmA912KE8zwsvwcXqVpd29XqOw9lBOEO7YijqXHw3yLJ1nXbVq4YvSaUZmK654fVqM%2Fe2ZW8Hu&X-Amz-Signature=d7e308a7d790b9ff441b1b73c9785f799343857a39f7ab890880d36897242304&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJXMIEA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFy%2FyURpPXptjGMlaATV1TjUIq0pP0MYdXBEbiEJCTjqAiEA8uikOYr9C7JRuhb40%2FhwBHg7yHlG06Tj47CRCslhnTEqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1ReEG%2FmV%2B1YEZ8TCrcA9%2BbuzhuQEg4KEJ8VW5TLEPuGkcIn1t%2B8PlT%2FXCdbcjIIiKJ7rvle4w%2F%2FY9aQDD2MpDonCN31mg8tc88x4KV8tKgQ4h3JXcfGuv3F5SfhUULP8maTJY8nf%2F403HX7t9s4MkxywOPE%2FalLiehTgzR%2BMjukjj6zy5MQCF8b8z%2FyPRH9GkpppTnvm5l2CFVcySmb97GMU%2BcB9z2UGWrjFt7aRs%2BXGUdQiNF9qVMJLEqrJsRSS7PAQGpkf6ZcqgTzHkJXw42TClKf1nSL9%2FW6Y0gSHEjGLlAYpmGNO%2BHvN8KK5Bkr%2BmmKwWG4MxBCmS1N4s2Tuo7a3yGDWrkPSQ0cZPnOwUUTtexxiJ8R%2FjEJcQr6j7tXXj8ZtrYOqmg5lAMeOPC5j3h9cUH74zJKREZSQDaK5ns8dr0dMocgesXofBesx37gdQBsF5lVZZsSaAcrxCaaWDyGwjHWLwUwQEYOwUoxsFxD78m5zYiVnMyRCy7M8qO4Zvuedn7DQXssG82DWooGR2DRzXuQUJ1bK5zVgeE0BteX%2BHT4kxToJ8n1a8W2kiV%2FtGLgYVYsFv1n036c8dodZy5FMei%2FXgm%2FAFX%2BHu1ExOEknktE%2Bdv48ca3qe2E1c1sfOB9VS68xE%2BsXbbMOWR87wGOqUBbokuFI0UBXeiwdEz4XDZeHpvYQ83tVtRnKRBkKHuQlVqCel%2FJ6XRnOcHn3%2B%2Fg2AGu81mAGg12sckDlEcym50pw2k%2FsvtqQu8ZilLMyE%2Fgtfhz9MLI%2BOcY5UyONYe%2F2G2o0xh%2BxJ0FT2jS4nZfxTmA912KE8zwsvwcXqVpd29XqOw9lBOEO7YijqXHw3yLJ1nXbVq4YvSaUZmK654fVqM%2Fe2ZW8Hu&X-Amz-Signature=1c438e736265da1aed4bf2423b636200229719e6c8ee060d2c32329129b04033&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJXMIEA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFy%2FyURpPXptjGMlaATV1TjUIq0pP0MYdXBEbiEJCTjqAiEA8uikOYr9C7JRuhb40%2FhwBHg7yHlG06Tj47CRCslhnTEqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1ReEG%2FmV%2B1YEZ8TCrcA9%2BbuzhuQEg4KEJ8VW5TLEPuGkcIn1t%2B8PlT%2FXCdbcjIIiKJ7rvle4w%2F%2FY9aQDD2MpDonCN31mg8tc88x4KV8tKgQ4h3JXcfGuv3F5SfhUULP8maTJY8nf%2F403HX7t9s4MkxywOPE%2FalLiehTgzR%2BMjukjj6zy5MQCF8b8z%2FyPRH9GkpppTnvm5l2CFVcySmb97GMU%2BcB9z2UGWrjFt7aRs%2BXGUdQiNF9qVMJLEqrJsRSS7PAQGpkf6ZcqgTzHkJXw42TClKf1nSL9%2FW6Y0gSHEjGLlAYpmGNO%2BHvN8KK5Bkr%2BmmKwWG4MxBCmS1N4s2Tuo7a3yGDWrkPSQ0cZPnOwUUTtexxiJ8R%2FjEJcQr6j7tXXj8ZtrYOqmg5lAMeOPC5j3h9cUH74zJKREZSQDaK5ns8dr0dMocgesXofBesx37gdQBsF5lVZZsSaAcrxCaaWDyGwjHWLwUwQEYOwUoxsFxD78m5zYiVnMyRCy7M8qO4Zvuedn7DQXssG82DWooGR2DRzXuQUJ1bK5zVgeE0BteX%2BHT4kxToJ8n1a8W2kiV%2FtGLgYVYsFv1n036c8dodZy5FMei%2FXgm%2FAFX%2BHu1ExOEknktE%2Bdv48ca3qe2E1c1sfOB9VS68xE%2BsXbbMOWR87wGOqUBbokuFI0UBXeiwdEz4XDZeHpvYQ83tVtRnKRBkKHuQlVqCel%2FJ6XRnOcHn3%2B%2Fg2AGu81mAGg12sckDlEcym50pw2k%2FsvtqQu8ZilLMyE%2Fgtfhz9MLI%2BOcY5UyONYe%2F2G2o0xh%2BxJ0FT2jS4nZfxTmA912KE8zwsvwcXqVpd29XqOw9lBOEO7YijqXHw3yLJ1nXbVq4YvSaUZmK654fVqM%2Fe2ZW8Hu&X-Amz-Signature=a365b4c571a45278ce6577afac3c594e1c69a74e1fe163abb401668dbe616086&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJXMIEA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFy%2FyURpPXptjGMlaATV1TjUIq0pP0MYdXBEbiEJCTjqAiEA8uikOYr9C7JRuhb40%2FhwBHg7yHlG06Tj47CRCslhnTEqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1ReEG%2FmV%2B1YEZ8TCrcA9%2BbuzhuQEg4KEJ8VW5TLEPuGkcIn1t%2B8PlT%2FXCdbcjIIiKJ7rvle4w%2F%2FY9aQDD2MpDonCN31mg8tc88x4KV8tKgQ4h3JXcfGuv3F5SfhUULP8maTJY8nf%2F403HX7t9s4MkxywOPE%2FalLiehTgzR%2BMjukjj6zy5MQCF8b8z%2FyPRH9GkpppTnvm5l2CFVcySmb97GMU%2BcB9z2UGWrjFt7aRs%2BXGUdQiNF9qVMJLEqrJsRSS7PAQGpkf6ZcqgTzHkJXw42TClKf1nSL9%2FW6Y0gSHEjGLlAYpmGNO%2BHvN8KK5Bkr%2BmmKwWG4MxBCmS1N4s2Tuo7a3yGDWrkPSQ0cZPnOwUUTtexxiJ8R%2FjEJcQr6j7tXXj8ZtrYOqmg5lAMeOPC5j3h9cUH74zJKREZSQDaK5ns8dr0dMocgesXofBesx37gdQBsF5lVZZsSaAcrxCaaWDyGwjHWLwUwQEYOwUoxsFxD78m5zYiVnMyRCy7M8qO4Zvuedn7DQXssG82DWooGR2DRzXuQUJ1bK5zVgeE0BteX%2BHT4kxToJ8n1a8W2kiV%2FtGLgYVYsFv1n036c8dodZy5FMei%2FXgm%2FAFX%2BHu1ExOEknktE%2Bdv48ca3qe2E1c1sfOB9VS68xE%2BsXbbMOWR87wGOqUBbokuFI0UBXeiwdEz4XDZeHpvYQ83tVtRnKRBkKHuQlVqCel%2FJ6XRnOcHn3%2B%2Fg2AGu81mAGg12sckDlEcym50pw2k%2FsvtqQu8ZilLMyE%2Fgtfhz9MLI%2BOcY5UyONYe%2F2G2o0xh%2BxJ0FT2jS4nZfxTmA912KE8zwsvwcXqVpd29XqOw9lBOEO7YijqXHw3yLJ1nXbVq4YvSaUZmK654fVqM%2Fe2ZW8Hu&X-Amz-Signature=5020fca612332c52b0dd909bdd3a8ad126cb2303a276962c17735f8a19b46aac&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJXMIEA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFy%2FyURpPXptjGMlaATV1TjUIq0pP0MYdXBEbiEJCTjqAiEA8uikOYr9C7JRuhb40%2FhwBHg7yHlG06Tj47CRCslhnTEqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1ReEG%2FmV%2B1YEZ8TCrcA9%2BbuzhuQEg4KEJ8VW5TLEPuGkcIn1t%2B8PlT%2FXCdbcjIIiKJ7rvle4w%2F%2FY9aQDD2MpDonCN31mg8tc88x4KV8tKgQ4h3JXcfGuv3F5SfhUULP8maTJY8nf%2F403HX7t9s4MkxywOPE%2FalLiehTgzR%2BMjukjj6zy5MQCF8b8z%2FyPRH9GkpppTnvm5l2CFVcySmb97GMU%2BcB9z2UGWrjFt7aRs%2BXGUdQiNF9qVMJLEqrJsRSS7PAQGpkf6ZcqgTzHkJXw42TClKf1nSL9%2FW6Y0gSHEjGLlAYpmGNO%2BHvN8KK5Bkr%2BmmKwWG4MxBCmS1N4s2Tuo7a3yGDWrkPSQ0cZPnOwUUTtexxiJ8R%2FjEJcQr6j7tXXj8ZtrYOqmg5lAMeOPC5j3h9cUH74zJKREZSQDaK5ns8dr0dMocgesXofBesx37gdQBsF5lVZZsSaAcrxCaaWDyGwjHWLwUwQEYOwUoxsFxD78m5zYiVnMyRCy7M8qO4Zvuedn7DQXssG82DWooGR2DRzXuQUJ1bK5zVgeE0BteX%2BHT4kxToJ8n1a8W2kiV%2FtGLgYVYsFv1n036c8dodZy5FMei%2FXgm%2FAFX%2BHu1ExOEknktE%2Bdv48ca3qe2E1c1sfOB9VS68xE%2BsXbbMOWR87wGOqUBbokuFI0UBXeiwdEz4XDZeHpvYQ83tVtRnKRBkKHuQlVqCel%2FJ6XRnOcHn3%2B%2Fg2AGu81mAGg12sckDlEcym50pw2k%2FsvtqQu8ZilLMyE%2Fgtfhz9MLI%2BOcY5UyONYe%2F2G2o0xh%2BxJ0FT2jS4nZfxTmA912KE8zwsvwcXqVpd29XqOw9lBOEO7YijqXHw3yLJ1nXbVq4YvSaUZmK654fVqM%2Fe2ZW8Hu&X-Amz-Signature=06606edd203ddf4415c2c877afe4cda530bf96d5f92ba52f23466c7a425b4a85&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
