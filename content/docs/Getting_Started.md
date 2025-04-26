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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZYZKRL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAZBzplO4LzqKVRQjf9WVzRp6eBOKmdVN9CH%2F6j9f29AiEA8%2FKSFYfMM7k69iloFWPU0IQeAIAUpyXRozB7Tatz8z0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOGEUL1BredHZWbDACrcA1vETm6O2qYuFNG%2FbitvQCrdNd3dHTSK0Cz5Dn7yU%2B7EZqK12ArwgNnMMtOlTZuPuxMTVnG6NQK7KOuDTSK8lHiUiFBWgSjNIjIc2JtL8%2BQrc8FRTTJILrlZsWMqTLRGwH0oPQsnPke2sIOrFc4At3LOYJgoLejCHxHeaVf13Qdxlt%2Fiq66ENWBk9%2F3eID0IhJUj1f9od%2Fc%2BlORhfs4imgeKQ%2FhD7JMWOWS%2FG98AUdMKqB7%2BKmazAMYXOHU3Vj3dlqFiML%2FqsoI%2BEytymLRnK%2Bq4oCxMMRMWurs%2FCKWhO7OmYXoGRanAsxmeSwm49edAaP%2FrxjIbtE%2B5XZ3VcqilgtzZS8UaFvcaEOZoXL46h7%2F3bG3Dc9qQ4LZayhmAWf375Lbd%2FZ4io%2F96on1HsNw0SUBJnsqL8ShIpiTYN3HnkVdQKFIPrD7GnqpS3Mb8PjeJc3%2BkzPMHO8U%2FgTqYZ6jm%2FnE0YNwtWdcPHKL3bV0EUR5Fnu1R7gXW%2FaGCTQX6jPWIqhvu4HpGY86TjpObEHNLlZeNF0ovN2pASpjtDH1avv4jVyh3vlE6KihQUprQCJyXVFwnsCpKE3eoyrUMKRM9dXBFT8eMrNqilSoK1OjI7%2Fv70tzae8V5gPjtgOfPMIz0sMAGOqUBhhjo95wVagMoukfyPF4gLGNnXzqx%2B5E%2B3LWlW%2Bj9B9VPGKPEs68DTsNEVjvfuMAp3vUZuIE8YCknJDLceRGMG4J4saH%2FQRXZNbutvSMOGX2KDTIknFSaHVQiUumodGATG%2FELbplTNizS%2B1oivUqlZL2N21RCOWVBcmMGaSoRzLvAd8FWPyY7nXa8YsXk8WheJGa5rr1aCsx9bBFUV2Kz%2Fag93uII&X-Amz-Signature=03ee8a2ed0031f79a29a7cca9ae5caab2d4c6151d8eab508fc690bca3e2beba9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZYZKRL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAZBzplO4LzqKVRQjf9WVzRp6eBOKmdVN9CH%2F6j9f29AiEA8%2FKSFYfMM7k69iloFWPU0IQeAIAUpyXRozB7Tatz8z0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOGEUL1BredHZWbDACrcA1vETm6O2qYuFNG%2FbitvQCrdNd3dHTSK0Cz5Dn7yU%2B7EZqK12ArwgNnMMtOlTZuPuxMTVnG6NQK7KOuDTSK8lHiUiFBWgSjNIjIc2JtL8%2BQrc8FRTTJILrlZsWMqTLRGwH0oPQsnPke2sIOrFc4At3LOYJgoLejCHxHeaVf13Qdxlt%2Fiq66ENWBk9%2F3eID0IhJUj1f9od%2Fc%2BlORhfs4imgeKQ%2FhD7JMWOWS%2FG98AUdMKqB7%2BKmazAMYXOHU3Vj3dlqFiML%2FqsoI%2BEytymLRnK%2Bq4oCxMMRMWurs%2FCKWhO7OmYXoGRanAsxmeSwm49edAaP%2FrxjIbtE%2B5XZ3VcqilgtzZS8UaFvcaEOZoXL46h7%2F3bG3Dc9qQ4LZayhmAWf375Lbd%2FZ4io%2F96on1HsNw0SUBJnsqL8ShIpiTYN3HnkVdQKFIPrD7GnqpS3Mb8PjeJc3%2BkzPMHO8U%2FgTqYZ6jm%2FnE0YNwtWdcPHKL3bV0EUR5Fnu1R7gXW%2FaGCTQX6jPWIqhvu4HpGY86TjpObEHNLlZeNF0ovN2pASpjtDH1avv4jVyh3vlE6KihQUprQCJyXVFwnsCpKE3eoyrUMKRM9dXBFT8eMrNqilSoK1OjI7%2Fv70tzae8V5gPjtgOfPMIz0sMAGOqUBhhjo95wVagMoukfyPF4gLGNnXzqx%2B5E%2B3LWlW%2Bj9B9VPGKPEs68DTsNEVjvfuMAp3vUZuIE8YCknJDLceRGMG4J4saH%2FQRXZNbutvSMOGX2KDTIknFSaHVQiUumodGATG%2FELbplTNizS%2B1oivUqlZL2N21RCOWVBcmMGaSoRzLvAd8FWPyY7nXa8YsXk8WheJGa5rr1aCsx9bBFUV2Kz%2Fag93uII&X-Amz-Signature=fbdeb40059bfd05234f60286c20cc2fab6f8f8d315fc36dd90b4bdadce06fd12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBSVJGN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtrUPiJe37yMex2hpd1Zhd0P%2FjGkt4s3n2m7qJW3WeeAiEAwa54HA9HulR3hPSHPxyuuKesZJhMyumOI8GVllrm5Jsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJSEdsyDxauHsRDMkSrcA8toTcBC51z9jEShC3cfsIA8j%2BNTwvn4Hfaf4zAqG86t4TNahyWOfQzpMjHJy%2BHonyyDIKcxcaoLRkv5jK0zkKeSMY24g3KcizE8uAK9QJHCcn21VeMemsjZTsyKpBJ%2BHneNTM4layQ1CCDIewjaHqQxDcPU%2B%2FXr45%2FJR%2BHXvwMzL3duWr1sBLEKZfowbUEzXHCLt43HunJ%2Brgv3rtaws4Tnbefl%2BvB%2BFuveD9KDGwB7%2Fu7OwEfNJu9MJOu99cOPGoXihmaBiYtXVV2Dx7FA9GBgHENh1wWdh7dT3t2W27ZGowe3LGfne0Itu5lCOQEtmstQ0pH0RLsXJPGhDyYmGvVCmr%2BC1kPkjRfhMEqBmHGlgCIpca%2F4dxzXTTTTXQ%2FGD5XP%2F22G1caRO8EGPtku6LSrmpKp%2B79v86j%2FSNs4eQqyGQucwM%2Bjav5kJ6jS14F%2BQemdk6P4kN7ZHlCrHbpAQrMMz%2B%2BwxcpY7%2FQuEiI%2F1Nu2Bt73sJXrOveNTF%2BDuqr46lWGyb4x2cmb%2BVVcRk4TLEWelAx1PTSrcekOmbfrEuHU3rQ0l2PbfEnzd3USxwRl8%2B4EP5lWBq7iUTllIDC9MOm2CfQuIKI3L%2BLa5pYG%2FCAW5N1eOwKUc5JEhuSlMJX0sMAGOqUBdCJGnExxd%2BuPfwyV4VXVt8Zl0a%2FOUL%2FXqQ8HHXA5ZePpd74nCnmDBpF7WPzr3pH4ZZ3BPRhTPeCBBjKH49lzxjWKaeEcnS8UnpfjNgqabbH9rK%2F5JlCwqY0j%2FT1YF2IoQxbqYCaAM4TVpdoYBBx5ndnwWH3XgYWn%2BNONjJ9BkWGphChQRpTe3xUUB9nN0txpQQ1NSIdP75rYwv%2FHM%2FYy4RwJv6OF&X-Amz-Signature=950d629b89fa161cbdfe874312de2d8d0ef821952876c69622cb8842a74f4da0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ELAYODI%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxgZqiyP2K3LFzAWaqjwmq%2FH3mvG%2BZk7l%2BNfvHOwjGtgIgBjfK19Yfd%2B%2BW9yL7%2BSgQoi5Ljy8c2abeAo2jJvP6eWwq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCtZIn0GGlWtfQ98aCrcAxy3JXIKBjYbBBRhomBbEM%2BmnG2lvLGSfi258%2BzVJ%2BI9KH25Unptjhar%2FqLsFdanOg4Nd67qUWg%2F2WMblTCwgNs%2Bz%2FS2H3M8AILdbqEOms46sne%2FoZa%2FcG45xKzxUMkAmfDwBXimf%2FU0h1LP6OG9Q8M5Y9bQB3iJfsZW9PuvtJnJ%2Bz%2BHI34%2FcpnDoI3Twpxmu3Ks0mBMX5bVHBZWmTg8o9tgVY%2BuSlSAzuC%2F3lLwQnqikWr0ADWf8SHeCXHF%2Ba%2FLSNfRpnXoUbOyAALdYsG2Gs5sEf779H3741WvVJ1qrChuRnUwwayKoICxkT%2BepOO%2FQ0VsaeAO%2FA78ZNjqlmkQV55laVSGGy09rWjtpjHXxqKRZ70zpEMIZ5LdRuMlzFk7Ry0opwpHj9M4PQgu8fHNBHH5%2FfUzegfKCEoYFI1uOGbgM4STvefnzlScN4z6ntnU7Df7wiULKfr%2Beuwgt2LpdTIoeOaXHCMtF4PgfXhZxcZNi6ifiDbFmy%2BUDxhoA%2BW0y3RlygMvOOu8R3bVGQvXwtI0IcwQjxz45fv3A5VMbsEZinMhnqPiHWTqSx48YyJdeK109L7qOKv8p4GhaHkDBAYU3bR6XBbMaCxgUolwv77RhP490yE7alw3x64YMOXzsMAGOqUB2Zcr3z3okJvKN7DAfmplaut86JV%2FkF29vBNKbl4Ljqm8aNrHikYkr49MJCKOOsJ9CcnevHFNrYqPYOt0VOpI6gw%2F0EtENdPYREOGPUhXbbGTlDEnXSCRQDDSNp4jfHiPMSNSCyKy0akrwgx8r1WSfdze8zfUYAUmZR0HKDJ2H71atNVxYOBparnOeypheU7rFb5oT5AN7eo4q1dN2JXeITDseDko&X-Amz-Signature=56ae248bf0e306678d23acf05d3534454dc1a7d871fba175e9f381cd17939928&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZYZKRL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAZBzplO4LzqKVRQjf9WVzRp6eBOKmdVN9CH%2F6j9f29AiEA8%2FKSFYfMM7k69iloFWPU0IQeAIAUpyXRozB7Tatz8z0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOGEUL1BredHZWbDACrcA1vETm6O2qYuFNG%2FbitvQCrdNd3dHTSK0Cz5Dn7yU%2B7EZqK12ArwgNnMMtOlTZuPuxMTVnG6NQK7KOuDTSK8lHiUiFBWgSjNIjIc2JtL8%2BQrc8FRTTJILrlZsWMqTLRGwH0oPQsnPke2sIOrFc4At3LOYJgoLejCHxHeaVf13Qdxlt%2Fiq66ENWBk9%2F3eID0IhJUj1f9od%2Fc%2BlORhfs4imgeKQ%2FhD7JMWOWS%2FG98AUdMKqB7%2BKmazAMYXOHU3Vj3dlqFiML%2FqsoI%2BEytymLRnK%2Bq4oCxMMRMWurs%2FCKWhO7OmYXoGRanAsxmeSwm49edAaP%2FrxjIbtE%2B5XZ3VcqilgtzZS8UaFvcaEOZoXL46h7%2F3bG3Dc9qQ4LZayhmAWf375Lbd%2FZ4io%2F96on1HsNw0SUBJnsqL8ShIpiTYN3HnkVdQKFIPrD7GnqpS3Mb8PjeJc3%2BkzPMHO8U%2FgTqYZ6jm%2FnE0YNwtWdcPHKL3bV0EUR5Fnu1R7gXW%2FaGCTQX6jPWIqhvu4HpGY86TjpObEHNLlZeNF0ovN2pASpjtDH1avv4jVyh3vlE6KihQUprQCJyXVFwnsCpKE3eoyrUMKRM9dXBFT8eMrNqilSoK1OjI7%2Fv70tzae8V5gPjtgOfPMIz0sMAGOqUBhhjo95wVagMoukfyPF4gLGNnXzqx%2B5E%2B3LWlW%2Bj9B9VPGKPEs68DTsNEVjvfuMAp3vUZuIE8YCknJDLceRGMG4J4saH%2FQRXZNbutvSMOGX2KDTIknFSaHVQiUumodGATG%2FELbplTNizS%2B1oivUqlZL2N21RCOWVBcmMGaSoRzLvAd8FWPyY7nXa8YsXk8WheJGa5rr1aCsx9bBFUV2Kz%2Fag93uII&X-Amz-Signature=0fbc2e9572f96f3d6729f3158dd37d889e5c11d14eca1805470923016dec18cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
