---
title: "docs"
date: "2024-04-12T01:39:00.000Z"
lastmod: "2024-04-12T03:23:00.000Z"
draft: false
authors:
  - "Anthony"
NOTION_METADATA:
  object: "page"
  id: "9ea1c46a-a671-4efa-8170-3dd7b6b0dde4"
  created_time: "2024-04-12T01:39:00.000Z"
  last_edited_time: "2024-04-12T03:23:00.000Z"
  created_by:
    object: "user"
    id: "cc316fcb-e2f0-4d4c-981c-86b25a1557b0"
  last_edited_by:
    object: "user"
    id: "cc316fcb-e2f0-4d4c-981c-86b25a1557b0"
  cover: null
  icon: null
  parent:
    type: "page_id"
    page_id: "b8021849-5f10-4306-8619-bee49b1af3a0"
  archived: false
  in_trash: false
  properties:
    title:
      id: "title"
      type: "title"
      title:
        - type: "text"
          text:
            content: "docs"
            link: null
          annotations:
            bold: false
            italic: false
            strikethrough: false
            underline: false
            code: false
            color: "default"
          plain_text: "docs"
          href: null
  url: "https://www.notion.so/docs-9ea1c46aa6714efa81703dd7b6b0dde4"
  public_url: null
  request_id: "3299016f-0945-42ac-be61-ba22ae38153a"
UPDATE_TIME: "2024-04-12T03:41:52.802Z"

---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css" integrity="sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X" crossorigin="anonymous">


### Pages


[Guides](8e813be4-49df-437d-aa70-d21f37805904)


	[Other Examples](3078aa57-1290-4719-9475-2835ca8f4dfb)


		---


		## weight: 170
		title: "Other_Examples"
		description: ""
		icon: "article"
		date: "2023-11-30T17:48:01-05:00"
		lastmod: "2023-11-30T17:48:01-05:00"
		draft: false
		toc: true


		There are other examples in each submodule


		official pico docs
		[pico-sdk][([https://www.raspberrypi.com/documentation/pico-sdk/examples_page.html](https://www.raspberrypi.com/documentation/pico-sdk/examples_page.html))


		pico examples repo:

		- [pico-examples](https://github.com/raspberrypi/pico-examples)

		sd card stuff:

		- [simple_example](https://github.com/carlk3/no-OS-FatFS-SD-SPI-RPi-Pico/tree/master/simple_example)
		- [example](https://github.com/carlk3/no-OS-FatFS-SD-SPI-RPi-Pico/tree/master/example)

		can2040:

		- [API](https://github.com/KevinOConnor/can2040/blob/master/docs/API.md)

		pico-arduino-compat demo

		- [retroTerm](https://github.com/ncmreynolds/retroTerm/tree/main/examples/Example04_singleButton)
		- [way to run arduino lib](https://github.com/fhdm-dev/pico-arduino-compat)

[Getting Started](d09ea26f-13a1-48c7-b9b8-fb4dcee4afc3)


	---


	## weight: 001
	title: "Getting Started"
	description: ""
	icon: "rocket_launch"
	date: "2023-11-30T17:01:55-05:00"
	lastmod: "2023-11-30T17:01:55-05:00"
	draft: false
	toc: true


	## Install


	{{< tabs tabTotal="4">}}
	{{% tab tabName="Windows" %}}


	Download and run: [rm-pico-installer](https://github.com/agmui/sample_rm_pico_app/blob/main/windows_install.exe)


	It automatically installs all the tools and vscode.


	### Zadig install


	TODO: add zadig install guide


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


	![](images/install_plugins.png)


	If not just type `@recommended` here


	![](images/recommended.png)


	## Uploading


	{{< alert context="info" text="Make sure the pico is **pluged in**" />}}


	{{< tabs tabTotal="3">}}
	{{% tab tabName="Method 1" %}}


	### Step1:


	select kit


	![](images/noKitBtn.png)


	![](images/armKit.png)


	### Step2:


	press `CTRL + SHIFT + B`


	### Step3:


	select the usb port the pico is plugged in it should look like this:


	![](images/serial_monitor.png)


	then hit **Start Monitoring**


	{{% alert context="warning" %}}
	<details>
	<summary>The pico did not show up?</summary>

	- is the pico plugged in!?

		plugin then re press `CTRL + SHIFT + B`

	- **(Windows users)** did you install the [Zidag drivers](https://www.notion.so/docs-9ea1c46aa6714efa81703dd7b6b0dde4?p=d09ea26f13a148c7b9b8fb4dcee4afc3&showMoveTo=true#zadig-install)
	</details>
	{{% /alert %}}

	{{% /tab %}}
	{{% tab tabName="Method 2" %}}


	{{< alert context="warning" text="run in project **root**" />}}


	Manual build


	```shell
	mkdir build
	cd build
	cmake ..
	make -j4
	picotool load -f pico_app.uf2
	
	```


	{{% /tab %}}
	{{% tab tabName="Reset pico (If all else fails)" %}}


	### Reset pico


	```shell
	mkdir build
	cd build
	cmake ..
	make -j4
	
	```


	unplug the pico


	Hold the bootsel button on the pico


	![](images/bootsel.png)


	while still holding the button plug the pico back in


	A usb stick should pop up in your file explorer


	TODO: add pic


	drag and drop the


	```text
	pico_app.u2f
	```


	file in the build folder


	![](images/copy_uf2_over.png)


	{{% /tab %}}
	{{< /tabs >}}


	## Running in [Wokwi](https://wokwi.com/) 👀


	{{< alert icon="🤯 " text=" **No pico no problem!** We can just **simulate** it: [setup guide](https://www.notion.so/Wokwi/Set_up.md) "/>}}


	## Building


	{{< tabs tabTotal="2">}}
	{{% tab tabName="Method 1" %}}
	Just press `f7` **if** you installed all [plugins](https://www.notion.so/docs-9ea1c46aa6714efa81703dd7b6b0dde4?p=d09ea26f13a148c7b9b8fb4dcee4afc3&showMoveTo=true#vscode-extensions)


	{{% /tab %}}
	{{% tab tabName="Method 2" %}}


	run:


	```shell
	mkdir build
	cd build
	cmake ..
	make -j4
	
	```


	{{% /tab %}}
	{{< /tabs >}}


	## I borked my pico


	If the pico bricks you **CAN'T** just use `CTRL + SHIFT + B` you have to [reset](https://www.notion.so/docs-9ea1c46aa6714efa81703dd7b6b0dde4?p=d09ea26f13a148c7b9b8fb4dcee4afc3&showMoveTo=true#uploading) it or do [Method 2](https://www.notion.so/docs-9ea1c46aa6714efa81703dd7b6b0dde4?p=d09ea26f13a148c7b9b8fb4dcee4afc3&showMoveTo=true#uploading)


	slides install guide: [https://docs.google.com/presentation/d/1am9qFasZtjAnBu1M_k-8S4nNLxHHzSmExr1Sa2NGVAE/edit?usp=sharing](https://docs.google.com/presentation/d/1am9qFasZtjAnBu1M_k-8S4nNLxHHzSmExr1Sa2NGVAE/edit?usp=sharing)


	### Compiling example folder files TODO: maybe make own page


	You can either compile the files in the examples folder or just copy the code form the guides and paste it in main.cpp


	## [Get Started coding on the pico Basic C++ tutorial](https://www.notion.so/Guides/pico_basics/C++_basics.md)

