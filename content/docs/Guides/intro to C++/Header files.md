---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

</details>



`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5QYBQY%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRAh4cXWTWSWEWWWcljQfwcZFeKU%2Fz83t4H%2F7La1TqMAiBJN%2FXHurEAJ7pQ3bUp9WUrFIy1de28qMbBhTV9WCNCuSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMliSYaEKoZ%2F%2BUzuQYKtwDwHMNLTGwR6S8%2FtmVz0dVxr1LFa9HLStIbXH567rSe6uFTOem8asUgwLVb0wfnmctHBcGznjevgbJqahsnYDKzd2FXDgmHCSDUHs4wZ87zhodh1Z2vXM98wg8Hjp5WoZUlGat3IWtz59tOYtRw0i948FumjB0RLFNNGnDkBVptAFkUZzbADtF2cDshhH7P2rcnv7uBMsCFy2EgPab2v9BPHM%2BI%2Ffd2Id7aDoHqXqQ5pRr8sbQEtkTJGMBRo8KzKKK8WjBYo7IYJ%2Bs1lKXNRR9AXtQhj%2FhhfojuMhdxLCPBaGVnxuczAleZVsqQ0dQ3%2FOoxJUv95zitjsYewn8pqzTP6ObX4epGKexoTuHADIGKRLYcxplhjEsYlNp%2F8gA%2Bh2B%2B2OH1In%2BzNN8AdV%2FE3XF%2BdPHnhbeyr1cgkWR3K8dTn%2BetWAuV%2FDxlVKXfRt2Cb4WG6IHE7X141T2ZaZq94PwR2VA2NKKvgSE%2BemwcDNh%2FjlT7SEheSlYeJEf8OsVls9w7pICB8z%2FbLUT6wllfC2DqmnDJeUPJqd%2B36dgafqm7pucjsJAgKuKjkqqtHvLugP%2FhMmeS9Ce4HCL%2FpefiueHV36HBI8E1iV2W9PSR6I9DaU%2BzmVwDRWzzMFRY80w1q2NygY6pgFf2oFXUd33y%2F3%2Bg%2B7n23Gx4sbe6eW5OmZuwQey5dFdT7%2BFSPnNzEfHawb8tozmC9V7EfE3X7Z6oslK8pkJvS0yuQNR9FKx57UkagBAau2NB8KZfvP2hrgnkq%2FnkOeWAzb2ap0lOS%2BDsUBSqAYYQoeh9xktg3dJ4%2Bgok8rnxTuSZDVeNwNHbrUfVg0iLBPA4o5pTRilpTkjelN9shh3J%2FnMnjsx5N7V&X-Amz-Signature=c8088dfcb2f90a0fd775ff83e1fc0475268a6423582d72716b890c45b1c53a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
