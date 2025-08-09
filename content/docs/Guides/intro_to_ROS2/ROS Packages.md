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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=a5fda261d7a9ea727f8ffce67e5914cf0c6654eb2238efdb796c3b240a55c475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=f8045e05c4cdd1c2f04c18280a1b3f2559c90f15f6b3be7fe8cbcb28f52bab16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=372566b7c7c58fddabae470ac340305142941035c4862a61bbcad0cc1883010b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=0fb9e845a4f368bf956ca32e40a27273401ce95b24a5159674b82f44a68abb74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=0e2c9b51ba790f9f73814d86be0c89915dd0ddd4c658ec274014a410c17bf703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=f5e7995932bac88dd2078a5b5d9b281050f1195dbbd6cec47aae8e3f9e054685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=cb3ea3cb51a63f62fefeab7f051095842934df7a192b464bee3adc39bbb9f962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
