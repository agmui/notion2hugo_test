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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM34IM2B%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm0ZgGkOwoJPMYQUO4AW3MiI7mYrxTpKT2uJbyPnnQIQIgf0ceqS%2F8DkpOMXQGh6RVempu5P4IU0HnbZNvMr9I%2BBIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTyDDOA6qejs9P2RyrcA9ZkFHNAi044Ql7a0TPGly8RSKbBRCqsYeChYbHPv%2BPq0mpAn1iMWoUY%2BdJf3rqy2uHaNzt1xFTtR%2BQVQQ%2FNwO%2FP2RnJaCB2H3%2FnRpbFNhwfJJzq%2FyZfvdcM2QY8aF1%2Bz4w7q82RLlSqIhV6VCrLZoA%2BaX1Z7xe%2F%2BsFdOgVuhd%2Fc%2BQ0iVGADWo6kU01LyJ5iX5o4a8zElKDGcoXw7aSVwSk9asJee9uWf%2BcdQ1yH%2F3CBbZAPPlheSEeTB%2FvN3xNUE750wBy3kfVVLK12egwuuUZH%2F4BkscDVOeIOB5gPnb1pE6%2F9hQ6XnKrNFMlMzAVfnXnR%2Flv7MCYs5SOE8XqtHjl%2BWk7iD6iOPcCS2gJjQrCei5qCx3d1NAjG7sHMJSShzNV1V2DHxUZ6JdH8YsQcWPBFQ5wLlIF40OnncETqY04nsHlveZu5OwAGkGzEtZPFzPYCvS%2FlUYyQeKX%2FsziiWw3ARl7gTzVBg8JKP9Yx%2Fj6g1c22kvQ6L6uPgM3GtLpQ%2B4Ih%2B37BGshM2OdyVJ1NAcFuixcscvO0vOuhrzYnZy179gPL%2FN1nShw8VIXuJqX44DlXQzNopCAUJrgUWI2At2ujZ40Td9otj4w19ycMKP2dLdq0XW56SsEnR5vzMI23ysIGOqUBv26OHoZzMfQxCg6q3zE986oWgvsJPm325MDt9u%2BcIV2%2FKv7iBEQX2XcZOYP1z%2FWrE1vMVJcst%2BGQbSMtEcGNcE%2FzKg9YkYDAMnv%2FE0MINiDSfajKdJ3BG4ARH5qzB0RkqB4UKaCDUcKj6M3MoEQprK8sCNpcGSJG7%2FcAusy9b77WnGNnIAfLCew%2BcixqA6EcmsU9YVX3t3tKQ6f3%2BCFGe1MbtULK&X-Amz-Signature=4fa7e4a9a9d49adb928792816fe3fb031bedb196e045bb06528ceafeb162dfcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM34IM2B%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm0ZgGkOwoJPMYQUO4AW3MiI7mYrxTpKT2uJbyPnnQIQIgf0ceqS%2F8DkpOMXQGh6RVempu5P4IU0HnbZNvMr9I%2BBIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTyDDOA6qejs9P2RyrcA9ZkFHNAi044Ql7a0TPGly8RSKbBRCqsYeChYbHPv%2BPq0mpAn1iMWoUY%2BdJf3rqy2uHaNzt1xFTtR%2BQVQQ%2FNwO%2FP2RnJaCB2H3%2FnRpbFNhwfJJzq%2FyZfvdcM2QY8aF1%2Bz4w7q82RLlSqIhV6VCrLZoA%2BaX1Z7xe%2F%2BsFdOgVuhd%2Fc%2BQ0iVGADWo6kU01LyJ5iX5o4a8zElKDGcoXw7aSVwSk9asJee9uWf%2BcdQ1yH%2F3CBbZAPPlheSEeTB%2FvN3xNUE750wBy3kfVVLK12egwuuUZH%2F4BkscDVOeIOB5gPnb1pE6%2F9hQ6XnKrNFMlMzAVfnXnR%2Flv7MCYs5SOE8XqtHjl%2BWk7iD6iOPcCS2gJjQrCei5qCx3d1NAjG7sHMJSShzNV1V2DHxUZ6JdH8YsQcWPBFQ5wLlIF40OnncETqY04nsHlveZu5OwAGkGzEtZPFzPYCvS%2FlUYyQeKX%2FsziiWw3ARl7gTzVBg8JKP9Yx%2Fj6g1c22kvQ6L6uPgM3GtLpQ%2B4Ih%2B37BGshM2OdyVJ1NAcFuixcscvO0vOuhrzYnZy179gPL%2FN1nShw8VIXuJqX44DlXQzNopCAUJrgUWI2At2ujZ40Td9otj4w19ycMKP2dLdq0XW56SsEnR5vzMI23ysIGOqUBv26OHoZzMfQxCg6q3zE986oWgvsJPm325MDt9u%2BcIV2%2FKv7iBEQX2XcZOYP1z%2FWrE1vMVJcst%2BGQbSMtEcGNcE%2FzKg9YkYDAMnv%2FE0MINiDSfajKdJ3BG4ARH5qzB0RkqB4UKaCDUcKj6M3MoEQprK8sCNpcGSJG7%2FcAusy9b77WnGNnIAfLCew%2BcixqA6EcmsU9YVX3t3tKQ6f3%2BCFGe1MbtULK&X-Amz-Signature=d1313569d97b8978a4e5be116b3c25a47555ad8c66977ff75dc39992973b2cef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM34IM2B%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm0ZgGkOwoJPMYQUO4AW3MiI7mYrxTpKT2uJbyPnnQIQIgf0ceqS%2F8DkpOMXQGh6RVempu5P4IU0HnbZNvMr9I%2BBIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTyDDOA6qejs9P2RyrcA9ZkFHNAi044Ql7a0TPGly8RSKbBRCqsYeChYbHPv%2BPq0mpAn1iMWoUY%2BdJf3rqy2uHaNzt1xFTtR%2BQVQQ%2FNwO%2FP2RnJaCB2H3%2FnRpbFNhwfJJzq%2FyZfvdcM2QY8aF1%2Bz4w7q82RLlSqIhV6VCrLZoA%2BaX1Z7xe%2F%2BsFdOgVuhd%2Fc%2BQ0iVGADWo6kU01LyJ5iX5o4a8zElKDGcoXw7aSVwSk9asJee9uWf%2BcdQ1yH%2F3CBbZAPPlheSEeTB%2FvN3xNUE750wBy3kfVVLK12egwuuUZH%2F4BkscDVOeIOB5gPnb1pE6%2F9hQ6XnKrNFMlMzAVfnXnR%2Flv7MCYs5SOE8XqtHjl%2BWk7iD6iOPcCS2gJjQrCei5qCx3d1NAjG7sHMJSShzNV1V2DHxUZ6JdH8YsQcWPBFQ5wLlIF40OnncETqY04nsHlveZu5OwAGkGzEtZPFzPYCvS%2FlUYyQeKX%2FsziiWw3ARl7gTzVBg8JKP9Yx%2Fj6g1c22kvQ6L6uPgM3GtLpQ%2B4Ih%2B37BGshM2OdyVJ1NAcFuixcscvO0vOuhrzYnZy179gPL%2FN1nShw8VIXuJqX44DlXQzNopCAUJrgUWI2At2ujZ40Td9otj4w19ycMKP2dLdq0XW56SsEnR5vzMI23ysIGOqUBv26OHoZzMfQxCg6q3zE986oWgvsJPm325MDt9u%2BcIV2%2FKv7iBEQX2XcZOYP1z%2FWrE1vMVJcst%2BGQbSMtEcGNcE%2FzKg9YkYDAMnv%2FE0MINiDSfajKdJ3BG4ARH5qzB0RkqB4UKaCDUcKj6M3MoEQprK8sCNpcGSJG7%2FcAusy9b77WnGNnIAfLCew%2BcixqA6EcmsU9YVX3t3tKQ6f3%2BCFGe1MbtULK&X-Amz-Signature=15797f7b10ac62f400b98133425dedf1517035633462167d9d1ec9a8547ad0bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM34IM2B%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm0ZgGkOwoJPMYQUO4AW3MiI7mYrxTpKT2uJbyPnnQIQIgf0ceqS%2F8DkpOMXQGh6RVempu5P4IU0HnbZNvMr9I%2BBIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTyDDOA6qejs9P2RyrcA9ZkFHNAi044Ql7a0TPGly8RSKbBRCqsYeChYbHPv%2BPq0mpAn1iMWoUY%2BdJf3rqy2uHaNzt1xFTtR%2BQVQQ%2FNwO%2FP2RnJaCB2H3%2FnRpbFNhwfJJzq%2FyZfvdcM2QY8aF1%2Bz4w7q82RLlSqIhV6VCrLZoA%2BaX1Z7xe%2F%2BsFdOgVuhd%2Fc%2BQ0iVGADWo6kU01LyJ5iX5o4a8zElKDGcoXw7aSVwSk9asJee9uWf%2BcdQ1yH%2F3CBbZAPPlheSEeTB%2FvN3xNUE750wBy3kfVVLK12egwuuUZH%2F4BkscDVOeIOB5gPnb1pE6%2F9hQ6XnKrNFMlMzAVfnXnR%2Flv7MCYs5SOE8XqtHjl%2BWk7iD6iOPcCS2gJjQrCei5qCx3d1NAjG7sHMJSShzNV1V2DHxUZ6JdH8YsQcWPBFQ5wLlIF40OnncETqY04nsHlveZu5OwAGkGzEtZPFzPYCvS%2FlUYyQeKX%2FsziiWw3ARl7gTzVBg8JKP9Yx%2Fj6g1c22kvQ6L6uPgM3GtLpQ%2B4Ih%2B37BGshM2OdyVJ1NAcFuixcscvO0vOuhrzYnZy179gPL%2FN1nShw8VIXuJqX44DlXQzNopCAUJrgUWI2At2ujZ40Td9otj4w19ycMKP2dLdq0XW56SsEnR5vzMI23ysIGOqUBv26OHoZzMfQxCg6q3zE986oWgvsJPm325MDt9u%2BcIV2%2FKv7iBEQX2XcZOYP1z%2FWrE1vMVJcst%2BGQbSMtEcGNcE%2FzKg9YkYDAMnv%2FE0MINiDSfajKdJ3BG4ARH5qzB0RkqB4UKaCDUcKj6M3MoEQprK8sCNpcGSJG7%2FcAusy9b77WnGNnIAfLCew%2BcixqA6EcmsU9YVX3t3tKQ6f3%2BCFGe1MbtULK&X-Amz-Signature=c7bb8759b4ff171f5a90f9fd8a69f38eb327b5456da609cb224c3d16f2dad66a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM34IM2B%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm0ZgGkOwoJPMYQUO4AW3MiI7mYrxTpKT2uJbyPnnQIQIgf0ceqS%2F8DkpOMXQGh6RVempu5P4IU0HnbZNvMr9I%2BBIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTyDDOA6qejs9P2RyrcA9ZkFHNAi044Ql7a0TPGly8RSKbBRCqsYeChYbHPv%2BPq0mpAn1iMWoUY%2BdJf3rqy2uHaNzt1xFTtR%2BQVQQ%2FNwO%2FP2RnJaCB2H3%2FnRpbFNhwfJJzq%2FyZfvdcM2QY8aF1%2Bz4w7q82RLlSqIhV6VCrLZoA%2BaX1Z7xe%2F%2BsFdOgVuhd%2Fc%2BQ0iVGADWo6kU01LyJ5iX5o4a8zElKDGcoXw7aSVwSk9asJee9uWf%2BcdQ1yH%2F3CBbZAPPlheSEeTB%2FvN3xNUE750wBy3kfVVLK12egwuuUZH%2F4BkscDVOeIOB5gPnb1pE6%2F9hQ6XnKrNFMlMzAVfnXnR%2Flv7MCYs5SOE8XqtHjl%2BWk7iD6iOPcCS2gJjQrCei5qCx3d1NAjG7sHMJSShzNV1V2DHxUZ6JdH8YsQcWPBFQ5wLlIF40OnncETqY04nsHlveZu5OwAGkGzEtZPFzPYCvS%2FlUYyQeKX%2FsziiWw3ARl7gTzVBg8JKP9Yx%2Fj6g1c22kvQ6L6uPgM3GtLpQ%2B4Ih%2B37BGshM2OdyVJ1NAcFuixcscvO0vOuhrzYnZy179gPL%2FN1nShw8VIXuJqX44DlXQzNopCAUJrgUWI2At2ujZ40Td9otj4w19ycMKP2dLdq0XW56SsEnR5vzMI23ysIGOqUBv26OHoZzMfQxCg6q3zE986oWgvsJPm325MDt9u%2BcIV2%2FKv7iBEQX2XcZOYP1z%2FWrE1vMVJcst%2BGQbSMtEcGNcE%2FzKg9YkYDAMnv%2FE0MINiDSfajKdJ3BG4ARH5qzB0RkqB4UKaCDUcKj6M3MoEQprK8sCNpcGSJG7%2FcAusy9b77WnGNnIAfLCew%2BcixqA6EcmsU9YVX3t3tKQ6f3%2BCFGe1MbtULK&X-Amz-Signature=4588204987ce33205414efdb378d04d2b85e3717d0ac9f1c4a49473296a19b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM34IM2B%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm0ZgGkOwoJPMYQUO4AW3MiI7mYrxTpKT2uJbyPnnQIQIgf0ceqS%2F8DkpOMXQGh6RVempu5P4IU0HnbZNvMr9I%2BBIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTyDDOA6qejs9P2RyrcA9ZkFHNAi044Ql7a0TPGly8RSKbBRCqsYeChYbHPv%2BPq0mpAn1iMWoUY%2BdJf3rqy2uHaNzt1xFTtR%2BQVQQ%2FNwO%2FP2RnJaCB2H3%2FnRpbFNhwfJJzq%2FyZfvdcM2QY8aF1%2Bz4w7q82RLlSqIhV6VCrLZoA%2BaX1Z7xe%2F%2BsFdOgVuhd%2Fc%2BQ0iVGADWo6kU01LyJ5iX5o4a8zElKDGcoXw7aSVwSk9asJee9uWf%2BcdQ1yH%2F3CBbZAPPlheSEeTB%2FvN3xNUE750wBy3kfVVLK12egwuuUZH%2F4BkscDVOeIOB5gPnb1pE6%2F9hQ6XnKrNFMlMzAVfnXnR%2Flv7MCYs5SOE8XqtHjl%2BWk7iD6iOPcCS2gJjQrCei5qCx3d1NAjG7sHMJSShzNV1V2DHxUZ6JdH8YsQcWPBFQ5wLlIF40OnncETqY04nsHlveZu5OwAGkGzEtZPFzPYCvS%2FlUYyQeKX%2FsziiWw3ARl7gTzVBg8JKP9Yx%2Fj6g1c22kvQ6L6uPgM3GtLpQ%2B4Ih%2B37BGshM2OdyVJ1NAcFuixcscvO0vOuhrzYnZy179gPL%2FN1nShw8VIXuJqX44DlXQzNopCAUJrgUWI2At2ujZ40Td9otj4w19ycMKP2dLdq0XW56SsEnR5vzMI23ysIGOqUBv26OHoZzMfQxCg6q3zE986oWgvsJPm325MDt9u%2BcIV2%2FKv7iBEQX2XcZOYP1z%2FWrE1vMVJcst%2BGQbSMtEcGNcE%2FzKg9YkYDAMnv%2FE0MINiDSfajKdJ3BG4ARH5qzB0RkqB4UKaCDUcKj6M3MoEQprK8sCNpcGSJG7%2FcAusy9b77WnGNnIAfLCew%2BcixqA6EcmsU9YVX3t3tKQ6f3%2BCFGe1MbtULK&X-Amz-Signature=65074da371363fbfb869cc124eca547894a9e2f718c9a0216f8fef5137dbc69c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM34IM2B%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm0ZgGkOwoJPMYQUO4AW3MiI7mYrxTpKT2uJbyPnnQIQIgf0ceqS%2F8DkpOMXQGh6RVempu5P4IU0HnbZNvMr9I%2BBIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTyDDOA6qejs9P2RyrcA9ZkFHNAi044Ql7a0TPGly8RSKbBRCqsYeChYbHPv%2BPq0mpAn1iMWoUY%2BdJf3rqy2uHaNzt1xFTtR%2BQVQQ%2FNwO%2FP2RnJaCB2H3%2FnRpbFNhwfJJzq%2FyZfvdcM2QY8aF1%2Bz4w7q82RLlSqIhV6VCrLZoA%2BaX1Z7xe%2F%2BsFdOgVuhd%2Fc%2BQ0iVGADWo6kU01LyJ5iX5o4a8zElKDGcoXw7aSVwSk9asJee9uWf%2BcdQ1yH%2F3CBbZAPPlheSEeTB%2FvN3xNUE750wBy3kfVVLK12egwuuUZH%2F4BkscDVOeIOB5gPnb1pE6%2F9hQ6XnKrNFMlMzAVfnXnR%2Flv7MCYs5SOE8XqtHjl%2BWk7iD6iOPcCS2gJjQrCei5qCx3d1NAjG7sHMJSShzNV1V2DHxUZ6JdH8YsQcWPBFQ5wLlIF40OnncETqY04nsHlveZu5OwAGkGzEtZPFzPYCvS%2FlUYyQeKX%2FsziiWw3ARl7gTzVBg8JKP9Yx%2Fj6g1c22kvQ6L6uPgM3GtLpQ%2B4Ih%2B37BGshM2OdyVJ1NAcFuixcscvO0vOuhrzYnZy179gPL%2FN1nShw8VIXuJqX44DlXQzNopCAUJrgUWI2At2ujZ40Td9otj4w19ycMKP2dLdq0XW56SsEnR5vzMI23ysIGOqUBv26OHoZzMfQxCg6q3zE986oWgvsJPm325MDt9u%2BcIV2%2FKv7iBEQX2XcZOYP1z%2FWrE1vMVJcst%2BGQbSMtEcGNcE%2FzKg9YkYDAMnv%2FE0MINiDSfajKdJ3BG4ARH5qzB0RkqB4UKaCDUcKj6M3MoEQprK8sCNpcGSJG7%2FcAusy9b77WnGNnIAfLCew%2BcixqA6EcmsU9YVX3t3tKQ6f3%2BCFGe1MbtULK&X-Amz-Signature=834095f2ba7f3e4f279bbfbd173846bc97a2edbe0164b8bdd00c691e6b501661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
