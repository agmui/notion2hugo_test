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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNPK7PT%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCy5xwnlOcWlOueuZlacFTGmEhsTfauEYUZKOJRM3sSWwIhAICcCcd4b5cKk2NbH9p%2FSyqz0R2VBo1uGsBQMPAaJxtJKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIPCR8I3IwczSpitYq3AOcT6sQDbZtWPKmXE4iUaCrCSUazkvi3nnoPZX5KOT6CyoJY7zr1FMCf2MwHg3e8xHTGtem4WT%2FPuyDpm2qDKvICWG%2F9WrTS%2BxD7Xe44Q5M%2FkeIYFpBRKpr2PQuQdgkD0A0CWrTnayX3mjE%2F%2FosZXmLeowh4nzscGdZu114SmdOizeMslpsnR21fCsj2czOndlkMyR48yDTvv1DuIvWMzmDAn5lAjGfaAbtH%2BeVSKVhQXytzN2kB%2FpNYTm3tiaWJSbNRpkYEwLRZSccCY2OxypvTFA5UOw86Zv1Io23JVRy3BZJgSYCfSgEbccX9ghR3ufwj1ZzfwJm4s6gQ3lVL5%2BLzOCpOfGYnHhX7wLK3BspPSemvwnrgPWdzOKIoKBxvcU3D9j2DOOsXbsPAT0c1BzozOYUpAsynfCCFPVCNdI9H59L9ZBIvn7NdHBXsLslEJoBvIg%2BSCtmDCNCDd5FqSIVTPqnNXzND27uWqQqybDIvQFjRHa%2BOHR%2F7rBT53rRDsUJ785CcKo8CzPmAUfmKe6xEo%2F9TOSQ%2BON4sy4lpU2FaZ8Qb9x5FQ7BGBRDjV%2FfV821OlbmBmcXHiq47HQLKUPbxjnppPW9avqj%2BwFdnJmFfM7d0q7OBPAHuUrTfzDi1a3JBjqkAVHpFCztwPJj472H6LsVYRPm3kda3kgBboDfFdFP3QUdWOmI%2BM%2FIkCu7NK%2FM0DFkdcgIC8DK1uDKrXmsF3HGw56ctxZarjyUxz8l%2BeQ9OKUb2UzwGgP7adkhMhaATuwSMLqQrskipWuh7rb%2FApFW1FXgzTeIKZ7qHQBLlW3MGEJCRzL562DRzMzna4rLKVVRa78MlpfBnHnrY7gHqnCTki04BdEa&X-Amz-Signature=2a7071f79fdc9d86015e61c7796d644ab54f02b2e78de5ac1050e9667589ecbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNPK7PT%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCy5xwnlOcWlOueuZlacFTGmEhsTfauEYUZKOJRM3sSWwIhAICcCcd4b5cKk2NbH9p%2FSyqz0R2VBo1uGsBQMPAaJxtJKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIPCR8I3IwczSpitYq3AOcT6sQDbZtWPKmXE4iUaCrCSUazkvi3nnoPZX5KOT6CyoJY7zr1FMCf2MwHg3e8xHTGtem4WT%2FPuyDpm2qDKvICWG%2F9WrTS%2BxD7Xe44Q5M%2FkeIYFpBRKpr2PQuQdgkD0A0CWrTnayX3mjE%2F%2FosZXmLeowh4nzscGdZu114SmdOizeMslpsnR21fCsj2czOndlkMyR48yDTvv1DuIvWMzmDAn5lAjGfaAbtH%2BeVSKVhQXytzN2kB%2FpNYTm3tiaWJSbNRpkYEwLRZSccCY2OxypvTFA5UOw86Zv1Io23JVRy3BZJgSYCfSgEbccX9ghR3ufwj1ZzfwJm4s6gQ3lVL5%2BLzOCpOfGYnHhX7wLK3BspPSemvwnrgPWdzOKIoKBxvcU3D9j2DOOsXbsPAT0c1BzozOYUpAsynfCCFPVCNdI9H59L9ZBIvn7NdHBXsLslEJoBvIg%2BSCtmDCNCDd5FqSIVTPqnNXzND27uWqQqybDIvQFjRHa%2BOHR%2F7rBT53rRDsUJ785CcKo8CzPmAUfmKe6xEo%2F9TOSQ%2BON4sy4lpU2FaZ8Qb9x5FQ7BGBRDjV%2FfV821OlbmBmcXHiq47HQLKUPbxjnppPW9avqj%2BwFdnJmFfM7d0q7OBPAHuUrTfzDi1a3JBjqkAVHpFCztwPJj472H6LsVYRPm3kda3kgBboDfFdFP3QUdWOmI%2BM%2FIkCu7NK%2FM0DFkdcgIC8DK1uDKrXmsF3HGw56ctxZarjyUxz8l%2BeQ9OKUb2UzwGgP7adkhMhaATuwSMLqQrskipWuh7rb%2FApFW1FXgzTeIKZ7qHQBLlW3MGEJCRzL562DRzMzna4rLKVVRa78MlpfBnHnrY7gHqnCTki04BdEa&X-Amz-Signature=53a5ad8a531644e20d3c3c3c423562985c167c497b8ea564485df5e98ae46575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNPK7PT%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCy5xwnlOcWlOueuZlacFTGmEhsTfauEYUZKOJRM3sSWwIhAICcCcd4b5cKk2NbH9p%2FSyqz0R2VBo1uGsBQMPAaJxtJKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIPCR8I3IwczSpitYq3AOcT6sQDbZtWPKmXE4iUaCrCSUazkvi3nnoPZX5KOT6CyoJY7zr1FMCf2MwHg3e8xHTGtem4WT%2FPuyDpm2qDKvICWG%2F9WrTS%2BxD7Xe44Q5M%2FkeIYFpBRKpr2PQuQdgkD0A0CWrTnayX3mjE%2F%2FosZXmLeowh4nzscGdZu114SmdOizeMslpsnR21fCsj2czOndlkMyR48yDTvv1DuIvWMzmDAn5lAjGfaAbtH%2BeVSKVhQXytzN2kB%2FpNYTm3tiaWJSbNRpkYEwLRZSccCY2OxypvTFA5UOw86Zv1Io23JVRy3BZJgSYCfSgEbccX9ghR3ufwj1ZzfwJm4s6gQ3lVL5%2BLzOCpOfGYnHhX7wLK3BspPSemvwnrgPWdzOKIoKBxvcU3D9j2DOOsXbsPAT0c1BzozOYUpAsynfCCFPVCNdI9H59L9ZBIvn7NdHBXsLslEJoBvIg%2BSCtmDCNCDd5FqSIVTPqnNXzND27uWqQqybDIvQFjRHa%2BOHR%2F7rBT53rRDsUJ785CcKo8CzPmAUfmKe6xEo%2F9TOSQ%2BON4sy4lpU2FaZ8Qb9x5FQ7BGBRDjV%2FfV821OlbmBmcXHiq47HQLKUPbxjnppPW9avqj%2BwFdnJmFfM7d0q7OBPAHuUrTfzDi1a3JBjqkAVHpFCztwPJj472H6LsVYRPm3kda3kgBboDfFdFP3QUdWOmI%2BM%2FIkCu7NK%2FM0DFkdcgIC8DK1uDKrXmsF3HGw56ctxZarjyUxz8l%2BeQ9OKUb2UzwGgP7adkhMhaATuwSMLqQrskipWuh7rb%2FApFW1FXgzTeIKZ7qHQBLlW3MGEJCRzL562DRzMzna4rLKVVRa78MlpfBnHnrY7gHqnCTki04BdEa&X-Amz-Signature=dabb2537e97a38e6201aba71e3cccbaebd17415b284450893b7420a780d4a613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNPK7PT%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCy5xwnlOcWlOueuZlacFTGmEhsTfauEYUZKOJRM3sSWwIhAICcCcd4b5cKk2NbH9p%2FSyqz0R2VBo1uGsBQMPAaJxtJKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIPCR8I3IwczSpitYq3AOcT6sQDbZtWPKmXE4iUaCrCSUazkvi3nnoPZX5KOT6CyoJY7zr1FMCf2MwHg3e8xHTGtem4WT%2FPuyDpm2qDKvICWG%2F9WrTS%2BxD7Xe44Q5M%2FkeIYFpBRKpr2PQuQdgkD0A0CWrTnayX3mjE%2F%2FosZXmLeowh4nzscGdZu114SmdOizeMslpsnR21fCsj2czOndlkMyR48yDTvv1DuIvWMzmDAn5lAjGfaAbtH%2BeVSKVhQXytzN2kB%2FpNYTm3tiaWJSbNRpkYEwLRZSccCY2OxypvTFA5UOw86Zv1Io23JVRy3BZJgSYCfSgEbccX9ghR3ufwj1ZzfwJm4s6gQ3lVL5%2BLzOCpOfGYnHhX7wLK3BspPSemvwnrgPWdzOKIoKBxvcU3D9j2DOOsXbsPAT0c1BzozOYUpAsynfCCFPVCNdI9H59L9ZBIvn7NdHBXsLslEJoBvIg%2BSCtmDCNCDd5FqSIVTPqnNXzND27uWqQqybDIvQFjRHa%2BOHR%2F7rBT53rRDsUJ785CcKo8CzPmAUfmKe6xEo%2F9TOSQ%2BON4sy4lpU2FaZ8Qb9x5FQ7BGBRDjV%2FfV821OlbmBmcXHiq47HQLKUPbxjnppPW9avqj%2BwFdnJmFfM7d0q7OBPAHuUrTfzDi1a3JBjqkAVHpFCztwPJj472H6LsVYRPm3kda3kgBboDfFdFP3QUdWOmI%2BM%2FIkCu7NK%2FM0DFkdcgIC8DK1uDKrXmsF3HGw56ctxZarjyUxz8l%2BeQ9OKUb2UzwGgP7adkhMhaATuwSMLqQrskipWuh7rb%2FApFW1FXgzTeIKZ7qHQBLlW3MGEJCRzL562DRzMzna4rLKVVRa78MlpfBnHnrY7gHqnCTki04BdEa&X-Amz-Signature=4afa7ce933ef90a54e05fba8deb69881e7ea41b666059b0fdd6a7152aaf93ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNPK7PT%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCy5xwnlOcWlOueuZlacFTGmEhsTfauEYUZKOJRM3sSWwIhAICcCcd4b5cKk2NbH9p%2FSyqz0R2VBo1uGsBQMPAaJxtJKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIPCR8I3IwczSpitYq3AOcT6sQDbZtWPKmXE4iUaCrCSUazkvi3nnoPZX5KOT6CyoJY7zr1FMCf2MwHg3e8xHTGtem4WT%2FPuyDpm2qDKvICWG%2F9WrTS%2BxD7Xe44Q5M%2FkeIYFpBRKpr2PQuQdgkD0A0CWrTnayX3mjE%2F%2FosZXmLeowh4nzscGdZu114SmdOizeMslpsnR21fCsj2czOndlkMyR48yDTvv1DuIvWMzmDAn5lAjGfaAbtH%2BeVSKVhQXytzN2kB%2FpNYTm3tiaWJSbNRpkYEwLRZSccCY2OxypvTFA5UOw86Zv1Io23JVRy3BZJgSYCfSgEbccX9ghR3ufwj1ZzfwJm4s6gQ3lVL5%2BLzOCpOfGYnHhX7wLK3BspPSemvwnrgPWdzOKIoKBxvcU3D9j2DOOsXbsPAT0c1BzozOYUpAsynfCCFPVCNdI9H59L9ZBIvn7NdHBXsLslEJoBvIg%2BSCtmDCNCDd5FqSIVTPqnNXzND27uWqQqybDIvQFjRHa%2BOHR%2F7rBT53rRDsUJ785CcKo8CzPmAUfmKe6xEo%2F9TOSQ%2BON4sy4lpU2FaZ8Qb9x5FQ7BGBRDjV%2FfV821OlbmBmcXHiq47HQLKUPbxjnppPW9avqj%2BwFdnJmFfM7d0q7OBPAHuUrTfzDi1a3JBjqkAVHpFCztwPJj472H6LsVYRPm3kda3kgBboDfFdFP3QUdWOmI%2BM%2FIkCu7NK%2FM0DFkdcgIC8DK1uDKrXmsF3HGw56ctxZarjyUxz8l%2BeQ9OKUb2UzwGgP7adkhMhaATuwSMLqQrskipWuh7rb%2FApFW1FXgzTeIKZ7qHQBLlW3MGEJCRzL562DRzMzna4rLKVVRa78MlpfBnHnrY7gHqnCTki04BdEa&X-Amz-Signature=87337a323427b34ede65c5513454201ea49d73950ef7107c73407426b1d18e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNPK7PT%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCy5xwnlOcWlOueuZlacFTGmEhsTfauEYUZKOJRM3sSWwIhAICcCcd4b5cKk2NbH9p%2FSyqz0R2VBo1uGsBQMPAaJxtJKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIPCR8I3IwczSpitYq3AOcT6sQDbZtWPKmXE4iUaCrCSUazkvi3nnoPZX5KOT6CyoJY7zr1FMCf2MwHg3e8xHTGtem4WT%2FPuyDpm2qDKvICWG%2F9WrTS%2BxD7Xe44Q5M%2FkeIYFpBRKpr2PQuQdgkD0A0CWrTnayX3mjE%2F%2FosZXmLeowh4nzscGdZu114SmdOizeMslpsnR21fCsj2czOndlkMyR48yDTvv1DuIvWMzmDAn5lAjGfaAbtH%2BeVSKVhQXytzN2kB%2FpNYTm3tiaWJSbNRpkYEwLRZSccCY2OxypvTFA5UOw86Zv1Io23JVRy3BZJgSYCfSgEbccX9ghR3ufwj1ZzfwJm4s6gQ3lVL5%2BLzOCpOfGYnHhX7wLK3BspPSemvwnrgPWdzOKIoKBxvcU3D9j2DOOsXbsPAT0c1BzozOYUpAsynfCCFPVCNdI9H59L9ZBIvn7NdHBXsLslEJoBvIg%2BSCtmDCNCDd5FqSIVTPqnNXzND27uWqQqybDIvQFjRHa%2BOHR%2F7rBT53rRDsUJ785CcKo8CzPmAUfmKe6xEo%2F9TOSQ%2BON4sy4lpU2FaZ8Qb9x5FQ7BGBRDjV%2FfV821OlbmBmcXHiq47HQLKUPbxjnppPW9avqj%2BwFdnJmFfM7d0q7OBPAHuUrTfzDi1a3JBjqkAVHpFCztwPJj472H6LsVYRPm3kda3kgBboDfFdFP3QUdWOmI%2BM%2FIkCu7NK%2FM0DFkdcgIC8DK1uDKrXmsF3HGw56ctxZarjyUxz8l%2BeQ9OKUb2UzwGgP7adkhMhaATuwSMLqQrskipWuh7rb%2FApFW1FXgzTeIKZ7qHQBLlW3MGEJCRzL562DRzMzna4rLKVVRa78MlpfBnHnrY7gHqnCTki04BdEa&X-Amz-Signature=769d9d8279cfd764d9d6d06f3a4c9e2d0e4b5542cfe06c10c1877c6ffbb0420e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNPK7PT%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCy5xwnlOcWlOueuZlacFTGmEhsTfauEYUZKOJRM3sSWwIhAICcCcd4b5cKk2NbH9p%2FSyqz0R2VBo1uGsBQMPAaJxtJKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIPCR8I3IwczSpitYq3AOcT6sQDbZtWPKmXE4iUaCrCSUazkvi3nnoPZX5KOT6CyoJY7zr1FMCf2MwHg3e8xHTGtem4WT%2FPuyDpm2qDKvICWG%2F9WrTS%2BxD7Xe44Q5M%2FkeIYFpBRKpr2PQuQdgkD0A0CWrTnayX3mjE%2F%2FosZXmLeowh4nzscGdZu114SmdOizeMslpsnR21fCsj2czOndlkMyR48yDTvv1DuIvWMzmDAn5lAjGfaAbtH%2BeVSKVhQXytzN2kB%2FpNYTm3tiaWJSbNRpkYEwLRZSccCY2OxypvTFA5UOw86Zv1Io23JVRy3BZJgSYCfSgEbccX9ghR3ufwj1ZzfwJm4s6gQ3lVL5%2BLzOCpOfGYnHhX7wLK3BspPSemvwnrgPWdzOKIoKBxvcU3D9j2DOOsXbsPAT0c1BzozOYUpAsynfCCFPVCNdI9H59L9ZBIvn7NdHBXsLslEJoBvIg%2BSCtmDCNCDd5FqSIVTPqnNXzND27uWqQqybDIvQFjRHa%2BOHR%2F7rBT53rRDsUJ785CcKo8CzPmAUfmKe6xEo%2F9TOSQ%2BON4sy4lpU2FaZ8Qb9x5FQ7BGBRDjV%2FfV821OlbmBmcXHiq47HQLKUPbxjnppPW9avqj%2BwFdnJmFfM7d0q7OBPAHuUrTfzDi1a3JBjqkAVHpFCztwPJj472H6LsVYRPm3kda3kgBboDfFdFP3QUdWOmI%2BM%2FIkCu7NK%2FM0DFkdcgIC8DK1uDKrXmsF3HGw56ctxZarjyUxz8l%2BeQ9OKUb2UzwGgP7adkhMhaATuwSMLqQrskipWuh7rb%2FApFW1FXgzTeIKZ7qHQBLlW3MGEJCRzL562DRzMzna4rLKVVRa78MlpfBnHnrY7gHqnCTki04BdEa&X-Amz-Signature=60659f2ef4af2fc4cdbb2bb836d1b1e40e63241eaf23a3a3db6b7365ac4219e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
