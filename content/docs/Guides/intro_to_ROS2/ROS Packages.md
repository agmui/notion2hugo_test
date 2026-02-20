---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBCLOXJ%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAL6h4wU%2BIx702deUCb4FbRj4IYvblOZHWnJlEZMc4W%2BAiEAxgrlXqOD6HnnSq%2FkPDt%2BkOj6jAzw3pBhhYmw5oRD4YMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJewp9Rg%2Bvnv4wWJCrcAyjOVCRFyPxWIJg0V34VNv4oxe3DPA%2BPHDJu%2BXjUwtv2zm5%2BvqPAj6eEtAcj6f%2FcQ8pj8Tew0bTJ03fkCuZ23QneOyfMFN7xpf84bNZsTouih7b6KHp6lvEbsfrd0EbtEX5xV%2FfrxrjtHVn2lJUAwMoi7vHf%2FMGe3Siq%2F4Vzb7dZkjOZ3A7wopF4T8MIkH8Rsi8wswupgEq9%2BAojmdmhLgZgQ3WvgUtcgqfmEXzq%2BkISdLmUltqjCMNbV%2BEwIMFG1oYaewvD4u6gNG2KrKMz8V9VZ3kzIsLivQKsCVIsjjrb%2F95OPOmlGIqi11dMIXZ4pGj4Tb80sNxTEvUdT9KFvczJdwgbk9sH%2FgwCr%2B9esm8DqqWLh4HzfKcPUghJZ7NqEHjsj3UcAhkGP9nBsgRTe3zyj0Do0ih13Bgo%2Belk0bML5hE5MM0%2F5aATkvfI8zUZXxn8lxVciy4BbVIytH%2BO3Z83FMrOD3dsgB5AfJ6ciiof%2B1Xyv6dY1EpLe1imDvV5FlKRYQoFkq7D9YifB%2FnSE%2FvsOVlreBgoBfiCcPBnCl4sGL6kdwvdscHUC6U%2FX%2BudO%2FQo%2Fz4xgDkele9t2Vr7Im6rbxS0s4mi1uyFzQjUeSvPtM%2FoECBlI3pri9siMMno3swGOqUBcSw2p5BLsQ8Xf9uW3yfbj6LYy8I8ZjvADNpEVfIYh0tejLaOElpUJ2EP7ZnrizZoAhMjc9%2BUXRWaP7VMDI4WZLiQ6%2BCSfJamPYsuC9cNPy3qM%2FCjJTGsE%2B1slEIrgjEiX8dZ%2BKLnDNpqnufj%2BZ9XKWCRGL7rK%2FC%2F3tOFtHoXAkYU70fm5YugBRgJTEEEavBFjr6Duqe63Nb%2BzhqR6uZEj3PUhwso&X-Amz-Signature=aae4f68875f2f357baae3198fc5048abe2fa48d10de945cb23c923c089e34545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBCLOXJ%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAL6h4wU%2BIx702deUCb4FbRj4IYvblOZHWnJlEZMc4W%2BAiEAxgrlXqOD6HnnSq%2FkPDt%2BkOj6jAzw3pBhhYmw5oRD4YMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJewp9Rg%2Bvnv4wWJCrcAyjOVCRFyPxWIJg0V34VNv4oxe3DPA%2BPHDJu%2BXjUwtv2zm5%2BvqPAj6eEtAcj6f%2FcQ8pj8Tew0bTJ03fkCuZ23QneOyfMFN7xpf84bNZsTouih7b6KHp6lvEbsfrd0EbtEX5xV%2FfrxrjtHVn2lJUAwMoi7vHf%2FMGe3Siq%2F4Vzb7dZkjOZ3A7wopF4T8MIkH8Rsi8wswupgEq9%2BAojmdmhLgZgQ3WvgUtcgqfmEXzq%2BkISdLmUltqjCMNbV%2BEwIMFG1oYaewvD4u6gNG2KrKMz8V9VZ3kzIsLivQKsCVIsjjrb%2F95OPOmlGIqi11dMIXZ4pGj4Tb80sNxTEvUdT9KFvczJdwgbk9sH%2FgwCr%2B9esm8DqqWLh4HzfKcPUghJZ7NqEHjsj3UcAhkGP9nBsgRTe3zyj0Do0ih13Bgo%2Belk0bML5hE5MM0%2F5aATkvfI8zUZXxn8lxVciy4BbVIytH%2BO3Z83FMrOD3dsgB5AfJ6ciiof%2B1Xyv6dY1EpLe1imDvV5FlKRYQoFkq7D9YifB%2FnSE%2FvsOVlreBgoBfiCcPBnCl4sGL6kdwvdscHUC6U%2FX%2BudO%2FQo%2Fz4xgDkele9t2Vr7Im6rbxS0s4mi1uyFzQjUeSvPtM%2FoECBlI3pri9siMMno3swGOqUBcSw2p5BLsQ8Xf9uW3yfbj6LYy8I8ZjvADNpEVfIYh0tejLaOElpUJ2EP7ZnrizZoAhMjc9%2BUXRWaP7VMDI4WZLiQ6%2BCSfJamPYsuC9cNPy3qM%2FCjJTGsE%2B1slEIrgjEiX8dZ%2BKLnDNpqnufj%2BZ9XKWCRGL7rK%2FC%2F3tOFtHoXAkYU70fm5YugBRgJTEEEavBFjr6Duqe63Nb%2BzhqR6uZEj3PUhwso&X-Amz-Signature=c2174d3bf24857124cfe05315d247c45769b123985ce39aeaa65a31e0d118489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBCLOXJ%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAL6h4wU%2BIx702deUCb4FbRj4IYvblOZHWnJlEZMc4W%2BAiEAxgrlXqOD6HnnSq%2FkPDt%2BkOj6jAzw3pBhhYmw5oRD4YMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJewp9Rg%2Bvnv4wWJCrcAyjOVCRFyPxWIJg0V34VNv4oxe3DPA%2BPHDJu%2BXjUwtv2zm5%2BvqPAj6eEtAcj6f%2FcQ8pj8Tew0bTJ03fkCuZ23QneOyfMFN7xpf84bNZsTouih7b6KHp6lvEbsfrd0EbtEX5xV%2FfrxrjtHVn2lJUAwMoi7vHf%2FMGe3Siq%2F4Vzb7dZkjOZ3A7wopF4T8MIkH8Rsi8wswupgEq9%2BAojmdmhLgZgQ3WvgUtcgqfmEXzq%2BkISdLmUltqjCMNbV%2BEwIMFG1oYaewvD4u6gNG2KrKMz8V9VZ3kzIsLivQKsCVIsjjrb%2F95OPOmlGIqi11dMIXZ4pGj4Tb80sNxTEvUdT9KFvczJdwgbk9sH%2FgwCr%2B9esm8DqqWLh4HzfKcPUghJZ7NqEHjsj3UcAhkGP9nBsgRTe3zyj0Do0ih13Bgo%2Belk0bML5hE5MM0%2F5aATkvfI8zUZXxn8lxVciy4BbVIytH%2BO3Z83FMrOD3dsgB5AfJ6ciiof%2B1Xyv6dY1EpLe1imDvV5FlKRYQoFkq7D9YifB%2FnSE%2FvsOVlreBgoBfiCcPBnCl4sGL6kdwvdscHUC6U%2FX%2BudO%2FQo%2Fz4xgDkele9t2Vr7Im6rbxS0s4mi1uyFzQjUeSvPtM%2FoECBlI3pri9siMMno3swGOqUBcSw2p5BLsQ8Xf9uW3yfbj6LYy8I8ZjvADNpEVfIYh0tejLaOElpUJ2EP7ZnrizZoAhMjc9%2BUXRWaP7VMDI4WZLiQ6%2BCSfJamPYsuC9cNPy3qM%2FCjJTGsE%2B1slEIrgjEiX8dZ%2BKLnDNpqnufj%2BZ9XKWCRGL7rK%2FC%2F3tOFtHoXAkYU70fm5YugBRgJTEEEavBFjr6Duqe63Nb%2BzhqR6uZEj3PUhwso&X-Amz-Signature=662e74202d53eae8f8bcf8eaa562064e54e21d740c19f28e227ae47115ab09b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBCLOXJ%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAL6h4wU%2BIx702deUCb4FbRj4IYvblOZHWnJlEZMc4W%2BAiEAxgrlXqOD6HnnSq%2FkPDt%2BkOj6jAzw3pBhhYmw5oRD4YMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJewp9Rg%2Bvnv4wWJCrcAyjOVCRFyPxWIJg0V34VNv4oxe3DPA%2BPHDJu%2BXjUwtv2zm5%2BvqPAj6eEtAcj6f%2FcQ8pj8Tew0bTJ03fkCuZ23QneOyfMFN7xpf84bNZsTouih7b6KHp6lvEbsfrd0EbtEX5xV%2FfrxrjtHVn2lJUAwMoi7vHf%2FMGe3Siq%2F4Vzb7dZkjOZ3A7wopF4T8MIkH8Rsi8wswupgEq9%2BAojmdmhLgZgQ3WvgUtcgqfmEXzq%2BkISdLmUltqjCMNbV%2BEwIMFG1oYaewvD4u6gNG2KrKMz8V9VZ3kzIsLivQKsCVIsjjrb%2F95OPOmlGIqi11dMIXZ4pGj4Tb80sNxTEvUdT9KFvczJdwgbk9sH%2FgwCr%2B9esm8DqqWLh4HzfKcPUghJZ7NqEHjsj3UcAhkGP9nBsgRTe3zyj0Do0ih13Bgo%2Belk0bML5hE5MM0%2F5aATkvfI8zUZXxn8lxVciy4BbVIytH%2BO3Z83FMrOD3dsgB5AfJ6ciiof%2B1Xyv6dY1EpLe1imDvV5FlKRYQoFkq7D9YifB%2FnSE%2FvsOVlreBgoBfiCcPBnCl4sGL6kdwvdscHUC6U%2FX%2BudO%2FQo%2Fz4xgDkele9t2Vr7Im6rbxS0s4mi1uyFzQjUeSvPtM%2FoECBlI3pri9siMMno3swGOqUBcSw2p5BLsQ8Xf9uW3yfbj6LYy8I8ZjvADNpEVfIYh0tejLaOElpUJ2EP7ZnrizZoAhMjc9%2BUXRWaP7VMDI4WZLiQ6%2BCSfJamPYsuC9cNPy3qM%2FCjJTGsE%2B1slEIrgjEiX8dZ%2BKLnDNpqnufj%2BZ9XKWCRGL7rK%2FC%2F3tOFtHoXAkYU70fm5YugBRgJTEEEavBFjr6Duqe63Nb%2BzhqR6uZEj3PUhwso&X-Amz-Signature=0ce5dc7238ddc358b99f626f5caad406a7b0a4da9d853e9a4b1edb7273ede4d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBCLOXJ%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAL6h4wU%2BIx702deUCb4FbRj4IYvblOZHWnJlEZMc4W%2BAiEAxgrlXqOD6HnnSq%2FkPDt%2BkOj6jAzw3pBhhYmw5oRD4YMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJewp9Rg%2Bvnv4wWJCrcAyjOVCRFyPxWIJg0V34VNv4oxe3DPA%2BPHDJu%2BXjUwtv2zm5%2BvqPAj6eEtAcj6f%2FcQ8pj8Tew0bTJ03fkCuZ23QneOyfMFN7xpf84bNZsTouih7b6KHp6lvEbsfrd0EbtEX5xV%2FfrxrjtHVn2lJUAwMoi7vHf%2FMGe3Siq%2F4Vzb7dZkjOZ3A7wopF4T8MIkH8Rsi8wswupgEq9%2BAojmdmhLgZgQ3WvgUtcgqfmEXzq%2BkISdLmUltqjCMNbV%2BEwIMFG1oYaewvD4u6gNG2KrKMz8V9VZ3kzIsLivQKsCVIsjjrb%2F95OPOmlGIqi11dMIXZ4pGj4Tb80sNxTEvUdT9KFvczJdwgbk9sH%2FgwCr%2B9esm8DqqWLh4HzfKcPUghJZ7NqEHjsj3UcAhkGP9nBsgRTe3zyj0Do0ih13Bgo%2Belk0bML5hE5MM0%2F5aATkvfI8zUZXxn8lxVciy4BbVIytH%2BO3Z83FMrOD3dsgB5AfJ6ciiof%2B1Xyv6dY1EpLe1imDvV5FlKRYQoFkq7D9YifB%2FnSE%2FvsOVlreBgoBfiCcPBnCl4sGL6kdwvdscHUC6U%2FX%2BudO%2FQo%2Fz4xgDkele9t2Vr7Im6rbxS0s4mi1uyFzQjUeSvPtM%2FoECBlI3pri9siMMno3swGOqUBcSw2p5BLsQ8Xf9uW3yfbj6LYy8I8ZjvADNpEVfIYh0tejLaOElpUJ2EP7ZnrizZoAhMjc9%2BUXRWaP7VMDI4WZLiQ6%2BCSfJamPYsuC9cNPy3qM%2FCjJTGsE%2B1slEIrgjEiX8dZ%2BKLnDNpqnufj%2BZ9XKWCRGL7rK%2FC%2F3tOFtHoXAkYU70fm5YugBRgJTEEEavBFjr6Duqe63Nb%2BzhqR6uZEj3PUhwso&X-Amz-Signature=de85a891f0241cf461776168e318f03d828f53f37e91caa5b18a6b9b228ca5d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBCLOXJ%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAL6h4wU%2BIx702deUCb4FbRj4IYvblOZHWnJlEZMc4W%2BAiEAxgrlXqOD6HnnSq%2FkPDt%2BkOj6jAzw3pBhhYmw5oRD4YMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJewp9Rg%2Bvnv4wWJCrcAyjOVCRFyPxWIJg0V34VNv4oxe3DPA%2BPHDJu%2BXjUwtv2zm5%2BvqPAj6eEtAcj6f%2FcQ8pj8Tew0bTJ03fkCuZ23QneOyfMFN7xpf84bNZsTouih7b6KHp6lvEbsfrd0EbtEX5xV%2FfrxrjtHVn2lJUAwMoi7vHf%2FMGe3Siq%2F4Vzb7dZkjOZ3A7wopF4T8MIkH8Rsi8wswupgEq9%2BAojmdmhLgZgQ3WvgUtcgqfmEXzq%2BkISdLmUltqjCMNbV%2BEwIMFG1oYaewvD4u6gNG2KrKMz8V9VZ3kzIsLivQKsCVIsjjrb%2F95OPOmlGIqi11dMIXZ4pGj4Tb80sNxTEvUdT9KFvczJdwgbk9sH%2FgwCr%2B9esm8DqqWLh4HzfKcPUghJZ7NqEHjsj3UcAhkGP9nBsgRTe3zyj0Do0ih13Bgo%2Belk0bML5hE5MM0%2F5aATkvfI8zUZXxn8lxVciy4BbVIytH%2BO3Z83FMrOD3dsgB5AfJ6ciiof%2B1Xyv6dY1EpLe1imDvV5FlKRYQoFkq7D9YifB%2FnSE%2FvsOVlreBgoBfiCcPBnCl4sGL6kdwvdscHUC6U%2FX%2BudO%2FQo%2Fz4xgDkele9t2Vr7Im6rbxS0s4mi1uyFzQjUeSvPtM%2FoECBlI3pri9siMMno3swGOqUBcSw2p5BLsQ8Xf9uW3yfbj6LYy8I8ZjvADNpEVfIYh0tejLaOElpUJ2EP7ZnrizZoAhMjc9%2BUXRWaP7VMDI4WZLiQ6%2BCSfJamPYsuC9cNPy3qM%2FCjJTGsE%2B1slEIrgjEiX8dZ%2BKLnDNpqnufj%2BZ9XKWCRGL7rK%2FC%2F3tOFtHoXAkYU70fm5YugBRgJTEEEavBFjr6Duqe63Nb%2BzhqR6uZEj3PUhwso&X-Amz-Signature=47eb19c77525485c26661b6afd6f09fb70a34cf9411f8eee650f3ee5a2ffd834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBCLOXJ%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAL6h4wU%2BIx702deUCb4FbRj4IYvblOZHWnJlEZMc4W%2BAiEAxgrlXqOD6HnnSq%2FkPDt%2BkOj6jAzw3pBhhYmw5oRD4YMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJewp9Rg%2Bvnv4wWJCrcAyjOVCRFyPxWIJg0V34VNv4oxe3DPA%2BPHDJu%2BXjUwtv2zm5%2BvqPAj6eEtAcj6f%2FcQ8pj8Tew0bTJ03fkCuZ23QneOyfMFN7xpf84bNZsTouih7b6KHp6lvEbsfrd0EbtEX5xV%2FfrxrjtHVn2lJUAwMoi7vHf%2FMGe3Siq%2F4Vzb7dZkjOZ3A7wopF4T8MIkH8Rsi8wswupgEq9%2BAojmdmhLgZgQ3WvgUtcgqfmEXzq%2BkISdLmUltqjCMNbV%2BEwIMFG1oYaewvD4u6gNG2KrKMz8V9VZ3kzIsLivQKsCVIsjjrb%2F95OPOmlGIqi11dMIXZ4pGj4Tb80sNxTEvUdT9KFvczJdwgbk9sH%2FgwCr%2B9esm8DqqWLh4HzfKcPUghJZ7NqEHjsj3UcAhkGP9nBsgRTe3zyj0Do0ih13Bgo%2Belk0bML5hE5MM0%2F5aATkvfI8zUZXxn8lxVciy4BbVIytH%2BO3Z83FMrOD3dsgB5AfJ6ciiof%2B1Xyv6dY1EpLe1imDvV5FlKRYQoFkq7D9YifB%2FnSE%2FvsOVlreBgoBfiCcPBnCl4sGL6kdwvdscHUC6U%2FX%2BudO%2FQo%2Fz4xgDkele9t2Vr7Im6rbxS0s4mi1uyFzQjUeSvPtM%2FoECBlI3pri9siMMno3swGOqUBcSw2p5BLsQ8Xf9uW3yfbj6LYy8I8ZjvADNpEVfIYh0tejLaOElpUJ2EP7ZnrizZoAhMjc9%2BUXRWaP7VMDI4WZLiQ6%2BCSfJamPYsuC9cNPy3qM%2FCjJTGsE%2B1slEIrgjEiX8dZ%2BKLnDNpqnufj%2BZ9XKWCRGL7rK%2FC%2F3tOFtHoXAkYU70fm5YugBRgJTEEEavBFjr6Duqe63Nb%2BzhqR6uZEj3PUhwso&X-Amz-Signature=d2bf5b5c48267d64e95ad8698f4474ce92e6f4b75e46a6c31908e5a51924e09d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
