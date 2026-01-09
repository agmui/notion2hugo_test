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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE7ZHJHN%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj4gNbvLP1rVTqJpgRdGGOEGsUx4t9XhYHW%2Fv%2FPjg3zAIhAOmqy77u0prAMRAanEvim5LxTqdptocwFsg9srtYkEIjKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FkIJJnVaRuBGTPH8q3AN60FSJqMo1cPys%2FYIYhbp%2FCYy2HCz2zeZcyhKVOHTRJmnwffNHbuXX6ej38B9nTgNkEJpKH0GdrwCXnpm6LfUIy1jxt9usd%2F85fqdDrdxFNJdJqukmguSaknnT9t81fRCRrmoxbg4nbdNmUUmJZ2JTNgjTxZJGUqMQDV%2By3PhNtW1QAarULfBQz8Ms19lB6CdhsoOsjUym4LNKQGS970XgFyRUY36lBWE%2BecQERXjMNRLLnY8mc1gXFh%2FAAwk8Nxfz554RRaMyialmoFqwcBAQm8u34%2FTPNNJ5VyVLOXK5HDyU4hrsiKjk%2BIMiPaMjOWPE6n%2FwYCVJYlqfFNZ6KsPbt%2BuxvIWSOdAsX5AEGUv%2BtCjFZAV4dq5Ar4u%2BXTCdfcYm19kjMwiG5VgRLxbv4NKyEsts5Glfx3yyShq1pGQUhLvseXlM115C85D2DgxTzvQYiEuuTnBIjijnyf9JIQrqhh0okcTeHiqMAZZAqHH4rNWhY%2B54HTen0O%2BoUMyPoI9bthROeHSuUg5omq2Qnnu4XnCqdKBSs2xmYtQkKcLVyQmvuLdoPpqxWkUZDm0%2BiVbuozNpiRwD5zikUfJ2B4SraMusVe2z%2F5naZ7M1BXxB%2BjevqIi%2BVljcHscQeTCBpYHLBjqkAZGyvrQ1qeSFg%2BQmWMyUgZYDg9OQCrV1GqS970YDtylRPUOPvPyvagkE%2BN%2Bcqe9LFc7E2TbmXBbyLikb5CmDCsNz2ChUxGvJ65JZhGLNTtF%2F%2FHAo2lj9ZR1x6Yg7Ml3T91jo7gzOuY69mxIYhAEQgD0snXZSmrdbey6loOF1R656EOvCQuSGSusJZs3wlX8h28eUxkeXMMX7R7o5J2J8fysEFWJf&X-Amz-Signature=a9ac600e9e928d30b8d7b6a8ce1fd0127262c244af3ffec6db6dd272796d39d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE7ZHJHN%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj4gNbvLP1rVTqJpgRdGGOEGsUx4t9XhYHW%2Fv%2FPjg3zAIhAOmqy77u0prAMRAanEvim5LxTqdptocwFsg9srtYkEIjKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FkIJJnVaRuBGTPH8q3AN60FSJqMo1cPys%2FYIYhbp%2FCYy2HCz2zeZcyhKVOHTRJmnwffNHbuXX6ej38B9nTgNkEJpKH0GdrwCXnpm6LfUIy1jxt9usd%2F85fqdDrdxFNJdJqukmguSaknnT9t81fRCRrmoxbg4nbdNmUUmJZ2JTNgjTxZJGUqMQDV%2By3PhNtW1QAarULfBQz8Ms19lB6CdhsoOsjUym4LNKQGS970XgFyRUY36lBWE%2BecQERXjMNRLLnY8mc1gXFh%2FAAwk8Nxfz554RRaMyialmoFqwcBAQm8u34%2FTPNNJ5VyVLOXK5HDyU4hrsiKjk%2BIMiPaMjOWPE6n%2FwYCVJYlqfFNZ6KsPbt%2BuxvIWSOdAsX5AEGUv%2BtCjFZAV4dq5Ar4u%2BXTCdfcYm19kjMwiG5VgRLxbv4NKyEsts5Glfx3yyShq1pGQUhLvseXlM115C85D2DgxTzvQYiEuuTnBIjijnyf9JIQrqhh0okcTeHiqMAZZAqHH4rNWhY%2B54HTen0O%2BoUMyPoI9bthROeHSuUg5omq2Qnnu4XnCqdKBSs2xmYtQkKcLVyQmvuLdoPpqxWkUZDm0%2BiVbuozNpiRwD5zikUfJ2B4SraMusVe2z%2F5naZ7M1BXxB%2BjevqIi%2BVljcHscQeTCBpYHLBjqkAZGyvrQ1qeSFg%2BQmWMyUgZYDg9OQCrV1GqS970YDtylRPUOPvPyvagkE%2BN%2Bcqe9LFc7E2TbmXBbyLikb5CmDCsNz2ChUxGvJ65JZhGLNTtF%2F%2FHAo2lj9ZR1x6Yg7Ml3T91jo7gzOuY69mxIYhAEQgD0snXZSmrdbey6loOF1R656EOvCQuSGSusJZs3wlX8h28eUxkeXMMX7R7o5J2J8fysEFWJf&X-Amz-Signature=9f8140bd590d2d543791a1c52da617e5e9a35ec4599604150db7263ab9301cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE7ZHJHN%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj4gNbvLP1rVTqJpgRdGGOEGsUx4t9XhYHW%2Fv%2FPjg3zAIhAOmqy77u0prAMRAanEvim5LxTqdptocwFsg9srtYkEIjKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FkIJJnVaRuBGTPH8q3AN60FSJqMo1cPys%2FYIYhbp%2FCYy2HCz2zeZcyhKVOHTRJmnwffNHbuXX6ej38B9nTgNkEJpKH0GdrwCXnpm6LfUIy1jxt9usd%2F85fqdDrdxFNJdJqukmguSaknnT9t81fRCRrmoxbg4nbdNmUUmJZ2JTNgjTxZJGUqMQDV%2By3PhNtW1QAarULfBQz8Ms19lB6CdhsoOsjUym4LNKQGS970XgFyRUY36lBWE%2BecQERXjMNRLLnY8mc1gXFh%2FAAwk8Nxfz554RRaMyialmoFqwcBAQm8u34%2FTPNNJ5VyVLOXK5HDyU4hrsiKjk%2BIMiPaMjOWPE6n%2FwYCVJYlqfFNZ6KsPbt%2BuxvIWSOdAsX5AEGUv%2BtCjFZAV4dq5Ar4u%2BXTCdfcYm19kjMwiG5VgRLxbv4NKyEsts5Glfx3yyShq1pGQUhLvseXlM115C85D2DgxTzvQYiEuuTnBIjijnyf9JIQrqhh0okcTeHiqMAZZAqHH4rNWhY%2B54HTen0O%2BoUMyPoI9bthROeHSuUg5omq2Qnnu4XnCqdKBSs2xmYtQkKcLVyQmvuLdoPpqxWkUZDm0%2BiVbuozNpiRwD5zikUfJ2B4SraMusVe2z%2F5naZ7M1BXxB%2BjevqIi%2BVljcHscQeTCBpYHLBjqkAZGyvrQ1qeSFg%2BQmWMyUgZYDg9OQCrV1GqS970YDtylRPUOPvPyvagkE%2BN%2Bcqe9LFc7E2TbmXBbyLikb5CmDCsNz2ChUxGvJ65JZhGLNTtF%2F%2FHAo2lj9ZR1x6Yg7Ml3T91jo7gzOuY69mxIYhAEQgD0snXZSmrdbey6loOF1R656EOvCQuSGSusJZs3wlX8h28eUxkeXMMX7R7o5J2J8fysEFWJf&X-Amz-Signature=ceaaf7ae3fffd1c247a55e9d84974ac7751b81c5129a4d525da9f47c0b629c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE7ZHJHN%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj4gNbvLP1rVTqJpgRdGGOEGsUx4t9XhYHW%2Fv%2FPjg3zAIhAOmqy77u0prAMRAanEvim5LxTqdptocwFsg9srtYkEIjKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FkIJJnVaRuBGTPH8q3AN60FSJqMo1cPys%2FYIYhbp%2FCYy2HCz2zeZcyhKVOHTRJmnwffNHbuXX6ej38B9nTgNkEJpKH0GdrwCXnpm6LfUIy1jxt9usd%2F85fqdDrdxFNJdJqukmguSaknnT9t81fRCRrmoxbg4nbdNmUUmJZ2JTNgjTxZJGUqMQDV%2By3PhNtW1QAarULfBQz8Ms19lB6CdhsoOsjUym4LNKQGS970XgFyRUY36lBWE%2BecQERXjMNRLLnY8mc1gXFh%2FAAwk8Nxfz554RRaMyialmoFqwcBAQm8u34%2FTPNNJ5VyVLOXK5HDyU4hrsiKjk%2BIMiPaMjOWPE6n%2FwYCVJYlqfFNZ6KsPbt%2BuxvIWSOdAsX5AEGUv%2BtCjFZAV4dq5Ar4u%2BXTCdfcYm19kjMwiG5VgRLxbv4NKyEsts5Glfx3yyShq1pGQUhLvseXlM115C85D2DgxTzvQYiEuuTnBIjijnyf9JIQrqhh0okcTeHiqMAZZAqHH4rNWhY%2B54HTen0O%2BoUMyPoI9bthROeHSuUg5omq2Qnnu4XnCqdKBSs2xmYtQkKcLVyQmvuLdoPpqxWkUZDm0%2BiVbuozNpiRwD5zikUfJ2B4SraMusVe2z%2F5naZ7M1BXxB%2BjevqIi%2BVljcHscQeTCBpYHLBjqkAZGyvrQ1qeSFg%2BQmWMyUgZYDg9OQCrV1GqS970YDtylRPUOPvPyvagkE%2BN%2Bcqe9LFc7E2TbmXBbyLikb5CmDCsNz2ChUxGvJ65JZhGLNTtF%2F%2FHAo2lj9ZR1x6Yg7Ml3T91jo7gzOuY69mxIYhAEQgD0snXZSmrdbey6loOF1R656EOvCQuSGSusJZs3wlX8h28eUxkeXMMX7R7o5J2J8fysEFWJf&X-Amz-Signature=2c1c7499062633625b10d6eb69a9949d4f86613fd1b6e4502dbeca51ac5add2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE7ZHJHN%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj4gNbvLP1rVTqJpgRdGGOEGsUx4t9XhYHW%2Fv%2FPjg3zAIhAOmqy77u0prAMRAanEvim5LxTqdptocwFsg9srtYkEIjKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FkIJJnVaRuBGTPH8q3AN60FSJqMo1cPys%2FYIYhbp%2FCYy2HCz2zeZcyhKVOHTRJmnwffNHbuXX6ej38B9nTgNkEJpKH0GdrwCXnpm6LfUIy1jxt9usd%2F85fqdDrdxFNJdJqukmguSaknnT9t81fRCRrmoxbg4nbdNmUUmJZ2JTNgjTxZJGUqMQDV%2By3PhNtW1QAarULfBQz8Ms19lB6CdhsoOsjUym4LNKQGS970XgFyRUY36lBWE%2BecQERXjMNRLLnY8mc1gXFh%2FAAwk8Nxfz554RRaMyialmoFqwcBAQm8u34%2FTPNNJ5VyVLOXK5HDyU4hrsiKjk%2BIMiPaMjOWPE6n%2FwYCVJYlqfFNZ6KsPbt%2BuxvIWSOdAsX5AEGUv%2BtCjFZAV4dq5Ar4u%2BXTCdfcYm19kjMwiG5VgRLxbv4NKyEsts5Glfx3yyShq1pGQUhLvseXlM115C85D2DgxTzvQYiEuuTnBIjijnyf9JIQrqhh0okcTeHiqMAZZAqHH4rNWhY%2B54HTen0O%2BoUMyPoI9bthROeHSuUg5omq2Qnnu4XnCqdKBSs2xmYtQkKcLVyQmvuLdoPpqxWkUZDm0%2BiVbuozNpiRwD5zikUfJ2B4SraMusVe2z%2F5naZ7M1BXxB%2BjevqIi%2BVljcHscQeTCBpYHLBjqkAZGyvrQ1qeSFg%2BQmWMyUgZYDg9OQCrV1GqS970YDtylRPUOPvPyvagkE%2BN%2Bcqe9LFc7E2TbmXBbyLikb5CmDCsNz2ChUxGvJ65JZhGLNTtF%2F%2FHAo2lj9ZR1x6Yg7Ml3T91jo7gzOuY69mxIYhAEQgD0snXZSmrdbey6loOF1R656EOvCQuSGSusJZs3wlX8h28eUxkeXMMX7R7o5J2J8fysEFWJf&X-Amz-Signature=74a80cc60d8c35476031ec731559dbd78d0820d967f5eef8457c3fbd4fd921e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE7ZHJHN%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj4gNbvLP1rVTqJpgRdGGOEGsUx4t9XhYHW%2Fv%2FPjg3zAIhAOmqy77u0prAMRAanEvim5LxTqdptocwFsg9srtYkEIjKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FkIJJnVaRuBGTPH8q3AN60FSJqMo1cPys%2FYIYhbp%2FCYy2HCz2zeZcyhKVOHTRJmnwffNHbuXX6ej38B9nTgNkEJpKH0GdrwCXnpm6LfUIy1jxt9usd%2F85fqdDrdxFNJdJqukmguSaknnT9t81fRCRrmoxbg4nbdNmUUmJZ2JTNgjTxZJGUqMQDV%2By3PhNtW1QAarULfBQz8Ms19lB6CdhsoOsjUym4LNKQGS970XgFyRUY36lBWE%2BecQERXjMNRLLnY8mc1gXFh%2FAAwk8Nxfz554RRaMyialmoFqwcBAQm8u34%2FTPNNJ5VyVLOXK5HDyU4hrsiKjk%2BIMiPaMjOWPE6n%2FwYCVJYlqfFNZ6KsPbt%2BuxvIWSOdAsX5AEGUv%2BtCjFZAV4dq5Ar4u%2BXTCdfcYm19kjMwiG5VgRLxbv4NKyEsts5Glfx3yyShq1pGQUhLvseXlM115C85D2DgxTzvQYiEuuTnBIjijnyf9JIQrqhh0okcTeHiqMAZZAqHH4rNWhY%2B54HTen0O%2BoUMyPoI9bthROeHSuUg5omq2Qnnu4XnCqdKBSs2xmYtQkKcLVyQmvuLdoPpqxWkUZDm0%2BiVbuozNpiRwD5zikUfJ2B4SraMusVe2z%2F5naZ7M1BXxB%2BjevqIi%2BVljcHscQeTCBpYHLBjqkAZGyvrQ1qeSFg%2BQmWMyUgZYDg9OQCrV1GqS970YDtylRPUOPvPyvagkE%2BN%2Bcqe9LFc7E2TbmXBbyLikb5CmDCsNz2ChUxGvJ65JZhGLNTtF%2F%2FHAo2lj9ZR1x6Yg7Ml3T91jo7gzOuY69mxIYhAEQgD0snXZSmrdbey6loOF1R656EOvCQuSGSusJZs3wlX8h28eUxkeXMMX7R7o5J2J8fysEFWJf&X-Amz-Signature=4f0ea380ebec9714d42c73ab91c1f78530a86ae23ebf135c16675e5a953379e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE7ZHJHN%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj4gNbvLP1rVTqJpgRdGGOEGsUx4t9XhYHW%2Fv%2FPjg3zAIhAOmqy77u0prAMRAanEvim5LxTqdptocwFsg9srtYkEIjKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FkIJJnVaRuBGTPH8q3AN60FSJqMo1cPys%2FYIYhbp%2FCYy2HCz2zeZcyhKVOHTRJmnwffNHbuXX6ej38B9nTgNkEJpKH0GdrwCXnpm6LfUIy1jxt9usd%2F85fqdDrdxFNJdJqukmguSaknnT9t81fRCRrmoxbg4nbdNmUUmJZ2JTNgjTxZJGUqMQDV%2By3PhNtW1QAarULfBQz8Ms19lB6CdhsoOsjUym4LNKQGS970XgFyRUY36lBWE%2BecQERXjMNRLLnY8mc1gXFh%2FAAwk8Nxfz554RRaMyialmoFqwcBAQm8u34%2FTPNNJ5VyVLOXK5HDyU4hrsiKjk%2BIMiPaMjOWPE6n%2FwYCVJYlqfFNZ6KsPbt%2BuxvIWSOdAsX5AEGUv%2BtCjFZAV4dq5Ar4u%2BXTCdfcYm19kjMwiG5VgRLxbv4NKyEsts5Glfx3yyShq1pGQUhLvseXlM115C85D2DgxTzvQYiEuuTnBIjijnyf9JIQrqhh0okcTeHiqMAZZAqHH4rNWhY%2B54HTen0O%2BoUMyPoI9bthROeHSuUg5omq2Qnnu4XnCqdKBSs2xmYtQkKcLVyQmvuLdoPpqxWkUZDm0%2BiVbuozNpiRwD5zikUfJ2B4SraMusVe2z%2F5naZ7M1BXxB%2BjevqIi%2BVljcHscQeTCBpYHLBjqkAZGyvrQ1qeSFg%2BQmWMyUgZYDg9OQCrV1GqS970YDtylRPUOPvPyvagkE%2BN%2Bcqe9LFc7E2TbmXBbyLikb5CmDCsNz2ChUxGvJ65JZhGLNTtF%2F%2FHAo2lj9ZR1x6Yg7Ml3T91jo7gzOuY69mxIYhAEQgD0snXZSmrdbey6loOF1R656EOvCQuSGSusJZs3wlX8h28eUxkeXMMX7R7o5J2J8fysEFWJf&X-Amz-Signature=4a706059e7b751ea09508d0eecd6f4f179edd18a6ad1ef9b4fc3c89035bbf397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
