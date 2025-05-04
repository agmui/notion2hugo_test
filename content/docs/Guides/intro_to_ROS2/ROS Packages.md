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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTWNCD2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIEY0XxvbFFUcek3xkQTrQ%2BE16%2BgRILTWNy5fj%2FpnJ4%2F4AiBFQ3DJ8Ze46iFb17OK04uOB%2FS%2BcDmi6Va2hSeAgho4VCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMZh40QtXi%2Fpm4MI%2B7KtwDKMtaOqPvuua57DFeKZoOF9HvTyQjrjKZRv0HXpYPuSC2smfEwELCOJT%2F0ccbe5EPa8NhsC9Msn%2B88UHRPGvpHAZpUFVwuihEd4LSXBPQyeBCOqP7evNfC%2FvtwDJ7Aqx92apuToVGkEGUDZJ8OfKtsqdRBs7Go27CNYS5miY31BbMWTiujlZWc5dhIgukhEHbofNsD5tpg8ESZJ%2BchVDZ0Ehsc9mscpIOrQVnjKJR5fCYxoa3T8ipULnvCoH49MvO5Q98duqHIof%2F1JSJdObcCiEy9bu1kL6Ku3UwtdQz%2BrmOAhL%2F30h90Y%2BSO0E5OECXphUf3xoeRMiKLCZoAoiSfIsYVyq4eML1FhSvM2Y2U2yXQLy3Ekm8mJxVoKwu9SsYUtdbDHNtF3QhE4uwUcBHQlYhXypc4W37TIe6nd1A6dxkBjKWXSfbYJv%2F2yBl0ZiFeNS2ny32afSjco5TewVbX%2BrzuQpRADlNsUj4nTIjKvtvNx7vIy7xKNnF%2F8Y29TFddXrOXO3z5rwK8VJCzGQD5isJA9JBmd3ZJNaLDtvvKoEdx23MiFTtHTzNtngLwp%2BZ83dQ55yXT6Kj7Z1GZd%2FWUeR0osD0vT8RqmDPQFzmjriyrkRf%2BwMf0FWL0RcwhIjewAY6pgFjlYsO2oETOqgnGrw5WhiDVS8GoIi0PVwQYnw6Eo8D1pD6tTQvQ%2B7fHt5kOmc5eXsil5UKxhZh0O3jJzM4zGgF4yDQXLEYtgdrsIqWWg1IWDIvu9r2c5EpBDmBlU5Fl1YYX3z3%2BAAp%2BLdTaPSQAEeJW%2B0k1C0Z%2Bh%2BTnsSNQAnk67AqGSv%2FRBU6JSas6ajt4qzCdLo3Sm5lKrB5b1s2OrHQI9Spk3A1&X-Amz-Signature=38df21134303f2acf047e056a5353b80472e376af46bdd24834de195e62fa531&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTWNCD2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIEY0XxvbFFUcek3xkQTrQ%2BE16%2BgRILTWNy5fj%2FpnJ4%2F4AiBFQ3DJ8Ze46iFb17OK04uOB%2FS%2BcDmi6Va2hSeAgho4VCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMZh40QtXi%2Fpm4MI%2B7KtwDKMtaOqPvuua57DFeKZoOF9HvTyQjrjKZRv0HXpYPuSC2smfEwELCOJT%2F0ccbe5EPa8NhsC9Msn%2B88UHRPGvpHAZpUFVwuihEd4LSXBPQyeBCOqP7evNfC%2FvtwDJ7Aqx92apuToVGkEGUDZJ8OfKtsqdRBs7Go27CNYS5miY31BbMWTiujlZWc5dhIgukhEHbofNsD5tpg8ESZJ%2BchVDZ0Ehsc9mscpIOrQVnjKJR5fCYxoa3T8ipULnvCoH49MvO5Q98duqHIof%2F1JSJdObcCiEy9bu1kL6Ku3UwtdQz%2BrmOAhL%2F30h90Y%2BSO0E5OECXphUf3xoeRMiKLCZoAoiSfIsYVyq4eML1FhSvM2Y2U2yXQLy3Ekm8mJxVoKwu9SsYUtdbDHNtF3QhE4uwUcBHQlYhXypc4W37TIe6nd1A6dxkBjKWXSfbYJv%2F2yBl0ZiFeNS2ny32afSjco5TewVbX%2BrzuQpRADlNsUj4nTIjKvtvNx7vIy7xKNnF%2F8Y29TFddXrOXO3z5rwK8VJCzGQD5isJA9JBmd3ZJNaLDtvvKoEdx23MiFTtHTzNtngLwp%2BZ83dQ55yXT6Kj7Z1GZd%2FWUeR0osD0vT8RqmDPQFzmjriyrkRf%2BwMf0FWL0RcwhIjewAY6pgFjlYsO2oETOqgnGrw5WhiDVS8GoIi0PVwQYnw6Eo8D1pD6tTQvQ%2B7fHt5kOmc5eXsil5UKxhZh0O3jJzM4zGgF4yDQXLEYtgdrsIqWWg1IWDIvu9r2c5EpBDmBlU5Fl1YYX3z3%2BAAp%2BLdTaPSQAEeJW%2B0k1C0Z%2Bh%2BTnsSNQAnk67AqGSv%2FRBU6JSas6ajt4qzCdLo3Sm5lKrB5b1s2OrHQI9Spk3A1&X-Amz-Signature=2569dc3ca9b84f4615efcfcb43000afacecca8d505e4be52eff40bda6cdcc2ea&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTWNCD2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIEY0XxvbFFUcek3xkQTrQ%2BE16%2BgRILTWNy5fj%2FpnJ4%2F4AiBFQ3DJ8Ze46iFb17OK04uOB%2FS%2BcDmi6Va2hSeAgho4VCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMZh40QtXi%2Fpm4MI%2B7KtwDKMtaOqPvuua57DFeKZoOF9HvTyQjrjKZRv0HXpYPuSC2smfEwELCOJT%2F0ccbe5EPa8NhsC9Msn%2B88UHRPGvpHAZpUFVwuihEd4LSXBPQyeBCOqP7evNfC%2FvtwDJ7Aqx92apuToVGkEGUDZJ8OfKtsqdRBs7Go27CNYS5miY31BbMWTiujlZWc5dhIgukhEHbofNsD5tpg8ESZJ%2BchVDZ0Ehsc9mscpIOrQVnjKJR5fCYxoa3T8ipULnvCoH49MvO5Q98duqHIof%2F1JSJdObcCiEy9bu1kL6Ku3UwtdQz%2BrmOAhL%2F30h90Y%2BSO0E5OECXphUf3xoeRMiKLCZoAoiSfIsYVyq4eML1FhSvM2Y2U2yXQLy3Ekm8mJxVoKwu9SsYUtdbDHNtF3QhE4uwUcBHQlYhXypc4W37TIe6nd1A6dxkBjKWXSfbYJv%2F2yBl0ZiFeNS2ny32afSjco5TewVbX%2BrzuQpRADlNsUj4nTIjKvtvNx7vIy7xKNnF%2F8Y29TFddXrOXO3z5rwK8VJCzGQD5isJA9JBmd3ZJNaLDtvvKoEdx23MiFTtHTzNtngLwp%2BZ83dQ55yXT6Kj7Z1GZd%2FWUeR0osD0vT8RqmDPQFzmjriyrkRf%2BwMf0FWL0RcwhIjewAY6pgFjlYsO2oETOqgnGrw5WhiDVS8GoIi0PVwQYnw6Eo8D1pD6tTQvQ%2B7fHt5kOmc5eXsil5UKxhZh0O3jJzM4zGgF4yDQXLEYtgdrsIqWWg1IWDIvu9r2c5EpBDmBlU5Fl1YYX3z3%2BAAp%2BLdTaPSQAEeJW%2B0k1C0Z%2Bh%2BTnsSNQAnk67AqGSv%2FRBU6JSas6ajt4qzCdLo3Sm5lKrB5b1s2OrHQI9Spk3A1&X-Amz-Signature=7a088578deb170687823d98939b830dc0cb201338294e3f0d547dc96f22e25a4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTWNCD2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIEY0XxvbFFUcek3xkQTrQ%2BE16%2BgRILTWNy5fj%2FpnJ4%2F4AiBFQ3DJ8Ze46iFb17OK04uOB%2FS%2BcDmi6Va2hSeAgho4VCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMZh40QtXi%2Fpm4MI%2B7KtwDKMtaOqPvuua57DFeKZoOF9HvTyQjrjKZRv0HXpYPuSC2smfEwELCOJT%2F0ccbe5EPa8NhsC9Msn%2B88UHRPGvpHAZpUFVwuihEd4LSXBPQyeBCOqP7evNfC%2FvtwDJ7Aqx92apuToVGkEGUDZJ8OfKtsqdRBs7Go27CNYS5miY31BbMWTiujlZWc5dhIgukhEHbofNsD5tpg8ESZJ%2BchVDZ0Ehsc9mscpIOrQVnjKJR5fCYxoa3T8ipULnvCoH49MvO5Q98duqHIof%2F1JSJdObcCiEy9bu1kL6Ku3UwtdQz%2BrmOAhL%2F30h90Y%2BSO0E5OECXphUf3xoeRMiKLCZoAoiSfIsYVyq4eML1FhSvM2Y2U2yXQLy3Ekm8mJxVoKwu9SsYUtdbDHNtF3QhE4uwUcBHQlYhXypc4W37TIe6nd1A6dxkBjKWXSfbYJv%2F2yBl0ZiFeNS2ny32afSjco5TewVbX%2BrzuQpRADlNsUj4nTIjKvtvNx7vIy7xKNnF%2F8Y29TFddXrOXO3z5rwK8VJCzGQD5isJA9JBmd3ZJNaLDtvvKoEdx23MiFTtHTzNtngLwp%2BZ83dQ55yXT6Kj7Z1GZd%2FWUeR0osD0vT8RqmDPQFzmjriyrkRf%2BwMf0FWL0RcwhIjewAY6pgFjlYsO2oETOqgnGrw5WhiDVS8GoIi0PVwQYnw6Eo8D1pD6tTQvQ%2B7fHt5kOmc5eXsil5UKxhZh0O3jJzM4zGgF4yDQXLEYtgdrsIqWWg1IWDIvu9r2c5EpBDmBlU5Fl1YYX3z3%2BAAp%2BLdTaPSQAEeJW%2B0k1C0Z%2Bh%2BTnsSNQAnk67AqGSv%2FRBU6JSas6ajt4qzCdLo3Sm5lKrB5b1s2OrHQI9Spk3A1&X-Amz-Signature=22976df5cc3757195debcff0bb4474b7fabade6b18342f78f312c54994715b75&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTWNCD2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIEY0XxvbFFUcek3xkQTrQ%2BE16%2BgRILTWNy5fj%2FpnJ4%2F4AiBFQ3DJ8Ze46iFb17OK04uOB%2FS%2BcDmi6Va2hSeAgho4VCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMZh40QtXi%2Fpm4MI%2B7KtwDKMtaOqPvuua57DFeKZoOF9HvTyQjrjKZRv0HXpYPuSC2smfEwELCOJT%2F0ccbe5EPa8NhsC9Msn%2B88UHRPGvpHAZpUFVwuihEd4LSXBPQyeBCOqP7evNfC%2FvtwDJ7Aqx92apuToVGkEGUDZJ8OfKtsqdRBs7Go27CNYS5miY31BbMWTiujlZWc5dhIgukhEHbofNsD5tpg8ESZJ%2BchVDZ0Ehsc9mscpIOrQVnjKJR5fCYxoa3T8ipULnvCoH49MvO5Q98duqHIof%2F1JSJdObcCiEy9bu1kL6Ku3UwtdQz%2BrmOAhL%2F30h90Y%2BSO0E5OECXphUf3xoeRMiKLCZoAoiSfIsYVyq4eML1FhSvM2Y2U2yXQLy3Ekm8mJxVoKwu9SsYUtdbDHNtF3QhE4uwUcBHQlYhXypc4W37TIe6nd1A6dxkBjKWXSfbYJv%2F2yBl0ZiFeNS2ny32afSjco5TewVbX%2BrzuQpRADlNsUj4nTIjKvtvNx7vIy7xKNnF%2F8Y29TFddXrOXO3z5rwK8VJCzGQD5isJA9JBmd3ZJNaLDtvvKoEdx23MiFTtHTzNtngLwp%2BZ83dQ55yXT6Kj7Z1GZd%2FWUeR0osD0vT8RqmDPQFzmjriyrkRf%2BwMf0FWL0RcwhIjewAY6pgFjlYsO2oETOqgnGrw5WhiDVS8GoIi0PVwQYnw6Eo8D1pD6tTQvQ%2B7fHt5kOmc5eXsil5UKxhZh0O3jJzM4zGgF4yDQXLEYtgdrsIqWWg1IWDIvu9r2c5EpBDmBlU5Fl1YYX3z3%2BAAp%2BLdTaPSQAEeJW%2B0k1C0Z%2Bh%2BTnsSNQAnk67AqGSv%2FRBU6JSas6ajt4qzCdLo3Sm5lKrB5b1s2OrHQI9Spk3A1&X-Amz-Signature=00b0fd85866e15deba7d8f9022cbb66e5ac1b7cf0f59e0483947616ae3753afe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTWNCD2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIEY0XxvbFFUcek3xkQTrQ%2BE16%2BgRILTWNy5fj%2FpnJ4%2F4AiBFQ3DJ8Ze46iFb17OK04uOB%2FS%2BcDmi6Va2hSeAgho4VCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMZh40QtXi%2Fpm4MI%2B7KtwDKMtaOqPvuua57DFeKZoOF9HvTyQjrjKZRv0HXpYPuSC2smfEwELCOJT%2F0ccbe5EPa8NhsC9Msn%2B88UHRPGvpHAZpUFVwuihEd4LSXBPQyeBCOqP7evNfC%2FvtwDJ7Aqx92apuToVGkEGUDZJ8OfKtsqdRBs7Go27CNYS5miY31BbMWTiujlZWc5dhIgukhEHbofNsD5tpg8ESZJ%2BchVDZ0Ehsc9mscpIOrQVnjKJR5fCYxoa3T8ipULnvCoH49MvO5Q98duqHIof%2F1JSJdObcCiEy9bu1kL6Ku3UwtdQz%2BrmOAhL%2F30h90Y%2BSO0E5OECXphUf3xoeRMiKLCZoAoiSfIsYVyq4eML1FhSvM2Y2U2yXQLy3Ekm8mJxVoKwu9SsYUtdbDHNtF3QhE4uwUcBHQlYhXypc4W37TIe6nd1A6dxkBjKWXSfbYJv%2F2yBl0ZiFeNS2ny32afSjco5TewVbX%2BrzuQpRADlNsUj4nTIjKvtvNx7vIy7xKNnF%2F8Y29TFddXrOXO3z5rwK8VJCzGQD5isJA9JBmd3ZJNaLDtvvKoEdx23MiFTtHTzNtngLwp%2BZ83dQ55yXT6Kj7Z1GZd%2FWUeR0osD0vT8RqmDPQFzmjriyrkRf%2BwMf0FWL0RcwhIjewAY6pgFjlYsO2oETOqgnGrw5WhiDVS8GoIi0PVwQYnw6Eo8D1pD6tTQvQ%2B7fHt5kOmc5eXsil5UKxhZh0O3jJzM4zGgF4yDQXLEYtgdrsIqWWg1IWDIvu9r2c5EpBDmBlU5Fl1YYX3z3%2BAAp%2BLdTaPSQAEeJW%2B0k1C0Z%2Bh%2BTnsSNQAnk67AqGSv%2FRBU6JSas6ajt4qzCdLo3Sm5lKrB5b1s2OrHQI9Spk3A1&X-Amz-Signature=4e605cdabfba8b39c41bf7305003c942c5acc3c3177ed9f87d80c23279fe1402&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTWNCD2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIEY0XxvbFFUcek3xkQTrQ%2BE16%2BgRILTWNy5fj%2FpnJ4%2F4AiBFQ3DJ8Ze46iFb17OK04uOB%2FS%2BcDmi6Va2hSeAgho4VCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMZh40QtXi%2Fpm4MI%2B7KtwDKMtaOqPvuua57DFeKZoOF9HvTyQjrjKZRv0HXpYPuSC2smfEwELCOJT%2F0ccbe5EPa8NhsC9Msn%2B88UHRPGvpHAZpUFVwuihEd4LSXBPQyeBCOqP7evNfC%2FvtwDJ7Aqx92apuToVGkEGUDZJ8OfKtsqdRBs7Go27CNYS5miY31BbMWTiujlZWc5dhIgukhEHbofNsD5tpg8ESZJ%2BchVDZ0Ehsc9mscpIOrQVnjKJR5fCYxoa3T8ipULnvCoH49MvO5Q98duqHIof%2F1JSJdObcCiEy9bu1kL6Ku3UwtdQz%2BrmOAhL%2F30h90Y%2BSO0E5OECXphUf3xoeRMiKLCZoAoiSfIsYVyq4eML1FhSvM2Y2U2yXQLy3Ekm8mJxVoKwu9SsYUtdbDHNtF3QhE4uwUcBHQlYhXypc4W37TIe6nd1A6dxkBjKWXSfbYJv%2F2yBl0ZiFeNS2ny32afSjco5TewVbX%2BrzuQpRADlNsUj4nTIjKvtvNx7vIy7xKNnF%2F8Y29TFddXrOXO3z5rwK8VJCzGQD5isJA9JBmd3ZJNaLDtvvKoEdx23MiFTtHTzNtngLwp%2BZ83dQ55yXT6Kj7Z1GZd%2FWUeR0osD0vT8RqmDPQFzmjriyrkRf%2BwMf0FWL0RcwhIjewAY6pgFjlYsO2oETOqgnGrw5WhiDVS8GoIi0PVwQYnw6Eo8D1pD6tTQvQ%2B7fHt5kOmc5eXsil5UKxhZh0O3jJzM4zGgF4yDQXLEYtgdrsIqWWg1IWDIvu9r2c5EpBDmBlU5Fl1YYX3z3%2BAAp%2BLdTaPSQAEeJW%2B0k1C0Z%2Bh%2BTnsSNQAnk67AqGSv%2FRBU6JSas6ajt4qzCdLo3Sm5lKrB5b1s2OrHQI9Spk3A1&X-Amz-Signature=8406689e63beb31d569c9c54a11a8939bc4a74c315f9e2261c2c8ed919d153bc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
