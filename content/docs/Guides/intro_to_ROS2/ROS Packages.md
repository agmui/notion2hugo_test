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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TMES47P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEnYeViVlLNLS%2BHhN2%2FJnOob2pzBnAFRcnNAyVbOtSinAiEApZ10E02ggiKTpJDfsvxRuky52dNJO07Hr7%2FUw6Nf5E0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDP%2BnAWRIjB4R6kqMjCrcA9jMSrHNe1ZcjfXSE9ctEE26yZrCnRxcWo%2B3SUZTOmdwFU0GtVWmdsKEucEdwsM6g9prbIGF9AZtL0yYOeYJJNTdW%2BssrcQn2nJ11gJ%2BrNd54S06OLDmvr3V6qrIaF5gJJYIMGvEmjyJMfqsVHctD2RPUXtbo%2FZC3t4xjzYQwp0TUKxvc9IUL99oUZq7nPuOhkEpXh%2BBY7qdgv%2FtYzijXfB1z%2FPANTfArkjxyObZjgJ4r58bzoz823YiDBSCIplUZezVGzqor%2BnuogVMmcmfTQKsgq86KWWRNDqo68%2FYQKIkpCUv2fNpQVaWQpLVfnlK8dupzSoxTvGVPyy98GeONg14gizSQ4jmv2DOHJ3H07MQuo9wGzuIXpWHdUPMeFYjyBUiwIC9pOK0WuSPS%2BkDTanKQYKRmzZkH3%2BsoqOrknAfLlNK3z%2FXArRj1p7JtD%2BnU8R2O4LToJNdd2TNGdvJJA%2BICRhZGVWUKqHEVsraJM4rYyafNqVREPOfeTQDvUkj58OX%2B%2FEYA9%2FFxs2DqtOyrCWMur85lst3TOOlFX9NB5300QC9vOhmaGyzA3aJFaMm0q%2BZ2dXp8GE0i8deLFNi3tjzgMkuy3ejZy62a1iLeRj%2FqMWlJ%2F%2FEyeHYaJMTMNKdgsUGOqUB8LmxK%2FuExwj8XH1mBdyeNbKDreifweVMFL7nKEq7laRWQnzKPWaRdvuF2N3lEiE2XjLTQdmpk6TCleFjnvqUlpGx%2BbekCDqiV3vrU4poiJ5kf%2BfgJfECRMR7vRLz36KTiPD2Fh0KoQuj7UmxuWlZM%2FJKZJiEDzyOmkBdvUhAFurs3DvKgT%2F1F9GANUAT7Ie9ML76oxDRl1ebR2lJ5fRQnjt56OeB&X-Amz-Signature=299bf3e16e95c3a7843004699960211d5dcebedb9f399a178e74f380ba48aa86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TMES47P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEnYeViVlLNLS%2BHhN2%2FJnOob2pzBnAFRcnNAyVbOtSinAiEApZ10E02ggiKTpJDfsvxRuky52dNJO07Hr7%2FUw6Nf5E0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDP%2BnAWRIjB4R6kqMjCrcA9jMSrHNe1ZcjfXSE9ctEE26yZrCnRxcWo%2B3SUZTOmdwFU0GtVWmdsKEucEdwsM6g9prbIGF9AZtL0yYOeYJJNTdW%2BssrcQn2nJ11gJ%2BrNd54S06OLDmvr3V6qrIaF5gJJYIMGvEmjyJMfqsVHctD2RPUXtbo%2FZC3t4xjzYQwp0TUKxvc9IUL99oUZq7nPuOhkEpXh%2BBY7qdgv%2FtYzijXfB1z%2FPANTfArkjxyObZjgJ4r58bzoz823YiDBSCIplUZezVGzqor%2BnuogVMmcmfTQKsgq86KWWRNDqo68%2FYQKIkpCUv2fNpQVaWQpLVfnlK8dupzSoxTvGVPyy98GeONg14gizSQ4jmv2DOHJ3H07MQuo9wGzuIXpWHdUPMeFYjyBUiwIC9pOK0WuSPS%2BkDTanKQYKRmzZkH3%2BsoqOrknAfLlNK3z%2FXArRj1p7JtD%2BnU8R2O4LToJNdd2TNGdvJJA%2BICRhZGVWUKqHEVsraJM4rYyafNqVREPOfeTQDvUkj58OX%2B%2FEYA9%2FFxs2DqtOyrCWMur85lst3TOOlFX9NB5300QC9vOhmaGyzA3aJFaMm0q%2BZ2dXp8GE0i8deLFNi3tjzgMkuy3ejZy62a1iLeRj%2FqMWlJ%2F%2FEyeHYaJMTMNKdgsUGOqUB8LmxK%2FuExwj8XH1mBdyeNbKDreifweVMFL7nKEq7laRWQnzKPWaRdvuF2N3lEiE2XjLTQdmpk6TCleFjnvqUlpGx%2BbekCDqiV3vrU4poiJ5kf%2BfgJfECRMR7vRLz36KTiPD2Fh0KoQuj7UmxuWlZM%2FJKZJiEDzyOmkBdvUhAFurs3DvKgT%2F1F9GANUAT7Ie9ML76oxDRl1ebR2lJ5fRQnjt56OeB&X-Amz-Signature=7afe2bb67721579555700132740f4f1a13b347746f5e928b593e8e6fcba5157c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TMES47P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEnYeViVlLNLS%2BHhN2%2FJnOob2pzBnAFRcnNAyVbOtSinAiEApZ10E02ggiKTpJDfsvxRuky52dNJO07Hr7%2FUw6Nf5E0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDP%2BnAWRIjB4R6kqMjCrcA9jMSrHNe1ZcjfXSE9ctEE26yZrCnRxcWo%2B3SUZTOmdwFU0GtVWmdsKEucEdwsM6g9prbIGF9AZtL0yYOeYJJNTdW%2BssrcQn2nJ11gJ%2BrNd54S06OLDmvr3V6qrIaF5gJJYIMGvEmjyJMfqsVHctD2RPUXtbo%2FZC3t4xjzYQwp0TUKxvc9IUL99oUZq7nPuOhkEpXh%2BBY7qdgv%2FtYzijXfB1z%2FPANTfArkjxyObZjgJ4r58bzoz823YiDBSCIplUZezVGzqor%2BnuogVMmcmfTQKsgq86KWWRNDqo68%2FYQKIkpCUv2fNpQVaWQpLVfnlK8dupzSoxTvGVPyy98GeONg14gizSQ4jmv2DOHJ3H07MQuo9wGzuIXpWHdUPMeFYjyBUiwIC9pOK0WuSPS%2BkDTanKQYKRmzZkH3%2BsoqOrknAfLlNK3z%2FXArRj1p7JtD%2BnU8R2O4LToJNdd2TNGdvJJA%2BICRhZGVWUKqHEVsraJM4rYyafNqVREPOfeTQDvUkj58OX%2B%2FEYA9%2FFxs2DqtOyrCWMur85lst3TOOlFX9NB5300QC9vOhmaGyzA3aJFaMm0q%2BZ2dXp8GE0i8deLFNi3tjzgMkuy3ejZy62a1iLeRj%2FqMWlJ%2F%2FEyeHYaJMTMNKdgsUGOqUB8LmxK%2FuExwj8XH1mBdyeNbKDreifweVMFL7nKEq7laRWQnzKPWaRdvuF2N3lEiE2XjLTQdmpk6TCleFjnvqUlpGx%2BbekCDqiV3vrU4poiJ5kf%2BfgJfECRMR7vRLz36KTiPD2Fh0KoQuj7UmxuWlZM%2FJKZJiEDzyOmkBdvUhAFurs3DvKgT%2F1F9GANUAT7Ie9ML76oxDRl1ebR2lJ5fRQnjt56OeB&X-Amz-Signature=2b4628b87ff6db84cb7b10f489cae4ab3c6bdc33e35ded8ff5b5f8dbc6656bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TMES47P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEnYeViVlLNLS%2BHhN2%2FJnOob2pzBnAFRcnNAyVbOtSinAiEApZ10E02ggiKTpJDfsvxRuky52dNJO07Hr7%2FUw6Nf5E0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDP%2BnAWRIjB4R6kqMjCrcA9jMSrHNe1ZcjfXSE9ctEE26yZrCnRxcWo%2B3SUZTOmdwFU0GtVWmdsKEucEdwsM6g9prbIGF9AZtL0yYOeYJJNTdW%2BssrcQn2nJ11gJ%2BrNd54S06OLDmvr3V6qrIaF5gJJYIMGvEmjyJMfqsVHctD2RPUXtbo%2FZC3t4xjzYQwp0TUKxvc9IUL99oUZq7nPuOhkEpXh%2BBY7qdgv%2FtYzijXfB1z%2FPANTfArkjxyObZjgJ4r58bzoz823YiDBSCIplUZezVGzqor%2BnuogVMmcmfTQKsgq86KWWRNDqo68%2FYQKIkpCUv2fNpQVaWQpLVfnlK8dupzSoxTvGVPyy98GeONg14gizSQ4jmv2DOHJ3H07MQuo9wGzuIXpWHdUPMeFYjyBUiwIC9pOK0WuSPS%2BkDTanKQYKRmzZkH3%2BsoqOrknAfLlNK3z%2FXArRj1p7JtD%2BnU8R2O4LToJNdd2TNGdvJJA%2BICRhZGVWUKqHEVsraJM4rYyafNqVREPOfeTQDvUkj58OX%2B%2FEYA9%2FFxs2DqtOyrCWMur85lst3TOOlFX9NB5300QC9vOhmaGyzA3aJFaMm0q%2BZ2dXp8GE0i8deLFNi3tjzgMkuy3ejZy62a1iLeRj%2FqMWlJ%2F%2FEyeHYaJMTMNKdgsUGOqUB8LmxK%2FuExwj8XH1mBdyeNbKDreifweVMFL7nKEq7laRWQnzKPWaRdvuF2N3lEiE2XjLTQdmpk6TCleFjnvqUlpGx%2BbekCDqiV3vrU4poiJ5kf%2BfgJfECRMR7vRLz36KTiPD2Fh0KoQuj7UmxuWlZM%2FJKZJiEDzyOmkBdvUhAFurs3DvKgT%2F1F9GANUAT7Ie9ML76oxDRl1ebR2lJ5fRQnjt56OeB&X-Amz-Signature=e783554ef1b71541a29651e0f3e59dacf9e7496e378d857493f170ff790c3663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TMES47P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEnYeViVlLNLS%2BHhN2%2FJnOob2pzBnAFRcnNAyVbOtSinAiEApZ10E02ggiKTpJDfsvxRuky52dNJO07Hr7%2FUw6Nf5E0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDP%2BnAWRIjB4R6kqMjCrcA9jMSrHNe1ZcjfXSE9ctEE26yZrCnRxcWo%2B3SUZTOmdwFU0GtVWmdsKEucEdwsM6g9prbIGF9AZtL0yYOeYJJNTdW%2BssrcQn2nJ11gJ%2BrNd54S06OLDmvr3V6qrIaF5gJJYIMGvEmjyJMfqsVHctD2RPUXtbo%2FZC3t4xjzYQwp0TUKxvc9IUL99oUZq7nPuOhkEpXh%2BBY7qdgv%2FtYzijXfB1z%2FPANTfArkjxyObZjgJ4r58bzoz823YiDBSCIplUZezVGzqor%2BnuogVMmcmfTQKsgq86KWWRNDqo68%2FYQKIkpCUv2fNpQVaWQpLVfnlK8dupzSoxTvGVPyy98GeONg14gizSQ4jmv2DOHJ3H07MQuo9wGzuIXpWHdUPMeFYjyBUiwIC9pOK0WuSPS%2BkDTanKQYKRmzZkH3%2BsoqOrknAfLlNK3z%2FXArRj1p7JtD%2BnU8R2O4LToJNdd2TNGdvJJA%2BICRhZGVWUKqHEVsraJM4rYyafNqVREPOfeTQDvUkj58OX%2B%2FEYA9%2FFxs2DqtOyrCWMur85lst3TOOlFX9NB5300QC9vOhmaGyzA3aJFaMm0q%2BZ2dXp8GE0i8deLFNi3tjzgMkuy3ejZy62a1iLeRj%2FqMWlJ%2F%2FEyeHYaJMTMNKdgsUGOqUB8LmxK%2FuExwj8XH1mBdyeNbKDreifweVMFL7nKEq7laRWQnzKPWaRdvuF2N3lEiE2XjLTQdmpk6TCleFjnvqUlpGx%2BbekCDqiV3vrU4poiJ5kf%2BfgJfECRMR7vRLz36KTiPD2Fh0KoQuj7UmxuWlZM%2FJKZJiEDzyOmkBdvUhAFurs3DvKgT%2F1F9GANUAT7Ie9ML76oxDRl1ebR2lJ5fRQnjt56OeB&X-Amz-Signature=f1b7db9eb2d09ed7e73be24b24bc48cd695f94dfcabe5397ee63151b830fb289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TMES47P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEnYeViVlLNLS%2BHhN2%2FJnOob2pzBnAFRcnNAyVbOtSinAiEApZ10E02ggiKTpJDfsvxRuky52dNJO07Hr7%2FUw6Nf5E0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDP%2BnAWRIjB4R6kqMjCrcA9jMSrHNe1ZcjfXSE9ctEE26yZrCnRxcWo%2B3SUZTOmdwFU0GtVWmdsKEucEdwsM6g9prbIGF9AZtL0yYOeYJJNTdW%2BssrcQn2nJ11gJ%2BrNd54S06OLDmvr3V6qrIaF5gJJYIMGvEmjyJMfqsVHctD2RPUXtbo%2FZC3t4xjzYQwp0TUKxvc9IUL99oUZq7nPuOhkEpXh%2BBY7qdgv%2FtYzijXfB1z%2FPANTfArkjxyObZjgJ4r58bzoz823YiDBSCIplUZezVGzqor%2BnuogVMmcmfTQKsgq86KWWRNDqo68%2FYQKIkpCUv2fNpQVaWQpLVfnlK8dupzSoxTvGVPyy98GeONg14gizSQ4jmv2DOHJ3H07MQuo9wGzuIXpWHdUPMeFYjyBUiwIC9pOK0WuSPS%2BkDTanKQYKRmzZkH3%2BsoqOrknAfLlNK3z%2FXArRj1p7JtD%2BnU8R2O4LToJNdd2TNGdvJJA%2BICRhZGVWUKqHEVsraJM4rYyafNqVREPOfeTQDvUkj58OX%2B%2FEYA9%2FFxs2DqtOyrCWMur85lst3TOOlFX9NB5300QC9vOhmaGyzA3aJFaMm0q%2BZ2dXp8GE0i8deLFNi3tjzgMkuy3ejZy62a1iLeRj%2FqMWlJ%2F%2FEyeHYaJMTMNKdgsUGOqUB8LmxK%2FuExwj8XH1mBdyeNbKDreifweVMFL7nKEq7laRWQnzKPWaRdvuF2N3lEiE2XjLTQdmpk6TCleFjnvqUlpGx%2BbekCDqiV3vrU4poiJ5kf%2BfgJfECRMR7vRLz36KTiPD2Fh0KoQuj7UmxuWlZM%2FJKZJiEDzyOmkBdvUhAFurs3DvKgT%2F1F9GANUAT7Ie9ML76oxDRl1ebR2lJ5fRQnjt56OeB&X-Amz-Signature=baa54c0013db273e31b68ef8a29643a85066bf307f1e2cf47bddf2ec044f549e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TMES47P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEnYeViVlLNLS%2BHhN2%2FJnOob2pzBnAFRcnNAyVbOtSinAiEApZ10E02ggiKTpJDfsvxRuky52dNJO07Hr7%2FUw6Nf5E0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDP%2BnAWRIjB4R6kqMjCrcA9jMSrHNe1ZcjfXSE9ctEE26yZrCnRxcWo%2B3SUZTOmdwFU0GtVWmdsKEucEdwsM6g9prbIGF9AZtL0yYOeYJJNTdW%2BssrcQn2nJ11gJ%2BrNd54S06OLDmvr3V6qrIaF5gJJYIMGvEmjyJMfqsVHctD2RPUXtbo%2FZC3t4xjzYQwp0TUKxvc9IUL99oUZq7nPuOhkEpXh%2BBY7qdgv%2FtYzijXfB1z%2FPANTfArkjxyObZjgJ4r58bzoz823YiDBSCIplUZezVGzqor%2BnuogVMmcmfTQKsgq86KWWRNDqo68%2FYQKIkpCUv2fNpQVaWQpLVfnlK8dupzSoxTvGVPyy98GeONg14gizSQ4jmv2DOHJ3H07MQuo9wGzuIXpWHdUPMeFYjyBUiwIC9pOK0WuSPS%2BkDTanKQYKRmzZkH3%2BsoqOrknAfLlNK3z%2FXArRj1p7JtD%2BnU8R2O4LToJNdd2TNGdvJJA%2BICRhZGVWUKqHEVsraJM4rYyafNqVREPOfeTQDvUkj58OX%2B%2FEYA9%2FFxs2DqtOyrCWMur85lst3TOOlFX9NB5300QC9vOhmaGyzA3aJFaMm0q%2BZ2dXp8GE0i8deLFNi3tjzgMkuy3ejZy62a1iLeRj%2FqMWlJ%2F%2FEyeHYaJMTMNKdgsUGOqUB8LmxK%2FuExwj8XH1mBdyeNbKDreifweVMFL7nKEq7laRWQnzKPWaRdvuF2N3lEiE2XjLTQdmpk6TCleFjnvqUlpGx%2BbekCDqiV3vrU4poiJ5kf%2BfgJfECRMR7vRLz36KTiPD2Fh0KoQuj7UmxuWlZM%2FJKZJiEDzyOmkBdvUhAFurs3DvKgT%2F1F9GANUAT7Ie9ML76oxDRl1ebR2lJ5fRQnjt56OeB&X-Amz-Signature=84ef465bfd0174bf62c18ab594d52d58a4a318b505c4e38b10b17921e80f0110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
