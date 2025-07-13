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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLZL2VX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNMSEniG4k3vWcXrDLaNGn6HkmHjR6szkPxm6Qfj4zVwIgSHybOa4UnPLkkTupQgsEjrQYfcpsfvabp0%2BoxiiNWQwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMilF91SbUd66VNjjCrcA6BhkwUHo6nDDT2HXe4r%2BNVJ7X%2BMVa7NAhWJq1GuuVXaWk1J7gW7%2BgzpZ8sfDIq8AyGlRNHUqS90MXeUDc%2F4L3GBWeb0DEsZANCrHpgS5ObkkKpyfpL%2FLCkPz1LCpTZuwX9PZawtH%2BFz8sc9lFztuqXwCNoDqQkuISM1QYjjhQHJVViTkk59fSDKj3XYe08zRXkOXg0MxgFhYphIiK%2FLqqS%2FsANByOkHeSoeD6xqbPgAubce%2FqzgEp%2Bn4GdrEByFPXueO919QkejktfJL7VziTTXrmdCWRYKlV5cLTy%2FtjPsP4Xt%2BS%2BYgMPoiegYx6oWeMP4RlpMnr6XRVOsrSbnbzKgvRRGe%2Bo8XGQ4taeIzOBbA8FQAOFqTPizr8owZc4CwsXJnM2vLjphM%2Fb2t4T1oD%2BfUJtYyo0sSt3%2Fe2UAzX%2FX0fz4rPqeHRpg5LLvo0%2BHLs%2F22gfQdiK45F6rqKAmtDv4Xa%2BM7DwRQlMMoyVxd4XLqJrUBCeyDAdmy%2BBQAUdl1OZ8hBIUtKOyHwBHNQsUyEZsxNTdCVbmWZqzAzaSLOJC%2Bfh4WgN3Fbb7sTtp90XmK0hZnIECEcF08bCU9rTjsF8b8H5KQkUkFjZhD0UOsRIUbFjUEVDkDxLDW1CLMNekzcMGOqUBvcqTK%2BZ2kWEu32%2ByM421DHSV0Doja5X6z3MFgxutOGRdyp6Dr6OCin7lIHyQwHUEPsCds0NYifq1R2TICTQ2rEMQEHLMBu5FAZsyFrgooMxnAjETW%2FRicnuhCHs4okdozevO8Q9%2BqpEdXZuHwvJVFmKggYHzbz%2FNHd2%2FElHmvZnSf1QCRQADTOaAu%2F7j4BeeEmfWjLrto98VHv8aeHVYeUr7XW5%2B&X-Amz-Signature=56aa6ca5cece32417f383ec6781ee6859215b865bb0f17167d497f66c6117ff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLZL2VX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNMSEniG4k3vWcXrDLaNGn6HkmHjR6szkPxm6Qfj4zVwIgSHybOa4UnPLkkTupQgsEjrQYfcpsfvabp0%2BoxiiNWQwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMilF91SbUd66VNjjCrcA6BhkwUHo6nDDT2HXe4r%2BNVJ7X%2BMVa7NAhWJq1GuuVXaWk1J7gW7%2BgzpZ8sfDIq8AyGlRNHUqS90MXeUDc%2F4L3GBWeb0DEsZANCrHpgS5ObkkKpyfpL%2FLCkPz1LCpTZuwX9PZawtH%2BFz8sc9lFztuqXwCNoDqQkuISM1QYjjhQHJVViTkk59fSDKj3XYe08zRXkOXg0MxgFhYphIiK%2FLqqS%2FsANByOkHeSoeD6xqbPgAubce%2FqzgEp%2Bn4GdrEByFPXueO919QkejktfJL7VziTTXrmdCWRYKlV5cLTy%2FtjPsP4Xt%2BS%2BYgMPoiegYx6oWeMP4RlpMnr6XRVOsrSbnbzKgvRRGe%2Bo8XGQ4taeIzOBbA8FQAOFqTPizr8owZc4CwsXJnM2vLjphM%2Fb2t4T1oD%2BfUJtYyo0sSt3%2Fe2UAzX%2FX0fz4rPqeHRpg5LLvo0%2BHLs%2F22gfQdiK45F6rqKAmtDv4Xa%2BM7DwRQlMMoyVxd4XLqJrUBCeyDAdmy%2BBQAUdl1OZ8hBIUtKOyHwBHNQsUyEZsxNTdCVbmWZqzAzaSLOJC%2Bfh4WgN3Fbb7sTtp90XmK0hZnIECEcF08bCU9rTjsF8b8H5KQkUkFjZhD0UOsRIUbFjUEVDkDxLDW1CLMNekzcMGOqUBvcqTK%2BZ2kWEu32%2ByM421DHSV0Doja5X6z3MFgxutOGRdyp6Dr6OCin7lIHyQwHUEPsCds0NYifq1R2TICTQ2rEMQEHLMBu5FAZsyFrgooMxnAjETW%2FRicnuhCHs4okdozevO8Q9%2BqpEdXZuHwvJVFmKggYHzbz%2FNHd2%2FElHmvZnSf1QCRQADTOaAu%2F7j4BeeEmfWjLrto98VHv8aeHVYeUr7XW5%2B&X-Amz-Signature=44980d2ebaece45c8a393b6dbaf2ab6fbd1e139547ff301bcc04026caa66511b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLZL2VX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNMSEniG4k3vWcXrDLaNGn6HkmHjR6szkPxm6Qfj4zVwIgSHybOa4UnPLkkTupQgsEjrQYfcpsfvabp0%2BoxiiNWQwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMilF91SbUd66VNjjCrcA6BhkwUHo6nDDT2HXe4r%2BNVJ7X%2BMVa7NAhWJq1GuuVXaWk1J7gW7%2BgzpZ8sfDIq8AyGlRNHUqS90MXeUDc%2F4L3GBWeb0DEsZANCrHpgS5ObkkKpyfpL%2FLCkPz1LCpTZuwX9PZawtH%2BFz8sc9lFztuqXwCNoDqQkuISM1QYjjhQHJVViTkk59fSDKj3XYe08zRXkOXg0MxgFhYphIiK%2FLqqS%2FsANByOkHeSoeD6xqbPgAubce%2FqzgEp%2Bn4GdrEByFPXueO919QkejktfJL7VziTTXrmdCWRYKlV5cLTy%2FtjPsP4Xt%2BS%2BYgMPoiegYx6oWeMP4RlpMnr6XRVOsrSbnbzKgvRRGe%2Bo8XGQ4taeIzOBbA8FQAOFqTPizr8owZc4CwsXJnM2vLjphM%2Fb2t4T1oD%2BfUJtYyo0sSt3%2Fe2UAzX%2FX0fz4rPqeHRpg5LLvo0%2BHLs%2F22gfQdiK45F6rqKAmtDv4Xa%2BM7DwRQlMMoyVxd4XLqJrUBCeyDAdmy%2BBQAUdl1OZ8hBIUtKOyHwBHNQsUyEZsxNTdCVbmWZqzAzaSLOJC%2Bfh4WgN3Fbb7sTtp90XmK0hZnIECEcF08bCU9rTjsF8b8H5KQkUkFjZhD0UOsRIUbFjUEVDkDxLDW1CLMNekzcMGOqUBvcqTK%2BZ2kWEu32%2ByM421DHSV0Doja5X6z3MFgxutOGRdyp6Dr6OCin7lIHyQwHUEPsCds0NYifq1R2TICTQ2rEMQEHLMBu5FAZsyFrgooMxnAjETW%2FRicnuhCHs4okdozevO8Q9%2BqpEdXZuHwvJVFmKggYHzbz%2FNHd2%2FElHmvZnSf1QCRQADTOaAu%2F7j4BeeEmfWjLrto98VHv8aeHVYeUr7XW5%2B&X-Amz-Signature=642b0f7db142cbbb7345654a3e9358fecab145b88462a403a016e63fad056808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLZL2VX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNMSEniG4k3vWcXrDLaNGn6HkmHjR6szkPxm6Qfj4zVwIgSHybOa4UnPLkkTupQgsEjrQYfcpsfvabp0%2BoxiiNWQwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMilF91SbUd66VNjjCrcA6BhkwUHo6nDDT2HXe4r%2BNVJ7X%2BMVa7NAhWJq1GuuVXaWk1J7gW7%2BgzpZ8sfDIq8AyGlRNHUqS90MXeUDc%2F4L3GBWeb0DEsZANCrHpgS5ObkkKpyfpL%2FLCkPz1LCpTZuwX9PZawtH%2BFz8sc9lFztuqXwCNoDqQkuISM1QYjjhQHJVViTkk59fSDKj3XYe08zRXkOXg0MxgFhYphIiK%2FLqqS%2FsANByOkHeSoeD6xqbPgAubce%2FqzgEp%2Bn4GdrEByFPXueO919QkejktfJL7VziTTXrmdCWRYKlV5cLTy%2FtjPsP4Xt%2BS%2BYgMPoiegYx6oWeMP4RlpMnr6XRVOsrSbnbzKgvRRGe%2Bo8XGQ4taeIzOBbA8FQAOFqTPizr8owZc4CwsXJnM2vLjphM%2Fb2t4T1oD%2BfUJtYyo0sSt3%2Fe2UAzX%2FX0fz4rPqeHRpg5LLvo0%2BHLs%2F22gfQdiK45F6rqKAmtDv4Xa%2BM7DwRQlMMoyVxd4XLqJrUBCeyDAdmy%2BBQAUdl1OZ8hBIUtKOyHwBHNQsUyEZsxNTdCVbmWZqzAzaSLOJC%2Bfh4WgN3Fbb7sTtp90XmK0hZnIECEcF08bCU9rTjsF8b8H5KQkUkFjZhD0UOsRIUbFjUEVDkDxLDW1CLMNekzcMGOqUBvcqTK%2BZ2kWEu32%2ByM421DHSV0Doja5X6z3MFgxutOGRdyp6Dr6OCin7lIHyQwHUEPsCds0NYifq1R2TICTQ2rEMQEHLMBu5FAZsyFrgooMxnAjETW%2FRicnuhCHs4okdozevO8Q9%2BqpEdXZuHwvJVFmKggYHzbz%2FNHd2%2FElHmvZnSf1QCRQADTOaAu%2F7j4BeeEmfWjLrto98VHv8aeHVYeUr7XW5%2B&X-Amz-Signature=450a92ccf6f22fcd8cbc35acef52891de41c45390c83c68b4afa65f74edf3e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLZL2VX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNMSEniG4k3vWcXrDLaNGn6HkmHjR6szkPxm6Qfj4zVwIgSHybOa4UnPLkkTupQgsEjrQYfcpsfvabp0%2BoxiiNWQwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMilF91SbUd66VNjjCrcA6BhkwUHo6nDDT2HXe4r%2BNVJ7X%2BMVa7NAhWJq1GuuVXaWk1J7gW7%2BgzpZ8sfDIq8AyGlRNHUqS90MXeUDc%2F4L3GBWeb0DEsZANCrHpgS5ObkkKpyfpL%2FLCkPz1LCpTZuwX9PZawtH%2BFz8sc9lFztuqXwCNoDqQkuISM1QYjjhQHJVViTkk59fSDKj3XYe08zRXkOXg0MxgFhYphIiK%2FLqqS%2FsANByOkHeSoeD6xqbPgAubce%2FqzgEp%2Bn4GdrEByFPXueO919QkejktfJL7VziTTXrmdCWRYKlV5cLTy%2FtjPsP4Xt%2BS%2BYgMPoiegYx6oWeMP4RlpMnr6XRVOsrSbnbzKgvRRGe%2Bo8XGQ4taeIzOBbA8FQAOFqTPizr8owZc4CwsXJnM2vLjphM%2Fb2t4T1oD%2BfUJtYyo0sSt3%2Fe2UAzX%2FX0fz4rPqeHRpg5LLvo0%2BHLs%2F22gfQdiK45F6rqKAmtDv4Xa%2BM7DwRQlMMoyVxd4XLqJrUBCeyDAdmy%2BBQAUdl1OZ8hBIUtKOyHwBHNQsUyEZsxNTdCVbmWZqzAzaSLOJC%2Bfh4WgN3Fbb7sTtp90XmK0hZnIECEcF08bCU9rTjsF8b8H5KQkUkFjZhD0UOsRIUbFjUEVDkDxLDW1CLMNekzcMGOqUBvcqTK%2BZ2kWEu32%2ByM421DHSV0Doja5X6z3MFgxutOGRdyp6Dr6OCin7lIHyQwHUEPsCds0NYifq1R2TICTQ2rEMQEHLMBu5FAZsyFrgooMxnAjETW%2FRicnuhCHs4okdozevO8Q9%2BqpEdXZuHwvJVFmKggYHzbz%2FNHd2%2FElHmvZnSf1QCRQADTOaAu%2F7j4BeeEmfWjLrto98VHv8aeHVYeUr7XW5%2B&X-Amz-Signature=9d3ca47387364087e4c2f70091492badb9075c9849fbb263133cd94d81512350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLZL2VX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNMSEniG4k3vWcXrDLaNGn6HkmHjR6szkPxm6Qfj4zVwIgSHybOa4UnPLkkTupQgsEjrQYfcpsfvabp0%2BoxiiNWQwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMilF91SbUd66VNjjCrcA6BhkwUHo6nDDT2HXe4r%2BNVJ7X%2BMVa7NAhWJq1GuuVXaWk1J7gW7%2BgzpZ8sfDIq8AyGlRNHUqS90MXeUDc%2F4L3GBWeb0DEsZANCrHpgS5ObkkKpyfpL%2FLCkPz1LCpTZuwX9PZawtH%2BFz8sc9lFztuqXwCNoDqQkuISM1QYjjhQHJVViTkk59fSDKj3XYe08zRXkOXg0MxgFhYphIiK%2FLqqS%2FsANByOkHeSoeD6xqbPgAubce%2FqzgEp%2Bn4GdrEByFPXueO919QkejktfJL7VziTTXrmdCWRYKlV5cLTy%2FtjPsP4Xt%2BS%2BYgMPoiegYx6oWeMP4RlpMnr6XRVOsrSbnbzKgvRRGe%2Bo8XGQ4taeIzOBbA8FQAOFqTPizr8owZc4CwsXJnM2vLjphM%2Fb2t4T1oD%2BfUJtYyo0sSt3%2Fe2UAzX%2FX0fz4rPqeHRpg5LLvo0%2BHLs%2F22gfQdiK45F6rqKAmtDv4Xa%2BM7DwRQlMMoyVxd4XLqJrUBCeyDAdmy%2BBQAUdl1OZ8hBIUtKOyHwBHNQsUyEZsxNTdCVbmWZqzAzaSLOJC%2Bfh4WgN3Fbb7sTtp90XmK0hZnIECEcF08bCU9rTjsF8b8H5KQkUkFjZhD0UOsRIUbFjUEVDkDxLDW1CLMNekzcMGOqUBvcqTK%2BZ2kWEu32%2ByM421DHSV0Doja5X6z3MFgxutOGRdyp6Dr6OCin7lIHyQwHUEPsCds0NYifq1R2TICTQ2rEMQEHLMBu5FAZsyFrgooMxnAjETW%2FRicnuhCHs4okdozevO8Q9%2BqpEdXZuHwvJVFmKggYHzbz%2FNHd2%2FElHmvZnSf1QCRQADTOaAu%2F7j4BeeEmfWjLrto98VHv8aeHVYeUr7XW5%2B&X-Amz-Signature=3a9bc7c1a10a41cff5052a720388631800862b02f0aa61e722b416f9dc3365e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLZL2VX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNMSEniG4k3vWcXrDLaNGn6HkmHjR6szkPxm6Qfj4zVwIgSHybOa4UnPLkkTupQgsEjrQYfcpsfvabp0%2BoxiiNWQwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMilF91SbUd66VNjjCrcA6BhkwUHo6nDDT2HXe4r%2BNVJ7X%2BMVa7NAhWJq1GuuVXaWk1J7gW7%2BgzpZ8sfDIq8AyGlRNHUqS90MXeUDc%2F4L3GBWeb0DEsZANCrHpgS5ObkkKpyfpL%2FLCkPz1LCpTZuwX9PZawtH%2BFz8sc9lFztuqXwCNoDqQkuISM1QYjjhQHJVViTkk59fSDKj3XYe08zRXkOXg0MxgFhYphIiK%2FLqqS%2FsANByOkHeSoeD6xqbPgAubce%2FqzgEp%2Bn4GdrEByFPXueO919QkejktfJL7VziTTXrmdCWRYKlV5cLTy%2FtjPsP4Xt%2BS%2BYgMPoiegYx6oWeMP4RlpMnr6XRVOsrSbnbzKgvRRGe%2Bo8XGQ4taeIzOBbA8FQAOFqTPizr8owZc4CwsXJnM2vLjphM%2Fb2t4T1oD%2BfUJtYyo0sSt3%2Fe2UAzX%2FX0fz4rPqeHRpg5LLvo0%2BHLs%2F22gfQdiK45F6rqKAmtDv4Xa%2BM7DwRQlMMoyVxd4XLqJrUBCeyDAdmy%2BBQAUdl1OZ8hBIUtKOyHwBHNQsUyEZsxNTdCVbmWZqzAzaSLOJC%2Bfh4WgN3Fbb7sTtp90XmK0hZnIECEcF08bCU9rTjsF8b8H5KQkUkFjZhD0UOsRIUbFjUEVDkDxLDW1CLMNekzcMGOqUBvcqTK%2BZ2kWEu32%2ByM421DHSV0Doja5X6z3MFgxutOGRdyp6Dr6OCin7lIHyQwHUEPsCds0NYifq1R2TICTQ2rEMQEHLMBu5FAZsyFrgooMxnAjETW%2FRicnuhCHs4okdozevO8Q9%2BqpEdXZuHwvJVFmKggYHzbz%2FNHd2%2FElHmvZnSf1QCRQADTOaAu%2F7j4BeeEmfWjLrto98VHv8aeHVYeUr7XW5%2B&X-Amz-Signature=5cff283ec900eeb751f620cd67ead03862bd850c944c1c46b08503dba3307024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
