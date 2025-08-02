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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHUERD7O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERWHv6HqCrejh5L3w4Be1u%2FffPC5lq0UAPlaTgGrzVqAiAOPIDsw0R%2F2KXJ1zStFfVru0wO4V%2BqKc%2F0sSuswl9JCCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtf7NxlvPFTgwWdjnKtwDVvZlo%2BBs2Rc%2Bk%2FDFxc9%2F%2BMN58BsJDBp%2BKJQtiIN8WnPTH%2B%2FPTiNNlCS9W1H%2FF5NbupO9%2F6EZggmInlayeO7xhSrm%2FsRL7EQ%2FDo7ith%2B7Ce3Oj8nJIea3EX0bX%2FTbt5ECGVJc7phOinqWtgcgzZuTGdHyfF5K2vUXsTQoZfrRdDUGVrpE7%2Byq98Ee88iHrHpbTLtMpWQOdQquWg4M5U%2BMNKfJepQlYYlo7eY%2FanhnEfNBlg4loh8sP4jEnjPMVjOkZZL9%2BHL0ZWEpdNhPfReSwT0zafu4h%2F%2B6Two0D7aJXHAirFOHCwu28pXRfASothQg4SBUIn7OxvjIPnmxT%2BVflQ07AzjdsrUMCWHHwoiX8MXCi2WdSrza7yic2fPuynItEoUZQQJ2n8z0N9OweOZ8PMq%2BTOUwMCGpcfrajwtParertEBtclkTkZtYkrYcrfQ0nPRQkwtQIewkjZelnu3JNJl0Jg7w6S8MrUZVSXL6g8woEPWL2cnXs8TSQtPy7%2FUBSjfUDzcmVWJJoto6kHwt%2FcZtsho8T8SBWoJzf4meiFnrnrA%2FLIh%2BtScFiOIkZJ9j1q8z3QYsi%2Fk3NweavTbBo6VZy%2Fbf0Jp62uE3Wos85TGv8lzvoR%2FuJfEqzFUwj621xAY6pgFJJ7V%2BxiyEtdv7sLlLeOJkRiHB8mBrr2s02XhM%2B1AGPbHlvu5SwxCe9sl2nK2LauEU3XKsV%2Ft2esLyFhBYYUWKgyq0GgdHtQk4aX%2F%2BDqX9sAyhrdpGQc%2Be%2Fc8tE%2FS3klLQfT2AUmSqiEuXHmpYS2%2Ffn0UbXU7MqKn7gOK6lDiAdwmYV1M7BqOlUs970B2Pw6kucH%2BYC5VhUPH%2B2CrmlapN51Me9CUD&X-Amz-Signature=4c26a1237251df2e7c958361fcd71e9a8639f67d04418de7788090a1de47ea0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHUERD7O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERWHv6HqCrejh5L3w4Be1u%2FffPC5lq0UAPlaTgGrzVqAiAOPIDsw0R%2F2KXJ1zStFfVru0wO4V%2BqKc%2F0sSuswl9JCCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtf7NxlvPFTgwWdjnKtwDVvZlo%2BBs2Rc%2Bk%2FDFxc9%2F%2BMN58BsJDBp%2BKJQtiIN8WnPTH%2B%2FPTiNNlCS9W1H%2FF5NbupO9%2F6EZggmInlayeO7xhSrm%2FsRL7EQ%2FDo7ith%2B7Ce3Oj8nJIea3EX0bX%2FTbt5ECGVJc7phOinqWtgcgzZuTGdHyfF5K2vUXsTQoZfrRdDUGVrpE7%2Byq98Ee88iHrHpbTLtMpWQOdQquWg4M5U%2BMNKfJepQlYYlo7eY%2FanhnEfNBlg4loh8sP4jEnjPMVjOkZZL9%2BHL0ZWEpdNhPfReSwT0zafu4h%2F%2B6Two0D7aJXHAirFOHCwu28pXRfASothQg4SBUIn7OxvjIPnmxT%2BVflQ07AzjdsrUMCWHHwoiX8MXCi2WdSrza7yic2fPuynItEoUZQQJ2n8z0N9OweOZ8PMq%2BTOUwMCGpcfrajwtParertEBtclkTkZtYkrYcrfQ0nPRQkwtQIewkjZelnu3JNJl0Jg7w6S8MrUZVSXL6g8woEPWL2cnXs8TSQtPy7%2FUBSjfUDzcmVWJJoto6kHwt%2FcZtsho8T8SBWoJzf4meiFnrnrA%2FLIh%2BtScFiOIkZJ9j1q8z3QYsi%2Fk3NweavTbBo6VZy%2Fbf0Jp62uE3Wos85TGv8lzvoR%2FuJfEqzFUwj621xAY6pgFJJ7V%2BxiyEtdv7sLlLeOJkRiHB8mBrr2s02XhM%2B1AGPbHlvu5SwxCe9sl2nK2LauEU3XKsV%2Ft2esLyFhBYYUWKgyq0GgdHtQk4aX%2F%2BDqX9sAyhrdpGQc%2Be%2Fc8tE%2FS3klLQfT2AUmSqiEuXHmpYS2%2Ffn0UbXU7MqKn7gOK6lDiAdwmYV1M7BqOlUs970B2Pw6kucH%2BYC5VhUPH%2B2CrmlapN51Me9CUD&X-Amz-Signature=c5a8cfe377d6e71409549b3d07a148126040ebcfac7bf86098c34435158c4062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHUERD7O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERWHv6HqCrejh5L3w4Be1u%2FffPC5lq0UAPlaTgGrzVqAiAOPIDsw0R%2F2KXJ1zStFfVru0wO4V%2BqKc%2F0sSuswl9JCCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtf7NxlvPFTgwWdjnKtwDVvZlo%2BBs2Rc%2Bk%2FDFxc9%2F%2BMN58BsJDBp%2BKJQtiIN8WnPTH%2B%2FPTiNNlCS9W1H%2FF5NbupO9%2F6EZggmInlayeO7xhSrm%2FsRL7EQ%2FDo7ith%2B7Ce3Oj8nJIea3EX0bX%2FTbt5ECGVJc7phOinqWtgcgzZuTGdHyfF5K2vUXsTQoZfrRdDUGVrpE7%2Byq98Ee88iHrHpbTLtMpWQOdQquWg4M5U%2BMNKfJepQlYYlo7eY%2FanhnEfNBlg4loh8sP4jEnjPMVjOkZZL9%2BHL0ZWEpdNhPfReSwT0zafu4h%2F%2B6Two0D7aJXHAirFOHCwu28pXRfASothQg4SBUIn7OxvjIPnmxT%2BVflQ07AzjdsrUMCWHHwoiX8MXCi2WdSrza7yic2fPuynItEoUZQQJ2n8z0N9OweOZ8PMq%2BTOUwMCGpcfrajwtParertEBtclkTkZtYkrYcrfQ0nPRQkwtQIewkjZelnu3JNJl0Jg7w6S8MrUZVSXL6g8woEPWL2cnXs8TSQtPy7%2FUBSjfUDzcmVWJJoto6kHwt%2FcZtsho8T8SBWoJzf4meiFnrnrA%2FLIh%2BtScFiOIkZJ9j1q8z3QYsi%2Fk3NweavTbBo6VZy%2Fbf0Jp62uE3Wos85TGv8lzvoR%2FuJfEqzFUwj621xAY6pgFJJ7V%2BxiyEtdv7sLlLeOJkRiHB8mBrr2s02XhM%2B1AGPbHlvu5SwxCe9sl2nK2LauEU3XKsV%2Ft2esLyFhBYYUWKgyq0GgdHtQk4aX%2F%2BDqX9sAyhrdpGQc%2Be%2Fc8tE%2FS3klLQfT2AUmSqiEuXHmpYS2%2Ffn0UbXU7MqKn7gOK6lDiAdwmYV1M7BqOlUs970B2Pw6kucH%2BYC5VhUPH%2B2CrmlapN51Me9CUD&X-Amz-Signature=bd9d785b30a74369fca3806acf58d070ff18109a424d26c1b1c89707bd46f441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHUERD7O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERWHv6HqCrejh5L3w4Be1u%2FffPC5lq0UAPlaTgGrzVqAiAOPIDsw0R%2F2KXJ1zStFfVru0wO4V%2BqKc%2F0sSuswl9JCCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtf7NxlvPFTgwWdjnKtwDVvZlo%2BBs2Rc%2Bk%2FDFxc9%2F%2BMN58BsJDBp%2BKJQtiIN8WnPTH%2B%2FPTiNNlCS9W1H%2FF5NbupO9%2F6EZggmInlayeO7xhSrm%2FsRL7EQ%2FDo7ith%2B7Ce3Oj8nJIea3EX0bX%2FTbt5ECGVJc7phOinqWtgcgzZuTGdHyfF5K2vUXsTQoZfrRdDUGVrpE7%2Byq98Ee88iHrHpbTLtMpWQOdQquWg4M5U%2BMNKfJepQlYYlo7eY%2FanhnEfNBlg4loh8sP4jEnjPMVjOkZZL9%2BHL0ZWEpdNhPfReSwT0zafu4h%2F%2B6Two0D7aJXHAirFOHCwu28pXRfASothQg4SBUIn7OxvjIPnmxT%2BVflQ07AzjdsrUMCWHHwoiX8MXCi2WdSrza7yic2fPuynItEoUZQQJ2n8z0N9OweOZ8PMq%2BTOUwMCGpcfrajwtParertEBtclkTkZtYkrYcrfQ0nPRQkwtQIewkjZelnu3JNJl0Jg7w6S8MrUZVSXL6g8woEPWL2cnXs8TSQtPy7%2FUBSjfUDzcmVWJJoto6kHwt%2FcZtsho8T8SBWoJzf4meiFnrnrA%2FLIh%2BtScFiOIkZJ9j1q8z3QYsi%2Fk3NweavTbBo6VZy%2Fbf0Jp62uE3Wos85TGv8lzvoR%2FuJfEqzFUwj621xAY6pgFJJ7V%2BxiyEtdv7sLlLeOJkRiHB8mBrr2s02XhM%2B1AGPbHlvu5SwxCe9sl2nK2LauEU3XKsV%2Ft2esLyFhBYYUWKgyq0GgdHtQk4aX%2F%2BDqX9sAyhrdpGQc%2Be%2Fc8tE%2FS3klLQfT2AUmSqiEuXHmpYS2%2Ffn0UbXU7MqKn7gOK6lDiAdwmYV1M7BqOlUs970B2Pw6kucH%2BYC5VhUPH%2B2CrmlapN51Me9CUD&X-Amz-Signature=fe494677853d3beb0c776705c1697421cc5a37c127c8ed4f7a0ba6568b99da0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHUERD7O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERWHv6HqCrejh5L3w4Be1u%2FffPC5lq0UAPlaTgGrzVqAiAOPIDsw0R%2F2KXJ1zStFfVru0wO4V%2BqKc%2F0sSuswl9JCCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtf7NxlvPFTgwWdjnKtwDVvZlo%2BBs2Rc%2Bk%2FDFxc9%2F%2BMN58BsJDBp%2BKJQtiIN8WnPTH%2B%2FPTiNNlCS9W1H%2FF5NbupO9%2F6EZggmInlayeO7xhSrm%2FsRL7EQ%2FDo7ith%2B7Ce3Oj8nJIea3EX0bX%2FTbt5ECGVJc7phOinqWtgcgzZuTGdHyfF5K2vUXsTQoZfrRdDUGVrpE7%2Byq98Ee88iHrHpbTLtMpWQOdQquWg4M5U%2BMNKfJepQlYYlo7eY%2FanhnEfNBlg4loh8sP4jEnjPMVjOkZZL9%2BHL0ZWEpdNhPfReSwT0zafu4h%2F%2B6Two0D7aJXHAirFOHCwu28pXRfASothQg4SBUIn7OxvjIPnmxT%2BVflQ07AzjdsrUMCWHHwoiX8MXCi2WdSrza7yic2fPuynItEoUZQQJ2n8z0N9OweOZ8PMq%2BTOUwMCGpcfrajwtParertEBtclkTkZtYkrYcrfQ0nPRQkwtQIewkjZelnu3JNJl0Jg7w6S8MrUZVSXL6g8woEPWL2cnXs8TSQtPy7%2FUBSjfUDzcmVWJJoto6kHwt%2FcZtsho8T8SBWoJzf4meiFnrnrA%2FLIh%2BtScFiOIkZJ9j1q8z3QYsi%2Fk3NweavTbBo6VZy%2Fbf0Jp62uE3Wos85TGv8lzvoR%2FuJfEqzFUwj621xAY6pgFJJ7V%2BxiyEtdv7sLlLeOJkRiHB8mBrr2s02XhM%2B1AGPbHlvu5SwxCe9sl2nK2LauEU3XKsV%2Ft2esLyFhBYYUWKgyq0GgdHtQk4aX%2F%2BDqX9sAyhrdpGQc%2Be%2Fc8tE%2FS3klLQfT2AUmSqiEuXHmpYS2%2Ffn0UbXU7MqKn7gOK6lDiAdwmYV1M7BqOlUs970B2Pw6kucH%2BYC5VhUPH%2B2CrmlapN51Me9CUD&X-Amz-Signature=92dd4f3832c280d99933c14aead527f21a524614335501dba85e6b0b8fd530a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHUERD7O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERWHv6HqCrejh5L3w4Be1u%2FffPC5lq0UAPlaTgGrzVqAiAOPIDsw0R%2F2KXJ1zStFfVru0wO4V%2BqKc%2F0sSuswl9JCCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtf7NxlvPFTgwWdjnKtwDVvZlo%2BBs2Rc%2Bk%2FDFxc9%2F%2BMN58BsJDBp%2BKJQtiIN8WnPTH%2B%2FPTiNNlCS9W1H%2FF5NbupO9%2F6EZggmInlayeO7xhSrm%2FsRL7EQ%2FDo7ith%2B7Ce3Oj8nJIea3EX0bX%2FTbt5ECGVJc7phOinqWtgcgzZuTGdHyfF5K2vUXsTQoZfrRdDUGVrpE7%2Byq98Ee88iHrHpbTLtMpWQOdQquWg4M5U%2BMNKfJepQlYYlo7eY%2FanhnEfNBlg4loh8sP4jEnjPMVjOkZZL9%2BHL0ZWEpdNhPfReSwT0zafu4h%2F%2B6Two0D7aJXHAirFOHCwu28pXRfASothQg4SBUIn7OxvjIPnmxT%2BVflQ07AzjdsrUMCWHHwoiX8MXCi2WdSrza7yic2fPuynItEoUZQQJ2n8z0N9OweOZ8PMq%2BTOUwMCGpcfrajwtParertEBtclkTkZtYkrYcrfQ0nPRQkwtQIewkjZelnu3JNJl0Jg7w6S8MrUZVSXL6g8woEPWL2cnXs8TSQtPy7%2FUBSjfUDzcmVWJJoto6kHwt%2FcZtsho8T8SBWoJzf4meiFnrnrA%2FLIh%2BtScFiOIkZJ9j1q8z3QYsi%2Fk3NweavTbBo6VZy%2Fbf0Jp62uE3Wos85TGv8lzvoR%2FuJfEqzFUwj621xAY6pgFJJ7V%2BxiyEtdv7sLlLeOJkRiHB8mBrr2s02XhM%2B1AGPbHlvu5SwxCe9sl2nK2LauEU3XKsV%2Ft2esLyFhBYYUWKgyq0GgdHtQk4aX%2F%2BDqX9sAyhrdpGQc%2Be%2Fc8tE%2FS3klLQfT2AUmSqiEuXHmpYS2%2Ffn0UbXU7MqKn7gOK6lDiAdwmYV1M7BqOlUs970B2Pw6kucH%2BYC5VhUPH%2B2CrmlapN51Me9CUD&X-Amz-Signature=e1182117104d0dae0e869d724034d47dcd8cb758ae1de56a02bfd632a3abb2c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHUERD7O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERWHv6HqCrejh5L3w4Be1u%2FffPC5lq0UAPlaTgGrzVqAiAOPIDsw0R%2F2KXJ1zStFfVru0wO4V%2BqKc%2F0sSuswl9JCCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtf7NxlvPFTgwWdjnKtwDVvZlo%2BBs2Rc%2Bk%2FDFxc9%2F%2BMN58BsJDBp%2BKJQtiIN8WnPTH%2B%2FPTiNNlCS9W1H%2FF5NbupO9%2F6EZggmInlayeO7xhSrm%2FsRL7EQ%2FDo7ith%2B7Ce3Oj8nJIea3EX0bX%2FTbt5ECGVJc7phOinqWtgcgzZuTGdHyfF5K2vUXsTQoZfrRdDUGVrpE7%2Byq98Ee88iHrHpbTLtMpWQOdQquWg4M5U%2BMNKfJepQlYYlo7eY%2FanhnEfNBlg4loh8sP4jEnjPMVjOkZZL9%2BHL0ZWEpdNhPfReSwT0zafu4h%2F%2B6Two0D7aJXHAirFOHCwu28pXRfASothQg4SBUIn7OxvjIPnmxT%2BVflQ07AzjdsrUMCWHHwoiX8MXCi2WdSrza7yic2fPuynItEoUZQQJ2n8z0N9OweOZ8PMq%2BTOUwMCGpcfrajwtParertEBtclkTkZtYkrYcrfQ0nPRQkwtQIewkjZelnu3JNJl0Jg7w6S8MrUZVSXL6g8woEPWL2cnXs8TSQtPy7%2FUBSjfUDzcmVWJJoto6kHwt%2FcZtsho8T8SBWoJzf4meiFnrnrA%2FLIh%2BtScFiOIkZJ9j1q8z3QYsi%2Fk3NweavTbBo6VZy%2Fbf0Jp62uE3Wos85TGv8lzvoR%2FuJfEqzFUwj621xAY6pgFJJ7V%2BxiyEtdv7sLlLeOJkRiHB8mBrr2s02XhM%2B1AGPbHlvu5SwxCe9sl2nK2LauEU3XKsV%2Ft2esLyFhBYYUWKgyq0GgdHtQk4aX%2F%2BDqX9sAyhrdpGQc%2Be%2Fc8tE%2FS3klLQfT2AUmSqiEuXHmpYS2%2Ffn0UbXU7MqKn7gOK6lDiAdwmYV1M7BqOlUs970B2Pw6kucH%2BYC5VhUPH%2B2CrmlapN51Me9CUD&X-Amz-Signature=c84b00cbe331f1c3758209f8a6d98da3b4ff167da19a1b84b8109fe144dc20ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
