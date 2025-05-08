---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHU6TRIX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6akMk3bQX5yobEfaujgY0gRN7clzV96J0bVrJ9qIzwAiAYst%2F2gSZbipdCaeow4xlRKDvboUFXsTRaYP2%2BnNxX8Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMQG4czdHpdKQMwqUGKtwDBf05F1kdCHQJHt2cv%2BnkgI7c6z%2BInKNHV0%2FOL2Gw25WCiMY5LYOTHoAl6wDkY8w0MuKlvRgLNQ4BPMhHtwkBv%2BRD4%2Byypfp6ANyNfXF%2BIYfZuUInM7dqhD7pvha%2BB38Ce8SwhDTE1GiykGOkNw0DQfzcLLupQe9O%2BpPCxoPzzfu5Ot%2BBSPb9Nnp7H%2F3d9lzmNOcg8iJ2tGGmKa3yCsKnC7d9hqoeXLr7T%2F8RhC9B%2FuLBG0TNoUR5dMBod7tyI1sKYHXd7nOBCD5KB1gkW7Lk5lzVWSTjk5rzi3A1jdKBiYEBQYvH%2BN7Ma24WgvagfPqn6qP7RObjTDZAxd7inrhEwV7VSepgH375OIH590U8S286nMLZ46ZeZ0b2QSo4jv87u8sJzEgbBbmeY3P91HShCpOcyUED%2BYmqOIMF6BgCglB07NYKjGX6Nka3J4fC4mRu%2B5JkkMBLwqMFe8fXcFOpnS6cLHqNLMDTgwCvR3TVLyxbSmXFnY8YMi8zdSeIDMorN34b0wW5Fcmgro%2FbUHje4Fc8aMGiGhEuQmBIPKnBpe2pQHC7W4ltfn%2BQdC%2BFHDmoWn4IDnMOI4xM8jPXD9vFlSBsFkdhQ6yqvkHpMIV1hrXvGeebvpEgUUwHtCQw0rPzwAY6pgHyns1CBFHQtJRdcCPYeEO0727LkgDP7zGPdRZrWxZiBs8ilFkv8e21VoIfeC5GH3rCtoArINGE6%2FQjG8hYVhmTbniPiALCok6OJ2lsPGWegXWePy%2F54TInIkZqiZy%2FpAs0cB8oZKh448l7neDVew%2Bymv4pVW%2BKNw8%2FXzmhTi0NjBHYtmigVluU68VuBBZnu88BuIlOFT%2F2%2FuU004m8ebVKXsclMV5O&X-Amz-Signature=8ed04d61417506a8d6c104e141f88578126760eeb40dbf8a2ea5796a67be0380&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHU6TRIX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6akMk3bQX5yobEfaujgY0gRN7clzV96J0bVrJ9qIzwAiAYst%2F2gSZbipdCaeow4xlRKDvboUFXsTRaYP2%2BnNxX8Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMQG4czdHpdKQMwqUGKtwDBf05F1kdCHQJHt2cv%2BnkgI7c6z%2BInKNHV0%2FOL2Gw25WCiMY5LYOTHoAl6wDkY8w0MuKlvRgLNQ4BPMhHtwkBv%2BRD4%2Byypfp6ANyNfXF%2BIYfZuUInM7dqhD7pvha%2BB38Ce8SwhDTE1GiykGOkNw0DQfzcLLupQe9O%2BpPCxoPzzfu5Ot%2BBSPb9Nnp7H%2F3d9lzmNOcg8iJ2tGGmKa3yCsKnC7d9hqoeXLr7T%2F8RhC9B%2FuLBG0TNoUR5dMBod7tyI1sKYHXd7nOBCD5KB1gkW7Lk5lzVWSTjk5rzi3A1jdKBiYEBQYvH%2BN7Ma24WgvagfPqn6qP7RObjTDZAxd7inrhEwV7VSepgH375OIH590U8S286nMLZ46ZeZ0b2QSo4jv87u8sJzEgbBbmeY3P91HShCpOcyUED%2BYmqOIMF6BgCglB07NYKjGX6Nka3J4fC4mRu%2B5JkkMBLwqMFe8fXcFOpnS6cLHqNLMDTgwCvR3TVLyxbSmXFnY8YMi8zdSeIDMorN34b0wW5Fcmgro%2FbUHje4Fc8aMGiGhEuQmBIPKnBpe2pQHC7W4ltfn%2BQdC%2BFHDmoWn4IDnMOI4xM8jPXD9vFlSBsFkdhQ6yqvkHpMIV1hrXvGeebvpEgUUwHtCQw0rPzwAY6pgHyns1CBFHQtJRdcCPYeEO0727LkgDP7zGPdRZrWxZiBs8ilFkv8e21VoIfeC5GH3rCtoArINGE6%2FQjG8hYVhmTbniPiALCok6OJ2lsPGWegXWePy%2F54TInIkZqiZy%2FpAs0cB8oZKh448l7neDVew%2Bymv4pVW%2BKNw8%2FXzmhTi0NjBHYtmigVluU68VuBBZnu88BuIlOFT%2F2%2FuU004m8ebVKXsclMV5O&X-Amz-Signature=147d773168fb6fd4eb4978fd8ad2e773e06d42483d8695a273d49360e0c2d9f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHU6TRIX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6akMk3bQX5yobEfaujgY0gRN7clzV96J0bVrJ9qIzwAiAYst%2F2gSZbipdCaeow4xlRKDvboUFXsTRaYP2%2BnNxX8Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMQG4czdHpdKQMwqUGKtwDBf05F1kdCHQJHt2cv%2BnkgI7c6z%2BInKNHV0%2FOL2Gw25WCiMY5LYOTHoAl6wDkY8w0MuKlvRgLNQ4BPMhHtwkBv%2BRD4%2Byypfp6ANyNfXF%2BIYfZuUInM7dqhD7pvha%2BB38Ce8SwhDTE1GiykGOkNw0DQfzcLLupQe9O%2BpPCxoPzzfu5Ot%2BBSPb9Nnp7H%2F3d9lzmNOcg8iJ2tGGmKa3yCsKnC7d9hqoeXLr7T%2F8RhC9B%2FuLBG0TNoUR5dMBod7tyI1sKYHXd7nOBCD5KB1gkW7Lk5lzVWSTjk5rzi3A1jdKBiYEBQYvH%2BN7Ma24WgvagfPqn6qP7RObjTDZAxd7inrhEwV7VSepgH375OIH590U8S286nMLZ46ZeZ0b2QSo4jv87u8sJzEgbBbmeY3P91HShCpOcyUED%2BYmqOIMF6BgCglB07NYKjGX6Nka3J4fC4mRu%2B5JkkMBLwqMFe8fXcFOpnS6cLHqNLMDTgwCvR3TVLyxbSmXFnY8YMi8zdSeIDMorN34b0wW5Fcmgro%2FbUHje4Fc8aMGiGhEuQmBIPKnBpe2pQHC7W4ltfn%2BQdC%2BFHDmoWn4IDnMOI4xM8jPXD9vFlSBsFkdhQ6yqvkHpMIV1hrXvGeebvpEgUUwHtCQw0rPzwAY6pgHyns1CBFHQtJRdcCPYeEO0727LkgDP7zGPdRZrWxZiBs8ilFkv8e21VoIfeC5GH3rCtoArINGE6%2FQjG8hYVhmTbniPiALCok6OJ2lsPGWegXWePy%2F54TInIkZqiZy%2FpAs0cB8oZKh448l7neDVew%2Bymv4pVW%2BKNw8%2FXzmhTi0NjBHYtmigVluU68VuBBZnu88BuIlOFT%2F2%2FuU004m8ebVKXsclMV5O&X-Amz-Signature=70f0194837f00847e68d269f9d7b817f7964f0fd18662b55f8e464dd0b38daea&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BGSSGEL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvXgRkJGZYtCDXiQKi3HzG%2F7KUmNMbZDRuqEuMU4%2F9%2BAIhAM8W8n13%2FTjS9ERdLNWItTy7LvENVIWEhTTcCiorx3SDKv8DCHkQABoMNjM3NDIzMTgzODA1IgyEob%2FWj9Pn8Htd8k0q3AMM8OoNaeWpPGlyUZ316i5CFmC7qObA9lJYML1T%2Fi%2BsiP%2FzAeWR2wX9VRZI6MpWXqwFZqK%2Bo3xo1hsZQm7%2FSo%2B3jMfI572aatQ1h0Qx6fte3aNYXf8dI6l9LH7FvH0MLJWFjmm9hZC55Nd3DgRTCr8iFexaEoK2x4AVJOugoQK%2Bu%2BPA4Rv6jIDxYYTY6nYH4Abfe%2FiClV1bQV%2Fc3HbiKSRCpuOaLaEi97n8sNwerKzwsb22W7n6QKH2FfkDc9Us72aVZwJ%2BLMx3TUS%2BCxsEujTtgX%2F5%2Bxs%2FVWWedIjS6fXhtNMCda1RRml8HHwnxmbmsnLHklPbMXz%2FaOW7kQIFpGE2SxGNW6ed7UoM5DvXAOXbf30fvNtPKrEsS1%2FBEiWVif5nDFXX3cH1xvkcLPaDbvw0n4RXo%2FtuKuBmqd%2FGIq0LpdcKaX%2BpCzmdGT35YeTPmUyuEhKSWpCnV3B6xma%2F%2B3WcldflVrO91dmAywGqsxPD5lE9QugZiqEiDWrtzhG6oDcLulK2e2rv2Mcd0GAlg%2B569Rnfgleubk48jv8L7QpwUucEdhSaY3311R9jCYeWJ4pOAqRvuIYA5F8dj4PxTbShChLBm73KIQtUs7N3sHlZdBimczDGq7hSpZeeQTDvs%2FPABjqkASKH8%2BFkYthICxu5h6d0E401NrSY29lLF9V8b2giyp%2FIZcEShEqjpsirWK8AwJ%2BcOQjdyrQeapkU%2FeDIKHtAyCpLsvGQP12Y7ouoCCM6nhsZ0ZqWBj62bTSbK9S%2FVCWRhO9sEO3sP9NPs2g84QSfQu46lzzKEWrmBcKSnLPXjeE7LbRza15twMLIRFhG%2FN4yLWBS73PCavp%2FitnJxFou1jIwABgw&X-Amz-Signature=a12cd2327b56573dded84951c0810e8a720e222285ac0fc58bf51536d42ead74&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYDXCZR%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSvGqlPlM6gB5LQdiekdZUSEtkN1XTHIfWo5RRkriGAAiEA%2F6l8%2BwSjZRXDORDVjPv3tzWwk9OJVG09ds%2FaZwsIw%2BQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGNTrGioKBM5sgj2SircA3%2FV1UvSpWC88plJdHK6Ji9FbbMA5wCMHHF863WTc8xUWWNKFw38vYr%2BCXBNXFEPip4U3FAOV2ajeBwjZeu9onmKtv2%2Fwj95%2BPcxEEJAwVWldHSuWzHDVIgbaXU1KDzOMXc2%2FP9cVSumEOaFPRMVaFLTv7C7BzO8CjcGmqomtaOVzLyIiGmkLHbu%2B0R5ZBocdFY%2BSuw4sUZ1iuoe75WKIhq63oG5y0hjJ74aJgMWWimMnBP%2FFUmYQ0hKhO%2BDVoCkeIIfKeZhWnb%2BFsdlz2r6tnNIE5hGCfy74Kpg4N9elNsXj72AeoQcoLdZHesuXaY14HVIOV2EKzAyC3EA%2FRRI%2F9JQhr7Xb0Xz2IDiA2fPkB4IXdMe%2FUN7VjHpp8o7BCB2FZLjjiRlT8j9PiEYaP19KpMlkX2xTBBezMIj3tS8PIK3DpfiA0l%2BCPdzt6zHBIe3%2BYwYS7V3d1%2BNMYAtaY9JhKGWF0MeZfRzDgWdnYzEpp1o5UWQhNHS9%2ByI285Wj9cAjqvtugJ0%2FEW%2BntX9TAeEDOVHg8TyvpYTT0heE8bRairsNincLGQLZXZKGqZsOgf7ZevtbFP9DgtWez5JddSxRfXM3WmN21RImbe7mJjnIfsEum4InAdLlsQwsLmZMI6088AGOqUB3XA4OwzaEhe58lQyd232xv7GIU1w9hYC%2Bo0ESV6BXm%2FT9m4Oi5KXBbLpjvxbH8sSrcw%2FClrwu2bv46hLtJYoN5z8nJlGj157fMYjhjStg8GtsSSRWmYNJJNnRsidY8FXl7V9zkfrcY2bEQ%2BI6CFl1ZXSKjbX1%2FBwm%2BTX%2BizqpnE2gAZRQE3YOjhBzx%2FQD7BzhMoVyk2JqApDauarqOzDrnS0lMFb&X-Amz-Signature=77141de70846cebc6e4e3e4bb441a25e242088fb917855e53e55a5a539cc41ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHU6TRIX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6akMk3bQX5yobEfaujgY0gRN7clzV96J0bVrJ9qIzwAiAYst%2F2gSZbipdCaeow4xlRKDvboUFXsTRaYP2%2BnNxX8Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMQG4czdHpdKQMwqUGKtwDBf05F1kdCHQJHt2cv%2BnkgI7c6z%2BInKNHV0%2FOL2Gw25WCiMY5LYOTHoAl6wDkY8w0MuKlvRgLNQ4BPMhHtwkBv%2BRD4%2Byypfp6ANyNfXF%2BIYfZuUInM7dqhD7pvha%2BB38Ce8SwhDTE1GiykGOkNw0DQfzcLLupQe9O%2BpPCxoPzzfu5Ot%2BBSPb9Nnp7H%2F3d9lzmNOcg8iJ2tGGmKa3yCsKnC7d9hqoeXLr7T%2F8RhC9B%2FuLBG0TNoUR5dMBod7tyI1sKYHXd7nOBCD5KB1gkW7Lk5lzVWSTjk5rzi3A1jdKBiYEBQYvH%2BN7Ma24WgvagfPqn6qP7RObjTDZAxd7inrhEwV7VSepgH375OIH590U8S286nMLZ46ZeZ0b2QSo4jv87u8sJzEgbBbmeY3P91HShCpOcyUED%2BYmqOIMF6BgCglB07NYKjGX6Nka3J4fC4mRu%2B5JkkMBLwqMFe8fXcFOpnS6cLHqNLMDTgwCvR3TVLyxbSmXFnY8YMi8zdSeIDMorN34b0wW5Fcmgro%2FbUHje4Fc8aMGiGhEuQmBIPKnBpe2pQHC7W4ltfn%2BQdC%2BFHDmoWn4IDnMOI4xM8jPXD9vFlSBsFkdhQ6yqvkHpMIV1hrXvGeebvpEgUUwHtCQw0rPzwAY6pgHyns1CBFHQtJRdcCPYeEO0727LkgDP7zGPdRZrWxZiBs8ilFkv8e21VoIfeC5GH3rCtoArINGE6%2FQjG8hYVhmTbniPiALCok6OJ2lsPGWegXWePy%2F54TInIkZqiZy%2FpAs0cB8oZKh448l7neDVew%2Bymv4pVW%2BKNw8%2FXzmhTi0NjBHYtmigVluU68VuBBZnu88BuIlOFT%2F2%2FuU004m8ebVKXsclMV5O&X-Amz-Signature=b1afb483d454edc3320748822db512b227161fd43dbe57ad7b6fe7e4868cfe37&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
