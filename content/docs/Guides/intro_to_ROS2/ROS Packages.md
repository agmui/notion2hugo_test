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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTIF4AE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE%2BeDz39hUvA2NLrwdLTevJEBnRF%2F4S5FC9lfifNaEJzAiEA%2FsxK%2FUzmTG7evGL7F7GRw2cE6x%2BEfNi%2BqcbmRjTRQ1gq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKOENTp6u6K0j0seHircA%2FPTtTTY7lshTuO4%2Fmvhki9qysf3cbVjMlAGlXxx0%2BOWXDoqfvBiEUP1wVAOKfHs1PgS0tCG%2FsDfVkk4BOtLDOQZKQLD1oXEmfqSDe1BpODlcgcrxKeLG4hBEMJlEnsdhdw94i%2BVo3pf%2Fc3OEBkTddAdpyrp8Xi710vyc1B35G2GHg7%2BtnYifpzsLHxqqoOVWvvGo%2BOJH%2Bca3j65bzhATf1Vo3x77lyrprc0cssN3XPJpJAQMhJeFjSAf0EzIP6Z5RhqbeWw7tKUTp9BFbf4SOVNYpdWt4cFGxTauzsDFth4rCJC1IUN%2F7hptQTxvU3xMdgvV6imjT1%2BW4KEbJJm8e1sPR9G0ZgP2f6UsmLWaRcOUHj2gcMpra%2BENC%2BotDSBeaIJ4FJENysC1nLYww3KqQ%2F05YNZN7KB7BjFP9H3AfSKSiAzu0eFXkvVNKDkz0E%2Be%2FXH7yb8lq16%2FAzDou3YQxFUnXBs4RwFspKly51%2B1l81WmcIuauvMjoyWK%2BCtxtv4e0SyJUL9nUFQa89WySoCsJWCCLOYXNbguLxCFfC9efKGrMWdNB65YlOifc8h4dCIgCP1JGZhuv58yYC2FCEsYuy7ek2bTQXEtfhaNt%2FlQbBK2uFtJIRV%2FGYd2EDMK2cjMQGOqUBUINgvS8t09VyGTd%2F4yJcwCNNglisPXFMhX95hN3woYJo%2Fe9SctbxbuF8o1Gkm9VVKfKnSJMQ3%2FkpXjXe2R0fNEOpOAt73OjFI%2B7KKwO0YeTLlmAlC2xsCFWK34TZjGxQBKrw5mAgAAIEgEol8JcZjQDD3%2BAvmgUhDAk3h878EJ32AgGro%2Bax9hOSKvNj6xmbrCq61m2NePGe4B0UmV54FUsJnWqy&X-Amz-Signature=1023eaf1e7895cc234a8858baf4c717bf14a9eed7510954cb130bddc1f46170f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTIF4AE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE%2BeDz39hUvA2NLrwdLTevJEBnRF%2F4S5FC9lfifNaEJzAiEA%2FsxK%2FUzmTG7evGL7F7GRw2cE6x%2BEfNi%2BqcbmRjTRQ1gq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKOENTp6u6K0j0seHircA%2FPTtTTY7lshTuO4%2Fmvhki9qysf3cbVjMlAGlXxx0%2BOWXDoqfvBiEUP1wVAOKfHs1PgS0tCG%2FsDfVkk4BOtLDOQZKQLD1oXEmfqSDe1BpODlcgcrxKeLG4hBEMJlEnsdhdw94i%2BVo3pf%2Fc3OEBkTddAdpyrp8Xi710vyc1B35G2GHg7%2BtnYifpzsLHxqqoOVWvvGo%2BOJH%2Bca3j65bzhATf1Vo3x77lyrprc0cssN3XPJpJAQMhJeFjSAf0EzIP6Z5RhqbeWw7tKUTp9BFbf4SOVNYpdWt4cFGxTauzsDFth4rCJC1IUN%2F7hptQTxvU3xMdgvV6imjT1%2BW4KEbJJm8e1sPR9G0ZgP2f6UsmLWaRcOUHj2gcMpra%2BENC%2BotDSBeaIJ4FJENysC1nLYww3KqQ%2F05YNZN7KB7BjFP9H3AfSKSiAzu0eFXkvVNKDkz0E%2Be%2FXH7yb8lq16%2FAzDou3YQxFUnXBs4RwFspKly51%2B1l81WmcIuauvMjoyWK%2BCtxtv4e0SyJUL9nUFQa89WySoCsJWCCLOYXNbguLxCFfC9efKGrMWdNB65YlOifc8h4dCIgCP1JGZhuv58yYC2FCEsYuy7ek2bTQXEtfhaNt%2FlQbBK2uFtJIRV%2FGYd2EDMK2cjMQGOqUBUINgvS8t09VyGTd%2F4yJcwCNNglisPXFMhX95hN3woYJo%2Fe9SctbxbuF8o1Gkm9VVKfKnSJMQ3%2FkpXjXe2R0fNEOpOAt73OjFI%2B7KKwO0YeTLlmAlC2xsCFWK34TZjGxQBKrw5mAgAAIEgEol8JcZjQDD3%2BAvmgUhDAk3h878EJ32AgGro%2Bax9hOSKvNj6xmbrCq61m2NePGe4B0UmV54FUsJnWqy&X-Amz-Signature=285f2c1a1f9906bd9e7db9d53da1471302262fdcb0ff1fa0ea78a37a973d1c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTIF4AE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE%2BeDz39hUvA2NLrwdLTevJEBnRF%2F4S5FC9lfifNaEJzAiEA%2FsxK%2FUzmTG7evGL7F7GRw2cE6x%2BEfNi%2BqcbmRjTRQ1gq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKOENTp6u6K0j0seHircA%2FPTtTTY7lshTuO4%2Fmvhki9qysf3cbVjMlAGlXxx0%2BOWXDoqfvBiEUP1wVAOKfHs1PgS0tCG%2FsDfVkk4BOtLDOQZKQLD1oXEmfqSDe1BpODlcgcrxKeLG4hBEMJlEnsdhdw94i%2BVo3pf%2Fc3OEBkTddAdpyrp8Xi710vyc1B35G2GHg7%2BtnYifpzsLHxqqoOVWvvGo%2BOJH%2Bca3j65bzhATf1Vo3x77lyrprc0cssN3XPJpJAQMhJeFjSAf0EzIP6Z5RhqbeWw7tKUTp9BFbf4SOVNYpdWt4cFGxTauzsDFth4rCJC1IUN%2F7hptQTxvU3xMdgvV6imjT1%2BW4KEbJJm8e1sPR9G0ZgP2f6UsmLWaRcOUHj2gcMpra%2BENC%2BotDSBeaIJ4FJENysC1nLYww3KqQ%2F05YNZN7KB7BjFP9H3AfSKSiAzu0eFXkvVNKDkz0E%2Be%2FXH7yb8lq16%2FAzDou3YQxFUnXBs4RwFspKly51%2B1l81WmcIuauvMjoyWK%2BCtxtv4e0SyJUL9nUFQa89WySoCsJWCCLOYXNbguLxCFfC9efKGrMWdNB65YlOifc8h4dCIgCP1JGZhuv58yYC2FCEsYuy7ek2bTQXEtfhaNt%2FlQbBK2uFtJIRV%2FGYd2EDMK2cjMQGOqUBUINgvS8t09VyGTd%2F4yJcwCNNglisPXFMhX95hN3woYJo%2Fe9SctbxbuF8o1Gkm9VVKfKnSJMQ3%2FkpXjXe2R0fNEOpOAt73OjFI%2B7KKwO0YeTLlmAlC2xsCFWK34TZjGxQBKrw5mAgAAIEgEol8JcZjQDD3%2BAvmgUhDAk3h878EJ32AgGro%2Bax9hOSKvNj6xmbrCq61m2NePGe4B0UmV54FUsJnWqy&X-Amz-Signature=37e6cc6ff1691d64d9e42fff95d6048d1e195ff98d0e3d8ba8cdd67549a9657a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTIF4AE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE%2BeDz39hUvA2NLrwdLTevJEBnRF%2F4S5FC9lfifNaEJzAiEA%2FsxK%2FUzmTG7evGL7F7GRw2cE6x%2BEfNi%2BqcbmRjTRQ1gq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKOENTp6u6K0j0seHircA%2FPTtTTY7lshTuO4%2Fmvhki9qysf3cbVjMlAGlXxx0%2BOWXDoqfvBiEUP1wVAOKfHs1PgS0tCG%2FsDfVkk4BOtLDOQZKQLD1oXEmfqSDe1BpODlcgcrxKeLG4hBEMJlEnsdhdw94i%2BVo3pf%2Fc3OEBkTddAdpyrp8Xi710vyc1B35G2GHg7%2BtnYifpzsLHxqqoOVWvvGo%2BOJH%2Bca3j65bzhATf1Vo3x77lyrprc0cssN3XPJpJAQMhJeFjSAf0EzIP6Z5RhqbeWw7tKUTp9BFbf4SOVNYpdWt4cFGxTauzsDFth4rCJC1IUN%2F7hptQTxvU3xMdgvV6imjT1%2BW4KEbJJm8e1sPR9G0ZgP2f6UsmLWaRcOUHj2gcMpra%2BENC%2BotDSBeaIJ4FJENysC1nLYww3KqQ%2F05YNZN7KB7BjFP9H3AfSKSiAzu0eFXkvVNKDkz0E%2Be%2FXH7yb8lq16%2FAzDou3YQxFUnXBs4RwFspKly51%2B1l81WmcIuauvMjoyWK%2BCtxtv4e0SyJUL9nUFQa89WySoCsJWCCLOYXNbguLxCFfC9efKGrMWdNB65YlOifc8h4dCIgCP1JGZhuv58yYC2FCEsYuy7ek2bTQXEtfhaNt%2FlQbBK2uFtJIRV%2FGYd2EDMK2cjMQGOqUBUINgvS8t09VyGTd%2F4yJcwCNNglisPXFMhX95hN3woYJo%2Fe9SctbxbuF8o1Gkm9VVKfKnSJMQ3%2FkpXjXe2R0fNEOpOAt73OjFI%2B7KKwO0YeTLlmAlC2xsCFWK34TZjGxQBKrw5mAgAAIEgEol8JcZjQDD3%2BAvmgUhDAk3h878EJ32AgGro%2Bax9hOSKvNj6xmbrCq61m2NePGe4B0UmV54FUsJnWqy&X-Amz-Signature=b4b0218bf2383ad9055c5534dd9a190e917ae7e018becdef57c9879f64320222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTIF4AE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE%2BeDz39hUvA2NLrwdLTevJEBnRF%2F4S5FC9lfifNaEJzAiEA%2FsxK%2FUzmTG7evGL7F7GRw2cE6x%2BEfNi%2BqcbmRjTRQ1gq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKOENTp6u6K0j0seHircA%2FPTtTTY7lshTuO4%2Fmvhki9qysf3cbVjMlAGlXxx0%2BOWXDoqfvBiEUP1wVAOKfHs1PgS0tCG%2FsDfVkk4BOtLDOQZKQLD1oXEmfqSDe1BpODlcgcrxKeLG4hBEMJlEnsdhdw94i%2BVo3pf%2Fc3OEBkTddAdpyrp8Xi710vyc1B35G2GHg7%2BtnYifpzsLHxqqoOVWvvGo%2BOJH%2Bca3j65bzhATf1Vo3x77lyrprc0cssN3XPJpJAQMhJeFjSAf0EzIP6Z5RhqbeWw7tKUTp9BFbf4SOVNYpdWt4cFGxTauzsDFth4rCJC1IUN%2F7hptQTxvU3xMdgvV6imjT1%2BW4KEbJJm8e1sPR9G0ZgP2f6UsmLWaRcOUHj2gcMpra%2BENC%2BotDSBeaIJ4FJENysC1nLYww3KqQ%2F05YNZN7KB7BjFP9H3AfSKSiAzu0eFXkvVNKDkz0E%2Be%2FXH7yb8lq16%2FAzDou3YQxFUnXBs4RwFspKly51%2B1l81WmcIuauvMjoyWK%2BCtxtv4e0SyJUL9nUFQa89WySoCsJWCCLOYXNbguLxCFfC9efKGrMWdNB65YlOifc8h4dCIgCP1JGZhuv58yYC2FCEsYuy7ek2bTQXEtfhaNt%2FlQbBK2uFtJIRV%2FGYd2EDMK2cjMQGOqUBUINgvS8t09VyGTd%2F4yJcwCNNglisPXFMhX95hN3woYJo%2Fe9SctbxbuF8o1Gkm9VVKfKnSJMQ3%2FkpXjXe2R0fNEOpOAt73OjFI%2B7KKwO0YeTLlmAlC2xsCFWK34TZjGxQBKrw5mAgAAIEgEol8JcZjQDD3%2BAvmgUhDAk3h878EJ32AgGro%2Bax9hOSKvNj6xmbrCq61m2NePGe4B0UmV54FUsJnWqy&X-Amz-Signature=90738448bb80a1f29b7cd8482001b43694d489b487f67469d244d7f70f6e76fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTIF4AE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE%2BeDz39hUvA2NLrwdLTevJEBnRF%2F4S5FC9lfifNaEJzAiEA%2FsxK%2FUzmTG7evGL7F7GRw2cE6x%2BEfNi%2BqcbmRjTRQ1gq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKOENTp6u6K0j0seHircA%2FPTtTTY7lshTuO4%2Fmvhki9qysf3cbVjMlAGlXxx0%2BOWXDoqfvBiEUP1wVAOKfHs1PgS0tCG%2FsDfVkk4BOtLDOQZKQLD1oXEmfqSDe1BpODlcgcrxKeLG4hBEMJlEnsdhdw94i%2BVo3pf%2Fc3OEBkTddAdpyrp8Xi710vyc1B35G2GHg7%2BtnYifpzsLHxqqoOVWvvGo%2BOJH%2Bca3j65bzhATf1Vo3x77lyrprc0cssN3XPJpJAQMhJeFjSAf0EzIP6Z5RhqbeWw7tKUTp9BFbf4SOVNYpdWt4cFGxTauzsDFth4rCJC1IUN%2F7hptQTxvU3xMdgvV6imjT1%2BW4KEbJJm8e1sPR9G0ZgP2f6UsmLWaRcOUHj2gcMpra%2BENC%2BotDSBeaIJ4FJENysC1nLYww3KqQ%2F05YNZN7KB7BjFP9H3AfSKSiAzu0eFXkvVNKDkz0E%2Be%2FXH7yb8lq16%2FAzDou3YQxFUnXBs4RwFspKly51%2B1l81WmcIuauvMjoyWK%2BCtxtv4e0SyJUL9nUFQa89WySoCsJWCCLOYXNbguLxCFfC9efKGrMWdNB65YlOifc8h4dCIgCP1JGZhuv58yYC2FCEsYuy7ek2bTQXEtfhaNt%2FlQbBK2uFtJIRV%2FGYd2EDMK2cjMQGOqUBUINgvS8t09VyGTd%2F4yJcwCNNglisPXFMhX95hN3woYJo%2Fe9SctbxbuF8o1Gkm9VVKfKnSJMQ3%2FkpXjXe2R0fNEOpOAt73OjFI%2B7KKwO0YeTLlmAlC2xsCFWK34TZjGxQBKrw5mAgAAIEgEol8JcZjQDD3%2BAvmgUhDAk3h878EJ32AgGro%2Bax9hOSKvNj6xmbrCq61m2NePGe4B0UmV54FUsJnWqy&X-Amz-Signature=5623b7d9ae45ab7ee48deb0778da7c94ce4f630a7a4ce7f02406738c18f515e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTIF4AE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE%2BeDz39hUvA2NLrwdLTevJEBnRF%2F4S5FC9lfifNaEJzAiEA%2FsxK%2FUzmTG7evGL7F7GRw2cE6x%2BEfNi%2BqcbmRjTRQ1gq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKOENTp6u6K0j0seHircA%2FPTtTTY7lshTuO4%2Fmvhki9qysf3cbVjMlAGlXxx0%2BOWXDoqfvBiEUP1wVAOKfHs1PgS0tCG%2FsDfVkk4BOtLDOQZKQLD1oXEmfqSDe1BpODlcgcrxKeLG4hBEMJlEnsdhdw94i%2BVo3pf%2Fc3OEBkTddAdpyrp8Xi710vyc1B35G2GHg7%2BtnYifpzsLHxqqoOVWvvGo%2BOJH%2Bca3j65bzhATf1Vo3x77lyrprc0cssN3XPJpJAQMhJeFjSAf0EzIP6Z5RhqbeWw7tKUTp9BFbf4SOVNYpdWt4cFGxTauzsDFth4rCJC1IUN%2F7hptQTxvU3xMdgvV6imjT1%2BW4KEbJJm8e1sPR9G0ZgP2f6UsmLWaRcOUHj2gcMpra%2BENC%2BotDSBeaIJ4FJENysC1nLYww3KqQ%2F05YNZN7KB7BjFP9H3AfSKSiAzu0eFXkvVNKDkz0E%2Be%2FXH7yb8lq16%2FAzDou3YQxFUnXBs4RwFspKly51%2B1l81WmcIuauvMjoyWK%2BCtxtv4e0SyJUL9nUFQa89WySoCsJWCCLOYXNbguLxCFfC9efKGrMWdNB65YlOifc8h4dCIgCP1JGZhuv58yYC2FCEsYuy7ek2bTQXEtfhaNt%2FlQbBK2uFtJIRV%2FGYd2EDMK2cjMQGOqUBUINgvS8t09VyGTd%2F4yJcwCNNglisPXFMhX95hN3woYJo%2Fe9SctbxbuF8o1Gkm9VVKfKnSJMQ3%2FkpXjXe2R0fNEOpOAt73OjFI%2B7KKwO0YeTLlmAlC2xsCFWK34TZjGxQBKrw5mAgAAIEgEol8JcZjQDD3%2BAvmgUhDAk3h878EJ32AgGro%2Bax9hOSKvNj6xmbrCq61m2NePGe4B0UmV54FUsJnWqy&X-Amz-Signature=2c65de4aed99a1aeb2109bb8e38e325a6f15cc853c413dcb1beb6ecddc7e5b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
