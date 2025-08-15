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
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5OUJP5B%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD89dnjSsy2e7dssVlZbBi41lDwWW7dJjtFHqFwUgEUXwIgGnBqF8DAUav5PRXs1%2FSs5d5VCP5Y09sbFy6kBIgB6SYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKa4HXIGMG2DrJPN4yrcA7lAXsLdALOayueBRDocca5ewSBRG9yHfAF8p2OrhZWlN3bIvfRse10%2BUbvZTTe6t%2FXlQkkiMmTbWAxVGum7aGcyNAWvi9JG7EP8gepXOH44hlBNauIy7oU%2FQxiOpa0qz%2FlJBJspwfjmUcpRsPuYcb4d0PchHPS7wbKYTB%2BSd1ECIqAhGRNosFmSIF4n2bOtIewMdKDfuMPOMcg%2FsbHUEIe%2FhYZiCYPBuOPeP8wdWsINC7ZZR8vSKBki3L6fhRvBMHKPnKKCU7k2hkSGemjftNdY%2F2JSJkdrjc2aSMmFNAWTaLKbZjJW3XnpdT0vRpu97BC%2F0SyA015puFLTU4HfXuVM8ARI9l6kRX2y%2BB3cuvC0DQ6Mpk%2FEod77RNKk6%2FPbBjnEfqp3FLaLdlVlL3jc1HXHs56M0xhrO16clrUbIO1dMeyybKzz4clK8M8o1K1Aovwjw0v29qqLb2mDUPhFeBfYT3WkomNO6yfO9%2FD%2FHgSpkeVaGW5BosyCbQpCzl2MfavKnU7gwB3IivNdEiXflFA5u%2FXNFPEi4FIKP7wT2Wr522ETy5olTFzHkgeLTCuL0QC8OBLQJR0%2BrupKE%2FoCmscPYP030Q4eFLbWF2qUz1cU2dCY66fGrv1KBt4YMPui%2BsQGOqUBbX9MZ%2BdGk1%2BwPZ6jNfZwMQ06DED%2BJ4%2BjqtO66se5jB9Vnvu0XvRbDUn3qRDOvBYT%2FHOWGAu%2BfhFWCgEq2FL08yexfjHlWaZ6n%2FWQjJUidqNkagjpTqPdyD7CHIAaDobViM6ZPrOr56YOe3TwNhIDtk7Xe634EN2sYaAvsKCk%2FNTbmT6tARFZXCzQuu%2F6lSkYwZloZehPFwjOzXsAHegY0lI92WDr&X-Amz-Signature=60bd12b65ce38462cf30f9165f7beb426f77ba6e43c275001dbb48f8a80c3216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5OUJP5B%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD89dnjSsy2e7dssVlZbBi41lDwWW7dJjtFHqFwUgEUXwIgGnBqF8DAUav5PRXs1%2FSs5d5VCP5Y09sbFy6kBIgB6SYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKa4HXIGMG2DrJPN4yrcA7lAXsLdALOayueBRDocca5ewSBRG9yHfAF8p2OrhZWlN3bIvfRse10%2BUbvZTTe6t%2FXlQkkiMmTbWAxVGum7aGcyNAWvi9JG7EP8gepXOH44hlBNauIy7oU%2FQxiOpa0qz%2FlJBJspwfjmUcpRsPuYcb4d0PchHPS7wbKYTB%2BSd1ECIqAhGRNosFmSIF4n2bOtIewMdKDfuMPOMcg%2FsbHUEIe%2FhYZiCYPBuOPeP8wdWsINC7ZZR8vSKBki3L6fhRvBMHKPnKKCU7k2hkSGemjftNdY%2F2JSJkdrjc2aSMmFNAWTaLKbZjJW3XnpdT0vRpu97BC%2F0SyA015puFLTU4HfXuVM8ARI9l6kRX2y%2BB3cuvC0DQ6Mpk%2FEod77RNKk6%2FPbBjnEfqp3FLaLdlVlL3jc1HXHs56M0xhrO16clrUbIO1dMeyybKzz4clK8M8o1K1Aovwjw0v29qqLb2mDUPhFeBfYT3WkomNO6yfO9%2FD%2FHgSpkeVaGW5BosyCbQpCzl2MfavKnU7gwB3IivNdEiXflFA5u%2FXNFPEi4FIKP7wT2Wr522ETy5olTFzHkgeLTCuL0QC8OBLQJR0%2BrupKE%2FoCmscPYP030Q4eFLbWF2qUz1cU2dCY66fGrv1KBt4YMPui%2BsQGOqUBbX9MZ%2BdGk1%2BwPZ6jNfZwMQ06DED%2BJ4%2BjqtO66se5jB9Vnvu0XvRbDUn3qRDOvBYT%2FHOWGAu%2BfhFWCgEq2FL08yexfjHlWaZ6n%2FWQjJUidqNkagjpTqPdyD7CHIAaDobViM6ZPrOr56YOe3TwNhIDtk7Xe634EN2sYaAvsKCk%2FNTbmT6tARFZXCzQuu%2F6lSkYwZloZehPFwjOzXsAHegY0lI92WDr&X-Amz-Signature=fb949a6e7c84978065560728363896808f97883c135a07b36f9b2de485d7fe66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5OUJP5B%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD89dnjSsy2e7dssVlZbBi41lDwWW7dJjtFHqFwUgEUXwIgGnBqF8DAUav5PRXs1%2FSs5d5VCP5Y09sbFy6kBIgB6SYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKa4HXIGMG2DrJPN4yrcA7lAXsLdALOayueBRDocca5ewSBRG9yHfAF8p2OrhZWlN3bIvfRse10%2BUbvZTTe6t%2FXlQkkiMmTbWAxVGum7aGcyNAWvi9JG7EP8gepXOH44hlBNauIy7oU%2FQxiOpa0qz%2FlJBJspwfjmUcpRsPuYcb4d0PchHPS7wbKYTB%2BSd1ECIqAhGRNosFmSIF4n2bOtIewMdKDfuMPOMcg%2FsbHUEIe%2FhYZiCYPBuOPeP8wdWsINC7ZZR8vSKBki3L6fhRvBMHKPnKKCU7k2hkSGemjftNdY%2F2JSJkdrjc2aSMmFNAWTaLKbZjJW3XnpdT0vRpu97BC%2F0SyA015puFLTU4HfXuVM8ARI9l6kRX2y%2BB3cuvC0DQ6Mpk%2FEod77RNKk6%2FPbBjnEfqp3FLaLdlVlL3jc1HXHs56M0xhrO16clrUbIO1dMeyybKzz4clK8M8o1K1Aovwjw0v29qqLb2mDUPhFeBfYT3WkomNO6yfO9%2FD%2FHgSpkeVaGW5BosyCbQpCzl2MfavKnU7gwB3IivNdEiXflFA5u%2FXNFPEi4FIKP7wT2Wr522ETy5olTFzHkgeLTCuL0QC8OBLQJR0%2BrupKE%2FoCmscPYP030Q4eFLbWF2qUz1cU2dCY66fGrv1KBt4YMPui%2BsQGOqUBbX9MZ%2BdGk1%2BwPZ6jNfZwMQ06DED%2BJ4%2BjqtO66se5jB9Vnvu0XvRbDUn3qRDOvBYT%2FHOWGAu%2BfhFWCgEq2FL08yexfjHlWaZ6n%2FWQjJUidqNkagjpTqPdyD7CHIAaDobViM6ZPrOr56YOe3TwNhIDtk7Xe634EN2sYaAvsKCk%2FNTbmT6tARFZXCzQuu%2F6lSkYwZloZehPFwjOzXsAHegY0lI92WDr&X-Amz-Signature=f106f3f8d6a6554ae1d13ef5fca84b509ff7f857dc0f3595eff60151137889e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5OUJP5B%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD89dnjSsy2e7dssVlZbBi41lDwWW7dJjtFHqFwUgEUXwIgGnBqF8DAUav5PRXs1%2FSs5d5VCP5Y09sbFy6kBIgB6SYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKa4HXIGMG2DrJPN4yrcA7lAXsLdALOayueBRDocca5ewSBRG9yHfAF8p2OrhZWlN3bIvfRse10%2BUbvZTTe6t%2FXlQkkiMmTbWAxVGum7aGcyNAWvi9JG7EP8gepXOH44hlBNauIy7oU%2FQxiOpa0qz%2FlJBJspwfjmUcpRsPuYcb4d0PchHPS7wbKYTB%2BSd1ECIqAhGRNosFmSIF4n2bOtIewMdKDfuMPOMcg%2FsbHUEIe%2FhYZiCYPBuOPeP8wdWsINC7ZZR8vSKBki3L6fhRvBMHKPnKKCU7k2hkSGemjftNdY%2F2JSJkdrjc2aSMmFNAWTaLKbZjJW3XnpdT0vRpu97BC%2F0SyA015puFLTU4HfXuVM8ARI9l6kRX2y%2BB3cuvC0DQ6Mpk%2FEod77RNKk6%2FPbBjnEfqp3FLaLdlVlL3jc1HXHs56M0xhrO16clrUbIO1dMeyybKzz4clK8M8o1K1Aovwjw0v29qqLb2mDUPhFeBfYT3WkomNO6yfO9%2FD%2FHgSpkeVaGW5BosyCbQpCzl2MfavKnU7gwB3IivNdEiXflFA5u%2FXNFPEi4FIKP7wT2Wr522ETy5olTFzHkgeLTCuL0QC8OBLQJR0%2BrupKE%2FoCmscPYP030Q4eFLbWF2qUz1cU2dCY66fGrv1KBt4YMPui%2BsQGOqUBbX9MZ%2BdGk1%2BwPZ6jNfZwMQ06DED%2BJ4%2BjqtO66se5jB9Vnvu0XvRbDUn3qRDOvBYT%2FHOWGAu%2BfhFWCgEq2FL08yexfjHlWaZ6n%2FWQjJUidqNkagjpTqPdyD7CHIAaDobViM6ZPrOr56YOe3TwNhIDtk7Xe634EN2sYaAvsKCk%2FNTbmT6tARFZXCzQuu%2F6lSkYwZloZehPFwjOzXsAHegY0lI92WDr&X-Amz-Signature=5509fbec1faa2867e76a1735903f5cd60618c838039f0ce81b4f56c2d1cc01b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5OUJP5B%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD89dnjSsy2e7dssVlZbBi41lDwWW7dJjtFHqFwUgEUXwIgGnBqF8DAUav5PRXs1%2FSs5d5VCP5Y09sbFy6kBIgB6SYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKa4HXIGMG2DrJPN4yrcA7lAXsLdALOayueBRDocca5ewSBRG9yHfAF8p2OrhZWlN3bIvfRse10%2BUbvZTTe6t%2FXlQkkiMmTbWAxVGum7aGcyNAWvi9JG7EP8gepXOH44hlBNauIy7oU%2FQxiOpa0qz%2FlJBJspwfjmUcpRsPuYcb4d0PchHPS7wbKYTB%2BSd1ECIqAhGRNosFmSIF4n2bOtIewMdKDfuMPOMcg%2FsbHUEIe%2FhYZiCYPBuOPeP8wdWsINC7ZZR8vSKBki3L6fhRvBMHKPnKKCU7k2hkSGemjftNdY%2F2JSJkdrjc2aSMmFNAWTaLKbZjJW3XnpdT0vRpu97BC%2F0SyA015puFLTU4HfXuVM8ARI9l6kRX2y%2BB3cuvC0DQ6Mpk%2FEod77RNKk6%2FPbBjnEfqp3FLaLdlVlL3jc1HXHs56M0xhrO16clrUbIO1dMeyybKzz4clK8M8o1K1Aovwjw0v29qqLb2mDUPhFeBfYT3WkomNO6yfO9%2FD%2FHgSpkeVaGW5BosyCbQpCzl2MfavKnU7gwB3IivNdEiXflFA5u%2FXNFPEi4FIKP7wT2Wr522ETy5olTFzHkgeLTCuL0QC8OBLQJR0%2BrupKE%2FoCmscPYP030Q4eFLbWF2qUz1cU2dCY66fGrv1KBt4YMPui%2BsQGOqUBbX9MZ%2BdGk1%2BwPZ6jNfZwMQ06DED%2BJ4%2BjqtO66se5jB9Vnvu0XvRbDUn3qRDOvBYT%2FHOWGAu%2BfhFWCgEq2FL08yexfjHlWaZ6n%2FWQjJUidqNkagjpTqPdyD7CHIAaDobViM6ZPrOr56YOe3TwNhIDtk7Xe634EN2sYaAvsKCk%2FNTbmT6tARFZXCzQuu%2F6lSkYwZloZehPFwjOzXsAHegY0lI92WDr&X-Amz-Signature=702832f20de8440f681baf653ed5244c2b6b3a3261865a8d1299be2d3c679e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5OUJP5B%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD89dnjSsy2e7dssVlZbBi41lDwWW7dJjtFHqFwUgEUXwIgGnBqF8DAUav5PRXs1%2FSs5d5VCP5Y09sbFy6kBIgB6SYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKa4HXIGMG2DrJPN4yrcA7lAXsLdALOayueBRDocca5ewSBRG9yHfAF8p2OrhZWlN3bIvfRse10%2BUbvZTTe6t%2FXlQkkiMmTbWAxVGum7aGcyNAWvi9JG7EP8gepXOH44hlBNauIy7oU%2FQxiOpa0qz%2FlJBJspwfjmUcpRsPuYcb4d0PchHPS7wbKYTB%2BSd1ECIqAhGRNosFmSIF4n2bOtIewMdKDfuMPOMcg%2FsbHUEIe%2FhYZiCYPBuOPeP8wdWsINC7ZZR8vSKBki3L6fhRvBMHKPnKKCU7k2hkSGemjftNdY%2F2JSJkdrjc2aSMmFNAWTaLKbZjJW3XnpdT0vRpu97BC%2F0SyA015puFLTU4HfXuVM8ARI9l6kRX2y%2BB3cuvC0DQ6Mpk%2FEod77RNKk6%2FPbBjnEfqp3FLaLdlVlL3jc1HXHs56M0xhrO16clrUbIO1dMeyybKzz4clK8M8o1K1Aovwjw0v29qqLb2mDUPhFeBfYT3WkomNO6yfO9%2FD%2FHgSpkeVaGW5BosyCbQpCzl2MfavKnU7gwB3IivNdEiXflFA5u%2FXNFPEi4FIKP7wT2Wr522ETy5olTFzHkgeLTCuL0QC8OBLQJR0%2BrupKE%2FoCmscPYP030Q4eFLbWF2qUz1cU2dCY66fGrv1KBt4YMPui%2BsQGOqUBbX9MZ%2BdGk1%2BwPZ6jNfZwMQ06DED%2BJ4%2BjqtO66se5jB9Vnvu0XvRbDUn3qRDOvBYT%2FHOWGAu%2BfhFWCgEq2FL08yexfjHlWaZ6n%2FWQjJUidqNkagjpTqPdyD7CHIAaDobViM6ZPrOr56YOe3TwNhIDtk7Xe634EN2sYaAvsKCk%2FNTbmT6tARFZXCzQuu%2F6lSkYwZloZehPFwjOzXsAHegY0lI92WDr&X-Amz-Signature=b3a99a2216673e57e6c3172c33000f4bea14d270f9914101136c6330e9756c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5OUJP5B%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD89dnjSsy2e7dssVlZbBi41lDwWW7dJjtFHqFwUgEUXwIgGnBqF8DAUav5PRXs1%2FSs5d5VCP5Y09sbFy6kBIgB6SYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKa4HXIGMG2DrJPN4yrcA7lAXsLdALOayueBRDocca5ewSBRG9yHfAF8p2OrhZWlN3bIvfRse10%2BUbvZTTe6t%2FXlQkkiMmTbWAxVGum7aGcyNAWvi9JG7EP8gepXOH44hlBNauIy7oU%2FQxiOpa0qz%2FlJBJspwfjmUcpRsPuYcb4d0PchHPS7wbKYTB%2BSd1ECIqAhGRNosFmSIF4n2bOtIewMdKDfuMPOMcg%2FsbHUEIe%2FhYZiCYPBuOPeP8wdWsINC7ZZR8vSKBki3L6fhRvBMHKPnKKCU7k2hkSGemjftNdY%2F2JSJkdrjc2aSMmFNAWTaLKbZjJW3XnpdT0vRpu97BC%2F0SyA015puFLTU4HfXuVM8ARI9l6kRX2y%2BB3cuvC0DQ6Mpk%2FEod77RNKk6%2FPbBjnEfqp3FLaLdlVlL3jc1HXHs56M0xhrO16clrUbIO1dMeyybKzz4clK8M8o1K1Aovwjw0v29qqLb2mDUPhFeBfYT3WkomNO6yfO9%2FD%2FHgSpkeVaGW5BosyCbQpCzl2MfavKnU7gwB3IivNdEiXflFA5u%2FXNFPEi4FIKP7wT2Wr522ETy5olTFzHkgeLTCuL0QC8OBLQJR0%2BrupKE%2FoCmscPYP030Q4eFLbWF2qUz1cU2dCY66fGrv1KBt4YMPui%2BsQGOqUBbX9MZ%2BdGk1%2BwPZ6jNfZwMQ06DED%2BJ4%2BjqtO66se5jB9Vnvu0XvRbDUn3qRDOvBYT%2FHOWGAu%2BfhFWCgEq2FL08yexfjHlWaZ6n%2FWQjJUidqNkagjpTqPdyD7CHIAaDobViM6ZPrOr56YOe3TwNhIDtk7Xe634EN2sYaAvsKCk%2FNTbmT6tARFZXCzQuu%2F6lSkYwZloZehPFwjOzXsAHegY0lI92WDr&X-Amz-Signature=5922dd0f5a4455ea8004ed5644993958b947b31975d30bcd1577ed57a3b6a973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
