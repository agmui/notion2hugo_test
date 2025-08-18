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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCRLTCZ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQC14fsDWwinDkyRBHGr1H5tWEYB80%2Fj9PGoAPFAHbCxoAIhANMW3xhemBirxUrTz6MR%2FSvP0n8ZbStxNRxYyLPyn1vNKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXDdUgn8d9ocNYhWoq3ANS2I4WJbnWJ%2BDDSrtKYOyaycDD%2BBEs%2BiOBDyx0fo9qsyaY7DOzduRQI8LNRn%2Bzv4bnpfJDmIKguAtUwuyuL14tyxA9zZ3vtZ4izXw22oVzhAe101iEuYNW8ot84wjYaMqPJT%2FwgOHMDZEsYkTsc6ZBRaZWuFO5dplPpMgNi%2FX9sHXlJeG%2B8z7D%2BtzKWSbXwMD1cizsrw9UF07tT69RezFjtUhYckq8%2FgzYp20ZZ5BTQlCZbqayWbCwoIHa2RswrfkJwjf%2F5WU%2Fnlnah8mUIvJugKUVtpkcVeBHRE5jROblS7a5zAWaS41FqmLwk73F7X6j2V7lYs%2Fp1S8q9m87beqYs%2BJJ3ZaNHVtSqBtN225aQ4hysGPibs9cPwhGc%2B30TfWfxgJXYL%2Fb0r8aGmlTA9XiT%2Fnrh%2F7fL%2BsTp6uhKnqwfntK7ElomKe4onrNb%2B4SuqVceIkD0stIcrYDVx7dlvSs2NvegYapAV%2FoCfXvCVhUMGi5Cyl3%2ByBiLj5jluyQkr8ESoPjw9wsh508RNPx95u7mc784nWL%2BeQQAVFfFHIOPyNUA6961r%2BkGwPIIqbIcPFG83TSpU54QYO9FtzwA8CsKCoA50M1n9Dorkq1g18q3vxoS0f%2BC4OF1GhaDTCz64nFBjqkAUPAZJ8OwK2MCNjQDjKtC6H1NFeFsOU7FAddCskmVx%2BL266qJPl3XahppZ89oQHgXMkWjqDTKnkP135AA3%2BDkucytyBeBdCp8XePkr%2F4Addow0A070SeQMGl3KfanCp4WlLqsPzEqmu%2BwsrYfFWiQZ70bGykJ9fJfrzSrHzUxesiW9IOg4syH9Z1gorITUtDYtXwWagUmfkzgwchIKQrRO1YLaXN&X-Amz-Signature=e067b31f4f2601368ccbb39145bbfb64c0b254456262c2c1ef83573520d91a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCRLTCZ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQC14fsDWwinDkyRBHGr1H5tWEYB80%2Fj9PGoAPFAHbCxoAIhANMW3xhemBirxUrTz6MR%2FSvP0n8ZbStxNRxYyLPyn1vNKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXDdUgn8d9ocNYhWoq3ANS2I4WJbnWJ%2BDDSrtKYOyaycDD%2BBEs%2BiOBDyx0fo9qsyaY7DOzduRQI8LNRn%2Bzv4bnpfJDmIKguAtUwuyuL14tyxA9zZ3vtZ4izXw22oVzhAe101iEuYNW8ot84wjYaMqPJT%2FwgOHMDZEsYkTsc6ZBRaZWuFO5dplPpMgNi%2FX9sHXlJeG%2B8z7D%2BtzKWSbXwMD1cizsrw9UF07tT69RezFjtUhYckq8%2FgzYp20ZZ5BTQlCZbqayWbCwoIHa2RswrfkJwjf%2F5WU%2Fnlnah8mUIvJugKUVtpkcVeBHRE5jROblS7a5zAWaS41FqmLwk73F7X6j2V7lYs%2Fp1S8q9m87beqYs%2BJJ3ZaNHVtSqBtN225aQ4hysGPibs9cPwhGc%2B30TfWfxgJXYL%2Fb0r8aGmlTA9XiT%2Fnrh%2F7fL%2BsTp6uhKnqwfntK7ElomKe4onrNb%2B4SuqVceIkD0stIcrYDVx7dlvSs2NvegYapAV%2FoCfXvCVhUMGi5Cyl3%2ByBiLj5jluyQkr8ESoPjw9wsh508RNPx95u7mc784nWL%2BeQQAVFfFHIOPyNUA6961r%2BkGwPIIqbIcPFG83TSpU54QYO9FtzwA8CsKCoA50M1n9Dorkq1g18q3vxoS0f%2BC4OF1GhaDTCz64nFBjqkAUPAZJ8OwK2MCNjQDjKtC6H1NFeFsOU7FAddCskmVx%2BL266qJPl3XahppZ89oQHgXMkWjqDTKnkP135AA3%2BDkucytyBeBdCp8XePkr%2F4Addow0A070SeQMGl3KfanCp4WlLqsPzEqmu%2BwsrYfFWiQZ70bGykJ9fJfrzSrHzUxesiW9IOg4syH9Z1gorITUtDYtXwWagUmfkzgwchIKQrRO1YLaXN&X-Amz-Signature=94e834cf05d5d8f5c33ba65e378e1fea4886b79031e4cf42998a374a4ead098b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCRLTCZ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQC14fsDWwinDkyRBHGr1H5tWEYB80%2Fj9PGoAPFAHbCxoAIhANMW3xhemBirxUrTz6MR%2FSvP0n8ZbStxNRxYyLPyn1vNKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXDdUgn8d9ocNYhWoq3ANS2I4WJbnWJ%2BDDSrtKYOyaycDD%2BBEs%2BiOBDyx0fo9qsyaY7DOzduRQI8LNRn%2Bzv4bnpfJDmIKguAtUwuyuL14tyxA9zZ3vtZ4izXw22oVzhAe101iEuYNW8ot84wjYaMqPJT%2FwgOHMDZEsYkTsc6ZBRaZWuFO5dplPpMgNi%2FX9sHXlJeG%2B8z7D%2BtzKWSbXwMD1cizsrw9UF07tT69RezFjtUhYckq8%2FgzYp20ZZ5BTQlCZbqayWbCwoIHa2RswrfkJwjf%2F5WU%2Fnlnah8mUIvJugKUVtpkcVeBHRE5jROblS7a5zAWaS41FqmLwk73F7X6j2V7lYs%2Fp1S8q9m87beqYs%2BJJ3ZaNHVtSqBtN225aQ4hysGPibs9cPwhGc%2B30TfWfxgJXYL%2Fb0r8aGmlTA9XiT%2Fnrh%2F7fL%2BsTp6uhKnqwfntK7ElomKe4onrNb%2B4SuqVceIkD0stIcrYDVx7dlvSs2NvegYapAV%2FoCfXvCVhUMGi5Cyl3%2ByBiLj5jluyQkr8ESoPjw9wsh508RNPx95u7mc784nWL%2BeQQAVFfFHIOPyNUA6961r%2BkGwPIIqbIcPFG83TSpU54QYO9FtzwA8CsKCoA50M1n9Dorkq1g18q3vxoS0f%2BC4OF1GhaDTCz64nFBjqkAUPAZJ8OwK2MCNjQDjKtC6H1NFeFsOU7FAddCskmVx%2BL266qJPl3XahppZ89oQHgXMkWjqDTKnkP135AA3%2BDkucytyBeBdCp8XePkr%2F4Addow0A070SeQMGl3KfanCp4WlLqsPzEqmu%2BwsrYfFWiQZ70bGykJ9fJfrzSrHzUxesiW9IOg4syH9Z1gorITUtDYtXwWagUmfkzgwchIKQrRO1YLaXN&X-Amz-Signature=9b0b76eef29dae1b82e937aac3542234e5165eaa4b5d822b74ad016fe127c83e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCRLTCZ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQC14fsDWwinDkyRBHGr1H5tWEYB80%2Fj9PGoAPFAHbCxoAIhANMW3xhemBirxUrTz6MR%2FSvP0n8ZbStxNRxYyLPyn1vNKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXDdUgn8d9ocNYhWoq3ANS2I4WJbnWJ%2BDDSrtKYOyaycDD%2BBEs%2BiOBDyx0fo9qsyaY7DOzduRQI8LNRn%2Bzv4bnpfJDmIKguAtUwuyuL14tyxA9zZ3vtZ4izXw22oVzhAe101iEuYNW8ot84wjYaMqPJT%2FwgOHMDZEsYkTsc6ZBRaZWuFO5dplPpMgNi%2FX9sHXlJeG%2B8z7D%2BtzKWSbXwMD1cizsrw9UF07tT69RezFjtUhYckq8%2FgzYp20ZZ5BTQlCZbqayWbCwoIHa2RswrfkJwjf%2F5WU%2Fnlnah8mUIvJugKUVtpkcVeBHRE5jROblS7a5zAWaS41FqmLwk73F7X6j2V7lYs%2Fp1S8q9m87beqYs%2BJJ3ZaNHVtSqBtN225aQ4hysGPibs9cPwhGc%2B30TfWfxgJXYL%2Fb0r8aGmlTA9XiT%2Fnrh%2F7fL%2BsTp6uhKnqwfntK7ElomKe4onrNb%2B4SuqVceIkD0stIcrYDVx7dlvSs2NvegYapAV%2FoCfXvCVhUMGi5Cyl3%2ByBiLj5jluyQkr8ESoPjw9wsh508RNPx95u7mc784nWL%2BeQQAVFfFHIOPyNUA6961r%2BkGwPIIqbIcPFG83TSpU54QYO9FtzwA8CsKCoA50M1n9Dorkq1g18q3vxoS0f%2BC4OF1GhaDTCz64nFBjqkAUPAZJ8OwK2MCNjQDjKtC6H1NFeFsOU7FAddCskmVx%2BL266qJPl3XahppZ89oQHgXMkWjqDTKnkP135AA3%2BDkucytyBeBdCp8XePkr%2F4Addow0A070SeQMGl3KfanCp4WlLqsPzEqmu%2BwsrYfFWiQZ70bGykJ9fJfrzSrHzUxesiW9IOg4syH9Z1gorITUtDYtXwWagUmfkzgwchIKQrRO1YLaXN&X-Amz-Signature=e72a9d1a3a4f580aa327e24a490a3f943064721b9493e6a09747c40a0c9b7a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCRLTCZ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQC14fsDWwinDkyRBHGr1H5tWEYB80%2Fj9PGoAPFAHbCxoAIhANMW3xhemBirxUrTz6MR%2FSvP0n8ZbStxNRxYyLPyn1vNKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXDdUgn8d9ocNYhWoq3ANS2I4WJbnWJ%2BDDSrtKYOyaycDD%2BBEs%2BiOBDyx0fo9qsyaY7DOzduRQI8LNRn%2Bzv4bnpfJDmIKguAtUwuyuL14tyxA9zZ3vtZ4izXw22oVzhAe101iEuYNW8ot84wjYaMqPJT%2FwgOHMDZEsYkTsc6ZBRaZWuFO5dplPpMgNi%2FX9sHXlJeG%2B8z7D%2BtzKWSbXwMD1cizsrw9UF07tT69RezFjtUhYckq8%2FgzYp20ZZ5BTQlCZbqayWbCwoIHa2RswrfkJwjf%2F5WU%2Fnlnah8mUIvJugKUVtpkcVeBHRE5jROblS7a5zAWaS41FqmLwk73F7X6j2V7lYs%2Fp1S8q9m87beqYs%2BJJ3ZaNHVtSqBtN225aQ4hysGPibs9cPwhGc%2B30TfWfxgJXYL%2Fb0r8aGmlTA9XiT%2Fnrh%2F7fL%2BsTp6uhKnqwfntK7ElomKe4onrNb%2B4SuqVceIkD0stIcrYDVx7dlvSs2NvegYapAV%2FoCfXvCVhUMGi5Cyl3%2ByBiLj5jluyQkr8ESoPjw9wsh508RNPx95u7mc784nWL%2BeQQAVFfFHIOPyNUA6961r%2BkGwPIIqbIcPFG83TSpU54QYO9FtzwA8CsKCoA50M1n9Dorkq1g18q3vxoS0f%2BC4OF1GhaDTCz64nFBjqkAUPAZJ8OwK2MCNjQDjKtC6H1NFeFsOU7FAddCskmVx%2BL266qJPl3XahppZ89oQHgXMkWjqDTKnkP135AA3%2BDkucytyBeBdCp8XePkr%2F4Addow0A070SeQMGl3KfanCp4WlLqsPzEqmu%2BwsrYfFWiQZ70bGykJ9fJfrzSrHzUxesiW9IOg4syH9Z1gorITUtDYtXwWagUmfkzgwchIKQrRO1YLaXN&X-Amz-Signature=3a6d5ed3f940bff9795a899510696891e602eb846efaa7211b6e1c0884cad778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCRLTCZ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQC14fsDWwinDkyRBHGr1H5tWEYB80%2Fj9PGoAPFAHbCxoAIhANMW3xhemBirxUrTz6MR%2FSvP0n8ZbStxNRxYyLPyn1vNKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXDdUgn8d9ocNYhWoq3ANS2I4WJbnWJ%2BDDSrtKYOyaycDD%2BBEs%2BiOBDyx0fo9qsyaY7DOzduRQI8LNRn%2Bzv4bnpfJDmIKguAtUwuyuL14tyxA9zZ3vtZ4izXw22oVzhAe101iEuYNW8ot84wjYaMqPJT%2FwgOHMDZEsYkTsc6ZBRaZWuFO5dplPpMgNi%2FX9sHXlJeG%2B8z7D%2BtzKWSbXwMD1cizsrw9UF07tT69RezFjtUhYckq8%2FgzYp20ZZ5BTQlCZbqayWbCwoIHa2RswrfkJwjf%2F5WU%2Fnlnah8mUIvJugKUVtpkcVeBHRE5jROblS7a5zAWaS41FqmLwk73F7X6j2V7lYs%2Fp1S8q9m87beqYs%2BJJ3ZaNHVtSqBtN225aQ4hysGPibs9cPwhGc%2B30TfWfxgJXYL%2Fb0r8aGmlTA9XiT%2Fnrh%2F7fL%2BsTp6uhKnqwfntK7ElomKe4onrNb%2B4SuqVceIkD0stIcrYDVx7dlvSs2NvegYapAV%2FoCfXvCVhUMGi5Cyl3%2ByBiLj5jluyQkr8ESoPjw9wsh508RNPx95u7mc784nWL%2BeQQAVFfFHIOPyNUA6961r%2BkGwPIIqbIcPFG83TSpU54QYO9FtzwA8CsKCoA50M1n9Dorkq1g18q3vxoS0f%2BC4OF1GhaDTCz64nFBjqkAUPAZJ8OwK2MCNjQDjKtC6H1NFeFsOU7FAddCskmVx%2BL266qJPl3XahppZ89oQHgXMkWjqDTKnkP135AA3%2BDkucytyBeBdCp8XePkr%2F4Addow0A070SeQMGl3KfanCp4WlLqsPzEqmu%2BwsrYfFWiQZ70bGykJ9fJfrzSrHzUxesiW9IOg4syH9Z1gorITUtDYtXwWagUmfkzgwchIKQrRO1YLaXN&X-Amz-Signature=fc5aceb220f9f7c2e9066200e354b48f4acc2da62cdc57d1afcf6865d6e21f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCRLTCZ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQC14fsDWwinDkyRBHGr1H5tWEYB80%2Fj9PGoAPFAHbCxoAIhANMW3xhemBirxUrTz6MR%2FSvP0n8ZbStxNRxYyLPyn1vNKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXDdUgn8d9ocNYhWoq3ANS2I4WJbnWJ%2BDDSrtKYOyaycDD%2BBEs%2BiOBDyx0fo9qsyaY7DOzduRQI8LNRn%2Bzv4bnpfJDmIKguAtUwuyuL14tyxA9zZ3vtZ4izXw22oVzhAe101iEuYNW8ot84wjYaMqPJT%2FwgOHMDZEsYkTsc6ZBRaZWuFO5dplPpMgNi%2FX9sHXlJeG%2B8z7D%2BtzKWSbXwMD1cizsrw9UF07tT69RezFjtUhYckq8%2FgzYp20ZZ5BTQlCZbqayWbCwoIHa2RswrfkJwjf%2F5WU%2Fnlnah8mUIvJugKUVtpkcVeBHRE5jROblS7a5zAWaS41FqmLwk73F7X6j2V7lYs%2Fp1S8q9m87beqYs%2BJJ3ZaNHVtSqBtN225aQ4hysGPibs9cPwhGc%2B30TfWfxgJXYL%2Fb0r8aGmlTA9XiT%2Fnrh%2F7fL%2BsTp6uhKnqwfntK7ElomKe4onrNb%2B4SuqVceIkD0stIcrYDVx7dlvSs2NvegYapAV%2FoCfXvCVhUMGi5Cyl3%2ByBiLj5jluyQkr8ESoPjw9wsh508RNPx95u7mc784nWL%2BeQQAVFfFHIOPyNUA6961r%2BkGwPIIqbIcPFG83TSpU54QYO9FtzwA8CsKCoA50M1n9Dorkq1g18q3vxoS0f%2BC4OF1GhaDTCz64nFBjqkAUPAZJ8OwK2MCNjQDjKtC6H1NFeFsOU7FAddCskmVx%2BL266qJPl3XahppZ89oQHgXMkWjqDTKnkP135AA3%2BDkucytyBeBdCp8XePkr%2F4Addow0A070SeQMGl3KfanCp4WlLqsPzEqmu%2BwsrYfFWiQZ70bGykJ9fJfrzSrHzUxesiW9IOg4syH9Z1gorITUtDYtXwWagUmfkzgwchIKQrRO1YLaXN&X-Amz-Signature=8d9fe723a49390c288d688d7911901fec61942b4f9327241989a628e4ef699c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
