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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U63JU23M%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFctcGhFM72VGsY4%2ByZRi%2FVSCufrKnWkxdfTxuQ65z2gAiEApH1h3YK2vl1qFwrSu6jZEkdLgbmjTOdk76u5mT44X2Iq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDF34b%2F4wsiH1DPHOMircA1BpFqJ5ApPVAv5OjEyax6WKmyQRUJkqGwy3ReNmLLBqUCMUcUzp8kYLZifwlEaMtX4FEpSgXNncRGEtoIHZylu0XjZK4GrzienvhZwpM%2F5kZYIHB9foK47jG9KtGFGF8uPWgsQ6pMYhrta73byc4%2BM3b3ZKa29fhtGmvtCUmeB5%2FDwu9C1R1XIqLC8S9sbY5O%2FwXpf4Z0u8uvsFzRTBYchupP52ESt3JDeL7NEsFC5Roj52zBQ92S7x9s2AeC6IsFmUQEqk5VLsKu2dXTOhkt7dLsNd%2BFUjody9ZJhZ5bl6ixPBS2rUI1syYhBpwxt%2Ba7q48UzaanZAe6rilL09G%2Bp2dSi7HVejtgk11rghCpefHWApa0lo95UXhez%2FRHKjT0od4ePGyil37Pg4btMggQawWIKmiIWnS2bmWV18reMtSNvKYOwOxcYVkFCfgwypWXyX13IX%2Fp9KAk5hSFI9gdElg9vLcEHOgYQalzCBfUiP%2BbuTmUSvKVsrjQLuxJmUGv30xpar%2Fry6kT%2FC2YtjMvJSy9sj%2Bof8%2BBtICOfVPBjydnxq0jquNSj0GDtniux4YizJ5LszKluaDDR84RtuUG0tsALWiNwvK5nbix1Ab%2F42zmKESY1VjUyArUI6MOvPgMIGOqUBRVHpyaO4eomO5y%2FedeQKod3RQZNpWnJ%2FYwyLiRM4E3Bm%2Fg7%2BzhlWghxALQy%2B9FbkHEU10oYI2Tg6YnMGyIJsCmx9G%2FF99u3Q5SH8vP%2FJRkrrcwIA%2FZ%2F0qU%2FHSTsDcldzniTgYXlTOHT48AR%2B5Ye1QxlPKIVG53OJjcFYhGSTxn007E1mbrWopuy1o9Y8pMdFr%2F2DrTysHsT2faUrR%2FDXmrDnI8Zf&X-Amz-Signature=9f17965f1b2c170bd836ce850b3e7b2d4deff34c12c67ffe010fd567f9b88bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U63JU23M%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFctcGhFM72VGsY4%2ByZRi%2FVSCufrKnWkxdfTxuQ65z2gAiEApH1h3YK2vl1qFwrSu6jZEkdLgbmjTOdk76u5mT44X2Iq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDF34b%2F4wsiH1DPHOMircA1BpFqJ5ApPVAv5OjEyax6WKmyQRUJkqGwy3ReNmLLBqUCMUcUzp8kYLZifwlEaMtX4FEpSgXNncRGEtoIHZylu0XjZK4GrzienvhZwpM%2F5kZYIHB9foK47jG9KtGFGF8uPWgsQ6pMYhrta73byc4%2BM3b3ZKa29fhtGmvtCUmeB5%2FDwu9C1R1XIqLC8S9sbY5O%2FwXpf4Z0u8uvsFzRTBYchupP52ESt3JDeL7NEsFC5Roj52zBQ92S7x9s2AeC6IsFmUQEqk5VLsKu2dXTOhkt7dLsNd%2BFUjody9ZJhZ5bl6ixPBS2rUI1syYhBpwxt%2Ba7q48UzaanZAe6rilL09G%2Bp2dSi7HVejtgk11rghCpefHWApa0lo95UXhez%2FRHKjT0od4ePGyil37Pg4btMggQawWIKmiIWnS2bmWV18reMtSNvKYOwOxcYVkFCfgwypWXyX13IX%2Fp9KAk5hSFI9gdElg9vLcEHOgYQalzCBfUiP%2BbuTmUSvKVsrjQLuxJmUGv30xpar%2Fry6kT%2FC2YtjMvJSy9sj%2Bof8%2BBtICOfVPBjydnxq0jquNSj0GDtniux4YizJ5LszKluaDDR84RtuUG0tsALWiNwvK5nbix1Ab%2F42zmKESY1VjUyArUI6MOvPgMIGOqUBRVHpyaO4eomO5y%2FedeQKod3RQZNpWnJ%2FYwyLiRM4E3Bm%2Fg7%2BzhlWghxALQy%2B9FbkHEU10oYI2Tg6YnMGyIJsCmx9G%2FF99u3Q5SH8vP%2FJRkrrcwIA%2FZ%2F0qU%2FHSTsDcldzniTgYXlTOHT48AR%2B5Ye1QxlPKIVG53OJjcFYhGSTxn007E1mbrWopuy1o9Y8pMdFr%2F2DrTysHsT2faUrR%2FDXmrDnI8Zf&X-Amz-Signature=fcc41b0e471e7f3b14ba3b43b2664418cc94c752b041097cdc2a738a7a1064b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U63JU23M%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFctcGhFM72VGsY4%2ByZRi%2FVSCufrKnWkxdfTxuQ65z2gAiEApH1h3YK2vl1qFwrSu6jZEkdLgbmjTOdk76u5mT44X2Iq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDF34b%2F4wsiH1DPHOMircA1BpFqJ5ApPVAv5OjEyax6WKmyQRUJkqGwy3ReNmLLBqUCMUcUzp8kYLZifwlEaMtX4FEpSgXNncRGEtoIHZylu0XjZK4GrzienvhZwpM%2F5kZYIHB9foK47jG9KtGFGF8uPWgsQ6pMYhrta73byc4%2BM3b3ZKa29fhtGmvtCUmeB5%2FDwu9C1R1XIqLC8S9sbY5O%2FwXpf4Z0u8uvsFzRTBYchupP52ESt3JDeL7NEsFC5Roj52zBQ92S7x9s2AeC6IsFmUQEqk5VLsKu2dXTOhkt7dLsNd%2BFUjody9ZJhZ5bl6ixPBS2rUI1syYhBpwxt%2Ba7q48UzaanZAe6rilL09G%2Bp2dSi7HVejtgk11rghCpefHWApa0lo95UXhez%2FRHKjT0od4ePGyil37Pg4btMggQawWIKmiIWnS2bmWV18reMtSNvKYOwOxcYVkFCfgwypWXyX13IX%2Fp9KAk5hSFI9gdElg9vLcEHOgYQalzCBfUiP%2BbuTmUSvKVsrjQLuxJmUGv30xpar%2Fry6kT%2FC2YtjMvJSy9sj%2Bof8%2BBtICOfVPBjydnxq0jquNSj0GDtniux4YizJ5LszKluaDDR84RtuUG0tsALWiNwvK5nbix1Ab%2F42zmKESY1VjUyArUI6MOvPgMIGOqUBRVHpyaO4eomO5y%2FedeQKod3RQZNpWnJ%2FYwyLiRM4E3Bm%2Fg7%2BzhlWghxALQy%2B9FbkHEU10oYI2Tg6YnMGyIJsCmx9G%2FF99u3Q5SH8vP%2FJRkrrcwIA%2FZ%2F0qU%2FHSTsDcldzniTgYXlTOHT48AR%2B5Ye1QxlPKIVG53OJjcFYhGSTxn007E1mbrWopuy1o9Y8pMdFr%2F2DrTysHsT2faUrR%2FDXmrDnI8Zf&X-Amz-Signature=48c8d8a59c3c0dd8da48b5ed260f4527f81032381af1ab05a81023731a9da576&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U63JU23M%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFctcGhFM72VGsY4%2ByZRi%2FVSCufrKnWkxdfTxuQ65z2gAiEApH1h3YK2vl1qFwrSu6jZEkdLgbmjTOdk76u5mT44X2Iq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDF34b%2F4wsiH1DPHOMircA1BpFqJ5ApPVAv5OjEyax6WKmyQRUJkqGwy3ReNmLLBqUCMUcUzp8kYLZifwlEaMtX4FEpSgXNncRGEtoIHZylu0XjZK4GrzienvhZwpM%2F5kZYIHB9foK47jG9KtGFGF8uPWgsQ6pMYhrta73byc4%2BM3b3ZKa29fhtGmvtCUmeB5%2FDwu9C1R1XIqLC8S9sbY5O%2FwXpf4Z0u8uvsFzRTBYchupP52ESt3JDeL7NEsFC5Roj52zBQ92S7x9s2AeC6IsFmUQEqk5VLsKu2dXTOhkt7dLsNd%2BFUjody9ZJhZ5bl6ixPBS2rUI1syYhBpwxt%2Ba7q48UzaanZAe6rilL09G%2Bp2dSi7HVejtgk11rghCpefHWApa0lo95UXhez%2FRHKjT0od4ePGyil37Pg4btMggQawWIKmiIWnS2bmWV18reMtSNvKYOwOxcYVkFCfgwypWXyX13IX%2Fp9KAk5hSFI9gdElg9vLcEHOgYQalzCBfUiP%2BbuTmUSvKVsrjQLuxJmUGv30xpar%2Fry6kT%2FC2YtjMvJSy9sj%2Bof8%2BBtICOfVPBjydnxq0jquNSj0GDtniux4YizJ5LszKluaDDR84RtuUG0tsALWiNwvK5nbix1Ab%2F42zmKESY1VjUyArUI6MOvPgMIGOqUBRVHpyaO4eomO5y%2FedeQKod3RQZNpWnJ%2FYwyLiRM4E3Bm%2Fg7%2BzhlWghxALQy%2B9FbkHEU10oYI2Tg6YnMGyIJsCmx9G%2FF99u3Q5SH8vP%2FJRkrrcwIA%2FZ%2F0qU%2FHSTsDcldzniTgYXlTOHT48AR%2B5Ye1QxlPKIVG53OJjcFYhGSTxn007E1mbrWopuy1o9Y8pMdFr%2F2DrTysHsT2faUrR%2FDXmrDnI8Zf&X-Amz-Signature=256d432da87a427c8cca55693ef101c87892c3b0ded0af20ba4edc4582a102ba&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U63JU23M%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFctcGhFM72VGsY4%2ByZRi%2FVSCufrKnWkxdfTxuQ65z2gAiEApH1h3YK2vl1qFwrSu6jZEkdLgbmjTOdk76u5mT44X2Iq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDF34b%2F4wsiH1DPHOMircA1BpFqJ5ApPVAv5OjEyax6WKmyQRUJkqGwy3ReNmLLBqUCMUcUzp8kYLZifwlEaMtX4FEpSgXNncRGEtoIHZylu0XjZK4GrzienvhZwpM%2F5kZYIHB9foK47jG9KtGFGF8uPWgsQ6pMYhrta73byc4%2BM3b3ZKa29fhtGmvtCUmeB5%2FDwu9C1R1XIqLC8S9sbY5O%2FwXpf4Z0u8uvsFzRTBYchupP52ESt3JDeL7NEsFC5Roj52zBQ92S7x9s2AeC6IsFmUQEqk5VLsKu2dXTOhkt7dLsNd%2BFUjody9ZJhZ5bl6ixPBS2rUI1syYhBpwxt%2Ba7q48UzaanZAe6rilL09G%2Bp2dSi7HVejtgk11rghCpefHWApa0lo95UXhez%2FRHKjT0od4ePGyil37Pg4btMggQawWIKmiIWnS2bmWV18reMtSNvKYOwOxcYVkFCfgwypWXyX13IX%2Fp9KAk5hSFI9gdElg9vLcEHOgYQalzCBfUiP%2BbuTmUSvKVsrjQLuxJmUGv30xpar%2Fry6kT%2FC2YtjMvJSy9sj%2Bof8%2BBtICOfVPBjydnxq0jquNSj0GDtniux4YizJ5LszKluaDDR84RtuUG0tsALWiNwvK5nbix1Ab%2F42zmKESY1VjUyArUI6MOvPgMIGOqUBRVHpyaO4eomO5y%2FedeQKod3RQZNpWnJ%2FYwyLiRM4E3Bm%2Fg7%2BzhlWghxALQy%2B9FbkHEU10oYI2Tg6YnMGyIJsCmx9G%2FF99u3Q5SH8vP%2FJRkrrcwIA%2FZ%2F0qU%2FHSTsDcldzniTgYXlTOHT48AR%2B5Ye1QxlPKIVG53OJjcFYhGSTxn007E1mbrWopuy1o9Y8pMdFr%2F2DrTysHsT2faUrR%2FDXmrDnI8Zf&X-Amz-Signature=ac1f84c5639af1cbd5fe13480a3cb8550228e0c9435dde5ac1e60a3e991de4ec&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U63JU23M%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFctcGhFM72VGsY4%2ByZRi%2FVSCufrKnWkxdfTxuQ65z2gAiEApH1h3YK2vl1qFwrSu6jZEkdLgbmjTOdk76u5mT44X2Iq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDF34b%2F4wsiH1DPHOMircA1BpFqJ5ApPVAv5OjEyax6WKmyQRUJkqGwy3ReNmLLBqUCMUcUzp8kYLZifwlEaMtX4FEpSgXNncRGEtoIHZylu0XjZK4GrzienvhZwpM%2F5kZYIHB9foK47jG9KtGFGF8uPWgsQ6pMYhrta73byc4%2BM3b3ZKa29fhtGmvtCUmeB5%2FDwu9C1R1XIqLC8S9sbY5O%2FwXpf4Z0u8uvsFzRTBYchupP52ESt3JDeL7NEsFC5Roj52zBQ92S7x9s2AeC6IsFmUQEqk5VLsKu2dXTOhkt7dLsNd%2BFUjody9ZJhZ5bl6ixPBS2rUI1syYhBpwxt%2Ba7q48UzaanZAe6rilL09G%2Bp2dSi7HVejtgk11rghCpefHWApa0lo95UXhez%2FRHKjT0od4ePGyil37Pg4btMggQawWIKmiIWnS2bmWV18reMtSNvKYOwOxcYVkFCfgwypWXyX13IX%2Fp9KAk5hSFI9gdElg9vLcEHOgYQalzCBfUiP%2BbuTmUSvKVsrjQLuxJmUGv30xpar%2Fry6kT%2FC2YtjMvJSy9sj%2Bof8%2BBtICOfVPBjydnxq0jquNSj0GDtniux4YizJ5LszKluaDDR84RtuUG0tsALWiNwvK5nbix1Ab%2F42zmKESY1VjUyArUI6MOvPgMIGOqUBRVHpyaO4eomO5y%2FedeQKod3RQZNpWnJ%2FYwyLiRM4E3Bm%2Fg7%2BzhlWghxALQy%2B9FbkHEU10oYI2Tg6YnMGyIJsCmx9G%2FF99u3Q5SH8vP%2FJRkrrcwIA%2FZ%2F0qU%2FHSTsDcldzniTgYXlTOHT48AR%2B5Ye1QxlPKIVG53OJjcFYhGSTxn007E1mbrWopuy1o9Y8pMdFr%2F2DrTysHsT2faUrR%2FDXmrDnI8Zf&X-Amz-Signature=791418f14883219263e18d6ffddff21223fae1937e3cde8ff8eccc086da12791&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U63JU23M%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFctcGhFM72VGsY4%2ByZRi%2FVSCufrKnWkxdfTxuQ65z2gAiEApH1h3YK2vl1qFwrSu6jZEkdLgbmjTOdk76u5mT44X2Iq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDF34b%2F4wsiH1DPHOMircA1BpFqJ5ApPVAv5OjEyax6WKmyQRUJkqGwy3ReNmLLBqUCMUcUzp8kYLZifwlEaMtX4FEpSgXNncRGEtoIHZylu0XjZK4GrzienvhZwpM%2F5kZYIHB9foK47jG9KtGFGF8uPWgsQ6pMYhrta73byc4%2BM3b3ZKa29fhtGmvtCUmeB5%2FDwu9C1R1XIqLC8S9sbY5O%2FwXpf4Z0u8uvsFzRTBYchupP52ESt3JDeL7NEsFC5Roj52zBQ92S7x9s2AeC6IsFmUQEqk5VLsKu2dXTOhkt7dLsNd%2BFUjody9ZJhZ5bl6ixPBS2rUI1syYhBpwxt%2Ba7q48UzaanZAe6rilL09G%2Bp2dSi7HVejtgk11rghCpefHWApa0lo95UXhez%2FRHKjT0od4ePGyil37Pg4btMggQawWIKmiIWnS2bmWV18reMtSNvKYOwOxcYVkFCfgwypWXyX13IX%2Fp9KAk5hSFI9gdElg9vLcEHOgYQalzCBfUiP%2BbuTmUSvKVsrjQLuxJmUGv30xpar%2Fry6kT%2FC2YtjMvJSy9sj%2Bof8%2BBtICOfVPBjydnxq0jquNSj0GDtniux4YizJ5LszKluaDDR84RtuUG0tsALWiNwvK5nbix1Ab%2F42zmKESY1VjUyArUI6MOvPgMIGOqUBRVHpyaO4eomO5y%2FedeQKod3RQZNpWnJ%2FYwyLiRM4E3Bm%2Fg7%2BzhlWghxALQy%2B9FbkHEU10oYI2Tg6YnMGyIJsCmx9G%2FF99u3Q5SH8vP%2FJRkrrcwIA%2FZ%2F0qU%2FHSTsDcldzniTgYXlTOHT48AR%2B5Ye1QxlPKIVG53OJjcFYhGSTxn007E1mbrWopuy1o9Y8pMdFr%2F2DrTysHsT2faUrR%2FDXmrDnI8Zf&X-Amz-Signature=3c3c31bc18da585b65a1ed3a4987375344799387bbc66b745ee9a1e27fe80f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
