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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRKG7VO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADpOAlpF97RLbiCK8mXkXE%2B1HVzLmpFXE3g53a26JQIAiAoGdGCGU8fQ2ack1YnfJ4Aq2xSoRyzQZFG1%2BkZpOkgMSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLBdhre8uyHIsKqd1KtwDr8lRqRFfVOrgF2wQnMyfuBggSD32qHoKme1Bar2KTo5XctqXGq%2BH8%2BcXE8fTdQqRQpCki9H2Lnb5eiyYCge7f6KU5GhalL6t0iA%2FSJz%2FwenghCQGLY2YfP0gXCynu%2BPoolGcePf67Qf42beuZmrIbCjwK2lf2xsiUeK7CCs7v8FIjWCBaFBtW6fI%2F2XROaWInrqEq%2F1K7xw1G7PEZLMVIYaU8KRnwuDX4EFpozu5%2FADN%2FwKJ%2Bv2wgLHgot859NFvY6T%2F9UG8Ek82RDS%2F%2FV4t3PX8qg5YyQV2oOUD6PS045N%2BiMncQvb1OywhPwv5f2EkGs7qOvzZ6zlDuvNsbFPKhHeTh92tKr6G4gHChUuyRSkbIpmSeDFQc%2B4TYas5ymJzEacvrn%2FcXpygo3yhvls3Tv97QUZn5UXmDhICNW7qCNbrX106jjLIKlyFroodz0TqCjrq4hz2%2FAVRl78KF4jA7XNr9U%2BGAy5BDUEDm0q6FhYlsOuoVcxczMf1x3FzhtBQdgzD9SFy0bO7naip8SYFsTYdY4wKdVSB%2FKv%2BYlABlhztbncF4VYClpn0W2ycGJI1MfGICEZ%2FUqkf4c7Hc9NKJy5rGFhd5ne6GC6HdAvrCKSq7bc%2F6SnvRXfkD2Aw34SKwwY6pgGCRx7FJ0IRUo%2Ft7UD9j%2B45wESRfknHZ5YyppNBYsnwUM7zzWRsvm2lhEN4OBS0Ij75AfL1VGtyWLG%2B%2FrAcFc59Z9MvTtSyjup0drvRdPIYpzVC2i8ayN%2FV5hCEpcoJluKNALhhGs9Z1O2MskS92gRpM0OPkYKxNeNiMbii1wgcdVRqaNQG8h7LAYF0Yk8Fn0UUjkC6ZfXmN9tgSWinxO1Inh8%2BUZUX&X-Amz-Signature=70c38cadf862e95a6ed15d4168892a82ddf0dab4483eb9b5e06d5f362c6a90a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRKG7VO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADpOAlpF97RLbiCK8mXkXE%2B1HVzLmpFXE3g53a26JQIAiAoGdGCGU8fQ2ack1YnfJ4Aq2xSoRyzQZFG1%2BkZpOkgMSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLBdhre8uyHIsKqd1KtwDr8lRqRFfVOrgF2wQnMyfuBggSD32qHoKme1Bar2KTo5XctqXGq%2BH8%2BcXE8fTdQqRQpCki9H2Lnb5eiyYCge7f6KU5GhalL6t0iA%2FSJz%2FwenghCQGLY2YfP0gXCynu%2BPoolGcePf67Qf42beuZmrIbCjwK2lf2xsiUeK7CCs7v8FIjWCBaFBtW6fI%2F2XROaWInrqEq%2F1K7xw1G7PEZLMVIYaU8KRnwuDX4EFpozu5%2FADN%2FwKJ%2Bv2wgLHgot859NFvY6T%2F9UG8Ek82RDS%2F%2FV4t3PX8qg5YyQV2oOUD6PS045N%2BiMncQvb1OywhPwv5f2EkGs7qOvzZ6zlDuvNsbFPKhHeTh92tKr6G4gHChUuyRSkbIpmSeDFQc%2B4TYas5ymJzEacvrn%2FcXpygo3yhvls3Tv97QUZn5UXmDhICNW7qCNbrX106jjLIKlyFroodz0TqCjrq4hz2%2FAVRl78KF4jA7XNr9U%2BGAy5BDUEDm0q6FhYlsOuoVcxczMf1x3FzhtBQdgzD9SFy0bO7naip8SYFsTYdY4wKdVSB%2FKv%2BYlABlhztbncF4VYClpn0W2ycGJI1MfGICEZ%2FUqkf4c7Hc9NKJy5rGFhd5ne6GC6HdAvrCKSq7bc%2F6SnvRXfkD2Aw34SKwwY6pgGCRx7FJ0IRUo%2Ft7UD9j%2B45wESRfknHZ5YyppNBYsnwUM7zzWRsvm2lhEN4OBS0Ij75AfL1VGtyWLG%2B%2FrAcFc59Z9MvTtSyjup0drvRdPIYpzVC2i8ayN%2FV5hCEpcoJluKNALhhGs9Z1O2MskS92gRpM0OPkYKxNeNiMbii1wgcdVRqaNQG8h7LAYF0Yk8Fn0UUjkC6ZfXmN9tgSWinxO1Inh8%2BUZUX&X-Amz-Signature=17697cfdefb69e21860330d29e306d904478ff9b54b82763472a5d1275e24fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRKG7VO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADpOAlpF97RLbiCK8mXkXE%2B1HVzLmpFXE3g53a26JQIAiAoGdGCGU8fQ2ack1YnfJ4Aq2xSoRyzQZFG1%2BkZpOkgMSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLBdhre8uyHIsKqd1KtwDr8lRqRFfVOrgF2wQnMyfuBggSD32qHoKme1Bar2KTo5XctqXGq%2BH8%2BcXE8fTdQqRQpCki9H2Lnb5eiyYCge7f6KU5GhalL6t0iA%2FSJz%2FwenghCQGLY2YfP0gXCynu%2BPoolGcePf67Qf42beuZmrIbCjwK2lf2xsiUeK7CCs7v8FIjWCBaFBtW6fI%2F2XROaWInrqEq%2F1K7xw1G7PEZLMVIYaU8KRnwuDX4EFpozu5%2FADN%2FwKJ%2Bv2wgLHgot859NFvY6T%2F9UG8Ek82RDS%2F%2FV4t3PX8qg5YyQV2oOUD6PS045N%2BiMncQvb1OywhPwv5f2EkGs7qOvzZ6zlDuvNsbFPKhHeTh92tKr6G4gHChUuyRSkbIpmSeDFQc%2B4TYas5ymJzEacvrn%2FcXpygo3yhvls3Tv97QUZn5UXmDhICNW7qCNbrX106jjLIKlyFroodz0TqCjrq4hz2%2FAVRl78KF4jA7XNr9U%2BGAy5BDUEDm0q6FhYlsOuoVcxczMf1x3FzhtBQdgzD9SFy0bO7naip8SYFsTYdY4wKdVSB%2FKv%2BYlABlhztbncF4VYClpn0W2ycGJI1MfGICEZ%2FUqkf4c7Hc9NKJy5rGFhd5ne6GC6HdAvrCKSq7bc%2F6SnvRXfkD2Aw34SKwwY6pgGCRx7FJ0IRUo%2Ft7UD9j%2B45wESRfknHZ5YyppNBYsnwUM7zzWRsvm2lhEN4OBS0Ij75AfL1VGtyWLG%2B%2FrAcFc59Z9MvTtSyjup0drvRdPIYpzVC2i8ayN%2FV5hCEpcoJluKNALhhGs9Z1O2MskS92gRpM0OPkYKxNeNiMbii1wgcdVRqaNQG8h7LAYF0Yk8Fn0UUjkC6ZfXmN9tgSWinxO1Inh8%2BUZUX&X-Amz-Signature=ffa2f4bd1fc26ec795dd74bebf2a496f441163fda13cc7eaef37bce3091ad51c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRKG7VO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADpOAlpF97RLbiCK8mXkXE%2B1HVzLmpFXE3g53a26JQIAiAoGdGCGU8fQ2ack1YnfJ4Aq2xSoRyzQZFG1%2BkZpOkgMSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLBdhre8uyHIsKqd1KtwDr8lRqRFfVOrgF2wQnMyfuBggSD32qHoKme1Bar2KTo5XctqXGq%2BH8%2BcXE8fTdQqRQpCki9H2Lnb5eiyYCge7f6KU5GhalL6t0iA%2FSJz%2FwenghCQGLY2YfP0gXCynu%2BPoolGcePf67Qf42beuZmrIbCjwK2lf2xsiUeK7CCs7v8FIjWCBaFBtW6fI%2F2XROaWInrqEq%2F1K7xw1G7PEZLMVIYaU8KRnwuDX4EFpozu5%2FADN%2FwKJ%2Bv2wgLHgot859NFvY6T%2F9UG8Ek82RDS%2F%2FV4t3PX8qg5YyQV2oOUD6PS045N%2BiMncQvb1OywhPwv5f2EkGs7qOvzZ6zlDuvNsbFPKhHeTh92tKr6G4gHChUuyRSkbIpmSeDFQc%2B4TYas5ymJzEacvrn%2FcXpygo3yhvls3Tv97QUZn5UXmDhICNW7qCNbrX106jjLIKlyFroodz0TqCjrq4hz2%2FAVRl78KF4jA7XNr9U%2BGAy5BDUEDm0q6FhYlsOuoVcxczMf1x3FzhtBQdgzD9SFy0bO7naip8SYFsTYdY4wKdVSB%2FKv%2BYlABlhztbncF4VYClpn0W2ycGJI1MfGICEZ%2FUqkf4c7Hc9NKJy5rGFhd5ne6GC6HdAvrCKSq7bc%2F6SnvRXfkD2Aw34SKwwY6pgGCRx7FJ0IRUo%2Ft7UD9j%2B45wESRfknHZ5YyppNBYsnwUM7zzWRsvm2lhEN4OBS0Ij75AfL1VGtyWLG%2B%2FrAcFc59Z9MvTtSyjup0drvRdPIYpzVC2i8ayN%2FV5hCEpcoJluKNALhhGs9Z1O2MskS92gRpM0OPkYKxNeNiMbii1wgcdVRqaNQG8h7LAYF0Yk8Fn0UUjkC6ZfXmN9tgSWinxO1Inh8%2BUZUX&X-Amz-Signature=5b1708b667cb95c6b15acf3e30d526869f91fce1841d47b4668ba8fa7b740297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRKG7VO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADpOAlpF97RLbiCK8mXkXE%2B1HVzLmpFXE3g53a26JQIAiAoGdGCGU8fQ2ack1YnfJ4Aq2xSoRyzQZFG1%2BkZpOkgMSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLBdhre8uyHIsKqd1KtwDr8lRqRFfVOrgF2wQnMyfuBggSD32qHoKme1Bar2KTo5XctqXGq%2BH8%2BcXE8fTdQqRQpCki9H2Lnb5eiyYCge7f6KU5GhalL6t0iA%2FSJz%2FwenghCQGLY2YfP0gXCynu%2BPoolGcePf67Qf42beuZmrIbCjwK2lf2xsiUeK7CCs7v8FIjWCBaFBtW6fI%2F2XROaWInrqEq%2F1K7xw1G7PEZLMVIYaU8KRnwuDX4EFpozu5%2FADN%2FwKJ%2Bv2wgLHgot859NFvY6T%2F9UG8Ek82RDS%2F%2FV4t3PX8qg5YyQV2oOUD6PS045N%2BiMncQvb1OywhPwv5f2EkGs7qOvzZ6zlDuvNsbFPKhHeTh92tKr6G4gHChUuyRSkbIpmSeDFQc%2B4TYas5ymJzEacvrn%2FcXpygo3yhvls3Tv97QUZn5UXmDhICNW7qCNbrX106jjLIKlyFroodz0TqCjrq4hz2%2FAVRl78KF4jA7XNr9U%2BGAy5BDUEDm0q6FhYlsOuoVcxczMf1x3FzhtBQdgzD9SFy0bO7naip8SYFsTYdY4wKdVSB%2FKv%2BYlABlhztbncF4VYClpn0W2ycGJI1MfGICEZ%2FUqkf4c7Hc9NKJy5rGFhd5ne6GC6HdAvrCKSq7bc%2F6SnvRXfkD2Aw34SKwwY6pgGCRx7FJ0IRUo%2Ft7UD9j%2B45wESRfknHZ5YyppNBYsnwUM7zzWRsvm2lhEN4OBS0Ij75AfL1VGtyWLG%2B%2FrAcFc59Z9MvTtSyjup0drvRdPIYpzVC2i8ayN%2FV5hCEpcoJluKNALhhGs9Z1O2MskS92gRpM0OPkYKxNeNiMbii1wgcdVRqaNQG8h7LAYF0Yk8Fn0UUjkC6ZfXmN9tgSWinxO1Inh8%2BUZUX&X-Amz-Signature=662213188bea010adeccd9a0d526f9337c4baf406b76934d815a64a411da5d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRKG7VO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADpOAlpF97RLbiCK8mXkXE%2B1HVzLmpFXE3g53a26JQIAiAoGdGCGU8fQ2ack1YnfJ4Aq2xSoRyzQZFG1%2BkZpOkgMSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLBdhre8uyHIsKqd1KtwDr8lRqRFfVOrgF2wQnMyfuBggSD32qHoKme1Bar2KTo5XctqXGq%2BH8%2BcXE8fTdQqRQpCki9H2Lnb5eiyYCge7f6KU5GhalL6t0iA%2FSJz%2FwenghCQGLY2YfP0gXCynu%2BPoolGcePf67Qf42beuZmrIbCjwK2lf2xsiUeK7CCs7v8FIjWCBaFBtW6fI%2F2XROaWInrqEq%2F1K7xw1G7PEZLMVIYaU8KRnwuDX4EFpozu5%2FADN%2FwKJ%2Bv2wgLHgot859NFvY6T%2F9UG8Ek82RDS%2F%2FV4t3PX8qg5YyQV2oOUD6PS045N%2BiMncQvb1OywhPwv5f2EkGs7qOvzZ6zlDuvNsbFPKhHeTh92tKr6G4gHChUuyRSkbIpmSeDFQc%2B4TYas5ymJzEacvrn%2FcXpygo3yhvls3Tv97QUZn5UXmDhICNW7qCNbrX106jjLIKlyFroodz0TqCjrq4hz2%2FAVRl78KF4jA7XNr9U%2BGAy5BDUEDm0q6FhYlsOuoVcxczMf1x3FzhtBQdgzD9SFy0bO7naip8SYFsTYdY4wKdVSB%2FKv%2BYlABlhztbncF4VYClpn0W2ycGJI1MfGICEZ%2FUqkf4c7Hc9NKJy5rGFhd5ne6GC6HdAvrCKSq7bc%2F6SnvRXfkD2Aw34SKwwY6pgGCRx7FJ0IRUo%2Ft7UD9j%2B45wESRfknHZ5YyppNBYsnwUM7zzWRsvm2lhEN4OBS0Ij75AfL1VGtyWLG%2B%2FrAcFc59Z9MvTtSyjup0drvRdPIYpzVC2i8ayN%2FV5hCEpcoJluKNALhhGs9Z1O2MskS92gRpM0OPkYKxNeNiMbii1wgcdVRqaNQG8h7LAYF0Yk8Fn0UUjkC6ZfXmN9tgSWinxO1Inh8%2BUZUX&X-Amz-Signature=dde13bf3a3f7f666d250ab2af20f9c11b0a3f46bc742600088500f93bbc8d0ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRKG7VO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADpOAlpF97RLbiCK8mXkXE%2B1HVzLmpFXE3g53a26JQIAiAoGdGCGU8fQ2ack1YnfJ4Aq2xSoRyzQZFG1%2BkZpOkgMSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLBdhre8uyHIsKqd1KtwDr8lRqRFfVOrgF2wQnMyfuBggSD32qHoKme1Bar2KTo5XctqXGq%2BH8%2BcXE8fTdQqRQpCki9H2Lnb5eiyYCge7f6KU5GhalL6t0iA%2FSJz%2FwenghCQGLY2YfP0gXCynu%2BPoolGcePf67Qf42beuZmrIbCjwK2lf2xsiUeK7CCs7v8FIjWCBaFBtW6fI%2F2XROaWInrqEq%2F1K7xw1G7PEZLMVIYaU8KRnwuDX4EFpozu5%2FADN%2FwKJ%2Bv2wgLHgot859NFvY6T%2F9UG8Ek82RDS%2F%2FV4t3PX8qg5YyQV2oOUD6PS045N%2BiMncQvb1OywhPwv5f2EkGs7qOvzZ6zlDuvNsbFPKhHeTh92tKr6G4gHChUuyRSkbIpmSeDFQc%2B4TYas5ymJzEacvrn%2FcXpygo3yhvls3Tv97QUZn5UXmDhICNW7qCNbrX106jjLIKlyFroodz0TqCjrq4hz2%2FAVRl78KF4jA7XNr9U%2BGAy5BDUEDm0q6FhYlsOuoVcxczMf1x3FzhtBQdgzD9SFy0bO7naip8SYFsTYdY4wKdVSB%2FKv%2BYlABlhztbncF4VYClpn0W2ycGJI1MfGICEZ%2FUqkf4c7Hc9NKJy5rGFhd5ne6GC6HdAvrCKSq7bc%2F6SnvRXfkD2Aw34SKwwY6pgGCRx7FJ0IRUo%2Ft7UD9j%2B45wESRfknHZ5YyppNBYsnwUM7zzWRsvm2lhEN4OBS0Ij75AfL1VGtyWLG%2B%2FrAcFc59Z9MvTtSyjup0drvRdPIYpzVC2i8ayN%2FV5hCEpcoJluKNALhhGs9Z1O2MskS92gRpM0OPkYKxNeNiMbii1wgcdVRqaNQG8h7LAYF0Yk8Fn0UUjkC6ZfXmN9tgSWinxO1Inh8%2BUZUX&X-Amz-Signature=d74218d28bb9583fa2d8c8024440bacd118dbf6a3d8e3a0ea411ab6b8ed41fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
