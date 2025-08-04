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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WO5P42X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCR5YPI3Z1v5FXrUzDopfsA%2Bdk7Y0KMdPjdr99GSbtGXgIgJzIxm0N8zV1X8Y%2BbUz1rHssQu3EbxlRapVJ40JIIb4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDfTNH3Pykgzw67eqyrcAy020GNMFO5Hxx88NwL%2B4G4VweG24X6xxcMoRss1ZkV8yiTRJK3SGDuj5E2tx2GsTv4cYKvsxruFSbXPtQGCt1x%2FMdWNNU8CVcW1Erv5MxQDA63x487uyHIszVTBr2FINtNWyNbE%2BE8n6R5YKTOyTs%2FwPs6XtpimhOvt2pxP%2F4wDbO1mJ1ndVzGScy4%2FrI39DM%2FFo%2FgqhheEC1Kwubt%2BejpwmMec2%2FPnIRRzdY8PKdzWoS8m3pM7HVJEF8tHWpjsFIbY%2FgNEUIh7kMmoMMu7sYe8ep1GnajWe9FdgliQo8vpTURQofBj%2BYoI%2FckXk%2B8NadhHbf2audZJsdoTVzCkV%2FYHfSVGSaYexKSmTCVb7wujcYCI1xkVyo0bxXNHHwVsftotQ8Ma%2BQMe9KoMPw7AXqBwn3Td4MufuP9qAV97LkRckCpobnOzZivSFuuZKA4d76OU7lFXcFqg1sqJmSSgEvlTmouNqGFLFyzfLYkAmWztOylIV8th%2BpS4J3T%2Fzs2VLv2naozdKQPr7nK31%2Fxk1Bwzd70eyjv8K6fVv8beJzUg5yThmbMYiivQj8qo0gqiWCMZ9tQyQ%2F33Wuk84Tn2odFqbDrFJOT26HcN1HQdHznStA4BBRVPbcbDHBLiMI%2BSw8QGOqUBxR6iSkJX21tO2xUPxew962hF36yVaQCKStIV1jZ4kTeFddtiCfLafkUdxcTs%2B5%2FscijmQn%2FdrTDQ7rpArsGpYX4n8OsqLiUET0g4I3VBtB0vUK05vyOeXZIU%2B9ztUvItWQ4Bkkrlhwx69e%2BufgEcp7oxbviGDOyDhNR7wFJn3VG0dczFbgb4pWVOq14qc8hn2AcURkFSTO%2BeEKwgtpMAl0%2BOVG2r&X-Amz-Signature=4a8632ba6ddd58ec1dcd63b84f476efade93f4870fce01917425ba11a4e6e2b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WO5P42X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCR5YPI3Z1v5FXrUzDopfsA%2Bdk7Y0KMdPjdr99GSbtGXgIgJzIxm0N8zV1X8Y%2BbUz1rHssQu3EbxlRapVJ40JIIb4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDfTNH3Pykgzw67eqyrcAy020GNMFO5Hxx88NwL%2B4G4VweG24X6xxcMoRss1ZkV8yiTRJK3SGDuj5E2tx2GsTv4cYKvsxruFSbXPtQGCt1x%2FMdWNNU8CVcW1Erv5MxQDA63x487uyHIszVTBr2FINtNWyNbE%2BE8n6R5YKTOyTs%2FwPs6XtpimhOvt2pxP%2F4wDbO1mJ1ndVzGScy4%2FrI39DM%2FFo%2FgqhheEC1Kwubt%2BejpwmMec2%2FPnIRRzdY8PKdzWoS8m3pM7HVJEF8tHWpjsFIbY%2FgNEUIh7kMmoMMu7sYe8ep1GnajWe9FdgliQo8vpTURQofBj%2BYoI%2FckXk%2B8NadhHbf2audZJsdoTVzCkV%2FYHfSVGSaYexKSmTCVb7wujcYCI1xkVyo0bxXNHHwVsftotQ8Ma%2BQMe9KoMPw7AXqBwn3Td4MufuP9qAV97LkRckCpobnOzZivSFuuZKA4d76OU7lFXcFqg1sqJmSSgEvlTmouNqGFLFyzfLYkAmWztOylIV8th%2BpS4J3T%2Fzs2VLv2naozdKQPr7nK31%2Fxk1Bwzd70eyjv8K6fVv8beJzUg5yThmbMYiivQj8qo0gqiWCMZ9tQyQ%2F33Wuk84Tn2odFqbDrFJOT26HcN1HQdHznStA4BBRVPbcbDHBLiMI%2BSw8QGOqUBxR6iSkJX21tO2xUPxew962hF36yVaQCKStIV1jZ4kTeFddtiCfLafkUdxcTs%2B5%2FscijmQn%2FdrTDQ7rpArsGpYX4n8OsqLiUET0g4I3VBtB0vUK05vyOeXZIU%2B9ztUvItWQ4Bkkrlhwx69e%2BufgEcp7oxbviGDOyDhNR7wFJn3VG0dczFbgb4pWVOq14qc8hn2AcURkFSTO%2BeEKwgtpMAl0%2BOVG2r&X-Amz-Signature=262bb322aff5886b4f7533b303581a421b3396e70f6724e1a71655ad68f220c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WO5P42X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCR5YPI3Z1v5FXrUzDopfsA%2Bdk7Y0KMdPjdr99GSbtGXgIgJzIxm0N8zV1X8Y%2BbUz1rHssQu3EbxlRapVJ40JIIb4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDfTNH3Pykgzw67eqyrcAy020GNMFO5Hxx88NwL%2B4G4VweG24X6xxcMoRss1ZkV8yiTRJK3SGDuj5E2tx2GsTv4cYKvsxruFSbXPtQGCt1x%2FMdWNNU8CVcW1Erv5MxQDA63x487uyHIszVTBr2FINtNWyNbE%2BE8n6R5YKTOyTs%2FwPs6XtpimhOvt2pxP%2F4wDbO1mJ1ndVzGScy4%2FrI39DM%2FFo%2FgqhheEC1Kwubt%2BejpwmMec2%2FPnIRRzdY8PKdzWoS8m3pM7HVJEF8tHWpjsFIbY%2FgNEUIh7kMmoMMu7sYe8ep1GnajWe9FdgliQo8vpTURQofBj%2BYoI%2FckXk%2B8NadhHbf2audZJsdoTVzCkV%2FYHfSVGSaYexKSmTCVb7wujcYCI1xkVyo0bxXNHHwVsftotQ8Ma%2BQMe9KoMPw7AXqBwn3Td4MufuP9qAV97LkRckCpobnOzZivSFuuZKA4d76OU7lFXcFqg1sqJmSSgEvlTmouNqGFLFyzfLYkAmWztOylIV8th%2BpS4J3T%2Fzs2VLv2naozdKQPr7nK31%2Fxk1Bwzd70eyjv8K6fVv8beJzUg5yThmbMYiivQj8qo0gqiWCMZ9tQyQ%2F33Wuk84Tn2odFqbDrFJOT26HcN1HQdHznStA4BBRVPbcbDHBLiMI%2BSw8QGOqUBxR6iSkJX21tO2xUPxew962hF36yVaQCKStIV1jZ4kTeFddtiCfLafkUdxcTs%2B5%2FscijmQn%2FdrTDQ7rpArsGpYX4n8OsqLiUET0g4I3VBtB0vUK05vyOeXZIU%2B9ztUvItWQ4Bkkrlhwx69e%2BufgEcp7oxbviGDOyDhNR7wFJn3VG0dczFbgb4pWVOq14qc8hn2AcURkFSTO%2BeEKwgtpMAl0%2BOVG2r&X-Amz-Signature=821383df3fd9247bc208bfd3e842683101a9dbc92058573c413fdbf6f69a3e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WO5P42X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCR5YPI3Z1v5FXrUzDopfsA%2Bdk7Y0KMdPjdr99GSbtGXgIgJzIxm0N8zV1X8Y%2BbUz1rHssQu3EbxlRapVJ40JIIb4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDfTNH3Pykgzw67eqyrcAy020GNMFO5Hxx88NwL%2B4G4VweG24X6xxcMoRss1ZkV8yiTRJK3SGDuj5E2tx2GsTv4cYKvsxruFSbXPtQGCt1x%2FMdWNNU8CVcW1Erv5MxQDA63x487uyHIszVTBr2FINtNWyNbE%2BE8n6R5YKTOyTs%2FwPs6XtpimhOvt2pxP%2F4wDbO1mJ1ndVzGScy4%2FrI39DM%2FFo%2FgqhheEC1Kwubt%2BejpwmMec2%2FPnIRRzdY8PKdzWoS8m3pM7HVJEF8tHWpjsFIbY%2FgNEUIh7kMmoMMu7sYe8ep1GnajWe9FdgliQo8vpTURQofBj%2BYoI%2FckXk%2B8NadhHbf2audZJsdoTVzCkV%2FYHfSVGSaYexKSmTCVb7wujcYCI1xkVyo0bxXNHHwVsftotQ8Ma%2BQMe9KoMPw7AXqBwn3Td4MufuP9qAV97LkRckCpobnOzZivSFuuZKA4d76OU7lFXcFqg1sqJmSSgEvlTmouNqGFLFyzfLYkAmWztOylIV8th%2BpS4J3T%2Fzs2VLv2naozdKQPr7nK31%2Fxk1Bwzd70eyjv8K6fVv8beJzUg5yThmbMYiivQj8qo0gqiWCMZ9tQyQ%2F33Wuk84Tn2odFqbDrFJOT26HcN1HQdHznStA4BBRVPbcbDHBLiMI%2BSw8QGOqUBxR6iSkJX21tO2xUPxew962hF36yVaQCKStIV1jZ4kTeFddtiCfLafkUdxcTs%2B5%2FscijmQn%2FdrTDQ7rpArsGpYX4n8OsqLiUET0g4I3VBtB0vUK05vyOeXZIU%2B9ztUvItWQ4Bkkrlhwx69e%2BufgEcp7oxbviGDOyDhNR7wFJn3VG0dczFbgb4pWVOq14qc8hn2AcURkFSTO%2BeEKwgtpMAl0%2BOVG2r&X-Amz-Signature=bb69f7c6c19b1b2a7733d1483546de7e3cba59651cd8cc9ef8694baf3e42399e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WO5P42X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCR5YPI3Z1v5FXrUzDopfsA%2Bdk7Y0KMdPjdr99GSbtGXgIgJzIxm0N8zV1X8Y%2BbUz1rHssQu3EbxlRapVJ40JIIb4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDfTNH3Pykgzw67eqyrcAy020GNMFO5Hxx88NwL%2B4G4VweG24X6xxcMoRss1ZkV8yiTRJK3SGDuj5E2tx2GsTv4cYKvsxruFSbXPtQGCt1x%2FMdWNNU8CVcW1Erv5MxQDA63x487uyHIszVTBr2FINtNWyNbE%2BE8n6R5YKTOyTs%2FwPs6XtpimhOvt2pxP%2F4wDbO1mJ1ndVzGScy4%2FrI39DM%2FFo%2FgqhheEC1Kwubt%2BejpwmMec2%2FPnIRRzdY8PKdzWoS8m3pM7HVJEF8tHWpjsFIbY%2FgNEUIh7kMmoMMu7sYe8ep1GnajWe9FdgliQo8vpTURQofBj%2BYoI%2FckXk%2B8NadhHbf2audZJsdoTVzCkV%2FYHfSVGSaYexKSmTCVb7wujcYCI1xkVyo0bxXNHHwVsftotQ8Ma%2BQMe9KoMPw7AXqBwn3Td4MufuP9qAV97LkRckCpobnOzZivSFuuZKA4d76OU7lFXcFqg1sqJmSSgEvlTmouNqGFLFyzfLYkAmWztOylIV8th%2BpS4J3T%2Fzs2VLv2naozdKQPr7nK31%2Fxk1Bwzd70eyjv8K6fVv8beJzUg5yThmbMYiivQj8qo0gqiWCMZ9tQyQ%2F33Wuk84Tn2odFqbDrFJOT26HcN1HQdHznStA4BBRVPbcbDHBLiMI%2BSw8QGOqUBxR6iSkJX21tO2xUPxew962hF36yVaQCKStIV1jZ4kTeFddtiCfLafkUdxcTs%2B5%2FscijmQn%2FdrTDQ7rpArsGpYX4n8OsqLiUET0g4I3VBtB0vUK05vyOeXZIU%2B9ztUvItWQ4Bkkrlhwx69e%2BufgEcp7oxbviGDOyDhNR7wFJn3VG0dczFbgb4pWVOq14qc8hn2AcURkFSTO%2BeEKwgtpMAl0%2BOVG2r&X-Amz-Signature=bf8186bbeb647b5de895d7ef3c2815ca7ea6ead5d5556ff2cc8dff9bfe014ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WO5P42X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCR5YPI3Z1v5FXrUzDopfsA%2Bdk7Y0KMdPjdr99GSbtGXgIgJzIxm0N8zV1X8Y%2BbUz1rHssQu3EbxlRapVJ40JIIb4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDfTNH3Pykgzw67eqyrcAy020GNMFO5Hxx88NwL%2B4G4VweG24X6xxcMoRss1ZkV8yiTRJK3SGDuj5E2tx2GsTv4cYKvsxruFSbXPtQGCt1x%2FMdWNNU8CVcW1Erv5MxQDA63x487uyHIszVTBr2FINtNWyNbE%2BE8n6R5YKTOyTs%2FwPs6XtpimhOvt2pxP%2F4wDbO1mJ1ndVzGScy4%2FrI39DM%2FFo%2FgqhheEC1Kwubt%2BejpwmMec2%2FPnIRRzdY8PKdzWoS8m3pM7HVJEF8tHWpjsFIbY%2FgNEUIh7kMmoMMu7sYe8ep1GnajWe9FdgliQo8vpTURQofBj%2BYoI%2FckXk%2B8NadhHbf2audZJsdoTVzCkV%2FYHfSVGSaYexKSmTCVb7wujcYCI1xkVyo0bxXNHHwVsftotQ8Ma%2BQMe9KoMPw7AXqBwn3Td4MufuP9qAV97LkRckCpobnOzZivSFuuZKA4d76OU7lFXcFqg1sqJmSSgEvlTmouNqGFLFyzfLYkAmWztOylIV8th%2BpS4J3T%2Fzs2VLv2naozdKQPr7nK31%2Fxk1Bwzd70eyjv8K6fVv8beJzUg5yThmbMYiivQj8qo0gqiWCMZ9tQyQ%2F33Wuk84Tn2odFqbDrFJOT26HcN1HQdHznStA4BBRVPbcbDHBLiMI%2BSw8QGOqUBxR6iSkJX21tO2xUPxew962hF36yVaQCKStIV1jZ4kTeFddtiCfLafkUdxcTs%2B5%2FscijmQn%2FdrTDQ7rpArsGpYX4n8OsqLiUET0g4I3VBtB0vUK05vyOeXZIU%2B9ztUvItWQ4Bkkrlhwx69e%2BufgEcp7oxbviGDOyDhNR7wFJn3VG0dczFbgb4pWVOq14qc8hn2AcURkFSTO%2BeEKwgtpMAl0%2BOVG2r&X-Amz-Signature=454b091939037dc6990d4c82fbce8e68f27c206ae706e016d486312655ca4c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WO5P42X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCR5YPI3Z1v5FXrUzDopfsA%2Bdk7Y0KMdPjdr99GSbtGXgIgJzIxm0N8zV1X8Y%2BbUz1rHssQu3EbxlRapVJ40JIIb4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDfTNH3Pykgzw67eqyrcAy020GNMFO5Hxx88NwL%2B4G4VweG24X6xxcMoRss1ZkV8yiTRJK3SGDuj5E2tx2GsTv4cYKvsxruFSbXPtQGCt1x%2FMdWNNU8CVcW1Erv5MxQDA63x487uyHIszVTBr2FINtNWyNbE%2BE8n6R5YKTOyTs%2FwPs6XtpimhOvt2pxP%2F4wDbO1mJ1ndVzGScy4%2FrI39DM%2FFo%2FgqhheEC1Kwubt%2BejpwmMec2%2FPnIRRzdY8PKdzWoS8m3pM7HVJEF8tHWpjsFIbY%2FgNEUIh7kMmoMMu7sYe8ep1GnajWe9FdgliQo8vpTURQofBj%2BYoI%2FckXk%2B8NadhHbf2audZJsdoTVzCkV%2FYHfSVGSaYexKSmTCVb7wujcYCI1xkVyo0bxXNHHwVsftotQ8Ma%2BQMe9KoMPw7AXqBwn3Td4MufuP9qAV97LkRckCpobnOzZivSFuuZKA4d76OU7lFXcFqg1sqJmSSgEvlTmouNqGFLFyzfLYkAmWztOylIV8th%2BpS4J3T%2Fzs2VLv2naozdKQPr7nK31%2Fxk1Bwzd70eyjv8K6fVv8beJzUg5yThmbMYiivQj8qo0gqiWCMZ9tQyQ%2F33Wuk84Tn2odFqbDrFJOT26HcN1HQdHznStA4BBRVPbcbDHBLiMI%2BSw8QGOqUBxR6iSkJX21tO2xUPxew962hF36yVaQCKStIV1jZ4kTeFddtiCfLafkUdxcTs%2B5%2FscijmQn%2FdrTDQ7rpArsGpYX4n8OsqLiUET0g4I3VBtB0vUK05vyOeXZIU%2B9ztUvItWQ4Bkkrlhwx69e%2BufgEcp7oxbviGDOyDhNR7wFJn3VG0dczFbgb4pWVOq14qc8hn2AcURkFSTO%2BeEKwgtpMAl0%2BOVG2r&X-Amz-Signature=123475d1b1a530fc5a4bf62abb793f414b00ac94e32bf9b3d19f1188e6debba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
