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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUB7Y3DU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDSTxaBoRmN3zLA%2BM47P%2F8wzKXvT2KX8cybkHXfAJl88AiEAqxNUga8ugh4N4h3c3gUabdwU%2FJ%2BrdPLcUHUaw%2BOJrRQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEF4gQmqP3iT%2FhZWSCrcAwLuOEG64gqXKXt4btpNhFnfMOO6syR%2FHl8KHW%2BOyD9yVTPqXQvlZFwfX5Kr7Z04yAQbqqnepCwGCiTFtTIoAIXK3WpaiV7XnbFPnmg5rcFSYVKHSDAndiVsnQFn4hAx8LbKN6GGzyw4nzxJ%2FRaWldL23rDJ0AP29Vw6oVmK8Z6eMuy3xVSX27HKToWuSIupqWCrEDal8NHUFYsCCOu6C1ZDcr85TOPAuydhU4d4SK5jJams%2FXpbQlEbZNhs18GJBEw6NOGYaKoabSpMVXJI%2BiAJiZNIFOj7YzwEA4Uy0TFDxXxRkJyNoXOPLxx%2BfpssMunLx5Exw32F94zMDtcpVCSqWCqTnL2XIUqNPG%2Bk3iKflHqybMEcE%2FNWY13bMu%2Fx0UWggKW2KfRK5US1nG%2Fuvq74WbILHKOTFo4%2BoAb3tv1PIOB5sDLa%2FUkdD%2FJl6pSoBv3RGVp9LYDjZAIgZFP%2BBGxV%2BWID%2FaYAi0W%2FtNVzGlrUZeKasHevAZ7%2Bw8L9aK%2B4gWI9KKJzBACofNu1GAzkYV2oUcoVo124Gr2sr19xhpE77HHX%2B3%2BXHyMBs46A2OTdLd6n4J%2BD3UO4Yph7DygSScQM03yuEG94xhM4vLbS8d1ytmXBNX%2FbkyOluFmYMNG%2F5MMGOqUBEIrqrhUvN4V%2BjN8T1gdJjzfJVUfwaI3iLLkg%2BZVRc%2BmtBj43zJutSCp2MtdS5ufGzLFSDieGRgUqCBUJ8rdyRm34ubfzvf0zskB04m9TMGJJ%2FQxr%2BxIcR8TGk8ERLcDwQ6NwGkUWGb9SlFW9za3N4XjRval%2BcgqxtcuzyNjtKqhD%2FWkIUzOEzTEQySuFtxRjX5HH80%2FezCNhNwzmBD107zkt0dYf&X-Amz-Signature=94d64202eb461a5aec14ce922bbed1d6413cbb2b4fa86e417c9ccb9eca882a1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUB7Y3DU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDSTxaBoRmN3zLA%2BM47P%2F8wzKXvT2KX8cybkHXfAJl88AiEAqxNUga8ugh4N4h3c3gUabdwU%2FJ%2BrdPLcUHUaw%2BOJrRQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEF4gQmqP3iT%2FhZWSCrcAwLuOEG64gqXKXt4btpNhFnfMOO6syR%2FHl8KHW%2BOyD9yVTPqXQvlZFwfX5Kr7Z04yAQbqqnepCwGCiTFtTIoAIXK3WpaiV7XnbFPnmg5rcFSYVKHSDAndiVsnQFn4hAx8LbKN6GGzyw4nzxJ%2FRaWldL23rDJ0AP29Vw6oVmK8Z6eMuy3xVSX27HKToWuSIupqWCrEDal8NHUFYsCCOu6C1ZDcr85TOPAuydhU4d4SK5jJams%2FXpbQlEbZNhs18GJBEw6NOGYaKoabSpMVXJI%2BiAJiZNIFOj7YzwEA4Uy0TFDxXxRkJyNoXOPLxx%2BfpssMunLx5Exw32F94zMDtcpVCSqWCqTnL2XIUqNPG%2Bk3iKflHqybMEcE%2FNWY13bMu%2Fx0UWggKW2KfRK5US1nG%2Fuvq74WbILHKOTFo4%2BoAb3tv1PIOB5sDLa%2FUkdD%2FJl6pSoBv3RGVp9LYDjZAIgZFP%2BBGxV%2BWID%2FaYAi0W%2FtNVzGlrUZeKasHevAZ7%2Bw8L9aK%2B4gWI9KKJzBACofNu1GAzkYV2oUcoVo124Gr2sr19xhpE77HHX%2B3%2BXHyMBs46A2OTdLd6n4J%2BD3UO4Yph7DygSScQM03yuEG94xhM4vLbS8d1ytmXBNX%2FbkyOluFmYMNG%2F5MMGOqUBEIrqrhUvN4V%2BjN8T1gdJjzfJVUfwaI3iLLkg%2BZVRc%2BmtBj43zJutSCp2MtdS5ufGzLFSDieGRgUqCBUJ8rdyRm34ubfzvf0zskB04m9TMGJJ%2FQxr%2BxIcR8TGk8ERLcDwQ6NwGkUWGb9SlFW9za3N4XjRval%2BcgqxtcuzyNjtKqhD%2FWkIUzOEzTEQySuFtxRjX5HH80%2FezCNhNwzmBD107zkt0dYf&X-Amz-Signature=93daa565ae0c614dbd71fc0f80fc3e757933f37f26cb40ff5697f9e72d7a5dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUB7Y3DU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDSTxaBoRmN3zLA%2BM47P%2F8wzKXvT2KX8cybkHXfAJl88AiEAqxNUga8ugh4N4h3c3gUabdwU%2FJ%2BrdPLcUHUaw%2BOJrRQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEF4gQmqP3iT%2FhZWSCrcAwLuOEG64gqXKXt4btpNhFnfMOO6syR%2FHl8KHW%2BOyD9yVTPqXQvlZFwfX5Kr7Z04yAQbqqnepCwGCiTFtTIoAIXK3WpaiV7XnbFPnmg5rcFSYVKHSDAndiVsnQFn4hAx8LbKN6GGzyw4nzxJ%2FRaWldL23rDJ0AP29Vw6oVmK8Z6eMuy3xVSX27HKToWuSIupqWCrEDal8NHUFYsCCOu6C1ZDcr85TOPAuydhU4d4SK5jJams%2FXpbQlEbZNhs18GJBEw6NOGYaKoabSpMVXJI%2BiAJiZNIFOj7YzwEA4Uy0TFDxXxRkJyNoXOPLxx%2BfpssMunLx5Exw32F94zMDtcpVCSqWCqTnL2XIUqNPG%2Bk3iKflHqybMEcE%2FNWY13bMu%2Fx0UWggKW2KfRK5US1nG%2Fuvq74WbILHKOTFo4%2BoAb3tv1PIOB5sDLa%2FUkdD%2FJl6pSoBv3RGVp9LYDjZAIgZFP%2BBGxV%2BWID%2FaYAi0W%2FtNVzGlrUZeKasHevAZ7%2Bw8L9aK%2B4gWI9KKJzBACofNu1GAzkYV2oUcoVo124Gr2sr19xhpE77HHX%2B3%2BXHyMBs46A2OTdLd6n4J%2BD3UO4Yph7DygSScQM03yuEG94xhM4vLbS8d1ytmXBNX%2FbkyOluFmYMNG%2F5MMGOqUBEIrqrhUvN4V%2BjN8T1gdJjzfJVUfwaI3iLLkg%2BZVRc%2BmtBj43zJutSCp2MtdS5ufGzLFSDieGRgUqCBUJ8rdyRm34ubfzvf0zskB04m9TMGJJ%2FQxr%2BxIcR8TGk8ERLcDwQ6NwGkUWGb9SlFW9za3N4XjRval%2BcgqxtcuzyNjtKqhD%2FWkIUzOEzTEQySuFtxRjX5HH80%2FezCNhNwzmBD107zkt0dYf&X-Amz-Signature=d82d4e73ad0a74df0deae9b721587f998fc732d93b059af5a8469f2554c9a90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUB7Y3DU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDSTxaBoRmN3zLA%2BM47P%2F8wzKXvT2KX8cybkHXfAJl88AiEAqxNUga8ugh4N4h3c3gUabdwU%2FJ%2BrdPLcUHUaw%2BOJrRQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEF4gQmqP3iT%2FhZWSCrcAwLuOEG64gqXKXt4btpNhFnfMOO6syR%2FHl8KHW%2BOyD9yVTPqXQvlZFwfX5Kr7Z04yAQbqqnepCwGCiTFtTIoAIXK3WpaiV7XnbFPnmg5rcFSYVKHSDAndiVsnQFn4hAx8LbKN6GGzyw4nzxJ%2FRaWldL23rDJ0AP29Vw6oVmK8Z6eMuy3xVSX27HKToWuSIupqWCrEDal8NHUFYsCCOu6C1ZDcr85TOPAuydhU4d4SK5jJams%2FXpbQlEbZNhs18GJBEw6NOGYaKoabSpMVXJI%2BiAJiZNIFOj7YzwEA4Uy0TFDxXxRkJyNoXOPLxx%2BfpssMunLx5Exw32F94zMDtcpVCSqWCqTnL2XIUqNPG%2Bk3iKflHqybMEcE%2FNWY13bMu%2Fx0UWggKW2KfRK5US1nG%2Fuvq74WbILHKOTFo4%2BoAb3tv1PIOB5sDLa%2FUkdD%2FJl6pSoBv3RGVp9LYDjZAIgZFP%2BBGxV%2BWID%2FaYAi0W%2FtNVzGlrUZeKasHevAZ7%2Bw8L9aK%2B4gWI9KKJzBACofNu1GAzkYV2oUcoVo124Gr2sr19xhpE77HHX%2B3%2BXHyMBs46A2OTdLd6n4J%2BD3UO4Yph7DygSScQM03yuEG94xhM4vLbS8d1ytmXBNX%2FbkyOluFmYMNG%2F5MMGOqUBEIrqrhUvN4V%2BjN8T1gdJjzfJVUfwaI3iLLkg%2BZVRc%2BmtBj43zJutSCp2MtdS5ufGzLFSDieGRgUqCBUJ8rdyRm34ubfzvf0zskB04m9TMGJJ%2FQxr%2BxIcR8TGk8ERLcDwQ6NwGkUWGb9SlFW9za3N4XjRval%2BcgqxtcuzyNjtKqhD%2FWkIUzOEzTEQySuFtxRjX5HH80%2FezCNhNwzmBD107zkt0dYf&X-Amz-Signature=e039216f25f8044239c32c07917eb56265676e1e60abf7c53ac1874c0021cfc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUB7Y3DU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDSTxaBoRmN3zLA%2BM47P%2F8wzKXvT2KX8cybkHXfAJl88AiEAqxNUga8ugh4N4h3c3gUabdwU%2FJ%2BrdPLcUHUaw%2BOJrRQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEF4gQmqP3iT%2FhZWSCrcAwLuOEG64gqXKXt4btpNhFnfMOO6syR%2FHl8KHW%2BOyD9yVTPqXQvlZFwfX5Kr7Z04yAQbqqnepCwGCiTFtTIoAIXK3WpaiV7XnbFPnmg5rcFSYVKHSDAndiVsnQFn4hAx8LbKN6GGzyw4nzxJ%2FRaWldL23rDJ0AP29Vw6oVmK8Z6eMuy3xVSX27HKToWuSIupqWCrEDal8NHUFYsCCOu6C1ZDcr85TOPAuydhU4d4SK5jJams%2FXpbQlEbZNhs18GJBEw6NOGYaKoabSpMVXJI%2BiAJiZNIFOj7YzwEA4Uy0TFDxXxRkJyNoXOPLxx%2BfpssMunLx5Exw32F94zMDtcpVCSqWCqTnL2XIUqNPG%2Bk3iKflHqybMEcE%2FNWY13bMu%2Fx0UWggKW2KfRK5US1nG%2Fuvq74WbILHKOTFo4%2BoAb3tv1PIOB5sDLa%2FUkdD%2FJl6pSoBv3RGVp9LYDjZAIgZFP%2BBGxV%2BWID%2FaYAi0W%2FtNVzGlrUZeKasHevAZ7%2Bw8L9aK%2B4gWI9KKJzBACofNu1GAzkYV2oUcoVo124Gr2sr19xhpE77HHX%2B3%2BXHyMBs46A2OTdLd6n4J%2BD3UO4Yph7DygSScQM03yuEG94xhM4vLbS8d1ytmXBNX%2FbkyOluFmYMNG%2F5MMGOqUBEIrqrhUvN4V%2BjN8T1gdJjzfJVUfwaI3iLLkg%2BZVRc%2BmtBj43zJutSCp2MtdS5ufGzLFSDieGRgUqCBUJ8rdyRm34ubfzvf0zskB04m9TMGJJ%2FQxr%2BxIcR8TGk8ERLcDwQ6NwGkUWGb9SlFW9za3N4XjRval%2BcgqxtcuzyNjtKqhD%2FWkIUzOEzTEQySuFtxRjX5HH80%2FezCNhNwzmBD107zkt0dYf&X-Amz-Signature=3c8d2b3c3cfabab0d531ad10b7c8301e0fa8a2326f07328256110f898d661d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUB7Y3DU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDSTxaBoRmN3zLA%2BM47P%2F8wzKXvT2KX8cybkHXfAJl88AiEAqxNUga8ugh4N4h3c3gUabdwU%2FJ%2BrdPLcUHUaw%2BOJrRQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEF4gQmqP3iT%2FhZWSCrcAwLuOEG64gqXKXt4btpNhFnfMOO6syR%2FHl8KHW%2BOyD9yVTPqXQvlZFwfX5Kr7Z04yAQbqqnepCwGCiTFtTIoAIXK3WpaiV7XnbFPnmg5rcFSYVKHSDAndiVsnQFn4hAx8LbKN6GGzyw4nzxJ%2FRaWldL23rDJ0AP29Vw6oVmK8Z6eMuy3xVSX27HKToWuSIupqWCrEDal8NHUFYsCCOu6C1ZDcr85TOPAuydhU4d4SK5jJams%2FXpbQlEbZNhs18GJBEw6NOGYaKoabSpMVXJI%2BiAJiZNIFOj7YzwEA4Uy0TFDxXxRkJyNoXOPLxx%2BfpssMunLx5Exw32F94zMDtcpVCSqWCqTnL2XIUqNPG%2Bk3iKflHqybMEcE%2FNWY13bMu%2Fx0UWggKW2KfRK5US1nG%2Fuvq74WbILHKOTFo4%2BoAb3tv1PIOB5sDLa%2FUkdD%2FJl6pSoBv3RGVp9LYDjZAIgZFP%2BBGxV%2BWID%2FaYAi0W%2FtNVzGlrUZeKasHevAZ7%2Bw8L9aK%2B4gWI9KKJzBACofNu1GAzkYV2oUcoVo124Gr2sr19xhpE77HHX%2B3%2BXHyMBs46A2OTdLd6n4J%2BD3UO4Yph7DygSScQM03yuEG94xhM4vLbS8d1ytmXBNX%2FbkyOluFmYMNG%2F5MMGOqUBEIrqrhUvN4V%2BjN8T1gdJjzfJVUfwaI3iLLkg%2BZVRc%2BmtBj43zJutSCp2MtdS5ufGzLFSDieGRgUqCBUJ8rdyRm34ubfzvf0zskB04m9TMGJJ%2FQxr%2BxIcR8TGk8ERLcDwQ6NwGkUWGb9SlFW9za3N4XjRval%2BcgqxtcuzyNjtKqhD%2FWkIUzOEzTEQySuFtxRjX5HH80%2FezCNhNwzmBD107zkt0dYf&X-Amz-Signature=b0631f53da3b4dfaadcb9b7690204ba56787bff2904ec5744b7ad62dfde4b749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUB7Y3DU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDSTxaBoRmN3zLA%2BM47P%2F8wzKXvT2KX8cybkHXfAJl88AiEAqxNUga8ugh4N4h3c3gUabdwU%2FJ%2BrdPLcUHUaw%2BOJrRQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEF4gQmqP3iT%2FhZWSCrcAwLuOEG64gqXKXt4btpNhFnfMOO6syR%2FHl8KHW%2BOyD9yVTPqXQvlZFwfX5Kr7Z04yAQbqqnepCwGCiTFtTIoAIXK3WpaiV7XnbFPnmg5rcFSYVKHSDAndiVsnQFn4hAx8LbKN6GGzyw4nzxJ%2FRaWldL23rDJ0AP29Vw6oVmK8Z6eMuy3xVSX27HKToWuSIupqWCrEDal8NHUFYsCCOu6C1ZDcr85TOPAuydhU4d4SK5jJams%2FXpbQlEbZNhs18GJBEw6NOGYaKoabSpMVXJI%2BiAJiZNIFOj7YzwEA4Uy0TFDxXxRkJyNoXOPLxx%2BfpssMunLx5Exw32F94zMDtcpVCSqWCqTnL2XIUqNPG%2Bk3iKflHqybMEcE%2FNWY13bMu%2Fx0UWggKW2KfRK5US1nG%2Fuvq74WbILHKOTFo4%2BoAb3tv1PIOB5sDLa%2FUkdD%2FJl6pSoBv3RGVp9LYDjZAIgZFP%2BBGxV%2BWID%2FaYAi0W%2FtNVzGlrUZeKasHevAZ7%2Bw8L9aK%2B4gWI9KKJzBACofNu1GAzkYV2oUcoVo124Gr2sr19xhpE77HHX%2B3%2BXHyMBs46A2OTdLd6n4J%2BD3UO4Yph7DygSScQM03yuEG94xhM4vLbS8d1ytmXBNX%2FbkyOluFmYMNG%2F5MMGOqUBEIrqrhUvN4V%2BjN8T1gdJjzfJVUfwaI3iLLkg%2BZVRc%2BmtBj43zJutSCp2MtdS5ufGzLFSDieGRgUqCBUJ8rdyRm34ubfzvf0zskB04m9TMGJJ%2FQxr%2BxIcR8TGk8ERLcDwQ6NwGkUWGb9SlFW9za3N4XjRval%2BcgqxtcuzyNjtKqhD%2FWkIUzOEzTEQySuFtxRjX5HH80%2FezCNhNwzmBD107zkt0dYf&X-Amz-Signature=5cd339e86edc2dd0de26db125700d03c847deb25c6db1920603055d645ba7c1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
