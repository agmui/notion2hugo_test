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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMW3CDU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIHDUraNX3QPmx5ixCW6olA2KSpqHufhTFw7PSUlDeyaAAiEA3H0DxD5kmbw1LYdG7Xu%2Fau7Tx%2Byh2lBhJdf7Bkiy%2BRkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAWGiqDjU4Bfx%2BA2oircAypBajGzcAyN1uh7pOb%2BIT5GSF33P6J3o2Vmq9t2bHkyhujCNBcVrSleTvs1%2FWdbBHhiRLuwWNVn7RV1xmvCCD%2F%2FfoMiKUhc%2FqkSLIT3nVCppjXBX0Pwp5tcFT9EgzBEj4pjtBWzrU9NSEcik1IQcLQ95untN%2FD1Y%2Fjz3KNxDz8Zx2ZWTiok6BEfr2C49MdyXXxHld2%2B17dXqJdT0NAMii6YR%2BI0VawHLNyIfdYEBldheWsthSWe4b1cQttI%2FnbqO5skQCXccZRGC%2FZcoMCbhKdfiRwFdApbxYUevZ3VlK0oRsdPNk2c8KnwuFbVUvlFA3Zt4nwuINXyY5EHsDJvtiNWCGmtYZFWTjsOmnI5Z8twQAPaaNQLdPl5Wsdk5zzI2gQjG6c6MU28o4W9SOq7XiYJucFHXwwQZKAVcwdWb2PQuo9SGXiWXqvCPeCVpeb6J7I7wbRcB5sy7LGmYMD6C2TsBFksgVisR01J6kFGvuQ7a4iHIq9W5BWZNzHwWpCwErrzTTXVwYPjjMPppxNrpxZB9tD02a7qmaUQjfGA28cXgA2gAorENSQhl%2BCaOO%2FB8NQ8A73PJ9PdYgtl%2FWSeCASJyiKxwKURjKr%2B9ROF2%2BXmFf4ykY9IODLmT9PnMK2NwcQGOqUBKB8S%2FHdtnO4wOpdLCUE5NPiShOa1q%2FOGvzfBSYNghRFp2cCfiKX%2BeDBiMf7MQ%2FuyG4z8j6XnP8GQV8Kk%2FzG%2B%2BY2scZ9E9pnWjPbZ3PCTc8l54l9QN8fagsGj8FJ326BB7aDTM73k5woYSK%2FKjYulWKl1iAulkhkTCs7h4EBJy5klfBMK3MA3yaPTpij2oWHeWJgvmBD0YVB0Ce3s9pUGTMpZoCkb&X-Amz-Signature=a60bfd7443898f51c754afd82f06bf46b81d81a09dfd569cb6b6218e8a334358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMW3CDU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIHDUraNX3QPmx5ixCW6olA2KSpqHufhTFw7PSUlDeyaAAiEA3H0DxD5kmbw1LYdG7Xu%2Fau7Tx%2Byh2lBhJdf7Bkiy%2BRkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAWGiqDjU4Bfx%2BA2oircAypBajGzcAyN1uh7pOb%2BIT5GSF33P6J3o2Vmq9t2bHkyhujCNBcVrSleTvs1%2FWdbBHhiRLuwWNVn7RV1xmvCCD%2F%2FfoMiKUhc%2FqkSLIT3nVCppjXBX0Pwp5tcFT9EgzBEj4pjtBWzrU9NSEcik1IQcLQ95untN%2FD1Y%2Fjz3KNxDz8Zx2ZWTiok6BEfr2C49MdyXXxHld2%2B17dXqJdT0NAMii6YR%2BI0VawHLNyIfdYEBldheWsthSWe4b1cQttI%2FnbqO5skQCXccZRGC%2FZcoMCbhKdfiRwFdApbxYUevZ3VlK0oRsdPNk2c8KnwuFbVUvlFA3Zt4nwuINXyY5EHsDJvtiNWCGmtYZFWTjsOmnI5Z8twQAPaaNQLdPl5Wsdk5zzI2gQjG6c6MU28o4W9SOq7XiYJucFHXwwQZKAVcwdWb2PQuo9SGXiWXqvCPeCVpeb6J7I7wbRcB5sy7LGmYMD6C2TsBFksgVisR01J6kFGvuQ7a4iHIq9W5BWZNzHwWpCwErrzTTXVwYPjjMPppxNrpxZB9tD02a7qmaUQjfGA28cXgA2gAorENSQhl%2BCaOO%2FB8NQ8A73PJ9PdYgtl%2FWSeCASJyiKxwKURjKr%2B9ROF2%2BXmFf4ykY9IODLmT9PnMK2NwcQGOqUBKB8S%2FHdtnO4wOpdLCUE5NPiShOa1q%2FOGvzfBSYNghRFp2cCfiKX%2BeDBiMf7MQ%2FuyG4z8j6XnP8GQV8Kk%2FzG%2B%2BY2scZ9E9pnWjPbZ3PCTc8l54l9QN8fagsGj8FJ326BB7aDTM73k5woYSK%2FKjYulWKl1iAulkhkTCs7h4EBJy5klfBMK3MA3yaPTpij2oWHeWJgvmBD0YVB0Ce3s9pUGTMpZoCkb&X-Amz-Signature=1d57852471ba74def31d04bf386ee7fe9c9aa57d5349a76e84a60e93653731e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMW3CDU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIHDUraNX3QPmx5ixCW6olA2KSpqHufhTFw7PSUlDeyaAAiEA3H0DxD5kmbw1LYdG7Xu%2Fau7Tx%2Byh2lBhJdf7Bkiy%2BRkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAWGiqDjU4Bfx%2BA2oircAypBajGzcAyN1uh7pOb%2BIT5GSF33P6J3o2Vmq9t2bHkyhujCNBcVrSleTvs1%2FWdbBHhiRLuwWNVn7RV1xmvCCD%2F%2FfoMiKUhc%2FqkSLIT3nVCppjXBX0Pwp5tcFT9EgzBEj4pjtBWzrU9NSEcik1IQcLQ95untN%2FD1Y%2Fjz3KNxDz8Zx2ZWTiok6BEfr2C49MdyXXxHld2%2B17dXqJdT0NAMii6YR%2BI0VawHLNyIfdYEBldheWsthSWe4b1cQttI%2FnbqO5skQCXccZRGC%2FZcoMCbhKdfiRwFdApbxYUevZ3VlK0oRsdPNk2c8KnwuFbVUvlFA3Zt4nwuINXyY5EHsDJvtiNWCGmtYZFWTjsOmnI5Z8twQAPaaNQLdPl5Wsdk5zzI2gQjG6c6MU28o4W9SOq7XiYJucFHXwwQZKAVcwdWb2PQuo9SGXiWXqvCPeCVpeb6J7I7wbRcB5sy7LGmYMD6C2TsBFksgVisR01J6kFGvuQ7a4iHIq9W5BWZNzHwWpCwErrzTTXVwYPjjMPppxNrpxZB9tD02a7qmaUQjfGA28cXgA2gAorENSQhl%2BCaOO%2FB8NQ8A73PJ9PdYgtl%2FWSeCASJyiKxwKURjKr%2B9ROF2%2BXmFf4ykY9IODLmT9PnMK2NwcQGOqUBKB8S%2FHdtnO4wOpdLCUE5NPiShOa1q%2FOGvzfBSYNghRFp2cCfiKX%2BeDBiMf7MQ%2FuyG4z8j6XnP8GQV8Kk%2FzG%2B%2BY2scZ9E9pnWjPbZ3PCTc8l54l9QN8fagsGj8FJ326BB7aDTM73k5woYSK%2FKjYulWKl1iAulkhkTCs7h4EBJy5klfBMK3MA3yaPTpij2oWHeWJgvmBD0YVB0Ce3s9pUGTMpZoCkb&X-Amz-Signature=fb3ed893323e7638358d546daf80404c16fbb565d2ca9c833ae8a876d73903dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMW3CDU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIHDUraNX3QPmx5ixCW6olA2KSpqHufhTFw7PSUlDeyaAAiEA3H0DxD5kmbw1LYdG7Xu%2Fau7Tx%2Byh2lBhJdf7Bkiy%2BRkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAWGiqDjU4Bfx%2BA2oircAypBajGzcAyN1uh7pOb%2BIT5GSF33P6J3o2Vmq9t2bHkyhujCNBcVrSleTvs1%2FWdbBHhiRLuwWNVn7RV1xmvCCD%2F%2FfoMiKUhc%2FqkSLIT3nVCppjXBX0Pwp5tcFT9EgzBEj4pjtBWzrU9NSEcik1IQcLQ95untN%2FD1Y%2Fjz3KNxDz8Zx2ZWTiok6BEfr2C49MdyXXxHld2%2B17dXqJdT0NAMii6YR%2BI0VawHLNyIfdYEBldheWsthSWe4b1cQttI%2FnbqO5skQCXccZRGC%2FZcoMCbhKdfiRwFdApbxYUevZ3VlK0oRsdPNk2c8KnwuFbVUvlFA3Zt4nwuINXyY5EHsDJvtiNWCGmtYZFWTjsOmnI5Z8twQAPaaNQLdPl5Wsdk5zzI2gQjG6c6MU28o4W9SOq7XiYJucFHXwwQZKAVcwdWb2PQuo9SGXiWXqvCPeCVpeb6J7I7wbRcB5sy7LGmYMD6C2TsBFksgVisR01J6kFGvuQ7a4iHIq9W5BWZNzHwWpCwErrzTTXVwYPjjMPppxNrpxZB9tD02a7qmaUQjfGA28cXgA2gAorENSQhl%2BCaOO%2FB8NQ8A73PJ9PdYgtl%2FWSeCASJyiKxwKURjKr%2B9ROF2%2BXmFf4ykY9IODLmT9PnMK2NwcQGOqUBKB8S%2FHdtnO4wOpdLCUE5NPiShOa1q%2FOGvzfBSYNghRFp2cCfiKX%2BeDBiMf7MQ%2FuyG4z8j6XnP8GQV8Kk%2FzG%2B%2BY2scZ9E9pnWjPbZ3PCTc8l54l9QN8fagsGj8FJ326BB7aDTM73k5woYSK%2FKjYulWKl1iAulkhkTCs7h4EBJy5klfBMK3MA3yaPTpij2oWHeWJgvmBD0YVB0Ce3s9pUGTMpZoCkb&X-Amz-Signature=6cd3fd2ff0194e5f174d0a8aa3ba4fba066a439112a40de7d909362bc4fa7724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMW3CDU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIHDUraNX3QPmx5ixCW6olA2KSpqHufhTFw7PSUlDeyaAAiEA3H0DxD5kmbw1LYdG7Xu%2Fau7Tx%2Byh2lBhJdf7Bkiy%2BRkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAWGiqDjU4Bfx%2BA2oircAypBajGzcAyN1uh7pOb%2BIT5GSF33P6J3o2Vmq9t2bHkyhujCNBcVrSleTvs1%2FWdbBHhiRLuwWNVn7RV1xmvCCD%2F%2FfoMiKUhc%2FqkSLIT3nVCppjXBX0Pwp5tcFT9EgzBEj4pjtBWzrU9NSEcik1IQcLQ95untN%2FD1Y%2Fjz3KNxDz8Zx2ZWTiok6BEfr2C49MdyXXxHld2%2B17dXqJdT0NAMii6YR%2BI0VawHLNyIfdYEBldheWsthSWe4b1cQttI%2FnbqO5skQCXccZRGC%2FZcoMCbhKdfiRwFdApbxYUevZ3VlK0oRsdPNk2c8KnwuFbVUvlFA3Zt4nwuINXyY5EHsDJvtiNWCGmtYZFWTjsOmnI5Z8twQAPaaNQLdPl5Wsdk5zzI2gQjG6c6MU28o4W9SOq7XiYJucFHXwwQZKAVcwdWb2PQuo9SGXiWXqvCPeCVpeb6J7I7wbRcB5sy7LGmYMD6C2TsBFksgVisR01J6kFGvuQ7a4iHIq9W5BWZNzHwWpCwErrzTTXVwYPjjMPppxNrpxZB9tD02a7qmaUQjfGA28cXgA2gAorENSQhl%2BCaOO%2FB8NQ8A73PJ9PdYgtl%2FWSeCASJyiKxwKURjKr%2B9ROF2%2BXmFf4ykY9IODLmT9PnMK2NwcQGOqUBKB8S%2FHdtnO4wOpdLCUE5NPiShOa1q%2FOGvzfBSYNghRFp2cCfiKX%2BeDBiMf7MQ%2FuyG4z8j6XnP8GQV8Kk%2FzG%2B%2BY2scZ9E9pnWjPbZ3PCTc8l54l9QN8fagsGj8FJ326BB7aDTM73k5woYSK%2FKjYulWKl1iAulkhkTCs7h4EBJy5klfBMK3MA3yaPTpij2oWHeWJgvmBD0YVB0Ce3s9pUGTMpZoCkb&X-Amz-Signature=0f6947e55ab3223375697681290c4212d04de027b48c22995287f597db1c0574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMW3CDU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIHDUraNX3QPmx5ixCW6olA2KSpqHufhTFw7PSUlDeyaAAiEA3H0DxD5kmbw1LYdG7Xu%2Fau7Tx%2Byh2lBhJdf7Bkiy%2BRkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAWGiqDjU4Bfx%2BA2oircAypBajGzcAyN1uh7pOb%2BIT5GSF33P6J3o2Vmq9t2bHkyhujCNBcVrSleTvs1%2FWdbBHhiRLuwWNVn7RV1xmvCCD%2F%2FfoMiKUhc%2FqkSLIT3nVCppjXBX0Pwp5tcFT9EgzBEj4pjtBWzrU9NSEcik1IQcLQ95untN%2FD1Y%2Fjz3KNxDz8Zx2ZWTiok6BEfr2C49MdyXXxHld2%2B17dXqJdT0NAMii6YR%2BI0VawHLNyIfdYEBldheWsthSWe4b1cQttI%2FnbqO5skQCXccZRGC%2FZcoMCbhKdfiRwFdApbxYUevZ3VlK0oRsdPNk2c8KnwuFbVUvlFA3Zt4nwuINXyY5EHsDJvtiNWCGmtYZFWTjsOmnI5Z8twQAPaaNQLdPl5Wsdk5zzI2gQjG6c6MU28o4W9SOq7XiYJucFHXwwQZKAVcwdWb2PQuo9SGXiWXqvCPeCVpeb6J7I7wbRcB5sy7LGmYMD6C2TsBFksgVisR01J6kFGvuQ7a4iHIq9W5BWZNzHwWpCwErrzTTXVwYPjjMPppxNrpxZB9tD02a7qmaUQjfGA28cXgA2gAorENSQhl%2BCaOO%2FB8NQ8A73PJ9PdYgtl%2FWSeCASJyiKxwKURjKr%2B9ROF2%2BXmFf4ykY9IODLmT9PnMK2NwcQGOqUBKB8S%2FHdtnO4wOpdLCUE5NPiShOa1q%2FOGvzfBSYNghRFp2cCfiKX%2BeDBiMf7MQ%2FuyG4z8j6XnP8GQV8Kk%2FzG%2B%2BY2scZ9E9pnWjPbZ3PCTc8l54l9QN8fagsGj8FJ326BB7aDTM73k5woYSK%2FKjYulWKl1iAulkhkTCs7h4EBJy5klfBMK3MA3yaPTpij2oWHeWJgvmBD0YVB0Ce3s9pUGTMpZoCkb&X-Amz-Signature=7908df8054599df24b09352e9b88036c3570a61409f2f35a8b5f8d821ac3da88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMW3CDU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIHDUraNX3QPmx5ixCW6olA2KSpqHufhTFw7PSUlDeyaAAiEA3H0DxD5kmbw1LYdG7Xu%2Fau7Tx%2Byh2lBhJdf7Bkiy%2BRkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAWGiqDjU4Bfx%2BA2oircAypBajGzcAyN1uh7pOb%2BIT5GSF33P6J3o2Vmq9t2bHkyhujCNBcVrSleTvs1%2FWdbBHhiRLuwWNVn7RV1xmvCCD%2F%2FfoMiKUhc%2FqkSLIT3nVCppjXBX0Pwp5tcFT9EgzBEj4pjtBWzrU9NSEcik1IQcLQ95untN%2FD1Y%2Fjz3KNxDz8Zx2ZWTiok6BEfr2C49MdyXXxHld2%2B17dXqJdT0NAMii6YR%2BI0VawHLNyIfdYEBldheWsthSWe4b1cQttI%2FnbqO5skQCXccZRGC%2FZcoMCbhKdfiRwFdApbxYUevZ3VlK0oRsdPNk2c8KnwuFbVUvlFA3Zt4nwuINXyY5EHsDJvtiNWCGmtYZFWTjsOmnI5Z8twQAPaaNQLdPl5Wsdk5zzI2gQjG6c6MU28o4W9SOq7XiYJucFHXwwQZKAVcwdWb2PQuo9SGXiWXqvCPeCVpeb6J7I7wbRcB5sy7LGmYMD6C2TsBFksgVisR01J6kFGvuQ7a4iHIq9W5BWZNzHwWpCwErrzTTXVwYPjjMPppxNrpxZB9tD02a7qmaUQjfGA28cXgA2gAorENSQhl%2BCaOO%2FB8NQ8A73PJ9PdYgtl%2FWSeCASJyiKxwKURjKr%2B9ROF2%2BXmFf4ykY9IODLmT9PnMK2NwcQGOqUBKB8S%2FHdtnO4wOpdLCUE5NPiShOa1q%2FOGvzfBSYNghRFp2cCfiKX%2BeDBiMf7MQ%2FuyG4z8j6XnP8GQV8Kk%2FzG%2B%2BY2scZ9E9pnWjPbZ3PCTc8l54l9QN8fagsGj8FJ326BB7aDTM73k5woYSK%2FKjYulWKl1iAulkhkTCs7h4EBJy5klfBMK3MA3yaPTpij2oWHeWJgvmBD0YVB0Ce3s9pUGTMpZoCkb&X-Amz-Signature=86777adccbddcdf2f5e8d28724f8202c1146d5129b0522cac6a389d1f731e40d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
