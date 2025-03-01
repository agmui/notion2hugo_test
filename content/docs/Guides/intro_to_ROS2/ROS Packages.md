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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSVTZIS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDBoMHppP46hShK%2FSESivZtAv6uf3sz4HZUodBg07fLxQIgDTg8c1YUyHQ5N%2F66iFdIeiH3rUMElc%2FR9obVAn37FtEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcaAk%2Bo34U1P82TLSrcA9KCknfAdqv3QHgDf9lpxibczoria%2FABxYlpcMG8m7ehahRiBjvcG5%2FM0nG%2Fl26BNWrY%2BfbA8p1nvIgZ70qkI20ufiE8gKGkssZFRLxnWQP0dtKjHfQURzowIILBJdE5Dj0WO1Ebrstt8lySbGguCLQ80VEc5sEkUKuFtoM7%2F1atJ7h4V%2BzfbwmJEx3QCoGqWKUckK1RvKlwYpH0oMtgKe2XOMwHp2WRPsO%2B1i0KzIVMAOaou7kGXpSlkrnkugx%2F4PECHbX8RBmYymX7benyJvVXkmNfSgRIClFsi2AOgGCvHXXQrKfZtN6pXjlDZzFWFMmuRujtUKl29o4erbwQ1IogPqsyctUTVPi8S%2FFxOVRGYbPDL904WWYASTfYverTYpeL3gH1cTFWJT5RAEaqqaozC1TPwjEH%2B2Osgw2hbWXMIPLIUrD9hvyBRukNZYdRWvE7kY2sPn%2BY3NKOYNNxS7hE6SH6HIBUN75r1bg5uPD0glMeP1IkNM1%2BhY74gPw6RmmiY%2BfoOJgtMzcxA2o73d4RbeuCGElzw7ksL3DCQvsd6ubWLwHKcgnpC1aT0E2JSFEpJPAJ2XlL5h%2FmqUNx2Dzo6dE45nM6gr3vupMhKn%2BeQvc02X4p8bvMMbFtMJWVjL4GOqUBhcD2VZjtbfYNPz5%2FI33G2XX8yC9g55GsAn5NKuN9io7cpiU6d5Li%2B5A0aVmrMBZ58LoCfVftCyi5R%2FpFgQf73MzP0e%2Fue4nLsT45NFE%2Fe2IEiOqqVdeb%2FBW97jznpBxkI3619khoQ6SHQKljq%2BjxE0iJTMKSGZucen3LERWDpDO3KVWCafySySvLMTtO1BTQWv46R7P%2B7vvkyPjD6vpNopN2CTHh&X-Amz-Signature=525f0974ee12cf3fe6d04772d710093e63ca71c9676c2ad57ab0823b74d1ceef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSVTZIS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDBoMHppP46hShK%2FSESivZtAv6uf3sz4HZUodBg07fLxQIgDTg8c1YUyHQ5N%2F66iFdIeiH3rUMElc%2FR9obVAn37FtEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcaAk%2Bo34U1P82TLSrcA9KCknfAdqv3QHgDf9lpxibczoria%2FABxYlpcMG8m7ehahRiBjvcG5%2FM0nG%2Fl26BNWrY%2BfbA8p1nvIgZ70qkI20ufiE8gKGkssZFRLxnWQP0dtKjHfQURzowIILBJdE5Dj0WO1Ebrstt8lySbGguCLQ80VEc5sEkUKuFtoM7%2F1atJ7h4V%2BzfbwmJEx3QCoGqWKUckK1RvKlwYpH0oMtgKe2XOMwHp2WRPsO%2B1i0KzIVMAOaou7kGXpSlkrnkugx%2F4PECHbX8RBmYymX7benyJvVXkmNfSgRIClFsi2AOgGCvHXXQrKfZtN6pXjlDZzFWFMmuRujtUKl29o4erbwQ1IogPqsyctUTVPi8S%2FFxOVRGYbPDL904WWYASTfYverTYpeL3gH1cTFWJT5RAEaqqaozC1TPwjEH%2B2Osgw2hbWXMIPLIUrD9hvyBRukNZYdRWvE7kY2sPn%2BY3NKOYNNxS7hE6SH6HIBUN75r1bg5uPD0glMeP1IkNM1%2BhY74gPw6RmmiY%2BfoOJgtMzcxA2o73d4RbeuCGElzw7ksL3DCQvsd6ubWLwHKcgnpC1aT0E2JSFEpJPAJ2XlL5h%2FmqUNx2Dzo6dE45nM6gr3vupMhKn%2BeQvc02X4p8bvMMbFtMJWVjL4GOqUBhcD2VZjtbfYNPz5%2FI33G2XX8yC9g55GsAn5NKuN9io7cpiU6d5Li%2B5A0aVmrMBZ58LoCfVftCyi5R%2FpFgQf73MzP0e%2Fue4nLsT45NFE%2Fe2IEiOqqVdeb%2FBW97jznpBxkI3619khoQ6SHQKljq%2BjxE0iJTMKSGZucen3LERWDpDO3KVWCafySySvLMTtO1BTQWv46R7P%2B7vvkyPjD6vpNopN2CTHh&X-Amz-Signature=c8b588d162b65d5df7dff6c0992a1df1895c16f2deea0a7c48fce9e74d3360c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSVTZIS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDBoMHppP46hShK%2FSESivZtAv6uf3sz4HZUodBg07fLxQIgDTg8c1YUyHQ5N%2F66iFdIeiH3rUMElc%2FR9obVAn37FtEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcaAk%2Bo34U1P82TLSrcA9KCknfAdqv3QHgDf9lpxibczoria%2FABxYlpcMG8m7ehahRiBjvcG5%2FM0nG%2Fl26BNWrY%2BfbA8p1nvIgZ70qkI20ufiE8gKGkssZFRLxnWQP0dtKjHfQURzowIILBJdE5Dj0WO1Ebrstt8lySbGguCLQ80VEc5sEkUKuFtoM7%2F1atJ7h4V%2BzfbwmJEx3QCoGqWKUckK1RvKlwYpH0oMtgKe2XOMwHp2WRPsO%2B1i0KzIVMAOaou7kGXpSlkrnkugx%2F4PECHbX8RBmYymX7benyJvVXkmNfSgRIClFsi2AOgGCvHXXQrKfZtN6pXjlDZzFWFMmuRujtUKl29o4erbwQ1IogPqsyctUTVPi8S%2FFxOVRGYbPDL904WWYASTfYverTYpeL3gH1cTFWJT5RAEaqqaozC1TPwjEH%2B2Osgw2hbWXMIPLIUrD9hvyBRukNZYdRWvE7kY2sPn%2BY3NKOYNNxS7hE6SH6HIBUN75r1bg5uPD0glMeP1IkNM1%2BhY74gPw6RmmiY%2BfoOJgtMzcxA2o73d4RbeuCGElzw7ksL3DCQvsd6ubWLwHKcgnpC1aT0E2JSFEpJPAJ2XlL5h%2FmqUNx2Dzo6dE45nM6gr3vupMhKn%2BeQvc02X4p8bvMMbFtMJWVjL4GOqUBhcD2VZjtbfYNPz5%2FI33G2XX8yC9g55GsAn5NKuN9io7cpiU6d5Li%2B5A0aVmrMBZ58LoCfVftCyi5R%2FpFgQf73MzP0e%2Fue4nLsT45NFE%2Fe2IEiOqqVdeb%2FBW97jznpBxkI3619khoQ6SHQKljq%2BjxE0iJTMKSGZucen3LERWDpDO3KVWCafySySvLMTtO1BTQWv46R7P%2B7vvkyPjD6vpNopN2CTHh&X-Amz-Signature=bb555bc67c91649157304fce928b0b236487b767df92d4248dec14708b57bc18&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSVTZIS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDBoMHppP46hShK%2FSESivZtAv6uf3sz4HZUodBg07fLxQIgDTg8c1YUyHQ5N%2F66iFdIeiH3rUMElc%2FR9obVAn37FtEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcaAk%2Bo34U1P82TLSrcA9KCknfAdqv3QHgDf9lpxibczoria%2FABxYlpcMG8m7ehahRiBjvcG5%2FM0nG%2Fl26BNWrY%2BfbA8p1nvIgZ70qkI20ufiE8gKGkssZFRLxnWQP0dtKjHfQURzowIILBJdE5Dj0WO1Ebrstt8lySbGguCLQ80VEc5sEkUKuFtoM7%2F1atJ7h4V%2BzfbwmJEx3QCoGqWKUckK1RvKlwYpH0oMtgKe2XOMwHp2WRPsO%2B1i0KzIVMAOaou7kGXpSlkrnkugx%2F4PECHbX8RBmYymX7benyJvVXkmNfSgRIClFsi2AOgGCvHXXQrKfZtN6pXjlDZzFWFMmuRujtUKl29o4erbwQ1IogPqsyctUTVPi8S%2FFxOVRGYbPDL904WWYASTfYverTYpeL3gH1cTFWJT5RAEaqqaozC1TPwjEH%2B2Osgw2hbWXMIPLIUrD9hvyBRukNZYdRWvE7kY2sPn%2BY3NKOYNNxS7hE6SH6HIBUN75r1bg5uPD0glMeP1IkNM1%2BhY74gPw6RmmiY%2BfoOJgtMzcxA2o73d4RbeuCGElzw7ksL3DCQvsd6ubWLwHKcgnpC1aT0E2JSFEpJPAJ2XlL5h%2FmqUNx2Dzo6dE45nM6gr3vupMhKn%2BeQvc02X4p8bvMMbFtMJWVjL4GOqUBhcD2VZjtbfYNPz5%2FI33G2XX8yC9g55GsAn5NKuN9io7cpiU6d5Li%2B5A0aVmrMBZ58LoCfVftCyi5R%2FpFgQf73MzP0e%2Fue4nLsT45NFE%2Fe2IEiOqqVdeb%2FBW97jznpBxkI3619khoQ6SHQKljq%2BjxE0iJTMKSGZucen3LERWDpDO3KVWCafySySvLMTtO1BTQWv46R7P%2B7vvkyPjD6vpNopN2CTHh&X-Amz-Signature=4cb30522712060bfe6b5e26fc2beec94e336730ad8b7603897d6172478224d16&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSVTZIS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDBoMHppP46hShK%2FSESivZtAv6uf3sz4HZUodBg07fLxQIgDTg8c1YUyHQ5N%2F66iFdIeiH3rUMElc%2FR9obVAn37FtEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcaAk%2Bo34U1P82TLSrcA9KCknfAdqv3QHgDf9lpxibczoria%2FABxYlpcMG8m7ehahRiBjvcG5%2FM0nG%2Fl26BNWrY%2BfbA8p1nvIgZ70qkI20ufiE8gKGkssZFRLxnWQP0dtKjHfQURzowIILBJdE5Dj0WO1Ebrstt8lySbGguCLQ80VEc5sEkUKuFtoM7%2F1atJ7h4V%2BzfbwmJEx3QCoGqWKUckK1RvKlwYpH0oMtgKe2XOMwHp2WRPsO%2B1i0KzIVMAOaou7kGXpSlkrnkugx%2F4PECHbX8RBmYymX7benyJvVXkmNfSgRIClFsi2AOgGCvHXXQrKfZtN6pXjlDZzFWFMmuRujtUKl29o4erbwQ1IogPqsyctUTVPi8S%2FFxOVRGYbPDL904WWYASTfYverTYpeL3gH1cTFWJT5RAEaqqaozC1TPwjEH%2B2Osgw2hbWXMIPLIUrD9hvyBRukNZYdRWvE7kY2sPn%2BY3NKOYNNxS7hE6SH6HIBUN75r1bg5uPD0glMeP1IkNM1%2BhY74gPw6RmmiY%2BfoOJgtMzcxA2o73d4RbeuCGElzw7ksL3DCQvsd6ubWLwHKcgnpC1aT0E2JSFEpJPAJ2XlL5h%2FmqUNx2Dzo6dE45nM6gr3vupMhKn%2BeQvc02X4p8bvMMbFtMJWVjL4GOqUBhcD2VZjtbfYNPz5%2FI33G2XX8yC9g55GsAn5NKuN9io7cpiU6d5Li%2B5A0aVmrMBZ58LoCfVftCyi5R%2FpFgQf73MzP0e%2Fue4nLsT45NFE%2Fe2IEiOqqVdeb%2FBW97jznpBxkI3619khoQ6SHQKljq%2BjxE0iJTMKSGZucen3LERWDpDO3KVWCafySySvLMTtO1BTQWv46R7P%2B7vvkyPjD6vpNopN2CTHh&X-Amz-Signature=7da38812f2ae4109c062431fd45a6692dbb4d10db2cecc568e196af18d9e710e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSVTZIS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDBoMHppP46hShK%2FSESivZtAv6uf3sz4HZUodBg07fLxQIgDTg8c1YUyHQ5N%2F66iFdIeiH3rUMElc%2FR9obVAn37FtEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcaAk%2Bo34U1P82TLSrcA9KCknfAdqv3QHgDf9lpxibczoria%2FABxYlpcMG8m7ehahRiBjvcG5%2FM0nG%2Fl26BNWrY%2BfbA8p1nvIgZ70qkI20ufiE8gKGkssZFRLxnWQP0dtKjHfQURzowIILBJdE5Dj0WO1Ebrstt8lySbGguCLQ80VEc5sEkUKuFtoM7%2F1atJ7h4V%2BzfbwmJEx3QCoGqWKUckK1RvKlwYpH0oMtgKe2XOMwHp2WRPsO%2B1i0KzIVMAOaou7kGXpSlkrnkugx%2F4PECHbX8RBmYymX7benyJvVXkmNfSgRIClFsi2AOgGCvHXXQrKfZtN6pXjlDZzFWFMmuRujtUKl29o4erbwQ1IogPqsyctUTVPi8S%2FFxOVRGYbPDL904WWYASTfYverTYpeL3gH1cTFWJT5RAEaqqaozC1TPwjEH%2B2Osgw2hbWXMIPLIUrD9hvyBRukNZYdRWvE7kY2sPn%2BY3NKOYNNxS7hE6SH6HIBUN75r1bg5uPD0glMeP1IkNM1%2BhY74gPw6RmmiY%2BfoOJgtMzcxA2o73d4RbeuCGElzw7ksL3DCQvsd6ubWLwHKcgnpC1aT0E2JSFEpJPAJ2XlL5h%2FmqUNx2Dzo6dE45nM6gr3vupMhKn%2BeQvc02X4p8bvMMbFtMJWVjL4GOqUBhcD2VZjtbfYNPz5%2FI33G2XX8yC9g55GsAn5NKuN9io7cpiU6d5Li%2B5A0aVmrMBZ58LoCfVftCyi5R%2FpFgQf73MzP0e%2Fue4nLsT45NFE%2Fe2IEiOqqVdeb%2FBW97jznpBxkI3619khoQ6SHQKljq%2BjxE0iJTMKSGZucen3LERWDpDO3KVWCafySySvLMTtO1BTQWv46R7P%2B7vvkyPjD6vpNopN2CTHh&X-Amz-Signature=981758ebb517f2df51e05e619e637fb46b8b334f54e1c9c6640cf4bedc62a66c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSVTZIS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDBoMHppP46hShK%2FSESivZtAv6uf3sz4HZUodBg07fLxQIgDTg8c1YUyHQ5N%2F66iFdIeiH3rUMElc%2FR9obVAn37FtEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcaAk%2Bo34U1P82TLSrcA9KCknfAdqv3QHgDf9lpxibczoria%2FABxYlpcMG8m7ehahRiBjvcG5%2FM0nG%2Fl26BNWrY%2BfbA8p1nvIgZ70qkI20ufiE8gKGkssZFRLxnWQP0dtKjHfQURzowIILBJdE5Dj0WO1Ebrstt8lySbGguCLQ80VEc5sEkUKuFtoM7%2F1atJ7h4V%2BzfbwmJEx3QCoGqWKUckK1RvKlwYpH0oMtgKe2XOMwHp2WRPsO%2B1i0KzIVMAOaou7kGXpSlkrnkugx%2F4PECHbX8RBmYymX7benyJvVXkmNfSgRIClFsi2AOgGCvHXXQrKfZtN6pXjlDZzFWFMmuRujtUKl29o4erbwQ1IogPqsyctUTVPi8S%2FFxOVRGYbPDL904WWYASTfYverTYpeL3gH1cTFWJT5RAEaqqaozC1TPwjEH%2B2Osgw2hbWXMIPLIUrD9hvyBRukNZYdRWvE7kY2sPn%2BY3NKOYNNxS7hE6SH6HIBUN75r1bg5uPD0glMeP1IkNM1%2BhY74gPw6RmmiY%2BfoOJgtMzcxA2o73d4RbeuCGElzw7ksL3DCQvsd6ubWLwHKcgnpC1aT0E2JSFEpJPAJ2XlL5h%2FmqUNx2Dzo6dE45nM6gr3vupMhKn%2BeQvc02X4p8bvMMbFtMJWVjL4GOqUBhcD2VZjtbfYNPz5%2FI33G2XX8yC9g55GsAn5NKuN9io7cpiU6d5Li%2B5A0aVmrMBZ58LoCfVftCyi5R%2FpFgQf73MzP0e%2Fue4nLsT45NFE%2Fe2IEiOqqVdeb%2FBW97jznpBxkI3619khoQ6SHQKljq%2BjxE0iJTMKSGZucen3LERWDpDO3KVWCafySySvLMTtO1BTQWv46R7P%2B7vvkyPjD6vpNopN2CTHh&X-Amz-Signature=f22767b5ccf4397e3c7f4f70426ca06b6446856cf6cfde00d93ed424fcd03201&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
