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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGUP45B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIBvDLoSYTD7frUUjNsGvIlCtSHb9SYCTEKw7e8%2Blt9HjAiBrhbypcCMHpMhvLyU6VD%2BoVEUWEqi7IXP%2FMsjyhNcUNCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPubjf2AhHY4g%2B2ZaKtwD9m0hFV0%2FXEHCSmoS1zc8POgOVjZKGHA0QS5joeNCXV7iLC4BAihrh%2BkJuQKjkK%2B1fIE5u%2FImqBkg099AKuR%2F%2F0uQeuNOU7viJcVs0mOEeG3CoHT0IBVjglGHlr9ENExr9aFXHTk6auY5vev4U%2B8vP2AKhhoeNY3kgg71vQYntiZwK1UJTDqmDMrRmWM%2FMjXA2hjjFnWPs2L92BwFHomGSzx4t72MkqT%2BRKIIZivOI1VZo1bIq6f5SRaGyKzyOWTa7B0%2BO2qk1hZQ9BFBV0p7OY%2BsS0NElmdqUBETwCaOg9rP9000pt533rNYj3TtVfjTqdTAS13F1NOdXLAu0G1LuTT%2B7rT97q9ij%2FMzT5pryCiCQ8Mpt3Jd2A7VETes6hBfpa3IYNesaZS2ZiL6Ds5%2B9PhUNDLTApMUABmZc1h12JsHteu4ZE6V7G4O%2FbuAr6smK19Ec7TAKU901XosB8kv6NEI1GTk0QUPxNM2RFmD8vAkm3UODIaEBLjX%2B3hUHvwWNBv2S0jND4Npfk3wqUF2aG0kZ72bltMj4IUOKUl6rErtQXpD2yJVIA4Csuq6YTRIJabryYSB4ZG%2FVetussbwh4SjoAWEYt0nCQq2NNpVcAjqNFlxLDju055Pd0swxNnBwQY6pgGU2%2F12Pytc11dCtfUcUsjXWJ90ejhD%2BtgDqRoVFZ4iWMm5l%2Bzxa35vpAYWu0lIk8yMsONaLBz8VeCWRj9CUD%2BVRYUi%2F28Rtz%2BIDAWZxJScfNJdzHlnWAeTEF%2Fbnh32v8mLjYvaczQN2OYeASaAXdD1StGeL%2FJc8EROhUYUZRnWOdZSKuz0ehn0DIRvxPLOSN6MVNmsZU8zPhXaakMBbsojt6c1DrKj&X-Amz-Signature=c8100e065552b1576f5005bbe5a784522978329c0359b2d15bb33e095fa4ec4c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGUP45B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIBvDLoSYTD7frUUjNsGvIlCtSHb9SYCTEKw7e8%2Blt9HjAiBrhbypcCMHpMhvLyU6VD%2BoVEUWEqi7IXP%2FMsjyhNcUNCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPubjf2AhHY4g%2B2ZaKtwD9m0hFV0%2FXEHCSmoS1zc8POgOVjZKGHA0QS5joeNCXV7iLC4BAihrh%2BkJuQKjkK%2B1fIE5u%2FImqBkg099AKuR%2F%2F0uQeuNOU7viJcVs0mOEeG3CoHT0IBVjglGHlr9ENExr9aFXHTk6auY5vev4U%2B8vP2AKhhoeNY3kgg71vQYntiZwK1UJTDqmDMrRmWM%2FMjXA2hjjFnWPs2L92BwFHomGSzx4t72MkqT%2BRKIIZivOI1VZo1bIq6f5SRaGyKzyOWTa7B0%2BO2qk1hZQ9BFBV0p7OY%2BsS0NElmdqUBETwCaOg9rP9000pt533rNYj3TtVfjTqdTAS13F1NOdXLAu0G1LuTT%2B7rT97q9ij%2FMzT5pryCiCQ8Mpt3Jd2A7VETes6hBfpa3IYNesaZS2ZiL6Ds5%2B9PhUNDLTApMUABmZc1h12JsHteu4ZE6V7G4O%2FbuAr6smK19Ec7TAKU901XosB8kv6NEI1GTk0QUPxNM2RFmD8vAkm3UODIaEBLjX%2B3hUHvwWNBv2S0jND4Npfk3wqUF2aG0kZ72bltMj4IUOKUl6rErtQXpD2yJVIA4Csuq6YTRIJabryYSB4ZG%2FVetussbwh4SjoAWEYt0nCQq2NNpVcAjqNFlxLDju055Pd0swxNnBwQY6pgGU2%2F12Pytc11dCtfUcUsjXWJ90ejhD%2BtgDqRoVFZ4iWMm5l%2Bzxa35vpAYWu0lIk8yMsONaLBz8VeCWRj9CUD%2BVRYUi%2F28Rtz%2BIDAWZxJScfNJdzHlnWAeTEF%2Fbnh32v8mLjYvaczQN2OYeASaAXdD1StGeL%2FJc8EROhUYUZRnWOdZSKuz0ehn0DIRvxPLOSN6MVNmsZU8zPhXaakMBbsojt6c1DrKj&X-Amz-Signature=e8bfe4528ffd3d36abdafb895bf36d0939099fb811a4278c47e48d2232b22b2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGUP45B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIBvDLoSYTD7frUUjNsGvIlCtSHb9SYCTEKw7e8%2Blt9HjAiBrhbypcCMHpMhvLyU6VD%2BoVEUWEqi7IXP%2FMsjyhNcUNCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPubjf2AhHY4g%2B2ZaKtwD9m0hFV0%2FXEHCSmoS1zc8POgOVjZKGHA0QS5joeNCXV7iLC4BAihrh%2BkJuQKjkK%2B1fIE5u%2FImqBkg099AKuR%2F%2F0uQeuNOU7viJcVs0mOEeG3CoHT0IBVjglGHlr9ENExr9aFXHTk6auY5vev4U%2B8vP2AKhhoeNY3kgg71vQYntiZwK1UJTDqmDMrRmWM%2FMjXA2hjjFnWPs2L92BwFHomGSzx4t72MkqT%2BRKIIZivOI1VZo1bIq6f5SRaGyKzyOWTa7B0%2BO2qk1hZQ9BFBV0p7OY%2BsS0NElmdqUBETwCaOg9rP9000pt533rNYj3TtVfjTqdTAS13F1NOdXLAu0G1LuTT%2B7rT97q9ij%2FMzT5pryCiCQ8Mpt3Jd2A7VETes6hBfpa3IYNesaZS2ZiL6Ds5%2B9PhUNDLTApMUABmZc1h12JsHteu4ZE6V7G4O%2FbuAr6smK19Ec7TAKU901XosB8kv6NEI1GTk0QUPxNM2RFmD8vAkm3UODIaEBLjX%2B3hUHvwWNBv2S0jND4Npfk3wqUF2aG0kZ72bltMj4IUOKUl6rErtQXpD2yJVIA4Csuq6YTRIJabryYSB4ZG%2FVetussbwh4SjoAWEYt0nCQq2NNpVcAjqNFlxLDju055Pd0swxNnBwQY6pgGU2%2F12Pytc11dCtfUcUsjXWJ90ejhD%2BtgDqRoVFZ4iWMm5l%2Bzxa35vpAYWu0lIk8yMsONaLBz8VeCWRj9CUD%2BVRYUi%2F28Rtz%2BIDAWZxJScfNJdzHlnWAeTEF%2Fbnh32v8mLjYvaczQN2OYeASaAXdD1StGeL%2FJc8EROhUYUZRnWOdZSKuz0ehn0DIRvxPLOSN6MVNmsZU8zPhXaakMBbsojt6c1DrKj&X-Amz-Signature=3d31a5069e135509e2d153648774fe42cabd882a23b2aaebc1017192de675d0f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXCKD6A%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGhQuJ%2FIiw1%2BCASWadPqnpqbwH%2FcvpAAToGGf0DpKut1AiBBK1TYKkZ4BBv%2BYUtI%2FW4ry8G7tibcRHe6BFTY8la8YyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdP94TY5zLHauXJg9KtwDUfE3r4cqKuGnPg5w4FJ73yeXcJMqp25D7O10XDHn4rXK9C7UqW4hO8pb%2FlxHDy6W%2F8dgJTmtDBfyAvqIt04U8LRHGsshIkhxgWlN%2FxruM4if7EVH6NUVvLOGEU5e90y4cA4Q1iyopsvUgMwB3FjZil2h1N1UC33RCtwlX7ua3GwVTpSI6rzT82mDEBZLVyWDlGz699qbJcoB5fh4dthTyKuCAkhZtUOrlkAIc9Wpbueb1LX9LSIgvQIJq%2FF5CoNXSIFhk4FIhBF24sED%2Buo6pBOmJ0xOirQy9mim08y1lqVfSZ97VGbn9tMX%2BEpWWeptCp2bJGktzPZbXDdNtR1nqbPv3t%2BCOlKx1pzHMSR4CnGGS5tPM5EUYYNt2DffPk%2B2FYkrpnatZsqvJyGnyQKALPay1fwQhicDTnrK6fZYEtIaH%2Flrlj4ofd3%2BjLH0ig6SRGVBupQ2o2oHM6e%2BDer%2F7JjtS16dc3jxLDnldKPmykZFeMS48uyaPfketlp3gPUIcRflMOgPRAMWIi0pdgIf4%2Bt8tfcnMswkuwT5qVqPxjnZas%2Bjy0UtTzdbht3WMrL%2F%2F7AMde9Aj9kTPiBFf4ShfTqY9PSdg9yBwPLqSJut9qxlhUahLvtbF%2FY%2Bi%2FswmNjBwQY6pgGSCFEh7vBpmPuA62K3yZKqQ%2Bw1ZlWunLNM3oZesWpVownAYyHWQNDB4ZUKhUT8ISBZTYOvV6YN9fk4qsb2gN8jITlyL2Ff8na3MnQafLTDSWnfbF%2FXVTsP%2B%2FIXQiFjrtE6DP1MI52ejVqrp%2BfhlHQPH5YNAryCkTKNkbD6kYAmsA5RC%2FVWNKjH6iwbuDB5cHr6O9oz%2FgNTaGzW5rvu%2BwPUh2X2Pcq5&X-Amz-Signature=3358837e954d2919e4e1b623935636830773cf15f1627abbe5a7a80837fea684&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7IPI7VI%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDqPvLC0CZnht9ErE0%2BUL5Md%2FdTWDEjlRgqtClfj8tP%2BQIhAJZFk%2BJnDPHJCGB00qBuq917XxhMuueCYlyZef8FjnsDKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCfLKagPae2s1DmuUq3AOmFjbHPL9kIwNouSsPEDdaw3MZENJJytqsCvqeXwVACpnundaELjWfn1KVJMhhtH%2FK9oLCbHP0qmyCvcHfoIVKPBBU%2BTvVem3IV3PXh3gaGwO3z4SjtDUEg74G8b7RfNS8u8MrhfV5kKz7DM85buWK7uyRgkI%2BME%2F3F76EEOXWlWfTFEQoJFofT4RRuA3AwRywmGXh1s%2BRZfWRRTCf58zsYA6%2BqJi1SGnU6ypMhaxmDpu0JcEscFyrM%2FeVxoOPnVhzJ1YQAlF%2BXuwLF2v9asMnFH%2FR7BOGRLCqv5ZJ%2BI%2FSkVex7VPBTOXXKe8d%2BtWxqXo3K9Ap5yRDpg6dqkjqDe8do6ztITIhSrCfmADUFUFqhenQ5Zrwqf3nUTzREDWncgr1TApSheVhsKiw1SHNTKF%2BpQTVtmI4Kx3nNU801jcq5k5l3jRLqWV2znsHCDsyNgDrZ%2FhB9eicmp%2BclF1RenS3Rb0v%2F7TIq783tFJ60L8He%2F3ENyYJxtl3FpmYPvKehvuN3tEnmCaWnFUaiHbKYkwDJ%2FrfB0Avjn620k6jV4PRP4BOJZ5a1UHxPbWqWr1mYAu9V8XeTdVp9bpAzQycPsrEn9FQg9sOg%2BeimRH3MsAmLlYe3Wkk4ZWZaHIdnTCu2cHBBjqkAYvu0%2B9MwZqGMoIN3eVMIyzOhC8%2Fm16YjTDwZHA3A0cNAJwMcIr8a4iO2Xuz2gmKP906cs2A7gOKV3iKo0G1aPmLzEeYLTOrajfjaE4XxbjUSm2va2ebQTYgD035A3CQ44ukRYt8piuCSs%2BbvqN1b44QpufuAcAdKQ4812%2Fv7b3yaxyvi13qNc4QbZlttifIPfmgigDIkYuu97xOjT%2F%2FqyBoJC8K&X-Amz-Signature=7f37d9224c9971a8bd15ae35536a1ab9392c7f358376fca5cbc792f9398c5264&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGUP45B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIBvDLoSYTD7frUUjNsGvIlCtSHb9SYCTEKw7e8%2Blt9HjAiBrhbypcCMHpMhvLyU6VD%2BoVEUWEqi7IXP%2FMsjyhNcUNCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPubjf2AhHY4g%2B2ZaKtwD9m0hFV0%2FXEHCSmoS1zc8POgOVjZKGHA0QS5joeNCXV7iLC4BAihrh%2BkJuQKjkK%2B1fIE5u%2FImqBkg099AKuR%2F%2F0uQeuNOU7viJcVs0mOEeG3CoHT0IBVjglGHlr9ENExr9aFXHTk6auY5vev4U%2B8vP2AKhhoeNY3kgg71vQYntiZwK1UJTDqmDMrRmWM%2FMjXA2hjjFnWPs2L92BwFHomGSzx4t72MkqT%2BRKIIZivOI1VZo1bIq6f5SRaGyKzyOWTa7B0%2BO2qk1hZQ9BFBV0p7OY%2BsS0NElmdqUBETwCaOg9rP9000pt533rNYj3TtVfjTqdTAS13F1NOdXLAu0G1LuTT%2B7rT97q9ij%2FMzT5pryCiCQ8Mpt3Jd2A7VETes6hBfpa3IYNesaZS2ZiL6Ds5%2B9PhUNDLTApMUABmZc1h12JsHteu4ZE6V7G4O%2FbuAr6smK19Ec7TAKU901XosB8kv6NEI1GTk0QUPxNM2RFmD8vAkm3UODIaEBLjX%2B3hUHvwWNBv2S0jND4Npfk3wqUF2aG0kZ72bltMj4IUOKUl6rErtQXpD2yJVIA4Csuq6YTRIJabryYSB4ZG%2FVetussbwh4SjoAWEYt0nCQq2NNpVcAjqNFlxLDju055Pd0swxNnBwQY6pgGU2%2F12Pytc11dCtfUcUsjXWJ90ejhD%2BtgDqRoVFZ4iWMm5l%2Bzxa35vpAYWu0lIk8yMsONaLBz8VeCWRj9CUD%2BVRYUi%2F28Rtz%2BIDAWZxJScfNJdzHlnWAeTEF%2Fbnh32v8mLjYvaczQN2OYeASaAXdD1StGeL%2FJc8EROhUYUZRnWOdZSKuz0ehn0DIRvxPLOSN6MVNmsZU8zPhXaakMBbsojt6c1DrKj&X-Amz-Signature=6ea6a54b2dfc0bdeecd55c0cf8ffe4205e434a12de988d86c49c815167dc7d45&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
