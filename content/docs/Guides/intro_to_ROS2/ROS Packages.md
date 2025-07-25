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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLIYDMS7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC%2BffYUMhT1keumyPNWQpDqy3o5krqzkuFnW5h8kle7KAIgJj4Hk2U4cwWgRFHaTZwlEJN265wLMK5hRP1WQEbACgIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDG30R%2FLLvCkXvBo1nircA1XsyPcVNxew8cJoQxbHcQV9mDDLCmTDRukpGyjncb4Ih7KTGrhB2GCttc0%2F2moC0MCVM0leXlLjYPAL13VFvty8%2Bg30arWKi6UEhZUSEXb3imQAtzRvOo134TMqCoYNlJeMbb3zt0LUWUBo8csdY%2BMscm9QH4fesH8%2BnyQFoa0NrJnwmkpZK1GvtbPS6pKs5m0ODmcIfTUqlsgr%2FGT7g2ZjEzylK7qLeaXhnV8%2FnRSv1rUYRkMd%2FJOTNPl2R7DzhLhd1DX2Wg%2FyDtm1faqxvHbUToZCQsBUe4SXKKa7h5ot1fB9BlvEz%2FuSoL7JxUE3m6SDme%2F4H9a0retvOUChHThX4XY7ZLphRiDk5a46ctYVCla4NGra5jKuPnoj5%2BFaiZDD3eycVrR%2B6fyGaiiQ2xKJfV%2FiByRaQEJuQLZX9LKssH7vjikHmf5ngqZkXq2iR0T2P2iJG59cqhFXY%2FcAsOLCbqLo7D3MXeK0VRZZn8KYi%2FsigmT7BVrBObkj%2Bio7gJhw6xdBN9OgEC%2BpvaLCQMqo4PnRfK8vWd88pHat4OCmVx8ZwFXWtHR36asSWpd%2FP4H3fauUEWooXW0o%2BonJVWQhesKuwDI%2B1SDaOQlEa9nJjCPSbTSqvjl5i0IVML3Rj8QGOqUBJavXQHbAexymjAGyG11pAHlrb3JbNWibg5p7zwq9ApsJy4FVrKxhkEqxl7yYQ%2FFOOYYzbRmvfw10%2Fk0MxrBo1GjrO1K6tM27ZYiiGuexNFkpmnxP0cpEBkoZPrpq9GFoRy1oYSwAwmkqfNvmj%2BQY9pJazrJk2t6bdd8A%2FrFCn5KC7%2FTNDhtBHQMshVTlobjmXgaGBuJTrAZv4U0jdgkxnctIDAeY&X-Amz-Signature=2f4e4abb517dd8de851df73e8b4fd5e6bf431acc70caa4769c85121abcf26bd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLIYDMS7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC%2BffYUMhT1keumyPNWQpDqy3o5krqzkuFnW5h8kle7KAIgJj4Hk2U4cwWgRFHaTZwlEJN265wLMK5hRP1WQEbACgIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDG30R%2FLLvCkXvBo1nircA1XsyPcVNxew8cJoQxbHcQV9mDDLCmTDRukpGyjncb4Ih7KTGrhB2GCttc0%2F2moC0MCVM0leXlLjYPAL13VFvty8%2Bg30arWKi6UEhZUSEXb3imQAtzRvOo134TMqCoYNlJeMbb3zt0LUWUBo8csdY%2BMscm9QH4fesH8%2BnyQFoa0NrJnwmkpZK1GvtbPS6pKs5m0ODmcIfTUqlsgr%2FGT7g2ZjEzylK7qLeaXhnV8%2FnRSv1rUYRkMd%2FJOTNPl2R7DzhLhd1DX2Wg%2FyDtm1faqxvHbUToZCQsBUe4SXKKa7h5ot1fB9BlvEz%2FuSoL7JxUE3m6SDme%2F4H9a0retvOUChHThX4XY7ZLphRiDk5a46ctYVCla4NGra5jKuPnoj5%2BFaiZDD3eycVrR%2B6fyGaiiQ2xKJfV%2FiByRaQEJuQLZX9LKssH7vjikHmf5ngqZkXq2iR0T2P2iJG59cqhFXY%2FcAsOLCbqLo7D3MXeK0VRZZn8KYi%2FsigmT7BVrBObkj%2Bio7gJhw6xdBN9OgEC%2BpvaLCQMqo4PnRfK8vWd88pHat4OCmVx8ZwFXWtHR36asSWpd%2FP4H3fauUEWooXW0o%2BonJVWQhesKuwDI%2B1SDaOQlEa9nJjCPSbTSqvjl5i0IVML3Rj8QGOqUBJavXQHbAexymjAGyG11pAHlrb3JbNWibg5p7zwq9ApsJy4FVrKxhkEqxl7yYQ%2FFOOYYzbRmvfw10%2Fk0MxrBo1GjrO1K6tM27ZYiiGuexNFkpmnxP0cpEBkoZPrpq9GFoRy1oYSwAwmkqfNvmj%2BQY9pJazrJk2t6bdd8A%2FrFCn5KC7%2FTNDhtBHQMshVTlobjmXgaGBuJTrAZv4U0jdgkxnctIDAeY&X-Amz-Signature=cbf12ceffa3e36eb5f0bcd9577c6c05cb73d024d87f79e0973299f141b6affe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLIYDMS7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC%2BffYUMhT1keumyPNWQpDqy3o5krqzkuFnW5h8kle7KAIgJj4Hk2U4cwWgRFHaTZwlEJN265wLMK5hRP1WQEbACgIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDG30R%2FLLvCkXvBo1nircA1XsyPcVNxew8cJoQxbHcQV9mDDLCmTDRukpGyjncb4Ih7KTGrhB2GCttc0%2F2moC0MCVM0leXlLjYPAL13VFvty8%2Bg30arWKi6UEhZUSEXb3imQAtzRvOo134TMqCoYNlJeMbb3zt0LUWUBo8csdY%2BMscm9QH4fesH8%2BnyQFoa0NrJnwmkpZK1GvtbPS6pKs5m0ODmcIfTUqlsgr%2FGT7g2ZjEzylK7qLeaXhnV8%2FnRSv1rUYRkMd%2FJOTNPl2R7DzhLhd1DX2Wg%2FyDtm1faqxvHbUToZCQsBUe4SXKKa7h5ot1fB9BlvEz%2FuSoL7JxUE3m6SDme%2F4H9a0retvOUChHThX4XY7ZLphRiDk5a46ctYVCla4NGra5jKuPnoj5%2BFaiZDD3eycVrR%2B6fyGaiiQ2xKJfV%2FiByRaQEJuQLZX9LKssH7vjikHmf5ngqZkXq2iR0T2P2iJG59cqhFXY%2FcAsOLCbqLo7D3MXeK0VRZZn8KYi%2FsigmT7BVrBObkj%2Bio7gJhw6xdBN9OgEC%2BpvaLCQMqo4PnRfK8vWd88pHat4OCmVx8ZwFXWtHR36asSWpd%2FP4H3fauUEWooXW0o%2BonJVWQhesKuwDI%2B1SDaOQlEa9nJjCPSbTSqvjl5i0IVML3Rj8QGOqUBJavXQHbAexymjAGyG11pAHlrb3JbNWibg5p7zwq9ApsJy4FVrKxhkEqxl7yYQ%2FFOOYYzbRmvfw10%2Fk0MxrBo1GjrO1K6tM27ZYiiGuexNFkpmnxP0cpEBkoZPrpq9GFoRy1oYSwAwmkqfNvmj%2BQY9pJazrJk2t6bdd8A%2FrFCn5KC7%2FTNDhtBHQMshVTlobjmXgaGBuJTrAZv4U0jdgkxnctIDAeY&X-Amz-Signature=48128894b76335366dadf5e6e7e3cffbfe6711e32ba1d04124976da7eb822e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLIYDMS7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC%2BffYUMhT1keumyPNWQpDqy3o5krqzkuFnW5h8kle7KAIgJj4Hk2U4cwWgRFHaTZwlEJN265wLMK5hRP1WQEbACgIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDG30R%2FLLvCkXvBo1nircA1XsyPcVNxew8cJoQxbHcQV9mDDLCmTDRukpGyjncb4Ih7KTGrhB2GCttc0%2F2moC0MCVM0leXlLjYPAL13VFvty8%2Bg30arWKi6UEhZUSEXb3imQAtzRvOo134TMqCoYNlJeMbb3zt0LUWUBo8csdY%2BMscm9QH4fesH8%2BnyQFoa0NrJnwmkpZK1GvtbPS6pKs5m0ODmcIfTUqlsgr%2FGT7g2ZjEzylK7qLeaXhnV8%2FnRSv1rUYRkMd%2FJOTNPl2R7DzhLhd1DX2Wg%2FyDtm1faqxvHbUToZCQsBUe4SXKKa7h5ot1fB9BlvEz%2FuSoL7JxUE3m6SDme%2F4H9a0retvOUChHThX4XY7ZLphRiDk5a46ctYVCla4NGra5jKuPnoj5%2BFaiZDD3eycVrR%2B6fyGaiiQ2xKJfV%2FiByRaQEJuQLZX9LKssH7vjikHmf5ngqZkXq2iR0T2P2iJG59cqhFXY%2FcAsOLCbqLo7D3MXeK0VRZZn8KYi%2FsigmT7BVrBObkj%2Bio7gJhw6xdBN9OgEC%2BpvaLCQMqo4PnRfK8vWd88pHat4OCmVx8ZwFXWtHR36asSWpd%2FP4H3fauUEWooXW0o%2BonJVWQhesKuwDI%2B1SDaOQlEa9nJjCPSbTSqvjl5i0IVML3Rj8QGOqUBJavXQHbAexymjAGyG11pAHlrb3JbNWibg5p7zwq9ApsJy4FVrKxhkEqxl7yYQ%2FFOOYYzbRmvfw10%2Fk0MxrBo1GjrO1K6tM27ZYiiGuexNFkpmnxP0cpEBkoZPrpq9GFoRy1oYSwAwmkqfNvmj%2BQY9pJazrJk2t6bdd8A%2FrFCn5KC7%2FTNDhtBHQMshVTlobjmXgaGBuJTrAZv4U0jdgkxnctIDAeY&X-Amz-Signature=e957b4053550244c116ee2eb6afa7b159f264a28d13ff2c90ce70b377a971f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLIYDMS7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC%2BffYUMhT1keumyPNWQpDqy3o5krqzkuFnW5h8kle7KAIgJj4Hk2U4cwWgRFHaTZwlEJN265wLMK5hRP1WQEbACgIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDG30R%2FLLvCkXvBo1nircA1XsyPcVNxew8cJoQxbHcQV9mDDLCmTDRukpGyjncb4Ih7KTGrhB2GCttc0%2F2moC0MCVM0leXlLjYPAL13VFvty8%2Bg30arWKi6UEhZUSEXb3imQAtzRvOo134TMqCoYNlJeMbb3zt0LUWUBo8csdY%2BMscm9QH4fesH8%2BnyQFoa0NrJnwmkpZK1GvtbPS6pKs5m0ODmcIfTUqlsgr%2FGT7g2ZjEzylK7qLeaXhnV8%2FnRSv1rUYRkMd%2FJOTNPl2R7DzhLhd1DX2Wg%2FyDtm1faqxvHbUToZCQsBUe4SXKKa7h5ot1fB9BlvEz%2FuSoL7JxUE3m6SDme%2F4H9a0retvOUChHThX4XY7ZLphRiDk5a46ctYVCla4NGra5jKuPnoj5%2BFaiZDD3eycVrR%2B6fyGaiiQ2xKJfV%2FiByRaQEJuQLZX9LKssH7vjikHmf5ngqZkXq2iR0T2P2iJG59cqhFXY%2FcAsOLCbqLo7D3MXeK0VRZZn8KYi%2FsigmT7BVrBObkj%2Bio7gJhw6xdBN9OgEC%2BpvaLCQMqo4PnRfK8vWd88pHat4OCmVx8ZwFXWtHR36asSWpd%2FP4H3fauUEWooXW0o%2BonJVWQhesKuwDI%2B1SDaOQlEa9nJjCPSbTSqvjl5i0IVML3Rj8QGOqUBJavXQHbAexymjAGyG11pAHlrb3JbNWibg5p7zwq9ApsJy4FVrKxhkEqxl7yYQ%2FFOOYYzbRmvfw10%2Fk0MxrBo1GjrO1K6tM27ZYiiGuexNFkpmnxP0cpEBkoZPrpq9GFoRy1oYSwAwmkqfNvmj%2BQY9pJazrJk2t6bdd8A%2FrFCn5KC7%2FTNDhtBHQMshVTlobjmXgaGBuJTrAZv4U0jdgkxnctIDAeY&X-Amz-Signature=005fe5d796c672e446347736b5f1fff6ecb1b2d195b17f6cfb9ae32188301356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLIYDMS7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC%2BffYUMhT1keumyPNWQpDqy3o5krqzkuFnW5h8kle7KAIgJj4Hk2U4cwWgRFHaTZwlEJN265wLMK5hRP1WQEbACgIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDG30R%2FLLvCkXvBo1nircA1XsyPcVNxew8cJoQxbHcQV9mDDLCmTDRukpGyjncb4Ih7KTGrhB2GCttc0%2F2moC0MCVM0leXlLjYPAL13VFvty8%2Bg30arWKi6UEhZUSEXb3imQAtzRvOo134TMqCoYNlJeMbb3zt0LUWUBo8csdY%2BMscm9QH4fesH8%2BnyQFoa0NrJnwmkpZK1GvtbPS6pKs5m0ODmcIfTUqlsgr%2FGT7g2ZjEzylK7qLeaXhnV8%2FnRSv1rUYRkMd%2FJOTNPl2R7DzhLhd1DX2Wg%2FyDtm1faqxvHbUToZCQsBUe4SXKKa7h5ot1fB9BlvEz%2FuSoL7JxUE3m6SDme%2F4H9a0retvOUChHThX4XY7ZLphRiDk5a46ctYVCla4NGra5jKuPnoj5%2BFaiZDD3eycVrR%2B6fyGaiiQ2xKJfV%2FiByRaQEJuQLZX9LKssH7vjikHmf5ngqZkXq2iR0T2P2iJG59cqhFXY%2FcAsOLCbqLo7D3MXeK0VRZZn8KYi%2FsigmT7BVrBObkj%2Bio7gJhw6xdBN9OgEC%2BpvaLCQMqo4PnRfK8vWd88pHat4OCmVx8ZwFXWtHR36asSWpd%2FP4H3fauUEWooXW0o%2BonJVWQhesKuwDI%2B1SDaOQlEa9nJjCPSbTSqvjl5i0IVML3Rj8QGOqUBJavXQHbAexymjAGyG11pAHlrb3JbNWibg5p7zwq9ApsJy4FVrKxhkEqxl7yYQ%2FFOOYYzbRmvfw10%2Fk0MxrBo1GjrO1K6tM27ZYiiGuexNFkpmnxP0cpEBkoZPrpq9GFoRy1oYSwAwmkqfNvmj%2BQY9pJazrJk2t6bdd8A%2FrFCn5KC7%2FTNDhtBHQMshVTlobjmXgaGBuJTrAZv4U0jdgkxnctIDAeY&X-Amz-Signature=4d427549c9c00efbab46c053c279f04b34d1fbb8407947c43be7914a01807601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLIYDMS7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC%2BffYUMhT1keumyPNWQpDqy3o5krqzkuFnW5h8kle7KAIgJj4Hk2U4cwWgRFHaTZwlEJN265wLMK5hRP1WQEbACgIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDG30R%2FLLvCkXvBo1nircA1XsyPcVNxew8cJoQxbHcQV9mDDLCmTDRukpGyjncb4Ih7KTGrhB2GCttc0%2F2moC0MCVM0leXlLjYPAL13VFvty8%2Bg30arWKi6UEhZUSEXb3imQAtzRvOo134TMqCoYNlJeMbb3zt0LUWUBo8csdY%2BMscm9QH4fesH8%2BnyQFoa0NrJnwmkpZK1GvtbPS6pKs5m0ODmcIfTUqlsgr%2FGT7g2ZjEzylK7qLeaXhnV8%2FnRSv1rUYRkMd%2FJOTNPl2R7DzhLhd1DX2Wg%2FyDtm1faqxvHbUToZCQsBUe4SXKKa7h5ot1fB9BlvEz%2FuSoL7JxUE3m6SDme%2F4H9a0retvOUChHThX4XY7ZLphRiDk5a46ctYVCla4NGra5jKuPnoj5%2BFaiZDD3eycVrR%2B6fyGaiiQ2xKJfV%2FiByRaQEJuQLZX9LKssH7vjikHmf5ngqZkXq2iR0T2P2iJG59cqhFXY%2FcAsOLCbqLo7D3MXeK0VRZZn8KYi%2FsigmT7BVrBObkj%2Bio7gJhw6xdBN9OgEC%2BpvaLCQMqo4PnRfK8vWd88pHat4OCmVx8ZwFXWtHR36asSWpd%2FP4H3fauUEWooXW0o%2BonJVWQhesKuwDI%2B1SDaOQlEa9nJjCPSbTSqvjl5i0IVML3Rj8QGOqUBJavXQHbAexymjAGyG11pAHlrb3JbNWibg5p7zwq9ApsJy4FVrKxhkEqxl7yYQ%2FFOOYYzbRmvfw10%2Fk0MxrBo1GjrO1K6tM27ZYiiGuexNFkpmnxP0cpEBkoZPrpq9GFoRy1oYSwAwmkqfNvmj%2BQY9pJazrJk2t6bdd8A%2FrFCn5KC7%2FTNDhtBHQMshVTlobjmXgaGBuJTrAZv4U0jdgkxnctIDAeY&X-Amz-Signature=e2dc2436e4227ca70986da6705b94196a5d88a12660cc56eac433a7697339fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
