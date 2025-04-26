---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SI2SAL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYp97utzyQkxXY8zq1VyvhYumWvUJk4lEZfhx%2FaKp9lAiB%2FMfOYnLwz2MuujJw7%2FgfcJtFCoORoesTh6HZuJ24WRCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMZDOzTTkrtYrQ2YTEKtwDTwXwHb2G%2BNs2Jd8JTvOT318%2FX9%2BAgSpEIGk%2FMoeTvfUtTr4l8VEjPy4b2A0pO2qhQIVP8RDQHtE4%2BMQkd6V4VmGU8t3ZuB%2BgwGmzRkMOeh7SbU2Z7y3br4eiGuz15ySiM%2Fk1iorltY4oiuh4RjWCv%2FTiOD%2BcOINjjg2X3vsAOLaNUNcUmc42PyQlwj7E9u4oyhgtS7h2uaAZowooj7qhHgkW6z%2Fa6oEoK3DOPcq86PuE8FP9RwFXwhk4lnTmCFHV%2Bpzp6R260TannHVOvKkVl5FEeSPOx3CbaO%2Bv0jPVpYabuS%2FQ9pOGY2RgoKT27565RjbmIRpVY8cDxeZ%2Bq%2FM7u1FYyk8qUfHuaTeMt5iYGM1mUlnErAVB92oVUBtwpIObedmdWr5qOBFiCYzn0pmjI9C4JO8RrXMzeXUyRtprd1xEthX5pIfvdchSueFPd5a0Q%2Fu1E9E8J12rhU4EkGviCJAhpPykqirrkOxf6lJyEam4CLpgtCIDH2TGl9ZWV8q43L%2BZjD8xq73m2buRxPlxZ6408%2BQJEuBXX1diM9loEgto9P6pZVm9ifnEQWY23e%2Ba6Ak8BWEUy%2FxehkMmq3DpQWbpuK%2F1aSpZ3W8vDf0eew3Rylt9Nq0SuZla3QcwxuazwAY6pgHLRimTnx2gi6aMJs%2BJph0A4ZMthOmkLqGuwNleILU9qXxtHGXQTcsM9sLgnXsZ7zzHYL4i8k8xRtinEt58rm0BC2JrsIcjEDkkUSc7mwxWdhc6iMFo6P2gLkxA%2BukwNaMmm2bOwS2xntf5tqqfzY92ZwXoR6ScdSX8TJsQhosnK0kw%2FLtjwMCT2fvhqbs7pf3INdj5JuzDbJqVUIury%2BpZroVf82pe&X-Amz-Signature=4c3bce15baef05eeb0de9213a725999e15f0317e5918e48b74f4d4934dd25233&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SI2SAL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYp97utzyQkxXY8zq1VyvhYumWvUJk4lEZfhx%2FaKp9lAiB%2FMfOYnLwz2MuujJw7%2FgfcJtFCoORoesTh6HZuJ24WRCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMZDOzTTkrtYrQ2YTEKtwDTwXwHb2G%2BNs2Jd8JTvOT318%2FX9%2BAgSpEIGk%2FMoeTvfUtTr4l8VEjPy4b2A0pO2qhQIVP8RDQHtE4%2BMQkd6V4VmGU8t3ZuB%2BgwGmzRkMOeh7SbU2Z7y3br4eiGuz15ySiM%2Fk1iorltY4oiuh4RjWCv%2FTiOD%2BcOINjjg2X3vsAOLaNUNcUmc42PyQlwj7E9u4oyhgtS7h2uaAZowooj7qhHgkW6z%2Fa6oEoK3DOPcq86PuE8FP9RwFXwhk4lnTmCFHV%2Bpzp6R260TannHVOvKkVl5FEeSPOx3CbaO%2Bv0jPVpYabuS%2FQ9pOGY2RgoKT27565RjbmIRpVY8cDxeZ%2Bq%2FM7u1FYyk8qUfHuaTeMt5iYGM1mUlnErAVB92oVUBtwpIObedmdWr5qOBFiCYzn0pmjI9C4JO8RrXMzeXUyRtprd1xEthX5pIfvdchSueFPd5a0Q%2Fu1E9E8J12rhU4EkGviCJAhpPykqirrkOxf6lJyEam4CLpgtCIDH2TGl9ZWV8q43L%2BZjD8xq73m2buRxPlxZ6408%2BQJEuBXX1diM9loEgto9P6pZVm9ifnEQWY23e%2Ba6Ak8BWEUy%2FxehkMmq3DpQWbpuK%2F1aSpZ3W8vDf0eew3Rylt9Nq0SuZla3QcwxuazwAY6pgHLRimTnx2gi6aMJs%2BJph0A4ZMthOmkLqGuwNleILU9qXxtHGXQTcsM9sLgnXsZ7zzHYL4i8k8xRtinEt58rm0BC2JrsIcjEDkkUSc7mwxWdhc6iMFo6P2gLkxA%2BukwNaMmm2bOwS2xntf5tqqfzY92ZwXoR6ScdSX8TJsQhosnK0kw%2FLtjwMCT2fvhqbs7pf3INdj5JuzDbJqVUIury%2BpZroVf82pe&X-Amz-Signature=7b5060af8a8044371d1324534de712845b0bde80034ff0b0942e9f569fd14e90&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6AJ2LBA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdF4LDxu%2F%2FMKEDtGob%2BU613zvb2wuUY%2Ft%2BqmCoORpf3AiBlw5EBdIxf%2FZW02OiU%2FpGCG1T2rRwLu%2BJHtVm0zidK%2BSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMgHZJNVGzrY8mXTVcKtwDFCbALuaPuVZHN8tS7CIrYjE5mLaWwEnYC6OUZPZrX26ji56bzN0MUAIApMifHTroeocGyoeJ3kQk7zAiv8oYy%2FAugnBdvnt2%2BULgPzGuz8BfX80DNKMwXPePHIqVhldbLjmshQNZXlQreUKxBZS3A7Ae3PsJZD9PlD6oFhgAG6c8ep%2B%2FASARmtcH1X7eL0nXAVtjHsmD0apLSeP%2B5B8vk24XsB0pUdc48jiTUOAc7aMewjzjPD%2FQ267QMqBLZLiw28RkyjqS4OLlbVCv0GAJYnCnn7hGmdNG%2FyRh%2Fk6zVHekDI0ite0ykqPY7qmA4LcrsiITXVY7mEuvsxTzX1xYKbqlMVb%2FFW15%2F1jDNbl0FM50UgE%2FELZ%2BaIHdmJErN4oZZVYwwjUTcd9NuSuHjBvg5KPiixrRI8lARtA50WcJedgQ7KrbYYfRUiuC2JDbIMADKkwnPQYMKBvWwIo9hcfDj8l2RLkRgDFSap3Q2ZzmelAyG6Z38a%2BGoNFtFq3QcOJ9ToSuRJO%2B%2F5FiiFhadYPZmnm0NenuPavYozmDxRKpO39%2FLcg7kZKVHXTgApHIckpxJ0Wrrx0LKaufPqPBQKpNMwofi0XzHEAURekD5sUpKFYQt3kQgvmUkuus71Qw4%2BazwAY6pgEEPyQe2dRh1G884ac8gBYSHBwTHLpN0ElGOri8j0csgc0ugGI4GBZ3bPHbagTw3cgo2jtKG4ZGfuZfWBqekceZ9PyirmF88f0RZKOhEDAUgvG05XV2iKAjkm7c%2Fgjaudthrdr4EeIqvGK7BQ4nkn6q%2FTG34ssyDWuDo6Mn%2BLrTa4Hj6%2FdQQLBbtIWTH051iuheDFI8TytnWzJEvMsdL1xERXKBkLYL&X-Amz-Signature=544321eca2d58ef02e220394c7be3a5c736a8c0038fafe8223fa6db9ce6c9d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUW5XI7Z%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdptVQ0%2BYPAVsBuMlfY%2BbBwntGqGf9uBaAa94Tjw1rtAiBBBfvwNTqmz2%2FbDU3gbj0mm%2BLBwhrAElE6TYetXstmYSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM1B%2FnbXFxlSyqb1VRKtwDsfpmiSYOlNCzqabxPTfCKxpe1gSkzWWTrrID%2FiN%2F%2B6cqvV3vlPl2Z7qF%2BvagtrPYgvb73nPP3NYpsB%2BsRr0XTw7INY5pX3Xa4Al27Kou9VK0VdwIwO%2B4dqDBPAyfIXBvX99CLdttLvJIecUDBxt8XEsKRf6gg6IJ06Pe5b%2F5GoGjZXPCX6AatRqd7GYON9cfrXuZ89ZAm1N6xbGDy3QeVKAY4yEWNdc37hAtfFZ6i99yRiz5TDD%2FysP0XnWOuJuOrKWO8bI6rsSMWrfzjoTqGRkd%2FscltzOQ42OJlvxU4u0rI%2FAX0VyoznZ1TpyGZX9h3dOxWKg2Cme8v4A6T3NSe3dr3x5FUcsqUmDjzF4HZBDUWSSghn3tD%2BeXYq9mzizmJV8ost%2BstI9o275hW%2FR4yzYC60PoZaSbBFXFAYYfmFj9NEfLZSeHjwVpbFLFoXqZwU8%2B6WAQIxozedCswZa1Ds%2BGUyZPAlZ44a8za8HZKs0O9L7SqMioL7M03kVOuXGw57aoGKoPgm2Pr2aqa09tyR%2BmLGLiZzm97nfCMRolT9VWcGnEoSGMC7iTgc0veTUTc1yUqiEo%2BqIm9ruxygLKPGJd03cwZi7sg8XHZv1lTQ2tIUUKy5rEcK5D9cQwgeezwAY6pgGcunQCgzR4GPvOTfP1nBa6aUH8JOU6gozQquAojnx7X27kDNfxCyGoI1Ilz3hr1sY00QX4iH3ZdcxPpc9%2BMSTZnU5PuF3sjeaCMdDD8cMogSrFd2Op4TCRLFs6Q9BxGANFzCXglo32cJKb800p5qcTQdziMoBIkKbX79fluv2of1hCRQno%2B8CnJEd8xTXE%2BZOE5euvB7ygW9iq1DgcS1h1%2FZYSvPLV&X-Amz-Signature=53ed8a1016a8c07a1afca4a118ce9af8138c2eaea2dc945130568667b6108cfe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SI2SAL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYp97utzyQkxXY8zq1VyvhYumWvUJk4lEZfhx%2FaKp9lAiB%2FMfOYnLwz2MuujJw7%2FgfcJtFCoORoesTh6HZuJ24WRCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMZDOzTTkrtYrQ2YTEKtwDTwXwHb2G%2BNs2Jd8JTvOT318%2FX9%2BAgSpEIGk%2FMoeTvfUtTr4l8VEjPy4b2A0pO2qhQIVP8RDQHtE4%2BMQkd6V4VmGU8t3ZuB%2BgwGmzRkMOeh7SbU2Z7y3br4eiGuz15ySiM%2Fk1iorltY4oiuh4RjWCv%2FTiOD%2BcOINjjg2X3vsAOLaNUNcUmc42PyQlwj7E9u4oyhgtS7h2uaAZowooj7qhHgkW6z%2Fa6oEoK3DOPcq86PuE8FP9RwFXwhk4lnTmCFHV%2Bpzp6R260TannHVOvKkVl5FEeSPOx3CbaO%2Bv0jPVpYabuS%2FQ9pOGY2RgoKT27565RjbmIRpVY8cDxeZ%2Bq%2FM7u1FYyk8qUfHuaTeMt5iYGM1mUlnErAVB92oVUBtwpIObedmdWr5qOBFiCYzn0pmjI9C4JO8RrXMzeXUyRtprd1xEthX5pIfvdchSueFPd5a0Q%2Fu1E9E8J12rhU4EkGviCJAhpPykqirrkOxf6lJyEam4CLpgtCIDH2TGl9ZWV8q43L%2BZjD8xq73m2buRxPlxZ6408%2BQJEuBXX1diM9loEgto9P6pZVm9ifnEQWY23e%2Ba6Ak8BWEUy%2FxehkMmq3DpQWbpuK%2F1aSpZ3W8vDf0eew3Rylt9Nq0SuZla3QcwxuazwAY6pgHLRimTnx2gi6aMJs%2BJph0A4ZMthOmkLqGuwNleILU9qXxtHGXQTcsM9sLgnXsZ7zzHYL4i8k8xRtinEt58rm0BC2JrsIcjEDkkUSc7mwxWdhc6iMFo6P2gLkxA%2BukwNaMmm2bOwS2xntf5tqqfzY92ZwXoR6ScdSX8TJsQhosnK0kw%2FLtjwMCT2fvhqbs7pf3INdj5JuzDbJqVUIury%2BpZroVf82pe&X-Amz-Signature=894a6cf841b57184feb610c44ca84221fe09a98a3c5667a915da015dad27c1da&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
