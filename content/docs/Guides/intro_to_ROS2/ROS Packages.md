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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU5PZWP2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIFRh38Jwf9NtPiO%2FCzTRBucYy7yDQmWolio46rl7gTSNAiEAt932uLegFdf%2Fqy1KNCMi92cotSSw7VhvaSIyhtAEauYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNveN1AIWm2OCAUVGSrcAyWIYzJ0v%2B%2FpWmNdH09amZZ%2BwIwQgRfLhG%2Fbbot22OlbHXtksuFN9bV%2BZl5PUQfNlDv0MzlNdoTaXS6il%2FhbCvzM8A9aD2ZZ898Du0nCmkCaogVLFeS7n4l%2FYfTtmuMZ%2FwER3nbyEY8DhaAUlCcmSZEmkqSAzxOrutny2ItI67nMhQzJQYoVoZaBsTqYIBHJM53wfg2TsRFpWnaqn1g%2F0iEckXy8ZhCj3kFy%2BoXJoejcrd7YpvAFUzJgreZgUqtDdAGm%2FfVnmuSAZZhetl4Z6E8xZfXeS0pKcyQUwHCNOgZiyGGyl%2FFO7OFxuUZgLWX9ll43%2FlxIIepniSw0Konw1OAjmObaa8fq1B8uJFmun2kNqNF3eCv9QVktoV%2BOYlzMg4vEW63nmfn%2B9DOEH1ryQdtwAH18jW523IQ6F1rhzIkqodI90%2F3FUxq6tPc7na6KQq0gXrsBvRQQ4LSq89k1%2BL2031uaGAk1208Utx971ccBpO%2BzGMjr2tGzQBcWmBL0slvJuaU4TAob5O2Jwt8z6S2vlok5PUkfzMEK59i7GlVGPb1vdQj6frBU7OtLhyB7FJdFkO4sj9XujUFv%2FhCHs%2BI4q0dO8rQFm81uMGmMMxLfkdaK798Cwxnnz5EJMM%2BGksEGOqUBOVqccdUNF%2BLthuxbw4azRFwduYsd4j5zSs4qhjBhjLC0CFRttKVo5uSCP661F68UYaLiPa8hNahw1dX%2BsdOrDROz4RPknPBpU6Rr5HLNyV%2BwtAWiw%2B0gHOnhdj%2FHR7N5g1P%2Bv0fILijy5VcXdJb4zYs45iPvtZrc3tnHcby1UPXQQYLHRmGz%2B5YaMY30NI43LN0EW9lgeamtIKu1DYaAXF49K4UH&X-Amz-Signature=f64b9b84cdf2b127bf984fcd85632bb319bca8693ad88d3ae33bb91986bac39e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU5PZWP2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIFRh38Jwf9NtPiO%2FCzTRBucYy7yDQmWolio46rl7gTSNAiEAt932uLegFdf%2Fqy1KNCMi92cotSSw7VhvaSIyhtAEauYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNveN1AIWm2OCAUVGSrcAyWIYzJ0v%2B%2FpWmNdH09amZZ%2BwIwQgRfLhG%2Fbbot22OlbHXtksuFN9bV%2BZl5PUQfNlDv0MzlNdoTaXS6il%2FhbCvzM8A9aD2ZZ898Du0nCmkCaogVLFeS7n4l%2FYfTtmuMZ%2FwER3nbyEY8DhaAUlCcmSZEmkqSAzxOrutny2ItI67nMhQzJQYoVoZaBsTqYIBHJM53wfg2TsRFpWnaqn1g%2F0iEckXy8ZhCj3kFy%2BoXJoejcrd7YpvAFUzJgreZgUqtDdAGm%2FfVnmuSAZZhetl4Z6E8xZfXeS0pKcyQUwHCNOgZiyGGyl%2FFO7OFxuUZgLWX9ll43%2FlxIIepniSw0Konw1OAjmObaa8fq1B8uJFmun2kNqNF3eCv9QVktoV%2BOYlzMg4vEW63nmfn%2B9DOEH1ryQdtwAH18jW523IQ6F1rhzIkqodI90%2F3FUxq6tPc7na6KQq0gXrsBvRQQ4LSq89k1%2BL2031uaGAk1208Utx971ccBpO%2BzGMjr2tGzQBcWmBL0slvJuaU4TAob5O2Jwt8z6S2vlok5PUkfzMEK59i7GlVGPb1vdQj6frBU7OtLhyB7FJdFkO4sj9XujUFv%2FhCHs%2BI4q0dO8rQFm81uMGmMMxLfkdaK798Cwxnnz5EJMM%2BGksEGOqUBOVqccdUNF%2BLthuxbw4azRFwduYsd4j5zSs4qhjBhjLC0CFRttKVo5uSCP661F68UYaLiPa8hNahw1dX%2BsdOrDROz4RPknPBpU6Rr5HLNyV%2BwtAWiw%2B0gHOnhdj%2FHR7N5g1P%2Bv0fILijy5VcXdJb4zYs45iPvtZrc3tnHcby1UPXQQYLHRmGz%2B5YaMY30NI43LN0EW9lgeamtIKu1DYaAXF49K4UH&X-Amz-Signature=a2ac01c7b6c30314290f8f4fa6d9ae7736b23ccec16664417fad6238fdcaef5f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU5PZWP2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIFRh38Jwf9NtPiO%2FCzTRBucYy7yDQmWolio46rl7gTSNAiEAt932uLegFdf%2Fqy1KNCMi92cotSSw7VhvaSIyhtAEauYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNveN1AIWm2OCAUVGSrcAyWIYzJ0v%2B%2FpWmNdH09amZZ%2BwIwQgRfLhG%2Fbbot22OlbHXtksuFN9bV%2BZl5PUQfNlDv0MzlNdoTaXS6il%2FhbCvzM8A9aD2ZZ898Du0nCmkCaogVLFeS7n4l%2FYfTtmuMZ%2FwER3nbyEY8DhaAUlCcmSZEmkqSAzxOrutny2ItI67nMhQzJQYoVoZaBsTqYIBHJM53wfg2TsRFpWnaqn1g%2F0iEckXy8ZhCj3kFy%2BoXJoejcrd7YpvAFUzJgreZgUqtDdAGm%2FfVnmuSAZZhetl4Z6E8xZfXeS0pKcyQUwHCNOgZiyGGyl%2FFO7OFxuUZgLWX9ll43%2FlxIIepniSw0Konw1OAjmObaa8fq1B8uJFmun2kNqNF3eCv9QVktoV%2BOYlzMg4vEW63nmfn%2B9DOEH1ryQdtwAH18jW523IQ6F1rhzIkqodI90%2F3FUxq6tPc7na6KQq0gXrsBvRQQ4LSq89k1%2BL2031uaGAk1208Utx971ccBpO%2BzGMjr2tGzQBcWmBL0slvJuaU4TAob5O2Jwt8z6S2vlok5PUkfzMEK59i7GlVGPb1vdQj6frBU7OtLhyB7FJdFkO4sj9XujUFv%2FhCHs%2BI4q0dO8rQFm81uMGmMMxLfkdaK798Cwxnnz5EJMM%2BGksEGOqUBOVqccdUNF%2BLthuxbw4azRFwduYsd4j5zSs4qhjBhjLC0CFRttKVo5uSCP661F68UYaLiPa8hNahw1dX%2BsdOrDROz4RPknPBpU6Rr5HLNyV%2BwtAWiw%2B0gHOnhdj%2FHR7N5g1P%2Bv0fILijy5VcXdJb4zYs45iPvtZrc3tnHcby1UPXQQYLHRmGz%2B5YaMY30NI43LN0EW9lgeamtIKu1DYaAXF49K4UH&X-Amz-Signature=54cc4fc7692732afc455c1951730fa711f8eb3970f524ee73e63d86bc34bc08f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU5PZWP2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIFRh38Jwf9NtPiO%2FCzTRBucYy7yDQmWolio46rl7gTSNAiEAt932uLegFdf%2Fqy1KNCMi92cotSSw7VhvaSIyhtAEauYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNveN1AIWm2OCAUVGSrcAyWIYzJ0v%2B%2FpWmNdH09amZZ%2BwIwQgRfLhG%2Fbbot22OlbHXtksuFN9bV%2BZl5PUQfNlDv0MzlNdoTaXS6il%2FhbCvzM8A9aD2ZZ898Du0nCmkCaogVLFeS7n4l%2FYfTtmuMZ%2FwER3nbyEY8DhaAUlCcmSZEmkqSAzxOrutny2ItI67nMhQzJQYoVoZaBsTqYIBHJM53wfg2TsRFpWnaqn1g%2F0iEckXy8ZhCj3kFy%2BoXJoejcrd7YpvAFUzJgreZgUqtDdAGm%2FfVnmuSAZZhetl4Z6E8xZfXeS0pKcyQUwHCNOgZiyGGyl%2FFO7OFxuUZgLWX9ll43%2FlxIIepniSw0Konw1OAjmObaa8fq1B8uJFmun2kNqNF3eCv9QVktoV%2BOYlzMg4vEW63nmfn%2B9DOEH1ryQdtwAH18jW523IQ6F1rhzIkqodI90%2F3FUxq6tPc7na6KQq0gXrsBvRQQ4LSq89k1%2BL2031uaGAk1208Utx971ccBpO%2BzGMjr2tGzQBcWmBL0slvJuaU4TAob5O2Jwt8z6S2vlok5PUkfzMEK59i7GlVGPb1vdQj6frBU7OtLhyB7FJdFkO4sj9XujUFv%2FhCHs%2BI4q0dO8rQFm81uMGmMMxLfkdaK798Cwxnnz5EJMM%2BGksEGOqUBOVqccdUNF%2BLthuxbw4azRFwduYsd4j5zSs4qhjBhjLC0CFRttKVo5uSCP661F68UYaLiPa8hNahw1dX%2BsdOrDROz4RPknPBpU6Rr5HLNyV%2BwtAWiw%2B0gHOnhdj%2FHR7N5g1P%2Bv0fILijy5VcXdJb4zYs45iPvtZrc3tnHcby1UPXQQYLHRmGz%2B5YaMY30NI43LN0EW9lgeamtIKu1DYaAXF49K4UH&X-Amz-Signature=1fb4c2a24cb7d149c56a92d3de8ff2c5e13b81a63b0fba7d3fd9c8218cdbb7f3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU5PZWP2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIFRh38Jwf9NtPiO%2FCzTRBucYy7yDQmWolio46rl7gTSNAiEAt932uLegFdf%2Fqy1KNCMi92cotSSw7VhvaSIyhtAEauYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNveN1AIWm2OCAUVGSrcAyWIYzJ0v%2B%2FpWmNdH09amZZ%2BwIwQgRfLhG%2Fbbot22OlbHXtksuFN9bV%2BZl5PUQfNlDv0MzlNdoTaXS6il%2FhbCvzM8A9aD2ZZ898Du0nCmkCaogVLFeS7n4l%2FYfTtmuMZ%2FwER3nbyEY8DhaAUlCcmSZEmkqSAzxOrutny2ItI67nMhQzJQYoVoZaBsTqYIBHJM53wfg2TsRFpWnaqn1g%2F0iEckXy8ZhCj3kFy%2BoXJoejcrd7YpvAFUzJgreZgUqtDdAGm%2FfVnmuSAZZhetl4Z6E8xZfXeS0pKcyQUwHCNOgZiyGGyl%2FFO7OFxuUZgLWX9ll43%2FlxIIepniSw0Konw1OAjmObaa8fq1B8uJFmun2kNqNF3eCv9QVktoV%2BOYlzMg4vEW63nmfn%2B9DOEH1ryQdtwAH18jW523IQ6F1rhzIkqodI90%2F3FUxq6tPc7na6KQq0gXrsBvRQQ4LSq89k1%2BL2031uaGAk1208Utx971ccBpO%2BzGMjr2tGzQBcWmBL0slvJuaU4TAob5O2Jwt8z6S2vlok5PUkfzMEK59i7GlVGPb1vdQj6frBU7OtLhyB7FJdFkO4sj9XujUFv%2FhCHs%2BI4q0dO8rQFm81uMGmMMxLfkdaK798Cwxnnz5EJMM%2BGksEGOqUBOVqccdUNF%2BLthuxbw4azRFwduYsd4j5zSs4qhjBhjLC0CFRttKVo5uSCP661F68UYaLiPa8hNahw1dX%2BsdOrDROz4RPknPBpU6Rr5HLNyV%2BwtAWiw%2B0gHOnhdj%2FHR7N5g1P%2Bv0fILijy5VcXdJb4zYs45iPvtZrc3tnHcby1UPXQQYLHRmGz%2B5YaMY30NI43LN0EW9lgeamtIKu1DYaAXF49K4UH&X-Amz-Signature=7fafd665e1ff226eeae5e973e70a5d71f2ccf4bb1e277577c88a50bc08826633&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU5PZWP2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIFRh38Jwf9NtPiO%2FCzTRBucYy7yDQmWolio46rl7gTSNAiEAt932uLegFdf%2Fqy1KNCMi92cotSSw7VhvaSIyhtAEauYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNveN1AIWm2OCAUVGSrcAyWIYzJ0v%2B%2FpWmNdH09amZZ%2BwIwQgRfLhG%2Fbbot22OlbHXtksuFN9bV%2BZl5PUQfNlDv0MzlNdoTaXS6il%2FhbCvzM8A9aD2ZZ898Du0nCmkCaogVLFeS7n4l%2FYfTtmuMZ%2FwER3nbyEY8DhaAUlCcmSZEmkqSAzxOrutny2ItI67nMhQzJQYoVoZaBsTqYIBHJM53wfg2TsRFpWnaqn1g%2F0iEckXy8ZhCj3kFy%2BoXJoejcrd7YpvAFUzJgreZgUqtDdAGm%2FfVnmuSAZZhetl4Z6E8xZfXeS0pKcyQUwHCNOgZiyGGyl%2FFO7OFxuUZgLWX9ll43%2FlxIIepniSw0Konw1OAjmObaa8fq1B8uJFmun2kNqNF3eCv9QVktoV%2BOYlzMg4vEW63nmfn%2B9DOEH1ryQdtwAH18jW523IQ6F1rhzIkqodI90%2F3FUxq6tPc7na6KQq0gXrsBvRQQ4LSq89k1%2BL2031uaGAk1208Utx971ccBpO%2BzGMjr2tGzQBcWmBL0slvJuaU4TAob5O2Jwt8z6S2vlok5PUkfzMEK59i7GlVGPb1vdQj6frBU7OtLhyB7FJdFkO4sj9XujUFv%2FhCHs%2BI4q0dO8rQFm81uMGmMMxLfkdaK798Cwxnnz5EJMM%2BGksEGOqUBOVqccdUNF%2BLthuxbw4azRFwduYsd4j5zSs4qhjBhjLC0CFRttKVo5uSCP661F68UYaLiPa8hNahw1dX%2BsdOrDROz4RPknPBpU6Rr5HLNyV%2BwtAWiw%2B0gHOnhdj%2FHR7N5g1P%2Bv0fILijy5VcXdJb4zYs45iPvtZrc3tnHcby1UPXQQYLHRmGz%2B5YaMY30NI43LN0EW9lgeamtIKu1DYaAXF49K4UH&X-Amz-Signature=7e29ecd39f0bf8b39279889232b2a9d3b3c5d46eaacdf9125c0fe4a6fd822a41&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU5PZWP2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIFRh38Jwf9NtPiO%2FCzTRBucYy7yDQmWolio46rl7gTSNAiEAt932uLegFdf%2Fqy1KNCMi92cotSSw7VhvaSIyhtAEauYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNveN1AIWm2OCAUVGSrcAyWIYzJ0v%2B%2FpWmNdH09amZZ%2BwIwQgRfLhG%2Fbbot22OlbHXtksuFN9bV%2BZl5PUQfNlDv0MzlNdoTaXS6il%2FhbCvzM8A9aD2ZZ898Du0nCmkCaogVLFeS7n4l%2FYfTtmuMZ%2FwER3nbyEY8DhaAUlCcmSZEmkqSAzxOrutny2ItI67nMhQzJQYoVoZaBsTqYIBHJM53wfg2TsRFpWnaqn1g%2F0iEckXy8ZhCj3kFy%2BoXJoejcrd7YpvAFUzJgreZgUqtDdAGm%2FfVnmuSAZZhetl4Z6E8xZfXeS0pKcyQUwHCNOgZiyGGyl%2FFO7OFxuUZgLWX9ll43%2FlxIIepniSw0Konw1OAjmObaa8fq1B8uJFmun2kNqNF3eCv9QVktoV%2BOYlzMg4vEW63nmfn%2B9DOEH1ryQdtwAH18jW523IQ6F1rhzIkqodI90%2F3FUxq6tPc7na6KQq0gXrsBvRQQ4LSq89k1%2BL2031uaGAk1208Utx971ccBpO%2BzGMjr2tGzQBcWmBL0slvJuaU4TAob5O2Jwt8z6S2vlok5PUkfzMEK59i7GlVGPb1vdQj6frBU7OtLhyB7FJdFkO4sj9XujUFv%2FhCHs%2BI4q0dO8rQFm81uMGmMMxLfkdaK798Cwxnnz5EJMM%2BGksEGOqUBOVqccdUNF%2BLthuxbw4azRFwduYsd4j5zSs4qhjBhjLC0CFRttKVo5uSCP661F68UYaLiPa8hNahw1dX%2BsdOrDROz4RPknPBpU6Rr5HLNyV%2BwtAWiw%2B0gHOnhdj%2FHR7N5g1P%2Bv0fILijy5VcXdJb4zYs45iPvtZrc3tnHcby1UPXQQYLHRmGz%2B5YaMY30NI43LN0EW9lgeamtIKu1DYaAXF49K4UH&X-Amz-Signature=58ccef2be3dcfef58d20744624ef87503151e67116a11b2855f309d9fb683fde&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
