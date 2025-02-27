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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647F5IPI2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFYf6FEnXSXXuRStGEXKMXTc9HN3qn7pFdYfKhJh3OYNAiEA6EHmfxLGeHOA%2BGNvxla5nLniEoEQNc0J%2Fu9%2FR%2BcUJysq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGt5y9tOQbLtX5z3cyrcA8uSy9JzTe80enNUfDVqb7E%2BMsYwa1U0TzQh4Qp1MQJhEhK4rDXTopXj4rGCTN2rCVZyQFZy2%2FtYClHUkA347LpQSvN8DGVpgRbAorhW8lIFTedA4CHAoZOGD%2BcmRaOiBmcf7Xr75Fu6WBNUImigXOLJ8yVFEH5QFHDmRZ8hYMfXq7GgyLTg%2FXssBi5lo0whGYEseTZr1qpTv%2BFkPUg2JHAPthJdNEdCkuuZ%2F7wuLzwZTNaJuuAptjWGUStwEEia4uESwkz4yg2%2BZz6q9hPss0Dd%2BqIFPhqIXA2Oyob4l5RIEV3ozht16sOdKJGcNg94zyQfQnWlbc8uSK%2BKM3iWtXExNAtc7PRaT3qhSqLZqfIdPQd9r2nREVUQM%2B6KE2h9eumv59ZGMCbGgZje%2BVkpFze4mBtj%2BsfSPHXr8saBRzga7EAkYSrqJdXxOzNN2LH4JMSdLK1vj0PjI53uWUIdSBbW4bbRXKMtMSZLUS3W1ehClwOnxL1cukBnT6czo0kXW8Y2FADPxTW1ghnM%2F2FzKxSscj1yPSbcc22aoByLwF85tG%2BcUD913hRRmKPRDgfVcvPEK8n38XuTxLtD0Em%2BNQvcSkkHK1cA6YiVDBTc9uAYXptSBUJwLv3%2BN4wIMPCLgL4GOqUBNkJG8iDd9t3iB9FxIJUKn%2FaC%2B5NcxKx4y2g1Y44zgQ1VLPTopbhObSxFezsm%2FF3D4f4bvnsgiE2nM6HosrT60ju6szCCelAMsNp%2FlP90juPFnl5w5uNuULTShrteiyVg0nFZkDnBnhyws3r8vG4A2aa1ARg9XZaV7FhN6MMdWh%2BMvT6HiF4OuuEtztdd0CaU44pp9P3FE8lmMPgAbSnTAChm32J2&X-Amz-Signature=6cd4feac46b4df0d3dbca8b407afefc677bd7e5d18a0cf45da1d5c3c7f403267&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647F5IPI2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFYf6FEnXSXXuRStGEXKMXTc9HN3qn7pFdYfKhJh3OYNAiEA6EHmfxLGeHOA%2BGNvxla5nLniEoEQNc0J%2Fu9%2FR%2BcUJysq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGt5y9tOQbLtX5z3cyrcA8uSy9JzTe80enNUfDVqb7E%2BMsYwa1U0TzQh4Qp1MQJhEhK4rDXTopXj4rGCTN2rCVZyQFZy2%2FtYClHUkA347LpQSvN8DGVpgRbAorhW8lIFTedA4CHAoZOGD%2BcmRaOiBmcf7Xr75Fu6WBNUImigXOLJ8yVFEH5QFHDmRZ8hYMfXq7GgyLTg%2FXssBi5lo0whGYEseTZr1qpTv%2BFkPUg2JHAPthJdNEdCkuuZ%2F7wuLzwZTNaJuuAptjWGUStwEEia4uESwkz4yg2%2BZz6q9hPss0Dd%2BqIFPhqIXA2Oyob4l5RIEV3ozht16sOdKJGcNg94zyQfQnWlbc8uSK%2BKM3iWtXExNAtc7PRaT3qhSqLZqfIdPQd9r2nREVUQM%2B6KE2h9eumv59ZGMCbGgZje%2BVkpFze4mBtj%2BsfSPHXr8saBRzga7EAkYSrqJdXxOzNN2LH4JMSdLK1vj0PjI53uWUIdSBbW4bbRXKMtMSZLUS3W1ehClwOnxL1cukBnT6czo0kXW8Y2FADPxTW1ghnM%2F2FzKxSscj1yPSbcc22aoByLwF85tG%2BcUD913hRRmKPRDgfVcvPEK8n38XuTxLtD0Em%2BNQvcSkkHK1cA6YiVDBTc9uAYXptSBUJwLv3%2BN4wIMPCLgL4GOqUBNkJG8iDd9t3iB9FxIJUKn%2FaC%2B5NcxKx4y2g1Y44zgQ1VLPTopbhObSxFezsm%2FF3D4f4bvnsgiE2nM6HosrT60ju6szCCelAMsNp%2FlP90juPFnl5w5uNuULTShrteiyVg0nFZkDnBnhyws3r8vG4A2aa1ARg9XZaV7FhN6MMdWh%2BMvT6HiF4OuuEtztdd0CaU44pp9P3FE8lmMPgAbSnTAChm32J2&X-Amz-Signature=b9d82decb8ea83d209b24b30fe4efe01739c952d8d4c943ae9c001844a522021&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647F5IPI2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFYf6FEnXSXXuRStGEXKMXTc9HN3qn7pFdYfKhJh3OYNAiEA6EHmfxLGeHOA%2BGNvxla5nLniEoEQNc0J%2Fu9%2FR%2BcUJysq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGt5y9tOQbLtX5z3cyrcA8uSy9JzTe80enNUfDVqb7E%2BMsYwa1U0TzQh4Qp1MQJhEhK4rDXTopXj4rGCTN2rCVZyQFZy2%2FtYClHUkA347LpQSvN8DGVpgRbAorhW8lIFTedA4CHAoZOGD%2BcmRaOiBmcf7Xr75Fu6WBNUImigXOLJ8yVFEH5QFHDmRZ8hYMfXq7GgyLTg%2FXssBi5lo0whGYEseTZr1qpTv%2BFkPUg2JHAPthJdNEdCkuuZ%2F7wuLzwZTNaJuuAptjWGUStwEEia4uESwkz4yg2%2BZz6q9hPss0Dd%2BqIFPhqIXA2Oyob4l5RIEV3ozht16sOdKJGcNg94zyQfQnWlbc8uSK%2BKM3iWtXExNAtc7PRaT3qhSqLZqfIdPQd9r2nREVUQM%2B6KE2h9eumv59ZGMCbGgZje%2BVkpFze4mBtj%2BsfSPHXr8saBRzga7EAkYSrqJdXxOzNN2LH4JMSdLK1vj0PjI53uWUIdSBbW4bbRXKMtMSZLUS3W1ehClwOnxL1cukBnT6czo0kXW8Y2FADPxTW1ghnM%2F2FzKxSscj1yPSbcc22aoByLwF85tG%2BcUD913hRRmKPRDgfVcvPEK8n38XuTxLtD0Em%2BNQvcSkkHK1cA6YiVDBTc9uAYXptSBUJwLv3%2BN4wIMPCLgL4GOqUBNkJG8iDd9t3iB9FxIJUKn%2FaC%2B5NcxKx4y2g1Y44zgQ1VLPTopbhObSxFezsm%2FF3D4f4bvnsgiE2nM6HosrT60ju6szCCelAMsNp%2FlP90juPFnl5w5uNuULTShrteiyVg0nFZkDnBnhyws3r8vG4A2aa1ARg9XZaV7FhN6MMdWh%2BMvT6HiF4OuuEtztdd0CaU44pp9P3FE8lmMPgAbSnTAChm32J2&X-Amz-Signature=95c25116cb038e49315163953ccd77e4f024672b2e5d658ac9243868db82e02e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647F5IPI2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFYf6FEnXSXXuRStGEXKMXTc9HN3qn7pFdYfKhJh3OYNAiEA6EHmfxLGeHOA%2BGNvxla5nLniEoEQNc0J%2Fu9%2FR%2BcUJysq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGt5y9tOQbLtX5z3cyrcA8uSy9JzTe80enNUfDVqb7E%2BMsYwa1U0TzQh4Qp1MQJhEhK4rDXTopXj4rGCTN2rCVZyQFZy2%2FtYClHUkA347LpQSvN8DGVpgRbAorhW8lIFTedA4CHAoZOGD%2BcmRaOiBmcf7Xr75Fu6WBNUImigXOLJ8yVFEH5QFHDmRZ8hYMfXq7GgyLTg%2FXssBi5lo0whGYEseTZr1qpTv%2BFkPUg2JHAPthJdNEdCkuuZ%2F7wuLzwZTNaJuuAptjWGUStwEEia4uESwkz4yg2%2BZz6q9hPss0Dd%2BqIFPhqIXA2Oyob4l5RIEV3ozht16sOdKJGcNg94zyQfQnWlbc8uSK%2BKM3iWtXExNAtc7PRaT3qhSqLZqfIdPQd9r2nREVUQM%2B6KE2h9eumv59ZGMCbGgZje%2BVkpFze4mBtj%2BsfSPHXr8saBRzga7EAkYSrqJdXxOzNN2LH4JMSdLK1vj0PjI53uWUIdSBbW4bbRXKMtMSZLUS3W1ehClwOnxL1cukBnT6czo0kXW8Y2FADPxTW1ghnM%2F2FzKxSscj1yPSbcc22aoByLwF85tG%2BcUD913hRRmKPRDgfVcvPEK8n38XuTxLtD0Em%2BNQvcSkkHK1cA6YiVDBTc9uAYXptSBUJwLv3%2BN4wIMPCLgL4GOqUBNkJG8iDd9t3iB9FxIJUKn%2FaC%2B5NcxKx4y2g1Y44zgQ1VLPTopbhObSxFezsm%2FF3D4f4bvnsgiE2nM6HosrT60ju6szCCelAMsNp%2FlP90juPFnl5w5uNuULTShrteiyVg0nFZkDnBnhyws3r8vG4A2aa1ARg9XZaV7FhN6MMdWh%2BMvT6HiF4OuuEtztdd0CaU44pp9P3FE8lmMPgAbSnTAChm32J2&X-Amz-Signature=252553e80602bca1590a71af05c52f424b29b61aa84ef27a5ae0c2a2490c4e83&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647F5IPI2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFYf6FEnXSXXuRStGEXKMXTc9HN3qn7pFdYfKhJh3OYNAiEA6EHmfxLGeHOA%2BGNvxla5nLniEoEQNc0J%2Fu9%2FR%2BcUJysq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGt5y9tOQbLtX5z3cyrcA8uSy9JzTe80enNUfDVqb7E%2BMsYwa1U0TzQh4Qp1MQJhEhK4rDXTopXj4rGCTN2rCVZyQFZy2%2FtYClHUkA347LpQSvN8DGVpgRbAorhW8lIFTedA4CHAoZOGD%2BcmRaOiBmcf7Xr75Fu6WBNUImigXOLJ8yVFEH5QFHDmRZ8hYMfXq7GgyLTg%2FXssBi5lo0whGYEseTZr1qpTv%2BFkPUg2JHAPthJdNEdCkuuZ%2F7wuLzwZTNaJuuAptjWGUStwEEia4uESwkz4yg2%2BZz6q9hPss0Dd%2BqIFPhqIXA2Oyob4l5RIEV3ozht16sOdKJGcNg94zyQfQnWlbc8uSK%2BKM3iWtXExNAtc7PRaT3qhSqLZqfIdPQd9r2nREVUQM%2B6KE2h9eumv59ZGMCbGgZje%2BVkpFze4mBtj%2BsfSPHXr8saBRzga7EAkYSrqJdXxOzNN2LH4JMSdLK1vj0PjI53uWUIdSBbW4bbRXKMtMSZLUS3W1ehClwOnxL1cukBnT6czo0kXW8Y2FADPxTW1ghnM%2F2FzKxSscj1yPSbcc22aoByLwF85tG%2BcUD913hRRmKPRDgfVcvPEK8n38XuTxLtD0Em%2BNQvcSkkHK1cA6YiVDBTc9uAYXptSBUJwLv3%2BN4wIMPCLgL4GOqUBNkJG8iDd9t3iB9FxIJUKn%2FaC%2B5NcxKx4y2g1Y44zgQ1VLPTopbhObSxFezsm%2FF3D4f4bvnsgiE2nM6HosrT60ju6szCCelAMsNp%2FlP90juPFnl5w5uNuULTShrteiyVg0nFZkDnBnhyws3r8vG4A2aa1ARg9XZaV7FhN6MMdWh%2BMvT6HiF4OuuEtztdd0CaU44pp9P3FE8lmMPgAbSnTAChm32J2&X-Amz-Signature=6b40ce81628b0eabd2e716d5993a22621ae581119518fb79b2219d5112c061dc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647F5IPI2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFYf6FEnXSXXuRStGEXKMXTc9HN3qn7pFdYfKhJh3OYNAiEA6EHmfxLGeHOA%2BGNvxla5nLniEoEQNc0J%2Fu9%2FR%2BcUJysq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGt5y9tOQbLtX5z3cyrcA8uSy9JzTe80enNUfDVqb7E%2BMsYwa1U0TzQh4Qp1MQJhEhK4rDXTopXj4rGCTN2rCVZyQFZy2%2FtYClHUkA347LpQSvN8DGVpgRbAorhW8lIFTedA4CHAoZOGD%2BcmRaOiBmcf7Xr75Fu6WBNUImigXOLJ8yVFEH5QFHDmRZ8hYMfXq7GgyLTg%2FXssBi5lo0whGYEseTZr1qpTv%2BFkPUg2JHAPthJdNEdCkuuZ%2F7wuLzwZTNaJuuAptjWGUStwEEia4uESwkz4yg2%2BZz6q9hPss0Dd%2BqIFPhqIXA2Oyob4l5RIEV3ozht16sOdKJGcNg94zyQfQnWlbc8uSK%2BKM3iWtXExNAtc7PRaT3qhSqLZqfIdPQd9r2nREVUQM%2B6KE2h9eumv59ZGMCbGgZje%2BVkpFze4mBtj%2BsfSPHXr8saBRzga7EAkYSrqJdXxOzNN2LH4JMSdLK1vj0PjI53uWUIdSBbW4bbRXKMtMSZLUS3W1ehClwOnxL1cukBnT6czo0kXW8Y2FADPxTW1ghnM%2F2FzKxSscj1yPSbcc22aoByLwF85tG%2BcUD913hRRmKPRDgfVcvPEK8n38XuTxLtD0Em%2BNQvcSkkHK1cA6YiVDBTc9uAYXptSBUJwLv3%2BN4wIMPCLgL4GOqUBNkJG8iDd9t3iB9FxIJUKn%2FaC%2B5NcxKx4y2g1Y44zgQ1VLPTopbhObSxFezsm%2FF3D4f4bvnsgiE2nM6HosrT60ju6szCCelAMsNp%2FlP90juPFnl5w5uNuULTShrteiyVg0nFZkDnBnhyws3r8vG4A2aa1ARg9XZaV7FhN6MMdWh%2BMvT6HiF4OuuEtztdd0CaU44pp9P3FE8lmMPgAbSnTAChm32J2&X-Amz-Signature=431ae08a78ff63b3a18304d281ee0728861bf9cd4a801f37e48dd41c1ef35fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647F5IPI2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFYf6FEnXSXXuRStGEXKMXTc9HN3qn7pFdYfKhJh3OYNAiEA6EHmfxLGeHOA%2BGNvxla5nLniEoEQNc0J%2Fu9%2FR%2BcUJysq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGt5y9tOQbLtX5z3cyrcA8uSy9JzTe80enNUfDVqb7E%2BMsYwa1U0TzQh4Qp1MQJhEhK4rDXTopXj4rGCTN2rCVZyQFZy2%2FtYClHUkA347LpQSvN8DGVpgRbAorhW8lIFTedA4CHAoZOGD%2BcmRaOiBmcf7Xr75Fu6WBNUImigXOLJ8yVFEH5QFHDmRZ8hYMfXq7GgyLTg%2FXssBi5lo0whGYEseTZr1qpTv%2BFkPUg2JHAPthJdNEdCkuuZ%2F7wuLzwZTNaJuuAptjWGUStwEEia4uESwkz4yg2%2BZz6q9hPss0Dd%2BqIFPhqIXA2Oyob4l5RIEV3ozht16sOdKJGcNg94zyQfQnWlbc8uSK%2BKM3iWtXExNAtc7PRaT3qhSqLZqfIdPQd9r2nREVUQM%2B6KE2h9eumv59ZGMCbGgZje%2BVkpFze4mBtj%2BsfSPHXr8saBRzga7EAkYSrqJdXxOzNN2LH4JMSdLK1vj0PjI53uWUIdSBbW4bbRXKMtMSZLUS3W1ehClwOnxL1cukBnT6czo0kXW8Y2FADPxTW1ghnM%2F2FzKxSscj1yPSbcc22aoByLwF85tG%2BcUD913hRRmKPRDgfVcvPEK8n38XuTxLtD0Em%2BNQvcSkkHK1cA6YiVDBTc9uAYXptSBUJwLv3%2BN4wIMPCLgL4GOqUBNkJG8iDd9t3iB9FxIJUKn%2FaC%2B5NcxKx4y2g1Y44zgQ1VLPTopbhObSxFezsm%2FF3D4f4bvnsgiE2nM6HosrT60ju6szCCelAMsNp%2FlP90juPFnl5w5uNuULTShrteiyVg0nFZkDnBnhyws3r8vG4A2aa1ARg9XZaV7FhN6MMdWh%2BMvT6HiF4OuuEtztdd0CaU44pp9P3FE8lmMPgAbSnTAChm32J2&X-Amz-Signature=056cb353ca418646ced80d16d2bf992fd68c39c8bac9de15a26da594fb6cedd1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
