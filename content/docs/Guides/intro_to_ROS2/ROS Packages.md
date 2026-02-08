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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NMQKTEW%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BZAhEjGqonJnJGXkDRiWlLTjH2q0f9kT0AU%2FPtzdcBAiEA0I%2BkliE325db9U1AyxeCV4rG0XkfqncUMG1RkfcxyfIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDN3zgdZU9pPXYs%2FYHSrcA5mHPRV9FNTU9Zp8XtBBuQdUouFkffyUgaybdf6lx5gmnISafFpJNCPoI4wdSssm4MNsOt2vdK2PvwMYxrgHqai%2BwVigF9ufW537jYO%2FG6xOkdM40%2FlLo3JQ9OWD3YRqPJioQOwcuiFEwo%2F2lyCKDQBCeTx3agMX5sIlXZUz%2BfyW7FFLJTJ%2FVasqhAilGpfOW4%2B4L7M0g9F8azgjvU0cNW8Qzqx1vnSWMSk1ePou4SiRDu%2BdYgo6ss5WZKAltAJRLtGoJM6M7loH98fc0pzZ36h0iguIzgiqQMLpSgVYjbhTmP5gcnMO4xKvrjFzNZrlMhyvOZ3mIH9LCrKHkGcVUlS%2BgqZHHHz%2BZy1Fo91v7y4bLe3JYRHZ46t2xPrceusFzS%2Fvf66Mtj2CB%2BTOf0Pmp2KPGWTBvzl38K8J6PRJswrui9RD5eyAK%2Fhn3GPM0eRtn1VWYKtQ23hJPRE%2BFyFYIfVwGxzh2v1Fhq6ST%2F7er2rAZHKdk9TuFDytI%2FkGE4fM24ybwo6WUiyabCCPAKxr4xHA%2FxjpCsbbrDJ%2FofVFB67Vc%2F7UR7hJ1FkN1BY4UOlJbbODSGoNJQ4sC9SMrQaURLfe2UquNi%2BmMh0zg%2BTSIWpmscAQaRlGK7RdHrXsMKfqn8wGOqUB2Ow8sAivS%2BcHEDEFtsUPpk4EYSgflzfNjuLYiMGdTHiV8xbbAw1Ajl7pHcDRkNAy1kTQf6ERQlkMsNW26lXrhN%2B5zWMo9kguOMwAPd3AZ9uxL7%2FH8zLB%2FWE%2FEZUUprKokVpMkyBZSKSm0s4Ffm2mw7ARNTkNSn9ciSQvJkFlpoU563u9Nmg0VxOLO96SJYzsTGTvbm7jDdwwBjzWHuTDYtY%2FGrAK&X-Amz-Signature=0a1ca052989371f458c32d59db0168a3f758d699ca5a3b775963a81161b9a1f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NMQKTEW%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BZAhEjGqonJnJGXkDRiWlLTjH2q0f9kT0AU%2FPtzdcBAiEA0I%2BkliE325db9U1AyxeCV4rG0XkfqncUMG1RkfcxyfIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDN3zgdZU9pPXYs%2FYHSrcA5mHPRV9FNTU9Zp8XtBBuQdUouFkffyUgaybdf6lx5gmnISafFpJNCPoI4wdSssm4MNsOt2vdK2PvwMYxrgHqai%2BwVigF9ufW537jYO%2FG6xOkdM40%2FlLo3JQ9OWD3YRqPJioQOwcuiFEwo%2F2lyCKDQBCeTx3agMX5sIlXZUz%2BfyW7FFLJTJ%2FVasqhAilGpfOW4%2B4L7M0g9F8azgjvU0cNW8Qzqx1vnSWMSk1ePou4SiRDu%2BdYgo6ss5WZKAltAJRLtGoJM6M7loH98fc0pzZ36h0iguIzgiqQMLpSgVYjbhTmP5gcnMO4xKvrjFzNZrlMhyvOZ3mIH9LCrKHkGcVUlS%2BgqZHHHz%2BZy1Fo91v7y4bLe3JYRHZ46t2xPrceusFzS%2Fvf66Mtj2CB%2BTOf0Pmp2KPGWTBvzl38K8J6PRJswrui9RD5eyAK%2Fhn3GPM0eRtn1VWYKtQ23hJPRE%2BFyFYIfVwGxzh2v1Fhq6ST%2F7er2rAZHKdk9TuFDytI%2FkGE4fM24ybwo6WUiyabCCPAKxr4xHA%2FxjpCsbbrDJ%2FofVFB67Vc%2F7UR7hJ1FkN1BY4UOlJbbODSGoNJQ4sC9SMrQaURLfe2UquNi%2BmMh0zg%2BTSIWpmscAQaRlGK7RdHrXsMKfqn8wGOqUB2Ow8sAivS%2BcHEDEFtsUPpk4EYSgflzfNjuLYiMGdTHiV8xbbAw1Ajl7pHcDRkNAy1kTQf6ERQlkMsNW26lXrhN%2B5zWMo9kguOMwAPd3AZ9uxL7%2FH8zLB%2FWE%2FEZUUprKokVpMkyBZSKSm0s4Ffm2mw7ARNTkNSn9ciSQvJkFlpoU563u9Nmg0VxOLO96SJYzsTGTvbm7jDdwwBjzWHuTDYtY%2FGrAK&X-Amz-Signature=964f311133ab7220ff3736be8a57d3ef97dbad4e00dc1e2b9f9a4ddd9bf00ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NMQKTEW%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BZAhEjGqonJnJGXkDRiWlLTjH2q0f9kT0AU%2FPtzdcBAiEA0I%2BkliE325db9U1AyxeCV4rG0XkfqncUMG1RkfcxyfIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDN3zgdZU9pPXYs%2FYHSrcA5mHPRV9FNTU9Zp8XtBBuQdUouFkffyUgaybdf6lx5gmnISafFpJNCPoI4wdSssm4MNsOt2vdK2PvwMYxrgHqai%2BwVigF9ufW537jYO%2FG6xOkdM40%2FlLo3JQ9OWD3YRqPJioQOwcuiFEwo%2F2lyCKDQBCeTx3agMX5sIlXZUz%2BfyW7FFLJTJ%2FVasqhAilGpfOW4%2B4L7M0g9F8azgjvU0cNW8Qzqx1vnSWMSk1ePou4SiRDu%2BdYgo6ss5WZKAltAJRLtGoJM6M7loH98fc0pzZ36h0iguIzgiqQMLpSgVYjbhTmP5gcnMO4xKvrjFzNZrlMhyvOZ3mIH9LCrKHkGcVUlS%2BgqZHHHz%2BZy1Fo91v7y4bLe3JYRHZ46t2xPrceusFzS%2Fvf66Mtj2CB%2BTOf0Pmp2KPGWTBvzl38K8J6PRJswrui9RD5eyAK%2Fhn3GPM0eRtn1VWYKtQ23hJPRE%2BFyFYIfVwGxzh2v1Fhq6ST%2F7er2rAZHKdk9TuFDytI%2FkGE4fM24ybwo6WUiyabCCPAKxr4xHA%2FxjpCsbbrDJ%2FofVFB67Vc%2F7UR7hJ1FkN1BY4UOlJbbODSGoNJQ4sC9SMrQaURLfe2UquNi%2BmMh0zg%2BTSIWpmscAQaRlGK7RdHrXsMKfqn8wGOqUB2Ow8sAivS%2BcHEDEFtsUPpk4EYSgflzfNjuLYiMGdTHiV8xbbAw1Ajl7pHcDRkNAy1kTQf6ERQlkMsNW26lXrhN%2B5zWMo9kguOMwAPd3AZ9uxL7%2FH8zLB%2FWE%2FEZUUprKokVpMkyBZSKSm0s4Ffm2mw7ARNTkNSn9ciSQvJkFlpoU563u9Nmg0VxOLO96SJYzsTGTvbm7jDdwwBjzWHuTDYtY%2FGrAK&X-Amz-Signature=9926b6daedafd4b2418403ac734b62e14281e355192a36d23c6ba95515dd3e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NMQKTEW%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BZAhEjGqonJnJGXkDRiWlLTjH2q0f9kT0AU%2FPtzdcBAiEA0I%2BkliE325db9U1AyxeCV4rG0XkfqncUMG1RkfcxyfIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDN3zgdZU9pPXYs%2FYHSrcA5mHPRV9FNTU9Zp8XtBBuQdUouFkffyUgaybdf6lx5gmnISafFpJNCPoI4wdSssm4MNsOt2vdK2PvwMYxrgHqai%2BwVigF9ufW537jYO%2FG6xOkdM40%2FlLo3JQ9OWD3YRqPJioQOwcuiFEwo%2F2lyCKDQBCeTx3agMX5sIlXZUz%2BfyW7FFLJTJ%2FVasqhAilGpfOW4%2B4L7M0g9F8azgjvU0cNW8Qzqx1vnSWMSk1ePou4SiRDu%2BdYgo6ss5WZKAltAJRLtGoJM6M7loH98fc0pzZ36h0iguIzgiqQMLpSgVYjbhTmP5gcnMO4xKvrjFzNZrlMhyvOZ3mIH9LCrKHkGcVUlS%2BgqZHHHz%2BZy1Fo91v7y4bLe3JYRHZ46t2xPrceusFzS%2Fvf66Mtj2CB%2BTOf0Pmp2KPGWTBvzl38K8J6PRJswrui9RD5eyAK%2Fhn3GPM0eRtn1VWYKtQ23hJPRE%2BFyFYIfVwGxzh2v1Fhq6ST%2F7er2rAZHKdk9TuFDytI%2FkGE4fM24ybwo6WUiyabCCPAKxr4xHA%2FxjpCsbbrDJ%2FofVFB67Vc%2F7UR7hJ1FkN1BY4UOlJbbODSGoNJQ4sC9SMrQaURLfe2UquNi%2BmMh0zg%2BTSIWpmscAQaRlGK7RdHrXsMKfqn8wGOqUB2Ow8sAivS%2BcHEDEFtsUPpk4EYSgflzfNjuLYiMGdTHiV8xbbAw1Ajl7pHcDRkNAy1kTQf6ERQlkMsNW26lXrhN%2B5zWMo9kguOMwAPd3AZ9uxL7%2FH8zLB%2FWE%2FEZUUprKokVpMkyBZSKSm0s4Ffm2mw7ARNTkNSn9ciSQvJkFlpoU563u9Nmg0VxOLO96SJYzsTGTvbm7jDdwwBjzWHuTDYtY%2FGrAK&X-Amz-Signature=6bfb19dedc24eec386179a05b07178d30505af7e787c25c332cd3f09d6bbb413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NMQKTEW%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BZAhEjGqonJnJGXkDRiWlLTjH2q0f9kT0AU%2FPtzdcBAiEA0I%2BkliE325db9U1AyxeCV4rG0XkfqncUMG1RkfcxyfIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDN3zgdZU9pPXYs%2FYHSrcA5mHPRV9FNTU9Zp8XtBBuQdUouFkffyUgaybdf6lx5gmnISafFpJNCPoI4wdSssm4MNsOt2vdK2PvwMYxrgHqai%2BwVigF9ufW537jYO%2FG6xOkdM40%2FlLo3JQ9OWD3YRqPJioQOwcuiFEwo%2F2lyCKDQBCeTx3agMX5sIlXZUz%2BfyW7FFLJTJ%2FVasqhAilGpfOW4%2B4L7M0g9F8azgjvU0cNW8Qzqx1vnSWMSk1ePou4SiRDu%2BdYgo6ss5WZKAltAJRLtGoJM6M7loH98fc0pzZ36h0iguIzgiqQMLpSgVYjbhTmP5gcnMO4xKvrjFzNZrlMhyvOZ3mIH9LCrKHkGcVUlS%2BgqZHHHz%2BZy1Fo91v7y4bLe3JYRHZ46t2xPrceusFzS%2Fvf66Mtj2CB%2BTOf0Pmp2KPGWTBvzl38K8J6PRJswrui9RD5eyAK%2Fhn3GPM0eRtn1VWYKtQ23hJPRE%2BFyFYIfVwGxzh2v1Fhq6ST%2F7er2rAZHKdk9TuFDytI%2FkGE4fM24ybwo6WUiyabCCPAKxr4xHA%2FxjpCsbbrDJ%2FofVFB67Vc%2F7UR7hJ1FkN1BY4UOlJbbODSGoNJQ4sC9SMrQaURLfe2UquNi%2BmMh0zg%2BTSIWpmscAQaRlGK7RdHrXsMKfqn8wGOqUB2Ow8sAivS%2BcHEDEFtsUPpk4EYSgflzfNjuLYiMGdTHiV8xbbAw1Ajl7pHcDRkNAy1kTQf6ERQlkMsNW26lXrhN%2B5zWMo9kguOMwAPd3AZ9uxL7%2FH8zLB%2FWE%2FEZUUprKokVpMkyBZSKSm0s4Ffm2mw7ARNTkNSn9ciSQvJkFlpoU563u9Nmg0VxOLO96SJYzsTGTvbm7jDdwwBjzWHuTDYtY%2FGrAK&X-Amz-Signature=753fb7712e962f1101461cbc83c67b312408fc2590761a46ec10b653a7b4ca30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NMQKTEW%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BZAhEjGqonJnJGXkDRiWlLTjH2q0f9kT0AU%2FPtzdcBAiEA0I%2BkliE325db9U1AyxeCV4rG0XkfqncUMG1RkfcxyfIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDN3zgdZU9pPXYs%2FYHSrcA5mHPRV9FNTU9Zp8XtBBuQdUouFkffyUgaybdf6lx5gmnISafFpJNCPoI4wdSssm4MNsOt2vdK2PvwMYxrgHqai%2BwVigF9ufW537jYO%2FG6xOkdM40%2FlLo3JQ9OWD3YRqPJioQOwcuiFEwo%2F2lyCKDQBCeTx3agMX5sIlXZUz%2BfyW7FFLJTJ%2FVasqhAilGpfOW4%2B4L7M0g9F8azgjvU0cNW8Qzqx1vnSWMSk1ePou4SiRDu%2BdYgo6ss5WZKAltAJRLtGoJM6M7loH98fc0pzZ36h0iguIzgiqQMLpSgVYjbhTmP5gcnMO4xKvrjFzNZrlMhyvOZ3mIH9LCrKHkGcVUlS%2BgqZHHHz%2BZy1Fo91v7y4bLe3JYRHZ46t2xPrceusFzS%2Fvf66Mtj2CB%2BTOf0Pmp2KPGWTBvzl38K8J6PRJswrui9RD5eyAK%2Fhn3GPM0eRtn1VWYKtQ23hJPRE%2BFyFYIfVwGxzh2v1Fhq6ST%2F7er2rAZHKdk9TuFDytI%2FkGE4fM24ybwo6WUiyabCCPAKxr4xHA%2FxjpCsbbrDJ%2FofVFB67Vc%2F7UR7hJ1FkN1BY4UOlJbbODSGoNJQ4sC9SMrQaURLfe2UquNi%2BmMh0zg%2BTSIWpmscAQaRlGK7RdHrXsMKfqn8wGOqUB2Ow8sAivS%2BcHEDEFtsUPpk4EYSgflzfNjuLYiMGdTHiV8xbbAw1Ajl7pHcDRkNAy1kTQf6ERQlkMsNW26lXrhN%2B5zWMo9kguOMwAPd3AZ9uxL7%2FH8zLB%2FWE%2FEZUUprKokVpMkyBZSKSm0s4Ffm2mw7ARNTkNSn9ciSQvJkFlpoU563u9Nmg0VxOLO96SJYzsTGTvbm7jDdwwBjzWHuTDYtY%2FGrAK&X-Amz-Signature=37e10fa92e9f1436550e164a316423ab39189c9b69d3669e26a762efb07a589a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NMQKTEW%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BZAhEjGqonJnJGXkDRiWlLTjH2q0f9kT0AU%2FPtzdcBAiEA0I%2BkliE325db9U1AyxeCV4rG0XkfqncUMG1RkfcxyfIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDN3zgdZU9pPXYs%2FYHSrcA5mHPRV9FNTU9Zp8XtBBuQdUouFkffyUgaybdf6lx5gmnISafFpJNCPoI4wdSssm4MNsOt2vdK2PvwMYxrgHqai%2BwVigF9ufW537jYO%2FG6xOkdM40%2FlLo3JQ9OWD3YRqPJioQOwcuiFEwo%2F2lyCKDQBCeTx3agMX5sIlXZUz%2BfyW7FFLJTJ%2FVasqhAilGpfOW4%2B4L7M0g9F8azgjvU0cNW8Qzqx1vnSWMSk1ePou4SiRDu%2BdYgo6ss5WZKAltAJRLtGoJM6M7loH98fc0pzZ36h0iguIzgiqQMLpSgVYjbhTmP5gcnMO4xKvrjFzNZrlMhyvOZ3mIH9LCrKHkGcVUlS%2BgqZHHHz%2BZy1Fo91v7y4bLe3JYRHZ46t2xPrceusFzS%2Fvf66Mtj2CB%2BTOf0Pmp2KPGWTBvzl38K8J6PRJswrui9RD5eyAK%2Fhn3GPM0eRtn1VWYKtQ23hJPRE%2BFyFYIfVwGxzh2v1Fhq6ST%2F7er2rAZHKdk9TuFDytI%2FkGE4fM24ybwo6WUiyabCCPAKxr4xHA%2FxjpCsbbrDJ%2FofVFB67Vc%2F7UR7hJ1FkN1BY4UOlJbbODSGoNJQ4sC9SMrQaURLfe2UquNi%2BmMh0zg%2BTSIWpmscAQaRlGK7RdHrXsMKfqn8wGOqUB2Ow8sAivS%2BcHEDEFtsUPpk4EYSgflzfNjuLYiMGdTHiV8xbbAw1Ajl7pHcDRkNAy1kTQf6ERQlkMsNW26lXrhN%2B5zWMo9kguOMwAPd3AZ9uxL7%2FH8zLB%2FWE%2FEZUUprKokVpMkyBZSKSm0s4Ffm2mw7ARNTkNSn9ciSQvJkFlpoU563u9Nmg0VxOLO96SJYzsTGTvbm7jDdwwBjzWHuTDYtY%2FGrAK&X-Amz-Signature=39795cd21035f4fbb90a8d0d86ba5201845570d410db93c47f337b7f72fdf882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
