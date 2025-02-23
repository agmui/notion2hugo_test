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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFK62GIQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVA%2FuQ6I91SMAAide7M4qpRLCc3yWuh2VtLcpkUZbt%2FAiEAs8yhRvSw14wKOLZOwTkjDHsYzKciW3kaoctQlbU1pBcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFRSK5uiIIWTyCMoSrcA9BkW9DOwiraZBNZKjlxTucw57Xn%2BpobuQyeI4R%2F%2BnqoNWskEzphnHbrAXF0sPFFvfRR7QvW%2BEUU6LUEJpf2yxvK1TAIIMfCoLMfj8rUPjBScuIG2Ai%2BgqzbZDBQPuFco771gvr51CMotfq7%2FuTpblZXXt%2F6%2FBL5Km8v5HtaKSOeUJPJvuSudPQwrVN6KzCwshk3qtkk81GRe%2FMk9heOmApDrHmIOYKPwrK3e5zcQo68PMJNIQoBLT8rTF96uhkixn%2BtFZ3uBuh7xD3Y3Eslaa1n%2BwNFZ389ZTgtjH4vzZAFLHjZ2yum8CQ50Jmuj8Fmbc0yzJ%2BHEmgqPQFlmNprdGNbnCLs6WLlptcVQ1GlEGDy%2BvQgKFd1zlQbP9iCSz4r%2FVAPA1kksIohkAwsZJa76MVWDqCrkoj%2FrKdDqmBl06Z3Pl1VEYr05pEPWVbd%2BzDhlOplRJvFQeHfqxeoF8Gn286997ieN5gqQfPMNFsht2jABz0HLLhyV2WVkpHNabqi0Cu4eA%2FfM4ihYn5fiAnbFWnzjWvs10kPrf0KyCqEvRA0pUWvrlz0m1LOwza9XZF2du9UResVs4Os33CcsrdvAfbndCSGJ%2BdfnhbMQewwBJnMzlX83s8VyyKlouRfMOPJ6r0GOqUBmDzBOWjnPDyq%2Bq%2BePXnKR2TiAbhXbJhhtpZrjhhjYrj5KG05iuFrU%2FBreXkl4GKTyodI70Umq9HPvizraDJM5FkwGWSF04M%2BkgO75A%2BIC5lx4Knbj5SWlE%2Fye2SQkgBZFnCUoI6hh3pnJjBdrhTLEXCp53Z0Yyl%2BS2RCzHB7yrFh4pSJMn101JcTr2riowBsc6ouYSBdrOdUIYf2dPfd8Nw5wmTU&X-Amz-Signature=86a3106065d653b97d67812f0925e8c7f94ea3c4dabc6a0e5eb344756efe1336&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFK62GIQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVA%2FuQ6I91SMAAide7M4qpRLCc3yWuh2VtLcpkUZbt%2FAiEAs8yhRvSw14wKOLZOwTkjDHsYzKciW3kaoctQlbU1pBcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFRSK5uiIIWTyCMoSrcA9BkW9DOwiraZBNZKjlxTucw57Xn%2BpobuQyeI4R%2F%2BnqoNWskEzphnHbrAXF0sPFFvfRR7QvW%2BEUU6LUEJpf2yxvK1TAIIMfCoLMfj8rUPjBScuIG2Ai%2BgqzbZDBQPuFco771gvr51CMotfq7%2FuTpblZXXt%2F6%2FBL5Km8v5HtaKSOeUJPJvuSudPQwrVN6KzCwshk3qtkk81GRe%2FMk9heOmApDrHmIOYKPwrK3e5zcQo68PMJNIQoBLT8rTF96uhkixn%2BtFZ3uBuh7xD3Y3Eslaa1n%2BwNFZ389ZTgtjH4vzZAFLHjZ2yum8CQ50Jmuj8Fmbc0yzJ%2BHEmgqPQFlmNprdGNbnCLs6WLlptcVQ1GlEGDy%2BvQgKFd1zlQbP9iCSz4r%2FVAPA1kksIohkAwsZJa76MVWDqCrkoj%2FrKdDqmBl06Z3Pl1VEYr05pEPWVbd%2BzDhlOplRJvFQeHfqxeoF8Gn286997ieN5gqQfPMNFsht2jABz0HLLhyV2WVkpHNabqi0Cu4eA%2FfM4ihYn5fiAnbFWnzjWvs10kPrf0KyCqEvRA0pUWvrlz0m1LOwza9XZF2du9UResVs4Os33CcsrdvAfbndCSGJ%2BdfnhbMQewwBJnMzlX83s8VyyKlouRfMOPJ6r0GOqUBmDzBOWjnPDyq%2Bq%2BePXnKR2TiAbhXbJhhtpZrjhhjYrj5KG05iuFrU%2FBreXkl4GKTyodI70Umq9HPvizraDJM5FkwGWSF04M%2BkgO75A%2BIC5lx4Knbj5SWlE%2Fye2SQkgBZFnCUoI6hh3pnJjBdrhTLEXCp53Z0Yyl%2BS2RCzHB7yrFh4pSJMn101JcTr2riowBsc6ouYSBdrOdUIYf2dPfd8Nw5wmTU&X-Amz-Signature=5139dd24202cfe91c38570f1fcdb4e5c7d910e2cb91944ea2a4bc6086d760c2b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFK62GIQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVA%2FuQ6I91SMAAide7M4qpRLCc3yWuh2VtLcpkUZbt%2FAiEAs8yhRvSw14wKOLZOwTkjDHsYzKciW3kaoctQlbU1pBcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFRSK5uiIIWTyCMoSrcA9BkW9DOwiraZBNZKjlxTucw57Xn%2BpobuQyeI4R%2F%2BnqoNWskEzphnHbrAXF0sPFFvfRR7QvW%2BEUU6LUEJpf2yxvK1TAIIMfCoLMfj8rUPjBScuIG2Ai%2BgqzbZDBQPuFco771gvr51CMotfq7%2FuTpblZXXt%2F6%2FBL5Km8v5HtaKSOeUJPJvuSudPQwrVN6KzCwshk3qtkk81GRe%2FMk9heOmApDrHmIOYKPwrK3e5zcQo68PMJNIQoBLT8rTF96uhkixn%2BtFZ3uBuh7xD3Y3Eslaa1n%2BwNFZ389ZTgtjH4vzZAFLHjZ2yum8CQ50Jmuj8Fmbc0yzJ%2BHEmgqPQFlmNprdGNbnCLs6WLlptcVQ1GlEGDy%2BvQgKFd1zlQbP9iCSz4r%2FVAPA1kksIohkAwsZJa76MVWDqCrkoj%2FrKdDqmBl06Z3Pl1VEYr05pEPWVbd%2BzDhlOplRJvFQeHfqxeoF8Gn286997ieN5gqQfPMNFsht2jABz0HLLhyV2WVkpHNabqi0Cu4eA%2FfM4ihYn5fiAnbFWnzjWvs10kPrf0KyCqEvRA0pUWvrlz0m1LOwza9XZF2du9UResVs4Os33CcsrdvAfbndCSGJ%2BdfnhbMQewwBJnMzlX83s8VyyKlouRfMOPJ6r0GOqUBmDzBOWjnPDyq%2Bq%2BePXnKR2TiAbhXbJhhtpZrjhhjYrj5KG05iuFrU%2FBreXkl4GKTyodI70Umq9HPvizraDJM5FkwGWSF04M%2BkgO75A%2BIC5lx4Knbj5SWlE%2Fye2SQkgBZFnCUoI6hh3pnJjBdrhTLEXCp53Z0Yyl%2BS2RCzHB7yrFh4pSJMn101JcTr2riowBsc6ouYSBdrOdUIYf2dPfd8Nw5wmTU&X-Amz-Signature=1c27ecc21beadda67ff9a8592f8d4b4703d4f2959ea41afafabe6c07088bf0e8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFK62GIQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVA%2FuQ6I91SMAAide7M4qpRLCc3yWuh2VtLcpkUZbt%2FAiEAs8yhRvSw14wKOLZOwTkjDHsYzKciW3kaoctQlbU1pBcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFRSK5uiIIWTyCMoSrcA9BkW9DOwiraZBNZKjlxTucw57Xn%2BpobuQyeI4R%2F%2BnqoNWskEzphnHbrAXF0sPFFvfRR7QvW%2BEUU6LUEJpf2yxvK1TAIIMfCoLMfj8rUPjBScuIG2Ai%2BgqzbZDBQPuFco771gvr51CMotfq7%2FuTpblZXXt%2F6%2FBL5Km8v5HtaKSOeUJPJvuSudPQwrVN6KzCwshk3qtkk81GRe%2FMk9heOmApDrHmIOYKPwrK3e5zcQo68PMJNIQoBLT8rTF96uhkixn%2BtFZ3uBuh7xD3Y3Eslaa1n%2BwNFZ389ZTgtjH4vzZAFLHjZ2yum8CQ50Jmuj8Fmbc0yzJ%2BHEmgqPQFlmNprdGNbnCLs6WLlptcVQ1GlEGDy%2BvQgKFd1zlQbP9iCSz4r%2FVAPA1kksIohkAwsZJa76MVWDqCrkoj%2FrKdDqmBl06Z3Pl1VEYr05pEPWVbd%2BzDhlOplRJvFQeHfqxeoF8Gn286997ieN5gqQfPMNFsht2jABz0HLLhyV2WVkpHNabqi0Cu4eA%2FfM4ihYn5fiAnbFWnzjWvs10kPrf0KyCqEvRA0pUWvrlz0m1LOwza9XZF2du9UResVs4Os33CcsrdvAfbndCSGJ%2BdfnhbMQewwBJnMzlX83s8VyyKlouRfMOPJ6r0GOqUBmDzBOWjnPDyq%2Bq%2BePXnKR2TiAbhXbJhhtpZrjhhjYrj5KG05iuFrU%2FBreXkl4GKTyodI70Umq9HPvizraDJM5FkwGWSF04M%2BkgO75A%2BIC5lx4Knbj5SWlE%2Fye2SQkgBZFnCUoI6hh3pnJjBdrhTLEXCp53Z0Yyl%2BS2RCzHB7yrFh4pSJMn101JcTr2riowBsc6ouYSBdrOdUIYf2dPfd8Nw5wmTU&X-Amz-Signature=c43983bc55feaaffc624f8e58f695f385db4f59aec6fab889e7d91a457bb8ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFK62GIQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVA%2FuQ6I91SMAAide7M4qpRLCc3yWuh2VtLcpkUZbt%2FAiEAs8yhRvSw14wKOLZOwTkjDHsYzKciW3kaoctQlbU1pBcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFRSK5uiIIWTyCMoSrcA9BkW9DOwiraZBNZKjlxTucw57Xn%2BpobuQyeI4R%2F%2BnqoNWskEzphnHbrAXF0sPFFvfRR7QvW%2BEUU6LUEJpf2yxvK1TAIIMfCoLMfj8rUPjBScuIG2Ai%2BgqzbZDBQPuFco771gvr51CMotfq7%2FuTpblZXXt%2F6%2FBL5Km8v5HtaKSOeUJPJvuSudPQwrVN6KzCwshk3qtkk81GRe%2FMk9heOmApDrHmIOYKPwrK3e5zcQo68PMJNIQoBLT8rTF96uhkixn%2BtFZ3uBuh7xD3Y3Eslaa1n%2BwNFZ389ZTgtjH4vzZAFLHjZ2yum8CQ50Jmuj8Fmbc0yzJ%2BHEmgqPQFlmNprdGNbnCLs6WLlptcVQ1GlEGDy%2BvQgKFd1zlQbP9iCSz4r%2FVAPA1kksIohkAwsZJa76MVWDqCrkoj%2FrKdDqmBl06Z3Pl1VEYr05pEPWVbd%2BzDhlOplRJvFQeHfqxeoF8Gn286997ieN5gqQfPMNFsht2jABz0HLLhyV2WVkpHNabqi0Cu4eA%2FfM4ihYn5fiAnbFWnzjWvs10kPrf0KyCqEvRA0pUWvrlz0m1LOwza9XZF2du9UResVs4Os33CcsrdvAfbndCSGJ%2BdfnhbMQewwBJnMzlX83s8VyyKlouRfMOPJ6r0GOqUBmDzBOWjnPDyq%2Bq%2BePXnKR2TiAbhXbJhhtpZrjhhjYrj5KG05iuFrU%2FBreXkl4GKTyodI70Umq9HPvizraDJM5FkwGWSF04M%2BkgO75A%2BIC5lx4Knbj5SWlE%2Fye2SQkgBZFnCUoI6hh3pnJjBdrhTLEXCp53Z0Yyl%2BS2RCzHB7yrFh4pSJMn101JcTr2riowBsc6ouYSBdrOdUIYf2dPfd8Nw5wmTU&X-Amz-Signature=9ee5071d41606ca501962c2d15b5e9e5ef63e53bf4ff8f9b66cb0ecf430abc30&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFK62GIQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVA%2FuQ6I91SMAAide7M4qpRLCc3yWuh2VtLcpkUZbt%2FAiEAs8yhRvSw14wKOLZOwTkjDHsYzKciW3kaoctQlbU1pBcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFRSK5uiIIWTyCMoSrcA9BkW9DOwiraZBNZKjlxTucw57Xn%2BpobuQyeI4R%2F%2BnqoNWskEzphnHbrAXF0sPFFvfRR7QvW%2BEUU6LUEJpf2yxvK1TAIIMfCoLMfj8rUPjBScuIG2Ai%2BgqzbZDBQPuFco771gvr51CMotfq7%2FuTpblZXXt%2F6%2FBL5Km8v5HtaKSOeUJPJvuSudPQwrVN6KzCwshk3qtkk81GRe%2FMk9heOmApDrHmIOYKPwrK3e5zcQo68PMJNIQoBLT8rTF96uhkixn%2BtFZ3uBuh7xD3Y3Eslaa1n%2BwNFZ389ZTgtjH4vzZAFLHjZ2yum8CQ50Jmuj8Fmbc0yzJ%2BHEmgqPQFlmNprdGNbnCLs6WLlptcVQ1GlEGDy%2BvQgKFd1zlQbP9iCSz4r%2FVAPA1kksIohkAwsZJa76MVWDqCrkoj%2FrKdDqmBl06Z3Pl1VEYr05pEPWVbd%2BzDhlOplRJvFQeHfqxeoF8Gn286997ieN5gqQfPMNFsht2jABz0HLLhyV2WVkpHNabqi0Cu4eA%2FfM4ihYn5fiAnbFWnzjWvs10kPrf0KyCqEvRA0pUWvrlz0m1LOwza9XZF2du9UResVs4Os33CcsrdvAfbndCSGJ%2BdfnhbMQewwBJnMzlX83s8VyyKlouRfMOPJ6r0GOqUBmDzBOWjnPDyq%2Bq%2BePXnKR2TiAbhXbJhhtpZrjhhjYrj5KG05iuFrU%2FBreXkl4GKTyodI70Umq9HPvizraDJM5FkwGWSF04M%2BkgO75A%2BIC5lx4Knbj5SWlE%2Fye2SQkgBZFnCUoI6hh3pnJjBdrhTLEXCp53Z0Yyl%2BS2RCzHB7yrFh4pSJMn101JcTr2riowBsc6ouYSBdrOdUIYf2dPfd8Nw5wmTU&X-Amz-Signature=499f7bc43562b11a8df5a49bf6f75315ec64f666d4d0c1e81593e659df3bb4a3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFK62GIQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVA%2FuQ6I91SMAAide7M4qpRLCc3yWuh2VtLcpkUZbt%2FAiEAs8yhRvSw14wKOLZOwTkjDHsYzKciW3kaoctQlbU1pBcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFRSK5uiIIWTyCMoSrcA9BkW9DOwiraZBNZKjlxTucw57Xn%2BpobuQyeI4R%2F%2BnqoNWskEzphnHbrAXF0sPFFvfRR7QvW%2BEUU6LUEJpf2yxvK1TAIIMfCoLMfj8rUPjBScuIG2Ai%2BgqzbZDBQPuFco771gvr51CMotfq7%2FuTpblZXXt%2F6%2FBL5Km8v5HtaKSOeUJPJvuSudPQwrVN6KzCwshk3qtkk81GRe%2FMk9heOmApDrHmIOYKPwrK3e5zcQo68PMJNIQoBLT8rTF96uhkixn%2BtFZ3uBuh7xD3Y3Eslaa1n%2BwNFZ389ZTgtjH4vzZAFLHjZ2yum8CQ50Jmuj8Fmbc0yzJ%2BHEmgqPQFlmNprdGNbnCLs6WLlptcVQ1GlEGDy%2BvQgKFd1zlQbP9iCSz4r%2FVAPA1kksIohkAwsZJa76MVWDqCrkoj%2FrKdDqmBl06Z3Pl1VEYr05pEPWVbd%2BzDhlOplRJvFQeHfqxeoF8Gn286997ieN5gqQfPMNFsht2jABz0HLLhyV2WVkpHNabqi0Cu4eA%2FfM4ihYn5fiAnbFWnzjWvs10kPrf0KyCqEvRA0pUWvrlz0m1LOwza9XZF2du9UResVs4Os33CcsrdvAfbndCSGJ%2BdfnhbMQewwBJnMzlX83s8VyyKlouRfMOPJ6r0GOqUBmDzBOWjnPDyq%2Bq%2BePXnKR2TiAbhXbJhhtpZrjhhjYrj5KG05iuFrU%2FBreXkl4GKTyodI70Umq9HPvizraDJM5FkwGWSF04M%2BkgO75A%2BIC5lx4Knbj5SWlE%2Fye2SQkgBZFnCUoI6hh3pnJjBdrhTLEXCp53Z0Yyl%2BS2RCzHB7yrFh4pSJMn101JcTr2riowBsc6ouYSBdrOdUIYf2dPfd8Nw5wmTU&X-Amz-Signature=33fbd1fceef3bffadec4795bb9ddca666732538d9cfc0c86d9f7505fc7a6c3a3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
