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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4EOUB7W%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYBwtXQcrraJJCr3iExOfhprXRJO6Jc2tKzbvi6Pc8pQIgDUsGXuk2VaTxLTa1h0qfRGG5u7BV%2Fk%2FM2n2Jyz7MJnUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaS12DtlMHG2cCRByrcA00BYnjO%2F3Y1ML2G6Nm4nTGjFYg8Fvb77erqBNlZorDYGj06vxGh9DGJGZ62FAQN%2FoBbydli9blxyHY8JjcIw1Jgi%2BwH9mdo7JFWv%2BWUaF1VKkTgVGlL6KO%2B%2Bly%2Fo5NBHlM4yIw9h%2BF3ppuBfiPrKB6e6s0k%2BPpncOSq8iAry5egAQ1SYz4KR%2B5u2qOBdEc7bLn6T6VOoSPywMCv9huVvuTYYhsgS9HvqX62t6N4OegG5C%2BMGibJSstPmykzbQ3pozQ2aIBkSBpETj2bH8%2F%2BpqEX5tpBaD5Y6jYV7%2BIDUMOhCDbv%2FuyeyMVFhP4nCQheuTtG%2FbNNSxR7HBPX1Dk5cI51b7wVqb1SQUdRG%2BmIrPlKFTCksAr0PDRLdfR5PhDnB%2F%2BX%2FCITtd%2Bw2OvRF7FHdIdMYNnkB38UCIhHtjHm4izs1DVeMC0VJlwY4gADVY8A43hV7MzXL7ozTd6z1fwEyGuK7Ljv3AlQ11qPaC3yvzNcIHD%2BeRFTT%2BD%2BVAUh0pXh1zto68hpEPsDxrA9AtkGBQW6t6Xlv%2Br%2FdTf77XvWKCbOY0j9xPp9hF0jXKPmMoOpH2hXGdl6Km78M6prVq5hkpNVKAZGzt0zbynGZeNqRUnVUxnlmmXQuVVArkpkMLT%2B9cAGOqUBhaRMx388onv9mvofrmiZO34E2RJSN4t%2BceH7WnU43oXjq8ej2qWyYq8IKS0gSyxBDJBQeBWnT2Lv2mXXibO8cVMbEUFBoUvT4DKOIfD8auKzOxTi68CXzGEG59kPAO3B9juRGyXnhqjg1zJcF86xwcJ8Je32mlEGc6ZjD8q%2FBCIaLxasnMudgzaPxxW9s3aEXN%2FgShfZ9JwhfnMalJ9t1wXhj96E&X-Amz-Signature=b45be9478c68b653849e234e82be22467d0d36436d29704661d565e8ee2ccc47&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4EOUB7W%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYBwtXQcrraJJCr3iExOfhprXRJO6Jc2tKzbvi6Pc8pQIgDUsGXuk2VaTxLTa1h0qfRGG5u7BV%2Fk%2FM2n2Jyz7MJnUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaS12DtlMHG2cCRByrcA00BYnjO%2F3Y1ML2G6Nm4nTGjFYg8Fvb77erqBNlZorDYGj06vxGh9DGJGZ62FAQN%2FoBbydli9blxyHY8JjcIw1Jgi%2BwH9mdo7JFWv%2BWUaF1VKkTgVGlL6KO%2B%2Bly%2Fo5NBHlM4yIw9h%2BF3ppuBfiPrKB6e6s0k%2BPpncOSq8iAry5egAQ1SYz4KR%2B5u2qOBdEc7bLn6T6VOoSPywMCv9huVvuTYYhsgS9HvqX62t6N4OegG5C%2BMGibJSstPmykzbQ3pozQ2aIBkSBpETj2bH8%2F%2BpqEX5tpBaD5Y6jYV7%2BIDUMOhCDbv%2FuyeyMVFhP4nCQheuTtG%2FbNNSxR7HBPX1Dk5cI51b7wVqb1SQUdRG%2BmIrPlKFTCksAr0PDRLdfR5PhDnB%2F%2BX%2FCITtd%2Bw2OvRF7FHdIdMYNnkB38UCIhHtjHm4izs1DVeMC0VJlwY4gADVY8A43hV7MzXL7ozTd6z1fwEyGuK7Ljv3AlQ11qPaC3yvzNcIHD%2BeRFTT%2BD%2BVAUh0pXh1zto68hpEPsDxrA9AtkGBQW6t6Xlv%2Br%2FdTf77XvWKCbOY0j9xPp9hF0jXKPmMoOpH2hXGdl6Km78M6prVq5hkpNVKAZGzt0zbynGZeNqRUnVUxnlmmXQuVVArkpkMLT%2B9cAGOqUBhaRMx388onv9mvofrmiZO34E2RJSN4t%2BceH7WnU43oXjq8ej2qWyYq8IKS0gSyxBDJBQeBWnT2Lv2mXXibO8cVMbEUFBoUvT4DKOIfD8auKzOxTi68CXzGEG59kPAO3B9juRGyXnhqjg1zJcF86xwcJ8Je32mlEGc6ZjD8q%2FBCIaLxasnMudgzaPxxW9s3aEXN%2FgShfZ9JwhfnMalJ9t1wXhj96E&X-Amz-Signature=cad703514d1c00f1447683a97c9a5ab19e2073de8d0d393fbb083458c43ccd7b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4EOUB7W%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYBwtXQcrraJJCr3iExOfhprXRJO6Jc2tKzbvi6Pc8pQIgDUsGXuk2VaTxLTa1h0qfRGG5u7BV%2Fk%2FM2n2Jyz7MJnUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaS12DtlMHG2cCRByrcA00BYnjO%2F3Y1ML2G6Nm4nTGjFYg8Fvb77erqBNlZorDYGj06vxGh9DGJGZ62FAQN%2FoBbydli9blxyHY8JjcIw1Jgi%2BwH9mdo7JFWv%2BWUaF1VKkTgVGlL6KO%2B%2Bly%2Fo5NBHlM4yIw9h%2BF3ppuBfiPrKB6e6s0k%2BPpncOSq8iAry5egAQ1SYz4KR%2B5u2qOBdEc7bLn6T6VOoSPywMCv9huVvuTYYhsgS9HvqX62t6N4OegG5C%2BMGibJSstPmykzbQ3pozQ2aIBkSBpETj2bH8%2F%2BpqEX5tpBaD5Y6jYV7%2BIDUMOhCDbv%2FuyeyMVFhP4nCQheuTtG%2FbNNSxR7HBPX1Dk5cI51b7wVqb1SQUdRG%2BmIrPlKFTCksAr0PDRLdfR5PhDnB%2F%2BX%2FCITtd%2Bw2OvRF7FHdIdMYNnkB38UCIhHtjHm4izs1DVeMC0VJlwY4gADVY8A43hV7MzXL7ozTd6z1fwEyGuK7Ljv3AlQ11qPaC3yvzNcIHD%2BeRFTT%2BD%2BVAUh0pXh1zto68hpEPsDxrA9AtkGBQW6t6Xlv%2Br%2FdTf77XvWKCbOY0j9xPp9hF0jXKPmMoOpH2hXGdl6Km78M6prVq5hkpNVKAZGzt0zbynGZeNqRUnVUxnlmmXQuVVArkpkMLT%2B9cAGOqUBhaRMx388onv9mvofrmiZO34E2RJSN4t%2BceH7WnU43oXjq8ej2qWyYq8IKS0gSyxBDJBQeBWnT2Lv2mXXibO8cVMbEUFBoUvT4DKOIfD8auKzOxTi68CXzGEG59kPAO3B9juRGyXnhqjg1zJcF86xwcJ8Je32mlEGc6ZjD8q%2FBCIaLxasnMudgzaPxxW9s3aEXN%2FgShfZ9JwhfnMalJ9t1wXhj96E&X-Amz-Signature=6929840164f690cdd66cb00530f0d709693cf221d3a8a3c3f8389800b78d3332&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4EOUB7W%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYBwtXQcrraJJCr3iExOfhprXRJO6Jc2tKzbvi6Pc8pQIgDUsGXuk2VaTxLTa1h0qfRGG5u7BV%2Fk%2FM2n2Jyz7MJnUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaS12DtlMHG2cCRByrcA00BYnjO%2F3Y1ML2G6Nm4nTGjFYg8Fvb77erqBNlZorDYGj06vxGh9DGJGZ62FAQN%2FoBbydli9blxyHY8JjcIw1Jgi%2BwH9mdo7JFWv%2BWUaF1VKkTgVGlL6KO%2B%2Bly%2Fo5NBHlM4yIw9h%2BF3ppuBfiPrKB6e6s0k%2BPpncOSq8iAry5egAQ1SYz4KR%2B5u2qOBdEc7bLn6T6VOoSPywMCv9huVvuTYYhsgS9HvqX62t6N4OegG5C%2BMGibJSstPmykzbQ3pozQ2aIBkSBpETj2bH8%2F%2BpqEX5tpBaD5Y6jYV7%2BIDUMOhCDbv%2FuyeyMVFhP4nCQheuTtG%2FbNNSxR7HBPX1Dk5cI51b7wVqb1SQUdRG%2BmIrPlKFTCksAr0PDRLdfR5PhDnB%2F%2BX%2FCITtd%2Bw2OvRF7FHdIdMYNnkB38UCIhHtjHm4izs1DVeMC0VJlwY4gADVY8A43hV7MzXL7ozTd6z1fwEyGuK7Ljv3AlQ11qPaC3yvzNcIHD%2BeRFTT%2BD%2BVAUh0pXh1zto68hpEPsDxrA9AtkGBQW6t6Xlv%2Br%2FdTf77XvWKCbOY0j9xPp9hF0jXKPmMoOpH2hXGdl6Km78M6prVq5hkpNVKAZGzt0zbynGZeNqRUnVUxnlmmXQuVVArkpkMLT%2B9cAGOqUBhaRMx388onv9mvofrmiZO34E2RJSN4t%2BceH7WnU43oXjq8ej2qWyYq8IKS0gSyxBDJBQeBWnT2Lv2mXXibO8cVMbEUFBoUvT4DKOIfD8auKzOxTi68CXzGEG59kPAO3B9juRGyXnhqjg1zJcF86xwcJ8Je32mlEGc6ZjD8q%2FBCIaLxasnMudgzaPxxW9s3aEXN%2FgShfZ9JwhfnMalJ9t1wXhj96E&X-Amz-Signature=5103bcc254a160b06c8c6ec48dbf1637f18ee87cb18ada8958f075f660eb19ec&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4EOUB7W%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYBwtXQcrraJJCr3iExOfhprXRJO6Jc2tKzbvi6Pc8pQIgDUsGXuk2VaTxLTa1h0qfRGG5u7BV%2Fk%2FM2n2Jyz7MJnUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaS12DtlMHG2cCRByrcA00BYnjO%2F3Y1ML2G6Nm4nTGjFYg8Fvb77erqBNlZorDYGj06vxGh9DGJGZ62FAQN%2FoBbydli9blxyHY8JjcIw1Jgi%2BwH9mdo7JFWv%2BWUaF1VKkTgVGlL6KO%2B%2Bly%2Fo5NBHlM4yIw9h%2BF3ppuBfiPrKB6e6s0k%2BPpncOSq8iAry5egAQ1SYz4KR%2B5u2qOBdEc7bLn6T6VOoSPywMCv9huVvuTYYhsgS9HvqX62t6N4OegG5C%2BMGibJSstPmykzbQ3pozQ2aIBkSBpETj2bH8%2F%2BpqEX5tpBaD5Y6jYV7%2BIDUMOhCDbv%2FuyeyMVFhP4nCQheuTtG%2FbNNSxR7HBPX1Dk5cI51b7wVqb1SQUdRG%2BmIrPlKFTCksAr0PDRLdfR5PhDnB%2F%2BX%2FCITtd%2Bw2OvRF7FHdIdMYNnkB38UCIhHtjHm4izs1DVeMC0VJlwY4gADVY8A43hV7MzXL7ozTd6z1fwEyGuK7Ljv3AlQ11qPaC3yvzNcIHD%2BeRFTT%2BD%2BVAUh0pXh1zto68hpEPsDxrA9AtkGBQW6t6Xlv%2Br%2FdTf77XvWKCbOY0j9xPp9hF0jXKPmMoOpH2hXGdl6Km78M6prVq5hkpNVKAZGzt0zbynGZeNqRUnVUxnlmmXQuVVArkpkMLT%2B9cAGOqUBhaRMx388onv9mvofrmiZO34E2RJSN4t%2BceH7WnU43oXjq8ej2qWyYq8IKS0gSyxBDJBQeBWnT2Lv2mXXibO8cVMbEUFBoUvT4DKOIfD8auKzOxTi68CXzGEG59kPAO3B9juRGyXnhqjg1zJcF86xwcJ8Je32mlEGc6ZjD8q%2FBCIaLxasnMudgzaPxxW9s3aEXN%2FgShfZ9JwhfnMalJ9t1wXhj96E&X-Amz-Signature=2ddf1d6560a9528ebd9adc081d5c3a4021df19e47e40c80976a637ca76b76e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4EOUB7W%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYBwtXQcrraJJCr3iExOfhprXRJO6Jc2tKzbvi6Pc8pQIgDUsGXuk2VaTxLTa1h0qfRGG5u7BV%2Fk%2FM2n2Jyz7MJnUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaS12DtlMHG2cCRByrcA00BYnjO%2F3Y1ML2G6Nm4nTGjFYg8Fvb77erqBNlZorDYGj06vxGh9DGJGZ62FAQN%2FoBbydli9blxyHY8JjcIw1Jgi%2BwH9mdo7JFWv%2BWUaF1VKkTgVGlL6KO%2B%2Bly%2Fo5NBHlM4yIw9h%2BF3ppuBfiPrKB6e6s0k%2BPpncOSq8iAry5egAQ1SYz4KR%2B5u2qOBdEc7bLn6T6VOoSPywMCv9huVvuTYYhsgS9HvqX62t6N4OegG5C%2BMGibJSstPmykzbQ3pozQ2aIBkSBpETj2bH8%2F%2BpqEX5tpBaD5Y6jYV7%2BIDUMOhCDbv%2FuyeyMVFhP4nCQheuTtG%2FbNNSxR7HBPX1Dk5cI51b7wVqb1SQUdRG%2BmIrPlKFTCksAr0PDRLdfR5PhDnB%2F%2BX%2FCITtd%2Bw2OvRF7FHdIdMYNnkB38UCIhHtjHm4izs1DVeMC0VJlwY4gADVY8A43hV7MzXL7ozTd6z1fwEyGuK7Ljv3AlQ11qPaC3yvzNcIHD%2BeRFTT%2BD%2BVAUh0pXh1zto68hpEPsDxrA9AtkGBQW6t6Xlv%2Br%2FdTf77XvWKCbOY0j9xPp9hF0jXKPmMoOpH2hXGdl6Km78M6prVq5hkpNVKAZGzt0zbynGZeNqRUnVUxnlmmXQuVVArkpkMLT%2B9cAGOqUBhaRMx388onv9mvofrmiZO34E2RJSN4t%2BceH7WnU43oXjq8ej2qWyYq8IKS0gSyxBDJBQeBWnT2Lv2mXXibO8cVMbEUFBoUvT4DKOIfD8auKzOxTi68CXzGEG59kPAO3B9juRGyXnhqjg1zJcF86xwcJ8Je32mlEGc6ZjD8q%2FBCIaLxasnMudgzaPxxW9s3aEXN%2FgShfZ9JwhfnMalJ9t1wXhj96E&X-Amz-Signature=fc8f78e03f312424357e467c889a61640f241c55ec24cd2b1c0486cf5b7881ca&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4EOUB7W%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYBwtXQcrraJJCr3iExOfhprXRJO6Jc2tKzbvi6Pc8pQIgDUsGXuk2VaTxLTa1h0qfRGG5u7BV%2Fk%2FM2n2Jyz7MJnUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaS12DtlMHG2cCRByrcA00BYnjO%2F3Y1ML2G6Nm4nTGjFYg8Fvb77erqBNlZorDYGj06vxGh9DGJGZ62FAQN%2FoBbydli9blxyHY8JjcIw1Jgi%2BwH9mdo7JFWv%2BWUaF1VKkTgVGlL6KO%2B%2Bly%2Fo5NBHlM4yIw9h%2BF3ppuBfiPrKB6e6s0k%2BPpncOSq8iAry5egAQ1SYz4KR%2B5u2qOBdEc7bLn6T6VOoSPywMCv9huVvuTYYhsgS9HvqX62t6N4OegG5C%2BMGibJSstPmykzbQ3pozQ2aIBkSBpETj2bH8%2F%2BpqEX5tpBaD5Y6jYV7%2BIDUMOhCDbv%2FuyeyMVFhP4nCQheuTtG%2FbNNSxR7HBPX1Dk5cI51b7wVqb1SQUdRG%2BmIrPlKFTCksAr0PDRLdfR5PhDnB%2F%2BX%2FCITtd%2Bw2OvRF7FHdIdMYNnkB38UCIhHtjHm4izs1DVeMC0VJlwY4gADVY8A43hV7MzXL7ozTd6z1fwEyGuK7Ljv3AlQ11qPaC3yvzNcIHD%2BeRFTT%2BD%2BVAUh0pXh1zto68hpEPsDxrA9AtkGBQW6t6Xlv%2Br%2FdTf77XvWKCbOY0j9xPp9hF0jXKPmMoOpH2hXGdl6Km78M6prVq5hkpNVKAZGzt0zbynGZeNqRUnVUxnlmmXQuVVArkpkMLT%2B9cAGOqUBhaRMx388onv9mvofrmiZO34E2RJSN4t%2BceH7WnU43oXjq8ej2qWyYq8IKS0gSyxBDJBQeBWnT2Lv2mXXibO8cVMbEUFBoUvT4DKOIfD8auKzOxTi68CXzGEG59kPAO3B9juRGyXnhqjg1zJcF86xwcJ8Je32mlEGc6ZjD8q%2FBCIaLxasnMudgzaPxxW9s3aEXN%2FgShfZ9JwhfnMalJ9t1wXhj96E&X-Amz-Signature=18b8a86407318607b12642cd34c224aca544fb71f1e50a298f054ed202b3b367&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
