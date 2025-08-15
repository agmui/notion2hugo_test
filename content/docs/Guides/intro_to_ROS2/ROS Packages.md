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
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7E6527O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCorGzPrIAJ6TbrRFl96GdW1QiY6f56rjze7g0Q4rA3fQIgQaioxpfOhfKBppIdwFazpHVbiY5qp%2BUHUo5blgnAQUMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMJPndjsPm25WkpBxSrcAwsqUIYvvFnpjp5g4HF9sIX%2F%2F8%2FEaunw0PMRF4v4pZhRX8FmvBu98P9bUmHvw0en%2BZUZkO6Ansik9ngY4h5PzT5KKmj%2Fvjz7KD8lMH9PeSpThwJSZYM75kCUuGI97%2FS8e0i5WSa9a7wiins1BnbHo72isDs7F8OklJywytLf%2BsCTaDIOeu%2B3ULTCOjbCb2cHPENQj1fkw80boJBSaWtSrOJESnJPqdKHZepno3S3w67ttIYj%2FS%2FGmrgmnuVRiyweuaUCKd1jgOuDcH4%2Bl6LGcGD0LbqPXbdg5vGyoFln84q4tWlHqKtRJt6t93VEfLej0gh7g3Jee%2Fv4g7mvYgi4JFPwrtd3gJHFfCz8FSBwhMKB48uqgg5v%2FV%2BwTe%2B9RXtkziyWksTDHEM9AzLyF5n8Y9vuJ1sIjp2tHSe6pGxO6RjNjbGohZHaRjL7w9xsGn9n97xeawD0QQ5AceHb4N2SyKmdlho1TFyR%2Bmpfh8f7%2FgxZgOYeQdh6TDvV5nwHwgcnT9a%2BbuQ4BMvfdmFi6hUAoguPXa1xbToeM7WcUvVZJjY%2BPi%2FGlmgBPOciSyKT9J%2BrZUudPMxQGRICvyhgQj7IJPhvScy%2BiYC2ovbDJuTntr0%2Fue1oVY9jBiqhWEQ7ML%2Fu%2B8QGOqUB6GIGgBOYD%2FGGQZTjpjaaHZdXIal5AdA1eISJ5xgoTAPy271H7gDej5Pdgd0jFkdXBmtzNt9CEGzvELMrGabOyPMo7S%2FVE8wz1JlpZq4xgvAqi%2FeXHZ2iGEgT4p9g%2FUKJqdACAe5otBSHIctdqSp78U3nw72W7ffweBidDGAxMwB0kx8isChhpIcrp%2F1L1zK69cO36E0KovY20OMMhTtXS03oZQhN&X-Amz-Signature=c98c15ea8dc093185be4945f912239ca2c5e429b1fd5b1e280ff4f09b576fc04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7E6527O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCorGzPrIAJ6TbrRFl96GdW1QiY6f56rjze7g0Q4rA3fQIgQaioxpfOhfKBppIdwFazpHVbiY5qp%2BUHUo5blgnAQUMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMJPndjsPm25WkpBxSrcAwsqUIYvvFnpjp5g4HF9sIX%2F%2F8%2FEaunw0PMRF4v4pZhRX8FmvBu98P9bUmHvw0en%2BZUZkO6Ansik9ngY4h5PzT5KKmj%2Fvjz7KD8lMH9PeSpThwJSZYM75kCUuGI97%2FS8e0i5WSa9a7wiins1BnbHo72isDs7F8OklJywytLf%2BsCTaDIOeu%2B3ULTCOjbCb2cHPENQj1fkw80boJBSaWtSrOJESnJPqdKHZepno3S3w67ttIYj%2FS%2FGmrgmnuVRiyweuaUCKd1jgOuDcH4%2Bl6LGcGD0LbqPXbdg5vGyoFln84q4tWlHqKtRJt6t93VEfLej0gh7g3Jee%2Fv4g7mvYgi4JFPwrtd3gJHFfCz8FSBwhMKB48uqgg5v%2FV%2BwTe%2B9RXtkziyWksTDHEM9AzLyF5n8Y9vuJ1sIjp2tHSe6pGxO6RjNjbGohZHaRjL7w9xsGn9n97xeawD0QQ5AceHb4N2SyKmdlho1TFyR%2Bmpfh8f7%2FgxZgOYeQdh6TDvV5nwHwgcnT9a%2BbuQ4BMvfdmFi6hUAoguPXa1xbToeM7WcUvVZJjY%2BPi%2FGlmgBPOciSyKT9J%2BrZUudPMxQGRICvyhgQj7IJPhvScy%2BiYC2ovbDJuTntr0%2Fue1oVY9jBiqhWEQ7ML%2Fu%2B8QGOqUB6GIGgBOYD%2FGGQZTjpjaaHZdXIal5AdA1eISJ5xgoTAPy271H7gDej5Pdgd0jFkdXBmtzNt9CEGzvELMrGabOyPMo7S%2FVE8wz1JlpZq4xgvAqi%2FeXHZ2iGEgT4p9g%2FUKJqdACAe5otBSHIctdqSp78U3nw72W7ffweBidDGAxMwB0kx8isChhpIcrp%2F1L1zK69cO36E0KovY20OMMhTtXS03oZQhN&X-Amz-Signature=c36280fd84cf1720976494311e5a59e9b053174cf47e52c60705326e4ae9be72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7E6527O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCorGzPrIAJ6TbrRFl96GdW1QiY6f56rjze7g0Q4rA3fQIgQaioxpfOhfKBppIdwFazpHVbiY5qp%2BUHUo5blgnAQUMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMJPndjsPm25WkpBxSrcAwsqUIYvvFnpjp5g4HF9sIX%2F%2F8%2FEaunw0PMRF4v4pZhRX8FmvBu98P9bUmHvw0en%2BZUZkO6Ansik9ngY4h5PzT5KKmj%2Fvjz7KD8lMH9PeSpThwJSZYM75kCUuGI97%2FS8e0i5WSa9a7wiins1BnbHo72isDs7F8OklJywytLf%2BsCTaDIOeu%2B3ULTCOjbCb2cHPENQj1fkw80boJBSaWtSrOJESnJPqdKHZepno3S3w67ttIYj%2FS%2FGmrgmnuVRiyweuaUCKd1jgOuDcH4%2Bl6LGcGD0LbqPXbdg5vGyoFln84q4tWlHqKtRJt6t93VEfLej0gh7g3Jee%2Fv4g7mvYgi4JFPwrtd3gJHFfCz8FSBwhMKB48uqgg5v%2FV%2BwTe%2B9RXtkziyWksTDHEM9AzLyF5n8Y9vuJ1sIjp2tHSe6pGxO6RjNjbGohZHaRjL7w9xsGn9n97xeawD0QQ5AceHb4N2SyKmdlho1TFyR%2Bmpfh8f7%2FgxZgOYeQdh6TDvV5nwHwgcnT9a%2BbuQ4BMvfdmFi6hUAoguPXa1xbToeM7WcUvVZJjY%2BPi%2FGlmgBPOciSyKT9J%2BrZUudPMxQGRICvyhgQj7IJPhvScy%2BiYC2ovbDJuTntr0%2Fue1oVY9jBiqhWEQ7ML%2Fu%2B8QGOqUB6GIGgBOYD%2FGGQZTjpjaaHZdXIal5AdA1eISJ5xgoTAPy271H7gDej5Pdgd0jFkdXBmtzNt9CEGzvELMrGabOyPMo7S%2FVE8wz1JlpZq4xgvAqi%2FeXHZ2iGEgT4p9g%2FUKJqdACAe5otBSHIctdqSp78U3nw72W7ffweBidDGAxMwB0kx8isChhpIcrp%2F1L1zK69cO36E0KovY20OMMhTtXS03oZQhN&X-Amz-Signature=f700cc23408d491bbe24b05fddef1446b83edd600377b1a846f05f6d27d4fcf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7E6527O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCorGzPrIAJ6TbrRFl96GdW1QiY6f56rjze7g0Q4rA3fQIgQaioxpfOhfKBppIdwFazpHVbiY5qp%2BUHUo5blgnAQUMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMJPndjsPm25WkpBxSrcAwsqUIYvvFnpjp5g4HF9sIX%2F%2F8%2FEaunw0PMRF4v4pZhRX8FmvBu98P9bUmHvw0en%2BZUZkO6Ansik9ngY4h5PzT5KKmj%2Fvjz7KD8lMH9PeSpThwJSZYM75kCUuGI97%2FS8e0i5WSa9a7wiins1BnbHo72isDs7F8OklJywytLf%2BsCTaDIOeu%2B3ULTCOjbCb2cHPENQj1fkw80boJBSaWtSrOJESnJPqdKHZepno3S3w67ttIYj%2FS%2FGmrgmnuVRiyweuaUCKd1jgOuDcH4%2Bl6LGcGD0LbqPXbdg5vGyoFln84q4tWlHqKtRJt6t93VEfLej0gh7g3Jee%2Fv4g7mvYgi4JFPwrtd3gJHFfCz8FSBwhMKB48uqgg5v%2FV%2BwTe%2B9RXtkziyWksTDHEM9AzLyF5n8Y9vuJ1sIjp2tHSe6pGxO6RjNjbGohZHaRjL7w9xsGn9n97xeawD0QQ5AceHb4N2SyKmdlho1TFyR%2Bmpfh8f7%2FgxZgOYeQdh6TDvV5nwHwgcnT9a%2BbuQ4BMvfdmFi6hUAoguPXa1xbToeM7WcUvVZJjY%2BPi%2FGlmgBPOciSyKT9J%2BrZUudPMxQGRICvyhgQj7IJPhvScy%2BiYC2ovbDJuTntr0%2Fue1oVY9jBiqhWEQ7ML%2Fu%2B8QGOqUB6GIGgBOYD%2FGGQZTjpjaaHZdXIal5AdA1eISJ5xgoTAPy271H7gDej5Pdgd0jFkdXBmtzNt9CEGzvELMrGabOyPMo7S%2FVE8wz1JlpZq4xgvAqi%2FeXHZ2iGEgT4p9g%2FUKJqdACAe5otBSHIctdqSp78U3nw72W7ffweBidDGAxMwB0kx8isChhpIcrp%2F1L1zK69cO36E0KovY20OMMhTtXS03oZQhN&X-Amz-Signature=b5d6950909e80caf97f6761cd2e44f7b448def9fde376120ded6949b886aacb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7E6527O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCorGzPrIAJ6TbrRFl96GdW1QiY6f56rjze7g0Q4rA3fQIgQaioxpfOhfKBppIdwFazpHVbiY5qp%2BUHUo5blgnAQUMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMJPndjsPm25WkpBxSrcAwsqUIYvvFnpjp5g4HF9sIX%2F%2F8%2FEaunw0PMRF4v4pZhRX8FmvBu98P9bUmHvw0en%2BZUZkO6Ansik9ngY4h5PzT5KKmj%2Fvjz7KD8lMH9PeSpThwJSZYM75kCUuGI97%2FS8e0i5WSa9a7wiins1BnbHo72isDs7F8OklJywytLf%2BsCTaDIOeu%2B3ULTCOjbCb2cHPENQj1fkw80boJBSaWtSrOJESnJPqdKHZepno3S3w67ttIYj%2FS%2FGmrgmnuVRiyweuaUCKd1jgOuDcH4%2Bl6LGcGD0LbqPXbdg5vGyoFln84q4tWlHqKtRJt6t93VEfLej0gh7g3Jee%2Fv4g7mvYgi4JFPwrtd3gJHFfCz8FSBwhMKB48uqgg5v%2FV%2BwTe%2B9RXtkziyWksTDHEM9AzLyF5n8Y9vuJ1sIjp2tHSe6pGxO6RjNjbGohZHaRjL7w9xsGn9n97xeawD0QQ5AceHb4N2SyKmdlho1TFyR%2Bmpfh8f7%2FgxZgOYeQdh6TDvV5nwHwgcnT9a%2BbuQ4BMvfdmFi6hUAoguPXa1xbToeM7WcUvVZJjY%2BPi%2FGlmgBPOciSyKT9J%2BrZUudPMxQGRICvyhgQj7IJPhvScy%2BiYC2ovbDJuTntr0%2Fue1oVY9jBiqhWEQ7ML%2Fu%2B8QGOqUB6GIGgBOYD%2FGGQZTjpjaaHZdXIal5AdA1eISJ5xgoTAPy271H7gDej5Pdgd0jFkdXBmtzNt9CEGzvELMrGabOyPMo7S%2FVE8wz1JlpZq4xgvAqi%2FeXHZ2iGEgT4p9g%2FUKJqdACAe5otBSHIctdqSp78U3nw72W7ffweBidDGAxMwB0kx8isChhpIcrp%2F1L1zK69cO36E0KovY20OMMhTtXS03oZQhN&X-Amz-Signature=9396e0085f7d12913b0dbd909d7867dbe3f829bfe1921456b77163b7aa92fe2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7E6527O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCorGzPrIAJ6TbrRFl96GdW1QiY6f56rjze7g0Q4rA3fQIgQaioxpfOhfKBppIdwFazpHVbiY5qp%2BUHUo5blgnAQUMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMJPndjsPm25WkpBxSrcAwsqUIYvvFnpjp5g4HF9sIX%2F%2F8%2FEaunw0PMRF4v4pZhRX8FmvBu98P9bUmHvw0en%2BZUZkO6Ansik9ngY4h5PzT5KKmj%2Fvjz7KD8lMH9PeSpThwJSZYM75kCUuGI97%2FS8e0i5WSa9a7wiins1BnbHo72isDs7F8OklJywytLf%2BsCTaDIOeu%2B3ULTCOjbCb2cHPENQj1fkw80boJBSaWtSrOJESnJPqdKHZepno3S3w67ttIYj%2FS%2FGmrgmnuVRiyweuaUCKd1jgOuDcH4%2Bl6LGcGD0LbqPXbdg5vGyoFln84q4tWlHqKtRJt6t93VEfLej0gh7g3Jee%2Fv4g7mvYgi4JFPwrtd3gJHFfCz8FSBwhMKB48uqgg5v%2FV%2BwTe%2B9RXtkziyWksTDHEM9AzLyF5n8Y9vuJ1sIjp2tHSe6pGxO6RjNjbGohZHaRjL7w9xsGn9n97xeawD0QQ5AceHb4N2SyKmdlho1TFyR%2Bmpfh8f7%2FgxZgOYeQdh6TDvV5nwHwgcnT9a%2BbuQ4BMvfdmFi6hUAoguPXa1xbToeM7WcUvVZJjY%2BPi%2FGlmgBPOciSyKT9J%2BrZUudPMxQGRICvyhgQj7IJPhvScy%2BiYC2ovbDJuTntr0%2Fue1oVY9jBiqhWEQ7ML%2Fu%2B8QGOqUB6GIGgBOYD%2FGGQZTjpjaaHZdXIal5AdA1eISJ5xgoTAPy271H7gDej5Pdgd0jFkdXBmtzNt9CEGzvELMrGabOyPMo7S%2FVE8wz1JlpZq4xgvAqi%2FeXHZ2iGEgT4p9g%2FUKJqdACAe5otBSHIctdqSp78U3nw72W7ffweBidDGAxMwB0kx8isChhpIcrp%2F1L1zK69cO36E0KovY20OMMhTtXS03oZQhN&X-Amz-Signature=da291abc229bac2a22ae3cae795d9dd49839ec83103429288b12c00c3ff7fce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7E6527O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCorGzPrIAJ6TbrRFl96GdW1QiY6f56rjze7g0Q4rA3fQIgQaioxpfOhfKBppIdwFazpHVbiY5qp%2BUHUo5blgnAQUMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMJPndjsPm25WkpBxSrcAwsqUIYvvFnpjp5g4HF9sIX%2F%2F8%2FEaunw0PMRF4v4pZhRX8FmvBu98P9bUmHvw0en%2BZUZkO6Ansik9ngY4h5PzT5KKmj%2Fvjz7KD8lMH9PeSpThwJSZYM75kCUuGI97%2FS8e0i5WSa9a7wiins1BnbHo72isDs7F8OklJywytLf%2BsCTaDIOeu%2B3ULTCOjbCb2cHPENQj1fkw80boJBSaWtSrOJESnJPqdKHZepno3S3w67ttIYj%2FS%2FGmrgmnuVRiyweuaUCKd1jgOuDcH4%2Bl6LGcGD0LbqPXbdg5vGyoFln84q4tWlHqKtRJt6t93VEfLej0gh7g3Jee%2Fv4g7mvYgi4JFPwrtd3gJHFfCz8FSBwhMKB48uqgg5v%2FV%2BwTe%2B9RXtkziyWksTDHEM9AzLyF5n8Y9vuJ1sIjp2tHSe6pGxO6RjNjbGohZHaRjL7w9xsGn9n97xeawD0QQ5AceHb4N2SyKmdlho1TFyR%2Bmpfh8f7%2FgxZgOYeQdh6TDvV5nwHwgcnT9a%2BbuQ4BMvfdmFi6hUAoguPXa1xbToeM7WcUvVZJjY%2BPi%2FGlmgBPOciSyKT9J%2BrZUudPMxQGRICvyhgQj7IJPhvScy%2BiYC2ovbDJuTntr0%2Fue1oVY9jBiqhWEQ7ML%2Fu%2B8QGOqUB6GIGgBOYD%2FGGQZTjpjaaHZdXIal5AdA1eISJ5xgoTAPy271H7gDej5Pdgd0jFkdXBmtzNt9CEGzvELMrGabOyPMo7S%2FVE8wz1JlpZq4xgvAqi%2FeXHZ2iGEgT4p9g%2FUKJqdACAe5otBSHIctdqSp78U3nw72W7ffweBidDGAxMwB0kx8isChhpIcrp%2F1L1zK69cO36E0KovY20OMMhTtXS03oZQhN&X-Amz-Signature=66321dab111866bca0d77d4282a61ead4241650f8145407835d8a712b18911e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
