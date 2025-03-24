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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJWPFF7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqC1KbnTmKNARQNnM7gUH8L%2FecZC8r6%2FuKMF7x%2FTrYbAIhANe7w9X6rJDgmasOslNLnlHZtGR6hKVE8nFMhxXFiaj6KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws3%2FsfWG%2BR41vt9Ucq3AOOVmgSGYffwPvVMC3FqNdZPM4tJiHHOrt2f8rHwV4Dj%2FpT9ciDu0jUH80eyN7i66WJ3ZZ8vpxEhEB5ixiADDAaKJNC42EaLzuXOJAENgl2axv3Xz5JUwa8rqSfYpc8jVER%2FcvDAuxSQOSgo8Tf7hKp1qDOMF62DJi6Rwotv2MC3XlI0TPNAq046I%2BUP62V%2BzTCqdcPM17VA%2Ba5yGBf6BOqKXiGzHFhccV2VGAHGz8Foy2ua6mDtnHj3rkWeUmgiS9G%2FTJVw56XXoFOv%2FiRy7oH3hDEqpKGbqlb1CR2vNhuyKpBSs7fkc4v9FsNfWLBYw1Y3%2BXhLGoQOwFJM9hzPjLOkjkxNoz1HVCpKSeI4GPg63jp5j%2BXgE0%2BL3UDFG66%2B%2Fu4A3nhfCMMVbx65aqSF%2BBpKiyu4e7SZ4wOzo4asIsRHHdHO5WNEBlzEzgcVuPjecWzjixDNxeoQOPcTiRkGN7N44y8sFiHp8JoE4SP%2FbS0KKZkzdglKi1cDyvhYqUMp4331lFDbp6%2FGZWP21N%2FZuhcFLIg3vYss6jSoWqEwAlNeAnosg93Ev6h6V8E2voRzc0HxvtjItXJEotXaFsCkGfgmj3Ou0B3hpDtVdcTAenuC64VtLV4KWhPFD1ncjDc%2FYW%2FBjqkAXO7Fe9AXdCg1WPxSu7AEd4EiGbfpgc8oYq5a6U0%2FZ%2FkXD%2FA%2FRwtx%2B6d%2Fc3jCh3lyCOAVNJYMFlRU7W8HDcgRhIL%2FTVlxy6yW0IlIo0leaI1%2F%2F%2BEt4bwUOPuvksH9bYQGuRBGBrQLuuvhU2YdLuqrfJACZUtU7zS7jByZs9k%2B5cvBPEeAPGYWLV8AIvNSRCjY0zfulKpotYPvlN5UmHl67qNqdZc&X-Amz-Signature=88bfaf3f01bff7a77b81b34997fe3f1d3c61d7958974e056d2eec53c015d79ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJWPFF7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqC1KbnTmKNARQNnM7gUH8L%2FecZC8r6%2FuKMF7x%2FTrYbAIhANe7w9X6rJDgmasOslNLnlHZtGR6hKVE8nFMhxXFiaj6KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws3%2FsfWG%2BR41vt9Ucq3AOOVmgSGYffwPvVMC3FqNdZPM4tJiHHOrt2f8rHwV4Dj%2FpT9ciDu0jUH80eyN7i66WJ3ZZ8vpxEhEB5ixiADDAaKJNC42EaLzuXOJAENgl2axv3Xz5JUwa8rqSfYpc8jVER%2FcvDAuxSQOSgo8Tf7hKp1qDOMF62DJi6Rwotv2MC3XlI0TPNAq046I%2BUP62V%2BzTCqdcPM17VA%2Ba5yGBf6BOqKXiGzHFhccV2VGAHGz8Foy2ua6mDtnHj3rkWeUmgiS9G%2FTJVw56XXoFOv%2FiRy7oH3hDEqpKGbqlb1CR2vNhuyKpBSs7fkc4v9FsNfWLBYw1Y3%2BXhLGoQOwFJM9hzPjLOkjkxNoz1HVCpKSeI4GPg63jp5j%2BXgE0%2BL3UDFG66%2B%2Fu4A3nhfCMMVbx65aqSF%2BBpKiyu4e7SZ4wOzo4asIsRHHdHO5WNEBlzEzgcVuPjecWzjixDNxeoQOPcTiRkGN7N44y8sFiHp8JoE4SP%2FbS0KKZkzdglKi1cDyvhYqUMp4331lFDbp6%2FGZWP21N%2FZuhcFLIg3vYss6jSoWqEwAlNeAnosg93Ev6h6V8E2voRzc0HxvtjItXJEotXaFsCkGfgmj3Ou0B3hpDtVdcTAenuC64VtLV4KWhPFD1ncjDc%2FYW%2FBjqkAXO7Fe9AXdCg1WPxSu7AEd4EiGbfpgc8oYq5a6U0%2FZ%2FkXD%2FA%2FRwtx%2B6d%2Fc3jCh3lyCOAVNJYMFlRU7W8HDcgRhIL%2FTVlxy6yW0IlIo0leaI1%2F%2F%2BEt4bwUOPuvksH9bYQGuRBGBrQLuuvhU2YdLuqrfJACZUtU7zS7jByZs9k%2B5cvBPEeAPGYWLV8AIvNSRCjY0zfulKpotYPvlN5UmHl67qNqdZc&X-Amz-Signature=738e2a9032989bac932a4454d94ceb565129b2efe048ad384be76166ece120b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJWPFF7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqC1KbnTmKNARQNnM7gUH8L%2FecZC8r6%2FuKMF7x%2FTrYbAIhANe7w9X6rJDgmasOslNLnlHZtGR6hKVE8nFMhxXFiaj6KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws3%2FsfWG%2BR41vt9Ucq3AOOVmgSGYffwPvVMC3FqNdZPM4tJiHHOrt2f8rHwV4Dj%2FpT9ciDu0jUH80eyN7i66WJ3ZZ8vpxEhEB5ixiADDAaKJNC42EaLzuXOJAENgl2axv3Xz5JUwa8rqSfYpc8jVER%2FcvDAuxSQOSgo8Tf7hKp1qDOMF62DJi6Rwotv2MC3XlI0TPNAq046I%2BUP62V%2BzTCqdcPM17VA%2Ba5yGBf6BOqKXiGzHFhccV2VGAHGz8Foy2ua6mDtnHj3rkWeUmgiS9G%2FTJVw56XXoFOv%2FiRy7oH3hDEqpKGbqlb1CR2vNhuyKpBSs7fkc4v9FsNfWLBYw1Y3%2BXhLGoQOwFJM9hzPjLOkjkxNoz1HVCpKSeI4GPg63jp5j%2BXgE0%2BL3UDFG66%2B%2Fu4A3nhfCMMVbx65aqSF%2BBpKiyu4e7SZ4wOzo4asIsRHHdHO5WNEBlzEzgcVuPjecWzjixDNxeoQOPcTiRkGN7N44y8sFiHp8JoE4SP%2FbS0KKZkzdglKi1cDyvhYqUMp4331lFDbp6%2FGZWP21N%2FZuhcFLIg3vYss6jSoWqEwAlNeAnosg93Ev6h6V8E2voRzc0HxvtjItXJEotXaFsCkGfgmj3Ou0B3hpDtVdcTAenuC64VtLV4KWhPFD1ncjDc%2FYW%2FBjqkAXO7Fe9AXdCg1WPxSu7AEd4EiGbfpgc8oYq5a6U0%2FZ%2FkXD%2FA%2FRwtx%2B6d%2Fc3jCh3lyCOAVNJYMFlRU7W8HDcgRhIL%2FTVlxy6yW0IlIo0leaI1%2F%2F%2BEt4bwUOPuvksH9bYQGuRBGBrQLuuvhU2YdLuqrfJACZUtU7zS7jByZs9k%2B5cvBPEeAPGYWLV8AIvNSRCjY0zfulKpotYPvlN5UmHl67qNqdZc&X-Amz-Signature=261aec660efb1e8b7f9eaa49d6478e8f50c84b218721519961096e74a2ce6e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJWPFF7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqC1KbnTmKNARQNnM7gUH8L%2FecZC8r6%2FuKMF7x%2FTrYbAIhANe7w9X6rJDgmasOslNLnlHZtGR6hKVE8nFMhxXFiaj6KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws3%2FsfWG%2BR41vt9Ucq3AOOVmgSGYffwPvVMC3FqNdZPM4tJiHHOrt2f8rHwV4Dj%2FpT9ciDu0jUH80eyN7i66WJ3ZZ8vpxEhEB5ixiADDAaKJNC42EaLzuXOJAENgl2axv3Xz5JUwa8rqSfYpc8jVER%2FcvDAuxSQOSgo8Tf7hKp1qDOMF62DJi6Rwotv2MC3XlI0TPNAq046I%2BUP62V%2BzTCqdcPM17VA%2Ba5yGBf6BOqKXiGzHFhccV2VGAHGz8Foy2ua6mDtnHj3rkWeUmgiS9G%2FTJVw56XXoFOv%2FiRy7oH3hDEqpKGbqlb1CR2vNhuyKpBSs7fkc4v9FsNfWLBYw1Y3%2BXhLGoQOwFJM9hzPjLOkjkxNoz1HVCpKSeI4GPg63jp5j%2BXgE0%2BL3UDFG66%2B%2Fu4A3nhfCMMVbx65aqSF%2BBpKiyu4e7SZ4wOzo4asIsRHHdHO5WNEBlzEzgcVuPjecWzjixDNxeoQOPcTiRkGN7N44y8sFiHp8JoE4SP%2FbS0KKZkzdglKi1cDyvhYqUMp4331lFDbp6%2FGZWP21N%2FZuhcFLIg3vYss6jSoWqEwAlNeAnosg93Ev6h6V8E2voRzc0HxvtjItXJEotXaFsCkGfgmj3Ou0B3hpDtVdcTAenuC64VtLV4KWhPFD1ncjDc%2FYW%2FBjqkAXO7Fe9AXdCg1WPxSu7AEd4EiGbfpgc8oYq5a6U0%2FZ%2FkXD%2FA%2FRwtx%2B6d%2Fc3jCh3lyCOAVNJYMFlRU7W8HDcgRhIL%2FTVlxy6yW0IlIo0leaI1%2F%2F%2BEt4bwUOPuvksH9bYQGuRBGBrQLuuvhU2YdLuqrfJACZUtU7zS7jByZs9k%2B5cvBPEeAPGYWLV8AIvNSRCjY0zfulKpotYPvlN5UmHl67qNqdZc&X-Amz-Signature=d8b40f083cdfac4fd402535c3ca28a95eaeb3e1e46b48dc7238db4c9f2a7e5f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJWPFF7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqC1KbnTmKNARQNnM7gUH8L%2FecZC8r6%2FuKMF7x%2FTrYbAIhANe7w9X6rJDgmasOslNLnlHZtGR6hKVE8nFMhxXFiaj6KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws3%2FsfWG%2BR41vt9Ucq3AOOVmgSGYffwPvVMC3FqNdZPM4tJiHHOrt2f8rHwV4Dj%2FpT9ciDu0jUH80eyN7i66WJ3ZZ8vpxEhEB5ixiADDAaKJNC42EaLzuXOJAENgl2axv3Xz5JUwa8rqSfYpc8jVER%2FcvDAuxSQOSgo8Tf7hKp1qDOMF62DJi6Rwotv2MC3XlI0TPNAq046I%2BUP62V%2BzTCqdcPM17VA%2Ba5yGBf6BOqKXiGzHFhccV2VGAHGz8Foy2ua6mDtnHj3rkWeUmgiS9G%2FTJVw56XXoFOv%2FiRy7oH3hDEqpKGbqlb1CR2vNhuyKpBSs7fkc4v9FsNfWLBYw1Y3%2BXhLGoQOwFJM9hzPjLOkjkxNoz1HVCpKSeI4GPg63jp5j%2BXgE0%2BL3UDFG66%2B%2Fu4A3nhfCMMVbx65aqSF%2BBpKiyu4e7SZ4wOzo4asIsRHHdHO5WNEBlzEzgcVuPjecWzjixDNxeoQOPcTiRkGN7N44y8sFiHp8JoE4SP%2FbS0KKZkzdglKi1cDyvhYqUMp4331lFDbp6%2FGZWP21N%2FZuhcFLIg3vYss6jSoWqEwAlNeAnosg93Ev6h6V8E2voRzc0HxvtjItXJEotXaFsCkGfgmj3Ou0B3hpDtVdcTAenuC64VtLV4KWhPFD1ncjDc%2FYW%2FBjqkAXO7Fe9AXdCg1WPxSu7AEd4EiGbfpgc8oYq5a6U0%2FZ%2FkXD%2FA%2FRwtx%2B6d%2Fc3jCh3lyCOAVNJYMFlRU7W8HDcgRhIL%2FTVlxy6yW0IlIo0leaI1%2F%2F%2BEt4bwUOPuvksH9bYQGuRBGBrQLuuvhU2YdLuqrfJACZUtU7zS7jByZs9k%2B5cvBPEeAPGYWLV8AIvNSRCjY0zfulKpotYPvlN5UmHl67qNqdZc&X-Amz-Signature=364347f8ecda6fb065abb5564d28b832be0239959e561f1eb29326e4bc9b1239&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJWPFF7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqC1KbnTmKNARQNnM7gUH8L%2FecZC8r6%2FuKMF7x%2FTrYbAIhANe7w9X6rJDgmasOslNLnlHZtGR6hKVE8nFMhxXFiaj6KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws3%2FsfWG%2BR41vt9Ucq3AOOVmgSGYffwPvVMC3FqNdZPM4tJiHHOrt2f8rHwV4Dj%2FpT9ciDu0jUH80eyN7i66WJ3ZZ8vpxEhEB5ixiADDAaKJNC42EaLzuXOJAENgl2axv3Xz5JUwa8rqSfYpc8jVER%2FcvDAuxSQOSgo8Tf7hKp1qDOMF62DJi6Rwotv2MC3XlI0TPNAq046I%2BUP62V%2BzTCqdcPM17VA%2Ba5yGBf6BOqKXiGzHFhccV2VGAHGz8Foy2ua6mDtnHj3rkWeUmgiS9G%2FTJVw56XXoFOv%2FiRy7oH3hDEqpKGbqlb1CR2vNhuyKpBSs7fkc4v9FsNfWLBYw1Y3%2BXhLGoQOwFJM9hzPjLOkjkxNoz1HVCpKSeI4GPg63jp5j%2BXgE0%2BL3UDFG66%2B%2Fu4A3nhfCMMVbx65aqSF%2BBpKiyu4e7SZ4wOzo4asIsRHHdHO5WNEBlzEzgcVuPjecWzjixDNxeoQOPcTiRkGN7N44y8sFiHp8JoE4SP%2FbS0KKZkzdglKi1cDyvhYqUMp4331lFDbp6%2FGZWP21N%2FZuhcFLIg3vYss6jSoWqEwAlNeAnosg93Ev6h6V8E2voRzc0HxvtjItXJEotXaFsCkGfgmj3Ou0B3hpDtVdcTAenuC64VtLV4KWhPFD1ncjDc%2FYW%2FBjqkAXO7Fe9AXdCg1WPxSu7AEd4EiGbfpgc8oYq5a6U0%2FZ%2FkXD%2FA%2FRwtx%2B6d%2Fc3jCh3lyCOAVNJYMFlRU7W8HDcgRhIL%2FTVlxy6yW0IlIo0leaI1%2F%2F%2BEt4bwUOPuvksH9bYQGuRBGBrQLuuvhU2YdLuqrfJACZUtU7zS7jByZs9k%2B5cvBPEeAPGYWLV8AIvNSRCjY0zfulKpotYPvlN5UmHl67qNqdZc&X-Amz-Signature=e491ce853bdca33b77f50a447762533d0d4e491abc0bc60bcc182bfc6af2971e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJWPFF7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqC1KbnTmKNARQNnM7gUH8L%2FecZC8r6%2FuKMF7x%2FTrYbAIhANe7w9X6rJDgmasOslNLnlHZtGR6hKVE8nFMhxXFiaj6KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws3%2FsfWG%2BR41vt9Ucq3AOOVmgSGYffwPvVMC3FqNdZPM4tJiHHOrt2f8rHwV4Dj%2FpT9ciDu0jUH80eyN7i66WJ3ZZ8vpxEhEB5ixiADDAaKJNC42EaLzuXOJAENgl2axv3Xz5JUwa8rqSfYpc8jVER%2FcvDAuxSQOSgo8Tf7hKp1qDOMF62DJi6Rwotv2MC3XlI0TPNAq046I%2BUP62V%2BzTCqdcPM17VA%2Ba5yGBf6BOqKXiGzHFhccV2VGAHGz8Foy2ua6mDtnHj3rkWeUmgiS9G%2FTJVw56XXoFOv%2FiRy7oH3hDEqpKGbqlb1CR2vNhuyKpBSs7fkc4v9FsNfWLBYw1Y3%2BXhLGoQOwFJM9hzPjLOkjkxNoz1HVCpKSeI4GPg63jp5j%2BXgE0%2BL3UDFG66%2B%2Fu4A3nhfCMMVbx65aqSF%2BBpKiyu4e7SZ4wOzo4asIsRHHdHO5WNEBlzEzgcVuPjecWzjixDNxeoQOPcTiRkGN7N44y8sFiHp8JoE4SP%2FbS0KKZkzdglKi1cDyvhYqUMp4331lFDbp6%2FGZWP21N%2FZuhcFLIg3vYss6jSoWqEwAlNeAnosg93Ev6h6V8E2voRzc0HxvtjItXJEotXaFsCkGfgmj3Ou0B3hpDtVdcTAenuC64VtLV4KWhPFD1ncjDc%2FYW%2FBjqkAXO7Fe9AXdCg1WPxSu7AEd4EiGbfpgc8oYq5a6U0%2FZ%2FkXD%2FA%2FRwtx%2B6d%2Fc3jCh3lyCOAVNJYMFlRU7W8HDcgRhIL%2FTVlxy6yW0IlIo0leaI1%2F%2F%2BEt4bwUOPuvksH9bYQGuRBGBrQLuuvhU2YdLuqrfJACZUtU7zS7jByZs9k%2B5cvBPEeAPGYWLV8AIvNSRCjY0zfulKpotYPvlN5UmHl67qNqdZc&X-Amz-Signature=ff048a47426c73f137aed720330ba9a22fb8cbf33b3237f4a952474855e51aa5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
