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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NIR5KL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCgZBmpL%2FdLYVmUPAx2KPrxQJDi%2BvUf%2FQE5RNXaD%2BIJ5AIgW98q7CSWthyg6iZJIdXY%2BCvdi40xOPw9NIurfaFGNJYq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJK6D0Mrq6rtfezVgCrcAwXEtECwvMa0kZCsdUh6%2BYAy8sT6zOkKAJxRB81L9xbe7D1e8DWdIxOE5IQqtMeLZMRXGrXtZfNFizZlVYNUHA%2BhdhywI%2Bhei0hE0RugWqKZkev7lViVRJzNsfPpRD4fzZJzZzIYrBuGwL5KFfa1qm779251XY9HmSgBiDn%2F8sceJD%2FD2V0%2FJiVgwMkmAjPwQcEBqQMNDj5Yk0gabA2MX6aJQweFOFNFz31pnJkq%2BrL6%2BucpuMRhNcCBnPt5YhGPxK4tN9NROTbeiBSmmszC1KqZnB9XeYXnjuAQCzwKX5cqD%2F4uvNhLHW5PX8RH3HiIFphRbDeqpGSu%2F4cuE%2By4GBuFAefJfMc6RLSMRO6UBSnXGpYv7s6vD2enc5tdsIBivOF0CsWAs0RtU4FfojxkxS5b0WZpJIkPPUvRt%2Fx4EqoDGpRBCt518byFmYADc990tcDvj7KxeoNhTgTjTT9QTbiyhdLrvz7hYOqgt1LAqfTxGVSBIRE2%2Bq5b%2Bv7Sk0%2Bb2L4kmYFpyUVK39ATkLvm5mwTBv6LHsvnquZKHVAIi6CfJtbzTCzICHLJ7OMwGwyjAZCIQ9KPXlyg9v9v1vr2vOUfw%2FyqARRCrrHxRQfY3VQa36RqqnocYTtL%2FG%2FXMLSQnr8GOqUBxtYlztIQq1Ra%2BIeeZwf0jkSNdjnT736QKjGwVIBoQYzMlqF8w7dSjEvynU2UBdaH6LK2lSaPJzD1hI3m7S0D8C7x3h2cErtlu%2BtLtcfux6YoehW5GIB%2BTyW%2FAPGHWFq7TWtJyacTwCfmux51ZQkz1iAAH7%2BOPX3o0Wiqr9UhPFTjJh0bN2NuhJ%2Bq5CJBmZBlEFvIjKccZupgyw%2BCqJHY4jGQAq2k&X-Amz-Signature=4b7b3f0e8c88b83ac728dea27769b3c234c486970ed224879536b5a8b68fab7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NIR5KL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCgZBmpL%2FdLYVmUPAx2KPrxQJDi%2BvUf%2FQE5RNXaD%2BIJ5AIgW98q7CSWthyg6iZJIdXY%2BCvdi40xOPw9NIurfaFGNJYq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJK6D0Mrq6rtfezVgCrcAwXEtECwvMa0kZCsdUh6%2BYAy8sT6zOkKAJxRB81L9xbe7D1e8DWdIxOE5IQqtMeLZMRXGrXtZfNFizZlVYNUHA%2BhdhywI%2Bhei0hE0RugWqKZkev7lViVRJzNsfPpRD4fzZJzZzIYrBuGwL5KFfa1qm779251XY9HmSgBiDn%2F8sceJD%2FD2V0%2FJiVgwMkmAjPwQcEBqQMNDj5Yk0gabA2MX6aJQweFOFNFz31pnJkq%2BrL6%2BucpuMRhNcCBnPt5YhGPxK4tN9NROTbeiBSmmszC1KqZnB9XeYXnjuAQCzwKX5cqD%2F4uvNhLHW5PX8RH3HiIFphRbDeqpGSu%2F4cuE%2By4GBuFAefJfMc6RLSMRO6UBSnXGpYv7s6vD2enc5tdsIBivOF0CsWAs0RtU4FfojxkxS5b0WZpJIkPPUvRt%2Fx4EqoDGpRBCt518byFmYADc990tcDvj7KxeoNhTgTjTT9QTbiyhdLrvz7hYOqgt1LAqfTxGVSBIRE2%2Bq5b%2Bv7Sk0%2Bb2L4kmYFpyUVK39ATkLvm5mwTBv6LHsvnquZKHVAIi6CfJtbzTCzICHLJ7OMwGwyjAZCIQ9KPXlyg9v9v1vr2vOUfw%2FyqARRCrrHxRQfY3VQa36RqqnocYTtL%2FG%2FXMLSQnr8GOqUBxtYlztIQq1Ra%2BIeeZwf0jkSNdjnT736QKjGwVIBoQYzMlqF8w7dSjEvynU2UBdaH6LK2lSaPJzD1hI3m7S0D8C7x3h2cErtlu%2BtLtcfux6YoehW5GIB%2BTyW%2FAPGHWFq7TWtJyacTwCfmux51ZQkz1iAAH7%2BOPX3o0Wiqr9UhPFTjJh0bN2NuhJ%2Bq5CJBmZBlEFvIjKccZupgyw%2BCqJHY4jGQAq2k&X-Amz-Signature=7246a1e218be9b9dbfc6340aa3aa849480c2f46758da5cd66e6a3880b27fe5d0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NIR5KL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCgZBmpL%2FdLYVmUPAx2KPrxQJDi%2BvUf%2FQE5RNXaD%2BIJ5AIgW98q7CSWthyg6iZJIdXY%2BCvdi40xOPw9NIurfaFGNJYq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJK6D0Mrq6rtfezVgCrcAwXEtECwvMa0kZCsdUh6%2BYAy8sT6zOkKAJxRB81L9xbe7D1e8DWdIxOE5IQqtMeLZMRXGrXtZfNFizZlVYNUHA%2BhdhywI%2Bhei0hE0RugWqKZkev7lViVRJzNsfPpRD4fzZJzZzIYrBuGwL5KFfa1qm779251XY9HmSgBiDn%2F8sceJD%2FD2V0%2FJiVgwMkmAjPwQcEBqQMNDj5Yk0gabA2MX6aJQweFOFNFz31pnJkq%2BrL6%2BucpuMRhNcCBnPt5YhGPxK4tN9NROTbeiBSmmszC1KqZnB9XeYXnjuAQCzwKX5cqD%2F4uvNhLHW5PX8RH3HiIFphRbDeqpGSu%2F4cuE%2By4GBuFAefJfMc6RLSMRO6UBSnXGpYv7s6vD2enc5tdsIBivOF0CsWAs0RtU4FfojxkxS5b0WZpJIkPPUvRt%2Fx4EqoDGpRBCt518byFmYADc990tcDvj7KxeoNhTgTjTT9QTbiyhdLrvz7hYOqgt1LAqfTxGVSBIRE2%2Bq5b%2Bv7Sk0%2Bb2L4kmYFpyUVK39ATkLvm5mwTBv6LHsvnquZKHVAIi6CfJtbzTCzICHLJ7OMwGwyjAZCIQ9KPXlyg9v9v1vr2vOUfw%2FyqARRCrrHxRQfY3VQa36RqqnocYTtL%2FG%2FXMLSQnr8GOqUBxtYlztIQq1Ra%2BIeeZwf0jkSNdjnT736QKjGwVIBoQYzMlqF8w7dSjEvynU2UBdaH6LK2lSaPJzD1hI3m7S0D8C7x3h2cErtlu%2BtLtcfux6YoehW5GIB%2BTyW%2FAPGHWFq7TWtJyacTwCfmux51ZQkz1iAAH7%2BOPX3o0Wiqr9UhPFTjJh0bN2NuhJ%2Bq5CJBmZBlEFvIjKccZupgyw%2BCqJHY4jGQAq2k&X-Amz-Signature=a9afe404c6d1aaacf667eaa9ce88b305df52f65eedf5bee328f091065c4bb423&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NIR5KL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCgZBmpL%2FdLYVmUPAx2KPrxQJDi%2BvUf%2FQE5RNXaD%2BIJ5AIgW98q7CSWthyg6iZJIdXY%2BCvdi40xOPw9NIurfaFGNJYq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJK6D0Mrq6rtfezVgCrcAwXEtECwvMa0kZCsdUh6%2BYAy8sT6zOkKAJxRB81L9xbe7D1e8DWdIxOE5IQqtMeLZMRXGrXtZfNFizZlVYNUHA%2BhdhywI%2Bhei0hE0RugWqKZkev7lViVRJzNsfPpRD4fzZJzZzIYrBuGwL5KFfa1qm779251XY9HmSgBiDn%2F8sceJD%2FD2V0%2FJiVgwMkmAjPwQcEBqQMNDj5Yk0gabA2MX6aJQweFOFNFz31pnJkq%2BrL6%2BucpuMRhNcCBnPt5YhGPxK4tN9NROTbeiBSmmszC1KqZnB9XeYXnjuAQCzwKX5cqD%2F4uvNhLHW5PX8RH3HiIFphRbDeqpGSu%2F4cuE%2By4GBuFAefJfMc6RLSMRO6UBSnXGpYv7s6vD2enc5tdsIBivOF0CsWAs0RtU4FfojxkxS5b0WZpJIkPPUvRt%2Fx4EqoDGpRBCt518byFmYADc990tcDvj7KxeoNhTgTjTT9QTbiyhdLrvz7hYOqgt1LAqfTxGVSBIRE2%2Bq5b%2Bv7Sk0%2Bb2L4kmYFpyUVK39ATkLvm5mwTBv6LHsvnquZKHVAIi6CfJtbzTCzICHLJ7OMwGwyjAZCIQ9KPXlyg9v9v1vr2vOUfw%2FyqARRCrrHxRQfY3VQa36RqqnocYTtL%2FG%2FXMLSQnr8GOqUBxtYlztIQq1Ra%2BIeeZwf0jkSNdjnT736QKjGwVIBoQYzMlqF8w7dSjEvynU2UBdaH6LK2lSaPJzD1hI3m7S0D8C7x3h2cErtlu%2BtLtcfux6YoehW5GIB%2BTyW%2FAPGHWFq7TWtJyacTwCfmux51ZQkz1iAAH7%2BOPX3o0Wiqr9UhPFTjJh0bN2NuhJ%2Bq5CJBmZBlEFvIjKccZupgyw%2BCqJHY4jGQAq2k&X-Amz-Signature=54865fd1635dfbd6d85025afaab75f5a075cdb6cd354653c604c53f8030ff83d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NIR5KL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCgZBmpL%2FdLYVmUPAx2KPrxQJDi%2BvUf%2FQE5RNXaD%2BIJ5AIgW98q7CSWthyg6iZJIdXY%2BCvdi40xOPw9NIurfaFGNJYq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJK6D0Mrq6rtfezVgCrcAwXEtECwvMa0kZCsdUh6%2BYAy8sT6zOkKAJxRB81L9xbe7D1e8DWdIxOE5IQqtMeLZMRXGrXtZfNFizZlVYNUHA%2BhdhywI%2Bhei0hE0RugWqKZkev7lViVRJzNsfPpRD4fzZJzZzIYrBuGwL5KFfa1qm779251XY9HmSgBiDn%2F8sceJD%2FD2V0%2FJiVgwMkmAjPwQcEBqQMNDj5Yk0gabA2MX6aJQweFOFNFz31pnJkq%2BrL6%2BucpuMRhNcCBnPt5YhGPxK4tN9NROTbeiBSmmszC1KqZnB9XeYXnjuAQCzwKX5cqD%2F4uvNhLHW5PX8RH3HiIFphRbDeqpGSu%2F4cuE%2By4GBuFAefJfMc6RLSMRO6UBSnXGpYv7s6vD2enc5tdsIBivOF0CsWAs0RtU4FfojxkxS5b0WZpJIkPPUvRt%2Fx4EqoDGpRBCt518byFmYADc990tcDvj7KxeoNhTgTjTT9QTbiyhdLrvz7hYOqgt1LAqfTxGVSBIRE2%2Bq5b%2Bv7Sk0%2Bb2L4kmYFpyUVK39ATkLvm5mwTBv6LHsvnquZKHVAIi6CfJtbzTCzICHLJ7OMwGwyjAZCIQ9KPXlyg9v9v1vr2vOUfw%2FyqARRCrrHxRQfY3VQa36RqqnocYTtL%2FG%2FXMLSQnr8GOqUBxtYlztIQq1Ra%2BIeeZwf0jkSNdjnT736QKjGwVIBoQYzMlqF8w7dSjEvynU2UBdaH6LK2lSaPJzD1hI3m7S0D8C7x3h2cErtlu%2BtLtcfux6YoehW5GIB%2BTyW%2FAPGHWFq7TWtJyacTwCfmux51ZQkz1iAAH7%2BOPX3o0Wiqr9UhPFTjJh0bN2NuhJ%2Bq5CJBmZBlEFvIjKccZupgyw%2BCqJHY4jGQAq2k&X-Amz-Signature=7456ec4bbbbca93e05578c277bd9e5c66becdd9dc511be87f172c575c5997a4e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NIR5KL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCgZBmpL%2FdLYVmUPAx2KPrxQJDi%2BvUf%2FQE5RNXaD%2BIJ5AIgW98q7CSWthyg6iZJIdXY%2BCvdi40xOPw9NIurfaFGNJYq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJK6D0Mrq6rtfezVgCrcAwXEtECwvMa0kZCsdUh6%2BYAy8sT6zOkKAJxRB81L9xbe7D1e8DWdIxOE5IQqtMeLZMRXGrXtZfNFizZlVYNUHA%2BhdhywI%2Bhei0hE0RugWqKZkev7lViVRJzNsfPpRD4fzZJzZzIYrBuGwL5KFfa1qm779251XY9HmSgBiDn%2F8sceJD%2FD2V0%2FJiVgwMkmAjPwQcEBqQMNDj5Yk0gabA2MX6aJQweFOFNFz31pnJkq%2BrL6%2BucpuMRhNcCBnPt5YhGPxK4tN9NROTbeiBSmmszC1KqZnB9XeYXnjuAQCzwKX5cqD%2F4uvNhLHW5PX8RH3HiIFphRbDeqpGSu%2F4cuE%2By4GBuFAefJfMc6RLSMRO6UBSnXGpYv7s6vD2enc5tdsIBivOF0CsWAs0RtU4FfojxkxS5b0WZpJIkPPUvRt%2Fx4EqoDGpRBCt518byFmYADc990tcDvj7KxeoNhTgTjTT9QTbiyhdLrvz7hYOqgt1LAqfTxGVSBIRE2%2Bq5b%2Bv7Sk0%2Bb2L4kmYFpyUVK39ATkLvm5mwTBv6LHsvnquZKHVAIi6CfJtbzTCzICHLJ7OMwGwyjAZCIQ9KPXlyg9v9v1vr2vOUfw%2FyqARRCrrHxRQfY3VQa36RqqnocYTtL%2FG%2FXMLSQnr8GOqUBxtYlztIQq1Ra%2BIeeZwf0jkSNdjnT736QKjGwVIBoQYzMlqF8w7dSjEvynU2UBdaH6LK2lSaPJzD1hI3m7S0D8C7x3h2cErtlu%2BtLtcfux6YoehW5GIB%2BTyW%2FAPGHWFq7TWtJyacTwCfmux51ZQkz1iAAH7%2BOPX3o0Wiqr9UhPFTjJh0bN2NuhJ%2Bq5CJBmZBlEFvIjKccZupgyw%2BCqJHY4jGQAq2k&X-Amz-Signature=eae6d154442fcd1dae4b83c4e3f1b7f31c244e9e7b3fb697ef36d49403fb9888&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NIR5KL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCgZBmpL%2FdLYVmUPAx2KPrxQJDi%2BvUf%2FQE5RNXaD%2BIJ5AIgW98q7CSWthyg6iZJIdXY%2BCvdi40xOPw9NIurfaFGNJYq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJK6D0Mrq6rtfezVgCrcAwXEtECwvMa0kZCsdUh6%2BYAy8sT6zOkKAJxRB81L9xbe7D1e8DWdIxOE5IQqtMeLZMRXGrXtZfNFizZlVYNUHA%2BhdhywI%2Bhei0hE0RugWqKZkev7lViVRJzNsfPpRD4fzZJzZzIYrBuGwL5KFfa1qm779251XY9HmSgBiDn%2F8sceJD%2FD2V0%2FJiVgwMkmAjPwQcEBqQMNDj5Yk0gabA2MX6aJQweFOFNFz31pnJkq%2BrL6%2BucpuMRhNcCBnPt5YhGPxK4tN9NROTbeiBSmmszC1KqZnB9XeYXnjuAQCzwKX5cqD%2F4uvNhLHW5PX8RH3HiIFphRbDeqpGSu%2F4cuE%2By4GBuFAefJfMc6RLSMRO6UBSnXGpYv7s6vD2enc5tdsIBivOF0CsWAs0RtU4FfojxkxS5b0WZpJIkPPUvRt%2Fx4EqoDGpRBCt518byFmYADc990tcDvj7KxeoNhTgTjTT9QTbiyhdLrvz7hYOqgt1LAqfTxGVSBIRE2%2Bq5b%2Bv7Sk0%2Bb2L4kmYFpyUVK39ATkLvm5mwTBv6LHsvnquZKHVAIi6CfJtbzTCzICHLJ7OMwGwyjAZCIQ9KPXlyg9v9v1vr2vOUfw%2FyqARRCrrHxRQfY3VQa36RqqnocYTtL%2FG%2FXMLSQnr8GOqUBxtYlztIQq1Ra%2BIeeZwf0jkSNdjnT736QKjGwVIBoQYzMlqF8w7dSjEvynU2UBdaH6LK2lSaPJzD1hI3m7S0D8C7x3h2cErtlu%2BtLtcfux6YoehW5GIB%2BTyW%2FAPGHWFq7TWtJyacTwCfmux51ZQkz1iAAH7%2BOPX3o0Wiqr9UhPFTjJh0bN2NuhJ%2Bq5CJBmZBlEFvIjKccZupgyw%2BCqJHY4jGQAq2k&X-Amz-Signature=3ec94e53ee2d818b6a032c6926a742b2c5da231aced8fd69f3475fe7b864a94b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
