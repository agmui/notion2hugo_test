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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXZGSBLF%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEjzjZjiqgq%2BI8qHqa6M9GXoettplYxE%2BjznoUiQ5RVDAiEAzotbcIEvYMHR%2FZb4syGqx9yvLLx75PtxlFD6cyUQNi8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJazagVl4%2FGQWEeZyrcAw2BorRot%2BZOmENIz2890Vxe6rhStAnPrAviCvlqJMpIPZwRgOvxi%2FTwqZNl3NrOZLHkqGN12T5YJ5JPg9Wk1bFt%2F2zPNjn2JcVzkNQSKlqwnPVx7GBGWCdDNbBciBzFpdnRCv0z6%2BfBBfD%2BBCctBtXWLHH%2Bz5bAcZO8r7%2F%2FeiSBwUZosSYcCWB03HvjhP80SbMwPqkxMxWPRS7A8FI%2FWrbkjDImErTryperRP8UR3xTnmeH8X5N%2BVBDbgIE9nlupc%2Bl2VgH9fTEUO858K1s%2FKleVJe0aws%2Ff0MewOJWAGA%2FctDYJg71%2B10lpZWPL%2FgDIZ1YyLkB186gemUky04ApaPWq8L3fqBH0O%2FmAstOSCk87fCG98lS3vb4iD9g1N5%2F8uxuwpQGItyCTxDfUPIxUw5CEZk40wj4vAhXcQyUpdiOOfQJU37TXQkCAxnS1T%2Fv6bQzQbbvVE94Y3ofRfaaDvBYZxcC6nDMox3EQdPyfQFFY%2FF2L0VowaAnx%2BDZtiuG6XBR3oH98myRyyhR8BHT6k4xAx5Z8DVg11of37tQldLccjYPJAIX654w9AOewuwJvo1F6sy%2F1%2FYmBV9mxjVrmFRL5%2BnZEOqq9UPagONfdbhx1AqQXzuyxbiYZvXBMLnr28AGOqUBJTMw5cCF7457yKXRyyFhimOhilH2poD31NM8RbK72KDrdzYtq64pkncKWpbEx128k5vN04Hs1COcDYyUcHjNhgexeUjhdcdF%2FeQTT9T8SoTdBjuAKPcCnywDA%2BEYnuRxVSM%2FiJHYBvZUa4oPGTy%2Fn8n3QNmTqcQ%2BWNB9I5u5hdeIjq2kBNHz%2FmnMkcGIYxHiC%2BvoAfq0k1Mf%2FaOu0ZWAmsOmnEAG&X-Amz-Signature=23a3b1a7d4b80f205a46bf9e9ea5c959bbaa926221f1a849ba9a215559a5d092&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXZGSBLF%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEjzjZjiqgq%2BI8qHqa6M9GXoettplYxE%2BjznoUiQ5RVDAiEAzotbcIEvYMHR%2FZb4syGqx9yvLLx75PtxlFD6cyUQNi8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJazagVl4%2FGQWEeZyrcAw2BorRot%2BZOmENIz2890Vxe6rhStAnPrAviCvlqJMpIPZwRgOvxi%2FTwqZNl3NrOZLHkqGN12T5YJ5JPg9Wk1bFt%2F2zPNjn2JcVzkNQSKlqwnPVx7GBGWCdDNbBciBzFpdnRCv0z6%2BfBBfD%2BBCctBtXWLHH%2Bz5bAcZO8r7%2F%2FeiSBwUZosSYcCWB03HvjhP80SbMwPqkxMxWPRS7A8FI%2FWrbkjDImErTryperRP8UR3xTnmeH8X5N%2BVBDbgIE9nlupc%2Bl2VgH9fTEUO858K1s%2FKleVJe0aws%2Ff0MewOJWAGA%2FctDYJg71%2B10lpZWPL%2FgDIZ1YyLkB186gemUky04ApaPWq8L3fqBH0O%2FmAstOSCk87fCG98lS3vb4iD9g1N5%2F8uxuwpQGItyCTxDfUPIxUw5CEZk40wj4vAhXcQyUpdiOOfQJU37TXQkCAxnS1T%2Fv6bQzQbbvVE94Y3ofRfaaDvBYZxcC6nDMox3EQdPyfQFFY%2FF2L0VowaAnx%2BDZtiuG6XBR3oH98myRyyhR8BHT6k4xAx5Z8DVg11of37tQldLccjYPJAIX654w9AOewuwJvo1F6sy%2F1%2FYmBV9mxjVrmFRL5%2BnZEOqq9UPagONfdbhx1AqQXzuyxbiYZvXBMLnr28AGOqUBJTMw5cCF7457yKXRyyFhimOhilH2poD31NM8RbK72KDrdzYtq64pkncKWpbEx128k5vN04Hs1COcDYyUcHjNhgexeUjhdcdF%2FeQTT9T8SoTdBjuAKPcCnywDA%2BEYnuRxVSM%2FiJHYBvZUa4oPGTy%2Fn8n3QNmTqcQ%2BWNB9I5u5hdeIjq2kBNHz%2FmnMkcGIYxHiC%2BvoAfq0k1Mf%2FaOu0ZWAmsOmnEAG&X-Amz-Signature=a7a190b9b82d6d1860088004d77d52d9a863dab60b2b04f25548dcf4355ce6cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXZGSBLF%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEjzjZjiqgq%2BI8qHqa6M9GXoettplYxE%2BjznoUiQ5RVDAiEAzotbcIEvYMHR%2FZb4syGqx9yvLLx75PtxlFD6cyUQNi8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJazagVl4%2FGQWEeZyrcAw2BorRot%2BZOmENIz2890Vxe6rhStAnPrAviCvlqJMpIPZwRgOvxi%2FTwqZNl3NrOZLHkqGN12T5YJ5JPg9Wk1bFt%2F2zPNjn2JcVzkNQSKlqwnPVx7GBGWCdDNbBciBzFpdnRCv0z6%2BfBBfD%2BBCctBtXWLHH%2Bz5bAcZO8r7%2F%2FeiSBwUZosSYcCWB03HvjhP80SbMwPqkxMxWPRS7A8FI%2FWrbkjDImErTryperRP8UR3xTnmeH8X5N%2BVBDbgIE9nlupc%2Bl2VgH9fTEUO858K1s%2FKleVJe0aws%2Ff0MewOJWAGA%2FctDYJg71%2B10lpZWPL%2FgDIZ1YyLkB186gemUky04ApaPWq8L3fqBH0O%2FmAstOSCk87fCG98lS3vb4iD9g1N5%2F8uxuwpQGItyCTxDfUPIxUw5CEZk40wj4vAhXcQyUpdiOOfQJU37TXQkCAxnS1T%2Fv6bQzQbbvVE94Y3ofRfaaDvBYZxcC6nDMox3EQdPyfQFFY%2FF2L0VowaAnx%2BDZtiuG6XBR3oH98myRyyhR8BHT6k4xAx5Z8DVg11of37tQldLccjYPJAIX654w9AOewuwJvo1F6sy%2F1%2FYmBV9mxjVrmFRL5%2BnZEOqq9UPagONfdbhx1AqQXzuyxbiYZvXBMLnr28AGOqUBJTMw5cCF7457yKXRyyFhimOhilH2poD31NM8RbK72KDrdzYtq64pkncKWpbEx128k5vN04Hs1COcDYyUcHjNhgexeUjhdcdF%2FeQTT9T8SoTdBjuAKPcCnywDA%2BEYnuRxVSM%2FiJHYBvZUa4oPGTy%2Fn8n3QNmTqcQ%2BWNB9I5u5hdeIjq2kBNHz%2FmnMkcGIYxHiC%2BvoAfq0k1Mf%2FaOu0ZWAmsOmnEAG&X-Amz-Signature=cefe0764b17a6621a0fd1d12e1d9ae974a21bbc21510f13d79c175ac91a9c1eb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXZGSBLF%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEjzjZjiqgq%2BI8qHqa6M9GXoettplYxE%2BjznoUiQ5RVDAiEAzotbcIEvYMHR%2FZb4syGqx9yvLLx75PtxlFD6cyUQNi8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJazagVl4%2FGQWEeZyrcAw2BorRot%2BZOmENIz2890Vxe6rhStAnPrAviCvlqJMpIPZwRgOvxi%2FTwqZNl3NrOZLHkqGN12T5YJ5JPg9Wk1bFt%2F2zPNjn2JcVzkNQSKlqwnPVx7GBGWCdDNbBciBzFpdnRCv0z6%2BfBBfD%2BBCctBtXWLHH%2Bz5bAcZO8r7%2F%2FeiSBwUZosSYcCWB03HvjhP80SbMwPqkxMxWPRS7A8FI%2FWrbkjDImErTryperRP8UR3xTnmeH8X5N%2BVBDbgIE9nlupc%2Bl2VgH9fTEUO858K1s%2FKleVJe0aws%2Ff0MewOJWAGA%2FctDYJg71%2B10lpZWPL%2FgDIZ1YyLkB186gemUky04ApaPWq8L3fqBH0O%2FmAstOSCk87fCG98lS3vb4iD9g1N5%2F8uxuwpQGItyCTxDfUPIxUw5CEZk40wj4vAhXcQyUpdiOOfQJU37TXQkCAxnS1T%2Fv6bQzQbbvVE94Y3ofRfaaDvBYZxcC6nDMox3EQdPyfQFFY%2FF2L0VowaAnx%2BDZtiuG6XBR3oH98myRyyhR8BHT6k4xAx5Z8DVg11of37tQldLccjYPJAIX654w9AOewuwJvo1F6sy%2F1%2FYmBV9mxjVrmFRL5%2BnZEOqq9UPagONfdbhx1AqQXzuyxbiYZvXBMLnr28AGOqUBJTMw5cCF7457yKXRyyFhimOhilH2poD31NM8RbK72KDrdzYtq64pkncKWpbEx128k5vN04Hs1COcDYyUcHjNhgexeUjhdcdF%2FeQTT9T8SoTdBjuAKPcCnywDA%2BEYnuRxVSM%2FiJHYBvZUa4oPGTy%2Fn8n3QNmTqcQ%2BWNB9I5u5hdeIjq2kBNHz%2FmnMkcGIYxHiC%2BvoAfq0k1Mf%2FaOu0ZWAmsOmnEAG&X-Amz-Signature=3f648f4684177ecabd773ff5ece13b3ecc5ce6fca015158b4e1a106a03276906&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXZGSBLF%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEjzjZjiqgq%2BI8qHqa6M9GXoettplYxE%2BjznoUiQ5RVDAiEAzotbcIEvYMHR%2FZb4syGqx9yvLLx75PtxlFD6cyUQNi8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJazagVl4%2FGQWEeZyrcAw2BorRot%2BZOmENIz2890Vxe6rhStAnPrAviCvlqJMpIPZwRgOvxi%2FTwqZNl3NrOZLHkqGN12T5YJ5JPg9Wk1bFt%2F2zPNjn2JcVzkNQSKlqwnPVx7GBGWCdDNbBciBzFpdnRCv0z6%2BfBBfD%2BBCctBtXWLHH%2Bz5bAcZO8r7%2F%2FeiSBwUZosSYcCWB03HvjhP80SbMwPqkxMxWPRS7A8FI%2FWrbkjDImErTryperRP8UR3xTnmeH8X5N%2BVBDbgIE9nlupc%2Bl2VgH9fTEUO858K1s%2FKleVJe0aws%2Ff0MewOJWAGA%2FctDYJg71%2B10lpZWPL%2FgDIZ1YyLkB186gemUky04ApaPWq8L3fqBH0O%2FmAstOSCk87fCG98lS3vb4iD9g1N5%2F8uxuwpQGItyCTxDfUPIxUw5CEZk40wj4vAhXcQyUpdiOOfQJU37TXQkCAxnS1T%2Fv6bQzQbbvVE94Y3ofRfaaDvBYZxcC6nDMox3EQdPyfQFFY%2FF2L0VowaAnx%2BDZtiuG6XBR3oH98myRyyhR8BHT6k4xAx5Z8DVg11of37tQldLccjYPJAIX654w9AOewuwJvo1F6sy%2F1%2FYmBV9mxjVrmFRL5%2BnZEOqq9UPagONfdbhx1AqQXzuyxbiYZvXBMLnr28AGOqUBJTMw5cCF7457yKXRyyFhimOhilH2poD31NM8RbK72KDrdzYtq64pkncKWpbEx128k5vN04Hs1COcDYyUcHjNhgexeUjhdcdF%2FeQTT9T8SoTdBjuAKPcCnywDA%2BEYnuRxVSM%2FiJHYBvZUa4oPGTy%2Fn8n3QNmTqcQ%2BWNB9I5u5hdeIjq2kBNHz%2FmnMkcGIYxHiC%2BvoAfq0k1Mf%2FaOu0ZWAmsOmnEAG&X-Amz-Signature=ef2a52f675ad64f21eda21048430800d0fc687792b597e80509a75160d3c9570&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXZGSBLF%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEjzjZjiqgq%2BI8qHqa6M9GXoettplYxE%2BjznoUiQ5RVDAiEAzotbcIEvYMHR%2FZb4syGqx9yvLLx75PtxlFD6cyUQNi8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJazagVl4%2FGQWEeZyrcAw2BorRot%2BZOmENIz2890Vxe6rhStAnPrAviCvlqJMpIPZwRgOvxi%2FTwqZNl3NrOZLHkqGN12T5YJ5JPg9Wk1bFt%2F2zPNjn2JcVzkNQSKlqwnPVx7GBGWCdDNbBciBzFpdnRCv0z6%2BfBBfD%2BBCctBtXWLHH%2Bz5bAcZO8r7%2F%2FeiSBwUZosSYcCWB03HvjhP80SbMwPqkxMxWPRS7A8FI%2FWrbkjDImErTryperRP8UR3xTnmeH8X5N%2BVBDbgIE9nlupc%2Bl2VgH9fTEUO858K1s%2FKleVJe0aws%2Ff0MewOJWAGA%2FctDYJg71%2B10lpZWPL%2FgDIZ1YyLkB186gemUky04ApaPWq8L3fqBH0O%2FmAstOSCk87fCG98lS3vb4iD9g1N5%2F8uxuwpQGItyCTxDfUPIxUw5CEZk40wj4vAhXcQyUpdiOOfQJU37TXQkCAxnS1T%2Fv6bQzQbbvVE94Y3ofRfaaDvBYZxcC6nDMox3EQdPyfQFFY%2FF2L0VowaAnx%2BDZtiuG6XBR3oH98myRyyhR8BHT6k4xAx5Z8DVg11of37tQldLccjYPJAIX654w9AOewuwJvo1F6sy%2F1%2FYmBV9mxjVrmFRL5%2BnZEOqq9UPagONfdbhx1AqQXzuyxbiYZvXBMLnr28AGOqUBJTMw5cCF7457yKXRyyFhimOhilH2poD31NM8RbK72KDrdzYtq64pkncKWpbEx128k5vN04Hs1COcDYyUcHjNhgexeUjhdcdF%2FeQTT9T8SoTdBjuAKPcCnywDA%2BEYnuRxVSM%2FiJHYBvZUa4oPGTy%2Fn8n3QNmTqcQ%2BWNB9I5u5hdeIjq2kBNHz%2FmnMkcGIYxHiC%2BvoAfq0k1Mf%2FaOu0ZWAmsOmnEAG&X-Amz-Signature=839e3f204ffa0032bf2174ac0bccda9914d27453ea90c1aad0d917a6c1f059c2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXZGSBLF%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEjzjZjiqgq%2BI8qHqa6M9GXoettplYxE%2BjznoUiQ5RVDAiEAzotbcIEvYMHR%2FZb4syGqx9yvLLx75PtxlFD6cyUQNi8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJazagVl4%2FGQWEeZyrcAw2BorRot%2BZOmENIz2890Vxe6rhStAnPrAviCvlqJMpIPZwRgOvxi%2FTwqZNl3NrOZLHkqGN12T5YJ5JPg9Wk1bFt%2F2zPNjn2JcVzkNQSKlqwnPVx7GBGWCdDNbBciBzFpdnRCv0z6%2BfBBfD%2BBCctBtXWLHH%2Bz5bAcZO8r7%2F%2FeiSBwUZosSYcCWB03HvjhP80SbMwPqkxMxWPRS7A8FI%2FWrbkjDImErTryperRP8UR3xTnmeH8X5N%2BVBDbgIE9nlupc%2Bl2VgH9fTEUO858K1s%2FKleVJe0aws%2Ff0MewOJWAGA%2FctDYJg71%2B10lpZWPL%2FgDIZ1YyLkB186gemUky04ApaPWq8L3fqBH0O%2FmAstOSCk87fCG98lS3vb4iD9g1N5%2F8uxuwpQGItyCTxDfUPIxUw5CEZk40wj4vAhXcQyUpdiOOfQJU37TXQkCAxnS1T%2Fv6bQzQbbvVE94Y3ofRfaaDvBYZxcC6nDMox3EQdPyfQFFY%2FF2L0VowaAnx%2BDZtiuG6XBR3oH98myRyyhR8BHT6k4xAx5Z8DVg11of37tQldLccjYPJAIX654w9AOewuwJvo1F6sy%2F1%2FYmBV9mxjVrmFRL5%2BnZEOqq9UPagONfdbhx1AqQXzuyxbiYZvXBMLnr28AGOqUBJTMw5cCF7457yKXRyyFhimOhilH2poD31NM8RbK72KDrdzYtq64pkncKWpbEx128k5vN04Hs1COcDYyUcHjNhgexeUjhdcdF%2FeQTT9T8SoTdBjuAKPcCnywDA%2BEYnuRxVSM%2FiJHYBvZUa4oPGTy%2Fn8n3QNmTqcQ%2BWNB9I5u5hdeIjq2kBNHz%2FmnMkcGIYxHiC%2BvoAfq0k1Mf%2FaOu0ZWAmsOmnEAG&X-Amz-Signature=7322dd83c7e0b65b7387c9732046c3eaac82ae9eaba2ba6713ca0801a9346e67&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
