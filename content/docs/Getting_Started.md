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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXRBIXX7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVkcndDvAKVqofgbsdWHfncDpwYzFvM5fIHT6mdvgOxwIgKOHcDvPC%2BrcNzfGyI7Zrb6aSnma5FSkifPqX2V3bgGAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPl1s3PSMYQOdIjVFircA7M2zmmSG9D7TduQRqYVsrdQ7Rjs6pbjTgUIys4e%2FSEuDMpLeB1VU9vabOyDm4kTOfKlV7neMjxzJXxP%2FbOxA4HH5eQbCp64HaH1RuERgady%2BRZSINw3VW5u9Zkn5GWZcDPUtoGYVx1QR87hQk3%2Bw1Aprd9Cis7TTH8Gsd%2FIaJ7llFvRVQ93eewZvB5VyUAcCoXnNR6nvErEsEM865GvUKWJ0H9KPGRoWeUGdmj%2FZH%2FQGZo9QLAzjlEhUS964%2FnNPQldwT3Vj2uA317aA%2Fr3G51ozuJrMsSYaSDD5XL%2Bb%2BCnVQrlsK7FuztYhpkP9Wir25itb0KSoynQxqyFloPB%2BWTp6Y3t5l1gHSYVrrtjl5e%2BnXluHgLGwxBRFUGXJeJZ1maUYRj3SquYp%2BG2S%2FRiBL8DbXmOcgG%2B2fDDCAAU2x98bOowGRRMBgYgIOS1ThnGFprooJeW46qIdJXQMGqc9oytm%2BCP0VyYKamg%2BojmKg5uRLj0PMfVDorhO9%2BrXzPkfORhVtlPJGy4m5Z4ImPiJdVq9%2F%2BifGh7OG10dG7zYmLrwAZmEe46rWO%2BHnfLuJXr0zQD4ColYOyzO0MhD9JrfRs0c%2BkvPkYK8tc3ova0HVhb8gWnTbuwRJC7S6xQMNGfnsIGOqUBS%2F1D10%2B%2BWtyBnr5cq3HGPCAoxc1fti1%2FqcJhjEWjDFR2%2BU7RP4PTXYCaKoJtNAxZpb5rlc%2BwhhJL4Ka0YduBOO%2BOjs3cLgOTObKVUBHROeRGObs8XMMxPrlplBRAf4u%2F0jy5NLD9Os7PM%2F1vNqdP%2Fy9uHgTy%2FKGUZZITtsOV2zxVlPDW%2FBydcS8OAmz5NVHWIoPVl5%2FJQ%2BKHHRr4spAjlNnyxzBV&X-Amz-Signature=e43732331d3d5933be4bdb06117c14c9b045cd2612ce8eac1bb0a7a8098b3490&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXRBIXX7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVkcndDvAKVqofgbsdWHfncDpwYzFvM5fIHT6mdvgOxwIgKOHcDvPC%2BrcNzfGyI7Zrb6aSnma5FSkifPqX2V3bgGAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPl1s3PSMYQOdIjVFircA7M2zmmSG9D7TduQRqYVsrdQ7Rjs6pbjTgUIys4e%2FSEuDMpLeB1VU9vabOyDm4kTOfKlV7neMjxzJXxP%2FbOxA4HH5eQbCp64HaH1RuERgady%2BRZSINw3VW5u9Zkn5GWZcDPUtoGYVx1QR87hQk3%2Bw1Aprd9Cis7TTH8Gsd%2FIaJ7llFvRVQ93eewZvB5VyUAcCoXnNR6nvErEsEM865GvUKWJ0H9KPGRoWeUGdmj%2FZH%2FQGZo9QLAzjlEhUS964%2FnNPQldwT3Vj2uA317aA%2Fr3G51ozuJrMsSYaSDD5XL%2Bb%2BCnVQrlsK7FuztYhpkP9Wir25itb0KSoynQxqyFloPB%2BWTp6Y3t5l1gHSYVrrtjl5e%2BnXluHgLGwxBRFUGXJeJZ1maUYRj3SquYp%2BG2S%2FRiBL8DbXmOcgG%2B2fDDCAAU2x98bOowGRRMBgYgIOS1ThnGFprooJeW46qIdJXQMGqc9oytm%2BCP0VyYKamg%2BojmKg5uRLj0PMfVDorhO9%2BrXzPkfORhVtlPJGy4m5Z4ImPiJdVq9%2F%2BifGh7OG10dG7zYmLrwAZmEe46rWO%2BHnfLuJXr0zQD4ColYOyzO0MhD9JrfRs0c%2BkvPkYK8tc3ova0HVhb8gWnTbuwRJC7S6xQMNGfnsIGOqUBS%2F1D10%2B%2BWtyBnr5cq3HGPCAoxc1fti1%2FqcJhjEWjDFR2%2BU7RP4PTXYCaKoJtNAxZpb5rlc%2BwhhJL4Ka0YduBOO%2BOjs3cLgOTObKVUBHROeRGObs8XMMxPrlplBRAf4u%2F0jy5NLD9Os7PM%2F1vNqdP%2Fy9uHgTy%2FKGUZZITtsOV2zxVlPDW%2FBydcS8OAmz5NVHWIoPVl5%2FJQ%2BKHHRr4spAjlNnyxzBV&X-Amz-Signature=13ccf551cb9108b32d5cc26e752fc7eec5de4abe32664d6af4c1f50537fdbc6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXRBIXX7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVkcndDvAKVqofgbsdWHfncDpwYzFvM5fIHT6mdvgOxwIgKOHcDvPC%2BrcNzfGyI7Zrb6aSnma5FSkifPqX2V3bgGAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPl1s3PSMYQOdIjVFircA7M2zmmSG9D7TduQRqYVsrdQ7Rjs6pbjTgUIys4e%2FSEuDMpLeB1VU9vabOyDm4kTOfKlV7neMjxzJXxP%2FbOxA4HH5eQbCp64HaH1RuERgady%2BRZSINw3VW5u9Zkn5GWZcDPUtoGYVx1QR87hQk3%2Bw1Aprd9Cis7TTH8Gsd%2FIaJ7llFvRVQ93eewZvB5VyUAcCoXnNR6nvErEsEM865GvUKWJ0H9KPGRoWeUGdmj%2FZH%2FQGZo9QLAzjlEhUS964%2FnNPQldwT3Vj2uA317aA%2Fr3G51ozuJrMsSYaSDD5XL%2Bb%2BCnVQrlsK7FuztYhpkP9Wir25itb0KSoynQxqyFloPB%2BWTp6Y3t5l1gHSYVrrtjl5e%2BnXluHgLGwxBRFUGXJeJZ1maUYRj3SquYp%2BG2S%2FRiBL8DbXmOcgG%2B2fDDCAAU2x98bOowGRRMBgYgIOS1ThnGFprooJeW46qIdJXQMGqc9oytm%2BCP0VyYKamg%2BojmKg5uRLj0PMfVDorhO9%2BrXzPkfORhVtlPJGy4m5Z4ImPiJdVq9%2F%2BifGh7OG10dG7zYmLrwAZmEe46rWO%2BHnfLuJXr0zQD4ColYOyzO0MhD9JrfRs0c%2BkvPkYK8tc3ova0HVhb8gWnTbuwRJC7S6xQMNGfnsIGOqUBS%2F1D10%2B%2BWtyBnr5cq3HGPCAoxc1fti1%2FqcJhjEWjDFR2%2BU7RP4PTXYCaKoJtNAxZpb5rlc%2BwhhJL4Ka0YduBOO%2BOjs3cLgOTObKVUBHROeRGObs8XMMxPrlplBRAf4u%2F0jy5NLD9Os7PM%2F1vNqdP%2Fy9uHgTy%2FKGUZZITtsOV2zxVlPDW%2FBydcS8OAmz5NVHWIoPVl5%2FJQ%2BKHHRr4spAjlNnyxzBV&X-Amz-Signature=a2c99cfbf9b18e018dd5fd6f48fa7723bb87637d3c8bdc45bc0aacc3ceab4295&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QHCQKBK%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCQAqPYOBqOQ3JmP5jLaQS4SCTIGAEh0h3fONNuR4P%2BwIgfNdZTGbawKQsjymfhgidj%2BieseOPlQez3iMSjnhBV6IqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLndt%2BYrpZwiWfnoKCrcA8GTGDVOx7nI%2BFLhHryEN6Io2FtvNadYzhZTy1bt%2Bzk9s3H3wjUSFYSMIyd8NA7Pgc2A6nJjjUdmRrpKp4%2BHqZ%2BDuVHqQQRh8aUqi3n15BezXB9VUuovzpvTO2TVEJsmIp6xnmzIQfpOsqA2ufCiCNfK1Fx5gnJ%2FB4hdHcmsFct4jHRgEqkDjFAqX8Jqjym4K7pL6V60VJw%2BBqc4wGxJy9l4%2F%2F%2F%2FQ2TGvA2lO6OpZwtsMJv1N41111jkKvl9zcxsIMu2QKW4EAD9dGXZdXAkmxqEcJE4aqAjJMEul1UBUKmnu4J2xHGZA%2Fjo%2BfQZTBNYq0oDEWTckzAE5FPtUcm31Ok9hj2iMsVw%2BMJRB1fXlr7Y9rIVQbgklNEHBkH%2FCe6OWw6MiQAbme%2BSf4Lz0JSeDQVRBeGI9UHk3YFk%2FiTrkwswsZhS%2F%2FAKJ9KixyhVZib%2B%2BMp4Yaaarwo7%2FmNd8aXINB%2F3oA910UZyVsMZ5BUGTuP5HL%2Bf0IgQmTOJi7BqzGfvrLs0XuUuYUMChuQ0YV50kbo09G4Y4A3iKWL2zd3C%2BARo%2F73ZHbOyN7l8YU2jQ5q72T3z0CxW721zen7MHSuO1KXRUbmWjB31rD2AI%2BSiGPPq7dvHoeUjO9MJiwT0MNKfnsIGOqUBTmQE54yUX5hPzk%2Fk1%2B7CMX7IWR0rscpn75mkfnO9TxLJyBZoS2HKUb7K0tWOYXBKZj%2B%2FcBSaVvejek4gdwpFnY7uK%2BkwGMjH1x7%2BcrY3URlGV55Y1nIBShFOJKaNvkzMQAyGkZay67JYGRvaLynwPWKKDXuYXD%2FCIvLmDVe26tW2t3nYqMg5qZgdyRZ1pwXl7YJCDm5chtPpSQxldkfH4LVwssLP&X-Amz-Signature=29d24cd1fbbc4ed004d7c0d5684232e7c844e4e5e8cda25e992f3da1e76178e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5LY4ZYG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyYAAXSleD4yNUt%2Bzgnv5B7ywPoPfLqxSwr3WPASsRuAiBmeYXi5XsTvxIl%2F1E%2Fn2GKW9hEVm0kepnekW5X2D%2BXYyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVOaXpZ%2FNV3NtotWnKtwDcCAUnUSW9ax04rUYC2Sshky8oq63ip7kt3xGAHNFJLVYKXAqFcXBXrYOmQ%2Fr20L%2Fn3ITZnGBCmnhq5vXF3SSJ%2BIicy0%2B2JRlsBLrL4wv%2BkFr6jNBFXsDvV5aRneACOvyzi46ddrcSsqBfTNdX2yUuX3WPXEV2vaSXtYWtd8%2FRVi2mrHGVg9GxnOCJ9%2BBEpWvzQSjna9BUUvsWaP9h0tzxZc0JDaU9ZeBZfd%2Bd9GzGqfOLq25Tk7a7dCavg0kOCnGmt2ZQnL6asAj4zQBkoMblTXOocsMNJ%2BH5UmdFPk%2BNPmJynkSfW5%2FxCaYep2INh4hzo9phEGOsTPlKhmHsy1agEjebR4x3V7IbCSGoL7UXFKj8a%2BXCLhrtIrhmuPnwpWzlObZSZPMvmfEer174q1%2BCVAvr%2Bd8hdEW11vzrh2cmt84CX%2B6jNhSvu3Lg3x3A27nGqmVYE9DYvv7drayIj%2BedLvwArRwjgwte0NfuEXwWt9DtIaZxBCzLRggGldNOxpEO%2BT93v7gzdyxsQtq1CADsN6Ndml7aN9rF7gGEGuOD3WgWv5wwn0oieD1lemr4sgX%2FQWBqNQVHVd2mkbENZtjJAURJCwsmPPxzBFqp3O3XQRmPvZt9VSsGv5%2FZLMw3KCewgY6pgE2IHKcpQ5xbuWnsrv3zagLq62%2BQdoG3X33DXctkvlnTu1jWlkMds70JRBWpHtguFCuoFOMbZvtFQKPwAHKH3pwJy5lKUcgd8pXSIkusf3OfCeq9T9jnlVF10GM%2F6%2Bk4fo45yGJBftPfgvYDR1NP5dX2R8QoIViczLqjsmhUseVcRJoS9rzHy6hS%2BaUlN6kXSknBUqH5%2B7x0s9dEBX5%2FaX5KnB4gb7u&X-Amz-Signature=a7400e0845a08da81ed3621d0005104e2eaa11d359a41c8dba31c85d2136b41e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXRBIXX7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVkcndDvAKVqofgbsdWHfncDpwYzFvM5fIHT6mdvgOxwIgKOHcDvPC%2BrcNzfGyI7Zrb6aSnma5FSkifPqX2V3bgGAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPl1s3PSMYQOdIjVFircA7M2zmmSG9D7TduQRqYVsrdQ7Rjs6pbjTgUIys4e%2FSEuDMpLeB1VU9vabOyDm4kTOfKlV7neMjxzJXxP%2FbOxA4HH5eQbCp64HaH1RuERgady%2BRZSINw3VW5u9Zkn5GWZcDPUtoGYVx1QR87hQk3%2Bw1Aprd9Cis7TTH8Gsd%2FIaJ7llFvRVQ93eewZvB5VyUAcCoXnNR6nvErEsEM865GvUKWJ0H9KPGRoWeUGdmj%2FZH%2FQGZo9QLAzjlEhUS964%2FnNPQldwT3Vj2uA317aA%2Fr3G51ozuJrMsSYaSDD5XL%2Bb%2BCnVQrlsK7FuztYhpkP9Wir25itb0KSoynQxqyFloPB%2BWTp6Y3t5l1gHSYVrrtjl5e%2BnXluHgLGwxBRFUGXJeJZ1maUYRj3SquYp%2BG2S%2FRiBL8DbXmOcgG%2B2fDDCAAU2x98bOowGRRMBgYgIOS1ThnGFprooJeW46qIdJXQMGqc9oytm%2BCP0VyYKamg%2BojmKg5uRLj0PMfVDorhO9%2BrXzPkfORhVtlPJGy4m5Z4ImPiJdVq9%2F%2BifGh7OG10dG7zYmLrwAZmEe46rWO%2BHnfLuJXr0zQD4ColYOyzO0MhD9JrfRs0c%2BkvPkYK8tc3ova0HVhb8gWnTbuwRJC7S6xQMNGfnsIGOqUBS%2F1D10%2B%2BWtyBnr5cq3HGPCAoxc1fti1%2FqcJhjEWjDFR2%2BU7RP4PTXYCaKoJtNAxZpb5rlc%2BwhhJL4Ka0YduBOO%2BOjs3cLgOTObKVUBHROeRGObs8XMMxPrlplBRAf4u%2F0jy5NLD9Os7PM%2F1vNqdP%2Fy9uHgTy%2FKGUZZITtsOV2zxVlPDW%2FBydcS8OAmz5NVHWIoPVl5%2FJQ%2BKHHRr4spAjlNnyxzBV&X-Amz-Signature=d3c2f2717ad5efebd8c4a68aa2644280a62bfb359e8fbf35739987bdf0a40fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
